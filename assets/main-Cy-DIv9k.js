import{s as _,l as J,F as ke,b as ge,c as He,d as ut}from"./formation-links-BrrCMBql.js";function je(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(s=>{s.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(d=>d.classList.remove("active")),s.classList.add("active"),document.getElementById("tab-login").style.display=s.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=s.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const s=document.getElementById("login-email").value.trim(),d=document.getElementById("login-password").value,o=document.getElementById("login-error");if(o.textContent="",!s||!d){o.textContent="Remplissez tous les champs.";return}const l=document.getElementById("login-btn");l.textContent="Connexion…",l.disabled=!0;const{error:a}=await _.auth.signInWithPassword({email:s,password:d});if(l.textContent="Se connecter",l.disabled=!1,a){o.textContent=a.message.includes("Invalid")?"Email ou mot de passe incorrect.":a.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",s=>{s.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const s=document.getElementById("reg-email").value.trim(),d=document.getElementById("reg-password").value,o=document.getElementById("reg-confirm").value,l=document.getElementById("reg-error");if(l.textContent="",!s||!d||!o){l.textContent="Remplissez tous les champs.";return}if(d.length<6){l.textContent="Mot de passe trop court (min. 6 caractères).";return}if(d!==o){l.textContent="Les mots de passe ne correspondent pas.";return}const a=document.getElementById("reg-btn");a.textContent="Création…",a.disabled=!0;const{error:n}=await _.auth.signUp({email:s,password:d});if(a.textContent="Créer mon compte",a.disabled=!1,n){l.textContent=n.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=s})}function gt(e,{state:t,navigate:i,toast:s,refreshProfile:d}){let o="#1A6B3C",l="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${l};border-color:${o}">
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
            <div class="color-swatch" id="swatch2" style="background:${l};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur de l'intérieur</label>
              <input type="color" id="color2" value="${l}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function a(){var x;const r=document.getElementById("logo-preview"),c=document.getElementById("logo-initials"),p=((x=document.getElementById("setup-club"))==null?void 0:x.value)||"MW",f=p.trim().split(" ").filter(Boolean),u=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():p.slice(0,2).toUpperCase();r&&(r.style.background=l,r.style.borderColor=o),c&&(c.textContent=u,c.style.color=o)}document.getElementById("color1").addEventListener("input",r=>{o=r.target.value,document.getElementById("swatch1").style.background=o,a()}),document.getElementById("color2").addEventListener("input",r=>{l=r.target.value,document.getElementById("swatch2").style.background=l,a()});function n(r){document.querySelectorAll(".setup-step").forEach(c=>c.classList.remove("active")),document.getElementById(`step-${r}`).classList.add("active"),document.getElementById("step-num").textContent=r,document.getElementById("progress-fill").style.width=`${Math.round(r/3*100)}%`,r===3&&a()}document.getElementById("step1-next").addEventListener("click",async()=>{const r=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("step1-error");if(c.textContent="",r.length<3){c.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:p}=await _.from("users").select("id").eq("pseudo",r).maybeSingle();if(p){c.textContent="Ce pseudo est déjà pris.";return}n(2)}),document.getElementById("step2-back").addEventListener("click",()=>n(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const r=document.getElementById("setup-club").value.trim(),c=document.getElementById("step2-error");if(c.textContent="",r.length<2){c.textContent="Nom trop court (min. 2 caractères).";return}const{data:p}=await _.from("users").select("id").eq("club_name",r).maybeSingle();if(p){c.textContent="Ce nom de club est déjà pris.";return}n(3)}),document.getElementById("step3-back").addEventListener("click",()=>n(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const r=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("setup-club").value.trim(),p=document.getElementById("step3-error"),f=document.getElementById("step3-finish");p.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:u}=await _.from("users").insert({id:t.user.id,pseudo:r,club_name:c,club_color1:o,club_color2:l,credits:1e4});if(u)throw u;await xt(t.user.id),await d(),s(`Bienvenue ${r} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(u){p.textContent=u.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function xt(e){const{data:t}=await _.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,s=i.filter(n=>n.job==="GK"),d=i.filter(n=>n.job!=="GK"),o=[];for(let n=0;n<5;n++){let r=[];if(n===0&&s.length>0){const c=s[Math.floor(Math.random()*s.length)];r.push(c);const p=Be([...d]).slice(0,3);r.push(...p)}else r=Be([...i]).slice(0,4);r.forEach(c=>{o.push({owner_id:e,player_id:c.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(n=>{o.push({owner_id:e,card_type:"game_changer",gc_type:n})});const a=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];o.push({owner_id:e,card_type:"formation",formation:a[Math.floor(Math.random()*a.length)]}),o.length>0&&await _.from("cards").insert(o),await _.from("users").update({first_booster_opened:!0}).eq("id",e)}function Be(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}async function Se(e,{state:t,navigate:i,toast:s}){var l,a;const d=t.profile;if(!d)return;const{data:o}=await _.from("matches").select("id,home_score,away_score,status,mode,winner_id,created_at").or(`home_id.eq.${d.id},away_id.eq.${d.id}`).eq("status","finished").order("created_at",{ascending:!1}).limit(3);e.innerHTML=`
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
          ${o.map(n=>{const r=n.winner_id===d.id,c=n.home_score===n.away_score,p=c?"N":r?"V":"D",f=c?"#888":r?"#1A6B3C":"#c0392b",u={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat"}[n.mode]||n.mode,y=new Date(n.created_at).toLocaleDateString("fr",{month:"short",day:"numeric"});return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
              <div>
                <div style="font-size:13px;font-weight:600">${u}</div>
                <div style="font-size:11px;color:var(--gray-600)">${y}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <span style="font-size:14px;font-weight:700">${n.home_score} - ${n.away_score}</span>
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
  `,e.querySelectorAll("[data-nav]").forEach(n=>{n.addEventListener("click",r=>{r.preventDefault(),i(n.dataset.nav)})}),(l=document.getElementById("nav-rankings"))==null||l.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(n=>{n.addEventListener("click",()=>{if(n.classList.add("tapped"),setTimeout(()=>n.classList.remove("tapped"),200),n.dataset.action==="match-ai"){mt(i);return}s("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),window.location.reload()})}function mt(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const s=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",s),i.addEventListener("click",d=>{d.target===i&&s()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{s(),e("match",{matchMode:d.dataset.mode})})})}const ie={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function F(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}function Ue(e){let t=0;for(let i=0;i<e.length-1;i++){const s=e[i],d=e[i+1];if(!s||!d)continue;const o=J(s,d);o==="#00ff88"?t+=2:o==="#FFD700"&&(t+=1)}return t}function Ve(e,t={}){const i=e.reduce((o,l)=>{const a=l._line||l.job;return o+(Number(a==="MIL"?l.note_m:l.note_a)||0)+(Number(l.boost)||0)},0),s=Ue(e);let d=i+s;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:s,total:Math.max(0,d)}}function Ye(e,t={}){const i=e.reduce((o,l)=>{const a=l._line||l.job;let n=0;return a==="GK"?n=Number(l.note_g)||0:a==="MIL"?n=Number(l.note_m)||0:n=Number(l.note_d)||0,o+n+(Number(l.boost)||0)},0),s=Ue(e);let d=i+s;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:s,total:Math.max(0,d)}}function We(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Je(e,t,i="easy"){const s=e.filter(l=>!l.used);if(!s.length)return[];const d=[...s].sort((l,a)=>{const n=t==="attack"?F(l,"ATT"):l._line==="GK"?F(l,"GK"):F(l,"DEF");return(t==="attack"?F(a,"ATT"):a._line==="GK"?F(a,"GK"):F(a,"DEF"))-n});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(o,d.length,3))}function yt(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Xe={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},pe={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},re=["GK","DEF","MIL","ATT"],ht=["Tous","GK","DEF","MIL","ATT"],bt={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},Ee={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Qe(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function oe(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Fe(e,t=""){var p,f;const i=e.player;if(!i)return"";const s=i.job||"ATT",d=pe[s],o=Xe[i.rarity]||"#ccc",l=oe(i,s),a=i.job2?oe(i,i.job2):null,n=i.job2?pe[i.job2]:null,r=Qe(i),c=Ee[i.country_code]||i.country_code||"";return`
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
            fill="white" font-family="Arial Black,Arial">${l}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${a!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${n}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${a}</text>
        </svg>`:""}
      </div>
      <!-- Portrait -->
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${r?`<img src="${r}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
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
  </div>`}function vt(e){const t=e.job||"ATT",i=oe(e,t),s=Ee[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${s}</div>
      </div>
    </div>
  </div>`}async function wt(e,t){const{state:i,navigate:s,toast:d,openModal:o,closeModal:l}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await _.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:n}=await _.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),r=(a||[]).filter(A=>A.card_type==="player"&&A.player),c=(a||[]).filter(A=>A.card_type==="game_changer"),p=(a||[]).filter(A=>A.card_type==="formation"),f=Object.keys(ke),u=Object.keys(ie),x={};r.forEach(A=>{const L=A.player.id;x[L]=(x[L]||0)+1});const y=new Set(Object.keys(x).map(A=>String(A))),b=new Set(p.map(A=>A.formation)),k=new Set(c.map(A=>A.gc_type));let m="player",g="Tous",w="",E=!1;function h(){return[...r].sort((A,L)=>{const M=re.indexOf(A.player.job),B=re.indexOf(L.player.job);return M!==B?M-B:(A.player.surname_encoded||"").localeCompare(L.player.surname_encoded||"")})}function v(){return[...n||[]].sort((A,L)=>{const M=re.indexOf(A.job),B=re.indexOf(L.job);return M!==B?M-B:(A.surname_encoded||"").localeCompare(L.surname_encoded||"")})}function $(){return h().filter(A=>{const L=A.player,M=g==="Tous"||L.job===g,B=!w||`${L.firstname} ${L.surname_encoded}`.toLowerCase().includes(w);return M&&B})}function T(){return v().filter(A=>{const L=g==="Tous"||A.job===g,M=!w||`${A.firstname} ${A.surname_encoded}`.toLowerCase().includes(w);return L&&M})}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Ma collection</h2>
      <p>${r.length} carte(s) joueur · ${c.length} Game Changer · ${p.length} Formation</p>
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
  </div>`;function I(){const A=document.getElementById("col-filters");A&&(m==="player"?(A.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${w}">
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
        </div>`,document.getElementById("col-search").addEventListener("input",L=>{w=L.target.value.toLowerCase(),z()}),e.querySelectorAll(".filter-btn").forEach(L=>{L.addEventListener("click",()=>{g=L.dataset.job,I(),z()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{E=!E,I(),z()})):(A.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${E?"var(--yellow)":"var(--gray-200)"};
              background:${E?"var(--yellow)":"#fff"};
              color:${E?"#fff":"var(--gray-600)"}">
            ${E?"✓ Tout afficher":"Voir tout"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{E=!E,I(),z()})))}function z(){const A=document.getElementById("col-grid");A&&(m==="player"?C(A):m==="formation"?N(A):q(A))}function C(A){if(E){const L=T();if(!L.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}A.innerHTML=L.map(M=>{if(y.has(String(M.id))){const S=r.find(H=>H.player.id===M.id),G=x[M.id]||1,O=G>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${G}</div>`:"",K=r.filter(H=>H.player.id===M.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Fe(S,O+K)}return vt(M)}).join("")}else{const L=$();if(!L.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const M={},B=[];L.forEach(S=>{const G=S.player.id;M[G]||(M[G]=!0,B.push(S))}),A.innerHTML=B.map(S=>{const G=x[S.player.id]||1,O=G>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${G}</div>`:"",K=r.filter(H=>H.player.id===S.player.id&&H.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Fe(S,O+K)}).join("")}A.querySelectorAll("[data-card-id]").forEach(L=>{L.addEventListener("click",()=>{const M=r.find(B=>B.id===L.dataset.cardId);M&&kt(M,r,x,t)})})}function N(A){const L=E?f:[...b];if(!L.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}A.innerHTML=L.map(M=>{if(b.has(M)){const S=p.find(P=>P.formation===M),G=p.filter(P=>P.formation===M).length,O=G>1?`<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${G}</div>`:"";return`
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
        </div>`}).join(""),A.querySelectorAll("[data-form-id]").forEach(M=>{M.addEventListener("click",()=>{const B=p.find(S=>S.id===M.dataset.formId);B&&_t(B,p,t,o)})})}function q(A){const L=E?u:[...k];if(!L.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}A.innerHTML=L.map(M=>{const B=k.has(M),S=ie[M]||{icon:"⚡"};if(B){const G=c.find(K=>K.gc_type===M),O=c.filter(K=>K.gc_type===M).length,P=O>1?`<div style="position:absolute;top:4px;right:4px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${O}</div>`:"";return`
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
        </div>`}).join(""),A.querySelectorAll("[data-gc-id]").forEach(M=>{M.addEventListener("click",()=>$t(M.dataset.gcType,o))})}e.querySelectorAll(".col-tab-btn").forEach(A=>{A.addEventListener("click",()=>{m=A.dataset.tab,g="Tous",w="",E=!1,e.querySelectorAll(".col-tab-btn").forEach(L=>{const M=L.dataset.tab===m;L.style.borderBottomColor=M?"var(--green)":"transparent",L.style.color=M?"var(--green)":"var(--gray-600)"}),I(),z()})}),I(),z()}function $t(e,t){const i=ie[e]||{icon:"⚡",desc:"Effet spécial."};t("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ee=1e3;function _t(e,t,i,s){var y,b,k;const{state:d,toast:o,closeModal:l,navigate:a,refreshProfile:n}=i,r=e.formation,c={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function p(){const m=ge[r]||{},g=ke[r]||[],w=290,E=360,h=20;function v(T){const I=m[T];return I?{x:I.x*w,y:I.y*E}:null}let $=`<svg width="${w}" height="${E}" viewBox="0 0 ${w} ${E}" xmlns="http://www.w3.org/2000/svg">`;for(const[T,I]of g){const z=v(T),C=v(I);!z||!C||($+=`<line x1="${z.x}" y1="${z.y}" x2="${C.x}" y2="${C.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const T of Object.keys(m)){const I=v(T);if(!I)continue;const z=T.replace(/\d+/,""),C=c[z]||"#555";$+=`<circle cx="${I.x}" cy="${I.y}" r="${h}" fill="${C}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,$+=`<text x="${I.x}" y="${I.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${z}</text>`}return $+="</svg>",$}const f=t.filter(m=>m.formation===r),u=f.length,x=!e.is_for_sale;s(`Formation ${r}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(y=document.getElementById("direct-sell-form-btn"))==null||y.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${r} pour ${ee.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const m=f.find(w=>!w.is_for_sale)||f[0];if(!m){o("Aucune carte à vendre","error");return}const{error:g}=await _.from("cards").delete().eq("id",m.id);if(g){o(g.message,"error");return}await _.from("users").update({credits:(d.profile.credits||0)+ee}).eq("id",d.profile.id),await n(),o(`+${ee.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),a("collection")}),(b=document.getElementById("market-sell-form-btn"))==null||b.addEventListener("click",async()=>{const m=parseInt(document.getElementById("sell-price-form").value);if(!m||m<1){o("Prix invalide","error");return}await _.from("cards").update({is_for_sale:!0,sale_price:m}).eq("id",e.id),await _.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:m}),o("Carte mise en vente sur le marché !","success"),l(),a("collection")}),(k=document.getElementById("cancel-sell-form-btn"))==null||k.addEventListener("click",async()=>{await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await _.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),l(),a("collection")})}function kt(e,t,i,s){var h,v,$,T,I,z;const{state:d,toast:o,openModal:l,closeModal:a,navigate:n,refreshProfile:r}=s,c=e.player,p=t.filter(C=>C.player.id===c.id),f=p.length,u=bt[c.rarity]||1e3,x=c.rarity!=="legende",y=Qe(c),b=oe(c,c.job),k=c.job2?oe(c,c.job2):null,m=pe[c.job]||"#1A6B3C",g=c.job2?pe[c.job2]:null,w=Xe[c.rarity]||"#ccc",E=Ee[c.country_code]||c.country_code||"";l(`${c.firstname} ${c.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${w};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${c.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(c.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${m}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${m}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${b}</text>
            </svg>
            ${k!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${g}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${k}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${y?`<img src="${y}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${c.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${E}</div>
            ${(h=c.clubs)!=null&&h.logo_url?`<img src="${c.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((v=c.clubs)==null?void 0:v.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${w}">${c.rarity.toUpperCase()}</div>
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),($=document.getElementById("close-detail"))==null||$.addEventListener("click",a),(T=document.getElementById("direct-sell-btn"))==null||T.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${c.surname_encoded} pour ${u.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const C=p.find(q=>!q.is_for_sale)||p[0];if(!C){o("Aucune carte à vendre","error");return}const{error:N}=await _.from("cards").delete().eq("id",C.id);if(N){o(N.message,"error");return}await _.from("users").update({credits:(d.profile.credits||0)+u}).eq("id",d.profile.id),await r(),o(`+${u.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),n("collection")}),(I=document.getElementById("market-sell-btn"))==null||I.addEventListener("click",async()=>{const C=parseInt(document.getElementById("sell-price").value);if(!C||C<1){o("Prix invalide","error");return}await _.from("cards").update({is_for_sale:!0,sale_price:C}).eq("id",e.id),await _.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:C}),o("Carte mise en vente sur le marché !","success"),a(),n("collection")}),(z=document.getElementById("cancel-sell-btn"))==null||z.addEventListener("click",async()=>{await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await _.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),a(),n("collection")})}const fe={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},U={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function xe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Ze(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function et(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Et(e,t=44,i=58){var u;const s=e?xe(e):null,d=e?et(e):null,o=Ze(e==null?void 0:e.country_code),l=(e==null?void 0:e.job)||"MIL",a=U[l]||"#555",n={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",r=Number(l==="GK"?e==null?void 0:e.note_g:l==="DEF"?e==null?void 0:e.note_d:l==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,c=Math.round(i*.19),p=Math.round(i*.25),f=i-c-p;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${n};background:${a};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${c}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${s?`<img src="${s}" style="position:absolute;top:${c}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${o?`<img src="${o}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">🌍</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${r}</span>
      ${d?`<img src="${d}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:(u=e==null?void 0:e.clubs)!=null&&u.encoded_name?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function ye(e,t){const{state:i,navigate:s,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(o==null?void 0:o.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(o==null?void 0:o.length)>0?o.map(l=>`
          <div class="card-panel" data-open-deck="${l.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="font-weight:700;font-size:15px;flex:1">${l.name}</div>
            <div style="display:flex;gap:6px" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${l.id}" data-name="${l.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${l.id}" data-name="${l.name}">🗑️</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const l=prompt("Nom du deck :",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!l)return;const{data:a,error:n}=await _.from("decks").insert({owner_id:i.profile.id,name:l}).select().single();if(n){d(n.message,"error");return}d("Deck créé !","success"),De(a.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(l=>{l.addEventListener("click",()=>De(l.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(l=>{l.addEventListener("click",async()=>{const a=prompt("Nouveau nom :",l.dataset.name);if(!a||a===l.dataset.name)return;const{error:n}=await _.from("decks").update({name:a}).eq("id",l.dataset.rename);if(n){d(n.message,"error");return}d("Deck renommé !","success"),ye(e,t)})}),e.querySelectorAll("[data-delete]").forEach(l=>{l.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${l.dataset.name}" ? Cette action est irréversible.`))return;await _.from("deck_cards").delete().eq("deck_id",l.dataset.delete);const{error:a}=await _.from("decks").delete().eq("id",l.dataset.delete);if(a){d(a.message,"error");return}d("Deck supprimé.","success"),ye(e,t)})})}async function De(e,t,i){const{state:s,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("decks").select("*").eq("id",e).single(),{data:l}=await _.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",s.profile.id),a=(l||[]).filter(u=>u.card_type==="player"&&u.player),n=(l||[]).filter(u=>u.card_type==="formation"),r=n.map(u=>u.formation).filter(Boolean),{data:c}=await _.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=o.formation||"4-4-2";r.length>0&&!r.includes(p)&&(p=r[0]);const f={deckId:e,name:o.name,formation:p,formationCardId:o.formation_card_id,slots:{},subs:[],playerCards:a,formationCards:n,availableFormations:r};(c||[]).forEach(u=>{u.is_starter?f.slots[u.position]=u.card_id:f.subs.includes(u.card_id)||f.subs.push(u.card_id)}),X(t,f,i)}function X(e,t,i){var n;const{navigate:s}=i;fe[t.formation];const d=Ge(t.formation),o=d.filter(r=>t.slots[r]).length,l=t.availableFormations.length>0?t.availableFormations:Object.keys(fe),a=t.subs.map(r=>t.playerCards.find(c=>c.id===r)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${l.map(r=>`<option value="${r}" ${r===t.formation?"selected":""}>${r}</option>`).join("")}
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
        ${a.map(r=>{const c=r.player;return`<div style="position:relative;flex-shrink:0">
            ${Et(c,44,58)}
            <button data-remove-sub="${r.id}"
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
  </div>`,It(e,t,d,i),document.getElementById("builder-back").addEventListener("click",()=>s("decks")),document.getElementById("formation-select").addEventListener("change",r=>{t.formation=r.target.value;const c=Ge(t.formation),p={};c.forEach(f=>{t.slots[f]&&(p[f]=t.slots[f])}),t.slots=p,X(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>Lt(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(r=>{r.addEventListener("click",()=>{t.subs=t.subs.filter(c=>c!==r.dataset.removeSub),X(e,t,i)})}),(n=document.getElementById("add-sub-btn"))==null||n.addEventListener("click",()=>{Tt(t,e,i)})}function It(e,t,i,s){const d=e.querySelector("#deck-field");if(!d)return;const o=ge[t.formation]||{},l=He(t.formation)||[],a={};for(const k of i){const m=t.slots[k],g=m?t.playerCards.find(w=>w.id===m):null;a[k]=g?g.player:null}const n=300,r=300,c=48,p=64,f=13,u=16,x=38;function y(k){const m=o[k];return m?{x:m.x*n,y:m.y*r}:null}let b="";for(const[k,m]of l){const g=y(k),w=y(m);if(!g||!w)continue;const E=a[k]?{...a[k],club_id:a[k].club_id,country_code:a[k].country_code,rarity:a[k].rarity}:null,h=a[m]?{...a[m],club_id:a[m].club_id,country_code:a[m].country_code,rarity:a[m].rarity}:null,v=J(E,h);v==="#ff3333"||v==="#cc2222"?b+=`<line x1="${g.x.toFixed(1)}" y1="${g.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${v}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(b+=`<line x1="${g.x.toFixed(1)}" y1="${g.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${v}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,b+=`<line x1="${g.x.toFixed(1)}" y1="${g.y.toFixed(1)}" x2="${w.x.toFixed(1)}" y2="${w.y.toFixed(1)}" stroke="${v}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const k of i){const m=y(k);if(!m)continue;const g=a[k],w=k.replace(/\d+/,""),E=U[w]||"#555",h=(m.x-c/2).toFixed(1),v=(m.y-p/2).toFixed(1),$={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[g==null?void 0:g.rarity]||"#aaa";if(g){const T=xe(g),I=et(g),z=Ze(g.country_code),C=Number(w==="GK"?g.note_g:w==="DEF"?g.note_d:w==="MIL"?g.note_m:g.note_a)||0,N=p-f-u;b+=`<defs><clipPath id="dcp-${k}"><rect x="${h}" y="${(m.y-p/2+f).toFixed(1)}" width="${c}" height="${N}"/></clipPath></defs>`,b+=`<rect x="${h}" y="${v}" width="${c}" height="${p}" rx="5" fill="${E}"/>`,T&&(b+=`<image href="${T}" x="${h}" y="${(m.y-p/2+f).toFixed(1)}" width="${c}" height="${N}" clip-path="url(#dcp-${k})" preserveAspectRatio="xMidYMin slice"/>`),b+=`<rect x="${h}" y="${v}" width="${c}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,b+=`<text x="${m.x.toFixed(1)}" y="${(m.y-p/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(g.surname_encoded||"").slice(0,9)}</text>`;const q=(m.y+p/2-u).toFixed(1);b+=`<rect x="${h}" y="${q}" width="${c}" height="${u}" fill="rgba(255,255,255,0.93)"/>`,z&&(b+=`<image href="${z}" x="${(m.x-21).toFixed(1)}" y="${(m.y+p/2-u+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),b+=`<text x="${m.x.toFixed(1)}" y="${(m.y+p/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${C}</text>`,I&&(b+=`<image href="${I}" x="${(m.x+c/2-14).toFixed(1)}" y="${(m.y+p/2-u+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),b+=`<rect x="${h}" y="${v}" width="${c}" height="${p}" rx="5" fill="none" stroke="${$}" stroke-width="2"/>`}else b+=`<rect x="${h}" y="${v}" width="${c}" height="${p}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,b+=`<text x="${m.x.toFixed(1)}" y="${m.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,b+=`<text x="${m.x.toFixed(1)}" y="${(m.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${w}</text>`;b+=`<rect x="${h}" y="${v}" width="${c}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${k}" style="cursor:pointer"/>`}d.innerHTML=`<svg viewBox="${-x} ${-x} ${n+x*2} ${r+x*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${b}</svg>`,d.querySelectorAll(".deck-slot-hit").forEach(k=>{k.addEventListener("click",()=>At(k.dataset.pos,t,e,s))})}function At(e,t,i,s){var f,u,x;const{openModal:d,closeModal:o}=s,l=e.replace(/\d+/,""),a=t.slots[e],n=a?t.playerCards.find(y=>y.id===a):null;(f=n==null?void 0:n.player)==null||f.id;const r=new Set;Object.entries(t.slots).forEach(([y,b])=>{var m;if(y===e||!b)return;const k=t.playerCards.find(g=>g.id===b);(m=k==null?void 0:k.player)!=null&&m.id&&r.add(k.player.id)}),t.subs.forEach(y=>{var k;const b=t.playerCards.find(m=>m.id===y);(k=b==null?void 0:b.player)!=null&&k.id&&r.add(b.player.id)});const c=new Set,p=t.playerCards.filter(y=>{const b=y.player;return!(b.job===l||b.job2===l)||r.has(b.id)||c.has(b.id)?!1:(c.add(b.id),!0)});p.sort((y,b)=>{const k=l==="GK"?y.player.note_g:l==="DEF"?y.player.note_d:l==="MIL"?y.player.note_m:y.player.note_a;return(l==="GK"?b.player.note_g:l==="DEF"?b.player.note_d:l==="MIL"?b.player.note_m:b.player.note_a)-k}),d(`Choisir ${l} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${p.length>0?p.map(y=>{var w,E;const b=y.player,k=l==="GK"?b.note_g:l==="DEF"?b.note_d:l==="MIL"?b.note_m:b.note_a,m=xe(b),g={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[b.rarity];return`<div class="player-option" data-card-id="${y.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${U[l]}">
            ${m?`<img src="${m}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${U[l]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${l}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${b.firstname} ${b.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${b.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${b.country_code}">
              ${(w=b.clubs)!=null&&w.logo_url?`<img src="${b.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((E=b.clubs)==null?void 0:E.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${b.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${U[l]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${g};flex-shrink:0">
            ${k}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(u=document.getElementById("close-selector"))==null||u.addEventListener("click",o),(x=document.getElementById("remove-player"))==null||x.addEventListener("click",()=>{delete t.slots[e],o(),X(i,t,s)}),document.querySelectorAll(".player-option").forEach(y=>{y.addEventListener("click",()=>{t.slots[e]=y.dataset.cardId,o(),X(i,t,s)})})}function Tt(e,t,i){var n;const{openModal:s,closeModal:d}=i,o=new Set;Object.values(e.slots).filter(Boolean).forEach(r=>{var p;const c=e.playerCards.find(f=>f.id===r);(p=c==null?void 0:c.player)!=null&&p.id&&o.add(c.player.id)}),e.subs.forEach(r=>{var p;const c=e.playerCards.find(f=>f.id===r);(p=c==null?void 0:c.player)!=null&&p.id&&o.add(c.player.id)});const l=new Set,a=e.playerCards.filter(r=>{var c,p,f;return o.has((c=r.player)==null?void 0:c.id)||l.has((p=r.player)==null?void 0:p.id)?!1:(l.add((f=r.player)==null?void 0:f.id),!0)});s("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${a.length>0?a.map(r=>{var u;const c=r.player,p=xe(c),f=c.job==="GK"?c.note_g:c.job==="DEF"?c.note_d:c.job==="MIL"?c.note_m:c.note_a;return`<div class="player-option" data-card-id="${r.id}"
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
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(n=document.getElementById("close-sub-selector"))==null||n.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(r=>{r.addEventListener("click",()=>{e.subs.push(r.dataset.cardId),d(),X(t,e,i)})})}async function Lt(e,t){const{state:i,toast:s,navigate:d}=t,o=e.formationCards.find(n=>n.formation===e.formation),l=(o==null?void 0:o.id)||e.formationCardId;await _.from("decks").update({formation:e.formation,formation_card_id:l||null}).eq("id",e.deckId),await _.from("deck_cards").delete().eq("deck_id",e.deckId);const a=[];if(Object.entries(e.slots).forEach(([n,r],c)=>{a.push({deck_id:e.deckId,card_id:r,position:n,is_starter:!0,slot_order:c})}),e.subs.forEach((n,r)=>{a.push({deck_id:e.deckId,card_id:n,position:`SUB${r+1}`,is_starter:!1,slot_order:100+r})}),a.length>0){const{error:n}=await _.from("deck_cards").insert(a);if(n){s(n.message,"error");return}}s("Deck enregistré ✅","success"),d("decks")}function Ge(e){const t=fe[e]||fe["4-4-2"],i=["GK1"];for(let s=1;s<=t.DEF;s++)i.push(`DEF${s}`);for(let s=1;s<=t.MIL;s++)i.push(`MIL${s}`);for(let s=1;s<=t.ATT;s++)i.push(`ATT${s}`);return i}const Mt="modulepreload",zt=function(e){return"/manager-wars/"+e},Ne={},Ct=function(t,i,s){let d=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),a=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));d=Promise.allSettled(i.map(n=>{if(n=zt(n),n in Ne)return;Ne[n]=!0;const r=n.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":Mt,r||(p.as="script"),p.crossOrigin="",p.href=n,a&&p.setAttribute("nonce",a),document.head.appendChild(p),r)return new Promise((f,u)=>{p.addEventListener("load",f),p.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})}))}function o(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return d.then(l=>{for(const a of l||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};async function tt(){const{data:e}=await _.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await _.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(s=>s.booster_id===i.id)}))}function jt(e){if(!(e!=null&&e.length))return null;const t=e.reduce((s,d)=>s+Number(d.percentage),0);let i=Math.random()*t;for(const s of e)if(i-=Number(s.percentage),i<=0)return s;return e[e.length-1]}const Bt=Object.freeze(Object.defineProperty({__proto__:null,loadActiveBoosters:tt,rollDropRate:jt},Symbol.toStringTag,{value:"Module"})),it=()=>Object.keys(ge),St=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],he={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Ft(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Dt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Gt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};function Nt(e){var d;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((d=Object.entries(t).sort((o,l)=>l[1]-o[1])[0])==null?void 0:d[0])||"player",s=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+s,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Rt(e,{state:t,navigate:i,toast:s}){var l;const d=((l=t.profile)==null?void 0:l.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await tt()).map(Nt)}catch(a){console.warn("Erreur chargement boosters DB, fallback hardcodé",a)}o.length||(o=St.map(a=>({...a,rates:[],isPub:a.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${d.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(a=>{const n=a.cost===0||d>=a.cost;return`<div class="booster-card ${n?"":"disabled"}" data-booster="${a.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${a.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${a.img}" alt="${a.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${a.name}</div>
            <div class="desc">${a.sub}</div>
            <div class="cost">${a.costLabel}</div>
            ${n?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(a=>{a.addEventListener("click",async()=>{const n=o.find(r=>r.id===a.dataset.booster);if(n){a.style.opacity="0.5",a.style.pointerEvents="none";try{await qt(n,{state:t,toast:s,navigate:i,container:e})}catch(r){s(r.message,"error"),a.style.opacity="",a.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(a=>{a.addEventListener("click",n=>{n.stopPropagation();const r=o.find(c=>c.id===a.dataset.boosterId);Wt(r)})})}async function qt(e,{state:t,toast:i,navigate:s,container:d}){if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await Qt()}catch(p){i(p.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:o}=await _.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),l=new Set((o||[]).filter(p=>p.card_type==="player").map(p=>p.player_id)),a=new Set((o||[]).filter(p=>p.card_type==="formation").map(p=>p.formation));let n=[];const r=e.type||"player";r==="player"?n=await Ht(t.profile,e.cardCount,e.cost):r==="game_changer"?n=await Ut(t.profile,e.cardCount,e.cost):r==="formation"?n=await Vt(t.profile,e.cost):n=await Kt(t.profile,e),n.forEach(p=>{p.card_type==="player"&&p.player?p.isDuplicate=l.has(p.player.id):p.card_type==="formation"&&(p.isDuplicate=a.has(p.formation))});const{data:c}=await _.from("users").select("*").eq("id",t.profile.id).single();c&&(t.profile=c),Yt(n,e,s)}function Ot(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function V(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Pt(e,t){let i;switch(t){case"legende":i=e.filter(s=>s.rarity==="legende"),i.length||(i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte")),i.length||(i=e.filter(s=>V(s)>=6));break;case"special":i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte"),i.length||(i=e.filter(s=>V(s)>=6));break;case"normal_high":i=e.filter(s=>s.rarity==="normal"&&V(s)>=6),i.length||(i=e.filter(s=>V(s)>=6));break;default:i=e.filter(s=>s.rarity==="normal"&&V(s)>=1&&V(s)<=5),i.length||(i=e.filter(s=>s.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Kt(e,t){if(t.cost>0){const{error:d}=await _.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(d)throw d}const{rollDropRate:i}=await Ct(async()=>{const{rollDropRate:d}=await Promise.resolve().then(()=>Bt);return{rollDropRate:d}},void 0),s=[];for(let d=0;d<(t.cardCount||5);d++){const o=i(t.rates);if(o){if(o.card_type==="player"){let l=_.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);o.rarity&&(l=l.eq("rarity",o.rarity));const{data:a}=await l;let n=a||[];if((o.note_min||o.note_max)&&(n=n.filter(p=>{const f=Math.max(Number(p.note_g)||0,Number(p.note_d)||0,Number(p.note_m)||0,Number(p.note_a)||0);return(!o.note_min||f>=o.note_min)&&(!o.note_max||f<=o.note_max)})),n.length||(n=a||[]),!n.length)continue;const r=n[Math.floor(Math.random()*n.length)],{data:c}=await _.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();c&&s.push({...c,player:r})}else if(o.card_type==="game_changer"){const{data:l}=await _.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=l!=null&&l.length?l:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],r=a[Math.floor(Math.random()*a.length)].name,{data:c}=await _.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:r}).select().single();c&&s.push(c)}else if(o.card_type==="formation"){const l=it(),a=l[Math.floor(Math.random()*l.length)],{data:n}=await _.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();n!=null&&n[0]&&s.push(n[0])}}}return s}async function Ht(e,t,i){if(i>0){const{error:r}=await _.from("users").update({credits:e.credits-i}).eq("id",e.id);if(r)throw r}const{data:s}=await _.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(s!=null&&s.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=s.filter(r=>r.job==="GK"),o=s.filter(r=>r.job!=="GK"),l=!e.first_booster_opened&&d.length>0,a=[];for(let r=0;r<t;r++){const c=r===0&&l?d:r===0?o:s,p=Ot(),f=Pt(c,p);f&&a.push(f)}l&&await _.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:n}=await _.from("cards").insert(a.map(r=>({owner_id:e.id,player_id:r.id,card_type:"player"}))).select();return a.map((r,c)=>({...n[c],player:r}))}async function Ut(e,t,i){const{error:s}=await _.from("users").update({credits:e.credits-i}).eq("id",e.id);if(s)throw s;const{data:d}=await _.from("gc_definitions").select("id,name,gc_type").eq("is_active",!0),o=d!=null&&d.length?d:Object.keys(he).map(c=>({name:c,gc_type:"game_changer"})),l=Array.from({length:t},()=>{const c=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:c.name,gc_definition_id:c.id||null}}),{data:a,error:n}=await _.from("cards").insert(l).select();return n&&console.error("[Booster GC] Erreur insert:",n.message,n),(a||[]).map(c=>{const p=d==null?void 0:d.find(f=>f.name===c.gc_type||f.id===c.gc_definition_id);return{...c,_gcDef:p||null}})}async function Vt(e,t){const{error:i}=await _.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const s=it(),d=s[Math.floor(Math.random()*s.length)],{data:o,error:l}=await _.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return l&&console.error("[Booster Formation] Erreur insert:",l.message,l),o||[]}function Yt(e,t,i){var f;if(!e||e.length===0){const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",u.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(u),(f=u.querySelector("#anim-close-err"))==null||f.addEventListener("click",()=>u.remove());return}const s=document.createElement("div");s.id="booster-anim-overlay",s.innerHTML=`
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
  `,document.body.appendChild(s);let d=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(d)return;d=!0;const u=document.getElementById("pack-visual");u.classList.add("shaking"),setTimeout(()=>{u.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",l(0)},600)},500)});let o=0;function l(u){o=u;const x=document.getElementById("reveal-phase");x.style.display="flex",a(u)}function a(u){var h;const x=e[u],y=document.getElementById("card-counter"),b=document.getElementById("single-card-slot"),k=document.getElementById("card-tap-hint");y&&(y.textContent=`Carte ${u+1} / ${e.length}`),k&&(k.textContent=u<e.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const m=Re(x),g=x.card_type==="player"&&((h=x.player)==null?void 0:h.rarity)==="legende";b.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${g?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${m}
        ${x.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,g&&c();const w=document.getElementById("current-card-wrap");let E=!1;w.addEventListener("click",()=>{if(E)return;E=!0;const v=u+1;v<e.length?(w.style.transition="all 0.25s ease",w.style.transform="translateX(-120%) rotate(-15deg)",w.style.opacity="0",setTimeout(()=>a(v),250)):n()})}function n(){p(),document.getElementById("reveal-phase").style.display="none";const u=document.getElementById("recap-phase");u.style.display="flex";const x=document.getElementById("recap-grid");x.innerHTML=e.map((y,b)=>`
      <div class="recap-card" style="--i:${b};animation-delay:${b*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${Re(y)}
        ${y.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let r=null;function c(){const u=document.getElementById("fireworks-canvas");if(!u)return;u.width=window.innerWidth,u.height=window.innerHeight;const x=u.getContext("2d"),y=[];function b(){const m=Math.random()*u.width,g=Math.random()*u.height*.6,w=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],E=w[Math.floor(Math.random()*w.length)];for(let h=0;h<60;h++){const v=Math.PI*2/60*h,$=2+Math.random()*5;y.push({x:m,y:g,vx:Math.cos(v)*$,vy:Math.sin(v)*$,alpha:1,color:E,size:2+Math.random()*3})}}b(),r=setInterval(b,600);function k(){if(document.getElementById("fireworks-canvas")){x.clearRect(0,0,u.width,u.height);for(let m=y.length-1;m>=0;m--){const g=y[m];if(g.x+=g.vx,g.y+=g.vy+.08,g.vy*=.98,g.alpha-=.018,g.alpha<=0){y.splice(m,1);continue}x.globalAlpha=g.alpha,x.fillStyle=g.color,x.beginPath(),x.arc(g.x,g.y,g.size,0,Math.PI*2),x.fill()}x.globalAlpha=1,(r!==null||y.length>0)&&requestAnimationFrame(k)}}k()}function p(){r!==null&&(clearInterval(r),r=null);const u=document.getElementById("fireworks-canvas");u&&u.getContext("2d").clearRect(0,0,u.width,u.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{p(),s.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{p(),s.remove(),i("boosters")})}function Re(e){var t,i,s,d;if(e.card_type==="player"&&e.player){const o=e.player,l=o.job||"ATT",a=Dt[l]||"#1A6B3C",n=Gt[o.rarity]||"#ccc",r=l==="GK"?o.note_g:l==="DEF"?o.note_d:l==="MIL"?o.note_m:o.note_a,c=Ft(o),p={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[o.country_code]||o.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${n};overflow:hidden;display:flex;flex-direction:column">
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
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${r||0}</text>
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
    </div>`}if(e.card_type==="game_changer"){const o=e._gcDef,l={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},a={purple:"#9b59b6",light_blue:"#00bcd4"},n=l[o==null?void 0:o.color]||l.purple,r=a[o==null?void 0:o.color]||a.purple,c=(o==null?void 0:o.gc_type)==="ultra_game_changer",p=((s=he[e.gc_type])==null?void 0:s.icon)||"⚡";return`<div style="width:140px;height:200px;background:${n};border-radius:12px;border:3px solid ${r};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 20px ${r}66">
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
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Wt(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};s.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(l=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${o[l.card_type]||l.card_type}</span>
            ${l.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${d[l.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${l.rarity}</span>`:""}
            ${l.note_min||l.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${l.note_min||""}–${l.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(l.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(s),s.addEventListener("click",l=>{l.target===s&&s.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>s.remove());return}Jt()}function Jt(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
      </button>`,document.body.appendChild(t);const s=setInterval(()=>{i--;const d=document.getElementById("ad-cd"),o=document.getElementById("ad-skip");d&&(d.textContent=i),o&&(o.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(s),o&&(o.disabled=!1,o.style.cssText=o.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),o==null||o.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Zt(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(Ie());window.propeller.push({zone_id:ot,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function ei(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(Ie());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:ot,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const Q={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Z={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function nt(e,t,i,s,d){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${s}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",d)}function R(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function be(e){var i,s;const t=e.player;return{cardId:e.id,id:t.id,firstname:t.firstname,name:t.surname_encoded,country_code:t.country_code,club_id:t.club_id,job:t.job,job2:t.job2,note_g:Number(t.note_g)||0,note_d:Number(t.note_d)||0,note_m:Number(t.note_m)||0,note_a:Number(t.note_a)||0,rarity:t.rarity,skin:t.skin,hair:t.hair,hair_length:t.hair_length,clubName:((i=t.clubs)==null?void 0:i.encoded_name)||null,clubLogo:((s=t.clubs)==null?void 0:s.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ae(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ti(){const e=Math.random()*100;return e<.1?4:e<5?3:e<20?2:1}function rt(e,t){const i=Q[t]||Q["4-4-2"],s={GK:[],DEF:[],MIL:[],ATT:[]},d=[...e];for(const o of["GK","DEF","MIL","ATT"]){const l=[];for(let n=0;n<i[o];n++){let r=d.findIndex(c=>c.job===o);if(r===-1&&(r=d.findIndex(c=>c.job2===o)),r===-1&&(r=0),d[r]){const c={...d[r],_line:o};l.push(c),d.splice(r,1)}}const a=Ae(l.length);l.forEach((n,r)=>{n._col=a[r]}),s[o]=l}return s}async function ii(e,t){var l,a;const{data:i}=await _.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return oi(e);const s=Q[e]||Q["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},o=[...i];for(const n of["GK","DEF","MIL","ATT"]){const r=o.filter(x=>x.job===n),c=o.filter(x=>x.job!==n),p=[...r,...c],f=[];for(let x=0;x<s[n];x++){const y=p[x]||o[x];y&&f.push({cardId:"ai-"+y.id+"-"+x,id:y.id,firstname:y.firstname,name:y.surname_encoded,country_code:y.country_code,club_id:y.club_id,job:y.job,job2:y.job2,note_g:Number(y.note_g)||0,note_d:Number(y.note_d)||0,note_m:Number(y.note_m)||0,note_a:Number(y.note_a)||0,rarity:y.rarity,skin:y.skin,hair:y.hair,hair_length:y.hair_length,clubName:((l=y.clubs)==null?void 0:l.encoded_name)||null,clubLogo:((a=y.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:n})}const u=Ae(f.length);f.forEach((x,y)=>{x._col=u[y]}),d[n]=f}return d}function oi(e){const t=Q[e]||Q["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},s=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const o of["GK","DEF","MIL","ATT"]){const l=[];for(let n=0;n<t[o];n++){const r=3+Math.floor(Math.random()*5);l.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:s[d%s.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?r:2,note_d:o==="DEF"?r:2,note_m:o==="MIL"?r:2,note_a:o==="ATT"?r:2,rarity:"normal",boost:0,used:!1,_line:o}),d++}const a=Ae(l.length);l.forEach((n,r)=>{n._col=a[r]}),i[o]=l}return i}async function ni(e,t){var h;const{state:i,navigate:s,toast:d}=t,o=i.params||{};e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const l=o.matchMode||"vs_ai_easy",a=l.replace("vs_ai_",""),n=l;if(!o.deckId)return ai(e,t,l);const r=o.deckId,[{data:c},{data:p}]=await Promise.all([_.from("decks").select("formation,name").eq("id",r).single(),_.from("deck_cards").select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`).eq("deck_id",r).order("slot_order")]),f=(p||[]).filter(v=>{var $;return v.is_starter&&(($=v.card)==null?void 0:$.player)}).map(v=>be(v.card)),u=(p||[]).filter(v=>{var $;return!v.is_starter&&(($=v.card)==null?void 0:$.player)}).map(v=>be(v.card));if(f.length<11){nt(e,"⚠️",`Deck incomplet (${f.length}/11).`,"Compléter",()=>s("decks"));return}const x=(p||[]).find(v=>{var $;return(($=v.card)==null?void 0:$.card_type)==="formation"}),y=(c==null?void 0:c.formation)||((h=x==null?void 0:x.card)==null?void 0:h.formation)||"4-4-2",{data:b}=await _.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",i.profile.id).eq("card_type","game_changer"),{data:k}=await _.from("gc_definitions").select("*").eq("is_active",!0),m=(b||[]).map(v=>({...v,_gcDef:(k==null?void 0:k.find($=>$.name===v.gc_type||$.id===v.gc_definition_id))||null})),g=rt(f,y),w=await ii(y),E=async v=>{const{data:$}=await _.from("matches").insert({home_id:i.profile.id,away_id:null,mode:n,home_deck_id:r,status:"in_progress"}).select().single(),T={gcDefs:k||[],matchId:$==null?void 0:$.id,mode:n,difficulty:a,formation:y,homeTeam:g,aiTeam:w,homeSubs:u,subsUsed:0,maxSubs:Math.min(u.length,3),homeScore:0,aiScore:0,gcCards:v,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};si(e,T,t)};if(!m.length){E([]);return}ri(e,m,E)}function ri(e,t,i){let d=[];function o(a,n){const r=a._gcDef,c={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},p={purple:"#9b59b6",light_blue:"#00bcd4"},f=c[r==null?void 0:r.color]||c.purple,u=p[r==null?void 0:r.color]||p.purple;return`<div class="gc-select-card" data-id="${a.id}"
      style="width:100px;border-radius:10px;border:3px solid ${n?"#FFD700":u};background:${f};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;
        box-shadow:${n?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${n?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <!-- Nom -->
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((r==null?void 0:r.name)||a.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(r==null?void 0:r.name)||a.gc_type}</span>
      </div>
      <!-- Image -->
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${r!=null&&r.image_url?`<img src="/manager-wars/icons/${r.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <!-- Effet -->
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((r==null?void 0:r.effect)||"").slice(0,50)}</span>
      </div>
      ${n?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000">✓</div>':""}
    </div>`}function l(){var a,n;e.innerHTML=`
    <div style="display:flex;flex-direction:column;height:100%;min-height:100%;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:16px;gap:14px">
      <!-- Header -->
      <div style="text-align:center;padding-top:8px">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:22px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">Sélectionne jusqu'à <b style="color:#FFD700">3</b> cartes · ${d.length}/3 choisie(s)</div>
      </div>

      <!-- Grille des cartes GC -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;padding:4px 0">
        ${t.map(r=>{const c=d.find(p=>p.id===r.id);return`<div style="position:relative">${o(r,!!c)}</div>`}).join("")}
      </div>

      <!-- Boutons -->
      <div style="display:flex;gap:10px;padding-bottom:8px">
        <button id="gc-sel-skip" style="flex:0 0 auto;padding:13px 18px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">
          Sans GC →
        </button>
        <button id="gc-sel-confirm" style="flex:1;padding:13px;border-radius:12px;border:none;background:${d.length?"#7a28b8":"rgba(255,255,255,0.1)"};color:${d.length?"#fff":"rgba(255,255,255,0.4)"};font-size:15px;font-weight:900;cursor:${d.length?"pointer":"default"}">
          ${d.length?`⚡ Partir avec ${d.length} GC →`:"Sélectionne tes cartes"}
        </button>
      </div>
    </div>`,e.querySelectorAll(".gc-select-card").forEach(r=>{r.addEventListener("click",()=>{const c=r.dataset.id,p=d.findIndex(f=>f.id===c);if(p>-1)d.splice(p,1);else{if(d.length>=3)return;const f=t.find(u=>u.id===c);f&&d.push(f)}l()})}),(a=e.querySelector("#gc-sel-confirm"))==null||a.addEventListener("click",()=>{d.length&&i(d)}),(n=e.querySelector("#gc-sel-skip"))==null||n.addEventListener("click",()=>{i([])})}l()}async function ai(e,t,i){const{state:s,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("decks").select("id,name,is_active,formation").eq("owner_id",s.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){nt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const l=o.map(c=>c.id),{data:a}=await _.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",l).order("slot_order");let n=0;function r(){var m,g,w,E,h;const c=o[n],p=(a||[]).filter(v=>v.deck_id===c.id),f=p.filter(v=>{var $;return v.is_starter&&(($=v.card)==null?void 0:$.player)}).map(v=>be(v.card)),u=p.find(v=>{var $;return(($=v.card)==null?void 0:$.card_type)==="formation"}),x=c.formation||((m=u==null?void 0:u.card)==null?void 0:m.formation)||"4-4-2",y=f.length>=11?rt(f,x):null,b=f.length>=11;e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:calc(100dvh - 130px);overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${n===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${n===0?"0.1":"0.3"});color:${n===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${n===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${c.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${x} · ${f.length}/11 ${c.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${n===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${n===o.length-1?"0.1":"0.3"});color:${n===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${n===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : contraindre la largeur du SVG pour contrôler hauteur+largeur -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${y?`<div style="width:min(98vw, calc(100dvh - 400px));overflow:hidden;flex-shrink:0">${dt(y,x,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${o.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${o.map((v,$)=>`<div style="width:7px;height:7px;border-radius:50%;background:${$===n?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,(g=document.getElementById("prev-deck"))==null||g.addEventListener("click",()=>{n>0&&(n--,r())}),(w=document.getElementById("next-deck"))==null||w.addEventListener("click",()=>{n<o.length-1&&(n++,r())}),(E=document.getElementById("validate-deck"))==null||E.addEventListener("click",()=>{b&&t.navigate("match",{matchMode:i,deckId:c.id})}),(h=document.getElementById("cancel-deck-select"))==null||h.addEventListener("click",()=>d("home"));const k=document.getElementById("deck-swipe-zone");if(k){let v=0,$=0;k.addEventListener("touchstart",T=>{v=T.touches[0].clientX,$=T.touches[0].clientY},{passive:!0}),k.addEventListener("touchend",T=>{const I=T.changedTouches[0].clientX-v,z=T.changedTouches[0].clientY-$;Math.abs(I)<40||Math.abs(I)<Math.abs(z)||(I<0&&n<o.length-1?(n++,r()):I>0&&n>0&&(n--,r()))},{passive:!0})}}r()}function si(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;min-height:100%;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Te(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>di(e,t,i),5e3)}function di(e,t,i){const s=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[];function o(p){return p.reduce((f,u)=>f+F(u,"MIL"),0)}function l(p){let f=0;for(let u=0;u<p.length-1;u++){const x=J(p[u],p[u+1]);x==="#00ff88"?f+=2:x==="#FFD700"&&(f+=1)}return f}const a=o(s)+l(s),n=o(d)+l(d),r=a>=n;function c(p,f,u){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${f}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((x,y)=>{const b=R(x),k=y<p.length-1?J(x,p[y+1]):null,m=k&&k!=="#ff3333"&&k!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${u};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${b?`<img src="${b}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${F(x,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${x.name}</div>
          </div>
          ${k?`<div style="width:14px;height:4px;border-radius:2px;background:${k};flex-shrink:0;opacity:${m?.9:.3}"></div>`:""}
          `}).join("")}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${o(p)} + ${l(p)} liens = <b style="color:#fff">${o(p)+l(p)}</b>
      </div>
    </div>`}e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;min-height:100%;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${c(s,t.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${a}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${n}</div>
    </div>

    ${c(d,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const p=document.getElementById("score-home"),f=document.getElementById("score-ai"),u=document.getElementById("midfield-result");if(p&&f&&(r?(p.style.fontSize="80px",p.style.color="#FFD700",f.style.opacity="0.25"):(f.style.fontSize="80px",f.style.color="#ff6b6b",p.style.opacity="0.25")),u){const x=ti();u.style.opacity="1",r&&t.clubName,u.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${r?`${t.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${r?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${x}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,r&&(t.boostCard={value:x})}t.attacker=r?"home":"ai",t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:s.map(x=>({name:x.name,note:F(x,"MIL"),portrait:R(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),aiPlayers:d.map(x=>({name:x.name,note:F(x,"MIL"),portrait:R(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),homeTotal:a,aiTotal:n,text:`Duel milieu : ${t.clubName} ${a} – ${n} IA → ${r?t.clubName+" attaque":"IA attaque"}`}),setTimeout(()=>{var y,b;const x=(y=t.boostCard)==null?void 0:y.value;e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;min-height:100%;gap:20px;padding:24px;background:#0a3d1e;text-align:center">
        <div style="font-size:64px">${r?"🏆":"😤"}</div>
        <div style="font-size:22px;font-weight:900;color:#fff;line-height:1.3">
          ${r?`⚽ ${t.clubName}<br>gagne le milieu de terrain !`:"😔 L'IA gagne l'engagement !"}
        </div>
        ${x&&r?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:16px;padding:16px 32px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">Carte Boost obtenue</div>
          <div style="font-size:48px;font-weight:900;color:#87CEEB">+${x}</div>
          <div style="font-size:11px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
        <button id="start-match-btn" style="margin-top:8px;padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:17px;font-weight:900;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,0.3)">
          ▶ Commencer le match
        </button>
      </div>`,(b=document.getElementById("start-match-btn"))==null||b.addEventListener("click",()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",D(e,t,i),t.attacker==="ai"&&setTimeout(()=>we(e,t,i),800)})},100)},5e3)}function at(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Y(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const s=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:R(e),d=at(e),o=e._line||e.job||"MIL",l=Z[o]||"#555",a={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",n=e.note!==void 0?Number(e.note)||0:(Number(F(e,o))||0)+(e.boost||0),r=st(e==null?void 0:e.country_code),c=Math.round(i*.19),p=Math.round(i*.25),f=i-Math.round(i*.19)-Math.round(i*.25),u=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${a};background:${l};position:relative;overflow:hidden;flex-shrink:0;opacity:${u}">
    <div style="position:absolute;top:0;left:0;right:0;height:${c}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${s&&!(e!=null&&e.used)?`<img src="${s}" style="position:absolute;top:${c}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${ve(e==null?void 0:e.country_code)?`<img src="${ve(e.country_code)}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">${r}</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":n}</span>
      ${d?`<img src="${d}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function ae(e,t,i){if(!(e!=null&&e.length))return"";const s=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return s.forEach((o,l)=>{if(d+=Y(o,40,52),l<s.length-1){const a=J(o,s[l+1]);d+=`<div style="width:7px;height:3px;background:${a==="#ff3333"||a==="#cc2222"?"rgba(255,255,255,0.12)":a};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function ve(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function st(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Te(e,t,i,s,d=310,o=310){const l=ge[t]||{},a=He(t)||ke[t]||[],n={},r=["ATT","MIL","DEF","GK"];for(const m of r)(e[m]||[]).forEach((w,E)=>{n[`${m}${E+1}`]=w});function c(m){const g=l[m];return g?{x:g.x*d,y:g.y*o}:null}let p="";for(const[m,g]of a){const w=c(m),E=c(g);if(!w||!E)continue;const h=n[m],v=n[g],$=J(h,v);$==="#00ff88"||$==="#FFD700"?(p+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${$}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,p+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${$}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):p+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${$}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const f=48,u=64,x=13,y=16,b={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[m,g]of Object.entries(n)){const w=c(m);if(!w||!g)continue;const E=m.replace(/[0-9]/g,""),h=Z[E]||"#555",v=i==="attack"&&["MIL","ATT"].includes(E)&&!g.used||i==="defense"&&["GK","DEF","MIL"].includes(E)&&!g.used,$=s.includes(g.cardId);let T;i==="attack"?T=E==="MIL"?Number(g.note_m)||0:Number(g.note_a)||0:i==="defense"?T=E==="GK"?Number(g.note_g)||0:E==="MIL"?Number(g.note_m)||0:Number(g.note_d)||0:T=Number(E==="GK"?g.note_g:E==="DEF"?g.note_d:E==="MIL"?g.note_m:g.note_a)||0,T=T+(g.boost||0);const I=(w.x-f/2).toFixed(1),z=(w.y-u/2).toFixed(1),C=g.used?.25:1,N=b[g==null?void 0:g.rarity]||b.normal,q=$?"#ff3030":N,A=$?3:(g==null?void 0:g.rarity)==="légende"||(g==null?void 0:g.rarity)==="pépite"?2.5:2,L=u-x-y;p+=`<defs><clipPath id="cp-${m}"><rect x="${I}" y="${(w.y-u/2+x).toFixed(1)}" width="${f}" height="${L}"/></clipPath></defs>`,p+=`<rect x="${I}" y="${z}" width="${f}" height="${u}" rx="5" fill="${h}" opacity="${C}"/>`;const M=R(g);M&&!g.used&&(p+=`<image href="${M}" x="${I}" y="${(w.y-u/2+x).toFixed(1)}" width="${f}" height="${L}" clip-path="url(#cp-${m})" preserveAspectRatio="xMidYMin slice"/>`),p+=`<rect x="${I}" y="${z}" width="${f}" height="${x}" rx="4" fill="rgba(255,255,255,0.92)"/>`,p+=`<text x="${w.x.toFixed(1)}" y="${(w.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(g.name||"").slice(0,9)}</text>`;const B=(w.y+u/2-y).toFixed(1);if(p+=`<rect x="${I}" y="${B}" width="${f}" height="${y}" fill="rgba(255,255,255,0.92)"/>`,g.used)p+=`<text x="${w.x.toFixed(1)}" y="${(w.y+u/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const S=ve(g.country_code);S?p+=`<image href="${S}" x="${(w.x-20).toFixed(1)}" y="${(w.y+u/2-y+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:p+=`<text x="${(w.x-13).toFixed(1)}" y="${(w.y+u/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${st(g.country_code)}</text>`,p+=`<text x="${w.x.toFixed(1)}" y="${(w.y+u/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${T}</text>`;const G=at(g);G?p+=`<image href="${G}" x="${(w.x+f/2-14).toFixed(1)}" y="${(w.y+u/2-y+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:g.clubName&&(p+=`<text x="${(w.x+14).toFixed(1)}" y="${(w.y+u/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(g.clubName||"").slice(0,3).toUpperCase()}</text>`),g.boost&&(p+=`<rect x="${(w.x+f/2-12).toFixed(1)}" y="${(w.y-u/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,p+=`<text x="${(w.x+f/2-5).toFixed(1)}" y="${(w.y-u/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${g.boost}</text>`)}p+=`<rect x="${I}" y="${z}" width="${f}" height="${u}" rx="5" fill="${$?"rgba(255,255,255,0.12)":"none"}" stroke="${q}" stroke-width="${A}" opacity="${C}"/>`,v&&(p+=`<rect x="${I}" y="${z}" width="${f}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${$?"selected":""}" data-card-id="${g.cardId}" data-role="${E}" style="cursor:pointer"/>`)}const k=38;return`<svg viewBox="${-k} ${-k} ${d+k*2} ${o+k*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${p}
  </svg>`}function dt(e,t,i,s,d=300,o=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Te(e,t,i,s,d,o)}
  </div>`}function se(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}function li(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function D(e,t,i){var x,y,b,k,m,g,w,E;const s=t.selected.map(h=>h.cardId),d=t.usedSubIds||[],o=t.homeSubs.filter(h=>!d.includes(h.cardId));Object.values(t.homeTeam).flat().filter(h=>h.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const a=t.phase==="ai-attack"||t.phase==="ai-defense",n=t.phase==="attack",r=t.phase==="defense",c=t.phase==="finished",p=t.gcCards.filter(h=>!t.usedGc.includes(h.id)),f=t.boostCard&&!t.boostUsed;if(e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const v=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${ae((v.players||[]).map($=>({...$,used:!1})),"#ff6b6b",v.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const v=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${ae((v.players||[]).map($=>({...$,used:!1})),"#00ff88",v.total)}
          </div>`}const h=t.log[t.log.length-1];return h?'<div style="padding:2px 4px">'+li(h)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    <!-- ZONE CENTRALE : REMPLAÇANTS + TERRAIN -->
    <div style="display:flex;flex:1;min-height:0;overflow:hidden">

      <!-- Colonne remplaçants (mini cartes) -->
      <div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:50px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(h=>`
              <div class="sub-btn-col" data-sub-id="${h.cardId}" title="${h.firstname} ${h.name}" style="cursor:pointer;flex-shrink:0">
                ${Y(h,44,58)}
              </div>`).join("")}
      </div>

      <!-- Terrain -->
      <div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0">
          ${dt(t.homeTeam,t.formation,t.phase,s,300,300)}
        </div>
      </div>
    </div>

    <!-- ZONE BAS : GC + BOUTON ACTION -->
    <div style="display:flex;align-items:flex-end;padding:6px 8px;background:rgba(0,0,0,0.35);gap:8px;flex-shrink:0;min-height:80px">

      <!-- Grille GC -->
      <div style="flex:1;display:grid;grid-template-columns:repeat(4,1fr);gap:3px;align-content:start">
        ${p.map(h=>{var v;return`
          <div class="gc-mini" data-gc-id="${h.id}" data-gc-type="${h.gc_type}"
            style="background:linear-gradient(135deg,#3d0a7a,#7a28b8);border:1px solid #9b59b6;border-radius:7px;padding:3px 2px;cursor:pointer;text-align:center">
            <div style="font-size:16px">${((v=ie[h.gc_type])==null?void 0:v.icon)||"⚡"}</div>
            <div style="font-size:6px;color:#fff;font-weight:600;line-height:1.2">${h.gc_type.slice(0,8)}</div>
          </div>`}).join("")}
        ${f?`
          <div id="boost-card" style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:7px;padding:3px 2px;cursor:pointer;text-align:center">
            <div style="font-size:16px">⚡</div>
            <div style="font-size:6px;color:#000;font-weight:900">+${t.boostCard.value}</div>
          </div>`:""}
      </div>

      <!-- Bouton action principal (rectangulaire + chrono) -->
      <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:3px">
        ${c?'<button id="btn-results" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">🏁 Résultats</button>':a?'<div style="min-width:130px;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:14px;display:flex;align-items:center;justify-content:center;gap:6px">⏳ Tour IA</div>':n?`<button id="btn-action" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?'disabled style="opacity:0.45;cursor:default"':""}>⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:r?`<button id="btn-action" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?'disabled style="opacity:0.45;cursor:default"':""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:'<div style="min-width:130px;padding:14px;border-radius:14px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>'}
        ${n||r?`<div style="font-size:9px;color:rgba(255,255,255,0.4)">${t.selected.length}/3 sélectionné(s)</div>`:""}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(h=>{var v,$,T;if(h.type==="duel"){const I=h.isGoal,z=h.homeScored?"#FFD700":I?"#ff6b6b":"rgba(255,255,255,0.3)",C=h.homeScored?"⚽ BUT !":I?"⚽ BUT IA !":(v=h.homePlayers)!=null&&v.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${I?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${z};margin-bottom:4px">
                <div style="font-size:9px;color:${z};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${C}</div>
                ${($=h.homePlayers)!=null&&$.length?`<div style="margin-bottom:3px">${ae(h.homePlayers,"rgba(255,255,255,0.7)",h.homeTotal)}</div>`:""}
                ${(T=h.aiPlayers)!=null&&T.length?`<div style="opacity:0.7">${ae(h.aiPlayers,"#ff6b6b",h.aiTotal)}</div>`:""}
              </div>`}return h.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${h.outPlayer?Y({...h.outPlayer,used:!0,_line:h.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${h.inPlayer?Y({...h.inPlayer,_line:h.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:h.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${h.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${h.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`,requestAnimationFrame(()=>{const h=e.querySelector("#match-field"),v=e.querySelector(".terrain-wrapper");if(!h||!v)return;const $=h.clientHeight||h.offsetHeight,T=h.clientWidth||h.offsetWidth,I=Math.min($,T)||280;v.style.width=I+"px",v.style.height=I+"px"}),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let h=!1,v=30;const $=()=>document.getElementById("match-timer"),T=()=>{const I=$();if(!I)return;const z=String(Math.floor(v/60)).padStart(2,"0"),C=String(v%60).padStart(2,"0");I.textContent=` ${z}:${C}`,I.style.color=h?"#ff2222":"#ff9500",I.style.fontWeight="900"};T(),t._timerInt=setInterval(()=>{if(v--,v<0)if(!h)h=!0,v=15,T();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",I.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(I),setTimeout(()=>{I.remove(),W(e,t,i)},2500)}else T()},1e3)}(x=document.getElementById("match-quit"))==null||x.addEventListener("click",()=>{confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,W(e,t,i))}),(y=document.getElementById("view-ai"))==null||y.addEventListener("click",()=>hi(t,i)),(b=document.getElementById("toggle-history"))==null||b.addEventListener("click",()=>{var h;(h=document.getElementById("match-history-panel"))==null||h.classList.add("open")}),(k=document.getElementById("close-history"))==null||k.addEventListener("click",()=>{var h;(h=document.getElementById("match-history-panel"))==null||h.classList.remove("open")}),(m=document.getElementById("btn-action"))==null||m.addEventListener("click",()=>{t.selected.length!==0&&(n?pi(e,t,i):r&&fi(e,t,i))}),(g=document.getElementById("btn-results"))==null||g.addEventListener("click",()=>W(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(h=>{h.addEventListener("click",()=>ci(h,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(h=>{h.addEventListener("click",()=>xi(h.dataset.gcId,h.dataset.gcType,e,t,i))}),(w=document.getElementById("boost-card"))==null||w.addEventListener("click",()=>yi(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(h=>{h.addEventListener("click",()=>qe(e,t,i,h.dataset.subId))}),(E=document.getElementById("sub-btn-main"))==null||E.addEventListener("click",()=>qe(e,t,i))}function ci(e,t,i,s){const d=e.dataset.cardId,o=e.dataset.role,l=t.selected.findIndex(a=>a.cardId===d);if(l!==-1)t.selected.splice(l,1);else{if(t.selected.length>=3){s.toast("Maximum 3 joueurs","error");return}const a=(t.homeTeam[o]||[]).find(n=>n.cardId===d);a&&t.selected.push({...a,_role:o,_line:o})}D(i,t,s)}function Le(e,t,i){e.matchId&&_.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function pi(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Le(t,i,i.state.profile.id);const s=t.selected.map(o=>({...o,_line:o._role})),d=Ve(s,t.modifiers.home);t.pendingAttack={...d,players:[...t.selected],side:"home"},t.selected.forEach(o=>{const l=(t.homeTeam[o._role]||[]).find(a=>a.cardId===o.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${d.total} (base ${d.base}${d.links?` +${d.links} liens`:""}) — ${t.selected.map(o=>o.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",D(e,t,i),setTimeout(()=>ui(e,t,i),1200)}function fi(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Le(t,i,i.state.profile.id);const s=t.selected.map(a=>({...a,_line:a._role})),d=Ye(s,t.modifiers.home);t.selected.forEach(a=>{const n=(t.homeTeam[a._role]||[]).find(r=>r.cardId===a.cardId);n&&(n.used=!0)});const o=We(t.pendingAttack.total,d.total,t.modifiers.home),l={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(a=>({name:a.name,note:a._line==="MIL"?a.note_m:a.note_a,portrait:R(a),job:a.job,country_code:a.country_code,rarity:a.rarity,clubName:a.clubName,clubLogo:a.clubLogo})),homePlayers:t.selected.map(a=>{const n=(t.homeTeam[a._role]||[]).find(r=>r.cardId===a.cardId)||a;return{name:n.name,note:n._line==="GK"?n.note_g:n._line==="MIL"?n.note_m:n.note_d,portrait:R(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(o.shielded)l.text="🛡️ Bouclier ! But annulé.",t.log.push(l);else if(o.goal){t.aiScore++,l.isGoal=!0,l.homeScored=!1,l.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(l),t.selected=[],t.modifiers.home={},t.pendingAttack=null,D(e,t,i),Me(l.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ne(e,t,i,"home-attack")});return}else l.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(l);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ne(e,t,i,"home-attack")}function we(e,t,i){Le(t,i,null);const s=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=Je(s,"attack",t.difficulty);if(!d.length){ct(e,t,i);return}const o=Ve(d,t.modifiers.ai);t.pendingAttack={...o,players:d,side:"ai"},d.forEach(r=>{r.used=!0}),t.log.push({text:`🤖 IA attaque : ${o.total} (${d.map(r=>r.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const l=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(r=>!r.used),n=(t.homeSubs||[]).filter(r=>!(t.usedSubIds||[]).includes(r.cardId)).length>0&&t.subsUsed<t.maxSubs;if(l.length===0&&!n){t.aiScore++;const r={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(c=>({name:c.name,note:c._line==="MIL"?c.note_m:c.note_a,portrait:R(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),aiTotal:o.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(r),t.pendingAttack=null,D(e,t,i),Me(r.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ne(e,t,i,"home-attack")});return}t.phase="defense",D(e,t,i)}function ui(e,t,i){const s=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=Je(s,"defense",t.difficulty),o=d.length>0?Ye(d,t.modifiers.ai).total:0;d.forEach(n=>{n.used=!0});const l=We(t.pendingAttack.total,o,t.modifiers.ai),a={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(n=>({name:n.name,note:n._line==="MIL"?n.note_m:n.note_a,portrait:R(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),aiPlayers:d.map(n=>({name:n.name,note:n._line==="GK"?n.note_g:n._line==="MIL"?n.note_m:n.note_d,portrait:R(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:o,isGoal:!1,homeScored:!1,text:""};if(l.shielded)a.text="🛡️ Bouclier IA !",t.log.push(a);else if(l.goal){t.homeScore++,a.isGoal=!0,a.homeScored=!0,a.text=`⚽ BUT ! (${t.pendingAttack.total} > ${o})`,t.log.push(a),t.modifiers.ai={},t.pendingAttack=null,D(e,t,i),Me(a.homePlayers,t.homeScore,t.aiScore,!0,()=>{ne(e,t,i,"ai-attack")});return}else a.text=`🧤 IA défend (${o} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.modifiers.ai={},t.pendingAttack=null,ne(e,t,i,"ai-attack")}function ne(e,t,i,s){if(t.round++,lt(t)){W(e,t,i);return}if(s==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(o=>!o.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){W(e,t,i);return}t.phase="ai-attack",D(e,t,i),setTimeout(()=>we(e,t,i),800);return}t.phase="attack",D(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(o=>!o.used).length){ct(e,t,i);return}t.phase="ai-attack",D(e,t,i),setTimeout(()=>we(e,t,i),800)}}function lt(e){const t=["MIL","ATT","GK","DEF"].some(s=>(e.homeTeam[s]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(s=>(e.aiTeam[s]||[]).some(d=>!d.used));return!t&&!i}function ct(e,t,i){lt(t)?W(e,t,i):(t.phase="attack",D(e,t,i))}function gi(e,t,i){const s=document.createElement("div");s.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=R(e),o=R(t),l=Z[e.job]||"#555",a=Z[t.job]||"#555",n=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,r=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;s.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${l};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${d?`<img src="${d}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${n}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${a};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${o?`<img src="${o}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${r}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(s);let c=!1;const p=()=>{c||(c=!0,s.remove(),i())};s.addEventListener("click",p),setTimeout(p,2e3)}function te(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function qe(e,t,i,s=null){if(t.phase!=="attack"){te("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){te(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.values(t.homeTeam).flat().filter(p=>p.used),o=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!d.length){te("Aucun joueur utilisé à remplacer");return}if(!o.length){te("Aucun remplaçant disponible");return}let l=0,a=Math.max(0,o.findIndex(p=>p.cardId===s)),n=!1;const r=document.createElement("div");r.id="sub-overlay",r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function c(){var k,m,g,w,E,h;const p=d[l],f=o[a],u=Math.min(130,Math.round((window.innerWidth-90)/2)),x=Math.round(u*1.35),y=v=>`background:rgba(255,255,255,0.12);border:none;color:${v?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${v?"default":"pointer"};flex-shrink:0`;r.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${y(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${f?Y({...f,used:!1,boost:0},u,x):"<div>—</div>"}</div>
        <button id="in-down" style="${y(a>=o.length-1)}" ${a>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${o.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${y(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${p?Y({...p,used:!1,boost:0},u,x):"<div>—</div>"}</div>
        <button id="out-down" style="${y(l>=d.length-1)}" ${l>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(k=r.querySelector("#sub-close"))==null||k.addEventListener("click",()=>r.remove()),(m=r.querySelector("#out-up"))==null||m.addEventListener("click",()=>{l>0&&(l--,c())}),(g=r.querySelector("#out-down"))==null||g.addEventListener("click",()=>{l<d.length-1&&(l++,c())}),(w=r.querySelector("#in-up"))==null||w.addEventListener("click",()=>{a>0&&(a--,c())}),(E=r.querySelector("#in-down"))==null||E.addEventListener("click",()=>{a<o.length-1&&(a++,c())});const b=(v,$,T,I)=>{const z=r.querySelector("#"+v);if(!z)return;let C=0;z.addEventListener("touchstart",N=>{C=N.touches[0].clientY},{passive:!0}),z.addEventListener("touchend",N=>{const q=N.changedTouches[0].clientY-C;if(Math.abs(q)<30)return;const A=$();q<0&&A<I-1?(T(A+1),c()):q>0&&A>0&&(T(A-1),c())},{passive:!0})};b("in-panel",()=>a,v=>a=v,o.length),b("out-panel",()=>l,v=>l=v,d.length),(h=r.querySelector("#sub-confirm"))==null||h.addEventListener("click",v=>{if(v.preventDefault(),v.stopPropagation(),n)return;n=!0;const $=d[l],T=o[a];if(!$||!T)return;let I=null,z=-1;for(const[N,q]of Object.entries(t.homeTeam)){const A=(q||[]).findIndex(L=>L.cardId===$.cardId);if(A!==-1){I=N,z=A;break}}if(z===-1||!I){te("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),r.remove();return}const C={...T,_line:I,_col:$._col||0,used:!1,boost:0};t.homeTeam[I].splice(z,1,C),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(T.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:$.name,firstname:$.firstname,note:F($,I),portrait:R($),job:$.job,country_code:$.country_code,rarity:$.rarity,clubName:$.clubName,clubLogo:$.clubLogo},inPlayer:{name:T.name,firstname:T.firstname,note:F(T,I),portrait:R(T),job:T.job,country_code:T.country_code,rarity:T.rarity,clubName:T.clubName,clubLogo:T.clubLogo},text:`🔄 ${T.firstname} ${T.name} remplace ${$.firstname} ${$.name}`}),r.remove(),gi($,T,()=>D(e,t,i))})}document.body.appendChild(r),c()}function xi(e,t,i,s,d){var a,n;const o=ie[t]||{icon:"⚡",desc:"Carte spéciale."},l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;align-items:center;justify-content:center;padding:24px",l.innerHTML=`
    <div style="background:linear-gradient(160deg,#2a0a52,#7a28b8);border:2px solid #9b59b6;border-radius:18px;padding:24px;max-width:320px;text-align:center;color:#fff">
      <div style="font-size:52px;margin-bottom:10px">${o.icon}</div>
      <div style="font-size:19px;font-weight:900;margin-bottom:8px">${t}</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.85);line-height:1.5;margin-bottom:20px">${o.desc}</div>
      <div style="display:flex;gap:10px">
        <button id="gc-back" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="gc-use" style="flex:1;padding:12px;border-radius:10px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser</button>
      </div>
    </div>`,document.body.appendChild(l),(a=l.querySelector("#gc-back"))==null||a.addEventListener("click",()=>l.remove()),(n=l.querySelector("#gc-use"))==null||n.addEventListener("click",()=>{l.remove(),mi(e,t,i,s,d)})}function me(e,t,i,s,d,o){const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let a=[];function n(){var r,c;l.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${a.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(p=>{const f=p._line||p.job||"MIL",u={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",x=F(p,f)+(p.boost||0),y=a.find(b=>b.cardId===p.cardId);return`<div class="gc-pick-item" data-cid="${p.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${y?"#FFD700":"rgba(255,255,255,0.25)"};background:${u};overflow:hidden;cursor:pointer;flex-shrink:0;${p.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${p.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${x}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${a.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${a.length}/${t})
      </button>
    </div>`,(r=l.querySelector("#gc-picker-close"))==null||r.addEventListener("click",()=>l.remove()),l.querySelectorAll(".gc-pick-item").forEach(p=>{p.addEventListener("click",()=>{const f=p.dataset.cid,u=e.find(y=>y.cardId===f);if(!u)return;const x=a.findIndex(y=>y.cardId===f);x>-1?a.splice(x,1):a.length<t&&a.push(u),n()})}),(c=l.querySelector("#gc-picker-confirm"))==null||c.addEventListener("click",()=>{l.remove(),o(a)})}n(),document.body.appendChild(l)}const pt={BOOST_STAT({value:e=2,target:t="home",count:i=1,roles:s=null},d,o,l){const a=t==="home"?d.homeTeam:d.aiTeam,n=Object.entries(a).flatMap(([r,c])=>!s||s.includes(r)?(c||[]).filter(p=>!p.used).map(p=>({...p,_line:r})):[]);return n.length?(me(n,i,e>0?`⚡ +${e} à ${i} joueur(s)`:`💀 -${Math.abs(e)} à ${i} joueur(s)`,o,d,r=>{r.forEach(c=>{for(const p of["GK","DEF","MIL","ATT"]){const f=(d.homeTeam[p]||[]).find(u=>u.cardId===c.cardId)||(d.aiTeam[p]||[]).find(u=>u.cardId===c.cardId);if(f){f.boost=(f.boost||0)+e;break}}}),d.log.push({text:`${e>0?"⚡":"💀"} ${Math.abs(e)>0?"+":""}${e} → ${r.map(c=>c.name).join(", ")}`,type:"info"}),D(o,d,l)}),!0):(l.toast("Aucun joueur disponible","error"),!0)},DEBUFF_STAT(e,t,i,s){return pt.BOOST_STAT({...e,value:-Math.abs(e.value||2)},t,i,s)},GRAY_PLAYER({target:e="opponent",count:t=1,roles:i=null},s,d,o){const l=e==="opponent"?s.aiTeam:s.homeTeam,a=Object.entries(l).flatMap(([n,r])=>!i||i.includes(n)?(r||[]).filter(c=>!c.used).map(c=>({...c,_line:n})):[]);return a.length?(me(a,t,`❄️ Griser ${t} joueur(s)`,d,s,n=>{n.forEach(r=>{for(const c of Object.keys(s.aiTeam).concat(Object.keys(s.homeTeam))){const f=((e==="opponent"?s.aiTeam[c]:s.homeTeam[c])||[]).find(u=>u.cardId===r.cardId);if(f){f.used=!0;break}}}),s.log.push({text:`❄️ ${n.map(r=>r.name).join(", ")} grisé(s) !`,type:"info"}),D(d,s,o)}),!0):(o.toast("Aucun joueur à griser","error"),!0)},REVIVE_PLAYER({count:e=1},t,i,s){const d=Object.entries(t.homeTeam).flatMap(([o,l])=>(l||[]).filter(a=>a.used).map(a=>({...a,_line:o})));return d.length?(me(d,e,"💫 Ressusciter",i,t,o=>{o.forEach(l=>{for(const a of["GK","DEF","MIL","ATT"]){const n=(t.homeTeam[a]||[]).find(r=>r.cardId===l.cardId);if(n){n.used=!1;break}}}),t.log.push({text:`💫 ${o.map(l=>l.name).join(", ")} ressuscité(s) !`,type:"info"}),D(i,t,s)}),!0):(s.toast("Aucun joueur à ressusciter","error"),!0)},REMOVE_GOAL(e,t,i,s){return t.aiScore<=0?(s.toast("Aucun but adverse","error"),!1):(t.aiScore--,t.log.push({text:"🚫 But adverse retiré !",type:"info"}),!1)},ADD_GOAL_DRAW(e,t,i,s){return t.modifiers=t.modifiers||{},t.modifiers.home=t.modifiers.home||{},t.modifiers.home.addGoalOnDraw=!0,t.log.push({text:"⚽ +1 but si duel nul activé !",type:"info"}),!1},ADD_SUB({count:e=1},t,i,s){return t.maxSubs+=e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1}};function mi(e,t,i,s,d){if(s.usedGc.includes(e))return;s.usedGc.push(e);const o=(s.gcDefs||[]).find(a=>a.name===t);let l=!1;if(o!=null&&o.effect_type&&o.effect_type!=="CUSTOM"){const a=pt[o.effect_type];a?a(o.effect_params||{},s,i,d)||(l=!0):(d.toast(`Effet "${o.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":s.modifiers.home.doubleAttack=!0,s.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":s.modifiers.home.shield=!0,s.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const a=Object.entries(s.homeTeam).flatMap(([n,r])=>(r||[]).filter(c=>c.used).map(c=>({...c,_line:n})));a.length?(a[0].used=!1,s.log.push({text:`💫 ${a[0].name} ressuscité !`,type:"info"})):s.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":s.modifiers.ai.stolenNote=(s.modifiers.ai.stolenNote||0)+1,s.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const a=[...s.aiTeam.ATT||[],...s.aiTeam.MIL||[]].filter(n=>!n.used);if(a.length){const n=a.sort((r,c)=>F(c,"ATT")-F(r,"ATT"))[0];n.used=!0,s.log.push({text:`❄️ ${n.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":s.maxSubs++,s.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}_.from("cards").delete().eq("id",e).then(()=>{}),l&&D(i,s,d)}function yi(e,t,i){const s=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!s.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${s.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Z[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${F(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const o=d.dataset.cardId;for(const l of["GK","DEF","MIL","ATT"]){const a=(t.homeTeam[l]||[]).find(n=>n.cardId===o);if(a){a.boost=(a.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${a.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),D(e,t,i)})})}function Me(e,t,i,s,d){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const l=Array.from({length:10},(r,c)=>`
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
  <div style="position:absolute;inset:0;pointer-events:none">${l}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${s?"BUT !":"BUT IA !"}
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
    ${e.map(r=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${Z[r.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${r.portrait?`<img src="${r.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(r.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(o);let a=!1;const n=()=>{a||(a=!0,o.remove(),setTimeout(()=>d(),50))};o.addEventListener("click",n),setTimeout(n,3500)}async function W(e,t,i){var c,p;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:s}=i,d=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,l=d?"victoire":o?"nul":"defaite",a=yt(t.mode,l);t.matchId&&await _.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?s.profile.id:null,home_credits_reward:a,played_at:new Date().toISOString()}).eq("id",t.matchId);const n={credits:(s.profile.credits||0)+a,matches_played:(s.profile.matches_played||0)+1};d?n.wins=(s.profile.wins||0)+1:o?n.draws=(s.profile.draws||0)+1:n.losses=(s.profile.losses||0)+1,await _.from("users").update(n).eq("id",s.profile.id),await i.refreshProfile();const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",r.innerHTML=`
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
    </div>`,document.body.appendChild(r),(c=document.getElementById("res-home"))==null||c.addEventListener("click",()=>{r.remove(),i.navigate("home")}),(p=document.getElementById("res-replay"))==null||p.addEventListener("click",()=>{r.remove(),i.navigate("match",{matchMode:t.mode})})}function hi(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Te(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const bi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function vi(e,t){const{state:i,toast:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await ze(e,t)}async function ze(e,t){const{state:i,toast:s}=t,{data:d}=await _.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),o=(d||[]).filter(n=>n.seller_id===i.profile.id),l=(d||[]).filter(n=>n.seller_id!==i.profile.id);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${l.length} carte(s) en vente · Solde : ${(i.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${o.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function a(n){const r=document.getElementById("mkt-content"),c=n==="buy"?l:o;if(c.length===0){r.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${n==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune carte en vente."}
      </div>`;return}r.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${c.map(p=>{var b,k,m;const f=(b=p.card)==null?void 0:b.player;if(!f)return"";const u=f.job==="GK"?f.note_g:f.job==="DEF"?f.note_d:f.job==="MIL"?f.note_m:f.note_a,x=bi[f.rarity],y=(i.profile.credits||0)>=p.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px">
          <div style="width:44px;height:44px;border-radius:8px;background:${_i(f.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${x};flex-shrink:0">${u}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${f.firstname} ${f.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${f.country_code} · ${((k=f.clubs)==null?void 0:k.encoded_name)||"—"} · ${f.rarity} · ${f.job}</div>
            <div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((m=p.seller)==null?void 0:m.pseudo)||"—"}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${p.price.toLocaleString("fr")}</div>
            ${n==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${p.id}" ${y?"":"disabled"} style="margin-top:4px">${y?"Acheter":"Trop cher"}</button>`:`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,r.querySelectorAll("[data-buy]").forEach(p=>{p.addEventListener("click",()=>wi(p.dataset.buy,c,e,t))}),r.querySelectorAll("[data-cancel]").forEach(p=>{p.addEventListener("click",()=>$i(p.dataset.cancel,e,t))})}a("buy"),e.querySelectorAll(".mkt-tab").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(r=>{const c=r===n;r.style.background=c?"var(--green)":"#fff",r.style.color=c?"#fff":"var(--gray-600)",r.style.borderColor=c?"var(--green)":"var(--gray-200)"}),a(n.dataset.tab)})})}async function wi(e,t,i,s){const{state:d,toast:o,refreshProfile:l}=s,a=t.find(n=>n.id===e);if(a){if((d.profile.credits||0)<a.price){o("Crédits insuffisants","error");return}if(confirm(`Acheter ${a.card.player.firstname} ${a.card.player.surname_encoded} pour ${a.price.toLocaleString("fr")} crédits ?`))try{const{error:n}=await _.from("cards").update({owner_id:d.profile.id,is_for_sale:!1,sale_price:null}).eq("id",a.card.id);if(n)throw n;await _.from("market_listings").update({status:"sold",buyer_id:d.profile.id,sold_at:new Date().toISOString()}).eq("id",e),await _.from("users").update({credits:(d.profile.credits||0)-a.price}).eq("id",d.profile.id);const{data:r}=await _.from("users").select("credits").eq("id",a.seller_id).single();r&&await _.from("users").update({credits:(r.credits||0)+a.price}).eq("id",a.seller_id),await _.from("notifications").insert({user_id:a.seller_id,type:"card_sold",message:`Ta carte ${a.card.player.surname_encoded} a été vendue pour ${a.price} crédits !`,data:{card_id:a.card.id,price:a.price}}),await l(),o("Carte achetée ! ✅","success"),ze(i,s)}catch(n){o("Erreur : "+n.message,"error")}}}async function $i(e,t,i){const{toast:s}=i,{data:d}=await _.from("market_listings").select("card_id").eq("id",e).single();await _.from("market_listings").update({status:"cancelled"}).eq("id",e),d&&await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id),s("Annonce retirée","success"),ze(t,i)}function _i(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function ki(e,{state:t,navigate:i,toast:s}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await _.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${d&&d.length>0?d.map((o,l)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${o.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${l+1}</div>
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
  `}async function Ei(e,{state:t,navigate:i,toast:s}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("matches").select("id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at").or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),l={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},a=(o||[]).filter(c=>c.status==="finished"),n=(o||[]).filter(c=>c.status==="in_progress");function r(c){const p=c.home_id===d.id;p?c.home_score:c.away_score,p?c.away_score:c.home_score;const f=c.winner_id===d.id,u=c.home_score===c.away_score&&c.status==="finished",x=c.status!=="finished"?"…":u?"N":f?"V":"D",y=c.status!=="finished"||u?"#888":f?"#1A6B3C":"#c0392b";let b=l[c.mode]||c.mode;c.away_id===null&&!b.startsWith("IA")&&(b="IA");let k="";c.status==="in_progress"&&Date.now()-new Date(c.created_at).getTime()>3600*1e3&&(k=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const m=new Date(c.created_at),g=m.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+m.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),w=c.status==="finished"?`${c.home_score} - ${c.away_score}`:`${c.home_score||0} - ${c.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${b}${k}</div>
        <div style="font-size:11px;color:var(--gray-600)">${g}${c.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${w}</span>
        <span style="background:${y};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${x}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(o||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${n.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${n.map(r).join("")}
        </div>`:""}

      ${a.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${a.map(r).join("")}
        </div>`:""}

      ${(o||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const j={user:null,profile:null,page:"home",params:{}};function de(e,t="info",i=3e3){const s=document.getElementById("toast");s&&(s.textContent=e,s.className=`show ${t}`,clearTimeout(s._t),s._t=setTimeout(()=>{s.className=""},i))}function Ii(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function $e(){document.getElementById("modal-overlay").classList.add("hidden")}async function le(){if(!j.user)return;const{data:e}=await _.from("users").select("*").eq("id",j.user.id).single();e&&(j.profile=e)}const Ce="mw_theme";function ue(){return localStorage.getItem(Ce)||"light"}function Ai(e){var t;localStorage.setItem(Ce,e),_e(e),(t=j.profile)!=null&&t.id&&_.from("users").update({theme:e}).eq("id",j.profile.id).then(()=>{})}function _e(e){document.documentElement.setAttribute("data-theme",e)}function ce(e,t={}){j.page=e,j.params=t,ft()}async function ft(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===j.page)});const t=document.getElementById("nav-credits");t&&j.profile&&(t.textContent=`💰 ${(j.profile.credits||0).toLocaleString("fr")}`);const i={state:j,navigate:ce,toast:de,openModal:Ii,closeModal:$e,refreshProfile:le};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',j.page){case"home":await Se(e,i);break;case"collection":await wt(e,i);break;case"decks":await ye(e,i);break;case"boosters":await Rt(e,i);break;case"match":await ni(e,i);break;case"market":await vi(e,i);break;case"rankings":await ki(e,i);break;case"matches":await Ei(e,i);break;default:await Se(e,i)}}function Ti(){const e=document.getElementById("app"),t=j.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(s=>{s.addEventListener("click",d=>{d.preventDefault(),ce(s.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>ce("home")),document.getElementById("nav-credits").addEventListener("click",()=>ce("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const d=ue()==="dark"?"light":"dark";Ai(d),Oe(d)}),Oe(ue())}function Oe(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Li(){_e(ue()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&$e()}),document.getElementById("modal-close").addEventListener("click",$e);const{data:{session:e}}=await _.auth.getSession();if(!e){Ke(),je(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:de});return}j.user=e.user,await le(),Ke();try{const{data:t}=await _.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(s=>{i[s.formation]=s.links}),ut(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!j.profile){gt(document.getElementById("app"),{state:j,navigate:async()=>{await le(),Pe()},toast:de,refreshProfile:le});return}j.profile.theme&&j.profile.theme!==ue()&&(localStorage.setItem(Ce,j.profile.theme),_e(j.profile.theme)),Pe(),_.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(j.user=null,j.profile=null,document.getElementById("app").innerHTML="",je(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:de}))})}function Pe(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Ti(),ft()}function Ke(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}Li();
