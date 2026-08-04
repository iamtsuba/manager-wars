const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/match-shared-ClAg5DBE.js","assets/match-shared-D_M6t_P4.css"])))=>i.map(i=>d[i]);
import{w as Ji,s as x,_ as Ho,x as Uo,F as kt,g as Ct,n as it,k as si,m as Ht,r as qe,j as bt,y as hi,z as Pi,G as Oe,t as Xi,C as Ko,I as Si,p as Qi,J as jt,L as Ii,O as Ri,o as vi,P as wi,Q as ji,U as Ti,V as Ut,W as li,X as St,Y as Vo,Z as di,$ as Qe,a0 as ci,a1 as _t,a2 as ot,a3 as In,a4 as Yo,a5 as Zi,a6 as Tn,a7 as Wo,a8 as It,T as _o,a9 as An,v as Mn,aa as Cn,d as jn}from"./match-shared-ClAg5DBE.js";const qn="/";async function ko(t,{navigate:e,toast:i}){let o="login";const n=await Ji("signup_access_code_required"),r=()=>{var d,l,s,p,c,y,b,m;const a=o==="login";if(t.innerHTML=`
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
        <img src="${qn}icons/logo-withname.png" alt="Manager Wars" style="height:44px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(d=document.getElementById("tab-login-btn"))==null||d.addEventListener("click",()=>{o="login",r()}),(l=document.getElementById("tab-reg-btn"))==null||l.addEventListener("click",()=>{o="register",r()}),a){(s=document.getElementById("login-password"))==null||s.addEventListener("keydown",g=>{var $;g.key==="Enter"&&(($=document.getElementById("login-btn"))==null||$.click())});let f=null,h=!1;n&&((p=document.getElementById("login-access-code"))==null||p.addEventListener("input",g=>{const $=g.target.value,v=document.getElementById("login-access-code-status"),I=document.getElementById("login-btn");if(clearTimeout(f),h=!1,I&&(I.disabled=!0,I.style.opacity="0.45",I.style.cursor="not-allowed"),!$){v&&(v.textContent="");return}v&&(v.textContent="⏳ Vérification…",v.style.color="rgba(255,255,255,0.4)"),f=setTimeout(async()=>{const{data:u,error:E}=await x.rpc("check_signup_password",{input_password:$});if(E){v&&(v.textContent="Erreur de vérification.",v.style.color="#f87171");return}h=!!u,v&&(v.textContent=h?"✅ Code valide":"❌ Code incorrect",v.style.color=h?"#4ade80":"#f87171"),I&&(I.disabled=!h,I.style.opacity=h?"1":"0.45",I.style.cursor=h?"pointer":"not-allowed")},400)})),(c=document.getElementById("login-btn"))==null||c.addEventListener("click",async()=>{var _;const g=document.getElementById("login-email").value.trim(),$=document.getElementById("login-password").value,v=((_=document.getElementById("login-access-code"))==null?void 0:_.value)||"",I=document.getElementById("login-error");if(I.textContent="",!g||!$){I.textContent="Remplissez tous les champs.";return}if(n){const{data:z}=await x.rpc("check_signup_password",{input_password:v});if(!z){I.textContent="Code d'accès incorrect.";return}}const u=document.getElementById("login-btn");u.textContent="⏳ Connexion…",u.disabled=!0;const{error:E}=await x.auth.signInWithPassword({email:g,password:$});if(u.textContent="⚽ Se connecter",u.disabled=!1,E){I.textContent=E.message.includes("Invalid")?"Email ou mot de passe incorrect.":E.message;return}window.location.reload()})}else{(y=document.getElementById("reg-confirm"))==null||y.addEventListener("keydown",g=>{var $;g.key==="Enter"&&(($=document.getElementById("reg-btn"))==null||$.click())});let f=null,h=!1;n&&((b=document.getElementById("reg-access-code"))==null||b.addEventListener("input",g=>{const $=g.target.value,v=document.getElementById("access-code-status"),I=document.getElementById("reg-btn");if(clearTimeout(f),h=!1,I&&(I.disabled=!0,I.style.opacity="0.45",I.style.cursor="not-allowed"),!$){v&&(v.textContent="");return}v&&(v.textContent="⏳ Vérification…",v.style.color="rgba(255,255,255,0.4)"),f=setTimeout(async()=>{const{data:u,error:E}=await x.rpc("check_signup_password",{input_password:$});if(E){v&&(v.textContent="Erreur de vérification.",v.style.color="#f87171");return}h=!!u,v&&(v.textContent=h?"✅ Code valide":"❌ Code incorrect",v.style.color=h?"#4ade80":"#f87171"),I&&(I.disabled=!h,I.style.opacity=h?"1":"0.45",I.style.cursor=h?"pointer":"not-allowed")},400)})),(m=document.getElementById("reg-btn"))==null||m.addEventListener("click",async()=>{var G;const g=document.getElementById("reg-email").value.trim(),$=document.getElementById("reg-password").value,v=document.getElementById("reg-confirm").value,I=((G=document.getElementById("reg-access-code"))==null?void 0:G.value)||"",u=document.getElementById("reg-error");if(u.textContent="",!g||!$||!v){u.textContent="Remplissez tous les champs.";return}if(!g.includes("@")||!g.includes(".")){u.textContent="Adresse email invalide.";return}if($.length<6){u.textContent="Mot de passe trop court (min. 6 caractères).";return}if($!==v){u.textContent="Les mots de passe ne correspondent pas.";return}if(n){const{data:W}=await x.rpc("check_signup_password",{input_password:I});if(!W){u.textContent="Code d'accès incorrect.";return}}const E=document.getElementById("reg-btn");E.textContent="⏳ Création…",E.disabled=!0;const{data:_,error:z}=await x.auth.signUp({email:g,password:$});if(E.textContent="🚀 Créer mon compte",E.disabled=!1,z){z.message.includes("already registered")||z.message.includes("already exists")||z.message.includes("User already")?u.textContent="Un compte existe déjà avec cette adresse email.":u.textContent=z.message;return}if(_!=null&&_.user&&Array.isArray(_.user.identities)&&_.user.identities.length===0){u.textContent="Un compte existe déjà avec cette adresse email.";return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),o="login",r(),setTimeout(()=>{const W=document.getElementById("login-email");W&&(W.value=g)},50)})}};r()}function Bn(t,{state:e,navigate:i,toast:o,refreshProfile:n}){let r="#1A6B3C",a="#D4A017";t.innerHTML=`
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
  `;function d(){var m;const s=document.getElementById("logo-preview"),p=document.getElementById("logo-initials"),c=((m=document.getElementById("setup-club"))==null?void 0:m.value)||"MW",y=c.trim().split(" ").filter(Boolean),b=y.length>=2?(y[0][0]+y[1][0]).toUpperCase():c.slice(0,2).toUpperCase();s&&(s.style.background=a,s.style.borderColor=r),p&&(p.textContent=b,p.style.color=r)}document.getElementById("color1").addEventListener("input",s=>{r=s.target.value,document.getElementById("swatch1").style.background=r,d()}),document.getElementById("color2").addEventListener("input",s=>{a=s.target.value,document.getElementById("swatch2").style.background=a,d()});function l(s){document.querySelectorAll(".setup-step").forEach(p=>p.classList.remove("active")),document.getElementById(`step-${s}`).classList.add("active"),document.getElementById("step-num").textContent=s,document.getElementById("progress-fill").style.width=`${Math.round(s/3*100)}%`,s===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),p=document.getElementById("step1-error");if(p.textContent="",s.length<3){p.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:c}=await x.from("users").select("id").eq("pseudo",s).maybeSingle();if(c){p.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const s=document.getElementById("setup-club").value.trim(),p=document.getElementById("step2-error");if(p.textContent="",s.length<2){p.textContent="Nom trop court (min. 2 caractères).";return}const{data:c}=await x.from("users").select("id").eq("club_name",s).maybeSingle();if(c){p.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),p=document.getElementById("setup-club").value.trim(),c=document.getElementById("step3-error"),y=document.getElementById("step3-finish");c.textContent="",y.disabled=!0,y.textContent="Création en cours…";try{const{error:b}=await x.from("users").insert({id:e.user.id,pseudo:s,club_name:p,club_color1:r,club_color2:a,credits:15e3});if(b)throw b;await Dn(e.user.id),await n(),o(`Bienvenue ${s} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(b){c.textContent=b.message,y.disabled=!1,y.textContent="🚀 Créer mon profil !"}})}async function Dn(t){const e=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1},{type:"stadium",count:1}];try{await x.from("users").update({pending_boosters:e,onboarding_done:!1,first_booster_opened:!1}).eq("id",t)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Jo="mw_sound_volume";function eo(){const t=localStorage.getItem(Jo);if(t===null)return 100;const e=parseInt(t,10);return Number.isFinite(e)?Math.max(0,Math.min(100,e)):100}function Fn(t){localStorage.setItem(Jo,String(Math.max(0,Math.min(100,Math.round(t)))))}function to(){return eo()===0}function _i(t){return Math.max(0,Math.min(1,t*(eo()/100)))}function io(t,e=1){if(to())return null;try{const i=new Audio(t);return i.volume=_i(e),i.play().catch(()=>{}),i}catch{return null}}let xt=null,Ni=null,$o=.3;function Xo(t,e=.3){if($o=e,xt&&Ni===t&&!xt.paused){xt.volume=_i($o);return}if(Gt(),!to())try{const i=new Audio(t);i.loop=!0,i.volume=_i(e),i.play().catch(()=>{}),xt=i,Ni=t}catch{}}function Gt(){if(xt)try{xt.pause(),xt.currentTime=0}catch{}xt=null,Ni=null}let ti=null;function Qo(t,e=.6){if(Ke(),!to())try{const i=new Audio(t);i.volume=_i(e),i.play().catch(()=>{}),ti=i}catch{}}function Ke(){if(ti)try{ti.pause(),ti.currentTime=0}catch{}ti=null}async function Zo(t=null){const e=new Date().toISOString().slice(0,10),{data:i}=await x.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const o=i.filter(a=>!(a.available_from&&e<a.available_from||a.available_until&&e>a.available_until));if(!o.length)return[];let n=o;if(t){const a=o.filter(d=>d.max_per_user!=null);if(a.length){const{data:d}=await x.from("booster_claims").select("booster_id").eq("user_id",t).in("booster_id",a.map(s=>s.id)),l={};(d||[]).forEach(s=>{l[s.booster_id]=(l[s.booster_id]||0)+1}),n=o.filter(s=>s.max_per_user==null?!0:(l[s.id]||0)<s.max_per_user)}}if(!n.length)return[];const{data:r}=await x.from("booster_drop_rates").select("*").in("booster_id",n.map(a=>a.id)).order("sort_order");return n.map(a=>({...a,rates:(r||[]).filter(d=>d.booster_id===a.id)}))}async function Pn(t,e){const{data:i}=await x.from("booster_configs").select("max_per_user").eq("id",e).single();i!=null&&i.max_per_user&&await x.from("booster_claims").insert({user_id:t,booster_id:e})}function Rn(t){if(!(t!=null&&t.length))return null;const e=t.reduce((o,n)=>o+Number(n.percentage),0);let i=Math.random()*e;for(const o of t)if(i-=Number(o.percentage),i<=0)return o;return t[t.length-1]}const en=()=>Object.keys(kt),Nn=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Gi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Gn(t){const e=t.player;if(!e)return"";const i=t.evolution_bonus||0;return qe({...e,_evolution_bonus:i},{width:140})}function oo(t){var n;const e={};(t.rates||[]).forEach(r=>{e[r.card_type]=(e[r.card_type]||0)+Number(r.percentage||0)});const i=((n=Object.entries(e).sort((r,a)=>a[1]-r[1])[0])==null?void 0:n[0])||"player",o=t.image_url||"booster-players.png";return{id:t.id,img:"/icons/"+o,name:t.name,sub:`${t.card_count} carte(s)`,cost:t.price_type==="credits"&&t.price_credits||0,costLabel:t.price_type==="credits"?`${(t.price_credits||0).toLocaleString("fr")} crédits`:t.price_type==="pub"?"1 pub":"Gratuit",cardCount:t.card_count||5,type:i,isPub:t.price_type==="pub",rates:t.rates||[],allow_duplicates:t.allow_duplicates!==!1,_boosterId:t.id,_raw:t}}async function On(t,e,i,o){if(t.reward_type==="credits"){const n=(e.credits||0)+(t.credits_amount||0),{error:r}=await x.from("users").update({credits:n}).eq("id",e.id);if(r)throw r;return e.credits=n,{type:"credits",amount:t.credits_amount}}if(t.reward_type==="card"){const{data:n}=await x.from("players").select("firstname, surname_real, rarity").eq("id",t.player_id).single(),{error:r}=await x.from("cards").insert({owner_id:e.id,player_id:t.player_id,card_type:"player"});if(r)throw r;return{type:"card",player:n}}if(t.reward_type==="booster"){const{data:n}=await x.from("booster_configs").select("*").eq("id",t.booster_config_id).single(),{data:r}=await x.from("booster_drop_rates").select("*").eq("booster_id",t.booster_config_id);if(!n)throw new Error("Booster introuvable (peut-être supprimé depuis).");const a=oo({...n,rates:r});let d=[];return a.type==="formation"?d=await ao(e,0):a.type==="game_changer"?d=await ro(e,a.cardCount,0):a.type==="player"?d=await no(e,a.cardCount,0):d=await ki(e,{...a,cost:0}),{type:"booster",name:n.name,cards:d,boosterUI:a}}throw new Error("Type de récompense inconnu.")}async function Hn(t,{state:e,navigate:i,toast:o}){var c,y,b;Vt(i,e.profile,"boosters","/icons/",o);const n=((c=e.profile)==null?void 0:c.credits)||0;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let r=[];try{r=(await Zo((y=e.user)==null?void 0:y.id)).map(oo)}catch(m){console.warn("Erreur chargement boosters DB, fallback hardcodé",m)}r.length||(r=Nn.map(m=>({...m,rates:[],isPub:m.id==="players_pub"})));const a=await x.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.profile.id).then(m=>m.data||[]),d=new Set(a.filter(m=>m.card_type==="stadium").map(m=>m.stadium_id)),l=new Set(a.filter(m=>m.card_type==="formation").map(m=>m.formation)),s=new Set(a.filter(m=>m.card_type==="game_changer").map(m=>m.gc_type)),p={};for(const m of r){if(m.allow_duplicates!==!1||!((b=m.rates)!=null&&b.length))continue;const f=[...new Set((m.rates||[]).map(g=>g.card_type))];let h=!1;for(const g of f)if(g==="stadium"){const{data:$}=await x.from("stadium_definitions").select("id");if(($||[]).some(v=>!d.has(v.id))){h=!0;break}}else if(g==="game_changer"){const{data:$}=await x.from("gc_definitions").select("name").eq("is_active",!0);if(($||[]).some(v=>!s.has(v.name))){h=!0;break}}else if(g==="formation"){const{FORMATION_LINKS:$}=await Ho(async()=>{const{FORMATION_LINKS:v}=await import("./match-shared-ClAg5DBE.js").then(I=>I.ab);return{FORMATION_LINKS:v}},__vite__mapDeps([0,1]));if(Object.keys($).some(v=>!l.has(v))){h=!0;break}}else{h=!0;break}h||(p[m.id]=!0)}t.innerHTML=`
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
  </div>`,t.querySelectorAll(".booster-card:not(.disabled)").forEach(m=>{m.addEventListener("click",async()=>{const f=r.find(h=>h.id===m.dataset.booster);if(f){m.style.opacity="0.5",m.style.pointerEvents="none";try{await tn(f,{state:e,toast:o,navigate:i,container:t})}catch(h){o(h.message,"error"),m.style.opacity="",m.style.pointerEvents=""}}})}),t.querySelectorAll(".booster-info-btn").forEach(m=>{m.addEventListener("click",f=>{f.stopPropagation();const h=r.find(g=>g.id===m.dataset.boosterId);Wn(h)})})}async function tn(t,{state:e,toast:i,navigate:o,container:n}){var c,y,b;if(t.cost>0&&e.profile.credits<t.cost){i("Crédits insuffisants","error");return}if(t._boosterId){const m=((c=t._raw)==null?void 0:c.max_per_user)??null;if(m!=null){const{count:f}=await x.from("booster_claims").select("id",{count:"exact",head:!0}).eq("user_id",e.user.id).eq("booster_id",t._boosterId);if((f||0)>=m){i(`Quota atteint pour ce booster (${m} max.)`,"error");return}}}if(t.isPub){if(!await Ji("pub_mode")){Uo();return}await Xn()}const{data:r}=await x.from("cards").select("card_type, player_id, formation").eq("owner_id",e.profile.id),a=new Set((r||[]).filter(m=>m.card_type==="player").map(m=>m.player_id)),d=new Set((r||[]).filter(m=>m.card_type==="formation").map(m=>m.formation));let l=[],s=null;try{if((y=t.rates)!=null&&y.length)l=await ki(e.profile,t);else{const m=t.type||"player";m==="player"?l=await no(e.profile,t.cardCount,t.cost):m==="game_changer"?l=await ro(e.profile,t.cardCount,t.cost):m==="formation"?l=await ao(e.profile,t.cost):l=await ki(e.profile,t)}}catch(m){s=m.message||String(m),console.error("[Booster] Erreur:",m)}if(l!=null&&l.length&&t._boosterId&&await Pn(e.user.id,t._boosterId),!(l!=null&&l.length)){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",m.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${s||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(m),(b=m.querySelector("#anim-close-err"))==null||b.addEventListener("click",()=>m.remove());return}l.forEach(m=>{m.card_type==="player"&&m.player?m.isDuplicate=a.has(m.player.id):m.card_type==="formation"&&(m.isDuplicate=d.has(m.formation))});const{data:p}=await x.from("users").select("*").eq("id",e.profile.id).single();p&&(e.profile=p),on(e.profile.id,t,l),so(l,t,o,null,{state:e,toast:i,container:n})}function Un(){const t=Math.random()*100;return t<.5?"legende":t<2?"special":t<10?"normal_high":"normal_low"}function gt(t){return Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Kn(t,e){let i;switch(e){case"legende":i=t.filter(o=>o.rarity==="legende"),i.length||(i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=t.filter(o=>gt(o)>=6));break;case"special":i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=t.filter(o=>gt(o)>=6));break;case"normal_high":i=t.filter(o=>o.rarity==="normal"&&gt(o)>=6),i.length||(i=t.filter(o=>gt(o)>=6));break;default:i=t.filter(o=>o.rarity==="normal"&&gt(o)>=1&&gt(o)<=5),i.length||(i=t.filter(o=>o.rarity==="normal"));break}return i.length||(i=t),i[Math.floor(Math.random()*i.length)]}async function ki(t,e){if(e.cost>0){const{error:y}=await x.from("users").update({credits:t.credits-e.cost}).eq("id",t.id);if(y)throw y;t.credits-=e.cost,Yt(t.credits)}const i=e.allow_duplicates!==!1;let o=[];const{data:n,error:r}=await x.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.id);if(r){const{data:y}=await x.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",t.id);o=y||[]}else o=n||[];const a=new Set(o.filter(y=>y.card_type==="player").map(y=>y.player_id)),d=new Set(o.filter(y=>y.card_type==="formation").map(y=>y.formation)),l=new Set(o.filter(y=>y.card_type==="game_changer").map(y=>y.gc_type)),s=new Set(o.filter(y=>y.card_type==="stadium").map(y=>y.stadium_id).filter(Boolean)),p=new Set,c=[];for(let y=0;y<(e.cardCount||5);y++){const b=Rn(e.rates);if(b){if(b.card_type==="player"){const m=_=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[_]||_,f=b.rarity?m(b.rarity):null;let h=x.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);f&&(h=h.eq("rarity",f));const{data:g}=await h;let $=g||[];if((b.note_min||b.note_max)&&($=$.filter(_=>{const z=Math.max(Number(_.note_g)||0,Number(_.note_d)||0,Number(_.note_m)||0,Number(_.note_a)||0);return(!b.note_min||z>=b.note_min)&&(!b.note_max||z<=b.note_max)})),$.length||(b.note_min||b.note_max?($=g||[],console.warn("[Booster] Aucun joueur avec note",b.note_min,"-",b.note_max,"— fallback rareté uniquement")):$=g||[]),!$.length)continue;let v=$.filter(_=>!p.has(_.id));if(i)v.length||(v=$);else if(v=v.filter(_=>!a.has(_.id)),!v.length)continue;const I=v[Math.floor(Math.random()*v.length)];p.add(I.id);const u=a.has(I.id),{data:E}=await x.from("cards").insert({owner_id:t.id,player_id:I.id,card_type:"player"}).select().single();E&&(c.push({...E,player:I,isDuplicate:u}),x.rpc("record_transfer",{p_card_id:E.id,p_player_id:I.id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(b.card_type==="game_changer"){const{data:m}=await x.from("gc_definitions").select("id,name,color,effect,image_url,gc_type").eq("is_active",!0).eq("gc_type","game_changer"),f=m!=null&&m.length?m:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],h=i?f:f.filter(I=>!l.has(I.name));if(!i&&!h.length)continue;const g=h[Math.floor(Math.random()*h.length)],$=g.name,{data:v}=await x.from("cards").insert({owner_id:t.id,card_type:"game_changer",gc_type:$,gc_definition_id:g.id||null}).select().single();v&&c.push({...v,_gcDef:g})}else if(b.card_type==="formation"){const m=en(),f=i?m:m.filter(v=>!d.has(v));if(!i&&!f.length)continue;const h=f[Math.floor(Math.random()*f.length)],g=d.has(h),{data:$}=await x.from("cards").insert({owner_id:t.id,card_type:"formation",formation:h}).select();$!=null&&$[0]&&c.push({...$[0],isDuplicate:g})}else if(b.card_type==="stadium"){const{data:m,error:f}=await x.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(f){console.error("[Booster] stadium_definitions:",f.message);continue}if(!(m!=null&&m.length)){console.warn("[Booster] Aucun stade en DB");continue}const h=i?m:m.filter(I=>!s.has(I.id));if(!i&&!h.length)continue;const g=h[Math.floor(Math.random()*h.length)],{data:$,error:v}=await x.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:g.id}).select("id,card_type,stadium_id").single();if(v){console.error("[Booster] insert stadium card:",v.message);continue}$&&c.push({...$,rarity:"normal",_stadiumDef:g})}}}return c}async function no(t,e,i){if(i>0){const{error:s}=await x.from("users").update({credits:t.credits-i}).eq("id",t.id);if(s)throw s;t.credits-=i,Yt(t.credits)}const{data:o}=await x.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const n=o.filter(s=>s.job==="GK"),r=o.filter(s=>s.job!=="GK"),a=!t.first_booster_opened&&n.length>0,d=[];for(let s=0;s<e;s++){const p=s===0&&a?n:s===0?r:o,c=Un(),y=Kn(p,c);y&&d.push(y)}a&&await x.from("users").update({first_booster_opened:!0}).eq("id",t.id);const{data:l}=await x.from("cards").insert(d.map(s=>({owner_id:t.id,player_id:s.id,card_type:"player"}))).select();return(l||[]).forEach((s,p)=>{x.rpc("record_transfer",{p_card_id:s.id,p_player_id:d[p].id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((s,p)=>({...l[p],player:s}))}async function ro(t,e,i){const{error:o}=await x.from("users").update({credits:t.credits-i}).eq("id",t.id);if(o)throw o;t.credits-=i,Yt(t.credits);const{data:n}=await x.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),r=n!=null&&n.length?n:Object.keys(Gi).map(c=>({name:c,gc_type:"game_changer"})),a=Array.from({length:e},()=>r[Math.floor(Math.random()*r.length)]),d=a.map(c=>({owner_id:t.id,card_type:"game_changer",gc_type:c.name,gc_definition_id:c.id||null})),{data:l,error:s}=await x.from("cards").insert(d).select();return s&&console.error("[Booster GC] Erreur insert:",s.message,s),(l||[]).map((c,y)=>({...c,_gcDef:a[y]||null}))}async function ao(t,e){const{error:i}=await x.from("users").update({credits:t.credits-e}).eq("id",t.id);if(i)throw i;t.credits-=e,Yt(t.credits);const{data:o}=await x.from("cards").select("formation").eq("owner_id",t.id).eq("card_type","formation"),n=new Set((o||[]).map(p=>p.formation)),r=en(),a=r[Math.floor(Math.random()*r.length)],d=n.has(a),{data:l,error:s}=await x.from("cards").insert({owner_id:t.id,card_type:"formation",formation:a}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),(l||[]).map(p=>({...p,isDuplicate:d}))}async function Vn(t,e){const{data:i}=await x.from("cards").select("stadium_id").eq("owner_id",t.id).eq("card_type","stadium"),o=new Set((i||[]).map(s=>s.stadium_id).filter(Boolean)),{data:n}=await x.from("stadium_definitions").select("*");if(!(n!=null&&n.length))throw new Error("Aucun stade configuré en base.");const r=n[Math.floor(Math.random()*n.length)],a=o.has(r.id),{data:d,error:l}=await x.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:r.id}).select();return l&&console.error("[Booster Stade] Erreur insert:",l.message,l),(d||[]).map(s=>({...s,isDuplicate:a,_stadiumDef:r}))}async function on(t,e,i){try{const o=(i||[]).map(n=>{var r,a,d,l,s;return{card_type:n.card_type,name:n.card_type==="player"?[(r=n.player)==null?void 0:r.firstname,(a=n.player)==null?void 0:a.surname_real].filter(Boolean).join(" "):((d=n._stadiumDef)==null?void 0:d.name)||((l=n._gcDef)==null?void 0:l.name)||n.formation||n.gc_type||null,rarity:((s=n.player)==null?void 0:s.rarity)||null,note:n.current_note??null,is_duplicate:!!n.isDuplicate}});await x.from("booster_openings").insert({user_id:t,booster_name:(e==null?void 0:e.name)||null,booster_type:(e==null?void 0:e.type)||null,cards:o,nb_cards:o.length})}catch(o){console.warn("[Booster] journalisation ignorée:",o==null?void 0:o.message)}}function so(t,e,i,o=null,n=null){var k,H,oe,D,se,fe,M;if(!t||t.length===0){const L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",L.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(L),(k=L.querySelector("#anim-close-err"))==null||k.addEventListener("click",()=>L.remove());return}t=[...t].sort((L,X)=>{const U=L.player?gt(L.player):-1;return(X.player?gt(X.player):-1)-U});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let a=!1;const d=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let s=!1;const p=L=>L.touches&&L.touches[0]?L.touches[0].clientX:L.clientX;function c(L){a||(s=!0,l.style.opacity="1",y(L))}function y(L){if(!s||a)return;const X=d.getBoundingClientRect(),U=p(L)-X.left,ne=Math.max(0,Math.min(1,U/X.width));l.style.width=ne*X.width+"px",ne>=.82&&m()}function b(){a||(s=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{a||(l.style.transition="")},220))}function m(){var X;if(a)return;a=!0,s=!1,l.style.width="100%",l.style.opacity="1",(X=document.getElementById("cut-flash"))==null||X.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const L=document.getElementById("cut-hint");L&&(L.style.opacity="0"),d.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",$(0)},620)}d.addEventListener("pointerdown",c),window.addEventListener("pointermove",y),window.addEventListener("pointerup",b),d.addEventListener("touchstart",c,{passive:!0}),window.addEventListener("touchmove",y,{passive:!0}),window.addEventListener("touchend",b);let f=0,h=!1;const g=new Set;function $(L){f=L,document.getElementById("reveal-phase").style.display="flex",v(),I(L,0),G()}function v(){const L=document.getElementById("card-dots");L&&(L.innerHTML=t.map((X,U)=>`<div class="card-dot" data-i="${U}" style="width:8px;height:8px;border-radius:50%;background:${U===f?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),L.querySelectorAll(".card-dot").forEach(X=>X.addEventListener("click",()=>E(parseInt(X.dataset.i)))))}function I(L,X){var he,me;const U=t[L],ne=document.getElementById("card-counter"),ue=document.getElementById("card-track");ne&&(ne.textContent=`Carte ${L+1} / ${t.length}`);const ve=document.getElementById("reveal-btns");ve&&(ve.style.display=L===t.length-1?"flex":"none");const be=U.card_type==="player"&&((he=U.player)==null?void 0:he.rarity)==="legende",je=!g.has(L);if(g.add(L),U.card_type==="player"&&U.player){const ke=U.player,j=ke.job||"ATT";(Number(j==="GK"?ke.note_g:j==="DEF"?ke.note_d:j==="MIL"?ke.note_m:ke.note_a)||0)+(U.evolution_bonus||0)}const Be=ke=>{ue.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${be?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Yn(U)}</div>
          ${U.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const j=document.getElementById("current-card-wrap");X!==0?(j.style.transition="none",j.style.transform=`translateX(${X>0?100:-100}%)`,requestAnimationFrame(()=>{j.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",j.style.transform="translateX(0)"})):j.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),ke||be?K():J(),v()};je&&((me=U.player)==null?void 0:me.rarity)==="legende"&&U.card_type==="player"&&U.player?u(U,()=>Be(!0)):Be(!1)}function u(L,X){var xe;h=!0;const U=L.player,ne=`https://flagsapi.com/${U.country_code}/flat/64.png`,ue=(xe=U.clubs)==null?void 0:xe.logo_url,ve=Ct(U),be=U.job||"ATT",je=Number(be==="GK"?U.note_g:be==="DEF"?U.note_d:be==="MIL"?U.note_m:U.note_a)||0,Be=L.evolution_bonus||0,he=je+Be,me=U.rarity==="legende",ke=he>=18,j=document.getElementById("walkout-overlay"),T=document.getElementById("walkout-stage");if(!j||!T){h=!1,X();return}let R=null;me&&(R=io("/sounds/Legendary.mp3",.8)),j.style.display="flex";const O=()=>{const de=T.firstElementChild;de&&(de.classList.remove("wo-in"),de.classList.add("wo-out"))},V=1800,q=400;T.innerHTML=`<img class="wo-in" src="${ne}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(O,V),setTimeout(()=>{var de;T.innerHTML=ue?`<img class="wo-in" src="${ue}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((de=U.clubs)==null?void 0:de.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},V+q),setTimeout(O,V*2+q),setTimeout(()=>{T.innerHTML=ve?`<img class="wo-in" src="${ve}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(V+q)*2),setTimeout(O,(V+q)*2+V);const ce=ke?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[be]||"#fff";setTimeout(()=>{T.innerHTML=`<div class="wo-in" style="
        font-size:${ke?"120px":"90px"};font-weight:900;color:${ce};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${ce}, 0 0 60px ${ce};
        ${ke?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${he}
      </div>`,ke&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(V+q)*3),setTimeout(O,(V+q)*3+V),setTimeout(()=>{j.style.display="none",T.innerHTML="",h=!1,R&&!me&&R.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),X()},(V+q)*4)}function E(L){if(h||L<0||L>=t.length||L===f)return;const X=L>f?1:-1;f=L,I(L,X)}function _(){E(f+1)}function z(){E(f-1)}function G(){const L=document.getElementById("card-viewport");if(!L||L._swipeBound)return;L._swipeBound=!0;let X=0,U=0,ne=0,ue=!1;const ve=me=>me.touches?me.touches[0].clientX:me.clientX,be=me=>me.touches?me.touches[0].clientY:me.clientY,je=me=>{ue=!0,X=ve(me),U=be(me),ne=0},Be=me=>{if(!ue)return;ne=ve(me)-X;const ke=be(me)-U;if(Math.abs(ne)<Math.abs(ke))return;const j=document.getElementById("current-card-wrap");j&&(j.style.transition="none",j.style.transform=`translateX(${ne*.6}px) rotate(${ne*.02}deg)`)},he=()=>{if(!ue)return;ue=!1;const me=document.getElementById("current-card-wrap"),ke=55;ne<=-ke&&f<t.length-1?_():ne>=ke&&f>0?z():me&&(me.style.transition="transform .2s ease",me.style.transform="translateX(0)")};L.addEventListener("pointerdown",je),L.addEventListener("pointermove",Be),L.addEventListener("pointerup",he),L.addEventListener("pointercancel",he),L.addEventListener("touchstart",je,{passive:!0}),L.addEventListener("touchmove",Be,{passive:!0}),L.addEventListener("touchend",he),L.addEventListener("click",me=>{if(Math.abs(ne)>8)return;const ke=L.getBoundingClientRect();me.clientX-ke.left>ke.width/2?_():z()})}let W=null;function K(){const L=document.getElementById("fireworks-canvas");if(!L)return;L.width=window.innerWidth,L.height=window.innerHeight;const X=L.getContext("2d"),U=[];function ne(){const ve=Math.random()*L.width,be=Math.random()*L.height*.6,je=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Be=je[Math.floor(Math.random()*je.length)];for(let he=0;he<60;he++){const me=Math.PI*2/60*he,ke=2+Math.random()*5;U.push({x:ve,y:be,vx:Math.cos(me)*ke,vy:Math.sin(me)*ke,alpha:1,color:Be,size:2+Math.random()*3})}}ne(),W=setInterval(ne,600);function ue(){if(document.getElementById("fireworks-canvas")){X.clearRect(0,0,L.width,L.height);for(let ve=U.length-1;ve>=0;ve--){const be=U[ve];if(be.x+=be.vx,be.y+=be.vy+.08,be.vy*=.98,be.alpha-=.018,be.alpha<=0){U.splice(ve,1);continue}X.globalAlpha=be.alpha,X.fillStyle=be.color,X.beginPath(),X.arc(be.x,be.y,be.size,0,Math.PI*2),X.fill()}X.globalAlpha=1,(W!==null||U.length>0)&&requestAnimationFrame(ue)}}ue()}function J(){W!==null&&(clearInterval(W),W=null);const L=document.getElementById("fireworks-canvas");L&&L.getContext("2d").clearRect(0,0,L.width,L.height)}if(o){const L=document.getElementById("reveal-btns");L&&(L.style.flexDirection="row",L.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(H=document.getElementById("reveal-next"))==null||H.addEventListener("click",()=>{J(),r.remove(),o()})}else{const L=document.getElementById("reveal-reopen"),X=e.cost||0,U=Number((D=(oe=n==null?void 0:n.state)==null?void 0:oe.profile)==null?void 0:D.credits)||0,ne=!X||U>=X;if(L)if(n){L.textContent=`🎁 Ouvrir un autre booster${X?` (${X.toLocaleString("fr")} cr.)`:""}`;const ue=be=>{L.disabled=!0,L.style.opacity="0.45",L.style.cursor="not-allowed",be&&(L.title=be)};ne||ue("Crédits insuffisants");const ve=((se=e._raw)==null?void 0:se.max_per_user)??null;ne&&ve!=null&&((M=(fe=n==null?void 0:n.state)==null?void 0:fe.user)!=null&&M.id)&&x.from("booster_claims").select("id",{count:"exact",head:!0}).eq("user_id",n.state.user.id).eq("booster_id",e._boosterId).then(({count:be})=>{(be||0)>=ve&&ue(`Quota atteint (${ve} max.)`)}),L.addEventListener("click",()=>{L.disabled||(J(),r.remove(),tn(e,{state:n.state,toast:n.toast,navigate:i,container:n.container}))})}else L.textContent="🎁 Ouvrir un autre booster",L.addEventListener("click",()=>{J(),r.remove(),i("boosters")});document.getElementById("reveal-collection").addEventListener("click",()=>{J(),r.remove(),i("collection")}),document.getElementById("reveal-shop").addEventListener("click",()=>{J(),r.remove(),i("boosters")})}}function Yn(t){var e,i,o,n;if(t.card_type==="player"&&t.player)return Gn(t);if(t.card_type==="game_changer"){const r=t._gcDef,a=(r==null?void 0:r.name)||t.gc_type||"Game Changer",d=(r==null?void 0:r.effect)||((e=Gi[t.gc_type])==null?void 0:e.desc)||"",l=r!=null&&r.image_url?`/icons/${r.image_url}`:null,s=((i=Gi[t.gc_type])==null?void 0:i.icon)||"⚡";return it(a,l,s,d,{width:170})}if(t.card_type==="formation")return si(t.formation,kt[t.formation],{width:160});if(t.card_type==="stadium"){const r=t._stadiumDef,a=(r==null?void 0:r.name)||"Stade",d=((o=r==null?void 0:r.club)==null?void 0:o.encoded_name)||(r==null?void 0:r.country_code)||"—",l=r!=null&&r.image_url?`/icons/${r.image_url}`:((n=r==null?void 0:r.club)==null?void 0:n.logo_url)||(r!=null&&r.country_code?`https://flagsapi.com/${r.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),s=`${d}<br>+10 ⭐ joueurs alliés`;return Ht(a,l,s,{width:170})}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Wn(t){var e,i;if((e=t==null?void 0:t.rates)!=null&&e.length){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const n={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},r={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};o.innerHTML=`
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
      </div>`,document.body.appendChild(o),o.addEventListener("click",a=>{a.target===o&&o.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>o.remove());return}Jn()}function Jn(){const t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(t),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.getElementById("odds-close").addEventListener("click",()=>t.remove())}function Xn(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText=`
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
    `,document.body.appendChild(e);try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(n){console.warn("[AdSense]",n)}let i=5;const o=setInterval(()=>{i--;const n=document.getElementById("mw-ad-cd");n&&(n.textContent=i),i<=0&&(clearInterval(o),e.remove(),t(!0))},1e3)})}async function Qn(t,{state:e,navigate:i,toast:o,refreshProfile:n}){var y,b;const{data:r}=await x.from("users").select("*").eq("id",e.user.id).single();r&&(e.profile=r);let a=Array.isArray((y=e.profile)==null?void 0:y.pending_boosters)?[...e.profile.pending_boosters]:[];if(!a.length){await x.from("users").update({onboarding_done:!0}).eq("id",e.user.id),i("home");return}let d=null;try{const f=(await Zo()).find(h=>(h.name||"").toLowerCase().includes("new player"));f&&(d=oo(f))}catch(m){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',m)}const l=a.length;let s=0;t.innerHTML=`
  <div class="page" style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#0a3d1e,#063015);padding:24px">
    <div style="max-width:420px;text-align:center;color:#fff">
      <div style="font-size:56px;margin-bottom:10px">🎁</div>
      <h2 style="font-size:24px;font-weight:900;margin-bottom:8px">Bienvenue ${e.profile.pseudo} !</h2>
      <p style="font-size:14px;color:rgba(255,255,255,0.7);line-height:1.6;margin-bottom:8px">
        Pour démarrer ton aventure, voici tes cadeaux :
      </p>
      <div style="font-size:14px;color:#FFD700;font-weight:700;line-height:1.8;margin-bottom:24px">
        ⚽ 4 boosters de 5 joueurs<br>
        ⚡ 1 booster Game Changer<br>
        📋 1 booster Formation<br>
        🏟️ 1 booster Stade
      </div>
      <p style="font-size:13px;color:rgba(255,255,255,0.55);margin-bottom:24px">
        Ouvre-les un par un pour découvrir tes cartes !
      </p>
      <button class="btn btn-primary" id="onboard-start" style="width:100%;font-size:16px;padding:14px;text-align:center;display:flex;align-items:center;justify-content:center">
        Ouvrir mon 1er booster 🎉
      </button>
    </div>
  </div>`;const p=async()=>{await x.from("users").update({pending_boosters:a}).eq("id",e.user.id)};async function c(){var $;if(s>=l||!a.length){await x.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",e.user.id),n&&await n(),o("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const m=a[0],{data:f}=await x.from("users").select("*").eq("id",e.user.id).single();f&&(e.profile=f);let h=[];try{if(m.type==="formation")h=await ao(e.profile,0);else if(m.type==="game_changer")h=await ro(e.profile,m.count||3,0);else if(m.type==="stadium")h=await Vn(e.profile,0);else if(d&&(($=d.rates)!=null&&$.length)){const v={...d,cost:0,cardCount:m.count||d.cardCount||5};h=await ki(e.profile,v),m.guaranteeGK&&!e.profile.first_booster_opened&&(h.some(u=>u.player&&u.player.job==="GK")||await Zn(e.profile,h),await x.from("users").update({first_booster_opened:!0}).eq("id",e.profile.id))}else h=await no(e.profile,m.count||5,0)}catch(v){o(v.message||"Erreur ouverture booster","error");return}a.shift(),s++,await p();const g=m.type==="formation"?{name:"Booster Formation",type:"formation",img:"/icons/booster-formation.png"}:m.type==="game_changer"?{name:"Booster Game Changer",type:"game_changer",img:"/icons/booster-gamechanger.png"}:m.type==="stadium"?{name:"Booster Stade",type:"stadium",img:"/icons/booster-stade.png"}:{name:`Booster Joueurs (${s}/${l})`,type:"player",img:(d==null?void 0:d.img)||"/icons/booster-players.png"};on(e.profile.id,g,h),so(h,g,i,()=>{c()})}(b=document.getElementById("onboard-start"))==null||b.addEventListener("click",()=>c())}async function Zn(t,e){try{const{data:i}=await x.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const o=i[Math.floor(Math.random()*i.length)],n=e.findIndex(a=>a.player);if(n===-1)return;const r=e[n];await x.from("cards").update({player_id:o.id}).eq("id",r.id),e[n]={...r,player_id:o.id,player:o}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const er=[{key:"home2",route:"home2",label:"ACCUEIL",icon:"nav-home.png"},{key:"cards",route:"collection",label:"CARTES",icon:"nav-collection.png"},{key:"decks",route:"decks",label:"EQUIPES",icon:"nav-decks.png"},{key:"boosters",route:"boosters",label:"BOUTIQUE",icon:"nav-boosters.png"},{key:"market",route:"market",label:"MERCATO",icon:"nav-market.png"}];function Vt(t,e,i,o,n){if(!document.getElementById("home2-chrome-style")){const c=document.createElement("style");c.id="home2-chrome-style",c.textContent=`
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
    `,document.head.appendChild(c)}const r=er.map(c=>`
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
    `,document.body.appendChild(a),a.querySelector("#home2-chrome-settings-btn").addEventListener("click",()=>t("settings")),a.querySelector("#home2-chrome-credits").addEventListener("click",()=>Eo(e,n)));let d=document.getElementById("home2-mobile-top");d||(d=document.createElement("div"),d.id="home2-mobile-top",d.className="home2-mobile-top",d.innerHTML=`
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-mobtop-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-mobtop-settings-btn"><span>⚙️</span><span class="pill-label">Paramètres</span></button>
      </div>
    `,document.body.appendChild(d),d.querySelector("#home2-mobtop-settings-btn").addEventListener("click",()=>t("settings")),d.querySelector("#home2-mobtop-credits").addEventListener("click",()=>Eo(e,n)));let l=document.getElementById("home2-mobile-bottom");l||(l=document.createElement("div"),l.id="home2-mobile-bottom",l.className="home2-mobile-bottom",l.innerHTML=r,document.body.appendChild(l)),document.querySelectorAll(".home2-chrome-tab").forEach(c=>{c._v2Bound||(c._v2Bound=!0,c.addEventListener("click",()=>{document.querySelectorAll(".home2-chrome-tab").forEach(y=>y.classList.remove("active")),document.querySelectorAll(`.home2-chrome-tab[data-key="${c.dataset.key}"]`).forEach(y=>y.classList.add("active")),t(c.dataset.route)}))}),document.querySelectorAll(".home2-chrome-tab").forEach(c=>c.classList.toggle("active",c.dataset.key===i));const s=`💰 ${(e.credits||0).toLocaleString("fr")}`;document.getElementById("home2-chrome-credits")&&(document.getElementById("home2-chrome-credits").textContent=s),document.getElementById("home2-mobtop-credits")&&(document.getElementById("home2-mobtop-credits").textContent=s),document.body.classList.remove("v2-match-flow"),a.style.display="",d.style.display="",l.style.display="";const p=document.getElementById("page-content");p&&(p.style.removeProperty("padding-top"),p.style.removeProperty("padding-bottom")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const c=window.innerWidth<1024;document.documentElement.style.setProperty("--v2-top-height",(c?d.offsetHeight:a.offsetHeight)+"px"),document.documentElement.style.setProperty("--v2-bottom-height",l.offsetHeight+"px")})})}const tr=[{ads:1,seconds:5,credits:4500},{ads:2,seconds:10,credits:9500},{ads:3,seconds:15,credits:15e3}];async function Eo(t,e){if(!await Ji("pub_mode")){Uo();return}const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",i.innerHTML=`
    <div style="background:#111a12;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:400px;width:100%;color:#fff">
      <div style="font-size:18px;font-weight:900;margin-bottom:4px">💰 Gagner des crédits</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:18px">Regarde une ou plusieurs publicités pour recevoir des crédits gratuits.</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${tr.map(o=>`
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
    </div>`,document.body.appendChild(i),i.querySelector("#credits-ad-cancel").addEventListener("click",()=>i.remove()),i.querySelectorAll(".credits-ad-offer-btn").forEach(o=>{o.addEventListener("click",()=>{i.remove(),ir(parseInt(o.dataset.ads),5,parseInt(o.dataset.credits),t,e)})})}function ir(t,e,i,o,n){let r=1;const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.94);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;gap:14px;color:#fff;padding:16px",document.body.appendChild(a);function d(){a.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité ${r}/${t}</div>
      <div style="width:400px;max-width:100%;height:400px;max-height:55vh;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center">
        <ins class="adsbygoogle"
          style="display:inline-block;width:400px;height:400px"
          data-ad-client="ca-pub-5827602487507112"
          data-ad-slot="6638827438"></ins>
      </div>
      <div id="credits-ad-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Chargement… <span id="credits-ad-cd">${e}</span>s</div>
      <div id="credits-ad-next-zone" style="width:280px;max-width:100%"></div>
    `;try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(c){console.warn("[AdSense]",c)}let s=e;const p=setInterval(()=>{s--;const c=a.querySelector("#credits-ad-cd");c&&(c.textContent=s),s<=0&&(clearInterval(p),l())},1e3)}function l(){var c,y;const s=a.querySelector("#credits-ad-status"),p=a.querySelector("#credits-ad-next-zone");r<t?(s&&(s.textContent="Publicité terminée ✅"),p&&(p.innerHTML=`
        <button id="credits-ad-next-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px">
          Suivant (${r}/${t}) →
        </button>`),(c=a.querySelector("#credits-ad-next-btn"))==null||c.addEventListener("click",()=>{r++,d()})):(s&&(s.textContent="Toutes les publicités ont été vues ✅"),p&&(p.innerHTML=`
        <button id="credits-ad-claim-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px;background:#D4A017;border-color:#D4A017">
          🎁 Récupérer ${i.toLocaleString("fr")} crédits
        </button>`),(y=a.querySelector("#credits-ad-claim-btn"))==null||y.addEventListener("click",async()=>{const b=a.querySelector("#credits-ad-claim-btn");b.disabled=!0,b.textContent="⏳...";const m=(o.credits||0)+i,{error:f}=await x.from("users").update({credits:m}).eq("id",o.id);if(f){n(f.message,"error"),b.disabled=!1;return}o.credits=m,Yt(m),n(`+${i.toLocaleString("fr")} crédits ✅`,"success"),a.remove()}))}d()}async function nn(t,e,i){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",document.body.appendChild(o);async function n(){var l;const{data:r}=await x.from("pending_rewards").select(`*,
        player:players(id, firstname, surname_real, country_code, club_id, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
          clubs(encoded_name, logo_url)),
        booster:booster_configs(name, image_url)`).eq("user_id",t.profile.id).eq("claimed",!1).order("created_at",{ascending:!0});if(!(r!=null&&r.length)){o.remove();const s=document.getElementById("pending-rewards-banner");s&&s.remove();return}const a=s=>{var p;return s.reward_type==="credits"?'<div style="width:56px;height:56px;border-radius:12px;background:rgba(212,160,23,0.15);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">💰</div>':s.reward_type==="card"&&s.player?`<div style="flex-shrink:0">${qe(s.player,{width:56})}</div>`:s.reward_type==="booster"?`<img src="/icons/${((p=s.booster)==null?void 0:p.image_url)||"booster-players.png"}" style="width:56px;height:56px;object-fit:contain;border-radius:12px;background:rgba(255,255,255,0.05);flex-shrink:0">`:'<div style="width:56px;height:56px;border-radius:12px;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">❓</div>'},d=s=>{var p,c,y;return s.reward_type==="credits"?`${(s.credits_amount||0).toLocaleString("fr")} crédits`:s.reward_type==="card"?`${((p=s.player)==null?void 0:p.firstname)||""} ${((c=s.player)==null?void 0:c.surname_real)||""}`.trim()||"Carte joueur":s.reward_type==="booster"?((y=s.booster)==null?void 0:y.name)||"Booster":"Récompense"};o.innerHTML=`
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
      </div>`,(l=o.querySelector("#pending-rewards-close"))==null||l.addEventListener("click",()=>o.remove()),o.querySelectorAll(".claim-reward-btn").forEach(s=>{s.addEventListener("click",async()=>{var c,y;const p=r.find(b=>b.id===s.dataset.id);s.disabled=!0,s.textContent="⏳...";try{const b=await On(p,t.profile,e,null);if(await x.from("pending_rewards").update({claimed:!0,claimed_at:new Date().toISOString()}).eq("id",p.id),b.type==="credits")Yt(t.profile.credits),e(`+${b.amount.toLocaleString("fr")} crédits ✅`,"success");else if(b.type==="card")e(`Carte reçue : ${((c=b.player)==null?void 0:c.firstname)||""} ${((y=b.player)==null?void 0:y.surname_real)||""} ✅`,"success");else if(b.type==="booster"){o.remove(),so(b.cards,b.boosterUI,i,()=>{nn(t,e,i)});return}}catch(b){e(b.message||"Erreur lors de la réclamation","error"),s.disabled=!1,s.textContent="Récupérer";return}n()})})}n(),o.addEventListener("click",r=>{r.target===o&&o.remove()})}function Yt(t){const e=`💰 ${(t||0).toLocaleString("fr")}`,i=document.getElementById("home2-chrome-credits"),o=document.getElementById("home2-mobtop-credits");i&&(i.textContent=e),o&&(o.textContent=e)}function ct(){document.body.classList.add("v2-match-flow");const t=document.getElementById("home2-chrome-header");t&&(t.style.display="none");const e=document.getElementById("home2-mobile-top");e&&(e.style.display="none");const i=document.getElementById("home2-mobile-bottom");i&&(i.style.display="none");const o=document.getElementById("page-content");o&&(o.style.setProperty("padding-top","0","important"),o.style.setProperty("padding-bottom","0","important"))}function or(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return"à l'instant";if(i<60)return`il y a ${i}min`;const o=Math.floor(i/60);if(o<24)return`il y a ${o}h`;const n=Math.floor(o/24);return n<7?`il y a ${n}j`:new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"short"})}async function nr(t){const{data:e}=await x.from("users").select("id,pseudo,club_name,mmr").order("mmr",{ascending:!1}).limit(5),i=e||[],o=i.some(r=>r.id===t);let n=null;if(!o){const{data:r}=await x.from("users").select("mmr").eq("id",t).single();if(r){const{count:a}=await x.from("users").select("id",{count:"exact",head:!0}).gt("mmr",r.mmr||0);n=(a||0)+1}}return{list:i,iAmInTop:o,myPosition:n}}async function rr(t=4){const{data:e}=await x.from("patch_notes").select("id,title,description,image_url,published_at").eq("is_published",!0).order("published_at",{ascending:!1}).limit(t);return e||[]}async function ar(){const{data:t}=await x.from("booster_configs").select("id,name,icon,price_type,price_credits,card_count").eq("is_active",!0).order("sort_order",{ascending:!0}).limit(5);return t||[]}async function sr(){const{data:t}=await x.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const n=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close-v2").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}async function qi(t,{state:e,navigate:i,toast:o,openModal:n,closeModal:r}){var _,z,G,W,K,J;const a=e.profile;if(!a)return;const d="/icons/";Vt(i,a,"home2",d,o);const l=a.mmr??450,s=bt(l),p=hi(l,s),c=Pi(l),y=isFinite(s.max)?s.max+1:null,[{list:b,iAmInTop:m,myPosition:f},h,g,{count:$}]=await Promise.all([nr(a.id),rr(5),ar(),x.from("pending_rewards").select("*",{count:"exact",head:!0}).eq("user_id",a.id).eq("claimed",!1)]),v=(k,H)=>{const oe=bt(k.mmr??0),D=hi(k.mmr??0,oe);return`
    <div class="rk-row ${k.id===a.id?"rk-row-me":""}">
      <div class="rk-pos ${H<3?"rk-pos-top"+(H+1):""}">${H<3?["🥇","🥈","🥉"][H]:H+1}</div>
      <div class="rk-name ${k.id===a.id?"rk-name-me":""}">${k.pseudo}</div>
      <div class="rk-rp-block">
        <div class="rk-rp-tier" style="color:${oe.color}">${oe.emoji} ${oe.label.toUpperCase()}${D?" "+D:""}</div>
        <div class="rk-rp">${(k.mmr??0).toLocaleString("fr")} MMR</div>
      </div>
    </div>`},I=k=>`
    <div class="news-item">
      ${k.image_url?`<img src="${k.image_url}" class="news-thumb" onerror="this.style.display='none'">`:'<div class="news-thumb news-thumb-fallback">📰</div>'}
      <div class="news-body">
        <div class="news-title">${k.title}</div>
        <div class="news-desc">${k.description||""}</div>
        <div class="news-time">${or(k.published_at)}</div>
      </div>
    </div>`;let u=0;const E=k=>`
    <div class="promo-icon-wrap">
      <img src="${d}${k.icon||"nav-boosters.png"}" class="promo-icon" onerror="this.style.display='none'">
    </div>
    <div class="promo-info">
      <div class="promo-kicker">NOUVEAU BOOSTER</div>
      <div class="promo-title">${k.name}</div>
      <div class="promo-desc">${k.card_count||5} cartes · ${k.price_type==="pub"?"Pub gratuite":(k.price_credits||0).toLocaleString("fr")+" cr."}</div>
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
                <div class="rank-rp-label">${l.toLocaleString("fr")}${y?" / "+y.toLocaleString("fr"):""} RP</div>
                <button class="rank-inline-link" id="rank-inline-link-btn">📊 Classement</button>
              </div>
            </div>
            <div class="rank-progress-track"><div class="rank-progress-fill" style="width:${c}%"></div></div>
          </div>

          <div class="ranking-widget">
            <div class="ranking-widget-header"><h4>CLASSEMENT</h4><a id="nav-rankings-link">Voir plus</a></div>
            ${b.map((k,H)=>v(k,H)).join("")}
            ${!m&&f?`
              <div style="border-top:1px solid var(--tile-border);margin-top:2px;padding-top:8px">
                ${v({id:a.id,pseudo:a.pseudo,mmr:l},f-1)}
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

          ${g.length?`
          <div class="promo-banner" id="promo-banner">
            <div id="promo-slide-content" style="display:flex;align-items:center;gap:14px;flex:1;min-width:0">
              ${E(g[0])}
            </div>
            <button class="promo-cta" id="promo-cta-btn">✅ Ouvrir des boosters</button>
            ${g.length>1?`<div class="promo-dots">${g.map((k,H)=>`<div class="promo-dot ${H===0?"active":""}" data-dot="${H}"></div>`).join("")}</div>`:""}
          </div>`:""}
        </div>

        <!-- Colonne droite : Actualités -->
        <div class="home2-col-right">
          <div class="news-widget">
            <div class="news-widget-header"><h4>ACTUALITÉS</h4><a id="nav-journal-link">Voir tout</a></div>
            ${h.length?h.map(I).join(""):'<div style="font-size:11px;color:var(--tile-fg-dim);padding:8px 0">Aucune actualité pour le moment.</div>'}
          </div>
        </div>

      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var fe,M;const k=((fe=window.visualViewport)==null?void 0:fe.height)||window.innerHeight,H=window.innerWidth<1024;let oe=0;if(H){const L=document.getElementById("home2-mobile-top"),X=document.getElementById("home2-mobile-bottom");oe=((L==null?void 0:L.offsetHeight)||0)+((X==null?void 0:X.offsetHeight)||0)}else oe=((M=document.getElementById("home2-chrome-header"))==null?void 0:M.offsetHeight)||0;const D=k-oe,se=t.querySelector(".home-dark");se&&(se.style.minHeight=D+"px")}),(_=document.getElementById("nav-rankings-link"))==null||_.addEventListener("click",()=>i("rankings")),(z=document.getElementById("nav-rankings-cta"))==null||z.addEventListener("click",()=>i("rankings")),(G=document.getElementById("rank-inline-link-btn"))==null||G.addEventListener("click",()=>i("rankings")),(W=document.getElementById("nav-journal-link"))==null||W.addEventListener("click",()=>sr()),t.querySelectorAll("[data-action]").forEach(k=>{k.addEventListener("click",()=>{k.style.transform="scale(.96)",setTimeout(()=>k.style.transform="",180);const H=k.dataset.action;if(H==="match-ai"){sn(i,e);return}if(H==="match-random"){ct(),i("match",{matchMode:"random"});return}if(H==="match-friend"){i("friends");return}if(H==="mini-league"){i("mini-league");return}if(H==="ranked"){i("ranked");return}o("Bientôt disponible","info")})}),g.length>1){const k=document.getElementById("promo-slide-content"),H=()=>Array.from(document.querySelectorAll(".promo-dot")),oe=D=>{u=D,k&&(k.innerHTML=E(g[u])),H().forEach((se,fe)=>se.classList.toggle("active",fe===u))};setInterval(()=>oe((u+1)%g.length),5e3),document.querySelectorAll(".promo-dot").forEach(D=>{D.addEventListener("click",()=>oe(Number(D.dataset.dot)))})}(K=document.getElementById("promo-cta-btn"))==null||K.addEventListener("click",()=>i("boosters")),an(e,o),(J=document.getElementById("pending-rewards-banner"))==null||J.addEventListener("click",()=>{nn(e,o,i)}),pr(e,o,i),rn(e,o,i),lr(e,o)}async function lr(t,e){const i=t.profile.id,{data:o}=await x.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(o!=null&&o.length))return;const n=o.reduce((a,d)=>a+(d.prize_amount||0),0),r=document.createElement("div");r.className="modal-overlay",r.style.zIndex="2200",r.innerHTML=`<div class="modal" style="max-width:400px">
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
  </div>`,document.body.appendChild(r),r.querySelector("#claim-later-btn").addEventListener("click",()=>r.remove()),r.querySelector("#claim-all-btn").addEventListener("click",async a=>{const d=a.currentTarget;d.disabled=!0,d.textContent="...";let l=0;for(const s of o){const{data:p}=await x.rpc("claim_mini_league_prize",{p_league_id:s.league_id,p_user_id:i});p!=null&&p.success&&!p.already_claimed&&(l+=p.prize||0)}if(l>0){t.profile.credits=(t.profile.credits||0)+l;const s=document.getElementById("nav-credits");s&&(s.textContent=`💰 ${t.profile.credits.toLocaleString("fr")}`),e(`💰 +${l.toLocaleString("fr")} cr. récupérés !`,"success")}r.remove()})}async function rn(t,e,i){const o=document.getElementById("ongoing-match-banner");if(!o)return;const n=t.profile.id,{data:r}=await x.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${n},away_id.eq.${n}`).order("created_at",{ascending:!1});if(!(r!=null&&r.length)){o.innerHTML="";return}const a=r.map(l=>l.home_id===n?l.away_id:l.home_id).filter(Boolean);let d={};if(a.length){const{data:l}=await x.from("users").select("id, pseudo, club_name").in("id",a);(l||[]).forEach(s=>{d[s.id]=s.club_name||s.pseudo})}o.innerHTML=r.map(l=>{const s=l.home_id===n?l.away_id:l.home_id,p=d[s]||"Adversaire",c=l.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${c?"🏆 Mini League":l.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${p}</div>
      </div>
      <button data-resume="${l.id}" data-mini="${c?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${l.id}" data-opp="${s}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),o.querySelectorAll("[data-resume]").forEach(l=>{l.addEventListener("click",async()=>{ct();const s=document.getElementById("page-content")||document.getElementById("app");if(l.dataset.mini==="1"){const{data:p}=await x.from("mini_league_matches").select("id, league_id").eq("match_id",l.dataset.resume).single();p?i("match-mini-league",{mlMatchId:p.id,leagueId:p.league_id}):i("mini-league")}else{const{resumePvpMatch:p}=await Ho(async()=>{const{resumePvpMatch:c}=await Promise.resolve().then(()=>ca);return{resumePvpMatch:c}},void 0);p(s,{state:t,navigate:i,toast:e,openModal:null,closeModal:null,refreshProfile:null},l.dataset.resume)}})}),o.querySelectorAll("[data-abandon]").forEach(l=>{l.addEventListener("click",()=>{cr(async()=>{await dr(l.dataset.abandon,l.dataset.opp,n),e("Match abandonné (défaite 3-0)","info"),rn(t,e,i)})})})}async function dr(t,e,i){Gt();const{data:o}=await x.from("matches").select("home_id, away_id, game_state, mode").eq("id",t).single();if(!o)return;const n=o.home_id===i,r=n?0:3,a=n?3:0,d=o.game_state||{};d.p1Score=r,d.p2Score=a,d.phase="finished",d.forfeit=!0,await x.from("matches").update({status:"finished",forfeit:!0,winner_id:e,home_score:r,away_score:a,game_state:d}).eq("id",t),o.mode==="mini_league"&&await x.from("mini_league_matches").update({status:"finished",home_score:r,away_score:a}).eq("match_id",t)}function cr(t){const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(e),e.querySelector("#ab-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#ab-ok").addEventListener("click",()=>{e.remove(),t()}),e.addEventListener("click",i=>{i.target===e&&e.remove()})}let mi=null,Pt=null;function pr(t,e,i){var r;const o=(r=t==null?void 0:t.user)==null?void 0:r.id;if(!o)return;const n=()=>ur(t,e,i);if(n(),clearInterval(mi),mi=setInterval(()=>{if(!document.getElementById("match-invite-banner")){if(clearInterval(mi),mi=null,Pt){try{x.removeChannel(Pt)}catch{}Pt=null}return}n()},5e3),Pt)try{x.removeChannel(Pt)}catch{}Pt=x.channel("home-match-invites-"+o).on("postgres_changes",{event:"INSERT",schema:"public",table:"friend_match_invites",filter:`invitee_id=eq.${o}`},n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`invitee_id=eq.${o}`},n).subscribe()}async function ur(t,e,i){var d,l,s,p;const o=document.getElementById("match-invite-banner");if(!o)return;const{data:n}=await x.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",t.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!n){o.innerHTML="";return}const r=((d=n.inviter)==null?void 0:d.club_name)||((l=n.inviter)==null?void 0:l.pseudo)||"?",a=n.inviter_id;o.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${r} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(s=document.getElementById("match-inv-accept"))==null||s.addEventListener("click",()=>{o.innerHTML="",ct(),i("match",{matchMode:"friend",friendId:a,friendName:r,isAccepting:!0})}),(p=document.getElementById("match-inv-decline"))==null||p.addEventListener("click",async()=>{await x.from("friend_match_invites").update({status:"declined"}).eq("id",n.id),o.innerHTML="",e("Invitation refusée","info")})}async function an(t,e){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:o,error:n}=await x.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",t.user.id).eq("status","pending");if(n||!(o!=null&&o.length)){i.innerHTML="";return}const r=o.length,a=o.slice(0,2).map(l=>{var s;return((s=l.requester)==null?void 0:s.pseudo)||"?"}).join(", "),d=r>2?` +${r-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${r} demande${r>1?"s":""} d'ami${r>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${d}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>dn(t,e,()=>an(t,e)))}async function sn(t,e){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:420px;border-radius:18px">
    <div class="modal-header"><h2>Solo — Choisir un niveau</h2><button class="btn-icon" id="solo-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div id="solo-levels-list" style="display:flex;flex-direction:column;gap:10px">
        <div style="text-align:center;color:#999;padding:20px">⏳ Chargement…</div>
      </div>
    </div>
  </div>`,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("solo-cancel").addEventListener("click",o),i.addEventListener("click",s=>{s.target===i&&o()});const[{data:n},{data:r}]=await Promise.all([x.from("solo_levels").select("*").eq("is_active",!0).order("level_number"),x.from("user_solo_progress").select("unlocked_level").eq("user_id",e.profile.id).maybeSingle()]),a=(r==null?void 0:r.unlocked_level)||1,d=n||[],l=document.getElementById("solo-levels-list");if(l){if(!d.length){l.innerHTML='<div style="text-align:center;color:#999;padding:20px">Aucun niveau configuré.</div>';return}l.innerHTML=d.map(s=>{const p=s.level_number>a,c=s.level_number===a,y=p?"#f0f0f0":c?"#eefaf2":"#f7f7f7",b=p?"#ddd":c?"#bfe8cf":"#e0e0e0",m=p?"#999":"#12401f";return`
      <div class="solo-level-card" data-level="${s.level_number}" data-locked="${p}"
        style="cursor:${p?"not-allowed":"pointer"};display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${y};border:1px solid ${b};opacity:${p?.6:1};transition:transform .12s ease">
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
      </div>`}).join(""),l.querySelectorAll(".solo-level-card").forEach(s=>{s.dataset.locked!=="true"&&(s.addEventListener("mouseenter",()=>{s.style.transform="translateY(-1px)"}),s.addEventListener("mouseleave",()=>{s.style.transform=""}),s.addEventListener("click",()=>{o(),ct(),t("match",{matchMode:"solo",soloLevel:Number(s.dataset.level)})}))})}}const pi="#1A6B3C",ui="#cc2222",fr="#D4A017",zo="#888";async function mr(t,e){const{state:i,toast:o}=e;t.innerHTML=`
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
    </div>`,await ln(i,o,e),document.getElementById("btn-add-friend").addEventListener("click",()=>br(i,o)),document.getElementById("btn-accept-friend").addEventListener("click",()=>dn(i,o,null,e))}async function ln(t,e,i={}){const{navigate:o}=i,n=t.user.id,{data:r,error:a}=await x.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${n},addressee_id.eq.${n}`),{count:d}=await x.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",n).eq("status","pending"),l=document.getElementById("pending-badge");l&&(d>0?(l.style.display="flex",l.textContent=d):l.style.display="none");const s=document.getElementById("friends-list");if(!s)return;if(a){console.error("[Friends] Erreur:",a),s.innerHTML=`<div style="color:${ui};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const p=(r||[]).map(b=>b.requester_id===n?b.addressee_id:b.requester_id);let c={};if(p.length){const{data:b}=await x.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",p);(b||[]).forEach(m=>{c[m.id]=m})}const y=(r||[]).map(b=>({friendshipId:b.id,friend:c[b.requester_id===n?b.addressee_id:b.requester_id]||{pseudo:"?"}}));if(!y.length){s.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}s.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${y.length} ami${y.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${y.map(({friendshipId:b,friend:m})=>gr(m,b)).join("")}
    </div>`,s.querySelectorAll("[data-stats]").forEach(b=>{b.addEventListener("click",()=>xr(t,b.dataset.stats,b.dataset.friendName))}),s.querySelectorAll("[data-match]").forEach(b=>{b.addEventListener("click",async()=>{const m=b.dataset.friendId,f=b.dataset.friendName;if(typeof o!="function"){e("Erreur navigation","error");return}const h=t.user.id,{data:g}=await x.from("friend_match_invites").select("id").eq("inviter_id",m).eq("invitee_id",h).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),$=!!g;console.log("[Friends] clic match",{fid:m,fname:f,isAccepting:$}),ct(),o("match",{matchMode:"friend",friendId:m,friendName:f,isAccepting:$})})})}function gr(t,e){const i=t.club_name||t.pseudo||"?",o=t.pseudo||"",n=(o||i).slice(0,2).toUpperCase(),r=t.club_color2||pi,a=t.club_color1||"#ffffff",d=t.last_seen_at?new Date(t.last_seen_at):null,l=d&&Date.now()-d.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${fr};background:var(--tile-bg);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function br(t,e){const i=lo();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${ui};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${co()}`,document.body.appendChild(i);const o=i.querySelector("#friend-pseudo-input"),n=i.querySelector("#add-friend-error"),r=()=>i.remove();o.focus(),i.querySelector("#add-cancel").addEventListener("click",r),i.addEventListener("click",a=>{a.target===i&&r()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=o.value.trim();if(!a){n.textContent="Entre un pseudo";return}n.textContent="";const{data:d}=await x.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!d){n.textContent="Utilisateur introuvable";return}if(d.id===t.user.id){n.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:l}=await x.from("friendships").select("id, status").or(`and(requester_id.eq.${t.user.id},addressee_id.eq.${d.id}),and(requester_id.eq.${d.id},addressee_id.eq.${t.user.id})`).single();if(l){const p=l.status==="accepted"?"Vous êtes déjà amis !":l.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";n.textContent=p;return}const{error:s}=await x.from("friendships").insert({requester_id:t.user.id,addressee_id:d.id,status:"pending"});if(s){n.textContent="Erreur : "+s.message;return}r(),e(`✅ Demande envoyée à ${d.pseudo} !`,"success")})}async function dn(t,e,i=null,o={}){const n=t.user.id,{data:r}=await x.from("friendships").select("id, requester_id").eq("addressee_id",n).eq("status","pending").order("created_at",{ascending:!1}),a=(r||[]).map(y=>y.requester_id);let d={};if(a.length){const{data:y}=await x.from("users").select("id, pseudo, club_name").in("id",a);(y||[]).forEach(b=>{d[b.id]=b})}const l=(r||[]).map(y=>({...y,requester:d[y.requester_id]||{pseudo:"?"}})),s=lo(),p=l||[];s.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${p.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${p.map(y=>{var b,m,f;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((b=y.requester)==null?void 0:b.club_name)||((m=y.requester)==null?void 0:m.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((f=y.requester)==null?void 0:f.pseudo)||""})</span>
                </div>
                <button data-accept="${y.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${pi};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${y.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${ui};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${co()}`,document.body.appendChild(s);const c=()=>s.remove();s.querySelector("#pending-close").addEventListener("click",c),s.addEventListener("click",y=>{y.target===s&&c()}),s.querySelectorAll("[data-accept]").forEach(y=>{y.addEventListener("click",async()=>{const{error:b}=await x.from("friendships").update({status:"accepted"}).eq("id",y.dataset.accept);if(b){e("Erreur : "+b.message,"error");return}y.closest("div[style]").remove(),e("✅ Ami accepté !","success"),ln(t,e,o),i&&i()})}),s.querySelectorAll("[data-decline]").forEach(y=>{y.addEventListener("click",async()=>{await x.from("friendships").delete().eq("id",y.dataset.decline),y.closest("div[style]").remove(),e("Demande refusée","info"),i&&i()})})}async function xr(t,e,i){const o=t.user.id,[n,r]=[o,e].sort(),a=o===n,{data:d}=await x.from("friend_match_stats").select("*").eq("player1_id",n).eq("player2_id",r).single(),l=t.profile.club_name||t.profile.pseudo||"Moi",s=d||{},p=a?s.wins_p1||0:s.wins_p2||0,c=a?s.wins_p2||0:s.wins_p1||0,y=s.draws||0,b=a?s.goals_p1||0:s.goals_p2||0,m=a?s.goals_p2||0:s.goals_p1||0,f=a?s.gc_used_p1||0:s.gc_used_p2||0,h=a?s.gc_used_p2||0:s.gc_used_p1||0,g=s.matches_total||0,$=(I,u,E,_=pi,z=ui)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${_}">${u}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${I}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${z}">${E}</div>
    </div>`,v=lo();v.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${g===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${$("Victoires",p,c)}
        ${$("Nuls",y,y,zo,zo)}
        ${$("Défaites",c,p)}
        ${$("Buts marqués",b,m)}
        ${$("Buts encaissés",m,b,ui,pi)}
        ${$("GC utilisés ⚡",f,h,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${g} match${g>1?"s":""} joué${g>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${co()}`,document.body.appendChild(v),v.querySelector("#stats-close").addEventListener("click",()=>v.remove()),v.addEventListener("click",I=>{I.target===v&&v.remove()})}function lo(){const t=document.createElement("div");return t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",t}function co(){return`
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
        background:${pi};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function yr(t,{state:e,navigate:i,toast:o}){const n=e.profile;if(!n)return;const r="/icons/";Vt(i,n,"game",r,o),t.innerHTML=`
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
  </div>`,t.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",()=>{a.style.transform="scale(.96)",setTimeout(()=>a.style.transform="",180);const d=a.dataset.action;if(d==="match-ai"){sn(i,e);return}if(d==="match-random"){ct(),i("match",{matchMode:"random"});return}if(d==="match-friend"){i("friends");return}if(d==="mini-league"){i("mini-league");return}if(d==="ranked"){i("ranked");return}o("Bientôt disponible","info")})})}const hr="/",cn=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function pn(t,e,i){let o=0;const n=document.createElement("div");n.id="tutorial-overlay",n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const r=()=>{var p,c,y;const d=e[o],l=o===e.length-1,s=Math.round((o+1)/e.length*100);n.innerHTML=`
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
        ${d.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${hr}icons/${d.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,n.querySelectorAll("ul,ol").forEach(b=>{b.style.paddingLeft="20px",b.style.marginTop="6px",b.style.marginBottom="6px"}),n.querySelectorAll("li").forEach(b=>{b.style.marginBottom="4px"}),n.querySelectorAll("p").forEach(b=>{b.style.marginBottom="8px"}),(p=n.querySelector("#tuto-prev"))==null||p.addEventListener("click",()=>{o--,r()}),(c=n.querySelector("#tuto-next"))==null||c.addEventListener("click",()=>{l?a():(o++,r())}),(y=n.querySelector("#tuto-skip"))==null||y.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{n.remove(),t!=null&&t.id&&await x.from("users").update({tutorial_done:!0}).eq("id",t.id),i==null||i()};document.body.appendChild(n),r()}async function un(t,e,i){let o=[];const{data:n,error:r}=await x.rpc("get_tutorial_steps");if(!r&&(n==null?void 0:n.length)>0)o=n;else{const{data:d,error:l}=await x.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(d==null?void 0:d.length)>0?o=d:i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3)}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):cn;pn(t,a,()=>e("settings"))}async function Lo(t,e,i){if(!t||t.tutorial_done)return;let o=[];const{data:n,error:r}=await x.rpc("get_tutorial_steps");if(!r&&(n==null?void 0:n.length)>0)o=n,console.log(`[Tutorial] RPC OK → ${o.length} étapes`);else{const{data:d,error:l}=await x.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(d==null?void 0:d.length)>0?(o=d,console.log(`[Tutorial] Direct OK → ${o.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${r==null?void 0:r.message}, Direct: ${l==null?void 0:l.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):cn;pn(t,a,()=>e("boosters"))}async function fn(t,e){var h,g,$;const{state:i,navigate:o,toast:n}=e,r=ai(),a=eo(),d=(h=i==null?void 0:i.profile)==null?void 0:h.is_admin,l="2026.08.04-2337";t.innerHTML=`
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
  </div>`,t.querySelectorAll("[data-theme-choice]").forEach(v=>{v.addEventListener("click",()=>{Go(v.dataset.themeChoice),fn(t,e)})});const s=t.querySelector("#team-color1"),p=t.querySelector("#team-color2"),c=t.querySelector("#team-preview"),y=()=>{c&&(c.style.background=`linear-gradient(135deg, ${s.value} 50%, ${p.value} 50%)`)};y(),s==null||s.addEventListener("input",y),p==null||p.addEventListener("input",y),(g=t.querySelector("#team-save"))==null||g.addEventListener("click",async()=>{const v=t.querySelector("#team-error"),I=t.querySelector("#team-save"),u=t.querySelector("#team-club-name").value.trim();if(u.length<2){v.textContent="Nom de club trop court.";return}I.disabled=!0,I.textContent="⏳ Enregistrement...",v.textContent="";const{error:E}=await x.from("users").update({club_name:u,club_color1:s.value,club_color2:p.value}).eq("id",i.profile.id);if(I.disabled=!1,I.textContent="💾 Enregistrer",E){v.textContent=E.message;return}i.profile.club_name=u,i.profile.club_color1=s.value,i.profile.club_color2=p.value,v.style.color="#2ecc71",v.textContent="✅ Modifications enregistrées.",ai()==="club"&&Go("club")});const b=t.querySelector("#volume-slider"),m=t.querySelector("#volume-label");let f=null;b.addEventListener("input",()=>{Fn(Number(b.value)),m.textContent=`${b.value}%`,f&&(f.volume=Math.max(0,Math.min(1,Number(b.value)/100)))}),t.querySelector("#volume-test").addEventListener("click",()=>{f=io("/sounds/match-opening.mp3",1)}),($=t.querySelector("#settings-tutorial"))==null||$.addEventListener("click",()=>{un(i.profile,o,n)}),t.querySelector("#settings-logout").addEventListener("click",async()=>{await x.auth.signOut(),window.location.reload()})}const vr={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Zt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},So=["GK","DEF","MIL","ATT"],wr=["Tous","GK","DEF","MIL","ATT"],_r={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Io(t){const e=t.player;return e?(e.rarity,Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)):null}function kr(t){return t.length?t.reduce((e,i)=>Io(i)>Io(e)?i:e,t[0]):t[0]}const $r={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function gi(t,e){return t&&Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Bi(t,e="",i=1){const o=t.player;if(!o)return"";const n=t.evolution_bonus||0,r={...o,_evolution_bonus:n},a=e?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${e}</div>`:"",d=i>1?`
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
    ${qe(r,{width:140})}
    ${d}
  </div>`}function To(t){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${qe(t,{width:140})}
  </div>`}async function Er(t,e){const{state:i,navigate:o,toast:n,openModal:r,closeModal:a}=e;Vt(o,i.profile,"cards","/icons/",n),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await x.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await x.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),s=(d||[]).filter(j=>j.card_type==="player"&&j.player),p=(d||[]).filter(j=>j.card_type==="game_changer"),c=(d||[]).filter(j=>j.card_type==="formation"),y=(d||[]).filter(j=>j.card_type==="stadium"),{data:b}=await x.from("gc_definitions").select("name,gc_type,color,effect,image_url"),m={};(b||[]).forEach(j=>{m[j.name]=j});const{data:f}=await x.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),h={};(f||[]).forEach(j=>{h[j.id]=j}),y.forEach(j=>{j.stadium_def&&(h[j.stadium_id]=j.stadium_def)});const g=Object.keys(Xi),$=Object.keys(Oe),v={};s.forEach(j=>{const T=j.player.id;v[T]=(v[T]||0)+1}),new Set(Object.keys(v).map(j=>String(j)));const I=new Set(c.map(j=>j.formation)),u=new Set(p.map(j=>j.gc_type));let E="player",_="Tous",z="",G=!1,W=!1,K=new Set,J=new Set,k="job";function H(j){return j.job==="GK"?Number(j.note_g)||0:j.job==="DEF"?Number(j.note_d)||0:j.job==="MIL"?Number(j.note_m)||0:Number(j.note_a)||0}function oe(j,T){return k==="note_desc"?[...j].sort((R,O)=>H(T(O))-H(T(R))):k==="note_asc"?[...j].sort((R,O)=>H(T(R))-H(T(O))):[...j].sort((R,O)=>{const V=T(R),q=T(O),Q=So.indexOf(V.job),ce=So.indexOf(q.job);return Q!==ce?Q-ce:(V.surname_real||"").localeCompare(q.surname_real||"")})}function D(){return oe(s,j=>j.player)}function se(){return oe(l||[],j=>j)}function fe(j){return(!K.size||K.has(j.country_code))&&(!J.size||J.has(j.club_id))}function M(){return D().filter(j=>{const T=j.player,R=_==="Tous"||T.job===_,O=!z||`${T.firstname} ${T.surname_real}`.toLowerCase().includes(z);return R&&O&&fe(T)})}function L(){return se().filter(j=>{const T=_==="Tous"||j.job===_,R=!z||`${j.firstname} ${j.surname_real}`.toLowerCase().includes(z);return T&&R&&fe(j)})}t.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--tile-border);background:var(--tile-bg)">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${E==="player"?"var(--green)":"transparent"};
        color:${E==="player"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${s.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${E==="formation"?"var(--green)":"transparent"};
        color:${E==="formation"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${E==="gc"?"var(--green)":"transparent"};
        color:${E==="gc"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${p.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${E==="stadium"?"#4FC3F7":"transparent"};
        color:${E==="stadium"?"#4FC3F7":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${y.length})</div>
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
  </div>`,function(T){const R=document.getElementById(T);if(!R)return;R.addEventListener("wheel",xe=>{Math.abs(xe.deltaY)<=Math.abs(xe.deltaX)||(xe.preventDefault(),R.scrollLeft+=xe.deltaY)},{passive:!1});let O=!1,V=0,q=0,Q=!1,ce=!1;R.addEventListener("mousedown",xe=>{O=!0,Q=!1,V=xe.pageX,q=R.scrollLeft}),window.addEventListener("mouseup",()=>{O=!1,Q&&(R.style.cursor="",ce=!0),Q=!1}),window.addEventListener("mousemove",xe=>{if(!O)return;const de=xe.pageX-V;!Q&&Math.abs(de)<6||(Q=!0,R.style.cursor="grabbing",xe.preventDefault(),R.scrollLeft=q-de)}),R.addEventListener("click",xe=>{ce&&(xe.stopPropagation(),xe.preventDefault(),ce=!1)},!0)}("col-grid");function X(){const j=document.getElementById("col-filters");j&&(E==="player"?(j.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px;background:#fff;color:#1a1a1a" value="${z}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${wr.map(T=>`
            <button class="filter-btn" data-job="${T}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${T===_?"var(--green)":"var(--tile-border)"};
                background:${T===_?"var(--green)":"#fff"};
                color:${T===_?"#fff":"#555"}">
              ${T}
            </button>`).join("")}
          <button id="sort-note-btn" title="Trier par note"
            style="flex-shrink:0;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${k!=="job"?"var(--green)":"var(--tile-border)"};
              background:${k!=="job"?"var(--green)":"#fff"};
              color:${k!=="job"?"#fff":"#555"}">
            ⇅ Note${k==="note_desc"?" ↓":k==="note_asc"?" ↑":""}
          </button>
          <button id="country-filter-btn" title="Filtrer par pays"
            style="flex-shrink:0;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${K.size?"var(--green)":"var(--tile-border)"};
              background:${K.size?"var(--green)":"#fff"};
              color:${K.size?"#fff":"#555"}">
            🌍${K.size?` (${K.size})`:""}
          </button>
          <button id="club-filter-btn" title="Filtrer par club"
            style="flex-shrink:0;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${J.size?"var(--green)":"var(--tile-border)"};
              background:${J.size?"var(--green)":"#fff"};
              color:${J.size?"#fff":"#555"}">
            🏟️${J.size?` (${J.size})`:""}
          </button>
          <button id="dupes-only-btn" title="Voir les cartes en plusieurs exemplaires"
            style="flex-shrink:0;margin-left:auto;padding:5px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${W?"var(--yellow)":"var(--tile-border)"};
              background:${W?"var(--yellow)":"#fff"};
              color:${W?"#111":"#555"}">
            🗂️×2
          </button>
          <button id="show-all-btn"
            style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${G?"var(--yellow)":"var(--tile-border)"};
              background:${G?"var(--yellow)":"#fff"};
              color:${G?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${G?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",T=>{z=T.target.value.toLowerCase(),ne()}),t.querySelectorAll(".filter-btn").forEach(T=>{T.addEventListener("click",()=>{_=T.dataset.job,X(),ne()})}),document.getElementById("dupes-only-btn").addEventListener("click",()=>{W=!W,X(),ne()}),document.getElementById("show-all-btn").addEventListener("click",()=>{G=!G,X(),ne()}),document.getElementById("sort-note-btn").addEventListener("click",()=>{k=k==="job"?"note_desc":k==="note_desc"?"note_asc":"job",X(),ne()}),document.getElementById("country-filter-btn").addEventListener("click",()=>{U("country","🌍 Filtrer par pays",e)}),document.getElementById("club-filter-btn").addEventListener("click",()=>{U("club","🏟️ Filtrer par club",e)})):(j.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${G?"var(--yellow)":"var(--tile-border)"};
              background:${G?"var(--yellow)":"#fff"};
              color:${G?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${G?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{G=!G,X(),ne()})))}function U(j,T,R){var de,$e,Se;const O=j==="country",V=O?K:J,q=G?l||[]:s.map(ye=>ye.player);let Q;if(O){const ye=new Map;q.forEach(we=>{we!=null&&we.country_code&&!ye.has(we.country_code)&&ye.set(we.country_code,we.country_code)}),Q=[...ye.keys()].sort().map(we=>({value:we,label:we}))}else{const ye=new Map;q.forEach(we=>{var w;we!=null&&we.club_id&&!ye.has(we.club_id)&&ye.set(we.club_id,((w=we.clubs)==null?void 0:w.encoded_name)||we.club_id)}),Q=[...ye.entries()].sort((we,w)=>we[1].localeCompare(w[1])).map(([we,w])=>({value:we,label:w}))}const ce=`
      <div style="display:flex;gap:8px;margin-bottom:10px">
        <button id="mf-all"  class="btn btn-ghost" style="flex:1">Tout cocher</button>
        <button id="mf-none" class="btn btn-ghost" style="flex:1">Tout décocher</button>
      </div>
      <div style="max-height:340px;overflow-y:auto;display:flex;flex-direction:column;gap:2px">
        ${Q.length?Q.map(ye=>`
          <label style="display:flex;align-items:center;gap:8px;padding:6px 4px;font-size:14px;color:#1a1a1a;cursor:pointer">
            <input type="checkbox" class="mf-check" value="${ye.value}" ${V.has(ye.value)?"checked":""}>
            <span>${ye.label}</span>
          </label>`).join(""):'<div style="color:#999;font-size:13px;text-align:center;padding:16px">Aucune option disponible.</div>'}
      </div>`;R.openModal(T,ce,'<button class="btn btn-primary" id="mf-apply" style="width:100%">Appliquer</button>'),(de=document.getElementById("mf-all"))==null||de.addEventListener("click",()=>{document.querySelectorAll(".mf-check").forEach(ye=>ye.checked=!0)}),($e=document.getElementById("mf-none"))==null||$e.addEventListener("click",()=>{document.querySelectorAll(".mf-check").forEach(ye=>ye.checked=!1)}),(Se=document.getElementById("mf-apply"))==null||Se.addEventListener("click",()=>{V.clear(),document.querySelectorAll(".mf-check:checked").forEach(ye=>V.add(ye.value)),R.closeModal(),X(),ne()})}function ne(){const j=document.getElementById("col-grid");j&&(E==="player"?Be(j):E==="formation"?he(j):E==="stadium"?ke(j):me(j))}function ue(j,T,R,O,V,q=0){const Q=document.getElementById("col-grid"),ce=document.getElementById("col-big");if(!Q||!ce)return;var xe=0;function de(){var A;const $e=window.innerWidth>=768,Se=document.getElementById("col-big"),ye=document.getElementById("col-gap"),we=((A=document.getElementById("col-grid"))==null?void 0:A.parentElement)||null,w=Se?Se.closest(".page"):null;if(Se&&we&&w){let F=0;Array.from(w.children).forEach(function(ee){ee!==Se&&ee!==we&&ee!==ye&&(F+=ee.offsetHeight)});const B=Math.max(0,w.clientHeight-F),N=Math.round(B*(q/100)),Y=Math.max(0,B-N),Z=$e?50/71:45/63,te=Math.round(Y*Z),re=Math.max(0,Y-te);ye&&(ye.style.height=N+"px"),Se.style.flex="none",Se.style.height=te+"px",Se.style.minHeight="0",we.style.flex="none",we.style.height=re+"px",we.style.minHeight="0",we.style.display="flex",we.style.overflow="hidden"}const S=document.getElementById("col-grid");S&&(S.style.height="100%",S.style.flexShrink="0",S.style.overflowX="auto",S.style.overflowY="hidden",S.style.alignItems="center",S.style.width="100%"),ce.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+T(j[xe])+"</div>";var C=ce.querySelector("[data-card-id],[data-form-id],[data-gc-id]");C&&C.addEventListener("click",function(){O(j[xe])});var P=ce.querySelector(".big-evolve-btn");P&&P.addEventListener("click",function(F){F.stopPropagation(),O(j[xe],{autoEvolve:!0})}),requestAnimationFrame(function(){var F=document.getElementById("big-card-inner");if(!(!F||!ce)){var B=ce.clientHeight,N=ce.clientWidth-16,Y=F.offsetHeight,Z=F.offsetWidth;if(Y>0&&Z>0&&B>40){var te=Math.min(B/Y,N/Z);F.style.transform="scale("+te.toFixed(3)+")",F.style.transformOrigin="center center"}}}),Q.innerHTML=j.map(function(F,B){var N=B===xe,Y="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(N?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+B+'" style="'+Y+'">'+R(F,N)+"</div>"}).join(""),Q.querySelectorAll(".col-mini-item").forEach(function(F){F.addEventListener("click",function(){xe=Number(F.dataset.idx),de(),F.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var F=S?S.clientHeight:0,B=Q.querySelector(".col-mini-item > div");if(!(!F||!B)){var N=B.style.zoom;B.style.zoom="1";var Y=B.offsetHeight;if(B.style.zoom=N,!(Y<=0)){var Z=F/Y;Q.querySelectorAll(".col-mini-item > div").forEach(function(te){te.style.zoom=Z.toFixed(4)})}}})}de()}function ve(j,T){var R=window.innerWidth>=768?.76:.54,O;if(!j||j._fake){var V=j?j.player:null;if(!V)return"";O=To(V)}else O=Bi(j,"");var q=j&&!j._fake?v[j.player&&j.player.id]||1:0,Q=q>0?'<div style="position:absolute;top:6px;right:6px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:11px;font-weight:900;padding:2px 7px;z-index:3;box-shadow:0 1px 4px rgba(0,0,0,0.4)">×'+q+"</div>":"";return'<div style="display:inline-block;position:relative;zoom:'+R+';pointer-events:none;line-height:0">'+Q+O+"</div>"}function be(j,T,R){var O=R>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+R+"</div>":"",V=!!T,q=si(j,kt[j],{width:160});return V||(q='<div style="filter:grayscale(1);opacity:0.5">'+q+"</div>"),"<div "+(T?'data-form-id="'+T.id+'"':"")+' style="position:relative;cursor:pointer">'+O+q+"</div>"}function je(j,T){var R=window.innerWidth>=768?.76:.54,O=si(j,kt[j],{width:140});return T||(O='<div style="filter:grayscale(1);opacity:0.45">'+O+"</div>"),'<div style="display:inline-block;zoom:'+R+';line-height:0;pointer-events:none">'+O+"</div>"}function Be(j){if(G){const T=L();if(!T.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const R=T.map(O=>s.find(V=>V.player.id===O.id)||{_fake:!0,player:O,id:"fake-"+O.id});ue(R,O=>O._fake?To(O.player):Bi(O,""),O=>O._fake?ve({player:O.player,id:"x",_fake:!0}):ve(O),O=>{O._fake||Ao(O,s,v,e)})}else{const T=M();if(!T.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const R={};T.forEach(V=>{const q=V.player.id;R[q]||(R[q]=[]),R[q].push(V)});const O=Object.values(R).map(V=>kr(V)).filter(V=>!W||(v[V.player.id]||1)>1);if(W&&!O.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte en plusieurs exemplaires.</div>';return}ue(O,V=>{const q=v[V.player.id]||1,Q=q>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${q}</div>`:"",xe=s.filter(de=>de.player.id===V.player.id&&de.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Bi(V,Q+xe,q)},V=>ve(V),(V,q)=>Ao(V,s,v,e,q))}}function he(j){const T=G?g:[...I];if(!T.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const R=T.map(O=>({formation:O,card:c.find(V=>V.formation===O)||null,owned:I.has(O)}));ue(R,({formation:O,card:V,owned:q})=>be(O,q?V:null,q?c.filter(Q=>Q.formation===O).length:0),({formation:O,owned:V})=>je(O,V),({card:O,owned:V})=>{V&&O&&Lr(O,c,e,r)},"#1A6B3C",5)}function me(j){const T=Object.keys(m),R=G?T.length?T:$:[...u];if(!R.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const O=R.map(V=>({type:V,gc:Oe[V]||{icon:"⚡",desc:""},def:m[V]||null,owned:u.has(V),card:p.find(q=>q.gc_type===V)||null}));ue(O,({type:V,gc:q,def:Q,owned:ce,card:xe})=>{var S;const de=(Q==null?void 0:Q.name)||V,$e=ce?p.filter(C=>C.gc_type===V).length:0,Se=$e>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${$e}</div>`:"",ye=(Q==null?void 0:Q.effect)||q.desc||"",we=Q!=null&&Q.image_url?`/icons/${Q.image_url}`:((S=Q==null?void 0:Q.club)==null?void 0:S.logo_url)||(Q!=null&&Q.country_code?`https://flagsapi.com/${Q.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);let w=it(de,we,q.icon,ye,{width:160,onClick:ce});return ce||(w=`<div style="filter:grayscale(1);opacity:0.5">${w}</div>`),`<div ${ce&&xe?`data-gc-id="${xe.id}" data-gc-type="${V}"`:""} style="position:relative">${Se}${w}</div>`},({type:V,gc:q,def:Q,owned:ce})=>{const xe=window.innerWidth>=768?.76:.54,de=(Q==null?void 0:Q.name)||V,$e=(Q==null?void 0:Q.effect)||q.desc||"",Se=Q!=null&&Q.image_url?`/icons/${Q.image_url}`:null;let ye=it(de,Se,q.icon,$e,{width:140});return ce||(ye=`<div style="filter:grayscale(1);opacity:0.45">${ye}</div>`),`<div style="display:inline-block;zoom:${xe};line-height:0;pointer-events:none">${ye}</div>`},({type:V,owned:q,def:Q})=>{q&&zr(V,Q,r)},"#7a28b8",5)}function ke(j){const T="#4FC3F7",R="/";if(!y.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const O={};y.forEach(q=>{const Q=q.stadium_id||"?";(O[Q]=O[Q]||[]).push(q)});const V=Object.entries(O).map(([q,Q])=>({sid:q,def:h[q]||null,count:Q.length,card:Q[0]}));ue(V,({def:q,count:Q})=>{var ye,we;const ce=(q==null?void 0:q.name)||"?",xe=((ye=q==null?void 0:q.club)==null?void 0:ye.encoded_name)||(q==null?void 0:q.country_code)||"—",de=q!=null&&q.image_url?`${R}icons/${q.image_url}`:((we=q==null?void 0:q.club)==null?void 0:we.logo_url)||(q!=null&&q.country_code?`https://flagsapi.com/${q.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),$e=Q>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Q}</div>`:"",Se=`${xe}<br>+10 ⭐ joueurs alliés`;return`<div style="position:relative">${$e}${Ht(ce,de,Se,{width:160})}</div>`},({def:q})=>{var Se,ye;const Q=window.innerWidth>=768?.76:.54,ce=(q==null?void 0:q.name)||"?",xe=((Se=q==null?void 0:q.club)==null?void 0:Se.encoded_name)||(q==null?void 0:q.country_code)||"—",de=q!=null&&q.image_url?`${R}icons/${q.image_url}`:((ye=q==null?void 0:q.club)==null?void 0:ye.logo_url)||(q!=null&&q.country_code?`https://flagsapi.com/${q.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),$e=`${xe}<br>+10 ⭐`;return`<div style="display:inline-block;zoom:${Q};line-height:0;pointer-events:none">${Ht(ce,de,$e,{width:140})}</div>`},null,T,5)}t.querySelectorAll(".col-tab-btn").forEach(j=>{j.addEventListener("click",()=>{E=j.dataset.tab,_="Tous",z="",G=!1,t.querySelectorAll(".col-tab-btn").forEach(T=>{const R=T.dataset.tab===E;T.style.borderBottomColor=R?"var(--green)":"transparent",T.style.color=R?"var(--green)":"var(--tile-fg-dim)"}),X(),ne()})}),X(),ne()}function zr(t,e,i){const o=Oe[t]||{icon:"⚡",desc:"Effet spécial."},n=(e==null?void 0:e.name)||t,r=(e==null?void 0:e.effect)||o.desc,a=e!=null&&e.image_url?`/icons/${e.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      ${it(n,a,o.icon,r,{width:200})}
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const bi=1e3;function Lr(t,e,i,o){var m,f,h;const{state:n,toast:r,closeModal:a,navigate:d,refreshProfile:l}=i,s=t.formation,p={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function c(){const g=kt[s]||{},$=Xi[s]||[],v=290,I=360,u=20;function E(z){const G=g[z];return G?{x:G.x*v,y:G.y*I}:null}let _=`<svg width="${v}" height="${I}" viewBox="0 0 ${v} ${I}" xmlns="http://www.w3.org/2000/svg">`;for(const[z,G]of $){const W=E(z),K=E(G);!W||!K||(_+=`<line x1="${W.x}" y1="${W.y}" x2="${K.x}" y2="${K.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const z of Object.keys(g)){const G=E(z);if(!G)continue;const W=z.replace(/\d+/,""),K=p[W]||"#555";_+=`<circle cx="${G.x}" cy="${G.y}" r="${u}" fill="${K}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,_+=`<text x="${G.x}" y="${G.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${W}</text>`}return _+="</svg>",_}const y=e.filter(g=>g.formation===s);y.length;const b=!t.is_for_sale;o(`Formation ${s}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    ${b?`
    <div style="margin-top:12px;border-top:1px solid var(--tile-border);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${bi}"
          style="flex:1;padding:8px;border:1.5px solid var(--tile-border);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${t.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(m=document.getElementById("direct-sell-form-btn"))==null||m.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${s} pour ${bi.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const g=y.find(v=>!v.is_for_sale)||y[0];if(!g){r("Aucune carte à vendre","error");return}await x.from("market_listings").delete().eq("card_id",g.id),await x.from("transfer_history").delete().eq("card_id",g.id);const{error:$}=await x.from("cards").delete().eq("id",g.id);if($){r($.message,"error");return}await x.from("users").update({credits:(n.profile.credits||0)+bi}).eq("id",n.profile.id),await l(),r(`+${bi.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),d("collection")}),(f=document.getElementById("market-sell-form-btn"))==null||f.addEventListener("click",async()=>{const g=parseInt(document.getElementById("sell-price-form").value);if(!g||g<1){r("Prix invalide","error");return}await x.from("cards").update({is_for_sale:!0,sale_price:g}).eq("id",t.id),await x.from("market_listings").insert({seller_id:n.profile.id,card_id:t.id,price:g}),r("Carte mise en vente sur le marché !","success"),a(),d("collection")}),(h=document.getElementById("cancel-sell-form-btn"))==null||h.addEventListener("click",async()=>{await x.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await x.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),r("Annonce retirée","success"),a(),d("collection")})}async function Ao(t,e,i,o,n={}){var U,ne,ue,ve,be,je,Be,he,me,ke,j;const{state:r,toast:a,openModal:d,closeModal:l,navigate:s,refreshProfile:p}=o,c=t.player,y=e.filter(T=>T.player.id===c.id),b=y.length,m=t.evolution_bonus||0,f=Math.max((Number(c.note_g)||0)+(c.job==="GK"||c.job2==="GK"?m:0),(Number(c.note_d)||0)+(c.job==="DEF"||c.job2==="DEF"?m:0),(Number(c.note_m)||0)+(c.job==="MIL"||c.job2==="MIL"?m:0),(Number(c.note_a)||0)+(c.job==="ATT"||c.job2==="ATT"?m:0)),h=c.rarity||"normal",{data:g}=await x.from("sell_price_configs").select("*").eq("rarity",h).lte("note_min",f).gte("note_max",f).order("note_min",{ascending:!1}).limit(1),$=((U=g==null?void 0:g[0])==null?void 0:U.price)??_r[h]??1e3,v=((ne=g==null?void 0:g[0])==null?void 0:ne.price_min)??null,I=((ue=g==null?void 0:g[0])==null?void 0:ue.price_max)??null;Ct(c);const u=gi(c,c.job)+m,E=c.job2?gi(c,c.job2)+(gi(c,c.job2)>0?m:0):null;Zt[c.job],c.job2&&Zt[c.job2];const _=vr[c.rarity]||"#ccc",z=$r[c.country_code]||c.country_code||"",G=t.evolution_bonus||0,K=u+G,J=E||0,k=J>0?J+G:0,H=y.map(T=>T.id);let oe={};if(H.length){const{data:T}=await x.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",H).order("transferred_at",{ascending:!0});(T||[]).forEach(R=>{oe[R.card_id]||(oe[R.card_id]=[]),oe[R.card_id].push(R)})}const D=H.length?`
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
          ${v!==null&&I!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${v.toLocaleString("fr")}</b> – <b>${I.toLocaleString("fr")}</b> cr.
          </div>`:""}
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <input type="number" id="single-sell-price" min="1" placeholder="Prix"
              value="${v||c.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="single-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
          <button id="single-direct-sell-btn" class="btn btn-ghost" style="width:100%;border-color:#1A6B3C;color:#1A6B3C;font-weight:700">
            ⚡ Vente directe immédiate (${(v??$).toLocaleString("fr")} cr.)
          </button>
        </div>
      `}

      ${b-1>0?`<div style="font-size:13px;font-weight:700;margin-bottom:10px">🗂️ Copies (${b-1})</div>`:`
        <div style="font-size:12px;color:#aaa;font-style:italic">Aucune autre copie.</div>
      `}
      <!-- Grille de mini-cartes (copies uniquement, l'exemplaire 1 = carte principale affichée en haut) -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${y.filter(T=>T.id!==t.id).map((T,R)=>{const O=oe[T.id]||[],V=T.is_for_sale,q=O.length?O[O.length-1]:null,Q=T.evolution_bonus||0,ce=q?q.source==="booster"?"Booster":q.price?q.price.toLocaleString("fr")+" cr.":"—":"—",xe=q?new Date(q.transferred_at).toLocaleDateString("fr",{day:"2-digit",month:"2-digit",year:"numeric"}):"",de=80,$e=Math.round(de*657/507),Se=qe({...c,_evolution_bonus:Q},{width:de});return`
            <div class="exemplaire-row" data-card-id="${T.id}" data-card-idx="${R}"
              style="position:relative;cursor:${V?"not-allowed":"pointer"};opacity:${V?.55:1};transition:transform .1s">
              <!-- Checkbox cachée -->
              <input type="checkbox" class="expl-check"
                data-id="${T.id}" data-evo="${Q}" data-note="${gi(c,c.job)}"
                ${V?"disabled":""}
                style="display:none">
              <!-- Wrapper exactement aux dimensions de la carte -->
              <div class="expl-mini-card" style="position:relative;width:${de}px;height:${$e}px;border-radius:8px;overflow:hidden">
                ${Se}
                <!-- Overlay vert sélection — couvre toute la carte -->
                <div class="expl-sel-overlay" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(26,107,60,0.38);pointer-events:none;z-index:10;box-shadow:inset 0 0 0 3px #1A6B3C;border-radius:8px"></div>
                <!-- Checkmark -->
                <div class="expl-sel-check" style="display:none;position:absolute;top:5px;left:5px;width:20px;height:20px;background:#1A6B3C;border-radius:50%;z-index:11;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:900">✓</div>
                ${V?'<div style="position:absolute;top:0;right:0;background:#e67e22;color:#fff;font-size:6px;font-weight:900;padding:2px 4px;border-radius:0 6px 0 4px;z-index:12">VENTE</div>':""}
              </div>
              <!-- Source + date -->
              <div style="font-size:9px;color:#888;text-align:center;margin-top:3px;line-height:1.3">
                ${ce}${xe?`<br>${xe}`:""}
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
              ${(t.evolution_bonus||0)>0?`+${t.evolution_bonus} appliqué${t.evolution_bonus>1?"s":""} · Note : ${K}${c.job2&&J>0?` / ${k}`:""}`:`Note actuelle : ${K}${c.job2&&J>0?` / ${k}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${b<=1?"#ccc":"#1A6B3C"};border-color:${b<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${b<=1?"not-allowed":"pointer"}"
            ${b<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${`
        <div style="border-top:1px solid #d1fae5;padding-top:8px">
          <div style="font-size:11px;color:#555;margin-bottom:6px">Marché des transferts (prix par carte)</div>
          ${v!==null&&I!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${v.toLocaleString("fr")}</b> – <b>${I.toLocaleString("fr")}</b> cr. / carte
          </div>`:""}
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${v||c.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
          <button id="market-direct-sell-btn" class="btn btn-ghost" style="width:100%;border-color:#1A6B3C;color:#1A6B3C;font-weight:700">
            ⚡ Vente directe immédiate (${(v??$).toLocaleString("fr")} cr./carte)
          </button>
        </div>`}
      </div>
    </div>`:"";d(`${c.firstname} ${c.surname_real}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${qe({...c,_evolution_bonus:m},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:12px">

        <!-- Rareté + carte évolutive -->
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:3px">RARETÉ</div>
          <div style="font-weight:900;font-size:15px;color:${c.rarity==="normal"?"#555":c.rarity==="papyte"?"#707070":_}">${c.rarity.toUpperCase()}</div>
          ${c.rarity==="pepite"||c.rarity==="papyte"?`
          <div style="margin-top:8px;background:${_}12;border-left:3px solid ${_};border-radius:0 8px 8px 0;padding:10px 12px">
            <div style="font-size:11px;font-weight:700;color:${_};margin-bottom:4px">✨ Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5;margin-bottom:6px">
              ${c.rarity==="pepite"?'⬆️ Bonus évolution : <b style="color:#D4A017">+30%</b>':'⬇️ Malus évolution : <b style="color:#909090">-30%</b>'}
            </div>
            <div style="font-size:10.5px;color:#888;line-height:1.5;font-style:italic;border-top:1px solid ${_}30;padding-top:6px">
              ${c.rarity==="pepite"?"Une carte Pépite est promise à un grand avenir : à force d'évoluer, elle peut un jour devenir une Légende.":"Une carte Papyte peut devenir une légende dans le temps ou prendre sa retraite..."}
            </div>
          </div>`:""}
        </div>

        <!-- Grille d'infos : Pays / Club / Postes -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px 16px;background:#f8f8f8;border-radius:10px;padding:10px 12px">
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">PAYS</div>
            <div style="font-weight:700;font-size:13px;color:#333">${z||"—"}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">CLUB</div>
            <div style="font-weight:700;font-size:13px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${((ve=c.clubs)==null?void 0:ve.encoded_name)||"—"}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">POSTE PRINCIPAL</div>
            <div style="font-weight:700;font-size:13px;color:${Zt[c.job]||"#333"}">${c.job}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">POSTE SECONDAIRE</div>
            <div style="font-weight:700;font-size:13px;color:${c.job2?Zt[c.job2]||"#333":"#bbb"}">${c.job2||"Aucun"}</div>
          </div>
        </div>

        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",c.note_g],["DEF",c.note_d],["MIL",c.note_m],["ATT",c.note_a]].map(([T,R])=>{const O=Zt[T],V=T==="GK"?"#fff":O,q=T===c.job||T===c.job2,Q=(Number(R)||0)+(q&&G>0?G:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${O};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${V};font-family:Arial Black,Arial;line-height:1">${Q}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${V}">${T}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:900;font-size:18px;color:#1A6B3C">×${b}</div>
        </div>
      </div>
    </div>
    ${D}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(be=document.getElementById("close-detail"))==null||be.addEventListener("click",l);let se=new Set;const fe=c.rarity==="pepite"?1.3:c.rarity==="papyte"?.7:1;function M(){let T=0;return document.querySelectorAll(".expl-check:checked").forEach(R=>{if(R.dataset.id===t.id)return;const V=Number(R.dataset.evo)||0,q=Number(R.dataset.note)||0;T+=q+V}),Math.round(T*fe)}const L=()=>{const T=se.size,R=document.getElementById("sell-action-panel");if(!R)return;R.style.display=T>0?"block":"none",document.getElementById("sell-selected-count").textContent=T;const O=document.getElementById("evolve-btn");if(O){const V=M();O.textContent=V>0?`⬆️ Évoluer (+${V})`:"⬆️ Évoluer"}};if(document.querySelectorAll(".expl-check").forEach(T=>{T.addEventListener("change",()=>{const R=T.dataset.id;T.checked?se.add(R):se.delete(R);const O=T.closest(".exemplaire-row");if(O){const V=O.querySelector(".expl-sel-overlay"),q=O.querySelector(".expl-sel-check");V&&(V.style.display=T.checked?"block":"none"),q&&(q.style.display=T.checked?"flex":"none"),O.style.transform=T.checked?"scale(1.05)":"scale(1)"}L()})}),n.autoEvolve){document.querySelectorAll(".expl-check").forEach(R=>{if(R.dataset.id===t.id)return;R.checked=!0,se.add(R.dataset.id);const O=R.closest(".exemplaire-row");if(O){const V=O.querySelector(".expl-sel-overlay"),q=O.querySelector(".expl-sel-check");V&&(V.style.display="block"),q&&(q.style.display="flex"),O.style.transform="scale(1.05)"}}),L();const T=document.getElementById("modal-overlay");T&&(T.style.visibility="hidden"),requestAnimationFrame(()=>{const R=document.getElementById("evolve-btn");if(!R||R.disabled){T&&(T.style.visibility="");return}R.click();const O=new MutationObserver(()=>{[...document.body.children].some(q=>{var Q;return((Q=q.style)==null?void 0:Q.zIndex)==="9999"})||(O.disconnect(),T&&(T.style.visibility="",T.classList.contains("hidden")||l()))});O.observe(document.body,{childList:!0})})}document.querySelectorAll(".exemplaire-row").forEach(T=>{T.addEventListener("click",R=>{if(R.target.tagName==="INPUT")return;const O=T.querySelector(".expl-check");O&&!O.disabled&&(O.checked=!O.checked,O.dispatchEvent(new Event("change")))})}),(je=document.getElementById("evolve-btn"))==null||je.addEventListener("click",async()=>{if(b<=1)return;const T=[...se];if(!T.length)return;if(se.has(t.id)){const de=document.createElement("div");de.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",de.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(de),de.querySelector("#err-close").addEventListener("click",()=>de.remove()),de.addEventListener("click",$e=>{$e.target===de&&de.remove()});return}const R=T.filter(de=>de!==t.id);if(!R.length){a("Sélectionne des copies à sacrifier","warning");return}const O=R.reduce((de,$e)=>{const Se=document.querySelector(`.expl-check[data-id="${$e}"]`),ye=Se&&Number(Se.dataset.evo)||0,we=Se&&Number(Se.dataset.note)||0;return de+we+ye},0),V=Math.round(O*fe),q=c.rarity==="pepite"?" (+30% pépite ✨)":c.rarity==="papyte"?" (-30% papyte)":"";if(!await new Promise(de=>{const $e=document.createElement("div");$e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",$e.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${c.firstname} ${c.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${R.length}</strong> copie${R.length>1?"s":""} sacrifiée${R.length>1?"s":""}<br>
            ➕ Brut : <strong>+${O}</strong>${q?`<span style="font-size:11px;color:#888"> ${q}</span>`:""}<br>
            ⬆️ Bonus final : <strong style="color:#1A6B3C">+${V}</strong><br>
            📈 Évolution : <strong>${t.evolution_bonus||0}</strong> → <strong style="color:#1A6B3C">${(t.evolution_bonus||0)+V}</strong><br>
            📊 Note finale : <strong>${u}</strong> → <strong style="color:#1A6B3C">${u+V}</strong>
            ${E&&E>0?`<br>📊 Note 2 finale : <strong>${E}</strong> → <strong style="color:#1A6B3C">${E+V}</strong>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild($e),$e.querySelector("#sac-cancel").addEventListener("click",()=>{$e.remove(),de(!1)}),$e.querySelector("#sac-ok").addEventListener("click",()=>{$e.remove(),de(!0)}),$e.addEventListener("click",Se=>{Se.target===$e&&($e.remove(),de(!1))})}))return;if(R.length){await x.from("market_listings").delete().in("card_id",R),await x.from("deck_cards").delete().in("card_id",R),await x.from("transfer_history").delete().in("card_id",R),await x.from("decks").update({stadium_card_id:null}).in("stadium_card_id",R);const{error:de}=await x.from("cards").delete().in("id",R);if(de){a("Erreur suppression : "+de.message,"error");return}}const ce=(t.evolution_bonus||0)+V,{error:xe}=await x.from("cards").update({evolution_bonus:ce}).eq("id",t.id);if(xe){a("Erreur évolution : "+xe.message,"error");return}a(`⬆️ ${c.firstname} ${c.surname_real} : note ${u} → ${u+ce} (+${V}) !`,"success",4e3),l(),s("collection")});async function X(T){const{data:R}=await x.from("sell_price_configs").select("price_min, price_max").eq("rarity",c.rarity).lte("note_min",u).gte("note_max",u).order("note_max",{ascending:!0}).limit(1).maybeSingle();return R?T<R.price_min||T>R.price_max?{ok:!1,min:R.price_min,max:R.price_max}:{ok:!0}:{ok:!0}}(Be=document.getElementById("market-sell-btn"))==null||Be.addEventListener("click",async()=>{var ce;const T=[...se];if(!T.length){a("Sélectionne au moins un exemplaire","warning");return}const R=parseInt((ce=document.getElementById("sell-market-price"))==null?void 0:ce.value);if(!R||R<1){a("Prix invalide","error");return}const O=await X(R);if(!O.ok){a(`Prix hors grille : entre ${O.min.toLocaleString("fr")} et ${O.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:V}=await x.from("cards").update({is_for_sale:!0,sale_price:R}).in("id",T);if(V){a(V.message,"error");return}const q=T.map(xe=>({seller_id:r.profile.id,card_id:xe,price:R,status:"active"})),{error:Q}=await x.from("market_listings").insert(q);Q&&console.warn("[Market] insert listings:",Q.message),a(`${T.length} carte${T.length>1?"s":""} mise${T.length>1?"s":""} en vente à ${R.toLocaleString("fr")} cr. chacune !`,"success"),l(),s("collection")}),(he=document.getElementById("single-sell-btn"))==null||he.addEventListener("click",async()=>{var q;const T=parseInt((q=document.getElementById("single-sell-price"))==null?void 0:q.value);if(!T||T<1){a("Prix invalide","error");return}const R=await X(T);if(!R.ok){a(`Prix hors grille : entre ${R.min.toLocaleString("fr")} et ${R.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:O}=await x.from("cards").update({is_for_sale:!0,sale_price:T}).eq("id",t.id);if(O){a(O.message,"error");return}const{error:V}=await x.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:T,status:"active"});V&&console.warn("[Market] insert listing:",V.message),a(`Carte mise en vente à ${T.toLocaleString("fr")} cr. !`,"success"),l(),s("collection")}),(me=document.getElementById("single-direct-sell-btn"))==null||me.addEventListener("click",async()=>{const T=v??$;if(!confirm(`Vendre cette carte immédiatement pour ${T.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;await x.from("market_listings").delete().eq("card_id",t.id),await x.from("transfer_history").delete().eq("card_id",t.id);const{error:R}=await x.from("cards").delete().eq("id",t.id);if(R){a(R.message,"error");return}await x.from("users").update({credits:(r.profile.credits||0)+T}).eq("id",r.profile.id),await p(),a(`+${T.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),s("collection")}),(ke=document.getElementById("market-direct-sell-btn"))==null||ke.addEventListener("click",async()=>{const T=[...se];if(!T.length){a("Sélectionne au moins un exemplaire","warning");return}const O=(v??$)*T.length;if(!confirm(`Vendre ${T.length} carte${T.length>1?"s":""} immédiatement pour ${O.toLocaleString("fr")} crédits au total ? Cette action est irréversible.`))return;await x.from("market_listings").delete().in("card_id",T),await x.from("transfer_history").delete().in("card_id",T);const{error:V}=await x.from("cards").delete().in("id",T);if(V){a(V.message,"error");return}await x.from("users").update({credits:(r.profile.credits||0)+O}).eq("id",r.profile.id),await p(),a(`+${O.toLocaleString("fr")} crédits ! ${T.length} carte${T.length>1?"s":""} vendue${T.length>1?"s":""}.`,"success"),l(),s("collection")}),(j=document.getElementById("cancel-sell-btn"))==null||j.addEventListener("click",async()=>{await x.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await x.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),a("Annonce retirée","success"),l(),s("collection")})}function Mo(t,e=""){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${t}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(e||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const n=o.querySelector("#pm-input");n.focus(),n.select();const r=a=>{o.remove(),i(a)};o.querySelector("#pm-ok").addEventListener("click",()=>r(n.value.trim()||null)),o.querySelector("#pm-cancel").addEventListener("click",()=>r(null)),o.querySelector("#pm-cancel2").addEventListener("click",()=>r(null)),o.addEventListener("click",a=>{a.target===o&&r(null)}),n.addEventListener("keydown",a=>{a.key==="Enter"&&r(n.value.trim()||null),a.key==="Escape"&&r(null)})})}function Sr(t,e=!1){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${t}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${e?"":"btn-primary"}" id="cm-ok" style="${e?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const n=r=>{o.remove(),i(r)};o.querySelector("#cm-ok").addEventListener("click",()=>n(!0)),o.querySelector("#cm-cancel").addEventListener("click",()=>n(!1)),o.addEventListener("click",r=>{r.target===o&&n(!1)})})}const $i={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Oi(t,e){const{state:i,navigate:o,toast:n}=e;Vt(o,i.profile,"decks","/icons/",n),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await x.from("decks").select("id,name,formation,stadium_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1}),a=[...new Set((r||[]).map(l=>l.stadium_card_id).filter(Boolean))];let d={};if(a.length){const{data:l}=await x.from("cards").select("id, stadium_id, stadium_definitions(image_url, country_code, club:clubs(logo_url))").in("id",a);(l||[]).forEach(s=>{var y;const p=s.stadium_definitions,c=((y=p==null?void 0:p.club)==null?void 0:y.logo_url)||(p!=null&&p.image_url?`/icons/${p.image_url}`:null)||(p!=null&&p.country_code?`https://flagsapi.com/${p.country_code}/flat/64.png`:null);d[s.id]=c})}t.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const l=await Mo("Nom du deck",`Deck ${((r==null?void 0:r.length)||0)+1}`);if(!l)return;const{data:s,error:p}=await x.from("decks").insert({owner_id:i.profile.id,name:l}).select().single();if(p){n(p.message,"error");return}n("Deck créé !","success"),Co(s.id,t,e)}),t.querySelectorAll("[data-open-deck]").forEach(l=>{l.addEventListener("click",()=>Co(l.dataset.openDeck,t,e))}),t.querySelectorAll("[data-rename]").forEach(l=>{l.addEventListener("click",async()=>{const s=await Mo("Nouveau nom",l.dataset.name);if(!s||s===l.dataset.name)return;const{error:p}=await x.from("decks").update({name:s}).eq("id",l.dataset.rename);if(p){n(p.message,"error");return}n("Deck renommé !","success"),Oi(t,e)})}),t.querySelectorAll("[data-delete]").forEach(l=>{l.addEventListener("click",async()=>{if(!await Sr(`Supprimer le deck "${l.dataset.name}" ? Cette action est irréversible.`,!0))return;await x.from("deck_cards").delete().eq("deck_id",l.dataset.delete);const{error:s}=await x.from("decks").delete().eq("id",l.dataset.delete);if(s){n(s.message,"error");return}n("Deck supprimé.","success"),Oi(t,e)})})}async function Co(t,e,i){const{state:o,toast:n}=i;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await x.from("decks").select("*").eq("id",t).single(),{data:a}=await x.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:d}=await x.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id).eq("card_type","stadium"),l=(a||[]).filter(g=>g.card_type==="player"&&g.player),s=(a||[]).filter(g=>g.card_type==="formation"),p=(d||[]).filter(g=>g.card_type==="stadium"),c=[...new Set(p.map(g=>g.stadium_id).filter(Boolean))];let y={};if(p.forEach(g=>{g.stadium_def&&g.stadium_id&&(y[g.stadium_id]=g.stadium_def)}),c.length&&Object.keys(y).length<c.length){const{data:g}=await x.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",c);(g||[]).forEach($=>{y[$.id]=$})}const b=s.map(g=>g.formation).filter(Boolean),{data:m}=await x.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",t);let f=r.formation||"4-4-2";b.length>0&&!b.includes(f)&&(f=b[0]);const h={deckId:t,name:r.name,formation:f,formationCardId:r.formation_card_id,stadiumCardId:r.stadium_card_id||null,slots:{},subs:[],playerCards:l,formationCards:s,stadiumCards:p,stadDefMap:y,availableFormations:b};(m||[]).forEach(g=>{g.is_starter?h.slots[g.position]=g.card_id:h.subs.includes(g.card_id)||h.subs.push(g.card_id)}),$t(e,h,i,!0)}function $t(t,e,i,o=!1){var f,h;const{navigate:n}=i;o||Cr(e,i),$i[e.formation];const r=jo(e.formation),a=r.filter(g=>e.slots[g]).length,d=e.availableFormations.length>0?e.availableFormations:Object.keys($i),l=(f=e.stadiumCards)==null?void 0:f.find(g=>g.id===e.stadiumCardId),s=l&&((h=e.stadDefMap)==null?void 0:h[l.stadium_id])||null,p=e.subs.map(g=>e.playerCards.find($=>$.id===g)).filter(Boolean);p.length!==e.subs.length&&(e.subs=p.map(g=>g.id)),[...Object.values(e.slots),...e.subs],t.innerHTML=`
  <style>.no-scrollbar::-webkit-scrollbar{display:none}</style>
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:8px;padding:6px 12px;min-height:0">
      <button class="btn-icon" id="builder-back" style="font-size:16px">←</button>
      <div style="flex:1">
        <h2 style="font-size:14px;margin:0">${e.name}</h2>
        <p style="font-size:11px;margin:0">${a}/11 · ${p.length}/5 rempl.</p>
      </div>
    </div>



    <!-- ── LAYOUT PC ─────────────────────────────────────── -->
    <div class="deck-pc-layout" style="display:none">
      <div style="display:flex;gap:0;min-height:600px">

        <!-- Remplaçants (colonne gauche) -->
        <div style="width:105px;flex-shrink:0;background:rgba(0,0,0,0.3);display:flex;flex-direction:column;align-items:center;padding:12px 6px;gap:8px;border-right:1px solid rgba(255,255,255,0.1)">


          <!-- Remplaçants PC : colonne verticale -->
          <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;text-align:center;margin-top:8px">Remplaçants<br>(${p.length}/5)</div>
          <div style="display:flex;flex-direction:column;gap:6px;align-items:center" id="subs-list">
            ${p.map(g=>{const $={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:24px">
                ${qe({...$,_evolution_bonus:$._evolution_bonus||0},{width:90,showStad:!0,stadDef:s})}
                <button data-remove-sub="${g.id}"
                  style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:20px;height:20px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
              </div>`}).join("")}
            ${p.length<5?'<div id="add-sub-btn" style="width:90px;height:117px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:18px;color:rgba(255,255,255,0.4);cursor:pointer">+</div>':""}
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
              ${si(e.formation,kt[e.formation],{width:100})}
            </div>
          </div>
          <!-- Stade -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">🏟️ Stade</div>
            <div id="add-stad-btn-pc" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${l?(()=>{var v;const g=e.stadDefMap[l.stadium_id],$=((v=g==null?void 0:g.club)==null?void 0:v.logo_url)||(g==null?void 0:g.image_url)||(g!=null&&g.country_code?`https://flagsapi.com/${g.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ht((g==null?void 0:g.name)||"Stade",$,"+10 ⭐",{width:100})})():`<div style="width:100px;height:171px;border:2px dashed rgba(79,195,247,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
                <span style="font-size:36px">🏟️</span>
                <span style="font-size:10px;color:rgba(255,255,255,0.4)">Ajouter</span>
              </div>`}
            </div>
          </div>
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
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">Remplaçants (${p.length}/5)</div>
            <div style="display:flex;gap:2px;align-items:center;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none" id="subs-list" class="no-scrollbar">
              ${p.map(g=>{const $={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:20px">
                  ${qe({...$,_evolution_bonus:$._evolution_bonus||0},{width:44,showStad:!0,stadDef:s})}
                  <button data-remove-sub="${g.id}"
                    style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:16px;height:16px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
                </div>`}).join("")}
              ${p.length<5?'<div id="add-sub-btn" style="width:44px;height:57px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:14px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
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
              ${l?(()=>{var v;const g=e.stadDefMap[l.stadium_id],$=((v=g==null?void 0:g.club)==null?void 0:v.logo_url)||(g==null?void 0:g.image_url)||(g!=null&&g.country_code?`https://flagsapi.com/${g.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ht((g==null?void 0:g.name)||"Stade",$,"+10⭐",{width:44})})():`<div style="width:44px;height:57px;border:2px dashed rgba(79,195,247,0.5);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
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
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${a<11?"disabled":""}>
        ${a<11?`Placez encore ${11-a} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
      <div class="autosave-indicator" style="text-align:center;font-size:11px;color:var(--tile-fg-dim);margin-top:6px;opacity:0;transition:opacity .3s"></div>
    </div>
  </div>`;const c=window.innerWidth>=900,y=t.querySelector(".deck-pc-layout"),b=t.querySelector(".deck-mobile-layout");y&&(y.style.display=c?"block":"none"),b&&(b.style.display=c?"none":"block"),t.querySelectorAll("#save-deck").forEach(g=>{g.closest(".page-body").style.display=c?"none":"block"}),Ir(t,e,r,i),t.querySelectorAll("#builder-back").forEach(g=>g.addEventListener("click",()=>n("decks")));const m=()=>{const{openModal:g,closeModal:$}=i,I=`<div style="display:flex;flex-wrap:wrap;gap:12px;padding:8px;justify-content:center">
      ${[...new Set(d)].map(u=>{const E=u===e.formation;return`<div data-forma="${u}" style="cursor:pointer;border-radius:10px;${E?"box-shadow:0 0 0 3px #1A6B3C":""}">
          ${si(u,kt[u],{width:90})}
        </div>`}).join("")}
    </div>`;g("⚽ Choisir une formation",I),document.querySelectorAll("#modal-body [data-forma]").forEach(u=>{u.addEventListener("click",()=>{e.formation=u.dataset.forma;const E=jo(e.formation),_={};E.forEach(z=>{e.slots[z]&&(_[z]=e.slots[z])}),e.slots=_,$(),$t(t,e,i)})})};t.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(g=>g.addEventListener("click",m)),t.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(g=>g.addEventListener("click",()=>Tr(e,t,i))),t.querySelectorAll("#save-deck, #save-deck-pc").forEach(g=>g.addEventListener("click",()=>jr(e,i))),t.querySelectorAll("[data-remove-sub]").forEach(g=>{g.addEventListener("click",()=>{e.subs=e.subs.filter($=>$!==g.dataset.removeSub),$t(t,e,i)})}),t.querySelectorAll("#add-sub-btn").forEach(g=>g.addEventListener("click",()=>Mr(e,t,i)))}function Ir(t,e,i,o){var v,I,u;const n=window.innerWidth>=900,r=t.querySelector(n?"#deck-field-pc":"#deck-field-mobile");if(!r)return;const a=(v=e.stadiumCards)==null?void 0:v.find(E=>E.id===e.stadiumCardId),d=a&&((I=e.stadDefMap)==null?void 0:I[a.stadium_id])||null,l=kt[e.formation]||{},s=Ko(e.formation)||[],p={};for(const E of i){const _=e.slots[E],z=_?e.playerCards.find(G=>G.id===_):null;z!=null&&z.player?p[E]={...z.player,_evolution_bonus:z.evolution_bonus||0,face:z.player.face||null}:p[E]=null}const c=window.innerWidth>=900,y=c?window.innerWidth-280:window.innerWidth-20,b=c?Math.min(y,860):y,m=Math.round(c?b*.82:b*.85),f=c?84:44;let h="";for(const[E,_]of s){const z=l[E],G=l[_];if(!z||!G)continue;const W=z.x*b,K=Math.round(.03*m+z.y*.85*m),J=G.x*b,k=Math.round(.03*m+G.y*.85*m),H=p[E],oe=p[_],D=Si(H,oe);D==="#ff3333"||D==="#cc2222"?h+=`<line x1="${W.toFixed(1)}" y1="${K.toFixed(1)}" x2="${J.toFixed(1)}" y2="${k.toFixed(1)}" stroke="${D}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(h+=`<line x1="${W.toFixed(1)}" y1="${K.toFixed(1)}" x2="${J.toFixed(1)}" y2="${k.toFixed(1)}" stroke="${D}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,h+=`<line x1="${W.toFixed(1)}" y1="${K.toFixed(1)}" x2="${J.toFixed(1)}" y2="${k.toFixed(1)}" stroke="${D}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let g="";const $=Math.round(f*657/507);for(const E of i){const _=l[E];if(!_)continue;const z=p[E],G=_.x*b;_.y*m;const W=Math.round(.03*m+_.y*(.85*m)),K=Math.round(G-f/2),J=Math.round(W-$/2);if(z){const k=E.replace(/\d+/,""),H=d&&(d.club_id&&String(z.club_id)===String(d.club_id)||d.country_code&&z.country_code===d.country_code),oe=qe({...z,_evolution_bonus:z._evolution_bonus||0},{width:f,showStad:!0,stadDef:d,role:k});H&&((u=d.club)!=null&&u.logo_url||d.image_url),g+=`<div style="position:absolute;left:${K}px;top:${J}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${E}">
        <div style="position:relative">${oe}</div>
      </div>`}else{const k=E.replace(/\d+/,"");g+=`<div style="position:absolute;left:${K}px;top:${J}px;width:${f}px;height:${$}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${E}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${k}</span>
      </div>`}}r.innerHTML=`
    <div style="position:relative;width:${b}px;height:${m}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${b} ${m}">${h}</svg>
      ${g}
    </div>`,r.querySelectorAll(".deck-slot-hit").forEach(E=>{E.addEventListener("click",()=>Ar(E.dataset.pos,e,t,o))})}function Tr(t,e,i){var d;const{openModal:o,closeModal:n}=i,r=new Set,a=(t.stadiumCards||[]).filter(l=>{const s=l.stadium_id||l.id;return r.has(s)?!1:(r.add(s),!0)});o("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:90px;text-align:center">
        <div style="width:85px;height:112px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${t.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:26px">🚫</span>
          <span style="font-size:10px;color:#666">Aucun</span>
        </div>
      </div>
      ${a.map(l=>{var b;const s=t.stadDefMap[l.stadium_id],p=((b=s==null?void 0:s.club)==null?void 0:b.logo_url)||(s==null?void 0:s.image_url)||(s!=null&&s.country_code?`https://flagsapi.com/${s.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),c=t.stadiumCardId===l.id,y=Ht((s==null?void 0:s.name)||"Stade",p,"+10⭐",{width:90});return`<div class="stad-choice" data-stad-id="${l.id}" style="cursor:pointer;position:relative;border-radius:8px;${c?"box-shadow:0 0 0 3px #4fc3f7":""}">
          ${y}
        </div>`}).join("")}
    </div>`),(d=document.getElementById("stad-none"))==null||d.addEventListener("click",()=>{t.stadiumCardId=null,n(),$t(e,t,i)}),document.querySelectorAll(".stad-choice").forEach(l=>{l.addEventListener("click",()=>{t.stadiumCardId=l.dataset.stadId,n(),$t(e,t,i)})})}function Ar(t,e,i,o){var m,f,h,g,$;const{openModal:n,closeModal:r}=o,a=t.replace(/\d+/,""),d=(m=e.stadiumCards)==null?void 0:m.find(v=>v.id===e.stadiumCardId),l=d&&((f=e.stadDefMap)==null?void 0:f[d.stadium_id])||null,s=e.slots[t],p=s?e.playerCards.find(v=>v.id===s):null;(h=p==null?void 0:p.player)==null||h.id;const c=new Set;Object.entries(e.slots).forEach(([v,I])=>{var E;if(v===t||!I)return;const u=e.playerCards.find(_=>_.id===I);(E=u==null?void 0:u.player)!=null&&E.id&&c.add(u.player.id)}),e.subs.forEach(v=>{var u;const I=e.playerCards.find(E=>E.id===v);(u=I==null?void 0:I.player)!=null&&u.id&&c.add(I.player.id)});const y=new Set,b=e.playerCards.filter(v=>{const I=v.player;return!(I.job===a||I.job2===a)||c.has(I.id)||y.has(I.id)?!1:(y.add(I.id),!0)});b.sort((v,I)=>{const u=v.evolution_bonus||0,E=I.evolution_bonus||0,_=(a==="GK"?v.player.note_g:a==="DEF"?v.player.note_d:a==="MIL"?v.player.note_m:v.player.note_a)+(a===v.player.job||a===v.player.job2?u:0);return(a==="GK"?I.player.note_g:a==="DEF"?I.player.note_d:a==="MIL"?I.player.note_m:I.player.note_a)+(a===I.player.job||a===I.player.job2?E:0)-_}),n(`Choisir ${a} — ${t}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${e.slots[t]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${b.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+b.map(v=>{const I={...v.player,_evolution_bonus:v.evolution_bonus||0};return`<div class="player-option" data-card-id="${v.id}" style="cursor:pointer">
          ${qe(I,{width:100,showStad:!0,stadDef:l,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(g=document.getElementById("close-selector"))==null||g.addEventListener("click",r),($=document.getElementById("remove-player"))==null||$.addEventListener("click",()=>{delete e.slots[t],r(),$t(i,e,o)}),document.querySelectorAll(".player-option").forEach(v=>{v.addEventListener("click",()=>{e.slots[t]=v.dataset.cardId,r(),$t(i,e,o)})})}function Mr(t,e,i){var p,c,y;const{openModal:o,closeModal:n}=i,r=(p=t.stadiumCards)==null?void 0:p.find(b=>b.id===t.stadiumCardId),a=r&&((c=t.stadDefMap)==null?void 0:c[r.stadium_id])||null,d=new Set;Object.keys(t.slots).forEach(b=>{var h;const m=t.slots[b];if(!m)return;const f=t.playerCards.find(g=>g.id===m);(h=f==null?void 0:f.player)!=null&&h.id&&d.add(f.player.id)}),t.subs.forEach(b=>{var f;const m=t.playerCards.find(h=>h.id===b);(f=m==null?void 0:m.player)!=null&&f.id&&d.add(m.player.id)});const l=new Set,s=t.playerCards.filter(b=>{var m,f,h;return d.has((m=b.player)==null?void 0:m.id)||l.has((f=b.player)==null?void 0:f.id)?!1:(l.add((h=b.player)==null?void 0:h.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+s.map(b=>{const m={...b.player,_evolution_bonus:b.evolution_bonus||0};return`<div class="player-option" data-card-id="${b.id}" style="cursor:pointer">
          ${qe(m,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(y=document.getElementById("close-sub-selector"))==null||y.addEventListener("click",n),document.querySelectorAll(".player-option").forEach(b=>{b.addEventListener("click",()=>{t.subs.push(b.dataset.cardId),n(),$t(e,t,i)})})}async function mn(t){const e=t.formationCards.find(n=>n.formation===t.formation),i=(e==null?void 0:e.id)||t.formationCardId;await x.from("decks").update({formation:t.formation,formation_card_id:i||null,stadium_card_id:t.stadiumCardId||null}).eq("id",t.deckId),await x.from("deck_cards").delete().eq("deck_id",t.deckId);const o=[];return Object.entries(t.slots).forEach(([n,r],a)=>{o.push({deck_id:t.deckId,card_id:r,position:n,is_starter:!0,slot_order:a})}),t.subs.forEach((n,r)=>{o.push({deck_id:t.deckId,card_id:n,position:`SUB${r+1}`,is_starter:!1,slot_order:100+r})}),o.length>0?await x.from("deck_cards").insert(o):{error:null}}let Hi=null;function Cr(t,e){const{toast:i}=e;clearTimeout(Hi),document.querySelectorAll(".autosave-indicator").forEach(n=>{n.textContent="⏳ Enregistrement...",n.style.opacity="1",n.style.color=""}),Hi=setTimeout(async()=>{const{error:n}=await mn(t),r=document.querySelectorAll(".autosave-indicator");if(n){r.forEach(a=>{a.textContent="⚠️ Erreur d'enregistrement",a.style.color="#ff6b6b"}),i(n.message,"error");return}r.forEach(a=>{a.textContent="✅ Enregistré",a.style.color="",setTimeout(()=>{a.style.opacity="0"},1500)})},600)}async function jr(t,e){const{toast:i,navigate:o}=e;clearTimeout(Hi);const{error:n}=await mn(t);if(n){i(n.message,"error");return}i("Deck enregistré ✅","success"),o("decks")}function jo(t){const e=$i[t]||$i["4-4-2"],i=["GK1"];for(let o=1;o<=e.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=e.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=e.ATT;o++)i.push(`ATT${o}`);return i}function At(){return Math.min(window.innerWidth-40,860)}function Ot(){return Math.round(At()*1.1)}function gn(t){var n,r;if(!t)return null;const e=t._line||t.job||"MIL",i=e==="GK"?t.note_g||0:e==="DEF"?t.note_d||0:e==="MIL"?t.note_m||0:t.note_a||0,o=t.stadiumBonus?10:0;return{name:t.name,firstname:t.firstname||"",note:i+(t.boost||0)+o,note_g:t.note_g||0,note_d:t.note_d||0,note_m:t.note_m||0,note_a:t.note_a||0,_evolution_bonus:0,stadiumBonus:t.stadiumBonus||!1,boost:t.boost||0,job:t.job,job2:t.job2||null,_line:t._line||t.job,_col:t._col,country_code:t.country_code,club_id:t.club_id,rarity:t.rarity,clubName:t.clubName||((n=t.clubs)==null?void 0:n.encoded_name)||null,clubLogo:t.clubLogo||((r=t.clubs)==null?void 0:r.logo_url)||null,face:t.face||null,portrait:Ct(t)}}function qr(t,e,i,o="Adversaire"){Xo("/sounds/match-opening.mp3",.3);const n=At(),r=Ot();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${o}</div>
      
      <div style="width:100%;max-width:${n}px;margin:0 auto">
        ${Qi(t,e,null,[],n,r)}
      </div>
    </div>`}function bn(t){var r,a,d;if(!t)return"";const e=l=>l?qe({...l,_evolution_bonus:0},{width:52,role:l._line||l.job,showStad:!!l.stadiumBonus,extraNote:l.boost||0}):"",o={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[t.type]||"📋";return`
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
    </div>`}function Ze(t,e,i,o,n){io("/sounds/goal.mp3",.7);const r=document.getElementById("goal-anim-overlay");r&&r.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const d=(t||[]).slice(0,3).map(l=>qe({...l,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:l._line||l.job,showStad:!!l.stadiumBonus})).join("");if(a.innerHTML=`
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
      }`,document.head.appendChild(l)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),n==null||n()},400)},1800)}function xn(t,e,i){const o=document.getElementById("sub-anim-overlay");o&&o.remove();const n=document.createElement("div");n.id="sub-anim-overlay",n.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const r=Math.min(120,Math.round(window.innerWidth/4)),a=t?qe({...t,_evolution_bonus:0},{width:r,role:t._line||t.job}):"",d=e?qe({...e,_evolution_bonus:0},{width:r,role:e._line||e.job}):"";n.innerHTML=`
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
    </div>`,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity 0.4s",setTimeout(()=>{n.remove(),i==null||i()},400)},1600)}function zt(t,e="rgba(0,0,0,0.85)",i=2200){const o=document.getElementById("game-toast");o&&o.remove();const n=document.createElement("div");if(n.id="game-toast",n.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${e};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,n.textContent=t,!document.getElementById("game-toast-style")){const r=document.createElement("style");r.id="game-toast-style",r.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(r)}document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity 0.3s",setTimeout(()=>n.remove(),300)},i)}function yn(t,e){const i=jt(t,"MIL"),o=t.stadiumBonus||e&&(e.club_id&&String(t.club_id)===String(e.club_id)||e.country_code&&t.country_code===e.country_code)?10:0;return i+o}function yt(t,e){return t.reduce((i,o)=>i+yn(o,e),0)}function ht(t){let e=0;for(let i=0;i<t.length-1;i++){const o=Si(t[i],t[i+1]);o==="#00ff88"?e+=10:o==="#FFD700"&&(e+=5)}return e}function Ei(t,e,i,o,n){return`<div id="duel-row-${o}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${e}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${t.map((r,a)=>{const d=a<t.length-1?Si(r,t[a+1]):null,l=!d||d==="#ff3333"||d==="#cc2222",s=d==="#00ff88"?"+10":d==="#FFD700"?"+5":"";return yn(r,n),r.stadiumBonus||n&&(n.club_id&&String(r.club_id)===String(n.club_id)||n.country_code&&(r.country_code,n.country_code)),`
          <div class="duel-card duel-card-${o}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${qe({...r,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:n,role:"MIL",extraNote:r.boost||0})}
          </div>
          ${a<t.length-1?`<div class="duel-link duel-link-${o}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${l?"rgba(255,255,255,0.12)":d};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${l?"none":`0 0 8px ${d}`}">
            ${s?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${d}">${s}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${o}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${yt(t,n)} + ${ht(t)} liens = <b style="color:#fff">${yt(t,n)+ht(t)}</b>
      </div>
    </div>`}async function Br(t,e){const{state:i}=e,o=i.params||{},n=o.matchMode||"vs_ai_easy",r=n==="solo",a=n==="ranked_ai",d=o.soloLevel||1,l=n.replace("vs_ai_",""),s=n;let p=null;if(r){const{data:m}=await x.from("solo_levels").select("*").eq("level_number",d).maybeSingle();p=m||{level_number:d,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500}}const c=o.rankedData||null,y=o.presetSetup||null;async function b({deckId:m,formation:f,starters:h,subsRaw:g,gcCardsEnriched:$,gcDefs:v,stadiumDef:I}){try{let u=Ri(h,f);I&&(u=vi(u,I),wi(g,I));let E=null;if(a){const K=Fr(u)+Pr(u)*10,{jaune:J,vert:k}=Rr(u,f),H=[.9,1,1.2],oe=H[Math.floor(Math.random()*H.length)],D=Math.max(11,Math.round(K*oe));E={target_note_avg:Math.max(1,Math.round(D/11)),target_total_note:D,nb_liens_jaune:J,nb_liens_vert:k,nb_joueurs_stade:I?3:0,_variance:oe}}const _=p&&{...p,target_total_note:Math.max(11,Math.round((Number(p.target_note_avg)||10)*11))},z=r?await Bo(f,_):a?await Bo(f,E):await Dr(f,l),G=z.lines||z,W=async K=>{try{const J=s==="vs_ai_club"||s==="solo"||s==="ranked_ai"?"club":s,{data:k,error:H}=await x.from("matches").insert({home_id:i.profile.id,away_id:null,mode:J,home_deck_id:m,status:"in_progress"}).select().single();if(H){console.error("[MatchIA] Erreur création match:",H),ji(t,"⚠️","Impossible de créer le match ("+H.message+").","Retour",()=>e.navigate("home"));return}const oe=z.stadiumDef||null;oe&&G&&(vi(G,oe),wi(z.subs||[],oe));const D={gcDefs:v||[],matchId:k==null?void 0:k.id,mode:s,difficulty:l,formation:f,isSolo:r,soloLevel:d,soloLevelConfig:p,isRankedAI:a,rankedAIData:c,homeTeam:u,aiTeam:G,homeSubs:g,subsUsed:0,maxSubs:Math.min(g.length,3),aiSubs:z.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((z.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:z.gcCards||[],aiUsedGc:[],aiGcTarget:z.gcTarget||2,aiStadiumDef:oe,homeScore:0,aiScore:0,gcCards:K,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Nr(t,D,e)}catch(J){console.error("[MatchIA] Exception launchMatch:",J),ji(t,"⚠️","Erreur au lancement du match : "+J.message,"Retour",()=>e.navigate("home"))}};if(a&&y){W(y.gcCardsEnriched||[]);return}if(!$.length){W([]);return}Ti(t,$,W)}catch(u){console.error("[MatchIA] Exception setup:",u),ji(t,"⚠️","Erreur de préparation du match : "+u.message,"Retour",()=>e.navigate("home"))}}y?await b(y):await Ii(t,e,n,b)}async function Dr(t,e){var h;const{data:i}=await x.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:hn(t),subs:[],gcCards:[],stadiumDef:null};const o=Ut[t]||Ut["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},r=new Set;function a(g,$,v){var I,u;return r.add(g.id),{cardId:"ai-"+g.id+"-"+v,id:g.id,firstname:g.firstname,name:g.surname_real,country_code:g.country_code,club_id:g.club_id,job:g.job,job2:g.job2,note_g:Number(g.note_g)||0,note_d:Number(g.note_d)||0,note_m:Number(g.note_m)||0,note_a:Number(g.note_a)||0,rarity:g.rarity,skin:g.skin,hair:g.hair,hair_length:g.hair_length,face:g.face,clubName:((I=g.clubs)==null?void 0:I.encoded_name)||null,clubLogo:((u=g.clubs)==null?void 0:u.logo_url)||null,boost:0,used:!1,_line:$}}for(const g of["GK","DEF","MIL","ATT"]){const $=i.filter(_=>_.job===g&&!r.has(_.id)),v=i.filter(_=>_.job!==g&&!r.has(_.id)),I=[...$,...v],u=[];for(let _=0;_<o[g];_++){const z=I[_];z&&u.push(a(z,g,_))}const E=St(u.length);u.forEach((_,z)=>{_._col=E[z]}),n[g]=u}const l=i.filter(g=>!r.has(g.id)).slice(0,5).map((g,$)=>a(g,g.job,100+$)),{data:s}=await x.from("gc_definitions").select("*").eq("is_active",!0),c=[...s||[]].sort(()=>Math.random()-.5).slice(0,3).map((g,$)=>({id:"ai-gc-"+$,gc_type:g.name,name:g.name,icon:"⚡",effect_type:g.effect_type,effect_params:g.effect_params||{}})),y=Object.values(n).flat(),b={};y.forEach(g=>{g.club_id&&(b[g.club_id]=(b[g.club_id]||0)+1)});const m=(h=Object.entries(b).sort((g,$)=>$[1]-g[1])[0])==null?void 0:h[0];let f=null;if(m){const{data:g}=await x.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",m).single();g&&(f={club_id:g.id,country_code:null,name:g.encoded_name+" Stadium",club:{encoded_name:g.encoded_name,logo_url:g.logo_url}})}return{lines:n,subs:l,gcCards:c,stadiumDef:f}}function Fr(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{const n=o._line||i,r=Number(n==="GK"?o.note_g:n==="DEF"?o.note_d:n==="MIL"?o.note_m:o.note_a)||0;e+=r+(o.boost||0)});return e}function Pr(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{o!=null&&o.stadiumBonus&&e++});return e}function Rr(t,e){const i={};for(const a of["GK","DEF","MIL","ATT"])(t[a]||[]).forEach((d,l)=>{i[`${a}${l+1}`]=d});const o=Ko(e)||Xi[e]||[];let n=0,r=0;for(const[a,d]of o){const l=i[a],s=i[d];if(!l||!s)continue;const p=Si(l,s);p==="#00ff88"?r++:p==="#FFD700"&&n++}return{jaune:n,vert:r}}function qo(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function ei(t,e,i){if(i<=0||!t.length)return[];const o=[...t].sort((n,r)=>Math.abs(qo(n)-e)-Math.abs(qo(r)-e));return o.slice(0,Math.min(i,o.length))}async function Bo(t,e){var H,oe;const i=Number(e==null?void 0:e.target_note_avg)||10,o=Number(e==null?void 0:e.nb_liens_jaune)||0,n=Number(e==null?void 0:e.nb_liens_vert)||0,r=Number(e==null?void 0:e.nb_joueurs_stade)||0,{data:a}=await x.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url,country_code)").eq("is_active",!0).limit(300);if(!a||a.length<16)return{lines:hn(t),subs:[],gcCards:[],stadiumDef:null};const d={};a.forEach(D=>{D.club_id&&(d[D.club_id]=(d[D.club_id]||0)+1)});const l=((H=Object.entries(d).sort((D,se)=>se[1]-D[1])[0])==null?void 0:H[0])||null,s=l?a.filter(D=>D.club_id===l):[],p=((oe=s[0])==null?void 0:oe.country_code)||null,c=p?a.filter(D=>D.country_code===p&&D.club_id!==l):[],y=Math.min(s.length,Math.max(2,n+1),16),b=Math.min(c.length,Math.max(0,o),16-y),m=[],f=new Set;ei(s,i,y).forEach(D=>{m.push(D),f.add(D.id)}),ei(c,i,b).forEach(D=>{m.push(D),f.add(D.id)});const h=Math.max(0,16-m.length),g=a.filter(D=>!f.has(D.id));ei(g,i,h).forEach(D=>{m.push(D),f.add(D.id)});const $=Ut[t]||Ut["4-4-2"],v={GK:[],DEF:[],MIL:[],ATT:[]},I=new Set;function u(D,se,fe){var M,L;return I.add(D.id),{cardId:"ai-"+D.id+"-"+fe,id:D.id,firstname:D.firstname,name:D.surname_real,country_code:D.country_code,club_id:D.club_id,job:D.job,job2:D.job2,note_g:Number(D.note_g)||0,note_d:Number(D.note_d)||0,note_m:Number(D.note_m)||0,note_a:Number(D.note_a)||0,rarity:D.rarity,skin:D.skin,hair:D.hair,hair_length:D.hair_length,face:D.face,clubName:((M=D.clubs)==null?void 0:M.encoded_name)||null,clubLogo:((L=D.clubs)==null?void 0:L.logo_url)||null,boost:0,used:!1,_line:se}}for(const D of["GK","DEF","MIL","ATT"]){let se=m.filter(U=>U.job===D&&!I.has(U.id));if(D==="GK"&&!se.length){const U=a.filter(ne=>ne.job==="GK"&&!I.has(ne.id));U.length&&(se=ei(U,i,1))}const fe=m.filter(U=>U.job!==D&&!I.has(U.id)),M=[...se,...fe],L=[];for(let U=0;U<$[D];U++){const ne=M[U];ne&&L.push(u(ne,D,U))}const X=St(L.length);L.forEach((U,ne)=>{U._col=X[ne]}),v[D]=L}let E=m.filter(D=>!I.has(D.id));if(E.length<5){const D=a.filter(se=>!I.has(se.id)&&!E.some(fe=>fe.id===se.id));E=E.concat(ei(D,i,5-E.length))}const _=E.slice(0,5).map((D,se)=>u(D,D.job,100+se)),z=Number(e==null?void 0:e.target_total_note)||0;if(z>0){const D={GK:"note_g",DEF:"note_d",MIL:"note_m",ATT:"note_a"},se=[];for(const M of["GK","DEF","MIL","ATT"])(v[M]||[]).forEach(L=>se.push({p:L,key:D[M]}));const fe=se.reduce((M,L)=>M+(Number(L.p[L.key])||0),0);if(fe>0&&se.length){const M=z/fe;se.forEach(U=>{U.p[U.key]=Math.max(1,Math.round((Number(U.p[U.key])||0)*M))});let L=z-se.reduce((U,ne)=>U+ne.p[ne.key],0),X=0;for(;L!==0&&X++<500;){const U=se[Math.floor(Math.random()*se.length)];L>0?(U.p[U.key]++,L--):U.p[U.key]>1&&(U.p[U.key]--,L++)}_.forEach(U=>{const ne=D[U.job]||"note_m";U[ne]=Math.max(1,Math.round((Number(U[ne])||0)*M))})}}const{data:G}=await x.from("gc_definitions").select("*").eq("is_active",!0),K=[...G||[]].sort(()=>Math.random()-.5).slice(0,3).map((D,se)=>({id:"ai-gc-"+se,gc_type:D.name,name:D.name,icon:"⚡",effect_type:D.effect_type,effect_params:D.effect_params||{}}));let J=null;if(r>0&&l){const{data:D}=await x.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",l).single();D&&(J={club_id:D.id,country_code:null,name:D.encoded_name+" Stadium",club:{encoded_name:D.encoded_name,logo_url:D.logo_url}})}const k=1+Math.floor(Math.random()*3);return{lines:v,subs:_,gcCards:K,stadiumDef:J,gcTarget:k}}function hn(t){const e=Ut[t]||Ut["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let n=0;for(const r of["GK","DEF","MIL","ATT"]){const a=[];for(let l=0;l<e[r];l++){const s=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+n,id:"fake-"+n,firstname:"IA",name:o[n%o.length],country_code:"XX",club_id:null,job:r,job2:null,note_g:r==="GK"?s:2,note_d:r==="DEF"?s:2,note_m:r==="MIL"?s:2,note_a:r==="ATT"?s:2,rarity:"normal",boost:0,used:!1,_line:r}),n++}const d=St(a.length);a.forEach((l,s)=>{l._col=d[s]}),i[r]=a}return i}function Nr(t,e,i){var n;Xo("/sounds/match-opening.mp3",.3);const o=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const r=t.querySelector(".opponent-preview-wrap"),a=t.querySelector("#opponent-swipe-zone");if(!r||!a)return;const d=a.clientWidth>=900,l=Math.max(200,a.clientHeight-(d?8:40)),s=Math.max(200,a.clientWidth-(d?8:16)),p=d?null:Math.round(Math.max(44,Math.round(s*.168))*.55);r.innerHTML=li(e.aiTeam,e.formation,null,[],s,l,[],p),r.style.cssText=`width:${s}px;height:${l}px;overflow:hidden;flex-shrink:0`;const c=r.querySelector("svg");c&&(c.style.cssText="display:block;width:100%;height:100%",c.setAttribute("preserveAspectRatio",d?"xMidYMid meet":"none"))})),setTimeout(()=>Gr(t,e,i),5e3)}const Ve=t=>gn(t);function Gr(t,e,i){const o=e.homeTeam.MIL||[],n=e.aiTeam.MIL||[],r=e.stadiumDef||null,a=e.aiStadiumDef||null,d=yt(o,r)+ht(o),l=yt(n,a)+ht(n),s=d>=l;t.innerHTML=`
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

    ${Ei(o,e.clubName,"#D4A017","home",r)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${Ei(n,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const p=()=>{const m=(f,h)=>t.querySelectorAll(f).forEach((g,$)=>{setTimeout(()=>{g.style.opacity="1",g.style.transform="translateY(0) scale(1)"},h+$*90)});m(".duel-card-home",150),m(".duel-card-ai",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((f,h)=>{setTimeout(()=>{f.style.opacity="1"},h*70)}),900),setTimeout(()=>{const f=t.querySelector("#vs-label");f&&(f.style.opacity="1",f.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(h=>h.style.opacity="1")},1250),setTimeout(()=>{c("score-home",d,800),c("score-ai",l,800)},1500)};function c(m,f,h){const g=document.getElementById(m);if(!g)return;const $=performance.now(),v=I=>{const u=Math.min(1,(I-$)/h);g.textContent=Math.round(f*(1-Math.pow(1-u,3))),u<1?requestAnimationFrame(v):g.textContent=f};requestAnimationFrame(v)}requestAnimationFrame(p),e.attacker=s?"home":"ai";const y=s?Vo():null;s&&(e.boostCard={value:y}),e.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(m=>Ve(m)),aiPlayers:n.map(m=>Ve(m)),homeTotal:d,aiTotal:l,text:`Duel milieu : ${e.clubName} ${d} – ${l} IA → ${s?e.clubName+" attaque":"IA attaque"}`});const b=()=>{e.phase=e.attacker==="home"?"attack":"ai-attack",Te(t,e,i),e.attacker==="ai"&&setTimeout(()=>uo(t,e,i),800)};setTimeout(()=>{const m=document.getElementById("score-home"),f=document.getElementById("score-ai"),h=document.getElementById(s?"duel-row-home":"duel-row-ai"),g=document.getElementById(s?"duel-row-ai":"duel-row-home"),$=s?m:f,v=s?f:m;$&&($.style.fontSize="80px",$.style.color=s?"#FFD700":"#ff6b6b",$.style.animation="duelPulse .5s ease"+(s?", duelGlow 1.5s ease infinite .5s":"")),v&&(v.style.opacity="0.25"),setTimeout(()=>{h&&(h.style.transformOrigin="center",h.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",h.style.zIndex="5"),setTimeout(()=>{var u;const I=document.getElementById("duel-shock");if(I){const E=(u=g||h)==null?void 0:u.getBoundingClientRect(),_=t.querySelector(".match-screen").getBoundingClientRect();E&&(I.style.top=E.top-_.top+E.height/2+"px"),I.style.animation="shockwave .5s ease-out forwards"}g&&(g.style.transformOrigin="center",g.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var u;const I=document.getElementById("duel-finale");I&&(I.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${s?`⚽ ${e.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${s?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${y}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,I.style.transition="opacity .45s ease",I.style.opacity="1",I.style.pointerEvents="auto",(u=document.getElementById("start-match-btn"))==null||u.addEventListener("click",b))},600)},700)},2800)}function Te(t,e,i){var W,K,J,k,H,oe,D,se,fe;const o=e.selected.map(M=>M.cardId),n=e.usedSubIds||[],r=e.homeSubs.filter(M=>!n.includes(M.cardId)),d=Object.values(e.homeTeam).flat().filter(M=>M.used).length>0&&r.length>0&&e.subsUsed<e.maxSubs,l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(M=>!M.used),s=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(M=>!M.used),p=Kt(e.aiTeam),c=l.length===0&&s.length===0&&!p,y=(e.homeTeam.DEF||[]).filter(M=>!M.used),b=(e.homeTeam.GK||[]).filter(M=>!M.used);let m=[];e.phase==="attack"&&l.length===0&&(p?(m=y.map(M=>M.cardId),y.length===0&&(m=m.concat(b.map(M=>M.cardId)))):c&&(m=[...y,...b].map(M=>M.cardId))),e.log[e.log.length-1];const f=e.phase==="ai-attack"||e.phase==="ai-defense",h=e.phase==="attack",g=e.phase==="defense",$=e.phase==="finished",I=(e.homeSubs||[]).filter(M=>!(e.usedSubIds||[]).includes(M.cardId)).length>0&&e.subsUsed<e.maxSubs,u=h&&l.length===0&&m.length===0&&!I,E=e.gcCards.filter(M=>!e.usedGc.includes(M.id)),_=e.boostCard&&!e.boostUsed;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.innerHTML=`
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
      ${(()=>{if(e.phase==="defense"&&e.pendingAttack){const L=e.pendingAttack;let X="";if(e.selected.length>0){const U=e.selected.map(ue=>({...(e.homeTeam[ue._role]||[]).find(be=>be.cardId===ue.cardId)||ue,_line:ue._role})),ne=di(U,e.modifiers.home,e.formation);X=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${e.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${Qe(U.map(ue=>({...ue,used:!1})),"#3a7bd5",ne.total,"defense",e.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${Qe((L.players||[]).map(U=>({...U,used:!1})),"#ff6b6b",L.total,"attack",e.formation)}</div>
            ${X}
          </div>`}if(e.phase==="ai-defense"&&e.pendingAttack){const L=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${Qe((L.players||[]).map(X=>({...X,used:!1})),"#00ff88",L.total,"attack",e.formation)}</div>
          </div>`}if(e.phase==="attack"&&e.selected.length>0){const L=e.selected.map(U=>{const ne=(e.homeTeam[U._role]||[]).find(ve=>ve.cardId===U.cardId)||U,ue=["GK","DEF"].includes(U._role);return{...ne,_line:U._role,...ue?{note_a:Math.max(1,Number(ne.note_a)||0)}:{}}}),X=ci(L,e.modifiers.home,e.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${e.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(L.map(U=>({...U,used:!1})),"#FFD700",X.total,"attack",e.formation)}</div>
          </div>`}const M=e.log[e.log.length-1];return M?'<div style="padding:2px 4px">'+bn(M)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${e.log.length})
    </button>

    ${(()=>{const M=window.innerWidth>=700,L=(he,me,ke)=>{var q,Q;const j=(e.gcDefs||[]).find(ce=>ce.name===he.gc_type),T=(j==null?void 0:j.name)||he.gc_type,R=(j==null?void 0:j.effect)||((q=Oe[he.gc_type])==null?void 0:q.desc)||"",O=j!=null&&j.image_url?`/icons/${j.image_url}`:null,V=((Q=Oe[he.gc_type])==null?void 0:Q.icon)||"⚡";return`<div class="gc-mini" data-gc-id="${he.id}" data-gc-type="${he.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${it(T,O,V,R,{width:me})}
        </div>`},X=(he,me)=>{var ke;return`<div id="boost-card"
          style="box-sizing:border-box;width:${he}px;height:${me}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(me*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(me*.2)}px">⚡</div>
            <div style="font-size:${Math.round(me*.09)}px;color:#000;font-weight:900">+${(ke=e.boostCard)==null?void 0:ke.value}</div>
          </div>`},U=(he,me)=>me?X(95,162):L(he,95),ne=(he,me)=>me?X(53,90):L(he,53),ue=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ve=$?`<button id="btn-results" style="${ue};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${ue};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:u?`<button id="btn-pass" style="${ue};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:h?`<button id="btn-action" style="${ue};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${e.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${ue};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${e.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${ue};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,be=h||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${e.selected.length}/3 sélectionné(s)</div>`:"",je=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${r.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':r.map(he=>`<div class="sub-btn-col" data-sub-id="${he.cardId}" style="cursor:pointer;flex-shrink:0">${_t(he,76,100)}</div>`).join("")}
      </div>`,Be=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${li(e.homeTeam,e.formation,e.phase,o,M?1300:At(),M?600:Ot(),m)}
        </div>
      </div>`;return M?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${je}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Be}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ve}${be}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${E.map(he=>U(he,!1)).join("")}
            ${_?U(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${li(e.homeTeam,e.formation,e.phase,o,M?1300:At(),M?600:Ot(),m)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${E.map(he=>ne(he,!1)).join("")}
            ${_?ne(null,!0):""}
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
          <div>${ve}${be}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${e.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...e.log].reverse().map(M=>{var L,X,U;if(M.type==="duel"){const ne=M.isGoal,ue=M.homeScored?"#FFD700":ne?"#ff6b6b":"rgba(255,255,255,0.3)",ve=M.homeScored?"⚽ BUT !":ne?"⚽ BUT IA !":(L=M.homePlayers)!=null&&L.length?"⚔️ Attaque":"🛡️ Défense",be=(M.homeTotal??0)>=(M.aiTotal??0);return`<div style="padding:8px;border-radius:8px;background:${ne?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${ue};margin-bottom:4px">
                <div style="font-size:9px;color:${ue};letter-spacing:1px;margin-bottom:6px;font-weight:700;text-transform:uppercase;text-align:center">${ve}</div>
                <div style="display:flex;align-items:center;justify-content:center;gap:10px">
                  ${(X=M.aiPlayers)!=null&&X.length?`<div style="flex:1;display:flex;justify-content:flex-end;opacity:0.75">${Qe(M.aiPlayers,"#ff6b6b",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                  <div style="flex-shrink:0;display:flex;align-items:center;gap:6px">
                    <span style="font-size:16px;font-weight:900;color:${be?"#e03030":"#22c55e"}">${M.aiTotal??"–"}</span>
                    <span style="font-size:9px;color:rgba(255,255,255,0.3)">VS</span>
                    <span style="font-size:16px;font-weight:900;color:${be?"#22c55e":"#e03030"}">${M.homeTotal??"–"}</span>
                  </div>
                  ${(U=M.homePlayers)!=null&&U.length?`<div style="flex:1;display:flex;justify-content:flex-start">${Qe(M.homePlayers,"rgba(255,255,255,0.7)",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                </div>
              </div>`}return M.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${M.outPlayer?_t({...M.outPlayer,used:!0,_line:M.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${M.inPlayer?_t({...M.inPlayer,_line:M.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:M.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${M.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${M.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function z(){const M=t.querySelector(".match-screen");if(!M)return;const L=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);M.style.bottom="auto",M.style.height=L+"px",M.style.minHeight=L+"px",M.style.maxHeight=L+"px",M.style.overflow="hidden";const X=t.querySelector("#mobile-action-bar"),U=t.querySelector("#mobile-play-area");X&&U&&(U.style.paddingBottom=X.offsetHeight+"px")}if(z(),setTimeout(z,120),setTimeout(z,400),setTimeout(z,1e3),e._vvBound||(e._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",z),window.visualViewport.addEventListener("scroll",z)),window.addEventListener("resize",z)),function(){const L=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!L)return;const X=L.closest("#match-terrain-wrap");X&&(X.style.cssText="position:relative;width:100%;height:100%;padding:0"),L.removeAttribute("width"),L.removeAttribute("height"),L.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",L.setAttribute("preserveAspectRatio","xMidYMid meet")}(),e._resizeBound||(e._resizeBound=!0,window.addEventListener("resize",()=>{const M=t.querySelector(".terrain-wrapper svg");if(M){const L=M.closest("#match-terrain-wrap");L&&(L.style.cssText="position:relative;width:100%;height:100%;padding:0"),M.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),e.phase==="attack"||e.phase==="defense"){let M=!1,L=30;const X=()=>document.getElementById("match-timer"),U=()=>{const ne=X();if(!ne)return;const ue=String(Math.floor(L/60)).padStart(2,"0"),ve=String(L%60).padStart(2,"0");ne.textContent=` ${ue}:${ve}`,ne.style.color=M?"#ff2222":"#ff9500",ne.style.fontWeight="900"};U(),e._timerInt=setInterval(()=>{if(L--,L<0)if(!M)M=!0,L=15,U(),Qo("/sounds/timer-urgent.mp3",.6);else{clearInterval(e._timerInt),e._timerInt=null,Ke(),e.homeScore=0,e.aiScore=3;const ne=document.createElement("div");ne.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",ne.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(ne),setTimeout(()=>{ne.remove(),vt(t,e,i)},2500)}else U()},1e3)}(W=document.getElementById("match-quit"))==null||W.addEventListener("click",()=>{ot(t),confirm("Abandonner ? Résultat : défaite 3-0")&&(e.homeScore=0,e.aiScore=3,vt(t,e,i))}),(K=document.getElementById("view-ai"))==null||K.addEventListener("click",()=>ia(e,i)),(J=document.getElementById("toggle-history"))==null||J.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.add("open")}),(k=document.getElementById("close-history"))==null||k.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.remove("open")}),(H=document.getElementById("btn-action"))==null||H.addEventListener("click",()=>{e.selected.length!==0&&(h?Hr(t,e,i):g&&Ur(t,e,i))}),(oe=document.getElementById("btn-results"))==null||oe.addEventListener("click",()=>vt(t,e,i)),(D=document.getElementById("btn-pass"))==null||D.addEventListener("click",()=>{if(e.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Ui(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),vt(t,e,i);return}e.phase="ai-attack",Te(t,e,i),setTimeout(()=>uo(t,e,i),800)}),t.querySelectorAll(".match-slot-hit").forEach(M=>{M.addEventListener("click",()=>Or(M,e,t,i))}),t.querySelectorAll(".match-used-hit").forEach(M=>{M.addEventListener("click",()=>Di(t,e,i,null,M.dataset.cardId))}),t.querySelectorAll(".gc-mini").forEach(M=>{h?M.addEventListener("click",()=>Qr(M.dataset.gcId,M.dataset.gcType,t,e,i)):(M.style.opacity="0.35",M.style.cursor="default",M.addEventListener("click",()=>zt("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(se=document.getElementById("boost-card"))==null||se.addEventListener("click",()=>ta(t,e,i)),t.querySelectorAll(".sub-btn-col").forEach(M=>{M.addEventListener("click",()=>Di(t,e,i,M.dataset.subId))}),(fe=document.getElementById("sub-btn-main"))==null||fe.addEventListener("click",()=>Di(t,e,i))}function Or(t,e,i,o){const n=t.dataset.cardId,r=t.dataset.role,a=e.selected.findIndex(d=>d.cardId===n);if(a!==-1)e.selected.splice(a,1);else{if(e.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const d=(e.homeTeam[r]||[]).find(l=>l.cardId===n);if(d)e.selected.push({...d,_role:r,_line:r});else{const l=Object.keys(e.homeTeam||{}).map(s=>`${s}:${(e.homeTeam[s]||[]).length}`).join(" ");o.toast(`Sélection impossible (rôle="${r}" introuvable dans homeTeam[${l}])`,"error"),console.error("[MatchIA] toggleSelect: joueur introuvable",{cardId:n,role:r,homeTeam:e.homeTeam});return}}Te(i,e,o)}function po(t,e,i){t.matchId&&x.from("matches").update({last_player_id:i}).eq("id",t.matchId).then(()=>{})}function Hr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),po(e,i,i.state.profile.id);const o=e.selected.map(r=>{const a=(e.homeTeam[r._role]||[]).find(l=>l.cardId===r.cardId)||r,d=["GK","DEF"].includes(r._role);return{...a,_line:r._role,...d?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),n=ci(o,e.modifiers.home,e.formation);e.pendingAttack={...n,players:[...o],side:"home"},e.selected.forEach(r=>{const a=(e.homeTeam[r._role]||[]).find(d=>d.cardId===r.cardId);a&&(a.used=!0)}),e.log.push({text:`⚔️ Vous attaquez : ${n.total} (base ${n.base}${n.links?` +${n.links} liens`:""}) — ${e.selected.map(r=>r.name).join(", ")}`,type:"info"}),e.selected=[],e.modifiers.home={},e.phase="ai-defense",Te(t,e,i),setTimeout(()=>Xr(t,e,i),1200)}function Ur(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),po(e,i,i.state.profile.id);const o=e.stadiumDef||null,n=e.selected.map(l=>{const s=(e.homeTeam[l._role]||[]).find(c=>c.cardId===l.cardId)||l,p=s.stadiumBonus||o&&(o.club_id&&String(s.club_id)===String(o.club_id)||o.country_code&&s.country_code===o.country_code)||!1;return{...s,_line:l._role,stadiumBonus:p}}),r=di(n,e.modifiers.home,e.formation);e.selected.forEach(l=>{const s=(e.homeTeam[l._role]||[]).find(p=>p.cardId===l.cardId);s&&(s.used=!0)});const a=Zi(e.pendingAttack.total,r.total,e.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(e.pendingAttack.players||[]).map(l=>Ve(l)),homePlayers:e.selected.map(l=>{const s=(e.homeTeam[l._role]||[]).find(p=>p.cardId===l.cardId)||l;return Ve(s)}),homeTotal:r.total,aiTotal:e.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)d.text="🛡️ Bouclier ! But annulé.",e.log.push(d);else if(a.goal){e.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${e.pendingAttack.total} > ${r.total})`,e.log.push(d),e.selected=[],e.modifiers.home={},e.pendingAttack=null,Te(t,e,i),Ze(d.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${r.total} ≥ ${e.pendingAttack.total})`,e.log.push(d);e.selected=[],e.modifiers.home={},e.pendingAttack=null,Mt(t,e,i,"home-attack")}function Kr(t,e=()=>{}){if(t.aiSubsUsed>=t.aiMaxSubs)return e();const i=Object.values(t.aiTeam).flat().filter(s=>s.used);if(!i.length)return e();const o=(t.aiSubs||[]).filter(s=>!t.aiUsedSubIds.includes(s.cardId));if(!o.length)return e();const n=i[Math.floor(Math.random()*i.length)],r=o.find(s=>s.job===n.job)||o[0],a={...r,used:!1,_line:n._line,_col:n._col},d=t.aiTeam[n._line],l=d.findIndex(s=>s.cardId===n.cardId);l!==-1&&(d[l]=a),t.aiUsedSubIds.push(r.cardId),t.aiSubsUsed++,t.log.push({text:`🔄 IA : ${r.firstname} ${r.name} remplace ${n.firstname} ${n.name}`,type:"info"}),xn(n,a,e)}function Vr(t,e){const i=t.effect_params||{},o=i.value||1,n=i.count||1,r=i.roles||[],a=i.target||"home";switch(t.effect_type){case"BOOST_STAT":{const l=Object.values(e.aiTeam).flat().filter(s=>!s.used&&(!r.length||r.includes(s._line))).sort(()=>Math.random()-.5).slice(0,n);l.forEach(s=>{s.boost=(s.boost||0)+o}),l.length&&e.log.push({text:`⚡ IA : +${o} sur ${l.length} joueur(s)`,type:"gc"});break}case"DEBUFF_STAT":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(p=>!p.used&&(!r.length||r.includes(p._line))).sort(()=>Math.random()-.5).slice(0,n);s.forEach(p=>{p.boost=(p.boost||0)-o}),s.length&&e.log.push({text:`🎯 IA : -${o} sur ${s.length} joueur(s)${a!=="ai"?" (vous)":""}`,type:"gc"});break}case"GRAY_PLAYER":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(p=>!p.used&&(!r.length||r.includes(p._line))).sort(()=>Math.random()-.5).slice(0,n);s.forEach(p=>{p.used=!0}),s.length&&e.log.push({text:`❌ IA : ${s.length} joueur(s)${a!=="ai"?" (vous)":""} exclu(s)`,type:"gc"});break}case"REVIVE_PLAYER":{const l=Object.values(e.aiTeam).flat().filter(s=>s.used).sort(()=>Math.random()-.5).slice(0,n);l.forEach(s=>{s.used=!1}),l.length&&e.log.push({text:`💫 IA : ${l.length} joueur(s) ressuscité(s)`,type:"gc"});break}case"REMOVE_GOAL":e.homeScore>0&&(e.homeScore--,e.log.push({text:"🚫 IA : votre dernier but est annulé !",type:"gc"}));break;case"ADD_GOAL_DRAW":e.homeScore===e.aiScore&&(e.aiScore++,e.log.push({text:"🎯 IA : but bonus (match nul) !",type:"gc"}));break;case"ADD_SUB":e.aiMaxSubs=(e.aiMaxSubs||3)+o,e.log.push({text:`🔄 IA : +${o} remplacement(s)`,type:"gc"});break}}function Yr(t,e=()=>{}){var a;if(!((a=t.aiGcCards)!=null&&a.length))return e();const i=t.aiGcTarget||2;if(t.aiUsedGc.length>=i)return e();const o=t.aiGcCards.filter(d=>!t.aiUsedGc.includes(d.id));if(!o.length||!(t.round>=4&&t.aiUsedGc.length===0)&&Math.random()>.55)return e();const r=o[Math.floor(Math.random()*o.length)];t.aiUsedGc.push(r.id),r.effect_type?Vr(r,t):t.log.push({text:`⚡ IA joue ${r.icon||"⚡"} ${r.name}`,type:"gc"}),Wr(r,e)}function Wr(t,e=()=>{}){const i=document.getElementById("ai-gc-anim-overlay");i&&i.remove();const o=document.createElement("div");o.id="ai-gc-anim-overlay",o.style.cssText=`
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
      ${it(t.name||"Game Changer",null,t.icon||"⚡",t.effect||"",{width:170})}
    </div>`,document.body.appendChild(o),setTimeout(()=>{o.remove(),e()},2100)}function uo(t,e,i){po(e,i,null),Kr(e,()=>{Yr(e,()=>{Te(t,e,i),Jr(t,e,i)})})}function Jr(t,e,i){let o=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(l=>!l.used),n=!1;if(!o.length){const l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(p=>!p.used),s=Kt(e.homeTeam);if(s||l.length===0){const p=(e.aiTeam.DEF||[]).filter(y=>!y.used),c=(e.aiTeam.GK||[]).filter(y=>!y.used);o=s?p.length?p:c:[...p,...c],n=!0}}const r=Wo(o,"attack",e.difficulty);if(!r.length){Ki(t,e,i);return}n&&r.forEach(l=>{l._line=l._line||l.job,l.note_a=Math.max(1,Number(l.note_a)||0)});const a=ci(r,e.modifiers.ai,e.formation);if(e.pendingAttack={...a,players:r,side:"ai"},r.forEach(l=>{l.used=!0}),e.log.push({text:`🤖 IA attaque : ${a.total} (${r.map(l=>l.name).join(", ")})`,type:"info"}),e.modifiers.ai={},[...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(l=>!l.used).length===0){if(r.length===1&&(r[0]._line==="GK"||r[0].job==="GK")&&Kt(e.homeTeam)&&e.homeScore===e.aiScore){e.aiScore++,zi(t,e,i,"ai",r[0]);return}e.aiScore++;const s={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:r.map(p=>Ve(p)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};e.log.push(s),e.pendingAttack=null,Te(t,e,i),Ze(s.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}e.phase="defense",Te(t,e,i)}function Xr(t,e,i){var s,p;const o=[...e.aiTeam.GK||[],...e.aiTeam.DEF||[],...e.aiTeam.MIL||[]],n=Wo(o,"defense",e.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(c=>(e.aiTeam[c]||[]).filter(y=>!y.used)).length){const c=((s=e.pendingAttack)==null?void 0:s.players)||[];if(c.length===1&&(c[0]._line==="GK"||c[0].job==="GK")&&e.homeScore===e.aiScore){e.homeScore++,zi(t,e,i,"home",c[0]);return}e.homeScore++;const b={type:"duel",isGoal:!0,homeScored:!0,homePlayers:c.map(m=>Ve(m)),homeTotal:((p=e.pendingAttack)==null?void 0:p.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};e.log.push(b),e.modifiers.ai={},e.pendingAttack=null,Te(t,e,i),Ze(b.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}const a=n.length>0?di(n,e.modifiers.ai,e.formation).total:0;n.forEach(c=>{c.used=!0});const d=Zi(e.pendingAttack.total,a,e.modifiers.ai),l={type:"duel",title:"Attaque",homePlayers:(e.pendingAttack.players||[]).map(c=>Ve(c)),aiPlayers:n.map(c=>Ve(c)),homeTotal:e.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(d.shielded)l.text="🛡️ Bouclier IA !",e.log.push(l);else if(d.goal){e.homeScore++,l.isGoal=!0,l.homeScored=!0,l.text=`⚽ BUT ! (${e.pendingAttack.total} > ${a})`,e.log.push(l),e.modifiers.ai={},e.pendingAttack=null,Te(t,e,i),Ze(l.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}else l.text=`🧤 IA défend (${a} ≥ ${e.pendingAttack.total})`,e.log.push(l);e.modifiers.ai={},e.pendingAttack=null,Mt(t,e,i,"ai-attack")}function Mt(t,e,i,o){if(e.round++,!vn(t,e,i)){if(fo(e)){vt(t,e,i);return}if(o==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(r=>(e.homeTeam[r]||[]).some(a=>!a.used))){Ki(t,e,i);return}e.phase="attack",Te(t,e,i)}else{if(!["MIL","ATT","GK","DEF"].some(r=>(e.aiTeam[r]||[]).some(a=>!a.used))){Ki(t,e,i);return}e.phase="ai-attack",Te(t,e,i),setTimeout(()=>uo(t,e,i),800)}}}function Kt(t){return!["GK","DEF","MIL","ATT"].some(e=>(t[e]||[]).some(i=>!i.used))}function Do(t){const e=(t.GK||[]).some(o=>!o.used),i=["DEF","MIL","ATT"].some(o=>(t[o]||[]).some(n=>!n.used));return e&&!i}function vn(t,e,i){if(e.homeScore!==e.aiScore)return!1;if(Do(e.homeTeam)&&Kt(e.aiTeam)){const o=(e.homeTeam.GK||[]).find(n=>!n.used);return o?(o.used=!0,e.homeScore++,zi(t,e,i,"home",o),!0):!1}if(Do(e.aiTeam)&&Kt(e.homeTeam)){const o=(e.aiTeam.GK||[]).find(n=>!n.used);return o?(o.used=!0,e.aiScore++,zi(t,e,i,"ai",o),!0):!1}return!1}function zi(t,e,i,o,n){e.log.push({type:"duel",isGoal:!0,homeScored:o==="home",homePlayers:o==="home"?[Ve(n)]:[],aiPlayers:o==="ai"?[Ve(n)]:[],text:`⚽ DERNIER CORNER — Le gardien ${o==="home"?"":"adverse "}marque !`});const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(r);const a=(d,l)=>new Promise(s=>{r.innerHTML=`<div style="font-size:32px;font-weight:900;color:${l};letter-spacing:2px;animation:lcFade 1.4s ease both">${d}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(s,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),r.remove(),e.pendingAttack=null,Te(t,e,i),Ze([Ve(n)],e.homeScore,e.aiScore,o==="home",()=>{if(fo(e)){vt(t,e,i);return}Mt(t,e,i,o==="home"?"ai-attack":"home-attack")})))()}function fo(t){const e=["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(n=>!n.used)),i=["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(n=>!n.used));return!e&&!i}function Ui(t,e){return!(["MIL","ATT"].some(n=>(t[n]||[]).some(r=>!r.used))||Kt(e)||!["MIL","ATT"].some(n=>(e[n]||[]).some(r=>!r.used)))}function Ki(t,e,i){if(!vn(t,e,i)){if(fo(e)){vt(t,e,i);return}if(Ui(e.homeTeam,e.aiTeam)&&Ui(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),vt(t,e,i);return}e.phase="attack",Te(t,e,i)}}function Di(t,e,i,o=null,n=null){var b,m;if(e.phase!=="attack"){zt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(e.usedSubIds||(e.usedSubIds=[]),e.subsUsed>=e.maxSubs){zt(`Maximum ${e.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const r=Object.entries(e.homeTeam).flatMap(([f,h])=>(h||[]).filter(g=>g.used).map(g=>({...g,_line:g._line||f}))),a=e.homeSubs.filter(f=>!e.usedSubIds.includes(f.cardId));if(!r.length){zt("Aucun joueur utilisé à remplacer");return}if(!a.length){zt("Aucun remplaçant disponible");return}let d=Math.max(0,r.findIndex(f=>f.cardId===n));const l=((b=r[d])==null?void 0:b._line)||((m=r[d])==null?void 0:m.job);let s=o?Math.max(0,a.findIndex(f=>f.cardId===o)):Math.max(0,a.findIndex(f=>f.job===l)),p=!1;const c=document.createElement("div");c.id="sub-overlay",c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function y(){var u,E,_,z,G,W;const f=r[d],h=a[s],g=Math.min(130,Math.round((window.innerWidth-90)/2)),$=Math.round(g*1.35),v=K=>`background:rgba(255,255,255,0.12);border:none;color:${K?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${K?"default":"pointer"};flex-shrink:0`;c.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${e.subsUsed}/${e.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${v(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${h?_t({...h,used:!1,boost:0},g,$):"<div>—</div>"}</div>
        <button id="in-down" style="${v(s>=a.length-1)}" ${s>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${v(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${f?_t({...f,used:!1,boost:0},g,$):"<div>—</div>"}</div>
        <button id="out-down" style="${v(d>=r.length-1)}" ${d>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${r.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(u=c.querySelector("#sub-close"))==null||u.addEventListener("click",()=>c.remove()),(E=c.querySelector("#out-up"))==null||E.addEventListener("click",()=>{d>0&&(d--,y())}),(_=c.querySelector("#out-down"))==null||_.addEventListener("click",()=>{d<r.length-1&&(d++,y())}),(z=c.querySelector("#in-up"))==null||z.addEventListener("click",()=>{s>0&&(s--,y())}),(G=c.querySelector("#in-down"))==null||G.addEventListener("click",()=>{s<a.length-1&&(s++,y())});const I=(K,J,k,H)=>{const oe=c.querySelector("#"+K);if(!oe)return;let D=0;oe.addEventListener("touchstart",se=>{D=se.touches[0].clientY},{passive:!0}),oe.addEventListener("touchend",se=>{const fe=se.changedTouches[0].clientY-D;if(Math.abs(fe)<30)return;const M=J();fe<0&&M<H-1?(k(M+1),y()):fe>0&&M>0&&(k(M-1),y())},{passive:!0})};I("in-panel",()=>s,K=>s=K,a.length),I("out-panel",()=>d,K=>d=K,r.length),(W=c.querySelector("#sub-confirm"))==null||W.addEventListener("click",K=>{if(K.preventDefault(),K.stopPropagation(),p)return;p=!0;const J=r[d],k=a[s];if(!J||!k)return;let H=null,oe=-1;for(const[se,fe]of Object.entries(e.homeTeam)){const M=(fe||[]).findIndex(L=>L.cardId===J.cardId);if(M!==-1){H=se,oe=M;break}}if(oe===-1||!H){zt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),c.remove();return}const D={...k,_line:H,_col:J._col||0,used:!1,boost:0};e.homeTeam[H].splice(oe,1,D),e.usedSubIds||(e.usedSubIds=[]),e.usedSubIds.push(k.cardId),e.subsUsed++,e.selected=[],e.log.push({type:"sub",subSide:"home",clubName:e.clubName,outPlayer:{name:J.name,firstname:J.firstname,note:jt(J,H),portrait:Ct(J),job:J.job,country_code:J.country_code,rarity:J.rarity,clubName:J.clubName,clubLogo:J.clubLogo},inPlayer:{name:k.name,firstname:k.firstname,note:jt(k,H),portrait:Ct(k),job:k.job,country_code:k.country_code,rarity:k.rarity,clubName:k.clubName,clubLogo:k.clubLogo},text:`🔄 ${k.firstname} ${k.name} remplace ${J.firstname} ${J.name}`}),c.remove(),xn(J,k,()=>Te(t,e,i))})}document.body.appendChild(c),y()}function Qr(t,e,i,o,n){var y,b;const r=(o.gcDefs||[]).find(m=>m.name===e),a=Oe[e]||{icon:"⚡",desc:"Carte spéciale."},d=(r==null?void 0:r.name)||e,l=(r==null?void 0:r.effect)||a.desc,s=r!=null&&r.image_url?`/icons/${r.image_url}`:null,p=a.icon||"⚡",c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",c.innerHTML=`
    ${it(d,s,p,l,{width:190})}
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(c),(y=c.querySelector("#gc-back"))==null||y.addEventListener("click",()=>c.remove()),(b=c.querySelector("#gc-use"))==null||b.addEventListener("click",()=>{c.remove(),ea(t,e,i,o,n)})}function xi(t,e,i,o,n,r){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let d=[];function l(){var s,p;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${d.length}/${e}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${t.map(c=>{const y=c._line||c.job||"MIL",b=d.find(f=>f.cardId===c.cardId),m=qe({...c,_evolution_bonus:0},{width:90,showStad:!0,role:y,extraNote:c.boost||0});return`<div class="gc-pick-item" data-cid="${c.cardId}"
          style="position:relative;border-radius:8px;${b?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${c.used?"opacity:0.3;pointer-events:none":""}">
          ${m}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${d.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${d.length}/${e})
      </button>
    </div>`,(s=a.querySelector("#gc-picker-close"))==null||s.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(c=>{c.addEventListener("click",()=>{const y=c.dataset.cid,b=t.find(f=>f.cardId===y);if(!b)return;const m=d.findIndex(f=>f.cardId===y);m>-1?d.splice(m,1):d.length<e&&d.push(b),l()})}),(p=a.querySelector("#gc-picker-confirm"))==null||p.addEventListener("click",()=>{a.remove(),r(d)})}l(),document.body.appendChild(a)}const Zr={BOOST_STAT:({value:t=1,count:e=1,roles:i=[]},o,n,r)=>{const a=Object.entries(o.homeTeam).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,l])=>l.filter(s=>!s.used).map(s=>({...s,_line:d})));return a.length?(xi(a,e,`Choisir ${e} joueur(s) à booster (+${t})`,n,o,d=>{d.forEach(l=>{const s=(o.homeTeam[l._line]||[]).find(p=>p.cardId===l.cardId);s&&(s.boost=(s.boost||0)+t,o.log.push({text:`⚡ +${t} sur ${s.name}`,type:"info"}))}),Te(n,o,r)}),!0):(o.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Te(n,o,r),!0)},DEBUFF_STAT:({value:t=1,count:e=1,roles:i=[],target:o="ai"},n,r,a)=>{const d=o==="home"?n.homeTeam:n.aiTeam,l=o==="ai"?"adverse":"allié",s=Object.entries(d).filter(([p])=>!i.length||i.includes(p)).flatMap(([p,c])=>c.filter(y=>!y.used).map(y=>({...y,_line:p})));return s.length?(xi(s,e,`Choisir ${e} joueur(s) ${l}(s) à débuffer (-${t})`,r,n,p=>{p.forEach(c=>{const b=((o==="home"?n.homeTeam:n.aiTeam)[c._line]||[]).find(m=>m.cardId===c.cardId);b&&(b.boost=(b.boost||0)-t,n.log.push({text:`🎯 -${t} sur ${b.name}${o==="ai"?" (IA)":""}`,type:"info"}))}),Te(r,n,a)}),!0):(n.log.push({text:`🎯 Aucun joueur ${l} disponible`,type:"info"}),Te(r,n,a),!0)},GRAY_PLAYER:({count:t=1,roles:e=[],target:i="ai"},o,n,r)=>{const a=i==="home"?o.homeTeam:o.aiTeam,d=i==="ai"?"adverse":"allié",l=Object.entries(a).filter(([s])=>!e.length||e.includes(s)).flatMap(([s,p])=>p.filter(c=>!c.used).map(c=>({...c,_line:s})));return l.length?(xi(l,t,`Choisir ${t} joueur(s) ${d}(s) à exclure`,n,o,s=>{s.forEach(p=>{const y=((i==="home"?o.homeTeam:o.aiTeam)[p._line]||[]).find(b=>b.cardId===p.cardId);y&&(y.used=!0,o.log.push({text:`❌ ${y.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Te(n,o,r)}),!0):(o.log.push({text:`❌ Aucun joueur ${d} à exclure`,type:"info"}),Te(n,o,r),!0)},REVIVE_PLAYER:({count:t=1,roles:e=[]},i,o,n)=>{const r=Object.entries(i.homeTeam).filter(([a])=>!e.length||e.includes(a)).flatMap(([a,d])=>d.filter(l=>l.used).map(l=>({...l,_line:a})));return r.length?(xi(r,t,`Choisir ${t} joueur(s) à ressusciter`,o,i,a=>{a.forEach(d=>{const l=(i.homeTeam[d._line]||[]).find(s=>s.cardId===d.cardId);l&&(l.used=!1,i.log.push({text:`💫 ${l.name} ressuscité !`,type:"info"}))}),Te(o,i,n)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Te(o,i,n),!0)},REMOVE_GOAL:({},t)=>(t.aiScore>0?(t.aiScore--,t.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):t.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},t)=>(t.homeScore===t.aiScore?(t.homeScore++,t.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):t.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:t=1},e)=>(e.maxSubs=(e.maxSubs||3)+t,e.log.push({text:`🔄 +${t} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function ea(t,e,i,o,n){o.usedGc.push(t);const r=o.gcDefs||[],a=r.find(l=>l.name===e)||r.find(l=>{var s;return((s=l.name)==null?void 0:s.toLowerCase().trim())===(e==null?void 0:e.toLowerCase().trim())});let d=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const l=Zr[a.effect_type];l?l(a.effect_params||{},o,i,n)||(d=!0):(n.toast(`Effet "${a.effect_type}" non implémenté`,"error"),d=!0)}else{switch(e){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const l=Object.entries(o.homeTeam).flatMap(([s,p])=>(p||[]).filter(c=>c.used).map(c=>({...c,_line:s})));l.length?(l[0].used=!1,o.log.push({text:`💫 ${l[0].name} ressuscité !`,type:"info"})):o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const l=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(s=>!s.used);if(l.length){const s=l.sort((p,c)=>jt(c,"ATT")-jt(p,"ATT"))[0];s.used=!0,o.log.push({text:`❄️ ${s.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}d=!0}x.from("cards").delete().eq("id",t).then(()=>{}),d&&Te(i,o,n)}function ta(t,e,i){const o=Object.values(e.homeTeam).flat().filter(n=>!n.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${e.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${o.map(n=>`
        <div class="player-boost-opt" data-card-id="${n.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Tn[n.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${jt(n,n._line||n.job)}</div>
          <div style="flex:1"><b>${n.firstname} ${n.name}</b><div style="font-size:11px;color:#888">${n._line||n.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${e.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const d=(e.homeTeam[a]||[]).find(l=>l.cardId===r);if(d){d.boost=(d.boost||0)+e.boostCard.value,e.log.push({text:`⚡ Boost +${e.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}e.boostUsed=!0,i.closeModal(),Te(t,e,i)})})}async function vt(t,e,i){var y,b,m,f;Gt(),Ke(),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),e.phase="finished";const{state:o}=i,n=e.homeScore>e.aiScore,r=e.homeScore===e.aiScore,a=n?"victoire":r?"nul":"defaite",d=e.isSolo&&((y=e.soloLevelConfig)!=null&&y.reward_credits)&&n?Number(e.soloLevelConfig.reward_credits):In(e.mode,a);if(e.isSolo&&n)try{const{data:h}=await x.from("user_solo_progress").select("unlocked_level").eq("user_id",o.profile.id).maybeSingle(),g=(h==null?void 0:h.unlocked_level)||1;e.soloLevel>=g&&await x.from("user_solo_progress").upsert({user_id:o.profile.id,unlocked_level:e.soloLevel+1,updated_at:new Date().toISOString()})}catch(h){console.warn("[Solo] Erreur mise à jour progression:",h.message)}const l="00000000-0000-0000-0000-000000000000";let s=null;if(e.isRankedAI)try{const{data:h}=await x.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",o.profile.id).single();if(h){const g=h.mmr??450,$=h.mmr_deviation??350,v=h.mmr_volatility??.06,I=n?1:r?.5:0,u=(h.placement_matches??0)<10,E=Yo(g,$,v,g,350,I,u),_=r?null:n?o.profile.id:l;await x.rpc("update_mmr_after_ranked",{p_match_id:e.matchId,p_winner_id:_,p_home_id:o.profile.id,p_away_id:l,p_home_delta:E.delta,p_away_delta:0,p_home_new_rd:E.newRd,p_away_new_rd:350,p_home_new_vol:E.newSigma,p_away_new_vol:.06}),s=E.delta}}catch(h){console.warn("[RankedAI] Erreur mise à jour MMR:",h.message)}e.matchId&&await x.from("matches").update({status:"finished",home_score:e.homeScore,away_score:e.aiScore,winner_id:n?o.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",e.matchId);const p={credits:(o.profile.credits||0)+d,matches_played:(o.profile.matches_played||0)+1};n?p.wins=(o.profile.wins||0)+1:r?p.draws=(o.profile.draws||0)+1:p.losses=(o.profile.losses||0)+1,await x.from("users").update(p).eq("id",o.profile.id),await i.refreshProfile();const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",c.innerHTML=`
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
    </div>`,document.body.appendChild(c),(b=document.getElementById("res-home"))==null||b.addEventListener("click",()=>{c.remove(),ot(t),i.navigate("home")}),(m=document.getElementById("res-replay"))==null||m.addEventListener("click",async()=>{if(c.remove(),ot(t),e.isRankedAI){const{data:h}=await x.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",i.state.profile.id).single();ct(),i.navigate("match",{matchMode:"ranked",rankedData:{mmr:(h==null?void 0:h.mmr)??450,rd:(h==null?void 0:h.mmr_deviation)??350,sigma:(h==null?void 0:h.mmr_volatility)??.06,isPlacement:((h==null?void 0:h.placement_matches)??0)<10}});return}i.navigate("match",e.isSolo?{matchMode:e.mode,soloLevel:e.soloLevel}:{matchMode:e.mode})}),(f=document.getElementById("res-next-level"))==null||f.addEventListener("click",()=>{c.remove(),ot(t),i.navigate("match",{matchMode:"solo",soloLevel:e.soloLevel+1})})}function ia(t,e){e.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Qi(t.aiTeam,t.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const oa={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function na(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}async function ra(t,e){!t||!e||await Promise.all([Fo(t,"win"),Fo(e,"loss")])}async function Fo(t,e){const{data:i}=await x.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",t).eq("card_type","player");if(!(i!=null&&i.length))return;const o=i.filter(n=>{var r,a;return((r=n.player)==null?void 0:r.rarity)==="pepite"||((a=n.player)==null?void 0:a.rarity)==="papyte"});o.length&&await Promise.all(o.map(n=>{const r=oa[n.player.rarity],a=e==="win"?r.win:r.loss,d=n.player.note_min??1,l=n.player.note_max??10,s=na(n.player),p=n.current_note??s,c=Math.min(l,Math.max(d,p+a));return x.from("cards").update({current_note:c}).eq("id",n.id)}))}const Rt=t=>gn(t);async function qt(t,e,i,o,n={}){return wn(t,e,i,o,n.myGC||[],n.gcDefs||[],n.isRanked||!1,n.rankedData||null,n.stadiumDef||null,n.onMatchEnd||null,n.mlLeagueId||null,n.mlMatchId||null)}async function aa(t,e,i){const{data:o}=await x.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!o){e.toast("Match introuvable","error"),e.navigate("home");return}const n=o.home_id===e.state.user.id;let r=null,a=null;if(o.mode==="mini_league"){const{data:d}=await x.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();d&&(r=d.league_id,a=d.id)}return wn(t,e,i,n,[],[],o.is_ranked||!1,null,null,null,r,a)}async function wn(t,e,i,o,n=[],r=[],a=!1,d=null,l=null,s=null,p=null,c=null){const{state:y,navigate:b,toast:m}=e,f=o?"p1":"p2",h=o?"p2":"p1",g=(n||[]).map(w=>w.id),$=(n||[]).map(w=>({id:w.id,gc_type:w.gc_type,_gcDef:w._gcDef||null}));t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:v}=await x.from("matches").select("*").eq("id",i).single();if(!v){m("Match introuvable","error"),b("home");return}async function I(){var Le,Ie;console.log("[PvP] buildGameState match:",{id:v.id,home_deck_id:v.home_deck_id,away_deck_id:v.away_deck_id,mode:v.mode,is_ranked:v.is_ranked});const[{data:w,error:S},{data:C,error:P},{data:A},{data:F}]=await Promise.all([x.rpc("get_deck_for_match",{p_deck_id:v.home_deck_id}),x.rpc("get_deck_for_match",{p_deck_id:v.away_deck_id}),x.from("users").select("id,pseudo,club_name").eq("id",v.home_id).single(),x.from("users").select("id,pseudo,club_name").eq("id",v.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",S==null?void 0:S.message,"p2:",P==null?void 0:P.message,"p1D:",(Le=w==null?void 0:w.starters)==null?void 0:Le.length,"p2D:",(Ie=C==null?void 0:C.starters)==null?void 0:Ie.length);const B=ae=>{const Me=Number(ae.evolution_bonus)||0;return{cardId:ae.card_id,position:ae.position,id:ae.id,firstname:ae.firstname,name:ae.surname_real,country_code:ae.country_code,club_id:ae.club_id,job:ae.job,job2:ae.job2,note_g:(Number(ae.note_g)||0)+(ae.job==="GK"||ae.job2==="GK"&&Number(ae.note_g)>0?Me:0),note_d:(Number(ae.note_d)||0)+(ae.job==="DEF"||ae.job2==="DEF"&&Number(ae.note_d)>0?Me:0),note_m:(Number(ae.note_m)||0)+(ae.job==="MIL"||ae.job2==="MIL"&&Number(ae.note_m)>0?Me:0),note_a:(Number(ae.note_a)||0)+(ae.job==="ATT"||ae.job2==="ATT"&&Number(ae.note_a)>0?Me:0),evolution_bonus:Me,rarity:ae.rarity,skin:ae.skin,hair:ae.hair,hair_length:ae.hair_length,face:ae.face||null,clubName:ae.club_encoded_name||null,clubLogo:ae.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},N=((w==null?void 0:w.starters)||[]).map(ae=>B(ae)),Y=((C==null?void 0:C.starters)||[]).map(ae=>B(ae)),Z=(w==null?void 0:w.formation)||"4-4-2",te=(C==null?void 0:C.formation)||"4-4-2";let re=Ri(N,Z),ee=Ri(Y,te);const le=((w==null?void 0:w.subs)||[]).map(ae=>B(ae)),pe=((C==null?void 0:C.subs)||[]).map(ae=>B(ae)),ze=(w==null?void 0:w.stadium_def)||(o?l:null),ge=(C==null?void 0:C.stadium_def)||(o?null:l);return ze&&(re=vi(re,ze),wi(le,ze)),ge&&(ee=vi(ee,ge),wi(pe,ge)),{p1Team:re,p2Team:ee,p1Subs:le,p2Subs:pe,p1Formation:Z,p2Formation:te,p1Name:(A==null?void 0:A.club_name)||(A==null?void 0:A.pseudo)||"Joueur 1",p2Name:(F==null?void 0:F.club_name)||(F==null?void 0:F.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:o?g:[],gc_p2:o?[]:g,gcCardsFull_p1:o?$:[],gcCardsFull_p2:o?[]:$,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:r||[],lastActionAt:new Date().toISOString()}}let u=v.game_state&&Object.keys(v.game_state).length?v.game_state:null;if(console.log("[PvP] init - amIHome:",o,"gameState exists:",!!u,"match.status:",v.status,"home_id:",v.home_id,"away_id:",v.away_id,"myId:",y.profile.id),!u)if(o){u=await I(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((u==null?void 0:u.p1Team)||{}));const{data:w}=await x.from("matches").select("game_state").eq("id",i).single();!(w!=null&&w.game_state)||!Object.keys(w.game_state).length?await x.from("matches").update({game_state:u,turn_user_id:v.home_id}).eq("id",i):u=w.game_state}else{t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let w=0;w<30&&!u;w++){await new Promise(C=>setTimeout(C,400));const{data:S}=await x.from("matches").select("game_state").eq("id",i).single();S!=null&&S.game_state&&Object.keys(S.game_state).length&&(u=S.game_state),w%5===0&&console.log("[PvP] away - poll",w,"game_state:",!!(S!=null&&S.game_state))}if(!u){m("Erreur de synchronisation","error"),b("home");return}u.gc_p2=g,u.gcCardsFull_p2=$,await x.from("matches").update({game_state:u}).eq("id",i)}let E=!1,_=null,z=!1;const G=new Set,W=new Set;async function K(w){var te,re;Gt();try{x.removeChannel(J)}catch{}const S=u[f+"Score"]||0,C=u[h+"Score"]||0;let P,A;w.winner_id?(P=w.winner_id===y.profile.id,A=!1):w.forfeit?(P=S>C,A=!1):(A=S===C,P=S>C);let F="";if(a&&o)try{const{data:ee}=await x.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",v.home_id).single(),{data:le}=await x.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",v.away_id).single();if(ee&&le){const pe=P?1:A?.5:0,ze=1-pe,ge=ee.placement_matches<10,Le=le.placement_matches<10,Ie=computeGlicko2(ee.mmr,ee.mmr_deviation,ee.mmr_volatility,le.mmr,le.mmr_deviation,pe===1?1:pe===0?0:.5,ge),ae=computeGlicko2(le.mmr,le.mmr_deviation,le.mmr_volatility,ee.mmr,ee.mmr_deviation,ze===1?1:ze===0?0:.5,Le);await x.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:A?null:P?v.home_id:v.away_id,p_home_id:v.home_id,p_away_id:v.away_id,p_home_delta:Ie.delta,p_away_delta:ae.delta,p_home_new_rd:Ie.newRd,p_away_new_rd:ae.newRd,p_home_new_vol:Ie.newSigma,p_away_new_vol:ae.newSigma});const Me=Ie.delta,Ne=Ie.newMmr,Ce=getTier(Ne),Ye=Me>=0?"+":"",He=Me>=0?"#4caf50":"#ff6b6b",nt=getTier(ee.mmr);F=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Ce.id!==nt.id?`<div style="font-size:20px;font-weight:900;color:${Ce.color}">
                    ${Ne>ee.mmr?"📈":"📉"} ${nt.emoji} ${nt.label} → ${Ce.emoji} ${Ce.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Ne>ee.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Me>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Ce.color}">${Ce.emoji} ${Ce.label}</div>`}
              ${ge?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${ee.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(ee){console.error("[Ranked] MMR update error:",ee)}(te=document.getElementById("pvp-end-overlay"))==null||te.remove();const B=document.createElement("div");B.id="pvp-end-overlay",B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const N=A?"🤝":P?"🏆":"😞",Y=A?"MATCH NUL":P?"VICTOIRE !":"DÉFAITE",Z=A?"#fff":P?"#FFD700":"#ff6b6b";B.innerHTML=`
      <div style="font-size:64px">${N}</div>
      <div style="font-size:26px;font-weight:900;color:${Z}">${Y}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${u[f+"Name"]} ${S} – ${C} ${u[h+"Name"]}</div>
      ${w.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${P?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${F}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${p?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(B),(re=B.querySelector("#pvp-end-home"))==null||re.addEventListener("click",()=>{B.remove(),ot(t),p?b("mini-league",{openLeagueId:p}):b(a?"ranked":"home")})}const J=x.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},w=>{var C;const S=w.new;try{if(S.status==="finished"||S.forfeit){if(E)return;E=!0,_&&(clearInterval(_),_=null),Ke(),S.game_state&&(u=S.game_state),K(S);return}if(S.game_state){const P=u;u=S.game_state;const A=u._lastGC;if(A&&A.seq&&!W.has(A.seq)&&(W.add(A.seq),A.by!==f)){ue(A.type,A.by,()=>L());return}const F=P[f+"Score"]||0,B=P[h+"Score"]||0,N=u[f+"Score"]||0,Y=u[h+"Score"]||0,Z=N>F,te=Y>B;if((Z||te)&&!G.has(u.round)){G.add(u.round);const re=[...u.log||[]].reverse().find(pe=>pe.isGoal),ee=((re==null?void 0:re.homePlayers)||[]).map(pe=>({name:pe.name,note:pe.note,portrait:pe.portrait,job:pe.job}));!!((C=re==null?void 0:re.text)!=null&&C.includes("DERNIER CORNER"))?R().then(()=>{Ze(ee,N,Y,Z,()=>L())}):Ze(ee,N,Y,Z,()=>L());return}L()}}catch(P){console.error("[PvP] crash:",P)}}).subscribe();async function k(w){Object.assign(u,w),u.lastActionAt=new Date().toISOString();const{error:S}=await x.from("matches").update({game_state:u}).eq("id",i);S&&m("Erreur de synchronisation","error");try{L()}catch(C){console.error("[PvP] renderPvpScreen crash:",C)}}async function H(){if(E)return;E=!0,Gt(),Ke(),_&&(clearInterval(_),_=null);const w=o?v.away_id:v.home_id,S=o?"p2":"p1",C=o?"p1":"p2",P={...u,[S+"Score"]:3,[C+"Score"]:0,phase:"finished"},A=P.p1Score||0,F=P.p2Score||0;try{await x.from("matches").update({game_state:P}).eq("id",i);const{data:B,error:N}=await x.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:w,p_home_score:A,p_away_score:F,p_forfeit:!0});if(N&&console.error("[PvP] finish_pvp_match (forfeit):",N),p)try{await x.rpc("check_and_finish_mini_league",{p_league_id:p})}catch(Y){console.error("[PvP] check_and_finish_mini_league (forfeit):",Y)}try{const{data:Y}=await x.rpc("apply_match_rewards",{p_match_id:i});Y!=null&&Y.success&&!(Y!=null&&Y.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(Y){console.error("[PvP] apply_match_rewards (forfeit):",Y)}}catch{}try{x.removeChannel(J)}catch{}setTimeout(()=>{ot(t),p?b("mini-league",{openLeagueId:p}):b("home")},800)}const oe={BOOST_STAT:({value:w=1,count:S=1,roles:C=[]},P,A)=>{const F=P[f+"Team"],B=Object.entries(F).filter(([N])=>!C.length||C.includes(N)).flatMap(([N,Y])=>Y.filter(Z=>!Z.used).map(Z=>({...Z,_line:N})));if(!B.length){P.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),A(P);return}D(B,S,`Choisir ${S} joueur(s) à booster (+${w})`,N=>{N.forEach(Y=>{const Z=(F[Y._line]||[]).find(te=>te.cardId===Y.cardId);Z&&(Z.boost=(Z.boost||0)+w,P.log.push({text:`⚡ +${w} sur ${Z.name}`,type:"info"}))}),P[f+"Team"]=F,A(P)})},DEBUFF_STAT:({value:w=1,count:S=1,roles:C=[],target:P="ai"},A,F)=>{const B=P==="home"?f:h,N=A[B+"Team"],Y=P==="home"?"allié":"adverse",Z=Object.entries(N).filter(([te])=>!C.length||C.includes(te)).flatMap(([te,re])=>re.map(ee=>({...ee,_line:te})));if(!Z.length){A.log.push({text:`🎯 Aucun joueur ${Y}`,type:"info"}),F(A);return}D(Z,S,`Choisir ${S} joueur(s) ${Y}(s) (-${w})`,te=>{te.forEach(re=>{const ee=(N[re._line]||[]).find(le=>le.cardId===re.cardId);ee&&(ee.boost=(ee.boost||0)-w,A.log.push({text:`🎯 -${w} sur ${ee.name}`,type:"info"}))}),A[B+"Team"]=N,F(A)})},GRAY_PLAYER:({count:w=1,roles:S=[],target:C="ai"},P,A)=>{const F=C==="home"?f:h,B=P[F+"Team"],N=C==="home"?"allié":"adverse",Y=Object.entries(B).filter(([Z])=>!S.length||S.includes(Z)).flatMap(([Z,te])=>te.filter(re=>!re.used).map(re=>({...re,_line:Z})));if(!Y.length){P.log.push({text:`❌ Aucun joueur ${N}`,type:"info"}),A(P);return}D(Y,w,`Choisir ${w} joueur(s) ${N}(s) à exclure`,Z=>{const te="usedCardIds_"+F,re=new Set(P[te]||[]);Z.forEach(ee=>{const le=(B[ee._line]||[]).find(pe=>pe.cardId===ee.cardId);le&&(le.used=!0,re.add(ee.cardId),P.log.push({text:`❌ ${le.name} exclu !`,type:"info"}))}),P[te]=[...re],P[F+"Team"]=B,A(P)})},REVIVE_PLAYER:({count:w=1,roles:S=[]},C,P)=>{const A=C[f+"Team"],F=Object.entries(A).filter(([B])=>!S.length||S.includes(B)).flatMap(([B,N])=>N.filter(Y=>Y.used).map(Y=>({...Y,_line:B})));if(!F.length){C.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),P(C);return}D(F,w,`Choisir ${w} joueur(s) à ressusciter`,B=>{B.forEach(N=>{const Y=(A[N._line]||[]).find(Z=>Z.cardId===N.cardId);Y&&(Y.used=!1,C.log.push({text:`💫 ${Y.name} ressuscité !`,type:"info"}))}),C[f+"Team"]=A,P(C)})},REMOVE_GOAL:({},w,S)=>{const C=h+"Score";w[C]>0?(w[C]--,w.log.push({text:"🚫 Dernier but annulé !",type:"info"})):w.log.push({text:"🚫 Aucun but à annuler",type:"info"}),S(w)},ADD_GOAL_DRAW:({},w,S)=>{w[f+"Score"]===w[h+"Score"]?(w[f+"Score"]++,w.log.push({text:"🎯 But bonus !",type:"info"})):w.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),S(w)},ADD_SUB:({value:w=1},S,C)=>{S.maxSubs=(S.maxSubs||3)+w,S.log.push({text:`🔄 +${w} remplacement(s)`,type:"info"}),C(S)},CUSTOM:({},w,S)=>S(w)};function D(w,S,C,P){const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let F=[];function B(){var Y,Z;const N=w.map(te=>{const re=te._line||te.job||"MIL",ee=F.find(pe=>pe.cardId===te.cardId),le=qe({...te,_evolution_bonus:0},{width:90,showStad:!0,role:re,extraNote:te.boost||0});return`<div class="pp-item" data-cid="${te.cardId}"
          style="position:relative;border-radius:8px;${ee?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${te.used?"opacity:0.3;pointer-events:none":""}">
          ${le}
        </div>`}).join("");A.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${C}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${F.length}/${S}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${N}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${F.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${F.length}/${S})
          </button>
        </div>`,(Y=A.querySelector("#pp-close"))==null||Y.addEventListener("click",()=>A.remove()),A.querySelectorAll(".pp-item").forEach(te=>{te.addEventListener("click",()=>{const re=te.dataset.cid,ee=w.find(pe=>pe.cardId===re),le=F.findIndex(pe=>pe.cardId===re);ee&&(le>-1?F.splice(le,1):F.length<S&&F.push(ee),B())})}),(Z=A.querySelector("#pp-confirm"))==null||Z.addEventListener("click",()=>{A.remove(),P(F)})}B(),document.body.appendChild(A)}async function se(w,S){const P=(u["gcCardsFull_"+f]||[]).find(N=>N.id===w),A=(P==null?void 0:P._gcDef)||(u.gcDefs||[]).find(N=>{var Y;return N.name===S||((Y=N.name)==null?void 0:Y.toLowerCase().trim())===(S==null?void 0:S.toLowerCase().trim())}),F=[...u["usedGc_"+f]||[],w],B={type:S,by:f,seq:(u._gcAnimSeq||0)+1};W.add(B.seq),ue(S,f,async()=>{if(A!=null&&A.effect_type&&A.effect_type!=="CUSTOM"){const Y=oe[A.effect_type];if(Y){const Z={...u};Y(A.effect_params||{},Z,async te=>{te["usedGc_"+f]=F,te._lastGC=B,te._gcAnimSeq=B.seq,await k(te)});return}}const N={...u};switch(S){case"Remplacement+":N.maxSubs=(N.maxSubs||3)+1,N.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const Y=h+"Score";N[Y]>0&&(N[Y]--,N.log.push({text:"🚫 But annulé",type:"info"}));break}}N["usedGc_"+f]=F,N._lastGC=B,N._gcAnimSeq=B.seq,await k(N)})}function fe(w,S){const C="usedCardIds_"+w,P=new Set(u[C]||[]);S.forEach(A=>P.add(A)),u[C]=[...P]}function M(){for(const w of["p1","p2"]){const S=new Set(u["usedCardIds_"+w]||[]),C=u[w+"Team"];if(C)for(const P of["GK","DEF","MIL","ATT"])(C[P]||[]).forEach(A=>{A.used=S.has(A.cardId)})}}function L(){var bo,xo,yo,ho,vo,wo;if(u.phase==="reveal")return X();if(u.phase==="midfield")return ne();if(u.phase==="finished")return we();const w=u[f+"Team"],S=u[h+"Team"];M();const C=u[f+"Score"],P=u[h+"Score"],A=u[f+"Name"],F=u[h+"Name"],B=u.phase===f+"-attack",N=u.phase===f+"-defense",Y=Array.isArray(u["selected_"+f])?u["selected_"+f]:[],Z=Y.map(ie=>ie.cardId),te=window.innerWidth>=700,re=u[f+"Subs"]||[],ee=u["usedSubIds_"+f]||[],le=re.filter(ie=>!ee.includes(ie.cardId)),pe=u["gcCardsFull_"+f]||[],ze=u["usedGc_"+f]||[],ge=pe.filter(ie=>!ze.includes(ie.id)),Le=u.boostOwner===f&&!u.boostUsed,Ie=[...w.MIL||[],...w.ATT||[]].filter(ie=>!ie.used),ae=[...S.MIL||[],...S.ATT||[]].filter(ie=>!ie.used),Me=!ce(S),Ne=Ie.length===0&&ae.length===0&&!Me,Ce=(w.DEF||[]).filter(ie=>!ie.used),Ye=(w.GK||[]).filter(ie=>!ie.used);let He=[];B&&Ie.length===0&&(Me?(He=Ce.map(ie=>ie.cardId),Ce.length===0&&(He=He.concat(Ye.map(ie=>ie.cardId)))):Ne&&(He=[...Ce,...Ye].map(ie=>ie.cardId)));function nt(ie,Ee,De){var Fe,ft;const Ae=ie._gcDef,Ft=(Ae==null?void 0:Ae.name)||ie.gc_type,st=(Ae==null?void 0:Ae.effect)||((Fe=Oe[ie.gc_type])==null?void 0:Fe.desc)||"",Re=Ae!=null&&Ae.image_url?`/icons/${Ae.image_url}`:null,Ge=((ft=Oe[ie.gc_type])==null?void 0:ft.icon)||"⚡";return`<div class="pvp-gc-mini" data-gc-id="${ie.id}" data-gc-type="${ie.gc_type}" style="flex-shrink:0;cursor:pointer">
        ${it(Ft,Re,Ge,st,{width:Ee})}
      </div>`}function Wt(ie,Ee){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ie}px;height:${Ee}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Ee*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(Ee*.2)}px">⚡</div>
        <div style="font-size:${Math.round(Ee*.09)}px;color:#000;font-weight:900">+${u.boostValue}</div>
      </div>`}const Pe=(ie,Ee)=>Ee?Wt(95,162):nt(ie,95),We=(ie,Ee)=>Ee?Wt(68,116):nt(ie,68),Ue=te?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",pt=B?de(f)?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${Y.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ue};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:N?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${Y.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${F}</div>`,rt=B&&!de(f)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':B||N?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${Y.length}/3 sélectionné(s)</div>`:"",Bt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${te?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${le.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':le.map(ie=>`<div class="pvp-sub-btn" data-sub-id="${ie.cardId}" style="cursor:pointer;flex-shrink:0">${_t(ie,te?76:44,te?100:58)}</div>`).join("")}
    </div>`,ut=B?"attack":N?"defense":"idle",Et=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${li(w,u[f+"Formation"],ut,Z,te?1300:At(),te?600:Ot(),He)}
      </div>
    </div>`,at=u[f+"Team"],Sn=(()=>{var Ee,De,Ae,Ft,st;if(N&&((Ee=u.pendingAttack)!=null&&Ee.players)){const Re=u.pendingAttack;let Ge="";if(Y.length>0){const Fe=Y.map(Je=>{const Jt=(at[Je._role]||[]).find(Ci=>Ci.cardId===Je.cardId)||Je,Xt=at[Je._role]||[],fi=Xt.findIndex(Ci=>Ci.cardId===Je.cardId),Mi=St(Xt.length),Qt=fi>=0?Mi[fi]:Jt._col??1;return{...Jt,_line:Je._role,_col:Qt}}),ft=di(Fe,((De=u.modifiers)==null?void 0:De[f])||{},u[f+"Formation"]);Ge=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${Y.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(Fe.map(Je=>({...Je,used:!1})),"#3a7bd5",ft.total,"defense",u[f+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${F} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${Qe((Re.players||[]).map(Fe=>({...Fe,used:!1})),"#ff6b6b",Re.total,"attack",u[h+"Formation"])}</div>
          ${Ge}
        </div>`}if(B&&((Ae=u.pendingAttack)!=null&&Ae.players)){const Re=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${Qe((Re.players||[]).map(Ge=>({...Ge,used:!1})),"#00ff88",Re.total,"attack",u[f+"Formation"])}</div>
        </div>`}if(B&&!((Ft=u.pendingAttack)!=null&&Ft.players)&&Y.length>0){const Re=Y.map(Fe=>{const ft=(at[Fe._role]||[]).find(Qt=>Qt.cardId===Fe.cardId)||Fe,Je=["GK","DEF"].includes(Fe._role),Jt=at[Fe._role]||[],Xt=Jt.findIndex(Qt=>Qt.cardId===Fe.cardId),fi=St(Jt.length),Mi=Xt>=0?fi[Xt]:ft._col??1;return{...ft,_line:Fe._role,_col:Mi,...Je?{note_a:Math.max(1,Number(ft.note_a)||0)}:{}}}),Ge=ci(Re,((st=u.modifiers)==null?void 0:st[f])||{},u[f+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${Y.length}/3)</div>
          <div style="display:flex;justify-content:center">${Qe(Re.map(Fe=>({...Fe,used:!1})),"#FFD700",Ge.total,"attack",u[f+"Formation"])}</div>
        </div>`}const ie=(u.log||[]).slice(-1)[0];return ie?'<div style="padding:2px 4px">'+bn(ie)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),go=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${A}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${C} – ${P}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${F}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Sn}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(u.log||[]).length})
      </button>`;It(t),t.style.overflow="hidden",te?t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${go}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Bt}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Et}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${pt}${rt}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ge.map(ie=>Pe(ie,!1)).join("")}
            ${Le?Pe(null,!0):""}
          </div>
        </div>
      </div>`:t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${go}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${li(w,u[f+"Formation"],ut,Z,At(),Ot(),He)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ge.map(ie=>We(ie,!1)).join("")}
            ${Le?We(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${B&&le.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${B&&le.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${B&&le.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${B&&le.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${le.length}</div>
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
          <div>${pt}${rt}</div>
        </div>
      </div>`;function Dt(){const ie=t.querySelector(".match-screen");if(!ie)return;const Ee=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ie.style.height=Ee+"px",ie.style.minHeight=Ee+"px",ie.style.maxHeight=Ee+"px",ie.style.overflow="hidden";const De=t.querySelector("#mobile-action-bar"),Ae=t.querySelector("#mobile-play-area");De&&Ae&&(Ae.style.paddingBottom=De.offsetHeight+"px")}if(Dt(),setTimeout(Dt,120),setTimeout(Dt,400),z||(z=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Dt),window.visualViewport.addEventListener("scroll",Dt)),window.addEventListener("resize",Dt)),function(){const Ee=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!Ee)return;const De=Ee.closest("#match-terrain-wrap");De&&(De.style.cssText="position:relative;width:100%;height:100%;padding:0"),Ee.removeAttribute("width"),Ee.removeAttribute("height"),Ee.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Ee.setAttribute("preserveAspectRatio","xMidYMid meet")}(),u._pvpResizeBound||(u._pvpResizeBound=!0,window.addEventListener("resize",()=>{const ie=t.querySelector(".terrain-wrapper svg");if(ie){const Ee=ie.closest("#match-terrain-wrap");Ee&&(Ee.style.cssText="position:relative;width:100%;height:100%;padding:0"),ie.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t.querySelectorAll(".match-slot-hit").forEach(ie=>{ie.addEventListener("click",()=>{if(!B&&!N)return;const Ee=ie.dataset.cardId,De=ie.dataset.role,Ae=(w[De]||[]).find(Ge=>Ge.cardId===Ee);if(!Ae||Ae.used)return;const Ft=He.includes(Ee);if(B&&!["MIL","ATT"].includes(De)&&!Ft)return;Array.isArray(u["selected_"+f])||(u["selected_"+f]=[]);const st=u["selected_"+f],Re=st.findIndex(Ge=>Ge.cardId===Ee);Re>-1?st.splice(Re,1):st.length<3&&st.push({...Ae,_role:De}),L()})}),t.querySelectorAll(".match-used-hit").forEach(ie=>{ie.addEventListener("click",()=>je(ie.dataset.cardId))}),t.querySelectorAll(".pvp-sub-btn").forEach(ie=>{ie.addEventListener("click",()=>je())}),(bo=t.querySelector("#pvp-sub-open"))==null||bo.addEventListener("click",()=>je()),t.querySelectorAll(".pvp-gc-mini").forEach(ie=>{B?ie.addEventListener("click",()=>ve(ie.dataset.gcId,ie.dataset.gcType)):(ie.style.opacity="0.35",ie.style.cursor="default",ie.addEventListener("click",()=>zt("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(xo=t.querySelector("#pvp-boost-card"))==null||xo.addEventListener("click",()=>be()),(yo=t.querySelector("#pvp-action"))==null||yo.addEventListener("click",ie=>{B?ie.currentTarget.dataset.pass==="1"||!de(f)?ke():V():N&&q()}),(ho=t.querySelector("#pvp-quit"))==null||ho.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&H()}),(vo=t.querySelector("#pvp-view-opp"))==null||vo.addEventListener("click",()=>he()),(wo=t.querySelector("#pvp-toggle-history"))==null||wo.addEventListener("click",()=>me()),_&&(clearInterval(_),_=null),Ke(),(B||N)&&!E){let ie=30,Ee=!1;const De=()=>document.getElementById("pvp-timer"),Ae=()=>{De()&&(De().textContent=ie+"s",De().style.color=Ee?"#ff4444":"#fff")};Ae(),_=setInterval(()=>{ie--,ie<0?Ee?(clearInterval(_),_=null,Ke(),B&&!de(f)?ke():H()):(Ee=!0,ie=15,Ae(),Qo("/sounds/timer-urgent.mp3",.6)):Ae()},1e3)}}function X(){It(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${qr(u[h+"Team"],u[h+"Formation"],null,u[h+"Name"]||"Adversaire")}
    </div>`;const w=t.querySelector("svg"),S=w==null?void 0:w.closest("#match-terrain-wrap");S&&(S.style.cssText="position:relative;width:100%;height:100%;padding:0"),w&&(w.removeAttribute("width"),w.removeAttribute("height"),w.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",w.setAttribute("preserveAspectRatio","xMidYMid meet")),f==="p1"&&setTimeout(async()=>{await k({phase:"midfield"})},5e3)}let U=!1;function ne(){if(U)return;const w=u[f+"Team"].MIL||[],S=u[h+"Team"].MIL||[],C=yt(w)+ht(w),P=yt(S)+ht(S),A=C>=P;It(t),t.innerHTML=`
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
      ${Ei(w,u[f+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${Ei(S,u[h+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const F=(le,pe)=>t.querySelectorAll(le).forEach((ze,ge)=>{setTimeout(()=>{ze.style.opacity="1",ze.style.transform="translateY(0) scale(1)"},pe+ge*90)});F(".duel-card-me",150),F(".duel-card-opp",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((le,pe)=>setTimeout(()=>{le.style.opacity="1"},pe*70)),900),setTimeout(()=>{const le=t.querySelector("#pvp-vs");le&&(le.style.opacity="1",le.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(pe=>pe.style.opacity="1")},1250);function B(le,pe,ze){const ge=document.getElementById(le);if(!ge)return;const Le=performance.now(),Ie=ae=>{const Me=Math.min(1,(ae-Le)/ze);ge.textContent=Math.round(pe*(1-Math.pow(1-Me,3))),Me<1?requestAnimationFrame(Ie):ge.textContent=pe};requestAnimationFrame(Ie)}setTimeout(()=>{B("pvp-score-me",C,800),B("pvp-score-opp",P,800)},1500);const N=u.p1Team.MIL||[],Y=u.p2Team.MIL||[],Z=yt(N)+ht(N),te=yt(Y)+ht(Y),re=Z>=te?"p1":"p2";let ee=u.boostValue;ee==null&&(ee=Vo(),u.boostValue=ee,u.boostOwner=re,u.boostUsed=!1),U=!0,setTimeout(()=>{const le=t.querySelector("#duel-row-"+(A?"me":"opp")),pe=t.querySelector("#duel-row-"+(A?"opp":"me")),ze=document.getElementById("pvp-score-me"),ge=document.getElementById("pvp-score-opp"),Le=A?ze:ge,Ie=A?ge:ze;Le&&(Le.style.fontSize="80px",Le.style.color=A?"#FFD700":"#ff6b6b",Le.style.animation="duelPulse .5s ease"+(A?",duelGlow 1.5s ease infinite .5s":"")),Ie&&(Ie.style.opacity="0.25"),setTimeout(()=>{le&&(le.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",le.style.zIndex="5"),setTimeout(()=>{const ae=document.getElementById("duel-shock");ae&&(ae.style.animation="shockwave .5s ease-out forwards"),pe&&(pe.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const ae=document.getElementById("pvp-duel-finale");if(!ae)return;const Me=u.boostOwner===f?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+ee+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ne=f==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ae.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(A?"⚽ "+u[f+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+u[h+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Me+Ne,ae.style.transition="opacity .45s ease",ae.style.opacity="1",ae.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const Ye=re;await k({phase:Ye+"-attack",attacker:Ye,round:1,boostValue:ee,boostUsed:!1,boostOwner:Ye})})},600)},700)},2800)}function ue(w,S,C){var pe,ze;const P=(u.gcDefs||[]).find(ge=>{var Le;return ge.name===w||((Le=ge.name)==null?void 0:Le.toLowerCase().trim())===(w==null?void 0:w.toLowerCase().trim())}),A={purple:"#b06ce0",light_blue:"#00d4ef"}[P==null?void 0:P.color]||"#b06ce0",F=(P==null?void 0:P.name)||w,B=(P==null?void 0:P.effect)||((pe=Oe[w])==null?void 0:pe.desc)||"",N=P!=null&&P.image_url?`/icons/${P.image_url}`:null,Y=((ze=Oe[w])==null?void 0:ze.icon)||"⚡",te=S===f?"Vous":u[S+"Name"]||"Adversaire",re=document.createElement("div");re.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",re.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{filter:drop-shadow(0 0 20px ${A}66)}50%{filter:drop-shadow(0 0 40px ${A}cc)}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${A};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${te} joue une carte</div>
      <div style="animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        ${it(F,N,Y,B,{width:200})}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(re);let ee=!1;const le=()=>{ee||(ee=!0,re.remove(),setTimeout(()=>C&&C(),50))};re.addEventListener("click",le),setTimeout(le,3e3)}function ve(w,S){var te,re,ee,le;const P=(u["gcCardsFull_"+f]||[]).find(pe=>pe.id===w),A=P==null?void 0:P._gcDef,F=(A==null?void 0:A.name)||S,B=(A==null?void 0:A.effect)||((te=Oe[S])==null?void 0:te.desc)||"Carte spéciale.",N=A!=null&&A.image_url?`/icons/${A.image_url}`:null,Y=((re=Oe[S])==null?void 0:re.icon)||"⚡",Z=document.createElement("div");Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",Z.innerHTML=`
      ${it(F,N,Y,B,{width:190})}
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(Z),(ee=Z.querySelector("#pvp-gc-back"))==null||ee.addEventListener("click",()=>Z.remove()),(le=Z.querySelector("#pvp-gc-use"))==null||le.addEventListener("click",()=>{Z.remove(),se(w,S)})}function be(){var P;const w=u[f+"Team"],S=Object.entries(w).flatMap(([A,F])=>(F||[]).filter(B=>!B.used).map(B=>({...B,_line:A})));if(!S.length)return;const C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",C.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${u.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${S.map(A=>{const F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[A._line]||"#555",B=jt(A,A._line)+(A.boost||0);return`<div class="bp-item" data-cid="${A.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${F};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${A.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(C),(P=C.querySelector("#bp-close"))==null||P.addEventListener("click",()=>C.remove()),C.querySelectorAll(".bp-item").forEach(A=>{A.addEventListener("click",async()=>{const F=A.dataset.cid,B=S.find(Y=>Y.cardId===F);if(!B)return;const N=(w[B._line]||[]).find(Y=>Y.cardId===F);N&&(N.boost=(N.boost||0)+u.boostValue),C.remove(),await k({[f+"Team"]:w,boostUsed:!0})})})}function je(w=null){var le,pe;if(!(u.phase===f+"-attack")){m("Remplacement uniquement avant votre attaque","warning");return}const C=u[f+"Team"],P=u["usedSubIds_"+f]||[],A=u.maxSubs||3;if(P.length>=A){m(`Maximum ${A} remplacements atteint`,"warning");return}const F=Object.entries(C).flatMap(([ze,ge])=>(ge||[]).filter(Le=>Le.used).map(Le=>({...Le,_line:ze}))),B=(u[f+"Subs"]||[]).filter(ze=>!P.includes(ze.cardId));if(!F.length){m("Aucun joueur utilisé à remplacer","warning");return}if(!B.length){m("Aucun remplaçant disponible","warning");return}let N=Math.max(0,F.findIndex(ze=>ze.cardId===w));const Y=((le=F[N])==null?void 0:le._line)||((pe=F[N])==null?void 0:pe.job);let Z=Math.max(0,B.findIndex(ze=>ze.job===Y)),te=!1;const re=document.createElement("div");re.id="pvp-sub-overlay",re.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function ee(){var Ne,Ce,Ye,He,nt,Wt;const ze=F[N],ge=B[Z],Le=Math.min(130,Math.round((window.innerWidth-90)/2)),Ie=Math.round(Le*1.35),ae=Pe=>`background:rgba(255,255,255,0.12);border:none;color:${Pe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Pe?"default":"pointer"};flex-shrink:0`;re.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${P.length}/${A})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ae(Z===0)}" ${Z===0?"disabled":""}>▲</button>
          <div>${ge?_t({...ge,used:!1,boost:0},Le,Ie):"<div>—</div>"}</div>
          <button id="pin-down" style="${ae(Z>=B.length-1)}" ${Z>=B.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${Z+1}/${B.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ae(N===0)}" ${N===0?"disabled":""}>▲</button>
          <div>${ze?_t({...ze,used:!1,boost:0},Le,Ie):"<div>—</div>"}</div>
          <button id="pout-down" style="${ae(N>=F.length-1)}" ${N>=F.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${N+1}/${F.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Ne=re.querySelector("#psub-close"))==null||Ne.addEventListener("click",()=>re.remove()),(Ce=re.querySelector("#pout-up"))==null||Ce.addEventListener("click",()=>{N>0&&(N--,ee())}),(Ye=re.querySelector("#pout-down"))==null||Ye.addEventListener("click",()=>{N<F.length-1&&(N++,ee())}),(He=re.querySelector("#pin-up"))==null||He.addEventListener("click",()=>{Z>0&&(Z--,ee())}),(nt=re.querySelector("#pin-down"))==null||nt.addEventListener("click",()=>{Z<B.length-1&&(Z++,ee())});const Me=(Pe,We,Ue,pt)=>{const rt=re.querySelector("#"+Pe);if(!rt)return;let Bt=0;rt.addEventListener("touchstart",ut=>{Bt=ut.touches[0].clientY},{passive:!0}),rt.addEventListener("touchend",ut=>{const Et=ut.changedTouches[0].clientY-Bt;if(Math.abs(Et)<30)return;const at=We();Et<0&&at<pt-1?(Ue(at+1),ee()):Et>0&&at>0&&(Ue(at-1),ee())},{passive:!0})};Me("pin-panel",()=>Z,Pe=>Z=Pe,B.length),Me("pout-panel",()=>N,Pe=>N=Pe,F.length),(Wt=re.querySelector("#psub-confirm"))==null||Wt.addEventListener("click",async Pe=>{if(Pe.preventDefault(),Pe.stopPropagation(),te)return;te=!0;const We=F[N],Ue=B[Z];if(!We||!Ue)return;const pt=We._line,rt=(C[pt]||[]).findIndex(Et=>Et.cardId===We.cardId);if(rt===-1){m("Erreur : joueur introuvable","error"),re.remove();return}const Bt={...Ue,_line:pt,position:We.position,used:!1,boost:0};C[pt].splice(rt,1,Bt);const ut=[...P,Ue.cardId];re.remove(),Be(We,Ue,async()=>{await k({[f+"Team"]:C,[h+"Team"]:u[h+"Team"],["usedSubIds_"+f]:ut})})})}document.body.appendChild(re),ee()}function Be(w,S,C){const P={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const F=(Y,Z,te)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${Z};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${te}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${P[Y.job]||"#555"};border:3px solid ${Z};position:relative;overflow:hidden;margin:0 auto">
        ${Ct(Y)?`<img src="${Ct(Y)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(Y.name||"").slice(0,12)}</div>
    </div>`;A.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${F(S,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${F(w,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(A);let B=!1;const N=()=>{B||(B=!0,A.remove(),setTimeout(()=>C(),50))};A.addEventListener("click",N),setTimeout(N,2200)}function he(){var S;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",w.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${u[h+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Qi(u[h+"Team"],u[h+"Formation"],null,[],At(),Ot())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(w),(S=w.querySelector("#pvp-opp-close"))==null||S.addEventListener("click",()=>w.remove())}function me(){var C;const w=u.log||[],S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",S.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${w.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...w].reverse().map(P=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${P.type==="goal"?"#FFD700":P.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${P.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(S),(C=S.querySelector("#pvp-hist-close"))==null||C.addEventListener("click",()=>S.remove())}async function ke(){if(u.phase!==f+"-attack")return;const w=f==="p1"?"p2":"p1",S=(u.round||0)+1,C=[...u.log||[]];C.push({type:"info",text:`⏭️ ${u[f+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const P=$e(u),A=de(w),F=P||!A?"finished":w+"-attack";await k({["selected_"+f]:[],modifiers:{...u.modifiers,[f]:{}},pendingAttack:null,phase:F,attacker:w,round:S,log:C}),F==="finished"&&await ye(u)}function j(w){const S=(w.GK||[]).some(P=>!P.used),C=["DEF","MIL","ATT"].some(P=>(w[P]||[]).some(A=>!A.used));return S&&!C}function T(w){return(w.p1Score||0)!==(w.p2Score||0)?null:j(w.p1Team)&&!ce(w.p2Team)?{side:"p1",gk:(w.p1Team.GK||[]).find(S=>!S.used)}:j(w.p2Team)&&!ce(w.p1Team)?{side:"p2",gk:(w.p2Team.GK||[]).find(S=>!S.used)}:null}async function R(){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(w);const S=(C,P)=>new Promise(A=>{w.innerHTML=`<div style="font-size:32px;font-weight:900;color:${P};letter-spacing:2px;animation:lcFade 1.4s ease both">${C}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(A,1400)});await S("⚽ DERNIER CORNER","#FFD700"),await S("🧤 LE GARDIEN MONTE !","#4fc3f7"),w.remove()}async function O(w,S){const{side:C,gk:P}=w;if(!P)return;const A=C+"Score",F=(S[A]||0)+1;P.used=!0;const B=[...S.log||[]];B.push({type:"duel",isGoal:!0,homeScored:C===f,homePlayers:C==="p1"?[Rt(P)]:[],aiPlayers:C==="p2"?[Rt(P)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${S[C+"Name"]} marque !`});const N=(S.round||0)+1,Y=C==="p1"?"p2":"p1",Z={...S,[A]:F},te=$e(Z);G.add(N),await R();const re=C===f?F:S[f+"Score"]||0,ee=C===f?S[h+"Score"]||0:F;Ze([Rt(P)],re,ee,C===f,async()=>{await k({[A]:F,log:B,round:N,pendingAttack:null,phase:te?"finished":Y+"-attack",attacker:Y,["selected_"+f]:[],modifiers:{...u.modifiers,[f]:{}}}),te&&await ye({...u,[A]:F})})}async function V(){const w=u[f+"Team"],S=!["GK","DEF","MIL","ATT"].some(F=>(u[h+"Team"][F]||[]).some(B=>!B.used)),C=(u["selected_"+f]||[]).map(F=>{const B=(w[F._role]||[]).find(pe=>pe.cardId===F.cardId)||F,N=["GK","DEF"].includes(F._role),Y=w[F._role]||[],Z=Y.findIndex(pe=>pe.cardId===F.cardId),te=St(Y.length),re=Z>=0?te[Z]:B._col??1,ee=u.stadiumDef||u.homeStadiumDef||null,le=B.stadiumBonus||ee&&(ee.club_id&&String(B.club_id)===String(ee.club_id)||ee.country_code&&B.country_code===ee.country_code)||!1;return{...B,_line:F._role,_col:re,stadiumBonus:le,...N?{note_a:Math.max(1,Number(B.note_a)||0)}:{}}});if(!C.length)return;const P=ci(C,u.modifiers[f]||{},u[f+"Formation"]);fe(f,C.map(F=>F.cardId)),C.forEach(F=>{const B=(w[F._role]||[]).find(N=>N.cardId===F.cardId);B&&(B.used=!0)}),u["selected_"+f]=[],L();const A=[...u.log||[]];if(S){if(C.length===1&&(C[0]._line==="GK"||C[0].job==="GK")&&(u.p1Score||0)===(u.p2Score||0)){await O({side:f,gk:C[0]},{...u,[f+"Team"]:w,log:A});return}const B=(u[f+"Score"]||0)+1,N=C.map(ee=>Rt(ee));A.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:N,homeTotal:P.total,aiTotal:0});const Y=(u.round||0)+1,Z=f==="p1"?"p2":"p1",te={...u,[f+"Team"]:w,[f+"Score"]:B},re=$e(te);G.add(Y),Ze(N,B,u[h+"Score"]||0,!0,async()=>{await k({[f+"Team"]:w,[f+"Score"]:B,["selected_"+f]:[],modifiers:{...u.modifiers,[f]:{}},pendingAttack:null,phase:re?"finished":Z+"-attack",attacker:Z,round:Y,log:A}),re&&await ye({...u,[f+"Score"]:B})});return}A.push({type:"pending",text:`⚔️ ${u[f+"Name"]} attaque (${P.total})`}),await k({[f+"Team"]:w,[h+"Team"]:u[h+"Team"],pendingAttack:{...P,players:C,side:f},["selected_"+f]:[],modifiers:{...u.modifiers,[f]:{}},phase:h+"-defense",log:A})}async function q(){const w=u[f+"Team"],S=(u["selected_"+f]||[]).map(ge=>{const Le=(w[ge._role]||[]).find(Ce=>Ce.cardId===ge.cardId)||ge,Ie=w[ge._role]||[],ae=Ie.findIndex(Ce=>Ce.cardId===ge.cardId),Me=St(Ie.length),Ne=ae>=0?Me[ae]:Le._col??1;return{...Le,_line:ge._role,_col:Ne}}),C=di(S,u.modifiers[f]||{},u[f+"Formation"]);fe(f,S.map(ge=>ge.cardId)),S.forEach(ge=>{const Le=(w[ge._role]||[]).find(Ie=>Ie.cardId===ge.cardId);Le&&(Le.used=!0)}),u["selected_"+f]=[],L();const P=Zi(u.pendingAttack.total,C.total,u.modifiers[f]||{}),A=u.pendingAttack.side,F=P==="attack"||(P==null?void 0:P.goal),B=A==="p1"?"p2":"p1",N=(u.round||0)+1,Y=(u.pendingAttack.players||[]).map(ge=>Rt(ge)),Z=[...u.log||[]];Z.push({type:"duel",isGoal:F,homeScored:F&&A===f,text:F?`⚽ BUT de ${u[A+"Name"]} ! (${u.pendingAttack.total} vs ${C.total})`:`✋ Attaque stoppée (${u.pendingAttack.total} vs ${C.total})`,homePlayers:Y,aiPlayers:S.map(ge=>Rt(ge)),homeTotal:u.pendingAttack.total,aiTotal:C.total});const te=F?(u[A+"Score"]||0)+1:u[A+"Score"]||0,re={...u,[f+"Team"]:w,[A+"Score"]:te},ee=$e(re),le=ee?"finished":B+"-attack",pe=!ee&&!F?T(re):null,ze=async()=>{if(pe){await O(pe,re);return}await k({[f+"Team"]:w,[h+"Team"]:u[h+"Team"],[A+"Score"]:te,["selected_"+f]:[],modifiers:{...u.modifiers,[f]:{}},pendingAttack:null,phase:le,attacker:B,round:N,log:Z}),(le==="finished"||ee)&&await ye({...u,[A+"Score"]:te})};if(F){const ge=A===f,Le=ge?te:u[f+"Score"]||0,Ie=ge?u[h+"Score"]||0:te;G.add(N),Ze(Y,Le,Ie,ge,ze)}else await ze()}function Q(w){return["MIL","ATT"].some(S=>(w[S]||[]).some(C=>!C.used))}function ce(w){return["GK","DEF","MIL","ATT"].some(S=>(w[S]||[]).some(C=>!C.used))}function xe(w){return ce(w)&&!Q(w)}function de(w){const S=u[w+"Team"],C=u[(w==="p1"?"p2":"p1")+"Team"];return!!(Q(S)||xe(S)&&!ce(C)||xe(S)&&!Q(C)&&ce(C))}function $e(w){return!ce(w.p1Team)&&!ce(w.p2Team)}function Se(w){const S=w.p1Score||0,C=w.p2Score||0;return S===C?null:S>C?v.home_id:v.away_id}async function ye(w){Gt(),Ke();try{const S=Se(w),C=S?v.home_id===S?v.away_id:v.home_id:null,P=w.p1Score||0,A=w.p2Score||0,{data:F,error:B}=await x.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:S,p_home_score:P,p_away_score:A,p_forfeit:!1});if(B&&console.error("[PvP] finish_pvp_match:",B),p)try{await x.rpc("check_and_finish_mini_league",{p_league_id:p})}catch(N){console.error("[PvP] check_and_finish_mini_league:",N)}S&&C&&ra(S,C).catch(()=>{});try{const{data:N}=await x.rpc("apply_match_rewards",{p_match_id:i});N!=null&&N.success&&!(N!=null&&N.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(N){console.error("[PvP] apply_match_rewards:",N)}if(typeof s=="function")try{await s({homeScore:P,awayScore:A,winnerId:S,homeId:v.home_id,awayId:v.away_id,matchId:i})}catch(N){console.error("[PvP] onMatchEnd:",N)}}catch(S){console.error("[PvP] finishMatch:",S)}}function we(){var A;const w=u[f+"Score"],S=u[h+"Score"],C=w>S,P=w===S;It(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${C?"🏆":P?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${C?"Victoire !":P?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${w} - ${S}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${p?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(A=document.getElementById("pvp-home"))==null||A.addEventListener("click",()=>{try{x.removeChannel(J)}catch{}ot(t),p?b("mini-league",{openLeagueId:p}):b("home")})}L()}async function Vi(t,e,i=!1){var d,l;const{state:o,navigate:n,toast:r}=e,a=i&&((l=(d=e==null?void 0:e.state)==null?void 0:d.params)==null?void 0:l.rankedData)||null;await Ii(t,e,i?"ranked":"random",async({deckId:s,formation:p,starters:c,subsRaw:y,gcCardsEnriched:b,gcDefs:m,stadiumDef:f})=>{It(t);const h=async g=>{await la(t,e,s,p,c,y,g||[],m,f,i,a)};if(!(b!=null&&b.length)){await h([]);return}Ti(t,b,h)})}async function sa(t,e,i){return aa(t,e,i)}async function la(t,e,i,o,n,r,a=[],d=[],l=null,s=!1,p=null){var K,J;const{state:c,navigate:y,toast:b}=e,m=(p==null?void 0:p.mmr)??((K=c.profile)==null?void 0:K.mmr)??450,f=s?bt(m):null,h=s?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",g=s?(f==null?void 0:f.color)||"#D4A017":"#FFD700";let $=!1,v=null,I=null;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${h};color:#fff;padding:32px;text-align:center;gap:20px">
      ${s?`<div style="font-size:36px">${(f==null?void 0:f.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${s?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${s?`<div style="font-size:13px;color:${(f==null?void 0:f.color)||"#D4A017"}">${(f==null?void 0:f.name)||""} · ${Math.round(m)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${g};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const u=async()=>{$=!0,v&&(v.unsubscribe(),v=null),I&&(clearInterval(I),I=null);try{await x.rpc("cancel_matchmaking",{p_user_id:c.profile.id})}catch(k){console.error("[Matchmaking] cancel error:",k)}};(J=document.getElementById("cancel-mm"))==null||J.addEventListener("click",async()=>{await u(),ot(t),y("home")});const E=async(k,H)=>{$||($=!0,v&&(v.unsubscribe(),v=null),I&&(clearInterval(I),I=null),await qt(t,e,k,H,{myGC:a,gcDefs:d,stadiumDef:l,isRanked:s,rankedData:p,onMatchEnd:s?da:null}))},_=c.user.id,{data:z,error:G}=s?await x.rpc("try_matchmake_ranked",{p_user_id:_,p_deck_id:i,p_mmr:m,p_range:200}):await x.rpc("try_matchmake",{p_user_id:_,p_deck_id:i});if(G||!(z!=null&&z.success)){console.error("[Matchmaking] try_matchmake error:",G||z),b("Erreur de matchmaking","error"),ot(t),y("home");return}if(z.matched){await E(z.match_id,!1);return}const W=async()=>{if($)return;const{data:k}=await x.from("matchmaking_queue").select("status, match_id").eq("user_id",_).maybeSingle();(k==null?void 0:k.status)==="matched"&&k.match_id&&await E(k.match_id,!0)};v=x.channel(`mm_${_}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${_}`},k=>{const H=k.new;H.status==="matched"&&H.match_id&&E(H.match_id,!0)}).subscribe(),I=setInterval(W,3e3),s?setTimeout(async()=>{if(!$){$=!0,v&&(v.unsubscribe(),v=null),I&&(clearInterval(I),I=null);try{await x.rpc("cancel_matchmaking",{p_user_id:c.profile.id})}catch(k){console.error("[Matchmaking] cancel error:",k)}b("Aucun adversaire trouvé — match contre une IA calibrée sur votre niveau","info",4e3),y("match",{matchMode:"ranked_ai",rankedData:p,presetSetup:{deckId:i,formation:o,starters:n,subsRaw:r,gcCardsEnriched:a,gcDefs:d,stadiumDef:l}})}},2e4):setTimeout(()=>{$||u()},12e4)}async function da(t,e){const{state:i,toast:o}=e,{winnerId:n,homeId:r,awayId:a,homeScore:d,awayScore:l,matchId:s}=t,p=i.user.id,c=r===p,y=n===p,{data:b}=await x.from("users").select("mmr, mmr_rd, mmr_v").eq("id",p).single(),{data:m}=await x.from("users").select("mmr, mmr_rd, mmr_v").eq("id",c?a:r).single();if(b&&m){const f=Yo(b.mmr,b.mmr_rd,b.mmr_v,m.mmr,m.mmr_rd,y?1:0);await x.from("users").update({mmr:f.mmr,mmr_rd:f.rd,mmr_v:f.v,mmr_wins:y?x.sql`mmr_wins + 1`:void 0,mmr_losses:y?void 0:x.sql`mmr_losses + 1`}).eq("id",p),o(y?`+MMR ↑ ${Math.round(f.mmr-b.mmr)}`:`-MMR ↓ ${Math.round(b.mmr-f.mmr)}`,y?"success":"error",4e3)}}const ca=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Vi,resumePvpMatch:sa},Symbol.toStringTag,{value:"Module"}));async function pa(t,e){const{state:i,navigate:o,toast:n}=e,r=i.params||{},a=r.friendId||null,d=r.friendName||"Ami",l=!!r.isAccepting;await Ii(t,e,"friend",async({deckId:s,formation:p,starters:c,subsRaw:y,gcCardsEnriched:b,gcDefs:m,stadiumDef:f})=>{It(t);const h=async g=>{const $=g||[];l?await fa(t,e,s,$,m,f):await ua(t,e,s,$,m,f,a,d)};if(!(b!=null&&b.length)){await h([]);return}Ti(t,b,h)})}async function ua(t,e,i,o,n,r,a,d){var $;const{state:l,navigate:s,toast:p}=e,c=l.user.id,{data:y,error:b}=await x.from("friend_match_invites").insert({inviter_id:c,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(b||!y){console.error("[Friend] Erreur création invitation:",b),p("Impossible de créer l'invitation","error"),s("home");return}t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${d}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let m=!1,f=null;const h=async()=>{f&&(f.unsubscribe(),f=null)};($=document.getElementById("cancel-friend"))==null||$.addEventListener("click",async()=>{await h(),await x.from("friend_match_invites").update({status:"declined"}).eq("id",y.id),ot(t),s("home")}),f=x.channel(`friend_invite_${y.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${y.id}`},async({new:v})=>{m||v.status!=="accepted"||!v.match_id||(m=!0,await h(),await qt(t,e,v.match_id,!0,{myGC:o,gcDefs:n,stadiumDef:r}))}).subscribe();const g=setInterval(async()=>{if(m)return;const{data:v}=await x.from("friend_match_invites").select("status, match_id").eq("id",y.id).single();(v==null?void 0:v.status)==="accepted"&&v.match_id&&(m=!0,clearInterval(g),await h(),await qt(t,e,v.match_id,!0,{myGC:o,gcDefs:n,stadiumDef:r}))},3e3);setTimeout(async()=>{m||(clearInterval(g),await h(),p("Invitation expirée","info"),s("home"))},12e4)}async function fa(t,e,i,o,n,r){const{state:a,navigate:d,toast:l}=e,s=a.user.id,{data:p}=await x.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",s).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!p){l("Aucune invitation en attente","error"),d("home");return}const{data:c,error:y}=await x.rpc("accept_friend_invite",{p_invite_id:p.id,p_invitee_deck_id:i});if(y||!(c!=null&&c.success)){console.error("[Friend] Erreur accept_friend_invite:",y||c),l((c==null?void 0:c.error)||"Impossible de rejoindre le match","error"),d("home");return}await qt(t,e,c.match_id,!1,{myGC:o,gcDefs:n,stadiumDef:r})}const _n="#1A6B3C",lt="#D4A017",ii="var(--tile-bg)",oi="var(--tile-border)",Tt="var(--divider)",Xe="var(--tile-fg-on-page)",Lt="var(--tile-fg-dim)",et="var(--tile-fg-faint)",ri="var(--nav-fg,#fff)",kn="rgba(255,255,255,0.62)",ma="rgba(255,255,255,0.4)";async function ga(t,e){var o;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(o=e.state.params)==null?void 0:o.openLeagueId;if(i){e.state.params.openLeagueId=null,await dt(t,e,i);return}await tt(t,e)}async function tt(t,e,i="waiting"){var v,I;const{state:o}=e,n=o.profile.id,{data:r}=await x.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",n),a=(r||[]).map(u=>u.league_id),d={};(r||[]).forEach(u=>{d[u.league_id]={amount:u.prize_amount,claimed:u.prize_claimed}});const{data:l,error:s}=await x.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),p=s?(await x.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:l||[],y=(a.length?await x.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],b=y.filter(u=>u.status==="waiting"&&!u.is_archived),m=y.filter(u=>u.status==="active"&&!u.is_archived),f=y.filter(u=>u.is_archived||u.status==="finished");let h=f;if(f.length){const{data:u}=await x.from("mini_league_matches").select("league_id").in("league_id",f.map(_=>_.id)).or(`home_id.eq.${n},away_id.eq.${n}`).not("status","eq","bye"),E=new Set((u||[]).map(_=>_.league_id));h=f.filter(_=>E.has(_.id))}const g=p.filter(u=>!a.includes(u.id)),$=[{key:"waiting",label:"🟡 En attente",count:b.length+g.length},{key:"active",label:"🟢 En cours",count:m.length},{key:"archived",label:"📁 Archivées",count:h.length}];t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Tt};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${ri}">🏆 Mini League</div>
        <div style="font-size:12px;color:${kn}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${ri}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Tt}">
      ${$.map(u=>`<button class="ml-tab" data-tab="${u.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===u.key?_n:"transparent"};background:none;font-size:12px;font-weight:${i===u.key?"900":"600"};color:${i===u.key?"#4ade80":ma};cursor:pointer">${u.label}${u.count?` (${u.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?ba(b,g,n):i==="active"?xa(m,n):ya(h,n,d)}
    </div>
  </div>`,(v=document.getElementById("ml-create-btn"))==null||v.addEventListener("click",()=>ha(t,e)),(I=document.getElementById("ml-refresh-list"))==null||I.addEventListener("click",()=>tt(t,e,i)),t.querySelectorAll(".ml-tab").forEach(u=>u.addEventListener("click",()=>tt(t,e,u.dataset.tab))),t.querySelectorAll("[data-league-id]").forEach(u=>u.addEventListener("click",()=>dt(t,e,u.dataset.leagueId))),t.querySelectorAll("[data-join]").forEach(u=>u.addEventListener("click",E=>{E.stopPropagation(),$n(t,e,u.dataset.join,u.dataset.type)})),t.querySelectorAll("[data-delete]").forEach(u=>u.addEventListener("click",E=>{E.stopPropagation(),Yi(t,e,u.dataset.delete,u.dataset.name,i)})),t.querySelectorAll("[data-claim-league]").forEach(u=>u.addEventListener("click",async E=>{E.stopPropagation(),u.disabled=!0,u.textContent="...";const{data:_,error:z}=await x.rpc("claim_mini_league_prize",{p_league_id:u.dataset.claimLeague,p_user_id:o.profile.id});if(z||!(_!=null&&_.success)){e.toast((_==null?void 0:_.error)||"Erreur lors de la récupération","error"),tt(t,e,i);return}if(!_.already_claimed){o.profile.credits=(o.profile.credits||0)+_.prize;const G=document.getElementById("nav-credits");G&&(G.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),e.toast(`💰 +${_.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}tt(t,e,i)}))}function Li(t,e,i=!1,o=null){var l,s;const n=t.creator_id===e,r=t.pot||0,a=((s=(l=t.mini_league_members)==null?void 0:l[0])==null?void 0:s.count)||0,d=o&&o.amount>0&&!o.claimed;return`<div data-league-id="${t.id}" style="background:${ii};border:1px solid ${d?"rgba(212,160,23,0.5)":oi};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${Xe}">${t.name}</div>
      ${n?`<button data-delete="${t.id}" data-name="${t.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${Lt};margin-bottom:${i||d?"10px":"0"}">
      <span>${t.type==="private"?"🔒":"🌐"} ${t.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${t.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${t.max_players}</span>
      <span>💰 ${(t.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${r>0?`<span style="color:${lt};font-weight:700">🏆 ${r.toLocaleString("fr")} cr.</span>`:""}
      ${t.current_day>0?`<span>📅 J${t.current_day}/${t.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${t.id}" data-type="${t.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(t.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
    ${d?`<button data-claim-league="${t.id}" class="btn btn-sm" style="width:100%;background:${lt};color:#141000;font-weight:900;border:none">💰 Récupérer ${o.amount.toLocaleString("fr")} cr.</button>`:""}
  </div>`}function ba(t,e,i){const o=[];return t.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${et};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),o.push(...t.map(n=>Li(n,i,!1)))),e.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${et};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),o.push(...e.map(n=>Li(n,i,!0)))),o.length?o.join(""):`<div style="text-align:center;padding:40px;color:${et}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function xa(t,e){return t.length?t.map(i=>Li(i,e)).join(""):`<div style="text-align:center;padding:40px;color:${et}">Aucune mini league en cours.</div>`}function ya(t,e,i={}){return t.length?t.map(o=>Li(o,e,!1,i[o.id])).join(""):`<div style="text-align:center;padding:40px;color:${et}">Aucune mini league archivée.</div>`}function ha(t,e){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(o=>o.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=o.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var m,f,h,g;const{toast:o}=e,n=document.getElementById("ml-name").value.trim(),r=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,d=((m=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:m.value)||"public",l=((f=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:f.value)||"aller",s=((g=(h=document.getElementById("ml-pwd"))==null?void 0:h.value)==null?void 0:g.trim())||null;if(!n){o("Le nom est obligatoire","error");return}if(a<100){o("Mise minimum : 100 crédits","error");return}if(d==="private"&&!s){o("Mot de passe requis","error");return}const{data:p,error:c}=await x.from("mini_leagues").insert({name:n,creator_id:e.state.profile.id,type:d,password:s,mode:l,max_players:r,entry_fee:a}).select().single();if(c){o("Erreur : "+c.message,"error");return}const{data:y}=await x.from("users").select("credits").eq("id",e.state.profile.id).single();if(((y==null?void 0:y.credits)||0)<a){await x.from("mini_leagues").delete().eq("id",p.id),o(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await x.from("users").update({credits:y.credits-a}).eq("id",e.state.profile.id),await x.from("mini_leagues").update({pot:a}).eq("id",p.id),await x.from("mini_league_members").insert({league_id:p.id,user_id:e.state.profile.id}),e.state.profile&&(e.state.profile.credits=y.credits-a);const b=document.getElementById("nav-credits");b&&(b.textContent=`💰 ${(e.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),o(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),dt(t,e,p.id)})}function va(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",e.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(e);const i=e.querySelector("#ml-pwd-input"),o=n=>{e.remove(),t(n)};setTimeout(()=>i==null?void 0:i.focus(),80),e.querySelector("#pwd-cancel").addEventListener("click",()=>o(null)),e.querySelector("#pwd-ok").addEventListener("click",()=>o(i.value.trim())),i.addEventListener("keydown",n=>{n.key==="Enter"&&o(i.value.trim())})})}async function $n(t,e,i,o){var c;const{toast:n,state:r}=e,a=r.profile.id;let d=null;if(o==="private"&&(d=await va(),d===null))return;const{data:l,error:s}=await x.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:d});if(s||!(l!=null&&l.success)){console.error("[MiniLeague] join_mini_league:",s||l),n((l==null?void 0:l.error)||"Erreur lors de l'inscription","error");return}if(typeof e.refreshProfile=="function")await e.refreshProfile();else{const{data:y}=await x.from("users").select("credits").eq("id",a).single();r.profile&&y&&(r.profile.credits=y.credits)}const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${(((c=r.profile)==null?void 0:c.credits)||0).toLocaleString("fr")}`),n("✅ Inscrit ! Pot mis à jour.","success"),dt(t,e,i)}async function wa(t,e,i,o){const{toast:n,state:r}=e,a=r.profile.id;if(!await new Promise(y=>{const b=document.createElement("div");b.className="modal-overlay",b.style.zIndex="2100",b.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${o.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(b),b.querySelector("#lv-ok").onclick=()=>{b.remove(),y(!0)},b.querySelector("#lv-cancel").onclick=()=>{b.remove(),y(!1)}}))return;const{data:l,error:s}=await x.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(s||!(l!=null&&l.success)){n((l==null?void 0:l.error)||"Erreur lors de la désinscription","error");return}const p=l.refund||o;r.profile&&(r.profile.credits=(r.profile.credits||0)+p);const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),n(`↩️ Désinscrit · +${p.toLocaleString("fr")} cr. remboursés`,"success"),tt(t,e,"waiting")}async function Yi(t,e,i,o,n){const{toast:r}=e;if(!confirm(`Supprimer définitivement "${o}" et tous ses matchs/membres ? Action irréversible.`))return;await x.from("mini_league_matches").delete().eq("league_id",i),await x.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await x.from("mini_leagues").delete().eq("id",i);if(a){r("Erreur suppression ("+a.message+")","error");return}r("Mini League supprimée avec succès","success"),tt(t,e,n)}async function _a(t,e,i){await x.from("mini_leagues").update({is_archived:!0}).eq("id",i),e.toast("Mini League archivée","success"),tt(t,e,"archived")}async function dt(t,e,i){var I,u,E,_,z,G,W,K,J;const{state:o,toast:n}=e,r=o.profile.id,[{data:a},{data:d},{data:l}]=await Promise.all([x.from("mini_leagues").select("*").eq("id",i).single(),x.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),x.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){n("Introuvable","error"),await tt(t,e);return}const s=(d||[]).some(k=>k.user_id===r),p=a.creator_id===r,c=(d||[]).map(k=>k.user).filter(Boolean),y=La(c,l||[]),b=(l||[]).filter(k=>k.matchday===a.current_day),m=a.pot||0,f=a.entry_fee||100,h=b.length>0&&b.every(k=>k.status==="finished"||k.status==="bye"),g=a.current_day>=a.total_days,$=(d||[]).find(k=>k.user_id===r);t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Tt};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${ri}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${ri};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${ri}">${a.name}</div>
        <div style="font-size:11px;color:${kn}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${f} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"rgba(74,222,128,0.16)":a.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${a.status==="active"?"#4ade80":a.status==="finished"?"#c084fc":"#eab308"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${m>0?`<div style="font-size:12px;font-weight:900;color:${lt};margin-top:4px">🏆 ${m.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${ii};border:1px solid ${oi};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Xe}">👥 Joueurs (${c.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${Lt};margin-bottom:10px">💰 ${f} cr./joueur → Pot estimé : ${(f*c.length).toLocaleString("fr")} cr. (🥇${Math.floor(f*c.length*.7).toLocaleString("fr")} · 🥈${Math.floor(f*c.length*.2).toLocaleString("fr")} · 🥉${Math.floor(f*c.length*.1).toLocaleString("fr")})</div>
        ${c.map(k=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${Tt}">
            <div style="width:36px;height:36px;border-radius:50%;background:${k.club_color2||_n};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${k.club_color1||"#fff"}">${(k.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Xe}">${k.club_name||k.pseudo}</div><div style="font-size:11px;color:${et}">@${k.pseudo}</div></div>
            ${k.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${p&&c.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${f} cr. × ${c.length})</button>`:""}
        ${p?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${s?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${f} cr.)</button>`}
        ${s&&!p?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${f.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${ii};border:1px solid ${oi};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${b.map(k=>Po(k,c,r,s)).join("")}
        ${p&&h&&!g?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&y.length?`
      <div style="background:${ii};border:1px solid ${oi};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${et};text-transform:uppercase;border-bottom:2px solid ${Tt}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${m>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${lt}">💰</th>`:""}
          </tr></thead>
          <tbody>${y.map((k,H)=>{const oe=m>0&&a.status==="finished"?H===0?Math.floor(m*.7):H===1?Math.floor(m*.2):H===2?Math.floor(m*.1):0:0;return`<tr style="border-bottom:1px solid ${Tt};${k.userId===r?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${H===0?lt:H<3?"#4ade80":Lt}">${["🥇","🥈","🥉"][H]||H+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Xe}">${k.clubName}</div><div style="font-size:10px;color:${et}">@${k.pseudo}</div></td>
              <td style="text-align:center;color:${Lt}">${k.played}</td><td style="text-align:center;color:${Lt}">${k.won}-${k.drawn}-${k.lost}</td>
              <td style="text-align:center;color:${k.goalDiff>=0?"#4ade80":"#ff6b6b"}">${k.goalDiff>=0?"+":""}${k.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Xe}">${k.points}</td>
              ${m>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${lt}">${oe?oe.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${ii};border:1px solid ${oi};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(k,H)=>H+1).reverse().map(k=>{const H=(l||[]).filter(oe=>oe.matchday===k);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${et};margin-bottom:6px">Journée ${k}</div>${H.map(oe=>Po(oe,c,r,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${p&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${Lt}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const v=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((I=document.getElementById("ml-back"))==null||I.addEventListener("click",()=>tt(t,e,v)),(u=document.getElementById("ml-refresh"))==null||u.addEventListener("click",async k=>{const H=k.currentTarget;H.style.opacity="0.5",await dt(t,e,i)}),(E=document.getElementById("ml-start-btn"))==null||E.addEventListener("click",()=>ka(t,e,a,c)),(_=document.getElementById("ml-next-day"))==null||_.addEventListener("click",()=>$a(t,e,i)),(z=document.getElementById("ml-join-now"))==null||z.addEventListener("click",()=>$n(t,e,i,a.type)),(G=document.getElementById("ml-leave-btn"))==null||G.addEventListener("click",()=>wa(t,e,i,f)),(W=document.getElementById("ml-delete-btn"))==null||W.addEventListener("click",()=>Yi(t,e,i,a.name,"waiting")),(K=document.getElementById("ml-delete-now"))==null||K.addEventListener("click",()=>Yi(t,e,i,a.name,v)),(J=document.getElementById("ml-archive-btn"))==null||J.addEventListener("click",()=>_a(t,e,i)),t.querySelectorAll("[data-play-match]").forEach(k=>{k.addEventListener("click",()=>{const H=b.find(oe=>oe.id===k.dataset.playMatch);H&&(ct(),e.navigate("match-mini-league",{mlMatchId:H.id,leagueId:i}))})}),a.status==="finished"&&$){const k=y.findIndex(H=>H.userId===r);k>=0&&k<3&&$.prize_amount>0&&!$.prize_claimed&&setTimeout(()=>Ea(t,e,a,$,k),400)}}function Po(t,e,i,o,n=!1){const r=c=>e.find(y=>y.id===c);if(t.is_bye){const c=r(t.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${Lt};text-align:center">🔵 ${(c==null?void 0:c.club_name)||(c==null?void 0:c.pseudo)||"?"} exempté(e)</div>`}const a=r(t.home_id),d=r(t.away_id),l=t.home_id===i||t.away_id===i,s=l&&t.status==="pending"&&o&&!n,p=t.status==="finished"?`${t.home_score} - ${t.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${l?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${l?"rgba(74,222,128,0.35)":Tt}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${t.status==="finished"?"#4ade80":et}">${p}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"?"}</div>
    ${s?`<button data-play-match="${t.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${t.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function ka(t,e,i,o){const{toast:n,state:r}=e,a=za(o.map(s=>s.id),i.mode),d=[];a.forEach((s,p)=>s.forEach(c=>d.push({league_id:i.id,matchday:p+1,home_id:c.home||c.bye,away_id:c.away||null,is_bye:!!c.bye,status:c.bye?"bye":"pending"})));const{error:l}=await x.from("mini_league_matches").insert(d);if(l){n("Erreur calendrier : "+l.message,"error");return}await x.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),n(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),dt(t,e,i.id)}async function $a(t,e,i){const{data:o}=await x.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),n=(o.current_day||0)+1;if(n>(o.total_days||0)){dt(t,e,i);return}await x.from("mini_leagues").update({current_day:n}).eq("id",i),e.toast(`Journée ${n} commencée !`,"success"),dt(t,e,i)}async function Ea(t,e,i,o,n){var y,b;const{state:r,toast:a}=e,d=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],l=["🥇","🥈","🥉"][n],s=o.prize_amount||d[n]||0,p=o.prize_claimed,c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",c.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${l}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${n===0?"Champion !":n===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${lt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${p?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${lt}">${s.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${n===0?"70%":n===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${p?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${lt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${s.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(c),(y=c.querySelector("#prize-close"))==null||y.addEventListener("click",()=>c.remove()),(b=c.querySelector("#claim-prize-btn"))==null||b.addEventListener("click",async m=>{const f=m.currentTarget;f.disabled=!0,f.textContent="...";const{data:h,error:g}=await x.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:r.profile.id});if(g||!(h!=null&&h.success)){console.error("[MiniLeague] claim_mini_league_prize:",g||h),a((h==null?void 0:h.error)||"Erreur lors de la récupération","error"),f.disabled=!1,f.textContent=`💰 Récupérer ${s.toLocaleString("fr")} cr.`;return}if(h.already_claimed)a("Déjà récupéré précédemment","info");else{const $=(r.profile.credits||0)+h.prize;r.profile&&(r.profile.credits=$);const v=document.getElementById("nav-credits");v&&(v.textContent=`💰 ${$.toLocaleString("fr")}`),a(`💰 +${h.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}c.remove(),dt(t,e,i.id)})}function za(t,e){const o=t.length%2===0?[...t]:[...t,null],n=o.length;let r=o.slice(1);const a=[];for(let d=0;d<n-1;d++){const l=[],s=[o[0],...r];for(let p=0;p<n/2;p++){const c=s[p],y=s[n-1-p];c===null?l.push({bye:y}):y===null?l.push({bye:c}):l.push({home:c,away:y})}a.push(l),r=[r[r.length-1],...r.slice(0,-1)]}return e==="aller-retour"?[...a,...a.map(d=>d.map(l=>l.bye?l:{home:l.away,away:l.home}))]:a}function La(t,e){const i={};return t.forEach(o=>{i[o.id]={userId:o.id,pseudo:o.pseudo,clubName:o.club_name||o.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),e.filter(o=>o.status==="finished"&&!o.is_bye&&o.home_score!=null).forEach(o=>{const n=i[o.home_id],r=i[o.away_id];!n||!r||(n.played++,r.played++,n.goalsFor+=o.home_score,n.goalsAgainst+=o.away_score,r.goalsFor+=o.away_score,r.goalsAgainst+=o.home_score,o.home_score>o.away_score?(n.won++,n.points+=3,r.lost++):o.home_score<o.away_score?(r.won++,r.points+=3,n.lost++):(n.drawn++,n.points++,r.drawn++,r.points++),n.goalDiff=n.goalsFor-n.goalsAgainst,r.goalDiff=r.goalsFor-r.goalsAgainst)}),Object.values(i).sort((o,n)=>n.points-o.points||n.goalDiff-o.goalDiff||n.goalsFor-o.goalsFor)}async function Ro(t,e){const{state:i,navigate:o,toast:n}=e,r=i.params||{},a=r.leagueId||null,d=r.mlMatchId||null,l=i.user.id;if(!d||!a){n("Match introuvable","error"),o("mini-league");return}const{data:s,error:p}=await x.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",d).single();if(p||!s){n("Match introuvable","error"),o("mini-league",{openLeagueId:a});return}if(s.home_id!==l&&s.away_id!==l){n("Vous ne faites pas partie de ce match","error"),o("mini-league",{openLeagueId:a});return}const c=s.home_id===l;if(s.match_id){await qt(t,e,s.match_id,c,{mlLeagueId:a,mlMatchId:d});return}await Ii(t,e,"mini_league",async({deckId:y,gcCardsEnriched:b,gcDefs:m,stadiumDef:f})=>{It(t);const h=async g=>{const{data:$,error:v}=await x.rpc("start_mini_league_match",{p_ml_match_id:d,p_user_id:l,p_deck_id:y});if(v||!($!=null&&$.success)){console.error("[MiniLeague] start_mini_league_match error:",v||$),n(($==null?void 0:$.error)||"Impossible de lancer le match","error"),o("mini-league",{openLeagueId:a});return}if($.matched){await qt(t,e,$.match_id,c,{mlLeagueId:a,mlMatchId:d,myGC:g||[],gcDefs:m,stadiumDef:f});return}await Sa(t,e,{mlMatchId:d,leagueId:a,amIHome:c,chosenGC:g,gcDefs:m,stadiumDef:f})};if(!(b!=null&&b.length)){await h([]);return}Ti(t,b,h)})}function Sa(t,e,{mlMatchId:i,leagueId:o,amIHome:n,chosenGC:r,gcDefs:a,stadiumDef:d}){return new Promise(l=>{var f;const{navigate:s}=e;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let p=!1;const c=async h=>{if(!p){if(p=!0,clearInterval(m),b)try{b.unsubscribe()}catch{}h&&await qt(t,e,h,n,{mlLeagueId:o,mlMatchId:i,myGC:r||[],gcDefs:a,stadiumDef:d}),l()}};(f=document.getElementById("wait-back"))==null||f.addEventListener("click",()=>{if(p=!0,clearInterval(m),b)try{b.unsubscribe()}catch{}s("mini-league",{openLeagueId:o}),l()});const y=async()=>{if(p)return;const{data:h}=await x.from("mini_league_matches").select("match_id").eq("id",i).single();h!=null&&h.match_id&&c(h.match_id)},b=x.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},h=>{var g;(g=h.new)!=null&&g.match_id&&c(h.new.match_id)}).subscribe(),m=setInterval(y,3e3);y()})}const No={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Nt(t,e,i=0){return e?(Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0)+(e===t.job||e===t.job2?i:0):0}async function Ia(t,e){t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await mo(t,e)}async function mo(t,e){const{state:i,toast:o,navigate:n}=e;Vt(n,i.profile,"market","/icons/",o);const{data:r}=await x.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:a}=await x.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),{data:d}=await x.from("cards").select("player_id").eq("owner_id",i.profile.id).eq("card_type","player").not("player_id","is",null),l=new Set((d||[]).map(E=>E.player_id)),{data:s}=await x.from("decks").select("id").eq("owner_id",i.profile.id),p=(s||[]).map(E=>E.id);let c=new Set;if(p.length){const{data:E}=await x.from("deck_cards").select("card:cards(player_id)").in("deck_id",p);c=new Set((E||[]).map(_=>{var z;return(z=_.card)==null?void 0:z.player_id}).filter(Boolean))}const y=(r||[]).filter(E=>E.seller_id!==i.profile.id),b=a||[];t.innerHTML=`
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
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-top:2px">${y.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
    </div>

    <!-- Onglets -->
    <div style="padding:8px 16px;background:var(--tile-bg);border-bottom:1px solid var(--tile-border);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--tile-border);background:var(--tile-bg);color:var(--tile-fg-dim);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${b.length})</button>
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
  </div>`;let m="buy",f="";const h=()=>{var E,_,z,G,W,K,J,k;return{name:(((E=document.getElementById("flt-name"))==null?void 0:E.value)||"").toLowerCase().trim(),club:(((_=document.getElementById("flt-club"))==null?void 0:_.value)||"").toLowerCase().trim(),country:(((z=document.getElementById("flt-country"))==null?void 0:z.value)||"").toLowerCase().trim(),job:((G=document.getElementById("flt-job"))==null?void 0:G.value)||"",rarity:((W=document.getElementById("flt-rarity"))==null?void 0:W.value)||"",sort:((K=document.getElementById("flt-sort"))==null?void 0:K.value)||"",note1:parseInt((J=document.getElementById("flt-note1"))==null?void 0:J.value)||0,note2:parseInt((k=document.getElementById("flt-note2"))==null?void 0:k.value)||0}};function g(E){const _=h(),z=E.filter(W=>{var M,L,X;const K=(M=W.card)==null?void 0:M.player;if(!K)return!1;const J=`${K.firstname} ${K.surname_real}`.toLowerCase(),k=(((L=K.clubs)==null?void 0:L.encoded_name)||"").toLowerCase(),H=(K.country_code||"").toLowerCase(),oe=((X=W.card)==null?void 0:X.evolution_bonus)||0,D=Nt(K,K.job,oe),se=K.job2?Nt(K,K.job2,oe):0;if(_.name&&!J.includes(_.name)||_.club&&!k.includes(_.club)||_.country&&!H.includes(_.country)||_.job&&K.job!==_.job||_.rarity&&K.rarity!==_.rarity||_.note1&&D<_.note1||_.note2&&se<_.note2)return!1;const fe=l.has(K.id);return!(f==="owned"&&!fe||f==="new"&&fe||f==="indeck"&&!c.has(K.id))}),G=W=>{var k,H;const K=(k=W.card)==null?void 0:k.player;if(!K)return 0;const J=((H=W.card)==null?void 0:H.evolution_bonus)||0;return Math.max(Nt(K,K.job,J),K.job2?Nt(K,K.job2,J):0)};return _.sort==="note_desc"?[...z].sort((W,K)=>G(K)-G(W)):_.sort==="note_asc"?[...z].sort((W,K)=>G(W)-G(K)):_.sort==="price_asc"?[...z].sort((W,K)=>W.price-K.price):_.sort==="price_desc"?[...z].sort((W,K)=>K.price-W.price):z}function $(E){var D,se,fe;const _=(D=E.card)==null?void 0:D.player;if(!_)return"";const z=((se=E.card)==null?void 0:se.evolution_bonus)||0,G=(i.profile.credits||0)>=E.price,W=l.has(_.id),K=c.has(_.id),J=qe({..._,_evolution_bonus:z},{width:140}),k=W?"font-size:12px;padding:8px 10px;background:linear-gradient(135deg,#D4A017,#f0c040);border:none;color:#1a1a1a;font-weight:900;display:flex;align-items:center;justify-content:center;gap:5px;width:100%":"font-size:12px;padding:8px 10px;display:flex;align-items:center;justify-content:center;gap:5px;width:100%",H=K?'<img src="/icons/nav-decks.png" alt="Dans une de tes équipes" style="width:16px;height:16px;object-fit:contain;flex-shrink:0">':"",oe=[W?"Tu possèdes déjà ce joueur":"",K?"Il est aligné dans une de tes équipes":""].filter(Boolean).join(" · ");return`<div class="mkt-buy-tile">
      ${J}
      <div class="mkt-price">${E.price.toLocaleString("fr")} cr.</div>
      <div class="mkt-seller">Vendeur : ${((fe=E.seller)==null?void 0:fe.pseudo)||"—"}</div>
      <button class="btn btn-primary btn-sm" data-buy="${E.id}" ${G?"":"disabled"} style="${k}" title="${oe}"><span>${G?W?"🟡 Acheter":"Acheter":"Trop cher"}</span>${H}</button>
    </div>`}function v(E){var se,fe,M,L;const _=(se=E.card)==null?void 0:se.player;if(!_)return"";const z=((fe=E.card)==null?void 0:fe.evolution_bonus)||0,G=Nt(_,_.job,z),W=_.job2?Nt(_,_.job2,z):0,K=E.status==="sold",J=_.country_code?`https://flagsapi.com/${_.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,k=No[_.job]||"#bbb",H=_.job2?No[_.job2]||"#bbb":null,oe=_.job==="GK"?"#fff":k,D=_.job2==="GK"?"#fff":H;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${K?"opacity:0.7":""}">
      ${J?`<img src="${J}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(M=_.clubs)!=null&&M.logo_url?`<img src="${_.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${k};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${oe};font-family:Arial Black,Arial">${G}</span>
        </div>
        ${W?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${H};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${D};font-family:Arial Black,Arial">${W}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${_.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${_.surname_real}</div>
        <div style="font-size:10px;color:${K?"#22c55e":"#999"};margin-top:1px">
          ${K?`✅ Vendu à ${((L=E.buyer)==null?void 0:L.pseudo)||"—"} · ${E.sold_at?new Date(E.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(E.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${E.price.toLocaleString("fr")}</div>
        ${K?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${E.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function I(){const E=document.getElementById("mkt-content"),_=document.getElementById("mkt-filters");if(E){if(_.style.display=m==="buy"?"flex":"none",m==="buy"){const z=g(y);E.innerHTML=z.length?`<div class="mkt-buy-grid">${z.map($).join("")}</div>`:'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const z=b.filter(W=>W.status==="active").sort((W,K)=>new Date(K.listed_at)-new Date(W.listed_at)),G=b.filter(W=>W.status==="sold").sort((W,K)=>new Date(K.sold_at||K.listed_at)-new Date(W.sold_at||W.listed_at));E.innerHTML=(z.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${z.length})</div>`+z.map(v).join(""):"")+(G.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${G.length})</div>`+G.map(v).join(""):"")+(!z.length&&!G.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}E.querySelectorAll("[data-buy]").forEach(z=>z.addEventListener("click",()=>Ta(z.dataset.buy,y,t,e))),E.querySelectorAll("[data-cancel]").forEach(z=>z.addEventListener("click",()=>Ma(z.dataset.cancel,t,e)))}}t.querySelectorAll(".mkt-tab").forEach(E=>{E.addEventListener("click",()=>{m=E.dataset.tab,t.querySelectorAll(".mkt-tab").forEach(_=>{const z=_===E;_.style.background=z?"var(--green)":"var(--tile-bg)",_.style.color=z?"#fff":"var(--tile-fg-dim)",_.style.borderColor=z?"var(--green)":"var(--tile-border)"}),I()})});let u;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-sort","flt-note1","flt-note2"].forEach(E=>{var _,z;(_=document.getElementById(E))==null||_.addEventListener("input",()=>{clearTimeout(u),u=setTimeout(I,250)}),(z=document.getElementById(E))==null||z.addEventListener("change",()=>{clearTimeout(u),u=setTimeout(I,100)})}),t.querySelectorAll(".mkt-own-btn").forEach(E=>{E.addEventListener("click",()=>{f=E.dataset.own||"",t.querySelectorAll(".mkt-own-btn").forEach(_=>_.classList.toggle("active",_===E)),I()})}),I()}async function Ta(t,e,i,o){const{state:n,toast:r,refreshProfile:a}=o,d=e.find(p=>p.id===t);if(!d)return;const l=d.price;if((n.profile.credits||0)<l){r("Crédits insuffisants","error");return}Aa(d,async()=>{const{error:p}=await x.rpc("buy_market_card",{p_listing_id:t,p_buyer_id:n.profile.id});if(p){r("Erreur achat : "+p.message,"error");return}await a();const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(n.profile.credits||0).toLocaleString("fr")}`),r("✅ Carte achetée !","success"),await mo(i,o)})}function Aa(t,e){var a;const i=(a=t.card)==null?void 0:a.player,o=i?`${i.firstname} ${i.surname_real}`:"cette carte",n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",n.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${o} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${t.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(n);const r=d=>{n.remove(),d&&e()};n.querySelector("#buy-cancel").addEventListener("click",()=>r(!1)),n.querySelector("#buy-ok").addEventListener("click",()=>r(!0)),n.addEventListener("click",d=>{d.target===n&&r(!1)})}async function Ma(t,e,i){const{toast:o}=i,{data:n}=await x.from("market_listings").select("card_id").eq("id",t).single();if(await x.from("market_listings").update({status:"cancelled"}).eq("id",t),n!=null&&n.card_id){const{count:r}=await x.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",n.card_id).eq("status","active");r||await x.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",n.card_id)}o("Annonce retirée","success"),mo(e,i)}async function Ca(t,e){var b,m,f,h,g;const{state:i,navigate:o}=e,n=((m=(b=e==null?void 0:e.state)==null?void 0:b.params)==null?void 0:m.tab)||"ranked";t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:r},{data:a},{data:d}]=await Promise.all([x.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").order("mmr",{ascending:!1}).limit(100),x.rpc("get_mini_league_leaderboard"),x.rpc("get_random_leaderboard")]);let l=n;const s=$=>$<3?["#D4A017","#a0a0a0","#cd7f32"][$]:"var(--green)",p=$=>$<3?"#000":"#fff";function c(){var I,u,E;const $=document.getElementById("rankings-legend");$&&($.innerHTML=l==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const v=document.getElementById("rankings-list");if(v){if(l==="ranked"){const _=r||[];v.innerHTML=_.length>0?_.map((z,G)=>{const W=bt(z.mmr??450),K=hi(z.mmr??450,W),J=W.label+(K?" "+K:""),k=(z.ranked_wins||0)+(z.ranked_losses||0)+(z.ranked_draws||0),H=k>0?Math.round((z.ranked_wins||0)/k*100):0,oe=z.id===i.profile.id,D=(z.placement_matches||0)<10;return`
          <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${oe?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${G<3?["#D4A017","#a0a0a0","#cd7f32"][G]:"rgba(255,255,255,0.08)"};color:${G<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${G<3?"16":"13"}px">${G<3?["🥇","🥈","🥉"][G]:G+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${W.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${z.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${z.club_name}${D?"":` · ${H}% WR`}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:13px;font-weight:900;letter-spacing:0.3px;color:${W.color};white-space:nowrap">${D?"❓ Placement":J.toUpperCase()}</div>
              ${D?"":`<div style="font-size:11px;color:var(--tile-fg-dim);margin-top:1px">${(z.mmr??450).toLocaleString("fr")} MMR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(l==="mini-league"){const _=a||[];v.innerHTML=_.length>0?_.map((z,G)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${z.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(G)};color:${p(G)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${G<3?"16":"13"}px">${G<3?["🥇","🥈","🥉"][G]:G+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${z.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${z.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${z.top1} 🥈${z.top2} 🥉${z.top3}</div>
            <div style="color:var(--tile-fg-dim)">${z.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const _=d||[];v.innerHTML=_.length>0?_.map((z,G)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${z.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(G)};color:${p(G)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${G<3?"16":"13"}px">${G<3?["🥇","🥈","🥉"][G]:G+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${z.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${z.club_name}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:16px;font-weight:900;color:#D4A017" title="Score de classement — tient compte du nombre de matchs joués">📊 ${z.wilson_score}</div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">${z.wins}/${z.total} V</div>
            <div style="font-size:9px;color:var(--green);font-weight:700;margin-top:2px">${z.win_pct}%</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}(I=document.getElementById("tab-ranked"))!=null&&I.style&&(document.getElementById("tab-ranked").style.cssText=y(l==="ranked")),(u=document.getElementById("tab-mini-league"))!=null&&u.style&&(document.getElementById("tab-mini-league").style.cssText=y(l==="mini-league")),(E=document.getElementById("tab-random"))!=null&&E.style&&(document.getElementById("tab-random").style.cssText=y(l==="random"))}}const y=$=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${$?"900":"400"};background:${$?"var(--green)":"rgba(255,255,255,0.06)"};color:${$?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-ranked" style="${y(l==="ranked")}">⚔️ Ranked</button>
        <button id="tab-mini-league" style="${y(l==="mini-league")}">🏆 Mini Leagues</button>
        <button id="tab-random" style="${y(l==="random")}">🎲 Random</button>
      </div>
      <div id="rankings-legend"></div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,c(),(f=document.getElementById("tab-ranked"))==null||f.addEventListener("click",()=>{l="ranked",c()}),(h=document.getElementById("tab-mini-league"))==null||h.addEventListener("click",()=>{l="mini-league",c()}),(g=document.getElementById("tab-random"))==null||g.addEventListener("click",()=>{l="random",c()})}async function ja(t,e){var G,W,K,J;const{state:i,navigate:o,toast:n}=e,r=i.profile;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:d}]=await Promise.all([x.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),x.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",r.id).single()]);if(!d){n("Erreur chargement profil","error"),o("home");return}if(!a){const k=d.mmr??450,H=bt(k);Pi(k);const oe=Math.round(450+(k-450)*.5),D=bt(oe),{data:se}=await x.from("users").select("id, pseudo, club_name, mmr, rank_tier").order("mmr",{ascending:!1}).limit(100),fe=(se||[]).findIndex(M=>M.id===d.id)+1;t.innerHTML=`
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
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;text-align:center;border:2px solid ${H.color}40">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Ton classement</div>
        <div style="font-size:44px;margin-bottom:2px">${H.emoji}</div>
        <div style="font-size:18px;font-weight:900;color:${H.color};letter-spacing:2px;text-transform:uppercase">${H.label}</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px">MMR ${k} ${fe?`· #${fe} au classement général`:""}</div>
      </div>

      <!-- Top 100 -->
      <div>
        <div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:8px">🏆 Classement général — Top 100</div>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto">
          ${(se||[]).map((M,L)=>{const X=bt(M.mmr??450),U=M.id===d.id;return`<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:10px;
              background:${U?"rgba(212,160,23,0.15)":"rgba(0,0,0,0.25)"};
              border:1px solid ${U?"#D4A017":"transparent"}">
              <div style="width:26px;text-align:center;font-size:12px;font-weight:900;color:rgba(255,255,255,0.5)">#${L+1}</div>
              <div style="font-size:18px">${X.emoji}</div>
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${M.pseudo}</div>
                <div style="font-size:10px;color:rgba(255,255,255,0.4)">${M.club_name||"—"}</div>
              </div>
              <div style="font-size:13px;font-weight:900;color:${X.color}">${M.mmr??450}</div>
            </div>`}).join("")||'<div style="text-align:center;color:rgba(255,255,255,0.4);font-size:12px;padding:16px">Aucun classement disponible.</div>'}
        </div>
      </div>

      <!-- Aperçu saison suivante -->
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;border:1.5px dashed rgba(255,255,255,0.2)">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;text-align:center">📅 Aperçu — prochaine saison</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:24px">
          <div style="text-align:center;opacity:.6">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Actuel</div>
            <div style="font-size:24px">${H.emoji}</div>
            <div style="font-size:12px;font-weight:700;color:${H.color}">${k}</div>
          </div>
          <div style="font-size:20px;color:rgba(255,255,255,0.3)">→</div>
          <div style="text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Recalculé</div>
            <div style="font-size:28px">${D.emoji}</div>
            <div style="font-size:14px;font-weight:900;color:${D.color}">${oe}</div>
          </div>
        </div>
        <div style="font-size:11px;color:rgba(255,255,255,0.35);text-align:center;margin-top:10px">Ton MMR est recalculé vers la moyenne à chaque nouvelle saison, pour repartir sur des bases équilibrées.</div>
      </div>
    </div>`,(G=document.getElementById("ranked-back"))==null||G.addEventListener("click",()=>o("home"));return}const l=d.mmr??450,s=d.mmr_deviation??350,p=d.mmr_volatility??.06,c=d.placement_matches??0,y=c<10,b=Math.max(0,10-c),m=bt(l),f=Pi(l),h=hi(l,m),g=m.label+(h?" "+h:""),$=_o.findIndex(k=>k.id===m.id),v=_o[$+1]||null,I=m.id==="master"?"master":`${m.id}_${h}`,u={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},E=(d.ranked_wins||0)+(d.ranked_losses||0)+(d.ranked_draws||0),_=E>0?Math.round((d.ranked_wins||0)/E*100):0,z=An.map(k=>{const H=k.key===I,oe=k.division==="III"||k.division===null;return`
    <div ${H?'data-current-tier="true"':""} style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:4px;opacity:${H?1:.45};
      transform:${H?"scale(1.15)":"scale(1)"};transition:all 0.3s;min-width:${oe?"60px":"46px"}">
      <div style="font-size:${H?"34px":oe?"26px":"17px"}">${oe?k.emoji:"●"}</div>
      <div style="font-size:${H?"13px":"11px"};color:${k.color};font-weight:${H?"900":"600"};letter-spacing:0.4px;white-space:nowrap">${k.division?k.division:k.label.toUpperCase()}</div>
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
      <div class="rk-tier-label" style="font-size:22px;font-weight:900;color:${m.color};letter-spacing:3px;text-transform:uppercase">${g}</div>
    </div>

    <!-- Progression bar -->
    ${m.id!=="master"?`
    <div class="rk-progress" style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${m.emoji} ${m.label}</span>
        ${v?`<span>${v.emoji} ${v.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${f}%;background:linear-gradient(90deg,${m.color},${m.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${f}% vers ${v?v.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama : 16 échelons, répartis sur toute la largeur (scrollable si ça déborde) -->
    <div id="tiers-scroll" class="rk-tiers-scroll" style="display:flex;justify-content:space-between;align-items:flex-end;gap:10px;padding:10px 16px;overflow-x:auto;scrollbar-width:none">
      ${z}
    </div>

    <!-- Placement / Stats -->
    ${y?`
    <div class="rk-stats-block" style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${c}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${b} match${b>1?"s":""} — gains et pertes ×2</div>
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
        <div style="font-size:20px;font-weight:900;color:#D4A017">${_}%</div>
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
  </div>`,(W=document.getElementById("ranked-back"))==null||W.addEventListener("click",()=>o("home")),(K=document.getElementById("ranked-leaderboard-btn"))==null||K.addEventListener("click",()=>o("rankings",{tab:"ranked"})),requestAnimationFrame(()=>{const k=document.getElementById("tiers-scroll"),H=k==null?void 0:k.querySelector("[data-current-tier]");k&&H&&(k.scrollLeft=H.offsetLeft-k.clientWidth/2+H.clientWidth/2)}),(J=document.getElementById("ranked-play-btn"))==null||J.addEventListener("click",()=>{ct(),o("match",{matchMode:"ranked",rankedData:{mmr:l,rd:s,sigma:p,isPlacement:y}})})}async function qa(t,{state:e,navigate:i,toast:o}){const n=e.profile;if(!n)return;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await x.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${n.id},away_id.eq.${n.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(r||[]).filter(p=>p.status==="finished"),l=(r||[]).filter(p=>p.status==="in_progress");function s(p){const c=p.home_id===n.id;c?p.home_score:p.away_score,c?p.away_score:p.home_score;const y=p.winner_id===n.id,b=p.home_score===p.away_score&&p.status==="finished",m=p.status!=="finished"?"…":b?"N":y?"V":"D",f=p.status!=="finished"||b?"#888":y?"#1A6B3C":"#c0392b";let h=a[p.mode]||p.mode;p.away_id===null&&!h.startsWith("IA")&&(h="IA");const $=p.home_id===n.id?p.away:p.home;let v;p.away_id===null?v=h:$?v=`${$.club_name||$.pseudo} (${$.pseudo})`:v="Adversaire";let I="";p.status==="in_progress"&&Date.now()-new Date(p.created_at).getTime()>3600*1e3&&(I=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const u=new Date(p.created_at),E=u.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+u.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),_=p.status==="finished"?`${p.home_score} - ${p.away_score}`:`${p.home_score||0} - ${p.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${v}${I}</div>
        <div style="font-size:11px;color:var(--gray-600)">${h} · ${E}${p.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${_}</span>
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
  </div>`}Mn(jn);const _e={user:null,profile:null,page:"home",params:{}};function mt(t,e="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=t,o.className=`show ${e}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function Ba(t,e,i=""){document.getElementById("modal-title").textContent=t,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Wi(){document.getElementById("modal-overlay").classList.add("hidden")}async function ni(){if(!_e.user)return;const{data:t}=await x.from("users").select("*").eq("id",_e.user.id).single();t&&(_e.profile=t)}const En="mw_theme";function ai(){return localStorage.getItem(En)||"dark"}function Go(t){var e;localStorage.setItem(En,t),yi(t),(e=_e.profile)!=null&&e.id&&x.from("users").update({theme:t}).eq("id",_e.profile.id).then(()=>{})}function yi(t){var e,i;document.documentElement.setAttribute("data-theme",t),t==="club"&&(document.documentElement.style.setProperty("--club-color1",((e=_e.profile)==null?void 0:e.club_color1)||"#0a0f0a"),document.documentElement.style.setProperty("--club-color2",((i=_e.profile)==null?void 0:i.club_color2)||"#080d08"))}function wt(t,e={}){_e.page=t,_e.params=e,zn()}async function zn(){var o,n,r,a;const t=document.getElementById("page-content");if(!t)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===_e.page)});const e=document.getElementById("nav-credits");e&&_e.profile&&(e.textContent=`💰 ${(_e.profile.credits||0).toLocaleString("fr")}`);const i={state:_e,navigate:wt,toast:mt,openModal:Ba,closeModal:Wi,refreshProfile:ni};switch(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',_e.page){case"home":await qi(t,i);break;case"home2":await qi(t,i);break;case"game":await yr(t,i);break;case"settings":await fn(t,i);break;case"collection":await Er(t,i);break;case"decks":await Oi(t,i);break;case"boosters":await Hn(t,i);break;case"ranked":await ja(t,i);break;case"match":{const d=_e.params&&_e.params.matchMode||"vs_ai_easy";d==="random"?await Vi(t,i,!1):d==="ranked"?await Vi(t,i,!0):d==="friend"?await pa(t,i,(o=_e.params)==null?void 0:o.friendId,(n=_e.params)==null?void 0:n.friendName):d==="mini_league"||d==="mini-league"?await Ro(t,i,(r=_e.params)==null?void 0:r.mlMatchId,(a=_e.params)==null?void 0:a.leagueId):await Br(t,i);break}case"market":await Ia(t,i);break;case"rankings":await Ca(t,i);break;case"matches":await qa(t,i);break;case"friends":await mr(t,i);break;case"mini-league":await ga(t,i);break;case"match-mini-league":{const d=_e.params||{};await Ro(t,i,d.mlMatchId,d.leagueId);break}default:await qi(t,i)}}function Da(){var o,n;const t=document.getElementById("app"),e=_e.profile;if(!e)return;const i="/icons/";t.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.08.04-2337" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(r=>{r.addEventListener("click",a=>{a.preventDefault(),wt(r.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>wt("home")),document.getElementById("nav-credits").addEventListener("click",()=>wt("boosters")),(o=document.getElementById("journal-btn"))==null||o.addEventListener("click",()=>Fa()),(n=document.getElementById("settings-btn"))==null||n.addEventListener("click",()=>wt("settings"))}async function Fa(){const{data:t}=await x.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const n=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}function Pa(t,{onPlay:e}){var o;const i="/icons/";t.style.cssText="",t.innerHTML=`
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
  </div>`,(o=t.querySelector("#pl-play-btn"))==null||o.addEventListener("click",e)}async function Ra(){yi(ai()),document.getElementById("modal-overlay").addEventListener("click",o=>{o.target===o.currentTarget&&Wi()}),document.getElementById("modal-close").addEventListener("click",Wi);const{data:{session:t}}=await x.auth.getSession();if(!t){Oo(),Pa(document.getElementById("app"),{onPlay:()=>ko(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:mt})});return}_e.user=t.user,await ni(),yi(ai()),Oo();try{const{data:o}=await x.from("formation_links_overrides").select("formation, links"),n={};(o||[]).forEach(r=>{n[r.formation]=r.links}),Cn(n)}catch(o){console.warn("Impossible de charger les overrides de formation:",o)}if(!_e.profile){Bn(document.getElementById("app"),{state:_e,navigate:async()=>{await ni(),yi(ai()),Fi()},toast:mt,refreshProfile:ni});return}x.rpc("heartbeat").then(()=>{}).catch(()=>{}),setInterval(()=>{x.rpc("heartbeat").then(()=>{}).catch(()=>{})},45e3);const e=Array.isArray(_e.profile.pending_boosters)?_e.profile.pending_boosters:[];if(!_e.profile.onboarding_done&&e.length>0){Qn(document.getElementById("app"),{state:_e,toast:mt,refreshProfile:ni,navigate:()=>{Fi(),setTimeout(()=>Lo(_e.profile,wt,mt),800)}});return}Fi(),new URLSearchParams(location.search).get("tutorial")==="1"?(history.replaceState({},"",location.pathname),setTimeout(()=>un(_e.profile,wt,mt),800)):setTimeout(()=>Lo(_e.profile,wt,mt),800),x.auth.onAuthStateChange(async(o,n)=>{o==="SIGNED_OUT"&&(_e.user=null,_e.profile=null,document.getElementById("app").innerHTML="",ko(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:mt}))})}function Na(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Ai(){const t=document.getElementById("app");t&&(t.style.height=Na()+"px")}window.addEventListener("resize",Ai);window.addEventListener("orientationchange",()=>setTimeout(Ai,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Ai);function Fi(){const t=()=>{var i;(i=_e.user)!=null&&i.id&&x.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",_e.user.id).then(()=>{})};t(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(t,6e4);const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Ai(),Da(),zn()}function Oo(){const t=document.getElementById("app-loader"),e=document.getElementById("app");e&&(e.style.display=""),t&&(t.classList.add("zoom-out"),setTimeout(()=>t.style.display="none",500))}function Ln(t){var o;const e=document.getElementById("app-loader");if(e&&(e.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${t||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(o=document.getElementById("boot-retry"))==null||o.addEventListener("click",()=>window.location.reload())}Ra().catch(t=>{console.error("Échec du démarrage:",t),Ln()});setTimeout(()=>{const t=document.getElementById("app-loader");t&&t.style.display!=="none"&&!t.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Ln("Le serveur met trop de temps à répondre.")},12e3);
