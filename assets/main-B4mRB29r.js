import{s as k,l as Y,F as ee,b as ve,c as ue,d as et}from"./formation-links-BD9zicgB.js";function _e(t,{navigate:e,toast:i}){t.innerHTML=`
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
  `,t.querySelectorAll(".auth-tab").forEach(o=>{o.addEventListener("click",()=>{t.querySelectorAll(".auth-tab").forEach(a=>a.classList.remove("active")),o.classList.add("active"),document.getElementById("tab-login").style.display=o.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=o.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const o=document.getElementById("login-email").value.trim(),a=document.getElementById("login-password").value,n=document.getElementById("login-error");if(n.textContent="",!o||!a){n.textContent="Remplissez tous les champs.";return}const s=document.getElementById("login-btn");s.textContent="Connexion…",s.disabled=!0;const{error:l}=await k.auth.signInWithPassword({email:o,password:a});if(s.textContent="Se connecter",s.disabled=!1,l){n.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",o=>{o.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const o=document.getElementById("reg-email").value.trim(),a=document.getElementById("reg-password").value,n=document.getElementById("reg-confirm").value,s=document.getElementById("reg-error");if(s.textContent="",!o||!a||!n){s.textContent="Remplissez tous les champs.";return}if(a.length<6){s.textContent="Mot de passe trop court (min. 6 caractères).";return}if(a!==n){s.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:r}=await k.auth.signUp({email:o,password:a});if(l.textContent="Créer mon compte",l.disabled=!1,r){s.textContent=r.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=o})}function tt(t,{state:e,navigate:i,toast:o,refreshProfile:a}){let n="#1A6B3C",s="#D4A017";t.innerHTML=`
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
  `;function l(){var g;const d=document.getElementById("logo-preview"),c=document.getElementById("logo-initials"),f=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",p=f.trim().split(" ").filter(Boolean),u=p.length>=2?(p[0][0]+p[1][0]).toUpperCase():f.slice(0,2).toUpperCase();d&&(d.style.background=s,d.style.borderColor=n),c&&(c.textContent=u,c.style.color=n)}document.getElementById("color1").addEventListener("input",d=>{n=d.target.value,document.getElementById("swatch1").style.background=n,l()}),document.getElementById("color2").addEventListener("input",d=>{s=d.target.value,document.getElementById("swatch2").style.background=s,l()});function r(d){document.querySelectorAll(".setup-step").forEach(c=>c.classList.remove("active")),document.getElementById(`step-${d}`).classList.add("active"),document.getElementById("step-num").textContent=d,document.getElementById("progress-fill").style.width=`${Math.round(d/3*100)}%`,d===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const d=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("step1-error");if(c.textContent="",d.length<3){c.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await k.from("users").select("id").eq("pseudo",d).maybeSingle();if(f){c.textContent="Ce pseudo est déjà pris.";return}r(2)}),document.getElementById("step2-back").addEventListener("click",()=>r(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const d=document.getElementById("setup-club").value.trim(),c=document.getElementById("step2-error");if(c.textContent="",d.length<2){c.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await k.from("users").select("id").eq("club_name",d).maybeSingle();if(f){c.textContent="Ce nom de club est déjà pris.";return}r(3)}),document.getElementById("step3-back").addEventListener("click",()=>r(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const d=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),p=document.getElementById("step3-finish");f.textContent="",p.disabled=!0,p.textContent="Création en cours…";try{const{error:u}=await k.from("users").insert({id:e.user.id,pseudo:d,club_name:c,club_color1:n,club_color2:s,credits:1e4});if(u)throw u;await it(e.user.id),await a(),o(`Bienvenue ${d} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(u){f.textContent=u.message,p.disabled=!1,p.textContent="🚀 Créer mon profil !"}})}async function it(t){const{data:e}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!e||e.length===0)return;const i=e,o=i.filter(r=>r.job==="GK"),a=i.filter(r=>r.job!=="GK"),n=[];for(let r=0;r<5;r++){let d=[];if(r===0&&o.length>0){const c=o[Math.floor(Math.random()*o.length)];d.push(c);const f=Ee([...a]).slice(0,3);d.push(...f)}else d=Ee([...i]).slice(0,4);d.forEach(c=>{n.push({owner_id:t,player_id:c.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(r=>{n.push({owner_id:t,card_type:"game_changer",gc_type:r})});const l=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];n.push({owner_id:t,card_type:"formation",formation:l[Math.floor(Math.random()*l.length)]}),n.length>0&&await k.from("cards").insert(n),await k.from("users").update({first_booster_opened:!0}).eq("id",t)}function Ee(t){for(let e=t.length-1;e>0;e--){const i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}async function Ie(t,{state:e,navigate:i,toast:o}){var s;const a=e.profile;if(!a)return;const{data:n}=await k.from("matches").select("id,home_score,away_score,status,mode,winner_id,created_at").or(`home_id.eq.${a.id},away_id.eq.${a.id}`).eq("status","finished").order("created_at",{ascending:!1}).limit(3);t.innerHTML=`
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
          ${n.map(l=>{const r=l.winner_id===a.id,d=l.home_score===l.away_score,c=d?"N":r?"V":"D",f=d?"#888":r?"#1A6B3C":"#c0392b",p={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat"}[l.mode]||l.mode,g=new Date(l.created_at).toLocaleDateString("fr",{month:"short",day:"numeric"});return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
              <div>
                <div style="font-size:13px;font-weight:600">${p}</div>
                <div style="font-size:11px;color:var(--gray-600)">${g}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <span style="font-size:14px;font-weight:700">${l.home_score} - ${l.away_score}</span>
                <span style="background:${f};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${c}</span>
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
  `,t.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",r=>{r.preventDefault(),i(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>i("rankings")),t.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{if(l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200),l.dataset.action==="match-ai"){ot(i);return}o("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await k.auth.signOut(),window.location.reload()})}function ot(t){const e=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",o),i.addEventListener("click",a=>{a.target===i&&o()}),i.querySelectorAll("[data-mode]").forEach(a=>{a.addEventListener("click",()=>{o(),t("match",{matchMode:a.dataset.mode})})})}const de={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function D(t,e){if(!t)return 0;switch(e){case"GK":return Number(t.note_g)||0;case"DEF":return Number(t.note_d)||0;case"MIL":return Number(t.note_m)||0;case"ATT":return Number(t.note_a)||0;default:return 0}}function De(t){let e=0;for(let i=0;i<t.length-1;i++){const o=t[i],a=t[i+1];if(!o||!a)continue;const n=Y(o,a);n==="#00ff88"?e+=2:n==="#FFD700"&&(e+=1)}return e}function Ge(t,e={}){const i=t.reduce((n,s)=>{const l=s._line||s.job;return n+(Number(l==="MIL"?s.note_m:s.note_a)||0)},0),o=De(t);let a=i+o;return e.doubleAttack&&(a*=2),e.stolenNote&&(a-=e.stolenNote),{base:i,links:o,total:Math.max(0,a)}}function Re(t,e={}){const i=t.reduce((n,s)=>{const l=s._line||s.job;let r=0;return l==="GK"?r=Number(s.note_g)||0:l==="MIL"?r=Number(s.note_m)||0:r=Number(s.note_d)||0,n+r},0),o=De(t);let a=i+o;return e.stolenNote&&(a-=e.stolenNote),{base:i,links:o,total:Math.max(0,a)}}function Ne(t,e,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:t>e,shielded:!1}}function qe(t,e,i="easy"){const o=t.filter(s=>!s.used);if(!o.length)return[];const a=[...o].sort((s,l)=>{const r=e==="attack"?D(s,"ATT"):s._line==="GK"?D(s,"GK"):D(s,"DEF");return(e==="attack"?D(l,"ATT"):l._line==="GK"?D(l,"GK"):D(l,"DEF"))-r});let n=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return a.slice(0,Math.min(n,a.length,3))}function nt(t,e){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[t]||i.vs_ai_easy)[e]||0}const Oe={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},le={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},oe=["GK","DEF","MIL","ATT"],rt=["Tous","GK","DEF","MIL","ATT"],at={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},be={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ke(t){const e="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(t!=null&&t.skin)||!(t!=null&&t.hair))return null;const i=t.hair==="chauve"?`${t.skin}-chauve-rase`:`${t.skin}-${t.hair}-${t.hair_length}`;return`${e}/storage/v1/object/public/assets/tetes/${i}.png`}function te(t,e){return t&&Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Ae(t,e=""){var f,p;const i=t.player;if(!i)return"";const o=i.job||"ATT",a=le[o],n=Oe[i.rarity]||"#ccc",s=te(i,o),l=i.job2?te(i,i.job2):null,r=i.job2?le[i.job2]:null,d=Ke(i),c=be[i.country_code]||i.country_code||"";return`
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
        ${l!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${r}" stroke="white" stroke-width="1.5"/>
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
        <img src="https://flagsapi.com/${i.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${c}</div>
        ${(f=i.clubs)!=null&&f.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((p=i.clubs)==null?void 0:p.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function st(t){const e=t.job||"ATT",i=te(t,e),o=be[t.country_code]||t.country_code||"";return`
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
  </div>`}async function dt(t,e){const{state:i,navigate:o,toast:a,openModal:n,closeModal:s}=e;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await k.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:r}=await k.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),d=(l||[]).filter(_=>_.card_type==="player"&&_.player),c=(l||[]).filter(_=>_.card_type==="game_changer"),f=(l||[]).filter(_=>_.card_type==="formation"),p=Object.keys(ee),u=Object.keys(de),g={};d.forEach(_=>{const I=_.player.id;g[I]=(g[I]||0)+1});const x=new Set(Object.keys(g).map(_=>String(_))),y=new Set(f.map(_=>_.formation)),b=new Set(c.map(_=>_.gc_type));let h="player",w="Tous",v="",$=!1;function m(){return[...d].sort((_,I)=>{const T=oe.indexOf(_.player.job),B=oe.indexOf(I.player.job);return T!==B?T-B:(_.player.surname_encoded||"").localeCompare(I.player.surname_encoded||"")})}function E(){return[...r||[]].sort((_,I)=>{const T=oe.indexOf(_.job),B=oe.indexOf(I.job);return T!==B?T-B:(_.surname_encoded||"").localeCompare(I.surname_encoded||"")})}function A(){return m().filter(_=>{const I=_.player,T=w==="Tous"||I.job===w,B=!v||`${I.firstname} ${I.surname_encoded}`.toLowerCase().includes(v);return T&&B})}function L(){return E().filter(_=>{const I=w==="Tous"||_.job===w,T=!v||`${_.firstname} ${_.surname_encoded}`.toLowerCase().includes(v);return I&&T})}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Ma collection</h2>
      <p>${d.length} carte(s) joueur · ${c.length} Game Changer · ${f.length} Formation</p>
    </div>

    <!-- Onglets -->
    <div style="display:flex;border-bottom:1px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${h==="player"?"var(--green)":"transparent"};
        color:${h==="player"?"var(--green)":"var(--gray-600)"}">Joueurs</button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${h==="formation"?"var(--green)":"transparent"};
        color:${h==="formation"?"var(--green)":"var(--gray-600)"}">Formations</button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${h==="gc"?"var(--green)":"transparent"};
        color:${h==="gc"?"var(--green)":"var(--gray-600)"}">Game Changer</button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grille cartes -->
    <div class="page-body">
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-start" id="col-grid"></div>
    </div>
  </div>`;function z(){const _=document.getElementById("col-filters");_&&(h==="player"?(_.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${v}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${rt.map(I=>`
            <button class="filter-btn" data-job="${I}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${I===w?"var(--green)":"var(--gray-200)"};
                background:${I===w?"var(--green)":"#fff"};
                color:${I===w?"#fff":"var(--gray-600)"}">
              ${I}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${$?"var(--yellow)":"var(--gray-200)"};
              background:${$?"var(--yellow)":"#fff"};
              color:${$?"#fff":"var(--gray-600)"}">
            ${$?"✓ Tout afficher":"Voir tout"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",I=>{v=I.target.value.toLowerCase(),M()}),t.querySelectorAll(".filter-btn").forEach(I=>{I.addEventListener("click",()=>{w=I.dataset.job,z(),M()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{$=!$,z(),M()})):(_.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${$?"var(--yellow)":"var(--gray-200)"};
              background:${$?"var(--yellow)":"#fff"};
              color:${$?"#fff":"var(--gray-600)"}">
            ${$?"✓ Tout afficher":"Voir tout"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{$=!$,z(),M()})))}function M(){const _=document.getElementById("col-grid");_&&(h==="player"?C(_):h==="formation"?O(_):X(_))}function C(_){if($){const I=L();if(!I.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}_.innerHTML=I.map(T=>{if(x.has(String(T.id))){const F=d.find(H=>H.player.id===T.id),R=g[T.id]||1,q=R>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${R}</div>`:"",P=d.filter(H=>H.player.id===T.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Ae(F,q+P)}return st(T)}).join("")}else{const I=A();if(!I.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const T={},B=[];I.forEach(F=>{const R=F.player.id;T[R]||(T[R]=!0,B.push(F))}),_.innerHTML=B.map(F=>{const R=g[F.player.id]||1,q=R>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${R}</div>`:"",P=d.filter(H=>H.player.id===F.player.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Ae(F,q+P)}).join("")}_.querySelectorAll("[data-card-id]").forEach(I=>{I.addEventListener("click",()=>{const T=d.find(B=>B.id===I.dataset.cardId);T&&pt(T,d,g,e)})})}function O(_){const I=$?p:[...y];if(!I.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}_.innerHTML=I.map(T=>{if(y.has(T)){const F=f.find(K=>K.formation===T),R=f.filter(K=>K.formation===T).length,q=R>1?`<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${R}</div>`:"";return`
          <div data-form-id="${F.id}" style="
            position:relative;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border:2px solid #2a8f52;
            border-radius:12px;padding:12px;color:#fff;min-width:100px;width:140px;flex-shrink:0;cursor:pointer;
            display:flex;flex-direction:column;gap:4px;align-items:flex-start">
            ${q}
            <div style="font-size:28px">🏟️</div>
            <div style="font-size:8px;background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:10px;width:fit-content;letter-spacing:.4px">FORMATION</div>
            <div style="font-weight:900;font-size:18px">${T}</div>
          </div>`}return`
        <div style="
          background:#ccc;border:2px solid #bbb;border-radius:12px;padding:12px;color:#888;
          min-width:100px;width:140px;flex-shrink:0;display:flex;flex-direction:column;gap:4px;align-items:flex-start;
          filter:grayscale(1);opacity:0.45">
          <div style="font-size:28px">🏟️</div>
          <div style="font-size:8px;background:rgba(0,0,0,0.1);padding:2px 6px;border-radius:10px;width:fit-content;letter-spacing:.4px">FORMATION</div>
          <div style="font-weight:900;font-size:18px">${T}</div>
        </div>`}).join(""),_.querySelectorAll("[data-form-id]").forEach(T=>{T.addEventListener("click",()=>{const B=f.find(F=>F.id===T.dataset.formId);B&&ct(B,f,e,n)})})}function X(_){const I=$?u:[...b];if(!I.length){_.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}_.innerHTML=I.map(T=>{const B=b.has(T),F=de[T]||{icon:"⚡"};if(B){const R=c.find(P=>P.gc_type===T),q=c.filter(P=>P.gc_type===T).length,K=q>1?`<div style="position:absolute;top:4px;right:4px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${q}</div>`:"";return`
          <div data-gc-id="${R.id}" data-gc-type="${T}" style="
            position:relative;background:linear-gradient(135deg,#3d0a7a,#7a28b8);border:2px solid #9b59b6;
            border-radius:12px;padding:12px;color:#fff;min-width:120px;width:140px;flex-shrink:0;cursor:pointer;
            display:flex;flex-direction:column;gap:4px">
            ${K}
            <div style="font-size:28px">${F.icon}</div>
            <div style="font-size:8px;background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:10px;width:fit-content;letter-spacing:.4px">GAME CHANGER</div>
            <div style="font-weight:700;font-size:13px">${T}</div>
          </div>`}return`
        <div style="
          background:#ccc;border:2px solid #bbb;border-radius:12px;padding:12px;color:#888;
          min-width:120px;width:140px;flex-shrink:0;display:flex;flex-direction:column;gap:4px;
          filter:grayscale(1);opacity:0.45">
          <div style="font-size:28px">${F.icon}</div>
          <div style="font-size:8px;background:rgba(0,0,0,0.1);padding:2px 6px;border-radius:10px;width:fit-content;letter-spacing:.4px">GAME CHANGER</div>
          <div style="font-weight:700;font-size:13px">${T}</div>
        </div>`}).join(""),_.querySelectorAll("[data-gc-id]").forEach(T=>{T.addEventListener("click",()=>lt(T.dataset.gcType,n))})}t.querySelectorAll(".col-tab-btn").forEach(_=>{_.addEventListener("click",()=>{h=_.dataset.tab,w="Tous",v="",$=!1,t.querySelectorAll(".col-tab-btn").forEach(I=>{const T=I.dataset.tab===h;I.style.borderBottomColor=T?"var(--green)":"transparent",I.style.color=T?"var(--green)":"var(--gray-600)"}),z(),M()})}),z(),M()}function lt(t,e){const i=de[t]||{icon:"⚡",desc:"Effet spécial."};e("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Q=1e3;function ct(t,e,i,o){var x,y,b;const{state:a,toast:n,closeModal:s,navigate:l,refreshProfile:r}=i,d=t.formation,c={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const h=ve[d]||{},w=ee[d]||[],v=290,$=360,m=20;function E(L){const z=h[L];return z?{x:z.x*v,y:z.y*$}:null}let A=`<svg width="${v}" height="${$}" viewBox="0 0 ${v} ${$}" xmlns="http://www.w3.org/2000/svg">`;for(const[L,z]of w){const M=E(L),C=E(z);!M||!C||(A+=`<line x1="${M.x}" y1="${M.y}" x2="${C.x}" y2="${C.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const L of Object.keys(h)){const z=E(L);if(!z)continue;const M=L.replace(/\d+/,""),C=c[M]||"#555";A+=`<circle cx="${z.x}" cy="${z.y}" r="${m}" fill="${C}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,A+=`<text x="${z.x}" y="${z.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${M}</text>`}return A+="</svg>",A}const p=e.filter(h=>h.formation===d),u=p.length,g=!t.is_for_sale;o(`Formation ${d}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${f()}
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${Q.toLocaleString("fr")} crédits</div>
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Q}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${t.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(x=document.getElementById("direct-sell-form-btn"))==null||x.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${d} pour ${Q.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const h=p.find(v=>!v.is_for_sale)||p[0];if(!h){n("Aucune carte à vendre","error");return}const{error:w}=await k.from("cards").delete().eq("id",h.id);if(w){n(w.message,"error");return}await k.from("users").update({credits:(a.profile.credits||0)+Q}).eq("id",a.profile.id),await r(),n(`+${Q.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),l("collection")}),(y=document.getElementById("market-sell-form-btn"))==null||y.addEventListener("click",async()=>{const h=parseInt(document.getElementById("sell-price-form").value);if(!h||h<1){n("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:h}).eq("id",t.id),await k.from("market_listings").insert({seller_id:a.profile.id,card_id:t.id,price:h}),n("Carte mise en vente sur le marché !","success"),s(),l("collection")}),(b=document.getElementById("cancel-sell-form-btn"))==null||b.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),s(),l("collection")})}function pt(t,e,i,o){var m,E,A,L,z,M;const{state:a,toast:n,openModal:s,closeModal:l,navigate:r,refreshProfile:d}=o,c=t.player,f=e.filter(C=>C.player.id===c.id),p=f.length,u=at[c.rarity]||1e3,g=c.rarity!=="legende",x=Ke(c),y=te(c,c.job),b=c.job2?te(c,c.job2):null,h=le[c.job]||"#1A6B3C",w=c.job2?le[c.job2]:null,v=Oe[c.rarity]||"#ccc",$=be[c.country_code]||c.country_code||"";s(`${c.firstname} ${c.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${v};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${c.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(c.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${h}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${h}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${y}</text>
            </svg>
            ${b!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${w}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${b}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${x?`<img src="${x}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${c.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${$}</div>
            ${(m=c.clubs)!=null&&m.logo_url?`<img src="${c.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((E=c.clubs)==null?void 0:E.encoded_name)||"").slice(0,6)}</div>`}
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
          <div style="font-weight:700;font-size:18px">×${p}</div>
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
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${p-1} carte${p-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${p<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${g&&!t.is_for_sale?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price" min="1" placeholder="Prix en crédits" value="${c.sell_price||5e3}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${t.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-btn">Retirer</button>
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(A=document.getElementById("close-detail"))==null||A.addEventListener("click",l),(L=document.getElementById("direct-sell-btn"))==null||L.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${c.surname_encoded} pour ${u.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const C=f.find(X=>!X.is_for_sale)||f[0];if(!C){n("Aucune carte à vendre","error");return}const{error:O}=await k.from("cards").delete().eq("id",C.id);if(O){n(O.message,"error");return}await k.from("users").update({credits:(a.profile.credits||0)+u}).eq("id",a.profile.id),await d(),n(`+${u.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),r("collection")}),(z=document.getElementById("market-sell-btn"))==null||z.addEventListener("click",async()=>{const C=parseInt(document.getElementById("sell-price").value);if(!C||C<1){n("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:C}).eq("id",t.id),await k.from("market_listings").insert({seller_id:a.profile.id,card_id:t.id,price:C}),n("Carte mise en vente sur le marché !","success"),l(),r("collection")}),(M=document.getElementById("cancel-sell-btn"))==null||M.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),l(),r("collection")})}const ce={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},V={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function he(t){const e=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!e||!(t!=null&&t.skin)||!(t!=null&&t.hair))return null;const i=t.hair==="chauve"?`${t.skin}-chauve-rase`:`${t.skin}-${t.hair}-${t.hair_length}`;return`${e}/storage/v1/object/public/assets/tetes/${i}.png`}async function Pe(t,e){const{state:i,navigate:o,toast:a}=e;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await k.from("decks").select("id,name,formation_card_id,is_active").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(n==null?void 0:n.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(n==null?void 0:n.length)>0?n.map(s=>`
          <div class="card-panel" style="display:flex;justify-content:space-between;align-items:center;padding:14px">
            <div>
              <div style="font-weight:700;font-size:14px">${s.name}
                ${s.is_active?'<span style="font-size:10px;background:var(--green);color:#fff;padding:2px 6px;border-radius:8px;margin-left:4px">ACTIF</span>':""}
              </div>
            </div>
            <div style="display:flex;gap:6px">
              ${s.is_active?"":`<button class="btn btn-ghost btn-sm" data-activate="${s.id}">Activer</button>`}
              <button class="btn btn-primary btn-sm" data-edit="${s.id}">✏️ Éditer</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!s)return;const{data:l,error:r}=await k.from("decks").insert({owner_id:i.profile.id,name:s,is_active:!(n!=null&&n.length)}).select().single();if(r){a(r.message,"error");return}a("Deck créé !","success"),Te(l.id,t,e)}),t.querySelectorAll("[data-edit]").forEach(s=>{s.addEventListener("click",()=>Te(s.dataset.edit,t,e))}),t.querySelectorAll("[data-activate]").forEach(s=>{s.addEventListener("click",async()=>{await k.from("decks").update({is_active:!1}).eq("owner_id",i.profile.id),await k.from("decks").update({is_active:!0}).eq("id",s.dataset.activate),a("Deck activé !","success"),Pe(t,e)})})}async function Te(t,e,i){const{state:o,toast:a}=i;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await k.from("decks").select("*").eq("id",t).single(),{data:s}=await k.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),l=(s||[]).filter(u=>u.card_type==="player"&&u.player),r=(s||[]).filter(u=>u.card_type==="formation"),d=r.map(u=>u.formation).filter(Boolean),{data:c}=await k.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",t);let f=n.formation||"4-4-2";d.length>0&&!d.includes(f)&&(f=d[0]);const p={deckId:t,name:n.name,formation:f,formationCardId:n.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:r,availableFormations:d};(c||[]).forEach(u=>{u.is_starter?p.slots[u.position]=u.card_id:p.subs.includes(u.card_id)||p.subs.push(u.card_id)}),J(e,p,i)}function J(t,e,i){var r;const{navigate:o}=i;ce[e.formation];const a=Le(e.formation),n=a.filter(d=>e.slots[d]).length,s=e.availableFormations.length>0?e.availableFormations:Object.keys(ce),l=e.subs.map(d=>e.playerCards.find(c=>c.id===d)).filter(Boolean);[...Object.values(e.slots),...e.subs],t.innerHTML=`
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
        ${s.map(d=>`<option value="${d}" ${d===e.formation?"selected":""}>${d}</option>`).join("")}
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
        ${l.map(d=>{const c=d.player;return`<div style="display:flex;align-items:center;gap:6px;background:#f5f5f5;border-radius:8px;padding:4px 8px;font-size:12px">
            <span style="background:${V[c.job]};color:#fff;border-radius:4px;padding:1px 5px;font-size:10px;font-weight:700">${c.job}</span>
            ${c.firstname} ${c.surname_encoded}
            <button style="background:none;border:none;color:#c0392b;cursor:pointer;font-size:14px" data-remove-sub="${d.id}">✕</button>
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
  </div>`,ft(t,e,a,i),document.getElementById("builder-back").addEventListener("click",()=>o("decks")),document.getElementById("formation-select").addEventListener("change",d=>{e.formation=d.target.value;const c=Le(e.formation),f={};c.forEach(p=>{e.slots[p]&&(f[p]=e.slots[p])}),e.slots=f,J(t,e,i)}),document.getElementById("save-deck").addEventListener("click",()=>yt(e,i)),t.querySelectorAll("[data-remove-sub]").forEach(d=>{d.addEventListener("click",()=>{e.subs=e.subs.filter(c=>c!==d.dataset.removeSub),J(t,e,i)})}),(r=document.getElementById("add-sub-btn"))==null||r.addEventListener("click",()=>{gt(e,t,i)})}function ft(t,e,i,o){const a=document.getElementById("deck-field");if(!a)return;const n=e.formation,s=ve[n]||{},l=ue?ue(n)||ee[n]||[]:ee[n]||[],r={};i.forEach(w=>{const v=e.slots[w],$=v?e.playerCards.find(m=>m.id===v):null;r[w]=($==null?void 0:$.player)||null});const d=i.filter(w=>w.startsWith("MIL"));let c=0,f=0;d.forEach(w=>{const v=r[w];v&&(c+=Number(v.note_m)||0)}),l.forEach(([w,v])=>{if(!w.startsWith("MIL")||!v.startsWith("MIL"))return;Y(r[w],r[v])!=="#ff3333"&&f++});const p=320,u=320,g=28,x=4;function y(w){const v=s[w];return v?{x:v.x*p,y:v.y*u}:null}let b="";for(const[w,v]of l){const $=y(w),m=y(v);if(!$||!m)continue;const E=r[w],A=r[v],L=Y(E,A);if(L==="#00ff88"||L==="#FFD700")b+=`<line x1="${$.x}" y1="${$.y}" x2="${m.x}" y2="${m.y}"
        stroke="${L}" stroke-width="${x*3}" stroke-linecap="round" opacity="0.25"/>`,b+=`<line x1="${$.x}" y1="${$.y}" x2="${m.x}" y2="${m.y}"
        stroke="${L}" stroke-width="${x}" stroke-linecap="round" opacity="0.95"/>`;else{const M=L==="#ff3333"||L==="#cc2222"?.75:.9;b+=`<line x1="${$.x}" y1="${$.y}" x2="${m.x}" y2="${m.y}"
        stroke="${L}" stroke-width="${x}" stroke-linecap="round" opacity="${M}"/>`}}for(const w of i){const v=y(w);if(!v)continue;const $=r[w],m=w.replace(/\d+/,""),A={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[m]||"#555",L=$?Number(m==="GK"?$.note_g:m==="DEF"?$.note_d:m==="MIL"?$.note_m:$.note_a)||0:null,z=$?($.surname_encoded||"").slice(0,8).toUpperCase():"";if($){const M=he($);M&&(b+=`
          <defs>
            <clipPath id="clip-${w}">
              <circle cx="${v.x}" cy="${v.y}" r="${g}"/>
            </clipPath>
          </defs>
          <image href="${M}" x="${v.x-g}" y="${v.y-g}" width="${g*2}" height="${g*2}"
            clip-path="url(#clip-${w})" preserveAspectRatio="xMidYMid slice" opacity="0.85"/>`),b+=`
        <circle cx="${v.x}" cy="${v.y}" r="${g}" fill="${M?"transparent":A}"
          stroke="${A}" stroke-width="2" />
        <circle cx="${v.x}" cy="${v.y}" r="${g}" fill="${A}" opacity="${M?"0.5":"1"}"
          stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
        ${M?`<image href="${M}" x="${v.x-g}" y="${v.y-g}" width="${g*2}" height="${g*2}"
          clip-path="url(#clip-${w})" preserveAspectRatio="xMidYMid slice" opacity="0.9"/>`:""}
        <text x="${v.x}" y="${v.y-3}" text-anchor="middle" font-size="13" font-weight="900"
          fill="white" font-family="Arial Black,Arial" style="text-shadow:0 1px 2px #000">${L}</text>
        <text x="${v.x}" y="${v.y+11}" text-anchor="middle" font-size="6.5" fill="rgba(255,255,255,0.9)"
          font-family="Arial">${z}</text>
        <rect x="${v.x-g}" y="${v.y-g}" width="${g*2}" height="${g*2}"
          fill="transparent" class="deck-slot-hit" data-pos="${w}" style="cursor:pointer"/>`}else b+=`
        <circle cx="${v.x}" cy="${v.y}" r="${g}" fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="${v.x}" y="${v.y+6}" text-anchor="middle" font-size="16" fill="rgba(255,255,255,0.4)"
          font-family="Arial">+</text>
        <rect x="${v.x-g}" y="${v.y-g}" width="${g*2}" height="${g*2}"
          fill="transparent" class="deck-slot-hit" data-pos="${w}" style="cursor:pointer"/>`}const h="";a.innerHTML=`
    <!-- Badge MIL -->
    ${d.length>0?`
    <div style="position:absolute;top:6px;right:8px;z-index:10;
      background:rgba(212,160,23,0.95);color:#000;border-radius:8px;
      padding:3px 10px;font-size:11px;font-weight:900;pointer-events:none">
      MIL ${c}${f>0?` +${f}`:""} ⚡
    </div>`:""}

    <svg viewBox="0 0 ${p} ${u}" width="100%" style="display:block;max-width:380px;margin:0 auto">
      ${h}
      ${b}
    </svg>`,a.querySelectorAll(".deck-slot-hit").forEach(w=>{w.addEventListener("click",()=>ut(w.dataset.pos,e,t,o))})}function ut(t,e,i,o){var p,u,g;const{openModal:a,closeModal:n}=o,s=t.replace(/\d+/,""),l=e.slots[t],r=l?e.playerCards.find(x=>x.id===l):null;(p=r==null?void 0:r.player)==null||p.id;const d=new Set;Object.entries(e.slots).forEach(([x,y])=>{var h;if(x===t||!y)return;const b=e.playerCards.find(w=>w.id===y);(h=b==null?void 0:b.player)!=null&&h.id&&d.add(b.player.id)}),e.subs.forEach(x=>{var b;const y=e.playerCards.find(h=>h.id===x);(b=y==null?void 0:y.player)!=null&&b.id&&d.add(y.player.id)});const c=new Set,f=e.playerCards.filter(x=>{const y=x.player;return!(y.job===s||y.job2===s)||d.has(y.id)||c.has(y.id)?!1:(c.add(y.id),!0)});f.sort((x,y)=>{const b=s==="GK"?x.player.note_g:s==="DEF"?x.player.note_d:s==="MIL"?x.player.note_m:x.player.note_a;return(s==="GK"?y.player.note_g:s==="DEF"?y.player.note_d:s==="MIL"?y.player.note_m:y.player.note_a)-b}),a(`Choisir ${s} — ${t}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${e.slots[t]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${f.length>0?f.map(x=>{var v,$;const y=x.player,b=s==="GK"?y.note_g:s==="DEF"?y.note_d:s==="MIL"?y.note_m:y.note_a,h=he(y),w={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[y.rarity];return`<div class="player-option" data-card-id="${x.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${V[s]}">
            ${h?`<img src="${h}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${V[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${y.firstname} ${y.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${y.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${y.country_code}">
              ${(v=y.clubs)!=null&&v.logo_url?`<img src="${y.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${(($=y.clubs)==null?void 0:$.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${y.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${V[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${w};flex-shrink:0">
            ${b}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(u=document.getElementById("close-selector"))==null||u.addEventListener("click",n),(g=document.getElementById("remove-player"))==null||g.addEventListener("click",()=>{delete e.slots[t],n(),J(i,e,o)}),document.querySelectorAll(".player-option").forEach(x=>{x.addEventListener("click",()=>{e.slots[t]=x.dataset.cardId,n(),J(i,e,o)})})}function gt(t,e,i){var r;const{openModal:o,closeModal:a}=i,n=new Set;Object.values(t.slots).filter(Boolean).forEach(d=>{var f;const c=t.playerCards.find(p=>p.id===d);(f=c==null?void 0:c.player)!=null&&f.id&&n.add(c.player.id)}),t.subs.forEach(d=>{var f;const c=t.playerCards.find(p=>p.id===d);(f=c==null?void 0:c.player)!=null&&f.id&&n.add(c.player.id)});const s=new Set,l=t.playerCards.filter(d=>{var c,f,p;return n.has((c=d.player)==null?void 0:c.id)||s.has((f=d.player)==null?void 0:f.id)?!1:(s.add((p=d.player)==null?void 0:p.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(d=>{var u;const c=d.player,f=he(c),p=c.job==="GK"?c.note_g:c.job==="DEF"?c.note_d:c.job==="MIL"?c.note_m:c.note_a;return`<div class="player-option" data-card-id="${d.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${V[c.job]}">
            ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${c.firstname} ${c.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${c.job} · ${c.country_code} · ${((u=c.clubs)==null?void 0:u.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${V[c.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${p}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(r=document.getElementById("close-sub-selector"))==null||r.addEventListener("click",a),document.querySelectorAll(".player-option").forEach(d=>{d.addEventListener("click",()=>{t.subs.push(d.dataset.cardId),a(),J(e,t,i)})})}async function yt(t,e){const{state:i,toast:o,navigate:a}=e,n=t.formationCards.find(d=>d.formation===t.formation),s=(n==null?void 0:n.id)||t.formationCardId,{error:l}=await k.from("decks").update({formation:t.formation,formation_card_id:s||null}).eq("id",t.deckId);if(l){o(l.message,"error");return}await k.from("deck_cards").delete().eq("deck_id",t.deckId);const r=[];if(Object.entries(t.slots).forEach(([d,c],f)=>{r.push({deck_id:t.deckId,card_id:c,position:d,is_starter:!0,slot_order:f})}),t.subs.forEach((d,c)=>{r.push({deck_id:t.deckId,card_id:d,position:`SUB${c+1}`,is_starter:!1,slot_order:100+c})}),r.length>0){const{error:d}=await k.from("deck_cards").insert(r);if(d){o(d.message,"error");return}}o("Deck enregistré ✅","success"),a("decks")}function Le(t){const e=ce[t]||ce["4-4-2"],i=["GK1"];for(let o=1;o<=e.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=e.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=e.ATT;o++)i.push(`ATT${o}`);return i}const ze=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],He={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function xt(t){const e="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(t!=null&&t.skin)||!(t!=null&&t.hair))return null;const i=t.hair==="chauve"?`${t.skin}-chauve-rase`:`${t.skin}-${t.hair}-${t.hair_length}`;return`${e}/storage/v1/object/public/assets/tetes/${i}.png`}const mt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},vt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function bt(t,{state:e,navigate:i,toast:o}){var n;const a=((n=e.profile)==null?void 0:n.credits)||0;t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${a.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${ze.map(s=>{const l=a>=s.cost||s.cost===0,r=s.id==="players_std"||s.id==="players_pub";return`<div class="booster-card ${l?"":"disabled"}" data-booster="${s.id}" style="position:relative">
            ${r?`<button class="booster-info-btn" data-info="${s.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>`:""}
            <div class="icon"><img src="${s.img}" alt="${s.name}" style="height:64px;width:auto;display:block;margin:0 auto"></div>
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
  </div>`,t.querySelectorAll(".booster-card:not(.disabled)").forEach(s=>{s.addEventListener("click",async()=>{const l=ze.find(r=>r.id===s.dataset.booster);if(l){s.style.opacity="0.5",s.style.pointerEvents="none";try{await ht(l,{state:e,toast:o,navigate:i,container:t})}catch(r){o(r.message,"error"),s.style.opacity="",s.style.pointerEvents=""}}})}),t.querySelectorAll(".booster-info-btn").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation(),At()})})}async function ht(t,{state:e,toast:i,navigate:o,container:a}){if(t.cost>0&&e.profile.credits<t.cost){i("Crédits insuffisants","error");return}t.id==="players_pub"&&await Tt();const{data:n}=await k.from("cards").select("card_type, player_id, formation").eq("owner_id",e.profile.id),s=new Set((n||[]).filter(c=>c.card_type==="player").map(c=>c.player_id)),l=new Set((n||[]).filter(c=>c.card_type==="formation").map(c=>c.formation));let r=[];t.type==="player"?r=await kt(e.profile,t.cardCount,t.cost):t.type==="game_changer"?r=await _t(e.profile,t.cardCount,t.cost):t.type==="formation"&&(r=await Et(e.profile,t.cost)),r.forEach(c=>{c.card_type==="player"&&c.player?c.isDuplicate=s.has(c.player.id):c.card_type==="formation"&&(c.isDuplicate=l.has(c.formation))});const{data:d}=await k.from("users").select("*").eq("id",e.profile.id).single();d&&(e.profile=d),It(r,t,o)}function wt(){const t=Math.random()*100;return t<.5?"legende":t<2?"special":t<10?"normal_high":"normal_low"}function U(t){return Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function $t(t,e){let i;switch(e){case"legende":i=t.filter(o=>o.rarity==="legende"),i.length||(i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=t.filter(o=>U(o)>=6));break;case"special":i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=t.filter(o=>U(o)>=6));break;case"normal_high":i=t.filter(o=>o.rarity==="normal"&&U(o)>=6),i.length||(i=t.filter(o=>U(o)>=6));break;default:i=t.filter(o=>o.rarity==="normal"&&U(o)>=1&&U(o)<=5),i.length||(i=t.filter(o=>o.rarity==="normal"));break}return i.length||(i=t),i[Math.floor(Math.random()*i.length)]}async function kt(t,e,i){if(i>0){const{error:d}=await k.from("users").update({credits:t.credits-i}).eq("id",t.id);if(d)throw d}const{data:o}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const a=o.filter(d=>d.job==="GK"),n=o.filter(d=>d.job!=="GK"),s=!t.first_booster_opened&&a.length>0,l=[];for(let d=0;d<e;d++){const c=d===0&&s?a:d===0?n:o,f=wt(),p=$t(c,f);p&&l.push(p)}s&&await k.from("users").update({first_booster_opened:!0}).eq("id",t.id);const{data:r}=await k.from("cards").insert(l.map(d=>({owner_id:t.id,player_id:d.id,card_type:"player"}))).select();return l.map((d,c)=>({...r[c],player:d}))}async function _t(t,e,i){const{error:o}=await k.from("users").update({credits:t.credits-i}).eq("id",t.id);if(o)throw o;const a=Object.keys(He),n=Array.from({length:e},()=>a[Math.floor(Math.random()*a.length)]),{data:s}=await k.from("cards").insert(n.map(l=>({owner_id:t.id,card_type:"game_changer",gc_type:l}))).select();return s}async function Et(t,e){const{error:i}=await k.from("users").update({credits:t.credits-e}).eq("id",t.id);if(i)throw i;const o=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"],a=o[Math.floor(Math.random()*o.length)],{data:n}=await k.from("cards").insert({owner_id:t.id,card_type:"formation",formation:a}).select();return n}function It(t,e,i){const o=document.createElement("div");o.id="booster-anim-overlay",o.innerHTML=`
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
  `,document.body.appendChild(o);let a=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(a)return;a=!0;const p=document.getElementById("pack-visual");p.classList.add("shaking"),setTimeout(()=>{p.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",s(0)},600)},500)});let n=0;function s(p){n=p;const u=document.getElementById("reveal-phase");u.style.display="flex",l(p)}function l(p){var $;const u=t[p],g=document.getElementById("card-counter"),x=document.getElementById("single-card-slot"),y=document.getElementById("card-tap-hint");g&&(g.textContent=`Carte ${p+1} / ${t.length}`),y&&(y.textContent=p<t.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const b=Me(u),h=u.card_type==="player"&&(($=u.player)==null?void 0:$.rarity)==="legende";x.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${h?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${b}
        ${u.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,h&&c();const w=document.getElementById("current-card-wrap");let v=!1;w.addEventListener("click",()=>{if(v)return;v=!0;const m=p+1;m<t.length?(w.style.transition="all 0.25s ease",w.style.transform="translateX(-120%) rotate(-15deg)",w.style.opacity="0",setTimeout(()=>l(m),250)):r()})}function r(){f(),document.getElementById("reveal-phase").style.display="none";const p=document.getElementById("recap-phase");p.style.display="flex";const u=document.getElementById("recap-grid");u.innerHTML=t.map((g,x)=>`
      <div class="recap-card" style="--i:${x};animation-delay:${x*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${Me(g)}
        ${g.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let d=null;function c(){const p=document.getElementById("fireworks-canvas");if(!p)return;p.width=window.innerWidth,p.height=window.innerHeight;const u=p.getContext("2d"),g=[];function x(){const b=Math.random()*p.width,h=Math.random()*p.height*.6,w=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],v=w[Math.floor(Math.random()*w.length)];for(let $=0;$<60;$++){const m=Math.PI*2/60*$,E=2+Math.random()*5;g.push({x:b,y:h,vx:Math.cos(m)*E,vy:Math.sin(m)*E,alpha:1,color:v,size:2+Math.random()*3})}}x(),d=setInterval(x,600);function y(){if(document.getElementById("fireworks-canvas")){u.clearRect(0,0,p.width,p.height);for(let b=g.length-1;b>=0;b--){const h=g[b];if(h.x+=h.vx,h.y+=h.vy+.08,h.vy*=.98,h.alpha-=.018,h.alpha<=0){g.splice(b,1);continue}u.globalAlpha=h.alpha,u.fillStyle=h.color,u.beginPath(),u.arc(h.x,h.y,h.size,0,Math.PI*2),u.fill()}u.globalAlpha=1,(d!==null||g.length>0)&&requestAnimationFrame(y)}}y()}function f(){d!==null&&(clearInterval(d),d=null);const p=document.getElementById("fireworks-canvas");p&&p.getContext("2d").clearRect(0,0,p.width,p.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{f(),o.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{f(),o.remove(),i("boosters")})}function Me(t){var e,i;if(t.card_type==="player"&&t.player){const o=t.player,a=o.job||"ATT",n=mt[a]||"#1A6B3C",s=vt[o.rarity]||"#ccc",l=a==="GK"?o.note_g:a==="DEF"?o.note_d:a==="MIL"?o.note_m:o.note_a,r=xt(o),d={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[o.country_code]||o.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${s};overflow:hidden;display:flex;flex-direction:column">
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
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${l||0}</text>
        </svg>
      </div>
      <!-- Portrait -->
      <div style="flex:1;overflow:hidden;background:#b8d4f0">
        ${r?`<img src="${r}" style="width:100%;height:100%;object-fit:cover;object-position:center top" onerror="this.style.display='none'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;height:26px">
        <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:1px;color:#555;text-transform:uppercase">${d}</div>
        ${(e=o.clubs)!=null&&e.logo_url?`<img src="${o.clubs.logo_url}" style="width:20px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:700">${(((i=o.clubs)==null?void 0:i.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>`}if(t.card_type==="game_changer"){const o=He[t.gc_type]||{icon:"⚡",desc:""};return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#3d0a7a,#7a28b8);border-radius:12px;border:3px solid #9b59b6;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:16px">
      <div style="font-size:40px">${o.icon}</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">GAME CHANGER</div>
      <div style="font-weight:700;font-size:13px;color:#fff;text-align:center">${t.gc_type}</div>
      <div style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${o.desc}</div>
    </div>`}return t.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${t.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function At(){const t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(t),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.getElementById("odds-close").addEventListener("click",()=>t.remove())}function Tt(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:16px";let i=5;e.innerHTML=`<div style="font-size:48px">📺</div>
      <div style="font-size:18px;font-weight:700">Publicité</div>
      <div style="font-size:36px;font-weight:900" id="ad-cd">5</div>`,document.body.appendChild(e);const o=setInterval(()=>{i--;const a=document.getElementById("ad-cd");a&&(a.textContent=i),i<=0&&(clearInterval(o),e.remove(),t(!0))},1e3)})}const W={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},N={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ue(t,e,i,o,a){var n;t.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${e}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${o}</button>
    </div>
  </div>`,(n=document.getElementById("msg-btn"))==null||n.addEventListener("click",a)}function S(t){const e=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!e||!(t!=null&&t.skin)||!(t!=null&&t.hair))return null;const i=t.hair==="chauve"?`${t.skin}-chauve-rase`:`${t.skin}-${t.hair}-${t.hair_length}`;return`${e}/storage/v1/object/public/assets/tetes/${i}.png`}function ge(t){var i,o;const e=t.player;return{cardId:t.id,id:e.id,firstname:e.firstname,name:e.surname_encoded,country_code:e.country_code,club_id:e.club_id,job:e.job,job2:e.job2,note_g:Number(e.note_g)||0,note_d:Number(e.note_d)||0,note_m:Number(e.note_m)||0,note_a:Number(e.note_a)||0,rarity:e.rarity,skin:e.skin,hair:e.hair,hair_length:e.hair_length,clubName:((i=e.clubs)==null?void 0:i.encoded_name)||null,clubLogo:((o=e.clubs)==null?void 0:o.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function we(t){return t===1?[1]:t===2?[0,2]:t===3?[0,1,2]:t===4?[0,1,1,2]:t===5?[0,1,1,1,2]:[1]}function Lt(){const t=Math.random()*100;return t<.1?4:t<5?3:t<20?2:1}function Ve(t,e){const i=W[e]||W["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]},a=[...t];for(const n of["GK","DEF","MIL","ATT"]){const s=[];for(let r=0;r<i[n];r++){let d=a.findIndex(c=>c.job===n);if(d===-1&&(d=a.findIndex(c=>c.job2===n)),d===-1&&(d=0),a[d]){const c={...a[d],_line:n};s.push(c),a.splice(d,1)}}const l=we(s.length);s.forEach((r,d)=>{r._col=l[d]}),o[n]=s}return o}async function zt(t,e){const{data:i}=await k.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length").eq("is_active",!0).limit(60);if(!i||i.length<11)return Mt(t);const o=W[t]||W["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]},n=[...i];for(const s of["GK","DEF","MIL","ATT"]){const l=n.filter(p=>p.job===s),r=n.filter(p=>p.job!==s),d=[...l,...r],c=[];for(let p=0;p<o[s];p++){const u=d[p]||n[p];u&&c.push({cardId:"ai-"+u.id+"-"+p,id:u.id,firstname:u.firstname,name:u.surname_encoded,country_code:u.country_code,club_id:u.club_id,job:u.job,job2:u.job2,note_g:Number(u.note_g)||0,note_d:Number(u.note_d)||0,note_m:Number(u.note_m)||0,note_a:Number(u.note_a)||0,rarity:u.rarity,skin:u.skin,hair:u.hair,hair_length:u.hair_length,boost:0,used:!1,_line:s})}const f=we(c.length);c.forEach((p,u)=>{p._col=f[u]}),a[s]=c}return a}function Mt(t){const e=W[t]||W["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let a=0;for(const n of["GK","DEF","MIL","ATT"]){const s=[];for(let r=0;r<e[n];r++){const d=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+a,id:"fake-"+a,firstname:"IA",name:o[a%o.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?d:2,note_d:n==="DEF"?d:2,note_m:n==="MIL"?d:2,note_a:n==="ATT"?d:2,rarity:"normal",boost:0,used:!1,_line:n}),a++}const l=we(s.length);s.forEach((r,d)=>{r._col=l[d]}),i[n]=s}return i}async function jt(t,e){var $;const{state:i,navigate:o,toast:a}=e,n=i.params||{};t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const s=n.matchMode||"vs_ai_easy",l=s.replace("vs_ai_",""),r=s;if(!n.deckId)return Ct(t,e,s);const d=n.deckId,[{data:c},{data:f}]=await Promise.all([k.from("decks").select("formation,name").eq("id",d).single(),k.from("deck_cards").select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`).eq("deck_id",d).order("slot_order")]),p=(f||[]).filter(m=>{var E;return m.is_starter&&((E=m.card)==null?void 0:E.player)}).map(m=>ge(m.card)),u=(f||[]).filter(m=>{var E;return!m.is_starter&&((E=m.card)==null?void 0:E.player)}).map(m=>ge(m.card));if(p.length<11){Ue(t,"⚠️",`Deck incomplet (${p.length}/11).`,"Compléter",()=>o("decks"));return}const g=(f||[]).find(m=>{var E;return((E=m.card)==null?void 0:E.card_type)==="formation"}),x=(c==null?void 0:c.formation)||(($=g==null?void 0:g.card)==null?void 0:$.formation)||"4-4-2",{data:y}=await k.from("cards").select("id,gc_type").eq("owner_id",i.profile.id).eq("card_type","game_changer"),b=Ve(p,x),h=await zt(x),{data:w}=await k.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:d,status:"in_progress"}).select().single(),v={matchId:w==null?void 0:w.id,mode:r,difficulty:l,formation:x,homeTeam:b,aiTeam:h,homeSubs:u,subsUsed:0,maxSubs:Math.min(u.length,3),homeScore:0,aiScore:0,gcCards:y||[],usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Bt(t,v,e)}async function Ct(t,e,i){const{state:o,navigate:a}=e;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await k.from("decks").select("id,name,is_active,formation").eq("owner_id",o.profile.id).order("created_at",{ascending:!1});if(!n||n.length===0){Ue(t,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>a("decks"));return}const s=n.map(c=>c.id),{data:l}=await k.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length))`).in("deck_id",s).order("slot_order");let r=0;function d(){var h,w,v,$,m;const c=n[r],f=(l||[]).filter(E=>E.deck_id===c.id),p=f.filter(E=>{var A;return E.is_starter&&((A=E.card)==null?void 0:A.player)}).map(E=>ge(E.card)),u=f.find(E=>{var A;return((A=E.card)==null?void 0:A.card_type)==="formation"}),g=c.formation||((h=u==null?void 0:u.card)==null?void 0:h.formation)||"4-4-2",x=p.length>=11?Ve(p,g):null,y=p.length>=11;t.innerHTML=`
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
          <div style="font-size:11px;opacity:.6;margin-top:2px">${g} · ${p.length}/11 ${c.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${r===n.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${r===n.length-1?"0.1":"0.3"});color:${r===n.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${r===n.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : contraindre la largeur du SVG pour contrôler hauteur+largeur -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${x?`<div style="width:min(88vw, calc(100dvh - 430px));overflow:hidden;flex-shrink:0">${Je(x,g,null,[],240,240)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${p.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${n.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${n.map((E,A)=>`<div style="width:7px;height:7px;border-radius:50%;background:${A===r?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,(w=document.getElementById("prev-deck"))==null||w.addEventListener("click",()=>{r>0&&(r--,d())}),(v=document.getElementById("next-deck"))==null||v.addEventListener("click",()=>{r<n.length-1&&(r++,d())}),($=document.getElementById("validate-deck"))==null||$.addEventListener("click",()=>{y&&e.navigate("match",{matchMode:i,deckId:c.id})}),(m=document.getElementById("cancel-deck-select"))==null||m.addEventListener("click",()=>a("home"));const b=document.getElementById("deck-swipe-zone");if(b){let E=0,A=0;b.addEventListener("touchstart",L=>{E=L.touches[0].clientX,A=L.touches[0].clientY},{passive:!0}),b.addEventListener("touchend",L=>{const z=L.changedTouches[0].clientX-E,M=L.changedTouches[0].clientY-A;Math.abs(z)<40||Math.abs(z)<Math.abs(M)||(z<0&&r<n.length-1?(r++,d()):z>0&&r>0&&(r--,d()))},{passive:!0})}}d()}function Bt(t,e,i){const o=e.homeTeam.MIL||[],a=e.aiTeam.MIL||[];function n(f){return f.reduce((p,u)=>p+D(u,"MIL"),0)}function s(f){let p=0;for(let u=0;u<f.length-1;u++){const g=Y(f[u],f[u+1]);g!=="#ff3333"&&g!=="#cc2222"&&p++}return p}const l=n(o)+s(o),r=n(a)+s(a),d=l>=r;function c(f,p,u){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${p}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${f.map((g,x)=>{const y=S(g),b=x<f.length-1?Y(g,f[x+1]):null,h=b&&b!=="#ff3333"&&b!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${u};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${y?`<img src="${y}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${D(g,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${g.name}</div>
          </div>
          ${b?`<div style="width:14px;height:4px;border-radius:2px;background:${b};flex-shrink:0;opacity:${h?.9:.3}"></div>`:""}
          `}).join("")}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${n(f)} + ${s(f)} liens = <b style="color:#fff">${n(f)+s(f)}</b>
      </div>
    </div>`}t.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;gap:24px;padding:24px;background:#0a3d1e">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${c(o,e.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${l}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${r}</div>
    </div>

    ${c(a,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const f=document.getElementById("score-home"),p=document.getElementById("score-ai"),u=document.getElementById("midfield-result");if(f&&p&&(d?(f.style.fontSize="80px",f.style.color="#FFD700",p.style.opacity="0.25"):(p.style.fontSize="80px",p.style.color="#ff6b6b",f.style.opacity="0.25")),u){const g=Lt();u.style.opacity="1",d&&e.clubName,u.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${d?`${e.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${d?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${g}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,d&&(e.boostCard={value:g})}e.attacker=d?"home":"ai",e.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(g=>({name:g.name,note:D(g,"MIL"),portrait:S(g),job:g.job})),aiPlayers:a.map(g=>({name:g.name,note:D(g,"MIL"),portrait:S(g),job:g.job})),homeTotal:l,aiTotal:r,text:`Duel milieu : ${e.clubName} ${l} – ${r} IA → ${d?e.clubName+" attaque":"IA attaque"}`}),setTimeout(()=>{e.phase=e.attacker==="home"?"attack":"ai-attack",G(t,e,i),e.attacker==="ai"&&setTimeout(()=>ye(t,e,i),1e3)},2800)},1200)}function St(t){if(!t||t.length<2)return"🌍";try{return String.fromCodePoint(127462+t.charCodeAt(0)-65)+String.fromCodePoint(127462+t.charCodeAt(1)-65)}catch{return"🌍"}}function Ye(t,e,i,o,a=310,n=310){const s=ve[e]||{},l=ue(e)||ee[e]||[],r=26,d={},c=["ATT","MIL","DEF","GK"];for(const g of c)(t[g]||[]).forEach((y,b)=>{d[`${g}${b+1}`]=y});function f(g){const x=s[g];return x?{x:x.x*a,y:x.y*n}:null}let p="";for(const[g,x]of l){const y=f(g),b=f(x);if(!y||!b)continue;const h=d[g],w=d[x],v=Y(h,w);v==="#00ff88"||v==="#FFD700"?(p+=`<line x1="${y.x.toFixed(1)}" y1="${y.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}"
        stroke="${v}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,p+=`<line x1="${y.x.toFixed(1)}" y1="${y.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}"
        stroke="${v}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):p+=`<line x1="${y.x.toFixed(1)}" y1="${y.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}"
        stroke="${v}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}for(const[g,x]of Object.entries(d)){const y=f(g);if(!y)continue;const b=g.replace(/[0-9]/g,""),h=N[b]||"#555",w=i==="attack"&&["MIL","ATT"].includes(b)&&!x.used||i==="defense"&&["GK","DEF","MIL"].includes(b)&&!x.used,v=o.includes(x.cardId);let $;i==="attack"?$=b==="MIL"?Number(x.note_m)||0:Number(x.note_a)||0:i==="defense"?$=b==="GK"?Number(x.note_g)||0:b==="MIL"?Number(x.note_m)||0:Number(x.note_d)||0:$=Number(b==="GK"?x.note_g:b==="DEF"?x.note_d:b==="MIL"?x.note_m:x.note_a)||0,$=$+(x.boost||0);const m=v?"#FFD700":w?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.25)",E=v?3:2,A=x.used?.2:1,L=S(x);if(L&&(p+=`<defs><clipPath id="mc-${g}"><circle cx="${y.x}" cy="${y.y}" r="${r}"/></clipPath></defs>`),p+=`<circle cx="${y.x}" cy="${y.y}" r="${r}" fill="${h}" opacity="${A}"
      stroke="${m}" stroke-width="${E}"/>`,L&&!x.used&&(p+=`<image href="${L}" x="${y.x-r}" y="${y.y-r}" width="${r*2}" height="${r*2}"
        clip-path="url(#mc-${g})" preserveAspectRatio="xMidYMid slice" opacity="0.8"/>`,p+=`<circle cx="${y.x}" cy="${y.y}" r="${r}" fill="${h}" opacity="0.3"
        stroke="${m}" stroke-width="${E}"/>`),x.boost&&(p+=`<rect x="${y.x+r-10}" y="${y.y-r}" width="14" height="10" rx="3" fill="#87CEEB"/>
        <text x="${y.x+r-3}" y="${y.y-r+8}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${x.boost}</text>`),x.used?p+=`<text x="${y.x}" y="${y.y+2}" text-anchor="middle" font-size="13" font-weight="900"
        fill="rgba(255,255,255,0.15)" font-family="Arial Black,Arial">–</text>`:p+=`<text x="${y.x}" y="${y.y+10}" text-anchor="middle" font-size="6" fill="rgba(255,255,255,0.75)"
        font-family="Arial">${(x.name||"").slice(0,8)}</text>`,!x.used){const z=(y.x+r*.68).toFixed(1),M=(y.y-r*.68).toFixed(1);p+=`<circle cx="${z}" cy="${M}" r="9" fill="#D4A017" stroke="#000" stroke-width="0.8"/>`,p+=`<text x="${z}" y="${M}" text-anchor="middle" dominant-baseline="central" font-size="8" font-weight="900" fill="#000" font-family="Arial Black">${$}</text>`;const C=(y.x-r*.68).toFixed(1),O=(y.y+r*.68).toFixed(1),X=St(x.country_code);p+=`<circle cx="${C}" cy="${O}" r="9" fill="rgba(0,0,0,0.55)" stroke="rgba(255,255,255,0.15)" stroke-width="0.8"/>`,p+=`<text x="${C}" y="${O}" text-anchor="middle" dominant-baseline="central" font-size="8">${X}</text>`;const _=(y.x+r*.68).toFixed(1),I=(y.y+r*.68).toFixed(1);x.clubName&&(p+=`<circle cx="${_}" cy="${I}" r="9" fill="rgba(20,20,60,0.8)" stroke="rgba(255,255,255,0.15)" stroke-width="0.8"/>`,p+=`<text x="${_}" y="${I}" text-anchor="middle" dominant-baseline="central" font-size="6" font-weight="700" fill="rgba(255,255,255,0.9)">${(x.clubName||"").slice(0,3).toUpperCase()}</text>`)}w&&(p+=`<circle cx="${y.x}" cy="${y.y}" r="${r}" fill="rgba(255,255,255,0.08)"
        class="match-slot-hit ${v?"selected":""}" data-card-id="${x.cardId}" data-role="${b}"
        style="cursor:pointer"/>`)}const u=r+4;return`<svg viewBox="${-u} ${-u} ${a+u*2} ${n+u*2}" width="100%" style="display:block;width:100%;max-width:380px;margin:0 auto">
    ${p}
  </svg>`}function Je(t,e,i,o,a=300,n=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ye(t,e,i,o,a,n)}
  </div>`}function ne(t,e=!1){const i=t.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[t.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${e?"0.2":"0.5"});opacity:${e?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${t.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(t.name||"").slice(0,7)}</div>
  </div>`}function Ft(t){if(t.type==="duel"){const e=t.homeTotal>=t.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(t.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:wrap">
          ${(t.homePlayers||[]).map(i=>ne(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${e?20:14}px;font-weight:900;color:${e?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${t.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${e?14:20}px;font-weight:900;color:${e?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${t.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:wrap">
          ${(t.aiPlayers||[]).map(i=>ne(i)).join("")}
        </div>
      </div>
      ${t.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${t.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(t.type==="sub"){const e=t.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${e?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${e?(game==null?void 0:game.clubName)||"Vous":"IA"}</div>
      ${ne(t.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${ne(t.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${t.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${t.type==="goal"?700:400};padding:3px 2px">${t.text||""}</div>`}function G(t,e,i){var g,x,y,b,h,w,v,$;const o=e.selected.map(m=>m.cardId),a=e.usedSubIds||[],n=e.homeSubs.filter(m=>!a.includes(m.cardId)),l=Object.values(e.homeTeam).flat().filter(m=>m.used).length>0&&n.length>0&&e.subsUsed<e.maxSubs;e.log[e.log.length-1];const r=e.phase==="ai-attack"||e.phase==="ai-defense",d=e.phase==="attack",c=e.phase==="defense",f=e.phase==="finished",p=e.gcCards.filter(m=>!e.usedGc.includes(m.id)),u=e.boostCard&&!e.boostUsed;t.innerHTML=`
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

  <div class="match-screen" style="display:flex;flex-direction:column;height:calc(100dvh - 130px);overflow:hidden;background:#0a3d1e;position:relative">

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
    <div id="last-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden">
      ${(()=>{if(e.phase==="defense"&&e.pendingAttack){const E=e.pendingAttack;return`<div style="padding:6px 8px;background:rgba(180,30,30,0.25);border-left:3px solid #ff6b6b">
            <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;margin-bottom:5px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;align-items:center;gap:6px">
              <div style="display:flex;gap:5px;flex:1">
                ${(E.players||[]).map(A=>{const L=A._line==="MIL"?A.note_m:A.note_a,z=S(A);return'<div style="text-align:center"><div style="width:36px;height:36px;border-radius:6px;background:'+(N[A.job]||"#555")+';position:relative;overflow:hidden;border:1.5px solid rgba(255,255,255,0.3)">'+(z?'<img src="'+z+'" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">':"")+'<div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.7);font-size:9px;color:#fff;font-weight:900;text-align:center">'+L+'</div></div><div style="font-size:6px;color:rgba(255,255,255,0.5)">'+(A.name||"").slice(0,6)+"</div></div>"}).join("")}
              </div>
              <div style="background:#ff6b6b;color:#fff;border-radius:8px;padding:4px 10px;font-size:20px;font-weight:900;flex-shrink:0">${E.total}</div>
            </div>
          </div>`}if(e.phase==="ai-defense"&&e.pendingAttack){const E=e.pendingAttack;return`<div style="padding:6px 8px;background:rgba(26,107,60,0.25);border-left:3px solid #00ff88">
            <div style="font-size:9px;color:#00ff88;letter-spacing:2px;margin-bottom:5px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;align-items:center;gap:6px">
              <div style="display:flex;gap:5px;flex:1">
                ${(E.players||[]).map(A=>{const L=A._line==="MIL"?A.note_m:A.note_a,z=S(A);return'<div style="text-align:center"><div style="width:36px;height:36px;border-radius:6px;background:'+(N[A.job]||"#555")+';position:relative;overflow:hidden;border:1.5px solid rgba(255,255,255,0.3)">'+(z?'<img src="'+z+'" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">':"")+'<div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.7);font-size:9px;color:#fff;font-weight:900;text-align:center">'+L+'</div></div><div style="font-size:6px;color:rgba(255,255,255,0.5)">'+(A.name||"").slice(0,6)+"</div></div>"}).join("")}
              </div>
              <div style="background:#00ff88;color:#000;border-radius:8px;padding:4px 10px;font-size:20px;font-weight:900;flex-shrink:0">${E.total}</div>
            </div>
          </div>`}const m=e.log[e.log.length-1];return m?'<div style="padding:2px 4px">'+Ft(m)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼  Historique complet (${e.log.length} actions)
    </button>

    <!-- ZONE CENTRALE : REMPLAÇANTS + TERRAIN -->
    <div style="display:flex;flex:1;min-height:0;overflow:hidden">

      <!-- Colonne remplaçants -->
      <div style="display:flex;flex-direction:column;gap:5px;padding:6px 3px;width:42px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:8px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(m=>{const E=S(m),A=N[m.job]||"#555",L=m.job==="GK"?m.note_g:m.job==="DEF"?m.note_d:m.job==="MIL"?m.note_m:m.note_a;return`
              <div class="sub-btn-col" data-sub-id="${m.cardId}" title="${m.firstname} ${m.name}"
                style="width:36px;height:36px;border-radius:50%;background:${A};border:2px solid rgba(255,255,255,0.4);cursor:pointer;position:relative;overflow:visible;flex-shrink:0">
                <div style="position:absolute;inset:0;border-radius:50%;overflow:hidden">
                  ${E?`<img src="${E}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.85">`:""}
                </div>
                <div style="position:absolute;top:-4px;right:-4px;width:15px;height:15px;border-radius:50%;background:#D4A017;border:1px solid #000;display:flex;align-items:center;justify-content:center;font-size:7px;font-weight:900;color:#000;z-index:2;line-height:1">${L}</div>
              </div>`}).join("")}
        ${l?`
        <div id="sub-btn-main" style="margin-top:4px;width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1.5px dashed rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;color:rgba(255,255,255,0.5)">🔄</div>
        `:""}
      </div>

      <!-- Terrain -->
      <div style="flex:1;overflow:hidden;min-width:0;display:flex;align-items:flex-start;justify-content:center" id="match-field">
        <div style="width:min(calc(100vw - 52px), calc(100dvh - 470px));overflow:hidden;flex-shrink:0">
          ${Je(e.homeTeam,e.formation,e.phase,o,280,280)}
        </div>
      </div>
    </div>

    <!-- ZONE BAS : GC + BOUTON ACTION -->
    <div style="display:flex;align-items:flex-end;padding:6px 8px;background:rgba(0,0,0,0.35);gap:8px;flex-shrink:0;min-height:80px">

      <!-- Grille GC -->
      <div style="flex:1;display:grid;grid-template-columns:repeat(4,1fr);gap:3px;align-content:start">
        ${p.map(m=>{var E;return`
          <div class="gc-mini" data-gc-id="${m.id}" data-gc-type="${m.gc_type}"
            style="background:linear-gradient(135deg,#3d0a7a,#7a28b8);border:1px solid #9b59b6;border-radius:7px;padding:3px 2px;cursor:pointer;text-align:center">
            <div style="font-size:16px">${((E=de[m.gc_type])==null?void 0:E.icon)||"⚡"}</div>
            <div style="font-size:6px;color:#fff;font-weight:600;line-height:1.2">${m.gc_type.slice(0,8)}</div>
          </div>`}).join("")}
        ${u?`
          <div id="boost-card" style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:7px;padding:3px 2px;cursor:pointer;text-align:center">
            <div style="font-size:16px">⚡</div>
            <div style="font-size:6px;color:#000;font-weight:900">+${e.boostCard.value}</div>
          </div>`:""}
      </div>

      <!-- Bouton action principal -->
      <div style="flex-shrink:0">
        ${f?'<button id="btn-results" style="width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,#D4A017,#FFD700);border:3px solid #FFD700;color:#000;font-size:28px;cursor:pointer;display:flex;align-items:center;justify-content:center">🏁</button>':r?'<div style="width:68px;height:68px;border-radius:50%;background:rgba(255,255,255,0.08);border:3px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.3);font-size:26px;display:flex;align-items:center;justify-content:center">⏳</div>':d?`<button id="btn-action" style="width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,#c47a00,#FFD700);border:3px solid #FFD700;color:#fff;font-size:28px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px rgba(255,215,0,0.4)" ${e.selected.length===0?'disabled style="opacity:0.4;cursor:default"':""}>⚔️</button>`:c?`<button id="btn-action" style="width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:3px solid #87CEEB;color:#fff;font-size:28px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px rgba(135,206,235,0.4)" ${e.selected.length===0?'disabled style="opacity:0.4;cursor:default"':""}>🛡️</button>`:'<div style="width:68px;height:68px;border-radius:50%;background:rgba(255,255,255,0.05);border:3px solid rgba(255,255,255,0.1)"></div>'}
        ${d||c?`
        <div style="text-align:center;font-size:8px;color:rgba(255,255,255,0.4);margin-top:3px">
          ${e.selected.length}/3
        </div>`:""}
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
      ${e.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...e.log].reverse().map((m,E)=>`
          <div style="padding:8px 10px;border-radius:8px;background:${m.type==="goal"?"rgba(212,160,23,0.15)":"rgba(255,255,255,0.05)"};border-left:3px solid ${m.type==="goal"?"#FFD700":"rgba(255,255,255,0.15)"}">
            <span style="font-size:12px;color:${m.type==="goal"?"#FFD700":"rgba(255,255,255,0.8)"};font-weight:${m.type==="goal"?700:400}">${m.text}</span>
          </div>`).join("")}
    </div>
  </div>`,(g=document.getElementById("match-quit"))==null||g.addEventListener("click",()=>{confirm("Abandonner ? Résultat : défaite 3-0")&&(e.homeScore=0,e.aiScore=3,ie(t,e,i))}),(x=document.getElementById("view-ai"))==null||x.addEventListener("click",()=>Pt(e,i)),(y=document.getElementById("toggle-history"))==null||y.addEventListener("click",()=>{var m;(m=document.getElementById("match-history-panel"))==null||m.classList.add("open")}),(b=document.getElementById("close-history"))==null||b.addEventListener("click",()=>{var m;(m=document.getElementById("match-history-panel"))==null||m.classList.remove("open")}),(h=document.getElementById("btn-action"))==null||h.addEventListener("click",()=>{e.selected.length!==0&&(d?Gt(t,e,i):c&&Rt(t,e,i))}),(w=document.getElementById("btn-results"))==null||w.addEventListener("click",()=>ie(t,e,i)),t.querySelectorAll(".match-slot-hit").forEach(m=>{m.addEventListener("click",()=>Dt(m,e,t,i))}),t.querySelectorAll(".gc-mini").forEach(m=>{m.addEventListener("click",()=>Ot(m.dataset.gcId,m.dataset.gcType,t,e,i))}),(v=document.getElementById("boost-card"))==null||v.addEventListener("click",()=>Kt(t,e,i)),t.querySelectorAll(".sub-btn-col").forEach(m=>{m.addEventListener("click",()=>Ce(t,e,i,m.dataset.subId))}),($=document.getElementById("sub-btn-main"))==null||$.addEventListener("click",()=>Ce(t,e,i))}function Dt(t,e,i,o){const a=t.dataset.cardId,n=t.dataset.role,s=e.selected.findIndex(l=>l.cardId===a);if(s!==-1)e.selected.splice(s,1);else{if(e.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const l=(e.homeTeam[n]||[]).find(r=>r.cardId===a);l&&e.selected.push({...l,_role:n,_line:n})}G(i,e,o)}function Gt(t,e,i){const o=e.selected.map(n=>({...n,_line:n._role})),a=Ge(o,e.modifiers.home);e.pendingAttack={...a,players:[...e.selected],side:"home"},e.selected.forEach(n=>{const s=(e.homeTeam[n._role]||[]).find(l=>l.cardId===n.cardId);s&&(s.used=!0)}),e.log.push({text:`⚔️ Vous attaquez : ${a.total} (base ${a.base}${a.links?` +${a.links} liens`:""}) — ${e.selected.map(n=>n.name).join(", ")}`,type:"info"}),e.selected=[],e.modifiers.home={},e.phase="ai-defense",G(t,e,i),setTimeout(()=>Nt(t,e,i),1200)}function Rt(t,e,i){const o=e.selected.map(l=>({...l,_line:l._role})),a=Re(o,e.modifiers.home);e.selected.forEach(l=>{const r=(e.homeTeam[l._role]||[]).find(d=>d.cardId===l.cardId);r&&(r.used=!0)});const n=Ne(e.pendingAttack.total,a.total,e.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(e.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:S(l),job:l.job})),homePlayers:e.selected.map(l=>{const r=(e.homeTeam[l._role]||[]).find(d=>d.cardId===l.cardId)||l;return{name:r.name,note:r._line==="GK"?r.note_g:r._line==="MIL"?r.note_m:r.note_d,portrait:S(r),job:r.job}}),homeTotal:a.total,aiTotal:e.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(n.shielded)s.text="🛡️ Bouclier ! But annulé.",e.log.push(s);else if(n.goal){e.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${e.pendingAttack.total} > ${a.total})`,e.log.push(s),e.selected=[],e.modifiers.home={},e.pendingAttack=null,G(t,e,i),Qe(s.aiPlayers,e.homeScore,e.aiScore,!1,()=>{pe(t,e,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${a.total} ≥ ${e.pendingAttack.total})`,e.log.push(s);e.selected=[],e.modifiers.home={},e.pendingAttack=null,pe(t,e,i,"home-attack")}function ye(t,e,i){const o=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]],a=qe(o,"attack",e.difficulty);if(!a.length){Xe(t,e,i);return}const n=Ge(a,e.modifiers.ai);e.pendingAttack={...n,players:a,side:"ai"},a.forEach(s=>{s.used=!0}),e.log.push({text:`🤖 IA attaque : ${n.total} (${a.map(s=>s.name).join(", ")})`,type:"info"}),e.modifiers.ai={},e.phase="defense",G(t,e,i)}function Nt(t,e,i){const o=[...e.aiTeam.GK||[],...e.aiTeam.DEF||[],...e.aiTeam.MIL||[]],a=qe(o,"defense",e.difficulty),n=a.length>0?Re(a,e.modifiers.ai).total:0;a.forEach(r=>{r.used=!0});const s=Ne(e.pendingAttack.total,n,e.modifiers.ai),l={type:"duel",title:"Attaque",homePlayers:(e.pendingAttack.players||[]).map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:S(r),job:r.job})),aiPlayers:a.map(r=>({name:r.name,note:r._line==="GK"?r.note_g:r._line==="MIL"?r.note_m:r.note_d,portrait:S(r),job:r.job})),homeTotal:e.pendingAttack.total,aiTotal:n,isGoal:!1,homeScored:!1,text:""};if(s.shielded)l.text="🛡️ Bouclier IA !",e.log.push(l);else if(s.goal){e.homeScore++,l.isGoal=!0,l.homeScored=!0,l.text=`⚽ BUT ! (${e.pendingAttack.total} > ${n})`,e.log.push(l),e.modifiers.ai={},e.pendingAttack=null,G(t,e,i),Qe(l.homePlayers,e.homeScore,e.aiScore,!0,()=>{pe(t,e,i,"ai-attack")});return}else l.text=`🧤 IA défend (${n} ≥ ${e.pendingAttack.total})`,e.log.push(l);e.modifiers.ai={},e.pendingAttack=null,pe(t,e,i,"ai-attack")}function pe(t,e,i,o){if(e.round++,We(e)){ie(t,e,i);return}if(o==="home-attack"){if(![...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(n=>!n.used).length){if(![...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(s=>!s.used).length){ie(t,e,i);return}e.phase="ai-attack",G(t,e,i),setTimeout(()=>ye(t,e,i),800);return}e.phase="attack",G(t,e,i)}else{if(![...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(n=>!n.used).length){Xe(t,e,i);return}e.phase="ai-attack",G(t,e,i),setTimeout(()=>ye(t,e,i),800)}}function We(t){const e=["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(a=>!a.used)),i=["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(a=>!a.used));return!e&&!i}function Xe(t,e,i){We(e)?ie(t,e,i):(e.phase="attack",G(t,e,i))}function qt(t,e,i){const o=document.createElement("div");o.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const a=S(t),n=S(e),s=N[t.job]||"#555",l=N[e.job]||"#555",r=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a,d=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a;o.innerHTML=`
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
        <div style="width:80px;height:80px;border-radius:12px;background:${l};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${d}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${e.name}</div>
      </div>
    </div>
  `,document.body.appendChild(o),setTimeout(()=>{o.remove(),i()},2e3)}function Z(t,e="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${e};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=t,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function je(t){const e=S(t),i=N[t.job]||"#555",o={normal:"rgba(255,255,255,0.2)",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"}[t.rarity]||"rgba(255,255,255,0.2)",a=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;return`
  <div style="width:72px;overflow:hidden;border-radius:8px;border:2px solid ${o};background:rgba(0,0,0,0.5);flex-shrink:0">
    <div style="background:${i};padding:3px;text-align:center">
      <span style="font-size:14px;font-weight:900;color:#fff">${a}</span>
    </div>
    <div style="height:64px;position:relative;overflow:hidden;background:${i}44">
      ${e?`<img src="${e}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
    </div>
    <div style="padding:3px;background:rgba(0,0,0,0.6)">
      <div style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(t.name||"").slice(0,9)}</div>
      <div style="font-size:6px;color:rgba(255,255,255,0.4)">${t.job}</div>
    </div>
    <div style="height:2px;background:${o}"></div>
  </div>`}function Ce(t,e,i,o=null){if(e.phase!=="attack"){Z("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(e.usedSubIds||(e.usedSubIds=[]),e.subsUsed>=e.maxSubs){Z(`Maximum ${e.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const a=Object.values(e.homeTeam).flat().filter(c=>c.used),n=e.homeSubs.filter(c=>!e.usedSubIds.includes(c.cardId));if(!a.length){Z("Aucun joueur utilisé à remplacer");return}if(!n.length){Z("Aucun remplaçant disponible");return}let s=null,l=o||null;const r=document.createElement("div");r.id="sub-overlay",r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:700;display:flex;flex-direction:column;overflow:hidden";function d(){var c,f;r.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${e.subsUsed}/${e.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0;line-height:1">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:14px">
      <div style="font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase">Joueur à faire sortir (grisé)</div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:20px">
        ${a.map(p=>`
        <div class="grayed-pick" data-id="${p.cardId}" data-line="${p._line}"
          style="cursor:pointer;border-radius:10px;border:2px solid ${s===p.cardId?"#ff6b6b":"rgba(255,255,255,0.1)"};overflow:hidden;transition:border-color 0.15s">
          ${je(p)}
        </div>`).join("")}
      </div>
      <div style="font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase">Remplaçant à faire entrer</div>
      <div style="display:flex;flex-wrap:wrap;gap:10px">
        ${n.map(p=>`
        <div class="sub-pick" data-id="${p.cardId}"
          style="cursor:pointer;border-radius:10px;border:2px solid ${l===p.cardId?"#00ff88":"rgba(255,255,255,0.1)"};overflow:hidden;transition:border-color 0.15s">
          ${je(p)}
        </div>`).join("")}
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;
        background:${s&&l?"#1A6B3C":"rgba(255,255,255,0.08)"};
        color:${s&&l?"#fff":"rgba(255,255,255,0.25)"};
        font-size:15px;font-weight:900;cursor:${s&&l?"pointer":"default"}">
        ${s&&l?"✅ Confirmer le remplacement":"Sélectionnez un joueur sortant et entrant"}
      </button>
    </div>`,(c=document.getElementById("sub-close"))==null||c.addEventListener("click",()=>r.remove()),r.querySelectorAll(".grayed-pick").forEach(p=>{p.addEventListener("click",()=>{s=p.dataset.id,p.dataset.line,d()})}),r.querySelectorAll(".sub-pick").forEach(p=>{p.addEventListener("click",()=>{l=p.dataset.id,d()})}),(f=document.getElementById("sub-confirm"))==null||f.addEventListener("click",()=>{if(!s||!l)return;let p=null,u=-1;for(const[b,h]of Object.entries(e.homeTeam)){const w=(h||[]).findIndex(v=>v.cardId===s);if(w!==-1){p=b,u=w;break}}const g=e.homeSubs.find(b=>b.cardId===l);if(u===-1||!p||!g){Z("Erreur remplacement — réessaie","rgba(180,0,0,0.9)"),r.remove(),G(t,e,i);return}const x={...e.homeTeam[p][u]},y={...g,_line:p,_col:x._col,used:!1,boost:0};e.homeTeam[p].splice(u,1,y),e.usedSubIds||(e.usedSubIds=[]),e.usedSubIds.push(l),e.subsUsed++,e.selected=[],e.log.push({type:"sub",subSide:"home",outPlayer:{name:x.name,firstname:x.firstname,note:D(x,p),portrait:S(x),job:x.job},inPlayer:{name:g.name,firstname:g.firstname,note:D(g,p),portrait:S(g),job:g.job},text:`🔄 ${g.firstname} ${g.name} remplace ${x.firstname} ${x.name}`}),r.remove(),qt(x,g,()=>G(t,e,i))})}d(),document.body.appendChild(r)}function Ot(t,e,i,o,a){if(!o.usedGc.includes(t)){switch(o.usedGc.push(t),e){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{let n=!1;for(const s of["ATT","MIL","DEF","GK"]){const l=(o.homeTeam[s]||[]).find(r=>r.used);if(l){l.used=!1,n=!0;break}}o.log.push({text:n?"💫 Joueur ressuscité !":"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const n=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(s=>!s.used);if(n.length){const s=n.sort((l,r)=>D(r,"ATT")-D(l,"ATT"))[0];s.used=!0,o.log.push({text:`❄️ ${s.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}k.from("cards").delete().eq("id",t).then(()=>{}),G(i,o,a)}}function Kt(t,e,i){const o=Object.values(e.homeTeam).flat().filter(a=>!a.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${e.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${o.map(a=>`
        <div class="player-boost-opt" data-card-id="${a.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${N[a.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${D(a,a._line||a.job)}</div>
          <div style="flex:1"><b>${a.firstname} ${a.name}</b><div style="font-size:11px;color:#888">${a._line||a.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${e.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const l=(e.homeTeam[s]||[]).find(r=>r.cardId===n);if(l){l.boost=(l.boost||0)+e.boostCard.value,e.log.push({text:`⚡ Boost +${e.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}e.boostUsed=!0,i.closeModal(),G(t,e,i)})})}function Qe(t,e,i,o,a){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(r,d)=>`
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
    ${t.map(r=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${N[r.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${r.portrait?`<img src="${r.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(r.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(n);const l=()=>{n.remove(),a()};n.addEventListener("click",l),setTimeout(l,3500)}async function ie(t,e,i){var c,f;e.phase="finished";const{state:o}=i,a=e.homeScore>e.aiScore,n=e.homeScore===e.aiScore,s=a?"victoire":n?"nul":"defaite",l=nt(e.mode,s);e.matchId&&await k.from("matches").update({status:"finished",home_score:e.homeScore,away_score:e.aiScore,winner_id:a?o.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",e.matchId);const r={credits:(o.profile.credits||0)+l,matches_played:(o.profile.matches_played||0)+1};a?r.wins=(o.profile.wins||0)+1:n?r.draws=(o.profile.draws||0)+1:r.losses=(o.profile.losses||0)+1,await k.from("users").update(r).eq("id",o.profile.id),await i.refreshProfile();const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",d.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${a?"🏆":n?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${a?"Victoire !":n?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${e.homeScore} – ${e.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${l.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(d),(c=document.getElementById("res-home"))==null||c.addEventListener("click",()=>{d.remove(),i.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{d.remove(),i.navigate("match",{matchMode:e.mode})})}function Pt(t,e){e.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ye(t.aiTeam,t.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ht={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Ut(t,e){const{state:i,toast:o}=e;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await $e(t,e)}async function $e(t,e){const{state:i,toast:o}=e,{data:a}=await k.from("market_listings").select(`id, price, status, listed_at, seller_id,
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
  `;function l(r){const d=document.getElementById("mkt-content"),c=r==="buy"?s:n;if(c.length===0){d.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${r==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune carte en vente."}
      </div>`;return}d.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${c.map(f=>{var y,b,h;const p=(y=f.card)==null?void 0:y.player;if(!p)return"";const u=p.job==="GK"?p.note_g:p.job==="DEF"?p.note_d:p.job==="MIL"?p.note_m:p.note_a,g=Ht[p.rarity],x=(i.profile.credits||0)>=f.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px">
          <div style="width:44px;height:44px;border-radius:8px;background:${Jt(p.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${g};flex-shrink:0">${u}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${p.firstname} ${p.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${p.country_code} · ${((b=p.clubs)==null?void 0:b.encoded_name)||"—"} · ${p.rarity} · ${p.job}</div>
            <div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((h=f.seller)==null?void 0:h.pseudo)||"—"}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${f.price.toLocaleString("fr")}</div>
            ${r==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${f.id}" ${x?"":"disabled"} style="margin-top:4px">${x?"Acheter":"Trop cher"}</button>`:`<button class="btn btn-danger btn-sm" data-cancel="${f.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,d.querySelectorAll("[data-buy]").forEach(f=>{f.addEventListener("click",()=>Vt(f.dataset.buy,c,t,e))}),d.querySelectorAll("[data-cancel]").forEach(f=>{f.addEventListener("click",()=>Yt(f.dataset.cancel,t,e))})}l("buy"),t.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{t.querySelectorAll(".mkt-tab").forEach(d=>{const c=d===r;d.style.background=c?"var(--green)":"#fff",d.style.color=c?"#fff":"var(--gray-600)",d.style.borderColor=c?"var(--green)":"var(--gray-200)"}),l(r.dataset.tab)})})}async function Vt(t,e,i,o){const{state:a,toast:n,refreshProfile:s}=o,l=e.find(r=>r.id===t);if(l){if((a.profile.credits||0)<l.price){n("Crédits insuffisants","error");return}if(confirm(`Acheter ${l.card.player.firstname} ${l.card.player.surname_encoded} pour ${l.price.toLocaleString("fr")} crédits ?`))try{const{error:r}=await k.from("cards").update({owner_id:a.profile.id,is_for_sale:!1,sale_price:null}).eq("id",l.card.id);if(r)throw r;await k.from("market_listings").update({status:"sold",buyer_id:a.profile.id,sold_at:new Date().toISOString()}).eq("id",t),await k.from("users").update({credits:(a.profile.credits||0)-l.price}).eq("id",a.profile.id);const{data:d}=await k.from("users").select("credits").eq("id",l.seller_id).single();d&&await k.from("users").update({credits:(d.credits||0)+l.price}).eq("id",l.seller_id),await k.from("notifications").insert({user_id:l.seller_id,type:"card_sold",message:`Ta carte ${l.card.player.surname_encoded} a été vendue pour ${l.price} crédits !`,data:{card_id:l.card.id,price:l.price}}),await s(),n("Carte achetée ! ✅","success"),$e(i,o)}catch(r){n("Erreur : "+r.message,"error")}}}async function Yt(t,e,i){const{toast:o}=i,{data:a}=await k.from("market_listings").select("card_id").eq("id",t).single();await k.from("market_listings").update({status:"cancelled"}).eq("id",t),a&&await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",a.card_id),o("Annonce retirée","success"),$e(e,i)}function Jt(t){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[t]||"#888"}async function Wt(t,{state:e,navigate:i,toast:o}){t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await k.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);t.innerHTML=`
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
  `}const j={user:null,profile:null,page:"home",params:{}};function re(t,e="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=t,o.className=`show ${e}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function Xt(t,e,i=""){document.getElementById("modal-title").textContent=t,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function xe(){document.getElementById("modal-overlay").classList.add("hidden")}async function ae(){if(!j.user)return;const{data:t}=await k.from("users").select("*").eq("id",j.user.id).single();t&&(j.profile=t)}const ke="mw_theme";function fe(){return localStorage.getItem(ke)||"light"}function Qt(t){var e;localStorage.setItem(ke,t),me(t),(e=j.profile)!=null&&e.id&&k.from("users").update({theme:t}).eq("id",j.profile.id).then(()=>{})}function me(t){document.documentElement.setAttribute("data-theme",t)}function se(t,e={}){j.page=t,j.params=e,Ze()}async function Ze(){const t=document.getElementById("page-content");if(!t)return;document.querySelectorAll(".bottom-nav a").forEach(o=>{o.classList.toggle("active",o.dataset.page===j.page)});const e=document.getElementById("nav-credits");e&&j.profile&&(e.textContent=`💰 ${(j.profile.credits||0).toLocaleString("fr")}`);const i={state:j,navigate:se,toast:re,openModal:Xt,closeModal:xe,refreshProfile:ae};switch(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',j.page){case"home":await Ie(t,i);break;case"collection":await dt(t,i);break;case"decks":await Pe(t,i);break;case"boosters":await bt(t,i);break;case"match":await jt(t,i);break;case"market":await Ut(t,i);break;case"rankings":await Wt(t,i);break;default:await Ie(t,i)}}function Zt(){const t=document.getElementById("app"),e=j.profile;if(!e)return;const i="/manager-wars/icons/";t.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(o=>{o.addEventListener("click",a=>{a.preventDefault(),se(o.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>se("home")),document.getElementById("nav-credits").addEventListener("click",()=>se("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const a=fe()==="dark"?"light":"dark";Qt(a),Be(a)}),Be(fe())}function Be(t){const e=document.getElementById("theme-icon");e&&(e.textContent=t==="dark"?"☀️":"🌙")}async function ei(){me(fe()),document.getElementById("modal-overlay").addEventListener("click",e=>{e.target===e.currentTarget&&xe()}),document.getElementById("modal-close").addEventListener("click",xe);const{data:{session:t}}=await k.auth.getSession();if(!t){Fe(),_e(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:re});return}j.user=t.user,await ae(),Fe();try{const{data:e}=await k.from("formation_links_overrides").select("formation, links"),i={};(e||[]).forEach(o=>{i[o.formation]=o.links}),et(i)}catch(e){console.warn("Impossible de charger les overrides de formation:",e)}if(!j.profile){tt(document.getElementById("app"),{state:j,navigate:async()=>{await ae(),Se()},toast:re,refreshProfile:ae});return}j.profile.theme&&j.profile.theme!==fe()&&(localStorage.setItem(ke,j.profile.theme),me(j.profile.theme)),Se(),k.auth.onAuthStateChange(async(e,i)=>{e==="SIGNED_OUT"&&(j.user=null,j.profile=null,document.getElementById("app").innerHTML="",_e(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:re}))})}function Se(){const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Zt(),Ze()}function Fe(){const t=document.getElementById("app-loader"),e=document.getElementById("app");e&&(e.style.display=""),t&&(t.classList.add("zoom-out"),setTimeout(()=>t.style.display="none",500))}ei();
