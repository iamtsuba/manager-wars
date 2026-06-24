import{s as j,F as ht,h as Ve,j as ii,l as Ae,i as Ei,k as Ti,b as Ai}from"./formation-links-CEzN0rcz.js";function Nt(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(d=>d.classList.remove("active")),n.classList.add("active"),document.getElementById("tab-login").style.display=n.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=n.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const n=document.getElementById("login-email").value.trim(),d=document.getElementById("login-password").value,s=document.getElementById("login-error");if(s.textContent="",!n||!d){s.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:l}=await j.auth.signInWithPassword({email:n,password:d});if(a.textContent="Se connecter",a.disabled=!1,l){s.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const n=document.getElementById("reg-email").value.trim(),d=document.getElementById("reg-password").value,s=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!n||!d||!s){a.textContent="Remplissez tous les champs.";return}if(d.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(d!==s){a.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:c}=await j.auth.signUp({email:n,password:d});if(l.textContent="Créer mon compte",l.disabled=!1,c){a.textContent=c.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=n})}function Ii(e,{state:t,navigate:i,toast:n,refreshProfile:d}){let s="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function l(){var A;const o=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),u=((A=document.getElementById("setup-club"))==null?void 0:A.value)||"MW",f=u.trim().split(" ").filter(Boolean),m=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():u.slice(0,2).toUpperCase();o&&(o.style.background=a,o.style.borderColor=s),r&&(r.textContent=m,r.style.color=s)}document.getElementById("color1").addEventListener("input",o=>{s=o.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",o=>{a=o.target.value,document.getElementById("swatch2").style.background=a,l()});function c(o){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",o.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await j.from("users").select("id").eq("pseudo",o).maybeSingle();if(u){r.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",o.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await j.from("users").select("id").eq("club_name",o).maybeSingle();if(u){r.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),f=document.getElementById("step3-finish");u.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:m}=await j.from("users").insert({id:t.user.id,pseudo:o,club_name:r,club_color1:s,club_color2:a,credits:1e4});if(m)throw m;await Li(t.user.id),await d(),n(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(m){u.textContent=m.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function Li(e){const{data:t}=await j.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,n=i.filter(c=>c.job==="GK"),d=i.filter(c=>c.job!=="GK"),s=[];for(let c=0;c<5;c++){let o=[];if(c===0&&n.length>0){const r=n[Math.floor(Math.random()*n.length)];o.push(r);const u=Ot([...d]).slice(0,3);o.push(...u)}else o=Ot([...i]).slice(0,4);o.forEach(r=>{s.push({owner_id:e,player_id:r.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(c=>{s.push({owner_id:e,card_type:"game_changer",gc_type:c})});const l=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];s.push({owner_id:e,card_type:"formation",formation:l[Math.floor(Math.random()*l.length)]}),s.length>0&&await j.from("cards").insert(s),await j.from("users").update({first_booster_opened:!0}).eq("id",e)}function Ot(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}const Mi="2026.06.24-1149";async function Pt(e,{state:t,navigate:i,toast:n}){var s,a;const d=t.profile;d&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Mi}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",c=>{c.preventDefault(),i(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const c=l.dataset.action;if(c==="match-ai"){zi(i);return}if(c==="match-random"){i("match",{matchMode:"random"});return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await j.auth.signOut(),window.location.reload()}))}function zi(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",d=>{d.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{n(),e("match",{matchMode:d.dataset.mode})})})}const ve={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ae(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Ht=["ATT","MIL","DEF","GK"];function oi(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let d=n+1;d<i;d++){const s=e[n],a=e[d];if(!s||!a)continue;const l=s._col!==void 0&&a._col!==void 0&&s._col===a._col,c=s._col!==void 0&&a._col!==void 0&&Math.abs(s._col-a._col)===1,o=Ht.indexOf(s._line),r=Ht.indexOf(a._line),u=Math.abs(o-r)===1;(s._line===a._line&&c||l&&u)&&(s.country_code&&a.country_code&&s.country_code===a.country_code&&t++,s.club_id&&a.club_id&&s.club_id===a.club_id&&t++)}return t}function bt(e,t={}){const i=e.reduce((s,a)=>{const l=a._line||a.job;return s+(Number(l==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),n=oi(e);let d=i+n;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function vt(e,t={}){const i=e.reduce((s,a)=>{const l=a._line||a.job;let c=0;return l==="GK"?c=Number(a.note_g)||0:l==="MIL"?c=Number(a.note_m)||0:c=Number(a.note_d)||0,s+c+(a.boost||0)},0),n=oi(e);let d=i+n;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function wt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function ni(e,t,i="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const d=[...n].sort((a,l)=>{const c=t==="attack"?ae(a,"ATT"):a._line==="GK"?ae(a,"GK"):ae(a,"DEF");return(t==="attack"?ae(l,"ATT"):l._line==="GK"?ae(l,"GK"):ae(l,"DEF"))-c});let s=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(s,d.length,3))}function Si(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const ri={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},tt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},We=["GK","DEF","MIL","ATT"],ji=["Tous","GK","DEF","MIL","ATT"],Ci={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},$t={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ai(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function He(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function ct(e,t=""){var u,f;const i=e.player;if(!i)return"";const n=i.job||"ATT",d=tt[n],s=ri[i.rarity]||"#ccc",a=He(i,n),l=i.job2?He(i,i.job2):null,c=i.job2?tt[i.job2]:null,o=ai(i),r=$t[i.country_code]||i.country_code||"";return`
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
  </div>`}function Ut(e){const t=e.job||"ATT",i=He(e,t),n=$t[e.country_code]||e.country_code||"";return`
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
  </div>`}async function Bi(e,t){const{state:i,navigate:n,toast:d,openModal:s,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await j.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:c}=await j.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(l||[]).filter(L=>L.card_type==="player"&&L.player),r=(l||[]).filter(L=>L.card_type==="game_changer"),u=(l||[]).filter(L=>L.card_type==="formation"),{data:f}=await j.from("gc_definitions").select("name,gc_type,color,effect,image_url"),m={};(f||[]).forEach(L=>{m[L.name]=L});const A=Object.keys(ht),p=Object.keys(ve),h={};o.forEach(L=>{const k=L.player.id;h[k]=(h[k]||0)+1}),new Set(Object.keys(h).map(L=>String(L)));const E=new Set(u.map(L=>L.formation)),_=new Set(r.map(L=>L.gc_type));let S="player",$="Tous",M="",I=!1;function G(){return[...o].sort((L,k)=>{const q=We.indexOf(L.player.job),N=We.indexOf(k.player.job);return q!==N?q-N:(L.player.surname_encoded||"").localeCompare(k.player.surname_encoded||"")})}function H(){return[...c||[]].sort((L,k)=>{const q=We.indexOf(L.job),N=We.indexOf(k.job);return q!==N?q-N:(L.surname_encoded||"").localeCompare(k.surname_encoded||"")})}function V(){return G().filter(L=>{const k=L.player,q=$==="Tous"||k.job===$,N=!M||`${k.firstname} ${k.surname_encoded}`.toLowerCase().includes(M);return q&&N})}function Y(){return H().filter(L=>{const k=$==="Tous"||L.job===$,q=!M||`${L.firstname} ${L.surname_encoded}`.toLowerCase().includes(M);return k&&q})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${S==="player"?"var(--green)":"transparent"};
        color:${S==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
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
  </div>`;function T(){const L=document.getElementById("col-filters");L&&(S==="player"?(L.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${M}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${ji.map(k=>`
            <button class="filter-btn" data-job="${k}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${k===$?"var(--green)":"var(--gray-200)"};
                background:${k===$?"var(--green)":"#fff"};
                color:${k===$?"#fff":"var(--gray-600)"}">
              ${k}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${I?"var(--yellow)":"var(--gray-200)"};
              background:${I?"var(--yellow)":"#fff"};
              color:${I?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${I?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",k=>{M=k.target.value.toLowerCase(),v()}),e.querySelectorAll(".filter-btn").forEach(k=>{k.addEventListener("click",()=>{$=k.dataset.job,T(),v()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{I=!I,T(),v()})):(L.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${I?"var(--yellow)":"var(--gray-200)"};
              background:${I?"var(--yellow)":"#fff"};
              color:${I?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${I?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{I=!I,T(),v()})))}function v(){const L=document.getElementById("col-grid");L&&(S==="player"?Z(L):S==="formation"?pe(L):ue(L))}function U(L,k,q,N,g){g=g||"#7a28b8";const y=document.getElementById("col-grid"),x=document.getElementById("col-big");if(!y||!x)return;var z=0;function b(){x.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+k(L[z])+"</div>";var C=x.querySelector("[data-card-id],[data-form-id],[data-gc-id]");C&&C.addEventListener("click",function(){N(L[z])}),requestAnimationFrame(function(){var w=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!w||!x)){var D=x.clientHeight-8,B=x.clientWidth-24,F=w.offsetHeight,O=w.offsetWidth;if(F>0&&O>0&&D>40){var K=Math.min(D/F,B/O,1);w.style.transform="scale("+K.toFixed(3)+")",w.style.transformOrigin="top center"}}}),y.innerHTML=L.map(function(w,D){return'<div class="col-mini-item" data-idx="'+D+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(D===z?g:"transparent")+';transition:border-color .15s;overflow:hidden">'+q(w,D===z)+"</div>"}).join(""),y.querySelectorAll(".col-mini-item").forEach(function(w){w.addEventListener("click",function(){z=Number(w.dataset.idx),b(),w.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}b()}function R(L){var k=.54,q=Math.round(140*k),N=Math.round(310*k),g;if(!L||L._fake){var y=L?L.player:null;if(!y)return"";g=Ut(y)}else g=ct(L,"");return'<div style="width:'+q+"px;height:"+N+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+k+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+g+"</div></div>"}function W(L,k,q){k=k||100,q=q||140;var N=Ve[L]||{},g={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},y=Math.max(3,Math.round(k*.06)),x=Object.entries(N).map(function(b){var C=b[0],w=b[1],D=C.replace(/\d+$/,""),B=g[D]||"#888",F=Math.round(w.x*k),O=Math.round(w.y*q);return'<circle cx="'+F+'" cy="'+O+'" r="'+y+'" fill="'+B+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),z=Math.max(1,Math.round(k/50));return'<svg viewBox="0 0 '+k+" "+q+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+k+'" height="'+q+'" fill="#1A6B3C"/><rect x="'+Math.round(k*.2)+'" y="'+Math.round(q*.02)+'" width="'+Math.round(k*.6)+'" height="'+Math.round(q*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+z+'"/><line x1="0" y1="'+Math.round(q*.5)+'" x2="'+k+'" y2="'+Math.round(q*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+z+'"/><ellipse cx="'+Math.round(k*.5)+'" cy="'+Math.round(q*.5)+'" rx="'+Math.round(k*.18)+'" ry="'+Math.round(q*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+z+'"/><rect x="'+Math.round(k*.2)+'" y="'+Math.round(q*.82)+'" width="'+Math.round(k*.6)+'" height="'+Math.round(q*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+z+'"/>'+x+"</svg>"}function te(L,k,q){var N=q>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+q+"</div>":"",g=k?'data-form-id="'+k.id+'"':"",y=L.length>7?14:L.length>5?16:19,x=!!k;return"<div "+g+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(x?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(x?"":"filter:grayscale(1);opacity:0.5")+'">'+N+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(x?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+y+"px;font-weight:900;color:"+(x?"#1A6B3C":"#aaa")+';line-height:1">'+L+'</div></div><div style="flex:1;overflow:hidden;background:'+(x?"#1A6B3C":"#ccc")+'">'+W(L,140,220)+"</div></div>"}function oe(L,k){var q=.54,N=Math.round(140*q),g=Math.round(305*q),y=Math.round(g*.22),x=g-y,z=L.length>7?5:7,b=W(L,N,x),C=k?"1.5px solid #2a7a40":"1px solid #ddd",w=k?"":"filter:grayscale(1);opacity:0.45;",D=k?"#1A6B3C":"#bbb",B="#fff";return'<div style="width:'+N+"px;height:"+g+"px;border-radius:6px;border:"+C+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+w+'"><div style="height:'+y+"px;background:"+D+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+z+"px;font-weight:900;color:"+B+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(N-4)+'px">'+L+'</span></div><div style="height:'+x+'px;overflow:hidden;flex-shrink:0">'+b+"</div></div>"}function Z(L){if(I){const k=Y();if(!k.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const q=k.map(N=>o.find(g=>g.player.id===N.id)||{_fake:!0,player:N,id:"fake-"+N.id});U(q,N=>N._fake?Ut(N.player):ct(N,""),N=>N._fake?R({player:N.player,id:"x",_fake:!0}):R(N),N=>{N._fake||Kt(N,o,h,t)},"#1A6B3C")}else{const k=V();if(!k.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const q={},N=[];k.forEach(g=>{q[g.player.id]||(q[g.player.id]=!0,N.push(g))}),U(N,g=>{const y=h[g.player.id]||1,x=y>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${y}</div>`:"",b=o.filter(C=>C.player.id===g.player.id&&C.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return ct(g,x+b)},g=>R(g),g=>Kt(g,o,h,t),"#1A6B3C")}}function pe(L){const k=I?A:[...E];if(!k.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const q=k.map(N=>({formation:N,card:u.find(g=>g.formation===N)||null,owned:E.has(N)}));U(q,({formation:N,card:g,owned:y})=>te(N,y?g:null,y?u.filter(x=>x.formation===N).length:0),({formation:N,owned:g})=>oe(N,g),({card:N,owned:g})=>{g&&N&&Di(N,u,t,s)},"#1A6B3C")}function ue(L){const k=Object.keys(m),q=I?k.length?k:p:[..._];if(!q.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const N=q.map(g=>({type:g,gc:ve[g]||{icon:"⚡",desc:""},def:m[g]||null,owned:_.has(g),card:r.find(y=>y.gc_type===g)||null}));U(N,({type:g,gc:y,def:x,owned:z,card:b})=>{const C=z?r.filter(fe=>fe.gc_type===g).length:0,w=C>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${C}</div>`:"",D=(x==null?void 0:x.gc_type)==="ultra_game_changer",B={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},F={purple:"#b06ce0",light_blue:"#00d4ef"},O=B[x==null?void 0:x.color]||B.purple,K=F[x==null?void 0:x.color]||F.purple,ee=(x==null?void 0:x.effect)||y.desc||"",re=x!=null&&x.image_url?`/manager-wars/icons/${x.image_url}`:null;return z&&b?`<div data-gc-id="${b.id}" data-gc-type="${g}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${K};background:${O};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${K}66;cursor:pointer">
          ${w}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${g.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${g}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${D?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${re?`<img src="${re}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${y.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${ee.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${g}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${y.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:g,gc:y,def:x,owned:z})=>z?(()=>{const b=Math.round(75.60000000000001),C=Math.round(310*.54),w=Math.round(C*.65),D=Math.round(C*.18),B={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},F={purple:"#9b59b6",light_blue:"#00bcd4"},O=B[x==null?void 0:x.color]||B.purple,K=F[x==null?void 0:x.color]||F.purple,ee=x!=null&&x.image_url?`/manager-wars/icons/${x.image_url}`:null;return`<div style="width:${b}px;height:${C}px;border-radius:8px;background:${O};border:1px solid ${K};display:flex;flex-direction:column;overflow:hidden"><div style="height:${D}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${b-6}px">${g}</span></div><div style="height:${w}px;display:flex;align-items:center;justify-content:center">${ee?`<img src="${ee}" style="max-width:${b-8}px;max-height:${w-4}px;object-fit:contain">`:`<span style="font-size:24px">${y.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((x==null?void 0:x.effect)||y.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const b=Math.round(75.60000000000001),C=Math.round(310*.54);return`<div style="width:${b}px;height:${C}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${y.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${g}</span></div>`})(),({type:g,owned:y,def:x})=>{y&&Fi(g,x,s)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(L=>{L.addEventListener("click",()=>{S=L.dataset.tab,$="Tous",M="",I=!1,e.querySelectorAll(".col-tab-btn").forEach(k=>{const q=k.dataset.tab===S;k.style.borderBottomColor=q?"var(--green)":"transparent",k.style.color=q?"var(--green)":"var(--gray-600)"}),T(),v()})}),T(),v()}function Fi(e,t,i){const n=ve[e]||{icon:"⚡",desc:"Effet spécial."},d=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,c=a[t==null?void 0:t.color]||a.purple,o=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||n.desc,u=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ne=1e3;function Di(e,t,i,n){var p,h,E;const{state:d,toast:s,closeModal:a,navigate:l,refreshProfile:c}=i,o=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const _=Ve[o]||{},S=ht[o]||[],$=290,M=360,I=20;function G(V){const Y=_[V];return Y?{x:Y.x*$,y:Y.y*M}:null}let H=`<svg width="${$}" height="${M}" viewBox="0 0 ${$} ${M}" xmlns="http://www.w3.org/2000/svg">`;for(const[V,Y]of S){const T=G(V),v=G(Y);!T||!v||(H+=`<line x1="${T.x}" y1="${T.y}" x2="${v.x}" y2="${v.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const V of Object.keys(_)){const Y=G(V);if(!Y)continue;const T=V.replace(/\d+/,""),v=r[T]||"#555";H+=`<circle cx="${Y.x}" cy="${Y.y}" r="${I}" fill="${v}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,H+=`<text x="${Y.x}" y="${Y.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${T}</text>`}return H+="</svg>",H}const f=t.filter(_=>_.formation===o),m=f.length,A=!e.is_for_sale;n(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${Ne.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${m-1} carte${m-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${m<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${A?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Ne}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(p=document.getElementById("direct-sell-form-btn"))==null||p.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${Ne.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const _=f.find($=>!$.is_for_sale)||f[0];if(!_){s("Aucune carte à vendre","error");return}const{error:S}=await j.from("cards").delete().eq("id",_.id);if(S){s(S.message,"error");return}await j.from("users").update({credits:(d.profile.credits||0)+Ne}).eq("id",d.profile.id),await c(),s(`+${Ne.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),l("collection")}),(h=document.getElementById("market-sell-form-btn"))==null||h.addEventListener("click",async()=>{const _=parseInt(document.getElementById("sell-price-form").value);if(!_||_<1){s("Prix invalide","error");return}await j.from("cards").update({is_for_sale:!0,sale_price:_}).eq("id",e.id),await j.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:_}),s("Carte mise en vente sur le marché !","success"),a(),l("collection")}),(E=document.getElementById("cancel-sell-form-btn"))==null||E.addEventListener("click",async()=>{await j.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await j.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),a(),l("collection")})}async function Kt(e,t,i,n){var H,V,Y,T,v,U;const{state:d,toast:s,openModal:a,closeModal:l,navigate:c,refreshProfile:o}=n,r=e.player,u=t.filter(R=>R.player.id===r.id),f=u.length,m=Ci[r.rarity]||1e3,A=r.rarity!=="legende",p=ai(r),h=He(r,r.job),E=r.job2?He(r,r.job2):null,_=tt[r.job]||"#1A6B3C",S=r.job2?tt[r.job2]:null,$=ri[r.rarity]||"#ccc",M=$t[r.country_code]||r.country_code||"",{data:I}=await j.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",r.id).order("transferred_at",{ascending:!0}),G=I&&I.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${I.map(R=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${R.club_name} <span style="color:var(--gray-600)">(${R.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${R.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${R.source==="booster"?"Booster":R.price?R.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";a(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${$};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${_}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${_}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${h}</text>
            </svg>
            ${E!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${S}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${E}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${M}</div>
            ${(H=r.clubs)!=null&&H.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((V=r.clubs)==null?void 0:V.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${$}">${r.rarity.toUpperCase()}</div>
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
    ${G}

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
    ${A&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(Y=document.getElementById("close-detail"))==null||Y.addEventListener("click",l),(T=document.getElementById("direct-sell-btn"))==null||T.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${r.surname_encoded} pour ${m.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const R=u.find(te=>!te.is_for_sale)||u[0];if(!R){s("Aucune carte à vendre","error");return}const{error:W}=await j.from("cards").delete().eq("id",R.id);if(W){s(W.message,"error");return}await j.from("users").update({credits:(d.profile.credits||0)+m}).eq("id",d.profile.id),await o(),s(`+${m.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),c("collection")}),(v=document.getElementById("market-sell-btn"))==null||v.addEventListener("click",async()=>{const R=parseInt(document.getElementById("sell-price").value);if(!R||R<1){s("Prix invalide","error");return}await j.from("cards").update({is_for_sale:!0,sale_price:R}).eq("id",e.id),await j.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:R}),s("Carte mise en vente sur le marché !","success"),l(),c("collection")}),(U=document.getElementById("cancel-sell-btn"))==null||U.addEventListener("click",async()=>{await j.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await j.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),c("collection")})}const it={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Ee={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function st(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function si(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function li(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Gi(e,t=44,i=58){var m;const n=e?st(e):null,d=e?li(e):null,s=si(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",l=Ee[a]||"#555",c={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(i*.19),u=Math.round(i*.25),f=i-r-u;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${c};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${n?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">🌍</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${o}</span>
      ${d?`<img src="${d}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:(m=e==null?void 0:e.clubs)!=null&&m.encoded_name?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function pt(e,t){const{state:i,navigate:n,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await j.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!a)return;const{data:l,error:c}=await j.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(c){d(c.message,"error");return}d("Deck créé !","success"),Vt(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Vt(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",a.dataset.name);if(!l||l===a.dataset.name)return;const{error:c}=await j.from("decks").update({name:l}).eq("id",a.dataset.rename);if(c){d(c.message,"error");return}d("Deck renommé !","success"),pt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await j.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:l}=await j.from("decks").delete().eq("id",a.dataset.delete);if(l){d(l.message,"error");return}d("Deck supprimé.","success"),pt(e,t)})})}async function Vt(e,t,i){const{state:n,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await j.from("decks").select("*").eq("id",e).single(),{data:a}=await j.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),l=(a||[]).filter(m=>m.card_type==="player"&&m.player),c=(a||[]).filter(m=>m.card_type==="formation"),o=c.map(m=>m.formation).filter(Boolean),{data:r}=await j.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let u=s.formation||"4-4-2";o.length>0&&!o.includes(u)&&(u=o[0]);const f={deckId:e,name:s.name,formation:u,formationCardId:s.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:c,availableFormations:o};(r||[]).forEach(m=>{m.is_starter?f.slots[m.position]=m.card_id:f.subs.includes(m.card_id)||f.subs.push(m.card_id)}),Be(t,f,i)}function Be(e,t,i){var c;const{navigate:n}=i;it[t.formation];const d=Yt(t.formation),s=d.filter(o=>t.slots[o]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(it),l=t.subs.map(o=>t.playerCards.find(r=>r.id===o)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
            ${Gi(r,44,58)}
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
  </div>`,qi(e,t,d,i),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",o=>{t.formation=o.target.value;const r=Yt(t.formation),u={};r.forEach(f=>{t.slots[f]&&(u[f]=t.slots[f])}),t.slots=u,Be(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>Oi(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(o=>{o.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==o.dataset.removeSub),Be(e,t,i)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{Ni(t,e,i)})}function qi(e,t,i,n){const d=e.querySelector("#deck-field");if(!d)return;const s=Ve[t.formation]||{},a=ii(t.formation)||[],l={};for(const E of i){const _=t.slots[E],S=_?t.playerCards.find($=>$.id===_):null;l[E]=S?S.player:null}const c=300,o=300,r=48,u=64,f=13,m=16,A=38;function p(E){const _=s[E];return _?{x:_.x*c,y:_.y*o}:null}let h="";for(const[E,_]of a){const S=p(E),$=p(_);if(!S||!$)continue;const M=l[E]?{...l[E],club_id:l[E].club_id,country_code:l[E].country_code,rarity:l[E].rarity}:null,I=l[_]?{...l[_],club_id:l[_].club_id,country_code:l[_].country_code,rarity:l[_].rarity}:null,G=Ae(M,I);G==="#ff3333"||G==="#cc2222"?h+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}" stroke="${G}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(h+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}" stroke="${G}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,h+=`<line x1="${S.x.toFixed(1)}" y1="${S.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}" stroke="${G}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const E of i){const _=p(E);if(!_)continue;const S=l[E],$=E.replace(/\d+/,""),M=Ee[$]||"#555",I=(_.x-r/2).toFixed(1),G=(_.y-u/2).toFixed(1),H={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[S==null?void 0:S.rarity]||"#aaa";if(S){const V=st(S),Y=li(S),T=si(S.country_code),v=Number($==="GK"?S.note_g:$==="DEF"?S.note_d:$==="MIL"?S.note_m:S.note_a)||0,U=u-f-m;h+=`<defs><clipPath id="dcp-${E}"><rect x="${I}" y="${(_.y-u/2+f).toFixed(1)}" width="${r}" height="${U}"/></clipPath></defs>`,h+=`<rect x="${I}" y="${G}" width="${r}" height="${u}" rx="5" fill="${M}"/>`,V&&(h+=`<image href="${V}" x="${I}" y="${(_.y-u/2+f).toFixed(1)}" width="${r}" height="${U}" clip-path="url(#dcp-${E})" preserveAspectRatio="xMidYMin slice"/>`),h+=`<rect x="${I}" y="${G}" width="${r}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,h+=`<text x="${_.x.toFixed(1)}" y="${(_.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(S.surname_encoded||"").slice(0,9)}</text>`;const R=(_.y+u/2-m).toFixed(1);h+=`<rect x="${I}" y="${R}" width="${r}" height="${m}" fill="rgba(255,255,255,0.93)"/>`,T&&(h+=`<image href="${T}" x="${(_.x-21).toFixed(1)}" y="${(_.y+u/2-m+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),h+=`<text x="${_.x.toFixed(1)}" y="${(_.y+u/2-m/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${v}</text>`,Y&&(h+=`<image href="${Y}" x="${(_.x+r/2-14).toFixed(1)}" y="${(_.y+u/2-m+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),h+=`<rect x="${I}" y="${G}" width="${r}" height="${u}" rx="5" fill="none" stroke="${H}" stroke-width="2"/>`}else h+=`<rect x="${I}" y="${G}" width="${r}" height="${u}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,h+=`<text x="${_.x.toFixed(1)}" y="${_.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,h+=`<text x="${_.x.toFixed(1)}" y="${(_.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${$}</text>`;h+=`<rect x="${I}" y="${G}" width="${r}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${E}" style="cursor:pointer"/>`}d.innerHTML=`<svg viewBox="${-A} ${-A} ${c+A*2} ${o+A*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${h}</svg>`,d.querySelectorAll(".deck-slot-hit").forEach(E=>{E.addEventListener("click",()=>Ri(E.dataset.pos,t,e,n))})}function Ri(e,t,i,n){var f,m,A;const{openModal:d,closeModal:s}=n,a=e.replace(/\d+/,""),l=t.slots[e],c=l?t.playerCards.find(p=>p.id===l):null;(f=c==null?void 0:c.player)==null||f.id;const o=new Set;Object.entries(t.slots).forEach(([p,h])=>{var _;if(p===e||!h)return;const E=t.playerCards.find(S=>S.id===h);(_=E==null?void 0:E.player)!=null&&_.id&&o.add(E.player.id)}),t.subs.forEach(p=>{var E;const h=t.playerCards.find(_=>_.id===p);(E=h==null?void 0:h.player)!=null&&E.id&&o.add(h.player.id)});const r=new Set,u=t.playerCards.filter(p=>{const h=p.player;return!(h.job===a||h.job2===a)||o.has(h.id)||r.has(h.id)?!1:(r.add(h.id),!0)});u.sort((p,h)=>{const E=a==="GK"?p.player.note_g:a==="DEF"?p.player.note_d:a==="MIL"?p.player.note_m:p.player.note_a;return(a==="GK"?h.player.note_g:a==="DEF"?h.player.note_d:a==="MIL"?h.player.note_m:h.player.note_a)-E}),d(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${u.length>0?u.map(p=>{var $,M;const h=p.player,E=a==="GK"?h.note_g:a==="DEF"?h.note_d:a==="MIL"?h.note_m:h.note_a,_=st(h),S={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[h.rarity];return`<div class="player-option" data-card-id="${p.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Ee[a]}">
            ${_?`<img src="${_}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${Ee[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${h.firstname} ${h.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${h.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${h.country_code}">
              ${($=h.clubs)!=null&&$.logo_url?`<img src="${h.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((M=h.clubs)==null?void 0:M.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${h.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${Ee[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${S};flex-shrink:0">
            ${E}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(m=document.getElementById("close-selector"))==null||m.addEventListener("click",s),(A=document.getElementById("remove-player"))==null||A.addEventListener("click",()=>{delete t.slots[e],s(),Be(i,t,n)}),document.querySelectorAll(".player-option").forEach(p=>{p.addEventListener("click",()=>{t.slots[e]=p.dataset.cardId,s(),Be(i,t,n)})})}function Ni(e,t,i){var c;const{openModal:n,closeModal:d}=i,s=new Set;Object.values(e.slots).filter(Boolean).forEach(o=>{var u;const r=e.playerCards.find(f=>f.id===o);(u=r==null?void 0:r.player)!=null&&u.id&&s.add(r.player.id)}),e.subs.forEach(o=>{var u;const r=e.playerCards.find(f=>f.id===o);(u=r==null?void 0:r.player)!=null&&u.id&&s.add(r.player.id)});const a=new Set,l=e.playerCards.filter(o=>{var r,u,f;return s.has((r=o.player)==null?void 0:r.id)||a.has((u=o.player)==null?void 0:u.id)?!1:(a.add((f=o.player)==null?void 0:f.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(o=>{var m;const r=o.player,u=st(r),f=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Ee[r.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((m=r.clubs)==null?void 0:m.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${Ee[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),d(),Be(t,e,i)})})}async function Oi(e,t){const{state:i,toast:n,navigate:d}=t,s=e.formationCards.find(c=>c.formation===e.formation),a=(s==null?void 0:s.id)||e.formationCardId;await j.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await j.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([c,o],r)=>{l.push({deck_id:e.deckId,card_id:o,position:c,is_starter:!0,slot_order:r})}),e.subs.forEach((c,o)=>{l.push({deck_id:e.deckId,card_id:c,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),l.length>0){const{error:c}=await j.from("deck_cards").insert(l);if(c){n(c.message,"error");return}}n("Deck enregistré ✅","success"),d("decks")}function Yt(e){const t=it[e]||it["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function Pi(){const{data:e}=await j.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await j.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(n=>n.booster_id===i.id)}))}function Hi(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,d)=>n+Number(d.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const di=()=>Object.keys(Ve),Ui=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ut={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Ki(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Wt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Vi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Yi={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Xt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Wi(e){var r,u;const t=e.player;if(!t)return"";const i=t.job||"ATT",n=Wt[i],d=Vi[t.rarity]||"#ccc",s=Xt(t,i),a=t.job2?Xt(t,t.job2):null,l=t.job2?Wt[t.job2]:null,c=Ki(t),o=Yi[t.country_code]||t.country_code||"";return`
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
  </div>`}function Xi(e){var d;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const i=((d=Object.entries(t).sort((s,a)=>a[1]-s[1])[0])==null?void 0:d[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Ji(e,{state:t,navigate:i,toast:n}){var a;const d=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await Pi()).map(Xi)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}s.length||(s=Ui.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const c=s.find(o=>o.id===l.dataset.booster);if(c){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Qi(c,{state:t,toast:n,navigate:i,container:e})}catch(o){n(o.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const o=s.find(r=>r.id===l.dataset.boosterId);ao(o)})})}async function Qi(e,{state:t,toast:i,navigate:n,container:d}){var r;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await co()}catch(u){i(u.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:s}=await j.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((s||[]).filter(u=>u.card_type==="player").map(u=>u.player_id)),l=new Set((s||[]).filter(u=>u.card_type==="formation").map(u=>u.formation));let c=[];if((r=e.rates)!=null&&r.length)c=await Jt(t.profile,e);else{const u=e.type||"player";u==="player"?c=await to(t.profile,e.cardCount,e.cost):u==="game_changer"?c=await io(t.profile,e.cardCount,e.cost):u==="formation"?c=await oo(t.profile,e.cost):c=await Jt(t.profile,e)}c.forEach(u=>{u.card_type==="player"&&u.player?u.isDuplicate=a.has(u.player.id):u.card_type==="formation"&&(u.isDuplicate=l.has(u.formation))});const{data:o}=await j.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),no(c,e,n)}function Zi(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function ze(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function eo(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>ze(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>ze(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&ze(n)>=6),i.length||(i=e.filter(n=>ze(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&ze(n)>=1&&ze(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Jt(e,t){if(t.cost>0){const{error:n}=await j.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(n)throw n}const i=[];for(let n=0;n<(t.cardCount||5);n++){const d=Hi(t.rates);if(d){if(d.card_type==="player"){const s=f=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[f]||f,a=d.rarity?s(d.rarity):null;let l=j.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);a&&(l=l.eq("rarity",a));const{data:c}=await l;let o=c||[];if((d.note_min||d.note_max)&&(o=o.filter(f=>{const m=Math.max(Number(f.note_g)||0,Number(f.note_d)||0,Number(f.note_m)||0,Number(f.note_a)||0);return(!d.note_min||m>=d.note_min)&&(!d.note_max||m<=d.note_max)})),o.length||(d.note_min||d.note_max?(o=c||[],console.warn("[Booster] Aucun joueur avec note",d.note_min,"-",d.note_max,"— fallback rareté uniquement")):o=c||[]),!o.length)continue;const r=o[Math.floor(Math.random()*o.length)],{data:u}=await j.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();u&&(i.push({...u,player:r}),j.rpc("record_transfer",{p_card_id:u.id,p_player_id:r.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(d.card_type==="game_changer"){const{data:s}=await j.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=s!=null&&s.length?s:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],c=a[Math.floor(Math.random()*a.length)].name,{data:o}=await j.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:c}).select().single();o&&i.push(o)}else if(d.card_type==="formation"){const s=di(),a=s[Math.floor(Math.random()*s.length)],{data:l}=await j.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();l!=null&&l[0]&&i.push(l[0])}}}return i}async function to(e,t,i){if(i>0){const{error:o}=await j.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:n}=await j.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=n.filter(o=>o.job==="GK"),s=n.filter(o=>o.job!=="GK"),a=!e.first_booster_opened&&d.length>0,l=[];for(let o=0;o<t;o++){const r=o===0&&a?d:o===0?s:n,u=Zi(),f=eo(r,u);f&&l.push(f)}a&&await j.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await j.from("cards").insert(l.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(c||[]).forEach((o,r)=>{j.rpc("record_transfer",{p_card_id:o.id,p_player_id:l[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((o,r)=>({...c[r],player:o}))}async function io(e,t,i){const{error:n}=await j.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:d}=await j.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=d!=null&&d.length?d:Object.keys(ut).map(r=>({name:r,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const r=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:l,error:c}=await j.from("cards").insert(a).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(l||[]).map(r=>{const u=d==null?void 0:d.find(f=>f.name===r.gc_type||f.id===r.gc_definition_id);return{...r,_gcDef:u||null}})}async function oo(e,t){const{error:i}=await j.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const n=di(),d=n[Math.floor(Math.random()*n.length)],{data:s,error:a}=await j.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),s||[]}function no(e,t,i){var T;if(!e||e.length===0){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",v.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(v),(T=v.querySelector("#anim-close-err"))==null||T.addEventListener("click",()=>v.remove());return}const n=document.createElement("div");n.id="booster-anim-overlay",n.innerHTML=`
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
  `,document.body.appendChild(n);let d=!1;const s=document.getElementById("pack-cut-zone"),a=document.getElementById("pack-blade");let l=!1;const c=v=>v.touches&&v.touches[0]?v.touches[0].clientX:v.clientX;function o(v){d||(l=!0,a.style.opacity="1",r(v))}function r(v){if(!l||d)return;const U=s.getBoundingClientRect(),R=c(v)-U.left,W=Math.max(0,Math.min(1,R/U.width));a.style.width=W*U.width+"px",W>=.82&&f()}function u(){d||(l=!1,a.style.transition="width .2s ease, opacity .2s ease",a.style.width="0",a.style.opacity="0",setTimeout(()=>{d||(a.style.transition="")},220))}function f(){var U;if(d)return;d=!0,l=!1,a.style.width="100%",a.style.opacity="1",(U=document.getElementById("cut-flash"))==null||U.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const v=document.getElementById("cut-hint");v&&(v.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{a.style.opacity="0",document.getElementById("pack-phase").style.display="none",h(0)},620)}s.addEventListener("pointerdown",o),window.addEventListener("pointermove",r),window.addEventListener("pointerup",u),s.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",r,{passive:!0}),window.addEventListener("touchend",u);let m=0,A=!1;const p=new Set;function h(v){m=v,document.getElementById("reveal-phase").style.display="flex",E(),_(v,0),G()}function E(){const v=document.getElementById("card-dots");v&&(v.innerHTML=e.map((U,R)=>`<div class="card-dot" data-i="${R}" style="width:8px;height:8px;border-radius:50%;background:${R===m?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),v.querySelectorAll(".card-dot").forEach(U=>U.addEventListener("click",()=>$(parseInt(U.dataset.i)))))}function _(v,U){var L;const R=e[v],W=document.getElementById("card-counter"),te=document.getElementById("card-track");W&&(W.textContent=`Carte ${v+1} / ${e.length}`);const oe=R.card_type==="player"&&((L=R.player)==null?void 0:L.rarity)==="legende",Z=!p.has(v);p.add(v);let pe=0;if(R.card_type==="player"&&R.player){const k=R.player,q=k.job||"ATT";pe=Number(q==="GK"?k.note_g:q==="DEF"?k.note_d:q==="MIL"?k.note_m:k.note_a)||0}const ue=k=>{te.innerHTML=`
        <div id="current-card-wrap" style="display:flex;flex-direction:column;align-items:center;gap:8px;${oe?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.3);transform-origin:center">${ro(R)}</div>
          ${R.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
        </div>`;const q=document.getElementById("current-card-wrap");U!==0?(q.style.transition="none",q.style.transform=`translateX(${U>0?100:-100}%)`,requestAnimationFrame(()=>{q.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",q.style.transform="translateX(0)"})):q.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),k||oe?V():Y(),E()};Z&&pe>6&&R.card_type==="player"&&R.player?S(R,()=>ue(!0)):ue(!1)}function S(v,U){var ue;A=!0;const R=v.player,W=`https://flagsapi.com/${R.country_code}/flat/64.png`,te=(ue=R.clubs)==null?void 0:ue.logo_url,oe=document.getElementById("walkout-overlay"),Z=document.getElementById("walkout-stage");if(!oe||!Z){A=!1,U();return}oe.style.display="flex";const pe=()=>{const L=Z.firstElementChild;L&&(L.classList.remove("wo-in"),L.classList.add("wo-out"))};Z.innerHTML=`<img class="wo-in" src="${W}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(pe,2e3),setTimeout(()=>{var L;Z.innerHTML=te?`<img class="wo-in" src="${te}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((L=R.clubs)==null?void 0:L.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(pe,4450),setTimeout(()=>{oe.style.display="none",Z.innerHTML="",A=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),U()},4900)}function $(v){if(A||v<0||v>=e.length||v===m)return;const U=v>m?1:-1;m=v,_(v,U)}function M(){$(m+1)}function I(){$(m-1)}function G(){const v=document.getElementById("card-viewport");if(!v||v._swipeBound)return;v._swipeBound=!0;let U=0,R=0,W=0,te=!1;const oe=k=>k.touches?k.touches[0].clientX:k.clientX,Z=k=>k.touches?k.touches[0].clientY:k.clientY,pe=k=>{te=!0,U=oe(k),R=Z(k),W=0},ue=k=>{if(!te)return;W=oe(k)-U;const q=Z(k)-R;if(Math.abs(W)<Math.abs(q))return;const N=document.getElementById("current-card-wrap");N&&(N.style.transition="none",N.style.transform=`translateX(${W*.6}px) rotate(${W*.02}deg)`)},L=()=>{if(!te)return;te=!1;const k=document.getElementById("current-card-wrap"),q=55;W<=-q&&m<e.length-1?M():W>=q&&m>0?I():k&&(k.style.transition="transform .2s ease",k.style.transform="translateX(0)")};v.addEventListener("pointerdown",pe),v.addEventListener("pointermove",ue),v.addEventListener("pointerup",L),v.addEventListener("pointercancel",L),v.addEventListener("touchstart",pe,{passive:!0}),v.addEventListener("touchmove",ue,{passive:!0}),v.addEventListener("touchend",L),v.addEventListener("click",k=>{if(Math.abs(W)>8)return;const q=v.getBoundingClientRect();k.clientX-q.left>q.width/2?M():I()})}let H=null;function V(){const v=document.getElementById("fireworks-canvas");if(!v)return;v.width=window.innerWidth,v.height=window.innerHeight;const U=v.getContext("2d"),R=[];function W(){const oe=Math.random()*v.width,Z=Math.random()*v.height*.6,pe=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],ue=pe[Math.floor(Math.random()*pe.length)];for(let L=0;L<60;L++){const k=Math.PI*2/60*L,q=2+Math.random()*5;R.push({x:oe,y:Z,vx:Math.cos(k)*q,vy:Math.sin(k)*q,alpha:1,color:ue,size:2+Math.random()*3})}}W(),H=setInterval(W,600);function te(){if(document.getElementById("fireworks-canvas")){U.clearRect(0,0,v.width,v.height);for(let oe=R.length-1;oe>=0;oe--){const Z=R[oe];if(Z.x+=Z.vx,Z.y+=Z.vy+.08,Z.vy*=.98,Z.alpha-=.018,Z.alpha<=0){R.splice(oe,1);continue}U.globalAlpha=Z.alpha,U.fillStyle=Z.color,U.beginPath(),U.arc(Z.x,Z.y,Z.size,0,Math.PI*2),U.fill()}U.globalAlpha=1,(H!==null||R.length>0)&&requestAnimationFrame(te)}}te()}function Y(){H!==null&&(clearInterval(H),H=null);const v=document.getElementById("fireworks-canvas");v&&v.getContext("2d").clearRect(0,0,v.width,v.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{Y(),n.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{Y(),n.remove(),i("boosters")})}function ro(e){var t,i;if(e.card_type==="player"&&e.player)return Wi(e);if(e.card_type==="game_changer"){const n=e._gcDef,d=(n==null?void 0:n.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[n==null?void 0:n.color]||s.purple,c=a[n==null?void 0:n.color]||a.purple,o=(n==null?void 0:n.name)||e.gc_type||"Game Changer",r=(n==null?void 0:n.effect)||((t=ut[e.gc_type])==null?void 0:t.desc)||"",u=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,f=((i=ut[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
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
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function ao(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
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
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}so()}function so(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const lo="simulation",ci="VOTRE_ZONE_ID";function co(){switch(lo){case"propellerads":return po();case"adsense":return uo();default:return _t()}}function _t(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const n=setInterval(()=>{i--;const d=document.getElementById("ad-cd"),s=document.getElementById("ad-skip");d&&(d.textContent=i),s&&(s.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(n),s&&(s.disabled=!1,s.style.cssText=s.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),s==null||s.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function po(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(_t());window.propeller.push({zone_id:ci,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function uo(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(_t());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:ci,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const Fe={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},De={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Te(e,t,i,n,d){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",d)}function me(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ft(e,t){var n,d;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((n=i.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((d=i.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ot(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function pi(){const e=Math.random()*100;return e<10?3:e<30?2:1}function nt(e,t){const i=Fe[t]||Fe["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const l=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===a).sort((o,r)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:a})),c=ot(l.length);l.forEach((o,r)=>{o._col=c[r]}),n[a]=l}return n}const s=[...e];for(const a of["GK","DEF","MIL","ATT"]){const l=[];for(let o=0;o<i[a];o++){let r=s.findIndex(u=>u.job===a);if(r===-1&&(r=s.findIndex(u=>u.job2===a)),r===-1&&(r=0),s[r]){const u={...s[r],_line:a};l.push(u),s.splice(r,1)}}const c=ot(l.length);l.forEach((o,r)=>{o._col=c[r]}),n[a]=l}return n}function ke(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function we(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ui(e,t,i){const d=new Set,s=t.filter(r=>{const u=r.gc_type||r.id;return d.has(u)?!1:(d.add(u),!0)});let a=[];function l(r,u){const f=r._gcDef,m={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},A={purple:"#9b59b6",light_blue:"#00bcd4"},p=m[f==null?void 0:f.color]||m.purple,h=A[f==null?void 0:f.color]||A.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":h};background:${p};
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
        ${s.map(A=>{const p=a.find(h=>h.gc_type===A.gc_type);return l(A,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(A=>{A.addEventListener("click",()=>{const p=A.dataset.id,h=s.find(_=>_.id===p);if(!h)return;const E=a.findIndex(_=>_.gc_type===h.gc_type);E>-1?a.splice(E,1):a.length<3&&a.push(h),o()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{r&&c(a)}),(f=e.querySelector("#gc-no-gc"))==null||f.addEventListener("click",()=>c([])),(m=e.querySelector("#gc-reset"))==null||m.addEventListener("click",()=>{a.length&&(a=[],o())})}o()}async function fo(e,t,i){const{state:n,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await j.from("decks").select("id,name,is_active,formation").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){Te(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const a=s.map(r=>r.id),{data:l}=await j.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let c=0;function o(){var _,S,$,M,I;const r=s[c],u=(l||[]).filter(G=>G.deck_id===r.id),f=u.filter(G=>{var H;return G.is_starter&&((H=G.card)==null?void 0:H.player)}).map(G=>ft(G.card,G.position)),m=u.find(G=>{var H;return((H=G.card)==null?void 0:H.card_type)==="formation"}),A=r.formation||((_=m==null?void 0:m.card)==null?void 0:_.formation)||"4-4-2",p=f.length>=11?nt(f,A):null,h=f.length>=11;ke(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
          <div style="font-size:11px;opacity:.6;margin-top:2px">${A} · ${f.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===s.length-1?"0.1":"0.3"});color:${c===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${p?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${Ke(p,A,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((G,H)=>`<div style="width:7px;height:7px;border-radius:50%;background:${H===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const H=e.querySelector(".deck-preview-wrap svg");H&&(H.removeAttribute("width"),H.removeAttribute("height"),H.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",H.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(S=document.getElementById("prev-deck"))==null||S.addEventListener("click",()=>{c>0&&(c--,o())}),($=document.getElementById("next-deck"))==null||$.addEventListener("click",()=>{c<s.length-1&&(c++,o())}),(M=document.getElementById("validate-deck"))==null||M.addEventListener("click",()=>{h&&t.navigate("match",{matchMode:i,deckId:r.id})}),(I=document.getElementById("cancel-deck-select"))==null||I.addEventListener("click",()=>{we(e),d("home")});const E=document.getElementById("deck-swipe-zone");if(E){let G=0,H=0;E.addEventListener("touchstart",V=>{G=V.touches[0].clientX,H=V.touches[0].clientY},{passive:!0}),E.addEventListener("touchend",V=>{const Y=V.changedTouches[0].clientX-G,T=V.changedTouches[0].clientY-H;Math.abs(Y)<40||Math.abs(Y)<Math.abs(T)||(Y<0&&c<s.length-1?(c++,o()):Y>0&&c>0&&(c--,o()))},{passive:!0})}}o()}function fi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function $e(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const n=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:me(e),d=fi(e),s=e._line||e.job||"MIL",a=De[s]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(ae(e,s))||0)+(e.boost||0),o=gi(e==null?void 0:e.country_code),r=Math.round(i*.19),u=Math.round(i*.25),f=i-Math.round(i*.19)-Math.round(i*.25),m=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${l};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${m}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${n&&!(e!=null&&e.used)?`<img src="${n}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${gt(e==null?void 0:e.country_code)?`<img src="${gt(e.country_code)}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">${o}</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${d?`<img src="${d}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function Se(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((s,a)=>{if(d+=$e(s,40,52),a<n.length-1){const l=Ae(s,n[a+1]);d+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function gt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function gi(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Ue(e,t,i,n,d=310,s=310,a=[]){const l=Ve[t]||{},c=ii(t)||ht[t]||[],o={},r=["ATT","MIL","DEF","GK"];for(const S of r)(e[S]||[]).forEach((M,I)=>{o[`${S}${I+1}`]=M});function u(S){const $=l[S];return $?{x:$.x*d,y:$.y*s}:null}let f="";for(const[S,$]of c){const M=u(S),I=u($);if(!M||!I)continue;const G=o[S],H=o[$],V=Ae(G,H);V==="#00ff88"||V==="#FFD700"?(f+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${I.x.toFixed(1)}" y2="${I.y.toFixed(1)}"
        stroke="${V}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,f+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${I.x.toFixed(1)}" y2="${I.y.toFixed(1)}"
        stroke="${V}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):f+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${I.x.toFixed(1)}" y2="${I.y.toFixed(1)}"
        stroke="${V}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const m=48,A=64,p=13,h=16,E={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[S,$]of Object.entries(o)){const M=u(S);if(!M||!$)continue;const I=S.replace(/[0-9]/g,""),G=De[I]||"#555",H=a.includes($.cardId),V=i==="attack"&&(["MIL","ATT"].includes(I)||H)&&!$.used||i==="defense"&&["GK","DEF","MIL"].includes(I)&&!$.used,Y=n.includes($.cardId);let T;i==="attack"?T=H?Math.max(1,Number($.note_a)||0):I==="MIL"?Number($.note_m)||0:Number($.note_a)||0:i==="defense"?T=I==="GK"?Number($.note_g)||0:I==="MIL"?Number($.note_m)||0:Number($.note_d)||0:T=Number(I==="GK"?$.note_g:I==="DEF"?$.note_d:I==="MIL"?$.note_m:$.note_a)||0,T=T+($.boost||0);const v=(M.x-m/2).toFixed(1),U=(M.y-A/2).toFixed(1),R=$.used?.25:Y?.45:1,W=E[$==null?void 0:$.rarity]||E.normal,te=Y?"#FFD700":W,oe=Y?3:($==null?void 0:$.rarity)==="légende"||($==null?void 0:$.rarity)==="pépite"?2.5:2,Z=A-p-h;f+=`<defs><clipPath id="cp-${S}"><rect x="${v}" y="${(M.y-A/2+p).toFixed(1)}" width="${m}" height="${Z}"/></clipPath></defs>`,f+=`<rect x="${v}" y="${U}" width="${m}" height="${A}" rx="5" fill="${G}" opacity="${R}"/>`;const pe=me($);pe&&!$.used&&(f+=`<image href="${pe}" x="${v}" y="${(M.y-A/2+p).toFixed(1)}" width="${m}" height="${Z}" clip-path="url(#cp-${S})" preserveAspectRatio="xMidYMin slice"/>`),f+=`<rect x="${v}" y="${U}" width="${m}" height="${p}" rx="4" fill="rgba(255,255,255,0.92)"/>`,f+=`<text x="${M.x.toFixed(1)}" y="${(M.y-A/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${($.name||"").slice(0,9)}</text>`;const ue=(M.y+A/2-h).toFixed(1);if(f+=`<rect x="${v}" y="${ue}" width="${m}" height="${h}" fill="rgba(255,255,255,0.92)"/>`,$.used)f+=`<text x="${M.x.toFixed(1)}" y="${(M.y+A/2-h/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const L=gt($.country_code);L?f+=`<image href="${L}" x="${(M.x-20).toFixed(1)}" y="${(M.y+A/2-h+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:f+=`<text x="${(M.x-13).toFixed(1)}" y="${(M.y+A/2-h/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${gi($.country_code)}</text>`,f+=`<text x="${M.x.toFixed(1)}" y="${(M.y+A/2-h/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${T}</text>`;const k=fi($);k?f+=`<image href="${k}" x="${(M.x+m/2-14).toFixed(1)}" y="${(M.y+A/2-h+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:$.clubName&&(f+=`<text x="${(M.x+14).toFixed(1)}" y="${(M.y+A/2-h/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${($.clubName||"").slice(0,3).toUpperCase()}</text>`),$.boost&&(f+=`<rect x="${(M.x+m/2-12).toFixed(1)}" y="${(M.y-A/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,f+=`<text x="${(M.x+m/2-5).toFixed(1)}" y="${(M.y-A/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${$.boost}</text>`)}f+=`<rect x="${v}" y="${U}" width="${m}" height="${A}" rx="5" fill="${Y?"rgba(255,255,255,0.12)":"none"}" stroke="${te}" stroke-width="${oe}" opacity="${R}"/>`,V&&(f+=`<rect x="${v}" y="${U}" width="${m}" height="${A}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${Y?"selected":""}" data-card-id="${$.cardId}" data-role="${I}" style="cursor:pointer"/>`)}const _=38;return`<svg viewBox="${-_} ${-_} ${d+_*2} ${s+_*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${f}
  </svg>`}function Ke(e,t,i,n,d=300,s=300,a=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ue(e,t,i,n,d,s,a)}
  </div>`}function je(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function mi(e,t,i,n){var M;const{state:d,navigate:s,toast:a}=t;ke(e);const l=d.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return fo(e,t,i);const c=l.deckId;let o,r,u,f;try{const I=await Promise.all([j.from("decks").select("formation,name").eq("id",c).single(),j.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);o=I[0].data,u=I[0].error,r=I[1].data,f=I[1].error}catch(I){console.error("[Match] Exception chargement deck:",I),Te(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(u||f){console.error("[Match] Erreur Supabase:",u||f),Te(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const m=(r||[]).filter(I=>{var G;return I.is_starter&&((G=I.card)==null?void 0:G.player)}).map(I=>ft(I.card,I.position)),A=(r||[]).filter(I=>{var G;return!I.is_starter&&((G=I.card)==null?void 0:G.player)}).map(I=>ft(I.card,I.position));if(m.length<11){Te(e,"⚠️",`Deck incomplet (${m.length}/11).`,"Compléter",()=>s("decks"));return}const p=(r||[]).find(I=>{var G;return((G=I.card)==null?void 0:G.card_type)==="formation"}),h=(o==null?void 0:o.formation)||((M=p==null?void 0:p.card)==null?void 0:M.formation)||"4-4-2",{data:E,error:_}=await j.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",d.profile.id).eq("card_type","game_changer"),{data:S}=await j.from("gc_definitions").select("*").eq("is_active",!0),$=(E||[]).map(I=>({...I,_gcDef:(S==null?void 0:S.find(G=>G.name===I.gc_type||G.id===I.gc_definition_id))||null}));n({deckId:c,formation:h,starters:m,subsRaw:A,gcCardsEnriched:$,gcDefs:S||[]})}async function go(e,t){const{state:i}=t,d=(i.params||{}).matchMode||"vs_ai_easy",s=d.replace("vs_ai_",""),a=d;await mi(e,t,d,async({deckId:l,formation:c,starters:o,subsRaw:r,gcCardsEnriched:u,gcDefs:f})=>{try{const m=nt(o,c),A=await mo(c,s),p=async h=>{try{const{data:E,error:_}=await j.from("matches").insert({home_id:i.profile.id,away_id:null,mode:a,home_deck_id:l,status:"in_progress"}).select().single();if(_){console.error("[MatchIA] Erreur création match:",_),Te(e,"⚠️","Impossible de créer le match ("+_.message+").","Retour",()=>t.navigate("home"));return}const S={gcDefs:f||[],matchId:E==null?void 0:E.id,mode:a,difficulty:s,formation:c,homeTeam:m,aiTeam:A,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:h,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};yo(e,S,t)}catch(E){console.error("[MatchIA] Exception launchMatch:",E),Te(e,"⚠️","Erreur au lancement du match : "+E.message,"Retour",()=>t.navigate("home"))}};if(!u.length){p([]);return}ui(e,u,p)}catch(m){console.error("[MatchIA] Exception setup:",m),Te(e,"⚠️","Erreur de préparation du match : "+m.message,"Retour",()=>t.navigate("home"))}})}async function mo(e,t){var a,l;const{data:i}=await j.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return xo(e);const n=Fe[e]||Fe["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},s=[...i];for(const c of["GK","DEF","MIL","ATT"]){const o=s.filter(A=>A.job===c),r=s.filter(A=>A.job!==c),u=[...o,...r],f=[];for(let A=0;A<n[c];A++){const p=u[A]||s[A];p&&f.push({cardId:"ai-"+p.id+"-"+A,id:p.id,firstname:p.firstname,name:p.surname_encoded,country_code:p.country_code,club_id:p.club_id,job:p.job,job2:p.job2,note_g:Number(p.note_g)||0,note_d:Number(p.note_d)||0,note_m:Number(p.note_m)||0,note_a:Number(p.note_a)||0,rarity:p.rarity,skin:p.skin,hair:p.hair,hair_length:p.hair_length,clubName:((a=p.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((l=p.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:c})}const m=ot(f.length);f.forEach((A,p)=>{A._col=m[p]}),d[c]=f}return d}function xo(e){const t=Fe[e]||Fe["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const s of["GK","DEF","MIL","ATT"]){const a=[];for(let c=0;c<t[s];c++){const o=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:n[d%n.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?o:2,note_d:s==="DEF"?o:2,note_m:s==="MIL"?o:2,note_a:s==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:s}),d++}const l=ot(a.length);a.forEach((c,o)=>{c._col=l[o]}),i[s]=a}return i}function yo(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Ue(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>ho(e,t,i),5e3)}function ho(e,t,i){const n=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[];function s(p){return p.reduce((h,E)=>h+ae(E,"MIL"),0)}function a(p){let h=0;for(let E=0;E<p.length-1;E++){const _=Ae(p[E],p[E+1]);_==="#00ff88"?h+=2:_==="#FFD700"&&(h+=1)}return h}const l=s(n)+a(n),c=s(d)+a(d),o=l>=c;function r(p,h,E,_){return`<div id="duel-row-${_}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${h}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((S,$)=>{const M=$<p.length-1?Ae(S,p[$+1]):null,I=!M||M==="#ff3333"||M==="#cc2222",G=M==="#00ff88"?"+2":M==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${_}" data-idx="${$}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${$e({...S,note:ae(S,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${$<p.length-1?`<div class="duel-link duel-link-${_}" data-idx="${$}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${I?"rgba(255,255,255,0.12)":M};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${I?"none":`0 0 8px ${M}`}">
            ${G?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${M}">${G}</span>`:""}
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
  </div>`;const u=()=>{const p=(h,E)=>e.querySelectorAll(h).forEach((_,S)=>{setTimeout(()=>{_.style.opacity="1",_.style.transform="translateY(0) scale(1)"},E+S*90)});p(".duel-card-home",150),p(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((h,E)=>{setTimeout(()=>{h.style.opacity="1"},E*70)}),900),setTimeout(()=>{const h=e.querySelector("#vs-label");h&&(h.style.opacity="1",h.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(E=>E.style.opacity="1")},1250),setTimeout(()=>{f("score-home",l,800),f("score-ai",c,800)},1500)};function f(p,h,E){const _=document.getElementById(p);if(!_)return;const S=performance.now(),$=M=>{const I=Math.min(1,(M-S)/E);_.textContent=Math.round(h*(1-Math.pow(1-I,3))),I<1?requestAnimationFrame($):_.textContent=h};requestAnimationFrame($)}requestAnimationFrame(u),t.attacker=o?"home":"ai";const m=o?pi():null;o&&(t.boostCard={value:m}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(p=>({name:p.name,note:ae(p,"MIL"),portrait:me(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),aiPlayers:d.map(p=>({name:p.name,note:ae(p,"MIL"),portrait:me(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),homeTotal:l,aiTotal:c,text:`Duel milieu : ${t.clubName} ${l} – ${c} IA → ${o?t.clubName+" attaque":"IA attaque"}`});const A=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",ce(e,t,i),t.attacker==="ai"&&setTimeout(()=>mt(e,t,i),800)};setTimeout(()=>{const p=document.getElementById("score-home"),h=document.getElementById("score-ai"),E=document.getElementById(o?"duel-row-home":"duel-row-ai"),_=document.getElementById(o?"duel-row-ai":"duel-row-home"),S=o?p:h,$=o?h:p;S&&(S.style.fontSize="80px",S.style.color=o?"#FFD700":"#ff6b6b",S.style.animation="duelPulse .5s ease"+(o?", duelGlow 1.5s ease infinite .5s":"")),$&&($.style.opacity="0.25"),setTimeout(()=>{E&&(E.style.transformOrigin="center",E.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",E.style.zIndex="5"),setTimeout(()=>{var I;const M=document.getElementById("duel-shock");if(M){const G=(I=_||E)==null?void 0:I.getBoundingClientRect(),H=e.querySelector(".match-screen").getBoundingClientRect();G&&(M.style.top=G.top-H.top+G.height/2+"px"),M.style.animation="shockwave .5s ease-out forwards"}_&&(_.style.transformOrigin="center",_.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var I;const M=document.getElementById("duel-finale");M&&(M.innerHTML=`
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
          </button>`,M.style.transition="opacity .45s ease",M.style.opacity="1",M.style.pointerEvents="auto",(I=document.getElementById("start-match-btn"))==null||I.addEventListener("click",A))},600)},700)},2800)}function bo(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(i=>je(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(i=>je(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${je(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${je(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function ce(e,t,i){var S,$,M,I,G,H,V,Y;const n=t.selected.map(T=>T.cardId),d=t.usedSubIds||[],s=t.homeSubs.filter(T=>!d.includes(T.cardId)),l=Object.values(t.homeTeam).flat().filter(T=>T.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs,c=!["GK","DEF","MIL","ATT"].some(T=>(t.aiTeam[T]||[]).some(v=>!v.used)),o=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(T=>!T.used),r=t.phase==="attack"&&c&&o.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(T=>!T.used).map(T=>T.cardId):[];t.log[t.log.length-1];const u=t.phase==="ai-attack"||t.phase==="ai-defense",f=t.phase==="attack",m=t.phase==="defense",A=t.phase==="finished",p=t.gcCards.filter(T=>!t.usedGc.includes(T.id)),h=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const v=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${Se((v.players||[]).map(U=>({...U,used:!1})),"#ff6b6b",v.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const v=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${Se((v.players||[]).map(U=>({...U,used:!1})),"#00ff88",v.total)}
          </div>`}const T=t.log[t.log.length-1];return T?'<div style="padding:2px 4px">'+bo(T)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const T=window.innerWidth>=700,v=(L,k,q)=>{var O,K;const N=(t.gcDefs||[]).find(ee=>ee.name===L.gc_type),g={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[N==null?void 0:N.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",y={purple:"#b06ce0",light_blue:"#00d4ef"}[N==null?void 0:N.color]||"#b06ce0",x=(N==null?void 0:N.name)||L.gc_type,z=(N==null?void 0:N.effect)||((O=ve[L.gc_type])==null?void 0:O.desc)||"",b=N!=null&&N.image_url?`/manager-wars/icons/${N.image_url}`:null,C=((K=ve[L.gc_type])==null?void 0:K.icon)||"⚡",w=Math.round(q*.22),D=Math.round(q*.22),B=q-w-D,F=x.length>12?7:9;return`<div class="gc-mini" data-gc-id="${L.id}" data-gc-type="${L.gc_type}"
          style="box-sizing:border-box;width:${k}px;height:${q}px;border-radius:10px;border:2px solid ${y};background:${g};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${w}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${F}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${k-6}px">${x}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${B}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${b?`<img src="${b}" style="max-width:${k-10}px;max-height:${B-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(B*.55)}px">${C}</span>`}
          </div>
          <div style="height:${D}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${z.slice(0,38)}</span>
          </div>
        </div>`},U=(L,k)=>{var q;return`<div id="boost-card"
          style="box-sizing:border-box;width:${L}px;height:${k}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(k*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(k*.2)}px">⚡</div>
            <div style="font-size:${Math.round(k*.09)}px;color:#000;font-weight:900">+${(q=t.boostCard)==null?void 0:q.value}</div>
          </div>`},R=(L,k)=>k?U(130,175):v(L,130,175),W=(L,k)=>k?U(68,95):v(L,68,95),te=T?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",oe=A?`<button id="btn-results" style="${te};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:u?`<div style="${te};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:f?`<button id="btn-action" style="${te};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:m?`<button id="btn-action" style="${te};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${te};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Z=f||m?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",pe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${T?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(L=>`<div class="sub-btn-col" data-sub-id="${L.cardId}" style="cursor:pointer;flex-shrink:0">${$e(L,76,100)}</div>`).join("")}
      </div>`,ue=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${Ke(t.homeTeam,t.formation,t.phase,n,300,300,r)}
        </div>
      </div>`;return T?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${pe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${ue}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${oe}${Z}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${p.map(L=>R(L,!1)).join("")}
            ${h?R(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ke(t.homeTeam,t.formation,t.phase,n,300,300,r)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${p.map(L=>W(L,!1)).join("")}
            ${h?W(null,!0):""}
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
          <div>${oe}${Z}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(T=>{var v,U,R;if(T.type==="duel"){const W=T.isGoal,te=T.homeScored?"#FFD700":W?"#ff6b6b":"rgba(255,255,255,0.3)",oe=T.homeScored?"⚽ BUT !":W?"⚽ BUT IA !":(v=T.homePlayers)!=null&&v.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${W?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${te};margin-bottom:4px">
                <div style="font-size:9px;color:${te};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${oe}</div>
                ${(U=T.homePlayers)!=null&&U.length?`<div style="margin-bottom:3px">${Se(T.homePlayers,"rgba(255,255,255,0.7)",T.homeTotal)}</div>`:""}
                ${(R=T.aiPlayers)!=null&&R.length?`<div style="opacity:0.7">${Se(T.aiPlayers,"#ff6b6b",T.aiTotal)}</div>`:""}
              </div>`}return T.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${T.outPlayer?$e({...T.outPlayer,used:!0,_line:T.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${T.inPlayer?$e({...T.inPlayer,_line:T.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:T.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${T.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${T.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function E(){const T=e.querySelector(".match-screen");if(!T)return;const v=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);T.style.bottom="auto",T.style.height=v+"px",T.style.minHeight=v+"px",T.style.maxHeight=v+"px",T.style.overflow="hidden";const U=e.querySelector("#mobile-action-bar"),R=e.querySelector("#mobile-play-area");U&&R&&(R.style.paddingBottom=U.offsetHeight+"px")}if(E(),setTimeout(E,120),setTimeout(E,400),setTimeout(E,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",E),window.visualViewport.addEventListener("scroll",E)),window.addEventListener("resize",E)),function(){const v=e.querySelector(".terrain-wrapper svg");v&&(v.removeAttribute("width"),v.removeAttribute("height"),v.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",v.setAttribute("viewBox","-26 -26 352 352"),v.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const T=e.querySelector(".terrain-wrapper svg");T&&(T.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let T=!1,v=30;const U=()=>document.getElementById("match-timer"),R=()=>{const W=U();if(!W)return;const te=String(Math.floor(v/60)).padStart(2,"0"),oe=String(v%60).padStart(2,"0");W.textContent=` ${te}:${oe}`,W.style.color=T?"#ff2222":"#ff9500",W.style.fontWeight="900"};R(),t._timerInt=setInterval(()=>{if(v--,v<0)if(!T)T=!0,v=15,R();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const W=document.createElement("div");W.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",W.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(W),setTimeout(()=>{W.remove(),Pe(e,t,i)},2500)}else R()},1e3)}(S=document.getElementById("match-quit"))==null||S.addEventListener("click",()=>{we(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Pe(e,t,i))}),($=document.getElementById("view-ai"))==null||$.addEventListener("click",()=>Lo(t,i)),(M=document.getElementById("toggle-history"))==null||M.addEventListener("click",()=>{var T;(T=document.getElementById("match-history-panel"))==null||T.classList.add("open")}),(I=document.getElementById("close-history"))==null||I.addEventListener("click",()=>{var T;(T=document.getElementById("match-history-panel"))==null||T.classList.remove("open")}),(G=document.getElementById("btn-action"))==null||G.addEventListener("click",()=>{t.selected.length!==0&&(f?wo(e,t,i):m&&$o(e,t,i))}),(H=document.getElementById("btn-results"))==null||H.addEventListener("click",()=>Pe(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(T=>{T.addEventListener("click",()=>vo(T,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(T=>{T.addEventListener("click",()=>Eo(T.dataset.gcId,T.dataset.gcType,e,t,i))}),(V=document.getElementById("boost-card"))==null||V.addEventListener("click",()=>Io(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(T=>{T.addEventListener("click",()=>Qt(e,t,i,T.dataset.subId))}),(Y=document.getElementById("sub-btn-main"))==null||Y.addEventListener("click",()=>Qt(e,t,i))}function vo(e,t,i,n){const d=e.dataset.cardId,s=e.dataset.role,a=t.selected.findIndex(l=>l.cardId===d);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(c=>c.cardId===d);l&&t.selected.push({...l,_role:s,_line:s})}ce(i,t,n)}function kt(e,t,i){e.matchId&&j.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function wo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),kt(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(a=>(t.aiTeam[a]||[]).some(l=>!l.used)),d=t.selected.map(a=>{const l=(t.homeTeam[a._role]||[]).find(o=>o.cardId===a.cardId)||a,c=n&&["GK","DEF"].includes(a._role);return{...l,_line:a._role,...c?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=bt(d,t.modifiers.home);t.pendingAttack={...s,players:[...d],side:"home"},t.selected.forEach(a=>{const l=(t.homeTeam[a._role]||[]).find(c=>c.cardId===a.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",ce(e,t,i),setTimeout(()=>_o(e,t,i),1200)}function $o(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),kt(t,i,i.state.profile.id);const n=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l,_line:l._role})),d=vt(n,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId);c&&(c.used=!0)});const s=wt(t.pendingAttack.total,d.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:me(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l;return{name:c.name,note:(c._line==="GK"?Number(c.note_g)||0:c._line==="MIL"?Number(c.note_m)||0:Number(c.note_d)||0)+(c.boost||0),portrait:me(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(s.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,ce(e,t,i),rt(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Ce(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Ce(e,t,i,"home-attack")}function mt(e,t,i){kt(t,i,null);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=ni(n,"attack",t.difficulty);if(!d.length){Je(e,t,i);return}const s=bt(d,t.modifiers.ai);t.pendingAttack={...s,players:d,side:"ai"},d.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${d.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),c=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!c){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:me(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,ce(e,t,i),rt(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Ce(e,t,i,"home-attack")});return}t.phase="defense",ce(e,t,i)}function _o(e,t,i){var o,r;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=ni(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(f=>!f.used)).length){t.homeScore++;const f={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((o=t.pendingAttack)==null?void 0:o.players)||[]).map(m=>({name:m.name,note:ae(m,m._line||m.job),portrait:me(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,ce(e,t,i),rt(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{Ce(e,t,i,"ai-attack")});return}const a=d.length>0?vt(d,t.modifiers.ai).total:0;d.forEach(u=>{u.used=!0});const l=wt(t.pendingAttack.total,a,t.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>({name:u.name,note:u._line==="MIL"?u.note_m:u.note_a,portrait:me(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),aiPlayers:d.map(u=>({name:u.name,note:u._line==="GK"?u.note_g:u._line==="MIL"?u.note_m:u.note_d,portrait:me(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(l.shielded)c.text="🛡️ Bouclier IA !",t.log.push(c);else if(l.goal){t.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(c),t.modifiers.ai={},t.pendingAttack=null,ce(e,t,i),rt(c.homePlayers,t.homeScore,t.aiScore,!0,()=>{Ce(e,t,i,"ai-attack")});return}else c.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(c);t.modifiers.ai={},t.pendingAttack=null,Ce(e,t,i,"ai-attack")}function Ce(e,t,i,n){if(t.round++,xi(t)){Pe(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Je(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Je(e,t,i);return}setTimeout(()=>mt(e,t,i),100);return}t.phase="attack",ce(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Je(e,t,i);return}t.phase="ai-attack",ce(e,t,i),setTimeout(()=>mt(e,t,i),800)}}function xi(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(d=>!d.used));return!t&&!i}function Je(e,t,i){xi(t)?Pe(e,t,i):(t.phase="attack",ce(e,t,i))}function ko(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=me(e),s=me(t),a=De[e.job]||"#555",l=De[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
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
  `,document.body.appendChild(n);let r=!1;const u=()=>{r||(r=!0,n.remove(),i())};n.addEventListener("click",u),setTimeout(u,2e3)}function Oe(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function Qt(e,t,i,n=null){if(t.phase!=="attack"){Oe("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Oe(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.values(t.homeTeam).flat().filter(u=>u.used),s=t.homeSubs.filter(u=>!t.usedSubIds.includes(u.cardId));if(!d.length){Oe("Aucun joueur utilisé à remplacer");return}if(!s.length){Oe("Aucun remplaçant disponible");return}let a=0,l=Math.max(0,s.findIndex(u=>u.cardId===n)),c=!1;const o=document.createElement("div");o.id="sub-overlay",o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function r(){var E,_,S,$,M,I;const u=d[a],f=s[l],m=Math.min(130,Math.round((window.innerWidth-90)/2)),A=Math.round(m*1.35),p=G=>`background:rgba(255,255,255,0.12);border:none;color:${G?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${G?"default":"pointer"};flex-shrink:0`;o.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${p(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${f?$e({...f,used:!1,boost:0},m,A):"<div>—</div>"}</div>
        <button id="in-down" style="${p(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${p(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${u?$e({...u,used:!1,boost:0},m,A):"<div>—</div>"}</div>
        <button id="out-down" style="${p(a>=d.length-1)}" ${a>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(E=o.querySelector("#sub-close"))==null||E.addEventListener("click",()=>o.remove()),(_=o.querySelector("#out-up"))==null||_.addEventListener("click",()=>{a>0&&(a--,r())}),(S=o.querySelector("#out-down"))==null||S.addEventListener("click",()=>{a<d.length-1&&(a++,r())}),($=o.querySelector("#in-up"))==null||$.addEventListener("click",()=>{l>0&&(l--,r())}),(M=o.querySelector("#in-down"))==null||M.addEventListener("click",()=>{l<s.length-1&&(l++,r())});const h=(G,H,V,Y)=>{const T=o.querySelector("#"+G);if(!T)return;let v=0;T.addEventListener("touchstart",U=>{v=U.touches[0].clientY},{passive:!0}),T.addEventListener("touchend",U=>{const R=U.changedTouches[0].clientY-v;if(Math.abs(R)<30)return;const W=H();R<0&&W<Y-1?(V(W+1),r()):R>0&&W>0&&(V(W-1),r())},{passive:!0})};h("in-panel",()=>l,G=>l=G,s.length),h("out-panel",()=>a,G=>a=G,d.length),(I=o.querySelector("#sub-confirm"))==null||I.addEventListener("click",G=>{if(G.preventDefault(),G.stopPropagation(),c)return;c=!0;const H=d[a],V=s[l];if(!H||!V)return;let Y=null,T=-1;for(const[U,R]of Object.entries(t.homeTeam)){const W=(R||[]).findIndex(te=>te.cardId===H.cardId);if(W!==-1){Y=U,T=W;break}}if(T===-1||!Y){Oe("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),o.remove();return}const v={...V,_line:Y,_col:H._col||0,used:!1,boost:0};t.homeTeam[Y].splice(T,1,v),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(V.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:H.name,firstname:H.firstname,note:ae(H,Y),portrait:me(H),job:H.job,country_code:H.country_code,rarity:H.rarity,clubName:H.clubName,clubLogo:H.clubLogo},inPlayer:{name:V.name,firstname:V.firstname,note:ae(V,Y),portrait:me(V),job:V.job,country_code:V.country_code,rarity:V.rarity,clubName:V.clubName,clubLogo:V.clubLogo},text:`🔄 ${V.firstname} ${V.name} remplace ${H.firstname} ${H.name}`}),o.remove(),ko(H,V,()=>ce(e,t,i))})}document.body.appendChild(o),r()}function Eo(e,t,i,n,d){var A,p;const s=(n.gcDefs||[]).find(h=>h.name===t),a=ve[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",o=(s==null?void 0:s.name)||t,r=(s==null?void 0:s.effect)||a.desc,u=s!=null&&s.image_url?`/manager-wars/icons/${s.image_url}`:null,f=a.icon||"⚡",m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",m.innerHTML=`
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
    </div>`,document.body.appendChild(m),(A=m.querySelector("#gc-back"))==null||A.addEventListener("click",()=>m.remove()),(p=m.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{m.remove(),Ao(e,t,i,n,d)})}function Xe(e,t,i,n,d,s){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function c(){var o,r;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(u=>{const f=u._line||u.job||"MIL",m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",A=ae(u,f)+(u.boost||0),p=l.find(h=>h.cardId===u.cardId);return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${p?"#FFD700":"rgba(255,255,255,0.25)"};background:${m};overflow:hidden;cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${A}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(o=a.querySelector("#gc-picker-close"))==null||o.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.cid,m=e.find(p=>p.cardId===f);if(!m)return;const A=l.findIndex(p=>p.cardId===f);A>-1?l.splice(A,1):l.length<t&&l.push(m),c()})}),(r=a.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{a.remove(),s(l)})}c(),document.body.appendChild(a)}const To={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,d,s)=>{const a=Object.entries(n.homeTeam).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,c])=>c.filter(o=>!o.used).map(o=>({...o,_line:l})));return a.length?(Xe(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,d,n,l=>{l.forEach(c=>{const o=(n.homeTeam[c._line]||[]).find(r=>r.cardId===c.cardId);o&&(o.boost=(o.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${o.name}`,type:"info"}))}),ce(d,n,s)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),ce(d,n,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},d,s,a)=>{const l=n==="home"?d.homeTeam:d.aiTeam,c=n==="ai"?"adverse":"allié",o=Object.entries(l).filter(([r])=>!i.length||i.includes(r)).flatMap(([r,u])=>u.filter(f=>!f.used).map(f=>({...f,_line:r})));return o.length?(Xe(o,t,`Choisir ${t} joueur(s) ${c}(s) à débuffer (-${e})`,s,d,r=>{r.forEach(u=>{const m=((n==="home"?d.homeTeam:d.aiTeam)[u._line]||[]).find(A=>A.cardId===u.cardId);m&&(m.boost=(m.boost||0)-e,d.log.push({text:`🎯 -${e} sur ${m.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),ce(s,d,a)}),!0):(d.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),ce(s,d,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,d,s)=>{const a=i==="home"?n.homeTeam:n.aiTeam,l=i==="ai"?"adverse":"allié",c=Object.entries(a).filter(([o])=>!t.length||t.includes(o)).flatMap(([o,r])=>r.filter(u=>!u.used).map(u=>({...u,_line:o})));return c.length?(Xe(c,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,d,n,o=>{o.forEach(r=>{const f=((i==="home"?n.homeTeam:n.aiTeam)[r._line]||[]).find(m=>m.cardId===r.cardId);f&&(f.used=!0,n.log.push({text:`❌ ${f.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),ce(d,n,s)}),!0):(n.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),ce(d,n,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,d)=>{const s=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,l])=>l.filter(c=>c.used).map(c=>({...c,_line:a})));return s.length?(Xe(s,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,a=>{a.forEach(l=>{const c=(i.homeTeam[l._line]||[]).find(o=>o.cardId===l.cardId);c&&(c.used=!1,i.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),ce(n,i,d)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),ce(n,i,d),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Ao(e,t,i,n,d){n.usedGc.push(e);const s=n.gcDefs||[],a=s.find(c=>c.name===t)||s.find(c=>{var o;return((o=c.name)==null?void 0:o.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const c=To[a.effect_type];c?c(a.effect_params||{},n,i,d)||(l=!0):(d.toast(`Effet "${a.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(n.homeTeam).flatMap(([o,r])=>(r||[]).filter(u=>u.used).map(u=>({...u,_line:o})));c.length?(c[0].used=!1,n.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(o=>!o.used);if(c.length){const o=c.sort((r,u)=>ae(u,"ATT")-ae(r,"ATT"))[0];o.used=!0,n.log.push({text:`❄️ ${o.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}j.from("cards").delete().eq("id",e).then(()=>{}),l&&ce(i,n,d)}function Io(e,t,i){const n=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${De[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ae(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const s=d.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[a]||[]).find(c=>c.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),ce(e,t,i)})})}function rt(e,t,i,n,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(o,r)=>`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${De[o.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${o.portrait?`<img src="${o.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(o.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const c=()=>{l||(l=!0,s.remove(),setTimeout(()=>d(),50))};s.addEventListener("click",c),setTimeout(c,3500)}async function Pe(e,t,i){var r,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,d=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,a=d?"victoire":s?"nul":"defaite",l=Si(t.mode,a);t.matchId&&await j.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?n.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(n.profile.credits||0)+l,matches_played:(n.profile.matches_played||0)+1};d?c.wins=(n.profile.wins||0)+1:s?c.draws=(n.profile.draws||0)+1:c.losses=(n.profile.losses||0)+1,await j.from("users").update(c).eq("id",n.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{o.remove(),we(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{o.remove(),we(e),i.navigate("match",{matchMode:t.mode})})}function Lo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ue(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function Mo(e,t){await mi(e,t,"random",({deckId:i,formation:n,starters:d,subsRaw:s,gcCardsEnriched:a,gcDefs:l})=>{const c=o=>zo(e,t,i,n,d,s,o,l||[]);if(!a.length){c([]);return}ui(e,a,c)})}async function zo(e,t,i,n,d,s,a=[],l=[]){var _;const{state:c,navigate:o,toast:r}=t;let u=!1,f=null;ke(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const m=async(S=!0)=>{u=!0,f&&(j.removeChannel(f),f=null),S&&await j.rpc("cancel_matchmaking",{p_user_id:c.profile.id}).catch(()=>{})};(_=document.getElementById("mm-cancel"))==null||_.addEventListener("click",async()=>{try{await m(!0)}catch{}we(e),o("home")});const A=async(S,$,M)=>{if(u)return;u=!0,f&&(j.removeChannel(f),f=null);const I=document.getElementById("mm-status");I&&(I.textContent="Adversaire trouvé !"),await new Promise(G=>setTimeout(G,600)),e.isConnected&&So(e,t,S,M,a,l)},{data:p,error:h}=await j.rpc("try_matchmake",{p_user_id:c.profile.id,p_deck_id:i});if(h||!(p!=null&&p.success)){r("Erreur de matchmaking","error"),we(e),o("home");return}if(p.matched){A(p.match_id,p.opponent_id,!1);return}const E=document.getElementById("mm-status");E&&(E.textContent="En attente d'un autre joueur..."),f=j.channel("matchmaking-"+c.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${c.profile.id}`},S=>{const $=S.new;$.status==="matched"&&$.match_id&&A($.match_id,$.matched_with,!0)}).subscribe()}async function So(e,t,i,n,d=[],s=[]){const{state:a,navigate:l,toast:c}=t,o=n?"p1":"p2",r=n?"p2":"p1",u=(d||[]).map(g=>g.id),f=(d||[]).map(g=>({id:g.id,gc_type:g.gc_type,_gcDef:g._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:m}=await j.from("matches").select("*").eq("id",i).single();if(!m){c("Match introuvable","error"),l("home");return}async function A(){const[{data:g},{data:y},{data:x},{data:z}]=await Promise.all([j.rpc("get_deck_for_match",{p_deck_id:m.home_deck_id}),j.rpc("get_deck_for_match",{p_deck_id:m.away_deck_id}),j.from("users").select("id,pseudo,club_name").eq("id",m.home_id).single(),j.from("users").select("id,pseudo,club_name").eq("id",m.away_id).single()]),b=F=>({cardId:F.card_id,position:F.position,id:F.id,firstname:F.firstname,name:F.surname_encoded,country_code:F.country_code,club_id:F.club_id,job:F.job,job2:F.job2,note_g:Number(F.note_g)||0,note_d:Number(F.note_d)||0,note_m:Number(F.note_m)||0,note_a:Number(F.note_a)||0,rarity:F.rarity,skin:F.skin,hair:F.hair,hair_length:F.hair_length,clubName:F.club_encoded_name||null,clubLogo:F.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),C=((g==null?void 0:g.starters)||[]).map(F=>b(F)),w=((y==null?void 0:y.starters)||[]).map(F=>b(F)),D=(g==null?void 0:g.formation)||"4-4-2",B=(y==null?void 0:y.formation)||"4-4-2";return{p1Team:nt(C,D),p2Team:nt(w,B),p1Subs:((g==null?void 0:g.subs)||[]).map(F=>b(F)),p2Subs:((y==null?void 0:y.subs)||[]).map(F=>b(F)),p1Formation:D,p2Formation:B,p1Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 1",p2Name:(z==null?void 0:z.club_name)||(z==null?void 0:z.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?u:[],gc_p2:n?[]:u,gcCardsFull_p1:n?f:[],gcCardsFull_p2:n?[]:f,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,lastActionAt:new Date().toISOString()}}let p=m.game_state&&Object.keys(m.game_state).length?m.game_state:null;if(!p)if(n){p=await A();const{data:g}=await j.from("matches").select("game_state").eq("id",i).single();!(g!=null&&g.game_state)||!Object.keys(g.game_state).length?await j.from("matches").update({game_state:p,turn_user_id:m.home_id}).eq("id",i):p=g.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let g=0;g<30&&!p;g++){await new Promise(x=>setTimeout(x,400));const{data:y}=await j.from("matches").select("game_state").eq("id",i).single();y!=null&&y.game_state&&Object.keys(y.game_state).length&&(p=y.game_state)}if(!p){c("Erreur de synchronisation","error"),l("home");return}p.gc_p2=u,p.gcCardsFull_p2=f,await j.from("matches").update({game_state:p}).eq("id",i)}let h=!1,E=null,_=!1;function S(g){var z,b;try{j.removeChannel($)}catch{}const y=g.winner_id===a.profile.id;(z=document.getElementById("pvp-end-overlay"))==null||z.remove();const x=document.createElement("div");x.id="pvp-end-overlay",x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center",x.innerHTML=`
      <div style="font-size:64px">${y?"🏆":"😞"}</div>
      <div style="font-size:26px;font-weight:900;color:${y?"#FFD700":"#ff6b6b"}">${y?"VICTOIRE !":"DÉFAITE"}</div>
      <div style="font-size:18px">${p[o+"Name"]} ${p[o+"Score"]} – ${p[r+"Score"]} ${p[r+"Name"]}</div>
      ${g.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(x),(b=x.querySelector("#pvp-end-home"))==null||b.addEventListener("click",()=>{x.remove(),we(e),l("home")})}const $=j.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},g=>{const y=g.new;try{if(y.status==="finished"||y.forfeit){if(h)return;h=!0,E&&(clearInterval(E),E=null),y.game_state&&(p=y.game_state),S(y);return}if(y.game_state){const x=p;p=y.game_state;for(const z of["p1","p2"])for(const b of["GK","DEF","MIL","ATT"]){const C=(x[z+"Team"]||{})[b]||[];((p[z+"Team"]||{})[b]||[]).forEach(D=>{const B=C.find(F=>F.cardId===D.cardId);B!=null&&B.used&&(D.used=!0)})}Y()}}catch(x){console.error("[PvP] crash:",x)}}).subscribe();async function M(g){Object.assign(p,g),p.lastActionAt=new Date().toISOString();const{error:y}=await j.from("matches").update({game_state:p}).eq("id",i);y&&c("Erreur de synchronisation","error");try{Y()}catch(x){console.error("[PvP] renderPvpScreen crash:",x)}}async function I(){if(h)return;h=!0,E&&(clearInterval(E),E=null);const g=n?m.away_id:m.home_id,y=n?"p2":"p1",x=n?"p1":"p2",z={...p,[y+"Score"]:3,[x+"Score"]:0,phase:"finished"};try{await j.from("matches").update({status:"finished",forfeit:!0,winner_id:g,game_state:z}).eq("id",i)}catch{}try{j.removeChannel($)}catch{}setTimeout(()=>{we(e),l("home")},800)}const G={BOOST_STAT:({value:g=1,count:y=1,roles:x=[]},z,b)=>{const C=z[o+"Team"],w=Object.entries(C).filter(([D])=>!x.length||x.includes(D)).flatMap(([D,B])=>B.filter(F=>!F.used).map(F=>({...F,_line:D})));if(!w.length){z.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),b(z);return}H(w,y,`Choisir ${y} joueur(s) à booster (+${g})`,D=>{D.forEach(B=>{const F=(C[B._line]||[]).find(O=>O.cardId===B.cardId);F&&(F.boost=(F.boost||0)+g,z.log.push({text:`⚡ +${g} sur ${F.name}`,type:"info"}))}),z[o+"Team"]=C,b(z)})},DEBUFF_STAT:({value:g=1,count:y=1,roles:x=[],target:z="ai"},b,C)=>{const w=z==="home"?o:r,D=b[w+"Team"],B=z==="home"?"allié":"adverse",F=Object.entries(D).filter(([O])=>!x.length||x.includes(O)).flatMap(([O,K])=>K.filter(ee=>!ee.used).map(ee=>({...ee,_line:O})));if(!F.length){b.log.push({text:`🎯 Aucun joueur ${B}`,type:"info"}),C(b);return}H(F,y,`Choisir ${y} joueur(s) ${B}(s) (-${g})`,O=>{O.forEach(K=>{const ee=(D[K._line]||[]).find(re=>re.cardId===K.cardId);ee&&(ee.boost=(ee.boost||0)-g,b.log.push({text:`🎯 -${g} sur ${ee.name}`,type:"info"}))}),b[w+"Team"]=D,C(b)})},GRAY_PLAYER:({count:g=1,roles:y=[],target:x="ai"},z,b)=>{const C=x==="home"?o:r,w=z[C+"Team"],D=x==="home"?"allié":"adverse",B=Object.entries(w).filter(([F])=>!y.length||y.includes(F)).flatMap(([F,O])=>O.filter(K=>!K.used).map(K=>({...K,_line:F})));if(!B.length){z.log.push({text:`❌ Aucun joueur ${D}`,type:"info"}),b(z);return}H(B,g,`Choisir ${g} joueur(s) ${D}(s) à exclure`,F=>{F.forEach(O=>{const K=(w[O._line]||[]).find(ee=>ee.cardId===O.cardId);K&&(K.used=!0,z.log.push({text:`❌ ${K.name} exclu !`,type:"info"}))}),z[C+"Team"]=w,b(z)})},REVIVE_PLAYER:({count:g=1,roles:y=[]},x,z)=>{const b=x[o+"Team"],C=Object.entries(b).filter(([w])=>!y.length||y.includes(w)).flatMap(([w,D])=>D.filter(B=>B.used).map(B=>({...B,_line:w})));if(!C.length){x.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),z(x);return}H(C,g,`Choisir ${g} joueur(s) à ressusciter`,w=>{w.forEach(D=>{const B=(b[D._line]||[]).find(F=>F.cardId===D.cardId);B&&(B.used=!1,x.log.push({text:`💫 ${B.name} ressuscité !`,type:"info"}))}),x[o+"Team"]=b,z(x)})},REMOVE_GOAL:({},g,y)=>{const x=r+"Score";g[x]>0?(g[x]--,g.log.push({text:"🚫 Dernier but annulé !",type:"info"})):g.log.push({text:"🚫 Aucun but à annuler",type:"info"}),y(g)},ADD_GOAL_DRAW:({},g,y)=>{g[o+"Score"]===g[r+"Score"]?(g[o+"Score"]++,g.log.push({text:"🎯 But bonus !",type:"info"})):g.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),y(g)},ADD_SUB:({value:g=1},y,x)=>{y.maxSubs=(y.maxSubs||3)+g,y.log.push({text:`🔄 +${g} remplacement(s)`,type:"info"}),x(y)},CUSTOM:({},g,y)=>y(g)};function H(g,y,x,z){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let C=[];function w(){var B,F;const D=g.map(O=>{const K={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[O._line]||"#555",ee=ae(O,O._line)+(O.boost||0),fe=C.find(Q=>Q.cardId===O.cardId)?"#FFD700":"rgba(255,255,255,0.25)",ye=O.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${O.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${fe};background:${K};overflow:hidden;cursor:pointer;${ye}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${O.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${ee}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${O._line}</div>
        </div>`}).join("");b.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${x}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${C.length}/${y}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${D}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${C.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${C.length}/${y})
          </button>
        </div>`,(B=b.querySelector("#pp-close"))==null||B.addEventListener("click",()=>b.remove()),b.querySelectorAll(".pp-item").forEach(O=>{O.addEventListener("click",()=>{const K=O.dataset.cid,ee=g.find(fe=>fe.cardId===K),re=C.findIndex(fe=>fe.cardId===K);ee&&(re>-1?C.splice(re,1):C.length<y&&C.push(ee),w())})}),(F=b.querySelector("#pp-confirm"))==null||F.addEventListener("click",()=>{b.remove(),z(C)})}w(),document.body.appendChild(b)}async function V(g,y){const z=(p["gcCardsFull_"+o]||[]).find(D=>D.id===g),b=(z==null?void 0:z._gcDef)||(p.gcDefs||[]).find(D=>{var B;return D.name===y||((B=D.name)==null?void 0:B.toLowerCase().trim())===(y==null?void 0:y.toLowerCase().trim())}),C=[...p["usedGc_"+o]||[],g];if(b!=null&&b.effect_type&&b.effect_type!=="CUSTOM"){const D=G[b.effect_type];if(D){const B={...p};D(b.effect_params||{},B,async F=>{F["usedGc_"+o]=C,await M(F)});return}}const w={...p};switch(y){case"Remplacement+":w.maxSubs=(w.maxSubs||3)+1,w.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const D=r+"Score";w[D]>0&&(w[D]--,w.log.push({text:"🚫 But annulé",type:"info"}));break}}w["usedGc_"+o]=C,await M(w)}function Y(){var Mt,zt,St,jt,Ct,Bt;if(p.phase==="reveal")return T();if(p.phase==="midfield")return U();if(p.phase==="finished")return N();const g=p[o+"Team"],y=p[r+"Team"],x=p[o+"Score"],z=p[r+"Score"],b=p[o+"Name"],C=p[r+"Name"],w=p.phase===o+"-attack",D=p.phase===o+"-defense",B=Array.isArray(p["selected_"+o])?p["selected_"+o]:[],F=B.map(P=>P.cardId),O=window.innerWidth>=700,K=p[o+"Subs"]||[],ee=p["usedSubIds_"+o]||[],re=K.filter(P=>!ee.includes(P.cardId)),fe=p["gcCardsFull_"+o]||[],ye=p["usedGc_"+o]||[],Q=fe.filter(P=>!ye.includes(P.id)),X=p.boostOwner===o&&!p.boostUsed,ne=!["GK","DEF","MIL","ATT"].some(P=>(y[P]||[]).some(J=>!J.used)),le=[...g.MIL||[],...g.ATT||[]].filter(P=>!P.used),he=w&&ne&&le.length===0?[...g.GK||[],...g.DEF||[]].filter(P=>!P.used).map(P=>P.cardId):[];function ge(P,J,de){var qt,Rt;const ie=P._gcDef,_e={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ie==null?void 0:ie.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Me={purple:"#b06ce0",light_blue:"#00d4ef"}[ie==null?void 0:ie.color]||"#b06ce0",qe=(ie==null?void 0:ie.name)||P.gc_type,Re=(ie==null?void 0:ie.effect)||((qt=ve[P.gc_type])==null?void 0:qt.desc)||"",Ft=ie!=null&&ie.image_url?`/manager-wars/icons/${ie.image_url}`:null,_i=((Rt=ve[P.gc_type])==null?void 0:Rt.icon)||"⚡",Dt=Math.round(de*.22),Gt=Math.round(de*.22),dt=de-Dt-Gt,ki=qe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${P.id}" data-gc-type="${P.gc_type}"
        style="box-sizing:border-box;width:${J}px;height:${de}px;border-radius:10px;border:2px solid ${Me};background:${_e};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${Dt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${ki}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${J-6}px">${qe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${dt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Ft?`<img src="${Ft}" style="max-width:${J-10}px;max-height:${dt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(dt*.55)}px">${_i}</span>`}
        </div>
        <div style="height:${Gt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Re.slice(0,38)}</span>
        </div>
      </div>`}function xe(P,J){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${P}px;height:${J}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(J*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(J*.2)}px">⚡</div>
        <div style="font-size:${Math.round(J*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const be=(P,J)=>J?xe(130,175):ge(P,130,175),Ye=(P,J)=>J?xe(68,95):ge(P,68,95),Ge=O?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ie=w?`<button id="pvp-action" style="${Ge};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${B.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:D?`<button id="pvp-action" style="${Ge};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${B.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${C}</div>`,At=w||D?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${B.length}/3 sélectionné(s)</div>`:"",bi=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${O?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${re.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':re.map(P=>`<div class="pvp-sub-btn" data-sub-id="${P.cardId}" style="cursor:pointer;flex-shrink:0">${$e(P,O?76:44,O?100:58)}</div>`).join("")}
    </div>`,It=w?"attack":D?"defense":"idle",vi=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${Ke(g,p[o+"Formation"],It,F,300,300,he)}
      </div>
    </div>`;function wi(P){if(P.type==="duel"){const J=(P.homeTotal||0)>=(P.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(P.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(P.homePlayers||[]).map(de=>je(de)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${J?20:14}px;font-weight:900;color:${J?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${P.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${J?14:20}px;font-weight:900;color:${J?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${P.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(P.aiPlayers||[]).map(de=>je(de)).join("")}
            </div>
          </div>
          ${P.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${P.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${P.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${P.type==="goal"?700:400};padding:3px 2px">${P.text||""}</div>`}const $i=(()=>{var J,de;if(D&&((J=p.pendingAttack)!=null&&J.players)){const ie=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${C} ATTAQUE — Défendez !</div>
          ${Se((ie.players||[]).map(_e=>({..._e,used:!1})),"#ff6b6b",ie.total)}
        </div>`}if(w&&((de=p.pendingAttack)!=null&&de.players)){const ie=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${Se((ie.players||[]).map(_e=>({..._e,used:!1})),"#00ff88",ie.total)}
        </div>`}const P=(p.log||[]).slice(-1)[0];return P?'<div style="padding:2px 4px">'+wi(P)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Lt=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${x} – ${z}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${C}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${$i}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(p.log||[]).length})
      </button>`;ke(e),e.style.overflow="hidden",O?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Lt}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${bi}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${vi}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ie}${At}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${Q.map(P=>be(P,!1)).join("")}
            ${X?be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Lt}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ke(g,p[o+"Formation"],It,F,300,300,he)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${Q.map(P=>Ye(P,!1)).join("")}
            ${X?Ye(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&re.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&re.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&re.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&re.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${re.length}</div>
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
          <div>${Ie}${At}</div>
        </div>
      </div>`;function Le(){const P=e.querySelector(".match-screen");if(!P)return;const J=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);P.style.height=J+"px",P.style.minHeight=J+"px",P.style.maxHeight=J+"px",P.style.overflow="hidden";const de=e.querySelector("#mobile-action-bar"),ie=e.querySelector("#mobile-play-area");de&&ie&&(ie.style.paddingBottom=de.offsetHeight+"px")}if(Le(),setTimeout(Le,120),setTimeout(Le,400),_||(_=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Le),window.visualViewport.addEventListener("scroll",Le)),window.addEventListener("resize",Le)),function(){const J=e.querySelector(".terrain-wrapper svg");J&&(J.removeAttribute("width"),J.removeAttribute("height"),J.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",J.setAttribute("viewBox","-26 -26 352 352"),J.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(P=>{P.addEventListener("click",()=>{if(!w&&!D)return;const J=P.dataset.cardId,de=P.dataset.role,ie=(g[de]||[]).find(Re=>Re.cardId===J);if(!ie||ie.used)return;const _e=he.includes(J);if(w&&!["MIL","ATT"].includes(de)&&!_e)return;Array.isArray(p["selected_"+o])||(p["selected_"+o]=[]);const Me=p["selected_"+o],qe=Me.findIndex(Re=>Re.cardId===J);qe>-1?Me.splice(qe,1):Me.length<3&&Me.push({...ie,_role:de}),Y()})}),e.querySelectorAll(".pvp-sub-btn").forEach(P=>{P.addEventListener("click",()=>{if(!w){c("Remplacement uniquement avant une attaque","warning");return}Z(P.dataset.subId)})}),(Mt=e.querySelector("#pvp-sub-open"))==null||Mt.addEventListener("click",()=>{if(!w){c("Remplacement uniquement avant une attaque","warning");return}if(!re.length){c("Aucun remplaçant disponible","warning");return}oe()}),e.querySelectorAll(".pvp-gc-mini").forEach(P=>{P.addEventListener("click",()=>W(P.dataset.gcId,P.dataset.gcType))}),(zt=e.querySelector("#pvp-boost-card"))==null||zt.addEventListener("click",()=>te()),(St=e.querySelector("#pvp-action"))==null||St.addEventListener("click",()=>{w?L():D&&k()}),(jt=e.querySelector("#pvp-quit"))==null||jt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&I()}),(Ct=e.querySelector("#pvp-view-opp"))==null||Ct.addEventListener("click",()=>pe()),(Bt=e.querySelector("#pvp-toggle-history"))==null||Bt.addEventListener("click",()=>ue()),E&&(clearInterval(E),E=null),(w||D)&&!h){let P=30,J=!1;const de=()=>document.getElementById("pvp-timer"),ie=()=>{de()&&(de().textContent=P+"s",de().style.color=J?"#ff4444":"#fff")};ie(),E=setInterval(()=>{P--,P<0?J?(clearInterval(E),E=null,I()):(J=!0,P=15,ie()):ie()},1e3)}}function T(){ke(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Ue(p[r+"Team"],p[r+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await M({phase:"midfield"})},5e3)}let v=!1;function U(){if(v)return;const g=p[o+"Team"].MIL||[],y=p[r+"Team"].MIL||[];function x(Q){return Q.reduce((X,ne)=>X+ae(ne,"MIL"),0)}function z(Q){let X=0;for(let ne=0;ne<Q.length-1;ne++){const le=Ae(Q[ne],Q[ne+1]);le==="#00ff88"?X+=2:le==="#FFD700"&&(X+=1)}return X}const b=x(g)+z(g),C=x(y)+z(y),w=b>=C;function D(Q,X,ne){return`<div id="duel-row-${ne}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${X}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${Q.map((le,he)=>{const ge=he<Q.length-1?Ae(le,Q[he+1]):null,xe=!ge||ge==="#ff3333"||ge==="#cc2222",be=ge==="#00ff88"?"+2":ge==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ne}" data-idx="${he}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${$e({...le,note:ae(le,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${he<Q.length-1?`<div class="duel-link duel-link-${ne}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${xe?"rgba(255,255,255,0.12)":ge};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${xe?"none":`0 0 8px ${ge}`}">
              ${be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ge}">${be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ne}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${x(Q)} + ${z(Q)} liens = <b style="color:#fff">${x(Q)+z(Q)}</b>
        </div>
      </div>`}ke(e),e.innerHTML=`
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
      ${D(g,p[o+"Name"],"me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${D(y,p[r+"Name"],"opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const B=(Q,X)=>e.querySelectorAll(Q).forEach((ne,le)=>{setTimeout(()=>{ne.style.opacity="1",ne.style.transform="translateY(0) scale(1)"},X+le*90)});B(".duel-card-me",150),B(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((Q,X)=>setTimeout(()=>{Q.style.opacity="1"},X*70)),900),setTimeout(()=>{const Q=e.querySelector("#pvp-vs");Q&&(Q.style.opacity="1",Q.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(X=>X.style.opacity="1")},1250);function F(Q,X,ne){const le=document.getElementById(Q);if(!le)return;const he=performance.now(),ge=xe=>{const be=Math.min(1,(xe-he)/ne);le.textContent=Math.round(X*(1-Math.pow(1-be,3))),be<1?requestAnimationFrame(ge):le.textContent=X};requestAnimationFrame(ge)}setTimeout(()=>{F("pvp-score-me",b,800),F("pvp-score-opp",C,800)},1500);const O=p.p1Team.MIL||[],K=p.p2Team.MIL||[],ee=x(O)+z(O),re=x(K)+z(K),fe=ee>=re?"p1":"p2";let ye=p.boostValue;ye==null&&(ye=pi(),p.boostValue=ye,p.boostOwner=fe,p.boostUsed=!1),v=!0,setTimeout(()=>{const Q=e.querySelector("#duel-row-"+(w?"me":"opp")),X=e.querySelector("#duel-row-"+(w?"opp":"me")),ne=document.getElementById("pvp-score-me"),le=document.getElementById("pvp-score-opp"),he=w?ne:le,ge=w?le:ne;he&&(he.style.fontSize="80px",he.style.color=w?"#FFD700":"#ff6b6b",he.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),ge&&(ge.style.opacity="0.25"),setTimeout(()=>{Q&&(Q.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",Q.style.zIndex="5"),setTimeout(()=>{const xe=document.getElementById("duel-shock");xe&&(xe.style.animation="shockwave .5s ease-out forwards"),X&&(X.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ge;const xe=document.getElementById("pvp-duel-finale");if(!xe)return;const be=p.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+ye+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ye=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;xe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+p[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+be+Ye,xe.style.transition="opacity .45s ease",xe.style.opacity="1",xe.style.pointerEvents="auto",(Ge=document.getElementById("pvp-start-match"))==null||Ge.addEventListener("click",async()=>{const Ie=fe;await M({phase:Ie+"-attack",attacker:Ie,round:1,boostValue:ye,boostUsed:!1,boostOwner:Ie})})},600)},700)},2800)}function R(g,y,x,z,b){const C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(O,K)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${K%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][K%8]}</div>`).join(""),D={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};C.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${w}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${z?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${y} – ${x}
      </div>
      ${g!=null&&g.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${g.map(O=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${D[O.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${O.portrait?`<img src="${O.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(O.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(C);let B=!1;const F=()=>{B||(B=!0,C.remove(),setTimeout(()=>b(),50))};C.addEventListener("click",F),setTimeout(F,3500)}function W(g,y){var ee,re,fe,ye;const z=(p["gcCardsFull_"+o]||[]).find(Q=>Q.id===g),b=z==null?void 0:z._gcDef,C={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",D=(b==null?void 0:b.name)||y,B=(b==null?void 0:b.effect)||((ee=ve[y])==null?void 0:ee.desc)||"Carte spéciale.",F=b!=null&&b.image_url?`/manager-wars/icons/${b.image_url}`:null,O=((re=ve[y])==null?void 0:re.icon)||"⚡",K=document.createElement("div");K.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",K.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${C};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${D.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${D}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${F?`<img src="${F}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${O}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${B}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(K),(fe=K.querySelector("#pvp-gc-back"))==null||fe.addEventListener("click",()=>K.remove()),(ye=K.querySelector("#pvp-gc-use"))==null||ye.addEventListener("click",()=>{K.remove(),V(g,y)})}function te(){var z;const g=p[o+"Team"],y=Object.entries(g).flatMap(([b,C])=>(C||[]).filter(w=>!w.used).map(w=>({...w,_line:b})));if(!y.length)return;const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",x.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${y.map(b=>{const C={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b._line]||"#555",w=ae(b,b._line)+(b.boost||0);return`<div class="bp-item" data-cid="${b.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${C};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${b.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(x),(z=x.querySelector("#bp-close"))==null||z.addEventListener("click",()=>x.remove()),x.querySelectorAll(".bp-item").forEach(b=>{b.addEventListener("click",async()=>{const C=b.dataset.cid,w=y.find(B=>B.cardId===C);if(!w)return;const D=(g[w._line]||[]).find(B=>B.cardId===C);D&&(D.boost=(D.boost||0)+p.boostValue),x.remove(),await M({[o+"Team"]:g,boostUsed:!0})})})}function oe(){var C;const g=p[o+"Subs"]||[],y=p["usedSubIds_"+o]||[],x=g.filter(w=>!y.includes(w.cardId));if(!x.length)return;if(x.length===1){Z(x[0].cardId);return}const z={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",b.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">Choisir le remplaçant entrant</div>
        <button id="ss-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${x.map(w=>{const D=z[w.job]||"#555",B=Math.max(w.note_g||0,w.note_d||0,w.note_m||0,w.note_a||0);return`<div class="ss-item" data-sub-id="${w.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${D};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${w.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${w.job||""}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(b),(C=b.querySelector("#ss-close"))==null||C.addEventListener("click",()=>b.remove()),b.querySelectorAll(".ss-item").forEach(w=>{w.addEventListener("click",()=>{b.remove(),Z(w.dataset.subId)})})}function Z(g){var D;const y=p[o+"Subs"]||[],x=p["usedSubIds_"+o]||[],z=y.find(B=>B.cardId===g);if(!z)return;const b=p[o+"Team"],C=Object.entries(b).flatMap(([B,F])=>(F||[]).filter(O=>!O.used&&O.job===z.job).map(O=>({...O,_line:B})));if(!C.length){c("Aucun joueur compatible à remplacer","error");return}const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",w.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">Remplacer par ${z.firstname} ${z.name}</div>
        <button id="sp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${C.map(B=>{const F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[B._line]||"#555",O=ae(B,B._line)+(B.boost||0);return`<div class="sp-item" data-cid="${B.cardId}" data-role="${B._line}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${F};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111">${B.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${O}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(w),(D=w.querySelector("#sp-close"))==null||D.addEventListener("click",()=>w.remove()),w.querySelectorAll(".sp-item").forEach(B=>{B.addEventListener("click",async()=>{const F=B.dataset.cid,O=B.dataset.role,K=(b[O]||[]).find(fe=>fe.cardId===F);if(!K)return;K.used=!0;const ee={...z,_line:O,position:K.position};(b[O]=b[O]||[]).push(ee);const re=[...x,g];w.remove(),await M({[o+"Team"]:b,["usedSubIds_"+o]:re})})})}function pe(){var y;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",g.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Ue(p[r+"Team"],p[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(g),(y=g.querySelector("#pvp-opp-close"))==null||y.addEventListener("click",()=>g.remove())}function ue(){var x;const g=p.log||[],y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",y.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${g.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...g].reverse().map(z=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${z.type==="goal"?"#FFD700":z.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${z.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(y),(x=y.querySelector("#pvp-hist-close"))==null||x.addEventListener("click",()=>y.remove())}async function L(){const g=p[o+"Team"],y=!["GK","DEF","MIL","ATT"].some(C=>(p[r+"Team"][C]||[]).some(w=>!w.used)),x=(p["selected_"+o]||[]).map(C=>{const w=(g[C._role]||[]).find(B=>B.cardId===C.cardId)||C,D=y&&["GK","DEF"].includes(C._role);return{...w,_line:C._role,...D?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!x.length)return;const z=bt(x,p.modifiers[o]||{});x.forEach(C=>{const w=(g[C._role]||[]).find(D=>D.cardId===C.cardId);w&&(w.used=!0)}),p["selected_"+o]=[],Y();const b=[...p.log||[]];if(y){const C=(p[o+"Score"]||0)+1,w=x.map(K=>({name:K.name,note:ae(K,K._line||"ATT"),portrait:me(K),job:K.job}));b.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:z.total,aiTotal:0});const D=(p.round||0)+1,B=o==="p1"?"p2":"p1",F={...p,[o+"Team"]:g,[o+"Score"]:C},O=q(F);R(w,C,p[r+"Score"]||0,!0,async()=>{await M({[o+"Team"]:g,[o+"Score"]:C,["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:O?"finished":B+"-attack",attacker:B,round:D,log:b}),O&&await j.from("matches").update({status:"finished"}).eq("id",i)});return}b.push({type:"duel",text:`⚔️ ${p[o+"Name"]} attaque (${z.total})`,players:x,total:z.total,side:o}),await M({[o+"Team"]:g,[r+"Team"]:p[r+"Team"],pendingAttack:{...z,players:x,side:o},["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},phase:r+"-defense",log:b})}async function k(){const g=p[o+"Team"],y=(p["selected_"+o]||[]).map(X=>({...(g[X._role]||[]).find(le=>le.cardId===X.cardId)||X,_line:X._role})),x=vt(y,p.modifiers[o]||{});y.forEach(X=>{const ne=(g[X._role]||[]).find(le=>le.cardId===X.cardId);ne&&(ne.used=!0)}),p["selected_"+o]=[],Y();const z=wt(p.pendingAttack.total,x.total,p.modifiers[o]||{}),b=p.pendingAttack.side,C=z==="attack"||(z==null?void 0:z.goal),w=b==="p1"?"p2":"p1",D=(p.round||0)+1,B=(p.pendingAttack.players||[]).map(X=>({name:X.name,note:ae(X,X._line||"ATT"),portrait:me(X),job:X.job})),F=[...p.log||[]];F.push({type:"duel",isGoal:C,homeScored:C&&b===o,text:C?`⚽ BUT de ${p[b+"Name"]} ! (${p.pendingAttack.total} vs ${x.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${x.total})`,homePlayers:B,aiPlayers:y.map(X=>({name:X.name,note:ae(X,X._line||"DEF"),portrait:me(X),job:X.job})),homeTotal:p.pendingAttack.total,aiTotal:x.total});const O=C?(p[b+"Score"]||0)+1:p[b+"Score"]||0,K={...p,[o+"Team"]:g,[b+"Score"]:O},ee=q(K),re=K[w+"Team"],ye=!["GK","DEF","MIL","ATT"].some(X=>(re[X]||[]).some(ne=>!ne.used))||ee?"finished":w+"-attack",Q=async()=>{await M({[o+"Team"]:g,[r+"Team"]:p[r+"Team"],[b+"Score"]:O,["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:ye,attacker:w,round:D,log:F}),(ye==="finished"||ee)&&await j.from("matches").update({status:"finished"}).eq("id",i)};if(C){const X=b===o,ne=X?O:p[o+"Score"]||0,le=X?p[r+"Score"]||0:O;R(B,ne,le,X,Q)}else await Q()}function q(g){const y=["MIL","ATT","GK","DEF"].some(z=>(g.p1Team[z]||[]).some(b=>!b.used)),x=["MIL","ATT","GK","DEF"].some(z=>(g.p2Team[z]||[]).some(b=>!b.used));return!y&&!x}function N(){var b;const g=p[o+"Score"],y=p[r+"Score"],x=g>y,z=g===y;ke(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${x?"🏆":z?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${x?"Victoire !":z?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${g} - ${y}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(b=document.getElementById("pvp-home"))==null||b.addEventListener("click",()=>{try{j.removeChannel($)}catch{}we(e),l("home")})}Y()}const jo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Co(e,t){const{state:i,toast:n}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await Et(e,t)}async function Et(e,t){const{state:i,toast:n}=t,{data:d}=await j.from("market_listings").select(`id, price, status, listed_at, seller_id,
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
      </div>`;return}const f=o==="mine"?[...u].sort((m,A)=>m.status!==A.status?m.status==="active"?-1:1:new Date(A.listed_at)-new Date(m.listed_at)):u;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${f.map(m=>{var S,$,M,I;const A=(S=m.card)==null?void 0:S.player;if(!A)return"";const p=A.job==="GK"?A.note_g:A.job==="DEF"?A.note_d:A.job==="MIL"?A.note_m:A.note_a,h=jo[A.rarity],E=(i.profile.credits||0)>=m.price,_=m.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${_?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${Do(A.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${h};flex-shrink:0">${p}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${A.firstname} ${A.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${A.country_code} · ${(($=A.clubs)==null?void 0:$.encoded_name)||"—"} · ${A.rarity} · ${A.job}</div>
            ${o==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((M=m.seller)==null?void 0:M.pseudo)||"—"}</div>`:_?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((I=m.buyer)==null?void 0:I.pseudo)||"—"} · ${m.sold_at?new Date(m.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(m.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${m.price.toLocaleString("fr")}</div>
            ${o==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${m.id}" ${E?"":"disabled"} style="margin-top:4px">${E?"Acheter":"Trop cher"}</button>`:_?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${m.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(m=>{m.addEventListener("click",()=>Bo(m.dataset.buy,u,e,t))}),r.querySelectorAll("[data-cancel]").forEach(m=>{m.addEventListener("click",()=>Fo(m.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const u=r===o;r.style.background=u?"var(--green)":"#fff",r.style.color=u?"#fff":"var(--gray-600)",r.style.borderColor=u?"var(--green)":"var(--gray-200)"}),c(o.dataset.tab)})})}async function Bo(e,t,i,n){var u;const{state:d,toast:s}=n,a=t.find(f=>f.id===e);if(!a)return;const l=a.price,c=d.profile.credits||0,o=(u=a.card)==null?void 0:u.player;if(c<l){s("Crédits insuffisants","error");return}if(!confirm(`Acheter ${o==null?void 0:o.firstname} ${o==null?void 0:o.surname_encoded} pour ${l.toLocaleString("fr")} crédits ?`))return;const r=document.querySelector(`[data-buy="${e}"]`);r&&(r.disabled=!0,r.textContent="⏳");try{const{data:f,error:m}=await j.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:d.profile.id});if(m)throw new Error(m.message);if(!(f!=null&&f.success))throw new Error((f==null?void 0:f.error)||"Achat impossible");d.profile.credits=c-l;const A=document.querySelector("[data-credits]")||document.querySelector(".credits-display");A&&(A.textContent=(c-l).toLocaleString("fr")+" cr."),s(`✅ ${o==null?void 0:o.surname_encoded} ajouté à ta collection !`,"success"),Et(i,n)}catch(f){s("❌ "+f.message,"error"),r&&(r.disabled=!1,r.textContent="Acheter")}}async function Fo(e,t,i){const{toast:n}=i,{data:d}=await j.from("market_listings").select("card_id").eq("id",e).single();await j.from("market_listings").update({status:"cancelled"}).eq("id",e),d&&await j.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id),n("Annonce retirée","success"),Et(t,i)}function Do(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function Go(e,{state:t,navigate:i,toast:n}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await j.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function qo(e,{state:t,navigate:i,toast:n}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await j.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(r=>r.status==="finished"),c=(s||[]).filter(r=>r.status==="in_progress");function o(r){const u=r.home_id===d.id;u?r.home_score:r.away_score,u?r.away_score:r.home_score;const f=r.winner_id===d.id,m=r.home_score===r.away_score&&r.status==="finished",A=r.status!=="finished"?"…":m?"N":f?"V":"D",p=r.status!=="finished"||m?"#888":f?"#1A6B3C":"#c0392b";let h=a[r.mode]||r.mode;r.away_id===null&&!h.startsWith("IA")&&(h="IA");const _=r.home_id===d.id?r.away:r.home;let S;r.away_id===null?S=h:_?S=`${_.club_name||_.pseudo} (${_.pseudo})`:S="Adversaire";let $="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&($=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const M=new Date(r.created_at),I=M.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+M.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),G=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${S}${$}</div>
        <div style="font-size:11px;color:var(--gray-600)">${h} · ${I}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${G}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${A}</span>
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
  </div>`}Ei(Ai);const se={user:null,profile:null,page:"home",params:{}};function Qe(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function Ro(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function xt(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ze(){if(!se.user)return;const{data:e}=await j.from("users").select("*").eq("id",se.user.id).single();e&&(se.profile=e)}const Tt="mw_theme";function at(){return localStorage.getItem(Tt)||"light"}function No(e){var t;localStorage.setItem(Tt,e),yt(e),(t=se.profile)!=null&&t.id&&j.from("users").update({theme:e}).eq("id",se.profile.id).then(()=>{})}function yt(e){document.documentElement.setAttribute("data-theme",e)}function et(e,t={}){se.page=e,se.params=t,yi()}async function yi(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(n=>{n.classList.toggle("active",n.dataset.page===se.page)});const t=document.getElementById("nav-credits");t&&se.profile&&(t.textContent=`💰 ${(se.profile.credits||0).toLocaleString("fr")}`);const i={state:se,navigate:et,toast:Qe,openModal:Ro,closeModal:xt,refreshProfile:Ze};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',se.page){case"home":await Pt(e,i);break;case"collection":await Bi(e,i);break;case"decks":await pt(e,i);break;case"boosters":await Ji(e,i);break;case"match":{(se.params&&se.params.matchMode||"vs_ai_easy")==="random"?await Mo(e,i):await go(e,i);break}case"market":await Co(e,i);break;case"rankings":await Go(e,i);break;case"matches":await qo(e,i);break;default:await Pt(e,i)}}function Oo(){const e=document.getElementById("app"),t=se.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",d=>{d.preventDefault(),et(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>et("home")),document.getElementById("nav-credits").addEventListener("click",()=>et("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const d=at()==="dark"?"light":"dark";No(d),Zt(d)}),Zt(at())}function Zt(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Po(){yt(at()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&xt()}),document.getElementById("modal-close").addEventListener("click",xt);const{data:{session:e}}=await j.auth.getSession();if(!e){ti(),Nt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Qe});return}se.user=e.user,await Ze(),ti();try{const{data:t}=await j.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(n=>{i[n.formation]=n.links}),Ti(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!se.profile){Ii(document.getElementById("app"),{state:se,navigate:async()=>{await Ze(),ei()},toast:Qe,refreshProfile:Ze});return}se.profile.theme&&se.profile.theme!==at()&&(localStorage.setItem(Tt,se.profile.theme),yt(se.profile.theme)),ei(),j.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(se.user=null,se.profile=null,document.getElementById("app").innerHTML="",Nt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Qe}))})}function Ho(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function lt(){const e=document.getElementById("app");e&&(e.style.height=Ho()+"px")}window.addEventListener("resize",lt);window.addEventListener("orientationchange",()=>setTimeout(lt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",lt);function ei(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",lt(),Oo(),yi()}function ti(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function hi(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}Po().catch(e=>{console.error("Échec du démarrage:",e),hi()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&hi("Le serveur met trop de temps à répondre.")},12e3);
