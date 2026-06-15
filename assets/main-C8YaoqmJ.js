import{s as w,l as U,F as ie,b as we,c as ye,d as rt}from"./formation-links-CDBKB_z4.js";function ze(t,{navigate:e,toast:i}){t.innerHTML=`
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
  `,t.querySelectorAll(".auth-tab").forEach(o=>{o.addEventListener("click",()=>{t.querySelectorAll(".auth-tab").forEach(a=>a.classList.remove("active")),o.classList.add("active"),document.getElementById("tab-login").style.display=o.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=o.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const o=document.getElementById("login-email").value.trim(),a=document.getElementById("login-password").value,n=document.getElementById("login-error");if(n.textContent="",!o||!a){n.textContent="Remplissez tous les champs.";return}const s=document.getElementById("login-btn");s.textContent="Connexion…",s.disabled=!0;const{error:c}=await w.auth.signInWithPassword({email:o,password:a});if(s.textContent="Se connecter",s.disabled=!1,c){n.textContent=c.message.includes("Invalid")?"Email ou mot de passe incorrect.":c.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",o=>{o.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const o=document.getElementById("reg-email").value.trim(),a=document.getElementById("reg-password").value,n=document.getElementById("reg-confirm").value,s=document.getElementById("reg-error");if(s.textContent="",!o||!a||!n){s.textContent="Remplissez tous les champs.";return}if(a.length<6){s.textContent="Mot de passe trop court (min. 6 caractères).";return}if(a!==n){s.textContent="Les mots de passe ne correspondent pas.";return}const c=document.getElementById("reg-btn");c.textContent="Création…",c.disabled=!0;const{error:r}=await w.auth.signUp({email:o,password:a});if(c.textContent="Créer mon compte",c.disabled=!1,r){s.textContent=r.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=o})}function at(t,{state:e,navigate:i,toast:o,refreshProfile:a}){let n="#1A6B3C",s="#D4A017";t.innerHTML=`
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
  `;function c(){var m;const l=document.getElementById("logo-preview"),d=document.getElementById("logo-initials"),p=((m=document.getElementById("setup-club"))==null?void 0:m.value)||"MW",f=p.trim().split(" ").filter(Boolean),u=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():p.slice(0,2).toUpperCase();l&&(l.style.background=s,l.style.borderColor=n),d&&(d.textContent=u,d.style.color=n)}document.getElementById("color1").addEventListener("input",l=>{n=l.target.value,document.getElementById("swatch1").style.background=n,c()}),document.getElementById("color2").addEventListener("input",l=>{s=l.target.value,document.getElementById("swatch2").style.background=s,c()});function r(l){document.querySelectorAll(".setup-step").forEach(d=>d.classList.remove("active")),document.getElementById(`step-${l}`).classList.add("active"),document.getElementById("step-num").textContent=l,document.getElementById("progress-fill").style.width=`${Math.round(l/3*100)}%`,l===3&&c()}document.getElementById("step1-next").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("step1-error");if(d.textContent="",l.length<3){d.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:p}=await w.from("users").select("id").eq("pseudo",l).maybeSingle();if(p){d.textContent="Ce pseudo est déjà pris.";return}r(2)}),document.getElementById("step2-back").addEventListener("click",()=>r(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const l=document.getElementById("setup-club").value.trim(),d=document.getElementById("step2-error");if(d.textContent="",l.length<2){d.textContent="Nom trop court (min. 2 caractères).";return}const{data:p}=await w.from("users").select("id").eq("club_name",l).maybeSingle();if(p){d.textContent="Ce nom de club est déjà pris.";return}r(3)}),document.getElementById("step3-back").addEventListener("click",()=>r(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("setup-club").value.trim(),p=document.getElementById("step3-error"),f=document.getElementById("step3-finish");p.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:u}=await w.from("users").insert({id:e.user.id,pseudo:l,club_name:d,club_color1:n,club_color2:s,credits:1e4});if(u)throw u;await st(e.user.id),await a(),o(`Bienvenue ${l} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(u){p.textContent=u.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function st(t){const{data:e}=await w.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!e||e.length===0)return;const i=e,o=i.filter(r=>r.job==="GK"),a=i.filter(r=>r.job!=="GK"),n=[];for(let r=0;r<5;r++){let l=[];if(r===0&&o.length>0){const d=o[Math.floor(Math.random()*o.length)];l.push(d);const p=Ce([...a]).slice(0,3);l.push(...p)}else l=Ce([...i]).slice(0,4);l.forEach(d=>{n.push({owner_id:t,player_id:d.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(r=>{n.push({owner_id:t,card_type:"game_changer",gc_type:r})});const c=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];n.push({owner_id:t,card_type:"formation",formation:c[Math.floor(Math.random()*c.length)]}),n.length>0&&await w.from("cards").insert(n),await w.from("users").update({first_booster_opened:!0}).eq("id",t)}function Ce(t){for(let e=t.length-1;e>0;e--){const i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}async function je(t,{state:e,navigate:i,toast:o}){var s,c;const a=e.profile;if(!a)return;const{data:n}=await w.from("matches").select("id,home_score,away_score,status,mode,winner_id,created_at").or(`home_id.eq.${a.id},away_id.eq.${a.id}`).eq("status","finished").order("created_at",{ascending:!1}).limit(3);t.innerHTML=`
  <div class="page">
    <div class="page-body">

      <!-- Bandeau pseudo (couleurs du club) -->
      <div class="hero hero-compact" style="background:${a.club_color1};border:2px solid ${a.club_color2}">
        <button class="nav-rankings-btn" id="nav-rankings" title="Classement">
          <img src="/manager-wars/icons/badge-trophy.png" alt="Classement">
        </button>
        <div class="info">
          <h3 style="margin:0">${a.pseudo}</h3>
          <div class="level">Niveau ${a.level} · ${a.club_name}</div>
        </div>
        <button class="nav-rankings-btn" id="nav-matches" title="Tous les matchs" style="background:rgba(255,255,255,0.15)">
          <span style="font-size:22px">⚽</span>
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

      <!-- Derniers matchs -->
      ${n&&n.length>0?`
      <div>
        <div class="section-title">⚽ Derniers matchs</div>
        <div class="card-panel" style="padding:0">
          ${n.map(r=>{const l=r.winner_id===a.id,d=r.home_score===r.away_score,p=d?"N":l?"V":"D",f=d?"#888":l?"#1A6B3C":"#c0392b",u={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat"}[r.mode]||r.mode,$=new Date(r.created_at).toLocaleDateString("fr",{month:"short",day:"numeric"});return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
              <div>
                <div style="font-size:13px;font-weight:600">${u}</div>
                <div style="font-size:11px;color:var(--gray-600)">${$}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <span style="font-size:14px;font-weight:700">${r.home_score} - ${r.away_score}</span>
                <span style="background:${f};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${p}</span>
              </div>
            </div>`}).join("")}
        </div>
      </div>`:""}

      <!-- Logout -->
      <div style="text-align:center;padding:12px 0;display:flex;flex-direction:column;gap:8px;align-items:center">
        <button class="btn btn-ghost btn-sm" id="logout-btn" style="color:var(--gray-600)">Déconnexion</button>
        ${a.is_admin?`
        <a href="/manager-wars/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:6px 16px;border-radius:8px">
          ⚙️ Admin Editor
        </a>`:""}
      </div>

    </div>
  </div>
  `,t.querySelectorAll("[data-nav]").forEach(r=>{r.addEventListener("click",l=>{l.preventDefault(),i(r.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>i("rankings")),(c=document.getElementById("nav-matches"))==null||c.addEventListener("click",()=>i("matches")),t.querySelectorAll("[data-action]").forEach(r=>{r.addEventListener("click",()=>{if(r.classList.add("tapped"),setTimeout(()=>r.classList.remove("tapped"),200),r.dataset.action==="match-ai"){dt(i);return}o("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await w.auth.signOut(),window.location.reload()})}function dt(t){const e=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${e.map(a=>`
            <div class="action-card" data-mode="${a.mode}" style="cursor:pointer">
              <div class="icon">${a.icon}</div>
              <div class="label">${a.label}</div>
              <div class="sub">${a.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",o),i.addEventListener("click",a=>{a.target===i&&o()}),i.querySelectorAll("[data-mode]").forEach(a=>{a.addEventListener("click",()=>{o(),t("match",{matchMode:a.dataset.mode})})})}const oe={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function D(t,e){if(!t)return 0;switch(e){case"GK":return Number(t.note_g)||0;case"DEF":return Number(t.note_d)||0;case"MIL":return Number(t.note_m)||0;case"ATT":return Number(t.note_a)||0;default:return 0}}function Pe(t){let e=0;for(let i=0;i<t.length-1;i++){const o=t[i],a=t[i+1];if(!o||!a)continue;const n=U(o,a);n==="#00ff88"?e+=2:n==="#FFD700"&&(e+=1)}return e}function Ke(t,e={}){const i=t.reduce((n,s)=>{const c=s._line||s.job;return n+(Number(c==="MIL"?s.note_m:s.note_a)||0)+(Number(s.boost)||0)},0),o=Pe(t);let a=i+o;return e.doubleAttack&&(a*=2),e.stolenNote&&(a-=e.stolenNote),{base:i,links:o,total:Math.max(0,a)}}function He(t,e={}){const i=t.reduce((n,s)=>{const c=s._line||s.job;let r=0;return c==="GK"?r=Number(s.note_g)||0:c==="MIL"?r=Number(s.note_m)||0:r=Number(s.note_d)||0,n+r+(Number(s.boost)||0)},0),o=Pe(t);let a=i+o;return e.stolenNote&&(a-=e.stolenNote),{base:i,links:o,total:Math.max(0,a)}}function Ue(t,e,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:t>e,shielded:!1}}function Ve(t,e,i="easy"){const o=t.filter(s=>!s.used);if(!o.length)return[];const a=[...o].sort((s,c)=>{const r=e==="attack"?D(s,"ATT"):s._line==="GK"?D(s,"GK"):D(s,"DEF");return(e==="attack"?D(c,"ATT"):c._line==="GK"?D(c,"GK"):D(c,"DEF"))-r});let n=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return a.slice(0,Math.min(n,a.length,3))}function lt(t,e){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[t]||i.vs_ai_easy)[e]||0}const Ye={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},fe={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ae=["GK","DEF","MIL","ATT"],ct=["Tous","GK","DEF","MIL","ATT"],pt={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},ke={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function We(t){const e="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(t!=null&&t.skin)||!(t!=null&&t.hair))return null;const i=t.hair==="chauve"?`${t.skin}-chauve-rase`:`${t.skin}-${t.hair}-${t.hair_length}`;return`${e}/storage/v1/object/public/assets/tetes/${i}.png`}function ne(t,e){return t&&Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Be(t,e=""){var p,f;const i=t.player;if(!i)return"";const o=i.job||"ATT",a=fe[o],n=Ye[i.rarity]||"#ccc",s=ne(i,o),c=i.job2?ne(i,i.job2):null,r=i.job2?fe[i.job2]:null,l=We(i),d=ke[i.country_code]||i.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${n};cursor:pointer;flex-shrink:0;position:relative
  " data-card-id="${t.id}">
    ${e}
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${i.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(i.surname_encoded||"").toUpperCase()}</div>
      </div>
      <!-- Zone étoiles : bandeau fixe + étoile principale dedans + petite étoile dessous -->
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <!-- Bandeau de couleur fixe (toujours au même endroit) -->
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${a}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${a}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${c!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${r}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${c}</text>
        </svg>`:""}
      </div>
      <!-- Portrait -->
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${l?`<img src="${l}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${i.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${d}</div>
        ${(p=i.clubs)!=null&&p.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=i.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function ft(t){const e=t.job||"ATT",i=ne(t,e),o=ke[t.country_code]||t.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:#ccc;flex-shrink:0;position:relative;filter:grayscale(1);opacity:0.45
  ">
    <div style="background:#e8e8e8;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#888">${t.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#444;font-family:Arial Black,Arial;line-height:1.1">${(t.surname_encoded||"").toUpperCase()}</div>
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${o}</div>
      </div>
    </div>
  </div>`}async function ut(t,e){const{state:i,navigate:o,toast:a,openModal:n,closeModal:s}=e;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await w.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:r}=await w.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),l=(c||[]).filter(I=>I.card_type==="player"&&I.player),d=(c||[]).filter(I=>I.card_type==="game_changer"),p=(c||[]).filter(I=>I.card_type==="formation"),f=Object.keys(ie),u=Object.keys(oe),m={};l.forEach(I=>{const L=I.player.id;m[L]=(m[L]||0)+1});const $=new Set(Object.keys(m).map(I=>String(I))),h=new Set(p.map(I=>I.formation)),_=new Set(d.map(I=>I.gc_type));let b="player",g="Tous",y="",v=!1;function x(){return[...l].sort((I,L)=>{const M=ae.indexOf(I.player.job),B=ae.indexOf(L.player.job);return M!==B?M-B:(I.player.surname_encoded||"").localeCompare(L.player.surname_encoded||"")})}function k(){return[...r||[]].sort((I,L)=>{const M=ae.indexOf(I.job),B=ae.indexOf(L.job);return M!==B?M-B:(I.surname_encoded||"").localeCompare(L.surname_encoded||"")})}function E(){return x().filter(I=>{const L=I.player,M=g==="Tous"||L.job===g,B=!y||`${L.firstname} ${L.surname_encoded}`.toLowerCase().includes(y);return M&&B})}function A(){return k().filter(I=>{const L=g==="Tous"||I.job===g,M=!y||`${I.firstname} ${I.surname_encoded}`.toLowerCase().includes(y);return L&&M})}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Ma collection</h2>
      <p>${l.length} carte(s) joueur · ${d.length} Game Changer · ${p.length} Formation</p>
    </div>

    <!-- Onglets -->
    <div style="display:flex;border-bottom:1px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${b==="player"?"var(--green)":"transparent"};
        color:${b==="player"?"var(--green)":"var(--gray-600)"}">Joueurs</button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${b==="formation"?"var(--green)":"transparent"};
        color:${b==="formation"?"var(--green)":"var(--gray-600)"}">Formations</button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${b==="gc"?"var(--green)":"transparent"};
        color:${b==="gc"?"var(--green)":"var(--gray-600)"}">Game Changer</button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grille cartes -->
    <div class="page-body">
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-start" id="col-grid"></div>
    </div>
  </div>`;function T(){const I=document.getElementById("col-filters");I&&(b==="player"?(I.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${y}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${ct.map(L=>`
            <button class="filter-btn" data-job="${L}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${L===g?"var(--green)":"var(--gray-200)"};
                background:${L===g?"var(--green)":"#fff"};
                color:${L===g?"#fff":"var(--gray-600)"}">
              ${L}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${v?"var(--yellow)":"var(--gray-200)"};
              background:${v?"var(--yellow)":"#fff"};
              color:${v?"#fff":"var(--gray-600)"}">
            ${v?"✓ Tout afficher":"Voir tout"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",L=>{y=L.target.value.toLowerCase(),z()}),t.querySelectorAll(".filter-btn").forEach(L=>{L.addEventListener("click",()=>{g=L.dataset.job,T(),z()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{v=!v,T(),z()})):(I.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${v?"var(--yellow)":"var(--gray-200)"};
              background:${v?"var(--yellow)":"#fff"};
              color:${v?"#fff":"var(--gray-600)"}">
            ${v?"✓ Tout afficher":"Voir tout"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{v=!v,T(),z()})))}function z(){const I=document.getElementById("col-grid");I&&(b==="player"?C(I):b==="formation"?R(I):q(I))}function C(I){if(v){const L=A();if(!L.length){I.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}I.innerHTML=L.map(M=>{if($.has(String(M.id))){const S=l.find(H=>H.player.id===M.id),F=m[M.id]||1,O=F>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${F}</div>`:"",K=l.filter(H=>H.player.id===M.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Be(S,O+K)}return ft(M)}).join("")}else{const L=E();if(!L.length){I.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const M={},B=[];L.forEach(S=>{const F=S.player.id;M[F]||(M[F]=!0,B.push(S))}),I.innerHTML=B.map(S=>{const F=m[S.player.id]||1,O=F>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${F}</div>`:"",K=l.filter(H=>H.player.id===S.player.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Be(S,O+K)}).join("")}I.querySelectorAll("[data-card-id]").forEach(L=>{L.addEventListener("click",()=>{const M=l.find(B=>B.id===L.dataset.cardId);M&&xt(M,l,m,e)})})}function R(I){const L=v?f:[...h];if(!L.length){I.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}I.innerHTML=L.map(M=>{if(h.has(M)){const S=p.find(P=>P.formation===M),F=p.filter(P=>P.formation===M).length,O=F>1?`<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${F}</div>`:"";return`
          <div data-form-id="${S.id}" style="
            position:relative;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border:2px solid #2a8f52;
            border-radius:12px;padding:12px;color:#fff;min-width:100px;width:140px;flex-shrink:0;cursor:pointer;
            display:flex;flex-direction:column;gap:4px;align-items:flex-start">
            ${O}
            <div style="font-size:28px">🏟️</div>
            <div style="font-size:8px;background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:10px;width:fit-content;letter-spacing:.4px">FORMATION</div>
            <div style="font-weight:900;font-size:18px">${M}</div>
          </div>`}return`
        <div style="
          background:#ccc;border:2px solid #bbb;border-radius:12px;padding:12px;color:#888;
          min-width:100px;width:140px;flex-shrink:0;display:flex;flex-direction:column;gap:4px;align-items:flex-start;
          filter:grayscale(1);opacity:0.45">
          <div style="font-size:28px">🏟️</div>
          <div style="font-size:8px;background:rgba(0,0,0,0.1);padding:2px 6px;border-radius:10px;width:fit-content;letter-spacing:.4px">FORMATION</div>
          <div style="font-weight:900;font-size:18px">${M}</div>
        </div>`}).join(""),I.querySelectorAll("[data-form-id]").forEach(M=>{M.addEventListener("click",()=>{const B=p.find(S=>S.id===M.dataset.formId);B&&yt(B,p,e,n)})})}function q(I){const L=v?u:[..._];if(!L.length){I.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}I.innerHTML=L.map(M=>{const B=_.has(M),S=oe[M]||{icon:"⚡"};if(B){const F=d.find(K=>K.gc_type===M),O=d.filter(K=>K.gc_type===M).length,P=O>1?`<div style="position:absolute;top:4px;right:4px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${O}</div>`:"";return`
          <div data-gc-id="${F.id}" data-gc-type="${M}" style="
            position:relative;background:linear-gradient(135deg,#3d0a7a,#7a28b8);border:2px solid #9b59b6;
            border-radius:12px;padding:12px;color:#fff;min-width:120px;width:140px;flex-shrink:0;cursor:pointer;
            display:flex;flex-direction:column;gap:4px">
            ${P}
            <div style="font-size:28px">${S.icon}</div>
            <div style="font-size:8px;background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:10px;width:fit-content;letter-spacing:.4px">GAME CHANGER</div>
            <div style="font-weight:700;font-size:13px">${M}</div>
          </div>`}return`
        <div style="
          background:#ccc;border:2px solid #bbb;border-radius:12px;padding:12px;color:#888;
          min-width:120px;width:140px;flex-shrink:0;display:flex;flex-direction:column;gap:4px;
          filter:grayscale(1);opacity:0.45">
          <div style="font-size:28px">${S.icon}</div>
          <div style="font-size:8px;background:rgba(0,0,0,0.1);padding:2px 6px;border-radius:10px;width:fit-content;letter-spacing:.4px">GAME CHANGER</div>
          <div style="font-weight:700;font-size:13px">${M}</div>
        </div>`}).join(""),I.querySelectorAll("[data-gc-id]").forEach(M=>{M.addEventListener("click",()=>gt(M.dataset.gcType,n))})}t.querySelectorAll(".col-tab-btn").forEach(I=>{I.addEventListener("click",()=>{b=I.dataset.tab,g="Tous",y="",v=!1,t.querySelectorAll(".col-tab-btn").forEach(L=>{const M=L.dataset.tab===b;L.style.borderBottomColor=M?"var(--green)":"transparent",L.style.color=M?"var(--green)":"var(--gray-600)"}),T(),z()})}),T(),z()}function gt(t,e){const i=oe[t]||{icon:"⚡",desc:"Effet spécial."};e("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:linear-gradient(135deg,#3d0a7a,#7a28b8);border-radius:16px;border:2px solid #9b59b6;
        padding:24px 32px;text-align:center;color:#fff;width:100%;max-width:280px">
        <div style="font-size:56px;margin-bottom:8px">${i.icon}</div>
        <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:8px">GAME CHANGER</div>
        <div style="font-size:22px;font-weight:900">${t}</div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${i.desc}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ee=1e3;function yt(t,e,i,o){var $,h,_;const{state:a,toast:n,closeModal:s,navigate:c,refreshProfile:r}=i,l=t.formation,d={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function p(){const b=we[l]||{},g=ie[l]||[],y=290,v=360,x=20;function k(A){const T=b[A];return T?{x:T.x*y,y:T.y*v}:null}let E=`<svg width="${y}" height="${v}" viewBox="0 0 ${y} ${v}" xmlns="http://www.w3.org/2000/svg">`;for(const[A,T]of g){const z=k(A),C=k(T);!z||!C||(E+=`<line x1="${z.x}" y1="${z.y}" x2="${C.x}" y2="${C.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const A of Object.keys(b)){const T=k(A);if(!T)continue;const z=A.replace(/\d+/,""),C=d[z]||"#555";E+=`<circle cx="${T.x}" cy="${T.y}" r="${x}" fill="${C}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,E+=`<text x="${T.x}" y="${T.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${z}</text>`}return E+="</svg>",E}const f=e.filter(b=>b.formation===l),u=f.length,m=!t.is_for_sale;o(`Formation ${l}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${p()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+1</b> à l'action.
      </div>
    </div>

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe carte Formation</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${ee.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${u-1} carte${u-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${u<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${m?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${ee}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${t.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),($=document.getElementById("direct-sell-form-btn"))==null||$.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${l} pour ${ee.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const b=f.find(y=>!y.is_for_sale)||f[0];if(!b){n("Aucune carte à vendre","error");return}const{error:g}=await w.from("cards").delete().eq("id",b.id);if(g){n(g.message,"error");return}await w.from("users").update({credits:(a.profile.credits||0)+ee}).eq("id",a.profile.id),await r(),n(`+${ee.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),c("collection")}),(h=document.getElementById("market-sell-form-btn"))==null||h.addEventListener("click",async()=>{const b=parseInt(document.getElementById("sell-price-form").value);if(!b||b<1){n("Prix invalide","error");return}await w.from("cards").update({is_for_sale:!0,sale_price:b}).eq("id",t.id),await w.from("market_listings").insert({seller_id:a.profile.id,card_id:t.id,price:b}),n("Carte mise en vente sur le marché !","success"),s(),c("collection")}),(_=document.getElementById("cancel-sell-form-btn"))==null||_.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),s(),c("collection")})}function xt(t,e,i,o){var x,k,E,A,T,z;const{state:a,toast:n,openModal:s,closeModal:c,navigate:r,refreshProfile:l}=o,d=t.player,p=e.filter(C=>C.player.id===d.id),f=p.length,u=pt[d.rarity]||1e3,m=d.rarity!=="legende",$=We(d),h=ne(d,d.job),_=d.job2?ne(d,d.job2):null,b=fe[d.job]||"#1A6B3C",g=d.job2?fe[d.job2]:null,y=Ye[d.rarity]||"#ccc",v=ke[d.country_code]||d.country_code||"";s(`${d.firstname} ${d.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${y};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${d.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(d.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${b}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${b}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${h}</text>
            </svg>
            ${_!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${g}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${_}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${$?`<img src="${$}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${d.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${v}</div>
            ${(x=d.clubs)!=null&&x.logo_url?`<img src="${d.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((k=d.clubs)==null?void 0:k.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${y}">${d.rarity.toUpperCase()}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${d.job}${d.job2?" / "+d.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">NOTES</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;font-size:12px">
            <span>GK <b>${d.note_g||0}</b></span>
            <span>DEF <b>${d.note_d||0}</b></span>
            <span>MIL <b>${d.note_m||0}</b></span>
            <span>ATT <b>${d.note_a||0}</b></span>
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${f}</div>
        </div>
      </div>
    </div>

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe selon rareté</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${u.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${f-1} carte${f-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${f<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${m&&!t.is_for_sale?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price" min="1" placeholder="Prix en crédits" value="${d.sell_price||5e3}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${t.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-btn">Retirer</button>
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(E=document.getElementById("close-detail"))==null||E.addEventListener("click",c),(A=document.getElementById("direct-sell-btn"))==null||A.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${d.surname_encoded} pour ${u.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const C=p.find(q=>!q.is_for_sale)||p[0];if(!C){n("Aucune carte à vendre","error");return}const{error:R}=await w.from("cards").delete().eq("id",C.id);if(R){n(R.message,"error");return}await w.from("users").update({credits:(a.profile.credits||0)+u}).eq("id",a.profile.id),await l(),n(`+${u.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),c(),r("collection")}),(T=document.getElementById("market-sell-btn"))==null||T.addEventListener("click",async()=>{const C=parseInt(document.getElementById("sell-price").value);if(!C||C<1){n("Prix invalide","error");return}await w.from("cards").update({is_for_sale:!0,sale_price:C}).eq("id",t.id),await w.from("market_listings").insert({seller_id:a.profile.id,card_id:t.id,price:C}),n("Carte mise en vente sur le marché !","success"),c(),r("collection")}),(z=document.getElementById("cancel-sell-btn"))==null||z.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),c(),r("collection")})}const ue={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function _e(t){const e=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!e||!(t!=null&&t.skin)||!(t!=null&&t.hair))return null;const i=t.hair==="chauve"?`${t.skin}-chauve-rase`:`${t.skin}-${t.hair}-${t.hair_length}`;return`${e}/storage/v1/object/public/assets/tetes/${i}.png`}async function xe(t,e){const{state:i,navigate:o,toast:a}=e;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await w.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});t.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!s)return;const{data:c,error:r}=await w.from("decks").insert({owner_id:i.profile.id,name:s}).select().single();if(r){a(r.message,"error");return}a("Deck créé !","success"),Se(c.id,t,e)}),t.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>Se(s.dataset.openDeck,t,e))}),t.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const c=prompt("Nouveau nom :",s.dataset.name);if(!c||c===s.dataset.name)return;const{error:r}=await w.from("decks").update({name:c}).eq("id",s.dataset.rename);if(r){a(r.message,"error");return}a("Deck renommé !","success"),xe(t,e)})}),t.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await w.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:c}=await w.from("decks").delete().eq("id",s.dataset.delete);if(c){a(c.message,"error");return}a("Deck supprimé.","success"),xe(t,e)})})}async function Se(t,e,i){const{state:o,toast:a}=i;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await w.from("decks").select("*").eq("id",t).single(),{data:s}=await w.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),c=(s||[]).filter(u=>u.card_type==="player"&&u.player),r=(s||[]).filter(u=>u.card_type==="formation"),l=r.map(u=>u.formation).filter(Boolean),{data:d}=await w.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",t);let p=n.formation||"4-4-2";l.length>0&&!l.includes(p)&&(p=l[0]);const f={deckId:t,name:n.name,formation:p,formationCardId:n.formation_card_id,slots:{},subs:[],playerCards:c,formationCards:r,availableFormations:l};(d||[]).forEach(u=>{u.is_starter?f.slots[u.position]=u.card_id:f.subs.includes(u.card_id)||f.subs.push(u.card_id)}),X(e,f,i)}function X(t,e,i){var r;const{navigate:o}=i;ue[e.formation];const a=Fe(e.formation),n=a.filter(l=>e.slots[l]).length,s=e.availableFormations.length>0?e.availableFormations:Object.keys(ue),c=e.subs.map(l=>e.playerCards.find(d=>d.id===l)).filter(Boolean);[...Object.values(e.slots),...e.subs],t.innerHTML=`
  <div class="page">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${e.name}</h2>
        <p>${n}/11 titulaires · ${e.subs.length}/5 remplaçants</p>
      </div>
    </div>

    <!-- Formation (uniquement les cartes possédées) -->
    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <label style="font-size:11px;margin-bottom:4px;display:block">Formation ${e.availableFormations.length===0?"(aucune carte — toutes disponibles)":""}</label>
      <select id="formation-select" style="width:100%;padding:7px;border-radius:6px;border:1.5px solid var(--gray-200)">
        ${s.map(l=>`<option value="${l}" ${l===e.formation?"selected":""}>${l}</option>`).join("")}
      </select>
    </div>

    <!-- Terrain -->
    <div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);padding:16px;min-height:280px">
      <div id="deck-field"></div>
    </div>

    <!-- Remplaçants (Petit 4) -->
    <div style="padding:12px 16px;background:#fff;border-top:1px solid var(--gray-200)">
      <div style="font-size:12px;font-weight:700;margin-bottom:8px;color:var(--gray-600)">REMPLAÇANTS (${e.subs.length}/5)</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap" id="subs-list">
        ${c.map(l=>{const d=l.player;return`<div style="display:flex;align-items:center;gap:6px;background:#f5f5f5;border-radius:8px;padding:4px 8px;font-size:12px">
            <span style="background:${Y[d.job]};color:#fff;border-radius:4px;padding:1px 5px;font-size:10px;font-weight:700">${d.job}</span>
            ${d.firstname} ${d.surname_encoded}
            <button style="background:none;border:none;color:#c0392b;cursor:pointer;font-size:14px" data-remove-sub="${l.id}">✕</button>
          </div>`}).join("")}
        ${e.subs.length<5?'<button class="btn btn-ghost btn-sm" id="add-sub-btn">+ Remplaçant</button>':""}
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${n<11?"disabled":""}>
        ${n<11?`Placez encore ${11-n} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`,mt(t,e,a,i),document.getElementById("builder-back").addEventListener("click",()=>o("decks")),document.getElementById("formation-select").addEventListener("change",l=>{e.formation=l.target.value;const d=Fe(e.formation),p={};d.forEach(f=>{e.slots[f]&&(p[f]=e.slots[f])}),e.slots=p,X(t,e,i)}),document.getElementById("save-deck").addEventListener("click",()=>ht(e,i)),t.querySelectorAll("[data-remove-sub]").forEach(l=>{l.addEventListener("click",()=>{e.subs=e.subs.filter(d=>d!==l.dataset.removeSub),X(t,e,i)})}),(r=document.getElementById("add-sub-btn"))==null||r.addEventListener("click",()=>{bt(e,t,i)})}function mt(t,e,i,o){const a=document.getElementById("deck-field");if(!a)return;const n=e.formation,s=we[n]||{},c=ye?ye(n)||ie[n]||[]:ie[n]||[],r={};i.forEach(g=>{const y=e.slots[g],v=y?e.playerCards.find(x=>x.id===y):null;r[g]=(v==null?void 0:v.player)||null});const l=i.filter(g=>g.startsWith("MIL"));let d=0,p=0;l.forEach(g=>{const y=r[g];y&&(d+=Number(y.note_m)||0)}),c.forEach(([g,y])=>{if(!g.startsWith("MIL")||!y.startsWith("MIL"))return;U(r[g],r[y])!=="#ff3333"&&p++});const f=320,u=320,m=28,$=4;function h(g){const y=s[g];return y?{x:y.x*f,y:y.y*u}:null}let _="";for(const[g,y]of c){const v=h(g),x=h(y);if(!v||!x)continue;const k=r[g],E=r[y],A=U(k,E);if(A==="#00ff88"||A==="#FFD700")_+=`<line x1="${v.x}" y1="${v.y}" x2="${x.x}" y2="${x.y}"
        stroke="${A}" stroke-width="${$*3}" stroke-linecap="round" opacity="0.25"/>`,_+=`<line x1="${v.x}" y1="${v.y}" x2="${x.x}" y2="${x.y}"
        stroke="${A}" stroke-width="${$}" stroke-linecap="round" opacity="0.95"/>`;else{const z=A==="#ff3333"||A==="#cc2222"?.75:.9;_+=`<line x1="${v.x}" y1="${v.y}" x2="${x.x}" y2="${x.y}"
        stroke="${A}" stroke-width="${$}" stroke-linecap="round" opacity="${z}"/>`}}for(const g of i){const y=h(g);if(!y)continue;const v=r[g],x=g.replace(/\d+/,""),E={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x]||"#555",A=v?Number(x==="GK"?v.note_g:x==="DEF"?v.note_d:x==="MIL"?v.note_m:v.note_a)||0:null,T=v?(v.surname_encoded||"").slice(0,8).toUpperCase():"";if(v){const z=_e(v);z&&(_+=`
          <defs>
            <clipPath id="clip-${g}">
              <circle cx="${y.x}" cy="${y.y}" r="${m}"/>
            </clipPath>
          </defs>
          <image href="${z}" x="${y.x-m}" y="${y.y-m}" width="${m*2}" height="${m*2}"
            clip-path="url(#clip-${g})" preserveAspectRatio="xMidYMid slice" opacity="0.85"/>`),_+=`
        <circle cx="${y.x}" cy="${y.y}" r="${m}" fill="${z?"transparent":E}"
          stroke="${E}" stroke-width="2" />
        <circle cx="${y.x}" cy="${y.y}" r="${m}" fill="${E}" opacity="${z?"0.5":"1"}"
          stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
        ${z?`<image href="${z}" x="${y.x-m}" y="${y.y-m}" width="${m*2}" height="${m*2}"
          clip-path="url(#clip-${g})" preserveAspectRatio="xMidYMid slice" opacity="0.9"/>`:""}
        <text x="${y.x}" y="${y.y-3}" text-anchor="middle" font-size="13" font-weight="900"
          fill="white" font-family="Arial Black,Arial" style="text-shadow:0 1px 2px #000">${A}</text>
        <text x="${y.x}" y="${y.y+11}" text-anchor="middle" font-size="6.5" fill="rgba(255,255,255,0.9)"
          font-family="Arial">${T}</text>
        <rect x="${y.x-m}" y="${y.y-m}" width="${m*2}" height="${m*2}"
          fill="transparent" class="deck-slot-hit" data-pos="${g}" style="cursor:pointer"/>`}else _+=`
        <circle cx="${y.x}" cy="${y.y}" r="${m}" fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="${y.x}" y="${y.y+6}" text-anchor="middle" font-size="16" fill="rgba(255,255,255,0.4)"
          font-family="Arial">+</text>
        <rect x="${y.x-m}" y="${y.y-m}" width="${m*2}" height="${m*2}"
          fill="transparent" class="deck-slot-hit" data-pos="${g}" style="cursor:pointer"/>`}const b="";a.innerHTML=`
    <!-- Badge MIL -->
    ${l.length>0?`
    <div style="position:absolute;top:6px;right:8px;z-index:10;
      background:rgba(212,160,23,0.95);color:#000;border-radius:8px;
      padding:3px 10px;font-size:11px;font-weight:900;pointer-events:none">
      MIL ${d}${p>0?` +${p}`:""} ⚡
    </div>`:""}

    <svg viewBox="0 0 ${f} ${u}" width="100%" style="display:block;max-width:380px;margin:0 auto">
      ${b}
      ${_}
    </svg>`,a.querySelectorAll(".deck-slot-hit").forEach(g=>{g.addEventListener("click",()=>vt(g.dataset.pos,e,t,o))})}function vt(t,e,i,o){var f,u,m;const{openModal:a,closeModal:n}=o,s=t.replace(/\d+/,""),c=e.slots[t],r=c?e.playerCards.find($=>$.id===c):null;(f=r==null?void 0:r.player)==null||f.id;const l=new Set;Object.entries(e.slots).forEach(([$,h])=>{var b;if($===t||!h)return;const _=e.playerCards.find(g=>g.id===h);(b=_==null?void 0:_.player)!=null&&b.id&&l.add(_.player.id)}),e.subs.forEach($=>{var _;const h=e.playerCards.find(b=>b.id===$);(_=h==null?void 0:h.player)!=null&&_.id&&l.add(h.player.id)});const d=new Set,p=e.playerCards.filter($=>{const h=$.player;return!(h.job===s||h.job2===s)||l.has(h.id)||d.has(h.id)?!1:(d.add(h.id),!0)});p.sort(($,h)=>{const _=s==="GK"?$.player.note_g:s==="DEF"?$.player.note_d:s==="MIL"?$.player.note_m:$.player.note_a;return(s==="GK"?h.player.note_g:s==="DEF"?h.player.note_d:s==="MIL"?h.player.note_m:h.player.note_a)-_}),a(`Choisir ${s} — ${t}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${e.slots[t]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${p.length>0?p.map($=>{var y,v;const h=$.player,_=s==="GK"?h.note_g:s==="DEF"?h.note_d:s==="MIL"?h.note_m:h.note_a,b=_e(h),g={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[h.rarity];return`<div class="player-option" data-card-id="${$.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Y[s]}">
            ${b?`<img src="${b}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${Y[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${h.firstname} ${h.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${h.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${h.country_code}">
              ${(y=h.clubs)!=null&&y.logo_url?`<img src="${h.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((v=h.clubs)==null?void 0:v.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${h.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${Y[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${g};flex-shrink:0">
            ${_}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(u=document.getElementById("close-selector"))==null||u.addEventListener("click",n),(m=document.getElementById("remove-player"))==null||m.addEventListener("click",()=>{delete e.slots[t],n(),X(i,e,o)}),document.querySelectorAll(".player-option").forEach($=>{$.addEventListener("click",()=>{e.slots[t]=$.dataset.cardId,n(),X(i,e,o)})})}function bt(t,e,i){var r;const{openModal:o,closeModal:a}=i,n=new Set;Object.values(t.slots).filter(Boolean).forEach(l=>{var p;const d=t.playerCards.find(f=>f.id===l);(p=d==null?void 0:d.player)!=null&&p.id&&n.add(d.player.id)}),t.subs.forEach(l=>{var p;const d=t.playerCards.find(f=>f.id===l);(p=d==null?void 0:d.player)!=null&&p.id&&n.add(d.player.id)});const s=new Set,c=t.playerCards.filter(l=>{var d,p,f;return n.has((d=l.player)==null?void 0:d.id)||s.has((p=l.player)==null?void 0:p.id)?!1:(s.add((f=l.player)==null?void 0:f.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?c.map(l=>{var u;const d=l.player,p=_e(d),f=d.job==="GK"?d.note_g:d.job==="DEF"?d.note_d:d.job==="MIL"?d.note_m:d.note_a;return`<div class="player-option" data-card-id="${l.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Y[d.job]}">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${d.firstname} ${d.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${d.job} · ${d.country_code} · ${((u=d.clubs)==null?void 0:u.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${Y[d.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(r=document.getElementById("close-sub-selector"))==null||r.addEventListener("click",a),document.querySelectorAll(".player-option").forEach(l=>{l.addEventListener("click",()=>{t.subs.push(l.dataset.cardId),a(),X(e,t,i)})})}async function ht(t,e){const{state:i,toast:o,navigate:a}=e,n=t.formationCards.find(r=>r.formation===t.formation),s=(n==null?void 0:n.id)||t.formationCardId;await w.from("decks").update({formation:t.formation,formation_card_id:s||null}).eq("id",t.deckId),await w.from("deck_cards").delete().eq("deck_id",t.deckId);const c=[];if(Object.entries(t.slots).forEach(([r,l],d)=>{c.push({deck_id:t.deckId,card_id:l,position:r,is_starter:!0,slot_order:d})}),t.subs.forEach((r,l)=>{c.push({deck_id:t.deckId,card_id:r,position:`SUB${l+1}`,is_starter:!1,slot_order:100+l})}),c.length>0){const{error:r}=await w.from("deck_cards").insert(c);if(r){o(r.message,"error");return}}o("Deck enregistré ✅","success"),a("decks")}function Fe(t){const e=ue[t]||ue["4-4-2"],i=["GK1"];for(let o=1;o<=e.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=e.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=e.ATT;o++)i.push(`ATT${o}`);return i}const De=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Je={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function $t(t){const e="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(t!=null&&t.skin)||!(t!=null&&t.hair))return null;const i=t.hair==="chauve"?`${t.skin}-chauve-rase`:`${t.skin}-${t.hair}-${t.hair_length}`;return`${e}/storage/v1/object/public/assets/tetes/${i}.png`}const wt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},kt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function _t(t,{state:e,navigate:i,toast:o}){var n;const a=((n=e.profile)==null?void 0:n.credits)||0;t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${a.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${De.map(s=>{const c=a>=s.cost||s.cost===0,r=s.id==="players_std"||s.id==="players_pub";return`<div class="booster-card ${c?"":"disabled"}" data-booster="${s.id}" style="position:relative">
            ${r?`<button class="booster-info-btn" data-info="${s.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>`:""}
            <div class="icon"><img src="${s.img}" alt="${s.name}" style="height:64px;width:auto;display:block;margin:0 auto"></div>
            <div class="name">${s.name}</div>
            <div class="desc">${s.sub}</div>
            <div class="cost">${s.costLabel}</div>
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
  </div>`,t.querySelectorAll(".booster-card:not(.disabled)").forEach(s=>{s.addEventListener("click",async()=>{const c=De.find(r=>r.id===s.dataset.booster);if(c){s.style.opacity="0.5",s.style.pointerEvents="none";try{await Et(c,{state:e,toast:o,navigate:i,container:t})}catch(r){o(r.message,"error"),s.style.opacity="",s.style.pointerEvents=""}}})}),t.querySelectorAll(".booster-info-btn").forEach(s=>{s.addEventListener("click",c=>{c.stopPropagation(),Ct()})})}async function Et(t,{state:e,toast:i,navigate:o,container:a}){if(t.cost>0&&e.profile.credits<t.cost){i("Crédits insuffisants","error");return}t.id==="players_pub"&&await jt();const{data:n}=await w.from("cards").select("card_type, player_id, formation").eq("owner_id",e.profile.id),s=new Set((n||[]).filter(d=>d.card_type==="player").map(d=>d.player_id)),c=new Set((n||[]).filter(d=>d.card_type==="formation").map(d=>d.formation));let r=[];t.type==="player"?r=await Tt(e.profile,t.cardCount,t.cost):t.type==="game_changer"?r=await Lt(e.profile,t.cardCount,t.cost):t.type==="formation"&&(r=await Mt(e.profile,t.cost)),r.forEach(d=>{d.card_type==="player"&&d.player?d.isDuplicate=s.has(d.player.id):d.card_type==="formation"&&(d.isDuplicate=c.has(d.formation))});const{data:l}=await w.from("users").select("*").eq("id",e.profile.id).single();l&&(e.profile=l),zt(r,t,o)}function It(){const t=Math.random()*100;return t<.5?"legende":t<2?"special":t<10?"normal_high":"normal_low"}function V(t){return Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function At(t,e){let i;switch(e){case"legende":i=t.filter(o=>o.rarity==="legende"),i.length||(i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=t.filter(o=>V(o)>=6));break;case"special":i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=t.filter(o=>V(o)>=6));break;case"normal_high":i=t.filter(o=>o.rarity==="normal"&&V(o)>=6),i.length||(i=t.filter(o=>V(o)>=6));break;default:i=t.filter(o=>o.rarity==="normal"&&V(o)>=1&&V(o)<=5),i.length||(i=t.filter(o=>o.rarity==="normal"));break}return i.length||(i=t),i[Math.floor(Math.random()*i.length)]}async function Tt(t,e,i){if(i>0){const{error:l}=await w.from("users").update({credits:t.credits-i}).eq("id",t.id);if(l)throw l}const{data:o}=await w.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const a=o.filter(l=>l.job==="GK"),n=o.filter(l=>l.job!=="GK"),s=!t.first_booster_opened&&a.length>0,c=[];for(let l=0;l<e;l++){const d=l===0&&s?a:l===0?n:o,p=It(),f=At(d,p);f&&c.push(f)}s&&await w.from("users").update({first_booster_opened:!0}).eq("id",t.id);const{data:r}=await w.from("cards").insert(c.map(l=>({owner_id:t.id,player_id:l.id,card_type:"player"}))).select();return c.map((l,d)=>({...r[d],player:l}))}async function Lt(t,e,i){const{error:o}=await w.from("users").update({credits:t.credits-i}).eq("id",t.id);if(o)throw o;const a=Object.keys(Je),n=Array.from({length:e},()=>a[Math.floor(Math.random()*a.length)]),{data:s}=await w.from("cards").insert(n.map(c=>({owner_id:t.id,card_type:"game_changer",gc_type:c}))).select();return s}async function Mt(t,e){const{error:i}=await w.from("users").update({credits:t.credits-e}).eq("id",t.id);if(i)throw i;const o=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"],a=o[Math.floor(Math.random()*o.length)],{data:n}=await w.from("cards").insert({owner_id:t.id,card_type:"formation",formation:a}).select();return n}function zt(t,e,i){const o=document.createElement("div");o.id="booster-anim-overlay",o.innerHTML=`
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
        ${e.name} · ${t.length} carte${t.length>1?"s":""}
      </div>
      <div class="pack-visual" id="pack-visual"><img src="${e.img}" alt="${e.name}"></div>
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
        ${t.length} carte${t.length>1?"s obtenues":"obtenue"} !
      </div>
      <div class="recap-grid" id="recap-grid"></div>
      <div style="display:flex;gap:10px;padding:0 16px 20px;width:100%;max-width:400px">
        <button class="btn btn-primary" id="reveal-collection" style="flex:1">Voir ma collection</button>
        <button class="btn btn-ghost" id="reveal-more" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Boosters</button>
      </div>
    </div>

    <!-- Canvas pour feu d'artifice -->
    <canvas id="fireworks-canvas" style="position:fixed;inset:0;pointer-events:none;z-index:3001"></canvas>
  `,document.body.appendChild(o);let a=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(a)return;a=!0;const f=document.getElementById("pack-visual");f.classList.add("shaking"),setTimeout(()=>{f.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",s(0)},600)},500)});let n=0;function s(f){n=f;const u=document.getElementById("reveal-phase");u.style.display="flex",c(f)}function c(f){var v;const u=t[f],m=document.getElementById("card-counter"),$=document.getElementById("single-card-slot"),h=document.getElementById("card-tap-hint");m&&(m.textContent=`Carte ${f+1} / ${t.length}`),h&&(h.textContent=f<t.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const _=Ge(u),b=u.card_type==="player"&&((v=u.player)==null?void 0:v.rarity)==="legende";$.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${b?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${_}
        ${u.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,b&&d();const g=document.getElementById("current-card-wrap");let y=!1;g.addEventListener("click",()=>{if(y)return;y=!0;const x=f+1;x<t.length?(g.style.transition="all 0.25s ease",g.style.transform="translateX(-120%) rotate(-15deg)",g.style.opacity="0",setTimeout(()=>c(x),250)):r()})}function r(){p(),document.getElementById("reveal-phase").style.display="none";const f=document.getElementById("recap-phase");f.style.display="flex";const u=document.getElementById("recap-grid");u.innerHTML=t.map((m,$)=>`
      <div class="recap-card" style="--i:${$};animation-delay:${$*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${Ge(m)}
        ${m.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let l=null;function d(){const f=document.getElementById("fireworks-canvas");if(!f)return;f.width=window.innerWidth,f.height=window.innerHeight;const u=f.getContext("2d"),m=[];function $(){const _=Math.random()*f.width,b=Math.random()*f.height*.6,g=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],y=g[Math.floor(Math.random()*g.length)];for(let v=0;v<60;v++){const x=Math.PI*2/60*v,k=2+Math.random()*5;m.push({x:_,y:b,vx:Math.cos(x)*k,vy:Math.sin(x)*k,alpha:1,color:y,size:2+Math.random()*3})}}$(),l=setInterval($,600);function h(){if(document.getElementById("fireworks-canvas")){u.clearRect(0,0,f.width,f.height);for(let _=m.length-1;_>=0;_--){const b=m[_];if(b.x+=b.vx,b.y+=b.vy+.08,b.vy*=.98,b.alpha-=.018,b.alpha<=0){m.splice(_,1);continue}u.globalAlpha=b.alpha,u.fillStyle=b.color,u.beginPath(),u.arc(b.x,b.y,b.size,0,Math.PI*2),u.fill()}u.globalAlpha=1,(l!==null||m.length>0)&&requestAnimationFrame(h)}}h()}function p(){l!==null&&(clearInterval(l),l=null);const f=document.getElementById("fireworks-canvas");f&&f.getContext("2d").clearRect(0,0,f.width,f.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{p(),o.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{p(),o.remove(),i("boosters")})}function Ge(t){var e,i;if(t.card_type==="player"&&t.player){const o=t.player,a=o.job||"ATT",n=wt[a]||"#1A6B3C",s=kt[o.rarity]||"#ccc",c=a==="GK"?o.note_g:a==="DEF"?o.note_d:a==="MIL"?o.note_m:o.note_a,r=$t(o),l={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[o.country_code]||o.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${s};overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:6px 6px 2px;text-align:center;background:#f2e8d2">
        <div style="font-size:8px;letter-spacing:1px;color:#666;text-transform:uppercase">${o.firstname}</div>
        <div style="font-size:13px;font-weight:900;color:#111;line-height:1.1;font-family:Arial Black,Arial">${(o.surname_encoded||"").toUpperCase()}</div>
      </div>
      <!-- Étoile + bande poste -->
      <div style="position:relative;height:72px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:14px;width:100%;height:26px;background:${n}"></div>
        <svg width="50" height="48" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${n}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${c||0}</text>
        </svg>
      </div>
      <!-- Portrait -->
      <div style="flex:1;overflow:hidden;background:#b8d4f0">
        ${r?`<img src="${r}" style="width:100%;height:100%;object-fit:cover;object-position:center top" onerror="this.style.display='none'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;height:26px">
        <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:1px;color:#555;text-transform:uppercase">${l}</div>
        ${(e=o.clubs)!=null&&e.logo_url?`<img src="${o.clubs.logo_url}" style="width:20px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:700">${(((i=o.clubs)==null?void 0:i.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>`}if(t.card_type==="game_changer"){const o=Je[t.gc_type]||{icon:"⚡",desc:""};return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#3d0a7a,#7a28b8);border-radius:12px;border:3px solid #9b59b6;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:16px">
      <div style="font-size:40px">${o.icon}</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">GAME CHANGER</div>
      <div style="font-weight:700;font-size:13px;color:#fff;text-align:center">${t.gc_type}</div>
      <div style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${o.desc}</div>
    </div>`}return t.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${t.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Ct(){const t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
    align-items:center;justify-content:center;z-index:4000;padding:16px`,t.innerHTML=`
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
  `,document.body.appendChild(t),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.getElementById("odds-close").addEventListener("click",()=>t.remove())}function jt(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:16px";let i=5;e.innerHTML=`<div style="font-size:48px">📺</div>
      <div style="font-size:18px;font-weight:700">Publicité</div>
      <div style="font-size:36px;font-weight:900" id="ad-cd">5</div>`,document.body.appendChild(e);const o=setInterval(()=>{i--;const a=document.getElementById("ad-cd");a&&(a.textContent=i),i<=0&&(clearInterval(o),e.remove(),t(!0))},1e3)})}const Q={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Z={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Xe(t,e,i,o,a){var n;t.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${e}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${o}</button>
    </div>
  </div>`,(n=document.getElementById("msg-btn"))==null||n.addEventListener("click",a)}function G(t){const e=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!e||!(t!=null&&t.skin)||!(t!=null&&t.hair))return null;const i=t.hair==="chauve"?`${t.skin}-chauve-rase`:`${t.skin}-${t.hair}-${t.hair_length}`;return`${e}/storage/v1/object/public/assets/tetes/${i}.png`}function me(t){var i,o;const e=t.player;return{cardId:t.id,id:e.id,firstname:e.firstname,name:e.surname_encoded,country_code:e.country_code,club_id:e.club_id,job:e.job,job2:e.job2,note_g:Number(e.note_g)||0,note_d:Number(e.note_d)||0,note_m:Number(e.note_m)||0,note_a:Number(e.note_a)||0,rarity:e.rarity,skin:e.skin,hair:e.hair,hair_length:e.hair_length,clubName:((i=e.clubs)==null?void 0:i.encoded_name)||null,clubLogo:((o=e.clubs)==null?void 0:o.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ee(t){return t===1?[1]:t===2?[0,2]:t===3?[0,1,2]:t===4?[0,1,1,2]:t===5?[0,1,1,1,2]:[1]}function Bt(){const t=Math.random()*100;return t<.1?4:t<5?3:t<20?2:1}function Qe(t,e){const i=Q[e]||Q["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]},a=[...t];for(const n of["GK","DEF","MIL","ATT"]){const s=[];for(let r=0;r<i[n];r++){let l=a.findIndex(d=>d.job===n);if(l===-1&&(l=a.findIndex(d=>d.job2===n)),l===-1&&(l=0),a[l]){const d={...a[l],_line:n};s.push(d),a.splice(l,1)}}const c=Ee(s.length);s.forEach((r,l)=>{r._col=c[l]}),o[n]=s}return o}async function St(t,e){const{data:i}=await w.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length").eq("is_active",!0).limit(60);if(!i||i.length<11)return Ft(t);const o=Q[t]||Q["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]},n=[...i];for(const s of["GK","DEF","MIL","ATT"]){const c=n.filter(f=>f.job===s),r=n.filter(f=>f.job!==s),l=[...c,...r],d=[];for(let f=0;f<o[s];f++){const u=l[f]||n[f];u&&d.push({cardId:"ai-"+u.id+"-"+f,id:u.id,firstname:u.firstname,name:u.surname_encoded,country_code:u.country_code,club_id:u.club_id,job:u.job,job2:u.job2,note_g:Number(u.note_g)||0,note_d:Number(u.note_d)||0,note_m:Number(u.note_m)||0,note_a:Number(u.note_a)||0,rarity:u.rarity,skin:u.skin,hair:u.hair,hair_length:u.hair_length,boost:0,used:!1,_line:s})}const p=Ee(d.length);d.forEach((f,u)=>{f._col=p[u]}),a[s]=d}return a}function Ft(t){const e=Q[t]||Q["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let a=0;for(const n of["GK","DEF","MIL","ATT"]){const s=[];for(let r=0;r<e[n];r++){const l=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+a,id:"fake-"+a,firstname:"IA",name:o[a%o.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?l:2,note_d:n==="DEF"?l:2,note_m:n==="MIL"?l:2,note_a:n==="ATT"?l:2,rarity:"normal",boost:0,used:!1,_line:n}),a++}const c=Ee(s.length);s.forEach((r,l)=>{r._col=c[l]}),i[n]=s}return i}async function Dt(t,e){var v;const{state:i,navigate:o,toast:a}=e,n=i.params||{};t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const s=n.matchMode||"vs_ai_easy",c=s.replace("vs_ai_",""),r=s;if(!n.deckId)return Gt(t,e,s);const l=n.deckId,[{data:d},{data:p}]=await Promise.all([w.from("decks").select("formation,name").eq("id",l).single(),w.from("deck_cards").select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`).eq("deck_id",l).order("slot_order")]),f=(p||[]).filter(x=>{var k;return x.is_starter&&((k=x.card)==null?void 0:k.player)}).map(x=>me(x.card)),u=(p||[]).filter(x=>{var k;return!x.is_starter&&((k=x.card)==null?void 0:k.player)}).map(x=>me(x.card));if(f.length<11){Xe(t,"⚠️",`Deck incomplet (${f.length}/11).`,"Compléter",()=>o("decks"));return}const m=(p||[]).find(x=>{var k;return((k=x.card)==null?void 0:k.card_type)==="formation"}),$=(d==null?void 0:d.formation)||((v=m==null?void 0:m.card)==null?void 0:v.formation)||"4-4-2",{data:h}=await w.from("cards").select("id,gc_type").eq("owner_id",i.profile.id).eq("card_type","game_changer"),_=Qe(f,$),b=await St($),{data:g}=await w.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:l,status:"in_progress"}).select().single(),y={matchId:g==null?void 0:g.id,mode:r,difficulty:c,formation:$,homeTeam:_,aiTeam:b,homeSubs:u,subsUsed:0,maxSubs:Math.min(u.length,3),homeScore:0,aiScore:0,gcCards:h||[],usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Nt(t,y,e)}async function Gt(t,e,i){const{state:o,navigate:a}=e;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await w.from("decks").select("id,name,is_active,formation").eq("owner_id",o.profile.id).order("created_at",{ascending:!1});if(!n||n.length===0){Xe(t,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>a("decks"));return}const s=n.map(d=>d.id),{data:c}=await w.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order");let r=0;function l(){var b,g,y,v,x;const d=n[r],p=(c||[]).filter(k=>k.deck_id===d.id),f=p.filter(k=>{var E;return k.is_starter&&((E=k.card)==null?void 0:E.player)}).map(k=>me(k.card)),u=p.find(k=>{var E;return((E=k.card)==null?void 0:E.card_type)==="formation"}),m=d.formation||((b=u==null?void 0:u.card)==null?void 0:b.formation)||"4-4-2",$=f.length>=11?Qe(f,m):null,h=f.length>=11;t.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:calc(100dvh - 130px);overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${r===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${r===0?"0.1":"0.3"});color:${r===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${r===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${d.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${m} · ${f.length}/11 ${d.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${r===n.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${r===n.length-1?"0.1":"0.3"});color:${r===n.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${r===n.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : contraindre la largeur du SVG pour contrôler hauteur+largeur -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${$?`<div style="width:min(98vw, calc(100dvh - 400px));overflow:hidden;flex-shrink:0">${tt($,m,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${n.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${n.map((k,E)=>`<div style="width:7px;height:7px;border-radius:50%;background:${E===r?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,(g=document.getElementById("prev-deck"))==null||g.addEventListener("click",()=>{r>0&&(r--,l())}),(y=document.getElementById("next-deck"))==null||y.addEventListener("click",()=>{r<n.length-1&&(r++,l())}),(v=document.getElementById("validate-deck"))==null||v.addEventListener("click",()=>{h&&e.navigate("match",{matchMode:i,deckId:d.id})}),(x=document.getElementById("cancel-deck-select"))==null||x.addEventListener("click",()=>a("home"));const _=document.getElementById("deck-swipe-zone");if(_){let k=0,E=0;_.addEventListener("touchstart",A=>{k=A.touches[0].clientX,E=A.touches[0].clientY},{passive:!0}),_.addEventListener("touchend",A=>{const T=A.changedTouches[0].clientX-k,z=A.changedTouches[0].clientY-E;Math.abs(T)<40||Math.abs(T)<Math.abs(z)||(T<0&&r<n.length-1?(r++,l()):T>0&&r>0&&(r--,l()))},{passive:!0})}}l()}function Nt(t,e,i){t.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-height:100vh;gap:12px;padding:12px 16px;background:#0a3d1e">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${e.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Ie(e.aiTeam,e.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Rt(t,e,i),5e3)}function Rt(t,e,i){const o=e.homeTeam.MIL||[],a=e.aiTeam.MIL||[];function n(p){return p.reduce((f,u)=>f+D(u,"MIL"),0)}function s(p){let f=0;for(let u=0;u<p.length-1;u++){const m=U(p[u],p[u+1]);m==="#00ff88"?f+=2:m==="#FFD700"&&(f+=1)}return f}const c=n(o)+s(o),r=n(a)+s(a),l=c>=r;function d(p,f,u){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${f}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((m,$)=>{const h=G(m),_=$<p.length-1?U(m,p[$+1]):null,b=_&&_!=="#ff3333"&&_!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${u};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${h?`<img src="${h}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${D(m,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${m.name}</div>
          </div>
          ${_?`<div style="width:14px;height:4px;border-radius:2px;background:${_};flex-shrink:0;opacity:${b?.9:.3}"></div>`:""}
          `}).join("")}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${n(p)} + ${s(p)} liens = <b style="color:#fff">${n(p)+s(p)}</b>
      </div>
    </div>`}t.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-height:100vh;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${d(o,e.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${c}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${r}</div>
    </div>

    ${d(a,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const p=document.getElementById("score-home"),f=document.getElementById("score-ai"),u=document.getElementById("midfield-result");if(p&&f&&(l?(p.style.fontSize="80px",p.style.color="#FFD700",f.style.opacity="0.25"):(f.style.fontSize="80px",f.style.color="#ff6b6b",p.style.opacity="0.25")),u){const m=Bt();u.style.opacity="1",l&&e.clubName,u.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${l?`${e.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${l?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${m}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,l&&(e.boostCard={value:m})}if(e.attacker=l?"home":"ai",e.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(m=>({name:m.name,note:D(m,"MIL"),portrait:G(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),aiPlayers:a.map(m=>({name:m.name,note:D(m,"MIL"),portrait:G(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),homeTotal:c,aiTotal:r,text:`Duel milieu : ${e.clubName} ${c} – ${r} IA → ${l?e.clubName+" attaque":"IA attaque"}`}),u){const m=document.createElement("button");m.textContent="▶ Commencer le match",m.style.cssText="margin-top:20px;padding:14px 28px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer",m.addEventListener("click",()=>{e.phase=e.attacker==="home"?"attack":"ai-attack",N(t,e,i),e.attacker==="ai"&&setTimeout(()=>be(t,e,i),800)}),u.appendChild(m)}},5e3)}function Ze(t){const e="https://fcnwclxlkytdfjotqkta.supabase.co";return t!=null&&t.clubLogo?t.clubLogo.startsWith("http")?t.clubLogo:`${e}/storage/v1/object/public/assets/clubs/${t.clubLogo}`:null}function W(t,e=44,i=58){if(!t)return`<div style="width:${e}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const o=typeof t.portrait=="string"&&t.portrait.startsWith("http")?t.portrait:G(t),a=Ze(t),n=t._line||t.job||"MIL",s=Z[n]||"#555",c={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[t==null?void 0:t.rarity]||"#aaa",r=t.note!==void 0?Number(t.note)||0:(Number(D(t,n))||0)+(t.boost||0),l=et(t==null?void 0:t.country_code),d=Math.round(i*.19),p=Math.round(i*.25),f=i-Math.round(i*.19)-Math.round(i*.25),u=t!=null&&t.used?.28:1;return`<div style="width:${e}px;height:${i}px;border-radius:5px;border:2px solid ${c};background:${s};position:relative;overflow:hidden;flex-shrink:0;opacity:${u}">
    <div style="position:absolute;top:0;left:0;right:0;height:${d}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(e/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${e-4}px">${((t==null?void 0:t.name)||"").slice(0,9)}</span>
    </div>
    ${o&&!(t!=null&&t.used)?`<img src="${o}" style="position:absolute;top:${d}px;left:0;width:${e}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${ve(t==null?void 0:t.country_code)?`<img src="${ve(t.country_code)}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">${l}</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${t!=null&&t.used?"–":r}</span>
      ${a?`<img src="${a}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:t!=null&&t.clubName?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(t.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function se(t,e,i){if(!(t!=null&&t.length))return"";const o=t.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return o.forEach((n,s)=>{if(a+=W(n,40,52),s<o.length-1){const c=U(n,o[s+1]);a+=`<div style="width:7px;height:3px;background:${c==="#ff3333"||c==="#cc2222"?"rgba(255,255,255,0.12)":c};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${e};color:${e==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function ve(t){return!t||t.length<2?null:`https://flagcdn.com/24x18/${t.slice(0,2).toLowerCase()}.png`}function et(t){if(!t||t.length<2)return"🌍";try{return String.fromCodePoint(127462+t.charCodeAt(0)-65)+String.fromCodePoint(127462+t.charCodeAt(1)-65)}catch{return"🌍"}}function Ie(t,e,i,o,a=310,n=310){const s=we[e]||{},c=ye(e)||ie[e]||[],r={},l=["ATT","MIL","DEF","GK"];for(const b of l)(t[b]||[]).forEach((y,v)=>{r[`${b}${v+1}`]=y});function d(b){const g=s[b];return g?{x:g.x*a,y:g.y*n}:null}let p="";for(const[b,g]of c){const y=d(b),v=d(g);if(!y||!v)continue;const x=r[b],k=r[g],E=U(x,k);E==="#00ff88"||E==="#FFD700"?(p+=`<line x1="${y.x.toFixed(1)}" y1="${y.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}"
        stroke="${E}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,p+=`<line x1="${y.x.toFixed(1)}" y1="${y.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}"
        stroke="${E}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):p+=`<line x1="${y.x.toFixed(1)}" y1="${y.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}"
        stroke="${E}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const f=48,u=64,m=13,$=16,h={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[b,g]of Object.entries(r)){const y=d(b);if(!y||!g)continue;const v=b.replace(/[0-9]/g,""),x=Z[v]||"#555",k=i==="attack"&&["MIL","ATT"].includes(v)&&!g.used||i==="defense"&&["GK","DEF","MIL"].includes(v)&&!g.used,E=o.includes(g.cardId);let A;i==="attack"?A=v==="MIL"?Number(g.note_m)||0:Number(g.note_a)||0:i==="defense"?A=v==="GK"?Number(g.note_g)||0:v==="MIL"?Number(g.note_m)||0:Number(g.note_d)||0:A=Number(v==="GK"?g.note_g:v==="DEF"?g.note_d:v==="MIL"?g.note_m:g.note_a)||0,A=A+(g.boost||0);const T=(y.x-f/2).toFixed(1),z=(y.y-u/2).toFixed(1),C=g.used?.25:1,R=h[g==null?void 0:g.rarity]||h.normal,q=E?"#ff3030":R,I=E?3:(g==null?void 0:g.rarity)==="légende"||(g==null?void 0:g.rarity)==="pépite"?2.5:2,L=u-m-$;p+=`<defs><clipPath id="cp-${b}"><rect x="${T}" y="${(y.y-u/2+m).toFixed(1)}" width="${f}" height="${L}"/></clipPath></defs>`,p+=`<rect x="${T}" y="${z}" width="${f}" height="${u}" rx="5" fill="${x}" opacity="${C}"/>`;const M=G(g);M&&!g.used&&(p+=`<image href="${M}" x="${T}" y="${(y.y-u/2+m).toFixed(1)}" width="${f}" height="${L}" clip-path="url(#cp-${b})" preserveAspectRatio="xMidYMin slice"/>`),p+=`<rect x="${T}" y="${z}" width="${f}" height="${m}" rx="4" fill="rgba(255,255,255,0.92)"/>`,p+=`<text x="${y.x.toFixed(1)}" y="${(y.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(g.name||"").slice(0,9)}</text>`;const B=(y.y+u/2-$).toFixed(1);if(p+=`<rect x="${T}" y="${B}" width="${f}" height="${$}" fill="rgba(255,255,255,0.92)"/>`,g.used)p+=`<text x="${y.x.toFixed(1)}" y="${(y.y+u/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const S=ve(g.country_code);S?p+=`<image href="${S}" x="${(y.x-20).toFixed(1)}" y="${(y.y+u/2-$+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:p+=`<text x="${(y.x-13).toFixed(1)}" y="${(y.y+u/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${et(g.country_code)}</text>`,p+=`<text x="${y.x.toFixed(1)}" y="${(y.y+u/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${A}</text>`;const F=Ze(g);F?p+=`<image href="${F}" x="${(y.x+f/2-14).toFixed(1)}" y="${(y.y+u/2-$+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:g.clubName&&(p+=`<text x="${(y.x+14).toFixed(1)}" y="${(y.y+u/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(g.clubName||"").slice(0,3).toUpperCase()}</text>`),g.boost&&(p+=`<rect x="${(y.x+f/2-12).toFixed(1)}" y="${(y.y-u/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,p+=`<text x="${(y.x+f/2-5).toFixed(1)}" y="${(y.y-u/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${g.boost}</text>`)}p+=`<rect x="${T}" y="${z}" width="${f}" height="${u}" rx="5" fill="${E?"rgba(255,255,255,0.12)":"none"}" stroke="${q}" stroke-width="${I}" opacity="${C}"/>`,k&&(p+=`<rect x="${T}" y="${z}" width="${f}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${E?"selected":""}" data-card-id="${g.cardId}" data-role="${v}" style="cursor:pointer"/>`)}const _=38;return`<svg viewBox="${-_} ${-_} ${a+_*2} ${n+_*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${p}
  </svg>`}function tt(t,e,i,o,a=300,n=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ie(t,e,i,o,a,n)}
  </div>`}function de(t,e=!1){const i=t.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[t.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${e?"0.2":"0.5"});opacity:${e?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${t.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(t.name||"").slice(0,7)}</div>
  </div>`}function qt(t){if(t.type==="duel"){const e=t.homeTotal>=t.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(t.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:wrap">
          ${(t.homePlayers||[]).map(i=>de(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${e?20:14}px;font-weight:900;color:${e?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${t.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${e?14:20}px;font-weight:900;color:${e?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${t.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:wrap">
          ${(t.aiPlayers||[]).map(i=>de(i)).join("")}
        </div>
      </div>
      ${t.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${t.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(t.type==="sub"){const e=t.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${e?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${e?t.clubName||"Vous":"IA"}</div>
      ${de(t.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${de(t.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${t.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${t.type==="goal"?700:400};padding:3px 2px">${t.text||""}</div>`}function N(t,e,i){var m,$,h,_,b,g,y,v;const o=e.selected.map(x=>x.cardId),a=e.usedSubIds||[],n=e.homeSubs.filter(x=>!a.includes(x.cardId));Object.values(e.homeTeam).flat().filter(x=>x.used).length>0&&n.length>0&&e.subsUsed<e.maxSubs,e.log[e.log.length-1];const c=e.phase==="ai-attack"||e.phase==="ai-defense",r=e.phase==="attack",l=e.phase==="defense",d=e.phase==="finished",p=e.gcCards.filter(x=>!e.usedGc.includes(x.id)),f=e.boostCard&&!e.boostUsed;if(t.innerHTML=`
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

  <div class="match-screen" style="display:flex;flex-direction:column;height:calc(100dvh - 130px);max-height:calc(100dvh - 130px);overflow:hidden;background:#0a3d1e;position:relative">

    <!-- SCORE BAR -->
    <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
      <button id="match-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
        <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.clubName}</span>
        <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${e.homeScore} – ${e.aiScore}</span>
        <span style="font-size:12px;color:rgba(255,255,255,0.5)">IA (${e.difficulty.toUpperCase()})</span>
      </div>
      <button id="view-ai" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
    </div>

    <!-- ZONE ACTIONS -->
    <div id="last-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">
      ${(()=>{if(e.phase==="defense"&&e.pendingAttack){const k=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${se((k.players||[]).map(E=>({...E,used:!1})),"#ff6b6b",k.total)}
          </div>`}if(e.phase==="ai-defense"&&e.pendingAttack){const k=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${se((k.players||[]).map(E=>({...E,used:!1})),"#00ff88",k.total)}
          </div>`}const x=e.log[e.log.length-1];return x?'<div style="padding:2px 4px">'+qt(x)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${e.log.length})
    </button>

    <!-- ZONE CENTRALE : REMPLAÇANTS + TERRAIN -->
    <div style="display:flex;flex-shrink:0;overflow:hidden">

      <!-- Colonne remplaçants (mini cartes) -->
      <div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:50px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(x=>`
              <div class="sub-btn-col" data-sub-id="${x.cardId}" title="${x.firstname} ${x.name}" style="cursor:pointer;flex-shrink:0">
                ${W(x,44,58)}
              </div>`).join("")}
      </div>

      <!-- Terrain -->
      <div style="overflow:hidden;min-width:0;display:flex;align-items:flex-start;justify-content:center" id="match-field">
        <div style="width:min(calc(100vw - 56px), calc(100dvh - 370px));aspect-ratio:1;overflow:hidden;flex-shrink:0">
          ${tt(e.homeTeam,e.formation,e.phase,o,300,300)}
        </div>
      </div>
    </div>

    <!-- ZONE BAS : GC + BOUTON ACTION -->
    <div style="display:flex;align-items:flex-end;padding:6px 8px;background:rgba(0,0,0,0.35);gap:8px;flex-shrink:0;min-height:80px">

      <!-- Grille GC -->
      <div style="flex:1;display:grid;grid-template-columns:repeat(4,1fr);gap:3px;align-content:start">
        ${p.map(x=>{var k;return`
          <div class="gc-mini" data-gc-id="${x.id}" data-gc-type="${x.gc_type}"
            style="background:linear-gradient(135deg,#3d0a7a,#7a28b8);border:1px solid #9b59b6;border-radius:7px;padding:3px 2px;cursor:pointer;text-align:center">
            <div style="font-size:16px">${((k=oe[x.gc_type])==null?void 0:k.icon)||"⚡"}</div>
            <div style="font-size:6px;color:#fff;font-weight:600;line-height:1.2">${x.gc_type.slice(0,8)}</div>
          </div>`}).join("")}
        ${f?`
          <div id="boost-card" style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:7px;padding:3px 2px;cursor:pointer;text-align:center">
            <div style="font-size:16px">⚡</div>
            <div style="font-size:6px;color:#000;font-weight:900">+${e.boostCard.value}</div>
          </div>`:""}
      </div>

      <!-- Bouton action principal (rectangulaire + chrono) -->
      <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:3px">
        ${d?'<button id="btn-results" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">🏁 Résultats</button>':c?'<div style="min-width:130px;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:14px;display:flex;align-items:center;justify-content:center;gap:6px">⏳ Tour IA</div>':r?`<button id="btn-action" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${e.selected.length===0?'disabled style="opacity:0.45;cursor:default"':""}>⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:l?`<button id="btn-action" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${e.selected.length===0?'disabled style="opacity:0.45;cursor:default"':""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:'<div style="min-width:130px;padding:14px;border-radius:14px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>'}
        ${r||l?`<div style="font-size:9px;color:rgba(255,255,255,0.4)">${e.selected.length}/3 sélectionné(s)</div>`:""}
      </div>
    </div>
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${e.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...e.log].reverse().map(x=>{var k,E,A;if(x.type==="duel"){const T=x.isGoal,z=x.homeScored?"#FFD700":T?"#ff6b6b":"rgba(255,255,255,0.3)",C=x.homeScored?"⚽ BUT !":T?"⚽ BUT IA !":(k=x.homePlayers)!=null&&k.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${T?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${z};margin-bottom:4px">
                <div style="font-size:9px;color:${z};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${C}</div>
                ${(E=x.homePlayers)!=null&&E.length?`<div style="margin-bottom:3px">${se(x.homePlayers,"rgba(255,255,255,0.7)",x.homeTotal)}</div>`:""}
                ${(A=x.aiPlayers)!=null&&A.length?`<div style="opacity:0.7">${se(x.aiPlayers,"#ff6b6b",x.aiTotal)}</div>`:""}
              </div>`}return x.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${x.outPlayer?W({...x.outPlayer,used:!0,_line:x.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${x.inPlayer?W({...x.inPlayer,_line:x.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:x.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${x.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${x.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`,e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),e.phase==="attack"||e.phase==="defense"){let x=!1,k=30;const E=()=>document.getElementById("match-timer"),A=()=>{const T=E();if(!T)return;const z=String(Math.floor(k/60)).padStart(2,"0"),C=String(k%60).padStart(2,"0");T.textContent=` ${z}:${C}`,T.style.color=x?"#ff2222":"#ff9500",T.style.fontWeight="900"};A(),e._timerInt=setInterval(()=>{if(k--,k<0)if(!x)x=!0,k=15,A();else{clearInterval(e._timerInt),e._timerInt=null,e.homeScore=0,e.aiScore=3;const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",T.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(T),setTimeout(()=>{T.remove(),J(t,e,i)},2500)}else A()},1e3)}(m=document.getElementById("match-quit"))==null||m.addEventListener("click",()=>{confirm("Abandonner ? Résultat : défaite 3-0")&&(e.homeScore=0,e.aiScore=3,J(t,e,i))}),($=document.getElementById("view-ai"))==null||$.addEventListener("click",()=>Jt(e,i)),(h=document.getElementById("toggle-history"))==null||h.addEventListener("click",()=>{var x;(x=document.getElementById("match-history-panel"))==null||x.classList.add("open")}),(_=document.getElementById("close-history"))==null||_.addEventListener("click",()=>{var x;(x=document.getElementById("match-history-panel"))==null||x.classList.remove("open")}),(b=document.getElementById("btn-action"))==null||b.addEventListener("click",()=>{e.selected.length!==0&&(r?Pt(t,e,i):l&&Kt(t,e,i))}),(g=document.getElementById("btn-results"))==null||g.addEventListener("click",()=>J(t,e,i)),t.querySelectorAll(".match-slot-hit").forEach(x=>{x.addEventListener("click",()=>Ot(x,e,t,i))}),t.querySelectorAll(".gc-mini").forEach(x=>{x.addEventListener("click",()=>Vt(x.dataset.gcId,x.dataset.gcType,t,e,i))}),(y=document.getElementById("boost-card"))==null||y.addEventListener("click",()=>Wt(t,e,i)),t.querySelectorAll(".sub-btn-col").forEach(x=>{x.addEventListener("click",()=>Ne(t,e,i,x.dataset.subId))}),(v=document.getElementById("sub-btn-main"))==null||v.addEventListener("click",()=>Ne(t,e,i))}function Ot(t,e,i,o){const a=t.dataset.cardId,n=t.dataset.role,s=e.selected.findIndex(c=>c.cardId===a);if(s!==-1)e.selected.splice(s,1);else{if(e.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const c=(e.homeTeam[n]||[]).find(r=>r.cardId===a);c&&e.selected.push({...c,_role:n,_line:n})}N(i,e,o)}function Ae(t,e,i){t.matchId&&w.from("matches").update({last_player_id:i}).eq("id",t.matchId).then(()=>{})}function Pt(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ae(e,i,i.state.profile.id);const o=e.selected.map(n=>({...n,_line:n._role})),a=Ke(o,e.modifiers.home);e.pendingAttack={...a,players:[...e.selected],side:"home"},e.selected.forEach(n=>{const s=(e.homeTeam[n._role]||[]).find(c=>c.cardId===n.cardId);s&&(s.used=!0)}),e.log.push({text:`⚔️ Vous attaquez : ${a.total} (base ${a.base}${a.links?` +${a.links} liens`:""}) — ${e.selected.map(n=>n.name).join(", ")}`,type:"info"}),e.selected=[],e.modifiers.home={},e.phase="ai-defense",N(t,e,i),setTimeout(()=>Ht(t,e,i),1200)}function Kt(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ae(e,i,i.state.profile.id);const o=e.selected.map(c=>({...c,_line:c._role})),a=He(o,e.modifiers.home);e.selected.forEach(c=>{const r=(e.homeTeam[c._role]||[]).find(l=>l.cardId===c.cardId);r&&(r.used=!0)});const n=Ue(e.pendingAttack.total,a.total,e.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(e.pendingAttack.players||[]).map(c=>({name:c.name,note:c._line==="MIL"?c.note_m:c.note_a,portrait:G(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),homePlayers:e.selected.map(c=>{const r=(e.homeTeam[c._role]||[]).find(l=>l.cardId===c.cardId)||c;return{name:r.name,note:r._line==="GK"?r.note_g:r._line==="MIL"?r.note_m:r.note_d,portrait:G(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo}}),homeTotal:a.total,aiTotal:e.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(n.shielded)s.text="🛡️ Bouclier ! But annulé.",e.log.push(s);else if(n.goal){e.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${e.pendingAttack.total} > ${a.total})`,e.log.push(s),e.selected=[],e.modifiers.home={},e.pendingAttack=null,N(t,e,i),Te(s.aiPlayers,e.homeScore,e.aiScore,!1,()=>{re(t,e,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${a.total} ≥ ${e.pendingAttack.total})`,e.log.push(s);e.selected=[],e.modifiers.home={},e.pendingAttack=null,re(t,e,i,"home-attack")}function be(t,e,i){Ae(e,i,null);const o=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]],a=Ve(o,"attack",e.difficulty);if(!a.length){ot(t,e,i);return}const n=Ke(a,e.modifiers.ai);e.pendingAttack={...n,players:a,side:"ai"},a.forEach(l=>{l.used=!0}),e.log.push({text:`🤖 IA attaque : ${n.total} (${a.map(l=>l.name).join(", ")})`,type:"info"}),e.modifiers.ai={};const s=[...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(l=>!l.used),r=(e.homeSubs||[]).filter(l=>!(e.usedSubIds||[]).includes(l.cardId)).length>0&&e.subsUsed<e.maxSubs;if(s.length===0&&!r){e.aiScore++;const l={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:a.map(d=>({name:d.name,note:d._line==="MIL"?d.note_m:d.note_a,portrait:G(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),aiTotal:n.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};e.log.push(l),e.pendingAttack=null,N(t,e,i),Te(l.aiPlayers,e.homeScore,e.aiScore,!1,()=>{re(t,e,i,"home-attack")});return}e.phase="defense",N(t,e,i)}function Ht(t,e,i){const o=[...e.aiTeam.GK||[],...e.aiTeam.DEF||[],...e.aiTeam.MIL||[]],a=Ve(o,"defense",e.difficulty),n=a.length>0?He(a,e.modifiers.ai).total:0;a.forEach(r=>{r.used=!0});const s=Ue(e.pendingAttack.total,n,e.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(e.pendingAttack.players||[]).map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:G(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiPlayers:a.map(r=>({name:r.name,note:r._line==="GK"?r.note_g:r._line==="MIL"?r.note_m:r.note_d,portrait:G(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homeTotal:e.pendingAttack.total,aiTotal:n,isGoal:!1,homeScored:!1,text:""};if(s.shielded)c.text="🛡️ Bouclier IA !",e.log.push(c);else if(s.goal){e.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${e.pendingAttack.total} > ${n})`,e.log.push(c),e.modifiers.ai={},e.pendingAttack=null,N(t,e,i),Te(c.homePlayers,e.homeScore,e.aiScore,!0,()=>{re(t,e,i,"ai-attack")});return}else c.text=`🧤 IA défend (${n} ≥ ${e.pendingAttack.total})`,e.log.push(c);e.modifiers.ai={},e.pendingAttack=null,re(t,e,i,"ai-attack")}function re(t,e,i,o){if(e.round++,it(e)){J(t,e,i);return}if(o==="home-attack"){if(![...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(n=>!n.used).length){if(![...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(s=>!s.used).length){J(t,e,i);return}e.phase="ai-attack",N(t,e,i),setTimeout(()=>be(t,e,i),800);return}e.phase="attack",N(t,e,i)}else{if(![...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(n=>!n.used).length){ot(t,e,i);return}e.phase="ai-attack",N(t,e,i),setTimeout(()=>be(t,e,i),800)}}function it(t){const e=["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(a=>!a.used)),i=["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(a=>!a.used));return!e&&!i}function ot(t,e,i){it(e)?J(t,e,i):(e.phase="attack",N(t,e,i))}function Ut(t,e,i){const o=document.createElement("div");o.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const a=G(t),n=G(e),s=Z[t.job]||"#555",c=Z[e.job]||"#555",r=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a,l=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a;o.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${s};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${a?`<img src="${a}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${r}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${t.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${c};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${l}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${e.name}</div>
      </div>
    </div>
  `,document.body.appendChild(o);let d=!1;const p=()=>{d||(d=!0,o.remove(),i())};o.addEventListener("click",p),setTimeout(p,2e3)}function te(t,e="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${e};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=t,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function Ne(t,e,i,o=null){if(e.phase!=="attack"){te("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(e.usedSubIds||(e.usedSubIds=[]),e.subsUsed>=e.maxSubs){te(`Maximum ${e.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const a=Object.values(e.homeTeam).flat().filter(p=>p.used),n=e.homeSubs.filter(p=>!e.usedSubIds.includes(p.cardId));if(!a.length){te("Aucun joueur utilisé à remplacer");return}if(!n.length){te("Aucun remplaçant disponible");return}let s=0,c=Math.max(0,n.findIndex(p=>p.cardId===o)),r=!1;const l=document.createElement("div");l.id="sub-overlay",l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function d(){var _,b,g,y,v,x;const p=a[s],f=n[c],u=Math.min(130,Math.round((window.innerWidth-90)/2)),m=Math.round(u*1.35),$=k=>`background:rgba(255,255,255,0.12);border:none;color:${k?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${k?"default":"pointer"};flex-shrink:0`;l.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${e.subsUsed}/${e.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${$(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${f?W({...f,used:!1,boost:0},u,m):"<div>—</div>"}</div>
        <button id="in-down" style="${$(c>=n.length-1)}" ${c>=n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${n.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${$(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?W({...p,used:!1,boost:0},u,m):"<div>—</div>"}</div>
        <button id="out-down" style="${$(s>=a.length-1)}" ${s>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${a.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(_=l.querySelector("#sub-close"))==null||_.addEventListener("click",()=>l.remove()),(b=l.querySelector("#out-up"))==null||b.addEventListener("click",()=>{s>0&&(s--,d())}),(g=l.querySelector("#out-down"))==null||g.addEventListener("click",()=>{s<a.length-1&&(s++,d())}),(y=l.querySelector("#in-up"))==null||y.addEventListener("click",()=>{c>0&&(c--,d())}),(v=l.querySelector("#in-down"))==null||v.addEventListener("click",()=>{c<n.length-1&&(c++,d())});const h=(k,E,A,T)=>{const z=l.querySelector("#"+k);if(!z)return;let C=0;z.addEventListener("touchstart",R=>{C=R.touches[0].clientY},{passive:!0}),z.addEventListener("touchend",R=>{const q=R.changedTouches[0].clientY-C;if(Math.abs(q)<30)return;const I=E();q<0&&I<T-1?(A(I+1),d()):q>0&&I>0&&(A(I-1),d())},{passive:!0})};h("in-panel",()=>c,k=>c=k,n.length),h("out-panel",()=>s,k=>s=k,a.length),(x=l.querySelector("#sub-confirm"))==null||x.addEventListener("click",k=>{if(k.preventDefault(),k.stopPropagation(),r)return;r=!0;const E=a[s],A=n[c];if(!E||!A)return;let T=null,z=-1;for(const[R,q]of Object.entries(e.homeTeam)){const I=(q||[]).findIndex(L=>L.cardId===E.cardId);if(I!==-1){T=R,z=I;break}}if(z===-1||!T){te("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),l.remove();return}const C={...A,_line:T,_col:E._col||0,used:!1,boost:0};e.homeTeam[T].splice(z,1,C),e.usedSubIds||(e.usedSubIds=[]),e.usedSubIds.push(A.cardId),e.subsUsed++,e.selected=[],e.log.push({type:"sub",subSide:"home",clubName:e.clubName,outPlayer:{name:E.name,firstname:E.firstname,note:D(E,T),portrait:G(E),job:E.job,country_code:E.country_code,rarity:E.rarity,clubName:E.clubName,clubLogo:E.clubLogo},inPlayer:{name:A.name,firstname:A.firstname,note:D(A,T),portrait:G(A),job:A.job,country_code:A.country_code,rarity:A.rarity,clubName:A.clubName,clubLogo:A.clubLogo},text:`🔄 ${A.firstname} ${A.name} remplace ${E.firstname} ${E.name}`}),l.remove(),Ut(E,A,()=>N(t,e,i))})}document.body.appendChild(l),d()}function Vt(t,e,i,o,a){var c,r;const n=oe[e]||{icon:"⚡",desc:"Carte spéciale."},s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;align-items:center;justify-content:center;padding:24px",s.innerHTML=`
    <div style="background:linear-gradient(160deg,#2a0a52,#7a28b8);border:2px solid #9b59b6;border-radius:18px;padding:24px;max-width:320px;text-align:center;color:#fff">
      <div style="font-size:52px;margin-bottom:10px">${n.icon}</div>
      <div style="font-size:19px;font-weight:900;margin-bottom:8px">${e}</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.85);line-height:1.5;margin-bottom:20px">${n.desc}</div>
      <div style="display:flex;gap:10px">
        <button id="gc-back" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="gc-use" style="flex:1;padding:12px;border-radius:10px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser</button>
      </div>
    </div>`,document.body.appendChild(s),(c=s.querySelector("#gc-back"))==null||c.addEventListener("click",()=>s.remove()),(r=s.querySelector("#gc-use"))==null||r.addEventListener("click",()=>{s.remove(),Yt(t,e,i,o,a)})}function Yt(t,e,i,o,a){if(!o.usedGc.includes(t)){switch(o.usedGc.push(t),e){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{let n=!1;for(const s of["ATT","MIL","DEF","GK"]){const c=(o.homeTeam[s]||[]).find(r=>r.used);if(c){c.used=!1,n=!0;break}}o.log.push({text:n?"💫 Joueur ressuscité !":"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const n=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(s=>!s.used);if(n.length){const s=n.sort((c,r)=>D(r,"ATT")-D(c,"ATT"))[0];s.used=!0,o.log.push({text:`❄️ ${s.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}w.from("cards").delete().eq("id",t).then(()=>{}),N(i,o,a)}}function Wt(t,e,i){const o=Object.values(e.homeTeam).flat().filter(a=>!a.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${e.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${o.map(a=>`
        <div class="player-boost-opt" data-card-id="${a.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Z[a.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${D(a,a._line||a.job)}</div>
          <div style="flex:1"><b>${a.firstname} ${a.name}</b><div style="font-size:11px;color:#888">${a._line||a.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${e.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const c=(e.homeTeam[s]||[]).find(r=>r.cardId===n);if(c){c.boost=(c.boost||0)+e.boostCard.value,e.log.push({text:`⚡ Boost +${e.boostCard.value} appliqué à ${c.name}`,type:"info"});break}}e.boostUsed=!0,i.closeModal(),N(t,e,i)})})}function Te(t,e,i,o,a){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(l,d)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${d%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][d%8]}
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
    ${o?"BUT !":"BUT IA !"}
  </div>
  <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
    <span style="animation:ballIn 0.8s ease 0.35s both">⚽</span>
    <span style="font-size:36px">🥅</span>
  </div>
  <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn 0.4s ease 0.75s both;letter-spacing:4px;position:relative;z-index:1">
    ${e} – ${i}
  </div>
  ${t!=null&&t.length?`
  <div style="display:flex;gap:10px;animation:scoreIn 0.4s ease 1s both;position:relative;z-index:1">
    ${t.map(l=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${Z[l.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${l.portrait?`<img src="${l.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(l.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(n);let c=!1;const r=()=>{c||(c=!0,n.remove(),setTimeout(()=>a(),50))};n.addEventListener("click",r),setTimeout(r,3500)}async function J(t,e,i){var d,p;e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),e.phase="finished";const{state:o}=i,a=e.homeScore>e.aiScore,n=e.homeScore===e.aiScore,s=a?"victoire":n?"nul":"defaite",c=lt(e.mode,s);e.matchId&&await w.from("matches").update({status:"finished",home_score:e.homeScore,away_score:e.aiScore,winner_id:a?o.profile.id:null,home_credits_reward:c,played_at:new Date().toISOString()}).eq("id",e.matchId);const r={credits:(o.profile.credits||0)+c,matches_played:(o.profile.matches_played||0)+1};a?r.wins=(o.profile.wins||0)+1:n?r.draws=(o.profile.draws||0)+1:r.losses=(o.profile.losses||0)+1,await w.from("users").update(r).eq("id",o.profile.id),await i.refreshProfile();const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",l.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${a?"🏆":n?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${a?"Victoire !":n?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${e.homeScore} – ${e.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${c.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(l),(d=document.getElementById("res-home"))==null||d.addEventListener("click",()=>{l.remove(),i.navigate("home")}),(p=document.getElementById("res-replay"))==null||p.addEventListener("click",()=>{l.remove(),i.navigate("match",{matchMode:e.mode})})}function Jt(t,e){e.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ie(t.aiTeam,t.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Xt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Qt(t,e){const{state:i,toast:o}=e;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await Le(t,e)}async function Le(t,e){const{state:i,toast:o}=e,{data:a}=await w.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),n=(a||[]).filter(r=>r.seller_id===i.profile.id),s=(a||[]).filter(r=>r.seller_id!==i.profile.id);t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${s.length} carte(s) en vente · Solde : ${(i.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${n.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function c(r){const l=document.getElementById("mkt-content"),d=r==="buy"?s:n;if(d.length===0){l.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${r==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune carte en vente."}
      </div>`;return}l.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${d.map(p=>{var h,_,b;const f=(h=p.card)==null?void 0:h.player;if(!f)return"";const u=f.job==="GK"?f.note_g:f.job==="DEF"?f.note_d:f.job==="MIL"?f.note_m:f.note_a,m=Xt[f.rarity],$=(i.profile.credits||0)>=p.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px">
          <div style="width:44px;height:44px;border-radius:8px;background:${ti(f.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${m};flex-shrink:0">${u}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${f.firstname} ${f.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${f.country_code} · ${((_=f.clubs)==null?void 0:_.encoded_name)||"—"} · ${f.rarity} · ${f.job}</div>
            <div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((b=p.seller)==null?void 0:b.pseudo)||"—"}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${p.price.toLocaleString("fr")}</div>
            ${r==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${p.id}" ${$?"":"disabled"} style="margin-top:4px">${$?"Acheter":"Trop cher"}</button>`:`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,l.querySelectorAll("[data-buy]").forEach(p=>{p.addEventListener("click",()=>Zt(p.dataset.buy,d,t,e))}),l.querySelectorAll("[data-cancel]").forEach(p=>{p.addEventListener("click",()=>ei(p.dataset.cancel,t,e))})}c("buy"),t.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{t.querySelectorAll(".mkt-tab").forEach(l=>{const d=l===r;l.style.background=d?"var(--green)":"#fff",l.style.color=d?"#fff":"var(--gray-600)",l.style.borderColor=d?"var(--green)":"var(--gray-200)"}),c(r.dataset.tab)})})}async function Zt(t,e,i,o){const{state:a,toast:n,refreshProfile:s}=o,c=e.find(r=>r.id===t);if(c){if((a.profile.credits||0)<c.price){n("Crédits insuffisants","error");return}if(confirm(`Acheter ${c.card.player.firstname} ${c.card.player.surname_encoded} pour ${c.price.toLocaleString("fr")} crédits ?`))try{const{error:r}=await w.from("cards").update({owner_id:a.profile.id,is_for_sale:!1,sale_price:null}).eq("id",c.card.id);if(r)throw r;await w.from("market_listings").update({status:"sold",buyer_id:a.profile.id,sold_at:new Date().toISOString()}).eq("id",t),await w.from("users").update({credits:(a.profile.credits||0)-c.price}).eq("id",a.profile.id);const{data:l}=await w.from("users").select("credits").eq("id",c.seller_id).single();l&&await w.from("users").update({credits:(l.credits||0)+c.price}).eq("id",c.seller_id),await w.from("notifications").insert({user_id:c.seller_id,type:"card_sold",message:`Ta carte ${c.card.player.surname_encoded} a été vendue pour ${c.price} crédits !`,data:{card_id:c.card.id,price:c.price}}),await s(),n("Carte achetée ! ✅","success"),Le(i,o)}catch(r){n("Erreur : "+r.message,"error")}}}async function ei(t,e,i){const{toast:o}=i,{data:a}=await w.from("market_listings").select("card_id").eq("id",t).single();await w.from("market_listings").update({status:"cancelled"}).eq("id",t),a&&await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",a.card_id),o("Annonce retirée","success"),Le(e,i)}function ti(t){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[t]||"#888"}async function ii(t,{state:e,navigate:i,toast:o}){t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await w.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${a&&a.length>0?a.map((n,s)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${n.id===e.profile.id?"border:2px solid var(--yellow)":""}">
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
  `}async function oi(t,{state:e,navigate:i,toast:o}){const a=e.profile;if(!a)return;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await w.from("matches").select("id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at").or(`home_id.eq.${a.id},away_id.eq.${a.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},c=(n||[]).filter(d=>d.status==="finished"),r=(n||[]).filter(d=>d.status==="in_progress");function l(d){const p=d.home_id===a.id;p?d.home_score:d.away_score,p?d.away_score:d.home_score;const f=d.winner_id===a.id,u=d.home_score===d.away_score&&d.status==="finished",m=d.status!=="finished"?"…":u?"N":f?"V":"D",$=d.status!=="finished"||u?"#888":f?"#1A6B3C":"#c0392b";let h=s[d.mode]||d.mode;d.away_id===null&&!h.startsWith("IA")&&(h="IA");let _="";d.status==="in_progress"&&Date.now()-new Date(d.created_at).getTime()>3600*1e3&&(_=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const b=new Date(d.created_at),g=b.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+b.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),y=d.status==="finished"?`${d.home_score} - ${d.away_score}`:`${d.home_score||0} - ${d.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${_}</div>
        <div style="font-size:11px;color:var(--gray-600)">${g}${d.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${y}</span>
        <span style="background:${$};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${m}</span>
      </div>
    </div>`}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(n||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${r.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${r.map(l).join("")}
        </div>`:""}

      ${c.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${c.map(l).join("")}
        </div>`:""}

      ${(n||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const j={user:null,profile:null,page:"home",params:{}};function le(t,e="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=t,o.className=`show ${e}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function ni(t,e,i=""){document.getElementById("modal-title").textContent=t,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function he(){document.getElementById("modal-overlay").classList.add("hidden")}async function ce(){if(!j.user)return;const{data:t}=await w.from("users").select("*").eq("id",j.user.id).single();t&&(j.profile=t)}const Me="mw_theme";function ge(){return localStorage.getItem(Me)||"light"}function ri(t){var e;localStorage.setItem(Me,t),$e(t),(e=j.profile)!=null&&e.id&&w.from("users").update({theme:t}).eq("id",j.profile.id).then(()=>{})}function $e(t){document.documentElement.setAttribute("data-theme",t)}function pe(t,e={}){j.page=t,j.params=e,nt()}async function nt(){const t=document.getElementById("page-content");if(!t)return;document.querySelectorAll(".bottom-nav a").forEach(o=>{o.classList.toggle("active",o.dataset.page===j.page)});const e=document.getElementById("nav-credits");e&&j.profile&&(e.textContent=`💰 ${(j.profile.credits||0).toLocaleString("fr")}`);const i={state:j,navigate:pe,toast:le,openModal:ni,closeModal:he,refreshProfile:ce};switch(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',j.page){case"home":await je(t,i);break;case"collection":await ut(t,i);break;case"decks":await xe(t,i);break;case"boosters":await _t(t,i);break;case"match":await Dt(t,i);break;case"market":await Qt(t,i);break;case"rankings":await ii(t,i);break;case"matches":await oi(t,i);break;default:await je(t,i)}}function ai(){const t=document.getElementById("app"),e=j.profile;if(!e)return;const i="/manager-wars/icons/";t.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo">
        <img src="${i}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <div id="nav-credits" class="credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
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
  `,document.querySelectorAll(".bottom-nav a").forEach(o=>{o.addEventListener("click",a=>{a.preventDefault(),pe(o.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>pe("home")),document.getElementById("nav-credits").addEventListener("click",()=>pe("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const a=ge()==="dark"?"light":"dark";ri(a),Re(a)}),Re(ge())}function Re(t){const e=document.getElementById("theme-icon");e&&(e.textContent=t==="dark"?"☀️":"🌙")}async function si(){$e(ge()),document.getElementById("modal-overlay").addEventListener("click",e=>{e.target===e.currentTarget&&he()}),document.getElementById("modal-close").addEventListener("click",he);const{data:{session:t}}=await w.auth.getSession();if(!t){Oe(),ze(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:le});return}j.user=t.user,await ce(),Oe();try{const{data:e}=await w.from("formation_links_overrides").select("formation, links"),i={};(e||[]).forEach(o=>{i[o.formation]=o.links}),rt(i)}catch(e){console.warn("Impossible de charger les overrides de formation:",e)}if(!j.profile){at(document.getElementById("app"),{state:j,navigate:async()=>{await ce(),qe()},toast:le,refreshProfile:ce});return}j.profile.theme&&j.profile.theme!==ge()&&(localStorage.setItem(Me,j.profile.theme),$e(j.profile.theme)),qe(),w.auth.onAuthStateChange(async(e,i)=>{e==="SIGNED_OUT"&&(j.user=null,j.profile=null,document.getElementById("app").innerHTML="",ze(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:le}))})}function qe(){const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",ai(),nt()}function Oe(){const t=document.getElementById("app-loader"),e=document.getElementById("app");e&&(e.style.display=""),t&&(t.classList.add("zoom-out"),setTimeout(()=>t.style.display="none",500))}si();
