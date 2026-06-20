import{s as k,F as Je,b as Te,c as Tt,l as fe,d as Wt}from"./formation-links-CDBKB_z4.js";function ft(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(l=>{l.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(p=>p.classList.remove("active")),l.classList.add("active"),document.getElementById("tab-login").style.display=l.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=l.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const l=document.getElementById("login-email").value.trim(),p=document.getElementById("login-password").value,n=document.getElementById("login-error");if(n.textContent="",!l||!p){n.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:r}=await k.auth.signInWithPassword({email:l,password:p});if(a.textContent="Se connecter",a.disabled=!1,r){n.textContent=r.message.includes("Invalid")?"Email ou mot de passe incorrect.":r.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",l=>{l.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const l=document.getElementById("reg-email").value.trim(),p=document.getElementById("reg-password").value,n=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!l||!p||!n){a.textContent="Remplissez tous les champs.";return}if(p.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(p!==n){a.textContent="Les mots de passe ne correspondent pas.";return}const r=document.getElementById("reg-btn");r.textContent="Création…",r.disabled=!0;const{error:c}=await k.auth.signUp({email:l,password:p});if(r.textContent="Créer mon compte",r.disabled=!1,c){a.textContent=c.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=l})}function Xt(e,{state:t,navigate:i,toast:l,refreshProfile:p}){let n="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function r(){var g;const d=document.getElementById("logo-preview"),s=document.getElementById("logo-initials"),o=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",f=o.trim().split(" ").filter(Boolean),u=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():o.slice(0,2).toUpperCase();d&&(d.style.background=a,d.style.borderColor=n),s&&(s.textContent=u,s.style.color=n)}document.getElementById("color1").addEventListener("input",d=>{n=d.target.value,document.getElementById("swatch1").style.background=n,r()}),document.getElementById("color2").addEventListener("input",d=>{a=d.target.value,document.getElementById("swatch2").style.background=a,r()});function c(d){document.querySelectorAll(".setup-step").forEach(s=>s.classList.remove("active")),document.getElementById(`step-${d}`).classList.add("active"),document.getElementById("step-num").textContent=d,document.getElementById("progress-fill").style.width=`${Math.round(d/3*100)}%`,d===3&&r()}document.getElementById("step1-next").addEventListener("click",async()=>{const d=document.getElementById("setup-pseudo").value.trim(),s=document.getElementById("step1-error");if(s.textContent="",d.length<3){s.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:o}=await k.from("users").select("id").eq("pseudo",d).maybeSingle();if(o){s.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const d=document.getElementById("setup-club").value.trim(),s=document.getElementById("step2-error");if(s.textContent="",d.length<2){s.textContent="Nom trop court (min. 2 caractères).";return}const{data:o}=await k.from("users").select("id").eq("club_name",d).maybeSingle();if(o){s.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const d=document.getElementById("setup-pseudo").value.trim(),s=document.getElementById("setup-club").value.trim(),o=document.getElementById("step3-error"),f=document.getElementById("step3-finish");o.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:u}=await k.from("users").insert({id:t.user.id,pseudo:d,club_name:s,club_color1:n,club_color2:a,credits:1e4});if(u)throw u;await Jt(t.user.id),await p(),l(`Bienvenue ${d} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(u){o.textContent=u.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function Jt(e){const{data:t}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,l=i.filter(c=>c.job==="GK"),p=i.filter(c=>c.job!=="GK"),n=[];for(let c=0;c<5;c++){let d=[];if(c===0&&l.length>0){const s=l[Math.floor(Math.random()*l.length)];d.push(s);const o=gt([...p]).slice(0,3);d.push(...o)}else d=gt([...i]).slice(0,4);d.forEach(s=>{n.push({owner_id:e,player_id:s.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(c=>{n.push({owner_id:e,card_type:"game_changer",gc_type:c})});const r=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];n.push({owner_id:e,card_type:"formation",formation:r[Math.floor(Math.random()*r.length)]}),n.length>0&&await k.from("cards").insert(n),await k.from("users").update({first_booster_opened:!0}).eq("id",e)}function gt(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}async function xt(e,{state:t,navigate:i,toast:l}){var a;const p=t.profile;if(!p)return;const{data:n}=await k.from("matches").select("id,home_score,away_score,status,mode,winner_id,created_at").or(`home_id.eq.${p.id},away_id.eq.${p.id}`).eq("status","finished").order("created_at",{ascending:!1}).limit(3);e.innerHTML=`
  <div class="page">
    <div class="page-body">

      <!-- Bandeau pseudo (couleurs du club) -->
      <div class="hero hero-compact" style="background:${p.club_color1};border:2px solid ${p.club_color2}">
        <button class="nav-rankings-btn" id="nav-rankings" title="Classement">
          <img src="/manager-wars/icons/badge-trophy.png" alt="Classement">
        </button>
        <div class="info">
          <h3 style="margin:0">${p.pseudo}</h3>
          <div class="level">Niveau ${p.level} · ${p.club_name}</div>
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
          ${n.map(r=>{const c=r.winner_id===p.id,d=r.home_score===r.away_score,s=d?"N":c?"V":"D",o=d?"#888":c?"#1A6B3C":"#c0392b",f={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat"}[r.mode]||r.mode,g=new Date(r.created_at).toLocaleDateString("fr",{month:"short",day:"numeric"});return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
              <div>
                <div style="font-size:13px;font-weight:600">${f}</div>
                <div style="font-size:11px;color:var(--gray-600)">${g}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <span style="font-size:14px;font-weight:700">${r.home_score} - ${r.away_score}</span>
                <span style="background:${o};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${s}</span>
              </div>
            </div>`}).join("")}
        </div>
      </div>`:""}

      <!-- Logout -->
      <div style="text-align:center;padding:12px 0;display:flex;flex-direction:column;gap:8px;align-items:center">
        <button class="btn btn-ghost btn-sm" id="logout-btn" style="color:var(--gray-600)">Déconnexion</button>
        ${p.is_admin?`
        <a href="/manager-wars/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:6px 16px;border-radius:8px">
          ⚙️ Admin Editor
        </a>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(r=>{r.addEventListener("click",c=>{c.preventDefault(),i(r.dataset.nav)})}),(a=document.getElementById("nav-rankings"))==null||a.addEventListener("click",()=>i("rankings")),e.querySelectorAll("[data-action]").forEach(r=>{r.addEventListener("click",()=>{r.classList.add("tapped"),setTimeout(()=>r.classList.remove("tapped"),200);const c=r.dataset.action;if(c==="match-ai"){Qt(i);return}if(c==="match-random"){i("match",{matchMode:"random"});return}l("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await k.auth.signOut(),window.location.reload()})}function Qt(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${t.map(p=>`
            <div class="action-card" data-mode="${p.mode}" style="cursor:pointer">
              <div class="icon">${p.icon}</div>
              <div class="label">${p.label}</div>
              <div class="sub">${p.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const l=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",l),i.addEventListener("click",p=>{p.target===i&&l()}),i.querySelectorAll("[data-mode]").forEach(p=>{p.addEventListener("click",()=>{l(),e("match",{matchMode:p.dataset.mode})})})}const de={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Q(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const mt=["ATT","MIL","DEF","GK"];function It(e){let t=0;const i=e.length;for(let l=0;l<i;l++)for(let p=l+1;p<i;p++){const n=e[l],a=e[p];if(!n||!a)continue;const r=n._col!==void 0&&a._col!==void 0&&n._col===a._col,c=n._col!==void 0&&a._col!==void 0&&Math.abs(n._col-a._col)===1,d=mt.indexOf(n._line),s=mt.indexOf(a._line),o=Math.abs(d-s)===1;(n._line===a._line&&c||r&&o)&&(n.country_code&&a.country_code&&n.country_code===a.country_code&&t++,n.club_id&&a.club_id&&n.club_id===a.club_id&&t++)}return t}function Qe(e,t={}){const i=e.reduce((n,a)=>{const r=a._line||a.job;return n+(Number(r==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),l=It(e);let p=i+l;return t.doubleAttack&&(p*=2),t.stolenNote&&(p-=t.stolenNote),{base:i,links:l,total:Math.max(0,p)}}function Ze(e,t={}){const i=e.reduce((n,a)=>{const r=a._line||a.job;let c=0;return r==="GK"?c=Number(a.note_g)||0:r==="MIL"?c=Number(a.note_m)||0:c=Number(a.note_d)||0,n+c+(a.boost||0)},0),l=It(e);let p=i+l;return t.stolenNote&&(p-=t.stolenNote),{base:i,links:l,total:Math.max(0,p)}}function et(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Lt(e,t,i="easy"){const l=e.filter(a=>!a.used);if(!l.length)return[];const p=[...l].sort((a,r)=>{const c=t==="attack"?Q(a,"ATT"):a._line==="GK"?Q(a,"GK"):Q(a,"DEF");return(t==="attack"?Q(r,"ATT"):r._line==="GK"?Q(r,"GK"):Q(r,"DEF"))-c});let n=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return p.slice(0,Math.min(n,p.length,3))}function Zt(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Mt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Be={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Le=["GK","DEF","MIL","ATT"],ei=["Tous","GK","DEF","MIL","ATT"],ti={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},tt={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function zt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ke(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Pe(e,t=""){var o,f;const i=e.player;if(!i)return"";const l=i.job||"ATT",p=Be[l],n=Mt[i.rarity]||"#ccc",a=ke(i,l),r=i.job2?ke(i,i.job2):null,c=i.job2?Be[i.job2]:null,d=zt(i),s=tt[i.country_code]||i.country_code||"";return`
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
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${p}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${p}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${a}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${r!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${c}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${r}</text>
        </svg>`:""}
      </div>
      <!-- Portrait -->
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${d?`<img src="${d}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${i.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${s}</div>
        ${(o=i.clubs)!=null&&o.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=i.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function yt(e){const t=e.job||"ATT",i=ke(e,t),l=tt[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${l}</div>
      </div>
    </div>
  </div>`}async function ii(e,t){const{state:i,navigate:l,toast:p,openModal:n,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await k.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:c}=await k.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),d=(r||[]).filter(_=>_.card_type==="player"&&_.player),s=(r||[]).filter(_=>_.card_type==="game_changer"),o=(r||[]).filter(_=>_.card_type==="formation"),{data:f}=await k.from("gc_definitions").select("name,gc_type,color,effect,image_url"),u={};(f||[]).forEach(_=>{u[_.name]=_});const g=Object.keys(Je),m=Object.keys(de),b={};d.forEach(_=>{const y=_.player.id;b[y]=(b[y]||0)+1}),new Set(Object.keys(b).map(_=>String(_)));const L=new Set(o.map(_=>_.formation)),w=new Set(s.map(_=>_.gc_type));let x="player",A="Tous",G="",v=!1;function E(){return[...d].sort((_,y)=>{const j=Le.indexOf(_.player.job),S=Le.indexOf(y.player.job);return j!==S?j-S:(_.player.surname_encoded||"").localeCompare(y.player.surname_encoded||"")})}function I(){return[...c||[]].sort((_,y)=>{const j=Le.indexOf(_.job),S=Le.indexOf(y.job);return j!==S?j-S:(_.surname_encoded||"").localeCompare(y.surname_encoded||"")})}function h(){return E().filter(_=>{const y=_.player,j=A==="Tous"||y.job===A,S=!G||`${y.firstname} ${y.surname_encoded}`.toLowerCase().includes(G);return j&&S})}function $(){return I().filter(_=>{const y=A==="Tous"||_.job===A,j=!G||`${_.firstname} ${_.surname_encoded}`.toLowerCase().includes(G);return y&&j})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${x==="player"?"var(--green)":"transparent"};
        color:${x==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${d.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${x==="formation"?"var(--green)":"transparent"};
        color:${x==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
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
  </div>`;function T(){const _=document.getElementById("col-filters");_&&(x==="player"?(_.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${G}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${ei.map(y=>`
            <button class="filter-btn" data-job="${y}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${y===A?"var(--green)":"var(--gray-200)"};
                background:${y===A?"var(--green)":"#fff"};
                color:${y===A?"#fff":"var(--gray-600)"}">
              ${y}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${v?"var(--yellow)":"var(--gray-200)"};
              background:${v?"var(--yellow)":"#fff"};
              color:${v?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${v?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",y=>{G=y.target.value.toLowerCase(),B()}),e.querySelectorAll(".filter-btn").forEach(y=>{y.addEventListener("click",()=>{A=y.dataset.job,T(),B()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{v=!v,T(),B()})):(_.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${v?"var(--yellow)":"var(--gray-200)"};
              background:${v?"var(--yellow)":"#fff"};
              color:${v?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${v?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{v=!v,T(),B()})))}function B(){const _=document.getElementById("col-grid");_&&(x==="player"?M(_):x==="formation"?P(_):H(_))}function z(_,y,j,S,D){D=D||"#7a28b8";const O=document.getElementById("col-grid"),R=document.getElementById("col-big");if(!O||!R)return;var X=0;function Y(){R.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+y(_[X])+"</div>";var W=R.querySelector("[data-card-id],[data-form-id],[data-gc-id]");W&&W.addEventListener("click",function(){S(_[X])}),requestAnimationFrame(function(){var U=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!U||!R)){var ee=R.clientHeight-8,oe=R.clientWidth-24,re=U.offsetHeight,ae=U.offsetWidth;if(re>0&&ae>0&&ee>40){var se=Math.min(ee/re,oe/ae,1);U.style.transform="scale("+se.toFixed(3)+")",U.style.transformOrigin="top center"}}}),O.innerHTML=_.map(function(U,ee){return'<div class="col-mini-item" data-idx="'+ee+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(ee===X?D:"transparent")+';transition:border-color .15s;overflow:hidden">'+j(U,ee===X)+"</div>"}).join(""),O.querySelectorAll(".col-mini-item").forEach(function(U){U.addEventListener("click",function(){X=Number(U.dataset.idx),Y(),U.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Y()}function F(_){var y=.54,j=Math.round(140*y),S=Math.round(310*y),D;if(!_||_._fake){var O=_?_.player:null;if(!O)return"";D=yt(O)}else D=Pe(_,"");return'<div style="width:'+j+"px;height:"+S+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+y+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+D+"</div></div>"}function C(_,y,j){y=y||100,j=j||140;var S=Te[_]||{},D={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},O=Math.max(3,Math.round(y*.06)),R=Object.entries(S).map(function(Y){var W=Y[0],U=Y[1],ee=W.replace(/\d+$/,""),oe=D[ee]||"#888",re=Math.round(U.x*y),ae=Math.round(U.y*j);return'<circle cx="'+re+'" cy="'+ae+'" r="'+O+'" fill="'+oe+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),X=Math.max(1,Math.round(y/50));return'<svg viewBox="0 0 '+y+" "+j+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+y+'" height="'+j+'" fill="#1A6B3C"/><rect x="'+Math.round(y*.2)+'" y="'+Math.round(j*.02)+'" width="'+Math.round(y*.6)+'" height="'+Math.round(j*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+X+'"/><line x1="0" y1="'+Math.round(j*.5)+'" x2="'+y+'" y2="'+Math.round(j*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+X+'"/><ellipse cx="'+Math.round(y*.5)+'" cy="'+Math.round(j*.5)+'" rx="'+Math.round(y*.18)+'" ry="'+Math.round(j*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+X+'"/><rect x="'+Math.round(y*.2)+'" y="'+Math.round(j*.82)+'" width="'+Math.round(y*.6)+'" height="'+Math.round(j*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+X+'"/>'+R+"</svg>"}function N(_,y,j){var S=j>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+j+"</div>":"",D=y?'data-form-id="'+y.id+'"':"",O=_.length>7?14:_.length>5?16:19,R=!!y;return"<div "+D+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(R?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(R?"":"filter:grayscale(1);opacity:0.5")+'">'+S+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(R?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+O+"px;font-weight:900;color:"+(R?"#1A6B3C":"#aaa")+';line-height:1">'+_+'</div></div><div style="flex:1;overflow:hidden;background:'+(R?"#1A6B3C":"#ccc")+'">'+C(_,140,220)+"</div></div>"}function q(_,y){var j=.54,S=Math.round(140*j),D=Math.round(305*j),O=Math.round(D*.22),R=D-O,X=_.length>7?5:7,Y=C(_,S,R),W=y?"1.5px solid #2a7a40":"1px solid #ddd",U=y?"":"filter:grayscale(1);opacity:0.45;",ee=y?"#1A6B3C":"#bbb",oe="#fff";return'<div style="width:'+S+"px;height:"+D+"px;border-radius:6px;border:"+W+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+U+'"><div style="height:'+O+"px;background:"+ee+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+X+"px;font-weight:900;color:"+oe+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(S-4)+'px">'+_+'</span></div><div style="height:'+R+'px;overflow:hidden;flex-shrink:0">'+Y+"</div></div>"}function M(_){if(v){const y=$();if(!y.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const j=y.map(S=>d.find(D=>D.player.id===S.id)||{_fake:!0,player:S,id:"fake-"+S.id});z(j,S=>S._fake?yt(S.player):Pe(S,""),S=>S._fake?F({player:S.player,id:"x",_fake:!0}):F(S),S=>{S._fake||ht(S,d,b,t)},"#1A6B3C")}else{const y=h();if(!y.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const j={},S=[];y.forEach(D=>{j[D.player.id]||(j[D.player.id]=!0,S.push(D))}),z(S,D=>{const O=b[D.player.id]||1,R=O>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${O}</div>`:"",Y=d.filter(W=>W.player.id===D.player.id&&W.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Pe(D,R+Y)},D=>F(D),D=>ht(D,d,b,t),"#1A6B3C")}}function P(_){const y=v?g:[...L];if(!y.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const j=y.map(S=>({formation:S,card:o.find(D=>D.formation===S)||null,owned:L.has(S)}));z(j,({formation:S,card:D,owned:O})=>N(S,O?D:null,O?o.filter(R=>R.formation===S).length:0),({formation:S,owned:D})=>q(S,D),({card:S,owned:D})=>{D&&S&&oi(S,o,t,n)},"#1A6B3C")}function H(_){const y=Object.keys(u),j=v?y.length?y:m:[...w];if(!j.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const S=j.map(D=>({type:D,gc:de[D]||{icon:"⚡",desc:""},def:u[D]||null,owned:w.has(D),card:s.find(O=>O.gc_type===D)||null}));z(S,({type:D,gc:O,def:R,owned:X,card:Y})=>{const W=X?s.filter(K=>K.gc_type===D).length:0,U=W>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${W}</div>`:"",ee=(R==null?void 0:R.gc_type)==="ultra_game_changer",oe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},re={purple:"#b06ce0",light_blue:"#00d4ef"},ae=oe[R==null?void 0:R.color]||oe.purple,se=re[R==null?void 0:R.color]||re.purple,ce=(R==null?void 0:R.effect)||O.desc||"",we=R!=null&&R.image_url?`/manager-wars/icons/${R.image_url}`:null;return X&&Y?`<div data-gc-id="${Y.id}" data-gc-type="${D}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${se};background:${ae};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${se}66;cursor:pointer">
          ${U}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${D.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${D}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${ee?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${we?`<img src="${we}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${O.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${ce.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${D}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${O.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:D,gc:O,def:R,owned:X})=>X?(()=>{const Y=Math.round(75.60000000000001),W=Math.round(310*.54),U=Math.round(W*.65),ee=Math.round(W*.18),oe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},re={purple:"#9b59b6",light_blue:"#00bcd4"},ae=oe[R==null?void 0:R.color]||oe.purple,se=re[R==null?void 0:R.color]||re.purple,ce=R!=null&&R.image_url?`/manager-wars/icons/${R.image_url}`:null;return`<div style="width:${Y}px;height:${W}px;border-radius:8px;background:${ae};border:1px solid ${se};display:flex;flex-direction:column;overflow:hidden"><div style="height:${ee}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Y-6}px">${D}</span></div><div style="height:${U}px;display:flex;align-items:center;justify-content:center">${ce?`<img src="${ce}" style="max-width:${Y-8}px;max-height:${U-4}px;object-fit:contain">`:`<span style="font-size:24px">${O.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((R==null?void 0:R.effect)||O.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const Y=Math.round(75.60000000000001),W=Math.round(310*.54);return`<div style="width:${Y}px;height:${W}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${O.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${D}</span></div>`})(),({type:D,owned:O,def:R})=>{O&&ni(D,R,n)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(_=>{_.addEventListener("click",()=>{x=_.dataset.tab,A="Tous",G="",v=!1,e.querySelectorAll(".col-tab-btn").forEach(y=>{const j=y.dataset.tab===x;y.style.borderBottomColor=j?"var(--green)":"transparent",y.style.color=j?"var(--green)":"var(--gray-600)"}),T(),B()})}),T(),B()}function ni(e,t,i){const l=de[e]||{icon:"⚡",desc:"Effet spécial."},p=(t==null?void 0:t.gc_type)==="ultra_game_changer",n={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},r=n[t==null?void 0:t.color]||n.purple,c=a[t==null?void 0:t.color]||a.purple,d=(t==null?void 0:t.name)||e,s=(t==null?void 0:t.effect)||l.desc,o=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${r};border-radius:16px;border:2px solid ${c};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${p?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${d}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${o?`<img src="${o}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${l.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${s}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const _e=1e3;function oi(e,t,i,l){var m,b,L;const{state:p,toast:n,closeModal:a,navigate:r,refreshProfile:c}=i,d=e.formation,s={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function o(){const w=Te[d]||{},x=Je[d]||[],A=290,G=360,v=20;function E(h){const $=w[h];return $?{x:$.x*A,y:$.y*G}:null}let I=`<svg width="${A}" height="${G}" viewBox="0 0 ${A} ${G}" xmlns="http://www.w3.org/2000/svg">`;for(const[h,$]of x){const T=E(h),B=E($);!T||!B||(I+=`<line x1="${T.x}" y1="${T.y}" x2="${B.x}" y2="${B.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const h of Object.keys(w)){const $=E(h);if(!$)continue;const T=h.replace(/\d+/,""),B=s[T]||"#555";I+=`<circle cx="${$.x}" cy="${$.y}" r="${v}" fill="${B}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,I+=`<text x="${$.x}" y="${$.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${T}</text>`}return I+="</svg>",I}const f=t.filter(w=>w.formation===d),u=f.length,g=!e.is_for_sale;l(`Formation ${d}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${o()}
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
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${u-1} carte${u-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${u<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${g?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(m=document.getElementById("direct-sell-form-btn"))==null||m.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${d} pour ${_e.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const w=f.find(A=>!A.is_for_sale)||f[0];if(!w){n("Aucune carte à vendre","error");return}const{error:x}=await k.from("cards").delete().eq("id",w.id);if(x){n(x.message,"error");return}await k.from("users").update({credits:(p.profile.credits||0)+_e}).eq("id",p.profile.id),await c(),n(`+${_e.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),r("collection")}),(b=document.getElementById("market-sell-form-btn"))==null||b.addEventListener("click",async()=>{const w=parseInt(document.getElementById("sell-price-form").value);if(!w||w<1){n("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:w}).eq("id",e.id),await k.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:w}),n("Carte mise en vente sur le marché !","success"),a(),r("collection")}),(L=document.getElementById("cancel-sell-form-btn"))==null||L.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),n("Annonce retirée","success"),a(),r("collection")})}async function ht(e,t,i,l){var I,h,$,T,B,z;const{state:p,toast:n,openModal:a,closeModal:r,navigate:c,refreshProfile:d}=l,s=e.player,o=t.filter(F=>F.player.id===s.id),f=o.length,u=ti[s.rarity]||1e3,g=s.rarity!=="legende",m=zt(s),b=ke(s,s.job),L=s.job2?ke(s,s.job2):null,w=Be[s.job]||"#1A6B3C",x=s.job2?Be[s.job2]:null,A=Mt[s.rarity]||"#ccc",G=tt[s.country_code]||s.country_code||"",{data:v}=await k.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",s.id).order("transferred_at",{ascending:!0}),E=v&&v.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${v.map(F=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${F.club_name} <span style="color:var(--gray-600)">(${F.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${F.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${F.source==="booster"?"Booster":F.price?F.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";a(`${s.firstname} ${s.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${A};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${s.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(s.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${w}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${w}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${b}</text>
            </svg>
            ${L!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${x}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${L}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${m?`<img src="${m}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${s.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${G}</div>
            ${(I=s.clubs)!=null&&I.logo_url?`<img src="${s.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((h=s.clubs)==null?void 0:h.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${A}">${s.rarity.toUpperCase()}</div>
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
          <div style="font-weight:700;font-size:18px">×${f}</div>
        </div>
      </div>
    </div>
    ${E}

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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),($=document.getElementById("close-detail"))==null||$.addEventListener("click",r),(T=document.getElementById("direct-sell-btn"))==null||T.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${s.surname_encoded} pour ${u.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const F=o.find(N=>!N.is_for_sale)||o[0];if(!F){n("Aucune carte à vendre","error");return}const{error:C}=await k.from("cards").delete().eq("id",F.id);if(C){n(C.message,"error");return}await k.from("users").update({credits:(p.profile.credits||0)+u}).eq("id",p.profile.id),await d(),n(`+${u.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),c("collection")}),(B=document.getElementById("market-sell-btn"))==null||B.addEventListener("click",async()=>{const F=parseInt(document.getElementById("sell-price").value);if(!F||F<1){n("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:F}).eq("id",e.id),await k.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:F}),n("Carte mise en vente sur le marché !","success"),r(),c("collection")}),(z=document.getElementById("cancel-sell-btn"))==null||z.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),n("Annonce retirée","success"),r(),c("collection")})}const Fe={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},pe={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Re(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Ct(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function jt(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function ri(e,t=44,i=58){var u;const l=e?Re(e):null,p=e?jt(e):null,n=Ct(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",r=pe[a]||"#555",c={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",d=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,s=Math.round(i*.19),o=Math.round(i*.25),f=i-s-o;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${c};background:${r};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${s}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${l?`<img src="${l}" style="position:absolute;top:${s}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${n?`<img src="${n}" style="width:${o+2}px;height:${o-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${o-4}px">🌍</span>`}
      <span style="font-size:${o-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${d}</span>
      ${p?`<img src="${p}" style="width:${o-4}px;height:${o-4}px;object-fit:contain">`:(u=e==null?void 0:e.clubs)!=null&&u.encoded_name?`<span style="font-size:${Math.max(4,o-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function He(e,t){const{state:i,navigate:l,toast:p}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await k.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!a)return;const{data:r,error:c}=await k.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(c){p(c.message,"error");return}p("Deck créé !","success"),vt(r.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>vt(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const r=prompt("Nouveau nom :",a.dataset.name);if(!r||r===a.dataset.name)return;const{error:c}=await k.from("decks").update({name:r}).eq("id",a.dataset.rename);if(c){p(c.message,"error");return}p("Deck renommé !","success"),He(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await k.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:r}=await k.from("decks").delete().eq("id",a.dataset.delete);if(r){p(r.message,"error");return}p("Deck supprimé.","success"),He(e,t)})})}async function vt(e,t,i){const{state:l,toast:p}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await k.from("decks").select("*").eq("id",e).single(),{data:a}=await k.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",l.profile.id),r=(a||[]).filter(u=>u.card_type==="player"&&u.player),c=(a||[]).filter(u=>u.card_type==="formation"),d=c.map(u=>u.formation).filter(Boolean),{data:s}=await k.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let o=n.formation||"4-4-2";d.length>0&&!d.includes(o)&&(o=d[0]);const f={deckId:e,name:n.name,formation:o,formationCardId:n.formation_card_id,slots:{},subs:[],playerCards:r,formationCards:c,availableFormations:d};(s||[]).forEach(u=>{u.is_starter?f.slots[u.position]=u.card_id:f.subs.includes(u.card_id)||f.subs.push(u.card_id)}),he(t,f,i)}function he(e,t,i){var c;const{navigate:l}=i;Fe[t.formation];const p=bt(t.formation),n=p.filter(d=>t.slots[d]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(Fe),r=t.subs.map(d=>t.playerCards.find(s=>s.id===d)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${a.map(d=>`<option value="${d}" ${d===t.formation?"selected":""}>${d}</option>`).join("")}
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
        ${r.map(d=>{const s=d.player;return`<div style="position:relative;flex-shrink:0">
            ${ri(s,44,58)}
            <button data-remove-sub="${d.id}"
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
  </div>`,ai(e,t,p,i),document.getElementById("builder-back").addEventListener("click",()=>l("decks")),document.getElementById("formation-select").addEventListener("change",d=>{t.formation=d.target.value;const s=bt(t.formation),o={};s.forEach(f=>{t.slots[f]&&(o[f]=t.slots[f])}),t.slots=o,he(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>li(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(d=>{d.addEventListener("click",()=>{t.subs=t.subs.filter(s=>s!==d.dataset.removeSub),he(e,t,i)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{di(t,e,i)})}function ai(e,t,i,l){const p=e.querySelector("#deck-field");if(!p)return;const n=Te[t.formation]||{},a=Tt(t.formation)||[],r={};for(const L of i){const w=t.slots[L],x=w?t.playerCards.find(A=>A.id===w):null;r[L]=x?x.player:null}const c=300,d=300,s=48,o=64,f=13,u=16,g=38;function m(L){const w=n[L];return w?{x:w.x*c,y:w.y*d}:null}let b="";for(const[L,w]of a){const x=m(L),A=m(w);if(!x||!A)continue;const G=r[L]?{...r[L],club_id:r[L].club_id,country_code:r[L].country_code,rarity:r[L].rarity}:null,v=r[w]?{...r[w],club_id:r[w].club_id,country_code:r[w].country_code,rarity:r[w].rarity}:null,E=fe(G,v);E==="#ff3333"||E==="#cc2222"?b+=`<line x1="${x.x.toFixed(1)}" y1="${x.y.toFixed(1)}" x2="${A.x.toFixed(1)}" y2="${A.y.toFixed(1)}" stroke="${E}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(b+=`<line x1="${x.x.toFixed(1)}" y1="${x.y.toFixed(1)}" x2="${A.x.toFixed(1)}" y2="${A.y.toFixed(1)}" stroke="${E}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,b+=`<line x1="${x.x.toFixed(1)}" y1="${x.y.toFixed(1)}" x2="${A.x.toFixed(1)}" y2="${A.y.toFixed(1)}" stroke="${E}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const L of i){const w=m(L);if(!w)continue;const x=r[L],A=L.replace(/\d+/,""),G=pe[A]||"#555",v=(w.x-s/2).toFixed(1),E=(w.y-o/2).toFixed(1),I={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[x==null?void 0:x.rarity]||"#aaa";if(x){const h=Re(x),$=jt(x),T=Ct(x.country_code),B=Number(A==="GK"?x.note_g:A==="DEF"?x.note_d:A==="MIL"?x.note_m:x.note_a)||0,z=o-f-u;b+=`<defs><clipPath id="dcp-${L}"><rect x="${v}" y="${(w.y-o/2+f).toFixed(1)}" width="${s}" height="${z}"/></clipPath></defs>`,b+=`<rect x="${v}" y="${E}" width="${s}" height="${o}" rx="5" fill="${G}"/>`,h&&(b+=`<image href="${h}" x="${v}" y="${(w.y-o/2+f).toFixed(1)}" width="${s}" height="${z}" clip-path="url(#dcp-${L})" preserveAspectRatio="xMidYMin slice"/>`),b+=`<rect x="${v}" y="${E}" width="${s}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,b+=`<text x="${w.x.toFixed(1)}" y="${(w.y-o/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(x.surname_encoded||"").slice(0,9)}</text>`;const F=(w.y+o/2-u).toFixed(1);b+=`<rect x="${v}" y="${F}" width="${s}" height="${u}" fill="rgba(255,255,255,0.93)"/>`,T&&(b+=`<image href="${T}" x="${(w.x-21).toFixed(1)}" y="${(w.y+o/2-u+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),b+=`<text x="${w.x.toFixed(1)}" y="${(w.y+o/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${B}</text>`,$&&(b+=`<image href="${$}" x="${(w.x+s/2-14).toFixed(1)}" y="${(w.y+o/2-u+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),b+=`<rect x="${v}" y="${E}" width="${s}" height="${o}" rx="5" fill="none" stroke="${I}" stroke-width="2"/>`}else b+=`<rect x="${v}" y="${E}" width="${s}" height="${o}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,b+=`<text x="${w.x.toFixed(1)}" y="${w.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,b+=`<text x="${w.x.toFixed(1)}" y="${(w.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${A}</text>`;b+=`<rect x="${v}" y="${E}" width="${s}" height="${o}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${L}" style="cursor:pointer"/>`}p.innerHTML=`<svg viewBox="${-g} ${-g} ${c+g*2} ${d+g*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${b}</svg>`,p.querySelectorAll(".deck-slot-hit").forEach(L=>{L.addEventListener("click",()=>si(L.dataset.pos,t,e,l))})}function si(e,t,i,l){var f,u,g;const{openModal:p,closeModal:n}=l,a=e.replace(/\d+/,""),r=t.slots[e],c=r?t.playerCards.find(m=>m.id===r):null;(f=c==null?void 0:c.player)==null||f.id;const d=new Set;Object.entries(t.slots).forEach(([m,b])=>{var w;if(m===e||!b)return;const L=t.playerCards.find(x=>x.id===b);(w=L==null?void 0:L.player)!=null&&w.id&&d.add(L.player.id)}),t.subs.forEach(m=>{var L;const b=t.playerCards.find(w=>w.id===m);(L=b==null?void 0:b.player)!=null&&L.id&&d.add(b.player.id)});const s=new Set,o=t.playerCards.filter(m=>{const b=m.player;return!(b.job===a||b.job2===a)||d.has(b.id)||s.has(b.id)?!1:(s.add(b.id),!0)});o.sort((m,b)=>{const L=a==="GK"?m.player.note_g:a==="DEF"?m.player.note_d:a==="MIL"?m.player.note_m:m.player.note_a;return(a==="GK"?b.player.note_g:a==="DEF"?b.player.note_d:a==="MIL"?b.player.note_m:b.player.note_a)-L}),p(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${o.length>0?o.map(m=>{var A,G;const b=m.player,L=a==="GK"?b.note_g:a==="DEF"?b.note_d:a==="MIL"?b.note_m:b.note_a,w=Re(b),x={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[b.rarity];return`<div class="player-option" data-card-id="${m.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${pe[a]}">
            ${w?`<img src="${w}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${pe[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${b.firstname} ${b.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${b.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${b.country_code}">
              ${(A=b.clubs)!=null&&A.logo_url?`<img src="${b.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((G=b.clubs)==null?void 0:G.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${b.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${pe[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${x};flex-shrink:0">
            ${L}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(u=document.getElementById("close-selector"))==null||u.addEventListener("click",n),(g=document.getElementById("remove-player"))==null||g.addEventListener("click",()=>{delete t.slots[e],n(),he(i,t,l)}),document.querySelectorAll(".player-option").forEach(m=>{m.addEventListener("click",()=>{t.slots[e]=m.dataset.cardId,n(),he(i,t,l)})})}function di(e,t,i){var c;const{openModal:l,closeModal:p}=i,n=new Set;Object.values(e.slots).filter(Boolean).forEach(d=>{var o;const s=e.playerCards.find(f=>f.id===d);(o=s==null?void 0:s.player)!=null&&o.id&&n.add(s.player.id)}),e.subs.forEach(d=>{var o;const s=e.playerCards.find(f=>f.id===d);(o=s==null?void 0:s.player)!=null&&o.id&&n.add(s.player.id)});const a=new Set,r=e.playerCards.filter(d=>{var s,o,f;return n.has((s=d.player)==null?void 0:s.id)||a.has((o=d.player)==null?void 0:o.id)?!1:(a.add((f=d.player)==null?void 0:f.id),!0)});l("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${r.length>0?r.map(d=>{var u;const s=d.player,o=Re(s),f=s.job==="GK"?s.note_g:s.job==="DEF"?s.note_d:s.job==="MIL"?s.note_m:s.note_a;return`<div class="player-option" data-card-id="${d.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${pe[s.job]}">
            ${o?`<img src="${o}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${s.firstname} ${s.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${s.job} · ${s.country_code} · ${((u=s.clubs)==null?void 0:u.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${pe[s.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",p),document.querySelectorAll(".player-option").forEach(d=>{d.addEventListener("click",()=>{e.subs.push(d.dataset.cardId),p(),he(t,e,i)})})}async function li(e,t){const{state:i,toast:l,navigate:p}=t,n=e.formationCards.find(c=>c.formation===e.formation),a=(n==null?void 0:n.id)||e.formationCardId;await k.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await k.from("deck_cards").delete().eq("deck_id",e.deckId);const r=[];if(Object.entries(e.slots).forEach(([c,d],s)=>{r.push({deck_id:e.deckId,card_id:d,position:c,is_starter:!0,slot_order:s})}),e.subs.forEach((c,d)=>{r.push({deck_id:e.deckId,card_id:c,position:`SUB${d+1}`,is_starter:!1,slot_order:100+d})}),r.length>0){const{error:c}=await k.from("deck_cards").insert(r);if(c){l(c.message,"error");return}}l("Deck enregistré ✅","success"),p("decks")}function bt(e){const t=Fe[e]||Fe["4-4-2"],i=["GK1"];for(let l=1;l<=t.DEF;l++)i.push(`DEF${l}`);for(let l=1;l<=t.MIL;l++)i.push(`MIL${l}`);for(let l=1;l<=t.ATT;l++)i.push(`ATT${l}`);return i}const ci="modulepreload",pi=function(e){return"/manager-wars/"+e},wt={},ui=function(t,i,l){let p=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),r=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));p=Promise.allSettled(i.map(c=>{if(c=pi(c),c in wt)return;wt[c]=!0;const d=c.endsWith(".css"),s=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${s}`))return;const o=document.createElement("link");if(o.rel=d?"stylesheet":ci,d||(o.as="script"),o.crossOrigin="",o.href=c,r&&o.setAttribute("nonce",r),document.head.appendChild(o),d)return new Promise((f,u)=>{o.addEventListener("load",f),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return p.then(a=>{for(const r of a||[])r.status==="rejected"&&n(r.reason);return t().catch(n)})};async function St(){const{data:e}=await k.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await k.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(l=>l.booster_id===i.id)}))}function fi(e){if(!(e!=null&&e.length))return null;const t=e.reduce((l,p)=>l+Number(p.percentage),0);let i=Math.random()*t;for(const l of e)if(i-=Number(l.percentage),i<=0)return l;return e[e.length-1]}const gi=Object.freeze(Object.defineProperty({__proto__:null,loadActiveBoosters:St,rollDropRate:fi},Symbol.toStringTag,{value:"Module"})),Bt=()=>Object.keys(Te),xi=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Ke={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function mi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const yi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},hi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};function vi(e){var p;const t={};(e.rates||[]).forEach(n=>{t[n.card_type]=(t[n.card_type]||0)+Number(n.percentage||0)});const i=((p=Object.entries(t).sort((n,a)=>a[1]-n[1])[0])==null?void 0:p[0])||"player",l=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+l,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function bi(e,{state:t,navigate:i,toast:l}){var a;const p=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let n=[];try{n=(await St()).map(vi)}catch(r){console.warn("Erreur chargement boosters DB, fallback hardcodé",r)}n.length||(n=xi.map(r=>({...r,rates:[],isPub:r.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${p.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${n.map(r=>{const c=r.cost===0||p>=r.cost;return`<div class="booster-card ${c?"":"disabled"}" data-booster="${r.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${r.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${r.img}" alt="${r.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${r.name}</div>
            <div class="desc">${r.sub}</div>
            <div class="cost">${r.costLabel}</div>
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(r=>{r.addEventListener("click",async()=>{const c=n.find(d=>d.id===r.dataset.booster);if(c){r.style.opacity="0.5",r.style.pointerEvents="none";try{await wi(c,{state:t,toast:l,navigate:i,container:e})}catch(d){l(d.message,"error"),r.style.opacity="",r.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(r=>{r.addEventListener("click",c=>{c.stopPropagation();const d=n.find(s=>s.id===r.dataset.boosterId);Li(d)})})}async function wi(e,{state:t,toast:i,navigate:l,container:p}){if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await Ci()}catch(o){i(o.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:n}=await k.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((n||[]).filter(o=>o.card_type==="player").map(o=>o.player_id)),r=new Set((n||[]).filter(o=>o.card_type==="formation").map(o=>o.formation));let c=[];const d=e.type||"player";d==="player"?c=await Ei(t.profile,e.cardCount,e.cost):d==="game_changer"?c=await Ai(t.profile,e.cardCount,e.cost):d==="formation"?c=await Ti(t.profile,e.cost):c=await ki(t.profile,e),c.forEach(o=>{o.card_type==="player"&&o.player?o.isDuplicate=a.has(o.player.id):o.card_type==="formation"&&(o.isDuplicate=r.has(o.formation))});const{data:s}=await k.from("users").select("*").eq("id",t.profile.id).single();s&&(t.profile=s),Ii(c,e,l)}function _i(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function me(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function $i(e,t){let i;switch(t){case"legende":i=e.filter(l=>l.rarity==="legende"),i.length||(i=e.filter(l=>l.rarity==="pepite"||l.rarity==="papyte")),i.length||(i=e.filter(l=>me(l)>=6));break;case"special":i=e.filter(l=>l.rarity==="pepite"||l.rarity==="papyte"),i.length||(i=e.filter(l=>me(l)>=6));break;case"normal_high":i=e.filter(l=>l.rarity==="normal"&&me(l)>=6),i.length||(i=e.filter(l=>me(l)>=6));break;default:i=e.filter(l=>l.rarity==="normal"&&me(l)>=1&&me(l)<=5),i.length||(i=e.filter(l=>l.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function ki(e,t){if(t.cost>0){const{error:p}=await k.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(p)throw p}const{rollDropRate:i}=await ui(async()=>{const{rollDropRate:p}=await Promise.resolve().then(()=>gi);return{rollDropRate:p}},void 0),l=[];for(let p=0;p<(t.cardCount||5);p++){const n=i(t.rates);if(n){if(n.card_type==="player"){let a=k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);n.rarity&&(a=a.eq("rarity",n.rarity));const{data:r}=await a;let c=r||[];if((n.note_min||n.note_max)&&(c=c.filter(o=>{const f=Math.max(Number(o.note_g)||0,Number(o.note_d)||0,Number(o.note_m)||0,Number(o.note_a)||0);return(!n.note_min||f>=n.note_min)&&(!n.note_max||f<=n.note_max)})),c.length||(n.note_min||n.note_max?(c=r||[],console.warn("[Booster] Aucun joueur avec note",n.note_min,"-",n.note_max,"— fallback rareté uniquement")):c=r||[]),!c.length)continue;const d=c[Math.floor(Math.random()*c.length)],{data:s}=await k.from("cards").insert({owner_id:e.id,player_id:d.id,card_type:"player"}).select().single();s&&(l.push({...s,player:d}),k.rpc("record_transfer",{p_card_id:s.id,p_player_id:d.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(n.card_type==="game_changer"){const{data:a}=await k.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),r=a!=null&&a.length?a:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],d=r[Math.floor(Math.random()*r.length)].name,{data:s}=await k.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:d}).select().single();s&&l.push(s)}else if(n.card_type==="formation"){const a=Bt(),r=a[Math.floor(Math.random()*a.length)],{data:c}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();c!=null&&c[0]&&l.push(c[0])}}}return l}async function Ei(e,t,i){if(i>0){const{error:d}=await k.from("users").update({credits:e.credits-i}).eq("id",e.id);if(d)throw d}const{data:l}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(l!=null&&l.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const p=l.filter(d=>d.job==="GK"),n=l.filter(d=>d.job!=="GK"),a=!e.first_booster_opened&&p.length>0,r=[];for(let d=0;d<t;d++){const s=d===0&&a?p:d===0?n:l,o=_i(),f=$i(s,o);f&&r.push(f)}a&&await k.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await k.from("cards").insert(r.map(d=>({owner_id:e.id,player_id:d.id,card_type:"player"}))).select();return(c||[]).forEach((d,s)=>{k.rpc("record_transfer",{p_card_id:d.id,p_player_id:r[s].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),r.map((d,s)=>({...c[s],player:d}))}async function Ai(e,t,i){const{error:l}=await k.from("users").update({credits:e.credits-i}).eq("id",e.id);if(l)throw l;const{data:p}=await k.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),n=p!=null&&p.length?p:Object.keys(Ke).map(s=>({name:s,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const s=n[Math.floor(Math.random()*n.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:s.name,gc_definition_id:s.id||null}}),{data:r,error:c}=await k.from("cards").insert(a).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(r||[]).map(s=>{const o=p==null?void 0:p.find(f=>f.name===s.gc_type||f.id===s.gc_definition_id);return{...s,_gcDef:o||null}})}async function Ti(e,t){const{error:i}=await k.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const l=Bt(),p=l[Math.floor(Math.random()*l.length)],{data:n,error:a}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:p}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),n||[]}function Ii(e,t,i){var f;if(!e||e.length===0){const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",u.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(u),(f=u.querySelector("#anim-close-err"))==null||f.addEventListener("click",()=>u.remove());return}const l=document.createElement("div");l.id="booster-anim-overlay",l.innerHTML=`
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
  `,document.body.appendChild(l);let p=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(p)return;p=!0;const u=document.getElementById("pack-visual");u.classList.add("shaking"),setTimeout(()=>{u.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",a(0)},600)},500)});let n=0;function a(u){n=u;const g=document.getElementById("reveal-phase");g.style.display="flex",r(u)}function r(u){var v;const g=e[u],m=document.getElementById("card-counter"),b=document.getElementById("single-card-slot"),L=document.getElementById("card-tap-hint");m&&(m.textContent=`Carte ${u+1} / ${e.length}`),L&&(L.textContent=u<e.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const w=_t(g),x=g.card_type==="player"&&((v=g.player)==null?void 0:v.rarity)==="legende";b.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${x?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${w}
        ${g.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,x&&s();const A=document.getElementById("current-card-wrap");let G=!1;A.addEventListener("click",()=>{if(G)return;G=!0;const E=u+1;E<e.length?(A.style.transition="all 0.25s ease",A.style.transform="translateX(-120%) rotate(-15deg)",A.style.opacity="0",setTimeout(()=>r(E),250)):c()})}function c(){o(),document.getElementById("reveal-phase").style.display="none";const u=document.getElementById("recap-phase");u.style.display="flex";const g=document.getElementById("recap-grid");g.innerHTML=e.map((m,b)=>`
      <div class="recap-card" style="--i:${b};animation-delay:${b*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${_t(m)}
        ${m.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let d=null;function s(){const u=document.getElementById("fireworks-canvas");if(!u)return;u.width=window.innerWidth,u.height=window.innerHeight;const g=u.getContext("2d"),m=[];function b(){const w=Math.random()*u.width,x=Math.random()*u.height*.6,A=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],G=A[Math.floor(Math.random()*A.length)];for(let v=0;v<60;v++){const E=Math.PI*2/60*v,I=2+Math.random()*5;m.push({x:w,y:x,vx:Math.cos(E)*I,vy:Math.sin(E)*I,alpha:1,color:G,size:2+Math.random()*3})}}b(),d=setInterval(b,600);function L(){if(document.getElementById("fireworks-canvas")){g.clearRect(0,0,u.width,u.height);for(let w=m.length-1;w>=0;w--){const x=m[w];if(x.x+=x.vx,x.y+=x.vy+.08,x.vy*=.98,x.alpha-=.018,x.alpha<=0){m.splice(w,1);continue}g.globalAlpha=x.alpha,g.fillStyle=x.color,g.beginPath(),g.arc(x.x,x.y,x.size,0,Math.PI*2),g.fill()}g.globalAlpha=1,(d!==null||m.length>0)&&requestAnimationFrame(L)}}L()}function o(){d!==null&&(clearInterval(d),d=null);const u=document.getElementById("fireworks-canvas");u&&u.getContext("2d").clearRect(0,0,u.width,u.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{o(),l.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{o(),l.remove(),i("boosters")})}function _t(e){var t,i,l,p;if(e.card_type==="player"&&e.player){const n=e.player,a=n.job||"ATT",r=yi[a]||"#1A6B3C",c=hi[n.rarity]||"#ccc",d=a==="GK"?n.note_g:a==="DEF"?n.note_d:a==="MIL"?n.note_m:n.note_a,s=mi(n),o={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[n.country_code]||n.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${c};overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:6px 6px 2px;text-align:center;background:#f2e8d2">
        <div style="font-size:8px;letter-spacing:1px;color:#666;text-transform:uppercase">${n.firstname}</div>
        <div style="font-size:13px;font-weight:900;color:#111;line-height:1.1;font-family:Arial Black,Arial">${(n.surname_encoded||"").toUpperCase()}</div>
      </div>
      <!-- Étoile + bande poste -->
      <div style="position:relative;height:72px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:14px;width:100%;height:26px;background:${r}"></div>
        <svg width="50" height="48" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${r}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${d||0}</text>
        </svg>
      </div>
      <!-- Portrait -->
      <div style="flex:1;overflow:hidden;background:#b8d4f0">
        ${s?`<img src="${s}" style="width:100%;height:100%;object-fit:cover;object-position:center top" onerror="this.style.display='none'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;height:26px">
        <img src="https://flagsapi.com/${n.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:1px;color:#555;text-transform:uppercase">${o}</div>
        ${(t=n.clubs)!=null&&t.logo_url?`<img src="${n.clubs.logo_url}" style="width:20px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:700">${(((i=n.clubs)==null?void 0:i.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>`}if(e.card_type==="game_changer"){const n=e._gcDef,a=(n==null?void 0:n.gc_type)==="ultra_game_changer",r={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},c={purple:"#b06ce0",light_blue:"#00d4ef"},d=r[n==null?void 0:n.color]||r.purple,s=c[n==null?void 0:n.color]||c.purple,o=(n==null?void 0:n.name)||e.gc_type||"Game Changer",f=(n==null?void 0:n.effect)||((l=Ke[e.gc_type])==null?void 0:l.desc)||"",u=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,g=((p=Ke[e.gc_type])==null?void 0:p.icon)||"⚡";return`<div style="width:170px;height:240px;background:${d};border-radius:14px;border:3px solid ${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${s}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${o.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${a?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${u?`<img src="${u}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${g}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${f.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Li(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const p={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},n={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};l.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${n[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${p[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(l),l.addEventListener("click",a=>{a.target===l&&l.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>l.remove());return}Mi()}function Mi(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const zi="simulation",Ft="VOTRE_ZONE_ID";function Ci(){switch(zi){case"propellerads":return ji();case"adsense":return Si();default:return it()}}function it(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const l=setInterval(()=>{i--;const p=document.getElementById("ad-cd"),n=document.getElementById("ad-skip");p&&(p.textContent=i),n&&(n.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(l),n&&(n.disabled=!1,n.style.cssText=n.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),n==null||n.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function ji(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(it());window.propeller.push({zone_id:Ft,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function Si(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(it());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Ft,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const ve={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},be={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Dt(e,t,i,l,p){var n;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${l}</button>
    </div>
  </div>`,(n=document.getElementById("msg-btn"))==null||n.addEventListener("click",p)}function ne(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Ue(e,t){var l,p;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((l=i.clubs)==null?void 0:l.encoded_name)||null,clubLogo:((p=i.clubs)==null?void 0:p.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function De(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Gt(){const e=Math.random()*100;return e<10?3:e<30?2:1}function Ge(e,t){const i=ve[t]||ve["4-4-2"],l={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const r=e.filter(d=>d.position&&d.position.replace(/\d+$/,"")===a).sort((d,s)=>parseInt(d.position.replace(/\D+/g,""),10)-parseInt(s.position.replace(/\D+/g,""),10)).map(d=>({...d,_line:a})),c=De(r.length);r.forEach((d,s)=>{d._col=c[s]}),l[a]=r}return l}const n=[...e];for(const a of["GK","DEF","MIL","ATT"]){const r=[];for(let d=0;d<i[a];d++){let s=n.findIndex(o=>o.job===a);if(s===-1&&(s=n.findIndex(o=>o.job2===a)),s===-1&&(s=0),n[s]){const o={...n[s],_line:a};r.push(o),n.splice(s,1)}}const c=De(r.length);r.forEach((d,s)=>{d._col=c[s]}),l[a]=r}return l}async function Bi(e,t){var a,r;const{data:i}=await k.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return Fi(e);const l=ve[e]||ve["4-4-2"],p={GK:[],DEF:[],MIL:[],ATT:[]},n=[...i];for(const c of["GK","DEF","MIL","ATT"]){const d=n.filter(g=>g.job===c),s=n.filter(g=>g.job!==c),o=[...d,...s],f=[];for(let g=0;g<l[c];g++){const m=o[g]||n[g];m&&f.push({cardId:"ai-"+m.id+"-"+g,id:m.id,firstname:m.firstname,name:m.surname_encoded,country_code:m.country_code,club_id:m.club_id,job:m.job,job2:m.job2,note_g:Number(m.note_g)||0,note_d:Number(m.note_d)||0,note_m:Number(m.note_m)||0,note_a:Number(m.note_a)||0,rarity:m.rarity,skin:m.skin,hair:m.hair,hair_length:m.hair_length,clubName:((a=m.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((r=m.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:c})}const u=De(f.length);f.forEach((g,m)=>{g._col=u[m]}),p[c]=f}return p}function Fi(e){const t=ve[e]||ve["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},l=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let p=0;for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let c=0;c<t[n];c++){const d=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+p,id:"fake-"+p,firstname:"IA",name:l[p%l.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?d:2,note_d:n==="DEF"?d:2,note_m:n==="MIL"?d:2,note_a:n==="ATT"?d:2,rarity:"normal",boost:0,used:!1,_line:n}),p++}const r=De(a.length);a.forEach((c,d)=>{c._col=r[d]}),i[n]=a}return i}function qt(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"})}function le(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden})}async function Di(e,t,i,l,p,n){var b;const{state:a,navigate:r,toast:c}=t;let d=!1,s=null;e.style.overflow="hidden",e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler la recherche</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const o=()=>document.getElementById("mm-status"),f=async(L=!0)=>{d=!0,s&&(k.removeChannel(s),s=null),L&&await k.rpc("cancel_matchmaking",{p_user_id:a.profile.id}).catch(()=>{})};(b=document.getElementById("mm-cancel"))==null||b.addEventListener("click",async()=>{try{await f(!0)}catch(L){console.warn("[Matchmaking] cleanup error:",L)}le(),r("home")});const u=async(L,w,x)=>{d||(d=!0,s&&(k.removeChannel(s),s=null),o()&&(o().textContent="Adversaire trouvé !"),await new Promise(A=>setTimeout(A,600)),e.isConnected!==!1&&Gi(e,t,L,x))},{data:g,error:m}=await k.rpc("try_matchmake",{p_user_id:a.profile.id,p_deck_id:i});if(m||!(g!=null&&g.success)){c("Erreur de matchmaking","error"),le(),r("home");return}if(g.matched){u(g.match_id,g.opponent_id,!1);return}o()&&(o().textContent="En attente d'un autre joueur..."),s=k.channel("matchmaking-"+a.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${a.profile.id}`},L=>{const w=L.new;w.status==="matched"&&w.match_id&&u(w.match_id,w.matched_with,!0)}).subscribe()}async function Gi(e,t,i,l){const{state:p,navigate:n,toast:a}=t,r=l?"p1":"p2",c=l?"p2":"p1";e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation du match...</div>';const{data:d}=await k.from("matches").select("*").eq("id",i).single();if(!d){a("Match introuvable","error"),n("home");return}async function s(){const[{data:h,error:$},{data:T,error:B},{data:z},{data:F}]=await Promise.all([k.rpc("get_deck_for_match",{p_deck_id:d.home_deck_id}),k.rpc("get_deck_for_match",{p_deck_id:d.away_deck_id}),k.from("users").select("id,pseudo,club_name").eq("id",d.home_id).single(),k.from("users").select("id,pseudo,club_name").eq("id",d.away_id).single()]);$&&console.error("[PvP] get_deck_for_match p1 error:",$),B&&console.error("[PvP] get_deck_for_match p2 error:",B);function C(y,j){return{cardId:y.card_id,position:j||y.position,id:y.id,firstname:y.firstname,name:y.surname_encoded,country_code:y.country_code,club_id:y.club_id,job:y.job,job2:y.job2,note_g:Number(y.note_g)||0,note_d:Number(y.note_d)||0,note_m:Number(y.note_m)||0,note_a:Number(y.note_a)||0,rarity:y.rarity,skin:y.skin,hair:y.hair,hair_length:y.hair_length,clubName:y.club_encoded_name||null,clubLogo:y.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}}const N=((h==null?void 0:h.starters)||[]).map(y=>C(y,y.position)),q=((T==null?void 0:T.starters)||[]).map(y=>C(y,y.position)),M=((h==null?void 0:h.subs)||[]).map(y=>C(y,y.position)),P=((T==null?void 0:T.subs)||[]).map(y=>C(y,y.position)),H=(h==null?void 0:h.formation)||"4-4-2",_=(T==null?void 0:T.formation)||"4-4-2";return console.log("[PvP] p1Formation:",H,"p1 starters:",N.length,"positions:",N.map(y=>y.position)),console.log("[PvP] p2Formation:",_,"p2 starters:",q.length,"positions:",q.map(y=>y.position)),{p1Team:Ge(N,H),p2Team:Ge(q,_),p1Subs:M,p2Subs:P,p1Formation:H,p2Formation:_,p1Name:(z==null?void 0:z.club_name)||(z==null?void 0:z.pseudo)||"Joueur 1",p2Name:(F==null?void 0:F.club_name)||(F==null?void 0:F.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"gc-select",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:[],gc_p2:[],gcReady_p1:!1,gcReady_p2:!1,usedGc_p1:[],usedGc_p2:[],lastActionAt:new Date().toISOString()}}let o=d.game_state&&Object.keys(d.game_state).length?d.game_state:null;if(!o)if(l){o=await s();const{data:h}=await k.from("matches").select("game_state").eq("id",i).single();!(h!=null&&h.game_state)||!Object.keys(h.game_state).length?await k.from("matches").update({game_state:o,turn_user_id:d.home_id}).eq("id",i):o=h.game_state}else{e.innerHTML=`<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation avec l'adversaire...</div>`;for(let h=0;h<30&&!o;h++){await new Promise(T=>setTimeout(T,400));const{data:$}=await k.from("matches").select("game_state").eq("id",i).single();$!=null&&$.game_state&&Object.keys($.game_state).length&&(o=$.game_state)}if(!o){a("Erreur de synchronisation","error"),n("home");return}}const f=k.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},h=>{const $=h.new;try{$.game_state&&(o=$.game_state,m()),($.status==="finished"||$.forfeit)&&m()}catch(T){console.error("[PvP] Realtime render crash:",T,"gameState:",o),a("Erreur de synchro temps réel : "+T.message,"error")}}).subscribe();async function u(h){Object.assign(o,h),o.lastActionAt=new Date().toISOString();const{error:$}=await k.from("matches").update({game_state:o}).eq("id",i);$&&(console.error("[PvP] pushState DB error:",$.message,$),a("Erreur de synchronisation : "+$.message,"error"));try{m()}catch(T){console.error("[PvP] renderPvpScreen crash après pushState:",T),a("Erreur d'affichage : "+T.message,"error")}}async function g(){const h=l?d.away_id:d.home_id;await k.from("matches").update({status:"finished",forfeit:!0,winner_id:h}).eq("id",i),k.removeChannel(f),le(),n("home")}function m(){var ae,se,ce,we;const h=o[r+"Team"];o[c+"Team"];const $=o[r+"Score"],T=o[c+"Score"],B=o[r+"Name"],z=o[c+"Name"];if(o.phase==="gc-select")return b();if(o.phase==="reveal")return L();if(o.phase==="midfield")return w();if(o.phase==="finished")return v();const F=o.phase===r+"-attack",C=o.phase===r+"-defense",N=o.phase===c+"-attack"||o.phase===c+"-defense",q=Array.isArray(o["selected_"+r])?o["selected_"+r]:[],M=q.map(K=>K.cardId);e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const P=window.innerWidth>=700,H=o[r+"Subs"]||[],_=o["usedSubIds_"+r]||[],y=H.filter(K=>!_.includes(K.cardId)),j=o["gcCardsFull_"+r]||[],S=o["usedGc_"+r]||[],D=j.filter(K=>!S.includes(K.id)),O=o.boostOwner===r&&!o.boostUsed,R=(K,Z,ie)=>{var pt,ut;const V=K._gcDef,ge={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[V==null?void 0:V.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ie={purple:"#b06ce0",light_blue:"#00d4ef"}[V==null?void 0:V.color]||"#b06ce0",xe=(V==null?void 0:V.name)||K.gc_type,Ut=(V==null?void 0:V.effect)||((pt=de[K.gc_type])==null?void 0:pt.desc)||"",dt=V!=null&&V.image_url?`/manager-wars/icons/${V.image_url}`:null,Vt=((ut=de[K.gc_type])==null?void 0:ut.icon)||"⚡",lt=Math.round(ie*.22),ct=Math.round(ie*.22),Ne=ie-lt-ct,Yt=xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${K.id}" data-gc-type="${K.gc_type}"
        style="width:${Z}px;height:${ie}px;border-radius:10px;border:2px solid ${Ie};background:${ge};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${lt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Yt}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Z-6}px">${xe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Ne}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${dt?`<img src="${dt}" style="max-width:${Z-10}px;max-height:${Ne-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ne*.55)}px">${Vt}</span>`}
        </div>
        <div style="height:${ct}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ut.slice(0,38)}</span>
        </div>
      </div>`},X=(K,Z)=>`<div id="pvp-boost-card" style="width:${K}px;height:${Z}px;flex-shrink:0;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px">
      <div style="font-size:${P?22:18}px">⚡</div>
      <div style="font-size:${P?11:9}px;color:#000;font-weight:900">+${o.boostValue}</div>
    </div>`,Y=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${P?70:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${y.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':y.map(K=>`<div class="pvp-sub-btn" data-sub-id="${K.cardId}" style="cursor:pointer;flex-shrink:0">${ue(K,P?60:44,P?78:58)}</div>`).join("")}
    </div>`,W=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0" id="match-field">
      <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
        ${nt(h,o[r+"Formation"],F?"attack":C?"defense":"idle",M,300,300)}
      </div>
    </div>`,U=P?"padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ee=F?`<button id="pvp-action" style="${U};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${q.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:C?`<button id="pvp-action" style="${U};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${q.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="${U};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour de ${z}</div>`,oe=F||C?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${q.length}/3 sélectionné(s)</div>`:"",re=`
      <!-- Score -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:rgba(0,0,0,0.25);flex-shrink:0">
        <button id="pvp-quit" style="background:rgba(220,53,69,0.9);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer">✕</button>
        <div style="flex:1;text-align:center;color:#fff;font-size:14px;font-weight:700">
          ${B} <span style="color:#FFD700;font-size:18px">${$}</span> – <span style="color:#FFD700;font-size:18px">${T}</span> ${z}
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="text-align:center;padding:4px;background:rgba(0,0,0,0.15);font-size:11px;color:${N?"rgba(255,255,255,0.4)":"#FFD700"};font-weight:700;flex-shrink:0">
        ${N?`⏳ Tour de ${z}`:F?"⚔️ À vous d'attaquer !":C?"🛡️ À vous de défendre !":""}
      </div>`;if(P?e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
        ${re}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Y}
          ${W}
          <div style="width:150px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            <div style="width:100%">${ee}${oe}</div>
            <div style="width:100%;height:1px;background:rgba(255,255,255,0.1)"></div>
            ${O?X(110,90):""}
            ${D.map(K=>R(K,110,150)).join("")}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
        ${re}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Y}
          <div style="flex:1;min-width:0;display:flex;flex-direction:column;min-height:0">
            ${W}
            <div style="display:flex;align-items:stretch;padding:8px;background:rgba(0,0,0,0.35);gap:6px;flex-shrink:0">
              ${O?X(60,80):""}
              ${D.map(K=>R(K,68,95)).join("")}
              <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:3px;min-width:90px">
                ${ee}${oe}
              </div>
            </div>
          </div>
        </div>
      </div>`,e.querySelectorAll(".match-slot-hit").forEach(K=>{K.addEventListener("click",()=>{if(!F&&!C)return;const Z=K.dataset.cardId,ie=K.dataset.role,V=(h[ie]||[]).find(xe=>xe.cardId===Z);if(!V||V.used)return;Array.isArray(o["selected_"+r])||(o["selected_"+r]=[]);const ge=o["selected_"+r],Ie=ge.findIndex(xe=>xe.cardId===Z);Ie>-1?ge.splice(Ie,1):ge.length<3&&ge.push({...V,_role:ie}),m()})}),(ae=e.querySelector("#pvp-boost-card"))==null||ae.addEventListener("click",()=>{x()}),e.querySelectorAll(".pvp-gc-mini").forEach(K=>{K.addEventListener("click",()=>{G(K.dataset.gcId,K.dataset.gcType)})}),(se=e.querySelector("#pvp-action"))==null||se.addEventListener("click",()=>{F?E():C&&I()}),(ce=e.querySelector("#pvp-quit"))==null||ce.addEventListener("click",()=>{confirm("Quitter le match ? Vous perdrez par forfait.")&&g()}),(we=e.querySelector("#pvp-view-opp"))==null||we.addEventListener("click",()=>{A()}),function(){const Z=e.querySelector(".terrain-wrapper svg");Z&&(Z.removeAttribute("width"),Z.removeAttribute("height"),Z.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Z.setAttribute("viewBox","-26 -26 352 352"),Z.setAttribute("preserveAspectRatio","xMidYMid meet"));const ie=e.querySelector(".match-screen");if(ie){const V=e.clientHeight;V>50&&(ie.style.height=V+"px",ie.style.maxHeight=V+"px",ie.style.overflow="hidden")}}(),o._timerInt&&(clearInterval(o._timerInt),o._timerInt=null),F||C){let K=30,Z=!1;const ie=()=>document.getElementById("pvp-timer"),V=()=>{ie()&&(ie().textContent=K+"s",ie().style.color=Z?"#ff4444":"#fff")};V(),o._timerInt=setInterval(()=>{K--,K<=15&&!Z&&(Z=!0),V(),K<=0&&(clearInterval(o._timerInt),o._timerInt=null,g())},1e3)}}function b(){var C;const h=o["gcReady_"+r],$=o["gcReady_"+c];Array.isArray(o["gc_"+r])||(o["gc_"+r]=[]);let T=o["gc_"+r];const B=3;function z(N,q){const M=N._gcDef,P={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},H={purple:"#9b59b6",light_blue:"#00bcd4"},_=P[M==null?void 0:M.color]||P.purple,y=H[M==null?void 0:M.color]||H.purple;return`<div class="pvp-gc-card" data-id="${N.id}"
        style="width:100px;border-radius:10px;border:3px solid ${q?"#FFD700":y};background:${_};
          display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
          box-shadow:${q?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
          transform:${q?"scale(1.06)":"scale(1)"};transition:all 0.15s">
        <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:${((M==null?void 0:M.name)||N.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(M==null?void 0:M.name)||N.gc_type}</span>
        </div>
        <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
          ${M!=null&&M.image_url?`<img src="/manager-wars/icons/${M.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
        </div>
        <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((M==null?void 0:M.effect)||"").slice(0,50)}</span>
        </div>
        ${q?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
      </div>`}if(e.style.overflow="hidden",e.innerHTML=`
    <div id="pvp-gc-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Sélectionne <b style="color:#FFD700">${B}</b> cartes · ${T.length}/${B}
        </div>
      </div>
      ${h?`
      <div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px">
        <div style="font-size:32px">✅</div>
        <div style="color:#fff;font-size:14px">Prêt ! ${$?"Adversaire aussi.":`En attente de ${o[c+"Name"]}...`}</div>
      </div>`:`
      <div id="pvp-gc-grid" style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px"></div>
      <div style="padding:10px 16px 14px;flex-shrink:0">
        <button id="pvp-gc-validate" style="width:100%;padding:14px;border-radius:14px;border:none;background:linear-gradient(135deg,#5a0a9a,#9a28e8);color:#fff;font-size:15px;font-weight:900;cursor:pointer">
          ${T.length?`⚡ Valider (${T.length} GC)`:"▶ Continuer sans GC"}
        </button>
      </div>`}
    </div>`,h)return;const F=r==="p1"?d.home_id:d.away_id;k.from("cards").select("id,gc_type").eq("owner_id",F).eq("card_type","game_changer").then(async({data:N})=>{const{data:q}=await k.from("gc_definitions").select("*").eq("is_active",!0),M=new Set,P=(N||[]).filter(_=>M.has(_.gc_type)?!1:(M.add(_.gc_type),!0)).map(_=>({..._,_gcDef:(q==null?void 0:q.find(y=>y.name===_.gc_type))||null})),H=document.getElementById("pvp-gc-grid");if(H){if(!P.length){H.innerHTML='<div style="color:rgba(255,255,255,0.4);font-size:13px;text-align:center;margin-top:30px">Aucune carte Game Changer disponible.</div>';return}H.innerHTML=P.map(_=>z(_,T.includes(_.id))).join(""),H.querySelectorAll(".pvp-gc-card").forEach(_=>{_.addEventListener("click",()=>{const y=_.dataset.id,j=T.indexOf(y);j>-1?T.splice(j,1):T.length<B&&T.push(y),m()})})}}),(C=e.querySelector("#pvp-gc-validate"))==null||C.addEventListener("click",async()=>{const N=r==="p1"?d.home_id:d.away_id,{data:q}=await k.from("cards").select("id,gc_type").eq("owner_id",N).eq("card_type","game_changer").in("id",T),{data:M}=await k.from("gc_definitions").select("*").eq("is_active",!0),P=(q||[]).map(H=>({...H,_gcDef:(M==null?void 0:M.find(_=>_.name===H.gc_type))||null}));await u({["gcReady_"+r]:!0,["gcCardsFull_"+r]:P}),o["gcReady_"+c]&&await u({phase:"reveal"})})}function L(){e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[c+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Ee(o[c+"Team"],o[c+"Formation"],null,[],300,300)}</div>
      <div style="font-size:15px;color:rgba(255,255,255,0.7)">
        <span class="loading-dots">Chargement</span>
      </div>
      <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
    </div>`,r==="p1"&&setTimeout(async()=>{await u({phase:"midfield"})},5e3)}function w(){const h=o[r+"Team"].MIL||[],$=o[c+"Team"].MIL||[];function T(q){return q.reduce((M,P)=>M+Q(P,"MIL"),0)}function B(q){let M=0;for(let P=0;P<q.length-1;P++){const H=fe(q[P],q[P+1]);H==="#00ff88"?M+=2:H==="#FFD700"&&(M+=1)}return M}const z=T(h)+B(h),F=T($)+B($),C=z>=F;function N(q,M,P){return`<div style="text-align:center">
        <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${M}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${q.map((H,_)=>{const y=ne(H),j=_<q.length-1?fe(H,q[_+1]):null,S=j&&j!=="#ff3333"&&j!=="#cc2222";return`
            <div style="width:52px;height:52px;border-radius:8px;background:${P};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
              ${y?`<img src="${y}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
              <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${Q(H,"MIL")}</div>
              <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${H.name}</div>
            </div>
            ${j?`<div style="width:14px;height:4px;border-radius:2px;background:${j};flex-shrink:0;opacity:${S?.9:.3}"></div>`:""}
            `}).join("")}
        </div>
        <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
          Score: ${T(q)} + ${B(q)} liens = <b style="color:#fff">${T(q)+B(q)}</b>
        </div>
      </div>`}e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
      <div style="text-align:center;color:#fff">
        <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
      </div>

      ${N(h,o[r+"Name"],"#D4A017")}

      <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${z}</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${F}</div>
      </div>

      ${N($,o[c+"Name"],"#bb2020")}

      <div id="pvp-midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
    </div>`,setTimeout(()=>{const q=document.getElementById("pvp-score-me"),M=document.getElementById("pvp-score-opp"),P=document.getElementById("pvp-midfield-result");q&&M&&(C?(q.style.fontSize="80px",q.style.color="#FFD700",M.style.opacity="0.25"):(M.style.fontSize="80px",M.style.color="#ff6b6b",q.style.opacity="0.25"));const H=o.p1Team.MIL||[],_=o.p2Team.MIL||[],y=T(H)+B(H),j=T(_)+B(_),S=y>=j?"p1":"p2";o[S+"Name"];let D=o.boostValue;D==null&&(D=Gt(),o.boostValue=D,o.boostOwner=S,o.boostUsed=!1),P&&(P.style.opacity="1",P.innerHTML=`<div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${C?`${o[r+"Name"]} gagne le milieu de terrain et attaque !`:`${o[c+"Name"]} gagne l'engagement et attaque !`}
        </div>
        ${C?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px" id="pvp-boost-display">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${D}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}`),setTimeout(async()=>{if(r!=="p1")return;const O=S;await u({phase:O+"-attack",attacker:O,round:1,boostValue:o.boostValue,boostUsed:!1,boostOwner:O})},1800)},600)}function x(){var B;const h=o[r+"Team"],$=Object.entries(h).flatMap(([z,F])=>(F||[]).filter(C=>!C.used).map(C=>({...C,_line:z})));if(!$.length)return;const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",T.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="boost-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${$.map(z=>{const F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[z._line]||"#555",C=Q(z,z._line)+(z.boost||0);return`<div class="boost-pick-item" data-cid="${z.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${F};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${z.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${C}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(T),(B=T.querySelector("#boost-picker-close"))==null||B.addEventListener("click",()=>T.remove()),T.querySelectorAll(".boost-pick-item").forEach(z=>{z.addEventListener("click",async()=>{const F=z.dataset.cid,C=$.find(M=>M.cardId===F);if(!C)return;const N=o[r+"Team"],q=(N[C._line]||[]).find(M=>M.cardId===F);q&&(q.boost=(q.boost||0)+o.boostValue),T.remove(),await u({[r+"Team"]:N,boostUsed:!0})})})}function A(){var $;const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",h.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[c+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Ee(o[c+"Team"],o[c+"Formation"],null,[],300,300)}</div>
      <button id="pvp-view-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(h),($=h.querySelector("#pvp-view-opp-close"))==null||$.addEventListener("click",()=>h.remove())}function G(h,$){var y,j;const B=(o["gcCardsFull_"+r]||[]).find(S=>S.id===h),z=B==null?void 0:B._gcDef,F=de[$]||{icon:"⚡",desc:"Carte spéciale."},C={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[z==null?void 0:z.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",N={purple:"#b06ce0",light_blue:"#00d4ef"}[z==null?void 0:z.color]||"#b06ce0",q=(z==null?void 0:z.name)||$,M=(z==null?void 0:z.effect)||F.desc,P=z!=null&&z.image_url?`/manager-wars/icons/${z.image_url}`:null,H=F.icon||"⚡",_=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",_.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${N};background:${C};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${N}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${q.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${q}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${P?`<img src="${P}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${H}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${M}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(_),(y=_.querySelector("#pvp-gc-back"))==null||y.addEventListener("click",()=>_.remove()),(j=_.querySelector("#pvp-gc-use"))==null||j.addEventListener("click",async()=>{_.remove();const S=o["usedGc_"+r]||[];S.push(h),await u({["usedGc_"+r]:S})})}function v(){var z;const h=o[r+"Score"],$=o[c+"Score"],T=h>$,B=h===$;e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${T?"🏆":B?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${T?"Victoire !":B?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${h} - ${$}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour à l'accueil</button>
    </div>`,(z=document.getElementById("pvp-home"))==null||z.addEventListener("click",()=>{k.removeChannel(f),le(),n("home")})}async function E(){const h=(o["selected_"+r]||[]).map(T=>({...T,_line:T._role}));if(!h.length)return;const $=Qe(h,o.modifiers[r]||{});h.forEach(T=>{const B=(o[r+"Team"][T._role]||[]).find(z=>z.cardId===T.cardId);B&&(B.used=!0)}),await u({pendingAttack:{...$,players:h,side:r},["selected_"+r]:[],modifiers:{...o.modifiers,[r]:{}},phase:c+"-defense"})}async function I(){const h=(o["selected_"+r]||[]).map(M=>({...M,_line:M._role})),$=Ze(h,o.modifiers[r]||{});h.forEach(M=>{const P=(o[r+"Team"][M._role]||[]).find(H=>H.cardId===M.cardId);P&&(P.used=!0)});const T=et(o.pendingAttack.total,$.total,o.modifiers[r]||{}),B=o.pendingAttack.side,z=T==="attack",F=o[B+"Score"]+(z?1:0),C=B==="p1"?"p2":"p1",N=(o.round||0)+1,q=N>10;await u({[B+"Score"]:F,["selected_"+r]:[],modifiers:{...o.modifiers,[r]:{}},pendingAttack:null,phase:q?"finished":C+"-attack",attacker:C,round:N}),q&&await k.from("matches").update({status:"finished"}).eq("id",i)}m()}async function qi(e,t){var v;const{state:i,navigate:l,toast:p}=t;qt();const n=i.params||{};e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const a=n.matchMode||"vs_ai_easy",r=a.replace("vs_ai_",""),c=a;if(!n.deckId)return Ni(e,t,a);const d=n.deckId,[{data:s},{data:o}]=await Promise.all([k.from("decks").select("formation,name").eq("id",d).single(),k.from("deck_cards").select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`).eq("deck_id",d).order("slot_order")]),f=(o||[]).filter(E=>{var I;return E.is_starter&&((I=E.card)==null?void 0:I.player)}).map(E=>Ue(E.card,E.position)),u=(o||[]).filter(E=>{var I;return!E.is_starter&&((I=E.card)==null?void 0:I.player)}).map(E=>Ue(E.card,E.position));if(f.length<11){Dt(e,"⚠️",`Deck incomplet (${f.length}/11).`,"Compléter",()=>l("decks"));return}const g=(o||[]).find(E=>{var I;return((I=E.card)==null?void 0:I.card_type)==="formation"}),m=(s==null?void 0:s.formation)||((v=g==null?void 0:g.card)==null?void 0:v.formation)||"4-4-2";if(a==="random")return Di(e,t,d);const{data:b}=await k.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",i.profile.id).eq("card_type","game_changer"),{data:L}=await k.from("gc_definitions").select("*").eq("is_active",!0),w=(b||[]).map(E=>({...E,_gcDef:(L==null?void 0:L.find(I=>I.name===E.gc_type||I.id===E.gc_definition_id))||null})),x=Ge(f,m),A=await Bi(m),G=async E=>{const{data:I}=await k.from("matches").insert({home_id:i.profile.id,away_id:null,mode:c,home_deck_id:d,status:"in_progress"}).select().single(),h={gcDefs:L||[],matchId:I==null?void 0:I.id,mode:c,difficulty:r,formation:m,homeTeam:x,aiTeam:A,homeSubs:u,subsUsed:0,maxSubs:Math.min(u.length,3),homeScore:0,aiScore:0,gcCards:E,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Pi(e,h,t)};if(!w.length){G([]);return}Ri(e,w,G)}function Ri(e,t,i){const p=new Set,n=t.filter(s=>{const o=s.gc_type||s.id;return p.has(o)?!1:(p.add(o),!0)});let a=[];function r(s,o){const f=s._gcDef,u={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},g={purple:"#9b59b6",light_blue:"#00bcd4"},m=u[f==null?void 0:f.color]||u.purple,b=g[f==null?void 0:f.color]||g.purple;return`<div class="gc-select-card" data-id="${s.id}"
      style="width:100px;border-radius:10px;border:3px solid ${o?"#FFD700":b};background:${m};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${o?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${o?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((f==null?void 0:f.name)||s.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(f==null?void 0:f.name)||s.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${f!=null&&f.image_url?`<img src="/manager-wars/icons/${f.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((f==null?void 0:f.effect)||"").slice(0,50)}</span>
      </div>
      ${o?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}function c(){var g,m,b;const s=e.querySelector("#gc-confirm-overlay");if(s&&s.remove(),a.length<3)return;const o=document.createElement("div");o.id="gc-confirm-overlay",o.style.cssText="position:absolute;inset:0;background:rgba(10,22,40,0.88);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:32px 24px;z-index:20;backdrop-filter:blur(4px)",o.innerHTML=`
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
      </button>`;const f=L=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(L)};(g=o.querySelector("#gc-launch"))==null||g.addEventListener("click",()=>f(a)),(m=o.querySelector("#gc-no-gc"))==null||m.addEventListener("click",()=>f([])),(b=o.querySelector("#gc-reset"))==null||b.addEventListener("click",()=>{a=[],d()});const u=e.querySelector("#gc-screen-wrap");u?u.appendChild(o):e.appendChild(o)}function d(){e.style.overflow="hidden";const s=e.clientHeight||e.getBoundingClientRect().height;s>50&&(e.style.height=s+"px"),e.innerHTML=`
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
        ${n.map(o=>{const f=a.find(u=>u.gc_type===o.gc_type);return r(o,!!f)}).join("")}
      </div>
    </div>`,e.querySelectorAll(".gc-select-card").forEach(o=>{o.addEventListener("click",()=>{const f=o.dataset.id,u=n.find(m=>m.id===f);if(!u)return;const g=a.findIndex(m=>m.gc_type===u.gc_type);g>-1?a.splice(g,1):a.length<3&&a.push(u),d(),a.length===3&&c()})}),a.length===3&&c()}d()}async function Ni(e,t,i){const{state:l,navigate:p}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await k.from("decks").select("id,name,is_active,formation").eq("owner_id",l.profile.id).order("created_at",{ascending:!1});if(!n||n.length===0){Dt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>p("decks"));return}const a=n.map(s=>s.id),{data:r}=await k.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let c=0;function d(){var w,x,A,G,v;const s=n[c],o=(r||[]).filter(E=>E.deck_id===s.id),f=o.filter(E=>{var I;return E.is_starter&&((I=E.card)==null?void 0:I.player)}).map(E=>Ue(E.card,E.position)),u=o.find(E=>{var I;return((I=E.card)==null?void 0:I.card_type)==="formation"}),g=s.formation||((w=u==null?void 0:u.card)==null?void 0:w.formation)||"4-4-2",m=f.length>=11?Ge(f,g):null,b=f.length>=11;qt(),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
          <div style="font-size:19px;font-weight:900">${s.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${g} · ${f.length}/11 ${s.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===n.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===n.length-1?"0.1":"0.3"});color:${c===n.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===n.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${m?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${nt(m,g,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${n.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${n.map((E,I)=>`<div style="width:7px;height:7px;border-radius:50%;background:${I===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${b?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${b?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${b?"pointer":"default"}">
          ${b?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const I=e.querySelector(".deck-preview-wrap svg");I&&(I.removeAttribute("width"),I.removeAttribute("height"),I.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",I.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(x=document.getElementById("prev-deck"))==null||x.addEventListener("click",()=>{c>0&&(c--,d())}),(A=document.getElementById("next-deck"))==null||A.addEventListener("click",()=>{c<n.length-1&&(c++,d())}),(G=document.getElementById("validate-deck"))==null||G.addEventListener("click",()=>{b&&t.navigate("match",{matchMode:i,deckId:s.id})}),(v=document.getElementById("cancel-deck-select"))==null||v.addEventListener("click",()=>{le(),p("home")});const L=document.getElementById("deck-swipe-zone");if(L){let E=0,I=0;L.addEventListener("touchstart",h=>{E=h.touches[0].clientX,I=h.touches[0].clientY},{passive:!0}),L.addEventListener("touchend",h=>{const $=h.changedTouches[0].clientX-E,T=h.changedTouches[0].clientY-I;Math.abs($)<40||Math.abs($)<Math.abs(T)||($<0&&c<n.length-1?(c++,d()):$>0&&c>0&&(c--,d()))},{passive:!0})}}d()}function Pi(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Ee(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Oi(e,t,i),5e3)}function Oi(e,t,i){const l=t.homeTeam.MIL||[],p=t.aiTeam.MIL||[];function n(o){return o.reduce((f,u)=>f+Q(u,"MIL"),0)}function a(o){let f=0;for(let u=0;u<o.length-1;u++){const g=fe(o[u],o[u+1]);g==="#00ff88"?f+=2:g==="#FFD700"&&(f+=1)}return f}const r=n(l)+a(l),c=n(p)+a(p),d=r>=c;function s(o,f,u){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${f}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${o.map((g,m)=>{const b=ne(g),L=m<o.length-1?fe(g,o[m+1]):null,w=L&&L!=="#ff3333"&&L!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${u};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${b?`<img src="${b}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${Q(g,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${g.name}</div>
          </div>
          ${L?`<div style="width:14px;height:4px;border-radius:2px;background:${L};flex-shrink:0;opacity:${w?.9:.3}"></div>`:""}
          `}).join("")}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${n(o)} + ${a(o)} liens = <b style="color:#fff">${n(o)+a(o)}</b>
      </div>
    </div>`}e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${s(l,t.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${r}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${c}</div>
    </div>

    ${s(p,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const o=document.getElementById("score-home"),f=document.getElementById("score-ai"),u=document.getElementById("midfield-result");if(o&&f&&(d?(o.style.fontSize="80px",o.style.color="#FFD700",f.style.opacity="0.25"):(f.style.fontSize="80px",f.style.color="#ff6b6b",o.style.opacity="0.25")),u){const g=Gt();u.style.opacity="1",d&&t.clubName,u.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${d?`${t.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${d?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${g}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,d&&(t.boostCard={value:g})}t.attacker=d?"home":"ai",t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:l.map(g=>({name:g.name,note:Q(g,"MIL"),portrait:ne(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),aiPlayers:p.map(g=>({name:g.name,note:Q(g,"MIL"),portrait:ne(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:r,aiTotal:c,text:`Duel milieu : ${t.clubName} ${r} – ${c} IA → ${d?t.clubName+" attaque":"IA attaque"}`}),setTimeout(()=>{var m,b;const g=(m=t.boostCard)==null?void 0:m.value;e.innerHTML=`
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
      </div>`,(b=document.getElementById("start-match-btn"))==null||b.addEventListener("click",()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",te(e,t,i),t.attacker==="ai"&&setTimeout(()=>Ye(e,t,i),800)})},100)},5e3)}function Rt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function ue(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const l=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:ne(e),p=Rt(e),n=e._line||e.job||"MIL",a=be[n]||"#555",r={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(Q(e,n))||0)+(e.boost||0),d=Nt(e==null?void 0:e.country_code),s=Math.round(i*.19),o=Math.round(i*.25),f=i-Math.round(i*.19)-Math.round(i*.25),u=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${r};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${u}">
    <div style="position:absolute;top:0;left:0;right:0;height:${s}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${l&&!(e!=null&&e.used)?`<img src="${l}" style="position:absolute;top:${s}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Ve(e==null?void 0:e.country_code)?`<img src="${Ve(e.country_code)}" style="width:${o+2}px;height:${o-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${o-4}px">${d}</span>`}
      <span style="font-size:${o-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${p?`<img src="${p}" style="width:${o-4}px;height:${o-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,o-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function Me(e,t,i){if(!(e!=null&&e.length))return"";const l=e.slice(0,5);let p='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return l.forEach((n,a)=>{if(p+=ue(n,40,52),a<l.length-1){const r=fe(n,l[a+1]);p+=`<div style="width:7px;height:3px;background:${r==="#ff3333"||r==="#cc2222"?"rgba(255,255,255,0.12)":r};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(p+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),p+="</div>",p}function Ve(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Nt(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Ee(e,t,i,l,p=310,n=310){const a=Te[t]||{},r=Tt(t)||Je[t]||[],c={},d=["ATT","MIL","DEF","GK"];for(const w of d)(e[w]||[]).forEach((A,G)=>{c[`${w}${G+1}`]=A});function s(w){const x=a[w];return x?{x:x.x*p,y:x.y*n}:null}let o="";for(const[w,x]of r){const A=s(w),G=s(x);if(!A||!G)continue;const v=c[w],E=c[x],I=fe(v,E);I==="#00ff88"||I==="#FFD700"?(o+=`<line x1="${A.x.toFixed(1)}" y1="${A.y.toFixed(1)}" x2="${G.x.toFixed(1)}" y2="${G.y.toFixed(1)}"
        stroke="${I}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,o+=`<line x1="${A.x.toFixed(1)}" y1="${A.y.toFixed(1)}" x2="${G.x.toFixed(1)}" y2="${G.y.toFixed(1)}"
        stroke="${I}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):o+=`<line x1="${A.x.toFixed(1)}" y1="${A.y.toFixed(1)}" x2="${G.x.toFixed(1)}" y2="${G.y.toFixed(1)}"
        stroke="${I}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const f=48,u=64,g=13,m=16,b={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[w,x]of Object.entries(c)){const A=s(w);if(!A||!x)continue;const G=w.replace(/[0-9]/g,""),v=be[G]||"#555",E=i==="attack"&&["MIL","ATT"].includes(G)&&!x.used||i==="defense"&&["GK","DEF","MIL"].includes(G)&&!x.used,I=l.includes(x.cardId);let h;i==="attack"?h=G==="MIL"?Number(x.note_m)||0:Number(x.note_a)||0:i==="defense"?h=G==="GK"?Number(x.note_g)||0:G==="MIL"?Number(x.note_m)||0:Number(x.note_d)||0:h=Number(G==="GK"?x.note_g:G==="DEF"?x.note_d:G==="MIL"?x.note_m:x.note_a)||0,h=h+(x.boost||0);const $=(A.x-f/2).toFixed(1),T=(A.y-u/2).toFixed(1),B=x.used?.25:1,z=b[x==null?void 0:x.rarity]||b.normal,F=I?"#ff3030":z,C=I?3:(x==null?void 0:x.rarity)==="légende"||(x==null?void 0:x.rarity)==="pépite"?2.5:2,N=u-g-m;o+=`<defs><clipPath id="cp-${w}"><rect x="${$}" y="${(A.y-u/2+g).toFixed(1)}" width="${f}" height="${N}"/></clipPath></defs>`,o+=`<rect x="${$}" y="${T}" width="${f}" height="${u}" rx="5" fill="${v}" opacity="${B}"/>`;const q=ne(x);q&&!x.used&&(o+=`<image href="${q}" x="${$}" y="${(A.y-u/2+g).toFixed(1)}" width="${f}" height="${N}" clip-path="url(#cp-${w})" preserveAspectRatio="xMidYMin slice"/>`),o+=`<rect x="${$}" y="${T}" width="${f}" height="${g}" rx="4" fill="rgba(255,255,255,0.92)"/>`,o+=`<text x="${A.x.toFixed(1)}" y="${(A.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(x.name||"").slice(0,9)}</text>`;const M=(A.y+u/2-m).toFixed(1);if(o+=`<rect x="${$}" y="${M}" width="${f}" height="${m}" fill="rgba(255,255,255,0.92)"/>`,x.used)o+=`<text x="${A.x.toFixed(1)}" y="${(A.y+u/2-m/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const P=Ve(x.country_code);P?o+=`<image href="${P}" x="${(A.x-20).toFixed(1)}" y="${(A.y+u/2-m+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:o+=`<text x="${(A.x-13).toFixed(1)}" y="${(A.y+u/2-m/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Nt(x.country_code)}</text>`,o+=`<text x="${A.x.toFixed(1)}" y="${(A.y+u/2-m/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${h}</text>`;const H=Rt(x);H?o+=`<image href="${H}" x="${(A.x+f/2-14).toFixed(1)}" y="${(A.y+u/2-m+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:x.clubName&&(o+=`<text x="${(A.x+14).toFixed(1)}" y="${(A.y+u/2-m/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(x.clubName||"").slice(0,3).toUpperCase()}</text>`),x.boost&&(o+=`<rect x="${(A.x+f/2-12).toFixed(1)}" y="${(A.y-u/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,o+=`<text x="${(A.x+f/2-5).toFixed(1)}" y="${(A.y-u/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${x.boost}</text>`)}o+=`<rect x="${$}" y="${T}" width="${f}" height="${u}" rx="5" fill="${I?"rgba(255,255,255,0.12)":"none"}" stroke="${F}" stroke-width="${C}" opacity="${B}"/>`,E&&(o+=`<rect x="${$}" y="${T}" width="${f}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${I?"selected":""}" data-card-id="${x.cardId}" data-role="${G}" style="cursor:pointer"/>`)}const L=38;return`<svg viewBox="${-L} ${-L} ${p+L*2} ${n+L*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${o}
  </svg>`}function nt(e,t,i,l,p=300,n=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ee(e,t,i,l,p,n)}
  </div>`}function ze(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}function Hi(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:wrap">
          ${(e.homePlayers||[]).map(i=>ze(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:wrap">
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function te(e,t,i){var g,m,b,L,w,x,A,G;const l=t.selected.map(v=>v.cardId),p=t.usedSubIds||[],n=t.homeSubs.filter(v=>!p.includes(v.cardId));Object.values(t.homeTeam).flat().filter(v=>v.used).length>0&&n.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const r=t.phase==="ai-attack"||t.phase==="ai-defense",c=t.phase==="attack",d=t.phase==="defense",s=t.phase==="finished",o=t.gcCards.filter(v=>!t.usedGc.includes(v.id)),f=t.boostCard&&!t.boostUsed;if(e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const E=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${Me((E.players||[]).map(I=>({...I,used:!1})),"#ff6b6b",E.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const E=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${Me((E.players||[]).map(I=>({...I,used:!1})),"#00ff88",E.total)}
          </div>`}const v=t.log[t.log.length-1];return v?'<div style="padding:2px 4px">'+Hi(v)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const v=window.innerWidth>=700,E=(C,N,q)=>{var Y,W;const M=(t.gcDefs||[]).find(U=>U.name===C.gc_type),P={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[M==null?void 0:M.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",H={purple:"#b06ce0",light_blue:"#00d4ef"}[M==null?void 0:M.color]||"#b06ce0",_=(M==null?void 0:M.name)||C.gc_type,y=(M==null?void 0:M.effect)||((Y=de[C.gc_type])==null?void 0:Y.desc)||"",j=M!=null&&M.image_url?`/manager-wars/icons/${M.image_url}`:null,S=((W=de[C.gc_type])==null?void 0:W.icon)||"⚡",D=Math.round(q*.22),O=Math.round(q*.22),R=q-D-O,X=_.length>12?7:9;return`<div class="gc-mini" data-gc-id="${C.id}" data-gc-type="${C.gc_type}"
          style="width:${N}px;height:${q}px;border-radius:10px;border:2px solid ${H};background:${P};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${D}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${X}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${N-6}px">${_}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${R}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${j?`<img src="${j}" style="max-width:${N-10}px;max-height:${R-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(R*.55)}px">${S}</span>`}
          </div>
          <div style="height:${O}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${y.slice(0,38)}</span>
          </div>
        </div>`},I=(C,N)=>{var q;return N?`<div id="boost-card" style="width:110px;padding:8px 6px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center">
            <div style="font-size:22px">⚡</div>
            <div style="font-size:10px;color:#000;font-weight:900">+${(q=t.boostCard)==null?void 0:q.value}</div>
          </div>`:E(C,110,150)},h=(C,N)=>{var q;return N?`<div id="boost-card" style="padding:4px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:7px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:1px;text-align:center;min-width:42px">
            <div style="font-size:15px">⚡</div>
            <div style="font-size:7px;color:#000;font-weight:900">+${(q=t.boostCard)==null?void 0:q.value}</div>
          </div>`:E(C,68,95)},$=v?"padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",T=s?`<button id="btn-results" style="${$};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:r?`<div style="${$};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:c?`<button id="btn-action" style="${$};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:d?`<button id="btn-action" style="${$};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${$};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,B=c||d?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",z=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${v?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(C=>`<div class="sub-btn-col" data-sub-id="${C.cardId}" style="cursor:pointer;flex-shrink:0">${ue(C,44,58)}</div>`).join("")}
      </div>`,F=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${nt(t.homeTeam,t.formation,t.phase,l,300,300)}
        </div>
      </div>`;return v?`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${z}
          ${F}
          <!-- Colonne droite : GC + bouton -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            ${o.map(C=>I(C,!1)).join("")}
            ${f?I(null,!0):""}
            <div style="flex:1"></div>
            <div style="width:100%">${T}${B}</div>
          </div>
        </div>`:`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${z}
          <div style="flex:1;min-width:0;display:flex;flex-direction:column;min-height:0">
            ${F}
            <!-- Zone bas mobile : GC grille + bouton -->
            <div style="display:flex;align-items:stretch;padding:4px 6px;background:rgba(0,0,0,0.35);gap:5px;flex-shrink:0">
              <div style="display:flex;flex-wrap:wrap;gap:3px;align-content:center;max-width:120px">
                ${o.map(C=>h(C,!1)).join("")}
                ${f?h(null,!0):""}
              </div>
              <div style="flex:0.8;display:flex;flex-direction:column;justify-content:center;gap:3px">
                ${T}${B}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(v=>{var E,I,h;if(v.type==="duel"){const $=v.isGoal,T=v.homeScored?"#FFD700":$?"#ff6b6b":"rgba(255,255,255,0.3)",B=v.homeScored?"⚽ BUT !":$?"⚽ BUT IA !":(E=v.homePlayers)!=null&&E.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${$?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${T};margin-bottom:4px">
                <div style="font-size:9px;color:${T};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${B}</div>
                ${(I=v.homePlayers)!=null&&I.length?`<div style="margin-bottom:3px">${Me(v.homePlayers,"rgba(255,255,255,0.7)",v.homeTotal)}</div>`:""}
                ${(h=v.aiPlayers)!=null&&h.length?`<div style="opacity:0.7">${Me(v.aiPlayers,"#ff6b6b",v.aiTotal)}</div>`:""}
              </div>`}return v.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${v.outPlayer?ue({...v.outPlayer,used:!0,_line:v.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${v.inPlayer?ue({...v.inPlayer,_line:v.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:v.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${v.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${v.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`,function(){const E=e.querySelector(".terrain-wrapper svg");if(!E)return;E.removeAttribute("width"),E.removeAttribute("height"),E.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",E.setAttribute("viewBox","-26 -26 352 352"),E.setAttribute("preserveAspectRatio","xMidYMid meet");const I=e.querySelector(".match-screen");if(I){const h=e.clientHeight;h>50&&(I.style.height=h+"px",I.style.overflow="hidden")}}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const v=e.querySelector(".terrain-wrapper svg");v&&(v.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let v=!1,E=30;const I=()=>document.getElementById("match-timer"),h=()=>{const $=I();if(!$)return;const T=String(Math.floor(E/60)).padStart(2,"0"),B=String(E%60).padStart(2,"0");$.textContent=` ${T}:${B}`,$.style.color=v?"#ff2222":"#ff9500",$.style.fontWeight="900"};h(),t._timerInt=setInterval(()=>{if(E--,E<0)if(!v)v=!0,E=15,h();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",$.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild($),setTimeout(()=>{$.remove(),ye(e,t,i)},2500)}else h()},1e3)}(g=document.getElementById("match-quit"))==null||g.addEventListener("click",()=>{le(),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,ye(e,t,i))}),(m=document.getElementById("view-ai"))==null||m.addEventListener("click",()=>Zi(t,i)),(b=document.getElementById("toggle-history"))==null||b.addEventListener("click",()=>{var v;(v=document.getElementById("match-history-panel"))==null||v.classList.add("open")}),(L=document.getElementById("close-history"))==null||L.addEventListener("click",()=>{var v;(v=document.getElementById("match-history-panel"))==null||v.classList.remove("open")}),(w=document.getElementById("btn-action"))==null||w.addEventListener("click",()=>{t.selected.length!==0&&(c?Ui(e,t,i):d&&Vi(e,t,i))}),(x=document.getElementById("btn-results"))==null||x.addEventListener("click",()=>ye(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(v=>{v.addEventListener("click",()=>Ki(v,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(v=>{v.addEventListener("click",()=>Xi(v.dataset.gcId,v.dataset.gcType,e,t,i))}),(A=document.getElementById("boost-card"))==null||A.addEventListener("click",()=>Qi(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(v=>{v.addEventListener("click",()=>$t(e,t,i,v.dataset.subId))}),(G=document.getElementById("sub-btn-main"))==null||G.addEventListener("click",()=>$t(e,t,i))}function Ki(e,t,i,l){const p=e.dataset.cardId,n=e.dataset.role,a=t.selected.findIndex(r=>r.cardId===p);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){l.toast("Maximum 3 joueurs","error");return}const r=(t.homeTeam[n]||[]).find(c=>c.cardId===p);r&&t.selected.push({...r,_role:n,_line:n})}te(i,t,l)}function ot(e,t,i){e.matchId&&k.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Ui(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ot(t,i,i.state.profile.id);const l=t.selected.map(n=>({...n,_line:n._role})),p=Qe(l,t.modifiers.home);t.pendingAttack={...p,players:[...t.selected],side:"home"},t.selected.forEach(n=>{const a=(t.homeTeam[n._role]||[]).find(r=>r.cardId===n.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${p.total} (base ${p.base}${p.links?` +${p.links} liens`:""}) — ${t.selected.map(n=>n.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",te(e,t,i),setTimeout(()=>Yi(e,t,i),1200)}function Vi(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ot(t,i,i.state.profile.id);const l=t.selected.map(r=>({...r,_line:r._role})),p=Ze(l,t.modifiers.home);t.selected.forEach(r=>{const c=(t.homeTeam[r._role]||[]).find(d=>d.cardId===r.cardId);c&&(c.used=!0)});const n=et(t.pendingAttack.total,p.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:ne(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homePlayers:t.selected.map(r=>{const c=(t.homeTeam[r._role]||[]).find(d=>d.cardId===r.cardId)||r;return{name:c.name,note:c._line==="GK"?c.note_g:c._line==="MIL"?c.note_m:c.note_d,portrait:ne(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:p.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(n.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(n.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${p.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,te(e,t,i),rt(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Ae(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${p.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Ae(e,t,i,"home-attack")}function Ye(e,t,i){ot(t,i,null);const l=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],p=Lt(l,"attack",t.difficulty);if(!p.length){Ot(e,t,i);return}const n=Qe(p,t.modifiers.ai);t.pendingAttack={...n,players:p,side:"ai"},p.forEach(d=>{d.used=!0}),t.log.push({text:`🤖 IA attaque : ${n.total} (${p.map(d=>d.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(d=>!d.used),c=(t.homeSubs||[]).filter(d=>!(t.usedSubIds||[]).includes(d.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!c){t.aiScore++;const d={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:p.map(s=>({name:s.name,note:s._line==="MIL"?s.note_m:s.note_a,portrait:ne(s),job:s.job,country_code:s.country_code,rarity:s.rarity,clubName:s.clubName,clubLogo:s.clubLogo})),aiTotal:n.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(d),t.pendingAttack=null,te(e,t,i),rt(d.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Ae(e,t,i,"home-attack")});return}t.phase="defense",te(e,t,i)}function Yi(e,t,i){const l=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],p=Lt(l,"defense",t.difficulty),n=p.length>0?Ze(p,t.modifiers.ai).total:0;p.forEach(c=>{c.used=!0});const a=et(t.pendingAttack.total,n,t.modifiers.ai),r={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(c=>({name:c.name,note:c._line==="MIL"?c.note_m:c.note_a,portrait:ne(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),aiPlayers:p.map(c=>({name:c.name,note:c._line==="GK"?c.note_g:c._line==="MIL"?c.note_m:c.note_d,portrait:ne(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:n,isGoal:!1,homeScored:!1,text:""};if(a.shielded)r.text="🛡️ Bouclier IA !",t.log.push(r);else if(a.goal){t.homeScore++,r.isGoal=!0,r.homeScored=!0,r.text=`⚽ BUT ! (${t.pendingAttack.total} > ${n})`,t.log.push(r),t.modifiers.ai={},t.pendingAttack=null,te(e,t,i),rt(r.homePlayers,t.homeScore,t.aiScore,!0,()=>{Ae(e,t,i,"ai-attack")});return}else r.text=`🧤 IA défend (${n} ≥ ${t.pendingAttack.total})`,t.log.push(r);t.modifiers.ai={},t.pendingAttack=null,Ae(e,t,i,"ai-attack")}function Ae(e,t,i,l){if(t.round++,Pt(t)){ye(e,t,i);return}if(l==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(n=>!n.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(a=>!a.used).length){ye(e,t,i);return}t.phase="ai-attack",te(e,t,i),setTimeout(()=>Ye(e,t,i),800);return}t.phase="attack",te(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(n=>!n.used).length){Ot(e,t,i);return}t.phase="ai-attack",te(e,t,i),setTimeout(()=>Ye(e,t,i),800)}}function Pt(e){const t=["MIL","ATT","GK","DEF"].some(l=>(e.homeTeam[l]||[]).some(p=>!p.used)),i=["MIL","ATT","GK","DEF"].some(l=>(e.aiTeam[l]||[]).some(p=>!p.used));return!t&&!i}function Ot(e,t,i){Pt(t)?ye(e,t,i):(t.phase="attack",te(e,t,i))}function Wi(e,t,i){const l=document.createElement("div");l.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const p=ne(e),n=ne(t),a=be[e.job]||"#555",r=be[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,d=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;l.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${a};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${p?`<img src="${p}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${c}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${r};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${d}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(l);let s=!1;const o=()=>{s||(s=!0,l.remove(),i())};l.addEventListener("click",o),setTimeout(o,2e3)}function $e(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function $t(e,t,i,l=null){if(t.phase!=="attack"){$e("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){$e(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const p=Object.values(t.homeTeam).flat().filter(o=>o.used),n=t.homeSubs.filter(o=>!t.usedSubIds.includes(o.cardId));if(!p.length){$e("Aucun joueur utilisé à remplacer");return}if(!n.length){$e("Aucun remplaçant disponible");return}let a=0,r=Math.max(0,n.findIndex(o=>o.cardId===l)),c=!1;const d=document.createElement("div");d.id="sub-overlay",d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function s(){var L,w,x,A,G,v;const o=p[a],f=n[r],u=Math.min(130,Math.round((window.innerWidth-90)/2)),g=Math.round(u*1.35),m=E=>`background:rgba(255,255,255,0.12);border:none;color:${E?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${E?"default":"pointer"};flex-shrink:0`;d.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${m(r===0)}" ${r===0?"disabled":""}>▲</button>
        <div>${f?ue({...f,used:!1,boost:0},u,g):"<div>—</div>"}</div>
        <button id="in-down" style="${m(r>=n.length-1)}" ${r>=n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${r+1}/${n.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${m(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${o?ue({...o,used:!1,boost:0},u,g):"<div>—</div>"}</div>
        <button id="out-down" style="${m(a>=p.length-1)}" ${a>=p.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${p.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(L=d.querySelector("#sub-close"))==null||L.addEventListener("click",()=>d.remove()),(w=d.querySelector("#out-up"))==null||w.addEventListener("click",()=>{a>0&&(a--,s())}),(x=d.querySelector("#out-down"))==null||x.addEventListener("click",()=>{a<p.length-1&&(a++,s())}),(A=d.querySelector("#in-up"))==null||A.addEventListener("click",()=>{r>0&&(r--,s())}),(G=d.querySelector("#in-down"))==null||G.addEventListener("click",()=>{r<n.length-1&&(r++,s())});const b=(E,I,h,$)=>{const T=d.querySelector("#"+E);if(!T)return;let B=0;T.addEventListener("touchstart",z=>{B=z.touches[0].clientY},{passive:!0}),T.addEventListener("touchend",z=>{const F=z.changedTouches[0].clientY-B;if(Math.abs(F)<30)return;const C=I();F<0&&C<$-1?(h(C+1),s()):F>0&&C>0&&(h(C-1),s())},{passive:!0})};b("in-panel",()=>r,E=>r=E,n.length),b("out-panel",()=>a,E=>a=E,p.length),(v=d.querySelector("#sub-confirm"))==null||v.addEventListener("click",E=>{if(E.preventDefault(),E.stopPropagation(),c)return;c=!0;const I=p[a],h=n[r];if(!I||!h)return;let $=null,T=-1;for(const[z,F]of Object.entries(t.homeTeam)){const C=(F||[]).findIndex(N=>N.cardId===I.cardId);if(C!==-1){$=z,T=C;break}}if(T===-1||!$){$e("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),d.remove();return}const B={...h,_line:$,_col:I._col||0,used:!1,boost:0};t.homeTeam[$].splice(T,1,B),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(h.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:I.name,firstname:I.firstname,note:Q(I,$),portrait:ne(I),job:I.job,country_code:I.country_code,rarity:I.rarity,clubName:I.clubName,clubLogo:I.clubLogo},inPlayer:{name:h.name,firstname:h.firstname,note:Q(h,$),portrait:ne(h),job:h.job,country_code:h.country_code,rarity:h.rarity,clubName:h.clubName,clubLogo:h.clubLogo},text:`🔄 ${h.firstname} ${h.name} remplace ${I.firstname} ${I.name}`}),d.remove(),Wi(I,h,()=>te(e,t,i))})}document.body.appendChild(d),s()}function Xi(e,t,i,l,p){var g,m;const n=(l.gcDefs||[]).find(b=>b.name===t),a=de[t]||{icon:"⚡",desc:"Carte spéciale."},r={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[n==null?void 0:n.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[n==null?void 0:n.color]||"#b06ce0",d=(n==null?void 0:n.name)||t,s=(n==null?void 0:n.effect)||a.desc,o=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,f=a.icon||"⚡",u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",u.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${c};background:${r};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${c}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${d.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${d}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${o?`<img src="${o}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${f}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${s}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(u),(g=u.querySelector("#gc-back"))==null||g.addEventListener("click",()=>u.remove()),(m=u.querySelector("#gc-use"))==null||m.addEventListener("click",()=>{u.remove(),Ji(e,t,i,l,p)})}function Oe(e,t,i,l,p,n){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let r=[];function c(){var d,s;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${r.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(o=>{const f=o._line||o.job||"MIL",u={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",g=Q(o,f)+(o.boost||0),m=r.find(b=>b.cardId===o.cardId);return`<div class="gc-pick-item" data-cid="${o.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${m?"#FFD700":"rgba(255,255,255,0.25)"};background:${u};overflow:hidden;cursor:pointer;flex-shrink:0;${o.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${o.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${g}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${r.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${r.length}/${t})
      </button>
    </div>`,(d=a.querySelector("#gc-picker-close"))==null||d.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(o=>{o.addEventListener("click",()=>{const f=o.dataset.cid,u=e.find(m=>m.cardId===f);if(!u)return;const g=r.findIndex(m=>m.cardId===f);g>-1?r.splice(g,1):r.length<t&&r.push(u),c()})}),(s=a.querySelector("#gc-picker-confirm"))==null||s.addEventListener("click",()=>{a.remove(),n(r)})}c(),document.body.appendChild(a)}const Ht={BOOST_STAT({value:e=2,target:t="home",count:i=1,roles:l=null},p,n,a){const r=t==="home"?p.homeTeam:p.aiTeam,c=Object.entries(r).flatMap(([d,s])=>!l||l.includes(d)?(s||[]).filter(o=>!o.used).map(o=>({...o,_line:d})):[]);return c.length?(Oe(c,i,e>0?`⚡ +${e} à ${i} joueur(s)`:`💀 -${Math.abs(e)} à ${i} joueur(s)`,n,p,d=>{d.forEach(s=>{for(const o of["GK","DEF","MIL","ATT"]){const f=(p.homeTeam[o]||[]).find(u=>u.cardId===s.cardId)||(p.aiTeam[o]||[]).find(u=>u.cardId===s.cardId);if(f){f.boost=(f.boost||0)+e;break}}}),p.log.push({text:`${e>0?"⚡":"💀"} ${Math.abs(e)>0?"+":""}${e} → ${d.map(s=>s.name).join(", ")}`,type:"info"}),te(n,p,a)}),!0):(a.toast("Aucun joueur disponible","error"),!0)},DEBUFF_STAT(e,t,i,l){return Ht.BOOST_STAT({...e,value:-Math.abs(e.value||2)},t,i,l)},GRAY_PLAYER({target:e="opponent",count:t=1,roles:i=null},l,p,n){const a=e==="opponent"?l.aiTeam:l.homeTeam,r=Object.entries(a).flatMap(([c,d])=>!i||i.includes(c)?(d||[]).filter(s=>!s.used).map(s=>({...s,_line:c})):[]);return r.length?(Oe(r,t,`❄️ Griser ${t} joueur(s)`,p,l,c=>{c.forEach(d=>{for(const s of Object.keys(l.aiTeam).concat(Object.keys(l.homeTeam))){const f=((e==="opponent"?l.aiTeam[s]:l.homeTeam[s])||[]).find(u=>u.cardId===d.cardId);if(f){f.used=!0;break}}}),l.log.push({text:`❄️ ${c.map(d=>d.name).join(", ")} grisé(s) !`,type:"info"}),te(p,l,n)}),!0):(n.toast("Aucun joueur à griser","error"),!0)},REVIVE_PLAYER({count:e=1},t,i,l){const p=Object.entries(t.homeTeam).flatMap(([n,a])=>(a||[]).filter(r=>r.used).map(r=>({...r,_line:n})));return p.length?(Oe(p,e,"💫 Ressusciter",i,t,n=>{n.forEach(a=>{for(const r of["GK","DEF","MIL","ATT"]){const c=(t.homeTeam[r]||[]).find(d=>d.cardId===a.cardId);if(c){c.used=!1;break}}}),t.log.push({text:`💫 ${n.map(a=>a.name).join(", ")} ressuscité(s) !`,type:"info"}),te(i,t,l)}),!0):(l.toast("Aucun joueur à ressusciter","error"),!0)},REMOVE_GOAL(e,t,i,l){return t.aiScore<=0?(l.toast("Aucun but adverse","error"),!1):(t.aiScore--,t.log.push({text:"🚫 But adverse retiré !",type:"info"}),!1)},ADD_GOAL_DRAW(e,t,i,l){return t.modifiers=t.modifiers||{},t.modifiers.home=t.modifiers.home||{},t.modifiers.home.addGoalOnDraw=!0,t.log.push({text:"⚽ +1 but si duel nul activé !",type:"info"}),!1},ADD_SUB({count:e=1},t,i,l){return t.maxSubs+=e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1}};function Ji(e,t,i,l,p){if(l.usedGc.includes(e))return;l.usedGc.push(e);const n=(l.gcDefs||[]).find(r=>r.name===t);let a=!1;if(n!=null&&n.effect_type&&n.effect_type!=="CUSTOM"){const r=Ht[n.effect_type];r?r(n.effect_params||{},l,i,p)||(a=!0):(p.toast(`Effet "${n.effect_type}" non implémenté`,"error"),a=!0)}else{switch(t){case"Double attaque":l.modifiers.home.doubleAttack=!0,l.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":l.modifiers.home.shield=!0,l.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const r=Object.entries(l.homeTeam).flatMap(([c,d])=>(d||[]).filter(s=>s.used).map(s=>({...s,_line:c})));r.length?(r[0].used=!1,l.log.push({text:`💫 ${r[0].name} ressuscité !`,type:"info"})):l.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":l.modifiers.ai.stolenNote=(l.modifiers.ai.stolenNote||0)+1,l.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const r=[...l.aiTeam.ATT||[],...l.aiTeam.MIL||[]].filter(c=>!c.used);if(r.length){const c=r.sort((d,s)=>Q(s,"ATT")-Q(d,"ATT"))[0];c.used=!0,l.log.push({text:`❄️ ${c.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":l.maxSubs++,l.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}a=!0}k.from("cards").delete().eq("id",e).then(()=>{}),a&&te(i,l,p)}function Qi(e,t,i){const l=Object.values(t.homeTeam).flat().filter(p=>!p.used);if(!l.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${l.map(p=>`
        <div class="player-boost-opt" data-card-id="${p.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${be[p.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Q(p,p._line||p.job)}</div>
          <div style="flex:1"><b>${p.firstname} ${p.name}</b><div style="font-size:11px;color:#888">${p._line||p.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(p=>{p.addEventListener("click",()=>{const n=p.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const r=(t.homeTeam[a]||[]).find(c=>c.cardId===n);if(r){r.boost=(r.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${r.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),te(e,t,i)})})}function rt(e,t,i,l,p){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(d,s)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${s%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][s%8]}
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
    ${l?"BUT !":"BUT IA !"}
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
    ${e.map(d=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${be[d.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${d.portrait?`<img src="${d.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(d.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(n);let r=!1;const c=()=>{r||(r=!0,n.remove(),setTimeout(()=>p(),50))};n.addEventListener("click",c),setTimeout(c,3500)}async function ye(e,t,i){var s,o;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:l}=i,p=t.homeScore>t.aiScore,n=t.homeScore===t.aiScore,a=p?"victoire":n?"nul":"defaite",r=Zt(t.mode,a);t.matchId&&await k.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:p?l.profile.id:null,home_credits_reward:r,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(l.profile.credits||0)+r,matches_played:(l.profile.matches_played||0)+1};p?c.wins=(l.profile.wins||0)+1:n?c.draws=(l.profile.draws||0)+1:c.losses=(l.profile.losses||0)+1,await k.from("users").update(c).eq("id",l.profile.id),await i.refreshProfile();const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",d.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${p?"🏆":n?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${p?"Victoire !":n?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${r.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(d),(s=document.getElementById("res-home"))==null||s.addEventListener("click",()=>{d.remove(),le(),i.navigate("home")}),(o=document.getElementById("res-replay"))==null||o.addEventListener("click",()=>{d.remove(),le(),i.navigate("match",{matchMode:t.mode})})}function Zi(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ee(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const en={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function tn(e,t){const{state:i,toast:l}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await at(e,t)}async function at(e,t){const{state:i,toast:l}=t,{data:p}=await k.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:n}=await k.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(p||[]).filter(d=>d.seller_id!==i.profile.id),r=n||[];r.filter(d=>d.status==="active").length,e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${a.length} carte(s) en vente · Solde : ${(i.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${r.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function c(d){const s=document.getElementById("mkt-content"),o=d==="buy"?a:r;if(o.length===0){s.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${d==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const f=d==="mine"?[...o].sort((u,g)=>u.status!==g.status?u.status==="active"?-1:1:new Date(g.listed_at)-new Date(u.listed_at)):o;s.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${f.map(u=>{var x,A,G,v;const g=(x=u.card)==null?void 0:x.player;if(!g)return"";const m=g.job==="GK"?g.note_g:g.job==="DEF"?g.note_d:g.job==="MIL"?g.note_m:g.note_a,b=en[g.rarity],L=(i.profile.credits||0)>=u.price,w=u.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${w?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${rn(g.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${b};flex-shrink:0">${m}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${g.firstname} ${g.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${g.country_code} · ${((A=g.clubs)==null?void 0:A.encoded_name)||"—"} · ${g.rarity} · ${g.job}</div>
            ${d==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((G=u.seller)==null?void 0:G.pseudo)||"—"}</div>`:w?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((v=u.buyer)==null?void 0:v.pseudo)||"—"} · ${u.sold_at?new Date(u.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(u.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${u.price.toLocaleString("fr")}</div>
            ${d==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${u.id}" ${L?"":"disabled"} style="margin-top:4px">${L?"Acheter":"Trop cher"}</button>`:w?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${u.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,s.querySelectorAll("[data-buy]").forEach(u=>{u.addEventListener("click",()=>nn(u.dataset.buy,o,e,t))}),s.querySelectorAll("[data-cancel]").forEach(u=>{u.addEventListener("click",()=>on(u.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(d=>{d.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(s=>{const o=s===d;s.style.background=o?"var(--green)":"#fff",s.style.color=o?"#fff":"var(--gray-600)",s.style.borderColor=o?"var(--green)":"var(--gray-200)"}),c(d.dataset.tab)})})}async function nn(e,t,i,l){var o;const{state:p,toast:n}=l,a=t.find(f=>f.id===e);if(!a)return;const r=a.price,c=p.profile.credits||0,d=(o=a.card)==null?void 0:o.player;if(c<r){n("Crédits insuffisants","error");return}if(!confirm(`Acheter ${d==null?void 0:d.firstname} ${d==null?void 0:d.surname_encoded} pour ${r.toLocaleString("fr")} crédits ?`))return;const s=document.querySelector(`[data-buy="${e}"]`);s&&(s.disabled=!0,s.textContent="⏳");try{const{data:f,error:u}=await k.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:p.profile.id});if(u)throw new Error(u.message);if(!(f!=null&&f.success))throw new Error((f==null?void 0:f.error)||"Achat impossible");p.profile.credits=c-r;const g=document.querySelector("[data-credits]")||document.querySelector(".credits-display");g&&(g.textContent=(c-r).toLocaleString("fr")+" cr."),n(`✅ ${d==null?void 0:d.surname_encoded} ajouté à ta collection !`,"success"),at(i,l)}catch(f){n("❌ "+f.message,"error"),s&&(s.disabled=!1,s.textContent="Acheter")}}async function on(e,t,i){const{toast:l}=i,{data:p}=await k.from("market_listings").select("card_id").eq("id",e).single();await k.from("market_listings").update({status:"cancelled"}).eq("id",e),p&&await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",p.card_id),l("Annonce retirée","success"),at(t,i)}function rn(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function an(e,{state:t,navigate:i,toast:l}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:p}=await k.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${p&&p.length>0?p.map((n,a)=>`
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
  `}async function sn(e,{state:t,navigate:i,toast:l}){const p=t.profile;if(!p)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await k.from("matches").select("id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at").or(`home_id.eq.${p.id},away_id.eq.${p.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},r=(n||[]).filter(s=>s.status==="finished"),c=(n||[]).filter(s=>s.status==="in_progress");function d(s){const o=s.home_id===p.id;o?s.home_score:s.away_score,o?s.away_score:s.home_score;const f=s.winner_id===p.id,u=s.home_score===s.away_score&&s.status==="finished",g=s.status!=="finished"?"…":u?"N":f?"V":"D",m=s.status!=="finished"||u?"#888":f?"#1A6B3C":"#c0392b";let b=a[s.mode]||s.mode;s.away_id===null&&!b.startsWith("IA")&&(b="IA");let L="";s.status==="in_progress"&&Date.now()-new Date(s.created_at).getTime()>3600*1e3&&(L=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const w=new Date(s.created_at),x=w.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+w.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),A=s.status==="finished"?`${s.home_score} - ${s.away_score}`:`${s.home_score||0} - ${s.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${b}${L}</div>
        <div style="font-size:11px;color:var(--gray-600)">${x}${s.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${A}</span>
        <span style="background:${m};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${g}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(n||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${c.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${c.map(d).join("")}
        </div>`:""}

      ${r.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${r.map(d).join("")}
        </div>`:""}

      ${(n||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const J={user:null,profile:null,page:"home",params:{}};function Ce(e,t="info",i=3e3){const l=document.getElementById("toast");l&&(l.textContent=e,l.className=`show ${t}`,clearTimeout(l._t),l._t=setTimeout(()=>{l.className=""},i))}function dn(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function We(){document.getElementById("modal-overlay").classList.add("hidden")}async function je(){if(!J.user)return;const{data:e}=await k.from("users").select("*").eq("id",J.user.id).single();e&&(J.profile=e)}const st="mw_theme";function qe(){return localStorage.getItem(st)||"light"}function ln(e){var t;localStorage.setItem(st,e),Xe(e),(t=J.profile)!=null&&t.id&&k.from("users").update({theme:e}).eq("id",J.profile.id).then(()=>{})}function Xe(e){document.documentElement.setAttribute("data-theme",e)}function Se(e,t={}){J.page=e,J.params=t,Kt()}async function Kt(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(l=>{l.classList.toggle("active",l.dataset.page===J.page)});const t=document.getElementById("nav-credits");t&&J.profile&&(t.textContent=`💰 ${(J.profile.credits||0).toLocaleString("fr")}`);const i={state:J,navigate:Se,toast:Ce,openModal:dn,closeModal:We,refreshProfile:je};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',J.page){case"home":await xt(e,i);break;case"collection":await ii(e,i);break;case"decks":await He(e,i);break;case"boosters":await bi(e,i);break;case"match":await qi(e,i);break;case"market":await tn(e,i);break;case"rankings":await an(e,i);break;case"matches":await sn(e,i);break;default:await xt(e,i)}}function cn(){const e=document.getElementById("app"),t=J.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(l=>{l.addEventListener("click",p=>{p.preventDefault(),Se(l.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Se("home")),document.getElementById("nav-credits").addEventListener("click",()=>Se("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const p=qe()==="dark"?"light":"dark";ln(p),kt(p)}),kt(qe())}function kt(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function pn(){Xe(qe()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&We()}),document.getElementById("modal-close").addEventListener("click",We);const{data:{session:e}}=await k.auth.getSession();if(!e){At(),ft(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Ce});return}J.user=e.user,await je(),At();try{const{data:t}=await k.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(l=>{i[l.formation]=l.links}),Wt(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!J.profile){Xt(document.getElementById("app"),{state:J,navigate:async()=>{await je(),Et()},toast:Ce,refreshProfile:je});return}J.profile.theme&&J.profile.theme!==qe()&&(localStorage.setItem(st,J.profile.theme),Xe(J.profile.theme)),Et(),k.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(J.user=null,J.profile=null,document.getElementById("app").innerHTML="",ft(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Ce}))})}function Et(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",cn(),Kt()}function At(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}pn();
