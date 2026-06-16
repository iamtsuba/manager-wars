import{s as $,l as J,F as ke,b as ge,c as He,d as ut}from"./formation-links-CDBKB_z4.js";function je(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(d=>d.classList.remove("active")),n.classList.add("active"),document.getElementById("tab-login").style.display=n.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=n.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const n=document.getElementById("login-email").value.trim(),d=document.getElementById("login-password").value,o=document.getElementById("login-error");if(o.textContent="",!n||!d){o.textContent="Remplissez tous les champs.";return}const s=document.getElementById("login-btn");s.textContent="Connexion…",s.disabled=!0;const{error:a}=await $.auth.signInWithPassword({email:n,password:d});if(s.textContent="Se connecter",s.disabled=!1,a){o.textContent=a.message.includes("Invalid")?"Email ou mot de passe incorrect.":a.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const n=document.getElementById("reg-email").value.trim(),d=document.getElementById("reg-password").value,o=document.getElementById("reg-confirm").value,s=document.getElementById("reg-error");if(s.textContent="",!n||!d||!o){s.textContent="Remplissez tous les champs.";return}if(d.length<6){s.textContent="Mot de passe trop court (min. 6 caractères).";return}if(d!==o){s.textContent="Les mots de passe ne correspondent pas.";return}const a=document.getElementById("reg-btn");a.textContent="Création…",a.disabled=!0;const{error:r}=await $.auth.signUp({email:n,password:d});if(a.textContent="Créer mon compte",a.disabled=!1,r){s.textContent=r.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=n})}function gt(e,{state:t,navigate:i,toast:n,refreshProfile:d}){let o="#1A6B3C",s="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${s};border-color:${o}">
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
  `;function a(){var m;const l=document.getElementById("logo-preview"),c=document.getElementById("logo-initials"),p=((m=document.getElementById("setup-club"))==null?void 0:m.value)||"MW",f=p.trim().split(" ").filter(Boolean),u=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():p.slice(0,2).toUpperCase();l&&(l.style.background=s,l.style.borderColor=o),c&&(c.textContent=u,c.style.color=o)}document.getElementById("color1").addEventListener("input",l=>{o=l.target.value,document.getElementById("swatch1").style.background=o,a()}),document.getElementById("color2").addEventListener("input",l=>{s=l.target.value,document.getElementById("swatch2").style.background=s,a()});function r(l){document.querySelectorAll(".setup-step").forEach(c=>c.classList.remove("active")),document.getElementById(`step-${l}`).classList.add("active"),document.getElementById("step-num").textContent=l,document.getElementById("progress-fill").style.width=`${Math.round(l/3*100)}%`,l===3&&a()}document.getElementById("step1-next").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("step1-error");if(c.textContent="",l.length<3){c.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:p}=await $.from("users").select("id").eq("pseudo",l).maybeSingle();if(p){c.textContent="Ce pseudo est déjà pris.";return}r(2)}),document.getElementById("step2-back").addEventListener("click",()=>r(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const l=document.getElementById("setup-club").value.trim(),c=document.getElementById("step2-error");if(c.textContent="",l.length<2){c.textContent="Nom trop court (min. 2 caractères).";return}const{data:p}=await $.from("users").select("id").eq("club_name",l).maybeSingle();if(p){c.textContent="Ce nom de club est déjà pris.";return}r(3)}),document.getElementById("step3-back").addEventListener("click",()=>r(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("setup-club").value.trim(),p=document.getElementById("step3-error"),f=document.getElementById("step3-finish");p.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:u}=await $.from("users").insert({id:t.user.id,pseudo:l,club_name:c,club_color1:o,club_color2:s,credits:1e4});if(u)throw u;await mt(t.user.id),await d(),n(`Bienvenue ${l} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(u){p.textContent=u.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function mt(e){const{data:t}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,n=i.filter(r=>r.job==="GK"),d=i.filter(r=>r.job!=="GK"),o=[];for(let r=0;r<5;r++){let l=[];if(r===0&&n.length>0){const c=n[Math.floor(Math.random()*n.length)];l.push(c);const p=Be([...d]).slice(0,3);l.push(...p)}else l=Be([...i]).slice(0,4);l.forEach(c=>{o.push({owner_id:e,player_id:c.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(r=>{o.push({owner_id:e,card_type:"game_changer",gc_type:r})});const a=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];o.push({owner_id:e,card_type:"formation",formation:a[Math.floor(Math.random()*a.length)]}),o.length>0&&await $.from("cards").insert(o),await $.from("users").update({first_booster_opened:!0}).eq("id",e)}function Be(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}async function Se(e,{state:t,navigate:i,toast:n}){var s,a;const d=t.profile;if(!d)return;const{data:o}=await $.from("matches").select("id,home_score,away_score,status,mode,winner_id,created_at").or(`home_id.eq.${d.id},away_id.eq.${d.id}`).eq("status","finished").order("created_at",{ascending:!1}).limit(3);e.innerHTML=`
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
          ${o.map(r=>{const l=r.winner_id===d.id,c=r.home_score===r.away_score,p=c?"N":l?"V":"D",f=c?"#888":l?"#1A6B3C":"#c0392b",u={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat"}[r.mode]||r.mode,x=new Date(r.created_at).toLocaleDateString("fr",{month:"short",day:"numeric"});return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
              <div>
                <div style="font-size:13px;font-weight:600">${u}</div>
                <div style="font-size:11px;color:var(--gray-600)">${x}</div>
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
        ${d.is_admin?`
        <a href="/manager-wars/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:6px 16px;border-radius:8px">
          ⚙️ Admin Editor
        </a>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(r=>{r.addEventListener("click",l=>{l.preventDefault(),i(r.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(r=>{r.addEventListener("click",()=>{if(r.classList.add("tapped"),setTimeout(()=>r.classList.remove("tapped"),200),r.dataset.action==="match-ai"){yt(i);return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await $.auth.signOut(),window.location.reload()})}function yt(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",d=>{d.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{n(),e("match",{matchMode:d.dataset.mode})})})}const ie={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function F(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}function Ue(e){let t=0;for(let i=0;i<e.length-1;i++){const n=e[i],d=e[i+1];if(!n||!d)continue;const o=J(n,d);o==="#00ff88"?t+=2:o==="#FFD700"&&(t+=1)}return t}function Ve(e,t={}){const i=e.reduce((o,s)=>{const a=s._line||s.job;return o+(Number(a==="MIL"?s.note_m:s.note_a)||0)+(Number(s.boost)||0)},0),n=Ue(e);let d=i+n;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function Ye(e,t={}){const i=e.reduce((o,s)=>{const a=s._line||s.job;let r=0;return a==="GK"?r=Number(s.note_g)||0:a==="MIL"?r=Number(s.note_m)||0:r=Number(s.note_d)||0,o+r+(Number(s.boost)||0)},0),n=Ue(e);let d=i+n;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function We(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Je(e,t,i="easy"){const n=e.filter(s=>!s.used);if(!n.length)return[];const d=[...n].sort((s,a)=>{const r=t==="attack"?F(s,"ATT"):s._line==="GK"?F(s,"GK"):F(s,"DEF");return(t==="attack"?F(a,"ATT"):a._line==="GK"?F(a,"GK"):F(a,"DEF"))-r});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(o,d.length,3))}function xt(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Xe={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},pe={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},re=["GK","DEF","MIL","ATT"],ht=["Tous","GK","DEF","MIL","ATT"],bt={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},Ee={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Qe(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function oe(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Fe(e,t=""){var p,f;const i=e.player;if(!i)return"";const n=i.job||"ATT",d=pe[n],o=Xe[i.rarity]||"#ccc",s=oe(i,n),a=i.job2?oe(i,i.job2):null,r=i.job2?pe[i.job2]:null,l=Qe(i),c=Ee[i.country_code]||i.country_code||"";return`
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
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${d}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${d}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${a!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${r}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${a}</text>
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${c}</div>
        ${(p=i.clubs)!=null&&p.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=i.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function vt(e){const t=e.job||"ATT",i=oe(e,t),n=Ee[e.country_code]||e.country_code||"";return`
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
  </div>`}async function wt(e,t){const{state:i,navigate:n,toast:d,openModal:o,closeModal:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await $.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:r}=await $.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),l=(a||[]).filter(I=>I.card_type==="player"&&I.player),c=(a||[]).filter(I=>I.card_type==="game_changer"),p=(a||[]).filter(I=>I.card_type==="formation"),f=Object.keys(ke),u=Object.keys(ie),m={};l.forEach(I=>{const L=I.player.id;m[L]=(m[L]||0)+1});const x=new Set(Object.keys(m).map(I=>String(I))),h=new Set(p.map(I=>I.formation)),_=new Set(c.map(I=>I.gc_type));let y="player",g="Tous",v="",E=!1;function b(){return[...l].sort((I,L)=>{const M=re.indexOf(I.player.job),B=re.indexOf(L.player.job);return M!==B?M-B:(I.player.surname_encoded||"").localeCompare(L.player.surname_encoded||"")})}function w(){return[...r||[]].sort((I,L)=>{const M=re.indexOf(I.job),B=re.indexOf(L.job);return M!==B?M-B:(I.surname_encoded||"").localeCompare(L.surname_encoded||"")})}function k(){return b().filter(I=>{const L=I.player,M=g==="Tous"||L.job===g,B=!v||`${L.firstname} ${L.surname_encoded}`.toLowerCase().includes(v);return M&&B})}function T(){return w().filter(I=>{const L=g==="Tous"||I.job===g,M=!v||`${I.firstname} ${I.surname_encoded}`.toLowerCase().includes(v);return L&&M})}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Ma collection</h2>
      <p>${l.length} carte(s) joueur · ${c.length} Game Changer · ${p.length} Formation</p>
    </div>

    <!-- Onglets -->
    <div style="display:flex;border-bottom:1px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${y==="player"?"var(--green)":"transparent"};
        color:${y==="player"?"var(--green)":"var(--gray-600)"}">Joueurs</button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${y==="formation"?"var(--green)":"transparent"};
        color:${y==="formation"?"var(--green)":"var(--gray-600)"}">Formations</button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${y==="gc"?"var(--green)":"transparent"};
        color:${y==="gc"?"var(--green)":"var(--gray-600)"}">Game Changer</button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grille cartes -->
    <div class="page-body">
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-start" id="col-grid"></div>
    </div>
  </div>`;function A(){const I=document.getElementById("col-filters");I&&(y==="player"?(I.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${v}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${ht.map(L=>`
            <button class="filter-btn" data-job="${L}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${L===g?"var(--green)":"var(--gray-200)"};
                background:${L===g?"var(--green)":"#fff"};
                color:${L===g?"#fff":"var(--gray-600)"}">
              ${L}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${E?"var(--yellow)":"var(--gray-200)"};
              background:${E?"var(--yellow)":"#fff"};
              color:${E?"#fff":"var(--gray-600)"}">
            ${E?"✓ Tout afficher":"Voir tout"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",L=>{v=L.target.value.toLowerCase(),z()}),e.querySelectorAll(".filter-btn").forEach(L=>{L.addEventListener("click",()=>{g=L.dataset.job,A(),z()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{E=!E,A(),z()})):(I.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${E?"var(--yellow)":"var(--gray-200)"};
              background:${E?"var(--yellow)":"#fff"};
              color:${E?"#fff":"var(--gray-600)"}">
            ${E?"✓ Tout afficher":"Voir tout"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{E=!E,A(),z()})))}function z(){const I=document.getElementById("col-grid");I&&(y==="player"?C(I):y==="formation"?N(I):O(I))}function C(I){if(E){const L=T();if(!L.length){I.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}I.innerHTML=L.map(M=>{if(x.has(String(M.id))){const S=l.find(H=>H.player.id===M.id),G=m[M.id]||1,q=G>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${G}</div>`:"",K=l.filter(H=>H.player.id===M.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Fe(S,q+K)}return vt(M)}).join("")}else{const L=k();if(!L.length){I.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const M={},B=[];L.forEach(S=>{const G=S.player.id;M[G]||(M[G]=!0,B.push(S))}),I.innerHTML=B.map(S=>{const G=m[S.player.id]||1,q=G>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${G}</div>`:"",K=l.filter(H=>H.player.id===S.player.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Fe(S,q+K)}).join("")}I.querySelectorAll("[data-card-id]").forEach(L=>{L.addEventListener("click",()=>{const M=l.find(B=>B.id===L.dataset.cardId);M&&kt(M,l,m,t)})})}function N(I){const L=E?f:[...h];if(!L.length){I.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}I.innerHTML=L.map(M=>{if(h.has(M)){const S=p.find(P=>P.formation===M),G=p.filter(P=>P.formation===M).length,q=G>1?`<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${G}</div>`:"";return`
          <div data-form-id="${S.id}" style="
            position:relative;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border:2px solid #2a8f52;
            border-radius:12px;padding:12px;color:#fff;min-width:100px;width:140px;flex-shrink:0;cursor:pointer;
            display:flex;flex-direction:column;gap:4px;align-items:flex-start">
            ${q}
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
        </div>`}).join(""),I.querySelectorAll("[data-form-id]").forEach(M=>{M.addEventListener("click",()=>{const B=p.find(S=>S.id===M.dataset.formId);B&&_t(B,p,t,o)})})}function O(I){const L=E?u:[..._];if(!L.length){I.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}I.innerHTML=L.map(M=>{const B=_.has(M),S=ie[M]||{icon:"⚡"};if(B){const G=c.find(K=>K.gc_type===M),q=c.filter(K=>K.gc_type===M).length,P=q>1?`<div style="position:absolute;top:4px;right:4px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${q}</div>`:"";return`
          <div data-gc-id="${G.id}" data-gc-type="${M}" style="
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
        </div>`}).join(""),I.querySelectorAll("[data-gc-id]").forEach(M=>{M.addEventListener("click",()=>$t(M.dataset.gcType,o))})}e.querySelectorAll(".col-tab-btn").forEach(I=>{I.addEventListener("click",()=>{y=I.dataset.tab,g="Tous",v="",E=!1,e.querySelectorAll(".col-tab-btn").forEach(L=>{const M=L.dataset.tab===y;L.style.borderBottomColor=M?"var(--green)":"transparent",L.style.color=M?"var(--green)":"var(--gray-600)"}),A(),z()})}),A(),z()}function $t(e,t){const i=ie[e]||{icon:"⚡",desc:"Effet spécial."};t("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ee=1e3;function _t(e,t,i,n){var x,h,_;const{state:d,toast:o,closeModal:s,navigate:a,refreshProfile:r}=i,l=e.formation,c={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function p(){const y=ge[l]||{},g=ke[l]||[],v=290,E=360,b=20;function w(T){const A=y[T];return A?{x:A.x*v,y:A.y*E}:null}let k=`<svg width="${v}" height="${E}" viewBox="0 0 ${v} ${E}" xmlns="http://www.w3.org/2000/svg">`;for(const[T,A]of g){const z=w(T),C=w(A);!z||!C||(k+=`<line x1="${z.x}" y1="${z.y}" x2="${C.x}" y2="${C.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const T of Object.keys(y)){const A=w(T);if(!A)continue;const z=T.replace(/\d+/,""),C=c[z]||"#555";k+=`<circle cx="${A.x}" cy="${A.y}" r="${b}" fill="${C}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,k+=`<text x="${A.x}" y="${A.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${z}</text>`}return k+="</svg>",k}const f=t.filter(y=>y.formation===l),u=f.length,m=!e.is_for_sale;n(`Formation ${l}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(x=document.getElementById("direct-sell-form-btn"))==null||x.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${l} pour ${ee.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const y=f.find(v=>!v.is_for_sale)||f[0];if(!y){o("Aucune carte à vendre","error");return}const{error:g}=await $.from("cards").delete().eq("id",y.id);if(g){o(g.message,"error");return}await $.from("users").update({credits:(d.profile.credits||0)+ee}).eq("id",d.profile.id),await r(),o(`+${ee.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),a("collection")}),(h=document.getElementById("market-sell-form-btn"))==null||h.addEventListener("click",async()=>{const y=parseInt(document.getElementById("sell-price-form").value);if(!y||y<1){o("Prix invalide","error");return}await $.from("cards").update({is_for_sale:!0,sale_price:y}).eq("id",e.id),await $.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:y}),o("Carte mise en vente sur le marché !","success"),s(),a("collection")}),(_=document.getElementById("cancel-sell-form-btn"))==null||_.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),s(),a("collection")})}function kt(e,t,i,n){var b,w,k,T,A,z;const{state:d,toast:o,openModal:s,closeModal:a,navigate:r,refreshProfile:l}=n,c=e.player,p=t.filter(C=>C.player.id===c.id),f=p.length,u=bt[c.rarity]||1e3,m=c.rarity!=="legende",x=Qe(c),h=oe(c,c.job),_=c.job2?oe(c,c.job2):null,y=pe[c.job]||"#1A6B3C",g=c.job2?pe[c.job2]:null,v=Xe[c.rarity]||"#ccc",E=Ee[c.country_code]||c.country_code||"";s(`${c.firstname} ${c.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${v};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${c.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(c.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${y}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${y}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${h}</text>
            </svg>
            ${_!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${g}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${_}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${x?`<img src="${x}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${c.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${E}</div>
            ${(b=c.clubs)!=null&&b.logo_url?`<img src="${c.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((w=c.clubs)==null?void 0:w.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${v}">${c.rarity.toUpperCase()}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${c.job}${c.job2?" / "+c.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">NOTES</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;font-size:12px">
            <span>GK <b>${c.note_g||0}</b></span>
            <span>DEF <b>${c.note_d||0}</b></span>
            <span>MIL <b>${c.note_m||0}</b></span>
            <span>ATT <b>${c.note_a||0}</b></span>
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
    ${m&&!e.is_for_sale?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price" min="1" placeholder="Prix en crédits" value="${c.sell_price||5e3}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-btn">Retirer</button>
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(k=document.getElementById("close-detail"))==null||k.addEventListener("click",a),(T=document.getElementById("direct-sell-btn"))==null||T.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${c.surname_encoded} pour ${u.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const C=p.find(O=>!O.is_for_sale)||p[0];if(!C){o("Aucune carte à vendre","error");return}const{error:N}=await $.from("cards").delete().eq("id",C.id);if(N){o(N.message,"error");return}await $.from("users").update({credits:(d.profile.credits||0)+u}).eq("id",d.profile.id),await l(),o(`+${u.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),r("collection")}),(A=document.getElementById("market-sell-btn"))==null||A.addEventListener("click",async()=>{const C=parseInt(document.getElementById("sell-price").value);if(!C||C<1){o("Prix invalide","error");return}await $.from("cards").update({is_for_sale:!0,sale_price:C}).eq("id",e.id),await $.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:C}),o("Carte mise en vente sur le marché !","success"),a(),r("collection")}),(z=document.getElementById("cancel-sell-btn"))==null||z.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),a(),r("collection")})}const fe={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},U={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function me(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Ze(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function et(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Et(e,t=44,i=58){var u;const n=e?me(e):null,d=e?et(e):null,o=Ze(e==null?void 0:e.country_code),s=(e==null?void 0:e.job)||"MIL",a=U[s]||"#555",r={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",l=Number(s==="GK"?e==null?void 0:e.note_g:s==="DEF"?e==null?void 0:e.note_d:s==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,c=Math.round(i*.19),p=Math.round(i*.25),f=i-c-p;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${r};background:${a};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${c}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${n?`<img src="${n}" style="position:absolute;top:${c}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${o?`<img src="${o}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">🌍</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${l}</span>
      ${d?`<img src="${d}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:(u=e==null?void 0:e.clubs)!=null&&u.encoded_name?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function xe(e,t){const{state:i,navigate:n,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await $.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(o==null?void 0:o.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(o==null?void 0:o.length)>0?o.map(s=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!s)return;const{data:a,error:r}=await $.from("decks").insert({owner_id:i.profile.id,name:s}).select().single();if(r){d(r.message,"error");return}d("Deck créé !","success"),De(a.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>De(s.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const a=prompt("Nouveau nom :",s.dataset.name);if(!a||a===s.dataset.name)return;const{error:r}=await $.from("decks").update({name:a}).eq("id",s.dataset.rename);if(r){d(r.message,"error");return}d("Deck renommé !","success"),xe(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await $.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:a}=await $.from("decks").delete().eq("id",s.dataset.delete);if(a){d(a.message,"error");return}d("Deck supprimé.","success"),xe(e,t)})})}async function De(e,t,i){const{state:n,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await $.from("decks").select("*").eq("id",e).single(),{data:s}=await $.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),a=(s||[]).filter(u=>u.card_type==="player"&&u.player),r=(s||[]).filter(u=>u.card_type==="formation"),l=r.map(u=>u.formation).filter(Boolean),{data:c}=await $.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=o.formation||"4-4-2";l.length>0&&!l.includes(p)&&(p=l[0]);const f={deckId:e,name:o.name,formation:p,formationCardId:o.formation_card_id,slots:{},subs:[],playerCards:a,formationCards:r,availableFormations:l};(c||[]).forEach(u=>{u.is_starter?f.slots[u.position]=u.card_id:f.subs.includes(u.card_id)||f.subs.push(u.card_id)}),X(t,f,i)}function X(e,t,i){var r;const{navigate:n}=i;fe[t.formation];const d=Ge(t.formation),o=d.filter(l=>t.slots[l]).length,s=t.availableFormations.length>0?t.availableFormations:Object.keys(fe),a=t.subs.map(l=>t.playerCards.find(c=>c.id===l)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${s.map(l=>`<option value="${l}" ${l===t.formation?"selected":""}>${l}</option>`).join("")}
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
        ${a.map(l=>{const c=l.player;return`<div style="position:relative;flex-shrink:0">
            ${Et(c,44,58)}
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
  </div>`,It(e,t,d,i),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",l=>{t.formation=l.target.value;const c=Ge(t.formation),p={};c.forEach(f=>{t.slots[f]&&(p[f]=t.slots[f])}),t.slots=p,X(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>Lt(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(l=>{l.addEventListener("click",()=>{t.subs=t.subs.filter(c=>c!==l.dataset.removeSub),X(e,t,i)})}),(r=document.getElementById("add-sub-btn"))==null||r.addEventListener("click",()=>{Tt(t,e,i)})}function It(e,t,i,n){const d=e.querySelector("#deck-field");if(!d)return;const o=ge[t.formation]||{},s=He(t.formation)||[],a={};for(const _ of i){const y=t.slots[_],g=y?t.playerCards.find(v=>v.id===y):null;a[_]=g?g.player:null}const r=300,l=300,c=48,p=64,f=13,u=16,m=38;function x(_){const y=o[_];return y?{x:y.x*r,y:y.y*l}:null}let h="";for(const[_,y]of s){const g=x(_),v=x(y);if(!g||!v)continue;const E=a[_]?{...a[_],club_id:a[_].club_id,country_code:a[_].country_code,rarity:a[_].rarity}:null,b=a[y]?{...a[y],club_id:a[y].club_id,country_code:a[y].country_code,rarity:a[y].rarity}:null,w=J(E,b);w==="#ff3333"||w==="#cc2222"?h+=`<line x1="${g.x.toFixed(1)}" y1="${g.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${w}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(h+=`<line x1="${g.x.toFixed(1)}" y1="${g.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${w}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,h+=`<line x1="${g.x.toFixed(1)}" y1="${g.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${w}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const _ of i){const y=x(_);if(!y)continue;const g=a[_],v=_.replace(/\d+/,""),E=U[v]||"#555",b=(y.x-c/2).toFixed(1),w=(y.y-p/2).toFixed(1),k={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[g==null?void 0:g.rarity]||"#aaa";if(g){const T=me(g),A=et(g),z=Ze(g.country_code),C=Number(v==="GK"?g.note_g:v==="DEF"?g.note_d:v==="MIL"?g.note_m:g.note_a)||0,N=p-f-u;h+=`<defs><clipPath id="dcp-${_}"><rect x="${b}" y="${(y.y-p/2+f).toFixed(1)}" width="${c}" height="${N}"/></clipPath></defs>`,h+=`<rect x="${b}" y="${w}" width="${c}" height="${p}" rx="5" fill="${E}"/>`,T&&(h+=`<image href="${T}" x="${b}" y="${(y.y-p/2+f).toFixed(1)}" width="${c}" height="${N}" clip-path="url(#dcp-${_})" preserveAspectRatio="xMidYMin slice"/>`),h+=`<rect x="${b}" y="${w}" width="${c}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,h+=`<text x="${y.x.toFixed(1)}" y="${(y.y-p/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(g.surname_encoded||"").slice(0,9)}</text>`;const O=(y.y+p/2-u).toFixed(1);h+=`<rect x="${b}" y="${O}" width="${c}" height="${u}" fill="rgba(255,255,255,0.93)"/>`,z&&(h+=`<image href="${z}" x="${(y.x-21).toFixed(1)}" y="${(y.y+p/2-u+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),h+=`<text x="${y.x.toFixed(1)}" y="${(y.y+p/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${C}</text>`,A&&(h+=`<image href="${A}" x="${(y.x+c/2-14).toFixed(1)}" y="${(y.y+p/2-u+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),h+=`<rect x="${b}" y="${w}" width="${c}" height="${p}" rx="5" fill="none" stroke="${k}" stroke-width="2"/>`}else h+=`<rect x="${b}" y="${w}" width="${c}" height="${p}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,h+=`<text x="${y.x.toFixed(1)}" y="${y.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,h+=`<text x="${y.x.toFixed(1)}" y="${(y.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${v}</text>`;h+=`<rect x="${b}" y="${w}" width="${c}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${_}" style="cursor:pointer"/>`}d.innerHTML=`<svg viewBox="${-m} ${-m} ${r+m*2} ${l+m*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${h}</svg>`,d.querySelectorAll(".deck-slot-hit").forEach(_=>{_.addEventListener("click",()=>At(_.dataset.pos,t,e,n))})}function At(e,t,i,n){var f,u,m;const{openModal:d,closeModal:o}=n,s=e.replace(/\d+/,""),a=t.slots[e],r=a?t.playerCards.find(x=>x.id===a):null;(f=r==null?void 0:r.player)==null||f.id;const l=new Set;Object.entries(t.slots).forEach(([x,h])=>{var y;if(x===e||!h)return;const _=t.playerCards.find(g=>g.id===h);(y=_==null?void 0:_.player)!=null&&y.id&&l.add(_.player.id)}),t.subs.forEach(x=>{var _;const h=t.playerCards.find(y=>y.id===x);(_=h==null?void 0:h.player)!=null&&_.id&&l.add(h.player.id)});const c=new Set,p=t.playerCards.filter(x=>{const h=x.player;return!(h.job===s||h.job2===s)||l.has(h.id)||c.has(h.id)?!1:(c.add(h.id),!0)});p.sort((x,h)=>{const _=s==="GK"?x.player.note_g:s==="DEF"?x.player.note_d:s==="MIL"?x.player.note_m:x.player.note_a;return(s==="GK"?h.player.note_g:s==="DEF"?h.player.note_d:s==="MIL"?h.player.note_m:h.player.note_a)-_}),d(`Choisir ${s} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${p.length>0?p.map(x=>{var v,E;const h=x.player,_=s==="GK"?h.note_g:s==="DEF"?h.note_d:s==="MIL"?h.note_m:h.note_a,y=me(h),g={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[h.rarity];return`<div class="player-option" data-card-id="${x.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${U[s]}">
            ${y?`<img src="${y}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${U[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${h.firstname} ${h.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${h.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${h.country_code}">
              ${(v=h.clubs)!=null&&v.logo_url?`<img src="${h.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((E=h.clubs)==null?void 0:E.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${h.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${U[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${g};flex-shrink:0">
            ${_}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(u=document.getElementById("close-selector"))==null||u.addEventListener("click",o),(m=document.getElementById("remove-player"))==null||m.addEventListener("click",()=>{delete t.slots[e],o(),X(i,t,n)}),document.querySelectorAll(".player-option").forEach(x=>{x.addEventListener("click",()=>{t.slots[e]=x.dataset.cardId,o(),X(i,t,n)})})}function Tt(e,t,i){var r;const{openModal:n,closeModal:d}=i,o=new Set;Object.values(e.slots).filter(Boolean).forEach(l=>{var p;const c=e.playerCards.find(f=>f.id===l);(p=c==null?void 0:c.player)!=null&&p.id&&o.add(c.player.id)}),e.subs.forEach(l=>{var p;const c=e.playerCards.find(f=>f.id===l);(p=c==null?void 0:c.player)!=null&&p.id&&o.add(c.player.id)});const s=new Set,a=e.playerCards.filter(l=>{var c,p,f;return o.has((c=l.player)==null?void 0:c.id)||s.has((p=l.player)==null?void 0:p.id)?!1:(s.add((f=l.player)==null?void 0:f.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${a.length>0?a.map(l=>{var u;const c=l.player,p=me(c),f=c.job==="GK"?c.note_g:c.job==="DEF"?c.note_d:c.job==="MIL"?c.note_m:c.note_a;return`<div class="player-option" data-card-id="${l.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${U[c.job]}">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${c.firstname} ${c.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${c.job} · ${c.country_code} · ${((u=c.clubs)==null?void 0:u.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${U[c.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(r=document.getElementById("close-sub-selector"))==null||r.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(l=>{l.addEventListener("click",()=>{e.subs.push(l.dataset.cardId),d(),X(t,e,i)})})}async function Lt(e,t){const{state:i,toast:n,navigate:d}=t,o=e.formationCards.find(r=>r.formation===e.formation),s=(o==null?void 0:o.id)||e.formationCardId;await $.from("decks").update({formation:e.formation,formation_card_id:s||null}).eq("id",e.deckId),await $.from("deck_cards").delete().eq("deck_id",e.deckId);const a=[];if(Object.entries(e.slots).forEach(([r,l],c)=>{a.push({deck_id:e.deckId,card_id:l,position:r,is_starter:!0,slot_order:c})}),e.subs.forEach((r,l)=>{a.push({deck_id:e.deckId,card_id:r,position:`SUB${l+1}`,is_starter:!1,slot_order:100+l})}),a.length>0){const{error:r}=await $.from("deck_cards").insert(a);if(r){n(r.message,"error");return}}n("Deck enregistré ✅","success"),d("decks")}function Ge(e){const t=fe[e]||fe["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}const Mt="modulepreload",zt=function(e){return"/manager-wars/"+e},Ne={},Ct=function(t,i,n){let d=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));d=Promise.allSettled(i.map(r=>{if(r=zt(r),r in Ne)return;Ne[r]=!0;const l=r.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":Mt,l||(p.as="script"),p.crossOrigin="",p.href=r,a&&p.setAttribute("nonce",a),document.head.appendChild(p),l)return new Promise((f,u)=>{p.addEventListener("load",f),p.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return d.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};async function tt(){const{data:e}=await $.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await $.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(n=>n.booster_id===i.id)}))}function jt(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,d)=>n+Number(d.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const Bt=Object.freeze(Object.defineProperty({__proto__:null,loadActiveBoosters:tt,rollDropRate:jt},Symbol.toStringTag,{value:"Module"})),it=()=>Object.keys(ge),St=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],he={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Ft(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Dt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Gt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};function Nt(e){var d;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((d=Object.entries(t).sort((o,s)=>s[1]-o[1])[0])==null?void 0:d[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Rt(e,{state:t,navigate:i,toast:n}){var s;const d=((s=t.profile)==null?void 0:s.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await tt()).map(Nt)}catch(a){console.warn("Erreur chargement boosters DB, fallback hardcodé",a)}o.length||(o=St.map(a=>({...a,rates:[],isPub:a.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${d.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(a=>{const r=a.cost===0||d>=a.cost;return`<div class="booster-card ${r?"":"disabled"}" data-booster="${a.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${a.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${a.img}" alt="${a.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${a.name}</div>
            <div class="desc">${a.sub}</div>
            <div class="cost">${a.costLabel}</div>
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(a=>{a.addEventListener("click",async()=>{const r=o.find(l=>l.id===a.dataset.booster);if(r){a.style.opacity="0.5",a.style.pointerEvents="none";try{await Ot(r,{state:t,toast:n,navigate:i,container:e})}catch(l){n(l.message,"error"),a.style.opacity="",a.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(a=>{a.addEventListener("click",r=>{r.stopPropagation();const l=o.find(c=>c.id===a.dataset.boosterId);Wt(l)})})}async function Ot(e,{state:t,toast:i,navigate:n,container:d}){if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await Qt()}catch(p){i(p.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:o}=await $.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),s=new Set((o||[]).filter(p=>p.card_type==="player").map(p=>p.player_id)),a=new Set((o||[]).filter(p=>p.card_type==="formation").map(p=>p.formation));let r=[];const l=e.type||"player";l==="player"?r=await Ht(t.profile,e.cardCount,e.cost):l==="game_changer"?r=await Ut(t.profile,e.cardCount,e.cost):l==="formation"?r=await Vt(t.profile,e.cost):r=await Kt(t.profile,e),r.forEach(p=>{p.card_type==="player"&&p.player?p.isDuplicate=s.has(p.player.id):p.card_type==="formation"&&(p.isDuplicate=a.has(p.formation))});const{data:c}=await $.from("users").select("*").eq("id",t.profile.id).single();c&&(t.profile=c),Yt(r,e,n)}function qt(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function V(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Pt(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>V(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>V(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&V(n)>=6),i.length||(i=e.filter(n=>V(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&V(n)>=1&&V(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Kt(e,t){if(t.cost>0){const{error:d}=await $.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(d)throw d}const{rollDropRate:i}=await Ct(async()=>{const{rollDropRate:d}=await Promise.resolve().then(()=>Bt);return{rollDropRate:d}},void 0),n=[];for(let d=0;d<(t.cardCount||5);d++){const o=i(t.rates);if(o){if(o.card_type==="player"){let s=$.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);o.rarity&&(s=s.eq("rarity",o.rarity));const{data:a}=await s;let r=a||[];if((o.note_min||o.note_max)&&(r=r.filter(p=>{const f=Math.max(Number(p.note_g)||0,Number(p.note_d)||0,Number(p.note_m)||0,Number(p.note_a)||0);return(!o.note_min||f>=o.note_min)&&(!o.note_max||f<=o.note_max)})),r.length||(r=a||[]),!r.length)continue;const l=r[Math.floor(Math.random()*r.length)],{data:c}=await $.from("cards").insert({owner_id:e.id,player_id:l.id,card_type:"player"}).select().single();c&&n.push({...c,player:l})}else if(o.card_type==="game_changer"){const{data:s}=await $.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=s!=null&&s.length?s:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],l=a[Math.floor(Math.random()*a.length)].name,{data:c}=await $.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:l}).select().single();c&&n.push(c)}else if(o.card_type==="formation"){const s=it(),a=s[Math.floor(Math.random()*s.length)],{data:r}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();r!=null&&r[0]&&n.push(r[0])}}}return n}async function Ht(e,t,i){if(i>0){const{error:l}=await $.from("users").update({credits:e.credits-i}).eq("id",e.id);if(l)throw l}const{data:n}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=n.filter(l=>l.job==="GK"),o=n.filter(l=>l.job!=="GK"),s=!e.first_booster_opened&&d.length>0,a=[];for(let l=0;l<t;l++){const c=l===0&&s?d:l===0?o:n,p=qt(),f=Pt(c,p);f&&a.push(f)}s&&await $.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:r}=await $.from("cards").insert(a.map(l=>({owner_id:e.id,player_id:l.id,card_type:"player"}))).select();return a.map((l,c)=>({...r[c],player:l}))}async function Ut(e,t,i){const{error:n}=await $.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:d}=await $.from("gc_definitions").select("id,name,gc_type").eq("is_active",!0),o=d!=null&&d.length?d:Object.keys(he).map(c=>({name:c,gc_type:"game_changer"})),s=Array.from({length:t},()=>{const c=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:c.name,gc_definition_id:c.id||null}}),{data:a,error:r}=await $.from("cards").insert(s).select();return r&&console.error("[Booster GC] Erreur insert:",r.message,r),(a||[]).map(c=>{const p=d==null?void 0:d.find(f=>f.name===c.gc_type||f.id===c.gc_definition_id);return{...c,_gcDef:p||null}})}async function Vt(e,t){const{error:i}=await $.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const n=it(),d=n[Math.floor(Math.random()*n.length)],{data:o,error:s}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),o||[]}function Yt(e,t,i){var f;if(!e||e.length===0){const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",u.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(u),(f=u.querySelector("#anim-close-err"))==null||f.addEventListener("click",()=>u.remove());return}const n=document.createElement("div");n.id="booster-anim-overlay",n.innerHTML=`
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
  `,document.body.appendChild(n);let d=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(d)return;d=!0;const u=document.getElementById("pack-visual");u.classList.add("shaking"),setTimeout(()=>{u.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",s(0)},600)},500)});let o=0;function s(u){o=u;const m=document.getElementById("reveal-phase");m.style.display="flex",a(u)}function a(u){var b;const m=e[u],x=document.getElementById("card-counter"),h=document.getElementById("single-card-slot"),_=document.getElementById("card-tap-hint");x&&(x.textContent=`Carte ${u+1} / ${e.length}`),_&&(_.textContent=u<e.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const y=Re(m),g=m.card_type==="player"&&((b=m.player)==null?void 0:b.rarity)==="legende";h.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${g?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${y}
        ${m.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,g&&c();const v=document.getElementById("current-card-wrap");let E=!1;v.addEventListener("click",()=>{if(E)return;E=!0;const w=u+1;w<e.length?(v.style.transition="all 0.25s ease",v.style.transform="translateX(-120%) rotate(-15deg)",v.style.opacity="0",setTimeout(()=>a(w),250)):r()})}function r(){p(),document.getElementById("reveal-phase").style.display="none";const u=document.getElementById("recap-phase");u.style.display="flex";const m=document.getElementById("recap-grid");m.innerHTML=e.map((x,h)=>`
      <div class="recap-card" style="--i:${h};animation-delay:${h*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${Re(x)}
        ${x.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let l=null;function c(){const u=document.getElementById("fireworks-canvas");if(!u)return;u.width=window.innerWidth,u.height=window.innerHeight;const m=u.getContext("2d"),x=[];function h(){const y=Math.random()*u.width,g=Math.random()*u.height*.6,v=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],E=v[Math.floor(Math.random()*v.length)];for(let b=0;b<60;b++){const w=Math.PI*2/60*b,k=2+Math.random()*5;x.push({x:y,y:g,vx:Math.cos(w)*k,vy:Math.sin(w)*k,alpha:1,color:E,size:2+Math.random()*3})}}h(),l=setInterval(h,600);function _(){if(document.getElementById("fireworks-canvas")){m.clearRect(0,0,u.width,u.height);for(let y=x.length-1;y>=0;y--){const g=x[y];if(g.x+=g.vx,g.y+=g.vy+.08,g.vy*=.98,g.alpha-=.018,g.alpha<=0){x.splice(y,1);continue}m.globalAlpha=g.alpha,m.fillStyle=g.color,m.beginPath(),m.arc(g.x,g.y,g.size,0,Math.PI*2),m.fill()}m.globalAlpha=1,(l!==null||x.length>0)&&requestAnimationFrame(_)}}_()}function p(){l!==null&&(clearInterval(l),l=null);const u=document.getElementById("fireworks-canvas");u&&u.getContext("2d").clearRect(0,0,u.width,u.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{p(),n.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{p(),n.remove(),i("boosters")})}function Re(e){var t,i,n,d;if(e.card_type==="player"&&e.player){const o=e.player,s=o.job||"ATT",a=Dt[s]||"#1A6B3C",r=Gt[o.rarity]||"#ccc",l=s==="GK"?o.note_g:s==="DEF"?o.note_d:s==="MIL"?o.note_m:o.note_a,c=Ft(o),p={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[o.country_code]||o.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${r};overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:6px 6px 2px;text-align:center;background:#f2e8d2">
        <div style="font-size:8px;letter-spacing:1px;color:#666;text-transform:uppercase">${o.firstname}</div>
        <div style="font-size:13px;font-weight:900;color:#111;line-height:1.1;font-family:Arial Black,Arial">${(o.surname_encoded||"").toUpperCase()}</div>
      </div>
      <!-- Étoile + bande poste -->
      <div style="position:relative;height:72px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:14px;width:100%;height:26px;background:${a}"></div>
        <svg width="50" height="48" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${a}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${l||0}</text>
        </svg>
      </div>
      <!-- Portrait -->
      <div style="flex:1;overflow:hidden;background:#b8d4f0">
        ${c?`<img src="${c}" style="width:100%;height:100%;object-fit:cover;object-position:center top" onerror="this.style.display='none'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;height:26px">
        <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:1px;color:#555;text-transform:uppercase">${p}</div>
        ${(t=o.clubs)!=null&&t.logo_url?`<img src="${o.clubs.logo_url}" style="width:20px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:700">${(((i=o.clubs)==null?void 0:i.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>`}if(e.card_type==="game_changer"){const o=e._gcDef,s={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},a={purple:"#9b59b6",light_blue:"#00bcd4"},r=s[o==null?void 0:o.color]||s.purple,l=a[o==null?void 0:o.color]||a.purple,c=(o==null?void 0:o.gc_type)==="ultra_game_changer",p=((n=he[e.gc_type])==null?void 0:n.icon)||"⚡";return`<div style="width:140px;height:200px;background:${r};border-radius:12px;border:3px solid ${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 20px ${l}66">
      <!-- Nom -->
      <div style="padding:6px 8px;background:rgba(255,255,255,0.12);text-align:center">
        <div style="font-size:${o!=null&&o.name&&o.name.length>12?9:11}px;font-weight:900;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${(o==null?void 0:o.name)||e.gc_type}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.6);margin-top:1px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image ou icône -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:6px">
        ${o!=null&&o.image_url?`<img src="/manager-wars/icons/${o.image_url}" style="max-height:80px;max-width:110px;object-fit:contain">`:`<div style="font-size:44px">${p}</div>`}
      </div>
      <!-- Effet -->
      <div style="padding:6px 8px;background:rgba(0,0,0,0.3);text-align:center">
        <div style="font-size:9px;color:rgba(255,255,255,0.85);line-height:1.3">${((o==null?void 0:o.effect)||((d=he[e.gc_type])==null?void 0:d.desc)||"").slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Wt(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(s=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${o[s.card_type]||s.card_type}</span>
            ${s.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${d[s.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${s.rarity}</span>`:""}
            ${s.note_min||s.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${s.note_min||""}–${s.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(s.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",s=>{s.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}Jt()}function Jt(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const Xt="simulation",ot="VOTRE_ZONE_ID";function Qt(){switch(Xt){case"propellerads":return Zt();case"adsense":return ei();default:return Ie()}}function Ie(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const n=setInterval(()=>{i--;const d=document.getElementById("ad-cd"),o=document.getElementById("ad-skip");d&&(d.textContent=i),o&&(o.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(n),o&&(o.disabled=!1,o.style.cssText=o.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),o==null||o.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Zt(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(Ie());window.propeller.push({zone_id:ot,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function ei(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(Ie());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:ot,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const Q={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Z={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function nt(e,t,i,n,d){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",d)}function R(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function be(e){var i,n;const t=e.player;return{cardId:e.id,id:t.id,firstname:t.firstname,name:t.surname_encoded,country_code:t.country_code,club_id:t.club_id,job:t.job,job2:t.job2,note_g:Number(t.note_g)||0,note_d:Number(t.note_d)||0,note_m:Number(t.note_m)||0,note_a:Number(t.note_a)||0,rarity:t.rarity,skin:t.skin,hair:t.hair,hair_length:t.hair_length,clubName:((i=t.clubs)==null?void 0:i.encoded_name)||null,clubLogo:((n=t.clubs)==null?void 0:n.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ae(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ti(){const e=Math.random()*100;return e<.1?4:e<5?3:e<20?2:1}function rt(e,t){const i=Q[t]||Q["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},d=[...e];for(const o of["GK","DEF","MIL","ATT"]){const s=[];for(let r=0;r<i[o];r++){let l=d.findIndex(c=>c.job===o);if(l===-1&&(l=d.findIndex(c=>c.job2===o)),l===-1&&(l=0),d[l]){const c={...d[l],_line:o};s.push(c),d.splice(l,1)}}const a=Ae(s.length);s.forEach((r,l)=>{r._col=a[l]}),n[o]=s}return n}async function ii(e,t){var s,a;const{data:i}=await $.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return oi(e);const n=Q[e]||Q["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},o=[...i];for(const r of["GK","DEF","MIL","ATT"]){const l=o.filter(m=>m.job===r),c=o.filter(m=>m.job!==r),p=[...l,...c],f=[];for(let m=0;m<n[r];m++){const x=p[m]||o[m];x&&f.push({cardId:"ai-"+x.id+"-"+m,id:x.id,firstname:x.firstname,name:x.surname_encoded,country_code:x.country_code,club_id:x.club_id,job:x.job,job2:x.job2,note_g:Number(x.note_g)||0,note_d:Number(x.note_d)||0,note_m:Number(x.note_m)||0,note_a:Number(x.note_a)||0,rarity:x.rarity,skin:x.skin,hair:x.hair,hair_length:x.hair_length,clubName:((s=x.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((a=x.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:r})}const u=Ae(f.length);f.forEach((m,x)=>{m._col=u[x]}),d[r]=f}return d}function oi(e){const t=Q[e]||Q["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const o of["GK","DEF","MIL","ATT"]){const s=[];for(let r=0;r<t[o];r++){const l=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:n[d%n.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?l:2,note_d:o==="DEF"?l:2,note_m:o==="MIL"?l:2,note_a:o==="ATT"?l:2,rarity:"normal",boost:0,used:!1,_line:o}),d++}const a=Ae(s.length);s.forEach((r,l)=>{r._col=a[l]}),i[o]=s}return i}async function ni(e,t){var b;const{state:i,navigate:n,toast:d}=t,o=i.params||{};e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const s=o.matchMode||"vs_ai_easy",a=s.replace("vs_ai_",""),r=s;if(!o.deckId)return ri(e,t,s);const l=o.deckId,[{data:c},{data:p}]=await Promise.all([$.from("decks").select("formation,name").eq("id",l).single(),$.from("deck_cards").select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`).eq("deck_id",l).order("slot_order")]),f=(p||[]).filter(w=>{var k;return w.is_starter&&((k=w.card)==null?void 0:k.player)}).map(w=>be(w.card)),u=(p||[]).filter(w=>{var k;return!w.is_starter&&((k=w.card)==null?void 0:k.player)}).map(w=>be(w.card));if(f.length<11){nt(e,"⚠️",`Deck incomplet (${f.length}/11).`,"Compléter",()=>n("decks"));return}const m=(p||[]).find(w=>{var k;return((k=w.card)==null?void 0:k.card_type)==="formation"}),x=(c==null?void 0:c.formation)||((b=m==null?void 0:m.card)==null?void 0:b.formation)||"4-4-2",{data:h}=await $.from("cards").select("id,gc_type").eq("owner_id",i.profile.id).eq("card_type","game_changer"),_=rt(f,x),y=await ii(x),{data:g}=await $.from("gc_definitions").select("*").eq("is_active",!0),{data:v}=await $.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:l,status:"in_progress"}).select().single(),E={gcDefs:g||[],matchId:v==null?void 0:v.id,mode:r,difficulty:a,formation:x,homeTeam:_,aiTeam:y,homeSubs:u,subsUsed:0,maxSubs:Math.min(u.length,3),homeScore:0,aiScore:0,gcCards:h||[],usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};ai(e,E,t)}async function ri(e,t,i){const{state:n,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await $.from("decks").select("id,name,is_active,formation").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){nt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const s=o.map(c=>c.id),{data:a}=await $.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order");let r=0;function l(){var y,g,v,E,b;const c=o[r],p=(a||[]).filter(w=>w.deck_id===c.id),f=p.filter(w=>{var k;return w.is_starter&&((k=w.card)==null?void 0:k.player)}).map(w=>be(w.card)),u=p.find(w=>{var k;return((k=w.card)==null?void 0:k.card_type)==="formation"}),m=c.formation||((y=u==null?void 0:u.card)==null?void 0:y.formation)||"4-4-2",x=f.length>=11?rt(f,m):null,h=f.length>=11;e.innerHTML=`
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
          <div style="font-size:19px;font-weight:900">${c.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${m} · ${f.length}/11 ${c.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${r===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${r===o.length-1?"0.1":"0.3"});color:${r===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${r===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : contraindre la largeur du SVG pour contrôler hauteur+largeur -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${x?`<div style="width:min(98vw, calc(100dvh - 400px));overflow:hidden;flex-shrink:0">${dt(x,m,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${o.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${o.map((w,k)=>`<div style="width:7px;height:7px;border-radius:50%;background:${k===r?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,(g=document.getElementById("prev-deck"))==null||g.addEventListener("click",()=>{r>0&&(r--,l())}),(v=document.getElementById("next-deck"))==null||v.addEventListener("click",()=>{r<o.length-1&&(r++,l())}),(E=document.getElementById("validate-deck"))==null||E.addEventListener("click",()=>{h&&t.navigate("match",{matchMode:i,deckId:c.id})}),(b=document.getElementById("cancel-deck-select"))==null||b.addEventListener("click",()=>d("home"));const _=document.getElementById("deck-swipe-zone");if(_){let w=0,k=0;_.addEventListener("touchstart",T=>{w=T.touches[0].clientX,k=T.touches[0].clientY},{passive:!0}),_.addEventListener("touchend",T=>{const A=T.changedTouches[0].clientX-w,z=T.changedTouches[0].clientY-k;Math.abs(A)<40||Math.abs(A)<Math.abs(z)||(A<0&&r<o.length-1?(r++,l()):A>0&&r>0&&(r--,l()))},{passive:!0})}}l()}function ai(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-height:100vh;gap:12px;padding:12px 16px;background:#0a3d1e">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Te(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>si(e,t,i),5e3)}function si(e,t,i){const n=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[];function o(p){return p.reduce((f,u)=>f+F(u,"MIL"),0)}function s(p){let f=0;for(let u=0;u<p.length-1;u++){const m=J(p[u],p[u+1]);m==="#00ff88"?f+=2:m==="#FFD700"&&(f+=1)}return f}const a=o(n)+s(n),r=o(d)+s(d),l=a>=r;function c(p,f,u){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${f}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((m,x)=>{const h=R(m),_=x<p.length-1?J(m,p[x+1]):null,y=_&&_!=="#ff3333"&&_!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${u};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${h?`<img src="${h}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${F(m,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${m.name}</div>
          </div>
          ${_?`<div style="width:14px;height:4px;border-radius:2px;background:${_};flex-shrink:0;opacity:${y?.9:.3}"></div>`:""}
          `}).join("")}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${o(p)} + ${s(p)} liens = <b style="color:#fff">${o(p)+s(p)}</b>
      </div>
    </div>`}e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-height:100vh;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${c(n,t.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${a}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${r}</div>
    </div>

    ${c(d,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const p=document.getElementById("score-home"),f=document.getElementById("score-ai"),u=document.getElementById("midfield-result");if(p&&f&&(l?(p.style.fontSize="80px",p.style.color="#FFD700",f.style.opacity="0.25"):(f.style.fontSize="80px",f.style.color="#ff6b6b",p.style.opacity="0.25")),u){const m=ti();u.style.opacity="1",l&&t.clubName,u.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${l?`${t.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${l?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${m}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,l&&(t.boostCard={value:m})}t.attacker=l?"home":"ai",t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(m=>({name:m.name,note:F(m,"MIL"),portrait:R(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),aiPlayers:d.map(m=>({name:m.name,note:F(m,"MIL"),portrait:R(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),homeTotal:a,aiTotal:r,text:`Duel milieu : ${t.clubName} ${a} – ${r} IA → ${l?t.clubName+" attaque":"IA attaque"}`}),setTimeout(()=>{var x,h;const m=(x=t.boostCard)==null?void 0:x.value;e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100dvh;gap:20px;padding:24px;background:#0a3d1e;text-align:center">
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
      </div>`,(h=document.getElementById("start-match-btn"))==null||h.addEventListener("click",()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",D(e,t,i),t.attacker==="ai"&&setTimeout(()=>we(e,t,i),800)})},100)},5e3)}function at(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Y(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const n=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:R(e),d=at(e),o=e._line||e.job||"MIL",s=Z[o]||"#555",a={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",r=e.note!==void 0?Number(e.note)||0:(Number(F(e,o))||0)+(e.boost||0),l=st(e==null?void 0:e.country_code),c=Math.round(i*.19),p=Math.round(i*.25),f=i-Math.round(i*.19)-Math.round(i*.25),u=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${a};background:${s};position:relative;overflow:hidden;flex-shrink:0;opacity:${u}">
    <div style="position:absolute;top:0;left:0;right:0;height:${c}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${n&&!(e!=null&&e.used)?`<img src="${n}" style="position:absolute;top:${c}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${ve(e==null?void 0:e.country_code)?`<img src="${ve(e.country_code)}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">${l}</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":r}</span>
      ${d?`<img src="${d}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function ae(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((o,s)=>{if(d+=Y(o,40,52),s<n.length-1){const a=J(o,n[s+1]);d+=`<div style="width:7px;height:3px;background:${a==="#ff3333"||a==="#cc2222"?"rgba(255,255,255,0.12)":a};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function ve(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function st(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Te(e,t,i,n,d=310,o=310){const s=ge[t]||{},a=He(t)||ke[t]||[],r={},l=["ATT","MIL","DEF","GK"];for(const y of l)(e[y]||[]).forEach((v,E)=>{r[`${y}${E+1}`]=v});function c(y){const g=s[y];return g?{x:g.x*d,y:g.y*o}:null}let p="";for(const[y,g]of a){const v=c(y),E=c(g);if(!v||!E)continue;const b=r[y],w=r[g],k=J(b,w);k==="#00ff88"||k==="#FFD700"?(p+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${k}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,p+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${k}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):p+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${k}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const f=48,u=64,m=13,x=16,h={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[y,g]of Object.entries(r)){const v=c(y);if(!v||!g)continue;const E=y.replace(/[0-9]/g,""),b=Z[E]||"#555",w=i==="attack"&&["MIL","ATT"].includes(E)&&!g.used||i==="defense"&&["GK","DEF","MIL"].includes(E)&&!g.used,k=n.includes(g.cardId);let T;i==="attack"?T=E==="MIL"?Number(g.note_m)||0:Number(g.note_a)||0:i==="defense"?T=E==="GK"?Number(g.note_g)||0:E==="MIL"?Number(g.note_m)||0:Number(g.note_d)||0:T=Number(E==="GK"?g.note_g:E==="DEF"?g.note_d:E==="MIL"?g.note_m:g.note_a)||0,T=T+(g.boost||0);const A=(v.x-f/2).toFixed(1),z=(v.y-u/2).toFixed(1),C=g.used?.25:1,N=h[g==null?void 0:g.rarity]||h.normal,O=k?"#ff3030":N,I=k?3:(g==null?void 0:g.rarity)==="légende"||(g==null?void 0:g.rarity)==="pépite"?2.5:2,L=u-m-x;p+=`<defs><clipPath id="cp-${y}"><rect x="${A}" y="${(v.y-u/2+m).toFixed(1)}" width="${f}" height="${L}"/></clipPath></defs>`,p+=`<rect x="${A}" y="${z}" width="${f}" height="${u}" rx="5" fill="${b}" opacity="${C}"/>`;const M=R(g);M&&!g.used&&(p+=`<image href="${M}" x="${A}" y="${(v.y-u/2+m).toFixed(1)}" width="${f}" height="${L}" clip-path="url(#cp-${y})" preserveAspectRatio="xMidYMin slice"/>`),p+=`<rect x="${A}" y="${z}" width="${f}" height="${m}" rx="4" fill="rgba(255,255,255,0.92)"/>`,p+=`<text x="${v.x.toFixed(1)}" y="${(v.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(g.name||"").slice(0,9)}</text>`;const B=(v.y+u/2-x).toFixed(1);if(p+=`<rect x="${A}" y="${B}" width="${f}" height="${x}" fill="rgba(255,255,255,0.92)"/>`,g.used)p+=`<text x="${v.x.toFixed(1)}" y="${(v.y+u/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const S=ve(g.country_code);S?p+=`<image href="${S}" x="${(v.x-20).toFixed(1)}" y="${(v.y+u/2-x+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:p+=`<text x="${(v.x-13).toFixed(1)}" y="${(v.y+u/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${st(g.country_code)}</text>`,p+=`<text x="${v.x.toFixed(1)}" y="${(v.y+u/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${T}</text>`;const G=at(g);G?p+=`<image href="${G}" x="${(v.x+f/2-14).toFixed(1)}" y="${(v.y+u/2-x+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:g.clubName&&(p+=`<text x="${(v.x+14).toFixed(1)}" y="${(v.y+u/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(g.clubName||"").slice(0,3).toUpperCase()}</text>`),g.boost&&(p+=`<rect x="${(v.x+f/2-12).toFixed(1)}" y="${(v.y-u/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,p+=`<text x="${(v.x+f/2-5).toFixed(1)}" y="${(v.y-u/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${g.boost}</text>`)}p+=`<rect x="${A}" y="${z}" width="${f}" height="${u}" rx="5" fill="${k?"rgba(255,255,255,0.12)":"none"}" stroke="${O}" stroke-width="${I}" opacity="${C}"/>`,w&&(p+=`<rect x="${A}" y="${z}" width="${f}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${k?"selected":""}" data-card-id="${g.cardId}" data-role="${E}" style="cursor:pointer"/>`)}const _=38;return`<svg viewBox="${-_} ${-_} ${d+_*2} ${o+_*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${p}
  </svg>`}function dt(e,t,i,n,d=300,o=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Te(e,t,i,n,d,o)}
  </div>`}function se(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}function di(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:wrap">
          ${(e.homePlayers||[]).map(i=>se(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:wrap">
          ${(e.aiPlayers||[]).map(i=>se(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${se(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${se(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function D(e,t,i){var m,x,h,_,y,g,v,E;const n=t.selected.map(b=>b.cardId),d=t.usedSubIds||[],o=t.homeSubs.filter(b=>!d.includes(b.cardId));Object.values(t.homeTeam).flat().filter(b=>b.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const a=t.phase==="ai-attack"||t.phase==="ai-defense",r=t.phase==="attack",l=t.phase==="defense",c=t.phase==="finished",p=t.gcCards.filter(b=>!t.usedGc.includes(b.id)),f=t.boostCard&&!t.boostUsed;if(e.innerHTML=`
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
        <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.clubName}</span>
        <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${t.homeScore} – ${t.aiScore}</span>
        <span style="font-size:12px;color:rgba(255,255,255,0.5)">IA (${t.difficulty.toUpperCase()})</span>
      </div>
      <button id="view-ai" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
    </div>

    <!-- ZONE ACTIONS -->
    <div id="last-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const w=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${ae((w.players||[]).map(k=>({...k,used:!1})),"#ff6b6b",w.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const w=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${ae((w.players||[]).map(k=>({...k,used:!1})),"#00ff88",w.total)}
          </div>`}const b=t.log[t.log.length-1];return b?'<div style="padding:2px 4px">'+di(b)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    <!-- ZONE CENTRALE : REMPLAÇANTS + TERRAIN -->
    <div style="display:flex;flex:1;min-height:0;overflow:hidden">

      <!-- Colonne remplaçants (mini cartes) -->
      <div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:50px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(b=>`
              <div class="sub-btn-col" data-sub-id="${b.cardId}" title="${b.firstname} ${b.name}" style="cursor:pointer;flex-shrink:0">
                ${Y(b,44,58)}
              </div>`).join("")}
      </div>

      <!-- Terrain -->
      <div style="overflow:hidden;min-width:0;flex:1;display:flex;align-items:stretch;justify-content:center" id="match-field">
        <div style="height:100%;aspect-ratio:1;max-width:calc(100vw - 56px);overflow:hidden;flex-shrink:0">
          ${dt(t.homeTeam,t.formation,t.phase,n,300,300)}
        </div>
      </div>
    </div>

    <!-- ZONE BAS : GC + BOUTON ACTION -->
    <div style="display:flex;align-items:flex-end;padding:6px 8px;background:rgba(0,0,0,0.35);gap:8px;flex-shrink:0;min-height:80px">

      <!-- Grille GC -->
      <div style="flex:1;display:grid;grid-template-columns:repeat(4,1fr);gap:3px;align-content:start">
        ${p.map(b=>{var w;return`
          <div class="gc-mini" data-gc-id="${b.id}" data-gc-type="${b.gc_type}"
            style="background:linear-gradient(135deg,#3d0a7a,#7a28b8);border:1px solid #9b59b6;border-radius:7px;padding:3px 2px;cursor:pointer;text-align:center">
            <div style="font-size:16px">${((w=ie[b.gc_type])==null?void 0:w.icon)||"⚡"}</div>
            <div style="font-size:6px;color:#fff;font-weight:600;line-height:1.2">${b.gc_type.slice(0,8)}</div>
          </div>`}).join("")}
        ${f?`
          <div id="boost-card" style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:7px;padding:3px 2px;cursor:pointer;text-align:center">
            <div style="font-size:16px">⚡</div>
            <div style="font-size:6px;color:#000;font-weight:900">+${t.boostCard.value}</div>
          </div>`:""}
      </div>

      <!-- Bouton action principal (rectangulaire + chrono) -->
      <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:3px">
        ${c?'<button id="btn-results" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">🏁 Résultats</button>':a?'<div style="min-width:130px;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:14px;display:flex;align-items:center;justify-content:center;gap:6px">⏳ Tour IA</div>':r?`<button id="btn-action" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?'disabled style="opacity:0.45;cursor:default"':""}>⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:l?`<button id="btn-action" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?'disabled style="opacity:0.45;cursor:default"':""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:'<div style="min-width:130px;padding:14px;border-radius:14px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>'}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(b=>{var w,k,T;if(b.type==="duel"){const A=b.isGoal,z=b.homeScored?"#FFD700":A?"#ff6b6b":"rgba(255,255,255,0.3)",C=b.homeScored?"⚽ BUT !":A?"⚽ BUT IA !":(w=b.homePlayers)!=null&&w.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${A?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${z};margin-bottom:4px">
                <div style="font-size:9px;color:${z};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${C}</div>
                ${(k=b.homePlayers)!=null&&k.length?`<div style="margin-bottom:3px">${ae(b.homePlayers,"rgba(255,255,255,0.7)",b.homeTotal)}</div>`:""}
                ${(T=b.aiPlayers)!=null&&T.length?`<div style="opacity:0.7">${ae(b.aiPlayers,"#ff6b6b",b.aiTotal)}</div>`:""}
              </div>`}return b.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${b.outPlayer?Y({...b.outPlayer,used:!0,_line:b.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${b.inPlayer?Y({...b.inPlayer,_line:b.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:b.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${b.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${b.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`,t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let b=!1,w=30;const k=()=>document.getElementById("match-timer"),T=()=>{const A=k();if(!A)return;const z=String(Math.floor(w/60)).padStart(2,"0"),C=String(w%60).padStart(2,"0");A.textContent=` ${z}:${C}`,A.style.color=b?"#ff2222":"#ff9500",A.style.fontWeight="900"};T(),t._timerInt=setInterval(()=>{if(w--,w<0)if(!b)b=!0,w=15,T();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",A.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(A),setTimeout(()=>{A.remove(),W(e,t,i)},2500)}else T()},1e3)}(m=document.getElementById("match-quit"))==null||m.addEventListener("click",()=>{confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,W(e,t,i))}),(x=document.getElementById("view-ai"))==null||x.addEventListener("click",()=>xi(t,i)),(h=document.getElementById("toggle-history"))==null||h.addEventListener("click",()=>{var b;(b=document.getElementById("match-history-panel"))==null||b.classList.add("open")}),(_=document.getElementById("close-history"))==null||_.addEventListener("click",()=>{var b;(b=document.getElementById("match-history-panel"))==null||b.classList.remove("open")}),(y=document.getElementById("btn-action"))==null||y.addEventListener("click",()=>{t.selected.length!==0&&(r?ci(e,t,i):l&&pi(e,t,i))}),(g=document.getElementById("btn-results"))==null||g.addEventListener("click",()=>W(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(b=>{b.addEventListener("click",()=>li(b,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(b=>{b.addEventListener("click",()=>gi(b.dataset.gcId,b.dataset.gcType,e,t,i))}),(v=document.getElementById("boost-card"))==null||v.addEventListener("click",()=>yi(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(b=>{b.addEventListener("click",()=>Oe(e,t,i,b.dataset.subId))}),(E=document.getElementById("sub-btn-main"))==null||E.addEventListener("click",()=>Oe(e,t,i))}function li(e,t,i,n){const d=e.dataset.cardId,o=e.dataset.role,s=t.selected.findIndex(a=>a.cardId===d);if(s!==-1)t.selected.splice(s,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const a=(t.homeTeam[o]||[]).find(r=>r.cardId===d);a&&t.selected.push({...a,_role:o,_line:o})}D(i,t,n)}function Le(e,t,i){e.matchId&&$.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function ci(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Le(t,i,i.state.profile.id);const n=t.selected.map(o=>({...o,_line:o._role})),d=Ve(n,t.modifiers.home);t.pendingAttack={...d,players:[...t.selected],side:"home"},t.selected.forEach(o=>{const s=(t.homeTeam[o._role]||[]).find(a=>a.cardId===o.cardId);s&&(s.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${d.total} (base ${d.base}${d.links?` +${d.links} liens`:""}) — ${t.selected.map(o=>o.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",D(e,t,i),setTimeout(()=>fi(e,t,i),1200)}function pi(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Le(t,i,i.state.profile.id);const n=t.selected.map(a=>({...a,_line:a._role})),d=Ye(n,t.modifiers.home);t.selected.forEach(a=>{const r=(t.homeTeam[a._role]||[]).find(l=>l.cardId===a.cardId);r&&(r.used=!0)});const o=We(t.pendingAttack.total,d.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(a=>({name:a.name,note:a._line==="MIL"?a.note_m:a.note_a,portrait:R(a),job:a.job,country_code:a.country_code,rarity:a.rarity,clubName:a.clubName,clubLogo:a.clubLogo})),homePlayers:t.selected.map(a=>{const r=(t.homeTeam[a._role]||[]).find(l=>l.cardId===a.cardId)||a;return{name:r.name,note:r._line==="GK"?r.note_g:r._line==="MIL"?r.note_m:r.note_d,portrait:R(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(o.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(o.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,D(e,t,i),Me(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ne(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ne(e,t,i,"home-attack")}function we(e,t,i){Le(t,i,null);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=Je(n,"attack",t.difficulty);if(!d.length){ct(e,t,i);return}const o=Ve(d,t.modifiers.ai);t.pendingAttack={...o,players:d,side:"ai"},d.forEach(l=>{l.used=!0}),t.log.push({text:`🤖 IA attaque : ${o.total} (${d.map(l=>l.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used),r=(t.homeSubs||[]).filter(l=>!(t.usedSubIds||[]).includes(l.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!r){t.aiScore++;const l={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(c=>({name:c.name,note:c._line==="MIL"?c.note_m:c.note_a,portrait:R(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),aiTotal:o.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(l),t.pendingAttack=null,D(e,t,i),Me(l.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ne(e,t,i,"home-attack")});return}t.phase="defense",D(e,t,i)}function fi(e,t,i){const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=Je(n,"defense",t.difficulty),o=d.length>0?Ye(d,t.modifiers.ai).total:0;d.forEach(r=>{r.used=!0});const s=We(t.pendingAttack.total,o,t.modifiers.ai),a={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:R(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiPlayers:d.map(r=>({name:r.name,note:r._line==="GK"?r.note_g:r._line==="MIL"?r.note_m:r.note_d,portrait:R(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:o,isGoal:!1,homeScored:!1,text:""};if(s.shielded)a.text="🛡️ Bouclier IA !",t.log.push(a);else if(s.goal){t.homeScore++,a.isGoal=!0,a.homeScored=!0,a.text=`⚽ BUT ! (${t.pendingAttack.total} > ${o})`,t.log.push(a),t.modifiers.ai={},t.pendingAttack=null,D(e,t,i),Me(a.homePlayers,t.homeScore,t.aiScore,!0,()=>{ne(e,t,i,"ai-attack")});return}else a.text=`🧤 IA défend (${o} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.modifiers.ai={},t.pendingAttack=null,ne(e,t,i,"ai-attack")}function ne(e,t,i,n){if(t.round++,lt(t)){W(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(o=>!o.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used).length){W(e,t,i);return}t.phase="ai-attack",D(e,t,i),setTimeout(()=>we(e,t,i),800);return}t.phase="attack",D(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(o=>!o.used).length){ct(e,t,i);return}t.phase="ai-attack",D(e,t,i),setTimeout(()=>we(e,t,i),800)}}function lt(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(d=>!d.used));return!t&&!i}function ct(e,t,i){lt(t)?W(e,t,i):(t.phase="attack",D(e,t,i))}function ui(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=R(e),o=R(t),s=Z[e.job]||"#555",a=Z[t.job]||"#555",r=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,l=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${s};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${d?`<img src="${d}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${r}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${a};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${o?`<img src="${o}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${l}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(n);let c=!1;const p=()=>{c||(c=!0,n.remove(),i())};n.addEventListener("click",p),setTimeout(p,2e3)}function te(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function Oe(e,t,i,n=null){if(t.phase!=="attack"){te("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){te(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.values(t.homeTeam).flat().filter(p=>p.used),o=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!d.length){te("Aucun joueur utilisé à remplacer");return}if(!o.length){te("Aucun remplaçant disponible");return}let s=0,a=Math.max(0,o.findIndex(p=>p.cardId===n)),r=!1;const l=document.createElement("div");l.id="sub-overlay",l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function c(){var _,y,g,v,E,b;const p=d[s],f=o[a],u=Math.min(130,Math.round((window.innerWidth-90)/2)),m=Math.round(u*1.35),x=w=>`background:rgba(255,255,255,0.12);border:none;color:${w?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${w?"default":"pointer"};flex-shrink:0`;l.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${x(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${f?Y({...f,used:!1,boost:0},u,m):"<div>—</div>"}</div>
        <button id="in-down" style="${x(a>=o.length-1)}" ${a>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${o.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${x(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?Y({...p,used:!1,boost:0},u,m):"<div>—</div>"}</div>
        <button id="out-down" style="${x(s>=d.length-1)}" ${s>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(_=l.querySelector("#sub-close"))==null||_.addEventListener("click",()=>l.remove()),(y=l.querySelector("#out-up"))==null||y.addEventListener("click",()=>{s>0&&(s--,c())}),(g=l.querySelector("#out-down"))==null||g.addEventListener("click",()=>{s<d.length-1&&(s++,c())}),(v=l.querySelector("#in-up"))==null||v.addEventListener("click",()=>{a>0&&(a--,c())}),(E=l.querySelector("#in-down"))==null||E.addEventListener("click",()=>{a<o.length-1&&(a++,c())});const h=(w,k,T,A)=>{const z=l.querySelector("#"+w);if(!z)return;let C=0;z.addEventListener("touchstart",N=>{C=N.touches[0].clientY},{passive:!0}),z.addEventListener("touchend",N=>{const O=N.changedTouches[0].clientY-C;if(Math.abs(O)<30)return;const I=k();O<0&&I<A-1?(T(I+1),c()):O>0&&I>0&&(T(I-1),c())},{passive:!0})};h("in-panel",()=>a,w=>a=w,o.length),h("out-panel",()=>s,w=>s=w,d.length),(b=l.querySelector("#sub-confirm"))==null||b.addEventListener("click",w=>{if(w.preventDefault(),w.stopPropagation(),r)return;r=!0;const k=d[s],T=o[a];if(!k||!T)return;let A=null,z=-1;for(const[N,O]of Object.entries(t.homeTeam)){const I=(O||[]).findIndex(L=>L.cardId===k.cardId);if(I!==-1){A=N,z=I;break}}if(z===-1||!A){te("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),l.remove();return}const C={...T,_line:A,_col:k._col||0,used:!1,boost:0};t.homeTeam[A].splice(z,1,C),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(T.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:k.name,firstname:k.firstname,note:F(k,A),portrait:R(k),job:k.job,country_code:k.country_code,rarity:k.rarity,clubName:k.clubName,clubLogo:k.clubLogo},inPlayer:{name:T.name,firstname:T.firstname,note:F(T,A),portrait:R(T),job:T.job,country_code:T.country_code,rarity:T.rarity,clubName:T.clubName,clubLogo:T.clubLogo},text:`🔄 ${T.firstname} ${T.name} remplace ${k.firstname} ${k.name}`}),l.remove(),ui(k,T,()=>D(e,t,i))})}document.body.appendChild(l),c()}function gi(e,t,i,n,d){var a,r;const o=ie[t]||{icon:"⚡",desc:"Carte spéciale."},s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;align-items:center;justify-content:center;padding:24px",s.innerHTML=`
    <div style="background:linear-gradient(160deg,#2a0a52,#7a28b8);border:2px solid #9b59b6;border-radius:18px;padding:24px;max-width:320px;text-align:center;color:#fff">
      <div style="font-size:52px;margin-bottom:10px">${o.icon}</div>
      <div style="font-size:19px;font-weight:900;margin-bottom:8px">${t}</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.85);line-height:1.5;margin-bottom:20px">${o.desc}</div>
      <div style="display:flex;gap:10px">
        <button id="gc-back" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="gc-use" style="flex:1;padding:12px;border-radius:10px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser</button>
      </div>
    </div>`,document.body.appendChild(s),(a=s.querySelector("#gc-back"))==null||a.addEventListener("click",()=>s.remove()),(r=s.querySelector("#gc-use"))==null||r.addEventListener("click",()=>{s.remove(),mi(e,t,i,n,d)})}function ye(e,t,i,n,d,o){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let a=[];function r(){var l,c;s.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${a.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(p=>{const f=p._line||p.job||"MIL",u={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",m=F(p,f)+(p.boost||0),x=a.find(h=>h.cardId===p.cardId);return`<div class="gc-pick-item" data-cid="${p.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${x?"#FFD700":"rgba(255,255,255,0.25)"};background:${u};overflow:hidden;cursor:pointer;flex-shrink:0;${p.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${p.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${m}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${a.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${a.length}/${t})
      </button>
    </div>`,(l=s.querySelector("#gc-picker-close"))==null||l.addEventListener("click",()=>s.remove()),s.querySelectorAll(".gc-pick-item").forEach(p=>{p.addEventListener("click",()=>{const f=p.dataset.cid,u=e.find(x=>x.cardId===f);if(!u)return;const m=a.findIndex(x=>x.cardId===f);m>-1?a.splice(m,1):a.length<t&&a.push(u),r()})}),(c=s.querySelector("#gc-picker-confirm"))==null||c.addEventListener("click",()=>{s.remove(),o(a)})}r(),document.body.appendChild(s)}const pt={BOOST_STAT({value:e=2,target:t="home",count:i=1,roles:n=null},d,o,s){const a=t==="home"?d.homeTeam:d.aiTeam,r=Object.entries(a).flatMap(([l,c])=>!n||n.includes(l)?(c||[]).filter(p=>!p.used).map(p=>({...p,_line:l})):[]);return r.length?(ye(r,i,e>0?`⚡ +${e} à ${i} joueur(s)`:`💀 -${Math.abs(e)} à ${i} joueur(s)`,o,d,l=>{l.forEach(c=>{for(const p of["GK","DEF","MIL","ATT"]){const f=(d.homeTeam[p]||[]).find(u=>u.cardId===c.cardId)||(d.aiTeam[p]||[]).find(u=>u.cardId===c.cardId);if(f){f.boost=(f.boost||0)+e;break}}}),d.log.push({text:`${e>0?"⚡":"💀"} ${Math.abs(e)>0?"+":""}${e} → ${l.map(c=>c.name).join(", ")}`,type:"info"}),D(o,d,s)}),!0):(s.toast("Aucun joueur disponible","error"),!0)},DEBUFF_STAT(e,t,i,n){return pt.BOOST_STAT({...e,value:-Math.abs(e.value||2)},t,i,n)},GRAY_PLAYER({target:e="opponent",count:t=1,roles:i=null},n,d,o){const s=e==="opponent"?n.aiTeam:n.homeTeam,a=Object.entries(s).flatMap(([r,l])=>!i||i.includes(r)?(l||[]).filter(c=>!c.used).map(c=>({...c,_line:r})):[]);return a.length?(ye(a,t,`❄️ Griser ${t} joueur(s)`,d,n,r=>{r.forEach(l=>{for(const c of Object.keys(n.aiTeam).concat(Object.keys(n.homeTeam))){const f=((e==="opponent"?n.aiTeam[c]:n.homeTeam[c])||[]).find(u=>u.cardId===l.cardId);if(f){f.used=!0;break}}}),n.log.push({text:`❄️ ${r.map(l=>l.name).join(", ")} grisé(s) !`,type:"info"}),D(d,n,o)}),!0):(o.toast("Aucun joueur à griser","error"),!0)},REVIVE_PLAYER({count:e=1},t,i,n){const d=Object.entries(t.homeTeam).flatMap(([o,s])=>(s||[]).filter(a=>a.used).map(a=>({...a,_line:o})));return d.length?(ye(d,e,"💫 Ressusciter",i,t,o=>{o.forEach(s=>{for(const a of["GK","DEF","MIL","ATT"]){const r=(t.homeTeam[a]||[]).find(l=>l.cardId===s.cardId);if(r){r.used=!1;break}}}),t.log.push({text:`💫 ${o.map(s=>s.name).join(", ")} ressuscité(s) !`,type:"info"}),D(i,t,n)}),!0):(n.toast("Aucun joueur à ressusciter","error"),!0)},REMOVE_GOAL(e,t,i,n){return t.aiScore<=0?(n.toast("Aucun but adverse","error"),!1):(t.aiScore--,t.log.push({text:"🚫 But adverse retiré !",type:"info"}),!1)},ADD_GOAL_DRAW(e,t,i,n){return t.modifiers=t.modifiers||{},t.modifiers.home=t.modifiers.home||{},t.modifiers.home.addGoalOnDraw=!0,t.log.push({text:"⚽ +1 but si duel nul activé !",type:"info"}),!1},ADD_SUB({count:e=1},t,i,n){return t.maxSubs+=e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1}};function mi(e,t,i,n,d){if(n.usedGc.includes(e))return;n.usedGc.push(e);const o=(n.gcDefs||[]).find(a=>a.name===t);let s=!1;if(o!=null&&o.effect_type&&o.effect_type!=="CUSTOM"){const a=pt[o.effect_type];a?a(o.effect_params||{},n,i,d)||(s=!0):(d.toast(`Effet "${o.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const a=Object.entries(n.homeTeam).flatMap(([r,l])=>(l||[]).filter(c=>c.used).map(c=>({...c,_line:r})));a.length?(a[0].used=!1,n.log.push({text:`💫 ${a[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const a=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(r=>!r.used);if(a.length){const r=a.sort((l,c)=>F(c,"ATT")-F(l,"ATT"))[0];r.used=!0,n.log.push({text:`❄️ ${r.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}$.from("cards").delete().eq("id",e).then(()=>{}),s&&D(i,n,d)}function yi(e,t,i){const n=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Z[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${F(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const o=d.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const a=(t.homeTeam[s]||[]).find(r=>r.cardId===o);if(a){a.boost=(a.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${a.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),D(e,t,i)})})}function Me(e,t,i,n,d){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(l,c)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${c%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][c%8]}
    </div>`).join("");o.innerHTML=`
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${s}</div>
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
    ${e.map(l=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${Z[l.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${l.portrait?`<img src="${l.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(l.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(o);let a=!1;const r=()=>{a||(a=!0,o.remove(),setTimeout(()=>d(),50))};o.addEventListener("click",r),setTimeout(r,3500)}async function W(e,t,i){var c,p;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,d=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,s=d?"victoire":o?"nul":"defaite",a=xt(t.mode,s);t.matchId&&await $.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?n.profile.id:null,home_credits_reward:a,played_at:new Date().toISOString()}).eq("id",t.matchId);const r={credits:(n.profile.credits||0)+a,matches_played:(n.profile.matches_played||0)+1};d?r.wins=(n.profile.wins||0)+1:o?r.draws=(n.profile.draws||0)+1:r.losses=(n.profile.losses||0)+1,await $.from("users").update(r).eq("id",n.profile.id),await i.refreshProfile();const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",l.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${d?"🏆":o?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${d?"Victoire !":o?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${a.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(l),(c=document.getElementById("res-home"))==null||c.addEventListener("click",()=>{l.remove(),i.navigate("home")}),(p=document.getElementById("res-replay"))==null||p.addEventListener("click",()=>{l.remove(),i.navigate("match",{matchMode:t.mode})})}function xi(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Te(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const hi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function bi(e,t){const{state:i,toast:n}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await ze(e,t)}async function ze(e,t){const{state:i,toast:n}=t,{data:d}=await $.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),o=(d||[]).filter(r=>r.seller_id===i.profile.id),s=(d||[]).filter(r=>r.seller_id!==i.profile.id);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${s.length} carte(s) en vente · Solde : ${(i.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${o.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function a(r){const l=document.getElementById("mkt-content"),c=r==="buy"?s:o;if(c.length===0){l.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${r==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune carte en vente."}
      </div>`;return}l.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${c.map(p=>{var h,_,y;const f=(h=p.card)==null?void 0:h.player;if(!f)return"";const u=f.job==="GK"?f.note_g:f.job==="DEF"?f.note_d:f.job==="MIL"?f.note_m:f.note_a,m=hi[f.rarity],x=(i.profile.credits||0)>=p.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px">
          <div style="width:44px;height:44px;border-radius:8px;background:${$i(f.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${m};flex-shrink:0">${u}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${f.firstname} ${f.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${f.country_code} · ${((_=f.clubs)==null?void 0:_.encoded_name)||"—"} · ${f.rarity} · ${f.job}</div>
            <div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((y=p.seller)==null?void 0:y.pseudo)||"—"}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${p.price.toLocaleString("fr")}</div>
            ${r==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${p.id}" ${x?"":"disabled"} style="margin-top:4px">${x?"Acheter":"Trop cher"}</button>`:`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,l.querySelectorAll("[data-buy]").forEach(p=>{p.addEventListener("click",()=>vi(p.dataset.buy,c,e,t))}),l.querySelectorAll("[data-cancel]").forEach(p=>{p.addEventListener("click",()=>wi(p.dataset.cancel,e,t))})}a("buy"),e.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(l=>{const c=l===r;l.style.background=c?"var(--green)":"#fff",l.style.color=c?"#fff":"var(--gray-600)",l.style.borderColor=c?"var(--green)":"var(--gray-200)"}),a(r.dataset.tab)})})}async function vi(e,t,i,n){const{state:d,toast:o,refreshProfile:s}=n,a=t.find(r=>r.id===e);if(a){if((d.profile.credits||0)<a.price){o("Crédits insuffisants","error");return}if(confirm(`Acheter ${a.card.player.firstname} ${a.card.player.surname_encoded} pour ${a.price.toLocaleString("fr")} crédits ?`))try{const{error:r}=await $.from("cards").update({owner_id:d.profile.id,is_for_sale:!1,sale_price:null}).eq("id",a.card.id);if(r)throw r;await $.from("market_listings").update({status:"sold",buyer_id:d.profile.id,sold_at:new Date().toISOString()}).eq("id",e),await $.from("users").update({credits:(d.profile.credits||0)-a.price}).eq("id",d.profile.id);const{data:l}=await $.from("users").select("credits").eq("id",a.seller_id).single();l&&await $.from("users").update({credits:(l.credits||0)+a.price}).eq("id",a.seller_id),await $.from("notifications").insert({user_id:a.seller_id,type:"card_sold",message:`Ta carte ${a.card.player.surname_encoded} a été vendue pour ${a.price} crédits !`,data:{card_id:a.card.id,price:a.price}}),await s(),o("Carte achetée ! ✅","success"),ze(i,n)}catch(r){o("Erreur : "+r.message,"error")}}}async function wi(e,t,i){const{toast:n}=i,{data:d}=await $.from("market_listings").select("card_id").eq("id",e).single();await $.from("market_listings").update({status:"cancelled"}).eq("id",e),d&&await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id),n("Annonce retirée","success"),ze(t,i)}function $i(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function _i(e,{state:t,navigate:i,toast:n}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await $.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${d&&d.length>0?d.map((o,s)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${o.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${s+1}</div>
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
  `}async function ki(e,{state:t,navigate:i,toast:n}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await $.from("matches").select("id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at").or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},a=(o||[]).filter(c=>c.status==="finished"),r=(o||[]).filter(c=>c.status==="in_progress");function l(c){const p=c.home_id===d.id;p?c.home_score:c.away_score,p?c.away_score:c.home_score;const f=c.winner_id===d.id,u=c.home_score===c.away_score&&c.status==="finished",m=c.status!=="finished"?"…":u?"N":f?"V":"D",x=c.status!=="finished"||u?"#888":f?"#1A6B3C":"#c0392b";let h=s[c.mode]||c.mode;c.away_id===null&&!h.startsWith("IA")&&(h="IA");let _="";c.status==="in_progress"&&Date.now()-new Date(c.created_at).getTime()>3600*1e3&&(_=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const y=new Date(c.created_at),g=y.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+y.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),v=c.status==="finished"?`${c.home_score} - ${c.away_score}`:`${c.home_score||0} - ${c.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${_}</div>
        <div style="font-size:11px;color:var(--gray-600)">${g}${c.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${v}</span>
        <span style="background:${x};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${m}</span>
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

      ${a.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${a.map(l).join("")}
        </div>`:""}

      ${(o||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const j={user:null,profile:null,page:"home",params:{}};function de(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function Ei(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function $e(){document.getElementById("modal-overlay").classList.add("hidden")}async function le(){if(!j.user)return;const{data:e}=await $.from("users").select("*").eq("id",j.user.id).single();e&&(j.profile=e)}const Ce="mw_theme";function ue(){return localStorage.getItem(Ce)||"light"}function Ii(e){var t;localStorage.setItem(Ce,e),_e(e),(t=j.profile)!=null&&t.id&&$.from("users").update({theme:e}).eq("id",j.profile.id).then(()=>{})}function _e(e){document.documentElement.setAttribute("data-theme",e)}function ce(e,t={}){j.page=e,j.params=t,ft()}async function ft(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(n=>{n.classList.toggle("active",n.dataset.page===j.page)});const t=document.getElementById("nav-credits");t&&j.profile&&(t.textContent=`💰 ${(j.profile.credits||0).toLocaleString("fr")}`);const i={state:j,navigate:ce,toast:de,openModal:Ei,closeModal:$e,refreshProfile:le};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',j.page){case"home":await Se(e,i);break;case"collection":await wt(e,i);break;case"decks":await xe(e,i);break;case"boosters":await Rt(e,i);break;case"match":await ni(e,i);break;case"market":await bi(e,i);break;case"rankings":await _i(e,i);break;case"matches":await ki(e,i);break;default:await Se(e,i)}}function Ai(){const e=document.getElementById("app"),t=j.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",d=>{d.preventDefault(),ce(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>ce("home")),document.getElementById("nav-credits").addEventListener("click",()=>ce("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const d=ue()==="dark"?"light":"dark";Ii(d),qe(d)}),qe(ue())}function qe(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Ti(){_e(ue()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&$e()}),document.getElementById("modal-close").addEventListener("click",$e);const{data:{session:e}}=await $.auth.getSession();if(!e){Ke(),je(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:de});return}j.user=e.user,await le(),Ke();try{const{data:t}=await $.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(n=>{i[n.formation]=n.links}),ut(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!j.profile){gt(document.getElementById("app"),{state:j,navigate:async()=>{await le(),Pe()},toast:de,refreshProfile:le});return}j.profile.theme&&j.profile.theme!==ue()&&(localStorage.setItem(Ce,j.profile.theme),_e(j.profile.theme)),Pe(),$.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(j.user=null,j.profile=null,document.getElementById("app").innerHTML="",je(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:de}))})}function Pe(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Ai(),ft()}function Ke(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}Ti();
