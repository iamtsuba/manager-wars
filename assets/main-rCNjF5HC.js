import{s as w,l as J,F as $e,b as ge,c as Oe,d as pt}from"./formation-links-CDBKB_z4.js";function ze(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(s=>s.classList.remove("active")),n.classList.add("active"),document.getElementById("tab-login").style.display=n.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=n.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const n=document.getElementById("login-email").value.trim(),s=document.getElementById("login-password").value,o=document.getElementById("login-error");if(o.textContent="",!n||!s){o.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:d}=await w.auth.signInWithPassword({email:n,password:s});if(a.textContent="Se connecter",a.disabled=!1,d){o.textContent=d.message.includes("Invalid")?"Email ou mot de passe incorrect.":d.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const n=document.getElementById("reg-email").value.trim(),s=document.getElementById("reg-password").value,o=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!n||!s||!o){a.textContent="Remplissez tous les champs.";return}if(s.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(s!==o){a.textContent="Les mots de passe ne correspondent pas.";return}const d=document.getElementById("reg-btn");d.textContent="Création…",d.disabled=!0;const{error:r}=await w.auth.signUp({email:n,password:s});if(d.textContent="Créer mon compte",d.disabled=!1,r){a.textContent=r.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=n})}function ft(e,{state:t,navigate:i,toast:n,refreshProfile:s}){let o="#1A6B3C",a="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${a};border-color:${o}">
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
  `;function d(){var x;const l=document.getElementById("logo-preview"),c=document.getElementById("logo-initials"),p=((x=document.getElementById("setup-club"))==null?void 0:x.value)||"MW",u=p.trim().split(" ").filter(Boolean),f=u.length>=2?(u[0][0]+u[1][0]).toUpperCase():p.slice(0,2).toUpperCase();l&&(l.style.background=a,l.style.borderColor=o),c&&(c.textContent=f,c.style.color=o)}document.getElementById("color1").addEventListener("input",l=>{o=l.target.value,document.getElementById("swatch1").style.background=o,d()}),document.getElementById("color2").addEventListener("input",l=>{a=l.target.value,document.getElementById("swatch2").style.background=a,d()});function r(l){document.querySelectorAll(".setup-step").forEach(c=>c.classList.remove("active")),document.getElementById(`step-${l}`).classList.add("active"),document.getElementById("step-num").textContent=l,document.getElementById("progress-fill").style.width=`${Math.round(l/3*100)}%`,l===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("step1-error");if(c.textContent="",l.length<3){c.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:p}=await w.from("users").select("id").eq("pseudo",l).maybeSingle();if(p){c.textContent="Ce pseudo est déjà pris.";return}r(2)}),document.getElementById("step2-back").addEventListener("click",()=>r(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const l=document.getElementById("setup-club").value.trim(),c=document.getElementById("step2-error");if(c.textContent="",l.length<2){c.textContent="Nom trop court (min. 2 caractères).";return}const{data:p}=await w.from("users").select("id").eq("club_name",l).maybeSingle();if(p){c.textContent="Ce nom de club est déjà pris.";return}r(3)}),document.getElementById("step3-back").addEventListener("click",()=>r(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("setup-club").value.trim(),p=document.getElementById("step3-error"),u=document.getElementById("step3-finish");p.textContent="",u.disabled=!0,u.textContent="Création en cours…";try{const{error:f}=await w.from("users").insert({id:t.user.id,pseudo:l,club_name:c,club_color1:o,club_color2:a,credits:1e4});if(f)throw f;await ut(t.user.id),await s(),n(`Bienvenue ${l} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(f){p.textContent=f.message,u.disabled=!1,u.textContent="🚀 Créer mon profil !"}})}async function ut(e){const{data:t}=await w.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,n=i.filter(r=>r.job==="GK"),s=i.filter(r=>r.job!=="GK"),o=[];for(let r=0;r<5;r++){let l=[];if(r===0&&n.length>0){const c=n[Math.floor(Math.random()*n.length)];l.push(c);const p=Ce([...s]).slice(0,3);l.push(...p)}else l=Ce([...i]).slice(0,4);l.forEach(c=>{o.push({owner_id:e,player_id:c.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(r=>{o.push({owner_id:e,card_type:"game_changer",gc_type:r})});const d=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];o.push({owner_id:e,card_type:"formation",formation:d[Math.floor(Math.random()*d.length)]}),o.length>0&&await w.from("cards").insert(o),await w.from("users").update({first_booster_opened:!0}).eq("id",e)}function Ce(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}async function je(e,{state:t,navigate:i,toast:n}){var a,d;const s=t.profile;if(!s)return;const{data:o}=await w.from("matches").select("id,home_score,away_score,status,mode,winner_id,created_at").or(`home_id.eq.${s.id},away_id.eq.${s.id}`).eq("status","finished").order("created_at",{ascending:!1}).limit(3);e.innerHTML=`
  <div class="page">
    <div class="page-body">

      <!-- Bandeau pseudo (couleurs du club) -->
      <div class="hero hero-compact" style="background:${s.club_color1};border:2px solid ${s.club_color2}">
        <button class="nav-rankings-btn" id="nav-rankings" title="Classement">
          <img src="/manager-wars/icons/badge-trophy.png" alt="Classement">
        </button>
        <div class="info">
          <h3 style="margin:0">${s.pseudo}</h3>
          <div class="level">Niveau ${s.level} · ${s.club_name}</div>
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
          ${o.map(r=>{const l=r.winner_id===s.id,c=r.home_score===r.away_score,p=c?"N":l?"V":"D",u=c?"#888":l?"#1A6B3C":"#c0392b",f={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat"}[r.mode]||r.mode,$=new Date(r.created_at).toLocaleDateString("fr",{month:"short",day:"numeric"});return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
              <div>
                <div style="font-size:13px;font-weight:600">${f}</div>
                <div style="font-size:11px;color:var(--gray-600)">${$}</div>
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
        ${s.is_admin?`
        <a href="/manager-wars/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:6px 16px;border-radius:8px">
          ⚙️ Admin Editor
        </a>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(r=>{r.addEventListener("click",l=>{l.preventDefault(),i(r.dataset.nav)})}),(a=document.getElementById("nav-rankings"))==null||a.addEventListener("click",()=>i("rankings")),(d=document.getElementById("nav-matches"))==null||d.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(r=>{r.addEventListener("click",()=>{if(r.classList.add("tapped"),setTimeout(()=>r.classList.remove("tapped"),200),r.dataset.action==="match-ai"){gt(i);return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await w.auth.signOut(),window.location.reload()})}function gt(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${t.map(s=>`
            <div class="action-card" data-mode="${s.mode}" style="cursor:pointer">
              <div class="icon">${s.icon}</div>
              <div class="label">${s.label}</div>
              <div class="sub">${s.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",s=>{s.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(s=>{s.addEventListener("click",()=>{n(),e("match",{matchMode:s.dataset.mode})})})}const ie={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function D(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}function Ke(e){let t=0;for(let i=0;i<e.length-1;i++){const n=e[i],s=e[i+1];if(!n||!s)continue;const o=J(n,s);o==="#00ff88"?t+=2:o==="#FFD700"&&(t+=1)}return t}function He(e,t={}){const i=e.reduce((o,a)=>{const d=a._line||a.job;return o+(Number(d==="MIL"?a.note_m:a.note_a)||0)+(Number(a.boost)||0)},0),n=Ke(e);let s=i+n;return t.doubleAttack&&(s*=2),t.stolenNote&&(s-=t.stolenNote),{base:i,links:n,total:Math.max(0,s)}}function Ue(e,t={}){const i=e.reduce((o,a)=>{const d=a._line||a.job;let r=0;return d==="GK"?r=Number(a.note_g)||0:d==="MIL"?r=Number(a.note_m)||0:r=Number(a.note_d)||0,o+r+(Number(a.boost)||0)},0),n=Ke(e);let s=i+n;return t.stolenNote&&(s-=t.stolenNote),{base:i,links:n,total:Math.max(0,s)}}function Ve(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Ye(e,t,i="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const s=[...n].sort((a,d)=>{const r=t==="attack"?D(a,"ATT"):a._line==="GK"?D(a,"GK"):D(a,"DEF");return(t==="attack"?D(d,"ATT"):d._line==="GK"?D(d,"GK"):D(d,"DEF"))-r});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return s.slice(0,Math.min(o,s.length,3))}function mt(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const We={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},pe={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},re=["GK","DEF","MIL","ATT"],yt=["Tous","GK","DEF","MIL","ATT"],xt={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},_e={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Je(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function oe(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Be(e,t=""){var p,u;const i=e.player;if(!i)return"";const n=i.job||"ATT",s=pe[n],o=We[i.rarity]||"#ccc",a=oe(i,n),d=i.job2?oe(i,i.job2):null,r=i.job2?pe[i.job2]:null,l=Je(i),c=_e[i.country_code]||i.country_code||"";return`
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
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${s}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${s}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${a}</text>
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${c}</div>
        ${(p=i.clubs)!=null&&p.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((u=i.clubs)==null?void 0:u.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function ht(e){const t=e.job||"ATT",i=oe(e,t),n=_e[e.country_code]||e.country_code||"";return`
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
  </div>`}async function vt(e,t){const{state:i,navigate:n,toast:s,openModal:o,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await w.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:r}=await w.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),l=(d||[]).filter(I=>I.card_type==="player"&&I.player),c=(d||[]).filter(I=>I.card_type==="game_changer"),p=(d||[]).filter(I=>I.card_type==="formation"),u=Object.keys($e),f=Object.keys(ie),x={};l.forEach(I=>{const L=I.player.id;x[L]=(x[L]||0)+1});const $=new Set(Object.keys(x).map(I=>String(I))),h=new Set(p.map(I=>I.formation)),_=new Set(c.map(I=>I.gc_type));let m="player",g="Tous",v="",k=!1;function y(){return[...l].sort((I,L)=>{const M=re.indexOf(I.player.job),B=re.indexOf(L.player.job);return M!==B?M-B:(I.player.surname_encoded||"").localeCompare(L.player.surname_encoded||"")})}function b(){return[...r||[]].sort((I,L)=>{const M=re.indexOf(I.job),B=re.indexOf(L.job);return M!==B?M-B:(I.surname_encoded||"").localeCompare(L.surname_encoded||"")})}function E(){return y().filter(I=>{const L=I.player,M=g==="Tous"||L.job===g,B=!v||`${L.firstname} ${L.surname_encoded}`.toLowerCase().includes(v);return M&&B})}function T(){return b().filter(I=>{const L=g==="Tous"||I.job===g,M=!v||`${I.firstname} ${I.surname_encoded}`.toLowerCase().includes(v);return L&&M})}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Ma collection</h2>
      <p>${l.length} carte(s) joueur · ${c.length} Game Changer · ${p.length} Formation</p>
    </div>

    <!-- Onglets -->
    <div style="display:flex;border-bottom:1px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${m==="player"?"var(--green)":"transparent"};
        color:${m==="player"?"var(--green)":"var(--gray-600)"}">Joueurs</button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${m==="formation"?"var(--green)":"transparent"};
        color:${m==="formation"?"var(--green)":"var(--gray-600)"}">Formations</button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${m==="gc"?"var(--green)":"transparent"};
        color:${m==="gc"?"var(--green)":"var(--gray-600)"}">Game Changer</button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grille cartes -->
    <div class="page-body">
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-start" id="col-grid"></div>
    </div>
  </div>`;function A(){const I=document.getElementById("col-filters");I&&(m==="player"?(I.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${v}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${yt.map(L=>`
            <button class="filter-btn" data-job="${L}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${L===g?"var(--green)":"var(--gray-200)"};
                background:${L===g?"var(--green)":"#fff"};
                color:${L===g?"#fff":"var(--gray-600)"}">
              ${L}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${k?"var(--yellow)":"var(--gray-200)"};
              background:${k?"var(--yellow)":"#fff"};
              color:${k?"#fff":"var(--gray-600)"}">
            ${k?"✓ Tout afficher":"Voir tout"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",L=>{v=L.target.value.toLowerCase(),z()}),e.querySelectorAll(".filter-btn").forEach(L=>{L.addEventListener("click",()=>{g=L.dataset.job,A(),z()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{k=!k,A(),z()})):(I.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${k?"var(--yellow)":"var(--gray-200)"};
              background:${k?"var(--yellow)":"#fff"};
              color:${k?"#fff":"var(--gray-600)"}">
            ${k?"✓ Tout afficher":"Voir tout"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{k=!k,A(),z()})))}function z(){const I=document.getElementById("col-grid");I&&(m==="player"?C(I):m==="formation"?G(I):q(I))}function C(I){if(k){const L=T();if(!L.length){I.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}I.innerHTML=L.map(M=>{if($.has(String(M.id))){const S=l.find(H=>H.player.id===M.id),F=x[M.id]||1,P=F>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${F}</div>`:"",K=l.filter(H=>H.player.id===M.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Be(S,P+K)}return ht(M)}).join("")}else{const L=E();if(!L.length){I.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const M={},B=[];L.forEach(S=>{const F=S.player.id;M[F]||(M[F]=!0,B.push(S))}),I.innerHTML=B.map(S=>{const F=x[S.player.id]||1,P=F>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${F}</div>`:"",K=l.filter(H=>H.player.id===S.player.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Be(S,P+K)}).join("")}I.querySelectorAll("[data-card-id]").forEach(L=>{L.addEventListener("click",()=>{const M=l.find(B=>B.id===L.dataset.cardId);M&&$t(M,l,x,t)})})}function G(I){const L=k?u:[...h];if(!L.length){I.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}I.innerHTML=L.map(M=>{if(h.has(M)){const S=p.find(O=>O.formation===M),F=p.filter(O=>O.formation===M).length,P=F>1?`<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${F}</div>`:"";return`
          <div data-form-id="${S.id}" style="
            position:relative;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border:2px solid #2a8f52;
            border-radius:12px;padding:12px;color:#fff;min-width:100px;width:140px;flex-shrink:0;cursor:pointer;
            display:flex;flex-direction:column;gap:4px;align-items:flex-start">
            ${P}
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
        </div>`}).join(""),I.querySelectorAll("[data-form-id]").forEach(M=>{M.addEventListener("click",()=>{const B=p.find(S=>S.id===M.dataset.formId);B&&wt(B,p,t,o)})})}function q(I){const L=k?f:[..._];if(!L.length){I.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}I.innerHTML=L.map(M=>{const B=_.has(M),S=ie[M]||{icon:"⚡"};if(B){const F=c.find(K=>K.gc_type===M),P=c.filter(K=>K.gc_type===M).length,O=P>1?`<div style="position:absolute;top:4px;right:4px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${P}</div>`:"";return`
          <div data-gc-id="${F.id}" data-gc-type="${M}" style="
            position:relative;background:linear-gradient(135deg,#3d0a7a,#7a28b8);border:2px solid #9b59b6;
            border-radius:12px;padding:12px;color:#fff;min-width:120px;width:140px;flex-shrink:0;cursor:pointer;
            display:flex;flex-direction:column;gap:4px">
            ${O}
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
        </div>`}).join(""),I.querySelectorAll("[data-gc-id]").forEach(M=>{M.addEventListener("click",()=>bt(M.dataset.gcType,o))})}e.querySelectorAll(".col-tab-btn").forEach(I=>{I.addEventListener("click",()=>{m=I.dataset.tab,g="Tous",v="",k=!1,e.querySelectorAll(".col-tab-btn").forEach(L=>{const M=L.dataset.tab===m;L.style.borderBottomColor=M?"var(--green)":"transparent",L.style.color=M?"var(--green)":"var(--gray-600)"}),A(),z()})}),A(),z()}function bt(e,t){const i=ie[e]||{icon:"⚡",desc:"Effet spécial."};t("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ee=1e3;function wt(e,t,i,n){var $,h,_;const{state:s,toast:o,closeModal:a,navigate:d,refreshProfile:r}=i,l=e.formation,c={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function p(){const m=ge[l]||{},g=$e[l]||[],v=290,k=360,y=20;function b(T){const A=m[T];return A?{x:A.x*v,y:A.y*k}:null}let E=`<svg width="${v}" height="${k}" viewBox="0 0 ${v} ${k}" xmlns="http://www.w3.org/2000/svg">`;for(const[T,A]of g){const z=b(T),C=b(A);!z||!C||(E+=`<line x1="${z.x}" y1="${z.y}" x2="${C.x}" y2="${C.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const T of Object.keys(m)){const A=b(T);if(!A)continue;const z=T.replace(/\d+/,""),C=c[z]||"#555";E+=`<circle cx="${A.x}" cy="${A.y}" r="${y}" fill="${C}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,E+=`<text x="${A.x}" y="${A.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${z}</text>`}return E+="</svg>",E}const u=t.filter(m=>m.formation===l),f=u.length,x=!e.is_for_sale;n(`Formation ${l}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${ee}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),($=document.getElementById("direct-sell-form-btn"))==null||$.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${l} pour ${ee.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const m=u.find(v=>!v.is_for_sale)||u[0];if(!m){o("Aucune carte à vendre","error");return}const{error:g}=await w.from("cards").delete().eq("id",m.id);if(g){o(g.message,"error");return}await w.from("users").update({credits:(s.profile.credits||0)+ee}).eq("id",s.profile.id),await r(),o(`+${ee.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),d("collection")}),(h=document.getElementById("market-sell-form-btn"))==null||h.addEventListener("click",async()=>{const m=parseInt(document.getElementById("sell-price-form").value);if(!m||m<1){o("Prix invalide","error");return}await w.from("cards").update({is_for_sale:!0,sale_price:m}).eq("id",e.id),await w.from("market_listings").insert({seller_id:s.profile.id,card_id:e.id,price:m}),o("Carte mise en vente sur le marché !","success"),a(),d("collection")}),(_=document.getElementById("cancel-sell-form-btn"))==null||_.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),a(),d("collection")})}function $t(e,t,i,n){var y,b,E,T,A,z;const{state:s,toast:o,openModal:a,closeModal:d,navigate:r,refreshProfile:l}=n,c=e.player,p=t.filter(C=>C.player.id===c.id),u=p.length,f=xt[c.rarity]||1e3,x=c.rarity!=="legende",$=Je(c),h=oe(c,c.job),_=c.job2?oe(c,c.job2):null,m=pe[c.job]||"#1A6B3C",g=c.job2?pe[c.job2]:null,v=We[c.rarity]||"#ccc",k=_e[c.country_code]||c.country_code||"";a(`${c.firstname} ${c.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${v};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${c.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(c.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${m}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${m}" stroke="white" stroke-width="2.5"/>
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
            <img src="https://flagsapi.com/${c.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${k}</div>
            ${(y=c.clubs)!=null&&y.logo_url?`<img src="${c.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((b=c.clubs)==null?void 0:b.encoded_name)||"").slice(0,6)}</div>`}
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(E=document.getElementById("close-detail"))==null||E.addEventListener("click",d),(T=document.getElementById("direct-sell-btn"))==null||T.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${c.surname_encoded} pour ${f.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const C=p.find(q=>!q.is_for_sale)||p[0];if(!C){o("Aucune carte à vendre","error");return}const{error:G}=await w.from("cards").delete().eq("id",C.id);if(G){o(G.message,"error");return}await w.from("users").update({credits:(s.profile.credits||0)+f}).eq("id",s.profile.id),await l(),o(`+${f.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),r("collection")}),(A=document.getElementById("market-sell-btn"))==null||A.addEventListener("click",async()=>{const C=parseInt(document.getElementById("sell-price").value);if(!C||C<1){o("Prix invalide","error");return}await w.from("cards").update({is_for_sale:!0,sale_price:C}).eq("id",e.id),await w.from("market_listings").insert({seller_id:s.profile.id,card_id:e.id,price:C}),o("Carte mise en vente sur le marché !","success"),d(),r("collection")}),(z=document.getElementById("cancel-sell-btn"))==null||z.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),d(),r("collection")})}const fe={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},U={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function me(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Xe(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Qe(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function _t(e,t=44,i=58){var f;const n=e?me(e):null,s=e?Qe(e):null,o=Xe(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",d=U[a]||"#555",r={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",l=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,c=Math.round(i*.19),p=Math.round(i*.25),u=i-c-p;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${r};background:${d};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${c}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${n?`<img src="${n}" style="position:absolute;top:${c}px;left:0;width:${t}px;height:${u}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${o?`<img src="${o}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">🌍</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${l}</span>
      ${s?`<img src="${s}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:(f=e==null?void 0:e.clubs)!=null&&f.encoded_name?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function ye(e,t){const{state:i,navigate:n,toast:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(o==null?void 0:o.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(o==null?void 0:o.length)>0?o.map(a=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!a)return;const{data:d,error:r}=await w.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(r){s(r.message,"error");return}s("Deck créé !","success"),Se(d.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Se(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const d=prompt("Nouveau nom :",a.dataset.name);if(!d||d===a.dataset.name)return;const{error:r}=await w.from("decks").update({name:d}).eq("id",a.dataset.rename);if(r){s(r.message,"error");return}s("Deck renommé !","success"),ye(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await w.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:d}=await w.from("decks").delete().eq("id",a.dataset.delete);if(d){s(d.message,"error");return}s("Deck supprimé.","success"),ye(e,t)})})}async function Se(e,t,i){const{state:n,toast:s}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("decks").select("*").eq("id",e).single(),{data:a}=await w.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),d=(a||[]).filter(f=>f.card_type==="player"&&f.player),r=(a||[]).filter(f=>f.card_type==="formation"),l=r.map(f=>f.formation).filter(Boolean),{data:c}=await w.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=o.formation||"4-4-2";l.length>0&&!l.includes(p)&&(p=l[0]);const u={deckId:e,name:o.name,formation:p,formationCardId:o.formation_card_id,slots:{},subs:[],playerCards:d,formationCards:r,availableFormations:l};(c||[]).forEach(f=>{f.is_starter?u.slots[f.position]=f.card_id:u.subs.includes(f.card_id)||u.subs.push(f.card_id)}),X(t,u,i)}function X(e,t,i){var r;const{navigate:n}=i;fe[t.formation];const s=Fe(t.formation),o=s.filter(l=>t.slots[l]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(fe),d=t.subs.map(l=>t.playerCards.find(c=>c.id===l)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${a.map(l=>`<option value="${l}" ${l===t.formation?"selected":""}>${l}</option>`).join("")}
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
        ${d.map(l=>{const c=l.player;return`<div style="position:relative;flex-shrink:0">
            ${_t(c,44,58)}
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
  </div>`,kt(e,t,s,i),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",l=>{t.formation=l.target.value;const c=Fe(t.formation),p={};c.forEach(u=>{t.slots[u]&&(p[u]=t.slots[u])}),t.slots=p,X(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>At(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(l=>{l.addEventListener("click",()=>{t.subs=t.subs.filter(c=>c!==l.dataset.removeSub),X(e,t,i)})}),(r=document.getElementById("add-sub-btn"))==null||r.addEventListener("click",()=>{It(t,e,i)})}function kt(e,t,i,n){const s=e.querySelector("#deck-field");if(!s)return;const o=ge[t.formation]||{},a=Oe(t.formation)||[],d={};for(const _ of i){const m=t.slots[_],g=m?t.playerCards.find(v=>v.id===m):null;d[_]=g?g.player:null}const r=300,l=300,c=48,p=64,u=13,f=16,x=38;function $(_){const m=o[_];return m?{x:m.x*r,y:m.y*l}:null}let h="";for(const[_,m]of a){const g=$(_),v=$(m);if(!g||!v)continue;const k=d[_]?{...d[_],club_id:d[_].club_id,country_code:d[_].country_code,rarity:d[_].rarity}:null,y=d[m]?{...d[m],club_id:d[m].club_id,country_code:d[m].country_code,rarity:d[m].rarity}:null,b=J(k,y);b==="#ff3333"||b==="#cc2222"?h+=`<line x1="${g.x.toFixed(1)}" y1="${g.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${b}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(h+=`<line x1="${g.x.toFixed(1)}" y1="${g.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${b}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,h+=`<line x1="${g.x.toFixed(1)}" y1="${g.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${b}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const _ of i){const m=$(_);if(!m)continue;const g=d[_],v=_.replace(/\d+/,""),k=U[v]||"#555",y=(m.x-c/2).toFixed(1),b=(m.y-p/2).toFixed(1),E={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[g==null?void 0:g.rarity]||"#aaa";if(g){const T=me(g),A=Qe(g),z=Xe(g.country_code),C=Number(v==="GK"?g.note_g:v==="DEF"?g.note_d:v==="MIL"?g.note_m:g.note_a)||0,G=p-u-f;h+=`<defs><clipPath id="dcp-${_}"><rect x="${y}" y="${(m.y-p/2+u).toFixed(1)}" width="${c}" height="${G}"/></clipPath></defs>`,h+=`<rect x="${y}" y="${b}" width="${c}" height="${p}" rx="5" fill="${k}"/>`,T&&(h+=`<image href="${T}" x="${y}" y="${(m.y-p/2+u).toFixed(1)}" width="${c}" height="${G}" clip-path="url(#dcp-${_})" preserveAspectRatio="xMidYMin slice"/>`),h+=`<rect x="${y}" y="${b}" width="${c}" height="${u}" fill="rgba(255,255,255,0.93)"/>`,h+=`<text x="${m.x.toFixed(1)}" y="${(m.y-p/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(g.surname_encoded||"").slice(0,9)}</text>`;const q=(m.y+p/2-f).toFixed(1);h+=`<rect x="${y}" y="${q}" width="${c}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,z&&(h+=`<image href="${z}" x="${(m.x-21).toFixed(1)}" y="${(m.y+p/2-f+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),h+=`<text x="${m.x.toFixed(1)}" y="${(m.y+p/2-f/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${C}</text>`,A&&(h+=`<image href="${A}" x="${(m.x+c/2-14).toFixed(1)}" y="${(m.y+p/2-f+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),h+=`<rect x="${y}" y="${b}" width="${c}" height="${p}" rx="5" fill="none" stroke="${E}" stroke-width="2"/>`}else h+=`<rect x="${y}" y="${b}" width="${c}" height="${p}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,h+=`<text x="${m.x.toFixed(1)}" y="${m.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,h+=`<text x="${m.x.toFixed(1)}" y="${(m.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${v}</text>`;h+=`<rect x="${y}" y="${b}" width="${c}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${_}" style="cursor:pointer"/>`}s.innerHTML=`<svg viewBox="${-x} ${-x} ${r+x*2} ${l+x*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${h}</svg>`,s.querySelectorAll(".deck-slot-hit").forEach(_=>{_.addEventListener("click",()=>Et(_.dataset.pos,t,e,n))})}function Et(e,t,i,n){var u,f,x;const{openModal:s,closeModal:o}=n,a=e.replace(/\d+/,""),d=t.slots[e],r=d?t.playerCards.find($=>$.id===d):null;(u=r==null?void 0:r.player)==null||u.id;const l=new Set;Object.entries(t.slots).forEach(([$,h])=>{var m;if($===e||!h)return;const _=t.playerCards.find(g=>g.id===h);(m=_==null?void 0:_.player)!=null&&m.id&&l.add(_.player.id)}),t.subs.forEach($=>{var _;const h=t.playerCards.find(m=>m.id===$);(_=h==null?void 0:h.player)!=null&&_.id&&l.add(h.player.id)});const c=new Set,p=t.playerCards.filter($=>{const h=$.player;return!(h.job===a||h.job2===a)||l.has(h.id)||c.has(h.id)?!1:(c.add(h.id),!0)});p.sort(($,h)=>{const _=a==="GK"?$.player.note_g:a==="DEF"?$.player.note_d:a==="MIL"?$.player.note_m:$.player.note_a;return(a==="GK"?h.player.note_g:a==="DEF"?h.player.note_d:a==="MIL"?h.player.note_m:h.player.note_a)-_}),s(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${p.length>0?p.map($=>{var v,k;const h=$.player,_=a==="GK"?h.note_g:a==="DEF"?h.note_d:a==="MIL"?h.note_m:h.note_a,m=me(h),g={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[h.rarity];return`<div class="player-option" data-card-id="${$.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${U[a]}">
            ${m?`<img src="${m}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${U[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${h.firstname} ${h.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${h.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${h.country_code}">
              ${(v=h.clubs)!=null&&v.logo_url?`<img src="${h.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((k=h.clubs)==null?void 0:k.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${h.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${U[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${g};flex-shrink:0">
            ${_}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(f=document.getElementById("close-selector"))==null||f.addEventListener("click",o),(x=document.getElementById("remove-player"))==null||x.addEventListener("click",()=>{delete t.slots[e],o(),X(i,t,n)}),document.querySelectorAll(".player-option").forEach($=>{$.addEventListener("click",()=>{t.slots[e]=$.dataset.cardId,o(),X(i,t,n)})})}function It(e,t,i){var r;const{openModal:n,closeModal:s}=i,o=new Set;Object.values(e.slots).filter(Boolean).forEach(l=>{var p;const c=e.playerCards.find(u=>u.id===l);(p=c==null?void 0:c.player)!=null&&p.id&&o.add(c.player.id)}),e.subs.forEach(l=>{var p;const c=e.playerCards.find(u=>u.id===l);(p=c==null?void 0:c.player)!=null&&p.id&&o.add(c.player.id)});const a=new Set,d=e.playerCards.filter(l=>{var c,p,u;return o.has((c=l.player)==null?void 0:c.id)||a.has((p=l.player)==null?void 0:p.id)?!1:(a.add((u=l.player)==null?void 0:u.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${d.length>0?d.map(l=>{var f;const c=l.player,p=me(c),u=c.job==="GK"?c.note_g:c.job==="DEF"?c.note_d:c.job==="MIL"?c.note_m:c.note_a;return`<div class="player-option" data-card-id="${l.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${U[c.job]}">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${c.firstname} ${c.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${c.job} · ${c.country_code} · ${((f=c.clubs)==null?void 0:f.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${U[c.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${u}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(r=document.getElementById("close-sub-selector"))==null||r.addEventListener("click",s),document.querySelectorAll(".player-option").forEach(l=>{l.addEventListener("click",()=>{e.subs.push(l.dataset.cardId),s(),X(t,e,i)})})}async function At(e,t){const{state:i,toast:n,navigate:s}=t,o=e.formationCards.find(r=>r.formation===e.formation),a=(o==null?void 0:o.id)||e.formationCardId;await w.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await w.from("deck_cards").delete().eq("deck_id",e.deckId);const d=[];if(Object.entries(e.slots).forEach(([r,l],c)=>{d.push({deck_id:e.deckId,card_id:l,position:r,is_starter:!0,slot_order:c})}),e.subs.forEach((r,l)=>{d.push({deck_id:e.deckId,card_id:r,position:`SUB${l+1}`,is_starter:!1,slot_order:100+l})}),d.length>0){const{error:r}=await w.from("deck_cards").insert(d);if(r){n(r.message,"error");return}}n("Deck enregistré ✅","success"),s("decks")}function Fe(e){const t=fe[e]||fe["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}const Tt="modulepreload",Lt=function(e){return"/manager-wars/"+e},De={},Mt=function(t,i,n){let s=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),d=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(i.map(r=>{if(r=Lt(r),r in De)return;De[r]=!0;const l=r.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":Tt,l||(p.as="script"),p.crossOrigin="",p.href=r,d&&p.setAttribute("nonce",d),document.head.appendChild(p),l)return new Promise((u,f)=>{p.addEventListener("load",u),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})}))}function o(a){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=a,window.dispatchEvent(d),!d.defaultPrevented)throw a}return s.then(a=>{for(const d of a||[])d.status==="rejected"&&o(d.reason);return t().catch(o)})};async function Ze(){const{data:e}=await w.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await w.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(n=>n.booster_id===i.id)}))}function zt(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,s)=>n+Number(s.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const Ct=Object.freeze(Object.defineProperty({__proto__:null,loadActiveBoosters:Ze,rollDropRate:zt},Symbol.toStringTag,{value:"Module"})),et=()=>Object.keys(ge),jt=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],tt={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Bt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const St={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ft={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};function Dt(e){var s;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((s=Object.entries(t).sort((o,a)=>a[1]-o[1])[0])==null?void 0:s[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Gt(e,{state:t,navigate:i,toast:n}){var a;const s=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await Ze()).map(Dt)}catch(d){console.warn("Erreur chargement boosters DB, fallback hardcodé",d)}o.length||(o=jt.map(d=>({...d,rates:[],isPub:d.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${s.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(d=>{const r=d.cost===0||s>=d.cost;return`<div class="booster-card ${r?"":"disabled"}" data-booster="${d.id}" style="position:relative">
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(d=>{d.addEventListener("click",async()=>{const r=o.find(l=>l.id===d.dataset.booster);if(r){d.style.opacity="0.5",d.style.pointerEvents="none";try{await Nt(r,{state:t,toast:n,navigate:i,container:e})}catch(l){n(l.message,"error"),d.style.opacity="",d.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(d=>{d.addEventListener("click",r=>{r.stopPropagation();const l=o.find(c=>c.id===d.dataset.boosterId);Vt(l)})})}async function Nt(e,{state:t,toast:i,navigate:n,container:s}){if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await Jt()}catch(p){i(p.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:o}=await w.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((o||[]).filter(p=>p.card_type==="player").map(p=>p.player_id)),d=new Set((o||[]).filter(p=>p.card_type==="formation").map(p=>p.formation));let r=[];const l=e.type||"player";l==="player"?r=await Ot(t.profile,e.cardCount,e.cost):l==="game_changer"?r=await Kt(t.profile,e.cardCount,e.cost):l==="formation"?r=await Ht(t.profile,e.cost):r=await Pt(t.profile,e),r.forEach(p=>{p.card_type==="player"&&p.player?p.isDuplicate=a.has(p.player.id):p.card_type==="formation"&&(p.isDuplicate=d.has(p.formation))});const{data:c}=await w.from("users").select("*").eq("id",t.profile.id).single();c&&(t.profile=c),Ut(r,e,n)}function Rt(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function V(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function qt(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>V(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>V(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&V(n)>=6),i.length||(i=e.filter(n=>V(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&V(n)>=1&&V(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Pt(e,t){if(t.cost>0){const{error:s}=await w.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(s)throw s}const{rollDropRate:i}=await Mt(async()=>{const{rollDropRate:s}=await Promise.resolve().then(()=>Ct);return{rollDropRate:s}},void 0),n=[];for(let s=0;s<(t.cardCount||5);s++){const o=i(t.rates);if(o){if(o.card_type==="player"){let a=w.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);o.rarity&&(a=a.eq("rarity",o.rarity));const{data:d}=await a;let r=d||[];if((o.note_min||o.note_max)&&(r=r.filter(p=>{const u=Math.max(Number(p.note_g)||0,Number(p.note_d)||0,Number(p.note_m)||0,Number(p.note_a)||0);return(!o.note_min||u>=o.note_min)&&(!o.note_max||u<=o.note_max)})),r.length||(r=d||[]),!r.length)continue;const l=r[Math.floor(Math.random()*r.length)],{data:c}=await w.from("cards").insert({owner_id:e.id,player_id:l.id,card_type:"player"}).select().single();c&&n.push({...c,player:l})}else if(o.card_type==="game_changer"){const{data:a}=await w.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),d=a!=null&&a.length?a:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],l=d[Math.floor(Math.random()*d.length)].name,{data:c}=await w.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:l}).select().single();c&&n.push(c)}else if(o.card_type==="formation"){const a=et(),d=a[Math.floor(Math.random()*a.length)],{data:r}=await w.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();r!=null&&r[0]&&n.push(r[0])}}}return n}async function Ot(e,t,i){if(i>0){const{error:l}=await w.from("users").update({credits:e.credits-i}).eq("id",e.id);if(l)throw l}const{data:n}=await w.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const s=n.filter(l=>l.job==="GK"),o=n.filter(l=>l.job!=="GK"),a=!e.first_booster_opened&&s.length>0,d=[];for(let l=0;l<t;l++){const c=l===0&&a?s:l===0?o:n,p=Rt(),u=qt(c,p);u&&d.push(u)}a&&await w.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:r}=await w.from("cards").insert(d.map(l=>({owner_id:e.id,player_id:l.id,card_type:"player"}))).select();return d.map((l,c)=>({...r[c],player:l}))}async function Kt(e,t,i){const{error:n}=await w.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:s}=await w.from("gc_definitions").select("id,name,gc_type").eq("is_active",!0),o=s!=null&&s.length?s:Object.keys(tt).map(l=>({name:l,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const l=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:l.name,gc_definition_id:l.id||null}}),{data:d,error:r}=await w.from("cards").insert(a).select();return r&&console.error("[Booster GC] Erreur insert:",r.message,r),d||[]}async function Ht(e,t){const{error:i}=await w.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const n=et(),s=n[Math.floor(Math.random()*n.length)],{data:o,error:a}=await w.from("cards").insert({owner_id:e.id,card_type:"formation",formation:s}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),o||[]}function Ut(e,t,i){var u;if(!e||e.length===0){const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",f.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(f),(u=f.querySelector("#anim-close-err"))==null||u.addEventListener("click",()=>f.remove());return}const n=document.createElement("div");n.id="booster-anim-overlay",n.innerHTML=`
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
  `,document.body.appendChild(n);let s=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(s)return;s=!0;const f=document.getElementById("pack-visual");f.classList.add("shaking"),setTimeout(()=>{f.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",a(0)},600)},500)});let o=0;function a(f){o=f;const x=document.getElementById("reveal-phase");x.style.display="flex",d(f)}function d(f){var y;const x=e[f],$=document.getElementById("card-counter"),h=document.getElementById("single-card-slot"),_=document.getElementById("card-tap-hint");$&&($.textContent=`Carte ${f+1} / ${e.length}`),_&&(_.textContent=f<e.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const m=Ge(x),g=x.card_type==="player"&&((y=x.player)==null?void 0:y.rarity)==="legende";h.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${g?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${m}
        ${x.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,g&&c();const v=document.getElementById("current-card-wrap");let k=!1;v.addEventListener("click",()=>{if(k)return;k=!0;const b=f+1;b<e.length?(v.style.transition="all 0.25s ease",v.style.transform="translateX(-120%) rotate(-15deg)",v.style.opacity="0",setTimeout(()=>d(b),250)):r()})}function r(){p(),document.getElementById("reveal-phase").style.display="none";const f=document.getElementById("recap-phase");f.style.display="flex";const x=document.getElementById("recap-grid");x.innerHTML=e.map(($,h)=>`
      <div class="recap-card" style="--i:${h};animation-delay:${h*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${Ge($)}
        ${$.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let l=null;function c(){const f=document.getElementById("fireworks-canvas");if(!f)return;f.width=window.innerWidth,f.height=window.innerHeight;const x=f.getContext("2d"),$=[];function h(){const m=Math.random()*f.width,g=Math.random()*f.height*.6,v=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],k=v[Math.floor(Math.random()*v.length)];for(let y=0;y<60;y++){const b=Math.PI*2/60*y,E=2+Math.random()*5;$.push({x:m,y:g,vx:Math.cos(b)*E,vy:Math.sin(b)*E,alpha:1,color:k,size:2+Math.random()*3})}}h(),l=setInterval(h,600);function _(){if(document.getElementById("fireworks-canvas")){x.clearRect(0,0,f.width,f.height);for(let m=$.length-1;m>=0;m--){const g=$[m];if(g.x+=g.vx,g.y+=g.vy+.08,g.vy*=.98,g.alpha-=.018,g.alpha<=0){$.splice(m,1);continue}x.globalAlpha=g.alpha,x.fillStyle=g.color,x.beginPath(),x.arc(g.x,g.y,g.size,0,Math.PI*2),x.fill()}x.globalAlpha=1,(l!==null||$.length>0)&&requestAnimationFrame(_)}}_()}function p(){l!==null&&(clearInterval(l),l=null);const f=document.getElementById("fireworks-canvas");f&&f.getContext("2d").clearRect(0,0,f.width,f.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{p(),n.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{p(),n.remove(),i("boosters")})}function Ge(e){var t,i;if(e.card_type==="player"&&e.player){const n=e.player,s=n.job||"ATT",o=St[s]||"#1A6B3C",a=Ft[n.rarity]||"#ccc",d=s==="GK"?n.note_g:s==="DEF"?n.note_d:s==="MIL"?n.note_m:n.note_a,r=Bt(n),l={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[n.country_code]||n.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${a};overflow:hidden;display:flex;flex-direction:column">
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
        ${r?`<img src="${r}" style="width:100%;height:100%;object-fit:cover;object-position:center top" onerror="this.style.display='none'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;height:26px">
        <img src="https://flagsapi.com/${n.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:1px;color:#555;text-transform:uppercase">${l}</div>
        ${(t=n.clubs)!=null&&t.logo_url?`<img src="${n.clubs.logo_url}" style="width:20px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:700">${(((i=n.clubs)==null?void 0:i.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>`}if(e.card_type==="game_changer"){const n=tt[e.gc_type]||{icon:"⚡",desc:""};return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#3d0a7a,#7a28b8);border-radius:12px;border:3px solid #9b59b6;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:16px">
      <div style="font-size:40px">${n.icon}</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">GAME CHANGER</div>
      <div style="font-weight:700;font-size:13px;color:#fff;text-align:center">${e.gc_type}</div>
      <div style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${n.desc}</div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Vt(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const s={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${o[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${s[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}Yt()}function Yt(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const Wt="simulation",it="VOTRE_ZONE_ID";function Jt(){switch(Wt){case"propellerads":return Xt();case"adsense":return Qt();default:return ke()}}function ke(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const n=setInterval(()=>{i--;const s=document.getElementById("ad-cd"),o=document.getElementById("ad-skip");s&&(s.textContent=i),o&&(o.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(n),o&&(o.disabled=!1,o.style.cssText=o.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),o==null||o.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Xt(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(ke());window.propeller.push({zone_id:it,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function Qt(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(ke());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:it,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const Q={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Z={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ot(e,t,i,n,s){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",s)}function N(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function xe(e){var i,n;const t=e.player;return{cardId:e.id,id:t.id,firstname:t.firstname,name:t.surname_encoded,country_code:t.country_code,club_id:t.club_id,job:t.job,job2:t.job2,note_g:Number(t.note_g)||0,note_d:Number(t.note_d)||0,note_m:Number(t.note_m)||0,note_a:Number(t.note_a)||0,rarity:t.rarity,skin:t.skin,hair:t.hair,hair_length:t.hair_length,clubName:((i=t.clubs)==null?void 0:i.encoded_name)||null,clubLogo:((n=t.clubs)==null?void 0:n.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ee(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Zt(){const e=Math.random()*100;return e<.1?4:e<5?3:e<20?2:1}function nt(e,t){const i=Q[t]||Q["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},s=[...e];for(const o of["GK","DEF","MIL","ATT"]){const a=[];for(let r=0;r<i[o];r++){let l=s.findIndex(c=>c.job===o);if(l===-1&&(l=s.findIndex(c=>c.job2===o)),l===-1&&(l=0),s[l]){const c={...s[l],_line:o};a.push(c),s.splice(l,1)}}const d=Ee(a.length);a.forEach((r,l)=>{r._col=d[l]}),n[o]=a}return n}async function ei(e,t){const{data:i}=await w.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length").eq("is_active",!0).limit(60);if(!i||i.length<11)return ti(e);const n=Q[e]||Q["4-4-2"],s={GK:[],DEF:[],MIL:[],ATT:[]},o=[...i];for(const a of["GK","DEF","MIL","ATT"]){const d=o.filter(u=>u.job===a),r=o.filter(u=>u.job!==a),l=[...d,...r],c=[];for(let u=0;u<n[a];u++){const f=l[u]||o[u];f&&c.push({cardId:"ai-"+f.id+"-"+u,id:f.id,firstname:f.firstname,name:f.surname_encoded,country_code:f.country_code,club_id:f.club_id,job:f.job,job2:f.job2,note_g:Number(f.note_g)||0,note_d:Number(f.note_d)||0,note_m:Number(f.note_m)||0,note_a:Number(f.note_a)||0,rarity:f.rarity,skin:f.skin,hair:f.hair,hair_length:f.hair_length,boost:0,used:!1,_line:a})}const p=Ee(c.length);c.forEach((u,f)=>{u._col=p[f]}),s[a]=c}return s}function ti(e){const t=Q[e]||Q["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let s=0;for(const o of["GK","DEF","MIL","ATT"]){const a=[];for(let r=0;r<t[o];r++){const l=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+s,id:"fake-"+s,firstname:"IA",name:n[s%n.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?l:2,note_d:o==="DEF"?l:2,note_m:o==="MIL"?l:2,note_a:o==="ATT"?l:2,rarity:"normal",boost:0,used:!1,_line:o}),s++}const d=Ee(a.length);a.forEach((r,l)=>{r._col=d[l]}),i[o]=a}return i}async function ii(e,t){var k;const{state:i,navigate:n,toast:s}=t,o=i.params||{};e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const a=o.matchMode||"vs_ai_easy",d=a.replace("vs_ai_",""),r=a;if(!o.deckId)return oi(e,t,a);const l=o.deckId,[{data:c},{data:p}]=await Promise.all([w.from("decks").select("formation,name").eq("id",l).single(),w.from("deck_cards").select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`).eq("deck_id",l).order("slot_order")]),u=(p||[]).filter(y=>{var b;return y.is_starter&&((b=y.card)==null?void 0:b.player)}).map(y=>xe(y.card)),f=(p||[]).filter(y=>{var b;return!y.is_starter&&((b=y.card)==null?void 0:b.player)}).map(y=>xe(y.card));if(u.length<11){ot(e,"⚠️",`Deck incomplet (${u.length}/11).`,"Compléter",()=>n("decks"));return}const x=(p||[]).find(y=>{var b;return((b=y.card)==null?void 0:b.card_type)==="formation"}),$=(c==null?void 0:c.formation)||((k=x==null?void 0:x.card)==null?void 0:k.formation)||"4-4-2",{data:h}=await w.from("cards").select("id,gc_type").eq("owner_id",i.profile.id).eq("card_type","game_changer"),_=nt(u,$),m=await ei($),{data:g}=await w.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:l,status:"in_progress"}).select().single(),v={matchId:g==null?void 0:g.id,mode:r,difficulty:d,formation:$,homeTeam:_,aiTeam:m,homeSubs:f,subsUsed:0,maxSubs:Math.min(f.length,3),homeScore:0,aiScore:0,gcCards:h||[],usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};ni(e,v,t)}async function oi(e,t,i){const{state:n,navigate:s}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("decks").select("id,name,is_active,formation").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){ot(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>s("decks"));return}const a=o.map(c=>c.id),{data:d}=await w.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let r=0;function l(){var m,g,v,k,y;const c=o[r],p=(d||[]).filter(b=>b.deck_id===c.id),u=p.filter(b=>{var E;return b.is_starter&&((E=b.card)==null?void 0:E.player)}).map(b=>xe(b.card)),f=p.find(b=>{var E;return((E=b.card)==null?void 0:E.card_type)==="formation"}),x=c.formation||((m=f==null?void 0:f.card)==null?void 0:m.formation)||"4-4-2",$=u.length>=11?nt(u,x):null,h=u.length>=11;e.innerHTML=`
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
          <div style="font-size:11px;opacity:.6;margin-top:2px">${x} · ${u.length}/11 ${c.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${r===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${r===o.length-1?"0.1":"0.3"});color:${r===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${r===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : contraindre la largeur du SVG pour contrôler hauteur+largeur -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${$?`<div style="width:min(98vw, calc(100dvh - 400px));overflow:hidden;flex-shrink:0">${st($,x,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${u.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${o.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${o.map((b,E)=>`<div style="width:7px;height:7px;border-radius:50%;background:${E===r?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,(g=document.getElementById("prev-deck"))==null||g.addEventListener("click",()=>{r>0&&(r--,l())}),(v=document.getElementById("next-deck"))==null||v.addEventListener("click",()=>{r<o.length-1&&(r++,l())}),(k=document.getElementById("validate-deck"))==null||k.addEventListener("click",()=>{h&&t.navigate("match",{matchMode:i,deckId:c.id})}),(y=document.getElementById("cancel-deck-select"))==null||y.addEventListener("click",()=>s("home"));const _=document.getElementById("deck-swipe-zone");if(_){let b=0,E=0;_.addEventListener("touchstart",T=>{b=T.touches[0].clientX,E=T.touches[0].clientY},{passive:!0}),_.addEventListener("touchend",T=>{const A=T.changedTouches[0].clientX-b,z=T.changedTouches[0].clientY-E;Math.abs(A)<40||Math.abs(A)<Math.abs(z)||(A<0&&r<o.length-1?(r++,l()):A>0&&r>0&&(r--,l()))},{passive:!0})}}l()}function ni(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-height:100vh;gap:12px;padding:12px 16px;background:#0a3d1e">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Ie(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>ri(e,t,i),5e3)}function ri(e,t,i){const n=t.homeTeam.MIL||[],s=t.aiTeam.MIL||[];function o(p){return p.reduce((u,f)=>u+D(f,"MIL"),0)}function a(p){let u=0;for(let f=0;f<p.length-1;f++){const x=J(p[f],p[f+1]);x==="#00ff88"?u+=2:x==="#FFD700"&&(u+=1)}return u}const d=o(n)+a(n),r=o(s)+a(s),l=d>=r;function c(p,u,f){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${u}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((x,$)=>{const h=N(x),_=$<p.length-1?J(x,p[$+1]):null,m=_&&_!=="#ff3333"&&_!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${f};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${h?`<img src="${h}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${D(x,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${x.name}</div>
          </div>
          ${_?`<div style="width:14px;height:4px;border-radius:2px;background:${_};flex-shrink:0;opacity:${m?.9:.3}"></div>`:""}
          `}).join("")}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${o(p)} + ${a(p)} liens = <b style="color:#fff">${o(p)+a(p)}</b>
      </div>
    </div>`}e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-height:100vh;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${c(n,t.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${d}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${r}</div>
    </div>

    ${c(s,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const p=document.getElementById("score-home"),u=document.getElementById("score-ai"),f=document.getElementById("midfield-result");if(p&&u&&(l?(p.style.fontSize="80px",p.style.color="#FFD700",u.style.opacity="0.25"):(u.style.fontSize="80px",u.style.color="#ff6b6b",p.style.opacity="0.25")),f){const x=Zt();f.style.opacity="1",l&&t.clubName,f.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${l?`${t.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${l?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${x}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,l&&(t.boostCard={value:x})}if(t.attacker=l?"home":"ai",t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(x=>({name:x.name,note:D(x,"MIL"),portrait:N(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),aiPlayers:s.map(x=>({name:x.name,note:D(x,"MIL"),portrait:N(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),homeTotal:d,aiTotal:r,text:`Duel milieu : ${t.clubName} ${d} – ${r} IA → ${l?t.clubName+" attaque":"IA attaque"}`}),f){const x=document.createElement("button");x.textContent="▶ Commencer le match",x.style.cssText="margin-top:20px;padding:14px 28px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer",x.addEventListener("click",()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",R(e,t,i),t.attacker==="ai"&&setTimeout(()=>ve(e,t,i),800)}),f.appendChild(x)}},5e3)}function rt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Y(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const n=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:N(e),s=rt(e),o=e._line||e.job||"MIL",a=Z[o]||"#555",d={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",r=e.note!==void 0?Number(e.note)||0:(Number(D(e,o))||0)+(e.boost||0),l=at(e==null?void 0:e.country_code),c=Math.round(i*.19),p=Math.round(i*.25),u=i-Math.round(i*.19)-Math.round(i*.25),f=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${d};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${f}">
    <div style="position:absolute;top:0;left:0;right:0;height:${c}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${n&&!(e!=null&&e.used)?`<img src="${n}" style="position:absolute;top:${c}px;left:0;width:${t}px;height:${u}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${he(e==null?void 0:e.country_code)?`<img src="${he(e.country_code)}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">${l}</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":r}</span>
      ${s?`<img src="${s}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function ae(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let s='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((o,a)=>{if(s+=Y(o,40,52),a<n.length-1){const d=J(o,n[a+1]);s+=`<div style="width:7px;height:3px;background:${d==="#ff3333"||d==="#cc2222"?"rgba(255,255,255,0.12)":d};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(s+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),s+="</div>",s}function he(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function at(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Ie(e,t,i,n,s=310,o=310){const a=ge[t]||{},d=Oe(t)||$e[t]||[],r={},l=["ATT","MIL","DEF","GK"];for(const m of l)(e[m]||[]).forEach((v,k)=>{r[`${m}${k+1}`]=v});function c(m){const g=a[m];return g?{x:g.x*s,y:g.y*o}:null}let p="";for(const[m,g]of d){const v=c(m),k=c(g);if(!v||!k)continue;const y=r[m],b=r[g],E=J(y,b);E==="#00ff88"||E==="#FFD700"?(p+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}"
        stroke="${E}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,p+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}"
        stroke="${E}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):p+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}"
        stroke="${E}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const u=48,f=64,x=13,$=16,h={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[m,g]of Object.entries(r)){const v=c(m);if(!v||!g)continue;const k=m.replace(/[0-9]/g,""),y=Z[k]||"#555",b=i==="attack"&&["MIL","ATT"].includes(k)&&!g.used||i==="defense"&&["GK","DEF","MIL"].includes(k)&&!g.used,E=n.includes(g.cardId);let T;i==="attack"?T=k==="MIL"?Number(g.note_m)||0:Number(g.note_a)||0:i==="defense"?T=k==="GK"?Number(g.note_g)||0:k==="MIL"?Number(g.note_m)||0:Number(g.note_d)||0:T=Number(k==="GK"?g.note_g:k==="DEF"?g.note_d:k==="MIL"?g.note_m:g.note_a)||0,T=T+(g.boost||0);const A=(v.x-u/2).toFixed(1),z=(v.y-f/2).toFixed(1),C=g.used?.25:1,G=h[g==null?void 0:g.rarity]||h.normal,q=E?"#ff3030":G,I=E?3:(g==null?void 0:g.rarity)==="légende"||(g==null?void 0:g.rarity)==="pépite"?2.5:2,L=f-x-$;p+=`<defs><clipPath id="cp-${m}"><rect x="${A}" y="${(v.y-f/2+x).toFixed(1)}" width="${u}" height="${L}"/></clipPath></defs>`,p+=`<rect x="${A}" y="${z}" width="${u}" height="${f}" rx="5" fill="${y}" opacity="${C}"/>`;const M=N(g);M&&!g.used&&(p+=`<image href="${M}" x="${A}" y="${(v.y-f/2+x).toFixed(1)}" width="${u}" height="${L}" clip-path="url(#cp-${m})" preserveAspectRatio="xMidYMin slice"/>`),p+=`<rect x="${A}" y="${z}" width="${u}" height="${x}" rx="4" fill="rgba(255,255,255,0.92)"/>`,p+=`<text x="${v.x.toFixed(1)}" y="${(v.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(g.name||"").slice(0,9)}</text>`;const B=(v.y+f/2-$).toFixed(1);if(p+=`<rect x="${A}" y="${B}" width="${u}" height="${$}" fill="rgba(255,255,255,0.92)"/>`,g.used)p+=`<text x="${v.x.toFixed(1)}" y="${(v.y+f/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const S=he(g.country_code);S?p+=`<image href="${S}" x="${(v.x-20).toFixed(1)}" y="${(v.y+f/2-$+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:p+=`<text x="${(v.x-13).toFixed(1)}" y="${(v.y+f/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${at(g.country_code)}</text>`,p+=`<text x="${v.x.toFixed(1)}" y="${(v.y+f/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${T}</text>`;const F=rt(g);F?p+=`<image href="${F}" x="${(v.x+u/2-14).toFixed(1)}" y="${(v.y+f/2-$+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:g.clubName&&(p+=`<text x="${(v.x+14).toFixed(1)}" y="${(v.y+f/2-$/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(g.clubName||"").slice(0,3).toUpperCase()}</text>`),g.boost&&(p+=`<rect x="${(v.x+u/2-12).toFixed(1)}" y="${(v.y-f/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,p+=`<text x="${(v.x+u/2-5).toFixed(1)}" y="${(v.y-f/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${g.boost}</text>`)}p+=`<rect x="${A}" y="${z}" width="${u}" height="${f}" rx="5" fill="${E?"rgba(255,255,255,0.12)":"none"}" stroke="${q}" stroke-width="${I}" opacity="${C}"/>`,b&&(p+=`<rect x="${A}" y="${z}" width="${u}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${E?"selected":""}" data-card-id="${g.cardId}" data-role="${k}" style="cursor:pointer"/>`)}const _=38;return`<svg viewBox="${-_} ${-_} ${s+_*2} ${o+_*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${p}
  </svg>`}function st(e,t,i,n,s=300,o=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ie(e,t,i,n,s,o)}
  </div>`}function se(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}function ai(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function R(e,t,i){var x,$,h,_,m,g,v,k;const n=t.selected.map(y=>y.cardId),s=t.usedSubIds||[],o=t.homeSubs.filter(y=>!s.includes(y.cardId));Object.values(t.homeTeam).flat().filter(y=>y.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const d=t.phase==="ai-attack"||t.phase==="ai-defense",r=t.phase==="attack",l=t.phase==="defense",c=t.phase==="finished",p=t.gcCards.filter(y=>!t.usedGc.includes(y.id)),u=t.boostCard&&!t.boostUsed;if(e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const b=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${ae((b.players||[]).map(E=>({...E,used:!1})),"#ff6b6b",b.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const b=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${ae((b.players||[]).map(E=>({...E,used:!1})),"#00ff88",b.total)}
          </div>`}const y=t.log[t.log.length-1];return y?'<div style="padding:2px 4px">'+ai(y)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    <!-- ZONE CENTRALE : REMPLAÇANTS + TERRAIN -->
    <div style="display:flex;flex-shrink:0;overflow:hidden">

      <!-- Colonne remplaçants (mini cartes) -->
      <div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:50px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(y=>`
              <div class="sub-btn-col" data-sub-id="${y.cardId}" title="${y.firstname} ${y.name}" style="cursor:pointer;flex-shrink:0">
                ${Y(y,44,58)}
              </div>`).join("")}
      </div>

      <!-- Terrain -->
      <div style="overflow:hidden;min-width:0;display:flex;align-items:flex-start;justify-content:center" id="match-field">
        <div style="width:min(calc(100vw - 56px), calc(100dvh - 370px));aspect-ratio:1;overflow:hidden;flex-shrink:0">
          ${st(t.homeTeam,t.formation,t.phase,n,300,300)}
        </div>
      </div>
    </div>

    <!-- ZONE BAS : GC + BOUTON ACTION -->
    <div style="display:flex;align-items:flex-end;padding:6px 8px;background:rgba(0,0,0,0.35);gap:8px;flex-shrink:0;min-height:80px">

      <!-- Grille GC -->
      <div style="flex:1;display:grid;grid-template-columns:repeat(4,1fr);gap:3px;align-content:start">
        ${p.map(y=>{var b;return`
          <div class="gc-mini" data-gc-id="${y.id}" data-gc-type="${y.gc_type}"
            style="background:linear-gradient(135deg,#3d0a7a,#7a28b8);border:1px solid #9b59b6;border-radius:7px;padding:3px 2px;cursor:pointer;text-align:center">
            <div style="font-size:16px">${((b=ie[y.gc_type])==null?void 0:b.icon)||"⚡"}</div>
            <div style="font-size:6px;color:#fff;font-weight:600;line-height:1.2">${y.gc_type.slice(0,8)}</div>
          </div>`}).join("")}
        ${u?`
          <div id="boost-card" style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:7px;padding:3px 2px;cursor:pointer;text-align:center">
            <div style="font-size:16px">⚡</div>
            <div style="font-size:6px;color:#000;font-weight:900">+${t.boostCard.value}</div>
          </div>`:""}
      </div>

      <!-- Bouton action principal (rectangulaire + chrono) -->
      <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:3px">
        ${c?'<button id="btn-results" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">🏁 Résultats</button>':d?'<div style="min-width:130px;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:14px;display:flex;align-items:center;justify-content:center;gap:6px">⏳ Tour IA</div>':r?`<button id="btn-action" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?'disabled style="opacity:0.45;cursor:default"':""}>⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:l?`<button id="btn-action" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?'disabled style="opacity:0.45;cursor:default"':""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:'<div style="min-width:130px;padding:14px;border-radius:14px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>'}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(y=>{var b,E,T;if(y.type==="duel"){const A=y.isGoal,z=y.homeScored?"#FFD700":A?"#ff6b6b":"rgba(255,255,255,0.3)",C=y.homeScored?"⚽ BUT !":A?"⚽ BUT IA !":(b=y.homePlayers)!=null&&b.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${A?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${z};margin-bottom:4px">
                <div style="font-size:9px;color:${z};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${C}</div>
                ${(E=y.homePlayers)!=null&&E.length?`<div style="margin-bottom:3px">${ae(y.homePlayers,"rgba(255,255,255,0.7)",y.homeTotal)}</div>`:""}
                ${(T=y.aiPlayers)!=null&&T.length?`<div style="opacity:0.7">${ae(y.aiPlayers,"#ff6b6b",y.aiTotal)}</div>`:""}
              </div>`}return y.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${y.outPlayer?Y({...y.outPlayer,used:!0,_line:y.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${y.inPlayer?Y({...y.inPlayer,_line:y.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:y.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${y.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${y.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`,t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let y=!1,b=30;const E=()=>document.getElementById("match-timer"),T=()=>{const A=E();if(!A)return;const z=String(Math.floor(b/60)).padStart(2,"0"),C=String(b%60).padStart(2,"0");A.textContent=` ${z}:${C}`,A.style.color=y?"#ff2222":"#ff9500",A.style.fontWeight="900"};T(),t._timerInt=setInterval(()=>{if(b--,b<0)if(!y)y=!0,b=15,T();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",A.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(A),setTimeout(()=>{A.remove(),W(e,t,i)},2500)}else T()},1e3)}(x=document.getElementById("match-quit"))==null||x.addEventListener("click",()=>{confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,W(e,t,i))}),($=document.getElementById("view-ai"))==null||$.addEventListener("click",()=>mi(t,i)),(h=document.getElementById("toggle-history"))==null||h.addEventListener("click",()=>{var y;(y=document.getElementById("match-history-panel"))==null||y.classList.add("open")}),(_=document.getElementById("close-history"))==null||_.addEventListener("click",()=>{var y;(y=document.getElementById("match-history-panel"))==null||y.classList.remove("open")}),(m=document.getElementById("btn-action"))==null||m.addEventListener("click",()=>{t.selected.length!==0&&(r?di(e,t,i):l&&li(e,t,i))}),(g=document.getElementById("btn-results"))==null||g.addEventListener("click",()=>W(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(y=>{y.addEventListener("click",()=>si(y,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(y=>{y.addEventListener("click",()=>fi(y.dataset.gcId,y.dataset.gcType,e,t,i))}),(v=document.getElementById("boost-card"))==null||v.addEventListener("click",()=>gi(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(y=>{y.addEventListener("click",()=>Ne(e,t,i,y.dataset.subId))}),(k=document.getElementById("sub-btn-main"))==null||k.addEventListener("click",()=>Ne(e,t,i))}function si(e,t,i,n){const s=e.dataset.cardId,o=e.dataset.role,a=t.selected.findIndex(d=>d.cardId===s);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const d=(t.homeTeam[o]||[]).find(r=>r.cardId===s);d&&t.selected.push({...d,_role:o,_line:o})}R(i,t,n)}function Ae(e,t,i){e.matchId&&w.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function di(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ae(t,i,i.state.profile.id);const n=t.selected.map(o=>({...o,_line:o._role})),s=He(n,t.modifiers.home);t.pendingAttack={...s,players:[...t.selected],side:"home"},t.selected.forEach(o=>{const a=(t.homeTeam[o._role]||[]).find(d=>d.cardId===o.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(o=>o.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",R(e,t,i),setTimeout(()=>ci(e,t,i),1200)}function li(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ae(t,i,i.state.profile.id);const n=t.selected.map(d=>({...d,_line:d._role})),s=Ue(n,t.modifiers.home);t.selected.forEach(d=>{const r=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId);r&&(r.used=!0)});const o=Ve(t.pendingAttack.total,s.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>({name:d.name,note:d._line==="MIL"?d.note_m:d.note_a,portrait:N(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),homePlayers:t.selected.map(d=>{const r=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId)||d;return{name:r.name,note:r._line==="GK"?r.note_g:r._line==="MIL"?r.note_m:r.note_d,portrait:N(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo}}),homeTotal:s.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(o.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(o.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${s.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,R(e,t,i),Te(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ne(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${s.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ne(e,t,i,"home-attack")}function ve(e,t,i){Ae(t,i,null);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],s=Ye(n,"attack",t.difficulty);if(!s.length){lt(e,t,i);return}const o=He(s,t.modifiers.ai);t.pendingAttack={...o,players:s,side:"ai"},s.forEach(l=>{l.used=!0}),t.log.push({text:`🤖 IA attaque : ${o.total} (${s.map(l=>l.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used),r=(t.homeSubs||[]).filter(l=>!(t.usedSubIds||[]).includes(l.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!r){t.aiScore++;const l={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:s.map(c=>({name:c.name,note:c._line==="MIL"?c.note_m:c.note_a,portrait:N(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),aiTotal:o.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(l),t.pendingAttack=null,R(e,t,i),Te(l.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ne(e,t,i,"home-attack")});return}t.phase="defense",R(e,t,i)}function ci(e,t,i){const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],s=Ye(n,"defense",t.difficulty),o=s.length>0?Ue(s,t.modifiers.ai).total:0;s.forEach(r=>{r.used=!0});const a=Ve(t.pendingAttack.total,o,t.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:N(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiPlayers:s.map(r=>({name:r.name,note:r._line==="GK"?r.note_g:r._line==="MIL"?r.note_m:r.note_d,portrait:N(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:o,isGoal:!1,homeScored:!1,text:""};if(a.shielded)d.text="🛡️ Bouclier IA !",t.log.push(d);else if(a.goal){t.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${t.pendingAttack.total} > ${o})`,t.log.push(d),t.modifiers.ai={},t.pendingAttack=null,R(e,t,i),Te(d.homePlayers,t.homeScore,t.aiScore,!0,()=>{ne(e,t,i,"ai-attack")});return}else d.text=`🧤 IA défend (${o} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.modifiers.ai={},t.pendingAttack=null,ne(e,t,i,"ai-attack")}function ne(e,t,i,n){if(t.round++,dt(t)){W(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(o=>!o.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(a=>!a.used).length){W(e,t,i);return}t.phase="ai-attack",R(e,t,i),setTimeout(()=>ve(e,t,i),800);return}t.phase="attack",R(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(o=>!o.used).length){lt(e,t,i);return}t.phase="ai-attack",R(e,t,i),setTimeout(()=>ve(e,t,i),800)}}function dt(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(s=>!s.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(s=>!s.used));return!t&&!i}function lt(e,t,i){dt(t)?W(e,t,i):(t.phase="attack",R(e,t,i))}function pi(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const s=N(e),o=N(t),a=Z[e.job]||"#555",d=Z[t.job]||"#555",r=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,l=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${a};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${s?`<img src="${s}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
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
  `,document.body.appendChild(n);let c=!1;const p=()=>{c||(c=!0,n.remove(),i())};n.addEventListener("click",p),setTimeout(p,2e3)}function te(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function Ne(e,t,i,n=null){if(t.phase!=="attack"){te("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){te(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const s=Object.values(t.homeTeam).flat().filter(p=>p.used),o=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!s.length){te("Aucun joueur utilisé à remplacer");return}if(!o.length){te("Aucun remplaçant disponible");return}let a=0,d=Math.max(0,o.findIndex(p=>p.cardId===n)),r=!1;const l=document.createElement("div");l.id="sub-overlay",l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function c(){var _,m,g,v,k,y;const p=s[a],u=o[d],f=Math.min(130,Math.round((window.innerWidth-90)/2)),x=Math.round(f*1.35),$=b=>`background:rgba(255,255,255,0.12);border:none;color:${b?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${b?"default":"pointer"};flex-shrink:0`;l.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${$(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${u?Y({...u,used:!1,boost:0},f,x):"<div>—</div>"}</div>
        <button id="in-down" style="${$(d>=o.length-1)}" ${d>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${o.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${$(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${p?Y({...p,used:!1,boost:0},f,x):"<div>—</div>"}</div>
        <button id="out-down" style="${$(a>=s.length-1)}" ${a>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${s.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(_=l.querySelector("#sub-close"))==null||_.addEventListener("click",()=>l.remove()),(m=l.querySelector("#out-up"))==null||m.addEventListener("click",()=>{a>0&&(a--,c())}),(g=l.querySelector("#out-down"))==null||g.addEventListener("click",()=>{a<s.length-1&&(a++,c())}),(v=l.querySelector("#in-up"))==null||v.addEventListener("click",()=>{d>0&&(d--,c())}),(k=l.querySelector("#in-down"))==null||k.addEventListener("click",()=>{d<o.length-1&&(d++,c())});const h=(b,E,T,A)=>{const z=l.querySelector("#"+b);if(!z)return;let C=0;z.addEventListener("touchstart",G=>{C=G.touches[0].clientY},{passive:!0}),z.addEventListener("touchend",G=>{const q=G.changedTouches[0].clientY-C;if(Math.abs(q)<30)return;const I=E();q<0&&I<A-1?(T(I+1),c()):q>0&&I>0&&(T(I-1),c())},{passive:!0})};h("in-panel",()=>d,b=>d=b,o.length),h("out-panel",()=>a,b=>a=b,s.length),(y=l.querySelector("#sub-confirm"))==null||y.addEventListener("click",b=>{if(b.preventDefault(),b.stopPropagation(),r)return;r=!0;const E=s[a],T=o[d];if(!E||!T)return;let A=null,z=-1;for(const[G,q]of Object.entries(t.homeTeam)){const I=(q||[]).findIndex(L=>L.cardId===E.cardId);if(I!==-1){A=G,z=I;break}}if(z===-1||!A){te("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),l.remove();return}const C={...T,_line:A,_col:E._col||0,used:!1,boost:0};t.homeTeam[A].splice(z,1,C),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(T.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:E.name,firstname:E.firstname,note:D(E,A),portrait:N(E),job:E.job,country_code:E.country_code,rarity:E.rarity,clubName:E.clubName,clubLogo:E.clubLogo},inPlayer:{name:T.name,firstname:T.firstname,note:D(T,A),portrait:N(T),job:T.job,country_code:T.country_code,rarity:T.rarity,clubName:T.clubName,clubLogo:T.clubLogo},text:`🔄 ${T.firstname} ${T.name} remplace ${E.firstname} ${E.name}`}),l.remove(),pi(E,T,()=>R(e,t,i))})}document.body.appendChild(l),c()}function fi(e,t,i,n,s){var d,r;const o=ie[t]||{icon:"⚡",desc:"Carte spéciale."},a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;align-items:center;justify-content:center;padding:24px",a.innerHTML=`
    <div style="background:linear-gradient(160deg,#2a0a52,#7a28b8);border:2px solid #9b59b6;border-radius:18px;padding:24px;max-width:320px;text-align:center;color:#fff">
      <div style="font-size:52px;margin-bottom:10px">${o.icon}</div>
      <div style="font-size:19px;font-weight:900;margin-bottom:8px">${t}</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.85);line-height:1.5;margin-bottom:20px">${o.desc}</div>
      <div style="display:flex;gap:10px">
        <button id="gc-back" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="gc-use" style="flex:1;padding:12px;border-radius:10px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser</button>
      </div>
    </div>`,document.body.appendChild(a),(d=a.querySelector("#gc-back"))==null||d.addEventListener("click",()=>a.remove()),(r=a.querySelector("#gc-use"))==null||r.addEventListener("click",()=>{a.remove(),ui(e,t,i,n,s)})}function ui(e,t,i,n,s){if(!n.usedGc.includes(e)){switch(n.usedGc.push(e),t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{let o=!1;for(const a of["ATT","MIL","DEF","GK"]){const d=(n.homeTeam[a]||[]).find(r=>r.used);if(d){d.used=!1,o=!0;break}}n.log.push({text:o?"💫 Joueur ressuscité !":"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const o=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(a=>!a.used);if(o.length){const a=o.sort((d,r)=>D(r,"ATT")-D(d,"ATT"))[0];a.used=!0,n.log.push({text:`❄️ ${a.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}w.from("cards").delete().eq("id",e).then(()=>{}),R(i,n,s)}}function gi(e,t,i){const n=Object.values(t.homeTeam).flat().filter(s=>!s.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(s=>`
        <div class="player-boost-opt" data-card-id="${s.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Z[s.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${D(s,s._line||s.job)}</div>
          <div style="flex:1"><b>${s.firstname} ${s.name}</b><div style="font-size:11px;color:#888">${s._line||s.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const d=(t.homeTeam[a]||[]).find(r=>r.cardId===o);if(d){d.boost=(d.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),R(e,t,i)})})}function Te(e,t,i,n,s){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(l,c)=>`
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
  <div style="position:absolute;inset:0;pointer-events:none">${a}</div>
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
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(o);let d=!1;const r=()=>{d||(d=!0,o.remove(),setTimeout(()=>s(),50))};o.addEventListener("click",r),setTimeout(r,3500)}async function W(e,t,i){var c,p;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,s=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,a=s?"victoire":o?"nul":"defaite",d=mt(t.mode,a);t.matchId&&await w.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:s?n.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",t.matchId);const r={credits:(n.profile.credits||0)+d,matches_played:(n.profile.matches_played||0)+1};s?r.wins=(n.profile.wins||0)+1:o?r.draws=(n.profile.draws||0)+1:r.losses=(n.profile.losses||0)+1,await w.from("users").update(r).eq("id",n.profile.id),await i.refreshProfile();const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",l.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${s?"🏆":o?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${s?"Victoire !":o?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${d.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(l),(c=document.getElementById("res-home"))==null||c.addEventListener("click",()=>{l.remove(),i.navigate("home")}),(p=document.getElementById("res-replay"))==null||p.addEventListener("click",()=>{l.remove(),i.navigate("match",{matchMode:t.mode})})}function mi(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ie(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const yi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function xi(e,t){const{state:i,toast:n}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await Le(e,t)}async function Le(e,t){const{state:i,toast:n}=t,{data:s}=await w.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),o=(s||[]).filter(r=>r.seller_id===i.profile.id),a=(s||[]).filter(r=>r.seller_id!==i.profile.id);e.innerHTML=`
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
  `;function d(r){const l=document.getElementById("mkt-content"),c=r==="buy"?a:o;if(c.length===0){l.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${r==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune carte en vente."}
      </div>`;return}l.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${c.map(p=>{var h,_,m;const u=(h=p.card)==null?void 0:h.player;if(!u)return"";const f=u.job==="GK"?u.note_g:u.job==="DEF"?u.note_d:u.job==="MIL"?u.note_m:u.note_a,x=yi[u.rarity],$=(i.profile.credits||0)>=p.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px">
          <div style="width:44px;height:44px;border-radius:8px;background:${bi(u.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${x};flex-shrink:0">${f}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${u.firstname} ${u.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${u.country_code} · ${((_=u.clubs)==null?void 0:_.encoded_name)||"—"} · ${u.rarity} · ${u.job}</div>
            <div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((m=p.seller)==null?void 0:m.pseudo)||"—"}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${p.price.toLocaleString("fr")}</div>
            ${r==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${p.id}" ${$?"":"disabled"} style="margin-top:4px">${$?"Acheter":"Trop cher"}</button>`:`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,l.querySelectorAll("[data-buy]").forEach(p=>{p.addEventListener("click",()=>hi(p.dataset.buy,c,e,t))}),l.querySelectorAll("[data-cancel]").forEach(p=>{p.addEventListener("click",()=>vi(p.dataset.cancel,e,t))})}d("buy"),e.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(l=>{const c=l===r;l.style.background=c?"var(--green)":"#fff",l.style.color=c?"#fff":"var(--gray-600)",l.style.borderColor=c?"var(--green)":"var(--gray-200)"}),d(r.dataset.tab)})})}async function hi(e,t,i,n){const{state:s,toast:o,refreshProfile:a}=n,d=t.find(r=>r.id===e);if(d){if((s.profile.credits||0)<d.price){o("Crédits insuffisants","error");return}if(confirm(`Acheter ${d.card.player.firstname} ${d.card.player.surname_encoded} pour ${d.price.toLocaleString("fr")} crédits ?`))try{const{error:r}=await w.from("cards").update({owner_id:s.profile.id,is_for_sale:!1,sale_price:null}).eq("id",d.card.id);if(r)throw r;await w.from("market_listings").update({status:"sold",buyer_id:s.profile.id,sold_at:new Date().toISOString()}).eq("id",e),await w.from("users").update({credits:(s.profile.credits||0)-d.price}).eq("id",s.profile.id);const{data:l}=await w.from("users").select("credits").eq("id",d.seller_id).single();l&&await w.from("users").update({credits:(l.credits||0)+d.price}).eq("id",d.seller_id),await w.from("notifications").insert({user_id:d.seller_id,type:"card_sold",message:`Ta carte ${d.card.player.surname_encoded} a été vendue pour ${d.price} crédits !`,data:{card_id:d.card.id,price:d.price}}),await a(),o("Carte achetée ! ✅","success"),Le(i,n)}catch(r){o("Erreur : "+r.message,"error")}}}async function vi(e,t,i){const{toast:n}=i,{data:s}=await w.from("market_listings").select("card_id").eq("id",e).single();await w.from("market_listings").update({status:"cancelled"}).eq("id",e),s&&await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",s.card_id),n("Annonce retirée","success"),Le(t,i)}function bi(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function wi(e,{state:t,navigate:i,toast:n}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await w.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${s&&s.length>0?s.map((o,a)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${o.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${a+1}</div>
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
  `}async function $i(e,{state:t,navigate:i,toast:n}){const s=t.profile;if(!s)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("matches").select("id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at").or(`home_id.eq.${s.id},away_id.eq.${s.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(o||[]).filter(c=>c.status==="finished"),r=(o||[]).filter(c=>c.status==="in_progress");function l(c){const p=c.home_id===s.id;p?c.home_score:c.away_score,p?c.away_score:c.home_score;const u=c.winner_id===s.id,f=c.home_score===c.away_score&&c.status==="finished",x=c.status!=="finished"?"…":f?"N":u?"V":"D",$=c.status!=="finished"||f?"#888":u?"#1A6B3C":"#c0392b";let h=a[c.mode]||c.mode;c.away_id===null&&!h.startsWith("IA")&&(h="IA");let _="";c.status==="in_progress"&&Date.now()-new Date(c.created_at).getTime()>3600*1e3&&(_=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const m=new Date(c.created_at),g=m.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+m.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),v=c.status==="finished"?`${c.home_score} - ${c.away_score}`:`${c.home_score||0} - ${c.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${_}</div>
        <div style="font-size:11px;color:var(--gray-600)">${g}${c.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${v}</span>
        <span style="background:${$};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${x}</span>
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
  </div>`}const j={user:null,profile:null,page:"home",params:{}};function de(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function _i(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function be(){document.getElementById("modal-overlay").classList.add("hidden")}async function le(){if(!j.user)return;const{data:e}=await w.from("users").select("*").eq("id",j.user.id).single();e&&(j.profile=e)}const Me="mw_theme";function ue(){return localStorage.getItem(Me)||"light"}function ki(e){var t;localStorage.setItem(Me,e),we(e),(t=j.profile)!=null&&t.id&&w.from("users").update({theme:e}).eq("id",j.profile.id).then(()=>{})}function we(e){document.documentElement.setAttribute("data-theme",e)}function ce(e,t={}){j.page=e,j.params=t,ct()}async function ct(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(n=>{n.classList.toggle("active",n.dataset.page===j.page)});const t=document.getElementById("nav-credits");t&&j.profile&&(t.textContent=`💰 ${(j.profile.credits||0).toLocaleString("fr")}`);const i={state:j,navigate:ce,toast:de,openModal:_i,closeModal:be,refreshProfile:le};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',j.page){case"home":await je(e,i);break;case"collection":await vt(e,i);break;case"decks":await ye(e,i);break;case"boosters":await Gt(e,i);break;case"match":await ii(e,i);break;case"market":await xi(e,i);break;case"rankings":await wi(e,i);break;case"matches":await $i(e,i);break;default:await je(e,i)}}function Ei(){const e=document.getElementById("app"),t=j.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",s=>{s.preventDefault(),ce(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>ce("home")),document.getElementById("nav-credits").addEventListener("click",()=>ce("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const s=ue()==="dark"?"light":"dark";ki(s),Re(s)}),Re(ue())}function Re(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Ii(){we(ue()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&be()}),document.getElementById("modal-close").addEventListener("click",be);const{data:{session:e}}=await w.auth.getSession();if(!e){Pe(),ze(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:de});return}j.user=e.user,await le(),Pe();try{const{data:t}=await w.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(n=>{i[n.formation]=n.links}),pt(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!j.profile){ft(document.getElementById("app"),{state:j,navigate:async()=>{await le(),qe()},toast:de,refreshProfile:le});return}j.profile.theme&&j.profile.theme!==ue()&&(localStorage.setItem(Me,j.profile.theme),we(j.profile.theme)),qe(),w.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(j.user=null,j.profile=null,document.getElementById("app").innerHTML="",ze(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:de}))})}function qe(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Ei(),ct()}function Pe(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}Ii();
