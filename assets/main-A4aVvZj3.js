import{s as _,l as ae,F as Ge,b as xe,c as st,d as Mt}from"./formation-links-CDBKB_z4.js";function Ye(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(a=>{a.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),a.classList.add("active"),document.getElementById("tab-login").style.display=a.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=a.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const a=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,o=document.getElementById("login-error");if(o.textContent="",!a||!c){o.textContent="Remplissez tous les champs.";return}const n=document.getElementById("login-btn");n.textContent="Connexion…",n.disabled=!0;const{error:d}=await _.auth.signInWithPassword({email:a,password:c});if(n.textContent="Se connecter",n.disabled=!1,d){o.textContent=d.message.includes("Invalid")?"Email ou mot de passe incorrect.":d.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",a=>{a.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const a=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,o=document.getElementById("reg-confirm").value,n=document.getElementById("reg-error");if(n.textContent="",!a||!c||!o){n.textContent="Remplissez tous les champs.";return}if(c.length<6){n.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==o){n.textContent="Les mots de passe ne correspondent pas.";return}const d=document.getElementById("reg-btn");d.textContent="Création…",d.disabled=!0;const{error:r}=await _.auth.signUp({email:a,password:c});if(d.textContent="Créer mon compte",d.disabled=!1,r){n.textContent=r.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=a})}function zt(e,{state:t,navigate:i,toast:a,refreshProfile:c}){let o="#1A6B3C",n="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${n};border-color:${o}">
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
  `;function d(){var m;const l=document.getElementById("logo-preview"),s=document.getElementById("logo-initials"),p=((m=document.getElementById("setup-club"))==null?void 0:m.value)||"MW",u=p.trim().split(" ").filter(Boolean),f=u.length>=2?(u[0][0]+u[1][0]).toUpperCase():p.slice(0,2).toUpperCase();l&&(l.style.background=n,l.style.borderColor=o),s&&(s.textContent=f,s.style.color=o)}document.getElementById("color1").addEventListener("input",l=>{o=l.target.value,document.getElementById("swatch1").style.background=o,d()}),document.getElementById("color2").addEventListener("input",l=>{n=l.target.value,document.getElementById("swatch2").style.background=n,d()});function r(l){document.querySelectorAll(".setup-step").forEach(s=>s.classList.remove("active")),document.getElementById(`step-${l}`).classList.add("active"),document.getElementById("step-num").textContent=l,document.getElementById("progress-fill").style.width=`${Math.round(l/3*100)}%`,l===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),s=document.getElementById("step1-error");if(s.textContent="",l.length<3){s.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:p}=await _.from("users").select("id").eq("pseudo",l).maybeSingle();if(p){s.textContent="Ce pseudo est déjà pris.";return}r(2)}),document.getElementById("step2-back").addEventListener("click",()=>r(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const l=document.getElementById("setup-club").value.trim(),s=document.getElementById("step2-error");if(s.textContent="",l.length<2){s.textContent="Nom trop court (min. 2 caractères).";return}const{data:p}=await _.from("users").select("id").eq("club_name",l).maybeSingle();if(p){s.textContent="Ce nom de club est déjà pris.";return}r(3)}),document.getElementById("step3-back").addEventListener("click",()=>r(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),s=document.getElementById("setup-club").value.trim(),p=document.getElementById("step3-error"),u=document.getElementById("step3-finish");p.textContent="",u.disabled=!0,u.textContent="Création en cours…";try{const{error:f}=await _.from("users").insert({id:t.user.id,pseudo:l,club_name:s,club_color1:o,club_color2:n,credits:1e4});if(f)throw f;await Ct(t.user.id),await c(),a(`Bienvenue ${l} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(f){p.textContent=f.message,u.disabled=!1,u.textContent="🚀 Créer mon profil !"}})}async function Ct(e){const{data:t}=await _.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,a=i.filter(r=>r.job==="GK"),c=i.filter(r=>r.job!=="GK"),o=[];for(let r=0;r<5;r++){let l=[];if(r===0&&a.length>0){const s=a[Math.floor(Math.random()*a.length)];l.push(s);const p=We([...c]).slice(0,3);l.push(...p)}else l=We([...i]).slice(0,4);l.forEach(s=>{o.push({owner_id:e,player_id:s.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(r=>{o.push({owner_id:e,card_type:"game_changer",gc_type:r})});const d=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];o.push({owner_id:e,card_type:"formation",formation:d[Math.floor(Math.random()*d.length)]}),o.length>0&&await _.from("cards").insert(o),await _.from("users").update({first_booster_opened:!0}).eq("id",e)}function We(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}async function Xe(e,{state:t,navigate:i,toast:a}){var n,d;const c=t.profile;if(!c)return;const{data:o}=await _.from("matches").select("id,home_score,away_score,status,mode,winner_id,created_at").or(`home_id.eq.${c.id},away_id.eq.${c.id}`).eq("status","finished").order("created_at",{ascending:!1}).limit(3);e.innerHTML=`
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
      ${o&&o.length>0?`
      <div>
        <div class="section-title">⚽ Derniers matchs</div>
        <div class="card-panel" style="padding:0">
          ${o.map(r=>{const l=r.winner_id===c.id,s=r.home_score===r.away_score,p=s?"N":l?"V":"D",u=s?"#888":l?"#1A6B3C":"#c0392b",f={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat"}[r.mode]||r.mode,y=new Date(r.created_at).toLocaleDateString("fr",{month:"short",day:"numeric"});return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
              <div>
                <div style="font-size:13px;font-weight:600">${f}</div>
                <div style="font-size:11px;color:var(--gray-600)">${y}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <span style="font-size:14px;font-weight:700">${r.home_score} - ${r.away_score}</span>
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
  `,e.querySelectorAll("[data-nav]").forEach(r=>{r.addEventListener("click",l=>{l.preventDefault(),i(r.dataset.nav)})}),(n=document.getElementById("nav-rankings"))==null||n.addEventListener("click",()=>i("rankings")),(d=document.getElementById("nav-matches"))==null||d.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(r=>{r.addEventListener("click",()=>{if(r.classList.add("tapped"),setTimeout(()=>r.classList.remove("tapped"),200),r.dataset.action==="match-ai"){jt(i);return}a("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),window.location.reload()})}function jt(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const a=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",a),i.addEventListener("click",c=>{c.target===i&&a()}),i.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{a(),e("match",{matchMode:c.dataset.mode})})})}const ue={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function H(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}function dt(e){let t=0;for(let i=0;i<e.length-1;i++){const a=e[i],c=e[i+1];if(!a||!c)continue;const o=ae(a,c);o==="#00ff88"?t+=2:o==="#FFD700"&&(t+=1)}return t}function lt(e,t={}){const i=e.reduce((o,n)=>{const d=n._line||n.job;return o+(Number(d==="MIL"?n.note_m:n.note_a)||0)+(Number(n.boost)||0)},0),a=dt(e);let c=i+a;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:i,links:a,total:Math.max(0,c)}}function ct(e,t={}){const i=e.reduce((o,n)=>{const d=n._line||n.job;let r=0;return d==="GK"?r=Number(n.note_g)||0:d==="MIL"?r=Number(n.note_m)||0:r=Number(n.note_d)||0,o+r+(Number(n.boost)||0)},0),a=dt(e);let c=i+a;return t.stolenNote&&(c-=t.stolenNote),{base:i,links:a,total:Math.max(0,c)}}function pt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function ut(e,t,i="easy"){const a=e.filter(n=>!n.used);if(!a.length)return[];const c=[...a].sort((n,d)=>{const r=t==="attack"?H(n,"ATT"):n._line==="GK"?H(n,"GK"):H(n,"DEF");return(t==="attack"?H(d,"ATT"):d._line==="GK"?H(d,"GK"):H(d,"DEF"))-r});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(o,c.length,3))}function Bt(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const ft={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ee={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},be=["GK","DEF","MIL","ATT"],St=["Tous","GK","DEF","MIL","ATT"],Ft={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},Re={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function gt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function fe(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Le(e,t=""){var p,u;const i=e.player;if(!i)return"";const a=i.job||"ATT",c=Ee[a],o=ft[i.rarity]||"#ccc",n=fe(i,a),d=i.job2?fe(i,i.job2):null,r=i.job2?Ee[i.job2]:null,l=gt(i),s=Re[i.country_code]||i.country_code||"";return`
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
            fill="white" font-family="Arial Black,Arial">${n}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${d!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${r}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${d}</text>
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${s}</div>
        ${(p=i.clubs)!=null&&p.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((u=i.clubs)==null?void 0:u.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Je(e){const t=e.job||"ATT",i=fe(e,t),a=Re[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${a}</div>
      </div>
    </div>
  </div>`}async function Dt(e,t){const{state:i,navigate:a,toast:c,openModal:o,closeModal:n}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await _.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:r}=await _.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),l=(d||[]).filter(E=>E.card_type==="player"&&E.player),s=(d||[]).filter(E=>E.card_type==="game_changer"),p=(d||[]).filter(E=>E.card_type==="formation"),{data:u}=await _.from("gc_definitions").select("name,gc_type,color,effect,image_url"),f={};(u||[]).forEach(E=>{f[E.name]=E});const m=Object.keys(Ge),y=Object.keys(ue),h={};l.forEach(E=>{const k=E.player.id;h[k]=(h[k]||0)+1}),new Set(Object.keys(h).map(E=>String(E)));const $=new Set(p.map(E=>E.formation)),b=new Set(s.map(E=>E.gc_type));let x="player",w="Tous",I="",T=!1;function g(){return[...l].sort((E,k)=>{const B=be.indexOf(E.player.job),C=be.indexOf(k.player.job);return B!==C?B-C:(E.player.surname_encoded||"").localeCompare(k.player.surname_encoded||"")})}function v(){return[...r||[]].sort((E,k)=>{const B=be.indexOf(E.job),C=be.indexOf(k.job);return B!==C?B-C:(E.surname_encoded||"").localeCompare(k.surname_encoded||"")})}function A(){return g().filter(E=>{const k=E.player,B=w==="Tous"||k.job===w,C=!I||`${k.firstname} ${k.surname_encoded}`.toLowerCase().includes(I);return B&&C})}function z(){return v().filter(E=>{const k=w==="Tous"||E.job===w,B=!I||`${E.firstname} ${E.surname_encoded}`.toLowerCase().includes(I);return k&&B})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${x==="player"?"var(--green)":"transparent"};
        color:${x==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${l.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${x==="formation"?"var(--green)":"transparent"};
        color:${x==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${p.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${x==="gc"?"var(--green)":"transparent"};
        color:${x==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function j(){const E=document.getElementById("col-filters");E&&(x==="player"?(E.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${I}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${St.map(k=>`
            <button class="filter-btn" data-job="${k}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${k===w?"var(--green)":"var(--gray-200)"};
                background:${k===w?"var(--green)":"#fff"};
                color:${k===w?"#fff":"var(--gray-600)"}">
              ${k}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${T?"var(--yellow)":"var(--gray-200)"};
              background:${T?"var(--yellow)":"#fff"};
              color:${T?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${T?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",k=>{I=k.target.value.toLowerCase(),S()}),e.querySelectorAll(".filter-btn").forEach(k=>{k.addEventListener("click",()=>{w=k.dataset.job,j(),S()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{T=!T,j(),S()})):(E.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${T?"var(--yellow)":"var(--gray-200)"};
              background:${T?"var(--yellow)":"#fff"};
              color:${T?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${T?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{T=!T,j(),S()})))}function S(){const E=document.getElementById("col-grid");E&&(x==="player"?V(E):x==="formation"?ye(E):me(E))}function D(E,k,B,C,L){L=L||"#7a28b8";const F=document.getElementById("col-grid"),M=document.getElementById("col-big");if(!F||!M)return;var N=0;function O(){M.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+k(E[N])+"</div>";var P=M.querySelector("[data-card-id],[data-form-id],[data-gc-id]");P&&P.addEventListener("click",function(){C(E[N])}),requestAnimationFrame(function(){var R=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!R||!M)){var Y=M.clientHeight-8,J=M.clientWidth-24,Z=R.offsetHeight,ee=R.offsetWidth;if(Z>0&&ee>0&&Y>40){var ie=Math.min(Y/Z,J/ee,1);R.style.transform="scale("+ie.toFixed(3)+")",R.style.transformOrigin="top center"}}}),F.innerHTML=E.map(function(R,Y){return'<div class="col-mini-item" data-idx="'+Y+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(Y===N?L:"transparent")+';transition:border-color .15s;overflow:hidden">'+B(R,Y===N)+"</div>"}).join(""),F.querySelectorAll(".col-mini-item").forEach(function(R){R.addEventListener("click",function(){N=Number(R.dataset.idx),O(),R.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}O()}function q(E){var k=.54,B=Math.round(140*k),C=Math.round(310*k),L;if(!E||E._fake){var F=E?E.player:null;if(!F)return"";L=Je(F)}else L=Le(E,"");return'<div style="width:'+B+"px;height:"+C+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+k+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+L+"</div></div>"}function U(E,k,B){k=k||100,B=B||140;var C=xe[E]||{},L={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},F=Math.max(3,Math.round(k*.06)),M=Object.entries(C).map(function(O){var P=O[0],R=O[1],Y=P.replace(/\d+$/,""),J=L[Y]||"#888",Z=Math.round(R.x*k),ee=Math.round(R.y*B);return'<circle cx="'+Z+'" cy="'+ee+'" r="'+F+'" fill="'+J+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),N=Math.max(1,Math.round(k/50));return'<svg viewBox="0 0 '+k+" "+B+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+k+'" height="'+B+'" fill="#1A6B3C"/><rect x="'+Math.round(k*.2)+'" y="'+Math.round(B*.02)+'" width="'+Math.round(k*.6)+'" height="'+Math.round(B*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+N+'"/><line x1="0" y1="'+Math.round(B*.5)+'" x2="'+k+'" y2="'+Math.round(B*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+N+'"/><ellipse cx="'+Math.round(k*.5)+'" cy="'+Math.round(B*.5)+'" rx="'+Math.round(k*.18)+'" ry="'+Math.round(B*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+N+'"/><rect x="'+Math.round(k*.2)+'" y="'+Math.round(B*.82)+'" width="'+Math.round(k*.6)+'" height="'+Math.round(B*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+N+'"/>'+M+"</svg>"}function Q(E,k,B){var C=B>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+B+"</div>":"",L=k?'data-form-id="'+k.id+'"':"",F=E.length>7?14:E.length>5?16:19,M=!!k;return"<div "+L+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(M?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(M?"":"filter:grayscale(1);opacity:0.5")+'">'+C+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(M?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+F+"px;font-weight:900;color:"+(M?"#1A6B3C":"#aaa")+';line-height:1">'+E+'</div></div><div style="flex:1;overflow:hidden;background:'+(M?"#1A6B3C":"#ccc")+'">'+U(E,140,220)+"</div></div>"}function X(E,k){var B=.54,C=Math.round(140*B),L=Math.round(305*B),F=Math.round(L*.22),M=L-F,N=E.length>7?5:7,O=U(E,C,M),P=k?"1.5px solid #2a7a40":"1px solid #ddd",R=k?"":"filter:grayscale(1);opacity:0.45;",Y=k?"#1A6B3C":"#bbb",J="#fff";return'<div style="width:'+C+"px;height:"+L+"px;border-radius:6px;border:"+P+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+R+'"><div style="height:'+F+"px;background:"+Y+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+N+"px;font-weight:900;color:"+J+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(C-4)+'px">'+E+'</span></div><div style="height:'+M+'px;overflow:hidden;flex-shrink:0">'+O+"</div></div>"}function V(E){if(T){const k=z();if(!k.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const B=k.map(C=>l.find(L=>L.player.id===C.id)||{_fake:!0,player:C,id:"fake-"+C.id});D(B,C=>C._fake?Je(C.player):Le(C,""),C=>C._fake?q({player:C.player,id:"x",_fake:!0}):q(C),C=>{C._fake||Ze(C,l,h,t)},"#1A6B3C")}else{const k=A();if(!k.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const B={},C=[];k.forEach(L=>{B[L.player.id]||(B[L.player.id]=!0,C.push(L))}),D(C,L=>{const F=h[L.player.id]||1,M=F>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${F}</div>`:"",O=l.filter(P=>P.player.id===L.player.id&&P.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Le(L,M+O)},L=>q(L),L=>Ze(L,l,h,t),"#1A6B3C")}}function ye(E){const k=T?m:[...$];if(!k.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const B=k.map(C=>({formation:C,card:p.find(L=>L.formation===C)||null,owned:$.has(C)}));D(B,({formation:C,card:L,owned:F})=>Q(C,F?L:null,F?p.filter(M=>M.formation===C).length:0),({formation:C,owned:L})=>X(C,L),({card:C,owned:L})=>{L&&C&&Rt(C,p,t,o)},"#1A6B3C")}function me(E){const k=Object.keys(f),B=T?k.length?k:y:[...b];if(!B.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const C=B.map(L=>({type:L,gc:ue[L]||{icon:"⚡",desc:""},def:f[L]||null,owned:b.has(L),card:s.find(F=>F.gc_type===L)||null}));D(C,({type:L,gc:F,def:M,owned:N,card:O})=>{const P=N?s.filter(Lt=>Lt.gc_type===L).length:0,R=P>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${P}</div>`:"",Y=(M==null?void 0:M.gc_type)==="ultra_game_changer",J={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Z={purple:"#b06ce0",light_blue:"#00d4ef"},ee=J[M==null?void 0:M.color]||J.purple,ie=Z[M==null?void 0:M.color]||Z.purple,he=(M==null?void 0:M.effect)||F.desc||"",Ve=M!=null&&M.image_url?`/manager-wars/icons/${M.image_url}`:null;return N&&O?`<div data-gc-id="${O.id}" data-gc-type="${L}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${ie};background:${ee};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${ie}66;cursor:pointer">
          ${R}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${L.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${L}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Y?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:220px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Ve?`<img src="${Ve}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${F.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${he.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${L}</div></div>
          <div style="height:220px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${F.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:L,gc:F,def:M,owned:N})=>N?(()=>{const O=Math.round(75.60000000000001),P=Math.round(310*.54),R=Math.round(P*.65),Y=Math.round(P*.18),J={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Z={purple:"#9b59b6",light_blue:"#00bcd4"},ee=J[M==null?void 0:M.color]||J.purple,ie=Z[M==null?void 0:M.color]||Z.purple,he=M!=null&&M.image_url?`/manager-wars/icons/${M.image_url}`:null;return`<div style="width:${O}px;height:${P}px;border-radius:8px;background:${ee};border:1px solid ${ie};display:flex;flex-direction:column;overflow:hidden"><div style="height:${Y}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${O-6}px">${L}</span></div><div style="height:${R}px;display:flex;align-items:center;justify-content:center">${he?`<img src="${he}" style="max-width:${O-8}px;max-height:${R-4}px;object-fit:contain">`:`<span style="font-size:24px">${F.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((M==null?void 0:M.effect)||F.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const O=Math.round(75.60000000000001),P=Math.round(310*.54);return`<div style="width:${O}px;height:${P}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${F.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${L}</span></div>`})(),({type:L,owned:F})=>{F&&Gt(L,o)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(E=>{E.addEventListener("click",()=>{x=E.dataset.tab,w="Tous",I="",T=!1,e.querySelectorAll(".col-tab-btn").forEach(k=>{const B=k.dataset.tab===x;k.style.borderBottomColor=B?"var(--green)":"transparent",k.style.color=B?"var(--green)":"var(--gray-600)"}),j(),S()})}),j(),S()}function Gt(e,t){const i=ue[e]||{icon:"⚡",desc:"Effet spécial."};t("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:linear-gradient(135deg,#3d0a7a,#7a28b8);border-radius:16px;border:2px solid #9b59b6;
        padding:24px 32px;text-align:center;color:#fff;width:100%;max-width:280px">
        <div style="font-size:56px;margin-bottom:8px">${i.icon}</div>
        <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:8px">GAME CHANGER</div>
        <div style="font-size:22px;font-weight:900">${e}</div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${i.desc}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ce=1e3;function Rt(e,t,i,a){var y,h,$;const{state:c,toast:o,closeModal:n,navigate:d,refreshProfile:r}=i,l=e.formation,s={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function p(){const b=xe[l]||{},x=Ge[l]||[],w=290,I=360,T=20;function g(A){const z=b[A];return z?{x:z.x*w,y:z.y*I}:null}let v=`<svg width="${w}" height="${I}" viewBox="0 0 ${w} ${I}" xmlns="http://www.w3.org/2000/svg">`;for(const[A,z]of x){const j=g(A),S=g(z);!j||!S||(v+=`<line x1="${j.x}" y1="${j.y}" x2="${S.x}" y2="${S.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const A of Object.keys(b)){const z=g(A);if(!z)continue;const j=A.replace(/\d+/,""),S=s[j]||"#555";v+=`<circle cx="${z.x}" cy="${z.y}" r="${T}" fill="${S}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,v+=`<text x="${z.x}" y="${z.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${j}</text>`}return v+="</svg>",v}const u=t.filter(b=>b.formation===l),f=u.length,m=!e.is_for_sale;a(`Formation ${l}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${ce.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${f-1} carte${f-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${f<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${m?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${ce}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(y=document.getElementById("direct-sell-form-btn"))==null||y.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${l} pour ${ce.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const b=u.find(w=>!w.is_for_sale)||u[0];if(!b){o("Aucune carte à vendre","error");return}const{error:x}=await _.from("cards").delete().eq("id",b.id);if(x){o(x.message,"error");return}await _.from("users").update({credits:(c.profile.credits||0)+ce}).eq("id",c.profile.id),await r(),o(`+${ce.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),n(),d("collection")}),(h=document.getElementById("market-sell-form-btn"))==null||h.addEventListener("click",async()=>{const b=parseInt(document.getElementById("sell-price-form").value);if(!b||b<1){o("Prix invalide","error");return}await _.from("cards").update({is_for_sale:!0,sale_price:b}).eq("id",e.id),await _.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:b}),o("Carte mise en vente sur le marché !","success"),n(),d("collection")}),($=document.getElementById("cancel-sell-form-btn"))==null||$.addEventListener("click",async()=>{await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await _.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),n(),d("collection")})}function Ze(e,t,i,a){var T,g,v,A,z,j;const{state:c,toast:o,openModal:n,closeModal:d,navigate:r,refreshProfile:l}=a,s=e.player,p=t.filter(S=>S.player.id===s.id),u=p.length,f=Ft[s.rarity]||1e3,m=s.rarity!=="legende",y=gt(s),h=fe(s,s.job),$=s.job2?fe(s,s.job2):null,b=Ee[s.job]||"#1A6B3C",x=s.job2?Ee[s.job2]:null,w=ft[s.rarity]||"#ccc",I=Re[s.country_code]||s.country_code||"";n(`${s.firstname} ${s.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

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
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${h}</text>
            </svg>
            ${$!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${x}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${$}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${y?`<img src="${y}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${s.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${I}</div>
            ${(T=s.clubs)!=null&&T.logo_url?`<img src="${s.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((g=s.clubs)==null?void 0:g.encoded_name)||"").slice(0,6)}</div>`}
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
    ${m&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(v=document.getElementById("close-detail"))==null||v.addEventListener("click",d),(A=document.getElementById("direct-sell-btn"))==null||A.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${s.surname_encoded} pour ${f.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const S=p.find(q=>!q.is_for_sale)||p[0];if(!S){o("Aucune carte à vendre","error");return}const{error:D}=await _.from("cards").delete().eq("id",S.id);if(D){o(D.message,"error");return}await _.from("users").update({credits:(c.profile.credits||0)+f}).eq("id",c.profile.id),await l(),o(`+${f.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),r("collection")}),(z=document.getElementById("market-sell-btn"))==null||z.addEventListener("click",async()=>{const S=parseInt(document.getElementById("sell-price").value);if(!S||S<1){o("Prix invalide","error");return}await _.from("cards").update({is_for_sale:!0,sale_price:S}).eq("id",e.id),await _.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:S}),o("Carte mise en vente sur le marché !","success"),d(),r("collection")}),(j=document.getElementById("cancel-sell-btn"))==null||j.addEventListener("click",async()=>{await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await _.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),d(),r("collection")})}const Ae={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},te={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Te(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function xt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function yt(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function qt(e,t=44,i=58){var f;const a=e?Te(e):null,c=e?yt(e):null,o=xt(e==null?void 0:e.country_code),n=(e==null?void 0:e.job)||"MIL",d=te[n]||"#555",r={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",l=Number(n==="GK"?e==null?void 0:e.note_g:n==="DEF"?e==null?void 0:e.note_d:n==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,s=Math.round(i*.19),p=Math.round(i*.25),u=i-s-p;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${r};background:${d};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${s}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${s}px;left:0;width:${t}px;height:${u}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${o?`<img src="${o}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">🌍</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${l}</span>
      ${c?`<img src="${c}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:(f=e==null?void 0:e.clubs)!=null&&f.encoded_name?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function ze(e,t){const{state:i,navigate:a,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(o==null?void 0:o.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(o==null?void 0:o.length)>0?o.map(n=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const n=prompt("Nom du deck :",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!n)return;const{data:d,error:r}=await _.from("decks").insert({owner_id:i.profile.id,name:n}).select().single();if(r){c(r.message,"error");return}c("Deck créé !","success"),Qe(d.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(n=>{n.addEventListener("click",()=>Qe(n.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(n=>{n.addEventListener("click",async()=>{const d=prompt("Nouveau nom :",n.dataset.name);if(!d||d===n.dataset.name)return;const{error:r}=await _.from("decks").update({name:d}).eq("id",n.dataset.rename);if(r){c(r.message,"error");return}c("Deck renommé !","success"),ze(e,t)})}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${n.dataset.name}" ? Cette action est irréversible.`))return;await _.from("deck_cards").delete().eq("deck_id",n.dataset.delete);const{error:d}=await _.from("decks").delete().eq("id",n.dataset.delete);if(d){c(d.message,"error");return}c("Deck supprimé.","success"),ze(e,t)})})}async function Qe(e,t,i){const{state:a,toast:c}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("decks").select("*").eq("id",e).single(),{data:n}=await _.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),d=(n||[]).filter(f=>f.card_type==="player"&&f.player),r=(n||[]).filter(f=>f.card_type==="formation"),l=r.map(f=>f.formation).filter(Boolean),{data:s}=await _.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=o.formation||"4-4-2";l.length>0&&!l.includes(p)&&(p=l[0]);const u={deckId:e,name:o.name,formation:p,formationCardId:o.formation_card_id,slots:{},subs:[],playerCards:d,formationCards:r,availableFormations:l};(s||[]).forEach(f=>{f.is_starter?u.slots[f.position]=f.card_id:u.subs.includes(f.card_id)||u.subs.push(f.card_id)}),se(t,u,i)}function se(e,t,i){var r;const{navigate:a}=i;Ae[t.formation];const c=et(t.formation),o=c.filter(l=>t.slots[l]).length,n=t.availableFormations.length>0?t.availableFormations:Object.keys(Ae),d=t.subs.map(l=>t.playerCards.find(s=>s.id===l)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${n.map(l=>`<option value="${l}" ${l===t.formation?"selected":""}>${l}</option>`).join("")}
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
        ${d.map(l=>{const s=l.player;return`<div style="position:relative;flex-shrink:0">
            ${qt(s,44,58)}
            <button data-remove-sub="${l.id}"
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
  </div>`,Nt(e,t,c,i),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",l=>{t.formation=l.target.value;const s=et(t.formation),p={};s.forEach(u=>{t.slots[u]&&(p[u]=t.slots[u])}),t.slots=p,se(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>Ht(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(l=>{l.addEventListener("click",()=>{t.subs=t.subs.filter(s=>s!==l.dataset.removeSub),se(e,t,i)})}),(r=document.getElementById("add-sub-btn"))==null||r.addEventListener("click",()=>{Pt(t,e,i)})}function Nt(e,t,i,a){const c=e.querySelector("#deck-field");if(!c)return;const o=xe[t.formation]||{},n=st(t.formation)||[],d={};for(const $ of i){const b=t.slots[$],x=b?t.playerCards.find(w=>w.id===b):null;d[$]=x?x.player:null}const r=300,l=300,s=48,p=64,u=13,f=16,m=38;function y($){const b=o[$];return b?{x:b.x*r,y:b.y*l}:null}let h="";for(const[$,b]of n){const x=y($),w=y(b);if(!x||!w)continue;const I=d[$]?{...d[$],club_id:d[$].club_id,country_code:d[$].country_code,rarity:d[$].rarity}:null,T=d[b]?{...d[b],club_id:d[b].club_id,country_code:d[b].country_code,rarity:d[b].rarity}:null,g=ae(I,T);g==="#ff3333"||g==="#cc2222"?h+=`<line x1="${x.x.toFixed(1)}" y1="${x.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${g}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(h+=`<line x1="${x.x.toFixed(1)}" y1="${x.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${g}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,h+=`<line x1="${x.x.toFixed(1)}" y1="${x.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${g}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const $ of i){const b=y($);if(!b)continue;const x=d[$],w=$.replace(/\d+/,""),I=te[w]||"#555",T=(b.x-s/2).toFixed(1),g=(b.y-p/2).toFixed(1),v={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[x==null?void 0:x.rarity]||"#aaa";if(x){const A=Te(x),z=yt(x),j=xt(x.country_code),S=Number(w==="GK"?x.note_g:w==="DEF"?x.note_d:w==="MIL"?x.note_m:x.note_a)||0,D=p-u-f;h+=`<defs><clipPath id="dcp-${$}"><rect x="${T}" y="${(b.y-p/2+u).toFixed(1)}" width="${s}" height="${D}"/></clipPath></defs>`,h+=`<rect x="${T}" y="${g}" width="${s}" height="${p}" rx="5" fill="${I}"/>`,A&&(h+=`<image href="${A}" x="${T}" y="${(b.y-p/2+u).toFixed(1)}" width="${s}" height="${D}" clip-path="url(#dcp-${$})" preserveAspectRatio="xMidYMin slice"/>`),h+=`<rect x="${T}" y="${g}" width="${s}" height="${u}" fill="rgba(255,255,255,0.93)"/>`,h+=`<text x="${b.x.toFixed(1)}" y="${(b.y-p/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(x.surname_encoded||"").slice(0,9)}</text>`;const q=(b.y+p/2-f).toFixed(1);h+=`<rect x="${T}" y="${q}" width="${s}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,j&&(h+=`<image href="${j}" x="${(b.x-21).toFixed(1)}" y="${(b.y+p/2-f+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),h+=`<text x="${b.x.toFixed(1)}" y="${(b.y+p/2-f/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${S}</text>`,z&&(h+=`<image href="${z}" x="${(b.x+s/2-14).toFixed(1)}" y="${(b.y+p/2-f+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),h+=`<rect x="${T}" y="${g}" width="${s}" height="${p}" rx="5" fill="none" stroke="${v}" stroke-width="2"/>`}else h+=`<rect x="${T}" y="${g}" width="${s}" height="${p}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,h+=`<text x="${b.x.toFixed(1)}" y="${b.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,h+=`<text x="${b.x.toFixed(1)}" y="${(b.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${w}</text>`;h+=`<rect x="${T}" y="${g}" width="${s}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${$}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-m} ${-m} ${r+m*2} ${l+m*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${h}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach($=>{$.addEventListener("click",()=>Ot($.dataset.pos,t,e,a))})}function Ot(e,t,i,a){var u,f,m;const{openModal:c,closeModal:o}=a,n=e.replace(/\d+/,""),d=t.slots[e],r=d?t.playerCards.find(y=>y.id===d):null;(u=r==null?void 0:r.player)==null||u.id;const l=new Set;Object.entries(t.slots).forEach(([y,h])=>{var b;if(y===e||!h)return;const $=t.playerCards.find(x=>x.id===h);(b=$==null?void 0:$.player)!=null&&b.id&&l.add($.player.id)}),t.subs.forEach(y=>{var $;const h=t.playerCards.find(b=>b.id===y);($=h==null?void 0:h.player)!=null&&$.id&&l.add(h.player.id)});const s=new Set,p=t.playerCards.filter(y=>{const h=y.player;return!(h.job===n||h.job2===n)||l.has(h.id)||s.has(h.id)?!1:(s.add(h.id),!0)});p.sort((y,h)=>{const $=n==="GK"?y.player.note_g:n==="DEF"?y.player.note_d:n==="MIL"?y.player.note_m:y.player.note_a;return(n==="GK"?h.player.note_g:n==="DEF"?h.player.note_d:n==="MIL"?h.player.note_m:h.player.note_a)-$}),c(`Choisir ${n} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${p.length>0?p.map(y=>{var w,I;const h=y.player,$=n==="GK"?h.note_g:n==="DEF"?h.note_d:n==="MIL"?h.note_m:h.note_a,b=Te(h),x={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[h.rarity];return`<div class="player-option" data-card-id="${y.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${te[n]}">
            ${b?`<img src="${b}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${te[n]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${n}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${h.firstname} ${h.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${h.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${h.country_code}">
              ${(w=h.clubs)!=null&&w.logo_url?`<img src="${h.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((I=h.clubs)==null?void 0:I.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${h.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${te[n]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${x};flex-shrink:0">
            ${$}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(f=document.getElementById("close-selector"))==null||f.addEventListener("click",o),(m=document.getElementById("remove-player"))==null||m.addEventListener("click",()=>{delete t.slots[e],o(),se(i,t,a)}),document.querySelectorAll(".player-option").forEach(y=>{y.addEventListener("click",()=>{t.slots[e]=y.dataset.cardId,o(),se(i,t,a)})})}function Pt(e,t,i){var r;const{openModal:a,closeModal:c}=i,o=new Set;Object.values(e.slots).filter(Boolean).forEach(l=>{var p;const s=e.playerCards.find(u=>u.id===l);(p=s==null?void 0:s.player)!=null&&p.id&&o.add(s.player.id)}),e.subs.forEach(l=>{var p;const s=e.playerCards.find(u=>u.id===l);(p=s==null?void 0:s.player)!=null&&p.id&&o.add(s.player.id)});const n=new Set,d=e.playerCards.filter(l=>{var s,p,u;return o.has((s=l.player)==null?void 0:s.id)||n.has((p=l.player)==null?void 0:p.id)?!1:(n.add((u=l.player)==null?void 0:u.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${d.length>0?d.map(l=>{var f;const s=l.player,p=Te(s),u=s.job==="GK"?s.note_g:s.job==="DEF"?s.note_d:s.job==="MIL"?s.note_m:s.note_a;return`<div class="player-option" data-card-id="${l.id}"
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
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(r=document.getElementById("close-sub-selector"))==null||r.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(l=>{l.addEventListener("click",()=>{e.subs.push(l.dataset.cardId),c(),se(t,e,i)})})}async function Ht(e,t){const{state:i,toast:a,navigate:c}=t,o=e.formationCards.find(r=>r.formation===e.formation),n=(o==null?void 0:o.id)||e.formationCardId;await _.from("decks").update({formation:e.formation,formation_card_id:n||null}).eq("id",e.deckId),await _.from("deck_cards").delete().eq("deck_id",e.deckId);const d=[];if(Object.entries(e.slots).forEach(([r,l],s)=>{d.push({deck_id:e.deckId,card_id:l,position:r,is_starter:!0,slot_order:s})}),e.subs.forEach((r,l)=>{d.push({deck_id:e.deckId,card_id:r,position:`SUB${l+1}`,is_starter:!1,slot_order:100+l})}),d.length>0){const{error:r}=await _.from("deck_cards").insert(d);if(r){a(r.message,"error");return}}a("Deck enregistré ✅","success"),c("decks")}function et(e){const t=Ae[e]||Ae["4-4-2"],i=["GK1"];for(let a=1;a<=t.DEF;a++)i.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)i.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)i.push(`ATT${a}`);return i}const Kt="modulepreload",Ut=function(e){return"/manager-wars/"+e},tt={},Vt=function(t,i,a){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),d=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));c=Promise.allSettled(i.map(r=>{if(r=Ut(r),r in tt)return;tt[r]=!0;const l=r.endsWith(".css"),s=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":Kt,l||(p.as="script"),p.crossOrigin="",p.href=r,d&&p.setAttribute("nonce",d),document.head.appendChild(p),l)return new Promise((u,f)=>{p.addEventListener("load",u),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})}))}function o(n){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=n,window.dispatchEvent(d),!d.defaultPrevented)throw n}return c.then(n=>{for(const d of n||[])d.status==="rejected"&&o(d.reason);return t().catch(o)})};async function mt(){const{data:e}=await _.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await _.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(a=>a.booster_id===i.id)}))}function Yt(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,c)=>a+Number(c.percentage),0);let i=Math.random()*t;for(const a of e)if(i-=Number(a.percentage),i<=0)return a;return e[e.length-1]}const Wt=Object.freeze(Object.defineProperty({__proto__:null,loadActiveBoosters:mt,rollDropRate:Yt},Symbol.toStringTag,{value:"Module"})),ht=()=>Object.keys(xe),Xt=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Ce={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Jt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Zt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Qt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};function ei(e){var c;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((c=Object.entries(t).sort((o,n)=>n[1]-o[1])[0])==null?void 0:c[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function ti(e,{state:t,navigate:i,toast:a}){var n;const c=((n=t.profile)==null?void 0:n.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await mt()).map(ei)}catch(d){console.warn("Erreur chargement boosters DB, fallback hardcodé",d)}o.length||(o=Xt.map(d=>({...d,rates:[],isPub:d.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(d=>{const r=d.cost===0||c>=d.cost;return`<div class="booster-card ${r?"":"disabled"}" data-booster="${d.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${d.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${d.img}" alt="${d.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${d.name}</div>
            <div class="desc">${d.sub}</div>
            <div class="cost">${d.costLabel}</div>
            ${r?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(d=>{d.addEventListener("click",async()=>{const r=o.find(l=>l.id===d.dataset.booster);if(r){d.style.opacity="0.5",d.style.pointerEvents="none";try{await ii(r,{state:t,toast:a,navigate:i,container:e})}catch(l){a(l.message,"error"),d.style.opacity="",d.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(d=>{d.addEventListener("click",r=>{r.stopPropagation();const l=o.find(s=>s.id===d.dataset.boosterId);ci(l)})})}async function ii(e,{state:t,toast:i,navigate:a,container:c}){if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await fi()}catch(p){i(p.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:o}=await _.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),n=new Set((o||[]).filter(p=>p.card_type==="player").map(p=>p.player_id)),d=new Set((o||[]).filter(p=>p.card_type==="formation").map(p=>p.formation));let r=[];const l=e.type||"player";l==="player"?r=await ai(t.profile,e.cardCount,e.cost):l==="game_changer"?r=await si(t.profile,e.cardCount,e.cost):l==="formation"?r=await di(t.profile,e.cost):r=await ri(t.profile,e),r.forEach(p=>{p.card_type==="player"&&p.player?p.isDuplicate=n.has(p.player.id):p.card_type==="formation"&&(p.isDuplicate=d.has(p.formation))});const{data:s}=await _.from("users").select("*").eq("id",t.profile.id).single();s&&(t.profile=s),li(r,e,a)}function oi(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function oe(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function ni(e,t){let i;switch(t){case"legende":i=e.filter(a=>a.rarity==="legende"),i.length||(i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),i.length||(i=e.filter(a=>oe(a)>=6));break;case"special":i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),i.length||(i=e.filter(a=>oe(a)>=6));break;case"normal_high":i=e.filter(a=>a.rarity==="normal"&&oe(a)>=6),i.length||(i=e.filter(a=>oe(a)>=6));break;default:i=e.filter(a=>a.rarity==="normal"&&oe(a)>=1&&oe(a)<=5),i.length||(i=e.filter(a=>a.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function ri(e,t){if(t.cost>0){const{error:c}=await _.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(c)throw c}const{rollDropRate:i}=await Vt(async()=>{const{rollDropRate:c}=await Promise.resolve().then(()=>Wt);return{rollDropRate:c}},void 0),a=[];for(let c=0;c<(t.cardCount||5);c++){const o=i(t.rates);if(o){if(o.card_type==="player"){let n=_.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);o.rarity&&(n=n.eq("rarity",o.rarity));const{data:d}=await n;let r=d||[];if((o.note_min||o.note_max)&&(r=r.filter(p=>{const u=Math.max(Number(p.note_g)||0,Number(p.note_d)||0,Number(p.note_m)||0,Number(p.note_a)||0);return(!o.note_min||u>=o.note_min)&&(!o.note_max||u<=o.note_max)})),r.length||(o.note_min||o.note_max?(r=d||[],console.warn("[Booster] Aucun joueur avec note",o.note_min,"-",o.note_max,"— fallback rareté uniquement")):r=d||[]),!r.length)continue;const l=r[Math.floor(Math.random()*r.length)],{data:s}=await _.from("cards").insert({owner_id:e.id,player_id:l.id,card_type:"player"}).select().single();s&&a.push({...s,player:l})}else if(o.card_type==="game_changer"){const{data:n}=await _.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),d=n!=null&&n.length?n:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],l=d[Math.floor(Math.random()*d.length)].name,{data:s}=await _.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:l}).select().single();s&&a.push(s)}else if(o.card_type==="formation"){const n=ht(),d=n[Math.floor(Math.random()*n.length)],{data:r}=await _.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();r!=null&&r[0]&&a.push(r[0])}}}return a}async function ai(e,t,i){if(i>0){const{error:l}=await _.from("users").update({credits:e.credits-i}).eq("id",e.id);if(l)throw l}const{data:a}=await _.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=a.filter(l=>l.job==="GK"),o=a.filter(l=>l.job!=="GK"),n=!e.first_booster_opened&&c.length>0,d=[];for(let l=0;l<t;l++){const s=l===0&&n?c:l===0?o:a,p=oi(),u=ni(s,p);u&&d.push(u)}n&&await _.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:r}=await _.from("cards").insert(d.map(l=>({owner_id:e.id,player_id:l.id,card_type:"player"}))).select();return d.map((l,s)=>({...r[s],player:l}))}async function si(e,t,i){const{error:a}=await _.from("users").update({credits:e.credits-i}).eq("id",e.id);if(a)throw a;const{data:c}=await _.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=c!=null&&c.length?c:Object.keys(Ce).map(s=>({name:s,gc_type:"game_changer"})),n=Array.from({length:t},()=>{const s=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:s.name,gc_definition_id:s.id||null}}),{data:d,error:r}=await _.from("cards").insert(n).select();return r&&console.error("[Booster GC] Erreur insert:",r.message,r),(d||[]).map(s=>{const p=c==null?void 0:c.find(u=>u.name===s.gc_type||u.id===s.gc_definition_id);return{...s,_gcDef:p||null}})}async function di(e,t){const{error:i}=await _.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const a=ht(),c=a[Math.floor(Math.random()*a.length)],{data:o,error:n}=await _.from("cards").insert({owner_id:e.id,card_type:"formation",formation:c}).select();return n&&console.error("[Booster Formation] Erreur insert:",n.message,n),o||[]}function li(e,t,i){var u;if(!e||e.length===0){const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",f.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(f),(u=f.querySelector("#anim-close-err"))==null||u.addEventListener("click",()=>f.remove());return}const a=document.createElement("div");a.id="booster-anim-overlay",a.innerHTML=`
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
  `,document.body.appendChild(a);let c=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(c)return;c=!0;const f=document.getElementById("pack-visual");f.classList.add("shaking"),setTimeout(()=>{f.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",n(0)},600)},500)});let o=0;function n(f){o=f;const m=document.getElementById("reveal-phase");m.style.display="flex",d(f)}function d(f){var T;const m=e[f],y=document.getElementById("card-counter"),h=document.getElementById("single-card-slot"),$=document.getElementById("card-tap-hint");y&&(y.textContent=`Carte ${f+1} / ${e.length}`),$&&($.textContent=f<e.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const b=it(m),x=m.card_type==="player"&&((T=m.player)==null?void 0:T.rarity)==="legende";h.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${x?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${b}
        ${m.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,x&&s();const w=document.getElementById("current-card-wrap");let I=!1;w.addEventListener("click",()=>{if(I)return;I=!0;const g=f+1;g<e.length?(w.style.transition="all 0.25s ease",w.style.transform="translateX(-120%) rotate(-15deg)",w.style.opacity="0",setTimeout(()=>d(g),250)):r()})}function r(){p(),document.getElementById("reveal-phase").style.display="none";const f=document.getElementById("recap-phase");f.style.display="flex";const m=document.getElementById("recap-grid");m.innerHTML=e.map((y,h)=>`
      <div class="recap-card" style="--i:${h};animation-delay:${h*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${it(y)}
        ${y.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let l=null;function s(){const f=document.getElementById("fireworks-canvas");if(!f)return;f.width=window.innerWidth,f.height=window.innerHeight;const m=f.getContext("2d"),y=[];function h(){const b=Math.random()*f.width,x=Math.random()*f.height*.6,w=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],I=w[Math.floor(Math.random()*w.length)];for(let T=0;T<60;T++){const g=Math.PI*2/60*T,v=2+Math.random()*5;y.push({x:b,y:x,vx:Math.cos(g)*v,vy:Math.sin(g)*v,alpha:1,color:I,size:2+Math.random()*3})}}h(),l=setInterval(h,600);function $(){if(document.getElementById("fireworks-canvas")){m.clearRect(0,0,f.width,f.height);for(let b=y.length-1;b>=0;b--){const x=y[b];if(x.x+=x.vx,x.y+=x.vy+.08,x.vy*=.98,x.alpha-=.018,x.alpha<=0){y.splice(b,1);continue}m.globalAlpha=x.alpha,m.fillStyle=x.color,m.beginPath(),m.arc(x.x,x.y,x.size,0,Math.PI*2),m.fill()}m.globalAlpha=1,(l!==null||y.length>0)&&requestAnimationFrame($)}}$()}function p(){l!==null&&(clearInterval(l),l=null);const f=document.getElementById("fireworks-canvas");f&&f.getContext("2d").clearRect(0,0,f.width,f.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{p(),a.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{p(),a.remove(),i("boosters")})}function it(e){var t,i,a,c;if(e.card_type==="player"&&e.player){const o=e.player,n=o.job||"ATT",d=Zt[n]||"#1A6B3C",r=Qt[o.rarity]||"#ccc",l=n==="GK"?o.note_g:n==="DEF"?o.note_d:n==="MIL"?o.note_m:o.note_a,s=Jt(o),p={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[o.country_code]||o.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${r};overflow:hidden;display:flex;flex-direction:column">
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
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${l||0}</text>
        </svg>
      </div>
      <!-- Portrait -->
      <div style="flex:1;overflow:hidden;background:#b8d4f0">
        ${s?`<img src="${s}" style="width:100%;height:100%;object-fit:cover;object-position:center top" onerror="this.style.display='none'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;height:26px">
        <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:1px;color:#555;text-transform:uppercase">${p}</div>
        ${(t=o.clubs)!=null&&t.logo_url?`<img src="${o.clubs.logo_url}" style="width:20px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:700">${(((i=o.clubs)==null?void 0:i.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>`}if(e.card_type==="game_changer"){const o=e._gcDef,n=(o==null?void 0:o.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},r={purple:"#b06ce0",light_blue:"#00d4ef"},l=d[o==null?void 0:o.color]||d.purple,s=r[o==null?void 0:o.color]||r.purple,p=(o==null?void 0:o.name)||e.gc_type||"Game Changer",u=(o==null?void 0:o.effect)||((a=Ce[e.gc_type])==null?void 0:a.desc)||"",f=o!=null&&o.image_url?`/manager-wars/icons/${o.image_url}`:null,m=((c=Ce[e.gc_type])==null?void 0:c.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${s}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${p.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${n?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${f?`<img src="${f}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${m}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${u.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function ci(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(n=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${o[n.card_type]||n.card_type}</span>
            ${n.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${c[n.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${n.rarity}</span>`:""}
            ${n.note_min||n.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${n.note_min||""}–${n.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(n.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(a),a.addEventListener("click",n=>{n.target===a&&a.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>a.remove());return}pi()}function pi(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const ui="simulation",bt="VOTRE_ZONE_ID";function fi(){switch(ui){case"propellerads":return gi();case"adsense":return xi();default:return qe()}}function qe(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const a=setInterval(()=>{i--;const c=document.getElementById("ad-cd"),o=document.getElementById("ad-skip");c&&(c.textContent=i),o&&(o.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(a),o&&(o.disabled=!1,o.style.cssText=o.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),o==null||o.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function gi(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(qe());window.propeller.push({zone_id:bt,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function xi(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(qe());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:bt,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const de={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},le={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function vt(e,t,i,a,c){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",c)}function W(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function je(e){var i,a;const t=e.player;return{cardId:e.id,id:t.id,firstname:t.firstname,name:t.surname_encoded,country_code:t.country_code,club_id:t.club_id,job:t.job,job2:t.job2,note_g:Number(t.note_g)||0,note_d:Number(t.note_d)||0,note_m:Number(t.note_m)||0,note_a:Number(t.note_a)||0,rarity:t.rarity,skin:t.skin,hair:t.hair,hair_length:t.hair_length,clubName:((i=t.clubs)==null?void 0:i.encoded_name)||null,clubLogo:((a=t.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ne(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function yi(){const e=Math.random()*100;return e<.1?4:e<5?3:e<20?2:1}function wt(e,t){const i=de[t]||de["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]},c=[...e];for(const o of["GK","DEF","MIL","ATT"]){const n=[];for(let r=0;r<i[o];r++){let l=c.findIndex(s=>s.job===o);if(l===-1&&(l=c.findIndex(s=>s.job2===o)),l===-1&&(l=0),c[l]){const s={...c[l],_line:o};n.push(s),c.splice(l,1)}}const d=Ne(n.length);n.forEach((r,l)=>{r._col=d[l]}),a[o]=n}return a}async function mi(e,t){var n,d;const{data:i}=await _.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return hi(e);const a=de[e]||de["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},o=[...i];for(const r of["GK","DEF","MIL","ATT"]){const l=o.filter(m=>m.job===r),s=o.filter(m=>m.job!==r),p=[...l,...s],u=[];for(let m=0;m<a[r];m++){const y=p[m]||o[m];y&&u.push({cardId:"ai-"+y.id+"-"+m,id:y.id,firstname:y.firstname,name:y.surname_encoded,country_code:y.country_code,club_id:y.club_id,job:y.job,job2:y.job2,note_g:Number(y.note_g)||0,note_d:Number(y.note_d)||0,note_m:Number(y.note_m)||0,note_a:Number(y.note_a)||0,rarity:y.rarity,skin:y.skin,hair:y.hair,hair_length:y.hair_length,clubName:((n=y.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((d=y.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:r})}const f=Ne(u.length);u.forEach((m,y)=>{m._col=f[y]}),c[r]=u}return c}function hi(e){const t=de[e]||de["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const o of["GK","DEF","MIL","ATT"]){const n=[];for(let r=0;r<t[o];r++){const l=3+Math.floor(Math.random()*5);n.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:a[c%a.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?l:2,note_d:o==="DEF"?l:2,note_m:o==="MIL"?l:2,note_a:o==="ATT"?l:2,rarity:"normal",boost:0,used:!1,_line:o}),c++}const d=Ne(n.length);n.forEach((r,l)=>{r._col=d[l]}),i[o]=n}return i}async function bi(e,t){var T;const{state:i,navigate:a,toast:c}=t,o=i.params||{};e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const n=o.matchMode||"vs_ai_easy",d=n.replace("vs_ai_",""),r=n;if(!o.deckId)return wi(e,t,n);const l=o.deckId,[{data:s},{data:p}]=await Promise.all([_.from("decks").select("formation,name").eq("id",l).single(),_.from("deck_cards").select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`).eq("deck_id",l).order("slot_order")]),u=(p||[]).filter(g=>{var v;return g.is_starter&&((v=g.card)==null?void 0:v.player)}).map(g=>je(g.card)),f=(p||[]).filter(g=>{var v;return!g.is_starter&&((v=g.card)==null?void 0:v.player)}).map(g=>je(g.card));if(u.length<11){vt(e,"⚠️",`Deck incomplet (${u.length}/11).`,"Compléter",()=>a("decks"));return}const m=(p||[]).find(g=>{var v;return((v=g.card)==null?void 0:v.card_type)==="formation"}),y=(s==null?void 0:s.formation)||((T=m==null?void 0:m.card)==null?void 0:T.formation)||"4-4-2",{data:h}=await _.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",i.profile.id).eq("card_type","game_changer"),{data:$}=await _.from("gc_definitions").select("*").eq("is_active",!0),b=(h||[]).map(g=>({...g,_gcDef:($==null?void 0:$.find(v=>v.name===g.gc_type||v.id===g.gc_definition_id))||null})),x=wt(u,y),w=await mi(y),I=async g=>{const{data:v}=await _.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:l,status:"in_progress"}).select().single(),A={gcDefs:$||[],matchId:v==null?void 0:v.id,mode:r,difficulty:d,formation:y,homeTeam:x,aiTeam:w,homeSubs:f,subsUsed:0,maxSubs:Math.min(f.length,3),homeScore:0,aiScore:0,gcCards:g,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};$i(e,A,t)};if(!b.length){I([]);return}vi(e,b,I)}function vi(e,t,i){const c=new Set,o=t.filter(s=>{const p=s.gc_type||s.id;return c.has(p)?!1:(c.add(p),!0)});let n=[];function d(s,p){const u=s._gcDef,f={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},m={purple:"#9b59b6",light_blue:"#00bcd4"},y=f[u==null?void 0:u.color]||f.purple,h=m[u==null?void 0:u.color]||m.purple;return`<div class="gc-select-card" data-id="${s.id}"
      style="width:100px;border-radius:10px;border:3px solid ${p?"#FFD700":h};background:${y};
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
    </div>`}function r(){var m,y,h;const s=e.querySelector("#gc-confirm-overlay");if(s&&s.remove(),n.length<3)return;const p=document.createElement("div");p.id="gc-confirm-overlay",p.style.cssText="position:absolute;inset:0;background:rgba(10,22,40,0.88);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:32px 24px;z-index:20;backdrop-filter:blur(4px)",p.innerHTML=`
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
      </button>`;const u=$=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i($)};(m=p.querySelector("#gc-launch"))==null||m.addEventListener("click",()=>u(n)),(y=p.querySelector("#gc-no-gc"))==null||y.addEventListener("click",()=>u([])),(h=p.querySelector("#gc-reset"))==null||h.addEventListener("click",()=>{n=[],l()});const f=e.querySelector("#gc-screen-wrap");f?f.appendChild(p):e.appendChild(p)}function l(){e.style.overflow="hidden";const s=e.clientHeight||e.getBoundingClientRect().height;s>50&&(e.style.height=s+"px"),e.innerHTML=`
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
        ${o.map(p=>{const u=n.find(f=>f.gc_type===p.gc_type);return d(p,!!u)}).join("")}
      </div>
    </div>`,e.querySelectorAll(".gc-select-card").forEach(p=>{p.addEventListener("click",()=>{const u=p.dataset.id,f=o.find(y=>y.id===u);if(!f)return;const m=n.findIndex(y=>y.gc_type===f.gc_type);m>-1?n.splice(m,1):n.length<3&&n.push(f),l(),n.length===3&&r()})}),n.length===3&&r()}l()}async function wi(e,t,i){const{state:a,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("decks").select("id,name,is_active,formation").eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){vt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const n=o.map(s=>s.id),{data:d}=await _.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",n).order("slot_order");let r=0;function l(){var b,x,w,I,T;const s=o[r],p=(d||[]).filter(g=>g.deck_id===s.id),u=p.filter(g=>{var v;return g.is_starter&&((v=g.card)==null?void 0:v.player)}).map(g=>je(g.card)),f=p.find(g=>{var v;return((v=g.card)==null?void 0:v.card_type)==="formation"}),m=s.formation||((b=f==null?void 0:f.card)==null?void 0:b.formation)||"4-4-2",y=u.length>=11?wt(u,m):null,h=u.length>=11;e.innerHTML=`
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
          <div style="font-size:19px;font-weight:900">${s.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${m} · ${u.length}/11 ${s.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${r===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${r===o.length-1?"0.1":"0.3"});color:${r===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${r===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : contraindre la largeur du SVG pour contrôler hauteur+largeur -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${y?`<div style="width:min(98vw, calc(100dvh - 400px));overflow:hidden;flex-shrink:0">${kt(y,m,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${u.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${o.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${o.map((g,v)=>`<div style="width:7px;height:7px;border-radius:50%;background:${v===r?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,(x=document.getElementById("prev-deck"))==null||x.addEventListener("click",()=>{r>0&&(r--,l())}),(w=document.getElementById("next-deck"))==null||w.addEventListener("click",()=>{r<o.length-1&&(r++,l())}),(I=document.getElementById("validate-deck"))==null||I.addEventListener("click",()=>{h&&t.navigate("match",{matchMode:i,deckId:s.id})}),(T=document.getElementById("cancel-deck-select"))==null||T.addEventListener("click",()=>c("home"));const $=document.getElementById("deck-swipe-zone");if($){let g=0,v=0;$.addEventListener("touchstart",A=>{g=A.touches[0].clientX,v=A.touches[0].clientY},{passive:!0}),$.addEventListener("touchend",A=>{const z=A.changedTouches[0].clientX-g,j=A.changedTouches[0].clientY-v;Math.abs(z)<40||Math.abs(z)<Math.abs(j)||(z<0&&r<o.length-1?(r++,l()):z>0&&r>0&&(r--,l()))},{passive:!0})}}l()}function $i(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Oe(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>_i(e,t,i),5e3)}function _i(e,t,i){const a=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function o(p){return p.reduce((u,f)=>u+H(f,"MIL"),0)}function n(p){let u=0;for(let f=0;f<p.length-1;f++){const m=ae(p[f],p[f+1]);m==="#00ff88"?u+=2:m==="#FFD700"&&(u+=1)}return u}const d=o(a)+n(a),r=o(c)+n(c),l=d>=r;function s(p,u,f){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${u}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((m,y)=>{const h=W(m),$=y<p.length-1?ae(m,p[y+1]):null,b=$&&$!=="#ff3333"&&$!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${f};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${h?`<img src="${h}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${H(m,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${m.name}</div>
          </div>
          ${$?`<div style="width:14px;height:4px;border-radius:2px;background:${$};flex-shrink:0;opacity:${b?.9:.3}"></div>`:""}
          `}).join("")}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${o(p)} + ${n(p)} liens = <b style="color:#fff">${o(p)+n(p)}</b>
      </div>
    </div>`}e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${s(a,t.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${d}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${r}</div>
    </div>

    ${s(c,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const p=document.getElementById("score-home"),u=document.getElementById("score-ai"),f=document.getElementById("midfield-result");if(p&&u&&(l?(p.style.fontSize="80px",p.style.color="#FFD700",u.style.opacity="0.25"):(u.style.fontSize="80px",u.style.color="#ff6b6b",p.style.opacity="0.25")),f){const m=yi();f.style.opacity="1",l&&t.clubName,f.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${l?`${t.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${l?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${m}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,l&&(t.boostCard={value:m})}t.attacker=l?"home":"ai",t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(m=>({name:m.name,note:H(m,"MIL"),portrait:W(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),aiPlayers:c.map(m=>({name:m.name,note:H(m,"MIL"),portrait:W(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),homeTotal:d,aiTotal:r,text:`Duel milieu : ${t.clubName} ${d} – ${r} IA → ${l?t.clubName+" attaque":"IA attaque"}`}),setTimeout(()=>{var y,h;const m=(y=t.boostCard)==null?void 0:y.value;e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:40px;height:100%;min-height:100%;gap:16px;padding-left:24px;padding-right:24px;background:#0a3d1e;text-align:center">
        <div style="font-size:64px">${l?"🏆":"😤"}</div>
        <div style="font-size:22px;font-weight:900;color:#fff;line-height:1.3">
          ${l?`⚽ ${t.clubName}<br>gagne le milieu de terrain !`:"😔 L'IA gagne l'engagement !"}
        </div>
        ${m&&l?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:16px;padding:16px 32px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">Carte Boost obtenue</div>
          <div style="font-size:48px;font-weight:900;color:#87CEEB">+${m}</div>
          <div style="font-size:11px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
        <button id="start-match-btn" style="margin-top:8px;padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:17px;font-weight:900;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,0.3)">
          ▶ Commencer le match
        </button>
      </div>`,(h=document.getElementById("start-match-btn"))==null||h.addEventListener("click",()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",K(e,t,i),t.attacker==="ai"&&setTimeout(()=>Se(e,t,i),800)})},100)},5e3)}function $t(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function ne(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:W(e),c=$t(e),o=e._line||e.job||"MIL",n=le[o]||"#555",d={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",r=e.note!==void 0?Number(e.note)||0:(Number(H(e,o))||0)+(e.boost||0),l=_t(e==null?void 0:e.country_code),s=Math.round(i*.19),p=Math.round(i*.25),u=i-Math.round(i*.19)-Math.round(i*.25),f=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${d};background:${n};position:relative;overflow:hidden;flex-shrink:0;opacity:${f}">
    <div style="position:absolute;top:0;left:0;right:0;height:${s}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${s}px;left:0;width:${t}px;height:${u}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Be(e==null?void 0:e.country_code)?`<img src="${Be(e.country_code)}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">${l}</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":r}</span>
      ${c?`<img src="${c}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function ve(e,t,i){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((o,n)=>{if(c+=ne(o,40,52),n<a.length-1){const d=ae(o,a[n+1]);c+=`<div style="width:7px;height:3px;background:${d==="#ff3333"||d==="#cc2222"?"rgba(255,255,255,0.12)":d};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),c+="</div>",c}function Be(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function _t(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Oe(e,t,i,a,c=310,o=310){const n=xe[t]||{},d=st(t)||Ge[t]||[],r={},l=["ATT","MIL","DEF","GK"];for(const b of l)(e[b]||[]).forEach((w,I)=>{r[`${b}${I+1}`]=w});function s(b){const x=n[b];return x?{x:x.x*c,y:x.y*o}:null}let p="";for(const[b,x]of d){const w=s(b),I=s(x);if(!w||!I)continue;const T=r[b],g=r[x],v=ae(T,g);v==="#00ff88"||v==="#FFD700"?(p+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${I.x.toFixed(1)}" y2="${I.y.toFixed(1)}"
        stroke="${v}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,p+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${I.x.toFixed(1)}" y2="${I.y.toFixed(1)}"
        stroke="${v}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):p+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${I.x.toFixed(1)}" y2="${I.y.toFixed(1)}"
        stroke="${v}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const u=48,f=64,m=13,y=16,h={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[b,x]of Object.entries(r)){const w=s(b);if(!w||!x)continue;const I=b.replace(/[0-9]/g,""),T=le[I]||"#555",g=i==="attack"&&["MIL","ATT"].includes(I)&&!x.used||i==="defense"&&["GK","DEF","MIL"].includes(I)&&!x.used,v=a.includes(x.cardId);let A;i==="attack"?A=I==="MIL"?Number(x.note_m)||0:Number(x.note_a)||0:i==="defense"?A=I==="GK"?Number(x.note_g)||0:I==="MIL"?Number(x.note_m)||0:Number(x.note_d)||0:A=Number(I==="GK"?x.note_g:I==="DEF"?x.note_d:I==="MIL"?x.note_m:x.note_a)||0,A=A+(x.boost||0);const z=(w.x-u/2).toFixed(1),j=(w.y-f/2).toFixed(1),S=x.used?.25:1,D=h[x==null?void 0:x.rarity]||h.normal,q=v?"#ff3030":D,U=v?3:(x==null?void 0:x.rarity)==="légende"||(x==null?void 0:x.rarity)==="pépite"?2.5:2,Q=f-m-y;p+=`<defs><clipPath id="cp-${b}"><rect x="${z}" y="${(w.y-f/2+m).toFixed(1)}" width="${u}" height="${Q}"/></clipPath></defs>`,p+=`<rect x="${z}" y="${j}" width="${u}" height="${f}" rx="5" fill="${T}" opacity="${S}"/>`;const X=W(x);X&&!x.used&&(p+=`<image href="${X}" x="${z}" y="${(w.y-f/2+m).toFixed(1)}" width="${u}" height="${Q}" clip-path="url(#cp-${b})" preserveAspectRatio="xMidYMin slice"/>`),p+=`<rect x="${z}" y="${j}" width="${u}" height="${m}" rx="4" fill="rgba(255,255,255,0.92)"/>`,p+=`<text x="${w.x.toFixed(1)}" y="${(w.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(x.name||"").slice(0,9)}</text>`;const V=(w.y+f/2-y).toFixed(1);if(p+=`<rect x="${z}" y="${V}" width="${u}" height="${y}" fill="rgba(255,255,255,0.92)"/>`,x.used)p+=`<text x="${w.x.toFixed(1)}" y="${(w.y+f/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const ye=Be(x.country_code);ye?p+=`<image href="${ye}" x="${(w.x-20).toFixed(1)}" y="${(w.y+f/2-y+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:p+=`<text x="${(w.x-13).toFixed(1)}" y="${(w.y+f/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${_t(x.country_code)}</text>`,p+=`<text x="${w.x.toFixed(1)}" y="${(w.y+f/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${A}</text>`;const me=$t(x);me?p+=`<image href="${me}" x="${(w.x+u/2-14).toFixed(1)}" y="${(w.y+f/2-y+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:x.clubName&&(p+=`<text x="${(w.x+14).toFixed(1)}" y="${(w.y+f/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(x.clubName||"").slice(0,3).toUpperCase()}</text>`),x.boost&&(p+=`<rect x="${(w.x+u/2-12).toFixed(1)}" y="${(w.y-f/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,p+=`<text x="${(w.x+u/2-5).toFixed(1)}" y="${(w.y-f/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${x.boost}</text>`)}p+=`<rect x="${z}" y="${j}" width="${u}" height="${f}" rx="5" fill="${v?"rgba(255,255,255,0.12)":"none"}" stroke="${q}" stroke-width="${U}" opacity="${S}"/>`,g&&(p+=`<rect x="${z}" y="${j}" width="${u}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${v?"selected":""}" data-card-id="${x.cardId}" data-role="${I}" style="cursor:pointer"/>`)}const $=38;return`<svg viewBox="${-$} ${-$} ${c+$*2} ${o+$*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${p}
  </svg>`}function kt(e,t,i,a,c=300,o=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Oe(e,t,i,a,c,o)}
  </div>`}function we(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}function ki(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:wrap">
          ${(e.homePlayers||[]).map(i=>we(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:wrap">
          ${(e.aiPlayers||[]).map(i=>we(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${we(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${we(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function K(e,t,i){var y,h,$,b,x,w,I,T;const a=t.selected.map(g=>g.cardId),c=t.usedSubIds||[],o=t.homeSubs.filter(g=>!c.includes(g.cardId));Object.values(t.homeTeam).flat().filter(g=>g.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const d=t.phase==="ai-attack"||t.phase==="ai-defense",r=t.phase==="attack",l=t.phase==="defense",s=t.phase==="finished",p=t.gcCards.filter(g=>!t.usedGc.includes(g.id)),u=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${ve((v.players||[]).map(A=>({...A,used:!1})),"#ff6b6b",v.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const v=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${ve((v.players||[]).map(A=>({...A,used:!1})),"#00ff88",v.total)}
          </div>`}const g=t.log[t.log.length-1];return g?'<div style="padding:2px 4px">'+ki(g)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    <!-- ZONE CENTRALE : REMPLAÇANTS + TERRAIN -->
    <div style="display:flex;flex:1;min-height:0;overflow:hidden">

      <!-- Colonne remplaçants (mini cartes) -->
      <div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:50px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(g=>`
              <div class="sub-btn-col" data-sub-id="${g.cardId}" title="${g.firstname} ${g.name}" style="cursor:pointer;flex-shrink:0">
                ${ne(g,44,58)}
              </div>`).join("")}
      </div>

      <!-- Terrain -->
      <div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:4px" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${kt(t.homeTeam,t.formation,t.phase,a,300,300)}
        </div>
      </div>
    </div>

    <!-- ZONE BAS : GC + BOUTON ACTION — même hauteur -->
    <div style="display:flex;align-items:stretch;padding:6px 8px;background:rgba(0,0,0,0.35);gap:6px;flex-shrink:0">

      <!-- Strip GC : ligne horizontale, même hauteur que le bouton -->
      <div style="flex:1;display:flex;gap:4px;overflow-x:auto;scrollbar-width:none">
        ${p.map(g=>{var v;return`
          <div class="gc-mini" data-gc-id="${g.id}" data-gc-type="${g.gc_type}"
            style="flex-shrink:0;width:46px;background:linear-gradient(135deg,#3d0a7a,#7a28b8);border:1px solid #9b59b6;border-radius:8px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:4px 2px">
            <div style="font-size:18px;line-height:1">${((v=ue[g.gc_type])==null?void 0:v.icon)||"⚡"}</div>
            <div style="font-size:6px;color:#fff;font-weight:600;text-align:center;line-height:1.1;max-width:44px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${g.gc_type.slice(0,9)}</div>
          </div>`}).join("")}
        ${u?`
          <div id="boost-card" style="flex-shrink:0;width:46px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:8px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:4px 2px">
            <div style="font-size:18px;line-height:1">⚡</div>
            <div style="font-size:7px;color:#000;font-weight:900">+${t.boostCard.value}</div>
          </div>`:""}
      </div>

      <!-- Bouton action principal -->
      <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:2px">
        ${s?'<button id="btn-results" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">🏁 Résultats</button>':d?'<div style="min-width:130px;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:14px;display:flex;align-items:center;justify-content:center;gap:6px">⏳ Tour IA</div>':r?`<button id="btn-action" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?'disabled style="opacity:0.45;cursor:default"':""}>⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:l?`<button id="btn-action" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?'disabled style="opacity:0.45;cursor:default"':""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:'<div style="min-width:130px;padding:14px;border-radius:14px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>'}
        ${r||l?`<div style="font-size:9px;color:rgba(255,255,255,0.4)">${t.selected.length}/3 sélectionné(s)</div>`:""}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(g=>{var v,A,z;if(g.type==="duel"){const j=g.isGoal,S=g.homeScored?"#FFD700":j?"#ff6b6b":"rgba(255,255,255,0.3)",D=g.homeScored?"⚽ BUT !":j?"⚽ BUT IA !":(v=g.homePlayers)!=null&&v.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${j?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${S};margin-bottom:4px">
                <div style="font-size:9px;color:${S};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${D}</div>
                ${(A=g.homePlayers)!=null&&A.length?`<div style="margin-bottom:3px">${ve(g.homePlayers,"rgba(255,255,255,0.7)",g.homeTotal)}</div>`:""}
                ${(z=g.aiPlayers)!=null&&z.length?`<div style="opacity:0.7">${ve(g.aiPlayers,"#ff6b6b",g.aiTotal)}</div>`:""}
              </div>`}return g.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${g.outPlayer?ne({...g.outPlayer,used:!0,_line:g.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${g.inPlayer?ne({...g.inPlayer,_line:g.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:g.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${g.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${g.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function f(){const g=e.querySelector(".match-screen"),v=e.querySelector("#match-field"),A=e.querySelector(".terrain-wrapper");if(!g||!v||!A)return;const z=window.innerWidth>=700,j=document.getElementById("app"),S=z&&j?j.clientHeight:window.innerHeight,D=g.getBoundingClientRect().top,q=S-D;q>100&&(g.style.height=q+"px",g.style.maxHeight=q+"px"),g.style.overflow="hidden",g.offsetHeight;const U=v.clientHeight,Q=v.clientWidth;if(U<20||Q<20)return;let X=Math.min(U,Q)-6;z&&(X=Math.min(X,460)),X=Math.max(120,X),A.style.width=X+"px",A.style.height=X+"px",A.style.aspectRatio="";const V=A.querySelector("svg");V&&(V.removeAttribute("width"),V.removeAttribute("height"),V.style.width="100%",V.style.height="100%",V.style.maxWidth="none",V.style.margin="0",V.style.display="block",V.getAttribute("viewBox")||V.setAttribute("viewBox","0 0 300 300"),V.setAttribute("preserveAspectRatio","xMidYMid meet"))}if(requestAnimationFrame(f),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>requestAnimationFrame(f))),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let g=!1,v=30;const A=()=>document.getElementById("match-timer"),z=()=>{const j=A();if(!j)return;const S=String(Math.floor(v/60)).padStart(2,"0"),D=String(v%60).padStart(2,"0");j.textContent=` ${S}:${D}`,j.style.color=g?"#ff2222":"#ff9500",j.style.fontWeight="900"};z(),t._timerInt=setInterval(()=>{if(v--,v<0)if(!g)g=!0,v=15,z();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const j=document.createElement("div");j.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",j.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(j),setTimeout(()=>{j.remove(),re(e,t,i)},2500)}else z()},1e3)}(y=document.getElementById("match-quit"))==null||y.addEventListener("click",()=>{confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,re(e,t,i))}),(h=document.getElementById("view-ai"))==null||h.addEventListener("click",()=>ji(t,i)),($=document.getElementById("toggle-history"))==null||$.addEventListener("click",()=>{var g;(g=document.getElementById("match-history-panel"))==null||g.classList.add("open")}),(b=document.getElementById("close-history"))==null||b.addEventListener("click",()=>{var g;(g=document.getElementById("match-history-panel"))==null||g.classList.remove("open")}),(x=document.getElementById("btn-action"))==null||x.addEventListener("click",()=>{t.selected.length!==0&&(r?Ai(e,t,i):l&&Ii(e,t,i))}),(w=document.getElementById("btn-results"))==null||w.addEventListener("click",()=>re(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(g=>{g.addEventListener("click",()=>Ei(g,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(g=>{g.addEventListener("click",()=>Mi(g.dataset.gcId,g.dataset.gcType,e,t,i))}),(I=document.getElementById("boost-card"))==null||I.addEventListener("click",()=>Ci(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(g=>{g.addEventListener("click",()=>ot(e,t,i,g.dataset.subId))}),(T=document.getElementById("sub-btn-main"))==null||T.addEventListener("click",()=>ot(e,t,i))}function Ei(e,t,i,a){const c=e.dataset.cardId,o=e.dataset.role,n=t.selected.findIndex(d=>d.cardId===c);if(n!==-1)t.selected.splice(n,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const d=(t.homeTeam[o]||[]).find(r=>r.cardId===c);d&&t.selected.push({...d,_role:o,_line:o})}K(i,t,a)}function Pe(e,t,i){e.matchId&&_.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Ai(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Pe(t,i,i.state.profile.id);const a=t.selected.map(o=>({...o,_line:o._role})),c=lt(a,t.modifiers.home);t.pendingAttack={...c,players:[...t.selected],side:"home"},t.selected.forEach(o=>{const n=(t.homeTeam[o._role]||[]).find(d=>d.cardId===o.cardId);n&&(n.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${c.total} (base ${c.base}${c.links?` +${c.links} liens`:""}) — ${t.selected.map(o=>o.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",K(e,t,i),setTimeout(()=>Ti(e,t,i),1200)}function Ii(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Pe(t,i,i.state.profile.id);const a=t.selected.map(d=>({...d,_line:d._role})),c=ct(a,t.modifiers.home);t.selected.forEach(d=>{const r=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId);r&&(r.used=!0)});const o=pt(t.pendingAttack.total,c.total,t.modifiers.home),n={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>({name:d.name,note:d._line==="MIL"?d.note_m:d.note_a,portrait:W(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),homePlayers:t.selected.map(d=>{const r=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId)||d;return{name:r.name,note:r._line==="GK"?r.note_g:r._line==="MIL"?r.note_m:r.note_d,portrait:W(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(o.shielded)n.text="🛡️ Bouclier ! But annulé.",t.log.push(n);else if(o.goal){t.aiScore++,n.isGoal=!0,n.homeScored=!1,n.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(n),t.selected=[],t.modifiers.home={},t.pendingAttack=null,K(e,t,i),He(n.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ge(e,t,i,"home-attack")});return}else n.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(n);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ge(e,t,i,"home-attack")}function Se(e,t,i){Pe(t,i,null);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=ut(a,"attack",t.difficulty);if(!c.length){At(e,t,i);return}const o=lt(c,t.modifiers.ai);t.pendingAttack={...o,players:c,side:"ai"},c.forEach(l=>{l.used=!0}),t.log.push({text:`🤖 IA attaque : ${o.total} (${c.map(l=>l.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const n=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used),r=(t.homeSubs||[]).filter(l=>!(t.usedSubIds||[]).includes(l.cardId)).length>0&&t.subsUsed<t.maxSubs;if(n.length===0&&!r){t.aiScore++;const l={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(s=>({name:s.name,note:s._line==="MIL"?s.note_m:s.note_a,portrait:W(s),job:s.job,country_code:s.country_code,rarity:s.rarity,clubName:s.clubName,clubLogo:s.clubLogo})),aiTotal:o.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(l),t.pendingAttack=null,K(e,t,i),He(l.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ge(e,t,i,"home-attack")});return}t.phase="defense",K(e,t,i)}function Ti(e,t,i){const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=ut(a,"defense",t.difficulty),o=c.length>0?ct(c,t.modifiers.ai).total:0;c.forEach(r=>{r.used=!0});const n=pt(t.pendingAttack.total,o,t.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:W(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiPlayers:c.map(r=>({name:r.name,note:r._line==="GK"?r.note_g:r._line==="MIL"?r.note_m:r.note_d,portrait:W(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:o,isGoal:!1,homeScored:!1,text:""};if(n.shielded)d.text="🛡️ Bouclier IA !",t.log.push(d);else if(n.goal){t.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${t.pendingAttack.total} > ${o})`,t.log.push(d),t.modifiers.ai={},t.pendingAttack=null,K(e,t,i),He(d.homePlayers,t.homeScore,t.aiScore,!0,()=>{ge(e,t,i,"ai-attack")});return}else d.text=`🧤 IA défend (${o} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.modifiers.ai={},t.pendingAttack=null,ge(e,t,i,"ai-attack")}function ge(e,t,i,a){if(t.round++,Et(t)){re(e,t,i);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(o=>!o.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(n=>!n.used).length){re(e,t,i);return}t.phase="ai-attack",K(e,t,i),setTimeout(()=>Se(e,t,i),800);return}t.phase="attack",K(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(o=>!o.used).length){At(e,t,i);return}t.phase="ai-attack",K(e,t,i),setTimeout(()=>Se(e,t,i),800)}}function Et(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(c=>!c.used)),i=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(c=>!c.used));return!t&&!i}function At(e,t,i){Et(t)?re(e,t,i):(t.phase="attack",K(e,t,i))}function Li(e,t,i){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=W(e),o=W(t),n=le[e.job]||"#555",d=le[t.job]||"#555",r=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,l=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${r}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${d};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${o?`<img src="${o}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${l}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(a);let s=!1;const p=()=>{s||(s=!0,a.remove(),i())};a.addEventListener("click",p),setTimeout(p,2e3)}function pe(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function ot(e,t,i,a=null){if(t.phase!=="attack"){pe("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){pe(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const c=Object.values(t.homeTeam).flat().filter(p=>p.used),o=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!c.length){pe("Aucun joueur utilisé à remplacer");return}if(!o.length){pe("Aucun remplaçant disponible");return}let n=0,d=Math.max(0,o.findIndex(p=>p.cardId===a)),r=!1;const l=document.createElement("div");l.id="sub-overlay",l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function s(){var $,b,x,w,I,T;const p=c[n],u=o[d],f=Math.min(130,Math.round((window.innerWidth-90)/2)),m=Math.round(f*1.35),y=g=>`background:rgba(255,255,255,0.12);border:none;color:${g?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${g?"default":"pointer"};flex-shrink:0`;l.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${y(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${u?ne({...u,used:!1,boost:0},f,m):"<div>—</div>"}</div>
        <button id="in-down" style="${y(d>=o.length-1)}" ${d>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${o.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${y(n===0)}" ${n===0?"disabled":""}>▲</button>
        <div>${p?ne({...p,used:!1,boost:0},f,m):"<div>—</div>"}</div>
        <button id="out-down" style="${y(n>=c.length-1)}" ${n>=c.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${n+1}/${c.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,($=l.querySelector("#sub-close"))==null||$.addEventListener("click",()=>l.remove()),(b=l.querySelector("#out-up"))==null||b.addEventListener("click",()=>{n>0&&(n--,s())}),(x=l.querySelector("#out-down"))==null||x.addEventListener("click",()=>{n<c.length-1&&(n++,s())}),(w=l.querySelector("#in-up"))==null||w.addEventListener("click",()=>{d>0&&(d--,s())}),(I=l.querySelector("#in-down"))==null||I.addEventListener("click",()=>{d<o.length-1&&(d++,s())});const h=(g,v,A,z)=>{const j=l.querySelector("#"+g);if(!j)return;let S=0;j.addEventListener("touchstart",D=>{S=D.touches[0].clientY},{passive:!0}),j.addEventListener("touchend",D=>{const q=D.changedTouches[0].clientY-S;if(Math.abs(q)<30)return;const U=v();q<0&&U<z-1?(A(U+1),s()):q>0&&U>0&&(A(U-1),s())},{passive:!0})};h("in-panel",()=>d,g=>d=g,o.length),h("out-panel",()=>n,g=>n=g,c.length),(T=l.querySelector("#sub-confirm"))==null||T.addEventListener("click",g=>{if(g.preventDefault(),g.stopPropagation(),r)return;r=!0;const v=c[n],A=o[d];if(!v||!A)return;let z=null,j=-1;for(const[D,q]of Object.entries(t.homeTeam)){const U=(q||[]).findIndex(Q=>Q.cardId===v.cardId);if(U!==-1){z=D,j=U;break}}if(j===-1||!z){pe("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),l.remove();return}const S={...A,_line:z,_col:v._col||0,used:!1,boost:0};t.homeTeam[z].splice(j,1,S),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(A.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:v.name,firstname:v.firstname,note:H(v,z),portrait:W(v),job:v.job,country_code:v.country_code,rarity:v.rarity,clubName:v.clubName,clubLogo:v.clubLogo},inPlayer:{name:A.name,firstname:A.firstname,note:H(A,z),portrait:W(A),job:A.job,country_code:A.country_code,rarity:A.rarity,clubName:A.clubName,clubLogo:A.clubLogo},text:`🔄 ${A.firstname} ${A.name} remplace ${v.firstname} ${v.name}`}),l.remove(),Li(v,A,()=>K(e,t,i))})}document.body.appendChild(l),s()}function Mi(e,t,i,a,c){var d,r;const o=ue[t]||{icon:"⚡",desc:"Carte spéciale."},n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;align-items:center;justify-content:center;padding:24px",n.innerHTML=`
    <div style="background:linear-gradient(160deg,#2a0a52,#7a28b8);border:2px solid #9b59b6;border-radius:18px;padding:24px;max-width:320px;text-align:center;color:#fff">
      <div style="font-size:52px;margin-bottom:10px">${o.icon}</div>
      <div style="font-size:19px;font-weight:900;margin-bottom:8px">${t}</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.85);line-height:1.5;margin-bottom:20px">${o.desc}</div>
      <div style="display:flex;gap:10px">
        <button id="gc-back" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="gc-use" style="flex:1;padding:12px;border-radius:10px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser</button>
      </div>
    </div>`,document.body.appendChild(n),(d=n.querySelector("#gc-back"))==null||d.addEventListener("click",()=>n.remove()),(r=n.querySelector("#gc-use"))==null||r.addEventListener("click",()=>{n.remove(),zi(e,t,i,a,c)})}function Me(e,t,i,a,c,o){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let d=[];function r(){var l,s;n.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${d.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(p=>{const u=p._line||p.job||"MIL",f={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[u]||"#555",m=H(p,u)+(p.boost||0),y=d.find(h=>h.cardId===p.cardId);return`<div class="gc-pick-item" data-cid="${p.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${y?"#FFD700":"rgba(255,255,255,0.25)"};background:${f};overflow:hidden;cursor:pointer;flex-shrink:0;${p.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${p.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${m}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${u}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${d.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${d.length}/${t})
      </button>
    </div>`,(l=n.querySelector("#gc-picker-close"))==null||l.addEventListener("click",()=>n.remove()),n.querySelectorAll(".gc-pick-item").forEach(p=>{p.addEventListener("click",()=>{const u=p.dataset.cid,f=e.find(y=>y.cardId===u);if(!f)return;const m=d.findIndex(y=>y.cardId===u);m>-1?d.splice(m,1):d.length<t&&d.push(f),r()})}),(s=n.querySelector("#gc-picker-confirm"))==null||s.addEventListener("click",()=>{n.remove(),o(d)})}r(),document.body.appendChild(n)}const It={BOOST_STAT({value:e=2,target:t="home",count:i=1,roles:a=null},c,o,n){const d=t==="home"?c.homeTeam:c.aiTeam,r=Object.entries(d).flatMap(([l,s])=>!a||a.includes(l)?(s||[]).filter(p=>!p.used).map(p=>({...p,_line:l})):[]);return r.length?(Me(r,i,e>0?`⚡ +${e} à ${i} joueur(s)`:`💀 -${Math.abs(e)} à ${i} joueur(s)`,o,c,l=>{l.forEach(s=>{for(const p of["GK","DEF","MIL","ATT"]){const u=(c.homeTeam[p]||[]).find(f=>f.cardId===s.cardId)||(c.aiTeam[p]||[]).find(f=>f.cardId===s.cardId);if(u){u.boost=(u.boost||0)+e;break}}}),c.log.push({text:`${e>0?"⚡":"💀"} ${Math.abs(e)>0?"+":""}${e} → ${l.map(s=>s.name).join(", ")}`,type:"info"}),K(o,c,n)}),!0):(n.toast("Aucun joueur disponible","error"),!0)},DEBUFF_STAT(e,t,i,a){return It.BOOST_STAT({...e,value:-Math.abs(e.value||2)},t,i,a)},GRAY_PLAYER({target:e="opponent",count:t=1,roles:i=null},a,c,o){const n=e==="opponent"?a.aiTeam:a.homeTeam,d=Object.entries(n).flatMap(([r,l])=>!i||i.includes(r)?(l||[]).filter(s=>!s.used).map(s=>({...s,_line:r})):[]);return d.length?(Me(d,t,`❄️ Griser ${t} joueur(s)`,c,a,r=>{r.forEach(l=>{for(const s of Object.keys(a.aiTeam).concat(Object.keys(a.homeTeam))){const u=((e==="opponent"?a.aiTeam[s]:a.homeTeam[s])||[]).find(f=>f.cardId===l.cardId);if(u){u.used=!0;break}}}),a.log.push({text:`❄️ ${r.map(l=>l.name).join(", ")} grisé(s) !`,type:"info"}),K(c,a,o)}),!0):(o.toast("Aucun joueur à griser","error"),!0)},REVIVE_PLAYER({count:e=1},t,i,a){const c=Object.entries(t.homeTeam).flatMap(([o,n])=>(n||[]).filter(d=>d.used).map(d=>({...d,_line:o})));return c.length?(Me(c,e,"💫 Ressusciter",i,t,o=>{o.forEach(n=>{for(const d of["GK","DEF","MIL","ATT"]){const r=(t.homeTeam[d]||[]).find(l=>l.cardId===n.cardId);if(r){r.used=!1;break}}}),t.log.push({text:`💫 ${o.map(n=>n.name).join(", ")} ressuscité(s) !`,type:"info"}),K(i,t,a)}),!0):(a.toast("Aucun joueur à ressusciter","error"),!0)},REMOVE_GOAL(e,t,i,a){return t.aiScore<=0?(a.toast("Aucun but adverse","error"),!1):(t.aiScore--,t.log.push({text:"🚫 But adverse retiré !",type:"info"}),!1)},ADD_GOAL_DRAW(e,t,i,a){return t.modifiers=t.modifiers||{},t.modifiers.home=t.modifiers.home||{},t.modifiers.home.addGoalOnDraw=!0,t.log.push({text:"⚽ +1 but si duel nul activé !",type:"info"}),!1},ADD_SUB({count:e=1},t,i,a){return t.maxSubs+=e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1}};function zi(e,t,i,a,c){if(a.usedGc.includes(e))return;a.usedGc.push(e);const o=(a.gcDefs||[]).find(d=>d.name===t);let n=!1;if(o!=null&&o.effect_type&&o.effect_type!=="CUSTOM"){const d=It[o.effect_type];d?d(o.effect_params||{},a,i,c)||(n=!0):(c.toast(`Effet "${o.effect_type}" non implémenté`,"error"),n=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const d=Object.entries(a.homeTeam).flatMap(([r,l])=>(l||[]).filter(s=>s.used).map(s=>({...s,_line:r})));d.length?(d[0].used=!1,a.log.push({text:`💫 ${d[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const d=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(r=>!r.used);if(d.length){const r=d.sort((l,s)=>H(s,"ATT")-H(l,"ATT"))[0];r.used=!0,a.log.push({text:`❄️ ${r.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}n=!0}_.from("cards").delete().eq("id",e).then(()=>{}),n&&K(i,a,c)}function Ci(e,t,i){const a=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!a.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${le[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${H(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const o=c.dataset.cardId;for(const n of["GK","DEF","MIL","ATT"]){const d=(t.homeTeam[n]||[]).find(r=>r.cardId===o);if(d){d.boost=(d.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),K(e,t,i)})})}function He(e,t,i,a,c){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const n=Array.from({length:10},(l,s)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${s%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][s%8]}
    </div>`).join("");o.innerHTML=`
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${n}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${a?"BUT !":"BUT IA !"}
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
    ${e.map(l=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${le[l.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${l.portrait?`<img src="${l.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(l.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(o);let d=!1;const r=()=>{d||(d=!0,o.remove(),setTimeout(()=>c(),50))};o.addEventListener("click",r),setTimeout(r,3500)}async function re(e,t,i){var s,p;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=i,c=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,n=c?"victoire":o?"nul":"defaite",d=Bt(t.mode,n);t.matchId&&await _.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?a.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",t.matchId);const r={credits:(a.profile.credits||0)+d,matches_played:(a.profile.matches_played||0)+1};c?r.wins=(a.profile.wins||0)+1:o?r.draws=(a.profile.draws||0)+1:r.losses=(a.profile.losses||0)+1,await _.from("users").update(r).eq("id",a.profile.id),await i.refreshProfile();const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",l.innerHTML=`
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
    </div>`,document.body.appendChild(l),(s=document.getElementById("res-home"))==null||s.addEventListener("click",()=>{l.remove(),i.navigate("home")}),(p=document.getElementById("res-replay"))==null||p.addEventListener("click",()=>{l.remove(),i.navigate("match",{matchMode:t.mode})})}function ji(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Oe(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Bi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Si(e,t){const{state:i,toast:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await Ke(e,t)}async function Ke(e,t){const{state:i,toast:a}=t,{data:c}=await _.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),o=(c||[]).filter(r=>r.seller_id===i.profile.id),n=(c||[]).filter(r=>r.seller_id!==i.profile.id);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${n.length} carte(s) en vente · Solde : ${(i.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${o.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function d(r){const l=document.getElementById("mkt-content"),s=r==="buy"?n:o;if(s.length===0){l.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${r==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune carte en vente."}
      </div>`;return}l.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${s.map(p=>{var h,$,b;const u=(h=p.card)==null?void 0:h.player;if(!u)return"";const f=u.job==="GK"?u.note_g:u.job==="DEF"?u.note_d:u.job==="MIL"?u.note_m:u.note_a,m=Bi[u.rarity],y=(i.profile.credits||0)>=p.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px">
          <div style="width:44px;height:44px;border-radius:8px;background:${Gi(u.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${m};flex-shrink:0">${f}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${u.firstname} ${u.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${u.country_code} · ${(($=u.clubs)==null?void 0:$.encoded_name)||"—"} · ${u.rarity} · ${u.job}</div>
            <div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((b=p.seller)==null?void 0:b.pseudo)||"—"}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${p.price.toLocaleString("fr")}</div>
            ${r==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${p.id}" ${y?"":"disabled"} style="margin-top:4px">${y?"Acheter":"Trop cher"}</button>`:`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,l.querySelectorAll("[data-buy]").forEach(p=>{p.addEventListener("click",()=>Fi(p.dataset.buy,s,e,t))}),l.querySelectorAll("[data-cancel]").forEach(p=>{p.addEventListener("click",()=>Di(p.dataset.cancel,e,t))})}d("buy"),e.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(l=>{const s=l===r;l.style.background=s?"var(--green)":"#fff",l.style.color=s?"#fff":"var(--gray-600)",l.style.borderColor=s?"var(--green)":"var(--gray-200)"}),d(r.dataset.tab)})})}async function Fi(e,t,i,a){var p;const{state:c,toast:o}=a,n=t.find(u=>u.id===e);if(!n)return;const d=n.price,r=c.profile.credits||0,l=(p=n.card)==null?void 0:p.player;if(r<d){o("Crédits insuffisants","error");return}if(!confirm(`Acheter ${l==null?void 0:l.firstname} ${l==null?void 0:l.surname_encoded} pour ${d.toLocaleString("fr")} crédits ?`))return;const s=document.querySelector(`[data-buy="${e}"]`);s&&(s.disabled=!0,s.textContent="⏳");try{const{error:u}=await _.from("cards").update({owner_id:c.profile.id}).eq("id",n.card.id);if(u)throw new Error("Transfert carte : "+u.message);const{error:f}=await _.from("market_listings").update({status:"sold",buyer_id:c.profile.id,sold_at:new Date().toISOString()}).eq("id",e);if(f)throw new Error("Mise à jour annonce : "+f.message);const{error:m}=await _.from("users").update({credits:r-d}).eq("id",c.profile.id);if(m)throw new Error("Débit acheteur : "+m.message);const{data:y,error:h}=await _.from("users").select("credits").eq("id",n.seller_id).single();!h&&y&&await _.from("users").update({credits:(y.credits||0)+d}).eq("id",n.seller_id),await _.from("notifications").insert({user_id:n.seller_id,type:"card_sold",message:`Ta carte ${(l==null?void 0:l.surname_encoded)||"?"} a été vendue pour ${d.toLocaleString("fr")} crédits !`,data:{card_id:n.card.id,price:d}}).then(()=>{}).catch(()=>{}),c.profile.credits=r-d;const $=document.querySelector("[data-credits]")||document.querySelector(".credits-display");$&&($.textContent=(r-d).toLocaleString("fr")+" cr."),o(`✅ ${l==null?void 0:l.surname_encoded} ajouté à ta collection !`,"success"),Ke(i,a)}catch(u){o("❌ "+u.message,"error"),s&&(s.disabled=!1,s.textContent="Acheter")}}async function Di(e,t,i){const{toast:a}=i,{data:c}=await _.from("market_listings").select("card_id").eq("id",e).single();await _.from("market_listings").update({status:"cancelled"}).eq("id",e),c&&await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id),a("Annonce retirée","success"),Ke(t,i)}function Gi(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function Ri(e,{state:t,navigate:i,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await _.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${c&&c.length>0?c.map((o,n)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${o.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${n+1}</div>
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
  `}async function qi(e,{state:t,navigate:i,toast:a}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("matches").select("id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at").or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),n={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(o||[]).filter(s=>s.status==="finished"),r=(o||[]).filter(s=>s.status==="in_progress");function l(s){const p=s.home_id===c.id;p?s.home_score:s.away_score,p?s.away_score:s.home_score;const u=s.winner_id===c.id,f=s.home_score===s.away_score&&s.status==="finished",m=s.status!=="finished"?"…":f?"N":u?"V":"D",y=s.status!=="finished"||f?"#888":u?"#1A6B3C":"#c0392b";let h=n[s.mode]||s.mode;s.away_id===null&&!h.startsWith("IA")&&(h="IA");let $="";s.status==="in_progress"&&Date.now()-new Date(s.created_at).getTime()>3600*1e3&&($=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const b=new Date(s.created_at),x=b.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+b.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),w=s.status==="finished"?`${s.home_score} - ${s.away_score}`:`${s.home_score||0} - ${s.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${$}</div>
        <div style="font-size:11px;color:var(--gray-600)">${x}${s.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${w}</span>
        <span style="background:${y};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${m}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(o||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${r.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${r.map(l).join("")}
        </div>`:""}

      ${d.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${d.map(l).join("")}
        </div>`:""}

      ${(o||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const G={user:null,profile:null,page:"home",params:{}};function $e(e,t="info",i=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},i))}function Ni(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Fe(){document.getElementById("modal-overlay").classList.add("hidden")}async function _e(){if(!G.user)return;const{data:e}=await _.from("users").select("*").eq("id",G.user.id).single();e&&(G.profile=e)}const Ue="mw_theme";function Ie(){return localStorage.getItem(Ue)||"light"}function Oi(e){var t;localStorage.setItem(Ue,e),De(e),(t=G.profile)!=null&&t.id&&_.from("users").update({theme:e}).eq("id",G.profile.id).then(()=>{})}function De(e){document.documentElement.setAttribute("data-theme",e)}function ke(e,t={}){G.page=e,G.params=t,Tt()}async function Tt(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(a=>{a.classList.toggle("active",a.dataset.page===G.page)});const t=document.getElementById("nav-credits");t&&G.profile&&(t.textContent=`💰 ${(G.profile.credits||0).toLocaleString("fr")}`);const i={state:G,navigate:ke,toast:$e,openModal:Ni,closeModal:Fe,refreshProfile:_e};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',G.page){case"home":await Xe(e,i);break;case"collection":await Dt(e,i);break;case"decks":await ze(e,i);break;case"boosters":await ti(e,i);break;case"match":await bi(e,i);break;case"market":await Si(e,i);break;case"rankings":await Ri(e,i);break;case"matches":await qi(e,i);break;default:await Xe(e,i)}}function Pi(){const e=document.getElementById("app"),t=G.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(a=>{a.addEventListener("click",c=>{c.preventDefault(),ke(a.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>ke("home")),document.getElementById("nav-credits").addEventListener("click",()=>ke("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const c=Ie()==="dark"?"light":"dark";Oi(c),nt(c)}),nt(Ie())}function nt(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Hi(){De(Ie()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&Fe()}),document.getElementById("modal-close").addEventListener("click",Fe);const{data:{session:e}}=await _.auth.getSession();if(!e){at(),Ye(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:$e});return}G.user=e.user,await _e(),at();try{const{data:t}=await _.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(a=>{i[a.formation]=a.links}),Mt(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!G.profile){zt(document.getElementById("app"),{state:G,navigate:async()=>{await _e(),rt()},toast:$e,refreshProfile:_e});return}G.profile.theme&&G.profile.theme!==Ie()&&(localStorage.setItem(Ue,G.profile.theme),De(G.profile.theme)),rt(),_.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(G.user=null,G.profile=null,document.getElementById("app").innerHTML="",Ye(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:$e}))})}function rt(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Pi(),Tt()}function at(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}Hi();
