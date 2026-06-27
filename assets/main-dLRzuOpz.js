import{s as A,j as Ai,F as ni,l as Qe,h as St,i as Ji,k as Qi,b as Zi}from"./formation-links-CEzN0rcz.js";function mi(e,{navigate:t,toast:n}){e.innerHTML=`
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
  `,e.querySelectorAll(".auth-tab").forEach(r=>{r.addEventListener("click",()=>{e.querySelectorAll(".auth-tab").forEach(u=>u.classList.remove("active")),r.classList.add("active"),document.getElementById("tab-login").style.display=r.dataset.tab==="login"?"block":"none",document.getElementById("tab-register").style.display=r.dataset.tab==="register"?"block":"none"})}),document.getElementById("login-btn").addEventListener("click",async()=>{const r=document.getElementById("login-email").value.trim(),u=document.getElementById("login-password").value,s=document.getElementById("login-error");if(s.textContent="",!r||!u){s.textContent="Remplissez tous les champs.";return}const d=document.getElementById("login-btn");d.textContent="Connexion…",d.disabled=!0;const{error:l}=await A.auth.signInWithPassword({email:r,password:u});if(d.textContent="Se connecter",d.disabled=!1,l){s.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()}),document.getElementById("login-password").addEventListener("keydown",r=>{r.key==="Enter"&&document.getElementById("login-btn").click()}),document.getElementById("reg-btn").addEventListener("click",async()=>{const r=document.getElementById("reg-email").value.trim(),u=document.getElementById("reg-password").value,s=document.getElementById("reg-confirm").value,d=document.getElementById("reg-error");if(d.textContent="",!r||!u||!s){d.textContent="Remplissez tous les champs.";return}if(u.length<6){d.textContent="Mot de passe trop court (min. 6 caractères).";return}if(u!==s){d.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="Création…",l.disabled=!0;const{error:p}=await A.auth.signUp({email:r,password:u});if(l.textContent="Créer mon compte",l.disabled=!1,p){d.textContent=p.message;return}n("Compte créé ! Connectez-vous.","success",4e3),document.querySelector('[data-tab="login"]').click(),document.getElementById("login-email").value=r})}function eo(e,{state:t,navigate:n,toast:r,refreshProfile:u}){let s="#1A6B3C",d="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${d};border-color:${s}">
          <span id="logo-initials" style="color:${s}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${s};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${s}" style="width:100%;height:36px;padding:2px;border-radius:6px">
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch2" style="background:${d};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur de l'intérieur</label>
              <input type="color" id="color2" value="${d}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function l(){var E;const i=document.getElementById("logo-preview"),a=document.getElementById("logo-initials"),f=((E=document.getElementById("setup-club"))==null?void 0:E.value)||"MW",m=f.trim().split(" ").filter(Boolean),b=m.length>=2?(m[0][0]+m[1][0]).toUpperCase():f.slice(0,2).toUpperCase();i&&(i.style.background=d,i.style.borderColor=s),a&&(a.textContent=b,a.style.color=s)}document.getElementById("color1").addEventListener("input",i=>{s=i.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",i=>{d=i.target.value,document.getElementById("swatch2").style.background=d,l()});function p(i){document.querySelectorAll(".setup-step").forEach(a=>a.classList.remove("active")),document.getElementById(`step-${i}`).classList.add("active"),document.getElementById("step-num").textContent=i,document.getElementById("progress-fill").style.width=`${Math.round(i/3*100)}%`,i===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),a=document.getElementById("step1-error");if(a.textContent="",i.length<3){a.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await A.from("users").select("id").eq("pseudo",i).maybeSingle();if(f){a.textContent="Ce pseudo est déjà pris.";return}p(2)}),document.getElementById("step2-back").addEventListener("click",()=>p(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const i=document.getElementById("setup-club").value.trim(),a=document.getElementById("step2-error");if(a.textContent="",i.length<2){a.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await A.from("users").select("id").eq("club_name",i).maybeSingle();if(f){a.textContent="Ce nom de club est déjà pris.";return}p(3)}),document.getElementById("step3-back").addEventListener("click",()=>p(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const i=document.getElementById("setup-pseudo").value.trim(),a=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),m=document.getElementById("step3-finish");f.textContent="",m.disabled=!0,m.textContent="Création en cours…";try{const{error:b}=await A.from("users").insert({id:t.user.id,pseudo:i,club_name:a,club_color1:s,club_color2:d,credits:1e4});if(b)throw b;await to(t.user.id),await u(),r(`Bienvenue ${i} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(b){f.textContent=b.message,m.disabled=!1,m.textContent="🚀 Créer mon profil !"}})}async function to(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await A.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(n){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",n)}}const Be={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function be(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const xi=["ATT","MIL","DEF","GK"];function Ii(e){let t=0;const n=e.length;for(let r=0;r<n;r++)for(let u=r+1;u<n;u++){const s=e[r],d=e[u];if(!s||!d)continue;const l=s._col!=null&&d._col!=null&&s._col===d._col,p=s._col!=null&&d._col!=null&&Math.abs(s._col-d._col)===1,i=xi.indexOf(s._line||s.job),a=xi.indexOf(d._line||d.job),f=Math.abs(i-a)===1;if(!((s._line||s.job)===(d._line||d.job)&&p||l&&f))continue;const E=s.country_code&&d.country_code&&s.country_code===d.country_code,o=s.club_id&&d.club_id&&s.club_id===d.club_id;E&&o?t+=2:(E||o)&&(t+=1)}return t}function Rt(e,t={}){const n=e.reduce((s,d)=>{const l=d._line||d.job;return s+(Number(l==="MIL"?d.note_m:d.note_a)||0)+(d.boost||0)},0),r=Ii(e);let u=n+r;return t.doubleAttack&&(u*=2),t.stolenNote&&(u-=t.stolenNote),{base:n,links:r,total:Math.max(0,u)}}function Nt(e,t={}){const n=e.reduce((s,d)=>{const l=d._line||d.job;let p=0;return l==="GK"?p=Number(d.note_g)||0:l==="MIL"?p=Number(d.note_m)||0:p=Number(d.note_d)||0,s+p+(d.boost||0)},0),r=Ii(e);let u=n+r;return t.stolenNote&&(u-=t.stolenNote),{base:n,links:r,total:Math.max(0,u)}}function Pt(e,t,n={}){return n.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Li(e,t,n="easy"){const r=e.filter(d=>!d.used);if(!r.length)return[];const u=[...r].sort((d,l)=>{const p=t==="attack"?be(d,"ATT"):d._line==="GK"?be(d,"GK"):be(d,"DEF");return(t==="attack"?be(l,"ATT"):l._line==="GK"?be(l,"GK"):be(l,"DEF"))-p});let s=n==="easy"?1+Math.floor(Math.random()*2):n==="medium"?2+Math.floor(Math.random()*2):3;return u.slice(0,Math.min(s,u.length,3))}function io(e,t){const n={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(n[e]||n.vs_ai_easy)[t]||0}const lt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ct={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function nt(e,t,n,r,u){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${n}</p>
      <button class="btn btn-primary" id="msg-btn">${r}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",u)}function Ie(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Xt(e,t){var r,u;const n=e.player;return{cardId:e.id,position:t||null,id:n.id,firstname:n.firstname,name:n.surname_encoded,country_code:n.country_code,club_id:n.club_id,job:n.job,job2:n.job2,note_g:Number(n.note_g)||0,note_d:Number(n.note_d)||0,note_m:Number(n.note_m)||0,note_a:Number(n.note_a)||0,rarity:n.rarity,skin:n.skin,hair:n.hair,hair_length:n.hair_length,clubName:((r=n.clubs)==null?void 0:r.encoded_name)||null,clubLogo:((u=n.clubs)==null?void 0:u.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function it(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ri(){const e=Math.random()*100;return e<10?3:e<30?2:1}function pt(e,t){const n=lt[t]||lt["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(d=>d.position)){for(const d of["GK","DEF","MIL","ATT"]){const l=e.filter(i=>i.position&&i.position.replace(/\d+$/,"")===d).sort((i,a)=>parseInt(i.position.replace(/\D+/g,""),10)-parseInt(a.position.replace(/\D+/g,""),10)).map(i=>({...i,_line:d})),p=it(l.length);l.forEach((i,a)=>{i._col=p[a]}),r[d]=l}return r}const s=[...e];for(const d of["GK","DEF","MIL","ATT"]){const l=[];for(let i=0;i<n[d];i++){let a=s.findIndex(f=>f.job===d);if(a===-1&&(a=s.findIndex(f=>f.job2===d)),a===-1&&(a=0),s[a]){const f={...s[a],_line:d};l.push(f),s.splice(a,1)}}const p=it(l.length);l.forEach((i,a)=>{i._col=p[a]}),r[d]=l}return r}function We(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function De(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ai(e,t,n){const u=new Set,s=t.filter(a=>{const f=a.gc_type||a.id;return u.has(f)?!1:(u.add(f),!0)});let d=[];function l(a,f){const m=a._gcDef,b={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},E={purple:"#9b59b6",light_blue:"#00bcd4"},o=b[m==null?void 0:m.color]||b.purple,k=E[m==null?void 0:m.color]||E.purple;return`<div class="gc-select-card" data-id="${a.id}"
      style="width:100px;border-radius:10px;border:3px solid ${f?"#FFD700":k};background:${o};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${f?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${f?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((m==null?void 0:m.name)||a.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(m==null?void 0:m.name)||a.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${m!=null&&m.image_url?`<img src="/manager-wars/icons/${m.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((m==null?void 0:m.effect)||"").slice(0,50)}</span>
      </div>
      ${f?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const p=a=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",n(a)};function i(){var f,m,b;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const a=d.length>0;e.innerHTML=`
    <div id="gc-screen-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <!-- Header -->
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Jusqu'à <b style="color:#FFD700">3</b> cartes · ${d.length}/3
        </div>
      </div>
      <!-- Grille cartes -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px">
        ${s.map(E=>{const o=d.find(k=>k.gc_type===E.gc_type);return l(E,!!o)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${a?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${a?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${a?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${a?"pointer":"default"};box-shadow:${a?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
          ⚡ Valider (${d.length}/3)
        </button>
        <div style="display:flex;gap:8px">
          <button id="gc-no-gc" style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.7);font-size:13px;font-weight:600;cursor:pointer">
            ▶ Sans GC
          </button>
          <button id="gc-reset" ${d.length===0?"disabled":""} style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(212,160,23,0.4);background:rgba(212,160,23,0.1);color:${d.length===0?"rgba(212,160,23,0.3)":"#D4A017"};font-size:13px;font-weight:700;cursor:${d.length===0?"default":"pointer"}">
            🔄 Réinitialiser
          </button>
        </div>
      </div>
    </div>`,e.querySelectorAll(".gc-select-card").forEach(E=>{E.addEventListener("click",()=>{const o=E.dataset.id,k=s.find(M=>M.id===o);if(!k)return;const z=d.findIndex(M=>M.gc_type===k.gc_type);z>-1?d.splice(z,1):d.length<3&&d.push(k),i()})}),(f=e.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{a&&p(d)}),(m=e.querySelector("#gc-no-gc"))==null||m.addEventListener("click",()=>p([])),(b=e.querySelector("#gc-reset"))==null||b.addEventListener("click",()=>{d.length&&(d=[],i())})}i()}async function oo(e,t,n){const{state:r,navigate:u}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await A.from("decks").select("id,name,is_active,formation").eq("owner_id",r.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){nt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>u("decks"));return}const d=s.map(a=>a.id),{data:l}=await A.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",d).order("slot_order");let p=0;function i(){var M,B,O,j,C;const a=s[p],f=(l||[]).filter(q=>q.deck_id===a.id),m=f.filter(q=>{var Z;return q.is_starter&&((Z=q.card)==null?void 0:Z.player)}).map(q=>Xt(q.card,q.position)),b=f.find(q=>{var Z;return((Z=q.card)==null?void 0:Z.card_type)==="formation"}),E=a.formation||((M=b==null?void 0:b.card)==null?void 0:M.formation)||"4-4-2",o=m.length>=11?pt(m,E):null,k=m.length>=11;We(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===0?"0.1":"0.3"});color:${p===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${a.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${E} · ${m.length}/11 ${a.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===s.length-1?"0.1":"0.3"});color:${p===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${o?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${st(o,E,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${m.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((q,Z)=>`<div style="width:7px;height:7px;border-radius:50%;background:${Z===p?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${k?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${k?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${k?"pointer":"default"}">
          ${k?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const Z=e.querySelector(".deck-preview-wrap svg");Z&&(Z.removeAttribute("width"),Z.removeAttribute("height"),Z.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Z.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(B=document.getElementById("prev-deck"))==null||B.addEventListener("click",()=>{p>0&&(p--,i())}),(O=document.getElementById("next-deck"))==null||O.addEventListener("click",()=>{p<s.length-1&&(p++,i())}),(j=document.getElementById("validate-deck"))==null||j.addEventListener("click",()=>{k&&t.navigate("match",{matchMode:n,deckId:a.id})}),(C=document.getElementById("cancel-deck-select"))==null||C.addEventListener("click",()=>{De(e),u("home")});const z=document.getElementById("deck-swipe-zone");if(z){let q=0,Z=0;z.addEventListener("touchstart",se=>{q=se.touches[0].clientX,Z=se.touches[0].clientY},{passive:!0}),z.addEventListener("touchend",se=>{const ne=se.changedTouches[0].clientX-q,S=se.changedTouches[0].clientY-Z;Math.abs(ne)<40||Math.abs(ne)<Math.abs(S)||(ne<0&&p<s.length-1?(p++,i()):ne>0&&p>0&&(p--,i()))},{passive:!0})}}i()}function zi(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ue(e,t=44,n=58){if(!e)return`<div style="width:${t}px;height:${n}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const r=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Ie(e),u=zi(e),s=e._line||e.job||"MIL",d=ct[s]||"#555",l={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",p=e.note!==void 0?Number(e.note)||0:(Number(be(e,s))||0)+(e.boost||0),i=Mi(e==null?void 0:e.country_code),a=Math.round(n*.19),f=Math.round(n*.25),m=n-Math.round(n*.19)-Math.round(n*.25),b=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${l};background:${d};position:relative;overflow:hidden;flex-shrink:0;opacity:${b}">
    <div style="position:absolute;top:0;left:0;right:0;height:${a}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${r&&!(e!=null&&e.used)?`<img src="${r}" style="position:absolute;top:${a}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Jt(e==null?void 0:e.country_code)?`<img src="${Jt(e.country_code)}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">${i}</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":p}</span>
      ${u?`<img src="${u}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function et(e,t,n){if(!(e!=null&&e.length))return"";const r=e.slice(0,5);let u='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return r.forEach((s,d)=>{if(u+=Ue(s,40,52),d<r.length-1){const l=Qe(s,r[d+1]);u+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),n!==void 0&&(u+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${n}</div>`),u+="</div>",u}function Jt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Mi(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function at(e,t,n,r,u=310,s=310,d=[]){var B;const l=St[t]||{},p=Ai(t)||ni[t]||[],i={},a=["ATT","MIL","DEF","GK"];for(const O of a)(e[O]||[]).forEach((C,q)=>{i[`${O}${q+1}`]=C});function f(O){const j=l[O];return j?{x:j.x*u,y:j.y*s}:null}let m="";for(const[O,j]of p){const C=f(O),q=f(j);if(!C||!q)continue;const Z=i[O],se=i[j],ne=Qe(Z,se);ne==="#00ff88"||ne==="#FFD700"?(m+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${q.x.toFixed(1)}" y2="${q.y.toFixed(1)}"
        stroke="${ne}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,m+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${q.x.toFixed(1)}" y2="${q.y.toFixed(1)}"
        stroke="${ne}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):m+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${q.x.toFixed(1)}" y2="${q.y.toFixed(1)}"
        stroke="${ne}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const b=48,E=64,o=13,k=16,z={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[O,j]of Object.entries(i)){const C=f(O);if(!C||!j)continue;const q=O.replace(/[0-9]/g,""),Z=ct[q]||"#555",se=d.includes(j.cardId),ne=n==="attack"&&(["MIL","ATT"].includes(q)||se)&&!j.used||n==="defense"&&["GK","DEF","MIL"].includes(q)&&!j.used,S=r.includes(j.cardId);let K;n==="attack"?K=se?Math.max(1,Number(j.note_a)||0):q==="MIL"?Number(j.note_m)||0:Number(j.note_a)||0:n==="defense"?K=q==="GK"?Number(j.note_g)||0:q==="MIL"?Number(j.note_m)||0:Number(j.note_d)||0:K=Number(q==="GK"?j.note_g:q==="DEF"?j.note_d:q==="MIL"?j.note_m:j.note_a)||0,K=K+(j.boost||0);const te=(C.x-b/2).toFixed(1),F=(C.y-E/2).toFixed(1),Q=z[j==null?void 0:j.rarity]||z.normal;if(j.used){const R=typeof import.meta<"u"&&"/manager-wars/"||"/",P=`${typeof window<"u"&&((B=window.location)==null?void 0:B.origin)||""}${R}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");m+=`<rect x="${te}" y="${F}" width="${b}" height="${E}" rx="5" fill="#161616"/>`,m+=`<image href="${P}" xlink:href="${P}" x="${te}" y="${F}" width="${b}" height="${E}" preserveAspectRatio="xMidYMid slice"/>`,m+=`<rect x="${te}" y="${F}" width="${b}" height="${E}" rx="5" fill="none" stroke="${Q}" stroke-width="2" opacity="0.7"/>`,m+=`<rect x="${te}" y="${F}" width="${b}" height="${E}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${j.cardId}" data-role="${q}" style="cursor:pointer"/>`;continue}const V=S?.45:1,ae=S?"#FFD700":Q,ge=S?3:(j==null?void 0:j.rarity)==="legende"||(j==null?void 0:j.rarity)==="légende"||(j==null?void 0:j.rarity)==="pepite"||(j==null?void 0:j.rarity)==="pépite"?2.5:2,me=E-o-k;m+=`<defs><clipPath id="cp-${O}"><rect x="${te}" y="${(C.y-E/2+o).toFixed(1)}" width="${b}" height="${me}"/></clipPath></defs>`,m+=`<rect x="${te}" y="${F}" width="${b}" height="${E}" rx="5" fill="${Z}" opacity="${V}"/>`;const xe=Ie(j);xe&&(m+=`<image href="${xe}" xlink:href="${xe}" x="${te}" y="${(C.y-E/2+o).toFixed(1)}" width="${b}" height="${me}" clip-path="url(#cp-${O})" preserveAspectRatio="xMidYMin slice"/>`),m+=`<rect x="${te}" y="${F}" width="${b}" height="${o}" rx="4" fill="rgba(255,255,255,0.92)"/>`,m+=`<text x="${C.x.toFixed(1)}" y="${(C.y-E/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(j.name||"").slice(0,9)}</text>`;const N=(C.y+E/2-k).toFixed(1);m+=`<rect x="${te}" y="${N}" width="${b}" height="${k}" fill="rgba(255,255,255,0.92)"/>`;{const R=Jt(j.country_code);R?m+=`<image href="${R}" xlink:href="${R}" x="${(C.x-20).toFixed(1)}" y="${(C.y+E/2-k+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:m+=`<text x="${(C.x-13).toFixed(1)}" y="${(C.y+E/2-k/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Mi(j.country_code)}</text>`,m+=`<text x="${C.x.toFixed(1)}" y="${(C.y+E/2-k/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${K}</text>`;const W=zi(j);W?m+=`<image href="${W}" xlink:href="${W}" x="${(C.x+b/2-14).toFixed(1)}" y="${(C.y+E/2-k+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:j.clubName&&(m+=`<text x="${(C.x+14).toFixed(1)}" y="${(C.y+E/2-k/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(j.clubName||"").slice(0,3).toUpperCase()}</text>`),j.boost&&(m+=`<rect x="${(C.x+b/2-12).toFixed(1)}" y="${(C.y-E/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,m+=`<text x="${(C.x+b/2-5).toFixed(1)}" y="${(C.y-E/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${j.boost}</text>`)}m+=`<rect x="${te}" y="${F}" width="${b}" height="${E}" rx="5" fill="${S?"rgba(255,255,255,0.12)":"none"}" stroke="${ae}" stroke-width="${ge}" opacity="${V}"/>`,ne&&(m+=`<rect x="${te}" y="${F}" width="${b}" height="${E}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${S?"selected":""}" data-card-id="${j.cardId}" data-role="${q}" style="cursor:pointer"/>`)}const M=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-M} ${-M} ${u+M*2} ${s+M*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${m}
  </svg>`}function st(e,t,n,r,u=300,s=300,d=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${at(e,t,n,r,u,s,d)}
  </div>`}function tt(e,t=!1){const n=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${n?`<img src="${n}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function si(e,t,n,r){var j;const{state:u,navigate:s,toast:d}=t;We(e);const l=u.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return oo(e,t,n);const p=l.deckId;let i,a,f,m;try{const C=await Promise.all([A.from("decks").select("formation,name").eq("id",p).single(),A.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",p).order("slot_order")]);i=C[0].data,f=C[0].error,a=C[1].data,m=C[1].error}catch(C){console.error("[Match] Exception chargement deck:",C),nt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(f||m){console.error("[Match] Erreur Supabase:",f||m),nt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const b=(a||[]).filter(C=>{var q;return C.is_starter&&((q=C.card)==null?void 0:q.player)}).map(C=>Xt(C.card,C.position)),E=(a||[]).filter(C=>{var q;return!C.is_starter&&((q=C.card)==null?void 0:q.player)}).map(C=>Xt(C.card,C.position));if(b.length<11){nt(e,"⚠️",`Deck incomplet (${b.length}/11).`,"Compléter",()=>s("decks"));return}const o=(a||[]).find(C=>{var q;return((q=C.card)==null?void 0:q.card_type)==="formation"}),k=(i==null?void 0:i.formation)||((j=o==null?void 0:o.card)==null?void 0:j.formation)||"4-4-2",{data:z,error:M}=await A.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",u.profile.id).eq("card_type","game_changer"),{data:B}=await A.from("gc_definitions").select("*").eq("is_active",!0),O=(z||[]).map(C=>({...C,_gcDef:(B==null?void 0:B.find(q=>q.name===C.gc_type||q.id===C.gc_definition_id))||null}));r({deckId:p,formation:k,starters:b,subsRaw:E,gcCardsEnriched:O,gcDefs:B||[]})}async function Si(e,t,n,r=null){await si(e,t,"random",({deckId:u,formation:s,starters:d,subsRaw:l,gcCardsEnriched:p,gcDefs:i})=>{const a=f=>no(e,t,n,r,u,s,d,l,f,i||[]);if(!p.length){a([]);return}ai(e,p,a)})}async function no(e,t,n,r,u,s,d,l,p=[],i=[]){var q;const{state:a,navigate:f,toast:m}=t,b=a.profile.id;let E=!1,o=null;We(e);const{data:k}=await A.from("users").select("pseudo, club_name").eq("id",n).single(),z=(k==null?void 0:k.club_name)||(k==null?void 0:k.pseudo)||"Ami";e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#00ff88;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Salon ami — ${z}</div>
      <div id="lobby-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au salon...</div>
      <div id="lobby-players" style="display:flex;gap:20px;margin-top:4px">
        <div style="text-align:center">
          <div id="p-me" style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:20px;margin:0 auto 4px">⏳</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.5)">Moi</div>
        </div>
        <div style="font-size:28px;color:rgba(255,255,255,0.3);line-height:48px">VS</div>
        <div style="text-align:center">
          <div id="p-friend" style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:20px;margin:0 auto 4px">⏳</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.5)">${z}</div>
        </div>
      </div>
      <button id="lobby-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const M=Z=>{const se=document.getElementById("lobby-status");se&&(se.textContent=Z)},B=(Z,se)=>{const ne=document.getElementById(Z==="me"?"p-me":"p-friend");ne&&(ne.textContent=se?"✅":"⏳",ne.style.background=se?"rgba(0,255,136,0.2)":"rgba(255,255,255,0.1)")},O=async(Z=!1)=>{if(E=!0,o){try{A.removeChannel(o)}catch{}o=null}Z&&r&&await A.from("friend_match_lobbies").update({status:"cancelled"}).eq("id",r).catch(()=>{})};(q=document.getElementById("lobby-cancel"))==null||q.addEventListener("click",async()=>{await O(!0),De(e),f("home")});const j=async(Z,se)=>{if(!E){if(E=!0,o){try{A.removeChannel(o)}catch{}o=null}M("C'est parti ! 🚀"),await new Promise(ne=>setTimeout(ne,600)),e.isConnected&&ro(e,t,Z,se,p,i)}};if(!r){await A.from("friend_match_lobbies").update({status:"cancelled"}).eq("inviter_id",b).eq("invitee_id",n).eq("status","waiting");const{data:Z,error:se}=await A.from("friend_match_lobbies").insert({inviter_id:b,invitee_id:n,inviter_deck_id:u,inviter_ready:!0}).select().single();if(se||!Z){m("Erreur création salon","error"),De(e),f("home");return}r=Z.id,M("En attente de "+z+"..."),B("me",!0),o=A.channel("friend-lobby-"+Z.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_lobbies",filter:`id=eq.${Z.id}`},async ne=>{const S=ne.new;if(!E){if(S.status==="cancelled"){m("L'ami a annulé","info"),await O(!1),De(e),f("home");return}if(B("friend",S.invitee_ready),S.match_id&&S.status==="started"){j(S.match_id,!0);return}if(S.inviter_ready&&S.invitee_ready&&!S.match_id&&S.status==="waiting"){M("Création du match...");const{data:K,error:te}=await A.from("matches").insert({home_id:b,away_id:n,status:"active",mode:"friend"}).select().single();if(te||!K){m("Erreur création match","error");return}await A.from("friend_match_lobbies").update({match_id:K.id,status:"started"}).eq("id",Z.id),j(K.id,!0)}}}).subscribe()}else{const{data:Z}=await A.from("friend_match_lobbies").select("*").eq("id",r).single();if(!Z||Z.status!=="waiting"){m("Salon invalide ou expiré","error"),De(e),f("home");return}B("friend",Z.inviter_ready);const{error:se}=await A.from("friend_match_lobbies").update({invitee_deck_id:u,invitee_ready:!0}).eq("id",r);if(se){m("Erreur rejoindre salon","error"),De(e),f("home");return}M("Attente du lancement..."),B("me",!0),o=A.channel("friend-lobby-inv-"+r).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_lobbies",filter:`id=eq.${r}`},async ne=>{const S=ne.new;if(!E){if(S.status==="cancelled"){m("Match annulé","info"),await O(!1),De(e),f("home");return}S.match_id&&S.status==="started"&&j(S.match_id,!1)}}).subscribe()}}async function ro(e,t,n,r,u=[],s=[]){const{state:d,navigate:l,toast:p}=t,i=r?"p1":"p2",a=r?"p2":"p1",f=(u||[]).map(c=>c.id),m=(u||[]).map(c=>({id:c.id,gc_type:c.gc_type,_gcDef:c._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:b}=await A.from("matches").select("*").eq("id",n).single();if(!b){p("Match introuvable","error"),l("home");return}async function E(){const[{data:c},{data:g},{data:h},{data:y}]=await Promise.all([A.rpc("get_deck_for_match",{p_deck_id:b.home_deck_id}),A.rpc("get_deck_for_match",{p_deck_id:b.away_deck_id}),A.from("users").select("id,pseudo,club_name").eq("id",b.home_id).single(),A.from("users").select("id,pseudo,club_name").eq("id",b.away_id).single()]),x=$=>({cardId:$.card_id,position:$.position,id:$.id,firstname:$.firstname,name:$.surname_encoded,country_code:$.country_code,club_id:$.club_id,job:$.job,job2:$.job2,note_g:Number($.note_g)||0,note_d:Number($.note_d)||0,note_m:Number($.note_m)||0,note_a:Number($.note_a)||0,rarity:$.rarity,skin:$.skin,hair:$.hair,hair_length:$.hair_length,clubName:$.club_encoded_name||null,clubLogo:$.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((c==null?void 0:c.starters)||[]).map($=>x($)),w=((g==null?void 0:g.starters)||[]).map($=>x($)),_=(c==null?void 0:c.formation)||"4-4-2",I=(g==null?void 0:g.formation)||"4-4-2";return{p1Team:pt(v,_),p2Team:pt(w,I),p1Subs:((c==null?void 0:c.subs)||[]).map($=>x($)),p2Subs:((g==null?void 0:g.subs)||[]).map($=>x($)),p1Formation:_,p2Formation:I,p1Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:r?f:[],gc_p2:r?[]:f,gcCardsFull_p1:r?m:[],gcCardsFull_p2:r?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let o=b.game_state&&Object.keys(b.game_state).length?b.game_state:null;if(!o)if(r){o=await E();const{data:c}=await A.from("matches").select("game_state").eq("id",n).single();!(c!=null&&c.game_state)||!Object.keys(c.game_state).length?await A.from("matches").update({game_state:o,turn_user_id:b.home_id}).eq("id",n):o=c.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let c=0;c<30&&!o;c++){await new Promise(h=>setTimeout(h,400));const{data:g}=await A.from("matches").select("game_state").eq("id",n).single();g!=null&&g.game_state&&Object.keys(g.game_state).length&&(o=g.game_state)}if(!o){p("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=m,await A.from("matches").update({game_state:o}).eq("id",n)}let k=!1,z=null,M=!1;const B=new Set,O=new Set;function j(c){var $,L;try{A.removeChannel(C)}catch{}const g=o[i+"Score"]||0,h=o[a+"Score"]||0;let y,x;c.winner_id?(y=c.winner_id===d.profile.id,x=!1):c.forfeit?(y=g>h,x=!1):(x=g===h,y=g>h),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=x?"🤝":y?"🏆":"😞",_=x?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",I=x?"#fff":y?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${_}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${g} – ${h} ${o[a+"Name"]}</div>
      ${c.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(L=v.querySelector("#pvp-end-home"))==null||L.addEventListener("click",()=>{v.remove(),De(e),l("home")})}const C=A.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},c=>{const g=c.new;try{if(g.status==="finished"||g.forfeit){if(k)return;k=!0,z&&(clearInterval(z),z=null),g.game_state&&(o=g.game_state),j(g);return}if(g.game_state){const h=o;o=g.game_state;const y=o._lastGC;if(y&&y.seq&&!O.has(y.seq)&&(O.add(y.seq),y.by!==i)){me(y.type,y.by,()=>F());return}const x=h[i+"Score"]||0,v=h[a+"Score"]||0,w=o[i+"Score"]||0,_=o[a+"Score"]||0,I=w>x,$=_>v;if((I||$)&&!B.has(o.round)){B.add(o.round);const L=[...o.log||[]].reverse().find(U=>U.isGoal),D=((L==null?void 0:L.homePlayers)||[]).map(U=>({name:U.name,note:U.note,portrait:U.portrait,job:U.job}));ge(D,w,_,I,()=>F());return}F()}}catch(h){console.error("[PvP] crash:",h)}}).subscribe();async function q(c){Object.assign(o,c),o.lastActionAt=new Date().toISOString();const{error:g}=await A.from("matches").update({game_state:o}).eq("id",n);g&&p("Erreur de synchronisation","error");try{F()}catch(h){console.error("[PvP] renderPvpScreen crash:",h)}}async function Z(){if(k)return;k=!0,z&&(clearInterval(z),z=null);const c=r?b.away_id:b.home_id,g=r?"p2":"p1",h=r?"p1":"p2",y={...o,[g+"Score"]:3,[h+"Score"]:0,phase:"finished"};try{await A.from("matches").update({status:"finished",forfeit:!0,winner_id:c,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",n)}catch{}try{A.removeChannel(C)}catch{}setTimeout(()=>{De(e),l("home")},800)}const se={BOOST_STAT:({value:c=1,count:g=1,roles:h=[]},y,x)=>{const v=y[i+"Team"],w=Object.entries(v).filter(([_])=>!h.length||h.includes(_)).flatMap(([_,I])=>I.filter($=>!$.used).map($=>({...$,_line:_})));if(!w.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),x(y);return}ne(w,g,`Choisir ${g} joueur(s) à booster (+${c})`,_=>{_.forEach(I=>{const $=(v[I._line]||[]).find(L=>L.cardId===I.cardId);$&&($.boost=($.boost||0)+c,y.log.push({text:`⚡ +${c} sur ${$.name}`,type:"info"}))}),y[i+"Team"]=v,x(y)})},DEBUFF_STAT:({value:c=1,count:g=1,roles:h=[],target:y="ai"},x,v)=>{const w=y==="home"?i:a,_=x[w+"Team"],I=y==="home"?"allié":"adverse",$=Object.entries(_).filter(([L])=>!h.length||h.includes(L)).flatMap(([L,D])=>D.filter(U=>!U.used).map(U=>({...U,_line:L})));if(!$.length){x.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),v(x);return}ne($,g,`Choisir ${g} joueur(s) ${I}(s) (-${c})`,L=>{L.forEach(D=>{const U=(_[D._line]||[]).find(re=>re.cardId===D.cardId);U&&(U.boost=(U.boost||0)-c,x.log.push({text:`🎯 -${c} sur ${U.name}`,type:"info"}))}),x[w+"Team"]=_,v(x)})},GRAY_PLAYER:({count:c=1,roles:g=[],target:h="ai"},y,x)=>{const v=h==="home"?i:a,w=y[v+"Team"],_=h==="home"?"allié":"adverse",I=Object.entries(w).filter(([$])=>!g.length||g.includes($)).flatMap(([$,L])=>L.filter(D=>!D.used).map(D=>({...D,_line:$})));if(!I.length){y.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),x(y);return}ne(I,c,`Choisir ${c} joueur(s) ${_}(s) à exclure`,$=>{$.forEach(L=>{const D=(w[L._line]||[]).find(U=>U.cardId===L.cardId);D&&(D.used=!0,y.log.push({text:`❌ ${D.name} exclu !`,type:"info"}))}),y[v+"Team"]=w,x(y)})},REVIVE_PLAYER:({count:c=1,roles:g=[]},h,y)=>{const x=h[i+"Team"],v=Object.entries(x).filter(([w])=>!g.length||g.includes(w)).flatMap(([w,_])=>_.filter(I=>I.used).map(I=>({...I,_line:w})));if(!v.length){h.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(h);return}ne(v,c,`Choisir ${c} joueur(s) à ressusciter`,w=>{w.forEach(_=>{const I=(x[_._line]||[]).find($=>$.cardId===_.cardId);I&&(I.used=!1,h.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),h[i+"Team"]=x,y(h)})},REMOVE_GOAL:({},c,g)=>{const h=a+"Score";c[h]>0?(c[h]--,c.log.push({text:"🚫 Dernier but annulé !",type:"info"})):c.log.push({text:"🚫 Aucun but à annuler",type:"info"}),g(c)},ADD_GOAL_DRAW:({},c,g)=>{c[i+"Score"]===c[a+"Score"]?(c[i+"Score"]++,c.log.push({text:"🎯 But bonus !",type:"info"})):c.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),g(c)},ADD_SUB:({value:c=1},g,h)=>{g.maxSubs=(g.maxSubs||3)+c,g.log.push({text:`🔄 +${c} remplacement(s)`,type:"info"}),h(g)},CUSTOM:({},c,g)=>g(c)};function ne(c,g,h,y){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var I,$;const _=c.map(L=>{const D={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[L._line]||"#555",U=be(L,L._line)+(L.boost||0),ce=v.find(H=>H.cardId===L.cardId)?"#FFD700":"rgba(255,255,255,0.25)",G=L.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${L.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ce};background:${D};overflow:hidden;cursor:pointer;${G}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${L.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${U}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${L._line}</div>
        </div>`}).join("");x.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${h}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v.length}/${g}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${_}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${v.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${v.length}/${g})
          </button>
        </div>`,(I=x.querySelector("#pp-close"))==null||I.addEventListener("click",()=>x.remove()),x.querySelectorAll(".pp-item").forEach(L=>{L.addEventListener("click",()=>{const D=L.dataset.cid,U=c.find(ce=>ce.cardId===D),re=v.findIndex(ce=>ce.cardId===D);U&&(re>-1?v.splice(re,1):v.length<g&&v.push(U),w())})}),($=x.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{x.remove(),y(v)})}w(),document.body.appendChild(x)}async function S(c,g){const y=(o["gcCardsFull_"+i]||[]).find(_=>_.id===c),x=(y==null?void 0:y._gcDef)||(o.gcDefs||[]).find(_=>{var I;return _.name===g||((I=_.name)==null?void 0:I.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),v=[...o["usedGc_"+i]||[],c],w={type:g,by:i,seq:(o._gcAnimSeq||0)+1};O.add(w.seq),me(g,i,async()=>{if(x!=null&&x.effect_type&&x.effect_type!=="CUSTOM"){const I=se[x.effect_type];if(I){const $={...o};I(x.effect_params||{},$,async L=>{L["usedGc_"+i]=v,L._lastGC=w,L._gcAnimSeq=w.seq,await q(L)});return}}const _={...o};switch(g){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=a+"Score";_[I]>0&&(_[I]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+i]=v,_._lastGC=w,_._gcAnimSeq=w.seq,await q(_)})}function K(c,g){const h="usedCardIds_"+c,y=new Set(o[h]||[]);g.forEach(x=>y.add(x)),o[h]=[...y]}function te(){for(const c of["p1","p2"]){const g=new Set(o["usedCardIds_"+c]||[]),h=o[c+"Team"];if(h)for(const y of["GK","DEF","MIL","ATT"])(h[y]||[]).forEach(x=>{x.used=g.has(x.cardId)})}}function F(){var Oe,ft,gt,mt,xt,yt;if(o.phase==="reveal")return Q();if(o.phase==="midfield")return ae();if(o.phase==="finished")return Ke();const c=o[i+"Team"],g=o[a+"Team"];te();const h=o[i+"Score"],y=o[a+"Score"],x=o[i+"Name"],v=o[a+"Name"],w=o.phase===i+"-attack",_=o.phase===i+"-defense",I=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],$=I.map(T=>T.cardId),L=window.innerWidth>=700,D=o[i+"Subs"]||[],U=o["usedSubIds_"+i]||[],re=D.filter(T=>!U.includes(T.cardId)),ce=o["gcCardsFull_"+i]||[],G=o["usedGc_"+i]||[],H=ce.filter(T=>!G.includes(T.id)),J=o.boostOwner===i&&!o.boostUsed,oe=!["GK","DEF","MIL","ATT"].some(T=>(g[T]||[]).some(Y=>!Y.used)),de=[...c.MIL||[],...c.ATT||[]].filter(T=>!T.used),fe=w&&oe&&de.length===0?[...c.GK||[],...c.DEF||[]].filter(T=>!T.used).map(T=>T.cardId):[];function le(T,Y,pe){var wt,$t;const ee=T._gcDef,He={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ee==null?void 0:ee.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ye={purple:"#b06ce0",light_blue:"#00d4ef"}[ee==null?void 0:ee.color]||"#b06ce0",Xe=(ee==null?void 0:ee.name)||T.gc_type,Je=(ee==null?void 0:ee.effect)||((wt=Be[T.gc_type])==null?void 0:wt.desc)||"",ht=ee!=null&&ee.image_url?`/manager-wars/icons/${ee.image_url}`:null,Ut=(($t=Be[T.gc_type])==null?void 0:$t.icon)||"⚡",bt=Math.round(pe*.22),vt=Math.round(pe*.22),ot=pe-bt-vt,Kt=Xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${T.id}" data-gc-type="${T.gc_type}"
        style="box-sizing:border-box;width:${Y}px;height:${pe}px;border-radius:10px;border:2px solid ${Ye};background:${He};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${bt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Kt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Y-6}px">${Xe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${ot}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ht?`<img src="${ht}" style="max-width:${Y-10}px;max-height:${ot-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(ot*.55)}px">${Ut}</span>`}
        </div>
        <div style="height:${vt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Je.slice(0,38)}</span>
        </div>
      </div>`}function ye(T,Y){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${T}px;height:${Y}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Y*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(Y*.2)}px">⚡</div>
        <div style="font-size:${Math.round(Y*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const Ee=(T,Y)=>Y?ye(130,175):le(T,130,175),Ne=(T,Y)=>Y?ye(68,95):le(T,68,95),Ce=L?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",je=w?we(i)?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ce};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,$e=w&&!we(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Fe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${L?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${re.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':re.map(T=>`<div class="pvp-sub-btn" data-sub-id="${T.cardId}" style="cursor:pointer;flex-shrink:0">${Ue(T,L?76:44,L?100:58)}</div>`).join("")}
    </div>`,Me=w?"attack":_?"defense":"idle",Pe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${st(c,o[i+"Formation"],Me,$,300,300,fe)}
      </div>
    </div>`;function qe(T){if(T.type==="duel"&&(T.homeTotal!=null||T.aiTotal!=null)){const Y=(T.homeTotal||0)>=(T.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(T.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(T.homePlayers||[]).map(pe=>tt(pe)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${Y?20:14}px;font-weight:900;color:${Y?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${T.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${Y?14:20}px;font-weight:900;color:${Y?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${T.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(T.aiPlayers||[]).map(pe=>tt(pe)).join("")}
            </div>
          </div>
          ${T.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${T.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${T.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${T.type==="goal"?700:400};padding:3px 2px">${T.text||""}</div>`}const Ve=(()=>{var Y,pe;if(_&&((Y=o.pendingAttack)!=null&&Y.players)){const ee=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${et((ee.players||[]).map(He=>({...He,used:!1})),"#ff6b6b",ee.total)}
        </div>`}if(w&&((pe=o.pendingAttack)!=null&&pe.players)){const ee=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${et((ee.players||[]).map(He=>({...He,used:!1})),"#00ff88",ee.total)}
        </div>`}const T=(o.log||[]).slice(-1)[0];return T?'<div style="padding:2px 4px">'+qe(T)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ge=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${h} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ve}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(o.log||[]).length})
      </button>`;We(e),e.style.overflow="hidden",L?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ge}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Fe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Pe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${je}${$e}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${H.map(T=>Ee(T,!1)).join("")}
            ${J?Ee(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ge}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${st(c,o[i+"Formation"],Me,$,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${H.map(T=>Ne(T,!1)).join("")}
            ${J?Ne(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&re.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&re.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&re.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&re.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${re.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(o["usedSubIds_"+i]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(o["usedSubIds_"+i]||[]).length}/${o.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${je}${$e}</div>
        </div>
      </div>`;function Te(){const T=e.querySelector(".match-screen");if(!T)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);T.style.height=Y+"px",T.style.minHeight=Y+"px",T.style.maxHeight=Y+"px",T.style.overflow="hidden";const pe=e.querySelector("#mobile-action-bar"),ee=e.querySelector("#mobile-play-area");pe&&ee&&(ee.style.paddingBottom=pe.offsetHeight+"px")}if(Te(),setTimeout(Te,120),setTimeout(Te,400),M||(M=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Te),window.visualViewport.addEventListener("scroll",Te)),window.addEventListener("resize",Te)),function(){const Y=e.querySelector(".terrain-wrapper svg");Y&&(Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("viewBox","-26 -26 352 352"),Y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(T=>{T.addEventListener("click",()=>{if(!w&&!_)return;const Y=T.dataset.cardId,pe=T.dataset.role,ee=(c[pe]||[]).find(Je=>Je.cardId===Y);if(!ee||ee.used)return;const He=fe.includes(Y);if(w&&!["MIL","ATT"].includes(pe)&&!He)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const Ye=o["selected_"+i],Xe=Ye.findIndex(Je=>Je.cardId===Y);Xe>-1?Ye.splice(Xe,1):Ye.length<3&&Ye.push({...ee,_role:pe}),F()})}),e.querySelectorAll(".match-used-hit").forEach(T=>{T.addEventListener("click",()=>R(T.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(T=>{T.addEventListener("click",()=>R())}),(Oe=e.querySelector("#pvp-sub-open"))==null||Oe.addEventListener("click",()=>R()),e.querySelectorAll(".pvp-gc-mini").forEach(T=>{T.addEventListener("click",()=>xe(T.dataset.gcId,T.dataset.gcType))}),(ft=e.querySelector("#pvp-boost-card"))==null||ft.addEventListener("click",()=>N()),(gt=e.querySelector("#pvp-action"))==null||gt.addEventListener("click",T=>{w?T.currentTarget.dataset.pass==="1"||!we(i)?ue():ie():_&&Ae()}),(mt=e.querySelector("#pvp-quit"))==null||mt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Z()}),(xt=e.querySelector("#pvp-view-opp"))==null||xt.addEventListener("click",()=>P()),(yt=e.querySelector("#pvp-toggle-history"))==null||yt.addEventListener("click",()=>X()),z&&(clearInterval(z),z=null),(w||_)&&!k){let T=30,Y=!1;const pe=()=>document.getElementById("pvp-timer"),ee=()=>{pe()&&(pe().textContent=T+"s",pe().style.color=Y?"#ff4444":"#fff")};ee(),z=setInterval(()=>{T--,T<0?Y?(clearInterval(z),z=null,w&&!we(i)?ue():Z()):(Y=!0,T=15,ee()):ee()},1e3)}}function Q(){We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[a+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${at(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await q({phase:"midfield"})},5e3)}let V=!1;function ae(){if(V)return;const c=o[i+"Team"].MIL||[],g=o[a+"Team"].MIL||[];function h(H){return H.reduce((J,oe)=>J+be(oe,"MIL"),0)}function y(H){let J=0;for(let oe=0;oe<H.length-1;oe++){const de=Qe(H[oe],H[oe+1]);de==="#00ff88"?J+=2:de==="#FFD700"&&(J+=1)}return J}const x=h(c)+y(c),v=h(g)+y(g),w=x>=v;function _(H,J,oe){return`<div id="duel-row-${oe}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${J}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${H.map((de,fe)=>{const le=fe<H.length-1?Qe(de,H[fe+1]):null,ye=!le||le==="#ff3333"||le==="#cc2222",Ee=le==="#00ff88"?"+2":le==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${oe}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ue({...de,note:be(de,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<H.length-1?`<div class="duel-link duel-link-${oe}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":le};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${le}`}">
              ${Ee?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${le}">${Ee}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${oe}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${h(H)} + ${y(H)} liens = <b style="color:#fff">${h(H)+y(H)}</b>
        </div>
      </div>`}We(e),e.innerHTML=`
    <div class="match-screen" style="position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
      <style>
        @keyframes duelPulse{0%{transform:scale(1)}50%{transform:scale(1.18)}100%{transform:scale(1)}}
        @keyframes duelGlow{0%,100%{text-shadow:0 0 12px rgba(255,215,0,.6)}50%{text-shadow:0 0 28px rgba(255,215,0,.95)}}
        @keyframes vsFlash{0%{opacity:0;transform:scale(2)}60%{opacity:1;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}
        @keyframes winnerSlam{0%{transform:scale(1)}35%{transform:translateY(-14px) scale(1.05)}70%{transform:translateY(10px) scale(1.12,.92)}100%{transform:translateY(0) scale(1)}}
        @keyframes crushSquash{0%{transform:scaleY(1);opacity:1}55%{transform:scaleY(.1) translateY(8px);opacity:.5}100%{transform:scaleY(0);opacity:0}}
        @keyframes shockwave{0%{transform:translateX(-50%) scale(.2);opacity:.9}100%{transform:translateX(-50%) scale(2.4);opacity:0}}
        @keyframes boostFlipIn{0%{transform:perspective(600px) rotateY(90deg) scale(.6);opacity:0}60%{transform:perspective(600px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(600px) rotateY(0) scale(1);opacity:1}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="text-align:center;color:#fff">
        <div style="font-size:11px;opacity:.5;letter-spacing:3px;text-transform:uppercase">Duel du milieu de terrain</div>
      </div>
      ${_(c,o[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_(g,o[a+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const I=(H,J)=>e.querySelectorAll(H).forEach((oe,de)=>{setTimeout(()=>{oe.style.opacity="1",oe.style.transform="translateY(0) scale(1)"},J+de*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((H,J)=>setTimeout(()=>{H.style.opacity="1"},J*70)),900),setTimeout(()=>{const H=e.querySelector("#pvp-vs");H&&(H.style.opacity="1",H.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(J=>J.style.opacity="1")},1250);function $(H,J,oe){const de=document.getElementById(H);if(!de)return;const fe=performance.now(),le=ye=>{const Ee=Math.min(1,(ye-fe)/oe);de.textContent=Math.round(J*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(le):de.textContent=J};requestAnimationFrame(le)}setTimeout(()=>{$("pvp-score-me",x,800),$("pvp-score-opp",v,800)},1500);const L=o.p1Team.MIL||[],D=o.p2Team.MIL||[],U=h(L)+y(L),re=h(D)+y(D),ce=U>=re?"p1":"p2";let G=o.boostValue;G==null&&(G=ri(),o.boostValue=G,o.boostOwner=ce,o.boostUsed=!1),V=!0,setTimeout(()=>{const H=e.querySelector("#duel-row-"+(w?"me":"opp")),J=e.querySelector("#duel-row-"+(w?"opp":"me")),oe=document.getElementById("pvp-score-me"),de=document.getElementById("pvp-score-opp"),fe=w?oe:de,le=w?de:oe;fe&&(fe.style.fontSize="80px",fe.style.color=w?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),le&&(le.style.opacity="0.25"),setTimeout(()=>{H&&(H.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",H.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),J&&(J.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const Ee=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+G+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ne=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[a+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+Ne,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const je=ce;await q({phase:je+"-attack",attacker:je,round:1,boostValue:G,boostUsed:!1,boostOwner:je})})},600)},700)},2800)}function ge(c,g,h,y,x){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(L,D)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${D%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][D%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${w}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${y?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${g} – ${h}
      </div>
      ${c!=null&&c.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${c.map(L=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[L.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${L.portrait?`<img src="${L.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(L.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let I=!1;const $=()=>{I||(I=!0,v.remove(),setTimeout(()=>x(),50))};v.addEventListener("click",$),setTimeout($,3500)}function me(c,g,h){var G,H;const y=(o.gcDefs||[]).find(J=>{var oe;return J.name===c||((oe=J.name)==null?void 0:oe.toLowerCase().trim())===(c==null?void 0:c.toLowerCase().trim())}),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",w=(y==null?void 0:y.name)||c,_=(y==null?void 0:y.effect)||((G=Be[c])==null?void 0:G.desc)||"",I=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,$=((H=Be[c])==null?void 0:H.icon)||"⚡",D=g===i?"Vous":o[g+"Name"]||"Adversaire",U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",U.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${D} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${x};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${I?`<img src="${I}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${$}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${_}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(U);let re=!1;const ce=()=>{re||(re=!0,U.remove(),setTimeout(()=>h&&h(),50))};U.addEventListener("click",ce),setTimeout(ce,3e3)}function xe(c,g){var U,re,ce,G;const y=(o["gcCardsFull_"+i]||[]).find(H=>H.id===c),x=y==null?void 0:y._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",_=(x==null?void 0:x.name)||g,I=(x==null?void 0:x.effect)||((U=Be[g])==null?void 0:U.desc)||"Carte spéciale.",$=x!=null&&x.image_url?`/manager-wars/icons/${x.image_url}`:null,L=((re=Be[g])==null?void 0:re.icon)||"⚡",D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",D.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${L}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${I}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(D),(ce=D.querySelector("#pvp-gc-back"))==null||ce.addEventListener("click",()=>D.remove()),(G=D.querySelector("#pvp-gc-use"))==null||G.addEventListener("click",()=>{D.remove(),S(c,g)})}function N(){var y;const c=o[i+"Team"],g=Object.entries(c).flatMap(([x,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:x})));if(!g.length)return;const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",h.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${g.map(x=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x._line]||"#555",w=be(x,x._line)+(x.boost||0);return`<div class="bp-item" data-cid="${x.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(h),(y=h.querySelector("#bp-close"))==null||y.addEventListener("click",()=>h.remove()),h.querySelectorAll(".bp-item").forEach(x=>{x.addEventListener("click",async()=>{const v=x.dataset.cid,w=g.find(I=>I.cardId===v);if(!w)return;const _=(c[w._line]||[]).find(I=>I.cardId===v);_&&(_.boost=(_.boost||0)+o.boostValue),h.remove(),await q({[i+"Team"]:c,boostUsed:!0})})})}function R(c=null){var re,ce;if(!(o.phase===i+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const h=o[i+"Team"],y=o["usedSubIds_"+i]||[],x=o.maxSubs||3;if(y.length>=x){p(`Maximum ${x} remplacements atteint`,"warning");return}const v=Object.entries(h).flatMap(([G,H])=>(H||[]).filter(J=>J.used).map(J=>({...J,_line:G}))),w=(o[i+"Subs"]||[]).filter(G=>!y.includes(G.cardId));if(!v.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){p("Aucun remplaçant disponible","warning");return}let _=Math.max(0,v.findIndex(G=>G.cardId===c));const I=((re=v[_])==null?void 0:re._line)||((ce=v[_])==null?void 0:ce.job);let $=Math.max(0,w.findIndex(G=>G.job===I)),L=!1;const D=document.createElement("div");D.id="pvp-sub-overlay",D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function U(){var le,ye,Ee,Ne,Ce,je;const G=v[_],H=w[$],J=Math.min(130,Math.round((window.innerWidth-90)/2)),oe=Math.round(J*1.35),de=$e=>`background:rgba(255,255,255,0.12);border:none;color:${$e?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${$e?"default":"pointer"};flex-shrink:0`;D.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${x})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${de($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${H?Ue({...H,used:!1,boost:0},J,oe):"<div>—</div>"}</div>
          <button id="pin-down" style="${de($>=w.length-1)}" ${$>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${de(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${G?Ue({...G,used:!1,boost:0},J,oe):"<div>—</div>"}</div>
          <button id="pout-down" style="${de(_>=v.length-1)}" ${_>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(le=D.querySelector("#psub-close"))==null||le.addEventListener("click",()=>D.remove()),(ye=D.querySelector("#pout-up"))==null||ye.addEventListener("click",()=>{_>0&&(_--,U())}),(Ee=D.querySelector("#pout-down"))==null||Ee.addEventListener("click",()=>{_<v.length-1&&(_++,U())}),(Ne=D.querySelector("#pin-up"))==null||Ne.addEventListener("click",()=>{$>0&&($--,U())}),(Ce=D.querySelector("#pin-down"))==null||Ce.addEventListener("click",()=>{$<w.length-1&&($++,U())});const fe=($e,Fe,Me,Pe)=>{const qe=D.querySelector("#"+$e);if(!qe)return;let Ve=0;qe.addEventListener("touchstart",Ge=>{Ve=Ge.touches[0].clientY},{passive:!0}),qe.addEventListener("touchend",Ge=>{const Te=Ge.changedTouches[0].clientY-Ve;if(Math.abs(Te)<30)return;const Oe=Fe();Te<0&&Oe<Pe-1?(Me(Oe+1),U()):Te>0&&Oe>0&&(Me(Oe-1),U())},{passive:!0})};fe("pin-panel",()=>$,$e=>$=$e,w.length),fe("pout-panel",()=>_,$e=>_=$e,v.length),(je=D.querySelector("#psub-confirm"))==null||je.addEventListener("click",async $e=>{if($e.preventDefault(),$e.stopPropagation(),L)return;L=!0;const Fe=v[_],Me=w[$];if(!Fe||!Me)return;const Pe=Fe._line,qe=(h[Pe]||[]).findIndex(Te=>Te.cardId===Fe.cardId);if(qe===-1){p("Erreur : joueur introuvable","error"),D.remove();return}const Ve={...Me,_line:Pe,position:Fe.position,used:!1,boost:0};h[Pe].splice(qe,1,Ve);const Ge=[...y,Me.cardId];D.remove(),W(Fe,Me,async()=>{await q({[i+"Team"]:h,[a+"Team"]:o[a+"Team"],["usedSubIds_"+i]:Ge})})})}document.body.appendChild(D),U()}function W(c,g,h){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(I,$,L)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${L}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[I.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Ie(I)?`<img src="${Ie(I)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(I.name||"").slice(0,12)}</div>
    </div>`;x.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v(g,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(c,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(x);let w=!1;const _=()=>{w||(w=!0,x.remove(),setTimeout(()=>h(),50))};x.addEventListener("click",_),setTimeout(_,2200)}function P(){var g;const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",c.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[a+"Name"]}</div>
      <div style="width:min(90vw,420px)">${at(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(c),(g=c.querySelector("#pvp-opp-close"))==null||g.addEventListener("click",()=>c.remove())}function X(){var h;const c=o.log||[],g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",g.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${c.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...c].reverse().map(y=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${y.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(g),(h=g.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>g.remove())}async function ue(){if(o.phase!==i+"-attack")return;const c=i==="p1"?"p2":"p1",g=(o.round||0)+1,h=[...o.log||[]];h.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=Le(o),x=we(c),v=y||!x?"finished":c+"-attack";await q({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:v,attacker:c,round:g,log:h}),v==="finished"&&await Se(o)}async function ie(){const c=o[i+"Team"],g=!["GK","DEF","MIL","ATT"].some(v=>(o[a+"Team"][v]||[]).some(w=>!w.used)),h=(o["selected_"+i]||[]).map(v=>{const w=(c[v._role]||[]).find(U=>U.cardId===v.cardId)||v,_=g&&["GK","DEF"].includes(v._role),I=c[v._role]||[],$=I.findIndex(U=>U.cardId===v.cardId),L=it(I.length),D=$>=0?L[$]:w._col??1;return{...w,_line:v._role,_col:D,..._?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!h.length)return;const y=Rt(h,o.modifiers[i]||{});K(i,h.map(v=>v.cardId)),h.forEach(v=>{const w=(c[v._role]||[]).find(_=>_.cardId===v.cardId);w&&(w.used=!0)}),o["selected_"+i]=[],F();const x=[...o.log||[]];if(g){const v=(o[i+"Score"]||0)+1,w=h.map(D=>({name:D.name,note:be(D,D._line||"ATT"),portrait:Ie(D),job:D.job}));x.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:y.total,aiTotal:0});const _=(o.round||0)+1,I=i==="p1"?"p2":"p1",$={...o,[i+"Team"]:c,[i+"Score"]:v},L=Le($);B.add(_),ge(w,v,o[a+"Score"]||0,!0,async()=>{await q({[i+"Team"]:c,[i+"Score"]:v,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:L?"finished":I+"-attack",attacker:I,round:_,log:x}),L&&await Se({...o,[i+"Score"]:v})});return}x.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${y.total})`}),await q({[i+"Team"]:c,[a+"Team"]:o[a+"Team"],pendingAttack:{...y,players:h,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:a+"-defense",log:x})}async function Ae(){const c=o[i+"Team"],g=(o["selected_"+i]||[]).map(G=>{const H=(c[G._role]||[]).find(le=>le.cardId===G.cardId)||G,J=c[G._role]||[],oe=J.findIndex(le=>le.cardId===G.cardId),de=it(J.length),fe=oe>=0?de[oe]:H._col??1;return{...H,_line:G._role,_col:fe}}),h=Nt(g,o.modifiers[i]||{});K(i,g.map(G=>G.cardId)),g.forEach(G=>{const H=(c[G._role]||[]).find(J=>J.cardId===G.cardId);H&&(H.used=!0)}),o["selected_"+i]=[],F();const y=Pt(o.pendingAttack.total,h.total,o.modifiers[i]||{}),x=o.pendingAttack.side,v=y==="attack"||(y==null?void 0:y.goal),w=x==="p1"?"p2":"p1",_=(o.round||0)+1,I=(o.pendingAttack.players||[]).map(G=>({name:G.name,note:be(G,G._line||"ATT"),portrait:Ie(G),job:G.job})),$=[...o.log||[]];$.push({type:"duel",isGoal:v,homeScored:v&&x===i,text:v?`⚽ BUT de ${o[x+"Name"]} ! (${o.pendingAttack.total} vs ${h.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${h.total})`,homePlayers:I,aiPlayers:g.map(G=>({name:G.name,note:be(G,G._line||"DEF"),portrait:Ie(G),job:G.job})),homeTotal:o.pendingAttack.total,aiTotal:h.total});const L=v?(o[x+"Score"]||0)+1:o[x+"Score"]||0,D={...o,[i+"Team"]:c,[x+"Score"]:L},U=Le(D),re=U?"finished":w+"-attack",ce=async()=>{await q({[i+"Team"]:c,[a+"Team"]:o[a+"Team"],[x+"Score"]:L,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:re,attacker:w,round:_,log:$}),(re==="finished"||U)&&await Se({...o,[x+"Score"]:L})};if(v){const G=x===i,H=G?L:o[i+"Score"]||0,J=G?o[a+"Score"]||0:L;B.add(_),ge(I,H,J,G,ce)}else await ce()}function ke(c){return["MIL","ATT"].some(g=>(c[g]||[]).some(h=>!h.used))}function ve(c){return["GK","DEF","MIL","ATT"].some(g=>(c[g]||[]).some(h=>!h.used))}function _e(c){return ve(c)&&!ke(c)}function we(c){const g=o[c+"Team"],h=o[(c==="p1"?"p2":"p1")+"Team"];return!!(ke(g)||!ve(h)&&_e(g))}function Le(c){const g=["MIL","ATT"].some($=>(c.p1Team[$]||[]).some(L=>!L.used)),h=["MIL","ATT"].some($=>(c.p2Team[$]||[]).some(L=>!L.used)),y=ve(c.p1Team),x=ve(c.p2Team);return!g&&!(!x&&y)&&(!h&&!(!y&&x))}function Re(c){const g=c.p1Score||0,h=c.p2Score||0;return g===h?null:g>h?b.home_id:b.away_id}async function Se(c){try{await A.from("matches").update({status:"finished",winner_id:Re(c),home_score:c.p1Score||0,away_score:c.p2Score||0}).eq("id",n)}catch(g){console.error("[PvP] finishMatch:",g)}}function Ke(){var x;const c=o[i+"Score"],g=o[a+"Score"],h=c>g,y=c===g;We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${h?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${h?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${c} - ${g}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(x=document.getElementById("pvp-home"))==null||x.addEventListener("click",()=>{try{A.removeChannel(C)}catch{}De(e),l("home")})}F()}const Lt="#1A6B3C",zt="#cc2222",ao="#D4A017",yi="#888";async function so(e,t){const{state:n,toast:r}=t;e.innerHTML=`
    <div style="padding:16px;max-width:640px;margin:0 auto">
      <h2 style="font-size:20px;font-weight:900;margin-bottom:16px">👥 Amis</h2>

      <!-- Actions -->
      <div style="display:flex;gap:10px;margin-bottom:20px">
        <button id="btn-add-friend" class="btn btn-primary" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px">
          ➕ Ajouter un ami
        </button>
        <button id="btn-accept-friend" class="btn" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;background:#fff;border:1.5px solid var(--green,#1A6B3C);color:var(--green,#1A6B3C);font-weight:700">
          ✅ Accepter un ami
          <span id="pending-badge" style="display:none;background:#cc2222;color:#fff;border-radius:50%;width:18px;height:18px;font-size:11px;font-weight:900;display:flex;align-items:center;justify-content:center"></span>
        </button>
      </div>

      <!-- Liste amis -->
      <div id="friends-list">
        <div style="text-align:center;color:#aaa;padding:32px">Chargement…</div>
      </div>
    </div>`,await Ci(n,r,t),document.getElementById("btn-add-friend").addEventListener("click",()=>co(n,r)),document.getElementById("btn-accept-friend").addEventListener("click",()=>ji(n,r))}async function Ci(e,t,n={}){const r=e.user.id,{data:u,error:s}=await A.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${r},addressee_id.eq.${r}`),{count:d}=await A.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",r).eq("status","pending"),l=document.getElementById("pending-badge");l&&(d>0?(l.style.display="flex",l.textContent=d):l.style.display="none");const p=document.getElementById("friends-list");if(!p)return;if(s){console.error("[Friends] Erreur:",s),p.innerHTML=`<div style="color:${zt};text-align:center;padding:16px">Erreur chargement : ${s.message}</div>`;return}const i=(u||[]).map(m=>m.requester_id===r?m.addressee_id:m.requester_id);let a={};if(i.length){const{data:m}=await A.from("users").select("id, pseudo, club_name, last_seen_at").in("id",i);(m||[]).forEach(b=>{a[b.id]=b})}const f=(u||[]).map(m=>({friendshipId:m.id,friend:a[m.requester_id===r?m.addressee_id:m.requester_id]||{pseudo:"?"}}));if(!f.length){p.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}p.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${f.length} ami${f.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${f.map(({friendshipId:m,friend:b})=>lo(b,m)).join("")}
    </div>`,p.querySelectorAll("[data-stats]").forEach(m=>{m.addEventListener("click",()=>po(e,m.dataset.stats,m.dataset.friendName))}),p.querySelectorAll("[data-match]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.friendId,E=document.getElementById("page-content")||document.getElementById("app");Si(E,n,b,null)})})}function lo(e,t){const n=e.club_name||e.pseudo||"?",r=(e.pseudo||"?").slice(0,2).toUpperCase(),u=e.last_seen_at?new Date(e.last_seen_at):null,s=u&&Date.now()-u.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <!-- Avatar + point de présence -->
      <div style="position:relative;width:42px;height:42px;flex-shrink:0">
        <div style="width:42px;height:42px;border-radius:50%;background:${Lt};display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#fff">
          ${r}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${s?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px;flex-shrink:0"></div>`}
      </div>
      <!-- Infos -->
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
        <div style="font-size:11px;color:${s?"#22c55e":"#999"};font-weight:600">${s?"En ligne":"Hors ligne"}</div>
      </div>
      <!-- Boutons -->
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${n}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid ${ao};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function co(e,t){const n=di();n.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${zt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${li()}`,document.body.appendChild(n);const r=n.querySelector("#friend-pseudo-input"),u=n.querySelector("#add-friend-error"),s=()=>n.remove();r.focus(),n.querySelector("#add-cancel").addEventListener("click",s),n.addEventListener("click",d=>{d.target===n&&s()}),n.querySelector("#add-ok").addEventListener("click",async()=>{const d=r.value.trim();if(!d){u.textContent="Entre un pseudo";return}u.textContent="";const{data:l}=await A.from("users").select("id, pseudo").ilike("pseudo",d).single();if(!l){u.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){u.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:p}=await A.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(p){const a=p.status==="accepted"?"Vous êtes déjà amis !":p.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";u.textContent=a;return}const{error:i}=await A.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(i){u.textContent="Erreur : "+i.message;return}s(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function ji(e,t,n=null){const r=e.user.id,{data:u}=await A.from("friendships").select("id, requester_id").eq("addressee_id",r).eq("status","pending").order("created_at",{ascending:!1}),s=(u||[]).map(f=>f.requester_id);let d={};if(s.length){const{data:f}=await A.from("users").select("id, pseudo, club_name").in("id",s);(f||[]).forEach(m=>{d[m.id]=m})}const l=(u||[]).map(f=>({...f,requester:d[f.requester_id]||{pseudo:"?"}})),p=di(),i=l||[];p.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${i.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${i.map(f=>{var m,b,E;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((m=f.requester)==null?void 0:m.club_name)||((b=f.requester)==null?void 0:b.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((E=f.requester)==null?void 0:E.pseudo)||""})</span>
                </div>
                <button data-accept="${f.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Lt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${f.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${zt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${li()}`,document.body.appendChild(p);const a=()=>p.remove();p.querySelector("#pending-close").addEventListener("click",a),p.addEventListener("click",f=>{f.target===p&&a()}),p.querySelectorAll("[data-accept]").forEach(f=>{f.addEventListener("click",async()=>{const{error:m}=await A.from("friendships").update({status:"accepted"}).eq("id",f.dataset.accept);if(m){t("Erreur : "+m.message,"error");return}f.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Ci(e),n&&n()})}),p.querySelectorAll("[data-decline]").forEach(f=>{f.addEventListener("click",async()=>{await A.from("friendships").delete().eq("id",f.dataset.decline),f.closest("div[style]").remove(),t("Demande refusée","info"),n&&n()})})}async function po(e,t,n){const r=e.user.id,[u,s]=[r,t].sort(),d=r===u,{data:l}=await A.from("friend_match_stats").select("*").eq("player1_id",u).eq("player2_id",s).single(),p=e.profile.club_name||e.profile.pseudo||"Moi",i=l||{},a=d?i.wins_p1||0:i.wins_p2||0,f=d?i.wins_p2||0:i.wins_p1||0,m=i.draws||0,b=d?i.goals_p1||0:i.goals_p2||0,E=d?i.goals_p2||0:i.goals_p1||0,o=d?i.gc_used_p1||0:i.gc_used_p2||0,k=d?i.gc_used_p2||0:i.gc_used_p1||0,z=i.matches_total||0,M=(O,j,C,q=Lt,Z=zt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${q}">${j}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${O}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${Z}">${C}</div>
    </div>`,B=di();B.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${n}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
      </div>
      ${z===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${M("Victoires",a,f)}
        ${M("Nuls",m,m,yi,yi)}
        ${M("Défaites",f,a)}
        ${M("Buts marqués",b,E)}
        ${M("Buts encaissés",E,b,zt,Lt)}
        ${M("GC utilisés ⚡",o,k,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${z} match${z>1?"s":""} joué${z>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${li()}`,document.body.appendChild(B),B.querySelector("#stats-close").addEventListener("click",()=>B.remove()),B.addEventListener("click",O=>{O.target===B&&B.remove()})}function di(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function li(){return`
    <style>
      .popup-box {
        background:#fff;border-radius:18px;padding:24px;
        width:100%;max-width:420px;
        box-shadow:0 8px 40px rgba(0,0,0,0.25);
        max-height:85vh;overflow-y:auto;
      }
      .popup-title {
        font-size:18px;font-weight:900;margin-bottom:14px;
      }
      .popup-btn-ok {
        flex:1;padding:12px;border-radius:10px;border:none;
        background:${Lt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const uo="2026.06.27-1633";async function hi(e,{state:t,navigate:n,toast:r}){var s,d;const u=t.profile;u&&(e.innerHTML=`
  <div class="page">
    <div class="page-body">

      <!-- Demandes d'amis en attente (injecté dynamiquement) -->
      <div id="friend-requests-banner"></div>
      <!-- Invitation match ami en attente -->
      <div id="friend-lobby-banner"></div>

      <!-- Bandeau pseudo (couleurs du club) -->
      <div class="hero hero-compact" style="background:${u.club_color1};border:2px solid ${u.club_color2}">
        <button class="nav-rankings-btn" id="nav-rankings" title="Classement">
          <img src="/manager-wars/icons/badge-trophy.png" alt="Classement">
        </button>
        <div class="info">
          <h3 style="margin:0">${u.pseudo}</h3>
          <div class="level">Niveau ${u.level} · ${u.club_name}</div>
        </div>
        <button class="nav-rankings-btn" id="nav-matches" title="Mes matchs" style="margin-left:auto">
          <img src="/manager-wars/icons/badge-ball.png" alt="Matchs" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'⚽',style:'font-size:22px'}))">
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

            <!-- Logout -->
      <div style="text-align:center;padding:12px 0;display:flex;flex-direction:column;gap:8px;align-items:center">
        <button class="btn btn-ghost btn-sm" id="logout-btn" style="color:var(--gray-600)">Déconnexion</button>
        ${u.is_admin?`
        <a href="/manager-wars/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:6px 16px;border-radius:8px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${uo}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",p=>{p.preventDefault(),n(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>n("rankings")),(d=document.getElementById("nav-matches"))==null||d.addEventListener("click",()=>n("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const p=l.dataset.action;if(p==="match-ai"){go(n);return}if(p==="match-random"){n("match",{matchMode:"random"});return}if(p==="match-friend"){n("friends");return}r("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await A.auth.signOut(),window.location.reload()}),Fi(t,r),fo(t,r,n))}async function Fi(e,t){const n=document.getElementById("friend-requests-banner");if(!n)return;const{data:r,error:u}=await A.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(u||!(r!=null&&r.length)){n.innerHTML="";return}const s=r.length,d=r.slice(0,2).map(p=>{var i;return((i=p.requester)==null?void 0:i.pseudo)||"?"}).join(", "),l=s>2?` +${s-2}`:"";n.innerHTML=`
    <div id="friend-req-btn" style="
      display:flex;align-items:center;gap:10px;
      background:linear-gradient(135deg,#1A6B3C,#2a9d5c);
      color:#fff;border-radius:12px;padding:12px 16px;
      margin-bottom:10px;cursor:pointer;
      box-shadow:0 3px 12px rgba(26,107,60,0.35);
      animation:friendReqPulse 2.5s ease-in-out infinite;
    ">
      <style>
        @keyframes friendReqPulse {
          0%,100% { box-shadow:0 3px 12px rgba(26,107,60,0.35) }
          50% { box-shadow:0 3px 22px rgba(26,107,60,0.65) }
        }
      </style>
      <div style="background:rgba(255,255,255,0.25);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">
          ${s} demande${s>1?"s":""} d'ami${s>1?"s":""} en attente
        </div>
        <div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
          ${d}${l}
        </div>
      </div>
      <div style="font-size:20px;flex-shrink:0">›</div>
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{ji(e,t,()=>Fi(e,t))})}async function fo(e,t,n){var p,i;const r=document.getElementById("friend-lobby-banner");if(!r)return;const{data:u}=await A.from("friend_match_lobbies").select("id, inviter_id, created_at").eq("invitee_id",e.user.id).eq("status","waiting").order("created_at",{ascending:!1}).limit(1);if(!(u!=null&&u.length)){r.innerHTML="";return}const s=u[0],{data:d}=await A.from("users").select("pseudo, club_name").eq("id",s.inviter_id).single(),l=(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"Un ami";r.innerHTML=`
    <div id="friend-lobby-btn" style="
      display:flex;align-items:center;gap:10px;
      background:linear-gradient(135deg,#1a0a2e,#3d1a6e);
      color:#fff;border-radius:12px;padding:12px 16px;
      margin-bottom:10px;cursor:pointer;
      box-shadow:0 3px 14px rgba(100,50,200,0.45);
      animation:friendReqPulse 2s ease-in-out infinite;
    ">
      <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${l} t'invite à jouer !</div>
        <div style="font-size:11px;opacity:0.75">Rejoindre le salon d'attente</div>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <button id="lobby-accept" style="padding:8px 14px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-weight:900;font-size:13px;cursor:pointer">Rejoindre</button>
        <button id="lobby-decline" style="padding:8px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-size:13px;cursor:pointer">✕</button>
      </div>
    </div>`,(p=document.getElementById("lobby-accept"))==null||p.addEventListener("click",()=>{r.innerHTML="",n("match",{matchMode:"friend",friendId:s.inviter_id,lobbyId:s.id})}),(i=document.getElementById("lobby-decline"))==null||i.addEventListener("click",async()=>{await A.from("friend_match_lobbies").update({status:"cancelled"}).eq("id",s.id),r.innerHTML="",t("Invitation refusée","info")})}function go(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2000",n.innerHTML=`
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${t.map(u=>`
            <div class="action-card" data-mode="${u.mode}" style="cursor:pointer">
              <div class="icon">${u.icon}</div>
              <div class="label">${u.label}</div>
              <div class="sub">${u.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `,document.body.appendChild(n);const r=()=>n.remove();document.getElementById("diff-cancel").addEventListener("click",r),n.addEventListener("click",u=>{u.target===n&&r()}),n.querySelectorAll("[data-mode]").forEach(u=>{u.addEventListener("click",()=>{r(),e("match",{matchMode:u.dataset.mode})})})}const Bi={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},At={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ct=["GK","DEF","MIL","ATT"],mo=["Tous","GK","DEF","MIL","ATT"],xo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4},ci={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Di(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function Mt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Vt(e,t=""){var f,m;const n=e.player;if(!n)return"";const r=n.job||"ATT",u=At[r],s=Bi[n.rarity]||"#ccc",d=Mt(n,r),l=n.job2?Mt(n,n.job2):null,p=n.job2?At[n.job2]:null,i=Di(n),a=ci[n.country_code]||n.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${s};cursor:pointer;flex-shrink:0;position:relative
  " data-card-id="${e.id}">
    ${t}
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${n.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(n.surname_encoded||"").toUpperCase()}</div>
      </div>
      <!-- Zone étoiles : bandeau fixe + étoile principale dedans + petite étoile dessous -->
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <!-- Bandeau de couleur fixe (toujours au même endroit) -->
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${u}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${u}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${d}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${l!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${p}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${l}</text>
        </svg>`:""}
      </div>
      <!-- Portrait -->
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${i?`<img src="${i}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${n.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${a}</div>
        ${(f=n.clubs)!=null&&f.logo_url?`<img src="${n.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((m=n.clubs)==null?void 0:m.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function bi(e){const t=e.job||"ATT",n=Mt(e,t),r=ci[e.country_code]||e.country_code||"";return`
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
            fill="white" font-family="Arial Black,Arial">${n}</text>
        </svg>
      </div>
      <div style="height:106px;overflow:hidden;background:#ddd;display:flex;align-items:center;justify-content:center;font-size:36px;color:#aaa">👤</div>
      <div style="background:#e8e8e8;padding:3px 6px;display:flex;align-items:center;justify-content:center;min-height:26px">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${r}</div>
      </div>
    </div>
  </div>`}async function yo(e,t){const{state:n,navigate:r,toast:u,openModal:s,closeModal:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await A.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:p}=await A.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),i=(l||[]).filter(N=>N.card_type==="player"&&N.player),a=(l||[]).filter(N=>N.card_type==="game_changer"),f=(l||[]).filter(N=>N.card_type==="formation"),{data:m}=await A.from("gc_definitions").select("name,gc_type,color,effect,image_url"),b={};(m||[]).forEach(N=>{b[N.name]=N});const E=Object.keys(ni),o=Object.keys(Be),k={};i.forEach(N=>{const R=N.player.id;k[R]=(k[R]||0)+1}),new Set(Object.keys(k).map(N=>String(N)));const z=new Set(f.map(N=>N.formation)),M=new Set(a.map(N=>N.gc_type));let B="player",O="Tous",j="",C=!1;function q(){return[...i].sort((N,R)=>{const W=Ct.indexOf(N.player.job),P=Ct.indexOf(R.player.job);return W!==P?W-P:(N.player.surname_encoded||"").localeCompare(R.player.surname_encoded||"")})}function Z(){return[...p||[]].sort((N,R)=>{const W=Ct.indexOf(N.job),P=Ct.indexOf(R.job);return W!==P?W-P:(N.surname_encoded||"").localeCompare(R.surname_encoded||"")})}function se(){return q().filter(N=>{const R=N.player,W=O==="Tous"||R.job===O,P=!j||`${R.firstname} ${R.surname_encoded}`.toLowerCase().includes(j);return W&&P})}function ne(){return Z().filter(N=>{const R=O==="Tous"||N.job===O,W=!j||`${N.firstname} ${N.surname_encoded}`.toLowerCase().includes(j);return R&&W})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="player"?"var(--green)":"transparent"};
        color:${B==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${i.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="formation"?"var(--green)":"transparent"};
        color:${B==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${f.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="gc"?"var(--green)":"transparent"};
        color:${B==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${a.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function S(){const N=document.getElementById("col-filters");N&&(B==="player"?(N.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${j}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${mo.map(R=>`
            <button class="filter-btn" data-job="${R}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${R===O?"var(--green)":"var(--gray-200)"};
                background:${R===O?"var(--green)":"#fff"};
                color:${R===O?"#fff":"var(--gray-600)"}">
              ${R}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${C?"var(--yellow)":"var(--gray-200)"};
              background:${C?"var(--yellow)":"#fff"};
              color:${C?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${C?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",R=>{j=R.target.value.toLowerCase(),K()}),e.querySelectorAll(".filter-btn").forEach(R=>{R.addEventListener("click",()=>{O=R.dataset.job,S(),K()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{C=!C,S(),K()})):(N.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${C?"var(--yellow)":"var(--gray-200)"};
              background:${C?"var(--yellow)":"#fff"};
              color:${C?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${C?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{C=!C,S(),K()})))}function K(){const N=document.getElementById("col-grid");N&&(B==="player"?ge(N):B==="formation"?me(N):xe(N))}function te(N,R,W,P,X){X=X||"#7a28b8";const ue=document.getElementById("col-grid"),ie=document.getElementById("col-big");if(!ue||!ie)return;var Ae=0;function ke(){ie.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+R(N[Ae])+"</div>";var ve=ie.querySelector("[data-card-id],[data-form-id],[data-gc-id]");ve&&ve.addEventListener("click",function(){P(N[Ae])}),requestAnimationFrame(function(){var _e=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!_e||!ie)){var we=ie.clientHeight-8,Le=ie.clientWidth-24,Re=_e.offsetHeight,Se=_e.offsetWidth;if(Re>0&&Se>0&&we>40){var Ke=Math.min(we/Re,Le/Se,1);_e.style.transform="scale("+Ke.toFixed(3)+")",_e.style.transformOrigin="top center"}}}),ue.innerHTML=N.map(function(_e,we){return'<div class="col-mini-item" data-idx="'+we+'" style="flex-shrink:0;cursor:pointer;border-radius:8px;border:1.5px solid '+(we===Ae?X:"transparent")+';transition:border-color .15s;overflow:hidden">'+W(_e,we===Ae)+"</div>"}).join(""),ue.querySelectorAll(".col-mini-item").forEach(function(_e){_e.addEventListener("click",function(){Ae=Number(_e.dataset.idx),ke(),_e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}ke()}function F(N){var R=.54,W=Math.round(140*R),P=Math.round(310*R),X;if(!N||N._fake){var ue=N?N.player:null;if(!ue)return"";X=bi(ue)}else X=Vt(N,"");return'<div style="width:'+W+"px;height:"+P+'px;overflow:hidden;position:relative;flex-shrink:0"><div style="transform:scale('+R+');transform-origin:top left;position:absolute;top:0;left:0;pointer-events:none">'+X+"</div></div>"}function Q(N,R,W){R=R||100,W=W||140;var P=St[N]||{},X={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ue=Math.max(3,Math.round(R*.06)),ie=Object.entries(P).map(function(ke){var ve=ke[0],_e=ke[1],we=ve.replace(/\d+$/,""),Le=X[we]||"#888",Re=Math.round(_e.x*R),Se=Math.round(_e.y*W);return'<circle cx="'+Re+'" cy="'+Se+'" r="'+ue+'" fill="'+Le+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Ae=Math.max(1,Math.round(R/50));return'<svg viewBox="0 0 '+R+" "+W+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+R+'" height="'+W+'" fill="#1A6B3C"/><rect x="'+Math.round(R*.2)+'" y="'+Math.round(W*.02)+'" width="'+Math.round(R*.6)+'" height="'+Math.round(W*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Ae+'"/><line x1="0" y1="'+Math.round(W*.5)+'" x2="'+R+'" y2="'+Math.round(W*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Ae+'"/><ellipse cx="'+Math.round(R*.5)+'" cy="'+Math.round(W*.5)+'" rx="'+Math.round(R*.18)+'" ry="'+Math.round(W*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Ae+'"/><rect x="'+Math.round(R*.2)+'" y="'+Math.round(W*.82)+'" width="'+Math.round(R*.6)+'" height="'+Math.round(W*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Ae+'"/>'+ie+"</svg>"}function V(N,R,W){var P=W>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+W+"</div>":"",X=R?'data-form-id="'+R.id+'"':"",ue=N.length>7?14:N.length>5?16:19,ie=!!R;return"<div "+X+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(ie?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(ie?"":"filter:grayscale(1);opacity:0.5")+'">'+P+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(ie?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ue+"px;font-weight:900;color:"+(ie?"#1A6B3C":"#aaa")+';line-height:1">'+N+'</div></div><div style="flex:1;overflow:hidden;background:'+(ie?"#1A6B3C":"#ccc")+'">'+Q(N,140,220)+"</div></div>"}function ae(N,R){var W=.54,P=Math.round(140*W),X=Math.round(305*W),ue=Math.round(X*.22),ie=X-ue,Ae=N.length>7?5:7,ke=Q(N,P,ie),ve=R?"1.5px solid #2a7a40":"1px solid #ddd",_e=R?"":"filter:grayscale(1);opacity:0.45;",we=R?"#1A6B3C":"#bbb",Le="#fff";return'<div style="width:'+P+"px;height:"+X+"px;border-radius:6px;border:"+ve+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+_e+'"><div style="height:'+ue+"px;background:"+we+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Ae+"px;font-weight:900;color:"+Le+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(P-4)+'px">'+N+'</span></div><div style="height:'+ie+'px;overflow:hidden;flex-shrink:0">'+ke+"</div></div>"}function ge(N){if(C){const R=ne();if(!R.length){N.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const W=R.map(P=>i.find(X=>X.player.id===P.id)||{_fake:!0,player:P,id:"fake-"+P.id});te(W,P=>P._fake?bi(P.player):Vt(P,""),P=>P._fake?F({player:P.player,id:"x",_fake:!0}):F(P),P=>{P._fake||vi(P,i,k,t)},"#1A6B3C")}else{const R=se();if(!R.length){N.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const W={},P=[];R.forEach(X=>{W[X.player.id]||(W[X.player.id]=!0,P.push(X))}),te(P,X=>{const ue=k[X.player.id]||1,ie=ue>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ue}</div>`:"",ke=i.filter(ve=>ve.player.id===X.player.id&&ve.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Vt(X,ie+ke)},X=>F(X),X=>vi(X,i,k,t),"#1A6B3C")}}function me(N){const R=C?E:[...z];if(!R.length){N.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const W=R.map(P=>({formation:P,card:f.find(X=>X.formation===P)||null,owned:z.has(P)}));te(W,({formation:P,card:X,owned:ue})=>V(P,ue?X:null,ue?f.filter(ie=>ie.formation===P).length:0),({formation:P,owned:X})=>ae(P,X),({card:P,owned:X})=>{X&&P&&bo(P,f,t,s)},"#1A6B3C")}function xe(N){const R=Object.keys(b),W=C?R.length?R:o:[...M];if(!W.length){N.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const P=W.map(X=>({type:X,gc:Be[X]||{icon:"⚡",desc:""},def:b[X]||null,owned:M.has(X),card:a.find(ue=>ue.gc_type===X)||null}));te(P,({type:X,gc:ue,def:ie,owned:Ae,card:ke})=>{const ve=Ae?a.filter(h=>h.gc_type===X).length:0,_e=ve>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ve}</div>`:"",we=(ie==null?void 0:ie.gc_type)==="ultra_game_changer",Le={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Re={purple:"#b06ce0",light_blue:"#00d4ef"},Se=Le[ie==null?void 0:ie.color]||Le.purple,Ke=Re[ie==null?void 0:ie.color]||Re.purple,c=(ie==null?void 0:ie.effect)||ue.desc||"",g=ie!=null&&ie.image_url?`/manager-wars/icons/${ie.image_url}`:null;return Ae&&ke?`<div data-gc-id="${ke.id}" data-gc-type="${X}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Ke};background:${Se};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Ke}66;cursor:pointer">
          ${_e}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${X.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${X}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${we?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${g?`<img src="${g}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ue.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${c.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${X}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ue.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:X,gc:ue,def:ie,owned:Ae})=>Ae?(()=>{const ke=Math.round(75.60000000000001),ve=Math.round(310*.54),_e=Math.round(ve*.65),we=Math.round(ve*.18),Le={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Re={purple:"#9b59b6",light_blue:"#00bcd4"},Se=Le[ie==null?void 0:ie.color]||Le.purple,Ke=Re[ie==null?void 0:ie.color]||Re.purple,c=ie!=null&&ie.image_url?`/manager-wars/icons/${ie.image_url}`:null;return`<div style="width:${ke}px;height:${ve}px;border-radius:8px;background:${Se};border:1px solid ${Ke};display:flex;flex-direction:column;overflow:hidden"><div style="height:${we}px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:7px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ke-6}px">${X}</span></div><div style="height:${_e}px;display:flex;align-items:center;justify-content:center">${c?`<img src="${c}" style="max-width:${ke-8}px;max-height:${_e-4}px;object-fit:contain">`:`<span style="font-size:24px">${ue.icon}</span>`}</div><div style="flex:1;display:flex;align-items:center;justify-content:center"><span style="font-size:7px;color:rgba(255,255,255,0.7);text-align:center;padding:0 2px">${((ie==null?void 0:ie.effect)||ue.desc||"").slice(0,20)}</span></div></div>`})():(()=>{const ke=Math.round(75.60000000000001),ve=Math.round(310*.54);return`<div style="width:${ke}px;height:${ve}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:22px">${ue.icon}</span><span style="font-size:7px;color:#aaa;margin-top:4px;text-align:center;padding:0 4px">${X}</span></div>`})(),({type:X,owned:ue,def:ie})=>{ue&&ho(X,ie,s)},"#7a28b8")}e.querySelectorAll(".col-tab-btn").forEach(N=>{N.addEventListener("click",()=>{B=N.dataset.tab,O="Tous",j="",C=!1,e.querySelectorAll(".col-tab-btn").forEach(R=>{const W=R.dataset.tab===B;R.style.borderBottomColor=W?"var(--green)":"transparent",R.style.color=W?"var(--green)":"var(--gray-600)"}),S(),K()})}),S(),K()}function ho(e,t,n){const r=Be[e]||{icon:"⚡",desc:"Effet spécial."},u=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,p=d[t==null?void 0:t.color]||d.purple,i=(t==null?void 0:t.name)||e,a=(t==null?void 0:t.effect)||r.desc,f=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;n("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${p};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${u?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${i}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${f?`<img src="${f}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${r.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${a}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const _t=1e3;function bo(e,t,n,r){var o,k,z;const{state:u,toast:s,closeModal:d,navigate:l,refreshProfile:p}=n,i=e.formation,a={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const M=St[i]||{},B=ni[i]||[],O=290,j=360,C=20;function q(se){const ne=M[se];return ne?{x:ne.x*O,y:ne.y*j}:null}let Z=`<svg width="${O}" height="${j}" viewBox="0 0 ${O} ${j}" xmlns="http://www.w3.org/2000/svg">`;for(const[se,ne]of B){const S=q(se),K=q(ne);!S||!K||(Z+=`<line x1="${S.x}" y1="${S.y}" x2="${K.x}" y2="${K.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const se of Object.keys(M)){const ne=q(se);if(!ne)continue;const S=se.replace(/\d+/,""),K=a[S]||"#555";Z+=`<circle cx="${ne.x}" cy="${ne.y}" r="${C}" fill="${K}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,Z+=`<text x="${ne.x}" y="${ne.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${S}</text>`}return Z+="</svg>",Z}const m=t.filter(M=>M.formation===i),b=m.length,E=!e.is_for_sale;r(`Formation ${i}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${f()}
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
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${_t.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${b-1} carte${b-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-form-btn" ${b<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${E?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${_t}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(o=document.getElementById("direct-sell-form-btn"))==null||o.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${i} pour ${_t.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const M=m.find(O=>!O.is_for_sale)||m[0];if(!M){s("Aucune carte à vendre","error");return}const{error:B}=await A.from("cards").delete().eq("id",M.id);if(B){s(B.message,"error");return}await A.from("users").update({credits:(u.profile.credits||0)+_t}).eq("id",u.profile.id),await p(),s(`+${_t.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),l("collection")}),(k=document.getElementById("market-sell-form-btn"))==null||k.addEventListener("click",async()=>{const M=parseInt(document.getElementById("sell-price-form").value);if(!M||M<1){s("Prix invalide","error");return}await A.from("cards").update({is_for_sale:!0,sale_price:M}).eq("id",e.id),await A.from("market_listings").insert({seller_id:u.profile.id,card_id:e.id,price:M}),s("Carte mise en vente sur le marché !","success"),d(),l("collection")}),(z=document.getElementById("cancel-sell-form-btn"))==null||z.addEventListener("click",async()=>{await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await A.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),d(),l("collection")})}async function vi(e,t,n,r){var ne,S,K,te,F,Q;const{state:u,toast:s,openModal:d,closeModal:l,navigate:p,refreshProfile:i}=r,a=e.player,f=t.filter(V=>V.player.id===a.id),m=f.length,b=xo[a.rarity]||1e3,E=a.rarity!=="legende",o=Di(a),k=Mt(a,a.job),z=a.job2?Mt(a,a.job2):null,M=At[a.job]||"#1A6B3C",B=a.job2?At[a.job2]:null,O=Bi[a.rarity]||"#ccc",j=ci[a.country_code]||a.country_code||"",C=f.map(V=>V.id);let q={};if(C.length){const{data:V}=await A.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",C).order("transferred_at",{ascending:!0});(V||[]).forEach(ae=>{q[ae.card_id]||(q[ae.card_id]=[]),q[ae.card_id].push(ae)})}const Z=V=>`
    <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:8px 12px">
      <div style="font-size:13px">${V.club_name} <span style="color:var(--gray-600)">(${V.manager_name})</span></div>
      <div style="font-size:13px;font-weight:700;color:${V.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${V.source==="booster"?"Booster":V.price?V.price.toLocaleString("fr")+" crédits":"—"}</div>
    </div>`,se=C.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Clubs ${m>1?`(${m} exemplaires)`:""}</div>
      <div style="display:flex;flex-direction:column;gap:12px">
        ${f.map((V,ae)=>{const ge=q[V.id]||[];return ge.length?`
            <div>
              ${m>1?`<div style="font-size:11px;color:var(--gray-600);font-weight:700;margin-bottom:4px;text-transform:uppercase">Exemplaire ${ae+1}</div>`:""}
              <div style="display:flex;flex-direction:column;gap:6px">
                ${ge.map(Z).join("")}
              </div>
            </div>`:""}).join("")}
      </div>
    </div>`:"";d(`${a.firstname} ${a.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${O};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${a.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(a.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${M}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${M}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${k}</text>
            </svg>
            ${z!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${B}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${z}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${o?`<img src="${o}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${a.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${j}</div>
            ${(ne=a.clubs)!=null&&ne.logo_url?`<img src="${a.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((S=a.clubs)==null?void 0:S.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${O}">${a.rarity.toUpperCase()}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${a.job}${a.job2?" / "+a.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",a.note_g],["DEF",a.note_d],["MIL",a.note_m],["ATT",a.note_a]].map(([V,ae])=>{const ge=At[V],me=Number(ae)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${ge}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${me}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${V}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${m}</div>
        </div>
      </div>
    </div>
    ${se}

    <!-- Vente directe -->
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">💰 Vente directe</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:12px;color:var(--gray-600)">Prix fixe selon rareté</div>
          <div style="font-size:18px;font-weight:900;color:var(--yellow)">${b.toLocaleString("fr")} crédits</div>
          <div style="font-size:11px;color:var(--gray-600);margin-top:2px">Il vous restera ×${m-1} carte${m-1>1?"s":""}</div>
        </div>
        <button class="btn btn-yellow" id="direct-sell-btn" ${m<=0?"disabled":""}>
          Vendre 1 carte
        </button>
      </div>
    </div>

    <!-- Marché (optionnel) -->
    ${E&&!e.is_for_sale?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price" min="1" placeholder="Prix en crédits" value="${a.sell_price||5e3}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-btn">Retirer</button>
    </div>`:""}`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(K=document.getElementById("close-detail"))==null||K.addEventListener("click",l),(te=document.getElementById("direct-sell-btn"))==null||te.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte ${a.surname_encoded} pour ${b.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const V=f.find(ge=>!ge.is_for_sale)||f[0];if(!V){s("Aucune carte à vendre","error");return}const{error:ae}=await A.from("cards").delete().eq("id",V.id);if(ae){s(ae.message,"error");return}await A.from("users").update({credits:(u.profile.credits||0)+b}).eq("id",u.profile.id),await i(),s(`+${b.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),p("collection")}),(F=document.getElementById("market-sell-btn"))==null||F.addEventListener("click",async()=>{const V=parseInt(document.getElementById("sell-price").value);if(!V||V<1){s("Prix invalide","error");return}await A.from("cards").update({is_for_sale:!0,sale_price:V}).eq("id",e.id),await A.from("market_listings").insert({seller_id:u.profile.id,card_id:e.id,price:V}),s("Carte mise en vente sur le marché !","success"),l(),p("collection")}),(Q=document.getElementById("cancel-sell-btn"))==null||Q.addEventListener("click",async()=>{await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await A.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),p("collection")})}const Dt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},rt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ot(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}function qi(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function Gi(e){var n;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(n=e==null?void 0:e.clubs)!=null&&n.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function vo(e,t=44,n=58){var b;const r=e?Ot(e):null,u=e?Gi(e):null,s=qi(e==null?void 0:e.country_code),d=(e==null?void 0:e.job)||"MIL",l=rt[d]||"#555",p={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",i=Number(d==="GK"?e==null?void 0:e.note_g:d==="DEF"?e==null?void 0:e.note_d:d==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,a=Math.round(n*.19),f=Math.round(n*.25),m=n-a-f;return e?`<div style="width:${t}px;height:${n}px;border-radius:5px;border:2px solid ${p};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${a}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${r?`<img src="${r}" style="position:absolute;top:${a}px;left:0;width:${t}px;height:${m}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">🌍</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${i}</span>
      ${u?`<img src="${u}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:(b=e==null?void 0:e.clubs)!=null&&b.encoded_name?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${n}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function Qt(e,t){const{state:n,navigate:r,toast:u}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await A.from("decks").select("id,name,formation_card_id").eq("owner_id",n.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(s==null?void 0:s.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(s==null?void 0:s.length)>0?s.map(d=>`
          <div class="card-panel" data-open-deck="${d.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="font-weight:700;font-size:15px;flex:1">${d.name}</div>
            <div style="display:flex;gap:6px" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${d.id}" data-name="${d.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${d.id}" data-name="${d.name}">🗑️</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const d=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!d)return;const{data:l,error:p}=await A.from("decks").insert({owner_id:n.profile.id,name:d}).select().single();if(p){u(p.message,"error");return}u("Deck créé !","success"),wi(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(d=>{d.addEventListener("click",()=>wi(d.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(d=>{d.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",d.dataset.name);if(!l||l===d.dataset.name)return;const{error:p}=await A.from("decks").update({name:l}).eq("id",d.dataset.rename);if(p){u(p.message,"error");return}u("Deck renommé !","success"),Qt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(d=>{d.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${d.dataset.name}" ? Cette action est irréversible.`))return;await A.from("deck_cards").delete().eq("deck_id",d.dataset.delete);const{error:l}=await A.from("decks").delete().eq("id",d.dataset.delete);if(l){u(l.message,"error");return}u("Deck supprimé.","success"),Qt(e,t)})})}async function wi(e,t,n){const{state:r,toast:u}=n;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await A.from("decks").select("*").eq("id",e).single(),{data:d}=await A.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",r.profile.id),l=(d||[]).filter(b=>b.card_type==="player"&&b.player),p=(d||[]).filter(b=>b.card_type==="formation"),i=p.map(b=>b.formation).filter(Boolean),{data:a}=await A.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let f=s.formation||"4-4-2";i.length>0&&!i.includes(f)&&(f=i[0]);const m={deckId:e,name:s.name,formation:f,formationCardId:s.formation_card_id,slots:{},subs:[],playerCards:l,formationCards:p,availableFormations:i};(a||[]).forEach(b=>{b.is_starter?m.slots[b.position]=b.card_id:m.subs.includes(b.card_id)||m.subs.push(b.card_id)}),ut(t,m,n)}function ut(e,t,n){var p;const{navigate:r}=n;Dt[t.formation];const u=$i(t.formation),s=u.filter(i=>t.slots[i]).length,d=t.availableFormations.length>0?t.availableFormations:Object.keys(Dt),l=t.subs.map(i=>t.playerCards.find(a=>a.id===i)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div class="page">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${t.name}</h2>
        <p>${s}/11 titulaires · ${t.subs.length}/5 remplaçants</p>
      </div>
    </div>

    <!-- Formation (uniquement les cartes possédées) -->
    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <label style="font-size:11px;margin-bottom:4px;display:block">Formation ${t.availableFormations.length===0?"(aucune carte — toutes disponibles)":""}</label>
      <select id="formation-select" style="width:100%;padding:7px;border-radius:6px;border:1.5px solid var(--gray-200)">
        ${d.map(i=>`<option value="${i}" ${i===t.formation?"selected":""}>${i}</option>`).join("")}
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
        ${l.map(i=>{const a=i.player;return`<div style="position:relative;flex-shrink:0">
            ${vo(a,44,58)}
            <button data-remove-sub="${i.id}"
              style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>
          </div>`}).join("")}
        ${t.subs.length<5?'<div id="add-sub-btn" style="width:44px;height:58px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:22px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${s<11?"disabled":""}>
        ${s<11?`Placez encore ${11-s} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`,wo(e,t,u,n),document.getElementById("builder-back").addEventListener("click",()=>r("decks")),document.getElementById("formation-select").addEventListener("change",i=>{t.formation=i.target.value;const a=$i(t.formation),f={};a.forEach(m=>{t.slots[m]&&(f[m]=t.slots[m])}),t.slots=f,ut(e,t,n)}),document.getElementById("save-deck").addEventListener("click",()=>ko(t,n)),e.querySelectorAll("[data-remove-sub]").forEach(i=>{i.addEventListener("click",()=>{t.subs=t.subs.filter(a=>a!==i.dataset.removeSub),ut(e,t,n)})}),(p=document.getElementById("add-sub-btn"))==null||p.addEventListener("click",()=>{_o(t,e,n)})}function wo(e,t,n,r){const u=e.querySelector("#deck-field");if(!u)return;const s=St[t.formation]||{},d=Ai(t.formation)||[],l={};for(const z of n){const M=t.slots[z],B=M?t.playerCards.find(O=>O.id===M):null;l[z]=B?B.player:null}const p=300,i=300,a=48,f=64,m=13,b=16,E=38;function o(z){const M=s[z];return M?{x:M.x*p,y:M.y*i}:null}let k="";for(const[z,M]of d){const B=o(z),O=o(M);if(!B||!O)continue;const j=l[z]?{...l[z],club_id:l[z].club_id,country_code:l[z].country_code,rarity:l[z].rarity}:null,C=l[M]?{...l[M],club_id:l[M].club_id,country_code:l[M].country_code,rarity:l[M].rarity}:null,q=Qe(j,C);q==="#ff3333"||q==="#cc2222"?k+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}" stroke="${q}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(k+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}" stroke="${q}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,k+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}" stroke="${q}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const z of n){const M=o(z);if(!M)continue;const B=l[z],O=z.replace(/\d+/,""),j=rt[O]||"#555",C=(M.x-a/2).toFixed(1),q=(M.y-f/2).toFixed(1),Z={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[B==null?void 0:B.rarity]||"#aaa";if(B){const se=Ot(B),ne=Gi(B),S=qi(B.country_code),K=Number(O==="GK"?B.note_g:O==="DEF"?B.note_d:O==="MIL"?B.note_m:B.note_a)||0,te=f-m-b;k+=`<defs><clipPath id="dcp-${z}"><rect x="${C}" y="${(M.y-f/2+m).toFixed(1)}" width="${a}" height="${te}"/></clipPath></defs>`,k+=`<rect x="${C}" y="${q}" width="${a}" height="${f}" rx="5" fill="${j}"/>`,se&&(k+=`<image href="${se}" x="${C}" y="${(M.y-f/2+m).toFixed(1)}" width="${a}" height="${te}" clip-path="url(#dcp-${z})" preserveAspectRatio="xMidYMin slice"/>`),k+=`<rect x="${C}" y="${q}" width="${a}" height="${m}" fill="rgba(255,255,255,0.93)"/>`,k+=`<text x="${M.x.toFixed(1)}" y="${(M.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(B.surname_encoded||"").slice(0,9)}</text>`;const F=(M.y+f/2-b).toFixed(1);k+=`<rect x="${C}" y="${F}" width="${a}" height="${b}" fill="rgba(255,255,255,0.93)"/>`,S&&(k+=`<image href="${S}" x="${(M.x-21).toFixed(1)}" y="${(M.y+f/2-b+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),k+=`<text x="${M.x.toFixed(1)}" y="${(M.y+f/2-b/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${K}</text>`,ne&&(k+=`<image href="${ne}" x="${(M.x+a/2-14).toFixed(1)}" y="${(M.y+f/2-b+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),k+=`<rect x="${C}" y="${q}" width="${a}" height="${f}" rx="5" fill="none" stroke="${Z}" stroke-width="2"/>`}else k+=`<rect x="${C}" y="${q}" width="${a}" height="${f}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,k+=`<text x="${M.x.toFixed(1)}" y="${M.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,k+=`<text x="${M.x.toFixed(1)}" y="${(M.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${O}</text>`;k+=`<rect x="${C}" y="${q}" width="${a}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${z}" style="cursor:pointer"/>`}u.innerHTML=`<svg viewBox="${-E} ${-E} ${p+E*2} ${i+E*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${k}</svg>`,u.querySelectorAll(".deck-slot-hit").forEach(z=>{z.addEventListener("click",()=>$o(z.dataset.pos,t,e,r))})}function $o(e,t,n,r){var m,b,E;const{openModal:u,closeModal:s}=r,d=e.replace(/\d+/,""),l=t.slots[e],p=l?t.playerCards.find(o=>o.id===l):null;(m=p==null?void 0:p.player)==null||m.id;const i=new Set;Object.entries(t.slots).forEach(([o,k])=>{var M;if(o===e||!k)return;const z=t.playerCards.find(B=>B.id===k);(M=z==null?void 0:z.player)!=null&&M.id&&i.add(z.player.id)}),t.subs.forEach(o=>{var z;const k=t.playerCards.find(M=>M.id===o);(z=k==null?void 0:k.player)!=null&&z.id&&i.add(k.player.id)});const a=new Set,f=t.playerCards.filter(o=>{const k=o.player;return!(k.job===d||k.job2===d)||i.has(k.id)||a.has(k.id)?!1:(a.add(k.id),!0)});f.sort((o,k)=>{const z=d==="GK"?o.player.note_g:d==="DEF"?o.player.note_d:d==="MIL"?o.player.note_m:o.player.note_a;return(d==="GK"?k.player.note_g:d==="DEF"?k.player.note_d:d==="MIL"?k.player.note_m:k.player.note_a)-z}),u(`Choisir ${d} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${f.length>0?f.map(o=>{var O,j;const k=o.player,z=d==="GK"?k.note_g:d==="DEF"?k.note_d:d==="MIL"?k.note_m:k.note_a,M=Ot(k),B={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[k.rarity];return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${rt[d]}">
            ${M?`<img src="${M}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${rt[d]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${d}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${k.firstname} ${k.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${k.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${k.country_code}">
              ${(O=k.clubs)!=null&&O.logo_url?`<img src="${k.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((j=k.clubs)==null?void 0:j.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${k.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${rt[d]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${B};flex-shrink:0">
            ${z}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(b=document.getElementById("close-selector"))==null||b.addEventListener("click",s),(E=document.getElementById("remove-player"))==null||E.addEventListener("click",()=>{delete t.slots[e],s(),ut(n,t,r)}),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{t.slots[e]=o.dataset.cardId,s(),ut(n,t,r)})})}function _o(e,t,n){var p;const{openModal:r,closeModal:u}=n,s=new Set;Object.values(e.slots).filter(Boolean).forEach(i=>{var f;const a=e.playerCards.find(m=>m.id===i);(f=a==null?void 0:a.player)!=null&&f.id&&s.add(a.player.id)}),e.subs.forEach(i=>{var f;const a=e.playerCards.find(m=>m.id===i);(f=a==null?void 0:a.player)!=null&&f.id&&s.add(a.player.id)});const d=new Set,l=e.playerCards.filter(i=>{var a,f,m;return s.has((a=i.player)==null?void 0:a.id)||d.has((f=i.player)==null?void 0:f.id)?!1:(d.add((m=i.player)==null?void 0:m.id),!0)});r("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(i=>{var b;const a=i.player,f=Ot(a),m=a.job==="GK"?a.note_g:a.job==="DEF"?a.note_d:a.job==="MIL"?a.note_m:a.note_a;return`<div class="player-option" data-card-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${rt[a.job]}">
            ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${a.firstname} ${a.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${a.job} · ${a.country_code} · ${((b=a.clubs)==null?void 0:b.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${rt[a.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${m}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(p=document.getElementById("close-sub-selector"))==null||p.addEventListener("click",u),document.querySelectorAll(".player-option").forEach(i=>{i.addEventListener("click",()=>{e.subs.push(i.dataset.cardId),u(),ut(t,e,n)})})}async function ko(e,t){const{state:n,toast:r,navigate:u}=t,s=e.formationCards.find(p=>p.formation===e.formation),d=(s==null?void 0:s.id)||e.formationCardId;await A.from("decks").update({formation:e.formation,formation_card_id:d||null}).eq("id",e.deckId),await A.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([p,i],a)=>{l.push({deck_id:e.deckId,card_id:i,position:p,is_starter:!0,slot_order:a})}),e.subs.forEach((p,i)=>{l.push({deck_id:e.deckId,card_id:p,position:`SUB${i+1}`,is_starter:!1,slot_order:100+i})}),l.length>0){const{error:p}=await A.from("deck_cards").insert(l);if(p){r(p.message,"error");return}}r("Deck enregistré ✅","success"),u("decks")}function $i(e){const t=Dt[e]||Dt["4-4-2"],n=["GK1"];for(let r=1;r<=t.DEF;r++)n.push(`DEF${r}`);for(let r=1;r<=t.MIL;r++)n.push(`MIL${r}`);for(let r=1;r<=t.ATT;r++)n.push(`ATT${r}`);return n}async function Ri(){const{data:e}=await A.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await A.from("booster_drop_rates").select("*").in("booster_id",e.map(n=>n.id)).order("sort_order");return e.map(n=>({...n,rates:(t||[]).filter(r=>r.booster_id===n.id)}))}function Eo(e){if(!(e!=null&&e.length))return null;const t=e.reduce((r,u)=>r+Number(u.percentage),0);let n=Math.random()*t;for(const r of e)if(n-=Number(r.percentage),n<=0)return r;return e[e.length-1]}const Ni=()=>Object.keys(St),To=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Zt={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Ao(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const n=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${n}.png`}const _i={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Io={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Lo={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ki(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function zo(e){var a,f;const t=e.player;if(!t)return"";const n=t.job||"ATT",r=_i[n],u=Io[t.rarity]||"#ccc",s=ki(t,n),d=t.job2?ki(t,t.job2):null,l=t.job2?_i[t.job2]:null,p=Ao(t),i=Lo[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${u};cursor:pointer;flex-shrink:0;position:relative">
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${t.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(t.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${r}"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${r}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>
        ${d!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${l}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${d}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${i}</div>
        ${(a=t.clubs)!=null&&a.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=t.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Pi(e){var u;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const n=((u=Object.entries(t).sort((s,d)=>d[1]-s[1])[0])==null?void 0:u[0])||"player",r=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+r,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:n,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function Mo(e,{state:t,navigate:n,toast:r}){var d;const u=((d=t.profile)==null?void 0:d.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await Ri()).map(Pi)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}s.length||(s=To.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${u.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${s.map(l=>{const p=l.cost===0||u>=l.cost;return`<div class="booster-card ${p?"":"disabled"}" data-booster="${l.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${l.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${l.img}" alt="${l.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${l.name}</div>
            <div class="desc">${l.sub}</div>
            <div class="cost">${l.costLabel}</div>
            ${p?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const p=s.find(i=>i.id===l.dataset.booster);if(p){l.style.opacity="0.5",l.style.pointerEvents="none";try{await So(p,{state:t,toast:r,navigate:n,container:e})}catch(i){r(i.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",p=>{p.stopPropagation();const i=s.find(a=>a.id===l.dataset.boosterId);Bo(i)})})}async function So(e,{state:t,toast:n,navigate:r,container:u}){var a;if(e.cost>0&&t.profile.credits<e.cost){n("Crédits insuffisants","error");return}if(e.isPub)try{await Go()}catch(f){n(f.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:s}=await A.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),d=new Set((s||[]).filter(f=>f.card_type==="player").map(f=>f.player_id)),l=new Set((s||[]).filter(f=>f.card_type==="formation").map(f=>f.formation));let p=[];if((a=e.rates)!=null&&a.length)p=await ei(t.profile,e);else{const f=e.type||"player";f==="player"?p=await Oi(t.profile,e.cardCount,e.cost):f==="game_changer"?p=await Hi(t.profile,e.cardCount,e.cost):f==="formation"?p=await Ui(t.profile,e.cost):p=await ei(t.profile,e)}p.forEach(f=>{f.card_type==="player"&&f.player?f.isDuplicate=d.has(f.player.id):f.card_type==="formation"&&(f.isDuplicate=l.has(f.formation))});const{data:i}=await A.from("users").select("*").eq("id",t.profile.id).single();i&&(t.profile=i),Ki(p,e,r)}function Co(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Ze(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function jo(e,t){let n;switch(t){case"legende":n=e.filter(r=>r.rarity==="legende"),n.length||(n=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte")),n.length||(n=e.filter(r=>Ze(r)>=6));break;case"special":n=e.filter(r=>r.rarity==="pepite"||r.rarity==="papyte"),n.length||(n=e.filter(r=>Ze(r)>=6));break;case"normal_high":n=e.filter(r=>r.rarity==="normal"&&Ze(r)>=6),n.length||(n=e.filter(r=>Ze(r)>=6));break;default:n=e.filter(r=>r.rarity==="normal"&&Ze(r)>=1&&Ze(r)<=5),n.length||(n=e.filter(r=>r.rarity==="normal"));break}return n.length||(n=e),n[Math.floor(Math.random()*n.length)]}async function ei(e,t){if(t.cost>0){const{error:l}=await A.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(l)throw l}const{data:n}=await A.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),r=new Set((n||[]).filter(l=>l.card_type==="player").map(l=>l.player_id)),u=new Set((n||[]).filter(l=>l.card_type==="formation").map(l=>l.formation)),s=new Set,d=[];for(let l=0;l<(t.cardCount||5);l++){const p=Eo(t.rates);if(p){if(p.card_type==="player"){const i=M=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[M]||M,a=p.rarity?i(p.rarity):null;let f=A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);a&&(f=f.eq("rarity",a));const{data:m}=await f;let b=m||[];if((p.note_min||p.note_max)&&(b=b.filter(M=>{const B=Math.max(Number(M.note_g)||0,Number(M.note_d)||0,Number(M.note_m)||0,Number(M.note_a)||0);return(!p.note_min||B>=p.note_min)&&(!p.note_max||B<=p.note_max)})),b.length||(p.note_min||p.note_max?(b=m||[],console.warn("[Booster] Aucun joueur avec note",p.note_min,"-",p.note_max,"— fallback rareté uniquement")):b=m||[]),!b.length)continue;let E=b.filter(M=>!s.has(M.id));E.length||(E=b);const o=E[Math.floor(Math.random()*E.length)];s.add(o.id);const k=r.has(o.id),{data:z}=await A.from("cards").insert({owner_id:e.id,player_id:o.id,card_type:"player"}).select().single();z&&(d.push({...z,player:o,isDuplicate:k}),A.rpc("record_transfer",{p_card_id:z.id,p_player_id:o.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(p.card_type==="game_changer"){const{data:i}=await A.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),a=i!=null&&i.length?i:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],m=a[Math.floor(Math.random()*a.length)].name,{data:b}=await A.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:m}).select().single();b&&d.push(b)}else if(p.card_type==="formation"){const i=Ni(),a=i[Math.floor(Math.random()*i.length)],f=u.has(a),{data:m}=await A.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();m!=null&&m[0]&&d.push({...m[0],isDuplicate:f})}}}return d}async function Oi(e,t,n){if(n>0){const{error:i}=await A.from("users").update({credits:e.credits-n}).eq("id",e.id);if(i)throw i}const{data:r}=await A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(r!=null&&r.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const u=r.filter(i=>i.job==="GK"),s=r.filter(i=>i.job!=="GK"),d=!e.first_booster_opened&&u.length>0,l=[];for(let i=0;i<t;i++){const a=i===0&&d?u:i===0?s:r,f=Co(),m=jo(a,f);m&&l.push(m)}d&&await A.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:p}=await A.from("cards").insert(l.map(i=>({owner_id:e.id,player_id:i.id,card_type:"player"}))).select();return(p||[]).forEach((i,a)=>{A.rpc("record_transfer",{p_card_id:i.id,p_player_id:l[a].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((i,a)=>({...p[a],player:i}))}async function Hi(e,t,n){const{error:r}=await A.from("users").update({credits:e.credits-n}).eq("id",e.id);if(r)throw r;const{data:u}=await A.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=u!=null&&u.length?u:Object.keys(Zt).map(a=>({name:a,gc_type:"game_changer"})),d=Array.from({length:t},()=>{const a=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:a.name,gc_definition_id:a.id||null}}),{data:l,error:p}=await A.from("cards").insert(d).select();return p&&console.error("[Booster GC] Erreur insert:",p.message,p),(l||[]).map(a=>{const f=u==null?void 0:u.find(m=>m.name===a.gc_type||m.id===a.gc_definition_id);return{...a,_gcDef:f||null}})}async function Ui(e,t){const{error:n}=await A.from("users").update({credits:e.credits-t}).eq("id",e.id);if(n)throw n;const{data:r}=await A.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),u=new Set((r||[]).map(a=>a.formation)),s=Ni(),d=s[Math.floor(Math.random()*s.length)],l=u.has(d),{data:p,error:i}=await A.from("cards").insert({owner_id:e.id,card_type:"formation",formation:d}).select();return i&&console.error("[Booster Formation] Erreur insert:",i.message,i),(p||[]).map(a=>({...a,isDuplicate:l}))}function Ki(e,t,n,r=null){var K,te;if(!e||e.length===0){const F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",F.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(F),(K=F.querySelector("#anim-close-err"))==null||K.addEventListener("click",()=>F.remove());return}e=[...e].sort((F,Q)=>{const V=F.player?Ze(F.player):-1;return(Q.player?Ze(Q.player):-1)-V});const u=document.createElement("div");u.id="booster-anim-overlay",u.innerHTML=`
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
      .pack-half { position:absolute; top:0; left:0; width:180px; height:280px; overflow:hidden; will-change:transform,opacity; }
      .pack-half img { position:absolute; top:0; left:0; width:180px; height:280px; object-fit:contain; }
      .pack-half-top    { clip-path: inset(0 0 80% 0); }
      .pack-half-bottom { clip-path: inset(20% 0 0 0); }
      .pack-cut .pack-half-top    { animation:cutTop .6s cubic-bezier(.4,0,.2,1) forwards; }
      .pack-cut .pack-half-bottom { animation:cutBottom .6s cubic-bezier(.4,0,.2,1) forwards; }
      @keyframes cutTop {
        0%{transform:translateY(0) rotate(0)} 
        100%{transform:translateY(-90px) translateX(-30px) rotate(-14deg);opacity:0}
      }
      @keyframes cutBottom {
        0%{transform:translateY(0) rotate(0)}
        100%{transform:translateY(60px) translateX(20px) rotate(8deg);opacity:0}
      }
      #pack-blade {
        position:absolute; top:20%; left:0; height:4px; width:0;
        transform:translateY(-50%);
        background:linear-gradient(90deg, transparent, #fff 40%, #FFD700 60%, #fff);
        box-shadow:0 0 14px 3px #FFD700, 0 0 26px 8px rgba(255,215,0,0.6);
        border-radius:4px; pointer-events:none; opacity:0;
      }
      #cut-flash {
        position:absolute; inset:0; background:radial-gradient(circle at center, rgba(255,255,255,0.95), transparent 65%);
        opacity:0; pointer-events:none;
      }
      .cut-flash-go { animation:cutFlash .5s ease-out forwards; }
      @keyframes cutFlash { 0%{opacity:0;transform:scale(0.4)} 30%{opacity:1} 100%{opacity:0;transform:scale(1.8)} }
      @keyframes woIn  { 0%{opacity:0;transform:scale(.4) translateY(20px)} 60%{opacity:1;transform:scale(1.12)} 100%{opacity:1;transform:scale(1)} }
      @keyframes woOut { 0%{opacity:1;transform:scale(1)} 100%{opacity:0;transform:scale(1.5)} }
      @keyframes woGlow { 0%,100%{filter:drop-shadow(0 0 18px rgba(255,215,0,.5))} 50%{filter:drop-shadow(0 0 34px rgba(255,215,0,.95))} }
      .wo-in  { animation:woIn .5s cubic-bezier(.34,1.56,.64,1) forwards, woGlow 1.6s ease-in-out infinite .5s; }
      .wo-out { animation:woOut .45s ease-in forwards; }
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
      @keyframes dupPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }
    </style>

    <!-- Phase 1 : booster (à découper) -->
    <div id="pack-phase" style="display:flex;flex-direction:column;align-items:center;gap:16px">
      <div style="font-size:14px;color:rgba(255,255,255,0.7)">
        ${t.name} · ${e.length} carte${e.length>1?"s":""}
      </div>
      <div class="pack-visual" id="pack-visual" style="position:relative;animation:packFloat 2s ease-in-out infinite">
        <div id="pack-cut-zone" style="position:relative;width:180px;height:280px;touch-action:none;cursor:grab;user-select:none;-webkit-user-select:none">
          <div class="pack-half pack-half-bottom"><img src="${t.img}" alt="${t.name}" draggable="false"></div>
          <div class="pack-half pack-half-top"><img src="${t.img}" alt="${t.name}" draggable="false"></div>
          <div id="pack-blade"></div>
          <div id="cut-flash"></div>
        </div>
      </div>
      <div id="cut-hint" style="font-size:13px;color:rgba(255,255,255,0.6);display:flex;align-items:center;gap:6px">
        <span style="font-size:16px">👉</span> Glisse de gauche à droite pour ouvrir
      </div>
    </div>

    <!-- Phase 2 : carrousel des cartes (navigation par glissement) -->
    <div id="reveal-phase" style="display:none;flex-direction:column;align-items:center;gap:12px;width:100%;padding:8px 16px 18px">
      <div id="card-counter" style="font-size:14px;font-weight:700;color:rgba(255,255,255,0.85)"></div>
      <div id="card-viewport" style="position:relative;width:100%;max-width:300px;height:400px;overflow:hidden;touch-action:pan-y;user-select:none;-webkit-user-select:none">
        <div id="card-track" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center"></div>
      </div>
      <div id="card-dots" style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;max-width:260px"></div>
      <div id="card-tap-hint" style="font-size:12px;color:rgba(255,255,255,0.45)">‹ glisse pour naviguer ›</div>
      <div style="display:flex;gap:10px;width:100%;max-width:400px;margin-top:4px">
        <button class="btn btn-primary" id="reveal-collection" style="flex:1">Voir ma collection</button>
        <button class="btn btn-ghost" id="reveal-more" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Boosters</button>
      </div>
    </div>

    <!-- (Phase 3 fusionnée dans le carrousel) -->
    <div id="recap-phase" style="display:none"></div>

    <!-- Overlay WALKOUT (drapeau → club → carte) -->
    <div id="walkout-overlay" style="display:none;position:fixed;inset:0;z-index:3000;align-items:center;justify-content:center;background:radial-gradient(circle at center, rgba(20,20,40,0.85), rgba(0,0,0,0.97))">
      <div id="walkout-stage" style="display:flex;align-items:center;justify-content:center;width:240px;height:240px"></div>
    </div>

    <!-- Canvas pour feu d'artifice -->
    <canvas id="fireworks-canvas" style="position:fixed;inset:0;pointer-events:none;z-index:3001"></canvas>
  `,document.body.appendChild(u);let s=!1;const d=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let p=!1;const i=F=>F.touches&&F.touches[0]?F.touches[0].clientX:F.clientX;function a(F){s||(p=!0,l.style.opacity="1",f(F))}function f(F){if(!p||s)return;const Q=d.getBoundingClientRect(),V=i(F)-Q.left,ae=Math.max(0,Math.min(1,V/Q.width));l.style.width=ae*Q.width+"px",ae>=.82&&b()}function m(){s||(p=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{s||(l.style.transition="")},220))}function b(){var Q;if(s)return;s=!0,p=!1,l.style.width="100%",l.style.opacity="1",(Q=document.getElementById("cut-flash"))==null||Q.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const F=document.getElementById("cut-hint");F&&(F.style.opacity="0"),d.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",z(0)},620)}d.addEventListener("pointerdown",a),window.addEventListener("pointermove",f),window.addEventListener("pointerup",m),d.addEventListener("touchstart",a,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",m);let E=0,o=!1;const k=new Set;function z(F){E=F,document.getElementById("reveal-phase").style.display="flex",M(),B(F,0),Z()}function M(){const F=document.getElementById("card-dots");F&&(F.innerHTML=e.map((Q,V)=>`<div class="card-dot" data-i="${V}" style="width:8px;height:8px;border-radius:50%;background:${V===E?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),F.querySelectorAll(".card-dot").forEach(Q=>Q.addEventListener("click",()=>j(parseInt(Q.dataset.i)))))}function B(F,Q){var W;const V=e[F],ae=document.getElementById("card-counter"),ge=document.getElementById("card-track");ae&&(ae.textContent=`Carte ${F+1} / ${e.length}`);const me=V.card_type==="player"&&((W=V.player)==null?void 0:W.rarity)==="legende",xe=!k.has(F);k.add(F);let N=0;if(V.card_type==="player"&&V.player){const P=V.player,X=P.job||"ATT";N=Number(X==="GK"?P.note_g:X==="DEF"?P.note_d:X==="MIL"?P.note_m:P.note_a)||0}const R=P=>{ge.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${me?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Fo(V)}</div>
          ${V.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const X=document.getElementById("current-card-wrap");Q!==0?(X.style.transition="none",X.style.transform=`translateX(${Q>0?100:-100}%)`,requestAnimationFrame(()=>{X.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",X.style.transform="translateX(0)"})):X.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),P||me?ne():S(),M()};xe&&N>6&&V.card_type==="player"&&V.player?O(V,()=>R(!0)):R(!1)}function O(F,Q){var R;o=!0;const V=F.player,ae=`https://flagsapi.com/${V.country_code}/flat/64.png`,ge=(R=V.clubs)==null?void 0:R.logo_url,me=document.getElementById("walkout-overlay"),xe=document.getElementById("walkout-stage");if(!me||!xe){o=!1,Q();return}me.style.display="flex";const N=()=>{const W=xe.firstElementChild;W&&(W.classList.remove("wo-in"),W.classList.add("wo-out"))};xe.innerHTML=`<img class="wo-in" src="${ae}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(N,2e3),setTimeout(()=>{var W;xe.innerHTML=ge?`<img class="wo-in" src="${ge}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((W=V.clubs)==null?void 0:W.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(N,4450),setTimeout(()=>{me.style.display="none",xe.innerHTML="",o=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),Q()},4900)}function j(F){if(o||F<0||F>=e.length||F===E)return;const Q=F>E?1:-1;E=F,B(F,Q)}function C(){j(E+1)}function q(){j(E-1)}function Z(){const F=document.getElementById("card-viewport");if(!F||F._swipeBound)return;F._swipeBound=!0;let Q=0,V=0,ae=0,ge=!1;const me=P=>P.touches?P.touches[0].clientX:P.clientX,xe=P=>P.touches?P.touches[0].clientY:P.clientY,N=P=>{ge=!0,Q=me(P),V=xe(P),ae=0},R=P=>{if(!ge)return;ae=me(P)-Q;const X=xe(P)-V;if(Math.abs(ae)<Math.abs(X))return;const ue=document.getElementById("current-card-wrap");ue&&(ue.style.transition="none",ue.style.transform=`translateX(${ae*.6}px) rotate(${ae*.02}deg)`)},W=()=>{if(!ge)return;ge=!1;const P=document.getElementById("current-card-wrap"),X=55;ae<=-X&&E<e.length-1?C():ae>=X&&E>0?q():P&&(P.style.transition="transform .2s ease",P.style.transform="translateX(0)")};F.addEventListener("pointerdown",N),F.addEventListener("pointermove",R),F.addEventListener("pointerup",W),F.addEventListener("pointercancel",W),F.addEventListener("touchstart",N,{passive:!0}),F.addEventListener("touchmove",R,{passive:!0}),F.addEventListener("touchend",W),F.addEventListener("click",P=>{if(Math.abs(ae)>8)return;const X=F.getBoundingClientRect();P.clientX-X.left>X.width/2?C():q()})}let se=null;function ne(){const F=document.getElementById("fireworks-canvas");if(!F)return;F.width=window.innerWidth,F.height=window.innerHeight;const Q=F.getContext("2d"),V=[];function ae(){const me=Math.random()*F.width,xe=Math.random()*F.height*.6,N=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],R=N[Math.floor(Math.random()*N.length)];for(let W=0;W<60;W++){const P=Math.PI*2/60*W,X=2+Math.random()*5;V.push({x:me,y:xe,vx:Math.cos(P)*X,vy:Math.sin(P)*X,alpha:1,color:R,size:2+Math.random()*3})}}ae(),se=setInterval(ae,600);function ge(){if(document.getElementById("fireworks-canvas")){Q.clearRect(0,0,F.width,F.height);for(let me=V.length-1;me>=0;me--){const xe=V[me];if(xe.x+=xe.vx,xe.y+=xe.vy+.08,xe.vy*=.98,xe.alpha-=.018,xe.alpha<=0){V.splice(me,1);continue}Q.globalAlpha=xe.alpha,Q.fillStyle=xe.color,Q.beginPath(),Q.arc(xe.x,xe.y,xe.size,0,Math.PI*2),Q.fill()}Q.globalAlpha=1,(se!==null||V.length>0)&&requestAnimationFrame(ge)}}ge()}function S(){se!==null&&(clearInterval(se),se=null);const F=document.getElementById("fireworks-canvas");F&&F.getContext("2d").clearRect(0,0,F.width,F.height)}if(r){const F=document.getElementById("reveal-phase"),Q=F==null?void 0:F.querySelector('div[style*="display:flex"][style*="gap:10px"]');Q&&(Q.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(te=document.getElementById("reveal-next"))==null||te.addEventListener("click",()=>{S(),u.remove(),r()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{S(),u.remove(),n("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{S(),u.remove(),n("boosters")})}function Fo(e){var t,n;if(e.card_type==="player"&&e.player)return zo(e);if(e.card_type==="game_changer"){const r=e._gcDef,u=(r==null?void 0:r.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[r==null?void 0:r.color]||s.purple,p=d[r==null?void 0:r.color]||d.purple,i=(r==null?void 0:r.name)||e.gc_type||"Game Changer",a=(r==null?void 0:r.effect)||((t=Zt[e.gc_type])==null?void 0:t.desc)||"",f=r!=null&&r.image_url?`/manager-wars/icons/${r.image_url}`:null,m=((n=Zt[e.gc_type])==null?void 0:n.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${p};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${p}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${i.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${u?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${f?`<img src="${f}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${m}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${a.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Bo(e){var t,n;if((t=e==null?void 0:e.rates)!=null&&t.length){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const u={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};r.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(d=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${s[d.card_type]||d.card_type}</span>
            ${d.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${u[d.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${d.rarity}</span>`:""}
            ${d.note_min||d.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${d.note_min||""}–${d.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(d.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(r),r.addEventListener("click",d=>{d.target===r&&r.remove()}),(n=document.getElementById("odds-close"))==null||n.addEventListener("click",()=>r.remove());return}Do()}function Do(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const qo="simulation",Vi="VOTRE_ZONE_ID";function Go(){switch(qo){case"propellerads":return Ro();case"adsense":return No();default:return pi()}}function pi(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let n=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const r=setInterval(()=>{n--;const u=document.getElementById("ad-cd"),s=document.getElementById("ad-skip");u&&(u.textContent=n),s&&(s.textContent=n>0?`Passer (${n})`:"✓ Continuer"),n<=0&&(clearInterval(r),s&&(s.disabled=!1,s.style.cssText=s.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),s==null||s.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function Ro(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(pi());window.propeller.push({zone_id:Vi,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function No(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(pi());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:Vi,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(n){t(n)}})}async function Po(e,{state:t,navigate:n,toast:r,refreshProfile:u}){var m,b;const{data:s}=await A.from("users").select("*").eq("id",t.user.id).single();s&&(t.profile=s);let d=Array.isArray((m=t.profile)==null?void 0:m.pending_boosters)?[...t.profile.pending_boosters]:[];if(!d.length){await A.from("users").update({onboarding_done:!0}).eq("id",t.user.id),n("home");return}let l=null;try{const o=(await Ri()).find(k=>(k.name||"").toLowerCase().includes("new player"));o&&(l=Pi(o))}catch(E){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',E)}const p=d.length;let i=0;e.innerHTML=`
  <div class="page" style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#0a3d1e,#063015);padding:24px">
    <div style="max-width:420px;text-align:center;color:#fff">
      <div style="font-size:56px;margin-bottom:10px">🎁</div>
      <h2 style="font-size:24px;font-weight:900;margin-bottom:8px">Bienvenue ${t.profile.pseudo} !</h2>
      <p style="font-size:14px;color:rgba(255,255,255,0.7);line-height:1.6;margin-bottom:8px">
        Pour démarrer ton aventure, voici tes cadeaux :
      </p>
      <div style="font-size:14px;color:#FFD700;font-weight:700;line-height:1.8;margin-bottom:24px">
        ⚽ 4 boosters de 5 joueurs<br>
        ⚡ 1 booster Game Changer<br>
        📋 1 booster Formation
      </div>
      <p style="font-size:13px;color:rgba(255,255,255,0.55);margin-bottom:24px">
        Ouvre-les un par un pour découvrir tes cartes !
      </p>
      <button class="btn btn-primary" id="onboard-start" style="width:100%;font-size:16px;padding:14px">
        Ouvrir mon 1er booster 🎉
      </button>
    </div>
  </div>`;const a=async()=>{await A.from("users").update({pending_boosters:d}).eq("id",t.user.id)};async function f(){var M;if(i>=p||!d.length){await A.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),u&&await u(),r("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),n("home");return}const E=d[0],{data:o}=await A.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let k=[];try{if(E.type==="formation")k=await Ui(t.profile,0);else if(E.type==="game_changer")k=await Hi(t.profile,E.count||3,0);else if(l&&((M=l.rates)!=null&&M.length)){const B={...l,cost:0,cardCount:E.count||l.cardCount||5};k=await ei(t.profile,B),E.guaranteeGK&&!t.profile.first_booster_opened&&(k.some(j=>j.player&&j.player.job==="GK")||await Oo(t.profile,k),await A.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else k=await Oi(t.profile,E.count||5,0)}catch(B){r(B.message||"Erreur ouverture booster","error");return}d.shift(),i++,await a();const z=E.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:E.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${i}/${p})`,img:(l==null?void 0:l.img)||"/manager-wars/icons/booster-players.png"};Ki(k,z,n,()=>{f()})}(b=document.getElementById("onboard-start"))==null||b.addEventListener("click",()=>f())}async function Oo(e,t){try{const{data:n}=await A.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(n!=null&&n.length))return;const r=n[Math.floor(Math.random()*n.length)],u=t.findIndex(d=>d.player);if(u===-1)return;const s=t[u];await A.from("cards").update({player_id:r.id}).eq("id",s.id),t[u]={...s,player_id:r.id,player:r}}catch(n){console.warn("[Onboarding] ensureGK échec",n)}}async function Ho(e,t){const{state:n}=t,u=(n.params||{}).matchMode||"vs_ai_easy",s=u.replace("vs_ai_",""),d=u;await si(e,t,u,async({deckId:l,formation:p,starters:i,subsRaw:a,gcCardsEnriched:f,gcDefs:m})=>{try{const b=pt(i,p),E=await Uo(p,s),o=async k=>{try{const{data:z,error:M}=await A.from("matches").insert({home_id:n.profile.id,away_id:null,mode:d,home_deck_id:l,status:"in_progress"}).select().single();if(M){console.error("[MatchIA] Erreur création match:",M),nt(e,"⚠️","Impossible de créer le match ("+M.message+").","Retour",()=>t.navigate("home"));return}const B={gcDefs:m||[],matchId:z==null?void 0:z.id,mode:d,difficulty:s,formation:p,homeTeam:b,aiTeam:E,homeSubs:a,subsUsed:0,maxSubs:Math.min(a.length,3),homeScore:0,aiScore:0,gcCards:k,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:n.profile.club_name||"Vous"};Vo(e,B,t)}catch(z){console.error("[MatchIA] Exception launchMatch:",z),nt(e,"⚠️","Erreur au lancement du match : "+z.message,"Retour",()=>t.navigate("home"))}};if(!f.length){o([]);return}ai(e,f,o)}catch(b){console.error("[MatchIA] Exception setup:",b),nt(e,"⚠️","Erreur de préparation du match : "+b.message,"Retour",()=>t.navigate("home"))}})}async function Uo(e,t){var d,l;const{data:n}=await A.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!n||n.length<11)return Ko(e);const r=lt[e]||lt["4-4-2"],u={GK:[],DEF:[],MIL:[],ATT:[]},s=[...n];for(const p of["GK","DEF","MIL","ATT"]){const i=s.filter(E=>E.job===p),a=s.filter(E=>E.job!==p),f=[...i,...a],m=[];for(let E=0;E<r[p];E++){const o=f[E]||s[E];o&&m.push({cardId:"ai-"+o.id+"-"+E,id:o.id,firstname:o.firstname,name:o.surname_encoded,country_code:o.country_code,club_id:o.club_id,job:o.job,job2:o.job2,note_g:Number(o.note_g)||0,note_d:Number(o.note_d)||0,note_m:Number(o.note_m)||0,note_a:Number(o.note_a)||0,rarity:o.rarity,skin:o.skin,hair:o.hair,hair_length:o.hair_length,clubName:((d=o.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((l=o.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:p})}const b=it(m.length);m.forEach((E,o)=>{E._col=b[o]}),u[p]=m}return u}function Ko(e){const t=lt[e]||lt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},r=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let u=0;for(const s of["GK","DEF","MIL","ATT"]){const d=[];for(let p=0;p<t[s];p++){const i=3+Math.floor(Math.random()*5);d.push({cardId:"fake-"+u,id:"fake-"+u,firstname:"IA",name:r[u%r.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?i:2,note_d:s==="DEF"?i:2,note_m:s==="MIL"?i:2,note_a:s==="ATT"?i:2,rarity:"normal",boost:0,used:!1,_line:s}),u++}const l=it(d.length);d.forEach((p,i)=>{p._col=l[i]}),n[s]=d}return n}function Vo(e,t,n){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${at(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Yo(e,t,n),5e3)}function Yo(e,t,n){const r=t.homeTeam.MIL||[],u=t.aiTeam.MIL||[];function s(o){return o.reduce((k,z)=>k+be(z,"MIL"),0)}function d(o){let k=0;for(let z=0;z<o.length-1;z++){const M=Qe(o[z],o[z+1]);M==="#00ff88"?k+=2:M==="#FFD700"&&(k+=1)}return k}const l=s(r)+d(r),p=s(u)+d(u),i=l>=p;function a(o,k,z,M){return`<div id="duel-row-${M}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${k}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${o.map((B,O)=>{const j=O<o.length-1?Qe(B,o[O+1]):null,C=!j||j==="#ff3333"||j==="#cc2222",q=j==="#00ff88"?"+2":j==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${M}" data-idx="${O}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ue({...B,note:be(B,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${O<o.length-1?`<div class="duel-link duel-link-${M}" data-idx="${O}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${C?"rgba(255,255,255,0.12)":j};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${C?"none":`0 0 8px ${j}`}">
            ${q?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${j}">${q}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${M}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${s(o)} + ${d(o)} liens = <b style="color:#fff">${s(o)+d(o)}</b>
      </div>
    </div>`}e.innerHTML=`
  <div class="match-screen" style="position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
    <style>
      @keyframes duelPulse { 0%{transform:scale(1)} 50%{transform:scale(1.18)} 100%{transform:scale(1)} }
      @keyframes duelGlow { 0%,100%{text-shadow:0 0 12px rgba(255,215,0,0.6)} 50%{text-shadow:0 0 28px rgba(255,215,0,0.95)} }
      @keyframes vsFlash { 0%{opacity:0;transform:scale(2)} 60%{opacity:1;transform:scale(0.9)} 100%{opacity:1;transform:scale(1)} }
      @keyframes winnerSlam { 0%{transform:scale(1)} 35%{transform:translateY(-14px) scale(1.05)} 70%{transform:translateY(10px) scale(1.12,0.92)} 100%{transform:translateY(0) scale(1)} }
      @keyframes crushSquash { 0%{transform:scaleY(1);opacity:1} 55%{transform:scaleY(0.1) translateY(8px);opacity:.5} 100%{transform:scaleY(0);opacity:0} }
      @keyframes shockwave { 0%{transform:translateX(-50%) scale(0.2);opacity:.9} 100%{transform:translateX(-50%) scale(2.4);opacity:0} }
      @keyframes boostFlipIn { 0%{transform:perspective(600px) rotateY(90deg) scale(0.6);opacity:0} 60%{transform:perspective(600px) rotateY(-12deg) scale(1.08);opacity:1} 100%{transform:perspective(600px) rotateY(0) scale(1);opacity:1} }
      @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
    </style>
    <div style="text-align:center;color:#fff">
      <div style="font-size:11px;opacity:.5;letter-spacing:3px;text-transform:uppercase">Duel du milieu de terrain</div>
    </div>

    ${a(r,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${a(u,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const f=()=>{const o=(k,z)=>e.querySelectorAll(k).forEach((M,B)=>{setTimeout(()=>{M.style.opacity="1",M.style.transform="translateY(0) scale(1)"},z+B*90)});o(".duel-card-home",150),o(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((k,z)=>{setTimeout(()=>{k.style.opacity="1"},z*70)}),900),setTimeout(()=>{const k=e.querySelector("#vs-label");k&&(k.style.opacity="1",k.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(z=>z.style.opacity="1")},1250),setTimeout(()=>{m("score-home",l,800),m("score-ai",p,800)},1500)};function m(o,k,z){const M=document.getElementById(o);if(!M)return;const B=performance.now(),O=j=>{const C=Math.min(1,(j-B)/z);M.textContent=Math.round(k*(1-Math.pow(1-C,3))),C<1?requestAnimationFrame(O):M.textContent=k};requestAnimationFrame(O)}requestAnimationFrame(f),t.attacker=i?"home":"ai";const b=i?ri():null;i&&(t.boostCard={value:b}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:r.map(o=>({name:o.name,note:be(o,"MIL"),portrait:Ie(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiPlayers:u.map(o=>({name:o.name,note:be(o,"MIL"),portrait:Ie(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),homeTotal:l,aiTotal:p,text:`Duel milieu : ${t.clubName} ${l} – ${p} IA → ${i?t.clubName+" attaque":"IA attaque"}`});const E=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",ze(e,t,n),t.attacker==="ai"&&setTimeout(()=>ti(e,t,n),800)};setTimeout(()=>{const o=document.getElementById("score-home"),k=document.getElementById("score-ai"),z=document.getElementById(i?"duel-row-home":"duel-row-ai"),M=document.getElementById(i?"duel-row-ai":"duel-row-home"),B=i?o:k,O=i?k:o;B&&(B.style.fontSize="80px",B.style.color=i?"#FFD700":"#ff6b6b",B.style.animation="duelPulse .5s ease"+(i?", duelGlow 1.5s ease infinite .5s":"")),O&&(O.style.opacity="0.25"),setTimeout(()=>{z&&(z.style.transformOrigin="center",z.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",z.style.zIndex="5"),setTimeout(()=>{var C;const j=document.getElementById("duel-shock");if(j){const q=(C=M||z)==null?void 0:C.getBoundingClientRect(),Z=e.querySelector(".match-screen").getBoundingClientRect();q&&(j.style.top=q.top-Z.top+q.height/2+"px"),j.style.animation="shockwave .5s ease-out forwards"}M&&(M.style.transformOrigin="center",M.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var C;const j=document.getElementById("duel-finale");j&&(j.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${i?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${i?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${b}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,j.style.transition="opacity .45s ease",j.style.opacity="1",j.style.pointerEvents="auto",(C=document.getElementById("start-match-btn"))==null||C.addEventListener("click",E))},600)},700)},2800)}function Wo(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(n=>tt(n)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(n=>tt(n)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${tt(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${tt(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function ze(e,t,n){var B,O,j,C,q,Z,se,ne;const r=t.selected.map(S=>S.cardId),u=t.usedSubIds||[],s=t.homeSubs.filter(S=>!u.includes(S.cardId)),l=Object.values(t.homeTeam).flat().filter(S=>S.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs,p=!["GK","DEF","MIL","ATT"].some(S=>(t.aiTeam[S]||[]).some(K=>!K.used)),i=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(S=>!S.used),a=t.phase==="attack"&&p&&i.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(S=>!S.used).map(S=>S.cardId):[];t.log[t.log.length-1];const f=t.phase==="ai-attack"||t.phase==="ai-defense",m=t.phase==="attack",b=t.phase==="defense",E=t.phase==="finished",o=t.gcCards.filter(S=>!t.usedGc.includes(S.id)),k=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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

  <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">

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
    <div id="last-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const K=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${et((K.players||[]).map(te=>({...te,used:!1})),"#ff6b6b",K.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const K=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${et((K.players||[]).map(te=>({...te,used:!1})),"#00ff88",K.total)}
          </div>`}const S=t.log[t.log.length-1];return S?'<div style="padding:2px 4px">'+Wo(S)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const S=window.innerWidth>=700,K=(N,R,W)=>{var Se,Ke;const P=(t.gcDefs||[]).find(c=>c.name===N.gc_type),X={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[P==null?void 0:P.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ue={purple:"#b06ce0",light_blue:"#00d4ef"}[P==null?void 0:P.color]||"#b06ce0",ie=(P==null?void 0:P.name)||N.gc_type,Ae=(P==null?void 0:P.effect)||((Se=Be[N.gc_type])==null?void 0:Se.desc)||"",ke=P!=null&&P.image_url?`/manager-wars/icons/${P.image_url}`:null,ve=((Ke=Be[N.gc_type])==null?void 0:Ke.icon)||"⚡",_e=Math.round(W*.22),we=Math.round(W*.22),Le=W-_e-we,Re=ie.length>12?7:9;return`<div class="gc-mini" data-gc-id="${N.id}" data-gc-type="${N.gc_type}"
          style="box-sizing:border-box;width:${R}px;height:${W}px;border-radius:10px;border:2px solid ${ue};background:${X};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${_e}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Re}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${R-6}px">${ie}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Le}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${ke?`<img src="${ke}" style="max-width:${R-10}px;max-height:${Le-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Le*.55)}px">${ve}</span>`}
          </div>
          <div style="height:${we}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ae.slice(0,38)}</span>
          </div>
        </div>`},te=(N,R)=>{var W;return`<div id="boost-card"
          style="box-sizing:border-box;width:${N}px;height:${R}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(R*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(R*.2)}px">⚡</div>
            <div style="font-size:${Math.round(R*.09)}px;color:#000;font-weight:900">+${(W=t.boostCard)==null?void 0:W.value}</div>
          </div>`},F=(N,R)=>R?te(130,175):K(N,130,175),Q=(N,R)=>R?te(68,95):K(N,68,95),V=S?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ae=E?`<button id="btn-results" style="${V};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${V};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:m?`<button id="btn-action" style="${V};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:b?`<button id="btn-action" style="${V};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${V};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,ge=m||b?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",me=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${S?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(N=>`<div class="sub-btn-col" data-sub-id="${N.cardId}" style="cursor:pointer;flex-shrink:0">${Ue(N,76,100)}</div>`).join("")}
      </div>`,xe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${st(t.homeTeam,t.formation,t.phase,r,300,300,a)}
        </div>
      </div>`;return S?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${me}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${xe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ae}${ge}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${o.map(N=>F(N,!1)).join("")}
            ${k?F(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${st(t.homeTeam,t.formation,t.phase,r,300,300,a)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${o.map(N=>Q(N,!1)).join("")}
            ${k?Q(null,!0):""}
            <div id="sub-btn-main" style="cursor:${l?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${l?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${l?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${l?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${s.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${t.subsUsed}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${t.subsUsed}/${t.maxSubs} rempl.</div>
            </div>
          </div>
          <div>${ae}${ge}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(S=>{var K,te,F;if(S.type==="duel"){const Q=S.isGoal,V=S.homeScored?"#FFD700":Q?"#ff6b6b":"rgba(255,255,255,0.3)",ae=S.homeScored?"⚽ BUT !":Q?"⚽ BUT IA !":(K=S.homePlayers)!=null&&K.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${Q?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${V};margin-bottom:4px">
                <div style="font-size:9px;color:${V};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ae}</div>
                ${(te=S.homePlayers)!=null&&te.length?`<div style="margin-bottom:3px">${et(S.homePlayers,"rgba(255,255,255,0.7)",S.homeTotal)}</div>`:""}
                ${(F=S.aiPlayers)!=null&&F.length?`<div style="opacity:0.7">${et(S.aiPlayers,"#ff6b6b",S.aiTotal)}</div>`:""}
              </div>`}return S.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${S.outPlayer?Ue({...S.outPlayer,used:!0,_line:S.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${S.inPlayer?Ue({...S.inPlayer,_line:S.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:S.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${S.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${S.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function z(){const S=e.querySelector(".match-screen");if(!S)return;const K=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);S.style.bottom="auto",S.style.height=K+"px",S.style.minHeight=K+"px",S.style.maxHeight=K+"px",S.style.overflow="hidden";const te=e.querySelector("#mobile-action-bar"),F=e.querySelector("#mobile-play-area");te&&F&&(F.style.paddingBottom=te.offsetHeight+"px")}if(z(),setTimeout(z,120),setTimeout(z,400),setTimeout(z,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",z),window.visualViewport.addEventListener("scroll",z)),window.addEventListener("resize",z)),function(){const K=e.querySelector(".terrain-wrapper svg");K&&(K.removeAttribute("width"),K.removeAttribute("height"),K.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",K.setAttribute("viewBox","-26 -26 352 352"),K.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const S=e.querySelector(".terrain-wrapper svg");S&&(S.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let S=!1,K=30;const te=()=>document.getElementById("match-timer"),F=()=>{const Q=te();if(!Q)return;const V=String(Math.floor(K/60)).padStart(2,"0"),ae=String(K%60).padStart(2,"0");Q.textContent=` ${V}:${ae}`,Q.style.color=S?"#ff2222":"#ff9500",Q.style.fontWeight="900"};F(),t._timerInt=setInterval(()=>{if(K--,K<0)if(!S)S=!0,K=15,F();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const Q=document.createElement("div");Q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",Q.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(Q),setTimeout(()=>{Q.remove(),It(e,t,n)},2500)}else F()},1e3)}(B=document.getElementById("match-quit"))==null||B.addEventListener("click",()=>{De(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,It(e,t,n))}),(O=document.getElementById("view-ai"))==null||O.addEventListener("click",()=>an(t,n)),(j=document.getElementById("toggle-history"))==null||j.addEventListener("click",()=>{var S;(S=document.getElementById("match-history-panel"))==null||S.classList.add("open")}),(C=document.getElementById("close-history"))==null||C.addEventListener("click",()=>{var S;(S=document.getElementById("match-history-panel"))==null||S.classList.remove("open")}),(q=document.getElementById("btn-action"))==null||q.addEventListener("click",()=>{t.selected.length!==0&&(m?Jo(e,t,n):b&&Qo(e,t,n))}),(Z=document.getElementById("btn-results"))==null||Z.addEventListener("click",()=>It(e,t,n)),e.querySelectorAll(".match-slot-hit").forEach(S=>{S.addEventListener("click",()=>Xo(S,t,e,n))}),e.querySelectorAll(".match-used-hit").forEach(S=>{S.addEventListener("click",()=>Yt(e,t,n,null,S.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(S=>{S.addEventListener("click",()=>tn(S.dataset.gcId,S.dataset.gcType,e,t,n))}),(se=document.getElementById("boost-card"))==null||se.addEventListener("click",()=>rn(e,t,n)),e.querySelectorAll(".sub-btn-col").forEach(S=>{S.addEventListener("click",()=>Yt(e,t,n,S.dataset.subId))}),(ne=document.getElementById("sub-btn-main"))==null||ne.addEventListener("click",()=>Yt(e,t,n))}function Xo(e,t,n,r){const u=e.dataset.cardId,s=e.dataset.role,d=t.selected.findIndex(l=>l.cardId===u);if(d!==-1)t.selected.splice(d,1);else{if(t.selected.length>=3){r.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(p=>p.cardId===u);l&&t.selected.push({...l,_role:s,_line:s})}ze(n,t,r)}function ui(e,t,n){e.matchId&&A.from("matches").update({last_player_id:n}).eq("id",e.matchId).then(()=>{})}function Jo(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const r=!["GK","DEF","MIL","ATT"].some(d=>(t.aiTeam[d]||[]).some(l=>!l.used)),u=t.selected.map(d=>{const l=(t.homeTeam[d._role]||[]).find(i=>i.cardId===d.cardId)||d,p=r&&["GK","DEF"].includes(d._role);return{...l,_line:d._role,...p?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=Rt(u,t.modifiers.home);t.pendingAttack={...s,players:[...u],side:"home"},t.selected.forEach(d=>{const l=(t.homeTeam[d._role]||[]).find(p=>p.cardId===d.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(d=>d.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",ze(e,t,n),setTimeout(()=>Zo(e,t,n),1200)}function Qo(e,t,n){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,n,n.state.profile.id);const r=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l,_line:l._role})),u=Nt(r,t.modifiers.home);t.selected.forEach(l=>{const p=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId);p&&(p.used=!0)});const s=Pt(t.pendingAttack.total,u.total,t.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:Ie(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const p=(t.homeTeam[l._role]||[]).find(i=>i.cardId===l.cardId)||l;return{name:p.name,note:(p._line==="GK"?Number(p.note_g)||0:p._line==="MIL"?Number(p.note_m)||0:Number(p.note_d)||0)+(p.boost||0),portrait:Ie(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo}}),homeTotal:u.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier ! But annulé.",t.log.push(d);else if(s.goal){t.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${u.total})`,t.log.push(d),t.selected=[],t.modifiers.home={},t.pendingAttack=null,ze(e,t,n),qt(d.aiPlayers,t.homeScore,t.aiScore,!1,()=>{dt(e,t,n,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${u.total} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.selected=[],t.modifiers.home={},t.pendingAttack=null,dt(e,t,n,"home-attack")}function ti(e,t,n){ui(t,n,null);const r=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],u=Li(r,"attack",t.difficulty);if(!u.length){Ft(e,t,n);return}const s=Rt(u,t.modifiers.ai);t.pendingAttack={...s,players:u,side:"ai"},u.forEach(i=>{i.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${u.map(i=>i.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const d=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(i=>!i.used),p=(t.homeSubs||[]).filter(i=>!(t.usedSubIds||[]).includes(i.cardId)).length>0&&t.subsUsed<t.maxSubs;if(d.length===0&&!p){t.aiScore++;const i={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:u.map(a=>({name:a.name,note:a._line==="MIL"?a.note_m:a.note_a,portrait:Ie(a),job:a.job,country_code:a.country_code,rarity:a.rarity,clubName:a.clubName,clubLogo:a.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(i),t.pendingAttack=null,ze(e,t,n),qt(i.aiPlayers,t.homeScore,t.aiScore,!1,()=>{dt(e,t,n,"home-attack")});return}t.phase="defense",ze(e,t,n)}function Zo(e,t,n){var i,a;const r=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],u=Li(r,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(t.aiTeam[f]||[]).filter(m=>!m.used)).length){t.homeScore++;const m={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((i=t.pendingAttack)==null?void 0:i.players)||[]).map(b=>({name:b.name,note:be(b,b._line||b.job),portrait:Ie(b),job:b.job,country_code:b.country_code,rarity:b.rarity,clubName:b.clubName,clubLogo:b.clubLogo})),homeTotal:((a=t.pendingAttack)==null?void 0:a.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(m),t.modifiers.ai={},t.pendingAttack=null,ze(e,t,n),qt(m.homePlayers,t.homeScore,t.aiScore,!0,()=>{dt(e,t,n,"ai-attack")});return}const d=u.length>0?Nt(u,t.modifiers.ai).total:0;u.forEach(f=>{f.used=!0});const l=Pt(t.pendingAttack.total,d,t.modifiers.ai),p={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(f=>({name:f.name,note:f._line==="MIL"?f.note_m:f.note_a,portrait:Ie(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),aiPlayers:u.map(f=>({name:f.name,note:f._line==="GK"?f.note_g:f._line==="MIL"?f.note_m:f.note_d,portrait:Ie(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:d,isGoal:!1,homeScored:!1,text:""};if(l.shielded)p.text="🛡️ Bouclier IA !",t.log.push(p);else if(l.goal){t.homeScore++,p.isGoal=!0,p.homeScored=!0,p.text=`⚽ BUT ! (${t.pendingAttack.total} > ${d})`,t.log.push(p),t.modifiers.ai={},t.pendingAttack=null,ze(e,t,n),qt(p.homePlayers,t.homeScore,t.aiScore,!0,()=>{dt(e,t,n,"ai-attack")});return}else p.text=`🧤 IA défend (${d} ≥ ${t.pendingAttack.total})`,t.log.push(p);t.modifiers.ai={},t.pendingAttack=null,dt(e,t,n,"ai-attack")}function dt(e,t,n,r){if(t.round++,Yi(t)){It(e,t,n);return}if(r==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Ft(e,t,n);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Ft(e,t,n);return}setTimeout(()=>ti(e,t,n),100);return}t.phase="attack",ze(e,t,n)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Ft(e,t,n);return}t.phase="ai-attack",ze(e,t,n),setTimeout(()=>ti(e,t,n),800)}}function Yi(e){const t=["MIL","ATT","GK","DEF"].some(r=>(e.homeTeam[r]||[]).some(u=>!u.used)),n=["MIL","ATT","GK","DEF"].some(r=>(e.aiTeam[r]||[]).some(u=>!u.used));return!t&&!n}function Ft(e,t,n){Yi(t)?It(e,t,n):(t.phase="attack",ze(e,t,n))}function en(e,t,n){const r=document.createElement("div");r.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const u=Ie(e),s=Ie(t),d=ct[e.job]||"#555",l=ct[t.job]||"#555",p=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,i=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;r.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${d};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${u?`<img src="${u}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${p}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${l};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${s?`<img src="${s}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${i}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(r);let a=!1;const f=()=>{a||(a=!0,r.remove(),n())};r.addEventListener("click",f),setTimeout(f,2e3)}function kt(e,t="rgba(0,0,0,0.8)"){const n=document.createElement("div");n.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),2200)}function Yt(e,t,n,r=null,u=null){var b,E;if(t.phase!=="attack"){kt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){kt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const s=Object.entries(t.homeTeam).flatMap(([o,k])=>(k||[]).filter(z=>z.used).map(z=>({...z,_line:z._line||o}))),d=t.homeSubs.filter(o=>!t.usedSubIds.includes(o.cardId));if(!s.length){kt("Aucun joueur utilisé à remplacer");return}if(!d.length){kt("Aucun remplaçant disponible");return}let l=Math.max(0,s.findIndex(o=>o.cardId===u));const p=((b=s[l])==null?void 0:b._line)||((E=s[l])==null?void 0:E.job);let i=r?Math.max(0,d.findIndex(o=>o.cardId===r)):Math.max(0,d.findIndex(o=>o.job===p)),a=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function m(){var j,C,q,Z,se,ne;const o=s[l],k=d[i],z=Math.min(130,Math.round((window.innerWidth-90)/2)),M=Math.round(z*1.35),B=S=>`background:rgba(255,255,255,0.12);border:none;color:${S?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${S?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${B(i===0)}" ${i===0?"disabled":""}>▲</button>
        <div>${k?Ue({...k,used:!1,boost:0},z,M):"<div>—</div>"}</div>
        <button id="in-down" style="${B(i>=d.length-1)}" ${i>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${i+1}/${d.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${B(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${o?Ue({...o,used:!1,boost:0},z,M):"<div>—</div>"}</div>
        <button id="out-down" style="${B(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(j=f.querySelector("#sub-close"))==null||j.addEventListener("click",()=>f.remove()),(C=f.querySelector("#out-up"))==null||C.addEventListener("click",()=>{l>0&&(l--,m())}),(q=f.querySelector("#out-down"))==null||q.addEventListener("click",()=>{l<s.length-1&&(l++,m())}),(Z=f.querySelector("#in-up"))==null||Z.addEventListener("click",()=>{i>0&&(i--,m())}),(se=f.querySelector("#in-down"))==null||se.addEventListener("click",()=>{i<d.length-1&&(i++,m())});const O=(S,K,te,F)=>{const Q=f.querySelector("#"+S);if(!Q)return;let V=0;Q.addEventListener("touchstart",ae=>{V=ae.touches[0].clientY},{passive:!0}),Q.addEventListener("touchend",ae=>{const ge=ae.changedTouches[0].clientY-V;if(Math.abs(ge)<30)return;const me=K();ge<0&&me<F-1?(te(me+1),m()):ge>0&&me>0&&(te(me-1),m())},{passive:!0})};O("in-panel",()=>i,S=>i=S,d.length),O("out-panel",()=>l,S=>l=S,s.length),(ne=f.querySelector("#sub-confirm"))==null||ne.addEventListener("click",S=>{if(S.preventDefault(),S.stopPropagation(),a)return;a=!0;const K=s[l],te=d[i];if(!K||!te)return;let F=null,Q=-1;for(const[ae,ge]of Object.entries(t.homeTeam)){const me=(ge||[]).findIndex(xe=>xe.cardId===K.cardId);if(me!==-1){F=ae,Q=me;break}}if(Q===-1||!F){kt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const V={...te,_line:F,_col:K._col||0,used:!1,boost:0};t.homeTeam[F].splice(Q,1,V),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(te.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:K.name,firstname:K.firstname,note:be(K,F),portrait:Ie(K),job:K.job,country_code:K.country_code,rarity:K.rarity,clubName:K.clubName,clubLogo:K.clubLogo},inPlayer:{name:te.name,firstname:te.firstname,note:be(te,F),portrait:Ie(te),job:te.job,country_code:te.country_code,rarity:te.rarity,clubName:te.clubName,clubLogo:te.clubLogo},text:`🔄 ${te.firstname} ${te.name} remplace ${K.firstname} ${K.name}`}),f.remove(),en(K,te,()=>ze(e,t,n))})}document.body.appendChild(f),m()}function tn(e,t,n,r,u){var E,o;const s=(r.gcDefs||[]).find(k=>k.name===t),d=Be[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",p={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",i=(s==null?void 0:s.name)||t,a=(s==null?void 0:s.effect)||d.desc,f=s!=null&&s.image_url?`/manager-wars/icons/${s.image_url}`:null,m=d.icon||"⚡",b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",b.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${p};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${p}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${i.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${i}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${f?`<img src="${f}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${m}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${a}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(b),(E=b.querySelector("#gc-back"))==null||E.addEventListener("click",()=>b.remove()),(o=b.querySelector("#gc-use"))==null||o.addEventListener("click",()=>{b.remove(),nn(e,t,n,r,u)})}function jt(e,t,n,r,u,s){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function p(){var i,a;d.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${n}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(f=>{const m=f._line||f.job||"MIL",b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[m]||"#555",E=be(f,m)+(f.boost||0),o=l.find(k=>k.cardId===f.cardId);return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${o?"#FFD700":"rgba(255,255,255,0.25)"};background:${b};overflow:hidden;cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${E}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${m}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(i=d.querySelector("#gc-picker-close"))==null||i.addEventListener("click",()=>d.remove()),d.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const m=f.dataset.cid,b=e.find(o=>o.cardId===m);if(!b)return;const E=l.findIndex(o=>o.cardId===m);E>-1?l.splice(E,1):l.length<t&&l.push(b),p()})}),(a=d.querySelector("#gc-picker-confirm"))==null||a.addEventListener("click",()=>{d.remove(),s(l)})}p(),document.body.appendChild(d)}const on={BOOST_STAT:({value:e=1,count:t=1,roles:n=[]},r,u,s)=>{const d=Object.entries(r.homeTeam).filter(([l])=>!n.length||n.includes(l)).flatMap(([l,p])=>p.filter(i=>!i.used).map(i=>({...i,_line:l})));return d.length?(jt(d,t,`Choisir ${t} joueur(s) à booster (+${e})`,u,r,l=>{l.forEach(p=>{const i=(r.homeTeam[p._line]||[]).find(a=>a.cardId===p.cardId);i&&(i.boost=(i.boost||0)+e,r.log.push({text:`⚡ +${e} sur ${i.name}`,type:"info"}))}),ze(u,r,s)}),!0):(r.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),ze(u,r,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:n=[],target:r="ai"},u,s,d)=>{const l=r==="home"?u.homeTeam:u.aiTeam,p=r==="ai"?"adverse":"allié",i=Object.entries(l).filter(([a])=>!n.length||n.includes(a)).flatMap(([a,f])=>f.filter(m=>!m.used).map(m=>({...m,_line:a})));return i.length?(jt(i,t,`Choisir ${t} joueur(s) ${p}(s) à débuffer (-${e})`,s,u,a=>{a.forEach(f=>{const b=((r==="home"?u.homeTeam:u.aiTeam)[f._line]||[]).find(E=>E.cardId===f.cardId);b&&(b.boost=(b.boost||0)-e,u.log.push({text:`🎯 -${e} sur ${b.name}${r==="ai"?" (IA)":""}`,type:"info"}))}),ze(s,u,d)}),!0):(u.log.push({text:`🎯 Aucun joueur ${p} disponible`,type:"info"}),ze(s,u,d),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:n="ai"},r,u,s)=>{const d=n==="home"?r.homeTeam:r.aiTeam,l=n==="ai"?"adverse":"allié",p=Object.entries(d).filter(([i])=>!t.length||t.includes(i)).flatMap(([i,a])=>a.filter(f=>!f.used).map(f=>({...f,_line:i})));return p.length?(jt(p,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,u,r,i=>{i.forEach(a=>{const m=((n==="home"?r.homeTeam:r.aiTeam)[a._line]||[]).find(b=>b.cardId===a.cardId);m&&(m.used=!0,r.log.push({text:`❌ ${m.name}${n==="ai"?" (IA)":""} exclu !`,type:"info"}))}),ze(u,r,s)}),!0):(r.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),ze(u,r,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},n,r,u)=>{const s=Object.entries(n.homeTeam).filter(([d])=>!t.length||t.includes(d)).flatMap(([d,l])=>l.filter(p=>p.used).map(p=>({...p,_line:d})));return s.length?(jt(s,e,`Choisir ${e} joueur(s) à ressusciter`,r,n,d=>{d.forEach(l=>{const p=(n.homeTeam[l._line]||[]).find(i=>i.cardId===l.cardId);p&&(p.used=!1,n.log.push({text:`💫 ${p.name} ressuscité !`,type:"info"}))}),ze(r,n,u)}),!0):(n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),ze(r,n,u),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function nn(e,t,n,r,u){r.usedGc.push(e);const s=r.gcDefs||[],d=s.find(p=>p.name===t)||s.find(p=>{var i;return((i=p.name)==null?void 0:i.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(d!=null&&d.effect_type&&d.effect_type!=="CUSTOM"){const p=on[d.effect_type];p?p(d.effect_params||{},r,n,u)||(l=!0):(u.toast(`Effet "${d.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":r.modifiers.home.doubleAttack=!0,r.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":r.modifiers.home.shield=!0,r.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const p=Object.entries(r.homeTeam).flatMap(([i,a])=>(a||[]).filter(f=>f.used).map(f=>({...f,_line:i})));p.length?(p[0].used=!1,r.log.push({text:`💫 ${p[0].name} ressuscité !`,type:"info"})):r.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":r.modifiers.ai.stolenNote=(r.modifiers.ai.stolenNote||0)+1,r.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const p=[...r.aiTeam.ATT||[],...r.aiTeam.MIL||[]].filter(i=>!i.used);if(p.length){const i=p.sort((a,f)=>be(f,"ATT")-be(a,"ATT"))[0];i.used=!0,r.log.push({text:`❄️ ${i.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":r.maxSubs++,r.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}A.from("cards").delete().eq("id",e).then(()=>{}),l&&ze(n,r,u)}function rn(e,t,n){const r=Object.values(t.homeTeam).flat().filter(u=>!u.used);if(!r.length){n.toast("Aucun joueur actif à booster","error");return}n.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${r.map(u=>`
        <div class="player-boost-opt" data-card-id="${u.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${ct[u.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${be(u,u._line||u.job)}</div>
          <div style="flex:1"><b>${u.firstname} ${u.name}</b><div style="font-size:11px;color:#888">${u._line||u.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(u=>{u.addEventListener("click",()=>{const s=u.dataset.cardId;for(const d of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[d]||[]).find(p=>p.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,n.closeModal(),ze(e,t,n)})})}function qt(e,t,n,r,u){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const d=Array.from({length:10},(i,a)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${a%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][a%8]}
    </div>`).join("");s.innerHTML=`
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${d}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${r?"BUT !":"BUT IA !"}
  </div>
  <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
    <span style="animation:ballIn 0.8s ease 0.35s both">⚽</span>
    <span style="font-size:36px">🥅</span>
  </div>
  <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn 0.4s ease 0.75s both;letter-spacing:4px;position:relative;z-index:1">
    ${t} – ${n}
  </div>
  ${e!=null&&e.length?`
  <div style="display:flex;gap:10px;animation:scoreIn 0.4s ease 1s both;position:relative;z-index:1">
    ${e.map(i=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${ct[i.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${i.portrait?`<img src="${i.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(i.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const p=()=>{l||(l=!0,s.remove(),setTimeout(()=>u(),50))};s.addEventListener("click",p),setTimeout(p,3500)}async function It(e,t,n){var a,f;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:r}=n,u=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,d=u?"victoire":s?"nul":"defaite",l=io(t.mode,d);t.matchId&&await A.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:u?r.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const p={credits:(r.profile.credits||0)+l,matches_played:(r.profile.matches_played||0)+1};u?p.wins=(r.profile.wins||0)+1:s?p.draws=(r.profile.draws||0)+1:p.losses=(r.profile.losses||0)+1,await A.from("users").update(p).eq("id",r.profile.id),await n.refreshProfile();const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",i.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${u?"🏆":s?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${u?"Victoire !":s?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${l.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(i),(a=document.getElementById("res-home"))==null||a.addEventListener("click",()=>{i.remove(),De(e),n.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{i.remove(),De(e),n.navigate("match",{matchMode:t.mode})})}function an(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${at(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function sn(e,t){await si(e,t,"random",({deckId:n,formation:r,starters:u,subsRaw:s,gcCardsEnriched:d,gcDefs:l})=>{const p=i=>dn(e,t,n,r,u,s,i,l||[]);if(!d.length){p([]);return}ai(e,d,p)})}async function dn(e,t,n,r,u,s,d=[],l=[]){var M;const{state:p,navigate:i,toast:a}=t;let f=!1,m=null;We(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const b=async(B=!0)=>{f=!0,m&&(A.removeChannel(m),m=null),B&&await A.rpc("cancel_matchmaking",{p_user_id:p.profile.id}).catch(()=>{})};(M=document.getElementById("mm-cancel"))==null||M.addEventListener("click",async()=>{try{await b(!0)}catch{}De(e),i("home")});const E=async(B,O,j)=>{if(f)return;f=!0,m&&(A.removeChannel(m),m=null);const C=document.getElementById("mm-status");C&&(C.textContent="Adversaire trouvé !"),await new Promise(q=>setTimeout(q,600)),e.isConnected&&ln(e,t,B,j,d,l)},{data:o,error:k}=await A.rpc("try_matchmake",{p_user_id:p.profile.id,p_deck_id:n});if(k||!(o!=null&&o.success)){a("Erreur de matchmaking","error"),De(e),i("home");return}if(o.matched){E(o.match_id,o.opponent_id,!1);return}const z=document.getElementById("mm-status");z&&(z.textContent="En attente d'un autre joueur..."),m=A.channel("matchmaking-"+p.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${p.profile.id}`},B=>{const O=B.new;O.status==="matched"&&O.match_id&&E(O.match_id,O.matched_with,!0)}).subscribe()}async function ln(e,t,n,r,u=[],s=[]){const{state:d,navigate:l,toast:p}=t,i=r?"p1":"p2",a=r?"p2":"p1",f=(u||[]).map(c=>c.id),m=(u||[]).map(c=>({id:c.id,gc_type:c.gc_type,_gcDef:c._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:b}=await A.from("matches").select("*").eq("id",n).single();if(!b){p("Match introuvable","error"),l("home");return}async function E(){const[{data:c},{data:g},{data:h},{data:y}]=await Promise.all([A.rpc("get_deck_for_match",{p_deck_id:b.home_deck_id}),A.rpc("get_deck_for_match",{p_deck_id:b.away_deck_id}),A.from("users").select("id,pseudo,club_name").eq("id",b.home_id).single(),A.from("users").select("id,pseudo,club_name").eq("id",b.away_id).single()]),x=$=>({cardId:$.card_id,position:$.position,id:$.id,firstname:$.firstname,name:$.surname_encoded,country_code:$.country_code,club_id:$.club_id,job:$.job,job2:$.job2,note_g:Number($.note_g)||0,note_d:Number($.note_d)||0,note_m:Number($.note_m)||0,note_a:Number($.note_a)||0,rarity:$.rarity,skin:$.skin,hair:$.hair,hair_length:$.hair_length,clubName:$.club_encoded_name||null,clubLogo:$.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),v=((c==null?void 0:c.starters)||[]).map($=>x($)),w=((g==null?void 0:g.starters)||[]).map($=>x($)),_=(c==null?void 0:c.formation)||"4-4-2",I=(g==null?void 0:g.formation)||"4-4-2";return{p1Team:pt(v,_),p2Team:pt(w,I),p1Subs:((c==null?void 0:c.subs)||[]).map($=>x($)),p2Subs:((g==null?void 0:g.subs)||[]).map($=>x($)),p1Formation:_,p2Formation:I,p1Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:r?f:[],gc_p2:r?[]:f,gcCardsFull_p1:r?m:[],gcCardsFull_p2:r?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let o=b.game_state&&Object.keys(b.game_state).length?b.game_state:null;if(!o)if(r){o=await E();const{data:c}=await A.from("matches").select("game_state").eq("id",n).single();!(c!=null&&c.game_state)||!Object.keys(c.game_state).length?await A.from("matches").update({game_state:o,turn_user_id:b.home_id}).eq("id",n):o=c.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let c=0;c<30&&!o;c++){await new Promise(h=>setTimeout(h,400));const{data:g}=await A.from("matches").select("game_state").eq("id",n).single();g!=null&&g.game_state&&Object.keys(g.game_state).length&&(o=g.game_state)}if(!o){p("Erreur de synchronisation","error"),l("home");return}o.gc_p2=f,o.gcCardsFull_p2=m,await A.from("matches").update({game_state:o}).eq("id",n)}let k=!1,z=null,M=!1;const B=new Set,O=new Set;function j(c){var $,L;try{A.removeChannel(C)}catch{}const g=o[i+"Score"]||0,h=o[a+"Score"]||0;let y,x;c.winner_id?(y=c.winner_id===d.profile.id,x=!1):c.forfeit?(y=g>h,x=!1):(x=g===h,y=g>h),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=x?"🤝":y?"🏆":"😞",_=x?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",I=x?"#fff":y?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${_}</div>
      <div style="font-size:18px">${o[i+"Name"]} ${g} – ${h} ${o[a+"Name"]}</div>
      ${c.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(L=v.querySelector("#pvp-end-home"))==null||L.addEventListener("click",()=>{v.remove(),De(e),l("home")})}const C=A.channel("pvp-match-"+n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${n}`},c=>{const g=c.new;try{if(g.status==="finished"||g.forfeit){if(k)return;k=!0,z&&(clearInterval(z),z=null),g.game_state&&(o=g.game_state),j(g);return}if(g.game_state){const h=o;o=g.game_state;const y=o._lastGC;if(y&&y.seq&&!O.has(y.seq)&&(O.add(y.seq),y.by!==i)){me(y.type,y.by,()=>F());return}const x=h[i+"Score"]||0,v=h[a+"Score"]||0,w=o[i+"Score"]||0,_=o[a+"Score"]||0,I=w>x,$=_>v;if((I||$)&&!B.has(o.round)){B.add(o.round);const L=[...o.log||[]].reverse().find(U=>U.isGoal),D=((L==null?void 0:L.homePlayers)||[]).map(U=>({name:U.name,note:U.note,portrait:U.portrait,job:U.job}));ge(D,w,_,I,()=>F());return}F()}}catch(h){console.error("[PvP] crash:",h)}}).subscribe();async function q(c){Object.assign(o,c),o.lastActionAt=new Date().toISOString();const{error:g}=await A.from("matches").update({game_state:o}).eq("id",n);g&&p("Erreur de synchronisation","error");try{F()}catch(h){console.error("[PvP] renderPvpScreen crash:",h)}}async function Z(){if(k)return;k=!0,z&&(clearInterval(z),z=null);const c=r?b.away_id:b.home_id,g=r?"p2":"p1",h=r?"p1":"p2",y={...o,[g+"Score"]:3,[h+"Score"]:0,phase:"finished"};try{await A.from("matches").update({status:"finished",forfeit:!0,winner_id:c,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",n)}catch{}try{A.removeChannel(C)}catch{}setTimeout(()=>{De(e),l("home")},800)}const se={BOOST_STAT:({value:c=1,count:g=1,roles:h=[]},y,x)=>{const v=y[i+"Team"],w=Object.entries(v).filter(([_])=>!h.length||h.includes(_)).flatMap(([_,I])=>I.filter($=>!$.used).map($=>({...$,_line:_})));if(!w.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),x(y);return}ne(w,g,`Choisir ${g} joueur(s) à booster (+${c})`,_=>{_.forEach(I=>{const $=(v[I._line]||[]).find(L=>L.cardId===I.cardId);$&&($.boost=($.boost||0)+c,y.log.push({text:`⚡ +${c} sur ${$.name}`,type:"info"}))}),y[i+"Team"]=v,x(y)})},DEBUFF_STAT:({value:c=1,count:g=1,roles:h=[],target:y="ai"},x,v)=>{const w=y==="home"?i:a,_=x[w+"Team"],I=y==="home"?"allié":"adverse",$=Object.entries(_).filter(([L])=>!h.length||h.includes(L)).flatMap(([L,D])=>D.filter(U=>!U.used).map(U=>({...U,_line:L})));if(!$.length){x.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),v(x);return}ne($,g,`Choisir ${g} joueur(s) ${I}(s) (-${c})`,L=>{L.forEach(D=>{const U=(_[D._line]||[]).find(re=>re.cardId===D.cardId);U&&(U.boost=(U.boost||0)-c,x.log.push({text:`🎯 -${c} sur ${U.name}`,type:"info"}))}),x[w+"Team"]=_,v(x)})},GRAY_PLAYER:({count:c=1,roles:g=[],target:h="ai"},y,x)=>{const v=h==="home"?i:a,w=y[v+"Team"],_=h==="home"?"allié":"adverse",I=Object.entries(w).filter(([$])=>!g.length||g.includes($)).flatMap(([$,L])=>L.filter(D=>!D.used).map(D=>({...D,_line:$})));if(!I.length){y.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),x(y);return}ne(I,c,`Choisir ${c} joueur(s) ${_}(s) à exclure`,$=>{$.forEach(L=>{const D=(w[L._line]||[]).find(U=>U.cardId===L.cardId);D&&(D.used=!0,y.log.push({text:`❌ ${D.name} exclu !`,type:"info"}))}),y[v+"Team"]=w,x(y)})},REVIVE_PLAYER:({count:c=1,roles:g=[]},h,y)=>{const x=h[i+"Team"],v=Object.entries(x).filter(([w])=>!g.length||g.includes(w)).flatMap(([w,_])=>_.filter(I=>I.used).map(I=>({...I,_line:w})));if(!v.length){h.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(h);return}ne(v,c,`Choisir ${c} joueur(s) à ressusciter`,w=>{w.forEach(_=>{const I=(x[_._line]||[]).find($=>$.cardId===_.cardId);I&&(I.used=!1,h.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),h[i+"Team"]=x,y(h)})},REMOVE_GOAL:({},c,g)=>{const h=a+"Score";c[h]>0?(c[h]--,c.log.push({text:"🚫 Dernier but annulé !",type:"info"})):c.log.push({text:"🚫 Aucun but à annuler",type:"info"}),g(c)},ADD_GOAL_DRAW:({},c,g)=>{c[i+"Score"]===c[a+"Score"]?(c[i+"Score"]++,c.log.push({text:"🎯 But bonus !",type:"info"})):c.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),g(c)},ADD_SUB:({value:c=1},g,h)=>{g.maxSubs=(g.maxSubs||3)+c,g.log.push({text:`🔄 +${c} remplacement(s)`,type:"info"}),h(g)},CUSTOM:({},c,g)=>g(c)};function ne(c,g,h,y){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var I,$;const _=c.map(L=>{const D={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[L._line]||"#555",U=be(L,L._line)+(L.boost||0),ce=v.find(H=>H.cardId===L.cardId)?"#FFD700":"rgba(255,255,255,0.25)",G=L.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${L.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ce};background:${D};overflow:hidden;cursor:pointer;${G}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${L.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${U}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${L._line}</div>
        </div>`}).join("");x.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${h}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v.length}/${g}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${_}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${v.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${v.length}/${g})
          </button>
        </div>`,(I=x.querySelector("#pp-close"))==null||I.addEventListener("click",()=>x.remove()),x.querySelectorAll(".pp-item").forEach(L=>{L.addEventListener("click",()=>{const D=L.dataset.cid,U=c.find(ce=>ce.cardId===D),re=v.findIndex(ce=>ce.cardId===D);U&&(re>-1?v.splice(re,1):v.length<g&&v.push(U),w())})}),($=x.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{x.remove(),y(v)})}w(),document.body.appendChild(x)}async function S(c,g){const y=(o["gcCardsFull_"+i]||[]).find(_=>_.id===c),x=(y==null?void 0:y._gcDef)||(o.gcDefs||[]).find(_=>{var I;return _.name===g||((I=_.name)==null?void 0:I.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),v=[...o["usedGc_"+i]||[],c],w={type:g,by:i,seq:(o._gcAnimSeq||0)+1};O.add(w.seq),me(g,i,async()=>{if(x!=null&&x.effect_type&&x.effect_type!=="CUSTOM"){const I=se[x.effect_type];if(I){const $={...o};I(x.effect_params||{},$,async L=>{L["usedGc_"+i]=v,L._lastGC=w,L._gcAnimSeq=w.seq,await q(L)});return}}const _={...o};switch(g){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=a+"Score";_[I]>0&&(_[I]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+i]=v,_._lastGC=w,_._gcAnimSeq=w.seq,await q(_)})}function K(c,g){const h="usedCardIds_"+c,y=new Set(o[h]||[]);g.forEach(x=>y.add(x)),o[h]=[...y]}function te(){for(const c of["p1","p2"]){const g=new Set(o["usedCardIds_"+c]||[]),h=o[c+"Team"];if(h)for(const y of["GK","DEF","MIL","ATT"])(h[y]||[]).forEach(x=>{x.used=g.has(x.cardId)})}}function F(){var Oe,ft,gt,mt,xt,yt;if(o.phase==="reveal")return Q();if(o.phase==="midfield")return ae();if(o.phase==="finished")return Ke();const c=o[i+"Team"],g=o[a+"Team"];te();const h=o[i+"Score"],y=o[a+"Score"],x=o[i+"Name"],v=o[a+"Name"],w=o.phase===i+"-attack",_=o.phase===i+"-defense",I=Array.isArray(o["selected_"+i])?o["selected_"+i]:[],$=I.map(T=>T.cardId),L=window.innerWidth>=700,D=o[i+"Subs"]||[],U=o["usedSubIds_"+i]||[],re=D.filter(T=>!U.includes(T.cardId)),ce=o["gcCardsFull_"+i]||[],G=o["usedGc_"+i]||[],H=ce.filter(T=>!G.includes(T.id)),J=o.boostOwner===i&&!o.boostUsed,oe=!["GK","DEF","MIL","ATT"].some(T=>(g[T]||[]).some(Y=>!Y.used)),de=[...c.MIL||[],...c.ATT||[]].filter(T=>!T.used),fe=w&&oe&&de.length===0?[...c.GK||[],...c.DEF||[]].filter(T=>!T.used).map(T=>T.cardId):[];function le(T,Y,pe){var wt,$t;const ee=T._gcDef,He={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ee==null?void 0:ee.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ye={purple:"#b06ce0",light_blue:"#00d4ef"}[ee==null?void 0:ee.color]||"#b06ce0",Xe=(ee==null?void 0:ee.name)||T.gc_type,Je=(ee==null?void 0:ee.effect)||((wt=Be[T.gc_type])==null?void 0:wt.desc)||"",ht=ee!=null&&ee.image_url?`/manager-wars/icons/${ee.image_url}`:null,Ut=(($t=Be[T.gc_type])==null?void 0:$t.icon)||"⚡",bt=Math.round(pe*.22),vt=Math.round(pe*.22),ot=pe-bt-vt,Kt=Xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${T.id}" data-gc-type="${T.gc_type}"
        style="box-sizing:border-box;width:${Y}px;height:${pe}px;border-radius:10px;border:2px solid ${Ye};background:${He};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${bt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Kt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Y-6}px">${Xe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${ot}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ht?`<img src="${ht}" style="max-width:${Y-10}px;max-height:${ot-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(ot*.55)}px">${Ut}</span>`}
        </div>
        <div style="height:${vt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Je.slice(0,38)}</span>
        </div>
      </div>`}function ye(T,Y){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${T}px;height:${Y}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Y*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(Y*.2)}px">⚡</div>
        <div style="font-size:${Math.round(Y*.09)}px;color:#000;font-weight:900">+${o.boostValue}</div>
      </div>`}const Ee=(T,Y)=>Y?ye(130,175):le(T,130,175),Ne=(T,Y)=>Y?ye(68,95):le(T,68,95),Ce=L?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",je=w?we(i)?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ce};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,$e=w&&!we(i)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Fe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${L?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${re.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':re.map(T=>`<div class="pvp-sub-btn" data-sub-id="${T.cardId}" style="cursor:pointer;flex-shrink:0">${Ue(T,L?76:44,L?100:58)}</div>`).join("")}
    </div>`,Me=w?"attack":_?"defense":"idle",Pe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${st(c,o[i+"Formation"],Me,$,300,300,fe)}
      </div>
    </div>`;function qe(T){if(T.type==="duel"&&(T.homeTotal!=null||T.aiTotal!=null)){const Y=(T.homeTotal||0)>=(T.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(T.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(T.homePlayers||[]).map(pe=>tt(pe)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${Y?20:14}px;font-weight:900;color:${Y?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${T.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${Y?14:20}px;font-weight:900;color:${Y?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${T.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(T.aiPlayers||[]).map(pe=>tt(pe)).join("")}
            </div>
          </div>
          ${T.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${T.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${T.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${T.type==="goal"?700:400};padding:3px 2px">${T.text||""}</div>`}const Ve=(()=>{var Y,pe;if(_&&((Y=o.pendingAttack)!=null&&Y.players)){const ee=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${et((ee.players||[]).map(He=>({...He,used:!1})),"#ff6b6b",ee.total)}
        </div>`}if(w&&((pe=o.pendingAttack)!=null&&pe.players)){const ee=o.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${et((ee.players||[]).map(He=>({...He,used:!1})),"#00ff88",ee.total)}
        </div>`}const T=(o.log||[]).slice(-1)[0];return T?'<div style="padding:2px 4px">'+qe(T)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ge=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${h} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ve}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(o.log||[]).length})
      </button>`;We(e),e.style.overflow="hidden",L?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ge}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Fe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Pe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${je}${$e}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${H.map(T=>Ee(T,!1)).join("")}
            ${J?Ee(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ge}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${st(c,o[i+"Formation"],Me,$,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${H.map(T=>Ne(T,!1)).join("")}
            ${J?Ne(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&re.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&re.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&re.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&re.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${re.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(o["usedSubIds_"+i]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(o["usedSubIds_"+i]||[]).length}/${o.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${je}${$e}</div>
        </div>
      </div>`;function Te(){const T=e.querySelector(".match-screen");if(!T)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);T.style.height=Y+"px",T.style.minHeight=Y+"px",T.style.maxHeight=Y+"px",T.style.overflow="hidden";const pe=e.querySelector("#mobile-action-bar"),ee=e.querySelector("#mobile-play-area");pe&&ee&&(ee.style.paddingBottom=pe.offsetHeight+"px")}if(Te(),setTimeout(Te,120),setTimeout(Te,400),M||(M=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Te),window.visualViewport.addEventListener("scroll",Te)),window.addEventListener("resize",Te)),function(){const Y=e.querySelector(".terrain-wrapper svg");Y&&(Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("viewBox","-26 -26 352 352"),Y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(T=>{T.addEventListener("click",()=>{if(!w&&!_)return;const Y=T.dataset.cardId,pe=T.dataset.role,ee=(c[pe]||[]).find(Je=>Je.cardId===Y);if(!ee||ee.used)return;const He=fe.includes(Y);if(w&&!["MIL","ATT"].includes(pe)&&!He)return;Array.isArray(o["selected_"+i])||(o["selected_"+i]=[]);const Ye=o["selected_"+i],Xe=Ye.findIndex(Je=>Je.cardId===Y);Xe>-1?Ye.splice(Xe,1):Ye.length<3&&Ye.push({...ee,_role:pe}),F()})}),e.querySelectorAll(".match-used-hit").forEach(T=>{T.addEventListener("click",()=>R(T.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(T=>{T.addEventListener("click",()=>R())}),(Oe=e.querySelector("#pvp-sub-open"))==null||Oe.addEventListener("click",()=>R()),e.querySelectorAll(".pvp-gc-mini").forEach(T=>{T.addEventListener("click",()=>xe(T.dataset.gcId,T.dataset.gcType))}),(ft=e.querySelector("#pvp-boost-card"))==null||ft.addEventListener("click",()=>N()),(gt=e.querySelector("#pvp-action"))==null||gt.addEventListener("click",T=>{w?T.currentTarget.dataset.pass==="1"||!we(i)?ue():ie():_&&Ae()}),(mt=e.querySelector("#pvp-quit"))==null||mt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Z()}),(xt=e.querySelector("#pvp-view-opp"))==null||xt.addEventListener("click",()=>P()),(yt=e.querySelector("#pvp-toggle-history"))==null||yt.addEventListener("click",()=>X()),z&&(clearInterval(z),z=null),(w||_)&&!k){let T=30,Y=!1;const pe=()=>document.getElementById("pvp-timer"),ee=()=>{pe()&&(pe().textContent=T+"s",pe().style.color=Y?"#ff4444":"#fff")};ee(),z=setInterval(()=>{T--,T<0?Y?(clearInterval(z),z=null,w&&!we(i)?ue():Z()):(Y=!0,T=15,ee()):ee()},1e3)}}function Q(){We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${o[a+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${at(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
    </div>`,i==="p1"&&setTimeout(async()=>{await q({phase:"midfield"})},5e3)}let V=!1;function ae(){if(V)return;const c=o[i+"Team"].MIL||[],g=o[a+"Team"].MIL||[];function h(H){return H.reduce((J,oe)=>J+be(oe,"MIL"),0)}function y(H){let J=0;for(let oe=0;oe<H.length-1;oe++){const de=Qe(H[oe],H[oe+1]);de==="#00ff88"?J+=2:de==="#FFD700"&&(J+=1)}return J}const x=h(c)+y(c),v=h(g)+y(g),w=x>=v;function _(H,J,oe){return`<div id="duel-row-${oe}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${J}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${H.map((de,fe)=>{const le=fe<H.length-1?Qe(de,H[fe+1]):null,ye=!le||le==="#ff3333"||le==="#cc2222",Ee=le==="#00ff88"?"+2":le==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${oe}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ue({...de,note:be(de,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<H.length-1?`<div class="duel-link duel-link-${oe}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":le};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${le}`}">
              ${Ee?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${le}">${Ee}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${oe}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${h(H)} + ${y(H)} liens = <b style="color:#fff">${h(H)+y(H)}</b>
        </div>
      </div>`}We(e),e.innerHTML=`
    <div class="match-screen" style="position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
      <style>
        @keyframes duelPulse{0%{transform:scale(1)}50%{transform:scale(1.18)}100%{transform:scale(1)}}
        @keyframes duelGlow{0%,100%{text-shadow:0 0 12px rgba(255,215,0,.6)}50%{text-shadow:0 0 28px rgba(255,215,0,.95)}}
        @keyframes vsFlash{0%{opacity:0;transform:scale(2)}60%{opacity:1;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}
        @keyframes winnerSlam{0%{transform:scale(1)}35%{transform:translateY(-14px) scale(1.05)}70%{transform:translateY(10px) scale(1.12,.92)}100%{transform:translateY(0) scale(1)}}
        @keyframes crushSquash{0%{transform:scaleY(1);opacity:1}55%{transform:scaleY(.1) translateY(8px);opacity:.5}100%{transform:scaleY(0);opacity:0}}
        @keyframes shockwave{0%{transform:translateX(-50%) scale(.2);opacity:.9}100%{transform:translateX(-50%) scale(2.4);opacity:0}}
        @keyframes boostFlipIn{0%{transform:perspective(600px) rotateY(90deg) scale(.6);opacity:0}60%{transform:perspective(600px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(600px) rotateY(0) scale(1);opacity:1}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="text-align:center;color:#fff">
        <div style="font-size:11px;opacity:.5;letter-spacing:3px;text-transform:uppercase">Duel du milieu de terrain</div>
      </div>
      ${_(c,o[i+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_(g,o[a+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const I=(H,J)=>e.querySelectorAll(H).forEach((oe,de)=>{setTimeout(()=>{oe.style.opacity="1",oe.style.transform="translateY(0) scale(1)"},J+de*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((H,J)=>setTimeout(()=>{H.style.opacity="1"},J*70)),900),setTimeout(()=>{const H=e.querySelector("#pvp-vs");H&&(H.style.opacity="1",H.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(J=>J.style.opacity="1")},1250);function $(H,J,oe){const de=document.getElementById(H);if(!de)return;const fe=performance.now(),le=ye=>{const Ee=Math.min(1,(ye-fe)/oe);de.textContent=Math.round(J*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(le):de.textContent=J};requestAnimationFrame(le)}setTimeout(()=>{$("pvp-score-me",x,800),$("pvp-score-opp",v,800)},1500);const L=o.p1Team.MIL||[],D=o.p2Team.MIL||[],U=h(L)+y(L),re=h(D)+y(D),ce=U>=re?"p1":"p2";let G=o.boostValue;G==null&&(G=ri(),o.boostValue=G,o.boostOwner=ce,o.boostUsed=!1),V=!0,setTimeout(()=>{const H=e.querySelector("#duel-row-"+(w?"me":"opp")),J=e.querySelector("#duel-row-"+(w?"opp":"me")),oe=document.getElementById("pvp-score-me"),de=document.getElementById("pvp-score-opp"),fe=w?oe:de,le=w?de:oe;fe&&(fe.style.fontSize="80px",fe.style.color=w?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),le&&(le.style.opacity="0.25"),setTimeout(()=>{H&&(H.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",H.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),J&&(J.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const Ee=o.boostOwner===i?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+G+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ne=i==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+o[i+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+o[a+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+Ne,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const je=ce;await q({phase:je+"-attack",attacker:je,round:1,boostValue:G,boostUsed:!1,boostOwner:je})})},600)},700)},2800)}function ge(c,g,h,y,x){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(L,D)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${D%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][D%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${w}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${y?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${g} – ${h}
      </div>
      ${c!=null&&c.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${c.map(L=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[L.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${L.portrait?`<img src="${L.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(L.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let I=!1;const $=()=>{I||(I=!0,v.remove(),setTimeout(()=>x(),50))};v.addEventListener("click",$),setTimeout($,3500)}function me(c,g,h){var G,H;const y=(o.gcDefs||[]).find(J=>{var oe;return J.name===c||((oe=J.name)==null?void 0:oe.toLowerCase().trim())===(c==null?void 0:c.toLowerCase().trim())}),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",w=(y==null?void 0:y.name)||c,_=(y==null?void 0:y.effect)||((G=Be[c])==null?void 0:G.desc)||"",I=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,$=((H=Be[c])==null?void 0:H.icon)||"⚡",D=g===i?"Vous":o[g+"Name"]||"Adversaire",U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",U.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${D} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${x};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${I?`<img src="${I}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${$}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${_}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(U);let re=!1;const ce=()=>{re||(re=!0,U.remove(),setTimeout(()=>h&&h(),50))};U.addEventListener("click",ce),setTimeout(ce,3e3)}function xe(c,g){var U,re,ce,G;const y=(o["gcCardsFull_"+i]||[]).find(H=>H.id===c),x=y==null?void 0:y._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",_=(x==null?void 0:x.name)||g,I=(x==null?void 0:x.effect)||((U=Be[g])==null?void 0:U.desc)||"Carte spéciale.",$=x!=null&&x.image_url?`/manager-wars/icons/${x.image_url}`:null,L=((re=Be[g])==null?void 0:re.icon)||"⚡",D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",D.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${L}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${I}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(D),(ce=D.querySelector("#pvp-gc-back"))==null||ce.addEventListener("click",()=>D.remove()),(G=D.querySelector("#pvp-gc-use"))==null||G.addEventListener("click",()=>{D.remove(),S(c,g)})}function N(){var y;const c=o[i+"Team"],g=Object.entries(c).flatMap(([x,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:x})));if(!g.length)return;const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",h.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${o.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${g.map(x=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x._line]||"#555",w=be(x,x._line)+(x.boost||0);return`<div class="bp-item" data-cid="${x.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(h),(y=h.querySelector("#bp-close"))==null||y.addEventListener("click",()=>h.remove()),h.querySelectorAll(".bp-item").forEach(x=>{x.addEventListener("click",async()=>{const v=x.dataset.cid,w=g.find(I=>I.cardId===v);if(!w)return;const _=(c[w._line]||[]).find(I=>I.cardId===v);_&&(_.boost=(_.boost||0)+o.boostValue),h.remove(),await q({[i+"Team"]:c,boostUsed:!0})})})}function R(c=null){var re,ce;if(!(o.phase===i+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const h=o[i+"Team"],y=o["usedSubIds_"+i]||[],x=o.maxSubs||3;if(y.length>=x){p(`Maximum ${x} remplacements atteint`,"warning");return}const v=Object.entries(h).flatMap(([G,H])=>(H||[]).filter(J=>J.used).map(J=>({...J,_line:G}))),w=(o[i+"Subs"]||[]).filter(G=>!y.includes(G.cardId));if(!v.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){p("Aucun remplaçant disponible","warning");return}let _=Math.max(0,v.findIndex(G=>G.cardId===c));const I=((re=v[_])==null?void 0:re._line)||((ce=v[_])==null?void 0:ce.job);let $=Math.max(0,w.findIndex(G=>G.job===I)),L=!1;const D=document.createElement("div");D.id="pvp-sub-overlay",D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function U(){var le,ye,Ee,Ne,Ce,je;const G=v[_],H=w[$],J=Math.min(130,Math.round((window.innerWidth-90)/2)),oe=Math.round(J*1.35),de=$e=>`background:rgba(255,255,255,0.12);border:none;color:${$e?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${$e?"default":"pointer"};flex-shrink:0`;D.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${x})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${de($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${H?Ue({...H,used:!1,boost:0},J,oe):"<div>—</div>"}</div>
          <button id="pin-down" style="${de($>=w.length-1)}" ${$>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${de(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${G?Ue({...G,used:!1,boost:0},J,oe):"<div>—</div>"}</div>
          <button id="pout-down" style="${de(_>=v.length-1)}" ${_>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(le=D.querySelector("#psub-close"))==null||le.addEventListener("click",()=>D.remove()),(ye=D.querySelector("#pout-up"))==null||ye.addEventListener("click",()=>{_>0&&(_--,U())}),(Ee=D.querySelector("#pout-down"))==null||Ee.addEventListener("click",()=>{_<v.length-1&&(_++,U())}),(Ne=D.querySelector("#pin-up"))==null||Ne.addEventListener("click",()=>{$>0&&($--,U())}),(Ce=D.querySelector("#pin-down"))==null||Ce.addEventListener("click",()=>{$<w.length-1&&($++,U())});const fe=($e,Fe,Me,Pe)=>{const qe=D.querySelector("#"+$e);if(!qe)return;let Ve=0;qe.addEventListener("touchstart",Ge=>{Ve=Ge.touches[0].clientY},{passive:!0}),qe.addEventListener("touchend",Ge=>{const Te=Ge.changedTouches[0].clientY-Ve;if(Math.abs(Te)<30)return;const Oe=Fe();Te<0&&Oe<Pe-1?(Me(Oe+1),U()):Te>0&&Oe>0&&(Me(Oe-1),U())},{passive:!0})};fe("pin-panel",()=>$,$e=>$=$e,w.length),fe("pout-panel",()=>_,$e=>_=$e,v.length),(je=D.querySelector("#psub-confirm"))==null||je.addEventListener("click",async $e=>{if($e.preventDefault(),$e.stopPropagation(),L)return;L=!0;const Fe=v[_],Me=w[$];if(!Fe||!Me)return;const Pe=Fe._line,qe=(h[Pe]||[]).findIndex(Te=>Te.cardId===Fe.cardId);if(qe===-1){p("Erreur : joueur introuvable","error"),D.remove();return}const Ve={...Me,_line:Pe,position:Fe.position,used:!1,boost:0};h[Pe].splice(qe,1,Ve);const Ge=[...y,Me.cardId];D.remove(),W(Fe,Me,async()=>{await q({[i+"Team"]:h,[a+"Team"]:o[a+"Team"],["usedSubIds_"+i]:Ge})})})}document.body.appendChild(D),U()}function W(c,g,h){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(I,$,L)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${L}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[I.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Ie(I)?`<img src="${Ie(I)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(I.name||"").slice(0,12)}</div>
    </div>`;x.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v(g,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(c,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(x);let w=!1;const _=()=>{w||(w=!0,x.remove(),setTimeout(()=>h(),50))};x.addEventListener("click",_),setTimeout(_,2200)}function P(){var g;const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",c.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${o[a+"Name"]}</div>
      <div style="width:min(90vw,420px)">${at(o[a+"Team"],o[a+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(c),(g=c.querySelector("#pvp-opp-close"))==null||g.addEventListener("click",()=>c.remove())}function X(){var h;const c=o.log||[],g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",g.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${c.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...c].reverse().map(y=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${y.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(g),(h=g.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>g.remove())}async function ue(){if(o.phase!==i+"-attack")return;const c=i==="p1"?"p2":"p1",g=(o.round||0)+1,h=[...o.log||[]];h.push({type:"info",text:`⏭️ ${o[i+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=Le(o),x=we(c),v=y||!x?"finished":c+"-attack";await q({["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:v,attacker:c,round:g,log:h}),v==="finished"&&await Se(o)}async function ie(){const c=o[i+"Team"],g=!["GK","DEF","MIL","ATT"].some(v=>(o[a+"Team"][v]||[]).some(w=>!w.used)),h=(o["selected_"+i]||[]).map(v=>{const w=(c[v._role]||[]).find(U=>U.cardId===v.cardId)||v,_=g&&["GK","DEF"].includes(v._role),I=c[v._role]||[],$=I.findIndex(U=>U.cardId===v.cardId),L=it(I.length),D=$>=0?L[$]:w._col??1;return{...w,_line:v._role,_col:D,..._?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!h.length)return;const y=Rt(h,o.modifiers[i]||{});K(i,h.map(v=>v.cardId)),h.forEach(v=>{const w=(c[v._role]||[]).find(_=>_.cardId===v.cardId);w&&(w.used=!0)}),o["selected_"+i]=[],F();const x=[...o.log||[]];if(g){const v=(o[i+"Score"]||0)+1,w=h.map(D=>({name:D.name,note:be(D,D._line||"ATT"),portrait:Ie(D),job:D.job}));x.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:y.total,aiTotal:0});const _=(o.round||0)+1,I=i==="p1"?"p2":"p1",$={...o,[i+"Team"]:c,[i+"Score"]:v},L=Le($);B.add(_),ge(w,v,o[a+"Score"]||0,!0,async()=>{await q({[i+"Team"]:c,[i+"Score"]:v,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:L?"finished":I+"-attack",attacker:I,round:_,log:x}),L&&await Se({...o,[i+"Score"]:v})});return}x.push({type:"pending",text:`⚔️ ${o[i+"Name"]} attaque (${y.total})`}),await q({[i+"Team"]:c,[a+"Team"]:o[a+"Team"],pendingAttack:{...y,players:h,side:i},["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},phase:a+"-defense",log:x})}async function Ae(){const c=o[i+"Team"],g=(o["selected_"+i]||[]).map(G=>{const H=(c[G._role]||[]).find(le=>le.cardId===G.cardId)||G,J=c[G._role]||[],oe=J.findIndex(le=>le.cardId===G.cardId),de=it(J.length),fe=oe>=0?de[oe]:H._col??1;return{...H,_line:G._role,_col:fe}}),h=Nt(g,o.modifiers[i]||{});K(i,g.map(G=>G.cardId)),g.forEach(G=>{const H=(c[G._role]||[]).find(J=>J.cardId===G.cardId);H&&(H.used=!0)}),o["selected_"+i]=[],F();const y=Pt(o.pendingAttack.total,h.total,o.modifiers[i]||{}),x=o.pendingAttack.side,v=y==="attack"||(y==null?void 0:y.goal),w=x==="p1"?"p2":"p1",_=(o.round||0)+1,I=(o.pendingAttack.players||[]).map(G=>({name:G.name,note:be(G,G._line||"ATT"),portrait:Ie(G),job:G.job})),$=[...o.log||[]];$.push({type:"duel",isGoal:v,homeScored:v&&x===i,text:v?`⚽ BUT de ${o[x+"Name"]} ! (${o.pendingAttack.total} vs ${h.total})`:`✋ Attaque stoppée (${o.pendingAttack.total} vs ${h.total})`,homePlayers:I,aiPlayers:g.map(G=>({name:G.name,note:be(G,G._line||"DEF"),portrait:Ie(G),job:G.job})),homeTotal:o.pendingAttack.total,aiTotal:h.total});const L=v?(o[x+"Score"]||0)+1:o[x+"Score"]||0,D={...o,[i+"Team"]:c,[x+"Score"]:L},U=Le(D),re=U?"finished":w+"-attack",ce=async()=>{await q({[i+"Team"]:c,[a+"Team"]:o[a+"Team"],[x+"Score"]:L,["selected_"+i]:[],modifiers:{...o.modifiers,[i]:{}},pendingAttack:null,phase:re,attacker:w,round:_,log:$}),(re==="finished"||U)&&await Se({...o,[x+"Score"]:L})};if(v){const G=x===i,H=G?L:o[i+"Score"]||0,J=G?o[a+"Score"]||0:L;B.add(_),ge(I,H,J,G,ce)}else await ce()}function ke(c){return["MIL","ATT"].some(g=>(c[g]||[]).some(h=>!h.used))}function ve(c){return["GK","DEF","MIL","ATT"].some(g=>(c[g]||[]).some(h=>!h.used))}function _e(c){return ve(c)&&!ke(c)}function we(c){const g=o[c+"Team"],h=o[(c==="p1"?"p2":"p1")+"Team"];return!!(ke(g)||!ve(h)&&_e(g))}function Le(c){const g=["MIL","ATT"].some($=>(c.p1Team[$]||[]).some(L=>!L.used)),h=["MIL","ATT"].some($=>(c.p2Team[$]||[]).some(L=>!L.used)),y=ve(c.p1Team),x=ve(c.p2Team);return!g&&!(!x&&y)&&(!h&&!(!y&&x))}function Re(c){const g=c.p1Score||0,h=c.p2Score||0;return g===h?null:g>h?b.home_id:b.away_id}async function Se(c){try{await A.from("matches").update({status:"finished",winner_id:Re(c),home_score:c.p1Score||0,away_score:c.p2Score||0}).eq("id",n)}catch(g){console.error("[PvP] finishMatch:",g)}}function Ke(){var x;const c=o[i+"Score"],g=o[a+"Score"],h=c>g,y=c===g;We(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${h?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${h?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${c} - ${g}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(x=document.getElementById("pvp-home"))==null||x.addEventListener("click",()=>{try{A.removeChannel(C)}catch{}De(e),l("home")})}F()}const cn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function pn(e,t){const{state:n,toast:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement du marché...</div>',await fi(e,t)}async function fi(e,t){const{state:n,toast:r}=t,{data:u}=await A.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(60),{data:s}=await A.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, clubs(encoded_name, logo_url)))`).eq("seller_id",n.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),d=(u||[]).filter(i=>i.seller_id!==n.profile.id),l=s||[];l.filter(i=>i.status==="active").length,e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>🛒 Marché des transferts</h2>
      <p>${d.length} carte(s) en vente · Solde : ${(n.profile.credits||0).toLocaleString("fr")} cr.</p>
    </div>

    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px;overflow-x:auto">
      <button class="mkt-tab active" data-tab="buy" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:600;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="flex-shrink:0;padding:6px 14px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:600;cursor:pointer">Mes ventes (${l.length})</button>
    </div>

    <div class="page-body" id="mkt-content"></div>
  </div>
  `;function p(i){const a=document.getElementById("mkt-content"),f=i==="buy"?d:l;if(f.length===0){a.innerHTML=`<div style="text-align:center;color:var(--gray-600);padding:40px">
        ${i==="buy"?"Aucune carte en vente actuellement.":"Tu n'as aucune vente pour le moment."}
      </div>`;return}const m=i==="mine"?[...f].sort((b,E)=>b.status!==E.status?b.status==="active"?-1:1:new Date(E.listed_at)-new Date(b.listed_at)):f;a.innerHTML=`<div style="display:flex;flex-direction:column;gap:10px">
      ${m.map(b=>{var B,O,j,C;const E=(B=b.card)==null?void 0:B.player;if(!E)return"";const o=E.job==="GK"?E.note_g:E.job==="DEF"?E.note_d:E.job==="MIL"?E.note_m:E.note_a,k=cn[E.rarity],z=(n.profile.credits||0)>=b.price,M=b.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${M?"opacity:0.65":""}">
          <div style="width:44px;height:44px;border-radius:8px;background:${mn(E.job)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;border:2px solid ${k};flex-shrink:0">${o}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px">${E.firstname} ${E.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${E.country_code} · ${((O=E.clubs)==null?void 0:O.encoded_name)||"—"} · ${E.rarity} · ${E.job}</div>
            ${i==="buy"?`<div style="font-size:11px;color:var(--gray-600)">Vendeur : ${((j=b.seller)==null?void 0:j.pseudo)||"—"}</div>`:M?`<div style="font-size:11px;color:var(--green)">✅ Vendu à ${((C=b.buyer)==null?void 0:C.pseudo)||"—"} · ${b.sold_at?new Date(b.sold_at).toLocaleDateString("fr"):""}</div>`:`<div style="font-size:11px;color:var(--gray-600)">🟢 En vente depuis le ${new Date(b.listed_at).toLocaleDateString("fr")}</div>`}
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-weight:900;color:var(--yellow);font-size:15px">${b.price.toLocaleString("fr")}</div>
            ${i==="buy"?`<button class="btn btn-primary btn-sm" data-buy="${b.id}" ${z?"":"disabled"} style="margin-top:4px">${z?"Acheter":"Trop cher"}</button>`:M?'<span style="display:inline-block;margin-top:4px;font-size:10px;font-weight:700;color:#fff;background:var(--green);padding:3px 10px;border-radius:10px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${b.id}" style="margin-top:4px">Retirer</button>`}
          </div>
        </div>`}).join("")}
    </div>`,a.querySelectorAll("[data-buy]").forEach(b=>{b.addEventListener("click",()=>un(b.dataset.buy,f,e,t))}),a.querySelectorAll("[data-cancel]").forEach(b=>{b.addEventListener("click",()=>gn(b.dataset.cancel,e,t))})}p("buy"),e.querySelectorAll(".mkt-tab").forEach(i=>{i.addEventListener("click",()=>{e.querySelectorAll(".mkt-tab").forEach(a=>{const f=a===i;a.style.background=f?"var(--green)":"#fff",a.style.color=f?"#fff":"var(--gray-600)",a.style.borderColor=f?"var(--green)":"var(--gray-200)"}),p(i.dataset.tab)})})}async function un(e,t,n,r){var b;const{state:u,toast:s,refreshProfile:d}=r,l=t.find(E=>E.id===e);if(!l)return;const p=l.price,i=u.profile.credits||0,a=(b=l.card)==null?void 0:b.player;if(i<p){s("Crédits insuffisants","error");return}if(!await fn(a,p))return;const m=document.querySelector(`[data-buy="${e}"]`);m&&(m.disabled=!0,m.textContent="⏳");try{const{data:E,error:o}=await A.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:u.profile.id});if(o)throw new Error(o.message);if(!(E!=null&&E.success))throw new Error((E==null?void 0:E.error)||"Achat impossible");u.profile.credits=i-p;const k=document.getElementById("nav-credits");k&&(k.textContent=`💰 ${(i-p).toLocaleString("fr")}`),s(`✅ ${a==null?void 0:a.surname_encoded} ajouté à ta collection !`,"success"),fi(n,r)}catch(E){s("❌ "+E.message,"error"),m&&(m.disabled=!1,m.textContent="Acheter")}}function fn(e,t){return new Promise(n=>{const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;max-width:360px;width:100%;box-shadow:0 8px 40px rgba(0,0,0,0.25)">
        <div style="font-size:18px;font-weight:900;margin-bottom:6px">Confirmer l'achat</div>
        <div style="font-size:14px;color:#555;margin-bottom:16px;line-height:1.5">
          Acheter <b>${(e==null?void 0:e.firstname)||""} ${(e==null?void 0:e.surname_encoded)||""}</b><br>
          pour <span style="color:#c47a00;font-weight:900;font-size:16px">${t.toLocaleString("fr")} crédits</span> ?
        </div>
        <div style="display:flex;gap:10px">
          <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:linear-gradient(135deg,#1A6B3C,#2a9d5c);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Acheter ✅</button>
        </div>
      </div>`,document.body.appendChild(r);const u=s=>{r.remove(),n(s)};r.querySelector("#buy-ok").addEventListener("click",()=>u(!0)),r.querySelector("#buy-cancel").addEventListener("click",()=>u(!1)),r.addEventListener("click",s=>{s.target===r&&u(!1)})})}async function gn(e,t,n){const{toast:r}=n,{data:u}=await A.from("market_listings").select("card_id").eq("id",e).single();await A.from("market_listings").update({status:"cancelled"}).eq("id",e),u&&await A.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",u.card_id),r("Annonce retirée","success"),fi(t,n)}function mn(e){return{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e]||"#888"}async function xn(e,{state:t,navigate:n,toast:r}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:u}=await A.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${u&&u.length>0?u.map((s,d)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${s.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${d+1}</div>
            <div style="flex:1">
              <div style="font-weight:700">${s.pseudo}</div>
              <div style="font-size:11px;color:var(--gray-600)">${s.club_name}</div>
            </div>
            <div style="text-align:right;font-size:12px">
              <div>🥇${s.trophies_top1} 🥈${s.trophies_top2} 🥉${s.trophies_top3}</div>
              <div style="color:var(--gray-600)">${s.wins} V</div>
            </div>
          </div>
        `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}
      </div>
    </div>
  </div>
  `}async function yn(e,{state:t,navigate:n,toast:r}){const u=t.profile;if(!u)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await A.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${u.id},away_id.eq.${u.id}`).order("created_at",{ascending:!1}).limit(50),d={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(a=>a.status==="finished"),p=(s||[]).filter(a=>a.status==="in_progress");function i(a){const f=a.home_id===u.id;f?a.home_score:a.away_score,f?a.away_score:a.home_score;const m=a.winner_id===u.id,b=a.home_score===a.away_score&&a.status==="finished",E=a.status!=="finished"?"…":b?"N":m?"V":"D",o=a.status!=="finished"||b?"#888":m?"#1A6B3C":"#c0392b";let k=d[a.mode]||a.mode;a.away_id===null&&!k.startsWith("IA")&&(k="IA");const M=a.home_id===u.id?a.away:a.home;let B;a.away_id===null?B=k:M?B=`${M.club_name||M.pseudo} (${M.pseudo})`:B="Adversaire";let O="";a.status==="in_progress"&&Date.now()-new Date(a.created_at).getTime()>3600*1e3&&(O=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const j=new Date(a.created_at),C=j.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+j.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),q=a.status==="finished"?`${a.home_score} - ${a.away_score}`:`${a.home_score||0} - ${a.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${B}${O}</div>
        <div style="font-size:11px;color:var(--gray-600)">${k} · ${C}${a.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${q}</span>
        <span style="background:${o};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${E}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(s||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${p.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${p.map(i).join("")}
        </div>`:""}

      ${l.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${l.map(i).join("")}
        </div>`:""}

      ${(s||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}Ji(Zi);const he={user:null,profile:null,page:"home",params:{}};function Et(e,t="info",n=3e3){const r=document.getElementById("toast");r&&(r.textContent=e,r.className=`show ${t}`,clearTimeout(r._t),r._t=setTimeout(()=>{r.className=""},n))}function hn(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ii(){document.getElementById("modal-overlay").classList.add("hidden")}async function Tt(){if(!he.user)return;const{data:e}=await A.from("users").select("*").eq("id",he.user.id).single();e&&(he.profile=e)}const gi="mw_theme";function Gt(){return localStorage.getItem(gi)||"light"}function bn(e){var t;localStorage.setItem(gi,e),oi(e),(t=he.profile)!=null&&t.id&&A.from("users").update({theme:e}).eq("id",he.profile.id).then(()=>{})}function oi(e){document.documentElement.setAttribute("data-theme",e)}function Bt(e,t={}){he.page=e,he.params=t,Wi()}async function Wi(){var r,u;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===he.page)});const t=document.getElementById("nav-credits");t&&he.profile&&(t.textContent=`💰 ${(he.profile.credits||0).toLocaleString("fr")}`);const n={state:he,navigate:Bt,toast:Et,openModal:hn,closeModal:ii,refreshProfile:Tt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',he.page){case"home":await hi(e,n);break;case"collection":await yo(e,n);break;case"decks":await Qt(e,n);break;case"boosters":await Mo(e,n);break;case"match":{const s=he.params&&he.params.matchMode||"vs_ai_easy";s==="random"?await sn(e,n):s==="friend"?await Si(e,n,(r=he.params)==null?void 0:r.friendId,((u=he.params)==null?void 0:u.lobbyId)||null):await Ho(e,n);break}case"market":await pn(e,n);break;case"rankings":await xn(e,n);break;case"matches":await yn(e,n);break;case"friends":await so(e,n);break;default:await hi(e,n)}}function vn(){const e=document.getElementById("app"),t=he.profile;if(!t)return;const n="/manager-wars/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo">
        <img src="${n}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
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
          <img src="${n}nav-home.png" alt="" class="nav-icon">
          <img src="${n}nav-home-txt.png" alt="Accueil" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="collection">
        <div class="nav-icon-wrap">
          <img src="${n}nav-collection.png" alt="" class="nav-icon">
          <img src="${n}nav-collection-txt.png" alt="Cartes" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="decks">
        <div class="nav-icon-wrap">
          <img src="${n}nav-decks.png" alt="" class="nav-icon">
          <img src="${n}nav-deck-txt.png" alt="Decks" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="boosters">
        <div class="nav-icon-wrap">
          <img src="${n}nav-boosters.png" alt="" class="nav-icon">
          <img src="${n}nav-boosters-txt.png" alt="Boosters" class="nav-label">
        </div>
      </a>
      <a href="#" data-page="market">
        <div class="nav-icon-wrap">
          <img src="${n}nav-market.png" alt="" class="nav-icon">
          <img src="${n}nav-market-txt.png" alt="Marché" class="nav-label">
        </div>
      </a>
    </nav>
  `,document.querySelectorAll(".bottom-nav a").forEach(r=>{r.addEventListener("click",u=>{u.preventDefault(),Bt(r.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Bt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Bt("boosters")),document.getElementById("theme-toggle").addEventListener("click",()=>{const u=Gt()==="dark"?"light":"dark";bn(u),Ei(u)}),Ei(Gt())}function Ei(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"☀️":"🌙")}async function wn(){oi(Gt()),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ii()}),document.getElementById("modal-close").addEventListener("click",ii);const{data:{session:e}}=await A.auth.getSession();if(!e){Ti(),mi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Et});return}he.user=e.user,await Tt(),Ti();try{const{data:n}=await A.from("formation_links_overrides").select("formation, links"),r={};(n||[]).forEach(u=>{r[u.formation]=u.links}),Qi(r)}catch(n){console.warn("Impossible de charger les overrides de formation:",n)}if(!he.profile){eo(document.getElementById("app"),{state:he,navigate:async()=>{await Tt(),Wt()},toast:Et,refreshProfile:Tt});return}const t=Array.isArray(he.profile.pending_boosters)?he.profile.pending_boosters:[];if(!he.profile.onboarding_done&&t.length>0){Po(document.getElementById("app"),{state:he,navigate:()=>Wt(),toast:Et,refreshProfile:Tt});return}he.profile.theme&&he.profile.theme!==Gt()&&(localStorage.setItem(gi,he.profile.theme),oi(he.profile.theme)),Wt(),A.auth.onAuthStateChange(async(n,r)=>{n==="SIGNED_OUT"&&(he.user=null,he.profile=null,document.getElementById("app").innerHTML="",mi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Et}))})}function $n(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Ht(){const e=document.getElementById("app");e&&(e.style.height=$n()+"px")}window.addEventListener("resize",Ht);window.addEventListener("orientationchange",()=>setTimeout(Ht,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Ht);function Wt(){const e=()=>{var n;(n=he.user)!=null&&n.id&&A.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",he.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Ht(),vn(),Wi()}function Ti(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Xi(e){var r;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const n=document.createElement("div");n.id="boot-error",n.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",n.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(n),(r=document.getElementById("boot-retry"))==null||r.addEventListener("click",()=>window.location.reload())}wn().catch(e=>{console.error("Échec du démarrage:",e),Xi()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Xi("Le serveur met trop de temps à répondre.")},12e3);
