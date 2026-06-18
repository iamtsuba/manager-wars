import{s as k,F as Re,b as me,c as lt,l as ge,d as Ct}from"./formation-links-CDBKB_z4.js";function We(e,{navigate:t,toast:o}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(r=>{r.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),r.classList.add("active"),document.getElementById("tab-login").style.display=r.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=r.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const r=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,i=document.getElementById("login-error");if(i.textContent="",!r||!c){i.textContent="Remplissez tous les champs.";return}const n=document.getElementById("login-btn");n.textContent="Connexion…",n.disabled=!0;const{error:l}=await k.auth.signInWithPassword({email:r,password:c});if(n.textContent="Se connecter",n.disabled=!1,l){i.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",r=>{r.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const r=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,i=document.getElementById("reg-confirm").value,n=document.getElementById("reg-error");if(n.textContent="",!r||!c||!i){n.textContent="Remplissez tous les champs.";return}if(c.length<6){n.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==i){n.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:a}=await k.auth.signUp({email:r,password:c});if(l.textContent="Créer mon compte",l.disabled=!1,a){n.textContent=a.message;return}o("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=r})}function jt(e,{state:t,navigate:o,toast:r,refreshProfile:c}){let i="#1A6B3C",n="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${n};border-color:${i}">
          <span id="logo-initials" style="color:${i}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${i};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${i}" style="width:100%;height:36px;padding:2px;border-radius:6px">
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch2" style="background:${n};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur de l'intérieur</label>
              <input type="color" id="color2" value="${n}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function l(){var g;const d=document.getElementById("logo-preview"),s=document.getElementById("logo-initials"),p=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",u=p.trim().split(" ").filter(Boolean),f=u.length>=2?(u[0][0]+u[1][0]).toUpperCase():p.slice(0,2).toUpperCase();d&&(d.style.background=n,d.style.borderColor=i),s&&(s.textContent=f,s.style.color=i)}document.getElementById("color1").addEventListener("input",d=>{i=d.target.value,document.getElementById("swatch1").style.background=i,l()}),document.getElementById("color2").addEventListener("input",d=>{n=d.target.value,document.getElementById("swatch2").style.background=n,l()});function a(d){document.querySelectorAll(".setup-step").forEach(s=>s.classList.remove("active")),document.getElementById(`step-${d}`).classList.add("active"),document.getElementById("step-num").textContent=d,document.getElementById("progress-fill").style.width=`${Math.round(d/3*100)}%`,d===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const d=document.getElementById("setup-pseudo").value.trim(),s=document.getElementById("step1-error");if(s.textContent="",d.length<3){s.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:p}=await k.from("users").select("id").eq("pseudo",d).maybeSingle();if(p){s.textContent="Ce pseudo est déjà pris.";return}a(2)}),document.getElementById("step2-back").addEventListener("click",()=>a(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const d=document.getElementById("setup-club").value.trim(),s=document.getElementById("step2-error");if(s.textContent="",d.length<2){s.textContent="Nom trop court (min. 2 caractères).";return}const{data:p}=await k.from("users").select("id").eq("club_name",d).maybeSingle();if(p){s.textContent="Ce nom de club est déjà pris.";return}a(3)}),document.getElementById("step3-back").addEventListener("click",()=>a(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const d=document.getElementById("setup-pseudo").value.trim(),s=document.getElementById("setup-club").value.trim(),p=document.getElementById("step3-error"),u=document.getElementById("step3-finish");p.textContent="",u.disabled=!0,u.textContent="Création en cours…";try{const{error:f}=await k.from("users").insert({id:t.user.id,pseudo:d,club_name:s,club_color1:i,club_color2:n,credits:1e4});if(f)throw f;await Bt(t.user.id),await c(),r(`Bienvenue ${d} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(f){p.textContent=f.message,u.disabled=!1,u.textContent="🚀 Créer mon profil !"}})}async function Bt(e){const{data:t}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const o=t,r=o.filter(a=>a.job==="GK"),c=o.filter(a=>a.job!=="GK"),i=[];for(let a=0;a<5;a++){let d=[];if(a===0&&r.length>0){const s=r[Math.floor(Math.random()*r.length)];d.push(s);const p=Xe([...c]).slice(0,3);d.push(...p)}else d=Xe([...o]).slice(0,4);d.forEach(s=>{i.push({owner_id:e,player_id:s.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(a=>{i.push({owner_id:e,card_type:"game_changer",gc_type:a})});const l=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];i.push({owner_id:e,card_type:"formation",formation:l[Math.floor(Math.random()*l.length)]}),i.length>0&&await k.from("cards").insert(i),await k.from("users").update({first_booster_opened:!0}).eq("id",e)}function Xe(e){for(let t=e.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}return e}async function Je(e,{state:t,navigate:o,toast:r}){var n,l;const c=t.profile;if(!c)return;const{data:i}=await k.from("matches").select("id,home_score,away_score,status,mode,winner_id,created_at").or(`home_id.eq.${c.id},away_id.eq.${c.id}`).eq("status","finished").order("created_at",{ascending:!1}).limit(3);e.innerHTML=`
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
      ${i&&i.length>0?`
      <div>
        <div class="section-title">⚽ Derniers matchs</div>
        <div class="card-panel" style="padding:0">
          ${i.map(a=>{const d=a.winner_id===c.id,s=a.home_score===a.away_score,p=s?"N":d?"V":"D",u=s?"#888":d?"#1A6B3C":"#c0392b",f={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat"}[a.mode]||a.mode,x=new Date(a.created_at).toLocaleDateString("fr",{month:"short",day:"numeric"});return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
              <div>
                <div style="font-size:13px;font-weight:600">${f}</div>
                <div style="font-size:11px;color:var(--gray-600)">${x}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <span style="font-size:14px;font-weight:700">${a.home_score} - ${a.away_score}</span>
                <span style="background:${u};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${p}</span>
              </div>
            </div>`}).join("")}
        </div>
      </div>`:""}

      <!-- Logout -->
      <div style="text-align:center;padding:12px 0;display:flex;flex-direction:column;gap:8px;align-items:center">
        <button class="btn btn-ghost btn-sm" id="logout-btn" style="color:var(--gray-600)">Déconnexion</button>
        ${c.is_admin?`
        <a href="/manager-wars/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:6px 16px;border-radius:8px">
          ⚙️ Admin Editor
        </a>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(a=>{a.addEventListener("click",d=>{d.preventDefault(),o(a.dataset.nav)})}),(n=document.getElementById("nav-rankings"))==null||n.addEventListener("click",()=>o("rankings")),(l=document.getElementById("nav-matches"))==null||l.addEventListener("click",()=>o("matches")),e.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",()=>{if(a.classList.add("tapped"),setTimeout(()=>a.classList.remove("tapped"),200),a.dataset.action==="match-ai"){St(o);return}r("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await k.auth.signOut(),window.location.reload()})}function St(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2000",o.innerHTML=`
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
  `,document.body.appendChild(o);const r=()=>o.remove();document.getElementById("diff-cancel").addEventListener("click",r),o.addEventListener("click",c=>{c.target===o&&r()}),o.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{r(),e("match",{matchMode:c.dataset.mode})})})}const de={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function U(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Qe=["ATT","MIL","DEF","GK"];function ct(e){let t=0;const o=e.length;for(let r=0;r<o;r++)for(let c=r+1;c<o;c++){const i=e[r],n=e[c];if(!i||!n)continue;const l=i._col!==void 0&&n._col!==void 0&&i._col===n._col,a=i._col!==void 0&&n._col!==void 0&&Math.abs(i._col-n._col)===1,d=Qe.indexOf(i._line),s=Qe.indexOf(n._line),p=Math.abs(d-s)===1;(i._line===n._line&&a||l&&p)&&(i.country_code&&n.country_code&&i.country_code===n.country_code&&t++,i.club_id&&n.club_id&&i.club_id===n.club_id&&t++)}return t}function pt(e,t={}){const o=e.reduce((i,n)=>{const l=n._line||n.job;return i+(Number(l==="MIL"?n.note_m:n.note_a)||0)+(n.boost||0)},0),r=ct(e);let c=o+r;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:o,links:r,total:Math.max(0,c)}}function ut(e,t={}){const o=e.reduce((i,n)=>{const l=n._line||n.job;let a=0;return l==="GK"?a=Number(n.note_g)||0:l==="MIL"?a=Number(n.note_m)||0:a=Number(n.note_d)||0,i+a+(n.boost||0)},0),r=ct(e);let c=o+r;return t.stolenNote&&(c-=t.stolenNote),{base:o,links:r,total:Math.max(0,c)}}function ft(e,t,o={}){return o.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function gt(e,t,o="easy"){const r=e.filter(n=>!n.used);if(!r.length)return[];const c=[...r].sort((n,l)=>{const a=t==="attack"?U(n,"ATT"):n._line==="GK"?U(n,"GK"):U(n,"DEF");return(t==="attack"?U(l,"ATT"):l._line==="GK"?U(l,"GK"):U(l,"DEF"))-a});let i=o==="easy"?1+Math.floor(Math.random()*2):o==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(i,c.length,3))}function Ft(e,t){const o={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(o[e]||o.vs_ai_easy)[t]||0}const xt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ee={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},be=["GK","DEF","MIL","ATT"],Dt=["Tous","GK","DEF","MIL","ATT"],Gt={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},qe={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function yt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function xe(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Me(e,t=""){var p,u;const o=e.player;if(!o)return"";const r=o.job||"ATT",c=Ee[r],i=xt[o.rarity]||"#ccc",n=xe(o,r),l=o.job2?xe(o,o.job2):null,a=o.job2?Ee[o.job2]:null,d=yt(o),s=qe[o.country_code]||o.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${i};cursor:pointer;flex-shrink:0;position:relative
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
            fill="white" font-family="Arial Black,Arial">${n}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${l!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${a}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${l}</text>
        </svg>`:""}
      </div>
      <!-- Portrait -->
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${d?`<img src="${d}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${o.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${s}</div>
        ${(p=o.clubs)!=null&&p.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((u=o.clubs)==null?void 0:u.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Ze(e){const t=e.job||"ATT",o=xe(e,t),r=qe[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${r}</div>
      </div>
    </div>
  </div>`}async function Rt(e,t){const{state:o,navigate:r,toast:c,openModal:i,closeModal:n}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await k.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:a}=await k.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),d=(l||[]).filter(E=>E.card_type==="player"&&E.player),s=(l||[]).filter(E=>E.card_type==="game_changer"),p=(l||[]).filter(E=>E.card_type==="formation"),{data:u}=await k.from("gc_definitions").select("name,gc_type,color,effect,image_url"),f={};(u||[]).forEach(E=>{f[E.name]=E});const g=Object.keys(Re),x=Object.keys(de),m={};d.forEach(E=>{const A=E.player.id;m[A]=(m[A]||0)+1}),new Set(Object.keys(m).map(E=>String(E)));const _=new Set(p.map(E=>E.formation)),b=new Set(s.map(E=>E.gc_type));let y="player",w="Tous",L="",h=!1;function v(){return[...d].sort((E,A)=>{const j=be.indexOf(E.player.job),C=be.indexOf(A.player.job);return j!==C?j-C:(E.player.surname_encoded||"").localeCompare(A.player.surname_encoded||"")})}function $(){return[...a||[]].sort((E,A)=>{const j=be.indexOf(E.job),C=be.indexOf(A.job);return j!==C?j-C:(E.surname_encoded||"").localeCompare(A.surname_encoded||"")})}function I(){return v().filter(E=>{const A=E.player,j=w==="Tous"||A.job===w,C=!L||`${A.firstname} ${A.surname_encoded}`.toLowerCase().includes(L);return j&&C})}function T(){return $().filter(E=>{const A=w==="Tous"||E.job===w,j=!L||`${E.firstname} ${E.surname_encoded}`.toLowerCase().includes(L);return A&&j})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${y==="player"?"var(--green)":"transparent"};
        color:${y==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${d.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${y==="formation"?"var(--green)":"transparent"};
        color:${y==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${p.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${y==="gc"?"var(--green)":"transparent"};
        color:${y==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${s.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function B(){const E=document.getElementById("col-filters");E&&(y==="player"?(E.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${L}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Dt.map(A=>`
            <button class="filter-btn" data-job="${A}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${A===w?"var(--green)":"var(--gray-200)"};
                background:${A===w?"var(--green)":"#fff"};
                color:${A===w?"#fff":"var(--gray-600)"}">
              ${A}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${h?"var(--yellow)":"var(--gray-200)"};
              background:${h?"var(--yellow)":"#fff"};
              color:${h?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${h?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",A=>{L=A.target.value.toLowerCase(),S()}),e.querySelectorAll(".filter-btn").forEach(A=>{A.addEventListener("click",()=>{w=A.dataset.job,B(),S()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{h=!h,B(),S()})):(E.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${h?"var(--yellow)":"var(--gray-200)"};
              background:${h?"var(--yellow)":"#fff"};
              color:${h?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${h?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{h=!h,B(),S()})))}function S(){const E=document.getElementById("col-grid");E&&(y==="player"?P(E):y==="formation"?ie(E):oe(E))}function q(E,A,j,C,z){z=z||"#7a28b8";const F=document.getElementById("col-grid"),M=document.getElementById("col-big");if(!F||!M)return;var H=0;function N(){M.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+A(E[H])+"</div>";var O=M.querySelector("[data-card-id],[data-form-id],[data-gc-id]");O&&O.addEventListener("click",function(){C(E[H])}),requestAnimationFrame(function(){var G=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!G||!M)){var X=M.clientHeight-8,Q=M.clientWidth-24,Z=G.offsetHeight,ee=G.offsetWidth;if(Z>0&&ee>0&&X>40){var ne=Math.min(X/Z,Q/ee,1);G.style.transform="scale("+ne.toFixed(3)+")",G.style.transformOrigin="top center"}}}),F.innerHTML=E.map(function(G,X){return'<div class="col-mini-item" data-idx="'+X+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(X===H?z:"transparent")+';transition:border-color .15s;overflow:hidden">'+j(G,X===H)+"</div>"}).join(""),F.querySelectorAll(".col-mini-item").forEach(function(G){G.addEventListener("click",function(){H=Number(G.dataset.idx),N(),G.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}N()}function K(E){var A=.54,j=Math.round(140*A),C=Math.round(310*A),z;if(!E||E._fake){var F=E?E.player:null;if(!F)return"";z=Ze(F)}else z=Me(E,"");return'<div style="width:'+j+"px;height:"+C+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+A+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+z+"</div></div>"}function D(E,A,j){A=A||100,j=j||140;var C=me[E]||{},z={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},F=Math.max(3,Math.round(A*.06)),M=Object.entries(C).map(function(N){var O=N[0],G=N[1],X=O.replace(/\d+$/,""),Q=z[X]||"#888",Z=Math.round(G.x*A),ee=Math.round(G.y*j);return'<circle cx="'+Z+'" cy="'+ee+'" r="'+F+'" fill="'+Q+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),H=Math.max(1,Math.round(A/50));return'<svg viewBox="0 0 '+A+" "+j+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+A+'" height="'+j+'" fill="#1A6B3C"/><rect x="'+Math.round(A*.2)+'" y="'+Math.round(j*.02)+'" width="'+Math.round(A*.6)+'" height="'+Math.round(j*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+H+'"/><line x1="0" y1="'+Math.round(j*.5)+'" x2="'+A+'" y2="'+Math.round(j*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+H+'"/><ellipse cx="'+Math.round(A*.5)+'" cy="'+Math.round(j*.5)+'" rx="'+Math.round(A*.18)+'" ry="'+Math.round(j*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+H+'"/><rect x="'+Math.round(A*.2)+'" y="'+Math.round(j*.82)+'" width="'+Math.round(A*.6)+'" height="'+Math.round(j*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+H+'"/>'+M+"</svg>"}function W(E,A,j){var C=j>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+j+"</div>":"",z=A?'data-form-id="'+A.id+'"':"",F=E.length>7?14:E.length>5?16:19,M=!!A;return"<div "+z+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(M?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(M?"":"filter:grayscale(1);opacity:0.5")+'">'+C+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(M?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+F+"px;font-weight:900;color:"+(M?"#1A6B3C":"#aaa")+';line-height:1">'+E+'</div></div><div style="flex:1;overflow:hidden;background:'+(M?"#1A6B3C":"#ccc")+'">'+D(E,140,220)+"</div></div>"}function Y(E,A){var j=.54,C=Math.round(140*j),z=Math.round(305*j),F=Math.round(z*.22),M=z-F,H=E.length>7?5:7,N=D(E,C,M),O=A?"1.5px solid #2a7a40":"1px solid #ddd",G=A?"":"filter:grayscale(1);opacity:0.45;",X=A?"#1A6B3C":"#bbb",Q="#fff";return'<div style="width:'+C+"px;height:"+z+"px;border-radius:6px;border:"+O+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+G+'"><div style="height:'+F+"px;background:"+X+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+H+"px;font-weight:900;color:"+Q+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(C-4)+'px">'+E+'</span></div><div style="height:'+M+'px;overflow:hidden;flex-shrink:0">'+N+"</div></div>"}function P(E){if(h){const A=T();if(!A.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const j=A.map(C=>d.find(z=>z.player.id===C.id)||{_fake:!0,player:C,id:"fake-"+C.id});q(j,C=>C._fake?Ze(C.player):Me(C,""),C=>C._fake?K({player:C.player,id:"x",_fake:!0}):K(C),C=>{C._fake||et(C,d,m,t)},"#1A6B3C")}else{const A=I();if(!A.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const j={},C=[];A.forEach(z=>{j[z.player.id]||(j[z.player.id]=!0,C.push(z))}),q(C,z=>{const F=m[z.player.id]||1,M=F>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${F}</div>`:"",N=d.filter(O=>O.player.id===z.player.id&&O.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Me(z,M+N)},z=>K(z),z=>et(z,d,m,t),"#1A6B3C")}}function ie(E){const A=h?g:[..._];if(!A.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const j=A.map(C=>({formation:C,card:p.find(z=>z.formation===C)||null,owned:_.has(C)}));q(j,({formation:C,card:z,owned:F})=>W(C,F?z:null,F?p.filter(M=>M.formation===C).length:0),({formation:C,owned:z})=>Y(C,z),({card:C,owned:z})=>{z&&C&&Nt(C,p,t,i)},"#1A6B3C")}function oe(E){const A=Object.keys(f),j=h?A.length?A:x:[...b];if(!j.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const C=j.map(z=>({type:z,gc:de[z]||{icon:"⚡",desc:""},def:f[z]||null,owned:b.has(z),card:s.find(F=>F.gc_type===z)||null}));q(C,({type:z,gc:F,def:M,owned:H,card:N})=>{const O=H?s.filter(zt=>zt.gc_type===z).length:0,G=O>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${O}</div>`:"",X=(M==null?void 0:M.gc_type)==="ultra_game_changer",Q={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Z={purple:"#b06ce0",light_blue:"#00d4ef"},ee=Q[M==null?void 0:M.color]||Q.purple,ne=Z[M==null?void 0:M.color]||Z.purple,he=(M==null?void 0:M.effect)||F.desc||"",Ye=M!=null&&M.image_url?`/manager-wars/icons/${M.image_url}`:null;return H&&N?`<div data-gc-id="${N.id}" data-gc-type="${z}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${ne};background:${ee};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${ne}66;cursor:pointer">
          ${G}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${z.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${z}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${X?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Ye?`<img src="${Ye}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${F.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${he.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${z}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${F.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:z,gc:F,def:M,owned:H})=>H?(()=>{const N=Math.round(75.60000000000001),O=Math.round(310*.54),G=Math.round(O*.65),X=Math.round(O*.18),Q={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Z={purple:"#9b59b6",light_blue:"#00bcd4"},ee=Q[M==null?void 0:M.color]||Q.purple,ne=Z[M==null?void 0:M.color]||Z.purple,he=M!=null&&M.image_url?`/manager-wars/icons/${M.image_url}`:null;return`<div style="width:${N}px;height:${O}px;border-radius:8px;background:${ee};border:1px solid ${ne};display:flex;flex-direction:column;overflow:hidden"><div style="height:${X}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${N-6}px">${z}</span></div><div style="height:${G}px;display:flex;align-items:center;justify-content:center">${he?`<img src="${he}" style="max-width:${N-8}px;max-height:${G-4}px;object-fit:contain">`:`<span style="font-size:24px">${F.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((M==null?void 0:M.effect)||F.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const N=Math.round(75.60000000000001),O=Math.round(310*.54);return`<div style="width:${N}px;height:${O}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${F.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${z}</span></div>`})(),({type:z,owned:F,def:M})=>{F&&qt(z,M,i)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(E=>{E.addEventListener("click",()=>{y=E.dataset.tab,w="Tous",L="",h=!1,e.querySelectorAll(".col-tab-btn").forEach(A=>{const j=A.dataset.tab===y;A.style.borderBottomColor=j?"var(--green)":"transparent",A.style.color=j?"var(--green)":"var(--gray-600)"}),B(),S()})}),B(),S()}function qt(e,t,o){const r=de[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",i={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},n={purple:"#b06ce0",light_blue:"#00d4ef"},l=i[t==null?void 0:t.color]||i.purple,a=n[t==null?void 0:t.color]||n.purple,d=(t==null?void 0:t.name)||e,s=(t==null?void 0:t.effect)||r.desc,p=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;o("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${a};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${d}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${p?`<img src="${p}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${r.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${s}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ue=1e3;function Nt(e,t,o,r){var x,m,_;const{state:c,toast:i,closeModal:n,navigate:l,refreshProfile:a}=o,d=e.formation,s={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function p(){const b=me[d]||{},y=Re[d]||[],w=290,L=360,h=20;function v(I){const T=b[I];return T?{x:T.x*w,y:T.y*L}:null}let $=`<svg width="${w}" height="${L}" viewBox="0 0 ${w} ${L}" xmlns="http://www.w3.org/2000/svg">`;for(const[I,T]of y){const B=v(I),S=v(T);!B||!S||($+=`<line x1="${B.x}" y1="${B.y}" x2="${S.x}" y2="${S.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const I of Object.keys(b)){const T=v(I);if(!T)continue;const B=I.replace(/\d+/,""),S=s[B]||"#555";$+=`<circle cx="${T.x}" cy="${T.y}" r="${h}" fill="${S}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,$+=`<text x="${T.x}" y="${T.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${B}</text>`}return $+="</svg>",$}const u=t.filter(b=>b.formation===d),f=u.length,g=!e.is_for_sale;r(`Formation ${d}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${ue.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${f-1} carte${f-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${f<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${g?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${ue}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(x=document.getElementById("direct-sell-form-btn"))==null||x.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${d} pour ${ue.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const b=u.find(w=>!w.is_for_sale)||u[0];if(!b){i("Aucune carte à vendre","error");return}const{error:y}=await k.from("cards").delete().eq("id",b.id);if(y){i(y.message,"error");return}await k.from("users").update({credits:(c.profile.credits||0)+ue}).eq("id",c.profile.id),await a(),i(`+${ue.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),n(),l("collection")}),(m=document.getElementById("market-sell-form-btn"))==null||m.addEventListener("click",async()=>{const b=parseInt(document.getElementById("sell-price-form").value);if(!b||b<1){i("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:b}).eq("id",e.id),await k.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:b}),i("Carte mise en vente sur le marché !","success"),n(),l("collection")}),(_=document.getElementById("cancel-sell-form-btn"))==null||_.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),i("Annonce retirée","success"),n(),l("collection")})}function et(e,t,o,r){var h,v,$,I,T,B;const{state:c,toast:i,openModal:n,closeModal:l,navigate:a,refreshProfile:d}=r,s=e.player,p=t.filter(S=>S.player.id===s.id),u=p.length,f=Gt[s.rarity]||1e3,g=s.rarity!=="legende",x=yt(s),m=xe(s,s.job),_=s.job2?xe(s,s.job2):null,b=Ee[s.job]||"#1A6B3C",y=s.job2?Ee[s.job2]:null,w=xt[s.rarity]||"#ccc",L=qe[s.country_code]||s.country_code||"";n(`${s.firstname} ${s.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${w};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${s.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(s.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${b}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${b}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${m}</text>
            </svg>
            ${_!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${y}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${_}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${x?`<img src="${x}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${s.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${L}</div>
            ${(h=s.clubs)!=null&&h.logo_url?`<img src="${s.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((v=s.clubs)==null?void 0:v.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${w}">${s.rarity.toUpperCase()}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${s.job}${s.job2?" / "+s.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">NOTES</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;font-size:12px">
            <span>GK <b>${s.note_g||0}</b></span>
            <span>DEF <b>${s.note_d||0}</b></span>
            <span>MIL <b>${s.note_m||0}</b></span>
            <span>ATT <b>${s.note_a||0}</b></span>
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${u}</div>
        </div>
      </div>
    </div>

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe selon rareté</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${f.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${u-1} carte${u-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${u<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${g&&!e.is_for_sale?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price" min="1" placeholder="Prix en crédits" value="${s.sell_price||5e3}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-btn">Retirer</button>
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),($=document.getElementById("close-detail"))==null||$.addEventListener("click",l),(I=document.getElementById("direct-sell-btn"))==null||I.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${s.surname_encoded} pour ${f.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const S=p.find(K=>!K.is_for_sale)||p[0];if(!S){i("Aucune carte à vendre","error");return}const{error:q}=await k.from("cards").delete().eq("id",S.id);if(q){i(q.message,"error");return}await k.from("users").update({credits:(c.profile.credits||0)+f}).eq("id",c.profile.id),await d(),i(`+${f.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),a("collection")}),(T=document.getElementById("market-sell-btn"))==null||T.addEventListener("click",async()=>{const S=parseInt(document.getElementById("sell-price").value);if(!S||S<1){i("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:S}).eq("id",e.id),await k.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:S}),i("Carte mise en vente sur le marché !","success"),l(),a("collection")}),(B=document.getElementById("cancel-sell-btn"))==null||B.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),i("Annonce retirée","success"),l(),a("collection")})}const Ae={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},te={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Le(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function mt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ht(e){var o;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(o=e==null?void 0:e.clubs)!=null&&o.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Ot(e,t=44,o=58){var f;const r=e?Le(e):null,c=e?ht(e):null,i=mt(e==null?void 0:e.country_code),n=(e==null?void 0:e.job)||"MIL",l=te[n]||"#555",a={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",d=Number(n==="GK"?e==null?void 0:e.note_g:n==="DEF"?e==null?void 0:e.note_d:n==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,s=Math.round(o*.19),p=Math.round(o*.25),u=o-s-p;return e?`<div style="width:${t}px;height:${o}px;border-radius:5px;border:2px solid ${a};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${s}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${r?`<img src="${r}" style="position:absolute;top:${s}px;left:0;width:${t}px;height:${u}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${i?`<img src="${i}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">🌍</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${d}</span>
      ${c?`<img src="${c}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:(f=e==null?void 0:e.clubs)!=null&&f.encoded_name?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${o}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Ce(e,t){const{state:o,navigate:r,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:i}=await k.from("decks").select("id,name,formation_card_id").eq("owner_id",o.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(i==null?void 0:i.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(i==null?void 0:i.length)>0?i.map(n=>`
          <div class="card-panel" data-open-deck="${n.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="font-weight:700;font-size:15px;flex:1">${n.name}</div>
            <div style="display:flex;gap:6px" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${n.id}" data-name="${n.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${n.id}" data-name="${n.name}">🗑️</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const n=prompt("Nom du deck :",`Deck ${((i==null?void 0:i.length)||0)+1}`);if(!n)return;const{data:l,error:a}=await k.from("decks").insert({owner_id:o.profile.id,name:n}).select().single();if(a){c(a.message,"error");return}c("Deck créé !","success"),tt(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(n=>{n.addEventListener("click",()=>tt(n.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(n=>{n.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",n.dataset.name);if(!l||l===n.dataset.name)return;const{error:a}=await k.from("decks").update({name:l}).eq("id",n.dataset.rename);if(a){c(a.message,"error");return}c("Deck renommé !","success"),Ce(e,t)})}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${n.dataset.name}" ? Cette action est irréversible.`))return;await k.from("deck_cards").delete().eq("deck_id",n.dataset.delete);const{error:l}=await k.from("decks").delete().eq("id",n.dataset.delete);if(l){c(l.message,"error");return}c("Deck supprimé.","success"),Ce(e,t)})})}async function tt(e,t,o){const{state:r,toast:c}=o;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:i}=await k.from("decks").select("*").eq("id",e).single(),{data:n}=await k.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",r.profile.id),l=(n||[]).filter(f=>f.card_type==="player"&&f.player),a=(n||[]).filter(f=>f.card_type==="formation"),d=a.map(f=>f.formation).filter(Boolean),{data:s}=await k.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=i.formation||"4-4-2";d.length>0&&!d.includes(p)&&(p=d[0]);const u={deckId:e,name:i.name,formation:p,formationCardId:i.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:a,availableFormations:d};(s||[]).forEach(f=>{f.is_starter?u.slots[f.position]=f.card_id:u.subs.includes(f.card_id)||u.subs.push(f.card_id)}),le(t,u,o)}function le(e,t,o){var a;const{navigate:r}=o;Ae[t.formation];const c=it(t.formation),i=c.filter(d=>t.slots[d]).length,n=t.availableFormations.length>0?t.availableFormations:Object.keys(Ae),l=t.subs.map(d=>t.playerCards.find(s=>s.id===d)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div class="page">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${t.name}</h2>
        <p>${i}/11 titulaires · ${t.subs.length}/5 remplaçants</p>
      </div>
    </div>

    <!-- Formation (uniquement les cartes possédées) -->
    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <label style="font-size:11px;margin-bottom:4px;display:block">Formation ${t.availableFormations.length===0?"(aucune carte — toutes disponibles)":""}</label>
      <select id="formation-select" style="width:100%;padding:7px;border-radius:6px;border:1.5px solid var(--gray-200)">
        ${n.map(d=>`<option value="${d}" ${d===t.formation?"selected":""}>${d}</option>`).join("")}
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
        ${l.map(d=>{const s=d.player;return`<div style="position:relative;flex-shrink:0">
            ${Ot(s,44,58)}
            <button data-remove-sub="${d.id}"
              style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>
          </div>`}).join("")}
        ${t.subs.length<5?'<div id="add-sub-btn" style="width:44px;height:58px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:22px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${i<11?"disabled":""}>
        ${i<11?`Placez encore ${11-i} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`,Pt(e,t,c,o),document.getElementById("builder-back").addEventListener("click",()=>r("decks")),document.getElementById("formation-select").addEventListener("change",d=>{t.formation=d.target.value;const s=it(t.formation),p={};s.forEach(u=>{t.slots[u]&&(p[u]=t.slots[u])}),t.slots=p,le(e,t,o)}),document.getElementById("save-deck").addEventListener("click",()=>Ut(t,o)),e.querySelectorAll("[data-remove-sub]").forEach(d=>{d.addEventListener("click",()=>{t.subs=t.subs.filter(s=>s!==d.dataset.removeSub),le(e,t,o)})}),(a=document.getElementById("add-sub-btn"))==null||a.addEventListener("click",()=>{Kt(t,e,o)})}function Pt(e,t,o,r){const c=e.querySelector("#deck-field");if(!c)return;const i=me[t.formation]||{},n=lt(t.formation)||[],l={};for(const _ of o){const b=t.slots[_],y=b?t.playerCards.find(w=>w.id===b):null;l[_]=y?y.player:null}const a=300,d=300,s=48,p=64,u=13,f=16,g=38;function x(_){const b=i[_];return b?{x:b.x*a,y:b.y*d}:null}let m="";for(const[_,b]of n){const y=x(_),w=x(b);if(!y||!w)continue;const L=l[_]?{...l[_],club_id:l[_].club_id,country_code:l[_].country_code,rarity:l[_].rarity}:null,h=l[b]?{...l[b],club_id:l[b].club_id,country_code:l[b].country_code,rarity:l[b].rarity}:null,v=ge(L,h);v==="#ff3333"||v==="#cc2222"?m+=`<line x1="${y.x.toFixed(1)}" y1="${y.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${v}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(m+=`<line x1="${y.x.toFixed(1)}" y1="${y.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${v}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,m+=`<line x1="${y.x.toFixed(1)}" y1="${y.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${v}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const _ of o){const b=x(_);if(!b)continue;const y=l[_],w=_.replace(/\d+/,""),L=te[w]||"#555",h=(b.x-s/2).toFixed(1),v=(b.y-p/2).toFixed(1),$={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[y==null?void 0:y.rarity]||"#aaa";if(y){const I=Le(y),T=ht(y),B=mt(y.country_code),S=Number(w==="GK"?y.note_g:w==="DEF"?y.note_d:w==="MIL"?y.note_m:y.note_a)||0,q=p-u-f;m+=`<defs><clipPath id="dcp-${_}"><rect x="${h}" y="${(b.y-p/2+u).toFixed(1)}" width="${s}" height="${q}"/></clipPath></defs>`,m+=`<rect x="${h}" y="${v}" width="${s}" height="${p}" rx="5" fill="${L}"/>`,I&&(m+=`<image href="${I}" x="${h}" y="${(b.y-p/2+u).toFixed(1)}" width="${s}" height="${q}" clip-path="url(#dcp-${_})" preserveAspectRatio="xMidYMin slice"/>`),m+=`<rect x="${h}" y="${v}" width="${s}" height="${u}" fill="rgba(255,255,255,0.93)"/>`,m+=`<text x="${b.x.toFixed(1)}" y="${(b.y-p/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(y.surname_encoded||"").slice(0,9)}</text>`;const K=(b.y+p/2-f).toFixed(1);m+=`<rect x="${h}" y="${K}" width="${s}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,B&&(m+=`<image href="${B}" x="${(b.x-21).toFixed(1)}" y="${(b.y+p/2-f+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),m+=`<text x="${b.x.toFixed(1)}" y="${(b.y+p/2-f/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${S}</text>`,T&&(m+=`<image href="${T}" x="${(b.x+s/2-14).toFixed(1)}" y="${(b.y+p/2-f+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),m+=`<rect x="${h}" y="${v}" width="${s}" height="${p}" rx="5" fill="none" stroke="${$}" stroke-width="2"/>`}else m+=`<rect x="${h}" y="${v}" width="${s}" height="${p}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,m+=`<text x="${b.x.toFixed(1)}" y="${b.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,m+=`<text x="${b.x.toFixed(1)}" y="${(b.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${w}</text>`;m+=`<rect x="${h}" y="${v}" width="${s}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${_}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-g} ${-g} ${a+g*2} ${d+g*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${m}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(_=>{_.addEventListener("click",()=>Ht(_.dataset.pos,t,e,r))})}function Ht(e,t,o,r){var u,f,g;const{openModal:c,closeModal:i}=r,n=e.replace(/\d+/,""),l=t.slots[e],a=l?t.playerCards.find(x=>x.id===l):null;(u=a==null?void 0:a.player)==null||u.id;const d=new Set;Object.entries(t.slots).forEach(([x,m])=>{var b;if(x===e||!m)return;const _=t.playerCards.find(y=>y.id===m);(b=_==null?void 0:_.player)!=null&&b.id&&d.add(_.player.id)}),t.subs.forEach(x=>{var _;const m=t.playerCards.find(b=>b.id===x);(_=m==null?void 0:m.player)!=null&&_.id&&d.add(m.player.id)});const s=new Set,p=t.playerCards.filter(x=>{const m=x.player;return!(m.job===n||m.job2===n)||d.has(m.id)||s.has(m.id)?!1:(s.add(m.id),!0)});p.sort((x,m)=>{const _=n==="GK"?x.player.note_g:n==="DEF"?x.player.note_d:n==="MIL"?x.player.note_m:x.player.note_a;return(n==="GK"?m.player.note_g:n==="DEF"?m.player.note_d:n==="MIL"?m.player.note_m:m.player.note_a)-_}),c(`Choisir ${n} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${p.length>0?p.map(x=>{var w,L;const m=x.player,_=n==="GK"?m.note_g:n==="DEF"?m.note_d:n==="MIL"?m.note_m:m.note_a,b=Le(m),y={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[m.rarity];return`<div class="player-option" data-card-id="${x.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${te[n]}">
            ${b?`<img src="${b}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${te[n]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${n}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${m.firstname} ${m.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${m.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${m.country_code}">
              ${(w=m.clubs)!=null&&w.logo_url?`<img src="${m.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((L=m.clubs)==null?void 0:L.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${m.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${te[n]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${y};flex-shrink:0">
            ${_}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(f=document.getElementById("close-selector"))==null||f.addEventListener("click",i),(g=document.getElementById("remove-player"))==null||g.addEventListener("click",()=>{delete t.slots[e],i(),le(o,t,r)}),document.querySelectorAll(".player-option").forEach(x=>{x.addEventListener("click",()=>{t.slots[e]=x.dataset.cardId,i(),le(o,t,r)})})}function Kt(e,t,o){var a;const{openModal:r,closeModal:c}=o,i=new Set;Object.values(e.slots).filter(Boolean).forEach(d=>{var p;const s=e.playerCards.find(u=>u.id===d);(p=s==null?void 0:s.player)!=null&&p.id&&i.add(s.player.id)}),e.subs.forEach(d=>{var p;const s=e.playerCards.find(u=>u.id===d);(p=s==null?void 0:s.player)!=null&&p.id&&i.add(s.player.id)});const n=new Set,l=e.playerCards.filter(d=>{var s,p,u;return i.has((s=d.player)==null?void 0:s.id)||n.has((p=d.player)==null?void 0:p.id)?!1:(n.add((u=d.player)==null?void 0:u.id),!0)});r("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(d=>{var f;const s=d.player,p=Le(s),u=s.job==="GK"?s.note_g:s.job==="DEF"?s.note_d:s.job==="MIL"?s.note_m:s.note_a;return`<div class="player-option" data-card-id="${d.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${te[s.job]}">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${s.firstname} ${s.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${s.job} · ${s.country_code} · ${((f=s.clubs)==null?void 0:f.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${te[s.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${u}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(a=document.getElementById("close-sub-selector"))==null||a.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(d=>{d.addEventListener("click",()=>{e.subs.push(d.dataset.cardId),c(),le(t,e,o)})})}async function Ut(e,t){const{state:o,toast:r,navigate:c}=t,i=e.formationCards.find(a=>a.formation===e.formation),n=(i==null?void 0:i.id)||e.formationCardId;await k.from("decks").update({formation:e.formation,formation_card_id:n||null}).eq("id",e.deckId),await k.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([a,d],s)=>{l.push({deck_id:e.deckId,card_id:d,position:a,is_starter:!0,slot_order:s})}),e.subs.forEach((a,d)=>{l.push({deck_id:e.deckId,card_id:a,position:`SUB${d+1}`,is_starter:!1,slot_order:100+d})}),l.length>0){const{error:a}=await k.from("deck_cards").insert(l);if(a){r(a.message,"error");return}}r("Deck enregistré ✅","success"),c("decks")}function it(e){const t=Ae[e]||Ae["4-4-2"],o=["GK1"];for(let r=1;r<=t.DEF;r++)o.push(`DEF${r}`);for(let r=1;r<=t.MIL;r++)o.push(`MIL${r}`);for(let r=1;r<=t.ATT;r++)o.push(`ATT${r}`);return o}const Vt="modulepreload",Yt=function(e){return"/manager-wars/"+e},ot={},Wt=function(t,o,r){let c=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));c=Promise.allSettled(o.map(a=>{if(a=Yt(a),a in ot)return;ot[a]=!0;const d=a.endsWith(".css"),s=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":Vt,d||(p.as="script"),p.crossOrigin="",p.href=a,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((u,f)=>{p.addEventListener("load",u),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return c.then(n=>{for(const l of n||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};async function bt(){const{data:e}=await k.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await k.from("booster_drop_rates").select("*").in("booster_id",e.map(o=>o.id)).order("sort_order");return e.map(o=>({...o,rates:(t||[]).filter(r=>r.booster_id===o.id)}))}function Xt(e){if(!(e!=null&&e.length))return null;const t=e.reduce((r,c)=>r+Number(c.percentage),0);let o=Math.random()*t;for(const r of e)if(o-=Number(r.percentage),o<=0)return r;return e[e.length-1]}const Jt=Object.freeze(Object.defineProperty({__proto__:null,loadActiveBoosters:bt,rollDropRate:Xt},Symbol.toStringTag,{value:"Module"})),vt=()=>Object.keys(me),Qt=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],je={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Zt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}const ei={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ti={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};function ii(e){var c;const t={};(e.rates||[]).forEach(i=>{t[i.card_type]=(t[i.card_type]||0)+Number(i.percentage||0)});const o=((c=Object.entries(t).sort((i,n)=>n[1]-i[1])[0])==null?void 0:c[0])||"player",r=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+r,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:o,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function oi(e,{state:t,navigate:o,toast:r}){var n;const c=((n=t.profile)==null?void 0:n.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let i=[];try{i=(await bt()).map(ii)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}i.length||(i=Qt.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${i.map(l=>{const a=l.cost===0||c>=l.cost;return`<div class="booster-card ${a?"":"disabled"}" data-booster="${l.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${l.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${l.img}" alt="${l.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${l.name}</div>
            <div class="desc">${l.sub}</div>
            <div class="cost">${l.costLabel}</div>
            ${a?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const a=i.find(d=>d.id===l.dataset.booster);if(a){l.style.opacity="0.5",l.style.pointerEvents="none";try{await ni(a,{state:t,toast:r,navigate:o,container:e})}catch(d){r(d.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",a=>{a.stopPropagation();const d=i.find(s=>s.id===l.dataset.boosterId);ui(d)})})}async function ni(e,{state:t,toast:o,navigate:r,container:c}){if(e.cost>0&&t.profile.credits<e.cost){o("Crédits insuffisants","error");return}if(e.isPub)try{await xi()}catch(p){o(p.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:i}=await k.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),n=new Set((i||[]).filter(p=>p.card_type==="player").map(p=>p.player_id)),l=new Set((i||[]).filter(p=>p.card_type==="formation").map(p=>p.formation));let a=[];const d=e.type||"player";d==="player"?a=await di(t.profile,e.cardCount,e.cost):d==="game_changer"?a=await li(t.profile,e.cardCount,e.cost):d==="formation"?a=await ci(t.profile,e.cost):a=await si(t.profile,e),a.forEach(p=>{p.card_type==="player"&&p.player?p.isDuplicate=n.has(p.player.id):p.card_type==="formation"&&(p.isDuplicate=l.has(p.formation))});const{data:s}=await k.from("users").select("*").eq("id",t.profile.id).single();s&&(t.profile=s),pi(a,e,r)}function ri(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function re(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function ai(e,t){let o;switch(t){case"legende":o=e.filter(r=>r.rarity==="legende"),o.length||(o=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte")),o.length||(o=e.filter(r=>re(r)>=6));break;case"special":o=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte"),o.length||(o=e.filter(r=>re(r)>=6));break;case"normal_high":o=e.filter(r=>r.rarity==="normal"&&re(r)>=6),o.length||(o=e.filter(r=>re(r)>=6));break;default:o=e.filter(r=>r.rarity==="normal"&&re(r)>=1&&re(r)<=5),o.length||(o=e.filter(r=>r.rarity==="normal"));break}return o.length||(o=e),o[Math.floor(Math.random()*o.length)]}async function si(e,t){if(t.cost>0){const{error:c}=await k.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(c)throw c}const{rollDropRate:o}=await Wt(async()=>{const{rollDropRate:c}=await Promise.resolve().then(()=>Jt);return{rollDropRate:c}},void 0),r=[];for(let c=0;c<(t.cardCount||5);c++){const i=o(t.rates);if(i){if(i.card_type==="player"){let n=k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);i.rarity&&(n=n.eq("rarity",i.rarity));const{data:l}=await n;let a=l||[];if((i.note_min||i.note_max)&&(a=a.filter(p=>{const u=Math.max(Number(p.note_g)||0,Number(p.note_d)||0,Number(p.note_m)||0,Number(p.note_a)||0);return(!i.note_min||u>=i.note_min)&&(!i.note_max||u<=i.note_max)})),a.length||(i.note_min||i.note_max?(a=l||[],console.warn("[Booster] Aucun joueur avec note",i.note_min,"-",i.note_max,"— fallback rareté uniquement")):a=l||[]),!a.length)continue;const d=a[Math.floor(Math.random()*a.length)],{data:s}=await k.from("cards").insert({owner_id:e.id,player_id:d.id,card_type:"player"}).select().single();s&&r.push({...s,player:d})}else if(i.card_type==="game_changer"){const{data:n}=await k.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),l=n!=null&&n.length?n:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],d=l[Math.floor(Math.random()*l.length)].name,{data:s}=await k.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:d}).select().single();s&&r.push(s)}else if(i.card_type==="formation"){const n=vt(),l=n[Math.floor(Math.random()*n.length)],{data:a}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:l}).select();a!=null&&a[0]&&r.push(a[0])}}}return r}async function di(e,t,o){if(o>0){const{error:d}=await k.from("users").update({credits:e.credits-o}).eq("id",e.id);if(d)throw d}const{data:r}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(r!=null&&r.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=r.filter(d=>d.job==="GK"),i=r.filter(d=>d.job!=="GK"),n=!e.first_booster_opened&&c.length>0,l=[];for(let d=0;d<t;d++){const s=d===0&&n?c:d===0?i:r,p=ri(),u=ai(s,p);u&&l.push(u)}n&&await k.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:a}=await k.from("cards").insert(l.map(d=>({owner_id:e.id,player_id:d.id,card_type:"player"}))).select();return l.map((d,s)=>({...a[s],player:d}))}async function li(e,t,o){const{error:r}=await k.from("users").update({credits:e.credits-o}).eq("id",e.id);if(r)throw r;const{data:c}=await k.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),i=c!=null&&c.length?c:Object.keys(je).map(s=>({name:s,gc_type:"game_changer"})),n=Array.from({length:t},()=>{const s=i[Math.floor(Math.random()*i.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:s.name,gc_definition_id:s.id||null}}),{data:l,error:a}=await k.from("cards").insert(n).select();return a&&console.error("[Booster GC] Erreur insert:",a.message,a),(l||[]).map(s=>{const p=c==null?void 0:c.find(u=>u.name===s.gc_type||u.id===s.gc_definition_id);return{...s,_gcDef:p||null}})}async function ci(e,t){const{error:o}=await k.from("users").update({credits:e.credits-t}).eq("id",e.id);if(o)throw o;const r=vt(),c=r[Math.floor(Math.random()*r.length)],{data:i,error:n}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:c}).select();return n&&console.error("[Booster Formation] Erreur insert:",n.message,n),i||[]}function pi(e,t,o){var u;if(!e||e.length===0){const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",f.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(f),(u=f.querySelector("#anim-close-err"))==null||u.addEventListener("click",()=>f.remove());return}const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let c=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(c)return;c=!0;const f=document.getElementById("pack-visual");f.classList.add("shaking"),setTimeout(()=>{f.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",n(0)},600)},500)});let i=0;function n(f){i=f;const g=document.getElementById("reveal-phase");g.style.display="flex",l(f)}function l(f){var h;const g=e[f],x=document.getElementById("card-counter"),m=document.getElementById("single-card-slot"),_=document.getElementById("card-tap-hint");x&&(x.textContent=`Carte ${f+1} / ${e.length}`),_&&(_.textContent=f<e.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const b=nt(g),y=g.card_type==="player"&&((h=g.player)==null?void 0:h.rarity)==="legende";m.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${y?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${b}
        ${g.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,y&&s();const w=document.getElementById("current-card-wrap");let L=!1;w.addEventListener("click",()=>{if(L)return;L=!0;const v=f+1;v<e.length?(w.style.transition="all 0.25s ease",w.style.transform="translateX(-120%) rotate(-15deg)",w.style.opacity="0",setTimeout(()=>l(v),250)):a()})}function a(){p(),document.getElementById("reveal-phase").style.display="none";const f=document.getElementById("recap-phase");f.style.display="flex";const g=document.getElementById("recap-grid");g.innerHTML=e.map((x,m)=>`
      <div class="recap-card" style="--i:${m};animation-delay:${m*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${nt(x)}
        ${x.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let d=null;function s(){const f=document.getElementById("fireworks-canvas");if(!f)return;f.width=window.innerWidth,f.height=window.innerHeight;const g=f.getContext("2d"),x=[];function m(){const b=Math.random()*f.width,y=Math.random()*f.height*.6,w=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],L=w[Math.floor(Math.random()*w.length)];for(let h=0;h<60;h++){const v=Math.PI*2/60*h,$=2+Math.random()*5;x.push({x:b,y,vx:Math.cos(v)*$,vy:Math.sin(v)*$,alpha:1,color:L,size:2+Math.random()*3})}}m(),d=setInterval(m,600);function _(){if(document.getElementById("fireworks-canvas")){g.clearRect(0,0,f.width,f.height);for(let b=x.length-1;b>=0;b--){const y=x[b];if(y.x+=y.vx,y.y+=y.vy+.08,y.vy*=.98,y.alpha-=.018,y.alpha<=0){x.splice(b,1);continue}g.globalAlpha=y.alpha,g.fillStyle=y.color,g.beginPath(),g.arc(y.x,y.y,y.size,0,Math.PI*2),g.fill()}g.globalAlpha=1,(d!==null||x.length>0)&&requestAnimationFrame(_)}}_()}function p(){d!==null&&(clearInterval(d),d=null);const f=document.getElementById("fireworks-canvas");f&&f.getContext("2d").clearRect(0,0,f.width,f.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{p(),r.remove(),o("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{p(),r.remove(),o("boosters")})}function nt(e){var t,o,r,c;if(e.card_type==="player"&&e.player){const i=e.player,n=i.job||"ATT",l=ei[n]||"#1A6B3C",a=ti[i.rarity]||"#ccc",d=n==="GK"?i.note_g:n==="DEF"?i.note_d:n==="MIL"?i.note_m:i.note_a,s=Zt(i),p={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[i.country_code]||i.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${a};overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:6px 6px 2px;text-align:center;background:#f2e8d2">
        <div style="font-size:8px;letter-spacing:1px;color:#666;text-transform:uppercase">${i.firstname}</div>
        <div style="font-size:13px;font-weight:900;color:#111;line-height:1.1;font-family:Arial Black,Arial">${(i.surname_encoded||"").toUpperCase()}</div>
      </div>
      <!-- Étoile + bande poste -->
      <div style="position:relative;height:72px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:14px;width:100%;height:26px;background:${l}"></div>
        <svg width="50" height="48" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${l}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${d||0}</text>
        </svg>
      </div>
      <!-- Portrait -->
      <div style="flex:1;overflow:hidden;background:#b8d4f0">
        ${s?`<img src="${s}" style="width:100%;height:100%;object-fit:cover;object-position:center top" onerror="this.style.display='none'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;height:26px">
        <img src="https://flagsapi.com/${i.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:1px;color:#555;text-transform:uppercase">${p}</div>
        ${(t=i.clubs)!=null&&t.logo_url?`<img src="${i.clubs.logo_url}" style="width:20px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:700">${(((o=i.clubs)==null?void 0:o.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>`}if(e.card_type==="game_changer"){const i=e._gcDef,n=(i==null?void 0:i.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},d=l[i==null?void 0:i.color]||l.purple,s=a[i==null?void 0:i.color]||a.purple,p=(i==null?void 0:i.name)||e.gc_type||"Game Changer",u=(i==null?void 0:i.effect)||((r=je[e.gc_type])==null?void 0:r.desc)||"",f=i!=null&&i.image_url?`/manager-wars/icons/${i.image_url}`:null,g=((c=je[e.gc_type])==null?void 0:c.icon)||"⚡";return`<div style="width:170px;height:240px;background:${d};border-radius:14px;border:3px solid ${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${s}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${p.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${n?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${f?`<img src="${f}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${g}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${u.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function ui(e){var t,o;if((t=e==null?void 0:e.rates)!=null&&t.length){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},i={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};r.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(n=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${i[n.card_type]||n.card_type}</span>
            ${n.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${c[n.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${n.rarity}</span>`:""}
            ${n.note_min||n.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${n.note_min||""}–${n.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(n.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(r),r.addEventListener("click",n=>{n.target===r&&r.remove()}),(o=document.getElementById("odds-close"))==null||o.addEventListener("click",()=>r.remove());return}fi()}function fi(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const gi="simulation",wt="VOTRE_ZONE_ID";function xi(){switch(gi){case"propellerads":return yi();case"adsense":return mi();default:return Ne()}}function Ne(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let o=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const r=setInterval(()=>{o--;const c=document.getElementById("ad-cd"),i=document.getElementById("ad-skip");c&&(c.textContent=o),i&&(i.textContent=o>0?`Passer (${o})`:"✓ Continuer"),o<=0&&(clearInterval(r),i&&(i.disabled=!1,i.style.cssText=i.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),i==null||i.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function yi(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(Ne());window.propeller.push({zone_id:wt,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function mi(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(Ne());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:wt,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(o){t(o)}})}const ce={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},pe={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function $t(e,t,o,r,c){var i;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${o}</p>
      <button class="btn btn-primary" id="msg-btn">${r}</button>
    </div>
  </div>`,(i=document.getElementById("msg-btn"))==null||i.addEventListener("click",c)}function J(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const o=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${o}.png`}function Be(e){var o,r;const t=e.player;return{cardId:e.id,id:t.id,firstname:t.firstname,name:t.surname_encoded,country_code:t.country_code,club_id:t.club_id,job:t.job,job2:t.job2,note_g:Number(t.note_g)||0,note_d:Number(t.note_d)||0,note_m:Number(t.note_m)||0,note_a:Number(t.note_a)||0,rarity:t.rarity,skin:t.skin,hair:t.hair,hair_length:t.hair_length,clubName:((o=t.clubs)==null?void 0:o.encoded_name)||null,clubLogo:((r=t.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Oe(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function hi(){const e=Math.random()*100;return e<.1?4:e<5?3:e<20?2:1}function _t(e,t){const o=ce[t]||ce["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},c=[...e];for(const i of["GK","DEF","MIL","ATT"]){const n=[];for(let a=0;a<o[i];a++){let d=c.findIndex(s=>s.job===i);if(d===-1&&(d=c.findIndex(s=>s.job2===i)),d===-1&&(d=0),c[d]){const s={...c[d],_line:i};n.push(s),c.splice(d,1)}}const l=Oe(n.length);n.forEach((a,d)=>{a._col=l[d]}),r[i]=n}return r}async function bi(e,t){var n,l;const{data:o}=await k.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!o||o.length<11)return vi(e);const r=ce[e]||ce["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},i=[...o];for(const a of["GK","DEF","MIL","ATT"]){const d=i.filter(g=>g.job===a),s=i.filter(g=>g.job!==a),p=[...d,...s],u=[];for(let g=0;g<r[a];g++){const x=p[g]||i[g];x&&u.push({cardId:"ai-"+x.id+"-"+g,id:x.id,firstname:x.firstname,name:x.surname_encoded,country_code:x.country_code,club_id:x.club_id,job:x.job,job2:x.job2,note_g:Number(x.note_g)||0,note_d:Number(x.note_d)||0,note_m:Number(x.note_m)||0,note_a:Number(x.note_a)||0,rarity:x.rarity,skin:x.skin,hair:x.hair,hair_length:x.hair_length,clubName:((n=x.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((l=x.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:a})}const f=Oe(u.length);u.forEach((g,x)=>{g._col=f[x]}),c[a]=u}return c}function vi(e){const t=ce[e]||ce["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]},r=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const i of["GK","DEF","MIL","ATT"]){const n=[];for(let a=0;a<t[i];a++){const d=3+Math.floor(Math.random()*5);n.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:r[c%r.length],country_code:"XX",club_id:null,job:i,job2:null,note_g:i==="GK"?d:2,note_d:i==="DEF"?d:2,note_m:i==="MIL"?d:2,note_a:i==="ATT"?d:2,rarity:"normal",boost:0,used:!1,_line:i}),c++}const l=Oe(n.length);n.forEach((a,d)=>{a._col=l[d]}),o[i]=n}return o}function wi(e){let t=e.nextElementSibling;for(;t;)t.dataset.matchHidden||(t.dataset.matchHidden=t.style.display||"flex",t.style.display="none"),t=t.nextElementSibling}function Ie(e){let t=e.nextElementSibling;for(;t;)t.dataset.matchHidden&&(t.style.display=t.dataset.matchHidden==="none"?"":t.dataset.matchHidden,delete t.dataset.matchHidden),t=t.nextElementSibling}async function $i(e,t){var h;const{state:o,navigate:r,toast:c}=t;wi(e);const i=o.params||{};e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const n=i.matchMode||"vs_ai_easy",l=n.replace("vs_ai_",""),a=n;if(!i.deckId)return ki(e,t,n);const d=i.deckId,[{data:s},{data:p}]=await Promise.all([k.from("decks").select("formation,name").eq("id",d).single(),k.from("deck_cards").select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`).eq("deck_id",d).order("slot_order")]),u=(p||[]).filter(v=>{var $;return v.is_starter&&(($=v.card)==null?void 0:$.player)}).map(v=>Be(v.card)),f=(p||[]).filter(v=>{var $;return!v.is_starter&&(($=v.card)==null?void 0:$.player)}).map(v=>Be(v.card));if(u.length<11){$t(e,"⚠️",`Deck incomplet (${u.length}/11).`,"Compléter",()=>r("decks"));return}const g=(p||[]).find(v=>{var $;return(($=v.card)==null?void 0:$.card_type)==="formation"}),x=(s==null?void 0:s.formation)||((h=g==null?void 0:g.card)==null?void 0:h.formation)||"4-4-2",{data:m}=await k.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",o.profile.id).eq("card_type","game_changer"),{data:_}=await k.from("gc_definitions").select("*").eq("is_active",!0),b=(m||[]).map(v=>({...v,_gcDef:(_==null?void 0:_.find($=>$.name===v.gc_type||$.id===v.gc_definition_id))||null})),y=_t(u,x),w=await bi(x),L=async v=>{const{data:$}=await k.from("matches").insert({home_id:o.profile.id,away_id:null,mode:a,home_deck_id:d,status:"in_progress"}).select().single(),I={gcDefs:_||[],matchId:$==null?void 0:$.id,mode:a,difficulty:l,formation:x,homeTeam:y,aiTeam:w,homeSubs:f,subsUsed:0,maxSubs:Math.min(f.length,3),homeScore:0,aiScore:0,gcCards:v,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:o.profile.club_name||"Vous"};Ei(e,I,t)};if(!b.length){L([]);return}_i(e,b,L)}function _i(e,t,o){const c=new Set,i=t.filter(s=>{const p=s.gc_type||s.id;return c.has(p)?!1:(c.add(p),!0)});let n=[];function l(s,p){const u=s._gcDef,f={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},g={purple:"#9b59b6",light_blue:"#00bcd4"},x=f[u==null?void 0:u.color]||f.purple,m=g[u==null?void 0:u.color]||g.purple;return`<div class="gc-select-card" data-id="${s.id}"
      style="width:100px;border-radius:10px;border:3px solid ${p?"#FFD700":m};background:${x};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${p?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${p?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((u==null?void 0:u.name)||s.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(u==null?void 0:u.name)||s.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${u!=null&&u.image_url?`<img src="/manager-wars/icons/${u.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((u==null?void 0:u.effect)||"").slice(0,50)}</span>
      </div>
      ${p?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}function a(){var g,x,m;const s=e.querySelector("#gc-confirm-overlay");if(s&&s.remove(),n.length<3)return;const p=document.createElement("div");p.id="gc-confirm-overlay",p.style.cssText="position:absolute;inset:0;background:rgba(10,22,40,0.88);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:32px 24px;z-index:20;backdrop-filter:blur(4px)",p.innerHTML=`
      <div style="font-size:28px">⚡</div>
      <div style="font-size:18px;font-weight:900;color:#FFD700;text-align:center">3 cartes sélectionnées !</div>
      <button id="gc-launch" style="width:100%;max-width:320px;padding:16px;border-radius:14px;border:none;background:linear-gradient(135deg,#5a0a9a,#9a28e8);color:#fff;font-size:16px;font-weight:900;cursor:pointer;box-shadow:0 4px 20px rgba(122,40,184,0.5)">
        ⚡ Partir avec ces 3 GC
      </button>
      <button id="gc-no-gc" style="width:100%;max-width:320px;padding:14px;border-radius:14px;border:2px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        ▶ Partir sans GC
      </button>
      <button id="gc-reset" style="width:100%;max-width:320px;padding:14px;border-radius:14px;border:2px solid rgba(212,160,23,0.4);background:rgba(212,160,23,0.1);color:#D4A017;font-size:14px;font-weight:700;cursor:pointer">
        🔄 Changer de GC
      </button>`;const u=_=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",o(_)};(g=p.querySelector("#gc-launch"))==null||g.addEventListener("click",()=>u(n)),(x=p.querySelector("#gc-no-gc"))==null||x.addEventListener("click",()=>u([])),(m=p.querySelector("#gc-reset"))==null||m.addEventListener("click",()=>{n=[],d()});const f=e.querySelector("#gc-screen-wrap");f?f.appendChild(p):e.appendChild(p)}function d(){e.style.overflow="hidden";const s=e.clientHeight||e.getBoundingClientRect().height;s>50&&(e.style.height=s+"px"),e.innerHTML=`
    <div id="gc-screen-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <!-- Header -->
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Sélectionne <b style="color:#FFD700">3</b> cartes · ${n.length}/3
          ${n.length>0&&n.length<3?` · encore ${3-n.length}`:""}
        </div>
      </div>
      <!-- Grille cartes -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px">
        ${i.map(p=>{const u=n.find(f=>f.gc_type===p.gc_type);return l(p,!!u)}).join("")}
      </div>
    </div>`,e.querySelectorAll(".gc-select-card").forEach(p=>{p.addEventListener("click",()=>{const u=p.dataset.id,f=i.find(x=>x.id===u);if(!f)return;const g=n.findIndex(x=>x.gc_type===f.gc_type);g>-1?n.splice(g,1):n.length<3&&n.push(f),d(),n.length===3&&a()})}),n.length===3&&a()}d()}async function ki(e,t,o){const{state:r,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:i}=await k.from("decks").select("id,name,is_active,formation").eq("owner_id",r.profile.id).order("created_at",{ascending:!1});if(!i||i.length===0){$t(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const n=i.map(s=>s.id),{data:l}=await k.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",n).order("slot_order");let a=0;function d(){var b,y,w,L,h;const s=i[a],p=(l||[]).filter(v=>v.deck_id===s.id),u=p.filter(v=>{var $;return v.is_starter&&(($=v.card)==null?void 0:$.player)}).map(v=>Be(v.card)),f=p.find(v=>{var $;return(($=v.card)==null?void 0:$.card_type)==="formation"}),g=s.formation||((b=f==null?void 0:f.card)==null?void 0:b.formation)||"4-4-2",x=u.length>=11?_t(u,g):null,m=u.length>=11;e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:calc(100dvh - 130px);overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Match vs IA — ${o.replace("vs_ai_","").toUpperCase()}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${a===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${a===0?"0.1":"0.3"});color:${a===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${a===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${s.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${g} · ${u.length}/11 ${s.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${a===i.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${a===i.length-1?"0.1":"0.3"});color:${a===i.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${a===i.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : contraindre la largeur du SVG pour contrôler hauteur+largeur -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${x?`<div style="width:min(98vw, calc(100dvh - 400px));overflow:hidden;flex-shrink:0">${At(x,g,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${u.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${i.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${i.map((v,$)=>`<div style="width:7px;height:7px;border-radius:50%;background:${$===a?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${m?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${m?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${m?"pointer":"default"}">
          ${m?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,(y=document.getElementById("prev-deck"))==null||y.addEventListener("click",()=>{a>0&&(a--,d())}),(w=document.getElementById("next-deck"))==null||w.addEventListener("click",()=>{a<i.length-1&&(a++,d())}),(L=document.getElementById("validate-deck"))==null||L.addEventListener("click",()=>{m&&t.navigate("match",{matchMode:o,deckId:s.id})}),(h=document.getElementById("cancel-deck-select"))==null||h.addEventListener("click",()=>{Ie(e),c("home")});const _=document.getElementById("deck-swipe-zone");if(_){let v=0,$=0;_.addEventListener("touchstart",I=>{v=I.touches[0].clientX,$=I.touches[0].clientY},{passive:!0}),_.addEventListener("touchend",I=>{const T=I.changedTouches[0].clientX-v,B=I.changedTouches[0].clientY-$;Math.abs(T)<40||Math.abs(T)<Math.abs(B)||(T<0&&a<i.length-1?(a++,d()):T>0&&a>0&&(a--,d()))},{passive:!0})}}d()}function Ei(e,t,o){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Pe(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Ai(e,t,o),5e3)}function Ai(e,t,o){const r=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function i(p){return p.reduce((u,f)=>u+U(f,"MIL"),0)}function n(p){let u=0;for(let f=0;f<p.length-1;f++){const g=ge(p[f],p[f+1]);g==="#00ff88"?u+=2:g==="#FFD700"&&(u+=1)}return u}const l=i(r)+n(r),a=i(c)+n(c),d=l>=a;function s(p,u,f){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${u}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((g,x)=>{const m=J(g),_=x<p.length-1?ge(g,p[x+1]):null,b=_&&_!=="#ff3333"&&_!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${f};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${m?`<img src="${m}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${U(g,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${g.name}</div>
          </div>
          ${_?`<div style="width:14px;height:4px;border-radius:2px;background:${_};flex-shrink:0;opacity:${b?.9:.3}"></div>`:""}
          `}).join("")}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${i(p)} + ${n(p)} liens = <b style="color:#fff">${i(p)+n(p)}</b>
      </div>
    </div>`}e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${s(r,t.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${l}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${a}</div>
    </div>

    ${s(c,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const p=document.getElementById("score-home"),u=document.getElementById("score-ai"),f=document.getElementById("midfield-result");if(p&&u&&(d?(p.style.fontSize="80px",p.style.color="#FFD700",u.style.opacity="0.25"):(u.style.fontSize="80px",u.style.color="#ff6b6b",p.style.opacity="0.25")),f){const g=hi();f.style.opacity="1",d&&t.clubName,f.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${d?`${t.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${d?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${g}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,d&&(t.boostCard={value:g})}t.attacker=d?"home":"ai",t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:r.map(g=>({name:g.name,note:U(g,"MIL"),portrait:J(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),aiPlayers:c.map(g=>({name:g.name,note:U(g,"MIL"),portrait:J(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:l,aiTotal:a,text:`Duel milieu : ${t.clubName} ${l} – ${a} IA → ${d?t.clubName+" attaque":"IA attaque"}`}),setTimeout(()=>{var x,m;const g=(x=t.boostCard)==null?void 0:x.value;e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:40px;height:100%;min-height:100%;gap:16px;padding-left:24px;padding-right:24px;background:#0a3d1e;text-align:center">
        <div style="font-size:64px">${d?"🏆":"😤"}</div>
        <div style="font-size:22px;font-weight:900;color:#fff;line-height:1.3">
          ${d?`⚽ ${t.clubName}<br>gagne le milieu de terrain !`:"😔 L'IA gagne l'engagement !"}
        </div>
        ${g&&d?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:16px;padding:16px 32px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">Carte Boost obtenue</div>
          <div style="font-size:48px;font-weight:900;color:#87CEEB">+${g}</div>
          <div style="font-size:11px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
        <button id="start-match-btn" style="margin-top:8px;padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:17px;font-weight:900;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,0.3)">
          ▶ Commencer le match
        </button>
      </div>`,(m=document.getElementById("start-match-btn"))==null||m.addEventListener("click",()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",V(e,t,o),t.attacker==="ai"&&setTimeout(()=>Fe(e,t,o),800)})},100)},5e3)}function kt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function ae(e,t=44,o=58){if(!e)return`<div style="width:${t}px;height:${o}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const r=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:J(e),c=kt(e),i=e._line||e.job||"MIL",n=pe[i]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",a=e.note!==void 0?Number(e.note)||0:(Number(U(e,i))||0)+(e.boost||0),d=Et(e==null?void 0:e.country_code),s=Math.round(o*.19),p=Math.round(o*.25),u=o-Math.round(o*.19)-Math.round(o*.25),f=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${o}px;border-radius:5px;border:2px solid ${l};background:${n};position:relative;overflow:hidden;flex-shrink:0;opacity:${f}">
    <div style="position:absolute;top:0;left:0;right:0;height:${s}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${r&&!(e!=null&&e.used)?`<img src="${r}" style="position:absolute;top:${s}px;left:0;width:${t}px;height:${u}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Se(e==null?void 0:e.country_code)?`<img src="${Se(e.country_code)}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">${d}</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":a}</span>
      ${c?`<img src="${c}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function ve(e,t,o){if(!(e!=null&&e.length))return"";const r=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return r.forEach((i,n)=>{if(c+=ae(i,40,52),n<r.length-1){const l=ge(i,r[n+1]);c+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),o!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${o}</div>`),c+="</div>",c}function Se(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Et(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Pe(e,t,o,r,c=310,i=310){const n=me[t]||{},l=lt(t)||Re[t]||[],a={},d=["ATT","MIL","DEF","GK"];for(const b of d)(e[b]||[]).forEach((w,L)=>{a[`${b}${L+1}`]=w});function s(b){const y=n[b];return y?{x:y.x*c,y:y.y*i}:null}let p="";for(const[b,y]of l){const w=s(b),L=s(y);if(!w||!L)continue;const h=a[b],v=a[y],$=ge(h,v);$==="#00ff88"||$==="#FFD700"?(p+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${$}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,p+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${$}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):p+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${$}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const u=48,f=64,g=13,x=16,m={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[b,y]of Object.entries(a)){const w=s(b);if(!w||!y)continue;const L=b.replace(/[0-9]/g,""),h=pe[L]||"#555",v=o==="attack"&&["MIL","ATT"].includes(L)&&!y.used||o==="defense"&&["GK","DEF","MIL"].includes(L)&&!y.used,$=r.includes(y.cardId);let I;o==="attack"?I=L==="MIL"?Number(y.note_m)||0:Number(y.note_a)||0:o==="defense"?I=L==="GK"?Number(y.note_g)||0:L==="MIL"?Number(y.note_m)||0:Number(y.note_d)||0:I=Number(L==="GK"?y.note_g:L==="DEF"?y.note_d:L==="MIL"?y.note_m:y.note_a)||0,I=I+(y.boost||0);const T=(w.x-u/2).toFixed(1),B=(w.y-f/2).toFixed(1),S=y.used?.25:1,q=m[y==null?void 0:y.rarity]||m.normal,K=$?"#ff3030":q,D=$?3:(y==null?void 0:y.rarity)==="légende"||(y==null?void 0:y.rarity)==="pépite"?2.5:2,W=f-g-x;p+=`<defs><clipPath id="cp-${b}"><rect x="${T}" y="${(w.y-f/2+g).toFixed(1)}" width="${u}" height="${W}"/></clipPath></defs>`,p+=`<rect x="${T}" y="${B}" width="${u}" height="${f}" rx="5" fill="${h}" opacity="${S}"/>`;const Y=J(y);Y&&!y.used&&(p+=`<image href="${Y}" x="${T}" y="${(w.y-f/2+g).toFixed(1)}" width="${u}" height="${W}" clip-path="url(#cp-${b})" preserveAspectRatio="xMidYMin slice"/>`),p+=`<rect x="${T}" y="${B}" width="${u}" height="${g}" rx="4" fill="rgba(255,255,255,0.92)"/>`,p+=`<text x="${w.x.toFixed(1)}" y="${(w.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(y.name||"").slice(0,9)}</text>`;const P=(w.y+f/2-x).toFixed(1);if(p+=`<rect x="${T}" y="${P}" width="${u}" height="${x}" fill="rgba(255,255,255,0.92)"/>`,y.used)p+=`<text x="${w.x.toFixed(1)}" y="${(w.y+f/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const ie=Se(y.country_code);ie?p+=`<image href="${ie}" x="${(w.x-20).toFixed(1)}" y="${(w.y+f/2-x+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:p+=`<text x="${(w.x-13).toFixed(1)}" y="${(w.y+f/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Et(y.country_code)}</text>`,p+=`<text x="${w.x.toFixed(1)}" y="${(w.y+f/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${I}</text>`;const oe=kt(y);oe?p+=`<image href="${oe}" x="${(w.x+u/2-14).toFixed(1)}" y="${(w.y+f/2-x+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:y.clubName&&(p+=`<text x="${(w.x+14).toFixed(1)}" y="${(w.y+f/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(y.clubName||"").slice(0,3).toUpperCase()}</text>`),y.boost&&(p+=`<rect x="${(w.x+u/2-12).toFixed(1)}" y="${(w.y-f/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,p+=`<text x="${(w.x+u/2-5).toFixed(1)}" y="${(w.y-f/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${y.boost}</text>`)}p+=`<rect x="${T}" y="${B}" width="${u}" height="${f}" rx="5" fill="${$?"rgba(255,255,255,0.12)":"none"}" stroke="${K}" stroke-width="${D}" opacity="${S}"/>`,v&&(p+=`<rect x="${T}" y="${B}" width="${u}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${$?"selected":""}" data-card-id="${y.cardId}" data-role="${L}" style="cursor:pointer"/>`)}const _=38;return`<svg viewBox="${-_} ${-_} ${c+_*2} ${i+_*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${p}
  </svg>`}function At(e,t,o,r,c=300,i=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Pe(e,t,o,r,c,i)}
  </div>`}function we(e,t=!1){const o=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${o?`<img src="${o}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}function Ii(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:wrap">
          ${(e.homePlayers||[]).map(o=>we(o)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:wrap">
          ${(e.aiPlayers||[]).map(o=>we(o)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${we(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${we(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function V(e,t,o){var g,x,m,_,b,y,w,L;const r=t.selected.map(h=>h.cardId),c=t.usedSubIds||[],i=t.homeSubs.filter(h=>!c.includes(h.cardId));Object.values(t.homeTeam).flat().filter(h=>h.used).length>0&&i.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const l=t.phase==="ai-attack"||t.phase==="ai-defense",a=t.phase==="attack",d=t.phase==="defense",s=t.phase==="finished",p=t.gcCards.filter(h=>!t.usedGc.includes(h.id)),u=t.boostCard&&!t.boostUsed;if(e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const v=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${ve((v.players||[]).map($=>({...$,used:!1})),"#ff6b6b",v.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const v=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${ve((v.players||[]).map($=>({...$,used:!1})),"#00ff88",v.total)}
          </div>`}const h=t.log[t.log.length-1];return h?'<div style="padding:2px 4px">'+Ii(h)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const h=window.innerWidth>=700,v=(D,W,Y)=>{var N,O;const P=(t.gcDefs||[]).find(G=>G.name===D.gc_type),ie={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[P==null?void 0:P.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",oe={purple:"#b06ce0",light_blue:"#00d4ef"}[P==null?void 0:P.color]||"#b06ce0",E=(P==null?void 0:P.name)||D.gc_type,A=(P==null?void 0:P.effect)||((N=de[D.gc_type])==null?void 0:N.desc)||"",j=P!=null&&P.image_url?`/manager-wars/icons/${P.image_url}`:null,C=((O=de[D.gc_type])==null?void 0:O.icon)||"⚡",z=Math.round(Y*.22),F=Math.round(Y*.22),M=Y-z-F,H=E.length>12?7:9;return`<div class="gc-mini" data-gc-id="${D.id}" data-gc-type="${D.gc_type}"
          style="width:${W}px;height:${Y}px;border-radius:10px;border:2px solid ${oe};background:${ie};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${z}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${H}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${W-6}px">${E}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${M}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${j?`<img src="${j}" style="max-width:${W-10}px;max-height:${M-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(M*.55)}px">${C}</span>`}
          </div>
          <div style="height:${F}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${A.slice(0,38)}</span>
          </div>
        </div>`},$=(D,W)=>{var Y;return W?`<div id="boost-card" style="width:110px;padding:8px 6px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center">
            <div style="font-size:22px">⚡</div>
            <div style="font-size:10px;color:#000;font-weight:900">+${(Y=t.boostCard)==null?void 0:Y.value}</div>
          </div>`:v(D,110,150)},I=(D,W)=>{var Y;return W?`<div id="boost-card" style="padding:4px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:7px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:1px;text-align:center;min-width:42px">
            <div style="font-size:15px">⚡</div>
            <div style="font-size:7px;color:#000;font-weight:900">+${(Y=t.boostCard)==null?void 0:Y.value}</div>
          </div>`:v(D,68,95)},T=h?"padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",B=s?`<button id="btn-results" style="${T};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:l?`<div style="${T};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:a?`<button id="btn-action" style="${T};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:d?`<button id="btn-action" style="${T};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${T};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,S=a||d?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",q=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${h?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${i.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':i.map(D=>`<div class="sub-btn-col" data-sub-id="${D.cardId}" style="cursor:pointer;flex-shrink:0">${ae(D,44,58)}</div>`).join("")}
      </div>`,K=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${At(t.homeTeam,t.formation,t.phase,r,300,300)}
        </div>
      </div>`;return h?`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${q}
          ${K}
          <!-- Colonne droite : GC + bouton -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            ${p.map(D=>$(D,!1)).join("")}
            ${u?$(null,!0):""}
            <div style="flex:1"></div>
            <div style="width:100%">${B}${S}</div>
          </div>
        </div>`:`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${q}
          <div style="flex:1;min-width:0;display:flex;flex-direction:column;min-height:0">
            ${K}
            <!-- Zone bas mobile : GC grille + bouton -->
            <div style="display:flex;align-items:stretch;padding:4px 6px;background:rgba(0,0,0,0.35);gap:5px;flex-shrink:0">
              <div style="display:flex;flex-wrap:wrap;gap:3px;align-content:center;max-width:120px">
                ${p.map(D=>I(D,!1)).join("")}
                ${u?I(null,!0):""}
              </div>
              <div style="flex:0.8;display:flex;flex-direction:column;justify-content:center;gap:3px">
                ${B}${S}
              </div>
            </div>
          </div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(h=>{var v,$,I;if(h.type==="duel"){const T=h.isGoal,B=h.homeScored?"#FFD700":T?"#ff6b6b":"rgba(255,255,255,0.3)",S=h.homeScored?"⚽ BUT !":T?"⚽ BUT IA !":(v=h.homePlayers)!=null&&v.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${T?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${B};margin-bottom:4px">
                <div style="font-size:9px;color:${B};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${S}</div>
                ${($=h.homePlayers)!=null&&$.length?`<div style="margin-bottom:3px">${ve(h.homePlayers,"rgba(255,255,255,0.7)",h.homeTotal)}</div>`:""}
                ${(I=h.aiPlayers)!=null&&I.length?`<div style="opacity:0.7">${ve(h.aiPlayers,"#ff6b6b",h.aiTotal)}</div>`:""}
              </div>`}return h.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${h.outPlayer?ae({...h.outPlayer,used:!0,_line:h.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${h.inPlayer?ae({...h.inPlayer,_line:h.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:h.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${h.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${h.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`,function(){const v=e.querySelector(".terrain-wrapper svg");if(!v)return;v.removeAttribute("width"),v.removeAttribute("height"),v.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",v.setAttribute("viewBox","-26 -26 352 352"),v.setAttribute("preserveAspectRatio","xMidYMid meet");const $=e.querySelector(".match-screen");if($){const I=e.clientHeight;I>50&&($.style.height=I+"px",$.style.overflow="hidden")}}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const h=e.querySelector(".terrain-wrapper svg");h&&(h.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let h=!1,v=30;const $=()=>document.getElementById("match-timer"),I=()=>{const T=$();if(!T)return;const B=String(Math.floor(v/60)).padStart(2,"0"),S=String(v%60).padStart(2,"0");T.textContent=` ${B}:${S}`,T.style.color=h?"#ff2222":"#ff9500",T.style.fontWeight="900"};I(),t._timerInt=setInterval(()=>{if(v--,v<0)if(!h)h=!0,v=15,I();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",T.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(T),setTimeout(()=>{T.remove(),se(e,t,o)},2500)}else I()},1e3)}(g=document.getElementById("match-quit"))==null||g.addEventListener("click",()=>{Ie(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,se(e,t,o))}),(x=document.getElementById("view-ai"))==null||x.addEventListener("click",()=>Fi(t,o)),(m=document.getElementById("toggle-history"))==null||m.addEventListener("click",()=>{var h;(h=document.getElementById("match-history-panel"))==null||h.classList.add("open")}),(_=document.getElementById("close-history"))==null||_.addEventListener("click",()=>{var h;(h=document.getElementById("match-history-panel"))==null||h.classList.remove("open")}),(b=document.getElementById("btn-action"))==null||b.addEventListener("click",()=>{t.selected.length!==0&&(a?Li(e,t,o):d&&Mi(e,t,o))}),(y=document.getElementById("btn-results"))==null||y.addEventListener("click",()=>se(e,t,o)),e.querySelectorAll(".match-slot-hit").forEach(h=>{h.addEventListener("click",()=>Ti(h,t,e,o))}),e.querySelectorAll(".gc-mini").forEach(h=>{h.addEventListener("click",()=>ji(h.dataset.gcId,h.dataset.gcType,e,t,o))}),(w=document.getElementById("boost-card"))==null||w.addEventListener("click",()=>Si(e,t,o)),e.querySelectorAll(".sub-btn-col").forEach(h=>{h.addEventListener("click",()=>rt(e,t,o,h.dataset.subId))}),(L=document.getElementById("sub-btn-main"))==null||L.addEventListener("click",()=>rt(e,t,o))}function Ti(e,t,o,r){const c=e.dataset.cardId,i=e.dataset.role,n=t.selected.findIndex(l=>l.cardId===c);if(n!==-1)t.selected.splice(n,1);else{if(t.selected.length>=3){r.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[i]||[]).find(a=>a.cardId===c);l&&t.selected.push({...l,_role:i,_line:i})}V(o,t,r)}function He(e,t,o){e.matchId&&k.from("matches").update({last_player_id:o}).eq("id",e.matchId).then(()=>{})}function Li(e,t,o){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),He(t,o,o.state.profile.id);const r=t.selected.map(i=>({...i,_line:i._role})),c=pt(r,t.modifiers.home);t.pendingAttack={...c,players:[...t.selected],side:"home"},t.selected.forEach(i=>{const n=(t.homeTeam[i._role]||[]).find(l=>l.cardId===i.cardId);n&&(n.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${c.total} (base ${c.base}${c.links?` +${c.links} liens`:""}) — ${t.selected.map(i=>i.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",V(e,t,o),setTimeout(()=>zi(e,t,o),1200)}function Mi(e,t,o){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),He(t,o,o.state.profile.id);const r=t.selected.map(l=>({...l,_line:l._role})),c=ut(r,t.modifiers.home);t.selected.forEach(l=>{const a=(t.homeTeam[l._role]||[]).find(d=>d.cardId===l.cardId);a&&(a.used=!0)});const i=ft(t.pendingAttack.total,c.total,t.modifiers.home),n={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:J(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const a=(t.homeTeam[l._role]||[]).find(d=>d.cardId===l.cardId)||l;return{name:a.name,note:a._line==="GK"?a.note_g:a._line==="MIL"?a.note_m:a.note_d,portrait:J(a),job:a.job,country_code:a.country_code,rarity:a.rarity,clubName:a.clubName,clubLogo:a.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(i.shielded)n.text="🛡️ Bouclier ! But annulé.",t.log.push(n);else if(i.goal){t.aiScore++,n.isGoal=!0,n.homeScored=!1,n.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(n),t.selected=[],t.modifiers.home={},t.pendingAttack=null,V(e,t,o),Ke(n.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ye(e,t,o,"home-attack")});return}else n.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(n);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ye(e,t,o,"home-attack")}function Fe(e,t,o){He(t,o,null);const r=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=gt(r,"attack",t.difficulty);if(!c.length){Tt(e,t,o);return}const i=pt(c,t.modifiers.ai);t.pendingAttack={...i,players:c,side:"ai"},c.forEach(d=>{d.used=!0}),t.log.push({text:`🤖 IA attaque : ${i.total} (${c.map(d=>d.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const n=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(d=>!d.used),a=(t.homeSubs||[]).filter(d=>!(t.usedSubIds||[]).includes(d.cardId)).length>0&&t.subsUsed<t.maxSubs;if(n.length===0&&!a){t.aiScore++;const d={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(s=>({name:s.name,note:s._line==="MIL"?s.note_m:s.note_a,portrait:J(s),job:s.job,country_code:s.country_code,rarity:s.rarity,clubName:s.clubName,clubLogo:s.clubLogo})),aiTotal:i.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(d),t.pendingAttack=null,V(e,t,o),Ke(d.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ye(e,t,o,"home-attack")});return}t.phase="defense",V(e,t,o)}function zi(e,t,o){const r=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=gt(r,"defense",t.difficulty),i=c.length>0?ut(c,t.modifiers.ai).total:0;c.forEach(a=>{a.used=!0});const n=ft(t.pendingAttack.total,i,t.modifiers.ai),l={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(a=>({name:a.name,note:a._line==="MIL"?a.note_m:a.note_a,portrait:J(a),job:a.job,country_code:a.country_code,rarity:a.rarity,clubName:a.clubName,clubLogo:a.clubLogo})),aiPlayers:c.map(a=>({name:a.name,note:a._line==="GK"?a.note_g:a._line==="MIL"?a.note_m:a.note_d,portrait:J(a),job:a.job,country_code:a.country_code,rarity:a.rarity,clubName:a.clubName,clubLogo:a.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:i,isGoal:!1,homeScored:!1,text:""};if(n.shielded)l.text="🛡️ Bouclier IA !",t.log.push(l);else if(n.goal){t.homeScore++,l.isGoal=!0,l.homeScored=!0,l.text=`⚽ BUT ! (${t.pendingAttack.total} > ${i})`,t.log.push(l),t.modifiers.ai={},t.pendingAttack=null,V(e,t,o),Ke(l.homePlayers,t.homeScore,t.aiScore,!0,()=>{ye(e,t,o,"ai-attack")});return}else l.text=`🧤 IA défend (${i} ≥ ${t.pendingAttack.total})`,t.log.push(l);t.modifiers.ai={},t.pendingAttack=null,ye(e,t,o,"ai-attack")}function ye(e,t,o,r){if(t.round++,It(t)){se(e,t,o);return}if(r==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(i=>!i.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(n=>!n.used).length){se(e,t,o);return}t.phase="ai-attack",V(e,t,o),setTimeout(()=>Fe(e,t,o),800);return}t.phase="attack",V(e,t,o)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(i=>!i.used).length){Tt(e,t,o);return}t.phase="ai-attack",V(e,t,o),setTimeout(()=>Fe(e,t,o),800)}}function It(e){const t=["MIL","ATT","GK","DEF"].some(r=>(e.homeTeam[r]||[]).some(c=>!c.used)),o=["MIL","ATT","GK","DEF"].some(r=>(e.aiTeam[r]||[]).some(c=>!c.used));return!t&&!o}function Tt(e,t,o){It(t)?se(e,t,o):(t.phase="attack",V(e,t,o))}function Ci(e,t,o){const r=document.createElement("div");r.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=J(e),i=J(t),n=pe[e.job]||"#555",l=pe[t.job]||"#555",a=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,d=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;r.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${n};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${c?`<img src="${c}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${a}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${l};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${d}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(r);let s=!1;const p=()=>{s||(s=!0,r.remove(),o())};r.addEventListener("click",p),setTimeout(p,2e3)}function fe(e,t="rgba(0,0,0,0.8)"){const o=document.createElement("div");o.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,o.textContent=e,document.body.appendChild(o),setTimeout(()=>o.remove(),2200)}function rt(e,t,o,r=null){if(t.phase!=="attack"){fe("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){fe(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const c=Object.values(t.homeTeam).flat().filter(p=>p.used),i=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!c.length){fe("Aucun joueur utilisé à remplacer");return}if(!i.length){fe("Aucun remplaçant disponible");return}let n=0,l=Math.max(0,i.findIndex(p=>p.cardId===r)),a=!1;const d=document.createElement("div");d.id="sub-overlay",d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function s(){var _,b,y,w,L,h;const p=c[n],u=i[l],f=Math.min(130,Math.round((window.innerWidth-90)/2)),g=Math.round(f*1.35),x=v=>`background:rgba(255,255,255,0.12);border:none;color:${v?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${v?"default":"pointer"};flex-shrink:0`;d.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${x(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${u?ae({...u,used:!1,boost:0},f,g):"<div>—</div>"}</div>
        <button id="in-down" style="${x(l>=i.length-1)}" ${l>=i.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${i.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${x(n===0)}" ${n===0?"disabled":""}>▲</button>
        <div>${p?ae({...p,used:!1,boost:0},f,g):"<div>—</div>"}</div>
        <button id="out-down" style="${x(n>=c.length-1)}" ${n>=c.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${n+1}/${c.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(_=d.querySelector("#sub-close"))==null||_.addEventListener("click",()=>d.remove()),(b=d.querySelector("#out-up"))==null||b.addEventListener("click",()=>{n>0&&(n--,s())}),(y=d.querySelector("#out-down"))==null||y.addEventListener("click",()=>{n<c.length-1&&(n++,s())}),(w=d.querySelector("#in-up"))==null||w.addEventListener("click",()=>{l>0&&(l--,s())}),(L=d.querySelector("#in-down"))==null||L.addEventListener("click",()=>{l<i.length-1&&(l++,s())});const m=(v,$,I,T)=>{const B=d.querySelector("#"+v);if(!B)return;let S=0;B.addEventListener("touchstart",q=>{S=q.touches[0].clientY},{passive:!0}),B.addEventListener("touchend",q=>{const K=q.changedTouches[0].clientY-S;if(Math.abs(K)<30)return;const D=$();K<0&&D<T-1?(I(D+1),s()):K>0&&D>0&&(I(D-1),s())},{passive:!0})};m("in-panel",()=>l,v=>l=v,i.length),m("out-panel",()=>n,v=>n=v,c.length),(h=d.querySelector("#sub-confirm"))==null||h.addEventListener("click",v=>{if(v.preventDefault(),v.stopPropagation(),a)return;a=!0;const $=c[n],I=i[l];if(!$||!I)return;let T=null,B=-1;for(const[q,K]of Object.entries(t.homeTeam)){const D=(K||[]).findIndex(W=>W.cardId===$.cardId);if(D!==-1){T=q,B=D;break}}if(B===-1||!T){fe("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),d.remove();return}const S={...I,_line:T,_col:$._col||0,used:!1,boost:0};t.homeTeam[T].splice(B,1,S),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(I.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:$.name,firstname:$.firstname,note:U($,T),portrait:J($),job:$.job,country_code:$.country_code,rarity:$.rarity,clubName:$.clubName,clubLogo:$.clubLogo},inPlayer:{name:I.name,firstname:I.firstname,note:U(I,T),portrait:J(I),job:I.job,country_code:I.country_code,rarity:I.rarity,clubName:I.clubName,clubLogo:I.clubLogo},text:`🔄 ${I.firstname} ${I.name} remplace ${$.firstname} ${$.name}`}),d.remove(),Ci($,I,()=>V(e,t,o))})}document.body.appendChild(d),s()}function ji(e,t,o,r,c){var g,x;const i=(r.gcDefs||[]).find(m=>m.name===t),n=de[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[i==null?void 0:i.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",a={purple:"#b06ce0",light_blue:"#00d4ef"}[i==null?void 0:i.color]||"#b06ce0",d=(i==null?void 0:i.name)||t,s=(i==null?void 0:i.effect)||n.desc,p=i!=null&&i.image_url?`/manager-wars/icons/${i.image_url}`:null,u=n.icon||"⚡",f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",f.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${a};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${a}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${d.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${d}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${p?`<img src="${p}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${u}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${s}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(f),(g=f.querySelector("#gc-back"))==null||g.addEventListener("click",()=>f.remove()),(x=f.querySelector("#gc-use"))==null||x.addEventListener("click",()=>{f.remove(),Bi(e,t,o,r,c)})}function ze(e,t,o,r,c,i){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function a(){var d,s;n.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${o}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(p=>{const u=p._line||p.job||"MIL",f={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[u]||"#555",g=U(p,u)+(p.boost||0),x=l.find(m=>m.cardId===p.cardId);return`<div class="gc-pick-item" data-cid="${p.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${x?"#FFD700":"rgba(255,255,255,0.25)"};background:${f};overflow:hidden;cursor:pointer;flex-shrink:0;${p.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${p.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${g}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${u}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(d=n.querySelector("#gc-picker-close"))==null||d.addEventListener("click",()=>n.remove()),n.querySelectorAll(".gc-pick-item").forEach(p=>{p.addEventListener("click",()=>{const u=p.dataset.cid,f=e.find(x=>x.cardId===u);if(!f)return;const g=l.findIndex(x=>x.cardId===u);g>-1?l.splice(g,1):l.length<t&&l.push(f),a()})}),(s=n.querySelector("#gc-picker-confirm"))==null||s.addEventListener("click",()=>{n.remove(),i(l)})}a(),document.body.appendChild(n)}const Lt={BOOST_STAT({value:e=2,target:t="home",count:o=1,roles:r=null},c,i,n){const l=t==="home"?c.homeTeam:c.aiTeam,a=Object.entries(l).flatMap(([d,s])=>!r||r.includes(d)?(s||[]).filter(p=>!p.used).map(p=>({...p,_line:d})):[]);return a.length?(ze(a,o,e>0?`⚡ +${e} à ${o} joueur(s)`:`💀 -${Math.abs(e)} à ${o} joueur(s)`,i,c,d=>{d.forEach(s=>{for(const p of["GK","DEF","MIL","ATT"]){const u=(c.homeTeam[p]||[]).find(f=>f.cardId===s.cardId)||(c.aiTeam[p]||[]).find(f=>f.cardId===s.cardId);if(u){u.boost=(u.boost||0)+e;break}}}),c.log.push({text:`${e>0?"⚡":"💀"} ${Math.abs(e)>0?"+":""}${e} → ${d.map(s=>s.name).join(", ")}`,type:"info"}),V(i,c,n)}),!0):(n.toast("Aucun joueur disponible","error"),!0)},DEBUFF_STAT(e,t,o,r){return Lt.BOOST_STAT({...e,value:-Math.abs(e.value||2)},t,o,r)},GRAY_PLAYER({target:e="opponent",count:t=1,roles:o=null},r,c,i){const n=e==="opponent"?r.aiTeam:r.homeTeam,l=Object.entries(n).flatMap(([a,d])=>!o||o.includes(a)?(d||[]).filter(s=>!s.used).map(s=>({...s,_line:a})):[]);return l.length?(ze(l,t,`❄️ Griser ${t} joueur(s)`,c,r,a=>{a.forEach(d=>{for(const s of Object.keys(r.aiTeam).concat(Object.keys(r.homeTeam))){const u=((e==="opponent"?r.aiTeam[s]:r.homeTeam[s])||[]).find(f=>f.cardId===d.cardId);if(u){u.used=!0;break}}}),r.log.push({text:`❄️ ${a.map(d=>d.name).join(", ")} grisé(s) !`,type:"info"}),V(c,r,i)}),!0):(i.toast("Aucun joueur à griser","error"),!0)},REVIVE_PLAYER({count:e=1},t,o,r){const c=Object.entries(t.homeTeam).flatMap(([i,n])=>(n||[]).filter(l=>l.used).map(l=>({...l,_line:i})));return c.length?(ze(c,e,"💫 Ressusciter",o,t,i=>{i.forEach(n=>{for(const l of["GK","DEF","MIL","ATT"]){const a=(t.homeTeam[l]||[]).find(d=>d.cardId===n.cardId);if(a){a.used=!1;break}}}),t.log.push({text:`💫 ${i.map(n=>n.name).join(", ")} ressuscité(s) !`,type:"info"}),V(o,t,r)}),!0):(r.toast("Aucun joueur à ressusciter","error"),!0)},REMOVE_GOAL(e,t,o,r){return t.aiScore<=0?(r.toast("Aucun but adverse","error"),!1):(t.aiScore--,t.log.push({text:"🚫 But adverse retiré !",type:"info"}),!1)},ADD_GOAL_DRAW(e,t,o,r){return t.modifiers=t.modifiers||{},t.modifiers.home=t.modifiers.home||{},t.modifiers.home.addGoalOnDraw=!0,t.log.push({text:"⚽ +1 but si duel nul activé !",type:"info"}),!1},ADD_SUB({count:e=1},t,o,r){return t.maxSubs+=e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1}};function Bi(e,t,o,r,c){if(r.usedGc.includes(e))return;r.usedGc.push(e);const i=(r.gcDefs||[]).find(l=>l.name===t);let n=!1;if(i!=null&&i.effect_type&&i.effect_type!=="CUSTOM"){const l=Lt[i.effect_type];l?l(i.effect_params||{},r,o,c)||(n=!0):(c.toast(`Effet "${i.effect_type}" non implémenté`,"error"),n=!0)}else{switch(t){case"Double attaque":r.modifiers.home.doubleAttack=!0,r.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":r.modifiers.home.shield=!0,r.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const l=Object.entries(r.homeTeam).flatMap(([a,d])=>(d||[]).filter(s=>s.used).map(s=>({...s,_line:a})));l.length?(l[0].used=!1,r.log.push({text:`💫 ${l[0].name} ressuscité !`,type:"info"})):r.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":r.modifiers.ai.stolenNote=(r.modifiers.ai.stolenNote||0)+1,r.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const l=[...r.aiTeam.ATT||[],...r.aiTeam.MIL||[]].filter(a=>!a.used);if(l.length){const a=l.sort((d,s)=>U(s,"ATT")-U(d,"ATT"))[0];a.used=!0,r.log.push({text:`❄️ ${a.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":r.maxSubs++,r.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}n=!0}k.from("cards").delete().eq("id",e).then(()=>{}),n&&V(o,r,c)}function Si(e,t,o){const r=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!r.length){o.toast("Aucun joueur actif à booster","error");return}o.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${r.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${pe[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${U(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const i=c.dataset.cardId;for(const n of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[n]||[]).find(a=>a.cardId===i);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,o.closeModal(),V(e,t,o)})})}function Ke(e,t,o,r,c){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const n=Array.from({length:10},(d,s)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${s%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][s%8]}
    </div>`).join("");i.innerHTML=`
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${n}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${r?"BUT !":"BUT IA !"}
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
    ${e.map(d=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${pe[d.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${d.portrait?`<img src="${d.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(d.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(i);let l=!1;const a=()=>{l||(l=!0,i.remove(),setTimeout(()=>c(),50))};i.addEventListener("click",a),setTimeout(a,3500)}async function se(e,t,o){var s,p;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:r}=o,c=t.homeScore>t.aiScore,i=t.homeScore===t.aiScore,n=c?"victoire":i?"nul":"defaite",l=Ft(t.mode,n);t.matchId&&await k.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?r.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const a={credits:(r.profile.credits||0)+l,matches_played:(r.profile.matches_played||0)+1};c?a.wins=(r.profile.wins||0)+1:i?a.draws=(r.profile.draws||0)+1:a.losses=(r.profile.losses||0)+1,await k.from("users").update(a).eq("id",r.profile.id),await o.refreshProfile();const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",d.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${c?"🏆":i?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${c?"Victoire !":i?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${l.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(d),(s=document.getElementById("res-home"))==null||s.addEventListener("click",()=>{d.remove(),Ie(e),o.navigate("home")}),(p=document.getElementById("res-replay"))==null||p.addEventListener("click",()=>{d.remove(),Ie(e),o.navigate("match",{matchMode:t.mode})})}function Fi(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Pe(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Di={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Gi(e,t){const{state:o,toast:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await Ue(e,t)}async function Ue(e,t){const{state:o,toast:r}=t,{data:c}=await k.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),i=(c||[]).filter(a=>a.seller_id===o.profile.id),n=(c||[]).filter(a=>a.seller_id!==o.profile.id);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${n.length} carte(s) en vente · Solde : ${(o.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${i.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function l(a){const d=document.getElementById("mkt-content"),s=a==="buy"?n:i;if(s.length===0){d.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${a==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune carte en vente."}
      </div>`;return}d.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${s.map(p=>{var m,_,b;const u=(m=p.card)==null?void 0:m.player;if(!u)return"";const f=u.job==="GK"?u.note_g:u.job==="DEF"?u.note_d:u.job==="MIL"?u.note_m:u.note_a,g=Di[u.rarity],x=(o.profile.credits||0)>=p.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px">
          <div style="width:44px;height:44px;border-radius:8px;background:${Ni(u.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${g};flex-shrink:0">${f}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${u.firstname} ${u.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${u.country_code} · ${((_=u.clubs)==null?void 0:_.encoded_name)||"—"} · ${u.rarity} · ${u.job}</div>
            <div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((b=p.seller)==null?void 0:b.pseudo)||"—"}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${p.price.toLocaleString("fr")}</div>
            ${a==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${p.id}" ${x?"":"disabled"} style="margin-top:4px">${x?"Acheter":"Trop cher"}</button>`:`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,d.querySelectorAll("[data-buy]").forEach(p=>{p.addEventListener("click",()=>Ri(p.dataset.buy,s,e,t))}),d.querySelectorAll("[data-cancel]").forEach(p=>{p.addEventListener("click",()=>qi(p.dataset.cancel,e,t))})}l("buy"),e.querySelectorAll(".mkt-tab").forEach(a=>{a.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(d=>{const s=d===a;d.style.background=s?"var(--green)":"#fff",d.style.color=s?"#fff":"var(--gray-600)",d.style.borderColor=s?"var(--green)":"var(--gray-200)"}),l(a.dataset.tab)})})}async function Ri(e,t,o,r){var p;const{state:c,toast:i}=r,n=t.find(u=>u.id===e);if(!n)return;const l=n.price,a=c.profile.credits||0,d=(p=n.card)==null?void 0:p.player;if(a<l){i("Crédits insuffisants","error");return}if(!confirm(`Acheter ${d==null?void 0:d.firstname} ${d==null?void 0:d.surname_encoded} pour ${l.toLocaleString("fr")} crédits ?`))return;const s=document.querySelector(`[data-buy="${e}"]`);s&&(s.disabled=!0,s.textContent="⏳");try{const{error:u}=await k.from("cards").update({owner_id:c.profile.id}).eq("id",n.card.id);if(u)throw new Error("Transfert carte : "+u.message);const{error:f}=await k.from("market_listings").update({status:"sold",buyer_id:c.profile.id,sold_at:new Date().toISOString()}).eq("id",e);if(f)throw new Error("Mise à jour annonce : "+f.message);const{error:g}=await k.from("users").update({credits:a-l}).eq("id",c.profile.id);if(g)throw new Error("Débit acheteur : "+g.message);const{data:x,error:m}=await k.from("users").select("credits").eq("id",n.seller_id).single();!m&&x&&await k.from("users").update({credits:(x.credits||0)+l}).eq("id",n.seller_id),await k.from("notifications").insert({user_id:n.seller_id,type:"card_sold",message:`Ta carte ${(d==null?void 0:d.surname_encoded)||"?"} a été vendue pour ${l.toLocaleString("fr")} crédits !`,data:{card_id:n.card.id,price:l}}).then(()=>{}).catch(()=>{}),c.profile.credits=a-l;const _=document.querySelector("[data-credits]")||document.querySelector(".credits-display");_&&(_.textContent=(a-l).toLocaleString("fr")+" cr."),i(`✅ ${d==null?void 0:d.surname_encoded} ajouté à ta collection !`,"success"),Ue(o,r)}catch(u){i("❌ "+u.message,"error"),s&&(s.disabled=!1,s.textContent="Acheter")}}async function qi(e,t,o){const{toast:r}=o,{data:c}=await k.from("market_listings").select("card_id").eq("id",e).single();await k.from("market_listings").update({status:"cancelled"}).eq("id",e),c&&await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id),r("Annonce retirée","success"),Ue(t,o)}function Ni(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function Oi(e,{state:t,navigate:o,toast:r}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await k.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${c&&c.length>0?c.map((i,n)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${i.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${n+1}</div>
            <div style="flex:1">
              <div style="font-weight:700">${i.pseudo}</div>
              <div style="font-size:11px;color:var(--gray-600)">${i.club_name}</div>
            </div>
            <div style="text-align:right;font-size:12px">
              <div>🥇${i.trophies_top1} 🥈${i.trophies_top2} 🥉${i.trophies_top3}</div>
              <div style="color:var(--gray-600)">${i.wins} V</div>
            </div>
          </div>
        `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}
      </div>
    </div>
  </div>
  `}async function Pi(e,{state:t,navigate:o,toast:r}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:i}=await k.from("matches").select("id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at").or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),n={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(i||[]).filter(s=>s.status==="finished"),a=(i||[]).filter(s=>s.status==="in_progress");function d(s){const p=s.home_id===c.id;p?s.home_score:s.away_score,p?s.away_score:s.home_score;const u=s.winner_id===c.id,f=s.home_score===s.away_score&&s.status==="finished",g=s.status!=="finished"?"…":f?"N":u?"V":"D",x=s.status!=="finished"||f?"#888":u?"#1A6B3C":"#c0392b";let m=n[s.mode]||s.mode;s.away_id===null&&!m.startsWith("IA")&&(m="IA");let _="";s.status==="in_progress"&&Date.now()-new Date(s.created_at).getTime()>3600*1e3&&(_=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const b=new Date(s.created_at),y=b.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+b.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),w=s.status==="finished"?`${s.home_score} - ${s.away_score}`:`${s.home_score||0} - ${s.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${m}${_}</div>
        <div style="font-size:11px;color:var(--gray-600)">${y}${s.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${w}</span>
        <span style="background:${x};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${g}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(i||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${a.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${a.map(d).join("")}
        </div>`:""}

      ${l.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${l.map(d).join("")}
        </div>`:""}

      ${(i||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const R={user:null,profile:null,page:"home",params:{}};function $e(e,t="info",o=3e3){const r=document.getElementById("toast");r&&(r.textContent=e,r.className=`show ${t}`,clearTimeout(r._t),r._t=setTimeout(()=>{r.className=""},o))}function Hi(e,t,o=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=o,document.getElementById("modal-overlay").classList.remove("hidden")}function De(){document.getElementById("modal-overlay").classList.add("hidden")}async function _e(){if(!R.user)return;const{data:e}=await k.from("users").select("*").eq("id",R.user.id).single();e&&(R.profile=e)}const Ve="mw_theme";function Te(){return localStorage.getItem(Ve)||"light"}function Ki(e){var t;localStorage.setItem(Ve,e),Ge(e),(t=R.profile)!=null&&t.id&&k.from("users").update({theme:e}).eq("id",R.profile.id).then(()=>{})}function Ge(e){document.documentElement.setAttribute("data-theme",e)}function ke(e,t={}){R.page=e,R.params=t,Mt()}async function Mt(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(r=>{r.classList.toggle("active",r.dataset.page===R.page)});const t=document.getElementById("nav-credits");t&&R.profile&&(t.textContent=`💰 ${(R.profile.credits||0).toLocaleString("fr")}`);const o={state:R,navigate:ke,toast:$e,openModal:Hi,closeModal:De,refreshProfile:_e};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',R.page){case"home":await Je(e,o);break;case"collection":await Rt(e,o);break;case"decks":await Ce(e,o);break;case"boosters":await oi(e,o);break;case"match":await $i(e,o);break;case"market":await Gi(e,o);break;case"rankings":await Oi(e,o);break;case"matches":await Pi(e,o);break;default:await Je(e,o)}}function Ui(){const e=document.getElementById("app"),t=R.profile;if(!t)return;const o="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(r=>{r.addEventListener("click",c=>{c.preventDefault(),ke(r.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>ke("home")),document.getElementById("nav-credits").addEventListener("click",()=>ke("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const c=Te()==="dark"?"light":"dark";Ki(c),at(c)}),at(Te())}function at(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Vi(){Ge(Te()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&De()}),document.getElementById("modal-close").addEventListener("click",De);const{data:{session:e}}=await k.auth.getSession();if(!e){dt(),We(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:$e});return}R.user=e.user,await _e(),dt();try{const{data:t}=await k.from("formation_links_overrides").select("formation, links"),o={};(t||[]).forEach(r=>{o[r.formation]=r.links}),Ct(o)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!R.profile){jt(document.getElementById("app"),{state:R,navigate:async()=>{await _e(),st()},toast:$e,refreshProfile:_e});return}R.profile.theme&&R.profile.theme!==Te()&&(localStorage.setItem(Ve,R.profile.theme),Ge(R.profile.theme)),st(),k.auth.onAuthStateChange(async(t,o)=>{t==="SIGNED_OUT"&&(R.user=null,R.profile=null,document.getElementById("app").innerHTML="",We(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:$e}))})}function st(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Ui(),Mt()}function dt(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}Vi();
