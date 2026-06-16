import{s as k,l as X,F as Te,b as xe,c as Je,d as ht}from"./formation-links-BrrCMBql.js";function De(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(a=>{a.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(d=>d.classList.remove("active")),a.classList.add("active"),document.getElementById("tab-login").style.display=a.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=a.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const a=document.getElementById("login-email").value.trim(),d=document.getElementById("login-password").value,o=document.getElementById("login-error");if(o.textContent="",!a||!d){o.textContent="Remplissez tous les champs.";return}const s=document.getElementById("login-btn");s.textContent="Connexion…",s.disabled=!0;const{error:l}=await k.auth.signInWithPassword({email:a,password:d});if(s.textContent="Se connecter",s.disabled=!1,l){o.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",a=>{a.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const a=document.getElementById("reg-email").value.trim(),d=document.getElementById("reg-password").value,o=document.getElementById("reg-confirm").value,s=document.getElementById("reg-error");if(s.textContent="",!a||!d||!o){s.textContent="Remplissez tous les champs.";return}if(d.length<6){s.textContent="Mot de passe trop court (min. 6 caractères).";return}if(d!==o){s.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:r}=await k.auth.signUp({email:a,password:d});if(l.textContent="Créer mon compte",l.disabled=!1,r){s.textContent=r.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=a})}function bt(e,{state:t,navigate:i,toast:a,refreshProfile:d}){let o="#1A6B3C",s="#D4A017";e.innerHTML=`
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
  `;function l(){var m;const n=document.getElementById("logo-preview"),c=document.getElementById("logo-initials"),p=((m=document.getElementById("setup-club"))==null?void 0:m.value)||"MW",f=p.trim().split(" ").filter(Boolean),u=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():p.slice(0,2).toUpperCase();n&&(n.style.background=s,n.style.borderColor=o),c&&(c.textContent=u,c.style.color=o)}document.getElementById("color1").addEventListener("input",n=>{o=n.target.value,document.getElementById("swatch1").style.background=o,l()}),document.getElementById("color2").addEventListener("input",n=>{s=n.target.value,document.getElementById("swatch2").style.background=s,l()});function r(n){document.querySelectorAll(".setup-step").forEach(c=>c.classList.remove("active")),document.getElementById(`step-${n}`).classList.add("active"),document.getElementById("step-num").textContent=n,document.getElementById("progress-fill").style.width=`${Math.round(n/3*100)}%`,n===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("step1-error");if(c.textContent="",n.length<3){c.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:p}=await k.from("users").select("id").eq("pseudo",n).maybeSingle();if(p){c.textContent="Ce pseudo est déjà pris.";return}r(2)}),document.getElementById("step2-back").addEventListener("click",()=>r(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const n=document.getElementById("setup-club").value.trim(),c=document.getElementById("step2-error");if(c.textContent="",n.length<2){c.textContent="Nom trop court (min. 2 caractères).";return}const{data:p}=await k.from("users").select("id").eq("club_name",n).maybeSingle();if(p){c.textContent="Ce nom de club est déjà pris.";return}r(3)}),document.getElementById("step3-back").addEventListener("click",()=>r(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("setup-club").value.trim(),p=document.getElementById("step3-error"),f=document.getElementById("step3-finish");p.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:u}=await k.from("users").insert({id:t.user.id,pseudo:n,club_name:c,club_color1:o,club_color2:s,credits:1e4});if(u)throw u;await vt(t.user.id),await d(),a(`Bienvenue ${n} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(u){p.textContent=u.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function vt(e){const{data:t}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,a=i.filter(r=>r.job==="GK"),d=i.filter(r=>r.job!=="GK"),o=[];for(let r=0;r<5;r++){let n=[];if(r===0&&a.length>0){const c=a[Math.floor(Math.random()*a.length)];n.push(c);const p=Ge([...d]).slice(0,3);n.push(...p)}else n=Ge([...i]).slice(0,4);n.forEach(c=>{o.push({owner_id:e,player_id:c.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(r=>{o.push({owner_id:e,card_type:"game_changer",gc_type:r})});const l=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];o.push({owner_id:e,card_type:"formation",formation:l[Math.floor(Math.random()*l.length)]}),o.length>0&&await k.from("cards").insert(o),await k.from("users").update({first_booster_opened:!0}).eq("id",e)}function Ge(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}async function Ne(e,{state:t,navigate:i,toast:a}){var s,l;const d=t.profile;if(!d)return;const{data:o}=await k.from("matches").select("id,home_score,away_score,status,mode,winner_id,created_at").or(`home_id.eq.${d.id},away_id.eq.${d.id}`).eq("status","finished").order("created_at",{ascending:!1}).limit(3);e.innerHTML=`
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
          ${o.map(r=>{const n=r.winner_id===d.id,c=r.home_score===r.away_score,p=c?"N":n?"V":"D",f=c?"#888":n?"#1A6B3C":"#c0392b",u={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat"}[r.mode]||r.mode,x=new Date(r.created_at).toLocaleDateString("fr",{month:"short",day:"numeric"});return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
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
  `,e.querySelectorAll("[data-nav]").forEach(r=>{r.addEventListener("click",n=>{n.preventDefault(),i(r.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>i("rankings")),(l=document.getElementById("nav-matches"))==null||l.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(r=>{r.addEventListener("click",()=>{if(r.classList.add("tapped"),setTimeout(()=>r.classList.remove("tapped"),200),r.dataset.action==="match-ai"){wt(i);return}a("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await k.auth.signOut(),window.location.reload()})}function wt(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const a=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",a),i.addEventListener("click",d=>{d.target===i&&a()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{a(),e("match",{matchMode:d.dataset.mode})})})}const ne={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function F(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}function Xe(e){let t=0;for(let i=0;i<e.length-1;i++){const a=e[i],d=e[i+1];if(!a||!d)continue;const o=X(a,d);o==="#00ff88"?t+=2:o==="#FFD700"&&(t+=1)}return t}function Ze(e,t={}){const i=e.reduce((o,s)=>{const l=s._line||s.job;return o+(Number(l==="MIL"?s.note_m:s.note_a)||0)+(Number(s.boost)||0)},0),a=Xe(e);let d=i+a;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:a,total:Math.max(0,d)}}function Qe(e,t={}){const i=e.reduce((o,s)=>{const l=s._line||s.job;let r=0;return l==="GK"?r=Number(s.note_g)||0:l==="MIL"?r=Number(s.note_m)||0:r=Number(s.note_d)||0,o+r+(Number(s.boost)||0)},0),a=Xe(e);let d=i+a;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:a,total:Math.max(0,d)}}function et(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function tt(e,t,i="easy"){const a=e.filter(s=>!s.used);if(!a.length)return[];const d=[...a].sort((s,l)=>{const r=t==="attack"?F(s,"ATT"):s._line==="GK"?F(s,"GK"):F(s,"DEF");return(t==="attack"?F(l,"ATT"):l._line==="GK"?F(l,"GK"):F(l,"DEF"))-r});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(o,d.length,3))}function $t(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const it={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ue={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},se=["GK","DEF","MIL","ATT"],_t=["Tous","GK","DEF","MIL","ATT"],kt={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},Le={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ot(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function re(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function be(e,t=""){var p,f;const i=e.player;if(!i)return"";const a=i.job||"ATT",d=ue[a],o=it[i.rarity]||"#ccc",s=re(i,a),l=i.job2?re(i,i.job2):null,r=i.job2?ue[i.job2]:null,n=ot(i),c=Le[i.country_code]||i.country_code||"";return`
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
        ${n?`<img src="${n}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
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
  </div>`}function Re(e){const t=e.job||"ATT",i=re(e,t),a=Le[e.country_code]||e.country_code||"";return`
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
  </div>`}async function Et(e,t){const{state:i,navigate:a,toast:d,openModal:o,closeModal:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await k.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:r}=await k.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),n=(l||[]).filter(A=>A.card_type==="player"&&A.player),c=(l||[]).filter(A=>A.card_type==="game_changer"),p=(l||[]).filter(A=>A.card_type==="formation"),f=Object.keys(Te),u=Object.keys(ne),m={};n.forEach(A=>{const z=A.player.id;m[z]=(m[z]||0)+1}),new Set(Object.keys(m).map(A=>String(A)));const x=new Set(p.map(A=>A.formation)),b=new Set(c.map(A=>A.gc_type));let $="player",y="Tous",g="",v=!1;function L(){return[...n].sort((A,z)=>{const B=se.indexOf(A.player.job),T=se.indexOf(z.player.job);return B!==T?B-T:(A.player.surname_encoded||"").localeCompare(z.player.surname_encoded||"")})}function h(){return[...r||[]].sort((A,z)=>{const B=se.indexOf(A.job),T=se.indexOf(z.job);return B!==T?B-T:(A.surname_encoded||"").localeCompare(z.surname_encoded||"")})}function w(){return L().filter(A=>{const z=A.player,B=y==="Tous"||z.job===y,T=!g||`${z.firstname} ${z.surname_encoded}`.toLowerCase().includes(g);return B&&T})}function _(){return h().filter(A=>{const z=y==="Tous"||A.job===y,B=!g||`${A.firstname} ${A.surname_encoded}`.toLowerCase().includes(g);return z&&B})}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Ma collection</h2>
      <p>${n.length} carte(s) joueur · ${c.length} Game Changer · ${p.length} Formation</p>
    </div>

    <!-- Onglets -->
    <div style="display:flex;border-bottom:1px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${$==="player"?"var(--green)":"transparent"};
        color:${$==="player"?"var(--green)":"var(--gray-600)"}">Joueurs</button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${$==="formation"?"var(--green)":"transparent"};
        color:${$==="formation"?"var(--green)":"var(--gray-600)"}">Formations</button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:12px 4px;border:none;background:none;cursor:pointer;
        font-size:13px;font-weight:700;border-bottom:3px solid ${$==="gc"?"var(--green)":"transparent"};
        color:${$==="gc"?"var(--green)":"var(--gray-600)"}">Game Changer</button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grille cartes -->
    <div class="page-body">
      <div id="col-grid" style="width:100%;min-height:100px;user-select:none"></div>
    </div>
  </div>`;function I(){const A=document.getElementById("col-filters");A&&($==="player"?(A.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${g}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${_t.map(z=>`
            <button class="filter-btn" data-job="${z}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${z===y?"var(--green)":"var(--gray-200)"};
                background:${z===y?"var(--green)":"#fff"};
                color:${z===y?"#fff":"var(--gray-600)"}">
              ${z}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${v?"var(--yellow)":"var(--gray-200)"};
              background:${v?"var(--yellow)":"#fff"};
              color:${v?"#fff":"var(--gray-600)"}">
            ${v?"✓ Tout afficher":"Voir tout"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",z=>{g=z.target.value.toLowerCase(),E()}),e.querySelectorAll(".filter-btn").forEach(z=>{z.addEventListener("click",()=>{y=z.dataset.job,I(),E()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{v=!v,I(),E()})):(A.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${v?"var(--yellow)":"var(--gray-200)"};
              background:${v?"var(--yellow)":"#fff"};
              color:${v?"#fff":"var(--gray-600)"}">
            ${v?"✓ Tout afficher":"Voir tout"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{v=!v,I(),E()})))}function E(){const A=document.getElementById("col-grid");A&&($==="player"?G(A):$==="formation"?q(A):O(A))}function C(A,z,B,T,M){M=M||"#7a28b8";const N=document.getElementById("col-grid"),P=document.getElementById("col-big");if(!N||!P)return;var K=0;function H(){P.innerHTML=z(A[K]);var U=P.querySelector("[data-card-id],[data-form-id],[data-gc-id]");U&&U.addEventListener("click",function(){T(A[K])}),N.innerHTML=A.map(function(te,he){return'<div class="col-mini-item" data-idx="'+he+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:2.5px solid '+(he===K?M:"transparent")+';transition:border-color .15s;overflow:hidden">'+B(te,he===K)+"</div>"}).join(""),N.querySelectorAll(".col-mini-item").forEach(function(te){te.addEventListener("click",function(){K=Number(te.dataset.idx),H(),te.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}H()}function j(A){if(!A||A._fake){var z=A?A.player:null;return z?Re(z):""}var B=.54;return'<div style="width:'+Math.round(140*B)+"px;height:"+Math.round(310*B)+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+B+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+be(A,"")+"</div></div>"}function G(A){if(v){const z=_();if(!z.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const B=z.map(T=>n.find(M=>M.player.id===T.id)||{_fake:!0,player:T,id:"fake-"+T.id});C(B,T=>T._fake?Re(T.player):be(T,""),T=>T._fake?j({player:T.player,id:"x",_fake:!0}):j(T),T=>{T._fake||qe(T,n,m,t)},"#1A6B3C")}else{const z=w();if(!z.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const B={},T=[];z.forEach(M=>{B[M.player.id]||(B[M.player.id]=!0,T.push(M))}),C(T,M=>{const N=m[M.player.id]||1,P=N>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${N}</div>`:"",H=n.filter(U=>U.player.id===M.player.id&&U.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return be(M,P+H)},M=>j(M),M=>qe(M,n,m,t),"#1A6B3C")}}function q(A){const z=v?f:[...x];if(!z.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const B=z.map(T=>({formation:T,card:p.find(M=>M.formation===T)||null,owned:x.has(T)}));C(B,({formation:T,card:M,owned:N})=>{const P=N?p.filter(H=>H.formation===T).length:0,K=P>1?`<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${P}</div>`:"";return N&&M?`<div data-form-id="${M.id}" style="position:relative;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border:3px solid #2a8f52;border-radius:16px;padding:28px 24px;color:#fff;text-align:center;cursor:pointer;min-width:200px">${K}<div style="font-size:52px;margin-bottom:8px">🏟️</div><div style="font-size:10px;background:rgba(255,255,255,0.2);padding:3px 12px;border-radius:10px;display:inline-block;margin-bottom:8px">FORMATION</div><div style="font-weight:900;font-size:28px">${T}</div></div>`:`<div style="background:#f0f0f0;border:2px solid #ddd;border-radius:16px;padding:28px 24px;color:#aaa;text-align:center;min-width:200px;filter:grayscale(1);opacity:0.5"><div style="font-size:52px;margin-bottom:8px">🏟️</div><div style="font-size:10px;background:rgba(0,0,0,0.1);padding:3px 12px;border-radius:10px;display:inline-block;margin-bottom:8px">FORMATION</div><div style="font-weight:900;font-size:28px">${T}</div><div style="font-size:11px;margin-top:6px">Non possédée</div></div>`},({formation:T,owned:M})=>M?`<div style="background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:8px;padding:8px 6px;color:#fff;text-align:center;width:70px"><div style="font-size:18px">🏟️</div><div style="font-size:7px;margin-top:2px">${T}</div></div>`:`<div style="background:#eee;border-radius:8px;padding:8px 6px;color:#aaa;text-align:center;width:70px;filter:grayscale(1);opacity:0.5"><div style="font-size:18px">🏟️</div><div style="font-size:7px;margin-top:2px">${T}</div></div>`,({card:T,owned:M})=>{M&&T&&At(T,p,t,o)},"#1A6B3C")}function O(A){const z=v?u:[...b];if(!z.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const B=z.map(T=>({type:T,gc:ne[T]||{icon:"⚡",desc:""},owned:b.has(T),card:c.find(M=>M.gc_type===T)||null}));C(B,({type:T,gc:M,owned:N,card:P})=>{const K=N?c.filter(U=>U.gc_type===T).length:0,H=K>1?`<div style="position:absolute;top:4px;right:4px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${K}</div>`:"";return N&&P?`<div data-gc-id="${P.id}" data-gc-type="${T}" style="position:relative;background:linear-gradient(135deg,#3d0a7a,#7a28b8);border:3px solid #9b59b6;border-radius:16px;padding:28px 24px;color:#fff;text-align:center;cursor:pointer;min-width:200px">${H}<div style="font-size:56px;margin-bottom:8px">${M.icon}</div><div style="font-size:10px;background:rgba(255,255,255,0.2);padding:3px 12px;border-radius:10px;display:inline-block;margin-bottom:8px">GAME CHANGER</div><div style="font-weight:900;font-size:22px;margin-bottom:6px">${T}</div><div style="font-size:12px;color:rgba(255,255,255,0.75);max-width:200px;margin:0 auto">${M.desc}</div></div>`:`<div style="background:#f0f0f0;border:2px solid #ddd;border-radius:16px;padding:28px 24px;color:#aaa;text-align:center;min-width:200px;filter:grayscale(1);opacity:0.5"><div style="font-size:56px;margin-bottom:8px">${M.icon}</div><div style="font-size:10px;background:rgba(0,0,0,0.1);padding:3px 12px;border-radius:10px;display:inline-block;margin-bottom:8px">GAME CHANGER</div><div style="font-weight:900;font-size:20px">${T}</div><div style="font-size:11px;margin-top:6px">Non possédée</div></div>`},({type:T,gc:M,owned:N})=>N?`<div style="background:linear-gradient(135deg,#3d0a7a,#7a28b8);border-radius:8px;padding:8px 6px;color:#fff;text-align:center;width:70px"><div style="font-size:22px">${M.icon}</div><div style="font-size:7px;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${T}</div></div>`:`<div style="background:#eee;border-radius:8px;padding:8px 6px;color:#aaa;text-align:center;width:70px;filter:grayscale(1);opacity:0.5"><div style="font-size:22px">${M.icon}</div><div style="font-size:7px;margin-top:2px">${T}</div></div>`,({type:T,owned:M})=>{M&&It(T,o)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(A=>{A.addEventListener("click",()=>{$=A.dataset.tab,y="Tous",g="",v=!1,e.querySelectorAll(".col-tab-btn").forEach(z=>{const B=z.dataset.tab===$;z.style.borderBottomColor=B?"var(--green)":"transparent",z.style.color=B?"var(--green)":"var(--gray-600)"}),I(),E()})}),I(),E()}function It(e,t){const i=ne[e]||{icon:"⚡",desc:"Effet spécial."};t("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ie=1e3;function At(e,t,i,a){var x,b,$;const{state:d,toast:o,closeModal:s,navigate:l,refreshProfile:r}=i,n=e.formation,c={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function p(){const y=xe[n]||{},g=Te[n]||[],v=290,L=360,h=20;function w(I){const E=y[I];return E?{x:E.x*v,y:E.y*L}:null}let _=`<svg width="${v}" height="${L}" viewBox="0 0 ${v} ${L}" xmlns="http://www.w3.org/2000/svg">`;for(const[I,E]of g){const C=w(I),j=w(E);!C||!j||(_+=`<line x1="${C.x}" y1="${C.y}" x2="${j.x}" y2="${j.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const I of Object.keys(y)){const E=w(I);if(!E)continue;const C=I.replace(/\d+/,""),j=c[C]||"#555";_+=`<circle cx="${E.x}" cy="${E.y}" r="${h}" fill="${j}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,_+=`<text x="${E.x}" y="${E.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${C}</text>`}return _+="</svg>",_}const f=t.filter(y=>y.formation===n),u=f.length,m=!e.is_for_sale;a(`Formation ${n}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${ie.toLocaleString("fr")} crédits</div>
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${ie}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(x=document.getElementById("direct-sell-form-btn"))==null||x.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${n} pour ${ie.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const y=f.find(v=>!v.is_for_sale)||f[0];if(!y){o("Aucune carte à vendre","error");return}const{error:g}=await k.from("cards").delete().eq("id",y.id);if(g){o(g.message,"error");return}await k.from("users").update({credits:(d.profile.credits||0)+ie}).eq("id",d.profile.id),await r(),o(`+${ie.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),l("collection")}),(b=document.getElementById("market-sell-form-btn"))==null||b.addEventListener("click",async()=>{const y=parseInt(document.getElementById("sell-price-form").value);if(!y||y<1){o("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:y}).eq("id",e.id),await k.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:y}),o("Carte mise en vente sur le marché !","success"),s(),l("collection")}),($=document.getElementById("cancel-sell-form-btn"))==null||$.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),s(),l("collection")})}function qe(e,t,i,a){var h,w,_,I,E,C;const{state:d,toast:o,openModal:s,closeModal:l,navigate:r,refreshProfile:n}=a,c=e.player,p=t.filter(j=>j.player.id===c.id),f=p.length,u=kt[c.rarity]||1e3,m=c.rarity!=="legende",x=ot(c),b=re(c,c.job),$=c.job2?re(c,c.job2):null,y=ue[c.job]||"#1A6B3C",g=c.job2?ue[c.job2]:null,v=it[c.rarity]||"#ccc",L=Le[c.country_code]||c.country_code||"";s(`${c.firstname} ${c.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

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
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${b}</text>
            </svg>
            ${$!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${g}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${$}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${x?`<img src="${x}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${c.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${L}</div>
            ${(h=c.clubs)!=null&&h.logo_url?`<img src="${c.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((w=c.clubs)==null?void 0:w.encoded_name)||"").slice(0,6)}</div>`}
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
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(_=document.getElementById("close-detail"))==null||_.addEventListener("click",l),(I=document.getElementById("direct-sell-btn"))==null||I.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${c.surname_encoded} pour ${u.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const j=p.find(q=>!q.is_for_sale)||p[0];if(!j){o("Aucune carte à vendre","error");return}const{error:G}=await k.from("cards").delete().eq("id",j.id);if(G){o(G.message,"error");return}await k.from("users").update({credits:(d.profile.credits||0)+u}).eq("id",d.profile.id),await n(),o(`+${u.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),r("collection")}),(E=document.getElementById("market-sell-btn"))==null||E.addEventListener("click",async()=>{const j=parseInt(document.getElementById("sell-price").value);if(!j||j<1){o("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:j}).eq("id",e.id),await k.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:j}),o("Carte mise en vente sur le marché !","success"),l(),r("collection")}),(C=document.getElementById("cancel-sell-btn"))==null||C.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),l(),r("collection")})}const ge={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},V={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ye(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function nt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function rt(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Tt(e,t=44,i=58){var u;const a=e?ye(e):null,d=e?rt(e):null,o=nt(e==null?void 0:e.country_code),s=(e==null?void 0:e.job)||"MIL",l=V[s]||"#555",r={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",n=Number(s==="GK"?e==null?void 0:e.note_g:s==="DEF"?e==null?void 0:e.note_d:s==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,c=Math.round(i*.19),p=Math.round(i*.25),f=i-c-p;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${r};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${c}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${c}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${o?`<img src="${o}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">🌍</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${n}</span>
      ${d?`<img src="${d}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:(u=e==null?void 0:e.clubs)!=null&&u.encoded_name?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function we(e,t){const{state:i,navigate:a,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await k.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!s)return;const{data:l,error:r}=await k.from("decks").insert({owner_id:i.profile.id,name:s}).select().single();if(r){d(r.message,"error");return}d("Deck créé !","success"),Oe(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>Oe(s.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",s.dataset.name);if(!l||l===s.dataset.name)return;const{error:r}=await k.from("decks").update({name:l}).eq("id",s.dataset.rename);if(r){d(r.message,"error");return}d("Deck renommé !","success"),we(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await k.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:l}=await k.from("decks").delete().eq("id",s.dataset.delete);if(l){d(l.message,"error");return}d("Deck supprimé.","success"),we(e,t)})})}async function Oe(e,t,i){const{state:a,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await k.from("decks").select("*").eq("id",e).single(),{data:s}=await k.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),l=(s||[]).filter(u=>u.card_type==="player"&&u.player),r=(s||[]).filter(u=>u.card_type==="formation"),n=r.map(u=>u.formation).filter(Boolean),{data:c}=await k.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=o.formation||"4-4-2";n.length>0&&!n.includes(p)&&(p=n[0]);const f={deckId:e,name:o.name,formation:p,formationCardId:o.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:r,availableFormations:n};(c||[]).forEach(u=>{u.is_starter?f.slots[u.position]=u.card_id:f.subs.includes(u.card_id)||f.subs.push(u.card_id)}),Z(t,f,i)}function Z(e,t,i){var r;const{navigate:a}=i;ge[t.formation];const d=Pe(t.formation),o=d.filter(n=>t.slots[n]).length,s=t.availableFormations.length>0?t.availableFormations:Object.keys(ge),l=t.subs.map(n=>t.playerCards.find(c=>c.id===n)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${s.map(n=>`<option value="${n}" ${n===t.formation?"selected":""}>${n}</option>`).join("")}
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
        ${l.map(n=>{const c=n.player;return`<div style="position:relative;flex-shrink:0">
            ${Tt(c,44,58)}
            <button data-remove-sub="${n.id}"
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
  </div>`,Lt(e,t,d,i),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",n=>{t.formation=n.target.value;const c=Pe(t.formation),p={};c.forEach(f=>{t.slots[f]&&(p[f]=t.slots[f])}),t.slots=p,Z(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>Ct(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(n=>{n.addEventListener("click",()=>{t.subs=t.subs.filter(c=>c!==n.dataset.removeSub),Z(e,t,i)})}),(r=document.getElementById("add-sub-btn"))==null||r.addEventListener("click",()=>{Mt(t,e,i)})}function Lt(e,t,i,a){const d=e.querySelector("#deck-field");if(!d)return;const o=xe[t.formation]||{},s=Je(t.formation)||[],l={};for(const $ of i){const y=t.slots[$],g=y?t.playerCards.find(v=>v.id===y):null;l[$]=g?g.player:null}const r=300,n=300,c=48,p=64,f=13,u=16,m=38;function x($){const y=o[$];return y?{x:y.x*r,y:y.y*n}:null}let b="";for(const[$,y]of s){const g=x($),v=x(y);if(!g||!v)continue;const L=l[$]?{...l[$],club_id:l[$].club_id,country_code:l[$].country_code,rarity:l[$].rarity}:null,h=l[y]?{...l[y],club_id:l[y].club_id,country_code:l[y].country_code,rarity:l[y].rarity}:null,w=X(L,h);w==="#ff3333"||w==="#cc2222"?b+=`<line x1="${g.x.toFixed(1)}" y1="${g.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${w}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(b+=`<line x1="${g.x.toFixed(1)}" y1="${g.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${w}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,b+=`<line x1="${g.x.toFixed(1)}" y1="${g.y.toFixed(1)}" x2="${v.x.toFixed(1)}" y2="${v.y.toFixed(1)}" stroke="${w}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const $ of i){const y=x($);if(!y)continue;const g=l[$],v=$.replace(/\d+/,""),L=V[v]||"#555",h=(y.x-c/2).toFixed(1),w=(y.y-p/2).toFixed(1),_={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[g==null?void 0:g.rarity]||"#aaa";if(g){const I=ye(g),E=rt(g),C=nt(g.country_code),j=Number(v==="GK"?g.note_g:v==="DEF"?g.note_d:v==="MIL"?g.note_m:g.note_a)||0,G=p-f-u;b+=`<defs><clipPath id="dcp-${$}"><rect x="${h}" y="${(y.y-p/2+f).toFixed(1)}" width="${c}" height="${G}"/></clipPath></defs>`,b+=`<rect x="${h}" y="${w}" width="${c}" height="${p}" rx="5" fill="${L}"/>`,I&&(b+=`<image href="${I}" x="${h}" y="${(y.y-p/2+f).toFixed(1)}" width="${c}" height="${G}" clip-path="url(#dcp-${$})" preserveAspectRatio="xMidYMin slice"/>`),b+=`<rect x="${h}" y="${w}" width="${c}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,b+=`<text x="${y.x.toFixed(1)}" y="${(y.y-p/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(g.surname_encoded||"").slice(0,9)}</text>`;const q=(y.y+p/2-u).toFixed(1);b+=`<rect x="${h}" y="${q}" width="${c}" height="${u}" fill="rgba(255,255,255,0.93)"/>`,C&&(b+=`<image href="${C}" x="${(y.x-21).toFixed(1)}" y="${(y.y+p/2-u+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),b+=`<text x="${y.x.toFixed(1)}" y="${(y.y+p/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${j}</text>`,E&&(b+=`<image href="${E}" x="${(y.x+c/2-14).toFixed(1)}" y="${(y.y+p/2-u+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),b+=`<rect x="${h}" y="${w}" width="${c}" height="${p}" rx="5" fill="none" stroke="${_}" stroke-width="2"/>`}else b+=`<rect x="${h}" y="${w}" width="${c}" height="${p}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,b+=`<text x="${y.x.toFixed(1)}" y="${y.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,b+=`<text x="${y.x.toFixed(1)}" y="${(y.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${v}</text>`;b+=`<rect x="${h}" y="${w}" width="${c}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${$}" style="cursor:pointer"/>`}d.innerHTML=`<svg viewBox="${-m} ${-m} ${r+m*2} ${n+m*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${b}</svg>`,d.querySelectorAll(".deck-slot-hit").forEach($=>{$.addEventListener("click",()=>zt($.dataset.pos,t,e,a))})}function zt(e,t,i,a){var f,u,m;const{openModal:d,closeModal:o}=a,s=e.replace(/\d+/,""),l=t.slots[e],r=l?t.playerCards.find(x=>x.id===l):null;(f=r==null?void 0:r.player)==null||f.id;const n=new Set;Object.entries(t.slots).forEach(([x,b])=>{var y;if(x===e||!b)return;const $=t.playerCards.find(g=>g.id===b);(y=$==null?void 0:$.player)!=null&&y.id&&n.add($.player.id)}),t.subs.forEach(x=>{var $;const b=t.playerCards.find(y=>y.id===x);($=b==null?void 0:b.player)!=null&&$.id&&n.add(b.player.id)});const c=new Set,p=t.playerCards.filter(x=>{const b=x.player;return!(b.job===s||b.job2===s)||n.has(b.id)||c.has(b.id)?!1:(c.add(b.id),!0)});p.sort((x,b)=>{const $=s==="GK"?x.player.note_g:s==="DEF"?x.player.note_d:s==="MIL"?x.player.note_m:x.player.note_a;return(s==="GK"?b.player.note_g:s==="DEF"?b.player.note_d:s==="MIL"?b.player.note_m:b.player.note_a)-$}),d(`Choisir ${s} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${p.length>0?p.map(x=>{var v,L;const b=x.player,$=s==="GK"?b.note_g:s==="DEF"?b.note_d:s==="MIL"?b.note_m:b.note_a,y=ye(b),g={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[b.rarity];return`<div class="player-option" data-card-id="${x.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${V[s]}">
            ${y?`<img src="${y}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${V[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${b.firstname} ${b.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${b.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${b.country_code}">
              ${(v=b.clubs)!=null&&v.logo_url?`<img src="${b.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((L=b.clubs)==null?void 0:L.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${b.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${V[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${g};flex-shrink:0">
            ${$}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(u=document.getElementById("close-selector"))==null||u.addEventListener("click",o),(m=document.getElementById("remove-player"))==null||m.addEventListener("click",()=>{delete t.slots[e],o(),Z(i,t,a)}),document.querySelectorAll(".player-option").forEach(x=>{x.addEventListener("click",()=>{t.slots[e]=x.dataset.cardId,o(),Z(i,t,a)})})}function Mt(e,t,i){var r;const{openModal:a,closeModal:d}=i,o=new Set;Object.values(e.slots).filter(Boolean).forEach(n=>{var p;const c=e.playerCards.find(f=>f.id===n);(p=c==null?void 0:c.player)!=null&&p.id&&o.add(c.player.id)}),e.subs.forEach(n=>{var p;const c=e.playerCards.find(f=>f.id===n);(p=c==null?void 0:c.player)!=null&&p.id&&o.add(c.player.id)});const s=new Set,l=e.playerCards.filter(n=>{var c,p,f;return o.has((c=n.player)==null?void 0:c.id)||s.has((p=n.player)==null?void 0:p.id)?!1:(s.add((f=n.player)==null?void 0:f.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(n=>{var u;const c=n.player,p=ye(c),f=c.job==="GK"?c.note_g:c.job==="DEF"?c.note_d:c.job==="MIL"?c.note_m:c.note_a;return`<div class="player-option" data-card-id="${n.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${V[c.job]}">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${c.firstname} ${c.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${c.job} · ${c.country_code} · ${((u=c.clubs)==null?void 0:u.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${V[c.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(r=document.getElementById("close-sub-selector"))==null||r.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(n=>{n.addEventListener("click",()=>{e.subs.push(n.dataset.cardId),d(),Z(t,e,i)})})}async function Ct(e,t){const{state:i,toast:a,navigate:d}=t,o=e.formationCards.find(r=>r.formation===e.formation),s=(o==null?void 0:o.id)||e.formationCardId;await k.from("decks").update({formation:e.formation,formation_card_id:s||null}).eq("id",e.deckId),await k.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([r,n],c)=>{l.push({deck_id:e.deckId,card_id:n,position:r,is_starter:!0,slot_order:c})}),e.subs.forEach((r,n)=>{l.push({deck_id:e.deckId,card_id:r,position:`SUB${n+1}`,is_starter:!1,slot_order:100+n})}),l.length>0){const{error:r}=await k.from("deck_cards").insert(l);if(r){a(r.message,"error");return}}a("Deck enregistré ✅","success"),d("decks")}function Pe(e){const t=ge[e]||ge["4-4-2"],i=["GK1"];for(let a=1;a<=t.DEF;a++)i.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)i.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)i.push(`ATT${a}`);return i}const jt="modulepreload",Bt=function(e){return"/manager-wars/"+e},Ke={},St=function(t,i,a){let d=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));d=Promise.allSettled(i.map(r=>{if(r=Bt(r),r in Ke)return;Ke[r]=!0;const n=r.endsWith(".css"),c=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const p=document.createElement("link");if(p.rel=n?"stylesheet":jt,n||(p.as="script"),p.crossOrigin="",p.href=r,l&&p.setAttribute("nonce",l),document.head.appendChild(p),n)return new Promise((f,u)=>{p.addEventListener("load",f),p.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}function o(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return d.then(s=>{for(const l of s||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};async function at(){const{data:e}=await k.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await k.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(a=>a.booster_id===i.id)}))}function Ft(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,d)=>a+Number(d.percentage),0);let i=Math.random()*t;for(const a of e)if(i-=Number(a.percentage),i<=0)return a;return e[e.length-1]}const Dt=Object.freeze(Object.defineProperty({__proto__:null,loadActiveBoosters:at,rollDropRate:Ft},Symbol.toStringTag,{value:"Module"})),st=()=>Object.keys(xe),Gt=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],$e={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Nt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Rt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},qt={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};function Ot(e){var d;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((d=Object.entries(t).sort((o,s)=>s[1]-o[1])[0])==null?void 0:d[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Pt(e,{state:t,navigate:i,toast:a}){var s;const d=((s=t.profile)==null?void 0:s.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await at()).map(Ot)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}o.length||(o=Gt.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${d.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(l=>{const r=l.cost===0||d>=l.cost;return`<div class="booster-card ${r?"":"disabled"}" data-booster="${l.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${l.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${l.img}" alt="${l.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${l.name}</div>
            <div class="desc">${l.sub}</div>
            <div class="cost">${l.costLabel}</div>
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const r=o.find(n=>n.id===l.dataset.booster);if(r){l.style.opacity="0.5",l.style.pointerEvents="none";try{await Kt(r,{state:t,toast:a,navigate:i,container:e})}catch(n){a(n.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation();const n=o.find(c=>c.id===l.dataset.boosterId);Zt(n)})})}async function Kt(e,{state:t,toast:i,navigate:a,container:d}){if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await ti()}catch(p){i(p.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:o}=await k.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),s=new Set((o||[]).filter(p=>p.card_type==="player").map(p=>p.player_id)),l=new Set((o||[]).filter(p=>p.card_type==="formation").map(p=>p.formation));let r=[];const n=e.type||"player";n==="player"?r=await Yt(t.profile,e.cardCount,e.cost):n==="game_changer"?r=await Wt(t.profile,e.cardCount,e.cost):n==="formation"?r=await Jt(t.profile,e.cost):r=await Vt(t.profile,e),r.forEach(p=>{p.card_type==="player"&&p.player?p.isDuplicate=s.has(p.player.id):p.card_type==="formation"&&(p.isDuplicate=l.has(p.formation))});const{data:c}=await k.from("users").select("*").eq("id",t.profile.id).single();c&&(t.profile=c),Xt(r,e,a)}function Ht(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Y(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Ut(e,t){let i;switch(t){case"legende":i=e.filter(a=>a.rarity==="legende"),i.length||(i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),i.length||(i=e.filter(a=>Y(a)>=6));break;case"special":i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),i.length||(i=e.filter(a=>Y(a)>=6));break;case"normal_high":i=e.filter(a=>a.rarity==="normal"&&Y(a)>=6),i.length||(i=e.filter(a=>Y(a)>=6));break;default:i=e.filter(a=>a.rarity==="normal"&&Y(a)>=1&&Y(a)<=5),i.length||(i=e.filter(a=>a.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Vt(e,t){if(t.cost>0){const{error:d}=await k.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(d)throw d}const{rollDropRate:i}=await St(async()=>{const{rollDropRate:d}=await Promise.resolve().then(()=>Dt);return{rollDropRate:d}},void 0),a=[];for(let d=0;d<(t.cardCount||5);d++){const o=i(t.rates);if(o){if(o.card_type==="player"){let s=k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);o.rarity&&(s=s.eq("rarity",o.rarity));const{data:l}=await s;let r=l||[];if((o.note_min||o.note_max)&&(r=r.filter(p=>{const f=Math.max(Number(p.note_g)||0,Number(p.note_d)||0,Number(p.note_m)||0,Number(p.note_a)||0);return(!o.note_min||f>=o.note_min)&&(!o.note_max||f<=o.note_max)})),r.length||(r=l||[]),!r.length)continue;const n=r[Math.floor(Math.random()*r.length)],{data:c}=await k.from("cards").insert({owner_id:e.id,player_id:n.id,card_type:"player"}).select().single();c&&a.push({...c,player:n})}else if(o.card_type==="game_changer"){const{data:s}=await k.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),l=s!=null&&s.length?s:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],n=l[Math.floor(Math.random()*l.length)].name,{data:c}=await k.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:n}).select().single();c&&a.push(c)}else if(o.card_type==="formation"){const s=st(),l=s[Math.floor(Math.random()*s.length)],{data:r}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:l}).select();r!=null&&r[0]&&a.push(r[0])}}}return a}async function Yt(e,t,i){if(i>0){const{error:n}=await k.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n}const{data:a}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=a.filter(n=>n.job==="GK"),o=a.filter(n=>n.job!=="GK"),s=!e.first_booster_opened&&d.length>0,l=[];for(let n=0;n<t;n++){const c=n===0&&s?d:n===0?o:a,p=Ht(),f=Ut(c,p);f&&l.push(f)}s&&await k.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:r}=await k.from("cards").insert(l.map(n=>({owner_id:e.id,player_id:n.id,card_type:"player"}))).select();return l.map((n,c)=>({...r[c],player:n}))}async function Wt(e,t,i){const{error:a}=await k.from("users").update({credits:e.credits-i}).eq("id",e.id);if(a)throw a;const{data:d}=await k.from("gc_definitions").select("id,name,gc_type").eq("is_active",!0),o=d!=null&&d.length?d:Object.keys($e).map(c=>({name:c,gc_type:"game_changer"})),s=Array.from({length:t},()=>{const c=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:c.name,gc_definition_id:c.id||null}}),{data:l,error:r}=await k.from("cards").insert(s).select();return r&&console.error("[Booster GC] Erreur insert:",r.message,r),(l||[]).map(c=>{const p=d==null?void 0:d.find(f=>f.name===c.gc_type||f.id===c.gc_definition_id);return{...c,_gcDef:p||null}})}async function Jt(e,t){const{error:i}=await k.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const a=st(),d=a[Math.floor(Math.random()*a.length)],{data:o,error:s}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),o||[]}function Xt(e,t,i){var f;if(!e||e.length===0){const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",u.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(u),(f=u.querySelector("#anim-close-err"))==null||f.addEventListener("click",()=>u.remove());return}const a=document.createElement("div");a.id="booster-anim-overlay",a.innerHTML=`
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
  `,document.body.appendChild(a);let d=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(d)return;d=!0;const u=document.getElementById("pack-visual");u.classList.add("shaking"),setTimeout(()=>{u.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",s(0)},600)},500)});let o=0;function s(u){o=u;const m=document.getElementById("reveal-phase");m.style.display="flex",l(u)}function l(u){var h;const m=e[u],x=document.getElementById("card-counter"),b=document.getElementById("single-card-slot"),$=document.getElementById("card-tap-hint");x&&(x.textContent=`Carte ${u+1} / ${e.length}`),$&&($.textContent=u<e.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const y=He(m),g=m.card_type==="player"&&((h=m.player)==null?void 0:h.rarity)==="legende";b.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${g?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${y}
        ${m.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,g&&c();const v=document.getElementById("current-card-wrap");let L=!1;v.addEventListener("click",()=>{if(L)return;L=!0;const w=u+1;w<e.length?(v.style.transition="all 0.25s ease",v.style.transform="translateX(-120%) rotate(-15deg)",v.style.opacity="0",setTimeout(()=>l(w),250)):r()})}function r(){p(),document.getElementById("reveal-phase").style.display="none";const u=document.getElementById("recap-phase");u.style.display="flex";const m=document.getElementById("recap-grid");m.innerHTML=e.map((x,b)=>`
      <div class="recap-card" style="--i:${b};animation-delay:${b*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${He(x)}
        ${x.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let n=null;function c(){const u=document.getElementById("fireworks-canvas");if(!u)return;u.width=window.innerWidth,u.height=window.innerHeight;const m=u.getContext("2d"),x=[];function b(){const y=Math.random()*u.width,g=Math.random()*u.height*.6,v=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],L=v[Math.floor(Math.random()*v.length)];for(let h=0;h<60;h++){const w=Math.PI*2/60*h,_=2+Math.random()*5;x.push({x:y,y:g,vx:Math.cos(w)*_,vy:Math.sin(w)*_,alpha:1,color:L,size:2+Math.random()*3})}}b(),n=setInterval(b,600);function $(){if(document.getElementById("fireworks-canvas")){m.clearRect(0,0,u.width,u.height);for(let y=x.length-1;y>=0;y--){const g=x[y];if(g.x+=g.vx,g.y+=g.vy+.08,g.vy*=.98,g.alpha-=.018,g.alpha<=0){x.splice(y,1);continue}m.globalAlpha=g.alpha,m.fillStyle=g.color,m.beginPath(),m.arc(g.x,g.y,g.size,0,Math.PI*2),m.fill()}m.globalAlpha=1,(n!==null||x.length>0)&&requestAnimationFrame($)}}$()}function p(){n!==null&&(clearInterval(n),n=null);const u=document.getElementById("fireworks-canvas");u&&u.getContext("2d").clearRect(0,0,u.width,u.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{p(),a.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{p(),a.remove(),i("boosters")})}function He(e){var t,i,a,d;if(e.card_type==="player"&&e.player){const o=e.player,s=o.job||"ATT",l=Rt[s]||"#1A6B3C",r=qt[o.rarity]||"#ccc",n=s==="GK"?o.note_g:s==="DEF"?o.note_d:s==="MIL"?o.note_m:o.note_a,c=Nt(o),p={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[o.country_code]||o.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${r};overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:6px 6px 2px;text-align:center;background:#f2e8d2">
        <div style="font-size:8px;letter-spacing:1px;color:#666;text-transform:uppercase">${o.firstname}</div>
        <div style="font-size:13px;font-weight:900;color:#111;line-height:1.1;font-family:Arial Black,Arial">${(o.surname_encoded||"").toUpperCase()}</div>
      </div>
      <!-- Étoile + bande poste -->
      <div style="position:relative;height:72px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:14px;width:100%;height:26px;background:${l}"></div>
        <svg width="50" height="48" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${l}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${n||0}</text>
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
    </div>`}if(e.card_type==="game_changer"){const o=e._gcDef,s={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},l={purple:"#9b59b6",light_blue:"#00bcd4"},r=s[o==null?void 0:o.color]||s.purple,n=l[o==null?void 0:o.color]||l.purple,c=(o==null?void 0:o.gc_type)==="ultra_game_changer",p=((a=$e[e.gc_type])==null?void 0:a.icon)||"⚡";return`<div style="width:140px;height:200px;background:${r};border-radius:12px;border:3px solid ${n};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 20px ${n}66">
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
        <div style="font-size:9px;color:rgba(255,255,255,0.85);line-height:1.3">${((o==null?void 0:o.effect)||((d=$e[e.gc_type])==null?void 0:d.desc)||"").slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Zt(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
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
      </div>`,document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>a.remove());return}Qt()}function Qt(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const ei="simulation",dt="VOTRE_ZONE_ID";function ti(){switch(ei){case"propellerads":return ii();case"adsense":return oi();default:return ze()}}function ze(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const a=setInterval(()=>{i--;const d=document.getElementById("ad-cd"),o=document.getElementById("ad-skip");d&&(d.textContent=i),o&&(o.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(a),o&&(o.disabled=!1,o.style.cssText=o.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),o==null||o.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function ii(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(ze());window.propeller.push({zone_id:dt,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function oi(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(ze());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:dt,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const Q={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ee={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function lt(e,t,i,a,d){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",d)}function R(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function _e(e){var i,a;const t=e.player;return{cardId:e.id,id:t.id,firstname:t.firstname,name:t.surname_encoded,country_code:t.country_code,club_id:t.club_id,job:t.job,job2:t.job2,note_g:Number(t.note_g)||0,note_d:Number(t.note_d)||0,note_m:Number(t.note_m)||0,note_a:Number(t.note_a)||0,rarity:t.rarity,skin:t.skin,hair:t.hair,hair_length:t.hair_length,clubName:((i=t.clubs)==null?void 0:i.encoded_name)||null,clubLogo:((a=t.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Me(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ni(){const e=Math.random()*100;return e<.1?4:e<5?3:e<20?2:1}function ct(e,t){const i=Q[t]||Q["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]},d=[...e];for(const o of["GK","DEF","MIL","ATT"]){const s=[];for(let r=0;r<i[o];r++){let n=d.findIndex(c=>c.job===o);if(n===-1&&(n=d.findIndex(c=>c.job2===o)),n===-1&&(n=0),d[n]){const c={...d[n],_line:o};s.push(c),d.splice(n,1)}}const l=Me(s.length);s.forEach((r,n)=>{r._col=l[n]}),a[o]=s}return a}async function ri(e,t){var s,l;const{data:i}=await k.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return ai(e);const a=Q[e]||Q["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},o=[...i];for(const r of["GK","DEF","MIL","ATT"]){const n=o.filter(m=>m.job===r),c=o.filter(m=>m.job!==r),p=[...n,...c],f=[];for(let m=0;m<a[r];m++){const x=p[m]||o[m];x&&f.push({cardId:"ai-"+x.id+"-"+m,id:x.id,firstname:x.firstname,name:x.surname_encoded,country_code:x.country_code,club_id:x.club_id,job:x.job,job2:x.job2,note_g:Number(x.note_g)||0,note_d:Number(x.note_d)||0,note_m:Number(x.note_m)||0,note_a:Number(x.note_a)||0,rarity:x.rarity,skin:x.skin,hair:x.hair,hair_length:x.hair_length,clubName:((s=x.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((l=x.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:r})}const u=Me(f.length);f.forEach((m,x)=>{m._col=u[x]}),d[r]=f}return d}function ai(e){const t=Q[e]||Q["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const o of["GK","DEF","MIL","ATT"]){const s=[];for(let r=0;r<t[o];r++){const n=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:a[d%a.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?n:2,note_d:o==="DEF"?n:2,note_m:o==="MIL"?n:2,note_a:o==="ATT"?n:2,rarity:"normal",boost:0,used:!1,_line:o}),d++}const l=Me(s.length);s.forEach((r,n)=>{r._col=l[n]}),i[o]=s}return i}async function si(e,t){var h;const{state:i,navigate:a,toast:d}=t,o=i.params||{};e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const s=o.matchMode||"vs_ai_easy",l=s.replace("vs_ai_",""),r=s;if(!o.deckId)return li(e,t,s);const n=o.deckId,[{data:c},{data:p}]=await Promise.all([k.from("decks").select("formation,name").eq("id",n).single(),k.from("deck_cards").select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`).eq("deck_id",n).order("slot_order")]),f=(p||[]).filter(w=>{var _;return w.is_starter&&((_=w.card)==null?void 0:_.player)}).map(w=>_e(w.card)),u=(p||[]).filter(w=>{var _;return!w.is_starter&&((_=w.card)==null?void 0:_.player)}).map(w=>_e(w.card));if(f.length<11){lt(e,"⚠️",`Deck incomplet (${f.length}/11).`,"Compléter",()=>a("decks"));return}const m=(p||[]).find(w=>{var _;return((_=w.card)==null?void 0:_.card_type)==="formation"}),x=(c==null?void 0:c.formation)||((h=m==null?void 0:m.card)==null?void 0:h.formation)||"4-4-2",{data:b}=await k.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",i.profile.id).eq("card_type","game_changer"),{data:$}=await k.from("gc_definitions").select("*").eq("is_active",!0),y=(b||[]).map(w=>({...w,_gcDef:($==null?void 0:$.find(_=>_.name===w.gc_type||_.id===w.gc_definition_id))||null})),g=ct(f,x),v=await ri(x),L=async w=>{const{data:_}=await k.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:n,status:"in_progress"}).select().single(),I={gcDefs:$||[],matchId:_==null?void 0:_.id,mode:r,difficulty:l,formation:x,homeTeam:g,aiTeam:v,homeSubs:u,subsUsed:0,maxSubs:Math.min(u.length,3),homeScore:0,aiScore:0,gcCards:w,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};ci(e,I,t)};if(!y.length){L([]);return}di(e,y,L)}function di(e,t,i){let d=[];function o(l,r){const n=l._gcDef,c={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},p={purple:"#9b59b6",light_blue:"#00bcd4"},f=c[n==null?void 0:n.color]||c.purple,u=p[n==null?void 0:n.color]||p.purple;return`<div class="gc-select-card" data-id="${l.id}"
      style="width:100px;border-radius:10px;border:3px solid ${r?"#FFD700":u};background:${f};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;
        box-shadow:${r?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${r?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <!-- Nom -->
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((n==null?void 0:n.name)||l.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(n==null?void 0:n.name)||l.gc_type}</span>
      </div>
      <!-- Image -->
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${n!=null&&n.image_url?`<img src="/manager-wars/icons/${n.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <!-- Effet -->
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((n==null?void 0:n.effect)||"").slice(0,50)}</span>
      </div>
      ${r?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000">✓</div>':""}
    </div>`}function s(){var l,r;e.innerHTML=`
    <div style="display:flex;flex-direction:column;height:100%;min-height:100%;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:16px;gap:14px">
      <!-- Header -->
      <div style="text-align:center;padding-top:8px">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:22px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">Sélectionne jusqu'à <b style="color:#FFD700">3</b> cartes · ${d.length}/3 choisie(s)</div>
      </div>

      <!-- Grille des cartes GC -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;padding:4px 0">
        ${t.map(n=>{const c=d.find(p=>p.id===n.id);return`<div style="position:relative">${o(n,!!c)}</div>`}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(n=>{n.addEventListener("click",()=>{const c=n.dataset.id,p=d.findIndex(f=>f.id===c);if(p>-1)d.splice(p,1);else{if(d.length>=3)return;const f=t.find(u=>u.id===c);f&&d.push(f)}s()})}),(l=e.querySelector("#gc-sel-confirm"))==null||l.addEventListener("click",()=>{d.length&&i(d)}),(r=e.querySelector("#gc-sel-skip"))==null||r.addEventListener("click",()=>{i([])})}s()}async function li(e,t,i){const{state:a,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await k.from("decks").select("id,name,is_active,formation").eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){lt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const s=o.map(c=>c.id),{data:l}=await k.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order");let r=0;function n(){var y,g,v,L,h;const c=o[r],p=(l||[]).filter(w=>w.deck_id===c.id),f=p.filter(w=>{var _;return w.is_starter&&((_=w.card)==null?void 0:_.player)}).map(w=>_e(w.card)),u=p.find(w=>{var _;return((_=w.card)==null?void 0:_.card_type)==="formation"}),m=c.formation||((y=u==null?void 0:u.card)==null?void 0:y.formation)||"4-4-2",x=f.length>=11?ct(f,m):null,b=f.length>=11;e.innerHTML=`
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
        ${x?`<div style="width:min(98vw, calc(100dvh - 400px));overflow:hidden;flex-shrink:0">${ut(x,m,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${o.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${o.map((w,_)=>`<div style="width:7px;height:7px;border-radius:50%;background:${_===r?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,(g=document.getElementById("prev-deck"))==null||g.addEventListener("click",()=>{r>0&&(r--,n())}),(v=document.getElementById("next-deck"))==null||v.addEventListener("click",()=>{r<o.length-1&&(r++,n())}),(L=document.getElementById("validate-deck"))==null||L.addEventListener("click",()=>{b&&t.navigate("match",{matchMode:i,deckId:c.id})}),(h=document.getElementById("cancel-deck-select"))==null||h.addEventListener("click",()=>d("home"));const $=document.getElementById("deck-swipe-zone");if($){let w=0,_=0;$.addEventListener("touchstart",I=>{w=I.touches[0].clientX,_=I.touches[0].clientY},{passive:!0}),$.addEventListener("touchend",I=>{const E=I.changedTouches[0].clientX-w,C=I.changedTouches[0].clientY-_;Math.abs(E)<40||Math.abs(E)<Math.abs(C)||(E<0&&r<o.length-1?(r++,n()):E>0&&r>0&&(r--,n()))},{passive:!0})}}n()}function ci(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;min-height:100%;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Ce(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>pi(e,t,i),5e3)}function pi(e,t,i){const a=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[];function o(p){return p.reduce((f,u)=>f+F(u,"MIL"),0)}function s(p){let f=0;for(let u=0;u<p.length-1;u++){const m=X(p[u],p[u+1]);m==="#00ff88"?f+=2:m==="#FFD700"&&(f+=1)}return f}const l=o(a)+s(a),r=o(d)+s(d),n=l>=r;function c(p,f,u){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${f}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((m,x)=>{const b=R(m),$=x<p.length-1?X(m,p[x+1]):null,y=$&&$!=="#ff3333"&&$!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${u};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${b?`<img src="${b}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${F(m,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${m.name}</div>
          </div>
          ${$?`<div style="width:14px;height:4px;border-radius:2px;background:${$};flex-shrink:0;opacity:${y?.9:.3}"></div>`:""}
          `}).join("")}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${o(p)} + ${s(p)} liens = <b style="color:#fff">${o(p)+s(p)}</b>
      </div>
    </div>`}e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;min-height:100%;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${c(a,t.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${l}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${r}</div>
    </div>

    ${c(d,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const p=document.getElementById("score-home"),f=document.getElementById("score-ai"),u=document.getElementById("midfield-result");if(p&&f&&(n?(p.style.fontSize="80px",p.style.color="#FFD700",f.style.opacity="0.25"):(f.style.fontSize="80px",f.style.color="#ff6b6b",p.style.opacity="0.25")),u){const m=ni();u.style.opacity="1",n&&t.clubName,u.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${n?`${t.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${n?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${m}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,n&&(t.boostCard={value:m})}t.attacker=n?"home":"ai",t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(m=>({name:m.name,note:F(m,"MIL"),portrait:R(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),aiPlayers:d.map(m=>({name:m.name,note:F(m,"MIL"),portrait:R(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),homeTotal:l,aiTotal:r,text:`Duel milieu : ${t.clubName} ${l} – ${r} IA → ${n?t.clubName+" attaque":"IA attaque"}`}),setTimeout(()=>{var x,b;const m=(x=t.boostCard)==null?void 0:x.value;e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;min-height:100%;gap:20px;padding:24px;background:#0a3d1e;text-align:center">
        <div style="font-size:64px">${n?"🏆":"😤"}</div>
        <div style="font-size:22px;font-weight:900;color:#fff;line-height:1.3">
          ${n?`⚽ ${t.clubName}<br>gagne le milieu de terrain !`:"😔 L'IA gagne l'engagement !"}
        </div>
        ${m&&n?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:16px;padding:16px 32px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">Carte Boost obtenue</div>
          <div style="font-size:48px;font-weight:900;color:#87CEEB">+${m}</div>
          <div style="font-size:11px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
        <button id="start-match-btn" style="margin-top:8px;padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:17px;font-weight:900;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,0.3)">
          ▶ Commencer le match
        </button>
      </div>`,(b=document.getElementById("start-match-btn"))==null||b.addEventListener("click",()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",D(e,t,i),t.attacker==="ai"&&setTimeout(()=>Ee(e,t,i),800)})},100)},5e3)}function pt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function W(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:R(e),d=pt(e),o=e._line||e.job||"MIL",s=ee[o]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",r=e.note!==void 0?Number(e.note)||0:(Number(F(e,o))||0)+(e.boost||0),n=ft(e==null?void 0:e.country_code),c=Math.round(i*.19),p=Math.round(i*.25),f=i-Math.round(i*.19)-Math.round(i*.25),u=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${l};background:${s};position:relative;overflow:hidden;flex-shrink:0;opacity:${u}">
    <div style="position:absolute;top:0;left:0;right:0;height:${c}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${c}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${ke(e==null?void 0:e.country_code)?`<img src="${ke(e.country_code)}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">${n}</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":r}</span>
      ${d?`<img src="${d}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function de(e,t,i){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((o,s)=>{if(d+=W(o,40,52),s<a.length-1){const l=X(o,a[s+1]);d+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function ke(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ft(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Ce(e,t,i,a,d=310,o=310){const s=xe[t]||{},l=Je(t)||Te[t]||[],r={},n=["ATT","MIL","DEF","GK"];for(const y of n)(e[y]||[]).forEach((v,L)=>{r[`${y}${L+1}`]=v});function c(y){const g=s[y];return g?{x:g.x*d,y:g.y*o}:null}let p="";for(const[y,g]of l){const v=c(y),L=c(g);if(!v||!L)continue;const h=r[y],w=r[g],_=X(h,w);_==="#00ff88"||_==="#FFD700"?(p+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${_}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,p+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${_}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):p+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${_}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const f=48,u=64,m=13,x=16,b={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[y,g]of Object.entries(r)){const v=c(y);if(!v||!g)continue;const L=y.replace(/[0-9]/g,""),h=ee[L]||"#555",w=i==="attack"&&["MIL","ATT"].includes(L)&&!g.used||i==="defense"&&["GK","DEF","MIL"].includes(L)&&!g.used,_=a.includes(g.cardId);let I;i==="attack"?I=L==="MIL"?Number(g.note_m)||0:Number(g.note_a)||0:i==="defense"?I=L==="GK"?Number(g.note_g)||0:L==="MIL"?Number(g.note_m)||0:Number(g.note_d)||0:I=Number(L==="GK"?g.note_g:L==="DEF"?g.note_d:L==="MIL"?g.note_m:g.note_a)||0,I=I+(g.boost||0);const E=(v.x-f/2).toFixed(1),C=(v.y-u/2).toFixed(1),j=g.used?.25:1,G=b[g==null?void 0:g.rarity]||b.normal,q=_?"#ff3030":G,O=_?3:(g==null?void 0:g.rarity)==="légende"||(g==null?void 0:g.rarity)==="pépite"?2.5:2,A=u-m-x;p+=`<defs><clipPath id="cp-${y}"><rect x="${E}" y="${(v.y-u/2+m).toFixed(1)}" width="${f}" height="${A}"/></clipPath></defs>`,p+=`<rect x="${E}" y="${C}" width="${f}" height="${u}" rx="5" fill="${h}" opacity="${j}"/>`;const z=R(g);z&&!g.used&&(p+=`<image href="${z}" x="${E}" y="${(v.y-u/2+m).toFixed(1)}" width="${f}" height="${A}" clip-path="url(#cp-${y})" preserveAspectRatio="xMidYMin slice"/>`),p+=`<rect x="${E}" y="${C}" width="${f}" height="${m}" rx="4" fill="rgba(255,255,255,0.92)"/>`,p+=`<text x="${v.x.toFixed(1)}" y="${(v.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(g.name||"").slice(0,9)}</text>`;const B=(v.y+u/2-x).toFixed(1);if(p+=`<rect x="${E}" y="${B}" width="${f}" height="${x}" fill="rgba(255,255,255,0.92)"/>`,g.used)p+=`<text x="${v.x.toFixed(1)}" y="${(v.y+u/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const T=ke(g.country_code);T?p+=`<image href="${T}" x="${(v.x-20).toFixed(1)}" y="${(v.y+u/2-x+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:p+=`<text x="${(v.x-13).toFixed(1)}" y="${(v.y+u/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${ft(g.country_code)}</text>`,p+=`<text x="${v.x.toFixed(1)}" y="${(v.y+u/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${I}</text>`;const M=pt(g);M?p+=`<image href="${M}" x="${(v.x+f/2-14).toFixed(1)}" y="${(v.y+u/2-x+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:g.clubName&&(p+=`<text x="${(v.x+14).toFixed(1)}" y="${(v.y+u/2-x/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(g.clubName||"").slice(0,3).toUpperCase()}</text>`),g.boost&&(p+=`<rect x="${(v.x+f/2-12).toFixed(1)}" y="${(v.y-u/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,p+=`<text x="${(v.x+f/2-5).toFixed(1)}" y="${(v.y-u/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${g.boost}</text>`)}p+=`<rect x="${E}" y="${C}" width="${f}" height="${u}" rx="5" fill="${_?"rgba(255,255,255,0.12)":"none"}" stroke="${q}" stroke-width="${O}" opacity="${j}"/>`,w&&(p+=`<rect x="${E}" y="${C}" width="${f}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${_?"selected":""}" data-card-id="${g.cardId}" data-role="${L}" style="cursor:pointer"/>`)}const $=38;return`<svg viewBox="${-$} ${-$} ${d+$*2} ${o+$*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${p}
  </svg>`}function ut(e,t,i,a,d=300,o=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ce(e,t,i,a,d,o)}
  </div>`}function le(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}function fi(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:wrap">
          ${(e.homePlayers||[]).map(i=>le(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:wrap">
          ${(e.aiPlayers||[]).map(i=>le(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${le(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${le(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function D(e,t,i){var m,x,b,$,y,g,v,L;const a=t.selected.map(h=>h.cardId),d=t.usedSubIds||[],o=t.homeSubs.filter(h=>!d.includes(h.cardId));Object.values(t.homeTeam).flat().filter(h=>h.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const l=t.phase==="ai-attack"||t.phase==="ai-defense",r=t.phase==="attack",n=t.phase==="defense",c=t.phase==="finished",p=t.gcCards.filter(h=>!t.usedGc.includes(h.id)),f=t.boostCard&&!t.boostUsed;if(e.innerHTML=`
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
            ${de((w.players||[]).map(_=>({..._,used:!1})),"#ff6b6b",w.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const w=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${de((w.players||[]).map(_=>({..._,used:!1})),"#00ff88",w.total)}
          </div>`}const h=t.log[t.log.length-1];return h?'<div style="padding:2px 4px">'+fi(h)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
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
                ${W(h,44,58)}
              </div>`).join("")}
      </div>

      <!-- Terrain -->
      <div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0">
          ${ut(t.homeTeam,t.formation,t.phase,a,300,300)}
        </div>
      </div>
    </div>

    <!-- ZONE BAS : GC + BOUTON ACTION -->
    <div style="display:flex;align-items:flex-end;padding:6px 8px;background:rgba(0,0,0,0.35);gap:8px;flex-shrink:0;min-height:80px">

      <!-- Grille GC -->
      <div style="flex:1;display:grid;grid-template-columns:repeat(4,1fr);gap:3px;align-content:start">
        ${p.map(h=>{var w;return`
          <div class="gc-mini" data-gc-id="${h.id}" data-gc-type="${h.gc_type}"
            style="background:linear-gradient(135deg,#3d0a7a,#7a28b8);border:1px solid #9b59b6;border-radius:7px;padding:3px 2px;cursor:pointer;text-align:center">
            <div style="font-size:16px">${((w=ne[h.gc_type])==null?void 0:w.icon)||"⚡"}</div>
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
        ${c?'<button id="btn-results" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">🏁 Résultats</button>':l?'<div style="min-width:130px;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:14px;display:flex;align-items:center;justify-content:center;gap:6px">⏳ Tour IA</div>':r?`<button id="btn-action" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?'disabled style="opacity:0.45;cursor:default"':""}>⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:n?`<button id="btn-action" style="min-width:130px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?'disabled style="opacity:0.45;cursor:default"':""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:'<div style="min-width:130px;padding:14px;border-radius:14px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>'}
        ${r||n?`<div style="font-size:9px;color:rgba(255,255,255,0.4)">${t.selected.length}/3 sélectionné(s)</div>`:""}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(h=>{var w,_,I;if(h.type==="duel"){const E=h.isGoal,C=h.homeScored?"#FFD700":E?"#ff6b6b":"rgba(255,255,255,0.3)",j=h.homeScored?"⚽ BUT !":E?"⚽ BUT IA !":(w=h.homePlayers)!=null&&w.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${E?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${C};margin-bottom:4px">
                <div style="font-size:9px;color:${C};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${j}</div>
                ${(_=h.homePlayers)!=null&&_.length?`<div style="margin-bottom:3px">${de(h.homePlayers,"rgba(255,255,255,0.7)",h.homeTotal)}</div>`:""}
                ${(I=h.aiPlayers)!=null&&I.length?`<div style="opacity:0.7">${de(h.aiPlayers,"#ff6b6b",h.aiTotal)}</div>`:""}
              </div>`}return h.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${h.outPlayer?W({...h.outPlayer,used:!0,_line:h.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${h.inPlayer?W({...h.inPlayer,_line:h.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:h.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${h.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${h.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`,requestAnimationFrame(()=>{const h=e.querySelector("#match-field"),w=e.querySelector(".terrain-wrapper");if(!h||!w)return;const _=h.clientHeight||h.offsetHeight,I=h.clientWidth||h.offsetWidth,E=Math.min(_,I)||280;w.style.width=E+"px",w.style.height=E+"px"}),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let h=!1,w=30;const _=()=>document.getElementById("match-timer"),I=()=>{const E=_();if(!E)return;const C=String(Math.floor(w/60)).padStart(2,"0"),j=String(w%60).padStart(2,"0");E.textContent=` ${C}:${j}`,E.style.color=h?"#ff2222":"#ff9500",E.style.fontWeight="900"};I(),t._timerInt=setInterval(()=>{if(w--,w<0)if(!h)h=!0,w=15,I();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",E.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(E),setTimeout(()=>{E.remove(),J(e,t,i)},2500)}else I()},1e3)}(m=document.getElementById("match-quit"))==null||m.addEventListener("click",()=>{confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,J(e,t,i))}),(x=document.getElementById("view-ai"))==null||x.addEventListener("click",()=>wi(t,i)),(b=document.getElementById("toggle-history"))==null||b.addEventListener("click",()=>{var h;(h=document.getElementById("match-history-panel"))==null||h.classList.add("open")}),($=document.getElementById("close-history"))==null||$.addEventListener("click",()=>{var h;(h=document.getElementById("match-history-panel"))==null||h.classList.remove("open")}),(y=document.getElementById("btn-action"))==null||y.addEventListener("click",()=>{t.selected.length!==0&&(r?gi(e,t,i):n&&mi(e,t,i))}),(g=document.getElementById("btn-results"))==null||g.addEventListener("click",()=>J(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(h=>{h.addEventListener("click",()=>ui(h,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(h=>{h.addEventListener("click",()=>hi(h.dataset.gcId,h.dataset.gcType,e,t,i))}),(v=document.getElementById("boost-card"))==null||v.addEventListener("click",()=>vi(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(h=>{h.addEventListener("click",()=>Ue(e,t,i,h.dataset.subId))}),(L=document.getElementById("sub-btn-main"))==null||L.addEventListener("click",()=>Ue(e,t,i))}function ui(e,t,i,a){const d=e.dataset.cardId,o=e.dataset.role,s=t.selected.findIndex(l=>l.cardId===d);if(s!==-1)t.selected.splice(s,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[o]||[]).find(r=>r.cardId===d);l&&t.selected.push({...l,_role:o,_line:o})}D(i,t,a)}function je(e,t,i){e.matchId&&k.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function gi(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),je(t,i,i.state.profile.id);const a=t.selected.map(o=>({...o,_line:o._role})),d=Ze(a,t.modifiers.home);t.pendingAttack={...d,players:[...t.selected],side:"home"},t.selected.forEach(o=>{const s=(t.homeTeam[o._role]||[]).find(l=>l.cardId===o.cardId);s&&(s.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${d.total} (base ${d.base}${d.links?` +${d.links} liens`:""}) — ${t.selected.map(o=>o.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",D(e,t,i),setTimeout(()=>xi(e,t,i),1200)}function mi(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),je(t,i,i.state.profile.id);const a=t.selected.map(l=>({...l,_line:l._role})),d=Qe(a,t.modifiers.home);t.selected.forEach(l=>{const r=(t.homeTeam[l._role]||[]).find(n=>n.cardId===l.cardId);r&&(r.used=!0)});const o=et(t.pendingAttack.total,d.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:R(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const r=(t.homeTeam[l._role]||[]).find(n=>n.cardId===l.cardId)||l;return{name:r.name,note:r._line==="GK"?r.note_g:r._line==="MIL"?r.note_m:r.note_d,portrait:R(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(o.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(o.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,D(e,t,i),Be(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ae(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ae(e,t,i,"home-attack")}function Ee(e,t,i){je(t,i,null);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=tt(a,"attack",t.difficulty);if(!d.length){mt(e,t,i);return}const o=Ze(d,t.modifiers.ai);t.pendingAttack={...o,players:d,side:"ai"},d.forEach(n=>{n.used=!0}),t.log.push({text:`🤖 IA attaque : ${o.total} (${d.map(n=>n.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(n=>!n.used),r=(t.homeSubs||[]).filter(n=>!(t.usedSubIds||[]).includes(n.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!r){t.aiScore++;const n={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(c=>({name:c.name,note:c._line==="MIL"?c.note_m:c.note_a,portrait:R(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),aiTotal:o.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(n),t.pendingAttack=null,D(e,t,i),Be(n.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ae(e,t,i,"home-attack")});return}t.phase="defense",D(e,t,i)}function xi(e,t,i){const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=tt(a,"defense",t.difficulty),o=d.length>0?Qe(d,t.modifiers.ai).total:0;d.forEach(r=>{r.used=!0});const s=et(t.pendingAttack.total,o,t.modifiers.ai),l={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:R(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiPlayers:d.map(r=>({name:r.name,note:r._line==="GK"?r.note_g:r._line==="MIL"?r.note_m:r.note_d,portrait:R(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:o,isGoal:!1,homeScored:!1,text:""};if(s.shielded)l.text="🛡️ Bouclier IA !",t.log.push(l);else if(s.goal){t.homeScore++,l.isGoal=!0,l.homeScored=!0,l.text=`⚽ BUT ! (${t.pendingAttack.total} > ${o})`,t.log.push(l),t.modifiers.ai={},t.pendingAttack=null,D(e,t,i),Be(l.homePlayers,t.homeScore,t.aiScore,!0,()=>{ae(e,t,i,"ai-attack")});return}else l.text=`🧤 IA défend (${o} ≥ ${t.pendingAttack.total})`,t.log.push(l);t.modifiers.ai={},t.pendingAttack=null,ae(e,t,i,"ai-attack")}function ae(e,t,i,a){if(t.round++,gt(t)){J(e,t,i);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(o=>!o.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used).length){J(e,t,i);return}t.phase="ai-attack",D(e,t,i),setTimeout(()=>Ee(e,t,i),800);return}t.phase="attack",D(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(o=>!o.used).length){mt(e,t,i);return}t.phase="ai-attack",D(e,t,i),setTimeout(()=>Ee(e,t,i),800)}}function gt(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(d=>!d.used));return!t&&!i}function mt(e,t,i){gt(t)?J(e,t,i):(t.phase="attack",D(e,t,i))}function yi(e,t,i){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=R(e),o=R(t),s=ee[e.job]||"#555",l=ee[t.job]||"#555",r=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,n=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
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
        <div style="width:80px;height:80px;border-radius:12px;background:${l};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${o?`<img src="${o}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${n}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(a);let c=!1;const p=()=>{c||(c=!0,a.remove(),i())};a.addEventListener("click",p),setTimeout(p,2e3)}function oe(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function Ue(e,t,i,a=null){if(t.phase!=="attack"){oe("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){oe(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.values(t.homeTeam).flat().filter(p=>p.used),o=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!d.length){oe("Aucun joueur utilisé à remplacer");return}if(!o.length){oe("Aucun remplaçant disponible");return}let s=0,l=Math.max(0,o.findIndex(p=>p.cardId===a)),r=!1;const n=document.createElement("div");n.id="sub-overlay",n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function c(){var $,y,g,v,L,h;const p=d[s],f=o[l],u=Math.min(130,Math.round((window.innerWidth-90)/2)),m=Math.round(u*1.35),x=w=>`background:rgba(255,255,255,0.12);border:none;color:${w?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${w?"default":"pointer"};flex-shrink:0`;n.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${x(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${f?W({...f,used:!1,boost:0},u,m):"<div>—</div>"}</div>
        <button id="in-down" style="${x(l>=o.length-1)}" ${l>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${o.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${x(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?W({...p,used:!1,boost:0},u,m):"<div>—</div>"}</div>
        <button id="out-down" style="${x(s>=d.length-1)}" ${s>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,($=n.querySelector("#sub-close"))==null||$.addEventListener("click",()=>n.remove()),(y=n.querySelector("#out-up"))==null||y.addEventListener("click",()=>{s>0&&(s--,c())}),(g=n.querySelector("#out-down"))==null||g.addEventListener("click",()=>{s<d.length-1&&(s++,c())}),(v=n.querySelector("#in-up"))==null||v.addEventListener("click",()=>{l>0&&(l--,c())}),(L=n.querySelector("#in-down"))==null||L.addEventListener("click",()=>{l<o.length-1&&(l++,c())});const b=(w,_,I,E)=>{const C=n.querySelector("#"+w);if(!C)return;let j=0;C.addEventListener("touchstart",G=>{j=G.touches[0].clientY},{passive:!0}),C.addEventListener("touchend",G=>{const q=G.changedTouches[0].clientY-j;if(Math.abs(q)<30)return;const O=_();q<0&&O<E-1?(I(O+1),c()):q>0&&O>0&&(I(O-1),c())},{passive:!0})};b("in-panel",()=>l,w=>l=w,o.length),b("out-panel",()=>s,w=>s=w,d.length),(h=n.querySelector("#sub-confirm"))==null||h.addEventListener("click",w=>{if(w.preventDefault(),w.stopPropagation(),r)return;r=!0;const _=d[s],I=o[l];if(!_||!I)return;let E=null,C=-1;for(const[G,q]of Object.entries(t.homeTeam)){const O=(q||[]).findIndex(A=>A.cardId===_.cardId);if(O!==-1){E=G,C=O;break}}if(C===-1||!E){oe("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),n.remove();return}const j={...I,_line:E,_col:_._col||0,used:!1,boost:0};t.homeTeam[E].splice(C,1,j),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(I.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:_.name,firstname:_.firstname,note:F(_,E),portrait:R(_),job:_.job,country_code:_.country_code,rarity:_.rarity,clubName:_.clubName,clubLogo:_.clubLogo},inPlayer:{name:I.name,firstname:I.firstname,note:F(I,E),portrait:R(I),job:I.job,country_code:I.country_code,rarity:I.rarity,clubName:I.clubName,clubLogo:I.clubLogo},text:`🔄 ${I.firstname} ${I.name} remplace ${_.firstname} ${_.name}`}),n.remove(),yi(_,I,()=>D(e,t,i))})}document.body.appendChild(n),c()}function hi(e,t,i,a,d){var l,r;const o=ne[t]||{icon:"⚡",desc:"Carte spéciale."},s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;align-items:center;justify-content:center;padding:24px",s.innerHTML=`
    <div style="background:linear-gradient(160deg,#2a0a52,#7a28b8);border:2px solid #9b59b6;border-radius:18px;padding:24px;max-width:320px;text-align:center;color:#fff">
      <div style="font-size:52px;margin-bottom:10px">${o.icon}</div>
      <div style="font-size:19px;font-weight:900;margin-bottom:8px">${t}</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.85);line-height:1.5;margin-bottom:20px">${o.desc}</div>
      <div style="display:flex;gap:10px">
        <button id="gc-back" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="gc-use" style="flex:1;padding:12px;border-radius:10px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser</button>
      </div>
    </div>`,document.body.appendChild(s),(l=s.querySelector("#gc-back"))==null||l.addEventListener("click",()=>s.remove()),(r=s.querySelector("#gc-use"))==null||r.addEventListener("click",()=>{s.remove(),bi(e,t,i,a,d)})}function ve(e,t,i,a,d,o){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function r(){var n,c;s.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(p=>{const f=p._line||p.job||"MIL",u={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",m=F(p,f)+(p.boost||0),x=l.find(b=>b.cardId===p.cardId);return`<div class="gc-pick-item" data-cid="${p.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${x?"#FFD700":"rgba(255,255,255,0.25)"};background:${u};overflow:hidden;cursor:pointer;flex-shrink:0;${p.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${p.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${m}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(n=s.querySelector("#gc-picker-close"))==null||n.addEventListener("click",()=>s.remove()),s.querySelectorAll(".gc-pick-item").forEach(p=>{p.addEventListener("click",()=>{const f=p.dataset.cid,u=e.find(x=>x.cardId===f);if(!u)return;const m=l.findIndex(x=>x.cardId===f);m>-1?l.splice(m,1):l.length<t&&l.push(u),r()})}),(c=s.querySelector("#gc-picker-confirm"))==null||c.addEventListener("click",()=>{s.remove(),o(l)})}r(),document.body.appendChild(s)}const xt={BOOST_STAT({value:e=2,target:t="home",count:i=1,roles:a=null},d,o,s){const l=t==="home"?d.homeTeam:d.aiTeam,r=Object.entries(l).flatMap(([n,c])=>!a||a.includes(n)?(c||[]).filter(p=>!p.used).map(p=>({...p,_line:n})):[]);return r.length?(ve(r,i,e>0?`⚡ +${e} à ${i} joueur(s)`:`💀 -${Math.abs(e)} à ${i} joueur(s)`,o,d,n=>{n.forEach(c=>{for(const p of["GK","DEF","MIL","ATT"]){const f=(d.homeTeam[p]||[]).find(u=>u.cardId===c.cardId)||(d.aiTeam[p]||[]).find(u=>u.cardId===c.cardId);if(f){f.boost=(f.boost||0)+e;break}}}),d.log.push({text:`${e>0?"⚡":"💀"} ${Math.abs(e)>0?"+":""}${e} → ${n.map(c=>c.name).join(", ")}`,type:"info"}),D(o,d,s)}),!0):(s.toast("Aucun joueur disponible","error"),!0)},DEBUFF_STAT(e,t,i,a){return xt.BOOST_STAT({...e,value:-Math.abs(e.value||2)},t,i,a)},GRAY_PLAYER({target:e="opponent",count:t=1,roles:i=null},a,d,o){const s=e==="opponent"?a.aiTeam:a.homeTeam,l=Object.entries(s).flatMap(([r,n])=>!i||i.includes(r)?(n||[]).filter(c=>!c.used).map(c=>({...c,_line:r})):[]);return l.length?(ve(l,t,`❄️ Griser ${t} joueur(s)`,d,a,r=>{r.forEach(n=>{for(const c of Object.keys(a.aiTeam).concat(Object.keys(a.homeTeam))){const f=((e==="opponent"?a.aiTeam[c]:a.homeTeam[c])||[]).find(u=>u.cardId===n.cardId);if(f){f.used=!0;break}}}),a.log.push({text:`❄️ ${r.map(n=>n.name).join(", ")} grisé(s) !`,type:"info"}),D(d,a,o)}),!0):(o.toast("Aucun joueur à griser","error"),!0)},REVIVE_PLAYER({count:e=1},t,i,a){const d=Object.entries(t.homeTeam).flatMap(([o,s])=>(s||[]).filter(l=>l.used).map(l=>({...l,_line:o})));return d.length?(ve(d,e,"💫 Ressusciter",i,t,o=>{o.forEach(s=>{for(const l of["GK","DEF","MIL","ATT"]){const r=(t.homeTeam[l]||[]).find(n=>n.cardId===s.cardId);if(r){r.used=!1;break}}}),t.log.push({text:`💫 ${o.map(s=>s.name).join(", ")} ressuscité(s) !`,type:"info"}),D(i,t,a)}),!0):(a.toast("Aucun joueur à ressusciter","error"),!0)},REMOVE_GOAL(e,t,i,a){return t.aiScore<=0?(a.toast("Aucun but adverse","error"),!1):(t.aiScore--,t.log.push({text:"🚫 But adverse retiré !",type:"info"}),!1)},ADD_GOAL_DRAW(e,t,i,a){return t.modifiers=t.modifiers||{},t.modifiers.home=t.modifiers.home||{},t.modifiers.home.addGoalOnDraw=!0,t.log.push({text:"⚽ +1 but si duel nul activé !",type:"info"}),!1},ADD_SUB({count:e=1},t,i,a){return t.maxSubs+=e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1}};function bi(e,t,i,a,d){if(a.usedGc.includes(e))return;a.usedGc.push(e);const o=(a.gcDefs||[]).find(l=>l.name===t);let s=!1;if(o!=null&&o.effect_type&&o.effect_type!=="CUSTOM"){const l=xt[o.effect_type];l?l(o.effect_params||{},a,i,d)||(s=!0):(d.toast(`Effet "${o.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const l=Object.entries(a.homeTeam).flatMap(([r,n])=>(n||[]).filter(c=>c.used).map(c=>({...c,_line:r})));l.length?(l[0].used=!1,a.log.push({text:`💫 ${l[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const l=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(r=>!r.used);if(l.length){const r=l.sort((n,c)=>F(c,"ATT")-F(n,"ATT"))[0];r.used=!0,a.log.push({text:`❄️ ${r.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}k.from("cards").delete().eq("id",e).then(()=>{}),s&&D(i,a,d)}function vi(e,t,i){const a=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!a.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${ee[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${F(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const o=d.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[s]||[]).find(r=>r.cardId===o);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),D(e,t,i)})})}function Be(e,t,i,a,d){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(n,c)=>`
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
    ${e.map(n=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${ee[n.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${n.portrait?`<img src="${n.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(n.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(o);let l=!1;const r=()=>{l||(l=!0,o.remove(),setTimeout(()=>d(),50))};o.addEventListener("click",r),setTimeout(r,3500)}async function J(e,t,i){var c,p;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=i,d=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,s=d?"victoire":o?"nul":"defaite",l=$t(t.mode,s);t.matchId&&await k.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?a.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const r={credits:(a.profile.credits||0)+l,matches_played:(a.profile.matches_played||0)+1};d?r.wins=(a.profile.wins||0)+1:o?r.draws=(a.profile.draws||0)+1:r.losses=(a.profile.losses||0)+1,await k.from("users").update(r).eq("id",a.profile.id),await i.refreshProfile();const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",n.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${d?"🏆":o?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${d?"Victoire !":o?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${l.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(n),(c=document.getElementById("res-home"))==null||c.addEventListener("click",()=>{n.remove(),i.navigate("home")}),(p=document.getElementById("res-replay"))==null||p.addEventListener("click",()=>{n.remove(),i.navigate("match",{matchMode:t.mode})})}function wi(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ce(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const $i={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function _i(e,t){const{state:i,toast:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await Se(e,t)}async function Se(e,t){const{state:i,toast:a}=t,{data:d}=await k.from("market_listings").select(`id, price, status, listed_at, seller_id,
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
  `;function l(r){const n=document.getElementById("mkt-content"),c=r==="buy"?s:o;if(c.length===0){n.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${r==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune carte en vente."}
      </div>`;return}n.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${c.map(p=>{var b,$,y;const f=(b=p.card)==null?void 0:b.player;if(!f)return"";const u=f.job==="GK"?f.note_g:f.job==="DEF"?f.note_d:f.job==="MIL"?f.note_m:f.note_a,m=$i[f.rarity],x=(i.profile.credits||0)>=p.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px">
          <div style="width:44px;height:44px;border-radius:8px;background:${Ii(f.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${m};flex-shrink:0">${u}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${f.firstname} ${f.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${f.country_code} · ${(($=f.clubs)==null?void 0:$.encoded_name)||"—"} · ${f.rarity} · ${f.job}</div>
            <div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((y=p.seller)==null?void 0:y.pseudo)||"—"}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${p.price.toLocaleString("fr")}</div>
            ${r==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${p.id}" ${x?"":"disabled"} style="margin-top:4px">${x?"Acheter":"Trop cher"}</button>`:`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,n.querySelectorAll("[data-buy]").forEach(p=>{p.addEventListener("click",()=>ki(p.dataset.buy,c,e,t))}),n.querySelectorAll("[data-cancel]").forEach(p=>{p.addEventListener("click",()=>Ei(p.dataset.cancel,e,t))})}l("buy"),e.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(n=>{const c=n===r;n.style.background=c?"var(--green)":"#fff",n.style.color=c?"#fff":"var(--gray-600)",n.style.borderColor=c?"var(--green)":"var(--gray-200)"}),l(r.dataset.tab)})})}async function ki(e,t,i,a){var p;const{state:d,toast:o}=a,s=t.find(f=>f.id===e);if(!s)return;const l=s.price,r=d.profile.credits||0,n=(p=s.card)==null?void 0:p.player;if(r<l){o("Crédits insuffisants","error");return}if(!confirm(`Acheter ${n==null?void 0:n.firstname} ${n==null?void 0:n.surname_encoded} pour ${l.toLocaleString("fr")} crédits ?`))return;const c=document.querySelector(`[data-buy="${e}"]`);c&&(c.disabled=!0,c.textContent="⏳");try{const{error:f}=await k.from("cards").update({owner_id:d.profile.id}).eq("id",s.card.id);if(f)throw new Error("Transfert carte : "+f.message);const{error:u}=await k.from("market_listings").update({status:"sold",buyer_id:d.profile.id,sold_at:new Date().toISOString()}).eq("id",e);if(u)throw new Error("Mise à jour annonce : "+u.message);const{error:m}=await k.from("users").update({credits:r-l}).eq("id",d.profile.id);if(m)throw new Error("Débit acheteur : "+m.message);const{data:x,error:b}=await k.from("users").select("credits").eq("id",s.seller_id).single();!b&&x&&await k.from("users").update({credits:(x.credits||0)+l}).eq("id",s.seller_id),await k.from("notifications").insert({user_id:s.seller_id,type:"card_sold",message:`Ta carte ${(n==null?void 0:n.surname_encoded)||"?"} a été vendue pour ${l.toLocaleString("fr")} crédits !`,data:{card_id:s.card.id,price:l}}).then(()=>{}).catch(()=>{}),d.profile.credits=r-l;const $=document.querySelector("[data-credits]")||document.querySelector(".credits-display");$&&($.textContent=(r-l).toLocaleString("fr")+" cr."),o(`✅ ${n==null?void 0:n.surname_encoded} ajouté à ta collection !`,"success"),Se(i,a)}catch(f){o("❌ "+f.message,"error"),c&&(c.disabled=!1,c.textContent="Acheter")}}async function Ei(e,t,i){const{toast:a}=i,{data:d}=await k.from("market_listings").select("card_id").eq("id",e).single();await k.from("market_listings").update({status:"cancelled"}).eq("id",e),d&&await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id),a("Annonce retirée","success"),Se(t,i)}function Ii(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function Ai(e,{state:t,navigate:i,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await k.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function Ti(e,{state:t,navigate:i,toast:a}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await k.from("matches").select("id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at").or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(o||[]).filter(c=>c.status==="finished"),r=(o||[]).filter(c=>c.status==="in_progress");function n(c){const p=c.home_id===d.id;p?c.home_score:c.away_score,p?c.away_score:c.home_score;const f=c.winner_id===d.id,u=c.home_score===c.away_score&&c.status==="finished",m=c.status!=="finished"?"…":u?"N":f?"V":"D",x=c.status!=="finished"||u?"#888":f?"#1A6B3C":"#c0392b";let b=s[c.mode]||c.mode;c.away_id===null&&!b.startsWith("IA")&&(b="IA");let $="";c.status==="in_progress"&&Date.now()-new Date(c.created_at).getTime()>3600*1e3&&($=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const y=new Date(c.created_at),g=y.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+y.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),v=c.status==="finished"?`${c.home_score} - ${c.away_score}`:`${c.home_score||0} - ${c.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${b}${$}</div>
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
          ${r.map(n).join("")}
        </div>`:""}

      ${l.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${l.map(n).join("")}
        </div>`:""}

      ${(o||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const S={user:null,profile:null,page:"home",params:{}};function ce(e,t="info",i=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},i))}function Li(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Ie(){document.getElementById("modal-overlay").classList.add("hidden")}async function pe(){if(!S.user)return;const{data:e}=await k.from("users").select("*").eq("id",S.user.id).single();e&&(S.profile=e)}const Fe="mw_theme";function me(){return localStorage.getItem(Fe)||"light"}function zi(e){var t;localStorage.setItem(Fe,e),Ae(e),(t=S.profile)!=null&&t.id&&k.from("users").update({theme:e}).eq("id",S.profile.id).then(()=>{})}function Ae(e){document.documentElement.setAttribute("data-theme",e)}function fe(e,t={}){S.page=e,S.params=t,yt()}async function yt(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(a=>{a.classList.toggle("active",a.dataset.page===S.page)});const t=document.getElementById("nav-credits");t&&S.profile&&(t.textContent=`💰 ${(S.profile.credits||0).toLocaleString("fr")}`);const i={state:S,navigate:fe,toast:ce,openModal:Li,closeModal:Ie,refreshProfile:pe};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',S.page){case"home":await Ne(e,i);break;case"collection":await Et(e,i);break;case"decks":await we(e,i);break;case"boosters":await Pt(e,i);break;case"match":await si(e,i);break;case"market":await _i(e,i);break;case"rankings":await Ai(e,i);break;case"matches":await Ti(e,i);break;default:await Ne(e,i)}}function Mi(){const e=document.getElementById("app"),t=S.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(a=>{a.addEventListener("click",d=>{d.preventDefault(),fe(a.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>fe("home")),document.getElementById("nav-credits").addEventListener("click",()=>fe("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const d=me()==="dark"?"light":"dark";zi(d),Ve(d)}),Ve(me())}function Ve(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Ci(){Ae(me()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&Ie()}),document.getElementById("modal-close").addEventListener("click",Ie);const{data:{session:e}}=await k.auth.getSession();if(!e){We(),De(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:ce});return}S.user=e.user,await pe(),We();try{const{data:t}=await k.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(a=>{i[a.formation]=a.links}),ht(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!S.profile){bt(document.getElementById("app"),{state:S,navigate:async()=>{await pe(),Ye()},toast:ce,refreshProfile:pe});return}S.profile.theme&&S.profile.theme!==me()&&(localStorage.setItem(Fe,S.profile.theme),Ae(S.profile.theme)),Ye(),k.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(S.user=null,S.profile=null,document.getElementById("app").innerHTML="",De(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:ce}))})}function Ye(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Mi(),yt()}function We(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}Ci();
