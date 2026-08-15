const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/match-shared-BPr03YEd.js","assets/match-shared-D_M6t_P4.css"])))=>i.map(i=>d[i]);
import{v as bo,s as v,r as qe,q as si,w as Gt,x as Ht,g as Ut,m as oi,n as Kt,o as Qe,_ as ln,y as dn,F as vt,k as Lt,z as Bi,G as oo,I as Ze,t as Li,J as Hi,L as Jn,O as Ui,P as no,p as Di,Q as Pi,R as Xi,U as Ki,V as ni,W as _i,X as Pt,Y as cn,Z as ki,$ as lt,a0 as $i,a1 as jt,a2 as ut,a3 as Xn,a4 as pn,a5 as xo,a6 as Zn,a7 as un,a8 as Ft,T as Po,a9 as Qn,aa as er}from"./match-shared-BPr03YEd.js";const tr="/";async function Fo(t,{navigate:e,toast:i}){let o="login";const n=await bo("signup_access_code_required"),r=()=>{var d,l,s,p,c,x,y,m;const a=o==="login";if(t.innerHTML=`
    <div style="
      position:fixed; inset:0; z-index:20;
      background:linear-gradient(180deg,#0a0a12 0%,#0f1a10 60%,#0a1628 100%);
      display:flex; flex-direction:column; align-items:center; justify-content:flex-start;
      padding:12px 16px; overflow-y:auto; overflow-x:hidden; -webkit-overflow-scrolling:touch;
    ">
      <!-- Particules décoratives -->
      <div style="position:absolute;inset:0;pointer-events:none;overflow:hidden">
        <div style="position:absolute;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(26,107,60,0.15),transparent 70%);top:-80px;left:-80px"></div>
        <div style="position:absolute;width:250px;height:250px;border-radius:50%;background:radial-gradient(circle,rgba(212,160,23,0.1),transparent 70%);bottom:-60px;right:-60px"></div>
      </div>

      <!-- Logo -->
      <div style="margin-bottom:10px;text-align:center;animation:authFadeIn .5s ease">
        <img src="${tr}icons/logo-withname.png" alt="Manager Wars" style="height:44px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
        <div style="font-size:10px;color:rgba(255,255,255,0.5);margin-top:3px;letter-spacing:1px">LE JEU DE CARTES FOOTBALL STRATÉGIQUE</div>
      </div>

      <!-- Carte principale -->
      <div style="
        width:100%;max-width:380px;
        background:rgba(255,255,255,0.04);
        border:1px solid rgba(255,255,255,0.1);
        border-radius:20px;
        backdrop-filter:blur(12px);
        overflow:hidden;
        animation:authFadeIn .5s ease .1s both;
        box-shadow:0 24px 64px rgba(0,0,0,0.5);
      ">
        <!-- Onglets -->
        <div style="display:flex;border-bottom:1px solid rgba(255,255,255,0.08)">
          <button id="tab-login-btn" style="
            flex:1;padding:10px;border:none;background:${a?"rgba(26,107,60,0.3)":"transparent"};
            color:${a?"#fff":"rgba(255,255,255,0.4)"};
            font-size:14px;font-weight:${a?"900":"600"};cursor:pointer;
            border-bottom:2px solid ${a?"#22c55e":"transparent"};
            transition:all .2s;
          ">Connexion</button>
          <button id="tab-reg-btn" style="
            flex:1;padding:10px;border:none;background:${a?"transparent":"rgba(26,107,60,0.3)"};
            color:${a?"rgba(255,255,255,0.4)":"#fff"};
            font-size:14px;font-weight:${a?"600":"900"};cursor:pointer;
            border-bottom:2px solid ${a?"transparent":"#22c55e"};
            transition:all .2s;
          ">Inscription</button>
        </div>

        <div style="padding:14px">
          ${a?`
          <!-- CONNEXION -->
          <div style="display:flex;flex-direction:column;gap:8px">
            <div>
              <label style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);display:block;margin-bottom:3px;letter-spacing:.5px">EMAIL</label>
              <input type="email" id="login-email" placeholder="manager@example.com" autocomplete="email" style="
                width:100%;box-sizing:border-box;padding:8px 12px;
                background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.12);
                border-radius:10px;font-size:15px;color:#fff;outline:none;
                transition:border-color .2s;
              " onfocus="this.style.borderColor='#22c55e'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'"
              >
            </div>
            <div>
              <label style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);display:block;margin-bottom:3px;letter-spacing:.5px">MOT DE PASSE</label>
              <input type="password" id="login-password" placeholder="••••••••" autocomplete="current-password" style="
                width:100%;box-sizing:border-box;padding:8px 12px;
                background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.12);
                border-radius:10px;font-size:15px;color:#fff;outline:none;
                transition:border-color .2s;
              " onfocus="this.style.borderColor='#22c55e'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'"
              >
            </div>
            ${n?`
            <div>
              <label style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);display:block;margin-bottom:3px;letter-spacing:.5px">CODE D'ACCÈS</label>
              <input type="password" id="login-access-code" placeholder="Code fourni par l'administrateur" autocomplete="off" style="
                width:100%;box-sizing:border-box;padding:8px 12px;
                background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.12);
                border-radius:10px;font-size:15px;color:#fff;outline:none;
              " onfocus="this.style.borderColor='#22c55e'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'"
              >
              <div id="login-access-code-status" style="font-size:10px;margin-top:3px;min-height:12px"></div>
            </div>
            `:""}
            <div id="login-error" style="font-size:12px;color:#f87171;min-height:16px;text-align:center"></div>
            <button id="login-btn" ${n?"disabled":""} style="
              width:100%;padding:10px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#1A6B3C,#22c55e);
              color:#fff;font-size:15px;font-weight:900;cursor:${n?"not-allowed":"pointer"};
              box-shadow:0 4px 16px rgba(34,197,94,0.3);
              opacity:${n?"0.45":"1"};transition:transform .1s,box-shadow .1s,opacity .2s;
            " onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''" ontouchstart="this.style.transform='scale(0.98)'" ontouchend="this.style.transform=''">
              ⚽ Se connecter
            </button>
          </div>
          `:`
          <!-- INSCRIPTION -->
          <div style="display:flex;flex-direction:column;gap:8px">
            <div>
              <label style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);display:block;margin-bottom:3px;letter-spacing:.5px">EMAIL</label>
              <input type="email" id="reg-email" placeholder="manager@example.com" autocomplete="email" style="
                width:100%;box-sizing:border-box;padding:8px 12px;
                background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.12);
                border-radius:10px;font-size:15px;color:#fff;outline:none;
              " onfocus="this.style.borderColor='#22c55e'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'"
              >
            </div>
            <div>
              <label style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);display:block;margin-bottom:3px;letter-spacing:.5px">MOT DE PASSE (min. 6 caractères)</label>
              <input type="password" id="reg-password" placeholder="••••••••" autocomplete="new-password" style="
                width:100%;box-sizing:border-box;padding:8px 12px;
                background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.12);
                border-radius:10px;font-size:15px;color:#fff;outline:none;
              " onfocus="this.style.borderColor='#22c55e'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'"
              >
            </div>
            <div>
              <label style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);display:block;margin-bottom:3px;letter-spacing:.5px">CONFIRMER LE MOT DE PASSE</label>
              <input type="password" id="reg-confirm" placeholder="••••••••" autocomplete="new-password" style="
                width:100%;box-sizing:border-box;padding:8px 12px;
                background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.12);
                border-radius:10px;font-size:15px;color:#fff;outline:none;
              " onfocus="this.style.borderColor='#22c55e'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'"
              >
            </div>
            ${n?`
            <div>
              <label style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);display:block;margin-bottom:3px;letter-spacing:.5px">CODE D'ACCÈS</label>
              <input type="password" id="reg-access-code" placeholder="Code fourni par l'administrateur" autocomplete="off" style="
                width:100%;box-sizing:border-box;padding:8px 12px;
                background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.12);
                border-radius:10px;font-size:15px;color:#fff;outline:none;
              " onfocus="this.style.borderColor='#22c55e'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'"
              >
              <div id="access-code-status" style="font-size:10px;margin-top:3px;min-height:12px"></div>
            </div>
            `:""}
            <div id="reg-error" style="font-size:12px;color:#f87171;min-height:16px;text-align:center"></div>
            <button id="reg-btn" ${n?"disabled":""} style="
              width:100%;padding:10px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#1A6B3C,#22c55e);
              color:#fff;font-size:15px;font-weight:900;cursor:${n?"not-allowed":"pointer"};
              box-shadow:0 4px 16px rgba(34,197,94,0.3);
              opacity:${n?"0.45":"1"};transition:opacity .2s;
            ">
              🚀 Créer mon compte
            </button>
            <div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center">
              Gratuit · Sans carte bancaire · Pour toujours
            </div>
          </div>
          `}
        </div>
      </div>

      <!-- Badges décoratifs -->
      <div style="display:flex;gap:8px;margin-top:10px;animation:authFadeIn .5s ease .2s both">
        <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:4px 10px;font-size:10px;color:rgba(255,255,255,0.4)">⚽ 100% Gratuit</div>
        <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:4px 10px;font-size:10px;color:rgba(255,255,255,0.4)">🃏 Cartes uniques</div>
        <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:4px 10px;font-size:10px;color:rgba(255,255,255,0.4)">🏆 Classements</div>
      </div>
    </div>
    <style>
      @keyframes authFadeIn { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:none } }
      #login-email::placeholder,#login-password::placeholder,
      #reg-email::placeholder,#reg-password::placeholder,#reg-confirm::placeholder
        { color:rgba(255,255,255,0.2) }
    </style>`,(d=document.getElementById("tab-login-btn"))==null||d.addEventListener("click",()=>{o="login",r()}),(l=document.getElementById("tab-reg-btn"))==null||l.addEventListener("click",()=>{o="register",r()}),a){(s=document.getElementById("login-password"))==null||s.addEventListener("keydown",_=>{var $;_.key==="Enter"&&(($=document.getElementById("login-btn"))==null||$.click())});let f=null,h=!1;n&&((p=document.getElementById("login-access-code"))==null||p.addEventListener("input",_=>{const $=_.target.value,g=document.getElementById("login-access-code-status"),z=document.getElementById("login-btn");if(clearTimeout(f),h=!1,z&&(z.disabled=!0,z.style.opacity="0.45",z.style.cursor="not-allowed"),!$){g&&(g.textContent="");return}g&&(g.textContent="⏳ Vérification…",g.style.color="rgba(255,255,255,0.4)"),f=setTimeout(async()=>{const{data:u,error:j}=await v.rpc("check_signup_password",{input_password:$});if(j){g&&(g.textContent="Erreur de vérification.",g.style.color="#f87171");return}h=!!u,g&&(g.textContent=h?"✅ Code valide":"❌ Code incorrect",g.style.color=h?"#4ade80":"#f87171"),z&&(z.disabled=!h,z.style.opacity=h?"1":"0.45",z.style.cursor=h?"pointer":"not-allowed")},400)})),(c=document.getElementById("login-btn"))==null||c.addEventListener("click",async()=>{var T;const _=document.getElementById("login-email").value.trim(),$=document.getElementById("login-password").value,g=((T=document.getElementById("login-access-code"))==null?void 0:T.value)||"",z=document.getElementById("login-error");if(z.textContent="",!_||!$){z.textContent="Remplissez tous les champs.";return}if(n){const{data:P}=await v.rpc("check_signup_password",{input_password:g});if(!P){z.textContent="Code d'accès incorrect.";return}}const u=document.getElementById("login-btn");u.textContent="⏳ Connexion…",u.disabled=!0;const{error:j}=await v.auth.signInWithPassword({email:_,password:$});if(u.textContent="⚽ Se connecter",u.disabled=!1,j){z.textContent=j.message.includes("Invalid")?"Email ou mot de passe incorrect.":j.message;return}window.location.reload()})}else{(x=document.getElementById("reg-confirm"))==null||x.addEventListener("keydown",_=>{var $;_.key==="Enter"&&(($=document.getElementById("reg-btn"))==null||$.click())});let f=null,h=!1;n&&((y=document.getElementById("reg-access-code"))==null||y.addEventListener("input",_=>{const $=_.target.value,g=document.getElementById("access-code-status"),z=document.getElementById("reg-btn");if(clearTimeout(f),h=!1,z&&(z.disabled=!0,z.style.opacity="0.45",z.style.cursor="not-allowed"),!$){g&&(g.textContent="");return}g&&(g.textContent="⏳ Vérification…",g.style.color="rgba(255,255,255,0.4)"),f=setTimeout(async()=>{const{data:u,error:j}=await v.rpc("check_signup_password",{input_password:$});if(j){g&&(g.textContent="Erreur de vérification.",g.style.color="#f87171");return}h=!!u,g&&(g.textContent=h?"✅ Code valide":"❌ Code incorrect",g.style.color=h?"#4ade80":"#f87171"),z&&(z.disabled=!h,z.style.opacity=h?"1":"0.45",z.style.cursor=h?"pointer":"not-allowed")},400)})),(m=document.getElementById("reg-btn"))==null||m.addEventListener("click",async()=>{var Y;const _=document.getElementById("reg-email").value.trim(),$=document.getElementById("reg-password").value,g=document.getElementById("reg-confirm").value,z=((Y=document.getElementById("reg-access-code"))==null?void 0:Y.value)||"",u=document.getElementById("reg-error");if(u.textContent="",!_||!$||!g){u.textContent="Remplissez tous les champs.";return}if(!_.includes("@")||!_.includes(".")){u.textContent="Adresse email invalide.";return}if($.length<6){u.textContent="Mot de passe trop court (min. 6 caractères).";return}if($!==g){u.textContent="Les mots de passe ne correspondent pas.";return}if(n){const{data:X}=await v.rpc("check_signup_password",{input_password:z});if(!X){u.textContent="Code d'accès incorrect.";return}}const j=document.getElementById("reg-btn");j.textContent="⏳ Création…",j.disabled=!0;const{data:T,error:P}=await v.auth.signUp({email:_,password:$});if(j.textContent="🚀 Créer mon compte",j.disabled=!1,P){P.message.includes("already registered")||P.message.includes("already exists")||P.message.includes("User already")?u.textContent="Un compte existe déjà avec cette adresse email.":u.textContent=P.message;return}if(T!=null&&T.user&&Array.isArray(T.user.identities)&&T.user.identities.length===0){u.textContent="Un compte existe déjà avec cette adresse email.";return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),o="login",r(),setTimeout(()=>{const X=document.getElementById("login-email");X&&(X.value=_)},50)})}};r()}function ir(t,{state:e,navigate:i,toast:o,refreshProfile:n}){let r="#1A6B3C",a="#D4A017";t.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${a};border-color:${r}">
          <span id="logo-initials" style="color:${r}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${r};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${r}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function d(){var m;const s=document.getElementById("logo-preview"),p=document.getElementById("logo-initials"),c=((m=document.getElementById("setup-club"))==null?void 0:m.value)||"MW",x=c.trim().split(" ").filter(Boolean),y=x.length>=2?(x[0][0]+x[1][0]).toUpperCase():c.slice(0,2).toUpperCase();s&&(s.style.background=a,s.style.borderColor=r),p&&(p.textContent=y,p.style.color=r)}document.getElementById("color1").addEventListener("input",s=>{r=s.target.value,document.getElementById("swatch1").style.background=r,d()}),document.getElementById("color2").addEventListener("input",s=>{a=s.target.value,document.getElementById("swatch2").style.background=a,d()});function l(s){document.querySelectorAll(".setup-step").forEach(p=>p.classList.remove("active")),document.getElementById(`step-${s}`).classList.add("active"),document.getElementById("step-num").textContent=s,document.getElementById("progress-fill").style.width=`${Math.round(s/3*100)}%`,s===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),p=document.getElementById("step1-error");if(p.textContent="",s.length<3){p.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:c}=await v.from("users").select("id").eq("pseudo",s).maybeSingle();if(c){p.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const s=document.getElementById("setup-club").value.trim(),p=document.getElementById("step2-error");if(p.textContent="",s.length<2){p.textContent="Nom trop court (min. 2 caractères).";return}const{data:c}=await v.from("users").select("id").eq("club_name",s).maybeSingle();if(c){p.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),p=document.getElementById("setup-club").value.trim(),c=document.getElementById("step3-error"),x=document.getElementById("step3-finish");c.textContent="",x.disabled=!0,x.textContent="Création en cours…";try{const{error:y}=await v.from("users").insert({id:e.user.id,pseudo:s,club_name:p,club_color1:r,club_color2:a,credits:15e3});if(y)throw y;await or(e.user.id),await n(),o(`Bienvenue ${s} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(y){c.textContent=y.message,x.disabled=!1,x.textContent="🚀 Créer mon profil !"}})}async function or(t){const e=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1},{type:"stadium",count:1}];try{await v.from("users").update({pending_boosters:e,onboarding_done:!1,first_booster_opened:!1}).eq("id",t)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const fn="mw_sound_volume";function yo(){const t=localStorage.getItem(fn);if(t===null)return 100;const e=parseInt(t,10);return Number.isFinite(e)?Math.max(0,Math.min(100,e)):100}function nr(t){localStorage.setItem(fn,String(Math.max(0,Math.min(100,Math.round(t)))))}function vo(){return yo()===0}function Fi(t){return Math.max(0,Math.min(1,t*(yo()/100)))}function ho(t,e=1){if(vo())return null;try{const i=new Audio(t);return i.volume=Fi(e),i.play().catch(()=>{}),i}catch{return null}}let St=null,ro=null,Ro=.3;function mn(t,e=.3){if(Ro=e,St&&ro===t&&!St.paused){St.volume=Fi(Ro);return}if(ti(),!vo())try{const i=new Audio(t);i.loop=!0,i.volume=Fi(e),i.play().catch(()=>{}),St=i,ro=t}catch{}}function ti(){if(St)try{St.pause(),St.currentTime=0}catch{}St=null,ro=null}let bi=null;function gn(t,e=.6){if(it(),!vo())try{const i=new Audio(t);i.volume=Fi(e),i.play().catch(()=>{}),bi=i}catch{}}function it(){if(bi)try{bi.pause(),bi.currentTime=0}catch{}bi=null}async function bn(t=null){const e=new Date().toISOString().slice(0,10),{data:i}=await v.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const o=i.filter(a=>!(a.available_from&&e<a.available_from||a.available_until&&e>a.available_until));if(!o.length)return[];let n=o;if(t){const a=o.filter(d=>d.max_per_user!=null);if(a.length){const{data:d}=await v.from("booster_claims").select("booster_id").eq("user_id",t).in("booster_id",a.map(s=>s.id)),l={};(d||[]).forEach(s=>{l[s.booster_id]=(l[s.booster_id]||0)+1}),n=o.filter(s=>s.max_per_user==null?!0:(l[s.id]||0)<s.max_per_user)}}if(!n.length)return[];const{data:r}=await v.from("booster_drop_rates").select("*").in("booster_id",n.map(a=>a.id)).order("sort_order");return n.map(a=>({...a,rates:(r||[]).filter(d=>d.booster_id===a.id)}))}async function rr(t,e){const{data:i}=await v.from("booster_configs").select("max_per_user").eq("id",e).single();i!=null&&i.max_per_user&&await v.from("booster_claims").insert({user_id:t,booster_id:e})}function ar(t){if(!(t!=null&&t.length))return null;const e=t.reduce((o,n)=>o+Number(n.percentage),0);let i=Math.random()*e;for(const o of t)if(i-=Number(o.percentage),i<=0)return o;return t[t.length-1]}const sr="/",xn=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
    <p>Ton objectif : constituer la meilleure équipe de cartes, affronter d'autres managers et gravir les échelons du classement.</p>
    <p>Ce tutoriel va t'apprendre les bases en quelques étapes. C'est parti ! 🚀</p>`},{emoji:"🃏",title:"Ta Collection de Cartes",color:"#D4A017",content:`<p>Chaque carte représente un <strong>joueur de football</strong> avec :</p>
    <ul>
      <li>🟢 Un <strong>poste principal</strong> (GK, DEF, MIL, ATT) et sa note</li>
      <li>⭐ Un <strong>poste secondaire</strong> optionnel</li>
      <li>🌍 Une nationalité et un club</li>
    </ul>
    <p>Les cartes ont 4 raretés :<br>
      <span style="color:#ccc">■</span> Normal &nbsp;
      <span style="color:#D4A017">■</span> Pépite &nbsp;
      <span style="color:#909090">■</span> Papyte &nbsp;
      <span style="color:#7a28b8">■</span> Légende
    </p>
    <p>Ouvre des <strong>boosters</strong> pour agrandir ta collection !</p>`},{emoji:"📋",title:"Construire ton Deck",color:"#1A6B3C",content:`<p>Avant de jouer, tu dois créer un <strong>deck de 11 joueurs</strong> dans l'onglet <em>Decks</em>.</p>
    <ul>
      <li>Choisis une <strong>formation</strong> (4-3-3, 4-4-2, 5-3-2…)</li>
      <li>Place un joueur sur chaque poste</li>
      <li>Un joueur joue mieux sur son poste principal</li>
      <li>Tu peux préparer plusieurs decks pour différentes stratégies</li>
    </ul>
    <p>💡 Un bon deck est la clé de la victoire !</p>`},{emoji:"🏟️",title:"Comment se déroule un Match ?",color:"#1A6B3C",content:`<p>Un match se joue en <strong>3 phases</strong> :</p>
    <ol>
      <li>⚽ <strong>Milieu de terrain</strong> — un joueur de chaque équipe s'affronte. Le gagnant donne la possession à son équipe.</li>
      <li>🛡️ <strong>Attaque vs Défense</strong> — les attaquants affrontent les défenseurs. Si l'attaque passe, l'équipe marque.</li>
      <li>🧤 <strong>Tir au but</strong> — si l'attaque passe la défense, elle affronte le gardien. Un but est marqué si elle gagne !</li>
    </ol>
    <p>Le match se joue en <strong>plusieurs rounds</strong>. Le meilleur score à la fin remporte la victoire.</p>`},{emoji:"⚡",title:"Les Cartes Game Changer",color:"#7a28b8",content:`<p>Les <strong>Game Changer</strong> sont des cartes spéciales qui peuvent retourner un match !</p>
    <ul>
      <li>⚡ <strong>VAR</strong> — annule le dernier but adverse</li>
      <li>👥 <strong>Remplacement</strong> — effectue un remplacement supplémentaire</li>
      <li>🌧️ <strong>Météo pluvieuse</strong> — réduit les stats des attaquants adverses</li>
      <li>🟥 <strong>Carton rouge</strong> — exclut un joueur adverse</li>
      <li>⚽ <strong>Coup franc</strong> — ajoute un but en cas de match nul</li>
    </ul>
    <p>Tu peux jouer jusqu'à <strong>3 Game Changer</strong> par match. Utilise-les au bon moment !</p>`},{emoji:"🔄",title:"Les Remplacements",color:"#1A6B3C",content:`<p>Au cours d'un match, tu peux effectuer des <strong>remplacements</strong>.</p>
    <ul>
      <li>Tu as droit à <strong>3 remplacements</strong> par match (plus avec certains GC)</li>
      <li>Un joueur remplacé ne peut plus jouer</li>
      <li>Si un joueur clé est éliminé par l'adversaire, pense à le remplacer vite !</li>
    </ul>
    <p>💡 Garde tes remplacements pour les moments critiques.</p>`},{emoji:"📈",title:"Cartes Évolutives",color:"#D4A017",content:`<p>Certaines cartes évoluent avec tes résultats :</p>
    <ul>
      <li>⭐ <strong>Pépite</strong> — Démarre à sa note minimale. <span style="color:#22c55e">+2</span> en victoire, <span style="color:#cc2222">−1</span> en défaite.</li>
      <li>💎 <strong>Papyte</strong> — Démarre à sa note maximale. <span style="color:#22c55e">+1</span> en victoire, <span style="color:#cc2222">−2</span> en défaite.</li>
    </ul>
    <p>Les <strong>notes secondaires</strong> évoluent du même delta.</p>
    <p>Prends soin de tes Pépites — une série de défaites peut les affaiblir !</p>`},{emoji:"🛒",title:"Le Marché des Transferts",color:"#111",content:`<p>Tu peux <strong>acheter et vendre</strong> des cartes sur le marché !</p>
    <ul>
      <li>Vends tes doublons pour gagner des crédits</li>
      <li>Trouve la carte parfaite pour compléter ton deck</li>
      <li>Filtre par poste, rareté, note, pays ou club</li>
    </ul>
    <p>💰 Les crédits s'obtiennent aussi en remportant des matchs et en ouvrant des boosters.</p>`},{emoji:"🏆",title:"Les Mini Leagues",color:"#5b3a8c",content:`<p>Défie plusieurs managers dans un <strong>championnat privé</strong> !</p>
    <ul>
      <li>3 à 8 joueurs par league</li>
      <li>Mode <em>Aller</em> ou <em>Aller-Retour</em></li>
      <li>Chaque joueur mise des crédits — le pot est distribué au podium :<br>
        🥇 70% · 🥈 20% · 🥉 10%</li>
      <li>Leagues publiques ou privées (mot de passe)</li>
    </ul>
    <p>Le classement se met à jour après chaque match joué.</p>`},{emoji:"🎯",title:"Tu es prêt !",color:"#1A6B3C",content:`<p>Tu connais maintenant toutes les bases de <strong>Manager Wars</strong>.</p>
    <p>Pour bien démarrer :</p>
    <ol>
      <li>📦 Ouvre des <strong>boosters</strong> pour obtenir tes premières cartes</li>
      <li>📋 Crée ton premier <strong>deck</strong></li>
      <li>🤖 Entraîne-toi en <strong>Match IA</strong></li>
      <li>⚔️ Lance-toi dans le <strong>Match Aléatoire</strong> ou une <strong>Mini League</strong> !</li>
    </ol>
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function yn(t,e,i){let o=0;const n=document.createElement("div");n.id="tutorial-overlay",n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const r=()=>{var p,c,x;const d=e[o],l=o===e.length-1,s=Math.round((o+1)/e.length*100);n.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${s}%;background:${d.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${d.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${d.title}</div>
          <div style="font-size:11px;color:#aaa">${o+1} / ${e.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${d.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${sr}icons/${d.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${d.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${d.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${o>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${l?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${d.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${l?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,n.querySelectorAll("ul,ol").forEach(y=>{y.style.paddingLeft="20px",y.style.marginTop="6px",y.style.marginBottom="6px"}),n.querySelectorAll("li").forEach(y=>{y.style.marginBottom="4px"}),n.querySelectorAll("p").forEach(y=>{y.style.marginBottom="8px"}),(p=n.querySelector("#tuto-prev"))==null||p.addEventListener("click",()=>{o--,r()}),(c=n.querySelector("#tuto-next"))==null||c.addEventListener("click",()=>{l?a():(o++,r())}),(x=n.querySelector("#tuto-skip"))==null||x.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{n.remove(),t!=null&&t.id&&await v.from("users").update({tutorial_done:!0}).eq("id",t.id),i==null||i()};document.body.appendChild(n),r()}async function lr(t,e,i){let o=[];const{data:n,error:r}=await v.rpc("get_tutorial_steps");if(!r&&(n==null?void 0:n.length)>0)o=n;else{const{data:d,error:l}=await v.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(d==null?void 0:d.length)>0?o=d:i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3)}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):xn;yn(t,a,()=>e("settings"))}async function No(t,e,i){if(!t||t.tutorial_done)return;let o=[];const{data:n,error:r}=await v.rpc("get_tutorial_steps");if(!r&&(n==null?void 0:n.length)>0)o=n,console.log(`[Tutorial] RPC OK → ${o.length} étapes`);else{const{data:d,error:l}=await v.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(d==null?void 0:d.length)>0?(o=d,console.log(`[Tutorial] Direct OK → ${o.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${r==null?void 0:r.message}, Direct: ${l==null?void 0:l.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):xn;yn(t,a,()=>e("boosters"))}function Nt(){return Math.min(window.innerWidth-40,860)}function ii(){return Math.round(Nt()*1.1)}function vn(t){var n,r;if(!t)return null;const e=t._line||t.job||"MIL",i=e==="GK"?t.note_g||0:e==="DEF"?t.note_d||0:e==="MIL"?t.note_m||0:t.note_a||0,o=t.stadiumBonus?10:0;return{name:t.name,firstname:t.firstname||"",note:i+(t.boost||0)+o,note_g:t.note_g||0,note_d:t.note_d||0,note_m:t.note_m||0,note_a:t.note_a||0,_evolution_bonus:0,stadiumBonus:t.stadiumBonus||!1,boost:t.boost||0,job:t.job,job2:t.job2||null,_line:t._line||t.job,_col:t._col,country_code:t.country_code,club_id:t.club_id,rarity:t.rarity,clubName:t.clubName||((n=t.clubs)==null?void 0:n.encoded_name)||null,clubLogo:t.clubLogo||((r=t.clubs)==null?void 0:r.logo_url)||null,face:t.face||null,portrait:Ut(t)}}function dr(t,e,i,o="Adversaire"){mn("/sounds/match-opening.mp3",.3);const n=Nt(),r=ii();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${o}</div>
      
      <div style="width:100%;max-width:${n}px;margin:0 auto">
        ${si(t,e,null,[],n,r)}
      </div>
    </div>`}function hn(t){var r,a,d;if(!t)return"";const e=l=>l?qe({...l,_evolution_bonus:0},{width:52,role:l._line||l.job,showStad:!!l.stadiumBonus,extraNote:l.boost||0,context:"match"}):"",o={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[t.type]||"📋";return`
    <div style="padding:8px 12px;border-left:3px solid ${((r=t.type)==null?void 0:r.includes("goal"))?"#22c55e":"rgba(255,255,255,0.15)"};margin-bottom:4px">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px;text-align:center">${o} ${t.title||t.text||""}</div>
      ${(a=t.homePlayers)!=null&&a.length||(d=t.aiPlayers)!=null&&d.length?`
        <div style="display:flex;align-items:flex-start;justify-content:center;gap:16px">
          <div style="flex:1;display:flex;gap:3px;flex-wrap:wrap;justify-content:flex-end">
            ${(t.homePlayers||[]).map(e).join("")}
          </div>
          <div style="flex:1;display:flex;gap:3px;flex-wrap:wrap;justify-content:flex-start">
            ${(t.aiPlayers||[]).map(e).join("")}
          </div>
        </div>`:""}
      ${t.text&&t.title?`<div style="font-size:10px;color:rgba(255,255,255,0.4);margin-top:4px;text-align:center">${t.text}</div>`:""}
    </div>`}function dt(t,e,i,o,n){ho("/sounds/goal.mp3",.7);const r=document.getElementById("goal-anim-overlay");r&&r.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const d=(t||[]).slice(0,3).map(l=>qe({...l,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:l._line||l.job,showStad:!!l.stadiumBonus,context:"match"})).join("");if(a.innerHTML=`
    <div style="animation:goalPop 0.4s ease-out;text-align:center">
      <div style="font-size:clamp(48px,10vw,80px);margin-bottom:8px">⚽</div>
      <div style="font-size:clamp(28px,6vw,48px);font-weight:900;color:#22c55e;letter-spacing:2px;text-shadow:0 0 20px #22c55e">BUT !</div>
      <div style="display:flex;gap:8px;justify-content:center;margin:16px 0">${d}</div>
      <div style="font-size:clamp(32px,7vw,56px);font-weight:900;color:#fff;margin-top:8px">
        ${o?`<span style="color:#22c55e">${e}</span>`:e}
        <span style="color:rgba(255,255,255,0.4);margin:0 12px">—</span>
        ${o?i:`<span style="color:#22c55e">${i}</span>`}
      </div>
    </div>`,document.body.appendChild(a),!document.getElementById("goal-anim-style")){const l=document.createElement("style");l.id="goal-anim-style",l.textContent=`
      @keyframes goalPop {
        from { transform: scale(0.5); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }`,document.head.appendChild(l)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),n==null||n()},400)},1800)}function wn(t,e,i){const o=document.getElementById("sub-anim-overlay");o&&o.remove();const n=document.createElement("div");n.id="sub-anim-overlay",n.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const r=Math.min(120,Math.round(window.innerWidth/4)),a=t?qe({...t,_evolution_bonus:0},{width:r,role:t._line||t.job,context:"match"}):"",d=e?qe({...e,_evolution_bonus:0},{width:r,role:e._line||e.job,context:"match"}):"";n.innerHTML=`
    <div style="text-align:center">
      <div style="font-size:32px;margin-bottom:8px">🔄</div>
      <div style="font-size:18px;font-weight:700;color:#fff;margin-bottom:16px">Remplacement</div>
      <div style="display:flex;align-items:center;gap:16px;justify-content:center">
        <div style="text-align:center">
          ${a}
          <div style="font-size:10px;color:#e03030;margin-top:4px">SORT ▼</div>
        </div>
        <div style="font-size:28px;color:rgba(255,255,255,0.4)">→</div>
        <div style="text-align:center">
          ${d}
          <div style="font-size:10px;color:#22c55e;margin-top:4px">ENTRE ▲</div>
        </div>
      </div>
    </div>`,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity 0.4s",setTimeout(()=>{n.remove(),i==null||i()},400)},1600)}function Bt(t,e="rgba(0,0,0,0.85)",i=2200){const o=document.getElementById("game-toast");o&&o.remove();const n=document.createElement("div");if(n.id="game-toast",n.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${e};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,n.textContent=t,!document.getElementById("game-toast-style")){const r=document.createElement("style");r.id="game-toast-style",r.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(r)}document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity 0.3s",setTimeout(()=>n.remove(),300)},i)}function _n(t,e){const i=Ht(t,"MIL"),o=t.stadiumBonus||e&&(e.club_id&&String(t.club_id)===String(e.club_id)||e.country_code&&t.country_code===e.country_code)?10:0;return i+o}function At(t,e){return t.reduce((i,o)=>i+_n(o,e),0)}function Tt(t){let e=0;for(let i=0;i<t.length-1;i++){const o=Gt(t[i],t[i+1]);o==="#00ff88"?e+=10:o==="#FFD700"&&(e+=5)}return e}function ri(t,e,i,o,n){return`<div id="duel-row-${o}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${e}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${t.map((r,a)=>{const d=a<t.length-1?Gt(r,t[a+1]):null,l=!d||d==="#ff3333"||d==="#cc2222",s=d==="#00ff88"?"+10":d==="#FFD700"?"+5":"";_n(r,n),r.stadiumBonus||n&&(n.club_id&&String(r.club_id)===String(n.club_id)||n.country_code&&(r.country_code,n.country_code));const p=typeof window<"u"&&window.innerWidth<900;return`
          <div class="duel-card duel-card-${o}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${qe({...r,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:n,role:"MIL",extraNote:r.boost||0,compactSquare:p,context:"match"})}
          </div>
          ${a<t.length-1?`<div class="duel-link duel-link-${o}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${l?"rgba(255,255,255,0.12)":d};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${l?"none":`0 0 8px ${d}`}">
            ${s?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${d}">${s}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${o}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${At(t,n)} + ${Tt(t)} liens = <b style="color:#fff">${At(t,n)+Tt(t)}</b>
      </div>
    </div>`}const cr=typeof import.meta<"u"&&"/"||"/",Oo=cr+"icons/";function We(t,e,i,o,n,r,a,d,l,s,p,c,x){return{id:t,firstname:e,surname_real:i,job:o,job2:n,note_g:r,note_d:a,note_m:d,note_a:l,rarity:s,country_code:p,club_id:c,clubs:{encoded_name:x,logo_url:null},evolution_bonus:0,_evolution_bonus:0,face:null}}const ge={barthez:We("t1","Fabien","BARTHEZ","GK",null,80,0,0,0,"pepite","FR","OM1","OM"),vieira:We("t2","Patrick","VIEIRA","MIL","ATT",0,0,82,70,"pepite","FR","ARS","ARS"),deschamps:We("t3","Didier","DESCHAMPS","MIL",null,0,0,76,0,"normal","FR","JUV","JUV"),desailly:We("t4","Marcel","DESAILLY","DEF","MIL",0,80,68,0,"pepite","FR","CHE","CHE"),thuram:We("t5","Lilian","THURAM","DEF",null,0,82,0,0,"normal","FR","PAR","PAR"),blanc:We("t6","Laurent","BLANC","DEF",null,0,80,0,0,"normal","FR","INT","INT"),lizarazu:We("t7","Bixente","LIZARAZU","DEF",null,0,78,0,0,"normal","FR","BAY","BAY"),zidane:We("t8","Zinedine","ZIDANE","MIL","ATT",0,0,92,78,"legende","FR","JUV","JUV"),henry:We("t9","Thierry","HENRY","ATT",null,0,0,0,88,"legende","FR","ARS","ARS"),trezeguet:We("t10","David","TREZEGUET","ATT",null,0,0,0,84,"pepite","FR","JUV","JUV"),petit:We("t11","Emmanuel","PETIT","MIL",null,0,0,74,0,"normal","FR","BAR","BAR"),maradona:We("ai1","Diego","MARADONA","MIL",null,0,0,94,0,"legende","AR","NAP","NAP"),ronaldo:We("ai2","Ronaldo","NAZARIO","ATT","MIL",0,0,72,92,"legende","BR","BAR","BAR"),rivaldo:We("ai3","Ronaldo","RIVALDO","MIL",null,0,0,85,0,"pepite","BR","BAR","BAR")},pr={GK:[ge.barthez],DEF:[ge.desailly,ge.thuram,ge.blanc,ge.lizarazu],MIL:[ge.deschamps,null,ge.petit],ATT:[ge.henry,ge.trezeguet,ge.vieira]},kn={GK:[ge.barthez],DEF:[ge.desailly,ge.thuram,ge.blanc,ge.lizarazu],MIL:[ge.deschamps,ge.zidane,ge.petit],ATT:[ge.henry,ge.trezeguet,ge.vieira]},ur=[{id:"bc1",card_type:"player",evolution_bonus:0,player:ge.zidane},{id:"bc2",card_type:"player",evolution_bonus:0,player:ge.henry},{id:"bc3",card_type:"player",evolution_bonus:0,player:ge.vieira},{id:"bc4",card_type:"player",evolution_bonus:0,player:ge.desailly},{id:"bc5",card_type:"player",evolution_bonus:0,player:ge.petit}],ne=()=>window.innerWidth<900,fr=()=>ne()?100:150;let Te=null,Ci=null;function $n(t){Te||(Ci=t,ao=0,mr(),xr(0))}function mr(){Te&&Te.remove(),Te=document.createElement("div"),Te.id="tv2",Te.style.cssText="position:fixed;inset:0;z-index:9700;background:#0d1f14;overflow:hidden;display:flex;flex-direction:column",Te.innerHTML=`
    <div id="tv2-topbar" style="flex-shrink:0;background:#05080a;border-bottom:1px solid rgba(255,255,255,0.1);
      display:flex;align-items:center;justify-content:space-between;padding:0 16px;height:${ne()?"50":"56"}px;position:relative;z-index:9730">
      <img src="${Oo}logo-withname.png" style="height:${ne()?"38":"44"}px;object-fit:contain" onerror="this.style.display='none'">
      <div style="display:flex;align-items:center;gap:8px">
        <div style="background:rgba(255,215,0,0.12);border:1px solid rgba(255,215,0,0.3);border-radius:20px;padding:5px 14px;font-size:${ne()?"12":"14"}px;font-weight:800;color:#D4A017">💰 1 839 440</div>
        <div style="background:rgba(255,255,255,0.08);border-radius:20px;padding:5px 12px;font-size:14px">⚙️</div>
      </div>
      <button id="tv2-skip" style="position:absolute;top:50%;right:${ne()?"8":"70"}px;transform:translateY(-50%);
        background:rgba(255,255,255,0.12);color:#fff;border:1px solid rgba(255,255,255,0.25);border-radius:8px;
        padding:5px 12px;font-size:11px;font-weight:700;cursor:pointer;z-index:9731">✕ Passer le tuto</button>
    </div>

    <div id="tv2-screen" style="flex:1;overflow-y:auto;position:relative;z-index:9710;padding-bottom:${ne()?"65":"16"}px"></div>

    <!-- Bottom nav identique à la vraie app -->
    <div id="tv2-botnav" style="flex-shrink:0;background:#05080a;border-top:1px solid rgba(255,255,255,0.1);
      display:${ne()?"flex":"none"};align-items:stretch;justify-content:space-around;
      padding:8px 4px calc(8px + env(safe-area-inset-bottom,0px));position:relative;z-index:9730">
      ${["ACCUEIL|home2|nav-home.png","CARTES|cards|nav-collection.png","EQUIPES|decks|nav-decks.png","BOUTIQUE|boosters|nav-boosters.png","MERCATO|market|nav-market.png"].map(t=>{const[e,i,o]=t.split("|");return`<div class="tv2-tab" data-key="${i}" style="flex:1;display:flex;flex-direction:column;align-items:center;
          justify-content:center;gap:2px;padding:4px 2px;border-radius:10px;font-size:9px;font-weight:700;
          color:rgba(255,255,255,0.4);cursor:default">
          <img src="${Oo}${o}" style="width:26px;height:26px;object-fit:contain;opacity:0.5"
            onerror="this.style.display='none';this.nextSibling.style.display='block'">
          <span style="display:none;font-size:20px">⚽</span>
          ${e}
        </div>`}).join("")}
    </div>

    <!-- Overlay bulle : z-index au-dessus de tout sauf le bouton skip -->
    <div id="tv2-dim" style="position:absolute;inset:0;z-index:9720;background:rgba(0,0,0,0);display:none;pointer-events:none"></div>
    <div id="tv2-bub" style="position:absolute;z-index:9740;display:none;max-width:${ne()?Math.round(window.innerWidth*.9)+"px":"340px"};
      background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.5);padding:16px 18px;pointer-events:auto"></div>

    <div id="tv2-prog" style="position:absolute;bottom:${ne()?"65":"0"}px;left:0;right:0;height:3px;z-index:9731;background:rgba(255,255,255,0.08)">
      <div id="tv2-progbar" style="height:100%;background:#1A6B3C;transition:width .4s ease;width:0%"></div>
    </div>`,document.body.appendChild(Te),Te.querySelector("#tv2-skip").addEventListener("click",zn)}function gr(t){Te.querySelectorAll(".tv2-tab").forEach(e=>{const i=e.dataset.key===t;e.style.color=i?"#D4A017":"rgba(255,255,255,0.4)";const o=e.querySelector("img");o&&(o.style.opacity=i?"1":"0.5")})}function He(t,e){Te.querySelector("#tv2-screen").innerHTML=`<div style="padding:${ne()?"16px 16px 8px":"24px"};color:#fff">${t}</div>`,e&&gr(e),Te.querySelector("#tv2-bub").style.display="none",Te.querySelector("#tv2-dim").style.display="none",Te.querySelector("#tv2-dim").innerHTML="",Te.querySelector("#tv2-dim").style.pointerEvents="none"}function En(t,e){Te.querySelector("#tv2-progbar").style.width=Math.round(t/e*100)+"%"}function Ge({title:t,text:e,targetSel:i,side:o="bottom",btnLabel:n="Suivant →",onNext:r,isAction:a=!1}){const d=Te.querySelector("#tv2-bub"),l=Te.querySelector("#tv2-dim");d.innerHTML=`
    <div style="font-weight:900;font-size:${ne()?"14":"15"}px;color:#1a1a2e;margin-bottom:8px">${t}</div>
    <div style="font-size:${ne()?"12":"13"}px;color:#555;line-height:1.55;white-space:pre-line">${e}</div>
    ${a?`<div style="margin-top:12px;font-size:11px;color:#1A6B3C;font-weight:800">👆 ${n}</div>`:`<button id="tv2-next" style="margin-top:14px;float:right;background:#1A6B3C;color:#fff;border:none;
          border-radius:10px;padding:9px 20px;font-size:13px;font-weight:800;cursor:pointer">${n}</button>
         <div style="clear:both"></div>`}`;const s=ne()?Math.round(window.innerWidth*.88):340;d.style.width=s+"px";const p=window.innerWidth,c=window.innerHeight;if(i){const x=Te.querySelector(i);if(x){const y=x.getBoundingClientRect();l.style.display="block",l.style.pointerEvents="none",l.style.background="rgba(0,0,0,0)",l.innerHTML=`<div style="position:absolute;left:${y.left-5}px;top:${y.top-5}px;
        width:${y.width+10}px;height:${y.height+10}px;border-radius:12px;
        box-shadow:0 0 0 4000px rgba(0,0,0,0.65);z-index:9721;pointer-events:none"></div>`;const m=180;let f,h;o==="bottom"?(h=y.bottom+10,f=y.left+y.width/2-s/2):o==="top"?(h=y.top-m-10,f=y.left+y.width/2-s/2):o==="right"?(h=y.top+y.height/2-m/2,f=y.right+10):(h=y.top+y.height/2-m/2,f=y.left-s-10),f=Math.max(8,Math.min(f,p-s-8)),h=Math.max(8,Math.min(h,c-200)),d.style.left=f+"px",d.style.top=h+"px",d.style.removeProperty("transform")}}else l.style.display="block",l.style.pointerEvents="none",l.style.background="rgba(0,0,0,0)",l.innerHTML="",d.style.left="50%",d.style.top="50%",d.style.transform="translate(-50%,-50%)";if(d.style.display="block",a){if(i){const x=Te.querySelector(i);if(x){const y=m=>{const f=x.getBoundingClientRect();m.clientX>=f.left&&m.clientX<=f.right&&m.clientY>=f.top&&m.clientY<=f.bottom&&(d.style.display="none",l.style.display="none",l.innerHTML="",r==null||r())};l.style.pointerEvents="auto",l.addEventListener("click",y,{once:!0}),x.style.cursor="pointer",x.addEventListener("click",()=>{d.style.display="none",l.style.display="none",l.innerHTML="",r==null||r()},{once:!0})}}}else{const x=d.querySelector("#tv2-next");x==null||x.addEventListener("click",()=>{d.style.display="none",l.style.display="none",l.innerHTML="",r==null||r()},{once:!0})}}function Oe(t){return new Promise(e=>setTimeout(e,t))}let ao=0;const br=20;function Ke(){var t;En(++ao,br),(t=It[ao])==null||t.call(It)}const It=[];function Ue(t){It.push(t)}Ue(()=>{He(`
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px;min-height:60vh;justify-content:center">
      <div style="font-size:${ne()?"52":"72"}px">⚽</div>
      <h1 style="font-size:${ne()?"20":"26"}px;font-weight:900;margin:0">Bienvenue dans Manager Wars !</h1>
      <p style="font-size:${ne()?"13":"15"}px;color:rgba(255,255,255,0.65);max-width:380px;line-height:1.6;margin:0">
        Ce tutoriel te guide à travers toutes les mécaniques du jeu en quelques minutes.
      </p>
    </div>`),Ge({title:"🏆 Tutoriel Manager Wars",text:`Tu vas découvrir :
📌 La collection de cartes
⚽ La formation
🎁 Les boosters
🏪 Le Mercato
⚔️ Comment gagner un match !`,btnLabel:"C'est parti !",onNext:Ke})});Ue(()=>{const t=[ge.barthez,ge.desailly,ge.thuram,ge.zidane,ge.henry,ge.trezeguet,ge.petit],e=ge.zidane;He(`
    <h2 style="font-size:${ne()?"17":"21"}px;margin:0 0 14px;font-weight:900">🃏 Ma collection</h2>
    <div id="tv2-colrow" style="display:flex;gap:${ne()?"6":"10"}px;overflow-x:auto;padding-bottom:12px;-webkit-overflow-scrolling:touch">
      ${t.map(i=>{const o=i.id===e.id;return`<div style="flex-shrink:0;${o?"transform:scale(1.08);transform-origin:top;z-index:2;position:relative":"opacity:0.55"}"
          id="${o?"tv2-main-card":""}">${qe(i,{width:o?ne()?120:160:fr()*.7,context:"collection"})}</div>`}).join("")}
    </div>
    <p style="font-size:11px;color:rgba(255,255,255,0.35);margin:4px 0 0">← Glisse pour parcourir ta collection</p>`,"cards"),Oe(150).then(()=>Ge({title:"🃏 Ta collection",text:`Ici tu trouves toutes tes cartes.

La carte ZIDANE est entourée en or : c'est une carte Légende, la rareté la plus puissante du jeu !`,targetSel:"#tv2-main-card",side:"bottom",onNext:Ke}))});Ue(()=>{const t=ge.zidane,e=ne()?140:200;He(`
    <h2 style="font-size:${ne()?"17":"21"}px;margin:0 0 14px;font-weight:900">🃏 Détails d'une carte</h2>
    <div style="display:flex;${ne()?"flex-direction:column;align-items:center":"gap:28px;align-items:flex-start"}">
      <div style="flex-shrink:0">${qe(t,{width:e,context:"collection"})}</div>
      <div style="flex:1;display:flex;flex-direction:column;gap:8px;${ne()?"width:100%;margin-top:12px":""}">
        <div id="tv2-d-nom"   style="padding:10px 14px;border-radius:10px;background:rgba(255,255,255,0.06)"><b>📛 Nom :</b> ${t.surname_real}</div>
        <div id="tv2-d-note"  style="padding:10px 14px;border-radius:10px;background:rgba(255,255,255,0.06)"><b>🔢 Note principale :</b> ${t.note_m} (MIL)</div>
        <div id="tv2-d-note2" style="padding:10px 14px;border-radius:10px;background:rgba(212,160,23,0.1);border:1px solid rgba(212,160,23,0.25)"><b>🔸 Note secondaire :</b> ${t.note_a} (ATT) — peut jouer 2 postes !</div>
        <div id="tv2-d-flag"  style="padding:10px 14px;border-radius:10px;background:rgba(255,255,255,0.06)"><b>🇫🇷 Pays :</b> France → liens de nationalité +5 pts</div>
        <div id="tv2-d-club"  style="padding:10px 14px;border-radius:10px;background:rgba(255,255,255,0.06)"><b>🛡️ Club :</b> JUV → liens de club +5 pts avec coéquipiers</div>
      </div>
    </div>`,"cards");const i=[{sel:"#tv2-d-nom",t:"📛 Le nom du joueur",tx:`Affiché en haut de la carte.
Les cartes Pépite (or) et Légende (violet) ont des joueurs d'exception avec de meilleures notes.`},{sel:"#tv2-d-note",t:"🔢 La note principale",tx:`La force du joueur à son poste naturel. C'est cette note qui est utilisée lors des duels de match.

Zidane a 92 en MIL — excellent !`},{sel:"#tv2-d-note2",t:"🔸 Note secondaire",tx:`Certains joueurs polyvalents peuvent jouer à deux postes !

Zidane peut jouer MIL (92) ou ATT (78). Cette flexibilité est un gros avantage tactique.`},{sel:"#tv2-d-flag",t:"🇫🇷 Le pays",tx:`Le pays crée des liens avec les compatriotes dans ta formation.

Deux joueurs français côte à côte = +5 pts chacun lors des duels !`},{sel:"#tv2-d-club",t:"🛡️ Le club",tx:`Le club crée aussi des liens dans la formation.

Deschamps + Zidane + Trezeguet jouent tous à la Juventus → +5 pts entre voisins !`}];let o=0;const n=()=>{if(o>=i.length){Ke();return}const r=i[o++];Ge({title:r.t,text:r.tx,targetSel:r.sel,side:"right",onNext:n})};Oe(150).then(n)});Ue(()=>{const t=ge.henry;He(`
    <h2 style="font-size:${ne()?"17":"21"}px;margin:0 0 14px;font-weight:900">🃏 Interagir avec une carte</h2>
    <div style="display:flex;${ne()?"flex-direction:column;align-items:center":"gap:24px;align-items:flex-start"}">
      <div id="tv2-clickcard" style="flex-shrink:0;cursor:pointer;transition:transform .15s">
        ${qe(t,{width:ne()?130:180,context:"collection"})}
      </div>
      <div id="tv2-cardmenu" style="display:none;flex-direction:column;gap:10px;${ne()?"width:100%":"min-width:220px"}">
        <div id="tv2-m-sell"    style="padding:12px 16px;border-radius:11px;background:rgba(231,76,60,0.12);border:1px solid rgba(231,76,60,0.3);cursor:pointer">💰 <b>Vente rapide</b> — +200 crédits immédiatement</div>
        <div id="tv2-m-mercato" style="padding:12px 16px;border-radius:11px;background:rgba(26,107,60,0.12);border:1px solid rgba(26,107,60,0.3);cursor:pointer">🏪 <b>Mettre sur le Mercato</b> — fixe ton propre prix</div>
        <div id="tv2-m-evolve"  style="padding:12px 16px;border-radius:11px;background:rgba(212,160,23,0.12);border:1px solid rgba(212,160,23,0.3);cursor:pointer">⬆️ <b>Faire évoluer</b> — fusionne des doublons pour booster la note</div>
      </div>
    </div>`,"cards"),Oe(150).then(()=>{Ge({title:"👆 Clique sur la carte Henry",text:"En cliquant sur une carte, tu accèdes à des options d'action.",targetSel:"#tv2-clickcard",isAction:!0,btnLabel:"Clique sur la carte !",onNext:()=>{const e=Te.querySelector("#tv2-clickcard");e.style.transform="scale(0.95)",setTimeout(()=>e.style.transform="scale(1)",150),Te.querySelector("#tv2-cardmenu").style.display="flex";const i=[{sel:"#tv2-m-sell",t:"💰 Vente rapide",tx:`Vends immédiatement ta carte contre des crédits.
Parfait pour les doublons dont tu n'as pas besoin !`},{sel:"#tv2-m-mercato",t:"🏪 Le Mercato",tx:`Mets ta carte aux enchères.
D'autres joueurs pourront l'acheter au prix que tu fixes !`},{sel:"#tv2-m-evolve",t:"⬆️ Faire évoluer",tx:`Si tu as plusieurs fois le même joueur (doublons), tu peux les fusionner !

Chaque doublon fusionné augmente définitivement la note du joueur.`}];let o=0;const n=()=>{if(o>=i.length){Ke();return}const r=i[o++];Ge({title:r.t,text:r.tx,targetSel:r.sel,side:"right",onNext:n})};Oe(300).then(n)}})})});Ue(()=>{const t=oi({formation:"4-3-3",rarity:"normal"},ne()?120:150),e=Kt({id:"s1",name:"Stade de France",country_code:"FR"},ne()?120:150),i=Qe({gc_type:"red_card",rarity:"pepite"},ne()?120:150);He(`
    <h2 style="font-size:${ne()?"17":"21"}px;margin:0 0 14px;font-weight:900">🃏 Cartes spéciales</h2>
    <div style="display:flex;flex-wrap:wrap;gap:${ne()?"14":"20"}px;justify-content:center">
      <div style="text-align:center"><div id="tv2-c-form">${t}</div><p style="font-size:11px;color:rgba(255,255,255,0.4);margin:6px 0 0">Formation</p></div>
      <div style="text-align:center"><div id="tv2-c-stad">${e}</div><p style="font-size:11px;color:rgba(255,255,255,0.4);margin:6px 0 0">Stade</p></div>
      <div style="text-align:center"><div id="tv2-c-gc"  >${i}</div><p style="font-size:11px;color:rgba(255,255,255,0.4);margin:6px 0 0">Game Changer</p></div>
    </div>`,"cards");const o=[{sel:"#tv2-c-form",t:"📋 Carte Formation",tx:`La Formation définit la tactique de ton équipe : où se placent tes 11 joueurs sur le terrain.

La 4-3-3 est la plus équilibrée pour débuter.`},{sel:"#tv2-c-stad",t:"🏟️ Carte Stade",tx:`Le Stade donne +10 pts aux joueurs de la même nationalité ou du même club que le stade.

Le Stade de France booste tous tes joueurs français !`},{sel:"#tv2-c-gc",t:"⚡ Game Changer",tx:`Carte action secrète jouée pendant le match.

Le Carton Rouge expulse un milieu adverse et réduit son score. Utilisable une seule fois !`}];let n=0;const r=()=>{if(n>=o.length){Ke();return}const a=o[n++];Ge({title:a.t,text:a.tx,targetSel:a.sel,side:"bottom",onNext:r})};Oe(150).then(r)});Ue(()=>{const t=ne()?Math.min(window.innerWidth-32,340):380,e=Math.round(t*.92);He(`
    <h2 style="font-size:${ne()?"17":"21"}px;margin:0 0 12px;font-weight:900">👥 Ma formation</h2>
    <div style="display:flex;${ne()?"flex-direction:column":"gap:20px"};align-items:flex-start">
      <div>
        <div id="tv2-terrain" style="background:#1a5c28;border-radius:12px;overflow:hidden;width:${t}px;height:${e}px">
          ${si(pr,"4-3-3",null,[],t,e)}
        </div>
        <p style="font-size:10px;color:rgba(255,255,255,0.35);margin:5px 0 0;text-align:center">4-3-3 · Le slot milieu central est vide</p>
      </div>
      <div style="flex:1;${ne()?"width:100%;margin-top:12px":""}">
        <div id="tv2-l-pays" style="padding:10px 14px;border-radius:10px;background:rgba(255,215,0,0.07);border:1px solid rgba(255,215,0,0.2);margin-bottom:8px">🇫🇷 <b>Lien Pays +5</b> — 2 joueurs de même nationalité côte à côte</div>
        <div id="tv2-l-club" style="padding:10px 14px;border-radius:10px;background:rgba(212,160,23,0.07);border:1px solid rgba(212,160,23,0.2);margin-bottom:8px">🛡️ <b>Lien Club +5</b> — 2 coéquipiers du même club</div>
        <div id="tv2-l-stad" style="padding:10px 14px;border-radius:10px;background:rgba(79,195,247,0.07);border:1px solid rgba(79,195,247,0.2)">🏟️ <b>Bonus Stade +10</b> — joueur de la nationalité du stade</div>
      </div>
    </div>`,"decks");const i=[{sel:"#tv2-terrain",side:"right",t:"⚽ Le terrain",tx:`Voici ta formation. Chaque cercle = un joueur, le cercle grisé = slot vide (Zidane n'est pas encore placé).

Les lignes entre joueurs représentent les liens — plus de liens = plus de bonus !`},{sel:"#tv2-l-pays",side:"left",t:"🇫🇷 Lien Pays +5 pts",tx:`Deschamps, Zidane et Petit sont tous français. Placés côte à côte = +5 pts par lien lors des duels !

Mets des joueurs de même nationalité ensemble pour maximiser tes bonus.`},{sel:"#tv2-l-club",side:"left",t:"🛡️ Lien Club +5 pts",tx:`Deschamps, Zidane et Trezeguet jouent à la Juventus. Côte à côte dans la formation = +5 pts chacun !

Combine des coéquipiers pour démultiplier les bonus.`},{sel:"#tv2-l-stad",side:"left",t:"🏟️ Bonus Stade +10 pts",tx:`Avec le Stade de France équipé, chaque joueur français dans ta formation reçoit +10 pts en plus lors des duels du milieu.

C'est le bonus le plus puissant du jeu !`}];let o=0;const n=()=>{if(o>=i.length){Ke();return}const r=i[o++];Ge({title:r.t,text:r.tx,targetSel:r.sel,side:r.side,onNext:n})};Oe(150).then(n)});Ue(()=>{He(`
    <h2 style="font-size:${ne()?"17":"21"}px;margin:0 0 14px;font-weight:900">🎁 La Boutique</h2>
    <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
      <div id="tv2-bpack" style="cursor:pointer;background:linear-gradient(135deg,#1a3a2a,#0d2016);
        border:2px solid #1A6B3C;border-radius:16px;padding:24px 20px;text-align:center;width:${ne()?"140":"180"}px;
        transition:transform .15s">
        <div style="font-size:${ne()?"40":"52"}px;margin-bottom:8px">🎴</div>
        <div style="font-weight:900;font-size:14px;color:#fff">Booster Joueurs</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.45);margin:4px 0 10px">5 cartes joueurs</div>
        <div style="background:#1A6B3C;border-radius:8px;padding:8px;font-size:13px;font-weight:800;color:#fff">Ouvrir !</div>
      </div>
    </div>`,"boosters"),Oe(150).then(()=>Ge({title:"🎁 Les Boosters",text:`Les boosters contiennent des cartes aléatoires.
Plus la rareté du booster est élevée, plus tes chances d'obtenir des joueurs Pépite et Légende augmentent !

Clique sur "Ouvrir !" pour voir les 5 cartes.`,targetSel:"#tv2-bpack",isAction:!0,btnLabel:"Clique pour ouvrir !",onNext:()=>{const t=Te.querySelector("#tv2-bpack");t&&(t.style.transform="scale(0.95)",setTimeout(()=>t.style.transform="scale(1)",150)),Vi(ur,{name:"Booster Joueurs",type:"player",img:null},()=>{},()=>Ke())}}))});Ue(()=>{const t=[{p:ge.vieira,price:1200},{p:ge.blanc,price:600},{p:ge.henry,price:1800}];He(`
    <h2 style="font-size:${ne()?"17":"21"}px;margin:0 0 14px;font-weight:900">🏪 Le Mercato</h2>
    <div id="tv2-mlist" style="display:flex;flex-direction:column;gap:10px">
      ${t.map(e=>`<div style="display:flex;align-items:center;gap:12px;padding:10px 14px;
        background:rgba(255,255,255,0.05);border-radius:12px;border:1px solid rgba(255,255,255,0.08)">
        <div style="flex-shrink:0">${qe(e.p,{width:ne()?80:110,context:"mercato"})}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:800;font-size:${ne()?"13":"15"}px">${e.p.surname_real}</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.45)">${e.p.job} · ${e.p.country_code}</div>
        </div>
        <div style="text-align:right">
          <div style="font-weight:900;font-size:${ne()?"14":"16"}px;color:#D4A017">💰 ${e.price.toLocaleString()}</div>
          <div style="margin-top:5px;background:#1A6B3C;border-radius:8px;padding:5px 12px;
            font-size:12px;font-weight:700;color:#fff;cursor:pointer">Acheter</div>
        </div>
      </div>`).join("")}
    </div>`,"market"),Oe(150).then(()=>Ge({title:"🏪 Le Mercato",text:`Le Mercato est la place de marché du jeu.

Tu peux vendre tes cartes et acheter celles d'autres joueurs. Surveille régulièrement les prix pour trouver de bonnes affaires !`,targetSel:"#tv2-mlist",side:"top",onNext:Ke}))});Ue(()=>{const t=[{id:"tv2-m-solo",emoji:"🤖",label:"Solo",col:"rgba(26,107,60,0.2)",brd:"rgba(26,107,60,0.4)",txt:"Affronte l'IA niveau par niveau. Parfait pour s'entraîner et gagner des récompenses."},{id:"tv2-m-rnk",emoji:"🏆",label:"Classé",col:"rgba(212,160,23,0.2)",brd:"rgba(212,160,23,0.4)",txt:"Affronte de vrais joueurs. Grimpe dans le classement pour des récompenses exclusives."},{id:"tv2-m-ami",emoji:"👥",label:"Ami",col:"rgba(79,195,247,0.2)",brd:"rgba(79,195,247,0.4)",txt:"Défie un ami en partie privée sans impact sur le classement."},{id:"tv2-m-league",emoji:"🥇",label:"Mini-League",col:"rgba(155,89,182,0.2)",brd:"rgba(155,89,182,0.4)",txt:"Championnat à 8 managers. Classement final avec récompenses !"}];He(`
    <h2 style="font-size:${ne()?"17":"21"}px;margin:0 0 14px;font-weight:900">🏠 Les modes de jeu</h2>
    <div style="display:grid;grid-template-columns:${ne()?"1fr":"1fr 1fr"};gap:10px">
      ${t.map(n=>`<div id="${n.id}" style="padding:16px;background:${n.col};border:1px solid ${n.brd};border-radius:13px">
        <div style="font-size:${ne()?"24":"30"}px;margin-bottom:6px">${n.emoji}</div>
        <div style="font-weight:900;font-size:${ne()?"14":"16"}px;margin-bottom:4px">${n.label}</div>
        <div style="font-size:${ne()?"11":"12"}px;color:rgba(255,255,255,0.55);line-height:1.5">${n.txt}</div>
      </div>`).join("")}
    </div>`,"home");const e=t.map(n=>({sel:`#${n.id}`,t:`${n.emoji} Mode ${n.label}`,tx:n.txt+`

Tu peux rejouer ce tutoriel depuis les Réglages à tout moment.`}));let i=0;const o=()=>{if(i>=e.length){Ke();return}const n=e[i++];Ge({title:n.t,text:n.tx,targetSel:n.sel,side:"right",btnLabel:i>=e.length?"Jouer ! →":"Suivant →",onNext:o})};Oe(150).then(o)});Ue(()=>{He(`
    <h2 style="font-size:${ne()?"17":"21"}px;margin:0 0 14px;font-weight:900">⚽ Lancer un match Solo</h2>
    <div id="tv2-deckrow" style="display:flex;align-items:center;gap:12px;padding:14px;
      background:rgba(26,107,60,0.12);border:2px solid rgba(26,107,60,0.45);border-radius:13px;cursor:pointer">
      <div style="font-size:${ne()?"22":"28"}px">🇫🇷</div>
      <div style="flex:1">
        <div style="font-weight:800;font-size:${ne()?"14":"16"}px">France 98</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.45)">4-3-3 · 11/11 joueurs</div>
      </div>
      <div style="font-size:12px;color:#1A6B3C;font-weight:700">Sélectionner →</div>
    </div>`,"home"),Oe(150).then(()=>Ge({title:"⚽ Choix du deck",text:`Avant chaque match, tu choisis quelle équipe aligner.

Sélectionne le deck France 98 !`,targetSel:"#tv2-deckrow",isAction:!0,btnLabel:"Sélectionne le deck !",onNext:Ke}))});Ue(()=>{const t=Qe({gc_type:"red_card",rarity:"pepite"},ne()?100:130);He(`
    <h2 style="font-size:${ne()?"17":"21"}px;margin:0 0 14px;font-weight:900">⚡ Choix du Game Changer</h2>
    <p style="font-size:${ne()?"12":"13"}px;color:rgba(255,255,255,0.55);margin:0 0 14px">Choisis une carte action secrète à garder en main pour ce match.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px">
      <div id="tv2-gcchoice" style="cursor:pointer;padding:8px;background:rgba(212,160,23,0.08);
        border:2px solid rgba(212,160,23,0.35);border-radius:12px;text-align:center">
        ${t}
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:6px">Carton Rouge</div>
      </div>
      <div style="padding:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);
        border-radius:12px;text-align:center;opacity:0.4">
        <div style="width:${ne()?100:130}px;height:${ne()?100:130}px;display:flex;align-items:center;justify-content:center;font-size:30px">❔</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Verrouillé</div>
      </div>
    </div>`,"home"),Oe(150).then(()=>Ge({title:"⚡ Le Game Changer",text:`Garde un Game Changer secret pour surprendre ton adversaire au bon moment !

Choisis le Carton Rouge — il expulse un milieu adverse.`,targetSel:"#tv2-gcchoice",isAction:!0,btnLabel:"Sélectionner !",onNext:Ke}))});Ue(()=>{const t=[ge.deschamps,ge.zidane,ge.petit],e=[ge.maradona,ge.ronaldo,ge.rivaldo];He(`
    <h2 style="text-align:center;font-size:${ne()?"15":"19"}px;margin:0 0 16px;font-weight:900">⚔️ Duel du milieu de terrain</h2>
    <div id="tv2-scores" style="display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:20px">
      <div style="font-size:${ne()?"32":"44"}px;font-weight:900;color:#D4A017">0</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.4)">—</div>
      <div style="font-size:${ne()?"32":"44"}px;font-weight:900;color:#bb2020">0</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:20px;align-items:center">
      <div id="tv2-ai-row">${ri(e,"MILIEU ADVERSE","#bb2020","ai",null)}</div>
      <div id="tv2-home-row">${ri(t,"TON MILIEU","#D4A017","home",null)}</div>
    </div>
    <div id="tv2-gc-banner" style="display:none;margin-top:14px;padding:12px;background:rgba(212,160,23,0.12);border:1px solid rgba(212,160,23,0.3);border-radius:10px;text-align:center;font-weight:700;color:#D4A017">
      ⚡ Carton Rouge ! Ronaldo Nazario est expulsé — score adverse réduit !
    </div>`,"home"),Oe(400).then(()=>{Te.querySelectorAll(".duel-card").forEach((i,o)=>setTimeout(()=>{i.style.opacity="1",i.style.transform="translateY(0) scale(1)"},100+o*100)),Te.querySelectorAll(".duel-link").forEach((i,o)=>setTimeout(()=>i.style.opacity="1",600+o*60)),Te.querySelectorAll(".duel-score-line").forEach(i=>setTimeout(()=>i.style.opacity="1",1100)),Oe(800).then(()=>{const i=ge.deschamps.note_m+ge.zidane.note_m+ge.petit.note_m,o=ge.maradona.note_m+ge.ronaldo.note_m+ge.rivaldo.note_m,n=()=>{Te.querySelector("#tv2-gc-banner").style.display="block";const r=o-ge.ronaldo.note_m;Te.querySelector("#tv2-scores").innerHTML=`
          <div style="font-size:${ne()?"32":"44"}px;font-weight:900;color:#D4A017">${i}</div>
          <div style="font-size:14px;color:rgba(255,255,255,0.4)">—</div>
          <div style="font-size:${ne()?"32":"44"}px;font-weight:900;color:#bb2020">${r}</div>`,Oe(600).then(()=>Ge({title:"🏆 Tu gagnes le duel !",text:`Ton score : ${i} pts
Adversaire après carton rouge : ${r} pts

Tu prends l'avantage grâce au Game Changer ! Maintenant tu peux attaquer.`,onNext:Ke}))};Ge({title:"⚔️ Le duel du milieu",text:`Les scores actuels :
Toi : ${i} pts | Adversaire : ${o} pts

Tu es légèrement derrière... C'est le moment d'utiliser ton Carton Rouge sur Ronaldo Nazario !`,targetSel:"#tv2-ai-row",side:"bottom",btnLabel:"Jouer le Carton Rouge !",onNext:n})})})});Ue(()=>{const t=ne()?Math.min(window.innerWidth-32,320):340,e=Math.round(t*.92);He(`
    <h2 style="text-align:center;font-size:${ne()?"14":"18"}px;margin:0 0 8px;font-weight:900">⚽ Phase de match — Attaque</h2>
    <p style="text-align:center;font-size:${ne()?"11":"12"}px;color:rgba(255,255,255,0.5);margin:0 0 12px">Tu remportes le duel → tu attaques ! Sélectionne 3 joueurs.</p>
    <div style="display:flex;justify-content:center;margin-bottom:12px">
      <div style="background:#1a5c28;border-radius:12px;overflow:hidden;width:${t}px;height:${e}px">
        ${si(kn,"4-3-3","attack",[],t,e)}
      </div>
    </div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <button id="tv2-atk" style="background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:10px 20px;font-size:${ne()?"13":"14"}px;font-weight:800;cursor:pointer">⚔️ Attaquer (3 sélectionnés)</button>
    </div>`,"home"),Oe(150).then(()=>Ge({title:"⚔️ Phase d'attaque",text:`Tu gagnes le duel du milieu → tu attaques en premier !

Sur le terrain, les joueurs en surbrillance sont ceux que tu peux sélectionner. Choisis 3 attaquants ou milieux offensifs.`,targetSel:"#tv2-atk",isAction:!0,btnLabel:"Lancer l'attaque !",onNext:Ke}))});Ue(()=>{const t=ne()?Math.min(window.innerWidth-32,320):340,e=Math.round(t*.92);He(`
    <h2 style="text-align:center;font-size:${ne()?"14":"18"}px;margin:0 0 8px;font-weight:900">🛡️ Phase de match — Défense</h2>
    <p style="text-align:center;font-size:${ne()?"11":"12"}px;color:rgba(255,255,255,0.5);margin:0 0 12px">L'adversaire attaque ! Choisis 3 défenseurs.</p>
    <div style="display:flex;justify-content:center;margin-bottom:12px">
      <div style="background:#1a5c28;border-radius:12px;overflow:hidden;width:${t}px;height:${e}px">
        ${si(kn,"4-3-3","defense",[],t,e)}
      </div>
    </div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <button id="tv2-def" style="background:#1a3a8a;color:#fff;border:none;border-radius:10px;padding:10px 20px;font-size:${ne()?"13":"14"}px;font-weight:800;cursor:pointer">🛡️ Défendre (3 sélectionnés)</button>
    </div>`,"home"),Oe(150).then(()=>Ge({title:"🛡️ Phase de défense",text:`L'adversaire attaque maintenant !

Choisis 3 défenseurs (DEF) ou milieux défensifs. Plus leurs notes sont élevées, plus tu as de chances de stopper l'attaque.`,targetSel:"#tv2-def",isAction:!0,btnLabel:"Défendre !",onNext:Ke}))});Ue(()=>{He(`
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px;min-height:50vh;justify-content:center">
      <div style="font-size:${ne()?"48":"64"}px;font-weight:900;letter-spacing:4px">2 — 1</div>
      <div style="font-size:${ne()?"18":"22"}px;font-weight:900;color:#1A6B3C">Victoire ! 🏆</div>
      <div id="tv2-winbox" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:18px;max-width:380px;text-align:left;width:100%">
        <div style="font-weight:900;font-size:${ne()?"13":"15"}px;margin-bottom:10px">🏆 Règles pour gagner :</div>
        <div style="font-size:${ne()?"12":"13"}px;color:rgba(255,255,255,0.7);line-height:1.8">
          • <b>3 phases d'attaque</b> + <b>3 phases de défense</b><br>
          • Chaque attaque réussie = <b>+1 but</b><br>
          • Le plus de buts après les 6 phases gagne<br>
          • Égalité → <b>duel du milieu décisif</b><br>
          • Les <b>Game Changers</b> peuvent tout renverser !
        </div>
      </div>
    </div>`,"home"),Oe(150).then(()=>Ge({title:"🏆 Conditions de victoire",text:`Un match = 6 phases. Chaque attaque réussie marque 1 but.

Le joueur avec le plus de buts gagne et monte dans le classement !`,targetSel:"#tv2-winbox",side:"top",btnLabel:"Terminer ! 🚀",onNext:Ke}))});Ue(()=>{He(`
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px;min-height:70vh;justify-content:center">
      <div style="font-size:${ne()?"56":"72"}px">🏆</div>
      <h1 style="font-size:${ne()?"20":"26"}px;font-weight:900;margin:0">Tutoriel terminé !</h1>
      <p style="font-size:${ne()?"12":"14"}px;color:rgba(255,255,255,0.65);max-width:360px;line-height:1.6;margin:0">
        Tu connais maintenant toutes les bases de Manager Wars.<br>
        Ouvre tes boosters, construis ta formation et lance ton premier match !
      </p>
      <button id="tv2-finish" style="background:#1A6B3C;color:#fff;border:none;border-radius:12px;
        padding:14px 36px;font-size:${ne()?"15":"17"}px;font-weight:900;cursor:pointer;margin-top:8px">🚀 Commencer à jouer !</button>
    </div>`),Te.querySelector("#tv2-finish").addEventListener("click",zn),Te.querySelector("#tv2-progbar").style.width="100%"});function xr(t){var e;En(t,It.length-1),(e=It[t])==null||e.call(It)}async function zn(){Te&&(Te.remove(),Te=null);try{const{data:{user:t}}=await v.auth.getUser();t&&await v.from("users").update({tutorial_done:!0}).eq("id",t.id)}catch{}Ci==null||Ci()}const Ln=()=>Object.keys(vt),yr=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],so={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function vr(t){const e=t.player;if(!e)return"";const i=t.evolution_bonus||0;return qe({...e,_evolution_bonus:i},{width:140,context:"boosters"})}function wo(t){var n;const e={};(t.rates||[]).forEach(r=>{e[r.card_type]=(e[r.card_type]||0)+Number(r.percentage||0)});const i=((n=Object.entries(e).sort((r,a)=>a[1]-r[1])[0])==null?void 0:n[0])||"player",o=t.image_url||"booster-players.png";return{id:t.id,img:"/icons/"+o,name:t.name,sub:`${t.card_count} carte(s)`,cost:t.price_type==="credits"&&t.price_credits||0,costLabel:t.price_type==="credits"?`${(t.price_credits||0).toLocaleString("fr")} crédits`:t.price_type==="pub"?"1 pub":"Gratuit",cardCount:t.card_count||5,type:i,isPub:t.price_type==="pub",rates:t.rates||[],allow_duplicates:t.allow_duplicates!==!1,_boosterId:t.id,_raw:t}}async function hr(t,e,i,o){if(t.reward_type==="credits"){const n=(e.credits||0)+(t.credits_amount||0),{error:r}=await v.from("users").update({credits:n}).eq("id",e.id);if(r)throw r;return e.credits=n,{type:"credits",amount:t.credits_amount}}if(t.reward_type==="card"){const{data:n}=await v.from("players").select("firstname, surname_real, rarity").eq("id",t.player_id).single(),{error:r}=await v.from("cards").insert({owner_id:e.id,player_id:t.player_id,card_type:"player"});if(r)throw r;return{type:"card",player:n}}if(t.reward_type==="booster"){const{data:n}=await v.from("booster_configs").select("*").eq("id",t.booster_config_id).single(),{data:r}=await v.from("booster_drop_rates").select("*").eq("booster_id",t.booster_config_id);if(!n)throw new Error("Booster introuvable (peut-être supprimé depuis).");const a=wo({...n,rates:r});let d=[];return a.type==="formation"?d=await $o(e,0):a.type==="game_changer"?d=await ko(e,a.cardCount,0):a.type==="player"?d=await _o(e,a.cardCount,0):d=await Ri(e,{...a,cost:0}),{type:"booster",name:n.name,cards:d,boosterUI:a}}throw new Error("Type de récompense inconnu.")}async function wr(t,{state:e,navigate:i,toast:o}){var c,x,y;li(i,e.profile,"boosters","/icons/",o);const n=((c=e.profile)==null?void 0:c.credits)||0;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let r=[];try{r=(await bn((x=e.user)==null?void 0:x.id)).map(wo)}catch(m){console.warn("Erreur chargement boosters DB, fallback hardcodé",m)}r.length||(r=yr.map(m=>({...m,rates:[],isPub:m.id==="players_pub"})));const a=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.profile.id).then(m=>m.data||[]),d=new Set(a.filter(m=>m.card_type==="stadium").map(m=>m.stadium_id)),l=new Set(a.filter(m=>m.card_type==="formation").map(m=>m.formation)),s=new Set(a.filter(m=>m.card_type==="game_changer").map(m=>m.gc_type)),p={};for(const m of r){if(m.allow_duplicates!==!1||!((y=m.rates)!=null&&y.length))continue;const f=[...new Set((m.rates||[]).map(_=>_.card_type))];let h=!1;for(const _ of f)if(_==="stadium"){const{data:$}=await v.from("stadium_definitions").select("id");if(($||[]).some(g=>!d.has(g.id))){h=!0;break}}else if(_==="game_changer"){const{data:$}=await v.from("gc_definitions").select("name").eq("is_active",!0);if(($||[]).some(g=>!s.has(g.name))){h=!0;break}}else if(_==="formation"){const{FORMATION_LINKS:$}=await ln(async()=>{const{FORMATION_LINKS:g}=await import("./match-shared-BPr03YEd.js").then(z=>z.ab);return{FORMATION_LINKS:g}},__vite__mapDeps([0,1]));if(Object.keys($).some(g=>!l.has(g))){h=!0;break}}else{h=!0;break}h||(p[m.id]=!0)}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${n.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${r.map(m=>{const f=m.cost===0||n>=m.cost,h=p[m.id]===!0;return`<div class="booster-card ${!f||h?"disabled":""}" data-booster="${m.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${m.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${m.img}" alt="${m.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${m.name}</div>
            <div class="desc">${m.sub}</div>
            <div class="cost">${m.costLabel}</div>
            ${f?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
            ${h?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--tile-fg-dim);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,t.querySelectorAll(".booster-card:not(.disabled)").forEach(m=>{m.addEventListener("click",async()=>{const f=r.find(_=>_.id===m.dataset.booster);if(!f)return;m.style.opacity="0.5",m.style.pointerEvents="none";const h=Sn();try{await An(f,{state:e,toast:o,navigate:i,container:t})}catch(_){o(_.message,"error"),m.style.opacity="",m.style.pointerEvents=""}finally{h()}})}),t.querySelectorAll(".booster-info-btn").forEach(m=>{m.addEventListener("click",f=>{f.stopPropagation();const h=r.find(_=>_.id===m.dataset.boosterId);zr(h)})})}function Sn(){const t=document.createElement("div");return t.id="booster-loader-overlay",t.style.cssText="position:fixed;inset:0;background:rgba(10,22,40,0.92);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3500;gap:16px;color:#fff",t.innerHTML=`
    <style>
      @keyframes boosterSpin { to { transform:rotate(360deg) } }
      .booster-spinner { width:48px;height:48px;border:4px solid rgba(255,255,255,0.2);border-top-color:#D4A017;border-radius:50%;animation:boosterSpin .8s linear infinite }
    </style>
    <div class="booster-spinner"></div>
    <div style="font-size:16px;font-weight:800">🎁 Booster en cours de préparation…</div>`,document.body.appendChild(t),()=>t.remove()}async function An(t,{state:e,toast:i,navigate:o,container:n}){var c,x,y;if(t.cost>0&&e.profile.credits<t.cost){i("Crédits insuffisants","error");return}if(t._boosterId){const m=((c=t._raw)==null?void 0:c.max_per_user)??null;if(m!=null){const{count:f}=await v.from("booster_claims").select("id",{count:"exact",head:!0}).eq("user_id",e.user.id).eq("booster_id",t._boosterId);if((f||0)>=m){i(`Quota atteint pour ce booster (${m} max.)`,"error");return}}}if(t.isPub){if(!await bo("pub_mode")){dn();return}await Sr()}const{data:r}=await v.from("cards").select("card_type, player_id, formation").eq("owner_id",e.profile.id),a=new Set((r||[]).filter(m=>m.card_type==="player").map(m=>m.player_id)),d=new Set((r||[]).filter(m=>m.card_type==="formation").map(m=>m.formation));let l=[],s=null;try{if((x=t.rates)!=null&&x.length)l=await Ri(e.profile,t);else{const m=t.type||"player";m==="player"?l=await _o(e.profile,t.cardCount,t.cost):m==="game_changer"?l=await ko(e.profile,t.cardCount,t.cost):m==="formation"?l=await $o(e.profile,t.cost):l=await Ri(e.profile,t)}}catch(m){s=m.message||String(m),console.error("[Booster] Erreur:",m)}if(l!=null&&l.length&&t._boosterId&&await rr(e.user.id,t._boosterId),!(l!=null&&l.length)){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",m.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${s||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(m),(y=m.querySelector("#anim-close-err"))==null||y.addEventListener("click",()=>m.remove());return}l.forEach(m=>{m.card_type==="player"&&m.player?m.isDuplicate=a.has(m.player.id):m.card_type==="formation"&&(m.isDuplicate=d.has(m.formation))});const{data:p}=await v.from("users").select("*").eq("id",e.profile.id).single();p&&(e.profile=p),Tn(e.profile.id,t,l),Vi(l,t,o,null,{state:e,toast:i,container:n})}function _r(){const t=Math.random()*100;return t<.5?"legende":t<2?"special":t<10?"normal_high":"normal_low"}function zt(t){return Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function kr(t,e){let i;switch(e){case"legende":i=t.filter(o=>o.rarity==="legende"),i.length||(i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=t.filter(o=>zt(o)>=6));break;case"special":i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=t.filter(o=>zt(o)>=6));break;case"normal_high":i=t.filter(o=>o.rarity==="normal"&&zt(o)>=6),i.length||(i=t.filter(o=>zt(o)>=6));break;default:i=t.filter(o=>o.rarity==="normal"&&zt(o)>=1&&zt(o)<=5),i.length||(i=t.filter(o=>o.rarity==="normal"));break}return i.length||(i=t),i[Math.floor(Math.random()*i.length)]}async function Ri(t,e){var M;if(e.cost>0){const{error:w}=await v.from("users").update({credits:t.credits-e.cost}).eq("id",t.id);if(w)throw w;t.credits-=e.cost,di(t.credits)}const i=e.allow_duplicates!==!1,o=e.rates||[],n=o.some(w=>w.card_type==="player"),r=o.some(w=>w.card_type==="game_changer"),a=o.some(w=>w.card_type==="stadium");let d=[];const{data:l,error:s}=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.id);if(s){const{data:w}=await v.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",t.id);d=w||[]}else d=l||[];const p=new Set(d.filter(w=>w.card_type==="player").map(w=>w.player_id)),c=new Set(d.filter(w=>w.card_type==="formation").map(w=>w.formation)),x=new Set(d.filter(w=>w.card_type==="game_changer").map(w=>w.gc_type)),y=new Set(d.filter(w=>w.card_type==="stadium").map(w=>w.stadium_id).filter(Boolean)),[m,f,h]=await Promise.all([n?v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0):Promise.resolve({data:[]}),r?v.from("gc_definitions").select("id,name,color,effect,image_url,gc_type").eq("is_active",!0).eq("gc_type","game_changer"):Promise.resolve({data:[]}),a?v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)"):Promise.resolve({data:[]})]),_=m.data||[],$=(M=f.data)!=null&&M.length?f.data:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],g=h.data||[],z=w=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[w]||w,u=new Set,j=[],T=[];for(let w=0;w<(e.cardCount||5);w++){const b=ar(o);if(b){if(b.card_type==="player"){const E=b.rarity?z(b.rarity):null;let H=E?_.filter(de=>de.rarity===E):_;if(b.note_min||b.note_max){const de=H.filter(I=>{const L=Math.max(Number(I.note_g)||0,Number(I.note_d)||0,Number(I.note_m)||0,Number(I.note_a)||0);return(!b.note_min||L>=b.note_min)&&(!b.note_max||L<=b.note_max)});H=de.length?de:H}if(!H.length)continue;let S=H.filter(de=>!u.has(de.id));if(i)S.length||(S=H);else if(S=S.filter(de=>!p.has(de.id)),!S.length)continue;const G=S[Math.floor(Math.random()*S.length)];u.add(G.id),j.push({owner_id:t.id,player_id:G.id,card_type:"player"}),T.push({kind:"player",player:G,isDuplicate:p.has(G.id)})}else if(b.card_type==="game_changer"){const E=i?$:$.filter(S=>!x.has(S.name));if(!i&&!E.length)continue;const H=E[Math.floor(Math.random()*E.length)];j.push({owner_id:t.id,card_type:"game_changer",gc_type:H.name,gc_definition_id:H.id||null}),T.push({kind:"gc",gcDef:H})}else if(b.card_type==="formation"){const E=Ln(),H=i?E:E.filter(G=>!c.has(G));if(!i&&!H.length)continue;const S=H[Math.floor(Math.random()*H.length)];j.push({owner_id:t.id,card_type:"formation",formation:S}),T.push({kind:"formation",isDuplicate:c.has(S)})}else if(b.card_type==="stadium"){if(!g.length){console.warn("[Booster] Aucun stade en DB");continue}const E=i?g:g.filter(S=>!y.has(S.id));if(!i&&!E.length)continue;const H=E[Math.floor(Math.random()*E.length)];j.push({owner_id:t.id,card_type:"stadium",stadium_id:H.id}),T.push({kind:"stadium",stadDef:H})}}}if(!j.length)return[];const{data:P,error:Y}=await v.from("cards").insert(j).select();if(Y||!(P!=null&&P.length))return console.error("[Booster] insert cartes:",Y==null?void 0:Y.message),[];const X=P.map((w,b)=>{const E=T[b];return E.kind==="player"?{...w,player:E.player,isDuplicate:E.isDuplicate}:E.kind==="gc"?{...w,_gcDef:E.gcDef}:E.kind==="formation"?{...w,isDuplicate:E.isDuplicate}:E.kind==="stadium"?{...w,rarity:"normal",_stadiumDef:E.stadDef}:w});return X.forEach((w,b)=>{T[b].kind==="player"&&v.rpc("record_transfer",{p_card_id:w.id,p_player_id:T[b].player.id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),X}async function _o(t,e,i){if(i>0){const{error:s}=await v.from("users").update({credits:t.credits-i}).eq("id",t.id);if(s)throw s;t.credits-=i,di(t.credits)}const{data:o}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const n=o.filter(s=>s.job==="GK"),r=o.filter(s=>s.job!=="GK"),a=!t.first_booster_opened&&n.length>0,d=[];for(let s=0;s<e;s++){const p=s===0&&a?n:s===0?r:o,c=_r(),x=kr(p,c);x&&d.push(x)}a&&await v.from("users").update({first_booster_opened:!0}).eq("id",t.id);const{data:l}=await v.from("cards").insert(d.map(s=>({owner_id:t.id,player_id:s.id,card_type:"player"}))).select();return(l||[]).forEach((s,p)=>{v.rpc("record_transfer",{p_card_id:s.id,p_player_id:d[p].id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((s,p)=>({...l[p],player:s}))}async function ko(t,e,i){const{error:o}=await v.from("users").update({credits:t.credits-i}).eq("id",t.id);if(o)throw o;t.credits-=i,di(t.credits);const{data:n}=await v.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),r=n!=null&&n.length?n:Object.keys(so).map(c=>({name:c,gc_type:"game_changer"})),a=Array.from({length:e},()=>r[Math.floor(Math.random()*r.length)]),d=a.map(c=>({owner_id:t.id,card_type:"game_changer",gc_type:c.name,gc_definition_id:c.id||null})),{data:l,error:s}=await v.from("cards").insert(d).select();return s&&console.error("[Booster GC] Erreur insert:",s.message,s),(l||[]).map((c,x)=>({...c,_gcDef:a[x]||null}))}async function $o(t,e){const{error:i}=await v.from("users").update({credits:t.credits-e}).eq("id",t.id);if(i)throw i;t.credits-=e,di(t.credits);const{data:o}=await v.from("cards").select("formation").eq("owner_id",t.id).eq("card_type","formation"),n=new Set((o||[]).map(p=>p.formation)),r=Ln(),a=r[Math.floor(Math.random()*r.length)],d=n.has(a),{data:l,error:s}=await v.from("cards").insert({owner_id:t.id,card_type:"formation",formation:a}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),(l||[]).map(p=>({...p,isDuplicate:d}))}async function $r(t,e){const{data:i}=await v.from("cards").select("stadium_id").eq("owner_id",t.id).eq("card_type","stadium"),o=new Set((i||[]).map(s=>s.stadium_id).filter(Boolean)),{data:n}=await v.from("stadium_definitions").select("*");if(!(n!=null&&n.length))throw new Error("Aucun stade configuré en base.");const r=n[Math.floor(Math.random()*n.length)],a=o.has(r.id),{data:d,error:l}=await v.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:r.id}).select();return l&&console.error("[Booster Stade] Erreur insert:",l.message,l),(d||[]).map(s=>({...s,isDuplicate:a,_stadiumDef:r}))}async function Tn(t,e,i){try{const o=(i||[]).map(n=>{var r,a,d,l,s;return{card_type:n.card_type,name:n.card_type==="player"?[(r=n.player)==null?void 0:r.firstname,(a=n.player)==null?void 0:a.surname_real].filter(Boolean).join(" "):((d=n._stadiumDef)==null?void 0:d.name)||((l=n._gcDef)==null?void 0:l.name)||n.formation||n.gc_type||null,rarity:((s=n.player)==null?void 0:s.rarity)||null,note:n.current_note??null,is_duplicate:!!n.isDuplicate}});await v.from("booster_openings").insert({user_id:t,booster_name:(e==null?void 0:e.name)||null,booster_type:(e==null?void 0:e.type)||null,cards:o,nb_cards:o.length})}catch(o){console.warn("[Booster] journalisation ignorée:",o==null?void 0:o.message)}}function Vi(t,e,i,o=null,n=null){var b,E,H,S,G,de,I;if(!t||t.length===0){const L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",L.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(L),(b=L.querySelector("#anim-close-err"))==null||b.addEventListener("click",()=>L.remove());return}t=[...t].sort((L,Q)=>{const U=L.player?zt(L.player):-1;return(Q.player?zt(Q.player):-1)-U});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
        ${e.name} · ${t.length} carte${t.length>1?"s":""}
      </div>
      <div class="pack-visual" id="pack-visual" style="position:relative;animation:packFloat 2s ease-in-out infinite">
        <div id="pack-cut-zone" style="position:relative;width:180px;height:280px;touch-action:none;cursor:grab;user-select:none;-webkit-user-select:none">
          <div class="pack-half pack-half-bottom"><img src="${e.img}" alt="${e.name}" draggable="false"></div>
          <div class="pack-half pack-half-top"><img src="${e.img}" alt="${e.name}" draggable="false"></div>
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
      <div id="reveal-btns" style="display:none;flex-direction:column;gap:10px;width:100%;max-width:400px;margin-top:4px">
        <button class="btn btn-primary" id="reveal-reopen" style="width:100%"></button>
        <div style="display:flex;flex-direction:row;gap:10px">
          <button class="btn btn-ghost" id="reveal-collection" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Voir ma collection</button>
          <button class="btn btn-ghost" id="reveal-shop" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">🏪 Boutique</button>
        </div>
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
  `,document.body.appendChild(r);let a=!1;const d=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let s=!1;const p=L=>L.touches&&L.touches[0]?L.touches[0].clientX:L.clientX;function c(L){a||(s=!0,l.style.opacity="1",x(L))}function x(L){if(!s||a)return;const Q=d.getBoundingClientRect(),U=p(L)-Q.left,te=Math.max(0,Math.min(1,U/Q.width));l.style.width=te*Q.width+"px",te>=.82&&m()}function y(){a||(s=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{a||(l.style.transition="")},220))}function m(){var Q;if(a)return;a=!0,s=!1,l.style.width="100%",l.style.opacity="1",(Q=document.getElementById("cut-flash"))==null||Q.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const L=document.getElementById("cut-hint");L&&(L.style.opacity="0"),d.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",$(0)},620)}d.addEventListener("pointerdown",c),window.addEventListener("pointermove",x),window.addEventListener("pointerup",y),d.addEventListener("touchstart",c,{passive:!0}),window.addEventListener("touchmove",x,{passive:!0}),window.addEventListener("touchend",y);let f=0,h=!1;const _=new Set;function $(L){f=L,document.getElementById("reveal-phase").style.display="flex",g(),z(L,0),Y()}function g(){const L=document.getElementById("card-dots");L&&(L.innerHTML=t.map((Q,U)=>`<div class="card-dot" data-i="${U}" style="width:8px;height:8px;border-radius:50%;background:${U===f?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),L.querySelectorAll(".card-dot").forEach(Q=>Q.addEventListener("click",()=>j(parseInt(Q.dataset.i)))))}function z(L,Q){var _e,ye;const U=t[L],te=document.getElementById("card-counter"),pe=document.getElementById("card-track");te&&(te.textContent=`Carte ${L+1} / ${t.length}`);const he=document.getElementById("reveal-btns");he&&(he.style.display=L===t.length-1?"flex":"none");const fe=U.card_type==="player"&&((_e=U.player)==null?void 0:_e.rarity)==="legende",Be=!_.has(L);if(_.add(L),U.card_type==="player"&&U.player){const Ee=U.player,D=Ee.job||"ATT";(Number(D==="GK"?Ee.note_g:D==="DEF"?Ee.note_d:D==="MIL"?Ee.note_m:Ee.note_a)||0)+(U.evolution_bonus||0)}const Fe=Ee=>{pe.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${fe?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Er(U)}</div>
          ${U.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const D=document.getElementById("current-card-wrap");Q!==0?(D.style.transition="none",D.style.transform=`translateX(${Q>0?100:-100}%)`,requestAnimationFrame(()=>{D.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",D.style.transform="translateX(0)"})):D.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),Ee||fe?M():w(),g()};Be&&((ye=U.player)==null?void 0:ye.rarity)==="legende"&&U.card_type==="player"&&U.player?u(U,()=>Fe(!0)):Fe(!1)}function u(L,Q){var xe;h=!0;const U=L.player,te=`https://flagsapi.com/${U.country_code}/flat/64.png`,pe=(xe=U.clubs)==null?void 0:xe.logo_url,he=Ut(U),fe=U.job||"ATT",Be=Number(fe==="GK"?U.note_g:fe==="DEF"?U.note_d:fe==="MIL"?U.note_m:U.note_a)||0,Fe=L.evolution_bonus||0,_e=Be+Fe,ye=U.rarity==="legende",Ee=_e>=18,D=document.getElementById("walkout-overlay"),C=document.getElementById("walkout-stage");if(!D||!C){h=!1,Q();return}let K=null;ye&&(K=ho("/sounds/Legendary.mp3",.8)),D.style.display="flex";const W=()=>{const ue=C.firstElementChild;ue&&(ue.classList.remove("wo-in"),ue.classList.add("wo-out"))},J=1800,F=400;C.innerHTML=`<img class="wo-in" src="${te}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(W,J),setTimeout(()=>{var ue;C.innerHTML=pe?`<img class="wo-in" src="${pe}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((ue=U.clubs)==null?void 0:ue.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},J+F),setTimeout(W,J*2+F),setTimeout(()=>{C.innerHTML=he?`<img class="wo-in" src="${he}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(J+F)*2),setTimeout(W,(J+F)*2+J);const me=Ee?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[fe]||"#fff";setTimeout(()=>{C.innerHTML=`<div class="wo-in" style="
        font-size:${Ee?"120px":"90px"};font-weight:900;color:${me};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${me}, 0 0 60px ${me};
        ${Ee?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${_e}
      </div>`,Ee&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(J+F)*3),setTimeout(W,(J+F)*3+J),setTimeout(()=>{D.style.display="none",C.innerHTML="",h=!1,K&&!ye&&K.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),Q()},(J+F)*4)}function j(L){if(h||L<0||L>=t.length||L===f)return;const Q=L>f?1:-1;f=L,z(L,Q)}function T(){j(f+1)}function P(){j(f-1)}function Y(){const L=document.getElementById("card-viewport");if(!L||L._swipeBound)return;L._swipeBound=!0;let Q=0,U=0,te=0,pe=!1;const he=ye=>ye.touches?ye.touches[0].clientX:ye.clientX,fe=ye=>ye.touches?ye.touches[0].clientY:ye.clientY,Be=ye=>{pe=!0,Q=he(ye),U=fe(ye),te=0},Fe=ye=>{if(!pe)return;te=he(ye)-Q;const Ee=fe(ye)-U;if(Math.abs(te)<Math.abs(Ee))return;const D=document.getElementById("current-card-wrap");D&&(D.style.transition="none",D.style.transform=`translateX(${te*.6}px) rotate(${te*.02}deg)`)},_e=()=>{if(!pe)return;pe=!1;const ye=document.getElementById("current-card-wrap"),Ee=55;te<=-Ee&&f<t.length-1?T():te>=Ee&&f>0?P():ye&&(ye.style.transition="transform .2s ease",ye.style.transform="translateX(0)")};L.addEventListener("pointerdown",Be),L.addEventListener("pointermove",Fe),L.addEventListener("pointerup",_e),L.addEventListener("pointercancel",_e),L.addEventListener("touchstart",Be,{passive:!0}),L.addEventListener("touchmove",Fe,{passive:!0}),L.addEventListener("touchend",_e),L.addEventListener("click",ye=>{if(Math.abs(te)>8)return;const Ee=L.getBoundingClientRect();ye.clientX-Ee.left>Ee.width/2?T():P()})}let X=null;function M(){const L=document.getElementById("fireworks-canvas");if(!L)return;L.width=window.innerWidth,L.height=window.innerHeight;const Q=L.getContext("2d"),U=[];function te(){const he=Math.random()*L.width,fe=Math.random()*L.height*.6,Be=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Fe=Be[Math.floor(Math.random()*Be.length)];for(let _e=0;_e<60;_e++){const ye=Math.PI*2/60*_e,Ee=2+Math.random()*5;U.push({x:he,y:fe,vx:Math.cos(ye)*Ee,vy:Math.sin(ye)*Ee,alpha:1,color:Fe,size:2+Math.random()*3})}}te(),X=setInterval(te,600);function pe(){if(document.getElementById("fireworks-canvas")){Q.clearRect(0,0,L.width,L.height);for(let he=U.length-1;he>=0;he--){const fe=U[he];if(fe.x+=fe.vx,fe.y+=fe.vy+.08,fe.vy*=.98,fe.alpha-=.018,fe.alpha<=0){U.splice(he,1);continue}Q.globalAlpha=fe.alpha,Q.fillStyle=fe.color,Q.beginPath(),Q.arc(fe.x,fe.y,fe.size,0,Math.PI*2),Q.fill()}Q.globalAlpha=1,(X!==null||U.length>0)&&requestAnimationFrame(pe)}}pe()}function w(){X!==null&&(clearInterval(X),X=null);const L=document.getElementById("fireworks-canvas");L&&L.getContext("2d").clearRect(0,0,L.width,L.height)}if(o){const L=document.getElementById("reveal-btns");L&&(L.style.flexDirection="row",L.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(E=document.getElementById("reveal-next"))==null||E.addEventListener("click",()=>{w(),r.remove(),o()})}else{const L=document.getElementById("reveal-reopen"),Q=e.cost||0,U=Number((S=(H=n==null?void 0:n.state)==null?void 0:H.profile)==null?void 0:S.credits)||0,te=!Q||U>=Q;if(L)if(n){L.textContent=`🎁 Ouvrir un autre booster${Q?` (${Q.toLocaleString("fr")} cr.)`:""}`;const pe=fe=>{L.disabled=!0,L.style.opacity="0.45",L.style.cursor="not-allowed",fe&&(L.title=fe)};te||pe("Crédits insuffisants");const he=((G=e._raw)==null?void 0:G.max_per_user)??null;te&&he!=null&&((I=(de=n==null?void 0:n.state)==null?void 0:de.user)!=null&&I.id)&&v.from("booster_claims").select("id",{count:"exact",head:!0}).eq("user_id",n.state.user.id).eq("booster_id",e._boosterId).then(({count:fe})=>{(fe||0)>=he&&pe(`Quota atteint (${he} max.)`)}),L.addEventListener("click",()=>{if(L.disabled)return;w(),r.remove();const fe=Sn();An(e,{state:n.state,toast:n.toast,navigate:i,container:n.container}).finally(fe)})}else L.textContent="🎁 Ouvrir un autre booster",L.addEventListener("click",()=>{w(),r.remove(),i("boosters")});document.getElementById("reveal-collection").addEventListener("click",()=>{w(),r.remove(),i("collection")}),document.getElementById("reveal-shop").addEventListener("click",()=>{w(),r.remove(),i("boosters")})}}function Er(t){var e,i,o,n;if(t.card_type==="player"&&t.player)return vr(t);if(t.card_type==="game_changer"){const r=t._gcDef,a=(r==null?void 0:r.name)||t.gc_type||"Game Changer",d=(r==null?void 0:r.effect)||((e=so[t.gc_type])==null?void 0:e.desc)||"",l=r!=null&&r.image_url?`/icons/${r.image_url}`:null,s=((i=so[t.gc_type])==null?void 0:i.icon)||"⚡";return Qe(a,l,s,d,{width:170})}if(t.card_type==="formation")return oi(t.formation,vt[t.formation],{width:160});if(t.card_type==="stadium"){const r=t._stadiumDef,a=(r==null?void 0:r.name)||"Stade",d=((o=r==null?void 0:r.club)==null?void 0:o.encoded_name)||(r==null?void 0:r.country_code)||"—",l=r!=null&&r.image_url?`/icons/${r.image_url}`:((n=r==null?void 0:r.club)==null?void 0:n.logo_url)||(r!=null&&r.country_code?`https://flagsapi.com/${r.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),s=`${d}<br>+10 ⭐ joueurs alliés`;return Kt(a,l,s,{width:170})}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function zr(t){var e,i;if((e=t==null?void 0:t.rates)!=null&&e.length){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const n={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},r={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};o.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${t.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${t.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${r[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${n[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(o),o.addEventListener("click",a=>{a.target===o&&o.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>o.remove());return}Lr()}function Lr(){const t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(t),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.getElementById("odds-close").addEventListener("click",()=>t.remove())}function Sr(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.92);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:14px;color:#fff;padding:16px;
    `,e.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="width:400px;max-width:100%;height:400px;max-height:60vh;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center">
        <ins class="adsbygoogle"
          style="display:inline-block;width:400px;height:400px"
          data-ad-client="ca-pub-5827602487507112"
          data-ad-slot="6638827438"></ins>
      </div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Ton booster arrive dans <span id="mw-ad-cd">5</span>s…</div>
    `,document.body.appendChild(e);try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(n){console.warn("[AdSense]",n)}let i=5;const o=setInterval(()=>{i--;const n=document.getElementById("mw-ad-cd");n&&(n.textContent=i),i<=0&&(clearInterval(o),e.remove(),t(!0))},1e3)})}async function Ar(t,{state:e,navigate:i,toast:o,refreshProfile:n}){var $;const{data:r}=await v.from("users").select("*").eq("id",e.user.id).single();r&&(e.profile=r);let a=Array.isArray(($=e.profile)==null?void 0:$.pending_boosters)?[...e.profile.pending_boosters]:[];{let g=0;a.forEach(z=>{z.type==="player"&&(z._ordinal=++g)})}if(!a.length){await v.from("users").update({onboarding_done:!0}).eq("id",e.user.id),i("home");return}let d=null;try{const z=(await bn()).find(u=>(u.name||"").toLowerCase().includes("new player"));z&&(d=wo(z))}catch(g){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',g)}const l=a.length;let s=0,p=0;const c={1:"1er",2:"2e",3:"3e",4:"4e"},x=[{type:"stadium",label:"Booster Stade",icon:"/icons/booster-stade.png"},{type:"formation",label:"Booster Formation",icon:"/icons/booster-formation.png"},{type:"game_changer",label:"Booster Game Changer",icon:"/icons/booster-gamechanger.png"}];function y(){const g=[];return a.filter(z=>z.type==="player").forEach(z=>{g.push({type:"player",queueItem:z,label:`Ouvrir mon ${c[z._ordinal]||z._ordinal+"e"} booster`,icon:"/icons/booster-players.png"})}),x.forEach(z=>{a.some(u=>u.type===z.type)&&g.push({type:z.type,label:z.label,icon:z.icon})}),g}async function m(){const{data:g,error:z}=await v.rpc("get_tutorial_steps");if(!z&&(g==null?void 0:g.length)>0)return g.map(j=>({emoji:j.emoji,title:j.title,color:j.color,content:j.content,image_url:j.image_url||null}));const{data:u}=await v.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");return(u==null?void 0:u.length)>0?u.map(j=>({emoji:j.emoji,title:j.title,color:j.color,content:j.content,image_url:j.image_url||null})):null}function f(){var j;const g=!!e.profile.tutorial_done,z=y(),u=l-z.length;t.innerHTML=`
    <div class="page" style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#0a3d1e,#063015);padding:24px">
      <div style="max-width:440px;width:100%;background:rgba(0,0,0,0.35);border:1px solid rgba(255,215,0,0.35);border-radius:16px;padding:20px;color:#fff">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:2px">
          <span style="font-size:26px">🎁</span>
          <h2 style="font-size:19px;font-weight:900;margin:0">Premiers pas</h2>
        </div>
        <p style="font-size:12.5px;color:rgba(255,255,255,0.55);margin:0 0 16px">
          ${z.length} récompense${z.length>1?"s":""} à récupérer${g?"":" — termine le tutoriel pour les débloquer"}
        </p>

        <div id="reward-row-tuto" style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;
          background:rgba(255,255,255,0.06);margin-bottom:10px">
          <div style="width:44px;height:44px;border-radius:10px;background:rgba(255,215,0,0.15);display:flex;align-items:center;justify-content:center;font-size:22px">🎓</div>
          <div style="flex:1">
            <div style="font-weight:800;font-size:14px">Tutoriel</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.5)">${g?"Terminé ✅":"À faire pour débloquer tes boosters"}</div>
          </div>
          <button class="btn btn-sm" id="btn-do-tutorial" style="background:${g?"rgba(255,255,255,0.12)":"#1A6B3C"};color:#fff;border:none;font-weight:700;white-space:nowrap">
            ${g?"Revoir":"Faire le tutoriel"}
          </button>
        </div>

        ${z.map(T=>{var P;return`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;
          background:rgba(255,255,255,0.06);margin-bottom:10px;opacity:${g?"1":"0.45"}">
          <img src="${T.icon}" style="width:44px;height:44px;object-fit:contain;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1">
            <div style="font-weight:800;font-size:14px">${T.type==="player"?"Booster Joueurs":T.label}</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.5)">${g?"Prêt à ouvrir":"Verrouillé"}</div>
          </div>
          <button class="btn btn-sm reward-open-btn" data-type="${T.type}" data-ordinal="${((P=T.queueItem)==null?void 0:P._ordinal)||""}" ${g?"":"disabled"}
            style="background:${g?"#1A6B3C":"rgba(255,255,255,0.1)"};color:#fff;border:none;font-weight:700;
            cursor:${g?"pointer":"not-allowed"};white-space:nowrap">
            ${g?T.type==="player"?T.label:"Ouvrir 🎉":"🔒"}
          </button>
        </div>`}).join("")}

        ${u>0?`<div style="font-size:11px;color:rgba(255,255,255,0.4);text-align:center;margin-top:4px">${u} déjà récupérée${u>1?"s":""} ✅</div>`:""}
      </div>
    </div>`,(j=document.getElementById("btn-do-tutorial"))==null||j.addEventListener("click",async()=>{await m(),$n(async()=>{await v.from("users").update({tutorial_done:!0}).eq("id",e.user.id),n&&await n();const{data:T}=await v.from("users").select("*").eq("id",e.user.id).single();T&&(e.profile=T),f()})}),t.querySelectorAll(".reward-open-btn").forEach(T=>{T.addEventListener("click",()=>{if(T.disabled)return;const P=T.dataset.type,Y=T.dataset.ordinal?Number(T.dataset.ordinal):null,X=Y!=null?a.find(M=>M.type==="player"&&M._ordinal===Y):a.find(M=>M.type===P);X&&(p=1,_(X))})})}f();const h=async()=>{await v.from("users").update({pending_boosters:a}).eq("id",e.user.id)};async function _(g=null){var Y;if(!a.length){await v.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",e.user.id),n&&await n(),o("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const z=g||a[0],{data:u}=await v.from("users").select("*").eq("id",e.user.id).single();u&&(e.profile=u);let j=[];try{if(z.type==="formation")j=await $o(e.profile,0);else if(z.type==="game_changer")j=await ko(e.profile,z.count||3,0);else if(z.type==="stadium")j=await $r(e.profile,0);else if(d&&((Y=d.rates)!=null&&Y.length)){const X={...d,cost:0,cardCount:z.count||d.cardCount||5};j=await Ri(e.profile,X),z.guaranteeGK&&!e.profile.first_booster_opened&&(j.some(w=>w.player&&w.player.job==="GK")||await Tr(e.profile,j),await v.from("users").update({first_booster_opened:!0}).eq("id",e.profile.id))}else j=await _o(e.profile,z.count||5,0)}catch(X){o(X.message||"Erreur ouverture booster","error");return}const T=a.indexOf(z);T!==-1&&a.splice(T,1),s++,await h();const P=z.type==="formation"?{name:"Booster Formation",type:"formation",img:"/icons/booster-formation.png"}:z.type==="game_changer"?{name:"Booster Game Changer",type:"game_changer",img:"/icons/booster-gamechanger.png"}:z.type==="stadium"?{name:"Booster Stade",type:"stadium",img:"/icons/booster-stade.png"}:{name:`Booster Joueurs (${z._ordinal||s}/4)`,type:"player",img:(d==null?void 0:d.img)||"/icons/booster-players.png"};Tn(e.profile.id,P,j),p--,Vi(j,P,i,()=>{p>0&&a.length?_():a.length?f():_()})}}async function Tr(t,e){try{const{data:i}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const o=i[Math.floor(Math.random()*i.length)],n=e.findIndex(a=>a.player);if(n===-1)return;const r=e[n];await v.from("cards").update({player_id:o.id}).eq("id",r.id),e[n]={...r,player_id:o.id,player:o}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Ir=[{key:"home2",route:"home2",label:"ACCUEIL",icon:"nav-home.png"},{key:"cards",route:"collection",label:"CARTES",icon:"nav-collection.png"},{key:"decks",route:"decks",label:"EQUIPES",icon:"nav-decks.png"},{key:"boosters",route:"boosters",label:"BOUTIQUE",icon:"nav-boosters.png"},{key:"market",route:"market",label:"MERCATO",icon:"nav-market.png"}];function li(t,e,i,o,n){if(!document.getElementById("home2-chrome-style")){const c=document.createElement("style");c.id="home2-chrome-style",c.textContent=`
      body:has(#home2-chrome-marker) .top-nav,
      body:has(#home2-chrome-marker) .bottom-nav { display: none !important; }
      body:has(#home2-chrome-marker) #page-content {
        padding-top: var(--v2-top-height, 100px) !important;
        padding-bottom: 0 !important;
      }
      /* Neutralise le padding-top/bottom que certaines pages (ex: Cards) réappliquent sur leur propre .page interne imbriqué */
      body:has(#home2-chrome-marker) #page-content .page { padding-top: 0 !important; padding-bottom: 0 !important; }

      /* ── Pendant un match ou l'écran "Choisis ton deck", le bandeau v2 doit totalement disparaître ── */
      body:has(#home2-chrome-marker) #page-content:has(.match-screen),
      body:has(#home2-chrome-marker) #page-content:has(#deck-select-screen) {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
      body:has(.match-screen) #home2-chrome-header,
      body:has(.match-screen) .home2-mobile-top,
      body:has(.match-screen) .home2-mobile-bottom,
      body:has(#deck-select-screen) #home2-chrome-header,
      body:has(#deck-select-screen) .home2-mobile-top,
      body:has(#deck-select-screen) .home2-mobile-bottom { display: none !important; }

      /* ══════════ Bandeau unique PC (≥1024px) : logo + onglets + credits + parametres ══════════ */
      .home2-chrome-header {
        display: flex; position: fixed; top: 0; left: 0; right: 0; z-index: 500;
        align-items: center; gap: 14px;
        background: var(--nav-bg); border-bottom: 1px solid var(--tile-border);
        padding: 14px 20px; box-sizing: border-box;
      }
      .home2-chrome-logo { flex-shrink: 0; display: flex; align-items: center; }
      .home2-chrome-logo img { height: 72px; width: auto; display: block; }
      .home2-chrome-tabs { display: flex; gap: 10px; flex: 1; min-width: 0; justify-content: center; overflow-x: auto; scrollbar-width: none; }
      .home2-chrome-tabs::-webkit-scrollbar { display: none; }
      .home2-chrome-tab {
        flex-shrink: 0; width: 132px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px;
        padding: 12px 8px; border-radius: 14px; cursor: pointer; text-decoration: none;
        background: rgba(255,255,255,0.05); border: 1px solid transparent;
        color: rgba(255,255,255,0.6); font-size: 12px; font-weight: 900; letter-spacing: .4px;
        transition: background .15s, color .15s;
      }
      .home2-chrome-tab img { width: 30px; height: 30px; object-fit: contain; opacity: .75; }
      .home2-chrome-tab-emoji { font-size: 26px; line-height: 1; opacity: .9; }
      .home2-chrome-tab.active { background: var(--green); color: #fff; }
      .home2-chrome-tab.active img { opacity: 1; }
      .home2-chrome-tab:not(.active):hover { background: rgba(255,255,255,0.09); color: #fff; }
      .home2-chrome-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
      .home2-chrome-credits {
        display: flex; align-items: center; gap: 6px;
        background: rgba(255,255,255,0.06); border: 1px solid var(--tile-border);
        border-radius: 22px; padding: 8px 16px; font-size: 15px; font-weight: 800; color: #f2c94c;
        cursor: pointer; white-space: nowrap;
      }
      .home2-chrome-credits:hover { background: rgba(255,255,255,0.1); }
      .home2-chrome-settings-pill {
        display: flex; align-items: center; justify-content: center;
        width: 40px; height: 40px; border-radius: 50%;
        background: rgba(255,255,255,0.06); border: 1px solid var(--tile-border);
        font-size: 17px; cursor: pointer; flex-shrink: 0;
      }
      .home2-chrome-settings-pill:hover { background: rgba(255,255,255,0.12); }

      /* ══════════ Mobile (<1024px) : DEUX bandeaux séparés, haut + bas ══════════ */
      .home2-mobile-top, .home2-mobile-bottom { display: none; }

      @media (max-width: 1023px) {
        .home2-chrome-header { display: none; } /* le bandeau unique PC disparaît totalement */

        body:has(#home2-chrome-marker) #page-content {
          padding-top: var(--v2-top-height, 56px) !important;
          padding-bottom: var(--v2-bottom-height, 76px) !important;
        }
        body:has(#home2-chrome-marker) #page-content:has(.match-screen),
        body:has(#home2-chrome-marker) #page-content:has(#deck-select-screen) {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }

        /* Bandeau du haut : logo à gauche, crédits + paramètres à droite */
        .home2-mobile-top {
          display: flex; position: fixed; top: 0; left: 0; right: 0; z-index: 500;
          align-items: center; justify-content: space-between; gap: 10px;
          background: #05080a; border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 10px 14px; box-sizing: border-box;
        }
        .home2-mobile-top .home2-chrome-logo img { height: 46px; }
        .home2-mobile-top .home2-chrome-right { gap: 8px; }
        .home2-mobile-top .home2-chrome-credits { padding: 6px 12px; font-size: 13px; }
        .home2-mobile-top .home2-chrome-settings-pill {
          padding: 6px; width: 34px; height: 34px; border-radius: 50%; justify-content: center;
        }
        .home2-mobile-top .home2-chrome-settings-pill span.pill-label { display: none; }

        /* Bandeau du bas : les onglets, façon bottom-nav classique */
        .home2-mobile-bottom {
          display: flex; position: fixed; bottom: 0; left: 0; right: 0; z-index: 500;
          align-items: stretch; justify-content: space-around;
          background: #05080a; border-top: 1px solid rgba(255,255,255,0.1);
          padding: 9px 6px calc(9px + env(safe-area-inset-bottom, 0px)); box-sizing: border-box;
          overflow-x: auto; scrollbar-width: none;
        }
        .home2-mobile-bottom::-webkit-scrollbar { display: none; }
        .home2-mobile-bottom .home2-chrome-tab {
          width: auto; flex: 1; min-width: 0; padding: 8px 2px; border-radius: 12px; gap: 4px;
        }
        .home2-mobile-bottom .home2-chrome-tab img { width: 33px; height: 33px; }
        .home2-mobile-bottom .home2-chrome-tab[data-key="game"] { display: none; }
        .home2-mobile-bottom .home2-chrome-tab-emoji { font-size: 29px; }
        .home2-mobile-bottom .home2-chrome-tab { font-size: 9px; }
      }

      /* ══════════ Drapeau global "en match" (recherche, choix deck, choix GC, jeu...) ══════════
         Posé par hideV2ChromeNow() dès le clic sur un mode, retiré uniquement quand une vraie
         page Home/Game se recharge. Couvre TOUS les écrans du parcours de match, quel que soit
         leur balisage interne, sans avoir à détecter chaque écran individuellement. Placé en
         dernier pour l'emporter sur les règles précédentes (spécificité égale + !important). */
      body.v2-match-flow #home2-chrome-header,
      body.v2-match-flow .home2-mobile-top,
      body.v2-match-flow .home2-mobile-bottom { display: none !important; }
      body.v2-match-flow #page-content,
      body.v2-match-flow #page-content .page {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
    `,document.head.appendChild(c)}const r=Ir.map(c=>`
    <a class="home2-chrome-tab" data-route="${c.route}" data-key="${c.key}">
      ${c.icon?`<img src="${o}${c.icon}">`:`<span class="home2-chrome-tab-emoji">${c.emoji}</span>`}${c.label}
    </a>`).join("");let a=document.getElementById("home2-chrome-header");a||(a=document.createElement("div"),a.id="home2-chrome-header",a.className="home2-chrome-header",a.innerHTML=`
      <div id="home2-chrome-marker" style="display:none"></div>
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-tabs">${r}</div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-chrome-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-chrome-settings-btn">⚙️</button>
      </div>
    `,document.body.appendChild(a),a.querySelector("#home2-chrome-settings-btn").addEventListener("click",()=>t("settings")),a.querySelector("#home2-chrome-credits").addEventListener("click",()=>Go(e,n)));let d=document.getElementById("home2-mobile-top");d||(d=document.createElement("div"),d.id="home2-mobile-top",d.className="home2-mobile-top",d.innerHTML=`
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-mobtop-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-mobtop-settings-btn"><span>⚙️</span><span class="pill-label">Paramètres</span></button>
      </div>
    `,document.body.appendChild(d),d.querySelector("#home2-mobtop-settings-btn").addEventListener("click",()=>t("settings")),d.querySelector("#home2-mobtop-credits").addEventListener("click",()=>Go(e,n)));let l=document.getElementById("home2-mobile-bottom");l||(l=document.createElement("div"),l.id="home2-mobile-bottom",l.className="home2-mobile-bottom",l.innerHTML=r,document.body.appendChild(l)),document.querySelectorAll(".home2-chrome-tab").forEach(c=>{c._v2Bound||(c._v2Bound=!0,c.addEventListener("click",()=>{document.querySelectorAll(".home2-chrome-tab").forEach(x=>x.classList.remove("active")),document.querySelectorAll(`.home2-chrome-tab[data-key="${c.dataset.key}"]`).forEach(x=>x.classList.add("active")),t(c.dataset.route)}))}),document.querySelectorAll(".home2-chrome-tab").forEach(c=>c.classList.toggle("active",c.dataset.key===i));const s=`💰 ${(e.credits||0).toLocaleString("fr")}`;document.getElementById("home2-chrome-credits")&&(document.getElementById("home2-chrome-credits").textContent=s),document.getElementById("home2-mobtop-credits")&&(document.getElementById("home2-mobtop-credits").textContent=s),document.body.classList.remove("v2-match-flow"),a.style.display="",d.style.display="",l.style.display="";const p=document.getElementById("page-content");p&&(p.style.removeProperty("padding-top"),p.style.removeProperty("padding-bottom")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const c=window.innerWidth<1024;document.documentElement.style.setProperty("--v2-top-height",(c?d.offsetHeight:a.offsetHeight)+"px"),document.documentElement.style.setProperty("--v2-bottom-height",l.offsetHeight+"px")})})}const Mr=[{ads:1,seconds:5,credits:4500},{ads:2,seconds:10,credits:9500},{ads:3,seconds:15,credits:15e3}];async function Go(t,e){if(!await bo("pub_mode")){dn();return}const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",i.innerHTML=`
    <div style="background:#111a12;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:400px;width:100%;color:#fff">
      <div style="font-size:18px;font-weight:900;margin-bottom:4px">💰 Gagner des crédits</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:18px">Regarde une ou plusieurs publicités pour recevoir des crédits gratuits.</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${Mr.map(o=>`
          <button class="credits-ad-offer-btn" data-ads="${o.ads}" data-seconds="${o.seconds}" data-credits="${o.credits}"
            style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-radius:12px;border:1.5px solid rgba(212,160,23,0.4);background:rgba(212,160,23,0.08);cursor:pointer;color:#fff;font-family:inherit">
            <div style="text-align:left">
              <div style="font-weight:700;font-size:14px">${o.ads} pub${o.ads>1?"s":""} (${o.seconds}s)</div>
              <div style="font-size:11px;color:rgba(255,255,255,0.5)">Regarde ${o.ads} publicité${o.ads>1?"s":""}</div>
            </div>
            <div style="font-weight:900;color:#D4A017;font-size:16px;white-space:nowrap">+${o.credits.toLocaleString("fr")} cr.</div>
          </button>`).join("")}
      </div>
      <button id="credits-ad-cancel" style="width:100%;margin-top:16px;padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,0.2);background:none;color:rgba(255,255,255,0.7);cursor:pointer;font-family:inherit">Annuler</button>
    </div>`,document.body.appendChild(i),i.querySelector("#credits-ad-cancel").addEventListener("click",()=>i.remove()),i.querySelectorAll(".credits-ad-offer-btn").forEach(o=>{o.addEventListener("click",()=>{i.remove(),Cr(parseInt(o.dataset.ads),5,parseInt(o.dataset.credits),t,e)})})}function Cr(t,e,i,o,n){let r=1;const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.94);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;gap:14px;color:#fff;padding:16px",document.body.appendChild(a);function d(){a.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité ${r}/${t}</div>
      <div style="width:400px;max-width:100%;height:400px;max-height:55vh;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center">
        <ins class="adsbygoogle"
          style="display:inline-block;width:400px;height:400px"
          data-ad-client="ca-pub-5827602487507112"
          data-ad-slot="6638827438"></ins>
      </div>
      <div id="credits-ad-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Chargement… <span id="credits-ad-cd">${e}</span>s</div>
      <div id="credits-ad-next-zone" style="width:280px;max-width:100%"></div>
    `;try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(c){console.warn("[AdSense]",c)}let s=e;const p=setInterval(()=>{s--;const c=a.querySelector("#credits-ad-cd");c&&(c.textContent=s),s<=0&&(clearInterval(p),l())},1e3)}function l(){var c,x;const s=a.querySelector("#credits-ad-status"),p=a.querySelector("#credits-ad-next-zone");r<t?(s&&(s.textContent="Publicité terminée ✅"),p&&(p.innerHTML=`
        <button id="credits-ad-next-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px">
          Suivant (${r}/${t}) →
        </button>`),(c=a.querySelector("#credits-ad-next-btn"))==null||c.addEventListener("click",()=>{r++,d()})):(s&&(s.textContent="Toutes les publicités ont été vues ✅"),p&&(p.innerHTML=`
        <button id="credits-ad-claim-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px;background:#D4A017;border-color:#D4A017">
          🎁 Récupérer ${i.toLocaleString("fr")} crédits
        </button>`),(x=a.querySelector("#credits-ad-claim-btn"))==null||x.addEventListener("click",async()=>{const y=a.querySelector("#credits-ad-claim-btn");y.disabled=!0,y.textContent="⏳...";const m=(o.credits||0)+i,{error:f}=await v.from("users").update({credits:m}).eq("id",o.id);if(f){n(f.message,"error"),y.disabled=!1;return}o.credits=m,di(m),n(`+${i.toLocaleString("fr")} crédits ✅`,"success"),a.remove()}))}d()}async function In(t,e,i){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",document.body.appendChild(o);async function n(){var l;const{data:r}=await v.from("pending_rewards").select(`*,
        player:players(id, firstname, surname_real, country_code, club_id, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
          clubs(encoded_name, logo_url)),
        booster:booster_configs(name, image_url)`).eq("user_id",t.profile.id).eq("claimed",!1).order("created_at",{ascending:!0});if(!(r!=null&&r.length)){o.remove();const s=document.getElementById("pending-rewards-banner");s&&s.remove();return}const a=s=>{var p;return s.reward_type==="credits"?'<div style="width:56px;height:56px;border-radius:12px;background:rgba(212,160,23,0.15);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">💰</div>':s.reward_type==="card"&&s.player?`<div style="flex-shrink:0">${qe(s.player,{width:56,context:"accueil"})}</div>`:s.reward_type==="booster"?`<img src="/icons/${((p=s.booster)==null?void 0:p.image_url)||"booster-players.png"}" style="width:56px;height:56px;object-fit:contain;border-radius:12px;background:rgba(255,255,255,0.05);flex-shrink:0">`:'<div style="width:56px;height:56px;border-radius:12px;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">❓</div>'},d=s=>{var p,c,x;return s.reward_type==="credits"?`${(s.credits_amount||0).toLocaleString("fr")} crédits`:s.reward_type==="card"?`${((p=s.player)==null?void 0:p.firstname)||""} ${((c=s.player)==null?void 0:c.surname_real)||""}`.trim()||"Carte joueur":s.reward_type==="booster"?((x=s.booster)==null?void 0:x.name)||"Booster":"Récompense"};o.innerHTML=`
      <div style="background:#111a12;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:420px;width:100%;max-height:80vh;overflow-y:auto;color:#fff">
        <div style="font-size:18px;font-weight:900;margin-bottom:4px">🎁 Tes récompenses</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:16px">${r.length} récompense${r.length>1?"s":""} à récupérer</div>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${r.map(s=>`
            <div style="display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              ${a(s)}
              <div style="flex:1;min-width:0">
                <div style="font-weight:700;font-size:13px">${d(s)}</div>
                ${s.tier_label?`<div style="font-size:10px;color:rgba(255,255,255,0.4)">${s.tier_label}</div>`:""}
              </div>
              <button class="claim-reward-btn btn btn-primary btn-sm" data-id="${s.id}" style="white-space:nowrap">Récupérer</button>
            </div>`).join("")}
        </div>
        <button id="pending-rewards-close" class="btn btn-ghost" style="width:100%;margin-top:16px">Fermer</button>
      </div>`,(l=o.querySelector("#pending-rewards-close"))==null||l.addEventListener("click",()=>o.remove()),o.querySelectorAll(".claim-reward-btn").forEach(s=>{s.addEventListener("click",async()=>{var c,x;const p=r.find(y=>y.id===s.dataset.id);s.disabled=!0,s.textContent="⏳...";try{const y=await hr(p,t.profile,e,null);if(await v.from("pending_rewards").update({claimed:!0,claimed_at:new Date().toISOString()}).eq("id",p.id),y.type==="credits")di(t.profile.credits),e(`+${y.amount.toLocaleString("fr")} crédits ✅`,"success");else if(y.type==="card")e(`Carte reçue : ${((c=y.player)==null?void 0:c.firstname)||""} ${((x=y.player)==null?void 0:x.surname_real)||""} ✅`,"success");else if(y.type==="booster"){o.remove(),Vi(y.cards,y.boosterUI,i,()=>{In(t,e,i)});return}}catch(y){e(y.message||"Erreur lors de la réclamation","error"),s.disabled=!1,s.textContent="Récupérer";return}n()})})}n(),o.addEventListener("click",r=>{r.target===o&&o.remove()})}function di(t){const e=`💰 ${(t||0).toLocaleString("fr")}`,i=document.getElementById("home2-chrome-credits"),o=document.getElementById("home2-mobtop-credits");i&&(i.textContent=e),o&&(o.textContent=e)}function wt(){document.body.classList.add("v2-match-flow");const t=document.getElementById("home2-chrome-header");t&&(t.style.display="none");const e=document.getElementById("home2-mobile-top");e&&(e.style.display="none");const i=document.getElementById("home2-mobile-bottom");i&&(i.style.display="none");const o=document.getElementById("page-content");o&&(o.style.setProperty("padding-top","0","important"),o.style.setProperty("padding-bottom","0","important"))}function jr(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return"à l'instant";if(i<60)return`il y a ${i}min`;const o=Math.floor(i/60);if(o<24)return`il y a ${o}h`;const n=Math.floor(o/24);return n<7?`il y a ${n}j`:new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"short"})}async function qr(t){const{data:e}=await v.from("users").select("id,pseudo,club_name,mmr").order("mmr",{ascending:!1}).limit(5),i=e||[],o=i.some(r=>r.id===t);let n=null;if(!o){const{data:r}=await v.from("users").select("mmr").eq("id",t).single();if(r){const{count:a}=await v.from("users").select("id",{count:"exact",head:!0}).gt("mmr",r.mmr||0);n=(a||0)+1}}return{list:i,iAmInTop:o,myPosition:n}}async function Br(t=4){const{data:e}=await v.from("patch_notes").select("id,title,description,image_url,published_at").eq("is_published",!0).order("published_at",{ascending:!1}).limit(t);return e||[]}async function Dr(){const{data:t}=await v.from("booster_configs").select("id,name,icon,price_type,price_credits,card_count").eq("is_active",!0).order("sort_order",{ascending:!0}).limit(5);return t||[]}async function Pr(){const{data:t}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const n=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${o.image_url?`<img src="${o.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${n}</div>
      <div style="font-size:15px;font-weight:900;margin-bottom:6px">${o.title}</div>
      <div style="font-size:13px;color:#444;line-height:1.6;white-space:pre-line">${o.description}</div>
    </div>`}).join("");e.innerHTML=`
    <div style="background:#fff;border-radius:16px;width:100%;max-width:460px;max-height:85vh;display:flex;flex-direction:column;overflow:hidden">
      <div style="display:flex;align-items:center;padding:16px 20px;border-bottom:1px solid #f0f0f0;flex-shrink:0">
        <span style="font-size:22px;margin-right:10px">📰</span>
        <div style="flex:1;font-size:17px;font-weight:900">Journal des mises à jour</div>
        <button id="journal-close-v2" style="background:none;border:none;font-size:22px;cursor:pointer;color:#888;padding:0 4px">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:0 20px">
        ${i||'<div style="padding:40px;text-align:center;color:#aaa">Aucune mise à jour pour le moment.</div>'}
      </div>
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close-v2").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}async function Zi(t,{state:e,navigate:i,toast:o,openModal:n,closeModal:r}){var T,P,Y,X,M,w;const a=e.profile;if(!a)return;const d="/icons/";li(i,a,"home2",d,o);const l=a.mmr??450,s=Lt(l),p=Bi(l,s),c=oo(l),x=isFinite(s.max)?s.max+1:null,[{list:y,iAmInTop:m,myPosition:f},h,_,{count:$}]=await Promise.all([qr(a.id),Br(5),Dr(),v.from("pending_rewards").select("*",{count:"exact",head:!0}).eq("user_id",a.id).eq("claimed",!1)]),g=(b,E)=>{const H=Lt(b.mmr??0),S=Bi(b.mmr??0,H);return`
    <div class="rk-row ${b.id===a.id?"rk-row-me":""}">
      <div class="rk-pos ${E<3?"rk-pos-top"+(E+1):""}">${E<3?["🥇","🥈","🥉"][E]:E+1}</div>
      <div class="rk-name ${b.id===a.id?"rk-name-me":""}">${b.pseudo}</div>
      <div class="rk-rp-block">
        <div class="rk-rp-tier" style="color:${H.color}">${H.emoji} ${H.label.toUpperCase()}${S?" "+S:""}</div>
        <div class="rk-rp">${(b.mmr??0).toLocaleString("fr")} MMR</div>
      </div>
    </div>`},z=b=>`
    <div class="news-item">
      ${b.image_url?`<img src="${b.image_url}" class="news-thumb" onerror="this.style.display='none'">`:'<div class="news-thumb news-thumb-fallback">📰</div>'}
      <div class="news-body">
        <div class="news-title">${b.title}</div>
        <div class="news-desc">${b.description||""}</div>
        <div class="news-time">${jr(b.published_at)}</div>
      </div>
    </div>`;let u=0;const j=b=>`
    <div class="promo-icon-wrap">
      <img src="${d}${b.icon||"nav-boosters.png"}" class="promo-icon" onerror="this.style.display='none'">
    </div>
    <div class="promo-info">
      <div class="promo-kicker">NOUVEAU BOOSTER</div>
      <div class="promo-title">${b.name}</div>
      <div class="promo-desc">${b.card_count||5} cartes · ${b.price_type==="pub"?"Pub gratuite":(b.price_credits||0).toLocaleString("fr")+" cr."}</div>
    </div>`;if(t.innerHTML=`
  <style>
    .home-dark {
      min-height: 100%;
      background: var(--page-bg);
      background-image: var(--page-gradient);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      padding: 0 16px 80px; box-sizing: border-box; overflow-y: auto;
    }
    .home-inner { width: 100%; max-width: 640px; display: flex; flex-direction: column; gap: 18px; }
    /* Les bannières (ami/invitation/match en cours) sont vides tant qu'aucune n'est active :
       il ne faut alors PAS qu'elles comptent dans le gap flex de .home-inner. */
    #friend-requests-banner:empty, #match-invite-banner:empty, #ongoing-match-banner:empty { display: none; }

    /* ── Profil ── */
    .profile-row { display: flex; align-items: center; gap: 16px; }
    .profile-badge {
      width: 62px; height: 62px; border-radius: 16px; flex-shrink: 0;
      background: linear-gradient(135deg, ${a.club_color1}cc, ${a.club_color2}88);
      border: 2px solid ${a.club_color2};
      display: flex; align-items: center; justify-content: center;
      font-weight: 900; font-size: 26px; color: #fff;
    }
    /* Mobile par défaut : icône de rang. PC (≥1024px, cf media query plus bas) : numéro de niveau. */
    .badge-level { display: none; }
    .badge-rank-icon { display: flex; font-size: 30px; }
    .profile-info { flex: 1; min-width: 0; }
    .profile-info .name-row { display:flex; align-items:center; gap:6px; }
    .profile-info h3 { margin: 0; font-size: 22px; font-weight: 900; color: var(--tile-fg-on-page); }
    .profile-edit-btn { background:none; border:none; cursor:pointer; font-size:15px; opacity:.55; padding:0; color: var(--tile-fg-dim); }
    .profile-edit-btn:hover { opacity:1; }
    .profile-info .club { display:flex; align-items:center; gap:6px; font-size: 13px; color: var(--tile-fg-dim); margin-top: 4px; letter-spacing:.3px; }
    .profile-info .club .dot { width:7px; height:7px; border-radius:50%; background: var(--green-light); flex-shrink:0; }
    .profile-settings-btn {
      width: 42px; height: 42px; border-radius: 50%; border: none;
      background: rgba(255,255,255,0.08); cursor: pointer; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center; font-size: 19px; color: var(--tile-fg-dim);
    }
    .profile-settings-btn:hover { background: rgba(255,255,255,0.15); }

    /* ── Rank card ── */
    .rank-card {
      background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 18px;
      padding: 20px 22px; display: flex; flex-direction: column; gap: 12px;
    }
    .rank-top-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }
    .rank-tier-block .rank-label { font-size: 12px; font-weight: 900; color: var(--tile-fg-dim); letter-spacing: 1.5px; }
    .rank-tier-block .rank-tier-value { font-size: 28px; font-weight: 900; color: ${s.color}; margin-top: 3px; }
    .rank-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
    .rank-rp-label { font-size: 14px; color: var(--tile-fg-dim); white-space: nowrap; }
    .rank-inline-link {
      display: inline-flex; align-items: center; gap: 5px;
      background: rgba(255,255,255,0.06); border: 1px solid var(--tile-border);
      color: var(--tile-fg-on-page); font-size: 13px; font-weight: 700;
      border-radius: 10px; padding: 6px 12px; cursor: pointer; white-space: nowrap;
    }
    .rank-inline-link:hover { filter: brightness(1.2); }
    .rank-progress-track { width: 100%; height: 10px; border-radius: 6px; background: rgba(255,255,255,0.08); overflow: hidden; }
    .rank-progress-fill { height: 100%; border-radius: 6px; background: linear-gradient(90deg, ${s.color}99, ${s.color}); transition: width .4s; }

    .profile-view-btn {
      display: none; width: 100%; align-items:center; justify-content:center; gap:8px;
      background: rgba(255,255,255,0.05); border: 1px solid var(--tile-border);
      color: var(--tile-fg-on-page); font-size: 15px; font-weight: 700; border-radius: 12px;
      padding: 14px; cursor: pointer;
    }
    .profile-view-btn:hover { filter: brightness(1.15); }

    /* ── Classement mini-widget (PC uniquement) ── */
    .ranking-widget {
      display: none;
      background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 18px;
      padding: 20px 22px; flex-direction: column; gap: 8px;
    }
    .ranking-widget-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:4px; }
    .ranking-widget-header h4 { margin:0; font-size:15px; font-weight:900; color: var(--tile-fg-on-page); letter-spacing:1px; }
    .ranking-widget-header a { font-size: 13px; color: var(--green-light); font-weight:700; cursor:pointer; text-decoration:none; }
    .rk-row { display:flex; align-items:center; gap:12px; padding:10px 0; }
    .rk-row-me { background: rgba(26,107,60,0.18); border-radius: 8px; margin: 0 -8px; padding: 6px 8px; }
    .rk-pos {
      width: 32px; height: 32px; border-radius: 50%; flex-shrink:0;
      background: rgba(255,255,255,0.06); color: var(--tile-fg-dim);
      display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:900;
    }
    .rk-pos-top1 { background:#D4A017; color:#000; }
    .rk-pos-top2 { background:#a0a0a0; color:#000; }
    .rk-pos-top3 { background:#cd7f32; color:#000; }
    .rk-name { flex:1; min-width:0; font-size:15px; font-weight:700; color: var(--tile-fg-on-page); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .rk-name-me { color: var(--green-light); }
    .rk-rp-block { text-align:right; flex-shrink:0; }
    .rk-rp-tier { font-size:12px; font-weight:900; letter-spacing:0.3px; white-space:nowrap; }
    .rk-rp { font-size: 11px; font-weight:600; color: var(--tile-fg-dim); flex-shrink:0; margin-top:1px; }
    .ranking-widget-cta {
      display:flex; align-items:center; justify-content:center; gap:8px;
      width:100%; margin-top:8px; background: rgba(255,255,255,0.05); border:1px solid var(--tile-border);
      color: var(--tile-fg-on-page); font-size:15px; font-weight:700; border-radius:12px; padding:13px; cursor:pointer;
    }
    .ranking-widget-cta:hover { filter: brightness(1.15); }

    /* ── Section Jouer ── */
    .play-section-header { display:flex; align-items:center; justify-content:center; gap:10px; margin: 2px 0; }
    .play-section-header h4 { margin:0; font-size:18px; font-weight:900; letter-spacing:4px; color: var(--tile-fg-on-page); }
    .play-section-header .slashes { color: var(--green-light); font-weight:900; font-size:20px; letter-spacing:1px; }

    .play-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 14px; }
    .play-tile {
      grid-column: span 2;
      border-radius: 18px; background: var(--tile-bg); border: 1px solid var(--tile-border);
      cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 22px 12px;
      transition: transform .15s, filter .15s; backdrop-filter: blur(4px); text-align:center; gap:4px;
      min-height: 150px;
    }
    .play-tile:hover { filter: brightness(1.15); }
    .play-tile:active { transform: scale(.96); }
    .play-tile img.tile-icon { height: 68px; object-fit:contain; }
    .play-tile .tile-label { font-size: 16px; font-weight: 900; color: var(--tile-fg-on-page); letter-spacing:.5px; margin-top:4px; }
    .play-tile .tile-desc { display:none; font-size: 12px; color: var(--tile-fg-dim); line-height:1.4; margin-top:3px; }

    .play-tile-big { grid-column: span 3; padding: 30px 16px; min-height: 190px; }
    .play-tile-big img.tile-icon { height: 84px; }
    .play-tile-big .tile-label { font-size: 19px; }
    .tile-mini-league { background: linear-gradient(135deg, #4a3a05 0%, #8a6a10 50%, #D4A017 100%); border: 1.5px solid rgba(212,160,23,0.6); box-shadow: 0 4px 20px rgba(212,160,23,0.25); }
    .tile-ranked { background: linear-gradient(135deg, #2d0a6e 0%, #4a1a8a 50%, #6a28b8 100%); border: 1.5px solid rgba(122,40,184,0.6); box-shadow: 0 4px 20px rgba(122,40,184,0.3); }

    /* ── Bannière promo booster ── */
    .promo-banner {
      background: linear-gradient(135deg, #14261a 0%, #0d1a12 100%);
      border: 1px solid rgba(212,160,23,0.3); border-radius: 18px;
      padding: 24px; display:flex; align-items:center; gap:18px; position: relative; overflow:hidden;
      min-height: 100px;
    }
    .promo-icon-wrap { width:76px; height:76px; flex-shrink:0; display:flex; align-items:center; justify-content:center; background:rgba(212,160,23,0.12); border-radius:14px; border:1px solid rgba(212,160,23,0.3); }
    .promo-icon { max-width:70%; max-height:70%; object-fit:contain; }
    .promo-info { flex:1; min-width:0; }
    .promo-kicker { font-size:12px; font-weight:900; color:#D4A017; letter-spacing:1px; }
    .promo-title { font-size:21px; font-weight:900; color:#fff; margin-top:3px; }
    .promo-desc { font-size:13px; color:rgba(255,255,255,0.55); margin-top:4px; }
    .promo-cta {
      background: var(--green); color:#fff; border:none; border-radius:12px;
      padding:14px 22px; font-size:14px; font-weight:900; cursor:pointer; flex-shrink:0;
      display:flex; align-items:center; gap:7px; white-space:nowrap;
    }
    .promo-cta:hover { filter: brightness(1.2); }
    .promo-dots { position:absolute; bottom:6px; left:50%; transform:translateX(-50%); display:flex; gap:4px; }
    .promo-dot { width:5px; height:5px; border-radius:50%; background: rgba(255,255,255,0.25); transition: background .2s; cursor:pointer; }
    .promo-dot.active { background: #D4A017; }

    /* ── Actualités ── */
    .news-widget { background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 18px; padding: 22px; display:flex; flex-direction:column; gap: 10px; }
    .news-widget-header { display:flex; align-items:center; justify-content:space-between; }
    .news-widget-header h4 { margin:0; font-size:16px; font-weight:900; color: var(--tile-fg-on-page); letter-spacing:.5px; }
    .news-widget-header a { font-size: 13px; color: var(--green-light); font-weight:700; cursor:pointer; text-decoration:none; }
    .news-item { display:flex; gap:14px; padding: 14px 0; border-top: 1px solid rgba(255,255,255,0.05); }
    .news-item:first-of-type { border-top:none; }
    .news-thumb { width:64px; height:64px; border-radius:10px; object-fit:cover; flex-shrink:0; }
    .news-thumb-fallback { background: rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:center; font-size:24px; }
    .news-body { flex:1; min-width:0; }
    .news-title { font-size:15px; font-weight:900; color: var(--tile-fg-on-page); }
    .news-desc { font-size:13px; color: var(--tile-fg-dim); margin-top:2px; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; }
    .news-time { font-size:12px; color: rgba(255,255,255,0.35); margin-top:4px; }

    .home-footer { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 4px 0; }
    .home-logout-btn {
      background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 22px;
      color: var(--tile-fg-dim); font-size: 14px; padding: 9px 22px; cursor: pointer; transition: filter .2s;
    }
    .home-logout-btn:hover { filter: brightness(1.15); }

    /* ── Structure : colonne unique par défaut (mobile) ── */
    .home2-dash { display:flex; flex-direction:column; gap:18px; }
    .home2-col-left, .home2-col-center, .home2-col-right { display:contents; }

    /* ══════════ MODE PC (≥1024px) ══════════ */
    @media (min-width: 1024px) {
      .home-inner { max-width: 1440px; }
      .home2-dash { display:grid; grid-template-columns: 380px 1fr 400px; gap: 28px; align-items:start; }
      .home2-col-left, .home2-col-center, .home2-col-right { display:flex; flex-direction:column; gap: 18px; }
      .badge-level { display: flex; }
      .badge-rank-icon { display: none; }
      .rank-inline-link { display: none; }
      .profile-view-btn { display: flex; }
      .ranking-widget { display: flex; }
      .play-tile .tile-desc { display: block; }
      .play-tile { padding: 26px 14px; min-height: 180px; }
      .play-tile img.tile-icon { height: 84px; }
      .play-tile-big { min-height: 220px; }
      .play-tile-big img.tile-icon { height: 108px; }
      .home-footer { flex-direction: row; justify-content: space-between; width: 100%; padding: 14px 4px; }
    }
  </style>

  <div class="home-dark" id="home-dark">
    <div class="home-inner">
      <!-- Bannières dynamiques -->
      <div id="friend-requests-banner"></div>
      <div id="match-invite-banner"></div>
      <div id="ongoing-match-banner"></div>

      <div class="home2-dash">

        <!-- Colonne gauche : rang + classement -->
        <div class="home2-col-left">
          <div class="rank-card">
            <div class="rank-top-row">
              <div class="rank-tier-block">
                <div class="rank-label">🛡️ RANKED</div>
                <div class="rank-tier-value">${s.label.toUpperCase()}${p?" "+p:""}</div>
              </div>
              <div class="rank-right">
                <div class="rank-rp-label">${l.toLocaleString("fr")}${x?" / "+x.toLocaleString("fr"):""} RP</div>
                <button class="rank-inline-link" id="rank-inline-link-btn">📊 Classement</button>
              </div>
            </div>
            <div class="rank-progress-track"><div class="rank-progress-fill" style="width:${c}%"></div></div>
          </div>

          <div class="ranking-widget">
            <div class="ranking-widget-header"><h4>CLASSEMENT</h4><a id="nav-rankings-link">Voir plus</a></div>
            ${y.map((b,E)=>g(b,E)).join("")}
            ${!m&&f?`
              <div style="border-top:1px solid var(--tile-border);margin-top:2px;padding-top:8px">
                ${g({id:a.id,pseudo:a.pseudo,mmr:l},f-1)}
              </div>`:""}
            <button class="ranking-widget-cta" id="nav-rankings-cta">📊 Voir le classement</button>
          </div>
        </div>

        <!-- Colonne centrale : Jouer + promo -->
        <div class="home2-col-center">
          ${$>0?`
          <div id="pending-rewards-banner" style="cursor:pointer;display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:14px;
            background:linear-gradient(135deg,rgba(212,160,23,0.25),rgba(212,160,23,0.1));border:1.5px solid #D4A017;margin-bottom:14px">
            <div style="font-size:28px">🎁</div>
            <div style="flex:1">
              <div style="font-weight:900;font-size:14px;color:#fff">Tu as des récompenses à récupérer !</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.6)">${$} récompense${$>1?"s":""} en attente</div>
            </div>
            <div style="font-size:20px;color:#D4A017">→</div>
          </div>`:""}

          <div class="play-section-header"><span class="slashes">///</span><h4>JOUER</h4><span class="slashes">///</span></div>

          <div class="play-grid">
            <div class="play-tile play-tile-big tile-ranked" data-action="ranked">
              <img src="${d}badge-ranked.png" class="tile-icon">
              <div class="tile-label">RANKED</div>
              <div class="tile-desc">Grimpez dans le classement</div>
            </div>
            <div class="play-tile play-tile-big tile-mini-league" data-action="match-ai">
              <img src="${d}badge-ai.png" class="tile-icon">
              <div class="tile-label">SOLO</div>
              <div class="tile-desc">Progressez à travers les niveaux</div>
            </div>
            <div class="play-tile" data-action="mini-league">
              <img src="${d}badge-league.png" class="tile-icon">
              <div class="tile-label">MINI LEAGUE</div>
              <div class="tile-desc">Participez à des ligues</div>
            </div>
            <div class="play-tile" data-action="match-random">
              <img src="${d}badge-random.png" class="tile-icon">
              <div class="tile-label">RANDOM</div>
              <div class="tile-desc">Affrontez un adversaire aléatoire</div>
            </div>
            <div class="play-tile" data-action="match-friend">
              <img src="${d}badge-vs.png" class="tile-icon">
              <div class="tile-label">AMI</div>
              <div class="tile-desc">Affrontez un ami</div>
            </div>
          </div>

          ${_.length?`
          <div class="promo-banner" id="promo-banner">
            <div id="promo-slide-content" style="display:flex;align-items:center;gap:14px;flex:1;min-width:0">
              ${j(_[0])}
            </div>
            <button class="promo-cta" id="promo-cta-btn">✅ Ouvrir des boosters</button>
            ${_.length>1?`<div class="promo-dots">${_.map((b,E)=>`<div class="promo-dot ${E===0?"active":""}" data-dot="${E}"></div>`).join("")}</div>`:""}
          </div>`:""}
        </div>

        <!-- Colonne droite : Actualités -->
        <div class="home2-col-right">
          <div class="news-widget">
            <div class="news-widget-header"><h4>ACTUALITÉS</h4><a id="nav-journal-link">Voir tout</a></div>
            ${h.length?h.map(z).join(""):'<div style="font-size:11px;color:var(--tile-fg-dim);padding:8px 0">Aucune actualité pour le moment.</div>'}
          </div>
        </div>

      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var de,I;const b=((de=window.visualViewport)==null?void 0:de.height)||window.innerHeight,E=window.innerWidth<1024;let H=0;if(E){const L=document.getElementById("home2-mobile-top"),Q=document.getElementById("home2-mobile-bottom");H=((L==null?void 0:L.offsetHeight)||0)+((Q==null?void 0:Q.offsetHeight)||0)}else H=((I=document.getElementById("home2-chrome-header"))==null?void 0:I.offsetHeight)||0;const S=b-H,G=t.querySelector(".home-dark");G&&(G.style.minHeight=S+"px")}),(T=document.getElementById("nav-rankings-link"))==null||T.addEventListener("click",()=>i("rankings")),(P=document.getElementById("nav-rankings-cta"))==null||P.addEventListener("click",()=>i("rankings")),(Y=document.getElementById("rank-inline-link-btn"))==null||Y.addEventListener("click",()=>i("rankings")),(X=document.getElementById("nav-journal-link"))==null||X.addEventListener("click",()=>Pr()),t.querySelectorAll("[data-action]").forEach(b=>{b.addEventListener("click",()=>{b.style.transform="scale(.96)",setTimeout(()=>b.style.transform="",180);const E=b.dataset.action;if(E==="match-ai"){jn(i,e);return}if(E==="match-random"){wt(),i("match",{matchMode:"random"});return}if(E==="match-friend"){i("friends");return}if(E==="mini-league"){i("mini-league");return}if(E==="ranked"){i("ranked");return}o("Bientôt disponible","info")})}),_.length>1){const b=document.getElementById("promo-slide-content"),E=()=>Array.from(document.querySelectorAll(".promo-dot")),H=S=>{u=S,b&&(b.innerHTML=j(_[u])),E().forEach((G,de)=>G.classList.toggle("active",de===u))};setInterval(()=>H((u+1)%_.length),5e3),document.querySelectorAll(".promo-dot").forEach(S=>{S.addEventListener("click",()=>H(Number(S.dataset.dot)))})}(M=document.getElementById("promo-cta-btn"))==null||M.addEventListener("click",()=>i("boosters")),Cn(e,o),(w=document.getElementById("pending-rewards-banner"))==null||w.addEventListener("click",()=>{In(e,o,i)}),Or(e,o,i),Mn(e,o,i),Fr(e,o)}async function Fr(t,e){const i=t.profile.id,{data:o}=await v.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(o!=null&&o.length))return;const n=o.reduce((a,d)=>a+(d.prize_amount||0),0),r=document.createElement("div");r.className="modal-overlay",r.style.zIndex="2200",r.innerHTML=`<div class="modal" style="max-width:400px">
    <div class="modal-header"><h2 style="color:#1A6B3C">🏆 Gains à récupérer</h2></div>
    <div class="modal-body" style="padding:18px 20px">
      <p style="font-size:14px;color:#555;margin:0 0 14px">Tu as terminé sur le podium de ${o.length>1?"plusieurs mini leagues":"une mini league"} !</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
        ${o.map(a=>{var d;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#f7f7f7;border-radius:10px">
          <span style="font-size:13px;font-weight:700;color:#1a1a1a">${((d=a.mini_leagues)==null?void 0:d.name)||"Mini League"}</span>
          <span style="font-size:13px;font-weight:900;color:#D4A017">+${(a.prize_amount||0).toLocaleString("fr")} cr.</span>
        </div>`}).join("")}
      </div>
      <button id="claim-all-btn" class="btn btn-primary" style="width:100%;margin-bottom:8px">💰 Tout récupérer (+${n.toLocaleString("fr")} cr.)</button>
      <button id="claim-later-btn" class="btn btn-ghost" style="width:100%">Plus tard</button>
    </div>
  </div>`,document.body.appendChild(r),r.querySelector("#claim-later-btn").addEventListener("click",()=>r.remove()),r.querySelector("#claim-all-btn").addEventListener("click",async a=>{const d=a.currentTarget;d.disabled=!0,d.textContent="...";let l=0;for(const s of o){const{data:p}=await v.rpc("claim_mini_league_prize",{p_league_id:s.league_id,p_user_id:i});p!=null&&p.success&&!p.already_claimed&&(l+=p.prize||0)}if(l>0){t.profile.credits=(t.profile.credits||0)+l;const s=document.getElementById("nav-credits");s&&(s.textContent=`💰 ${t.profile.credits.toLocaleString("fr")}`),e(`💰 +${l.toLocaleString("fr")} cr. récupérés !`,"success")}r.remove()})}async function Mn(t,e,i){const o=document.getElementById("ongoing-match-banner");if(!o)return;const n=t.profile.id,{data:r}=await v.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${n},away_id.eq.${n}`).order("created_at",{ascending:!1});if(!(r!=null&&r.length)){o.innerHTML="";return}const a=r.map(l=>l.home_id===n?l.away_id:l.home_id).filter(Boolean);let d={};if(a.length){const{data:l}=await v.from("users").select("id, pseudo, club_name").in("id",a);(l||[]).forEach(s=>{d[s.id]=s.club_name||s.pseudo})}o.innerHTML=r.map(l=>{const s=l.home_id===n?l.away_id:l.home_id,p=d[s]||"Adversaire",c=l.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${c?"🏆 Mini League":l.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${p}</div>
      </div>
      <button data-resume="${l.id}" data-mini="${c?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${l.id}" data-opp="${s}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),o.querySelectorAll("[data-resume]").forEach(l=>{l.addEventListener("click",async()=>{wt();const s=document.getElementById("page-content")||document.getElementById("app");if(l.dataset.mini==="1"){const{data:p}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",l.dataset.resume).single();p?i("match-mini-league",{mlMatchId:p.id,leagueId:p.league_id}):i("mini-league")}else{const{resumePvpMatch:p}=await ln(async()=>{const{resumePvpMatch:c}=await Promise.resolve().then(()=>Ga);return{resumePvpMatch:c}},void 0);p(s,{state:t,navigate:i,toast:e,openModal:null,closeModal:null,refreshProfile:null},l.dataset.resume)}})}),o.querySelectorAll("[data-abandon]").forEach(l=>{l.addEventListener("click",()=>{Nr(async()=>{await Rr(l.dataset.abandon,l.dataset.opp,n),e("Match abandonné (défaite 3-0)","info"),Mn(t,e,i)})})})}async function Rr(t,e,i){ti();const{data:o}=await v.from("matches").select("home_id, away_id, game_state, mode").eq("id",t).single();if(!o)return;const n=o.home_id===i,r=n?0:3,a=n?3:0,d=o.game_state||{};d.p1Score=r,d.p2Score=a,d.phase="finished",d.forfeit=!0,await v.from("matches").update({status:"finished",forfeit:!0,winner_id:e,home_score:r,away_score:a,game_state:d}).eq("id",t),o.mode==="mini_league"&&await v.from("mini_league_matches").update({status:"finished",home_score:r,away_score:a}).eq("match_id",t)}function Nr(t){const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(e),e.querySelector("#ab-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#ab-ok").addEventListener("click",()=>{e.remove(),t()}),e.addEventListener("click",i=>{i.target===e&&e.remove()})}let Ai=null,Xt=null;function Or(t,e,i){var r;const o=(r=t==null?void 0:t.user)==null?void 0:r.id;if(!o)return;const n=()=>Gr(t,e,i);if(n(),clearInterval(Ai),Ai=setInterval(()=>{if(!document.getElementById("match-invite-banner")){if(clearInterval(Ai),Ai=null,Xt){try{v.removeChannel(Xt)}catch{}Xt=null}return}n()},5e3),Xt)try{v.removeChannel(Xt)}catch{}Xt=v.channel("home-match-invites-"+o).on("postgres_changes",{event:"INSERT",schema:"public",table:"friend_match_invites",filter:`invitee_id=eq.${o}`},n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`invitee_id=eq.${o}`},n).subscribe()}async function Gr(t,e,i){var d,l,s,p;const o=document.getElementById("match-invite-banner");if(!o)return;const{data:n}=await v.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",t.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!n){o.innerHTML="";return}const r=((d=n.inviter)==null?void 0:d.club_name)||((l=n.inviter)==null?void 0:l.pseudo)||"?",a=n.inviter_id;o.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${r} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(s=document.getElementById("match-inv-accept"))==null||s.addEventListener("click",()=>{o.innerHTML="",wt(),i("match",{matchMode:"friend",friendId:a,friendName:r,isAccepting:!0})}),(p=document.getElementById("match-inv-decline"))==null||p.addEventListener("click",async()=>{await v.from("friend_match_invites").update({status:"declined"}).eq("id",n.id),o.innerHTML="",e("Invitation refusée","info")})}async function Cn(t,e){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:o,error:n}=await v.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",t.user.id).eq("status","pending");if(n||!(o!=null&&o.length)){i.innerHTML="";return}const r=o.length,a=o.slice(0,2).map(l=>{var s;return((s=l.requester)==null?void 0:s.pseudo)||"?"}).join(", "),d=r>2?` +${r-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${r} demande${r>1?"s":""} d'ami${r>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${d}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>Bn(t,e,()=>Cn(t,e)))}async function jn(t,e){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:420px;border-radius:18px">
    <div class="modal-header"><h2>Solo — Choisir un niveau</h2><button class="btn-icon" id="solo-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div id="solo-levels-list" style="display:flex;flex-direction:column;gap:10px">
        <div style="text-align:center;color:#999;padding:20px">⏳ Chargement…</div>
      </div>
    </div>
  </div>`,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("solo-cancel").addEventListener("click",o),i.addEventListener("click",s=>{s.target===i&&o()});const[{data:n},{data:r}]=await Promise.all([v.from("solo_levels").select("*").eq("is_active",!0).order("level_number"),v.from("user_solo_progress").select("unlocked_level").eq("user_id",e.profile.id).maybeSingle()]),a=(r==null?void 0:r.unlocked_level)||1,d=n||[],l=document.getElementById("solo-levels-list");if(l){if(!d.length){l.innerHTML='<div style="text-align:center;color:#999;padding:20px">Aucun niveau configuré.</div>';return}l.innerHTML=d.map(s=>{const p=s.level_number>a,c=s.level_number===a,x=p?"#f0f0f0":c?"#eefaf2":"#f7f7f7",y=p?"#ddd":c?"#bfe8cf":"#e0e0e0",m=p?"#999":"#12401f";return`
      <div class="solo-level-card" data-level="${s.level_number}" data-locked="${p}"
        style="cursor:${p?"not-allowed":"pointer"};display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${x};border:1px solid ${y};opacity:${p?.6:1};transition:transform .12s ease">
        <div style="width:46px;height:46px;border-radius:12px;background:${p?"#bbb":"#1A6B3C"};display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#fff;flex-shrink:0">
          ${p?"🔒":s.level_number}
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:800;font-size:15px;color:${m}">Niveau ${s.level_number}</div>
          <div style="font-size:11px;color:${m};opacity:0.75;margin-top:1px">
            Note globale ~${s.target_note_avg} · 🟡${s.nb_liens_jaune} 🟢${s.nb_liens_vert} · 🏟️${s.nb_joueurs_stade}
          </div>
        </div>
        ${p?"":`<div style="font-weight:900;font-size:12.5px;color:${m};background:rgba(255,255,255,0.7);padding:6px 11px;border-radius:999px;flex-shrink:0;white-space:nowrap">+${s.reward_credits} cr.</div>`}
      </div>`}).join(""),l.querySelectorAll(".solo-level-card").forEach(s=>{s.dataset.locked!=="true"&&(s.addEventListener("mouseenter",()=>{s.style.transform="translateY(-1px)"}),s.addEventListener("mouseleave",()=>{s.style.transform=""}),s.addEventListener("click",()=>{o(),wt(),t("match",{matchMode:"solo",soloLevel:Number(s.dataset.level)})}))})}}const Ei="#1A6B3C",zi="#cc2222",Hr="#D4A017",Ho="#888";async function Ur(t,e){const{state:i,toast:o}=e;t.innerHTML=`
    <div style="padding:16px;max-width:640px;margin:0 auto">
      <h2 style="font-size:20px;font-weight:900;margin-bottom:16px">👥 Amis</h2>

      <!-- Actions -->
      <div style="display:flex;gap:10px;margin-bottom:20px">
        <button id="btn-add-friend" class="btn btn-primary" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px">
          ➕ Ajouter un ami
        </button>
        <button id="btn-accept-friend" class="btn" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;background:var(--tile-bg);border:1.5px solid var(--green,#1A6B3C);color:var(--green,#1A6B3C);font-weight:700">
          ✅ Accepter un ami
          <span id="pending-badge" style="display:none;background:#cc2222;color:#fff;border-radius:50%;width:18px;height:18px;font-size:11px;font-weight:900;display:flex;align-items:center;justify-content:center"></span>
        </button>
      </div>

      <!-- Liste amis -->
      <div id="friends-list">
        <div style="text-align:center;color:#aaa;padding:32px">Chargement…</div>
      </div>
    </div>`,await qn(i,o,e),document.getElementById("btn-add-friend").addEventListener("click",()=>Vr(i,o)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Bn(i,o,null,e))}async function qn(t,e,i={}){const{navigate:o}=i,n=t.user.id,{data:r,error:a}=await v.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${n},addressee_id.eq.${n}`),{count:d}=await v.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",n).eq("status","pending"),l=document.getElementById("pending-badge");l&&(d>0?(l.style.display="flex",l.textContent=d):l.style.display="none");const s=document.getElementById("friends-list");if(!s)return;if(a){console.error("[Friends] Erreur:",a),s.innerHTML=`<div style="color:${zi};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const p=(r||[]).map(y=>y.requester_id===n?y.addressee_id:y.requester_id);let c={};if(p.length){const{data:y}=await v.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",p);(y||[]).forEach(m=>{c[m.id]=m})}const x=(r||[]).map(y=>({friendshipId:y.id,friend:c[y.requester_id===n?y.addressee_id:y.requester_id]||{pseudo:"?"}}));if(!x.length){s.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}s.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${x.length} ami${x.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${x.map(({friendshipId:y,friend:m})=>Kr(m,y)).join("")}
    </div>`,s.querySelectorAll("[data-stats]").forEach(y=>{y.addEventListener("click",()=>Wr(t,y.dataset.stats,y.dataset.friendName))}),s.querySelectorAll("[data-match]").forEach(y=>{y.addEventListener("click",async()=>{const m=y.dataset.friendId,f=y.dataset.friendName;if(typeof o!="function"){e("Erreur navigation","error");return}const h=t.user.id,{data:_}=await v.from("friend_match_invites").select("id").eq("inviter_id",m).eq("invitee_id",h).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),$=!!_;console.log("[Friends] clic match",{fid:m,fname:f,isAccepting:$}),wt(),o("match",{matchMode:"friend",friendId:m,friendName:f,isAccepting:$})})})}function Kr(t,e){const i=t.club_name||t.pseudo||"?",o=t.pseudo||"",n=(o||i).slice(0,2).toUpperCase(),r=t.club_color2||Ei,a=t.club_color1||"#ffffff",d=t.last_seen_at?new Date(t.last_seen_at):null,l=d&&Date.now()-d.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:var(--tile-bg);border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${r};border:2.5px solid ${a};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${a}">
          ${n}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${l?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${o}</div>
        <div style="font-size:11px;color:${l?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${l?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${e}" data-friend-id="${t.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:var(--tile-bg);font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${t.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${Hr};background:var(--tile-bg);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Vr(t,e){const i=Eo();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${zi};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${zo()}`,document.body.appendChild(i);const o=i.querySelector("#friend-pseudo-input"),n=i.querySelector("#add-friend-error"),r=()=>i.remove();o.focus(),i.querySelector("#add-cancel").addEventListener("click",r),i.addEventListener("click",a=>{a.target===i&&r()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=o.value.trim();if(!a){n.textContent="Entre un pseudo";return}n.textContent="";const{data:d}=await v.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!d){n.textContent="Utilisateur introuvable";return}if(d.id===t.user.id){n.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:l}=await v.from("friendships").select("id, status").or(`and(requester_id.eq.${t.user.id},addressee_id.eq.${d.id}),and(requester_id.eq.${d.id},addressee_id.eq.${t.user.id})`).single();if(l){const p=l.status==="accepted"?"Vous êtes déjà amis !":l.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";n.textContent=p;return}const{error:s}=await v.from("friendships").insert({requester_id:t.user.id,addressee_id:d.id,status:"pending"});if(s){n.textContent="Erreur : "+s.message;return}r(),e(`✅ Demande envoyée à ${d.pseudo} !`,"success")})}async function Bn(t,e,i=null,o={}){const n=t.user.id,{data:r}=await v.from("friendships").select("id, requester_id").eq("addressee_id",n).eq("status","pending").order("created_at",{ascending:!1}),a=(r||[]).map(x=>x.requester_id);let d={};if(a.length){const{data:x}=await v.from("users").select("id, pseudo, club_name").in("id",a);(x||[]).forEach(y=>{d[y.id]=y})}const l=(r||[]).map(x=>({...x,requester:d[x.requester_id]||{pseudo:"?"}})),s=Eo(),p=l||[];s.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${p.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${p.map(x=>{var y,m,f;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((y=x.requester)==null?void 0:y.club_name)||((m=x.requester)==null?void 0:m.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((f=x.requester)==null?void 0:f.pseudo)||""})</span>
                </div>
                <button data-accept="${x.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Ei};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${x.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${zi};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${zo()}`,document.body.appendChild(s);const c=()=>s.remove();s.querySelector("#pending-close").addEventListener("click",c),s.addEventListener("click",x=>{x.target===s&&c()}),s.querySelectorAll("[data-accept]").forEach(x=>{x.addEventListener("click",async()=>{const{error:y}=await v.from("friendships").update({status:"accepted"}).eq("id",x.dataset.accept);if(y){e("Erreur : "+y.message,"error");return}x.closest("div[style]").remove(),e("✅ Ami accepté !","success"),qn(t,e,o),i&&i()})}),s.querySelectorAll("[data-decline]").forEach(x=>{x.addEventListener("click",async()=>{await v.from("friendships").delete().eq("id",x.dataset.decline),x.closest("div[style]").remove(),e("Demande refusée","info"),i&&i()})})}async function Wr(t,e,i){const o=t.user.id,[n,r]=[o,e].sort(),a=o===n,{data:d}=await v.from("friend_match_stats").select("*").eq("player1_id",n).eq("player2_id",r).single(),l=t.profile.club_name||t.profile.pseudo||"Moi",s=d||{},p=a?s.wins_p1||0:s.wins_p2||0,c=a?s.wins_p2||0:s.wins_p1||0,x=s.draws||0,y=a?s.goals_p1||0:s.goals_p2||0,m=a?s.goals_p2||0:s.goals_p1||0,f=a?s.gc_used_p1||0:s.gc_used_p2||0,h=a?s.gc_used_p2||0:s.gc_used_p1||0,_=s.matches_total||0,$=(z,u,j,T=Ei,P=zi)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${T}">${u}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${z}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${P}">${j}</div>
    </div>`,g=Eo();g.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${_===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${$("Victoires",p,c)}
        ${$("Nuls",x,x,Ho,Ho)}
        ${$("Défaites",c,p)}
        ${$("Buts marqués",y,m)}
        ${$("Buts encaissés",m,y,zi,Ei)}
        ${$("GC utilisés ⚡",f,h,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${_} match${_>1?"s":""} joué${_>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${zo()}`,document.body.appendChild(g),g.querySelector("#stats-close").addEventListener("click",()=>g.remove()),g.addEventListener("click",z=>{z.target===g&&g.remove()})}function Eo(){const t=document.createElement("div");return t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",t}function zo(){return`
    <style>
      .popup-box {
        background:#fff;border-radius:18px;padding:24px;
        width:100%;max-width:420px;
        box-shadow:0 8px 40px rgba(0,0,0,0.25);
        max-height:85vh;overflow-y:auto;
        color:#1a1a1a;
      }
      /* Le fond de la popup est blanc alors que l'app est en thème sombre :
         sans couleur explicite, tout le texte hérite du blanc et devient
         illisible (blanc sur blanc). */
      .popup-box h1, .popup-box h2, .popup-box h3, .popup-box h4,
      .popup-box p, .popup-box div, .popup-box span, .popup-box label,
      .popup-box b, .popup-box strong, .popup-box li {
        color:#1a1a1a;
      }
      .popup-box input, .popup-box select, .popup-box textarea {
        background:#fff;color:#1a1a1a;
      }
      .popup-box input::placeholder, .popup-box textarea::placeholder {
        color:#999;
      }
      .popup-title {
        font-size:18px;font-weight:900;margin-bottom:14px;color:#1a1a1a;
      }
      .popup-btn-ok {
        flex:1;padding:12px;border-radius:10px;border:none;
        background:${Ei};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function Yr(t,{state:e,navigate:i,toast:o}){const n=e.profile;if(!n)return;const r="/icons/";li(i,n,"game",r,o),t.innerHTML=`
  <style>
    .game-page {
      min-height: 100%;
      background: var(--page-bg);
      background-image: var(--page-gradient);
      display: flex; flex-direction: column; align-items: center;
      padding: 24px 16px 60px; box-sizing: border-box; overflow-y: auto;
    }
    .game-inner { width: 100%; max-width: 900px; display: flex; flex-direction: column; gap: 18px; }
    .game-title { display:flex; align-items:center; justify-content:center; gap:10px; margin-bottom: 4px; }
    .game-title .slashes { color: var(--green-light); font-weight:900; font-size:16px; letter-spacing:1px; }
    .game-title h2 { margin:0; font-size:20px; font-weight:900; letter-spacing:3px; color: var(--tile-fg-on-page); }

    .game-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 14px; }
    .game-tile {
      grid-column: span 2;
      border-radius: 18px; background: var(--tile-bg); border: 1px solid var(--tile-border);
      cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center;
      padding: 22px 14px; gap: 6px; text-align: center;
      transition: transform .15s, filter .15s; backdrop-filter: blur(4px);
    }
    .game-tile:hover { filter: brightness(1.15); transform: translateY(-2px); }
    .game-tile:active { transform: scale(.97); }
    .game-tile img { height: 84px; object-fit: contain; }
    .game-tile .g-label { font-size: 16px; font-weight: 900; color: var(--tile-fg-on-page); letter-spacing:.5px; margin-top:4px; }
    .game-tile .g-desc { font-size: 12px; color: var(--tile-fg-dim); line-height:1.4; }

    .game-tile-big { grid-column: span 3; padding: 28px 16px; }
    .game-tile-big img { height: 100px; }
    .game-tile-big .g-label { font-size: 18px; }
    .tile-mini-league { background: linear-gradient(135deg, #2d0a6e 0%, #4a1a8a 50%, #6a28b8 100%); border: 1.5px solid rgba(122,40,184,0.6); box-shadow: 0 4px 20px rgba(122,40,184,0.3); }
    .tile-ranked { background: linear-gradient(135deg, #4a3a05 0%, #8a6a10 50%, #D4A017 100%); border: 1.5px solid rgba(212,160,23,0.6); box-shadow: 0 4px 20px rgba(212,160,23,0.25); }

    @media (max-width: 640px) {
      .game-grid { grid-template-columns: repeat(2, 1fr); }
      .game-tile, .game-tile-big { grid-column: span 1; padding: 18px 10px; }
      .game-tile img, .game-tile-big img { height: 60px; }
    }
  </style>

  <div class="game-page">
    <div class="game-inner">
      <div class="game-title"><span class="slashes">///</span><h2>MODES DE JEU</h2><span class="slashes">///</span></div>

      <div class="game-grid">
        <div class="game-tile" data-action="match-ai">
          <img src="${r}badge-ai.png">
          <div class="g-label">SOLO</div>
          <div class="g-desc">Progressez à travers les niveaux</div>
        </div>
        <div class="game-tile" data-action="match-random">
          <img src="${r}badge-random.png">
          <div class="g-label">RANDOM</div>
          <div class="g-desc">Affrontez un adversaire aléatoire</div>
        </div>
        <div class="game-tile" data-action="match-friend">
          <img src="${r}badge-vs.png">
          <div class="g-label">AMI</div>
          <div class="g-desc">Affrontez un ami</div>
        </div>
        <div class="game-tile game-tile-big tile-mini-league" data-action="mini-league">
          <img src="${r}badge-league.png">
          <div class="g-label">MINI LEAGUE</div>
          <div class="g-desc">Participez à des ligues</div>
        </div>
        <div class="game-tile game-tile-big tile-ranked" data-action="ranked">
          <img src="${r}badge-ranked.png">
          <div class="g-label">RANKED</div>
          <div class="g-desc">Grimpez dans le classement</div>
        </div>
      </div>
    </div>
  </div>`,t.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",()=>{a.style.transform="scale(.96)",setTimeout(()=>a.style.transform="",180);const d=a.dataset.action;if(d==="match-ai"){jn(i,e);return}if(d==="match-random"){wt(),i("match",{matchMode:"random"});return}if(d==="match-friend"){i("friends");return}if(d==="mini-league"){i("mini-league");return}if(d==="ranked"){i("ranked");return}o("Bientôt disponible","info")})})}async function Dn(t,e){var h,_,$;const{state:i,navigate:o,toast:n}=e,r=wi(),a=yo(),d=(h=i==null?void 0:i.profile)==null?void 0:h.is_admin,l="2026.08.15-2027";t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">

    <div style="padding:16px;display:flex;flex-direction:column;gap:14px;max-width:520px;margin:0 auto">

      <div style="background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:14px;padding:18px">
        <div style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page);margin-bottom:4px">🛡️ Mon équipe</div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Ton pseudo, le nom et les couleurs de ton club.</div>

        <div style="display:flex;flex-direction:column;gap:10px">
          <div>
            <label style="font-size:11px;font-weight:700;color:var(--tile-fg-dim);display:block;margin-bottom:4px">PSEUDO</label>
            <input id="team-pseudo" value="${(i.profile.pseudo||"").replace(/"/g,"&quot;")}" readonly disabled
              style="width:100%;box-sizing:border-box;padding:10px;border-radius:8px;border:1.5px solid var(--tile-border);background:var(--tile-bg);color:var(--tile-fg-dim);font-size:14px;cursor:not-allowed">
          </div>
          <div>
            <label style="font-size:11px;font-weight:700;color:var(--tile-fg-dim);display:block;margin-bottom:4px">NOM DU CLUB</label>
            <input id="team-club-name" value="${(i.profile.club_name||"").replace(/"/g,"&quot;")}"
              style="width:100%;box-sizing:border-box;padding:10px;border-radius:8px;border:1.5px solid var(--tile-border);background:var(--input-bg,#fff);color:var(--input-fg,#111);font-size:14px">
          </div>
          <div style="display:flex;gap:14px">
            <div style="flex:1">
              <label style="font-size:11px;font-weight:700;color:var(--tile-fg-dim);display:block;margin-bottom:4px">COULEUR 1</label>
              <input type="color" id="team-color1" value="${i.profile.club_color1||"#1A6B3C"}" style="width:100%;height:38px;padding:2px;border-radius:8px;border:1.5px solid var(--tile-border);cursor:pointer">
            </div>
            <div style="flex:1">
              <label style="font-size:11px;font-weight:700;color:var(--tile-fg-dim);display:block;margin-bottom:4px">COULEUR 2</label>
              <input type="color" id="team-color2" value="${i.profile.club_color2||"#D4A017"}" style="width:100%;height:38px;padding:2px;border-radius:8px;border:1.5px solid var(--tile-border);cursor:pointer">
            </div>
          </div>
          <div id="team-preview" style="height:48px;border-radius:10px;margin-top:2px"></div>
          <div id="team-error" style="font-size:12px;color:#ff6b6b;min-height:14px"></div>
          <button id="team-save" class="btn btn-primary" style="width:100%;padding:12px;border-radius:10px;font-weight:700;font-size:14px">💾 Enregistrer</button>
        </div>
      </div>

      <div style="background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:14px;padding:18px">
        <div style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page);margin-bottom:4px">🎨 Apparence</div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Choisis le thème de l'application.</div>
        <div style="display:flex;gap:10px">
          <button data-theme-choice="club" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${r==="club"?"#D4A017":"var(--tile-border)"};background:${r==="club"?"rgba(212,160,23,0.12)":"transparent"}">
            <div style="font-size:22px;margin-bottom:6px">🛡️</div>
            <div style="font-size:13px;font-weight:700;color:var(--tile-fg-on-page)">Club</div>
          </button>
          <button data-theme-choice="dark" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${r==="dark"?"#D4A017":"var(--tile-border)"};background:${r==="dark"?"rgba(212,160,23,0.12)":"transparent"}">
            <div style="font-size:22px;margin-bottom:6px">🌙</div>
            <div style="font-size:13px;font-weight:700;color:var(--tile-fg-on-page)">Sombre</div>
          </button>
          <button data-theme-choice="light" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${r==="light"?"#D4A017":"var(--tile-border)"};background:${r==="light"?"rgba(212,160,23,0.12)":"transparent"}">
            <div style="font-size:22px;margin-bottom:6px">☀️</div>
            <div style="font-size:13px;font-weight:700;color:var(--tile-fg-on-page)">Clair</div>
          </button>
        </div>
      </div>

      <div style="background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:14px;padding:18px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
          <div style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page)">🔊 Son</div>
          <div id="volume-label" style="font-size:14px;font-weight:900;color:#D4A017">${a}%</div>
        </div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Musiques et effets sonores de l'app.</div>
        <input id="volume-slider" type="range" min="0" max="100" step="5" value="${a}"
          style="width:100%;accent-color:#1A6B3C;cursor:pointer;margin-bottom:14px">
        <button id="volume-test" class="btn" style="width:100%;padding:11px;border-radius:10px;border:1.5px solid var(--tile-border);background:transparent;color:var(--tile-fg-on-page);font-weight:700;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">
          🎵 Tester le son
        </button>
      </div>

      ${d?`
      <a href="/admin.html" id="settings-admin-mode"
        style="width:100%;box-sizing:border-box;padding:14px;border-radius:12px;border:none;background:var(--yellow,#D4A017);color:#111;font-weight:900;font-size:14px;cursor:pointer;margin-top:6px;text-align:center;text-decoration:none;display:flex;align-items:center;justify-content:center;gap:8px">
        ⚙️ Administration Mode
      </a>`:""}

      <button id="settings-tutorial"
        style="width:100%;box-sizing:border-box;padding:14px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.15);background:transparent;color:var(--tile-fg-on-page);font-weight:700;font-size:14px;cursor:pointer;margin-top:${d?"10px":"6px"};text-align:center;display:flex;align-items:center;justify-content:center;gap:8px">
        📖 Revoir le tutoriel
      </button>

      <a href="https://discord.gg/aaMKMA8VS" target="_blank" rel="noopener" id="settings-discord"
        style="width:100%;box-sizing:border-box;padding:14px;border-radius:12px;border:none;background:#5865F2;color:#fff;font-weight:900;font-size:14px;cursor:pointer;margin-top:10px;text-align:center;text-decoration:none;display:flex;align-items:center;justify-content:center;gap:8px">
        💬 Rejoindre le Discord
      </a>

      <button id="settings-logout" class="btn" style="width:100%;padding:14px;border-radius:12px;border:1.5px solid #ff6b6b;background:transparent;color:#ff6b6b;font-weight:700;font-size:14px;cursor:pointer;margin-top:10px;display:flex;align-items:center;justify-content:center">
        Déconnexion
      </button>

      <div style="text-align:center;font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace;margin-top:4px">build ${l}</div>

    </div>
  </div>`,t.querySelectorAll("[data-theme-choice]").forEach(g=>{g.addEventListener("click",()=>{an(g.dataset.themeChoice),Dn(t,e)})});const s=t.querySelector("#team-color1"),p=t.querySelector("#team-color2"),c=t.querySelector("#team-preview"),x=()=>{c&&(c.style.background=`linear-gradient(135deg, ${s.value} 50%, ${p.value} 50%)`)};x(),s==null||s.addEventListener("input",x),p==null||p.addEventListener("input",x),(_=t.querySelector("#team-save"))==null||_.addEventListener("click",async()=>{const g=t.querySelector("#team-error"),z=t.querySelector("#team-save"),u=t.querySelector("#team-club-name").value.trim();if(u.length<2){g.textContent="Nom de club trop court.";return}z.disabled=!0,z.textContent="⏳ Enregistrement...",g.textContent="";const{error:j}=await v.from("users").update({club_name:u,club_color1:s.value,club_color2:p.value}).eq("id",i.profile.id);if(z.disabled=!1,z.textContent="💾 Enregistrer",j){g.textContent=j.message;return}i.profile.club_name=u,i.profile.club_color1=s.value,i.profile.club_color2=p.value,g.style.color="#2ecc71",g.textContent="✅ Modifications enregistrées.",wi()==="club"&&an("club")});const y=t.querySelector("#volume-slider"),m=t.querySelector("#volume-label");let f=null;y.addEventListener("input",()=>{nr(Number(y.value)),m.textContent=`${y.value}%`,f&&(f.volume=Math.max(0,Math.min(1,Number(y.value)/100)))}),t.querySelector("#volume-test").addEventListener("click",()=>{f=ho("/sounds/match-opening.mp3",1)}),($=t.querySelector("#settings-tutorial"))==null||$.addEventListener("click",()=>{$n(()=>{})}),t.querySelector("#settings-logout").addEventListener("click",async()=>{await v.auth.signOut(),window.location.reload()})}const Jr={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},mi={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Uo=["GK","DEF","MIL","ATT"],Xr=["Tous","GK","DEF","MIL","ATT"],Zr={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Ko(t){const e=t.player;return e?(e.rarity,Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)):null}function Qr(t){return t.length?t.reduce((e,i)=>Ko(i)>Ko(e)?i:e,t[0]):t[0]}const ea={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ti(t,e){return t&&Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Qi(t,e="",i=1){const o=t.player;if(!o)return"";const n=t.evolution_bonus||0,r={...o,_evolution_bonus:n},a=e?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${e}</div>`:"",d=i>1?`
    <style>
      @keyframes bigEvolveGlow {
        0%,100% { box-shadow:0 0 6px rgba(212,160,23,0.7), 0 0 14px rgba(212,160,23,0.45) }
        50%     { box-shadow:0 0 12px rgba(212,160,23,1),  0 0 26px rgba(212,160,23,0.75) }
      }
      .big-evolve-btn {
        position:absolute; left:50%; bottom:2%; transform:translateX(-50%);
        z-index:12; white-space:nowrap; cursor:pointer;
        background:linear-gradient(135deg,#f6d365,#D4A017 45%,#f0c040);
        color:#1a1a1a; border:1px solid #ffe9a8; border-radius:999px;
        font-weight:900; font-size:9px; letter-spacing:.3px;
        padding:4px 10px; animation:bigEvolveGlow 1.8s ease-in-out infinite;
      }
      .big-evolve-btn:hover { filter:brightness(1.08) }
    </style>
    <button type="button" class="big-evolve-btn" data-evolve-card="${t.id}"
      title="Fusionner les ${i-1} exemplaire(s) en trop">⬆️ Faire évoluer</button>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${t.id}">
    ${a}
    ${qe(r,{width:140,context:"collection"})}
    ${d}
  </div>`}function Vo(t){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${qe(t,{width:140,context:"collection"})}
  </div>`}async function ta(t,e){const{state:i,navigate:o,toast:n,openModal:r,closeModal:a}=e;li(o,i.profile,"cards","/icons/",n),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await v.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await v.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),s=(d||[]).filter(D=>D.card_type==="player"&&D.player),p=(d||[]).filter(D=>D.card_type==="game_changer"),c=(d||[]).filter(D=>D.card_type==="formation"),x=(d||[]).filter(D=>D.card_type==="stadium"),{data:y}=await v.from("gc_definitions").select("name,gc_type,color,effect,image_url"),m={};(y||[]).forEach(D=>{m[D.name]=D});const{data:f}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),h={};(f||[]).forEach(D=>{h[D.id]=D}),x.forEach(D=>{D.stadium_def&&(h[D.stadium_id]=D.stadium_def)});const _=Object.keys(Li),$=Object.keys(Ze),g={};s.forEach(D=>{const C=D.player.id;g[C]=(g[C]||0)+1}),new Set(Object.keys(g).map(D=>String(D)));const z=new Set(c.map(D=>D.formation)),u=new Set(p.map(D=>D.gc_type));let j="player",T="Tous",P="",Y=!1,X=!1,M=new Set,w=new Set,b="job";function E(D){return D.job==="GK"?Number(D.note_g)||0:D.job==="DEF"?Number(D.note_d)||0:D.job==="MIL"?Number(D.note_m)||0:Number(D.note_a)||0}function H(D,C){return b==="note_desc"?[...D].sort((K,W)=>E(C(W))-E(C(K))):b==="note_asc"?[...D].sort((K,W)=>E(C(K))-E(C(W))):[...D].sort((K,W)=>{const J=C(K),F=C(W),ee=Uo.indexOf(J.job),me=Uo.indexOf(F.job);return ee!==me?ee-me:(J.surname_real||"").localeCompare(F.surname_real||"")})}function S(){return H(s,D=>D.player)}function G(){return H(l||[],D=>D)}function de(D){return(!M.size||M.has(D.country_code))&&(!w.size||w.has(D.club_id))}function I(){return S().filter(D=>{const C=D.player,K=T==="Tous"||C.job===T,W=!P||`${C.firstname} ${C.surname_real}`.toLowerCase().includes(P);return K&&W&&de(C)})}function L(){return G().filter(D=>{const C=T==="Tous"||D.job===T,K=!P||`${D.firstname} ${D.surname_real}`.toLowerCase().includes(P);return C&&K&&de(D)})}t.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--tile-border);background:var(--tile-bg)">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${j==="player"?"var(--green)":"transparent"};
        color:${j==="player"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${s.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${j==="formation"?"var(--green)":"transparent"};
        color:${j==="formation"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${j==="gc"?"var(--green)":"transparent"};
        color:${j==="gc"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${p.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${j==="stadium"?"#4FC3F7":"transparent"};
        color:${j==="stadium"?"#4FC3F7":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${x.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:var(--tile-bg);border-bottom:1px solid var(--tile-border);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:center;padding:0 16px;overflow:visible"></div>
    <div id="col-gap" style="flex-shrink:0;height:0"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:0 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none;align-items:center"></div>
    </div>
  </div>`,function(C){const K=document.getElementById(C);if(!K)return;K.addEventListener("wheel",xe=>{Math.abs(xe.deltaY)<=Math.abs(xe.deltaX)||(xe.preventDefault(),K.scrollLeft+=xe.deltaY)},{passive:!1});let W=!1,J=0,F=0,ee=!1,me=!1;K.addEventListener("mousedown",xe=>{W=!0,ee=!1,J=xe.pageX,F=K.scrollLeft}),window.addEventListener("mouseup",()=>{W=!1,ee&&(K.style.cursor="",me=!0),ee=!1}),window.addEventListener("mousemove",xe=>{if(!W)return;const ue=xe.pageX-J;!ee&&Math.abs(ue)<6||(ee=!0,K.style.cursor="grabbing",xe.preventDefault(),K.scrollLeft=F-ue)}),K.addEventListener("click",xe=>{me&&(xe.stopPropagation(),xe.preventDefault(),me=!1)},!0)}("col-grid");function Q(){const D=document.getElementById("col-filters");D&&(j==="player"?(D.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px;background:#fff;color:#1a1a1a" value="${P}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Xr.map(C=>`
            <button class="filter-btn" data-job="${C}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${C===T?"var(--green)":"var(--tile-border)"};
                background:${C===T?"var(--green)":"#fff"};
                color:${C===T?"#fff":"#555"}">
              ${C}
            </button>`).join("")}
          <button id="sort-note-btn" title="Trier par note"
            style="flex-shrink:0;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${b!=="job"?"var(--green)":"var(--tile-border)"};
              background:${b!=="job"?"var(--green)":"#fff"};
              color:${b!=="job"?"#fff":"#555"}">
            ⇅ Note${b==="note_desc"?" ↓":b==="note_asc"?" ↑":""}
          </button>
          <button id="country-filter-btn" title="Filtrer par pays"
            style="flex-shrink:0;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${M.size?"var(--green)":"var(--tile-border)"};
              background:${M.size?"var(--green)":"#fff"};
              color:${M.size?"#fff":"#555"}">
            🌍${M.size?` (${M.size})`:""}
          </button>
          <button id="club-filter-btn" title="Filtrer par club"
            style="flex-shrink:0;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${w.size?"var(--green)":"var(--tile-border)"};
              background:${w.size?"var(--green)":"#fff"};
              color:${w.size?"#fff":"#555"}">
            🏟️${w.size?` (${w.size})`:""}
          </button>
          <button id="dupes-only-btn" title="Voir les cartes en plusieurs exemplaires"
            style="flex-shrink:0;margin-left:auto;padding:5px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${X?"var(--yellow)":"var(--tile-border)"};
              background:${X?"var(--yellow)":"#fff"};
              color:${X?"#111":"#555"}">
            🗂️×2
          </button>
          <button id="show-all-btn"
            style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${Y?"var(--yellow)":"var(--tile-border)"};
              background:${Y?"var(--yellow)":"#fff"};
              color:${Y?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${Y?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",C=>{P=C.target.value.toLowerCase(),te()}),t.querySelectorAll(".filter-btn").forEach(C=>{C.addEventListener("click",()=>{T=C.dataset.job,Q(),te()})}),document.getElementById("dupes-only-btn").addEventListener("click",()=>{X=!X,Q(),te()}),document.getElementById("show-all-btn").addEventListener("click",()=>{Y=!Y,Q(),te()}),document.getElementById("sort-note-btn").addEventListener("click",()=>{b=b==="job"?"note_desc":b==="note_desc"?"note_asc":"job",Q(),te()}),document.getElementById("country-filter-btn").addEventListener("click",()=>{U("country","🌍 Filtrer par pays",e)}),document.getElementById("club-filter-btn").addEventListener("click",()=>{U("club","🏟️ Filtrer par club",e)})):(D.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${Y?"var(--yellow)":"var(--tile-border)"};
              background:${Y?"var(--yellow)":"#fff"};
              color:${Y?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${Y?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{Y=!Y,Q(),te()})))}function U(D,C,K){var ue,ze,Ie;const W=D==="country",J=W?M:w,F=Y?l||[]:s.map(we=>we.player);let ee;if(W){const we=new Map;F.forEach(ke=>{ke!=null&&ke.country_code&&!we.has(ke.country_code)&&we.set(ke.country_code,ke.country_code)}),ee=[...we.keys()].sort().map(ke=>({value:ke,label:ke}))}else{const we=new Map;F.forEach(ke=>{var k;ke!=null&&ke.club_id&&!we.has(ke.club_id)&&we.set(ke.club_id,((k=ke.clubs)==null?void 0:k.encoded_name)||ke.club_id)}),ee=[...we.entries()].sort((ke,k)=>ke[1].localeCompare(k[1])).map(([ke,k])=>({value:ke,label:k}))}const me=`
      <div style="display:flex;gap:8px;margin-bottom:10px">
        <button id="mf-all"  class="btn btn-ghost" style="flex:1">Tout cocher</button>
        <button id="mf-none" class="btn btn-ghost" style="flex:1">Tout décocher</button>
      </div>
      <div style="max-height:340px;overflow-y:auto;display:flex;flex-direction:column;gap:2px">
        ${ee.length?ee.map(we=>`
          <label style="display:flex;align-items:center;gap:8px;padding:6px 4px;font-size:14px;color:#1a1a1a;cursor:pointer">
            <input type="checkbox" class="mf-check" value="${we.value}" ${J.has(we.value)?"checked":""}>
            <span>${we.label}</span>
          </label>`).join(""):'<div style="color:#999;font-size:13px;text-align:center;padding:16px">Aucune option disponible.</div>'}
      </div>`;K.openModal(C,me,'<button class="btn btn-primary" id="mf-apply" style="width:100%">Appliquer</button>'),(ue=document.getElementById("mf-all"))==null||ue.addEventListener("click",()=>{document.querySelectorAll(".mf-check").forEach(we=>we.checked=!0)}),(ze=document.getElementById("mf-none"))==null||ze.addEventListener("click",()=>{document.querySelectorAll(".mf-check").forEach(we=>we.checked=!1)}),(Ie=document.getElementById("mf-apply"))==null||Ie.addEventListener("click",()=>{J.clear(),document.querySelectorAll(".mf-check:checked").forEach(we=>J.add(we.value)),K.closeModal(),Q(),te()})}function te(){const D=document.getElementById("col-grid");D&&(j==="player"?Fe(D):j==="formation"?_e(D):j==="stadium"?Ee(D):ye(D))}function pe(D,C,K,W,J,F=0){const ee=document.getElementById("col-grid"),me=document.getElementById("col-big");if(!ee||!me)return;var xe=0;function ue(){var q;const ze=window.innerWidth>=768,Ie=document.getElementById("col-big"),we=document.getElementById("col-gap"),ke=((q=document.getElementById("col-grid"))==null?void 0:q.parentElement)||null,k=Ie?Ie.closest(".page"):null;if(Ie&&ke&&k){let N=0;Array.from(k.children).forEach(function(oe){oe!==Ie&&oe!==ke&&oe!==we&&(N+=oe.offsetHeight)});const R=Math.max(0,k.clientHeight-N),V=Math.round(R*(F/100)),Z=Math.max(0,R-V),ie=ze?50/71:45/63,re=Math.round(Z*ie),se=Math.max(0,Z-re);we&&(we.style.height=V+"px"),Ie.style.flex="none",Ie.style.height=re+"px",Ie.style.minHeight="0",ke.style.flex="none",ke.style.height=se+"px",ke.style.minHeight="0",ke.style.display="flex",ke.style.overflow="hidden"}const A=document.getElementById("col-grid");A&&(A.style.height="100%",A.style.flexShrink="0",A.style.overflowX="auto",A.style.overflowY="hidden",A.style.alignItems="center",A.style.width="100%"),me.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+C(D[xe])+"</div>";var B=me.querySelector("[data-card-id],[data-form-id],[data-gc-id]");B&&B.addEventListener("click",function(){W(D[xe])});var O=me.querySelector(".big-evolve-btn");O&&O.addEventListener("click",function(N){N.stopPropagation(),W(D[xe],{autoEvolve:!0})}),requestAnimationFrame(function(){var N=document.getElementById("big-card-inner");if(!(!N||!me)){var R=me.clientHeight,V=me.clientWidth-16,Z=N.offsetHeight,ie=N.offsetWidth;if(Z>0&&ie>0&&R>40){var re=Math.min(R/Z,V/ie);N.style.transform="scale("+re.toFixed(3)+")",N.style.transformOrigin="center center"}}}),ee.innerHTML=D.map(function(N,R){var V=R===xe,Z="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(V?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+R+'" style="'+Z+'">'+K(N,V)+"</div>"}).join(""),ee.querySelectorAll(".col-mini-item").forEach(function(N){N.addEventListener("click",function(){xe=Number(N.dataset.idx),ue(),N.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var N=A?A.clientHeight:0,R=ee.querySelector(".col-mini-item > div");if(!(!N||!R)){var V=R.style.zoom;R.style.zoom="1";var Z=R.offsetHeight;if(R.style.zoom=V,!(Z<=0)){var ie=N/Z;ee.querySelectorAll(".col-mini-item > div").forEach(function(re){re.style.zoom=ie.toFixed(4)})}}})}ue()}function he(D,C){var K=window.innerWidth>=768?.76:.54,W;if(!D||D._fake){var J=D?D.player:null;if(!J)return"";W=Vo(J)}else W=Qi(D,"");var F=D&&!D._fake?g[D.player&&D.player.id]||1:0,ee=F>0?'<div style="position:absolute;top:6px;right:6px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:11px;font-weight:900;padding:2px 7px;z-index:3;box-shadow:0 1px 4px rgba(0,0,0,0.4)">×'+F+"</div>":"";return'<div style="display:inline-block;position:relative;zoom:'+K+';pointer-events:none;line-height:0">'+ee+W+"</div>"}function fe(D,C,K){var W=K>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+K+"</div>":"",J=!!C,F=oi(D,vt[D],{width:160});return J||(F='<div style="filter:grayscale(1);opacity:0.5">'+F+"</div>"),"<div "+(C?'data-form-id="'+C.id+'"':"")+' style="position:relative;cursor:pointer">'+W+F+"</div>"}function Be(D,C){var K=window.innerWidth>=768?.76:.54,W=oi(D,vt[D],{width:140});return C||(W='<div style="filter:grayscale(1);opacity:0.45">'+W+"</div>"),'<div style="display:inline-block;zoom:'+K+';line-height:0;pointer-events:none">'+W+"</div>"}function Fe(D){if(Y){const C=L();if(!C.length){D.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const K=C.map(W=>s.find(J=>J.player.id===W.id)||{_fake:!0,player:W,id:"fake-"+W.id});pe(K,W=>W._fake?Vo(W.player):Qi(W,""),W=>W._fake?he({player:W.player,id:"x",_fake:!0}):he(W),W=>{W._fake||Wo(W,s,g,e)})}else{const C=I();if(!C.length){D.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const K={};C.forEach(J=>{const F=J.player.id;K[F]||(K[F]=[]),K[F].push(J)});const W=Object.values(K).map(J=>Qr(J)).filter(J=>!X||(g[J.player.id]||1)>1);if(X&&!W.length){D.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte en plusieurs exemplaires.</div>';return}pe(W,J=>{const F=g[J.player.id]||1,ee=F>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${F}</div>`:"",xe=s.filter(ue=>ue.player.id===J.player.id&&ue.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Qi(J,ee+xe,F)},J=>he(J),(J,F)=>Wo(J,s,g,e,F))}}function _e(D){const C=Y?_:[...z];if(!C.length){D.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const K=C.map(W=>({formation:W,card:c.find(J=>J.formation===W)||null,owned:z.has(W)}));pe(K,({formation:W,card:J,owned:F})=>fe(W,F?J:null,F?c.filter(ee=>ee.formation===W).length:0),({formation:W,owned:J})=>Be(W,J),({card:W,owned:J})=>{J&&W&&oa(W,c,e,r)},"#1A6B3C",5)}function ye(D){const C=Object.keys(m),K=Y?C.length?C:$:[...u];if(!K.length){D.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const W=K.map(J=>({type:J,gc:Ze[J]||{icon:"⚡",desc:""},def:m[J]||null,owned:u.has(J),card:p.find(F=>F.gc_type===J)||null}));pe(W,({type:J,gc:F,def:ee,owned:me,card:xe})=>{var A;const ue=(ee==null?void 0:ee.name)||J,ze=me?p.filter(B=>B.gc_type===J).length:0,Ie=ze>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ze}</div>`:"",we=(ee==null?void 0:ee.effect)||F.desc||"",ke=ee!=null&&ee.image_url?`/icons/${ee.image_url}`:((A=ee==null?void 0:ee.club)==null?void 0:A.logo_url)||(ee!=null&&ee.country_code?`https://flagsapi.com/${ee.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);let k=Qe(ue,ke,F.icon,we,{width:160,onClick:me});return me||(k=`<div style="filter:grayscale(1);opacity:0.5">${k}</div>`),`<div ${me&&xe?`data-gc-id="${xe.id}" data-gc-type="${J}"`:""} style="position:relative">${Ie}${k}</div>`},({type:J,gc:F,def:ee,owned:me})=>{const xe=window.innerWidth>=768?.76:.54,ue=(ee==null?void 0:ee.name)||J,ze=(ee==null?void 0:ee.effect)||F.desc||"",Ie=ee!=null&&ee.image_url?`/icons/${ee.image_url}`:null;let we=Qe(ue,Ie,F.icon,ze,{width:140});return me||(we=`<div style="filter:grayscale(1);opacity:0.45">${we}</div>`),`<div style="display:inline-block;zoom:${xe};line-height:0;pointer-events:none">${we}</div>`},({type:J,owned:F,def:ee})=>{F&&ia(J,ee,r)},"#7a28b8",5)}function Ee(D){const C="#4FC3F7",K="/";if(!x.length){D.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const W={};x.forEach(F=>{const ee=F.stadium_id||"?";(W[ee]=W[ee]||[]).push(F)});const J=Object.entries(W).map(([F,ee])=>({sid:F,def:h[F]||null,count:ee.length,card:ee[0]}));pe(J,({def:F,count:ee})=>{var we,ke;const me=(F==null?void 0:F.name)||"?",xe=((we=F==null?void 0:F.club)==null?void 0:we.encoded_name)||(F==null?void 0:F.country_code)||"—",ue=F!=null&&F.image_url?`${K}icons/${F.image_url}`:((ke=F==null?void 0:F.club)==null?void 0:ke.logo_url)||(F!=null&&F.country_code?`https://flagsapi.com/${F.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),ze=ee>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ee}</div>`:"",Ie=`${xe}<br>+10 ⭐ joueurs alliés`;return`<div style="position:relative">${ze}${Kt(me,ue,Ie,{width:160})}</div>`},({def:F})=>{var Ie,we;const ee=window.innerWidth>=768?.76:.54,me=(F==null?void 0:F.name)||"?",xe=((Ie=F==null?void 0:F.club)==null?void 0:Ie.encoded_name)||(F==null?void 0:F.country_code)||"—",ue=F!=null&&F.image_url?`${K}icons/${F.image_url}`:((we=F==null?void 0:F.club)==null?void 0:we.logo_url)||(F!=null&&F.country_code?`https://flagsapi.com/${F.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),ze=`${xe}<br>+10 ⭐`;return`<div style="display:inline-block;zoom:${ee};line-height:0;pointer-events:none">${Kt(me,ue,ze,{width:140})}</div>`},null,C,5)}t.querySelectorAll(".col-tab-btn").forEach(D=>{D.addEventListener("click",()=>{j=D.dataset.tab,T="Tous",P="",Y=!1,t.querySelectorAll(".col-tab-btn").forEach(C=>{const K=C.dataset.tab===j;C.style.borderBottomColor=K?"var(--green)":"transparent",C.style.color=K?"var(--green)":"var(--tile-fg-dim)"}),Q(),te()})}),Q(),te()}function ia(t,e,i){const o=Ze[t]||{icon:"⚡",desc:"Effet spécial."},n=(e==null?void 0:e.name)||t,r=(e==null?void 0:e.effect)||o.desc,a=e!=null&&e.image_url?`/icons/${e.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      ${Qe(n,a,o.icon,r,{width:200})}
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ii=1e3;function oa(t,e,i,o){var m,f,h;const{state:n,toast:r,closeModal:a,navigate:d,refreshProfile:l}=i,s=t.formation,p={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function c(){const _=vt[s]||{},$=Li[s]||[],g=290,z=360,u=20;function j(P){const Y=_[P];return Y?{x:Y.x*g,y:Y.y*z}:null}let T=`<svg width="${g}" height="${z}" viewBox="0 0 ${g} ${z}" xmlns="http://www.w3.org/2000/svg">`;for(const[P,Y]of $){const X=j(P),M=j(Y);!X||!M||(T+=`<line x1="${X.x}" y1="${X.y}" x2="${M.x}" y2="${M.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const P of Object.keys(_)){const Y=j(P);if(!Y)continue;const X=P.replace(/\d+/,""),M=p[X]||"#555";T+=`<circle cx="${Y.x}" cy="${Y.y}" r="${u}" fill="${M}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,T+=`<text x="${Y.x}" y="${Y.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${X}</text>`}return T+="</svg>",T}const x=e.filter(_=>_.formation===s);x.length;const y=!t.is_for_sale;o(`Formation ${s}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${c()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+5</b> à l'action (<b>+10</b> si les deux correspondent).
      </div>
    </div>
    ${clubsHTML}

    <!-- Marché (optionnel) -->
    ${y?`
    <div style="margin-top:12px;border-top:1px solid var(--tile-border);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Ii}"
          style="flex:1;padding:8px;border:1.5px solid var(--tile-border);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${t.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(m=document.getElementById("direct-sell-form-btn"))==null||m.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${s} pour ${Ii.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const _=x.find(g=>!g.is_for_sale)||x[0];if(!_){r("Aucune carte à vendre","error");return}await v.from("market_listings").delete().eq("card_id",_.id),await v.from("transfer_history").delete().eq("card_id",_.id);const{error:$}=await v.from("cards").delete().eq("id",_.id);if($){r($.message,"error");return}await v.from("users").update({credits:(n.profile.credits||0)+Ii}).eq("id",n.profile.id),await l(),r(`+${Ii.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),d("collection")}),(f=document.getElementById("market-sell-form-btn"))==null||f.addEventListener("click",async()=>{const _=parseInt(document.getElementById("sell-price-form").value);if(!_||_<1){r("Prix invalide","error");return}await v.from("cards").update({is_for_sale:!0,sale_price:_}).eq("id",t.id),await v.from("market_listings").insert({seller_id:n.profile.id,card_id:t.id,price:_}),r("Carte mise en vente sur le marché !","success"),a(),d("collection")}),(h=document.getElementById("cancel-sell-form-btn"))==null||h.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),r("Annonce retirée","success"),a(),d("collection")})}async function Wo(t,e,i,o,n={}){var U,te,pe,he,fe,Be,Fe,_e,ye,Ee,D;const{state:r,toast:a,openModal:d,closeModal:l,navigate:s,refreshProfile:p}=o,c=t.player,x=e.filter(C=>C.player.id===c.id),y=x.length,m=t.evolution_bonus||0,f=Math.max((Number(c.note_g)||0)+(c.job==="GK"||c.job2==="GK"?m:0),(Number(c.note_d)||0)+(c.job==="DEF"||c.job2==="DEF"?m:0),(Number(c.note_m)||0)+(c.job==="MIL"||c.job2==="MIL"?m:0),(Number(c.note_a)||0)+(c.job==="ATT"||c.job2==="ATT"?m:0)),h=c.rarity||"normal",{data:_}=await v.from("sell_price_configs").select("*").eq("rarity",h).lte("note_min",f).gte("note_max",f).order("note_min",{ascending:!1}).limit(1),$=((U=_==null?void 0:_[0])==null?void 0:U.price)??Zr[h]??1e3,g=((te=_==null?void 0:_[0])==null?void 0:te.price_min)??null,z=((pe=_==null?void 0:_[0])==null?void 0:pe.price_max)??null;Ut(c);const u=Ti(c,c.job)+m,j=c.job2?Ti(c,c.job2)+(Ti(c,c.job2)>0?m:0):null;mi[c.job],c.job2&&mi[c.job2];const T=Jr[c.rarity]||"#ccc",P=ea[c.country_code]||c.country_code||"",Y=t.evolution_bonus||0,M=u+Y,w=j||0,b=w>0?w+Y:0,E=x.map(C=>C.id);let H={};if(E.length){const{data:C}=await v.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",E).order("transferred_at",{ascending:!0});(C||[]).forEach(K=>{H[K.card_id]||(H[K.card_id]=[]),H[K.card_id].push(K)})}const S=E.length?`
    <div style="margin-top:16px;border-top:1px solid var(--tile-border);padding-top:14px">
      <!-- Vente de LA carte actuellement affichée : toujours possible tant qu'elle
           n'est pas déjà elle-même en vente, peu importe le statut des autres copies -->
      ${t.is_for_sale?`
        <div style="background:#fff8e1;border-radius:10px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ Cette carte est en vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
          <button id="cancel-sell-btn" class="btn btn-ghost btn-sm">Retirer</button>
        </div>
      `:`
        <div style="background:#f0fdf4;border:2px solid #1A6B3C;border-radius:12px;padding:14px;margin-bottom:14px">
          <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:8px">🛒 Mettre cette carte en vente</div>
          ${g!==null&&z!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${g.toLocaleString("fr")}</b> – <b>${z.toLocaleString("fr")}</b> cr.
          </div>`:""}
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <input type="number" id="single-sell-price" min="1" placeholder="Prix"
              value="${g||c.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="single-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
          <button id="single-direct-sell-btn" class="btn btn-ghost" style="width:100%;border-color:#1A6B3C;color:#1A6B3C;font-weight:700">
            ⚡ Vente directe immédiate (${(g??$).toLocaleString("fr")} cr.)
          </button>
        </div>
      `}

      ${y-1>0?`<div style="font-size:13px;font-weight:700;margin-bottom:10px">🗂️ Copies (${y-1})</div>`:`
        <div style="font-size:12px;color:#aaa;font-style:italic">Aucune autre copie.</div>
      `}
      <!-- Grille de mini-cartes (copies uniquement, l'exemplaire 1 = carte principale affichée en haut) -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${x.filter(C=>C.id!==t.id).map((C,K)=>{const W=H[C.id]||[],J=C.is_for_sale,F=W.length?W[W.length-1]:null,ee=C.evolution_bonus||0,me=F?F.source==="booster"?"Booster":F.price?F.price.toLocaleString("fr")+" cr.":"—":"—",xe=F?new Date(F.transferred_at).toLocaleDateString("fr",{day:"2-digit",month:"2-digit",year:"numeric"}):"",ue=80,ze=Math.round(ue*657/507),Ie=qe({...c,_evolution_bonus:ee},{width:ue,context:"collection"});return`
            <div class="exemplaire-row" data-card-id="${C.id}" data-card-idx="${K}"
              style="position:relative;cursor:${J?"not-allowed":"pointer"};opacity:${J?.55:1};transition:transform .1s">
              <!-- Checkbox cachée -->
              <input type="checkbox" class="expl-check"
                data-id="${C.id}" data-evo="${ee}" data-note="${Ti(c,c.job)}"
                ${J?"disabled":""}
                style="display:none">
              <!-- Wrapper exactement aux dimensions de la carte -->
              <div class="expl-mini-card" style="position:relative;width:${ue}px;height:${ze}px;border-radius:8px;overflow:hidden">
                ${Ie}
                <!-- Overlay vert sélection — couvre toute la carte -->
                <div class="expl-sel-overlay" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(26,107,60,0.38);pointer-events:none;z-index:10;box-shadow:inset 0 0 0 3px #1A6B3C;border-radius:8px"></div>
                <!-- Checkmark -->
                <div class="expl-sel-check" style="display:none;position:absolute;top:5px;left:5px;width:20px;height:20px;background:#1A6B3C;border-radius:50%;z-index:11;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:900">✓</div>
                ${J?'<div style="position:absolute;top:0;right:0;background:#e67e22;color:#fff;font-size:6px;font-weight:900;padding:2px 4px;border-radius:0 6px 0 4px;z-index:12">VENTE</div>':""}
              </div>
              <!-- Source + date -->
              <div style="font-size:9px;color:#888;text-align:center;margin-top:3px;line-height:1.3">
                ${me}${xe?`<br>${xe}`:""}
              </div>
            </div>`}).join("")}
      </div>

      <!-- Panneau d'action (visible quand au moins 1 sélectionné) -->
      <div id="sell-action-panel" style="display:none;margin-top:12px;background:#f0fdf4;border:2px solid #1A6B3C;border-radius:12px;padding:14px">
        <div style="font-size:13px;font-weight:900;color:#1A6B3C;margin-bottom:10px">
          <span id="sell-selected-count">0</span> exemplaire(s) sélectionné(s)
        </div>

        <!-- Évolution du joueur -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;background:#f0fdf4;border-radius:10px;padding:10px 14px">
          <div>
            <div style="font-size:12px;font-weight:700;color:#1A6B3C">Évolution</div>
            <div style="font-size:11px;color:#555;margin-top:2px">
              ${(t.evolution_bonus||0)>0?`+${t.evolution_bonus} appliqué${t.evolution_bonus>1?"s":""} · Note : ${M}${c.job2&&w>0?` / ${b}`:""}`:`Note actuelle : ${M}${c.job2&&w>0?` / ${b}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${y<=1?"#ccc":"#1A6B3C"};border-color:${y<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${y<=1?"not-allowed":"pointer"}"
            ${y<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${`
        <div style="border-top:1px solid #d1fae5;padding-top:8px">
          <div style="font-size:11px;color:#555;margin-bottom:6px">Marché des transferts (prix par carte)</div>
          ${g!==null&&z!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${g.toLocaleString("fr")}</b> – <b>${z.toLocaleString("fr")}</b> cr. / carte
          </div>`:""}
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${g||c.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
          <button id="market-direct-sell-btn" class="btn btn-ghost" style="width:100%;border-color:#1A6B3C;color:#1A6B3C;font-weight:700">
            ⚡ Vente directe immédiate (${(g??$).toLocaleString("fr")} cr./carte)
          </button>
        </div>`}
      </div>
    </div>`:"";d(`${c.firstname} ${c.surname_real}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${qe({...c,_evolution_bonus:m},{width:160,context:"collection"})}


      <!-- Infos -->
      <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:12px">

        <!-- Rareté + carte évolutive -->
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:3px">RARETÉ</div>
          <div style="font-weight:900;font-size:15px;color:${c.rarity==="normal"?"#555":c.rarity==="papyte"?"#707070":T}">${c.rarity.toUpperCase()}</div>
          ${c.rarity==="pepite"||c.rarity==="papyte"?`
          <div style="margin-top:8px;background:${T}12;border-left:3px solid ${T};border-radius:0 8px 8px 0;padding:10px 12px">
            <div style="font-size:11px;font-weight:700;color:${T};margin-bottom:4px">✨ Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5;margin-bottom:6px">
              ${c.rarity==="pepite"?'⬆️ Bonus évolution : <b style="color:#D4A017">+30%</b>':'⬇️ Malus évolution : <b style="color:#909090">-30%</b>'}
            </div>
            <div style="font-size:10.5px;color:#888;line-height:1.5;font-style:italic;border-top:1px solid ${T}30;padding-top:6px">
              ${c.rarity==="pepite"?"Une carte Pépite est promise à un grand avenir : à force d'évoluer, elle peut un jour devenir une Légende.":"Une carte Papyte peut devenir une légende dans le temps ou prendre sa retraite..."}
            </div>
          </div>`:""}
        </div>

        <!-- Grille d'infos : Pays / Club / Postes -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px 16px;background:#f8f8f8;border-radius:10px;padding:10px 12px">
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">PAYS</div>
            <div style="font-weight:700;font-size:13px;color:#333">${P||"—"}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">CLUB</div>
            <div style="font-weight:700;font-size:13px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${((he=c.clubs)==null?void 0:he.encoded_name)||"—"}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">POSTE PRINCIPAL</div>
            <div style="font-weight:700;font-size:13px;color:${mi[c.job]||"#333"}">${c.job}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">POSTE SECONDAIRE</div>
            <div style="font-weight:700;font-size:13px;color:${c.job2?mi[c.job2]||"#333":"#bbb"}">${c.job2||"Aucun"}</div>
          </div>
        </div>

        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",c.note_g],["DEF",c.note_d],["MIL",c.note_m],["ATT",c.note_a]].map(([C,K])=>{const W=mi[C],J=C==="GK"?"#fff":W,F=C===c.job||C===c.job2,ee=(Number(K)||0)+(F&&Y>0?Y:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${W};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${J};font-family:Arial Black,Arial;line-height:1">${ee}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${J}">${C}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:900;font-size:18px;color:#1A6B3C">×${y}</div>
        </div>
      </div>
    </div>
    ${S}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(fe=document.getElementById("close-detail"))==null||fe.addEventListener("click",l);let G=new Set;const de=c.rarity==="pepite"?1.3:c.rarity==="papyte"?.7:1;function I(){let C=0;return document.querySelectorAll(".expl-check:checked").forEach(K=>{if(K.dataset.id===t.id)return;const J=Number(K.dataset.evo)||0,F=Number(K.dataset.note)||0;C+=F+J}),Math.round(C*de)}const L=()=>{const C=G.size,K=document.getElementById("sell-action-panel");if(!K)return;K.style.display=C>0?"block":"none",document.getElementById("sell-selected-count").textContent=C;const W=document.getElementById("evolve-btn");if(W){const J=I();W.textContent=J>0?`⬆️ Évoluer (+${J})`:"⬆️ Évoluer"}};if(document.querySelectorAll(".expl-check").forEach(C=>{C.addEventListener("change",()=>{const K=C.dataset.id;C.checked?G.add(K):G.delete(K);const W=C.closest(".exemplaire-row");if(W){const J=W.querySelector(".expl-sel-overlay"),F=W.querySelector(".expl-sel-check");J&&(J.style.display=C.checked?"block":"none"),F&&(F.style.display=C.checked?"flex":"none"),W.style.transform=C.checked?"scale(1.05)":"scale(1)"}L()})}),n.autoEvolve){document.querySelectorAll(".expl-check").forEach(K=>{if(K.dataset.id===t.id)return;K.checked=!0,G.add(K.dataset.id);const W=K.closest(".exemplaire-row");if(W){const J=W.querySelector(".expl-sel-overlay"),F=W.querySelector(".expl-sel-check");J&&(J.style.display="block"),F&&(F.style.display="flex"),W.style.transform="scale(1.05)"}}),L();const C=document.getElementById("modal-overlay");C&&(C.style.visibility="hidden"),requestAnimationFrame(()=>{const K=document.getElementById("evolve-btn");if(!K||K.disabled){C&&(C.style.visibility="");return}K.click();const W=()=>{C&&(C.style.visibility="",C.classList.contains("hidden")||l())},J=new MutationObserver(()=>{[...document.body.children].some(me=>{var xe;return((xe=me.style)==null?void 0:xe.zIndex)==="9999"})||(J.disconnect(),clearTimeout(F),W())});J.observe(document.body,{childList:!0});const F=setTimeout(()=>{J.disconnect(),W()},6e4)})}document.querySelectorAll(".exemplaire-row").forEach(C=>{C.addEventListener("click",K=>{if(K.target.tagName==="INPUT")return;const W=C.querySelector(".expl-check");W&&!W.disabled&&(W.checked=!W.checked,W.dispatchEvent(new Event("change")))})}),(Be=document.getElementById("evolve-btn"))==null||Be.addEventListener("click",async()=>{if(y<=1)return;const C=[...G];if(!C.length)return;if(G.has(t.id)){const ue=document.createElement("div");ue.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ue.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(ue),ue.querySelector("#err-close").addEventListener("click",()=>ue.remove()),ue.addEventListener("click",ze=>{ze.target===ue&&ue.remove()});return}const K=C.filter(ue=>ue!==t.id);if(!K.length){a("Sélectionne des copies à sacrifier","warning");return}const W=K.reduce((ue,ze)=>{const Ie=document.querySelector(`.expl-check[data-id="${ze}"]`),we=Ie&&Number(Ie.dataset.evo)||0,ke=Ie&&Number(Ie.dataset.note)||0;return ue+ke+we},0),J=Math.round(W*de),F=c.rarity==="pepite"?" (+30% pépite ✨)":c.rarity==="papyte"?" (-30% papyte)":"";if(!await new Promise(ue=>{const ze=document.createElement("div");ze.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ze.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${c.firstname} ${c.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${K.length}</strong> copie${K.length>1?"s":""} sacrifiée${K.length>1?"s":""}<br>
            ➕ Brut : <strong>+${W}</strong>${F?`<span style="font-size:11px;color:#888"> ${F}</span>`:""}<br>
            ⬆️ Bonus final : <strong style="color:#1A6B3C">+${J}</strong><br>
            📈 Évolution : <strong>${t.evolution_bonus||0}</strong> → <strong style="color:#1A6B3C">${(t.evolution_bonus||0)+J}</strong><br>
            📊 Note finale : <strong>${u}</strong> → <strong style="color:#1A6B3C">${u+J}</strong>
            ${j&&j>0?`<br>📊 Note 2 finale : <strong>${j}</strong> → <strong style="color:#1A6B3C">${j+J}</strong>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(ze),ze.querySelector("#sac-cancel").addEventListener("click",()=>{ze.remove(),ue(!1)}),ze.querySelector("#sac-ok").addEventListener("click",()=>{ze.remove(),ue(!0)}),ze.addEventListener("click",Ie=>{Ie.target===ze&&(ze.remove(),ue(!1))})}))return;if(K.length){await v.from("market_listings").delete().in("card_id",K),await v.from("deck_cards").delete().in("card_id",K),await v.from("transfer_history").delete().in("card_id",K),await v.from("decks").update({stadium_card_id:null}).in("stadium_card_id",K);const{error:ue}=await v.from("cards").delete().in("id",K);if(ue){a("Erreur suppression : "+ue.message,"error");return}}const me=(t.evolution_bonus||0)+J,{error:xe}=await v.from("cards").update({evolution_bonus:me}).eq("id",t.id);if(xe){a("Erreur évolution : "+xe.message,"error");return}a(`⬆️ ${c.firstname} ${c.surname_real} : note ${u} → ${u+me} (+${J}) !`,"success",4e3),l(),s("collection")});async function Q(C){const{data:K}=await v.from("sell_price_configs").select("price_min, price_max").eq("rarity",c.rarity).lte("note_min",u).gte("note_max",u).order("note_max",{ascending:!0}).limit(1).maybeSingle();return K?C<K.price_min||C>K.price_max?{ok:!1,min:K.price_min,max:K.price_max}:{ok:!0}:{ok:!0}}(Fe=document.getElementById("market-sell-btn"))==null||Fe.addEventListener("click",async()=>{var me;const C=[...G];if(!C.length){a("Sélectionne au moins un exemplaire","warning");return}const K=parseInt((me=document.getElementById("sell-market-price"))==null?void 0:me.value);if(!K||K<1){a("Prix invalide","error");return}const W=await Q(K);if(!W.ok){a(`Prix hors grille : entre ${W.min.toLocaleString("fr")} et ${W.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:J}=await v.from("cards").update({is_for_sale:!0,sale_price:K}).in("id",C);if(J){a(J.message,"error");return}const F=C.map(xe=>({seller_id:r.profile.id,card_id:xe,price:K,status:"active"})),{error:ee}=await v.from("market_listings").insert(F);ee&&console.warn("[Market] insert listings:",ee.message),a(`${C.length} carte${C.length>1?"s":""} mise${C.length>1?"s":""} en vente à ${K.toLocaleString("fr")} cr. chacune !`,"success"),l(),s("collection")}),(_e=document.getElementById("single-sell-btn"))==null||_e.addEventListener("click",async()=>{var F;const C=parseInt((F=document.getElementById("single-sell-price"))==null?void 0:F.value);if(!C||C<1){a("Prix invalide","error");return}const K=await Q(C);if(!K.ok){a(`Prix hors grille : entre ${K.min.toLocaleString("fr")} et ${K.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:W}=await v.from("cards").update({is_for_sale:!0,sale_price:C}).eq("id",t.id);if(W){a(W.message,"error");return}const{error:J}=await v.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:C,status:"active"});J&&console.warn("[Market] insert listing:",J.message),a(`Carte mise en vente à ${C.toLocaleString("fr")} cr. !`,"success"),l(),s("collection")}),(ye=document.getElementById("single-direct-sell-btn"))==null||ye.addEventListener("click",async()=>{const C=g??$;if(!confirm(`Vendre cette carte immédiatement pour ${C.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;await v.from("market_listings").delete().eq("card_id",t.id),await v.from("transfer_history").delete().eq("card_id",t.id);const{error:K}=await v.from("cards").delete().eq("id",t.id);if(K){a(K.message,"error");return}await v.from("users").update({credits:(r.profile.credits||0)+C}).eq("id",r.profile.id),await p(),a(`+${C.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),s("collection")}),(Ee=document.getElementById("market-direct-sell-btn"))==null||Ee.addEventListener("click",async()=>{const C=[...G];if(!C.length){a("Sélectionne au moins un exemplaire","warning");return}const W=(g??$)*C.length;if(!confirm(`Vendre ${C.length} carte${C.length>1?"s":""} immédiatement pour ${W.toLocaleString("fr")} crédits au total ? Cette action est irréversible.`))return;await v.from("market_listings").delete().in("card_id",C),await v.from("transfer_history").delete().in("card_id",C);const{error:J}=await v.from("cards").delete().in("id",C);if(J){a(J.message,"error");return}await v.from("users").update({credits:(r.profile.credits||0)+W}).eq("id",r.profile.id),await p(),a(`+${W.toLocaleString("fr")} crédits ! ${C.length} carte${C.length>1?"s":""} vendue${C.length>1?"s":""}.`,"success"),l(),s("collection")}),(D=document.getElementById("cancel-sell-btn"))==null||D.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),a("Annonce retirée","success"),l(),s("collection")})}const na={GK:"note_g",DEF:"note_d",MIL:"note_m",ATT:"note_a"};function ei(t,e){const i=t==null?void 0:t.player;if(!i)return 0;const o=t.evolution_bonus||0;return(Number(i[na[e]])||0)+(e===i.job||e===i.job2?o:0)}function ji(t){return t.replace(/[0-9]/g,"")}function Pn(t,e){if(!(t!=null&&t.player)||!e)return 0;const i=t.player,o=e.club_id&&String(i.club_id)===String(e.club_id),n=e.country_code&&String(i.country_code)===String(e.country_code);return o||n?10:0}function eo(t,e,i){let o=0;for(const[r,a]of Object.entries(t))a&&(o+=ei(a,ji(r)),o+=Pn(a,i));const n=Hi(e)||Li[e]||[];for(const[r,a]of n){const d=t[r],l=t[a];if(!d||!l)continue;const s=Gt(d.player,l.player);s==="#00ff88"?o+=10:s==="#FFD700"&&(o+=5)}return o}function ra(t,e,i){const o={},n=new Set,r=[...t].sort((a,d)=>{const l={GK:0,DEF:1,ATT:2,MIL:3};return l[ji(a)]-l[ji(d)]});for(const a of r){const d=ji(a);let l=null,s=-1;for(const p of e){if(n.has(p.id))continue;const c=ei(p,d)+Pn(p,i);c>s&&(s=c,l=p)}l&&(o[a]=l,n.add(l.id))}return{assign:o,used:n}}function aa(t,e,i,o,n,r,a=6){let d=eo(t,n,r);const l=o.filter(s=>!e.has(s.id));for(let s=0;s<a;s++){let p=!1;for(let c=0;c<i.length;c++)for(let x=c+1;x<i.length;x++){const y=i[c],m=i[x],f=t[y],h=t[m];if(!f||!h)continue;t[y]=h,t[m]=f;const _=eo(t,n,r);_>d?(d=_,p=!0):(t[y]=f,t[m]=h)}for(const c of i){const x=t[c];for(let y=0;y<l.length;y++){const m=l[y];t[c]=m;const f=eo(t,n,r);if(f>d){d=f,p=!0,l[y]=x,e.delete(x==null?void 0:x.id),e.add(m.id);break}else t[c]=x}}if(!p)break}return d}function sa({playerCards:t,availableFormations:e,stadiumCards:i,stadDefMap:o}){const n=(t||[]).filter(d=>d.player);if(n.length<11)return null;const r=[{id:null,def:null}];(i||[]).forEach(d=>{const l=o==null?void 0:o[d.stadium_id];l&&r.push({id:d.id,def:l})});let a=null;for(const d of e||[]){const l=vt[d];if(!l)continue;const s=Object.keys(l);if(s.length===11)for(const p of r){const{assign:c,used:x}=ra(s,n,p.def);if(Object.keys(c).length!==11)continue;const y=aa(c,x,s,n,d,p.def);if(!a||y>a.score){const f=n.filter(_=>!Object.values(c).some($=>$.id===_.id)).map(_=>({c:_,v:Math.max(ei(_,"GK"),ei(_,"DEF"),ei(_,"MIL"),ei(_,"ATT"))})).sort((_,$)=>$.v-_.v).slice(0,5).map(_=>_.c.id),h={};Object.entries(c).forEach(([_,$])=>{h[_]=$.id}),a={formation:d,stadiumCardId:p.id,slots:h,subs:f,score:y}}}}return a}function Yo(t,e=""){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${t}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(e||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const n=o.querySelector("#pm-input");n.focus(),n.select();const r=a=>{o.remove(),i(a)};o.querySelector("#pm-ok").addEventListener("click",()=>r(n.value.trim()||null)),o.querySelector("#pm-cancel").addEventListener("click",()=>r(null)),o.querySelector("#pm-cancel2").addEventListener("click",()=>r(null)),o.addEventListener("click",a=>{a.target===o&&r(null)}),n.addEventListener("keydown",a=>{a.key==="Enter"&&r(n.value.trim()||null),a.key==="Escape"&&r(null)})})}function la(t,e=!1){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${t}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${e?"":"btn-primary"}" id="cm-ok" style="${e?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const n=r=>{o.remove(),i(r)};o.querySelector("#cm-ok").addEventListener("click",()=>n(!0)),o.querySelector("#cm-cancel").addEventListener("click",()=>n(!1)),o.addEventListener("click",r=>{r.target===o&&n(!1)})})}const Ni={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function lo(t,e){const{state:i,navigate:o,toast:n}=e;li(o,i.profile,"decks","/icons/",n),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await v.from("decks").select("id,name,formation,stadium_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1}),a=[...new Set((r||[]).map(l=>l.stadium_card_id).filter(Boolean))];let d={};if(a.length){const{data:l}=await v.from("cards").select("id, stadium_id, stadium_definitions(image_url, country_code, club:clubs(logo_url))").in("id",a);(l||[]).forEach(s=>{var x;const p=s.stadium_definitions,c=((x=p==null?void 0:p.club)==null?void 0:x.logo_url)||(p!=null&&p.image_url?`/icons/${p.image_url}`:null)||(p!=null&&p.country_code?`https://flagsapi.com/${p.country_code}/flat/64.png`:null);d[s.id]=c})}t.innerHTML=`
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(r==null?void 0:r.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(r==null?void 0:r.length)>0?r.map(l=>`
          <div class="card-panel" data-open-deck="${l.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0">
              ${d[l.stadium_card_id]?`<img src="${d[l.stadium_card_id]}" style="width:32px;height:32px;object-fit:contain;border-radius:6px;flex-shrink:0;background:rgba(255,255,255,0.06)">`:'<div style="width:32px;height:32px;border-radius:6px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:16px;opacity:.4">🏟️</div>'}
              <div style="min-width:0">
                <div style="font-weight:700;font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.name}</div>
                <div style="font-size:11px;color:var(--tile-fg-dim)">${l.formation||"—"}</div>
              </div>
            </div>
            <div style="display:flex;gap:6px;flex-shrink:0" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${l.id}" data-name="${l.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${l.id}" data-name="${l.name}">🗑️</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const l=await Yo("Nom du deck",`Deck ${((r==null?void 0:r.length)||0)+1}`);if(!l)return;const{data:s,error:p}=await v.from("decks").insert({owner_id:i.profile.id,name:l}).select().single();if(p){n(p.message,"error");return}n("Deck créé !","success"),Jo(s.id,t,e)}),t.querySelectorAll("[data-open-deck]").forEach(l=>{l.addEventListener("click",()=>Jo(l.dataset.openDeck,t,e))}),t.querySelectorAll("[data-rename]").forEach(l=>{l.addEventListener("click",async()=>{const s=await Yo("Nouveau nom",l.dataset.name);if(!s||s===l.dataset.name)return;const{error:p}=await v.from("decks").update({name:s}).eq("id",l.dataset.rename);if(p){n(p.message,"error");return}n("Deck renommé !","success"),lo(t,e)})}),t.querySelectorAll("[data-delete]").forEach(l=>{l.addEventListener("click",async()=>{if(!await la(`Supprimer le deck "${l.dataset.name}" ? Cette action est irréversible.`,!0))return;await v.from("deck_cards").delete().eq("deck_id",l.dataset.delete);const{error:s}=await v.from("decks").delete().eq("id",l.dataset.delete);if(s){n(s.message,"error");return}n("Deck supprimé.","success"),lo(t,e)})})}async function Jo(t,e,i){const{state:o,toast:n}=i;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await v.from("decks").select("*").eq("id",t).single(),{data:a}=await v.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:d}=await v.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id).eq("card_type","stadium"),l=(a||[]).filter($=>$.card_type==="player"&&$.player),s=(a||[]).filter($=>$.card_type==="formation"),p=(d||[]).filter($=>$.card_type==="stadium"),c=[...new Set(p.map($=>$.stadium_id).filter(Boolean))];let x={};if(p.forEach($=>{$.stadium_def&&$.stadium_id&&(x[$.stadium_id]=$.stadium_def)}),c.length&&Object.keys(x).length<c.length){const{data:$}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",c);($||[]).forEach(g=>{x[g.id]=g})}const y=s.map($=>$.formation).filter(Boolean),{data:m}=await v.from("deck_cards").select("card_id, position, is_starter, slot_order, wanted_player_id").eq("deck_id",t);let f=r.formation||"4-4-2";y.length>0&&!y.includes(f)&&(f=y[0]);const h={deckId:t,name:r.name,formation:f,formationCardId:r.formation_card_id,stadiumCardId:r.stadium_card_id||null,slots:{},wanted:{},subs:[],playerCards:l,formationCards:s,stadiumCards:p,stadDefMap:x,availableFormations:y,_playersCache:{}};(m||[]).forEach($=>{if($.wanted_player_id){$.is_starter&&(h.wanted[$.position]=$.wanted_player_id);return}$.is_starter?h.slots[$.position]=$.card_id:h.subs.includes($.card_id)||h.subs.push($.card_id)});const _=[...new Set(Object.values(h.wanted))];if(_.length){const{data:$}=await v.from("players").select("id, firstname, surname_real, country_code, club_id, job, job2, note_g, note_d, note_m, note_a, rarity, face, clubs(encoded_name, logo_url)").in("id",_);($||[]).forEach(g=>{h._playersCache[g.id]=g})}ft(e,h,i,!0)}function ft(t,e,i,o=!1){var _,$;const{navigate:n}=i;o||fa(e,i),Ni[e.formation];const r=Xo(e.formation),a=r.filter(g=>e.slots[g]||e.wanted[g]).length,d=r.filter(g=>e.wanted[g]).length,l=e.availableFormations.length>0?e.availableFormations:Object.keys(Ni),s=(_=e.stadiumCards)==null?void 0:_.find(g=>g.id===e.stadiumCardId),p=s&&(($=e.stadDefMap)==null?void 0:$[s.stadium_id])||null,c=e.subs.map(g=>e.playerCards.find(z=>z.id===g)).filter(Boolean);c.length!==e.subs.length&&(e.subs=c.map(g=>g.id)),[...Object.values(e.slots),...e.subs],t.innerHTML=`
  <style>.no-scrollbar::-webkit-scrollbar{display:none}</style>
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:8px;padding:6px 12px;min-height:0">
      <button class="btn-icon" id="builder-back" style="font-size:16px">←</button>
      <div style="flex:1">
        <h2 style="font-size:14px;margin:0">${e.name}</h2>
        <p style="font-size:11px;margin:0">${a}/11 · ${c.length}/5 rempl.${d?` · <span style="color:#D4A017;font-weight:700">⚠️ ${d} à acheter</span>`:""}</p>
      </div>
    </div>



    <!-- ── LAYOUT PC ─────────────────────────────────────── -->
    <div class="deck-pc-layout" style="display:none">
      <div style="display:flex;gap:0;min-height:600px">

        <!-- Remplaçants (colonne gauche) -->
        <div style="width:105px;flex-shrink:0;background:rgba(0,0,0,0.3);display:flex;flex-direction:column;align-items:center;padding:12px 6px;gap:8px;border-right:1px solid rgba(255,255,255,0.1)">


          <!-- Remplaçants PC : colonne verticale -->
          <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;text-align:center;margin-top:8px">Remplaçants<br>(${c.length}/5)</div>
          <div style="display:flex;flex-direction:column;gap:6px;align-items:center" id="subs-list">
            ${c.map(g=>{const z={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:24px">
                ${qe({...z,_evolution_bonus:z._evolution_bonus||0},{width:90,showStad:!0,stadDef:p,context:"formation"})}
                <button data-remove-sub="${g.id}"
                  style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:20px;height:20px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
              </div>`}).join("")}
            ${c.length<5?'<div id="add-sub-btn" style="width:90px;height:117px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:18px;color:rgba(255,255,255,0.4);cursor:pointer">+</div>':""}
          </div>
        </div>

        <!-- Terrain PC (colonne centrale) -->
        <div style="flex:1;background:linear-gradient(180deg,#1a6b3c,#0a3d1e);overflow:hidden;height:700px">
          <div id="deck-field-pc" style="margin-top:50px"></div>
        </div>

        <!-- Formation + Stade (colonne droite) -->
        <div style="width:130px;flex-shrink:0;background:rgba(0,0,0,0.3);display:flex;flex-direction:column;align-items:center;padding:12px 8px;gap:12px;border-left:1px solid rgba(255,255,255,0.1)">
          <!-- Formation -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Formation</div>
            <div id="formation-pc-btn" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${oi(e.formation,vt[e.formation],{width:100})}
            </div>
          </div>
          <!-- Stade -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">🏟️ Stade</div>
            <div id="add-stad-btn-pc" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${s?(()=>{var u;const g=e.stadDefMap[s.stadium_id],z=((u=g==null?void 0:g.club)==null?void 0:u.logo_url)||(g==null?void 0:g.image_url)||(g!=null&&g.country_code?`https://flagsapi.com/${g.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Kt((g==null?void 0:g.name)||"Stade",z,"+10 ⭐",{width:100})})():`<div style="width:100px;height:171px;border:2px dashed rgba(79,195,247,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
                <span style="font-size:36px">🏟️</span>
                <span style="font-size:10px;color:rgba(255,255,255,0.4)">Ajouter</span>
              </div>`}
            </div>
          </div>
          <style>
            @keyframes autoDeckGlow {
              0%,100% { box-shadow:0 0 6px rgba(212,160,23,.65), 0 0 14px rgba(212,160,23,.4) }
              50%     { box-shadow:0 0 12px rgba(212,160,23,1), 0 0 26px rgba(212,160,23,.7) }
            }
            .auto-deck-btn {
              width:100%; margin-top:8px; cursor:pointer;
              background:linear-gradient(135deg,#f6d365,#D4A017 45%,#f0c040);
              color:#1a1a1a; border:1px solid #ffe9a8; border-radius:10px;
              font-weight:900; font-size:13px; padding:10px 8px;
              animation:autoDeckGlow 1.8s ease-in-out infinite;
            }
            .auto-deck-btn:hover  { filter:brightness(1.08) }
            .auto-deck-btn:disabled { opacity:.5; cursor:not-allowed; animation:none }
          </style>
          <button class="auto-deck-btn" id="auto-deck-pc">✨ Deck Automatique</button>
          <!-- Enregistrer (PC uniquement — plus haut, évite le scroll derrière le grand terrain) -->
          <button class="btn btn-primary" id="save-deck-pc" style="width:100%;margin-top:8px" ${a<11?"disabled":""}>
            ${a<11?`Placez encore ${11-a}`:"💾 Enregistrer"}
          </button>
          <div class="autosave-indicator" style="text-align:center;font-size:11px;color:var(--tile-fg-dim);margin-top:6px;opacity:0;transition:opacity .3s"></div>
        </div>

      </div>
    </div>

    <!-- ── LAYOUT MOBILE ─────────────────────────────────── -->
    <div class="deck-mobile-layout" style="display:none">
      <!-- Terrain mobile -->
      <div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);overflow:hidden">
        <div id="deck-field-mobile" style="margin-top:30px"></div>
      </div>

      <!-- Remplaçants + Stade mobile -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.1)">
        <div style="display:flex;gap:6px;align-items:flex-start">
          <!-- Remplaçants mobile -->
          <div style="flex:1;min-width:0">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">Remplaçants (${c.length}/5)</div>
            <div style="display:flex;gap:2px;align-items:center;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none" id="subs-list" class="no-scrollbar">
              ${c.map(g=>{const z={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:20px">
                  ${qe({...z,_evolution_bonus:z._evolution_bonus||0},{width:44,showStad:!0,stadDef:p,context:"formation"})}
                  <button data-remove-sub="${g.id}"
                    style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:16px;height:16px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
                </div>`}).join("")}
              ${c.length<5?'<div id="add-sub-btn" style="width:44px;height:57px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:14px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
            </div>
          </div>
          <!-- Formation mobile -->
          <div style="flex-shrink:0;text-align:center">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">⚽</div>
            <div id="formation-mobile-btn" style="cursor:pointer;width:44px;height:57px;border-radius:6px;background:#1A6B3C;border:2px solid #2ecc71;display:flex;align-items:center;justify-content:center">
              <span style="font-size:8px;font-weight:900;color:#fff;text-align:center;line-height:1.1">${e.formation}</span>
            </div>
          </div>
          <!-- Stade mobile : à droite -->
          <div style="flex-shrink:0;text-align:center">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">🏟️</div>
            <div id="add-stad-btn" style="cursor:pointer">
              ${s?(()=>{var u;const g=e.stadDefMap[s.stadium_id],z=((u=g==null?void 0:g.club)==null?void 0:u.logo_url)||(g==null?void 0:g.image_url)||(g!=null&&g.country_code?`https://flagsapi.com/${g.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Kt((g==null?void 0:g.name)||"Stade",z,"+10⭐",{width:44})})():`<div style="width:44px;height:57px;border:2px dashed rgba(79,195,247,0.5);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
                <span style="font-size:13px">🏟️</span>
                <span style="font-size:7px;color:rgba(255,255,255,0.4)">+</span>
              </div>`}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body" style="padding:12px 16px calc(80px + env(safe-area-inset-bottom, 0px))">
      <button class="auto-deck-btn" id="auto-deck-mobile" style="margin-bottom:8px;margin-top:0">✨ Deck Automatique</button>
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${a<11?"disabled":""}>
        ${a<11?`Placez encore ${11-a} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
      <div class="autosave-indicator" style="text-align:center;font-size:11px;color:var(--tile-fg-dim);margin-top:6px;opacity:0;transition:opacity .3s"></div>
    </div>
  </div>`;const x=window.innerWidth>=900,y=t.querySelector(".deck-pc-layout"),m=t.querySelector(".deck-mobile-layout");y&&(y.style.display=x?"block":"none"),m&&(m.style.display=x?"none":"block"),t.querySelectorAll("#save-deck").forEach(g=>{g.closest(".page-body").style.display=x?"none":"block"}),da(t,e,r,i),t.querySelectorAll("#builder-back").forEach(g=>g.addEventListener("click",()=>n("decks")));const f=()=>{const{openModal:g,closeModal:z}=i,j=`<div style="display:flex;flex-wrap:wrap;gap:12px;padding:8px;justify-content:center">
      ${[...new Set(l)].map(T=>{const P=T===e.formation;return`<div data-forma="${T}" style="cursor:pointer;border-radius:10px;${P?"box-shadow:0 0 0 3px #1A6B3C":""}">
          ${oi(T,vt[T],{width:90})}
        </div>`}).join("")}
    </div>`;g("⚽ Choisir une formation",j),document.querySelectorAll("#modal-body [data-forma]").forEach(T=>{T.addEventListener("click",()=>{e.formation=T.dataset.forma;const P=Xo(e.formation),Y={};P.forEach(X=>{e.slots[X]&&(Y[X]=e.slots[X])}),e.slots=Y,z(),ft(t,e,i)})})};t.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(g=>g.addEventListener("click",f)),t.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(g=>g.addEventListener("click",()=>ca(e,t,i))),t.querySelectorAll("#save-deck, #save-deck-pc").forEach(g=>g.addEventListener("click",()=>ma(e,i)));function h(){const g=document.createElement("div");return g.id="deck-auto-loader-overlay",g.style.cssText="position:fixed;inset:0;background:rgba(10,30,20,0.92);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3500;gap:16px;color:#fff",g.innerHTML=`
      <style>
        @keyframes deckAutoSpin { to { transform:rotate(360deg) } }
        .deck-auto-spinner { width:48px;height:48px;border:4px solid rgba(255,255,255,0.2);border-top-color:#D4A017;border-radius:50%;animation:deckAutoSpin .8s linear infinite }
      </style>
      <div class="deck-auto-spinner"></div>
      <div style="font-size:16px;font-weight:800">✨ Deck en cours de préparation…</div>`,document.body.appendChild(g),()=>g.remove()}t.querySelectorAll("#auto-deck-pc, #auto-deck-mobile").forEach(g=>{g.addEventListener("click",async()=>{if(e.playerCards.length<11){i.toast(`Il faut au moins 11 joueurs (tu en as ${e.playerCards.length})`,"error");return}g.disabled=!0;const z=h();await new Promise(j=>setTimeout(j,30));const u=sa({playerCards:e.playerCards,availableFormations:e.availableFormations,stadiumCards:e.stadiumCards,stadDefMap:e.stadDefMap});if(g.disabled=!1,z(),!u){i.toast("Impossible de composer une équipe complète","error");return}e.formation=u.formation,e.slots=u.slots,e.wanted={},e.subs=u.subs,e.stadiumCardId=u.stadiumCardId,ft(t,e,i),i.toast(`✨ Deck optimisé : ${u.formation} · score ${u.score}`,"success")})}),t.querySelectorAll("[data-remove-sub]").forEach(g=>{g.addEventListener("click",()=>{e.subs=e.subs.filter(z=>z!==g.dataset.removeSub),ft(t,e,i)})}),t.querySelectorAll("#add-sub-btn").forEach(g=>g.addEventListener("click",()=>ua(e,t,i)))}function da(t,e,i,o){var z,u,j,T,P,Y;const n=window.innerWidth>=900,r=t.querySelector(n?"#deck-field-pc":"#deck-field-mobile");if(!r)return;const a=(z=e.stadiumCards)==null?void 0:z.find(X=>X.id===e.stadiumCardId),d=a&&((u=e.stadDefMap)==null?void 0:u[a.stadium_id])||null,l=vt[e.formation]||{},s=Hi(e.formation)||[],p={},c=new Set;for(const X of i){const M=e.slots[X],w=M?e.playerCards.find(b=>b.id===M):null;w!=null&&w.player?p[X]={...w.player,_evolution_bonus:w.evolution_bonus||0,face:w.player.face||null}:(j=e.wanted)!=null&&j[X]&&((T=e._playersCache)!=null&&T[e.wanted[X]])?(p[X]={...e._playersCache[e.wanted[X]],_evolution_bonus:0},c.add(X)):p[X]=null}const x=window.innerWidth>=900,y=x?window.innerWidth-280:window.innerWidth-20,m=x?Math.min(y,860):y,f=Math.round(x?m*.82:m*.85),h=x?84:Jn(e.formation,m,f);let _="";for(const[X,M]of s){const w=l[X],b=l[M];if(!w||!b)continue;const E=w.x*m,H=Math.round(.03*f+w.y*.85*f),S=b.x*m,G=Math.round(.03*f+b.y*.85*f),de=p[X],I=p[M],L=Gt(de,I);L==="#ff3333"||L==="#cc2222"?_+=`<line x1="${E.toFixed(1)}" y1="${H.toFixed(1)}" x2="${S.toFixed(1)}" y2="${G.toFixed(1)}" stroke="${L}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(_+=`<line x1="${E.toFixed(1)}" y1="${H.toFixed(1)}" x2="${S.toFixed(1)}" y2="${G.toFixed(1)}" stroke="${L}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,_+=`<line x1="${E.toFixed(1)}" y1="${H.toFixed(1)}" x2="${S.toFixed(1)}" y2="${G.toFixed(1)}" stroke="${L}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let $="";const g=x?Math.round(h*574/372):h;for(const X of i){const M=l[X];if(!M)continue;const w=p[X],b=M.x*m;M.y*f;const E=Math.round(.03*f+M.y*(.85*f)),H=Math.round(b-h/2),S=Math.round(E-g/2);if(w){const G=X.replace(/\d+/,""),de=c.has(X),I=!de&&d&&(d.club_id&&String(w.club_id)===String(d.club_id)||d.country_code&&w.country_code===d.country_code),L=qe({...w,_evolution_bonus:w._evolution_bonus||0},{width:h,showStad:!0,stadDef:d,role:G,compactSquare:!x,context:"formation"});I&&((P=d.club)!=null&&P.logo_url||d.image_url);const Q="",U=de?`<button class="wanted-market-btn" data-wanted-pos="${X}"
          data-player-name="${(w.surname_real||"").replace(/"/g,"&quot;")}"
          data-player-club="${(((Y=w.clubs)==null?void 0:Y.encoded_name)||"").replace(/"/g,"&quot;")}"
          data-player-country="${w.country_code||""}"
          style="position:absolute;left:50%;bottom:${Math.round(g*.03)}px;transform:translateX(-50%);z-index:3;
          white-space:nowrap;background:linear-gradient(135deg,#f6d365,#D4A017);color:#1a1a1a;border:none;
          border-radius:999px;font-size:${Math.max(8,Math.round(h*.09))}px;font-weight:900;
          padding:3px 8px;cursor:pointer">🛒 Mercato</button>`:"";$+=`<div style="position:absolute;left:${H}px;top:${S}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${X}">
        <div style="position:relative;${de?"filter:grayscale(1) brightness(.65)":""}">${L}${Q}</div>
        ${U}
      </div>`}else{const G=X.replace(/\d+/,"");$+=`<div style="position:absolute;left:${H}px;top:${S}px;width:${h}px;height:${g}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${X}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${G}</span>
      </div>`}}r.innerHTML=`
    <div style="position:relative;width:${m}px;height:${f}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${m} ${f}">${_}</svg>
      ${$}
    </div>`,r.querySelectorAll(".deck-slot-hit").forEach(X=>{X.addEventListener("click",()=>pa(X.dataset.pos,e,t,o))}),r.querySelectorAll(".wanted-market-btn").forEach(X=>{X.addEventListener("click",M=>{M.stopPropagation(),o.navigate("market",{search:X.dataset.playerName,club:X.dataset.playerClub,country:X.dataset.playerCountry})})})}function ca(t,e,i){var d;const{openModal:o,closeModal:n}=i,r=new Set,a=(t.stadiumCards||[]).filter(l=>{const s=l.stadium_id||l.id;return r.has(s)?!1:(r.add(s),!0)});o("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:90px;text-align:center">
        <div style="width:85px;height:112px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${t.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:26px">🚫</span>
          <span style="font-size:10px;color:#666">Aucun</span>
        </div>
      </div>
      ${a.map(l=>{var y;const s=t.stadDefMap[l.stadium_id],p=((y=s==null?void 0:s.club)==null?void 0:y.logo_url)||(s==null?void 0:s.image_url)||(s!=null&&s.country_code?`https://flagsapi.com/${s.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),c=t.stadiumCardId===l.id,x=Kt((s==null?void 0:s.name)||"Stade",p,"+10⭐",{width:90});return`<div class="stad-choice" data-stad-id="${l.id}" style="cursor:pointer;position:relative;border-radius:8px;${c?"box-shadow:0 0 0 3px #4fc3f7":""}">
          ${x}
        </div>`}).join("")}
    </div>`),(d=document.getElementById("stad-none"))==null||d.addEventListener("click",()=>{t.stadiumCardId=null,n(),ft(e,t,i)}),document.querySelectorAll(".stad-choice").forEach(l=>{l.addEventListener("click",()=>{t.stadiumCardId=l.dataset.stadId,n(),ft(e,t,i)})})}async function pa(t,e,i,o){var j,T,P,Y,X;const{openModal:n,closeModal:r,navigate:a}=o,d=t.replace(/\d+/,""),l=(j=e.stadiumCards)==null?void 0:j.find(M=>M.id===e.stadiumCardId),s=l&&((T=e.stadDefMap)==null?void 0:T[l.stadium_id])||null,p=e.slots[t],c=p?e.playerCards.find(M=>M.id===p):null;(P=c==null?void 0:c.player)==null||P.id;const x=new Set;Object.entries(e.slots).forEach(([M,w])=>{var E;if(M===t||!w)return;const b=e.playerCards.find(H=>H.id===w);(E=b==null?void 0:b.player)!=null&&E.id&&x.add(b.player.id)}),e.subs.forEach(M=>{var b;const w=e.playerCards.find(E=>E.id===M);(b=w==null?void 0:w.player)!=null&&b.id&&x.add(w.player.id)}),Object.entries(e.wanted||{}).forEach(([M,w])=>{M===t||!w||x.add(w)});const y=new Set,m=e.playerCards.filter(M=>{const w=M.player;return!(w.job===d||w.job2===d)||x.has(w.id)||y.has(w.id)?!1:(y.add(w.id),!0)}),h=(Hi(e.formation)||Li[e.formation]||[]).filter(([M,w])=>M===t||w===t).map(([M,w])=>M===t?w:M).map(M=>{var w;return(w=e.playerCards.find(b=>b.id===e.slots[M]))==null?void 0:w.player}).filter(Boolean);function _(M){const w=M.player,b=M.evolution_bonus||0,E=(d==="GK"?w.note_g:d==="DEF"?w.note_d:d==="MIL"?w.note_m:w.note_a)+(d===w.job||d===w.job2?b:0);let H=0;for(const S of h){const G=Gt(w,S);G==="#00ff88"?H+=10:G==="#FFD700"&&(H+=5)}if(s){const S=s.club_id&&String(w.club_id)===String(s.club_id),G=s.country_code&&String(w.country_code)===String(s.country_code);(S||G)&&(H+=10)}return{total:E+H,note:E,bonus:H}}const $=new Map;if(m.forEach(M=>$.set(M.id,_(M))),m.sort((M,w)=>{const b=$.get(w.id).total-$.get(M.id).total;return b!==0?b:$.get(w.id).note-$.get(M.id).note}),!e._allPlayers){const{data:M}=await v.from("players").select("id, firstname, surname_real, country_code, club_id, job, job2, note_g, note_d, note_m, note_a, rarity, face, clubs(encoded_name, logo_url)").eq("is_active",!0);e._allPlayers=M||[],e._playersCache||(e._playersCache={}),e._allPlayers.forEach(w=>{e._playersCache[w.id]=w})}const g=new Set(e.playerCards.map(M=>{var w;return(w=M.player)==null?void 0:w.id}).filter(Boolean)),z=e._allPlayers.filter(M=>(M.job===d||M.job2===d)&&!x.has(M.id)).map(M=>{const w=(d==="GK"?M.note_g:d==="DEF"?M.note_d:d==="MIL"?M.note_m:M.note_a)||0;let b=0;for(const E of h){const H=Gt(M,E);H==="#00ff88"?b+=10:H==="#FFD700"&&(b+=5)}if(s){const E=s.club_id&&String(M.club_id)===String(s.club_id),H=s.country_code&&String(M.country_code)===String(s.country_code);(E||H)&&(b+=10)}return{p:M,total:w+b,note:w,bonus:b,owned:g.has(M.id)}}).sort((M,w)=>w.total-M.total||w.note-M.note).slice(0,10),u=z.length?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+z.map(M=>{const w={...M.p,_evolution_bonus:0},b=M.bonus>0?`<div style="position:absolute;top:2px;left:2px;z-index:6;background:#1A6B3C;color:#fff;font-size:9px;font-weight:900;padding:1px 5px;border-radius:8px">+${M.bonus}</div>`:"",E=M.owned?e.playerCards.find(S=>{var G;return((G=S.player)==null?void 0:G.id)===M.p.id}):null,H=M.owned?"":'title="Ajouter au deck (non possédé, à acheter)"';return`<div style="position:relative">
      ${b}
      <div class="${M.owned?"player-option":"wanted-option"}"
        ${E?`data-card-id="${E.id}"`:`data-wanted-player-id="${M.p.id}"`}
        ${H}
        style="cursor:pointer;${M.owned?"":"filter:grayscale(1) brightness(.6)"}">
        ${qe(w,{width:100,showStad:!0,stadDef:s,role:d,compactSquare:typeof window<"u"&&window.innerWidth<900,context:"selector"})}
        ${M.owned?"":`<div style="position:absolute;left:50%;bottom:4px;transform:translateX(-50%);z-index:7;white-space:nowrap;
          background:rgba(0,0,0,0.65);color:#fff;border-radius:999px;font-size:8.5px;font-weight:700;padding:2px 7px">+ Ajouter (à acheter)</div>`}
      </div>
    </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.</div>';n(`Choisir ${d} — ${t}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${e.slots[t]||e.wanted[t]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      <div style="display:flex;gap:6px;border-bottom:1px solid var(--tile-border);padding-bottom:8px;margin-bottom:4px">
        <button type="button" class="sel-tab" data-tab="mine" style="flex:1;padding:7px;border-radius:8px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:12.5px;font-weight:700;cursor:pointer">🎴 Mes cartes (${m.length})</button>
        <button type="button" class="sel-tab" data-tab="top" style="flex:1;padding:7px;border-radius:8px;border:1.5px solid #ccc;background:#e8e8e8;color:#555;font-size:12.5px;font-weight:700;cursor:pointer">🏆 Top 10 idéal</button>
      </div>
      <div class="sel-pane" data-pane="top" style="display:none">${u}</div>
      <div class="sel-pane" data-pane="mine">
      ${m.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+m.map(M=>{const w={...M.player,_evolution_bonus:M.evolution_bonus||0},b=$.get(M.id),E=b&&b.bonus>0?`<div style="position:absolute;top:2px;left:2px;z-index:5;background:#1A6B3C;color:#fff;font-size:9px;font-weight:900;padding:1px 5px;border-radius:8px" title="Bonus liens + stade à ce poste">+${b.bonus}</div>`:"";return`<div class="player-option" data-card-id="${M.id}" style="cursor:pointer;position:relative">
          ${E}
          ${qe(w,{width:100,showStad:!0,stadDef:s,role:d,compactSquare:typeof window<"u"&&window.innerWidth<900,context:"selector"})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
      </div>
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(Y=document.getElementById("close-selector"))==null||Y.addEventListener("click",r),document.querySelectorAll(".sel-tab").forEach(M=>{M.addEventListener("click",()=>{document.querySelectorAll(".sel-tab").forEach(w=>{const b=w===M;w.style.background=b?"var(--green)":"#e8e8e8",w.style.borderColor=b?"var(--green)":"#ccc",w.style.color=b?"#fff":"#555"}),document.querySelectorAll(".sel-pane").forEach(w=>{w.style.display=w.dataset.pane===M.dataset.tab?"block":"none"})})}),document.querySelectorAll(".wanted-option").forEach(M=>{M.addEventListener("click",()=>{var b;e.wanted[t]=M.dataset.wantedPlayerId,delete e.slots[t];const w=(b=e._allPlayers)==null?void 0:b.find(E=>E.id===M.dataset.wantedPlayerId);w&&(e._playersCache[w.id]=w),r(),ft(i,e,o)})}),(X=document.getElementById("remove-player"))==null||X.addEventListener("click",()=>{delete e.slots[t],delete e.wanted[t],r(),ft(i,e,o)}),document.querySelectorAll(".player-option").forEach(M=>{M.addEventListener("click",()=>{e.slots[t]=M.dataset.cardId,delete e.wanted[t],r(),ft(i,e,o)})})}function ua(t,e,i){var p,c,x;const{openModal:o,closeModal:n}=i,r=(p=t.stadiumCards)==null?void 0:p.find(y=>y.id===t.stadiumCardId),a=r&&((c=t.stadDefMap)==null?void 0:c[r.stadium_id])||null,d=new Set;Object.keys(t.slots).forEach(y=>{var h;const m=t.slots[y];if(!m)return;const f=t.playerCards.find(_=>_.id===m);(h=f==null?void 0:f.player)!=null&&h.id&&d.add(f.player.id)}),t.subs.forEach(y=>{var f;const m=t.playerCards.find(h=>h.id===y);(f=m==null?void 0:m.player)!=null&&f.id&&d.add(m.player.id)});const l=new Set,s=t.playerCards.filter(y=>{var m,f,h;return d.has((m=y.player)==null?void 0:m.id)||l.has((f=y.player)==null?void 0:f.id)?!1:(l.add((h=y.player)==null?void 0:h.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+s.map(y=>{const m={...y.player,_evolution_bonus:y.evolution_bonus||0};return`<div class="player-option" data-card-id="${y.id}" style="cursor:pointer">
          ${qe(m,{width:100,showStad:!0,stadDef:a,compactSquare:typeof window<"u"&&window.innerWidth<900,context:"selector"})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(x=document.getElementById("close-sub-selector"))==null||x.addEventListener("click",n),document.querySelectorAll(".player-option").forEach(y=>{y.addEventListener("click",()=>{t.subs.push(y.dataset.cardId),n(),ft(e,t,i)})})}async function Fn(t){const e=t.formationCards.find(n=>n.formation===t.formation),i=(e==null?void 0:e.id)||t.formationCardId;await v.from("decks").update({formation:t.formation,formation_card_id:i||null,stadium_card_id:t.stadiumCardId||null}).eq("id",t.deckId),await v.from("deck_cards").delete().eq("deck_id",t.deckId);const o=[];return Object.entries(t.slots).forEach(([n,r],a)=>{o.push({deck_id:t.deckId,card_id:r,position:n,is_starter:!0,slot_order:a})}),Object.entries(t.wanted||{}).forEach(([n,r],a)=>{o.push({deck_id:t.deckId,card_id:null,wanted_player_id:r,position:n,is_starter:!0,slot_order:1e3+a})}),t.subs.forEach((n,r)=>{o.push({deck_id:t.deckId,card_id:n,position:`SUB${r+1}`,is_starter:!1,slot_order:100+r})}),o.length>0?await v.from("deck_cards").insert(o):{error:null}}let co=null;function fa(t,e){const{toast:i}=e;clearTimeout(co),document.querySelectorAll(".autosave-indicator").forEach(n=>{n.textContent="⏳ Enregistrement...",n.style.opacity="1",n.style.color=""}),co=setTimeout(async()=>{const{error:n}=await Fn(t),r=document.querySelectorAll(".autosave-indicator");if(n){r.forEach(a=>{a.textContent="⚠️ Erreur d'enregistrement",a.style.color="#ff6b6b"}),i(n.message,"error");return}r.forEach(a=>{a.textContent="✅ Enregistré",a.style.color="",setTimeout(()=>{a.style.opacity="0"},1500)})},600)}async function ma(t,e){const{toast:i,navigate:o}=e;clearTimeout(co);const{error:n}=await Fn(t);if(n){i(n.message,"error");return}i("Deck enregistré ✅","success"),o("decks")}function Xo(t){const e=Ni[t]||Ni["4-4-2"],i=["GK1"];for(let o=1;o<=e.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=e.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=e.ATT;o++)i.push(`ATT${o}`);return i}async function ga(t,e){const{state:i}=e,o=i.params||{},n=o.matchMode||"vs_ai_easy",r=n==="solo",a=n==="ranked_ai",d=o.soloLevel||1,l=n.replace("vs_ai_",""),s=n;let p=null;if(r){const{data:m}=await v.from("solo_levels").select("*").eq("level_number",d).maybeSingle();p=m||{level_number:d,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500}}const c=o.rankedData||null,x=o.presetSetup||null;async function y({deckId:m,formation:f,starters:h,subsRaw:_,gcCardsEnriched:$,gcDefs:g,stadiumDef:z}){try{let u=no(h,f);z&&(u=Di(u,z),Pi(_,z));let j=null;if(a){const M=xa(u)+ya(u)*10,{jaune:w,vert:b}=va(u,f),E=[.9,1,1.2],H=E[Math.floor(Math.random()*E.length)],S=Math.max(11,Math.round(M*H));j={target_note_avg:Math.max(1,Math.round(S/11)),target_total_note:S,nb_liens_jaune:w,nb_liens_vert:b,nb_joueurs_stade:z?3:0,_variance:H}}const T=p&&{...p,target_total_note:Math.max(11,Math.round((Number(p.target_note_avg)||10)*11))},P=r?await Qo(f,T):a?await Qo(f,j):await ba(f,l),Y=P.lines||P,X=async M=>{try{const w=s==="vs_ai_club"||s==="solo"||s==="ranked_ai"?"club":s,{data:b,error:E}=await v.from("matches").insert({home_id:i.profile.id,away_id:null,mode:w,home_deck_id:m,status:"in_progress"}).select().single();if(E){console.error("[MatchIA] Erreur création match:",E),Xi(t,"⚠️","Impossible de créer le match ("+E.message+").","Retour",()=>e.navigate("home"));return}const H=P.stadiumDef||null;H&&Y&&(Di(Y,H),Pi(P.subs||[],H));const S={gcDefs:g||[],matchId:b==null?void 0:b.id,mode:s,difficulty:l,formation:f,isSolo:r,soloLevel:d,soloLevelConfig:p,isRankedAI:a,rankedAIData:c,homeTeam:u,aiTeam:Y,homeSubs:_,subsUsed:0,maxSubs:Math.min(_.length,3),aiSubs:P.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((P.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:P.gcCards||[],aiUsedGc:[],aiGcTarget:P.gcTarget||2,aiStadiumDef:H,homeScore:0,aiScore:0,gcCards:M,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};ha(t,S,e)}catch(w){console.error("[MatchIA] Exception launchMatch:",w),Xi(t,"⚠️","Erreur au lancement du match : "+w.message,"Retour",()=>e.navigate("home"))}};if(a&&x){X(x.gcCardsEnriched||[]);return}if(!$.length){X([]);return}Ki(t,$,X)}catch(u){console.error("[MatchIA] Exception setup:",u),Xi(t,"⚠️","Erreur de préparation du match : "+u.message,"Retour",()=>e.navigate("home"))}}x?await y(x):await Ui(t,e,n,y)}async function ba(t,e){var h;const{data:i}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:Rn(t),subs:[],gcCards:[],stadiumDef:null};const o=ni[t]||ni["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},r=new Set;function a(_,$,g){var z,u;return r.add(_.id),{cardId:"ai-"+_.id+"-"+g,id:_.id,firstname:_.firstname,name:_.surname_real,country_code:_.country_code,club_id:_.club_id,job:_.job,job2:_.job2,note_g:Number(_.note_g)||0,note_d:Number(_.note_d)||0,note_m:Number(_.note_m)||0,note_a:Number(_.note_a)||0,rarity:_.rarity,skin:_.skin,hair:_.hair,hair_length:_.hair_length,face:_.face,clubName:((z=_.clubs)==null?void 0:z.encoded_name)||null,clubLogo:((u=_.clubs)==null?void 0:u.logo_url)||null,boost:0,used:!1,_line:$}}for(const _ of["GK","DEF","MIL","ATT"]){const $=i.filter(T=>T.job===_&&!r.has(T.id)),g=i.filter(T=>T.job!==_&&!r.has(T.id)),z=[...$,...g],u=[];for(let T=0;T<o[_];T++){const P=z[T];P&&u.push(a(P,_,T))}const j=Pt(u.length);u.forEach((T,P)=>{T._col=j[P]}),n[_]=u}const l=i.filter(_=>!r.has(_.id)).slice(0,5).map((_,$)=>a(_,_.job,100+$)),{data:s}=await v.from("gc_definitions").select("*").eq("is_active",!0),c=[...s||[]].sort(()=>Math.random()-.5).slice(0,3).map((_,$)=>({id:"ai-gc-"+$,gc_type:_.name,name:_.name,icon:"⚡",effect_type:_.effect_type,effect_params:_.effect_params||{}})),x=Object.values(n).flat(),y={};x.forEach(_=>{_.club_id&&(y[_.club_id]=(y[_.club_id]||0)+1)});const m=(h=Object.entries(y).sort((_,$)=>$[1]-_[1])[0])==null?void 0:h[0];let f=null;if(m){const{data:_}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",m).single();_&&(f={club_id:_.id,country_code:null,name:_.encoded_name+" Stadium",club:{encoded_name:_.encoded_name,logo_url:_.logo_url}})}return{lines:n,subs:l,gcCards:c,stadiumDef:f}}function xa(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{const n=o._line||i,r=Number(n==="GK"?o.note_g:n==="DEF"?o.note_d:n==="MIL"?o.note_m:o.note_a)||0;e+=r+(o.boost||0)});return e}function ya(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{o!=null&&o.stadiumBonus&&e++});return e}function va(t,e){const i={};for(const a of["GK","DEF","MIL","ATT"])(t[a]||[]).forEach((d,l)=>{i[`${a}${l+1}`]=d});const o=Hi(e)||Li[e]||[];let n=0,r=0;for(const[a,d]of o){const l=i[a],s=i[d];if(!l||!s)continue;const p=Gt(l,s);p==="#00ff88"?r++:p==="#FFD700"&&n++}return{jaune:n,vert:r}}function Zo(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function gi(t,e,i){if(i<=0||!t.length)return[];const o=[...t].sort((n,r)=>Math.abs(Zo(n)-e)-Math.abs(Zo(r)-e));return o.slice(0,Math.min(i,o.length))}async function Qo(t,e){var E,H;const i=Number(e==null?void 0:e.target_note_avg)||10,o=Number(e==null?void 0:e.nb_liens_jaune)||0,n=Number(e==null?void 0:e.nb_liens_vert)||0,r=Number(e==null?void 0:e.nb_joueurs_stade)||0,{data:a}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url,country_code)").eq("is_active",!0).limit(300);if(!a||a.length<16)return{lines:Rn(t),subs:[],gcCards:[],stadiumDef:null};const d={};a.forEach(S=>{S.club_id&&(d[S.club_id]=(d[S.club_id]||0)+1)});const l=((E=Object.entries(d).sort((S,G)=>G[1]-S[1])[0])==null?void 0:E[0])||null,s=l?a.filter(S=>S.club_id===l):[],p=((H=s[0])==null?void 0:H.country_code)||null,c=p?a.filter(S=>S.country_code===p&&S.club_id!==l):[],x=Math.min(s.length,Math.max(2,n+1),16),y=Math.min(c.length,Math.max(0,o),16-x),m=[],f=new Set;gi(s,i,x).forEach(S=>{m.push(S),f.add(S.id)}),gi(c,i,y).forEach(S=>{m.push(S),f.add(S.id)});const h=Math.max(0,16-m.length),_=a.filter(S=>!f.has(S.id));gi(_,i,h).forEach(S=>{m.push(S),f.add(S.id)});const $=ni[t]||ni["4-4-2"],g={GK:[],DEF:[],MIL:[],ATT:[]},z=new Set;function u(S,G,de){var I,L;return z.add(S.id),{cardId:"ai-"+S.id+"-"+de,id:S.id,firstname:S.firstname,name:S.surname_real,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:Number(S.note_g)||0,note_d:Number(S.note_d)||0,note_m:Number(S.note_m)||0,note_a:Number(S.note_a)||0,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,face:S.face,clubName:((I=S.clubs)==null?void 0:I.encoded_name)||null,clubLogo:((L=S.clubs)==null?void 0:L.logo_url)||null,boost:0,used:!1,_line:G}}for(const S of["GK","DEF","MIL","ATT"]){let G=m.filter(U=>U.job===S&&!z.has(U.id));if(S==="GK"&&!G.length){const U=a.filter(te=>te.job==="GK"&&!z.has(te.id));U.length&&(G=gi(U,i,1))}const de=m.filter(U=>U.job!==S&&!z.has(U.id)),I=[...G,...de],L=[];for(let U=0;U<$[S];U++){const te=I[U];te&&L.push(u(te,S,U))}const Q=Pt(L.length);L.forEach((U,te)=>{U._col=Q[te]}),g[S]=L}let j=m.filter(S=>!z.has(S.id));if(j.length<5){const S=a.filter(G=>!z.has(G.id)&&!j.some(de=>de.id===G.id));j=j.concat(gi(S,i,5-j.length))}const T=j.slice(0,5).map((S,G)=>u(S,S.job,100+G)),P=Number(e==null?void 0:e.target_total_note)||0;if(P>0){const S={GK:"note_g",DEF:"note_d",MIL:"note_m",ATT:"note_a"},G=[];for(const I of["GK","DEF","MIL","ATT"])(g[I]||[]).forEach(L=>G.push({p:L,key:S[I]}));const de=G.reduce((I,L)=>I+(Number(L.p[L.key])||0),0);if(de>0&&G.length){const I=P/de;G.forEach(U=>{U.p[U.key]=Math.max(1,Math.round((Number(U.p[U.key])||0)*I))});let L=P-G.reduce((U,te)=>U+te.p[te.key],0),Q=0;for(;L!==0&&Q++<500;){const U=G[Math.floor(Math.random()*G.length)];L>0?(U.p[U.key]++,L--):U.p[U.key]>1&&(U.p[U.key]--,L++)}T.forEach(U=>{const te=S[U.job]||"note_m";U[te]=Math.max(1,Math.round((Number(U[te])||0)*I))})}}const{data:Y}=await v.from("gc_definitions").select("*").eq("is_active",!0),M=[...Y||[]].sort(()=>Math.random()-.5).slice(0,3).map((S,G)=>({id:"ai-gc-"+G,gc_type:S.name,name:S.name,icon:"⚡",effect_type:S.effect_type,effect_params:S.effect_params||{}}));let w=null;if(r>0&&l){const{data:S}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",l).single();S&&(w={club_id:S.id,country_code:null,name:S.encoded_name+" Stadium",club:{encoded_name:S.encoded_name,logo_url:S.logo_url}})}const b=1+Math.floor(Math.random()*3);return{lines:g,subs:T,gcCards:M,stadiumDef:w,gcTarget:b}}function Rn(t){const e=ni[t]||ni["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let n=0;for(const r of["GK","DEF","MIL","ATT"]){const a=[];for(let l=0;l<e[r];l++){const s=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+n,id:"fake-"+n,firstname:"IA",name:o[n%o.length],country_code:"XX",club_id:null,job:r,job2:null,note_g:r==="GK"?s:2,note_d:r==="DEF"?s:2,note_m:r==="MIL"?s:2,note_a:r==="ATT"?s:2,rarity:"normal",boost:0,used:!1,_line:r}),n++}const d=Pt(a.length);a.forEach((l,s)=>{l._col=d[s]}),i[r]=a}return i}function ha(t,e,i){var n;mn("/sounds/match-opening.mp3",.3);const o=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
    <div style="position:absolute;inset:-6px;border-radius:50%;background:radial-gradient(ellipse,rgba(30,144,255,0.6) 0%,transparent 68%);pointer-events:none"></div>
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="position:relative;z-index:1;width:22px;height:22px;display:block">
      <ellipse cx="16" cy="29.5" rx="12" ry="2.5" fill="#999" opacity="0.35"/>
      <ellipse cx="16" cy="19" rx="13" ry="9" fill="#3a7bbf"/>
      <ellipse cx="16" cy="14" rx="13" ry="5.5" fill="#4a8fd4"/>
      <ellipse cx="16" cy="14" rx="7.5" ry="3" fill="#2ea44f"/>
      <line x1="6" y1="11" x2="4" y2="21" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
      <line x1="11" y1="9.5" x2="11" y2="23" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
      <line x1="21" y1="9.5" x2="21" y2="23" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
      <line x1="26" y1="11" x2="28" y2="21" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
      <rect x="14" y="22" width="4" height="5" rx="1" fill="#1a4a80"/>
      <line x1="9" y1="6" x2="9" y2="13" stroke="#333" stroke-width="1.3"/>
      <polygon points="9,6 14.5,8.5 9,11" fill="#FFD700"/>
      <line x1="23" y1="6" x2="23" y2="13" stroke="#333" stroke-width="1.3"/>
      <polygon points="23,6 17.5,8.5 23,11" fill="#FFD700"/>
      <ellipse cx="16" cy="14" rx="13" ry="5.5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
      <ellipse cx="16" cy="19" rx="13" ry="9" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
    </svg>
  </div>`;t.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">
    <div style="flex-shrink:0;padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center">
      <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${e.isSolo?`SOLO — NIVEAU ${e.soloLevel}`:e.isRankedAI?"RANKED (IA)":`IA (${e.difficulty.toUpperCase()})`}</div>
    </div>
    ${e.aiStadiumDef?`
    <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(30,100,220,0.35),rgba(10,60,180,0.15));border-bottom:1px solid rgba(30,120,255,0.45);flex-shrink:0">
      ${o}
      <span style="font-size:12px;font-weight:700">${e.aiStadiumDef.name}</span>
      <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((n=e.aiStadiumDef.club)==null?void 0:n.encoded_name)||e.aiStadiumDef.country_code||""}</span>
    </div>`:""}
    <div id="opponent-swipe-zone" style="flex:1;min-height:0;overflow:hidden;display:flex;align-items:center;justify-content:center">
      <div class="opponent-preview-wrap" style="overflow:hidden;display:flex;align-items:center;justify-content:center"></div>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const r=t.querySelector(".opponent-preview-wrap"),a=t.querySelector("#opponent-swipe-zone");if(!r||!a)return;const d=a.clientWidth>=900,l=Math.max(200,a.clientHeight-(d?8:40)),s=Math.max(200,a.clientWidth-(d?8:16)),p=d?null:Math.round(Math.max(44,Math.round(s*.168))*.55);r.innerHTML=_i(e.aiTeam,e.formation,null,[],s,l,[],p),r.style.cssText=`width:${s}px;height:${l}px;overflow:hidden;flex-shrink:0`;const c=r.querySelector("svg");c&&(c.style.cssText="display:block;width:100%;height:100%",c.setAttribute("preserveAspectRatio",d?"xMidYMid meet":"none"))})),setTimeout(()=>wa(t,e,i),5e3)}const ot=t=>vn(t);function wa(t,e,i){const o=e.homeTeam.MIL||[],n=e.aiTeam.MIL||[],r=e.stadiumDef||null,a=e.aiStadiumDef||null,d=At(o,r)+Tt(o),l=At(n,a)+Tt(n),s=d>=l;t.innerHTML=`
  <div class="match-screen" style="position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;overflow:hidden;gap:clamp(6px,1.5vh,20px);padding:clamp(8px,1.5vw,24px);background:#0a3d1e">
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

    ${ri(o,e.clubName,"#D4A017","home",r)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${ri(n,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const p=()=>{const m=(f,h)=>t.querySelectorAll(f).forEach((_,$)=>{setTimeout(()=>{_.style.opacity="1",_.style.transform="translateY(0) scale(1)"},h+$*90)});m(".duel-card-home",150),m(".duel-card-ai",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((f,h)=>{setTimeout(()=>{f.style.opacity="1"},h*70)}),900),setTimeout(()=>{const f=t.querySelector("#vs-label");f&&(f.style.opacity="1",f.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(h=>h.style.opacity="1")},1250),setTimeout(()=>{c("score-home",d,800),c("score-ai",l,800)},1500)};function c(m,f,h){const _=document.getElementById(m);if(!_)return;const $=performance.now(),g=z=>{const u=Math.min(1,(z-$)/h);_.textContent=Math.round(f*(1-Math.pow(1-u,3))),u<1?requestAnimationFrame(g):_.textContent=f};requestAnimationFrame(g)}requestAnimationFrame(p),e.attacker=s?"home":"ai";const x=s?cn():null;s&&(e.boostCard={value:x}),e.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(m=>ot(m)),aiPlayers:n.map(m=>ot(m)),homeTotal:d,aiTotal:l,text:`Duel milieu : ${e.clubName} ${d} – ${l} IA → ${s?e.clubName+" attaque":"IA attaque"}`});const y=()=>{e.phase=e.attacker==="home"?"attack":"ai-attack",Ce(t,e,i),e.attacker==="ai"&&setTimeout(()=>So(t,e,i),800)};setTimeout(()=>{const m=document.getElementById("score-home"),f=document.getElementById("score-ai"),h=document.getElementById(s?"duel-row-home":"duel-row-ai"),_=document.getElementById(s?"duel-row-ai":"duel-row-home"),$=s?m:f,g=s?f:m;$&&($.style.fontSize="80px",$.style.color=s?"#FFD700":"#ff6b6b",$.style.animation="duelPulse .5s ease"+(s?", duelGlow 1.5s ease infinite .5s":"")),g&&(g.style.opacity="0.25"),setTimeout(()=>{h&&(h.style.transformOrigin="center",h.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",h.style.zIndex="5"),setTimeout(()=>{var u;const z=document.getElementById("duel-shock");if(z){const j=(u=_||h)==null?void 0:u.getBoundingClientRect(),T=t.querySelector(".match-screen").getBoundingClientRect();j&&(z.style.top=j.top-T.top+j.height/2+"px"),z.style.animation="shockwave .5s ease-out forwards"}_&&(_.style.transformOrigin="center",_.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var u;const z=document.getElementById("duel-finale");z&&(z.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${s?`⚽ ${e.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${s?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${x}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,z.style.transition="opacity .45s ease",z.style.opacity="1",z.style.pointerEvents="auto",(u=document.getElementById("start-match-btn"))==null||u.addEventListener("click",y))},600)},700)},2800)}function Ce(t,e,i){var X,M,w,b,E,H,S,G,de;const o=e.selected.map(I=>I.cardId),n=e.usedSubIds||[],r=e.homeSubs.filter(I=>!n.includes(I.cardId)),d=Object.values(e.homeTeam).flat().filter(I=>I.used).length>0&&r.length>0&&e.subsUsed<e.maxSubs,l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(I=>!I.used),s=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(I=>!I.used),p=ai(e.aiTeam),c=l.length===0&&s.length===0&&!p,x=(e.homeTeam.DEF||[]).filter(I=>!I.used),y=(e.homeTeam.GK||[]).filter(I=>!I.used);let m=[];e.phase==="attack"&&l.length===0&&(p?(m=x.map(I=>I.cardId),x.length===0&&(m=m.concat(y.map(I=>I.cardId)))):c&&(m=[...x,...y].map(I=>I.cardId))),e.log[e.log.length-1];const f=e.phase==="ai-attack"||e.phase==="ai-defense",h=e.phase==="attack",_=e.phase==="defense",$=e.phase==="finished",z=(e.homeSubs||[]).filter(I=>!(e.usedSubIds||[]).includes(I.cardId)).length>0&&e.subsUsed<e.maxSubs,u=h&&l.length===0&&m.length===0&&!z,j=e.gcCards.filter(I=>!e.usedGc.includes(I.id)),T=e.boostCard&&!e.boostUsed;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.innerHTML=`
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
        <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.clubName}</span>
        <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${e.homeScore} – ${e.aiScore}</span>
        <span style="font-size:12px;color:rgba(255,255,255,0.5)">${e.isSolo?`SOLO — NIVEAU ${e.soloLevel}`:e.isRankedAI?"RANKED (IA)":`IA (${e.difficulty.toUpperCase()})`}</span>
      </div>
      <button id="view-ai" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
    </div>

    <!-- ZONE ACTIONS -->
    <div id="last-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">
      ${(()=>{if(e.phase==="defense"&&e.pendingAttack){const L=e.pendingAttack;let Q="";if(e.selected.length>0){const U=e.selected.map(pe=>({...(e.homeTeam[pe._role]||[]).find(fe=>fe.cardId===pe.cardId)||pe,_line:pe._role})),te=ki(U,e.modifiers.home,e.formation);Q=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${e.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${lt(U.map(pe=>({...pe,used:!1})),"#3a7bd5",te.total,"defense",e.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${lt((L.players||[]).map(U=>({...U,used:!1})),"#ff6b6b",L.total,"attack",e.formation)}</div>
            ${Q}
          </div>`}if(e.phase==="ai-defense"&&e.pendingAttack){const L=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${lt((L.players||[]).map(Q=>({...Q,used:!1})),"#00ff88",L.total,"attack",e.formation)}</div>
          </div>`}if(e.phase==="attack"&&e.selected.length>0){const L=e.selected.map(U=>{const te=(e.homeTeam[U._role]||[]).find(he=>he.cardId===U.cardId)||U,pe=["GK","DEF"].includes(U._role);return{...te,_line:U._role,...pe?{note_a:Math.max(1,Number(te.note_a)||0)}:{}}}),Q=$i(L,e.modifiers.home,e.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${e.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${lt(L.map(U=>({...U,used:!1})),"#FFD700",Q.total,"attack",e.formation)}</div>
          </div>`}const I=e.log[e.log.length-1];return I?'<div style="padding:2px 4px">'+hn(I)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${e.log.length})
    </button>

    ${(()=>{const I=window.innerWidth>=700,L=(_e,ye,Ee)=>{var F,ee;const D=(e.gcDefs||[]).find(me=>me.name===_e.gc_type),C=(D==null?void 0:D.name)||_e.gc_type,K=(D==null?void 0:D.effect)||((F=Ze[_e.gc_type])==null?void 0:F.desc)||"",W=D!=null&&D.image_url?`/icons/${D.image_url}`:null,J=((ee=Ze[_e.gc_type])==null?void 0:ee.icon)||"⚡";return`<div class="gc-mini" data-gc-id="${_e.id}" data-gc-type="${_e.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${Qe(C,W,J,K,{width:ye})}
        </div>`},Q=(_e,ye)=>{var Ee;return`<div id="boost-card"
          style="box-sizing:border-box;width:${_e}px;height:${ye}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ye*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(ye*.2)}px">⚡</div>
            <div style="font-size:${Math.round(ye*.09)}px;color:#000;font-weight:900">+${(Ee=e.boostCard)==null?void 0:Ee.value}</div>
          </div>`},U=(_e,ye)=>ye?Q(95,162):L(_e,95),te=(_e,ye)=>ye?Q(53,90):L(_e,53),pe=I?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",he=$?`<button id="btn-results" style="${pe};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${pe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:u?`<button id="btn-pass" style="${pe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:h?`<button id="btn-action" style="${pe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${e.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:_?`<button id="btn-action" style="${pe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${e.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${pe};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,fe=h||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${e.selected.length}/3 sélectionné(s)</div>`:"",Be=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${I?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${r.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':r.map(_e=>`<div class="sub-btn-col" data-sub-id="${_e.cardId}" style="cursor:pointer;flex-shrink:0">${jt(_e,76,100)}</div>`).join("")}
      </div>`,Fe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${_i(e.homeTeam,e.formation,e.phase,o,I?1300:Nt(),I?600:ii(),m)}
        </div>
      </div>`;return I?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Be}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Fe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${he}${fe}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${j.map(_e=>U(_e,!1)).join("")}
            ${T?U(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${_i(e.homeTeam,e.formation,e.phase,o,I?1300:Nt(),I?600:ii(),m)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${j.map(_e=>te(_e,!1)).join("")}
            ${T?te(null,!0):""}
            <div id="sub-btn-main" style="cursor:${d?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${d?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${d?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${d?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${r.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${e.subsUsed}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${e.subsUsed}/${e.maxSubs} rempl.</div>
            </div>
          </div>
          <div>${he}${fe}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${e.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...e.log].reverse().map(I=>{var L,Q,U;if(I.type==="duel"){const te=I.isGoal,pe=I.homeScored?"#FFD700":te?"#ff6b6b":"rgba(255,255,255,0.3)",he=I.homeScored?"⚽ BUT !":te?"⚽ BUT IA !":(L=I.homePlayers)!=null&&L.length?"⚔️ Attaque":"🛡️ Défense",fe=(I.homeTotal??0)>=(I.aiTotal??0);return`<div style="padding:8px;border-radius:8px;background:${te?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${pe};margin-bottom:4px">
                <div style="font-size:9px;color:${pe};letter-spacing:1px;margin-bottom:6px;font-weight:700;text-transform:uppercase;text-align:center">${he}</div>
                <div style="display:flex;align-items:center;justify-content:center;gap:10px">
                  ${(Q=I.aiPlayers)!=null&&Q.length?`<div style="flex:1;display:flex;justify-content:flex-end;opacity:0.75">${lt(I.aiPlayers,"#ff6b6b",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                  <div style="flex-shrink:0;display:flex;align-items:center;gap:6px">
                    <span style="font-size:16px;font-weight:900;color:${fe?"#e03030":"#22c55e"}">${I.aiTotal??"–"}</span>
                    <span style="font-size:9px;color:rgba(255,255,255,0.3)">VS</span>
                    <span style="font-size:16px;font-weight:900;color:${fe?"#22c55e":"#e03030"}">${I.homeTotal??"–"}</span>
                  </div>
                  ${(U=I.homePlayers)!=null&&U.length?`<div style="flex:1;display:flex;justify-content:flex-start">${lt(I.homePlayers,"rgba(255,255,255,0.7)",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                </div>
              </div>`}return I.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${I.outPlayer?jt({...I.outPlayer,used:!0,_line:I.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${I.inPlayer?jt({...I.inPlayer,_line:I.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:I.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${I.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${I.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function P(){const I=t.querySelector(".match-screen");if(!I)return;const L=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);I.style.bottom="auto",I.style.height=L+"px",I.style.minHeight=L+"px",I.style.maxHeight=L+"px",I.style.overflow="hidden";const Q=t.querySelector("#mobile-action-bar"),U=t.querySelector("#mobile-play-area");Q&&U&&(U.style.paddingBottom=Q.offsetHeight+"px")}if(P(),setTimeout(P,120),setTimeout(P,400),setTimeout(P,1e3),e._vvBound||(e._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",P),window.visualViewport.addEventListener("scroll",P)),window.addEventListener("resize",P)),function(){const L=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!L)return;const Q=L.closest("#match-terrain-wrap");Q&&(Q.style.cssText="position:relative;width:100%;height:100%;padding:0"),L.removeAttribute("width"),L.removeAttribute("height"),L.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",L.setAttribute("preserveAspectRatio","xMidYMid meet")}(),e._resizeBound||(e._resizeBound=!0,window.addEventListener("resize",()=>{const I=t.querySelector(".terrain-wrapper svg");if(I){const L=I.closest("#match-terrain-wrap");L&&(L.style.cssText="position:relative;width:100%;height:100%;padding:0"),I.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),it(),e.phase==="attack"||e.phase==="defense"){let I=!1,L=30;const Q=()=>document.getElementById("match-timer"),U=()=>{const te=Q();if(!te)return;const pe=String(Math.floor(L/60)).padStart(2,"0"),he=String(L%60).padStart(2,"0");te.textContent=` ${pe}:${he}`,te.style.color=I?"#ff2222":"#ff9500",te.style.fontWeight="900"};U(),e._timerInt=setInterval(()=>{if(L--,L<0)if(!I)I=!0,L=15,U(),gn("/sounds/timer-urgent.mp3",.6);else{clearInterval(e._timerInt),e._timerInt=null,it(),e.homeScore=0,e.aiScore=3;const te=document.createElement("div");te.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",te.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(te),setTimeout(()=>{te.remove(),Mt(t,e,i)},2500)}else U()},1e3)}(X=document.getElementById("match-quit"))==null||X.addEventListener("click",()=>{ut(t),confirm("Abandonner ? Résultat : défaite 3-0")&&(e.homeScore=0,e.aiScore=3,Mt(t,e,i))}),(M=document.getElementById("view-ai"))==null||M.addEventListener("click",()=>qa(e,i)),(w=document.getElementById("toggle-history"))==null||w.addEventListener("click",()=>{var I;(I=document.getElementById("match-history-panel"))==null||I.classList.add("open")}),(b=document.getElementById("close-history"))==null||b.addEventListener("click",()=>{var I;(I=document.getElementById("match-history-panel"))==null||I.classList.remove("open")}),(E=document.getElementById("btn-action"))==null||E.addEventListener("click",()=>{e.selected.length!==0&&(h?ka(t,e,i):_&&$a(t,e,i))}),(H=document.getElementById("btn-results"))==null||H.addEventListener("click",()=>Mt(t,e,i)),(S=document.getElementById("btn-pass"))==null||S.addEventListener("click",()=>{if(e.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),po(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),Mt(t,e,i);return}e.phase="ai-attack",Ce(t,e,i),setTimeout(()=>So(t,e,i),800)}),t.querySelectorAll(".match-slot-hit").forEach(I=>{I.addEventListener("click",()=>_a(I,e,t,i))}),t.querySelectorAll(".match-used-hit").forEach(I=>{I.addEventListener("click",()=>to(t,e,i,null,I.dataset.cardId))}),t.querySelectorAll(".gc-mini").forEach(I=>{h?I.addEventListener("click",()=>Ia(I.dataset.gcId,I.dataset.gcType,t,e,i)):(I.style.opacity="0.35",I.style.cursor="default",I.addEventListener("click",()=>Bt("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(G=document.getElementById("boost-card"))==null||G.addEventListener("click",()=>ja(t,e,i)),t.querySelectorAll(".sub-btn-col").forEach(I=>{I.addEventListener("click",()=>to(t,e,i,I.dataset.subId))}),(de=document.getElementById("sub-btn-main"))==null||de.addEventListener("click",()=>to(t,e,i))}function _a(t,e,i,o){const n=t.dataset.cardId,r=t.dataset.role,a=e.selected.findIndex(d=>d.cardId===n);if(a!==-1)e.selected.splice(a,1);else{if(e.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const d=(e.homeTeam[r]||[]).find(l=>l.cardId===n);if(d)e.selected.push({...d,_role:r,_line:r});else{const l=Object.keys(e.homeTeam||{}).map(s=>`${s}:${(e.homeTeam[s]||[]).length}`).join(" ");o.toast(`Sélection impossible (rôle="${r}" introuvable dans homeTeam[${l}])`,"error"),console.error("[MatchIA] toggleSelect: joueur introuvable",{cardId:n,role:r,homeTeam:e.homeTeam});return}}Ce(i,e,o)}function Lo(t,e,i){t.matchId&&v.from("matches").update({last_player_id:i}).eq("id",t.matchId).then(()=>{})}function ka(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),it(),Lo(e,i,i.state.profile.id);const o=e.selected.map(r=>{const a=(e.homeTeam[r._role]||[]).find(l=>l.cardId===r.cardId)||r,d=["GK","DEF"].includes(r._role);return{...a,_line:r._role,...d?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),n=$i(o,e.modifiers.home,e.formation);e.pendingAttack={...n,players:[...o],side:"home"},e.selected.forEach(r=>{const a=(e.homeTeam[r._role]||[]).find(d=>d.cardId===r.cardId);a&&(a.used=!0)}),e.log.push({text:`⚔️ Vous attaquez : ${n.total} (base ${n.base}${n.links?` +${n.links} liens`:""}) — ${e.selected.map(r=>r.name).join(", ")}`,type:"info"}),e.selected=[],e.modifiers.home={},e.phase="ai-defense",Ce(t,e,i),setTimeout(()=>Ta(t,e,i),1200)}function $a(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),it(),Lo(e,i,i.state.profile.id);const o=e.stadiumDef||null,n=e.selected.map(l=>{const s=(e.homeTeam[l._role]||[]).find(c=>c.cardId===l.cardId)||l,p=s.stadiumBonus||o&&(o.club_id&&String(s.club_id)===String(o.club_id)||o.country_code&&s.country_code===o.country_code)||!1;return{...s,_line:l._role,stadiumBonus:p}}),r=ki(n,e.modifiers.home,e.formation);e.selected.forEach(l=>{const s=(e.homeTeam[l._role]||[]).find(p=>p.cardId===l.cardId);s&&(s.used=!0)});const a=xo(e.pendingAttack.total,r.total,e.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(e.pendingAttack.players||[]).map(l=>ot(l)),homePlayers:e.selected.map(l=>{const s=(e.homeTeam[l._role]||[]).find(p=>p.cardId===l.cardId)||l;return ot(s)}),homeTotal:r.total,aiTotal:e.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)d.text="🛡️ Bouclier ! But annulé.",e.log.push(d);else if(a.goal){e.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${e.pendingAttack.total} > ${r.total})`,e.log.push(d),e.selected=[],e.modifiers.home={},e.pendingAttack=null,Ce(t,e,i),dt(d.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Ot(t,e,i,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${r.total} ≥ ${e.pendingAttack.total})`,e.log.push(d);e.selected=[],e.modifiers.home={},e.pendingAttack=null,Ot(t,e,i,"home-attack")}function Ea(t,e=()=>{}){if(t.aiSubsUsed>=t.aiMaxSubs)return e();const i=Object.values(t.aiTeam).flat().filter(s=>s.used);if(!i.length)return e();const o=(t.aiSubs||[]).filter(s=>!t.aiUsedSubIds.includes(s.cardId));if(!o.length)return e();const n=i[Math.floor(Math.random()*i.length)],r=o.find(s=>s.job===n.job)||o[0],a={...r,used:!1,_line:n._line,_col:n._col},d=t.aiTeam[n._line],l=d.findIndex(s=>s.cardId===n.cardId);l!==-1&&(d[l]=a),t.aiUsedSubIds.push(r.cardId),t.aiSubsUsed++,t.log.push({text:`🔄 IA : ${r.firstname} ${r.name} remplace ${n.firstname} ${n.name}`,type:"info"}),wn(n,a,e)}function za(t,e){const i=t.effect_params||{},o=i.value||1,n=i.count||1,r=i.roles||[],a=i.target||"home";switch(t.effect_type){case"BOOST_STAT":{const l=Object.values(e.aiTeam).flat().filter(s=>!s.used&&(!r.length||r.includes(s._line))).sort(()=>Math.random()-.5).slice(0,n);l.forEach(s=>{s.boost=(s.boost||0)+o}),l.length&&e.log.push({text:`⚡ IA : +${o} sur ${l.length} joueur(s)`,type:"gc"});break}case"DEBUFF_STAT":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(p=>!p.used&&(!r.length||r.includes(p._line))).sort(()=>Math.random()-.5).slice(0,n);s.forEach(p=>{p.boost=(p.boost||0)-o}),s.length&&e.log.push({text:`🎯 IA : -${o} sur ${s.length} joueur(s)${a!=="ai"?" (vous)":""}`,type:"gc"});break}case"GRAY_PLAYER":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(p=>!p.used&&(!r.length||r.includes(p._line))).sort(()=>Math.random()-.5).slice(0,n);s.forEach(p=>{p.used=!0}),s.length&&e.log.push({text:`❌ IA : ${s.length} joueur(s)${a!=="ai"?" (vous)":""} exclu(s)`,type:"gc"});break}case"REVIVE_PLAYER":{const l=Object.values(e.aiTeam).flat().filter(s=>s.used).sort(()=>Math.random()-.5).slice(0,n);l.forEach(s=>{s.used=!1}),l.length&&e.log.push({text:`💫 IA : ${l.length} joueur(s) ressuscité(s)`,type:"gc"});break}case"REMOVE_GOAL":e.homeScore>0&&(e.homeScore--,e.log.push({text:"🚫 IA : votre dernier but est annulé !",type:"gc"}));break;case"ADD_GOAL_DRAW":e.homeScore===e.aiScore&&(e.aiScore++,e.log.push({text:"🎯 IA : but bonus (match nul) !",type:"gc"}));break;case"ADD_SUB":e.aiMaxSubs=(e.aiMaxSubs||3)+o,e.log.push({text:`🔄 IA : +${o} remplacement(s)`,type:"gc"});break}}function La(t,e=()=>{}){var a;if(!((a=t.aiGcCards)!=null&&a.length))return e();const i=t.aiGcTarget||2;if(t.aiUsedGc.length>=i)return e();const o=t.aiGcCards.filter(d=>!t.aiUsedGc.includes(d.id));if(!o.length||!(t.round>=4&&t.aiUsedGc.length===0)&&Math.random()>.55)return e();const r=o[Math.floor(Math.random()*o.length)];t.aiUsedGc.push(r.id),r.effect_type?za(r,t):t.log.push({text:`⚡ IA joue ${r.icon||"⚡"} ${r.name}`,type:"gc"}),Sa(r,e)}function Sa(t,e=()=>{}){const i=document.getElementById("ai-gc-anim-overlay");i&&i.remove();const o=document.createElement("div");o.id="ai-gc-anim-overlay",o.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.82);animation:aiGcFade .25s ease`,o.innerHTML=`
    <style>
      @keyframes aiGcFade { from{opacity:0} to{opacity:1} }
      @keyframes aiGcPop  { 0%{transform:scale(.6) rotateY(90deg);opacity:0}
                            60%{transform:scale(1.06) rotateY(0);opacity:1}
                            100%{transform:scale(1) rotateY(0);opacity:1} }
    </style>
    <div style="font-size:13px;font-weight:900;letter-spacing:2px;color:#ff6b6b;margin-bottom:14px">
      ⚡ L'ADVERSAIRE JOUE UNE CARTE
    </div>
    <div style="animation:aiGcPop .5s cubic-bezier(.2,.8,.3,1) both">
      ${Qe(t.name||"Game Changer",null,t.icon||"⚡",t.effect||"",{width:170})}
    </div>`,document.body.appendChild(o),setTimeout(()=>{o.remove(),e()},2100)}function So(t,e,i){Lo(e,i,null),Ea(e,()=>{La(e,()=>{Ce(t,e,i),Aa(t,e,i)})})}function Aa(t,e,i){let o=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(l=>!l.used),n=!1;if(!o.length){const l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(p=>!p.used),s=ai(e.homeTeam);if(s||l.length===0){const p=(e.aiTeam.DEF||[]).filter(x=>!x.used),c=(e.aiTeam.GK||[]).filter(x=>!x.used);o=s?p.length?p:c:[...p,...c],n=!0}}const r=un(o,"attack",e.difficulty);if(!r.length){uo(t,e,i);return}n&&r.forEach(l=>{l._line=l._line||l.job,l.note_a=Math.max(1,Number(l.note_a)||0)});const a=$i(r,e.modifiers.ai,e.formation);if(e.pendingAttack={...a,players:r,side:"ai"},r.forEach(l=>{l.used=!0}),e.log.push({text:`🤖 IA attaque : ${a.total} (${r.map(l=>l.name).join(", ")})`,type:"info"}),e.modifiers.ai={},[...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(l=>!l.used).length===0){if(r.length===1&&(r[0]._line==="GK"||r[0].job==="GK")&&ai(e.homeTeam)&&e.homeScore===e.aiScore){e.aiScore++,Oi(t,e,i,"ai",r[0]);return}e.aiScore++;const s={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:r.map(p=>ot(p)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};e.log.push(s),e.pendingAttack=null,Ce(t,e,i),dt(s.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Ot(t,e,i,"home-attack")});return}e.phase="defense",Ce(t,e,i)}function Ta(t,e,i){var s,p;const o=[...e.aiTeam.GK||[],...e.aiTeam.DEF||[],...e.aiTeam.MIL||[]],n=un(o,"defense",e.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(c=>(e.aiTeam[c]||[]).filter(x=>!x.used)).length){const c=((s=e.pendingAttack)==null?void 0:s.players)||[];if(c.length===1&&(c[0]._line==="GK"||c[0].job==="GK")&&e.homeScore===e.aiScore){e.homeScore++,Oi(t,e,i,"home",c[0]);return}e.homeScore++;const y={type:"duel",isGoal:!0,homeScored:!0,homePlayers:c.map(m=>ot(m)),homeTotal:((p=e.pendingAttack)==null?void 0:p.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};e.log.push(y),e.modifiers.ai={},e.pendingAttack=null,Ce(t,e,i),dt(y.homePlayers,e.homeScore,e.aiScore,!0,()=>{Ot(t,e,i,"ai-attack")});return}const a=n.length>0?ki(n,e.modifiers.ai,e.formation).total:0;n.forEach(c=>{c.used=!0});const d=xo(e.pendingAttack.total,a,e.modifiers.ai),l={type:"duel",title:"Attaque",homePlayers:(e.pendingAttack.players||[]).map(c=>ot(c)),aiPlayers:n.map(c=>ot(c)),homeTotal:e.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(d.shielded)l.text="🛡️ Bouclier IA !",e.log.push(l);else if(d.goal){e.homeScore++,l.isGoal=!0,l.homeScored=!0,l.text=`⚽ BUT ! (${e.pendingAttack.total} > ${a})`,e.log.push(l),e.modifiers.ai={},e.pendingAttack=null,Ce(t,e,i),dt(l.homePlayers,e.homeScore,e.aiScore,!0,()=>{Ot(t,e,i,"ai-attack")});return}else l.text=`🧤 IA défend (${a} ≥ ${e.pendingAttack.total})`,e.log.push(l);e.modifiers.ai={},e.pendingAttack=null,Ot(t,e,i,"ai-attack")}function Ot(t,e,i,o){if(e.round++,!Nn(t,e,i)){if(Ao(e)){Mt(t,e,i);return}if(o==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(r=>(e.homeTeam[r]||[]).some(a=>!a.used))){uo(t,e,i);return}e.phase="attack",Ce(t,e,i)}else{if(!["MIL","ATT","GK","DEF"].some(r=>(e.aiTeam[r]||[]).some(a=>!a.used))){uo(t,e,i);return}e.phase="ai-attack",Ce(t,e,i),setTimeout(()=>So(t,e,i),800)}}}function ai(t){return!["GK","DEF","MIL","ATT"].some(e=>(t[e]||[]).some(i=>!i.used))}function en(t){const e=(t.GK||[]).some(o=>!o.used),i=["DEF","MIL","ATT"].some(o=>(t[o]||[]).some(n=>!n.used));return e&&!i}function Nn(t,e,i){if(e.homeScore!==e.aiScore)return!1;if(en(e.homeTeam)&&ai(e.aiTeam)){const o=(e.homeTeam.GK||[]).find(n=>!n.used);return o?(o.used=!0,e.homeScore++,Oi(t,e,i,"home",o),!0):!1}if(en(e.aiTeam)&&ai(e.homeTeam)){const o=(e.aiTeam.GK||[]).find(n=>!n.used);return o?(o.used=!0,e.aiScore++,Oi(t,e,i,"ai",o),!0):!1}return!1}function Oi(t,e,i,o,n){e.log.push({type:"duel",isGoal:!0,homeScored:o==="home",homePlayers:o==="home"?[ot(n)]:[],aiPlayers:o==="ai"?[ot(n)]:[],text:`⚽ DERNIER CORNER — Le gardien ${o==="home"?"":"adverse "}marque !`});const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(r);const a=(d,l)=>new Promise(s=>{r.innerHTML=`<div style="font-size:32px;font-weight:900;color:${l};letter-spacing:2px;animation:lcFade 1.4s ease both">${d}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(s,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),r.remove(),e.pendingAttack=null,Ce(t,e,i),dt([ot(n)],e.homeScore,e.aiScore,o==="home",()=>{if(Ao(e)){Mt(t,e,i);return}Ot(t,e,i,o==="home"?"ai-attack":"home-attack")})))()}function Ao(t){const e=["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(n=>!n.used)),i=["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(n=>!n.used));return!e&&!i}function po(t,e){return!(["MIL","ATT"].some(n=>(t[n]||[]).some(r=>!r.used))||ai(e)||!["MIL","ATT"].some(n=>(e[n]||[]).some(r=>!r.used)))}function uo(t,e,i){if(!Nn(t,e,i)){if(Ao(e)){Mt(t,e,i);return}if(po(e.homeTeam,e.aiTeam)&&po(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),Mt(t,e,i);return}e.phase="attack",Ce(t,e,i)}}function to(t,e,i,o=null,n=null){var y,m;if(e.phase!=="attack"){Bt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(e.usedSubIds||(e.usedSubIds=[]),e.subsUsed>=e.maxSubs){Bt(`Maximum ${e.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const r=Object.entries(e.homeTeam).flatMap(([f,h])=>(h||[]).filter(_=>_.used).map(_=>({..._,_line:_._line||f}))),a=e.homeSubs.filter(f=>!e.usedSubIds.includes(f.cardId));if(!r.length){Bt("Aucun joueur utilisé à remplacer");return}if(!a.length){Bt("Aucun remplaçant disponible");return}let d=Math.max(0,r.findIndex(f=>f.cardId===n));const l=((y=r[d])==null?void 0:y._line)||((m=r[d])==null?void 0:m.job);let s=o?Math.max(0,a.findIndex(f=>f.cardId===o)):Math.max(0,a.findIndex(f=>f.job===l)),p=!1;const c=document.createElement("div");c.id="sub-overlay",c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function x(){var u,j,T,P,Y,X;const f=r[d],h=a[s],_=Math.min(130,Math.round((window.innerWidth-90)/2)),$=Math.round(_*1.35),g=M=>`background:rgba(255,255,255,0.12);border:none;color:${M?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${M?"default":"pointer"};flex-shrink:0`;c.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${e.subsUsed}/${e.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${g(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${h?jt({...h,used:!1,boost:0},_,$):"<div>—</div>"}</div>
        <button id="in-down" style="${g(s>=a.length-1)}" ${s>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${g(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${f?jt({...f,used:!1,boost:0},_,$):"<div>—</div>"}</div>
        <button id="out-down" style="${g(d>=r.length-1)}" ${d>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${r.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(u=c.querySelector("#sub-close"))==null||u.addEventListener("click",()=>c.remove()),(j=c.querySelector("#out-up"))==null||j.addEventListener("click",()=>{d>0&&(d--,x())}),(T=c.querySelector("#out-down"))==null||T.addEventListener("click",()=>{d<r.length-1&&(d++,x())}),(P=c.querySelector("#in-up"))==null||P.addEventListener("click",()=>{s>0&&(s--,x())}),(Y=c.querySelector("#in-down"))==null||Y.addEventListener("click",()=>{s<a.length-1&&(s++,x())});const z=(M,w,b,E)=>{const H=c.querySelector("#"+M);if(!H)return;let S=0;H.addEventListener("touchstart",G=>{S=G.touches[0].clientY},{passive:!0}),H.addEventListener("touchend",G=>{const de=G.changedTouches[0].clientY-S;if(Math.abs(de)<30)return;const I=w();de<0&&I<E-1?(b(I+1),x()):de>0&&I>0&&(b(I-1),x())},{passive:!0})};z("in-panel",()=>s,M=>s=M,a.length),z("out-panel",()=>d,M=>d=M,r.length),(X=c.querySelector("#sub-confirm"))==null||X.addEventListener("click",M=>{if(M.preventDefault(),M.stopPropagation(),p)return;p=!0;const w=r[d],b=a[s];if(!w||!b)return;let E=null,H=-1;for(const[G,de]of Object.entries(e.homeTeam)){const I=(de||[]).findIndex(L=>L.cardId===w.cardId);if(I!==-1){E=G,H=I;break}}if(H===-1||!E){Bt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),c.remove();return}const S={...b,_line:E,_col:w._col||0,used:!1,boost:0};e.homeTeam[E].splice(H,1,S),e.usedSubIds||(e.usedSubIds=[]),e.usedSubIds.push(b.cardId),e.subsUsed++,e.selected=[],e.log.push({type:"sub",subSide:"home",clubName:e.clubName,outPlayer:{name:w.name,firstname:w.firstname,note:Ht(w,E),portrait:Ut(w),job:w.job,country_code:w.country_code,rarity:w.rarity,clubName:w.clubName,clubLogo:w.clubLogo},inPlayer:{name:b.name,firstname:b.firstname,note:Ht(b,E),portrait:Ut(b),job:b.job,country_code:b.country_code,rarity:b.rarity,clubName:b.clubName,clubLogo:b.clubLogo},text:`🔄 ${b.firstname} ${b.name} remplace ${w.firstname} ${w.name}`}),c.remove(),wn(w,b,()=>Ce(t,e,i))})}document.body.appendChild(c),x()}function Ia(t,e,i,o,n){var x,y;const r=(o.gcDefs||[]).find(m=>m.name===e),a=Ze[e]||{icon:"⚡",desc:"Carte spéciale."},d=(r==null?void 0:r.name)||e,l=(r==null?void 0:r.effect)||a.desc,s=r!=null&&r.image_url?`/icons/${r.image_url}`:null,p=a.icon||"⚡",c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",c.innerHTML=`
    ${Qe(d,s,p,l,{width:190})}
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(c),(x=c.querySelector("#gc-back"))==null||x.addEventListener("click",()=>c.remove()),(y=c.querySelector("#gc-use"))==null||y.addEventListener("click",()=>{c.remove(),Ca(t,e,i,o,n)})}function Mi(t,e,i,o,n,r){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let d=[];function l(){var s,p;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${d.length}/${e}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${t.map(c=>{const x=c._line||c.job||"MIL",y=d.find(f=>f.cardId===c.cardId),m=qe({...c,_evolution_bonus:0},{width:90,showStad:!0,role:x,extraNote:c.boost||0,context:"match"});return`<div class="gc-pick-item" data-cid="${c.cardId}"
          style="position:relative;border-radius:8px;${y?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${c.used?"opacity:0.3;pointer-events:none":""}">
          ${m}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${d.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${d.length}/${e})
      </button>
    </div>`,(s=a.querySelector("#gc-picker-close"))==null||s.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(c=>{c.addEventListener("click",()=>{const x=c.dataset.cid,y=t.find(f=>f.cardId===x);if(!y)return;const m=d.findIndex(f=>f.cardId===x);m>-1?d.splice(m,1):d.length<e&&d.push(y),l()})}),(p=a.querySelector("#gc-picker-confirm"))==null||p.addEventListener("click",()=>{a.remove(),r(d)})}l(),document.body.appendChild(a)}const Ma={BOOST_STAT:({value:t=1,count:e=1,roles:i=[]},o,n,r)=>{const a=Object.entries(o.homeTeam).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,l])=>l.filter(s=>!s.used).map(s=>({...s,_line:d})));return a.length?(Mi(a,e,`Choisir ${e} joueur(s) à booster (+${t})`,n,o,d=>{d.forEach(l=>{const s=(o.homeTeam[l._line]||[]).find(p=>p.cardId===l.cardId);s&&(s.boost=(s.boost||0)+t,o.log.push({text:`⚡ +${t} sur ${s.name}`,type:"info"}))}),Ce(n,o,r)}),!0):(o.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ce(n,o,r),!0)},DEBUFF_STAT:({value:t=1,count:e=1,roles:i=[],target:o="ai"},n,r,a)=>{const d=o==="home"?n.homeTeam:n.aiTeam,l=o==="ai"?"adverse":"allié",s=Object.entries(d).filter(([p])=>!i.length||i.includes(p)).flatMap(([p,c])=>c.filter(x=>!x.used).map(x=>({...x,_line:p})));return s.length?(Mi(s,e,`Choisir ${e} joueur(s) ${l}(s) à débuffer (-${t})`,r,n,p=>{p.forEach(c=>{const y=((o==="home"?n.homeTeam:n.aiTeam)[c._line]||[]).find(m=>m.cardId===c.cardId);y&&(y.boost=(y.boost||0)-t,n.log.push({text:`🎯 -${t} sur ${y.name}${o==="ai"?" (IA)":""}`,type:"info"}))}),Ce(r,n,a)}),!0):(n.log.push({text:`🎯 Aucun joueur ${l} disponible`,type:"info"}),Ce(r,n,a),!0)},GRAY_PLAYER:({count:t=1,roles:e=[],target:i="ai"},o,n,r)=>{const a=i==="home"?o.homeTeam:o.aiTeam,d=i==="ai"?"adverse":"allié",l=Object.entries(a).filter(([s])=>!e.length||e.includes(s)).flatMap(([s,p])=>p.filter(c=>!c.used).map(c=>({...c,_line:s})));return l.length?(Mi(l,t,`Choisir ${t} joueur(s) ${d}(s) à exclure`,n,o,s=>{s.forEach(p=>{const x=((i==="home"?o.homeTeam:o.aiTeam)[p._line]||[]).find(y=>y.cardId===p.cardId);x&&(x.used=!0,o.log.push({text:`❌ ${x.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ce(n,o,r)}),!0):(o.log.push({text:`❌ Aucun joueur ${d} à exclure`,type:"info"}),Ce(n,o,r),!0)},REVIVE_PLAYER:({count:t=1,roles:e=[]},i,o,n)=>{const r=Object.entries(i.homeTeam).filter(([a])=>!e.length||e.includes(a)).flatMap(([a,d])=>d.filter(l=>l.used).map(l=>({...l,_line:a})));return r.length?(Mi(r,t,`Choisir ${t} joueur(s) à ressusciter`,o,i,a=>{a.forEach(d=>{const l=(i.homeTeam[d._line]||[]).find(s=>s.cardId===d.cardId);l&&(l.used=!1,i.log.push({text:`💫 ${l.name} ressuscité !`,type:"info"}))}),Ce(o,i,n)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ce(o,i,n),!0)},REMOVE_GOAL:({},t)=>(t.aiScore>0?(t.aiScore--,t.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):t.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},t)=>(t.homeScore===t.aiScore?(t.homeScore++,t.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):t.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:t=1},e)=>(e.maxSubs=(e.maxSubs||3)+t,e.log.push({text:`🔄 +${t} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Ca(t,e,i,o,n){o.usedGc.push(t);const r=o.gcDefs||[],a=r.find(l=>l.name===e)||r.find(l=>{var s;return((s=l.name)==null?void 0:s.toLowerCase().trim())===(e==null?void 0:e.toLowerCase().trim())});let d=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const l=Ma[a.effect_type];l?l(a.effect_params||{},o,i,n)||(d=!0):(n.toast(`Effet "${a.effect_type}" non implémenté`,"error"),d=!0)}else{switch(e){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const l=Object.entries(o.homeTeam).flatMap(([s,p])=>(p||[]).filter(c=>c.used).map(c=>({...c,_line:s})));l.length?(l[0].used=!1,o.log.push({text:`💫 ${l[0].name} ressuscité !`,type:"info"})):o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const l=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(s=>!s.used);if(l.length){const s=l.sort((p,c)=>Ht(c,"ATT")-Ht(p,"ATT"))[0];s.used=!0,o.log.push({text:`❄️ ${s.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}d=!0}v.from("cards").delete().eq("id",t).then(()=>{}),d&&Ce(i,o,n)}function ja(t,e,i){const o=Object.values(e.homeTeam).flat().filter(n=>!n.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${e.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${o.map(n=>`
        <div class="player-boost-opt" data-card-id="${n.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Zn[n.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Ht(n,n._line||n.job)}</div>
          <div style="flex:1"><b>${n.firstname} ${n.name}</b><div style="font-size:11px;color:#888">${n._line||n.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${e.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const d=(e.homeTeam[a]||[]).find(l=>l.cardId===r);if(d){d.boost=(d.boost||0)+e.boostCard.value,e.log.push({text:`⚡ Boost +${e.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}e.boostUsed=!0,i.closeModal(),Ce(t,e,i)})})}async function Mt(t,e,i){var x,y,m,f;ti(),it(),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),e.phase="finished";const{state:o}=i,n=e.homeScore>e.aiScore,r=e.homeScore===e.aiScore,a=n?"victoire":r?"nul":"defaite",d=e.isSolo&&((x=e.soloLevelConfig)!=null&&x.reward_credits)&&n?Number(e.soloLevelConfig.reward_credits):Xn(e.mode,a);if(e.isSolo&&n)try{const{data:h}=await v.from("user_solo_progress").select("unlocked_level").eq("user_id",o.profile.id).maybeSingle(),_=(h==null?void 0:h.unlocked_level)||1;e.soloLevel>=_&&await v.from("user_solo_progress").upsert({user_id:o.profile.id,unlocked_level:e.soloLevel+1,updated_at:new Date().toISOString()})}catch(h){console.warn("[Solo] Erreur mise à jour progression:",h.message)}const l="00000000-0000-0000-0000-000000000000";let s=null;if(e.isRankedAI)try{const{data:h}=await v.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",o.profile.id).single();if(h){const _=h.mmr??450,$=h.mmr_deviation??350,g=h.mmr_volatility??.06,z=n?1:r?.5:0,u=(h.placement_matches??0)<10,j=pn(_,$,g,_,350,z,u),T=r?null:n?o.profile.id:l;await v.rpc("update_mmr_after_ranked",{p_match_id:e.matchId,p_winner_id:T,p_home_id:o.profile.id,p_away_id:l,p_home_delta:j.delta,p_away_delta:0,p_home_new_rd:j.newRd,p_away_new_rd:350,p_home_new_vol:j.newSigma,p_away_new_vol:.06}),s=j.delta}}catch(h){console.warn("[RankedAI] Erreur mise à jour MMR:",h.message)}e.matchId&&await v.from("matches").update({status:"finished",home_score:e.homeScore,away_score:e.aiScore,winner_id:n?o.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",e.matchId);const p={credits:(o.profile.credits||0)+d,matches_played:(o.profile.matches_played||0)+1};n?p.wins=(o.profile.wins||0)+1:r?p.draws=(o.profile.draws||0)+1:p.losses=(o.profile.losses||0)+1,await v.from("users").update(p).eq("id",o.profile.id),await i.refreshProfile();const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",c.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:380px;width:100%">
      <div style="font-size:72px;margin-bottom:12px">${n?"🏆":r?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${n?"Victoire !":r?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${e.homeScore} – ${e.aiScore}</div>

      <div style="display:grid;grid-template-columns:${e.isRankedAI&&s!==null?"1fr 1fr":"1fr"};gap:10px;margin:16px 0">
        <div style="background:rgba(212,160,23,0.15);border:1px solid var(--yellow);border-radius:14px;padding:14px 10px">
          <div style="font-size:11px;opacity:.7;margin-bottom:4px">Récompense</div>
          <div style="font-size:20px;font-weight:900;color:var(--yellow);white-space:nowrap">+${d.toLocaleString("fr")} cr.</div>
        </div>
        ${e.isRankedAI&&s!==null?`
        <div style="background:${s>=0?"rgba(26,107,60,0.2)":"rgba(224,48,48,0.15)"};border:1px solid ${s>=0?"#1A6B3C":"#e03030"};border-radius:14px;padding:14px 10px">
          <div style="font-size:11px;opacity:.7;margin-bottom:4px">MMR</div>
          <div style="font-size:20px;font-weight:900;color:${s>=0?"#4caf50":"#ff6b6b"};white-space:nowrap">${s>=0?"↑ +":"↓ "}${s}</div>
        </div>`:""}
      </div>

      ${e.isSolo&&n?`<div style="background:rgba(26,107,60,0.2);border:1px solid #1A6B3C;border-radius:14px;padding:12px;margin-bottom:12px;font-size:14px;font-weight:700">🔓 Niveau ${e.soloLevel+1} débloqué !</div>`:""}

      <div style="display:flex;gap:10px;margin-top:8px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3);padding:12px 8px;font-size:14px;white-space:nowrap">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1;padding:12px 8px;font-size:14px;white-space:nowrap">${e.isRankedAI?"🔄 Nouveau match":"Rejouer"}</button>
      </div>
      ${e.isSolo&&n?`<button class="btn btn-primary" id="res-next-level" style="width:100%;margin-top:10px;padding:12px;font-size:14px;background:#D4A017;border-color:#D4A017">▶️ Niveau ${e.soloLevel+1}</button>`:""}
    </div>`,document.body.appendChild(c),(y=document.getElementById("res-home"))==null||y.addEventListener("click",()=>{c.remove(),ut(t),i.navigate("home")}),(m=document.getElementById("res-replay"))==null||m.addEventListener("click",async()=>{if(c.remove(),ut(t),e.isRankedAI){const{data:h}=await v.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",i.state.profile.id).single();wt(),i.navigate("match",{matchMode:"ranked",rankedData:{mmr:(h==null?void 0:h.mmr)??450,rd:(h==null?void 0:h.mmr_deviation)??350,sigma:(h==null?void 0:h.mmr_volatility)??.06,isPlacement:((h==null?void 0:h.placement_matches)??0)<10}});return}i.navigate("match",e.isSolo?{matchMode:e.mode,soloLevel:e.soloLevel}:{matchMode:e.mode})}),(f=document.getElementById("res-next-level"))==null||f.addEventListener("click",()=>{c.remove(),ut(t),i.navigate("match",{matchMode:"solo",soloLevel:e.soloLevel+1})})}function qa(t,e){e.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${si(t.aiTeam,t.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ba={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function Da(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}async function Pa(t,e){!t||!e||await Promise.all([tn(t,"win"),tn(e,"loss")])}async function tn(t,e){const{data:i}=await v.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",t).eq("card_type","player");if(!(i!=null&&i.length))return;const o=i.filter(n=>{var r,a;return((r=n.player)==null?void 0:r.rarity)==="pepite"||((a=n.player)==null?void 0:a.rarity)==="papyte"});o.length&&await Promise.all(o.map(n=>{const r=Ba[n.player.rarity],a=e==="win"?r.win:r.loss,d=n.player.note_min??1,l=n.player.note_max??10,s=Da(n.player),p=n.current_note??s,c=Math.min(l,Math.max(d,p+a));return v.from("cards").update({current_note:c}).eq("id",n.id)}))}const Zt=t=>vn(t);async function Vt(t,e,i,o,n={}){return On(t,e,i,o,n.myGC||[],n.gcDefs||[],n.isRanked||!1,n.rankedData||null,n.stadiumDef||null,n.onMatchEnd||null,n.mlLeagueId||null,n.mlMatchId||null)}async function Fa(t,e,i){const{data:o}=await v.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!o){e.toast("Match introuvable","error"),e.navigate("home");return}const n=o.home_id===e.state.user.id;let r=null,a=null;if(o.mode==="mini_league"){const{data:d}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();d&&(r=d.league_id,a=d.id)}return On(t,e,i,n,[],[],o.is_ranked||!1,null,null,null,r,a)}async function On(t,e,i,o,n=[],r=[],a=!1,d=null,l=null,s=null,p=null,c=null){const{state:x,navigate:y,toast:m}=e,f=o?"p1":"p2",h=o?"p2":"p1",_=(n||[]).map(k=>k.id),$=(n||[]).map(k=>({id:k.id,gc_type:k.gc_type,_gcDef:k._gcDef||null}));t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await v.from("matches").select("*").eq("id",i).single();if(!g){m("Match introuvable","error"),y("home");return}async function z(){var Ae,Me;console.log("[PvP] buildGameState match:",{id:g.id,home_deck_id:g.home_deck_id,away_deck_id:g.away_deck_id,mode:g.mode,is_ranked:g.is_ranked});const[{data:k,error:A},{data:B,error:O},{data:q},{data:N}]=await Promise.all([v.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),v.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),v.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),v.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",A==null?void 0:A.message,"p2:",O==null?void 0:O.message,"p1D:",(Ae=k==null?void 0:k.starters)==null?void 0:Ae.length,"p2D:",(Me=B==null?void 0:B.starters)==null?void 0:Me.length);const R=le=>{const De=Number(le.evolution_bonus)||0;return{cardId:le.card_id,position:le.position,id:le.id,firstname:le.firstname,name:le.surname_real,country_code:le.country_code,club_id:le.club_id,job:le.job,job2:le.job2,note_g:(Number(le.note_g)||0)+(le.job==="GK"||le.job2==="GK"&&Number(le.note_g)>0?De:0),note_d:(Number(le.note_d)||0)+(le.job==="DEF"||le.job2==="DEF"&&Number(le.note_d)>0?De:0),note_m:(Number(le.note_m)||0)+(le.job==="MIL"||le.job2==="MIL"&&Number(le.note_m)>0?De:0),note_a:(Number(le.note_a)||0)+(le.job==="ATT"||le.job2==="ATT"&&Number(le.note_a)>0?De:0),evolution_bonus:De,rarity:le.rarity,skin:le.skin,hair:le.hair,hair_length:le.hair_length,face:le.face||null,clubName:le.club_encoded_name||null,clubLogo:le.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},V=((k==null?void 0:k.starters)||[]).map(le=>R(le)),Z=((B==null?void 0:B.starters)||[]).map(le=>R(le)),ie=(k==null?void 0:k.formation)||"4-4-2",re=(B==null?void 0:B.formation)||"4-4-2";let se=no(V,ie),oe=no(Z,re);const ce=((k==null?void 0:k.subs)||[]).map(le=>R(le)),be=((B==null?void 0:B.subs)||[]).map(le=>R(le)),Se=(k==null?void 0:k.stadium_def)||(o?l:null),ve=(B==null?void 0:B.stadium_def)||(o?null:l);return Se&&(se=Di(se,Se),Pi(ce,Se)),ve&&(oe=Di(oe,ve),Pi(be,ve)),{p1Team:se,p2Team:oe,p1Subs:ce,p2Subs:be,p1Formation:ie,p2Formation:re,p1Name:(q==null?void 0:q.club_name)||(q==null?void 0:q.pseudo)||"Joueur 1",p2Name:(N==null?void 0:N.club_name)||(N==null?void 0:N.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:o?_:[],gc_p2:o?[]:_,gcCardsFull_p1:o?$:[],gcCardsFull_p2:o?[]:$,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:r||[],lastActionAt:new Date().toISOString()}}let u=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(console.log("[PvP] init - amIHome:",o,"gameState exists:",!!u,"match.status:",g.status,"home_id:",g.home_id,"away_id:",g.away_id,"myId:",x.profile.id),!u)if(o){u=await z(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((u==null?void 0:u.p1Team)||{}));const{data:k}=await v.from("matches").select("game_state").eq("id",i).single();!(k!=null&&k.game_state)||!Object.keys(k.game_state).length?await v.from("matches").update({game_state:u,turn_user_id:g.home_id}).eq("id",i):u=k.game_state}else{t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let k=0;k<30&&!u;k++){await new Promise(B=>setTimeout(B,400));const{data:A}=await v.from("matches").select("game_state").eq("id",i).single();A!=null&&A.game_state&&Object.keys(A.game_state).length&&(u=A.game_state),k%5===0&&console.log("[PvP] away - poll",k,"game_state:",!!(A!=null&&A.game_state))}if(!u){m("Erreur de synchronisation","error"),y("home");return}u.gc_p2=_,u.gcCardsFull_p2=$,await v.from("matches").update({game_state:u}).eq("id",i)}let j=!1,T=null,P=!1;const Y=new Set,X=new Set;async function M(k){var re,se;ti();try{v.removeChannel(w)}catch{}const A=u[f+"Score"]||0,B=u[h+"Score"]||0;let O,q;k.winner_id?(O=k.winner_id===x.profile.id,q=!1):k.forfeit?(O=A>B,q=!1):(q=A===B,O=A>B);let N="";if(a&&o)try{const{data:oe}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",g.home_id).single(),{data:ce}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",g.away_id).single();if(oe&&ce){const be=O?1:q?.5:0,Se=1-be,ve=oe.placement_matches<10,Ae=ce.placement_matches<10,Me=computeGlicko2(oe.mmr,oe.mmr_deviation,oe.mmr_volatility,ce.mmr,ce.mmr_deviation,be===1?1:be===0?0:.5,ve),le=computeGlicko2(ce.mmr,ce.mmr_deviation,ce.mmr_volatility,oe.mmr,oe.mmr_deviation,Se===1?1:Se===0?0:.5,Ae);await v.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:q?null:O?g.home_id:g.away_id,p_home_id:g.home_id,p_away_id:g.away_id,p_home_delta:Me.delta,p_away_delta:le.delta,p_home_new_rd:Me.newRd,p_away_new_rd:le.newRd,p_home_new_vol:Me.newSigma,p_away_new_vol:le.newSigma});const De=Me.delta,Je=Me.newMmr,Pe=getTier(Je),nt=De>=0?"+":"",et=De>=0?"#4caf50":"#ff6b6b",mt=getTier(oe.mmr);N=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Pe.id!==mt.id?`<div style="font-size:20px;font-weight:900;color:${Pe.color}">
                    ${Je>oe.mmr?"📈":"📉"} ${mt.emoji} ${mt.label} → ${Pe.emoji} ${Pe.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Je>oe.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${De>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Pe.color}">${Pe.emoji} ${Pe.label}</div>`}
              ${ve?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${oe.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(oe){console.error("[Ranked] MMR update error:",oe)}(re=document.getElementById("pvp-end-overlay"))==null||re.remove();const R=document.createElement("div");R.id="pvp-end-overlay",R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const V=q?"🤝":O?"🏆":"😞",Z=q?"MATCH NUL":O?"VICTOIRE !":"DÉFAITE",ie=q?"#fff":O?"#FFD700":"#ff6b6b";R.innerHTML=`
      <div style="font-size:64px">${V}</div>
      <div style="font-size:26px;font-weight:900;color:${ie}">${Z}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${u[f+"Name"]} ${A} – ${B} ${u[h+"Name"]}</div>
      ${k.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${O?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${N}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${p?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(R),(se=R.querySelector("#pvp-end-home"))==null||se.addEventListener("click",()=>{R.remove(),ut(t),p?y("mini-league",{openLeagueId:p}):y(a?"ranked":"home")})}const w=v.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},k=>{var B;const A=k.new;try{if(A.status==="finished"||A.forfeit){if(j)return;j=!0,T&&(clearInterval(T),T=null),it(),A.game_state&&(u=A.game_state),M(A);return}if(A.game_state){const O=u;u=A.game_state;const q=u._lastGC;if(q&&q.seq&&!X.has(q.seq)&&(X.add(q.seq),q.by!==f)){pe(q.type,q.by,()=>L());return}const N=O[f+"Score"]||0,R=O[h+"Score"]||0,V=u[f+"Score"]||0,Z=u[h+"Score"]||0,ie=V>N,re=Z>R;if((ie||re)&&!Y.has(u.round)){Y.add(u.round);const se=[...u.log||[]].reverse().find(be=>be.isGoal),oe=((se==null?void 0:se.homePlayers)||[]).map(be=>({name:be.name,note:be.note,portrait:be.portrait,job:be.job}));!!((B=se==null?void 0:se.text)!=null&&B.includes("DERNIER CORNER"))?K().then(()=>{dt(oe,V,Z,ie,()=>L())}):dt(oe,V,Z,ie,()=>L());return}L()}}catch(O){console.error("[PvP] crash:",O)}}).subscribe();async function b(k){Object.assign(u,k),u.lastActionAt=new Date().toISOString();const{error:A}=await v.from("matches").update({game_state:u}).eq("id",i);A&&m("Erreur de synchronisation","error");try{L()}catch(B){console.error("[PvP] renderPvpScreen crash:",B)}}async function E(){if(j)return;j=!0,ti(),it(),T&&(clearInterval(T),T=null);const k=o?g.away_id:g.home_id,A=o?"p2":"p1",B=o?"p1":"p2",O={...u,[A+"Score"]:3,[B+"Score"]:0,phase:"finished"},q=O.p1Score||0,N=O.p2Score||0;try{await v.from("matches").update({game_state:O}).eq("id",i);const{data:R,error:V}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:k,p_home_score:q,p_away_score:N,p_forfeit:!0});if(V&&console.error("[PvP] finish_pvp_match (forfeit):",V),p)try{await v.rpc("check_and_finish_mini_league",{p_league_id:p})}catch(Z){console.error("[PvP] check_and_finish_mini_league (forfeit):",Z)}try{const{data:Z}=await v.rpc("apply_match_rewards",{p_match_id:i});Z!=null&&Z.success&&!(Z!=null&&Z.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(Z){console.error("[PvP] apply_match_rewards (forfeit):",Z)}}catch{}try{v.removeChannel(w)}catch{}setTimeout(()=>{ut(t),p?y("mini-league",{openLeagueId:p}):y("home")},800)}const H={BOOST_STAT:({value:k=1,count:A=1,roles:B=[]},O,q)=>{const N=O[f+"Team"],R=Object.entries(N).filter(([V])=>!B.length||B.includes(V)).flatMap(([V,Z])=>Z.filter(ie=>!ie.used).map(ie=>({...ie,_line:V})));if(!R.length){O.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),q(O);return}S(R,A,`Choisir ${A} joueur(s) à booster (+${k})`,V=>{V.forEach(Z=>{const ie=(N[Z._line]||[]).find(re=>re.cardId===Z.cardId);ie&&(ie.boost=(ie.boost||0)+k,O.log.push({text:`⚡ +${k} sur ${ie.name}`,type:"info"}))}),O[f+"Team"]=N,q(O)})},DEBUFF_STAT:({value:k=1,count:A=1,roles:B=[],target:O="ai"},q,N)=>{const R=O==="home"?f:h,V=q[R+"Team"],Z=O==="home"?"allié":"adverse",ie=Object.entries(V).filter(([re])=>!B.length||B.includes(re)).flatMap(([re,se])=>se.map(oe=>({...oe,_line:re})));if(!ie.length){q.log.push({text:`🎯 Aucun joueur ${Z}`,type:"info"}),N(q);return}S(ie,A,`Choisir ${A} joueur(s) ${Z}(s) (-${k})`,re=>{re.forEach(se=>{const oe=(V[se._line]||[]).find(ce=>ce.cardId===se.cardId);oe&&(oe.boost=(oe.boost||0)-k,q.log.push({text:`🎯 -${k} sur ${oe.name}`,type:"info"}))}),q[R+"Team"]=V,N(q)})},GRAY_PLAYER:({count:k=1,roles:A=[],target:B="ai"},O,q)=>{const N=B==="home"?f:h,R=O[N+"Team"],V=B==="home"?"allié":"adverse",Z=Object.entries(R).filter(([ie])=>!A.length||A.includes(ie)).flatMap(([ie,re])=>re.filter(se=>!se.used).map(se=>({...se,_line:ie})));if(!Z.length){O.log.push({text:`❌ Aucun joueur ${V}`,type:"info"}),q(O);return}S(Z,k,`Choisir ${k} joueur(s) ${V}(s) à exclure`,ie=>{const re="usedCardIds_"+N,se=new Set(O[re]||[]);ie.forEach(oe=>{const ce=(R[oe._line]||[]).find(be=>be.cardId===oe.cardId);ce&&(ce.used=!0,se.add(oe.cardId),O.log.push({text:`❌ ${ce.name} exclu !`,type:"info"}))}),O[re]=[...se],O[N+"Team"]=R,q(O)})},REVIVE_PLAYER:({count:k=1,roles:A=[]},B,O)=>{const q=B[f+"Team"],N=Object.entries(q).filter(([R])=>!A.length||A.includes(R)).flatMap(([R,V])=>V.filter(Z=>Z.used).map(Z=>({...Z,_line:R})));if(!N.length){B.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),O(B);return}S(N,k,`Choisir ${k} joueur(s) à ressusciter`,R=>{R.forEach(V=>{const Z=(q[V._line]||[]).find(ie=>ie.cardId===V.cardId);Z&&(Z.used=!1,B.log.push({text:`💫 ${Z.name} ressuscité !`,type:"info"}))}),B[f+"Team"]=q,O(B)})},REMOVE_GOAL:({},k,A)=>{const B=h+"Score";k[B]>0?(k[B]--,k.log.push({text:"🚫 Dernier but annulé !",type:"info"})):k.log.push({text:"🚫 Aucun but à annuler",type:"info"}),A(k)},ADD_GOAL_DRAW:({},k,A)=>{k[f+"Score"]===k[h+"Score"]?(k[f+"Score"]++,k.log.push({text:"🎯 But bonus !",type:"info"})):k.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),A(k)},ADD_SUB:({value:k=1},A,B)=>{A.maxSubs=(A.maxSubs||3)+k,A.log.push({text:`🔄 +${k} remplacement(s)`,type:"info"}),B(A)},CUSTOM:({},k,A)=>A(k)};function S(k,A,B,O){const q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let N=[];function R(){var Z,ie;const V=k.map(re=>{const se=re._line||re.job||"MIL",oe=N.find(be=>be.cardId===re.cardId),ce=qe({...re,_evolution_bonus:0},{width:90,showStad:!0,role:se,extraNote:re.boost||0,context:"match"});return`<div class="pp-item" data-cid="${re.cardId}"
          style="position:relative;border-radius:8px;${oe?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${re.used?"opacity:0.3;pointer-events:none":""}">
          ${ce}
        </div>`}).join("");q.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${B}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${N.length}/${A}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${V}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${N.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${N.length}/${A})
          </button>
        </div>`,(Z=q.querySelector("#pp-close"))==null||Z.addEventListener("click",()=>q.remove()),q.querySelectorAll(".pp-item").forEach(re=>{re.addEventListener("click",()=>{const se=re.dataset.cid,oe=k.find(be=>be.cardId===se),ce=N.findIndex(be=>be.cardId===se);oe&&(ce>-1?N.splice(ce,1):N.length<A&&N.push(oe),R())})}),(ie=q.querySelector("#pp-confirm"))==null||ie.addEventListener("click",()=>{q.remove(),O(N)})}R(),document.body.appendChild(q)}async function G(k,A){const O=(u["gcCardsFull_"+f]||[]).find(V=>V.id===k),q=(O==null?void 0:O._gcDef)||(u.gcDefs||[]).find(V=>{var Z;return V.name===A||((Z=V.name)==null?void 0:Z.toLowerCase().trim())===(A==null?void 0:A.toLowerCase().trim())}),N=[...u["usedGc_"+f]||[],k],R={type:A,by:f,seq:(u._gcAnimSeq||0)+1};X.add(R.seq),pe(A,f,async()=>{if(q!=null&&q.effect_type&&q.effect_type!=="CUSTOM"){const Z=H[q.effect_type];if(Z){const ie={...u};Z(q.effect_params||{},ie,async re=>{re["usedGc_"+f]=N,re._lastGC=R,re._gcAnimSeq=R.seq,await b(re)});return}}const V={...u};switch(A){case"Remplacement+":V.maxSubs=(V.maxSubs||3)+1,V.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const Z=h+"Score";V[Z]>0&&(V[Z]--,V.log.push({text:"🚫 But annulé",type:"info"}));break}}V["usedGc_"+f]=N,V._lastGC=R,V._gcAnimSeq=R.seq,await b(V)})}function de(k,A){const B="usedCardIds_"+k,O=new Set(u[B]||[]);A.forEach(q=>O.add(q)),u[B]=[...O]}function I(){for(const k of["p1","p2"]){const A=new Set(u["usedCardIds_"+k]||[]),B=u[k+"Team"];if(B)for(const O of["GK","DEF","MIL","ATT"])(B[O]||[]).forEach(q=>{q.used=A.has(q.cardId)})}}function L(){var Mo,Co,jo,qo,Bo,Do;if(u.phase==="reveal")return Q();if(u.phase==="midfield")return te();if(u.phase==="finished")return ke();const k=u[f+"Team"],A=u[h+"Team"];I();const B=u[f+"Score"],O=u[h+"Score"],q=u[f+"Name"],N=u[h+"Name"],R=u.phase===f+"-attack",V=u.phase===f+"-defense",Z=Array.isArray(u["selected_"+f])?u["selected_"+f]:[],ie=Z.map(ae=>ae.cardId),re=window.innerWidth>=700,se=u[f+"Subs"]||[],oe=u["usedSubIds_"+f]||[],ce=se.filter(ae=>!oe.includes(ae.cardId)),be=u["gcCardsFull_"+f]||[],Se=u["usedGc_"+f]||[],ve=be.filter(ae=>!Se.includes(ae.id)),Ae=u.boostOwner===f&&!u.boostUsed,Me=[...k.MIL||[],...k.ATT||[]].filter(ae=>!ae.used),le=[...A.MIL||[],...A.ATT||[]].filter(ae=>!ae.used),De=!me(A),Je=Me.length===0&&le.length===0&&!De,Pe=(k.DEF||[]).filter(ae=>!ae.used),nt=(k.GK||[]).filter(ae=>!ae.used);let et=[];R&&Me.length===0&&(De?(et=Pe.map(ae=>ae.cardId),Pe.length===0&&(et=et.concat(nt.map(ae=>ae.cardId)))):Je&&(et=[...Pe,...nt].map(ae=>ae.cardId)));function mt(ae,Le,Re){var Ne,$t;const je=ae._gcDef,Jt=(je==null?void 0:je.name)||ae.gc_type,xt=(je==null?void 0:je.effect)||((Ne=Ze[ae.gc_type])==null?void 0:Ne.desc)||"",Ye=je!=null&&je.image_url?`/icons/${je.image_url}`:null,Xe=(($t=Ze[ae.gc_type])==null?void 0:$t.icon)||"⚡";return`<div class="pvp-gc-mini" data-gc-id="${ae.id}" data-gc-type="${ae.gc_type}" style="flex-shrink:0;cursor:pointer">
        ${Qe(Jt,Ye,Xe,xt,{width:Le})}
      </div>`}function ci(ae,Le){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ae}px;height:${Le}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Le*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(Le*.2)}px">⚡</div>
        <div style="font-size:${Math.round(Le*.09)}px;color:#000;font-weight:900">+${u.boostValue}</div>
      </div>`}const Ve=(ae,Le)=>Le?ci(95,162):mt(ae,95),rt=(ae,Le)=>Le?ci(68,116):mt(ae,68),tt=re?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",_t=R?ue(f)?`<button id="pvp-action" style="${tt};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${Z.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${tt};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:V?`<button id="pvp-action" style="${tt};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${Z.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${N}</div>`,gt=R&&!ue(f)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':R||V?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${Z.length}/3 sélectionné(s)</div>`:"",Wt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${re?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ce.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ce.map(ae=>`<div class="pvp-sub-btn" data-sub-id="${ae.cardId}" style="cursor:pointer;flex-shrink:0">${jt(ae,re?76:44,re?100:58)}</div>`).join("")}
    </div>`,kt=R?"attack":V?"defense":"idle",qt=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${_i(k,u[f+"Formation"],kt,ie,re?1300:Nt(),re?600:ii(),et)}
      </div>
    </div>`,bt=u[f+"Team"],Yn=(()=>{var Le,Re,je,Jt,xt;if(V&&((Le=u.pendingAttack)!=null&&Le.players)){const Ye=u.pendingAttack;let Xe="";if(Z.length>0){const Ne=Z.map(at=>{const pi=(bt[at._role]||[]).find(Ji=>Ji.cardId===at.cardId)||at,ui=bt[at._role]||[],Si=ui.findIndex(Ji=>Ji.cardId===at.cardId),Yi=Pt(ui.length),fi=Si>=0?Yi[Si]:pi._col??1;return{...pi,_line:at._role,_col:fi}}),$t=ki(Ne,((Re=u.modifiers)==null?void 0:Re[f])||{},u[f+"Formation"]);Xe=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${Z.length}/3)</div>
            <div style="display:flex;justify-content:center">${lt(Ne.map(at=>({...at,used:!1})),"#3a7bd5",$t.total,"defense",u[f+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${N} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${lt((Ye.players||[]).map(Ne=>({...Ne,used:!1})),"#ff6b6b",Ye.total,"attack",u[h+"Formation"])}</div>
          ${Xe}
        </div>`}if(R&&((je=u.pendingAttack)!=null&&je.players)){const Ye=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${lt((Ye.players||[]).map(Xe=>({...Xe,used:!1})),"#00ff88",Ye.total,"attack",u[f+"Formation"])}</div>
        </div>`}if(R&&!((Jt=u.pendingAttack)!=null&&Jt.players)&&Z.length>0){const Ye=Z.map(Ne=>{const $t=(bt[Ne._role]||[]).find(fi=>fi.cardId===Ne.cardId)||Ne,at=["GK","DEF"].includes(Ne._role),pi=bt[Ne._role]||[],ui=pi.findIndex(fi=>fi.cardId===Ne.cardId),Si=Pt(pi.length),Yi=ui>=0?Si[ui]:$t._col??1;return{...$t,_line:Ne._role,_col:Yi,...at?{note_a:Math.max(1,Number($t.note_a)||0)}:{}}}),Xe=$i(Ye,((xt=u.modifiers)==null?void 0:xt[f])||{},u[f+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${Z.length}/3)</div>
          <div style="display:flex;justify-content:center">${lt(Ye.map(Ne=>({...Ne,used:!1})),"#FFD700",Xe.total,"attack",u[f+"Formation"])}</div>
        </div>`}const ae=(u.log||[]).slice(-1)[0];return ae?'<div style="padding:2px 4px">'+hn(ae)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),Io=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${q}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${B} – ${O}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${N}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Yn}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(u.log||[]).length})
      </button>`;Ft(t),t.style.overflow="hidden",re?t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Io}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Wt}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${qt}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${_t}${gt}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ve.map(ae=>Ve(ae,!1)).join("")}
            ${Ae?Ve(null,!0):""}
          </div>
        </div>
      </div>`:t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Io}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${_i(k,u[f+"Formation"],kt,ie,Nt(),ii(),et)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ve.map(ae=>rt(ae,!1)).join("")}
            ${Ae?rt(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${R&&ce.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${R&&ce.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${R&&ce.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${R&&ce.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${ce.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(u["usedSubIds_"+f]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(u["usedSubIds_"+f]||[]).length}/${u.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${_t}${gt}</div>
        </div>
      </div>`;function Yt(){const ae=t.querySelector(".match-screen");if(!ae)return;const Le=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ae.style.height=Le+"px",ae.style.minHeight=Le+"px",ae.style.maxHeight=Le+"px",ae.style.overflow="hidden";const Re=t.querySelector("#mobile-action-bar"),je=t.querySelector("#mobile-play-area");Re&&je&&(je.style.paddingBottom=Re.offsetHeight+"px")}if(Yt(),setTimeout(Yt,120),setTimeout(Yt,400),P||(P=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Yt),window.visualViewport.addEventListener("scroll",Yt)),window.addEventListener("resize",Yt)),function(){const Le=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!Le)return;const Re=Le.closest("#match-terrain-wrap");Re&&(Re.style.cssText="position:relative;width:100%;height:100%;padding:0"),Le.removeAttribute("width"),Le.removeAttribute("height"),Le.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Le.setAttribute("preserveAspectRatio","xMidYMid meet")}(),u._pvpResizeBound||(u._pvpResizeBound=!0,window.addEventListener("resize",()=>{const ae=t.querySelector(".terrain-wrapper svg");if(ae){const Le=ae.closest("#match-terrain-wrap");Le&&(Le.style.cssText="position:relative;width:100%;height:100%;padding:0"),ae.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t.querySelectorAll(".match-slot-hit").forEach(ae=>{ae.addEventListener("click",()=>{if(!R&&!V)return;const Le=ae.dataset.cardId,Re=ae.dataset.role,je=(k[Re]||[]).find(Xe=>Xe.cardId===Le);if(!je||je.used)return;const Jt=et.includes(Le);if(R&&!["MIL","ATT"].includes(Re)&&!Jt)return;Array.isArray(u["selected_"+f])||(u["selected_"+f]=[]);const xt=u["selected_"+f],Ye=xt.findIndex(Xe=>Xe.cardId===Le);Ye>-1?xt.splice(Ye,1):xt.length<3&&xt.push({...je,_role:Re}),L()})}),t.querySelectorAll(".match-used-hit").forEach(ae=>{ae.addEventListener("click",()=>Be(ae.dataset.cardId))}),t.querySelectorAll(".pvp-sub-btn").forEach(ae=>{ae.addEventListener("click",()=>Be())}),(Mo=t.querySelector("#pvp-sub-open"))==null||Mo.addEventListener("click",()=>Be()),t.querySelectorAll(".pvp-gc-mini").forEach(ae=>{R?ae.addEventListener("click",()=>he(ae.dataset.gcId,ae.dataset.gcType)):(ae.style.opacity="0.35",ae.style.cursor="default",ae.addEventListener("click",()=>Bt("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(Co=t.querySelector("#pvp-boost-card"))==null||Co.addEventListener("click",()=>fe()),(jo=t.querySelector("#pvp-action"))==null||jo.addEventListener("click",ae=>{R?ae.currentTarget.dataset.pass==="1"||!ue(f)?Ee():J():V&&F()}),(qo=t.querySelector("#pvp-quit"))==null||qo.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&E()}),(Bo=t.querySelector("#pvp-view-opp"))==null||Bo.addEventListener("click",()=>_e()),(Do=t.querySelector("#pvp-toggle-history"))==null||Do.addEventListener("click",()=>ye()),T&&(clearInterval(T),T=null),it(),(R||V)&&!j){let ae=30,Le=!1;const Re=()=>document.getElementById("pvp-timer"),je=()=>{Re()&&(Re().textContent=ae+"s",Re().style.color=Le?"#ff4444":"#fff")};je(),T=setInterval(()=>{ae--,ae<0?Le?(clearInterval(T),T=null,it(),R&&!ue(f)?Ee():E()):(Le=!0,ae=15,je(),gn("/sounds/timer-urgent.mp3",.6)):je()},1e3)}}function Q(){Ft(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${dr(u[h+"Team"],u[h+"Formation"],null,u[h+"Name"]||"Adversaire")}
    </div>`;const k=t.querySelector("svg"),A=k==null?void 0:k.closest("#match-terrain-wrap");A&&(A.style.cssText="position:relative;width:100%;height:100%;padding:0"),k&&(k.removeAttribute("width"),k.removeAttribute("height"),k.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",k.setAttribute("preserveAspectRatio","xMidYMid meet")),f==="p1"&&setTimeout(async()=>{await b({phase:"midfield"})},5e3)}let U=!1;function te(){if(U)return;const k=u[f+"Team"].MIL||[],A=u[h+"Team"].MIL||[],B=At(k)+Tt(k),O=At(A)+Tt(A),q=B>=O;Ft(t),t.innerHTML=`
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
      ${ri(k,u[f+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${ri(A,u[h+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const N=(ce,be)=>t.querySelectorAll(ce).forEach((Se,ve)=>{setTimeout(()=>{Se.style.opacity="1",Se.style.transform="translateY(0) scale(1)"},be+ve*90)});N(".duel-card-me",150),N(".duel-card-opp",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((ce,be)=>setTimeout(()=>{ce.style.opacity="1"},be*70)),900),setTimeout(()=>{const ce=t.querySelector("#pvp-vs");ce&&(ce.style.opacity="1",ce.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(be=>be.style.opacity="1")},1250);function R(ce,be,Se){const ve=document.getElementById(ce);if(!ve)return;const Ae=performance.now(),Me=le=>{const De=Math.min(1,(le-Ae)/Se);ve.textContent=Math.round(be*(1-Math.pow(1-De,3))),De<1?requestAnimationFrame(Me):ve.textContent=be};requestAnimationFrame(Me)}setTimeout(()=>{R("pvp-score-me",B,800),R("pvp-score-opp",O,800)},1500);const V=u.p1Team.MIL||[],Z=u.p2Team.MIL||[],ie=At(V)+Tt(V),re=At(Z)+Tt(Z),se=ie>=re?"p1":"p2";let oe=u.boostValue;oe==null&&(oe=cn(),u.boostValue=oe,u.boostOwner=se,u.boostUsed=!1),U=!0,setTimeout(()=>{const ce=t.querySelector("#duel-row-"+(q?"me":"opp")),be=t.querySelector("#duel-row-"+(q?"opp":"me")),Se=document.getElementById("pvp-score-me"),ve=document.getElementById("pvp-score-opp"),Ae=q?Se:ve,Me=q?ve:Se;Ae&&(Ae.style.fontSize="80px",Ae.style.color=q?"#FFD700":"#ff6b6b",Ae.style.animation="duelPulse .5s ease"+(q?",duelGlow 1.5s ease infinite .5s":"")),Me&&(Me.style.opacity="0.25"),setTimeout(()=>{ce&&(ce.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ce.style.zIndex="5"),setTimeout(()=>{const le=document.getElementById("duel-shock");le&&(le.style.animation="shockwave .5s ease-out forwards"),be&&(be.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Pe;const le=document.getElementById("pvp-duel-finale");if(!le)return;const De=u.boostOwner===f?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+oe+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Je=f==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;le.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(q?"⚽ "+u[f+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+u[h+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+De+Je,le.style.transition="opacity .45s ease",le.style.opacity="1",le.style.pointerEvents="auto",(Pe=document.getElementById("pvp-start-match"))==null||Pe.addEventListener("click",async()=>{const nt=se;await b({phase:nt+"-attack",attacker:nt,round:1,boostValue:oe,boostUsed:!1,boostOwner:nt})})},600)},700)},2800)}function pe(k,A,B){var be,Se;const O=(u.gcDefs||[]).find(ve=>{var Ae;return ve.name===k||((Ae=ve.name)==null?void 0:Ae.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),q={purple:"#b06ce0",light_blue:"#00d4ef"}[O==null?void 0:O.color]||"#b06ce0",N=(O==null?void 0:O.name)||k,R=(O==null?void 0:O.effect)||((be=Ze[k])==null?void 0:be.desc)||"",V=O!=null&&O.image_url?`/icons/${O.image_url}`:null,Z=((Se=Ze[k])==null?void 0:Se.icon)||"⚡",re=A===f?"Vous":u[A+"Name"]||"Adversaire",se=document.createElement("div");se.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",se.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{filter:drop-shadow(0 0 20px ${q}66)}50%{filter:drop-shadow(0 0 40px ${q}cc)}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${q};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${re} joue une carte</div>
      <div style="animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        ${Qe(N,V,Z,R,{width:200})}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(se);let oe=!1;const ce=()=>{oe||(oe=!0,se.remove(),setTimeout(()=>B&&B(),50))};se.addEventListener("click",ce),setTimeout(ce,3e3)}function he(k,A){var re,se,oe,ce;const O=(u["gcCardsFull_"+f]||[]).find(be=>be.id===k),q=O==null?void 0:O._gcDef,N=(q==null?void 0:q.name)||A,R=(q==null?void 0:q.effect)||((re=Ze[A])==null?void 0:re.desc)||"Carte spéciale.",V=q!=null&&q.image_url?`/icons/${q.image_url}`:null,Z=((se=Ze[A])==null?void 0:se.icon)||"⚡",ie=document.createElement("div");ie.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",ie.innerHTML=`
      ${Qe(N,V,Z,R,{width:190})}
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(ie),(oe=ie.querySelector("#pvp-gc-back"))==null||oe.addEventListener("click",()=>ie.remove()),(ce=ie.querySelector("#pvp-gc-use"))==null||ce.addEventListener("click",()=>{ie.remove(),G(k,A)})}function fe(){var O;const k=u[f+"Team"],A=Object.entries(k).flatMap(([q,N])=>(N||[]).filter(R=>!R.used).map(R=>({...R,_line:q})));if(!A.length)return;const B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",B.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${u.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${A.map(q=>{const N={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[q._line]||"#555",R=Ht(q,q._line)+(q.boost||0);return`<div class="bp-item" data-cid="${q.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${N};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${q.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${R}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(B),(O=B.querySelector("#bp-close"))==null||O.addEventListener("click",()=>B.remove()),B.querySelectorAll(".bp-item").forEach(q=>{q.addEventListener("click",async()=>{const N=q.dataset.cid,R=A.find(Z=>Z.cardId===N);if(!R)return;const V=(k[R._line]||[]).find(Z=>Z.cardId===N);V&&(V.boost=(V.boost||0)+u.boostValue),B.remove(),await b({[f+"Team"]:k,boostUsed:!0})})})}function Be(k=null){var ce,be;if(!(u.phase===f+"-attack")){m("Remplacement uniquement avant votre attaque","warning");return}const B=u[f+"Team"],O=u["usedSubIds_"+f]||[],q=u.maxSubs||3;if(O.length>=q){m(`Maximum ${q} remplacements atteint`,"warning");return}const N=Object.entries(B).flatMap(([Se,ve])=>(ve||[]).filter(Ae=>Ae.used).map(Ae=>({...Ae,_line:Se}))),R=(u[f+"Subs"]||[]).filter(Se=>!O.includes(Se.cardId));if(!N.length){m("Aucun joueur utilisé à remplacer","warning");return}if(!R.length){m("Aucun remplaçant disponible","warning");return}let V=Math.max(0,N.findIndex(Se=>Se.cardId===k));const Z=((ce=N[V])==null?void 0:ce._line)||((be=N[V])==null?void 0:be.job);let ie=Math.max(0,R.findIndex(Se=>Se.job===Z)),re=!1;const se=document.createElement("div");se.id="pvp-sub-overlay",se.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function oe(){var Je,Pe,nt,et,mt,ci;const Se=N[V],ve=R[ie],Ae=Math.min(130,Math.round((window.innerWidth-90)/2)),Me=Math.round(Ae*1.35),le=Ve=>`background:rgba(255,255,255,0.12);border:none;color:${Ve?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ve?"default":"pointer"};flex-shrink:0`;se.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${O.length}/${q})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${le(ie===0)}" ${ie===0?"disabled":""}>▲</button>
          <div>${ve?jt({...ve,used:!1,boost:0},Ae,Me):"<div>—</div>"}</div>
          <button id="pin-down" style="${le(ie>=R.length-1)}" ${ie>=R.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${ie+1}/${R.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${le(V===0)}" ${V===0?"disabled":""}>▲</button>
          <div>${Se?jt({...Se,used:!1,boost:0},Ae,Me):"<div>—</div>"}</div>
          <button id="pout-down" style="${le(V>=N.length-1)}" ${V>=N.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${V+1}/${N.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Je=se.querySelector("#psub-close"))==null||Je.addEventListener("click",()=>se.remove()),(Pe=se.querySelector("#pout-up"))==null||Pe.addEventListener("click",()=>{V>0&&(V--,oe())}),(nt=se.querySelector("#pout-down"))==null||nt.addEventListener("click",()=>{V<N.length-1&&(V++,oe())}),(et=se.querySelector("#pin-up"))==null||et.addEventListener("click",()=>{ie>0&&(ie--,oe())}),(mt=se.querySelector("#pin-down"))==null||mt.addEventListener("click",()=>{ie<R.length-1&&(ie++,oe())});const De=(Ve,rt,tt,_t)=>{const gt=se.querySelector("#"+Ve);if(!gt)return;let Wt=0;gt.addEventListener("touchstart",kt=>{Wt=kt.touches[0].clientY},{passive:!0}),gt.addEventListener("touchend",kt=>{const qt=kt.changedTouches[0].clientY-Wt;if(Math.abs(qt)<30)return;const bt=rt();qt<0&&bt<_t-1?(tt(bt+1),oe()):qt>0&&bt>0&&(tt(bt-1),oe())},{passive:!0})};De("pin-panel",()=>ie,Ve=>ie=Ve,R.length),De("pout-panel",()=>V,Ve=>V=Ve,N.length),(ci=se.querySelector("#psub-confirm"))==null||ci.addEventListener("click",async Ve=>{if(Ve.preventDefault(),Ve.stopPropagation(),re)return;re=!0;const rt=N[V],tt=R[ie];if(!rt||!tt)return;const _t=rt._line,gt=(B[_t]||[]).findIndex(qt=>qt.cardId===rt.cardId);if(gt===-1){m("Erreur : joueur introuvable","error"),se.remove();return}const Wt={...tt,_line:_t,position:rt.position,used:!1,boost:0};B[_t].splice(gt,1,Wt);const kt=[...O,tt.cardId];se.remove(),Fe(rt,tt,async()=>{await b({[f+"Team"]:B,[h+"Team"]:u[h+"Team"],["usedSubIds_"+f]:kt})})})}document.body.appendChild(se),oe()}function Fe(k,A,B){const O={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const N=(Z,ie,re)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${ie};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${re}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${O[Z.job]||"#555"};border:3px solid ${ie};position:relative;overflow:hidden;margin:0 auto">
        ${Ut(Z)?`<img src="${Ut(Z)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(Z.name||"").slice(0,12)}</div>
    </div>`;q.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${N(A,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${N(k,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(q);let R=!1;const V=()=>{R||(R=!0,q.remove(),setTimeout(()=>B(),50))};q.addEventListener("click",V),setTimeout(V,2200)}function _e(){var A;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",k.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${u[h+"Name"]}</div>
      <div style="width:min(90vw,420px)">${si(u[h+"Team"],u[h+"Formation"],null,[],Nt(),ii())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(k),(A=k.querySelector("#pvp-opp-close"))==null||A.addEventListener("click",()=>k.remove())}function ye(){var B;const k=u.log||[],A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",A.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${k.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...k].reverse().map(O=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${O.type==="goal"?"#FFD700":O.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${O.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(A),(B=A.querySelector("#pvp-hist-close"))==null||B.addEventListener("click",()=>A.remove())}async function Ee(){if(u.phase!==f+"-attack")return;const k=f==="p1"?"p2":"p1",A=(u.round||0)+1,B=[...u.log||[]];B.push({type:"info",text:`⏭️ ${u[f+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const O=ze(u),q=ue(k),N=O||!q?"finished":k+"-attack";await b({["selected_"+f]:[],modifiers:{...u.modifiers,[f]:{}},pendingAttack:null,phase:N,attacker:k,round:A,log:B}),N==="finished"&&await we(u)}function D(k){const A=(k.GK||[]).some(O=>!O.used),B=["DEF","MIL","ATT"].some(O=>(k[O]||[]).some(q=>!q.used));return A&&!B}function C(k){return(k.p1Score||0)!==(k.p2Score||0)?null:D(k.p1Team)&&!me(k.p2Team)?{side:"p1",gk:(k.p1Team.GK||[]).find(A=>!A.used)}:D(k.p2Team)&&!me(k.p1Team)?{side:"p2",gk:(k.p2Team.GK||[]).find(A=>!A.used)}:null}async function K(){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(k);const A=(B,O)=>new Promise(q=>{k.innerHTML=`<div style="font-size:32px;font-weight:900;color:${O};letter-spacing:2px;animation:lcFade 1.4s ease both">${B}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(q,1400)});await A("⚽ DERNIER CORNER","#FFD700"),await A("🧤 LE GARDIEN MONTE !","#4fc3f7"),k.remove()}async function W(k,A){const{side:B,gk:O}=k;if(!O)return;const q=B+"Score",N=(A[q]||0)+1;O.used=!0;const R=[...A.log||[]];R.push({type:"duel",isGoal:!0,homeScored:B===f,homePlayers:B==="p1"?[Zt(O)]:[],aiPlayers:B==="p2"?[Zt(O)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${A[B+"Name"]} marque !`});const V=(A.round||0)+1,Z=B==="p1"?"p2":"p1",ie={...A,[q]:N},re=ze(ie);Y.add(V),await K();const se=B===f?N:A[f+"Score"]||0,oe=B===f?A[h+"Score"]||0:N;dt([Zt(O)],se,oe,B===f,async()=>{await b({[q]:N,log:R,round:V,pendingAttack:null,phase:re?"finished":Z+"-attack",attacker:Z,["selected_"+f]:[],modifiers:{...u.modifiers,[f]:{}}}),re&&await we({...u,[q]:N})})}async function J(){const k=u[f+"Team"],A=!["GK","DEF","MIL","ATT"].some(N=>(u[h+"Team"][N]||[]).some(R=>!R.used)),B=(u["selected_"+f]||[]).map(N=>{const R=(k[N._role]||[]).find(be=>be.cardId===N.cardId)||N,V=["GK","DEF"].includes(N._role),Z=k[N._role]||[],ie=Z.findIndex(be=>be.cardId===N.cardId),re=Pt(Z.length),se=ie>=0?re[ie]:R._col??1,oe=u.stadiumDef||u.homeStadiumDef||null,ce=R.stadiumBonus||oe&&(oe.club_id&&String(R.club_id)===String(oe.club_id)||oe.country_code&&R.country_code===oe.country_code)||!1;return{...R,_line:N._role,_col:se,stadiumBonus:ce,...V?{note_a:Math.max(1,Number(R.note_a)||0)}:{}}});if(!B.length)return;const O=$i(B,u.modifiers[f]||{},u[f+"Formation"]);de(f,B.map(N=>N.cardId)),B.forEach(N=>{const R=(k[N._role]||[]).find(V=>V.cardId===N.cardId);R&&(R.used=!0)}),u["selected_"+f]=[],L();const q=[...u.log||[]];if(A){if(B.length===1&&(B[0]._line==="GK"||B[0].job==="GK")&&(u.p1Score||0)===(u.p2Score||0)){await W({side:f,gk:B[0]},{...u,[f+"Team"]:k,log:q});return}const R=(u[f+"Score"]||0)+1,V=B.map(oe=>Zt(oe));q.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:V,homeTotal:O.total,aiTotal:0});const Z=(u.round||0)+1,ie=f==="p1"?"p2":"p1",re={...u,[f+"Team"]:k,[f+"Score"]:R},se=ze(re);Y.add(Z),dt(V,R,u[h+"Score"]||0,!0,async()=>{await b({[f+"Team"]:k,[f+"Score"]:R,["selected_"+f]:[],modifiers:{...u.modifiers,[f]:{}},pendingAttack:null,phase:se?"finished":ie+"-attack",attacker:ie,round:Z,log:q}),se&&await we({...u,[f+"Score"]:R})});return}q.push({type:"pending",text:`⚔️ ${u[f+"Name"]} attaque (${O.total})`}),await b({[f+"Team"]:k,[h+"Team"]:u[h+"Team"],pendingAttack:{...O,players:B,side:f},["selected_"+f]:[],modifiers:{...u.modifiers,[f]:{}},phase:h+"-defense",log:q})}async function F(){const k=u[f+"Team"],A=(u["selected_"+f]||[]).map(ve=>{const Ae=(k[ve._role]||[]).find(Pe=>Pe.cardId===ve.cardId)||ve,Me=k[ve._role]||[],le=Me.findIndex(Pe=>Pe.cardId===ve.cardId),De=Pt(Me.length),Je=le>=0?De[le]:Ae._col??1;return{...Ae,_line:ve._role,_col:Je}}),B=ki(A,u.modifiers[f]||{},u[f+"Formation"]);de(f,A.map(ve=>ve.cardId)),A.forEach(ve=>{const Ae=(k[ve._role]||[]).find(Me=>Me.cardId===ve.cardId);Ae&&(Ae.used=!0)}),u["selected_"+f]=[],L();const O=xo(u.pendingAttack.total,B.total,u.modifiers[f]||{}),q=u.pendingAttack.side,N=O==="attack"||(O==null?void 0:O.goal),R=q==="p1"?"p2":"p1",V=(u.round||0)+1,Z=(u.pendingAttack.players||[]).map(ve=>Zt(ve)),ie=[...u.log||[]];ie.push({type:"duel",isGoal:N,homeScored:N&&q===f,text:N?`⚽ BUT de ${u[q+"Name"]} ! (${u.pendingAttack.total} vs ${B.total})`:`✋ Attaque stoppée (${u.pendingAttack.total} vs ${B.total})`,homePlayers:Z,aiPlayers:A.map(ve=>Zt(ve)),homeTotal:u.pendingAttack.total,aiTotal:B.total});const re=N?(u[q+"Score"]||0)+1:u[q+"Score"]||0,se={...u,[f+"Team"]:k,[q+"Score"]:re},oe=ze(se),ce=oe?"finished":R+"-attack",be=!oe&&!N?C(se):null,Se=async()=>{if(be){await W(be,se);return}await b({[f+"Team"]:k,[h+"Team"]:u[h+"Team"],[q+"Score"]:re,["selected_"+f]:[],modifiers:{...u.modifiers,[f]:{}},pendingAttack:null,phase:ce,attacker:R,round:V,log:ie}),(ce==="finished"||oe)&&await we({...u,[q+"Score"]:re})};if(N){const ve=q===f,Ae=ve?re:u[f+"Score"]||0,Me=ve?u[h+"Score"]||0:re;Y.add(V),dt(Z,Ae,Me,ve,Se)}else await Se()}function ee(k){return["MIL","ATT"].some(A=>(k[A]||[]).some(B=>!B.used))}function me(k){return["GK","DEF","MIL","ATT"].some(A=>(k[A]||[]).some(B=>!B.used))}function xe(k){return me(k)&&!ee(k)}function ue(k){const A=u[k+"Team"],B=u[(k==="p1"?"p2":"p1")+"Team"];return!!(ee(A)||xe(A)&&!me(B)||xe(A)&&!ee(B)&&me(B))}function ze(k){return!me(k.p1Team)&&!me(k.p2Team)}function Ie(k){const A=k.p1Score||0,B=k.p2Score||0;return A===B?null:A>B?g.home_id:g.away_id}async function we(k){ti(),it();try{const A=Ie(k),B=A?g.home_id===A?g.away_id:g.home_id:null,O=k.p1Score||0,q=k.p2Score||0,{data:N,error:R}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:A,p_home_score:O,p_away_score:q,p_forfeit:!1});if(R&&console.error("[PvP] finish_pvp_match:",R),p)try{await v.rpc("check_and_finish_mini_league",{p_league_id:p})}catch(V){console.error("[PvP] check_and_finish_mini_league:",V)}A&&B&&Pa(A,B).catch(()=>{});try{const{data:V}=await v.rpc("apply_match_rewards",{p_match_id:i});V!=null&&V.success&&!(V!=null&&V.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(V){console.error("[PvP] apply_match_rewards:",V)}if(typeof s=="function")try{await s({homeScore:O,awayScore:q,winnerId:A,homeId:g.home_id,awayId:g.away_id,matchId:i})}catch(V){console.error("[PvP] onMatchEnd:",V)}}catch(A){console.error("[PvP] finishMatch:",A)}}function ke(){var q;const k=u[f+"Score"],A=u[h+"Score"],B=k>A,O=k===A;Ft(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${B?"🏆":O?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${B?"Victoire !":O?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${k} - ${A}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${p?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(q=document.getElementById("pvp-home"))==null||q.addEventListener("click",()=>{try{v.removeChannel(w)}catch{}ut(t),p?y("mini-league",{openLeagueId:p}):y("home")})}L()}async function fo(t,e,i=!1){var d,l;const{state:o,navigate:n,toast:r}=e,a=i&&((l=(d=e==null?void 0:e.state)==null?void 0:d.params)==null?void 0:l.rankedData)||null;await Ui(t,e,i?"ranked":"random",async({deckId:s,formation:p,starters:c,subsRaw:x,gcCardsEnriched:y,gcDefs:m,stadiumDef:f})=>{Ft(t);const h=async _=>{await Na(t,e,s,p,c,x,_||[],m,f,i,a)};if(!(y!=null&&y.length)){await h([]);return}Ki(t,y,h)})}async function Ra(t,e,i){return Fa(t,e,i)}async function Na(t,e,i,o,n,r,a=[],d=[],l=null,s=!1,p=null){var M,w;const{state:c,navigate:x,toast:y}=e,m=(p==null?void 0:p.mmr)??((M=c.profile)==null?void 0:M.mmr)??450,f=s?Lt(m):null,h=s?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",_=s?(f==null?void 0:f.color)||"#D4A017":"#FFD700";let $=!1,g=null,z=null;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${h};color:#fff;padding:32px;text-align:center;gap:20px">
      ${s?`<div style="font-size:36px">${(f==null?void 0:f.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${s?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${s?`<div style="font-size:13px;color:${(f==null?void 0:f.color)||"#D4A017"}">${(f==null?void 0:f.name)||""} · ${Math.round(m)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${_};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const u=async()=>{$=!0,g&&(g.unsubscribe(),g=null),z&&(clearInterval(z),z=null);try{await v.rpc("cancel_matchmaking",{p_user_id:c.profile.id})}catch(b){console.error("[Matchmaking] cancel error:",b)}};(w=document.getElementById("cancel-mm"))==null||w.addEventListener("click",async()=>{await u(),ut(t),x("home")});const j=async(b,E)=>{$||($=!0,g&&(g.unsubscribe(),g=null),z&&(clearInterval(z),z=null),await Vt(t,e,b,E,{myGC:a,gcDefs:d,stadiumDef:l,isRanked:s,rankedData:p,onMatchEnd:s?Oa:null}))},T=c.user.id,{data:P,error:Y}=s?await v.rpc("try_matchmake_ranked",{p_user_id:T,p_deck_id:i,p_mmr:m,p_range:200}):await v.rpc("try_matchmake",{p_user_id:T,p_deck_id:i});if(Y||!(P!=null&&P.success)){console.error("[Matchmaking] try_matchmake error:",Y||P),y("Erreur de matchmaking","error"),ut(t),x("home");return}if(P.matched){await j(P.match_id,!1);return}const X=async()=>{if($)return;const{data:b}=await v.from("matchmaking_queue").select("status, match_id").eq("user_id",T).maybeSingle();(b==null?void 0:b.status)==="matched"&&b.match_id&&await j(b.match_id,!0)};g=v.channel(`mm_${T}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${T}`},b=>{const E=b.new;E.status==="matched"&&E.match_id&&j(E.match_id,!0)}).subscribe(),z=setInterval(X,3e3),s?setTimeout(async()=>{if(!$){$=!0,g&&(g.unsubscribe(),g=null),z&&(clearInterval(z),z=null);try{await v.rpc("cancel_matchmaking",{p_user_id:c.profile.id})}catch(b){console.error("[Matchmaking] cancel error:",b)}y("Aucun adversaire trouvé — match contre une IA calibrée sur votre niveau","info",4e3),x("match",{matchMode:"ranked_ai",rankedData:p,presetSetup:{deckId:i,formation:o,starters:n,subsRaw:r,gcCardsEnriched:a,gcDefs:d,stadiumDef:l}})}},2e4):setTimeout(()=>{$||u()},12e4)}async function Oa(t,e){const{state:i,toast:o}=e,{winnerId:n,homeId:r,awayId:a,homeScore:d,awayScore:l,matchId:s}=t,p=i.user.id,c=r===p,x=n===p,{data:y}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",p).single(),{data:m}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",c?a:r).single();if(y&&m){const f=pn(y.mmr,y.mmr_rd,y.mmr_v,m.mmr,m.mmr_rd,x?1:0);await v.from("users").update({mmr:f.mmr,mmr_rd:f.rd,mmr_v:f.v,mmr_wins:x?v.sql`mmr_wins + 1`:void 0,mmr_losses:x?void 0:v.sql`mmr_losses + 1`}).eq("id",p),o(x?`+MMR ↑ ${Math.round(f.mmr-y.mmr)}`:`-MMR ↓ ${Math.round(y.mmr-f.mmr)}`,x?"success":"error",4e3)}}const Ga=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:fo,resumePvpMatch:Ra},Symbol.toStringTag,{value:"Module"}));async function Ha(t,e){const{state:i,navigate:o,toast:n}=e,r=i.params||{},a=r.friendId||null,d=r.friendName||"Ami",l=!!r.isAccepting;await Ui(t,e,"friend",async({deckId:s,formation:p,starters:c,subsRaw:x,gcCardsEnriched:y,gcDefs:m,stadiumDef:f})=>{Ft(t);const h=async _=>{const $=_||[];l?await Ka(t,e,s,$,m,f):await Ua(t,e,s,$,m,f,a,d)};if(!(y!=null&&y.length)){await h([]);return}Ki(t,y,h)})}async function Ua(t,e,i,o,n,r,a,d){var $;const{state:l,navigate:s,toast:p}=e,c=l.user.id,{data:x,error:y}=await v.from("friend_match_invites").insert({inviter_id:c,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(y||!x){console.error("[Friend] Erreur création invitation:",y),p("Impossible de créer l'invitation","error"),s("home");return}t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${d}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let m=!1,f=null;const h=async()=>{f&&(f.unsubscribe(),f=null)};($=document.getElementById("cancel-friend"))==null||$.addEventListener("click",async()=>{await h(),await v.from("friend_match_invites").update({status:"declined"}).eq("id",x.id),ut(t),s("home")}),f=v.channel(`friend_invite_${x.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${x.id}`},async({new:g})=>{m||g.status!=="accepted"||!g.match_id||(m=!0,await h(),await Vt(t,e,g.match_id,!0,{myGC:o,gcDefs:n,stadiumDef:r}))}).subscribe();const _=setInterval(async()=>{if(m)return;const{data:g}=await v.from("friend_match_invites").select("status, match_id").eq("id",x.id).single();(g==null?void 0:g.status)==="accepted"&&g.match_id&&(m=!0,clearInterval(_),await h(),await Vt(t,e,g.match_id,!0,{myGC:o,gcDefs:n,stadiumDef:r}))},3e3);setTimeout(async()=>{m||(clearInterval(_),await h(),p("Invitation expirée","info"),s("home"))},12e4)}async function Ka(t,e,i,o,n,r){const{state:a,navigate:d,toast:l}=e,s=a.user.id,{data:p}=await v.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",s).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!p){l("Aucune invitation en attente","error"),d("home");return}const{data:c,error:x}=await v.rpc("accept_friend_invite",{p_invite_id:p.id,p_invitee_deck_id:i});if(x||!(c!=null&&c.success)){console.error("[Friend] Erreur accept_friend_invite:",x||c),l((c==null?void 0:c.error)||"Impossible de rejoindre le match","error"),d("home");return}await Vt(t,e,c.match_id,!1,{myGC:o,gcDefs:n,stadiumDef:r})}const Gn="#1A6B3C",yt="#D4A017",xi="var(--tile-bg)",yi="var(--tile-border)",Rt="var(--divider)",st="var(--tile-fg-on-page)",Dt="var(--tile-fg-dim)",ct="var(--tile-fg-faint)",hi="var(--nav-fg,#fff)",Hn="rgba(255,255,255,0.62)",Va="rgba(255,255,255,0.4)";async function Wa(t,e){var o;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(o=e.state.params)==null?void 0:o.openLeagueId;if(i){e.state.params.openLeagueId=null,await ht(t,e,i);return}await pt(t,e)}async function pt(t,e,i="waiting"){var g,z;const{state:o}=e,n=o.profile.id,{data:r}=await v.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",n),a=(r||[]).map(u=>u.league_id),d={};(r||[]).forEach(u=>{d[u.league_id]={amount:u.prize_amount,claimed:u.prize_claimed}});const{data:l,error:s}=await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),p=s?(await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:l||[],x=(a.length?await v.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],y=x.filter(u=>u.status==="waiting"&&!u.is_archived),m=x.filter(u=>u.status==="active"&&!u.is_archived),f=x.filter(u=>u.is_archived||u.status==="finished");let h=f;if(f.length){const{data:u}=await v.from("mini_league_matches").select("league_id").in("league_id",f.map(T=>T.id)).or(`home_id.eq.${n},away_id.eq.${n}`).not("status","eq","bye"),j=new Set((u||[]).map(T=>T.league_id));h=f.filter(T=>j.has(T.id))}const _=p.filter(u=>!a.includes(u.id)),$=[{key:"waiting",label:"🟡 En attente",count:y.length+_.length},{key:"active",label:"🟢 En cours",count:m.length},{key:"archived",label:"📁 Archivées",count:h.length}];t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Rt};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${hi}">🏆 Mini League</div>
        <div style="font-size:12px;color:${Hn}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${hi}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Rt}">
      ${$.map(u=>`<button class="ml-tab" data-tab="${u.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===u.key?Gn:"transparent"};background:none;font-size:12px;font-weight:${i===u.key?"900":"600"};color:${i===u.key?"#4ade80":Va};cursor:pointer">${u.label}${u.count?` (${u.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Ya(y,_,n):i==="active"?Ja(m,n):Xa(h,n,d)}
    </div>
  </div>`,(g=document.getElementById("ml-create-btn"))==null||g.addEventListener("click",()=>Za(t,e)),(z=document.getElementById("ml-refresh-list"))==null||z.addEventListener("click",()=>pt(t,e,i)),t.querySelectorAll(".ml-tab").forEach(u=>u.addEventListener("click",()=>pt(t,e,u.dataset.tab))),t.querySelectorAll("[data-league-id]").forEach(u=>u.addEventListener("click",()=>ht(t,e,u.dataset.leagueId))),t.querySelectorAll("[data-join]").forEach(u=>u.addEventListener("click",j=>{j.stopPropagation(),Un(t,e,u.dataset.join,u.dataset.type)})),t.querySelectorAll("[data-delete]").forEach(u=>u.addEventListener("click",j=>{j.stopPropagation(),mo(t,e,u.dataset.delete,u.dataset.name,i)})),t.querySelectorAll("[data-claim-league]").forEach(u=>u.addEventListener("click",async j=>{j.stopPropagation(),u.disabled=!0,u.textContent="...";const{data:T,error:P}=await v.rpc("claim_mini_league_prize",{p_league_id:u.dataset.claimLeague,p_user_id:o.profile.id});if(P||!(T!=null&&T.success)){e.toast((T==null?void 0:T.error)||"Erreur lors de la récupération","error"),pt(t,e,i);return}if(!T.already_claimed){o.profile.credits=(o.profile.credits||0)+T.prize;const Y=document.getElementById("nav-credits");Y&&(Y.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),e.toast(`💰 +${T.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}pt(t,e,i)}))}function Gi(t,e,i=!1,o=null){var l,s;const n=t.creator_id===e,r=t.pot||0,a=((s=(l=t.mini_league_members)==null?void 0:l[0])==null?void 0:s.count)||0,d=o&&o.amount>0&&!o.claimed;return`<div data-league-id="${t.id}" style="background:${xi};border:1px solid ${d?"rgba(212,160,23,0.5)":yi};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${st}">${t.name}</div>
      ${n?`<button data-delete="${t.id}" data-name="${t.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${Dt};margin-bottom:${i||d?"10px":"0"}">
      <span>${t.type==="private"?"🔒":"🌐"} ${t.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${t.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${t.max_players}</span>
      <span>💰 ${(t.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${r>0?`<span style="color:${yt};font-weight:700">🏆 ${r.toLocaleString("fr")} cr.</span>`:""}
      ${t.current_day>0?`<span>📅 J${t.current_day}/${t.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${t.id}" data-type="${t.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(t.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
    ${d?`<button data-claim-league="${t.id}" class="btn btn-sm" style="width:100%;background:${yt};color:#141000;font-weight:900;border:none">💰 Récupérer ${o.amount.toLocaleString("fr")} cr.</button>`:""}
  </div>`}function Ya(t,e,i){const o=[];return t.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${ct};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),o.push(...t.map(n=>Gi(n,i,!1)))),e.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${ct};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),o.push(...e.map(n=>Gi(n,i,!0)))),o.length?o.join(""):`<div style="text-align:center;padding:40px;color:${ct}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function Ja(t,e){return t.length?t.map(i=>Gi(i,e)).join(""):`<div style="text-align:center;padding:40px;color:${ct}">Aucune mini league en cours.</div>`}function Xa(t,e,i={}){return t.length?t.map(o=>Gi(o,e,!1,i[o.id])).join(""):`<div style="text-align:center;padding:40px;color:${ct}">Aucune mini league archivée.</div>`}function Za(t,e){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
    <div style="padding:16px 20px;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:17px;font-weight:900">🏆 Créer une Mini League</div>
      <button id="ml-form-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="padding:20px;display:flex;flex-direction:column;gap:14px">
      <div><label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">NOM *</label>
        <input id="ml-name" placeholder="Ex: Ligue des Champions" style="width:100%;box-sizing:border-box;padding:10px;border:1.5px solid #ddd;border-radius:8px;font-size:14px"></div>
      <div><label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">JOUEURS MAX (3-8)</label>
        <input id="ml-max" type="number" min="3" max="8" value="6" style="width:100%;box-sizing:border-box;padding:10px;border:1.5px solid #ddd;border-radius:8px;font-size:14px"></div>
      <div><label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">MISE PAR JOUEUR (min. 100 cr.)</label>
        <input id="ml-fee" type="number" min="100" step="100" value="500" style="width:100%;box-sizing:border-box;padding:10px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
        <div style="font-size:11px;color:#888;margin-top:4px">🥇 70% · 🥈 20% · 🥉 10% du pot</div></div>
      <div><label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">TYPE</label>
        <div style="display:flex;gap:8px">
          <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer"><input type="radio" name="ml-type" value="public" checked> Publique</label>
          <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer"><input type="radio" name="ml-type" value="private"> Privée (MDP)</label>
        </div></div>
      <div id="ml-pwd-block" style="display:none"><label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">MOT DE PASSE</label>
        <input id="ml-pwd" type="password" style="width:100%;box-sizing:border-box;padding:10px;border:1.5px solid #ddd;border-radius:8px;font-size:14px"></div>
      <div><label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">MODE</label>
        <div style="display:flex;gap:8px">
          <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer"><input type="radio" name="ml-mode" value="aller" checked> Aller</label>
          <label style="flex:1;display:flex;align-items:center;gap:6px;padding:10px;border:1.5px solid #ddd;border-radius:8px;cursor:pointer"><input type="radio" name="ml-mode" value="aller-retour"> Aller-Retour</label>
        </div></div>
      <button id="ml-create-confirm" class="btn btn-primary" style="width:100%;padding:12px;font-size:15px">🚀 Créer</button>
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(o=>o.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=o.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var m,f,h,_;const{toast:o}=e,n=document.getElementById("ml-name").value.trim(),r=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,d=((m=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:m.value)||"public",l=((f=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:f.value)||"aller",s=((_=(h=document.getElementById("ml-pwd"))==null?void 0:h.value)==null?void 0:_.trim())||null;if(!n){o("Le nom est obligatoire","error");return}if(a<100){o("Mise minimum : 100 crédits","error");return}if(d==="private"&&!s){o("Mot de passe requis","error");return}const{data:p,error:c}=await v.from("mini_leagues").insert({name:n,creator_id:e.state.profile.id,type:d,password:s,mode:l,max_players:r,entry_fee:a}).select().single();if(c){o("Erreur : "+c.message,"error");return}const{data:x}=await v.from("users").select("credits").eq("id",e.state.profile.id).single();if(((x==null?void 0:x.credits)||0)<a){await v.from("mini_leagues").delete().eq("id",p.id),o(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await v.from("users").update({credits:x.credits-a}).eq("id",e.state.profile.id),await v.from("mini_leagues").update({pot:a}).eq("id",p.id),await v.from("mini_league_members").insert({league_id:p.id,user_id:e.state.profile.id}),e.state.profile&&(e.state.profile.credits=x.credits-a);const y=document.getElementById("nav-credits");y&&(y.textContent=`💰 ${(e.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),o(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),ht(t,e,p.id)})}function Qa(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",e.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(e);const i=e.querySelector("#ml-pwd-input"),o=n=>{e.remove(),t(n)};setTimeout(()=>i==null?void 0:i.focus(),80),e.querySelector("#pwd-cancel").addEventListener("click",()=>o(null)),e.querySelector("#pwd-ok").addEventListener("click",()=>o(i.value.trim())),i.addEventListener("keydown",n=>{n.key==="Enter"&&o(i.value.trim())})})}async function Un(t,e,i,o){var c;const{toast:n,state:r}=e,a=r.profile.id;let d=null;if(o==="private"&&(d=await Qa(),d===null))return;const{data:l,error:s}=await v.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:d});if(s||!(l!=null&&l.success)){console.error("[MiniLeague] join_mini_league:",s||l),n((l==null?void 0:l.error)||"Erreur lors de l'inscription","error");return}if(typeof e.refreshProfile=="function")await e.refreshProfile();else{const{data:x}=await v.from("users").select("credits").eq("id",a).single();r.profile&&x&&(r.profile.credits=x.credits)}const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${(((c=r.profile)==null?void 0:c.credits)||0).toLocaleString("fr")}`),n("✅ Inscrit ! Pot mis à jour.","success"),ht(t,e,i)}async function es(t,e,i,o){const{toast:n,state:r}=e,a=r.profile.id;if(!await new Promise(x=>{const y=document.createElement("div");y.className="modal-overlay",y.style.zIndex="2100",y.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${o.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(y),y.querySelector("#lv-ok").onclick=()=>{y.remove(),x(!0)},y.querySelector("#lv-cancel").onclick=()=>{y.remove(),x(!1)}}))return;const{data:l,error:s}=await v.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(s||!(l!=null&&l.success)){n((l==null?void 0:l.error)||"Erreur lors de la désinscription","error");return}const p=l.refund||o;r.profile&&(r.profile.credits=(r.profile.credits||0)+p);const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),n(`↩️ Désinscrit · +${p.toLocaleString("fr")} cr. remboursés`,"success"),pt(t,e,"waiting")}async function mo(t,e,i,o,n){const{toast:r}=e;if(!confirm(`Supprimer définitivement "${o}" et tous ses matchs/membres ? Action irréversible.`))return;await v.from("mini_league_matches").delete().eq("league_id",i),await v.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await v.from("mini_leagues").delete().eq("id",i);if(a){r("Erreur suppression ("+a.message+")","error");return}r("Mini League supprimée avec succès","success"),pt(t,e,n)}async function ts(t,e,i){await v.from("mini_leagues").update({is_archived:!0}).eq("id",i),e.toast("Mini League archivée","success"),pt(t,e,"archived")}async function ht(t,e,i){var z,u,j,T,P,Y,X,M,w;const{state:o,toast:n}=e,r=o.profile.id,[{data:a},{data:d},{data:l}]=await Promise.all([v.from("mini_leagues").select("*").eq("id",i).single(),v.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),v.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){n("Introuvable","error"),await pt(t,e);return}const s=(d||[]).some(b=>b.user_id===r),p=a.creator_id===r,c=(d||[]).map(b=>b.user).filter(Boolean),x=as(c,l||[]),y=(l||[]).filter(b=>b.matchday===a.current_day),m=a.pot||0,f=a.entry_fee||100,h=y.length>0&&y.every(b=>b.status==="finished"||b.status==="bye"),_=a.current_day>=a.total_days,$=(d||[]).find(b=>b.user_id===r);t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Rt};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${hi}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${hi};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${hi}">${a.name}</div>
        <div style="font-size:11px;color:${Hn}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${f} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"rgba(74,222,128,0.16)":a.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${a.status==="active"?"#4ade80":a.status==="finished"?"#c084fc":"#eab308"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${m>0?`<div style="font-size:12px;font-weight:900;color:${yt};margin-top:4px">🏆 ${m.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${xi};border:1px solid ${yi};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${st}">👥 Joueurs (${c.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${Dt};margin-bottom:10px">💰 ${f} cr./joueur → Pot estimé : ${(f*c.length).toLocaleString("fr")} cr. (🥇${Math.floor(f*c.length*.7).toLocaleString("fr")} · 🥈${Math.floor(f*c.length*.2).toLocaleString("fr")} · 🥉${Math.floor(f*c.length*.1).toLocaleString("fr")})</div>
        ${c.map(b=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${Rt}">
            <div style="width:36px;height:36px;border-radius:50%;background:${b.club_color2||Gn};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${b.club_color1||"#fff"}">${(b.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${st}">${b.club_name||b.pseudo}</div><div style="font-size:11px;color:${ct}">@${b.pseudo}</div></div>
            ${b.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${p&&c.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${f} cr. × ${c.length})</button>`:""}
        ${p?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${s?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${f} cr.)</button>`}
        ${s&&!p?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${f.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${xi};border:1px solid ${yi};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${st}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${y.map(b=>on(b,c,r,s)).join("")}
        ${p&&h&&!_?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&x.length?`
      <div style="background:${xi};border:1px solid ${yi};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${st}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${ct};text-transform:uppercase;border-bottom:2px solid ${Rt}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${m>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${yt}">💰</th>`:""}
          </tr></thead>
          <tbody>${x.map((b,E)=>{const H=m>0&&a.status==="finished"?E===0?Math.floor(m*.7):E===1?Math.floor(m*.2):E===2?Math.floor(m*.1):0:0;return`<tr style="border-bottom:1px solid ${Rt};${b.userId===r?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${E===0?yt:E<3?"#4ade80":Dt}">${["🥇","🥈","🥉"][E]||E+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${st}">${b.clubName}</div><div style="font-size:10px;color:${ct}">@${b.pseudo}</div></td>
              <td style="text-align:center;color:${Dt}">${b.played}</td><td style="text-align:center;color:${Dt}">${b.won}-${b.drawn}-${b.lost}</td>
              <td style="text-align:center;color:${b.goalDiff>=0?"#4ade80":"#ff6b6b"}">${b.goalDiff>=0?"+":""}${b.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${st}">${b.points}</td>
              ${m>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${yt}">${H?H.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${xi};border:1px solid ${yi};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${st}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(b,E)=>E+1).reverse().map(b=>{const E=(l||[]).filter(H=>H.matchday===b);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${ct};margin-bottom:6px">Journée ${b}</div>${E.map(H=>on(H,c,r,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${p&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${Dt}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const g=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((z=document.getElementById("ml-back"))==null||z.addEventListener("click",()=>pt(t,e,g)),(u=document.getElementById("ml-refresh"))==null||u.addEventListener("click",async b=>{const E=b.currentTarget;E.style.opacity="0.5",await ht(t,e,i)}),(j=document.getElementById("ml-start-btn"))==null||j.addEventListener("click",()=>is(t,e,a,c)),(T=document.getElementById("ml-next-day"))==null||T.addEventListener("click",()=>os(t,e,i)),(P=document.getElementById("ml-join-now"))==null||P.addEventListener("click",()=>Un(t,e,i,a.type)),(Y=document.getElementById("ml-leave-btn"))==null||Y.addEventListener("click",()=>es(t,e,i,f)),(X=document.getElementById("ml-delete-btn"))==null||X.addEventListener("click",()=>mo(t,e,i,a.name,"waiting")),(M=document.getElementById("ml-delete-now"))==null||M.addEventListener("click",()=>mo(t,e,i,a.name,g)),(w=document.getElementById("ml-archive-btn"))==null||w.addEventListener("click",()=>ts(t,e,i)),t.querySelectorAll("[data-play-match]").forEach(b=>{b.addEventListener("click",()=>{const E=y.find(H=>H.id===b.dataset.playMatch);E&&(wt(),e.navigate("match-mini-league",{mlMatchId:E.id,leagueId:i}))})}),a.status==="finished"&&$){const b=x.findIndex(E=>E.userId===r);b>=0&&b<3&&$.prize_amount>0&&!$.prize_claimed&&setTimeout(()=>ns(t,e,a,$,b),400)}}function on(t,e,i,o,n=!1){const r=c=>e.find(x=>x.id===c);if(t.is_bye){const c=r(t.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${Dt};text-align:center">🔵 ${(c==null?void 0:c.club_name)||(c==null?void 0:c.pseudo)||"?"} exempté(e)</div>`}const a=r(t.home_id),d=r(t.away_id),l=t.home_id===i||t.away_id===i,s=l&&t.status==="pending"&&o&&!n,p=t.status==="finished"?`${t.home_score} - ${t.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${l?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${l?"rgba(74,222,128,0.35)":Rt}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${st};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${t.status==="finished"?"#4ade80":ct}">${p}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${st};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"?"}</div>
    ${s?`<button data-play-match="${t.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${t.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function is(t,e,i,o){const{toast:n,state:r}=e,a=rs(o.map(s=>s.id),i.mode),d=[];a.forEach((s,p)=>s.forEach(c=>d.push({league_id:i.id,matchday:p+1,home_id:c.home||c.bye,away_id:c.away||null,is_bye:!!c.bye,status:c.bye?"bye":"pending"})));const{error:l}=await v.from("mini_league_matches").insert(d);if(l){n("Erreur calendrier : "+l.message,"error");return}await v.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),n(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),ht(t,e,i.id)}async function os(t,e,i){const{data:o}=await v.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),n=(o.current_day||0)+1;if(n>(o.total_days||0)){ht(t,e,i);return}await v.from("mini_leagues").update({current_day:n}).eq("id",i),e.toast(`Journée ${n} commencée !`,"success"),ht(t,e,i)}async function ns(t,e,i,o,n){var x,y;const{state:r,toast:a}=e,d=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],l=["🥇","🥈","🥉"][n],s=o.prize_amount||d[n]||0,p=o.prize_claimed,c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",c.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${l}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${n===0?"Champion !":n===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${yt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${p?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${yt}">${s.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${n===0?"70%":n===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${p?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${yt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${s.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(c),(x=c.querySelector("#prize-close"))==null||x.addEventListener("click",()=>c.remove()),(y=c.querySelector("#claim-prize-btn"))==null||y.addEventListener("click",async m=>{const f=m.currentTarget;f.disabled=!0,f.textContent="...";const{data:h,error:_}=await v.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:r.profile.id});if(_||!(h!=null&&h.success)){console.error("[MiniLeague] claim_mini_league_prize:",_||h),a((h==null?void 0:h.error)||"Erreur lors de la récupération","error"),f.disabled=!1,f.textContent=`💰 Récupérer ${s.toLocaleString("fr")} cr.`;return}if(h.already_claimed)a("Déjà récupéré précédemment","info");else{const $=(r.profile.credits||0)+h.prize;r.profile&&(r.profile.credits=$);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${$.toLocaleString("fr")}`),a(`💰 +${h.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}c.remove(),ht(t,e,i.id)})}function rs(t,e){const o=t.length%2===0?[...t]:[...t,null],n=o.length;let r=o.slice(1);const a=[];for(let d=0;d<n-1;d++){const l=[],s=[o[0],...r];for(let p=0;p<n/2;p++){const c=s[p],x=s[n-1-p];c===null?l.push({bye:x}):x===null?l.push({bye:c}):l.push({home:c,away:x})}a.push(l),r=[r[r.length-1],...r.slice(0,-1)]}return e==="aller-retour"?[...a,...a.map(d=>d.map(l=>l.bye?l:{home:l.away,away:l.home}))]:a}function as(t,e){const i={};return t.forEach(o=>{i[o.id]={userId:o.id,pseudo:o.pseudo,clubName:o.club_name||o.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),e.filter(o=>o.status==="finished"&&!o.is_bye&&o.home_score!=null).forEach(o=>{const n=i[o.home_id],r=i[o.away_id];!n||!r||(n.played++,r.played++,n.goalsFor+=o.home_score,n.goalsAgainst+=o.away_score,r.goalsFor+=o.away_score,r.goalsAgainst+=o.home_score,o.home_score>o.away_score?(n.won++,n.points+=3,r.lost++):o.home_score<o.away_score?(r.won++,r.points+=3,n.lost++):(n.drawn++,n.points++,r.drawn++,r.points++),n.goalDiff=n.goalsFor-n.goalsAgainst,r.goalDiff=r.goalsFor-r.goalsAgainst)}),Object.values(i).sort((o,n)=>n.points-o.points||n.goalDiff-o.goalDiff||n.goalsFor-o.goalsFor)}async function nn(t,e){const{state:i,navigate:o,toast:n}=e,r=i.params||{},a=r.leagueId||null,d=r.mlMatchId||null,l=i.user.id;if(!d||!a){n("Match introuvable","error"),o("mini-league");return}const{data:s,error:p}=await v.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",d).single();if(p||!s){n("Match introuvable","error"),o("mini-league",{openLeagueId:a});return}if(s.home_id!==l&&s.away_id!==l){n("Vous ne faites pas partie de ce match","error"),o("mini-league",{openLeagueId:a});return}const c=s.home_id===l;if(s.match_id){await Vt(t,e,s.match_id,c,{mlLeagueId:a,mlMatchId:d});return}await Ui(t,e,"mini_league",async({deckId:x,gcCardsEnriched:y,gcDefs:m,stadiumDef:f})=>{Ft(t);const h=async _=>{const{data:$,error:g}=await v.rpc("start_mini_league_match",{p_ml_match_id:d,p_user_id:l,p_deck_id:x});if(g||!($!=null&&$.success)){console.error("[MiniLeague] start_mini_league_match error:",g||$),n(($==null?void 0:$.error)||"Impossible de lancer le match","error"),o("mini-league",{openLeagueId:a});return}if($.matched){await Vt(t,e,$.match_id,c,{mlLeagueId:a,mlMatchId:d,myGC:_||[],gcDefs:m,stadiumDef:f});return}await ss(t,e,{mlMatchId:d,leagueId:a,amIHome:c,chosenGC:_,gcDefs:m,stadiumDef:f})};if(!(y!=null&&y.length)){await h([]);return}Ki(t,y,h)})}function ss(t,e,{mlMatchId:i,leagueId:o,amIHome:n,chosenGC:r,gcDefs:a,stadiumDef:d}){return new Promise(l=>{var f;const{navigate:s}=e;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let p=!1;const c=async h=>{if(!p){if(p=!0,clearInterval(m),y)try{y.unsubscribe()}catch{}h&&await Vt(t,e,h,n,{mlLeagueId:o,mlMatchId:i,myGC:r||[],gcDefs:a,stadiumDef:d}),l()}};(f=document.getElementById("wait-back"))==null||f.addEventListener("click",()=>{if(p=!0,clearInterval(m),y)try{y.unsubscribe()}catch{}s("mini-league",{openLeagueId:o}),l()});const x=async()=>{if(p)return;const{data:h}=await v.from("mini_league_matches").select("match_id").eq("id",i).single();h!=null&&h.match_id&&c(h.match_id)},y=v.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},h=>{var _;(_=h.new)!=null&&_.match_id&&c(h.new.match_id)}).subscribe(),m=setInterval(x,3e3);x()})}const rn={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Qt(t,e,i=0){return e?(Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0)+(e===t.job||e===t.job2?i:0):0}async function ls(t,e){t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await To(t,e)}async function To(t,e){var j,T,P,Y,X,M;const{state:i,toast:o,navigate:n}=e;li(n,i.profile,"market","/icons/",o);const{data:r}=await v.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:a}=await v.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),{data:d}=await v.from("cards").select("player_id").eq("owner_id",i.profile.id).eq("card_type","player").not("player_id","is",null),l=new Set((d||[]).map(w=>w.player_id)),{data:s}=await v.from("decks").select("id").eq("owner_id",i.profile.id),p=(s||[]).map(w=>w.id);let c=new Set;if(p.length){const{data:w}=await v.from("deck_cards").select("card:cards(player_id)").in("deck_id",p);c=new Set((w||[]).map(b=>{var E;return(E=b.card)==null?void 0:E.player_id}).filter(Boolean))}const x=(r||[]).filter(w=>w.seller_id!==i.profile.id),y=a||[];t.innerHTML=`
  <style>
    .mkt-buy-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:18px; }
    .mkt-buy-tile { display:flex; flex-direction:column; align-items:center; gap:8px; }
    .mkt-buy-tile .mkt-price { font-size:16px; font-weight:900; color:#D4A017; }
    .mkt-buy-tile .mkt-seller { font-size:10px; color:var(--tile-fg-dim); margin-top:-4px; }
    .mkt-buy-tile button { width:100%; }
  </style>
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:var(--tile-bg);border-bottom:1px solid var(--tile-border)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-top:2px">${x.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
    </div>

    <!-- Onglets -->
    <div style="padding:8px 16px;background:var(--tile-bg);border-bottom:1px solid var(--tile-border);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--tile-border);background:var(--tile-bg);color:var(--tile-fg-dim);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${y.length})</button>
    </div>

    <!-- Filtres (onglet Acheter seulement) -->
    <div id="mkt-filters" style="padding:10px 16px;background:var(--tile-dark-bg);border-bottom:1px solid var(--tile-border);display:flex;flex-wrap:wrap;gap:8px">
      <style>
        /* Le fond des champs était laissé au thème (sombre) alors que la
           bordure suggérait un champ clair : texte et placeholder blancs
           sur fond blanc, donc illisibles. On force ici un champ clair
           avec un texte sombre. */
        #mkt-filters input, #mkt-filters select {
          background: #fff !important;
          color: #1a1a1a !important;
        }
        #mkt-filters input::placeholder { color: #999 !important; }
        .mkt-own-btn { padding:6px 12px;border-radius:20px;font-size:12px;font-weight:700;cursor:pointer;border:1.5px solid #ddd;background:#fff;color:#555 }
        .mkt-own-btn.active { background:var(--green);border-color:var(--green);color:#fff }
      </style>
      <input id="flt-name"    placeholder="🔍 Nom"         style="flex:1;min-width:110px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-club"    placeholder="🏟️ Club"        style="flex:1;min-width:90px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-country" placeholder="🌍 Pays"        style="flex:1;min-width:80px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <!-- Ligne 2 : les 3 menus déroulants côte à côte -->
      <div style="display:flex;gap:8px;width:100%;flex-wrap:wrap">
        <select id="flt-job" style="flex:1;min-width:120px;padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
          <option value="">Tous postes</option>
          <option>GK</option><option>DEF</option><option>MIL</option><option>ATT</option>
        </select>
        <select id="flt-rarity" style="flex:1;min-width:130px;padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
          <option value="">Toutes raretés</option>
          <option value="normal">Normal</option>
          <option value="pepite">Pépite</option>
          <option value="papyte">Papyte</option>
          <option value="legende">Légende</option>
        </select>
        <select id="flt-sort" style="flex:1;min-width:150px;padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
          <option value="">Tri : plus récent</option>
          <option value="note_desc">Note ↓ (plus haute)</option>
          <option value="note_asc">Note ↑ (plus basse)</option>
          <option value="price_asc">Prix ↑ (moins cher)</option>
          <option value="price_desc">Prix ↓ (plus cher)</option>
        </select>
      </div>
      <!-- Ligne 3 : notes + filtres de possession sur la même ligne -->
      <div style="display:flex;gap:8px;width:100%;flex-wrap:wrap;align-items:center">
        <input id="flt-note1" placeholder="★ Note min"   type="number" min="0" max="100" style="width:100px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
        <input id="flt-note2" placeholder="☆ Note 2 min" type="number" min="0" max="100" style="width:110px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
        <button type="button" class="mkt-own-btn active" data-own="">Tous</button>
        <button type="button" class="mkt-own-btn" data-own="owned">🟡 Déjà possédé</button>
        <button type="button" class="mkt-own-btn" data-own="new">✨ Nouveau joueur</button>
        <button type="button" class="mkt-own-btn" data-own="indeck">👥 Présent dans deck</button>
      </div>
    </div>

    <div id="mkt-content" style="padding:10px 16px;display:flex;flex-direction:column;gap:8px"></div>
  </div>`;let m="buy",f="";const h=()=>{var w,b,E,H,S,G,de,I;return{name:(((w=document.getElementById("flt-name"))==null?void 0:w.value)||"").toLowerCase().trim(),club:(((b=document.getElementById("flt-club"))==null?void 0:b.value)||"").toLowerCase().trim(),country:(((E=document.getElementById("flt-country"))==null?void 0:E.value)||"").toLowerCase().trim(),job:((H=document.getElementById("flt-job"))==null?void 0:H.value)||"",rarity:((S=document.getElementById("flt-rarity"))==null?void 0:S.value)||"",sort:((G=document.getElementById("flt-sort"))==null?void 0:G.value)||"",note1:parseInt((de=document.getElementById("flt-note1"))==null?void 0:de.value)||0,note2:parseInt((I=document.getElementById("flt-note2"))==null?void 0:I.value)||0}};function _(w){const b=h(),E=w.filter(S=>{var he,fe,Be;const G=(he=S.card)==null?void 0:he.player;if(!G)return!1;const de=`${G.firstname} ${G.surname_real}`.toLowerCase(),I=(((fe=G.clubs)==null?void 0:fe.encoded_name)||"").toLowerCase(),L=(G.country_code||"").toLowerCase(),Q=((Be=S.card)==null?void 0:Be.evolution_bonus)||0,U=Qt(G,G.job,Q),te=G.job2?Qt(G,G.job2,Q):0;if(b.name&&!de.includes(b.name)||b.club&&!I.includes(b.club)||b.country&&!L.includes(b.country)||b.job&&G.job!==b.job||b.rarity&&G.rarity!==b.rarity||b.note1&&U<b.note1||b.note2&&te<b.note2)return!1;const pe=l.has(G.id);return!(f==="owned"&&!pe||f==="new"&&pe||f==="indeck"&&!c.has(G.id))}),H=S=>{var I,L;const G=(I=S.card)==null?void 0:I.player;if(!G)return 0;const de=((L=S.card)==null?void 0:L.evolution_bonus)||0;return Math.max(Qt(G,G.job,de),G.job2?Qt(G,G.job2,de):0)};return b.sort==="note_desc"?[...E].sort((S,G)=>H(G)-H(S)):b.sort==="note_asc"?[...E].sort((S,G)=>H(S)-H(G)):b.sort==="price_asc"?[...E].sort((S,G)=>S.price-G.price):b.sort==="price_desc"?[...E].sort((S,G)=>G.price-S.price):E}function $(w){var U,te,pe;const b=(U=w.card)==null?void 0:U.player;if(!b)return"";const E=((te=w.card)==null?void 0:te.evolution_bonus)||0,H=(i.profile.credits||0)>=w.price,S=l.has(b.id),G=c.has(b.id),de=qe({...b,_evolution_bonus:E},{width:140,context:"mercato"}),I=S?"font-size:12px;padding:8px 10px;background:linear-gradient(135deg,#D4A017,#f0c040);border:none;color:#1a1a1a;font-weight:900;display:flex;align-items:center;justify-content:center;gap:5px;width:100%":"font-size:12px;padding:8px 10px;display:flex;align-items:center;justify-content:center;gap:5px;width:100%",L=G?'<img src="/icons/nav-decks.png" alt="Dans une de tes équipes" style="width:16px;height:16px;object-fit:contain;flex-shrink:0">':"",Q=[S?"Tu possèdes déjà ce joueur":"",G?"Il est aligné dans une de tes équipes":""].filter(Boolean).join(" · ");return`<div class="mkt-buy-tile">
      ${de}
      <div class="mkt-price">${w.price.toLocaleString("fr")} cr.</div>
      <div class="mkt-seller">Vendeur : ${((pe=w.seller)==null?void 0:pe.pseudo)||"—"}</div>
      <button class="btn btn-primary btn-sm" data-buy="${w.id}" ${H?"":"disabled"} style="${I}" title="${Q}"><span>${H?S?"🟡 Acheter":"Acheter":"Trop cher"}</span>${L}</button>
    </div>`}function g(w){var te,pe,he,fe;const b=(te=w.card)==null?void 0:te.player;if(!b)return"";const E=((pe=w.card)==null?void 0:pe.evolution_bonus)||0,H=Qt(b,b.job,E),S=b.job2?Qt(b,b.job2,E):0,G=w.status==="sold",de=b.country_code?`https://flagsapi.com/${b.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,I=rn[b.job]||"#bbb",L=b.job2?rn[b.job2]||"#bbb":null,Q=b.job==="GK"?"#fff":I,U=b.job2==="GK"?"#fff":L;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${G?"opacity:0.7":""}">
      ${de?`<img src="${de}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(he=b.clubs)!=null&&he.logo_url?`<img src="${b.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${I};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${Q};font-family:Arial Black,Arial">${H}</span>
        </div>
        ${S?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${L};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${U};font-family:Arial Black,Arial">${S}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${b.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.surname_real}</div>
        <div style="font-size:10px;color:${G?"#22c55e":"#999"};margin-top:1px">
          ${G?`✅ Vendu à ${((fe=w.buyer)==null?void 0:fe.pseudo)||"—"} · ${w.sold_at?new Date(w.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(w.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${w.price.toLocaleString("fr")}</div>
        ${G?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${w.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function z(){const w=document.getElementById("mkt-content"),b=document.getElementById("mkt-filters");if(w){if(b.style.display=m==="buy"?"flex":"none",m==="buy"){const E=_(x);w.innerHTML=E.length?`<div class="mkt-buy-grid">${E.map($).join("")}</div>`:'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const E=y.filter(S=>S.status==="active").sort((S,G)=>new Date(G.listed_at)-new Date(S.listed_at)),H=y.filter(S=>S.status==="sold").sort((S,G)=>new Date(G.sold_at||G.listed_at)-new Date(S.sold_at||S.listed_at));w.innerHTML=(E.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${E.length})</div>`+E.map(g).join(""):"")+(H.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${H.length})</div>`+H.map(g).join(""):"")+(!E.length&&!H.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}w.querySelectorAll("[data-buy]").forEach(E=>E.addEventListener("click",()=>ds(E.dataset.buy,x,t,e))),w.querySelectorAll("[data-cancel]").forEach(E=>E.addEventListener("click",()=>us(E.dataset.cancel,t,e)))}}if(t.querySelectorAll(".mkt-tab").forEach(w=>{w.addEventListener("click",()=>{m=w.dataset.tab,t.querySelectorAll(".mkt-tab").forEach(b=>{const E=b===w;b.style.background=E?"var(--green)":"var(--tile-bg)",b.style.color=E?"#fff":"var(--tile-fg-dim)",b.style.borderColor=E?"var(--green)":"var(--tile-border)"}),z()})}),(T=(j=e.state)==null?void 0:j.params)!=null&&T.search||(Y=(P=e.state)==null?void 0:P.params)!=null&&Y.club||(M=(X=e.state)==null?void 0:X.params)!=null&&M.country){const w=document.getElementById("flt-name"),b=document.getElementById("flt-club"),E=document.getElementById("flt-country");w&&e.state.params.search&&(w.value=e.state.params.search),b&&e.state.params.club&&(b.value=e.state.params.club),E&&e.state.params.country&&(E.value=e.state.params.country),e.state.params={},z()}let u;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-sort","flt-note1","flt-note2"].forEach(w=>{var b,E;(b=document.getElementById(w))==null||b.addEventListener("input",()=>{clearTimeout(u),u=setTimeout(z,250)}),(E=document.getElementById(w))==null||E.addEventListener("change",()=>{clearTimeout(u),u=setTimeout(z,100)})}),t.querySelectorAll(".mkt-own-btn").forEach(w=>{w.addEventListener("click",()=>{f=w.dataset.own||"",t.querySelectorAll(".mkt-own-btn").forEach(b=>b.classList.toggle("active",b===w)),z()})}),z()}async function ds(t,e,i,o){const{state:n,toast:r,refreshProfile:a}=o,d=e.find(p=>p.id===t);if(!d)return;const l=d.price;if((n.profile.credits||0)<l){r("Crédits insuffisants","error");return}ps(d,async()=>{var x,y;const{error:p}=await v.rpc("buy_market_card",{p_listing_id:t,p_buyer_id:n.profile.id});if(p){r("Erreur achat : "+p.message,"error");return}await a();const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(n.profile.credits||0).toLocaleString("fr")}`),r("✅ Carte achetée !","success"),await cs(n.profile.id,(y=(x=d.card)==null?void 0:x.player)==null?void 0:y.id,r),await To(i,o)})}async function cs(t,e,i){if(!e)return;const{data:o}=await v.from("deck_cards").select("id, deck_id, decks!inner(owner_id)").eq("wanted_player_id",e).eq("decks.owner_id",t);if(!(o!=null&&o.length))return;const{data:n}=await v.from("cards").select("id").eq("owner_id",t).eq("player_id",e).eq("card_type","player").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!n)return;const{error:r}=await v.from("deck_cards").update({card_id:n.id,wanted_player_id:null}).in("id",o.map(a=>a.id));!r&&o.length&&(i==null||i(`🔄 ${o.length} deck(s) complété(s) avec ce joueur`,"success"))}function ps(t,e){var a;const i=(a=t.card)==null?void 0:a.player,o=i?`${i.firstname} ${i.surname_real}`:"cette carte",n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",n.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${o} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${t.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(n);const r=d=>{n.remove(),d&&e()};n.querySelector("#buy-cancel").addEventListener("click",()=>r(!1)),n.querySelector("#buy-ok").addEventListener("click",()=>r(!0)),n.addEventListener("click",d=>{d.target===n&&r(!1)})}async function us(t,e,i){const{toast:o}=i,{data:n}=await v.from("market_listings").select("card_id").eq("id",t).single();if(await v.from("market_listings").update({status:"cancelled"}).eq("id",t),n!=null&&n.card_id){const{count:r}=await v.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",n.card_id).eq("status","active");r||await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",n.card_id)}o("Annonce retirée","success"),To(e,i)}async function fs(t,e){var y,m,f,h,_;const{state:i,navigate:o}=e,n=((m=(y=e==null?void 0:e.state)==null?void 0:y.params)==null?void 0:m.tab)||"ranked";t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:r},{data:a},{data:d}]=await Promise.all([v.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").order("mmr",{ascending:!1}).limit(100),v.rpc("get_mini_league_leaderboard"),v.rpc("get_random_leaderboard")]);let l=n;const s=$=>$<3?["#D4A017","#a0a0a0","#cd7f32"][$]:"var(--green)",p=$=>$<3?"#000":"#fff";function c(){var z,u,j;const $=document.getElementById("rankings-legend");$&&($.innerHTML=l==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const g=document.getElementById("rankings-list");if(g){if(l==="ranked"){const T=r||[];g.innerHTML=T.length>0?T.map((P,Y)=>{const X=Lt(P.mmr??450),M=Bi(P.mmr??450,X),w=X.label+(M?" "+M:""),b=(P.ranked_wins||0)+(P.ranked_losses||0)+(P.ranked_draws||0),E=b>0?Math.round((P.ranked_wins||0)/b*100):0,H=P.id===i.profile.id,S=(P.placement_matches||0)<10;return`
          <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${H?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${Y<3?["#D4A017","#a0a0a0","#cd7f32"][Y]:"rgba(255,255,255,0.08)"};color:${Y<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${Y<3?"16":"13"}px">${Y<3?["🥇","🥈","🥉"][Y]:Y+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${X.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${P.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${P.club_name}${S?"":` · ${E}% WR`}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:13px;font-weight:900;letter-spacing:0.3px;color:${X.color};white-space:nowrap">${S?"❓ Placement":w.toUpperCase()}</div>
              ${S?"":`<div style="font-size:11px;color:var(--tile-fg-dim);margin-top:1px">${(P.mmr??450).toLocaleString("fr")} MMR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(l==="mini-league"){const T=a||[];g.innerHTML=T.length>0?T.map((P,Y)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${P.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(Y)};color:${p(Y)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${Y<3?"16":"13"}px">${Y<3?["🥇","🥈","🥉"][Y]:Y+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${P.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${P.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${P.top1} 🥈${P.top2} 🥉${P.top3}</div>
            <div style="color:var(--tile-fg-dim)">${P.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const T=d||[];g.innerHTML=T.length>0?T.map((P,Y)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${P.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(Y)};color:${p(Y)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${Y<3?"16":"13"}px">${Y<3?["🥇","🥈","🥉"][Y]:Y+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${P.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${P.club_name}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:16px;font-weight:900;color:#D4A017" title="Score de classement — tient compte du nombre de matchs joués">📊 ${P.wilson_score}</div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">${P.wins}/${P.total} V</div>
            <div style="font-size:9px;color:var(--green);font-weight:700;margin-top:2px">${P.win_pct}%</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}(z=document.getElementById("tab-ranked"))!=null&&z.style&&(document.getElementById("tab-ranked").style.cssText=x(l==="ranked")),(u=document.getElementById("tab-mini-league"))!=null&&u.style&&(document.getElementById("tab-mini-league").style.cssText=x(l==="mini-league")),(j=document.getElementById("tab-random"))!=null&&j.style&&(document.getElementById("tab-random").style.cssText=x(l==="random"))}}const x=$=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${$?"900":"400"};background:${$?"var(--green)":"rgba(255,255,255,0.06)"};color:${$?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-ranked" style="${x(l==="ranked")}">⚔️ Ranked</button>
        <button id="tab-mini-league" style="${x(l==="mini-league")}">🏆 Mini Leagues</button>
        <button id="tab-random" style="${x(l==="random")}">🎲 Random</button>
      </div>
      <div id="rankings-legend"></div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,c(),(f=document.getElementById("tab-ranked"))==null||f.addEventListener("click",()=>{l="ranked",c()}),(h=document.getElementById("tab-mini-league"))==null||h.addEventListener("click",()=>{l="mini-league",c()}),(_=document.getElementById("tab-random"))==null||_.addEventListener("click",()=>{l="random",c()})}async function ms(t,e){var Y,X,M,w;const{state:i,navigate:o,toast:n}=e,r=i.profile;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:d}]=await Promise.all([v.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),v.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",r.id).single()]);if(!d){n("Erreur chargement profil","error"),o("home");return}if(!a){const b=d.mmr??450,E=Lt(b);oo(b);const H=Math.round(450+(b-450)*.5),S=Lt(H),{data:G}=await v.from("users").select("id, pseudo, club_name, mmr, rank_tier").order("mmr",{ascending:!1}).limit(100),de=(G||[]).findIndex(I=>I.id===d.id)+1;t.innerHTML=`
    <div style="min-height:100%;background:linear-gradient(160deg,#1a1a1a,#2a2a2a);padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">
      <div style="display:flex;align-items:center;gap:10px">
        <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
        <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
      </div>

      <div style="text-align:center;padding:12px 0">
        <div style="font-size:44px">⏸️</div>
        <div style="font-size:18px;font-weight:900;color:#fff;margin-top:6px">Ranked en pause</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);max-width:280px;margin:6px auto 0">Aucune saison n'est active pour le moment. Revenez bientôt !</div>
      </div>

      <!-- Ton classement actuel -->
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;text-align:center;border:2px solid ${E.color}40">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Ton classement</div>
        <div style="font-size:44px;margin-bottom:2px">${E.emoji}</div>
        <div style="font-size:18px;font-weight:900;color:${E.color};letter-spacing:2px;text-transform:uppercase">${E.label}</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px">MMR ${b} ${de?`· #${de} au classement général`:""}</div>
      </div>

      <!-- Top 100 -->
      <div>
        <div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:8px">🏆 Classement général — Top 100</div>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto">
          ${(G||[]).map((I,L)=>{const Q=Lt(I.mmr??450),U=I.id===d.id;return`<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:10px;
              background:${U?"rgba(212,160,23,0.15)":"rgba(0,0,0,0.25)"};
              border:1px solid ${U?"#D4A017":"transparent"}">
              <div style="width:26px;text-align:center;font-size:12px;font-weight:900;color:rgba(255,255,255,0.5)">#${L+1}</div>
              <div style="font-size:18px">${Q.emoji}</div>
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.pseudo}</div>
                <div style="font-size:10px;color:rgba(255,255,255,0.4)">${I.club_name||"—"}</div>
              </div>
              <div style="font-size:13px;font-weight:900;color:${Q.color}">${I.mmr??450}</div>
            </div>`}).join("")||'<div style="text-align:center;color:rgba(255,255,255,0.4);font-size:12px;padding:16px">Aucun classement disponible.</div>'}
        </div>
      </div>

      <!-- Aperçu saison suivante -->
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;border:1.5px dashed rgba(255,255,255,0.2)">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;text-align:center">📅 Aperçu — prochaine saison</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:24px">
          <div style="text-align:center;opacity:.6">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Actuel</div>
            <div style="font-size:24px">${E.emoji}</div>
            <div style="font-size:12px;font-weight:700;color:${E.color}">${b}</div>
          </div>
          <div style="font-size:20px;color:rgba(255,255,255,0.3)">→</div>
          <div style="text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Recalculé</div>
            <div style="font-size:28px">${S.emoji}</div>
            <div style="font-size:14px;font-weight:900;color:${S.color}">${H}</div>
          </div>
        </div>
        <div style="font-size:11px;color:rgba(255,255,255,0.35);text-align:center;margin-top:10px">Ton MMR est recalculé vers la moyenne à chaque nouvelle saison, pour repartir sur des bases équilibrées.</div>
      </div>
    </div>`,(Y=document.getElementById("ranked-back"))==null||Y.addEventListener("click",()=>o("home"));return}const l=d.mmr??450,s=d.mmr_deviation??350,p=d.mmr_volatility??.06,c=d.placement_matches??0,x=c<10,y=Math.max(0,10-c),m=Lt(l),f=oo(l),h=Bi(l,m),_=m.label+(h?" "+h:""),$=Po.findIndex(b=>b.id===m.id),g=Po[$+1]||null,z=m.id==="master"?"master":`${m.id}_${h}`,u={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},j=(d.ranked_wins||0)+(d.ranked_losses||0)+(d.ranked_draws||0),T=j>0?Math.round((d.ranked_wins||0)/j*100):0,P=Qn.map(b=>{const E=b.key===z,H=b.division==="III"||b.division===null;return`
    <div ${E?'data-current-tier="true"':""} style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:4px;opacity:${E?1:.45};
      transform:${E?"scale(1.15)":"scale(1)"};transition:all 0.3s;min-width:${H?"60px":"46px"}">
      <div style="font-size:${E?"34px":H?"26px":"17px"}">${H?b.emoji:"●"}</div>
      <div style="font-size:${E?"13px":"11px"};color:${b.color};font-weight:${E?"900":"600"};letter-spacing:0.4px;white-space:nowrap">${b.division?b.division:b.label.toUpperCase()}</div>
    </div>`}).join("");t.innerHTML=`
  <style>
    /* Sur PC, la fenêtre du navigateur offre souvent MOINS de hauteur que
       la hauteur dynamique (100dvh) d'un mobile — le contenu, dimensionné
       pour mobile, débordait donc et forçait un scroll pour voir le bouton
       "Jouer en Ranked". On resserre les espacements verticaux au-delà de
       768px, sans rien changer sur mobile. */
    @media (min-width: 768px) {
      .rk-root      { padding:10px 16px !important; gap:10px !important }
      .rk-tier-band { padding:12px 16px !important }
      .rk-tier-emoji{ font-size:36px !important; margin-bottom:0 !important }
      .rk-tier-label{ font-size:18px !important }
      .rk-progress  { padding:8px 16px !important }
      .rk-tiers-scroll { padding:6px 16px !important }
      .rk-stats-block  { padding:10px !important }
      .rk-play-btn  { padding:13px !important; font-size:16px !important }
      .rk-leader-btn{ padding:9px !important }
      .rk-btns-wrap { gap:6px !important; padding-top:2px !important }
    }
  </style>
  <div class="rk-root" style="min-height:100%;background:${u[m.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px">
      <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
      <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
    </div>

    <!-- Bandeau tier -->
    <div class="rk-tier-band" style="background:rgba(0,0,0,0.35);border-radius:20px;padding:20px 16px;text-align:center;border:2px solid ${m.color}40">
      <div class="rk-tier-emoji" style="font-size:52px;margin-bottom:4px">${m.emoji}</div>
      <div class="rk-tier-label" style="font-size:22px;font-weight:900;color:${m.color};letter-spacing:3px;text-transform:uppercase">${_}</div>
    </div>

    <!-- Progression bar -->
    ${m.id!=="master"?`
    <div class="rk-progress" style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${m.emoji} ${m.label}</span>
        ${g?`<span>${g.emoji} ${g.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${f}%;background:linear-gradient(90deg,${m.color},${m.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${f}% vers ${g?g.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama : 16 échelons, répartis sur toute la largeur (scrollable si ça déborde) -->
    <div id="tiers-scroll" class="rk-tiers-scroll" style="display:flex;justify-content:space-between;align-items:flex-end;gap:10px;padding:10px 16px;overflow-x:auto;scrollbar-width:none">
      ${P}
    </div>

    <!-- Placement / Stats -->
    ${x?`
    <div class="rk-stats-block" style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${c}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${y} match${y>1?"s":""} — gains et pertes ×2</div>
    </div>`:`
    <div class="rk-stats-block" style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#1A6B3C">${d.ranked_wins||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Victoires</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#888">${d.ranked_draws||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Nuls</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#bb2020">${d.ranked_losses||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Défaites</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#D4A017">${T}%</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Win rate</div>
      </div>
    </div>`}

    <!-- Saison info -->
    ${a?`
    <div style="background:rgba(0,0,0,0.25);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:12px;color:rgba(255,255,255,0.6)">📅 ${a.name}</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.4)">Fin : ${new Date(a.end_at).toLocaleDateString("fr",{day:"numeric",month:"short"})}</div>
    </div>`:""}

    <!-- Bouton jouer -->
    <div class="rk-btns-wrap" style="display:flex;flex-direction:column;gap:10px;margin-top:auto;padding-top:8px">
      <button id="ranked-play-btn" class="rk-play-btn" style="width:100%;padding:18px;border-radius:16px;border:none;
        background:linear-gradient(135deg,${m.color},${m.color}99);
        color:#000;font-size:18px;font-weight:900;cursor:pointer;letter-spacing:1px;
        box-shadow:0 4px 20px ${m.color}60;text-transform:uppercase">
        ⚽ Jouer en Ranked
      </button>
      <button id="ranked-leaderboard-btn" class="rk-leader-btn" style="width:100%;padding:12px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.2);
        background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        🏆 Classement Ranked
      </button>
    </div>
  </div>`,(X=document.getElementById("ranked-back"))==null||X.addEventListener("click",()=>o("home")),(M=document.getElementById("ranked-leaderboard-btn"))==null||M.addEventListener("click",()=>o("rankings",{tab:"ranked"})),requestAnimationFrame(()=>{const b=document.getElementById("tiers-scroll"),E=b==null?void 0:b.querySelector("[data-current-tier]");b&&E&&(b.scrollLeft=E.offsetLeft-b.clientWidth/2+E.clientWidth/2)}),(w=document.getElementById("ranked-play-btn"))==null||w.addEventListener("click",()=>{wt(),o("match",{matchMode:"ranked",rankedData:{mmr:l,rd:s,sigma:p,isPlacement:x}})})}async function gs(t,{state:e,navigate:i,toast:o}){const n=e.profile;if(!n)return;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await v.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${n.id},away_id.eq.${n.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(r||[]).filter(p=>p.status==="finished"),l=(r||[]).filter(p=>p.status==="in_progress");function s(p){const c=p.home_id===n.id;c?p.home_score:p.away_score,c?p.away_score:p.home_score;const x=p.winner_id===n.id,y=p.home_score===p.away_score&&p.status==="finished",m=p.status!=="finished"?"…":y?"N":x?"V":"D",f=p.status!=="finished"||y?"#888":x?"#1A6B3C":"#c0392b";let h=a[p.mode]||p.mode;p.away_id===null&&!h.startsWith("IA")&&(h="IA");const $=p.home_id===n.id?p.away:p.home;let g;p.away_id===null?g=h:$?g=`${$.club_name||$.pseudo} (${$.pseudo})`:g="Adversaire";let z="";p.status==="in_progress"&&Date.now()-new Date(p.created_at).getTime()>3600*1e3&&(z=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const u=new Date(p.created_at),j=u.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+u.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),T=p.status==="finished"?`${p.home_score} - ${p.away_score}`:`${p.home_score||0} - ${p.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${g}${z}</div>
        <div style="font-size:11px;color:var(--gray-600)">${h} · ${j}${p.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${T}</span>
        <span style="background:${f};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${m}</span>
      </div>
    </div>`}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(r||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${l.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${l.map(s).join("")}
        </div>`:""}

      ${d.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${d.map(s).join("")}
        </div>`:""}

      ${(r||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}const $e={user:null,profile:null,page:"home",params:{}};function Et(t,e="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=t,o.className=`show ${e}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function bs(t,e,i=""){document.getElementById("modal-title").textContent=t,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i;const o=document.getElementById("modal-overlay");o.style.visibility="",o.classList.remove("hidden")}function go(){const t=document.getElementById("modal-overlay");t.style.visibility="",t.classList.add("hidden")}async function vi(){if(!$e.user)return;const{data:t}=await v.from("users").select("*").eq("id",$e.user.id).single();t&&($e.profile=t)}const Kn="mw_theme";function wi(){return localStorage.getItem(Kn)||"dark"}function an(t){var e;localStorage.setItem(Kn,t),qi(t),(e=$e.profile)!=null&&e.id&&v.from("users").update({theme:t}).eq("id",$e.profile.id).then(()=>{})}function qi(t){var e,i;document.documentElement.setAttribute("data-theme",t),t==="club"&&(document.documentElement.style.setProperty("--club-color1",((e=$e.profile)==null?void 0:e.club_color1)||"#0a0f0a"),document.documentElement.style.setProperty("--club-color2",((i=$e.profile)==null?void 0:i.club_color2)||"#080d08"))}function Ct(t,e={}){$e.page=t,$e.params=e,Vn()}async function Vn(){var o,n,r,a;const t=document.getElementById("page-content");if(!t)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===$e.page)});const e=document.getElementById("nav-credits");e&&$e.profile&&(e.textContent=`💰 ${($e.profile.credits||0).toLocaleString("fr")}`);const i={state:$e,navigate:Ct,toast:Et,openModal:bs,closeModal:go,refreshProfile:vi};switch(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',$e.page){case"home":await Zi(t,i);break;case"home2":await Zi(t,i);break;case"game":await Yr(t,i);break;case"settings":await Dn(t,i);break;case"collection":await ta(t,i);break;case"decks":await lo(t,i);break;case"boosters":await wr(t,i);break;case"ranked":await ms(t,i);break;case"match":{const d=$e.params&&$e.params.matchMode||"vs_ai_easy";d==="random"?await fo(t,i,!1):d==="ranked"?await fo(t,i,!0):d==="friend"?await Ha(t,i,(o=$e.params)==null?void 0:o.friendId,(n=$e.params)==null?void 0:n.friendName):d==="mini_league"||d==="mini-league"?await nn(t,i,(r=$e.params)==null?void 0:r.mlMatchId,(a=$e.params)==null?void 0:a.leagueId):await ga(t,i);break}case"market":await ls(t,i);break;case"rankings":await fs(t,i);break;case"matches":await gs(t,i);break;case"friends":await Ur(t,i);break;case"mini-league":await Wa(t,i);break;case"match-mini-league":{const d=$e.params||{};await nn(t,i,d.mlMatchId,d.leagueId);break}default:await Zi(t,i)}}function xs(){var o,n;const t=document.getElementById("app"),e=$e.profile;if(!e)return;const i="/icons/";t.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.08.15-2027" style="cursor:pointer">
        <img src="${i}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <div id="nav-credits" class="credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button id="journal-btn" title="Journal des mises à jour" style="background:none;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;font-size:22px;opacity:0.8;transition:opacity .15s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.8">
          📰
        </button>
        <button id="settings-btn" title="Réglages" style="background:none;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;font-size:22px;opacity:0.8;transition:opacity .15s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.8">
          ⚙️
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
  `,document.querySelectorAll(".bottom-nav a").forEach(r=>{r.addEventListener("click",a=>{a.preventDefault(),Ct(r.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ct("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ct("boosters")),(o=document.getElementById("journal-btn"))==null||o.addEventListener("click",()=>ys()),(n=document.getElementById("settings-btn"))==null||n.addEventListener("click",()=>Ct("settings"))}async function ys(){const{data:t}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const n=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${o.image_url?`<img src="${o.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${n}</div>
      <div style="font-size:15px;font-weight:900;margin-bottom:6px">${o.title}</div>
      <div style="font-size:13px;color:#444;line-height:1.6;white-space:pre-line">${o.description}</div>
    </div>`}).join("");e.innerHTML=`
    <div style="background:#fff;border-radius:16px;width:100%;max-width:460px;max-height:85vh;display:flex;flex-direction:column;overflow:hidden">
      <div style="display:flex;align-items:center;padding:16px 20px;border-bottom:1px solid #f0f0f0;flex-shrink:0">
        <span style="font-size:22px;margin-right:10px">📰</span>
        <div style="flex:1;font-size:17px;font-weight:900">Journal des mises à jour</div>
        <button id="journal-close" style="background:none;border:none;font-size:22px;cursor:pointer;color:#888;padding:0 4px">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:0 20px">
        ${i||'<div style="padding:40px;text-align:center;color:#aaa">Aucune mise à jour pour le moment.</div>'}
      </div>
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}function vs(t,{onPlay:e}){var o;const i="/icons/";t.style.cssText="",t.innerHTML=`
  <style>
    #public-landing{
      --gold:#D4A017; --ink:#f3f5f2; --ink-dim:rgba(243,245,242,0.65); --ink-faint:rgba(243,245,242,0.42);
      min-height:100vh; box-sizing:border-box;
      background:
        radial-gradient(1100px 700px at 15% -10%, rgba(212,160,23,0.10), transparent 60%),
        radial-gradient(1400px 900px at 85% 10%, rgba(26,107,60,0.35), transparent 55%),
        linear-gradient(180deg, #081308, #0d1a0f 40%, #123018);
      color:var(--ink); font-family:'Inter', system-ui, sans-serif; line-height:1.6;
      display:flex; flex-direction:column; align-items:center; padding:32px 20px 60px;
    }
    #public-landing *{box-sizing:border-box}
    #public-landing .pl-wrap{max-width:640px; width:100%; text-align:center}
    #public-landing .pl-eyebrow{font-weight:700; letter-spacing:0.24em; text-transform:uppercase; font-size:11px; color:var(--gold); margin-bottom:12px}
    #public-landing h1{font-size:clamp(28px,7vw,42px); font-weight:900; line-height:1.05; margin:0 0 16px}
    #public-landing h1 em{font-style:normal; color:var(--gold)}
    #public-landing p.pl-lede{color:var(--ink-dim); font-size:15px; max-width:460px; margin:0 auto 26px}
    #public-landing .pl-btn{
      display:inline-flex; align-items:center; gap:8px; padding:14px 30px; border-radius:999px;
      background:var(--gold); color:#141000; font-weight:700; font-size:15px; border:none; cursor:pointer;
      box-shadow:0 10px 30px -8px rgba(212,160,23,0.55);
    }
    #public-landing .pl-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin:44px 0}
    #public-landing .pl-card{background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:18px; text-align:left}
    #public-landing .pl-card .pl-ico{font-size:20px; margin-bottom:10px}
    #public-landing .pl-card h3{font-size:15px; margin:0 0 6px; color:var(--ink)}
    #public-landing .pl-card p{font-size:13px; color:var(--ink-dim); margin:0}
    #public-landing .pl-foot{margin-top:30px; font-size:13px; color:var(--ink-faint)}
    #public-landing .pl-foot a{color:var(--ink-dim); text-decoration:none; margin:0 10px}
    #public-landing .pl-foot a:hover{color:var(--ink)}
    #public-landing .pl-logo{height:36px; margin-bottom:26px}
    @media (max-width:620px){ #public-landing .pl-grid{grid-template-columns:1fr} }
  </style>
  <div id="public-landing">
    <div class="pl-wrap">
      <img class="pl-logo" src="${i}logo-withname.png" alt="Manager Wars">
      <p class="pl-eyebrow">Jeu de cartes football — gratuit</p>
      <h1>Composez votre onze,<br><em>activez vos liens</em>,<br>gagnez le duel.</h1>
      <p class="pl-lede">Placez vos joueurs sur une grille de formation, activez des bonus de club et de pays entre joueurs adjacents, et affrontez d'autres managers en duel tour par tour.</p>
      <button id="pl-play-btn" class="pl-btn">Jouer maintenant</button>

      <div class="pl-grid">
        <div class="pl-card">
          <div class="pl-ico">🃏</div>
          <h3>Construisez votre deck</h3>
          <p>Collectionnez des joueurs et assemblez votre onze titulaire.</p>
        </div>
        <div class="pl-card">
          <div class="pl-ico">🔗</div>
          <h3>Activez les liens</h3>
          <p>Club ou pays partagé entre joueurs adjacents : bonus garanti.</p>
        </div>
        <div class="pl-card">
          <div class="pl-ico">⚔️</div>
          <h3>Duel tour par tour</h3>
          <p>Attaquez, défendez, et affrontez IA, amis ou inconnus.</p>
        </div>
      </div>

      <div class="pl-foot">
        <a href="/accueil.html">En savoir plus</a>
        <a href="/confidentialite.html">Confidentialité</a>
        <a href="/contact.html">Contact</a>
      </div>
    </div>
  </div>`,(o=t.querySelector("#pl-play-btn"))==null||o.addEventListener("click",e)}async function hs(){qi(wi()),document.getElementById("modal-overlay").addEventListener("click",o=>{o.target===o.currentTarget&&go()}),document.getElementById("modal-close").addEventListener("click",go);const{data:{session:t}}=await v.auth.getSession();if(!t){sn(),vs(document.getElementById("app"),{onPlay:()=>Fo(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Et})});return}$e.user=t.user,await vi(),qi(wi()),sn();try{const{data:o}=await v.from("formation_links_overrides").select("formation, links"),n={};(o||[]).forEach(r=>{n[r.formation]=r.links}),er(n)}catch(o){console.warn("Impossible de charger les overrides de formation:",o)}if(!$e.profile){ir(document.getElementById("app"),{state:$e,navigate:async()=>{await vi(),qi(wi()),io()},toast:Et,refreshProfile:vi});return}v.rpc("heartbeat").then(()=>{}).catch(()=>{}),setInterval(()=>{v.rpc("heartbeat").then(()=>{}).catch(()=>{})},45e3);const e=Array.isArray($e.profile.pending_boosters)?$e.profile.pending_boosters:[];if(!$e.profile.onboarding_done&&e.length>0){Ar(document.getElementById("app"),{state:$e,toast:Et,refreshProfile:vi,navigate:()=>{io(),setTimeout(()=>No($e.profile,Ct,Et),800)}});return}io(),new URLSearchParams(location.search).get("tutorial")==="1"?(history.replaceState({},"",location.pathname),setTimeout(()=>lr($e.profile,Ct,Et),800)):setTimeout(()=>No($e.profile,Ct,Et),800),v.auth.onAuthStateChange(async(o,n)=>{o==="SIGNED_OUT"&&($e.user=null,$e.profile=null,document.getElementById("app").innerHTML="",Fo(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Et}))})}function ws(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Wi(){const t=document.getElementById("app");t&&(t.style.height=ws()+"px")}window.addEventListener("resize",Wi);window.addEventListener("orientationchange",()=>setTimeout(Wi,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Wi);function io(){const t=()=>{var i;(i=$e.user)!=null&&i.id&&v.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",$e.user.id).then(()=>{})};t(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(t,6e4);const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Wi(),xs(),Vn()}function sn(){const t=document.getElementById("app-loader"),e=document.getElementById("app");e&&(e.style.display=""),t&&(t.classList.add("zoom-out"),setTimeout(()=>t.style.display="none",500))}function Wn(t){var o;const e=document.getElementById("app-loader");if(e&&(e.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${t||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(o=document.getElementById("boot-retry"))==null||o.addEventListener("click",()=>window.location.reload())}hs().catch(t=>{console.error("Échec du démarrage:",t),Wn()});setTimeout(()=>{const t=document.getElementById("app-loader");t&&t.style.display!=="none"&&!t.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Wn("Le serveur met trop de temps à répondre.")},12e3);
