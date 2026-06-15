import{s as w,l as Y,F as Z,b as be,c as ue,d as Ze}from"./formation-links-BXiJqmnj.js";function Ee(t,{navigate:e,toast:i}){t.innerHTML=`
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
  `,t.querySelectorAll(".auth-tab").forEach(o=>{o.addEventListener("click",()=>{t.querySelectorAll(".auth-tab").forEach(r=>r.classList.remove("active")),o.classList.add("active"),document.getElementById("tab-login").style.display=o.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=o.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const o=document.getElementById("login-email").value.trim(),r=document.getElementById("login-password").value,n=document.getElementById("login-error");if(n.textContent="",!o||!r){n.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:d}=await w.auth.signInWithPassword({email:o,password:r});if(a.textContent="Se connecter",a.disabled=!1,d){n.textContent=d.message.includes("Invalid")?"Email ou mot de passe incorrect.":d.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",o=>{o.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const o=document.getElementById("reg-email").value.trim(),r=document.getElementById("reg-password").value,n=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!o||!r||!n){a.textContent="Remplissez tous les champs.";return}if(r.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(r!==n){a.textContent="Les mots de passe ne correspondent pas.";return}const d=document.getElementById("reg-btn");d.textContent="Création…",d.disabled=!0;const{error:s}=await w.auth.signUp({email:o,password:r});if(d.textContent="Créer mon compte",d.disabled=!1,s){a.textContent=s.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=o})}function et(t,{state:e,navigate:i,toast:o,refreshProfile:r}){let n="#1A6B3C",a="#D4A017";t.innerHTML=`
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
  `;function d(){var x;const l=document.getElementById("logo-preview"),c=document.getElementById("logo-initials"),u=((x=document.getElementById("setup-club"))==null?void 0:x.value)||"MW",f=u.trim().split(" ").filter(Boolean),g=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():u.slice(0,2).toUpperCase();l&&(l.style.background=a,l.style.borderColor=n),c&&(c.textContent=g,c.style.color=n)}document.getElementById("color1").addEventListener("input",l=>{n=l.target.value,document.getElementById("swatch1").style.background=n,d()}),document.getElementById("color2").addEventListener("input",l=>{a=l.target.value,document.getElementById("swatch2").style.background=a,d()});function s(l){document.querySelectorAll(".setup-step").forEach(c=>c.classList.remove("active")),document.getElementById(`step-${l}`).classList.add("active"),document.getElementById("step-num").textContent=l,document.getElementById("progress-fill").style.width=`${Math.round(l/3*100)}%`,l===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("step1-error");if(c.textContent="",l.length<3){c.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await w.from("users").select("id").eq("pseudo",l).maybeSingle();if(u){c.textContent="Ce pseudo est déjà pris.";return}s(2)}),document.getElementById("step2-back").addEventListener("click",()=>s(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const l=document.getElementById("setup-club").value.trim(),c=document.getElementById("step2-error");if(c.textContent="",l.length<2){c.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await w.from("users").select("id").eq("club_name",l).maybeSingle();if(u){c.textContent="Ce nom de club est déjà pris.";return}s(3)}),document.getElementById("step3-back").addEventListener("click",()=>s(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),f=document.getElementById("step3-finish");u.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:g}=await w.from("users").insert({id:e.user.id,pseudo:l,club_name:c,club_color1:n,club_color2:a,credits:1e4});if(g)throw g;await tt(e.user.id),await r(),o(`Bienvenue ${l} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){u.textContent=g.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function tt(t){const{data:e}=await w.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!e||e.length===0)return;const i=e,o=i.filter(s=>s.job==="GK"),r=i.filter(s=>s.job!=="GK"),n=[];for(let s=0;s<5;s++){let l=[];if(s===0&&o.length>0){const c=o[Math.floor(Math.random()*o.length)];l.push(c);const u=Ie([...r]).slice(0,3);l.push(...u)}else l=Ie([...i]).slice(0,4);l.forEach(c=>{n.push({owner_id:t,player_id:c.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(s=>{n.push({owner_id:t,card_type:"game_changer",gc_type:s})});const d=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];n.push({owner_id:t,card_type:"formation",formation:d[Math.floor(Math.random()*d.length)]}),n.length>0&&await w.from("cards").insert(n),await w.from("users").update({first_booster_opened:!0}).eq("id",t)}function Ie(t){for(let e=t.length-1;e>0;e--){const i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}async function Te(t,{state:e,navigate:i,toast:o}){var a;const r=e.profile;if(!r)return;const{data:n}=await w.from("matches").select("id,home_score,away_score,status,mode,winner_id,created_at").or(`home_id.eq.${r.id},away_id.eq.${r.id}`).eq("status","finished").order("created_at",{ascending:!1}).limit(3);t.innerHTML=`
  <div class="page">
    <div class="page-body">

      <!-- Bandeau pseudo (couleurs du club) -->
      <div class="hero hero-compact" style="background:${r.club_color1};border:2px solid ${r.club_color2}">
        <button class="nav-rankings-btn" id="nav-rankings" title="Classement">
          <img src="/manager-wars/icons/badge-trophy.png" alt="Classement">
        </button>
        <div class="info">
          <h3 style="margin:0">${r.pseudo}</h3>
          <div class="level">Niveau ${r.level} · ${r.club_name}</div>
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
          ${n.map(d=>{const s=d.winner_id===r.id,l=d.home_score===d.away_score,c=l?"N":s?"V":"D",u=l?"#888":s?"#1A6B3C":"#c0392b",f={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat"}[d.mode]||d.mode,x=new Date(d.created_at).toLocaleDateString("fr",{month:"short",day:"numeric"});return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
              <div>
                <div style="font-size:13px;font-weight:600">${f}</div>
                <div style="font-size:11px;color:var(--gray-600)">${x}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <span style="font-size:14px;font-weight:700">${d.home_score} - ${d.away_score}</span>
                <span style="background:${u};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${c}</span>
              </div>
            </div>`}).join("")}
        </div>
      </div>`:""}

      <!-- Logout -->
      <div style="text-align:center;padding:12px 0;display:flex;flex-direction:column;gap:8px;align-items:center">
        <button class="btn btn-ghost btn-sm" id="logout-btn" style="color:var(--gray-600)">Déconnexion</button>
        ${r.is_admin?`
        <a href="/manager-wars/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:6px 16px;border-radius:8px">
          ⚙️ Admin Editor
        </a>`:""}
      </div>

    </div>
  </div>
  `,t.querySelectorAll("[data-nav]").forEach(d=>{d.addEventListener("click",s=>{s.preventDefault(),i(d.dataset.nav)})}),(a=document.getElementById("nav-rankings"))==null||a.addEventListener("click",()=>i("rankings")),t.querySelectorAll("[data-action]").forEach(d=>{d.addEventListener("click",()=>{if(d.classList.add("tapped"),setTimeout(()=>d.classList.remove("tapped"),200),d.dataset.action==="match-ai"){it(i);return}o("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await w.auth.signOut(),window.location.reload()})}function it(t){const e=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${e.map(r=>`
            <div class="action-card" data-mode="${r.mode}" style="cursor:pointer">
              <div class="icon">${r.icon}</div>
              <div class="label">${r.label}</div>
              <div class="sub">${r.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",o),i.addEventListener("click",r=>{r.target===i&&o()}),i.querySelectorAll("[data-mode]").forEach(r=>{r.addEventListener("click",()=>{o(),t("match",{matchMode:r.dataset.mode})})})}const de={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function F(t,e){if(!t)return 0;switch(e){case"GK":return Number(t.note_g)||0;case"DEF":return Number(t.note_d)||0;case"MIL":return Number(t.note_m)||0;case"ATT":return Number(t.note_a)||0;default:return 0}}function De(t){let e=0;for(let i=0;i<t.length-1;i++){const o=t[i],r=t[i+1];if(!o||!r)continue;const n=Y(o,r);n==="#00ff88"?e+=2:n==="#FFD700"&&(e+=1)}return e}function Ge(t,e={}){const i=t.reduce((n,a)=>{const d=a._line||a.job;return n+(Number(d==="MIL"?a.note_m:a.note_a)||0)},0),o=De(t);let r=i+o;return e.doubleAttack&&(r*=2),e.stolenNote&&(r-=e.stolenNote),{base:i,links:o,total:Math.max(0,r)}}function Re(t,e={}){const i=t.reduce((n,a)=>{const d=a._line||a.job;let s=0;return d==="GK"?s=Number(a.note_g)||0:d==="MIL"?s=Number(a.note_m)||0:s=Number(a.note_d)||0,n+s},0),o=De(t);let r=i+o;return e.stolenNote&&(r-=e.stolenNote),{base:i,links:o,total:Math.max(0,r)}}function Ne(t,e,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:t>e,shielded:!1}}function qe(t,e,i="easy"){const o=t.filter(a=>!a.used);if(!o.length)return[];const r=[...o].sort((a,d)=>{const s=e==="attack"?F(a,"ATT"):a._line==="GK"?F(a,"GK"):F(a,"DEF");return(e==="attack"?F(d,"ATT"):d._line==="GK"?F(d,"GK"):F(d,"DEF"))-s});let n=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return r.slice(0,Math.min(n,r.length,3))}function ot(t,e){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[t]||i.vs_ai_easy)[e]||0}const Oe={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},le={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},oe=["GK","DEF","MIL","ATT"],nt=["Tous","GK","DEF","MIL","ATT"],rt={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},he={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Pe(t){const e="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(t!=null&&t.skin)||!(t!=null&&t.hair))return null;const i=t.hair==="chauve"?`${t.skin}-chauve-rase`:`${t.skin}-${t.hair}-${t.hair_length}`;return`${e}/storage/v1/object/public/assets/tetes/${i}.png`}function ee(t,e){return t&&Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Ae(t,e=""){var u,f;const i=t.player;if(!i)return"";const o=i.job||"ATT",r=le[o],n=Oe[i.rarity]||"#ccc",a=ee(i,o),d=i.job2?ee(i,i.job2):null,s=i.job2?le[i.job2]:null,l=Pe(i),c=he[i.country_code]||i.country_code||"";return`
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
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${r}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${r}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${a}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${d!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${s}" stroke="white" stroke-width="1.5"/>
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${c}</div>
        ${(u=i.clubs)!=null&&u.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=i.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function at(t){const e=t.job||"ATT",i=ee(t,e),o=he[t.country_code]||t.country_code||"";return`
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
  </div>`}async function st(t,e){const{state:i,navigate:o,toast:r,openModal:n,closeModal:a}=e;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await w.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:s}=await w.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),l=(d||[]).filter(E=>E.card_type==="player"&&E.player),c=(d||[]).filter(E=>E.card_type==="game_changer"),u=(d||[]).filter(E=>E.card_type==="formation"),f=Object.keys(Z),g=Object.keys(de),x={};l.forEach(E=>{const T=E.player.id;x[T]=(x[T]||0)+1});const $=new Set(Object.keys(x).map(E=>String(E))),h=new Set(u.map(E=>E.formation)),k=new Set(c.map(E=>E.gc_type));let v="player",m="Tous",y="",p=!1;function b(){return[...l].sort((E,T)=>{const A=oe.indexOf(E.player.job),j=oe.indexOf(T.player.job);return A!==j?A-j:(E.player.surname_encoded||"").localeCompare(T.player.surname_encoded||"")})}function _(){return[...s||[]].sort((E,T)=>{const A=oe.indexOf(E.job),j=oe.indexOf(T.job);return A!==j?A-j:(E.surname_encoded||"").localeCompare(T.surname_encoded||"")})}function I(){return b().filter(E=>{const T=E.player,A=m==="Tous"||T.job===m,j=!y||`${T.firstname} ${T.surname_encoded}`.toLowerCase().includes(y);return A&&j})}function L(){return _().filter(E=>{const T=m==="Tous"||E.job===m,A=!y||`${E.firstname} ${E.surname_encoded}`.toLowerCase().includes(y);return T&&A})}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Ma collection</h2>
      <p>${l.length} carte(s) joueur · ${c.length} Game Changer · ${u.length} Formation</p>
    </div>

    <!-- Onglets -->
    <div style="display:flex;border-bottom:1px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${v==="player"?"var(--green)":"transparent"};
        color:${v==="player"?"var(--green)":"var(--gray-600)"}">Joueurs</button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${v==="formation"?"var(--green)":"transparent"};
        color:${v==="formation"?"var(--green)":"var(--gray-600)"}">Formations</button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${v==="gc"?"var(--green)":"transparent"};
        color:${v==="gc"?"var(--green)":"var(--gray-600)"}">Game Changer</button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grille cartes -->
    <div class="page-body">
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-start" id="col-grid"></div>
    </div>
  </div>`;function M(){const E=document.getElementById("col-filters");E&&(v==="player"?(E.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${y}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${nt.map(T=>`
            <button class="filter-btn" data-job="${T}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${T===m?"var(--green)":"var(--gray-200)"};
                background:${T===m?"var(--green)":"#fff"};
                color:${T===m?"#fff":"var(--gray-600)"}">
              ${T}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${p?"var(--yellow)":"var(--gray-200)"};
              background:${p?"var(--yellow)":"#fff"};
              color:${p?"#fff":"var(--gray-600)"}">
            ${p?"✓ Tout afficher":"Voir tout"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",T=>{y=T.target.value.toLowerCase(),z()}),t.querySelectorAll(".filter-btn").forEach(T=>{T.addEventListener("click",()=>{m=T.dataset.job,M(),z()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{p=!p,M(),z()})):(E.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${p?"var(--yellow)":"var(--gray-200)"};
              background:${p?"var(--yellow)":"#fff"};
              color:${p?"#fff":"var(--gray-600)"}">
            ${p?"✓ Tout afficher":"Voir tout"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{p=!p,M(),z()})))}function z(){const E=document.getElementById("col-grid");E&&(v==="player"?C(E):v==="formation"?N(E):O(E))}function C(E){if(p){const T=L();if(!T.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}E.innerHTML=T.map(A=>{if($.has(String(A.id))){const S=l.find(H=>H.player.id===A.id),D=x[A.id]||1,q=D>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${D}</div>`:"",K=l.filter(H=>H.player.id===A.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Ae(S,q+K)}return at(A)}).join("")}else{const T=I();if(!T.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const A={},j=[];T.forEach(S=>{const D=S.player.id;A[D]||(A[D]=!0,j.push(S))}),E.innerHTML=j.map(S=>{const D=x[S.player.id]||1,q=D>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${D}</div>`:"",K=l.filter(H=>H.player.id===S.player.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Ae(S,q+K)}).join("")}E.querySelectorAll("[data-card-id]").forEach(T=>{T.addEventListener("click",()=>{const A=l.find(j=>j.id===T.dataset.cardId);A&&ct(A,l,x,e)})})}function N(E){const T=p?f:[...h];if(!T.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}E.innerHTML=T.map(A=>{if(h.has(A)){const S=u.find(P=>P.formation===A),D=u.filter(P=>P.formation===A).length,q=D>1?`<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${D}</div>`:"";return`
          <div data-form-id="${S.id}" style="
            position:relative;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border:2px solid #2a8f52;
            border-radius:12px;padding:12px;color:#fff;min-width:100px;width:140px;flex-shrink:0;cursor:pointer;
            display:flex;flex-direction:column;gap:4px;align-items:flex-start">
            ${q}
            <div style="font-size:28px">🏟️</div>
            <div style="font-size:8px;background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:10px;width:fit-content;letter-spacing:.4px">FORMATION</div>
            <div style="font-weight:900;font-size:18px">${A}</div>
          </div>`}return`
        <div style="
          background:#ccc;border:2px solid #bbb;border-radius:12px;padding:12px;color:#888;
          min-width:100px;width:140px;flex-shrink:0;display:flex;flex-direction:column;gap:4px;align-items:flex-start;
          filter:grayscale(1);opacity:0.45">
          <div style="font-size:28px">🏟️</div>
          <div style="font-size:8px;background:rgba(0,0,0,0.1);padding:2px 6px;border-radius:10px;width:fit-content;letter-spacing:.4px">FORMATION</div>
          <div style="font-weight:900;font-size:18px">${A}</div>
        </div>`}).join(""),E.querySelectorAll("[data-form-id]").forEach(A=>{A.addEventListener("click",()=>{const j=u.find(S=>S.id===A.dataset.formId);j&&lt(j,u,e,n)})})}function O(E){const T=p?g:[...k];if(!T.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}E.innerHTML=T.map(A=>{const j=k.has(A),S=de[A]||{icon:"⚡"};if(j){const D=c.find(K=>K.gc_type===A),q=c.filter(K=>K.gc_type===A).length,P=q>1?`<div style="position:absolute;top:4px;right:4px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${q}</div>`:"";return`
          <div data-gc-id="${D.id}" data-gc-type="${A}" style="
            position:relative;background:linear-gradient(135deg,#3d0a7a,#7a28b8);border:2px solid #9b59b6;
            border-radius:12px;padding:12px;color:#fff;min-width:120px;width:140px;flex-shrink:0;cursor:pointer;
            display:flex;flex-direction:column;gap:4px">
            ${P}
            <div style="font-size:28px">${S.icon}</div>
            <div style="font-size:8px;background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:10px;width:fit-content;letter-spacing:.4px">GAME CHANGER</div>
            <div style="font-weight:700;font-size:13px">${A}</div>
          </div>`}return`
        <div style="
          background:#ccc;border:2px solid #bbb;border-radius:12px;padding:12px;color:#888;
          min-width:120px;width:140px;flex-shrink:0;display:flex;flex-direction:column;gap:4px;
          filter:grayscale(1);opacity:0.45">
          <div style="font-size:28px">${S.icon}</div>
          <div style="font-size:8px;background:rgba(0,0,0,0.1);padding:2px 6px;border-radius:10px;width:fit-content;letter-spacing:.4px">GAME CHANGER</div>
          <div style="font-weight:700;font-size:13px">${A}</div>
        </div>`}).join(""),E.querySelectorAll("[data-gc-id]").forEach(A=>{A.addEventListener("click",()=>dt(A.dataset.gcType,n))})}t.querySelectorAll(".col-tab-btn").forEach(E=>{E.addEventListener("click",()=>{v=E.dataset.tab,m="Tous",y="",p=!1,t.querySelectorAll(".col-tab-btn").forEach(T=>{const A=T.dataset.tab===v;T.style.borderBottomColor=A?"var(--green)":"transparent",T.style.color=A?"var(--green)":"var(--gray-600)"}),M(),z()})}),M(),z()}function dt(t,e){const i=de[t]||{icon:"⚡",desc:"Effet spécial."};e("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const X=1e3;function lt(t,e,i,o){var $,h,k;const{state:r,toast:n,closeModal:a,navigate:d,refreshProfile:s}=i,l=t.formation,c={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const v=be[l]||{},m=Z[l]||[],y=290,p=360,b=20;function _(L){const M=v[L];return M?{x:M.x*y,y:M.y*p}:null}let I=`<svg width="${y}" height="${p}" viewBox="0 0 ${y} ${p}" xmlns="http://www.w3.org/2000/svg">`;for(const[L,M]of m){const z=_(L),C=_(M);!z||!C||(I+=`<line x1="${z.x}" y1="${z.y}" x2="${C.x}" y2="${C.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const L of Object.keys(v)){const M=_(L);if(!M)continue;const z=L.replace(/\d+/,""),C=c[z]||"#555";I+=`<circle cx="${M.x}" cy="${M.y}" r="${b}" fill="${C}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,I+=`<text x="${M.x}" y="${M.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${z}</text>`}return I+="</svg>",I}const f=e.filter(v=>v.formation===l),g=f.length,x=!t.is_for_sale;o(`Formation ${l}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${u()}
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${X.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${g-1} carte${g-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${g<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${x?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${X}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${t.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),($=document.getElementById("direct-sell-form-btn"))==null||$.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${l} pour ${X.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const v=f.find(y=>!y.is_for_sale)||f[0];if(!v){n("Aucune carte à vendre","error");return}const{error:m}=await w.from("cards").delete().eq("id",v.id);if(m){n(m.message,"error");return}await w.from("users").update({credits:(r.profile.credits||0)+X}).eq("id",r.profile.id),await s(),n(`+${X.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),d("collection")}),(h=document.getElementById("market-sell-form-btn"))==null||h.addEventListener("click",async()=>{const v=parseInt(document.getElementById("sell-price-form").value);if(!v||v<1){n("Prix invalide","error");return}await w.from("cards").update({is_for_sale:!0,sale_price:v}).eq("id",t.id),await w.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:v}),n("Carte mise en vente sur le marché !","success"),a(),d("collection")}),(k=document.getElementById("cancel-sell-form-btn"))==null||k.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),a(),d("collection")})}function ct(t,e,i,o){var b,_,I,L,M,z;const{state:r,toast:n,openModal:a,closeModal:d,navigate:s,refreshProfile:l}=o,c=t.player,u=e.filter(C=>C.player.id===c.id),f=u.length,g=rt[c.rarity]||1e3,x=c.rarity!=="legende",$=Pe(c),h=ee(c,c.job),k=c.job2?ee(c,c.job2):null,v=le[c.job]||"#1A6B3C",m=c.job2?le[c.job2]:null,y=Oe[c.rarity]||"#ccc",p=he[c.country_code]||c.country_code||"";a(`${c.firstname} ${c.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${y};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${c.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(c.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${v}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${v}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${h}</text>
            </svg>
            ${k!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${m}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${k}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${$?`<img src="${$}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${c.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${p}</div>
            ${(b=c.clubs)!=null&&b.logo_url?`<img src="${c.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((_=c.clubs)==null?void 0:_.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${y}">${c.rarity.toUpperCase()}</div>
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${g.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${f-1} carte${f-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${f<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${x&&!t.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(I=document.getElementById("close-detail"))==null||I.addEventListener("click",d),(L=document.getElementById("direct-sell-btn"))==null||L.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${c.surname_encoded} pour ${g.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const C=u.find(O=>!O.is_for_sale)||u[0];if(!C){n("Aucune carte à vendre","error");return}const{error:N}=await w.from("cards").delete().eq("id",C.id);if(N){n(N.message,"error");return}await w.from("users").update({credits:(r.profile.credits||0)+g}).eq("id",r.profile.id),await l(),n(`+${g.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),s("collection")}),(M=document.getElementById("market-sell-btn"))==null||M.addEventListener("click",async()=>{const C=parseInt(document.getElementById("sell-price").value);if(!C||C<1){n("Prix invalide","error");return}await w.from("cards").update({is_for_sale:!0,sale_price:C}).eq("id",t.id),await w.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:C}),n("Carte mise en vente sur le marché !","success"),d(),s("collection")}),(z=document.getElementById("cancel-sell-btn"))==null||z.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),d(),s("collection")})}const ce={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},V={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function we(t){const e=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!e||!(t!=null&&t.skin)||!(t!=null&&t.hair))return null;const i=t.hair==="chauve"?`${t.skin}-chauve-rase`:`${t.skin}-${t.hair}-${t.hair_length}`;return`${e}/storage/v1/object/public/assets/tetes/${i}.png`}async function ge(t,e){const{state:i,navigate:o,toast:r}=e;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await w.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});t.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!a)return;const{data:d,error:s}=await w.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(s){r(s.message,"error");return}r("Deck créé !","success"),Le(d.id,t,e)}),t.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Le(a.dataset.openDeck,t,e))}),t.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const d=prompt("Nouveau nom :",a.dataset.name);if(!d||d===a.dataset.name)return;const{error:s}=await w.from("decks").update({name:d}).eq("id",a.dataset.rename);if(s){r(s.message,"error");return}r("Deck renommé !","success"),ge(t,e)})}),t.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await w.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:d}=await w.from("decks").delete().eq("id",a.dataset.delete);if(d){r(d.message,"error");return}r("Deck supprimé.","success"),ge(t,e)})})}async function Le(t,e,i){const{state:o,toast:r}=i;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await w.from("decks").select("*").eq("id",t).single(),{data:a}=await w.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),d=(a||[]).filter(g=>g.card_type==="player"&&g.player),s=(a||[]).filter(g=>g.card_type==="formation"),l=s.map(g=>g.formation).filter(Boolean),{data:c}=await w.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",t);let u=n.formation||"4-4-2";l.length>0&&!l.includes(u)&&(u=l[0]);const f={deckId:t,name:n.name,formation:u,formationCardId:n.formation_card_id,slots:{},subs:[],playerCards:d,formationCards:s,availableFormations:l};(c||[]).forEach(g=>{g.is_starter?f.slots[g.position]=g.card_id:f.subs.includes(g.card_id)||f.subs.push(g.card_id)}),J(e,f,i)}function J(t,e,i){var s;const{navigate:o}=i;ce[e.formation];const r=Me(e.formation),n=r.filter(l=>e.slots[l]).length,a=e.availableFormations.length>0?e.availableFormations:Object.keys(ce),d=e.subs.map(l=>e.playerCards.find(c=>c.id===l)).filter(Boolean);[...Object.values(e.slots),...e.subs],t.innerHTML=`
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
        ${a.map(l=>`<option value="${l}" ${l===e.formation?"selected":""}>${l}</option>`).join("")}
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
        ${d.map(l=>{const c=l.player;return`<div style="display:flex;align-items:center;gap:6px;background:#f5f5f5;border-radius:8px;padding:4px 8px;font-size:12px">
            <span style="background:${V[c.job]};color:#fff;border-radius:4px;padding:1px 5px;font-size:10px;font-weight:700">${c.job}</span>
            ${c.firstname} ${c.surname_encoded}
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
  </div>`,pt(t,e,r,i),document.getElementById("builder-back").addEventListener("click",()=>o("decks")),document.getElementById("formation-select").addEventListener("change",l=>{e.formation=l.target.value;const c=Me(e.formation),u={};c.forEach(f=>{e.slots[f]&&(u[f]=e.slots[f])}),e.slots=u,J(t,e,i)}),document.getElementById("save-deck").addEventListener("click",()=>gt(e,i)),t.querySelectorAll("[data-remove-sub]").forEach(l=>{l.addEventListener("click",()=>{e.subs=e.subs.filter(c=>c!==l.dataset.removeSub),J(t,e,i)})}),(s=document.getElementById("add-sub-btn"))==null||s.addEventListener("click",()=>{ut(e,t,i)})}function pt(t,e,i,o){const r=document.getElementById("deck-field");if(!r)return;const n=e.formation,a=be[n]||{},d=ue?ue(n)||Z[n]||[]:Z[n]||[],s={};i.forEach(m=>{const y=e.slots[m],p=y?e.playerCards.find(b=>b.id===y):null;s[m]=(p==null?void 0:p.player)||null});const l=i.filter(m=>m.startsWith("MIL"));let c=0,u=0;l.forEach(m=>{const y=s[m];y&&(c+=Number(y.note_m)||0)}),d.forEach(([m,y])=>{if(!m.startsWith("MIL")||!y.startsWith("MIL"))return;Y(s[m],s[y])!=="#ff3333"&&u++});const f=320,g=320,x=28,$=4;function h(m){const y=a[m];return y?{x:y.x*f,y:y.y*g}:null}let k="";for(const[m,y]of d){const p=h(m),b=h(y);if(!p||!b)continue;const _=s[m],I=s[y],L=Y(_,I);if(L==="#00ff88"||L==="#FFD700")k+=`<line x1="${p.x}" y1="${p.y}" x2="${b.x}" y2="${b.y}"
        stroke="${L}" stroke-width="${$*3}" stroke-linecap="round" opacity="0.25"/>`,k+=`<line x1="${p.x}" y1="${p.y}" x2="${b.x}" y2="${b.y}"
        stroke="${L}" stroke-width="${$}" stroke-linecap="round" opacity="0.95"/>`;else{const z=L==="#ff3333"||L==="#cc2222"?.75:.9;k+=`<line x1="${p.x}" y1="${p.y}" x2="${b.x}" y2="${b.y}"
        stroke="${L}" stroke-width="${$}" stroke-linecap="round" opacity="${z}"/>`}}for(const m of i){const y=h(m);if(!y)continue;const p=s[m],b=m.replace(/\d+/,""),I={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b]||"#555",L=p?Number(b==="GK"?p.note_g:b==="DEF"?p.note_d:b==="MIL"?p.note_m:p.note_a)||0:null,M=p?(p.surname_encoded||"").slice(0,8).toUpperCase():"";if(p){const z=we(p);z&&(k+=`
          <defs>
            <clipPath id="clip-${m}">
              <circle cx="${y.x}" cy="${y.y}" r="${x}"/>
            </clipPath>
          </defs>
          <image href="${z}" x="${y.x-x}" y="${y.y-x}" width="${x*2}" height="${x*2}"
            clip-path="url(#clip-${m})" preserveAspectRatio="xMidYMid slice" opacity="0.85"/>`),k+=`
        <circle cx="${y.x}" cy="${y.y}" r="${x}" fill="${z?"transparent":I}"
          stroke="${I}" stroke-width="2" />
        <circle cx="${y.x}" cy="${y.y}" r="${x}" fill="${I}" opacity="${z?"0.5":"1"}"
          stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
        ${z?`<image href="${z}" x="${y.x-x}" y="${y.y-x}" width="${x*2}" height="${x*2}"
          clip-path="url(#clip-${m})" preserveAspectRatio="xMidYMid slice" opacity="0.9"/>`:""}
        <text x="${y.x}" y="${y.y-3}" text-anchor="middle" font-size="13" font-weight="900"
          fill="white" font-family="Arial Black,Arial" style="text-shadow:0 1px 2px #000">${L}</text>
        <text x="${y.x}" y="${y.y+11}" text-anchor="middle" font-size="6.5" fill="rgba(255,255,255,0.9)"
          font-family="Arial">${M}</text>
        <rect x="${y.x-x}" y="${y.y-x}" width="${x*2}" height="${x*2}"
          fill="transparent" class="deck-slot-hit" data-pos="${m}" style="cursor:pointer"/>`}else k+=`
        <circle cx="${y.x}" cy="${y.y}" r="${x}" fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="${y.x}" y="${y.y+6}" text-anchor="middle" font-size="16" fill="rgba(255,255,255,0.4)"
          font-family="Arial">+</text>
        <rect x="${y.x-x}" y="${y.y-x}" width="${x*2}" height="${x*2}"
          fill="transparent" class="deck-slot-hit" data-pos="${m}" style="cursor:pointer"/>`}const v="";r.innerHTML=`
    <!-- Badge MIL -->
    ${l.length>0?`
    <div style="position:absolute;top:6px;right:8px;z-index:10;
      background:rgba(212,160,23,0.95);color:#000;border-radius:8px;
      padding:3px 10px;font-size:11px;font-weight:900;pointer-events:none">
      MIL ${c}${u>0?` +${u}`:""} ⚡
    </div>`:""}

    <svg viewBox="0 0 ${f} ${g}" width="100%" style="display:block;max-width:380px;margin:0 auto">
      ${v}
      ${k}
    </svg>`,r.querySelectorAll(".deck-slot-hit").forEach(m=>{m.addEventListener("click",()=>ft(m.dataset.pos,e,t,o))})}function ft(t,e,i,o){var f,g,x;const{openModal:r,closeModal:n}=o,a=t.replace(/\d+/,""),d=e.slots[t],s=d?e.playerCards.find($=>$.id===d):null;(f=s==null?void 0:s.player)==null||f.id;const l=new Set;Object.entries(e.slots).forEach(([$,h])=>{var v;if($===t||!h)return;const k=e.playerCards.find(m=>m.id===h);(v=k==null?void 0:k.player)!=null&&v.id&&l.add(k.player.id)}),e.subs.forEach($=>{var k;const h=e.playerCards.find(v=>v.id===$);(k=h==null?void 0:h.player)!=null&&k.id&&l.add(h.player.id)});const c=new Set,u=e.playerCards.filter($=>{const h=$.player;return!(h.job===a||h.job2===a)||l.has(h.id)||c.has(h.id)?!1:(c.add(h.id),!0)});u.sort(($,h)=>{const k=a==="GK"?$.player.note_g:a==="DEF"?$.player.note_d:a==="MIL"?$.player.note_m:$.player.note_a;return(a==="GK"?h.player.note_g:a==="DEF"?h.player.note_d:a==="MIL"?h.player.note_m:h.player.note_a)-k}),r(`Choisir ${a} — ${t}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${e.slots[t]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${u.length>0?u.map($=>{var y,p;const h=$.player,k=a==="GK"?h.note_g:a==="DEF"?h.note_d:a==="MIL"?h.note_m:h.note_a,v=we(h),m={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[h.rarity];return`<div class="player-option" data-card-id="${$.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${V[a]}">
            ${v?`<img src="${v}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${V[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${h.firstname} ${h.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${h.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${h.country_code}">
              ${(y=h.clubs)!=null&&y.logo_url?`<img src="${h.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((p=h.clubs)==null?void 0:p.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${h.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${V[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${m};flex-shrink:0">
            ${k}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(g=document.getElementById("close-selector"))==null||g.addEventListener("click",n),(x=document.getElementById("remove-player"))==null||x.addEventListener("click",()=>{delete e.slots[t],n(),J(i,e,o)}),document.querySelectorAll(".player-option").forEach($=>{$.addEventListener("click",()=>{e.slots[t]=$.dataset.cardId,n(),J(i,e,o)})})}function ut(t,e,i){var s;const{openModal:o,closeModal:r}=i,n=new Set;Object.values(t.slots).filter(Boolean).forEach(l=>{var u;const c=t.playerCards.find(f=>f.id===l);(u=c==null?void 0:c.player)!=null&&u.id&&n.add(c.player.id)}),t.subs.forEach(l=>{var u;const c=t.playerCards.find(f=>f.id===l);(u=c==null?void 0:c.player)!=null&&u.id&&n.add(c.player.id)});const a=new Set,d=t.playerCards.filter(l=>{var c,u,f;return n.has((c=l.player)==null?void 0:c.id)||a.has((u=l.player)==null?void 0:u.id)?!1:(a.add((f=l.player)==null?void 0:f.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${d.length>0?d.map(l=>{var g;const c=l.player,u=we(c),f=c.job==="GK"?c.note_g:c.job==="DEF"?c.note_d:c.job==="MIL"?c.note_m:c.note_a;return`<div class="player-option" data-card-id="${l.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${V[c.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${c.firstname} ${c.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${c.job} · ${c.country_code} · ${((g=c.clubs)==null?void 0:g.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${V[c.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(s=document.getElementById("close-sub-selector"))==null||s.addEventListener("click",r),document.querySelectorAll(".player-option").forEach(l=>{l.addEventListener("click",()=>{t.subs.push(l.dataset.cardId),r(),J(e,t,i)})})}async function gt(t,e){const{state:i,toast:o,navigate:r}=e,n=t.formationCards.find(s=>s.formation===t.formation),a=(n==null?void 0:n.id)||t.formationCardId;await w.from("decks").update({formation:t.formation,formation_card_id:a||null}).eq("id",t.deckId),await w.from("deck_cards").delete().eq("deck_id",t.deckId);const d=[];if(Object.entries(t.slots).forEach(([s,l],c)=>{d.push({deck_id:t.deckId,card_id:l,position:s,is_starter:!0,slot_order:c})}),t.subs.forEach((s,l)=>{d.push({deck_id:t.deckId,card_id:s,position:`SUB${l+1}`,is_starter:!1,slot_order:100+l})}),d.length>0){const{error:s}=await w.from("deck_cards").insert(d);if(s){o(s.message,"error");return}}o("Deck enregistré ✅","success"),r("decks")}function Me(t){const e=ce[t]||ce["4-4-2"],i=["GK1"];for(let o=1;o<=e.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=e.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=e.ATT;o++)i.push(`ATT${o}`);return i}const ze=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Ke={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function mt(t){const e="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(t!=null&&t.skin)||!(t!=null&&t.hair))return null;const i=t.hair==="chauve"?`${t.skin}-chauve-rase`:`${t.skin}-${t.hair}-${t.hair_length}`;return`${e}/storage/v1/object/public/assets/tetes/${i}.png`}const yt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},xt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function vt(t,{state:e,navigate:i,toast:o}){var n;const r=((n=e.profile)==null?void 0:n.credits)||0;t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${r.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${ze.map(a=>{const d=r>=a.cost||a.cost===0,s=a.id==="players_std"||a.id==="players_pub";return`<div class="booster-card ${d?"":"disabled"}" data-booster="${a.id}" style="position:relative">
            ${s?`<button class="booster-info-btn" data-info="${a.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>`:""}
            <div class="icon"><img src="${a.img}" alt="${a.name}" style="height:64px;width:auto;display:block;margin:0 auto"></div>
            <div class="name">${a.name}</div>
            <div class="desc">${a.sub}</div>
            <div class="cost">${a.costLabel}</div>
            ${d?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,t.querySelectorAll(".booster-card:not(.disabled)").forEach(a=>{a.addEventListener("click",async()=>{const d=ze.find(s=>s.id===a.dataset.booster);if(d){a.style.opacity="0.5",a.style.pointerEvents="none";try{await bt(d,{state:e,toast:o,navigate:i,container:t})}catch(s){o(s.message,"error"),a.style.opacity="",a.style.pointerEvents=""}}})}),t.querySelectorAll(".booster-info-btn").forEach(a=>{a.addEventListener("click",d=>{d.stopPropagation(),It()})})}async function bt(t,{state:e,toast:i,navigate:o,container:r}){if(t.cost>0&&e.profile.credits<t.cost){i("Crédits insuffisants","error");return}t.id==="players_pub"&&await Tt();const{data:n}=await w.from("cards").select("card_type, player_id, formation").eq("owner_id",e.profile.id),a=new Set((n||[]).filter(c=>c.card_type==="player").map(c=>c.player_id)),d=new Set((n||[]).filter(c=>c.card_type==="formation").map(c=>c.formation));let s=[];t.type==="player"?s=await $t(e.profile,t.cardCount,t.cost):t.type==="game_changer"?s=await kt(e.profile,t.cardCount,t.cost):t.type==="formation"&&(s=await _t(e.profile,t.cost)),s.forEach(c=>{c.card_type==="player"&&c.player?c.isDuplicate=a.has(c.player.id):c.card_type==="formation"&&(c.isDuplicate=d.has(c.formation))});const{data:l}=await w.from("users").select("*").eq("id",e.profile.id).single();l&&(e.profile=l),Et(s,t,o)}function ht(){const t=Math.random()*100;return t<.5?"legende":t<2?"special":t<10?"normal_high":"normal_low"}function U(t){return Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function wt(t,e){let i;switch(e){case"legende":i=t.filter(o=>o.rarity==="legende"),i.length||(i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=t.filter(o=>U(o)>=6));break;case"special":i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=t.filter(o=>U(o)>=6));break;case"normal_high":i=t.filter(o=>o.rarity==="normal"&&U(o)>=6),i.length||(i=t.filter(o=>U(o)>=6));break;default:i=t.filter(o=>o.rarity==="normal"&&U(o)>=1&&U(o)<=5),i.length||(i=t.filter(o=>o.rarity==="normal"));break}return i.length||(i=t),i[Math.floor(Math.random()*i.length)]}async function $t(t,e,i){if(i>0){const{error:l}=await w.from("users").update({credits:t.credits-i}).eq("id",t.id);if(l)throw l}const{data:o}=await w.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const r=o.filter(l=>l.job==="GK"),n=o.filter(l=>l.job!=="GK"),a=!t.first_booster_opened&&r.length>0,d=[];for(let l=0;l<e;l++){const c=l===0&&a?r:l===0?n:o,u=ht(),f=wt(c,u);f&&d.push(f)}a&&await w.from("users").update({first_booster_opened:!0}).eq("id",t.id);const{data:s}=await w.from("cards").insert(d.map(l=>({owner_id:t.id,player_id:l.id,card_type:"player"}))).select();return d.map((l,c)=>({...s[c],player:l}))}async function kt(t,e,i){const{error:o}=await w.from("users").update({credits:t.credits-i}).eq("id",t.id);if(o)throw o;const r=Object.keys(Ke),n=Array.from({length:e},()=>r[Math.floor(Math.random()*r.length)]),{data:a}=await w.from("cards").insert(n.map(d=>({owner_id:t.id,card_type:"game_changer",gc_type:d}))).select();return a}async function _t(t,e){const{error:i}=await w.from("users").update({credits:t.credits-e}).eq("id",t.id);if(i)throw i;const o=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"],r=o[Math.floor(Math.random()*o.length)],{data:n}=await w.from("cards").insert({owner_id:t.id,card_type:"formation",formation:r}).select();return n}function Et(t,e,i){const o=document.createElement("div");o.id="booster-anim-overlay",o.innerHTML=`
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
  `,document.body.appendChild(o);let r=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(r)return;r=!0;const f=document.getElementById("pack-visual");f.classList.add("shaking"),setTimeout(()=>{f.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",a(0)},600)},500)});let n=0;function a(f){n=f;const g=document.getElementById("reveal-phase");g.style.display="flex",d(f)}function d(f){var p;const g=t[f],x=document.getElementById("card-counter"),$=document.getElementById("single-card-slot"),h=document.getElementById("card-tap-hint");x&&(x.textContent=`Carte ${f+1} / ${t.length}`),h&&(h.textContent=f<t.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const k=Ce(g),v=g.card_type==="player"&&((p=g.player)==null?void 0:p.rarity)==="legende";$.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${v?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${k}
        ${g.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,v&&c();const m=document.getElementById("current-card-wrap");let y=!1;m.addEventListener("click",()=>{if(y)return;y=!0;const b=f+1;b<t.length?(m.style.transition="all 0.25s ease",m.style.transform="translateX(-120%) rotate(-15deg)",m.style.opacity="0",setTimeout(()=>d(b),250)):s()})}function s(){u(),document.getElementById("reveal-phase").style.display="none";const f=document.getElementById("recap-phase");f.style.display="flex";const g=document.getElementById("recap-grid");g.innerHTML=t.map((x,$)=>`
      <div class="recap-card" style="--i:${$};animation-delay:${$*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${Ce(x)}
        ${x.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let l=null;function c(){const f=document.getElementById("fireworks-canvas");if(!f)return;f.width=window.innerWidth,f.height=window.innerHeight;const g=f.getContext("2d"),x=[];function $(){const k=Math.random()*f.width,v=Math.random()*f.height*.6,m=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],y=m[Math.floor(Math.random()*m.length)];for(let p=0;p<60;p++){const b=Math.PI*2/60*p,_=2+Math.random()*5;x.push({x:k,y:v,vx:Math.cos(b)*_,vy:Math.sin(b)*_,alpha:1,color:y,size:2+Math.random()*3})}}$(),l=setInterval($,600);function h(){if(document.getElementById("fireworks-canvas")){g.clearRect(0,0,f.width,f.height);for(let k=x.length-1;k>=0;k--){const v=x[k];if(v.x+=v.vx,v.y+=v.vy+.08,v.vy*=.98,v.alpha-=.018,v.alpha<=0){x.splice(k,1);continue}g.globalAlpha=v.alpha,g.fillStyle=v.color,g.beginPath(),g.arc(v.x,v.y,v.size,0,Math.PI*2),g.fill()}g.globalAlpha=1,(l!==null||x.length>0)&&requestAnimationFrame(h)}}h()}function u(){l!==null&&(clearInterval(l),l=null);const f=document.getElementById("fireworks-canvas");f&&f.getContext("2d").clearRect(0,0,f.width,f.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{u(),o.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{u(),o.remove(),i("boosters")})}function Ce(t){var e,i;if(t.card_type==="player"&&t.player){const o=t.player,r=o.job||"ATT",n=yt[r]||"#1A6B3C",a=xt[o.rarity]||"#ccc",d=r==="GK"?o.note_g:r==="DEF"?o.note_d:r==="MIL"?o.note_m:o.note_a,s=mt(o),l={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[o.country_code]||o.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${a};overflow:hidden;display:flex;flex-direction:column">
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
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${d||0}</text>
        </svg>
      </div>
      <!-- Portrait -->
      <div style="flex:1;overflow:hidden;background:#b8d4f0">
        ${s?`<img src="${s}" style="width:100%;height:100%;object-fit:cover;object-position:center top" onerror="this.style.display='none'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;height:26px">
        <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:1px;color:#555;text-transform:uppercase">${l}</div>
        ${(e=o.clubs)!=null&&e.logo_url?`<img src="${o.clubs.logo_url}" style="width:20px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:700">${(((i=o.clubs)==null?void 0:i.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>`}if(t.card_type==="game_changer"){const o=Ke[t.gc_type]||{icon:"⚡",desc:""};return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#3d0a7a,#7a28b8);border-radius:12px;border:3px solid #9b59b6;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:16px">
      <div style="font-size:40px">${o.icon}</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">GAME CHANGER</div>
      <div style="font-weight:700;font-size:13px;color:#fff;text-align:center">${t.gc_type}</div>
      <div style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${o.desc}</div>
    </div>`}return t.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${t.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function It(){const t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
      <div style="font-size:36px;font-weight:900" id="ad-cd">5</div>`,document.body.appendChild(e);const o=setInterval(()=>{i--;const r=document.getElementById("ad-cd");r&&(r.textContent=i),i<=0&&(clearInterval(o),e.remove(),t(!0))},1e3)})}const W={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},te={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function He(t,e,i,o,r){var n;t.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${e}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${o}</button>
    </div>
  </div>`,(n=document.getElementById("msg-btn"))==null||n.addEventListener("click",r)}function R(t){const e=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!e||!(t!=null&&t.skin)||!(t!=null&&t.hair))return null;const i=t.hair==="chauve"?`${t.skin}-chauve-rase`:`${t.skin}-${t.hair}-${t.hair_length}`;return`${e}/storage/v1/object/public/assets/tetes/${i}.png`}function me(t){var i,o;const e=t.player;return{cardId:t.id,id:e.id,firstname:e.firstname,name:e.surname_encoded,country_code:e.country_code,club_id:e.club_id,job:e.job,job2:e.job2,note_g:Number(e.note_g)||0,note_d:Number(e.note_d)||0,note_m:Number(e.note_m)||0,note_a:Number(e.note_a)||0,rarity:e.rarity,skin:e.skin,hair:e.hair,hair_length:e.hair_length,clubName:((i=e.clubs)==null?void 0:i.encoded_name)||null,clubLogo:((o=e.clubs)==null?void 0:o.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function $e(t){return t===1?[1]:t===2?[0,2]:t===3?[0,1,2]:t===4?[0,1,1,2]:t===5?[0,1,1,1,2]:[1]}function At(){const t=Math.random()*100;return t<.1?4:t<5?3:t<20?2:1}function Ue(t,e){const i=W[e]||W["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]},r=[...t];for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let s=0;s<i[n];s++){let l=r.findIndex(c=>c.job===n);if(l===-1&&(l=r.findIndex(c=>c.job2===n)),l===-1&&(l=0),r[l]){const c={...r[l],_line:n};a.push(c),r.splice(l,1)}}const d=$e(a.length);a.forEach((s,l)=>{s._col=d[l]}),o[n]=a}return o}async function Lt(t,e){const{data:i}=await w.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length").eq("is_active",!0).limit(60);if(!i||i.length<11)return Mt(t);const o=W[t]||W["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},n=[...i];for(const a of["GK","DEF","MIL","ATT"]){const d=n.filter(f=>f.job===a),s=n.filter(f=>f.job!==a),l=[...d,...s],c=[];for(let f=0;f<o[a];f++){const g=l[f]||n[f];g&&c.push({cardId:"ai-"+g.id+"-"+f,id:g.id,firstname:g.firstname,name:g.surname_encoded,country_code:g.country_code,club_id:g.club_id,job:g.job,job2:g.job2,note_g:Number(g.note_g)||0,note_d:Number(g.note_d)||0,note_m:Number(g.note_m)||0,note_a:Number(g.note_a)||0,rarity:g.rarity,skin:g.skin,hair:g.hair,hair_length:g.hair_length,boost:0,used:!1,_line:a})}const u=$e(c.length);c.forEach((f,g)=>{f._col=u[g]}),r[a]=c}return r}function Mt(t){const e=W[t]||W["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let r=0;for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let s=0;s<e[n];s++){const l=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+r,id:"fake-"+r,firstname:"IA",name:o[r%o.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?l:2,note_d:n==="DEF"?l:2,note_m:n==="MIL"?l:2,note_a:n==="ATT"?l:2,rarity:"normal",boost:0,used:!1,_line:n}),r++}const d=$e(a.length);a.forEach((s,l)=>{s._col=d[l]}),i[n]=a}return i}async function zt(t,e){var p;const{state:i,navigate:o,toast:r}=e,n=i.params||{};t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const a=n.matchMode||"vs_ai_easy",d=a.replace("vs_ai_",""),s=a;if(!n.deckId)return Ct(t,e,a);const l=n.deckId,[{data:c},{data:u}]=await Promise.all([w.from("decks").select("formation,name").eq("id",l).single(),w.from("deck_cards").select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`).eq("deck_id",l).order("slot_order")]),f=(u||[]).filter(b=>{var _;return b.is_starter&&((_=b.card)==null?void 0:_.player)}).map(b=>me(b.card)),g=(u||[]).filter(b=>{var _;return!b.is_starter&&((_=b.card)==null?void 0:_.player)}).map(b=>me(b.card));if(f.length<11){He(t,"⚠️",`Deck incomplet (${f.length}/11).`,"Compléter",()=>o("decks"));return}const x=(u||[]).find(b=>{var _;return((_=b.card)==null?void 0:_.card_type)==="formation"}),$=(c==null?void 0:c.formation)||((p=x==null?void 0:x.card)==null?void 0:p.formation)||"4-4-2",{data:h}=await w.from("cards").select("id,gc_type").eq("owner_id",i.profile.id).eq("card_type","game_changer"),k=Ue(f,$),v=await Lt($),{data:m}=await w.from("matches").insert({home_id:i.profile.id,away_id:null,mode:s,home_deck_id:l,status:"in_progress"}).select().single(),y={matchId:m==null?void 0:m.id,mode:s,difficulty:d,formation:$,homeTeam:k,aiTeam:v,homeSubs:g,subsUsed:0,maxSubs:Math.min(g.length,3),homeScore:0,aiScore:0,gcCards:h||[],usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Bt(t,y,e)}async function Ct(t,e,i){const{state:o,navigate:r}=e;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await w.from("decks").select("id,name,is_active,formation").eq("owner_id",o.profile.id).order("created_at",{ascending:!1});if(!n||n.length===0){He(t,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>r("decks"));return}const a=n.map(c=>c.id),{data:d}=await w.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let s=0;function l(){var v,m,y,p,b;const c=n[s],u=(d||[]).filter(_=>_.deck_id===c.id),f=u.filter(_=>{var I;return _.is_starter&&((I=_.card)==null?void 0:I.player)}).map(_=>me(_.card)),g=u.find(_=>{var I;return((I=_.card)==null?void 0:I.card_type)==="formation"}),x=c.formation||((v=g==null?void 0:g.card)==null?void 0:v.formation)||"4-4-2",$=f.length>=11?Ue(f,x):null,h=f.length>=11;t.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:calc(100dvh - 130px);overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${s===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${s===0?"0.1":"0.3"});color:${s===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${s===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${c.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${x} · ${f.length}/11 ${c.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${s===n.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${s===n.length-1?"0.1":"0.3"});color:${s===n.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${s===n.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : contraindre la largeur du SVG pour contrôler hauteur+largeur -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${$?`<div style="width:min(98vw, calc(100dvh - 400px));overflow:hidden;flex-shrink:0">${Ye($,x,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${n.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${n.map((_,I)=>`<div style="width:7px;height:7px;border-radius:50%;background:${I===s?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,(m=document.getElementById("prev-deck"))==null||m.addEventListener("click",()=>{s>0&&(s--,l())}),(y=document.getElementById("next-deck"))==null||y.addEventListener("click",()=>{s<n.length-1&&(s++,l())}),(p=document.getElementById("validate-deck"))==null||p.addEventListener("click",()=>{h&&e.navigate("match",{matchMode:i,deckId:c.id})}),(b=document.getElementById("cancel-deck-select"))==null||b.addEventListener("click",()=>r("home"));const k=document.getElementById("deck-swipe-zone");if(k){let _=0,I=0;k.addEventListener("touchstart",L=>{_=L.touches[0].clientX,I=L.touches[0].clientY},{passive:!0}),k.addEventListener("touchend",L=>{const M=L.changedTouches[0].clientX-_,z=L.changedTouches[0].clientY-I;Math.abs(M)<40||Math.abs(M)<Math.abs(z)||(M<0&&s<n.length-1?(s++,l()):M>0&&s>0&&(s--,l()))},{passive:!0})}}l()}function Bt(t,e,i){const o=e.homeTeam.MIL||[],r=e.aiTeam.MIL||[];function n(u){return u.reduce((f,g)=>f+F(g,"MIL"),0)}function a(u){let f=0;for(let g=0;g<u.length-1;g++){const x=Y(u[g],u[g+1]);x!=="#ff3333"&&x!=="#cc2222"&&f++}return f}const d=n(o)+a(o),s=n(r)+a(r),l=d>=s;function c(u,f,g){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${f}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${u.map((x,$)=>{const h=R(x),k=$<u.length-1?Y(x,u[$+1]):null,v=k&&k!=="#ff3333"&&k!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${g};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${h?`<img src="${h}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${F(x,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${x.name}</div>
          </div>
          ${k?`<div style="width:14px;height:4px;border-radius:2px;background:${k};flex-shrink:0;opacity:${v?.9:.3}"></div>`:""}
          `}).join("")}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${n(u)} + ${a(u)} liens = <b style="color:#fff">${n(u)+a(u)}</b>
      </div>
    </div>`}t.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;gap:24px;padding:24px;background:#0a3d1e">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${c(o,e.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${d}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${s}</div>
    </div>

    ${c(r,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const u=document.getElementById("score-home"),f=document.getElementById("score-ai"),g=document.getElementById("midfield-result");if(u&&f&&(l?(u.style.fontSize="80px",u.style.color="#FFD700",f.style.opacity="0.25"):(f.style.fontSize="80px",f.style.color="#ff6b6b",u.style.opacity="0.25")),g){const x=At();g.style.opacity="1",l&&e.clubName,g.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${l?`${e.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${l?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${x}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,l&&(e.boostCard={value:x})}e.attacker=l?"home":"ai",e.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(x=>({name:x.name,note:F(x,"MIL"),portrait:R(x),job:x.job})),aiPlayers:r.map(x=>({name:x.name,note:F(x,"MIL"),portrait:R(x),job:x.job})),homeTotal:d,aiTotal:s,text:`Duel milieu : ${e.clubName} ${d} – ${s} IA → ${l?e.clubName+" attaque":"IA attaque"}`}),setTimeout(()=>{e.phase=e.attacker==="home"?"attack":"ai-attack",G(t,e,i),e.attacker==="ai"&&setTimeout(()=>ye(t,e,i),1e3)},2800)},1200)}function jt(t){if(!t||t.length<2)return"🌍";try{return String.fromCodePoint(127462+t.charCodeAt(0)-65)+String.fromCodePoint(127462+t.charCodeAt(1)-65)}catch{return"🌍"}}function Ve(t,e,i,o,r=310,n=310){const a=be[e]||{},d=ue(e)||Z[e]||[],s={},l=["ATT","MIL","DEF","GK"];for(const v of l)(t[v]||[]).forEach((y,p)=>{s[`${v}${p+1}`]=y});function c(v){const m=a[v];return m?{x:m.x*r,y:m.y*n}:null}let u="";for(const[v,m]of d){const y=c(v),p=c(m);if(!y||!p)continue;const b=s[v],_=s[m],I=Y(b,_);I==="#00ff88"||I==="#FFD700"?(u+=`<line x1="${y.x.toFixed(1)}" y1="${y.y.toFixed(1)}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}"
        stroke="${I}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,u+=`<line x1="${y.x.toFixed(1)}" y1="${y.y.toFixed(1)}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}"
        stroke="${I}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):u+=`<line x1="${y.x.toFixed(1)}" y1="${y.y.toFixed(1)}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}"
        stroke="${I}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const f=48,g=64,x=13,$=16,h={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[v,m]of Object.entries(s)){const y=c(v);if(!y||!m)continue;const p=v.replace(/[0-9]/g,""),b=te[p]||"#555",_=i==="attack"&&["MIL","ATT"].includes(p)&&!m.used||i==="defense"&&["GK","DEF","MIL"].includes(p)&&!m.used,I=o.includes(m.cardId);let L;i==="attack"?L=p==="MIL"?Number(m.note_m)||0:Number(m.note_a)||0:i==="defense"?L=p==="GK"?Number(m.note_g)||0:p==="MIL"?Number(m.note_m)||0:Number(m.note_d)||0:L=Number(p==="GK"?m.note_g:p==="DEF"?m.note_d:p==="MIL"?m.note_m:m.note_a)||0,L=L+(m.boost||0);const M=(y.x-f/2).toFixed(1),z=(y.y-g/2).toFixed(1),C=m.used?.25:1,N=h[m==null?void 0:m.rarity]||h.normal,O=I?"#ffffff":N,E=I?3:(m==null?void 0:m.rarity)==="légende"||(m==null?void 0:m.rarity)==="pépite"?2.5:2,T=g-x-$;u+=`<defs><clipPath id="cp-${v}"><rect x="${M}" y="${(y.y-g/2+x).toFixed(1)}" width="${f}" height="${T}"/></clipPath></defs>`,u+=`<rect x="${M}" y="${z}" width="${f}" height="${g}" rx="5" fill="${b}" opacity="${C}"/>`;const A=R(m);A&&!m.used&&(u+=`<image href="${A}" x="${M}" y="${(y.y-g/2+x).toFixed(1)}" width="${f}" height="${T}" clip-path="url(#cp-${v})" preserveAspectRatio="xMidYMin slice"/>`),u+=`<rect x="${M}" y="${z}" width="${f}" height="${x}" rx="4" fill="rgba(255,255,255,0.92)"/>`,u+=`<text x="${y.x.toFixed(1)}" y="${(y.y-g/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(m.name||"").slice(0,9)}</text>`;const j=(y.y+g/2-$).toFixed(1);if(u+=`<rect x="${M}" y="${j}" width="${f}" height="${$}" fill="rgba(255,255,255,0.92)"/>`,m.used)u+=`<text x="${y.x.toFixed(1)}" y="${(y.y+g/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{u+=`<text x="${(y.x-13).toFixed(1)}" y="${(y.y+g/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${jt(m.country_code)}</text>`,u+=`<text x="${y.x.toFixed(1)}" y="${(y.y+g/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${L}</text>`;const S=getClubLogo(m);S?u+=`<image href="${S}" x="${(y.x+f/2-14).toFixed(1)}" y="${(y.y+g/2-$+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:m.clubName&&(u+=`<text x="${(y.x+14).toFixed(1)}" y="${(y.y+g/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(m.clubName||"").slice(0,3).toUpperCase()}</text>`),m.boost&&(u+=`<rect x="${(y.x+f/2-12).toFixed(1)}" y="${(y.y-g/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,u+=`<text x="${(y.x+f/2-5).toFixed(1)}" y="${(y.y-g/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${m.boost}</text>`)}u+=`<rect x="${M}" y="${z}" width="${f}" height="${g}" rx="5" fill="${I?"rgba(255,255,255,0.12)":"none"}" stroke="${O}" stroke-width="${E}" opacity="${C}"/>`,_&&(u+=`<rect x="${M}" y="${z}" width="${f}" height="${g}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${I?"selected":""}" data-card-id="${m.cardId}" data-role="${p}" style="cursor:pointer"/>`)}const k=38;return`<svg viewBox="${-k} ${-k} ${r+k*2} ${n+k*2}" width="100%" style="display:block;width:100%;max-width:380px;margin:0 auto">
    ${u}
  </svg>`}function Ye(t,e,i,o,r=300,n=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ve(t,e,i,o,r,n)}
  </div>`}function ne(t,e=!1){const i=t.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[t.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${e?"0.2":"0.5"});opacity:${e?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${t.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(t.name||"").slice(0,7)}</div>
  </div>`}function St(t){if(t.type==="duel"){const e=t.homeTotal>=t.aiTotal;return`
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
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${e?t.clubName||"Vous":"IA"}</div>
      ${ne(t.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${ne(t.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${t.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${t.type==="goal"?700:400};padding:3px 2px">${t.text||""}</div>`}function G(t,e,i){var g,x,$,h,k,v,m,y;const o=e.selected.map(p=>p.cardId),r=e.usedSubIds||[],n=e.homeSubs.filter(p=>!r.includes(p.cardId));Object.values(e.homeTeam).flat().filter(p=>p.used).length>0&&n.length>0&&e.subsUsed<e.maxSubs,e.log[e.log.length-1];const d=e.phase==="ai-attack"||e.phase==="ai-defense",s=e.phase==="attack",l=e.phase==="defense",c=e.phase==="finished",u=e.gcCards.filter(p=>!e.usedGc.includes(p.id)),f=e.boostCard&&!e.boostUsed;t.innerHTML=`
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
    <div id="last-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:100px">
      ${(()=>{if(e.phase==="defense"&&e.pendingAttack){const b=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${renderCardRow(b.players||[],"#ff6b6b",b.total)}
          </div>`}if(e.phase==="ai-defense"&&e.pendingAttack){const b=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${renderCardRow(b.players||[],"#00ff88",b.total)}
          </div>`}const p=e.log[e.log.length-1];return p?'<div style="padding:2px 4px">'+St(p)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${e.log.length})
    </button>

    <!-- ZONE CENTRALE : REMPLAÇANTS + TERRAIN -->
    <div style="display:flex;flex:1;min-height:0;overflow:hidden">

      <!-- Colonne remplaçants (mini cartes) -->
      <div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:50px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(p=>`
              <div class="sub-btn-col" data-sub-id="${p.cardId}" title="${p.firstname} ${p.name}" style="cursor:pointer;flex-shrink:0">
                ${renderMiniCardHTML(p,44,58)}
              </div>`).join("")}
      </div>

      <!-- Terrain -->
      <div style="flex:1;overflow:hidden;min-width:0;display:flex;align-items:flex-start;justify-content:center" id="match-field">
        <div style="width:min(calc(100vw - 56px), calc(100dvh - 370px));overflow:hidden;flex-shrink:0">
          ${Ye(e.homeTeam,e.formation,e.phase,o,300,300)}
        </div>
      </div>
    </div>

    <!-- ZONE BAS : GC + BOUTON ACTION -->
    <div style="display:flex;align-items:flex-end;padding:6px 8px;background:rgba(0,0,0,0.35);gap:8px;flex-shrink:0;min-height:80px">

      <!-- Grille GC -->
      <div style="flex:1;display:grid;grid-template-columns:repeat(4,1fr);gap:3px;align-content:start">
        ${u.map(p=>{var b;return`
          <div class="gc-mini" data-gc-id="${p.id}" data-gc-type="${p.gc_type}"
            style="background:linear-gradient(135deg,#3d0a7a,#7a28b8);border:1px solid #9b59b6;border-radius:7px;padding:3px 2px;cursor:pointer;text-align:center">
            <div style="font-size:16px">${((b=de[p.gc_type])==null?void 0:b.icon)||"⚡"}</div>
            <div style="font-size:6px;color:#fff;font-weight:600;line-height:1.2">${p.gc_type.slice(0,8)}</div>
          </div>`}).join("")}
        ${f?`
          <div id="boost-card" style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:7px;padding:3px 2px;cursor:pointer;text-align:center">
            <div style="font-size:16px">⚡</div>
            <div style="font-size:6px;color:#000;font-weight:900">+${e.boostCard.value}</div>
          </div>`:""}
      </div>

      <!-- Bouton action principal -->
      <div style="flex-shrink:0">
        ${c?'<button id="btn-results" style="width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,#D4A017,#FFD700);border:3px solid #FFD700;color:#000;font-size:28px;cursor:pointer;display:flex;align-items:center;justify-content:center">🏁</button>':d?'<div style="width:68px;height:68px;border-radius:50%;background:rgba(255,255,255,0.08);border:3px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.3);font-size:26px;display:flex;align-items:center;justify-content:center">⏳</div>':s?`<button id="btn-action" style="width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,#c47a00,#FFD700);border:3px solid #FFD700;color:#fff;font-size:28px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px rgba(255,215,0,0.4)" ${e.selected.length===0?'disabled style="opacity:0.4;cursor:default"':""}>⚔️</button>`:l?`<button id="btn-action" style="width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:3px solid #87CEEB;color:#fff;font-size:28px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px rgba(135,206,235,0.4)" ${e.selected.length===0?'disabled style="opacity:0.4;cursor:default"':""}>🛡️</button>`:'<div style="width:68px;height:68px;border-radius:50%;background:rgba(255,255,255,0.05);border:3px solid rgba(255,255,255,0.1)"></div>'}
        ${s||l?`
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
      ${e.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...e.log].reverse().map(p=>{var b,_,I;if(p.type==="duel"){const L=p.isGoal,M=p.homeScored?"#FFD700":L?"#ff6b6b":"rgba(255,255,255,0.3)",z=p.homeScored?"⚽ BUT !":L?"⚽ BUT IA !":(b=p.homePlayers)!=null&&b.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${L?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${M};margin-bottom:4px">
                <div style="font-size:9px;color:${M};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${z}</div>
                ${(_=p.homePlayers)!=null&&_.length?`<div style="margin-bottom:3px">${renderCardRow(p.homePlayers,"rgba(255,255,255,0.7)",p.homeTotal)}</div>`:""}
                ${(I=p.aiPlayers)!=null&&I.length?`<div style="opacity:0.7">${renderCardRow(p.aiPlayers,"#ff6b6b",p.aiTotal)}</div>`:""}
              </div>`}return p.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${p.outPlayer?renderMiniCardHTML({...p.outPlayer,used:!0,_line:p.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${p.inPlayer?renderMiniCardHTML({...p.inPlayer,_line:p.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:p.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${p.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${p.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`,requestAnimationFrame(()=>{var L;const p=t.querySelector(".match-screen");if(!p)return;const b=p.getBoundingClientRect().top,_=((L=document.querySelector('.bottom-nav, nav, [class*="nav"]'))==null?void 0:L.offsetHeight)||60,I=Math.round(window.innerHeight-b-_);I>150&&(p.style.height=I+"px")}),(g=document.getElementById("match-quit"))==null||g.addEventListener("click",()=>{confirm("Abandonner ? Résultat : défaite 3-0")&&(e.homeScore=0,e.aiScore=3,ie(t,e,i))}),(x=document.getElementById("view-ai"))==null||x.addEventListener("click",()=>Pt(e,i)),($=document.getElementById("toggle-history"))==null||$.addEventListener("click",()=>{var p;(p=document.getElementById("match-history-panel"))==null||p.classList.add("open")}),(h=document.getElementById("close-history"))==null||h.addEventListener("click",()=>{var p;(p=document.getElementById("match-history-panel"))==null||p.classList.remove("open")}),(k=document.getElementById("btn-action"))==null||k.addEventListener("click",()=>{e.selected.length!==0&&(s?Dt(t,e,i):l&&Gt(t,e,i))}),(v=document.getElementById("btn-results"))==null||v.addEventListener("click",()=>ie(t,e,i)),t.querySelectorAll(".match-slot-hit").forEach(p=>{p.addEventListener("click",()=>Ft(p,e,t,i))}),t.querySelectorAll(".gc-mini").forEach(p=>{p.addEventListener("click",()=>qt(p.dataset.gcId,p.dataset.gcType,t,e,i))}),(m=document.getElementById("boost-card"))==null||m.addEventListener("click",()=>Ot(t,e,i)),t.querySelectorAll(".sub-btn-col").forEach(p=>{p.addEventListener("click",()=>Be(t,e,i,p.dataset.subId))}),(y=document.getElementById("sub-btn-main"))==null||y.addEventListener("click",()=>Be(t,e,i))}function Ft(t,e,i,o){const r=t.dataset.cardId,n=t.dataset.role,a=e.selected.findIndex(d=>d.cardId===r);if(a!==-1)e.selected.splice(a,1);else{if(e.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const d=(e.homeTeam[n]||[]).find(s=>s.cardId===r);d&&e.selected.push({...d,_role:n,_line:n})}G(i,e,o)}function Dt(t,e,i){const o=e.selected.map(n=>({...n,_line:n._role})),r=Ge(o,e.modifiers.home);e.pendingAttack={...r,players:[...e.selected],side:"home"},e.selected.forEach(n=>{const a=(e.homeTeam[n._role]||[]).find(d=>d.cardId===n.cardId);a&&(a.used=!0)}),e.log.push({text:`⚔️ Vous attaquez : ${r.total} (base ${r.base}${r.links?` +${r.links} liens`:""}) — ${e.selected.map(n=>n.name).join(", ")}`,type:"info"}),e.selected=[],e.modifiers.home={},e.phase="ai-defense",G(t,e,i),setTimeout(()=>Rt(t,e,i),1200)}function Gt(t,e,i){const o=e.selected.map(d=>({...d,_line:d._role})),r=Re(o,e.modifiers.home);e.selected.forEach(d=>{const s=(e.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId);s&&(s.used=!0)});const n=Ne(e.pendingAttack.total,r.total,e.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(e.pendingAttack.players||[]).map(d=>({name:d.name,note:d._line==="MIL"?d.note_m:d.note_a,portrait:R(d),job:d.job})),homePlayers:e.selected.map(d=>{const s=(e.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId)||d;return{name:s.name,note:s._line==="GK"?s.note_g:s._line==="MIL"?s.note_m:s.note_d,portrait:R(s),job:s.job}}),homeTotal:r.total,aiTotal:e.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(n.shielded)a.text="🛡️ Bouclier ! But annulé.",e.log.push(a);else if(n.goal){e.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${e.pendingAttack.total} > ${r.total})`,e.log.push(a),e.selected=[],e.modifiers.home={},e.pendingAttack=null,G(t,e,i),Xe(a.aiPlayers,e.homeScore,e.aiScore,!1,()=>{pe(t,e,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${r.total} ≥ ${e.pendingAttack.total})`,e.log.push(a);e.selected=[],e.modifiers.home={},e.pendingAttack=null,pe(t,e,i,"home-attack")}function ye(t,e,i){const o=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]],r=qe(o,"attack",e.difficulty);if(!r.length){We(t,e,i);return}const n=Ge(r,e.modifiers.ai);e.pendingAttack={...n,players:r,side:"ai"},r.forEach(a=>{a.used=!0}),e.log.push({text:`🤖 IA attaque : ${n.total} (${r.map(a=>a.name).join(", ")})`,type:"info"}),e.modifiers.ai={},e.phase="defense",G(t,e,i)}function Rt(t,e,i){const o=[...e.aiTeam.GK||[],...e.aiTeam.DEF||[],...e.aiTeam.MIL||[]],r=qe(o,"defense",e.difficulty),n=r.length>0?Re(r,e.modifiers.ai).total:0;r.forEach(s=>{s.used=!0});const a=Ne(e.pendingAttack.total,n,e.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(e.pendingAttack.players||[]).map(s=>({name:s.name,note:s._line==="MIL"?s.note_m:s.note_a,portrait:R(s),job:s.job})),aiPlayers:r.map(s=>({name:s.name,note:s._line==="GK"?s.note_g:s._line==="MIL"?s.note_m:s.note_d,portrait:R(s),job:s.job})),homeTotal:e.pendingAttack.total,aiTotal:n,isGoal:!1,homeScored:!1,text:""};if(a.shielded)d.text="🛡️ Bouclier IA !",e.log.push(d);else if(a.goal){e.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${e.pendingAttack.total} > ${n})`,e.log.push(d),e.modifiers.ai={},e.pendingAttack=null,G(t,e,i),Xe(d.homePlayers,e.homeScore,e.aiScore,!0,()=>{pe(t,e,i,"ai-attack")});return}else d.text=`🧤 IA défend (${n} ≥ ${e.pendingAttack.total})`,e.log.push(d);e.modifiers.ai={},e.pendingAttack=null,pe(t,e,i,"ai-attack")}function pe(t,e,i,o){if(e.round++,Je(e)){ie(t,e,i);return}if(o==="home-attack"){if(![...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(n=>!n.used).length){if(![...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(a=>!a.used).length){ie(t,e,i);return}e.phase="ai-attack",G(t,e,i),setTimeout(()=>ye(t,e,i),800);return}e.phase="attack",G(t,e,i)}else{if(![...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(n=>!n.used).length){We(t,e,i);return}e.phase="ai-attack",G(t,e,i),setTimeout(()=>ye(t,e,i),800)}}function Je(t){const e=["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(r=>!r.used)),i=["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(r=>!r.used));return!e&&!i}function We(t,e,i){Je(e)?ie(t,e,i):(e.phase="attack",G(t,e,i))}function Nt(t,e,i){const o=document.createElement("div");o.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const r=R(t),n=R(e),a=te[t.job]||"#555",d=te[e.job]||"#555",s=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a,l=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a;o.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${a};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${r?`<img src="${r}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${s}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${t.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${d};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${l}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${e.name}</div>
      </div>
    </div>
  `,document.body.appendChild(o);let c=!1;const u=()=>{c||(c=!0,o.remove(),setTimeout(()=>i(),50))};o.addEventListener("click",u),setTimeout(u,2e3)}function Q(t,e="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${e};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=t,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function Be(t,e,i,o=null){if(e.phase!=="attack"){Q("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(e.usedSubIds||(e.usedSubIds=[]),e.subsUsed>=e.maxSubs){Q(`Maximum ${e.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const r=Object.values(e.homeTeam).flat().filter(c=>c.used),n=e.homeSubs.filter(c=>!e.usedSubIds.includes(c.cardId));if(!r.length){Q("Aucun joueur utilisé à remplacer");return}if(!n.length){Q("Aucun remplaçant disponible");return}let a=0,d=Math.max(0,n.findIndex(c=>c.cardId===o));const s=document.createElement("div");s.id="sub-overlay",s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function l(){var h,k,v,m,y,p;const c=r[a],u=n[d],f=Math.min(130,Math.round((window.innerWidth-80)/2)),g=Math.round(f*1.35);s.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${e.subsUsed}/${e.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI SORT -->
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 8px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        ${r.length>1?`<button id="out-up" style="background:rgba(255,255,255,0.1);border:none;color:${a===0?"rgba(255,255,255,0.2)":"#fff"};width:36px;height:36px;border-radius:50%;font-size:20px;cursor:pointer" ${a===0?"disabled":""}>▲</button>`:""}
        <div style="transform:none">
          ${renderMiniCardHTML({...c,used:!0},f,g)}
        </div>
        ${r.length>1?`<button id="out-down" style="background:rgba(255,255,255,0.1);border:none;color:${a===r.length-1?"rgba(255,255,255,0.2)":"#fff"};width:36px;height:36px;border-radius:50%;font-size:20px;cursor:pointer" ${a===r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${r.length}</div>`:""}
      </div>

      <!-- JOUEUR QUI ENTRE -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 8px">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="background:rgba(255,255,255,0.1);border:none;color:${d===0?"rgba(255,255,255,0.2)":"#fff"};width:36px;height:36px;border-radius:50%;font-size:20px;cursor:pointer" ${d===0?"disabled":""}>▲</button>
        <div id="in-card">${renderMiniCardHTML(u,f,g)}</div>
        <button id="in-down" style="background:rgba(255,255,255,0.1);border:none;color:${d===n.length-1?"rgba(255,255,255,0.2)":"#fff"};width:36px;height:36px;border-radius:50%;font-size:20px;cursor:pointer" ${d===n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${n.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(h=document.getElementById("sub-close"))==null||h.addEventListener("click",()=>s.remove()),(k=document.getElementById("out-up"))==null||k.addEventListener("click",()=>{a>0&&(a--,l())}),(v=document.getElementById("out-down"))==null||v.addEventListener("click",()=>{a<r.length-1&&(a++,l())}),(m=document.getElementById("in-up"))==null||m.addEventListener("click",()=>{d>0&&(d--,l())}),(y=document.getElementById("in-down"))==null||y.addEventListener("click",()=>{d<n.length-1&&(d++,l())});let x=0;const $=document.getElementById("in-panel");$==null||$.addEventListener("touchstart",b=>{x=b.touches[0].clientY},{passive:!0}),$==null||$.addEventListener("touchend",b=>{const _=b.changedTouches[0].clientY-x;Math.abs(_)<30||(_<0&&d<n.length-1?(d++,l()):_>0&&d>0&&(d--,l()))},{passive:!0}),(p=document.getElementById("sub-confirm"))==null||p.addEventListener("click",()=>{const b=r[a],_=n[d];if(!b||!_)return;let I=null,L=-1;for(const[z,C]of Object.entries(e.homeTeam)){const N=(C||[]).findIndex(O=>O.cardId===b.cardId);if(N!==-1){I=z,L=N;break}}if(L===-1||!I){Q("Erreur remplacement","rgba(180,0,0,0.9)"),s.remove();return}const M={..._,_line:I,_col:b._col,used:!1,boost:0};e.homeTeam[I].splice(L,1,M),e.usedSubIds||(e.usedSubIds=[]),e.usedSubIds.push(_.cardId),e.subsUsed++,e.selected=[],e.log.push({type:"sub",subSide:"home",clubName:e.clubName,outPlayer:{name:b.name,firstname:b.firstname,note:F(b,I),portrait:R(b),job:b.job},inPlayer:{name:_.name,firstname:_.firstname,note:F(_,I),portrait:R(_),job:_.job},text:`🔄 ${_.firstname} ${_.name} remplace ${b.firstname} ${b.name}`}),s.remove(),Nt(b,_,()=>G(t,e,i))})}l(),document.body.appendChild(s)}function qt(t,e,i,o,r){if(!o.usedGc.includes(t)){switch(o.usedGc.push(t),e){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{let n=!1;for(const a of["ATT","MIL","DEF","GK"]){const d=(o.homeTeam[a]||[]).find(s=>s.used);if(d){d.used=!1,n=!0;break}}o.log.push({text:n?"💫 Joueur ressuscité !":"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const n=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(a=>!a.used);if(n.length){const a=n.sort((d,s)=>F(s,"ATT")-F(d,"ATT"))[0];a.used=!0,o.log.push({text:`❄️ ${a.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}w.from("cards").delete().eq("id",t).then(()=>{}),G(i,o,r)}}function Ot(t,e,i){const o=Object.values(e.homeTeam).flat().filter(r=>!r.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${e.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${o.map(r=>`
        <div class="player-boost-opt" data-card-id="${r.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${te[r.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${F(r,r._line||r.job)}</div>
          <div style="flex:1"><b>${r.firstname} ${r.name}</b><div style="font-size:11px;color:#888">${r._line||r.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${e.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(r=>{r.addEventListener("click",()=>{const n=r.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const d=(e.homeTeam[a]||[]).find(s=>s.cardId===n);if(d){d.boost=(d.boost||0)+e.boostCard.value,e.log.push({text:`⚡ Boost +${e.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}e.boostUsed=!0,i.closeModal(),G(t,e,i)})})}function Xe(t,e,i,o,r){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(l,c)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${c%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][c%8]}
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
      <div style="width:50px;height:50px;border-radius:50%;background:${te[l.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${l.portrait?`<img src="${l.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(l.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(n);let d=!1;const s=()=>{d||(d=!0,n.remove(),setTimeout(()=>r(),50))};n.addEventListener("click",s),setTimeout(s,3500)}async function ie(t,e,i){var c,u;e.phase="finished";const{state:o}=i,r=e.homeScore>e.aiScore,n=e.homeScore===e.aiScore,a=r?"victoire":n?"nul":"defaite",d=ot(e.mode,a);e.matchId&&await w.from("matches").update({status:"finished",home_score:e.homeScore,away_score:e.aiScore,winner_id:r?o.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",e.matchId);const s={credits:(o.profile.credits||0)+d,matches_played:(o.profile.matches_played||0)+1};r?s.wins=(o.profile.wins||0)+1:n?s.draws=(o.profile.draws||0)+1:s.losses=(o.profile.losses||0)+1,await w.from("users").update(s).eq("id",o.profile.id),await i.refreshProfile();const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",l.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${r?"🏆":n?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${r?"Victoire !":n?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${e.homeScore} – ${e.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${d.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(l),(c=document.getElementById("res-home"))==null||c.addEventListener("click",()=>{l.remove(),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{l.remove(),i.navigate("match",{matchMode:e.mode})})}function Pt(t,e){e.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ve(t.aiTeam,t.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Kt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Ht(t,e){const{state:i,toast:o}=e;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await ke(t,e)}async function ke(t,e){const{state:i,toast:o}=e,{data:r}=await w.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),n=(r||[]).filter(s=>s.seller_id===i.profile.id),a=(r||[]).filter(s=>s.seller_id!==i.profile.id);t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${a.length} carte(s) en vente · Solde : ${(i.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${n.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function d(s){const l=document.getElementById("mkt-content"),c=s==="buy"?a:n;if(c.length===0){l.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${s==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune carte en vente."}
      </div>`;return}l.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${c.map(u=>{var h,k,v;const f=(h=u.card)==null?void 0:h.player;if(!f)return"";const g=f.job==="GK"?f.note_g:f.job==="DEF"?f.note_d:f.job==="MIL"?f.note_m:f.note_a,x=Kt[f.rarity],$=(i.profile.credits||0)>=u.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px">
          <div style="width:44px;height:44px;border-radius:8px;background:${Yt(f.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${x};flex-shrink:0">${g}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${f.firstname} ${f.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${f.country_code} · ${((k=f.clubs)==null?void 0:k.encoded_name)||"—"} · ${f.rarity} · ${f.job}</div>
            <div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((v=u.seller)==null?void 0:v.pseudo)||"—"}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${u.price.toLocaleString("fr")}</div>
            ${s==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${u.id}" ${$?"":"disabled"} style="margin-top:4px">${$?"Acheter":"Trop cher"}</button>`:`<button class="btn btn-danger btn-sm" data-cancel="${u.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,l.querySelectorAll("[data-buy]").forEach(u=>{u.addEventListener("click",()=>Ut(u.dataset.buy,c,t,e))}),l.querySelectorAll("[data-cancel]").forEach(u=>{u.addEventListener("click",()=>Vt(u.dataset.cancel,t,e))})}d("buy"),t.querySelectorAll(".mkt-tab").forEach(s=>{s.addEventListener("click",()=>{t.querySelectorAll(".mkt-tab").forEach(l=>{const c=l===s;l.style.background=c?"var(--green)":"#fff",l.style.color=c?"#fff":"var(--gray-600)",l.style.borderColor=c?"var(--green)":"var(--gray-200)"}),d(s.dataset.tab)})})}async function Ut(t,e,i,o){const{state:r,toast:n,refreshProfile:a}=o,d=e.find(s=>s.id===t);if(d){if((r.profile.credits||0)<d.price){n("Crédits insuffisants","error");return}if(confirm(`Acheter ${d.card.player.firstname} ${d.card.player.surname_encoded} pour ${d.price.toLocaleString("fr")} crédits ?`))try{const{error:s}=await w.from("cards").update({owner_id:r.profile.id,is_for_sale:!1,sale_price:null}).eq("id",d.card.id);if(s)throw s;await w.from("market_listings").update({status:"sold",buyer_id:r.profile.id,sold_at:new Date().toISOString()}).eq("id",t),await w.from("users").update({credits:(r.profile.credits||0)-d.price}).eq("id",r.profile.id);const{data:l}=await w.from("users").select("credits").eq("id",d.seller_id).single();l&&await w.from("users").update({credits:(l.credits||0)+d.price}).eq("id",d.seller_id),await w.from("notifications").insert({user_id:d.seller_id,type:"card_sold",message:`Ta carte ${d.card.player.surname_encoded} a été vendue pour ${d.price} crédits !`,data:{card_id:d.card.id,price:d.price}}),await a(),n("Carte achetée ! ✅","success"),ke(i,o)}catch(s){n("Erreur : "+s.message,"error")}}}async function Vt(t,e,i){const{toast:o}=i,{data:r}=await w.from("market_listings").select("card_id").eq("id",t).single();await w.from("market_listings").update({status:"cancelled"}).eq("id",t),r&&await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",r.card_id),o("Annonce retirée","success"),ke(e,i)}function Yt(t){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[t]||"#888"}async function Jt(t,{state:e,navigate:i,toast:o}){t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await w.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${r&&r.length>0?r.map((n,a)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${n.id===e.profile.id?"border:2px solid var(--yellow)":""}">
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
  `}const B={user:null,profile:null,page:"home",params:{}};function re(t,e="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=t,o.className=`show ${e}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function Wt(t,e,i=""){document.getElementById("modal-title").textContent=t,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function xe(){document.getElementById("modal-overlay").classList.add("hidden")}async function ae(){if(!B.user)return;const{data:t}=await w.from("users").select("*").eq("id",B.user.id).single();t&&(B.profile=t)}const _e="mw_theme";function fe(){return localStorage.getItem(_e)||"light"}function Xt(t){var e;localStorage.setItem(_e,t),ve(t),(e=B.profile)!=null&&e.id&&w.from("users").update({theme:t}).eq("id",B.profile.id).then(()=>{})}function ve(t){document.documentElement.setAttribute("data-theme",t)}function se(t,e={}){B.page=t,B.params=e,Qe()}async function Qe(){const t=document.getElementById("page-content");if(!t)return;document.querySelectorAll(".bottom-nav a").forEach(o=>{o.classList.toggle("active",o.dataset.page===B.page)});const e=document.getElementById("nav-credits");e&&B.profile&&(e.textContent=`💰 ${(B.profile.credits||0).toLocaleString("fr")}`);const i={state:B,navigate:se,toast:re,openModal:Wt,closeModal:xe,refreshProfile:ae};switch(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',B.page){case"home":await Te(t,i);break;case"collection":await st(t,i);break;case"decks":await ge(t,i);break;case"boosters":await vt(t,i);break;case"match":await zt(t,i);break;case"market":await Ht(t,i);break;case"rankings":await Jt(t,i);break;default:await Te(t,i)}}function Qt(){const t=document.getElementById("app"),e=B.profile;if(!e)return;const i="/manager-wars/icons/";t.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(o=>{o.addEventListener("click",r=>{r.preventDefault(),se(o.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>se("home")),document.getElementById("nav-credits").addEventListener("click",()=>se("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const r=fe()==="dark"?"light":"dark";Xt(r),je(r)}),je(fe())}function je(t){const e=document.getElementById("theme-icon");e&&(e.textContent=t==="dark"?"☀️":"🌙")}async function Zt(){ve(fe()),document.getElementById("modal-overlay").addEventListener("click",e=>{e.target===e.currentTarget&&xe()}),document.getElementById("modal-close").addEventListener("click",xe);const{data:{session:t}}=await w.auth.getSession();if(!t){Fe(),Ee(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:re});return}B.user=t.user,await ae(),Fe();try{const{data:e}=await w.from("formation_links_overrides").select("formation, links"),i={};(e||[]).forEach(o=>{i[o.formation]=o.links}),Ze(i)}catch(e){console.warn("Impossible de charger les overrides de formation:",e)}if(!B.profile){et(document.getElementById("app"),{state:B,navigate:async()=>{await ae(),Se()},toast:re,refreshProfile:ae});return}B.profile.theme&&B.profile.theme!==fe()&&(localStorage.setItem(_e,B.profile.theme),ve(B.profile.theme)),Se(),w.auth.onAuthStateChange(async(e,i)=>{e==="SIGNED_OUT"&&(B.user=null,B.profile=null,document.getElementById("app").innerHTML="",Ee(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:re}))})}function Se(){const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Qt(),Qe()}function Fe(){const t=document.getElementById("app-loader"),e=document.getElementById("app");e&&(e.style.display=""),t&&(t.classList.add("zoom-out"),setTimeout(()=>t.style.display="none",500))}Zt();
