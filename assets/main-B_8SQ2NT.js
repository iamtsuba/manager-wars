import{s as $,F as Re,b as ve,c as xt,l as xe,d as jt}from"./formation-links-CDBKB_z4.js";function tt(e,{navigate:t,toast:i}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(d=>{d.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),d.classList.add("active"),document.getElementById("tab-login").style.display=d.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=d.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const d=document.getElementById("login-email").value.trim(),c=document.getElementById("login-password").value,n=document.getElementById("login-error");if(n.textContent="",!d||!c){n.textContent="Remplissez tous les champs.";return}const a=document.getElementById("login-btn");a.textContent="Connexion…",a.disabled=!0;const{error:r}=await $.auth.signInWithPassword({email:d,password:c});if(a.textContent="Se connecter",a.disabled=!1,r){n.textContent=r.message.includes("Invalid")?"Email ou mot de passe incorrect.":r.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",d=>{d.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const d=document.getElementById("reg-email").value.trim(),c=document.getElementById("reg-password").value,n=document.getElementById("reg-confirm").value,a=document.getElementById("reg-error");if(a.textContent="",!d||!c||!n){a.textContent="Remplissez tous les champs.";return}if(c.length<6){a.textContent="Mot de passe trop court (min. 6 caractères).";return}if(c!==n){a.textContent="Les mots de passe ne correspondent pas.";return}const r=document.getElementById("reg-btn");r.textContent="Création…",r.disabled=!0;const{error:l}=await $.auth.signUp({email:d,password:c});if(r.textContent="Créer mon compte",r.disabled=!1,l){a.textContent=l.message;return}i("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=d})}function St(e,{state:t,navigate:i,toast:d,refreshProfile:c}){let n="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function r(){var g;const s=document.getElementById("logo-preview"),o=document.getElementById("logo-initials"),p=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",f=p.trim().split(" ").filter(Boolean),u=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():p.slice(0,2).toUpperCase();s&&(s.style.background=a,s.style.borderColor=n),o&&(o.textContent=u,o.style.color=n)}document.getElementById("color1").addEventListener("input",s=>{n=s.target.value,document.getElementById("swatch1").style.background=n,r()}),document.getElementById("color2").addEventListener("input",s=>{a=s.target.value,document.getElementById("swatch2").style.background=a,r()});function l(s){document.querySelectorAll(".setup-step").forEach(o=>o.classList.remove("active")),document.getElementById(`step-${s}`).classList.add("active"),document.getElementById("step-num").textContent=s,document.getElementById("progress-fill").style.width=`${Math.round(s/3*100)}%`,s===3&&r()}document.getElementById("step1-next").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("step1-error");if(o.textContent="",s.length<3){o.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:p}=await $.from("users").select("id").eq("pseudo",s).maybeSingle();if(p){o.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const s=document.getElementById("setup-club").value.trim(),o=document.getElementById("step2-error");if(o.textContent="",s.length<2){o.textContent="Nom trop court (min. 2 caractères).";return}const{data:p}=await $.from("users").select("id").eq("club_name",s).maybeSingle();if(p){o.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("setup-club").value.trim(),p=document.getElementById("step3-error"),f=document.getElementById("step3-finish");p.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:u}=await $.from("users").insert({id:t.user.id,pseudo:s,club_name:o,club_color1:n,club_color2:a,credits:1e4});if(u)throw u;await Bt(t.user.id),await c(),d(`Bienvenue ${s} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(u){p.textContent=u.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function Bt(e){const{data:t}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price").eq("is_active",!0);if(!t||t.length===0)return;const i=t,d=i.filter(l=>l.job==="GK"),c=i.filter(l=>l.job!=="GK"),n=[];for(let l=0;l<5;l++){let s=[];if(l===0&&d.length>0){const o=d[Math.floor(Math.random()*d.length)];s.push(o);const p=it([...c]).slice(0,3);s.push(...p)}else s=it([...i]).slice(0,4);s.forEach(o=>{n.push({owner_id:e,player_id:o.id,card_type:"player"})})}["Ressusciter","Double attaque","Bouclier"].forEach(l=>{n.push({owner_id:e,card_type:"game_changer",gc_type:l})});const r=["4-4-2","4-3-3","3-4-3","3-5-2","5-3-2"];n.push({owner_id:e,card_type:"formation",formation:r[Math.floor(Math.random()*r.length)]}),n.length>0&&await $.from("cards").insert(n),await $.from("users").update({first_booster_opened:!0}).eq("id",e)}function it(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}async function nt(e,{state:t,navigate:i,toast:d}){var a;const c=t.profile;if(!c)return;const{data:n}=await $.from("matches").select("id,home_score,away_score,status,mode,winner_id,created_at").or(`home_id.eq.${c.id},away_id.eq.${c.id}`).eq("status","finished").order("created_at",{ascending:!1}).limit(3);e.innerHTML=`
  <div class="page">
    <div class="page-body">

      <!-- Bandeau pseudo (couleurs du club) -->
      <div class="hero hero-compact" style="background:${c.club_color1};border:2px solid ${c.club_color2}">
        <button class="nav-rankings-btn" id="nav-rankings" title="Classement">
          <img src="/manager-wars/icons/badge-trophy.png" alt="Classement">
        </button>
        <div class="info">
          <h3 style="margin:0">${c.pseudo}</h3>
          <div class="level">Niveau ${c.level} · ${c.club_name}</div>
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
          ${n.map(r=>{const l=r.winner_id===c.id,s=r.home_score===r.away_score,o=s?"N":l?"V":"D",p=s?"#888":l?"#1A6B3C":"#c0392b",f={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat"}[r.mode]||r.mode,g=new Date(r.created_at).toLocaleDateString("fr",{month:"short",day:"numeric"});return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--gray-200)">
              <div>
                <div style="font-size:13px;font-weight:600">${f}</div>
                <div style="font-size:11px;color:var(--gray-600)">${g}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <span style="font-size:14px;font-weight:700">${r.home_score} - ${r.away_score}</span>
                <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${o}</span>
              </div>
            </div>`}).join("")}
        </div>
      </div>`:""}

      <!-- Logout -->
      <div style="text-align:center;padding:12px 0;display:flex;flex-direction:column;gap:8px;align-items:center">
        <button class="btn btn-ghost btn-sm" id="logout-btn" style="color:var(--gray-600)">Déconnexion</button>
        ${c.is_admin?`
        <a href="/manager-wars/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:6px 16px;border-radius:8px">
          ⚙️ Admin Editor
        </a>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(r=>{r.addEventListener("click",l=>{l.preventDefault(),i(r.dataset.nav)})}),(a=document.getElementById("nav-rankings"))==null||a.addEventListener("click",()=>i("rankings")),e.querySelectorAll("[data-action]").forEach(r=>{r.addEventListener("click",()=>{r.classList.add("tapped"),setTimeout(()=>r.classList.remove("tapped"),200);const l=r.dataset.action;if(l==="match-ai"){Ft(i);return}if(l==="match-random"){i("match",{matchMode:"random"});return}d("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await $.auth.signOut(),window.location.reload()})}function Ft(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${t.map(c=>`
            <div class="action-card" data-mode="${c.mode}" style="cursor:pointer">
              <div class="icon">${c.icon}</div>
              <div class="label">${c.label}</div>
              <div class="sub">${c.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const d=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",d),i.addEventListener("click",c=>{c.target===i&&d()}),i.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{d(),e("match",{matchMode:c.dataset.mode})})})}const ce={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Y(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const ot=["ATT","MIL","DEF","GK"];function Ne(e){let t=0;const i=e.length;for(let d=0;d<i;d++)for(let c=d+1;c<i;c++){const n=e[d],a=e[c];if(!n||!a)continue;const r=n._col!==void 0&&a._col!==void 0&&n._col===a._col,l=n._col!==void 0&&a._col!==void 0&&Math.abs(n._col-a._col)===1,s=ot.indexOf(n._line),o=ot.indexOf(a._line),p=Math.abs(s-o)===1;(n._line===a._line&&l||r&&p)&&(n.country_code&&a.country_code&&n.country_code===a.country_code&&t++,n.club_id&&a.club_id&&n.club_id===a.club_id&&t++)}return t}function Oe(e,t={}){const i=e.reduce((n,a)=>{const r=a._line||a.job;return n+(Number(r==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),d=Ne(e);let c=i+d;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:i,links:d,total:Math.max(0,c)}}function Pe(e,t={}){const i=e.reduce((n,a)=>{const r=a._line||a.job;let l=0;return r==="GK"?l=Number(a.note_g)||0:r==="MIL"?l=Number(a.note_m)||0:l=Number(a.note_d)||0,n+l+(a.boost||0)},0),d=Ne(e);let c=i+d;return t.stolenNote&&(c-=t.stolenNote),{base:i,links:d,total:Math.max(0,c)}}function rt(e){const t=e.reduce((d,c)=>d+Y(c,"MIL"),0),i=Ne(e);return t+i}function He(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function yt(e,t,i="easy"){const d=e.filter(a=>!a.used);if(!d.length)return[];const c=[...d].sort((a,r)=>{const l=t==="attack"?Y(a,"ATT"):a._line==="GK"?Y(a,"GK"):Y(a,"DEF");return(t==="attack"?Y(r,"ATT"):r._line==="GK"?Y(r,"GK"):Y(r,"DEF"))-l});let n=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(n,c.length,3))}function Dt(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const ht={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ie={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},_e=["GK","DEF","MIL","ATT"],Gt=["Tous","GK","DEF","MIL","ATT"],qt={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},Ke={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function vt(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ye(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Ce(e,t=""){var p,f;const i=e.player;if(!i)return"";const d=i.job||"ATT",c=Ie[d],n=ht[i.rarity]||"#ccc",a=ye(i,d),r=i.job2?ye(i,i.job2):null,l=i.job2?Ie[i.job2]:null,s=vt(i),o=Ke[i.country_code]||i.country_code||"";return`
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
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${c}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${c}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${a}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${r!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${l}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${r}</text>
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${o}</div>
        ${(p=i.clubs)!=null&&p.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=i.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function at(e){const t=e.job||"ATT",i=ye(e,t),d=Ke[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${d}</div>
      </div>
    </div>
  </div>`}async function Rt(e,t){const{state:i,navigate:d,toast:c,openModal:n,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await $.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await $.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),s=(r||[]).filter(A=>A.card_type==="player"&&A.player),o=(r||[]).filter(A=>A.card_type==="game_changer"),p=(r||[]).filter(A=>A.card_type==="formation"),{data:f}=await $.from("gc_definitions").select("name,gc_type,color,effect,image_url"),u={};(f||[]).forEach(A=>{u[A.name]=A});const g=Object.keys(Re),y=Object.keys(ce),v={};s.forEach(A=>{const T=A.player.id;v[T]=(v[T]||0)+1}),new Set(Object.keys(v).map(A=>String(A)));const k=new Set(p.map(A=>A.formation)),_=new Set(o.map(A=>A.gc_type));let m="player",h="Tous",E="",x=!1;function b(){return[...s].sort((A,T)=>{const B=_e.indexOf(A.player.job),j=_e.indexOf(T.player.job);return B!==j?B-j:(A.player.surname_encoded||"").localeCompare(T.player.surname_encoded||"")})}function w(){return[...l||[]].sort((A,T)=>{const B=_e.indexOf(A.job),j=_e.indexOf(T.job);return B!==j?B-j:(A.surname_encoded||"").localeCompare(T.surname_encoded||"")})}function I(){return b().filter(A=>{const T=A.player,B=h==="Tous"||T.job===h,j=!E||`${T.firstname} ${T.surname_encoded}`.toLowerCase().includes(E);return B&&j})}function L(){return w().filter(A=>{const T=h==="Tous"||A.job===h,B=!E||`${A.firstname} ${A.surname_encoded}`.toLowerCase().includes(E);return T&&B})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${m==="player"?"var(--green)":"transparent"};
        color:${m==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${s.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${m==="formation"?"var(--green)":"transparent"};
        color:${m==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${p.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${m==="gc"?"var(--green)":"transparent"};
        color:${m==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function S(){const A=document.getElementById("col-filters");A&&(m==="player"?(A.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${E}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Gt.map(T=>`
            <button class="filter-btn" data-job="${T}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${T===h?"var(--green)":"var(--gray-200)"};
                background:${T===h?"var(--green)":"#fff"};
                color:${T===h?"#fff":"var(--gray-600)"}">
              ${T}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${x?"var(--yellow)":"var(--gray-200)"};
              background:${x?"var(--yellow)":"#fff"};
              color:${x?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${x?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",T=>{E=T.target.value.toLowerCase(),F()}),e.querySelectorAll(".filter-btn").forEach(T=>{T.addEventListener("click",()=>{h=T.dataset.job,S(),F()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{x=!x,S(),F()})):(A.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${x?"var(--yellow)":"var(--gray-200)"};
              background:${x?"var(--yellow)":"#fff"};
              color:${x?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${x?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{x=!x,S(),F()})))}function F(){const A=document.getElementById("col-grid");A&&(m==="player"?N(A):m==="formation"?Z(A):te(A))}function R(A,T,B,j,C){C=C||"#7a28b8";const q=document.getElementById("col-grid"),z=document.getElementById("col-big");if(!q||!z)return;var V=0;function K(){z.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+T(A[V])+"</div>";var U=z.querySelector("[data-card-id],[data-form-id],[data-gc-id]");U&&U.addEventListener("click",function(){j(A[V])}),requestAnimationFrame(function(){var O=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!O||!z)){var X=z.clientHeight-8,Q=z.clientWidth-24,ee=O.offsetHeight,ie=O.offsetWidth;if(ee>0&&ie>0&&X>40){var ae=Math.min(X/ee,Q/ie,1);O.style.transform="scale("+ae.toFixed(3)+")",O.style.transformOrigin="top center"}}}),q.innerHTML=A.map(function(O,X){return'<div class="col-mini-item" data-idx="'+X+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(X===V?C:"transparent")+';transition:border-color .15s;overflow:hidden">'+B(O,X===V)+"</div>"}).join(""),q.querySelectorAll(".col-mini-item").forEach(function(O){O.addEventListener("click",function(){V=Number(O.dataset.idx),K(),O.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}K()}function D(A){var T=.54,B=Math.round(140*T),j=Math.round(310*T),C;if(!A||A._fake){var q=A?A.player:null;if(!q)return"";C=at(q)}else C=Ce(A,"");return'<div style="width:'+B+"px;height:"+j+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+T+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+C+"</div></div>"}function M(A,T,B){T=T||100,B=B||140;var j=ve[A]||{},C={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},q=Math.max(3,Math.round(T*.06)),z=Object.entries(j).map(function(K){var U=K[0],O=K[1],X=U.replace(/\d+$/,""),Q=C[X]||"#888",ee=Math.round(O.x*T),ie=Math.round(O.y*B);return'<circle cx="'+ee+'" cy="'+ie+'" r="'+q+'" fill="'+Q+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),V=Math.max(1,Math.round(T/50));return'<svg viewBox="0 0 '+T+" "+B+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+T+'" height="'+B+'" fill="#1A6B3C"/><rect x="'+Math.round(T*.2)+'" y="'+Math.round(B*.02)+'" width="'+Math.round(T*.6)+'" height="'+Math.round(B*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+V+'"/><line x1="0" y1="'+Math.round(B*.5)+'" x2="'+T+'" y2="'+Math.round(B*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+V+'"/><ellipse cx="'+Math.round(T*.5)+'" cy="'+Math.round(B*.5)+'" rx="'+Math.round(T*.18)+'" ry="'+Math.round(B*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+V+'"/><rect x="'+Math.round(T*.2)+'" y="'+Math.round(B*.82)+'" width="'+Math.round(T*.6)+'" height="'+Math.round(B*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+V+'"/>'+z+"</svg>"}function G(A,T,B){var j=B>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+B+"</div>":"",C=T?'data-form-id="'+T.id+'"':"",q=A.length>7?14:A.length>5?16:19,z=!!T;return"<div "+C+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(z?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(z?"":"filter:grayscale(1);opacity:0.5")+'">'+j+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(z?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+q+"px;font-weight:900;color:"+(z?"#1A6B3C":"#aaa")+';line-height:1">'+A+'</div></div><div style="flex:1;overflow:hidden;background:'+(z?"#1A6B3C":"#ccc")+'">'+M(A,140,220)+"</div></div>"}function P(A,T){var B=.54,j=Math.round(140*B),C=Math.round(305*B),q=Math.round(C*.22),z=C-q,V=A.length>7?5:7,K=M(A,j,z),U=T?"1.5px solid #2a7a40":"1px solid #ddd",O=T?"":"filter:grayscale(1);opacity:0.45;",X=T?"#1A6B3C":"#bbb",Q="#fff";return'<div style="width:'+j+"px;height:"+C+"px;border-radius:6px;border:"+U+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+O+'"><div style="height:'+q+"px;background:"+X+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+V+"px;font-weight:900;color:"+Q+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(j-4)+'px">'+A+'</span></div><div style="height:'+z+'px;overflow:hidden;flex-shrink:0">'+K+"</div></div>"}function N(A){if(x){const T=L();if(!T.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const B=T.map(j=>s.find(C=>C.player.id===j.id)||{_fake:!0,player:j,id:"fake-"+j.id});R(B,j=>j._fake?at(j.player):Ce(j,""),j=>j._fake?D({player:j.player,id:"x",_fake:!0}):D(j),j=>{j._fake||st(j,s,v,t)},"#1A6B3C")}else{const T=I();if(!T.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const B={},j=[];T.forEach(C=>{B[C.player.id]||(B[C.player.id]=!0,j.push(C))}),R(j,C=>{const q=v[C.player.id]||1,z=q>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${q}</div>`:"",K=s.filter(U=>U.player.id===C.player.id&&U.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Ce(C,z+K)},C=>D(C),C=>st(C,s,v,t),"#1A6B3C")}}function Z(A){const T=x?g:[...k];if(!T.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const B=T.map(j=>({formation:j,card:p.find(C=>C.formation===j)||null,owned:k.has(j)}));R(B,({formation:j,card:C,owned:q})=>G(j,q?C:null,q?p.filter(z=>z.formation===j).length:0),({formation:j,owned:C})=>P(j,C),({card:j,owned:C})=>{C&&j&&Ot(j,p,t,n)},"#1A6B3C")}function te(A){const T=Object.keys(u),B=x?T.length?T:y:[..._];if(!B.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const j=B.map(C=>({type:C,gc:ce[C]||{icon:"⚡",desc:""},def:u[C]||null,owned:_.has(C),card:o.find(q=>q.gc_type===C)||null}));R(j,({type:C,gc:q,def:z,owned:V,card:K})=>{const U=V?o.filter(Ct=>Ct.gc_type===C).length:0,O=U>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${U}</div>`:"",X=(z==null?void 0:z.gc_type)==="ultra_game_changer",Q={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ee={purple:"#b06ce0",light_blue:"#00d4ef"},ie=Q[z==null?void 0:z.color]||Q.purple,ae=ee[z==null?void 0:z.color]||ee.purple,be=(z==null?void 0:z.effect)||q.desc||"",et=z!=null&&z.image_url?`/manager-wars/icons/${z.image_url}`:null;return V&&K?`<div data-gc-id="${K.id}" data-gc-type="${C}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${ae};background:${ie};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${ae}66;cursor:pointer">
          ${O}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${C.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${C}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${X?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${et?`<img src="${et}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${q.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${be.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${C}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${q.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:C,gc:q,def:z,owned:V})=>V?(()=>{const K=Math.round(75.60000000000001),U=Math.round(310*.54),O=Math.round(U*.65),X=Math.round(U*.18),Q={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ee={purple:"#9b59b6",light_blue:"#00bcd4"},ie=Q[z==null?void 0:z.color]||Q.purple,ae=ee[z==null?void 0:z.color]||ee.purple,be=z!=null&&z.image_url?`/manager-wars/icons/${z.image_url}`:null;return`<div style="width:${K}px;height:${U}px;border-radius:8px;background:${ie};border:1px solid ${ae};display:flex;flex-direction:column;overflow:hidden"><div style="height:${X}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${K-6}px">${C}</span></div><div style="height:${O}px;display:flex;align-items:center;justify-content:center">${be?`<img src="${be}" style="max-width:${K-8}px;max-height:${O-4}px;object-fit:contain">`:`<span style="font-size:24px">${q.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((z==null?void 0:z.effect)||q.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const K=Math.round(75.60000000000001),U=Math.round(310*.54);return`<div style="width:${K}px;height:${U}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${q.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${C}</span></div>`})(),({type:C,owned:q,def:z})=>{q&&Nt(C,z,n)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(A=>{A.addEventListener("click",()=>{m=A.dataset.tab,h="Tous",E="",x=!1,e.querySelectorAll(".col-tab-btn").forEach(T=>{const B=T.dataset.tab===m;T.style.borderBottomColor=B?"var(--green)":"transparent",T.style.color=B?"var(--green)":"var(--gray-600)"}),S(),F()})}),S(),F()}function Nt(e,t,i){const d=ce[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",n={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},r=n[t==null?void 0:t.color]||n.purple,l=a[t==null?void 0:t.color]||a.purple,s=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||d.desc,p=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${r};border-radius:16px;border:2px solid ${l};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${s}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${p?`<img src="${p}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${d.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${o}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ge=1e3;function Ot(e,t,i,d){var y,v,k;const{state:c,toast:n,closeModal:a,navigate:r,refreshProfile:l}=i,s=e.formation,o={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function p(){const _=ve[s]||{},m=Re[s]||[],h=290,E=360,x=20;function b(I){const L=_[I];return L?{x:L.x*h,y:L.y*E}:null}let w=`<svg width="${h}" height="${E}" viewBox="0 0 ${h} ${E}" xmlns="http://www.w3.org/2000/svg">`;for(const[I,L]of m){const S=b(I),F=b(L);!S||!F||(w+=`<line x1="${S.x}" y1="${S.y}" x2="${F.x}" y2="${F.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const I of Object.keys(_)){const L=b(I);if(!L)continue;const S=I.replace(/\d+/,""),F=o[S]||"#555";w+=`<circle cx="${L.x}" cy="${L.y}" r="${x}" fill="${F}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,w+=`<text x="${L.x}" y="${L.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${S}</text>`}return w+="</svg>",w}const f=t.filter(_=>_.formation===s),u=f.length,g=!e.is_for_sale;d(`Formation ${s}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${p()}
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(y=document.getElementById("direct-sell-form-btn"))==null||y.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${s} pour ${ge.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const _=f.find(h=>!h.is_for_sale)||f[0];if(!_){n("Aucune carte à vendre","error");return}const{error:m}=await $.from("cards").delete().eq("id",_.id);if(m){n(m.message,"error");return}await $.from("users").update({credits:(c.profile.credits||0)+ge}).eq("id",c.profile.id),await l(),n(`+${ge.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),r("collection")}),(v=document.getElementById("market-sell-form-btn"))==null||v.addEventListener("click",async()=>{const _=parseInt(document.getElementById("sell-price-form").value);if(!_||_<1){n("Prix invalide","error");return}await $.from("cards").update({is_for_sale:!0,sale_price:_}).eq("id",e.id),await $.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:_}),n("Carte mise en vente sur le marché !","success"),a(),r("collection")}),(k=document.getElementById("cancel-sell-form-btn"))==null||k.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),n("Annonce retirée","success"),a(),r("collection")})}async function st(e,t,i,d){var w,I,L,S,F,R;const{state:c,toast:n,openModal:a,closeModal:r,navigate:l,refreshProfile:s}=d,o=e.player,p=t.filter(D=>D.player.id===o.id),f=p.length,u=qt[o.rarity]||1e3,g=o.rarity!=="legende",y=vt(o),v=ye(o,o.job),k=o.job2?ye(o,o.job2):null,_=Ie[o.job]||"#1A6B3C",m=o.job2?Ie[o.job2]:null,h=ht[o.rarity]||"#ccc",E=Ke[o.country_code]||o.country_code||"",{data:x}=await $.from("transfer_history").select("club_name, manager_name, source, price, transferred_at").eq("player_id",o.id).order("transferred_at",{ascending:!0}),b=x&&x.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${x.map(D=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
            <div style="font-size:13px">${D.club_name} <span style="color:var(--gray-600)">(${D.manager_name})</span></div>
            <div style="font-size:13px;font-weight:700;color:${D.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${D.source==="booster"?"Booster":D.price?D.price.toLocaleString("fr")+"€":"—"}</div>
          </div>`).join("")}
      </div>
    </div>`:"";a(`${o.firstname} ${o.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${h};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${o.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(o.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${_}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${_}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${v}</text>
            </svg>
            ${k!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${m}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${k}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${y?`<img src="${y}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${E}</div>
            ${(w=o.clubs)!=null&&w.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((I=o.clubs)==null?void 0:I.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${h}">${o.rarity.toUpperCase()}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${o.job}${o.job2?" / "+o.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">NOTES</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;font-size:12px">
            <span>GK <b>${o.note_g||0}</b></span>
            <span>DEF <b>${o.note_d||0}</b></span>
            <span>MIL <b>${o.note_m||0}</b></span>
            <span>ATT <b>${o.note_a||0}</b></span>
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${f}</div>
        </div>
      </div>
    </div>
    ${b}

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
        <input type="number" id="sell-price" min="1" placeholder="Prix en crédits" value="${o.sell_price||5e3}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-btn">Retirer</button>
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(L=document.getElementById("close-detail"))==null||L.addEventListener("click",r),(S=document.getElementById("direct-sell-btn"))==null||S.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${o.surname_encoded} pour ${u.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const D=p.find(G=>!G.is_for_sale)||p[0];if(!D){n("Aucune carte à vendre","error");return}const{error:M}=await $.from("cards").delete().eq("id",D.id);if(M){n(M.message,"error");return}await $.from("users").update({credits:(c.profile.credits||0)+u}).eq("id",c.profile.id),await s(),n(`+${u.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),l("collection")}),(F=document.getElementById("market-sell-btn"))==null||F.addEventListener("click",async()=>{const D=parseInt(document.getElementById("sell-price").value);if(!D||D<1){n("Prix invalide","error");return}await $.from("cards").update({is_for_sale:!0,sale_price:D}).eq("id",e.id),await $.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:D}),n("Carte mise en vente sur le marché !","success"),r(),l("collection")}),(R=document.getElementById("cancel-sell-btn"))==null||R.addEventListener("click",async()=>{await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await $.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),n("Annonce retirée","success"),r(),l("collection")})}const Te={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},re={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ze(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function bt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function _t(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Pt(e,t=44,i=58){var u;const d=e?ze(e):null,c=e?_t(e):null,n=bt(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",r=re[a]||"#555",l={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",s=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,o=Math.round(i*.19),p=Math.round(i*.25),f=i-o-p;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${l};background:${r};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${d?`<img src="${d}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${n?`<img src="${n}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">🌍</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${s}</span>
      ${c?`<img src="${c}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:(u=e==null?void 0:e.clubs)!=null&&u.encoded_name?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Se(e,t){const{state:i,navigate:d,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await $.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!a)return;const{data:r,error:l}=await $.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(l){c(l.message,"error");return}c("Deck créé !","success"),dt(r.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>dt(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const r=prompt("Nouveau nom :",a.dataset.name);if(!r||r===a.dataset.name)return;const{error:l}=await $.from("decks").update({name:r}).eq("id",a.dataset.rename);if(l){c(l.message,"error");return}c("Deck renommé !","success"),Se(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await $.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:r}=await $.from("decks").delete().eq("id",a.dataset.delete);if(r){c(r.message,"error");return}c("Deck supprimé.","success"),Se(e,t)})})}async function dt(e,t,i){const{state:d,toast:c}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await $.from("decks").select("*").eq("id",e).single(),{data:a}=await $.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",d.profile.id),r=(a||[]).filter(u=>u.card_type==="player"&&u.player),l=(a||[]).filter(u=>u.card_type==="formation"),s=l.map(u=>u.formation).filter(Boolean),{data:o}=await $.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=n.formation||"4-4-2";s.length>0&&!s.includes(p)&&(p=s[0]);const f={deckId:e,name:n.name,formation:p,formationCardId:n.formation_card_id,slots:{},subs:[],playerCards:r,formationCards:l,availableFormations:s};(o||[]).forEach(u=>{u.is_starter?f.slots[u.position]=u.card_id:f.subs.includes(u.card_id)||f.subs.push(u.card_id)}),pe(t,f,i)}function pe(e,t,i){var l;const{navigate:d}=i;Te[t.formation];const c=lt(t.formation),n=c.filter(s=>t.slots[s]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(Te),r=t.subs.map(s=>t.playerCards.find(o=>o.id===s)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${r.map(s=>{const o=s.player;return`<div style="position:relative;flex-shrink:0">
            ${Pt(o,44,58)}
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
  </div>`,Ht(e,t,c,i),document.getElementById("builder-back").addEventListener("click",()=>d("decks")),document.getElementById("formation-select").addEventListener("change",s=>{t.formation=s.target.value;const o=lt(t.formation),p={};o.forEach(f=>{t.slots[f]&&(p[f]=t.slots[f])}),t.slots=p,pe(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>Vt(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(s=>{s.addEventListener("click",()=>{t.subs=t.subs.filter(o=>o!==s.dataset.removeSub),pe(e,t,i)})}),(l=document.getElementById("add-sub-btn"))==null||l.addEventListener("click",()=>{Ut(t,e,i)})}function Ht(e,t,i,d){const c=e.querySelector("#deck-field");if(!c)return;const n=ve[t.formation]||{},a=xt(t.formation)||[],r={};for(const k of i){const _=t.slots[k],m=_?t.playerCards.find(h=>h.id===_):null;r[k]=m?m.player:null}const l=300,s=300,o=48,p=64,f=13,u=16,g=38;function y(k){const _=n[k];return _?{x:_.x*l,y:_.y*s}:null}let v="";for(const[k,_]of a){const m=y(k),h=y(_);if(!m||!h)continue;const E=r[k]?{...r[k],club_id:r[k].club_id,country_code:r[k].country_code,rarity:r[k].rarity}:null,x=r[_]?{...r[_],club_id:r[_].club_id,country_code:r[_].country_code,rarity:r[_].rarity}:null,b=xe(E,x);b==="#ff3333"||b==="#cc2222"?v+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${h.x.toFixed(1)}" y2="${h.y.toFixed(1)}" stroke="${b}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(v+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${h.x.toFixed(1)}" y2="${h.y.toFixed(1)}" stroke="${b}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,v+=`<line x1="${m.x.toFixed(1)}" y1="${m.y.toFixed(1)}" x2="${h.x.toFixed(1)}" y2="${h.y.toFixed(1)}" stroke="${b}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const k of i){const _=y(k);if(!_)continue;const m=r[k],h=k.replace(/\d+/,""),E=re[h]||"#555",x=(_.x-o/2).toFixed(1),b=(_.y-p/2).toFixed(1),w={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[m==null?void 0:m.rarity]||"#aaa";if(m){const I=ze(m),L=_t(m),S=bt(m.country_code),F=Number(h==="GK"?m.note_g:h==="DEF"?m.note_d:h==="MIL"?m.note_m:m.note_a)||0,R=p-f-u;v+=`<defs><clipPath id="dcp-${k}"><rect x="${x}" y="${(_.y-p/2+f).toFixed(1)}" width="${o}" height="${R}"/></clipPath></defs>`,v+=`<rect x="${x}" y="${b}" width="${o}" height="${p}" rx="5" fill="${E}"/>`,I&&(v+=`<image href="${I}" x="${x}" y="${(_.y-p/2+f).toFixed(1)}" width="${o}" height="${R}" clip-path="url(#dcp-${k})" preserveAspectRatio="xMidYMin slice"/>`),v+=`<rect x="${x}" y="${b}" width="${o}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,v+=`<text x="${_.x.toFixed(1)}" y="${(_.y-p/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(m.surname_encoded||"").slice(0,9)}</text>`;const D=(_.y+p/2-u).toFixed(1);v+=`<rect x="${x}" y="${D}" width="${o}" height="${u}" fill="rgba(255,255,255,0.93)"/>`,S&&(v+=`<image href="${S}" x="${(_.x-21).toFixed(1)}" y="${(_.y+p/2-u+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),v+=`<text x="${_.x.toFixed(1)}" y="${(_.y+p/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${F}</text>`,L&&(v+=`<image href="${L}" x="${(_.x+o/2-14).toFixed(1)}" y="${(_.y+p/2-u+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),v+=`<rect x="${x}" y="${b}" width="${o}" height="${p}" rx="5" fill="none" stroke="${w}" stroke-width="2"/>`}else v+=`<rect x="${x}" y="${b}" width="${o}" height="${p}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,v+=`<text x="${_.x.toFixed(1)}" y="${_.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,v+=`<text x="${_.x.toFixed(1)}" y="${(_.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${h}</text>`;v+=`<rect x="${x}" y="${b}" width="${o}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${k}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-g} ${-g} ${l+g*2} ${s+g*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${v}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(k=>{k.addEventListener("click",()=>Kt(k.dataset.pos,t,e,d))})}function Kt(e,t,i,d){var f,u,g;const{openModal:c,closeModal:n}=d,a=e.replace(/\d+/,""),r=t.slots[e],l=r?t.playerCards.find(y=>y.id===r):null;(f=l==null?void 0:l.player)==null||f.id;const s=new Set;Object.entries(t.slots).forEach(([y,v])=>{var _;if(y===e||!v)return;const k=t.playerCards.find(m=>m.id===v);(_=k==null?void 0:k.player)!=null&&_.id&&s.add(k.player.id)}),t.subs.forEach(y=>{var k;const v=t.playerCards.find(_=>_.id===y);(k=v==null?void 0:v.player)!=null&&k.id&&s.add(v.player.id)});const o=new Set,p=t.playerCards.filter(y=>{const v=y.player;return!(v.job===a||v.job2===a)||s.has(v.id)||o.has(v.id)?!1:(o.add(v.id),!0)});p.sort((y,v)=>{const k=a==="GK"?y.player.note_g:a==="DEF"?y.player.note_d:a==="MIL"?y.player.note_m:y.player.note_a;return(a==="GK"?v.player.note_g:a==="DEF"?v.player.note_d:a==="MIL"?v.player.note_m:v.player.note_a)-k}),c(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${p.length>0?p.map(y=>{var h,E;const v=y.player,k=a==="GK"?v.note_g:a==="DEF"?v.note_d:a==="MIL"?v.note_m:v.note_a,_=ze(v),m={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[v.rarity];return`<div class="player-option" data-card-id="${y.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${re[a]}">
            ${_?`<img src="${_}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${re[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${v.firstname} ${v.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${v.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${v.country_code}">
              ${(h=v.clubs)!=null&&h.logo_url?`<img src="${v.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((E=v.clubs)==null?void 0:E.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${v.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${re[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${m};flex-shrink:0">
            ${k}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(u=document.getElementById("close-selector"))==null||u.addEventListener("click",n),(g=document.getElementById("remove-player"))==null||g.addEventListener("click",()=>{delete t.slots[e],n(),pe(i,t,d)}),document.querySelectorAll(".player-option").forEach(y=>{y.addEventListener("click",()=>{t.slots[e]=y.dataset.cardId,n(),pe(i,t,d)})})}function Ut(e,t,i){var l;const{openModal:d,closeModal:c}=i,n=new Set;Object.values(e.slots).filter(Boolean).forEach(s=>{var p;const o=e.playerCards.find(f=>f.id===s);(p=o==null?void 0:o.player)!=null&&p.id&&n.add(o.player.id)}),e.subs.forEach(s=>{var p;const o=e.playerCards.find(f=>f.id===s);(p=o==null?void 0:o.player)!=null&&p.id&&n.add(o.player.id)});const a=new Set,r=e.playerCards.filter(s=>{var o,p,f;return n.has((o=s.player)==null?void 0:o.id)||a.has((p=s.player)==null?void 0:p.id)?!1:(a.add((f=s.player)==null?void 0:f.id),!0)});d("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${r.length>0?r.map(s=>{var u;const o=s.player,p=ze(o),f=o.job==="GK"?o.note_g:o.job==="DEF"?o.note_d:o.job==="MIL"?o.note_m:o.note_a;return`<div class="player-option" data-card-id="${s.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${re[o.job]}">
            ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${o.firstname} ${o.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${o.job} · ${o.country_code} · ${((u=o.clubs)==null?void 0:u.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${re[o.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(l=document.getElementById("close-sub-selector"))==null||l.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(s=>{s.addEventListener("click",()=>{e.subs.push(s.dataset.cardId),c(),pe(t,e,i)})})}async function Vt(e,t){const{state:i,toast:d,navigate:c}=t,n=e.formationCards.find(l=>l.formation===e.formation),a=(n==null?void 0:n.id)||e.formationCardId;await $.from("decks").update({formation:e.formation,formation_card_id:a||null}).eq("id",e.deckId),await $.from("deck_cards").delete().eq("deck_id",e.deckId);const r=[];if(Object.entries(e.slots).forEach(([l,s],o)=>{r.push({deck_id:e.deckId,card_id:s,position:l,is_starter:!0,slot_order:o})}),e.subs.forEach((l,s)=>{r.push({deck_id:e.deckId,card_id:l,position:`SUB${s+1}`,is_starter:!1,slot_order:100+s})}),r.length>0){const{error:l}=await $.from("deck_cards").insert(r);if(l){d(l.message,"error");return}}d("Deck enregistré ✅","success"),c("decks")}function lt(e){const t=Te[e]||Te["4-4-2"],i=["GK1"];for(let d=1;d<=t.DEF;d++)i.push(`DEF${d}`);for(let d=1;d<=t.MIL;d++)i.push(`MIL${d}`);for(let d=1;d<=t.ATT;d++)i.push(`ATT${d}`);return i}const Yt="modulepreload",Wt=function(e){return"/manager-wars/"+e},ct={},Xt=function(t,i,d){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),r=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));c=Promise.allSettled(i.map(l=>{if(l=Wt(l),l in ct)return;ct[l]=!0;const s=l.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${o}`))return;const p=document.createElement("link");if(p.rel=s?"stylesheet":Yt,s||(p.as="script"),p.crossOrigin="",p.href=l,r&&p.setAttribute("nonce",r),document.head.appendChild(p),s)return new Promise((f,u)=>{p.addEventListener("load",f),p.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return c.then(a=>{for(const r of a||[])r.status==="rejected"&&n(r.reason);return t().catch(n)})};async function wt(){const{data:e}=await $.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await $.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(d=>d.booster_id===i.id)}))}function Jt(e){if(!(e!=null&&e.length))return null;const t=e.reduce((d,c)=>d+Number(c.percentage),0);let i=Math.random()*t;for(const d of e)if(i-=Number(d.percentage),i<=0)return d;return e[e.length-1]}const Zt=Object.freeze(Object.defineProperty({__proto__:null,loadActiveBoosters:wt,rollDropRate:Jt},Symbol.toStringTag,{value:"Module"})),$t=()=>Object.keys(ve),Qt=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Be={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ei(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const ti={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ii={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};function ni(e){var c;const t={};(e.rates||[]).forEach(n=>{t[n.card_type]=(t[n.card_type]||0)+Number(n.percentage||0)});const i=((c=Object.entries(t).sort((n,a)=>a[1]-n[1])[0])==null?void 0:c[0])||"player",d=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+d,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function oi(e,{state:t,navigate:i,toast:d}){var a;const c=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let n=[];try{n=(await wt()).map(ni)}catch(r){console.warn("Erreur chargement boosters DB, fallback hardcodé",r)}n.length||(n=Qt.map(r=>({...r,rates:[],isPub:r.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${n.map(r=>{const l=r.cost===0||c>=r.cost;return`<div class="booster-card ${l?"":"disabled"}" data-booster="${r.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${r.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${r.img}" alt="${r.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${r.name}</div>
            <div class="desc">${r.sub}</div>
            <div class="cost">${r.costLabel}</div>
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(r=>{r.addEventListener("click",async()=>{const l=n.find(s=>s.id===r.dataset.booster);if(l){r.style.opacity="0.5",r.style.pointerEvents="none";try{await ri(l,{state:t,toast:d,navigate:i,container:e})}catch(s){d(s.message,"error"),r.style.opacity="",r.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(r=>{r.addEventListener("click",l=>{l.stopPropagation();const s=n.find(o=>o.id===r.dataset.boosterId);fi(s)})})}async function ri(e,{state:t,toast:i,navigate:d,container:c}){if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await xi()}catch(p){i(p.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:n}=await $.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((n||[]).filter(p=>p.card_type==="player").map(p=>p.player_id)),r=new Set((n||[]).filter(p=>p.card_type==="formation").map(p=>p.formation));let l=[];const s=e.type||"player";s==="player"?l=await li(t.profile,e.cardCount,e.cost):s==="game_changer"?l=await ci(t.profile,e.cardCount,e.cost):s==="formation"?l=await pi(t.profile,e.cost):l=await di(t.profile,e),l.forEach(p=>{p.card_type==="player"&&p.player?p.isDuplicate=a.has(p.player.id):p.card_type==="formation"&&(p.isDuplicate=r.has(p.formation))});const{data:o}=await $.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),ui(l,e,d)}function ai(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function se(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function si(e,t){let i;switch(t){case"legende":i=e.filter(d=>d.rarity==="legende"),i.length||(i=e.filter(d=>d.rarity==="pepite"||d.rarity==="papyte")),i.length||(i=e.filter(d=>se(d)>=6));break;case"special":i=e.filter(d=>d.rarity==="pepite"||d.rarity==="papyte"),i.length||(i=e.filter(d=>se(d)>=6));break;case"normal_high":i=e.filter(d=>d.rarity==="normal"&&se(d)>=6),i.length||(i=e.filter(d=>se(d)>=6));break;default:i=e.filter(d=>d.rarity==="normal"&&se(d)>=1&&se(d)<=5),i.length||(i=e.filter(d=>d.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function di(e,t){if(t.cost>0){const{error:c}=await $.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(c)throw c}const{rollDropRate:i}=await Xt(async()=>{const{rollDropRate:c}=await Promise.resolve().then(()=>Zt);return{rollDropRate:c}},void 0),d=[];for(let c=0;c<(t.cardCount||5);c++){const n=i(t.rates);if(n){if(n.card_type==="player"){let a=$.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);n.rarity&&(a=a.eq("rarity",n.rarity));const{data:r}=await a;let l=r||[];if((n.note_min||n.note_max)&&(l=l.filter(p=>{const f=Math.max(Number(p.note_g)||0,Number(p.note_d)||0,Number(p.note_m)||0,Number(p.note_a)||0);return(!n.note_min||f>=n.note_min)&&(!n.note_max||f<=n.note_max)})),l.length||(n.note_min||n.note_max?(l=r||[],console.warn("[Booster] Aucun joueur avec note",n.note_min,"-",n.note_max,"— fallback rareté uniquement")):l=r||[]),!l.length)continue;const s=l[Math.floor(Math.random()*l.length)],{data:o}=await $.from("cards").insert({owner_id:e.id,player_id:s.id,card_type:"player"}).select().single();o&&(d.push({...o,player:s}),$.rpc("record_transfer",{p_card_id:o.id,p_player_id:s.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(n.card_type==="game_changer"){const{data:a}=await $.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),r=a!=null&&a.length?a:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],s=r[Math.floor(Math.random()*r.length)].name,{data:o}=await $.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:s}).select().single();o&&d.push(o)}else if(n.card_type==="formation"){const a=$t(),r=a[Math.floor(Math.random()*a.length)],{data:l}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();l!=null&&l[0]&&d.push(l[0])}}}return d}async function li(e,t,i){if(i>0){const{error:s}=await $.from("users").update({credits:e.credits-i}).eq("id",e.id);if(s)throw s}const{data:d}=await $.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(d!=null&&d.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=d.filter(s=>s.job==="GK"),n=d.filter(s=>s.job!=="GK"),a=!e.first_booster_opened&&c.length>0,r=[];for(let s=0;s<t;s++){const o=s===0&&a?c:s===0?n:d,p=ai(),f=si(o,p);f&&r.push(f)}a&&await $.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:l}=await $.from("cards").insert(r.map(s=>({owner_id:e.id,player_id:s.id,card_type:"player"}))).select();return(l||[]).forEach((s,o)=>{$.rpc("record_transfer",{p_card_id:s.id,p_player_id:r[o].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),r.map((s,o)=>({...l[o],player:s}))}async function ci(e,t,i){const{error:d}=await $.from("users").update({credits:e.credits-i}).eq("id",e.id);if(d)throw d;const{data:c}=await $.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),n=c!=null&&c.length?c:Object.keys(Be).map(o=>({name:o,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const o=n[Math.floor(Math.random()*n.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:o.name,gc_definition_id:o.id||null}}),{data:r,error:l}=await $.from("cards").insert(a).select();return l&&console.error("[Booster GC] Erreur insert:",l.message,l),(r||[]).map(o=>{const p=c==null?void 0:c.find(f=>f.name===o.gc_type||f.id===o.gc_definition_id);return{...o,_gcDef:p||null}})}async function pi(e,t){const{error:i}=await $.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const d=$t(),c=d[Math.floor(Math.random()*d.length)],{data:n,error:a}=await $.from("cards").insert({owner_id:e.id,card_type:"formation",formation:c}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),n||[]}function ui(e,t,i){var f;if(!e||e.length===0){const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",u.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(u),(f=u.querySelector("#anim-close-err"))==null||f.addEventListener("click",()=>u.remove());return}const d=document.createElement("div");d.id="booster-anim-overlay",d.innerHTML=`
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
  `,document.body.appendChild(d);let c=!1;document.getElementById("pack-visual").addEventListener("click",()=>{if(c)return;c=!0;const u=document.getElementById("pack-visual");u.classList.add("shaking"),setTimeout(()=>{u.classList.add("pack-open"),setTimeout(()=>{document.getElementById("pack-phase").style.display="none",a(0)},600)},500)});let n=0;function a(u){n=u;const g=document.getElementById("reveal-phase");g.style.display="flex",r(u)}function r(u){var x;const g=e[u],y=document.getElementById("card-counter"),v=document.getElementById("single-card-slot"),k=document.getElementById("card-tap-hint");y&&(y.textContent=`Carte ${u+1} / ${e.length}`),k&&(k.textContent=u<e.length-1?"Appuie pour continuer →":"Appuie pour voir toutes tes cartes");const _=pt(g),m=g.card_type==="player"&&((x=g.player)==null?void 0:x.rarity)==="legende";v.innerHTML=`
      <div id="current-card-wrap" class="single-card-reveal" style="cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;${m?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
        ${_}
        ${g.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`,m&&o();const h=document.getElementById("current-card-wrap");let E=!1;h.addEventListener("click",()=>{if(E)return;E=!0;const b=u+1;b<e.length?(h.style.transition="all 0.25s ease",h.style.transform="translateX(-120%) rotate(-15deg)",h.style.opacity="0",setTimeout(()=>r(b),250)):l()})}function l(){p(),document.getElementById("reveal-phase").style.display="none";const u=document.getElementById("recap-phase");u.style.display="flex";const g=document.getElementById("recap-grid");g.innerHTML=e.map((y,v)=>`
      <div class="recap-card" style="--i:${v};animation-delay:${v*.07}s;display:flex;flex-direction:column;align-items:center;gap:4px">
        ${pt(y)}
        ${y.isDuplicate?'<div style="font-size:11px;font-weight:700;color:#fff;background:#cc2222;border-radius:8px;padding:2px 10px">Doublon</div>':""}
      </div>`).join("")}let s=null;function o(){const u=document.getElementById("fireworks-canvas");if(!u)return;u.width=window.innerWidth,u.height=window.innerHeight;const g=u.getContext("2d"),y=[];function v(){const _=Math.random()*u.width,m=Math.random()*u.height*.6,h=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],E=h[Math.floor(Math.random()*h.length)];for(let x=0;x<60;x++){const b=Math.PI*2/60*x,w=2+Math.random()*5;y.push({x:_,y:m,vx:Math.cos(b)*w,vy:Math.sin(b)*w,alpha:1,color:E,size:2+Math.random()*3})}}v(),s=setInterval(v,600);function k(){if(document.getElementById("fireworks-canvas")){g.clearRect(0,0,u.width,u.height);for(let _=y.length-1;_>=0;_--){const m=y[_];if(m.x+=m.vx,m.y+=m.vy+.08,m.vy*=.98,m.alpha-=.018,m.alpha<=0){y.splice(_,1);continue}g.globalAlpha=m.alpha,g.fillStyle=m.color,g.beginPath(),g.arc(m.x,m.y,m.size,0,Math.PI*2),g.fill()}g.globalAlpha=1,(s!==null||y.length>0)&&requestAnimationFrame(k)}}k()}function p(){s!==null&&(clearInterval(s),s=null);const u=document.getElementById("fireworks-canvas");u&&u.getContext("2d").clearRect(0,0,u.width,u.height)}document.getElementById("reveal-collection").addEventListener("click",()=>{p(),d.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{p(),d.remove(),i("boosters")})}function pt(e){var t,i,d,c;if(e.card_type==="player"&&e.player){const n=e.player,a=n.job||"ATT",r=ti[a]||"#1A6B3C",l=ii[n.rarity]||"#ccc",s=a==="GK"?n.note_g:a==="DEF"?n.note_d:a==="MIL"?n.note_m:n.note_a,o=ei(n),p={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL"}[n.country_code]||n.country_code;return`<div style="width:140px;height:200px;background:#f2e8d2;border-radius:12px;border:3px solid ${l};overflow:hidden;display:flex;flex-direction:column">
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
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${s||0}</text>
        </svg>
      </div>
      <!-- Portrait -->
      <div style="flex:1;overflow:hidden;background:#b8d4f0">
        ${o?`<img src="${o}" style="width:100%;height:100%;object-fit:cover;object-position:center top" onerror="this.style.display='none'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;height:26px">
        <img src="https://flagsapi.com/${n.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:1px;color:#555;text-transform:uppercase">${p}</div>
        ${(t=n.clubs)!=null&&t.logo_url?`<img src="${n.clubs.logo_url}" style="width:20px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:700">${(((i=n.clubs)==null?void 0:i.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>`}if(e.card_type==="game_changer"){const n=e._gcDef,a=(n==null?void 0:n.gc_type)==="ultra_game_changer",r={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},l={purple:"#b06ce0",light_blue:"#00d4ef"},s=r[n==null?void 0:n.color]||r.purple,o=l[n==null?void 0:n.color]||l.purple,p=(n==null?void 0:n.name)||e.gc_type||"Game Changer",f=(n==null?void 0:n.effect)||((d=Be[e.gc_type])==null?void 0:d.desc)||"",u=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,g=((c=Be[e.gc_type])==null?void 0:c.icon)||"⚡";return`<div style="width:170px;height:240px;background:${s};border-radius:14px;border:3px solid ${o};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${o}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${p.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p}</div>
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
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function fi(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pépite:"#D4A017",papyte:"#909090",légende:"#7a28b8"},n={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};d.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${n[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${c[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(d),d.addEventListener("click",a=>{a.target===d&&d.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>d.remove());return}gi()}function gi(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
      </button>`,document.body.appendChild(t);const d=setInterval(()=>{i--;const c=document.getElementById("ad-cd"),n=document.getElementById("ad-skip");c&&(c.textContent=i),n&&(n.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(d),n&&(n.disabled=!1,n.style.cssText=n.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),n==null||n.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function yi(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(Ue());window.propeller.push({zone_id:kt,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function hi(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(Ue());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:kt,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}const ue={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},fe={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Et(e,t,i,d,c){var n;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${d}</button>
    </div>
  </div>`,(n=document.getElementById("msg-btn"))==null||n.addEventListener("click",c)}function J(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function oe(e){var i,d;const t=e.player;return{cardId:e.id,id:t.id,firstname:t.firstname,name:t.surname_encoded,country_code:t.country_code,club_id:t.club_id,job:t.job,job2:t.job2,note_g:Number(t.note_g)||0,note_d:Number(t.note_d)||0,note_m:Number(t.note_m)||0,note_a:Number(t.note_a)||0,rarity:t.rarity,skin:t.skin,hair:t.hair,hair_length:t.hair_length,clubName:((i=t.clubs)==null?void 0:i.encoded_name)||null,clubLogo:((d=t.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ve(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function vi(){const e=Math.random()*100;return e<.1?4:e<5?3:e<20?2:1}function Le(e,t){const i=ue[t]||ue["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},c=[...e];for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let l=0;l<i[n];l++){let s=c.findIndex(o=>o.job===n);if(s===-1&&(s=c.findIndex(o=>o.job2===n)),s===-1&&(s=0),c[s]){const o={...c[s],_line:n};a.push(o),c.splice(s,1)}}const r=Ve(a.length);a.forEach((l,s)=>{l._col=r[s]}),d[n]=a}return d}async function bi(e,t){var a,r;const{data:i}=await $.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return _i(e);const d=ue[e]||ue["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},n=[...i];for(const l of["GK","DEF","MIL","ATT"]){const s=n.filter(g=>g.job===l),o=n.filter(g=>g.job!==l),p=[...s,...o],f=[];for(let g=0;g<d[l];g++){const y=p[g]||n[g];y&&f.push({cardId:"ai-"+y.id+"-"+g,id:y.id,firstname:y.firstname,name:y.surname_encoded,country_code:y.country_code,club_id:y.club_id,job:y.job,job2:y.job2,note_g:Number(y.note_g)||0,note_d:Number(y.note_d)||0,note_m:Number(y.note_m)||0,note_a:Number(y.note_a)||0,rarity:y.rarity,skin:y.skin,hair:y.hair,hair_length:y.hair_length,clubName:((a=y.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((r=y.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:l})}const u=Ve(f.length);f.forEach((g,y)=>{g._col=u[y]}),c[l]=f}return c}function _i(e){const t=ue[e]||ue["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},d=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let l=0;l<t[n];l++){const s=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:d[c%d.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?s:2,note_d:n==="DEF"?s:2,note_m:n==="MIL"?s:2,note_a:n==="ATT"?s:2,rarity:"normal",boost:0,used:!1,_line:n}),c++}const r=Ve(a.length);a.forEach((l,s)=>{l._col=r[s]}),i[n]=a}return i}function wi(e){let t=e.nextElementSibling;for(;t;)t.dataset.matchHidden||(t.dataset.matchHidden=t.style.display||"flex",t.style.display="none"),t=t.nextElementSibling}function ne(e){let t=e.nextElementSibling;for(;t;)t.dataset.matchHidden&&(t.style.display=t.dataset.matchHidden==="none"?"":t.dataset.matchHidden,delete t.dataset.matchHidden),t=t.nextElementSibling}async function $i(e,t,i,d,c,n){var v;const{state:a,navigate:r,toast:l}=t;let s=!1,o=null;e.style.overflow="hidden",e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler la recherche</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const p=()=>document.getElementById("mm-status"),f=async(k=!0)=>{s=!0,o&&($.removeChannel(o),o=null),k&&await $.rpc("cancel_matchmaking",{p_user_id:a.profile.id}).catch(()=>{})};(v=document.getElementById("mm-cancel"))==null||v.addEventListener("click",async()=>{await f(!0),ne(e),r("home")});const u=async(k,_,m)=>{s||(s=!0,o&&($.removeChannel(o),o=null),p()&&(p().textContent="Adversaire trouvé !"),await new Promise(h=>setTimeout(h,600)),e.isConnected!==!1&&ki(e,t,k,m))},{data:g,error:y}=await $.rpc("try_matchmake",{p_user_id:a.profile.id,p_deck_id:i});if(y||!(g!=null&&g.success)){l("Erreur de matchmaking","error"),ne(e),r("home");return}if(g.matched){u(g.match_id,g.opponent_id,!1);return}p()&&(p().textContent="En attente d'un autre joueur..."),o=$.channel("matchmaking-"+a.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${a.profile.id}`},k=>{const _=k.new;_.status==="matched"&&_.match_id&&u(_.match_id,_.matched_with,!0)}).subscribe()}async function ki(e,t,i,d){const{state:c,navigate:n,toast:a}=t,r=d?"p1":"p2",l=d?"p2":"p1";e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation du match...</div>';const{data:s}=await $.from("matches").select("*").eq("id",i).single();if(!s){a("Match introuvable","error"),n("home");return}let o=s.game_state&&Object.keys(s.game_state).length?s.game_state:null;if(!o){const[{data:m},{data:h},{data:E},{data:x},{data:b},{data:w}]=await Promise.all([$.from("decks").select("formation,name").eq("id",s.home_deck_id).single(),$.from("deck_cards").select("position,is_starter,slot_order,card:cards(id,card_type,formation,player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)))").eq("deck_id",s.home_deck_id).order("slot_order"),$.from("decks").select("formation,name").eq("id",s.away_deck_id).single(),$.from("deck_cards").select("position,is_starter,slot_order,card:cards(id,card_type,formation,player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)))").eq("deck_id",s.away_deck_id).order("slot_order"),$.from("users").select("id,pseudo,club_name").eq("id",s.home_id).single(),$.from("users").select("id,pseudo,club_name").eq("id",s.away_id).single()]),I=(h||[]).filter(M=>{var G;return M.is_starter&&((G=M.card)==null?void 0:G.player)}).map(M=>oe(M.card)),L=(x||[]).filter(M=>{var G;return M.is_starter&&((G=M.card)==null?void 0:G.player)}).map(M=>oe(M.card)),S=(h||[]).filter(M=>{var G;return!M.is_starter&&((G=M.card)==null?void 0:G.player)}).map(M=>oe(M.card)),F=(x||[]).filter(M=>{var G;return!M.is_starter&&((G=M.card)==null?void 0:G.player)}).map(M=>oe(M.card)),R=(m==null?void 0:m.formation)||"4-4-2",D=(E==null?void 0:E.formation)||"4-4-2";o={p1Team:Le(I,R),p2Team:Le(L,D),p1Subs:S,p2Subs:F,p1Formation:R,p2Formation:D,p1Name:(b==null?void 0:b.club_name)||(b==null?void 0:b.pseudo)||"Joueur 1",p2Name:(w==null?void 0:w.club_name)||(w==null?void 0:w.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"midfield",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},usedGc_p1:[],usedGc_p2:[],lastActionAt:new Date().toISOString()},await $.from("matches").update({game_state:o,turn_user_id:s.home_id}).eq("id",i)}const p=$.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},m=>{const h=m.new;h.game_state&&(o=h.game_state,g()),(h.status==="finished"||h.forfeit)&&g()}).subscribe();async function f(m){Object.assign(o,m),o.lastActionAt=new Date().toISOString(),await $.from("matches").update({game_state:o}).eq("id",i),g()}async function u(){const m=d?s.away_id:s.home_id;await $.from("matches").update({status:"finished",forfeit:!0,winner_id:m}).eq("id",i),$.removeChannel(p),ne(e),n("home")}function g(){var R,D;const m=o[r+"Team"];o[l+"Team"];const h=o[r+"Score"],E=o[l+"Score"],x=o[r+"Name"],b=o[l+"Name"];if(o.phase==="midfield")return y();if(o.phase==="finished")return v();const w=o.phase===r+"-attack",I=o.phase===r+"-defense",L=o.phase===l+"-attack"||o.phase===l+"-defense",S=o["selected_"+r]||[],F=new Set(S.map(M=>M.cardId));if(e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;height:100%;width:100%">
      <!-- Score -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:rgba(0,0,0,0.25);flex-shrink:0">
        <button id="pvp-quit" style="background:rgba(220,53,69,0.9);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer">✕</button>
        <div style="flex:1;text-align:center;color:#fff;font-size:14px;font-weight:700">
          ${x} <span style="color:#FFD700;font-size:18px">${h}</span> – <span style="color:#FFD700;font-size:18px">${E}</span> ${b}
        </div>
        <div style="width:32px"></div>
      </div>

      <!-- Indicateur tour -->
      <div style="text-align:center;padding:4px;background:rgba(0,0,0,0.15);font-size:11px;color:${L?"rgba(255,255,255,0.4)":"#FFD700"};font-weight:700;flex-shrink:0">
        ${L?`⏳ Tour de ${b}`:w?"⚔️ À vous d'attaquer !":I?"🛡️ À vous de défendre !":""}
      </div>

      <!-- Zone centrale : terrain -->
      <div style="display:flex;flex:1;min-height:0;overflow:hidden">
        <div style="overflow:hidden;min-width:0;flex:1;min-height:0" id="match-field">
          <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
            ${We(m,o[r+"Formation"],w?"attack":I?"defense":"idle",F,300,300)}
          </div>
        </div>
      </div>

      <!-- Zone bas : bouton action -->
      <div style="display:flex;align-items:stretch;padding:8px;background:rgba(0,0,0,0.35);gap:6px;flex-shrink:0">
        <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:3px">
          ${w?`<button id="pvp-action" style="padding:14px;border-radius:14px;background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer" ${S.length===0?'disabled style="opacity:0.45"':""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:I?`<button id="pvp-action" style="padding:14px;border-radius:14px;background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;font-size:15px;font-weight:900;cursor:pointer" ${S.length===0?'disabled style="opacity:0.45"':""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:'<div style="padding:14px;border-radius:14px;background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.4);text-align:center;font-size:13px">⏳ En attente...</div>'}
          ${w||I?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center">${S.length}/3 sélectionné(s)</div>`:""}
        </div>
      </div>
    </div>`,e.querySelectorAll(".match-slot-hit").forEach(M=>{M.addEventListener("click",()=>{if(!w&&!I)return;const G=M.dataset.cardId,P=M.dataset.role,N=(m[P]||[]).find(A=>A.cardId===G);if(!N||N.used)return;const Z=o["selected_"+r],te=Z.findIndex(A=>A.cardId===G);te>-1?Z.splice(te,1):Z.length<3&&Z.push({...N,_role:P}),g()})}),(R=e.querySelector("#pvp-action"))==null||R.addEventListener("click",()=>{w?k():I&&_()}),(D=e.querySelector("#pvp-quit"))==null||D.addEventListener("click",()=>{confirm("Quitter le match ? Vous perdrez par forfait.")&&u()}),o._timerInt&&(clearInterval(o._timerInt),o._timerInt=null),w||I){let M=30,G=!1;const P=()=>document.getElementById("pvp-timer"),N=()=>{P()&&(P().textContent=M+"s",P().style.color=G?"#ff4444":"#fff")};N(),o._timerInt=setInterval(()=>{M--,M<=15&&!G&&(G=!0),N(),M<=0&&(clearInterval(o._timerInt),o._timerInt=null,u())},1e3)}}function y(){const m=o.p1Team.MIL||[],h=o.p2Team.MIL||[],E=rt(m),x=rt(h);e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
      <div style="display:flex;align-items:center;gap:20px">
        <div style="text-align:center"><div style="font-size:13px;color:#fff">${o.p1Name}</div><div style="font-size:40px;font-weight:900;color:#FFD700">${E}</div></div>
        <div style="font-size:14px;color:rgba(255,255,255,0.4)">VS</div>
        <div style="text-align:center"><div style="font-size:13px;color:#fff">${o.p2Name}</div><div style="font-size:40px;font-weight:900;color:#FFD700">${x}</div></div>
      </div>
      <div style="color:rgba(255,255,255,0.5);font-size:13px">Calcul en cours...</div>
    </div>`,r==="p1"&&setTimeout(async()=>{const w=E>=x?"p1":"p2";await f({phase:w+"-attack",attacker:w,round:1})},1800)}function v(){var b;const m=o[r+"Score"],h=o[l+"Score"],E=m>h,x=m===h;e.style.overflow="hidden",e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${E?"🏆":x?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${E?"Victoire !":x?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${m} - ${h}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour à l'accueil</button>
    </div>`,(b=document.getElementById("pvp-home"))==null||b.addEventListener("click",()=>{$.removeChannel(p),ne(e),n("home")})}async function k(){const m=(o["selected_"+r]||[]).map(E=>({...E,_line:E._role}));if(!m.length)return;const h=Oe(m,o.modifiers[r]||{});m.forEach(E=>{const x=(o[r+"Team"][E._role]||[]).find(b=>b.cardId===E.cardId);x&&(x.used=!0)}),await f({pendingAttack:{...h,players:m,side:r},["selected_"+r]:[],modifiers:{...o.modifiers,[r]:{}},phase:l+"-defense"})}async function _(){const m=(o["selected_"+r]||[]).map(F=>({...F,_line:F._role})),h=Pe(m,o.modifiers[r]||{});m.forEach(F=>{const R=(o[r+"Team"][F._role]||[]).find(D=>D.cardId===F.cardId);R&&(R.used=!0)});const E=He(o.pendingAttack.total,h.total,o.modifiers[r]||{}),x=o.pendingAttack.side,b=E==="attack",w=o[x+"Score"]+(b?1:0),I=x==="p1"?"p2":"p1",L=(o.round||0)+1,S=L>10;await f({[x+"Score"]:w,["selected_"+r]:[],modifiers:{...o.modifiers,[r]:{}},pendingAttack:null,phase:S?"finished":I+"-attack",attacker:I,round:L}),S&&await $.from("matches").update({status:"finished"}).eq("id",i)}g()}async function Ei(e,t){var x;const{state:i,navigate:d,toast:c}=t;wi(e);const n=i.params||{};e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const a=n.matchMode||"vs_ai_easy",r=a.replace("vs_ai_",""),l=a;if(!n.deckId)return Ii(e,t,a);const s=n.deckId,[{data:o},{data:p}]=await Promise.all([$.from("decks").select("formation,name").eq("id",s).single(),$.from("deck_cards").select(`position, is_starter, slot_order,
        card:cards(id, card_type, formation,
          player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
            note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
            clubs(encoded_name,logo_url)))`).eq("deck_id",s).order("slot_order")]),f=(p||[]).filter(b=>{var w;return b.is_starter&&((w=b.card)==null?void 0:w.player)}).map(b=>oe(b.card)),u=(p||[]).filter(b=>{var w;return!b.is_starter&&((w=b.card)==null?void 0:w.player)}).map(b=>oe(b.card));if(f.length<11){Et(e,"⚠️",`Deck incomplet (${f.length}/11).`,"Compléter",()=>d("decks"));return}const g=(p||[]).find(b=>{var w;return((w=b.card)==null?void 0:w.card_type)==="formation"}),y=(o==null?void 0:o.formation)||((x=g==null?void 0:g.card)==null?void 0:x.formation)||"4-4-2";if(a==="random")return $i(e,t,s);const{data:v}=await $.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",i.profile.id).eq("card_type","game_changer"),{data:k}=await $.from("gc_definitions").select("*").eq("is_active",!0),_=(v||[]).map(b=>({...b,_gcDef:(k==null?void 0:k.find(w=>w.name===b.gc_type||w.id===b.gc_definition_id))||null})),m=Le(f,y),h=await bi(y),E=async b=>{const{data:w}=await $.from("matches").insert({home_id:i.profile.id,away_id:null,mode:l,home_deck_id:s,status:"in_progress"}).select().single(),I={gcDefs:k||[],matchId:w==null?void 0:w.id,mode:l,difficulty:r,formation:y,homeTeam:m,aiTeam:h,homeSubs:u,subsUsed:0,maxSubs:Math.min(u.length,3),homeScore:0,aiScore:0,gcCards:b,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Ti(e,I,t)};if(!_.length){E([]);return}Ai(e,_,E)}function Ai(e,t,i){const c=new Set,n=t.filter(o=>{const p=o.gc_type||o.id;return c.has(p)?!1:(c.add(p),!0)});let a=[];function r(o,p){const f=o._gcDef,u={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},g={purple:"#9b59b6",light_blue:"#00bcd4"},y=u[f==null?void 0:f.color]||u.purple,v=g[f==null?void 0:f.color]||g.purple;return`<div class="gc-select-card" data-id="${o.id}"
      style="width:100px;border-radius:10px;border:3px solid ${p?"#FFD700":v};background:${y};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${p?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${p?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((f==null?void 0:f.name)||o.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(f==null?void 0:f.name)||o.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${f!=null&&f.image_url?`<img src="/manager-wars/icons/${f.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((f==null?void 0:f.effect)||"").slice(0,50)}</span>
      </div>
      ${p?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}function l(){var g,y,v;const o=e.querySelector("#gc-confirm-overlay");if(o&&o.remove(),a.length<3)return;const p=document.createElement("div");p.id="gc-confirm-overlay",p.style.cssText="position:absolute;inset:0;background:rgba(10,22,40,0.88);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:32px 24px;z-index:20;backdrop-filter:blur(4px)",p.innerHTML=`
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
      </button>`;const f=k=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(k)};(g=p.querySelector("#gc-launch"))==null||g.addEventListener("click",()=>f(a)),(y=p.querySelector("#gc-no-gc"))==null||y.addEventListener("click",()=>f([])),(v=p.querySelector("#gc-reset"))==null||v.addEventListener("click",()=>{a=[],s()});const u=e.querySelector("#gc-screen-wrap");u?u.appendChild(p):e.appendChild(p)}function s(){e.style.overflow="hidden";const o=e.clientHeight||e.getBoundingClientRect().height;o>50&&(e.style.height=o+"px"),e.innerHTML=`
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
        ${n.map(p=>{const f=a.find(u=>u.gc_type===p.gc_type);return r(p,!!f)}).join("")}
      </div>
    </div>`,e.querySelectorAll(".gc-select-card").forEach(p=>{p.addEventListener("click",()=>{const f=p.dataset.id,u=n.find(y=>y.id===f);if(!u)return;const g=a.findIndex(y=>y.gc_type===u.gc_type);g>-1?a.splice(g,1):a.length<3&&a.push(u),s(),a.length===3&&l()})}),a.length===3&&l()}s()}async function Ii(e,t,i){const{state:d,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await $.from("decks").select("id,name,is_active,formation").eq("owner_id",d.profile.id).order("created_at",{ascending:!1});if(!n||n.length===0){Et(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const a=n.map(o=>o.id),{data:r}=await $.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order");let l=0;function s(){var _,m,h,E,x;const o=n[l],p=(r||[]).filter(b=>b.deck_id===o.id),f=p.filter(b=>{var w;return b.is_starter&&((w=b.card)==null?void 0:w.player)}).map(b=>oe(b.card)),u=p.find(b=>{var w;return((w=b.card)==null?void 0:w.card_type)==="formation"}),g=o.formation||((_=u==null?void 0:u.card)==null?void 0:_.formation)||"4-4-2",y=f.length>=11?Le(f,g):null,v=f.length>=11;e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:calc(100dvh - 130px);overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${l===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===0?"0.1":"0.3"});color:${l===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${l===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${o.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${g} · ${f.length}/11 ${o.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${l===n.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===n.length-1?"0.1":"0.3"});color:${l===n.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${l===n.length-1?"default":"pointer"};flex-shrink:0">▶</button>
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
        ${n.map((b,w)=>`<div style="width:7px;height:7px;border-radius:50%;background:${w===l?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,(m=document.getElementById("prev-deck"))==null||m.addEventListener("click",()=>{l>0&&(l--,s())}),(h=document.getElementById("next-deck"))==null||h.addEventListener("click",()=>{l<n.length-1&&(l++,s())}),(E=document.getElementById("validate-deck"))==null||E.addEventListener("click",()=>{v&&t.navigate("match",{matchMode:i,deckId:o.id})}),(x=document.getElementById("cancel-deck-select"))==null||x.addEventListener("click",()=>{ne(e),c("home")});const k=document.getElementById("deck-swipe-zone");if(k){let b=0,w=0;k.addEventListener("touchstart",I=>{b=I.touches[0].clientX,w=I.touches[0].clientY},{passive:!0}),k.addEventListener("touchend",I=>{const L=I.changedTouches[0].clientX-b,S=I.changedTouches[0].clientY-w;Math.abs(L)<40||Math.abs(L)<Math.abs(S)||(L<0&&l<n.length-1?(l++,s()):L>0&&l>0&&(l--,s()))},{passive:!0})}}s()}function Ti(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${Ye(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Li(e,t,i),5e3)}function Li(e,t,i){const d=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function n(p){return p.reduce((f,u)=>f+Y(u,"MIL"),0)}function a(p){let f=0;for(let u=0;u<p.length-1;u++){const g=xe(p[u],p[u+1]);g==="#00ff88"?f+=2:g==="#FFD700"&&(f+=1)}return f}const r=n(d)+a(d),l=n(c)+a(c),s=r>=l;function o(p,f,u){return`<div style="text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase">${f}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((g,y)=>{const v=J(g),k=y<p.length-1?xe(g,p[y+1]):null,_=k&&k!=="#ff3333"&&k!=="#cc2222";return`
          <div style="width:52px;height:52px;border-radius:8px;background:${u};position:relative;flex-shrink:0;overflow:hidden;border:2px solid rgba(255,255,255,0.3)">
            ${v?`<img src="${v}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8">`:""}
            <div style="position:relative;z-index:1;font-size:15px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000;text-align:center;padding-top:4px">${Y(g,"MIL")}</div>
            <div style="position:relative;z-index:1;font-size:6px;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${g.name}</div>
          </div>
          ${k?`<div style="width:14px;height:4px;border-radius:2px;background:${k};flex-shrink:0;opacity:${_?.9:.3}"></div>`:""}
          `}).join("")}
      </div>
      <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.5)">
        Score: ${n(p)} + ${a(p)} liens = <b style="color:#fff">${n(p)+a(p)}</b>
      </div>
    </div>`}e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${o(d,t.clubName,"#D4A017")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.6s ease">${r}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:2px">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.6s ease">${l}</div>
    </div>

    ${o(c,"IA","#bb2020")}

    <div id="midfield-result" style="opacity:0;text-align:center;transition:opacity 0.5s;color:#fff;max-width:320px"></div>
  </div>`,setTimeout(()=>{const p=document.getElementById("score-home"),f=document.getElementById("score-ai"),u=document.getElementById("midfield-result");if(p&&f&&(s?(p.style.fontSize="80px",p.style.color="#FFD700",f.style.opacity="0.25"):(f.style.fontSize="80px",f.style.color="#ff6b6b",p.style.opacity="0.25")),u){const g=vi();u.style.opacity="1",s&&t.clubName,u.innerHTML=`
        <div style="font-size:20px;font-weight:900;margin-bottom:10px">
          ⚽ ${s?`${t.clubName} gagne le milieu de terrain et attaque !`:"L'IA gagne l'engagement et attaque !"}
        </div>
        ${s?`
        <div style="background:rgba(135,206,235,0.15);border:2px solid #87CEEB;border-radius:14px;padding:14px 24px;display:inline-block;margin-top:4px">
          <div style="font-size:10px;color:#87CEEB;letter-spacing:1px">CARTE BOOST OBTENUE</div>
          <div style="font-size:32px;font-weight:900;color:#87CEEB">+${g}</div>
          <div style="font-size:10px;color:rgba(135,206,235,0.7)">Applicable sur n'importe quel joueur</div>
        </div>`:""}
      `,s&&(t.boostCard={value:g})}t.attacker=s?"home":"ai",t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:d.map(g=>({name:g.name,note:Y(g,"MIL"),portrait:J(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),aiPlayers:c.map(g=>({name:g.name,note:Y(g,"MIL"),portrait:J(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:r,aiTotal:l,text:`Duel milieu : ${t.clubName} ${r} – ${l} IA → ${s?t.clubName+" attaque":"IA attaque"}`}),setTimeout(()=>{var y,v;const g=(y=t.boostCard)==null?void 0:y.value;e.innerHTML=`
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
      </div>`,(v=document.getElementById("start-match-btn"))==null||v.addEventListener("click",()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",W(e,t,i),t.attacker==="ai"&&setTimeout(()=>De(e,t,i),800)})},100)},5e3)}function At(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function de(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const d=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:J(e),c=At(e),n=e._line||e.job||"MIL",a=fe[n]||"#555",r={normal:"#aaa",pépite:"#D4A017",papyte:"#222",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",l=e.note!==void 0?Number(e.note)||0:(Number(Y(e,n))||0)+(e.boost||0),s=It(e==null?void 0:e.country_code),o=Math.round(i*.19),p=Math.round(i*.25),f=i-Math.round(i*.19)-Math.round(i*.25),u=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${r};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${u}">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${d&&!(e!=null&&e.used)?`<img src="${d}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${f}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Fe(e==null?void 0:e.country_code)?`<img src="${Fe(e.country_code)}" style="width:${p+2}px;height:${p-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${p-4}px">${s}</span>`}
      <span style="font-size:${p-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":l}</span>
      ${c?`<img src="${c}" style="width:${p-4}px;height:${p-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,p-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function we(e,t,i){if(!(e!=null&&e.length))return"";const d=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return d.forEach((n,a)=>{if(c+=de(n,40,52),a<d.length-1){const r=xe(n,d[a+1]);c+=`<div style="width:7px;height:3px;background:${r==="#ff3333"||r==="#cc2222"?"rgba(255,255,255,0.12)":r};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),c+="</div>",c}function Fe(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function It(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function Ye(e,t,i,d,c=310,n=310){const a=ve[t]||{},r=xt(t)||Re[t]||[],l={},s=["ATT","MIL","DEF","GK"];for(const _ of s)(e[_]||[]).forEach((h,E)=>{l[`${_}${E+1}`]=h});function o(_){const m=a[_];return m?{x:m.x*c,y:m.y*n}:null}let p="";for(const[_,m]of r){const h=o(_),E=o(m);if(!h||!E)continue;const x=l[_],b=l[m],w=xe(x,b);w==="#00ff88"||w==="#FFD700"?(p+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${w}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,p+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${w}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):p+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${w}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const f=48,u=64,g=13,y=16,v={normal:"#aaaaaa",pépite:"#D4A017",papyte:"#111111",légende:"#7a28b8"};for(const[_,m]of Object.entries(l)){const h=o(_);if(!h||!m)continue;const E=_.replace(/[0-9]/g,""),x=fe[E]||"#555",b=i==="attack"&&["MIL","ATT"].includes(E)&&!m.used||i==="defense"&&["GK","DEF","MIL"].includes(E)&&!m.used,w=d.includes(m.cardId);let I;i==="attack"?I=E==="MIL"?Number(m.note_m)||0:Number(m.note_a)||0:i==="defense"?I=E==="GK"?Number(m.note_g)||0:E==="MIL"?Number(m.note_m)||0:Number(m.note_d)||0:I=Number(E==="GK"?m.note_g:E==="DEF"?m.note_d:E==="MIL"?m.note_m:m.note_a)||0,I=I+(m.boost||0);const L=(h.x-f/2).toFixed(1),S=(h.y-u/2).toFixed(1),F=m.used?.25:1,R=v[m==null?void 0:m.rarity]||v.normal,D=w?"#ff3030":R,M=w?3:(m==null?void 0:m.rarity)==="légende"||(m==null?void 0:m.rarity)==="pépite"?2.5:2,G=u-g-y;p+=`<defs><clipPath id="cp-${_}"><rect x="${L}" y="${(h.y-u/2+g).toFixed(1)}" width="${f}" height="${G}"/></clipPath></defs>`,p+=`<rect x="${L}" y="${S}" width="${f}" height="${u}" rx="5" fill="${x}" opacity="${F}"/>`;const P=J(m);P&&!m.used&&(p+=`<image href="${P}" x="${L}" y="${(h.y-u/2+g).toFixed(1)}" width="${f}" height="${G}" clip-path="url(#cp-${_})" preserveAspectRatio="xMidYMin slice"/>`),p+=`<rect x="${L}" y="${S}" width="${f}" height="${g}" rx="4" fill="rgba(255,255,255,0.92)"/>`,p+=`<text x="${h.x.toFixed(1)}" y="${(h.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(m.name||"").slice(0,9)}</text>`;const N=(h.y+u/2-y).toFixed(1);if(p+=`<rect x="${L}" y="${N}" width="${f}" height="${y}" fill="rgba(255,255,255,0.92)"/>`,m.used)p+=`<text x="${h.x.toFixed(1)}" y="${(h.y+u/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="900" fill="rgba(0,0,0,0.4)" font-family="Arial Black">–</text>`;else{const Z=Fe(m.country_code);Z?p+=`<image href="${Z}" x="${(h.x-20).toFixed(1)}" y="${(h.y+u/2-y+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:p+=`<text x="${(h.x-13).toFixed(1)}" y="${(h.y+u/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${It(m.country_code)}</text>`,p+=`<text x="${h.x.toFixed(1)}" y="${(h.y+u/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${I}</text>`;const te=At(m);te?p+=`<image href="${te}" x="${(h.x+f/2-14).toFixed(1)}" y="${(h.y+u/2-y+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:m.clubName&&(p+=`<text x="${(h.x+14).toFixed(1)}" y="${(h.y+u/2-y/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(m.clubName||"").slice(0,3).toUpperCase()}</text>`),m.boost&&(p+=`<rect x="${(h.x+f/2-12).toFixed(1)}" y="${(h.y-u/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,p+=`<text x="${(h.x+f/2-5).toFixed(1)}" y="${(h.y-u/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${m.boost}</text>`)}p+=`<rect x="${L}" y="${S}" width="${f}" height="${u}" rx="5" fill="${w?"rgba(255,255,255,0.12)":"none"}" stroke="${D}" stroke-width="${M}" opacity="${F}"/>`,b&&(p+=`<rect x="${L}" y="${S}" width="${f}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${w?"selected":""}" data-card-id="${m.cardId}" data-role="${E}" style="cursor:pointer"/>`)}const k=38;return`<svg viewBox="${-k} ${-k} ${c+k*2} ${n+k*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${p}
  </svg>`}function We(e,t,i,d,c=300,n=300){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ye(e,t,i,d,c,n)}
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function W(e,t,i){var g,y,v,k,_,m,h,E;const d=t.selected.map(x=>x.cardId),c=t.usedSubIds||[],n=t.homeSubs.filter(x=>!c.includes(x.cardId));Object.values(t.homeTeam).flat().filter(x=>x.used).length>0&&n.length>0&&t.subsUsed<t.maxSubs,t.log[t.log.length-1];const r=t.phase==="ai-attack"||t.phase==="ai-defense",l=t.phase==="attack",s=t.phase==="defense",o=t.phase==="finished",p=t.gcCards.filter(x=>!t.usedGc.includes(x.id)),f=t.boostCard&&!t.boostUsed;if(e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const b=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${we((b.players||[]).map(w=>({...w,used:!1})),"#ff6b6b",b.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const b=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${we((b.players||[]).map(w=>({...w,used:!1})),"#00ff88",b.total)}
          </div>`}const x=t.log[t.log.length-1];return x?'<div style="padding:2px 4px">'+Mi(x)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const x=window.innerWidth>=700,b=(M,G,P)=>{var K,U;const N=(t.gcDefs||[]).find(O=>O.name===M.gc_type),Z={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[N==null?void 0:N.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",te={purple:"#b06ce0",light_blue:"#00d4ef"}[N==null?void 0:N.color]||"#b06ce0",A=(N==null?void 0:N.name)||M.gc_type,T=(N==null?void 0:N.effect)||((K=ce[M.gc_type])==null?void 0:K.desc)||"",B=N!=null&&N.image_url?`/manager-wars/icons/${N.image_url}`:null,j=((U=ce[M.gc_type])==null?void 0:U.icon)||"⚡",C=Math.round(P*.22),q=Math.round(P*.22),z=P-C-q,V=A.length>12?7:9;return`<div class="gc-mini" data-gc-id="${M.id}" data-gc-type="${M.gc_type}"
          style="width:${G}px;height:${P}px;border-radius:10px;border:2px solid ${te};background:${Z};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${C}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${V}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${G-6}px">${A}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${z}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${B?`<img src="${B}" style="max-width:${G-10}px;max-height:${z-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(z*.55)}px">${j}</span>`}
          </div>
          <div style="height:${q}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${T.slice(0,38)}</span>
          </div>
        </div>`},w=(M,G)=>{var P;return G?`<div id="boost-card" style="width:110px;padding:8px 6px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center">
            <div style="font-size:22px">⚡</div>
            <div style="font-size:10px;color:#000;font-weight:900">+${(P=t.boostCard)==null?void 0:P.value}</div>
          </div>`:b(M,110,150)},I=(M,G)=>{var P;return G?`<div id="boost-card" style="padding:4px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:7px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:1px;text-align:center;min-width:42px">
            <div style="font-size:15px">⚡</div>
            <div style="font-size:7px;color:#000;font-weight:900">+${(P=t.boostCard)==null?void 0:P.value}</div>
          </div>`:b(M,68,95)},L=x?"padding:14px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:10px 8px;border-radius:12px;font-size:13px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",S=o?`<button id="btn-results" style="${L};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:r?`<div style="${L};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:l?`<button id="btn-action" style="${L};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:s?`<button id="btn-action" style="${L};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${L};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,F=l||s?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",R=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${x?56:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(M=>`<div class="sub-btn-col" data-sub-id="${M.cardId}" style="cursor:pointer;flex-shrink:0">${de(M,44,58)}</div>`).join("")}
      </div>`,D=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;align-items:center;justify-content:center" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${We(t.homeTeam,t.formation,t.phase,d,300,300)}
        </div>
      </div>`;return x?`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${R}
          ${D}
          <!-- Colonne droite : GC + bouton -->
          <div style="width:140px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:10px 8px;gap:10px;background:rgba(0,0,0,0.2);overflow-y:auto">
            ${p.map(M=>w(M,!1)).join("")}
            ${f?w(null,!0):""}
            <div style="flex:1"></div>
            <div style="width:100%">${S}${F}</div>
          </div>
        </div>`:`
        <div style="display:flex;flex:0.8;min-height:0;overflow:hidden">
          ${R}
          <div style="flex:1;min-width:0;display:flex;flex-direction:column;min-height:0">
            ${D}
            <!-- Zone bas mobile : GC grille + bouton -->
            <div style="display:flex;align-items:stretch;padding:4px 6px;background:rgba(0,0,0,0.35);gap:5px;flex-shrink:0">
              <div style="display:flex;flex-wrap:wrap;gap:3px;align-content:center;max-width:120px">
                ${p.map(M=>I(M,!1)).join("")}
                ${f?I(null,!0):""}
              </div>
              <div style="flex:0.8;display:flex;flex-direction:column;justify-content:center;gap:3px">
                ${S}${F}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(x=>{var b,w,I;if(x.type==="duel"){const L=x.isGoal,S=x.homeScored?"#FFD700":L?"#ff6b6b":"rgba(255,255,255,0.3)",F=x.homeScored?"⚽ BUT !":L?"⚽ BUT IA !":(b=x.homePlayers)!=null&&b.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${L?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${S};margin-bottom:4px">
                <div style="font-size:9px;color:${S};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${F}</div>
                ${(w=x.homePlayers)!=null&&w.length?`<div style="margin-bottom:3px">${we(x.homePlayers,"rgba(255,255,255,0.7)",x.homeTotal)}</div>`:""}
                ${(I=x.aiPlayers)!=null&&I.length?`<div style="opacity:0.7">${we(x.aiPlayers,"#ff6b6b",x.aiTotal)}</div>`:""}
              </div>`}return x.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${x.outPlayer?de({...x.outPlayer,used:!0,_line:x.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${x.inPlayer?de({...x.inPlayer,_line:x.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:x.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${x.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${x.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`,function(){const b=e.querySelector(".terrain-wrapper svg");if(!b)return;b.removeAttribute("width"),b.removeAttribute("height"),b.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",b.setAttribute("viewBox","-26 -26 352 352"),b.setAttribute("preserveAspectRatio","xMidYMid meet");const w=e.querySelector(".match-screen");if(w){const I=e.clientHeight;I>50&&(w.style.height=I+"px",w.style.overflow="hidden")}}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const x=e.querySelector(".terrain-wrapper svg");x&&(x.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let x=!1,b=30;const w=()=>document.getElementById("match-timer"),I=()=>{const L=w();if(!L)return;const S=String(Math.floor(b/60)).padStart(2,"0"),F=String(b%60).padStart(2,"0");L.textContent=` ${S}:${F}`,L.style.color=x?"#ff2222":"#ff9500",L.style.fontWeight="900"};I(),t._timerInt=setInterval(()=>{if(b--,b<0)if(!x)x=!0,b=15,I();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",L.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(L),setTimeout(()=>{L.remove(),le(e,t,i)},2500)}else I()},1e3)}(g=document.getElementById("match-quit"))==null||g.addEventListener("click",()=>{ne(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,le(e,t,i))}),(y=document.getElementById("view-ai"))==null||y.addEventListener("click",()=>qi(t,i)),(v=document.getElementById("toggle-history"))==null||v.addEventListener("click",()=>{var x;(x=document.getElementById("match-history-panel"))==null||x.classList.add("open")}),(k=document.getElementById("close-history"))==null||k.addEventListener("click",()=>{var x;(x=document.getElementById("match-history-panel"))==null||x.classList.remove("open")}),(_=document.getElementById("btn-action"))==null||_.addEventListener("click",()=>{t.selected.length!==0&&(l?Ci(e,t,i):s&&ji(e,t,i))}),(m=document.getElementById("btn-results"))==null||m.addEventListener("click",()=>le(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(x=>{x.addEventListener("click",()=>zi(x,t,e,i))}),e.querySelectorAll(".gc-mini").forEach(x=>{x.addEventListener("click",()=>Fi(x.dataset.gcId,x.dataset.gcType,e,t,i))}),(h=document.getElementById("boost-card"))==null||h.addEventListener("click",()=>Gi(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(x=>{x.addEventListener("click",()=>ut(e,t,i,x.dataset.subId))}),(E=document.getElementById("sub-btn-main"))==null||E.addEventListener("click",()=>ut(e,t,i))}function zi(e,t,i,d){const c=e.dataset.cardId,n=e.dataset.role,a=t.selected.findIndex(r=>r.cardId===c);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){d.toast("Maximum 3 joueurs","error");return}const r=(t.homeTeam[n]||[]).find(l=>l.cardId===c);r&&t.selected.push({...r,_role:n,_line:n})}W(i,t,d)}function Xe(e,t,i){e.matchId&&$.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Ci(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Xe(t,i,i.state.profile.id);const d=t.selected.map(n=>({...n,_line:n._role})),c=Oe(d,t.modifiers.home);t.pendingAttack={...c,players:[...t.selected],side:"home"},t.selected.forEach(n=>{const a=(t.homeTeam[n._role]||[]).find(r=>r.cardId===n.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${c.total} (base ${c.base}${c.links?` +${c.links} liens`:""}) — ${t.selected.map(n=>n.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",W(e,t,i),setTimeout(()=>Si(e,t,i),1200)}function ji(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Xe(t,i,i.state.profile.id);const d=t.selected.map(r=>({...r,_line:r._role})),c=Pe(d,t.modifiers.home);t.selected.forEach(r=>{const l=(t.homeTeam[r._role]||[]).find(s=>s.cardId===r.cardId);l&&(l.used=!0)});const n=He(t.pendingAttack.total,c.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:J(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homePlayers:t.selected.map(r=>{const l=(t.homeTeam[r._role]||[]).find(s=>s.cardId===r.cardId)||r;return{name:l.name,note:l._line==="GK"?l.note_g:l._line==="MIL"?l.note_m:l.note_d,portrait:J(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(n.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(n.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,W(e,t,i),Je(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{he(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,he(e,t,i,"home-attack")}function De(e,t,i){Xe(t,i,null);const d=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=yt(d,"attack",t.difficulty);if(!c.length){Lt(e,t,i);return}const n=Oe(c,t.modifiers.ai);t.pendingAttack={...n,players:c,side:"ai"},c.forEach(s=>{s.used=!0}),t.log.push({text:`🤖 IA attaque : ${n.total} (${c.map(s=>s.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used),l=(t.homeSubs||[]).filter(s=>!(t.usedSubIds||[]).includes(s.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!l){t.aiScore++;const s={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(o=>({name:o.name,note:o._line==="MIL"?o.note_m:o.note_a,portrait:J(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiTotal:n.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(s),t.pendingAttack=null,W(e,t,i),Je(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{he(e,t,i,"home-attack")});return}t.phase="defense",W(e,t,i)}function Si(e,t,i){const d=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=yt(d,"defense",t.difficulty),n=c.length>0?Pe(c,t.modifiers.ai).total:0;c.forEach(l=>{l.used=!0});const a=He(t.pendingAttack.total,n,t.modifiers.ai),r={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:J(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),aiPlayers:c.map(l=>({name:l.name,note:l._line==="GK"?l.note_g:l._line==="MIL"?l.note_m:l.note_d,portrait:J(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:n,isGoal:!1,homeScored:!1,text:""};if(a.shielded)r.text="🛡️ Bouclier IA !",t.log.push(r);else if(a.goal){t.homeScore++,r.isGoal=!0,r.homeScored=!0,r.text=`⚽ BUT ! (${t.pendingAttack.total} > ${n})`,t.log.push(r),t.modifiers.ai={},t.pendingAttack=null,W(e,t,i),Je(r.homePlayers,t.homeScore,t.aiScore,!0,()=>{he(e,t,i,"ai-attack")});return}else r.text=`🧤 IA défend (${n} ≥ ${t.pendingAttack.total})`,t.log.push(r);t.modifiers.ai={},t.pendingAttack=null,he(e,t,i,"ai-attack")}function he(e,t,i,d){if(t.round++,Tt(t)){le(e,t,i);return}if(d==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(n=>!n.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(a=>!a.used).length){le(e,t,i);return}t.phase="ai-attack",W(e,t,i),setTimeout(()=>De(e,t,i),800);return}t.phase="attack",W(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(n=>!n.used).length){Lt(e,t,i);return}t.phase="ai-attack",W(e,t,i),setTimeout(()=>De(e,t,i),800)}}function Tt(e){const t=["MIL","ATT","GK","DEF"].some(d=>(e.homeTeam[d]||[]).some(c=>!c.used)),i=["MIL","ATT","GK","DEF"].some(d=>(e.aiTeam[d]||[]).some(c=>!c.used));return!t&&!i}function Lt(e,t,i){Tt(t)?le(e,t,i):(t.phase="attack",W(e,t,i))}function Bi(e,t,i){const d=document.createElement("div");d.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=J(e),n=J(t),a=fe[e.job]||"#555",r=fe[t.job]||"#555",l=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,s=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;d.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${a};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${c?`<img src="${c}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${l}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${r};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${s}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(d);let o=!1;const p=()=>{o||(o=!0,d.remove(),i())};d.addEventListener("click",p),setTimeout(p,2e3)}function me(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function ut(e,t,i,d=null){if(t.phase!=="attack"){me("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){me(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const c=Object.values(t.homeTeam).flat().filter(p=>p.used),n=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!c.length){me("Aucun joueur utilisé à remplacer");return}if(!n.length){me("Aucun remplaçant disponible");return}let a=0,r=Math.max(0,n.findIndex(p=>p.cardId===d)),l=!1;const s=document.createElement("div");s.id="sub-overlay",s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function o(){var k,_,m,h,E,x;const p=c[a],f=n[r],u=Math.min(130,Math.round((window.innerWidth-90)/2)),g=Math.round(u*1.35),y=b=>`background:rgba(255,255,255,0.12);border:none;color:${b?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${b?"default":"pointer"};flex-shrink:0`;s.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${y(r===0)}" ${r===0?"disabled":""}>▲</button>
        <div>${f?de({...f,used:!1,boost:0},u,g):"<div>—</div>"}</div>
        <button id="in-down" style="${y(r>=n.length-1)}" ${r>=n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${r+1}/${n.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${y(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${p?de({...p,used:!1,boost:0},u,g):"<div>—</div>"}</div>
        <button id="out-down" style="${y(a>=c.length-1)}" ${a>=c.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${c.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(k=s.querySelector("#sub-close"))==null||k.addEventListener("click",()=>s.remove()),(_=s.querySelector("#out-up"))==null||_.addEventListener("click",()=>{a>0&&(a--,o())}),(m=s.querySelector("#out-down"))==null||m.addEventListener("click",()=>{a<c.length-1&&(a++,o())}),(h=s.querySelector("#in-up"))==null||h.addEventListener("click",()=>{r>0&&(r--,o())}),(E=s.querySelector("#in-down"))==null||E.addEventListener("click",()=>{r<n.length-1&&(r++,o())});const v=(b,w,I,L)=>{const S=s.querySelector("#"+b);if(!S)return;let F=0;S.addEventListener("touchstart",R=>{F=R.touches[0].clientY},{passive:!0}),S.addEventListener("touchend",R=>{const D=R.changedTouches[0].clientY-F;if(Math.abs(D)<30)return;const M=w();D<0&&M<L-1?(I(M+1),o()):D>0&&M>0&&(I(M-1),o())},{passive:!0})};v("in-panel",()=>r,b=>r=b,n.length),v("out-panel",()=>a,b=>a=b,c.length),(x=s.querySelector("#sub-confirm"))==null||x.addEventListener("click",b=>{if(b.preventDefault(),b.stopPropagation(),l)return;l=!0;const w=c[a],I=n[r];if(!w||!I)return;let L=null,S=-1;for(const[R,D]of Object.entries(t.homeTeam)){const M=(D||[]).findIndex(G=>G.cardId===w.cardId);if(M!==-1){L=R,S=M;break}}if(S===-1||!L){me("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),s.remove();return}const F={...I,_line:L,_col:w._col||0,used:!1,boost:0};t.homeTeam[L].splice(S,1,F),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(I.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:w.name,firstname:w.firstname,note:Y(w,L),portrait:J(w),job:w.job,country_code:w.country_code,rarity:w.rarity,clubName:w.clubName,clubLogo:w.clubLogo},inPlayer:{name:I.name,firstname:I.firstname,note:Y(I,L),portrait:J(I),job:I.job,country_code:I.country_code,rarity:I.rarity,clubName:I.clubName,clubLogo:I.clubLogo},text:`🔄 ${I.firstname} ${I.name} remplace ${w.firstname} ${w.name}`}),s.remove(),Bi(w,I,()=>W(e,t,i))})}document.body.appendChild(s),o()}function Fi(e,t,i,d,c){var g,y;const n=(d.gcDefs||[]).find(v=>v.name===t),a=ce[t]||{icon:"⚡",desc:"Carte spéciale."},r={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[n==null?void 0:n.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",l={purple:"#b06ce0",light_blue:"#00d4ef"}[n==null?void 0:n.color]||"#b06ce0",s=(n==null?void 0:n.name)||t,o=(n==null?void 0:n.effect)||a.desc,p=n!=null&&n.image_url?`/manager-wars/icons/${n.image_url}`:null,f=a.icon||"⚡",u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",u.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${l};background:${r};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${l}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${s.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${s}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${p?`<img src="${p}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${f}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${o}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(u),(g=u.querySelector("#gc-back"))==null||g.addEventListener("click",()=>u.remove()),(y=u.querySelector("#gc-use"))==null||y.addEventListener("click",()=>{u.remove(),Di(e,t,i,d,c)})}function je(e,t,i,d,c,n){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let r=[];function l(){var s,o;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${r.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(p=>{const f=p._line||p.job||"MIL",u={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",g=Y(p,f)+(p.boost||0),y=r.find(v=>v.cardId===p.cardId);return`<div class="gc-pick-item" data-cid="${p.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${y?"#FFD700":"rgba(255,255,255,0.25)"};background:${u};overflow:hidden;cursor:pointer;flex-shrink:0;${p.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${p.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${g}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${r.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${r.length}/${t})
      </button>
    </div>`,(s=a.querySelector("#gc-picker-close"))==null||s.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(p=>{p.addEventListener("click",()=>{const f=p.dataset.cid,u=e.find(y=>y.cardId===f);if(!u)return;const g=r.findIndex(y=>y.cardId===f);g>-1?r.splice(g,1):r.length<t&&r.push(u),l()})}),(o=a.querySelector("#gc-picker-confirm"))==null||o.addEventListener("click",()=>{a.remove(),n(r)})}l(),document.body.appendChild(a)}const Mt={BOOST_STAT({value:e=2,target:t="home",count:i=1,roles:d=null},c,n,a){const r=t==="home"?c.homeTeam:c.aiTeam,l=Object.entries(r).flatMap(([s,o])=>!d||d.includes(s)?(o||[]).filter(p=>!p.used).map(p=>({...p,_line:s})):[]);return l.length?(je(l,i,e>0?`⚡ +${e} à ${i} joueur(s)`:`💀 -${Math.abs(e)} à ${i} joueur(s)`,n,c,s=>{s.forEach(o=>{for(const p of["GK","DEF","MIL","ATT"]){const f=(c.homeTeam[p]||[]).find(u=>u.cardId===o.cardId)||(c.aiTeam[p]||[]).find(u=>u.cardId===o.cardId);if(f){f.boost=(f.boost||0)+e;break}}}),c.log.push({text:`${e>0?"⚡":"💀"} ${Math.abs(e)>0?"+":""}${e} → ${s.map(o=>o.name).join(", ")}`,type:"info"}),W(n,c,a)}),!0):(a.toast("Aucun joueur disponible","error"),!0)},DEBUFF_STAT(e,t,i,d){return Mt.BOOST_STAT({...e,value:-Math.abs(e.value||2)},t,i,d)},GRAY_PLAYER({target:e="opponent",count:t=1,roles:i=null},d,c,n){const a=e==="opponent"?d.aiTeam:d.homeTeam,r=Object.entries(a).flatMap(([l,s])=>!i||i.includes(l)?(s||[]).filter(o=>!o.used).map(o=>({...o,_line:l})):[]);return r.length?(je(r,t,`❄️ Griser ${t} joueur(s)`,c,d,l=>{l.forEach(s=>{for(const o of Object.keys(d.aiTeam).concat(Object.keys(d.homeTeam))){const f=((e==="opponent"?d.aiTeam[o]:d.homeTeam[o])||[]).find(u=>u.cardId===s.cardId);if(f){f.used=!0;break}}}),d.log.push({text:`❄️ ${l.map(s=>s.name).join(", ")} grisé(s) !`,type:"info"}),W(c,d,n)}),!0):(n.toast("Aucun joueur à griser","error"),!0)},REVIVE_PLAYER({count:e=1},t,i,d){const c=Object.entries(t.homeTeam).flatMap(([n,a])=>(a||[]).filter(r=>r.used).map(r=>({...r,_line:n})));return c.length?(je(c,e,"💫 Ressusciter",i,t,n=>{n.forEach(a=>{for(const r of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[r]||[]).find(s=>s.cardId===a.cardId);if(l){l.used=!1;break}}}),t.log.push({text:`💫 ${n.map(a=>a.name).join(", ")} ressuscité(s) !`,type:"info"}),W(i,t,d)}),!0):(d.toast("Aucun joueur à ressusciter","error"),!0)},REMOVE_GOAL(e,t,i,d){return t.aiScore<=0?(d.toast("Aucun but adverse","error"),!1):(t.aiScore--,t.log.push({text:"🚫 But adverse retiré !",type:"info"}),!1)},ADD_GOAL_DRAW(e,t,i,d){return t.modifiers=t.modifiers||{},t.modifiers.home=t.modifiers.home||{},t.modifiers.home.addGoalOnDraw=!0,t.log.push({text:"⚽ +1 but si duel nul activé !",type:"info"}),!1},ADD_SUB({count:e=1},t,i,d){return t.maxSubs+=e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1}};function Di(e,t,i,d,c){if(d.usedGc.includes(e))return;d.usedGc.push(e);const n=(d.gcDefs||[]).find(r=>r.name===t);let a=!1;if(n!=null&&n.effect_type&&n.effect_type!=="CUSTOM"){const r=Mt[n.effect_type];r?r(n.effect_params||{},d,i,c)||(a=!0):(c.toast(`Effet "${n.effect_type}" non implémenté`,"error"),a=!0)}else{switch(t){case"Double attaque":d.modifiers.home.doubleAttack=!0,d.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":d.modifiers.home.shield=!0,d.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const r=Object.entries(d.homeTeam).flatMap(([l,s])=>(s||[]).filter(o=>o.used).map(o=>({...o,_line:l})));r.length?(r[0].used=!1,d.log.push({text:`💫 ${r[0].name} ressuscité !`,type:"info"})):d.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":d.modifiers.ai.stolenNote=(d.modifiers.ai.stolenNote||0)+1,d.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const r=[...d.aiTeam.ATT||[],...d.aiTeam.MIL||[]].filter(l=>!l.used);if(r.length){const l=r.sort((s,o)=>Y(o,"ATT")-Y(s,"ATT"))[0];l.used=!0,d.log.push({text:`❄️ ${l.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":d.maxSubs++,d.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}a=!0}$.from("cards").delete().eq("id",e).then(()=>{}),a&&W(i,d,c)}function Gi(e,t,i){const d=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!d.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${d.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${fe[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Y(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const n=c.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const r=(t.homeTeam[a]||[]).find(l=>l.cardId===n);if(r){r.boost=(r.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${r.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),W(e,t,i)})})}function Je(e,t,i,d,c){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(s,o)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${o%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][o%8]}
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
    ${d?"BUT !":"BUT IA !"}
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
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(n);let r=!1;const l=()=>{r||(r=!0,n.remove(),setTimeout(()=>c(),50))};n.addEventListener("click",l),setTimeout(l,3500)}async function le(e,t,i){var o,p;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:d}=i,c=t.homeScore>t.aiScore,n=t.homeScore===t.aiScore,a=c?"victoire":n?"nul":"defaite",r=Dt(t.mode,a);t.matchId&&await $.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?d.profile.id:null,home_credits_reward:r,played_at:new Date().toISOString()}).eq("id",t.matchId);const l={credits:(d.profile.credits||0)+r,matches_played:(d.profile.matches_played||0)+1};c?l.wins=(d.profile.wins||0)+1:n?l.draws=(d.profile.draws||0)+1:l.losses=(d.profile.losses||0)+1,await $.from("users").update(l).eq("id",d.profile.id),await i.refreshProfile();const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",s.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${c?"🏆":n?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${c?"Victoire !":n?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${r.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(s),(o=document.getElementById("res-home"))==null||o.addEventListener("click",()=>{s.remove(),ne(e),i.navigate("home")}),(p=document.getElementById("res-replay"))==null||p.addEventListener("click",()=>{s.remove(),ne(e),i.navigate("match",{matchMode:t.mode})})}function qi(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ye(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ri={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Ni(e,t){const{state:i,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await Ze(e,t)}async function Ze(e,t){const{state:i,toast:d}=t,{data:c}=await $.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:n}=await $.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(c||[]).filter(s=>s.seller_id!==i.profile.id),r=n||[];r.filter(s=>s.status==="active").length,e.innerHTML=`
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
  `;function l(s){const o=document.getElementById("mkt-content"),p=s==="buy"?a:r;if(p.length===0){o.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${s==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const f=s==="mine"?[...p].sort((u,g)=>u.status!==g.status?u.status==="active"?-1:1:new Date(g.listed_at)-new Date(u.listed_at)):p;o.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${f.map(u=>{var m,h,E,x;const g=(m=u.card)==null?void 0:m.player;if(!g)return"";const y=g.job==="GK"?g.note_g:g.job==="DEF"?g.note_d:g.job==="MIL"?g.note_m:g.note_a,v=Ri[g.rarity],k=(i.profile.credits||0)>=u.price,_=u.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${_?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${Hi(g.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${v};flex-shrink:0">${y}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${g.firstname} ${g.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${g.country_code} · ${((h=g.clubs)==null?void 0:h.encoded_name)||"—"} · ${g.rarity} · ${g.job}</div>
            ${s==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((E=u.seller)==null?void 0:E.pseudo)||"—"}</div>`:_?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((x=u.buyer)==null?void 0:x.pseudo)||"—"} · ${u.sold_at?new Date(u.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(u.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${u.price.toLocaleString("fr")}</div>
            ${s==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${u.id}" ${k?"":"disabled"} style="margin-top:4px">${k?"Acheter":"Trop cher"}</button>`:_?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${u.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,o.querySelectorAll("[data-buy]").forEach(u=>{u.addEventListener("click",()=>Oi(u.dataset.buy,p,e,t))}),o.querySelectorAll("[data-cancel]").forEach(u=>{u.addEventListener("click",()=>Pi(u.dataset.cancel,e,t))})}l("buy"),e.querySelectorAll(".mkt-tab").forEach(s=>{s.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(o=>{const p=o===s;o.style.background=p?"var(--green)":"#fff",o.style.color=p?"#fff":"var(--gray-600)",o.style.borderColor=p?"var(--green)":"var(--gray-200)"}),l(s.dataset.tab)})})}async function Oi(e,t,i,d){var p;const{state:c,toast:n}=d,a=t.find(f=>f.id===e);if(!a)return;const r=a.price,l=c.profile.credits||0,s=(p=a.card)==null?void 0:p.player;if(l<r){n("Crédits insuffisants","error");return}if(!confirm(`Acheter ${s==null?void 0:s.firstname} ${s==null?void 0:s.surname_encoded} pour ${r.toLocaleString("fr")} crédits ?`))return;const o=document.querySelector(`[data-buy="${e}"]`);o&&(o.disabled=!0,o.textContent="⏳");try{const{data:f,error:u}=await $.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(u)throw new Error(u.message);if(!(f!=null&&f.success))throw new Error((f==null?void 0:f.error)||"Achat impossible");c.profile.credits=l-r;const g=document.querySelector("[data-credits]")||document.querySelector(".credits-display");g&&(g.textContent=(l-r).toLocaleString("fr")+" cr."),n(`✅ ${s==null?void 0:s.surname_encoded} ajouté à ta collection !`,"success"),Ze(i,d)}catch(f){n("❌ "+f.message,"error"),o&&(o.disabled=!1,o.textContent="Acheter")}}async function Pi(e,t,i){const{toast:d}=i,{data:c}=await $.from("market_listings").select("card_id").eq("id",e).single();await $.from("market_listings").update({status:"cancelled"}).eq("id",e),c&&await $.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id),d("Annonce retirée","success"),Ze(t,i)}function Hi(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function Ki(e,{state:t,navigate:i,toast:d}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await $.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${c&&c.length>0?c.map((n,a)=>`
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
  `}async function Ui(e,{state:t,navigate:i,toast:d}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await $.from("matches").select("id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at").or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},r=(n||[]).filter(o=>o.status==="finished"),l=(n||[]).filter(o=>o.status==="in_progress");function s(o){const p=o.home_id===c.id;p?o.home_score:o.away_score,p?o.away_score:o.home_score;const f=o.winner_id===c.id,u=o.home_score===o.away_score&&o.status==="finished",g=o.status!=="finished"?"…":u?"N":f?"V":"D",y=o.status!=="finished"||u?"#888":f?"#1A6B3C":"#c0392b";let v=a[o.mode]||o.mode;o.away_id===null&&!v.startsWith("IA")&&(v="IA");let k="";o.status==="in_progress"&&Date.now()-new Date(o.created_at).getTime()>3600*1e3&&(k=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const _=new Date(o.created_at),m=_.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+_.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),h=o.status==="finished"?`${o.home_score} - ${o.away_score}`:`${o.home_score||0} - ${o.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${v}${k}</div>
        <div style="font-size:11px;color:var(--gray-600)">${m}${o.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${h}</span>
        <span style="background:${y};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${g}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(n||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${l.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${l.map(s).join("")}
        </div>`:""}

      ${r.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${r.map(s).join("")}
        </div>`:""}

      ${(n||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const H={user:null,profile:null,page:"home",params:{}};function ke(e,t="info",i=3e3){const d=document.getElementById("toast");d&&(d.textContent=e,d.className=`show ${t}`,clearTimeout(d._t),d._t=setTimeout(()=>{d.className=""},i))}function Vi(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Ge(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ee(){if(!H.user)return;const{data:e}=await $.from("users").select("*").eq("id",H.user.id).single();e&&(H.profile=e)}const Qe="mw_theme";function Me(){return localStorage.getItem(Qe)||"light"}function Yi(e){var t;localStorage.setItem(Qe,e),qe(e),(t=H.profile)!=null&&t.id&&$.from("users").update({theme:e}).eq("id",H.profile.id).then(()=>{})}function qe(e){document.documentElement.setAttribute("data-theme",e)}function Ae(e,t={}){H.page=e,H.params=t,zt()}async function zt(){const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===H.page)});const t=document.getElementById("nav-credits");t&&H.profile&&(t.textContent=`💰 ${(H.profile.credits||0).toLocaleString("fr")}`);const i={state:H,navigate:Ae,toast:ke,openModal:Vi,closeModal:Ge,refreshProfile:Ee};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',H.page){case"home":await nt(e,i);break;case"collection":await Rt(e,i);break;case"decks":await Se(e,i);break;case"boosters":await oi(e,i);break;case"match":await Ei(e,i);break;case"market":await Ni(e,i);break;case"rankings":await Ki(e,i);break;case"matches":await Ui(e,i);break;default:await nt(e,i)}}function Wi(){const e=document.getElementById("app"),t=H.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(d=>{d.addEventListener("click",c=>{c.preventDefault(),Ae(d.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ae("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ae("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const c=Me()==="dark"?"light":"dark";Yi(c),ft(c)}),ft(Me())}function ft(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function Xi(){qe(Me()),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&Ge()}),document.getElementById("modal-close").addEventListener("click",Ge);const{data:{session:e}}=await $.auth.getSession();if(!e){mt(),tt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:ke});return}H.user=e.user,await Ee(),mt();try{const{data:t}=await $.from("formation_links_overrides").select("formation, links"),i={};(t||[]).forEach(d=>{i[d.formation]=d.links}),jt(i)}catch(t){console.warn("Impossible de charger les overrides de formation:",t)}if(!H.profile){St(document.getElementById("app"),{state:H,navigate:async()=>{await Ee(),gt()},toast:ke,refreshProfile:Ee});return}H.profile.theme&&H.profile.theme!==Me()&&(localStorage.setItem(Qe,H.profile.theme),qe(H.profile.theme)),gt(),$.auth.onAuthStateChange(async(t,i)=>{t==="SIGNED_OUT"&&(H.user=null,H.profile=null,document.getElementById("app").innerHTML="",tt(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:ke}))})}function gt(){const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Wi(),zt()}function mt(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}Xi();
