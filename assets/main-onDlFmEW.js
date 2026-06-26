import{s as z,F as qt,h as mt,j as hi,l as Xe,i as Di,k as Gi,b as qi}from"./formation-links-CEzN0rcz.js";function ni(e,{navigate:t,toast:o}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),n.classList.add("active"),document.getElementById("tab-login").style.display=n.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=n.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const n=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,s=document.getElementById("login-error");if(s.textContent="",!n||!c){s.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:l}=await z.auth.signInWithPassword({email:n,password:c});if(a.textContent="Se connecter",a.disabled=!1,l){s.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const n=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,s=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!n||!c||!s){a.textContent="Remplissez tous les champs.";return}if(c.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==s){a.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:p}=await z.auth.signUp({email:n,password:c});if(l.textContent="Créer mon compte",l.disabled=!1,p){a.textContent=p.message;return}o("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=n})}function Ri(e,{state:t,navigate:o,toast:n,refreshProfile:c}){let s="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function l(){var k;const i=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),u=((k=document.getElementById("setup-club"))==null?void 0:k.value)||"MW",f=u.trim().split(" ").filter(Boolean),g=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():u.slice(0,2).toUpperCase();i&&(i.style.background=a,i.style.borderColor=s),r&&(r.textContent=g,r.style.color=s)}document.getElementById("color1").addEventListener("input",i=>{s=i.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",i=>{a=i.target.value,document.getElementById("swatch2").style.background=a,l()});function p(i){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${i}`).classList.add("active"),document.getElementById("step-num").textContent=i,document.getElementById("progress-fill").style.width=`${Math.round(i/3*100)}%`,i===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",i.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await z.from("users").select("id").eq("pseudo",i).maybeSingle();if(u){r.textContent="Ce pseudo est déjà pris.";return}p(2)}),document.getElementById("step2-back").addEventListener("click",()=>p(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const i=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",i.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await z.from("users").select("id").eq("club_name",i).maybeSingle();if(u){r.textContent="Ce nom de club est déjà pris.";return}p(3)}),document.getElementById("step3-back").addEventListener("click",()=>p(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),f=document.getElementById("step3-finish");u.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:g}=await z.from("users").insert({id:t.user.id,pseudo:i,club_name:r,club_color1:s,club_color2:a,credits:1e4});if(g)throw g;await Ni(t.user.id),await c(),n(`Bienvenue ${i} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){u.textContent=g.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function Ni(e){const{data:t}=await z.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const o=t,n=o.filter(p=>p.job==="GK"),c=o.filter(p=>p.job!=="GK"),s=[];for(let p=0;p<5;p++){let i=[];if(p===0&&n.length>0){const r=n[Math.floor(Math.random()*n.length)];i.push(r);const u=ri([...c]).slice(0,3);i.push(...u)}else i=ri([...o]).slice(0,4);i.forEach(r=>{s.push({owner_id:e,player_id:r.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(p=>{s.push({owner_id:e,card_type:"game_changer",gc_type:p})});const l=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];s.push({owner_id:e,card_type:"formation",formation:l[Math.floor(Math.random()*l.length)]}),s.length>0&&await z.from("cards").insert(s),await z.from("users").update({first_booster_opened:!0}).eq("id",e)}function ri(e){for(let t=e.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}return e}const Oi="2026.06.26-2259";async function ai(e,{state:t,navigate:o,toast:n}){var s,a;const c=t.profile;c&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Oi}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",p=>{p.preventDefault(),o(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>o("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>o("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const p=l.dataset.action;if(p==="match-ai"){Pi(o);return}if(p==="match-random"){o("match",{matchMode:"random"});return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await z.auth.signOut(),window.location.reload()}))}function Pi(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2000",o.innerHTML=`
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
  `,document.body.appendChild(o);const n=()=>o.remove();document.getElementById("diff-cancel").addEventListener("click",n),o.addEventListener("click",c=>{c.target===o&&n()}),o.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{n(),e("match",{matchMode:c.dataset.mode})})})}const je={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function fe(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const si=["ATT","MIL","DEF","GK"];function bi(e){let t=0;const o=e.length;for(let n=0;n<o;n++)for(let c=n+1;c<o;c++){const s=e[n],a=e[c];if(!s||!a)continue;const l=s._col!=null&&a._col!=null&&s._col===a._col,p=s._col!=null&&a._col!=null&&Math.abs(s._col-a._col)===1,i=si.indexOf(s._line||s.job),r=si.indexOf(a._line||a.job),u=Math.abs(i-r)===1;if(!((s._line||s.job)===(a._line||a.job)&&p||l&&u))continue;const k=s.country_code&&a.country_code&&s.country_code===a.country_code,d=s.club_id&&a.club_id&&s.club_id===a.club_id;k&&d?t+=2:(k||d)&&(t+=1)}return t}function Rt(e,t={}){const o=e.reduce((s,a)=>{const l=a._line||a.job;return s+(Number(l==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),n=bi(e);let c=o+n;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:o,links:n,total:Math.max(0,c)}}function Nt(e,t={}){const o=e.reduce((s,a)=>{const l=a._line||a.job;let p=0;return l==="GK"?p=Number(a.note_g)||0:l==="MIL"?p=Number(a.note_m)||0:p=Number(a.note_d)||0,s+p+(a.boost||0)},0),n=bi(e);let c=o+n;return t.stolenNote&&(c-=t.stolenNote),{base:o,links:n,total:Math.max(0,c)}}function Ot(e,t,o={}){return o.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function vi(e,t,o="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const c=[...n].sort((a,l)=>{const p=t==="attack"?fe(a,"ATT"):a._line==="GK"?fe(a,"GK"):fe(a,"DEF");return(t==="attack"?fe(l,"ATT"):l._line==="GK"?fe(l,"GK"):fe(l,"DEF"))-p});let s=o==="easy"?1+Math.floor(Math.random()*2):o==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(s,c.length,3))}function Hi(e,t){const o={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(o[e]||o.vs_ai_easy)[t]||0}const wi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},$t={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},xt=["GK","DEF","MIL","ATT"],Ui=["Tous","GK","DEF","MIL","ATT"],Ki={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},Pt={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function $i(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function ut(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Mt(e,t=""){var u,f;const o=e.player;if(!o)return"";const n=o.job||"ATT",c=$t[n],s=wi[o.rarity]||"#ccc",a=ut(o,n),l=o.job2?ut(o,o.job2):null,p=o.job2?$t[o.job2]:null,i=$i(o),r=Pt[o.country_code]||o.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${s};cursor:pointer;flex-shrink:0;position:relative
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
        ${l!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${p}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${l}</text>
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${r}</div>
        ${(u=o.clubs)!=null&&u.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=o.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function li(e){const t=e.job||"ATT",o=ut(e,t),n=Pt[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${n}</div>
      </div>
    </div>
  </div>`}async function Vi(e,t){const{state:o,navigate:n,toast:c,openModal:s,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await z.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:p}=await z.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),i=(l||[]).filter(L=>L.card_type==="player"&&L.player),r=(l||[]).filter(L=>L.card_type==="game_changer"),u=(l||[]).filter(L=>L.card_type==="formation"),{data:f}=await z.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(f||[]).forEach(L=>{g[L.name]=L});const k=Object.keys(qt),d=Object.keys(je),x={};i.forEach(L=>{const v=L.player.id;x[v]=(x[v]||0)+1}),new Set(Object.keys(x).map(L=>String(L)));const w=new Set(u.map(L=>L.formation)),A=new Set(r.map(L=>L.gc_type));let S="player",D="Tous",I="",b=!1;function B(){return[...i].sort((L,v)=>{const R=xt.indexOf(L.player.job),O=xt.indexOf(v.player.job);return R!==O?R-O:(L.player.surname_encoded||"").localeCompare(v.player.surname_encoded||"")})}function X(){return[...p||[]].sort((L,v)=>{const R=xt.indexOf(L.job),O=xt.indexOf(v.job);return R!==O?R-O:(L.surname_encoded||"").localeCompare(v.surname_encoded||"")})}function re(){return B().filter(L=>{const v=L.player,R=D==="Tous"||v.job===D,O=!I||`${v.firstname} ${v.surname_encoded}`.toLowerCase().includes(I);return R&&O})}function Z(){return X().filter(L=>{const v=D==="Tous"||L.job===D,R=!I||`${L.firstname} ${L.surname_encoded}`.toLowerCase().includes(I);return v&&R})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${S==="player"?"var(--green)":"transparent"};
        color:${S==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${i.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${S==="formation"?"var(--green)":"transparent"};
        color:${S==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${S==="gc"?"var(--green)":"transparent"};
        color:${S==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function $(){const L=document.getElementById("col-filters");L&&(S==="player"?(L.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${I}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Ui.map(v=>`
            <button class="filter-btn" data-job="${v}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${v===D?"var(--green)":"var(--gray-200)"};
                background:${v===D?"var(--green)":"#fff"};
                color:${v===D?"#fff":"var(--gray-600)"}">
              ${v}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${b?"var(--yellow)":"var(--gray-200)"};
              background:${b?"var(--yellow)":"#fff"};
              color:${b?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${b?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",v=>{I=v.target.value.toLowerCase(),y()}),e.querySelectorAll(".filter-btn").forEach(v=>{v.addEventListener("click",()=>{D=v.dataset.job,$(),y()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{b=!b,$(),y()})):(L.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${b?"var(--yellow)":"var(--gray-200)"};
              background:${b?"var(--yellow)":"#fff"};
              color:${b?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${b?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{b=!b,$(),y()})))}function y(){const L=document.getElementById("col-grid");L&&(S==="player"?ee(L):S==="formation"?de(L):be(L))}function q(L,v,R,O,V){V=V||"#7a28b8";const ne=document.getElementById("col-grid"),K=document.getElementById("col-big");if(!ne||!K)return;var ve=0;function ge(){K.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+v(L[ve])+"</div>";var ue=K.querySelector("[data-card-id],[data-form-id],[data-gc-id]");ue&&ue.addEventListener("click",function(){O(L[ve])}),requestAnimationFrame(function(){var pe=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!pe||!K)){var he=K.clientHeight-8,Ee=K.clientWidth-24,Le=pe.offsetHeight,Ie=pe.offsetWidth;if(Le>0&&Ie>0&&he>40){var Ce=Math.min(he/Le,Ee/Ie,1);pe.style.transform="scale("+Ce.toFixed(3)+")",pe.style.transformOrigin="top center"}}}),ne.innerHTML=L.map(function(pe,he){return'<div class="col-mini-item" data-idx="'+he+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(he===ve?V:"transparent")+';transition:border-color .15s;overflow:hidden">'+R(pe,he===ve)+"</div>"}).join(""),ne.querySelectorAll(".col-mini-item").forEach(function(pe){pe.addEventListener("click",function(){ve=Number(pe.dataset.idx),ge(),pe.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}ge()}function G(L){var v=.54,R=Math.round(140*v),O=Math.round(310*v),V;if(!L||L._fake){var ne=L?L.player:null;if(!ne)return"";V=li(ne)}else V=Mt(L,"");return'<div style="width:'+R+"px;height:"+O+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+v+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+V+"</div></div>"}function Y(L,v,R){v=v||100,R=R||140;var O=mt[L]||{},V={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ne=Math.max(3,Math.round(v*.06)),K=Object.entries(O).map(function(ge){var ue=ge[0],pe=ge[1],he=ue.replace(/\d+$/,""),Ee=V[he]||"#888",Le=Math.round(pe.x*v),Ie=Math.round(pe.y*R);return'<circle cx="'+Le+'" cy="'+Ie+'" r="'+ne+'" fill="'+Ee+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),ve=Math.max(1,Math.round(v/50));return'<svg viewBox="0 0 '+v+" "+R+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+v+'" height="'+R+'" fill="#1A6B3C"/><rect x="'+Math.round(v*.2)+'" y="'+Math.round(R*.02)+'" width="'+Math.round(v*.6)+'" height="'+Math.round(R*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/><line x1="0" y1="'+Math.round(R*.5)+'" x2="'+v+'" y2="'+Math.round(R*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><ellipse cx="'+Math.round(v*.5)+'" cy="'+Math.round(R*.5)+'" rx="'+Math.round(v*.18)+'" ry="'+Math.round(R*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><rect x="'+Math.round(v*.2)+'" y="'+Math.round(R*.82)+'" width="'+Math.round(v*.6)+'" height="'+Math.round(R*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/>'+K+"</svg>"}function oe(L,v,R){var O=R>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+R+"</div>":"",V=v?'data-form-id="'+v.id+'"':"",ne=L.length>7?14:L.length>5?16:19,K=!!v;return"<div "+V+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(K?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(K?"":"filter:grayscale(1);opacity:0.5")+'">'+O+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(K?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ne+"px;font-weight:900;color:"+(K?"#1A6B3C":"#aaa")+';line-height:1">'+L+'</div></div><div style="flex:1;overflow:hidden;background:'+(K?"#1A6B3C":"#ccc")+'">'+Y(L,140,220)+"</div></div>"}function ae(L,v){var R=.54,O=Math.round(140*R),V=Math.round(305*R),ne=Math.round(V*.22),K=V-ne,ve=L.length>7?5:7,ge=Y(L,O,K),ue=v?"1.5px solid #2a7a40":"1px solid #ddd",pe=v?"":"filter:grayscale(1);opacity:0.45;",he=v?"#1A6B3C":"#bbb",Ee="#fff";return'<div style="width:'+O+"px;height:"+V+"px;border-radius:6px;border:"+ue+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+pe+'"><div style="height:'+ne+"px;background:"+he+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+ve+"px;font-weight:900;color:"+Ee+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(O-4)+'px">'+L+'</span></div><div style="height:'+K+'px;overflow:hidden;flex-shrink:0">'+ge+"</div></div>"}function ee(L){if(b){const v=Z();if(!v.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const R=v.map(O=>i.find(V=>V.player.id===O.id)||{_fake:!0,player:O,id:"fake-"+O.id});q(R,O=>O._fake?li(O.player):Mt(O,""),O=>O._fake?G({player:O.player,id:"x",_fake:!0}):G(O),O=>{O._fake||di(O,i,x,t)},"#1A6B3C")}else{const v=re();if(!v.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const R={},O=[];v.forEach(V=>{R[V.player.id]||(R[V.player.id]=!0,O.push(V))}),q(O,V=>{const ne=x[V.player.id]||1,K=ne>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ne}</div>`:"",ge=i.filter(ue=>ue.player.id===V.player.id&&ue.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Mt(V,K+ge)},V=>G(V),V=>di(V,i,x,t),"#1A6B3C")}}function de(L){const v=b?k:[...w];if(!v.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const R=v.map(O=>({formation:O,card:u.find(V=>V.formation===O)||null,owned:w.has(O)}));q(R,({formation:O,card:V,owned:ne})=>oe(O,ne?V:null,ne?u.filter(K=>K.formation===O).length:0),({formation:O,owned:V})=>ae(O,V),({card:O,owned:V})=>{V&&O&&Wi(O,u,t,s)},"#1A6B3C")}function be(L){const v=Object.keys(g),R=b?v.length?v:d:[...A];if(!R.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const O=R.map(V=>({type:V,gc:je[V]||{icon:"⚡",desc:""},def:g[V]||null,owned:A.has(V),card:r.find(ne=>ne.gc_type===V)||null}));q(O,({type:V,gc:ne,def:K,owned:ve,card:ge})=>{const ue=ve?r.filter(T=>T.gc_type===V).length:0,pe=ue>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ue}</div>`:"",he=(K==null?void 0:K.gc_type)==="ultra_game_changer",Ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Le={purple:"#b06ce0",light_blue:"#00d4ef"},Ie=Ee[K==null?void 0:K.color]||Ee.purple,Ce=Le[K==null?void 0:K.color]||Le.purple,m=(K==null?void 0:K.effect)||ne.desc||"",h=K!=null&&K.image_url?`/manager-wars/icons/${K.image_url}`:null;return ve&&ge?`<div data-gc-id="${ge.id}" data-gc-type="${V}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Ce};background:${Ie};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Ce}66;cursor:pointer">
          ${pe}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${V.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${V}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${he?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${h?`<img src="${h}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ne.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${m.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${V}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ne.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:V,gc:ne,def:K,owned:ve})=>ve?(()=>{const ge=Math.round(75.60000000000001),ue=Math.round(310*.54),pe=Math.round(ue*.65),he=Math.round(ue*.18),Ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Le={purple:"#9b59b6",light_blue:"#00bcd4"},Ie=Ee[K==null?void 0:K.color]||Ee.purple,Ce=Le[K==null?void 0:K.color]||Le.purple,m=K!=null&&K.image_url?`/manager-wars/icons/${K.image_url}`:null;return`<div style="width:${ge}px;height:${ue}px;border-radius:8px;background:${Ie};border:1px solid ${Ce};display:flex;flex-direction:column;overflow:hidden"><div style="height:${he}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ge-6}px">${V}</span></div><div style="height:${pe}px;display:flex;align-items:center;justify-content:center">${m?`<img src="${m}" style="max-width:${ge-8}px;max-height:${pe-4}px;object-fit:contain">`:`<span style="font-size:24px">${ne.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((K==null?void 0:K.effect)||ne.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const ge=Math.round(75.60000000000001),ue=Math.round(310*.54);return`<div style="width:${ge}px;height:${ue}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${ne.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${V}</span></div>`})(),({type:V,owned:ne,def:K})=>{ne&&Yi(V,K,s)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(L=>{L.addEventListener("click",()=>{S=L.dataset.tab,D="Tous",I="",b=!1,e.querySelectorAll(".col-tab-btn").forEach(v=>{const R=v.dataset.tab===S;v.style.borderBottomColor=R?"var(--green)":"transparent",v.style.color=R?"var(--green)":"var(--gray-600)"}),$(),y()})}),$(),y()}function Yi(e,t,o){const n=je[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,p=a[t==null?void 0:t.color]||a.purple,i=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||n.desc,u=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;o("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${p};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${i}</div>
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const dt=1e3;function Wi(e,t,o,n){var d,x,w;const{state:c,toast:s,closeModal:a,navigate:l,refreshProfile:p}=o,i=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const A=mt[i]||{},S=qt[i]||[],D=290,I=360,b=20;function B(re){const Z=A[re];return Z?{x:Z.x*D,y:Z.y*I}:null}let X=`<svg width="${D}" height="${I}" viewBox="0 0 ${D} ${I}" xmlns="http://www.w3.org/2000/svg">`;for(const[re,Z]of S){const $=B(re),y=B(Z);!$||!y||(X+=`<line x1="${$.x}" y1="${$.y}" x2="${y.x}" y2="${y.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const re of Object.keys(A)){const Z=B(re);if(!Z)continue;const $=re.replace(/\d+/,""),y=r[$]||"#555";X+=`<circle cx="${Z.x}" cy="${Z.y}" r="${b}" fill="${y}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,X+=`<text x="${Z.x}" y="${Z.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${$}</text>`}return X+="</svg>",X}const f=t.filter(A=>A.formation===i),g=f.length,k=!e.is_for_sale;n(`Formation ${i}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    ${k?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(d=document.getElementById("direct-sell-form-btn"))==null||d.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${i} pour ${dt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const A=f.find(D=>!D.is_for_sale)||f[0];if(!A){s("Aucune carte à vendre","error");return}const{error:S}=await z.from("cards").delete().eq("id",A.id);if(S){s(S.message,"error");return}await z.from("users").update({credits:(c.profile.credits||0)+dt}).eq("id",c.profile.id),await p(),s(`+${dt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),l("collection")}),(x=document.getElementById("market-sell-form-btn"))==null||x.addEventListener("click",async()=>{const A=parseInt(document.getElementById("sell-price-form").value);if(!A||A<1){s("Prix invalide","error");return}await z.from("cards").update({is_for_sale:!0,sale_price:A}).eq("id",e.id),await z.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:A}),s("Carte mise en vente sur le marché !","success"),a(),l("collection")}),(w=document.getElementById("cancel-sell-form-btn"))==null||w.addEventListener("click",async()=>{await z.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await z.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),a(),l("collection")})}async function di(e,t,o,n){var X,re,Z,$,y,q;const{state:c,toast:s,openModal:a,closeModal:l,navigate:p,refreshProfile:i}=n,r=e.player,u=t.filter(G=>G.player.id===r.id),f=u.length,g=Ki[r.rarity]||1e3,k=r.rarity!=="legende",d=$i(r),x=ut(r,r.job),w=r.job2?ut(r,r.job2):null,A=$t[r.job]||"#1A6B3C",S=r.job2?$t[r.job2]:null,D=wi[r.rarity]||"#ccc",I=Pt[r.country_code]||r.country_code||"",{data:b}=await z.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",r.id).order("transferred_at",{ascending:!0}),B=b&&b.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${b.map(G=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${G.club_name} <span style="color:var(--gray-600)">(${G.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${G.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${G.source==="booster"?"Booster":G.price?G.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";a(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${D};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${A}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${A}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${x}</text>
            </svg>
            ${w!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${S}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${w}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${d?`<img src="${d}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${I}</div>
            ${(X=r.clubs)!=null&&X.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((re=r.clubs)==null?void 0:re.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${D}">${r.rarity.toUpperCase()}</div>
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
    ${B}

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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(Z=document.getElementById("close-detail"))==null||Z.addEventListener("click",l),($=document.getElementById("direct-sell-btn"))==null||$.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${r.surname_encoded} pour ${g.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const G=u.find(oe=>!oe.is_for_sale)||u[0];if(!G){s("Aucune carte à vendre","error");return}const{error:Y}=await z.from("cards").delete().eq("id",G.id);if(Y){s(Y.message,"error");return}await z.from("users").update({credits:(c.profile.credits||0)+g}).eq("id",c.profile.id),await i(),s(`+${g.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),p("collection")}),(y=document.getElementById("market-sell-btn"))==null||y.addEventListener("click",async()=>{const G=parseInt(document.getElementById("sell-price").value);if(!G||G<1){s("Prix invalide","error");return}await z.from("cards").update({is_for_sale:!0,sale_price:G}).eq("id",e.id),await z.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:G}),s("Carte mise en vente sur le marché !","success"),l(),p("collection")}),(q=document.getElementById("cancel-sell-btn"))==null||q.addEventListener("click",async()=>{await z.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await z.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),p("collection")})}const _t={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Ye={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Tt(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function _i(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ki(e){var o;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(o=e==null?void 0:e.clubs)!=null&&o.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Xi(e,t=44,o=58){var g;const n=e?Tt(e):null,c=e?ki(e):null,s=_i(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",l=Ye[a]||"#555",p={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",i=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(o*.19),u=Math.round(o*.25),f=o-r-u;return e?`<div style="width:${t}px;height:${o}px;border-radius:5px;border:2px solid ${p};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${n?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">🌍</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${i}</span>
      ${c?`<img src="${c}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:(g=e==null?void 0:e.clubs)!=null&&g.encoded_name?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${o}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function St(e,t){const{state:o,navigate:n,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("decks").select("id,name,formation_card_id").eq("owner_id",o.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!a)return;const{data:l,error:p}=await z.from("decks").insert({owner_id:o.profile.id,name:a}).select().single();if(p){c(p.message,"error");return}c("Deck créé !","success"),ci(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>ci(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",a.dataset.name);if(!l||l===a.dataset.name)return;const{error:p}=await z.from("decks").update({name:l}).eq("id",a.dataset.rename);if(p){c(p.message,"error");return}c("Deck renommé !","success"),St(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await z.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:l}=await z.from("decks").delete().eq("id",a.dataset.delete);if(l){c(l.message,"error");return}c("Deck supprimé.","success"),St(e,t)})})}async function ci(e,t,o){const{state:n,toast:c}=o;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("decks").select("*").eq("id",e).single(),{data:a}=await z.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),l=(a||[]).filter(g=>g.card_type==="player"&&g.player),p=(a||[]).filter(g=>g.card_type==="formation"),i=p.map(g=>g.formation).filter(Boolean),{data:r}=await z.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let u=s.formation||"4-4-2";i.length>0&&!i.includes(u)&&(u=i[0]);const f={deckId:e,name:s.name,formation:u,formationCardId:s.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:p,availableFormations:i};(r||[]).forEach(g=>{g.is_starter?f.slots[g.position]=g.card_id:f.subs.includes(g.card_id)||f.subs.push(g.card_id)}),ot(t,f,o)}function ot(e,t,o){var p;const{navigate:n}=o;_t[t.formation];const c=pi(t.formation),s=c.filter(i=>t.slots[i]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(_t),l=t.subs.map(i=>t.playerCards.find(r=>r.id===i)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${l.map(i=>{const r=i.player;return`<div style="position:relative;flex-shrink:0">
            ${Xi(r,44,58)}
            <button data-remove-sub="${i.id}"
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
  </div>`,Ji(e,t,c,o),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",i=>{t.formation=i.target.value;const r=pi(t.formation),u={};r.forEach(f=>{t.slots[f]&&(u[f]=t.slots[f])}),t.slots=u,ot(e,t,o)}),document.getElementById("save-deck").addEventListener("click",()=>eo(t,o)),e.querySelectorAll("[data-remove-sub]").forEach(i=>{i.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==i.dataset.removeSub),ot(e,t,o)})}),(p=document.getElementById("add-sub-btn"))==null||p.addEventListener("click",()=>{Zi(t,e,o)})}function Ji(e,t,o,n){const c=e.querySelector("#deck-field");if(!c)return;const s=mt[t.formation]||{},a=hi(t.formation)||[],l={};for(const w of o){const A=t.slots[w],S=A?t.playerCards.find(D=>D.id===A):null;l[w]=S?S.player:null}const p=300,i=300,r=48,u=64,f=13,g=16,k=38;function d(w){const A=s[w];return A?{x:A.x*p,y:A.y*i}:null}let x="";for(const[w,A]of a){const S=d(w),D=d(A);if(!S||!D)continue;const I=l[w]?{...l[w],club_id:l[w].club_id,country_code:l[w].country_code,rarity:l[w].rarity}:null,b=l[A]?{...l[A],club_id:l[A].club_id,country_code:l[A].country_code,rarity:l[A].rarity}:null,B=Xe(I,b);B==="#ff3333"||B==="#cc2222"?x+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}" stroke="${B}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(x+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}" stroke="${B}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,x+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}" stroke="${B}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const w of o){const A=d(w);if(!A)continue;const S=l[w],D=w.replace(/\d+/,""),I=Ye[D]||"#555",b=(A.x-r/2).toFixed(1),B=(A.y-u/2).toFixed(1),X={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[S==null?void 0:S.rarity]||"#aaa";if(S){const re=Tt(S),Z=ki(S),$=_i(S.country_code),y=Number(D==="GK"?S.note_g:D==="DEF"?S.note_d:D==="MIL"?S.note_m:S.note_a)||0,q=u-f-g;x+=`<defs><clipPath id="dcp-${w}"><rect x="${b}" y="${(A.y-u/2+f).toFixed(1)}" width="${r}" height="${q}"/></clipPath></defs>`,x+=`<rect x="${b}" y="${B}" width="${r}" height="${u}" rx="5" fill="${I}"/>`,re&&(x+=`<image href="${re}" x="${b}" y="${(A.y-u/2+f).toFixed(1)}" width="${r}" height="${q}" clip-path="url(#dcp-${w})" preserveAspectRatio="xMidYMin slice"/>`),x+=`<rect x="${b}" y="${B}" width="${r}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,x+=`<text x="${A.x.toFixed(1)}" y="${(A.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(S.surname_encoded||"").slice(0,9)}</text>`;const G=(A.y+u/2-g).toFixed(1);x+=`<rect x="${b}" y="${G}" width="${r}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,$&&(x+=`<image href="${$}" x="${(A.x-21).toFixed(1)}" y="${(A.y+u/2-g+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),x+=`<text x="${A.x.toFixed(1)}" y="${(A.y+u/2-g/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${y}</text>`,Z&&(x+=`<image href="${Z}" x="${(A.x+r/2-14).toFixed(1)}" y="${(A.y+u/2-g+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),x+=`<rect x="${b}" y="${B}" width="${r}" height="${u}" rx="5" fill="none" stroke="${X}" stroke-width="2"/>`}else x+=`<rect x="${b}" y="${B}" width="${r}" height="${u}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,x+=`<text x="${A.x.toFixed(1)}" y="${A.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,x+=`<text x="${A.x.toFixed(1)}" y="${(A.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${D}</text>`;x+=`<rect x="${b}" y="${B}" width="${r}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${w}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-k} ${-k} ${p+k*2} ${i+k*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${x}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(w=>{w.addEventListener("click",()=>Qi(w.dataset.pos,t,e,n))})}function Qi(e,t,o,n){var f,g,k;const{openModal:c,closeModal:s}=n,a=e.replace(/\d+/,""),l=t.slots[e],p=l?t.playerCards.find(d=>d.id===l):null;(f=p==null?void 0:p.player)==null||f.id;const i=new Set;Object.entries(t.slots).forEach(([d,x])=>{var A;if(d===e||!x)return;const w=t.playerCards.find(S=>S.id===x);(A=w==null?void 0:w.player)!=null&&A.id&&i.add(w.player.id)}),t.subs.forEach(d=>{var w;const x=t.playerCards.find(A=>A.id===d);(w=x==null?void 0:x.player)!=null&&w.id&&i.add(x.player.id)});const r=new Set,u=t.playerCards.filter(d=>{const x=d.player;return!(x.job===a||x.job2===a)||i.has(x.id)||r.has(x.id)?!1:(r.add(x.id),!0)});u.sort((d,x)=>{const w=a==="GK"?d.player.note_g:a==="DEF"?d.player.note_d:a==="MIL"?d.player.note_m:d.player.note_a;return(a==="GK"?x.player.note_g:a==="DEF"?x.player.note_d:a==="MIL"?x.player.note_m:x.player.note_a)-w}),c(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${u.length>0?u.map(d=>{var D,I;const x=d.player,w=a==="GK"?x.note_g:a==="DEF"?x.note_d:a==="MIL"?x.note_m:x.note_a,A=Tt(x),S={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[x.rarity];return`<div class="player-option" data-card-id="${d.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Ye[a]}">
            ${A?`<img src="${A}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${Ye[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${x.firstname} ${x.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${x.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${x.country_code}">
              ${(D=x.clubs)!=null&&D.logo_url?`<img src="${x.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((I=x.clubs)==null?void 0:I.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${x.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${Ye[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${S};flex-shrink:0">
            ${w}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(g=document.getElementById("close-selector"))==null||g.addEventListener("click",s),(k=document.getElementById("remove-player"))==null||k.addEventListener("click",()=>{delete t.slots[e],s(),ot(o,t,n)}),document.querySelectorAll(".player-option").forEach(d=>{d.addEventListener("click",()=>{t.slots[e]=d.dataset.cardId,s(),ot(o,t,n)})})}function Zi(e,t,o){var p;const{openModal:n,closeModal:c}=o,s=new Set;Object.values(e.slots).filter(Boolean).forEach(i=>{var u;const r=e.playerCards.find(f=>f.id===i);(u=r==null?void 0:r.player)!=null&&u.id&&s.add(r.player.id)}),e.subs.forEach(i=>{var u;const r=e.playerCards.find(f=>f.id===i);(u=r==null?void 0:r.player)!=null&&u.id&&s.add(r.player.id)});const a=new Set,l=e.playerCards.filter(i=>{var r,u,f;return s.has((r=i.player)==null?void 0:r.id)||a.has((u=i.player)==null?void 0:u.id)?!1:(a.add((f=i.player)==null?void 0:f.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(i=>{var g;const r=i.player,u=Tt(r),f=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Ye[r.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((g=r.clubs)==null?void 0:g.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${Ye[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(p=document.getElementById("close-sub-selector"))==null||p.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(i=>{i.addEventListener("click",()=>{e.subs.push(i.dataset.cardId),c(),ot(t,e,o)})})}async function eo(e,t){const{state:o,toast:n,navigate:c}=t,s=e.formationCards.find(p=>p.formation===e.formation),a=(s==null?void 0:s.id)||e.formationCardId;await z.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await z.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([p,i],r)=>{l.push({deck_id:e.deckId,card_id:i,position:p,is_starter:!0,slot_order:r})}),e.subs.forEach((p,i)=>{l.push({deck_id:e.deckId,card_id:p,position:`SUB${i+1}`,is_starter:!1,slot_order:100+i})}),l.length>0){const{error:p}=await z.from("deck_cards").insert(l);if(p){n(p.message,"error");return}}n("Deck enregistré ✅","success"),c("decks")}function pi(e){const t=_t[e]||_t["4-4-2"],o=["GK1"];for(let n=1;n<=t.DEF;n++)o.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)o.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)o.push(`ATT${n}`);return o}async function to(){const{data:e}=await z.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await z.from("booster_drop_rates").select("*").in("booster_id",e.map(o=>o.id)).order("sort_order");return e.map(o=>({...o,rates:(t||[]).filter(n=>n.booster_id===o.id)}))}function io(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,c)=>n+Number(c.percentage),0);let o=Math.random()*t;for(const n of e)if(o-=Number(n.percentage),o<=0)return n;return e[e.length-1]}const Ei=()=>Object.keys(mt),oo=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],jt={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function no(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}const ui={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ro={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ao={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function fi(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function so(e){var r,u;const t=e.player;if(!t)return"";const o=t.job||"ATT",n=ui[o],c=ro[t.rarity]||"#ccc",s=fi(t,o),a=t.job2?fi(t,t.job2):null,l=t.job2?ui[t.job2]:null,p=no(t),i=ao[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${c};cursor:pointer;flex-shrink:0;position:relative">
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
        ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${i}</div>
        ${(r=t.clubs)!=null&&r.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((u=t.clubs)==null?void 0:u.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function lo(e){var c;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const o=((c=Object.entries(t).sort((s,a)=>a[1]-s[1])[0])==null?void 0:c[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:o,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function co(e,{state:t,navigate:o,toast:n}){var a;const c=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await to()).map(lo)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}s.length||(s=oo.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${s.map(l=>{const p=l.cost===0||c>=l.cost;return`<div class="booster-card ${p?"":"disabled"}" data-booster="${l.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${l.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${l.img}" alt="${l.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${l.name}</div>
            <div class="desc">${l.sub}</div>
            <div class="cost">${l.costLabel}</div>
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const p=s.find(i=>i.id===l.dataset.booster);if(p){l.style.opacity="0.5",l.style.pointerEvents="none";try{await po(p,{state:t,toast:n,navigate:o,container:e})}catch(i){n(i.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",p=>{p.stopPropagation();const i=s.find(r=>r.id===l.dataset.boosterId);bo(i)})})}async function po(e,{state:t,toast:o,navigate:n,container:c}){var r;if(e.cost>0&&t.profile.credits<e.cost){o("Crédits insuffisants","error");return}if(e.isPub)try{await $o()}catch(u){o(u.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:s}=await z.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((s||[]).filter(u=>u.card_type==="player").map(u=>u.player_id)),l=new Set((s||[]).filter(u=>u.card_type==="formation").map(u=>u.formation));let p=[];if((r=e.rates)!=null&&r.length)p=await gi(t.profile,e);else{const u=e.type||"player";u==="player"?p=await go(t.profile,e.cardCount,e.cost):u==="game_changer"?p=await mo(t.profile,e.cardCount,e.cost):u==="formation"?p=await xo(t.profile,e.cost):p=await gi(t.profile,e)}p.forEach(u=>{u.card_type==="player"&&u.player?u.isDuplicate=a.has(u.player.id):u.card_type==="formation"&&(u.isDuplicate=l.has(u.formation))});const{data:i}=await z.from("users").select("*").eq("id",t.profile.id).single();i&&(t.profile=i),yo(p,e,n)}function uo(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Ze(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function fo(e,t){let o;switch(t){case"legende":o=e.filter(n=>n.rarity==="legende"),o.length||(o=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),o.length||(o=e.filter(n=>Ze(n)>=6));break;case"special":o=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),o.length||(o=e.filter(n=>Ze(n)>=6));break;case"normal_high":o=e.filter(n=>n.rarity==="normal"&&Ze(n)>=6),o.length||(o=e.filter(n=>Ze(n)>=6));break;default:o=e.filter(n=>n.rarity==="normal"&&Ze(n)>=1&&Ze(n)<=5),o.length||(o=e.filter(n=>n.rarity==="normal"));break}return o.length||(o=e),o[Math.floor(Math.random()*o.length)]}async function gi(e,t){if(t.cost>0){const{error:n}=await z.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(n)throw n}const o=[];for(let n=0;n<(t.cardCount||5);n++){const c=io(t.rates);if(c){if(c.card_type==="player"){const s=f=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[f]||f,a=c.rarity?s(c.rarity):null;let l=z.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);a&&(l=l.eq("rarity",a));const{data:p}=await l;let i=p||[];if((c.note_min||c.note_max)&&(i=i.filter(f=>{const g=Math.max(Number(f.note_g)||0,Number(f.note_d)||0,Number(f.note_m)||0,Number(f.note_a)||0);return(!c.note_min||g>=c.note_min)&&(!c.note_max||g<=c.note_max)})),i.length||(c.note_min||c.note_max?(i=p||[],console.warn("[Booster] Aucun joueur avec note",c.note_min,"-",c.note_max,"— fallback rareté uniquement")):i=p||[]),!i.length)continue;const r=i[Math.floor(Math.random()*i.length)],{data:u}=await z.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();u&&(o.push({...u,player:r}),z.rpc("record_transfer",{p_card_id:u.id,p_player_id:r.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(c.card_type==="game_changer"){const{data:s}=await z.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=s!=null&&s.length?s:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],p=a[Math.floor(Math.random()*a.length)].name,{data:i}=await z.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:p}).select().single();i&&o.push(i)}else if(c.card_type==="formation"){const s=Ei(),a=s[Math.floor(Math.random()*s.length)],{data:l}=await z.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();l!=null&&l[0]&&o.push(l[0])}}}return o}async function go(e,t,o){if(o>0){const{error:i}=await z.from("users").update({credits:e.credits-o}).eq("id",e.id);if(i)throw i}const{data:n}=await z.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=n.filter(i=>i.job==="GK"),s=n.filter(i=>i.job!=="GK"),a=!e.first_booster_opened&&c.length>0,l=[];for(let i=0;i<t;i++){const r=i===0&&a?c:i===0?s:n,u=uo(),f=fo(r,u);f&&l.push(f)}a&&await z.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:p}=await z.from("cards").insert(l.map(i=>({owner_id:e.id,player_id:i.id,card_type:"player"}))).select();return(p||[]).forEach((i,r)=>{z.rpc("record_transfer",{p_card_id:i.id,p_player_id:l[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((i,r)=>({...p[r],player:i}))}async function mo(e,t,o){const{error:n}=await z.from("users").update({credits:e.credits-o}).eq("id",e.id);if(n)throw n;const{data:c}=await z.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=c!=null&&c.length?c:Object.keys(jt).map(r=>({name:r,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const r=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:l,error:p}=await z.from("cards").insert(a).select();return p&&console.error("[Booster GC] Erreur insert:",p.message,p),(l||[]).map(r=>{const u=c==null?void 0:c.find(f=>f.name===r.gc_type||f.id===r.gc_definition_id);return{...r,_gcDef:u||null}})}async function xo(e,t){const{error:o}=await z.from("users").update({credits:e.credits-t}).eq("id",e.id);if(o)throw o;const n=Ei(),c=n[Math.floor(Math.random()*n.length)],{data:s,error:a}=await z.from("cards").insert({owner_id:e.id,card_type:"formation",formation:c}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),s||[]}function yo(e,t,o){var $;if(!e||e.length===0){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",y.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(y),($=y.querySelector("#anim-close-err"))==null||$.addEventListener("click",()=>y.remove());return}const n=document.createElement("div");n.id="booster-anim-overlay",n.innerHTML=`
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
  `,document.body.appendChild(n);let c=!1;const s=document.getElementById("pack-cut-zone"),a=document.getElementById("pack-blade");let l=!1;const p=y=>y.touches&&y.touches[0]?y.touches[0].clientX:y.clientX;function i(y){c||(l=!0,a.style.opacity="1",r(y))}function r(y){if(!l||c)return;const q=s.getBoundingClientRect(),G=p(y)-q.left,Y=Math.max(0,Math.min(1,G/q.width));a.style.width=Y*q.width+"px",Y>=.82&&f()}function u(){c||(l=!1,a.style.transition="width .2s ease, opacity .2s ease",a.style.width="0",a.style.opacity="0",setTimeout(()=>{c||(a.style.transition="")},220))}function f(){var q;if(c)return;c=!0,l=!1,a.style.width="100%",a.style.opacity="1",(q=document.getElementById("cut-flash"))==null||q.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const y=document.getElementById("cut-hint");y&&(y.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{a.style.opacity="0",document.getElementById("pack-phase").style.display="none",x(0)},620)}s.addEventListener("pointerdown",i),window.addEventListener("pointermove",r),window.addEventListener("pointerup",u),s.addEventListener("touchstart",i,{passive:!0}),window.addEventListener("touchmove",r,{passive:!0}),window.addEventListener("touchend",u);let g=0,k=!1;const d=new Set;function x(y){g=y,document.getElementById("reveal-phase").style.display="flex",w(),A(y,0),B()}function w(){const y=document.getElementById("card-dots");y&&(y.innerHTML=e.map((q,G)=>`<div class="card-dot" data-i="${G}" style="width:8px;height:8px;border-radius:50%;background:${G===g?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),y.querySelectorAll(".card-dot").forEach(q=>q.addEventListener("click",()=>D(parseInt(q.dataset.i)))))}function A(y,q){var L;const G=e[y],Y=document.getElementById("card-counter"),oe=document.getElementById("card-track");Y&&(Y.textContent=`Carte ${y+1} / ${e.length}`);const ae=G.card_type==="player"&&((L=G.player)==null?void 0:L.rarity)==="legende",ee=!d.has(y);d.add(y);let de=0;if(G.card_type==="player"&&G.player){const v=G.player,R=v.job||"ATT";de=Number(R==="GK"?v.note_g:R==="DEF"?v.note_d:R==="MIL"?v.note_m:v.note_a)||0}const be=v=>{oe.innerHTML=`
        <div id="current-card-wrap" style="display:flex;flex-direction:column;align-items:center;gap:8px;${ae?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.3);transform-origin:center">${ho(G)}</div>
          ${G.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
        </div>`;const R=document.getElementById("current-card-wrap");q!==0?(R.style.transition="none",R.style.transform=`translateX(${q>0?100:-100}%)`,requestAnimationFrame(()=>{R.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",R.style.transform="translateX(0)"})):R.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),v||ae?re():Z(),w()};ee&&de>6&&G.card_type==="player"&&G.player?S(G,()=>be(!0)):be(!1)}function S(y,q){var be;k=!0;const G=y.player,Y=`https://flagsapi.com/${G.country_code}/flat/64.png`,oe=(be=G.clubs)==null?void 0:be.logo_url,ae=document.getElementById("walkout-overlay"),ee=document.getElementById("walkout-stage");if(!ae||!ee){k=!1,q();return}ae.style.display="flex";const de=()=>{const L=ee.firstElementChild;L&&(L.classList.remove("wo-in"),L.classList.add("wo-out"))};ee.innerHTML=`<img class="wo-in" src="${Y}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(de,2e3),setTimeout(()=>{var L;ee.innerHTML=oe?`<img class="wo-in" src="${oe}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((L=G.clubs)==null?void 0:L.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(de,4450),setTimeout(()=>{ae.style.display="none",ee.innerHTML="",k=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),q()},4900)}function D(y){if(k||y<0||y>=e.length||y===g)return;const q=y>g?1:-1;g=y,A(y,q)}function I(){D(g+1)}function b(){D(g-1)}function B(){const y=document.getElementById("card-viewport");if(!y||y._swipeBound)return;y._swipeBound=!0;let q=0,G=0,Y=0,oe=!1;const ae=v=>v.touches?v.touches[0].clientX:v.clientX,ee=v=>v.touches?v.touches[0].clientY:v.clientY,de=v=>{oe=!0,q=ae(v),G=ee(v),Y=0},be=v=>{if(!oe)return;Y=ae(v)-q;const R=ee(v)-G;if(Math.abs(Y)<Math.abs(R))return;const O=document.getElementById("current-card-wrap");O&&(O.style.transition="none",O.style.transform=`translateX(${Y*.6}px) rotate(${Y*.02}deg)`)},L=()=>{if(!oe)return;oe=!1;const v=document.getElementById("current-card-wrap"),R=55;Y<=-R&&g<e.length-1?I():Y>=R&&g>0?b():v&&(v.style.transition="transform .2s ease",v.style.transform="translateX(0)")};y.addEventListener("pointerdown",de),y.addEventListener("pointermove",be),y.addEventListener("pointerup",L),y.addEventListener("pointercancel",L),y.addEventListener("touchstart",de,{passive:!0}),y.addEventListener("touchmove",be,{passive:!0}),y.addEventListener("touchend",L),y.addEventListener("click",v=>{if(Math.abs(Y)>8)return;const R=y.getBoundingClientRect();v.clientX-R.left>R.width/2?I():b()})}let X=null;function re(){const y=document.getElementById("fireworks-canvas");if(!y)return;y.width=window.innerWidth,y.height=window.innerHeight;const q=y.getContext("2d"),G=[];function Y(){const ae=Math.random()*y.width,ee=Math.random()*y.height*.6,de=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],be=de[Math.floor(Math.random()*de.length)];for(let L=0;L<60;L++){const v=Math.PI*2/60*L,R=2+Math.random()*5;G.push({x:ae,y:ee,vx:Math.cos(v)*R,vy:Math.sin(v)*R,alpha:1,color:be,size:2+Math.random()*3})}}Y(),X=setInterval(Y,600);function oe(){if(document.getElementById("fireworks-canvas")){q.clearRect(0,0,y.width,y.height);for(let ae=G.length-1;ae>=0;ae--){const ee=G[ae];if(ee.x+=ee.vx,ee.y+=ee.vy+.08,ee.vy*=.98,ee.alpha-=.018,ee.alpha<=0){G.splice(ae,1);continue}q.globalAlpha=ee.alpha,q.fillStyle=ee.color,q.beginPath(),q.arc(ee.x,ee.y,ee.size,0,Math.PI*2),q.fill()}q.globalAlpha=1,(X!==null||G.length>0)&&requestAnimationFrame(oe)}}oe()}function Z(){X!==null&&(clearInterval(X),X=null);const y=document.getElementById("fireworks-canvas");y&&y.getContext("2d").clearRect(0,0,y.width,y.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{Z(),n.remove(),o("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{Z(),n.remove(),o("boosters")})}function ho(e){var t,o;if(e.card_type==="player"&&e.player)return so(e);if(e.card_type==="game_changer"){const n=e._gcDef,c=(n==null?void 0:n.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[n==null?void 0:n.color]||s.purple,p=a[n==null?void 0:n.color]||a.purple,i=(n==null?void 0:n.name)||e.gc_type||"Game Changer",r=(n==null?void 0:n.effect)||((t=jt[e.gc_type])==null?void 0:t.desc)||"",u=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,f=((o=jt[e.gc_type])==null?void 0:o.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${p};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${p}88;flex-shrink:0">
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
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${r.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function bo(e){var t,o;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${s[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${c[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(o=document.getElementById("odds-close"))==null||o.addEventListener("click",()=>n.remove());return}vo()}function vo(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const wo="simulation",Ai="VOTRE_ZONE_ID";function $o(){switch(wo){case"propellerads":return _o();case"adsense":return ko();default:return Ht()}}function Ht(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let o=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const n=setInterval(()=>{o--;const c=document.getElementById("ad-cd"),s=document.getElementById("ad-skip");c&&(c.textContent=o),s&&(s.textContent=o>0?`Passer (${o})`:"✓ Continuer"),o<=0&&(clearInterval(n),s&&(s.disabled=!1,s.style.cssText=s.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),s==null||s.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function _o(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(Ht());window.propeller.push({zone_id:Ai,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function ko(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(Ht());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Ai,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(o){t(o)}})}const nt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},rt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function We(e,t,o,n,c){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${o}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",c)}function Te(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function Ct(e,t){var n,c;const o=e.player;return{cardId:e.id,position:t||null,id:o.id,firstname:o.firstname,name:o.surname_encoded,country_code:o.country_code,club_id:o.club_id,job:o.job,job2:o.job2,note_g:Number(o.note_g)||0,note_d:Number(o.note_d)||0,note_m:Number(o.note_m)||0,note_a:Number(o.note_a)||0,rarity:o.rarity,skin:o.skin,hair:o.hair,hair_length:o.hair_length,clubName:((n=o.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((c=o.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function at(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Ti(){const e=Math.random()*100;return e<10?3:e<30?2:1}function kt(e,t){const o=nt[t]||nt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const l=e.filter(i=>i.position&&i.position.replace(/\d+$/,"")===a).sort((i,r)=>parseInt(i.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(i=>({...i,_line:a})),p=at(l.length);l.forEach((i,r)=>{i._col=p[r]}),n[a]=l}return n}const s=[...e];for(const a of["GK","DEF","MIL","ATT"]){const l=[];for(let i=0;i<o[a];i++){let r=s.findIndex(u=>u.job===a);if(r===-1&&(r=s.findIndex(u=>u.job2===a)),r===-1&&(r=0),s[r]){const u={...s[r],_line:a};l.push(u),s.splice(r,1)}}const p=at(l.length);l.forEach((i,r)=>{i._col=p[r]}),n[a]=l}return n}function Ve(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Re(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function Ii(e,t,o){const c=new Set,s=t.filter(r=>{const u=r.gc_type||r.id;return c.has(u)?!1:(c.add(u),!0)});let a=[];function l(r,u){const f=r._gcDef,g={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},k={purple:"#9b59b6",light_blue:"#00bcd4"},d=g[f==null?void 0:f.color]||g.purple,x=k[f==null?void 0:f.color]||k.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":x};background:${d};
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
    </div>`}const p=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",o(r)};function i(){var u,f,g;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=a.length>0;e.innerHTML=`
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
        ${s.map(k=>{const d=a.find(x=>x.gc_type===k.gc_type);return l(k,!!d)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(k=>{k.addEventListener("click",()=>{const d=k.dataset.id,x=s.find(A=>A.id===d);if(!x)return;const w=a.findIndex(A=>A.gc_type===x.gc_type);w>-1?a.splice(w,1):a.length<3&&a.push(x),i()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{r&&p(a)}),(f=e.querySelector("#gc-no-gc"))==null||f.addEventListener("click",()=>p([])),(g=e.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{a.length&&(a=[],i())})}i()}async function Eo(e,t,o){const{state:n,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("decks").select("id,name,is_active,formation").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){We(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const a=s.map(r=>r.id),{data:l}=await z.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let p=0;function i(){var A,S,D,I,b;const r=s[p],u=(l||[]).filter(B=>B.deck_id===r.id),f=u.filter(B=>{var X;return B.is_starter&&((X=B.card)==null?void 0:X.player)}).map(B=>Ct(B.card,B.position)),g=u.find(B=>{var X;return((X=B.card)==null?void 0:X.card_type)==="formation"}),k=r.formation||((A=g==null?void 0:g.card)==null?void 0:A.formation)||"4-4-2",d=f.length>=11?kt(f,k):null,x=f.length>=11;Ve(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
          <div style="font-size:19px;font-weight:900">${r.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${k} · ${f.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===s.length-1?"0.1":"0.3"});color:${p===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${d?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${gt(d,k,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((B,X)=>`<div style="width:7px;height:7px;border-radius:50%;background:${X===p?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const X=e.querySelector(".deck-preview-wrap svg");X&&(X.removeAttribute("width"),X.removeAttribute("height"),X.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",X.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(S=document.getElementById("prev-deck"))==null||S.addEventListener("click",()=>{p>0&&(p--,i())}),(D=document.getElementById("next-deck"))==null||D.addEventListener("click",()=>{p<s.length-1&&(p++,i())}),(I=document.getElementById("validate-deck"))==null||I.addEventListener("click",()=>{x&&t.navigate("match",{matchMode:o,deckId:r.id})}),(b=document.getElementById("cancel-deck-select"))==null||b.addEventListener("click",()=>{Re(e),c("home")});const w=document.getElementById("deck-swipe-zone");if(w){let B=0,X=0;w.addEventListener("touchstart",re=>{B=re.touches[0].clientX,X=re.touches[0].clientY},{passive:!0}),w.addEventListener("touchend",re=>{const Z=re.changedTouches[0].clientX-B,$=re.changedTouches[0].clientY-X;Math.abs(Z)<40||Math.abs(Z)<Math.abs($)||(Z<0&&p<s.length-1?(p++,i()):Z>0&&p>0&&(p--,i()))},{passive:!0})}}i()}function Li(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Be(e,t=44,o=58){if(!e)return`<div style="width:${t}px;height:${o}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const n=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Te(e),c=Li(e),s=e._line||e.job||"MIL",a=rt[s]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",p=e.note!==void 0?Number(e.note)||0:(Number(fe(e,s))||0)+(e.boost||0),i=Mi(e==null?void 0:e.country_code),r=Math.round(o*.19),u=Math.round(o*.25),f=o-Math.round(o*.19)-Math.round(o*.25),g=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${o}px;border-radius:5px;border:2px solid ${l};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${g}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${n&&!(e!=null&&e.used)?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Bt(e==null?void 0:e.country_code)?`<img src="${Bt(e.country_code)}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">${i}</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":p}</span>
      ${c?`<img src="${c}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function et(e,t,o){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((s,a)=>{if(c+=Be(s,40,52),a<n.length-1){const l=Xe(s,n[a+1]);c+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),o!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${o}</div>`),c+="</div>",c}function Bt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Mi(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function ft(e,t,o,n,c=310,s=310,a=[]){var S;const l=mt[t]||{},p=hi(t)||qt[t]||[],i={},r=["ATT","MIL","DEF","GK"];for(const D of r)(e[D]||[]).forEach((b,B)=>{i[`${D}${B+1}`]=b});function u(D){const I=l[D];return I?{x:I.x*c,y:I.y*s}:null}let f="";for(const[D,I]of p){const b=u(D),B=u(I);if(!b||!B)continue;const X=i[D],re=i[I],Z=Xe(X,re);Z==="#00ff88"||Z==="#FFD700"?(f+=`<line x1="${b.x.toFixed(1)}" y1="${b.y.toFixed(1)}" x2="${B.x.toFixed(1)}" y2="${B.y.toFixed(1)}"
        stroke="${Z}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,f+=`<line x1="${b.x.toFixed(1)}" y1="${b.y.toFixed(1)}" x2="${B.x.toFixed(1)}" y2="${B.y.toFixed(1)}"
        stroke="${Z}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):f+=`<line x1="${b.x.toFixed(1)}" y1="${b.y.toFixed(1)}" x2="${B.x.toFixed(1)}" y2="${B.y.toFixed(1)}"
        stroke="${Z}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,k=64,d=13,x=16,w={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[D,I]of Object.entries(i)){const b=u(D);if(!b||!I)continue;const B=D.replace(/[0-9]/g,""),X=rt[B]||"#555",re=a.includes(I.cardId),Z=o==="attack"&&(["MIL","ATT"].includes(B)||re)&&!I.used||o==="defense"&&["GK","DEF","MIL"].includes(B)&&!I.used,$=n.includes(I.cardId);let y;o==="attack"?y=re?Math.max(1,Number(I.note_a)||0):B==="MIL"?Number(I.note_m)||0:Number(I.note_a)||0:o==="defense"?y=B==="GK"?Number(I.note_g)||0:B==="MIL"?Number(I.note_m)||0:Number(I.note_d)||0:y=Number(B==="GK"?I.note_g:B==="DEF"?I.note_d:B==="MIL"?I.note_m:I.note_a)||0,y=y+(I.boost||0);const q=(b.x-g/2).toFixed(1),G=(b.y-k/2).toFixed(1),Y=w[I==null?void 0:I.rarity]||w.normal;if(I.used){const v=typeof import.meta<"u"&&"/manager-wars/"||"/",O=`${typeof window<"u"&&((S=window.location)==null?void 0:S.origin)||""}${v}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");f+=`<rect x="${q}" y="${G}" width="${g}" height="${k}" rx="5" fill="#161616"/>`,f+=`<image href="${O}" xlink:href="${O}" x="${q}" y="${G}" width="${g}" height="${k}" preserveAspectRatio="xMidYMid slice"/>`,f+=`<rect x="${q}" y="${G}" width="${g}" height="${k}" rx="5" fill="none" stroke="${Y}" stroke-width="2" opacity="0.7"/>`,f+=`<rect x="${q}" y="${G}" width="${g}" height="${k}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${I.cardId}" data-role="${B}" style="cursor:pointer"/>`;continue}const oe=$?.45:1,ae=$?"#FFD700":Y,ee=$?3:(I==null?void 0:I.rarity)==="légende"||(I==null?void 0:I.rarity)==="pépite"?2.5:2,de=k-d-x;f+=`<defs><clipPath id="cp-${D}"><rect x="${q}" y="${(b.y-k/2+d).toFixed(1)}" width="${g}" height="${de}"/></clipPath></defs>`,f+=`<rect x="${q}" y="${G}" width="${g}" height="${k}" rx="5" fill="${X}" opacity="${oe}"/>`;const be=Te(I);be&&(f+=`<image href="${be}" xlink:href="${be}" x="${q}" y="${(b.y-k/2+d).toFixed(1)}" width="${g}" height="${de}" clip-path="url(#cp-${D})" preserveAspectRatio="xMidYMin slice"/>`),f+=`<rect x="${q}" y="${G}" width="${g}" height="${d}" rx="4" fill="rgba(255,255,255,0.92)"/>`,f+=`<text x="${b.x.toFixed(1)}" y="${(b.y-k/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(I.name||"").slice(0,9)}</text>`;const L=(b.y+k/2-x).toFixed(1);f+=`<rect x="${q}" y="${L}" width="${g}" height="${x}" fill="rgba(255,255,255,0.92)"/>`;{const v=Bt(I.country_code);v?f+=`<image href="${v}" xlink:href="${v}" x="${(b.x-20).toFixed(1)}" y="${(b.y+k/2-x+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:f+=`<text x="${(b.x-13).toFixed(1)}" y="${(b.y+k/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Mi(I.country_code)}</text>`,f+=`<text x="${b.x.toFixed(1)}" y="${(b.y+k/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${y}</text>`;const R=Li(I);R?f+=`<image href="${R}" xlink:href="${R}" x="${(b.x+g/2-14).toFixed(1)}" y="${(b.y+k/2-x+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:I.clubName&&(f+=`<text x="${(b.x+14).toFixed(1)}" y="${(b.y+k/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(I.clubName||"").slice(0,3).toUpperCase()}</text>`),I.boost&&(f+=`<rect x="${(b.x+g/2-12).toFixed(1)}" y="${(b.y-k/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,f+=`<text x="${(b.x+g/2-5).toFixed(1)}" y="${(b.y-k/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${I.boost}</text>`)}f+=`<rect x="${q}" y="${G}" width="${g}" height="${k}" rx="5" fill="${$?"rgba(255,255,255,0.12)":"none"}" stroke="${ae}" stroke-width="${ee}" opacity="${oe}"/>`,Z&&(f+=`<rect x="${q}" y="${G}" width="${g}" height="${k}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${$?"selected":""}" data-card-id="${I.cardId}" data-role="${B}" style="cursor:pointer"/>`)}const A=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-A} ${-A} ${c+A*2} ${s+A*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${f}
  </svg>`}function gt(e,t,o,n,c=300,s=300,a=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${ft(e,t,o,n,c,s,a)}
  </div>`}function tt(e,t=!1){const o=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${o?`<img src="${o}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function zi(e,t,o,n){var I;const{state:c,navigate:s,toast:a}=t;Ve(e);const l=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return Eo(e,t,o);const p=l.deckId;let i,r,u,f;try{const b=await Promise.all([z.from("decks").select("formation,name").eq("id",p).single(),z.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",p).order("slot_order")]);i=b[0].data,u=b[0].error,r=b[1].data,f=b[1].error}catch(b){console.error("[Match] Exception chargement deck:",b),We(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(u||f){console.error("[Match] Erreur Supabase:",u||f),We(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const g=(r||[]).filter(b=>{var B;return b.is_starter&&((B=b.card)==null?void 0:B.player)}).map(b=>Ct(b.card,b.position)),k=(r||[]).filter(b=>{var B;return!b.is_starter&&((B=b.card)==null?void 0:B.player)}).map(b=>Ct(b.card,b.position));if(g.length<11){We(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>s("decks"));return}const d=(r||[]).find(b=>{var B;return((B=b.card)==null?void 0:B.card_type)==="formation"}),x=(i==null?void 0:i.formation)||((I=d==null?void 0:d.card)==null?void 0:I.formation)||"4-4-2",{data:w,error:A}=await z.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:S}=await z.from("gc_definitions").select("*").eq("is_active",!0),D=(w||[]).map(b=>({...b,_gcDef:(S==null?void 0:S.find(B=>B.name===b.gc_type||B.id===b.gc_definition_id))||null}));n({deckId:p,formation:x,starters:g,subsRaw:k,gcCardsEnriched:D,gcDefs:S||[]})}async function Ao(e,t){const{state:o}=t,c=(o.params||{}).matchMode||"vs_ai_easy",s=c.replace("vs_ai_",""),a=c;await zi(e,t,c,async({deckId:l,formation:p,starters:i,subsRaw:r,gcCardsEnriched:u,gcDefs:f})=>{try{const g=kt(i,p),k=await To(p,s),d=async x=>{try{const{data:w,error:A}=await z.from("matches").insert({home_id:o.profile.id,away_id:null,mode:a,home_deck_id:l,status:"in_progress"}).select().single();if(A){console.error("[MatchIA] Erreur création match:",A),We(e,"⚠️","Impossible de créer le match ("+A.message+").","Retour",()=>t.navigate("home"));return}const S={gcDefs:f||[],matchId:w==null?void 0:w.id,mode:a,difficulty:s,formation:p,homeTeam:g,aiTeam:k,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:x,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:o.profile.club_name||"Vous"};Lo(e,S,t)}catch(w){console.error("[MatchIA] Exception launchMatch:",w),We(e,"⚠️","Erreur au lancement du match : "+w.message,"Retour",()=>t.navigate("home"))}};if(!u.length){d([]);return}Ii(e,u,d)}catch(g){console.error("[MatchIA] Exception setup:",g),We(e,"⚠️","Erreur de préparation du match : "+g.message,"Retour",()=>t.navigate("home"))}})}async function To(e,t){var a,l;const{data:o}=await z.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!o||o.length<11)return Io(e);const n=nt[e]||nt["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},s=[...o];for(const p of["GK","DEF","MIL","ATT"]){const i=s.filter(k=>k.job===p),r=s.filter(k=>k.job!==p),u=[...i,...r],f=[];for(let k=0;k<n[p];k++){const d=u[k]||s[k];d&&f.push({cardId:"ai-"+d.id+"-"+k,id:d.id,firstname:d.firstname,name:d.surname_encoded,country_code:d.country_code,club_id:d.club_id,job:d.job,job2:d.job2,note_g:Number(d.note_g)||0,note_d:Number(d.note_d)||0,note_m:Number(d.note_m)||0,note_a:Number(d.note_a)||0,rarity:d.rarity,skin:d.skin,hair:d.hair,hair_length:d.hair_length,clubName:((a=d.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((l=d.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:p})}const g=at(f.length);f.forEach((k,d)=>{k._col=g[d]}),c[p]=f}return c}function Io(e){const t=nt[e]||nt["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const s of["GK","DEF","MIL","ATT"]){const a=[];for(let p=0;p<t[s];p++){const i=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:n[c%n.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?i:2,note_d:s==="DEF"?i:2,note_m:s==="MIL"?i:2,note_a:s==="ATT"?i:2,rarity:"normal",boost:0,used:!1,_line:s}),c++}const l=at(a.length);a.forEach((p,i)=>{p._col=l[i]}),o[s]=a}return o}function Lo(e,t,o){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${ft(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Mo(e,t,o),5e3)}function Mo(e,t,o){const n=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function s(d){return d.reduce((x,w)=>x+fe(w,"MIL"),0)}function a(d){let x=0;for(let w=0;w<d.length-1;w++){const A=Xe(d[w],d[w+1]);A==="#00ff88"?x+=2:A==="#FFD700"&&(x+=1)}return x}const l=s(n)+a(n),p=s(c)+a(c),i=l>=p;function r(d,x,w,A){return`<div id="duel-row-${A}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${x}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${d.map((S,D)=>{const I=D<d.length-1?Xe(S,d[D+1]):null,b=!I||I==="#ff3333"||I==="#cc2222",B=I==="#00ff88"?"+2":I==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${A}" data-idx="${D}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Be({...S,note:fe(S,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${D<d.length-1?`<div class="duel-link duel-link-${A}" data-idx="${D}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${b?"rgba(255,255,255,0.12)":I};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${b?"none":`0 0 8px ${I}`}">
            ${B?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${I}">${B}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${A}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${s(d)} + ${a(d)} liens = <b style="color:#fff">${s(d)+a(d)}</b>
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

    ${r(c,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const u=()=>{const d=(x,w)=>e.querySelectorAll(x).forEach((A,S)=>{setTimeout(()=>{A.style.opacity="1",A.style.transform="translateY(0) scale(1)"},w+S*90)});d(".duel-card-home",150),d(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((x,w)=>{setTimeout(()=>{x.style.opacity="1"},w*70)}),900),setTimeout(()=>{const x=e.querySelector("#vs-label");x&&(x.style.opacity="1",x.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(w=>w.style.opacity="1")},1250),setTimeout(()=>{f("score-home",l,800),f("score-ai",p,800)},1500)};function f(d,x,w){const A=document.getElementById(d);if(!A)return;const S=performance.now(),D=I=>{const b=Math.min(1,(I-S)/w);A.textContent=Math.round(x*(1-Math.pow(1-b,3))),b<1?requestAnimationFrame(D):A.textContent=x};requestAnimationFrame(D)}requestAnimationFrame(u),t.attacker=i?"home":"ai";const g=i?Ti():null;i&&(t.boostCard={value:g}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(d=>({name:d.name,note:fe(d,"MIL"),portrait:Te(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),aiPlayers:c.map(d=>({name:d.name,note:fe(d,"MIL"),portrait:Te(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),homeTotal:l,aiTotal:p,text:`Duel milieu : ${t.clubName} ${l} – ${p} IA → ${i?t.clubName+" attaque":"IA attaque"}`});const k=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",_e(e,t,o),t.attacker==="ai"&&setTimeout(()=>Ft(e,t,o),800)};setTimeout(()=>{const d=document.getElementById("score-home"),x=document.getElementById("score-ai"),w=document.getElementById(i?"duel-row-home":"duel-row-ai"),A=document.getElementById(i?"duel-row-ai":"duel-row-home"),S=i?d:x,D=i?x:d;S&&(S.style.fontSize="80px",S.style.color=i?"#FFD700":"#ff6b6b",S.style.animation="duelPulse .5s ease"+(i?", duelGlow 1.5s ease infinite .5s":"")),D&&(D.style.opacity="0.25"),setTimeout(()=>{w&&(w.style.transformOrigin="center",w.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",w.style.zIndex="5"),setTimeout(()=>{var b;const I=document.getElementById("duel-shock");if(I){const B=(b=A||w)==null?void 0:b.getBoundingClientRect(),X=e.querySelector(".match-screen").getBoundingClientRect();B&&(I.style.top=B.top-X.top+B.height/2+"px"),I.style.animation="shockwave .5s ease-out forwards"}A&&(A.style.transformOrigin="center",A.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var b;const I=document.getElementById("duel-finale");I&&(I.innerHTML=`
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
          </button>`,I.style.transition="opacity .45s ease",I.style.opacity="1",I.style.pointerEvents="auto",(b=document.getElementById("start-match-btn"))==null||b.addEventListener("click",k))},600)},700)},2800)}function zo(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function _e(e,t,o){var S,D,I,b,B,X,re,Z;const n=t.selected.map($=>$.cardId),c=t.usedSubIds||[],s=t.homeSubs.filter($=>!c.includes($.cardId)),l=Object.values(t.homeTeam).flat().filter($=>$.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs,p=!["GK","DEF","MIL","ATT"].some($=>(t.aiTeam[$]||[]).some(y=>!y.used)),i=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter($=>!$.used),r=t.phase==="attack"&&p&&i.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter($=>!$.used).map($=>$.cardId):[];t.log[t.log.length-1];const u=t.phase==="ai-attack"||t.phase==="ai-defense",f=t.phase==="attack",g=t.phase==="defense",k=t.phase==="finished",d=t.gcCards.filter($=>!t.usedGc.includes($.id)),x=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${et((y.players||[]).map(q=>({...q,used:!1})),"#ff6b6b",y.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${et((y.players||[]).map(q=>({...q,used:!1})),"#00ff88",y.total)}
          </div>`}const $=t.log[t.log.length-1];return $?'<div style="padding:2px 4px">'+zo($)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const $=window.innerWidth>=700,y=(L,v,R)=>{var Ie,Ce;const O=(t.gcDefs||[]).find(m=>m.name===L.gc_type),V={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[O==null?void 0:O.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ne={purple:"#b06ce0",light_blue:"#00d4ef"}[O==null?void 0:O.color]||"#b06ce0",K=(O==null?void 0:O.name)||L.gc_type,ve=(O==null?void 0:O.effect)||((Ie=je[L.gc_type])==null?void 0:Ie.desc)||"",ge=O!=null&&O.image_url?`/manager-wars/icons/${O.image_url}`:null,ue=((Ce=je[L.gc_type])==null?void 0:Ce.icon)||"⚡",pe=Math.round(R*.22),he=Math.round(R*.22),Ee=R-pe-he,Le=K.length>12?7:9;return`<div class="gc-mini" data-gc-id="${L.id}" data-gc-type="${L.gc_type}"
          style="box-sizing:border-box;width:${v}px;height:${R}px;border-radius:10px;border:2px solid ${ne};background:${V};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${pe}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Le}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${v-6}px">${K}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Ee}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${ge?`<img src="${ge}" style="max-width:${v-10}px;max-height:${Ee-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ee*.55)}px">${ue}</span>`}
          </div>
          <div style="height:${he}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ve.slice(0,38)}</span>
          </div>
        </div>`},q=(L,v)=>{var R;return`<div id="boost-card"
          style="box-sizing:border-box;width:${L}px;height:${v}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(v*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(v*.2)}px">⚡</div>
            <div style="font-size:${Math.round(v*.09)}px;color:#000;font-weight:900">+${(R=t.boostCard)==null?void 0:R.value}</div>
          </div>`},G=(L,v)=>v?q(130,175):y(L,130,175),Y=(L,v)=>v?q(68,95):y(L,68,95),oe=$?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ae=k?`<button id="btn-results" style="${oe};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:u?`<div style="${oe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:f?`<button id="btn-action" style="${oe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${oe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${oe};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,ee=f||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",de=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${$?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(L=>`<div class="sub-btn-col" data-sub-id="${L.cardId}" style="cursor:pointer;flex-shrink:0">${Be(L,76,100)}</div>`).join("")}
      </div>`,be=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${gt(t.homeTeam,t.formation,t.phase,n,300,300,r)}
        </div>
      </div>`;return $?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${de}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${be}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ae}${ee}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${d.map(L=>G(L,!1)).join("")}
            ${x?G(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${gt(t.homeTeam,t.formation,t.phase,n,300,300,r)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${d.map(L=>Y(L,!1)).join("")}
            ${x?Y(null,!0):""}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map($=>{var y,q,G;if($.type==="duel"){const Y=$.isGoal,oe=$.homeScored?"#FFD700":Y?"#ff6b6b":"rgba(255,255,255,0.3)",ae=$.homeScored?"⚽ BUT !":Y?"⚽ BUT IA !":(y=$.homePlayers)!=null&&y.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${Y?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${oe};margin-bottom:4px">
                <div style="font-size:9px;color:${oe};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ae}</div>
                ${(q=$.homePlayers)!=null&&q.length?`<div style="margin-bottom:3px">${et($.homePlayers,"rgba(255,255,255,0.7)",$.homeTotal)}</div>`:""}
                ${(G=$.aiPlayers)!=null&&G.length?`<div style="opacity:0.7">${et($.aiPlayers,"#ff6b6b",$.aiTotal)}</div>`:""}
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
  </div>`;function w(){const $=e.querySelector(".match-screen");if(!$)return;const y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);$.style.bottom="auto",$.style.height=y+"px",$.style.minHeight=y+"px",$.style.maxHeight=y+"px",$.style.overflow="hidden";const q=e.querySelector("#mobile-action-bar"),G=e.querySelector("#mobile-play-area");q&&G&&(G.style.paddingBottom=q.offsetHeight+"px")}if(w(),setTimeout(w,120),setTimeout(w,400),setTimeout(w,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",w),window.visualViewport.addEventListener("scroll",w)),window.addEventListener("resize",w)),function(){const y=e.querySelector(".terrain-wrapper svg");y&&(y.removeAttribute("width"),y.removeAttribute("height"),y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",y.setAttribute("viewBox","-26 -26 352 352"),y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const $=e.querySelector(".terrain-wrapper svg");$&&($.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let $=!1,y=30;const q=()=>document.getElementById("match-timer"),G=()=>{const Y=q();if(!Y)return;const oe=String(Math.floor(y/60)).padStart(2,"0"),ae=String(y%60).padStart(2,"0");Y.textContent=` ${oe}:${ae}`,Y.style.color=$?"#ff2222":"#ff9500",Y.style.fontWeight="900"};G(),t._timerInt=setInterval(()=>{if(y--,y<0)if(!$)$=!0,y=15,G();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const Y=document.createElement("div");Y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",Y.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(Y),setTimeout(()=>{Y.remove(),pt(e,t,o)},2500)}else G()},1e3)}(S=document.getElementById("match-quit"))==null||S.addEventListener("click",()=>{Re(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,pt(e,t,o))}),(D=document.getElementById("view-ai"))==null||D.addEventListener("click",()=>No(t,o)),(I=document.getElementById("toggle-history"))==null||I.addEventListener("click",()=>{var $;($=document.getElementById("match-history-panel"))==null||$.classList.add("open")}),(b=document.getElementById("close-history"))==null||b.addEventListener("click",()=>{var $;($=document.getElementById("match-history-panel"))==null||$.classList.remove("open")}),(B=document.getElementById("btn-action"))==null||B.addEventListener("click",()=>{t.selected.length!==0&&(f?jo(e,t,o):g&&Co(e,t,o))}),(X=document.getElementById("btn-results"))==null||X.addEventListener("click",()=>pt(e,t,o)),e.querySelectorAll(".match-slot-hit").forEach($=>{$.addEventListener("click",()=>So($,t,e,o))}),e.querySelectorAll(".match-used-hit").forEach($=>{$.addEventListener("click",()=>zt(e,t,o,null,$.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach($=>{$.addEventListener("click",()=>Do($.dataset.gcId,$.dataset.gcType,e,t,o))}),(re=document.getElementById("boost-card"))==null||re.addEventListener("click",()=>Ro(e,t,o)),e.querySelectorAll(".sub-btn-col").forEach($=>{$.addEventListener("click",()=>zt(e,t,o,$.dataset.subId))}),(Z=document.getElementById("sub-btn-main"))==null||Z.addEventListener("click",()=>zt(e,t,o))}function So(e,t,o,n){const c=e.dataset.cardId,s=e.dataset.role,a=t.selected.findIndex(l=>l.cardId===c);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(p=>p.cardId===c);l&&t.selected.push({...l,_role:s,_line:s})}_e(o,t,n)}function Ut(e,t,o){e.matchId&&z.from("matches").update({last_player_id:o}).eq("id",e.matchId).then(()=>{})}function jo(e,t,o){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ut(t,o,o.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(a=>(t.aiTeam[a]||[]).some(l=>!l.used)),c=t.selected.map(a=>{const l=(t.homeTeam[a._role]||[]).find(i=>i.cardId===a.cardId)||a,p=n&&["GK","DEF"].includes(a._role);return{...l,_line:a._role,...p?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=Rt(c,t.modifiers.home);t.pendingAttack={...s,players:[...c],side:"home"},t.selected.forEach(a=>{const l=(t.homeTeam[a._role]||[]).find(p=>p.cardId===a.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",_e(e,t,o),setTimeout(()=>Bo(e,t,o),1200)}function Co(e,t,o){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ut(t,o,o.state.profile.id);const n=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l,_line:l._role})),c=Nt(n,t.modifiers.home);t.selected.forEach(l=>{const p=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId);p&&(p.used=!0)});const s=Ot(t.pendingAttack.total,c.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:Te(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const p=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l;return{name:p.name,note:(p._line==="GK"?Number(p.note_g)||0:p._line==="MIL"?Number(p.note_m)||0:Number(p.note_d)||0)+(p.boost||0),portrait:Te(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(s.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,_e(e,t,o),Et(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{it(e,t,o,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,it(e,t,o,"home-attack")}function Ft(e,t,o){Ut(t,o,null);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=vi(n,"attack",t.difficulty);if(!c.length){ht(e,t,o);return}const s=Rt(c,t.modifiers.ai);t.pendingAttack={...s,players:c,side:"ai"},c.forEach(i=>{i.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${c.map(i=>i.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(i=>!i.used),p=(t.homeSubs||[]).filter(i=>!(t.usedSubIds||[]).includes(i.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!p){t.aiScore++;const i={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:Te(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(i),t.pendingAttack=null,_e(e,t,o),Et(i.aiPlayers,t.homeScore,t.aiScore,!1,()=>{it(e,t,o,"home-attack")});return}t.phase="defense",_e(e,t,o)}function Bo(e,t,o){var i,r;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=vi(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(f=>!f.used)).length){t.homeScore++;const f={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((i=t.pendingAttack)==null?void 0:i.players)||[]).map(g=>({name:g.name,note:fe(g,g._line||g.job),portrait:Te(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,_e(e,t,o),Et(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{it(e,t,o,"ai-attack")});return}const a=c.length>0?Nt(c,t.modifiers.ai).total:0;c.forEach(u=>{u.used=!0});const l=Ot(t.pendingAttack.total,a,t.modifiers.ai),p={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>({name:u.name,note:u._line==="MIL"?u.note_m:u.note_a,portrait:Te(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),aiPlayers:c.map(u=>({name:u.name,note:u._line==="GK"?u.note_g:u._line==="MIL"?u.note_m:u.note_d,portrait:Te(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(l.shielded)p.text="🛡️ Bouclier IA !",t.log.push(p);else if(l.goal){t.homeScore++,p.isGoal=!0,p.homeScored=!0,p.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(p),t.modifiers.ai={},t.pendingAttack=null,_e(e,t,o),Et(p.homePlayers,t.homeScore,t.aiScore,!0,()=>{it(e,t,o,"ai-attack")});return}else p.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(p);t.modifiers.ai={},t.pendingAttack=null,it(e,t,o,"ai-attack")}function it(e,t,o,n){if(t.round++,Si(t)){pt(e,t,o);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){ht(e,t,o);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){ht(e,t,o);return}setTimeout(()=>Ft(e,t,o),100);return}t.phase="attack",_e(e,t,o)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){ht(e,t,o);return}t.phase="ai-attack",_e(e,t,o),setTimeout(()=>Ft(e,t,o),800)}}function Si(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(c=>!c.used)),o=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(c=>!c.used));return!t&&!o}function ht(e,t,o){Si(t)?pt(e,t,o):(t.phase="attack",_e(e,t,o))}function Fo(e,t,o){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=Te(e),s=Te(t),a=rt[e.job]||"#555",l=rt[t.job]||"#555",p=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,i=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
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
        <div style="width:80px;height:80px;border-radius:12px;background:${l};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${s?`<img src="${s}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${i}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(n);let r=!1;const u=()=>{r||(r=!0,n.remove(),o())};n.addEventListener("click",u),setTimeout(u,2e3)}function ct(e,t="rgba(0,0,0,0.8)"){const o=document.createElement("div");o.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,o.textContent=e,document.body.appendChild(o),setTimeout(()=>o.remove(),2200)}function zt(e,t,o,n=null,c=null){var g,k;if(t.phase!=="attack"){ct("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){ct(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const s=Object.entries(t.homeTeam).flatMap(([d,x])=>(x||[]).filter(w=>w.used).map(w=>({...w,_line:w._line||d}))),a=t.homeSubs.filter(d=>!t.usedSubIds.includes(d.cardId));if(!s.length){ct("Aucun joueur utilisé à remplacer");return}if(!a.length){ct("Aucun remplaçant disponible");return}let l=Math.max(0,s.findIndex(d=>d.cardId===c));const p=((g=s[l])==null?void 0:g._line)||((k=s[l])==null?void 0:k.job);let i=n?Math.max(0,a.findIndex(d=>d.cardId===n)):Math.max(0,a.findIndex(d=>d.job===p)),r=!1;const u=document.createElement("div");u.id="sub-overlay",u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function f(){var I,b,B,X,re,Z;const d=s[l],x=a[i],w=Math.min(130,Math.round((window.innerWidth-90)/2)),A=Math.round(w*1.35),S=$=>`background:rgba(255,255,255,0.12);border:none;color:${$?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${$?"default":"pointer"};flex-shrink:0`;u.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${S(i===0)}" ${i===0?"disabled":""}>▲</button>
        <div>${x?Be({...x,used:!1,boost:0},w,A):"<div>—</div>"}</div>
        <button id="in-down" style="${S(i>=a.length-1)}" ${i>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${i+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${S(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${d?Be({...d,used:!1,boost:0},w,A):"<div>—</div>"}</div>
        <button id="out-down" style="${S(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(I=u.querySelector("#sub-close"))==null||I.addEventListener("click",()=>u.remove()),(b=u.querySelector("#out-up"))==null||b.addEventListener("click",()=>{l>0&&(l--,f())}),(B=u.querySelector("#out-down"))==null||B.addEventListener("click",()=>{l<s.length-1&&(l++,f())}),(X=u.querySelector("#in-up"))==null||X.addEventListener("click",()=>{i>0&&(i--,f())}),(re=u.querySelector("#in-down"))==null||re.addEventListener("click",()=>{i<a.length-1&&(i++,f())});const D=($,y,q,G)=>{const Y=u.querySelector("#"+$);if(!Y)return;let oe=0;Y.addEventListener("touchstart",ae=>{oe=ae.touches[0].clientY},{passive:!0}),Y.addEventListener("touchend",ae=>{const ee=ae.changedTouches[0].clientY-oe;if(Math.abs(ee)<30)return;const de=y();ee<0&&de<G-1?(q(de+1),f()):ee>0&&de>0&&(q(de-1),f())},{passive:!0})};D("in-panel",()=>i,$=>i=$,a.length),D("out-panel",()=>l,$=>l=$,s.length),(Z=u.querySelector("#sub-confirm"))==null||Z.addEventListener("click",$=>{if($.preventDefault(),$.stopPropagation(),r)return;r=!0;const y=s[l],q=a[i];if(!y||!q)return;let G=null,Y=-1;for(const[ae,ee]of Object.entries(t.homeTeam)){const de=(ee||[]).findIndex(be=>be.cardId===y.cardId);if(de!==-1){G=ae,Y=de;break}}if(Y===-1||!G){ct("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),u.remove();return}const oe={...q,_line:G,_col:y._col||0,used:!1,boost:0};t.homeTeam[G].splice(Y,1,oe),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(q.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:y.name,firstname:y.firstname,note:fe(y,G),portrait:Te(y),job:y.job,country_code:y.country_code,rarity:y.rarity,clubName:y.clubName,clubLogo:y.clubLogo},inPlayer:{name:q.name,firstname:q.firstname,note:fe(q,G),portrait:Te(q),job:q.job,country_code:q.country_code,rarity:q.rarity,clubName:q.clubName,clubLogo:q.clubLogo},text:`🔄 ${q.firstname} ${q.name} remplace ${y.firstname} ${y.name}`}),u.remove(),Fo(y,q,()=>_e(e,t,o))})}document.body.appendChild(u),f()}function Do(e,t,o,n,c){var k,d;const s=(n.gcDefs||[]).find(x=>x.name===t),a=je[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",p={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",i=(s==null?void 0:s.name)||t,r=(s==null?void 0:s.effect)||a.desc,u=s!=null&&s.image_url?`/manager-wars/icons/${s.image_url}`:null,f=a.icon||"⚡",g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",g.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${p};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${p}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${i.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${i}</div>
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
    </div>`,document.body.appendChild(g),(k=g.querySelector("#gc-back"))==null||k.addEventListener("click",()=>g.remove()),(d=g.querySelector("#gc-use"))==null||d.addEventListener("click",()=>{g.remove(),qo(e,t,o,n,c)})}function yt(e,t,o,n,c,s){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function p(){var i,r;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${o}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(u=>{const f=u._line||u.job||"MIL",g={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",k=fe(u,f)+(u.boost||0),d=l.find(x=>x.cardId===u.cardId);return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${d?"#FFD700":"rgba(255,255,255,0.25)"};background:${g};overflow:hidden;cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${k}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(i=a.querySelector("#gc-picker-close"))==null||i.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.cid,g=e.find(d=>d.cardId===f);if(!g)return;const k=l.findIndex(d=>d.cardId===f);k>-1?l.splice(k,1):l.length<t&&l.push(g),p()})}),(r=a.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{a.remove(),s(l)})}p(),document.body.appendChild(a)}const Go={BOOST_STAT:({value:e=1,count:t=1,roles:o=[]},n,c,s)=>{const a=Object.entries(n.homeTeam).filter(([l])=>!o.length||o.includes(l)).flatMap(([l,p])=>p.filter(i=>!i.used).map(i=>({...i,_line:l})));return a.length?(yt(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,c,n,l=>{l.forEach(p=>{const i=(n.homeTeam[p._line]||[]).find(r=>r.cardId===p.cardId);i&&(i.boost=(i.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${i.name}`,type:"info"}))}),_e(c,n,s)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),_e(c,n,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:o=[],target:n="ai"},c,s,a)=>{const l=n==="home"?c.homeTeam:c.aiTeam,p=n==="ai"?"adverse":"allié",i=Object.entries(l).filter(([r])=>!o.length||o.includes(r)).flatMap(([r,u])=>u.filter(f=>!f.used).map(f=>({...f,_line:r})));return i.length?(yt(i,t,`Choisir ${t} joueur(s) ${p}(s) à débuffer (-${e})`,s,c,r=>{r.forEach(u=>{const g=((n==="home"?c.homeTeam:c.aiTeam)[u._line]||[]).find(k=>k.cardId===u.cardId);g&&(g.boost=(g.boost||0)-e,c.log.push({text:`🎯 -${e} sur ${g.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),_e(s,c,a)}),!0):(c.log.push({text:`🎯 Aucun joueur ${p} disponible`,type:"info"}),_e(s,c,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:o="ai"},n,c,s)=>{const a=o==="home"?n.homeTeam:n.aiTeam,l=o==="ai"?"adverse":"allié",p=Object.entries(a).filter(([i])=>!t.length||t.includes(i)).flatMap(([i,r])=>r.filter(u=>!u.used).map(u=>({...u,_line:i})));return p.length?(yt(p,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,c,n,i=>{i.forEach(r=>{const f=((o==="home"?n.homeTeam:n.aiTeam)[r._line]||[]).find(g=>g.cardId===r.cardId);f&&(f.used=!0,n.log.push({text:`❌ ${f.name}${o==="ai"?" (IA)":""} exclu !`,type:"info"}))}),_e(c,n,s)}),!0):(n.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),_e(c,n,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},o,n,c)=>{const s=Object.entries(o.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,l])=>l.filter(p=>p.used).map(p=>({...p,_line:a})));return s.length?(yt(s,e,`Choisir ${e} joueur(s) à ressusciter`,n,o,a=>{a.forEach(l=>{const p=(o.homeTeam[l._line]||[]).find(i=>i.cardId===l.cardId);p&&(p.used=!1,o.log.push({text:`💫 ${p.name} ressuscité !`,type:"info"}))}),_e(n,o,c)}),!0):(o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),_e(n,o,c),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function qo(e,t,o,n,c){n.usedGc.push(e);const s=n.gcDefs||[],a=s.find(p=>p.name===t)||s.find(p=>{var i;return((i=p.name)==null?void 0:i.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const p=Go[a.effect_type];p?p(a.effect_params||{},n,o,c)||(l=!0):(c.toast(`Effet "${a.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const p=Object.entries(n.homeTeam).flatMap(([i,r])=>(r||[]).filter(u=>u.used).map(u=>({...u,_line:i})));p.length?(p[0].used=!1,n.log.push({text:`💫 ${p[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const p=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(i=>!i.used);if(p.length){const i=p.sort((r,u)=>fe(u,"ATT")-fe(r,"ATT"))[0];i.used=!0,n.log.push({text:`❄️ ${i.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}z.from("cards").delete().eq("id",e).then(()=>{}),l&&_e(o,n,c)}function Ro(e,t,o){const n=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!n.length){o.toast("Aucun joueur actif à booster","error");return}o.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${rt[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${fe(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const s=c.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[a]||[]).find(p=>p.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,o.closeModal(),_e(e,t,o)})})}function Et(e,t,o,n,c){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(i,r)=>`
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
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const p=()=>{l||(l=!0,s.remove(),setTimeout(()=>c(),50))};s.addEventListener("click",p),setTimeout(p,3500)}async function pt(e,t,o){var r,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=o,c=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,a=c?"victoire":s?"nul":"defaite",l=Hi(t.mode,a);t.matchId&&await z.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?n.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const p={credits:(n.profile.credits||0)+l,matches_played:(n.profile.matches_played||0)+1};c?p.wins=(n.profile.wins||0)+1:s?p.draws=(n.profile.draws||0)+1:p.losses=(n.profile.losses||0)+1,await z.from("users").update(p).eq("id",n.profile.id),await o.refreshProfile();const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",i.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${c?"🏆":s?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${c?"Victoire !":s?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${l.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(i),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{i.remove(),Re(e),o.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{i.remove(),Re(e),o.navigate("match",{matchMode:t.mode})})}function No(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ft(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function Oo(e,t){await zi(e,t,"random",({deckId:o,formation:n,starters:c,subsRaw:s,gcCardsEnriched:a,gcDefs:l})=>{const p=i=>Po(e,t,o,n,c,s,i,l||[]);if(!a.length){p([]);return}Ii(e,a,p)})}async function Po(e,t,o,n,c,s,a=[],l=[]){var A;const{state:p,navigate:i,toast:r}=t;let u=!1,f=null;Ve(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const g=async(S=!0)=>{u=!0,f&&(z.removeChannel(f),f=null),S&&await z.rpc("cancel_matchmaking",{p_user_id:p.profile.id}).catch(()=>{})};(A=document.getElementById("mm-cancel"))==null||A.addEventListener("click",async()=>{try{await g(!0)}catch{}Re(e),i("home")});const k=async(S,D,I)=>{if(u)return;u=!0,f&&(z.removeChannel(f),f=null);const b=document.getElementById("mm-status");b&&(b.textContent="Adversaire trouvé !"),await new Promise(B=>setTimeout(B,600)),e.isConnected&&Ho(e,t,S,I,a,l)},{data:d,error:x}=await z.rpc("try_matchmake",{p_user_id:p.profile.id,p_deck_id:o});if(x||!(d!=null&&d.success)){r("Erreur de matchmaking","error"),Re(e),i("home");return}if(d.matched){k(d.match_id,d.opponent_id,!1);return}const w=document.getElementById("mm-status");w&&(w.textContent="En attente d'un autre joueur..."),f=z.channel("matchmaking-"+p.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${p.profile.id}`},S=>{const D=S.new;D.status==="matched"&&D.match_id&&k(D.match_id,D.matched_with,!0)}).subscribe()}async function Ho(e,t,o,n,c=[],s=[]){const{state:a,navigate:l,toast:p}=t,i=n?"p1":"p2",r=n?"p2":"p1",u=(c||[]).map(m=>m.id),f=(c||[]).map(m=>({id:m.id,gc_type:m.gc_type,_gcDef:m._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await z.from("matches").select("*").eq("id",o).single();if(!g){p("Match introuvable","error"),l("home");return}async function k(){const[{data:m},{data:h},{data:T},{data:E}]=await Promise.all([z.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),z.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),z.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),z.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),_=C=>({cardId:C.card_id,position:C.position,id:C.id,firstname:C.firstname,name:C.surname_encoded,country_code:C.country_code,club_id:C.club_id,job:C.job,job2:C.job2,note_g:Number(C.note_g)||0,note_d:Number(C.note_d)||0,note_m:Number(C.note_m)||0,note_a:Number(C.note_a)||0,rarity:C.rarity,skin:C.skin,hair:C.hair,hair_length:C.hair_length,clubName:C.club_encoded_name||null,clubLogo:C.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),M=((m==null?void 0:m.starters)||[]).map(C=>_(C)),j=((h==null?void 0:h.starters)||[]).map(C=>_(C)),F=(m==null?void 0:m.formation)||"4-4-2",P=(h==null?void 0:h.formation)||"4-4-2";return{p1Team:kt(M,F),p2Team:kt(j,P),p1Subs:((m==null?void 0:m.subs)||[]).map(C=>_(C)),p2Subs:((h==null?void 0:h.subs)||[]).map(C=>_(C)),p1Formation:F,p2Formation:P,p1Name:(T==null?void 0:T.club_name)||(T==null?void 0:T.pseudo)||"Joueur 1",p2Name:(E==null?void 0:E.club_name)||(E==null?void 0:E.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?u:[],gc_p2:n?[]:u,gcCardsFull_p1:n?f:[],gcCardsFull_p2:n?[]:f,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let d=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!d)if(n){d=await k();const{data:m}=await z.from("matches").select("game_state").eq("id",o).single();!(m!=null&&m.game_state)||!Object.keys(m.game_state).length?await z.from("matches").update({game_state:d,turn_user_id:g.home_id}).eq("id",o):d=m.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let m=0;m<30&&!d;m++){await new Promise(T=>setTimeout(T,400));const{data:h}=await z.from("matches").select("game_state").eq("id",o).single();h!=null&&h.game_state&&Object.keys(h.game_state).length&&(d=h.game_state)}if(!d){p("Erreur de synchronisation","error"),l("home");return}d.gc_p2=u,d.gcCardsFull_p2=f,await z.from("matches").update({game_state:d}).eq("id",o)}let x=!1,w=null,A=!1;const S=new Set,D=new Set;function I(m){var C,H;try{z.removeChannel(b)}catch{}const h=d[i+"Score"]||0,T=d[r+"Score"]||0;let E,_;m.winner_id?(E=m.winner_id===a.profile.id,_=!1):m.forfeit?(E=h>T,_=!1):(_=h===T,E=h>T),(C=document.getElementById("pvp-end-overlay"))==null||C.remove();const M=document.createElement("div");M.id="pvp-end-overlay",M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const j=_?"🤝":E?"🏆":"😞",F=_?"MATCH NUL":E?"VICTOIRE !":"DÉFAITE",P=_?"#fff":E?"#FFD700":"#ff6b6b";M.innerHTML=`
      <div style="font-size:64px">${j}</div>
      <div style="font-size:26px;font-weight:900;color:${P}">${F}</div>
      <div style="font-size:18px">${d[i+"Name"]} ${h} – ${T} ${d[r+"Name"]}</div>
      ${m.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${E?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(M),(H=M.querySelector("#pvp-end-home"))==null||H.addEventListener("click",()=>{M.remove(),Re(e),l("home")})}const b=z.channel("pvp-match-"+o).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${o}`},m=>{const h=m.new;try{if(h.status==="finished"||h.forfeit){if(x)return;x=!0,w&&(clearInterval(w),w=null),h.game_state&&(d=h.game_state),I(h);return}if(h.game_state){const T=d;d=h.game_state;const E=d._lastGC;if(E&&E.seq&&!D.has(E.seq)&&(D.add(E.seq),E.by!==i)){de(E.type,E.by,()=>G());return}const _=T[i+"Score"]||0,M=T[r+"Score"]||0,j=d[i+"Score"]||0,F=d[r+"Score"]||0,P=j>_,C=F>M;if((P||C)&&!S.has(d.round)){S.add(d.round);const H=[...d.log||[]].reverse().find(Q=>Q.isGoal),U=((H==null?void 0:H.homePlayers)||[]).map(Q=>({name:Q.name,note:Q.note,portrait:Q.portrait,job:Q.job}));ee(U,j,F,P,()=>G());return}G()}}catch(T){console.error("[PvP] crash:",T)}}).subscribe();async function B(m){Object.assign(d,m),d.lastActionAt=new Date().toISOString();const{error:h}=await z.from("matches").update({game_state:d}).eq("id",o);h&&p("Erreur de synchronisation","error");try{G()}catch(T){console.error("[PvP] renderPvpScreen crash:",T)}}async function X(){if(x)return;x=!0,w&&(clearInterval(w),w=null);const m=n?g.away_id:g.home_id,h=n?"p2":"p1",T=n?"p1":"p2",E={...d,[h+"Score"]:3,[T+"Score"]:0,phase:"finished"};try{await z.from("matches").update({status:"finished",forfeit:!0,winner_id:m,home_score:E.p1Score||0,away_score:E.p2Score||0,game_state:E}).eq("id",o)}catch{}try{z.removeChannel(b)}catch{}setTimeout(()=>{Re(e),l("home")},800)}const re={BOOST_STAT:({value:m=1,count:h=1,roles:T=[]},E,_)=>{const M=E[i+"Team"],j=Object.entries(M).filter(([F])=>!T.length||T.includes(F)).flatMap(([F,P])=>P.filter(C=>!C.used).map(C=>({...C,_line:F})));if(!j.length){E.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),_(E);return}Z(j,h,`Choisir ${h} joueur(s) à booster (+${m})`,F=>{F.forEach(P=>{const C=(M[P._line]||[]).find(H=>H.cardId===P.cardId);C&&(C.boost=(C.boost||0)+m,E.log.push({text:`⚡ +${m} sur ${C.name}`,type:"info"}))}),E[i+"Team"]=M,_(E)})},DEBUFF_STAT:({value:m=1,count:h=1,roles:T=[],target:E="ai"},_,M)=>{const j=E==="home"?i:r,F=_[j+"Team"],P=E==="home"?"allié":"adverse",C=Object.entries(F).filter(([H])=>!T.length||T.includes(H)).flatMap(([H,U])=>U.filter(Q=>!Q.used).map(Q=>({...Q,_line:H})));if(!C.length){_.log.push({text:`🎯 Aucun joueur ${P}`,type:"info"}),M(_);return}Z(C,h,`Choisir ${h} joueur(s) ${P}(s) (-${m})`,H=>{H.forEach(U=>{const Q=(F[U._line]||[]).find(ce=>ce.cardId===U.cardId);Q&&(Q.boost=(Q.boost||0)-m,_.log.push({text:`🎯 -${m} sur ${Q.name}`,type:"info"}))}),_[j+"Team"]=F,M(_)})},GRAY_PLAYER:({count:m=1,roles:h=[],target:T="ai"},E,_)=>{const M=T==="home"?i:r,j=E[M+"Team"],F=T==="home"?"allié":"adverse",P=Object.entries(j).filter(([C])=>!h.length||h.includes(C)).flatMap(([C,H])=>H.filter(U=>!U.used).map(U=>({...U,_line:C})));if(!P.length){E.log.push({text:`❌ Aucun joueur ${F}`,type:"info"}),_(E);return}Z(P,m,`Choisir ${m} joueur(s) ${F}(s) à exclure`,C=>{C.forEach(H=>{const U=(j[H._line]||[]).find(Q=>Q.cardId===H.cardId);U&&(U.used=!0,E.log.push({text:`❌ ${U.name} exclu !`,type:"info"}))}),E[M+"Team"]=j,_(E)})},REVIVE_PLAYER:({count:m=1,roles:h=[]},T,E)=>{const _=T[i+"Team"],M=Object.entries(_).filter(([j])=>!h.length||h.includes(j)).flatMap(([j,F])=>F.filter(P=>P.used).map(P=>({...P,_line:j})));if(!M.length){T.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),E(T);return}Z(M,m,`Choisir ${m} joueur(s) à ressusciter`,j=>{j.forEach(F=>{const P=(_[F._line]||[]).find(C=>C.cardId===F.cardId);P&&(P.used=!1,T.log.push({text:`💫 ${P.name} ressuscité !`,type:"info"}))}),T[i+"Team"]=_,E(T)})},REMOVE_GOAL:({},m,h)=>{const T=r+"Score";m[T]>0?(m[T]--,m.log.push({text:"🚫 Dernier but annulé !",type:"info"})):m.log.push({text:"🚫 Aucun but à annuler",type:"info"}),h(m)},ADD_GOAL_DRAW:({},m,h)=>{m[i+"Score"]===m[r+"Score"]?(m[i+"Score"]++,m.log.push({text:"🎯 But bonus !",type:"info"})):m.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),h(m)},ADD_SUB:({value:m=1},h,T)=>{h.maxSubs=(h.maxSubs||3)+m,h.log.push({text:`🔄 +${m} remplacement(s)`,type:"info"}),T(h)},CUSTOM:({},m,h)=>h(m)};function Z(m,h,T,E){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let M=[];function j(){var P,C;const F=m.map(H=>{const U={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[H._line]||"#555",Q=fe(H,H._line)+(H.boost||0),we=M.find(J=>J.cardId===H.cardId)?"#FFD700":"rgba(255,255,255,0.25)",W=H.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${H.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${we};background:${U};overflow:hidden;cursor:pointer;${W}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${H.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${Q}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${H._line}</div>
        </div>`}).join("");_.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${T}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${M.length}/${h}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${F}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${M.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${M.length}/${h})
          </button>
        </div>`,(P=_.querySelector("#pp-close"))==null||P.addEventListener("click",()=>_.remove()),_.querySelectorAll(".pp-item").forEach(H=>{H.addEventListener("click",()=>{const U=H.dataset.cid,Q=m.find(we=>we.cardId===U),ce=M.findIndex(we=>we.cardId===U);Q&&(ce>-1?M.splice(ce,1):M.length<h&&M.push(Q),j())})}),(C=_.querySelector("#pp-confirm"))==null||C.addEventListener("click",()=>{_.remove(),E(M)})}j(),document.body.appendChild(_)}async function $(m,h){const E=(d["gcCardsFull_"+i]||[]).find(F=>F.id===m),_=(E==null?void 0:E._gcDef)||(d.gcDefs||[]).find(F=>{var P;return F.name===h||((P=F.name)==null?void 0:P.toLowerCase().trim())===(h==null?void 0:h.toLowerCase().trim())}),M=[...d["usedGc_"+i]||[],m],j={type:h,by:i,seq:(d._gcAnimSeq||0)+1};D.add(j.seq),de(h,i,async()=>{if(_!=null&&_.effect_type&&_.effect_type!=="CUSTOM"){const P=re[_.effect_type];if(P){const C={...d};P(_.effect_params||{},C,async H=>{H["usedGc_"+i]=M,H._lastGC=j,H._gcAnimSeq=j.seq,await B(H)});return}}const F={...d};switch(h){case"Remplacement+":F.maxSubs=(F.maxSubs||3)+1,F.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const P=r+"Score";F[P]>0&&(F[P]--,F.log.push({text:"🚫 But annulé",type:"info"}));break}}F["usedGc_"+i]=M,F._lastGC=j,F._gcAnimSeq=j.seq,await B(F)})}function y(m,h){const T="usedCardIds_"+m,E=new Set(d[T]||[]);h.forEach(_=>E.add(_)),d[T]=[...E]}function q(){for(const m of["p1","p2"]){const h=new Set(d["usedCardIds_"+m]||[]),T=d[m+"Team"];if(T)for(const E of["GK","DEF","MIL","ATT"])(T[E]||[]).forEach(_=>{_.used=h.has(_.cardId)})}}function G(){var Ue,Yt,Wt,Xt,Jt,Qt;if(d.phase==="reveal")return Y();if(d.phase==="midfield")return ae();if(d.phase==="finished")return Ce();const m=d[i+"Team"],h=d[r+"Team"];q();const T=d[i+"Score"],E=d[r+"Score"],_=d[i+"Name"],M=d[r+"Name"],j=d.phase===i+"-attack",F=d.phase===i+"-defense",P=Array.isArray(d["selected_"+i])?d["selected_"+i]:[],C=P.map(N=>N.cardId),H=window.innerWidth>=700,U=d[i+"Subs"]||[],Q=d["usedSubIds_"+i]||[],ce=U.filter(N=>!Q.includes(N.cardId)),we=d["gcCardsFull_"+i]||[],W=d["usedGc_"+i]||[],J=we.filter(N=>!W.includes(N.id)),ie=d.boostOwner===i&&!d.boostUsed,le=!["GK","DEF","MIL","ATT"].some(N=>(h[N]||[]).some(te=>!te.used)),me=[...m.MIL||[],...m.ATT||[]].filter(N=>!N.used),ke=j&&le&&me.length===0?[...m.GK||[],...m.DEF||[]].filter(N=>!N.used).map(N=>N.cardId):[];function xe(N,te,$e){var ii,oi;const se=N._gcDef,Ke={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[se==null?void 0:se.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Qe={purple:"#b06ce0",light_blue:"#00d4ef"}[se==null?void 0:se.color]||"#b06ce0",st=(se==null?void 0:se.name)||N.gc_type,lt=(se==null?void 0:se.effect)||((ii=je[N.gc_type])==null?void 0:ii.desc)||"",Zt=se!=null&&se.image_url?`/manager-wars/icons/${se.image_url}`:null,Bi=((oi=je[N.gc_type])==null?void 0:oi.icon)||"⚡",ei=Math.round($e*.22),ti=Math.round($e*.22),Lt=$e-ei-ti,Fi=st.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${N.id}" data-gc-type="${N.gc_type}"
        style="box-sizing:border-box;width:${te}px;height:${$e}px;border-radius:10px;border:2px solid ${Qe};background:${Ke};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${ei}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Fi}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${te-6}px">${st}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Lt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Zt?`<img src="${Zt}" style="max-width:${te-10}px;max-height:${Lt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Lt*.55)}px">${Bi}</span>`}
        </div>
        <div style="height:${ti}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${lt.slice(0,38)}</span>
        </div>
      </div>`}function Ae(N,te){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${N}px;height:${te}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(te*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(te*.2)}px">⚡</div>
        <div style="font-size:${Math.round(te*.09)}px;color:#000;font-weight:900">+${d.boostValue}</div>
      </div>`}const ze=(N,te)=>te?Ae(130,175):xe(N,130,175),Pe=(N,te)=>te?Ae(68,95):xe(N,68,95),De=H?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ge=j?he(i)?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${P.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${De};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:F?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${P.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${M}</div>`,Me=j&&!he(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':j||F?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${P.length}/3 sélectionné(s)</div>`:"",qe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${H?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ce.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ce.map(N=>`<div class="pvp-sub-btn" data-sub-id="${N.cardId}" style="cursor:pointer;flex-shrink:0">${Be(N,H?76:44,H?100:58)}</div>`).join("")}
    </div>`,Fe=j?"attack":F?"defense":"idle",He=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${gt(m,d[i+"Formation"],Fe,C,300,300,ke)}
      </div>
    </div>`;function Ne(N){if(N.type==="duel"&&(N.homeTotal!=null||N.aiTotal!=null)){const te=(N.homeTotal||0)>=(N.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(N.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(N.homePlayers||[]).map($e=>tt($e)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${te?20:14}px;font-weight:900;color:${te?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${N.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${te?14:20}px;font-weight:900;color:${te?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${N.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(N.aiPlayers||[]).map($e=>tt($e)).join("")}
            </div>
          </div>
          ${N.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${N.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${N.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${N.type==="goal"?700:400};padding:3px 2px">${N.text||""}</div>`}const Je=(()=>{var te,$e;if(F&&((te=d.pendingAttack)!=null&&te.players)){const se=d.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${M} ATTAQUE — Défendez !</div>
          ${et((se.players||[]).map(Ke=>({...Ke,used:!1})),"#ff6b6b",se.total)}
        </div>`}if(j&&(($e=d.pendingAttack)!=null&&$e.players)){const se=d.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${et((se.players||[]).map(Ke=>({...Ke,used:!1})),"#00ff88",se.total)}
        </div>`}const N=(d.log||[]).slice(-1)[0];return N?'<div style="padding:2px 4px">'+Ne(N)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Oe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${_}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${T} – ${E}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${M}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Je}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(d.log||[]).length})
      </button>`;Ve(e),e.style.overflow="hidden",H?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Oe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${qe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${He}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ge}${Me}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${J.map(N=>ze(N,!1)).join("")}
            ${ie?ze(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Oe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${gt(m,d[i+"Formation"],Fe,C,300,300,ke)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${J.map(N=>Pe(N,!1)).join("")}
            ${ie?Pe(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${j&&ce.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${j&&ce.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${j&&ce.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${j&&ce.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${ce.length}</div>
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
      </div>`;function Se(){const N=e.querySelector(".match-screen");if(!N)return;const te=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);N.style.height=te+"px",N.style.minHeight=te+"px",N.style.maxHeight=te+"px",N.style.overflow="hidden";const $e=e.querySelector("#mobile-action-bar"),se=e.querySelector("#mobile-play-area");$e&&se&&(se.style.paddingBottom=$e.offsetHeight+"px")}if(Se(),setTimeout(Se,120),setTimeout(Se,400),A||(A=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Se),window.visualViewport.addEventListener("scroll",Se)),window.addEventListener("resize",Se)),function(){const te=e.querySelector(".terrain-wrapper svg");te&&(te.removeAttribute("width"),te.removeAttribute("height"),te.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",te.setAttribute("viewBox","-26 -26 352 352"),te.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(N=>{N.addEventListener("click",()=>{if(!j&&!F)return;const te=N.dataset.cardId,$e=N.dataset.role,se=(m[$e]||[]).find(lt=>lt.cardId===te);if(!se||se.used)return;const Ke=ke.includes(te);if(j&&!["MIL","ATT"].includes($e)&&!Ke)return;Array.isArray(d["selected_"+i])||(d["selected_"+i]=[]);const Qe=d["selected_"+i],st=Qe.findIndex(lt=>lt.cardId===te);st>-1?Qe.splice(st,1):Qe.length<3&&Qe.push({...se,_role:$e}),G()})}),e.querySelectorAll(".match-used-hit").forEach(N=>{N.addEventListener("click",()=>v(N.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(N=>{N.addEventListener("click",()=>v())}),(Ue=e.querySelector("#pvp-sub-open"))==null||Ue.addEventListener("click",()=>v()),e.querySelectorAll(".pvp-gc-mini").forEach(N=>{N.addEventListener("click",()=>be(N.dataset.gcId,N.dataset.gcType))}),(Yt=e.querySelector("#pvp-boost-card"))==null||Yt.addEventListener("click",()=>L()),(Wt=e.querySelector("#pvp-action"))==null||Wt.addEventListener("click",N=>{j?N.currentTarget.dataset.pass==="1"||!he(i)?ne():K():F&&ve()}),(Xt=e.querySelector("#pvp-quit"))==null||Xt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&X()}),(Jt=e.querySelector("#pvp-view-opp"))==null||Jt.addEventListener("click",()=>O()),(Qt=e.querySelector("#pvp-toggle-history"))==null||Qt.addEventListener("click",()=>V()),w&&(clearInterval(w),w=null),(j||F)&&!x){let N=30,te=!1;const $e=()=>document.getElementById("pvp-timer"),se=()=>{$e()&&($e().textContent=N+"s",$e().style.color=te?"#ff4444":"#fff")};se(),w=setInterval(()=>{N--,N<0?te?(clearInterval(w),w=null,j&&!he(i)?ne():X()):(te=!0,N=15,se()):se()},1e3)}}function Y(){Ve(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${d[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ft(d[r+"Team"],d[r+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await B({phase:"midfield"})},5e3)}let oe=!1;function ae(){if(oe)return;const m=d[i+"Team"].MIL||[],h=d[r+"Team"].MIL||[];function T(J){return J.reduce((ie,le)=>ie+fe(le,"MIL"),0)}function E(J){let ie=0;for(let le=0;le<J.length-1;le++){const me=Xe(J[le],J[le+1]);me==="#00ff88"?ie+=2:me==="#FFD700"&&(ie+=1)}return ie}const _=T(m)+E(m),M=T(h)+E(h),j=_>=M;function F(J,ie,le){return`<div id="duel-row-${le}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ie}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${J.map((me,ke)=>{const xe=ke<J.length-1?Xe(me,J[ke+1]):null,Ae=!xe||xe==="#ff3333"||xe==="#cc2222",ze=xe==="#00ff88"?"+2":xe==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${le}" data-idx="${ke}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Be({...me,note:fe(me,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ke<J.length-1?`<div class="duel-link duel-link-${le}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Ae?"rgba(255,255,255,0.12)":xe};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Ae?"none":`0 0 8px ${xe}`}">
              ${ze?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${xe}">${ze}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${le}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${T(J)} + ${E(J)} liens = <b style="color:#fff">${T(J)+E(J)}</b>
        </div>
      </div>`}Ve(e),e.innerHTML=`
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
      ${F(m,d[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${F(h,d[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const P=(J,ie)=>e.querySelectorAll(J).forEach((le,me)=>{setTimeout(()=>{le.style.opacity="1",le.style.transform="translateY(0) scale(1)"},ie+me*90)});P(".duel-card-me",150),P(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((J,ie)=>setTimeout(()=>{J.style.opacity="1"},ie*70)),900),setTimeout(()=>{const J=e.querySelector("#pvp-vs");J&&(J.style.opacity="1",J.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ie=>ie.style.opacity="1")},1250);function C(J,ie,le){const me=document.getElementById(J);if(!me)return;const ke=performance.now(),xe=Ae=>{const ze=Math.min(1,(Ae-ke)/le);me.textContent=Math.round(ie*(1-Math.pow(1-ze,3))),ze<1?requestAnimationFrame(xe):me.textContent=ie};requestAnimationFrame(xe)}setTimeout(()=>{C("pvp-score-me",_,800),C("pvp-score-opp",M,800)},1500);const H=d.p1Team.MIL||[],U=d.p2Team.MIL||[],Q=T(H)+E(H),ce=T(U)+E(U),we=Q>=ce?"p1":"p2";let W=d.boostValue;W==null&&(W=Ti(),d.boostValue=W,d.boostOwner=we,d.boostUsed=!1),oe=!0,setTimeout(()=>{const J=e.querySelector("#duel-row-"+(j?"me":"opp")),ie=e.querySelector("#duel-row-"+(j?"opp":"me")),le=document.getElementById("pvp-score-me"),me=document.getElementById("pvp-score-opp"),ke=j?le:me,xe=j?me:le;ke&&(ke.style.fontSize="80px",ke.style.color=j?"#FFD700":"#ff6b6b",ke.style.animation="duelPulse .5s ease"+(j?",duelGlow 1.5s ease infinite .5s":"")),xe&&(xe.style.opacity="0.25"),setTimeout(()=>{J&&(J.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",J.style.zIndex="5"),setTimeout(()=>{const Ae=document.getElementById("duel-shock");Ae&&(Ae.style.animation="shockwave .5s ease-out forwards"),ie&&(ie.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var De;const Ae=document.getElementById("pvp-duel-finale");if(!Ae)return;const ze=d.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+W+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Pe=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;Ae.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(j?"⚽ "+d[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+d[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ze+Pe,Ae.style.transition="opacity .45s ease",Ae.style.opacity="1",Ae.style.pointerEvents="auto",(De=document.getElementById("pvp-start-match"))==null||De.addEventListener("click",async()=>{const Ge=we;await B({phase:Ge+"-attack",attacker:Ge,round:1,boostValue:W,boostUsed:!1,boostOwner:Ge})})},600)},700)},2800)}function ee(m,h,T,E,_){const M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const j=Array.from({length:10},(H,U)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${U%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][U%8]}</div>`).join(""),F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};M.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${j}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${E?"BUT !":"BUT ADV !"}
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
          <div style="width:50px;height:50px;border-radius:50%;background:${F[H.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${H.portrait?`<img src="${H.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(H.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(M);let P=!1;const C=()=>{P||(P=!0,M.remove(),setTimeout(()=>_(),50))};M.addEventListener("click",C),setTimeout(C,3500)}function de(m,h,T){var W,J;const E=(d.gcDefs||[]).find(ie=>{var le;return ie.name===m||((le=ie.name)==null?void 0:le.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),_={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[E==null?void 0:E.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",M={purple:"#b06ce0",light_blue:"#00d4ef"}[E==null?void 0:E.color]||"#b06ce0",j=(E==null?void 0:E.name)||m,F=(E==null?void 0:E.effect)||((W=je[m])==null?void 0:W.desc)||"",P=E!=null&&E.image_url?`/manager-wars/icons/${E.image_url}`:null,C=((J=je[m])==null?void 0:J.icon)||"⚡",U=h===i?"Vous":d[h+"Name"]||"Adversaire",Q=document.createElement("div");Q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",Q.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${M}66}50%{box-shadow:0 0 60px ${M}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${M};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${U} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${M};background:${_};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${j.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${j}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${P?`<img src="${P}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${C}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${F}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(Q);let ce=!1;const we=()=>{ce||(ce=!0,Q.remove(),setTimeout(()=>T&&T(),50))};Q.addEventListener("click",we),setTimeout(we,3e3)}function be(m,h){var Q,ce,we,W;const E=(d["gcCardsFull_"+i]||[]).find(J=>J.id===m),_=E==null?void 0:E._gcDef,M={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[_==null?void 0:_.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",j={purple:"#b06ce0",light_blue:"#00d4ef"}[_==null?void 0:_.color]||"#b06ce0",F=(_==null?void 0:_.name)||h,P=(_==null?void 0:_.effect)||((Q=je[h])==null?void 0:Q.desc)||"Carte spéciale.",C=_!=null&&_.image_url?`/manager-wars/icons/${_.image_url}`:null,H=((ce=je[h])==null?void 0:ce.icon)||"⚡",U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",U.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${j};background:${M};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${j}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${F.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${F}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${C?`<img src="${C}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${H}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${P}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(U),(we=U.querySelector("#pvp-gc-back"))==null||we.addEventListener("click",()=>U.remove()),(W=U.querySelector("#pvp-gc-use"))==null||W.addEventListener("click",()=>{U.remove(),$(m,h)})}function L(){var E;const m=d[i+"Team"],h=Object.entries(m).flatMap(([_,M])=>(M||[]).filter(j=>!j.used).map(j=>({...j,_line:_})));if(!h.length)return;const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",T.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${d.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${h.map(_=>{const M={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[_._line]||"#555",j=fe(_,_._line)+(_.boost||0);return`<div class="bp-item" data-cid="${_.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${M};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${_.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${j}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(T),(E=T.querySelector("#bp-close"))==null||E.addEventListener("click",()=>T.remove()),T.querySelectorAll(".bp-item").forEach(_=>{_.addEventListener("click",async()=>{const M=_.dataset.cid,j=h.find(P=>P.cardId===M);if(!j)return;const F=(m[j._line]||[]).find(P=>P.cardId===M);F&&(F.boost=(F.boost||0)+d.boostValue),T.remove(),await B({[i+"Team"]:m,boostUsed:!0})})})}function v(m=null){var ce,we;if(!(d.phase===i+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const T=d[i+"Team"],E=d["usedSubIds_"+i]||[],_=d.maxSubs||3;if(E.length>=_){p(`Maximum ${_} remplacements atteint`,"warning");return}const M=Object.entries(T).flatMap(([W,J])=>(J||[]).filter(ie=>ie.used).map(ie=>({...ie,_line:W}))),j=(d[i+"Subs"]||[]).filter(W=>!E.includes(W.cardId));if(!M.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!j.length){p("Aucun remplaçant disponible","warning");return}let F=Math.max(0,M.findIndex(W=>W.cardId===m));const P=((ce=M[F])==null?void 0:ce._line)||((we=M[F])==null?void 0:we.job);let C=Math.max(0,j.findIndex(W=>W.job===P)),H=!1;const U=document.createElement("div");U.id="pvp-sub-overlay",U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function Q(){var xe,Ae,ze,Pe,De,Ge;const W=M[F],J=j[C],ie=Math.min(130,Math.round((window.innerWidth-90)/2)),le=Math.round(ie*1.35),me=Me=>`background:rgba(255,255,255,0.12);border:none;color:${Me?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Me?"default":"pointer"};flex-shrink:0`;U.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${E.length}/${_})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${me(C===0)}" ${C===0?"disabled":""}>▲</button>
          <div>${J?Be({...J,used:!1,boost:0},ie,le):"<div>—</div>"}</div>
          <button id="pin-down" style="${me(C>=j.length-1)}" ${C>=j.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${C+1}/${j.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${me(F===0)}" ${F===0?"disabled":""}>▲</button>
          <div>${W?Be({...W,used:!1,boost:0},ie,le):"<div>—</div>"}</div>
          <button id="pout-down" style="${me(F>=M.length-1)}" ${F>=M.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${F+1}/${M.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(xe=U.querySelector("#psub-close"))==null||xe.addEventListener("click",()=>U.remove()),(Ae=U.querySelector("#pout-up"))==null||Ae.addEventListener("click",()=>{F>0&&(F--,Q())}),(ze=U.querySelector("#pout-down"))==null||ze.addEventListener("click",()=>{F<M.length-1&&(F++,Q())}),(Pe=U.querySelector("#pin-up"))==null||Pe.addEventListener("click",()=>{C>0&&(C--,Q())}),(De=U.querySelector("#pin-down"))==null||De.addEventListener("click",()=>{C<j.length-1&&(C++,Q())});const ke=(Me,qe,Fe,He)=>{const Ne=U.querySelector("#"+Me);if(!Ne)return;let Je=0;Ne.addEventListener("touchstart",Oe=>{Je=Oe.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",Oe=>{const Se=Oe.changedTouches[0].clientY-Je;if(Math.abs(Se)<30)return;const Ue=qe();Se<0&&Ue<He-1?(Fe(Ue+1),Q()):Se>0&&Ue>0&&(Fe(Ue-1),Q())},{passive:!0})};ke("pin-panel",()=>C,Me=>C=Me,j.length),ke("pout-panel",()=>F,Me=>F=Me,M.length),(Ge=U.querySelector("#psub-confirm"))==null||Ge.addEventListener("click",async Me=>{if(Me.preventDefault(),Me.stopPropagation(),H)return;H=!0;const qe=M[F],Fe=j[C];if(!qe||!Fe)return;const He=qe._line,Ne=(T[He]||[]).findIndex(Se=>Se.cardId===qe.cardId);if(Ne===-1){p("Erreur : joueur introuvable","error"),U.remove();return}const Je={...Fe,_line:He,position:qe.position,used:!1,boost:0};T[He].splice(Ne,1,Je);const Oe=[...E,Fe.cardId];U.remove(),R(qe,Fe,async()=>{await B({[i+"Team"]:T,[r+"Team"]:d[r+"Team"],["usedSubIds_"+i]:Oe})})})}document.body.appendChild(U),Q()}function R(m,h,T){const E={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},_=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const M=(P,C,H)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${C};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${H}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${E[P.job]||"#555"};border:3px solid ${C};position:relative;overflow:hidden;margin:0 auto">
        ${Te(P)?`<img src="${Te(P)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(P.name||"").slice(0,12)}</div>
    </div>`;_.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${M(h,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${M(m,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(_);let j=!1;const F=()=>{j||(j=!0,_.remove(),setTimeout(()=>T(),50))};_.addEventListener("click",F),setTimeout(F,2200)}function O(){var h;const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",m.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${d[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ft(d[r+"Team"],d[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(m),(h=m.querySelector("#pvp-opp-close"))==null||h.addEventListener("click",()=>m.remove())}function V(){var T;const m=d.log||[],h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",h.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${m.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...m].reverse().map(E=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${E.type==="goal"?"#FFD700":E.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${E.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(h),(T=h.querySelector("#pvp-hist-close"))==null||T.addEventListener("click",()=>h.remove())}async function ne(){if(d.phase!==i+"-attack")return;const m=i==="p1"?"p2":"p1",h=(d.round||0)+1,T=[...d.log||[]];T.push({type:"info",text:`⏭️ ${d[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const E=Ee(d),_=he(m),M=E||!_?"finished":m+"-attack";await B({["selected_"+i]:[],modifiers:{...d.modifiers,[i]:{}},pendingAttack:null,phase:M,attacker:m,round:h,log:T}),M==="finished"&&await Ie(d)}async function K(){const m=d[i+"Team"],h=!["GK","DEF","MIL","ATT"].some(M=>(d[r+"Team"][M]||[]).some(j=>!j.used)),T=(d["selected_"+i]||[]).map(M=>{const j=(m[M._role]||[]).find(Q=>Q.cardId===M.cardId)||M,F=h&&["GK","DEF"].includes(M._role),P=m[M._role]||[],C=P.findIndex(Q=>Q.cardId===M.cardId),H=at(P.length),U=C>=0?H[C]:j._col??1;return{...j,_line:M._role,_col:U,...F?{note_a:Math.max(1,Number(j.note_a)||0)}:{}}});if(!T.length)return;const E=Rt(T,d.modifiers[i]||{});y(i,T.map(M=>M.cardId)),T.forEach(M=>{const j=(m[M._role]||[]).find(F=>F.cardId===M.cardId);j&&(j.used=!0)}),d["selected_"+i]=[],G();const _=[...d.log||[]];if(h){const M=(d[i+"Score"]||0)+1,j=T.map(U=>({name:U.name,note:fe(U,U._line||"ATT"),portrait:Te(U),job:U.job}));_.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:j,homeTotal:E.total,aiTotal:0});const F=(d.round||0)+1,P=i==="p1"?"p2":"p1",C={...d,[i+"Team"]:m,[i+"Score"]:M},H=Ee(C);S.add(F),ee(j,M,d[r+"Score"]||0,!0,async()=>{await B({[i+"Team"]:m,[i+"Score"]:M,["selected_"+i]:[],modifiers:{...d.modifiers,[i]:{}},pendingAttack:null,phase:H?"finished":P+"-attack",attacker:P,round:F,log:_}),H&&await Ie({...d,[i+"Score"]:M})});return}_.push({type:"pending",text:`⚔️ ${d[i+"Name"]} attaque (${E.total})`}),await B({[i+"Team"]:m,[r+"Team"]:d[r+"Team"],pendingAttack:{...E,players:T,side:i},["selected_"+i]:[],modifiers:{...d.modifiers,[i]:{}},phase:r+"-defense",log:_})}async function ve(){const m=d[i+"Team"],h=(d["selected_"+i]||[]).map(W=>{const J=(m[W._role]||[]).find(xe=>xe.cardId===W.cardId)||W,ie=m[W._role]||[],le=ie.findIndex(xe=>xe.cardId===W.cardId),me=at(ie.length),ke=le>=0?me[le]:J._col??1;return{...J,_line:W._role,_col:ke}}),T=Nt(h,d.modifiers[i]||{});y(i,h.map(W=>W.cardId)),h.forEach(W=>{const J=(m[W._role]||[]).find(ie=>ie.cardId===W.cardId);J&&(J.used=!0)}),d["selected_"+i]=[],G();const E=Ot(d.pendingAttack.total,T.total,d.modifiers[i]||{}),_=d.pendingAttack.side,M=E==="attack"||(E==null?void 0:E.goal),j=_==="p1"?"p2":"p1",F=(d.round||0)+1,P=(d.pendingAttack.players||[]).map(W=>({name:W.name,note:fe(W,W._line||"ATT"),portrait:Te(W),job:W.job})),C=[...d.log||[]];C.push({type:"duel",isGoal:M,homeScored:M&&_===i,text:M?`⚽ BUT de ${d[_+"Name"]} ! (${d.pendingAttack.total} vs ${T.total})`:`✋ Attaque stoppée (${d.pendingAttack.total} vs ${T.total})`,homePlayers:P,aiPlayers:h.map(W=>({name:W.name,note:fe(W,W._line||"DEF"),portrait:Te(W),job:W.job})),homeTotal:d.pendingAttack.total,aiTotal:T.total});const H=M?(d[_+"Score"]||0)+1:d[_+"Score"]||0,U={...d,[i+"Team"]:m,[_+"Score"]:H},Q=Ee(U),ce=Q?"finished":j+"-attack",we=async()=>{await B({[i+"Team"]:m,[r+"Team"]:d[r+"Team"],[_+"Score"]:H,["selected_"+i]:[],modifiers:{...d.modifiers,[i]:{}},pendingAttack:null,phase:ce,attacker:j,round:F,log:C}),(ce==="finished"||Q)&&await Ie({...d,[_+"Score"]:H})};if(M){const W=_===i,J=W?H:d[i+"Score"]||0,ie=W?d[r+"Score"]||0:H;S.add(F),ee(P,J,ie,W,we)}else await we()}function ge(m){return["MIL","ATT"].some(h=>(m[h]||[]).some(T=>!T.used))}function ue(m){return["GK","DEF","MIL","ATT"].some(h=>(m[h]||[]).some(T=>!T.used))}function pe(m){return ue(m)&&!ge(m)}function he(m){const h=d[m+"Team"],T=d[(m==="p1"?"p2":"p1")+"Team"];return!!(ge(h)||!ue(T)&&pe(h))}function Ee(m){const h=["MIL","ATT"].some(C=>(m.p1Team[C]||[]).some(H=>!H.used)),T=["MIL","ATT"].some(C=>(m.p2Team[C]||[]).some(H=>!H.used)),E=ue(m.p1Team),_=ue(m.p2Team);return!h&&!(!_&&E)&&(!T&&!(!E&&_))}function Le(m){const h=m.p1Score||0,T=m.p2Score||0;return h===T?null:h>T?g.home_id:g.away_id}async function Ie(m){try{await z.from("matches").update({status:"finished",winner_id:Le(m),home_score:m.p1Score||0,away_score:m.p2Score||0}).eq("id",o)}catch(h){console.error("[PvP] finishMatch:",h)}}function Ce(){var _;const m=d[i+"Score"],h=d[r+"Score"],T=m>h,E=m===h;Ve(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${T?"🏆":E?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${T?"Victoire !":E?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${m} - ${h}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(_=document.getElementById("pvp-home"))==null||_.addEventListener("click",()=>{try{z.removeChannel(b)}catch{}Re(e),l("home")})}G()}const Uo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Ko(e,t){const{state:o,toast:n}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await Kt(e,t)}async function Kt(e,t){const{state:o,toast:n}=t,{data:c}=await z.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:s}=await z.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",o.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(c||[]).filter(i=>i.seller_id!==o.profile.id),l=s||[];l.filter(i=>i.status==="active").length,e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${a.length} carte(s) en vente · Solde : ${(o.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${l.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function p(i){const r=document.getElementById("mkt-content"),u=i==="buy"?a:l;if(u.length===0){r.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${i==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const f=i==="mine"?[...u].sort((g,k)=>g.status!==k.status?g.status==="active"?-1:1:new Date(k.listed_at)-new Date(g.listed_at)):u;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${f.map(g=>{var S,D,I,b;const k=(S=g.card)==null?void 0:S.player;if(!k)return"";const d=k.job==="GK"?k.note_g:k.job==="DEF"?k.note_d:k.job==="MIL"?k.note_m:k.note_a,x=Uo[k.rarity],w=(o.profile.credits||0)>=g.price,A=g.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${A?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${Wo(k.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${x};flex-shrink:0">${d}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${k.firstname} ${k.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${k.country_code} · ${((D=k.clubs)==null?void 0:D.encoded_name)||"—"} · ${k.rarity} · ${k.job}</div>
            ${i==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((I=g.seller)==null?void 0:I.pseudo)||"—"}</div>`:A?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((b=g.buyer)==null?void 0:b.pseudo)||"—"} · ${g.sold_at?new Date(g.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(g.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${g.price.toLocaleString("fr")}</div>
            ${i==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${g.id}" ${w?"":"disabled"} style="margin-top:4px">${w?"Acheter":"Trop cher"}</button>`:A?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${g.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(g=>{g.addEventListener("click",()=>Vo(g.dataset.buy,u,e,t))}),r.querySelectorAll("[data-cancel]").forEach(g=>{g.addEventListener("click",()=>Yo(g.dataset.cancel,e,t))})}p("buy"),e.querySelectorAll(".mkt-tab").forEach(i=>{i.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const u=r===i;r.style.background=u?"var(--green)":"#fff",r.style.color=u?"#fff":"var(--gray-600)",r.style.borderColor=u?"var(--green)":"var(--gray-200)"}),p(i.dataset.tab)})})}async function Vo(e,t,o,n){var u;const{state:c,toast:s}=n,a=t.find(f=>f.id===e);if(!a)return;const l=a.price,p=c.profile.credits||0,i=(u=a.card)==null?void 0:u.player;if(p<l){s("Crédits insuffisants","error");return}if(!confirm(`Acheter ${i==null?void 0:i.firstname} ${i==null?void 0:i.surname_encoded} pour ${l.toLocaleString("fr")} crédits ?`))return;const r=document.querySelector(`[data-buy="${e}"]`);r&&(r.disabled=!0,r.textContent="⏳");try{const{data:f,error:g}=await z.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(g)throw new Error(g.message);if(!(f!=null&&f.success))throw new Error((f==null?void 0:f.error)||"Achat impossible");c.profile.credits=p-l;const k=document.querySelector("[data-credits]")||document.querySelector(".credits-display");k&&(k.textContent=(p-l).toLocaleString("fr")+" cr."),s(`✅ ${i==null?void 0:i.surname_encoded} ajouté à ta collection !`,"success"),Kt(o,n)}catch(f){s("❌ "+f.message,"error"),r&&(r.disabled=!1,r.textContent="Acheter")}}async function Yo(e,t,o){const{toast:n}=o,{data:c}=await z.from("market_listings").select("card_id").eq("id",e).single();await z.from("market_listings").update({status:"cancelled"}).eq("id",e),c&&await z.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id),n("Annonce retirée","success"),Kt(t,o)}function Wo(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function Xo(e,{state:t,navigate:o,toast:n}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await z.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${c&&c.length>0?c.map((s,a)=>`
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
  `}async function Jo(e,{state:t,navigate:o,toast:n}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(r=>r.status==="finished"),p=(s||[]).filter(r=>r.status==="in_progress");function i(r){const u=r.home_id===c.id;u?r.home_score:r.away_score,u?r.away_score:r.home_score;const f=r.winner_id===c.id,g=r.home_score===r.away_score&&r.status==="finished",k=r.status!=="finished"?"…":g?"N":f?"V":"D",d=r.status!=="finished"||g?"#888":f?"#1A6B3C":"#c0392b";let x=a[r.mode]||r.mode;r.away_id===null&&!x.startsWith("IA")&&(x="IA");const A=r.home_id===c.id?r.away:r.home;let S;r.away_id===null?S=x:A?S=`${A.club_name||A.pseudo} (${A.pseudo})`:S="Adversaire";let D="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(D=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const I=new Date(r.created_at),b=I.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+I.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),B=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${S}${D}</div>
        <div style="font-size:11px;color:var(--gray-600)">${x} · ${b}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${B}</span>
        <span style="background:${d};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${k}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(s||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${p.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${p.map(i).join("")}
        </div>`:""}

      ${l.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${l.map(i).join("")}
        </div>`:""}

      ${(s||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}Di(qi);const ye={user:null,profile:null,page:"home",params:{}};function bt(e,t="info",o=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},o))}function Qo(e,t,o=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=o,document.getElementById("modal-overlay").classList.remove("hidden")}function Dt(){document.getElementById("modal-overlay").classList.add("hidden")}async function vt(){if(!ye.user)return;const{data:e}=await z.from("users").select("*").eq("id",ye.user.id).single();e&&(ye.profile=e)}const Vt="mw_theme";function At(){return localStorage.getItem(Vt)||"light"}function Zo(e){var t;localStorage.setItem(Vt,e),Gt(e),(t=ye.profile)!=null&&t.id&&z.from("users").update({theme:e}).eq("id",ye.profile.id).then(()=>{})}function Gt(e){document.documentElement.setAttribute("data-theme",e)}function wt(e,t={}){ye.page=e,ye.params=t,ji()}async function ji(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(n=>{n.classList.toggle("active",n.dataset.page===ye.page)});const t=document.getElementById("nav-credits");t&&ye.profile&&(t.textContent=`💰 ${(ye.profile.credits||0).toLocaleString("fr")}`);const o={state:ye,navigate:wt,toast:bt,openModal:Qo,closeModal:Dt,refreshProfile:vt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ye.page){case"home":await ai(e,o);break;case"collection":await Vi(e,o);break;case"decks":await St(e,o);break;case"boosters":await co(e,o);break;case"match":{(ye.params&&ye.params.matchMode||"vs_ai_easy")==="random"?await Oo(e,o):await Ao(e,o);break}case"market":await Ko(e,o);break;case"rankings":await Xo(e,o);break;case"matches":await Jo(e,o);break;default:await ai(e,o)}}function en(){const e=document.getElementById("app"),t=ye.profile;if(!t)return;const o="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",c=>{c.preventDefault(),wt(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>wt("home")),document.getElementById("nav-credits").addEventListener("click",()=>wt("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const c=At()==="dark"?"light":"dark";Zo(c),mi(c)}),mi(At())}function mi(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function tn(){Gt(At()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&Dt()}),document.getElementById("modal-close").addEventListener("click",Dt);const{data:{session:e}}=await z.auth.getSession();if(!e){yi(),ni(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:bt});return}ye.user=e.user,await vt(),yi();try{const{data:t}=await z.from("formation_links_overrides").select("formation, links"),o={};(t||[]).forEach(n=>{o[n.formation]=n.links}),Gi(o)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!ye.profile){Ri(document.getElementById("app"),{state:ye,navigate:async()=>{await vt(),xi()},toast:bt,refreshProfile:vt});return}ye.profile.theme&&ye.profile.theme!==At()&&(localStorage.setItem(Vt,ye.profile.theme),Gt(ye.profile.theme)),xi(),z.auth.onAuthStateChange(async(t,o)=>{t==="SIGNED_OUT"&&(ye.user=null,ye.profile=null,document.getElementById("app").innerHTML="",ni(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:bt}))})}function on(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function It(){const e=document.getElementById("app");e&&(e.style.height=on()+"px")}window.addEventListener("resize",It);window.addEventListener("orientationchange",()=>setTimeout(It,150));window.visualViewport&&window.visualViewport.addEventListener("resize",It);function xi(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",It(),en(),ji()}function yi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Ci(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const o=document.createElement("div");o.id="boot-error",o.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",o.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(o),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}tn().catch(e=>{console.error("Échec du démarrage:",e),Ci()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Ci("Le serveur met trop de temps à répondre.")},12e3);
