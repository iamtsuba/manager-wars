import{s as _,F as Ze,b as Ie,c as Ft,l as fe,d as si}from"./formation-links-CDBKB_z4.js";function wt(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(d=>{d.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),d.classList.add("active"),document.getElementById("tab-login").style.display=d.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=d.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const d=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,n=document.getElementById("login-error");if(n.textContent="",!d||!c){n.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:s}=await _.auth.signInWithPassword({email:d,password:c});if(a.textContent="Se connecter",a.disabled=!1,s){n.textContent=s.message.includes("Invalid")?"Email ou mot de passe incorrect.":s.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",d=>{d.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const d=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,n=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!d||!c||!n){a.textContent="Remplissez tous les champs.";return}if(c.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==n){a.textContent="Les mots de passe ne correspondent pas.";return}const s=document.getElementById("reg-btn");s.textContent="Création…",s.disabled=!0;const{error:l}=await _.auth.signUp({email:d,password:c});if(s.textContent="Créer mon compte",s.disabled=!1,l){a.textContent=l.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=d})}function di(e,{state:t,navigate:i,toast:d,refreshProfile:c}){let n="#1A6B3C",a="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${a};border-color:${n}">
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
  `;function s(){var x;const o=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),p=((x=document.getElementById("setup-club"))==null?void 0:x.value)||"MW",g=p.trim().split(" ").filter(Boolean),f=g.length>=2?(g[0][0]+g[1][0]).toUpperCase():p.slice(0,2).toUpperCase();o&&(o.style.background=a,o.style.borderColor=n),r&&(r.textContent=f,r.style.color=n)}document.getElementById("color1").addEventListener("input",o=>{n=o.target.value,document.getElementById("swatch1").style.background=n,s()}),document.getElementById("color2").addEventListener("input",o=>{a=o.target.value,document.getElementById("swatch2").style.background=a,s()});function l(o){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",o.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:p}=await _.from("users").select("id").eq("pseudo",o).maybeSingle();if(p){r.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",o.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:p}=await _.from("users").select("id").eq("club_name",o).maybeSingle();if(p){r.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),p=document.getElementById("step3-error"),g=document.getElementById("step3-finish");p.textContent="",g.disabled=!0,g.textContent="Création en cours…";try{const{error:f}=await _.from("users").insert({id:t.user.id,pseudo:o,club_name:r,club_color1:n,club_color2:a,credits:1e4});if(f)throw f;await li(t.user.id),await c(),d(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(f){p.textContent=f.message,g.disabled=!1,g.textContent="🚀 Créer mon profil !"}})}async function li(e){const{data:t}=await _.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,d=i.filter(l=>l.job==="GK"),c=i.filter(l=>l.job!=="GK"),n=[];for(let l=0;l<5;l++){let o=[];if(l===0&&d.length>0){const r=d[Math.floor(Math.random()*d.length)];o.push(r);const p=_t([...c]).slice(0,3);o.push(...p)}else o=_t([...i]).slice(0,4);o.forEach(r=>{n.push({owner_id:e,player_id:r.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(l=>{n.push({owner_id:e,card_type:"game_changer",gc_type:l})});const s=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];n.push({owner_id:e,card_type:"formation",formation:s[Math.floor(Math.random()*s.length)]}),n.length>0&&await _.from("cards").insert(n),await _.from("users").update({first_booster_opened:!0}).eq("id",e)}function _t(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}async function $t(e,{state:t,navigate:i,toast:d}){var a;const c=t.profile;if(!c)return;const{data:n}=await _.from("matches").select("id,home_score,away_score,status,mode,winner_id,created_at").or(`home_id.eq.${c.id},away_id.eq.${c.id}`).eq("status","finished").order("created_at",{ascending:!1}).limit(3);e.innerHTML=`
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
        <div class="hero-compact-spacer"></div>
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
          ${n.map(s=>{const l=s.winner_id===c.id,o=s.home_score===s.away_score,r=o?"N":l?"V":"D",p=o?"#888":l?"#1A6B3C":"#c0392b",g={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat"}[s.mode]||s.mode,x=new Date(s.created_at).toLocaleDateString("fr",{month:"short",day:"numeric"});return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
              <div>
                <div style="font-size:13px;font-weight:600">${g}</div>
                <div style="font-size:11px;color:var(--gray-600)">${x}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <span style="font-size:14px;font-weight:700">${s.home_score} - ${s.away_score}</span>
                <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${r}</span>
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
  `,e.querySelectorAll("[data-nav]").forEach(s=>{s.addEventListener("click",l=>{l.preventDefault(),i(s.dataset.nav)})}),(a=document.getElementById("nav-rankings"))==null||a.addEventListener("click",()=>i("rankings")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.classList.add("tapped"),setTimeout(()=>s.classList.remove("tapped"),200);const l=s.dataset.action;if(l==="match-ai"){ci(i);return}if(l==="match-random"){i("match",{matchMode:"random"});return}d("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),window.location.reload()})}function ci(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const d=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",d),i.addEventListener("click",c=>{c.target===i&&d()}),i.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{d(),e("match",{matchMode:c.dataset.mode})})})}const de={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ee(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const kt=["ATT","MIL","DEF","GK"];function Dt(e){let t=0;const i=e.length;for(let d=0;d<i;d++)for(let c=d+1;c<i;c++){const n=e[d],a=e[c];if(!n||!a)continue;const s=n._col!==void 0&&a._col!==void 0&&n._col===a._col,l=n._col!==void 0&&a._col!==void 0&&Math.abs(n._col-a._col)===1,o=kt.indexOf(n._line),r=kt.indexOf(a._line),p=Math.abs(o-r)===1;(n._line===a._line&&l||s&&p)&&(n.country_code&&a.country_code&&n.country_code===a.country_code&&t++,n.club_id&&a.club_id&&n.club_id===a.club_id&&t++)}return t}function Qe(e,t={}){const i=e.reduce((n,a)=>{const s=a._line||a.job;return n+(Number(s==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),d=Dt(e);let c=i+d;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:i,links:d,total:Math.max(0,c)}}function et(e,t={}){const i=e.reduce((n,a)=>{const s=a._line||a.job;let l=0;return s==="GK"?l=Number(a.note_g)||0:s==="MIL"?l=Number(a.note_m)||0:l=Number(a.note_d)||0,n+l+(a.boost||0)},0),d=Dt(e);let c=i+d;return t.stolenNote&&(c-=t.stolenNote),{base:i,links:d,total:Math.max(0,c)}}function tt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Gt(e,t,i="easy"){const d=e.filter(a=>!a.used);if(!d.length)return[];const c=[...d].sort((a,s)=>{const l=t==="attack"?ee(a,"ATT"):a._line==="GK"?ee(a,"GK"):ee(a,"DEF");return(t==="attack"?ee(s,"ATT"):s._line==="GK"?ee(s,"GK"):ee(s,"DEF"))-l});let n=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(n,c.length,3))}function pi(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const qt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Fe={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ze=["GK","DEF","MIL","ATT"],ui=["Tous","GK","DEF","MIL","ATT"],fi={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},it={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Rt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Ee(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Oe(e,t=""){var p,g;const i=e.player;if(!i)return"";const d=i.job||"ATT",c=Fe[d],n=qt[i.rarity]||"#ccc",a=Ee(i,d),s=i.job2?Ee(i,i.job2):null,l=i.job2?Fe[i.job2]:null,o=Rt(i),r=it[i.country_code]||i.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${n};cursor:pointer;flex-shrink:0;position:relative
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
        ${s!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${l}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${s}</text>
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
  </div>`}function Et(e){const t=e.job||"ATT",i=Ee(e,t),d=it[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${d}</div>
      </div>
    </div>
  </div>`}async function gi(e,t){const{state:i,navigate:d,toast:c,openModal:n,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await _.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await _.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(s||[]).filter(k=>k.card_type==="player"&&k.player),r=(s||[]).filter(k=>k.card_type==="game_changer"),p=(s||[]).filter(k=>k.card_type==="formation"),{data:g}=await _.from("gc_definitions").select("name,gc_type,color,effect,image_url"),f={};(g||[]).forEach(k=>{f[k.name]=k});const x=Object.keys(Ze),u=Object.keys(de),y={};o.forEach(k=>{const v=k.player.id;y[v]=(y[v]||0)+1}),new Set(Object.keys(y).map(k=>String(k)));const L=new Set(p.map(k=>k.formation)),w=new Set(r.map(k=>k.gc_type));let m="player",E="Tous",F="",h=!1;function $(){return[...o].sort((k,v)=>{const C=ze.indexOf(k.player.job),A=ze.indexOf(v.player.job);return C!==A?C-A:(k.player.surname_encoded||"").localeCompare(v.player.surname_encoded||"")})}function T(){return[...l||[]].sort((k,v)=>{const C=ze.indexOf(k.job),A=ze.indexOf(v.job);return C!==A?C-A:(k.surname_encoded||"").localeCompare(v.surname_encoded||"")})}function D(){return $().filter(k=>{const v=k.player,C=E==="Tous"||v.job===E,A=!F||`${v.firstname} ${v.surname_encoded}`.toLowerCase().includes(F);return C&&A})}function G(){return T().filter(k=>{const v=E==="Tous"||k.job===E,C=!F||`${k.firstname} ${k.surname_encoded}`.toLowerCase().includes(F);return v&&C})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${m==="player"?"var(--green)":"transparent"};
        color:${m==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${m==="formation"?"var(--green)":"transparent"};
        color:${m==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${p.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${m==="gc"?"var(--green)":"transparent"};
        color:${m==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function P(){const k=document.getElementById("col-filters");k&&(m==="player"?(k.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${F}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${ui.map(v=>`
            <button class="filter-btn" data-job="${v}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${v===E?"var(--green)":"var(--gray-200)"};
                background:${v===E?"var(--green)":"#fff"};
                color:${v===E?"#fff":"var(--gray-600)"}">
              ${v}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${h?"var(--yellow)":"var(--gray-200)"};
              background:${h?"var(--yellow)":"#fff"};
              color:${h?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${h?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",v=>{F=v.target.value.toLowerCase(),Y()}),e.querySelectorAll(".filter-btn").forEach(v=>{v.addEventListener("click",()=>{E=v.dataset.job,P(),Y()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{h=!h,P(),Y()})):(k.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${h?"var(--yellow)":"var(--gray-200)"};
              background:${h?"var(--yellow)":"#fff"};
              color:${h?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${h?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{h=!h,P(),Y()})))}function Y(){const k=document.getElementById("col-grid");k&&(m==="player"?z(k):m==="formation"?N(k):q(k))}function X(k,v,C,A,b){b=b||"#7a28b8";const B=document.getElementById("col-grid"),I=document.getElementById("col-big");if(!B||!I)return;var R=0;function j(){I.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+v(k[R])+"</div>";var H=I.querySelector("[data-card-id],[data-form-id],[data-gc-id]");H&&H.addEventListener("click",function(){A(k[R])}),requestAnimationFrame(function(){var K=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!K||!I)){var J=I.clientHeight-8,ie=I.clientWidth-24,re=K.offsetHeight,ae=K.offsetWidth;if(re>0&&ae>0&&J>40){var se=Math.min(J/re,ie/ae,1);K.style.transform="scale("+se.toFixed(3)+")",K.style.transformOrigin="top center"}}}),B.innerHTML=k.map(function(K,J){return'<div class="col-mini-item" data-idx="'+J+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(J===R?b:"transparent")+';transition:border-color .15s;overflow:hidden">'+C(K,J===R)+"</div>"}).join(""),B.querySelectorAll(".col-mini-item").forEach(function(K){K.addEventListener("click",function(){R=Number(K.dataset.idx),j(),K.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}j()}function U(k){var v=.54,C=Math.round(140*v),A=Math.round(310*v),b;if(!k||k._fake){var B=k?k.player:null;if(!B)return"";b=Et(B)}else b=Oe(k,"");return'<div style="width:'+C+"px;height:"+A+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+v+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+b+"</div></div>"}function V(k,v,C){v=v||100,C=C||140;var A=Ie[k]||{},b={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},B=Math.max(3,Math.round(v*.06)),I=Object.entries(A).map(function(j){var H=j[0],K=j[1],J=H.replace(/\d+$/,""),ie=b[J]||"#888",re=Math.round(K.x*v),ae=Math.round(K.y*C);return'<circle cx="'+re+'" cy="'+ae+'" r="'+B+'" fill="'+ie+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),R=Math.max(1,Math.round(v/50));return'<svg viewBox="0 0 '+v+" "+C+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+v+'" height="'+C+'" fill="#1A6B3C"/><rect x="'+Math.round(v*.2)+'" y="'+Math.round(C*.02)+'" width="'+Math.round(v*.6)+'" height="'+Math.round(C*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+R+'"/><line x1="0" y1="'+Math.round(C*.5)+'" x2="'+v+'" y2="'+Math.round(C*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+R+'"/><ellipse cx="'+Math.round(v*.5)+'" cy="'+Math.round(C*.5)+'" rx="'+Math.round(v*.18)+'" ry="'+Math.round(C*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+R+'"/><rect x="'+Math.round(v*.2)+'" y="'+Math.round(C*.82)+'" width="'+Math.round(v*.6)+'" height="'+Math.round(C*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+R+'"/>'+I+"</svg>"}function M(k,v,C){var A=C>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+C+"</div>":"",b=v?'data-form-id="'+v.id+'"':"",B=k.length>7?14:k.length>5?16:19,I=!!v;return"<div "+b+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(I?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(I?"":"filter:grayscale(1);opacity:0.5")+'">'+A+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(I?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+B+"px;font-weight:900;color:"+(I?"#1A6B3C":"#aaa")+';line-height:1">'+k+'</div></div><div style="flex:1;overflow:hidden;background:'+(I?"#1A6B3C":"#ccc")+'">'+V(k,140,220)+"</div></div>"}function S(k,v){var C=.54,A=Math.round(140*C),b=Math.round(305*C),B=Math.round(b*.22),I=b-B,R=k.length>7?5:7,j=V(k,A,I),H=v?"1.5px solid #2a7a40":"1px solid #ddd",K=v?"":"filter:grayscale(1);opacity:0.45;",J=v?"#1A6B3C":"#bbb",ie="#fff";return'<div style="width:'+A+"px;height:"+b+"px;border-radius:6px;border:"+H+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+K+'"><div style="height:'+B+"px;background:"+J+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+R+"px;font-weight:900;color:"+ie+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(A-4)+'px">'+k+'</span></div><div style="height:'+I+'px;overflow:hidden;flex-shrink:0">'+j+"</div></div>"}function z(k){if(h){const v=G();if(!v.length){k.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const C=v.map(A=>o.find(b=>b.player.id===A.id)||{_fake:!0,player:A,id:"fake-"+A.id});X(C,A=>A._fake?Et(A.player):Oe(A,""),A=>A._fake?U({player:A.player,id:"x",_fake:!0}):U(A),A=>{A._fake||At(A,o,y,t)},"#1A6B3C")}else{const v=D();if(!v.length){k.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const C={},A=[];v.forEach(b=>{C[b.player.id]||(C[b.player.id]=!0,A.push(b))}),X(A,b=>{const B=y[b.player.id]||1,I=B>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${B}</div>`:"",j=o.filter(H=>H.player.id===b.player.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Oe(b,I+j)},b=>U(b),b=>At(b,o,y,t),"#1A6B3C")}}function N(k){const v=h?x:[...L];if(!v.length){k.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const C=v.map(A=>({formation:A,card:p.find(b=>b.formation===A)||null,owned:L.has(A)}));X(C,({formation:A,card:b,owned:B})=>M(A,B?b:null,B?p.filter(I=>I.formation===A).length:0),({formation:A,owned:b})=>S(A,b),({card:A,owned:b})=>{b&&A&&mi(A,p,t,n)},"#1A6B3C")}function q(k){const v=Object.keys(f),C=h?v.length?v:u:[...w];if(!C.length){k.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const A=C.map(b=>({type:b,gc:de[b]||{icon:"⚡",desc:""},def:f[b]||null,owned:w.has(b),card:r.find(B=>B.gc_type===b)||null}));X(A,({type:b,gc:B,def:I,owned:R,card:j})=>{const H=R?r.filter(Le=>Le.gc_type===b).length:0,K=H>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${H}</div>`:"",J=(I==null?void 0:I.gc_type)==="ultra_game_changer",ie={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},re={purple:"#b06ce0",light_blue:"#00d4ef"},ae=ie[I==null?void 0:I.color]||ie.purple,se=re[I==null?void 0:I.color]||re.purple,ce=(I==null?void 0:I.effect)||B.desc||"",ge=I!=null&&I.image_url?`/manager-wars/icons/${I.image_url}`:null;return R&&j?`<div data-gc-id="${j.id}" data-gc-type="${b}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${se};background:${ae};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${se}66;cursor:pointer">
          ${K}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${b.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${b}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${J?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${ge?`<img src="${ge}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${B.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${ce.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${b}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${B.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:b,gc:B,def:I,owned:R})=>R?(()=>{const j=Math.round(75.60000000000001),H=Math.round(310*.54),K=Math.round(H*.65),J=Math.round(H*.18),ie={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},re={purple:"#9b59b6",light_blue:"#00bcd4"},ae=ie[I==null?void 0:I.color]||ie.purple,se=re[I==null?void 0:I.color]||re.purple,ce=I!=null&&I.image_url?`/manager-wars/icons/${I.image_url}`:null;return`<div style="width:${j}px;height:${H}px;border-radius:8px;background:${ae};border:1px solid ${se};display:flex;flex-direction:column;overflow:hidden"><div style="height:${J}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${j-6}px">${b}</span></div><div style="height:${K}px;display:flex;align-items:center;justify-content:center">${ce?`<img src="${ce}" style="max-width:${j-8}px;max-height:${K-4}px;object-fit:contain">`:`<span style="font-size:24px">${B.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((I==null?void 0:I.effect)||B.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const j=Math.round(75.60000000000001),H=Math.round(310*.54);return`<div style="width:${j}px;height:${H}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${B.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${b}</span></div>`})(),({type:b,owned:B,def:I})=>{B&&xi(b,I,n)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(k=>{k.addEventListener("click",()=>{m=k.dataset.tab,E="Tous",F="",h=!1,e.querySelectorAll(".col-tab-btn").forEach(v=>{const C=v.dataset.tab===m;v.style.borderBottomColor=C?"var(--green)":"transparent",v.style.color=C?"var(--green)":"var(--gray-600)"}),P(),Y()})}),P(),Y()}function xi(e,t,i){const d=de[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",n={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},s=n[t==null?void 0:t.color]||n.purple,l=a[t==null?void 0:t.color]||a.purple,o=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||d.desc,p=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${s};border-radius:16px;border:2px solid ${l};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${o}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${p?`<img src="${p}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${d.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${r}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const _e=1e3;function mi(e,t,i,d){var u,y,L;const{state:c,toast:n,closeModal:a,navigate:s,refreshProfile:l}=i,o=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function p(){const w=Ie[o]||{},m=Ze[o]||[],E=290,F=360,h=20;function $(D){const G=w[D];return G?{x:G.x*E,y:G.y*F}:null}let T=`<svg width="${E}" height="${F}" viewBox="0 0 ${E} ${F}" xmlns="http://www.w3.org/2000/svg">`;for(const[D,G]of m){const P=$(D),Y=$(G);!P||!Y||(T+=`<line x1="${P.x}" y1="${P.y}" x2="${Y.x}" y2="${Y.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const D of Object.keys(w)){const G=$(D);if(!G)continue;const P=D.replace(/\d+/,""),Y=r[P]||"#555";T+=`<circle cx="${G.x}" cy="${G.y}" r="${h}" fill="${Y}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,T+=`<text x="${G.x}" y="${G.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${P}</text>`}return T+="</svg>",T}const g=t.filter(w=>w.formation===o),f=g.length,x=!e.is_for_sale;d(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${_e.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${f-1} carte${f-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${f<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${x?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${_e}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(u=document.getElementById("direct-sell-form-btn"))==null||u.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${_e.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const w=g.find(E=>!E.is_for_sale)||g[0];if(!w){n("Aucune carte à vendre","error");return}const{error:m}=await _.from("cards").delete().eq("id",w.id);if(m){n(m.message,"error");return}await _.from("users").update({credits:(c.profile.credits||0)+_e}).eq("id",c.profile.id),await l(),n(`+${_e.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),s("collection")}),(y=document.getElementById("market-sell-form-btn"))==null||y.addEventListener("click",async()=>{const w=parseInt(document.getElementById("sell-price-form").value);if(!w||w<1){n("Prix invalide","error");return}await _.from("cards").update({is_for_sale:!0,sale_price:w}).eq("id",e.id),await _.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:w}),n("Carte mise en vente sur le marché !","success"),a(),s("collection")}),(L=document.getElementById("cancel-sell-form-btn"))==null||L.addEventListener("click",async()=>{await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await _.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),n("Annonce retirée","success"),a(),s("collection")})}async function At(e,t,i,d){var T,D,G,P,Y,X;const{state:c,toast:n,openModal:a,closeModal:s,navigate:l,refreshProfile:o}=d,r=e.player,p=t.filter(U=>U.player.id===r.id),g=p.length,f=fi[r.rarity]||1e3,x=r.rarity!=="legende",u=Rt(r),y=Ee(r,r.job),L=r.job2?Ee(r,r.job2):null,w=Fe[r.job]||"#1A6B3C",m=r.job2?Fe[r.job2]:null,E=qt[r.rarity]||"#ccc",F=it[r.country_code]||r.country_code||"",{data:h}=await _.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",r.id).order("transferred_at",{ascending:!0}),$=h&&h.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${h.map(U=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${U.club_name} <span style="color:var(--gray-600)">(${U.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${U.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${U.source==="booster"?"Booster":U.price?U.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";a(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${E};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${w}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${w}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${y}</text>
            </svg>
            ${L!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${m}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${L}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${F}</div>
            ${(T=r.clubs)!=null&&T.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((D=r.clubs)==null?void 0:D.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${E}">${r.rarity.toUpperCase()}</div>
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
    ${$}

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe selon rareté</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${f.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${g-1} carte${g-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${g<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${x&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(G=document.getElementById("close-detail"))==null||G.addEventListener("click",s),(P=document.getElementById("direct-sell-btn"))==null||P.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${r.surname_encoded} pour ${f.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const U=p.find(M=>!M.is_for_sale)||p[0];if(!U){n("Aucune carte à vendre","error");return}const{error:V}=await _.from("cards").delete().eq("id",U.id);if(V){n(V.message,"error");return}await _.from("users").update({credits:(c.profile.credits||0)+f}).eq("id",c.profile.id),await o(),n(`+${f.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),l("collection")}),(Y=document.getElementById("market-sell-btn"))==null||Y.addEventListener("click",async()=>{const U=parseInt(document.getElementById("sell-price").value);if(!U||U<1){n("Prix invalide","error");return}await _.from("cards").update({is_for_sale:!0,sale_price:U}).eq("id",e.id),await _.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:U}),n("Carte mise en vente sur le marché !","success"),s(),l("collection")}),(X=document.getElementById("cancel-sell-btn"))==null||X.addEventListener("click",async()=>{await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await _.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),n("Annonce retirée","success"),s(),l("collection")})}const De={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},pe={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ne(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Nt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Pt(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function yi(e,t=44,i=58){var f;const d=e?Ne(e):null,c=e?Pt(e):null,n=Nt(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",s=pe[a]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,r=Math.round(i*.19),p=Math.round(i*.25),g=i-r-p;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${l};background:${s};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${d?`<img src="${d}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${n?`<img src="${n}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">🌍</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${o}</span>
      ${c?`<img src="${c}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:(f=e==null?void 0:e.clubs)!=null&&f.encoded_name?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Ke(e,t){const{state:i,navigate:d,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await _.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(n==null?void 0:n.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(n==null?void 0:n.length)>0?n.map(a=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!a)return;const{data:s,error:l}=await _.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(l){c(l.message,"error");return}c("Deck créé !","success"),Tt(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Tt(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const s=prompt("Nouveau nom :",a.dataset.name);if(!s||s===a.dataset.name)return;const{error:l}=await _.from("decks").update({name:s}).eq("id",a.dataset.rename);if(l){c(l.message,"error");return}c("Deck renommé !","success"),Ke(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await _.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:s}=await _.from("decks").delete().eq("id",a.dataset.delete);if(s){c(s.message,"error");return}c("Deck supprimé.","success"),Ke(e,t)})})}async function Tt(e,t,i){const{state:d,toast:c}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await _.from("decks").select("*").eq("id",e).single(),{data:a}=await _.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",d.profile.id),s=(a||[]).filter(f=>f.card_type==="player"&&f.player),l=(a||[]).filter(f=>f.card_type==="formation"),o=l.map(f=>f.formation).filter(Boolean),{data:r}=await _.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=n.formation||"4-4-2";o.length>0&&!o.includes(p)&&(p=o[0]);const g={deckId:e,name:n.name,formation:p,formationCardId:n.formation_card_id,slots:{},subs:[],playerCards:s,formationCards:l,availableFormations:o};(r||[]).forEach(f=>{f.is_starter?g.slots[f.position]=f.card_id:g.subs.includes(f.card_id)||g.subs.push(f.card_id)}),ve(t,g,i)}function ve(e,t,i){var l;const{navigate:d}=i;De[t.formation];const c=It(t.formation),n=c.filter(o=>t.slots[o]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(De),s=t.subs.map(o=>t.playerCards.find(r=>r.id===o)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div class="page">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${t.name}</h2>
        <p>${n}/11 titulaires · ${t.subs.length}/5 remplaçants</p>
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
        ${s.map(o=>{const r=o.player;return`<div style="position:relative;flex-shrink:0">
            ${yi(r,44,58)}
            <button data-remove-sub="${o.id}"
              style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>
          </div>`}).join("")}
        ${t.subs.length<5?'<div id="add-sub-btn" style="width:44px;height:58px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:22px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${n<11?"disabled":""}>
        ${n<11?`Placez encore ${11-n} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`,hi(e,t,c,i),document.getElementById("builder-back").addEventListener("click",()=>d("decks")),document.getElementById("formation-select").addEventListener("change",o=>{t.formation=o.target.value;const r=It(t.formation),p={};r.forEach(g=>{t.slots[g]&&(p[g]=t.slots[g])}),t.slots=p,ve(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>wi(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(o=>{o.addEventListener("click",()=>{t.subs=t.subs.filter(r=>r!==o.dataset.removeSub),ve(e,t,i)})}),(l=document.getElementById("add-sub-btn"))==null||l.addEventListener("click",()=>{bi(t,e,i)})}function hi(e,t,i,d){const c=e.querySelector("#deck-field");if(!c)return;const n=Ie[t.formation]||{},a=Ft(t.formation)||[],s={};for(const L of i){const w=t.slots[L],m=w?t.playerCards.find(E=>E.id===w):null;s[L]=m?m.player:null}const l=300,o=300,r=48,p=64,g=13,f=16,x=38;function u(L){const w=n[L];return w?{x:w.x*l,y:w.y*o}:null}let y="";for(const[L,w]of a){const m=u(L),E=u(w);if(!m||!E)continue;const F=s[L]?{...s[L],club_id:s[L].club_id,country_code:s[L].country_code,rarity:s[L].rarity}:null,h=s[w]?{...s[w],club_id:s[w].club_id,country_code:s[w].country_code,rarity:s[w].rarity}:null,$=fe(F,h);$==="#ff3333"||$==="#cc2222"?y+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}" stroke="${$}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(y+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}" stroke="${$}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,y+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}" stroke="${$}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const L of i){const w=u(L);if(!w)continue;const m=s[L],E=L.replace(/\d+/,""),F=pe[E]||"#555",h=(w.x-r/2).toFixed(1),$=(w.y-p/2).toFixed(1),T={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[m==null?void 0:m.rarity]||"#aaa";if(m){const D=Ne(m),G=Pt(m),P=Nt(m.country_code),Y=Number(E==="GK"?m.note_g:E==="DEF"?m.note_d:E==="MIL"?m.note_m:m.note_a)||0,X=p-g-f;y+=`<defs><clipPath id="dcp-${L}"><rect x="${h}" y="${(w.y-p/2+g).toFixed(1)}" width="${r}" height="${X}"/></clipPath></defs>`,y+=`<rect x="${h}" y="${$}" width="${r}" height="${p}" rx="5" fill="${F}"/>`,D&&(y+=`<image href="${D}" x="${h}" y="${(w.y-p/2+g).toFixed(1)}" width="${r}" height="${X}" clip-path="url(#dcp-${L})" preserveAspectRatio="xMidYMin slice"/>`),y+=`<rect x="${h}" y="${$}" width="${r}" height="${g}" fill="rgba(255,255,255,0.93)"/>`,y+=`<text x="${w.x.toFixed(1)}" y="${(w.y-p/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(m.surname_encoded||"").slice(0,9)}</text>`;const U=(w.y+p/2-f).toFixed(1);y+=`<rect x="${h}" y="${U}" width="${r}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,P&&(y+=`<image href="${P}" x="${(w.x-21).toFixed(1)}" y="${(w.y+p/2-f+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),y+=`<text x="${w.x.toFixed(1)}" y="${(w.y+p/2-f/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`,G&&(y+=`<image href="${G}" x="${(w.x+r/2-14).toFixed(1)}" y="${(w.y+p/2-f+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),y+=`<rect x="${h}" y="${$}" width="${r}" height="${p}" rx="5" fill="none" stroke="${T}" stroke-width="2"/>`}else y+=`<rect x="${h}" y="${$}" width="${r}" height="${p}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,y+=`<text x="${w.x.toFixed(1)}" y="${w.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,y+=`<text x="${w.x.toFixed(1)}" y="${(w.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${E}</text>`;y+=`<rect x="${h}" y="${$}" width="${r}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${L}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-x} ${-x} ${l+x*2} ${o+x*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${y}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(L=>{L.addEventListener("click",()=>vi(L.dataset.pos,t,e,d))})}function vi(e,t,i,d){var g,f,x;const{openModal:c,closeModal:n}=d,a=e.replace(/\d+/,""),s=t.slots[e],l=s?t.playerCards.find(u=>u.id===s):null;(g=l==null?void 0:l.player)==null||g.id;const o=new Set;Object.entries(t.slots).forEach(([u,y])=>{var w;if(u===e||!y)return;const L=t.playerCards.find(m=>m.id===y);(w=L==null?void 0:L.player)!=null&&w.id&&o.add(L.player.id)}),t.subs.forEach(u=>{var L;const y=t.playerCards.find(w=>w.id===u);(L=y==null?void 0:y.player)!=null&&L.id&&o.add(y.player.id)});const r=new Set,p=t.playerCards.filter(u=>{const y=u.player;return!(y.job===a||y.job2===a)||o.has(y.id)||r.has(y.id)?!1:(r.add(y.id),!0)});p.sort((u,y)=>{const L=a==="GK"?u.player.note_g:a==="DEF"?u.player.note_d:a==="MIL"?u.player.note_m:u.player.note_a;return(a==="GK"?y.player.note_g:a==="DEF"?y.player.note_d:a==="MIL"?y.player.note_m:y.player.note_a)-L}),c(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${p.length>0?p.map(u=>{var E,F;const y=u.player,L=a==="GK"?y.note_g:a==="DEF"?y.note_d:a==="MIL"?y.note_m:y.note_a,w=Ne(y),m={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[y.rarity];return`<div class="player-option" data-card-id="${u.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${pe[a]}">
            ${w?`<img src="${w}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${pe[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${y.firstname} ${y.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${y.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${y.country_code}">
              ${(E=y.clubs)!=null&&E.logo_url?`<img src="${y.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((F=y.clubs)==null?void 0:F.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${y.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${pe[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${m};flex-shrink:0">
            ${L}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(f=document.getElementById("close-selector"))==null||f.addEventListener("click",n),(x=document.getElementById("remove-player"))==null||x.addEventListener("click",()=>{delete t.slots[e],n(),ve(i,t,d)}),document.querySelectorAll(".player-option").forEach(u=>{u.addEventListener("click",()=>{t.slots[e]=u.dataset.cardId,n(),ve(i,t,d)})})}function bi(e,t,i){var l;const{openModal:d,closeModal:c}=i,n=new Set;Object.values(e.slots).filter(Boolean).forEach(o=>{var p;const r=e.playerCards.find(g=>g.id===o);(p=r==null?void 0:r.player)!=null&&p.id&&n.add(r.player.id)}),e.subs.forEach(o=>{var p;const r=e.playerCards.find(g=>g.id===o);(p=r==null?void 0:r.player)!=null&&p.id&&n.add(r.player.id)});const a=new Set,s=e.playerCards.filter(o=>{var r,p,g;return n.has((r=o.player)==null?void 0:r.id)||a.has((p=o.player)==null?void 0:p.id)?!1:(a.add((g=o.player)==null?void 0:g.id),!0)});d("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?s.map(o=>{var f;const r=o.player,p=Ne(r),g=r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a;return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${pe[r.job]}">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((f=r.clubs)==null?void 0:f.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${pe[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${g}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(l=document.getElementById("close-sub-selector"))==null||l.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),c(),ve(t,e,i)})})}async function wi(e,t){const{state:i,toast:d,navigate:c}=t,n=e.formationCards.find(l=>l.formation===e.formation),a=(n==null?void 0:n.id)||e.formationCardId;await _.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await _.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([l,o],r)=>{s.push({deck_id:e.deckId,card_id:o,position:l,is_starter:!0,slot_order:r})}),e.subs.forEach((l,o)=>{s.push({deck_id:e.deckId,card_id:l,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),s.length>0){const{error:l}=await _.from("deck_cards").insert(s);if(l){d(l.message,"error");return}}d("Deck enregistré ✅","success"),c("decks")}function It(e){const t=De[e]||De["4-4-2"],i=["GK1"];for(let d=1;d<=t.DEF;d++)i.push(`DEF${d}`);for(let d=1;d<=t.MIL;d++)i.push(`MIL${d}`);for(let d=1;d<=t.ATT;d++)i.push(`ATT${d}`);return i}const _i="modulepreload",$i=function(e){return"/manager-wars/"+e},Lt={},ki=function(t,i,d){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));c=Promise.allSettled(i.map(l=>{if(l=$i(l),l in Lt)return;Lt[l]=!0;const o=l.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${r}`))return;const p=document.createElement("link");if(p.rel=o?"stylesheet":_i,o||(p.as="script"),p.crossOrigin="",p.href=l,s&&p.setAttribute("nonce",s),document.head.appendChild(p),o)return new Promise((g,f)=>{p.addEventListener("load",g),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return c.then(a=>{for(const s of a||[])s.status==="rejected"&&n(s.reason);return t().catch(n)})};async function Ot(){const{data:e}=await _.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await _.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(d=>d.booster_id===i.id)}))}function Ei(e){if(!(e!=null&&e.length))return null;const t=e.reduce((d,c)=>d+Number(c.percentage),0);let i=Math.random()*t;for(const d of e)if(i-=Number(d.percentage),i<=0)return d;return e[e.length-1]}const Ai=Object.freeze(Object.defineProperty({__proto__:null,loadActiveBoosters:Ot,rollDropRate:Ei},Symbol.toStringTag,{value:"Module"})),Ht=()=>Object.keys(Ie),Ti=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Ue={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Ii(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Li={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Mi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};function zi(e){var c;const t={};(e.rates||[]).forEach(n=>{t[n.card_type]=(t[n.card_type]||0)+Number(n.percentage||0)});const i=((c=Object.entries(t).sort((n,a)=>a[1]-n[1])[0])==null?void 0:c[0])||"player",d=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+d,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Ci(e,{state:t,navigate:i,toast:d}){var a;const c=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let n=[];try{n=(await Ot()).map(zi)}catch(s){console.warn("Erreur chargement boosters DB, fallback hardcodé",s)}n.length||(n=Ti.map(s=>({...s,rates:[],isPub:s.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${n.map(s=>{const l=s.cost===0||c>=s.cost;return`<div class="booster-card ${l?"":"disabled"}" data-booster="${s.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${s.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${s.img}" alt="${s.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${s.name}</div>
            <div class="desc">${s.sub}</div>
            <div class="cost">${s.costLabel}</div>
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(s=>{s.addEventListener("click",async()=>{const l=n.find(o=>o.id===s.dataset.booster);if(l){s.style.opacity="0.5",s.style.pointerEvents="none";try{await ji(l,{state:t,toast:d,navigate:i,container:e})}catch(o){d(o.message,"error"),s.style.opacity="",s.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation();const o=n.find(r=>r.id===s.dataset.boosterId);Ni(o)})})}async function ji(e,{state:t,toast:i,navigate:d,container:c}){if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await Hi()}catch(p){i(p.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:n}=await _.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((n||[]).filter(p=>p.card_type==="player").map(p=>p.player_id)),s=new Set((n||[]).filter(p=>p.card_type==="formation").map(p=>p.formation));let l=[];const o=e.type||"player";o==="player"?l=await Di(t.profile,e.cardCount,e.cost):o==="game_changer"?l=await Gi(t.profile,e.cardCount,e.cost):o==="formation"?l=await qi(t.profile,e.cost):l=await Fi(t.profile,e),l.forEach(p=>{p.card_type==="player"&&p.player?p.isDuplicate=a.has(p.player.id):p.card_type==="formation"&&(p.isDuplicate=s.has(p.formation))});const{data:r}=await _.from("users").select("*").eq("id",t.profile.id).single();r&&(t.profile=r),Ri(l,e,d)}function Si(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function ye(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Bi(e,t){let i;switch(t){case"legende":i=e.filter(d=>d.rarity==="legende"),i.length||(i=e.filter(d=>d.rarity==="pepite"||d.rarity==="papyte")),i.length||(i=e.filter(d=>ye(d)>=6));break;case"special":i=e.filter(d=>d.rarity==="pepite"||d.rarity==="papyte"),i.length||(i=e.filter(d=>ye(d)>=6));break;case"normal_high":i=e.filter(d=>d.rarity==="normal"&&ye(d)>=6),i.length||(i=e.filter(d=>ye(d)>=6));break;default:i=e.filter(d=>d.rarity==="normal"&&ye(d)>=1&&ye(d)<=5),i.length||(i=e.filter(d=>d.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Fi(e,t){if(t.cost>0){const{error:c}=await _.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(c)throw c}const{rollDropRate:i}=await ki(async()=>{const{rollDropRate:c}=await Promise.resolve().then(()=>Ai);return{rollDropRate:c}},void 0),d=[];for(let c=0;c<(t.cardCount||5);c++){const n=i(t.rates);if(n){if(n.card_type==="player"){let a=_.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);n.rarity&&(a=a.eq("rarity",n.rarity));const{data:s}=await a;let l=s||[];if((n.note_min||n.note_max)&&(l=l.filter(p=>{const g=Math.max(Number(p.note_g)||0,Number(p.note_d)||0,Number(p.note_m)||0,Number(p.note_a)||0);return(!n.note_min||g>=n.note_min)&&(!n.note_max||g<=n.note_max)})),l.length||(n.note_min||n.note_max?(l=s||[],console.warn("[Booster] Aucun joueur avec note",n.note_min,"-",n.note_max,"— fallback rareté uniquement")):l=s||[]),!l.length)continue;const o=l[Math.floor(Math.random()*l.length)],{data:r}=await _.from("cards").insert({owner_id:e.id,player_id:o.id,card_type:"player"}).select().single();r&&(d.push({...r,player:o}),_.rpc("record_transfer",{p_card_id:r.id,p_player_id:o.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(n.card_type==="game_changer"){const{data:a}=await _.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),s=a!=null&&a.length?a:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],o=s[Math.floor(Math.random()*s.length)].name,{data:r}=await _.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:o}).select().single();r&&d.push(r)}else if(n.card_type==="formation"){const a=Ht(),s=a[Math.floor(Math.random()*a.length)],{data:l}=await _.from("cards").insert({owner_id:e.id,card_type:"formation",formation:s}).select();l!=null&&l[0]&&d.push(l[0])}}}return d}async function Di(e,t,i){if(i>0){const{error:o}=await _.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:d}=await _.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(d!=null&&d.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=d.filter(o=>o.job==="GK"),n=d.filter(o=>o.job!=="GK"),a=!e.first_booster_opened&&c.length>0,s=[];for(let o=0;o<t;o++){const r=o===0&&a?c:o===0?n:d,p=Si(),g=Bi(r,p);g&&s.push(g)}a&&await _.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:l}=await _.from("cards").insert(s.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(l||[]).forEach((o,r)=>{_.rpc("record_transfer",{p_card_id:o.id,p_player_id:s[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((o,r)=>({...l[r],player:o}))}async function Gi(e,t,i){const{error:d}=await _.from("users").update({credits:e.credits-i}).eq("id",e.id);if(d)throw d;const{data:c}=await _.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),n=c!=null&&c.length?c:Object.keys(Ue).map(r=>({name:r,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const r=n[Math.floor(Math.random()*n.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:s,error:l}=await _.from("cards").insert(a).select();return l&&console.error("[Booster GC] Erreur insert:",l.message,l),(s||[]).map(r=>{const p=c==null?void 0:c.find(g=>g.name===r.gc_type||g.id===r.gc_definition_id);return{...r,_gcDef:p||null}})}async function qi(e,t){const{error:i}=await _.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const d=Ht(),c=d[Math.floor(Math.random()*d.length)],{data:n,error:a}=await _.from("cards").insert({owner_id:e.id,card_type:"formation",formation:c}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),n||[]}function Ri(e,t,i){var g;if(!e||e.length===0){const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",f.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(f),(g=f.querySelector("#anim-close-err"))==null||g.addEventListener("click",()=>f.remove());return}const d=document.createElement("div");d.id="booster-anim-overlay",d.innerHTML=`
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
  `,document.body.appendChild(d);let c=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(c)return;c=!0;const f=document.getElementById("pack-visual");f.classList.add("shaking"),setTimeout(()=>{f.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",a(0)},600)},500)});let n=0;function a(f){n=f;const x=document.getElementById("reveal-phase");x.style.display="flex",s(f)}function s(f){var h;const x=e[f],u=document.getElementById("card-counter"),y=document.getElementById("single-card-slot"),L=document.getElementById("card-tap-hint");u&&(u.textContent=`Carte ${f+1} / ${e.length}`),L&&(L.textContent=f<e.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const w=Mt(x),m=x.card_type==="player"&&((h=x.player)==null?void 0:h.rarity)==="legende";y.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${m?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${w}
        ${x.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,m&&r();const E=document.getElementById("current-card-wrap");let F=!1;E.addEventListener("click",()=>{if(F)return;F=!0;const $=f+1;$<e.length?(E.style.transition="all 0.25s ease",E.style.transform="translateX(-120%) rotate(-15deg)",E.style.opacity="0",setTimeout(()=>s($),250)):l()})}function l(){p(),document.getElementById("reveal-phase").style.display="none";const f=document.getElementById("recap-phase");f.style.display="flex";const x=document.getElementById("recap-grid");x.innerHTML=e.map((u,y)=>`
      <div class="recap-card" style="--i:${y};animation-delay:${y*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${Mt(u)}
        ${u.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let o=null;function r(){const f=document.getElementById("fireworks-canvas");if(!f)return;f.width=window.innerWidth,f.height=window.innerHeight;const x=f.getContext("2d"),u=[];function y(){const w=Math.random()*f.width,m=Math.random()*f.height*.6,E=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],F=E[Math.floor(Math.random()*E.length)];for(let h=0;h<60;h++){const $=Math.PI*2/60*h,T=2+Math.random()*5;u.push({x:w,y:m,vx:Math.cos($)*T,vy:Math.sin($)*T,alpha:1,color:F,size:2+Math.random()*3})}}y(),o=setInterval(y,600);function L(){if(document.getElementById("fireworks-canvas")){x.clearRect(0,0,f.width,f.height);for(let w=u.length-1;w>=0;w--){const m=u[w];if(m.x+=m.vx,m.y+=m.vy+.08,m.vy*=.98,m.alpha-=.018,m.alpha<=0){u.splice(w,1);continue}x.globalAlpha=m.alpha,x.fillStyle=m.color,x.beginPath(),x.arc(m.x,m.y,m.size,0,Math.PI*2),x.fill()}x.globalAlpha=1,(o!==null||u.length>0)&&requestAnimationFrame(L)}}L()}function p(){o!==null&&(clearInterval(o),o=null);const f=document.getElementById("fireworks-canvas");f&&f.getContext("2d").clearRect(0,0,f.width,f.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{p(),d.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{p(),d.remove(),i("boosters")})}function Mt(e){var t,i,d,c;if(e.card_type==="player"&&e.player){const n=e.player,a=n.job||"ATT",s=Li[a]||"#1A6B3C",l=Mi[n.rarity]||"#ccc",o=a==="GK"?n.note_g:a==="DEF"?n.note_d:a==="MIL"?n.note_m:n.note_a,r=Ii(n),p={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[n.country_code]||n.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${l};overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:6px 6px 2px;text-align:center;background:#f2e8d2">
        <div style="font-size:8px;letter-spacing:1px;color:#666;text-transform:uppercase">${n.firstname}</div>
        <div style="font-size:13px;font-weight:900;color:#111;line-height:1.1;font-family:Arial Black,Arial">${(n.surname_encoded||"").toUpperCase()}</div>
      </div>
      <!-- Étoile + bande poste -->
      <div style="position:relative;height:72px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:14px;width:100%;height:26px;background:${s}"></div>
        <svg width="50" height="48" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${s}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${o||0}</text>
        </svg>
      </div>
      <!-- Portrait -->
      <div style="flex:1;overflow:hidden;background:#b8d4f0">
        ${r?`<img src="${r}" style="width:100%;height:100%;object-fit:cover;object-position:center top" onerror="this.style.display='none'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;height:26px">
        <img src="https://flagsapi.com/${n.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:1px;color:#555;text-transform:uppercase">${p}</div>
        ${(t=n.clubs)!=null&&t.logo_url?`<img src="${n.clubs.logo_url}" style="width:20px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:700">${(((i=n.clubs)==null?void 0:i.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>`}if(e.card_type==="game_changer"){const n=e._gcDef,a=(n==null?void 0:n.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},l={purple:"#b06ce0",light_blue:"#00d4ef"},o=s[n==null?void 0:n.color]||s.purple,r=l[n==null?void 0:n.color]||l.purple,p=(n==null?void 0:n.name)||e.gc_type||"Game Changer",g=(n==null?void 0:n.effect)||((d=Ue[e.gc_type])==null?void 0:d.desc)||"",f=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,x=((c=Ue[e.gc_type])==null?void 0:c.icon)||"⚡";return`<div style="width:170px;height:240px;background:${o};border-radius:14px;border:3px solid ${r};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${r}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${p.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${a?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${f?`<img src="${f}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${x}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${g.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Ni(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},n={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};d.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${n[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${c[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(d),d.addEventListener("click",a=>{a.target===d&&d.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>d.remove());return}Pi()}function Pi(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const Oi="simulation",Kt="VOTRE_ZONE_ID";function Hi(){switch(Oi){case"propellerads":return Ki();case"adsense":return Ui();default:return nt()}}function nt(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const d=setInterval(()=>{i--;const c=document.getElementById("ad-cd"),n=document.getElementById("ad-skip");c&&(c.textContent=i),n&&(n.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(d),n&&(n.disabled=!1,n.style.cssText=n.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),n==null||n.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Ki(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(nt());window.propeller.push({zone_id:Kt,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function Ui(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(nt());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Kt,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const be={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},we={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ut(e,t,i,d,c){var n;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${d}</button>
    </div>
  </div>`,(n=document.getElementById("msg-btn"))==null||n.addEventListener("click",c)}function oe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Ve(e,t){var d,c;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((d=i.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((c=i.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ge(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Vt(){const e=Math.random()*100;return e<10?3:e<30?2:1}function qe(e,t){const i=be[t]||be["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const s=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===a).sort((o,r)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:a})),l=Ge(s.length);s.forEach((o,r)=>{o._col=l[r]}),d[a]=s}return d}const n=[...e];for(const a of["GK","DEF","MIL","ATT"]){const s=[];for(let o=0;o<i[a];o++){let r=n.findIndex(p=>p.job===a);if(r===-1&&(r=n.findIndex(p=>p.job2===a)),r===-1&&(r=0),n[r]){const p={...n[r],_line:a};s.push(p),n.splice(r,1)}}const l=Ge(s.length);s.forEach((o,r)=>{o._col=l[r]}),d[a]=s}return d}async function Vi(e,t){var a,s;const{data:i}=await _.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return Yi(e);const d=be[e]||be["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},n=[...i];for(const l of["GK","DEF","MIL","ATT"]){const o=n.filter(x=>x.job===l),r=n.filter(x=>x.job!==l),p=[...o,...r],g=[];for(let x=0;x<d[l];x++){const u=p[x]||n[x];u&&g.push({cardId:"ai-"+u.id+"-"+x,id:u.id,firstname:u.firstname,name:u.surname_encoded,country_code:u.country_code,club_id:u.club_id,job:u.job,job2:u.job2,note_g:Number(u.note_g)||0,note_d:Number(u.note_d)||0,note_m:Number(u.note_m)||0,note_a:Number(u.note_a)||0,rarity:u.rarity,skin:u.skin,hair:u.hair,hair_length:u.hair_length,clubName:((a=u.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((s=u.clubs)==null?void 0:s.logo_url)||null,boost:0,used:!1,_line:l})}const f=Ge(g.length);g.forEach((x,u)=>{x._col=f[u]}),c[l]=g}return c}function Yi(e){const t=be[e]||be["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},d=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let l=0;l<t[n];l++){const o=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:d[c%d.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?o:2,note_d:n==="DEF"?o:2,note_m:n==="MIL"?o:2,note_a:n==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:n}),c++}const s=Ge(a.length);a.forEach((l,o)=>{l._col=s[o]}),i[n]=a}return i}function Yt(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"})}function le(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden})}async function Wi(e,t,i,d,c,n,a=[],s=[]){var w;const{state:l,navigate:o,toast:r}=t;let p=!1,g=null;e.style.overflow="hidden",e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler la recherche</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const f=()=>document.getElementById("mm-status"),x=async(m=!0)=>{p=!0,g&&(_.removeChannel(g),g=null),m&&await _.rpc("cancel_matchmaking",{p_user_id:l.profile.id}).catch(()=>{})};(w=document.getElementById("mm-cancel"))==null||w.addEventListener("click",async()=>{try{await x(!0)}catch(m){console.warn("[Matchmaking] cleanup error:",m)}le(),o("home")});const u=async(m,E,F)=>{p||(p=!0,g&&(_.removeChannel(g),g=null),f()&&(f().textContent="Adversaire trouvé !"),await new Promise(h=>setTimeout(h,600)),e.isConnected!==!1&&Xi(e,t,m,F,a,s))},{data:y,error:L}=await _.rpc("try_matchmake",{p_user_id:l.profile.id,p_deck_id:i});if(L||!(y!=null&&y.success)){r("Erreur de matchmaking","error"),le(),o("home");return}if(y.matched){u(y.match_id,y.opponent_id,!1);return}f()&&(f().textContent="En attente d'un autre joueur..."),g=_.channel("matchmaking-"+l.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${l.profile.id}`},m=>{const E=m.new;E.status==="matched"&&E.match_id&&u(E.match_id,E.matched_with,!0)}).subscribe()}async function Xi(e,t,i,d,c=[],n=[]){const{state:a,navigate:s,toast:l}=t,o=d?"p1":"p2",r=d?"p2":"p1",p=(c||[]).map(M=>M.id),g=(c||[]).map(M=>({id:M.id,gc_type:M.gc_type,_gcDef:M._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation du match...</div>';const{data:f}=await _.from("matches").select("*").eq("id",i).single();if(!f){l("Match introuvable","error"),s("home");return}async function x(){const[{data:M,error:S},{data:z,error:N},{data:q},{data:k}]=await Promise.all([_.rpc("get_deck_for_match",{p_deck_id:f.home_deck_id}),_.rpc("get_deck_for_match",{p_deck_id:f.away_deck_id}),_.from("users").select("id,pseudo,club_name").eq("id",f.home_id).single(),_.from("users").select("id,pseudo,club_name").eq("id",f.away_id).single()]);S&&console.error("[PvP] get_deck_for_match p1 error:",S),N&&console.error("[PvP] get_deck_for_match p2 error:",N);function v(j,H){return{cardId:j.card_id,position:H||j.position,id:j.id,firstname:j.firstname,name:j.surname_encoded,country_code:j.country_code,club_id:j.club_id,job:j.job,job2:j.job2,note_g:Number(j.note_g)||0,note_d:Number(j.note_d)||0,note_m:Number(j.note_m)||0,note_a:Number(j.note_a)||0,rarity:j.rarity,skin:j.skin,hair:j.hair,hair_length:j.hair_length,clubName:j.club_encoded_name||null,clubLogo:j.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}}const C=((M==null?void 0:M.starters)||[]).map(j=>v(j,j.position)),A=((z==null?void 0:z.starters)||[]).map(j=>v(j,j.position)),b=((M==null?void 0:M.subs)||[]).map(j=>v(j,j.position)),B=((z==null?void 0:z.subs)||[]).map(j=>v(j,j.position)),I=(M==null?void 0:M.formation)||"4-4-2",R=(z==null?void 0:z.formation)||"4-4-2";return console.log("[PvP] p1Formation:",I,"p1 starters:",C.length,"positions:",C.map(j=>j.position)),console.log("[PvP] p2Formation:",R,"p2 starters:",A.length,"positions:",A.map(j=>j.position)),{p1Team:qe(C,I),p2Team:qe(A,R),p1Subs:b,p2Subs:B,p1Formation:I,p2Formation:R,p1Name:(q==null?void 0:q.club_name)||(q==null?void 0:q.pseudo)||"Joueur 1",p2Name:(k==null?void 0:k.club_name)||(k==null?void 0:k.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:d?p:[],gc_p2:d?[]:p,gcCardsFull_p1:d?g:[],gcCardsFull_p2:d?[]:g,gcReady_p1:!0,gcReady_p2:!0,usedGc_p1:[],usedGc_p2:[],lastActionAt:new Date().toISOString()}}let u=f.game_state&&Object.keys(f.game_state).length?f.game_state:null;if(!u)if(d){u=await x();const{data:M}=await _.from("matches").select("game_state").eq("id",i).single();!(M!=null&&M.game_state)||!Object.keys(M.game_state).length?await _.from("matches").update({game_state:u,turn_user_id:f.home_id}).eq("id",i):u=M.game_state}else{e.innerHTML=`<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation avec l'adversaire...</div>`;for(let M=0;M<30&&!u;M++){await new Promise(z=>setTimeout(z,400));const{data:S}=await _.from("matches").select("game_state").eq("id",i).single();S!=null&&S.game_state&&Object.keys(S.game_state).length&&(u=S.game_state)}if(!u){l("Erreur de synchronisation","error"),s("home");return}u.gc_p2=p,u.gcCardsFull_p2=g,await _.from("matches").update({game_state:u}).eq("id",i)}let y=!1;function L(M){var C;try{_.removeChannel(w)}catch{}const S=a.profile.id,z=M.winner_id===S,N=!!M.forfeit,q=u[o+"Score"]??0,k=u[r+"Score"]??0,v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center",v.innerHTML=`
      <div style="font-size:64px">${z?"🏆":"😞"}</div>
      <div style="font-size:26px;font-weight:900;color:${z?"#FFD700":"#ff6b6b"}">${z?"VICTOIRE !":"DÉFAITE"}</div>
      <div style="font-size:18px;color:#fff">${u[o+"Name"]} ${q} – ${k} ${u[r+"Name"]}</div>
      ${N?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${z?"L'adversaire a quitté la partie":"Match perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(C=v.querySelector("#pvp-end-home"))==null||C.addEventListener("click",()=>{v.remove(),le(),s("home")})}const w=_.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},M=>{const S=M.new;try{if(S.status==="finished"||S.forfeit){if(y)return;y=!0,u._timerInt&&(clearInterval(u._timerInt),u._timerInt=null),S.game_state&&(u=S.game_state),L(S);return}S.game_state&&(u=S.game_state,F())}catch(z){console.error("[PvP] Realtime render crash:",z,"gameState:",u)}}).subscribe();async function m(M){Object.assign(u,M),u.lastActionAt=new Date().toISOString();const{error:S}=await _.from("matches").update({game_state:u}).eq("id",i);S&&(console.error("[PvP] pushState DB error:",S.message,S),l("Erreur de synchronisation : "+S.message,"error"));try{F()}catch(z){console.error("[PvP] renderPvpScreen crash après pushState:",z),l("Erreur d'affichage : "+z.message,"error")}}async function E(){if(y)return;y=!0,u._timerInt&&(clearInterval(u._timerInt),u._timerInt=null);const M=d?f.away_id:f.home_id;try{await _.from("matches").update({status:"finished",forfeit:!0,winner_id:M}).eq("id",i)}catch(S){console.warn("[PvP] forfeit DB error:",S)}try{_.removeChannel(w)}catch{}le(),s("home")}function F(){var pt,ut,ft,gt,xt;const M=u[o+"Team"];u[r+"Team"];const S=u[o+"Score"],z=u[r+"Score"],N=u[o+"Name"],q=u[r+"Name"];if(u.phase==="gc-select")return h();if(u.phase==="reveal")return $();if(u.phase==="midfield")return T();if(u.phase==="finished")return X();const k=u.phase===o+"-attack",v=u.phase===o+"-defense",C=u.phase===r+"-attack"||u.phase===r+"-defense",A=Array.isArray(u["selected_"+o])?u["selected_"+o]:[],b=A.map(O=>O.cardId);e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const B=window.innerWidth>=700,I=u[o+"Subs"]||[],R=u["usedSubIds_"+o]||[],j=I.filter(O=>!R.includes(O.cardId)),H=u["gcCardsFull_"+o]||[],K=u["usedGc_"+o]||[],J=H.filter(O=>!K.includes(O.id)),ie=u.boostOwner===o&&!u.boostUsed,re=(O,Z,te)=>{var vt,bt;const W=O._gcDef,xe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[W==null?void 0:W.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Me={purple:"#b06ce0",light_blue:"#00d4ef"}[W==null?void 0:W.color]||"#b06ce0",me=(W==null?void 0:W.name)||O.gc_type,oi=(W==null?void 0:W.effect)||((vt=de[O.gc_type])==null?void 0:vt.desc)||"",mt=W!=null&&W.image_url?`/manager-wars/icons/${W.image_url}`:null,ri=((bt=de[O.gc_type])==null?void 0:bt.icon)||"⚡",yt=Math.round(te*.22),ht=Math.round(te*.22),Pe=te-yt-ht,ai=me.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${O.id}" data-gc-type="${O.gc_type}"
        style="width:${Z}px;height:${te}px;border-radius:10px;border:2px solid ${Me};background:${xe};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${yt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${ai}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Z-6}px">${me}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Pe}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${mt?`<img src="${mt}" style="max-width:${Z-10}px;max-height:${Pe-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Pe*.55)}px">${ri}</span>`}
        </div>
        <div style="height:${ht}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${oi.slice(0,38)}</span>
        </div>
      </div>`},ae=(O,Z)=>`<div id="pvp-boost-card" style="width:${O}px;height:${Z}px;flex-shrink:0;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px">
      <div style="font-size:${B?22:18}px">⚡</div>
      <div style="font-size:${B?11:9}px;color:#000;font-weight:900">+${u.boostValue}</div>
    </div>`,se=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${B?70:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${j.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':j.map(O=>`<div class="pvp-sub-btn" data-sub-id="${O.cardId}" style="cursor:pointer;flex-shrink:0">${ue(O,B?60:44,B?78:58)}</div>`).join("")}
    </div>`,ce=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0" id="match-field">
      <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
        ${ot(M,u[o+"Formation"],k?"attack":v?"defense":"idle",b,300,300)}
      </div>
    </div>`,ge=B?"padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Le=k?`<button id="pvp-action" style="${ge};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${A.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:v?`<button id="pvp-action" style="${ge};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${A.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="${ge};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour de ${q}</div>`,lt=k||v?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${A.length}/3 sélectionné(s)</div>`:"",ii=(()=>{const O=u.pendingAttack;if(v&&O&&Array.isArray(O.players))return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${q} ATTAQUE — Défendez !</div>
          ${ke(O.players.map(W=>({...W,used:!1})),"#ff6b6b",O.total)}
        </div>`;const Z=Array.isArray(u.log)?u.log:[],te=Z[Z.length-1];return te?'<div style="padding:2px 4px">'+Jt(te)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),ni=(Array.isArray(u.log)?u.log:[]).length,ct=`
      <!-- Score -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:rgba(0,0,0,0.25);flex-shrink:0">
        <button id="pvp-quit" style="background:rgba(220,53,69,0.9);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer">✕</button>
        <div style="flex:1;text-align:center;color:#fff;font-size:14px;font-weight:700">
          ${N} <span style="color:#FFD700;font-size:18px">${S}</span> – <span style="color:#FFD700;font-size:18px">${z}</span> ${q}
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="text-align:center;padding:4px;background:rgba(0,0,0,0.15);font-size:11px;color:${C?"rgba(255,255,255,0.4)":"#FFD700"};font-weight:700;flex-shrink:0">
        ${C?`⏳ Tour de ${q}`:k?"⚔️ À vous d'attaquer !":v?"🛡️ À vous de défendre !":""}
      </div>
      <!-- Zone actions -->
      <div id="pvp-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">${ii}</div>
      <!-- Bouton historique -->
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${ni})
      </button>`;if(B?e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
        ${ct}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${se}
          ${ce}
          <div style="width:150px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            <div style="width:100%">${Le}${lt}</div>
            <div style="width:100%;height:1px;background:rgba(255,255,255,0.1)"></div>
            ${ie?ae(110,90):""}
            ${J.map(O=>re(O,110,150)).join("")}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
        ${ct}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${se}
          <div style="flex:1;min-width:0;display:flex;flex-direction:column;min-height:0">
            ${ce}
            <div style="display:flex;align-items:stretch;padding:8px;background:rgba(0,0,0,0.35);gap:6px;flex-shrink:0">
              ${ie?ae(60,80):""}
              ${J.map(O=>re(O,68,95)).join("")}
              <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:3px;min-width:90px">
                ${Le}${lt}
              </div>
            </div>
          </div>
        </div>
      </div>`,e.querySelectorAll(".match-slot-hit").forEach(O=>{O.addEventListener("click",()=>{if(!k&&!v)return;const Z=O.dataset.cardId,te=O.dataset.role,W=(M[te]||[]).find(me=>me.cardId===Z);if(!W||W.used)return;Array.isArray(u["selected_"+o])||(u["selected_"+o]=[]);const xe=u["selected_"+o],Me=xe.findIndex(me=>me.cardId===Z);Me>-1?xe.splice(Me,1):xe.length<3&&xe.push({...W,_role:te}),F()})}),(pt=e.querySelector("#pvp-boost-card"))==null||pt.addEventListener("click",()=>{D()}),e.querySelectorAll(".pvp-gc-mini").forEach(O=>{O.addEventListener("click",()=>{Y(O.dataset.gcId,O.dataset.gcType)})}),(ut=e.querySelector("#pvp-action"))==null||ut.addEventListener("click",()=>{k?U():v&&V()}),(ft=e.querySelector("#pvp-quit"))==null||ft.addEventListener("click",()=>{confirm("Quitter le match ? Vous perdrez par forfait.")&&E()}),(gt=e.querySelector("#pvp-view-opp"))==null||gt.addEventListener("click",()=>{P()}),(xt=e.querySelector("#pvp-toggle-history"))==null||xt.addEventListener("click",()=>{G()}),function(){const Z=e.querySelector(".terrain-wrapper svg");Z&&(Z.removeAttribute("width"),Z.removeAttribute("height"),Z.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Z.setAttribute("viewBox","-26 -26 352 352"),Z.setAttribute("preserveAspectRatio","xMidYMid meet"));const te=e.querySelector(".match-screen");if(te){const W=e.clientHeight;W>50&&(te.style.height=W+"px",te.style.maxHeight=W+"px",te.style.overflow="hidden")}}(),u._timerInt&&(clearInterval(u._timerInt),u._timerInt=null),(k||v)&&!y){let O=30,Z=!1;const te=()=>document.getElementById("pvp-timer"),W=()=>{te()&&(te().textContent=O+"s",te().style.color=Z?"#ff4444":"#fff")};W(),u._timerInt=setInterval(()=>{O--,O<0?Z?(clearInterval(u._timerInt),u._timerInt=null,E()):(Z=!0,O=15,W()):W()},1e3)}}function h(){var v;const M=u["gcReady_"+o],S=u["gcReady_"+r];Array.isArray(u["gc_"+o])||(u["gc_"+o]=[]);let z=u["gc_"+o];const N=3;function q(C,A){const b=C._gcDef,B={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},I={purple:"#9b59b6",light_blue:"#00bcd4"},R=B[b==null?void 0:b.color]||B.purple,j=I[b==null?void 0:b.color]||I.purple;return`<div class="pvp-gc-card" data-id="${C.id}"
        style="width:100px;border-radius:10px;border:3px solid ${A?"#FFD700":j};background:${R};
          display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
          box-shadow:${A?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
          transform:${A?"scale(1.06)":"scale(1)"};transition:all 0.15s">
        <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:${((b==null?void 0:b.name)||C.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(b==null?void 0:b.name)||C.gc_type}</span>
        </div>
        <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
          ${b!=null&&b.image_url?`<img src="/manager-wars/icons/${b.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
        </div>
        <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((b==null?void 0:b.effect)||"").slice(0,50)}</span>
        </div>
        ${A?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
      </div>`}if(e.style.overflow="hidden",e.innerHTML=`
    <div id="pvp-gc-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Sélectionne <b style="color:#FFD700">${N}</b> cartes · ${z.length}/${N}
        </div>
      </div>
      ${M?`
      <div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px">
        <div style="font-size:32px">✅</div>
        <div style="color:#fff;font-size:14px">Prêt ! ${S?"Adversaire aussi.":`En attente de ${u[r+"Name"]}...`}</div>
      </div>`:`
      <div id="pvp-gc-grid" style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px"></div>
      <div style="padding:10px 16px 14px;flex-shrink:0">
        <button id="pvp-gc-validate" style="width:100%;padding:14px;border-radius:14px;border:none;background:linear-gradient(135deg,#5a0a9a,#9a28e8);color:#fff;font-size:15px;font-weight:900;cursor:pointer">
          ${z.length?`⚡ Valider (${z.length} GC)`:"▶ Continuer sans GC"}
        </button>
      </div>`}
    </div>`,M)return;const k=o==="p1"?f.home_id:f.away_id;_.from("cards").select("id,gc_type").eq("owner_id",k).eq("card_type","game_changer").then(async({data:C})=>{const{data:A}=await _.from("gc_definitions").select("*").eq("is_active",!0),b=new Set,B=(C||[]).filter(R=>b.has(R.gc_type)?!1:(b.add(R.gc_type),!0)).map(R=>({...R,_gcDef:(A==null?void 0:A.find(j=>j.name===R.gc_type))||null})),I=document.getElementById("pvp-gc-grid");if(I){if(!B.length){I.innerHTML='<div style="color:rgba(255,255,255,0.4);font-size:13px;text-align:center;margin-top:30px">Aucune carte Game Changer disponible.</div>';return}I.innerHTML=B.map(R=>q(R,z.includes(R.id))).join(""),I.querySelectorAll(".pvp-gc-card").forEach(R=>{R.addEventListener("click",()=>{const j=R.dataset.id,H=z.indexOf(j);H>-1?z.splice(H,1):z.length<N&&z.push(j),F()})})}}),(v=e.querySelector("#pvp-gc-validate"))==null||v.addEventListener("click",async()=>{const C=o==="p1"?f.home_id:f.away_id,{data:A}=await _.from("cards").select("id,gc_type").eq("owner_id",C).eq("card_type","game_changer").in("id",z),{data:b}=await _.from("gc_definitions").select("*").eq("is_active",!0),B=(A||[]).map(I=>({...I,_gcDef:(b==null?void 0:b.find(R=>R.name===I.gc_type))||null}));await m({["gcReady_"+o]:!0,["gcCardsFull_"+o]:B}),u["gcReady_"+r]&&await m({phase:"reveal"})})}function $(){e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${u[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Ae(u[r+"Team"],u[r+"Formation"],null,[],300,300)}</div>
      <div style="font-size:15px;color:rgba(255,255,255,0.7)">
        <span class="loading-dots">Chargement</span>
      </div>
      <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
    </div>`,o==="p1"&&setTimeout(async()=>{await m({phase:"midfield"})},5e3)}function T(){const M=u[o+"Team"].MIL||[],S=u[r+"Team"].MIL||[];function z(A){return A.reduce((b,B)=>b+ee(B,"MIL"),0)}function N(A){let b=0;for(let B=0;B<A.length-1;B++){const I=fe(A[B],A[B+1]);I==="#00ff88"?b+=2:I==="#FFD700"&&(b+=1)}return b}const q=z(M)+N(M),k=z(S)+N(S),v=q>=k;function C(A,b,B){return`<div style="text-align:center">
        <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${b}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${A.map((I,R)=>{const j=oe(I),H=R<A.length-1?fe(I,A[R+1]):null,K=H&&H!=="#ff3333"&&H!=="#cc2222";return`
            <div style="width:52px;height:52px;border-radius:8px;background:${B};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
              ${j?`<img src="${j}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
              <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${ee(I,"MIL")}</div>
              <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${I.name}</div>
            </div>
            ${H?`<div style="width:14px;height:4px;border-radius:2px;background:${H};flex-shrink:0;opacity:${K?.9:.3}"></div>`:""}
            `}).join("")}
        </div>
        <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
          Score: ${z(A)} + ${N(A)} liens = <b style="color:#fff">${z(A)+N(A)}</b>
        </div>
      </div>`}e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
      <div style="text-align:center;color:#fff">
        <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
      </div>

      ${C(M,u[o+"Name"],"#D4A017")}

      <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${q}</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${k}</div>
      </div>

      ${C(S,u[r+"Name"],"#bb2020")}

      <div id="pvp-midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
    </div>`,setTimeout(()=>{const A=document.getElementById("pvp-score-me"),b=document.getElementById("pvp-score-opp"),B=document.getElementById("pvp-midfield-result");A&&b&&(v?(A.style.fontSize="80px",A.style.color="#FFD700",b.style.opacity="0.25"):(b.style.fontSize="80px",b.style.color="#ff6b6b",A.style.opacity="0.25"));const I=u.p1Team.MIL||[],R=u.p2Team.MIL||[],j=z(I)+N(I),H=z(R)+N(R),K=j>=H?"p1":"p2";u[K+"Name"];let J=u.boostValue;J==null&&(J=Vt(),u.boostValue=J,u.boostOwner=K,u.boostUsed=!1),B&&(B.style.opacity="1",B.innerHTML=`<div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${v?`${u[o+"Name"]} gagne le milieu de terrain et attaque !`:`${u[r+"Name"]} gagne l'engagement et attaque !`}
        </div>
        ${v?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px" id="pvp-boost-display">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${J}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}`),setTimeout(async()=>{if(o!=="p1")return;const ie=K;await m({phase:ie+"-attack",attacker:ie,round:1,boostValue:u.boostValue,boostUsed:!1,boostOwner:ie})},1800)},600)}function D(){var N;const M=u[o+"Team"],S=Object.entries(M).flatMap(([q,k])=>(k||[]).filter(v=>!v.used).map(v=>({...v,_line:q})));if(!S.length)return;const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",z.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${u.boostValue}</div>
        <button id="boost-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${S.map(q=>{const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[q._line]||"#555",v=ee(q,q._line)+(q.boost||0);return`<div class="boost-pick-item" data-cid="${q.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${k};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${q.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${v}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(z),(N=z.querySelector("#boost-picker-close"))==null||N.addEventListener("click",()=>z.remove()),z.querySelectorAll(".boost-pick-item").forEach(q=>{q.addEventListener("click",async()=>{const k=q.dataset.cid,v=S.find(b=>b.cardId===k);if(!v)return;const C=u[o+"Team"],A=(C[v._line]||[]).find(b=>b.cardId===k);A&&(A.boost=(A.boost||0)+u.boostValue),z.remove(),await m({[o+"Team"]:C,boostUsed:!0})})})}function G(){var z;const M=Array.isArray(u.log)?u.log:[],S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",S.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${M.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...M].reverse().map(N=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${N.type==="goal"?"#FFD700":N.type==="defense"?"#00ff88":"rgba(255,255,255,0.5)"}">
                <div style="font-size:12px;color:#fff">${N.text||""}</div>
              </div>`).join("")}
      </div>`,document.body.appendChild(S),(z=S.querySelector("#pvp-hist-close"))==null||z.addEventListener("click",()=>S.remove())}function P(){var S;const M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",M.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${u[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Ae(u[r+"Team"],u[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-view-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(M),(S=M.querySelector("#pvp-view-opp-close"))==null||S.addEventListener("click",()=>M.remove())}function Y(M,S){var j,H;const N=(u["gcCardsFull_"+o]||[]).find(K=>K.id===M),q=N==null?void 0:N._gcDef,k=de[S]||{icon:"⚡",desc:"Carte spéciale."},v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[q==null?void 0:q.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",C={purple:"#b06ce0",light_blue:"#00d4ef"}[q==null?void 0:q.color]||"#b06ce0",A=(q==null?void 0:q.name)||S,b=(q==null?void 0:q.effect)||k.desc,B=q!=null&&q.image_url?`/manager-wars/icons/${q.image_url}`:null,I=k.icon||"⚡",R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",R.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${C};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${C}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${A.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${A}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${B?`<img src="${B}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${I}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${b}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(R),(j=R.querySelector("#pvp-gc-back"))==null||j.addEventListener("click",()=>R.remove()),(H=R.querySelector("#pvp-gc-use"))==null||H.addEventListener("click",async()=>{R.remove();const K=u["usedGc_"+o]||[];K.push(M),await m({["usedGc_"+o]:K})})}function X(){var q;const M=u[o+"Score"],S=u[r+"Score"],z=M>S,N=M===S;e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${z?"🏆":N?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${z?"Victoire !":N?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${M} - ${S}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour à l'accueil</button>
    </div>`,(q=document.getElementById("pvp-home"))==null||q.addEventListener("click",()=>{_.removeChannel(w),le(),s("home")})}async function U(){const M=(u["selected_"+o]||[]).map(z=>({...z,_line:z._role}));if(!M.length)return;const S=Qe(M,u.modifiers[o]||{});M.forEach(z=>{const N=(u[o+"Team"][z._role]||[]).find(q=>q.cardId===z.cardId);N&&(N.used=!0)}),await m({pendingAttack:{...S,players:M,side:o},["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},phase:r+"-defense"})}async function V(){const M=(u["selected_"+o]||[]).map(b=>({...b,_line:b._role})),S=et(M,u.modifiers[o]||{});M.forEach(b=>{const B=(u[o+"Team"][b._role]||[]).find(I=>I.cardId===b.cardId);B&&(B.used=!0)});const z=tt(u.pendingAttack.total,S.total,u.modifiers[o]||{}),N=u.pendingAttack.side,q=z==="attack",k=u[N+"Score"]+(q?1:0),v=N==="p1"?"p2":"p1",C=(u.round||0)+1,A=C>10;await m({[N+"Score"]:k,["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:A?"finished":v+"-attack",attacker:v,round:C}),A&&await _.from("matches").update({status:"finished"}).eq("id",i)}F()}async function Ji(e,t){var h;const{state:i,navigate:d,toast:c}=t;Yt();const n=i.params||{};e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const a=n.matchMode||"vs_ai_easy",s=a.replace("vs_ai_",""),l=a;if(!n.deckId)return Zi(e,t,a);const o=n.deckId,[{data:r},{data:p}]=await Promise.all([_.from("decks").select("formation,name").eq("id",o).single(),_.from("deck_cards").select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`).eq("deck_id",o).order("slot_order")]),g=(p||[]).filter($=>{var T;return $.is_starter&&((T=$.card)==null?void 0:T.player)}).map($=>Ve($.card,$.position)),f=(p||[]).filter($=>{var T;return!$.is_starter&&((T=$.card)==null?void 0:T.player)}).map($=>Ve($.card,$.position));if(g.length<11){Ut(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>d("decks"));return}const x=(p||[]).find($=>{var T;return((T=$.card)==null?void 0:T.card_type)==="formation"}),u=(r==null?void 0:r.formation)||((h=x==null?void 0:x.card)==null?void 0:h.formation)||"4-4-2",{data:y}=await _.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",i.profile.id).eq("card_type","game_changer"),{data:L}=await _.from("gc_definitions").select("*").eq("is_active",!0),w=(y||[]).map($=>({...$,_gcDef:(L==null?void 0:L.find(T=>T.name===$.gc_type||T.id===$.gc_definition_id))||null}));if(a==="random"){const $=T=>{Wi(e,t,o,u,g,f,T,L||[])};if(!w.length){$([]);return}zt(e,w,$);return}const m=qe(g,u),E=await Vi(u),F=async $=>{const{data:T}=await _.from("matches").insert({home_id:i.profile.id,away_id:null,mode:l,home_deck_id:o,status:"in_progress"}).select().single(),D={gcDefs:L||[],matchId:T==null?void 0:T.id,mode:l,difficulty:s,formation:u,homeTeam:m,aiTeam:E,homeSubs:f,subsUsed:0,maxSubs:Math.min(f.length,3),homeScore:0,aiScore:0,gcCards:$,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Qi(e,D,t)};if(!w.length){F([]);return}zt(e,w,F)}function zt(e,t,i){const c=new Set,n=t.filter(r=>{const p=r.gc_type||r.id;return c.has(p)?!1:(c.add(p),!0)});let a=[];function s(r,p){const g=r._gcDef,f={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},x={purple:"#9b59b6",light_blue:"#00bcd4"},u=f[g==null?void 0:g.color]||f.purple,y=x[g==null?void 0:g.color]||x.purple;return`<div class="gc-select-card" data-id="${r.id}"
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
    </div>`}function l(){var x,u,y;const r=e.querySelector("#gc-confirm-overlay");if(r&&r.remove(),a.length<3)return;const p=document.createElement("div");p.id="gc-confirm-overlay",p.style.cssText="position:absolute;inset:0;background:rgba(10,22,40,0.88);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:32px 24px;z-index:20;backdrop-filter:blur(4px)",p.innerHTML=`
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
      </button>`;const g=L=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(L)};(x=p.querySelector("#gc-launch"))==null||x.addEventListener("click",()=>g(a)),(u=p.querySelector("#gc-no-gc"))==null||u.addEventListener("click",()=>g([])),(y=p.querySelector("#gc-reset"))==null||y.addEventListener("click",()=>{a=[],o()});const f=e.querySelector("#gc-screen-wrap");f?f.appendChild(p):e.appendChild(p)}function o(){e.style.overflow="hidden";const r=e.clientHeight||e.getBoundingClientRect().height;r>50&&(e.style.height=r+"px"),e.innerHTML=`
    <div id="gc-screen-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <!-- Header -->
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Sélectionne <b style="color:#FFD700">3</b> cartes · ${a.length}/3
          ${a.length>0&&a.length<3?` · encore ${3-a.length}`:""}
        </div>
      </div>
      <!-- Grille cartes -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px">
        ${n.map(p=>{const g=a.find(f=>f.gc_type===p.gc_type);return s(p,!!g)}).join("")}
      </div>
    </div>`,e.querySelectorAll(".gc-select-card").forEach(p=>{p.addEventListener("click",()=>{const g=p.dataset.id,f=n.find(u=>u.id===g);if(!f)return;const x=a.findIndex(u=>u.gc_type===f.gc_type);x>-1?a.splice(x,1):a.length<3&&a.push(f),o(),a.length===3&&l()})}),a.length===3&&l()}o()}async function Zi(e,t,i){const{state:d,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await _.from("decks").select("id,name,is_active,formation").eq("owner_id",d.profile.id).order("created_at",{ascending:!1});if(!n||n.length===0){Ut(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const a=n.map(r=>r.id),{data:s}=await _.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let l=0;function o(){var w,m,E,F,h;const r=n[l],p=(s||[]).filter($=>$.deck_id===r.id),g=p.filter($=>{var T;return $.is_starter&&((T=$.card)==null?void 0:T.player)}).map($=>Ve($.card,$.position)),f=p.find($=>{var T;return((T=$.card)==null?void 0:T.card_type)==="formation"}),x=r.formation||((w=f==null?void 0:f.card)==null?void 0:w.formation)||"4-4-2",u=g.length>=11?qe(g,x):null,y=g.length>=11;Yt(),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
          <div style="font-size:11px;opacity:.6;margin-top:2px">${x} · ${g.length}/11 ${r.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${l===n.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===n.length-1?"0.1":"0.3"});color:${l===n.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${l===n.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${u?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${ot(u,x,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${g.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${n.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${n.map(($,T)=>`<div style="width:7px;height:7px;border-radius:50%;background:${T===l?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const T=e.querySelector(".deck-preview-wrap svg");T&&(T.removeAttribute("width"),T.removeAttribute("height"),T.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",T.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(m=document.getElementById("prev-deck"))==null||m.addEventListener("click",()=>{l>0&&(l--,o())}),(E=document.getElementById("next-deck"))==null||E.addEventListener("click",()=>{l<n.length-1&&(l++,o())}),(F=document.getElementById("validate-deck"))==null||F.addEventListener("click",()=>{y&&t.navigate("match",{matchMode:i,deckId:r.id})}),(h=document.getElementById("cancel-deck-select"))==null||h.addEventListener("click",()=>{le(),c("home")});const L=document.getElementById("deck-swipe-zone");if(L){let $=0,T=0;L.addEventListener("touchstart",D=>{$=D.touches[0].clientX,T=D.touches[0].clientY},{passive:!0}),L.addEventListener("touchend",D=>{const G=D.changedTouches[0].clientX-$,P=D.changedTouches[0].clientY-T;Math.abs(G)<40||Math.abs(G)<Math.abs(P)||(G<0&&l<n.length-1?(l++,o()):G>0&&l>0&&(l--,o()))},{passive:!0})}}o()}function Qi(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Ae(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>en(e,t,i),5e3)}function en(e,t,i){const d=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function n(p){return p.reduce((g,f)=>g+ee(f,"MIL"),0)}function a(p){let g=0;for(let f=0;f<p.length-1;f++){const x=fe(p[f],p[f+1]);x==="#00ff88"?g+=2:x==="#FFD700"&&(g+=1)}return g}const s=n(d)+a(d),l=n(c)+a(c),o=s>=l;function r(p,g,f){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${g}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((x,u)=>{const y=oe(x),L=u<p.length-1?fe(x,p[u+1]):null,w=L&&L!=="#ff3333"&&L!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${f};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${y?`<img src="${y}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${ee(x,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${x.name}</div>
          </div>
          ${L?`<div style="width:14px;height:4px;border-radius:2px;background:${L};flex-shrink:0;opacity:${w?.9:.3}"></div>`:""}
          `}).join("")}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${n(p)} + ${a(p)} liens = <b style="color:#fff">${n(p)+a(p)}</b>
      </div>
    </div>`}e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${r(d,t.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${s}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${l}</div>
    </div>

    ${r(c,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const p=document.getElementById("score-home"),g=document.getElementById("score-ai"),f=document.getElementById("midfield-result");if(p&&g&&(o?(p.style.fontSize="80px",p.style.color="#FFD700",g.style.opacity="0.25"):(g.style.fontSize="80px",g.style.color="#ff6b6b",p.style.opacity="0.25")),f){const x=Vt();f.style.opacity="1",o&&t.clubName,f.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${o?`${t.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${o?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${x}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,o&&(t.boostCard={value:x})}t.attacker=o?"home":"ai",t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:d.map(x=>({name:x.name,note:ee(x,"MIL"),portrait:oe(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),aiPlayers:c.map(x=>({name:x.name,note:ee(x,"MIL"),portrait:oe(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),homeTotal:s,aiTotal:l,text:`Duel milieu : ${t.clubName} ${s} – ${l} IA → ${o?t.clubName+" attaque":"IA attaque"}`}),setTimeout(()=>{var u,y;const x=(u=t.boostCard)==null?void 0:u.value;e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:40px;height:100%;min-height:100%;gap:16px;padding-left:24px;padding-right:24px;background:#0a3d1e;text-align:center">
        <div style="font-size:64px">${o?"🏆":"😤"}</div>
        <div style="font-size:22px;font-weight:900;color:#fff;line-height:1.3">
          ${o?`⚽ ${t.clubName}<br>gagne le milieu de terrain !`:"😔 L'IA gagne l'engagement !"}
        </div>
        ${x&&o?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:16px;padding:16px 32px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">Carte Boost obtenue</div>
          <div style="font-size:48px;font-weight:900;color:#87CEEB">+${x}</div>
          <div style="font-size:11px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
        <button id="start-match-btn" style="margin-top:8px;padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:17px;font-weight:900;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,0.3)">
          ▶ Commencer le match
        </button>
      </div>`,(y=document.getElementById("start-match-btn"))==null||y.addEventListener("click",()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",ne(e,t,i),t.attacker==="ai"&&setTimeout(()=>We(e,t,i),800)})},100)},5e3)}function Wt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function ue(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const d=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:oe(e),c=Wt(e),n=e._line||e.job||"MIL",a=we[n]||"#555",s={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",l=e.note!==void 0?Number(e.note)||0:(Number(ee(e,n))||0)+(e.boost||0),o=Xt(e==null?void 0:e.country_code),r=Math.round(i*.19),p=Math.round(i*.25),g=i-Math.round(i*.19)-Math.round(i*.25),f=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${s};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${f}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${d&&!(e!=null&&e.used)?`<img src="${d}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${g}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Ye(e==null?void 0:e.country_code)?`<img src="${Ye(e.country_code)}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">${o}</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":l}</span>
      ${c?`<img src="${c}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function ke(e,t,i){if(!(e!=null&&e.length))return"";const d=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return d.forEach((n,a)=>{if(c+=ue(n,40,52),a<d.length-1){const s=fe(n,d[a+1]);c+=`<div style="width:7px;height:3px;background:${s==="#ff3333"||s==="#cc2222"?"rgba(255,255,255,0.12)":s};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),c+="</div>",c}function Ye(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Xt(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Ae(e,t,i,d,c=310,n=310){const a=Ie[t]||{},s=Ft(t)||Ze[t]||[],l={},o=["ATT","MIL","DEF","GK"];for(const w of o)(e[w]||[]).forEach((E,F)=>{l[`${w}${F+1}`]=E});function r(w){const m=a[w];return m?{x:m.x*c,y:m.y*n}:null}let p="";for(const[w,m]of s){const E=r(w),F=r(m);if(!E||!F)continue;const h=l[w],$=l[m],T=fe(h,$);T==="#00ff88"||T==="#FFD700"?(p+=`<line x1="${E.x.toFixed(1)}" y1="${E.y.toFixed(1)}" x2="${F.x.toFixed(1)}" y2="${F.y.toFixed(1)}"
        stroke="${T}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,p+=`<line x1="${E.x.toFixed(1)}" y1="${E.y.toFixed(1)}" x2="${F.x.toFixed(1)}" y2="${F.y.toFixed(1)}"
        stroke="${T}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):p+=`<line x1="${E.x.toFixed(1)}" y1="${E.y.toFixed(1)}" x2="${F.x.toFixed(1)}" y2="${F.y.toFixed(1)}"
        stroke="${T}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,f=64,x=13,u=16,y={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[w,m]of Object.entries(l)){const E=r(w);if(!E||!m)continue;const F=w.replace(/[0-9]/g,""),h=we[F]||"#555",$=i==="attack"&&["MIL","ATT"].includes(F)&&!m.used||i==="defense"&&["GK","DEF","MIL"].includes(F)&&!m.used,T=d.includes(m.cardId);let D;i==="attack"?D=F==="MIL"?Number(m.note_m)||0:Number(m.note_a)||0:i==="defense"?D=F==="GK"?Number(m.note_g)||0:F==="MIL"?Number(m.note_m)||0:Number(m.note_d)||0:D=Number(F==="GK"?m.note_g:F==="DEF"?m.note_d:F==="MIL"?m.note_m:m.note_a)||0,D=D+(m.boost||0);const G=(E.x-g/2).toFixed(1),P=(E.y-f/2).toFixed(1),Y=m.used?.25:1,X=y[m==null?void 0:m.rarity]||y.normal,U=T?"#ff3030":X,V=T?3:(m==null?void 0:m.rarity)==="légende"||(m==null?void 0:m.rarity)==="pépite"?2.5:2,M=f-x-u;p+=`<defs><clipPath id="cp-${w}"><rect x="${G}" y="${(E.y-f/2+x).toFixed(1)}" width="${g}" height="${M}"/></clipPath></defs>`,p+=`<rect x="${G}" y="${P}" width="${g}" height="${f}" rx="5" fill="${h}" opacity="${Y}"/>`;const S=oe(m);S&&!m.used&&(p+=`<image href="${S}" x="${G}" y="${(E.y-f/2+x).toFixed(1)}" width="${g}" height="${M}" clip-path="url(#cp-${w})" preserveAspectRatio="xMidYMin slice"/>`),p+=`<rect x="${G}" y="${P}" width="${g}" height="${x}" rx="4" fill="rgba(255,255,255,0.92)"/>`,p+=`<text x="${E.x.toFixed(1)}" y="${(E.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(m.name||"").slice(0,9)}</text>`;const z=(E.y+f/2-u).toFixed(1);if(p+=`<rect x="${G}" y="${z}" width="${g}" height="${u}" fill="rgba(255,255,255,0.92)"/>`,m.used)p+=`<text x="${E.x.toFixed(1)}" y="${(E.y+f/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const N=Ye(m.country_code);N?p+=`<image href="${N}" x="${(E.x-20).toFixed(1)}" y="${(E.y+f/2-u+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:p+=`<text x="${(E.x-13).toFixed(1)}" y="${(E.y+f/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Xt(m.country_code)}</text>`,p+=`<text x="${E.x.toFixed(1)}" y="${(E.y+f/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${D}</text>`;const q=Wt(m);q?p+=`<image href="${q}" x="${(E.x+g/2-14).toFixed(1)}" y="${(E.y+f/2-u+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:m.clubName&&(p+=`<text x="${(E.x+14).toFixed(1)}" y="${(E.y+f/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(m.clubName||"").slice(0,3).toUpperCase()}</text>`),m.boost&&(p+=`<rect x="${(E.x+g/2-12).toFixed(1)}" y="${(E.y-f/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,p+=`<text x="${(E.x+g/2-5).toFixed(1)}" y="${(E.y-f/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${m.boost}</text>`)}p+=`<rect x="${G}" y="${P}" width="${g}" height="${f}" rx="5" fill="${T?"rgba(255,255,255,0.12)":"none"}" stroke="${U}" stroke-width="${V}" opacity="${Y}"/>`,$&&(p+=`<rect x="${G}" y="${P}" width="${g}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${T?"selected":""}" data-card-id="${m.cardId}" data-role="${F}" style="cursor:pointer"/>`)}const L=38;return`<svg viewBox="${-L} ${-L} ${c+L*2} ${n+L*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${p}
  </svg>`}function ot(e,t,i,d,c=300,n=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ae(e,t,i,d,c,n)}
  </div>`}function Ce(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}function Jt(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:wrap">
          ${(e.homePlayers||[]).map(i=>Ce(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:wrap">
          ${(e.aiPlayers||[]).map(i=>Ce(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${Ce(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${Ce(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function ne(e,t,i){var x,u,y,L,w,m,E,F;const d=t.selected.map(h=>h.cardId),c=t.usedSubIds||[],n=t.homeSubs.filter(h=>!c.includes(h.cardId));Object.values(t.homeTeam).flat().filter(h=>h.used).length>0&&n.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const s=t.phase==="ai-attack"||t.phase==="ai-defense",l=t.phase==="attack",o=t.phase==="defense",r=t.phase==="finished",p=t.gcCards.filter(h=>!t.usedGc.includes(h.id)),g=t.boostCard&&!t.boostUsed;if(e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const $=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${ke(($.players||[]).map(T=>({...T,used:!1})),"#ff6b6b",$.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const $=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${ke(($.players||[]).map(T=>({...T,used:!1})),"#00ff88",$.total)}
          </div>`}const h=t.log[t.log.length-1];return h?'<div style="padding:2px 4px">'+Jt(h)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const h=window.innerWidth>=700,$=(V,M,S)=>{var j,H;const z=(t.gcDefs||[]).find(K=>K.name===V.gc_type),N={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[z==null?void 0:z.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",q={purple:"#b06ce0",light_blue:"#00d4ef"}[z==null?void 0:z.color]||"#b06ce0",k=(z==null?void 0:z.name)||V.gc_type,v=(z==null?void 0:z.effect)||((j=de[V.gc_type])==null?void 0:j.desc)||"",C=z!=null&&z.image_url?`/manager-wars/icons/${z.image_url}`:null,A=((H=de[V.gc_type])==null?void 0:H.icon)||"⚡",b=Math.round(S*.22),B=Math.round(S*.22),I=S-b-B,R=k.length>12?7:9;return`<div class="gc-mini" data-gc-id="${V.id}" data-gc-type="${V.gc_type}"
          style="width:${M}px;height:${S}px;border-radius:10px;border:2px solid ${q};background:${N};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${b}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${R}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${M-6}px">${k}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${I}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${C?`<img src="${C}" style="max-width:${M-10}px;max-height:${I-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(I*.55)}px">${A}</span>`}
          </div>
          <div style="height:${B}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${v.slice(0,38)}</span>
          </div>
        </div>`},T=(V,M)=>{var S;return M?`<div id="boost-card" style="width:110px;padding:8px 6px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center">
            <div style="font-size:22px">⚡</div>
            <div style="font-size:10px;color:#000;font-weight:900">+${(S=t.boostCard)==null?void 0:S.value}</div>
          </div>`:$(V,110,150)},D=(V,M)=>{var S;return M?`<div id="boost-card" style="padding:4px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:7px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:1px;text-align:center;min-width:42px">
            <div style="font-size:15px">⚡</div>
            <div style="font-size:7px;color:#000;font-weight:900">+${(S=t.boostCard)==null?void 0:S.value}</div>
          </div>`:$(V,68,95)},G=h?"padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",P=r?`<button id="btn-results" style="${G};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:s?`<div style="${G};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:l?`<button id="btn-action" style="${G};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:o?`<button id="btn-action" style="${G};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${G};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Y=l||o?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",X=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${h?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(V=>`<div class="sub-btn-col" data-sub-id="${V.cardId}" style="cursor:pointer;flex-shrink:0">${ue(V,44,58)}</div>`).join("")}
      </div>`,U=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${ot(t.homeTeam,t.formation,t.phase,d,300,300)}
        </div>
      </div>`;return h?`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${X}
          ${U}
          <!-- Colonne droite : GC + bouton -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            ${p.map(V=>T(V,!1)).join("")}
            ${g?T(null,!0):""}
            <div style="flex:1"></div>
            <div style="width:100%">${P}${Y}</div>
          </div>
        </div>`:`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${X}
          <div style="flex:1;min-width:0;display:flex;flex-direction:column;min-height:0">
            ${U}
            <!-- Zone bas mobile : GC grille + bouton -->
            <div style="display:flex;align-items:stretch;padding:4px 6px;background:rgba(0,0,0,0.35);gap:5px;flex-shrink:0">
              <div style="display:flex;flex-wrap:wrap;gap:3px;align-content:center;max-width:120px">
                ${p.map(V=>D(V,!1)).join("")}
                ${g?D(null,!0):""}
              </div>
              <div style="flex:0.8;display:flex;flex-direction:column;justify-content:center;gap:3px">
                ${P}${Y}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(h=>{var $,T,D;if(h.type==="duel"){const G=h.isGoal,P=h.homeScored?"#FFD700":G?"#ff6b6b":"rgba(255,255,255,0.3)",Y=h.homeScored?"⚽ BUT !":G?"⚽ BUT IA !":($=h.homePlayers)!=null&&$.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${G?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${P};margin-bottom:4px">
                <div style="font-size:9px;color:${P};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${Y}</div>
                ${(T=h.homePlayers)!=null&&T.length?`<div style="margin-bottom:3px">${ke(h.homePlayers,"rgba(255,255,255,0.7)",h.homeTotal)}</div>`:""}
                ${(D=h.aiPlayers)!=null&&D.length?`<div style="opacity:0.7">${ke(h.aiPlayers,"#ff6b6b",h.aiTotal)}</div>`:""}
              </div>`}return h.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${h.outPlayer?ue({...h.outPlayer,used:!0,_line:h.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${h.inPlayer?ue({...h.inPlayer,_line:h.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:h.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${h.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${h.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`,function(){const $=e.querySelector(".terrain-wrapper svg");if(!$)return;$.removeAttribute("width"),$.removeAttribute("height"),$.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",$.setAttribute("viewBox","-26 -26 352 352"),$.setAttribute("preserveAspectRatio","xMidYMid meet");const T=e.querySelector(".match-screen");if(T){const D=e.clientHeight;D>50&&(T.style.height=D+"px",T.style.overflow="hidden")}}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const h=e.querySelector(".terrain-wrapper svg");h&&(h.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let h=!1,$=30;const T=()=>document.getElementById("match-timer"),D=()=>{const G=T();if(!G)return;const P=String(Math.floor($/60)).padStart(2,"0"),Y=String($%60).padStart(2,"0");G.textContent=` ${P}:${Y}`,G.style.color=h?"#ff2222":"#ff9500",G.style.fontWeight="900"};D(),t._timerInt=setInterval(()=>{if($--,$<0)if(!h)h=!0,$=15,D();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const G=document.createElement("div");G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",G.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(G),setTimeout(()=>{G.remove(),he(e,t,i)},2500)}else D()},1e3)}(x=document.getElementById("match-quit"))==null||x.addEventListener("click",()=>{le(),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,he(e,t,i))}),(u=document.getElementById("view-ai"))==null||u.addEventListener("click",()=>cn(t,i)),(y=document.getElementById("toggle-history"))==null||y.addEventListener("click",()=>{var h;(h=document.getElementById("match-history-panel"))==null||h.classList.add("open")}),(L=document.getElementById("close-history"))==null||L.addEventListener("click",()=>{var h;(h=document.getElementById("match-history-panel"))==null||h.classList.remove("open")}),(w=document.getElementById("btn-action"))==null||w.addEventListener("click",()=>{t.selected.length!==0&&(l?nn(e,t,i):o&&on(e,t,i))}),(m=document.getElementById("btn-results"))==null||m.addEventListener("click",()=>he(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(h=>{h.addEventListener("click",()=>tn(h,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(h=>{h.addEventListener("click",()=>sn(h.dataset.gcId,h.dataset.gcType,e,t,i))}),(E=document.getElementById("boost-card"))==null||E.addEventListener("click",()=>ln(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(h=>{h.addEventListener("click",()=>Ct(e,t,i,h.dataset.subId))}),(F=document.getElementById("sub-btn-main"))==null||F.addEventListener("click",()=>Ct(e,t,i))}function tn(e,t,i,d){const c=e.dataset.cardId,n=e.dataset.role,a=t.selected.findIndex(s=>s.cardId===c);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){d.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[n]||[]).find(l=>l.cardId===c);s&&t.selected.push({...s,_role:n,_line:n})}ne(i,t,d)}function rt(e,t,i){e.matchId&&_.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function nn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),rt(t,i,i.state.profile.id);const d=t.selected.map(n=>({...n,_line:n._role})),c=Qe(d,t.modifiers.home);t.pendingAttack={...c,players:[...t.selected],side:"home"},t.selected.forEach(n=>{const a=(t.homeTeam[n._role]||[]).find(s=>s.cardId===n.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${c.total} (base ${c.base}${c.links?` +${c.links} liens`:""}) — ${t.selected.map(n=>n.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",ne(e,t,i),setTimeout(()=>rn(e,t,i),1200)}function on(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),rt(t,i,i.state.profile.id);const d=t.selected.map(s=>({...s,_line:s._role})),c=et(d,t.modifiers.home);t.selected.forEach(s=>{const l=(t.homeTeam[s._role]||[]).find(o=>o.cardId===s.cardId);l&&(l.used=!0)});const n=tt(t.pendingAttack.total,c.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(s=>({name:s.name,note:s._line==="MIL"?s.note_m:s.note_a,portrait:oe(s),job:s.job,country_code:s.country_code,rarity:s.rarity,clubName:s.clubName,clubLogo:s.clubLogo})),homePlayers:t.selected.map(s=>{const l=(t.homeTeam[s._role]||[]).find(o=>o.cardId===s.cardId)||s;return{name:l.name,note:l._line==="GK"?l.note_g:l._line==="MIL"?l.note_m:l.note_d,portrait:oe(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(n.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(n.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,ne(e,t,i),at(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Te(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Te(e,t,i,"home-attack")}function We(e,t,i){rt(t,i,null);const d=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=Gt(d,"attack",t.difficulty);if(!c.length){Qt(e,t,i);return}const n=Qe(c,t.modifiers.ai);t.pendingAttack={...n,players:c,side:"ai"},c.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${n.total} (${c.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),l=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!l){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:oe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:n.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,ne(e,t,i),at(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Te(e,t,i,"home-attack")});return}t.phase="defense",ne(e,t,i)}function rn(e,t,i){const d=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=Gt(d,"defense",t.difficulty),n=c.length>0?et(c,t.modifiers.ai).total:0;c.forEach(l=>{l.used=!0});const a=tt(t.pendingAttack.total,n,t.modifiers.ai),s={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:oe(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),aiPlayers:c.map(l=>({name:l.name,note:l._line==="GK"?l.note_g:l._line==="MIL"?l.note_m:l.note_d,portrait:oe(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:n,isGoal:!1,homeScored:!1,text:""};if(a.shielded)s.text="🛡️ Bouclier IA !",t.log.push(s);else if(a.goal){t.homeScore++,s.isGoal=!0,s.homeScored=!0,s.text=`⚽ BUT ! (${t.pendingAttack.total} > ${n})`,t.log.push(s),t.modifiers.ai={},t.pendingAttack=null,ne(e,t,i),at(s.homePlayers,t.homeScore,t.aiScore,!0,()=>{Te(e,t,i,"ai-attack")});return}else s.text=`🧤 IA défend (${n} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.modifiers.ai={},t.pendingAttack=null,Te(e,t,i,"ai-attack")}function Te(e,t,i,d){if(t.round++,Zt(t)){he(e,t,i);return}if(d==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(n=>!n.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(a=>!a.used).length){he(e,t,i);return}t.phase="ai-attack",ne(e,t,i),setTimeout(()=>We(e,t,i),800);return}t.phase="attack",ne(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(n=>!n.used).length){Qt(e,t,i);return}t.phase="ai-attack",ne(e,t,i),setTimeout(()=>We(e,t,i),800)}}function Zt(e){const t=["MIL","ATT","GK","DEF"].some(d=>(e.homeTeam[d]||[]).some(c=>!c.used)),i=["MIL","ATT","GK","DEF"].some(d=>(e.aiTeam[d]||[]).some(c=>!c.used));return!t&&!i}function Qt(e,t,i){Zt(t)?he(e,t,i):(t.phase="attack",ne(e,t,i))}function an(e,t,i){const d=document.createElement("div");d.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=oe(e),n=oe(t),a=we[e.job]||"#555",s=we[t.job]||"#555",l=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;d.innerHTML=`
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
        <div style="width:80px;height:80px;border-radius:12px;background:${s};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${o}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(d);let r=!1;const p=()=>{r||(r=!0,d.remove(),i())};d.addEventListener("click",p),setTimeout(p,2e3)}function $e(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function Ct(e,t,i,d=null){if(t.phase!=="attack"){$e("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){$e(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const c=Object.values(t.homeTeam).flat().filter(p=>p.used),n=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!c.length){$e("Aucun joueur utilisé à remplacer");return}if(!n.length){$e("Aucun remplaçant disponible");return}let a=0,s=Math.max(0,n.findIndex(p=>p.cardId===d)),l=!1;const o=document.createElement("div");o.id="sub-overlay",o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function r(){var L,w,m,E,F,h;const p=c[a],g=n[s],f=Math.min(130,Math.round((window.innerWidth-90)/2)),x=Math.round(f*1.35),u=$=>`background:rgba(255,255,255,0.12);border:none;color:${$?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${$?"default":"pointer"};flex-shrink:0`;o.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${u(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${g?ue({...g,used:!1,boost:0},f,x):"<div>—</div>"}</div>
        <button id="in-down" style="${u(s>=n.length-1)}" ${s>=n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${n.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${u(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${p?ue({...p,used:!1,boost:0},f,x):"<div>—</div>"}</div>
        <button id="out-down" style="${u(a>=c.length-1)}" ${a>=c.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${c.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(L=o.querySelector("#sub-close"))==null||L.addEventListener("click",()=>o.remove()),(w=o.querySelector("#out-up"))==null||w.addEventListener("click",()=>{a>0&&(a--,r())}),(m=o.querySelector("#out-down"))==null||m.addEventListener("click",()=>{a<c.length-1&&(a++,r())}),(E=o.querySelector("#in-up"))==null||E.addEventListener("click",()=>{s>0&&(s--,r())}),(F=o.querySelector("#in-down"))==null||F.addEventListener("click",()=>{s<n.length-1&&(s++,r())});const y=($,T,D,G)=>{const P=o.querySelector("#"+$);if(!P)return;let Y=0;P.addEventListener("touchstart",X=>{Y=X.touches[0].clientY},{passive:!0}),P.addEventListener("touchend",X=>{const U=X.changedTouches[0].clientY-Y;if(Math.abs(U)<30)return;const V=T();U<0&&V<G-1?(D(V+1),r()):U>0&&V>0&&(D(V-1),r())},{passive:!0})};y("in-panel",()=>s,$=>s=$,n.length),y("out-panel",()=>a,$=>a=$,c.length),(h=o.querySelector("#sub-confirm"))==null||h.addEventListener("click",$=>{if($.preventDefault(),$.stopPropagation(),l)return;l=!0;const T=c[a],D=n[s];if(!T||!D)return;let G=null,P=-1;for(const[X,U]of Object.entries(t.homeTeam)){const V=(U||[]).findIndex(M=>M.cardId===T.cardId);if(V!==-1){G=X,P=V;break}}if(P===-1||!G){$e("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),o.remove();return}const Y={...D,_line:G,_col:T._col||0,used:!1,boost:0};t.homeTeam[G].splice(P,1,Y),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(D.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:T.name,firstname:T.firstname,note:ee(T,G),portrait:oe(T),job:T.job,country_code:T.country_code,rarity:T.rarity,clubName:T.clubName,clubLogo:T.clubLogo},inPlayer:{name:D.name,firstname:D.firstname,note:ee(D,G),portrait:oe(D),job:D.job,country_code:D.country_code,rarity:D.rarity,clubName:D.clubName,clubLogo:D.clubLogo},text:`🔄 ${D.firstname} ${D.name} remplace ${T.firstname} ${T.name}`}),o.remove(),an(T,D,()=>ne(e,t,i))})}document.body.appendChild(o),r()}function sn(e,t,i,d,c){var x,u;const n=(d.gcDefs||[]).find(y=>y.name===t),a=de[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[n==null?void 0:n.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",l={purple:"#b06ce0",light_blue:"#00d4ef"}[n==null?void 0:n.color]||"#b06ce0",o=(n==null?void 0:n.name)||t,r=(n==null?void 0:n.effect)||a.desc,p=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,g=a.icon||"⚡",f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",f.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${l};background:${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${l}66">
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
    </div>`,document.body.appendChild(f),(x=f.querySelector("#gc-back"))==null||x.addEventListener("click",()=>f.remove()),(u=f.querySelector("#gc-use"))==null||u.addEventListener("click",()=>{f.remove(),dn(e,t,i,d,c)})}function He(e,t,i,d,c,n){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function l(){var o,r;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(p=>{const g=p._line||p.job||"MIL",f={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[g]||"#555",x=ee(p,g)+(p.boost||0),u=s.find(y=>y.cardId===p.cardId);return`<div class="gc-pick-item" data-cid="${p.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${u?"#FFD700":"rgba(255,255,255,0.25)"};background:${f};overflow:hidden;cursor:pointer;flex-shrink:0;${p.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${p.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${x}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${g}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(o=a.querySelector("#gc-picker-close"))==null||o.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(p=>{p.addEventListener("click",()=>{const g=p.dataset.cid,f=e.find(u=>u.cardId===g);if(!f)return;const x=s.findIndex(u=>u.cardId===g);x>-1?s.splice(x,1):s.length<t&&s.push(f),l()})}),(r=a.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{a.remove(),n(s)})}l(),document.body.appendChild(a)}const ei={BOOST_STAT({value:e=2,target:t="home",count:i=1,roles:d=null},c,n,a){const s=t==="home"?c.homeTeam:c.aiTeam,l=Object.entries(s).flatMap(([o,r])=>!d||d.includes(o)?(r||[]).filter(p=>!p.used).map(p=>({...p,_line:o})):[]);return l.length?(He(l,i,e>0?`⚡ +${e} à ${i} joueur(s)`:`💀 -${Math.abs(e)} à ${i} joueur(s)`,n,c,o=>{o.forEach(r=>{for(const p of["GK","DEF","MIL","ATT"]){const g=(c.homeTeam[p]||[]).find(f=>f.cardId===r.cardId)||(c.aiTeam[p]||[]).find(f=>f.cardId===r.cardId);if(g){g.boost=(g.boost||0)+e;break}}}),c.log.push({text:`${e>0?"⚡":"💀"} ${Math.abs(e)>0?"+":""}${e} → ${o.map(r=>r.name).join(", ")}`,type:"info"}),ne(n,c,a)}),!0):(a.toast("Aucun joueur disponible","error"),!0)},DEBUFF_STAT(e,t,i,d){return ei.BOOST_STAT({...e,value:-Math.abs(e.value||2)},t,i,d)},GRAY_PLAYER({target:e="opponent",count:t=1,roles:i=null},d,c,n){const a=e==="opponent"?d.aiTeam:d.homeTeam,s=Object.entries(a).flatMap(([l,o])=>!i||i.includes(l)?(o||[]).filter(r=>!r.used).map(r=>({...r,_line:l})):[]);return s.length?(He(s,t,`❄️ Griser ${t} joueur(s)`,c,d,l=>{l.forEach(o=>{for(const r of Object.keys(d.aiTeam).concat(Object.keys(d.homeTeam))){const g=((e==="opponent"?d.aiTeam[r]:d.homeTeam[r])||[]).find(f=>f.cardId===o.cardId);if(g){g.used=!0;break}}}),d.log.push({text:`❄️ ${l.map(o=>o.name).join(", ")} grisé(s) !`,type:"info"}),ne(c,d,n)}),!0):(n.toast("Aucun joueur à griser","error"),!0)},REVIVE_PLAYER({count:e=1},t,i,d){const c=Object.entries(t.homeTeam).flatMap(([n,a])=>(a||[]).filter(s=>s.used).map(s=>({...s,_line:n})));return c.length?(He(c,e,"💫 Ressusciter",i,t,n=>{n.forEach(a=>{for(const s of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[s]||[]).find(o=>o.cardId===a.cardId);if(l){l.used=!1;break}}}),t.log.push({text:`💫 ${n.map(a=>a.name).join(", ")} ressuscité(s) !`,type:"info"}),ne(i,t,d)}),!0):(d.toast("Aucun joueur à ressusciter","error"),!0)},REMOVE_GOAL(e,t,i,d){return t.aiScore<=0?(d.toast("Aucun but adverse","error"),!1):(t.aiScore--,t.log.push({text:"🚫 But adverse retiré !",type:"info"}),!1)},ADD_GOAL_DRAW(e,t,i,d){return t.modifiers=t.modifiers||{},t.modifiers.home=t.modifiers.home||{},t.modifiers.home.addGoalOnDraw=!0,t.log.push({text:"⚽ +1 but si duel nul activé !",type:"info"}),!1},ADD_SUB({count:e=1},t,i,d){return t.maxSubs+=e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1}};function dn(e,t,i,d,c){if(d.usedGc.includes(e))return;d.usedGc.push(e);const n=(d.gcDefs||[]).find(s=>s.name===t);let a=!1;if(n!=null&&n.effect_type&&n.effect_type!=="CUSTOM"){const s=ei[n.effect_type];s?s(n.effect_params||{},d,i,c)||(a=!0):(c.toast(`Effet "${n.effect_type}" non implémenté`,"error"),a=!0)}else{switch(t){case"Double attaque":d.modifiers.home.doubleAttack=!0,d.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":d.modifiers.home.shield=!0,d.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const s=Object.entries(d.homeTeam).flatMap(([l,o])=>(o||[]).filter(r=>r.used).map(r=>({...r,_line:l})));s.length?(s[0].used=!1,d.log.push({text:`💫 ${s[0].name} ressuscité !`,type:"info"})):d.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":d.modifiers.ai.stolenNote=(d.modifiers.ai.stolenNote||0)+1,d.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const s=[...d.aiTeam.ATT||[],...d.aiTeam.MIL||[]].filter(l=>!l.used);if(s.length){const l=s.sort((o,r)=>ee(r,"ATT")-ee(o,"ATT"))[0];l.used=!0,d.log.push({text:`❄️ ${l.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":d.maxSubs++,d.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}a=!0}_.from("cards").delete().eq("id",e).then(()=>{}),a&&ne(i,d,c)}function ln(e,t,i){const d=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!d.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${d.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${we[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ee(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const n=c.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[a]||[]).find(l=>l.cardId===n);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),ne(e,t,i)})})}function at(e,t,i,d,c){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(o,r)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${r%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][r%8]}
    </div>`).join("");n.innerHTML=`
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${a}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${d?"BUT !":"BUT IA !"}
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
      <div style="width:50px;height:50px;border-radius:50%;background:${we[o.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${o.portrait?`<img src="${o.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(o.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(n);let s=!1;const l=()=>{s||(s=!0,n.remove(),setTimeout(()=>c(),50))};n.addEventListener("click",l),setTimeout(l,3500)}async function he(e,t,i){var r,p;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:d}=i,c=t.homeScore>t.aiScore,n=t.homeScore===t.aiScore,a=c?"victoire":n?"nul":"defaite",s=pi(t.mode,a);t.matchId&&await _.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?d.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const l={credits:(d.profile.credits||0)+s,matches_played:(d.profile.matches_played||0)+1};c?l.wins=(d.profile.wins||0)+1:n?l.draws=(d.profile.draws||0)+1:l.losses=(d.profile.losses||0)+1,await _.from("users").update(l).eq("id",d.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${c?"🏆":n?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${c?"Victoire !":n?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${s.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(o),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{o.remove(),le(),i.navigate("home")}),(p=document.getElementById("res-replay"))==null||p.addEventListener("click",()=>{o.remove(),le(),i.navigate("match",{matchMode:t.mode})})}function cn(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ae(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const pn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function un(e,t){const{state:i,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await st(e,t)}async function st(e,t){const{state:i,toast:d}=t,{data:c}=await _.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:n}=await _.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(c||[]).filter(o=>o.seller_id!==i.profile.id),s=n||[];s.filter(o=>o.status==="active").length,e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${a.length} carte(s) en vente · Solde : ${(i.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${s.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function l(o){const r=document.getElementById("mkt-content"),p=o==="buy"?a:s;if(p.length===0){r.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${o==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const g=o==="mine"?[...p].sort((f,x)=>f.status!==x.status?f.status==="active"?-1:1:new Date(x.listed_at)-new Date(f.listed_at)):p;r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${g.map(f=>{var m,E,F,h;const x=(m=f.card)==null?void 0:m.player;if(!x)return"";const u=x.job==="GK"?x.note_g:x.job==="DEF"?x.note_d:x.job==="MIL"?x.note_m:x.note_a,y=pn[x.rarity],L=(i.profile.credits||0)>=f.price,w=f.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${w?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${xn(x.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${y};flex-shrink:0">${u}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${x.firstname} ${x.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${x.country_code} · ${((E=x.clubs)==null?void 0:E.encoded_name)||"—"} · ${x.rarity} · ${x.job}</div>
            ${o==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((F=f.seller)==null?void 0:F.pseudo)||"—"}</div>`:w?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((h=f.buyer)==null?void 0:h.pseudo)||"—"} · ${f.sold_at?new Date(f.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(f.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${f.price.toLocaleString("fr")}</div>
            ${o==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${f.id}" ${L?"":"disabled"} style="margin-top:4px">${L?"Acheter":"Trop cher"}</button>`:w?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${f.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(f=>{f.addEventListener("click",()=>fn(f.dataset.buy,p,e,t))}),r.querySelectorAll("[data-cancel]").forEach(f=>{f.addEventListener("click",()=>gn(f.dataset.cancel,e,t))})}l("buy"),e.querySelectorAll(".mkt-tab").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const p=r===o;r.style.background=p?"var(--green)":"#fff",r.style.color=p?"#fff":"var(--gray-600)",r.style.borderColor=p?"var(--green)":"var(--gray-200)"}),l(o.dataset.tab)})})}async function fn(e,t,i,d){var p;const{state:c,toast:n}=d,a=t.find(g=>g.id===e);if(!a)return;const s=a.price,l=c.profile.credits||0,o=(p=a.card)==null?void 0:p.player;if(l<s){n("Crédits insuffisants","error");return}if(!confirm(`Acheter ${o==null?void 0:o.firstname} ${o==null?void 0:o.surname_encoded} pour ${s.toLocaleString("fr")} crédits ?`))return;const r=document.querySelector(`[data-buy="${e}"]`);r&&(r.disabled=!0,r.textContent="⏳");try{const{data:g,error:f}=await _.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(f)throw new Error(f.message);if(!(g!=null&&g.success))throw new Error((g==null?void 0:g.error)||"Achat impossible");c.profile.credits=l-s;const x=document.querySelector("[data-credits]")||document.querySelector(".credits-display");x&&(x.textContent=(l-s).toLocaleString("fr")+" cr."),n(`✅ ${o==null?void 0:o.surname_encoded} ajouté à ta collection !`,"success"),st(i,d)}catch(g){n("❌ "+g.message,"error"),r&&(r.disabled=!1,r.textContent="Acheter")}}async function gn(e,t,i){const{toast:d}=i,{data:c}=await _.from("market_listings").select("card_id").eq("id",e).single();await _.from("market_listings").update({status:"cancelled"}).eq("id",e),c&&await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id),d("Annonce retirée","success"),st(t,i)}function xn(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function mn(e,{state:t,navigate:i,toast:d}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await _.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${c&&c.length>0?c.map((n,a)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${n.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${a+1}</div>
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
  `}async function yn(e,{state:t,navigate:i,toast:d}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await _.from("matches").select("id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at").or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(n||[]).filter(r=>r.status==="finished"),l=(n||[]).filter(r=>r.status==="in_progress");function o(r){const p=r.home_id===c.id;p?r.home_score:r.away_score,p?r.away_score:r.home_score;const g=r.winner_id===c.id,f=r.home_score===r.away_score&&r.status==="finished",x=r.status!=="finished"?"…":f?"N":g?"V":"D",u=r.status!=="finished"||f?"#888":g?"#1A6B3C":"#c0392b";let y=a[r.mode]||r.mode;r.away_id===null&&!y.startsWith("IA")&&(y="IA");let L="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(L=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const w=new Date(r.created_at),m=w.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+w.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),E=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${y}${L}</div>
        <div style="font-size:11px;color:var(--gray-600)">${m}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${E}</span>
        <span style="background:${u};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${x}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(n||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${l.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${l.map(o).join("")}
        </div>`:""}

      ${s.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${s.map(o).join("")}
        </div>`:""}

      ${(n||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const Q={user:null,profile:null,page:"home",params:{}};function je(e,t="info",i=3e3){const d=document.getElementById("toast");d&&(d.textContent=e,d.className=`show ${t}`,clearTimeout(d._t),d._t=setTimeout(()=>{d.className=""},i))}function hn(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Xe(){document.getElementById("modal-overlay").classList.add("hidden")}async function Se(){if(!Q.user)return;const{data:e}=await _.from("users").select("*").eq("id",Q.user.id).single();e&&(Q.profile=e)}const dt="mw_theme";function Re(){return localStorage.getItem(dt)||"light"}function vn(e){var t;localStorage.setItem(dt,e),Je(e),(t=Q.profile)!=null&&t.id&&_.from("users").update({theme:e}).eq("id",Q.profile.id).then(()=>{})}function Je(e){document.documentElement.setAttribute("data-theme",e)}function Be(e,t={}){Q.page=e,Q.params=t,ti()}async function ti(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===Q.page)});const t=document.getElementById("nav-credits");t&&Q.profile&&(t.textContent=`💰 ${(Q.profile.credits||0).toLocaleString("fr")}`);const i={state:Q,navigate:Be,toast:je,openModal:hn,closeModal:Xe,refreshProfile:Se};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Q.page){case"home":await $t(e,i);break;case"collection":await gi(e,i);break;case"decks":await Ke(e,i);break;case"boosters":await Ci(e,i);break;case"match":await Ji(e,i);break;case"market":await un(e,i);break;case"rankings":await mn(e,i);break;case"matches":await yn(e,i);break;default:await $t(e,i)}}function bn(){const e=document.getElementById("app"),t=Q.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(d=>{d.addEventListener("click",c=>{c.preventDefault(),Be(d.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Be("home")),document.getElementById("nav-credits").addEventListener("click",()=>Be("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const c=Re()==="dark"?"light":"dark";vn(c),jt(c)}),jt(Re())}function jt(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function wn(){Je(Re()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&Xe()}),document.getElementById("modal-close").addEventListener("click",Xe);const{data:{session:e}}=await _.auth.getSession();if(!e){Bt(),wt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:je});return}Q.user=e.user,await Se(),Bt();try{const{data:t}=await _.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(d=>{i[d.formation]=d.links}),si(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!Q.profile){di(document.getElementById("app"),{state:Q,navigate:async()=>{await Se(),St()},toast:je,refreshProfile:Se});return}Q.profile.theme&&Q.profile.theme!==Re()&&(localStorage.setItem(dt,Q.profile.theme),Je(Q.profile.theme)),St(),_.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(Q.user=null,Q.profile=null,document.getElementById("app").innerHTML="",wt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:je}))})}function St(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",bn(),ti()}function Bt(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}wn();
