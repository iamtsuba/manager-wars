import{s as k,F as et,b as Me,c as Ft,l as ge,d as ai}from"./formation-links-CDBKB_z4.js";function _t(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(s=>{s.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),s.classList.add("active"),document.getElementById("tab-login").style.display=s.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=s.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const s=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,o=document.getElementById("login-error");if(o.textContent="",!s||!c){o.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:d}=await k.auth.signInWithPassword({email:s,password:c});if(a.textContent="Se connecter",a.disabled=!1,d){o.textContent=d.message.includes("Invalid")?"Email ou mot de passe incorrect.":d.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",s=>{s.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const s=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,o=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!s||!c||!o){a.textContent="Remplissez tous les champs.";return}if(c.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==o){a.textContent="Les mots de passe ne correspondent pas.";return}const d=document.getElementById("reg-btn");d.textContent="Création…",d.disabled=!0;const{error:l}=await k.auth.signUp({email:s,password:c});if(d.textContent="Créer mon compte",d.disabled=!1,l){a.textContent=l.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=s})}function si(e,{state:t,navigate:i,toast:s,refreshProfile:c}){let o="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function d(){var $;const n=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),u=(($=document.getElementById("setup-club"))==null?void 0:$.value)||"MW",m=u.trim().split(" ").filter(Boolean),f=m.length>=2?(m[0][0]+m[1][0]).toUpperCase():u.slice(0,2).toUpperCase();n&&(n.style.background=a,n.style.borderColor=o),r&&(r.textContent=f,r.style.color=o)}document.getElementById("color1").addEventListener("input",n=>{o=n.target.value,document.getElementById("swatch1").style.background=o,d()}),document.getElementById("color2").addEventListener("input",n=>{a=n.target.value,document.getElementById("swatch2").style.background=a,d()});function l(n){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${n}`).classList.add("active"),document.getElementById("step-num").textContent=n,document.getElementById("progress-fill").style.width=`${Math.round(n/3*100)}%`,n===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",n.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await k.from("users").select("id").eq("pseudo",n).maybeSingle();if(u){r.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const n=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",n.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await k.from("users").select("id").eq("club_name",n).maybeSingle();if(u){r.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),m=document.getElementById("step3-finish");u.textContent="",m.disabled=!0,m.textContent="Création en cours…";try{const{error:f}=await k.from("users").insert({id:t.user.id,pseudo:n,club_name:r,club_color1:o,club_color2:a,credits:1e4});if(f)throw f;await di(t.user.id),await c(),s(`Bienvenue ${n} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(f){u.textContent=f.message,m.disabled=!1,m.textContent="🚀 Créer mon profil !"}})}async function di(e){const{data:t}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,s=i.filter(l=>l.job==="GK"),c=i.filter(l=>l.job!=="GK"),o=[];for(let l=0;l<5;l++){let n=[];if(l===0&&s.length>0){const r=s[Math.floor(Math.random()*s.length)];n.push(r);const u=$t([...c]).slice(0,3);n.push(...u)}else n=$t([...i]).slice(0,4);n.forEach(r=>{o.push({owner_id:e,player_id:r.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(l=>{o.push({owner_id:e,card_type:"game_changer",gc_type:l})});const d=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];o.push({owner_id:e,card_type:"formation",formation:d[Math.floor(Math.random()*d.length)]}),o.length>0&&await k.from("cards").insert(o),await k.from("users").update({first_booster_opened:!0}).eq("id",e)}function $t(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}const li="2026.06.21-2350";async function kt(e,{state:t,navigate:i,toast:s}){var o,a;const c=t.profile;c&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${li}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(d=>{d.addEventListener("click",l=>{l.preventDefault(),i(d.dataset.nav)})}),(o=document.getElementById("nav-rankings"))==null||o.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(d=>{d.addEventListener("click",()=>{d.classList.add("tapped"),setTimeout(()=>d.classList.remove("tapped"),200);const l=d.dataset.action;if(l==="match-ai"){ci(i);return}if(l==="match-random"){i("match",{matchMode:"random"});return}s("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await k.auth.signOut(),window.location.reload()}))}function ci(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const s=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",s),i.addEventListener("click",c=>{c.target===i&&s()}),i.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{s(),e("match",{matchMode:c.dataset.mode})})})}const de={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ie(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Et=["ATT","MIL","DEF","GK"];function Dt(e){let t=0;const i=e.length;for(let s=0;s<i;s++)for(let c=s+1;c<i;c++){const o=e[s],a=e[c];if(!o||!a)continue;const d=o._col!==void 0&&a._col!==void 0&&o._col===a._col,l=o._col!==void 0&&a._col!==void 0&&Math.abs(o._col-a._col)===1,n=Et.indexOf(o._line),r=Et.indexOf(a._line),u=Math.abs(n-r)===1;(o._line===a._line&&l||d&&u)&&(o.country_code&&a.country_code&&o.country_code===a.country_code&&t++,o.club_id&&a.club_id&&o.club_id===a.club_id&&t++)}return t}function tt(e,t={}){const i=e.reduce((o,a)=>{const d=a._line||a.job;return o+(Number(d==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),s=Dt(e);let c=i+s;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:i,links:s,total:Math.max(0,c)}}function it(e,t={}){const i=e.reduce((o,a)=>{const d=a._line||a.job;let l=0;return d==="GK"?l=Number(a.note_g)||0:d==="MIL"?l=Number(a.note_m)||0:l=Number(a.note_d)||0,o+l+(a.boost||0)},0),s=Dt(e);let c=i+s;return t.stolenNote&&(c-=t.stolenNote),{base:i,links:s,total:Math.max(0,c)}}function ot(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function qt(e,t,i="easy"){const s=e.filter(a=>!a.used);if(!s.length)return[];const c=[...s].sort((a,d)=>{const l=t==="attack"?ie(a,"ATT"):a._line==="GK"?ie(a,"GK"):ie(a,"DEF");return(t==="attack"?ie(d,"ATT"):d._line==="GK"?ie(d,"GK"):ie(d,"DEF"))-l});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(o,c.length,3))}function pi(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Gt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},qe={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},je=["GK","DEF","MIL","ATT"],ui=["Tous","GK","DEF","MIL","ATT"],fi={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},nt={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Rt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Ae(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Ue(e,t=""){var u,m;const i=e.player;if(!i)return"";const s=i.job||"ATT",c=qe[s],o=Gt[i.rarity]||"#ccc",a=Ae(i,s),d=i.job2?Ae(i,i.job2):null,l=i.job2?qe[i.job2]:null,n=Rt(i),r=nt[i.country_code]||i.country_code||"";return`
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
        ${(u=i.clubs)!=null&&u.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((m=i.clubs)==null?void 0:m.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function At(e){const t=e.job||"ATT",i=Ae(e,t),s=nt[e.country_code]||e.country_code||"";return`
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
  </div>`}async function gi(e,t){const{state:i,navigate:s,toast:c,openModal:o,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await k.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await k.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),n=(d||[]).filter(_=>_.card_type==="player"&&_.player),r=(d||[]).filter(_=>_.card_type==="game_changer"),u=(d||[]).filter(_=>_.card_type==="formation"),{data:m}=await k.from("gc_definitions").select("name,gc_type,color,effect,image_url"),f={};(m||[]).forEach(_=>{f[_.name]=_});const $=Object.keys(et),p=Object.keys(de),y={};n.forEach(_=>{const b=_.player.id;y[b]=(y[b]||0)+1}),new Set(Object.keys(y).map(_=>String(_)));const E=new Set(u.map(_=>_.formation)),h=new Set(r.map(_=>_.gc_type));let g="player",v="Tous",L="",I=!1;function x(){return[...n].sort((_,b)=>{const S=je.indexOf(_.player.job),A=je.indexOf(b.player.job);return S!==A?S-A:(_.player.surname_encoded||"").localeCompare(b.player.surname_encoded||"")})}function T(){return[...l||[]].sort((_,b)=>{const S=je.indexOf(_.job),A=je.indexOf(b.job);return S!==A?S-A:(_.surname_encoded||"").localeCompare(b.surname_encoded||"")})}function q(){return x().filter(_=>{const b=_.player,S=v==="Tous"||b.job===v,A=!L||`${b.firstname} ${b.surname_encoded}`.toLowerCase().includes(L);return S&&A})}function N(){return T().filter(_=>{const b=v==="Tous"||_.job===v,S=!L||`${_.firstname} ${_.surname_encoded}`.toLowerCase().includes(L);return b&&S})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${g==="player"?"var(--green)":"transparent"};
        color:${g==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${n.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${g==="formation"?"var(--green)":"transparent"};
        color:${g==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${g==="gc"?"var(--green)":"transparent"};
        color:${g==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function P(){const _=document.getElementById("col-filters");_&&(g==="player"?(_.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${L}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${ui.map(b=>`
            <button class="filter-btn" data-job="${b}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${b===v?"var(--green)":"var(--gray-200)"};
                background:${b===v?"var(--green)":"#fff"};
                color:${b===v?"#fff":"var(--gray-600)"}">
              ${b}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${I?"var(--yellow)":"var(--gray-200)"};
              background:${I?"var(--yellow)":"#fff"};
              color:${I?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${I?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",b=>{L=b.target.value.toLowerCase(),H()}),e.querySelectorAll(".filter-btn").forEach(b=>{b.addEventListener("click",()=>{v=b.dataset.job,P(),H()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{I=!I,P(),H()})):(_.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${I?"var(--yellow)":"var(--gray-200)"};
              background:${I?"var(--yellow)":"#fff"};
              color:${I?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${I?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{I=!I,P(),H()})))}function H(){const _=document.getElementById("col-grid");_&&(g==="player"?B(_):g==="formation"?R(_):j(_))}function W(_,b,S,A,w){w=w||"#7a28b8";const D=document.getElementById("col-grid"),M=document.getElementById("col-big");if(!D||!M)return;var G=0;function F(){M.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+b(_[G])+"</div>";var K=M.querySelector("[data-card-id],[data-form-id],[data-gc-id]");K&&K.addEventListener("click",function(){A(_[G])}),requestAnimationFrame(function(){var U=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!U||!M)){var X=M.clientHeight-8,te=M.clientWidth-24,re=U.offsetHeight,ae=U.offsetWidth;if(re>0&&ae>0&&X>40){var se=Math.min(X/re,te/ae,1);U.style.transform="scale("+se.toFixed(3)+")",U.style.transformOrigin="top center"}}}),D.innerHTML=_.map(function(U,X){return'<div class="col-mini-item" data-idx="'+X+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(X===G?w:"transparent")+';transition:border-color .15s;overflow:hidden">'+S(U,X===G)+"</div>"}).join(""),D.querySelectorAll(".col-mini-item").forEach(function(U){U.addEventListener("click",function(){G=Number(U.dataset.idx),F(),U.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}F()}function V(_){var b=.54,S=Math.round(140*b),A=Math.round(310*b),w;if(!_||_._fake){var D=_?_.player:null;if(!D)return"";w=At(D)}else w=Ue(_,"");return'<div style="width:'+S+"px;height:"+A+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+b+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+w+"</div></div>"}function ee(_,b,S){b=b||100,S=S||140;var A=Me[_]||{},w={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},D=Math.max(3,Math.round(b*.06)),M=Object.entries(A).map(function(F){var K=F[0],U=F[1],X=K.replace(/\d+$/,""),te=w[X]||"#888",re=Math.round(U.x*b),ae=Math.round(U.y*S);return'<circle cx="'+re+'" cy="'+ae+'" r="'+D+'" fill="'+te+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),G=Math.max(1,Math.round(b/50));return'<svg viewBox="0 0 '+b+" "+S+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+b+'" height="'+S+'" fill="#1A6B3C"/><rect x="'+Math.round(b*.2)+'" y="'+Math.round(S*.02)+'" width="'+Math.round(b*.6)+'" height="'+Math.round(S*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+G+'"/><line x1="0" y1="'+Math.round(S*.5)+'" x2="'+b+'" y2="'+Math.round(S*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+G+'"/><ellipse cx="'+Math.round(b*.5)+'" cy="'+Math.round(S*.5)+'" rx="'+Math.round(b*.18)+'" ry="'+Math.round(S*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+G+'"/><rect x="'+Math.round(b*.2)+'" y="'+Math.round(S*.82)+'" width="'+Math.round(b*.6)+'" height="'+Math.round(S*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+G+'"/>'+M+"</svg>"}function C(_,b,S){var A=S>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+S+"</div>":"",w=b?'data-form-id="'+b.id+'"':"",D=_.length>7?14:_.length>5?16:19,M=!!b;return"<div "+w+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(M?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(M?"":"filter:grayscale(1);opacity:0.5")+'">'+A+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(M?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+D+"px;font-weight:900;color:"+(M?"#1A6B3C":"#aaa")+';line-height:1">'+_+'</div></div><div style="flex:1;overflow:hidden;background:'+(M?"#1A6B3C":"#ccc")+'">'+ee(_,140,220)+"</div></div>"}function z(_,b){var S=.54,A=Math.round(140*S),w=Math.round(305*S),D=Math.round(w*.22),M=w-D,G=_.length>7?5:7,F=ee(_,A,M),K=b?"1.5px solid #2a7a40":"1px solid #ddd",U=b?"":"filter:grayscale(1);opacity:0.45;",X=b?"#1A6B3C":"#bbb",te="#fff";return'<div style="width:'+A+"px;height:"+w+"px;border-radius:6px;border:"+K+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+U+'"><div style="height:'+D+"px;background:"+X+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+G+"px;font-weight:900;color:"+te+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(A-4)+'px">'+_+'</span></div><div style="height:'+M+'px;overflow:hidden;flex-shrink:0">'+F+"</div></div>"}function B(_){if(I){const b=N();if(!b.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const S=b.map(A=>n.find(w=>w.player.id===A.id)||{_fake:!0,player:A,id:"fake-"+A.id});W(S,A=>A._fake?At(A.player):Ue(A,""),A=>A._fake?V({player:A.player,id:"x",_fake:!0}):V(A),A=>{A._fake||It(A,n,y,t)},"#1A6B3C")}else{const b=q();if(!b.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const S={},A=[];b.forEach(w=>{S[w.player.id]||(S[w.player.id]=!0,A.push(w))}),W(A,w=>{const D=y[w.player.id]||1,M=D>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${D}</div>`:"",F=n.filter(K=>K.player.id===w.player.id&&K.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Ue(w,M+F)},w=>V(w),w=>It(w,n,y,t),"#1A6B3C")}}function R(_){const b=I?$:[...E];if(!b.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const S=b.map(A=>({formation:A,card:u.find(w=>w.formation===A)||null,owned:E.has(A)}));W(S,({formation:A,card:w,owned:D})=>C(A,D?w:null,D?u.filter(M=>M.formation===A).length:0),({formation:A,owned:w})=>z(A,w),({card:A,owned:w})=>{w&&A&&xi(A,u,t,o)},"#1A6B3C")}function j(_){const b=Object.keys(f),S=I?b.length?b:p:[...h];if(!S.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const A=S.map(w=>({type:w,gc:de[w]||{icon:"⚡",desc:""},def:f[w]||null,owned:h.has(w),card:r.find(D=>D.gc_type===w)||null}));W(A,({type:w,gc:D,def:M,owned:G,card:F})=>{const K=G?r.filter(ze=>ze.gc_type===w).length:0,U=K>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${K}</div>`:"",X=(M==null?void 0:M.gc_type)==="ultra_game_changer",te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},re={purple:"#b06ce0",light_blue:"#00d4ef"},ae=te[M==null?void 0:M.color]||te.purple,se=re[M==null?void 0:M.color]||re.purple,me=(M==null?void 0:M.effect)||D.desc||"",xe=M!=null&&M.image_url?`/manager-wars/icons/${M.image_url}`:null;return G&&F?`<div data-gc-id="${F.id}" data-gc-type="${w}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${se};background:${ae};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${se}66;cursor:pointer">
          ${U}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${w.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${X?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${xe?`<img src="${xe}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${D.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${me.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${w}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${D.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:w,gc:D,def:M,owned:G})=>G?(()=>{const F=Math.round(75.60000000000001),K=Math.round(310*.54),U=Math.round(K*.65),X=Math.round(K*.18),te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},re={purple:"#9b59b6",light_blue:"#00bcd4"},ae=te[M==null?void 0:M.color]||te.purple,se=re[M==null?void 0:M.color]||re.purple,me=M!=null&&M.image_url?`/manager-wars/icons/${M.image_url}`:null;return`<div style="width:${F}px;height:${K}px;border-radius:8px;background:${ae};border:1px solid ${se};display:flex;flex-direction:column;overflow:hidden"><div style="height:${X}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${F-6}px">${w}</span></div><div style="height:${U}px;display:flex;align-items:center;justify-content:center">${me?`<img src="${me}" style="max-width:${F-8}px;max-height:${U-4}px;object-fit:contain">`:`<span style="font-size:24px">${D.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((M==null?void 0:M.effect)||D.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const F=Math.round(75.60000000000001),K=Math.round(310*.54);return`<div style="width:${F}px;height:${K}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${D.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${w}</span></div>`})(),({type:w,owned:D,def:M})=>{D&&mi(w,M,o)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(_=>{_.addEventListener("click",()=>{g=_.dataset.tab,v="Tous",L="",I=!1,e.querySelectorAll(".col-tab-btn").forEach(b=>{const S=b.dataset.tab===g;b.style.borderBottomColor=S?"var(--green)":"transparent",b.style.color=S?"var(--green)":"var(--gray-600)"}),P(),H()})}),P(),H()}function mi(e,t,i){const s=de[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},d=o[t==null?void 0:t.color]||o.purple,l=a[t==null?void 0:t.color]||a.purple,n=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||s.desc,u=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${d};border-radius:16px;border:2px solid ${l};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${n}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${s.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${r}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const $e=1e3;function xi(e,t,i,s){var p,y,E;const{state:c,toast:o,closeModal:a,navigate:d,refreshProfile:l}=i,n=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const h=Me[n]||{},g=et[n]||[],v=290,L=360,I=20;function x(q){const N=h[q];return N?{x:N.x*v,y:N.y*L}:null}let T=`<svg width="${v}" height="${L}" viewBox="0 0 ${v} ${L}" xmlns="http://www.w3.org/2000/svg">`;for(const[q,N]of g){const P=x(q),H=x(N);!P||!H||(T+=`<line x1="${P.x}" y1="${P.y}" x2="${H.x}" y2="${H.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const q of Object.keys(h)){const N=x(q);if(!N)continue;const P=q.replace(/\d+/,""),H=r[P]||"#555";T+=`<circle cx="${N.x}" cy="${N.y}" r="${I}" fill="${H}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,T+=`<text x="${N.x}" y="${N.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${P}</text>`}return T+="</svg>",T}const m=t.filter(h=>h.formation===n),f=m.length,$=!e.is_for_sale;s(`Formation ${n}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${$e.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${f-1} carte${f-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${f<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${$?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${$e}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(p=document.getElementById("direct-sell-form-btn"))==null||p.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${n} pour ${$e.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const h=m.find(v=>!v.is_for_sale)||m[0];if(!h){o("Aucune carte à vendre","error");return}const{error:g}=await k.from("cards").delete().eq("id",h.id);if(g){o(g.message,"error");return}await k.from("users").update({credits:(c.profile.credits||0)+$e}).eq("id",c.profile.id),await l(),o(`+${$e.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),d("collection")}),(y=document.getElementById("market-sell-form-btn"))==null||y.addEventListener("click",async()=>{const h=parseInt(document.getElementById("sell-price-form").value);if(!h||h<1){o("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:h}).eq("id",e.id),await k.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:h}),o("Carte mise en vente sur le marché !","success"),a(),d("collection")}),(E=document.getElementById("cancel-sell-form-btn"))==null||E.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),a(),d("collection")})}async function It(e,t,i,s){var T,q,N,P,H,W;const{state:c,toast:o,openModal:a,closeModal:d,navigate:l,refreshProfile:n}=s,r=e.player,u=t.filter(V=>V.player.id===r.id),m=u.length,f=fi[r.rarity]||1e3,$=r.rarity!=="legende",p=Rt(r),y=Ae(r,r.job),E=r.job2?Ae(r,r.job2):null,h=qe[r.job]||"#1A6B3C",g=r.job2?qe[r.job2]:null,v=Gt[r.rarity]||"#ccc",L=nt[r.country_code]||r.country_code||"",{data:I}=await k.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",r.id).order("transferred_at",{ascending:!0}),x=I&&I.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${I.map(V=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${V.club_name} <span style="color:var(--gray-600)">(${V.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${V.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${V.source==="booster"?"Booster":V.price?V.price.toLocaleString("fr")+"€":"—"}</div>
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
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${h}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${h}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${y}</text>
            </svg>
            ${E!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${g}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${E}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${L}</div>
            ${(T=r.clubs)!=null&&T.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((q=r.clubs)==null?void 0:q.encoded_name)||"").slice(0,6)}</div>`}
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
          <div style="font-weight:700;font-size:18px">×${m}</div>
        </div>
      </div>
    </div>
    ${x}

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe selon rareté</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${f.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${m-1} carte${m-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${m<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${$&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(N=document.getElementById("close-detail"))==null||N.addEventListener("click",d),(P=document.getElementById("direct-sell-btn"))==null||P.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${r.surname_encoded} pour ${f.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const V=u.find(C=>!C.is_for_sale)||u[0];if(!V){o("Aucune carte à vendre","error");return}const{error:ee}=await k.from("cards").delete().eq("id",V.id);if(ee){o(ee.message,"error");return}await k.from("users").update({credits:(c.profile.credits||0)+f}).eq("id",c.profile.id),await n(),o(`+${f.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),l("collection")}),(H=document.getElementById("market-sell-btn"))==null||H.addEventListener("click",async()=>{const V=parseInt(document.getElementById("sell-price").value);if(!V||V<1){o("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:V}).eq("id",e.id),await k.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:V}),o("Carte mise en vente sur le marché !","success"),d(),l("collection")}),(W=document.getElementById("cancel-sell-btn"))==null||W.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),d(),l("collection")})}const Ge={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ue={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Oe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Nt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Pt(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function yi(e,t=44,i=58){var f;const s=e?Oe(e):null,c=e?Pt(e):null,o=Nt(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",d=ue[a]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",n=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(i*.19),u=Math.round(i*.25),m=i-r-u;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${l};background:${d};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${s?`<img src="${s}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${o?`<img src="${o}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">🌍</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${n}</span>
      ${c?`<img src="${c}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:(f=e==null?void 0:e.clubs)!=null&&f.encoded_name?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Ve(e,t){const{state:i,navigate:s,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await k.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!a)return;const{data:d,error:l}=await k.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(l){c(l.message,"error");return}c("Deck créé !","success"),Tt(d.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Tt(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const d=prompt("Nouveau nom :",a.dataset.name);if(!d||d===a.dataset.name)return;const{error:l}=await k.from("decks").update({name:d}).eq("id",a.dataset.rename);if(l){c(l.message,"error");return}c("Deck renommé !","success"),Ve(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await k.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:d}=await k.from("decks").delete().eq("id",a.dataset.delete);if(d){c(d.message,"error");return}c("Deck supprimé.","success"),Ve(e,t)})})}async function Tt(e,t,i){const{state:s,toast:c}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await k.from("decks").select("*").eq("id",e).single(),{data:a}=await k.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",s.profile.id),d=(a||[]).filter(f=>f.card_type==="player"&&f.player),l=(a||[]).filter(f=>f.card_type==="formation"),n=l.map(f=>f.formation).filter(Boolean),{data:r}=await k.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let u=o.formation||"4-4-2";n.length>0&&!n.includes(u)&&(u=n[0]);const m={deckId:e,name:o.name,formation:u,formationCardId:o.formation_card_id,slots:{},subs:[],playerCards:d,formationCards:l,availableFormations:n};(r||[]).forEach(f=>{f.is_starter?m.slots[f.position]=f.card_id:m.subs.includes(f.card_id)||m.subs.push(f.card_id)}),be(t,m,i)}function be(e,t,i){var l;const{navigate:s}=i;Ge[t.formation];const c=Lt(t.formation),o=c.filter(n=>t.slots[n]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(Ge),d=t.subs.map(n=>t.playerCards.find(r=>r.id===n)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
            ${yi(r,44,58)}
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
  </div>`,hi(e,t,c,i),document.getElementById("builder-back").addEventListener("click",()=>s("decks")),document.getElementById("formation-select").addEventListener("change",n=>{t.formation=n.target.value;const r=Lt(t.formation),u={};r.forEach(m=>{t.slots[m]&&(u[m]=t.slots[m])}),t.slots=u,be(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>wi(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(n=>{n.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==n.dataset.removeSub),be(e,t,i)})}),(l=document.getElementById("add-sub-btn"))==null||l.addEventListener("click",()=>{bi(t,e,i)})}function hi(e,t,i,s){const c=e.querySelector("#deck-field");if(!c)return;const o=Me[t.formation]||{},a=Ft(t.formation)||[],d={};for(const E of i){const h=t.slots[E],g=h?t.playerCards.find(v=>v.id===h):null;d[E]=g?g.player:null}const l=300,n=300,r=48,u=64,m=13,f=16,$=38;function p(E){const h=o[E];return h?{x:h.x*l,y:h.y*n}:null}let y="";for(const[E,h]of a){const g=p(E),v=p(h);if(!g||!v)continue;const L=d[E]?{...d[E],club_id:d[E].club_id,country_code:d[E].country_code,rarity:d[E].rarity}:null,I=d[h]?{...d[h],club_id:d[h].club_id,country_code:d[h].country_code,rarity:d[h].rarity}:null,x=ge(L,I);x==="#ff3333"||x==="#cc2222"?y+=`<line x1="${g.x.toFixed(1)}" y1="${g.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${x}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(y+=`<line x1="${g.x.toFixed(1)}" y1="${g.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${x}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,y+=`<line x1="${g.x.toFixed(1)}" y1="${g.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${x}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const E of i){const h=p(E);if(!h)continue;const g=d[E],v=E.replace(/\d+/,""),L=ue[v]||"#555",I=(h.x-r/2).toFixed(1),x=(h.y-u/2).toFixed(1),T={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[g==null?void 0:g.rarity]||"#aaa";if(g){const q=Oe(g),N=Pt(g),P=Nt(g.country_code),H=Number(v==="GK"?g.note_g:v==="DEF"?g.note_d:v==="MIL"?g.note_m:g.note_a)||0,W=u-m-f;y+=`<defs><clipPath id="dcp-${E}"><rect x="${I}" y="${(h.y-u/2+m).toFixed(1)}" width="${r}" height="${W}"/></clipPath></defs>`,y+=`<rect x="${I}" y="${x}" width="${r}" height="${u}" rx="5" fill="${L}"/>`,q&&(y+=`<image href="${q}" x="${I}" y="${(h.y-u/2+m).toFixed(1)}" width="${r}" height="${W}" clip-path="url(#dcp-${E})" preserveAspectRatio="xMidYMin slice"/>`),y+=`<rect x="${I}" y="${x}" width="${r}" height="${m}" fill="rgba(255,255,255,0.93)"/>`,y+=`<text x="${h.x.toFixed(1)}" y="${(h.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(g.surname_encoded||"").slice(0,9)}</text>`;const V=(h.y+u/2-f).toFixed(1);y+=`<rect x="${I}" y="${V}" width="${r}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,P&&(y+=`<image href="${P}" x="${(h.x-21).toFixed(1)}" y="${(h.y+u/2-f+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),y+=`<text x="${h.x.toFixed(1)}" y="${(h.y+u/2-f/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${H}</text>`,N&&(y+=`<image href="${N}" x="${(h.x+r/2-14).toFixed(1)}" y="${(h.y+u/2-f+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),y+=`<rect x="${I}" y="${x}" width="${r}" height="${u}" rx="5" fill="none" stroke="${T}" stroke-width="2"/>`}else y+=`<rect x="${I}" y="${x}" width="${r}" height="${u}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,y+=`<text x="${h.x.toFixed(1)}" y="${h.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,y+=`<text x="${h.x.toFixed(1)}" y="${(h.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${v}</text>`;y+=`<rect x="${I}" y="${x}" width="${r}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${E}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-$} ${-$} ${l+$*2} ${n+$*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${y}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(E=>{E.addEventListener("click",()=>vi(E.dataset.pos,t,e,s))})}function vi(e,t,i,s){var m,f,$;const{openModal:c,closeModal:o}=s,a=e.replace(/\d+/,""),d=t.slots[e],l=d?t.playerCards.find(p=>p.id===d):null;(m=l==null?void 0:l.player)==null||m.id;const n=new Set;Object.entries(t.slots).forEach(([p,y])=>{var h;if(p===e||!y)return;const E=t.playerCards.find(g=>g.id===y);(h=E==null?void 0:E.player)!=null&&h.id&&n.add(E.player.id)}),t.subs.forEach(p=>{var E;const y=t.playerCards.find(h=>h.id===p);(E=y==null?void 0:y.player)!=null&&E.id&&n.add(y.player.id)});const r=new Set,u=t.playerCards.filter(p=>{const y=p.player;return!(y.job===a||y.job2===a)||n.has(y.id)||r.has(y.id)?!1:(r.add(y.id),!0)});u.sort((p,y)=>{const E=a==="GK"?p.player.note_g:a==="DEF"?p.player.note_d:a==="MIL"?p.player.note_m:p.player.note_a;return(a==="GK"?y.player.note_g:a==="DEF"?y.player.note_d:a==="MIL"?y.player.note_m:y.player.note_a)-E}),c(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${u.length>0?u.map(p=>{var v,L;const y=p.player,E=a==="GK"?y.note_g:a==="DEF"?y.note_d:a==="MIL"?y.note_m:y.note_a,h=Oe(y),g={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[y.rarity];return`<div class="player-option" data-card-id="${p.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ue[a]}">
            ${h?`<img src="${h}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${ue[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${y.firstname} ${y.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${y.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${y.country_code}">
              ${(v=y.clubs)!=null&&v.logo_url?`<img src="${y.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((L=y.clubs)==null?void 0:L.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${y.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${ue[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${g};flex-shrink:0">
            ${E}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(f=document.getElementById("close-selector"))==null||f.addEventListener("click",o),($=document.getElementById("remove-player"))==null||$.addEventListener("click",()=>{delete t.slots[e],o(),be(i,t,s)}),document.querySelectorAll(".player-option").forEach(p=>{p.addEventListener("click",()=>{t.slots[e]=p.dataset.cardId,o(),be(i,t,s)})})}function bi(e,t,i){var l;const{openModal:s,closeModal:c}=i,o=new Set;Object.values(e.slots).filter(Boolean).forEach(n=>{var u;const r=e.playerCards.find(m=>m.id===n);(u=r==null?void 0:r.player)!=null&&u.id&&o.add(r.player.id)}),e.subs.forEach(n=>{var u;const r=e.playerCards.find(m=>m.id===n);(u=r==null?void 0:r.player)!=null&&u.id&&o.add(r.player.id)});const a=new Set,d=e.playerCards.filter(n=>{var r,u,m;return o.has((r=n.player)==null?void 0:r.id)||a.has((u=n.player)==null?void 0:u.id)?!1:(a.add((m=n.player)==null?void 0:m.id),!0)});s("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${d.length>0?d.map(n=>{var f;const r=n.player,u=Oe(r),m=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${n.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ue[r.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((f=r.clubs)==null?void 0:f.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${ue[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${m}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(l=document.getElementById("close-sub-selector"))==null||l.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(n=>{n.addEventListener("click",()=>{e.subs.push(n.dataset.cardId),c(),be(t,e,i)})})}async function wi(e,t){const{state:i,toast:s,navigate:c}=t,o=e.formationCards.find(l=>l.formation===e.formation),a=(o==null?void 0:o.id)||e.formationCardId;await k.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await k.from("deck_cards").delete().eq("deck_id",e.deckId);const d=[];if(Object.entries(e.slots).forEach(([l,n],r)=>{d.push({deck_id:e.deckId,card_id:n,position:l,is_starter:!0,slot_order:r})}),e.subs.forEach((l,n)=>{d.push({deck_id:e.deckId,card_id:l,position:`SUB${n+1}`,is_starter:!1,slot_order:100+n})}),d.length>0){const{error:l}=await k.from("deck_cards").insert(d);if(l){s(l.message,"error");return}}s("Deck enregistré ✅","success"),c("decks")}function Lt(e){const t=Ge[e]||Ge["4-4-2"],i=["GK1"];for(let s=1;s<=t.DEF;s++)i.push(`DEF${s}`);for(let s=1;s<=t.MIL;s++)i.push(`MIL${s}`);for(let s=1;s<=t.ATT;s++)i.push(`ATT${s}`);return i}const _i="modulepreload",$i=function(e){return"/manager-wars/"+e},Mt={},ki=function(t,i,s){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),d=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));c=Promise.allSettled(i.map(l=>{if(l=$i(l),l in Mt)return;Mt[l]=!0;const n=l.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${r}`))return;const u=document.createElement("link");if(u.rel=n?"stylesheet":_i,n||(u.as="script"),u.crossOrigin="",u.href=l,d&&u.setAttribute("nonce",d),document.head.appendChild(u),n)return new Promise((m,f)=>{u.addEventListener("load",m),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=a,window.dispatchEvent(d),!d.defaultPrevented)throw a}return c.then(a=>{for(const d of a||[])d.status==="rejected"&&o(d.reason);return t().catch(o)})};async function Ot(){const{data:e}=await k.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await k.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(s=>s.booster_id===i.id)}))}function Ei(e){if(!(e!=null&&e.length))return null;const t=e.reduce((s,c)=>s+Number(c.percentage),0);let i=Math.random()*t;for(const s of e)if(i-=Number(s.percentage),i<=0)return s;return e[e.length-1]}const Ai=Object.freeze(Object.defineProperty({__proto__:null,loadActiveBoosters:Ot,rollDropRate:Ei},Symbol.toStringTag,{value:"Module"})),Ht=()=>Object.keys(Me),Ii=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Ye={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Ti(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Li={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Mi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};function zi(e){var c;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((c=Object.entries(t).sort((o,a)=>a[1]-o[1])[0])==null?void 0:c[0])||"player",s=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+s,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Ci(e,{state:t,navigate:i,toast:s}){var a;const c=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await Ot()).map(zi)}catch(d){console.warn("Erreur chargement boosters DB, fallback hardcodé",d)}o.length||(o=Ii.map(d=>({...d,rates:[],isPub:d.id==="players_pub"}))),e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(d=>{d.addEventListener("click",async()=>{const l=o.find(n=>n.id===d.dataset.booster);if(l){d.style.opacity="0.5",d.style.pointerEvents="none";try{await ji(l,{state:t,toast:s,navigate:i,container:e})}catch(n){s(n.message,"error"),d.style.opacity="",d.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(d=>{d.addEventListener("click",l=>{l.stopPropagation();const n=o.find(r=>r.id===d.dataset.boosterId);Ni(n)})})}async function ji(e,{state:t,toast:i,navigate:s,container:c}){if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await Hi()}catch(u){i(u.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:o}=await k.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((o||[]).filter(u=>u.card_type==="player").map(u=>u.player_id)),d=new Set((o||[]).filter(u=>u.card_type==="formation").map(u=>u.formation));let l=[];const n=e.type||"player";n==="player"?l=await Di(t.profile,e.cardCount,e.cost):n==="game_changer"?l=await qi(t.profile,e.cardCount,e.cost):n==="formation"?l=await Gi(t.profile,e.cost):l=await Fi(t.profile,e),l.forEach(u=>{u.card_type==="player"&&u.player?u.isDuplicate=a.has(u.player.id):u.card_type==="formation"&&(u.isDuplicate=d.has(u.formation))});const{data:r}=await k.from("users").select("*").eq("id",t.profile.id).single();r&&(t.profile=r),Ri(l,e,s)}function Si(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function he(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Bi(e,t){let i;switch(t){case"legende":i=e.filter(s=>s.rarity==="legende"),i.length||(i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte")),i.length||(i=e.filter(s=>he(s)>=6));break;case"special":i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte"),i.length||(i=e.filter(s=>he(s)>=6));break;case"normal_high":i=e.filter(s=>s.rarity==="normal"&&he(s)>=6),i.length||(i=e.filter(s=>he(s)>=6));break;default:i=e.filter(s=>s.rarity==="normal"&&he(s)>=1&&he(s)<=5),i.length||(i=e.filter(s=>s.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Fi(e,t){if(t.cost>0){const{error:c}=await k.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(c)throw c}const{rollDropRate:i}=await ki(async()=>{const{rollDropRate:c}=await Promise.resolve().then(()=>Ai);return{rollDropRate:c}},void 0),s=[];for(let c=0;c<(t.cardCount||5);c++){const o=i(t.rates);if(o){if(o.card_type==="player"){let a=k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);o.rarity&&(a=a.eq("rarity",o.rarity));const{data:d}=await a;let l=d||[];if((o.note_min||o.note_max)&&(l=l.filter(u=>{const m=Math.max(Number(u.note_g)||0,Number(u.note_d)||0,Number(u.note_m)||0,Number(u.note_a)||0);return(!o.note_min||m>=o.note_min)&&(!o.note_max||m<=o.note_max)})),l.length||(o.note_min||o.note_max?(l=d||[],console.warn("[Booster] Aucun joueur avec note",o.note_min,"-",o.note_max,"— fallback rareté uniquement")):l=d||[]),!l.length)continue;const n=l[Math.floor(Math.random()*l.length)],{data:r}=await k.from("cards").insert({owner_id:e.id,player_id:n.id,card_type:"player"}).select().single();r&&(s.push({...r,player:n}),k.rpc("record_transfer",{p_card_id:r.id,p_player_id:n.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(o.card_type==="game_changer"){const{data:a}=await k.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),d=a!=null&&a.length?a:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],n=d[Math.floor(Math.random()*d.length)].name,{data:r}=await k.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:n}).select().single();r&&s.push(r)}else if(o.card_type==="formation"){const a=Ht(),d=a[Math.floor(Math.random()*a.length)],{data:l}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();l!=null&&l[0]&&s.push(l[0])}}}return s}async function Di(e,t,i){if(i>0){const{error:n}=await k.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n}const{data:s}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(s!=null&&s.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=s.filter(n=>n.job==="GK"),o=s.filter(n=>n.job!=="GK"),a=!e.first_booster_opened&&c.length>0,d=[];for(let n=0;n<t;n++){const r=n===0&&a?c:n===0?o:s,u=Si(),m=Bi(r,u);m&&d.push(m)}a&&await k.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:l}=await k.from("cards").insert(d.map(n=>({owner_id:e.id,player_id:n.id,card_type:"player"}))).select();return(l||[]).forEach((n,r)=>{k.rpc("record_transfer",{p_card_id:n.id,p_player_id:d[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((n,r)=>({...l[r],player:n}))}async function qi(e,t,i){const{error:s}=await k.from("users").update({credits:e.credits-i}).eq("id",e.id);if(s)throw s;const{data:c}=await k.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=c!=null&&c.length?c:Object.keys(Ye).map(r=>({name:r,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const r=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:d,error:l}=await k.from("cards").insert(a).select();return l&&console.error("[Booster GC] Erreur insert:",l.message,l),(d||[]).map(r=>{const u=c==null?void 0:c.find(m=>m.name===r.gc_type||m.id===r.gc_definition_id);return{...r,_gcDef:u||null}})}async function Gi(e,t){const{error:i}=await k.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const s=Ht(),c=s[Math.floor(Math.random()*s.length)],{data:o,error:a}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:c}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),o||[]}function Ri(e,t,i){var m;if(!e||e.length===0){const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",f.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(f),(m=f.querySelector("#anim-close-err"))==null||m.addEventListener("click",()=>f.remove());return}const s=document.createElement("div");s.id="booster-anim-overlay",s.innerHTML=`
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
  `,document.body.appendChild(s);let c=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(c)return;c=!0;const f=document.getElementById("pack-visual");f.classList.add("shaking"),setTimeout(()=>{f.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",a(0)},600)},500)});let o=0;function a(f){o=f;const $=document.getElementById("reveal-phase");$.style.display="flex",d(f)}function d(f){var I;const $=e[f],p=document.getElementById("card-counter"),y=document.getElementById("single-card-slot"),E=document.getElementById("card-tap-hint");p&&(p.textContent=`Carte ${f+1} / ${e.length}`),E&&(E.textContent=f<e.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const h=zt($),g=$.card_type==="player"&&((I=$.player)==null?void 0:I.rarity)==="legende";y.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${g?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${h}
        ${$.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,g&&r();const v=document.getElementById("current-card-wrap");let L=!1;v.addEventListener("click",()=>{if(L)return;L=!0;const x=f+1;x<e.length?(v.style.transition="all 0.25s ease",v.style.transform="translateX(-120%) rotate(-15deg)",v.style.opacity="0",setTimeout(()=>d(x),250)):l()})}function l(){u(),document.getElementById("reveal-phase").style.display="none";const f=document.getElementById("recap-phase");f.style.display="flex";const $=document.getElementById("recap-grid");$.innerHTML=e.map((p,y)=>`
      <div class="recap-card" style="--i:${y};animation-delay:${y*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${zt(p)}
        ${p.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let n=null;function r(){const f=document.getElementById("fireworks-canvas");if(!f)return;f.width=window.innerWidth,f.height=window.innerHeight;const $=f.getContext("2d"),p=[];function y(){const h=Math.random()*f.width,g=Math.random()*f.height*.6,v=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],L=v[Math.floor(Math.random()*v.length)];for(let I=0;I<60;I++){const x=Math.PI*2/60*I,T=2+Math.random()*5;p.push({x:h,y:g,vx:Math.cos(x)*T,vy:Math.sin(x)*T,alpha:1,color:L,size:2+Math.random()*3})}}y(),n=setInterval(y,600);function E(){if(document.getElementById("fireworks-canvas")){$.clearRect(0,0,f.width,f.height);for(let h=p.length-1;h>=0;h--){const g=p[h];if(g.x+=g.vx,g.y+=g.vy+.08,g.vy*=.98,g.alpha-=.018,g.alpha<=0){p.splice(h,1);continue}$.globalAlpha=g.alpha,$.fillStyle=g.color,$.beginPath(),$.arc(g.x,g.y,g.size,0,Math.PI*2),$.fill()}$.globalAlpha=1,(n!==null||p.length>0)&&requestAnimationFrame(E)}}E()}function u(){n!==null&&(clearInterval(n),n=null);const f=document.getElementById("fireworks-canvas");f&&f.getContext("2d").clearRect(0,0,f.width,f.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{u(),s.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{u(),s.remove(),i("boosters")})}function zt(e){var t,i,s,c;if(e.card_type==="player"&&e.player){const o=e.player,a=o.job||"ATT",d=Li[a]||"#1A6B3C",l=Mi[o.rarity]||"#ccc",n=a==="GK"?o.note_g:a==="DEF"?o.note_d:a==="MIL"?o.note_m:o.note_a,r=Ti(o),u={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[o.country_code]||o.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${l};overflow:hidden;display:flex;flex-direction:column">
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
        <div style="font-size:7px;letter-spacing:1px;color:#555;text-transform:uppercase">${u}</div>
        ${(t=o.clubs)!=null&&t.logo_url?`<img src="${o.clubs.logo_url}" style="width:20px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:700">${(((i=o.clubs)==null?void 0:i.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>`}if(e.card_type==="game_changer"){const o=e._gcDef,a=(o==null?void 0:o.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},l={purple:"#b06ce0",light_blue:"#00d4ef"},n=d[o==null?void 0:o.color]||d.purple,r=l[o==null?void 0:o.color]||l.purple,u=(o==null?void 0:o.name)||e.gc_type||"Game Changer",m=(o==null?void 0:o.effect)||((s=Ye[e.gc_type])==null?void 0:s.desc)||"",f=o!=null&&o.image_url?`/manager-wars/icons/${o.image_url}`:null,$=((c=Ye[e.gc_type])==null?void 0:c.icon)||"⚡";return`<div style="width:170px;height:240px;background:${n};border-radius:14px;border:3px solid ${r};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${r}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${u.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${u}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${a?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${f?`<img src="${f}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${$}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${m.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Ni(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};s.innerHTML=`
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
      </div>`,document.body.appendChild(s),s.addEventListener("click",a=>{a.target===s&&s.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>s.remove());return}Pi()}function Pi(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const Oi="simulation",Kt="VOTRE_ZONE_ID";function Hi(){switch(Oi){case"propellerads":return Ki();case"adsense":return Ui();default:return rt()}}function rt(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const s=setInterval(()=>{i--;const c=document.getElementById("ad-cd"),o=document.getElementById("ad-skip");c&&(c.textContent=i),o&&(o.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(s),o&&(o.disabled=!1,o.style.cssText=o.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),o==null||o.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Ki(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(rt());window.propeller.push({zone_id:Kt,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function Ui(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(rt());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Kt,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const we={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},_e={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function fe(e,t,i,s,c){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${s}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",c)}function ne(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function We(e,t){var s,c;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((s=i.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((c=i.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Re(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Ut(){const e=Math.random()*100;return e<10?3:e<30?2:1}function Ne(e,t){const i=we[t]||we["4-4-2"],s={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const d=e.filter(n=>n.position&&n.position.replace(/\d+$/,"")===a).sort((n,r)=>parseInt(n.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(n=>({...n,_line:a})),l=Re(d.length);d.forEach((n,r)=>{n._col=l[r]}),s[a]=d}return s}const o=[...e];for(const a of["GK","DEF","MIL","ATT"]){const d=[];for(let n=0;n<i[a];n++){let r=o.findIndex(u=>u.job===a);if(r===-1&&(r=o.findIndex(u=>u.job2===a)),r===-1&&(r=0),o[r]){const u={...o[r],_line:a};d.push(u),o.splice(r,1)}}const l=Re(d.length);d.forEach((n,r)=>{n._col=l[r]}),s[a]=d}return s}function Vt(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function le(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function Yt(e,t,i){const c=new Set,o=t.filter(r=>{const u=r.gc_type||r.id;return c.has(u)?!1:(c.add(u),!0)});let a=[];function d(r,u){const m=r._gcDef,f={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},$={purple:"#9b59b6",light_blue:"#00bcd4"},p=f[m==null?void 0:m.color]||f.purple,y=$[m==null?void 0:m.color]||$.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":y};background:${p};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${u?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${u?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((m==null?void 0:m.name)||r.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(m==null?void 0:m.name)||r.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${m!=null&&m.image_url?`<img src="/manager-wars/icons/${m.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((m==null?void 0:m.effect)||"").slice(0,50)}</span>
      </div>
      ${u?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const l=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(r)};function n(){var u,m,f;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=a.length>0;e.innerHTML=`
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
        ${o.map($=>{const p=a.find(y=>y.gc_type===$.gc_type);return d($,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach($=>{$.addEventListener("click",()=>{const p=$.dataset.id,y=o.find(h=>h.id===p);if(!y)return;const E=a.findIndex(h=>h.gc_type===y.gc_type);E>-1?a.splice(E,1):a.length<3&&a.push(y),n()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{r&&l(a)}),(m=e.querySelector("#gc-no-gc"))==null||m.addEventListener("click",()=>l([])),(f=e.querySelector("#gc-reset"))==null||f.addEventListener("click",()=>{a.length&&(a=[],n())})}n()}async function Vi(e,t,i){const{state:s,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await k.from("decks").select("id,name,is_active,formation").eq("owner_id",s.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){fe(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const a=o.map(r=>r.id),{data:d}=await k.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let l=0;function n(){var h,g,v,L,I;const r=o[l],u=(d||[]).filter(x=>x.deck_id===r.id),m=u.filter(x=>{var T;return x.is_starter&&((T=x.card)==null?void 0:T.player)}).map(x=>We(x.card,x.position)),f=u.find(x=>{var T;return((T=x.card)==null?void 0:T.card_type)==="formation"}),$=r.formation||((h=f==null?void 0:f.card)==null?void 0:h.formation)||"4-4-2",p=m.length>=11?Ne(m,$):null,y=m.length>=11;Vt(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
          <div style="font-size:11px;opacity:.6;margin-top:2px">${$} · ${m.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${l===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===o.length-1?"0.1":"0.3"});color:${l===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${l===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${p?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${Te(p,$,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${m.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${o.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${o.map((x,T)=>`<div style="width:7px;height:7px;border-radius:50%;background:${T===l?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const T=e.querySelector(".deck-preview-wrap svg");T&&(T.removeAttribute("width"),T.removeAttribute("height"),T.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",T.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(g=document.getElementById("prev-deck"))==null||g.addEventListener("click",()=>{l>0&&(l--,n())}),(v=document.getElementById("next-deck"))==null||v.addEventListener("click",()=>{l<o.length-1&&(l++,n())}),(L=document.getElementById("validate-deck"))==null||L.addEventListener("click",()=>{y&&t.navigate("match",{matchMode:i,deckId:r.id})}),(I=document.getElementById("cancel-deck-select"))==null||I.addEventListener("click",()=>{le(e),c("home")});const E=document.getElementById("deck-swipe-zone");if(E){let x=0,T=0;E.addEventListener("touchstart",q=>{x=q.touches[0].clientX,T=q.touches[0].clientY},{passive:!0}),E.addEventListener("touchend",q=>{const N=q.changedTouches[0].clientX-x,P=q.changedTouches[0].clientY-T;Math.abs(N)<40||Math.abs(N)<Math.abs(P)||(N<0&&l<o.length-1?(l++,n()):N>0&&l>0&&(l--,n()))},{passive:!0})}}n()}function Wt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function pe(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const s=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:ne(e),c=Wt(e),o=e._line||e.job||"MIL",a=_e[o]||"#555",d={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",l=e.note!==void 0?Number(e.note)||0:(Number(ie(e,o))||0)+(e.boost||0),n=Xt(e==null?void 0:e.country_code),r=Math.round(i*.19),u=Math.round(i*.25),m=i-Math.round(i*.19)-Math.round(i*.25),f=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${d};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${f}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${s&&!(e!=null&&e.used)?`<img src="${s}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Xe(e==null?void 0:e.country_code)?`<img src="${Xe(e.country_code)}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">${n}</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":l}</span>
      ${c?`<img src="${c}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function Ee(e,t,i){if(!(e!=null&&e.length))return"";const s=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return s.forEach((o,a)=>{if(c+=pe(o,40,52),a<s.length-1){const d=ge(o,s[a+1]);c+=`<div style="width:7px;height:3px;background:${d==="#ff3333"||d==="#cc2222"?"rgba(255,255,255,0.12)":d};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),c+="</div>",c}function Xe(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Xt(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Ie(e,t,i,s,c=310,o=310){const a=Me[t]||{},d=Ft(t)||et[t]||[],l={},n=["ATT","MIL","DEF","GK"];for(const h of n)(e[h]||[]).forEach((v,L)=>{l[`${h}${L+1}`]=v});function r(h){const g=a[h];return g?{x:g.x*c,y:g.y*o}:null}let u="";for(const[h,g]of d){const v=r(h),L=r(g);if(!v||!L)continue;const I=l[h],x=l[g],T=ge(I,x);T==="#00ff88"||T==="#FFD700"?(u+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${T}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,u+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${T}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):u+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${T}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const m=48,f=64,$=13,p=16,y={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[h,g]of Object.entries(l)){const v=r(h);if(!v||!g)continue;const L=h.replace(/[0-9]/g,""),I=_e[L]||"#555",x=i==="attack"&&["MIL","ATT"].includes(L)&&!g.used||i==="defense"&&["GK","DEF","MIL"].includes(L)&&!g.used,T=s.includes(g.cardId);let q;i==="attack"?q=L==="MIL"?Number(g.note_m)||0:Number(g.note_a)||0:i==="defense"?q=L==="GK"?Number(g.note_g)||0:L==="MIL"?Number(g.note_m)||0:Number(g.note_d)||0:q=Number(L==="GK"?g.note_g:L==="DEF"?g.note_d:L==="MIL"?g.note_m:g.note_a)||0,q=q+(g.boost||0);const N=(v.x-m/2).toFixed(1),P=(v.y-f/2).toFixed(1),H=g.used?.25:1,W=y[g==null?void 0:g.rarity]||y.normal,V=T?"#ff3030":W,ee=T?3:(g==null?void 0:g.rarity)==="légende"||(g==null?void 0:g.rarity)==="pépite"?2.5:2,C=f-$-p;u+=`<defs><clipPath id="cp-${h}"><rect x="${N}" y="${(v.y-f/2+$).toFixed(1)}" width="${m}" height="${C}"/></clipPath></defs>`,u+=`<rect x="${N}" y="${P}" width="${m}" height="${f}" rx="5" fill="${I}" opacity="${H}"/>`;const z=ne(g);z&&!g.used&&(u+=`<image href="${z}" x="${N}" y="${(v.y-f/2+$).toFixed(1)}" width="${m}" height="${C}" clip-path="url(#cp-${h})" preserveAspectRatio="xMidYMin slice"/>`),u+=`<rect x="${N}" y="${P}" width="${m}" height="${$}" rx="4" fill="rgba(255,255,255,0.92)"/>`,u+=`<text x="${v.x.toFixed(1)}" y="${(v.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(g.name||"").slice(0,9)}</text>`;const B=(v.y+f/2-p).toFixed(1);if(u+=`<rect x="${N}" y="${B}" width="${m}" height="${p}" fill="rgba(255,255,255,0.92)"/>`,g.used)u+=`<text x="${v.x.toFixed(1)}" y="${(v.y+f/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const R=Xe(g.country_code);R?u+=`<image href="${R}" x="${(v.x-20).toFixed(1)}" y="${(v.y+f/2-p+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:u+=`<text x="${(v.x-13).toFixed(1)}" y="${(v.y+f/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Xt(g.country_code)}</text>`,u+=`<text x="${v.x.toFixed(1)}" y="${(v.y+f/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${q}</text>`;const j=Wt(g);j?u+=`<image href="${j}" x="${(v.x+m/2-14).toFixed(1)}" y="${(v.y+f/2-p+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:g.clubName&&(u+=`<text x="${(v.x+14).toFixed(1)}" y="${(v.y+f/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(g.clubName||"").slice(0,3).toUpperCase()}</text>`),g.boost&&(u+=`<rect x="${(v.x+m/2-12).toFixed(1)}" y="${(v.y-f/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,u+=`<text x="${(v.x+m/2-5).toFixed(1)}" y="${(v.y-f/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${g.boost}</text>`)}u+=`<rect x="${N}" y="${P}" width="${m}" height="${f}" rx="5" fill="${T?"rgba(255,255,255,0.12)":"none"}" stroke="${V}" stroke-width="${ee}" opacity="${H}"/>`,x&&(u+=`<rect x="${N}" y="${P}" width="${m}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${T?"selected":""}" data-card-id="${g.cardId}" data-role="${L}" style="cursor:pointer"/>`)}const E=38;return`<svg viewBox="${-E} ${-E} ${c+E*2} ${o+E*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${u}
  </svg>`}function Te(e,t,i,s,c=300,o=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ie(e,t,i,s,c,o)}
  </div>`}function Se(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function Jt(e,t,i,s){var L;const{state:c,navigate:o,toast:a}=t;Vt(e);const d=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!d.deckId)return Vi(e,t,i);const l=d.deckId;let n,r,u,m;try{const I=await Promise.all([k.from("decks").select("formation,name").eq("id",l).single(),k.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",l).order("slot_order")]);n=I[0].data,u=I[0].error,r=I[1].data,m=I[1].error}catch(I){console.error("[Match] Exception chargement deck:",I),fe(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>o("home"));return}if(u||m){console.error("[Match] Erreur Supabase:",u||m),fe(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>o("home"));return}const f=(r||[]).filter(I=>{var x;return I.is_starter&&((x=I.card)==null?void 0:x.player)}).map(I=>We(I.card,I.position)),$=(r||[]).filter(I=>{var x;return!I.is_starter&&((x=I.card)==null?void 0:x.player)}).map(I=>We(I.card,I.position));if(f.length<11){fe(e,"⚠️",`Deck incomplet (${f.length}/11).`,"Compléter",()=>o("decks"));return}const p=(r||[]).find(I=>{var x;return((x=I.card)==null?void 0:x.card_type)==="formation"}),y=(n==null?void 0:n.formation)||((L=p==null?void 0:p.card)==null?void 0:L.formation)||"4-4-2",{data:E,error:h}=await k.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:g}=await k.from("gc_definitions").select("*").eq("is_active",!0),v=(E||[]).map(I=>({...I,_gcDef:(g==null?void 0:g.find(x=>x.name===I.gc_type||x.id===I.gc_definition_id))||null}));s({deckId:l,formation:y,starters:f,subsRaw:$,gcCardsEnriched:v,gcDefs:g||[]})}async function Yi(e,t){const{state:i}=t,c=(i.params||{}).matchMode||"vs_ai_easy",o=c.replace("vs_ai_",""),a=c;await Jt(e,t,c,async({deckId:d,formation:l,starters:n,subsRaw:r,gcCardsEnriched:u,gcDefs:m})=>{try{const f=Ne(n,l),$=await Wi(l,o),p=async y=>{try{const{data:E,error:h}=await k.from("matches").insert({home_id:i.profile.id,away_id:null,mode:a,home_deck_id:d,status:"in_progress"}).select().single();if(h){console.error("[MatchIA] Erreur création match:",h),fe(e,"⚠️","Impossible de créer le match ("+h.message+").","Retour",()=>t.navigate("home"));return}const g={gcDefs:m||[],matchId:E==null?void 0:E.id,mode:a,difficulty:o,formation:l,homeTeam:f,aiTeam:$,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),homeScore:0,aiScore:0,gcCards:y,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Ji(e,g,t)}catch(E){console.error("[MatchIA] Exception launchMatch:",E),fe(e,"⚠️","Erreur au lancement du match : "+E.message,"Retour",()=>t.navigate("home"))}};if(!u.length){p([]);return}Yt(e,u,p)}catch(f){console.error("[MatchIA] Exception setup:",f),fe(e,"⚠️","Erreur de préparation du match : "+f.message,"Retour",()=>t.navigate("home"))}})}async function Wi(e,t){var a,d;const{data:i}=await k.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return Xi(e);const s=we[e]||we["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},o=[...i];for(const l of["GK","DEF","MIL","ATT"]){const n=o.filter($=>$.job===l),r=o.filter($=>$.job!==l),u=[...n,...r],m=[];for(let $=0;$<s[l];$++){const p=u[$]||o[$];p&&m.push({cardId:"ai-"+p.id+"-"+$,id:p.id,firstname:p.firstname,name:p.surname_encoded,country_code:p.country_code,club_id:p.club_id,job:p.job,job2:p.job2,note_g:Number(p.note_g)||0,note_d:Number(p.note_d)||0,note_m:Number(p.note_m)||0,note_a:Number(p.note_a)||0,rarity:p.rarity,skin:p.skin,hair:p.hair,hair_length:p.hair_length,clubName:((a=p.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((d=p.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:l})}const f=Re(m.length);m.forEach(($,p)=>{$._col=f[p]}),c[l]=m}return c}function Xi(e){const t=we[e]||we["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},s=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const o of["GK","DEF","MIL","ATT"]){const a=[];for(let l=0;l<t[o];l++){const n=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:s[c%s.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?n:2,note_d:o==="DEF"?n:2,note_m:o==="MIL"?n:2,note_a:o==="ATT"?n:2,rarity:"normal",boost:0,used:!1,_line:o}),c++}const d=Re(a.length);a.forEach((l,n)=>{l._col=d[n]}),i[o]=a}return i}function Ji(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Ie(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Zi(e,t,i),5e3)}function Zi(e,t,i){const s=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function o(p){return p.reduce((y,E)=>y+ie(E,"MIL"),0)}function a(p){let y=0;for(let E=0;E<p.length-1;E++){const h=ge(p[E],p[E+1]);h==="#00ff88"?y+=2:h==="#FFD700"&&(y+=1)}return y}const d=o(s)+a(s),l=o(c)+a(c),n=d>=l;function r(p,y,E,h){return`<div id="duel-row-${h}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${y}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((g,v)=>{const L=v<p.length-1?ge(g,p[v+1]):null,I=!L||L==="#ff3333"||L==="#cc2222",x=L==="#00ff88"?"+2":L==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${h}" data-idx="${v}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${pe({...g,note:ie(g,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${v<p.length-1?`<div class="duel-link duel-link-${h}" data-idx="${v}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${I?"rgba(255,255,255,0.12)":L};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${I?"none":`0 0 8px ${L}`}">
            ${x?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${L}">${x}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${h}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${o(p)} + ${a(p)} liens = <b style="color:#fff">${o(p)+a(p)}</b>
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

    ${r(s,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${r(c,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const u=()=>{const p=(y,E)=>e.querySelectorAll(y).forEach((h,g)=>{setTimeout(()=>{h.style.opacity="1",h.style.transform="translateY(0) scale(1)"},E+g*90)});p(".duel-card-home",150),p(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((y,E)=>{setTimeout(()=>{y.style.opacity="1"},E*70)}),900),setTimeout(()=>{const y=e.querySelector("#vs-label");y&&(y.style.opacity="1",y.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(E=>E.style.opacity="1")},1250),setTimeout(()=>{m("score-home",d,800),m("score-ai",l,800)},1500)};function m(p,y,E){const h=document.getElementById(p);if(!h)return;const g=performance.now(),v=L=>{const I=Math.min(1,(L-g)/E);h.textContent=Math.round(y*(1-Math.pow(1-I,3))),I<1?requestAnimationFrame(v):h.textContent=y};requestAnimationFrame(v)}requestAnimationFrame(u),t.attacker=n?"home":"ai";const f=n?Ut():null;n&&(t.boostCard={value:f}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:s.map(p=>({name:p.name,note:ie(p,"MIL"),portrait:ne(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),aiPlayers:c.map(p=>({name:p.name,note:ie(p,"MIL"),portrait:ne(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),homeTotal:d,aiTotal:l,text:`Duel milieu : ${t.clubName} ${d} – ${l} IA → ${n?t.clubName+" attaque":"IA attaque"}`});const $=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",oe(e,t,i),t.attacker==="ai"&&setTimeout(()=>Je(e,t,i),800)};setTimeout(()=>{const p=document.getElementById("score-home"),y=document.getElementById("score-ai"),E=document.getElementById(n?"duel-row-home":"duel-row-ai"),h=document.getElementById(n?"duel-row-ai":"duel-row-home"),g=n?p:y,v=n?y:p;g&&(g.style.fontSize="80px",g.style.color=n?"#FFD700":"#ff6b6b",g.style.animation="duelPulse .5s ease"+(n?", duelGlow 1.5s ease infinite .5s":"")),v&&(v.style.opacity="0.25"),setTimeout(()=>{E&&(E.style.transformOrigin="center",E.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",E.style.zIndex="5"),setTimeout(()=>{var I;const L=document.getElementById("duel-shock");if(L){const x=(I=h||E)==null?void 0:I.getBoundingClientRect(),T=e.querySelector(".match-screen").getBoundingClientRect();x&&(L.style.top=x.top-T.top+x.height/2+"px"),L.style.animation="shockwave .5s ease-out forwards"}h&&(h.style.transformOrigin="center",h.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var I;const L=document.getElementById("duel-finale");L&&(L.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${n?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${n?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${f}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,L.style.transition="opacity .45s ease",L.style.opacity="1",L.style.pointerEvents="auto",(I=document.getElementById("start-match-btn"))==null||I.addEventListener("click",$))},600)},700)},2800)}function Qi(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function oe(e,t,i){var p,y,E,h,g,v,L,I;const s=t.selected.map(x=>x.cardId),c=t.usedSubIds||[],o=t.homeSubs.filter(x=>!c.includes(x.cardId));Object.values(t.homeTeam).flat().filter(x=>x.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const d=t.phase==="ai-attack"||t.phase==="ai-defense",l=t.phase==="attack",n=t.phase==="defense",r=t.phase==="finished",u=t.gcCards.filter(x=>!t.usedGc.includes(x.id)),m=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const T=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${Ee((T.players||[]).map(q=>({...q,used:!1})),"#ff6b6b",T.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const T=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${Ee((T.players||[]).map(q=>({...q,used:!1})),"#00ff88",T.total)}
          </div>`}const x=t.log[t.log.length-1];return x?'<div style="padding:2px 4px">'+Qi(x)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const x=window.innerWidth>=700,T=(z,B,R)=>{var U,X;const j=(t.gcDefs||[]).find(te=>te.name===z.gc_type),_={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[j==null?void 0:j.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",b={purple:"#b06ce0",light_blue:"#00d4ef"}[j==null?void 0:j.color]||"#b06ce0",S=(j==null?void 0:j.name)||z.gc_type,A=(j==null?void 0:j.effect)||((U=de[z.gc_type])==null?void 0:U.desc)||"",w=j!=null&&j.image_url?`/manager-wars/icons/${j.image_url}`:null,D=((X=de[z.gc_type])==null?void 0:X.icon)||"⚡",M=Math.round(R*.22),G=Math.round(R*.22),F=R-M-G,K=S.length>12?7:9;return`<div class="gc-mini" data-gc-id="${z.id}" data-gc-type="${z.gc_type}"
          style="box-sizing:border-box;width:${B}px;height:${R}px;border-radius:10px;border:2px solid ${b};background:${_};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${M}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${K}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${B-6}px">${S}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${F}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${w?`<img src="${w}" style="max-width:${B-10}px;max-height:${F-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(F*.55)}px">${D}</span>`}
          </div>
          <div style="height:${G}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${A.slice(0,38)}</span>
          </div>
        </div>`},q=(z,B)=>{var R;return`<div id="boost-card"
          style="box-sizing:border-box;width:${z}px;height:${B}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(B*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(B*.2)}px">⚡</div>
            <div style="font-size:${Math.round(B*.09)}px;color:#000;font-weight:900">+${(R=t.boostCard)==null?void 0:R.value}</div>
          </div>`},N=(z,B)=>B?q(110,150):T(z,110,150),P=(z,B)=>B?q(68,95):T(z,68,95),H=x?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",W=r?`<button id="btn-results" style="${H};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:d?`<div style="${H};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:l?`<button id="btn-action" style="${H};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:n?`<button id="btn-action" style="${H};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${H};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,V=l||n?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",ee=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${x?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(z=>`<div class="sub-btn-col" data-sub-id="${z.cardId}" style="cursor:pointer;flex-shrink:0">${pe(z,44,58)}</div>`).join("")}
      </div>`,C=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${Te(t.homeTeam,t.formation,t.phase,s,300,300)}
        </div>
      </div>`;return x?`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${ee}
          ${C}
          <!-- Colonne droite : GC scrollable + bouton épinglé -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2)">
            <div style="flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;align-items:center;gap:10px">
              ${u.map(z=>N(z,!1)).join("")}
              ${m?N(null,!0):""}
            </div>
            <div style="width:100%;flex-shrink:0;padding-top:8px">${W}${V}</div>
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          ${ee}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Te(t.homeTeam,t.formation,t.phase,s,300,300)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${u.map(z=>P(z,!1)).join("")}
            ${m?P(null,!0):""}
          </div>
          <div>${W}${V}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(x=>{var T,q,N;if(x.type==="duel"){const P=x.isGoal,H=x.homeScored?"#FFD700":P?"#ff6b6b":"rgba(255,255,255,0.3)",W=x.homeScored?"⚽ BUT !":P?"⚽ BUT IA !":(T=x.homePlayers)!=null&&T.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${P?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${H};margin-bottom:4px">
                <div style="font-size:9px;color:${H};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${W}</div>
                ${(q=x.homePlayers)!=null&&q.length?`<div style="margin-bottom:3px">${Ee(x.homePlayers,"rgba(255,255,255,0.7)",x.homeTotal)}</div>`:""}
                ${(N=x.aiPlayers)!=null&&N.length?`<div style="opacity:0.7">${Ee(x.aiPlayers,"#ff6b6b",x.aiTotal)}</div>`:""}
              </div>`}return x.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${x.outPlayer?pe({...x.outPlayer,used:!0,_line:x.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${x.inPlayer?pe({...x.inPlayer,_line:x.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:x.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${x.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${x.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function f(){const x=e.querySelector(".match-screen");if(!x)return;const T=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);x.style.bottom="auto",x.style.height=T+"px",x.style.minHeight=T+"px",x.style.maxHeight=T+"px",x.style.overflow="hidden";const q=e.querySelector("#mobile-action-bar"),N=e.querySelector("#mobile-play-area");q&&N&&(N.style.paddingBottom=q.offsetHeight+"px")}if(f(),setTimeout(f,120),setTimeout(f,400),setTimeout(f,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",f),window.visualViewport.addEventListener("scroll",f)),window.addEventListener("resize",f)),function(){const T=e.querySelector(".terrain-wrapper svg");T&&(T.removeAttribute("width"),T.removeAttribute("height"),T.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",T.setAttribute("viewBox","-26 -26 352 352"),T.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const x=e.querySelector(".terrain-wrapper svg");x&&(x.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let x=!1,T=30;const q=()=>document.getElementById("match-timer"),N=()=>{const P=q();if(!P)return;const H=String(Math.floor(T/60)).padStart(2,"0"),W=String(T%60).padStart(2,"0");P.textContent=` ${H}:${W}`,P.style.color=x?"#ff2222":"#ff9500",P.style.fontWeight="900"};N(),t._timerInt=setInterval(()=>{if(T--,T<0)if(!x)x=!0,T=15,N();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const P=document.createElement("div");P.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",P.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(P),setTimeout(()=>{P.remove(),ve(e,t,i)},2500)}else N()},1e3)}(p=document.getElementById("match-quit"))==null||p.addEventListener("click",()=>{le(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,ve(e,t,i))}),(y=document.getElementById("view-ai"))==null||y.addEventListener("click",()=>lo(t,i)),(E=document.getElementById("toggle-history"))==null||E.addEventListener("click",()=>{var x;(x=document.getElementById("match-history-panel"))==null||x.classList.add("open")}),(h=document.getElementById("close-history"))==null||h.addEventListener("click",()=>{var x;(x=document.getElementById("match-history-panel"))==null||x.classList.remove("open")}),(g=document.getElementById("btn-action"))==null||g.addEventListener("click",()=>{t.selected.length!==0&&(l?to(e,t,i):n&&io(e,t,i))}),(v=document.getElementById("btn-results"))==null||v.addEventListener("click",()=>ve(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(x=>{x.addEventListener("click",()=>eo(x,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(x=>{x.addEventListener("click",()=>ro(x.dataset.gcId,x.dataset.gcType,e,t,i))}),(L=document.getElementById("boost-card"))==null||L.addEventListener("click",()=>so(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(x=>{x.addEventListener("click",()=>Ct(e,t,i,x.dataset.subId))}),(I=document.getElementById("sub-btn-main"))==null||I.addEventListener("click",()=>Ct(e,t,i))}function eo(e,t,i,s){const c=e.dataset.cardId,o=e.dataset.role,a=t.selected.findIndex(d=>d.cardId===c);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){s.toast("Maximum 3 joueurs","error");return}const d=(t.homeTeam[o]||[]).find(l=>l.cardId===c);d&&t.selected.push({...d,_role:o,_line:o})}oe(i,t,s)}function at(e,t,i){e.matchId&&k.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function to(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),at(t,i,i.state.profile.id);const s=t.selected.map(o=>({...(t.homeTeam[o._role]||[]).find(d=>d.cardId===o.cardId)||o,_line:o._role})),c=tt(s,t.modifiers.home);t.pendingAttack={...c,players:[...s],side:"home"},t.selected.forEach(o=>{const a=(t.homeTeam[o._role]||[]).find(d=>d.cardId===o.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${c.total} (base ${c.base}${c.links?` +${c.links} liens`:""}) — ${t.selected.map(o=>o.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",oe(e,t,i),setTimeout(()=>oo(e,t,i),1200)}function io(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),at(t,i,i.state.profile.id);const s=t.selected.map(d=>({...(t.homeTeam[d._role]||[]).find(n=>n.cardId===d.cardId)||d,_line:d._role})),c=it(s,t.modifiers.home);t.selected.forEach(d=>{const l=(t.homeTeam[d._role]||[]).find(n=>n.cardId===d.cardId);l&&(l.used=!0)});const o=ot(t.pendingAttack.total,c.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>({name:d.name,note:d._line==="MIL"?d.note_m:d.note_a,portrait:ne(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),homePlayers:t.selected.map(d=>{const l=(t.homeTeam[d._role]||[]).find(n=>n.cardId===d.cardId)||d;return{name:l.name,note:(l._line==="GK"?Number(l.note_g)||0:l._line==="MIL"?Number(l.note_m)||0:Number(l.note_d)||0)+(l.boost||0),portrait:ne(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(o.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(o.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,oe(e,t,i),st(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Le(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Le(e,t,i,"home-attack")}function Je(e,t,i){at(t,i,null);const s=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=qt(s,"attack",t.difficulty);if(!c.length){Qt(e,t,i);return}const o=tt(c,t.modifiers.ai);t.pendingAttack={...o,players:c,side:"ai"},c.forEach(n=>{n.used=!0}),t.log.push({text:`🤖 IA attaque : ${o.total} (${c.map(n=>n.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(n=>!n.used),l=(t.homeSubs||[]).filter(n=>!(t.usedSubIds||[]).includes(n.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!l){t.aiScore++;const n={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:ne(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:o.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(n),t.pendingAttack=null,oe(e,t,i),st(n.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Le(e,t,i,"home-attack")});return}t.phase="defense",oe(e,t,i)}function oo(e,t,i){const s=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=qt(s,"defense",t.difficulty),o=c.length>0?it(c,t.modifiers.ai).total:0;c.forEach(l=>{l.used=!0});const a=ot(t.pendingAttack.total,o,t.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:ne(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),aiPlayers:c.map(l=>({name:l.name,note:l._line==="GK"?l.note_g:l._line==="MIL"?l.note_m:l.note_d,portrait:ne(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:o,isGoal:!1,homeScored:!1,text:""};if(a.shielded)d.text="🛡️ Bouclier IA !",t.log.push(d);else if(a.goal){t.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${t.pendingAttack.total} > ${o})`,t.log.push(d),t.modifiers.ai={},t.pendingAttack=null,oe(e,t,i),st(d.homePlayers,t.homeScore,t.aiScore,!0,()=>{Le(e,t,i,"ai-attack")});return}else d.text=`🧤 IA défend (${o} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.modifiers.ai={},t.pendingAttack=null,Le(e,t,i,"ai-attack")}function Le(e,t,i,s){if(t.round++,Zt(t)){ve(e,t,i);return}if(s==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(o=>!o.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(a=>!a.used).length){ve(e,t,i);return}t.phase="ai-attack",oe(e,t,i),setTimeout(()=>Je(e,t,i),800);return}t.phase="attack",oe(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(o=>!o.used).length){Qt(e,t,i);return}t.phase="ai-attack",oe(e,t,i),setTimeout(()=>Je(e,t,i),800)}}function Zt(e){const t=["MIL","ATT","GK","DEF"].some(s=>(e.homeTeam[s]||[]).some(c=>!c.used)),i=["MIL","ATT","GK","DEF"].some(s=>(e.aiTeam[s]||[]).some(c=>!c.used));return!t&&!i}function Qt(e,t,i){Zt(t)?ve(e,t,i):(t.phase="attack",oe(e,t,i))}function no(e,t,i){const s=document.createElement("div");s.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=ne(e),o=ne(t),a=_e[e.job]||"#555",d=_e[t.job]||"#555",l=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,n=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;s.innerHTML=`
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
  `,document.body.appendChild(s);let r=!1;const u=()=>{r||(r=!0,s.remove(),i())};s.addEventListener("click",u),setTimeout(u,2e3)}function ke(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function Ct(e,t,i,s=null){if(t.phase!=="attack"){ke("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){ke(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const c=Object.values(t.homeTeam).flat().filter(u=>u.used),o=t.homeSubs.filter(u=>!t.usedSubIds.includes(u.cardId));if(!c.length){ke("Aucun joueur utilisé à remplacer");return}if(!o.length){ke("Aucun remplaçant disponible");return}let a=0,d=Math.max(0,o.findIndex(u=>u.cardId===s)),l=!1;const n=document.createElement("div");n.id="sub-overlay",n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function r(){var E,h,g,v,L,I;const u=c[a],m=o[d],f=Math.min(130,Math.round((window.innerWidth-90)/2)),$=Math.round(f*1.35),p=x=>`background:rgba(255,255,255,0.12);border:none;color:${x?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${x?"default":"pointer"};flex-shrink:0`;n.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${p(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${m?pe({...m,used:!1,boost:0},f,$):"<div>—</div>"}</div>
        <button id="in-down" style="${p(d>=o.length-1)}" ${d>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${o.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${p(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${u?pe({...u,used:!1,boost:0},f,$):"<div>—</div>"}</div>
        <button id="out-down" style="${p(a>=c.length-1)}" ${a>=c.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${c.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(E=n.querySelector("#sub-close"))==null||E.addEventListener("click",()=>n.remove()),(h=n.querySelector("#out-up"))==null||h.addEventListener("click",()=>{a>0&&(a--,r())}),(g=n.querySelector("#out-down"))==null||g.addEventListener("click",()=>{a<c.length-1&&(a++,r())}),(v=n.querySelector("#in-up"))==null||v.addEventListener("click",()=>{d>0&&(d--,r())}),(L=n.querySelector("#in-down"))==null||L.addEventListener("click",()=>{d<o.length-1&&(d++,r())});const y=(x,T,q,N)=>{const P=n.querySelector("#"+x);if(!P)return;let H=0;P.addEventListener("touchstart",W=>{H=W.touches[0].clientY},{passive:!0}),P.addEventListener("touchend",W=>{const V=W.changedTouches[0].clientY-H;if(Math.abs(V)<30)return;const ee=T();V<0&&ee<N-1?(q(ee+1),r()):V>0&&ee>0&&(q(ee-1),r())},{passive:!0})};y("in-panel",()=>d,x=>d=x,o.length),y("out-panel",()=>a,x=>a=x,c.length),(I=n.querySelector("#sub-confirm"))==null||I.addEventListener("click",x=>{if(x.preventDefault(),x.stopPropagation(),l)return;l=!0;const T=c[a],q=o[d];if(!T||!q)return;let N=null,P=-1;for(const[W,V]of Object.entries(t.homeTeam)){const ee=(V||[]).findIndex(C=>C.cardId===T.cardId);if(ee!==-1){N=W,P=ee;break}}if(P===-1||!N){ke("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),n.remove();return}const H={...q,_line:N,_col:T._col||0,used:!1,boost:0};t.homeTeam[N].splice(P,1,H),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(q.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:T.name,firstname:T.firstname,note:ie(T,N),portrait:ne(T),job:T.job,country_code:T.country_code,rarity:T.rarity,clubName:T.clubName,clubLogo:T.clubLogo},inPlayer:{name:q.name,firstname:q.firstname,note:ie(q,N),portrait:ne(q),job:q.job,country_code:q.country_code,rarity:q.rarity,clubName:q.clubName,clubLogo:q.clubLogo},text:`🔄 ${q.firstname} ${q.name} remplace ${T.firstname} ${T.name}`}),n.remove(),no(T,q,()=>oe(e,t,i))})}document.body.appendChild(n),r()}function ro(e,t,i,s,c){var $,p;const o=(s.gcDefs||[]).find(y=>y.name===t),a=de[t]||{icon:"⚡",desc:"Carte spéciale."},d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[o==null?void 0:o.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",l={purple:"#b06ce0",light_blue:"#00d4ef"}[o==null?void 0:o.color]||"#b06ce0",n=(o==null?void 0:o.name)||t,r=(o==null?void 0:o.effect)||a.desc,u=o!=null&&o.image_url?`/manager-wars/icons/${o.image_url}`:null,m=a.icon||"⚡",f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",f.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${l};background:${d};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${l}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${n.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${n}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${m}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${r}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(f),($=f.querySelector("#gc-back"))==null||$.addEventListener("click",()=>f.remove()),(p=f.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{f.remove(),ao(e,t,i,s,c)})}function ao(e,t,i,s,c){if(s.usedGc.includes(e))return;s.usedGc.push(e);const o=(s.gcDefs||[]).find(d=>d.name===t);let a=!1;if(o!=null&&o.effect_type&&o.effect_type!=="CUSTOM"){const d=GC_ENGINE[o.effect_type];d?d(o.effect_params||{},s,i,c)||(a=!0):(c.toast(`Effet "${o.effect_type}" non implémenté`,"error"),a=!0)}else{switch(t){case"Double attaque":s.modifiers.home.doubleAttack=!0,s.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":s.modifiers.home.shield=!0,s.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const d=Object.entries(s.homeTeam).flatMap(([l,n])=>(n||[]).filter(r=>r.used).map(r=>({...r,_line:l})));d.length?(d[0].used=!1,s.log.push({text:`💫 ${d[0].name} ressuscité !`,type:"info"})):s.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":s.modifiers.ai.stolenNote=(s.modifiers.ai.stolenNote||0)+1,s.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const d=[...s.aiTeam.ATT||[],...s.aiTeam.MIL||[]].filter(l=>!l.used);if(d.length){const l=d.sort((n,r)=>ie(r,"ATT")-ie(n,"ATT"))[0];l.used=!0,s.log.push({text:`❄️ ${l.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":s.maxSubs++,s.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}a=!0}k.from("cards").delete().eq("id",e).then(()=>{}),a&&oe(i,s,c)}function so(e,t,i){const s=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!s.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${s.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${_e[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ie(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const o=c.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const d=(t.homeTeam[a]||[]).find(l=>l.cardId===o);if(d){d.boost=(d.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),oe(e,t,i)})})}function st(e,t,i,s,c){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(n,r)=>`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${_e[n.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${n.portrait?`<img src="${n.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(n.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(o);let d=!1;const l=()=>{d||(d=!0,o.remove(),setTimeout(()=>c(),50))};o.addEventListener("click",l),setTimeout(l,3500)}async function ve(e,t,i){var r,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:s}=i,c=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,a=c?"victoire":o?"nul":"defaite",d=pi(t.mode,a);t.matchId&&await k.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?s.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",t.matchId);const l={credits:(s.profile.credits||0)+d,matches_played:(s.profile.matches_played||0)+1};c?l.wins=(s.profile.wins||0)+1:o?l.draws=(s.profile.draws||0)+1:l.losses=(s.profile.losses||0)+1,await k.from("users").update(l).eq("id",s.profile.id),await i.refreshProfile();const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",n.innerHTML=`
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
    </div>`,document.body.appendChild(n),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{n.remove(),le(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{n.remove(),le(e),i.navigate("match",{matchMode:t.mode})})}function lo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ie(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function co(e,t){const{state:i}=t;await Jt(e,t,"random",({deckId:c,formation:o,starters:a,subsRaw:d,gcCardsEnriched:l,gcDefs:n})=>{const r=u=>{po(e,t,c,o,a,d,u,n||[])};if(!l.length){r([]);return}Yt(e,l,r)})}async function po(e,t,i,s,c,o,a=[],d=[]){var h;const{state:l,navigate:n,toast:r}=t;let u=!1,m=null;e.style.overflow="hidden",e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler la recherche</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const f=()=>document.getElementById("mm-status"),$=async(g=!0)=>{u=!0,m&&(k.removeChannel(m),m=null),g&&await k.rpc("cancel_matchmaking",{p_user_id:l.profile.id}).catch(()=>{})};(h=document.getElementById("mm-cancel"))==null||h.addEventListener("click",async()=>{try{await $(!0)}catch(g){console.warn("[Matchmaking] cleanup error:",g)}le(e),n("home")});const p=async(g,v,L)=>{u||(u=!0,m&&(k.removeChannel(m),m=null),f()&&(f().textContent="Adversaire trouvé !"),await new Promise(I=>setTimeout(I,600)),e.isConnected!==!1&&uo(e,t,g,L,a,d))},{data:y,error:E}=await k.rpc("try_matchmake",{p_user_id:l.profile.id,p_deck_id:i});if(E||!(y!=null&&y.success)){r("Erreur de matchmaking","error"),le(e),n("home");return}if(y.matched){p(y.match_id,y.opponent_id,!1);return}f()&&(f().textContent="En attente d'un autre joueur..."),m=k.channel("matchmaking-"+l.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${l.profile.id}`},g=>{const v=g.new;v.status==="matched"&&v.match_id&&p(v.match_id,v.matched_with,!0)}).subscribe()}async function uo(e,t,i,s,c=[],o=[]){const{state:a,navigate:d,toast:l}=t,n=s?"p1":"p2",r=s?"p2":"p1",u=(c||[]).map(C=>C.id),m=(c||[]).map(C=>({id:C.id,gc_type:C.gc_type,_gcDef:C._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation du match...</div>';const{data:f}=await k.from("matches").select("*").eq("id",i).single();if(!f){l("Match introuvable","error"),d("home");return}async function $(){const[{data:C,error:z},{data:B,error:R},{data:j},{data:_}]=await Promise.all([k.rpc("get_deck_for_match",{p_deck_id:f.home_deck_id}),k.rpc("get_deck_for_match",{p_deck_id:f.away_deck_id}),k.from("users").select("id,pseudo,club_name").eq("id",f.home_id).single(),k.from("users").select("id,pseudo,club_name").eq("id",f.away_id).single()]);z&&console.error("[PvP] get_deck_for_match p1 error:",z),R&&console.error("[PvP] get_deck_for_match p2 error:",R);function b(F,K){return{cardId:F.card_id,position:K||F.position,id:F.id,firstname:F.firstname,name:F.surname_encoded,country_code:F.country_code,club_id:F.club_id,job:F.job,job2:F.job2,note_g:Number(F.note_g)||0,note_d:Number(F.note_d)||0,note_m:Number(F.note_m)||0,note_a:Number(F.note_a)||0,rarity:F.rarity,skin:F.skin,hair:F.hair,hair_length:F.hair_length,clubName:F.club_encoded_name||null,clubLogo:F.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}}const S=((C==null?void 0:C.starters)||[]).map(F=>b(F,F.position)),A=((B==null?void 0:B.starters)||[]).map(F=>b(F,F.position)),w=((C==null?void 0:C.subs)||[]).map(F=>b(F,F.position)),D=((B==null?void 0:B.subs)||[]).map(F=>b(F,F.position)),M=(C==null?void 0:C.formation)||"4-4-2",G=(B==null?void 0:B.formation)||"4-4-2";return console.log("[PvP] p1Formation:",M,"p1 starters:",S.length,"positions:",S.map(F=>F.position)),console.log("[PvP] p2Formation:",G,"p2 starters:",A.length,"positions:",A.map(F=>F.position)),{p1Team:Ne(S,M),p2Team:Ne(A,G),p1Subs:w,p2Subs:D,p1Formation:M,p2Formation:G,p1Name:(j==null?void 0:j.club_name)||(j==null?void 0:j.pseudo)||"Joueur 1",p2Name:(_==null?void 0:_.club_name)||(_==null?void 0:_.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?u:[],gc_p2:s?[]:u,gcCardsFull_p1:s?m:[],gcCardsFull_p2:s?[]:m,gcReady_p1:!0,gcReady_p2:!0,usedGc_p1:[],usedGc_p2:[],lastActionAt:new Date().toISOString()}}let p=f.game_state&&Object.keys(f.game_state).length?f.game_state:null;if(!p)if(s){p=await $();const{data:C}=await k.from("matches").select("game_state").eq("id",i).single();!(C!=null&&C.game_state)||!Object.keys(C.game_state).length?await k.from("matches").update({game_state:p,turn_user_id:f.home_id}).eq("id",i):p=C.game_state}else{e.innerHTML=`<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation avec l'adversaire...</div>`;for(let C=0;C<30&&!p;C++){await new Promise(B=>setTimeout(B,400));const{data:z}=await k.from("matches").select("game_state").eq("id",i).single();z!=null&&z.game_state&&Object.keys(z.game_state).length&&(p=z.game_state)}if(!p){l("Erreur de synchronisation","error"),d("home");return}p.gc_p2=u,p.gcCardsFull_p2=m,await k.from("matches").update({game_state:p}).eq("id",i)}let y=!1;function E(C){var S;try{k.removeChannel(h)}catch{}const z=a.profile.id,B=C.winner_id===z,R=!!C.forfeit,j=p[n+"Score"]??0,_=p[r+"Score"]??0,b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center",b.innerHTML=`
      <div style="font-size:64px">${B?"🏆":"😞"}</div>
      <div style="font-size:26px;font-weight:900;color:${B?"#FFD700":"#ff6b6b"}">${B?"VICTOIRE !":"DÉFAITE"}</div>
      <div style="font-size:18px;color:#fff">${p[n+"Name"]} ${j} – ${_} ${p[r+"Name"]}</div>
      ${R?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${B?"L'adversaire a quitté la partie":"Match perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(b),(S=b.querySelector("#pvp-end-home"))==null||S.addEventListener("click",()=>{b.remove(),le(e),d("home")})}const h=k.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},C=>{const z=C.new;try{if(z.status==="finished"||z.forfeit){if(y)return;y=!0,p._timerInt&&(clearInterval(p._timerInt),p._timerInt=null),z.game_state&&(p=z.game_state),E(z);return}z.game_state&&(p=z.game_state,L())}catch(B){console.error("[PvP] Realtime render crash:",B,"gameState:",p)}}).subscribe();async function g(C){Object.assign(p,C),p.lastActionAt=new Date().toISOString();const{error:z}=await k.from("matches").update({game_state:p}).eq("id",i);z&&(console.error("[PvP] pushState DB error:",z.message,z),l("Erreur de synchronisation : "+z.message,"error"));try{L()}catch(B){console.error("[PvP] renderPvpScreen crash après pushState:",B),l("Erreur d'affichage : "+B.message,"error")}}async function v(){if(y)return;y=!0,p._timerInt&&(clearInterval(p._timerInt),p._timerInt=null);const C=s?f.away_id:f.home_id;try{await k.from("matches").update({status:"finished",forfeit:!0,winner_id:C}).eq("id",i)}catch(z){console.warn("[PvP] forfeit DB error:",z)}try{k.removeChannel(h)}catch{}le(e),d("home")}function L(){var ut,ft,gt,mt,xt;const C=p[n+"Team"];p[r+"Team"];const z=p[n+"Score"],B=p[r+"Score"],R=p[n+"Name"],j=p[r+"Name"];if(p.phase==="gc-select")return I();if(p.phase==="reveal")return x();if(p.phase==="midfield")return T();if(p.phase==="finished")return W();const _=p.phase===n+"-attack",b=p.phase===n+"-defense",S=p.phase===r+"-attack"||p.phase===r+"-defense",A=Array.isArray(p["selected_"+n])?p["selected_"+n]:[],w=A.map(O=>O.cardId);e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const D=window.innerWidth>=700,M=p[n+"Subs"]||[],G=p["usedSubIds_"+n]||[],F=M.filter(O=>!G.includes(O.cardId)),K=p["gcCardsFull_"+n]||[],U=p["usedGc_"+n]||[],X=K.filter(O=>!U.includes(O.id)),te=p.boostOwner===n&&!p.boostUsed,re=(O,J,Q)=>{var bt,wt;const Y=O._gcDef,ce={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[Y==null?void 0:Y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ce={purple:"#b06ce0",light_blue:"#00d4ef"}[Y==null?void 0:Y.color]||"#b06ce0",ye=(Y==null?void 0:Y.name)||O.gc_type,oi=(Y==null?void 0:Y.effect)||((bt=de[O.gc_type])==null?void 0:bt.desc)||"",yt=Y!=null&&Y.image_url?`/manager-wars/icons/${Y.image_url}`:null,ni=((wt=de[O.gc_type])==null?void 0:wt.icon)||"⚡",ht=Math.round(Q*.22),vt=Math.round(Q*.22),Ke=Q-ht-vt,ri=ye.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${O.id}" data-gc-type="${O.gc_type}"
        style="width:${J}px;height:${Q}px;border-radius:10px;border:2px solid ${Ce};background:${ce};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${ht}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${ri}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${J-6}px">${ye}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Ke}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${yt?`<img src="${yt}" style="max-width:${J-10}px;max-height:${Ke-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ke*.55)}px">${ni}</span>`}
        </div>
        <div style="height:${vt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${oi.slice(0,38)}</span>
        </div>
      </div>`},ae=(O,J)=>`<div id="pvp-boost-card" style="width:${O}px;height:${J}px;flex-shrink:0;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px">
      <div style="font-size:${D?22:18}px">⚡</div>
      <div style="font-size:${D?11:9}px;color:#000;font-weight:900">+${p.boostValue}</div>
    </div>`,se=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${D?70:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${F.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':F.map(O=>`<div class="pvp-sub-btn" data-sub-id="${O.cardId}" style="cursor:pointer;flex-shrink:0">${pe(O,D?60:44,D?78:58)}</div>`).join("")}
    </div>`,me=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0" id="match-field">
      <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
        ${Te(C,p[n+"Formation"],_?"attack":b?"defense":"idle",w,300,300)}
      </div>
    </div>`,xe=D?"padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ze=_?`<button id="pvp-action" style="${xe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${A.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:b?`<button id="pvp-action" style="${xe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${A.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="${xe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour de ${j}</div>`,ct=_||b?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${A.length}/3 sélectionné(s)</div>`:"",ti=(()=>{const O=p.pendingAttack;if(b&&O&&Array.isArray(O.players))return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${j} ATTAQUE — Défendez !</div>
          ${Ee(O.players.map(ce=>({...ce,used:!1})),"#ff6b6b",O.total)}
        </div>`;const J=Array.isArray(p.log)?p.log:[],Q=J[J.length-1];return Q?`<div style="padding:7px 10px;border-left:3px solid ${Q.type==="goal"?"#FFD700":Q.type==="stop"?"#00ff88":Q.type==="attack"?"#ff6b6b":"rgba(255,255,255,0.6)"};font-size:12px;color:#fff">${Q.text||""}</div>`:'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),ii=(Array.isArray(p.log)?p.log:[]).length,pt=`
      <!-- Score -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:rgba(0,0,0,0.25);flex-shrink:0">
        <button id="pvp-quit" style="background:rgba(220,53,69,0.9);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer">✕</button>
        <div style="flex:1;text-align:center;color:#fff;font-size:14px;font-weight:700">
          ${R} <span style="color:#FFD700;font-size:18px">${z}</span> – <span style="color:#FFD700;font-size:18px">${B}</span> ${j}
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="text-align:center;padding:4px;background:rgba(0,0,0,0.15);font-size:11px;color:${S?"rgba(255,255,255,0.4)":"#FFD700"};font-weight:700;flex-shrink:0">
        ${S?`⏳ Tour de ${j}`:_?"⚔️ À vous d'attaquer !":b?"🛡️ À vous de défendre !":""}
      </div>
      <!-- Zone actions -->
      <div id="pvp-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">${ti}</div>
      <!-- Bouton historique -->
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${ii})
      </button>`;if(D)e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
        ${pt}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${se}
          ${me}
          <div style="width:150px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            <div style="width:100%">${ze}${ct}</div>
            <div style="width:100%;height:1px;background:rgba(255,255,255,0.1)"></div>
            ${te?ae(110,90):""}
            ${X.map(O=>re(O,110,150)).join("")}
          </div>
        </div>
      </div>`;else{e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
        ${pt}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${se}
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden"></div>
          </div>
        </div>
        <!-- ZONE BAS : cartes GC en ligne + bouton pleine largeur (comme vs IA) -->
        <div style="flex-shrink:0;background:rgba(0,0,0,0.35);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${X.map(J=>re(J,68,95)).join("")}
            ${te?ae(68,95):""}
          </div>
          <div>${ze}${ct}</div>
        </div>
      </div>`;const O=e.querySelector(".terrain-wrapper");O&&(O.innerHTML=Te(C,p[n+"Formation"],_?"attack":b?"defense":"idle",w,300,300))}if(e.querySelectorAll(".match-slot-hit").forEach(O=>{O.addEventListener("click",()=>{if(!_&&!b)return;const J=O.dataset.cardId,Q=O.dataset.role,Y=(C[Q]||[]).find(ye=>ye.cardId===J);if(!Y||Y.used)return;Array.isArray(p["selected_"+n])||(p["selected_"+n]=[]);const ce=p["selected_"+n],Ce=ce.findIndex(ye=>ye.cardId===J);Ce>-1?ce.splice(Ce,1):ce.length<3&&ce.push({...Y,_role:Q}),L()})}),(ut=e.querySelector("#pvp-boost-card"))==null||ut.addEventListener("click",()=>{q()}),e.querySelectorAll(".pvp-gc-mini").forEach(O=>{O.addEventListener("click",()=>{H(O.dataset.gcId,O.dataset.gcType)})}),(ft=e.querySelector("#pvp-action"))==null||ft.addEventListener("click",()=>{_?V():b&&ee()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter le match ? Vous perdrez par forfait.")&&v()}),(mt=e.querySelector("#pvp-view-opp"))==null||mt.addEventListener("click",()=>{P()}),(xt=e.querySelector("#pvp-toggle-history"))==null||xt.addEventListener("click",()=>{N()}),function(){const J=e.querySelector(".terrain-wrapper svg");J&&(J.removeAttribute("width"),J.removeAttribute("height"),J.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",J.setAttribute("viewBox","-26 -26 352 352"),J.setAttribute("preserveAspectRatio","xMidYMid meet"));const Q=e.querySelector(".match-screen");if(Q){const Y=e.clientHeight;Y>50&&(Q.style.height=Y+"px",Q.style.maxHeight=Y+"px",Q.style.overflow="hidden")}}(),p._timerInt&&(clearInterval(p._timerInt),p._timerInt=null),(_||b)&&!y){let O=30,J=!1;const Q=()=>document.getElementById("pvp-timer"),Y=()=>{Q()&&(Q().textContent=O+"s",Q().style.color=J?"#ff4444":"#fff")};Y(),p._timerInt=setInterval(()=>{O--,O<0?J?(clearInterval(p._timerInt),p._timerInt=null,v()):(J=!0,O=15,Y()):Y()},1e3)}}function I(){var b;const C=p["gcReady_"+n],z=p["gcReady_"+r];Array.isArray(p["gc_"+n])||(p["gc_"+n]=[]);let B=p["gc_"+n];const R=3;function j(S,A){const w=S._gcDef,D={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},M={purple:"#9b59b6",light_blue:"#00bcd4"},G=D[w==null?void 0:w.color]||D.purple,F=M[w==null?void 0:w.color]||M.purple;return`<div class="pvp-gc-card" data-id="${S.id}"
        style="width:100px;border-radius:10px;border:3px solid ${A?"#FFD700":F};background:${G};
          display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
          box-shadow:${A?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
          transform:${A?"scale(1.06)":"scale(1)"};transition:all 0.15s">
        <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:${((w==null?void 0:w.name)||S.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(w==null?void 0:w.name)||S.gc_type}</span>
        </div>
        <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
          ${w!=null&&w.image_url?`<img src="/manager-wars/icons/${w.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
        </div>
        <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((w==null?void 0:w.effect)||"").slice(0,50)}</span>
        </div>
        ${A?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
      </div>`}if(e.style.overflow="hidden",e.innerHTML=`
    <div id="pvp-gc-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Sélectionne <b style="color:#FFD700">${R}</b> cartes · ${B.length}/${R}
        </div>
      </div>
      ${C?`
      <div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px">
        <div style="font-size:32px">✅</div>
        <div style="color:#fff;font-size:14px">Prêt ! ${z?"Adversaire aussi.":`En attente de ${p[r+"Name"]}...`}</div>
      </div>`:`
      <div id="pvp-gc-grid" style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px"></div>
      <div style="padding:10px 16px 14px;flex-shrink:0">
        <button id="pvp-gc-validate" style="width:100%;padding:14px;border-radius:14px;border:none;background:linear-gradient(135deg,#5a0a9a,#9a28e8);color:#fff;font-size:15px;font-weight:900;cursor:pointer">
          ${B.length?`⚡ Valider (${B.length} GC)`:"▶ Continuer sans GC"}
        </button>
      </div>`}
    </div>`,C)return;const _=n==="p1"?f.home_id:f.away_id;k.from("cards").select("id,gc_type").eq("owner_id",_).eq("card_type","game_changer").then(async({data:S})=>{const{data:A}=await k.from("gc_definitions").select("*").eq("is_active",!0),w=new Set,D=(S||[]).filter(G=>w.has(G.gc_type)?!1:(w.add(G.gc_type),!0)).map(G=>({...G,_gcDef:(A==null?void 0:A.find(F=>F.name===G.gc_type))||null})),M=document.getElementById("pvp-gc-grid");if(M){if(!D.length){M.innerHTML='<div style="color:rgba(255,255,255,0.4);font-size:13px;text-align:center;margin-top:30px">Aucune carte Game Changer disponible.</div>';return}M.innerHTML=D.map(G=>j(G,B.includes(G.id))).join(""),M.querySelectorAll(".pvp-gc-card").forEach(G=>{G.addEventListener("click",()=>{const F=G.dataset.id,K=B.indexOf(F);K>-1?B.splice(K,1):B.length<R&&B.push(F),L()})})}}),(b=e.querySelector("#pvp-gc-validate"))==null||b.addEventListener("click",async()=>{const S=n==="p1"?f.home_id:f.away_id,{data:A}=await k.from("cards").select("id,gc_type").eq("owner_id",S).eq("card_type","game_changer").in("id",B),{data:w}=await k.from("gc_definitions").select("*").eq("is_active",!0),D=(A||[]).map(M=>({...M,_gcDef:(w==null?void 0:w.find(G=>G.name===M.gc_type))||null}));await g({["gcReady_"+n]:!0,["gcCardsFull_"+n]:D}),p["gcReady_"+r]&&await g({phase:"reveal"})})}function x(){e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Ie(p[r+"Team"],p[r+"Formation"],null,[],300,300)}</div>
      <div style="font-size:15px;color:rgba(255,255,255,0.7)">
        <span class="loading-dots">Chargement</span>
      </div>
      <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
    </div>`,n==="p1"&&setTimeout(async()=>{await g({phase:"midfield"})},5e3)}function T(){const C=p[n+"Team"].MIL||[],z=p[r+"Team"].MIL||[];function B(A){return A.reduce((w,D)=>w+ie(D,"MIL"),0)}function R(A){let w=0;for(let D=0;D<A.length-1;D++){const M=ge(A[D],A[D+1]);M==="#00ff88"?w+=2:M==="#FFD700"&&(w+=1)}return w}const j=B(C)+R(C),_=B(z)+R(z),b=j>=_;function S(A,w,D){return`<div style="text-align:center">
        <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${w}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${A.map((M,G)=>{const F=ne(M),K=G<A.length-1?ge(M,A[G+1]):null,U=K&&K!=="#ff3333"&&K!=="#cc2222";return`
            <div style="width:52px;height:52px;border-radius:8px;background:${D};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
              ${F?`<img src="${F}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
              <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${ie(M,"MIL")}</div>
              <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${M.name}</div>
            </div>
            ${K?`<div style="width:14px;height:4px;border-radius:2px;background:${K};flex-shrink:0;opacity:${U?.9:.3}"></div>`:""}
            `}).join("")}
        </div>
        <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
          Score: ${B(A)} + ${R(A)} liens = <b style="color:#fff">${B(A)+R(A)}</b>
        </div>
      </div>`}e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
      <div style="text-align:center;color:#fff">
        <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
      </div>

      ${S(C,p[n+"Name"],"#D4A017")}

      <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${j}</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${_}</div>
      </div>

      ${S(z,p[r+"Name"],"#bb2020")}

      <div id="pvp-midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
    </div>`,setTimeout(()=>{const A=document.getElementById("pvp-score-me"),w=document.getElementById("pvp-score-opp"),D=document.getElementById("pvp-midfield-result");A&&w&&(b?(A.style.fontSize="80px",A.style.color="#FFD700",w.style.opacity="0.25"):(w.style.fontSize="80px",w.style.color="#ff6b6b",A.style.opacity="0.25"));const M=p.p1Team.MIL||[],G=p.p2Team.MIL||[],F=B(M)+R(M),K=B(G)+R(G),U=F>=K?"p1":"p2";p[U+"Name"];let X=p.boostValue;X==null&&(X=Ut(),p.boostValue=X,p.boostOwner=U,p.boostUsed=!1),D&&(D.style.opacity="1",D.innerHTML=`<div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${b?`${p[n+"Name"]} gagne le milieu de terrain et attaque !`:`${p[r+"Name"]} gagne l'engagement et attaque !`}
        </div>
        ${b?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px" id="pvp-boost-display">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${X}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}`),setTimeout(async()=>{if(n!=="p1")return;const te=U;await g({phase:te+"-attack",attacker:te,round:1,boostValue:p.boostValue,boostUsed:!1,boostOwner:te})},1800)},600)}function q(){var R;const C=p[n+"Team"],z=Object.entries(C).flatMap(([j,_])=>(_||[]).filter(b=>!b.used).map(b=>({...b,_line:j})));if(!z.length)return;const B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",B.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="boost-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${z.map(j=>{const _={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[j._line]||"#555",b=ie(j,j._line)+(j.boost||0);return`<div class="boost-pick-item" data-cid="${j.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${_};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${j.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${b}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(B),(R=B.querySelector("#boost-picker-close"))==null||R.addEventListener("click",()=>B.remove()),B.querySelectorAll(".boost-pick-item").forEach(j=>{j.addEventListener("click",async()=>{const _=j.dataset.cid,b=z.find(w=>w.cardId===_);if(!b)return;const S=p[n+"Team"],A=(S[b._line]||[]).find(w=>w.cardId===_);A&&(A.boost=(A.boost||0)+p.boostValue),B.remove(),await g({[n+"Team"]:S,boostUsed:!0})})})}function N(){var B;const C=Array.isArray(p.log)?p.log:[],z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",z.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${C.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...C].reverse().map(R=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${R.type==="goal"?"#FFD700":R.type==="defense"?"#00ff88":"rgba(255,255,255,0.5)"}">
                <div style="font-size:12px;color:#fff">${R.text||""}</div>
              </div>`).join("")}
      </div>`,document.body.appendChild(z),(B=z.querySelector("#pvp-hist-close"))==null||B.addEventListener("click",()=>z.remove())}function P(){var z;const C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",C.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Ie(p[r+"Team"],p[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-view-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(C),(z=C.querySelector("#pvp-view-opp-close"))==null||z.addEventListener("click",()=>C.remove())}function H(C,z){var F,K;const R=(p["gcCardsFull_"+n]||[]).find(U=>U.id===C),j=R==null?void 0:R._gcDef,_=de[z]||{icon:"⚡",desc:"Carte spéciale."},b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[j==null?void 0:j.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",S={purple:"#b06ce0",light_blue:"#00d4ef"}[j==null?void 0:j.color]||"#b06ce0",A=(j==null?void 0:j.name)||z,w=(j==null?void 0:j.effect)||_.desc,D=j!=null&&j.image_url?`/manager-wars/icons/${j.image_url}`:null,M=_.icon||"⚡",G=document.createElement("div");G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",G.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${S};background:${b};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${S}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${A.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${A}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${D?`<img src="${D}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${M}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${w}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(G),(F=G.querySelector("#pvp-gc-back"))==null||F.addEventListener("click",()=>G.remove()),(K=G.querySelector("#pvp-gc-use"))==null||K.addEventListener("click",async()=>{G.remove();const U=p["usedGc_"+n]||[];U.push(C),await g({["usedGc_"+n]:U})})}function W(){var j;const C=p[n+"Score"],z=p[r+"Score"],B=C>z,R=C===z;e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${B?"🏆":R?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${B?"Victoire !":R?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${C} - ${z}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour à l'accueil</button>
    </div>`,(j=document.getElementById("pvp-home"))==null||j.addEventListener("click",()=>{k.removeChannel(h),le(e),d("home")})}async function V(){const C=(p["selected_"+n]||[]).map(R=>({...(p[n+"Team"][R._role]||[]).find(_=>_.cardId===R.cardId)||R,_line:R._role}));if(!C.length)return;const z=tt(C,p.modifiers[n]||{});C.forEach(R=>{const j=(p[n+"Team"][R._role]||[]).find(_=>_.cardId===R.cardId);j&&(j.used=!0)});const B=Array.isArray(p.log)?p.log:[];B.push({type:"attack",text:`⚔️ ${p[n+"Name"]} attaque (${z.total})`,players:C,total:z.total,side:n}),await g({pendingAttack:{...z,players:C,side:n},["selected_"+n]:[],modifiers:{...p.modifiers,[n]:{}},phase:r+"-defense",log:B})}async function ee(){const C=(p["selected_"+n]||[]).map(D=>({...(p[n+"Team"][D._role]||[]).find(G=>G.cardId===D.cardId)||D,_line:D._role})),z=it(C,p.modifiers[n]||{});C.forEach(D=>{const M=(p[n+"Team"][D._role]||[]).find(G=>G.cardId===D.cardId);M&&(M.used=!0)});const B=ot(p.pendingAttack.total,z.total,p.modifiers[n]||{}),R=p.pendingAttack.side,j=B==="attack",_=p[R+"Score"]+(j?1:0),b=R==="p1"?"p2":"p1",S=(p.round||0)+1,A=S>10,w=Array.isArray(p.log)?p.log:[];w.push({type:"defense",text:`🛡️ ${p[n+"Name"]} défend (${z.total})`,players:C,total:z.total,side:n}),w.push({type:j?"goal":"stop",text:j?`⚽ BUT de ${p[R+"Name"]} ! (${p.pendingAttack.total} vs ${z.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${z.total})`}),await g({[R+"Score"]:_,["selected_"+n]:[],modifiers:{...p.modifiers,[n]:{}},pendingAttack:null,phase:A?"finished":b+"-attack",attacker:b,round:S,log:w}),A&&await k.from("matches").update({status:"finished"}).eq("id",i)}L()}const fo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function go(e,t){const{state:i,toast:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await dt(e,t)}async function dt(e,t){const{state:i,toast:s}=t,{data:c}=await k.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:o}=await k.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
  `;function l(n){const r=document.getElementById("mkt-content"),u=n==="buy"?a:d;if(u.length===0){r.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${n==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const m=n==="mine"?[...u].sort((f,$)=>f.status!==$.status?f.status==="active"?-1:1:new Date($.listed_at)-new Date(f.listed_at)):u;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${m.map(f=>{var g,v,L,I;const $=(g=f.card)==null?void 0:g.player;if(!$)return"";const p=$.job==="GK"?$.note_g:$.job==="DEF"?$.note_d:$.job==="MIL"?$.note_m:$.note_a,y=fo[$.rarity],E=(i.profile.credits||0)>=f.price,h=f.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${h?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${yo($.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${y};flex-shrink:0">${p}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${$.firstname} ${$.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${$.country_code} · ${((v=$.clubs)==null?void 0:v.encoded_name)||"—"} · ${$.rarity} · ${$.job}</div>
            ${n==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((L=f.seller)==null?void 0:L.pseudo)||"—"}</div>`:h?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((I=f.buyer)==null?void 0:I.pseudo)||"—"} · ${f.sold_at?new Date(f.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(f.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${f.price.toLocaleString("fr")}</div>
            ${n==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${f.id}" ${E?"":"disabled"} style="margin-top:4px">${E?"Acheter":"Trop cher"}</button>`:h?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${f.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(f=>{f.addEventListener("click",()=>mo(f.dataset.buy,u,e,t))}),r.querySelectorAll("[data-cancel]").forEach(f=>{f.addEventListener("click",()=>xo(f.dataset.cancel,e,t))})}l("buy"),e.querySelectorAll(".mkt-tab").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const u=r===n;r.style.background=u?"var(--green)":"#fff",r.style.color=u?"#fff":"var(--gray-600)",r.style.borderColor=u?"var(--green)":"var(--gray-200)"}),l(n.dataset.tab)})})}async function mo(e,t,i,s){var u;const{state:c,toast:o}=s,a=t.find(m=>m.id===e);if(!a)return;const d=a.price,l=c.profile.credits||0,n=(u=a.card)==null?void 0:u.player;if(l<d){o("Crédits insuffisants","error");return}if(!confirm(`Acheter ${n==null?void 0:n.firstname} ${n==null?void 0:n.surname_encoded} pour ${d.toLocaleString("fr")} crédits ?`))return;const r=document.querySelector(`[data-buy="${e}"]`);r&&(r.disabled=!0,r.textContent="⏳");try{const{data:m,error:f}=await k.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(f)throw new Error(f.message);if(!(m!=null&&m.success))throw new Error((m==null?void 0:m.error)||"Achat impossible");c.profile.credits=l-d;const $=document.querySelector("[data-credits]")||document.querySelector(".credits-display");$&&($.textContent=(l-d).toLocaleString("fr")+" cr."),o(`✅ ${n==null?void 0:n.surname_encoded} ajouté à ta collection !`,"success"),dt(i,s)}catch(m){o("❌ "+m.message,"error"),r&&(r.disabled=!1,r.textContent="Acheter")}}async function xo(e,t,i){const{toast:s}=i,{data:c}=await k.from("market_listings").select("card_id").eq("id",e).single();await k.from("market_listings").update({status:"cancelled"}).eq("id",e),c&&await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id),s("Annonce retirée","success"),dt(t,i)}function yo(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function ho(e,{state:t,navigate:i,toast:s}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await k.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function vo(e,{state:t,navigate:i,toast:s}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await k.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(o||[]).filter(r=>r.status==="finished"),l=(o||[]).filter(r=>r.status==="in_progress");function n(r){const u=r.home_id===c.id;u?r.home_score:r.away_score,u?r.away_score:r.home_score;const m=r.winner_id===c.id,f=r.home_score===r.away_score&&r.status==="finished",$=r.status!=="finished"?"…":f?"N":m?"V":"D",p=r.status!=="finished"||f?"#888":m?"#1A6B3C":"#c0392b";let y=a[r.mode]||r.mode;r.away_id===null&&!y.startsWith("IA")&&(y="IA");const h=r.home_id===c.id?r.away:r.home;let g;r.away_id===null?g=y:h?g=`${h.club_name||h.pseudo} (${h.pseudo})`:g="Adversaire";let v="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(v=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const L=new Date(r.created_at),I=L.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+L.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),x=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${g}${v}</div>
        <div style="font-size:11px;color:var(--gray-600)">${y} · ${I}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${x}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${$}</span>
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
  </div>`}const Z={user:null,profile:null,page:"home",params:{}};function Be(e,t="info",i=3e3){const s=document.getElementById("toast");s&&(s.textContent=e,s.className=`show ${t}`,clearTimeout(s._t),s._t=setTimeout(()=>{s.className=""},i))}function bo(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Ze(){document.getElementById("modal-overlay").classList.add("hidden")}async function Fe(){if(!Z.user)return;const{data:e}=await k.from("users").select("*").eq("id",Z.user.id).single();e&&(Z.profile=e)}const lt="mw_theme";function Pe(){return localStorage.getItem(lt)||"light"}function wo(e){var t;localStorage.setItem(lt,e),Qe(e),(t=Z.profile)!=null&&t.id&&k.from("users").update({theme:e}).eq("id",Z.profile.id).then(()=>{})}function Qe(e){document.documentElement.setAttribute("data-theme",e)}function De(e,t={}){Z.page=e,Z.params=t,ei()}async function ei(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===Z.page)});const t=document.getElementById("nav-credits");t&&Z.profile&&(t.textContent=`💰 ${(Z.profile.credits||0).toLocaleString("fr")}`);const i={state:Z,navigate:De,toast:Be,openModal:bo,closeModal:Ze,refreshProfile:Fe};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Z.page){case"home":await kt(e,i);break;case"collection":await gi(e,i);break;case"decks":await Ve(e,i);break;case"boosters":await Ci(e,i);break;case"match":{(Z.params&&Z.params.matchMode||"vs_ai_easy")==="random"?await co(e,i):await Yi(e,i);break}case"market":await go(e,i);break;case"rankings":await ho(e,i);break;case"matches":await vo(e,i);break;default:await kt(e,i)}}function _o(){const e=document.getElementById("app"),t=Z.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(s=>{s.addEventListener("click",c=>{c.preventDefault(),De(s.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>De("home")),document.getElementById("nav-credits").addEventListener("click",()=>De("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const c=Pe()==="dark"?"light":"dark";wo(c),jt(c)}),jt(Pe())}function jt(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function $o(){Qe(Pe()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&Ze()}),document.getElementById("modal-close").addEventListener("click",Ze);const{data:{session:e}}=await k.auth.getSession();if(!e){Bt(),_t(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Be});return}Z.user=e.user,await Fe(),Bt();try{const{data:t}=await k.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(s=>{i[s.formation]=s.links}),ai(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!Z.profile){si(document.getElementById("app"),{state:Z,navigate:async()=>{await Fe(),St()},toast:Be,refreshProfile:Fe});return}Z.profile.theme&&Z.profile.theme!==Pe()&&(localStorage.setItem(lt,Z.profile.theme),Qe(Z.profile.theme)),St(),k.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(Z.user=null,Z.profile=null,document.getElementById("app").innerHTML="",_t(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Be}))})}function ko(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function He(){const e=document.getElementById("app");e&&(e.style.height=ko()+"px")}window.addEventListener("resize",He);window.addEventListener("orientationchange",()=>setTimeout(He,150));window.visualViewport&&window.visualViewport.addEventListener("resize",He);function St(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",He(),_o(),ei()}function Bt(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}$o();
