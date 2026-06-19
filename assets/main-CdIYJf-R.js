import{s as $,F as Oe,b as he,c as gt,l as re,d as jt}from"./formation-links-CDBKB_z4.js";function et(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(l=>{l.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(p=>p.classList.remove("active")),l.classList.add("active"),document.getElementById("tab-login").style.display=l.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=l.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const l=document.getElementById("login-email").value.trim(),p=document.getElementById("login-password").value,n=document.getElementById("login-error");if(n.textContent="",!l||!p){n.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:o}=await $.auth.signInWithPassword({email:l,password:p});if(a.textContent="Se connecter",a.disabled=!1,o){n.textContent=o.message.includes("Invalid")?"Email ou mot de passe incorrect.":o.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",l=>{l.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const l=document.getElementById("reg-email").value.trim(),p=document.getElementById("reg-password").value,n=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!l||!p||!n){a.textContent="Remplissez tous les champs.";return}if(p.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(p!==n){a.textContent="Les mots de passe ne correspondent pas.";return}const o=document.getElementById("reg-btn");o.textContent="Création…",o.disabled=!0;const{error:c}=await $.auth.signUp({email:l,password:p});if(o.textContent="Créer mon compte",o.disabled=!1,c){a.textContent=c.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=l})}function St(e,{state:t,navigate:i,toast:l,refreshProfile:p}){let n="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function o(){var g;const d=document.getElementById("logo-preview"),s=document.getElementById("logo-initials"),r=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",f=r.trim().split(" ").filter(Boolean),u=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():r.slice(0,2).toUpperCase();d&&(d.style.background=a,d.style.borderColor=n),s&&(s.textContent=u,s.style.color=n)}document.getElementById("color1").addEventListener("input",d=>{n=d.target.value,document.getElementById("swatch1").style.background=n,o()}),document.getElementById("color2").addEventListener("input",d=>{a=d.target.value,document.getElementById("swatch2").style.background=a,o()});function c(d){document.querySelectorAll(".setup-step").forEach(s=>s.classList.remove("active")),document.getElementById(`step-${d}`).classList.add("active"),document.getElementById("step-num").textContent=d,document.getElementById("progress-fill").style.width=`${Math.round(d/3*100)}%`,d===3&&o()}document.getElementById("step1-next").addEventListener("click",async()=>{const d=document.getElementById("setup-pseudo").value.trim(),s=document.getElementById("step1-error");if(s.textContent="",d.length<3){s.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:r}=await $.from("users").select("id").eq("pseudo",d).maybeSingle();if(r){s.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const d=document.getElementById("setup-club").value.trim(),s=document.getElementById("step2-error");if(s.textContent="",d.length<2){s.textContent="Nom trop court (min. 2 caractères).";return}const{data:r}=await $.from("users").select("id").eq("club_name",d).maybeSingle();if(r){s.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const d=document.getElementById("setup-pseudo").value.trim(),s=document.getElementById("setup-club").value.trim(),r=document.getElementById("step3-error"),f=document.getElementById("step3-finish");r.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:u}=await $.from("users").insert({id:t.user.id,pseudo:d,club_name:s,club_color1:n,club_color2:a,credits:1e4});if(u)throw u;await Bt(t.user.id),await p(),l(`Bienvenue ${d} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(u){r.textContent=u.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function Bt(e){const{data:t}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,l=i.filter(c=>c.job==="GK"),p=i.filter(c=>c.job!=="GK"),n=[];for(let c=0;c<5;c++){let d=[];if(c===0&&l.length>0){const s=l[Math.floor(Math.random()*l.length)];d.push(s);const r=tt([...p]).slice(0,3);d.push(...r)}else d=tt([...i]).slice(0,4);d.forEach(s=>{n.push({owner_id:e,player_id:s.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(c=>{n.push({owner_id:e,card_type:"game_changer",gc_type:c})});const o=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];n.push({owner_id:e,card_type:"formation",formation:o[Math.floor(Math.random()*o.length)]}),n.length>0&&await $.from("cards").insert(n),await $.from("users").update({first_booster_opened:!0}).eq("id",e)}function tt(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}async function it(e,{state:t,navigate:i,toast:l}){var a;const p=t.profile;if(!p)return;const{data:n}=await $.from("matches").select("id,home_score,away_score,status,mode,winner_id,created_at").or(`home_id.eq.${p.id},away_id.eq.${p.id}`).eq("status","finished").order("created_at",{ascending:!1}).limit(3);e.innerHTML=`
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
          ${n.map(o=>{const c=o.winner_id===p.id,d=o.home_score===o.away_score,s=d?"N":c?"V":"D",r=d?"#888":c?"#1A6B3C":"#c0392b",f={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat"}[o.mode]||o.mode,g=new Date(o.created_at).toLocaleDateString("fr",{month:"short",day:"numeric"});return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
              <div>
                <div style="font-size:13px;font-weight:600">${f}</div>
                <div style="font-size:11px;color:var(--gray-600)">${g}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <span style="font-size:14px;font-weight:700">${o.home_score} - ${o.away_score}</span>
                <span style="background:${r};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${s}</span>
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
  `,e.querySelectorAll("[data-nav]").forEach(o=>{o.addEventListener("click",c=>{c.preventDefault(),i(o.dataset.nav)})}),(a=document.getElementById("nav-rankings"))==null||a.addEventListener("click",()=>i("rankings")),e.querySelectorAll("[data-action]").forEach(o=>{o.addEventListener("click",()=>{o.classList.add("tapped"),setTimeout(()=>o.classList.remove("tapped"),200);const c=o.dataset.action;if(c==="match-ai"){Ft(i);return}if(c==="match-random"){i("match",{matchMode:"random"});return}l("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await $.auth.signOut(),window.location.reload()})}function Ft(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const l=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",l),i.addEventListener("click",p=>{p.target===i&&l()}),i.querySelectorAll("[data-mode]").forEach(p=>{p.addEventListener("click",()=>{l(),e("match",{matchMode:p.dataset.mode})})})}const ce={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function X(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const nt=["ATT","MIL","DEF","GK"];function xt(e){let t=0;const i=e.length;for(let l=0;l<i;l++)for(let p=l+1;p<i;p++){const n=e[l],a=e[p];if(!n||!a)continue;const o=n._col!==void 0&&a._col!==void 0&&n._col===a._col,c=n._col!==void 0&&a._col!==void 0&&Math.abs(n._col-a._col)===1,d=nt.indexOf(n._line),s=nt.indexOf(a._line),r=Math.abs(d-s)===1;(n._line===a._line&&c||o&&r)&&(n.country_code&&a.country_code&&n.country_code===a.country_code&&t++,n.club_id&&a.club_id&&n.club_id===a.club_id&&t++)}return t}function Pe(e,t={}){const i=e.reduce((n,a)=>{const o=a._line||a.job;return n+(Number(o==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),l=xt(e);let p=i+l;return t.doubleAttack&&(p*=2),t.stolenNote&&(p-=t.stolenNote),{base:i,links:l,total:Math.max(0,p)}}function He(e,t={}){const i=e.reduce((n,a)=>{const o=a._line||a.job;let c=0;return o==="GK"?c=Number(a.note_g)||0:o==="MIL"?c=Number(a.note_m)||0:c=Number(a.note_d)||0,n+c+(a.boost||0)},0),l=xt(e);let p=i+l;return t.stolenNote&&(p-=t.stolenNote),{base:i,links:l,total:Math.max(0,p)}}function Ke(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function mt(e,t,i="easy"){const l=e.filter(a=>!a.used);if(!l.length)return[];const p=[...l].sort((a,o)=>{const c=t==="attack"?X(a,"ATT"):a._line==="GK"?X(a,"GK"):X(a,"DEF");return(t==="attack"?X(o,"ATT"):o._line==="GK"?X(o,"GK"):X(o,"DEF"))-c});let n=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return p.slice(0,Math.min(n,p.length,3))}function Dt(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const yt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ae={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},be=["GK","DEF","MIL","ATT"],Gt=["Tous","GK","DEF","MIL","ATT"],Rt={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},Ue={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ht(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function me(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function je(e,t=""){var r,f;const i=e.player;if(!i)return"";const l=i.job||"ATT",p=Ae[l],n=yt[i.rarity]||"#ccc",a=me(i,l),o=i.job2?me(i,i.job2):null,c=i.job2?Ae[i.job2]:null,d=ht(i),s=Ue[i.country_code]||i.country_code||"";return`
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
        ${o!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${c}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${o}</text>
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
        ${(r=i.clubs)!=null&&r.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=i.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function ot(e){const t=e.job||"ATT",i=me(e,t),l=Ue[e.country_code]||e.country_code||"";return`
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
  </div>`}async function qt(e,t){const{state:i,navigate:l,toast:p,openModal:n,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await $.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:c}=await $.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),d=(o||[]).filter(A=>A.card_type==="player"&&A.player),s=(o||[]).filter(A=>A.card_type==="game_changer"),r=(o||[]).filter(A=>A.card_type==="formation"),{data:f}=await $.from("gc_definitions").select("name,gc_type,color,effect,image_url"),u={};(f||[]).forEach(A=>{u[A.name]=A});const g=Object.keys(Oe),h=Object.keys(ce),_={};d.forEach(A=>{const T=A.player.id;_[T]=(_[T]||0)+1}),new Set(Object.keys(_).map(A=>String(A)));const E=new Set(r.map(A=>A.formation)),w=new Set(s.map(A=>A.gc_type));let m="player",k="Tous",C="",v=!1;function x(){return[...d].sort((A,T)=>{const F=be.indexOf(A.player.job),D=be.indexOf(T.player.job);return F!==D?F-D:(A.player.surname_encoded||"").localeCompare(T.player.surname_encoded||"")})}function y(){return[...c||[]].sort((A,T)=>{const F=be.indexOf(A.job),D=be.indexOf(T.job);return F!==D?F-D:(A.surname_encoded||"").localeCompare(T.surname_encoded||"")})}function b(){return x().filter(A=>{const T=A.player,F=k==="Tous"||T.job===k,D=!C||`${T.firstname} ${T.surname_encoded}`.toLowerCase().includes(C);return F&&D})}function I(){return y().filter(A=>{const T=k==="Tous"||A.job===k,F=!C||`${A.firstname} ${A.surname_encoded}`.toLowerCase().includes(C);return T&&F})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${m==="player"?"var(--green)":"transparent"};
        color:${m==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${d.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${m==="formation"?"var(--green)":"transparent"};
        color:${m==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${r.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${m==="gc"?"var(--green)":"transparent"};
        color:${m==="gc"?"var(--green)":"var(--gray-600)"}">
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
  </div>`;function M(){const A=document.getElementById("col-filters");A&&(m==="player"?(A.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${C}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Gt.map(T=>`
            <button class="filter-btn" data-job="${T}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${T===k?"var(--green)":"var(--gray-200)"};
                background:${T===k?"var(--green)":"#fff"};
                color:${T===k?"#fff":"var(--gray-600)"}">
              ${T}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${v?"var(--yellow)":"var(--gray-200)"};
              background:${v?"var(--yellow)":"#fff"};
              color:${v?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${v?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",T=>{C=T.target.value.toLowerCase(),j()}),e.querySelectorAll(".filter-btn").forEach(T=>{T.addEventListener("click",()=>{k=T.dataset.job,M(),j()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{v=!v,M(),j()})):(A.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${v?"var(--yellow)":"var(--gray-200)"};
              background:${v?"var(--yellow)":"#fff"};
              color:${v?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${v?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{v=!v,M(),j()})))}function j(){const A=document.getElementById("col-grid");A&&(m==="player"?N(A):m==="formation"?O(A):S(A))}function q(A,T,F,D,B){B=B||"#7a28b8";const H=document.getElementById("col-grid"),G=document.getElementById("col-big");if(!H||!G)return;var W=0;function V(){G.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+T(A[W])+"</div>";var Y=G.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Y&&Y.addEventListener("click",function(){D(A[W])}),requestAnimationFrame(function(){var K=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!K||!G)){var Q=G.clientHeight-8,ee=G.clientWidth-24,te=K.offsetHeight,ie=K.offsetWidth;if(te>0&&ie>0&&Q>40){var ae=Math.min(Q/te,ee/ie,1);K.style.transform="scale("+ae.toFixed(3)+")",K.style.transformOrigin="top center"}}}),H.innerHTML=A.map(function(K,Q){return'<div class="col-mini-item" data-idx="'+Q+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(Q===W?B:"transparent")+';transition:border-color .15s;overflow:hidden">'+F(K,Q===W)+"</div>"}).join(""),H.querySelectorAll(".col-mini-item").forEach(function(K){K.addEventListener("click",function(){W=Number(K.dataset.idx),V(),K.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}V()}function R(A){var T=.54,F=Math.round(140*T),D=Math.round(310*T),B;if(!A||A._fake){var H=A?A.player:null;if(!H)return"";B=ot(H)}else B=je(A,"");return'<div style="width:'+F+"px;height:"+D+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+T+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+B+"</div></div>"}function L(A,T,F){T=T||100,F=F||140;var D=he[A]||{},B={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},H=Math.max(3,Math.round(T*.06)),G=Object.entries(D).map(function(V){var Y=V[0],K=V[1],Q=Y.replace(/\d+$/,""),ee=B[Q]||"#888",te=Math.round(K.x*T),ie=Math.round(K.y*F);return'<circle cx="'+te+'" cy="'+ie+'" r="'+H+'" fill="'+ee+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),W=Math.max(1,Math.round(T/50));return'<svg viewBox="0 0 '+T+" "+F+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+T+'" height="'+F+'" fill="#1A6B3C"/><rect x="'+Math.round(T*.2)+'" y="'+Math.round(F*.02)+'" width="'+Math.round(T*.6)+'" height="'+Math.round(F*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+W+'"/><line x1="0" y1="'+Math.round(F*.5)+'" x2="'+T+'" y2="'+Math.round(F*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+W+'"/><ellipse cx="'+Math.round(T*.5)+'" cy="'+Math.round(F*.5)+'" rx="'+Math.round(T*.18)+'" ry="'+Math.round(F*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+W+'"/><rect x="'+Math.round(T*.2)+'" y="'+Math.round(F*.82)+'" width="'+Math.round(T*.6)+'" height="'+Math.round(F*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+W+'"/>'+G+"</svg>"}function z(A,T,F){var D=F>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+F+"</div>":"",B=T?'data-form-id="'+T.id+'"':"",H=A.length>7?14:A.length>5?16:19,G=!!T;return"<div "+B+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(G?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(G?"":"filter:grayscale(1);opacity:0.5")+'">'+D+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(G?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+H+"px;font-weight:900;color:"+(G?"#1A6B3C":"#aaa")+';line-height:1">'+A+'</div></div><div style="flex:1;overflow:hidden;background:'+(G?"#1A6B3C":"#ccc")+'">'+L(A,140,220)+"</div></div>"}function P(A,T){var F=.54,D=Math.round(140*F),B=Math.round(305*F),H=Math.round(B*.22),G=B-H,W=A.length>7?5:7,V=L(A,D,G),Y=T?"1.5px solid #2a7a40":"1px solid #ddd",K=T?"":"filter:grayscale(1);opacity:0.45;",Q=T?"#1A6B3C":"#bbb",ee="#fff";return'<div style="width:'+D+"px;height:"+B+"px;border-radius:6px;border:"+Y+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+K+'"><div style="height:'+H+"px;background:"+Q+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+W+"px;font-weight:900;color:"+ee+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(D-4)+'px">'+A+'</span></div><div style="height:'+G+'px;overflow:hidden;flex-shrink:0">'+V+"</div></div>"}function N(A){if(v){const T=I();if(!T.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const F=T.map(D=>d.find(B=>B.player.id===D.id)||{_fake:!0,player:D,id:"fake-"+D.id});q(F,D=>D._fake?ot(D.player):je(D,""),D=>D._fake?R({player:D.player,id:"x",_fake:!0}):R(D),D=>{D._fake||rt(D,d,_,t)},"#1A6B3C")}else{const T=b();if(!T.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const F={},D=[];T.forEach(B=>{F[B.player.id]||(F[B.player.id]=!0,D.push(B))}),q(D,B=>{const H=_[B.player.id]||1,G=H>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${H}</div>`:"",V=d.filter(Y=>Y.player.id===B.player.id&&Y.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return je(B,G+V)},B=>R(B),B=>rt(B,d,_,t),"#1A6B3C")}}function O(A){const T=v?g:[...E];if(!T.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const F=T.map(D=>({formation:D,card:r.find(B=>B.formation===D)||null,owned:E.has(D)}));q(F,({formation:D,card:B,owned:H})=>z(D,H?B:null,H?r.filter(G=>G.formation===D).length:0),({formation:D,owned:B})=>P(D,B),({card:D,owned:B})=>{B&&D&&Ot(D,r,t,n)},"#1A6B3C")}function S(A){const T=Object.keys(u),F=v?T.length?T:h:[...w];if(!F.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const D=F.map(B=>({type:B,gc:ce[B]||{icon:"⚡",desc:""},def:u[B]||null,owned:w.has(B),card:s.find(H=>H.gc_type===B)||null}));q(D,({type:B,gc:H,def:G,owned:W,card:V})=>{const Y=W?s.filter(Ct=>Ct.gc_type===B).length:0,K=Y>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Y}</div>`:"",Q=(G==null?void 0:G.gc_type)==="ultra_game_changer",ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},te={purple:"#b06ce0",light_blue:"#00d4ef"},ie=ee[G==null?void 0:G.color]||ee.purple,ae=te[G==null?void 0:G.color]||te.purple,ve=(G==null?void 0:G.effect)||H.desc||"",Qe=G!=null&&G.image_url?`/manager-wars/icons/${G.image_url}`:null;return W&&V?`<div data-gc-id="${V.id}" data-gc-type="${B}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${ae};background:${ie};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${ae}66;cursor:pointer">
          ${K}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${B.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${B}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Q?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Qe?`<img src="${Qe}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${H.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${ve.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${B}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${H.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:B,gc:H,def:G,owned:W})=>W?(()=>{const V=Math.round(75.60000000000001),Y=Math.round(310*.54),K=Math.round(Y*.65),Q=Math.round(Y*.18),ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},te={purple:"#9b59b6",light_blue:"#00bcd4"},ie=ee[G==null?void 0:G.color]||ee.purple,ae=te[G==null?void 0:G.color]||te.purple,ve=G!=null&&G.image_url?`/manager-wars/icons/${G.image_url}`:null;return`<div style="width:${V}px;height:${Y}px;border-radius:8px;background:${ie};border:1px solid ${ae};display:flex;flex-direction:column;overflow:hidden"><div style="height:${Q}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${V-6}px">${B}</span></div><div style="height:${K}px;display:flex;align-items:center;justify-content:center">${ve?`<img src="${ve}" style="max-width:${V-8}px;max-height:${K-4}px;object-fit:contain">`:`<span style="font-size:24px">${H.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((G==null?void 0:G.effect)||H.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const V=Math.round(75.60000000000001),Y=Math.round(310*.54);return`<div style="width:${V}px;height:${Y}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${H.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${B}</span></div>`})(),({type:B,owned:H,def:G})=>{H&&Nt(B,G,n)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(A=>{A.addEventListener("click",()=>{m=A.dataset.tab,k="Tous",C="",v=!1,e.querySelectorAll(".col-tab-btn").forEach(T=>{const F=T.dataset.tab===m;T.style.borderBottomColor=F?"var(--green)":"transparent",T.style.color=F?"var(--green)":"var(--gray-600)"}),M(),j()})}),M(),j()}function Nt(e,t,i){const l=ce[e]||{icon:"⚡",desc:"Effet spécial."},p=(t==null?void 0:t.gc_type)==="ultra_game_changer",n={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},o=n[t==null?void 0:t.color]||n.purple,c=a[t==null?void 0:t.color]||a.purple,d=(t==null?void 0:t.name)||e,s=(t==null?void 0:t.effect)||l.desc,r=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${o};border-radius:16px;border:2px solid ${c};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${p?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${d}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${r?`<img src="${r}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${l.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${s}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ge=1e3;function Ot(e,t,i,l){var h,_,E;const{state:p,toast:n,closeModal:a,navigate:o,refreshProfile:c}=i,d=e.formation,s={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function r(){const w=he[d]||{},m=Oe[d]||[],k=290,C=360,v=20;function x(b){const I=w[b];return I?{x:I.x*k,y:I.y*C}:null}let y=`<svg width="${k}" height="${C}" viewBox="0 0 ${k} ${C}" xmlns="http://www.w3.org/2000/svg">`;for(const[b,I]of m){const M=x(b),j=x(I);!M||!j||(y+=`<line x1="${M.x}" y1="${M.y}" x2="${j.x}" y2="${j.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const b of Object.keys(w)){const I=x(b);if(!I)continue;const M=b.replace(/\d+/,""),j=s[M]||"#555";y+=`<circle cx="${I.x}" cy="${I.y}" r="${v}" fill="${j}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,y+=`<text x="${I.x}" y="${I.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${M}</text>`}return y+="</svg>",y}const f=t.filter(w=>w.formation===d),u=f.length,g=!e.is_for_sale;l(`Formation ${d}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${r()}
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${ge.toLocaleString("fr")} crédits</div>
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${ge}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(h=document.getElementById("direct-sell-form-btn"))==null||h.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${d} pour ${ge.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const w=f.find(k=>!k.is_for_sale)||f[0];if(!w){n("Aucune carte à vendre","error");return}const{error:m}=await $.from("cards").delete().eq("id",w.id);if(m){n(m.message,"error");return}await $.from("users").update({credits:(p.profile.credits||0)+ge}).eq("id",p.profile.id),await c(),n(`+${ge.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),o("collection")}),(_=document.getElementById("market-sell-form-btn"))==null||_.addEventListener("click",async()=>{const w=parseInt(document.getElementById("sell-price-form").value);if(!w||w<1){n("Prix invalide","error");return}await $.from("cards").update({is_for_sale:!0,sale_price:w}).eq("id",e.id),await $.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:w}),n("Carte mise en vente sur le marché !","success"),a(),o("collection")}),(E=document.getElementById("cancel-sell-form-btn"))==null||E.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),n("Annonce retirée","success"),a(),o("collection")})}async function rt(e,t,i,l){var y,b,I,M,j,q;const{state:p,toast:n,openModal:a,closeModal:o,navigate:c,refreshProfile:d}=l,s=e.player,r=t.filter(R=>R.player.id===s.id),f=r.length,u=Rt[s.rarity]||1e3,g=s.rarity!=="legende",h=ht(s),_=me(s,s.job),E=s.job2?me(s,s.job2):null,w=Ae[s.job]||"#1A6B3C",m=s.job2?Ae[s.job2]:null,k=yt[s.rarity]||"#ccc",C=Ue[s.country_code]||s.country_code||"",{data:v}=await $.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",s.id).order("transferred_at",{ascending:!0}),x=v&&v.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${v.map(R=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${R.club_name} <span style="color:var(--gray-600)">(${R.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${R.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${R.source==="booster"?"Booster":R.price?R.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";a(`${s.firstname} ${s.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${k};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${s.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(s.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${w}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${w}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${_}</text>
            </svg>
            ${E!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${m}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${E}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${h?`<img src="${h}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${s.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${C}</div>
            ${(y=s.clubs)!=null&&y.logo_url?`<img src="${s.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((b=s.clubs)==null?void 0:b.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${k}">${s.rarity.toUpperCase()}</div>
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
    ${x}

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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(I=document.getElementById("close-detail"))==null||I.addEventListener("click",o),(M=document.getElementById("direct-sell-btn"))==null||M.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${s.surname_encoded} pour ${u.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const R=r.find(z=>!z.is_for_sale)||r[0];if(!R){n("Aucune carte à vendre","error");return}const{error:L}=await $.from("cards").delete().eq("id",R.id);if(L){n(L.message,"error");return}await $.from("users").update({credits:(p.profile.credits||0)+u}).eq("id",p.profile.id),await d(),n(`+${u.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),o(),c("collection")}),(j=document.getElementById("market-sell-btn"))==null||j.addEventListener("click",async()=>{const R=parseInt(document.getElementById("sell-price").value);if(!R||R<1){n("Prix invalide","error");return}await $.from("cards").update({is_for_sale:!0,sale_price:R}).eq("id",e.id),await $.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:R}),n("Carte mise en vente sur le marché !","success"),o(),c("collection")}),(q=document.getElementById("cancel-sell-btn"))==null||q.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),n("Annonce retirée","success"),o(),c("collection")})}const Ie={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},oe={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ze(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function vt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function bt(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Pt(e,t=44,i=58){var u;const l=e?ze(e):null,p=e?bt(e):null,n=vt(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",o=oe[a]||"#555",c={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",d=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,s=Math.round(i*.19),r=Math.round(i*.25),f=i-s-r;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${c};background:${o};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${s}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${l?`<img src="${l}" style="position:absolute;top:${s}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${n?`<img src="${n}" style="width:${r+2}px;height:${r-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${r-4}px">🌍</span>`}
      <span style="font-size:${r-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${d}</span>
      ${p?`<img src="${p}" style="width:${r-4}px;height:${r-4}px;object-fit:contain">`:(u=e==null?void 0:e.clubs)!=null&&u.encoded_name?`<span style="font-size:${Math.max(4,r-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Be(e,t){const{state:i,navigate:l,toast:p}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await $.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!a)return;const{data:o,error:c}=await $.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(c){p(c.message,"error");return}p("Deck créé !","success"),at(o.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>at(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const o=prompt("Nouveau nom :",a.dataset.name);if(!o||o===a.dataset.name)return;const{error:c}=await $.from("decks").update({name:o}).eq("id",a.dataset.rename);if(c){p(c.message,"error");return}p("Deck renommé !","success"),Be(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await $.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:o}=await $.from("decks").delete().eq("id",a.dataset.delete);if(o){p(o.message,"error");return}p("Deck supprimé.","success"),Be(e,t)})})}async function at(e,t,i){const{state:l,toast:p}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await $.from("decks").select("*").eq("id",e).single(),{data:a}=await $.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",l.profile.id),o=(a||[]).filter(u=>u.card_type==="player"&&u.player),c=(a||[]).filter(u=>u.card_type==="formation"),d=c.map(u=>u.formation).filter(Boolean),{data:s}=await $.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let r=n.formation||"4-4-2";d.length>0&&!d.includes(r)&&(r=d[0]);const f={deckId:e,name:n.name,formation:r,formationCardId:n.formation_card_id,slots:{},subs:[],playerCards:o,formationCards:c,availableFormations:d};(s||[]).forEach(u=>{u.is_starter?f.slots[u.position]=u.card_id:f.subs.includes(u.card_id)||f.subs.push(u.card_id)}),pe(t,f,i)}function pe(e,t,i){var c;const{navigate:l}=i;Ie[t.formation];const p=st(t.formation),n=p.filter(d=>t.slots[d]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(Ie),o=t.subs.map(d=>t.playerCards.find(s=>s.id===d)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${o.map(d=>{const s=d.player;return`<div style="position:relative;flex-shrink:0">
            ${Pt(s,44,58)}
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
  </div>`,Ht(e,t,p,i),document.getElementById("builder-back").addEventListener("click",()=>l("decks")),document.getElementById("formation-select").addEventListener("change",d=>{t.formation=d.target.value;const s=st(t.formation),r={};s.forEach(f=>{t.slots[f]&&(r[f]=t.slots[f])}),t.slots=r,pe(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>Vt(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(d=>{d.addEventListener("click",()=>{t.subs=t.subs.filter(s=>s!==d.dataset.removeSub),pe(e,t,i)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{Ut(t,e,i)})}function Ht(e,t,i,l){const p=e.querySelector("#deck-field");if(!p)return;const n=he[t.formation]||{},a=gt(t.formation)||[],o={};for(const E of i){const w=t.slots[E],m=w?t.playerCards.find(k=>k.id===w):null;o[E]=m?m.player:null}const c=300,d=300,s=48,r=64,f=13,u=16,g=38;function h(E){const w=n[E];return w?{x:w.x*c,y:w.y*d}:null}let _="";for(const[E,w]of a){const m=h(E),k=h(w);if(!m||!k)continue;const C=o[E]?{...o[E],club_id:o[E].club_id,country_code:o[E].country_code,rarity:o[E].rarity}:null,v=o[w]?{...o[w],club_id:o[w].club_id,country_code:o[w].country_code,rarity:o[w].rarity}:null,x=re(C,v);x==="#ff3333"||x==="#cc2222"?_+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}" stroke="${x}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(_+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}" stroke="${x}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,_+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}" stroke="${x}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const E of i){const w=h(E);if(!w)continue;const m=o[E],k=E.replace(/\d+/,""),C=oe[k]||"#555",v=(w.x-s/2).toFixed(1),x=(w.y-r/2).toFixed(1),y={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[m==null?void 0:m.rarity]||"#aaa";if(m){const b=ze(m),I=bt(m),M=vt(m.country_code),j=Number(k==="GK"?m.note_g:k==="DEF"?m.note_d:k==="MIL"?m.note_m:m.note_a)||0,q=r-f-u;_+=`<defs><clipPath id="dcp-${E}"><rect x="${v}" y="${(w.y-r/2+f).toFixed(1)}" width="${s}" height="${q}"/></clipPath></defs>`,_+=`<rect x="${v}" y="${x}" width="${s}" height="${r}" rx="5" fill="${C}"/>`,b&&(_+=`<image href="${b}" x="${v}" y="${(w.y-r/2+f).toFixed(1)}" width="${s}" height="${q}" clip-path="url(#dcp-${E})" preserveAspectRatio="xMidYMin slice"/>`),_+=`<rect x="${v}" y="${x}" width="${s}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,_+=`<text x="${w.x.toFixed(1)}" y="${(w.y-r/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(m.surname_encoded||"").slice(0,9)}</text>`;const R=(w.y+r/2-u).toFixed(1);_+=`<rect x="${v}" y="${R}" width="${s}" height="${u}" fill="rgba(255,255,255,0.93)"/>`,M&&(_+=`<image href="${M}" x="${(w.x-21).toFixed(1)}" y="${(w.y+r/2-u+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),_+=`<text x="${w.x.toFixed(1)}" y="${(w.y+r/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${j}</text>`,I&&(_+=`<image href="${I}" x="${(w.x+s/2-14).toFixed(1)}" y="${(w.y+r/2-u+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),_+=`<rect x="${v}" y="${x}" width="${s}" height="${r}" rx="5" fill="none" stroke="${y}" stroke-width="2"/>`}else _+=`<rect x="${v}" y="${x}" width="${s}" height="${r}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,_+=`<text x="${w.x.toFixed(1)}" y="${w.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,_+=`<text x="${w.x.toFixed(1)}" y="${(w.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${k}</text>`;_+=`<rect x="${v}" y="${x}" width="${s}" height="${r}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${E}" style="cursor:pointer"/>`}p.innerHTML=`<svg viewBox="${-g} ${-g} ${c+g*2} ${d+g*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${_}</svg>`,p.querySelectorAll(".deck-slot-hit").forEach(E=>{E.addEventListener("click",()=>Kt(E.dataset.pos,t,e,l))})}function Kt(e,t,i,l){var f,u,g;const{openModal:p,closeModal:n}=l,a=e.replace(/\d+/,""),o=t.slots[e],c=o?t.playerCards.find(h=>h.id===o):null;(f=c==null?void 0:c.player)==null||f.id;const d=new Set;Object.entries(t.slots).forEach(([h,_])=>{var w;if(h===e||!_)return;const E=t.playerCards.find(m=>m.id===_);(w=E==null?void 0:E.player)!=null&&w.id&&d.add(E.player.id)}),t.subs.forEach(h=>{var E;const _=t.playerCards.find(w=>w.id===h);(E=_==null?void 0:_.player)!=null&&E.id&&d.add(_.player.id)});const s=new Set,r=t.playerCards.filter(h=>{const _=h.player;return!(_.job===a||_.job2===a)||d.has(_.id)||s.has(_.id)?!1:(s.add(_.id),!0)});r.sort((h,_)=>{const E=a==="GK"?h.player.note_g:a==="DEF"?h.player.note_d:a==="MIL"?h.player.note_m:h.player.note_a;return(a==="GK"?_.player.note_g:a==="DEF"?_.player.note_d:a==="MIL"?_.player.note_m:_.player.note_a)-E}),p(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${r.length>0?r.map(h=>{var k,C;const _=h.player,E=a==="GK"?_.note_g:a==="DEF"?_.note_d:a==="MIL"?_.note_m:_.note_a,w=ze(_),m={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[_.rarity];return`<div class="player-option" data-card-id="${h.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${oe[a]}">
            ${w?`<img src="${w}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${oe[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${_.firstname} ${_.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${_.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${_.country_code}">
              ${(k=_.clubs)!=null&&k.logo_url?`<img src="${_.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((C=_.clubs)==null?void 0:C.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${_.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${oe[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${m};flex-shrink:0">
            ${E}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(u=document.getElementById("close-selector"))==null||u.addEventListener("click",n),(g=document.getElementById("remove-player"))==null||g.addEventListener("click",()=>{delete t.slots[e],n(),pe(i,t,l)}),document.querySelectorAll(".player-option").forEach(h=>{h.addEventListener("click",()=>{t.slots[e]=h.dataset.cardId,n(),pe(i,t,l)})})}function Ut(e,t,i){var c;const{openModal:l,closeModal:p}=i,n=new Set;Object.values(e.slots).filter(Boolean).forEach(d=>{var r;const s=e.playerCards.find(f=>f.id===d);(r=s==null?void 0:s.player)!=null&&r.id&&n.add(s.player.id)}),e.subs.forEach(d=>{var r;const s=e.playerCards.find(f=>f.id===d);(r=s==null?void 0:s.player)!=null&&r.id&&n.add(s.player.id)});const a=new Set,o=e.playerCards.filter(d=>{var s,r,f;return n.has((s=d.player)==null?void 0:s.id)||a.has((r=d.player)==null?void 0:r.id)?!1:(a.add((f=d.player)==null?void 0:f.id),!0)});l("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${o.length>0?o.map(d=>{var u;const s=d.player,r=ze(s),f=s.job==="GK"?s.note_g:s.job==="DEF"?s.note_d:s.job==="MIL"?s.note_m:s.note_a;return`<div class="player-option" data-card-id="${d.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${oe[s.job]}">
            ${r?`<img src="${r}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${s.firstname} ${s.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${s.job} · ${s.country_code} · ${((u=s.clubs)==null?void 0:u.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${oe[s.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",p),document.querySelectorAll(".player-option").forEach(d=>{d.addEventListener("click",()=>{e.subs.push(d.dataset.cardId),p(),pe(t,e,i)})})}async function Vt(e,t){const{state:i,toast:l,navigate:p}=t,n=e.formationCards.find(c=>c.formation===e.formation),a=(n==null?void 0:n.id)||e.formationCardId;await $.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await $.from("deck_cards").delete().eq("deck_id",e.deckId);const o=[];if(Object.entries(e.slots).forEach(([c,d],s)=>{o.push({deck_id:e.deckId,card_id:d,position:c,is_starter:!0,slot_order:s})}),e.subs.forEach((c,d)=>{o.push({deck_id:e.deckId,card_id:c,position:`SUB${d+1}`,is_starter:!1,slot_order:100+d})}),o.length>0){const{error:c}=await $.from("deck_cards").insert(o);if(c){l(c.message,"error");return}}l("Deck enregistré ✅","success"),p("decks")}function st(e){const t=Ie[e]||Ie["4-4-2"],i=["GK1"];for(let l=1;l<=t.DEF;l++)i.push(`DEF${l}`);for(let l=1;l<=t.MIL;l++)i.push(`MIL${l}`);for(let l=1;l<=t.ATT;l++)i.push(`ATT${l}`);return i}const Yt="modulepreload",Wt=function(e){return"/manager-wars/"+e},dt={},Xt=function(t,i,l){let p=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));p=Promise.allSettled(i.map(c=>{if(c=Wt(c),c in dt)return;dt[c]=!0;const d=c.endsWith(".css"),s=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${s}`))return;const r=document.createElement("link");if(r.rel=d?"stylesheet":Yt,d||(r.as="script"),r.crossOrigin="",r.href=c,o&&r.setAttribute("nonce",o),document.head.appendChild(r),d)return new Promise((f,u)=>{r.addEventListener("load",f),r.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return p.then(a=>{for(const o of a||[])o.status==="rejected"&&n(o.reason);return t().catch(n)})};async function _t(){const{data:e}=await $.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await $.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(l=>l.booster_id===i.id)}))}function Jt(e){if(!(e!=null&&e.length))return null;const t=e.reduce((l,p)=>l+Number(p.percentage),0);let i=Math.random()*t;for(const l of e)if(i-=Number(l.percentage),i<=0)return l;return e[e.length-1]}const Zt=Object.freeze(Object.defineProperty({__proto__:null,loadActiveBoosters:_t,rollDropRate:Jt},Symbol.toStringTag,{value:"Module"})),wt=()=>Object.keys(he),Qt=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Fe={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ei(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const ti={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ii={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};function ni(e){var p;const t={};(e.rates||[]).forEach(n=>{t[n.card_type]=(t[n.card_type]||0)+Number(n.percentage||0)});const i=((p=Object.entries(t).sort((n,a)=>a[1]-n[1])[0])==null?void 0:p[0])||"player",l=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+l,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function oi(e,{state:t,navigate:i,toast:l}){var a;const p=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let n=[];try{n=(await _t()).map(ni)}catch(o){console.warn("Erreur chargement boosters DB, fallback hardcodé",o)}n.length||(n=Qt.map(o=>({...o,rates:[],isPub:o.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${p.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${n.map(o=>{const c=o.cost===0||p>=o.cost;return`<div class="booster-card ${c?"":"disabled"}" data-booster="${o.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${o.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${o.img}" alt="${o.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${o.name}</div>
            <div class="desc">${o.sub}</div>
            <div class="cost">${o.costLabel}</div>
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(o=>{o.addEventListener("click",async()=>{const c=n.find(d=>d.id===o.dataset.booster);if(c){o.style.opacity="0.5",o.style.pointerEvents="none";try{await ri(c,{state:t,toast:l,navigate:i,container:e})}catch(d){l(d.message,"error"),o.style.opacity="",o.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(o=>{o.addEventListener("click",c=>{c.stopPropagation();const d=n.find(s=>s.id===o.dataset.boosterId);fi(d)})})}async function ri(e,{state:t,toast:i,navigate:l,container:p}){if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await mi()}catch(r){i(r.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:n}=await $.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((n||[]).filter(r=>r.card_type==="player").map(r=>r.player_id)),o=new Set((n||[]).filter(r=>r.card_type==="formation").map(r=>r.formation));let c=[];const d=e.type||"player";d==="player"?c=await li(t.profile,e.cardCount,e.cost):d==="game_changer"?c=await ci(t.profile,e.cardCount,e.cost):d==="formation"?c=await pi(t.profile,e.cost):c=await di(t.profile,e),c.forEach(r=>{r.card_type==="player"&&r.player?r.isDuplicate=a.has(r.player.id):r.card_type==="formation"&&(r.isDuplicate=o.has(r.formation))});const{data:s}=await $.from("users").select("*").eq("id",t.profile.id).single();s&&(t.profile=s),ui(c,e,l)}function ai(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function se(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function si(e,t){let i;switch(t){case"legende":i=e.filter(l=>l.rarity==="legende"),i.length||(i=e.filter(l=>l.rarity==="pepite"||l.rarity==="papyte")),i.length||(i=e.filter(l=>se(l)>=6));break;case"special":i=e.filter(l=>l.rarity==="pepite"||l.rarity==="papyte"),i.length||(i=e.filter(l=>se(l)>=6));break;case"normal_high":i=e.filter(l=>l.rarity==="normal"&&se(l)>=6),i.length||(i=e.filter(l=>se(l)>=6));break;default:i=e.filter(l=>l.rarity==="normal"&&se(l)>=1&&se(l)<=5),i.length||(i=e.filter(l=>l.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function di(e,t){if(t.cost>0){const{error:p}=await $.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(p)throw p}const{rollDropRate:i}=await Xt(async()=>{const{rollDropRate:p}=await Promise.resolve().then(()=>Zt);return{rollDropRate:p}},void 0),l=[];for(let p=0;p<(t.cardCount||5);p++){const n=i(t.rates);if(n){if(n.card_type==="player"){let a=$.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);n.rarity&&(a=a.eq("rarity",n.rarity));const{data:o}=await a;let c=o||[];if((n.note_min||n.note_max)&&(c=c.filter(r=>{const f=Math.max(Number(r.note_g)||0,Number(r.note_d)||0,Number(r.note_m)||0,Number(r.note_a)||0);return(!n.note_min||f>=n.note_min)&&(!n.note_max||f<=n.note_max)})),c.length||(n.note_min||n.note_max?(c=o||[],console.warn("[Booster] Aucun joueur avec note",n.note_min,"-",n.note_max,"— fallback rareté uniquement")):c=o||[]),!c.length)continue;const d=c[Math.floor(Math.random()*c.length)],{data:s}=await $.from("cards").insert({owner_id:e.id,player_id:d.id,card_type:"player"}).select().single();s&&(l.push({...s,player:d}),$.rpc("record_transfer",{p_card_id:s.id,p_player_id:d.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(n.card_type==="game_changer"){const{data:a}=await $.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),o=a!=null&&a.length?a:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],d=o[Math.floor(Math.random()*o.length)].name,{data:s}=await $.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:d}).select().single();s&&l.push(s)}else if(n.card_type==="formation"){const a=wt(),o=a[Math.floor(Math.random()*a.length)],{data:c}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:o}).select();c!=null&&c[0]&&l.push(c[0])}}}return l}async function li(e,t,i){if(i>0){const{error:d}=await $.from("users").update({credits:e.credits-i}).eq("id",e.id);if(d)throw d}const{data:l}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(l!=null&&l.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const p=l.filter(d=>d.job==="GK"),n=l.filter(d=>d.job!=="GK"),a=!e.first_booster_opened&&p.length>0,o=[];for(let d=0;d<t;d++){const s=d===0&&a?p:d===0?n:l,r=ai(),f=si(s,r);f&&o.push(f)}a&&await $.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await $.from("cards").insert(o.map(d=>({owner_id:e.id,player_id:d.id,card_type:"player"}))).select();return(c||[]).forEach((d,s)=>{$.rpc("record_transfer",{p_card_id:d.id,p_player_id:o[s].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),o.map((d,s)=>({...c[s],player:d}))}async function ci(e,t,i){const{error:l}=await $.from("users").update({credits:e.credits-i}).eq("id",e.id);if(l)throw l;const{data:p}=await $.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),n=p!=null&&p.length?p:Object.keys(Fe).map(s=>({name:s,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const s=n[Math.floor(Math.random()*n.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:s.name,gc_definition_id:s.id||null}}),{data:o,error:c}=await $.from("cards").insert(a).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(o||[]).map(s=>{const r=p==null?void 0:p.find(f=>f.name===s.gc_type||f.id===s.gc_definition_id);return{...s,_gcDef:r||null}})}async function pi(e,t){const{error:i}=await $.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const l=wt(),p=l[Math.floor(Math.random()*l.length)],{data:n,error:a}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:p}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),n||[]}function ui(e,t,i){var f;if(!e||e.length===0){const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",u.innerHTML=`
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
  `,document.body.appendChild(l);let p=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(p)return;p=!0;const u=document.getElementById("pack-visual");u.classList.add("shaking"),setTimeout(()=>{u.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",a(0)},600)},500)});let n=0;function a(u){n=u;const g=document.getElementById("reveal-phase");g.style.display="flex",o(u)}function o(u){var v;const g=e[u],h=document.getElementById("card-counter"),_=document.getElementById("single-card-slot"),E=document.getElementById("card-tap-hint");h&&(h.textContent=`Carte ${u+1} / ${e.length}`),E&&(E.textContent=u<e.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const w=lt(g),m=g.card_type==="player"&&((v=g.player)==null?void 0:v.rarity)==="legende";_.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${m?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${w}
        ${g.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,m&&s();const k=document.getElementById("current-card-wrap");let C=!1;k.addEventListener("click",()=>{if(C)return;C=!0;const x=u+1;x<e.length?(k.style.transition="all 0.25s ease",k.style.transform="translateX(-120%) rotate(-15deg)",k.style.opacity="0",setTimeout(()=>o(x),250)):c()})}function c(){r(),document.getElementById("reveal-phase").style.display="none";const u=document.getElementById("recap-phase");u.style.display="flex";const g=document.getElementById("recap-grid");g.innerHTML=e.map((h,_)=>`
      <div class="recap-card" style="--i:${_};animation-delay:${_*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${lt(h)}
        ${h.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let d=null;function s(){const u=document.getElementById("fireworks-canvas");if(!u)return;u.width=window.innerWidth,u.height=window.innerHeight;const g=u.getContext("2d"),h=[];function _(){const w=Math.random()*u.width,m=Math.random()*u.height*.6,k=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],C=k[Math.floor(Math.random()*k.length)];for(let v=0;v<60;v++){const x=Math.PI*2/60*v,y=2+Math.random()*5;h.push({x:w,y:m,vx:Math.cos(x)*y,vy:Math.sin(x)*y,alpha:1,color:C,size:2+Math.random()*3})}}_(),d=setInterval(_,600);function E(){if(document.getElementById("fireworks-canvas")){g.clearRect(0,0,u.width,u.height);for(let w=h.length-1;w>=0;w--){const m=h[w];if(m.x+=m.vx,m.y+=m.vy+.08,m.vy*=.98,m.alpha-=.018,m.alpha<=0){h.splice(w,1);continue}g.globalAlpha=m.alpha,g.fillStyle=m.color,g.beginPath(),g.arc(m.x,m.y,m.size,0,Math.PI*2),g.fill()}g.globalAlpha=1,(d!==null||h.length>0)&&requestAnimationFrame(E)}}E()}function r(){d!==null&&(clearInterval(d),d=null);const u=document.getElementById("fireworks-canvas");u&&u.getContext("2d").clearRect(0,0,u.width,u.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{r(),l.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{r(),l.remove(),i("boosters")})}function lt(e){var t,i,l,p;if(e.card_type==="player"&&e.player){const n=e.player,a=n.job||"ATT",o=ti[a]||"#1A6B3C",c=ii[n.rarity]||"#ccc",d=a==="GK"?n.note_g:a==="DEF"?n.note_d:a==="MIL"?n.note_m:n.note_a,s=ei(n),r={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[n.country_code]||n.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${c};overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:6px 6px 2px;text-align:center;background:#f2e8d2">
        <div style="font-size:8px;letter-spacing:1px;color:#666;text-transform:uppercase">${n.firstname}</div>
        <div style="font-size:13px;font-weight:900;color:#111;line-height:1.1;font-family:Arial Black,Arial">${(n.surname_encoded||"").toUpperCase()}</div>
      </div>
      <!-- Étoile + bande poste -->
      <div style="position:relative;height:72px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:14px;width:100%;height:26px;background:${o}"></div>
        <svg width="50" height="48" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${o}" stroke="white" stroke-width="2.5"/>
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
        <div style="font-size:7px;letter-spacing:1px;color:#555;text-transform:uppercase">${r}</div>
        ${(t=n.clubs)!=null&&t.logo_url?`<img src="${n.clubs.logo_url}" style="width:20px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:700">${(((i=n.clubs)==null?void 0:i.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>`}if(e.card_type==="game_changer"){const n=e._gcDef,a=(n==null?void 0:n.gc_type)==="ultra_game_changer",o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},c={purple:"#b06ce0",light_blue:"#00d4ef"},d=o[n==null?void 0:n.color]||o.purple,s=c[n==null?void 0:n.color]||c.purple,r=(n==null?void 0:n.name)||e.gc_type||"Game Changer",f=(n==null?void 0:n.effect)||((l=Fe[e.gc_type])==null?void 0:l.desc)||"",u=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,g=((p=Fe[e.gc_type])==null?void 0:p.icon)||"⚡";return`<div style="width:170px;height:240px;background:${d};border-radius:14px;border:3px solid ${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${s}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${r.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r}</div>
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
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function fi(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const p={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},n={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};l.innerHTML=`
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
      </div>`,document.body.appendChild(l),l.addEventListener("click",a=>{a.target===l&&l.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>l.remove());return}gi()}function gi(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const xi="simulation",$t="VOTRE_ZONE_ID";function mi(){switch(xi){case"propellerads":return yi();case"adsense":return hi();default:return Ve()}}function Ve(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const l=setInterval(()=>{i--;const p=document.getElementById("ad-cd"),n=document.getElementById("ad-skip");p&&(p.textContent=i),n&&(n.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(l),n&&(n.disabled=!1,n.style.cssText=n.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),n==null||n.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function yi(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(Ve());window.propeller.push({zone_id:$t,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function hi(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(Ve());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:$t,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const ue={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},fe={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function kt(e,t,i,l,p){var n;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${l}</button>
    </div>
  </div>`,(n=document.getElementById("msg-btn"))==null||n.addEventListener("click",p)}function Z(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function De(e,t){var l,p;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((l=i.clubs)==null?void 0:l.encoded_name)||null,clubLogo:((p=i.clubs)==null?void 0:p.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Te(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Et(){const e=Math.random()*100;return e<10?3:e<30?2:1}function Le(e,t){const i=ue[t]||ue["4-4-2"],l={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const o=e.filter(d=>d.position&&d.position.replace(/\d+$/,"")===a).sort((d,s)=>parseInt(d.position.replace(/\D+/g,""),10)-parseInt(s.position.replace(/\D+/g,""),10)).map(d=>({...d,_line:a})),c=Te(o.length);o.forEach((d,s)=>{d._col=c[s]}),l[a]=o}return l}const n=[...e];for(const a of["GK","DEF","MIL","ATT"]){const o=[];for(let d=0;d<i[a];d++){let s=n.findIndex(r=>r.job===a);if(s===-1&&(s=n.findIndex(r=>r.job2===a)),s===-1&&(s=0),n[s]){const r={...n[s],_line:a};o.push(r),n.splice(s,1)}}const c=Te(o.length);o.forEach((d,s)=>{d._col=c[s]}),l[a]=o}return l}async function vi(e,t){var a,o;const{data:i}=await $.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return bi(e);const l=ue[e]||ue["4-4-2"],p={GK:[],DEF:[],MIL:[],ATT:[]},n=[...i];for(const c of["GK","DEF","MIL","ATT"]){const d=n.filter(g=>g.job===c),s=n.filter(g=>g.job!==c),r=[...d,...s],f=[];for(let g=0;g<l[c];g++){const h=r[g]||n[g];h&&f.push({cardId:"ai-"+h.id+"-"+g,id:h.id,firstname:h.firstname,name:h.surname_encoded,country_code:h.country_code,club_id:h.club_id,job:h.job,job2:h.job2,note_g:Number(h.note_g)||0,note_d:Number(h.note_d)||0,note_m:Number(h.note_m)||0,note_a:Number(h.note_a)||0,rarity:h.rarity,skin:h.skin,hair:h.hair,hair_length:h.hair_length,clubName:((a=h.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((o=h.clubs)==null?void 0:o.logo_url)||null,boost:0,used:!1,_line:c})}const u=Te(f.length);f.forEach((g,h)=>{g._col=u[h]}),p[c]=f}return p}function bi(e){const t=ue[e]||ue["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},l=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let p=0;for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let c=0;c<t[n];c++){const d=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+p,id:"fake-"+p,firstname:"IA",name:l[p%l.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?d:2,note_d:n==="DEF"?d:2,note_m:n==="MIL"?d:2,note_a:n==="ATT"?d:2,rarity:"normal",boost:0,used:!1,_line:n}),p++}const o=Te(a.length);a.forEach((c,d)=>{c._col=o[d]}),i[n]=a}return i}function _i(e){let t=e.nextElementSibling;for(;t;)t.dataset.matchHidden||(t.dataset.matchHidden=t.style.display||"flex",t.style.display="none"),t=t.nextElementSibling}function ne(e){let t=e.nextElementSibling;for(;t;)t.dataset.matchHidden&&(t.style.display=t.dataset.matchHidden==="none"?"":t.dataset.matchHidden,delete t.dataset.matchHidden),t=t.nextElementSibling}async function wi(e,t,i,l,p,n){var _;const{state:a,navigate:o,toast:c}=t;let d=!1,s=null;e.style.overflow="hidden",e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler la recherche</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const r=()=>document.getElementById("mm-status"),f=async(E=!0)=>{d=!0,s&&($.removeChannel(s),s=null),E&&await $.rpc("cancel_matchmaking",{p_user_id:a.profile.id}).catch(()=>{})};(_=document.getElementById("mm-cancel"))==null||_.addEventListener("click",async()=>{try{await f(!0)}catch(E){console.warn("[Matchmaking] cleanup error:",E)}ne(e),o("home")});const u=async(E,w,m)=>{d||(d=!0,s&&($.removeChannel(s),s=null),r()&&(r().textContent="Adversaire trouvé !"),await new Promise(k=>setTimeout(k,600)),e.isConnected!==!1&&$i(e,t,E,m))},{data:g,error:h}=await $.rpc("try_matchmake",{p_user_id:a.profile.id,p_deck_id:i});if(h||!(g!=null&&g.success)){c("Erreur de matchmaking","error"),ne(e),o("home");return}if(g.matched){u(g.match_id,g.opponent_id,!1);return}r()&&(r().textContent="En attente d'un autre joueur..."),s=$.channel("matchmaking-"+a.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${a.profile.id}`},E=>{const w=E.new;w.status==="matched"&&w.match_id&&u(w.match_id,w.matched_with,!0)}).subscribe()}async function $i(e,t,i,l){const{state:p,navigate:n,toast:a}=t,o=l?"p1":"p2",c=l?"p2":"p1";e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation du match...</div>';const{data:d}=await $.from("matches").select("*").eq("id",i).single();if(!d){a("Match introuvable","error"),n("home");return}async function s(){const[{data:x,error:y},{data:b,error:I},{data:M},{data:j}]=await Promise.all([$.rpc("get_deck_for_match",{p_deck_id:d.home_deck_id}),$.rpc("get_deck_for_match",{p_deck_id:d.away_deck_id}),$.from("users").select("id,pseudo,club_name").eq("id",d.home_id).single(),$.from("users").select("id,pseudo,club_name").eq("id",d.away_id).single()]);y&&console.error("[PvP] get_deck_for_match p1 error:",y),I&&console.error("[PvP] get_deck_for_match p2 error:",I);function q(S,A){return{cardId:S.card_id,position:A||S.position,id:S.id,firstname:S.firstname,name:S.surname_encoded,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:Number(S.note_g)||0,note_d:Number(S.note_d)||0,note_m:Number(S.note_m)||0,note_a:Number(S.note_a)||0,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,clubName:S.club_encoded_name||null,clubLogo:S.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}}const R=((x==null?void 0:x.starters)||[]).map(S=>q(S,S.position)),L=((b==null?void 0:b.starters)||[]).map(S=>q(S,S.position)),z=((x==null?void 0:x.subs)||[]).map(S=>q(S,S.position)),P=((b==null?void 0:b.subs)||[]).map(S=>q(S,S.position)),N=(x==null?void 0:x.formation)||"4-4-2",O=(b==null?void 0:b.formation)||"4-4-2";return console.log("[PvP] p1Formation:",N,"p1 starters:",R.length,"positions:",R.map(S=>S.position)),console.log("[PvP] p2Formation:",O,"p2 starters:",L.length,"positions:",L.map(S=>S.position)),{p1Team:Le(R,N),p2Team:Le(L,O),p1Subs:z,p2Subs:P,p1Formation:N,p2Formation:O,p1Name:(M==null?void 0:M.club_name)||(M==null?void 0:M.pseudo)||"Joueur 1",p2Name:(j==null?void 0:j.club_name)||(j==null?void 0:j.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"gc-select",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:[],gc_p2:[],gcReady_p1:!1,gcReady_p2:!1,usedGc_p1:[],usedGc_p2:[],lastActionAt:new Date().toISOString()}}let r=d.game_state&&Object.keys(d.game_state).length?d.game_state:null;if(!r)if(l){r=await s();const{data:x}=await $.from("matches").select("game_state").eq("id",i).single();!(x!=null&&x.game_state)||!Object.keys(x.game_state).length?await $.from("matches").update({game_state:r,turn_user_id:d.home_id}).eq("id",i):r=x.game_state}else{e.innerHTML=`<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation avec l'adversaire...</div>`;for(let x=0;x<30&&!r;x++){await new Promise(b=>setTimeout(b,400));const{data:y}=await $.from("matches").select("game_state").eq("id",i).single();y!=null&&y.game_state&&Object.keys(y.game_state).length&&(r=y.game_state)}if(!r){a("Erreur de synchronisation","error"),n("home");return}}const f=$.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},x=>{const y=x.new;try{y.game_state&&(r=y.game_state,h()),(y.status==="finished"||y.forfeit)&&h()}catch(b){console.error("[PvP] Realtime render crash:",b,"gameState:",r),a("Erreur de synchro temps réel : "+b.message,"error")}}).subscribe();async function u(x){Object.assign(r,x),r.lastActionAt=new Date().toISOString();const{error:y}=await $.from("matches").update({game_state:r}).eq("id",i);y&&(console.error("[PvP] pushState DB error:",y.message,y),a("Erreur de synchronisation : "+y.message,"error"));try{h()}catch(b){console.error("[PvP] renderPvpScreen crash après pushState:",b),a("Erreur d'affichage : "+b.message,"error")}}async function g(){const x=l?d.away_id:d.home_id;await $.from("matches").update({status:"finished",forfeit:!0,winner_id:x}).eq("id",i),$.removeChannel(f),ne(e),n("home")}function h(){var P,N;const x=r[o+"Team"];r[c+"Team"];const y=r[o+"Score"],b=r[c+"Score"],I=r[o+"Name"],M=r[c+"Name"];if(r.phase==="gc-select")return _();if(r.phase==="reveal")return E();if(r.phase==="midfield")return w();if(r.phase==="finished")return k();const j=r.phase===o+"-attack",q=r.phase===o+"-defense",R=r.phase===c+"-attack"||r.phase===c+"-defense",L=Array.isArray(r["selected_"+o])?r["selected_"+o]:[],z=L.map(O=>O.cardId);if(e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
      <!-- Score -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:rgba(0,0,0,0.25);flex-shrink:0">
        <button id="pvp-quit" style="background:rgba(220,53,69,0.9);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer">✕</button>
        <div style="flex:1;text-align:center;color:#fff;font-size:14px;font-weight:700">
          ${I} <span style="color:#FFD700;font-size:18px">${y}</span> – <span style="color:#FFD700;font-size:18px">${b}</span> ${M}
        </div>
        <div style="width:32px"></div>
      </div>

      <!-- Indicateur tour -->
      <div style="text-align:center;padding:4px;background:rgba(0,0,0,0.15);font-size:11px;color:${R?"rgba(255,255,255,0.4)":"#FFD700"};font-weight:700;flex-shrink:0">
        ${R?`⏳ Tour de ${M}`:j?"⚔️ À vous d'attaquer !":q?"🛡️ À vous de défendre !":""}
      </div>

      <!-- Zone centrale : terrain -->
      <div style="display:flex;flex:1;min-height:0;overflow:hidden">
        <div style="overflow:hidden;min-width:0;flex:1;min-height:0" id="match-field">
          <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
            ${Ye(x,r[o+"Formation"],j?"attack":q?"defense":"idle",z,300,300)}
          </div>
        </div>
      </div>

      <!-- Zone bas : carte boost (si gagnée) + bouton action -->
      <div style="display:flex;align-items:stretch;padding:8px;background:rgba(0,0,0,0.35);gap:6px;flex-shrink:0">
        ${r.boostOwner===o&&!r.boostUsed?`
        <div id="pvp-boost-card" style="flex-shrink:0;width:64px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
          <div style="font-size:20px">⚡</div>
          <div style="font-size:11px;color:#000;font-weight:900">+${r.boostValue}</div>
        </div>`:""}
        <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:3px">
          ${j?`<button id="pvp-action" style="padding:14px;border-radius:14px;background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer" ${L.length===0?'disabled style="opacity:0.45"':""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:q?`<button id="pvp-action" style="padding:14px;border-radius:14px;background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer" ${L.length===0?'disabled style="opacity:0.45"':""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:'<div style="padding:14px;border-radius:14px;background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.4);text-align:center;font-size:13px">⏳ En attente...</div>'}
          ${j||q?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center">${L.length}/3 sélectionné(s)</div>`:""}
        </div>
      </div>
    </div>`,e.querySelectorAll(".match-slot-hit").forEach(O=>{O.addEventListener("click",()=>{if(!j&&!q)return;const S=O.dataset.cardId,A=O.dataset.role,T=(x[A]||[]).find(B=>B.cardId===S);if(!T||T.used)return;Array.isArray(r["selected_"+o])||(r["selected_"+o]=[]);const F=r["selected_"+o],D=F.findIndex(B=>B.cardId===S);D>-1?F.splice(D,1):F.length<3&&F.push({...T,_role:A}),h()})}),(P=e.querySelector("#pvp-action"))==null||P.addEventListener("click",()=>{var O;(O=e.querySelector("#pvp-boost-card"))==null||O.addEventListener("click",()=>{m()}),j?C():q&&v()}),(N=e.querySelector("#pvp-quit"))==null||N.addEventListener("click",()=>{confirm("Quitter le match ? Vous perdrez par forfait.")&&g()}),r._timerInt&&(clearInterval(r._timerInt),r._timerInt=null),j||q){let O=30,S=!1;const A=()=>document.getElementById("pvp-timer"),T=()=>{A()&&(A().textContent=O+"s",A().style.color=S?"#ff4444":"#fff")};T(),r._timerInt=setInterval(()=>{O--,O<=15&&!S&&(S=!0),T(),O<=0&&(clearInterval(r._timerInt),r._timerInt=null,g())},1e3)}}function _(){var q;const x=r["gcReady_"+o],y=r["gcReady_"+c];Array.isArray(r["gc_"+o])||(r["gc_"+o]=[]);let b=r["gc_"+o];const I=3;function M(R,L){const z=R._gcDef,P={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},N={purple:"#9b59b6",light_blue:"#00bcd4"},O=P[z==null?void 0:z.color]||P.purple,S=N[z==null?void 0:z.color]||N.purple;return`<div class="pvp-gc-card" data-id="${R.id}"
        style="width:100px;border-radius:10px;border:3px solid ${L?"#FFD700":S};background:${O};
          display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
          box-shadow:${L?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
          transform:${L?"scale(1.06)":"scale(1)"};transition:all 0.15s">
        <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:${((z==null?void 0:z.name)||R.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(z==null?void 0:z.name)||R.gc_type}</span>
        </div>
        <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
          ${z!=null&&z.image_url?`<img src="/manager-wars/icons/${z.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
        </div>
        <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
          <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((z==null?void 0:z.effect)||"").slice(0,50)}</span>
        </div>
        ${L?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
      </div>`}if(e.style.overflow="hidden",e.innerHTML=`
    <div id="pvp-gc-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Sélectionne <b style="color:#FFD700">${I}</b> cartes · ${b.length}/${I}
        </div>
      </div>
      ${x?`
      <div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px">
        <div style="font-size:32px">✅</div>
        <div style="color:#fff;font-size:14px">Prêt ! ${y?"Adversaire aussi.":`En attente de ${r[c+"Name"]}...`}</div>
      </div>`:`
      <div id="pvp-gc-grid" style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px"></div>
      <div style="padding:10px 16px 14px;flex-shrink:0">
        <button id="pvp-gc-validate" style="width:100%;padding:14px;border-radius:14px;border:none;background:linear-gradient(135deg,#5a0a9a,#9a28e8);color:#fff;font-size:15px;font-weight:900;cursor:pointer">
          ${b.length?`⚡ Valider (${b.length} GC)`:"▶ Continuer sans GC"}
        </button>
      </div>`}
    </div>`,x)return;const j=o==="p1"?d.home_id:d.away_id;$.from("cards").select("id,gc_type").eq("owner_id",j).eq("card_type","game_changer").then(async({data:R})=>{const{data:L}=await $.from("gc_definitions").select("*").eq("is_active",!0),z=new Set,P=(R||[]).filter(O=>z.has(O.gc_type)?!1:(z.add(O.gc_type),!0)).map(O=>({...O,_gcDef:(L==null?void 0:L.find(S=>S.name===O.gc_type))||null})),N=document.getElementById("pvp-gc-grid");if(N){if(!P.length){N.innerHTML='<div style="color:rgba(255,255,255,0.4);font-size:13px;text-align:center;margin-top:30px">Aucune carte Game Changer disponible.</div>';return}N.innerHTML=P.map(O=>M(O,b.includes(O.id))).join(""),N.querySelectorAll(".pvp-gc-card").forEach(O=>{O.addEventListener("click",()=>{const S=O.dataset.id,A=b.indexOf(S);A>-1?b.splice(A,1):b.length<I&&b.push(S),h()})})}}),(q=e.querySelector("#pvp-gc-validate"))==null||q.addEventListener("click",async()=>{await u({["gcReady_"+o]:!0}),r["gcReady_"+c]&&await u({phase:"reveal"})})}function E(){e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[c+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Ce(r[c+"Team"],r[c+"Formation"],null,[],300,300)}</div>
      <div style="font-size:15px;color:rgba(255,255,255,0.7)">
        <span class="loading-dots">Chargement</span>
      </div>
      <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
    </div>`,o==="p1"&&setTimeout(async()=>{await u({phase:"midfield"})},5e3)}function w(){const x=r[o+"Team"].MIL||[],y=r[c+"Team"].MIL||[];function b(L){return L.reduce((z,P)=>z+X(P,"MIL"),0)}function I(L){let z=0;for(let P=0;P<L.length-1;P++){const N=re(L[P],L[P+1]);N==="#00ff88"?z+=2:N==="#FFD700"&&(z+=1)}return z}const M=b(x)+I(x),j=b(y)+I(y),q=M>=j;function R(L,z,P){return`<div style="text-align:center">
        <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${z}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${L.map((N,O)=>{const S=Z(N),A=O<L.length-1?re(N,L[O+1]):null,T=A&&A!=="#ff3333"&&A!=="#cc2222";return`
            <div style="width:52px;height:52px;border-radius:8px;background:${P};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
              ${S?`<img src="${S}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
              <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${X(N,"MIL")}</div>
              <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${N.name}</div>
            </div>
            ${A?`<div style="width:14px;height:4px;border-radius:2px;background:${A};flex-shrink:0;opacity:${T?.9:.3}"></div>`:""}
            `}).join("")}
        </div>
        <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
          Score: ${b(L)} + ${I(L)} liens = <b style="color:#fff">${b(L)+I(L)}</b>
        </div>
      </div>`}e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
      <div style="text-align:center;color:#fff">
        <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
      </div>

      ${R(x,r[o+"Name"],"#D4A017")}

      <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${M}</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${j}</div>
      </div>

      ${R(y,r[c+"Name"],"#bb2020")}

      <div id="pvp-midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
    </div>`,setTimeout(()=>{const L=document.getElementById("pvp-score-me"),z=document.getElementById("pvp-score-opp"),P=document.getElementById("pvp-midfield-result");L&&z&&(q?(L.style.fontSize="80px",L.style.color="#FFD700",z.style.opacity="0.25"):(z.style.fontSize="80px",z.style.color="#ff6b6b",L.style.opacity="0.25"));const N=r.p1Team.MIL||[],O=r.p2Team.MIL||[],S=b(N)+I(N),A=b(O)+I(O),T=S>=A?"p1":"p2";r[T+"Name"],P&&(P.style.opacity="1",P.innerHTML=`<div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${q?`${r[o+"Name"]} gagne le milieu de terrain et attaque !`:`${r[c+"Name"]} gagne l'engagement et attaque !`}
        </div>
        ${q?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px" id="pvp-boost-display">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+?</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}`),setTimeout(async()=>{if(o!=="p1")return;const F=T,D=Et();await u({phase:F+"-attack",attacker:F,round:1,boostValue:D,boostUsed:!1,boostOwner:F})},1800)},600)}function m(){var I;const x=r[o+"Team"],y=Object.entries(x).flatMap(([M,j])=>(j||[]).filter(q=>!q.used).map(q=>({...q,_line:M})));if(!y.length)return;const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",b.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="boost-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${y.map(M=>{const j={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[M._line]||"#555",q=X(M,M._line)+(M.boost||0);return`<div class="boost-pick-item" data-cid="${M.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${j};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${M.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${q}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(b),(I=b.querySelector("#boost-picker-close"))==null||I.addEventListener("click",()=>b.remove()),b.querySelectorAll(".boost-pick-item").forEach(M=>{M.addEventListener("click",async()=>{const j=M.dataset.cid,q=y.find(z=>z.cardId===j);if(!q)return;const R=r[o+"Team"],L=(R[q._line]||[]).find(z=>z.cardId===j);L&&(L.boost=(L.boost||0)+r.boostValue),b.remove(),await u({[o+"Team"]:R,boostUsed:!0})})})}function k(){var M;const x=r[o+"Score"],y=r[c+"Score"],b=x>y,I=x===y;e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${b?"🏆":I?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${b?"Victoire !":I?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${x} - ${y}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour à l'accueil</button>
    </div>`,(M=document.getElementById("pvp-home"))==null||M.addEventListener("click",()=>{$.removeChannel(f),ne(e),n("home")})}async function C(){const x=(r["selected_"+o]||[]).map(b=>({...b,_line:b._role}));if(!x.length)return;const y=Pe(x,r.modifiers[o]||{});x.forEach(b=>{const I=(r[o+"Team"][b._role]||[]).find(M=>M.cardId===b.cardId);I&&(I.used=!0)}),await u({pendingAttack:{...y,players:x,side:o},["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},phase:c+"-defense"})}async function v(){const x=(r["selected_"+o]||[]).map(z=>({...z,_line:z._role})),y=He(x,r.modifiers[o]||{});x.forEach(z=>{const P=(r[o+"Team"][z._role]||[]).find(N=>N.cardId===z.cardId);P&&(P.used=!0)});const b=Ke(r.pendingAttack.total,y.total,r.modifiers[o]||{}),I=r.pendingAttack.side,M=b==="attack",j=r[I+"Score"]+(M?1:0),q=I==="p1"?"p2":"p1",R=(r.round||0)+1,L=R>10;await u({[I+"Score"]:j,["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:L?"finished":q+"-attack",attacker:q,round:R}),L&&await $.from("matches").update({status:"finished"}).eq("id",i)}h()}async function ki(e,t){var v;const{state:i,navigate:l,toast:p}=t;_i(e);const n=i.params||{};e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const a=n.matchMode||"vs_ai_easy",o=a.replace("vs_ai_",""),c=a;if(!n.deckId)return Ai(e,t,a);const d=n.deckId,[{data:s},{data:r}]=await Promise.all([$.from("decks").select("formation,name").eq("id",d).single(),$.from("deck_cards").select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`).eq("deck_id",d).order("slot_order")]),f=(r||[]).filter(x=>{var y;return x.is_starter&&((y=x.card)==null?void 0:y.player)}).map(x=>De(x.card,x.position)),u=(r||[]).filter(x=>{var y;return!x.is_starter&&((y=x.card)==null?void 0:y.player)}).map(x=>De(x.card,x.position));if(f.length<11){kt(e,"⚠️",`Deck incomplet (${f.length}/11).`,"Compléter",()=>l("decks"));return}const g=(r||[]).find(x=>{var y;return((y=x.card)==null?void 0:y.card_type)==="formation"}),h=(s==null?void 0:s.formation)||((v=g==null?void 0:g.card)==null?void 0:v.formation)||"4-4-2";if(a==="random")return wi(e,t,d);const{data:_}=await $.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",i.profile.id).eq("card_type","game_changer"),{data:E}=await $.from("gc_definitions").select("*").eq("is_active",!0),w=(_||[]).map(x=>({...x,_gcDef:(E==null?void 0:E.find(y=>y.name===x.gc_type||y.id===x.gc_definition_id))||null})),m=Le(f,h),k=await vi(h),C=async x=>{const{data:y}=await $.from("matches").insert({home_id:i.profile.id,away_id:null,mode:c,home_deck_id:d,status:"in_progress"}).select().single(),b={gcDefs:E||[],matchId:y==null?void 0:y.id,mode:c,difficulty:o,formation:h,homeTeam:m,aiTeam:k,homeSubs:u,subsUsed:0,maxSubs:Math.min(u.length,3),homeScore:0,aiScore:0,gcCards:x,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Ii(e,b,t)};if(!w.length){C([]);return}Ei(e,w,C)}function Ei(e,t,i){const p=new Set,n=t.filter(s=>{const r=s.gc_type||s.id;return p.has(r)?!1:(p.add(r),!0)});let a=[];function o(s,r){const f=s._gcDef,u={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},g={purple:"#9b59b6",light_blue:"#00bcd4"},h=u[f==null?void 0:f.color]||u.purple,_=g[f==null?void 0:f.color]||g.purple;return`<div class="gc-select-card" data-id="${s.id}"
      style="width:100px;border-radius:10px;border:3px solid ${r?"#FFD700":_};background:${h};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${r?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${r?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((f==null?void 0:f.name)||s.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(f==null?void 0:f.name)||s.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${f!=null&&f.image_url?`<img src="/manager-wars/icons/${f.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((f==null?void 0:f.effect)||"").slice(0,50)}</span>
      </div>
      ${r?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}function c(){var g,h,_;const s=e.querySelector("#gc-confirm-overlay");if(s&&s.remove(),a.length<3)return;const r=document.createElement("div");r.id="gc-confirm-overlay",r.style.cssText="position:absolute;inset:0;background:rgba(10,22,40,0.88);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:32px 24px;z-index:20;backdrop-filter:blur(4px)",r.innerHTML=`
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
      </button>`;const f=E=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(E)};(g=r.querySelector("#gc-launch"))==null||g.addEventListener("click",()=>f(a)),(h=r.querySelector("#gc-no-gc"))==null||h.addEventListener("click",()=>f([])),(_=r.querySelector("#gc-reset"))==null||_.addEventListener("click",()=>{a=[],d()});const u=e.querySelector("#gc-screen-wrap");u?u.appendChild(r):e.appendChild(r)}function d(){e.style.overflow="hidden";const s=e.clientHeight||e.getBoundingClientRect().height;s>50&&(e.style.height=s+"px"),e.innerHTML=`
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
        ${n.map(r=>{const f=a.find(u=>u.gc_type===r.gc_type);return o(r,!!f)}).join("")}
      </div>
    </div>`,e.querySelectorAll(".gc-select-card").forEach(r=>{r.addEventListener("click",()=>{const f=r.dataset.id,u=n.find(h=>h.id===f);if(!u)return;const g=a.findIndex(h=>h.gc_type===u.gc_type);g>-1?a.splice(g,1):a.length<3&&a.push(u),d(),a.length===3&&c()})}),a.length===3&&c()}d()}async function Ai(e,t,i){const{state:l,navigate:p}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await $.from("decks").select("id,name,is_active,formation").eq("owner_id",l.profile.id).order("created_at",{ascending:!1});if(!n||n.length===0){kt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>p("decks"));return}const a=n.map(s=>s.id),{data:o}=await $.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let c=0;function d(){var w,m,k,C,v;const s=n[c],r=(o||[]).filter(x=>x.deck_id===s.id),f=r.filter(x=>{var y;return x.is_starter&&((y=x.card)==null?void 0:y.player)}).map(x=>De(x.card,x.position)),u=r.find(x=>{var y;return((y=x.card)==null?void 0:y.card_type)==="formation"}),g=s.formation||((w=u==null?void 0:u.card)==null?void 0:w.formation)||"4-4-2",h=f.length>=11?Le(f,g):null,_=f.length>=11;e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:calc(100dvh - 130px);overflow:hidden;background:#0a3d1e;color:#fff">

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

      <!-- Terrain preview : contraindre la largeur du SVG pour contrôler hauteur+largeur -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${h?`<div style="width:min(98vw, calc(100dvh - 400px));overflow:hidden;flex-shrink:0">${Ye(h,g,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${n.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${n.map((x,y)=>`<div style="width:7px;height:7px;border-radius:50%;background:${y===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${_?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${_?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${_?"pointer":"default"}">
          ${_?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,(m=document.getElementById("prev-deck"))==null||m.addEventListener("click",()=>{c>0&&(c--,d())}),(k=document.getElementById("next-deck"))==null||k.addEventListener("click",()=>{c<n.length-1&&(c++,d())}),(C=document.getElementById("validate-deck"))==null||C.addEventListener("click",()=>{_&&t.navigate("match",{matchMode:i,deckId:s.id})}),(v=document.getElementById("cancel-deck-select"))==null||v.addEventListener("click",()=>{ne(e),p("home")});const E=document.getElementById("deck-swipe-zone");if(E){let x=0,y=0;E.addEventListener("touchstart",b=>{x=b.touches[0].clientX,y=b.touches[0].clientY},{passive:!0}),E.addEventListener("touchend",b=>{const I=b.changedTouches[0].clientX-x,M=b.changedTouches[0].clientY-y;Math.abs(I)<40||Math.abs(I)<Math.abs(M)||(I<0&&c<n.length-1?(c++,d()):I>0&&c>0&&(c--,d()))},{passive:!0})}}d()}function Ii(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Ce(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Ti(e,t,i),5e3)}function Ti(e,t,i){const l=t.homeTeam.MIL||[],p=t.aiTeam.MIL||[];function n(r){return r.reduce((f,u)=>f+X(u,"MIL"),0)}function a(r){let f=0;for(let u=0;u<r.length-1;u++){const g=re(r[u],r[u+1]);g==="#00ff88"?f+=2:g==="#FFD700"&&(f+=1)}return f}const o=n(l)+a(l),c=n(p)+a(p),d=o>=c;function s(r,f,u){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${f}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${r.map((g,h)=>{const _=Z(g),E=h<r.length-1?re(g,r[h+1]):null,w=E&&E!=="#ff3333"&&E!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${u};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${_?`<img src="${_}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${X(g,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${g.name}</div>
          </div>
          ${E?`<div style="width:14px;height:4px;border-radius:2px;background:${E};flex-shrink:0;opacity:${w?.9:.3}"></div>`:""}
          `}).join("")}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${n(r)} + ${a(r)} liens = <b style="color:#fff">${n(r)+a(r)}</b>
      </div>
    </div>`}e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${s(l,t.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${o}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${c}</div>
    </div>

    ${s(p,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const r=document.getElementById("score-home"),f=document.getElementById("score-ai"),u=document.getElementById("midfield-result");if(r&&f&&(d?(r.style.fontSize="80px",r.style.color="#FFD700",f.style.opacity="0.25"):(f.style.fontSize="80px",f.style.color="#ff6b6b",r.style.opacity="0.25")),u){const g=Et();u.style.opacity="1",d&&t.clubName,u.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${d?`${t.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${d?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${g}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,d&&(t.boostCard={value:g})}t.attacker=d?"home":"ai",t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:l.map(g=>({name:g.name,note:X(g,"MIL"),portrait:Z(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),aiPlayers:p.map(g=>({name:g.name,note:X(g,"MIL"),portrait:Z(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:o,aiTotal:c,text:`Duel milieu : ${t.clubName} ${o} – ${c} IA → ${d?t.clubName+" attaque":"IA attaque"}`}),setTimeout(()=>{var h,_;const g=(h=t.boostCard)==null?void 0:h.value;e.innerHTML=`
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
      </div>`,(_=document.getElementById("start-match-btn"))==null||_.addEventListener("click",()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",J(e,t,i),t.attacker==="ai"&&setTimeout(()=>Re(e,t,i),800)})},100)},5e3)}function At(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function de(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const l=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Z(e),p=At(e),n=e._line||e.job||"MIL",a=fe[n]||"#555",o={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(X(e,n))||0)+(e.boost||0),d=It(e==null?void 0:e.country_code),s=Math.round(i*.19),r=Math.round(i*.25),f=i-Math.round(i*.19)-Math.round(i*.25),u=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${o};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${u}">
    <div style="position:absolute;top:0;left:0;right:0;height:${s}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${l&&!(e!=null&&e.used)?`<img src="${l}" style="position:absolute;top:${s}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Ge(e==null?void 0:e.country_code)?`<img src="${Ge(e.country_code)}" style="width:${r+2}px;height:${r-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${r-4}px">${d}</span>`}
      <span style="font-size:${r-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${p?`<img src="${p}" style="width:${r-4}px;height:${r-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,r-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function _e(e,t,i){if(!(e!=null&&e.length))return"";const l=e.slice(0,5);let p='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return l.forEach((n,a)=>{if(p+=de(n,40,52),a<l.length-1){const o=re(n,l[a+1]);p+=`<div style="width:7px;height:3px;background:${o==="#ff3333"||o==="#cc2222"?"rgba(255,255,255,0.12)":o};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(p+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),p+="</div>",p}function Ge(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function It(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Ce(e,t,i,l,p=310,n=310){const a=he[t]||{},o=gt(t)||Oe[t]||[],c={},d=["ATT","MIL","DEF","GK"];for(const w of d)(e[w]||[]).forEach((k,C)=>{c[`${w}${C+1}`]=k});function s(w){const m=a[w];return m?{x:m.x*p,y:m.y*n}:null}let r="";for(const[w,m]of o){const k=s(w),C=s(m);if(!k||!C)continue;const v=c[w],x=c[m],y=re(v,x);y==="#00ff88"||y==="#FFD700"?(r+=`<line x1="${k.x.toFixed(1)}" y1="${k.y.toFixed(1)}" x2="${C.x.toFixed(1)}" y2="${C.y.toFixed(1)}"
        stroke="${y}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,r+=`<line x1="${k.x.toFixed(1)}" y1="${k.y.toFixed(1)}" x2="${C.x.toFixed(1)}" y2="${C.y.toFixed(1)}"
        stroke="${y}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):r+=`<line x1="${k.x.toFixed(1)}" y1="${k.y.toFixed(1)}" x2="${C.x.toFixed(1)}" y2="${C.y.toFixed(1)}"
        stroke="${y}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const f=48,u=64,g=13,h=16,_={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[w,m]of Object.entries(c)){const k=s(w);if(!k||!m)continue;const C=w.replace(/[0-9]/g,""),v=fe[C]||"#555",x=i==="attack"&&["MIL","ATT"].includes(C)&&!m.used||i==="defense"&&["GK","DEF","MIL"].includes(C)&&!m.used,y=l.includes(m.cardId);let b;i==="attack"?b=C==="MIL"?Number(m.note_m)||0:Number(m.note_a)||0:i==="defense"?b=C==="GK"?Number(m.note_g)||0:C==="MIL"?Number(m.note_m)||0:Number(m.note_d)||0:b=Number(C==="GK"?m.note_g:C==="DEF"?m.note_d:C==="MIL"?m.note_m:m.note_a)||0,b=b+(m.boost||0);const I=(k.x-f/2).toFixed(1),M=(k.y-u/2).toFixed(1),j=m.used?.25:1,q=_[m==null?void 0:m.rarity]||_.normal,R=y?"#ff3030":q,L=y?3:(m==null?void 0:m.rarity)==="légende"||(m==null?void 0:m.rarity)==="pépite"?2.5:2,z=u-g-h;r+=`<defs><clipPath id="cp-${w}"><rect x="${I}" y="${(k.y-u/2+g).toFixed(1)}" width="${f}" height="${z}"/></clipPath></defs>`,r+=`<rect x="${I}" y="${M}" width="${f}" height="${u}" rx="5" fill="${v}" opacity="${j}"/>`;const P=Z(m);P&&!m.used&&(r+=`<image href="${P}" x="${I}" y="${(k.y-u/2+g).toFixed(1)}" width="${f}" height="${z}" clip-path="url(#cp-${w})" preserveAspectRatio="xMidYMin slice"/>`),r+=`<rect x="${I}" y="${M}" width="${f}" height="${g}" rx="4" fill="rgba(255,255,255,0.92)"/>`,r+=`<text x="${k.x.toFixed(1)}" y="${(k.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(m.name||"").slice(0,9)}</text>`;const N=(k.y+u/2-h).toFixed(1);if(r+=`<rect x="${I}" y="${N}" width="${f}" height="${h}" fill="rgba(255,255,255,0.92)"/>`,m.used)r+=`<text x="${k.x.toFixed(1)}" y="${(k.y+u/2-h/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const O=Ge(m.country_code);O?r+=`<image href="${O}" x="${(k.x-20).toFixed(1)}" y="${(k.y+u/2-h+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:r+=`<text x="${(k.x-13).toFixed(1)}" y="${(k.y+u/2-h/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${It(m.country_code)}</text>`,r+=`<text x="${k.x.toFixed(1)}" y="${(k.y+u/2-h/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${b}</text>`;const S=At(m);S?r+=`<image href="${S}" x="${(k.x+f/2-14).toFixed(1)}" y="${(k.y+u/2-h+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:m.clubName&&(r+=`<text x="${(k.x+14).toFixed(1)}" y="${(k.y+u/2-h/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(m.clubName||"").slice(0,3).toUpperCase()}</text>`),m.boost&&(r+=`<rect x="${(k.x+f/2-12).toFixed(1)}" y="${(k.y-u/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,r+=`<text x="${(k.x+f/2-5).toFixed(1)}" y="${(k.y-u/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${m.boost}</text>`)}r+=`<rect x="${I}" y="${M}" width="${f}" height="${u}" rx="5" fill="${y?"rgba(255,255,255,0.12)":"none"}" stroke="${R}" stroke-width="${L}" opacity="${j}"/>`,x&&(r+=`<rect x="${I}" y="${M}" width="${f}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${y?"selected":""}" data-card-id="${m.cardId}" data-role="${C}" style="cursor:pointer"/>`)}const E=38;return`<svg viewBox="${-E} ${-E} ${p+E*2} ${n+E*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${r}
  </svg>`}function Ye(e,t,i,l,p=300,n=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ce(e,t,i,l,p,n)}
  </div>`}function we(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}function Li(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function J(e,t,i){var g,h,_,E,w,m,k,C;const l=t.selected.map(v=>v.cardId),p=t.usedSubIds||[],n=t.homeSubs.filter(v=>!p.includes(v.cardId));Object.values(t.homeTeam).flat().filter(v=>v.used).length>0&&n.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const o=t.phase==="ai-attack"||t.phase==="ai-defense",c=t.phase==="attack",d=t.phase==="defense",s=t.phase==="finished",r=t.gcCards.filter(v=>!t.usedGc.includes(v.id)),f=t.boostCard&&!t.boostUsed;if(e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const x=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${_e((x.players||[]).map(y=>({...y,used:!1})),"#ff6b6b",x.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const x=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${_e((x.players||[]).map(y=>({...y,used:!1})),"#00ff88",x.total)}
          </div>`}const v=t.log[t.log.length-1];return v?'<div style="padding:2px 4px">'+Li(v)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const v=window.innerWidth>=700,x=(L,z,P)=>{var V,Y;const N=(t.gcDefs||[]).find(K=>K.name===L.gc_type),O={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[N==null?void 0:N.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",S={purple:"#b06ce0",light_blue:"#00d4ef"}[N==null?void 0:N.color]||"#b06ce0",A=(N==null?void 0:N.name)||L.gc_type,T=(N==null?void 0:N.effect)||((V=ce[L.gc_type])==null?void 0:V.desc)||"",F=N!=null&&N.image_url?`/manager-wars/icons/${N.image_url}`:null,D=((Y=ce[L.gc_type])==null?void 0:Y.icon)||"⚡",B=Math.round(P*.22),H=Math.round(P*.22),G=P-B-H,W=A.length>12?7:9;return`<div class="gc-mini" data-gc-id="${L.id}" data-gc-type="${L.gc_type}"
          style="width:${z}px;height:${P}px;border-radius:10px;border:2px solid ${S};background:${O};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${B}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${W}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${z-6}px">${A}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${G}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${F?`<img src="${F}" style="max-width:${z-10}px;max-height:${G-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(G*.55)}px">${D}</span>`}
          </div>
          <div style="height:${H}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${T.slice(0,38)}</span>
          </div>
        </div>`},y=(L,z)=>{var P;return z?`<div id="boost-card" style="width:110px;padding:8px 6px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center">
            <div style="font-size:22px">⚡</div>
            <div style="font-size:10px;color:#000;font-weight:900">+${(P=t.boostCard)==null?void 0:P.value}</div>
          </div>`:x(L,110,150)},b=(L,z)=>{var P;return z?`<div id="boost-card" style="padding:4px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:7px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:1px;text-align:center;min-width:42px">
            <div style="font-size:15px">⚡</div>
            <div style="font-size:7px;color:#000;font-weight:900">+${(P=t.boostCard)==null?void 0:P.value}</div>
          </div>`:x(L,68,95)},I=v?"padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",M=s?`<button id="btn-results" style="${I};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:o?`<div style="${I};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:c?`<button id="btn-action" style="${I};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:d?`<button id="btn-action" style="${I};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${I};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,j=c||d?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",q=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${v?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(L=>`<div class="sub-btn-col" data-sub-id="${L.cardId}" style="cursor:pointer;flex-shrink:0">${de(L,44,58)}</div>`).join("")}
      </div>`,R=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${Ye(t.homeTeam,t.formation,t.phase,l,300,300)}
        </div>
      </div>`;return v?`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${q}
          ${R}
          <!-- Colonne droite : GC + bouton -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            ${r.map(L=>y(L,!1)).join("")}
            ${f?y(null,!0):""}
            <div style="flex:1"></div>
            <div style="width:100%">${M}${j}</div>
          </div>
        </div>`:`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${q}
          <div style="flex:1;min-width:0;display:flex;flex-direction:column;min-height:0">
            ${R}
            <!-- Zone bas mobile : GC grille + bouton -->
            <div style="display:flex;align-items:stretch;padding:4px 6px;background:rgba(0,0,0,0.35);gap:5px;flex-shrink:0">
              <div style="display:flex;flex-wrap:wrap;gap:3px;align-content:center;max-width:120px">
                ${r.map(L=>b(L,!1)).join("")}
                ${f?b(null,!0):""}
              </div>
              <div style="flex:0.8;display:flex;flex-direction:column;justify-content:center;gap:3px">
                ${M}${j}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(v=>{var x,y,b;if(v.type==="duel"){const I=v.isGoal,M=v.homeScored?"#FFD700":I?"#ff6b6b":"rgba(255,255,255,0.3)",j=v.homeScored?"⚽ BUT !":I?"⚽ BUT IA !":(x=v.homePlayers)!=null&&x.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${I?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${M};margin-bottom:4px">
                <div style="font-size:9px;color:${M};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${j}</div>
                ${(y=v.homePlayers)!=null&&y.length?`<div style="margin-bottom:3px">${_e(v.homePlayers,"rgba(255,255,255,0.7)",v.homeTotal)}</div>`:""}
                ${(b=v.aiPlayers)!=null&&b.length?`<div style="opacity:0.7">${_e(v.aiPlayers,"#ff6b6b",v.aiTotal)}</div>`:""}
              </div>`}return v.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${v.outPlayer?de({...v.outPlayer,used:!0,_line:v.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${v.inPlayer?de({...v.inPlayer,_line:v.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:v.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${v.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${v.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`,function(){const x=e.querySelector(".terrain-wrapper svg");if(!x)return;x.removeAttribute("width"),x.removeAttribute("height"),x.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",x.setAttribute("viewBox","-26 -26 352 352"),x.setAttribute("preserveAspectRatio","xMidYMid meet");const y=e.querySelector(".match-screen");if(y){const b=e.clientHeight;b>50&&(y.style.height=b+"px",y.style.overflow="hidden")}}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const v=e.querySelector(".terrain-wrapper svg");v&&(v.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let v=!1,x=30;const y=()=>document.getElementById("match-timer"),b=()=>{const I=y();if(!I)return;const M=String(Math.floor(x/60)).padStart(2,"0"),j=String(x%60).padStart(2,"0");I.textContent=` ${M}:${j}`,I.style.color=v?"#ff2222":"#ff9500",I.style.fontWeight="900"};b(),t._timerInt=setInterval(()=>{if(x--,x<0)if(!v)v=!0,x=15,b();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",I.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(I),setTimeout(()=>{I.remove(),le(e,t,i)},2500)}else b()},1e3)}(g=document.getElementById("match-quit"))==null||g.addEventListener("click",()=>{ne(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,le(e,t,i))}),(h=document.getElementById("view-ai"))==null||h.addEventListener("click",()=>Gi(t,i)),(_=document.getElementById("toggle-history"))==null||_.addEventListener("click",()=>{var v;(v=document.getElementById("match-history-panel"))==null||v.classList.add("open")}),(E=document.getElementById("close-history"))==null||E.addEventListener("click",()=>{var v;(v=document.getElementById("match-history-panel"))==null||v.classList.remove("open")}),(w=document.getElementById("btn-action"))==null||w.addEventListener("click",()=>{t.selected.length!==0&&(c?zi(e,t,i):d&&Ci(e,t,i))}),(m=document.getElementById("btn-results"))==null||m.addEventListener("click",()=>le(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(v=>{v.addEventListener("click",()=>Mi(v,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(v=>{v.addEventListener("click",()=>Bi(v.dataset.gcId,v.dataset.gcType,e,t,i))}),(k=document.getElementById("boost-card"))==null||k.addEventListener("click",()=>Di(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(v=>{v.addEventListener("click",()=>ct(e,t,i,v.dataset.subId))}),(C=document.getElementById("sub-btn-main"))==null||C.addEventListener("click",()=>ct(e,t,i))}function Mi(e,t,i,l){const p=e.dataset.cardId,n=e.dataset.role,a=t.selected.findIndex(o=>o.cardId===p);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){l.toast("Maximum 3 joueurs","error");return}const o=(t.homeTeam[n]||[]).find(c=>c.cardId===p);o&&t.selected.push({...o,_role:n,_line:n})}J(i,t,l)}function We(e,t,i){e.matchId&&$.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function zi(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),We(t,i,i.state.profile.id);const l=t.selected.map(n=>({...n,_line:n._role})),p=Pe(l,t.modifiers.home);t.pendingAttack={...p,players:[...t.selected],side:"home"},t.selected.forEach(n=>{const a=(t.homeTeam[n._role]||[]).find(o=>o.cardId===n.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${p.total} (base ${p.base}${p.links?` +${p.links} liens`:""}) — ${t.selected.map(n=>n.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",J(e,t,i),setTimeout(()=>ji(e,t,i),1200)}function Ci(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),We(t,i,i.state.profile.id);const l=t.selected.map(o=>({...o,_line:o._role})),p=He(l,t.modifiers.home);t.selected.forEach(o=>{const c=(t.homeTeam[o._role]||[]).find(d=>d.cardId===o.cardId);c&&(c.used=!0)});const n=Ke(t.pendingAttack.total,p.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(o=>({name:o.name,note:o._line==="MIL"?o.note_m:o.note_a,portrait:Z(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),homePlayers:t.selected.map(o=>{const c=(t.homeTeam[o._role]||[]).find(d=>d.cardId===o.cardId)||o;return{name:c.name,note:c._line==="GK"?c.note_g:c._line==="MIL"?c.note_m:c.note_d,portrait:Z(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:p.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(n.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(n.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${p.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,J(e,t,i),Xe(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ye(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${p.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ye(e,t,i,"home-attack")}function Re(e,t,i){We(t,i,null);const l=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],p=mt(l,"attack",t.difficulty);if(!p.length){Lt(e,t,i);return}const n=Pe(p,t.modifiers.ai);t.pendingAttack={...n,players:p,side:"ai"},p.forEach(d=>{d.used=!0}),t.log.push({text:`🤖 IA attaque : ${n.total} (${p.map(d=>d.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(d=>!d.used),c=(t.homeSubs||[]).filter(d=>!(t.usedSubIds||[]).includes(d.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!c){t.aiScore++;const d={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:p.map(s=>({name:s.name,note:s._line==="MIL"?s.note_m:s.note_a,portrait:Z(s),job:s.job,country_code:s.country_code,rarity:s.rarity,clubName:s.clubName,clubLogo:s.clubLogo})),aiTotal:n.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(d),t.pendingAttack=null,J(e,t,i),Xe(d.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ye(e,t,i,"home-attack")});return}t.phase="defense",J(e,t,i)}function ji(e,t,i){const l=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],p=mt(l,"defense",t.difficulty),n=p.length>0?He(p,t.modifiers.ai).total:0;p.forEach(c=>{c.used=!0});const a=Ke(t.pendingAttack.total,n,t.modifiers.ai),o={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(c=>({name:c.name,note:c._line==="MIL"?c.note_m:c.note_a,portrait:Z(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),aiPlayers:p.map(c=>({name:c.name,note:c._line==="GK"?c.note_g:c._line==="MIL"?c.note_m:c.note_d,portrait:Z(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:n,isGoal:!1,homeScored:!1,text:""};if(a.shielded)o.text="🛡️ Bouclier IA !",t.log.push(o);else if(a.goal){t.homeScore++,o.isGoal=!0,o.homeScored=!0,o.text=`⚽ BUT ! (${t.pendingAttack.total} > ${n})`,t.log.push(o),t.modifiers.ai={},t.pendingAttack=null,J(e,t,i),Xe(o.homePlayers,t.homeScore,t.aiScore,!0,()=>{ye(e,t,i,"ai-attack")});return}else o.text=`🧤 IA défend (${n} ≥ ${t.pendingAttack.total})`,t.log.push(o);t.modifiers.ai={},t.pendingAttack=null,ye(e,t,i,"ai-attack")}function ye(e,t,i,l){if(t.round++,Tt(t)){le(e,t,i);return}if(l==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(n=>!n.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(a=>!a.used).length){le(e,t,i);return}t.phase="ai-attack",J(e,t,i),setTimeout(()=>Re(e,t,i),800);return}t.phase="attack",J(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(n=>!n.used).length){Lt(e,t,i);return}t.phase="ai-attack",J(e,t,i),setTimeout(()=>Re(e,t,i),800)}}function Tt(e){const t=["MIL","ATT","GK","DEF"].some(l=>(e.homeTeam[l]||[]).some(p=>!p.used)),i=["MIL","ATT","GK","DEF"].some(l=>(e.aiTeam[l]||[]).some(p=>!p.used));return!t&&!i}function Lt(e,t,i){Tt(t)?le(e,t,i):(t.phase="attack",J(e,t,i))}function Si(e,t,i){const l=document.createElement("div");l.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const p=Z(e),n=Z(t),a=fe[e.job]||"#555",o=fe[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,d=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;l.innerHTML=`
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
        <div style="width:80px;height:80px;border-radius:12px;background:${o};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${d}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(l);let s=!1;const r=()=>{s||(s=!0,l.remove(),i())};l.addEventListener("click",r),setTimeout(r,2e3)}function xe(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function ct(e,t,i,l=null){if(t.phase!=="attack"){xe("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){xe(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const p=Object.values(t.homeTeam).flat().filter(r=>r.used),n=t.homeSubs.filter(r=>!t.usedSubIds.includes(r.cardId));if(!p.length){xe("Aucun joueur utilisé à remplacer");return}if(!n.length){xe("Aucun remplaçant disponible");return}let a=0,o=Math.max(0,n.findIndex(r=>r.cardId===l)),c=!1;const d=document.createElement("div");d.id="sub-overlay",d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function s(){var E,w,m,k,C,v;const r=p[a],f=n[o],u=Math.min(130,Math.round((window.innerWidth-90)/2)),g=Math.round(u*1.35),h=x=>`background:rgba(255,255,255,0.12);border:none;color:${x?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${x?"default":"pointer"};flex-shrink:0`;d.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${h(o===0)}" ${o===0?"disabled":""}>▲</button>
        <div>${f?de({...f,used:!1,boost:0},u,g):"<div>—</div>"}</div>
        <button id="in-down" style="${h(o>=n.length-1)}" ${o>=n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${o+1}/${n.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${h(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${r?de({...r,used:!1,boost:0},u,g):"<div>—</div>"}</div>
        <button id="out-down" style="${h(a>=p.length-1)}" ${a>=p.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${p.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(E=d.querySelector("#sub-close"))==null||E.addEventListener("click",()=>d.remove()),(w=d.querySelector("#out-up"))==null||w.addEventListener("click",()=>{a>0&&(a--,s())}),(m=d.querySelector("#out-down"))==null||m.addEventListener("click",()=>{a<p.length-1&&(a++,s())}),(k=d.querySelector("#in-up"))==null||k.addEventListener("click",()=>{o>0&&(o--,s())}),(C=d.querySelector("#in-down"))==null||C.addEventListener("click",()=>{o<n.length-1&&(o++,s())});const _=(x,y,b,I)=>{const M=d.querySelector("#"+x);if(!M)return;let j=0;M.addEventListener("touchstart",q=>{j=q.touches[0].clientY},{passive:!0}),M.addEventListener("touchend",q=>{const R=q.changedTouches[0].clientY-j;if(Math.abs(R)<30)return;const L=y();R<0&&L<I-1?(b(L+1),s()):R>0&&L>0&&(b(L-1),s())},{passive:!0})};_("in-panel",()=>o,x=>o=x,n.length),_("out-panel",()=>a,x=>a=x,p.length),(v=d.querySelector("#sub-confirm"))==null||v.addEventListener("click",x=>{if(x.preventDefault(),x.stopPropagation(),c)return;c=!0;const y=p[a],b=n[o];if(!y||!b)return;let I=null,M=-1;for(const[q,R]of Object.entries(t.homeTeam)){const L=(R||[]).findIndex(z=>z.cardId===y.cardId);if(L!==-1){I=q,M=L;break}}if(M===-1||!I){xe("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),d.remove();return}const j={...b,_line:I,_col:y._col||0,used:!1,boost:0};t.homeTeam[I].splice(M,1,j),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(b.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:y.name,firstname:y.firstname,note:X(y,I),portrait:Z(y),job:y.job,country_code:y.country_code,rarity:y.rarity,clubName:y.clubName,clubLogo:y.clubLogo},inPlayer:{name:b.name,firstname:b.firstname,note:X(b,I),portrait:Z(b),job:b.job,country_code:b.country_code,rarity:b.rarity,clubName:b.clubName,clubLogo:b.clubLogo},text:`🔄 ${b.firstname} ${b.name} remplace ${y.firstname} ${y.name}`}),d.remove(),Si(y,b,()=>J(e,t,i))})}document.body.appendChild(d),s()}function Bi(e,t,i,l,p){var g,h;const n=(l.gcDefs||[]).find(_=>_.name===t),a=ce[t]||{icon:"⚡",desc:"Carte spéciale."},o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[n==null?void 0:n.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[n==null?void 0:n.color]||"#b06ce0",d=(n==null?void 0:n.name)||t,s=(n==null?void 0:n.effect)||a.desc,r=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,f=a.icon||"⚡",u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",u.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${c};background:${o};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${c}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${d.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${d}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${r?`<img src="${r}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${f}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${s}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(u),(g=u.querySelector("#gc-back"))==null||g.addEventListener("click",()=>u.remove()),(h=u.querySelector("#gc-use"))==null||h.addEventListener("click",()=>{u.remove(),Fi(e,t,i,l,p)})}function Se(e,t,i,l,p,n){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let o=[];function c(){var d,s;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${o.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(r=>{const f=r._line||r.job||"MIL",u={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",g=X(r,f)+(r.boost||0),h=o.find(_=>_.cardId===r.cardId);return`<div class="gc-pick-item" data-cid="${r.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${h?"#FFD700":"rgba(255,255,255,0.25)"};background:${u};overflow:hidden;cursor:pointer;flex-shrink:0;${r.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${r.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${g}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${o.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${o.length}/${t})
      </button>
    </div>`,(d=a.querySelector("#gc-picker-close"))==null||d.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(r=>{r.addEventListener("click",()=>{const f=r.dataset.cid,u=e.find(h=>h.cardId===f);if(!u)return;const g=o.findIndex(h=>h.cardId===f);g>-1?o.splice(g,1):o.length<t&&o.push(u),c()})}),(s=a.querySelector("#gc-picker-confirm"))==null||s.addEventListener("click",()=>{a.remove(),n(o)})}c(),document.body.appendChild(a)}const Mt={BOOST_STAT({value:e=2,target:t="home",count:i=1,roles:l=null},p,n,a){const o=t==="home"?p.homeTeam:p.aiTeam,c=Object.entries(o).flatMap(([d,s])=>!l||l.includes(d)?(s||[]).filter(r=>!r.used).map(r=>({...r,_line:d})):[]);return c.length?(Se(c,i,e>0?`⚡ +${e} à ${i} joueur(s)`:`💀 -${Math.abs(e)} à ${i} joueur(s)`,n,p,d=>{d.forEach(s=>{for(const r of["GK","DEF","MIL","ATT"]){const f=(p.homeTeam[r]||[]).find(u=>u.cardId===s.cardId)||(p.aiTeam[r]||[]).find(u=>u.cardId===s.cardId);if(f){f.boost=(f.boost||0)+e;break}}}),p.log.push({text:`${e>0?"⚡":"💀"} ${Math.abs(e)>0?"+":""}${e} → ${d.map(s=>s.name).join(", ")}`,type:"info"}),J(n,p,a)}),!0):(a.toast("Aucun joueur disponible","error"),!0)},DEBUFF_STAT(e,t,i,l){return Mt.BOOST_STAT({...e,value:-Math.abs(e.value||2)},t,i,l)},GRAY_PLAYER({target:e="opponent",count:t=1,roles:i=null},l,p,n){const a=e==="opponent"?l.aiTeam:l.homeTeam,o=Object.entries(a).flatMap(([c,d])=>!i||i.includes(c)?(d||[]).filter(s=>!s.used).map(s=>({...s,_line:c})):[]);return o.length?(Se(o,t,`❄️ Griser ${t} joueur(s)`,p,l,c=>{c.forEach(d=>{for(const s of Object.keys(l.aiTeam).concat(Object.keys(l.homeTeam))){const f=((e==="opponent"?l.aiTeam[s]:l.homeTeam[s])||[]).find(u=>u.cardId===d.cardId);if(f){f.used=!0;break}}}),l.log.push({text:`❄️ ${c.map(d=>d.name).join(", ")} grisé(s) !`,type:"info"}),J(p,l,n)}),!0):(n.toast("Aucun joueur à griser","error"),!0)},REVIVE_PLAYER({count:e=1},t,i,l){const p=Object.entries(t.homeTeam).flatMap(([n,a])=>(a||[]).filter(o=>o.used).map(o=>({...o,_line:n})));return p.length?(Se(p,e,"💫 Ressusciter",i,t,n=>{n.forEach(a=>{for(const o of["GK","DEF","MIL","ATT"]){const c=(t.homeTeam[o]||[]).find(d=>d.cardId===a.cardId);if(c){c.used=!1;break}}}),t.log.push({text:`💫 ${n.map(a=>a.name).join(", ")} ressuscité(s) !`,type:"info"}),J(i,t,l)}),!0):(l.toast("Aucun joueur à ressusciter","error"),!0)},REMOVE_GOAL(e,t,i,l){return t.aiScore<=0?(l.toast("Aucun but adverse","error"),!1):(t.aiScore--,t.log.push({text:"🚫 But adverse retiré !",type:"info"}),!1)},ADD_GOAL_DRAW(e,t,i,l){return t.modifiers=t.modifiers||{},t.modifiers.home=t.modifiers.home||{},t.modifiers.home.addGoalOnDraw=!0,t.log.push({text:"⚽ +1 but si duel nul activé !",type:"info"}),!1},ADD_SUB({count:e=1},t,i,l){return t.maxSubs+=e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1}};function Fi(e,t,i,l,p){if(l.usedGc.includes(e))return;l.usedGc.push(e);const n=(l.gcDefs||[]).find(o=>o.name===t);let a=!1;if(n!=null&&n.effect_type&&n.effect_type!=="CUSTOM"){const o=Mt[n.effect_type];o?o(n.effect_params||{},l,i,p)||(a=!0):(p.toast(`Effet "${n.effect_type}" non implémenté`,"error"),a=!0)}else{switch(t){case"Double attaque":l.modifiers.home.doubleAttack=!0,l.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":l.modifiers.home.shield=!0,l.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const o=Object.entries(l.homeTeam).flatMap(([c,d])=>(d||[]).filter(s=>s.used).map(s=>({...s,_line:c})));o.length?(o[0].used=!1,l.log.push({text:`💫 ${o[0].name} ressuscité !`,type:"info"})):l.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":l.modifiers.ai.stolenNote=(l.modifiers.ai.stolenNote||0)+1,l.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const o=[...l.aiTeam.ATT||[],...l.aiTeam.MIL||[]].filter(c=>!c.used);if(o.length){const c=o.sort((d,s)=>X(s,"ATT")-X(d,"ATT"))[0];c.used=!0,l.log.push({text:`❄️ ${c.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":l.maxSubs++,l.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}a=!0}$.from("cards").delete().eq("id",e).then(()=>{}),a&&J(i,l,p)}function Di(e,t,i){const l=Object.values(t.homeTeam).flat().filter(p=>!p.used);if(!l.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${l.map(p=>`
        <div class="player-boost-opt" data-card-id="${p.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${fe[p.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${X(p,p._line||p.job)}</div>
          <div style="flex:1"><b>${p.firstname} ${p.name}</b><div style="font-size:11px;color:#888">${p._line||p.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(p=>{p.addEventListener("click",()=>{const n=p.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const o=(t.homeTeam[a]||[]).find(c=>c.cardId===n);if(o){o.boost=(o.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${o.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),J(e,t,i)})})}function Xe(e,t,i,l,p){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(d,s)=>`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${fe[d.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${d.portrait?`<img src="${d.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(d.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(n);let o=!1;const c=()=>{o||(o=!0,n.remove(),setTimeout(()=>p(),50))};n.addEventListener("click",c),setTimeout(c,3500)}async function le(e,t,i){var s,r;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:l}=i,p=t.homeScore>t.aiScore,n=t.homeScore===t.aiScore,a=p?"victoire":n?"nul":"defaite",o=Dt(t.mode,a);t.matchId&&await $.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:p?l.profile.id:null,home_credits_reward:o,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(l.profile.credits||0)+o,matches_played:(l.profile.matches_played||0)+1};p?c.wins=(l.profile.wins||0)+1:n?c.draws=(l.profile.draws||0)+1:c.losses=(l.profile.losses||0)+1,await $.from("users").update(c).eq("id",l.profile.id),await i.refreshProfile();const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",d.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${p?"🏆":n?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${p?"Victoire !":n?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${o.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(d),(s=document.getElementById("res-home"))==null||s.addEventListener("click",()=>{d.remove(),ne(e),i.navigate("home")}),(r=document.getElementById("res-replay"))==null||r.addEventListener("click",()=>{d.remove(),ne(e),i.navigate("match",{matchMode:t.mode})})}function Gi(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ce(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ri={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function qi(e,t){const{state:i,toast:l}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await Je(e,t)}async function Je(e,t){const{state:i,toast:l}=t,{data:p}=await $.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:n}=await $.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(p||[]).filter(d=>d.seller_id!==i.profile.id),o=n||[];o.filter(d=>d.status==="active").length,e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${a.length} carte(s) en vente · Solde : ${(i.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${o.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function c(d){const s=document.getElementById("mkt-content"),r=d==="buy"?a:o;if(r.length===0){s.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${d==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const f=d==="mine"?[...r].sort((u,g)=>u.status!==g.status?u.status==="active"?-1:1:new Date(g.listed_at)-new Date(u.listed_at)):r;s.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${f.map(u=>{var m,k,C,v;const g=(m=u.card)==null?void 0:m.player;if(!g)return"";const h=g.job==="GK"?g.note_g:g.job==="DEF"?g.note_d:g.job==="MIL"?g.note_m:g.note_a,_=Ri[g.rarity],E=(i.profile.credits||0)>=u.price,w=u.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${w?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${Pi(g.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${_};flex-shrink:0">${h}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${g.firstname} ${g.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${g.country_code} · ${((k=g.clubs)==null?void 0:k.encoded_name)||"—"} · ${g.rarity} · ${g.job}</div>
            ${d==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((C=u.seller)==null?void 0:C.pseudo)||"—"}</div>`:w?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((v=u.buyer)==null?void 0:v.pseudo)||"—"} · ${u.sold_at?new Date(u.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(u.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${u.price.toLocaleString("fr")}</div>
            ${d==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${u.id}" ${E?"":"disabled"} style="margin-top:4px">${E?"Acheter":"Trop cher"}</button>`:w?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${u.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,s.querySelectorAll("[data-buy]").forEach(u=>{u.addEventListener("click",()=>Ni(u.dataset.buy,r,e,t))}),s.querySelectorAll("[data-cancel]").forEach(u=>{u.addEventListener("click",()=>Oi(u.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(d=>{d.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(s=>{const r=s===d;s.style.background=r?"var(--green)":"#fff",s.style.color=r?"#fff":"var(--gray-600)",s.style.borderColor=r?"var(--green)":"var(--gray-200)"}),c(d.dataset.tab)})})}async function Ni(e,t,i,l){var r;const{state:p,toast:n}=l,a=t.find(f=>f.id===e);if(!a)return;const o=a.price,c=p.profile.credits||0,d=(r=a.card)==null?void 0:r.player;if(c<o){n("Crédits insuffisants","error");return}if(!confirm(`Acheter ${d==null?void 0:d.firstname} ${d==null?void 0:d.surname_encoded} pour ${o.toLocaleString("fr")} crédits ?`))return;const s=document.querySelector(`[data-buy="${e}"]`);s&&(s.disabled=!0,s.textContent="⏳");try{const{data:f,error:u}=await $.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:p.profile.id});if(u)throw new Error(u.message);if(!(f!=null&&f.success))throw new Error((f==null?void 0:f.error)||"Achat impossible");p.profile.credits=c-o;const g=document.querySelector("[data-credits]")||document.querySelector(".credits-display");g&&(g.textContent=(c-o).toLocaleString("fr")+" cr."),n(`✅ ${d==null?void 0:d.surname_encoded} ajouté à ta collection !`,"success"),Je(i,l)}catch(f){n("❌ "+f.message,"error"),s&&(s.disabled=!1,s.textContent="Acheter")}}async function Oi(e,t,i){const{toast:l}=i,{data:p}=await $.from("market_listings").select("card_id").eq("id",e).single();await $.from("market_listings").update({status:"cancelled"}).eq("id",e),p&&await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",p.card_id),l("Annonce retirée","success"),Je(t,i)}function Pi(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function Hi(e,{state:t,navigate:i,toast:l}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:p}=await $.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function Ki(e,{state:t,navigate:i,toast:l}){const p=t.profile;if(!p)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await $.from("matches").select("id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at").or(`home_id.eq.${p.id},away_id.eq.${p.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},o=(n||[]).filter(s=>s.status==="finished"),c=(n||[]).filter(s=>s.status==="in_progress");function d(s){const r=s.home_id===p.id;r?s.home_score:s.away_score,r?s.away_score:s.home_score;const f=s.winner_id===p.id,u=s.home_score===s.away_score&&s.status==="finished",g=s.status!=="finished"?"…":u?"N":f?"V":"D",h=s.status!=="finished"||u?"#888":f?"#1A6B3C":"#c0392b";let _=a[s.mode]||s.mode;s.away_id===null&&!_.startsWith("IA")&&(_="IA");let E="";s.status==="in_progress"&&Date.now()-new Date(s.created_at).getTime()>3600*1e3&&(E=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const w=new Date(s.created_at),m=w.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+w.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),k=s.status==="finished"?`${s.home_score} - ${s.away_score}`:`${s.home_score||0} - ${s.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${_}${E}</div>
        <div style="font-size:11px;color:var(--gray-600)">${m}${s.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${k}</span>
        <span style="background:${h};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${g}</span>
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

      ${o.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${o.map(d).join("")}
        </div>`:""}

      ${(n||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const U={user:null,profile:null,page:"home",params:{}};function $e(e,t="info",i=3e3){const l=document.getElementById("toast");l&&(l.textContent=e,l.className=`show ${t}`,clearTimeout(l._t),l._t=setTimeout(()=>{l.className=""},i))}function Ui(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function qe(){document.getElementById("modal-overlay").classList.add("hidden")}async function ke(){if(!U.user)return;const{data:e}=await $.from("users").select("*").eq("id",U.user.id).single();e&&(U.profile=e)}const Ze="mw_theme";function Me(){return localStorage.getItem(Ze)||"light"}function Vi(e){var t;localStorage.setItem(Ze,e),Ne(e),(t=U.profile)!=null&&t.id&&$.from("users").update({theme:e}).eq("id",U.profile.id).then(()=>{})}function Ne(e){document.documentElement.setAttribute("data-theme",e)}function Ee(e,t={}){U.page=e,U.params=t,zt()}async function zt(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(l=>{l.classList.toggle("active",l.dataset.page===U.page)});const t=document.getElementById("nav-credits");t&&U.profile&&(t.textContent=`💰 ${(U.profile.credits||0).toLocaleString("fr")}`);const i={state:U,navigate:Ee,toast:$e,openModal:Ui,closeModal:qe,refreshProfile:ke};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',U.page){case"home":await it(e,i);break;case"collection":await qt(e,i);break;case"decks":await Be(e,i);break;case"boosters":await oi(e,i);break;case"match":await ki(e,i);break;case"market":await qi(e,i);break;case"rankings":await Hi(e,i);break;case"matches":await Ki(e,i);break;default:await it(e,i)}}function Yi(){const e=document.getElementById("app"),t=U.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(l=>{l.addEventListener("click",p=>{p.preventDefault(),Ee(l.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ee("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ee("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const p=Me()==="dark"?"light":"dark";Vi(p),pt(p)}),pt(Me())}function pt(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Wi(){Ne(Me()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&qe()}),document.getElementById("modal-close").addEventListener("click",qe);const{data:{session:e}}=await $.auth.getSession();if(!e){ft(),et(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:$e});return}U.user=e.user,await ke(),ft();try{const{data:t}=await $.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(l=>{i[l.formation]=l.links}),jt(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!U.profile){St(document.getElementById("app"),{state:U,navigate:async()=>{await ke(),ut()},toast:$e,refreshProfile:ke});return}U.profile.theme&&U.profile.theme!==Me()&&(localStorage.setItem(Ze,U.profile.theme),Ne(U.profile.theme)),ut(),$.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(U.user=null,U.profile=null,document.getElementById("app").innerHTML="",et(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:$e}))})}function ut(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Yi(),zt()}function ft(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}Wi();
