import{s as w,F as Re,b as ve,c as xt,l as xe,d as jt}from"./formation-links-CDBKB_z4.js";function tt(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(l=>{l.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(p=>p.classList.remove("active")),l.classList.add("active"),document.getElementById("tab-login").style.display=l.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=l.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const l=document.getElementById("login-email").value.trim(),p=document.getElementById("login-password").value,n=document.getElementById("login-error");if(n.textContent="",!l||!p){n.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:o}=await w.auth.signInWithPassword({email:l,password:p});if(a.textContent="Se connecter",a.disabled=!1,o){n.textContent=o.message.includes("Invalid")?"Email ou mot de passe incorrect.":o.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",l=>{l.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const l=document.getElementById("reg-email").value.trim(),p=document.getElementById("reg-password").value,n=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!l||!p||!n){a.textContent="Remplissez tous les champs.";return}if(p.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(p!==n){a.textContent="Les mots de passe ne correspondent pas.";return}const o=document.getElementById("reg-btn");o.textContent="Création…",o.disabled=!0;const{error:c}=await w.auth.signUp({email:l,password:p});if(o.textContent="Créer mon compte",o.disabled=!1,c){a.textContent=c.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=l})}function St(e,{state:t,navigate:i,toast:l,refreshProfile:p}){let n="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function o(){var g;const s=document.getElementById("logo-preview"),d=document.getElementById("logo-initials"),r=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",f=r.trim().split(" ").filter(Boolean),u=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():r.slice(0,2).toUpperCase();s&&(s.style.background=a,s.style.borderColor=n),d&&(d.textContent=u,d.style.color=n)}document.getElementById("color1").addEventListener("input",s=>{n=s.target.value,document.getElementById("swatch1").style.background=n,o()}),document.getElementById("color2").addEventListener("input",s=>{a=s.target.value,document.getElementById("swatch2").style.background=a,o()});function c(s){document.querySelectorAll(".setup-step").forEach(d=>d.classList.remove("active")),document.getElementById(`step-${s}`).classList.add("active"),document.getElementById("step-num").textContent=s,document.getElementById("progress-fill").style.width=`${Math.round(s/3*100)}%`,s===3&&o()}document.getElementById("step1-next").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("step1-error");if(d.textContent="",s.length<3){d.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:r}=await w.from("users").select("id").eq("pseudo",s).maybeSingle();if(r){d.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const s=document.getElementById("setup-club").value.trim(),d=document.getElementById("step2-error");if(d.textContent="",s.length<2){d.textContent="Nom trop court (min. 2 caractères).";return}const{data:r}=await w.from("users").select("id").eq("club_name",s).maybeSingle();if(r){d.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("setup-club").value.trim(),r=document.getElementById("step3-error"),f=document.getElementById("step3-finish");r.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:u}=await w.from("users").insert({id:t.user.id,pseudo:s,club_name:d,club_color1:n,club_color2:a,credits:1e4});if(u)throw u;await Bt(t.user.id),await p(),l(`Bienvenue ${s} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(u){r.textContent=u.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function Bt(e){const{data:t}=await w.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,l=i.filter(c=>c.job==="GK"),p=i.filter(c=>c.job!=="GK"),n=[];for(let c=0;c<5;c++){let s=[];if(c===0&&l.length>0){const d=l[Math.floor(Math.random()*l.length)];s.push(d);const r=it([...p]).slice(0,3);s.push(...r)}else s=it([...i]).slice(0,4);s.forEach(d=>{n.push({owner_id:e,player_id:d.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(c=>{n.push({owner_id:e,card_type:"game_changer",gc_type:c})});const o=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];n.push({owner_id:e,card_type:"formation",formation:o[Math.floor(Math.random()*o.length)]}),n.length>0&&await w.from("cards").insert(n),await w.from("users").update({first_booster_opened:!0}).eq("id",e)}function it(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}async function nt(e,{state:t,navigate:i,toast:l}){var a;const p=t.profile;if(!p)return;const{data:n}=await w.from("matches").select("id,home_score,away_score,status,mode,winner_id,created_at").or(`home_id.eq.${p.id},away_id.eq.${p.id}`).eq("status","finished").order("created_at",{ascending:!1}).limit(3);e.innerHTML=`
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
          ${n.map(o=>{const c=o.winner_id===p.id,s=o.home_score===o.away_score,d=s?"N":c?"V":"D",r=s?"#888":c?"#1A6B3C":"#c0392b",f={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat"}[o.mode]||o.mode,g=new Date(o.created_at).toLocaleDateString("fr",{month:"short",day:"numeric"});return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
              <div>
                <div style="font-size:13px;font-weight:600">${f}</div>
                <div style="font-size:11px;color:var(--gray-600)">${g}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <span style="font-size:14px;font-weight:700">${o.home_score} - ${o.away_score}</span>
                <span style="background:${r};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${d}</span>
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
  `,e.querySelectorAll("[data-nav]").forEach(o=>{o.addEventListener("click",c=>{c.preventDefault(),i(o.dataset.nav)})}),(a=document.getElementById("nav-rankings"))==null||a.addEventListener("click",()=>i("rankings")),e.querySelectorAll("[data-action]").forEach(o=>{o.addEventListener("click",()=>{o.classList.add("tapped"),setTimeout(()=>o.classList.remove("tapped"),200);const c=o.dataset.action;if(c==="match-ai"){Ft(i);return}if(c==="match-random"){i("match",{matchMode:"random"});return}l("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await w.auth.signOut(),window.location.reload()})}function Ft(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const l=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",l),i.addEventListener("click",p=>{p.target===i&&l()}),i.querySelectorAll("[data-mode]").forEach(p=>{p.addEventListener("click",()=>{l(),e("match",{matchMode:p.dataset.mode})})})}const ae={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Y(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const ot=["ATT","MIL","DEF","GK"];function Ne(e){let t=0;const i=e.length;for(let l=0;l<i;l++)for(let p=l+1;p<i;p++){const n=e[l],a=e[p];if(!n||!a)continue;const o=n._col!==void 0&&a._col!==void 0&&n._col===a._col,c=n._col!==void 0&&a._col!==void 0&&Math.abs(n._col-a._col)===1,s=ot.indexOf(n._line),d=ot.indexOf(a._line),r=Math.abs(s-d)===1;(n._line===a._line&&c||o&&r)&&(n.country_code&&a.country_code&&n.country_code===a.country_code&&t++,n.club_id&&a.club_id&&n.club_id===a.club_id&&t++)}return t}function Oe(e,t={}){const i=e.reduce((n,a)=>{const o=a._line||a.job;return n+(Number(o==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),l=Ne(e);let p=i+l;return t.doubleAttack&&(p*=2),t.stolenNote&&(p-=t.stolenNote),{base:i,links:l,total:Math.max(0,p)}}function Pe(e,t={}){const i=e.reduce((n,a)=>{const o=a._line||a.job;let c=0;return o==="GK"?c=Number(a.note_g)||0:o==="MIL"?c=Number(a.note_m)||0:c=Number(a.note_d)||0,n+c+(a.boost||0)},0),l=Ne(e);let p=i+l;return t.stolenNote&&(p-=t.stolenNote),{base:i,links:l,total:Math.max(0,p)}}function rt(e){const t=e.reduce((l,p)=>l+Y(p,"MIL"),0),i=Ne(e);return t+i}function He(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function yt(e,t,i="easy"){const l=e.filter(a=>!a.used);if(!l.length)return[];const p=[...l].sort((a,o)=>{const c=t==="attack"?Y(a,"ATT"):a._line==="GK"?Y(a,"GK"):Y(a,"DEF");return(t==="attack"?Y(o,"ATT"):o._line==="GK"?Y(o,"GK"):Y(o,"DEF"))-c});let n=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return p.slice(0,Math.min(n,p.length,3))}function Dt(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const ht={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ie={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},_e=["GK","DEF","MIL","ATT"],Gt=["Tous","GK","DEF","MIL","ATT"],qt={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},Ke={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function vt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ye(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Ce(e,t=""){var r,f;const i=e.player;if(!i)return"";const l=i.job||"ATT",p=Ie[l],n=ht[i.rarity]||"#ccc",a=ye(i,l),o=i.job2?ye(i,i.job2):null,c=i.job2?Ie[i.job2]:null,s=vt(i),d=Ke[i.country_code]||i.country_code||"";return`
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
        ${s?`<img src="${s}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${i.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${d}</div>
        ${(r=i.clubs)!=null&&r.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=i.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function at(e){const t=e.job||"ATT",i=ye(e,t),l=Ke[e.country_code]||e.country_code||"";return`
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
  </div>`}async function Rt(e,t){const{state:i,navigate:l,toast:p,openModal:n,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:c}=await w.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),s=(o||[]).filter(T=>T.card_type==="player"&&T.player),d=(o||[]).filter(T=>T.card_type==="game_changer"),r=(o||[]).filter(T=>T.card_type==="formation"),{data:f}=await w.from("gc_definitions").select("name,gc_type,color,effect,image_url"),u={};(f||[]).forEach(T=>{u[T.name]=T});const g=Object.keys(Re),y=Object.keys(ae),v={};s.forEach(T=>{const L=T.player.id;v[L]=(v[L]||0)+1}),new Set(Object.keys(v).map(T=>String(T)));const E=new Set(r.map(T=>T.formation)),b=new Set(d.map(T=>T.gc_type));let x="player",k="Tous",$="",m=!1;function h(){return[...s].sort((T,L)=>{const S=_e.indexOf(T.player.job),B=_e.indexOf(L.player.job);return S!==B?S-B:(T.player.surname_encoded||"").localeCompare(L.player.surname_encoded||"")})}function _(){return[...c||[]].sort((T,L)=>{const S=_e.indexOf(T.job),B=_e.indexOf(L.job);return S!==B?S-B:(T.surname_encoded||"").localeCompare(L.surname_encoded||"")})}function A(){return h().filter(T=>{const L=T.player,S=k==="Tous"||L.job===k,B=!$||`${L.firstname} ${L.surname_encoded}`.toLowerCase().includes($);return S&&B})}function I(){return _().filter(T=>{const L=k==="Tous"||T.job===k,S=!$||`${T.firstname} ${T.surname_encoded}`.toLowerCase().includes($);return L&&S})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${x==="player"?"var(--green)":"transparent"};
        color:${x==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${s.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${x==="formation"?"var(--green)":"transparent"};
        color:${x==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${r.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${x==="gc"?"var(--green)":"transparent"};
        color:${x==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${d.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function z(){const T=document.getElementById("col-filters");T&&(x==="player"?(T.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${$}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Gt.map(L=>`
            <button class="filter-btn" data-job="${L}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${L===k?"var(--green)":"var(--gray-200)"};
                background:${L===k?"var(--green)":"#fff"};
                color:${L===k?"#fff":"var(--gray-600)"}">
              ${L}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${m?"var(--yellow)":"var(--gray-200)"};
              background:${m?"var(--yellow)":"#fff"};
              color:${m?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${m?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",L=>{$=L.target.value.toLowerCase(),G()}),e.querySelectorAll(".filter-btn").forEach(L=>{L.addEventListener("click",()=>{k=L.dataset.job,z(),G()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{m=!m,z(),G()})):(T.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${m?"var(--yellow)":"var(--gray-200)"};
              background:${m?"var(--yellow)":"#fff"};
              color:${m?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${m?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{m=!m,z(),G()})))}function G(){const T=document.getElementById("col-grid");T&&(x==="player"?q(T):x==="formation"?Z(T):Q(T))}function R(T,L,S,B,C){C=C||"#7a28b8";const N=document.getElementById("col-grid"),M=document.getElementById("col-big");if(!N||!M)return;var V=0;function K(){M.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+L(T[V])+"</div>";var U=M.querySelector("[data-card-id],[data-form-id],[data-gc-id]");U&&U.addEventListener("click",function(){B(T[V])}),requestAnimationFrame(function(){var P=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!P||!M)){var X=M.clientHeight-8,ee=M.clientWidth-24,te=P.offsetHeight,ie=P.offsetWidth;if(te>0&&ie>0&&X>40){var se=Math.min(X/te,ee/ie,1);P.style.transform="scale("+se.toFixed(3)+")",P.style.transformOrigin="top center"}}}),N.innerHTML=T.map(function(P,X){return'<div class="col-mini-item" data-idx="'+X+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(X===V?C:"transparent")+';transition:border-color .15s;overflow:hidden">'+S(P,X===V)+"</div>"}).join(""),N.querySelectorAll(".col-mini-item").forEach(function(P){P.addEventListener("click",function(){V=Number(P.dataset.idx),K(),P.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}K()}function j(T){var L=.54,S=Math.round(140*L),B=Math.round(310*L),C;if(!T||T._fake){var N=T?T.player:null;if(!N)return"";C=at(N)}else C=Ce(T,"");return'<div style="width:'+S+"px;height:"+B+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+L+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+C+"</div></div>"}function D(T,L,S){L=L||100,S=S||140;var B=ve[T]||{},C={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},N=Math.max(3,Math.round(L*.06)),M=Object.entries(B).map(function(K){var U=K[0],P=K[1],X=U.replace(/\d+$/,""),ee=C[X]||"#888",te=Math.round(P.x*L),ie=Math.round(P.y*S);return'<circle cx="'+te+'" cy="'+ie+'" r="'+N+'" fill="'+ee+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),V=Math.max(1,Math.round(L/50));return'<svg viewBox="0 0 '+L+" "+S+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+L+'" height="'+S+'" fill="#1A6B3C"/><rect x="'+Math.round(L*.2)+'" y="'+Math.round(S*.02)+'" width="'+Math.round(L*.6)+'" height="'+Math.round(S*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+V+'"/><line x1="0" y1="'+Math.round(S*.5)+'" x2="'+L+'" y2="'+Math.round(S*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+V+'"/><ellipse cx="'+Math.round(L*.5)+'" cy="'+Math.round(S*.5)+'" rx="'+Math.round(L*.18)+'" ry="'+Math.round(S*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+V+'"/><rect x="'+Math.round(L*.2)+'" y="'+Math.round(S*.82)+'" width="'+Math.round(L*.6)+'" height="'+Math.round(S*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+V+'"/>'+M+"</svg>"}function O(T,L,S){var B=S>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+S+"</div>":"",C=L?'data-form-id="'+L.id+'"':"",N=T.length>7?14:T.length>5?16:19,M=!!L;return"<div "+C+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(M?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(M?"":"filter:grayscale(1);opacity:0.5")+'">'+B+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(M?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+N+"px;font-weight:900;color:"+(M?"#1A6B3C":"#aaa")+';line-height:1">'+T+'</div></div><div style="flex:1;overflow:hidden;background:'+(M?"#1A6B3C":"#ccc")+'">'+D(T,140,220)+"</div></div>"}function F(T,L){var S=.54,B=Math.round(140*S),C=Math.round(305*S),N=Math.round(C*.22),M=C-N,V=T.length>7?5:7,K=D(T,B,M),U=L?"1.5px solid #2a7a40":"1px solid #ddd",P=L?"":"filter:grayscale(1);opacity:0.45;",X=L?"#1A6B3C":"#bbb",ee="#fff";return'<div style="width:'+B+"px;height:"+C+"px;border-radius:6px;border:"+U+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+P+'"><div style="height:'+N+"px;background:"+X+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+V+"px;font-weight:900;color:"+ee+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(B-4)+'px">'+T+'</span></div><div style="height:'+M+'px;overflow:hidden;flex-shrink:0">'+K+"</div></div>"}function q(T){if(m){const L=I();if(!L.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const S=L.map(B=>s.find(C=>C.player.id===B.id)||{_fake:!0,player:B,id:"fake-"+B.id});R(S,B=>B._fake?at(B.player):Ce(B,""),B=>B._fake?j({player:B.player,id:"x",_fake:!0}):j(B),B=>{B._fake||st(B,s,v,t)},"#1A6B3C")}else{const L=A();if(!L.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const S={},B=[];L.forEach(C=>{S[C.player.id]||(S[C.player.id]=!0,B.push(C))}),R(B,C=>{const N=v[C.player.id]||1,M=N>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${N}</div>`:"",K=s.filter(U=>U.player.id===C.player.id&&U.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Ce(C,M+K)},C=>j(C),C=>st(C,s,v,t),"#1A6B3C")}}function Z(T){const L=m?g:[...E];if(!L.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const S=L.map(B=>({formation:B,card:r.find(C=>C.formation===B)||null,owned:E.has(B)}));R(S,({formation:B,card:C,owned:N})=>O(B,N?C:null,N?r.filter(M=>M.formation===B).length:0),({formation:B,owned:C})=>F(B,C),({card:B,owned:C})=>{C&&B&&Ot(B,r,t,n)},"#1A6B3C")}function Q(T){const L=Object.keys(u),S=m?L.length?L:y:[...b];if(!S.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const B=S.map(C=>({type:C,gc:ae[C]||{icon:"⚡",desc:""},def:u[C]||null,owned:b.has(C),card:d.find(N=>N.gc_type===C)||null}));R(B,({type:C,gc:N,def:M,owned:V,card:K})=>{const U=V?d.filter(Ct=>Ct.gc_type===C).length:0,P=U>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${U}</div>`:"",X=(M==null?void 0:M.gc_type)==="ultra_game_changer",ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},te={purple:"#b06ce0",light_blue:"#00d4ef"},ie=ee[M==null?void 0:M.color]||ee.purple,se=te[M==null?void 0:M.color]||te.purple,be=(M==null?void 0:M.effect)||N.desc||"",et=M!=null&&M.image_url?`/manager-wars/icons/${M.image_url}`:null;return V&&K?`<div data-gc-id="${K.id}" data-gc-type="${C}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${se};background:${ie};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${se}66;cursor:pointer">
          ${P}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${C.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${C}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${X?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${et?`<img src="${et}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${N.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${be.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${C}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${N.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:C,gc:N,def:M,owned:V})=>V?(()=>{const K=Math.round(75.60000000000001),U=Math.round(310*.54),P=Math.round(U*.65),X=Math.round(U*.18),ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},te={purple:"#9b59b6",light_blue:"#00bcd4"},ie=ee[M==null?void 0:M.color]||ee.purple,se=te[M==null?void 0:M.color]||te.purple,be=M!=null&&M.image_url?`/manager-wars/icons/${M.image_url}`:null;return`<div style="width:${K}px;height:${U}px;border-radius:8px;background:${ie};border:1px solid ${se};display:flex;flex-direction:column;overflow:hidden"><div style="height:${X}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${K-6}px">${C}</span></div><div style="height:${P}px;display:flex;align-items:center;justify-content:center">${be?`<img src="${be}" style="max-width:${K-8}px;max-height:${P-4}px;object-fit:contain">`:`<span style="font-size:24px">${N.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((M==null?void 0:M.effect)||N.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const K=Math.round(75.60000000000001),U=Math.round(310*.54);return`<div style="width:${K}px;height:${U}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${N.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${C}</span></div>`})(),({type:C,owned:N,def:M})=>{N&&Nt(C,M,n)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(T=>{T.addEventListener("click",()=>{x=T.dataset.tab,k="Tous",$="",m=!1,e.querySelectorAll(".col-tab-btn").forEach(L=>{const S=L.dataset.tab===x;L.style.borderBottomColor=S?"var(--green)":"transparent",L.style.color=S?"var(--green)":"var(--gray-600)"}),z(),G()})}),z(),G()}function Nt(e,t,i){const l=ae[e]||{icon:"⚡",desc:"Effet spécial."},p=(t==null?void 0:t.gc_type)==="ultra_game_changer",n={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},o=n[t==null?void 0:t.color]||n.purple,c=a[t==null?void 0:t.color]||a.purple,s=(t==null?void 0:t.name)||e,d=(t==null?void 0:t.effect)||l.desc,r=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${o};border-radius:16px;border:2px solid ${c};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${p?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${s}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${r?`<img src="${r}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${l.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${d}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ge=1e3;function Ot(e,t,i,l){var y,v,E;const{state:p,toast:n,closeModal:a,navigate:o,refreshProfile:c}=i,s=e.formation,d={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function r(){const b=ve[s]||{},x=Re[s]||[],k=290,$=360,m=20;function h(A){const I=b[A];return I?{x:I.x*k,y:I.y*$}:null}let _=`<svg width="${k}" height="${$}" viewBox="0 0 ${k} ${$}" xmlns="http://www.w3.org/2000/svg">`;for(const[A,I]of x){const z=h(A),G=h(I);!z||!G||(_+=`<line x1="${z.x}" y1="${z.y}" x2="${G.x}" y2="${G.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const A of Object.keys(b)){const I=h(A);if(!I)continue;const z=A.replace(/\d+/,""),G=d[z]||"#555";_+=`<circle cx="${I.x}" cy="${I.y}" r="${m}" fill="${G}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,_+=`<text x="${I.x}" y="${I.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${z}</text>`}return _+="</svg>",_}const f=t.filter(b=>b.formation===s),u=f.length,g=!e.is_for_sale;l(`Formation ${s}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(y=document.getElementById("direct-sell-form-btn"))==null||y.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${s} pour ${ge.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const b=f.find(k=>!k.is_for_sale)||f[0];if(!b){n("Aucune carte à vendre","error");return}const{error:x}=await w.from("cards").delete().eq("id",b.id);if(x){n(x.message,"error");return}await w.from("users").update({credits:(p.profile.credits||0)+ge}).eq("id",p.profile.id),await c(),n(`+${ge.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),o("collection")}),(v=document.getElementById("market-sell-form-btn"))==null||v.addEventListener("click",async()=>{const b=parseInt(document.getElementById("sell-price-form").value);if(!b||b<1){n("Prix invalide","error");return}await w.from("cards").update({is_for_sale:!0,sale_price:b}).eq("id",e.id),await w.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:b}),n("Carte mise en vente sur le marché !","success"),a(),o("collection")}),(E=document.getElementById("cancel-sell-form-btn"))==null||E.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),n("Annonce retirée","success"),a(),o("collection")})}async function st(e,t,i,l){var _,A,I,z,G,R;const{state:p,toast:n,openModal:a,closeModal:o,navigate:c,refreshProfile:s}=l,d=e.player,r=t.filter(j=>j.player.id===d.id),f=r.length,u=qt[d.rarity]||1e3,g=d.rarity!=="legende",y=vt(d),v=ye(d,d.job),E=d.job2?ye(d,d.job2):null,b=Ie[d.job]||"#1A6B3C",x=d.job2?Ie[d.job2]:null,k=ht[d.rarity]||"#ccc",$=Ke[d.country_code]||d.country_code||"",{data:m}=await w.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",d.id).order("transferred_at",{ascending:!0}),h=m&&m.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${m.map(j=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${j.club_name} <span style="color:var(--gray-600)">(${j.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${j.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${j.source==="booster"?"Booster":j.price?j.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";a(`${d.firstname} ${d.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${k};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${d.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(d.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${b}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${b}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${v}</text>
            </svg>
            ${E!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${x}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${E}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${y?`<img src="${y}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${d.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${$}</div>
            ${(_=d.clubs)!=null&&_.logo_url?`<img src="${d.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((A=d.clubs)==null?void 0:A.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${k}">${d.rarity.toUpperCase()}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${d.job}${d.job2?" / "+d.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">NOTES</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;font-size:12px">
            <span>GK <b>${d.note_g||0}</b></span>
            <span>DEF <b>${d.note_d||0}</b></span>
            <span>MIL <b>${d.note_m||0}</b></span>
            <span>ATT <b>${d.note_a||0}</b></span>
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${f}</div>
        </div>
      </div>
    </div>
    ${h}

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
        <input type="number" id="sell-price" min="1" placeholder="Prix en crédits" value="${d.sell_price||5e3}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-btn">Retirer</button>
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(I=document.getElementById("close-detail"))==null||I.addEventListener("click",o),(z=document.getElementById("direct-sell-btn"))==null||z.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${d.surname_encoded} pour ${u.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const j=r.find(O=>!O.is_for_sale)||r[0];if(!j){n("Aucune carte à vendre","error");return}const{error:D}=await w.from("cards").delete().eq("id",j.id);if(D){n(D.message,"error");return}await w.from("users").update({credits:(p.profile.credits||0)+u}).eq("id",p.profile.id),await s(),n(`+${u.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),o(),c("collection")}),(G=document.getElementById("market-sell-btn"))==null||G.addEventListener("click",async()=>{const j=parseInt(document.getElementById("sell-price").value);if(!j||j<1){n("Prix invalide","error");return}await w.from("cards").update({is_for_sale:!0,sale_price:j}).eq("id",e.id),await w.from("market_listings").insert({seller_id:p.profile.id,card_id:e.id,price:j}),n("Carte mise en vente sur le marché !","success"),o(),c("collection")}),(R=document.getElementById("cancel-sell-btn"))==null||R.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),n("Annonce retirée","success"),o(),c("collection")})}const Te={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},re={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ze(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function bt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function _t(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Pt(e,t=44,i=58){var u;const l=e?ze(e):null,p=e?_t(e):null,n=bt(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",o=re[a]||"#555",c={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",s=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,d=Math.round(i*.19),r=Math.round(i*.25),f=i-d-r;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${c};background:${o};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${d}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${l?`<img src="${l}" style="position:absolute;top:${d}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${n?`<img src="${n}" style="width:${r+2}px;height:${r-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${r-4}px">🌍</span>`}
      <span style="font-size:${r-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${s}</span>
      ${p?`<img src="${p}" style="width:${r-4}px;height:${r-4}px;object-fit:contain">`:(u=e==null?void 0:e.clubs)!=null&&u.encoded_name?`<span style="font-size:${Math.max(4,r-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Se(e,t){const{state:i,navigate:l,toast:p}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await w.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!a)return;const{data:o,error:c}=await w.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(c){p(c.message,"error");return}p("Deck créé !","success"),dt(o.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>dt(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const o=prompt("Nouveau nom :",a.dataset.name);if(!o||o===a.dataset.name)return;const{error:c}=await w.from("decks").update({name:o}).eq("id",a.dataset.rename);if(c){p(c.message,"error");return}p("Deck renommé !","success"),Se(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await w.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:o}=await w.from("decks").delete().eq("id",a.dataset.delete);if(o){p(o.message,"error");return}p("Deck supprimé.","success"),Se(e,t)})})}async function dt(e,t,i){const{state:l,toast:p}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await w.from("decks").select("*").eq("id",e).single(),{data:a}=await w.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",l.profile.id),o=(a||[]).filter(u=>u.card_type==="player"&&u.player),c=(a||[]).filter(u=>u.card_type==="formation"),s=c.map(u=>u.formation).filter(Boolean),{data:d}=await w.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let r=n.formation||"4-4-2";s.length>0&&!s.includes(r)&&(r=s[0]);const f={deckId:e,name:n.name,formation:r,formationCardId:n.formation_card_id,slots:{},subs:[],playerCards:o,formationCards:c,availableFormations:s};(d||[]).forEach(u=>{u.is_starter?f.slots[u.position]=u.card_id:f.subs.includes(u.card_id)||f.subs.push(u.card_id)}),pe(t,f,i)}function pe(e,t,i){var c;const{navigate:l}=i;Te[t.formation];const p=lt(t.formation),n=p.filter(s=>t.slots[s]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(Te),o=t.subs.map(s=>t.playerCards.find(d=>d.id===s)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${a.map(s=>`<option value="${s}" ${s===t.formation?"selected":""}>${s}</option>`).join("")}
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
        ${o.map(s=>{const d=s.player;return`<div style="position:relative;flex-shrink:0">
            ${Pt(d,44,58)}
            <button data-remove-sub="${s.id}"
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
  </div>`,Ht(e,t,p,i),document.getElementById("builder-back").addEventListener("click",()=>l("decks")),document.getElementById("formation-select").addEventListener("change",s=>{t.formation=s.target.value;const d=lt(t.formation),r={};d.forEach(f=>{t.slots[f]&&(r[f]=t.slots[f])}),t.slots=r,pe(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>Vt(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(s=>{s.addEventListener("click",()=>{t.subs=t.subs.filter(d=>d!==s.dataset.removeSub),pe(e,t,i)})}),(c=document.getElementById("add-sub-btn"))==null||c.addEventListener("click",()=>{Ut(t,e,i)})}function Ht(e,t,i,l){const p=e.querySelector("#deck-field");if(!p)return;const n=ve[t.formation]||{},a=xt(t.formation)||[],o={};for(const E of i){const b=t.slots[E],x=b?t.playerCards.find(k=>k.id===b):null;o[E]=x?x.player:null}const c=300,s=300,d=48,r=64,f=13,u=16,g=38;function y(E){const b=n[E];return b?{x:b.x*c,y:b.y*s}:null}let v="";for(const[E,b]of a){const x=y(E),k=y(b);if(!x||!k)continue;const $=o[E]?{...o[E],club_id:o[E].club_id,country_code:o[E].country_code,rarity:o[E].rarity}:null,m=o[b]?{...o[b],club_id:o[b].club_id,country_code:o[b].country_code,rarity:o[b].rarity}:null,h=xe($,m);h==="#ff3333"||h==="#cc2222"?v+=`<line x1="${x.x.toFixed(1)}" y1="${x.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}" stroke="${h}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(v+=`<line x1="${x.x.toFixed(1)}" y1="${x.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}" stroke="${h}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,v+=`<line x1="${x.x.toFixed(1)}" y1="${x.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}" stroke="${h}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const E of i){const b=y(E);if(!b)continue;const x=o[E],k=E.replace(/\d+/,""),$=re[k]||"#555",m=(b.x-d/2).toFixed(1),h=(b.y-r/2).toFixed(1),_={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[x==null?void 0:x.rarity]||"#aaa";if(x){const A=ze(x),I=_t(x),z=bt(x.country_code),G=Number(k==="GK"?x.note_g:k==="DEF"?x.note_d:k==="MIL"?x.note_m:x.note_a)||0,R=r-f-u;v+=`<defs><clipPath id="dcp-${E}"><rect x="${m}" y="${(b.y-r/2+f).toFixed(1)}" width="${d}" height="${R}"/></clipPath></defs>`,v+=`<rect x="${m}" y="${h}" width="${d}" height="${r}" rx="5" fill="${$}"/>`,A&&(v+=`<image href="${A}" x="${m}" y="${(b.y-r/2+f).toFixed(1)}" width="${d}" height="${R}" clip-path="url(#dcp-${E})" preserveAspectRatio="xMidYMin slice"/>`),v+=`<rect x="${m}" y="${h}" width="${d}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,v+=`<text x="${b.x.toFixed(1)}" y="${(b.y-r/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(x.surname_encoded||"").slice(0,9)}</text>`;const j=(b.y+r/2-u).toFixed(1);v+=`<rect x="${m}" y="${j}" width="${d}" height="${u}" fill="rgba(255,255,255,0.93)"/>`,z&&(v+=`<image href="${z}" x="${(b.x-21).toFixed(1)}" y="${(b.y+r/2-u+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),v+=`<text x="${b.x.toFixed(1)}" y="${(b.y+r/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${G}</text>`,I&&(v+=`<image href="${I}" x="${(b.x+d/2-14).toFixed(1)}" y="${(b.y+r/2-u+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),v+=`<rect x="${m}" y="${h}" width="${d}" height="${r}" rx="5" fill="none" stroke="${_}" stroke-width="2"/>`}else v+=`<rect x="${m}" y="${h}" width="${d}" height="${r}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,v+=`<text x="${b.x.toFixed(1)}" y="${b.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,v+=`<text x="${b.x.toFixed(1)}" y="${(b.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${k}</text>`;v+=`<rect x="${m}" y="${h}" width="${d}" height="${r}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${E}" style="cursor:pointer"/>`}p.innerHTML=`<svg viewBox="${-g} ${-g} ${c+g*2} ${s+g*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${v}</svg>`,p.querySelectorAll(".deck-slot-hit").forEach(E=>{E.addEventListener("click",()=>Kt(E.dataset.pos,t,e,l))})}function Kt(e,t,i,l){var f,u,g;const{openModal:p,closeModal:n}=l,a=e.replace(/\d+/,""),o=t.slots[e],c=o?t.playerCards.find(y=>y.id===o):null;(f=c==null?void 0:c.player)==null||f.id;const s=new Set;Object.entries(t.slots).forEach(([y,v])=>{var b;if(y===e||!v)return;const E=t.playerCards.find(x=>x.id===v);(b=E==null?void 0:E.player)!=null&&b.id&&s.add(E.player.id)}),t.subs.forEach(y=>{var E;const v=t.playerCards.find(b=>b.id===y);(E=v==null?void 0:v.player)!=null&&E.id&&s.add(v.player.id)});const d=new Set,r=t.playerCards.filter(y=>{const v=y.player;return!(v.job===a||v.job2===a)||s.has(v.id)||d.has(v.id)?!1:(d.add(v.id),!0)});r.sort((y,v)=>{const E=a==="GK"?y.player.note_g:a==="DEF"?y.player.note_d:a==="MIL"?y.player.note_m:y.player.note_a;return(a==="GK"?v.player.note_g:a==="DEF"?v.player.note_d:a==="MIL"?v.player.note_m:v.player.note_a)-E}),p(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${r.length>0?r.map(y=>{var k,$;const v=y.player,E=a==="GK"?v.note_g:a==="DEF"?v.note_d:a==="MIL"?v.note_m:v.note_a,b=ze(v),x={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[v.rarity];return`<div class="player-option" data-card-id="${y.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${re[a]}">
            ${b?`<img src="${b}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${re[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${v.firstname} ${v.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${v.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${v.country_code}">
              ${(k=v.clubs)!=null&&k.logo_url?`<img src="${v.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${(($=v.clubs)==null?void 0:$.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${v.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${re[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${x};flex-shrink:0">
            ${E}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(u=document.getElementById("close-selector"))==null||u.addEventListener("click",n),(g=document.getElementById("remove-player"))==null||g.addEventListener("click",()=>{delete t.slots[e],n(),pe(i,t,l)}),document.querySelectorAll(".player-option").forEach(y=>{y.addEventListener("click",()=>{t.slots[e]=y.dataset.cardId,n(),pe(i,t,l)})})}function Ut(e,t,i){var c;const{openModal:l,closeModal:p}=i,n=new Set;Object.values(e.slots).filter(Boolean).forEach(s=>{var r;const d=e.playerCards.find(f=>f.id===s);(r=d==null?void 0:d.player)!=null&&r.id&&n.add(d.player.id)}),e.subs.forEach(s=>{var r;const d=e.playerCards.find(f=>f.id===s);(r=d==null?void 0:d.player)!=null&&r.id&&n.add(d.player.id)});const a=new Set,o=e.playerCards.filter(s=>{var d,r,f;return n.has((d=s.player)==null?void 0:d.id)||a.has((r=s.player)==null?void 0:r.id)?!1:(a.add((f=s.player)==null?void 0:f.id),!0)});l("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${o.length>0?o.map(s=>{var u;const d=s.player,r=ze(d),f=d.job==="GK"?d.note_g:d.job==="DEF"?d.note_d:d.job==="MIL"?d.note_m:d.note_a;return`<div class="player-option" data-card-id="${s.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${re[d.job]}">
            ${r?`<img src="${r}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${d.firstname} ${d.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${d.job} · ${d.country_code} · ${((u=d.clubs)==null?void 0:u.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${re[d.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",p),document.querySelectorAll(".player-option").forEach(s=>{s.addEventListener("click",()=>{e.subs.push(s.dataset.cardId),p(),pe(t,e,i)})})}async function Vt(e,t){const{state:i,toast:l,navigate:p}=t,n=e.formationCards.find(c=>c.formation===e.formation),a=(n==null?void 0:n.id)||e.formationCardId;await w.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await w.from("deck_cards").delete().eq("deck_id",e.deckId);const o=[];if(Object.entries(e.slots).forEach(([c,s],d)=>{o.push({deck_id:e.deckId,card_id:s,position:c,is_starter:!0,slot_order:d})}),e.subs.forEach((c,s)=>{o.push({deck_id:e.deckId,card_id:c,position:`SUB${s+1}`,is_starter:!1,slot_order:100+s})}),o.length>0){const{error:c}=await w.from("deck_cards").insert(o);if(c){l(c.message,"error");return}}l("Deck enregistré ✅","success"),p("decks")}function lt(e){const t=Te[e]||Te["4-4-2"],i=["GK1"];for(let l=1;l<=t.DEF;l++)i.push(`DEF${l}`);for(let l=1;l<=t.MIL;l++)i.push(`MIL${l}`);for(let l=1;l<=t.ATT;l++)i.push(`ATT${l}`);return i}const Yt="modulepreload",Wt=function(e){return"/manager-wars/"+e},ct={},Xt=function(t,i,l){let p=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));p=Promise.allSettled(i.map(c=>{if(c=Wt(c),c in ct)return;ct[c]=!0;const s=c.endsWith(".css"),d=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":Yt,s||(r.as="script"),r.crossOrigin="",r.href=c,o&&r.setAttribute("nonce",o),document.head.appendChild(r),s)return new Promise((f,u)=>{r.addEventListener("load",f),r.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return p.then(a=>{for(const o of a||[])o.status==="rejected"&&n(o.reason);return t().catch(n)})};async function wt(){const{data:e}=await w.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await w.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(l=>l.booster_id===i.id)}))}function Jt(e){if(!(e!=null&&e.length))return null;const t=e.reduce((l,p)=>l+Number(p.percentage),0);let i=Math.random()*t;for(const l of e)if(i-=Number(l.percentage),i<=0)return l;return e[e.length-1]}const Zt=Object.freeze(Object.defineProperty({__proto__:null,loadActiveBoosters:wt,rollDropRate:Jt},Symbol.toStringTag,{value:"Module"})),$t=()=>Object.keys(ve),Qt=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Be={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ei(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const ti={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ii={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};function ni(e){var p;const t={};(e.rates||[]).forEach(n=>{t[n.card_type]=(t[n.card_type]||0)+Number(n.percentage||0)});const i=((p=Object.entries(t).sort((n,a)=>a[1]-n[1])[0])==null?void 0:p[0])||"player",l=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+l,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function oi(e,{state:t,navigate:i,toast:l}){var a;const p=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let n=[];try{n=(await wt()).map(ni)}catch(o){console.warn("Erreur chargement boosters DB, fallback hardcodé",o)}n.length||(n=Qt.map(o=>({...o,rates:[],isPub:o.id==="players_pub"}))),e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(o=>{o.addEventListener("click",async()=>{const c=n.find(s=>s.id===o.dataset.booster);if(c){o.style.opacity="0.5",o.style.pointerEvents="none";try{await ri(c,{state:t,toast:l,navigate:i,container:e})}catch(s){l(s.message,"error"),o.style.opacity="",o.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(o=>{o.addEventListener("click",c=>{c.stopPropagation();const s=n.find(d=>d.id===o.dataset.boosterId);fi(s)})})}async function ri(e,{state:t,toast:i,navigate:l,container:p}){if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await xi()}catch(r){i(r.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:n}=await w.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((n||[]).filter(r=>r.card_type==="player").map(r=>r.player_id)),o=new Set((n||[]).filter(r=>r.card_type==="formation").map(r=>r.formation));let c=[];const s=e.type||"player";s==="player"?c=await li(t.profile,e.cardCount,e.cost):s==="game_changer"?c=await ci(t.profile,e.cardCount,e.cost):s==="formation"?c=await pi(t.profile,e.cost):c=await di(t.profile,e),c.forEach(r=>{r.card_type==="player"&&r.player?r.isDuplicate=a.has(r.player.id):r.card_type==="formation"&&(r.isDuplicate=o.has(r.formation))});const{data:d}=await w.from("users").select("*").eq("id",t.profile.id).single();d&&(t.profile=d),ui(c,e,l)}function ai(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function de(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function si(e,t){let i;switch(t){case"legende":i=e.filter(l=>l.rarity==="legende"),i.length||(i=e.filter(l=>l.rarity==="pepite"||l.rarity==="papyte")),i.length||(i=e.filter(l=>de(l)>=6));break;case"special":i=e.filter(l=>l.rarity==="pepite"||l.rarity==="papyte"),i.length||(i=e.filter(l=>de(l)>=6));break;case"normal_high":i=e.filter(l=>l.rarity==="normal"&&de(l)>=6),i.length||(i=e.filter(l=>de(l)>=6));break;default:i=e.filter(l=>l.rarity==="normal"&&de(l)>=1&&de(l)<=5),i.length||(i=e.filter(l=>l.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function di(e,t){if(t.cost>0){const{error:p}=await w.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(p)throw p}const{rollDropRate:i}=await Xt(async()=>{const{rollDropRate:p}=await Promise.resolve().then(()=>Zt);return{rollDropRate:p}},void 0),l=[];for(let p=0;p<(t.cardCount||5);p++){const n=i(t.rates);if(n){if(n.card_type==="player"){let a=w.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);n.rarity&&(a=a.eq("rarity",n.rarity));const{data:o}=await a;let c=o||[];if((n.note_min||n.note_max)&&(c=c.filter(r=>{const f=Math.max(Number(r.note_g)||0,Number(r.note_d)||0,Number(r.note_m)||0,Number(r.note_a)||0);return(!n.note_min||f>=n.note_min)&&(!n.note_max||f<=n.note_max)})),c.length||(n.note_min||n.note_max?(c=o||[],console.warn("[Booster] Aucun joueur avec note",n.note_min,"-",n.note_max,"— fallback rareté uniquement")):c=o||[]),!c.length)continue;const s=c[Math.floor(Math.random()*c.length)],{data:d}=await w.from("cards").insert({owner_id:e.id,player_id:s.id,card_type:"player"}).select().single();d&&(l.push({...d,player:s}),w.rpc("record_transfer",{p_card_id:d.id,p_player_id:s.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(n.card_type==="game_changer"){const{data:a}=await w.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),o=a!=null&&a.length?a:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],s=o[Math.floor(Math.random()*o.length)].name,{data:d}=await w.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:s}).select().single();d&&l.push(d)}else if(n.card_type==="formation"){const a=$t(),o=a[Math.floor(Math.random()*a.length)],{data:c}=await w.from("cards").insert({owner_id:e.id,card_type:"formation",formation:o}).select();c!=null&&c[0]&&l.push(c[0])}}}return l}async function li(e,t,i){if(i>0){const{error:s}=await w.from("users").update({credits:e.credits-i}).eq("id",e.id);if(s)throw s}const{data:l}=await w.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(l!=null&&l.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const p=l.filter(s=>s.job==="GK"),n=l.filter(s=>s.job!=="GK"),a=!e.first_booster_opened&&p.length>0,o=[];for(let s=0;s<t;s++){const d=s===0&&a?p:s===0?n:l,r=ai(),f=si(d,r);f&&o.push(f)}a&&await w.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await w.from("cards").insert(o.map(s=>({owner_id:e.id,player_id:s.id,card_type:"player"}))).select();return(c||[]).forEach((s,d)=>{w.rpc("record_transfer",{p_card_id:s.id,p_player_id:o[d].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),o.map((s,d)=>({...c[d],player:s}))}async function ci(e,t,i){const{error:l}=await w.from("users").update({credits:e.credits-i}).eq("id",e.id);if(l)throw l;const{data:p}=await w.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),n=p!=null&&p.length?p:Object.keys(Be).map(d=>({name:d,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const d=n[Math.floor(Math.random()*n.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:d.name,gc_definition_id:d.id||null}}),{data:o,error:c}=await w.from("cards").insert(a).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(o||[]).map(d=>{const r=p==null?void 0:p.find(f=>f.name===d.gc_type||f.id===d.gc_definition_id);return{...d,_gcDef:r||null}})}async function pi(e,t){const{error:i}=await w.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const l=$t(),p=l[Math.floor(Math.random()*l.length)],{data:n,error:a}=await w.from("cards").insert({owner_id:e.id,card_type:"formation",formation:p}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),n||[]}function ui(e,t,i){var f;if(!e||e.length===0){const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",u.innerHTML=`
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
  `,document.body.appendChild(l);let p=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(p)return;p=!0;const u=document.getElementById("pack-visual");u.classList.add("shaking"),setTimeout(()=>{u.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",a(0)},600)},500)});let n=0;function a(u){n=u;const g=document.getElementById("reveal-phase");g.style.display="flex",o(u)}function o(u){var m;const g=e[u],y=document.getElementById("card-counter"),v=document.getElementById("single-card-slot"),E=document.getElementById("card-tap-hint");y&&(y.textContent=`Carte ${u+1} / ${e.length}`),E&&(E.textContent=u<e.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const b=pt(g),x=g.card_type==="player"&&((m=g.player)==null?void 0:m.rarity)==="legende";v.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${x?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${b}
        ${g.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,x&&d();const k=document.getElementById("current-card-wrap");let $=!1;k.addEventListener("click",()=>{if($)return;$=!0;const h=u+1;h<e.length?(k.style.transition="all 0.25s ease",k.style.transform="translateX(-120%) rotate(-15deg)",k.style.opacity="0",setTimeout(()=>o(h),250)):c()})}function c(){r(),document.getElementById("reveal-phase").style.display="none";const u=document.getElementById("recap-phase");u.style.display="flex";const g=document.getElementById("recap-grid");g.innerHTML=e.map((y,v)=>`
      <div class="recap-card" style="--i:${v};animation-delay:${v*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${pt(y)}
        ${y.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let s=null;function d(){const u=document.getElementById("fireworks-canvas");if(!u)return;u.width=window.innerWidth,u.height=window.innerHeight;const g=u.getContext("2d"),y=[];function v(){const b=Math.random()*u.width,x=Math.random()*u.height*.6,k=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],$=k[Math.floor(Math.random()*k.length)];for(let m=0;m<60;m++){const h=Math.PI*2/60*m,_=2+Math.random()*5;y.push({x:b,y:x,vx:Math.cos(h)*_,vy:Math.sin(h)*_,alpha:1,color:$,size:2+Math.random()*3})}}v(),s=setInterval(v,600);function E(){if(document.getElementById("fireworks-canvas")){g.clearRect(0,0,u.width,u.height);for(let b=y.length-1;b>=0;b--){const x=y[b];if(x.x+=x.vx,x.y+=x.vy+.08,x.vy*=.98,x.alpha-=.018,x.alpha<=0){y.splice(b,1);continue}g.globalAlpha=x.alpha,g.fillStyle=x.color,g.beginPath(),g.arc(x.x,x.y,x.size,0,Math.PI*2),g.fill()}g.globalAlpha=1,(s!==null||y.length>0)&&requestAnimationFrame(E)}}E()}function r(){s!==null&&(clearInterval(s),s=null);const u=document.getElementById("fireworks-canvas");u&&u.getContext("2d").clearRect(0,0,u.width,u.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{r(),l.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{r(),l.remove(),i("boosters")})}function pt(e){var t,i,l,p;if(e.card_type==="player"&&e.player){const n=e.player,a=n.job||"ATT",o=ti[a]||"#1A6B3C",c=ii[n.rarity]||"#ccc",s=a==="GK"?n.note_g:a==="DEF"?n.note_d:a==="MIL"?n.note_m:n.note_a,d=ei(n),r={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[n.country_code]||n.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${c};overflow:hidden;display:flex;flex-direction:column">
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
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${s||0}</text>
        </svg>
      </div>
      <!-- Portrait -->
      <div style="flex:1;overflow:hidden;background:#b8d4f0">
        ${d?`<img src="${d}" style="width:100%;height:100%;object-fit:cover;object-position:center top" onerror="this.style.display='none'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;height:26px">
        <img src="https://flagsapi.com/${n.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:1px;color:#555;text-transform:uppercase">${r}</div>
        ${(t=n.clubs)!=null&&t.logo_url?`<img src="${n.clubs.logo_url}" style="width:20px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:700">${(((i=n.clubs)==null?void 0:i.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>`}if(e.card_type==="game_changer"){const n=e._gcDef,a=(n==null?void 0:n.gc_type)==="ultra_game_changer",o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},c={purple:"#b06ce0",light_blue:"#00d4ef"},s=o[n==null?void 0:n.color]||o.purple,d=c[n==null?void 0:n.color]||c.purple,r=(n==null?void 0:n.name)||e.gc_type||"Game Changer",f=(n==null?void 0:n.effect)||((l=Be[e.gc_type])==null?void 0:l.desc)||"",u=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,g=((p=Be[e.gc_type])==null?void 0:p.icon)||"⚡";return`<div style="width:170px;height:240px;background:${s};border-radius:14px;border:3px solid ${d};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${d}88;flex-shrink:0">
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const mi="simulation",kt="VOTRE_ZONE_ID";function xi(){switch(mi){case"propellerads":return yi();case"adsense":return hi();default:return Ue()}}function Ue(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const l=setInterval(()=>{i--;const p=document.getElementById("ad-cd"),n=document.getElementById("ad-skip");p&&(p.textContent=i),n&&(n.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(l),n&&(n.disabled=!1,n.style.cssText=n.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),n==null||n.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function yi(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(Ue());window.propeller.push({zone_id:kt,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function hi(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(Ue());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:kt,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const ue={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},fe={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Et(e,t,i,l,p){var n;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${l}</button>
    </div>
  </div>`,(n=document.getElementById("msg-btn"))==null||n.addEventListener("click",p)}function J(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function oe(e){var i,l;const t=e.player;return{cardId:e.id,id:t.id,firstname:t.firstname,name:t.surname_encoded,country_code:t.country_code,club_id:t.club_id,job:t.job,job2:t.job2,note_g:Number(t.note_g)||0,note_d:Number(t.note_d)||0,note_m:Number(t.note_m)||0,note_a:Number(t.note_a)||0,rarity:t.rarity,skin:t.skin,hair:t.hair,hair_length:t.hair_length,clubName:((i=t.clubs)==null?void 0:i.encoded_name)||null,clubLogo:((l=t.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ve(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function vi(){const e=Math.random()*100;return e<.1?4:e<5?3:e<20?2:1}function Le(e,t){const i=ue[t]||ue["4-4-2"],l={GK:[],DEF:[],MIL:[],ATT:[]},p=[...e];for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let c=0;c<i[n];c++){let s=p.findIndex(d=>d.job===n);if(s===-1&&(s=p.findIndex(d=>d.job2===n)),s===-1&&(s=0),p[s]){const d={...p[s],_line:n};a.push(d),p.splice(s,1)}}const o=Ve(a.length);a.forEach((c,s)=>{c._col=o[s]}),l[n]=a}return l}async function bi(e,t){var a,o;const{data:i}=await w.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return _i(e);const l=ue[e]||ue["4-4-2"],p={GK:[],DEF:[],MIL:[],ATT:[]},n=[...i];for(const c of["GK","DEF","MIL","ATT"]){const s=n.filter(g=>g.job===c),d=n.filter(g=>g.job!==c),r=[...s,...d],f=[];for(let g=0;g<l[c];g++){const y=r[g]||n[g];y&&f.push({cardId:"ai-"+y.id+"-"+g,id:y.id,firstname:y.firstname,name:y.surname_encoded,country_code:y.country_code,club_id:y.club_id,job:y.job,job2:y.job2,note_g:Number(y.note_g)||0,note_d:Number(y.note_d)||0,note_m:Number(y.note_m)||0,note_a:Number(y.note_a)||0,rarity:y.rarity,skin:y.skin,hair:y.hair,hair_length:y.hair_length,clubName:((a=y.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((o=y.clubs)==null?void 0:o.logo_url)||null,boost:0,used:!1,_line:c})}const u=Ve(f.length);f.forEach((g,y)=>{g._col=u[y]}),p[c]=f}return p}function _i(e){const t=ue[e]||ue["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},l=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let p=0;for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let c=0;c<t[n];c++){const s=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+p,id:"fake-"+p,firstname:"IA",name:l[p%l.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?s:2,note_d:n==="DEF"?s:2,note_m:n==="MIL"?s:2,note_a:n==="ATT"?s:2,rarity:"normal",boost:0,used:!1,_line:n}),p++}const o=Ve(a.length);a.forEach((c,s)=>{c._col=o[s]}),i[n]=a}return i}function wi(e){let t=e.nextElementSibling;for(;t;)t.dataset.matchHidden||(t.dataset.matchHidden=t.style.display||"flex",t.style.display="none"),t=t.nextElementSibling}function ne(e){let t=e.nextElementSibling;for(;t;)t.dataset.matchHidden&&(t.style.display=t.dataset.matchHidden==="none"?"":t.dataset.matchHidden,delete t.dataset.matchHidden),t=t.nextElementSibling}async function $i(e,t,i,l,p,n){var v;const{state:a,navigate:o,toast:c}=t;let s=!1,d=null;e.style.overflow="hidden",e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler la recherche</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const r=()=>document.getElementById("mm-status"),f=async(E=!0)=>{s=!0,d&&(w.removeChannel(d),d=null),E&&await w.rpc("cancel_matchmaking",{p_user_id:a.profile.id}).catch(()=>{})};(v=document.getElementById("mm-cancel"))==null||v.addEventListener("click",async()=>{try{await f(!0)}catch(E){console.warn("[Matchmaking] cleanup error:",E)}ne(e),o("home")});const u=async(E,b,x)=>{s||(s=!0,d&&(w.removeChannel(d),d=null),r()&&(r().textContent="Adversaire trouvé !"),await new Promise(k=>setTimeout(k,600)),e.isConnected!==!1&&ki(e,t,E,x))},{data:g,error:y}=await w.rpc("try_matchmake",{p_user_id:a.profile.id,p_deck_id:i});if(y||!(g!=null&&g.success)){c("Erreur de matchmaking","error"),ne(e),o("home");return}if(g.matched){u(g.match_id,g.opponent_id,!1);return}r()&&(r().textContent="En attente d'un autre joueur..."),d=w.channel("matchmaking-"+a.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${a.profile.id}`},E=>{const b=E.new;b.status==="matched"&&b.match_id&&u(b.match_id,b.matched_with,!0)}).subscribe()}async function ki(e,t,i,l){const{state:p,navigate:n,toast:a}=t,o=l?"p1":"p2",c=l?"p2":"p1";e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation du match...</div>';const{data:s}=await w.from("matches").select("*").eq("id",i).single();if(!s){a("Match introuvable","error"),n("home");return}async function d(){const[{data:$},{data:m},{data:h},{data:_},{data:A},{data:I}]=await Promise.all([w.from("decks").select("formation,name").eq("id",s.home_deck_id).single(),w.from("deck_cards").select("position,is_starter,slot_order,card:cards(id,card_type,formation,player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)))").eq("deck_id",s.home_deck_id).order("slot_order"),w.from("decks").select("formation,name").eq("id",s.away_deck_id).single(),w.from("deck_cards").select("position,is_starter,slot_order,card:cards(id,card_type,formation,player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)))").eq("deck_id",s.away_deck_id).order("slot_order"),w.from("users").select("id,pseudo,club_name").eq("id",s.home_id).single(),w.from("users").select("id,pseudo,club_name").eq("id",s.away_id).single()]),z=(m||[]).filter(F=>{var q;return F.is_starter&&((q=F.card)==null?void 0:q.player)}).map(F=>oe(F.card)),G=(_||[]).filter(F=>{var q;return F.is_starter&&((q=F.card)==null?void 0:q.player)}).map(F=>oe(F.card)),R=(m||[]).filter(F=>{var q;return!F.is_starter&&((q=F.card)==null?void 0:q.player)}).map(F=>oe(F.card)),j=(_||[]).filter(F=>{var q;return!F.is_starter&&((q=F.card)==null?void 0:q.player)}).map(F=>oe(F.card)),D=($==null?void 0:$.formation)||"4-4-2",O=(h==null?void 0:h.formation)||"4-4-2";return{p1Team:Le(z,D),p2Team:Le(G,O),p1Subs:R,p2Subs:j,p1Formation:D,p2Formation:O,p1Name:(A==null?void 0:A.club_name)||(A==null?void 0:A.pseudo)||"Joueur 1",p2Name:(I==null?void 0:I.club_name)||(I==null?void 0:I.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"gc-select",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:[],gc_p2:[],gcReady_p1:!1,gcReady_p2:!1,usedGc_p1:[],usedGc_p2:[],lastActionAt:new Date().toISOString()}}let r=s.game_state&&Object.keys(s.game_state).length?s.game_state:null;if(!r)if(l){r=await d();const{data:$}=await w.from("matches").select("game_state").eq("id",i).single();!($!=null&&$.game_state)||!Object.keys($.game_state).length?await w.from("matches").update({game_state:r,turn_user_id:s.home_id}).eq("id",i):r=$.game_state}else{e.innerHTML=`<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation avec l'adversaire...</div>`;for(let $=0;$<30&&!r;$++){await new Promise(h=>setTimeout(h,400));const{data:m}=await w.from("matches").select("game_state").eq("id",i).single();m!=null&&m.game_state&&Object.keys(m.game_state).length&&(r=m.game_state)}if(!r){a("Erreur de synchronisation","error"),n("home");return}}const f=w.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},$=>{const m=$.new;m.game_state&&(r=m.game_state,y()),(m.status==="finished"||m.forfeit)&&y()}).subscribe();async function u($){Object.assign(r,$),r.lastActionAt=new Date().toISOString(),await w.from("matches").update({game_state:r}).eq("id",i),y()}async function g(){const $=l?s.away_id:s.home_id;await w.from("matches").update({status:"finished",forfeit:!0,winner_id:$}).eq("id",i),w.removeChannel(f),ne(e),n("home")}function y(){var D,O;const $=r[o+"Team"];r[c+"Team"];const m=r[o+"Score"],h=r[c+"Score"],_=r[o+"Name"],A=r[c+"Name"];if(r.phase==="gc-select")return v();if(r.phase==="midfield")return E();if(r.phase==="finished")return b();const I=r.phase===o+"-attack",z=r.phase===o+"-defense",G=r.phase===c+"-attack"||r.phase===c+"-defense",R=r["selected_"+o]||[],j=new Set(R.map(F=>F.cardId));if(e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
      <!-- Score -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:rgba(0,0,0,0.25);flex-shrink:0">
        <button id="pvp-quit" style="background:rgba(220,53,69,0.9);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer">✕</button>
        <div style="flex:1;text-align:center;color:#fff;font-size:14px;font-weight:700">
          ${_} <span style="color:#FFD700;font-size:18px">${m}</span> – <span style="color:#FFD700;font-size:18px">${h}</span> ${A}
        </div>
        <div style="width:32px"></div>
      </div>

      <!-- Indicateur tour -->
      <div style="text-align:center;padding:4px;background:rgba(0,0,0,0.15);font-size:11px;color:${G?"rgba(255,255,255,0.4)":"#FFD700"};font-weight:700;flex-shrink:0">
        ${G?`⏳ Tour de ${A}`:I?"⚔️ À vous d'attaquer !":z?"🛡️ À vous de défendre !":""}
      </div>

      <!-- Zone centrale : terrain -->
      <div style="display:flex;flex:1;min-height:0;overflow:hidden">
        <div style="overflow:hidden;min-width:0;flex:1;min-height:0" id="match-field">
          <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
            ${We($,r[o+"Formation"],I?"attack":z?"defense":"idle",j,300,300)}
          </div>
        </div>
      </div>

      <!-- Zone bas : bouton action -->
      <div style="display:flex;align-items:stretch;padding:8px;background:rgba(0,0,0,0.35);gap:6px;flex-shrink:0">
        <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:3px">
          ${I?`<button id="pvp-action" style="padding:14px;border-radius:14px;background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer" ${R.length===0?'disabled style="opacity:0.45"':""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:z?`<button id="pvp-action" style="padding:14px;border-radius:14px;background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer" ${R.length===0?'disabled style="opacity:0.45"':""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:'<div style="padding:14px;border-radius:14px;background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.4);text-align:center;font-size:13px">⏳ En attente...</div>'}
          ${I||z?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center">${R.length}/3 sélectionné(s)</div>`:""}
        </div>
      </div>
    </div>`,e.querySelectorAll(".match-slot-hit").forEach(F=>{F.addEventListener("click",()=>{if(!I&&!z)return;const q=F.dataset.cardId,Z=F.dataset.role,Q=($[Z]||[]).find(S=>S.cardId===q);if(!Q||Q.used)return;const T=r["selected_"+o],L=T.findIndex(S=>S.cardId===q);L>-1?T.splice(L,1):T.length<3&&T.push({...Q,_role:Z}),y()})}),(D=e.querySelector("#pvp-action"))==null||D.addEventListener("click",()=>{I?x():z&&k()}),(O=e.querySelector("#pvp-quit"))==null||O.addEventListener("click",()=>{confirm("Quitter le match ? Vous perdrez par forfait.")&&g()}),r._timerInt&&(clearInterval(r._timerInt),r._timerInt=null),I||z){let F=30,q=!1;const Z=()=>document.getElementById("pvp-timer"),Q=()=>{Z()&&(Z().textContent=F+"s",Z().style.color=q?"#ff4444":"#fff")};Q(),r._timerInt=setInterval(()=>{F--,F<=15&&!q&&(q=!0),Q(),F<=0&&(clearInterval(r._timerInt),r._timerInt=null,g())},1e3)}}function v(){var A;const $=r["gcReady_"+o],m=r["gcReady_"+c],h=r["gc_"+o]||[],_=3;e.style.overflow="hidden",e.innerHTML=`
    <div style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <div style="text-align:center;padding:14px 16px 6px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Avant le match</div>
        <div style="font-size:18px;font-weight:900;color:#fff">Choisis tes Game Changers</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:2px">${h.length}/${_} sélectionnée(s)</div>
      </div>
      ${$?`
      <div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px">
        <div style="font-size:32px">✅</div>
        <div style="color:#fff;font-size:14px">Prêt ! ${m?"Adversaire aussi.":`En attente de ${r[c+"Name"]}...`}</div>
      </div>`:`
      <div id="pvp-gc-grid" style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px"></div>
      <div style="padding:10px 16px 14px;flex-shrink:0">
        <button id="pvp-gc-validate" style="width:100%;padding:14px;border-radius:14px;border:none;background:linear-gradient(135deg,#5a0a9a,#9a28e8);color:#fff;font-size:15px;font-weight:900;cursor:pointer">
          ${h.length?`⚡ Valider (${h.length} GC)`:"▶ Continuer sans GC"}
        </button>
      </div>`}
    </div>`,!$&&(w.from("cards").select("id,gc_type").eq("owner_id",o==="p1"?s.home_id:s.away_id).eq("card_type","game_changer").then(({data:I})=>{const z=new Set,G=(I||[]).filter(j=>z.has(j.gc_type)?!1:(z.add(j.gc_type),!0)),R=document.getElementById("pvp-gc-grid");if(R){if(!G.length){R.innerHTML='<div style="color:rgba(255,255,255,0.4);font-size:13px;text-align:center;margin-top:30px">Aucune carte Game Changer disponible.</div>';return}R.innerHTML=G.map(j=>{const D=h.includes(j.id),O=(ae[j.gc_type]||{}).icon||"⚡";return`<div class="pvp-gc-card" data-id="${j.id}" style="width:90px;padding:10px 6px;border-radius:10px;border:3px solid ${D?"#FFD700":"#9b59b6"};background:linear-gradient(135deg,#3d0a7a,#7a28b8);text-align:center;cursor:pointer">
            <div style="font-size:26px">${O}</div>
            <div style="font-size:9px;color:#fff;font-weight:700;margin-top:4px">${j.gc_type}</div>
          </div>`}).join(""),R.querySelectorAll(".pvp-gc-card").forEach(j=>{j.addEventListener("click",()=>{const D=j.dataset.id,O=r["gc_"+o],F=O.indexOf(D);F>-1?O.splice(F,1):O.length<_&&O.push(D),y()})})}}),(A=e.querySelector("#pvp-gc-validate"))==null||A.addEventListener("click",async()=>{await u({["gcReady_"+o]:!0}),r["gcReady_"+c]&&await u({phase:"midfield"})}))}function E(){const $=r.p1Team.MIL||[],m=r.p2Team.MIL||[],h=rt($),_=rt(m);e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
      <div style="display:flex;align-items:center;gap:20px">
        <div style="text-align:center"><div style="font-size:13px;color:#fff">${r.p1Name}</div><div style="font-size:40px;font-weight:900;color:#FFD700">${h}</div></div>
        <div style="font-size:14px;color:rgba(255,255,255,0.4)">VS</div>
        <div style="text-align:center"><div style="font-size:13px;color:#fff">${r.p2Name}</div><div style="font-size:40px;font-weight:900;color:#FFD700">${_}</div></div>
      </div>
      <div style="color:rgba(255,255,255,0.5);font-size:13px">Calcul en cours...</div>
    </div>`,o==="p1"&&setTimeout(async()=>{const I=h>=_?"p1":"p2";await u({phase:I+"-attack",attacker:I,round:1})},1800)}function b(){var A;const $=r[o+"Score"],m=r[c+"Score"],h=$>m,_=$===m;e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${h?"🏆":_?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${h?"Victoire !":_?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${$} - ${m}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour à l'accueil</button>
    </div>`,(A=document.getElementById("pvp-home"))==null||A.addEventListener("click",()=>{w.removeChannel(f),ne(e),n("home")})}async function x(){const $=(r["selected_"+o]||[]).map(h=>({...h,_line:h._role}));if(!$.length)return;const m=Oe($,r.modifiers[o]||{});$.forEach(h=>{const _=(r[o+"Team"][h._role]||[]).find(A=>A.cardId===h.cardId);_&&(_.used=!0)}),await u({pendingAttack:{...m,players:$,side:o},["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},phase:c+"-defense"})}async function k(){const $=(r["selected_"+o]||[]).map(j=>({...j,_line:j._role})),m=Pe($,r.modifiers[o]||{});$.forEach(j=>{const D=(r[o+"Team"][j._role]||[]).find(O=>O.cardId===j.cardId);D&&(D.used=!0)});const h=He(r.pendingAttack.total,m.total,r.modifiers[o]||{}),_=r.pendingAttack.side,A=h==="attack",I=r[_+"Score"]+(A?1:0),z=_==="p1"?"p2":"p1",G=(r.round||0)+1,R=G>10;await u({[_+"Score"]:I,["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:R?"finished":z+"-attack",attacker:z,round:G}),R&&await w.from("matches").update({status:"finished"}).eq("id",i)}y()}async function Ei(e,t){var m;const{state:i,navigate:l,toast:p}=t;wi(e);const n=i.params||{};e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const a=n.matchMode||"vs_ai_easy",o=a.replace("vs_ai_",""),c=a;if(!n.deckId)return Ii(e,t,a);const s=n.deckId,[{data:d},{data:r}]=await Promise.all([w.from("decks").select("formation,name").eq("id",s).single(),w.from("deck_cards").select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`).eq("deck_id",s).order("slot_order")]),f=(r||[]).filter(h=>{var _;return h.is_starter&&((_=h.card)==null?void 0:_.player)}).map(h=>oe(h.card)),u=(r||[]).filter(h=>{var _;return!h.is_starter&&((_=h.card)==null?void 0:_.player)}).map(h=>oe(h.card));if(f.length<11){Et(e,"⚠️",`Deck incomplet (${f.length}/11).`,"Compléter",()=>l("decks"));return}const g=(r||[]).find(h=>{var _;return((_=h.card)==null?void 0:_.card_type)==="formation"}),y=(d==null?void 0:d.formation)||((m=g==null?void 0:g.card)==null?void 0:m.formation)||"4-4-2";if(a==="random")return $i(e,t,s);const{data:v}=await w.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",i.profile.id).eq("card_type","game_changer"),{data:E}=await w.from("gc_definitions").select("*").eq("is_active",!0),b=(v||[]).map(h=>({...h,_gcDef:(E==null?void 0:E.find(_=>_.name===h.gc_type||_.id===h.gc_definition_id))||null})),x=Le(f,y),k=await bi(y),$=async h=>{const{data:_}=await w.from("matches").insert({home_id:i.profile.id,away_id:null,mode:c,home_deck_id:s,status:"in_progress"}).select().single(),A={gcDefs:E||[],matchId:_==null?void 0:_.id,mode:c,difficulty:o,formation:y,homeTeam:x,aiTeam:k,homeSubs:u,subsUsed:0,maxSubs:Math.min(u.length,3),homeScore:0,aiScore:0,gcCards:h,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Ti(e,A,t)};if(!b.length){$([]);return}Ai(e,b,$)}function Ai(e,t,i){const p=new Set,n=t.filter(d=>{const r=d.gc_type||d.id;return p.has(r)?!1:(p.add(r),!0)});let a=[];function o(d,r){const f=d._gcDef,u={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},g={purple:"#9b59b6",light_blue:"#00bcd4"},y=u[f==null?void 0:f.color]||u.purple,v=g[f==null?void 0:f.color]||g.purple;return`<div class="gc-select-card" data-id="${d.id}"
      style="width:100px;border-radius:10px;border:3px solid ${r?"#FFD700":v};background:${y};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${r?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${r?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((f==null?void 0:f.name)||d.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(f==null?void 0:f.name)||d.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${f!=null&&f.image_url?`<img src="/manager-wars/icons/${f.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((f==null?void 0:f.effect)||"").slice(0,50)}</span>
      </div>
      ${r?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}function c(){var g,y,v;const d=e.querySelector("#gc-confirm-overlay");if(d&&d.remove(),a.length<3)return;const r=document.createElement("div");r.id="gc-confirm-overlay",r.style.cssText="position:absolute;inset:0;background:rgba(10,22,40,0.88);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:32px 24px;z-index:20;backdrop-filter:blur(4px)",r.innerHTML=`
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
      </button>`;const f=E=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(E)};(g=r.querySelector("#gc-launch"))==null||g.addEventListener("click",()=>f(a)),(y=r.querySelector("#gc-no-gc"))==null||y.addEventListener("click",()=>f([])),(v=r.querySelector("#gc-reset"))==null||v.addEventListener("click",()=>{a=[],s()});const u=e.querySelector("#gc-screen-wrap");u?u.appendChild(r):e.appendChild(r)}function s(){e.style.overflow="hidden";const d=e.clientHeight||e.getBoundingClientRect().height;d>50&&(e.style.height=d+"px"),e.innerHTML=`
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(r=>{r.addEventListener("click",()=>{const f=r.dataset.id,u=n.find(y=>y.id===f);if(!u)return;const g=a.findIndex(y=>y.gc_type===u.gc_type);g>-1?a.splice(g,1):a.length<3&&a.push(u),s(),a.length===3&&c()})}),a.length===3&&c()}s()}async function Ii(e,t,i){const{state:l,navigate:p}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await w.from("decks").select("id,name,is_active,formation").eq("owner_id",l.profile.id).order("created_at",{ascending:!1});if(!n||n.length===0){Et(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>p("decks"));return}const a=n.map(d=>d.id),{data:o}=await w.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let c=0;function s(){var b,x,k,$,m;const d=n[c],r=(o||[]).filter(h=>h.deck_id===d.id),f=r.filter(h=>{var _;return h.is_starter&&((_=h.card)==null?void 0:_.player)}).map(h=>oe(h.card)),u=r.find(h=>{var _;return((_=h.card)==null?void 0:_.card_type)==="formation"}),g=d.formation||((b=u==null?void 0:u.card)==null?void 0:b.formation)||"4-4-2",y=f.length>=11?Le(f,g):null,v=f.length>=11;e.innerHTML=`
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
          <div style="font-size:19px;font-weight:900">${d.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${g} · ${f.length}/11 ${d.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${c===n.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===n.length-1?"0.1":"0.3"});color:${c===n.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${c===n.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : contraindre la largeur du SVG pour contrôler hauteur+largeur -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${y?`<div style="width:min(98vw, calc(100dvh - 400px));overflow:hidden;flex-shrink:0">${We(y,g,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${f.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${n.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${n.map((h,_)=>`<div style="width:7px;height:7px;border-radius:50%;background:${_===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${v?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${v?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${v?"pointer":"default"}">
          ${v?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,(x=document.getElementById("prev-deck"))==null||x.addEventListener("click",()=>{c>0&&(c--,s())}),(k=document.getElementById("next-deck"))==null||k.addEventListener("click",()=>{c<n.length-1&&(c++,s())}),($=document.getElementById("validate-deck"))==null||$.addEventListener("click",()=>{v&&t.navigate("match",{matchMode:i,deckId:d.id})}),(m=document.getElementById("cancel-deck-select"))==null||m.addEventListener("click",()=>{ne(e),p("home")});const E=document.getElementById("deck-swipe-zone");if(E){let h=0,_=0;E.addEventListener("touchstart",A=>{h=A.touches[0].clientX,_=A.touches[0].clientY},{passive:!0}),E.addEventListener("touchend",A=>{const I=A.changedTouches[0].clientX-h,z=A.changedTouches[0].clientY-_;Math.abs(I)<40||Math.abs(I)<Math.abs(z)||(I<0&&c<n.length-1?(c++,s()):I>0&&c>0&&(c--,s()))},{passive:!0})}}s()}function Ti(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Ye(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Li(e,t,i),5e3)}function Li(e,t,i){const l=t.homeTeam.MIL||[],p=t.aiTeam.MIL||[];function n(r){return r.reduce((f,u)=>f+Y(u,"MIL"),0)}function a(r){let f=0;for(let u=0;u<r.length-1;u++){const g=xe(r[u],r[u+1]);g==="#00ff88"?f+=2:g==="#FFD700"&&(f+=1)}return f}const o=n(l)+a(l),c=n(p)+a(p),s=o>=c;function d(r,f,u){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${f}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${r.map((g,y)=>{const v=J(g),E=y<r.length-1?xe(g,r[y+1]):null,b=E&&E!=="#ff3333"&&E!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${u};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${v?`<img src="${v}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${Y(g,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${g.name}</div>
          </div>
          ${E?`<div style="width:14px;height:4px;border-radius:2px;background:${E};flex-shrink:0;opacity:${b?.9:.3}"></div>`:""}
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

    ${d(l,t.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${o}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${c}</div>
    </div>

    ${d(p,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const r=document.getElementById("score-home"),f=document.getElementById("score-ai"),u=document.getElementById("midfield-result");if(r&&f&&(s?(r.style.fontSize="80px",r.style.color="#FFD700",f.style.opacity="0.25"):(f.style.fontSize="80px",f.style.color="#ff6b6b",r.style.opacity="0.25")),u){const g=vi();u.style.opacity="1",s&&t.clubName,u.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${s?`${t.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${s?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${g}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,s&&(t.boostCard={value:g})}t.attacker=s?"home":"ai",t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:l.map(g=>({name:g.name,note:Y(g,"MIL"),portrait:J(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),aiPlayers:p.map(g=>({name:g.name,note:Y(g,"MIL"),portrait:J(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:o,aiTotal:c,text:`Duel milieu : ${t.clubName} ${o} – ${c} IA → ${s?t.clubName+" attaque":"IA attaque"}`}),setTimeout(()=>{var y,v;const g=(y=t.boostCard)==null?void 0:y.value;e.innerHTML=`
      <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:40px;height:100%;min-height:100%;gap:16px;padding-left:24px;padding-right:24px;background:#0a3d1e;text-align:center">
        <div style="font-size:64px">${s?"🏆":"😤"}</div>
        <div style="font-size:22px;font-weight:900;color:#fff;line-height:1.3">
          ${s?`⚽ ${t.clubName}<br>gagne le milieu de terrain !`:"😔 L'IA gagne l'engagement !"}
        </div>
        ${g&&s?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:16px;padding:16px 32px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">Carte Boost obtenue</div>
          <div style="font-size:48px;font-weight:900;color:#87CEEB">+${g}</div>
          <div style="font-size:11px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
        <button id="start-match-btn" style="margin-top:8px;padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:17px;font-weight:900;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,0.3)">
          ▶ Commencer le match
        </button>
      </div>`,(v=document.getElementById("start-match-btn"))==null||v.addEventListener("click",()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",W(e,t,i),t.attacker==="ai"&&setTimeout(()=>De(e,t,i),800)})},100)},5e3)}function At(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function le(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const l=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:J(e),p=At(e),n=e._line||e.job||"MIL",a=fe[n]||"#555",o={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",c=e.note!==void 0?Number(e.note)||0:(Number(Y(e,n))||0)+(e.boost||0),s=It(e==null?void 0:e.country_code),d=Math.round(i*.19),r=Math.round(i*.25),f=i-Math.round(i*.19)-Math.round(i*.25),u=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${o};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${u}">
    <div style="position:absolute;top:0;left:0;right:0;height:${d}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${l&&!(e!=null&&e.used)?`<img src="${l}" style="position:absolute;top:${d}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Fe(e==null?void 0:e.country_code)?`<img src="${Fe(e.country_code)}" style="width:${r+2}px;height:${r-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${r-4}px">${s}</span>`}
      <span style="font-size:${r-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":c}</span>
      ${p?`<img src="${p}" style="width:${r-4}px;height:${r-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,r-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function we(e,t,i){if(!(e!=null&&e.length))return"";const l=e.slice(0,5);let p='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return l.forEach((n,a)=>{if(p+=le(n,40,52),a<l.length-1){const o=xe(n,l[a+1]);p+=`<div style="width:7px;height:3px;background:${o==="#ff3333"||o==="#cc2222"?"rgba(255,255,255,0.12)":o};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(p+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),p+="</div>",p}function Fe(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function It(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Ye(e,t,i,l,p=310,n=310){const a=ve[t]||{},o=xt(t)||Re[t]||[],c={},s=["ATT","MIL","DEF","GK"];for(const b of s)(e[b]||[]).forEach((k,$)=>{c[`${b}${$+1}`]=k});function d(b){const x=a[b];return x?{x:x.x*p,y:x.y*n}:null}let r="";for(const[b,x]of o){const k=d(b),$=d(x);if(!k||!$)continue;const m=c[b],h=c[x],_=xe(m,h);_==="#00ff88"||_==="#FFD700"?(r+=`<line x1="${k.x.toFixed(1)}" y1="${k.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${_}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,r+=`<line x1="${k.x.toFixed(1)}" y1="${k.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${_}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):r+=`<line x1="${k.x.toFixed(1)}" y1="${k.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${_}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const f=48,u=64,g=13,y=16,v={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[b,x]of Object.entries(c)){const k=d(b);if(!k||!x)continue;const $=b.replace(/[0-9]/g,""),m=fe[$]||"#555",h=i==="attack"&&["MIL","ATT"].includes($)&&!x.used||i==="defense"&&["GK","DEF","MIL"].includes($)&&!x.used,_=l.includes(x.cardId);let A;i==="attack"?A=$==="MIL"?Number(x.note_m)||0:Number(x.note_a)||0:i==="defense"?A=$==="GK"?Number(x.note_g)||0:$==="MIL"?Number(x.note_m)||0:Number(x.note_d)||0:A=Number($==="GK"?x.note_g:$==="DEF"?x.note_d:$==="MIL"?x.note_m:x.note_a)||0,A=A+(x.boost||0);const I=(k.x-f/2).toFixed(1),z=(k.y-u/2).toFixed(1),G=x.used?.25:1,R=v[x==null?void 0:x.rarity]||v.normal,j=_?"#ff3030":R,D=_?3:(x==null?void 0:x.rarity)==="légende"||(x==null?void 0:x.rarity)==="pépite"?2.5:2,O=u-g-y;r+=`<defs><clipPath id="cp-${b}"><rect x="${I}" y="${(k.y-u/2+g).toFixed(1)}" width="${f}" height="${O}"/></clipPath></defs>`,r+=`<rect x="${I}" y="${z}" width="${f}" height="${u}" rx="5" fill="${m}" opacity="${G}"/>`;const F=J(x);F&&!x.used&&(r+=`<image href="${F}" x="${I}" y="${(k.y-u/2+g).toFixed(1)}" width="${f}" height="${O}" clip-path="url(#cp-${b})" preserveAspectRatio="xMidYMin slice"/>`),r+=`<rect x="${I}" y="${z}" width="${f}" height="${g}" rx="4" fill="rgba(255,255,255,0.92)"/>`,r+=`<text x="${k.x.toFixed(1)}" y="${(k.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(x.name||"").slice(0,9)}</text>`;const q=(k.y+u/2-y).toFixed(1);if(r+=`<rect x="${I}" y="${q}" width="${f}" height="${y}" fill="rgba(255,255,255,0.92)"/>`,x.used)r+=`<text x="${k.x.toFixed(1)}" y="${(k.y+u/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const Z=Fe(x.country_code);Z?r+=`<image href="${Z}" x="${(k.x-20).toFixed(1)}" y="${(k.y+u/2-y+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:r+=`<text x="${(k.x-13).toFixed(1)}" y="${(k.y+u/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${It(x.country_code)}</text>`,r+=`<text x="${k.x.toFixed(1)}" y="${(k.y+u/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${A}</text>`;const Q=At(x);Q?r+=`<image href="${Q}" x="${(k.x+f/2-14).toFixed(1)}" y="${(k.y+u/2-y+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:x.clubName&&(r+=`<text x="${(k.x+14).toFixed(1)}" y="${(k.y+u/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(x.clubName||"").slice(0,3).toUpperCase()}</text>`),x.boost&&(r+=`<rect x="${(k.x+f/2-12).toFixed(1)}" y="${(k.y-u/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,r+=`<text x="${(k.x+f/2-5).toFixed(1)}" y="${(k.y-u/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${x.boost}</text>`)}r+=`<rect x="${I}" y="${z}" width="${f}" height="${u}" rx="5" fill="${_?"rgba(255,255,255,0.12)":"none"}" stroke="${j}" stroke-width="${D}" opacity="${G}"/>`,h&&(r+=`<rect x="${I}" y="${z}" width="${f}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${_?"selected":""}" data-card-id="${x.cardId}" data-role="${$}" style="cursor:pointer"/>`)}const E=38;return`<svg viewBox="${-E} ${-E} ${p+E*2} ${n+E*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${r}
  </svg>`}function We(e,t,i,l,p=300,n=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ye(e,t,i,l,p,n)}
  </div>`}function $e(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}function Mi(e){if(e.type==="duel"){const t=e.homeTotal>=e.aiTotal;return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:wrap">
          ${(e.homePlayers||[]).map(i=>$e(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:wrap">
          ${(e.aiPlayers||[]).map(i=>$e(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${$e(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${$e(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function W(e,t,i){var g,y,v,E,b,x,k,$;const l=t.selected.map(m=>m.cardId),p=t.usedSubIds||[],n=t.homeSubs.filter(m=>!p.includes(m.cardId));Object.values(t.homeTeam).flat().filter(m=>m.used).length>0&&n.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const o=t.phase==="ai-attack"||t.phase==="ai-defense",c=t.phase==="attack",s=t.phase==="defense",d=t.phase==="finished",r=t.gcCards.filter(m=>!t.usedGc.includes(m.id)),f=t.boostCard&&!t.boostUsed;if(e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const h=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${we((h.players||[]).map(_=>({..._,used:!1})),"#ff6b6b",h.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const h=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${we((h.players||[]).map(_=>({..._,used:!1})),"#00ff88",h.total)}
          </div>`}const m=t.log[t.log.length-1];return m?'<div style="padding:2px 4px">'+Mi(m)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const m=window.innerWidth>=700,h=(D,O,F)=>{var K,U;const q=(t.gcDefs||[]).find(P=>P.name===D.gc_type),Z={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[q==null?void 0:q.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Q={purple:"#b06ce0",light_blue:"#00d4ef"}[q==null?void 0:q.color]||"#b06ce0",T=(q==null?void 0:q.name)||D.gc_type,L=(q==null?void 0:q.effect)||((K=ae[D.gc_type])==null?void 0:K.desc)||"",S=q!=null&&q.image_url?`/manager-wars/icons/${q.image_url}`:null,B=((U=ae[D.gc_type])==null?void 0:U.icon)||"⚡",C=Math.round(F*.22),N=Math.round(F*.22),M=F-C-N,V=T.length>12?7:9;return`<div class="gc-mini" data-gc-id="${D.id}" data-gc-type="${D.gc_type}"
          style="width:${O}px;height:${F}px;border-radius:10px;border:2px solid ${Q};background:${Z};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${C}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${V}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${O-6}px">${T}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${M}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${S?`<img src="${S}" style="max-width:${O-10}px;max-height:${M-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(M*.55)}px">${B}</span>`}
          </div>
          <div style="height:${N}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${L.slice(0,38)}</span>
          </div>
        </div>`},_=(D,O)=>{var F;return O?`<div id="boost-card" style="width:110px;padding:8px 6px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center">
            <div style="font-size:22px">⚡</div>
            <div style="font-size:10px;color:#000;font-weight:900">+${(F=t.boostCard)==null?void 0:F.value}</div>
          </div>`:h(D,110,150)},A=(D,O)=>{var F;return O?`<div id="boost-card" style="padding:4px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:7px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:1px;text-align:center;min-width:42px">
            <div style="font-size:15px">⚡</div>
            <div style="font-size:7px;color:#000;font-weight:900">+${(F=t.boostCard)==null?void 0:F.value}</div>
          </div>`:h(D,68,95)},I=m?"padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",z=d?`<button id="btn-results" style="${I};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:o?`<div style="${I};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:c?`<button id="btn-action" style="${I};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:s?`<button id="btn-action" style="${I};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${I};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,G=c||s?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",R=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${m?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(D=>`<div class="sub-btn-col" data-sub-id="${D.cardId}" style="cursor:pointer;flex-shrink:0">${le(D,44,58)}</div>`).join("")}
      </div>`,j=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${We(t.homeTeam,t.formation,t.phase,l,300,300)}
        </div>
      </div>`;return m?`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${R}
          ${j}
          <!-- Colonne droite : GC + bouton -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            ${r.map(D=>_(D,!1)).join("")}
            ${f?_(null,!0):""}
            <div style="flex:1"></div>
            <div style="width:100%">${z}${G}</div>
          </div>
        </div>`:`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${R}
          <div style="flex:1;min-width:0;display:flex;flex-direction:column;min-height:0">
            ${j}
            <!-- Zone bas mobile : GC grille + bouton -->
            <div style="display:flex;align-items:stretch;padding:4px 6px;background:rgba(0,0,0,0.35);gap:5px;flex-shrink:0">
              <div style="display:flex;flex-wrap:wrap;gap:3px;align-content:center;max-width:120px">
                ${r.map(D=>A(D,!1)).join("")}
                ${f?A(null,!0):""}
              </div>
              <div style="flex:0.8;display:flex;flex-direction:column;justify-content:center;gap:3px">
                ${z}${G}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(m=>{var h,_,A;if(m.type==="duel"){const I=m.isGoal,z=m.homeScored?"#FFD700":I?"#ff6b6b":"rgba(255,255,255,0.3)",G=m.homeScored?"⚽ BUT !":I?"⚽ BUT IA !":(h=m.homePlayers)!=null&&h.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${I?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${z};margin-bottom:4px">
                <div style="font-size:9px;color:${z};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${G}</div>
                ${(_=m.homePlayers)!=null&&_.length?`<div style="margin-bottom:3px">${we(m.homePlayers,"rgba(255,255,255,0.7)",m.homeTotal)}</div>`:""}
                ${(A=m.aiPlayers)!=null&&A.length?`<div style="opacity:0.7">${we(m.aiPlayers,"#ff6b6b",m.aiTotal)}</div>`:""}
              </div>`}return m.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${m.outPlayer?le({...m.outPlayer,used:!0,_line:m.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${m.inPlayer?le({...m.inPlayer,_line:m.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:m.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${m.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${m.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`,function(){const h=e.querySelector(".terrain-wrapper svg");if(!h)return;h.removeAttribute("width"),h.removeAttribute("height"),h.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",h.setAttribute("viewBox","-26 -26 352 352"),h.setAttribute("preserveAspectRatio","xMidYMid meet");const _=e.querySelector(".match-screen");if(_){const A=e.clientHeight;A>50&&(_.style.height=A+"px",_.style.overflow="hidden")}}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const m=e.querySelector(".terrain-wrapper svg");m&&(m.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let m=!1,h=30;const _=()=>document.getElementById("match-timer"),A=()=>{const I=_();if(!I)return;const z=String(Math.floor(h/60)).padStart(2,"0"),G=String(h%60).padStart(2,"0");I.textContent=` ${z}:${G}`,I.style.color=m?"#ff2222":"#ff9500",I.style.fontWeight="900"};A(),t._timerInt=setInterval(()=>{if(h--,h<0)if(!m)m=!0,h=15,A();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",I.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(I),setTimeout(()=>{I.remove(),ce(e,t,i)},2500)}else A()},1e3)}(g=document.getElementById("match-quit"))==null||g.addEventListener("click",()=>{ne(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,ce(e,t,i))}),(y=document.getElementById("view-ai"))==null||y.addEventListener("click",()=>qi(t,i)),(v=document.getElementById("toggle-history"))==null||v.addEventListener("click",()=>{var m;(m=document.getElementById("match-history-panel"))==null||m.classList.add("open")}),(E=document.getElementById("close-history"))==null||E.addEventListener("click",()=>{var m;(m=document.getElementById("match-history-panel"))==null||m.classList.remove("open")}),(b=document.getElementById("btn-action"))==null||b.addEventListener("click",()=>{t.selected.length!==0&&(c?Ci(e,t,i):s&&ji(e,t,i))}),(x=document.getElementById("btn-results"))==null||x.addEventListener("click",()=>ce(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(m=>{m.addEventListener("click",()=>zi(m,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(m=>{m.addEventListener("click",()=>Fi(m.dataset.gcId,m.dataset.gcType,e,t,i))}),(k=document.getElementById("boost-card"))==null||k.addEventListener("click",()=>Gi(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(m=>{m.addEventListener("click",()=>ut(e,t,i,m.dataset.subId))}),($=document.getElementById("sub-btn-main"))==null||$.addEventListener("click",()=>ut(e,t,i))}function zi(e,t,i,l){const p=e.dataset.cardId,n=e.dataset.role,a=t.selected.findIndex(o=>o.cardId===p);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){l.toast("Maximum 3 joueurs","error");return}const o=(t.homeTeam[n]||[]).find(c=>c.cardId===p);o&&t.selected.push({...o,_role:n,_line:n})}W(i,t,l)}function Xe(e,t,i){e.matchId&&w.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Ci(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Xe(t,i,i.state.profile.id);const l=t.selected.map(n=>({...n,_line:n._role})),p=Oe(l,t.modifiers.home);t.pendingAttack={...p,players:[...t.selected],side:"home"},t.selected.forEach(n=>{const a=(t.homeTeam[n._role]||[]).find(o=>o.cardId===n.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${p.total} (base ${p.base}${p.links?` +${p.links} liens`:""}) — ${t.selected.map(n=>n.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",W(e,t,i),setTimeout(()=>Si(e,t,i),1200)}function ji(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Xe(t,i,i.state.profile.id);const l=t.selected.map(o=>({...o,_line:o._role})),p=Pe(l,t.modifiers.home);t.selected.forEach(o=>{const c=(t.homeTeam[o._role]||[]).find(s=>s.cardId===o.cardId);c&&(c.used=!0)});const n=He(t.pendingAttack.total,p.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(o=>({name:o.name,note:o._line==="MIL"?o.note_m:o.note_a,portrait:J(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),homePlayers:t.selected.map(o=>{const c=(t.homeTeam[o._role]||[]).find(s=>s.cardId===o.cardId)||o;return{name:c.name,note:c._line==="GK"?c.note_g:c._line==="MIL"?c.note_m:c.note_d,portrait:J(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo}}),homeTotal:p.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(n.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(n.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${p.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,W(e,t,i),Je(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{he(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${p.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,he(e,t,i,"home-attack")}function De(e,t,i){Xe(t,i,null);const l=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],p=yt(l,"attack",t.difficulty);if(!p.length){Lt(e,t,i);return}const n=Oe(p,t.modifiers.ai);t.pendingAttack={...n,players:p,side:"ai"},p.forEach(s=>{s.used=!0}),t.log.push({text:`🤖 IA attaque : ${n.total} (${p.map(s=>s.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used),c=(t.homeSubs||[]).filter(s=>!(t.usedSubIds||[]).includes(s.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!c){t.aiScore++;const s={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:p.map(d=>({name:d.name,note:d._line==="MIL"?d.note_m:d.note_a,portrait:J(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),aiTotal:n.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(s),t.pendingAttack=null,W(e,t,i),Je(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{he(e,t,i,"home-attack")});return}t.phase="defense",W(e,t,i)}function Si(e,t,i){const l=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],p=yt(l,"defense",t.difficulty),n=p.length>0?Pe(p,t.modifiers.ai).total:0;p.forEach(c=>{c.used=!0});const a=He(t.pendingAttack.total,n,t.modifiers.ai),o={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(c=>({name:c.name,note:c._line==="MIL"?c.note_m:c.note_a,portrait:J(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),aiPlayers:p.map(c=>({name:c.name,note:c._line==="GK"?c.note_g:c._line==="MIL"?c.note_m:c.note_d,portrait:J(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:n,isGoal:!1,homeScored:!1,text:""};if(a.shielded)o.text="🛡️ Bouclier IA !",t.log.push(o);else if(a.goal){t.homeScore++,o.isGoal=!0,o.homeScored=!0,o.text=`⚽ BUT ! (${t.pendingAttack.total} > ${n})`,t.log.push(o),t.modifiers.ai={},t.pendingAttack=null,W(e,t,i),Je(o.homePlayers,t.homeScore,t.aiScore,!0,()=>{he(e,t,i,"ai-attack")});return}else o.text=`🧤 IA défend (${n} ≥ ${t.pendingAttack.total})`,t.log.push(o);t.modifiers.ai={},t.pendingAttack=null,he(e,t,i,"ai-attack")}function he(e,t,i,l){if(t.round++,Tt(t)){ce(e,t,i);return}if(l==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(n=>!n.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(a=>!a.used).length){ce(e,t,i);return}t.phase="ai-attack",W(e,t,i),setTimeout(()=>De(e,t,i),800);return}t.phase="attack",W(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(n=>!n.used).length){Lt(e,t,i);return}t.phase="ai-attack",W(e,t,i),setTimeout(()=>De(e,t,i),800)}}function Tt(e){const t=["MIL","ATT","GK","DEF"].some(l=>(e.homeTeam[l]||[]).some(p=>!p.used)),i=["MIL","ATT","GK","DEF"].some(l=>(e.aiTeam[l]||[]).some(p=>!p.used));return!t&&!i}function Lt(e,t,i){Tt(t)?ce(e,t,i):(t.phase="attack",W(e,t,i))}function Bi(e,t,i){const l=document.createElement("div");l.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const p=J(e),n=J(t),a=fe[e.job]||"#555",o=fe[t.job]||"#555",c=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,s=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;l.innerHTML=`
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${s}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(l);let d=!1;const r=()=>{d||(d=!0,l.remove(),i())};l.addEventListener("click",r),setTimeout(r,2e3)}function me(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function ut(e,t,i,l=null){if(t.phase!=="attack"){me("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){me(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const p=Object.values(t.homeTeam).flat().filter(r=>r.used),n=t.homeSubs.filter(r=>!t.usedSubIds.includes(r.cardId));if(!p.length){me("Aucun joueur utilisé à remplacer");return}if(!n.length){me("Aucun remplaçant disponible");return}let a=0,o=Math.max(0,n.findIndex(r=>r.cardId===l)),c=!1;const s=document.createElement("div");s.id="sub-overlay",s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function d(){var E,b,x,k,$,m;const r=p[a],f=n[o],u=Math.min(130,Math.round((window.innerWidth-90)/2)),g=Math.round(u*1.35),y=h=>`background:rgba(255,255,255,0.12);border:none;color:${h?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${h?"default":"pointer"};flex-shrink:0`;s.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${y(o===0)}" ${o===0?"disabled":""}>▲</button>
        <div>${f?le({...f,used:!1,boost:0},u,g):"<div>—</div>"}</div>
        <button id="in-down" style="${y(o>=n.length-1)}" ${o>=n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${o+1}/${n.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${y(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${r?le({...r,used:!1,boost:0},u,g):"<div>—</div>"}</div>
        <button id="out-down" style="${y(a>=p.length-1)}" ${a>=p.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${p.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(E=s.querySelector("#sub-close"))==null||E.addEventListener("click",()=>s.remove()),(b=s.querySelector("#out-up"))==null||b.addEventListener("click",()=>{a>0&&(a--,d())}),(x=s.querySelector("#out-down"))==null||x.addEventListener("click",()=>{a<p.length-1&&(a++,d())}),(k=s.querySelector("#in-up"))==null||k.addEventListener("click",()=>{o>0&&(o--,d())}),($=s.querySelector("#in-down"))==null||$.addEventListener("click",()=>{o<n.length-1&&(o++,d())});const v=(h,_,A,I)=>{const z=s.querySelector("#"+h);if(!z)return;let G=0;z.addEventListener("touchstart",R=>{G=R.touches[0].clientY},{passive:!0}),z.addEventListener("touchend",R=>{const j=R.changedTouches[0].clientY-G;if(Math.abs(j)<30)return;const D=_();j<0&&D<I-1?(A(D+1),d()):j>0&&D>0&&(A(D-1),d())},{passive:!0})};v("in-panel",()=>o,h=>o=h,n.length),v("out-panel",()=>a,h=>a=h,p.length),(m=s.querySelector("#sub-confirm"))==null||m.addEventListener("click",h=>{if(h.preventDefault(),h.stopPropagation(),c)return;c=!0;const _=p[a],A=n[o];if(!_||!A)return;let I=null,z=-1;for(const[R,j]of Object.entries(t.homeTeam)){const D=(j||[]).findIndex(O=>O.cardId===_.cardId);if(D!==-1){I=R,z=D;break}}if(z===-1||!I){me("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),s.remove();return}const G={...A,_line:I,_col:_._col||0,used:!1,boost:0};t.homeTeam[I].splice(z,1,G),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(A.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:_.name,firstname:_.firstname,note:Y(_,I),portrait:J(_),job:_.job,country_code:_.country_code,rarity:_.rarity,clubName:_.clubName,clubLogo:_.clubLogo},inPlayer:{name:A.name,firstname:A.firstname,note:Y(A,I),portrait:J(A),job:A.job,country_code:A.country_code,rarity:A.rarity,clubName:A.clubName,clubLogo:A.clubLogo},text:`🔄 ${A.firstname} ${A.name} remplace ${_.firstname} ${_.name}`}),s.remove(),Bi(_,A,()=>W(e,t,i))})}document.body.appendChild(s),d()}function Fi(e,t,i,l,p){var g,y;const n=(l.gcDefs||[]).find(v=>v.name===t),a=ae[t]||{icon:"⚡",desc:"Carte spéciale."},o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[n==null?void 0:n.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[n==null?void 0:n.color]||"#b06ce0",s=(n==null?void 0:n.name)||t,d=(n==null?void 0:n.effect)||a.desc,r=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,f=a.icon||"⚡",u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",u.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${c};background:${o};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${c}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${s.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${s}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${r?`<img src="${r}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${f}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${d}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(u),(g=u.querySelector("#gc-back"))==null||g.addEventListener("click",()=>u.remove()),(y=u.querySelector("#gc-use"))==null||y.addEventListener("click",()=>{u.remove(),Di(e,t,i,l,p)})}function je(e,t,i,l,p,n){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let o=[];function c(){var s,d;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${o.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(r=>{const f=r._line||r.job||"MIL",u={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",g=Y(r,f)+(r.boost||0),y=o.find(v=>v.cardId===r.cardId);return`<div class="gc-pick-item" data-cid="${r.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${y?"#FFD700":"rgba(255,255,255,0.25)"};background:${u};overflow:hidden;cursor:pointer;flex-shrink:0;${r.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${r.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${g}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${o.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${o.length}/${t})
      </button>
    </div>`,(s=a.querySelector("#gc-picker-close"))==null||s.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(r=>{r.addEventListener("click",()=>{const f=r.dataset.cid,u=e.find(y=>y.cardId===f);if(!u)return;const g=o.findIndex(y=>y.cardId===f);g>-1?o.splice(g,1):o.length<t&&o.push(u),c()})}),(d=a.querySelector("#gc-picker-confirm"))==null||d.addEventListener("click",()=>{a.remove(),n(o)})}c(),document.body.appendChild(a)}const Mt={BOOST_STAT({value:e=2,target:t="home",count:i=1,roles:l=null},p,n,a){const o=t==="home"?p.homeTeam:p.aiTeam,c=Object.entries(o).flatMap(([s,d])=>!l||l.includes(s)?(d||[]).filter(r=>!r.used).map(r=>({...r,_line:s})):[]);return c.length?(je(c,i,e>0?`⚡ +${e} à ${i} joueur(s)`:`💀 -${Math.abs(e)} à ${i} joueur(s)`,n,p,s=>{s.forEach(d=>{for(const r of["GK","DEF","MIL","ATT"]){const f=(p.homeTeam[r]||[]).find(u=>u.cardId===d.cardId)||(p.aiTeam[r]||[]).find(u=>u.cardId===d.cardId);if(f){f.boost=(f.boost||0)+e;break}}}),p.log.push({text:`${e>0?"⚡":"💀"} ${Math.abs(e)>0?"+":""}${e} → ${s.map(d=>d.name).join(", ")}`,type:"info"}),W(n,p,a)}),!0):(a.toast("Aucun joueur disponible","error"),!0)},DEBUFF_STAT(e,t,i,l){return Mt.BOOST_STAT({...e,value:-Math.abs(e.value||2)},t,i,l)},GRAY_PLAYER({target:e="opponent",count:t=1,roles:i=null},l,p,n){const a=e==="opponent"?l.aiTeam:l.homeTeam,o=Object.entries(a).flatMap(([c,s])=>!i||i.includes(c)?(s||[]).filter(d=>!d.used).map(d=>({...d,_line:c})):[]);return o.length?(je(o,t,`❄️ Griser ${t} joueur(s)`,p,l,c=>{c.forEach(s=>{for(const d of Object.keys(l.aiTeam).concat(Object.keys(l.homeTeam))){const f=((e==="opponent"?l.aiTeam[d]:l.homeTeam[d])||[]).find(u=>u.cardId===s.cardId);if(f){f.used=!0;break}}}),l.log.push({text:`❄️ ${c.map(s=>s.name).join(", ")} grisé(s) !`,type:"info"}),W(p,l,n)}),!0):(n.toast("Aucun joueur à griser","error"),!0)},REVIVE_PLAYER({count:e=1},t,i,l){const p=Object.entries(t.homeTeam).flatMap(([n,a])=>(a||[]).filter(o=>o.used).map(o=>({...o,_line:n})));return p.length?(je(p,e,"💫 Ressusciter",i,t,n=>{n.forEach(a=>{for(const o of["GK","DEF","MIL","ATT"]){const c=(t.homeTeam[o]||[]).find(s=>s.cardId===a.cardId);if(c){c.used=!1;break}}}),t.log.push({text:`💫 ${n.map(a=>a.name).join(", ")} ressuscité(s) !`,type:"info"}),W(i,t,l)}),!0):(l.toast("Aucun joueur à ressusciter","error"),!0)},REMOVE_GOAL(e,t,i,l){return t.aiScore<=0?(l.toast("Aucun but adverse","error"),!1):(t.aiScore--,t.log.push({text:"🚫 But adverse retiré !",type:"info"}),!1)},ADD_GOAL_DRAW(e,t,i,l){return t.modifiers=t.modifiers||{},t.modifiers.home=t.modifiers.home||{},t.modifiers.home.addGoalOnDraw=!0,t.log.push({text:"⚽ +1 but si duel nul activé !",type:"info"}),!1},ADD_SUB({count:e=1},t,i,l){return t.maxSubs+=e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1}};function Di(e,t,i,l,p){if(l.usedGc.includes(e))return;l.usedGc.push(e);const n=(l.gcDefs||[]).find(o=>o.name===t);let a=!1;if(n!=null&&n.effect_type&&n.effect_type!=="CUSTOM"){const o=Mt[n.effect_type];o?o(n.effect_params||{},l,i,p)||(a=!0):(p.toast(`Effet "${n.effect_type}" non implémenté`,"error"),a=!0)}else{switch(t){case"Double attaque":l.modifiers.home.doubleAttack=!0,l.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":l.modifiers.home.shield=!0,l.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const o=Object.entries(l.homeTeam).flatMap(([c,s])=>(s||[]).filter(d=>d.used).map(d=>({...d,_line:c})));o.length?(o[0].used=!1,l.log.push({text:`💫 ${o[0].name} ressuscité !`,type:"info"})):l.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":l.modifiers.ai.stolenNote=(l.modifiers.ai.stolenNote||0)+1,l.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const o=[...l.aiTeam.ATT||[],...l.aiTeam.MIL||[]].filter(c=>!c.used);if(o.length){const c=o.sort((s,d)=>Y(d,"ATT")-Y(s,"ATT"))[0];c.used=!0,l.log.push({text:`❄️ ${c.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":l.maxSubs++,l.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}a=!0}w.from("cards").delete().eq("id",e).then(()=>{}),a&&W(i,l,p)}function Gi(e,t,i){const l=Object.values(t.homeTeam).flat().filter(p=>!p.used);if(!l.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${l.map(p=>`
        <div class="player-boost-opt" data-card-id="${p.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${fe[p.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Y(p,p._line||p.job)}</div>
          <div style="flex:1"><b>${p.firstname} ${p.name}</b><div style="font-size:11px;color:#888">${p._line||p.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(p=>{p.addEventListener("click",()=>{const n=p.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const o=(t.homeTeam[a]||[]).find(c=>c.cardId===n);if(o){o.boost=(o.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${o.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),W(e,t,i)})})}function Je(e,t,i,l,p){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(s,d)=>`
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
    ${e.map(s=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${fe[s.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${s.portrait?`<img src="${s.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(s.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(n);let o=!1;const c=()=>{o||(o=!0,n.remove(),setTimeout(()=>p(),50))};n.addEventListener("click",c),setTimeout(c,3500)}async function ce(e,t,i){var d,r;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:l}=i,p=t.homeScore>t.aiScore,n=t.homeScore===t.aiScore,a=p?"victoire":n?"nul":"defaite",o=Dt(t.mode,a);t.matchId&&await w.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:p?l.profile.id:null,home_credits_reward:o,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(l.profile.credits||0)+o,matches_played:(l.profile.matches_played||0)+1};p?c.wins=(l.profile.wins||0)+1:n?c.draws=(l.profile.draws||0)+1:c.losses=(l.profile.losses||0)+1,await w.from("users").update(c).eq("id",l.profile.id),await i.refreshProfile();const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",s.innerHTML=`
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
    </div>`,document.body.appendChild(s),(d=document.getElementById("res-home"))==null||d.addEventListener("click",()=>{s.remove(),ne(e),i.navigate("home")}),(r=document.getElementById("res-replay"))==null||r.addEventListener("click",()=>{s.remove(),ne(e),i.navigate("match",{matchMode:t.mode})})}function qi(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ye(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ri={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Ni(e,t){const{state:i,toast:l}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await Ze(e,t)}async function Ze(e,t){const{state:i,toast:l}=t,{data:p}=await w.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:n}=await w.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(p||[]).filter(s=>s.seller_id!==i.profile.id),o=n||[];o.filter(s=>s.status==="active").length,e.innerHTML=`
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
  `;function c(s){const d=document.getElementById("mkt-content"),r=s==="buy"?a:o;if(r.length===0){d.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${s==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const f=s==="mine"?[...r].sort((u,g)=>u.status!==g.status?u.status==="active"?-1:1:new Date(g.listed_at)-new Date(u.listed_at)):r;d.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${f.map(u=>{var x,k,$,m;const g=(x=u.card)==null?void 0:x.player;if(!g)return"";const y=g.job==="GK"?g.note_g:g.job==="DEF"?g.note_d:g.job==="MIL"?g.note_m:g.note_a,v=Ri[g.rarity],E=(i.profile.credits||0)>=u.price,b=u.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${b?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${Hi(g.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${v};flex-shrink:0">${y}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${g.firstname} ${g.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${g.country_code} · ${((k=g.clubs)==null?void 0:k.encoded_name)||"—"} · ${g.rarity} · ${g.job}</div>
            ${s==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${(($=u.seller)==null?void 0:$.pseudo)||"—"}</div>`:b?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((m=u.buyer)==null?void 0:m.pseudo)||"—"} · ${u.sold_at?new Date(u.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(u.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${u.price.toLocaleString("fr")}</div>
            ${s==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${u.id}" ${E?"":"disabled"} style="margin-top:4px">${E?"Acheter":"Trop cher"}</button>`:b?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${u.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,d.querySelectorAll("[data-buy]").forEach(u=>{u.addEventListener("click",()=>Oi(u.dataset.buy,r,e,t))}),d.querySelectorAll("[data-cancel]").forEach(u=>{u.addEventListener("click",()=>Pi(u.dataset.cancel,e,t))})}c("buy"),e.querySelectorAll(".mkt-tab").forEach(s=>{s.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(d=>{const r=d===s;d.style.background=r?"var(--green)":"#fff",d.style.color=r?"#fff":"var(--gray-600)",d.style.borderColor=r?"var(--green)":"var(--gray-200)"}),c(s.dataset.tab)})})}async function Oi(e,t,i,l){var r;const{state:p,toast:n}=l,a=t.find(f=>f.id===e);if(!a)return;const o=a.price,c=p.profile.credits||0,s=(r=a.card)==null?void 0:r.player;if(c<o){n("Crédits insuffisants","error");return}if(!confirm(`Acheter ${s==null?void 0:s.firstname} ${s==null?void 0:s.surname_encoded} pour ${o.toLocaleString("fr")} crédits ?`))return;const d=document.querySelector(`[data-buy="${e}"]`);d&&(d.disabled=!0,d.textContent="⏳");try{const{data:f,error:u}=await w.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:p.profile.id});if(u)throw new Error(u.message);if(!(f!=null&&f.success))throw new Error((f==null?void 0:f.error)||"Achat impossible");p.profile.credits=c-o;const g=document.querySelector("[data-credits]")||document.querySelector(".credits-display");g&&(g.textContent=(c-o).toLocaleString("fr")+" cr."),n(`✅ ${s==null?void 0:s.surname_encoded} ajouté à ta collection !`,"success"),Ze(i,l)}catch(f){n("❌ "+f.message,"error"),d&&(d.disabled=!1,d.textContent="Acheter")}}async function Pi(e,t,i){const{toast:l}=i,{data:p}=await w.from("market_listings").select("card_id").eq("id",e).single();await w.from("market_listings").update({status:"cancelled"}).eq("id",e),p&&await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",p.card_id),l("Annonce retirée","success"),Ze(t,i)}function Hi(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function Ki(e,{state:t,navigate:i,toast:l}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:p}=await w.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function Ui(e,{state:t,navigate:i,toast:l}){const p=t.profile;if(!p)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await w.from("matches").select("id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at").or(`home_id.eq.${p.id},away_id.eq.${p.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},o=(n||[]).filter(d=>d.status==="finished"),c=(n||[]).filter(d=>d.status==="in_progress");function s(d){const r=d.home_id===p.id;r?d.home_score:d.away_score,r?d.away_score:d.home_score;const f=d.winner_id===p.id,u=d.home_score===d.away_score&&d.status==="finished",g=d.status!=="finished"?"…":u?"N":f?"V":"D",y=d.status!=="finished"||u?"#888":f?"#1A6B3C":"#c0392b";let v=a[d.mode]||d.mode;d.away_id===null&&!v.startsWith("IA")&&(v="IA");let E="";d.status==="in_progress"&&Date.now()-new Date(d.created_at).getTime()>3600*1e3&&(E=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const b=new Date(d.created_at),x=b.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+b.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),k=d.status==="finished"?`${d.home_score} - ${d.away_score}`:`${d.home_score||0} - ${d.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${v}${E}</div>
        <div style="font-size:11px;color:var(--gray-600)">${x}${d.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${k}</span>
        <span style="background:${y};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${g}</span>
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
          ${c.map(s).join("")}
        </div>`:""}

      ${o.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${o.map(s).join("")}
        </div>`:""}

      ${(n||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const H={user:null,profile:null,page:"home",params:{}};function ke(e,t="info",i=3e3){const l=document.getElementById("toast");l&&(l.textContent=e,l.className=`show ${t}`,clearTimeout(l._t),l._t=setTimeout(()=>{l.className=""},i))}function Vi(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Ge(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ee(){if(!H.user)return;const{data:e}=await w.from("users").select("*").eq("id",H.user.id).single();e&&(H.profile=e)}const Qe="mw_theme";function Me(){return localStorage.getItem(Qe)||"light"}function Yi(e){var t;localStorage.setItem(Qe,e),qe(e),(t=H.profile)!=null&&t.id&&w.from("users").update({theme:e}).eq("id",H.profile.id).then(()=>{})}function qe(e){document.documentElement.setAttribute("data-theme",e)}function Ae(e,t={}){H.page=e,H.params=t,zt()}async function zt(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(l=>{l.classList.toggle("active",l.dataset.page===H.page)});const t=document.getElementById("nav-credits");t&&H.profile&&(t.textContent=`💰 ${(H.profile.credits||0).toLocaleString("fr")}`);const i={state:H,navigate:Ae,toast:ke,openModal:Vi,closeModal:Ge,refreshProfile:Ee};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',H.page){case"home":await nt(e,i);break;case"collection":await Rt(e,i);break;case"decks":await Se(e,i);break;case"boosters":await oi(e,i);break;case"match":await Ei(e,i);break;case"market":await Ni(e,i);break;case"rankings":await Ki(e,i);break;case"matches":await Ui(e,i);break;default:await nt(e,i)}}function Wi(){const e=document.getElementById("app"),t=H.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(l=>{l.addEventListener("click",p=>{p.preventDefault(),Ae(l.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ae("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ae("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const p=Me()==="dark"?"light":"dark";Yi(p),ft(p)}),ft(Me())}function ft(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Xi(){qe(Me()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&Ge()}),document.getElementById("modal-close").addEventListener("click",Ge);const{data:{session:e}}=await w.auth.getSession();if(!e){mt(),tt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:ke});return}H.user=e.user,await Ee(),mt();try{const{data:t}=await w.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(l=>{i[l.formation]=l.links}),jt(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!H.profile){St(document.getElementById("app"),{state:H,navigate:async()=>{await Ee(),gt()},toast:ke,refreshProfile:Ee});return}H.profile.theme&&H.profile.theme!==Me()&&(localStorage.setItem(Qe,H.profile.theme),qe(H.profile.theme)),gt(),w.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(H.user=null,H.profile=null,document.getElementById("app").innerHTML="",tt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:ke}))})}function gt(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Wi(),zt()}function mt(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}Xi();
