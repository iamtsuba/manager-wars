import{s as h,l as U,F as te,b as $e,c as ye,d as ot}from"./formation-links-BXiJqmnj.js";function Ae(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(r=>r.classList.remove("active")),o.classList.add("active"),document.getElementById("tab-login").style.display=o.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=o.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const o=document.getElementById("login-email").value.trim(),r=document.getElementById("login-password").value,n=document.getElementById("login-error");if(n.textContent="",!o||!r){n.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:d}=await h.auth.signInWithPassword({email:o,password:r});if(a.textContent="Se connecter",a.disabled=!1,d){n.textContent=d.message.includes("Invalid")?"Email ou mot de passe incorrect.":d.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",o=>{o.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const o=document.getElementById("reg-email").value.trim(),r=document.getElementById("reg-password").value,n=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!o||!r||!n){a.textContent="Remplissez tous les champs.";return}if(r.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(r!==n){a.textContent="Les mots de passe ne correspondent pas.";return}const d=document.getElementById("reg-btn");d.textContent="Création…",d.disabled=!0;const{error:s}=await h.auth.signUp({email:o,password:r});if(d.textContent="Créer mon compte",d.disabled=!1,s){a.textContent=s.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=o})}function nt(e,{state:t,navigate:i,toast:o,refreshProfile:r}){let n="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function d(){var x;const l=document.getElementById("logo-preview"),c=document.getElementById("logo-initials"),f=((x=document.getElementById("setup-club"))==null?void 0:x.value)||"MW",p=f.trim().split(" ").filter(Boolean),g=p.length>=2?(p[0][0]+p[1][0]).toUpperCase():f.slice(0,2).toUpperCase();l&&(l.style.background=a,l.style.borderColor=n),c&&(c.textContent=g,c.style.color=n)}document.getElementById("color1").addEventListener("input",l=>{n=l.target.value,document.getElementById("swatch1").style.background=n,d()}),document.getElementById("color2").addEventListener("input",l=>{a=l.target.value,document.getElementById("swatch2").style.background=a,d()});function s(l){document.querySelectorAll(".setup-step").forEach(c=>c.classList.remove("active")),document.getElementById(`step-${l}`).classList.add("active"),document.getElementById("step-num").textContent=l,document.getElementById("progress-fill").style.width=`${Math.round(l/3*100)}%`,l===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("step1-error");if(c.textContent="",l.length<3){c.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await h.from("users").select("id").eq("pseudo",l).maybeSingle();if(f){c.textContent="Ce pseudo est déjà pris.";return}s(2)}),document.getElementById("step2-back").addEventListener("click",()=>s(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const l=document.getElementById("setup-club").value.trim(),c=document.getElementById("step2-error");if(c.textContent="",l.length<2){c.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await h.from("users").select("id").eq("club_name",l).maybeSingle();if(f){c.textContent="Ce nom de club est déjà pris.";return}s(3)}),document.getElementById("step3-back").addEventListener("click",()=>s(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),p=document.getElementById("step3-finish");f.textContent="",p.disabled=!0,p.textContent="Création en cours…";try{const{error:g}=await h.from("users").insert({id:t.user.id,pseudo:l,club_name:c,club_color1:n,club_color2:a,credits:1e4});if(g)throw g;await rt(t.user.id),await r(),o(`Bienvenue ${l} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){f.textContent=g.message,p.disabled=!1,p.textContent="🚀 Créer mon profil !"}})}async function rt(e){const{data:t}=await h.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,o=i.filter(s=>s.job==="GK"),r=i.filter(s=>s.job!=="GK"),n=[];for(let s=0;s<5;s++){let l=[];if(s===0&&o.length>0){const c=o[Math.floor(Math.random()*o.length)];l.push(c);const f=Te([...r]).slice(0,3);l.push(...f)}else l=Te([...i]).slice(0,4);l.forEach(c=>{n.push({owner_id:e,player_id:c.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(s=>{n.push({owner_id:e,card_type:"game_changer",gc_type:s})});const d=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];n.push({owner_id:e,card_type:"formation",formation:d[Math.floor(Math.random()*d.length)]}),n.length>0&&await h.from("cards").insert(n),await h.from("users").update({first_booster_opened:!0}).eq("id",e)}function Te(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}async function Le(e,{state:t,navigate:i,toast:o}){var a;const r=t.profile;if(!r)return;const{data:n}=await h.from("matches").select("id,home_score,away_score,status,mode,winner_id,created_at").or(`home_id.eq.${r.id},away_id.eq.${r.id}`).eq("status","finished").order("created_at",{ascending:!1}).limit(3);e.innerHTML=`
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
          ${n.map(d=>{const s=d.winner_id===r.id,l=d.home_score===d.away_score,c=l?"N":s?"V":"D",f=l?"#888":s?"#1A6B3C":"#c0392b",p={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat"}[d.mode]||d.mode,x=new Date(d.created_at).toLocaleDateString("fr",{month:"short",day:"numeric"});return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
              <div>
                <div style="font-size:13px;font-weight:600">${p}</div>
                <div style="font-size:11px;color:var(--gray-600)">${x}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <span style="font-size:14px;font-weight:700">${d.home_score} - ${d.away_score}</span>
                <span style="background:${f};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${c}</span>
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
  `,e.querySelectorAll("[data-nav]").forEach(d=>{d.addEventListener("click",s=>{s.preventDefault(),i(d.dataset.nav)})}),(a=document.getElementById("nav-rankings"))==null||a.addEventListener("click",()=>i("rankings")),e.querySelectorAll("[data-action]").forEach(d=>{d.addEventListener("click",()=>{if(d.classList.add("tapped"),setTimeout(()=>d.classList.remove("tapped"),200),d.dataset.action==="match-ai"){at(i);return}o("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await h.auth.signOut(),window.location.reload()})}function at(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${t.map(r=>`
            <div class="action-card" data-mode="${r.mode}" style="cursor:pointer">
              <div class="icon">${r.icon}</div>
              <div class="label">${r.label}</div>
              <div class="sub">${r.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",o),i.addEventListener("click",r=>{r.target===i&&o()}),i.querySelectorAll("[data-mode]").forEach(r=>{r.addEventListener("click",()=>{o(),e("match",{matchMode:r.dataset.mode})})})}const ce={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function F(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}function Ne(e){let t=0;for(let i=0;i<e.length-1;i++){const o=e[i],r=e[i+1];if(!o||!r)continue;const n=U(o,r);n==="#00ff88"?t+=2:n==="#FFD700"&&(t+=1)}return t}function Re(e,t={}){const i=e.reduce((n,a)=>{const d=a._line||a.job;return n+(Number(d==="MIL"?a.note_m:a.note_a)||0)},0),o=Ne(e);let r=i+o;return t.doubleAttack&&(r*=2),t.stolenNote&&(r-=t.stolenNote),{base:i,links:o,total:Math.max(0,r)}}function qe(e,t={}){const i=e.reduce((n,a)=>{const d=a._line||a.job;let s=0;return d==="GK"?s=Number(a.note_g)||0:d==="MIL"?s=Number(a.note_m)||0:s=Number(a.note_d)||0,n+s},0),o=Ne(e);let r=i+o;return t.stolenNote&&(r-=t.stolenNote),{base:i,links:o,total:Math.max(0,r)}}function Oe(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Pe(e,t,i="easy"){const o=e.filter(a=>!a.used);if(!o.length)return[];const r=[...o].sort((a,d)=>{const s=t==="attack"?F(a,"ATT"):a._line==="GK"?F(a,"GK"):F(a,"DEF");return(t==="attack"?F(d,"ATT"):d._line==="GK"?F(d,"GK"):F(d,"DEF"))-s});let n=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return r.slice(0,Math.min(n,r.length,3))}function st(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Ke={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},pe={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ne=["GK","DEF","MIL","ATT"],dt=["Tous","GK","DEF","MIL","ATT"],lt={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},we={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function He(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ie(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Me(e,t=""){var f,p;const i=e.player;if(!i)return"";const o=i.job||"ATT",r=pe[o],n=Ke[i.rarity]||"#ccc",a=ie(i,o),d=i.job2?ie(i,i.job2):null,s=i.job2?pe[i.job2]:null,l=He(i),c=we[i.country_code]||i.country_code||"";return`
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
        ${(f=i.clubs)!=null&&f.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((p=i.clubs)==null?void 0:p.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function ct(e){const t=e.job||"ATT",i=ie(e,t),o=we[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${o}</div>
      </div>
    </div>
  </div>`}async function pt(e,t){const{state:i,navigate:o,toast:r,openModal:n,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await h.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:s}=await h.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),l=(d||[]).filter(k=>k.card_type==="player"&&k.player),c=(d||[]).filter(k=>k.card_type==="game_changer"),f=(d||[]).filter(k=>k.card_type==="formation"),p=Object.keys(te),g=Object.keys(ce),x={};l.forEach(k=>{const T=k.player.id;x[T]=(x[T]||0)+1});const $=new Set(Object.keys(x).map(k=>String(k))),b=new Set(f.map(k=>k.formation)),w=new Set(c.map(k=>k.gc_type));let v="player",y="Tous",m="",u=!1;function _(){return[...l].sort((k,T)=>{const M=ne.indexOf(k.player.job),B=ne.indexOf(T.player.job);return M!==B?M-B:(k.player.surname_encoded||"").localeCompare(T.player.surname_encoded||"")})}function E(){return[...s||[]].sort((k,T)=>{const M=ne.indexOf(k.job),B=ne.indexOf(T.job);return M!==B?M-B:(k.surname_encoded||"").localeCompare(T.surname_encoded||"")})}function I(){return _().filter(k=>{const T=k.player,M=y==="Tous"||T.job===y,B=!m||`${T.firstname} ${T.surname_encoded}`.toLowerCase().includes(m);return M&&B})}function A(){return E().filter(k=>{const T=y==="Tous"||k.job===y,M=!m||`${k.firstname} ${k.surname_encoded}`.toLowerCase().includes(m);return T&&M})}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Ma collection</h2>
      <p>${l.length} carte(s) joueur · ${c.length} Game Changer · ${f.length} Formation</p>
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
  </div>`;function L(){const k=document.getElementById("col-filters");k&&(v==="player"?(k.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${m}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${dt.map(T=>`
            <button class="filter-btn" data-job="${T}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${T===y?"var(--green)":"var(--gray-200)"};
                background:${T===y?"var(--green)":"#fff"};
                color:${T===y?"#fff":"var(--gray-600)"}">
              ${T}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${u?"var(--yellow)":"var(--gray-200)"};
              background:${u?"var(--yellow)":"#fff"};
              color:${u?"#fff":"var(--gray-600)"}">
            ${u?"✓ Tout afficher":"Voir tout"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",T=>{m=T.target.value.toLowerCase(),z()}),e.querySelectorAll(".filter-btn").forEach(T=>{T.addEventListener("click",()=>{y=T.dataset.job,L(),z()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{u=!u,L(),z()})):(k.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${u?"var(--yellow)":"var(--gray-200)"};
              background:${u?"var(--yellow)":"#fff"};
              color:${u?"#fff":"var(--gray-600)"}">
            ${u?"✓ Tout afficher":"Voir tout"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{u=!u,L(),z()})))}function z(){const k=document.getElementById("col-grid");k&&(v==="player"?C(k):v==="formation"?R(k):q(k))}function C(k){if(u){const T=A();if(!T.length){k.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}k.innerHTML=T.map(M=>{if($.has(String(M.id))){const S=l.find(H=>H.player.id===M.id),D=x[M.id]||1,O=D>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${D}</div>`:"",K=l.filter(H=>H.player.id===M.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Me(S,O+K)}return ct(M)}).join("")}else{const T=I();if(!T.length){k.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const M={},B=[];T.forEach(S=>{const D=S.player.id;M[D]||(M[D]=!0,B.push(S))}),k.innerHTML=B.map(S=>{const D=x[S.player.id]||1,O=D>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${D}</div>`:"",K=l.filter(H=>H.player.id===S.player.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Me(S,O+K)}).join("")}k.querySelectorAll("[data-card-id]").forEach(T=>{T.addEventListener("click",()=>{const M=l.find(B=>B.id===T.dataset.cardId);M&&gt(M,l,x,t)})})}function R(k){const T=u?p:[...b];if(!T.length){k.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}k.innerHTML=T.map(M=>{if(b.has(M)){const S=f.find(P=>P.formation===M),D=f.filter(P=>P.formation===M).length,O=D>1?`<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${D}</div>`:"";return`
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
        </div>`}).join(""),k.querySelectorAll("[data-form-id]").forEach(M=>{M.addEventListener("click",()=>{const B=f.find(S=>S.id===M.dataset.formId);B&&ut(B,f,t,n)})})}function q(k){const T=u?g:[...w];if(!T.length){k.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}k.innerHTML=T.map(M=>{const B=w.has(M),S=ce[M]||{icon:"⚡"};if(B){const D=c.find(K=>K.gc_type===M),O=c.filter(K=>K.gc_type===M).length,P=O>1?`<div style="position:absolute;top:4px;right:4px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${O}</div>`:"";return`
          <div data-gc-id="${D.id}" data-gc-type="${M}" style="
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
        </div>`}).join(""),k.querySelectorAll("[data-gc-id]").forEach(M=>{M.addEventListener("click",()=>ft(M.dataset.gcType,n))})}e.querySelectorAll(".col-tab-btn").forEach(k=>{k.addEventListener("click",()=>{v=k.dataset.tab,y="Tous",m="",u=!1,e.querySelectorAll(".col-tab-btn").forEach(T=>{const M=T.dataset.tab===v;T.style.borderBottomColor=M?"var(--green)":"transparent",T.style.color=M?"var(--green)":"var(--gray-600)"}),L(),z()})}),L(),z()}function ft(e,t){const i=ce[e]||{icon:"⚡",desc:"Effet spécial."};t("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Z=1e3;function ut(e,t,i,o){var $,b,w;const{state:r,toast:n,closeModal:a,navigate:d,refreshProfile:s}=i,l=e.formation,c={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const v=$e[l]||{},y=te[l]||[],m=290,u=360,_=20;function E(A){const L=v[A];return L?{x:L.x*m,y:L.y*u}:null}let I=`<svg width="${m}" height="${u}" viewBox="0 0 ${m} ${u}" xmlns="http://www.w3.org/2000/svg">`;for(const[A,L]of y){const z=E(A),C=E(L);!z||!C||(I+=`<line x1="${z.x}" y1="${z.y}" x2="${C.x}" y2="${C.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const A of Object.keys(v)){const L=E(A);if(!L)continue;const z=A.replace(/\d+/,""),C=c[z]||"#555";I+=`<circle cx="${L.x}" cy="${L.y}" r="${_}" fill="${C}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,I+=`<text x="${L.x}" y="${L.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${z}</text>`}return I+="</svg>",I}const p=t.filter(v=>v.formation===l),g=p.length,x=!e.is_for_sale;o(`Formation ${l}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${Z.toLocaleString("fr")} crédits</div>
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Z}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),($=document.getElementById("direct-sell-form-btn"))==null||$.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${l} pour ${Z.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const v=p.find(m=>!m.is_for_sale)||p[0];if(!v){n("Aucune carte à vendre","error");return}const{error:y}=await h.from("cards").delete().eq("id",v.id);if(y){n(y.message,"error");return}await h.from("users").update({credits:(r.profile.credits||0)+Z}).eq("id",r.profile.id),await s(),n(`+${Z.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),d("collection")}),(b=document.getElementById("market-sell-form-btn"))==null||b.addEventListener("click",async()=>{const v=parseInt(document.getElementById("sell-price-form").value);if(!v||v<1){n("Prix invalide","error");return}await h.from("cards").update({is_for_sale:!0,sale_price:v}).eq("id",e.id),await h.from("market_listings").insert({seller_id:r.profile.id,card_id:e.id,price:v}),n("Carte mise en vente sur le marché !","success"),a(),d("collection")}),(w=document.getElementById("cancel-sell-form-btn"))==null||w.addEventListener("click",async()=>{await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await h.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),n("Annonce retirée","success"),a(),d("collection")})}function gt(e,t,i,o){var _,E,I,A,L,z;const{state:r,toast:n,openModal:a,closeModal:d,navigate:s,refreshProfile:l}=o,c=e.player,f=t.filter(C=>C.player.id===c.id),p=f.length,g=lt[c.rarity]||1e3,x=c.rarity!=="legende",$=He(c),b=ie(c,c.job),w=c.job2?ie(c,c.job2):null,v=pe[c.job]||"#1A6B3C",y=c.job2?pe[c.job2]:null,m=Ke[c.rarity]||"#ccc",u=we[c.country_code]||c.country_code||"";a(`${c.firstname} ${c.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${m};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${c.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(c.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${v}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${v}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${b}</text>
            </svg>
            ${w!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${y}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${w}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${$?`<img src="${$}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${c.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${u}</div>
            ${(_=c.clubs)!=null&&_.logo_url?`<img src="${c.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((E=c.clubs)==null?void 0:E.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${m}">${c.rarity.toUpperCase()}</div>
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${g.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${p-1} carte${p-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${p<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${x&&!e.is_for_sale?`
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(I=document.getElementById("close-detail"))==null||I.addEventListener("click",d),(A=document.getElementById("direct-sell-btn"))==null||A.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${c.surname_encoded} pour ${g.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const C=f.find(q=>!q.is_for_sale)||f[0];if(!C){n("Aucune carte à vendre","error");return}const{error:R}=await h.from("cards").delete().eq("id",C.id);if(R){n(R.message,"error");return}await h.from("users").update({credits:(r.profile.credits||0)+g}).eq("id",r.profile.id),await l(),n(`+${g.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),s("collection")}),(L=document.getElementById("market-sell-btn"))==null||L.addEventListener("click",async()=>{const C=parseInt(document.getElementById("sell-price").value);if(!C||C<1){n("Prix invalide","error");return}await h.from("cards").update({is_for_sale:!0,sale_price:C}).eq("id",e.id),await h.from("market_listings").insert({seller_id:r.profile.id,card_id:e.id,price:C}),n("Carte mise en vente sur le marché !","success"),d(),s("collection")}),(z=document.getElementById("cancel-sell-btn"))==null||z.addEventListener("click",async()=>{await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await h.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),n("Annonce retirée","success"),d(),s("collection")})}const fe={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ke(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}async function me(e,t){const{state:i,navigate:o,toast:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await h.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!a)return;const{data:d,error:s}=await h.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(s){r(s.message,"error");return}r("Deck créé !","success"),ze(d.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>ze(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const d=prompt("Nouveau nom :",a.dataset.name);if(!d||d===a.dataset.name)return;const{error:s}=await h.from("decks").update({name:d}).eq("id",a.dataset.rename);if(s){r(s.message,"error");return}r("Deck renommé !","success"),me(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await h.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:d}=await h.from("decks").delete().eq("id",a.dataset.delete);if(d){r(d.message,"error");return}r("Deck supprimé.","success"),me(e,t)})})}async function ze(e,t,i){const{state:o,toast:r}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await h.from("decks").select("*").eq("id",e).single(),{data:a}=await h.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),d=(a||[]).filter(g=>g.card_type==="player"&&g.player),s=(a||[]).filter(g=>g.card_type==="formation"),l=s.map(g=>g.formation).filter(Boolean),{data:c}=await h.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let f=n.formation||"4-4-2";l.length>0&&!l.includes(f)&&(f=l[0]);const p={deckId:e,name:n.name,formation:f,formationCardId:n.formation_card_id,slots:{},subs:[],playerCards:d,formationCards:s,availableFormations:l};(c||[]).forEach(g=>{g.is_starter?p.slots[g.position]=g.card_id:p.subs.includes(g.card_id)||p.subs.push(g.card_id)}),J(t,p,i)}function J(e,t,i){var s;const{navigate:o}=i;fe[t.formation];const r=Ce(t.formation),n=r.filter(l=>t.slots[l]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(fe),d=t.subs.map(l=>t.playerCards.find(c=>c.id===l)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${a.map(l=>`<option value="${l}" ${l===t.formation?"selected":""}>${l}</option>`).join("")}
      </select>
    </div>

    <!-- Terrain -->
    <div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);padding:16px;min-height:280px">
      <div id="deck-field"></div>
    </div>

    <!-- Remplaçants (Petit 4) -->
    <div style="padding:12px 16px;background:#fff;border-top:1px solid var(--gray-200)">
      <div style="font-size:12px;font-weight:700;margin-bottom:8px;color:var(--gray-600)">REMPLAÇANTS (${t.subs.length}/5)</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap" id="subs-list">
        ${d.map(l=>{const c=l.player;return`<div style="display:flex;align-items:center;gap:6px;background:#f5f5f5;border-radius:8px;padding:4px 8px;font-size:12px">
            <span style="background:${Y[c.job]};color:#fff;border-radius:4px;padding:1px 5px;font-size:10px;font-weight:700">${c.job}</span>
            ${c.firstname} ${c.surname_encoded}
            <button style="background:none;border:none;color:#c0392b;cursor:pointer;font-size:14px" data-remove-sub="${l.id}">✕</button>
          </div>`}).join("")}
        ${t.subs.length<5?'<button class="btn btn-ghost btn-sm" id="add-sub-btn">+ Remplaçant</button>':""}
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${n<11?"disabled":""}>
        ${n<11?`Placez encore ${11-n} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`,yt(e,t,r,i),document.getElementById("builder-back").addEventListener("click",()=>o("decks")),document.getElementById("formation-select").addEventListener("change",l=>{t.formation=l.target.value;const c=Ce(t.formation),f={};c.forEach(p=>{t.slots[p]&&(f[p]=t.slots[p])}),t.slots=f,J(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>vt(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(l=>{l.addEventListener("click",()=>{t.subs=t.subs.filter(c=>c!==l.dataset.removeSub),J(e,t,i)})}),(s=document.getElementById("add-sub-btn"))==null||s.addEventListener("click",()=>{xt(t,e,i)})}function yt(e,t,i,o){const r=document.getElementById("deck-field");if(!r)return;const n=t.formation,a=$e[n]||{},d=ye?ye(n)||te[n]||[]:te[n]||[],s={};i.forEach(y=>{const m=t.slots[y],u=m?t.playerCards.find(_=>_.id===m):null;s[y]=(u==null?void 0:u.player)||null});const l=i.filter(y=>y.startsWith("MIL"));let c=0,f=0;l.forEach(y=>{const m=s[y];m&&(c+=Number(m.note_m)||0)}),d.forEach(([y,m])=>{if(!y.startsWith("MIL")||!m.startsWith("MIL"))return;U(s[y],s[m])!=="#ff3333"&&f++});const p=320,g=320,x=28,$=4;function b(y){const m=a[y];return m?{x:m.x*p,y:m.y*g}:null}let w="";for(const[y,m]of d){const u=b(y),_=b(m);if(!u||!_)continue;const E=s[y],I=s[m],A=U(E,I);if(A==="#00ff88"||A==="#FFD700")w+=`<line x1="${u.x}" y1="${u.y}" x2="${_.x}" y2="${_.y}"
        stroke="${A}" stroke-width="${$*3}" stroke-linecap="round" opacity="0.25"/>`,w+=`<line x1="${u.x}" y1="${u.y}" x2="${_.x}" y2="${_.y}"
        stroke="${A}" stroke-width="${$}" stroke-linecap="round" opacity="0.95"/>`;else{const z=A==="#ff3333"||A==="#cc2222"?.75:.9;w+=`<line x1="${u.x}" y1="${u.y}" x2="${_.x}" y2="${_.y}"
        stroke="${A}" stroke-width="${$}" stroke-linecap="round" opacity="${z}"/>`}}for(const y of i){const m=b(y);if(!m)continue;const u=s[y],_=y.replace(/\d+/,""),I={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[_]||"#555",A=u?Number(_==="GK"?u.note_g:_==="DEF"?u.note_d:_==="MIL"?u.note_m:u.note_a)||0:null,L=u?(u.surname_encoded||"").slice(0,8).toUpperCase():"";if(u){const z=ke(u);z&&(w+=`
          <defs>
            <clipPath id="clip-${y}">
              <circle cx="${m.x}" cy="${m.y}" r="${x}"/>
            </clipPath>
          </defs>
          <image href="${z}" x="${m.x-x}" y="${m.y-x}" width="${x*2}" height="${x*2}"
            clip-path="url(#clip-${y})" preserveAspectRatio="xMidYMid slice" opacity="0.85"/>`),w+=`
        <circle cx="${m.x}" cy="${m.y}" r="${x}" fill="${z?"transparent":I}"
          stroke="${I}" stroke-width="2" />
        <circle cx="${m.x}" cy="${m.y}" r="${x}" fill="${I}" opacity="${z?"0.5":"1"}"
          stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
        ${z?`<image href="${z}" x="${m.x-x}" y="${m.y-x}" width="${x*2}" height="${x*2}"
          clip-path="url(#clip-${y})" preserveAspectRatio="xMidYMid slice" opacity="0.9"/>`:""}
        <text x="${m.x}" y="${m.y-3}" text-anchor="middle" font-size="13" font-weight="900"
          fill="white" font-family="Arial Black,Arial" style="text-shadow:0 1px 2px #000">${A}</text>
        <text x="${m.x}" y="${m.y+11}" text-anchor="middle" font-size="6.5" fill="rgba(255,255,255,0.9)"
          font-family="Arial">${L}</text>
        <rect x="${m.x-x}" y="${m.y-x}" width="${x*2}" height="${x*2}"
          fill="transparent" class="deck-slot-hit" data-pos="${y}" style="cursor:pointer"/>`}else w+=`
        <circle cx="${m.x}" cy="${m.y}" r="${x}" fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="${m.x}" y="${m.y+6}" text-anchor="middle" font-size="16" fill="rgba(255,255,255,0.4)"
          font-family="Arial">+</text>
        <rect x="${m.x-x}" y="${m.y-x}" width="${x*2}" height="${x*2}"
          fill="transparent" class="deck-slot-hit" data-pos="${y}" style="cursor:pointer"/>`}const v="";r.innerHTML=`
    <!-- Badge MIL -->
    ${l.length>0?`
    <div style="position:absolute;top:6px;right:8px;z-index:10;
      background:rgba(212,160,23,0.95);color:#000;border-radius:8px;
      padding:3px 10px;font-size:11px;font-weight:900;pointer-events:none">
      MIL ${c}${f>0?` +${f}`:""} ⚡
    </div>`:""}

    <svg viewBox="0 0 ${p} ${g}" width="100%" style="display:block;max-width:380px;margin:0 auto">
      ${v}
      ${w}
    </svg>`,r.querySelectorAll(".deck-slot-hit").forEach(y=>{y.addEventListener("click",()=>mt(y.dataset.pos,t,e,o))})}function mt(e,t,i,o){var p,g,x;const{openModal:r,closeModal:n}=o,a=e.replace(/\d+/,""),d=t.slots[e],s=d?t.playerCards.find($=>$.id===d):null;(p=s==null?void 0:s.player)==null||p.id;const l=new Set;Object.entries(t.slots).forEach(([$,b])=>{var v;if($===e||!b)return;const w=t.playerCards.find(y=>y.id===b);(v=w==null?void 0:w.player)!=null&&v.id&&l.add(w.player.id)}),t.subs.forEach($=>{var w;const b=t.playerCards.find(v=>v.id===$);(w=b==null?void 0:b.player)!=null&&w.id&&l.add(b.player.id)});const c=new Set,f=t.playerCards.filter($=>{const b=$.player;return!(b.job===a||b.job2===a)||l.has(b.id)||c.has(b.id)?!1:(c.add(b.id),!0)});f.sort(($,b)=>{const w=a==="GK"?$.player.note_g:a==="DEF"?$.player.note_d:a==="MIL"?$.player.note_m:$.player.note_a;return(a==="GK"?b.player.note_g:a==="DEF"?b.player.note_d:a==="MIL"?b.player.note_m:b.player.note_a)-w}),r(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${f.length>0?f.map($=>{var m,u;const b=$.player,w=a==="GK"?b.note_g:a==="DEF"?b.note_d:a==="MIL"?b.note_m:b.note_a,v=ke(b),y={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[b.rarity];return`<div class="player-option" data-card-id="${$.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Y[a]}">
            ${v?`<img src="${v}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${Y[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${b.firstname} ${b.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${b.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${b.country_code}">
              ${(m=b.clubs)!=null&&m.logo_url?`<img src="${b.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((u=b.clubs)==null?void 0:u.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${b.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${Y[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${y};flex-shrink:0">
            ${w}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(g=document.getElementById("close-selector"))==null||g.addEventListener("click",n),(x=document.getElementById("remove-player"))==null||x.addEventListener("click",()=>{delete t.slots[e],n(),J(i,t,o)}),document.querySelectorAll(".player-option").forEach($=>{$.addEventListener("click",()=>{t.slots[e]=$.dataset.cardId,n(),J(i,t,o)})})}function xt(e,t,i){var s;const{openModal:o,closeModal:r}=i,n=new Set;Object.values(e.slots).filter(Boolean).forEach(l=>{var f;const c=e.playerCards.find(p=>p.id===l);(f=c==null?void 0:c.player)!=null&&f.id&&n.add(c.player.id)}),e.subs.forEach(l=>{var f;const c=e.playerCards.find(p=>p.id===l);(f=c==null?void 0:c.player)!=null&&f.id&&n.add(c.player.id)});const a=new Set,d=e.playerCards.filter(l=>{var c,f,p;return n.has((c=l.player)==null?void 0:c.id)||a.has((f=l.player)==null?void 0:f.id)?!1:(a.add((p=l.player)==null?void 0:p.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${d.length>0?d.map(l=>{var g;const c=l.player,f=ke(c),p=c.job==="GK"?c.note_g:c.job==="DEF"?c.note_d:c.job==="MIL"?c.note_m:c.note_a;return`<div class="player-option" data-card-id="${l.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Y[c.job]}">
            ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${c.firstname} ${c.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${c.job} · ${c.country_code} · ${((g=c.clubs)==null?void 0:g.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${Y[c.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${p}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(s=document.getElementById("close-sub-selector"))==null||s.addEventListener("click",r),document.querySelectorAll(".player-option").forEach(l=>{l.addEventListener("click",()=>{e.subs.push(l.dataset.cardId),r(),J(t,e,i)})})}async function vt(e,t){const{state:i,toast:o,navigate:r}=t,n=e.formationCards.find(s=>s.formation===e.formation),a=(n==null?void 0:n.id)||e.formationCardId;await h.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await h.from("deck_cards").delete().eq("deck_id",e.deckId);const d=[];if(Object.entries(e.slots).forEach(([s,l],c)=>{d.push({deck_id:e.deckId,card_id:l,position:s,is_starter:!0,slot_order:c})}),e.subs.forEach((s,l)=>{d.push({deck_id:e.deckId,card_id:s,position:`SUB${l+1}`,is_starter:!1,slot_order:100+l})}),d.length>0){const{error:s}=await h.from("deck_cards").insert(d);if(s){o(s.message,"error");return}}o("Deck enregistré ✅","success"),r("decks")}function Ce(e){const t=fe[e]||fe["4-4-2"],i=["GK1"];for(let o=1;o<=t.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=t.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=t.ATT;o++)i.push(`ATT${o}`);return i}const je=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Ue={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function bt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const ht={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},$t={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function wt(e,{state:t,navigate:i,toast:o}){var n;const r=((n=t.profile)==null?void 0:n.credits)||0;e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${r.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${je.map(a=>{const d=r>=a.cost||a.cost===0,s=a.id==="players_std"||a.id==="players_pub";return`<div class="booster-card ${d?"":"disabled"}" data-booster="${a.id}" style="position:relative">
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(a=>{a.addEventListener("click",async()=>{const d=je.find(s=>s.id===a.dataset.booster);if(d){a.style.opacity="0.5",a.style.pointerEvents="none";try{await kt(d,{state:t,toast:o,navigate:i,container:e})}catch(s){o(s.message,"error"),a.style.opacity="",a.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(a=>{a.addEventListener("click",d=>{d.stopPropagation(),Mt()})})}async function kt(e,{state:t,toast:i,navigate:o,container:r}){if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.id==="players_pub"&&await zt();const{data:n}=await h.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((n||[]).filter(c=>c.card_type==="player").map(c=>c.player_id)),d=new Set((n||[]).filter(c=>c.card_type==="formation").map(c=>c.formation));let s=[];e.type==="player"?s=await It(t.profile,e.cardCount,e.cost):e.type==="game_changer"?s=await At(t.profile,e.cardCount,e.cost):e.type==="formation"&&(s=await Tt(t.profile,e.cost)),s.forEach(c=>{c.card_type==="player"&&c.player?c.isDuplicate=a.has(c.player.id):c.card_type==="formation"&&(c.isDuplicate=d.has(c.formation))});const{data:l}=await h.from("users").select("*").eq("id",t.profile.id).single();l&&(t.profile=l),Lt(s,e,o)}function _t(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function V(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Et(e,t){let i;switch(t){case"legende":i=e.filter(o=>o.rarity==="legende"),i.length||(i=e.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=e.filter(o=>V(o)>=6));break;case"special":i=e.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=e.filter(o=>V(o)>=6));break;case"normal_high":i=e.filter(o=>o.rarity==="normal"&&V(o)>=6),i.length||(i=e.filter(o=>V(o)>=6));break;default:i=e.filter(o=>o.rarity==="normal"&&V(o)>=1&&V(o)<=5),i.length||(i=e.filter(o=>o.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function It(e,t,i){if(i>0){const{error:l}=await h.from("users").update({credits:e.credits-i}).eq("id",e.id);if(l)throw l}const{data:o}=await h.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const r=o.filter(l=>l.job==="GK"),n=o.filter(l=>l.job!=="GK"),a=!e.first_booster_opened&&r.length>0,d=[];for(let l=0;l<t;l++){const c=l===0&&a?r:l===0?n:o,f=_t(),p=Et(c,f);p&&d.push(p)}a&&await h.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:s}=await h.from("cards").insert(d.map(l=>({owner_id:e.id,player_id:l.id,card_type:"player"}))).select();return d.map((l,c)=>({...s[c],player:l}))}async function At(e,t,i){const{error:o}=await h.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o;const r=Object.keys(Ue),n=Array.from({length:t},()=>r[Math.floor(Math.random()*r.length)]),{data:a}=await h.from("cards").insert(n.map(d=>({owner_id:e.id,card_type:"game_changer",gc_type:d}))).select();return a}async function Tt(e,t){const{error:i}=await h.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const o=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"],r=o[Math.floor(Math.random()*o.length)],{data:n}=await h.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();return n}function Lt(e,t,i){const o=document.createElement("div");o.id="booster-anim-overlay",o.innerHTML=`
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
  `,document.body.appendChild(o);let r=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(r)return;r=!0;const p=document.getElementById("pack-visual");p.classList.add("shaking"),setTimeout(()=>{p.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",a(0)},600)},500)});let n=0;function a(p){n=p;const g=document.getElementById("reveal-phase");g.style.display="flex",d(p)}function d(p){var u;const g=e[p],x=document.getElementById("card-counter"),$=document.getElementById("single-card-slot"),b=document.getElementById("card-tap-hint");x&&(x.textContent=`Carte ${p+1} / ${e.length}`),b&&(b.textContent=p<e.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const w=Be(g),v=g.card_type==="player"&&((u=g.player)==null?void 0:u.rarity)==="legende";$.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${v?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${w}
        ${g.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,v&&c();const y=document.getElementById("current-card-wrap");let m=!1;y.addEventListener("click",()=>{if(m)return;m=!0;const _=p+1;_<e.length?(y.style.transition="all 0.25s ease",y.style.transform="translateX(-120%) rotate(-15deg)",y.style.opacity="0",setTimeout(()=>d(_),250)):s()})}function s(){f(),document.getElementById("reveal-phase").style.display="none";const p=document.getElementById("recap-phase");p.style.display="flex";const g=document.getElementById("recap-grid");g.innerHTML=e.map((x,$)=>`
      <div class="recap-card" style="--i:${$};animation-delay:${$*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${Be(x)}
        ${x.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let l=null;function c(){const p=document.getElementById("fireworks-canvas");if(!p)return;p.width=window.innerWidth,p.height=window.innerHeight;const g=p.getContext("2d"),x=[];function $(){const w=Math.random()*p.width,v=Math.random()*p.height*.6,y=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],m=y[Math.floor(Math.random()*y.length)];for(let u=0;u<60;u++){const _=Math.PI*2/60*u,E=2+Math.random()*5;x.push({x:w,y:v,vx:Math.cos(_)*E,vy:Math.sin(_)*E,alpha:1,color:m,size:2+Math.random()*3})}}$(),l=setInterval($,600);function b(){if(document.getElementById("fireworks-canvas")){g.clearRect(0,0,p.width,p.height);for(let w=x.length-1;w>=0;w--){const v=x[w];if(v.x+=v.vx,v.y+=v.vy+.08,v.vy*=.98,v.alpha-=.018,v.alpha<=0){x.splice(w,1);continue}g.globalAlpha=v.alpha,g.fillStyle=v.color,g.beginPath(),g.arc(v.x,v.y,v.size,0,Math.PI*2),g.fill()}g.globalAlpha=1,(l!==null||x.length>0)&&requestAnimationFrame(b)}}b()}function f(){l!==null&&(clearInterval(l),l=null);const p=document.getElementById("fireworks-canvas");p&&p.getContext("2d").clearRect(0,0,p.width,p.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{f(),o.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{f(),o.remove(),i("boosters")})}function Be(e){var t,i;if(e.card_type==="player"&&e.player){const o=e.player,r=o.job||"ATT",n=ht[r]||"#1A6B3C",a=$t[o.rarity]||"#ccc",d=r==="GK"?o.note_g:r==="DEF"?o.note_d:r==="MIL"?o.note_m:o.note_a,s=bt(o),l={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[o.country_code]||o.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${a};overflow:hidden;display:flex;flex-direction:column">
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
        ${(t=o.clubs)!=null&&t.logo_url?`<img src="${o.clubs.logo_url}" style="width:20px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:700">${(((i=o.clubs)==null?void 0:i.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>`}if(e.card_type==="game_changer"){const o=Ue[e.gc_type]||{icon:"⚡",desc:""};return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#3d0a7a,#7a28b8);border-radius:12px;border:3px solid #9b59b6;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:16px">
      <div style="font-size:40px">${o.icon}</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">GAME CHANGER</div>
      <div style="font-weight:700;font-size:13px;color:#fff;text-align:center">${e.gc_type}</div>
      <div style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${o.desc}</div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Mt(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function zt(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:16px";let i=5;t.innerHTML=`<div style="font-size:48px">📺</div>
      <div style="font-size:18px;font-weight:700">Publicité</div>
      <div style="font-size:36px;font-weight:900" id="ad-cd">5</div>`,document.body.appendChild(t);const o=setInterval(()=>{i--;const r=document.getElementById("ad-cd");r&&(r.textContent=i),i<=0&&(clearInterval(o),t.remove(),e(!0))},1e3)})}const X={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Q={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ve(e,t,i,o,r){var n;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${o}</button>
    </div>
  </div>`,(n=document.getElementById("msg-btn"))==null||n.addEventListener("click",r)}function G(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function xe(e){var i,o;const t=e.player;return{cardId:e.id,id:t.id,firstname:t.firstname,name:t.surname_encoded,country_code:t.country_code,club_id:t.club_id,job:t.job,job2:t.job2,note_g:Number(t.note_g)||0,note_d:Number(t.note_d)||0,note_m:Number(t.note_m)||0,note_a:Number(t.note_a)||0,rarity:t.rarity,skin:t.skin,hair:t.hair,hair_length:t.hair_length,clubName:((i=t.clubs)==null?void 0:i.encoded_name)||null,clubLogo:((o=t.clubs)==null?void 0:o.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function _e(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Ct(){const e=Math.random()*100;return e<.1?4:e<5?3:e<20?2:1}function Ye(e,t){const i=X[t]||X["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]},r=[...e];for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let s=0;s<i[n];s++){let l=r.findIndex(c=>c.job===n);if(l===-1&&(l=r.findIndex(c=>c.job2===n)),l===-1&&(l=0),r[l]){const c={...r[l],_line:n};a.push(c),r.splice(l,1)}}const d=_e(a.length);a.forEach((s,l)=>{s._col=d[l]}),o[n]=a}return o}async function jt(e,t){const{data:i}=await h.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length").eq("is_active",!0).limit(60);if(!i||i.length<11)return Bt(e);const o=X[e]||X["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},n=[...i];for(const a of["GK","DEF","MIL","ATT"]){const d=n.filter(p=>p.job===a),s=n.filter(p=>p.job!==a),l=[...d,...s],c=[];for(let p=0;p<o[a];p++){const g=l[p]||n[p];g&&c.push({cardId:"ai-"+g.id+"-"+p,id:g.id,firstname:g.firstname,name:g.surname_encoded,country_code:g.country_code,club_id:g.club_id,job:g.job,job2:g.job2,note_g:Number(g.note_g)||0,note_d:Number(g.note_d)||0,note_m:Number(g.note_m)||0,note_a:Number(g.note_a)||0,rarity:g.rarity,skin:g.skin,hair:g.hair,hair_length:g.hair_length,boost:0,used:!1,_line:a})}const f=_e(c.length);c.forEach((p,g)=>{p._col=f[g]}),r[a]=c}return r}function Bt(e){const t=X[e]||X["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let r=0;for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let s=0;s<t[n];s++){const l=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+r,id:"fake-"+r,firstname:"IA",name:o[r%o.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?l:2,note_d:n==="DEF"?l:2,note_m:n==="MIL"?l:2,note_a:n==="ATT"?l:2,rarity:"normal",boost:0,used:!1,_line:n}),r++}const d=_e(a.length);a.forEach((s,l)=>{s._col=d[l]}),i[n]=a}return i}async function St(e,t){var u;const{state:i,navigate:o,toast:r}=t,n=i.params||{};e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const a=n.matchMode||"vs_ai_easy",d=a.replace("vs_ai_",""),s=a;if(!n.deckId)return Ft(e,t,a);const l=n.deckId,[{data:c},{data:f}]=await Promise.all([h.from("decks").select("formation,name").eq("id",l).single(),h.from("deck_cards").select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`).eq("deck_id",l).order("slot_order")]),p=(f||[]).filter(_=>{var E;return _.is_starter&&((E=_.card)==null?void 0:E.player)}).map(_=>xe(_.card)),g=(f||[]).filter(_=>{var E;return!_.is_starter&&((E=_.card)==null?void 0:E.player)}).map(_=>xe(_.card));if(p.length<11){Ve(e,"⚠️",`Deck incomplet (${p.length}/11).`,"Compléter",()=>o("decks"));return}const x=(f||[]).find(_=>{var E;return((E=_.card)==null?void 0:E.card_type)==="formation"}),$=(c==null?void 0:c.formation)||((u=x==null?void 0:x.card)==null?void 0:u.formation)||"4-4-2",{data:b}=await h.from("cards").select("id,gc_type").eq("owner_id",i.profile.id).eq("card_type","game_changer"),w=Ye(p,$),v=await jt($),{data:y}=await h.from("matches").insert({home_id:i.profile.id,away_id:null,mode:s,home_deck_id:l,status:"in_progress"}).select().single(),m={matchId:y==null?void 0:y.id,mode:s,difficulty:d,formation:$,homeTeam:w,aiTeam:v,homeSubs:g,subsUsed:0,maxSubs:Math.min(g.length,3),homeScore:0,aiScore:0,gcCards:b||[],usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Dt(e,m,t)}async function Ft(e,t,i){const{state:o,navigate:r}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await h.from("decks").select("id,name,is_active,formation").eq("owner_id",o.profile.id).order("created_at",{ascending:!1});if(!n||n.length===0){Ve(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>r("decks"));return}const a=n.map(c=>c.id),{data:d}=await h.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let s=0;function l(){var v,y,m,u,_;const c=n[s],f=(d||[]).filter(E=>E.deck_id===c.id),p=f.filter(E=>{var I;return E.is_starter&&((I=E.card)==null?void 0:I.player)}).map(E=>xe(E.card)),g=f.find(E=>{var I;return((I=E.card)==null?void 0:I.card_type)==="formation"}),x=c.formation||((v=g==null?void 0:g.card)==null?void 0:v.formation)||"4-4-2",$=p.length>=11?Ye(p,x):null,b=p.length>=11;e.innerHTML=`
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
          <div style="font-size:11px;opacity:.6;margin-top:2px">${x} · ${p.length}/11 ${c.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${s===n.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${s===n.length-1?"0.1":"0.3"});color:${s===n.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${s===n.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : contraindre la largeur du SVG pour contrôler hauteur+largeur -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${$?`<div style="width:min(98vw, calc(100dvh - 400px));overflow:hidden;flex-shrink:0">${Qe($,x,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${p.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${n.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${n.map((E,I)=>`<div style="width:7px;height:7px;border-radius:50%;background:${I===s?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,(y=document.getElementById("prev-deck"))==null||y.addEventListener("click",()=>{s>0&&(s--,l())}),(m=document.getElementById("next-deck"))==null||m.addEventListener("click",()=>{s<n.length-1&&(s++,l())}),(u=document.getElementById("validate-deck"))==null||u.addEventListener("click",()=>{b&&t.navigate("match",{matchMode:i,deckId:c.id})}),(_=document.getElementById("cancel-deck-select"))==null||_.addEventListener("click",()=>r("home"));const w=document.getElementById("deck-swipe-zone");if(w){let E=0,I=0;w.addEventListener("touchstart",A=>{E=A.touches[0].clientX,I=A.touches[0].clientY},{passive:!0}),w.addEventListener("touchend",A=>{const L=A.changedTouches[0].clientX-E,z=A.changedTouches[0].clientY-I;Math.abs(L)<40||Math.abs(L)<Math.abs(z)||(L<0&&s<n.length-1?(s++,l()):L>0&&s>0&&(s--,l()))},{passive:!0})}}l()}function Dt(e,t,i){const o=t.homeTeam.MIL||[],r=t.aiTeam.MIL||[];function n(f){return f.reduce((p,g)=>p+F(g,"MIL"),0)}function a(f){let p=0;for(let g=0;g<f.length-1;g++){const x=U(f[g],f[g+1]);x!=="#ff3333"&&x!=="#cc2222"&&p++}return p}const d=n(o)+a(o),s=n(r)+a(r),l=d>=s;function c(f,p,g){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${p}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${f.map((x,$)=>{const b=G(x),w=$<f.length-1?U(x,f[$+1]):null,v=w&&w!=="#ff3333"&&w!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${g};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${b?`<img src="${b}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${F(x,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${x.name}</div>
          </div>
          ${w?`<div style="width:14px;height:4px;border-radius:2px;background:${w};flex-shrink:0;opacity:${v?.9:.3}"></div>`:""}
          `}).join("")}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${n(f)} + ${a(f)} liens = <b style="color:#fff">${n(f)+a(f)}</b>
      </div>
    </div>`}e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;gap:24px;padding:24px;background:#0a3d1e">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${c(o,t.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${d}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${s}</div>
    </div>

    ${c(r,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const f=document.getElementById("score-home"),p=document.getElementById("score-ai"),g=document.getElementById("midfield-result");if(f&&p&&(l?(f.style.fontSize="80px",f.style.color="#FFD700",p.style.opacity="0.25"):(p.style.fontSize="80px",p.style.color="#ff6b6b",f.style.opacity="0.25")),g){const x=Ct();g.style.opacity="1",l&&t.clubName,g.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${l?`${t.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${l?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${x}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,l&&(t.boostCard={value:x})}t.attacker=l?"home":"ai",t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(x=>({name:x.name,note:F(x,"MIL"),portrait:G(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),aiPlayers:r.map(x=>({name:x.name,note:F(x,"MIL"),portrait:G(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),homeTotal:d,aiTotal:s,text:`Duel milieu : ${t.clubName} ${d} – ${s} IA → ${l?t.clubName+" attaque":"IA attaque"}`}),setTimeout(()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",N(e,t,i),t.attacker==="ai"&&setTimeout(()=>ve(e,t,i),1e3)},2800)},1200)}function We(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function W(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const o=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:G(e),r=We(e),n=e._line||e.job||"MIL",a=Q[n]||"#555",d={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",s=e.note!==void 0?Number(e.note)||0:(Number(F(e,n))||0)+(e.boost||0),l=Je(e==null?void 0:e.country_code),c=Math.round(i*.19),f=Math.round(i*.25),p=i-Math.round(i*.19)-Math.round(i*.25),g=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${d};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${g}">
    <div style="position:absolute;top:0;left:0;right:0;height:${c}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${o&&!(e!=null&&e.used)?`<img src="${o}" style="position:absolute;top:${c}px;left:0;width:${t}px;height:${p}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      <span style="font-size:${f-4}px;line-height:1">${l}</span>
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":s}</span>
      ${r?`<img src="${r}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function re(e,t,i){if(!(e!=null&&e.length))return"";const o=e.slice(0,5);let r='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return o.forEach((n,a)=>{if(r+=W(n,40,52),a<o.length-1){const d=U(n,o[a+1]);r+=`<div style="width:7px;height:3px;background:${d==="#ff3333"||d==="#cc2222"?"rgba(255,255,255,0.12)":d};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(r+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),r+="</div>",r}function Je(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Xe(e,t,i,o,r=310,n=310){const a=$e[t]||{},d=ye(t)||te[t]||[],s={},l=["ATT","MIL","DEF","GK"];for(const v of l)(e[v]||[]).forEach((m,u)=>{s[`${v}${u+1}`]=m});function c(v){const y=a[v];return y?{x:y.x*r,y:y.y*n}:null}let f="";for(const[v,y]of d){const m=c(v),u=c(y);if(!m||!u)continue;const _=s[v],E=s[y],I=U(_,E);I==="#00ff88"||I==="#FFD700"?(f+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${u.x.toFixed(1)}" y2="${u.y.toFixed(1)}"
        stroke="${I}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,f+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${u.x.toFixed(1)}" y2="${u.y.toFixed(1)}"
        stroke="${I}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):f+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${u.x.toFixed(1)}" y2="${u.y.toFixed(1)}"
        stroke="${I}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const p=48,g=64,x=13,$=16,b={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[v,y]of Object.entries(s)){const m=c(v);if(!m||!y)continue;const u=v.replace(/[0-9]/g,""),_=Q[u]||"#555",E=i==="attack"&&["MIL","ATT"].includes(u)&&!y.used||i==="defense"&&["GK","DEF","MIL"].includes(u)&&!y.used,I=o.includes(y.cardId);let A;i==="attack"?A=u==="MIL"?Number(y.note_m)||0:Number(y.note_a)||0:i==="defense"?A=u==="GK"?Number(y.note_g)||0:u==="MIL"?Number(y.note_m)||0:Number(y.note_d)||0:A=Number(u==="GK"?y.note_g:u==="DEF"?y.note_d:u==="MIL"?y.note_m:y.note_a)||0,A=A+(y.boost||0);const L=(m.x-p/2).toFixed(1),z=(m.y-g/2).toFixed(1),C=y.used?.25:1,R=b[y==null?void 0:y.rarity]||b.normal,q=I?"#ff3030":R,k=I?3:(y==null?void 0:y.rarity)==="légende"||(y==null?void 0:y.rarity)==="pépite"?2.5:2,T=g-x-$;f+=`<defs><clipPath id="cp-${v}"><rect x="${L}" y="${(m.y-g/2+x).toFixed(1)}" width="${p}" height="${T}"/></clipPath></defs>`,f+=`<rect x="${L}" y="${z}" width="${p}" height="${g}" rx="5" fill="${_}" opacity="${C}"/>`;const M=G(y);M&&!y.used&&(f+=`<image href="${M}" x="${L}" y="${(m.y-g/2+x).toFixed(1)}" width="${p}" height="${T}" clip-path="url(#cp-${v})" preserveAspectRatio="xMidYMin slice"/>`),f+=`<rect x="${L}" y="${z}" width="${p}" height="${x}" rx="4" fill="rgba(255,255,255,0.92)"/>`,f+=`<text x="${m.x.toFixed(1)}" y="${(m.y-g/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(y.name||"").slice(0,9)}</text>`;const B=(m.y+g/2-$).toFixed(1);if(f+=`<rect x="${L}" y="${B}" width="${p}" height="${$}" fill="rgba(255,255,255,0.92)"/>`,y.used)f+=`<text x="${m.x.toFixed(1)}" y="${(m.y+g/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{f+=`<text x="${(m.x-13).toFixed(1)}" y="${(m.y+g/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Je(y.country_code)}</text>`,f+=`<text x="${m.x.toFixed(1)}" y="${(m.y+g/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${A}</text>`;const S=We(y);S?f+=`<image href="${S}" x="${(m.x+p/2-14).toFixed(1)}" y="${(m.y+g/2-$+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:y.clubName&&(f+=`<text x="${(m.x+14).toFixed(1)}" y="${(m.y+g/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(y.clubName||"").slice(0,3).toUpperCase()}</text>`),y.boost&&(f+=`<rect x="${(m.x+p/2-12).toFixed(1)}" y="${(m.y-g/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,f+=`<text x="${(m.x+p/2-5).toFixed(1)}" y="${(m.y-g/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${y.boost}</text>`)}f+=`<rect x="${L}" y="${z}" width="${p}" height="${g}" rx="5" fill="${I?"rgba(255,255,255,0.12)":"none"}" stroke="${q}" stroke-width="${k}" opacity="${C}"/>`,E&&(f+=`<rect x="${L}" y="${z}" width="${p}" height="${g}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${I?"selected":""}" data-card-id="${y.cardId}" data-role="${u}" style="cursor:pointer"/>`)}const w=38;return`<svg viewBox="${-w} ${-w} ${r+w*2} ${n+w*2}" width="100%" style="display:block;width:100%;max-width:380px;margin:0 auto">
    ${f}
  </svg>`}function Qe(e,t,i,o,r=300,n=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Xe(e,t,i,o,r,n)}
  </div>`}function ae(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}function Gt(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:wrap">
          ${(e.homePlayers||[]).map(i=>ae(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:wrap">
          ${(e.aiPlayers||[]).map(i=>ae(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${ae(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${ae(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function N(e,t,i){var g,x,$,b,w,v,y,m;const o=t.selected.map(u=>u.cardId),r=t.usedSubIds||[],n=t.homeSubs.filter(u=>!r.includes(u.cardId));Object.values(t.homeTeam).flat().filter(u=>u.used).length>0&&n.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const d=t.phase==="ai-attack"||t.phase==="ai-defense",s=t.phase==="attack",l=t.phase==="defense",c=t.phase==="finished",f=t.gcCards.filter(u=>!t.usedGc.includes(u.id)),p=t.boostCard&&!t.boostUsed;e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const _=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${re((_.players||[]).map(E=>({...E,used:!1})),"#ff6b6b",_.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const _=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${re((_.players||[]).map(E=>({...E,used:!1})),"#00ff88",_.total)}
          </div>`}const u=t.log[t.log.length-1];return u?'<div style="padding:2px 4px">'+Gt(u)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    <!-- ZONE CENTRALE : REMPLAÇANTS + TERRAIN -->
    <div style="display:flex;flex-shrink:0;overflow:hidden">

      <!-- Colonne remplaçants (mini cartes) -->
      <div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:50px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(u=>`
              <div class="sub-btn-col" data-sub-id="${u.cardId}" title="${u.firstname} ${u.name}" style="cursor:pointer;flex-shrink:0">
                ${W(u,44,58)}
              </div>`).join("")}
      </div>

      <!-- Terrain -->
      <div style="overflow:hidden;min-width:0;display:flex;align-items:flex-start;justify-content:center" id="match-field">
        <div style="width:min(calc(100vw - 56px), calc(100dvh - 370px));aspect-ratio:1;overflow:hidden;flex-shrink:0">
          ${Qe(t.homeTeam,t.formation,t.phase,o,300,300)}
        </div>
      </div>
    </div>

    <!-- ZONE BAS : GC + BOUTON ACTION -->
    <div style="display:flex;align-items:flex-end;padding:6px 8px;background:rgba(0,0,0,0.35);gap:8px;flex-shrink:0;min-height:80px">

      <!-- Grille GC -->
      <div style="flex:1;display:grid;grid-template-columns:repeat(4,1fr);gap:3px;align-content:start">
        ${f.map(u=>{var _;return`
          <div class="gc-mini" data-gc-id="${u.id}" data-gc-type="${u.gc_type}"
            style="background:linear-gradient(135deg,#3d0a7a,#7a28b8);border:1px solid #9b59b6;border-radius:7px;padding:3px 2px;cursor:pointer;text-align:center">
            <div style="font-size:16px">${((_=ce[u.gc_type])==null?void 0:_.icon)||"⚡"}</div>
            <div style="font-size:6px;color:#fff;font-weight:600;line-height:1.2">${u.gc_type.slice(0,8)}</div>
          </div>`}).join("")}
        ${p?`
          <div id="boost-card" style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:7px;padding:3px 2px;cursor:pointer;text-align:center">
            <div style="font-size:16px">⚡</div>
            <div style="font-size:6px;color:#000;font-weight:900">+${t.boostCard.value}</div>
          </div>`:""}
      </div>

      <!-- Bouton action principal -->
      <div style="flex-shrink:0">
        ${c?'<button id="btn-results" style="width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,#D4A017,#FFD700);border:3px solid #FFD700;color:#000;font-size:28px;cursor:pointer;display:flex;align-items:center;justify-content:center">🏁</button>':d?'<div style="width:68px;height:68px;border-radius:50%;background:rgba(255,255,255,0.08);border:3px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.3);font-size:26px;display:flex;align-items:center;justify-content:center">⏳</div>':s?`<button id="btn-action" style="width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,#c47a00,#FFD700);border:3px solid #FFD700;color:#fff;font-size:28px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px rgba(255,215,0,0.4)" ${t.selected.length===0?'disabled style="opacity:0.4;cursor:default"':""}>⚔️</button>`:l?`<button id="btn-action" style="width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:3px solid #87CEEB;color:#fff;font-size:28px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px rgba(135,206,235,0.4)" ${t.selected.length===0?'disabled style="opacity:0.4;cursor:default"':""}>🛡️</button>`:'<div style="width:68px;height:68px;border-radius:50%;background:rgba(255,255,255,0.05);border:3px solid rgba(255,255,255,0.1)"></div>'}
        ${s||l?`
        <div style="text-align:center;font-size:8px;color:rgba(255,255,255,0.4);margin-top:3px">
          ${t.selected.length}/3
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(u=>{var _,E,I;if(u.type==="duel"){const A=u.isGoal,L=u.homeScored?"#FFD700":A?"#ff6b6b":"rgba(255,255,255,0.3)",z=u.homeScored?"⚽ BUT !":A?"⚽ BUT IA !":(_=u.homePlayers)!=null&&_.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${A?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${L};margin-bottom:4px">
                <div style="font-size:9px;color:${L};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${z}</div>
                ${(E=u.homePlayers)!=null&&E.length?`<div style="margin-bottom:3px">${re(u.homePlayers,"rgba(255,255,255,0.7)",u.homeTotal)}</div>`:""}
                ${(I=u.aiPlayers)!=null&&I.length?`<div style="opacity:0.7">${re(u.aiPlayers,"#ff6b6b",u.aiTotal)}</div>`:""}
              </div>`}return u.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${u.outPlayer?W({...u.outPlayer,used:!0,_line:u.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${u.inPlayer?W({...u.inPlayer,_line:u.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:u.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${u.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${u.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`,(g=document.getElementById("match-quit"))==null||g.addEventListener("click",()=>{confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,oe(e,t,i))}),(x=document.getElementById("view-ai"))==null||x.addEventListener("click",()=>Ut(t,i)),($=document.getElementById("toggle-history"))==null||$.addEventListener("click",()=>{var u;(u=document.getElementById("match-history-panel"))==null||u.classList.add("open")}),(b=document.getElementById("close-history"))==null||b.addEventListener("click",()=>{var u;(u=document.getElementById("match-history-panel"))==null||u.classList.remove("open")}),(w=document.getElementById("btn-action"))==null||w.addEventListener("click",()=>{t.selected.length!==0&&(s?Rt(e,t,i):l&&qt(e,t,i))}),(v=document.getElementById("btn-results"))==null||v.addEventListener("click",()=>oe(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(u=>{u.addEventListener("click",()=>Nt(u,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(u=>{u.addEventListener("click",()=>Kt(u.dataset.gcId,u.dataset.gcType,e,t,i))}),(y=document.getElementById("boost-card"))==null||y.addEventListener("click",()=>Ht(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(u=>{u.addEventListener("click",()=>Se(e,t,i,u.dataset.subId))}),(m=document.getElementById("sub-btn-main"))==null||m.addEventListener("click",()=>Se(e,t,i))}function Nt(e,t,i,o){const r=e.dataset.cardId,n=e.dataset.role,a=t.selected.findIndex(d=>d.cardId===r);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const d=(t.homeTeam[n]||[]).find(s=>s.cardId===r);d&&t.selected.push({...d,_role:n,_line:n})}N(i,t,o)}function Rt(e,t,i){const o=t.selected.map(n=>({...n,_line:n._role})),r=Re(o,t.modifiers.home);t.pendingAttack={...r,players:[...t.selected],side:"home"},t.selected.forEach(n=>{const a=(t.homeTeam[n._role]||[]).find(d=>d.cardId===n.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${r.total} (base ${r.base}${r.links?` +${r.links} liens`:""}) — ${t.selected.map(n=>n.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",N(e,t,i),setTimeout(()=>Ot(e,t,i),1200)}function qt(e,t,i){const o=t.selected.map(d=>({...d,_line:d._role})),r=qe(o,t.modifiers.home);t.selected.forEach(d=>{const s=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId);s&&(s.used=!0)});const n=Oe(t.pendingAttack.total,r.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>({name:d.name,note:d._line==="MIL"?d.note_m:d.note_a,portrait:G(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),homePlayers:t.selected.map(d=>{const s=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId)||d;return{name:s.name,note:s._line==="GK"?s.note_g:s._line==="MIL"?s.note_m:s.note_d,portrait:G(s),job:s.job,country_code:s.country_code,rarity:s.rarity,clubName:s.clubName,clubLogo:s.clubLogo}}),homeTotal:r.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(n.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(n.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${r.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,N(e,t,i),tt(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ue(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${r.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ue(e,t,i,"home-attack")}function ve(e,t,i){const o=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],r=Pe(o,"attack",t.difficulty);if(!r.length){et(e,t,i);return}const n=Re(r,t.modifiers.ai);t.pendingAttack={...n,players:r,side:"ai"},r.forEach(a=>{a.used=!0}),t.log.push({text:`🤖 IA attaque : ${n.total} (${r.map(a=>a.name).join(", ")})`,type:"info"}),t.modifiers.ai={},t.phase="defense",N(e,t,i)}function Ot(e,t,i){const o=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],r=Pe(o,"defense",t.difficulty),n=r.length>0?qe(r,t.modifiers.ai).total:0;r.forEach(s=>{s.used=!0});const a=Oe(t.pendingAttack.total,n,t.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(s=>({name:s.name,note:s._line==="MIL"?s.note_m:s.note_a,portrait:G(s),job:s.job,country_code:s.country_code,rarity:s.rarity,clubName:s.clubName,clubLogo:s.clubLogo})),aiPlayers:r.map(s=>({name:s.name,note:s._line==="GK"?s.note_g:s._line==="MIL"?s.note_m:s.note_d,portrait:G(s),job:s.job,country_code:s.country_code,rarity:s.rarity,clubName:s.clubName,clubLogo:s.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:n,isGoal:!1,homeScored:!1,text:""};if(a.shielded)d.text="🛡️ Bouclier IA !",t.log.push(d);else if(a.goal){t.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${t.pendingAttack.total} > ${n})`,t.log.push(d),t.modifiers.ai={},t.pendingAttack=null,N(e,t,i),tt(d.homePlayers,t.homeScore,t.aiScore,!0,()=>{ue(e,t,i,"ai-attack")});return}else d.text=`🧤 IA défend (${n} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.modifiers.ai={},t.pendingAttack=null,ue(e,t,i,"ai-attack")}function ue(e,t,i,o){if(t.round++,Ze(t)){oe(e,t,i);return}if(o==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(n=>!n.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(a=>!a.used).length){oe(e,t,i);return}t.phase="ai-attack",N(e,t,i),setTimeout(()=>ve(e,t,i),800);return}t.phase="attack",N(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(n=>!n.used).length){et(e,t,i);return}t.phase="ai-attack",N(e,t,i),setTimeout(()=>ve(e,t,i),800)}}function Ze(e){const t=["MIL","ATT","GK","DEF"].some(o=>(e.homeTeam[o]||[]).some(r=>!r.used)),i=["MIL","ATT","GK","DEF"].some(o=>(e.aiTeam[o]||[]).some(r=>!r.used));return!t&&!i}function et(e,t,i){Ze(t)?oe(e,t,i):(t.phase="attack",N(e,t,i))}function Pt(e,t,i){const o=document.createElement("div");o.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const r=G(e),n=G(t),a=Q[e.job]||"#555",d=Q[t.job]||"#555",s=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,l=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;o.innerHTML=`
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
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${d};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${l}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(o);let c=!1;const f=()=>{c||(c=!0,o.remove(),i())};o.addEventListener("click",f),setTimeout(f,2e3)}function ee(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function Se(e,t,i,o=null){if(t.phase!=="attack"){ee("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){ee(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const r=Object.values(t.homeTeam).flat().filter(f=>f.used),n=t.homeSubs.filter(f=>!t.usedSubIds.includes(f.cardId));if(!r.length){ee("Aucun joueur utilisé à remplacer");return}if(!n.length){ee("Aucun remplaçant disponible");return}let a=0,d=Math.max(0,n.findIndex(f=>f.cardId===o)),s=!1;const l=document.createElement("div");l.id="sub-overlay",l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function c(){var w,v,y,m,u,_;const f=r[a],p=n[d],g=Math.min(130,Math.round((window.innerWidth-90)/2)),x=Math.round(g*1.35),$=E=>`background:rgba(255,255,255,0.12);border:none;color:${E?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${E?"default":"pointer"};flex-shrink:0`;l.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${$(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${p?W({...p,used:!1,boost:0},g,x):"<div>—</div>"}</div>
        <button id="in-down" style="${$(d>=n.length-1)}" ${d>=n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${n.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${$(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${f?W({...f,used:!1,boost:0},g,x):"<div>—</div>"}</div>
        <button id="out-down" style="${$(a>=r.length-1)}" ${a>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${r.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(w=l.querySelector("#sub-close"))==null||w.addEventListener("click",()=>l.remove()),(v=l.querySelector("#out-up"))==null||v.addEventListener("click",()=>{a>0&&(a--,c())}),(y=l.querySelector("#out-down"))==null||y.addEventListener("click",()=>{a<r.length-1&&(a++,c())}),(m=l.querySelector("#in-up"))==null||m.addEventListener("click",()=>{d>0&&(d--,c())}),(u=l.querySelector("#in-down"))==null||u.addEventListener("click",()=>{d<n.length-1&&(d++,c())});const b=(E,I,A,L)=>{const z=l.querySelector("#"+E);if(!z)return;let C=0;z.addEventListener("touchstart",R=>{C=R.touches[0].clientY},{passive:!0}),z.addEventListener("touchend",R=>{const q=R.changedTouches[0].clientY-C;if(Math.abs(q)<30)return;const k=I();q<0&&k<L-1?(A(k+1),c()):q>0&&k>0&&(A(k-1),c())},{passive:!0})};b("in-panel",()=>d,E=>d=E,n.length),b("out-panel",()=>a,E=>a=E,r.length),(_=l.querySelector("#sub-confirm"))==null||_.addEventListener("click",E=>{if(E.preventDefault(),E.stopPropagation(),s)return;s=!0;const I=r[a],A=n[d];if(!I||!A)return;let L=null,z=-1;for(const[R,q]of Object.entries(t.homeTeam)){const k=(q||[]).findIndex(T=>T.cardId===I.cardId);if(k!==-1){L=R,z=k;break}}if(z===-1||!L){ee("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),l.remove();return}const C={...A,_line:L,_col:I._col||0,used:!1,boost:0};t.homeTeam[L].splice(z,1,C),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(A.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:I.name,firstname:I.firstname,note:F(I,L),portrait:G(I),job:I.job,country_code:I.country_code,rarity:I.rarity,clubName:I.clubName,clubLogo:I.clubLogo},inPlayer:{name:A.name,firstname:A.firstname,note:F(A,L),portrait:G(A),job:A.job,country_code:A.country_code,rarity:A.rarity,clubName:A.clubName,clubLogo:A.clubLogo},text:`🔄 ${A.firstname} ${A.name} remplace ${I.firstname} ${I.name}`}),l.remove(),Pt(I,A,()=>N(e,t,i))})}document.body.appendChild(l),c()}function Kt(e,t,i,o,r){if(!o.usedGc.includes(e)){switch(o.usedGc.push(e),t){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{let n=!1;for(const a of["ATT","MIL","DEF","GK"]){const d=(o.homeTeam[a]||[]).find(s=>s.used);if(d){d.used=!1,n=!0;break}}o.log.push({text:n?"💫 Joueur ressuscité !":"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const n=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(a=>!a.used);if(n.length){const a=n.sort((d,s)=>F(s,"ATT")-F(d,"ATT"))[0];a.used=!0,o.log.push({text:`❄️ ${a.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}h.from("cards").delete().eq("id",e).then(()=>{}),N(i,o,r)}}function Ht(e,t,i){const o=Object.values(t.homeTeam).flat().filter(r=>!r.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${o.map(r=>`
        <div class="player-boost-opt" data-card-id="${r.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Q[r.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${F(r,r._line||r.job)}</div>
          <div style="flex:1"><b>${r.firstname} ${r.name}</b><div style="font-size:11px;color:#888">${r._line||r.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(r=>{r.addEventListener("click",()=>{const n=r.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const d=(t.homeTeam[a]||[]).find(s=>s.cardId===n);if(d){d.boost=(d.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),N(e,t,i)})})}function tt(e,t,i,o,r){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(l,c)=>`
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
    ${t} – ${i}
  </div>
  ${e!=null&&e.length?`
  <div style="display:flex;gap:10px;animation:scoreIn 0.4s ease 1s both;position:relative;z-index:1">
    ${e.map(l=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${Q[l.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${l.portrait?`<img src="${l.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(l.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(n);let d=!1;const s=()=>{d||(d=!0,n.remove(),setTimeout(()=>r(),50))};n.addEventListener("click",s),setTimeout(s,3500)}async function oe(e,t,i){var c,f;t.phase="finished";const{state:o}=i,r=t.homeScore>t.aiScore,n=t.homeScore===t.aiScore,a=r?"victoire":n?"nul":"defaite",d=st(t.mode,a);t.matchId&&await h.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:r?o.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",t.matchId);const s={credits:(o.profile.credits||0)+d,matches_played:(o.profile.matches_played||0)+1};r?s.wins=(o.profile.wins||0)+1:n?s.draws=(o.profile.draws||0)+1:s.losses=(o.profile.losses||0)+1,await h.from("users").update(s).eq("id",o.profile.id),await i.refreshProfile();const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",l.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${r?"🏆":n?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${r?"Victoire !":n?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${d.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(l),(c=document.getElementById("res-home"))==null||c.addEventListener("click",()=>{l.remove(),i.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{l.remove(),i.navigate("match",{matchMode:t.mode})})}function Ut(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Xe(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Vt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Yt(e,t){const{state:i,toast:o}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await Ee(e,t)}async function Ee(e,t){const{state:i,toast:o}=t,{data:r}=await h.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),n=(r||[]).filter(s=>s.seller_id===i.profile.id),a=(r||[]).filter(s=>s.seller_id!==i.profile.id);e.innerHTML=`
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
      ${c.map(f=>{var b,w,v;const p=(b=f.card)==null?void 0:b.player;if(!p)return"";const g=p.job==="GK"?p.note_g:p.job==="DEF"?p.note_d:p.job==="MIL"?p.note_m:p.note_a,x=Vt[p.rarity],$=(i.profile.credits||0)>=f.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px">
          <div style="width:44px;height:44px;border-radius:8px;background:${Xt(p.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${x};flex-shrink:0">${g}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${p.firstname} ${p.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${p.country_code} · ${((w=p.clubs)==null?void 0:w.encoded_name)||"—"} · ${p.rarity} · ${p.job}</div>
            <div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((v=f.seller)==null?void 0:v.pseudo)||"—"}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${f.price.toLocaleString("fr")}</div>
            ${s==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${f.id}" ${$?"":"disabled"} style="margin-top:4px">${$?"Acheter":"Trop cher"}</button>`:`<button class="btn btn-danger btn-sm" data-cancel="${f.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,l.querySelectorAll("[data-buy]").forEach(f=>{f.addEventListener("click",()=>Wt(f.dataset.buy,c,e,t))}),l.querySelectorAll("[data-cancel]").forEach(f=>{f.addEventListener("click",()=>Jt(f.dataset.cancel,e,t))})}d("buy"),e.querySelectorAll(".mkt-tab").forEach(s=>{s.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(l=>{const c=l===s;l.style.background=c?"var(--green)":"#fff",l.style.color=c?"#fff":"var(--gray-600)",l.style.borderColor=c?"var(--green)":"var(--gray-200)"}),d(s.dataset.tab)})})}async function Wt(e,t,i,o){const{state:r,toast:n,refreshProfile:a}=o,d=t.find(s=>s.id===e);if(d){if((r.profile.credits||0)<d.price){n("Crédits insuffisants","error");return}if(confirm(`Acheter ${d.card.player.firstname} ${d.card.player.surname_encoded} pour ${d.price.toLocaleString("fr")} crédits ?`))try{const{error:s}=await h.from("cards").update({owner_id:r.profile.id,is_for_sale:!1,sale_price:null}).eq("id",d.card.id);if(s)throw s;await h.from("market_listings").update({status:"sold",buyer_id:r.profile.id,sold_at:new Date().toISOString()}).eq("id",e),await h.from("users").update({credits:(r.profile.credits||0)-d.price}).eq("id",r.profile.id);const{data:l}=await h.from("users").select("credits").eq("id",d.seller_id).single();l&&await h.from("users").update({credits:(l.credits||0)+d.price}).eq("id",d.seller_id),await h.from("notifications").insert({user_id:d.seller_id,type:"card_sold",message:`Ta carte ${d.card.player.surname_encoded} a été vendue pour ${d.price} crédits !`,data:{card_id:d.card.id,price:d.price}}),await a(),n("Carte achetée ! ✅","success"),Ee(i,o)}catch(s){n("Erreur : "+s.message,"error")}}}async function Jt(e,t,i){const{toast:o}=i,{data:r}=await h.from("market_listings").select("card_id").eq("id",e).single();await h.from("market_listings").update({status:"cancelled"}).eq("id",e),r&&await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",r.card_id),o("Annonce retirée","success"),Ee(t,i)}function Xt(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function Qt(e,{state:t,navigate:i,toast:o}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await h.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${r&&r.length>0?r.map((n,a)=>`
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
  `}const j={user:null,profile:null,page:"home",params:{}};function se(e,t="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=e,o.className=`show ${t}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function Zt(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function be(){document.getElementById("modal-overlay").classList.add("hidden")}async function de(){if(!j.user)return;const{data:e}=await h.from("users").select("*").eq("id",j.user.id).single();e&&(j.profile=e)}const Ie="mw_theme";function ge(){return localStorage.getItem(Ie)||"light"}function ei(e){var t;localStorage.setItem(Ie,e),he(e),(t=j.profile)!=null&&t.id&&h.from("users").update({theme:e}).eq("id",j.profile.id).then(()=>{})}function he(e){document.documentElement.setAttribute("data-theme",e)}function le(e,t={}){j.page=e,j.params=t,it()}async function it(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(o=>{o.classList.toggle("active",o.dataset.page===j.page)});const t=document.getElementById("nav-credits");t&&j.profile&&(t.textContent=`💰 ${(j.profile.credits||0).toLocaleString("fr")}`);const i={state:j,navigate:le,toast:se,openModal:Zt,closeModal:be,refreshProfile:de};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',j.page){case"home":await Le(e,i);break;case"collection":await pt(e,i);break;case"decks":await me(e,i);break;case"boosters":await wt(e,i);break;case"match":await St(e,i);break;case"market":await Yt(e,i);break;case"rankings":await Qt(e,i);break;default:await Le(e,i)}}function ti(){const e=document.getElementById("app"),t=j.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(o=>{o.addEventListener("click",r=>{r.preventDefault(),le(o.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>le("home")),document.getElementById("nav-credits").addEventListener("click",()=>le("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const r=ge()==="dark"?"light":"dark";ei(r),Fe(r)}),Fe(ge())}function Fe(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function ii(){he(ge()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&be()}),document.getElementById("modal-close").addEventListener("click",be);const{data:{session:e}}=await h.auth.getSession();if(!e){Ge(),Ae(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:se});return}j.user=e.user,await de(),Ge();try{const{data:t}=await h.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(o=>{i[o.formation]=o.links}),ot(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!j.profile){nt(document.getElementById("app"),{state:j,navigate:async()=>{await de(),De()},toast:se,refreshProfile:de});return}j.profile.theme&&j.profile.theme!==ge()&&(localStorage.setItem(Ie,j.profile.theme),he(j.profile.theme)),De(),h.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(j.user=null,j.profile=null,document.getElementById("app").innerHTML="",Ae(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:se}))})}function De(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",ti(),it()}function Ge(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}ii();
