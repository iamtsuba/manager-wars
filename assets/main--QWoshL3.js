const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/match-shared-DIOm1k0j.js","assets/match-shared-D_M6t_P4.css"])))=>i.map(i=>d[i]);
import{w as Ji,s as h,x as Uo,F as kt,g as Ct,o as it,m as ai,n as Ot,r as qe,k as bt,y as hi,z as Fi,G as Oe,t as Xi,C as Ko,I as Si,q as Qi,J as jt,L as Ii,O as Ri,p as vi,P as wi,Q as ji,T as Ti,U as Ht,V as si,W as St,X as Vo,Y as li,Z as Qe,_ as di,$ as _t,a0 as ot,a1 as Tn,a2 as Yo,a3 as Zi,a4 as An,a5 as Wo,a6 as It,a7 as _o,a8 as Mn,v as Cn,a9 as jn,d as qn}from"./match-shared-DIOm1k0j.js";const Bn="/";async function ko(t,{navigate:e,toast:i}){let o="login";const r=await Ji("signup_access_code_required"),n=()=>{var d,l,s,c,m,x,y,g;const a=o==="login";if(t.innerHTML=`
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
        <img src="${Bn}icons/logo-withname.png" alt="Manager Wars" style="height:44px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
            ${r?`
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
            <button id="login-btn" ${r?"disabled":""} style="
              width:100%;padding:10px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#1A6B3C,#22c55e);
              color:#fff;font-size:15px;font-weight:900;cursor:${r?"not-allowed":"pointer"};
              box-shadow:0 4px 16px rgba(34,197,94,0.3);
              opacity:${r?"0.45":"1"};transition:transform .1s,box-shadow .1s,opacity .2s;
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
            ${r?`
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
            <button id="reg-btn" ${r?"disabled":""} style="
              width:100%;padding:10px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#1A6B3C,#22c55e);
              color:#fff;font-size:15px;font-weight:900;cursor:${r?"not-allowed":"pointer"};
              box-shadow:0 4px 16px rgba(34,197,94,0.3);
              opacity:${r?"0.45":"1"};transition:opacity .2s;
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
    </style>`,(d=document.getElementById("tab-login-btn"))==null||d.addEventListener("click",()=>{o="login",n()}),(l=document.getElementById("tab-reg-btn"))==null||l.addEventListener("click",()=>{o="register",n()}),a){(s=document.getElementById("login-password"))==null||s.addEventListener("keydown",u=>{var w;u.key==="Enter"&&((w=document.getElementById("login-btn"))==null||w.click())});let f=null,b=!1;r&&((c=document.getElementById("login-access-code"))==null||c.addEventListener("input",u=>{const w=u.target.value,v=document.getElementById("login-access-code-status"),E=document.getElementById("login-btn");if(clearTimeout(f),b=!1,E&&(E.disabled=!0,E.style.opacity="0.45",E.style.cursor="not-allowed"),!w){v&&(v.textContent="");return}v&&(v.textContent="⏳ Vérification…",v.style.color="rgba(255,255,255,0.4)"),f=setTimeout(async()=>{const{data:p,error:T}=await h.rpc("check_signup_password",{input_password:w});if(T){v&&(v.textContent="Erreur de vérification.",v.style.color="#f87171");return}b=!!p,v&&(v.textContent=b?"✅ Code valide":"❌ Code incorrect",v.style.color=b?"#4ade80":"#f87171"),E&&(E.disabled=!b,E.style.opacity=b?"1":"0.45",E.style.cursor=b?"pointer":"not-allowed")},400)})),(m=document.getElementById("login-btn"))==null||m.addEventListener("click",async()=>{var I;const u=document.getElementById("login-email").value.trim(),w=document.getElementById("login-password").value,v=((I=document.getElementById("login-access-code"))==null?void 0:I.value)||"",E=document.getElementById("login-error");if(E.textContent="",!u||!w){E.textContent="Remplissez tous les champs.";return}if(r){const{data:M}=await h.rpc("check_signup_password",{input_password:v});if(!M){E.textContent="Code d'accès incorrect.";return}}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:T}=await h.auth.signInWithPassword({email:u,password:w});if(p.textContent="⚽ Se connecter",p.disabled=!1,T){E.textContent=T.message.includes("Invalid")?"Email ou mot de passe incorrect.":T.message;return}window.location.reload()})}else{(x=document.getElementById("reg-confirm"))==null||x.addEventListener("keydown",u=>{var w;u.key==="Enter"&&((w=document.getElementById("reg-btn"))==null||w.click())});let f=null,b=!1;r&&((y=document.getElementById("reg-access-code"))==null||y.addEventListener("input",u=>{const w=u.target.value,v=document.getElementById("access-code-status"),E=document.getElementById("reg-btn");if(clearTimeout(f),b=!1,E&&(E.disabled=!0,E.style.opacity="0.45",E.style.cursor="not-allowed"),!w){v&&(v.textContent="");return}v&&(v.textContent="⏳ Vérification…",v.style.color="rgba(255,255,255,0.4)"),f=setTimeout(async()=>{const{data:p,error:T}=await h.rpc("check_signup_password",{input_password:w});if(T){v&&(v.textContent="Erreur de vérification.",v.style.color="#f87171");return}b=!!p,v&&(v.textContent=b?"✅ Code valide":"❌ Code incorrect",v.style.color=b?"#4ade80":"#f87171"),E&&(E.disabled=!b,E.style.opacity=b?"1":"0.45",E.style.cursor=b?"pointer":"not-allowed")},400)})),(g=document.getElementById("reg-btn"))==null||g.addEventListener("click",async()=>{var H;const u=document.getElementById("reg-email").value.trim(),w=document.getElementById("reg-password").value,v=document.getElementById("reg-confirm").value,E=((H=document.getElementById("reg-access-code"))==null?void 0:H.value)||"",p=document.getElementById("reg-error");if(p.textContent="",!u||!w||!v){p.textContent="Remplissez tous les champs.";return}if(!u.includes("@")||!u.includes(".")){p.textContent="Adresse email invalide.";return}if(w.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(w!==v){p.textContent="Les mots de passe ne correspondent pas.";return}if(r){const{data:ne}=await h.rpc("check_signup_password",{input_password:E});if(!ne){p.textContent="Code d'accès incorrect.";return}}const T=document.getElementById("reg-btn");T.textContent="⏳ Création…",T.disabled=!0;const{data:I,error:M}=await h.auth.signUp({email:u,password:w});if(T.textContent="🚀 Créer mon compte",T.disabled=!1,M){M.message.includes("already registered")||M.message.includes("already exists")||M.message.includes("User already")?p.textContent="Un compte existe déjà avec cette adresse email.":p.textContent=M.message;return}if(I!=null&&I.user&&Array.isArray(I.user.identities)&&I.user.identities.length===0){p.textContent="Un compte existe déjà avec cette adresse email.";return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),o="login",n(),setTimeout(()=>{const ne=document.getElementById("login-email");ne&&(ne.value=u)},50)})}};n()}function Dn(t,{state:e,navigate:i,toast:o,refreshProfile:r}){let n="#1A6B3C",a="#D4A017";t.innerHTML=`
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
  `;function d(){var g;const s=document.getElementById("logo-preview"),c=document.getElementById("logo-initials"),m=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",x=m.trim().split(" ").filter(Boolean),y=x.length>=2?(x[0][0]+x[1][0]).toUpperCase():m.slice(0,2).toUpperCase();s&&(s.style.background=a,s.style.borderColor=n),c&&(c.textContent=y,c.style.color=n)}document.getElementById("color1").addEventListener("input",s=>{n=s.target.value,document.getElementById("swatch1").style.background=n,d()}),document.getElementById("color2").addEventListener("input",s=>{a=s.target.value,document.getElementById("swatch2").style.background=a,d()});function l(s){document.querySelectorAll(".setup-step").forEach(c=>c.classList.remove("active")),document.getElementById(`step-${s}`).classList.add("active"),document.getElementById("step-num").textContent=s,document.getElementById("progress-fill").style.width=`${Math.round(s/3*100)}%`,s===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("step1-error");if(c.textContent="",s.length<3){c.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:m}=await h.from("users").select("id").eq("pseudo",s).maybeSingle();if(m){c.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const s=document.getElementById("setup-club").value.trim(),c=document.getElementById("step2-error");if(c.textContent="",s.length<2){c.textContent="Nom trop court (min. 2 caractères).";return}const{data:m}=await h.from("users").select("id").eq("club_name",s).maybeSingle();if(m){c.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("setup-club").value.trim(),m=document.getElementById("step3-error"),x=document.getElementById("step3-finish");m.textContent="",x.disabled=!0,x.textContent="Création en cours…";try{const{error:y}=await h.from("users").insert({id:e.user.id,pseudo:s,club_name:c,club_color1:n,club_color2:a,credits:15e3});if(y)throw y;await Pn(e.user.id),await r(),o(`Bienvenue ${s} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(y){m.textContent=y.message,x.disabled=!1,x.textContent="🚀 Créer mon profil !"}})}async function Pn(t){const e=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1},{type:"stadium",count:1}];try{await h.from("users").update({pending_boosters:e,onboarding_done:!1,first_booster_opened:!1}).eq("id",t)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Fn="modulepreload",Rn=function(t){return"/"+t},$o={},Jo=function(e,i,o){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),d=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(i.map(l=>{if(l=Rn(l),l in $o)return;$o[l]=!0;const s=l.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const m=document.createElement("link");if(m.rel=s?"stylesheet":Fn,s||(m.as="script"),m.crossOrigin="",m.href=l,d&&m.setAttribute("nonce",d),document.head.appendChild(m),s)return new Promise((x,y)=>{m.addEventListener("load",x),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(a){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=a,window.dispatchEvent(d),!d.defaultPrevented)throw a}return r.then(a=>{for(const d of a||[])d.status==="rejected"&&n(d.reason);return e().catch(n)})},Xo="mw_sound_volume";function eo(){const t=localStorage.getItem(Xo);if(t===null)return 100;const e=parseInt(t,10);return Number.isFinite(e)?Math.max(0,Math.min(100,e)):100}function Nn(t){localStorage.setItem(Xo,String(Math.max(0,Math.min(100,Math.round(t)))))}function to(){return eo()===0}function _i(t){return Math.max(0,Math.min(1,t*(eo()/100)))}function io(t,e=1){if(to())return null;try{const i=new Audio(t);return i.volume=_i(e),i.play().catch(()=>{}),i}catch{return null}}let xt=null,Ni=null,Eo=.3;function Qo(t,e=.3){if(Eo=e,xt&&Ni===t&&!xt.paused){xt.volume=_i(Eo);return}if(Nt(),!to())try{const i=new Audio(t);i.loop=!0,i.volume=_i(e),i.play().catch(()=>{}),xt=i,Ni=t}catch{}}function Nt(){if(xt)try{xt.pause(),xt.currentTime=0}catch{}xt=null,Ni=null}let ei=null;function Zo(t,e=.6){if(Ke(),!to())try{const i=new Audio(t);i.volume=_i(e),i.play().catch(()=>{}),ei=i}catch{}}function Ke(){if(ei)try{ei.pause(),ei.currentTime=0}catch{}ei=null}async function en(t=null){const e=new Date().toISOString().slice(0,10),{data:i}=await h.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const o=i.filter(a=>!(a.available_from&&e<a.available_from||a.available_until&&e>a.available_until));if(!o.length)return[];let r=o;if(t){const a=o.filter(d=>d.max_per_user!=null);if(a.length){const{data:d}=await h.from("booster_claims").select("booster_id").eq("user_id",t).in("booster_id",a.map(s=>s.id)),l={};(d||[]).forEach(s=>{l[s.booster_id]=(l[s.booster_id]||0)+1}),r=o.filter(s=>s.max_per_user==null?!0:(l[s.id]||0)<s.max_per_user)}}if(!r.length)return[];const{data:n}=await h.from("booster_drop_rates").select("*").in("booster_id",r.map(a=>a.id)).order("sort_order");return r.map(a=>({...a,rates:(n||[]).filter(d=>d.booster_id===a.id)}))}async function Gn(t,e){const{data:i}=await h.from("booster_configs").select("max_per_user").eq("id",e).single();i!=null&&i.max_per_user&&await h.from("booster_claims").insert({user_id:t,booster_id:e})}function On(t){if(!(t!=null&&t.length))return null;const e=t.reduce((o,r)=>o+Number(r.percentage),0);let i=Math.random()*e;for(const o of t)if(i-=Number(o.percentage),i<=0)return o;return t[t.length-1]}const tn=()=>Object.keys(kt),Hn=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Gi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Un(t){const e=t.player;if(!e)return"";const i=t.evolution_bonus||0;return qe({...e,_evolution_bonus:i},{width:140})}function oo(t){var r;const e={};(t.rates||[]).forEach(n=>{e[n.card_type]=(e[n.card_type]||0)+Number(n.percentage||0)});const i=((r=Object.entries(e).sort((n,a)=>a[1]-n[1])[0])==null?void 0:r[0])||"player",o=t.image_url||"booster-players.png";return{id:t.id,img:"/icons/"+o,name:t.name,sub:`${t.card_count} carte(s)`,cost:t.price_type==="credits"&&t.price_credits||0,costLabel:t.price_type==="credits"?`${(t.price_credits||0).toLocaleString("fr")} crédits`:t.price_type==="pub"?"1 pub":"Gratuit",cardCount:t.card_count||5,type:i,isPub:t.price_type==="pub",rates:t.rates||[],allow_duplicates:t.allow_duplicates!==!1,_boosterId:t.id,_raw:t}}async function Kn(t,e,i,o){if(t.reward_type==="credits"){const r=(e.credits||0)+(t.credits_amount||0),{error:n}=await h.from("users").update({credits:r}).eq("id",e.id);if(n)throw n;return e.credits=r,{type:"credits",amount:t.credits_amount}}if(t.reward_type==="card"){const{data:r}=await h.from("players").select("firstname, surname_real, rarity").eq("id",t.player_id).single(),{error:n}=await h.from("cards").insert({owner_id:e.id,player_id:t.player_id,card_type:"player"});if(n)throw n;return{type:"card",player:r}}if(t.reward_type==="booster"){const{data:r}=await h.from("booster_configs").select("*").eq("id",t.booster_config_id).single(),{data:n}=await h.from("booster_drop_rates").select("*").eq("booster_id",t.booster_config_id);if(!r)throw new Error("Booster introuvable (peut-être supprimé depuis).");const a=oo({...r,rates:n});let d=[];return a.type==="formation"?d=await ao(e,0):a.type==="game_changer"?d=await ro(e,a.cardCount,0):a.type==="player"?d=await no(e,a.cardCount,0):d=await ki(e,{...a,cost:0}),{type:"booster",name:r.name,cards:d,boosterUI:a}}throw new Error("Type de récompense inconnu.")}async function Vn(t,{state:e,navigate:i,toast:o}){var m,x,y;Kt(i,e.profile,"boosters","/icons/",o);const r=((m=e.profile)==null?void 0:m.credits)||0;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let n=[];try{n=(await en((x=e.user)==null?void 0:x.id)).map(oo)}catch(g){console.warn("Erreur chargement boosters DB, fallback hardcodé",g)}n.length||(n=Hn.map(g=>({...g,rates:[],isPub:g.id==="players_pub"})));const a=await h.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.profile.id).then(g=>g.data||[]),d=new Set(a.filter(g=>g.card_type==="stadium").map(g=>g.stadium_id)),l=new Set(a.filter(g=>g.card_type==="formation").map(g=>g.formation)),s=new Set(a.filter(g=>g.card_type==="game_changer").map(g=>g.gc_type)),c={};for(const g of n){if(g.allow_duplicates!==!1||!((y=g.rates)!=null&&y.length))continue;const f=[...new Set((g.rates||[]).map(u=>u.card_type))];let b=!1;for(const u of f)if(u==="stadium"){const{data:w}=await h.from("stadium_definitions").select("id");if((w||[]).some(v=>!d.has(v.id))){b=!0;break}}else if(u==="game_changer"){const{data:w}=await h.from("gc_definitions").select("name").eq("is_active",!0);if((w||[]).some(v=>!s.has(v.name))){b=!0;break}}else if(u==="formation"){const{FORMATION_LINKS:w}=await Jo(async()=>{const{FORMATION_LINKS:v}=await import("./match-shared-DIOm1k0j.js").then(E=>E.aa);return{FORMATION_LINKS:v}},__vite__mapDeps([0,1]));if(Object.keys(w).some(v=>!l.has(v))){b=!0;break}}else{b=!0;break}b||(c[g.id]=!0)}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${r.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${n.map(g=>{const f=g.cost===0||r>=g.cost,b=c[g.id]===!0;return`<div class="booster-card ${!f||b?"disabled":""}" data-booster="${g.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${g.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${g.img}" alt="${g.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${g.name}</div>
            <div class="desc">${g.sub}</div>
            <div class="cost">${g.costLabel}</div>
            ${f?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
            ${b?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--tile-fg-dim);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,t.querySelectorAll(".booster-card:not(.disabled)").forEach(g=>{g.addEventListener("click",async()=>{const f=n.find(b=>b.id===g.dataset.booster);if(f){g.style.opacity="0.5",g.style.pointerEvents="none";try{await on(f,{state:e,toast:o,navigate:i,container:t})}catch(b){o(b.message,"error"),g.style.opacity="",g.style.pointerEvents=""}}})}),t.querySelectorAll(".booster-info-btn").forEach(g=>{g.addEventListener("click",f=>{f.stopPropagation();const b=n.find(u=>u.id===g.dataset.boosterId);Qn(b)})})}async function on(t,{state:e,toast:i,navigate:o,container:r}){var m,x,y;if(t.cost>0&&e.profile.credits<t.cost){i("Crédits insuffisants","error");return}if(t._boosterId){const g=((m=t._raw)==null?void 0:m.max_per_user)??null;if(g!=null){const{count:f}=await h.from("booster_claims").select("id",{count:"exact",head:!0}).eq("user_id",e.user.id).eq("booster_id",t._boosterId);if((f||0)>=g){i(`Quota atteint pour ce booster (${g} max.)`,"error");return}}}if(t.isPub){if(!await Ji("pub_mode")){Uo();return}await er()}const{data:n}=await h.from("cards").select("card_type, player_id, formation").eq("owner_id",e.profile.id),a=new Set((n||[]).filter(g=>g.card_type==="player").map(g=>g.player_id)),d=new Set((n||[]).filter(g=>g.card_type==="formation").map(g=>g.formation));let l=[],s=null;try{if((x=t.rates)!=null&&x.length)l=await ki(e.profile,t);else{const g=t.type||"player";g==="player"?l=await no(e.profile,t.cardCount,t.cost):g==="game_changer"?l=await ro(e.profile,t.cardCount,t.cost):g==="formation"?l=await ao(e.profile,t.cost):l=await ki(e.profile,t)}}catch(g){s=g.message||String(g),console.error("[Booster] Erreur:",g)}if(l!=null&&l.length&&t._boosterId&&await Gn(e.user.id,t._boosterId),!(l!=null&&l.length)){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",g.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${s||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(g),(y=g.querySelector("#anim-close-err"))==null||y.addEventListener("click",()=>g.remove());return}l.forEach(g=>{g.card_type==="player"&&g.player?g.isDuplicate=a.has(g.player.id):g.card_type==="formation"&&(g.isDuplicate=d.has(g.formation))});const{data:c}=await h.from("users").select("*").eq("id",e.profile.id).single();c&&(e.profile=c),nn(e.profile.id,t,l),so(l,t,o,null,{state:e,toast:i,container:r})}function Yn(){const t=Math.random()*100;return t<.5?"legende":t<2?"special":t<10?"normal_high":"normal_low"}function gt(t){return Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Wn(t,e){let i;switch(e){case"legende":i=t.filter(o=>o.rarity==="legende"),i.length||(i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=t.filter(o=>gt(o)>=6));break;case"special":i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=t.filter(o=>gt(o)>=6));break;case"normal_high":i=t.filter(o=>o.rarity==="normal"&&gt(o)>=6),i.length||(i=t.filter(o=>gt(o)>=6));break;default:i=t.filter(o=>o.rarity==="normal"&&gt(o)>=1&&gt(o)<=5),i.length||(i=t.filter(o=>o.rarity==="normal"));break}return i.length||(i=t),i[Math.floor(Math.random()*i.length)]}async function ki(t,e){if(e.cost>0){const{error:x}=await h.from("users").update({credits:t.credits-e.cost}).eq("id",t.id);if(x)throw x;t.credits-=e.cost,Vt(t.credits)}const i=e.allow_duplicates!==!1;let o=[];const{data:r,error:n}=await h.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.id);if(n){const{data:x}=await h.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",t.id);o=x||[]}else o=r||[];const a=new Set(o.filter(x=>x.card_type==="player").map(x=>x.player_id)),d=new Set(o.filter(x=>x.card_type==="formation").map(x=>x.formation)),l=new Set(o.filter(x=>x.card_type==="game_changer").map(x=>x.gc_type)),s=new Set(o.filter(x=>x.card_type==="stadium").map(x=>x.stadium_id).filter(Boolean)),c=new Set,m=[];for(let x=0;x<(e.cardCount||5);x++){const y=On(e.rates);if(y){if(y.card_type==="player"){const g=I=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[I]||I,f=y.rarity?g(y.rarity):null;let b=h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);f&&(b=b.eq("rarity",f));const{data:u}=await b;let w=u||[];if((y.note_min||y.note_max)&&(w=w.filter(I=>{const M=Math.max(Number(I.note_g)||0,Number(I.note_d)||0,Number(I.note_m)||0,Number(I.note_a)||0);return(!y.note_min||M>=y.note_min)&&(!y.note_max||M<=y.note_max)})),w.length||(y.note_min||y.note_max?(w=u||[],console.warn("[Booster] Aucun joueur avec note",y.note_min,"-",y.note_max,"— fallback rareté uniquement")):w=u||[]),!w.length)continue;let v=w.filter(I=>!c.has(I.id));if(i)v.length||(v=w);else if(v=v.filter(I=>!a.has(I.id)),!v.length)continue;const E=v[Math.floor(Math.random()*v.length)];c.add(E.id);const p=a.has(E.id),{data:T}=await h.from("cards").insert({owner_id:t.id,player_id:E.id,card_type:"player"}).select().single();T&&(m.push({...T,player:E,isDuplicate:p}),h.rpc("record_transfer",{p_card_id:T.id,p_player_id:E.id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(y.card_type==="game_changer"){const{data:g}=await h.from("gc_definitions").select("id,name,color,effect,image_url,gc_type").eq("is_active",!0).eq("gc_type","game_changer"),f=g!=null&&g.length?g:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],b=i?f:f.filter(E=>!l.has(E.name));if(!i&&!b.length)continue;const u=b[Math.floor(Math.random()*b.length)],w=u.name,{data:v}=await h.from("cards").insert({owner_id:t.id,card_type:"game_changer",gc_type:w,gc_definition_id:u.id||null}).select().single();v&&m.push({...v,_gcDef:u})}else if(y.card_type==="formation"){const g=tn(),f=i?g:g.filter(v=>!d.has(v));if(!i&&!f.length)continue;const b=f[Math.floor(Math.random()*f.length)],u=d.has(b),{data:w}=await h.from("cards").insert({owner_id:t.id,card_type:"formation",formation:b}).select();w!=null&&w[0]&&m.push({...w[0],isDuplicate:u})}else if(y.card_type==="stadium"){const{data:g,error:f}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(f){console.error("[Booster] stadium_definitions:",f.message);continue}if(!(g!=null&&g.length)){console.warn("[Booster] Aucun stade en DB");continue}const b=i?g:g.filter(E=>!s.has(E.id));if(!i&&!b.length)continue;const u=b[Math.floor(Math.random()*b.length)],{data:w,error:v}=await h.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:u.id}).select("id,card_type,stadium_id").single();if(v){console.error("[Booster] insert stadium card:",v.message);continue}w&&m.push({...w,rarity:"normal",_stadiumDef:u})}}}return m}async function no(t,e,i){if(i>0){const{error:s}=await h.from("users").update({credits:t.credits-i}).eq("id",t.id);if(s)throw s;t.credits-=i,Vt(t.credits)}const{data:o}=await h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const r=o.filter(s=>s.job==="GK"),n=o.filter(s=>s.job!=="GK"),a=!t.first_booster_opened&&r.length>0,d=[];for(let s=0;s<e;s++){const c=s===0&&a?r:s===0?n:o,m=Yn(),x=Wn(c,m);x&&d.push(x)}a&&await h.from("users").update({first_booster_opened:!0}).eq("id",t.id);const{data:l}=await h.from("cards").insert(d.map(s=>({owner_id:t.id,player_id:s.id,card_type:"player"}))).select();return(l||[]).forEach((s,c)=>{h.rpc("record_transfer",{p_card_id:s.id,p_player_id:d[c].id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((s,c)=>({...l[c],player:s}))}async function ro(t,e,i){const{error:o}=await h.from("users").update({credits:t.credits-i}).eq("id",t.id);if(o)throw o;t.credits-=i,Vt(t.credits);const{data:r}=await h.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),n=r!=null&&r.length?r:Object.keys(Gi).map(m=>({name:m,gc_type:"game_changer"})),a=Array.from({length:e},()=>n[Math.floor(Math.random()*n.length)]),d=a.map(m=>({owner_id:t.id,card_type:"game_changer",gc_type:m.name,gc_definition_id:m.id||null})),{data:l,error:s}=await h.from("cards").insert(d).select();return s&&console.error("[Booster GC] Erreur insert:",s.message,s),(l||[]).map((m,x)=>({...m,_gcDef:a[x]||null}))}async function ao(t,e){const{error:i}=await h.from("users").update({credits:t.credits-e}).eq("id",t.id);if(i)throw i;t.credits-=e,Vt(t.credits);const{data:o}=await h.from("cards").select("formation").eq("owner_id",t.id).eq("card_type","formation"),r=new Set((o||[]).map(c=>c.formation)),n=tn(),a=n[Math.floor(Math.random()*n.length)],d=r.has(a),{data:l,error:s}=await h.from("cards").insert({owner_id:t.id,card_type:"formation",formation:a}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),(l||[]).map(c=>({...c,isDuplicate:d}))}async function Jn(t,e){const{data:i}=await h.from("cards").select("stadium_id").eq("owner_id",t.id).eq("card_type","stadium"),o=new Set((i||[]).map(s=>s.stadium_id).filter(Boolean)),{data:r}=await h.from("stadium_definitions").select("*");if(!(r!=null&&r.length))throw new Error("Aucun stade configuré en base.");const n=r[Math.floor(Math.random()*r.length)],a=o.has(n.id),{data:d,error:l}=await h.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:n.id}).select();return l&&console.error("[Booster Stade] Erreur insert:",l.message,l),(d||[]).map(s=>({...s,isDuplicate:a,_stadiumDef:n}))}async function nn(t,e,i){try{const o=(i||[]).map(r=>{var n,a,d,l,s;return{card_type:r.card_type,name:r.card_type==="player"?[(n=r.player)==null?void 0:n.firstname,(a=r.player)==null?void 0:a.surname_real].filter(Boolean).join(" "):((d=r._stadiumDef)==null?void 0:d.name)||((l=r._gcDef)==null?void 0:l.name)||r.formation||r.gc_type||null,rarity:((s=r.player)==null?void 0:s.rarity)||null,note:r.current_note??null,is_duplicate:!!r.isDuplicate}});await h.from("booster_openings").insert({user_id:t,booster_name:(e==null?void 0:e.name)||null,booster_type:(e==null?void 0:e.type)||null,cards:o,nb_cards:o.length})}catch(o){console.warn("[Booster] journalisation ignorée:",o==null?void 0:o.message)}}function so(t,e,i,o=null,r=null){var $,N,ae,j,de,ve,C;if(!t||t.length===0){const S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",S.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(S),($=S.querySelector("#anim-close-err"))==null||$.addEventListener("click",()=>S.remove());return}t=[...t].sort((S,Y)=>{const R=S.player?gt(S.player):-1;return(Y.player?gt(Y.player):-1)-R});const n=document.createElement("div");n.id="booster-anim-overlay",n.innerHTML=`
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
  `,document.body.appendChild(n);let a=!1;const d=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let s=!1;const c=S=>S.touches&&S.touches[0]?S.touches[0].clientX:S.clientX;function m(S){a||(s=!0,l.style.opacity="1",x(S))}function x(S){if(!s||a)return;const Y=d.getBoundingClientRect(),R=c(S)-Y.left,ee=Math.max(0,Math.min(1,R/Y.width));l.style.width=ee*Y.width+"px",ee>=.82&&g()}function y(){a||(s=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{a||(l.style.transition="")},220))}function g(){var Y;if(a)return;a=!0,s=!1,l.style.width="100%",l.style.opacity="1",(Y=document.getElementById("cut-flash"))==null||Y.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const S=document.getElementById("cut-hint");S&&(S.style.opacity="0"),d.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",w(0)},620)}d.addEventListener("pointerdown",m),window.addEventListener("pointermove",x),window.addEventListener("pointerup",y),d.addEventListener("touchstart",m,{passive:!0}),window.addEventListener("touchmove",x,{passive:!0}),window.addEventListener("touchend",y);let f=0,b=!1;const u=new Set;function w(S){f=S,document.getElementById("reveal-phase").style.display="flex",v(),E(S,0),H()}function v(){const S=document.getElementById("card-dots");S&&(S.innerHTML=t.map((Y,R)=>`<div class="card-dot" data-i="${R}" style="width:8px;height:8px;border-radius:50%;background:${R===f?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),S.querySelectorAll(".card-dot").forEach(Y=>Y.addEventListener("click",()=>T(parseInt(Y.dataset.i)))))}function E(S,Y){var ye,me;const R=t[S],ee=document.getElementById("card-counter"),fe=document.getElementById("card-track");ee&&(ee.textContent=`Carte ${S+1} / ${t.length}`);const he=document.getElementById("reveal-btns");he&&(he.style.display=S===t.length-1?"flex":"none");const be=R.card_type==="player"&&((ye=R.player)==null?void 0:ye.rarity)==="legende",je=!u.has(S);if(u.add(S),R.card_type==="player"&&R.player){const ke=R.player,k=ke.job||"ATT";(Number(k==="GK"?ke.note_g:k==="DEF"?ke.note_d:k==="MIL"?ke.note_m:ke.note_a)||0)+(R.evolution_bonus||0)}const Be=ke=>{fe.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${be?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Xn(R)}</div>
          ${R.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const k=document.getElementById("current-card-wrap");Y!==0?(k.style.transition="none",k.style.transform=`translateX(${Y>0?100:-100}%)`,requestAnimationFrame(()=>{k.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",k.style.transform="translateX(0)"})):k.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),ke||be?te():X(),v()};je&&((me=R.player)==null?void 0:me.rarity)==="legende"&&R.card_type==="player"&&R.player?p(R,()=>Be(!0)):Be(!1)}function p(S,Y){var se;b=!0;const R=S.player,ee=`https://flagsapi.com/${R.country_code}/flat/64.png`,fe=(se=R.clubs)==null?void 0:se.logo_url,he=Ct(R),be=R.job||"ATT",je=Number(be==="GK"?R.note_g:be==="DEF"?R.note_d:be==="MIL"?R.note_m:R.note_a)||0,Be=S.evolution_bonus||0,ye=je+Be,me=R.rarity==="legende",ke=ye>=18,k=document.getElementById("walkout-overlay"),q=document.getElementById("walkout-stage");if(!k||!q){b=!1,Y();return}let K=null;me&&(K=io("/sounds/Legendary.mp3",.8)),k.style.display="flex";const O=()=>{const ue=q.firstElementChild;ue&&(ue.classList.remove("wo-in"),ue.classList.add("wo-out"))},V=1800,G=400;q.innerHTML=`<img class="wo-in" src="${ee}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(O,V),setTimeout(()=>{var ue;q.innerHTML=fe?`<img class="wo-in" src="${fe}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((ue=R.clubs)==null?void 0:ue.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},V+G),setTimeout(O,V*2+G),setTimeout(()=>{q.innerHTML=he?`<img class="wo-in" src="${he}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(V+G)*2),setTimeout(O,(V+G)*2+V);const ce=ke?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[be]||"#fff";setTimeout(()=>{q.innerHTML=`<div class="wo-in" style="
        font-size:${ke?"120px":"90px"};font-weight:900;color:${ce};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${ce}, 0 0 60px ${ce};
        ${ke?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${ye}
      </div>`,ke&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(V+G)*3),setTimeout(O,(V+G)*3+V),setTimeout(()=>{k.style.display="none",q.innerHTML="",b=!1,K&&!me&&K.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),Y()},(V+G)*4)}function T(S){if(b||S<0||S>=t.length||S===f)return;const Y=S>f?1:-1;f=S,E(S,Y)}function I(){T(f+1)}function M(){T(f-1)}function H(){const S=document.getElementById("card-viewport");if(!S||S._swipeBound)return;S._swipeBound=!0;let Y=0,R=0,ee=0,fe=!1;const he=me=>me.touches?me.touches[0].clientX:me.clientX,be=me=>me.touches?me.touches[0].clientY:me.clientY,je=me=>{fe=!0,Y=he(me),R=be(me),ee=0},Be=me=>{if(!fe)return;ee=he(me)-Y;const ke=be(me)-R;if(Math.abs(ee)<Math.abs(ke))return;const k=document.getElementById("current-card-wrap");k&&(k.style.transition="none",k.style.transform=`translateX(${ee*.6}px) rotate(${ee*.02}deg)`)},ye=()=>{if(!fe)return;fe=!1;const me=document.getElementById("current-card-wrap"),ke=55;ee<=-ke&&f<t.length-1?I():ee>=ke&&f>0?M():me&&(me.style.transition="transform .2s ease",me.style.transform="translateX(0)")};S.addEventListener("pointerdown",je),S.addEventListener("pointermove",Be),S.addEventListener("pointerup",ye),S.addEventListener("pointercancel",ye),S.addEventListener("touchstart",je,{passive:!0}),S.addEventListener("touchmove",Be,{passive:!0}),S.addEventListener("touchend",ye),S.addEventListener("click",me=>{if(Math.abs(ee)>8)return;const ke=S.getBoundingClientRect();me.clientX-ke.left>ke.width/2?I():M()})}let ne=null;function te(){const S=document.getElementById("fireworks-canvas");if(!S)return;S.width=window.innerWidth,S.height=window.innerHeight;const Y=S.getContext("2d"),R=[];function ee(){const he=Math.random()*S.width,be=Math.random()*S.height*.6,je=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Be=je[Math.floor(Math.random()*je.length)];for(let ye=0;ye<60;ye++){const me=Math.PI*2/60*ye,ke=2+Math.random()*5;R.push({x:he,y:be,vx:Math.cos(me)*ke,vy:Math.sin(me)*ke,alpha:1,color:Be,size:2+Math.random()*3})}}ee(),ne=setInterval(ee,600);function fe(){if(document.getElementById("fireworks-canvas")){Y.clearRect(0,0,S.width,S.height);for(let he=R.length-1;he>=0;he--){const be=R[he];if(be.x+=be.vx,be.y+=be.vy+.08,be.vy*=.98,be.alpha-=.018,be.alpha<=0){R.splice(he,1);continue}Y.globalAlpha=be.alpha,Y.fillStyle=be.color,Y.beginPath(),Y.arc(be.x,be.y,be.size,0,Math.PI*2),Y.fill()}Y.globalAlpha=1,(ne!==null||R.length>0)&&requestAnimationFrame(fe)}}fe()}function X(){ne!==null&&(clearInterval(ne),ne=null);const S=document.getElementById("fireworks-canvas");S&&S.getContext("2d").clearRect(0,0,S.width,S.height)}if(o){const S=document.getElementById("reveal-btns");S&&(S.style.flexDirection="row",S.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(N=document.getElementById("reveal-next"))==null||N.addEventListener("click",()=>{X(),n.remove(),o()})}else{const S=document.getElementById("reveal-reopen"),Y=e.cost||0,R=Number((j=(ae=r==null?void 0:r.state)==null?void 0:ae.profile)==null?void 0:j.credits)||0,ee=!Y||R>=Y;if(S)if(r){S.textContent=`🎁 Ouvrir un autre booster${Y?` (${Y.toLocaleString("fr")} cr.)`:""}`;const fe=be=>{S.disabled=!0,S.style.opacity="0.45",S.style.cursor="not-allowed",be&&(S.title=be)};ee||fe("Crédits insuffisants");const he=((de=e._raw)==null?void 0:de.max_per_user)??null;ee&&he!=null&&((C=(ve=r==null?void 0:r.state)==null?void 0:ve.user)!=null&&C.id)&&h.from("booster_claims").select("id",{count:"exact",head:!0}).eq("user_id",r.state.user.id).eq("booster_id",e._boosterId).then(({count:be})=>{(be||0)>=he&&fe(`Quota atteint (${he} max.)`)}),S.addEventListener("click",()=>{S.disabled||(X(),n.remove(),on(e,{state:r.state,toast:r.toast,navigate:i,container:r.container}))})}else S.textContent="🎁 Ouvrir un autre booster",S.addEventListener("click",()=>{X(),n.remove(),i("boosters")});document.getElementById("reveal-collection").addEventListener("click",()=>{X(),n.remove(),i("collection")}),document.getElementById("reveal-shop").addEventListener("click",()=>{X(),n.remove(),i("boosters")})}}function Xn(t){var e,i,o,r;if(t.card_type==="player"&&t.player)return Un(t);if(t.card_type==="game_changer"){const n=t._gcDef,a=(n==null?void 0:n.name)||t.gc_type||"Game Changer",d=(n==null?void 0:n.effect)||((e=Gi[t.gc_type])==null?void 0:e.desc)||"",l=n!=null&&n.image_url?`/icons/${n.image_url}`:null,s=((i=Gi[t.gc_type])==null?void 0:i.icon)||"⚡";return it(a,l,s,d,{width:170})}if(t.card_type==="formation")return ai(t.formation,kt[t.formation],{width:160});if(t.card_type==="stadium"){const n=t._stadiumDef,a=(n==null?void 0:n.name)||"Stade",d=((o=n==null?void 0:n.club)==null?void 0:o.encoded_name)||(n==null?void 0:n.country_code)||"—",l=n!=null&&n.image_url?`/icons/${n.image_url}`:((r=n==null?void 0:n.club)==null?void 0:r.logo_url)||(n!=null&&n.country_code?`https://flagsapi.com/${n.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),s=`${d}<br>+10 ⭐ joueurs alliés`;return Ot(a,l,s,{width:170})}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Qn(t){var e,i;if((e=t==null?void 0:t.rates)!=null&&e.length){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const r={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},n={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};o.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${t.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${t.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${n[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${r[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(o),o.addEventListener("click",a=>{a.target===o&&o.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>o.remove());return}Zn()}function Zn(){const t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(t),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.getElementById("odds-close").addEventListener("click",()=>t.remove())}function er(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText=`
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
    `,document.body.appendChild(e);try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(r){console.warn("[AdSense]",r)}let i=5;const o=setInterval(()=>{i--;const r=document.getElementById("mw-ad-cd");r&&(r.textContent=i),i<=0&&(clearInterval(o),e.remove(),t(!0))},1e3)})}async function tr(t,{state:e,navigate:i,toast:o,refreshProfile:r}){var x,y;const{data:n}=await h.from("users").select("*").eq("id",e.user.id).single();n&&(e.profile=n);let a=Array.isArray((x=e.profile)==null?void 0:x.pending_boosters)?[...e.profile.pending_boosters]:[];if(!a.length){await h.from("users").update({onboarding_done:!0}).eq("id",e.user.id),i("home");return}let d=null;try{const f=(await en()).find(b=>(b.name||"").toLowerCase().includes("new player"));f&&(d=oo(f))}catch(g){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',g)}const l=a.length;let s=0;t.innerHTML=`
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
  </div>`;const c=async()=>{await h.from("users").update({pending_boosters:a}).eq("id",e.user.id)};async function m(){var w;if(s>=l||!a.length){await h.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",e.user.id),r&&await r(),o("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const g=a[0],{data:f}=await h.from("users").select("*").eq("id",e.user.id).single();f&&(e.profile=f);let b=[];try{if(g.type==="formation")b=await ao(e.profile,0);else if(g.type==="game_changer")b=await ro(e.profile,g.count||3,0);else if(g.type==="stadium")b=await Jn(e.profile,0);else if(d&&((w=d.rates)!=null&&w.length)){const v={...d,cost:0,cardCount:g.count||d.cardCount||5};b=await ki(e.profile,v),g.guaranteeGK&&!e.profile.first_booster_opened&&(b.some(p=>p.player&&p.player.job==="GK")||await ir(e.profile,b),await h.from("users").update({first_booster_opened:!0}).eq("id",e.profile.id))}else b=await no(e.profile,g.count||5,0)}catch(v){o(v.message||"Erreur ouverture booster","error");return}a.shift(),s++,await c();const u=g.type==="formation"?{name:"Booster Formation",type:"formation",img:"/icons/booster-formation.png"}:g.type==="game_changer"?{name:"Booster Game Changer",type:"game_changer",img:"/icons/booster-gamechanger.png"}:g.type==="stadium"?{name:"Booster Stade",type:"stadium",img:"/icons/booster-stade.png"}:{name:`Booster Joueurs (${s}/${l})`,type:"player",img:(d==null?void 0:d.img)||"/icons/booster-players.png"};nn(e.profile.id,u,b),so(b,u,i,()=>{m()})}(y=document.getElementById("onboard-start"))==null||y.addEventListener("click",()=>m())}async function ir(t,e){try{const{data:i}=await h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const o=i[Math.floor(Math.random()*i.length)],r=e.findIndex(a=>a.player);if(r===-1)return;const n=e[r];await h.from("cards").update({player_id:o.id}).eq("id",n.id),e[r]={...n,player_id:o.id,player:o}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const or=[{key:"home2",route:"home2",label:"ACCUEIL",icon:"nav-home.png"},{key:"cards",route:"collection",label:"CARTES",icon:"nav-collection.png"},{key:"decks",route:"decks",label:"EQUIPES",icon:"nav-decks.png"},{key:"boosters",route:"boosters",label:"BOUTIQUE",icon:"nav-boosters.png"},{key:"market",route:"market",label:"MERCATO",icon:"nav-market.png"}];function Kt(t,e,i,o,r){if(!document.getElementById("home2-chrome-style")){const m=document.createElement("style");m.id="home2-chrome-style",m.textContent=`
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
    `,document.head.appendChild(m)}const n=or.map(m=>`
    <a class="home2-chrome-tab" data-route="${m.route}" data-key="${m.key}">
      ${m.icon?`<img src="${o}${m.icon}">`:`<span class="home2-chrome-tab-emoji">${m.emoji}</span>`}${m.label}
    </a>`).join("");let a=document.getElementById("home2-chrome-header");a||(a=document.createElement("div"),a.id="home2-chrome-header",a.className="home2-chrome-header",a.innerHTML=`
      <div id="home2-chrome-marker" style="display:none"></div>
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-tabs">${n}</div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-chrome-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-chrome-settings-btn">⚙️</button>
      </div>
    `,document.body.appendChild(a),a.querySelector("#home2-chrome-settings-btn").addEventListener("click",()=>t("settings")),a.querySelector("#home2-chrome-credits").addEventListener("click",()=>zo(e,r)));let d=document.getElementById("home2-mobile-top");d||(d=document.createElement("div"),d.id="home2-mobile-top",d.className="home2-mobile-top",d.innerHTML=`
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-mobtop-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-mobtop-settings-btn"><span>⚙️</span><span class="pill-label">Paramètres</span></button>
      </div>
    `,document.body.appendChild(d),d.querySelector("#home2-mobtop-settings-btn").addEventListener("click",()=>t("settings")),d.querySelector("#home2-mobtop-credits").addEventListener("click",()=>zo(e,r)));let l=document.getElementById("home2-mobile-bottom");l||(l=document.createElement("div"),l.id="home2-mobile-bottom",l.className="home2-mobile-bottom",l.innerHTML=n,document.body.appendChild(l)),document.querySelectorAll(".home2-chrome-tab").forEach(m=>{m._v2Bound||(m._v2Bound=!0,m.addEventListener("click",()=>{document.querySelectorAll(".home2-chrome-tab").forEach(x=>x.classList.remove("active")),document.querySelectorAll(`.home2-chrome-tab[data-key="${m.dataset.key}"]`).forEach(x=>x.classList.add("active")),t(m.dataset.route)}))}),document.querySelectorAll(".home2-chrome-tab").forEach(m=>m.classList.toggle("active",m.dataset.key===i));const s=`💰 ${(e.credits||0).toLocaleString("fr")}`;document.getElementById("home2-chrome-credits")&&(document.getElementById("home2-chrome-credits").textContent=s),document.getElementById("home2-mobtop-credits")&&(document.getElementById("home2-mobtop-credits").textContent=s),document.body.classList.remove("v2-match-flow"),a.style.display="",d.style.display="",l.style.display="";const c=document.getElementById("page-content");c&&(c.style.removeProperty("padding-top"),c.style.removeProperty("padding-bottom")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const m=window.innerWidth<1024;document.documentElement.style.setProperty("--v2-top-height",(m?d.offsetHeight:a.offsetHeight)+"px"),document.documentElement.style.setProperty("--v2-bottom-height",l.offsetHeight+"px")})})}const nr=[{ads:1,seconds:5,credits:4500},{ads:2,seconds:10,credits:9500},{ads:3,seconds:15,credits:15e3}];async function zo(t,e){if(!await Ji("pub_mode")){Uo();return}const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",i.innerHTML=`
    <div style="background:#111a12;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:400px;width:100%;color:#fff">
      <div style="font-size:18px;font-weight:900;margin-bottom:4px">💰 Gagner des crédits</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:18px">Regarde une ou plusieurs publicités pour recevoir des crédits gratuits.</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${nr.map(o=>`
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
    </div>`,document.body.appendChild(i),i.querySelector("#credits-ad-cancel").addEventListener("click",()=>i.remove()),i.querySelectorAll(".credits-ad-offer-btn").forEach(o=>{o.addEventListener("click",()=>{i.remove(),rr(parseInt(o.dataset.ads),5,parseInt(o.dataset.credits),t,e)})})}function rr(t,e,i,o,r){let n=1;const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.94);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;gap:14px;color:#fff;padding:16px",document.body.appendChild(a);function d(){a.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité ${n}/${t}</div>
      <div style="width:400px;max-width:100%;height:400px;max-height:55vh;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center">
        <ins class="adsbygoogle"
          style="display:inline-block;width:400px;height:400px"
          data-ad-client="ca-pub-5827602487507112"
          data-ad-slot="6638827438"></ins>
      </div>
      <div id="credits-ad-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Chargement… <span id="credits-ad-cd">${e}</span>s</div>
      <div id="credits-ad-next-zone" style="width:280px;max-width:100%"></div>
    `;try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(m){console.warn("[AdSense]",m)}let s=e;const c=setInterval(()=>{s--;const m=a.querySelector("#credits-ad-cd");m&&(m.textContent=s),s<=0&&(clearInterval(c),l())},1e3)}function l(){var m,x;const s=a.querySelector("#credits-ad-status"),c=a.querySelector("#credits-ad-next-zone");n<t?(s&&(s.textContent="Publicité terminée ✅"),c&&(c.innerHTML=`
        <button id="credits-ad-next-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px">
          Suivant (${n}/${t}) →
        </button>`),(m=a.querySelector("#credits-ad-next-btn"))==null||m.addEventListener("click",()=>{n++,d()})):(s&&(s.textContent="Toutes les publicités ont été vues ✅"),c&&(c.innerHTML=`
        <button id="credits-ad-claim-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px;background:#D4A017;border-color:#D4A017">
          🎁 Récupérer ${i.toLocaleString("fr")} crédits
        </button>`),(x=a.querySelector("#credits-ad-claim-btn"))==null||x.addEventListener("click",async()=>{const y=a.querySelector("#credits-ad-claim-btn");y.disabled=!0,y.textContent="⏳...";const g=(o.credits||0)+i,{error:f}=await h.from("users").update({credits:g}).eq("id",o.id);if(f){r(f.message,"error"),y.disabled=!1;return}o.credits=g,Vt(g),r(`+${i.toLocaleString("fr")} crédits ✅`,"success"),a.remove()}))}d()}async function rn(t,e,i){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",document.body.appendChild(o);async function r(){var l;const{data:n}=await h.from("pending_rewards").select(`*,
        player:players(id, firstname, surname_real, country_code, club_id, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
          clubs(encoded_name, logo_url)),
        booster:booster_configs(name, image_url)`).eq("user_id",t.profile.id).eq("claimed",!1).order("created_at",{ascending:!0});if(!(n!=null&&n.length)){o.remove();const s=document.getElementById("pending-rewards-banner");s&&s.remove();return}const a=s=>{var c;return s.reward_type==="credits"?'<div style="width:56px;height:56px;border-radius:12px;background:rgba(212,160,23,0.15);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">💰</div>':s.reward_type==="card"&&s.player?`<div style="flex-shrink:0">${qe(s.player,{width:56})}</div>`:s.reward_type==="booster"?`<img src="/icons/${((c=s.booster)==null?void 0:c.image_url)||"booster-players.png"}" style="width:56px;height:56px;object-fit:contain;border-radius:12px;background:rgba(255,255,255,0.05);flex-shrink:0">`:'<div style="width:56px;height:56px;border-radius:12px;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">❓</div>'},d=s=>{var c,m,x;return s.reward_type==="credits"?`${(s.credits_amount||0).toLocaleString("fr")} crédits`:s.reward_type==="card"?`${((c=s.player)==null?void 0:c.firstname)||""} ${((m=s.player)==null?void 0:m.surname_real)||""}`.trim()||"Carte joueur":s.reward_type==="booster"?((x=s.booster)==null?void 0:x.name)||"Booster":"Récompense"};o.innerHTML=`
      <div style="background:#111a12;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:420px;width:100%;max-height:80vh;overflow-y:auto;color:#fff">
        <div style="font-size:18px;font-weight:900;margin-bottom:4px">🎁 Tes récompenses</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:16px">${n.length} récompense${n.length>1?"s":""} à récupérer</div>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${n.map(s=>`
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
      </div>`,(l=o.querySelector("#pending-rewards-close"))==null||l.addEventListener("click",()=>o.remove()),o.querySelectorAll(".claim-reward-btn").forEach(s=>{s.addEventListener("click",async()=>{var m,x;const c=n.find(y=>y.id===s.dataset.id);s.disabled=!0,s.textContent="⏳...";try{const y=await Kn(c,t.profile,e,null);if(await h.from("pending_rewards").update({claimed:!0,claimed_at:new Date().toISOString()}).eq("id",c.id),y.type==="credits")Vt(t.profile.credits),e(`+${y.amount.toLocaleString("fr")} crédits ✅`,"success");else if(y.type==="card")e(`Carte reçue : ${((m=y.player)==null?void 0:m.firstname)||""} ${((x=y.player)==null?void 0:x.surname_real)||""} ✅`,"success");else if(y.type==="booster"){o.remove(),so(y.cards,y.boosterUI,i,()=>{rn(t,e,i)});return}}catch(y){e(y.message||"Erreur lors de la réclamation","error"),s.disabled=!1,s.textContent="Récupérer";return}r()})})}r(),o.addEventListener("click",n=>{n.target===o&&o.remove()})}function Vt(t){const e=`💰 ${(t||0).toLocaleString("fr")}`,i=document.getElementById("home2-chrome-credits"),o=document.getElementById("home2-mobtop-credits");i&&(i.textContent=e),o&&(o.textContent=e)}function ct(){document.body.classList.add("v2-match-flow");const t=document.getElementById("home2-chrome-header");t&&(t.style.display="none");const e=document.getElementById("home2-mobile-top");e&&(e.style.display="none");const i=document.getElementById("home2-mobile-bottom");i&&(i.style.display="none");const o=document.getElementById("page-content");o&&(o.style.setProperty("padding-top","0","important"),o.style.setProperty("padding-bottom","0","important"))}function ar(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return"à l'instant";if(i<60)return`il y a ${i}min`;const o=Math.floor(i/60);if(o<24)return`il y a ${o}h`;const r=Math.floor(o/24);return r<7?`il y a ${r}j`:new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"short"})}async function sr(t){const{data:e}=await h.from("users").select("id,pseudo,club_name,mmr").order("mmr",{ascending:!1}).limit(5),i=e||[],o=i.some(n=>n.id===t);let r=null;if(!o){const{data:n}=await h.from("users").select("mmr").eq("id",t).single();if(n){const{count:a}=await h.from("users").select("id",{count:"exact",head:!0}).gt("mmr",n.mmr||0);r=(a||0)+1}}return{list:i,iAmInTop:o,myPosition:r}}async function lr(t=4){const{data:e}=await h.from("patch_notes").select("id,title,description,image_url,published_at").eq("is_published",!0).order("published_at",{ascending:!1}).limit(t);return e||[]}async function dr(){const{data:t}=await h.from("booster_configs").select("id,name,icon,price_type,price_credits,card_count").eq("is_active",!0).order("sort_order",{ascending:!0}).limit(5);return t||[]}async function cr(){const{data:t}=await h.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const r=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${o.image_url?`<img src="${o.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${r}</div>
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close-v2").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}async function qi(t,{state:e,navigate:i,toast:o,openModal:r,closeModal:n}){var I,M,H,ne,te,X;const a=e.profile;if(!a)return;const d="/icons/";Kt(i,a,"home2",d,o);const l=a.mmr??450,s=bt(l),c=hi(l,s),m=Fi(l),x=isFinite(s.max)?s.max+1:null,[{list:y,iAmInTop:g,myPosition:f},b,u,{count:w}]=await Promise.all([sr(a.id),lr(5),dr(),h.from("pending_rewards").select("*",{count:"exact",head:!0}).eq("user_id",a.id).eq("claimed",!1)]),v=($,N)=>{const ae=bt($.mmr??0),j=hi($.mmr??0,ae);return`
    <div class="rk-row ${$.id===a.id?"rk-row-me":""}">
      <div class="rk-pos ${N<3?"rk-pos-top"+(N+1):""}">${N<3?["🥇","🥈","🥉"][N]:N+1}</div>
      <div class="rk-name ${$.id===a.id?"rk-name-me":""}">${$.pseudo}</div>
      <div class="rk-rp-block">
        <div class="rk-rp-tier" style="color:${ae.color}">${ae.emoji} ${ae.label.toUpperCase()}${j?" "+j:""}</div>
        <div class="rk-rp">${($.mmr??0).toLocaleString("fr")} MMR</div>
      </div>
    </div>`},E=$=>`
    <div class="news-item">
      ${$.image_url?`<img src="${$.image_url}" class="news-thumb" onerror="this.style.display='none'">`:'<div class="news-thumb news-thumb-fallback">📰</div>'}
      <div class="news-body">
        <div class="news-title">${$.title}</div>
        <div class="news-desc">${$.description||""}</div>
        <div class="news-time">${ar($.published_at)}</div>
      </div>
    </div>`;let p=0;const T=$=>`
    <div class="promo-icon-wrap">
      <img src="${d}${$.icon||"nav-boosters.png"}" class="promo-icon" onerror="this.style.display='none'">
    </div>
    <div class="promo-info">
      <div class="promo-kicker">NOUVEAU BOOSTER</div>
      <div class="promo-title">${$.name}</div>
      <div class="promo-desc">${$.card_count||5} cartes · ${$.price_type==="pub"?"Pub gratuite":($.price_credits||0).toLocaleString("fr")+" cr."}</div>
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
                <div class="rank-tier-value">${s.label.toUpperCase()}${c?" "+c:""}</div>
              </div>
              <div class="rank-right">
                <div class="rank-rp-label">${l.toLocaleString("fr")}${x?" / "+x.toLocaleString("fr"):""} RP</div>
                <button class="rank-inline-link" id="rank-inline-link-btn">📊 Classement</button>
              </div>
            </div>
            <div class="rank-progress-track"><div class="rank-progress-fill" style="width:${m}%"></div></div>
          </div>

          <div class="ranking-widget">
            <div class="ranking-widget-header"><h4>CLASSEMENT</h4><a id="nav-rankings-link">Voir plus</a></div>
            ${y.map(($,N)=>v($,N)).join("")}
            ${!g&&f?`
              <div style="border-top:1px solid var(--tile-border);margin-top:2px;padding-top:8px">
                ${v({id:a.id,pseudo:a.pseudo,mmr:l},f-1)}
              </div>`:""}
            <button class="ranking-widget-cta" id="nav-rankings-cta">📊 Voir le classement</button>
          </div>
        </div>

        <!-- Colonne centrale : Jouer + promo -->
        <div class="home2-col-center">
          ${w>0?`
          <div id="pending-rewards-banner" style="cursor:pointer;display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:14px;
            background:linear-gradient(135deg,rgba(212,160,23,0.25),rgba(212,160,23,0.1));border:1.5px solid #D4A017;margin-bottom:14px">
            <div style="font-size:28px">🎁</div>
            <div style="flex:1">
              <div style="font-weight:900;font-size:14px;color:#fff">Tu as des récompenses à récupérer !</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.6)">${w} récompense${w>1?"s":""} en attente</div>
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

          ${u.length?`
          <div class="promo-banner" id="promo-banner">
            <div id="promo-slide-content" style="display:flex;align-items:center;gap:14px;flex:1;min-width:0">
              ${T(u[0])}
            </div>
            <button class="promo-cta" id="promo-cta-btn">✅ Ouvrir des boosters</button>
            ${u.length>1?`<div class="promo-dots">${u.map(($,N)=>`<div class="promo-dot ${N===0?"active":""}" data-dot="${N}"></div>`).join("")}</div>`:""}
          </div>`:""}
        </div>

        <!-- Colonne droite : Actualités -->
        <div class="home2-col-right">
          <div class="news-widget">
            <div class="news-widget-header"><h4>ACTUALITÉS</h4><a id="nav-journal-link">Voir tout</a></div>
            ${b.length?b.map(E).join(""):'<div style="font-size:11px;color:var(--tile-fg-dim);padding:8px 0">Aucune actualité pour le moment.</div>'}
          </div>
        </div>

      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var ve,C;const $=((ve=window.visualViewport)==null?void 0:ve.height)||window.innerHeight,N=window.innerWidth<1024;let ae=0;if(N){const S=document.getElementById("home2-mobile-top"),Y=document.getElementById("home2-mobile-bottom");ae=((S==null?void 0:S.offsetHeight)||0)+((Y==null?void 0:Y.offsetHeight)||0)}else ae=((C=document.getElementById("home2-chrome-header"))==null?void 0:C.offsetHeight)||0;const j=$-ae,de=t.querySelector(".home-dark");de&&(de.style.minHeight=j+"px")}),(I=document.getElementById("nav-rankings-link"))==null||I.addEventListener("click",()=>i("rankings")),(M=document.getElementById("nav-rankings-cta"))==null||M.addEventListener("click",()=>i("rankings")),(H=document.getElementById("rank-inline-link-btn"))==null||H.addEventListener("click",()=>i("rankings")),(ne=document.getElementById("nav-journal-link"))==null||ne.addEventListener("click",()=>cr()),t.querySelectorAll("[data-action]").forEach($=>{$.addEventListener("click",()=>{$.style.transform="scale(.96)",setTimeout(()=>$.style.transform="",180);const N=$.dataset.action;if(N==="match-ai"){ln(i,e);return}if(N==="match-random"){ct(),i("match",{matchMode:"random"});return}if(N==="match-friend"){i("friends");return}if(N==="mini-league"){i("mini-league");return}if(N==="ranked"){i("ranked");return}o("Bientôt disponible","info")})}),u.length>1){const $=document.getElementById("promo-slide-content"),N=()=>Array.from(document.querySelectorAll(".promo-dot")),ae=j=>{p=j,$&&($.innerHTML=T(u[p])),N().forEach((de,ve)=>de.classList.toggle("active",ve===p))};setInterval(()=>ae((p+1)%u.length),5e3),document.querySelectorAll(".promo-dot").forEach(j=>{j.addEventListener("click",()=>ae(Number(j.dataset.dot)))})}(te=document.getElementById("promo-cta-btn"))==null||te.addEventListener("click",()=>i("boosters")),sn(e,o),(X=document.getElementById("pending-rewards-banner"))==null||X.addEventListener("click",()=>{rn(e,o,i)}),mr(e,o,i),an(e,o,i),pr(e,o)}async function pr(t,e){const i=t.profile.id,{data:o}=await h.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(o!=null&&o.length))return;const r=o.reduce((a,d)=>a+(d.prize_amount||0),0),n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2200",n.innerHTML=`<div class="modal" style="max-width:400px">
    <div class="modal-header"><h2 style="color:#1A6B3C">🏆 Gains à récupérer</h2></div>
    <div class="modal-body" style="padding:18px 20px">
      <p style="font-size:14px;color:#555;margin:0 0 14px">Tu as terminé sur le podium de ${o.length>1?"plusieurs mini leagues":"une mini league"} !</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
        ${o.map(a=>{var d;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#f7f7f7;border-radius:10px">
          <span style="font-size:13px;font-weight:700;color:#1a1a1a">${((d=a.mini_leagues)==null?void 0:d.name)||"Mini League"}</span>
          <span style="font-size:13px;font-weight:900;color:#D4A017">+${(a.prize_amount||0).toLocaleString("fr")} cr.</span>
        </div>`}).join("")}
      </div>
      <button id="claim-all-btn" class="btn btn-primary" style="width:100%;margin-bottom:8px">💰 Tout récupérer (+${r.toLocaleString("fr")} cr.)</button>
      <button id="claim-later-btn" class="btn btn-ghost" style="width:100%">Plus tard</button>
    </div>
  </div>`,document.body.appendChild(n),n.querySelector("#claim-later-btn").addEventListener("click",()=>n.remove()),n.querySelector("#claim-all-btn").addEventListener("click",async a=>{const d=a.currentTarget;d.disabled=!0,d.textContent="...";let l=0;for(const s of o){const{data:c}=await h.rpc("claim_mini_league_prize",{p_league_id:s.league_id,p_user_id:i});c!=null&&c.success&&!c.already_claimed&&(l+=c.prize||0)}if(l>0){t.profile.credits=(t.profile.credits||0)+l;const s=document.getElementById("nav-credits");s&&(s.textContent=`💰 ${t.profile.credits.toLocaleString("fr")}`),e(`💰 +${l.toLocaleString("fr")} cr. récupérés !`,"success")}n.remove()})}async function an(t,e,i){const o=document.getElementById("ongoing-match-banner");if(!o)return;const r=t.profile.id,{data:n}=await h.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${r},away_id.eq.${r}`).order("created_at",{ascending:!1});if(!(n!=null&&n.length)){o.innerHTML="";return}const a=n.map(l=>l.home_id===r?l.away_id:l.home_id).filter(Boolean);let d={};if(a.length){const{data:l}=await h.from("users").select("id, pseudo, club_name").in("id",a);(l||[]).forEach(s=>{d[s.id]=s.club_name||s.pseudo})}o.innerHTML=n.map(l=>{const s=l.home_id===r?l.away_id:l.home_id,c=d[s]||"Adversaire",m=l.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${m?"🏆 Mini League":l.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${c}</div>
      </div>
      <button data-resume="${l.id}" data-mini="${m?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${l.id}" data-opp="${s}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),o.querySelectorAll("[data-resume]").forEach(l=>{l.addEventListener("click",async()=>{ct();const s=document.getElementById("page-content")||document.getElementById("app");if(l.dataset.mini==="1"){const{data:c}=await h.from("mini_league_matches").select("id, league_id").eq("match_id",l.dataset.resume).single();c?i("match-mini-league",{mlMatchId:c.id,leagueId:c.league_id}):i("mini-league")}else{const{resumePvpMatch:c}=await Jo(async()=>{const{resumePvpMatch:m}=await Promise.resolve().then(()=>fa);return{resumePvpMatch:m}},void 0);c(s,{state:t,navigate:i,toast:e,openModal:null,closeModal:null,refreshProfile:null},l.dataset.resume)}})}),o.querySelectorAll("[data-abandon]").forEach(l=>{l.addEventListener("click",()=>{fr(async()=>{await ur(l.dataset.abandon,l.dataset.opp,r),e("Match abandonné (défaite 3-0)","info"),an(t,e,i)})})})}async function ur(t,e,i){Nt();const{data:o}=await h.from("matches").select("home_id, away_id, game_state, mode").eq("id",t).single();if(!o)return;const r=o.home_id===i,n=r?0:3,a=r?3:0,d=o.game_state||{};d.p1Score=n,d.p2Score=a,d.phase="finished",d.forfeit=!0,await h.from("matches").update({status:"finished",forfeit:!0,winner_id:e,home_score:n,away_score:a,game_state:d}).eq("id",t),o.mode==="mini_league"&&await h.from("mini_league_matches").update({status:"finished",home_score:n,away_score:a}).eq("match_id",t)}function fr(t){const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(e),e.querySelector("#ab-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#ab-ok").addEventListener("click",()=>{e.remove(),t()}),e.addEventListener("click",i=>{i.target===e&&e.remove()})}let fi=null,Ft=null;function mr(t,e,i){var n;const o=(n=t==null?void 0:t.user)==null?void 0:n.id;if(!o)return;const r=()=>gr(t,e,i);if(r(),clearInterval(fi),fi=setInterval(()=>{if(!document.getElementById("match-invite-banner")){if(clearInterval(fi),fi=null,Ft){try{h.removeChannel(Ft)}catch{}Ft=null}return}r()},5e3),Ft)try{h.removeChannel(Ft)}catch{}Ft=h.channel("home-match-invites-"+o).on("postgres_changes",{event:"INSERT",schema:"public",table:"friend_match_invites",filter:`invitee_id=eq.${o}`},r).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`invitee_id=eq.${o}`},r).subscribe()}async function gr(t,e,i){var d,l,s,c;const o=document.getElementById("match-invite-banner");if(!o)return;const{data:r}=await h.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",t.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!r){o.innerHTML="";return}const n=((d=r.inviter)==null?void 0:d.club_name)||((l=r.inviter)==null?void 0:l.pseudo)||"?",a=r.inviter_id;o.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${n} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(s=document.getElementById("match-inv-accept"))==null||s.addEventListener("click",()=>{o.innerHTML="",ct(),i("match",{matchMode:"friend",friendId:a,friendName:n,isAccepting:!0})}),(c=document.getElementById("match-inv-decline"))==null||c.addEventListener("click",async()=>{await h.from("friend_match_invites").update({status:"declined"}).eq("id",r.id),o.innerHTML="",e("Invitation refusée","info")})}async function sn(t,e){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:o,error:r}=await h.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",t.user.id).eq("status","pending");if(r||!(o!=null&&o.length)){i.innerHTML="";return}const n=o.length,a=o.slice(0,2).map(l=>{var s;return((s=l.requester)==null?void 0:s.pseudo)||"?"}).join(", "),d=n>2?` +${n-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${n} demande${n>1?"s":""} d'ami${n>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${d}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>cn(t,e,()=>sn(t,e)))}async function ln(t,e){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:420px;border-radius:18px">
    <div class="modal-header"><h2>Solo — Choisir un niveau</h2><button class="btn-icon" id="solo-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div id="solo-levels-list" style="display:flex;flex-direction:column;gap:10px">
        <div style="text-align:center;color:#999;padding:20px">⏳ Chargement…</div>
      </div>
    </div>
  </div>`,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("solo-cancel").addEventListener("click",o),i.addEventListener("click",s=>{s.target===i&&o()});const[{data:r},{data:n}]=await Promise.all([h.from("solo_levels").select("*").eq("is_active",!0).order("level_number"),h.from("user_solo_progress").select("unlocked_level").eq("user_id",e.profile.id).maybeSingle()]),a=(n==null?void 0:n.unlocked_level)||1,d=r||[],l=document.getElementById("solo-levels-list");if(l){if(!d.length){l.innerHTML='<div style="text-align:center;color:#999;padding:20px">Aucun niveau configuré.</div>';return}l.innerHTML=d.map(s=>{const c=s.level_number>a,m=s.level_number===a,x=c?"#f0f0f0":m?"#eefaf2":"#f7f7f7",y=c?"#ddd":m?"#bfe8cf":"#e0e0e0",g=c?"#999":"#12401f";return`
      <div class="solo-level-card" data-level="${s.level_number}" data-locked="${c}"
        style="cursor:${c?"not-allowed":"pointer"};display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${x};border:1px solid ${y};opacity:${c?.6:1};transition:transform .12s ease">
        <div style="width:46px;height:46px;border-radius:12px;background:${c?"#bbb":"#1A6B3C"};display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#fff;flex-shrink:0">
          ${c?"🔒":s.level_number}
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:800;font-size:15px;color:${g}">Niveau ${s.level_number}</div>
          <div style="font-size:11px;color:${g};opacity:0.75;margin-top:1px">
            Note globale ~${s.target_note_avg} · 🟡${s.nb_liens_jaune} 🟢${s.nb_liens_vert} · 🏟️${s.nb_joueurs_stade}
          </div>
        </div>
        ${c?"":`<div style="font-weight:900;font-size:12.5px;color:${g};background:rgba(255,255,255,0.7);padding:6px 11px;border-radius:999px;flex-shrink:0;white-space:nowrap">+${s.reward_credits} cr.</div>`}
      </div>`}).join(""),l.querySelectorAll(".solo-level-card").forEach(s=>{s.dataset.locked!=="true"&&(s.addEventListener("mouseenter",()=>{s.style.transform="translateY(-1px)"}),s.addEventListener("mouseleave",()=>{s.style.transform=""}),s.addEventListener("click",()=>{o(),ct(),t("match",{matchMode:"solo",soloLevel:Number(s.dataset.level)})}))})}}const ci="#1A6B3C",pi="#cc2222",br="#D4A017",Lo="#888";async function xr(t,e){const{state:i,toast:o}=e;t.innerHTML=`
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
    </div>`,await dn(i,o,e),document.getElementById("btn-add-friend").addEventListener("click",()=>hr(i,o)),document.getElementById("btn-accept-friend").addEventListener("click",()=>cn(i,o,null,e))}async function dn(t,e,i={}){const{navigate:o}=i,r=t.user.id,{data:n,error:a}=await h.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${r},addressee_id.eq.${r}`),{count:d}=await h.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",r).eq("status","pending"),l=document.getElementById("pending-badge");l&&(d>0?(l.style.display="flex",l.textContent=d):l.style.display="none");const s=document.getElementById("friends-list");if(!s)return;if(a){console.error("[Friends] Erreur:",a),s.innerHTML=`<div style="color:${pi};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const c=(n||[]).map(y=>y.requester_id===r?y.addressee_id:y.requester_id);let m={};if(c.length){const{data:y}=await h.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",c);(y||[]).forEach(g=>{m[g.id]=g})}const x=(n||[]).map(y=>({friendshipId:y.id,friend:m[y.requester_id===r?y.addressee_id:y.requester_id]||{pseudo:"?"}}));if(!x.length){s.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}s.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${x.length} ami${x.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${x.map(({friendshipId:y,friend:g})=>yr(g,y)).join("")}
    </div>`,s.querySelectorAll("[data-stats]").forEach(y=>{y.addEventListener("click",()=>vr(t,y.dataset.stats,y.dataset.friendName))}),s.querySelectorAll("[data-match]").forEach(y=>{y.addEventListener("click",async()=>{const g=y.dataset.friendId,f=y.dataset.friendName;if(typeof o!="function"){e("Erreur navigation","error");return}const b=t.user.id,{data:u}=await h.from("friend_match_invites").select("id").eq("inviter_id",g).eq("invitee_id",b).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),w=!!u;console.log("[Friends] clic match",{fid:g,fname:f,isAccepting:w}),ct(),o("match",{matchMode:"friend",friendId:g,friendName:f,isAccepting:w})})})}function yr(t,e){const i=t.club_name||t.pseudo||"?",o=t.pseudo||"",r=(o||i).slice(0,2).toUpperCase(),n=t.club_color2||ci,a=t.club_color1||"#ffffff",d=t.last_seen_at?new Date(t.last_seen_at):null,l=d&&Date.now()-d.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:var(--tile-bg);border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${n};border:2.5px solid ${a};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${a}">
          ${r}
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${br};background:var(--tile-bg);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function hr(t,e){const i=lo();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${pi};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${co()}`,document.body.appendChild(i);const o=i.querySelector("#friend-pseudo-input"),r=i.querySelector("#add-friend-error"),n=()=>i.remove();o.focus(),i.querySelector("#add-cancel").addEventListener("click",n),i.addEventListener("click",a=>{a.target===i&&n()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=o.value.trim();if(!a){r.textContent="Entre un pseudo";return}r.textContent="";const{data:d}=await h.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!d){r.textContent="Utilisateur introuvable";return}if(d.id===t.user.id){r.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:l}=await h.from("friendships").select("id, status").or(`and(requester_id.eq.${t.user.id},addressee_id.eq.${d.id}),and(requester_id.eq.${d.id},addressee_id.eq.${t.user.id})`).single();if(l){const c=l.status==="accepted"?"Vous êtes déjà amis !":l.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";r.textContent=c;return}const{error:s}=await h.from("friendships").insert({requester_id:t.user.id,addressee_id:d.id,status:"pending"});if(s){r.textContent="Erreur : "+s.message;return}n(),e(`✅ Demande envoyée à ${d.pseudo} !`,"success")})}async function cn(t,e,i=null,o={}){const r=t.user.id,{data:n}=await h.from("friendships").select("id, requester_id").eq("addressee_id",r).eq("status","pending").order("created_at",{ascending:!1}),a=(n||[]).map(x=>x.requester_id);let d={};if(a.length){const{data:x}=await h.from("users").select("id, pseudo, club_name").in("id",a);(x||[]).forEach(y=>{d[y.id]=y})}const l=(n||[]).map(x=>({...x,requester:d[x.requester_id]||{pseudo:"?"}})),s=lo(),c=l||[];s.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${c.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${c.map(x=>{var y,g,f;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((y=x.requester)==null?void 0:y.club_name)||((g=x.requester)==null?void 0:g.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((f=x.requester)==null?void 0:f.pseudo)||""})</span>
                </div>
                <button data-accept="${x.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${ci};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${x.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${pi};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${co()}`,document.body.appendChild(s);const m=()=>s.remove();s.querySelector("#pending-close").addEventListener("click",m),s.addEventListener("click",x=>{x.target===s&&m()}),s.querySelectorAll("[data-accept]").forEach(x=>{x.addEventListener("click",async()=>{const{error:y}=await h.from("friendships").update({status:"accepted"}).eq("id",x.dataset.accept);if(y){e("Erreur : "+y.message,"error");return}x.closest("div[style]").remove(),e("✅ Ami accepté !","success"),dn(t,e,o),i&&i()})}),s.querySelectorAll("[data-decline]").forEach(x=>{x.addEventListener("click",async()=>{await h.from("friendships").delete().eq("id",x.dataset.decline),x.closest("div[style]").remove(),e("Demande refusée","info"),i&&i()})})}async function vr(t,e,i){const o=t.user.id,[r,n]=[o,e].sort(),a=o===r,{data:d}=await h.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",n).single(),l=t.profile.club_name||t.profile.pseudo||"Moi",s=d||{},c=a?s.wins_p1||0:s.wins_p2||0,m=a?s.wins_p2||0:s.wins_p1||0,x=s.draws||0,y=a?s.goals_p1||0:s.goals_p2||0,g=a?s.goals_p2||0:s.goals_p1||0,f=a?s.gc_used_p1||0:s.gc_used_p2||0,b=a?s.gc_used_p2||0:s.gc_used_p1||0,u=s.matches_total||0,w=(E,p,T,I=ci,M=pi)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${I}">${p}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${E}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${M}">${T}</div>
    </div>`,v=lo();v.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${u===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${w("Victoires",c,m)}
        ${w("Nuls",x,x,Lo,Lo)}
        ${w("Défaites",m,c)}
        ${w("Buts marqués",y,g)}
        ${w("Buts encaissés",g,y,pi,ci)}
        ${w("GC utilisés ⚡",f,b,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${u} match${u>1?"s":""} joué${u>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${co()}`,document.body.appendChild(v),v.querySelector("#stats-close").addEventListener("click",()=>v.remove()),v.addEventListener("click",E=>{E.target===v&&v.remove()})}function lo(){const t=document.createElement("div");return t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",t}function co(){return`
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
        background:${ci};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function wr(t,{state:e,navigate:i,toast:o}){const r=e.profile;if(!r)return;const n="/icons/";Kt(i,r,"game",n,o),t.innerHTML=`
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
          <img src="${n}badge-ai.png">
          <div class="g-label">SOLO</div>
          <div class="g-desc">Progressez à travers les niveaux</div>
        </div>
        <div class="game-tile" data-action="match-random">
          <img src="${n}badge-random.png">
          <div class="g-label">RANDOM</div>
          <div class="g-desc">Affrontez un adversaire aléatoire</div>
        </div>
        <div class="game-tile" data-action="match-friend">
          <img src="${n}badge-vs.png">
          <div class="g-label">AMI</div>
          <div class="g-desc">Affrontez un ami</div>
        </div>
        <div class="game-tile game-tile-big tile-mini-league" data-action="mini-league">
          <img src="${n}badge-league.png">
          <div class="g-label">MINI LEAGUE</div>
          <div class="g-desc">Participez à des ligues</div>
        </div>
        <div class="game-tile game-tile-big tile-ranked" data-action="ranked">
          <img src="${n}badge-ranked.png">
          <div class="g-label">RANKED</div>
          <div class="g-desc">Grimpez dans le classement</div>
        </div>
      </div>
    </div>
  </div>`,t.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",()=>{a.style.transform="scale(.96)",setTimeout(()=>a.style.transform="",180);const d=a.dataset.action;if(d==="match-ai"){ln(i,e);return}if(d==="match-random"){ct(),i("match",{matchMode:"random"});return}if(d==="match-friend"){i("friends");return}if(d==="mini-league"){i("mini-league");return}if(d==="ranked"){i("ranked");return}o("Bientôt disponible","info")})})}const _r="/",pn=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function un(t,e,i){let o=0;const r=document.createElement("div");r.id="tutorial-overlay",r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const n=()=>{var c,m,x;const d=e[o],l=o===e.length-1,s=Math.round((o+1)/e.length*100);r.innerHTML=`
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
        ${d.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${_r}icons/${d.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,r.querySelectorAll("ul,ol").forEach(y=>{y.style.paddingLeft="20px",y.style.marginTop="6px",y.style.marginBottom="6px"}),r.querySelectorAll("li").forEach(y=>{y.style.marginBottom="4px"}),r.querySelectorAll("p").forEach(y=>{y.style.marginBottom="8px"}),(c=r.querySelector("#tuto-prev"))==null||c.addEventListener("click",()=>{o--,n()}),(m=r.querySelector("#tuto-next"))==null||m.addEventListener("click",()=>{l?a():(o++,n())}),(x=r.querySelector("#tuto-skip"))==null||x.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{r.remove(),t!=null&&t.id&&await h.from("users").update({tutorial_done:!0}).eq("id",t.id),i==null||i()};document.body.appendChild(r),n()}async function fn(t,e,i){let o=[];const{data:r,error:n}=await h.rpc("get_tutorial_steps");if(!n&&(r==null?void 0:r.length)>0)o=r;else{const{data:d,error:l}=await h.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(d==null?void 0:d.length)>0?o=d:i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3)}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):pn;un(t,a,()=>e("settings"))}async function So(t,e,i){if(!t||t.tutorial_done)return;let o=[];const{data:r,error:n}=await h.rpc("get_tutorial_steps");if(!n&&(r==null?void 0:r.length)>0)o=r,console.log(`[Tutorial] RPC OK → ${o.length} étapes`);else{const{data:d,error:l}=await h.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(d==null?void 0:d.length)>0?(o=d,console.log(`[Tutorial] Direct OK → ${o.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${n==null?void 0:n.message}, Direct: ${l==null?void 0:l.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):pn;un(t,a,()=>e("boosters"))}async function mn(t,e){var b,u,w;const{state:i,navigate:o,toast:r}=e,n=ri(),a=eo(),d=(b=i==null?void 0:i.profile)==null?void 0:b.is_admin,l="2026.08.02-1743";t.innerHTML=`
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
          <button data-theme-choice="club" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${n==="club"?"#D4A017":"var(--tile-border)"};background:${n==="club"?"rgba(212,160,23,0.12)":"transparent"}">
            <div style="font-size:22px;margin-bottom:6px">🛡️</div>
            <div style="font-size:13px;font-weight:700;color:var(--tile-fg-on-page)">Club</div>
          </button>
          <button data-theme-choice="dark" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${n==="dark"?"#D4A017":"var(--tile-border)"};background:${n==="dark"?"rgba(212,160,23,0.12)":"transparent"}">
            <div style="font-size:22px;margin-bottom:6px">🌙</div>
            <div style="font-size:13px;font-weight:700;color:var(--tile-fg-on-page)">Sombre</div>
          </button>
          <button data-theme-choice="light" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${n==="light"?"#D4A017":"var(--tile-border)"};background:${n==="light"?"rgba(212,160,23,0.12)":"transparent"}">
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
  </div>`,t.querySelectorAll("[data-theme-choice]").forEach(v=>{v.addEventListener("click",()=>{Oo(v.dataset.themeChoice),mn(t,e)})});const s=t.querySelector("#team-color1"),c=t.querySelector("#team-color2"),m=t.querySelector("#team-preview"),x=()=>{m&&(m.style.background=`linear-gradient(135deg, ${s.value} 50%, ${c.value} 50%)`)};x(),s==null||s.addEventListener("input",x),c==null||c.addEventListener("input",x),(u=t.querySelector("#team-save"))==null||u.addEventListener("click",async()=>{const v=t.querySelector("#team-error"),E=t.querySelector("#team-save"),p=t.querySelector("#team-club-name").value.trim();if(p.length<2){v.textContent="Nom de club trop court.";return}E.disabled=!0,E.textContent="⏳ Enregistrement...",v.textContent="";const{error:T}=await h.from("users").update({club_name:p,club_color1:s.value,club_color2:c.value}).eq("id",i.profile.id);if(E.disabled=!1,E.textContent="💾 Enregistrer",T){v.textContent=T.message;return}i.profile.club_name=p,i.profile.club_color1=s.value,i.profile.club_color2=c.value,v.style.color="#2ecc71",v.textContent="✅ Modifications enregistrées.",ri()==="club"&&Oo("club")});const y=t.querySelector("#volume-slider"),g=t.querySelector("#volume-label");let f=null;y.addEventListener("input",()=>{Nn(Number(y.value)),g.textContent=`${y.value}%`,f&&(f.volume=Math.max(0,Math.min(1,Number(y.value)/100)))}),t.querySelector("#volume-test").addEventListener("click",()=>{f=io("/sounds/match-opening.mp3",1)}),(w=t.querySelector("#settings-tutorial"))==null||w.addEventListener("click",()=>{fn(i.profile,o,r)}),t.querySelector("#settings-logout").addEventListener("click",async()=>{await h.auth.signOut(),window.location.reload()})}const kr={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Qt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Io=["GK","DEF","MIL","ATT"],$r=["Tous","GK","DEF","MIL","ATT"],Er={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function To(t){const e=t.player;return e?(e.rarity,Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)):null}function zr(t){return t.length?t.reduce((e,i)=>To(i)>To(e)?i:e,t[0]):t[0]}const Lr={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function mi(t,e){return t&&Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Bi(t,e=""){const i=t.player;if(!i)return"";const o=t.evolution_bonus||0,r={...i,_evolution_bonus:o},n=e?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${e}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${t.id}">
    ${n}
    ${qe(r,{width:140})}
  </div>`}function Ao(t){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${qe(t,{width:140})}
  </div>`}async function Sr(t,e){const{state:i,navigate:o,toast:r,openModal:n,closeModal:a}=e;Kt(o,i.profile,"cards","/icons/",r),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await h.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await h.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),s=(d||[]).filter(k=>k.card_type==="player"&&k.player),c=(d||[]).filter(k=>k.card_type==="game_changer"),m=(d||[]).filter(k=>k.card_type==="formation"),x=(d||[]).filter(k=>k.card_type==="stadium"),{data:y}=await h.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(y||[]).forEach(k=>{g[k.name]=k});const{data:f}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),b={};(f||[]).forEach(k=>{b[k.id]=k}),x.forEach(k=>{k.stadium_def&&(b[k.stadium_id]=k.stadium_def)});const u=Object.keys(Xi),w=Object.keys(Oe),v={};s.forEach(k=>{const q=k.player.id;v[q]=(v[q]||0)+1}),new Set(Object.keys(v).map(k=>String(k)));const E=new Set(m.map(k=>k.formation)),p=new Set(c.map(k=>k.gc_type));let T="player",I="Tous",M="",H=!1,ne=!1,te=new Set,X=new Set,$="job";function N(k){return k.job==="GK"?Number(k.note_g)||0:k.job==="DEF"?Number(k.note_d)||0:k.job==="MIL"?Number(k.note_m)||0:Number(k.note_a)||0}function ae(k,q){return $==="note_desc"?[...k].sort((K,O)=>N(q(O))-N(q(K))):$==="note_asc"?[...k].sort((K,O)=>N(q(K))-N(q(O))):[...k].sort((K,O)=>{const V=q(K),G=q(O),W=Io.indexOf(V.job),ce=Io.indexOf(G.job);return W!==ce?W-ce:(V.surname_real||"").localeCompare(G.surname_real||"")})}function j(){return ae(s,k=>k.player)}function de(){return ae(l||[],k=>k)}function ve(k){return(!te.size||te.has(k.country_code))&&(!X.size||X.has(k.club_id))}function C(){return j().filter(k=>{const q=k.player,K=I==="Tous"||q.job===I,O=!M||`${q.firstname} ${q.surname_real}`.toLowerCase().includes(M);return K&&O&&ve(q)})}function S(){return de().filter(k=>{const q=I==="Tous"||k.job===I,K=!M||`${k.firstname} ${k.surname_real}`.toLowerCase().includes(M);return q&&K&&ve(k)})}t.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--tile-border);background:var(--tile-bg)">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${T==="player"?"var(--green)":"transparent"};
        color:${T==="player"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${s.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${T==="formation"?"var(--green)":"transparent"};
        color:${T==="formation"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${m.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${T==="gc"?"var(--green)":"transparent"};
        color:${T==="gc"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${T==="stadium"?"#4FC3F7":"transparent"};
        color:${T==="stadium"?"#4FC3F7":"var(--tile-fg-dim)"}">
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
  </div>`,function(q){const K=document.getElementById(q);if(!K)return;K.addEventListener("wheel",se=>{Math.abs(se.deltaY)<=Math.abs(se.deltaX)||(se.preventDefault(),K.scrollLeft+=se.deltaY)},{passive:!1});let O=!1,V=0,G=0,W=!1,ce=!1;K.addEventListener("mousedown",se=>{O=!0,W=!1,V=se.pageX,G=K.scrollLeft}),window.addEventListener("mouseup",()=>{O=!1,W&&(K.style.cursor="",ce=!0),W=!1}),window.addEventListener("mousemove",se=>{if(!O)return;const ue=se.pageX-V;!W&&Math.abs(ue)<6||(W=!0,K.style.cursor="grabbing",se.preventDefault(),K.scrollLeft=G-ue)}),K.addEventListener("click",se=>{ce&&(se.stopPropagation(),se.preventDefault(),ce=!1)},!0)}("col-grid");function Y(){const k=document.getElementById("col-filters");k&&(T==="player"?(k.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px;background:#fff;color:#1a1a1a" value="${M}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${$r.map(q=>`
            <button class="filter-btn" data-job="${q}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${q===I?"var(--green)":"var(--tile-border)"};
                background:${q===I?"var(--green)":"#fff"};
                color:${q===I?"#fff":"#555"}">
              ${q}
            </button>`).join("")}
          <button id="sort-note-btn" title="Trier par note"
            style="flex-shrink:0;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${$!=="job"?"var(--green)":"var(--tile-border)"};
              background:${$!=="job"?"var(--green)":"#fff"};
              color:${$!=="job"?"#fff":"#555"}">
            ⇅ Note${$==="note_desc"?" ↓":$==="note_asc"?" ↑":""}
          </button>
          <button id="country-filter-btn" title="Filtrer par pays"
            style="flex-shrink:0;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${te.size?"var(--green)":"var(--tile-border)"};
              background:${te.size?"var(--green)":"#fff"};
              color:${te.size?"#fff":"#555"}">
            🌍${te.size?` (${te.size})`:""}
          </button>
          <button id="club-filter-btn" title="Filtrer par club"
            style="flex-shrink:0;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${X.size?"var(--green)":"var(--tile-border)"};
              background:${X.size?"var(--green)":"#fff"};
              color:${X.size?"#fff":"#555"}">
            🏟️${X.size?` (${X.size})`:""}
          </button>
          <button id="dupes-only-btn" title="Voir les cartes en plusieurs exemplaires"
            style="flex-shrink:0;margin-left:auto;padding:5px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${ne?"var(--yellow)":"var(--tile-border)"};
              background:${ne?"var(--yellow)":"#fff"};
              color:${ne?"#111":"#555"}">
            🗂️×2
          </button>
          <button id="show-all-btn"
            style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${H?"var(--yellow)":"var(--tile-border)"};
              background:${H?"var(--yellow)":"#fff"};
              color:${H?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${H?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",q=>{M=q.target.value.toLowerCase(),ee()}),t.querySelectorAll(".filter-btn").forEach(q=>{q.addEventListener("click",()=>{I=q.dataset.job,Y(),ee()})}),document.getElementById("dupes-only-btn").addEventListener("click",()=>{ne=!ne,Y(),ee()}),document.getElementById("show-all-btn").addEventListener("click",()=>{H=!H,Y(),ee()}),document.getElementById("sort-note-btn").addEventListener("click",()=>{$=$==="job"?"note_desc":$==="note_desc"?"note_asc":"job",Y(),ee()}),document.getElementById("country-filter-btn").addEventListener("click",()=>{R("country","🌍 Filtrer par pays",e)}),document.getElementById("club-filter-btn").addEventListener("click",()=>{R("club","🏟️ Filtrer par club",e)})):(k.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${H?"var(--yellow)":"var(--tile-border)"};
              background:${H?"var(--yellow)":"#fff"};
              color:${H?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${H?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{H=!H,Y(),ee()})))}function R(k,q,K){var ue,Se,Ae;const O=k==="country",V=O?te:X,G=H?l||[]:s.map(xe=>xe.player);let W;if(O){const xe=new Map;G.forEach(we=>{we!=null&&we.country_code&&!xe.has(we.country_code)&&xe.set(we.country_code,we.country_code)}),W=[...xe.keys()].sort().map(we=>({value:we,label:we}))}else{const xe=new Map;G.forEach(we=>{var _;we!=null&&we.club_id&&!xe.has(we.club_id)&&xe.set(we.club_id,((_=we.clubs)==null?void 0:_.encoded_name)||we.club_id)}),W=[...xe.entries()].sort((we,_)=>we[1].localeCompare(_[1])).map(([we,_])=>({value:we,label:_}))}const ce=`
      <div style="display:flex;gap:8px;margin-bottom:10px">
        <button id="mf-all"  class="btn btn-ghost" style="flex:1">Tout cocher</button>
        <button id="mf-none" class="btn btn-ghost" style="flex:1">Tout décocher</button>
      </div>
      <div style="max-height:340px;overflow-y:auto;display:flex;flex-direction:column;gap:2px">
        ${W.length?W.map(xe=>`
          <label style="display:flex;align-items:center;gap:8px;padding:6px 4px;font-size:14px;color:#1a1a1a;cursor:pointer">
            <input type="checkbox" class="mf-check" value="${xe.value}" ${V.has(xe.value)?"checked":""}>
            <span>${xe.label}</span>
          </label>`).join(""):'<div style="color:#999;font-size:13px;text-align:center;padding:16px">Aucune option disponible.</div>'}
      </div>`;K.openModal(q,ce,'<button class="btn btn-primary" id="mf-apply" style="width:100%">Appliquer</button>'),(ue=document.getElementById("mf-all"))==null||ue.addEventListener("click",()=>{document.querySelectorAll(".mf-check").forEach(xe=>xe.checked=!0)}),(Se=document.getElementById("mf-none"))==null||Se.addEventListener("click",()=>{document.querySelectorAll(".mf-check").forEach(xe=>xe.checked=!1)}),(Ae=document.getElementById("mf-apply"))==null||Ae.addEventListener("click",()=>{V.clear(),document.querySelectorAll(".mf-check:checked").forEach(xe=>V.add(xe.value)),K.closeModal(),Y(),ee()})}function ee(){const k=document.getElementById("col-grid");k&&(T==="player"?Be(k):T==="formation"?ye(k):T==="stadium"?ke(k):me(k))}function fe(k,q,K,O,V,G=0){const W=document.getElementById("col-grid"),ce=document.getElementById("col-big");if(!W||!ce)return;var se=0;function ue(){var B;const Se=window.innerWidth>=768,Ae=document.getElementById("col-big"),xe=document.getElementById("col-gap"),we=((B=document.getElementById("col-grid"))==null?void 0:B.parentElement)||null,_=Ae?Ae.closest(".page"):null;if(Ae&&we&&_){let L=0;Array.from(_.children).forEach(function(Z){Z!==Ae&&Z!==we&&Z!==xe&&(L+=Z.offsetHeight)});const P=Math.max(0,_.clientHeight-L),D=Math.round(P*(G/100)),F=Math.max(0,P-D),U=Se?50/71:45/63,J=Math.round(F*U),oe=Math.max(0,F-J);xe&&(xe.style.height=D+"px"),Ae.style.flex="none",Ae.style.height=J+"px",Ae.style.minHeight="0",we.style.flex="none",we.style.height=oe+"px",we.style.minHeight="0",we.style.display="flex",we.style.overflow="hidden"}const z=document.getElementById("col-grid");z&&(z.style.height="100%",z.style.flexShrink="0",z.style.overflowX="auto",z.style.overflowY="hidden",z.style.alignItems="center",z.style.width="100%"),ce.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+q(k[se])+"</div>";var A=ce.querySelector("[data-card-id],[data-form-id],[data-gc-id]");A&&A.addEventListener("click",function(){O(k[se])}),requestAnimationFrame(function(){var L=document.getElementById("big-card-inner");if(!(!L||!ce)){var P=ce.clientHeight,D=ce.clientWidth-16,F=L.offsetHeight,U=L.offsetWidth;if(F>0&&U>0&&P>40){var J=Math.min(P/F,D/U);L.style.transform="scale("+J.toFixed(3)+")",L.style.transformOrigin="center center"}}}),W.innerHTML=k.map(function(L,P){var D=P===se,F="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(D?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+P+'" style="'+F+'">'+K(L,D)+"</div>"}).join(""),W.querySelectorAll(".col-mini-item").forEach(function(L){L.addEventListener("click",function(){se=Number(L.dataset.idx),ue(),L.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var L=z?z.clientHeight:0,P=W.querySelector(".col-mini-item > div");if(!(!L||!P)){var D=P.style.zoom;P.style.zoom="1";var F=P.offsetHeight;if(P.style.zoom=D,!(F<=0)){var U=L/F;W.querySelectorAll(".col-mini-item > div").forEach(function(J){J.style.zoom=U.toFixed(4)})}}})}ue()}function he(k,q){var K=window.innerWidth>=768?.76:.54,O;if(!k||k._fake){var V=k?k.player:null;if(!V)return"";O=Ao(V)}else O=Bi(k,"");var G=k&&!k._fake?v[k.player&&k.player.id]||1:0,W=G>0?'<div style="position:absolute;top:6px;right:6px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:11px;font-weight:900;padding:2px 7px;z-index:3;box-shadow:0 1px 4px rgba(0,0,0,0.4)">×'+G+"</div>":"";return'<div style="display:inline-block;position:relative;zoom:'+K+';pointer-events:none;line-height:0">'+W+O+"</div>"}function be(k,q,K){var O=K>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+K+"</div>":"",V=!!q,G=ai(k,kt[k],{width:160});return V||(G='<div style="filter:grayscale(1);opacity:0.5">'+G+"</div>"),"<div "+(q?'data-form-id="'+q.id+'"':"")+' style="position:relative;cursor:pointer">'+O+G+"</div>"}function je(k,q){var K=window.innerWidth>=768?.76:.54,O=ai(k,kt[k],{width:140});return q||(O='<div style="filter:grayscale(1);opacity:0.45">'+O+"</div>"),'<div style="display:inline-block;zoom:'+K+';line-height:0;pointer-events:none">'+O+"</div>"}function Be(k){if(H){const q=S();if(!q.length){k.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const K=q.map(O=>s.find(V=>V.player.id===O.id)||{_fake:!0,player:O,id:"fake-"+O.id});fe(K,O=>O._fake?Ao(O.player):Bi(O,""),O=>O._fake?he({player:O.player,id:"x",_fake:!0}):he(O),O=>{O._fake||Mo(O,s,v,e)})}else{const q=C();if(!q.length){k.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const K={};q.forEach(V=>{const G=V.player.id;K[G]||(K[G]=[]),K[G].push(V)});const O=Object.values(K).map(V=>zr(V)).filter(V=>!ne||(v[V.player.id]||1)>1);if(ne&&!O.length){k.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte en plusieurs exemplaires.</div>';return}fe(O,V=>{const G=v[V.player.id]||1,W=G>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${G}</div>`:"",se=s.filter(ue=>ue.player.id===V.player.id&&ue.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Bi(V,W+se)},V=>he(V),V=>Mo(V,s,v,e))}}function ye(k){const q=H?u:[...E];if(!q.length){k.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const K=q.map(O=>({formation:O,card:m.find(V=>V.formation===O)||null,owned:E.has(O)}));fe(K,({formation:O,card:V,owned:G})=>be(O,G?V:null,G?m.filter(W=>W.formation===O).length:0),({formation:O,owned:V})=>je(O,V),({card:O,owned:V})=>{V&&O&&Tr(O,m,e,n)},"#1A6B3C",5)}function me(k){const q=Object.keys(g),K=H?q.length?q:w:[...p];if(!K.length){k.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const O=K.map(V=>({type:V,gc:Oe[V]||{icon:"⚡",desc:""},def:g[V]||null,owned:p.has(V),card:c.find(G=>G.gc_type===V)||null}));fe(O,({type:V,gc:G,def:W,owned:ce,card:se})=>{var z;const ue=(W==null?void 0:W.name)||V,Se=ce?c.filter(A=>A.gc_type===V).length:0,Ae=Se>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Se}</div>`:"",xe=(W==null?void 0:W.effect)||G.desc||"",we=W!=null&&W.image_url?`/icons/${W.image_url}`:((z=W==null?void 0:W.club)==null?void 0:z.logo_url)||(W!=null&&W.country_code?`https://flagsapi.com/${W.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);let _=it(ue,we,G.icon,xe,{width:160,onClick:ce});return ce||(_=`<div style="filter:grayscale(1);opacity:0.5">${_}</div>`),`<div ${ce&&se?`data-gc-id="${se.id}" data-gc-type="${V}"`:""} style="position:relative">${Ae}${_}</div>`},({type:V,gc:G,def:W,owned:ce})=>{const se=window.innerWidth>=768?.76:.54,ue=(W==null?void 0:W.name)||V,Se=(W==null?void 0:W.effect)||G.desc||"",Ae=W!=null&&W.image_url?`/icons/${W.image_url}`:null;let xe=it(ue,Ae,G.icon,Se,{width:140});return ce||(xe=`<div style="filter:grayscale(1);opacity:0.45">${xe}</div>`),`<div style="display:inline-block;zoom:${se};line-height:0;pointer-events:none">${xe}</div>`},({type:V,owned:G,def:W})=>{G&&Ir(V,W,n)},"#7a28b8",5)}function ke(k){const q="#4FC3F7",K="/";if(!x.length){k.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const O={};x.forEach(G=>{const W=G.stadium_id||"?";(O[W]=O[W]||[]).push(G)});const V=Object.entries(O).map(([G,W])=>({sid:G,def:b[G]||null,count:W.length,card:W[0]}));fe(V,({def:G,count:W})=>{var xe,we;const ce=(G==null?void 0:G.name)||"?",se=((xe=G==null?void 0:G.club)==null?void 0:xe.encoded_name)||(G==null?void 0:G.country_code)||"—",ue=G!=null&&G.image_url?`${K}icons/${G.image_url}`:((we=G==null?void 0:G.club)==null?void 0:we.logo_url)||(G!=null&&G.country_code?`https://flagsapi.com/${G.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Se=W>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${W}</div>`:"",Ae=`${se}<br>+10 ⭐ joueurs alliés`;return`<div style="position:relative">${Se}${Ot(ce,ue,Ae,{width:160})}</div>`},({def:G})=>{var Ae,xe;const W=window.innerWidth>=768?.76:.54,ce=(G==null?void 0:G.name)||"?",se=((Ae=G==null?void 0:G.club)==null?void 0:Ae.encoded_name)||(G==null?void 0:G.country_code)||"—",ue=G!=null&&G.image_url?`${K}icons/${G.image_url}`:((xe=G==null?void 0:G.club)==null?void 0:xe.logo_url)||(G!=null&&G.country_code?`https://flagsapi.com/${G.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Se=`${se}<br>+10 ⭐`;return`<div style="display:inline-block;zoom:${W};line-height:0;pointer-events:none">${Ot(ce,ue,Se,{width:140})}</div>`},null,q,5)}t.querySelectorAll(".col-tab-btn").forEach(k=>{k.addEventListener("click",()=>{T=k.dataset.tab,I="Tous",M="",H=!1,t.querySelectorAll(".col-tab-btn").forEach(q=>{const K=q.dataset.tab===T;q.style.borderBottomColor=K?"var(--green)":"transparent",q.style.color=K?"var(--green)":"var(--tile-fg-dim)"}),Y(),ee()})}),Y(),ee()}function Ir(t,e,i){const o=Oe[t]||{icon:"⚡",desc:"Effet spécial."},r=(e==null?void 0:e.name)||t,n=(e==null?void 0:e.effect)||o.desc,a=e!=null&&e.image_url?`/icons/${e.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      ${it(r,a,o.icon,n,{width:200})}
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const gi=1e3;function Tr(t,e,i,o){var g,f,b;const{state:r,toast:n,closeModal:a,navigate:d,refreshProfile:l}=i,s=t.formation,c={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function m(){const u=kt[s]||{},w=Xi[s]||[],v=290,E=360,p=20;function T(M){const H=u[M];return H?{x:H.x*v,y:H.y*E}:null}let I=`<svg width="${v}" height="${E}" viewBox="0 0 ${v} ${E}" xmlns="http://www.w3.org/2000/svg">`;for(const[M,H]of w){const ne=T(M),te=T(H);!ne||!te||(I+=`<line x1="${ne.x}" y1="${ne.y}" x2="${te.x}" y2="${te.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const M of Object.keys(u)){const H=T(M);if(!H)continue;const ne=M.replace(/\d+/,""),te=c[ne]||"#555";I+=`<circle cx="${H.x}" cy="${H.y}" r="${p}" fill="${te}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,I+=`<text x="${H.x}" y="${H.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ne}</text>`}return I+="</svg>",I}const x=e.filter(u=>u.formation===s);x.length;const y=!t.is_for_sale;o(`Formation ${s}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${m()}
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${gi}"
          style="flex:1;padding:8px;border:1.5px solid var(--tile-border);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${t.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(g=document.getElementById("direct-sell-form-btn"))==null||g.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${s} pour ${gi.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const u=x.find(v=>!v.is_for_sale)||x[0];if(!u){n("Aucune carte à vendre","error");return}await h.from("market_listings").delete().eq("card_id",u.id),await h.from("transfer_history").delete().eq("card_id",u.id);const{error:w}=await h.from("cards").delete().eq("id",u.id);if(w){n(w.message,"error");return}await h.from("users").update({credits:(r.profile.credits||0)+gi}).eq("id",r.profile.id),await l(),n(`+${gi.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),d("collection")}),(f=document.getElementById("market-sell-form-btn"))==null||f.addEventListener("click",async()=>{const u=parseInt(document.getElementById("sell-price-form").value);if(!u||u<1){n("Prix invalide","error");return}await h.from("cards").update({is_for_sale:!0,sale_price:u}).eq("id",t.id),await h.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:u}),n("Carte mise en vente sur le marché !","success"),a(),d("collection")}),(b=document.getElementById("cancel-sell-form-btn"))==null||b.addEventListener("click",async()=>{await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await h.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),a(),d("collection")})}async function Mo(t,e,i,o){var Y,R,ee,fe,he,be,je,Be,ye,me,ke;const{state:r,toast:n,openModal:a,closeModal:d,navigate:l,refreshProfile:s}=o,c=t.player,m=e.filter(k=>k.player.id===c.id),x=m.length,y=t.evolution_bonus||0,g=Math.max((Number(c.note_g)||0)+(c.job==="GK"||c.job2==="GK"?y:0),(Number(c.note_d)||0)+(c.job==="DEF"||c.job2==="DEF"?y:0),(Number(c.note_m)||0)+(c.job==="MIL"||c.job2==="MIL"?y:0),(Number(c.note_a)||0)+(c.job==="ATT"||c.job2==="ATT"?y:0)),f=c.rarity||"normal",{data:b}=await h.from("sell_price_configs").select("*").eq("rarity",f).lte("note_min",g).gte("note_max",g).order("note_min",{ascending:!1}).limit(1),u=((Y=b==null?void 0:b[0])==null?void 0:Y.price)??Er[f]??1e3,w=((R=b==null?void 0:b[0])==null?void 0:R.price_min)??null,v=((ee=b==null?void 0:b[0])==null?void 0:ee.price_max)??null;Ct(c);const E=mi(c,c.job)+y,p=c.job2?mi(c,c.job2)+(mi(c,c.job2)>0?y:0):null;Qt[c.job],c.job2&&Qt[c.job2];const T=kr[c.rarity]||"#ccc",I=Lr[c.country_code]||c.country_code||"",M=t.evolution_bonus||0,ne=E+M,te=p||0,X=te>0?te+M:0,$=m.map(k=>k.id);let N={};if($.length){const{data:k}=await h.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",$).order("transferred_at",{ascending:!0});(k||[]).forEach(q=>{N[q.card_id]||(N[q.card_id]=[]),N[q.card_id].push(q)})}const ae=$.length?`
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
          ${w!==null&&v!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${w.toLocaleString("fr")}</b> – <b>${v.toLocaleString("fr")}</b> cr.
          </div>`:""}
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <input type="number" id="single-sell-price" min="1" placeholder="Prix"
              value="${w||c.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="single-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
          <button id="single-direct-sell-btn" class="btn btn-ghost" style="width:100%;border-color:#1A6B3C;color:#1A6B3C;font-weight:700">
            ⚡ Vente directe immédiate (${(w??u).toLocaleString("fr")} cr.)
          </button>
        </div>
      `}

      ${x-1>0?`<div style="font-size:13px;font-weight:700;margin-bottom:10px">🗂️ Copies (${x-1})</div>`:`
        <div style="font-size:12px;color:#aaa;font-style:italic">Aucune autre copie.</div>
      `}
      <!-- Grille de mini-cartes (copies uniquement, l'exemplaire 1 = carte principale affichée en haut) -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${m.filter(k=>k.id!==t.id).map((k,q)=>{const K=N[k.id]||[],O=k.is_for_sale,V=K.length?K[K.length-1]:null,G=k.evolution_bonus||0,W=V?V.source==="booster"?"Booster":V.price?V.price.toLocaleString("fr")+" cr.":"—":"—",ce=V?new Date(V.transferred_at).toLocaleDateString("fr",{day:"2-digit",month:"2-digit",year:"numeric"}):"",se=80,ue=Math.round(se*657/507),Se=qe({...c,_evolution_bonus:G},{width:se});return`
            <div class="exemplaire-row" data-card-id="${k.id}" data-card-idx="${q}"
              style="position:relative;cursor:${O?"not-allowed":"pointer"};opacity:${O?.55:1};transition:transform .1s">
              <!-- Checkbox cachée -->
              <input type="checkbox" class="expl-check"
                data-id="${k.id}" data-evo="${G}" data-note="${mi(c,c.job)}"
                ${O?"disabled":""}
                style="display:none">
              <!-- Wrapper exactement aux dimensions de la carte -->
              <div class="expl-mini-card" style="position:relative;width:${se}px;height:${ue}px;border-radius:8px;overflow:hidden">
                ${Se}
                <!-- Overlay vert sélection — couvre toute la carte -->
                <div class="expl-sel-overlay" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(26,107,60,0.38);pointer-events:none;z-index:10;box-shadow:inset 0 0 0 3px #1A6B3C;border-radius:8px"></div>
                <!-- Checkmark -->
                <div class="expl-sel-check" style="display:none;position:absolute;top:5px;left:5px;width:20px;height:20px;background:#1A6B3C;border-radius:50%;z-index:11;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:900">✓</div>
                ${O?'<div style="position:absolute;top:0;right:0;background:#e67e22;color:#fff;font-size:6px;font-weight:900;padding:2px 4px;border-radius:0 6px 0 4px;z-index:12">VENTE</div>':""}
              </div>
              <!-- Source + date -->
              <div style="font-size:9px;color:#888;text-align:center;margin-top:3px;line-height:1.3">
                ${W}${ce?`<br>${ce}`:""}
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
              ${(t.evolution_bonus||0)>0?`+${t.evolution_bonus} appliqué${t.evolution_bonus>1?"s":""} · Note : ${ne}${c.job2&&te>0?` / ${X}`:""}`:`Note actuelle : ${ne}${c.job2&&te>0?` / ${X}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${x<=1?"#ccc":"#1A6B3C"};border-color:${x<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${x<=1?"not-allowed":"pointer"}"
            ${x<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${`
        <div style="border-top:1px solid #d1fae5;padding-top:8px">
          <div style="font-size:11px;color:#555;margin-bottom:6px">Marché des transferts (prix par carte)</div>
          ${w!==null&&v!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${w.toLocaleString("fr")}</b> – <b>${v.toLocaleString("fr")}</b> cr. / carte
          </div>`:""}
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${w||c.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
          <button id="market-direct-sell-btn" class="btn btn-ghost" style="width:100%;border-color:#1A6B3C;color:#1A6B3C;font-weight:700">
            ⚡ Vente directe immédiate (${(w??u).toLocaleString("fr")} cr./carte)
          </button>
        </div>`}
      </div>
    </div>`:"";a(`${c.firstname} ${c.surname_real}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${qe({...c,_evolution_bonus:y},{width:160})}


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
            <div style="font-weight:700;font-size:13px;color:#333">${I||"—"}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">CLUB</div>
            <div style="font-weight:700;font-size:13px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${((fe=c.clubs)==null?void 0:fe.encoded_name)||"—"}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">POSTE PRINCIPAL</div>
            <div style="font-weight:700;font-size:13px;color:${Qt[c.job]||"#333"}">${c.job}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">POSTE SECONDAIRE</div>
            <div style="font-weight:700;font-size:13px;color:${c.job2?Qt[c.job2]||"#333":"#bbb"}">${c.job2||"Aucun"}</div>
          </div>
        </div>

        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",c.note_g],["DEF",c.note_d],["MIL",c.note_m],["ATT",c.note_a]].map(([k,q])=>{const K=Qt[k],O=k==="GK"?"#fff":K,V=k===c.job||k===c.job2,G=(Number(q)||0)+(V&&M>0?M:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${K};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${O};font-family:Arial Black,Arial;line-height:1">${G}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${O}">${k}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:900;font-size:18px;color:#1A6B3C">×${x}</div>
        </div>
      </div>
    </div>
    ${ae}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(he=document.getElementById("close-detail"))==null||he.addEventListener("click",d);let j=new Set;const de=c.rarity==="pepite"?1.3:c.rarity==="papyte"?.7:1;function ve(){let k=0;return document.querySelectorAll(".expl-check:checked").forEach(q=>{if(q.dataset.id===t.id)return;const O=Number(q.dataset.evo)||0,V=Number(q.dataset.note)||0;k+=V+O}),Math.round(k*de)}const C=()=>{const k=j.size,q=document.getElementById("sell-action-panel");if(!q)return;q.style.display=k>0?"block":"none",document.getElementById("sell-selected-count").textContent=k;const K=document.getElementById("evolve-btn");if(K){const O=ve();K.textContent=O>0?`⬆️ Évoluer (+${O})`:"⬆️ Évoluer"}};document.querySelectorAll(".expl-check").forEach(k=>{k.addEventListener("change",()=>{const q=k.dataset.id;k.checked?j.add(q):j.delete(q);const K=k.closest(".exemplaire-row");if(K){const O=K.querySelector(".expl-sel-overlay"),V=K.querySelector(".expl-sel-check");O&&(O.style.display=k.checked?"block":"none"),V&&(V.style.display=k.checked?"flex":"none"),K.style.transform=k.checked?"scale(1.05)":"scale(1)"}C()})}),document.querySelectorAll(".exemplaire-row").forEach(k=>{k.addEventListener("click",q=>{if(q.target.tagName==="INPUT")return;const K=k.querySelector(".expl-check");K&&!K.disabled&&(K.checked=!K.checked,K.dispatchEvent(new Event("change")))})}),(be=document.getElementById("evolve-btn"))==null||be.addEventListener("click",async()=>{if(x<=1)return;const k=[...j];if(!k.length)return;if(j.has(t.id)){const se=document.createElement("div");se.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",se.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(se),se.querySelector("#err-close").addEventListener("click",()=>se.remove()),se.addEventListener("click",ue=>{ue.target===se&&se.remove()});return}const q=k.filter(se=>se!==t.id);if(!q.length){n("Sélectionne des copies à sacrifier","warning");return}const K=q.reduce((se,ue)=>{const Se=document.querySelector(`.expl-check[data-id="${ue}"]`),Ae=Se&&Number(Se.dataset.evo)||0,xe=Se&&Number(Se.dataset.note)||0;return se+xe+Ae},0),O=Math.round(K*de),V=c.rarity==="pepite"?" (+30% pépite ✨)":c.rarity==="papyte"?" (-30% papyte)":"";if(!await new Promise(se=>{const ue=document.createElement("div");ue.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ue.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${c.firstname} ${c.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${q.length}</strong> copie${q.length>1?"s":""} sacrifiée${q.length>1?"s":""}<br>
            ➕ Brut : <strong>+${K}</strong>${V?`<span style="font-size:11px;color:#888"> ${V}</span>`:""}<br>
            ⬆️ Bonus final : <strong style="color:#1A6B3C">+${O}</strong><br>
            📈 Évolution : <strong>${t.evolution_bonus||0}</strong> → <strong style="color:#1A6B3C">${(t.evolution_bonus||0)+O}</strong><br>
            📊 Note finale : <strong>${E}</strong> → <strong style="color:#1A6B3C">${E+O}</strong>
            ${p&&p>0?`<br>📊 Note 2 finale : <strong>${p}</strong> → <strong style="color:#1A6B3C">${p+O}</strong>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(ue),ue.querySelector("#sac-cancel").addEventListener("click",()=>{ue.remove(),se(!1)}),ue.querySelector("#sac-ok").addEventListener("click",()=>{ue.remove(),se(!0)}),ue.addEventListener("click",Se=>{Se.target===ue&&(ue.remove(),se(!1))})}))return;if(q.length){await h.from("market_listings").delete().in("card_id",q),await h.from("deck_cards").delete().in("card_id",q),await h.from("transfer_history").delete().in("card_id",q),await h.from("decks").update({stadium_card_id:null}).in("stadium_card_id",q);const{error:se}=await h.from("cards").delete().in("id",q);if(se){n("Erreur suppression : "+se.message,"error");return}}const W=(t.evolution_bonus||0)+O,{error:ce}=await h.from("cards").update({evolution_bonus:W}).eq("id",t.id);if(ce){n("Erreur évolution : "+ce.message,"error");return}n(`⬆️ ${c.firstname} ${c.surname_real} : note ${E} → ${E+W} (+${O}) !`,"success",4e3),d(),l("collection")});async function S(k){const{data:q}=await h.from("sell_price_configs").select("price_min, price_max").eq("rarity",c.rarity).lte("note_min",E).gte("note_max",E).order("note_max",{ascending:!0}).limit(1).maybeSingle();return q?k<q.price_min||k>q.price_max?{ok:!1,min:q.price_min,max:q.price_max}:{ok:!0}:{ok:!0}}(je=document.getElementById("market-sell-btn"))==null||je.addEventListener("click",async()=>{var W;const k=[...j];if(!k.length){n("Sélectionne au moins un exemplaire","warning");return}const q=parseInt((W=document.getElementById("sell-market-price"))==null?void 0:W.value);if(!q||q<1){n("Prix invalide","error");return}const K=await S(q);if(!K.ok){n(`Prix hors grille : entre ${K.min.toLocaleString("fr")} et ${K.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:O}=await h.from("cards").update({is_for_sale:!0,sale_price:q}).in("id",k);if(O){n(O.message,"error");return}const V=k.map(ce=>({seller_id:r.profile.id,card_id:ce,price:q,status:"active"})),{error:G}=await h.from("market_listings").insert(V);G&&console.warn("[Market] insert listings:",G.message),n(`${k.length} carte${k.length>1?"s":""} mise${k.length>1?"s":""} en vente à ${q.toLocaleString("fr")} cr. chacune !`,"success"),d(),l("collection")}),(Be=document.getElementById("single-sell-btn"))==null||Be.addEventListener("click",async()=>{var V;const k=parseInt((V=document.getElementById("single-sell-price"))==null?void 0:V.value);if(!k||k<1){n("Prix invalide","error");return}const q=await S(k);if(!q.ok){n(`Prix hors grille : entre ${q.min.toLocaleString("fr")} et ${q.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:K}=await h.from("cards").update({is_for_sale:!0,sale_price:k}).eq("id",t.id);if(K){n(K.message,"error");return}const{error:O}=await h.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:k,status:"active"});O&&console.warn("[Market] insert listing:",O.message),n(`Carte mise en vente à ${k.toLocaleString("fr")} cr. !`,"success"),d(),l("collection")}),(ye=document.getElementById("single-direct-sell-btn"))==null||ye.addEventListener("click",async()=>{const k=w??u;if(!confirm(`Vendre cette carte immédiatement pour ${k.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;await h.from("market_listings").delete().eq("card_id",t.id),await h.from("transfer_history").delete().eq("card_id",t.id);const{error:q}=await h.from("cards").delete().eq("id",t.id);if(q){n(q.message,"error");return}await h.from("users").update({credits:(r.profile.credits||0)+k}).eq("id",r.profile.id),await s(),n(`+${k.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),l("collection")}),(me=document.getElementById("market-direct-sell-btn"))==null||me.addEventListener("click",async()=>{const k=[...j];if(!k.length){n("Sélectionne au moins un exemplaire","warning");return}const K=(w??u)*k.length;if(!confirm(`Vendre ${k.length} carte${k.length>1?"s":""} immédiatement pour ${K.toLocaleString("fr")} crédits au total ? Cette action est irréversible.`))return;await h.from("market_listings").delete().in("card_id",k),await h.from("transfer_history").delete().in("card_id",k);const{error:O}=await h.from("cards").delete().in("id",k);if(O){n(O.message,"error");return}await h.from("users").update({credits:(r.profile.credits||0)+K}).eq("id",r.profile.id),await s(),n(`+${K.toLocaleString("fr")} crédits ! ${k.length} carte${k.length>1?"s":""} vendue${k.length>1?"s":""}.`,"success"),d(),l("collection")}),(ke=document.getElementById("cancel-sell-btn"))==null||ke.addEventListener("click",async()=>{await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await h.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),d(),l("collection")})}function Co(t,e=""){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${t}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(e||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const r=o.querySelector("#pm-input");r.focus(),r.select();const n=a=>{o.remove(),i(a)};o.querySelector("#pm-ok").addEventListener("click",()=>n(r.value.trim()||null)),o.querySelector("#pm-cancel").addEventListener("click",()=>n(null)),o.querySelector("#pm-cancel2").addEventListener("click",()=>n(null)),o.addEventListener("click",a=>{a.target===o&&n(null)}),r.addEventListener("keydown",a=>{a.key==="Enter"&&n(r.value.trim()||null),a.key==="Escape"&&n(null)})})}function Ar(t,e=!1){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${t}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${e?"":"btn-primary"}" id="cm-ok" style="${e?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const r=n=>{o.remove(),i(n)};o.querySelector("#cm-ok").addEventListener("click",()=>r(!0)),o.querySelector("#cm-cancel").addEventListener("click",()=>r(!1)),o.addEventListener("click",n=>{n.target===o&&r(!1)})})}const $i={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Oi(t,e){const{state:i,navigate:o,toast:r}=e;Kt(o,i.profile,"decks","/icons/",r),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await h.from("decks").select("id,name,formation,stadium_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1}),a=[...new Set((n||[]).map(l=>l.stadium_card_id).filter(Boolean))];let d={};if(a.length){const{data:l}=await h.from("cards").select("id, stadium_id, stadium_definitions(image_url, country_code, club:clubs(logo_url))").in("id",a);(l||[]).forEach(s=>{var x;const c=s.stadium_definitions,m=((x=c==null?void 0:c.club)==null?void 0:x.logo_url)||(c!=null&&c.image_url?`/icons/${c.image_url}`:null)||(c!=null&&c.country_code?`https://flagsapi.com/${c.country_code}/flat/64.png`:null);d[s.id]=m})}t.innerHTML=`
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(n==null?void 0:n.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(n==null?void 0:n.length)>0?n.map(l=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const l=await Co("Nom du deck",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!l)return;const{data:s,error:c}=await h.from("decks").insert({owner_id:i.profile.id,name:l}).select().single();if(c){r(c.message,"error");return}r("Deck créé !","success"),jo(s.id,t,e)}),t.querySelectorAll("[data-open-deck]").forEach(l=>{l.addEventListener("click",()=>jo(l.dataset.openDeck,t,e))}),t.querySelectorAll("[data-rename]").forEach(l=>{l.addEventListener("click",async()=>{const s=await Co("Nouveau nom",l.dataset.name);if(!s||s===l.dataset.name)return;const{error:c}=await h.from("decks").update({name:s}).eq("id",l.dataset.rename);if(c){r(c.message,"error");return}r("Deck renommé !","success"),Oi(t,e)})}),t.querySelectorAll("[data-delete]").forEach(l=>{l.addEventListener("click",async()=>{if(!await Ar(`Supprimer le deck "${l.dataset.name}" ? Cette action est irréversible.`,!0))return;await h.from("deck_cards").delete().eq("deck_id",l.dataset.delete);const{error:s}=await h.from("decks").delete().eq("id",l.dataset.delete);if(s){r(s.message,"error");return}r("Deck supprimé.","success"),Oi(t,e)})})}async function jo(t,e,i){const{state:o,toast:r}=i;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await h.from("decks").select("*").eq("id",t).single(),{data:a}=await h.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:d}=await h.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id).eq("card_type","stadium"),l=(a||[]).filter(u=>u.card_type==="player"&&u.player),s=(a||[]).filter(u=>u.card_type==="formation"),c=(d||[]).filter(u=>u.card_type==="stadium"),m=[...new Set(c.map(u=>u.stadium_id).filter(Boolean))];let x={};if(c.forEach(u=>{u.stadium_def&&u.stadium_id&&(x[u.stadium_id]=u.stadium_def)}),m.length&&Object.keys(x).length<m.length){const{data:u}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",m);(u||[]).forEach(w=>{x[w.id]=w})}const y=s.map(u=>u.formation).filter(Boolean),{data:g}=await h.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",t);let f=n.formation||"4-4-2";y.length>0&&!y.includes(f)&&(f=y[0]);const b={deckId:t,name:n.name,formation:f,formationCardId:n.formation_card_id,stadiumCardId:n.stadium_card_id||null,slots:{},subs:[],playerCards:l,formationCards:s,stadiumCards:c,stadDefMap:x,availableFormations:y};(g||[]).forEach(u=>{u.is_starter?b.slots[u.position]=u.card_id:b.subs.includes(u.card_id)||b.subs.push(u.card_id)}),$t(e,b,i,!0)}function $t(t,e,i,o=!1){var f,b;const{navigate:r}=i;o||Br(e,i),$i[e.formation];const n=qo(e.formation),a=n.filter(u=>e.slots[u]).length,d=e.availableFormations.length>0?e.availableFormations:Object.keys($i),l=(f=e.stadiumCards)==null?void 0:f.find(u=>u.id===e.stadiumCardId),s=l&&((b=e.stadDefMap)==null?void 0:b[l.stadium_id])||null,c=e.subs.map(u=>e.playerCards.find(w=>w.id===u)).filter(Boolean);c.length!==e.subs.length&&(e.subs=c.map(u=>u.id)),[...Object.values(e.slots),...e.subs],t.innerHTML=`
  <style>.no-scrollbar::-webkit-scrollbar{display:none}</style>
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:8px;padding:6px 12px;min-height:0">
      <button class="btn-icon" id="builder-back" style="font-size:16px">←</button>
      <div style="flex:1">
        <h2 style="font-size:14px;margin:0">${e.name}</h2>
        <p style="font-size:11px;margin:0">${a}/11 · ${c.length}/5 rempl.</p>
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
            ${c.map(u=>{const w={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:24px">
                ${qe({...w,_evolution_bonus:w._evolution_bonus||0},{width:90,showStad:!0,stadDef:s})}
                <button data-remove-sub="${u.id}"
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
              ${ai(e.formation,kt[e.formation],{width:100})}
            </div>
          </div>
          <!-- Stade -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">🏟️ Stade</div>
            <div id="add-stad-btn-pc" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${l?(()=>{var v;const u=e.stadDefMap[l.stadium_id],w=((v=u==null?void 0:u.club)==null?void 0:v.logo_url)||(u==null?void 0:u.image_url)||(u!=null&&u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ot((u==null?void 0:u.name)||"Stade",w,"+10 ⭐",{width:100})})():`<div style="width:100px;height:171px;border:2px dashed rgba(79,195,247,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
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
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">Remplaçants (${c.length}/5)</div>
            <div style="display:flex;gap:2px;align-items:center;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none" id="subs-list" class="no-scrollbar">
              ${c.map(u=>{const w={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:20px">
                  ${qe({...w,_evolution_bonus:w._evolution_bonus||0},{width:44,showStad:!0,stadDef:s})}
                  <button data-remove-sub="${u.id}"
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
              ${l?(()=>{var v;const u=e.stadDefMap[l.stadium_id],w=((v=u==null?void 0:u.club)==null?void 0:v.logo_url)||(u==null?void 0:u.image_url)||(u!=null&&u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ot((u==null?void 0:u.name)||"Stade",w,"+10⭐",{width:44})})():`<div style="width:44px;height:57px;border:2px dashed rgba(79,195,247,0.5);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
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
  </div>`;const m=window.innerWidth>=900,x=t.querySelector(".deck-pc-layout"),y=t.querySelector(".deck-mobile-layout");x&&(x.style.display=m?"block":"none"),y&&(y.style.display=m?"none":"block"),t.querySelectorAll("#save-deck").forEach(u=>{u.closest(".page-body").style.display=m?"none":"block"}),Mr(t,e,n,i),t.querySelectorAll("#builder-back").forEach(u=>u.addEventListener("click",()=>r("decks")));const g=()=>{const{openModal:u,closeModal:w}=i,E=`<div style="display:flex;flex-wrap:wrap;gap:12px;padding:8px;justify-content:center">
      ${[...new Set(d)].map(p=>{const T=p===e.formation;return`<div data-forma="${p}" style="cursor:pointer;border-radius:10px;${T?"box-shadow:0 0 0 3px #1A6B3C":""}">
          ${ai(p,kt[p],{width:90})}
        </div>`}).join("")}
    </div>`;u("⚽ Choisir une formation",E),document.querySelectorAll("#modal-body [data-forma]").forEach(p=>{p.addEventListener("click",()=>{e.formation=p.dataset.forma;const T=qo(e.formation),I={};T.forEach(M=>{e.slots[M]&&(I[M]=e.slots[M])}),e.slots=I,w(),$t(t,e,i)})})};t.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(u=>u.addEventListener("click",g)),t.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(u=>u.addEventListener("click",()=>Cr(e,t,i))),t.querySelectorAll("#save-deck, #save-deck-pc").forEach(u=>u.addEventListener("click",()=>Dr(e,i))),t.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{e.subs=e.subs.filter(w=>w!==u.dataset.removeSub),$t(t,e,i)})}),t.querySelectorAll("#add-sub-btn").forEach(u=>u.addEventListener("click",()=>qr(e,t,i)))}function Mr(t,e,i,o){var v,E,p;const r=window.innerWidth>=900,n=t.querySelector(r?"#deck-field-pc":"#deck-field-mobile");if(!n)return;const a=(v=e.stadiumCards)==null?void 0:v.find(T=>T.id===e.stadiumCardId),d=a&&((E=e.stadDefMap)==null?void 0:E[a.stadium_id])||null,l=kt[e.formation]||{},s=Ko(e.formation)||[],c={};for(const T of i){const I=e.slots[T],M=I?e.playerCards.find(H=>H.id===I):null;M!=null&&M.player?c[T]={...M.player,_evolution_bonus:M.evolution_bonus||0,face:M.player.face||null}:c[T]=null}const m=window.innerWidth>=900,x=m?window.innerWidth-280:window.innerWidth-20,y=m?Math.min(x,860):x,g=Math.round(m?y*.82:y*.85),f=m?84:44;let b="";for(const[T,I]of s){const M=l[T],H=l[I];if(!M||!H)continue;const ne=M.x*y,te=Math.round(.03*g+M.y*.85*g),X=H.x*y,$=Math.round(.03*g+H.y*.85*g),N=c[T],ae=c[I],j=Si(N,ae);j==="#ff3333"||j==="#cc2222"?b+=`<line x1="${ne.toFixed(1)}" y1="${te.toFixed(1)}" x2="${X.toFixed(1)}" y2="${$.toFixed(1)}" stroke="${j}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(b+=`<line x1="${ne.toFixed(1)}" y1="${te.toFixed(1)}" x2="${X.toFixed(1)}" y2="${$.toFixed(1)}" stroke="${j}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,b+=`<line x1="${ne.toFixed(1)}" y1="${te.toFixed(1)}" x2="${X.toFixed(1)}" y2="${$.toFixed(1)}" stroke="${j}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let u="";const w=Math.round(f*657/507);for(const T of i){const I=l[T];if(!I)continue;const M=c[T],H=I.x*y;I.y*g;const ne=Math.round(.03*g+I.y*(.85*g)),te=Math.round(H-f/2),X=Math.round(ne-w/2);if(M){const $=T.replace(/\d+/,""),N=d&&(d.club_id&&String(M.club_id)===String(d.club_id)||d.country_code&&M.country_code===d.country_code),ae=qe({...M,_evolution_bonus:M._evolution_bonus||0},{width:f,showStad:!0,stadDef:d,role:$});N&&((p=d.club)!=null&&p.logo_url||d.image_url),u+=`<div style="position:absolute;left:${te}px;top:${X}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${T}">
        <div style="position:relative">${ae}</div>
      </div>`}else{const $=T.replace(/\d+/,"");u+=`<div style="position:absolute;left:${te}px;top:${X}px;width:${f}px;height:${w}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${T}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${$}</span>
      </div>`}}n.innerHTML=`
    <div style="position:relative;width:${y}px;height:${g}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${y} ${g}">${b}</svg>
      ${u}
    </div>`,n.querySelectorAll(".deck-slot-hit").forEach(T=>{T.addEventListener("click",()=>jr(T.dataset.pos,e,t,o))})}function Cr(t,e,i){var d;const{openModal:o,closeModal:r}=i,n=new Set,a=(t.stadiumCards||[]).filter(l=>{const s=l.stadium_id||l.id;return n.has(s)?!1:(n.add(s),!0)});o("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:90px;text-align:center">
        <div style="width:85px;height:112px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${t.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:26px">🚫</span>
          <span style="font-size:10px;color:#666">Aucun</span>
        </div>
      </div>
      ${a.map(l=>{var y;const s=t.stadDefMap[l.stadium_id],c=((y=s==null?void 0:s.club)==null?void 0:y.logo_url)||(s==null?void 0:s.image_url)||(s!=null&&s.country_code?`https://flagsapi.com/${s.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),m=t.stadiumCardId===l.id,x=Ot((s==null?void 0:s.name)||"Stade",c,"+10⭐",{width:90});return`<div class="stad-choice" data-stad-id="${l.id}" style="cursor:pointer;position:relative;border-radius:8px;${m?"box-shadow:0 0 0 3px #4fc3f7":""}">
          ${x}
        </div>`}).join("")}
    </div>`),(d=document.getElementById("stad-none"))==null||d.addEventListener("click",()=>{t.stadiumCardId=null,r(),$t(e,t,i)}),document.querySelectorAll(".stad-choice").forEach(l=>{l.addEventListener("click",()=>{t.stadiumCardId=l.dataset.stadId,r(),$t(e,t,i)})})}function jr(t,e,i,o){var g,f,b,u,w;const{openModal:r,closeModal:n}=o,a=t.replace(/\d+/,""),d=(g=e.stadiumCards)==null?void 0:g.find(v=>v.id===e.stadiumCardId),l=d&&((f=e.stadDefMap)==null?void 0:f[d.stadium_id])||null,s=e.slots[t],c=s?e.playerCards.find(v=>v.id===s):null;(b=c==null?void 0:c.player)==null||b.id;const m=new Set;Object.entries(e.slots).forEach(([v,E])=>{var T;if(v===t||!E)return;const p=e.playerCards.find(I=>I.id===E);(T=p==null?void 0:p.player)!=null&&T.id&&m.add(p.player.id)}),e.subs.forEach(v=>{var p;const E=e.playerCards.find(T=>T.id===v);(p=E==null?void 0:E.player)!=null&&p.id&&m.add(E.player.id)});const x=new Set,y=e.playerCards.filter(v=>{const E=v.player;return!(E.job===a||E.job2===a)||m.has(E.id)||x.has(E.id)?!1:(x.add(E.id),!0)});y.sort((v,E)=>{const p=v.evolution_bonus||0,T=E.evolution_bonus||0,I=(a==="GK"?v.player.note_g:a==="DEF"?v.player.note_d:a==="MIL"?v.player.note_m:v.player.note_a)+(a===v.player.job||a===v.player.job2?p:0);return(a==="GK"?E.player.note_g:a==="DEF"?E.player.note_d:a==="MIL"?E.player.note_m:E.player.note_a)+(a===E.player.job||a===E.player.job2?T:0)-I}),r(`Choisir ${a} — ${t}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${e.slots[t]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${y.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+y.map(v=>{const E={...v.player,_evolution_bonus:v.evolution_bonus||0};return`<div class="player-option" data-card-id="${v.id}" style="cursor:pointer">
          ${qe(E,{width:100,showStad:!0,stadDef:l,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(u=document.getElementById("close-selector"))==null||u.addEventListener("click",n),(w=document.getElementById("remove-player"))==null||w.addEventListener("click",()=>{delete e.slots[t],n(),$t(i,e,o)}),document.querySelectorAll(".player-option").forEach(v=>{v.addEventListener("click",()=>{e.slots[t]=v.dataset.cardId,n(),$t(i,e,o)})})}function qr(t,e,i){var c,m,x;const{openModal:o,closeModal:r}=i,n=(c=t.stadiumCards)==null?void 0:c.find(y=>y.id===t.stadiumCardId),a=n&&((m=t.stadDefMap)==null?void 0:m[n.stadium_id])||null,d=new Set;Object.keys(t.slots).forEach(y=>{var b;const g=t.slots[y];if(!g)return;const f=t.playerCards.find(u=>u.id===g);(b=f==null?void 0:f.player)!=null&&b.id&&d.add(f.player.id)}),t.subs.forEach(y=>{var f;const g=t.playerCards.find(b=>b.id===y);(f=g==null?void 0:g.player)!=null&&f.id&&d.add(g.player.id)});const l=new Set,s=t.playerCards.filter(y=>{var g,f,b;return d.has((g=y.player)==null?void 0:g.id)||l.has((f=y.player)==null?void 0:f.id)?!1:(l.add((b=y.player)==null?void 0:b.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+s.map(y=>{const g={...y.player,_evolution_bonus:y.evolution_bonus||0};return`<div class="player-option" data-card-id="${y.id}" style="cursor:pointer">
          ${qe(g,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(x=document.getElementById("close-sub-selector"))==null||x.addEventListener("click",r),document.querySelectorAll(".player-option").forEach(y=>{y.addEventListener("click",()=>{t.subs.push(y.dataset.cardId),r(),$t(e,t,i)})})}async function gn(t){const e=t.formationCards.find(r=>r.formation===t.formation),i=(e==null?void 0:e.id)||t.formationCardId;await h.from("decks").update({formation:t.formation,formation_card_id:i||null,stadium_card_id:t.stadiumCardId||null}).eq("id",t.deckId),await h.from("deck_cards").delete().eq("deck_id",t.deckId);const o=[];return Object.entries(t.slots).forEach(([r,n],a)=>{o.push({deck_id:t.deckId,card_id:n,position:r,is_starter:!0,slot_order:a})}),t.subs.forEach((r,n)=>{o.push({deck_id:t.deckId,card_id:r,position:`SUB${n+1}`,is_starter:!1,slot_order:100+n})}),o.length>0?await h.from("deck_cards").insert(o):{error:null}}let Hi=null;function Br(t,e){const{toast:i}=e;clearTimeout(Hi),document.querySelectorAll(".autosave-indicator").forEach(r=>{r.textContent="⏳ Enregistrement...",r.style.opacity="1",r.style.color=""}),Hi=setTimeout(async()=>{const{error:r}=await gn(t),n=document.querySelectorAll(".autosave-indicator");if(r){n.forEach(a=>{a.textContent="⚠️ Erreur d'enregistrement",a.style.color="#ff6b6b"}),i(r.message,"error");return}n.forEach(a=>{a.textContent="✅ Enregistré",a.style.color="",setTimeout(()=>{a.style.opacity="0"},1500)})},600)}async function Dr(t,e){const{toast:i,navigate:o}=e;clearTimeout(Hi);const{error:r}=await gn(t);if(r){i(r.message,"error");return}i("Deck enregistré ✅","success"),o("decks")}function qo(t){const e=$i[t]||$i["4-4-2"],i=["GK1"];for(let o=1;o<=e.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=e.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=e.ATT;o++)i.push(`ATT${o}`);return i}function At(){return Math.min(window.innerWidth-40,860)}function Gt(){return Math.round(At()*1.1)}function bn(t){var r,n;if(!t)return null;const e=t._line||t.job||"MIL",i=e==="GK"?t.note_g||0:e==="DEF"?t.note_d||0:e==="MIL"?t.note_m||0:t.note_a||0,o=t.stadiumBonus?10:0;return{name:t.name,firstname:t.firstname||"",note:i+(t.boost||0)+o,note_g:t.note_g||0,note_d:t.note_d||0,note_m:t.note_m||0,note_a:t.note_a||0,_evolution_bonus:0,stadiumBonus:t.stadiumBonus||!1,boost:t.boost||0,job:t.job,job2:t.job2||null,_line:t._line||t.job,_col:t._col,country_code:t.country_code,club_id:t.club_id,rarity:t.rarity,clubName:t.clubName||((r=t.clubs)==null?void 0:r.encoded_name)||null,clubLogo:t.clubLogo||((n=t.clubs)==null?void 0:n.logo_url)||null,face:t.face||null,portrait:Ct(t)}}function Pr(t,e,i,o="Adversaire"){Qo("/sounds/match-opening.mp3",.3);const r=At(),n=Gt();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${o}</div>
      
      <div style="width:100%;max-width:${r}px;margin:0 auto">
        ${Qi(t,e,null,[],r,n)}
      </div>
    </div>`}function xn(t){var n,a,d;if(!t)return"";const e=l=>l?qe({...l,_evolution_bonus:0},{width:52,role:l._line||l.job,showStad:!!l.stadiumBonus,extraNote:l.boost||0}):"",o={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[t.type]||"📋";return`
    <div style="padding:8px 12px;border-left:3px solid ${((n=t.type)==null?void 0:n.includes("goal"))?"#22c55e":"rgba(255,255,255,0.15)"};margin-bottom:4px">
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
    </div>`}function Ze(t,e,i,o,r){io("/sounds/goal.mp3",.7);const n=document.getElementById("goal-anim-overlay");n&&n.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
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
      }`,document.head.appendChild(l)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),r==null||r()},400)},1800)}function yn(t,e,i){const o=document.getElementById("sub-anim-overlay");o&&o.remove();const r=document.createElement("div");r.id="sub-anim-overlay",r.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const n=Math.min(120,Math.round(window.innerWidth/4)),a=t?qe({...t,_evolution_bonus:0},{width:n,role:t._line||t.job}):"",d=e?qe({...e,_evolution_bonus:0},{width:n,role:e._line||e.job}):"";r.innerHTML=`
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
    </div>`,document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.4s",setTimeout(()=>{r.remove(),i==null||i()},400)},1600)}function zt(t,e="rgba(0,0,0,0.85)",i=2200){const o=document.getElementById("game-toast");o&&o.remove();const r=document.createElement("div");if(r.id="game-toast",r.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${e};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,r.textContent=t,!document.getElementById("game-toast-style")){const n=document.createElement("style");n.id="game-toast-style",n.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(n)}document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.3s",setTimeout(()=>r.remove(),300)},i)}function hn(t,e){const i=jt(t,"MIL"),o=t.stadiumBonus||e&&(e.club_id&&String(t.club_id)===String(e.club_id)||e.country_code&&t.country_code===e.country_code)?10:0;return i+o}function yt(t,e){return t.reduce((i,o)=>i+hn(o,e),0)}function ht(t){let e=0;for(let i=0;i<t.length-1;i++){const o=Si(t[i],t[i+1]);o==="#00ff88"?e+=10:o==="#FFD700"&&(e+=5)}return e}function Ei(t,e,i,o,r){return`<div id="duel-row-${o}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${e}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${t.map((n,a)=>{const d=a<t.length-1?Si(n,t[a+1]):null,l=!d||d==="#ff3333"||d==="#cc2222",s=d==="#00ff88"?"+10":d==="#FFD700"?"+5":"";return hn(n,r),n.stadiumBonus||r&&(r.club_id&&String(n.club_id)===String(r.club_id)||r.country_code&&(n.country_code,r.country_code)),`
          <div class="duel-card duel-card-${o}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${qe({...n,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:r,role:"MIL",extraNote:n.boost||0})}
          </div>
          ${a<t.length-1?`<div class="duel-link duel-link-${o}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${l?"rgba(255,255,255,0.12)":d};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${l?"none":`0 0 8px ${d}`}">
            ${s?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${d}">${s}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${o}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${yt(t,r)} + ${ht(t)} liens = <b style="color:#fff">${yt(t,r)+ht(t)}</b>
      </div>
    </div>`}async function Fr(t,e){const{state:i}=e,o=i.params||{},r=o.matchMode||"vs_ai_easy",n=r==="solo",a=r==="ranked_ai",d=o.soloLevel||1,l=r.replace("vs_ai_",""),s=r;let c=null;if(n){const{data:g}=await h.from("solo_levels").select("*").eq("level_number",d).maybeSingle();c=g||{level_number:d,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500}}const m=o.rankedData||null,x=o.presetSetup||null;async function y({deckId:g,formation:f,starters:b,subsRaw:u,gcCardsEnriched:w,gcDefs:v,stadiumDef:E}){try{let p=Ri(b,f);E&&(p=vi(p,E),wi(u,E));let T=null;if(a){const te=Nr(p)+Gr(p)*10,{jaune:X,vert:$}=Or(p,f),N=[.9,1,1.2],ae=N[Math.floor(Math.random()*N.length)],j=Math.max(11,Math.round(te*ae));T={target_note_avg:Math.max(1,Math.round(j/11)),target_total_note:j,nb_liens_jaune:X,nb_liens_vert:$,nb_joueurs_stade:E?3:0,_variance:ae}}const I=c&&{...c,target_total_note:Math.max(11,Math.round((Number(c.target_note_avg)||10)*11))},M=n?await Do(f,I):a?await Do(f,T):await Rr(f,l),H=M.lines||M,ne=async te=>{try{const X=s==="vs_ai_club"||s==="solo"||s==="ranked_ai"?"club":s,{data:$,error:N}=await h.from("matches").insert({home_id:i.profile.id,away_id:null,mode:X,home_deck_id:g,status:"in_progress"}).select().single();if(N){console.error("[MatchIA] Erreur création match:",N),ji(t,"⚠️","Impossible de créer le match ("+N.message+").","Retour",()=>e.navigate("home"));return}const ae=M.stadiumDef||null;ae&&H&&(vi(H,ae),wi(M.subs||[],ae));const j={gcDefs:v||[],matchId:$==null?void 0:$.id,mode:s,difficulty:l,formation:f,isSolo:n,soloLevel:d,soloLevelConfig:c,isRankedAI:a,rankedAIData:m,homeTeam:p,aiTeam:H,homeSubs:u,subsUsed:0,maxSubs:Math.min(u.length,3),aiSubs:M.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((M.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:M.gcCards||[],aiUsedGc:[],aiGcTarget:M.gcTarget||2,aiStadiumDef:ae,homeScore:0,aiScore:0,gcCards:te,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Hr(t,j,e)}catch(X){console.error("[MatchIA] Exception launchMatch:",X),ji(t,"⚠️","Erreur au lancement du match : "+X.message,"Retour",()=>e.navigate("home"))}};if(a&&x){ne(x.gcCardsEnriched||[]);return}if(!w.length){ne([]);return}Ti(t,w,ne)}catch(p){console.error("[MatchIA] Exception setup:",p),ji(t,"⚠️","Erreur de préparation du match : "+p.message,"Retour",()=>e.navigate("home"))}}x?await y(x):await Ii(t,e,r,y)}async function Rr(t,e){var b;const{data:i}=await h.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:vn(t),subs:[],gcCards:[],stadiumDef:null};const o=Ht[t]||Ht["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},n=new Set;function a(u,w,v){var E,p;return n.add(u.id),{cardId:"ai-"+u.id+"-"+v,id:u.id,firstname:u.firstname,name:u.surname_real,country_code:u.country_code,club_id:u.club_id,job:u.job,job2:u.job2,note_g:Number(u.note_g)||0,note_d:Number(u.note_d)||0,note_m:Number(u.note_m)||0,note_a:Number(u.note_a)||0,rarity:u.rarity,skin:u.skin,hair:u.hair,hair_length:u.hair_length,face:u.face,clubName:((E=u.clubs)==null?void 0:E.encoded_name)||null,clubLogo:((p=u.clubs)==null?void 0:p.logo_url)||null,boost:0,used:!1,_line:w}}for(const u of["GK","DEF","MIL","ATT"]){const w=i.filter(I=>I.job===u&&!n.has(I.id)),v=i.filter(I=>I.job!==u&&!n.has(I.id)),E=[...w,...v],p=[];for(let I=0;I<o[u];I++){const M=E[I];M&&p.push(a(M,u,I))}const T=St(p.length);p.forEach((I,M)=>{I._col=T[M]}),r[u]=p}const l=i.filter(u=>!n.has(u.id)).slice(0,5).map((u,w)=>a(u,u.job,100+w)),{data:s}=await h.from("gc_definitions").select("*").eq("is_active",!0),m=[...s||[]].sort(()=>Math.random()-.5).slice(0,3).map((u,w)=>({id:"ai-gc-"+w,gc_type:u.name,name:u.name,icon:"⚡",effect_type:u.effect_type,effect_params:u.effect_params||{}})),x=Object.values(r).flat(),y={};x.forEach(u=>{u.club_id&&(y[u.club_id]=(y[u.club_id]||0)+1)});const g=(b=Object.entries(y).sort((u,w)=>w[1]-u[1])[0])==null?void 0:b[0];let f=null;if(g){const{data:u}=await h.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",g).single();u&&(f={club_id:u.id,country_code:null,name:u.encoded_name+" Stadium",club:{encoded_name:u.encoded_name,logo_url:u.logo_url}})}return{lines:r,subs:l,gcCards:m,stadiumDef:f}}function Nr(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{const r=o._line||i,n=Number(r==="GK"?o.note_g:r==="DEF"?o.note_d:r==="MIL"?o.note_m:o.note_a)||0;e+=n+(o.boost||0)});return e}function Gr(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{o!=null&&o.stadiumBonus&&e++});return e}function Or(t,e){const i={};for(const a of["GK","DEF","MIL","ATT"])(t[a]||[]).forEach((d,l)=>{i[`${a}${l+1}`]=d});const o=Ko(e)||Xi[e]||[];let r=0,n=0;for(const[a,d]of o){const l=i[a],s=i[d];if(!l||!s)continue;const c=Si(l,s);c==="#00ff88"?n++:c==="#FFD700"&&r++}return{jaune:r,vert:n}}function Bo(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Zt(t,e,i){if(i<=0||!t.length)return[];const o=[...t].sort((r,n)=>Math.abs(Bo(r)-e)-Math.abs(Bo(n)-e));return o.slice(0,Math.min(i,o.length))}async function Do(t,e){var N,ae;const i=Number(e==null?void 0:e.target_note_avg)||10,o=Number(e==null?void 0:e.nb_liens_jaune)||0,r=Number(e==null?void 0:e.nb_liens_vert)||0,n=Number(e==null?void 0:e.nb_joueurs_stade)||0,{data:a}=await h.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url,country_code)").eq("is_active",!0).limit(300);if(!a||a.length<16)return{lines:vn(t),subs:[],gcCards:[],stadiumDef:null};const d={};a.forEach(j=>{j.club_id&&(d[j.club_id]=(d[j.club_id]||0)+1)});const l=((N=Object.entries(d).sort((j,de)=>de[1]-j[1])[0])==null?void 0:N[0])||null,s=l?a.filter(j=>j.club_id===l):[],c=((ae=s[0])==null?void 0:ae.country_code)||null,m=c?a.filter(j=>j.country_code===c&&j.club_id!==l):[],x=Math.min(s.length,Math.max(2,r+1),16),y=Math.min(m.length,Math.max(0,o),16-x),g=[],f=new Set;Zt(s,i,x).forEach(j=>{g.push(j),f.add(j.id)}),Zt(m,i,y).forEach(j=>{g.push(j),f.add(j.id)});const b=Math.max(0,16-g.length),u=a.filter(j=>!f.has(j.id));Zt(u,i,b).forEach(j=>{g.push(j),f.add(j.id)});const w=Ht[t]||Ht["4-4-2"],v={GK:[],DEF:[],MIL:[],ATT:[]},E=new Set;function p(j,de,ve){var C,S;return E.add(j.id),{cardId:"ai-"+j.id+"-"+ve,id:j.id,firstname:j.firstname,name:j.surname_real,country_code:j.country_code,club_id:j.club_id,job:j.job,job2:j.job2,note_g:Number(j.note_g)||0,note_d:Number(j.note_d)||0,note_m:Number(j.note_m)||0,note_a:Number(j.note_a)||0,rarity:j.rarity,skin:j.skin,hair:j.hair,hair_length:j.hair_length,face:j.face,clubName:((C=j.clubs)==null?void 0:C.encoded_name)||null,clubLogo:((S=j.clubs)==null?void 0:S.logo_url)||null,boost:0,used:!1,_line:de}}for(const j of["GK","DEF","MIL","ATT"]){let de=g.filter(R=>R.job===j&&!E.has(R.id));if(j==="GK"&&!de.length){const R=a.filter(ee=>ee.job==="GK"&&!E.has(ee.id));R.length&&(de=Zt(R,i,1))}const ve=g.filter(R=>R.job!==j&&!E.has(R.id)),C=[...de,...ve],S=[];for(let R=0;R<w[j];R++){const ee=C[R];ee&&S.push(p(ee,j,R))}const Y=St(S.length);S.forEach((R,ee)=>{R._col=Y[ee]}),v[j]=S}let T=g.filter(j=>!E.has(j.id));if(T.length<5){const j=a.filter(de=>!E.has(de.id)&&!T.some(ve=>ve.id===de.id));T=T.concat(Zt(j,i,5-T.length))}const I=T.slice(0,5).map((j,de)=>p(j,j.job,100+de)),M=Number(e==null?void 0:e.target_total_note)||0;if(M>0){const j={GK:"note_g",DEF:"note_d",MIL:"note_m",ATT:"note_a"},de=[];for(const C of["GK","DEF","MIL","ATT"])(v[C]||[]).forEach(S=>de.push({p:S,key:j[C]}));const ve=de.reduce((C,S)=>C+(Number(S.p[S.key])||0),0);if(ve>0&&de.length){const C=M/ve;de.forEach(R=>{R.p[R.key]=Math.max(1,Math.round((Number(R.p[R.key])||0)*C))});let S=M-de.reduce((R,ee)=>R+ee.p[ee.key],0),Y=0;for(;S!==0&&Y++<500;){const R=de[Math.floor(Math.random()*de.length)];S>0?(R.p[R.key]++,S--):R.p[R.key]>1&&(R.p[R.key]--,S++)}I.forEach(R=>{const ee=j[R.job]||"note_m";R[ee]=Math.max(1,Math.round((Number(R[ee])||0)*C))})}}const{data:H}=await h.from("gc_definitions").select("*").eq("is_active",!0),te=[...H||[]].sort(()=>Math.random()-.5).slice(0,3).map((j,de)=>({id:"ai-gc-"+de,gc_type:j.name,name:j.name,icon:"⚡",effect_type:j.effect_type,effect_params:j.effect_params||{}}));let X=null;if(n>0&&l){const{data:j}=await h.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",l).single();j&&(X={club_id:j.id,country_code:null,name:j.encoded_name+" Stadium",club:{encoded_name:j.encoded_name,logo_url:j.logo_url}})}const $=1+Math.floor(Math.random()*3);return{lines:v,subs:I,gcCards:te,stadiumDef:X,gcTarget:$}}function vn(t){const e=Ht[t]||Ht["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let r=0;for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let l=0;l<e[n];l++){const s=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+r,id:"fake-"+r,firstname:"IA",name:o[r%o.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?s:2,note_d:n==="DEF"?s:2,note_m:n==="MIL"?s:2,note_a:n==="ATT"?s:2,rarity:"normal",boost:0,used:!1,_line:n}),r++}const d=St(a.length);a.forEach((l,s)=>{l._col=d[s]}),i[n]=a}return i}function Hr(t,e,i){var r;Qo("/sounds/match-opening.mp3",.3);const o=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
      <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((r=e.aiStadiumDef.club)==null?void 0:r.encoded_name)||e.aiStadiumDef.country_code||""}</span>
    </div>`:""}
    <div id="opponent-swipe-zone" style="flex:1;min-height:0;overflow:hidden;display:flex;align-items:center;justify-content:center">
      <div class="opponent-preview-wrap" style="overflow:hidden;display:flex;align-items:center;justify-content:center"></div>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const n=t.querySelector(".opponent-preview-wrap"),a=t.querySelector("#opponent-swipe-zone");if(!n||!a)return;const d=a.clientWidth>=900,l=Math.max(200,a.clientHeight-(d?8:40)),s=Math.max(200,a.clientWidth-(d?8:16)),c=d?null:Math.round(Math.max(44,Math.round(s*.168))*.55);n.innerHTML=si(e.aiTeam,e.formation,null,[],s,l,[],c),n.style.cssText=`width:${s}px;height:${l}px;overflow:hidden;flex-shrink:0`;const m=n.querySelector("svg");m&&(m.style.cssText="display:block;width:100%;height:100%",m.setAttribute("preserveAspectRatio",d?"xMidYMid meet":"none"))})),setTimeout(()=>Ur(t,e,i),5e3)}const Ve=t=>bn(t);function Ur(t,e,i){const o=e.homeTeam.MIL||[],r=e.aiTeam.MIL||[],n=e.stadiumDef||null,a=e.aiStadiumDef||null,d=yt(o,n)+ht(o),l=yt(r,a)+ht(r),s=d>=l;t.innerHTML=`
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

    ${Ei(o,e.clubName,"#D4A017","home",n)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${Ei(r,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const c=()=>{const g=(f,b)=>t.querySelectorAll(f).forEach((u,w)=>{setTimeout(()=>{u.style.opacity="1",u.style.transform="translateY(0) scale(1)"},b+w*90)});g(".duel-card-home",150),g(".duel-card-ai",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((f,b)=>{setTimeout(()=>{f.style.opacity="1"},b*70)}),900),setTimeout(()=>{const f=t.querySelector("#vs-label");f&&(f.style.opacity="1",f.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(b=>b.style.opacity="1")},1250),setTimeout(()=>{m("score-home",d,800),m("score-ai",l,800)},1500)};function m(g,f,b){const u=document.getElementById(g);if(!u)return;const w=performance.now(),v=E=>{const p=Math.min(1,(E-w)/b);u.textContent=Math.round(f*(1-Math.pow(1-p,3))),p<1?requestAnimationFrame(v):u.textContent=f};requestAnimationFrame(v)}requestAnimationFrame(c),e.attacker=s?"home":"ai";const x=s?Vo():null;s&&(e.boostCard={value:x}),e.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(g=>Ve(g)),aiPlayers:r.map(g=>Ve(g)),homeTotal:d,aiTotal:l,text:`Duel milieu : ${e.clubName} ${d} – ${l} IA → ${s?e.clubName+" attaque":"IA attaque"}`});const y=()=>{e.phase=e.attacker==="home"?"attack":"ai-attack",Ie(t,e,i),e.attacker==="ai"&&setTimeout(()=>uo(t,e,i),800)};setTimeout(()=>{const g=document.getElementById("score-home"),f=document.getElementById("score-ai"),b=document.getElementById(s?"duel-row-home":"duel-row-ai"),u=document.getElementById(s?"duel-row-ai":"duel-row-home"),w=s?g:f,v=s?f:g;w&&(w.style.fontSize="80px",w.style.color=s?"#FFD700":"#ff6b6b",w.style.animation="duelPulse .5s ease"+(s?", duelGlow 1.5s ease infinite .5s":"")),v&&(v.style.opacity="0.25"),setTimeout(()=>{b&&(b.style.transformOrigin="center",b.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",b.style.zIndex="5"),setTimeout(()=>{var p;const E=document.getElementById("duel-shock");if(E){const T=(p=u||b)==null?void 0:p.getBoundingClientRect(),I=t.querySelector(".match-screen").getBoundingClientRect();T&&(E.style.top=T.top-I.top+T.height/2+"px"),E.style.animation="shockwave .5s ease-out forwards"}u&&(u.style.transformOrigin="center",u.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var p;const E=document.getElementById("duel-finale");E&&(E.innerHTML=`
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
          </button>`,E.style.transition="opacity .45s ease",E.style.opacity="1",E.style.pointerEvents="auto",(p=document.getElementById("start-match-btn"))==null||p.addEventListener("click",y))},600)},700)},2800)}function Ie(t,e,i){var ne,te,X,$,N,ae,j,de,ve;const o=e.selected.map(C=>C.cardId),r=e.usedSubIds||[],n=e.homeSubs.filter(C=>!r.includes(C.cardId)),d=Object.values(e.homeTeam).flat().filter(C=>C.used).length>0&&n.length>0&&e.subsUsed<e.maxSubs,l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(C=>!C.used),s=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(C=>!C.used),c=Ut(e.aiTeam),m=l.length===0&&s.length===0&&!c,x=(e.homeTeam.DEF||[]).filter(C=>!C.used),y=(e.homeTeam.GK||[]).filter(C=>!C.used);let g=[];e.phase==="attack"&&l.length===0&&(c?(g=x.map(C=>C.cardId),x.length===0&&(g=g.concat(y.map(C=>C.cardId)))):m&&(g=[...x,...y].map(C=>C.cardId))),e.log[e.log.length-1];const f=e.phase==="ai-attack"||e.phase==="ai-defense",b=e.phase==="attack",u=e.phase==="defense",w=e.phase==="finished",E=(e.homeSubs||[]).filter(C=>!(e.usedSubIds||[]).includes(C.cardId)).length>0&&e.subsUsed<e.maxSubs,p=b&&l.length===0&&g.length===0&&!E,T=e.gcCards.filter(C=>!e.usedGc.includes(C.id)),I=e.boostCard&&!e.boostUsed;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.innerHTML=`
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
      ${(()=>{if(e.phase==="defense"&&e.pendingAttack){const S=e.pendingAttack;let Y="";if(e.selected.length>0){const R=e.selected.map(fe=>({...(e.homeTeam[fe._role]||[]).find(be=>be.cardId===fe.cardId)||fe,_line:fe._role})),ee=li(R,e.modifiers.home,e.formation);Y=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${e.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${Qe(R.map(fe=>({...fe,used:!1})),"#3a7bd5",ee.total,"defense",e.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${Qe((S.players||[]).map(R=>({...R,used:!1})),"#ff6b6b",S.total,"attack",e.formation)}</div>
            ${Y}
          </div>`}if(e.phase==="ai-defense"&&e.pendingAttack){const S=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${Qe((S.players||[]).map(Y=>({...Y,used:!1})),"#00ff88",S.total,"attack",e.formation)}</div>
          </div>`}if(e.phase==="attack"&&e.selected.length>0){const S=e.selected.map(R=>{const ee=(e.homeTeam[R._role]||[]).find(he=>he.cardId===R.cardId)||R,fe=["GK","DEF"].includes(R._role);return{...ee,_line:R._role,...fe?{note_a:Math.max(1,Number(ee.note_a)||0)}:{}}}),Y=di(S,e.modifiers.home,e.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${e.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(S.map(R=>({...R,used:!1})),"#FFD700",Y.total,"attack",e.formation)}</div>
          </div>`}const C=e.log[e.log.length-1];return C?'<div style="padding:2px 4px">'+xn(C)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${e.log.length})
    </button>

    ${(()=>{const C=window.innerWidth>=700,S=(ye,me,ke)=>{var G,W;const k=(e.gcDefs||[]).find(ce=>ce.name===ye.gc_type),q=(k==null?void 0:k.name)||ye.gc_type,K=(k==null?void 0:k.effect)||((G=Oe[ye.gc_type])==null?void 0:G.desc)||"",O=k!=null&&k.image_url?`/icons/${k.image_url}`:null,V=((W=Oe[ye.gc_type])==null?void 0:W.icon)||"⚡";return`<div class="gc-mini" data-gc-id="${ye.id}" data-gc-type="${ye.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${it(q,O,V,K,{width:me})}
        </div>`},Y=(ye,me)=>{var ke;return`<div id="boost-card"
          style="box-sizing:border-box;width:${ye}px;height:${me}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(me*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(me*.2)}px">⚡</div>
            <div style="font-size:${Math.round(me*.09)}px;color:#000;font-weight:900">+${(ke=e.boostCard)==null?void 0:ke.value}</div>
          </div>`},R=(ye,me)=>me?Y(95,162):S(ye,95),ee=(ye,me)=>me?Y(53,90):S(ye,53),fe=C?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",he=w?`<button id="btn-results" style="${fe};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${fe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:p?`<button id="btn-pass" style="${fe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:b?`<button id="btn-action" style="${fe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${e.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:u?`<button id="btn-action" style="${fe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${e.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${fe};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,be=b||u?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${e.selected.length}/3 sélectionné(s)</div>`:"",je=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${C?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(ye=>`<div class="sub-btn-col" data-sub-id="${ye.cardId}" style="cursor:pointer;flex-shrink:0">${_t(ye,76,100)}</div>`).join("")}
      </div>`,Be=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${si(e.homeTeam,e.formation,e.phase,o,C?1300:At(),C?600:Gt(),g)}
        </div>
      </div>`;return C?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${je}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Be}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${he}${be}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${T.map(ye=>R(ye,!1)).join("")}
            ${I?R(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${si(e.homeTeam,e.formation,e.phase,o,C?1300:At(),C?600:Gt(),g)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${T.map(ye=>ee(ye,!1)).join("")}
            ${I?ee(null,!0):""}
            <div id="sub-btn-main" style="cursor:${d?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${d?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${d?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${d?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${n.length}</div>
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
          <div>${he}${be}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${e.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...e.log].reverse().map(C=>{var S,Y,R;if(C.type==="duel"){const ee=C.isGoal,fe=C.homeScored?"#FFD700":ee?"#ff6b6b":"rgba(255,255,255,0.3)",he=C.homeScored?"⚽ BUT !":ee?"⚽ BUT IA !":(S=C.homePlayers)!=null&&S.length?"⚔️ Attaque":"🛡️ Défense",be=(C.homeTotal??0)>=(C.aiTotal??0);return`<div style="padding:8px;border-radius:8px;background:${ee?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${fe};margin-bottom:4px">
                <div style="font-size:9px;color:${fe};letter-spacing:1px;margin-bottom:6px;font-weight:700;text-transform:uppercase;text-align:center">${he}</div>
                <div style="display:flex;align-items:center;justify-content:center;gap:10px">
                  ${(Y=C.aiPlayers)!=null&&Y.length?`<div style="flex:1;display:flex;justify-content:flex-end;opacity:0.75">${Qe(C.aiPlayers,"#ff6b6b",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                  <div style="flex-shrink:0;display:flex;align-items:center;gap:6px">
                    <span style="font-size:16px;font-weight:900;color:${be?"#e03030":"#22c55e"}">${C.aiTotal??"–"}</span>
                    <span style="font-size:9px;color:rgba(255,255,255,0.3)">VS</span>
                    <span style="font-size:16px;font-weight:900;color:${be?"#22c55e":"#e03030"}">${C.homeTotal??"–"}</span>
                  </div>
                  ${(R=C.homePlayers)!=null&&R.length?`<div style="flex:1;display:flex;justify-content:flex-start">${Qe(C.homePlayers,"rgba(255,255,255,0.7)",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                </div>
              </div>`}return C.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${C.outPlayer?_t({...C.outPlayer,used:!0,_line:C.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${C.inPlayer?_t({...C.inPlayer,_line:C.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:C.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${C.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${C.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function M(){const C=t.querySelector(".match-screen");if(!C)return;const S=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);C.style.bottom="auto",C.style.height=S+"px",C.style.minHeight=S+"px",C.style.maxHeight=S+"px",C.style.overflow="hidden";const Y=t.querySelector("#mobile-action-bar"),R=t.querySelector("#mobile-play-area");Y&&R&&(R.style.paddingBottom=Y.offsetHeight+"px")}if(M(),setTimeout(M,120),setTimeout(M,400),setTimeout(M,1e3),e._vvBound||(e._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",M),window.visualViewport.addEventListener("scroll",M)),window.addEventListener("resize",M)),function(){const S=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!S)return;const Y=S.closest("#match-terrain-wrap");Y&&(Y.style.cssText="position:relative;width:100%;height:100%;padding:0"),S.removeAttribute("width"),S.removeAttribute("height"),S.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",S.setAttribute("preserveAspectRatio","xMidYMid meet")}(),e._resizeBound||(e._resizeBound=!0,window.addEventListener("resize",()=>{const C=t.querySelector(".terrain-wrapper svg");if(C){const S=C.closest("#match-terrain-wrap");S&&(S.style.cssText="position:relative;width:100%;height:100%;padding:0"),C.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),e.phase==="attack"||e.phase==="defense"){let C=!1,S=30;const Y=()=>document.getElementById("match-timer"),R=()=>{const ee=Y();if(!ee)return;const fe=String(Math.floor(S/60)).padStart(2,"0"),he=String(S%60).padStart(2,"0");ee.textContent=` ${fe}:${he}`,ee.style.color=C?"#ff2222":"#ff9500",ee.style.fontWeight="900"};R(),e._timerInt=setInterval(()=>{if(S--,S<0)if(!C)C=!0,S=15,R(),Zo("/sounds/timer-urgent.mp3",.6);else{clearInterval(e._timerInt),e._timerInt=null,Ke(),e.homeScore=0,e.aiScore=3;const ee=document.createElement("div");ee.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",ee.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(ee),setTimeout(()=>{ee.remove(),vt(t,e,i)},2500)}else R()},1e3)}(ne=document.getElementById("match-quit"))==null||ne.addEventListener("click",()=>{ot(t),confirm("Abandonner ? Résultat : défaite 3-0")&&(e.homeScore=0,e.aiScore=3,vt(t,e,i))}),(te=document.getElementById("view-ai"))==null||te.addEventListener("click",()=>ra(e,i)),(X=document.getElementById("toggle-history"))==null||X.addEventListener("click",()=>{var C;(C=document.getElementById("match-history-panel"))==null||C.classList.add("open")}),($=document.getElementById("close-history"))==null||$.addEventListener("click",()=>{var C;(C=document.getElementById("match-history-panel"))==null||C.classList.remove("open")}),(N=document.getElementById("btn-action"))==null||N.addEventListener("click",()=>{e.selected.length!==0&&(b?Vr(t,e,i):u&&Yr(t,e,i))}),(ae=document.getElementById("btn-results"))==null||ae.addEventListener("click",()=>vt(t,e,i)),(j=document.getElementById("btn-pass"))==null||j.addEventListener("click",()=>{if(e.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Ui(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),vt(t,e,i);return}e.phase="ai-attack",Ie(t,e,i),setTimeout(()=>uo(t,e,i),800)}),t.querySelectorAll(".match-slot-hit").forEach(C=>{C.addEventListener("click",()=>Kr(C,e,t,i))}),t.querySelectorAll(".match-used-hit").forEach(C=>{C.addEventListener("click",()=>Di(t,e,i,null,C.dataset.cardId))}),t.querySelectorAll(".gc-mini").forEach(C=>{b?C.addEventListener("click",()=>ta(C.dataset.gcId,C.dataset.gcType,t,e,i)):(C.style.opacity="0.35",C.style.cursor="default",C.addEventListener("click",()=>zt("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(de=document.getElementById("boost-card"))==null||de.addEventListener("click",()=>na(t,e,i)),t.querySelectorAll(".sub-btn-col").forEach(C=>{C.addEventListener("click",()=>Di(t,e,i,C.dataset.subId))}),(ve=document.getElementById("sub-btn-main"))==null||ve.addEventListener("click",()=>Di(t,e,i))}function Kr(t,e,i,o){const r=t.dataset.cardId,n=t.dataset.role,a=e.selected.findIndex(d=>d.cardId===r);if(a!==-1)e.selected.splice(a,1);else{if(e.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const d=(e.homeTeam[n]||[]).find(l=>l.cardId===r);if(d)e.selected.push({...d,_role:n,_line:n});else{const l=Object.keys(e.homeTeam||{}).map(s=>`${s}:${(e.homeTeam[s]||[]).length}`).join(" ");o.toast(`Sélection impossible (rôle="${n}" introuvable dans homeTeam[${l}])`,"error"),console.error("[MatchIA] toggleSelect: joueur introuvable",{cardId:r,role:n,homeTeam:e.homeTeam});return}}Ie(i,e,o)}function po(t,e,i){t.matchId&&h.from("matches").update({last_player_id:i}).eq("id",t.matchId).then(()=>{})}function Vr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),po(e,i,i.state.profile.id);const o=e.selected.map(n=>{const a=(e.homeTeam[n._role]||[]).find(l=>l.cardId===n.cardId)||n,d=["GK","DEF"].includes(n._role);return{...a,_line:n._role,...d?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),r=di(o,e.modifiers.home,e.formation);e.pendingAttack={...r,players:[...o],side:"home"},e.selected.forEach(n=>{const a=(e.homeTeam[n._role]||[]).find(d=>d.cardId===n.cardId);a&&(a.used=!0)}),e.log.push({text:`⚔️ Vous attaquez : ${r.total} (base ${r.base}${r.links?` +${r.links} liens`:""}) — ${e.selected.map(n=>n.name).join(", ")}`,type:"info"}),e.selected=[],e.modifiers.home={},e.phase="ai-defense",Ie(t,e,i),setTimeout(()=>ea(t,e,i),1200)}function Yr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),po(e,i,i.state.profile.id);const o=e.stadiumDef||null,r=e.selected.map(l=>{const s=(e.homeTeam[l._role]||[]).find(m=>m.cardId===l.cardId)||l,c=s.stadiumBonus||o&&(o.club_id&&String(s.club_id)===String(o.club_id)||o.country_code&&s.country_code===o.country_code)||!1;return{...s,_line:l._role,stadiumBonus:c}}),n=li(r,e.modifiers.home,e.formation);e.selected.forEach(l=>{const s=(e.homeTeam[l._role]||[]).find(c=>c.cardId===l.cardId);s&&(s.used=!0)});const a=Zi(e.pendingAttack.total,n.total,e.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(e.pendingAttack.players||[]).map(l=>Ve(l)),homePlayers:e.selected.map(l=>{const s=(e.homeTeam[l._role]||[]).find(c=>c.cardId===l.cardId)||l;return Ve(s)}),homeTotal:n.total,aiTotal:e.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)d.text="🛡️ Bouclier ! But annulé.",e.log.push(d);else if(a.goal){e.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${e.pendingAttack.total} > ${n.total})`,e.log.push(d),e.selected=[],e.modifiers.home={},e.pendingAttack=null,Ie(t,e,i),Ze(d.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${n.total} ≥ ${e.pendingAttack.total})`,e.log.push(d);e.selected=[],e.modifiers.home={},e.pendingAttack=null,Mt(t,e,i,"home-attack")}function Wr(t,e=()=>{}){if(t.aiSubsUsed>=t.aiMaxSubs)return e();const i=Object.values(t.aiTeam).flat().filter(s=>s.used);if(!i.length)return e();const o=(t.aiSubs||[]).filter(s=>!t.aiUsedSubIds.includes(s.cardId));if(!o.length)return e();const r=i[Math.floor(Math.random()*i.length)],n=o.find(s=>s.job===r.job)||o[0],a={...n,used:!1,_line:r._line,_col:r._col},d=t.aiTeam[r._line],l=d.findIndex(s=>s.cardId===r.cardId);l!==-1&&(d[l]=a),t.aiUsedSubIds.push(n.cardId),t.aiSubsUsed++,t.log.push({text:`🔄 IA : ${n.firstname} ${n.name} remplace ${r.firstname} ${r.name}`,type:"info"}),yn(r,a,e)}function Jr(t,e){const i=t.effect_params||{},o=i.value||1,r=i.count||1,n=i.roles||[],a=i.target||"home";switch(t.effect_type){case"BOOST_STAT":{const l=Object.values(e.aiTeam).flat().filter(s=>!s.used&&(!n.length||n.includes(s._line))).sort(()=>Math.random()-.5).slice(0,r);l.forEach(s=>{s.boost=(s.boost||0)+o}),l.length&&e.log.push({text:`⚡ IA : +${o} sur ${l.length} joueur(s)`,type:"gc"});break}case"DEBUFF_STAT":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(c=>!c.used&&(!n.length||n.includes(c._line))).sort(()=>Math.random()-.5).slice(0,r);s.forEach(c=>{c.boost=(c.boost||0)-o}),s.length&&e.log.push({text:`🎯 IA : -${o} sur ${s.length} joueur(s)${a!=="ai"?" (vous)":""}`,type:"gc"});break}case"GRAY_PLAYER":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(c=>!c.used&&(!n.length||n.includes(c._line))).sort(()=>Math.random()-.5).slice(0,r);s.forEach(c=>{c.used=!0}),s.length&&e.log.push({text:`❌ IA : ${s.length} joueur(s)${a!=="ai"?" (vous)":""} exclu(s)`,type:"gc"});break}case"REVIVE_PLAYER":{const l=Object.values(e.aiTeam).flat().filter(s=>s.used).sort(()=>Math.random()-.5).slice(0,r);l.forEach(s=>{s.used=!1}),l.length&&e.log.push({text:`💫 IA : ${l.length} joueur(s) ressuscité(s)`,type:"gc"});break}case"REMOVE_GOAL":e.homeScore>0&&(e.homeScore--,e.log.push({text:"🚫 IA : votre dernier but est annulé !",type:"gc"}));break;case"ADD_GOAL_DRAW":e.homeScore===e.aiScore&&(e.aiScore++,e.log.push({text:"🎯 IA : but bonus (match nul) !",type:"gc"}));break;case"ADD_SUB":e.aiMaxSubs=(e.aiMaxSubs||3)+o,e.log.push({text:`🔄 IA : +${o} remplacement(s)`,type:"gc"});break}}function Xr(t,e=()=>{}){var a;if(!((a=t.aiGcCards)!=null&&a.length))return e();const i=t.aiGcTarget||2;if(t.aiUsedGc.length>=i)return e();const o=t.aiGcCards.filter(d=>!t.aiUsedGc.includes(d.id));if(!o.length||!(t.round>=4&&t.aiUsedGc.length===0)&&Math.random()>.55)return e();const n=o[Math.floor(Math.random()*o.length)];t.aiUsedGc.push(n.id),n.effect_type?Jr(n,t):t.log.push({text:`⚡ IA joue ${n.icon||"⚡"} ${n.name}`,type:"gc"}),Qr(n,e)}function Qr(t,e=()=>{}){const i=document.getElementById("ai-gc-anim-overlay");i&&i.remove();const o=document.createElement("div");o.id="ai-gc-anim-overlay",o.style.cssText=`
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
    </div>`,document.body.appendChild(o),setTimeout(()=>{o.remove(),e()},2100)}function uo(t,e,i){po(e,i,null),Wr(e,()=>{Xr(e,()=>{Ie(t,e,i),Zr(t,e,i)})})}function Zr(t,e,i){let o=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(l=>!l.used),r=!1;if(!o.length){const l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(c=>!c.used),s=Ut(e.homeTeam);if(s||l.length===0){const c=(e.aiTeam.DEF||[]).filter(x=>!x.used),m=(e.aiTeam.GK||[]).filter(x=>!x.used);o=s?c.length?c:m:[...c,...m],r=!0}}const n=Wo(o,"attack",e.difficulty);if(!n.length){Ki(t,e,i);return}r&&n.forEach(l=>{l._line=l._line||l.job,l.note_a=Math.max(1,Number(l.note_a)||0)});const a=di(n,e.modifiers.ai,e.formation);if(e.pendingAttack={...a,players:n,side:"ai"},n.forEach(l=>{l.used=!0}),e.log.push({text:`🤖 IA attaque : ${a.total} (${n.map(l=>l.name).join(", ")})`,type:"info"}),e.modifiers.ai={},[...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(l=>!l.used).length===0){if(n.length===1&&(n[0]._line==="GK"||n[0].job==="GK")&&Ut(e.homeTeam)&&e.homeScore===e.aiScore){e.aiScore++,zi(t,e,i,"ai",n[0]);return}e.aiScore++;const s={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:n.map(c=>Ve(c)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};e.log.push(s),e.pendingAttack=null,Ie(t,e,i),Ze(s.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}e.phase="defense",Ie(t,e,i)}function ea(t,e,i){var s,c;const o=[...e.aiTeam.GK||[],...e.aiTeam.DEF||[],...e.aiTeam.MIL||[]],r=Wo(o,"defense",e.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(m=>(e.aiTeam[m]||[]).filter(x=>!x.used)).length){const m=((s=e.pendingAttack)==null?void 0:s.players)||[];if(m.length===1&&(m[0]._line==="GK"||m[0].job==="GK")&&e.homeScore===e.aiScore){e.homeScore++,zi(t,e,i,"home",m[0]);return}e.homeScore++;const y={type:"duel",isGoal:!0,homeScored:!0,homePlayers:m.map(g=>Ve(g)),homeTotal:((c=e.pendingAttack)==null?void 0:c.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};e.log.push(y),e.modifiers.ai={},e.pendingAttack=null,Ie(t,e,i),Ze(y.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}const a=r.length>0?li(r,e.modifiers.ai,e.formation).total:0;r.forEach(m=>{m.used=!0});const d=Zi(e.pendingAttack.total,a,e.modifiers.ai),l={type:"duel",title:"Attaque",homePlayers:(e.pendingAttack.players||[]).map(m=>Ve(m)),aiPlayers:r.map(m=>Ve(m)),homeTotal:e.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(d.shielded)l.text="🛡️ Bouclier IA !",e.log.push(l);else if(d.goal){e.homeScore++,l.isGoal=!0,l.homeScored=!0,l.text=`⚽ BUT ! (${e.pendingAttack.total} > ${a})`,e.log.push(l),e.modifiers.ai={},e.pendingAttack=null,Ie(t,e,i),Ze(l.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}else l.text=`🧤 IA défend (${a} ≥ ${e.pendingAttack.total})`,e.log.push(l);e.modifiers.ai={},e.pendingAttack=null,Mt(t,e,i,"ai-attack")}function Mt(t,e,i,o){if(e.round++,!wn(t,e,i)){if(fo(e)){vt(t,e,i);return}if(o==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(a=>!a.used))){Ki(t,e,i);return}e.phase="attack",Ie(t,e,i)}else{if(!["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(a=>!a.used))){Ki(t,e,i);return}e.phase="ai-attack",Ie(t,e,i),setTimeout(()=>uo(t,e,i),800)}}}function Ut(t){return!["GK","DEF","MIL","ATT"].some(e=>(t[e]||[]).some(i=>!i.used))}function Po(t){const e=(t.GK||[]).some(o=>!o.used),i=["DEF","MIL","ATT"].some(o=>(t[o]||[]).some(r=>!r.used));return e&&!i}function wn(t,e,i){if(e.homeScore!==e.aiScore)return!1;if(Po(e.homeTeam)&&Ut(e.aiTeam)){const o=(e.homeTeam.GK||[]).find(r=>!r.used);return o?(o.used=!0,e.homeScore++,zi(t,e,i,"home",o),!0):!1}if(Po(e.aiTeam)&&Ut(e.homeTeam)){const o=(e.aiTeam.GK||[]).find(r=>!r.used);return o?(o.used=!0,e.aiScore++,zi(t,e,i,"ai",o),!0):!1}return!1}function zi(t,e,i,o,r){e.log.push({type:"duel",isGoal:!0,homeScored:o==="home",homePlayers:o==="home"?[Ve(r)]:[],aiPlayers:o==="ai"?[Ve(r)]:[],text:`⚽ DERNIER CORNER — Le gardien ${o==="home"?"":"adverse "}marque !`});const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(n);const a=(d,l)=>new Promise(s=>{n.innerHTML=`<div style="font-size:32px;font-weight:900;color:${l};letter-spacing:2px;animation:lcFade 1.4s ease both">${d}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(s,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),n.remove(),e.pendingAttack=null,Ie(t,e,i),Ze([Ve(r)],e.homeScore,e.aiScore,o==="home",()=>{if(fo(e)){vt(t,e,i);return}Mt(t,e,i,o==="home"?"ai-attack":"home-attack")})))()}function fo(t){const e=["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(r=>!r.used)),i=["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(r=>!r.used));return!e&&!i}function Ui(t,e){return!(["MIL","ATT"].some(r=>(t[r]||[]).some(n=>!n.used))||Ut(e)||!["MIL","ATT"].some(r=>(e[r]||[]).some(n=>!n.used)))}function Ki(t,e,i){if(!wn(t,e,i)){if(fo(e)){vt(t,e,i);return}if(Ui(e.homeTeam,e.aiTeam)&&Ui(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),vt(t,e,i);return}e.phase="attack",Ie(t,e,i)}}function Di(t,e,i,o=null,r=null){var y,g;if(e.phase!=="attack"){zt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(e.usedSubIds||(e.usedSubIds=[]),e.subsUsed>=e.maxSubs){zt(`Maximum ${e.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const n=Object.entries(e.homeTeam).flatMap(([f,b])=>(b||[]).filter(u=>u.used).map(u=>({...u,_line:u._line||f}))),a=e.homeSubs.filter(f=>!e.usedSubIds.includes(f.cardId));if(!n.length){zt("Aucun joueur utilisé à remplacer");return}if(!a.length){zt("Aucun remplaçant disponible");return}let d=Math.max(0,n.findIndex(f=>f.cardId===r));const l=((y=n[d])==null?void 0:y._line)||((g=n[d])==null?void 0:g.job);let s=o?Math.max(0,a.findIndex(f=>f.cardId===o)):Math.max(0,a.findIndex(f=>f.job===l)),c=!1;const m=document.createElement("div");m.id="sub-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function x(){var p,T,I,M,H,ne;const f=n[d],b=a[s],u=Math.min(130,Math.round((window.innerWidth-90)/2)),w=Math.round(u*1.35),v=te=>`background:rgba(255,255,255,0.12);border:none;color:${te?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${te?"default":"pointer"};flex-shrink:0`;m.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${e.subsUsed}/${e.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${v(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${b?_t({...b,used:!1,boost:0},u,w):"<div>—</div>"}</div>
        <button id="in-down" style="${v(s>=a.length-1)}" ${s>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${v(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${f?_t({...f,used:!1,boost:0},u,w):"<div>—</div>"}</div>
        <button id="out-down" style="${v(d>=n.length-1)}" ${d>=n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${n.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(p=m.querySelector("#sub-close"))==null||p.addEventListener("click",()=>m.remove()),(T=m.querySelector("#out-up"))==null||T.addEventListener("click",()=>{d>0&&(d--,x())}),(I=m.querySelector("#out-down"))==null||I.addEventListener("click",()=>{d<n.length-1&&(d++,x())}),(M=m.querySelector("#in-up"))==null||M.addEventListener("click",()=>{s>0&&(s--,x())}),(H=m.querySelector("#in-down"))==null||H.addEventListener("click",()=>{s<a.length-1&&(s++,x())});const E=(te,X,$,N)=>{const ae=m.querySelector("#"+te);if(!ae)return;let j=0;ae.addEventListener("touchstart",de=>{j=de.touches[0].clientY},{passive:!0}),ae.addEventListener("touchend",de=>{const ve=de.changedTouches[0].clientY-j;if(Math.abs(ve)<30)return;const C=X();ve<0&&C<N-1?($(C+1),x()):ve>0&&C>0&&($(C-1),x())},{passive:!0})};E("in-panel",()=>s,te=>s=te,a.length),E("out-panel",()=>d,te=>d=te,n.length),(ne=m.querySelector("#sub-confirm"))==null||ne.addEventListener("click",te=>{if(te.preventDefault(),te.stopPropagation(),c)return;c=!0;const X=n[d],$=a[s];if(!X||!$)return;let N=null,ae=-1;for(const[de,ve]of Object.entries(e.homeTeam)){const C=(ve||[]).findIndex(S=>S.cardId===X.cardId);if(C!==-1){N=de,ae=C;break}}if(ae===-1||!N){zt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),m.remove();return}const j={...$,_line:N,_col:X._col||0,used:!1,boost:0};e.homeTeam[N].splice(ae,1,j),e.usedSubIds||(e.usedSubIds=[]),e.usedSubIds.push($.cardId),e.subsUsed++,e.selected=[],e.log.push({type:"sub",subSide:"home",clubName:e.clubName,outPlayer:{name:X.name,firstname:X.firstname,note:jt(X,N),portrait:Ct(X),job:X.job,country_code:X.country_code,rarity:X.rarity,clubName:X.clubName,clubLogo:X.clubLogo},inPlayer:{name:$.name,firstname:$.firstname,note:jt($,N),portrait:Ct($),job:$.job,country_code:$.country_code,rarity:$.rarity,clubName:$.clubName,clubLogo:$.clubLogo},text:`🔄 ${$.firstname} ${$.name} remplace ${X.firstname} ${X.name}`}),m.remove(),yn(X,$,()=>Ie(t,e,i))})}document.body.appendChild(m),x()}function ta(t,e,i,o,r){var x,y;const n=(o.gcDefs||[]).find(g=>g.name===e),a=Oe[e]||{icon:"⚡",desc:"Carte spéciale."},d=(n==null?void 0:n.name)||e,l=(n==null?void 0:n.effect)||a.desc,s=n!=null&&n.image_url?`/icons/${n.image_url}`:null,c=a.icon||"⚡",m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",m.innerHTML=`
    ${it(d,s,c,l,{width:190})}
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(m),(x=m.querySelector("#gc-back"))==null||x.addEventListener("click",()=>m.remove()),(y=m.querySelector("#gc-use"))==null||y.addEventListener("click",()=>{m.remove(),oa(t,e,i,o,r)})}function bi(t,e,i,o,r,n){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let d=[];function l(){var s,c;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${d.length}/${e}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${t.map(m=>{const x=m._line||m.job||"MIL",y=d.find(f=>f.cardId===m.cardId),g=qe({...m,_evolution_bonus:0},{width:90,showStad:!0,role:x,extraNote:m.boost||0});return`<div class="gc-pick-item" data-cid="${m.cardId}"
          style="position:relative;border-radius:8px;${y?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${m.used?"opacity:0.3;pointer-events:none":""}">
          ${g}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${d.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${d.length}/${e})
      </button>
    </div>`,(s=a.querySelector("#gc-picker-close"))==null||s.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(m=>{m.addEventListener("click",()=>{const x=m.dataset.cid,y=t.find(f=>f.cardId===x);if(!y)return;const g=d.findIndex(f=>f.cardId===x);g>-1?d.splice(g,1):d.length<e&&d.push(y),l()})}),(c=a.querySelector("#gc-picker-confirm"))==null||c.addEventListener("click",()=>{a.remove(),n(d)})}l(),document.body.appendChild(a)}const ia={BOOST_STAT:({value:t=1,count:e=1,roles:i=[]},o,r,n)=>{const a=Object.entries(o.homeTeam).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,l])=>l.filter(s=>!s.used).map(s=>({...s,_line:d})));return a.length?(bi(a,e,`Choisir ${e} joueur(s) à booster (+${t})`,r,o,d=>{d.forEach(l=>{const s=(o.homeTeam[l._line]||[]).find(c=>c.cardId===l.cardId);s&&(s.boost=(s.boost||0)+t,o.log.push({text:`⚡ +${t} sur ${s.name}`,type:"info"}))}),Ie(r,o,n)}),!0):(o.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ie(r,o,n),!0)},DEBUFF_STAT:({value:t=1,count:e=1,roles:i=[],target:o="ai"},r,n,a)=>{const d=o==="home"?r.homeTeam:r.aiTeam,l=o==="ai"?"adverse":"allié",s=Object.entries(d).filter(([c])=>!i.length||i.includes(c)).flatMap(([c,m])=>m.filter(x=>!x.used).map(x=>({...x,_line:c})));return s.length?(bi(s,e,`Choisir ${e} joueur(s) ${l}(s) à débuffer (-${t})`,n,r,c=>{c.forEach(m=>{const y=((o==="home"?r.homeTeam:r.aiTeam)[m._line]||[]).find(g=>g.cardId===m.cardId);y&&(y.boost=(y.boost||0)-t,r.log.push({text:`🎯 -${t} sur ${y.name}${o==="ai"?" (IA)":""}`,type:"info"}))}),Ie(n,r,a)}),!0):(r.log.push({text:`🎯 Aucun joueur ${l} disponible`,type:"info"}),Ie(n,r,a),!0)},GRAY_PLAYER:({count:t=1,roles:e=[],target:i="ai"},o,r,n)=>{const a=i==="home"?o.homeTeam:o.aiTeam,d=i==="ai"?"adverse":"allié",l=Object.entries(a).filter(([s])=>!e.length||e.includes(s)).flatMap(([s,c])=>c.filter(m=>!m.used).map(m=>({...m,_line:s})));return l.length?(bi(l,t,`Choisir ${t} joueur(s) ${d}(s) à exclure`,r,o,s=>{s.forEach(c=>{const x=((i==="home"?o.homeTeam:o.aiTeam)[c._line]||[]).find(y=>y.cardId===c.cardId);x&&(x.used=!0,o.log.push({text:`❌ ${x.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ie(r,o,n)}),!0):(o.log.push({text:`❌ Aucun joueur ${d} à exclure`,type:"info"}),Ie(r,o,n),!0)},REVIVE_PLAYER:({count:t=1,roles:e=[]},i,o,r)=>{const n=Object.entries(i.homeTeam).filter(([a])=>!e.length||e.includes(a)).flatMap(([a,d])=>d.filter(l=>l.used).map(l=>({...l,_line:a})));return n.length?(bi(n,t,`Choisir ${t} joueur(s) à ressusciter`,o,i,a=>{a.forEach(d=>{const l=(i.homeTeam[d._line]||[]).find(s=>s.cardId===d.cardId);l&&(l.used=!1,i.log.push({text:`💫 ${l.name} ressuscité !`,type:"info"}))}),Ie(o,i,r)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ie(o,i,r),!0)},REMOVE_GOAL:({},t)=>(t.aiScore>0?(t.aiScore--,t.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):t.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},t)=>(t.homeScore===t.aiScore?(t.homeScore++,t.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):t.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:t=1},e)=>(e.maxSubs=(e.maxSubs||3)+t,e.log.push({text:`🔄 +${t} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function oa(t,e,i,o,r){o.usedGc.push(t);const n=o.gcDefs||[],a=n.find(l=>l.name===e)||n.find(l=>{var s;return((s=l.name)==null?void 0:s.toLowerCase().trim())===(e==null?void 0:e.toLowerCase().trim())});let d=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const l=ia[a.effect_type];l?l(a.effect_params||{},o,i,r)||(d=!0):(r.toast(`Effet "${a.effect_type}" non implémenté`,"error"),d=!0)}else{switch(e){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const l=Object.entries(o.homeTeam).flatMap(([s,c])=>(c||[]).filter(m=>m.used).map(m=>({...m,_line:s})));l.length?(l[0].used=!1,o.log.push({text:`💫 ${l[0].name} ressuscité !`,type:"info"})):o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const l=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(s=>!s.used);if(l.length){const s=l.sort((c,m)=>jt(m,"ATT")-jt(c,"ATT"))[0];s.used=!0,o.log.push({text:`❄️ ${s.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}d=!0}h.from("cards").delete().eq("id",t).then(()=>{}),d&&Ie(i,o,r)}function na(t,e,i){const o=Object.values(e.homeTeam).flat().filter(r=>!r.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${e.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${o.map(r=>`
        <div class="player-boost-opt" data-card-id="${r.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${An[r.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${jt(r,r._line||r.job)}</div>
          <div style="flex:1"><b>${r.firstname} ${r.name}</b><div style="font-size:11px;color:#888">${r._line||r.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${e.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(r=>{r.addEventListener("click",()=>{const n=r.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const d=(e.homeTeam[a]||[]).find(l=>l.cardId===n);if(d){d.boost=(d.boost||0)+e.boostCard.value,e.log.push({text:`⚡ Boost +${e.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}e.boostUsed=!0,i.closeModal(),Ie(t,e,i)})})}async function vt(t,e,i){var x,y,g,f;Nt(),Ke(),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),e.phase="finished";const{state:o}=i,r=e.homeScore>e.aiScore,n=e.homeScore===e.aiScore,a=r?"victoire":n?"nul":"defaite",d=e.isSolo&&((x=e.soloLevelConfig)!=null&&x.reward_credits)&&r?Number(e.soloLevelConfig.reward_credits):Tn(e.mode,a);if(e.isSolo&&r)try{const{data:b}=await h.from("user_solo_progress").select("unlocked_level").eq("user_id",o.profile.id).maybeSingle(),u=(b==null?void 0:b.unlocked_level)||1;e.soloLevel>=u&&await h.from("user_solo_progress").upsert({user_id:o.profile.id,unlocked_level:e.soloLevel+1,updated_at:new Date().toISOString()})}catch(b){console.warn("[Solo] Erreur mise à jour progression:",b.message)}const l="00000000-0000-0000-0000-000000000000";let s=null;if(e.isRankedAI)try{const{data:b}=await h.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",o.profile.id).single();if(b){const u=b.mmr??450,w=b.mmr_deviation??350,v=b.mmr_volatility??.06,E=r?1:n?.5:0,p=(b.placement_matches??0)<10,T=Yo(u,w,v,u,350,E,p),I=n?null:r?o.profile.id:l;await h.rpc("update_mmr_after_ranked",{p_match_id:e.matchId,p_winner_id:I,p_home_id:o.profile.id,p_away_id:l,p_home_delta:T.delta,p_away_delta:0,p_home_new_rd:T.newRd,p_away_new_rd:350,p_home_new_vol:T.newSigma,p_away_new_vol:.06}),s=T.delta}}catch(b){console.warn("[RankedAI] Erreur mise à jour MMR:",b.message)}e.matchId&&await h.from("matches").update({status:"finished",home_score:e.homeScore,away_score:e.aiScore,winner_id:r?o.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",e.matchId);const c={credits:(o.profile.credits||0)+d,matches_played:(o.profile.matches_played||0)+1};r?c.wins=(o.profile.wins||0)+1:n?c.draws=(o.profile.draws||0)+1:c.losses=(o.profile.losses||0)+1,await h.from("users").update(c).eq("id",o.profile.id),await i.refreshProfile();const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",m.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:380px;width:100%">
      <div style="font-size:72px;margin-bottom:12px">${r?"🏆":n?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${r?"Victoire !":n?"Match nul":"Défaite"}</h2>
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

      ${e.isSolo&&r?`<div style="background:rgba(26,107,60,0.2);border:1px solid #1A6B3C;border-radius:14px;padding:12px;margin-bottom:12px;font-size:14px;font-weight:700">🔓 Niveau ${e.soloLevel+1} débloqué !</div>`:""}

      <div style="display:flex;gap:10px;margin-top:8px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3);padding:12px 8px;font-size:14px;white-space:nowrap">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1;padding:12px 8px;font-size:14px;white-space:nowrap">${e.isRankedAI?"🔄 Nouveau match":"Rejouer"}</button>
      </div>
      ${e.isSolo&&r?`<button class="btn btn-primary" id="res-next-level" style="width:100%;margin-top:10px;padding:12px;font-size:14px;background:#D4A017;border-color:#D4A017">▶️ Niveau ${e.soloLevel+1}</button>`:""}
    </div>`,document.body.appendChild(m),(y=document.getElementById("res-home"))==null||y.addEventListener("click",()=>{m.remove(),ot(t),i.navigate("home")}),(g=document.getElementById("res-replay"))==null||g.addEventListener("click",async()=>{if(m.remove(),ot(t),e.isRankedAI){const{data:b}=await h.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",i.state.profile.id).single();ct(),i.navigate("match",{matchMode:"ranked",rankedData:{mmr:(b==null?void 0:b.mmr)??450,rd:(b==null?void 0:b.mmr_deviation)??350,sigma:(b==null?void 0:b.mmr_volatility)??.06,isPlacement:((b==null?void 0:b.placement_matches)??0)<10}});return}i.navigate("match",e.isSolo?{matchMode:e.mode,soloLevel:e.soloLevel}:{matchMode:e.mode})}),(f=document.getElementById("res-next-level"))==null||f.addEventListener("click",()=>{m.remove(),ot(t),i.navigate("match",{matchMode:"solo",soloLevel:e.soloLevel+1})})}function ra(t,e){e.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Qi(t.aiTeam,t.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const aa={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function sa(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}async function la(t,e){!t||!e||await Promise.all([Fo(t,"win"),Fo(e,"loss")])}async function Fo(t,e){const{data:i}=await h.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",t).eq("card_type","player");if(!(i!=null&&i.length))return;const o=i.filter(r=>{var n,a;return((n=r.player)==null?void 0:n.rarity)==="pepite"||((a=r.player)==null?void 0:a.rarity)==="papyte"});o.length&&await Promise.all(o.map(r=>{const n=aa[r.player.rarity],a=e==="win"?n.win:n.loss,d=r.player.note_min??1,l=r.player.note_max??10,s=sa(r.player),c=r.current_note??s,m=Math.min(l,Math.max(d,c+a));return h.from("cards").update({current_note:m}).eq("id",r.id)}))}const Rt=t=>bn(t);async function qt(t,e,i,o,r={}){return _n(t,e,i,o,r.myGC||[],r.gcDefs||[],r.isRanked||!1,r.rankedData||null,r.stadiumDef||null,r.onMatchEnd||null,r.mlLeagueId||null,r.mlMatchId||null)}async function da(t,e,i){const{data:o}=await h.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!o){e.toast("Match introuvable","error"),e.navigate("home");return}const r=o.home_id===e.state.user.id;let n=null,a=null;if(o.mode==="mini_league"){const{data:d}=await h.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();d&&(n=d.league_id,a=d.id)}return _n(t,e,i,r,[],[],o.is_ranked||!1,null,null,null,n,a)}async function _n(t,e,i,o,r=[],n=[],a=!1,d=null,l=null,s=null,c=null,m=null){const{state:x,navigate:y,toast:g}=e,f=o?"p1":"p2",b=o?"p2":"p1",u=(r||[]).map(_=>_.id),w=(r||[]).map(_=>({id:_.id,gc_type:_.gc_type,_gcDef:_._gcDef||null}));t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:v}=await h.from("matches").select("*").eq("id",i).single();if(!v){g("Match introuvable","error"),y("home");return}async function E(){var ze,Le;console.log("[PvP] buildGameState match:",{id:v.id,home_deck_id:v.home_deck_id,away_deck_id:v.away_deck_id,mode:v.mode,is_ranked:v.is_ranked});const[{data:_,error:z},{data:A,error:B},{data:L},{data:P}]=await Promise.all([h.rpc("get_deck_for_match",{p_deck_id:v.home_deck_id}),h.rpc("get_deck_for_match",{p_deck_id:v.away_deck_id}),h.from("users").select("id,pseudo,club_name").eq("id",v.home_id).single(),h.from("users").select("id,pseudo,club_name").eq("id",v.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",z==null?void 0:z.message,"p2:",B==null?void 0:B.message,"p1D:",(ze=_==null?void 0:_.starters)==null?void 0:ze.length,"p2D:",(Le=A==null?void 0:A.starters)==null?void 0:Le.length);const D=re=>{const Me=Number(re.evolution_bonus)||0;return{cardId:re.card_id,position:re.position,id:re.id,firstname:re.firstname,name:re.surname_real,country_code:re.country_code,club_id:re.club_id,job:re.job,job2:re.job2,note_g:(Number(re.note_g)||0)+(re.job==="GK"||re.job2==="GK"&&Number(re.note_g)>0?Me:0),note_d:(Number(re.note_d)||0)+(re.job==="DEF"||re.job2==="DEF"&&Number(re.note_d)>0?Me:0),note_m:(Number(re.note_m)||0)+(re.job==="MIL"||re.job2==="MIL"&&Number(re.note_m)>0?Me:0),note_a:(Number(re.note_a)||0)+(re.job==="ATT"||re.job2==="ATT"&&Number(re.note_a)>0?Me:0),evolution_bonus:Me,rarity:re.rarity,skin:re.skin,hair:re.hair,hair_length:re.hair_length,face:re.face||null,clubName:re.club_encoded_name||null,clubLogo:re.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},F=((_==null?void 0:_.starters)||[]).map(re=>D(re)),U=((A==null?void 0:A.starters)||[]).map(re=>D(re)),J=(_==null?void 0:_.formation)||"4-4-2",oe=(A==null?void 0:A.formation)||"4-4-2";let Z=Ri(F,J),ie=Ri(U,oe);const le=((_==null?void 0:_.subs)||[]).map(re=>D(re)),pe=((A==null?void 0:A.subs)||[]).map(re=>D(re)),Ee=(_==null?void 0:_.stadium_def)||(o?l:null),ge=(A==null?void 0:A.stadium_def)||(o?null:l);return Ee&&(Z=vi(Z,Ee),wi(le,Ee)),ge&&(ie=vi(ie,ge),wi(pe,ge)),{p1Team:Z,p2Team:ie,p1Subs:le,p2Subs:pe,p1Formation:J,p2Formation:oe,p1Name:(L==null?void 0:L.club_name)||(L==null?void 0:L.pseudo)||"Joueur 1",p2Name:(P==null?void 0:P.club_name)||(P==null?void 0:P.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:o?u:[],gc_p2:o?[]:u,gcCardsFull_p1:o?w:[],gcCardsFull_p2:o?[]:w,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:n||[],lastActionAt:new Date().toISOString()}}let p=v.game_state&&Object.keys(v.game_state).length?v.game_state:null;if(console.log("[PvP] init - amIHome:",o,"gameState exists:",!!p,"match.status:",v.status,"home_id:",v.home_id,"away_id:",v.away_id,"myId:",x.profile.id),!p)if(o){p=await E(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((p==null?void 0:p.p1Team)||{}));const{data:_}=await h.from("matches").select("game_state").eq("id",i).single();!(_!=null&&_.game_state)||!Object.keys(_.game_state).length?await h.from("matches").update({game_state:p,turn_user_id:v.home_id}).eq("id",i):p=_.game_state}else{t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let _=0;_<30&&!p;_++){await new Promise(A=>setTimeout(A,400));const{data:z}=await h.from("matches").select("game_state").eq("id",i).single();z!=null&&z.game_state&&Object.keys(z.game_state).length&&(p=z.game_state),_%5===0&&console.log("[PvP] away - poll",_,"game_state:",!!(z!=null&&z.game_state))}if(!p){g("Erreur de synchronisation","error"),y("home");return}p.gc_p2=u,p.gcCardsFull_p2=w,await h.from("matches").update({game_state:p}).eq("id",i)}let T=!1,I=null,M=!1;const H=new Set,ne=new Set;async function te(_){var oe,Z;Nt();try{h.removeChannel(X)}catch{}const z=p[f+"Score"]||0,A=p[b+"Score"]||0;let B,L;_.winner_id?(B=_.winner_id===x.profile.id,L=!1):_.forfeit?(B=z>A,L=!1):(L=z===A,B=z>A);let P="";if(a&&o)try{const{data:ie}=await h.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",v.home_id).single(),{data:le}=await h.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",v.away_id).single();if(ie&&le){const pe=B?1:L?.5:0,Ee=1-pe,ge=ie.placement_matches<10,ze=le.placement_matches<10,Le=computeGlicko2(ie.mmr,ie.mmr_deviation,ie.mmr_volatility,le.mmr,le.mmr_deviation,pe===1?1:pe===0?0:.5,ge),re=computeGlicko2(le.mmr,le.mmr_deviation,le.mmr_volatility,ie.mmr,ie.mmr_deviation,Ee===1?1:Ee===0?0:.5,ze);await h.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:L?null:B?v.home_id:v.away_id,p_home_id:v.home_id,p_away_id:v.away_id,p_home_delta:Le.delta,p_away_delta:re.delta,p_home_new_rd:Le.newRd,p_away_new_rd:re.newRd,p_home_new_vol:Le.newSigma,p_away_new_vol:re.newSigma});const Me=Le.delta,Ne=Le.newMmr,Ce=getTier(Ne),Ye=Me>=0?"+":"",He=Me>=0?"#4caf50":"#ff6b6b",nt=getTier(ie.mmr);P=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Ce.id!==nt.id?`<div style="font-size:20px;font-weight:900;color:${Ce.color}">
                    ${Ne>ie.mmr?"📈":"📉"} ${nt.emoji} ${nt.label} → ${Ce.emoji} ${Ce.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Ne>ie.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Me>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Ce.color}">${Ce.emoji} ${Ce.label}</div>`}
              ${ge?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${ie.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(ie){console.error("[Ranked] MMR update error:",ie)}(oe=document.getElementById("pvp-end-overlay"))==null||oe.remove();const D=document.createElement("div");D.id="pvp-end-overlay",D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const F=L?"🤝":B?"🏆":"😞",U=L?"MATCH NUL":B?"VICTOIRE !":"DÉFAITE",J=L?"#fff":B?"#FFD700":"#ff6b6b";D.innerHTML=`
      <div style="font-size:64px">${F}</div>
      <div style="font-size:26px;font-weight:900;color:${J}">${U}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${p[f+"Name"]} ${z} – ${A} ${p[b+"Name"]}</div>
      ${_.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${B?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${P}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${c?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(D),(Z=D.querySelector("#pvp-end-home"))==null||Z.addEventListener("click",()=>{D.remove(),ot(t),c?y("mini-league",{openLeagueId:c}):y(a?"ranked":"home")})}const X=h.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},_=>{var A;const z=_.new;try{if(z.status==="finished"||z.forfeit){if(T)return;T=!0,I&&(clearInterval(I),I=null),Ke(),z.game_state&&(p=z.game_state),te(z);return}if(z.game_state){const B=p;p=z.game_state;const L=p._lastGC;if(L&&L.seq&&!ne.has(L.seq)&&(ne.add(L.seq),L.by!==f)){fe(L.type,L.by,()=>S());return}const P=B[f+"Score"]||0,D=B[b+"Score"]||0,F=p[f+"Score"]||0,U=p[b+"Score"]||0,J=F>P,oe=U>D;if((J||oe)&&!H.has(p.round)){H.add(p.round);const Z=[...p.log||[]].reverse().find(pe=>pe.isGoal),ie=((Z==null?void 0:Z.homePlayers)||[]).map(pe=>({name:pe.name,note:pe.note,portrait:pe.portrait,job:pe.job}));!!((A=Z==null?void 0:Z.text)!=null&&A.includes("DERNIER CORNER"))?K().then(()=>{Ze(ie,F,U,J,()=>S())}):Ze(ie,F,U,J,()=>S());return}S()}}catch(B){console.error("[PvP] crash:",B)}}).subscribe();async function $(_){Object.assign(p,_),p.lastActionAt=new Date().toISOString();const{error:z}=await h.from("matches").update({game_state:p}).eq("id",i);z&&g("Erreur de synchronisation","error");try{S()}catch(A){console.error("[PvP] renderPvpScreen crash:",A)}}async function N(){if(T)return;T=!0,Nt(),Ke(),I&&(clearInterval(I),I=null);const _=o?v.away_id:v.home_id,z=o?"p2":"p1",A=o?"p1":"p2",B={...p,[z+"Score"]:3,[A+"Score"]:0,phase:"finished"},L=B.p1Score||0,P=B.p2Score||0;try{await h.from("matches").update({game_state:B}).eq("id",i);const{data:D,error:F}=await h.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:_,p_home_score:L,p_away_score:P,p_forfeit:!0});if(F&&console.error("[PvP] finish_pvp_match (forfeit):",F),c)try{await h.rpc("check_and_finish_mini_league",{p_league_id:c})}catch(U){console.error("[PvP] check_and_finish_mini_league (forfeit):",U)}try{const{data:U}=await h.rpc("apply_match_rewards",{p_match_id:i});U!=null&&U.success&&!(U!=null&&U.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(U){console.error("[PvP] apply_match_rewards (forfeit):",U)}}catch{}try{h.removeChannel(X)}catch{}setTimeout(()=>{ot(t),c?y("mini-league",{openLeagueId:c}):y("home")},800)}const ae={BOOST_STAT:({value:_=1,count:z=1,roles:A=[]},B,L)=>{const P=B[f+"Team"],D=Object.entries(P).filter(([F])=>!A.length||A.includes(F)).flatMap(([F,U])=>U.filter(J=>!J.used).map(J=>({...J,_line:F})));if(!D.length){B.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),L(B);return}j(D,z,`Choisir ${z} joueur(s) à booster (+${_})`,F=>{F.forEach(U=>{const J=(P[U._line]||[]).find(oe=>oe.cardId===U.cardId);J&&(J.boost=(J.boost||0)+_,B.log.push({text:`⚡ +${_} sur ${J.name}`,type:"info"}))}),B[f+"Team"]=P,L(B)})},DEBUFF_STAT:({value:_=1,count:z=1,roles:A=[],target:B="ai"},L,P)=>{const D=B==="home"?f:b,F=L[D+"Team"],U=B==="home"?"allié":"adverse",J=Object.entries(F).filter(([oe])=>!A.length||A.includes(oe)).flatMap(([oe,Z])=>Z.map(ie=>({...ie,_line:oe})));if(!J.length){L.log.push({text:`🎯 Aucun joueur ${U}`,type:"info"}),P(L);return}j(J,z,`Choisir ${z} joueur(s) ${U}(s) (-${_})`,oe=>{oe.forEach(Z=>{const ie=(F[Z._line]||[]).find(le=>le.cardId===Z.cardId);ie&&(ie.boost=(ie.boost||0)-_,L.log.push({text:`🎯 -${_} sur ${ie.name}`,type:"info"}))}),L[D+"Team"]=F,P(L)})},GRAY_PLAYER:({count:_=1,roles:z=[],target:A="ai"},B,L)=>{const P=A==="home"?f:b,D=B[P+"Team"],F=A==="home"?"allié":"adverse",U=Object.entries(D).filter(([J])=>!z.length||z.includes(J)).flatMap(([J,oe])=>oe.filter(Z=>!Z.used).map(Z=>({...Z,_line:J})));if(!U.length){B.log.push({text:`❌ Aucun joueur ${F}`,type:"info"}),L(B);return}j(U,_,`Choisir ${_} joueur(s) ${F}(s) à exclure`,J=>{const oe="usedCardIds_"+P,Z=new Set(B[oe]||[]);J.forEach(ie=>{const le=(D[ie._line]||[]).find(pe=>pe.cardId===ie.cardId);le&&(le.used=!0,Z.add(ie.cardId),B.log.push({text:`❌ ${le.name} exclu !`,type:"info"}))}),B[oe]=[...Z],B[P+"Team"]=D,L(B)})},REVIVE_PLAYER:({count:_=1,roles:z=[]},A,B)=>{const L=A[f+"Team"],P=Object.entries(L).filter(([D])=>!z.length||z.includes(D)).flatMap(([D,F])=>F.filter(U=>U.used).map(U=>({...U,_line:D})));if(!P.length){A.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),B(A);return}j(P,_,`Choisir ${_} joueur(s) à ressusciter`,D=>{D.forEach(F=>{const U=(L[F._line]||[]).find(J=>J.cardId===F.cardId);U&&(U.used=!1,A.log.push({text:`💫 ${U.name} ressuscité !`,type:"info"}))}),A[f+"Team"]=L,B(A)})},REMOVE_GOAL:({},_,z)=>{const A=b+"Score";_[A]>0?(_[A]--,_.log.push({text:"🚫 Dernier but annulé !",type:"info"})):_.log.push({text:"🚫 Aucun but à annuler",type:"info"}),z(_)},ADD_GOAL_DRAW:({},_,z)=>{_[f+"Score"]===_[b+"Score"]?(_[f+"Score"]++,_.log.push({text:"🎯 But bonus !",type:"info"})):_.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),z(_)},ADD_SUB:({value:_=1},z,A)=>{z.maxSubs=(z.maxSubs||3)+_,z.log.push({text:`🔄 +${_} remplacement(s)`,type:"info"}),A(z)},CUSTOM:({},_,z)=>z(_)};function j(_,z,A,B){const L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let P=[];function D(){var U,J;const F=_.map(oe=>{const Z=oe._line||oe.job||"MIL",ie=P.find(pe=>pe.cardId===oe.cardId),le=qe({...oe,_evolution_bonus:0},{width:90,showStad:!0,role:Z,extraNote:oe.boost||0});return`<div class="pp-item" data-cid="${oe.cardId}"
          style="position:relative;border-radius:8px;${ie?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${oe.used?"opacity:0.3;pointer-events:none":""}">
          ${le}
        </div>`}).join("");L.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${A}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${P.length}/${z}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${F}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${P.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${P.length}/${z})
          </button>
        </div>`,(U=L.querySelector("#pp-close"))==null||U.addEventListener("click",()=>L.remove()),L.querySelectorAll(".pp-item").forEach(oe=>{oe.addEventListener("click",()=>{const Z=oe.dataset.cid,ie=_.find(pe=>pe.cardId===Z),le=P.findIndex(pe=>pe.cardId===Z);ie&&(le>-1?P.splice(le,1):P.length<z&&P.push(ie),D())})}),(J=L.querySelector("#pp-confirm"))==null||J.addEventListener("click",()=>{L.remove(),B(P)})}D(),document.body.appendChild(L)}async function de(_,z){const B=(p["gcCardsFull_"+f]||[]).find(F=>F.id===_),L=(B==null?void 0:B._gcDef)||(p.gcDefs||[]).find(F=>{var U;return F.name===z||((U=F.name)==null?void 0:U.toLowerCase().trim())===(z==null?void 0:z.toLowerCase().trim())}),P=[...p["usedGc_"+f]||[],_],D={type:z,by:f,seq:(p._gcAnimSeq||0)+1};ne.add(D.seq),fe(z,f,async()=>{if(L!=null&&L.effect_type&&L.effect_type!=="CUSTOM"){const U=ae[L.effect_type];if(U){const J={...p};U(L.effect_params||{},J,async oe=>{oe["usedGc_"+f]=P,oe._lastGC=D,oe._gcAnimSeq=D.seq,await $(oe)});return}}const F={...p};switch(z){case"Remplacement+":F.maxSubs=(F.maxSubs||3)+1,F.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const U=b+"Score";F[U]>0&&(F[U]--,F.log.push({text:"🚫 But annulé",type:"info"}));break}}F["usedGc_"+f]=P,F._lastGC=D,F._gcAnimSeq=D.seq,await $(F)})}function ve(_,z){const A="usedCardIds_"+_,B=new Set(p[A]||[]);z.forEach(L=>B.add(L)),p[A]=[...B]}function C(){for(const _ of["p1","p2"]){const z=new Set(p["usedCardIds_"+_]||[]),A=p[_+"Team"];if(A)for(const B of["GK","DEF","MIL","ATT"])(A[B]||[]).forEach(L=>{L.used=z.has(L.cardId)})}}function S(){var bo,xo,yo,ho,vo,wo;if(p.phase==="reveal")return Y();if(p.phase==="midfield")return ee();if(p.phase==="finished")return we();const _=p[f+"Team"],z=p[b+"Team"];C();const A=p[f+"Score"],B=p[b+"Score"],L=p[f+"Name"],P=p[b+"Name"],D=p.phase===f+"-attack",F=p.phase===f+"-defense",U=Array.isArray(p["selected_"+f])?p["selected_"+f]:[],J=U.map(Q=>Q.cardId),oe=window.innerWidth>=700,Z=p[f+"Subs"]||[],ie=p["usedSubIds_"+f]||[],le=Z.filter(Q=>!ie.includes(Q.cardId)),pe=p["gcCardsFull_"+f]||[],Ee=p["usedGc_"+f]||[],ge=pe.filter(Q=>!Ee.includes(Q.id)),ze=p.boostOwner===f&&!p.boostUsed,Le=[..._.MIL||[],..._.ATT||[]].filter(Q=>!Q.used),re=[...z.MIL||[],...z.ATT||[]].filter(Q=>!Q.used),Me=!ce(z),Ne=Le.length===0&&re.length===0&&!Me,Ce=(_.DEF||[]).filter(Q=>!Q.used),Ye=(_.GK||[]).filter(Q=>!Q.used);let He=[];D&&Le.length===0&&(Me?(He=Ce.map(Q=>Q.cardId),Ce.length===0&&(He=He.concat(Ye.map(Q=>Q.cardId)))):Ne&&(He=[...Ce,...Ye].map(Q=>Q.cardId)));function nt(Q,$e,De){var Pe,ft;const Te=Q._gcDef,Pt=(Te==null?void 0:Te.name)||Q.gc_type,st=(Te==null?void 0:Te.effect)||((Pe=Oe[Q.gc_type])==null?void 0:Pe.desc)||"",Re=Te!=null&&Te.image_url?`/icons/${Te.image_url}`:null,Ge=((ft=Oe[Q.gc_type])==null?void 0:ft.icon)||"⚡";return`<div class="pvp-gc-mini" data-gc-id="${Q.id}" data-gc-type="${Q.gc_type}" style="flex-shrink:0;cursor:pointer">
        ${it(Pt,Re,Ge,st,{width:$e})}
      </div>`}function Yt(Q,$e){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${Q}px;height:${$e}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round($e*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round($e*.2)}px">⚡</div>
        <div style="font-size:${Math.round($e*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const Fe=(Q,$e)=>$e?Yt(95,162):nt(Q,95),We=(Q,$e)=>$e?Yt(68,116):nt(Q,68),Ue=oe?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",pt=D?ue(f)?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${U.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ue};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:F?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${U.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${P}</div>`,rt=D&&!ue(f)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':D||F?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${U.length}/3 sélectionné(s)</div>`:"",Bt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${oe?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${le.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':le.map(Q=>`<div class="pvp-sub-btn" data-sub-id="${Q.cardId}" style="cursor:pointer;flex-shrink:0">${_t(Q,oe?76:44,oe?100:58)}</div>`).join("")}
    </div>`,ut=D?"attack":F?"defense":"idle",Et=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${si(_,p[f+"Formation"],ut,J,oe?1300:At(),oe?600:Gt(),He)}
      </div>
    </div>`,at=p[f+"Team"],In=(()=>{var $e,De,Te,Pt,st;if(F&&(($e=p.pendingAttack)!=null&&$e.players)){const Re=p.pendingAttack;let Ge="";if(U.length>0){const Pe=U.map(Je=>{const Wt=(at[Je._role]||[]).find(Ci=>Ci.cardId===Je.cardId)||Je,Jt=at[Je._role]||[],ui=Jt.findIndex(Ci=>Ci.cardId===Je.cardId),Mi=St(Jt.length),Xt=ui>=0?Mi[ui]:Wt._col??1;return{...Wt,_line:Je._role,_col:Xt}}),ft=li(Pe,((De=p.modifiers)==null?void 0:De[f])||{},p[f+"Formation"]);Ge=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${U.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(Pe.map(Je=>({...Je,used:!1})),"#3a7bd5",ft.total,"defense",p[f+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${P} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${Qe((Re.players||[]).map(Pe=>({...Pe,used:!1})),"#ff6b6b",Re.total,"attack",p[b+"Formation"])}</div>
          ${Ge}
        </div>`}if(D&&((Te=p.pendingAttack)!=null&&Te.players)){const Re=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${Qe((Re.players||[]).map(Ge=>({...Ge,used:!1})),"#00ff88",Re.total,"attack",p[f+"Formation"])}</div>
        </div>`}if(D&&!((Pt=p.pendingAttack)!=null&&Pt.players)&&U.length>0){const Re=U.map(Pe=>{const ft=(at[Pe._role]||[]).find(Xt=>Xt.cardId===Pe.cardId)||Pe,Je=["GK","DEF"].includes(Pe._role),Wt=at[Pe._role]||[],Jt=Wt.findIndex(Xt=>Xt.cardId===Pe.cardId),ui=St(Wt.length),Mi=Jt>=0?ui[Jt]:ft._col??1;return{...ft,_line:Pe._role,_col:Mi,...Je?{note_a:Math.max(1,Number(ft.note_a)||0)}:{}}}),Ge=di(Re,((st=p.modifiers)==null?void 0:st[f])||{},p[f+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${U.length}/3)</div>
          <div style="display:flex;justify-content:center">${Qe(Re.map(Pe=>({...Pe,used:!1})),"#FFD700",Ge.total,"attack",p[f+"Formation"])}</div>
        </div>`}const Q=(p.log||[]).slice(-1)[0];return Q?'<div style="padding:2px 4px">'+xn(Q)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),go=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${L}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${A} – ${B}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${P}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${In}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(p.log||[]).length})
      </button>`;It(t),t.style.overflow="hidden",oe?t.innerHTML=`
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
            ${ge.map(Q=>Fe(Q,!1)).join("")}
            ${ze?Fe(null,!0):""}
          </div>
        </div>
      </div>`:t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${go}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${si(_,p[f+"Formation"],ut,J,At(),Gt(),He)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ge.map(Q=>We(Q,!1)).join("")}
            ${ze?We(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${D&&le.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${D&&le.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${D&&le.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${D&&le.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${le.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(p["usedSubIds_"+f]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(p["usedSubIds_"+f]||[]).length}/${p.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${pt}${rt}</div>
        </div>
      </div>`;function Dt(){const Q=t.querySelector(".match-screen");if(!Q)return;const $e=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);Q.style.height=$e+"px",Q.style.minHeight=$e+"px",Q.style.maxHeight=$e+"px",Q.style.overflow="hidden";const De=t.querySelector("#mobile-action-bar"),Te=t.querySelector("#mobile-play-area");De&&Te&&(Te.style.paddingBottom=De.offsetHeight+"px")}if(Dt(),setTimeout(Dt,120),setTimeout(Dt,400),M||(M=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Dt),window.visualViewport.addEventListener("scroll",Dt)),window.addEventListener("resize",Dt)),function(){const $e=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!$e)return;const De=$e.closest("#match-terrain-wrap");De&&(De.style.cssText="position:relative;width:100%;height:100%;padding:0"),$e.removeAttribute("width"),$e.removeAttribute("height"),$e.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",$e.setAttribute("preserveAspectRatio","xMidYMid meet")}(),p._pvpResizeBound||(p._pvpResizeBound=!0,window.addEventListener("resize",()=>{const Q=t.querySelector(".terrain-wrapper svg");if(Q){const $e=Q.closest("#match-terrain-wrap");$e&&($e.style.cssText="position:relative;width:100%;height:100%;padding:0"),Q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t.querySelectorAll(".match-slot-hit").forEach(Q=>{Q.addEventListener("click",()=>{if(!D&&!F)return;const $e=Q.dataset.cardId,De=Q.dataset.role,Te=(_[De]||[]).find(Ge=>Ge.cardId===$e);if(!Te||Te.used)return;const Pt=He.includes($e);if(D&&!["MIL","ATT"].includes(De)&&!Pt)return;Array.isArray(p["selected_"+f])||(p["selected_"+f]=[]);const st=p["selected_"+f],Re=st.findIndex(Ge=>Ge.cardId===$e);Re>-1?st.splice(Re,1):st.length<3&&st.push({...Te,_role:De}),S()})}),t.querySelectorAll(".match-used-hit").forEach(Q=>{Q.addEventListener("click",()=>je(Q.dataset.cardId))}),t.querySelectorAll(".pvp-sub-btn").forEach(Q=>{Q.addEventListener("click",()=>je())}),(bo=t.querySelector("#pvp-sub-open"))==null||bo.addEventListener("click",()=>je()),t.querySelectorAll(".pvp-gc-mini").forEach(Q=>{D?Q.addEventListener("click",()=>he(Q.dataset.gcId,Q.dataset.gcType)):(Q.style.opacity="0.35",Q.style.cursor="default",Q.addEventListener("click",()=>zt("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(xo=t.querySelector("#pvp-boost-card"))==null||xo.addEventListener("click",()=>be()),(yo=t.querySelector("#pvp-action"))==null||yo.addEventListener("click",Q=>{D?Q.currentTarget.dataset.pass==="1"||!ue(f)?ke():V():F&&G()}),(ho=t.querySelector("#pvp-quit"))==null||ho.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&N()}),(vo=t.querySelector("#pvp-view-opp"))==null||vo.addEventListener("click",()=>ye()),(wo=t.querySelector("#pvp-toggle-history"))==null||wo.addEventListener("click",()=>me()),I&&(clearInterval(I),I=null),Ke(),(D||F)&&!T){let Q=30,$e=!1;const De=()=>document.getElementById("pvp-timer"),Te=()=>{De()&&(De().textContent=Q+"s",De().style.color=$e?"#ff4444":"#fff")};Te(),I=setInterval(()=>{Q--,Q<0?$e?(clearInterval(I),I=null,Ke(),D&&!ue(f)?ke():N()):($e=!0,Q=15,Te(),Zo("/sounds/timer-urgent.mp3",.6)):Te()},1e3)}}function Y(){It(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${Pr(p[b+"Team"],p[b+"Formation"],null,p[b+"Name"]||"Adversaire")}
    </div>`;const _=t.querySelector("svg"),z=_==null?void 0:_.closest("#match-terrain-wrap");z&&(z.style.cssText="position:relative;width:100%;height:100%;padding:0"),_&&(_.removeAttribute("width"),_.removeAttribute("height"),_.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",_.setAttribute("preserveAspectRatio","xMidYMid meet")),f==="p1"&&setTimeout(async()=>{await $({phase:"midfield"})},5e3)}let R=!1;function ee(){if(R)return;const _=p[f+"Team"].MIL||[],z=p[b+"Team"].MIL||[],A=yt(_)+ht(_),B=yt(z)+ht(z),L=A>=B;It(t),t.innerHTML=`
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
      ${Ei(_,p[f+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${Ei(z,p[b+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const P=(le,pe)=>t.querySelectorAll(le).forEach((Ee,ge)=>{setTimeout(()=>{Ee.style.opacity="1",Ee.style.transform="translateY(0) scale(1)"},pe+ge*90)});P(".duel-card-me",150),P(".duel-card-opp",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((le,pe)=>setTimeout(()=>{le.style.opacity="1"},pe*70)),900),setTimeout(()=>{const le=t.querySelector("#pvp-vs");le&&(le.style.opacity="1",le.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(pe=>pe.style.opacity="1")},1250);function D(le,pe,Ee){const ge=document.getElementById(le);if(!ge)return;const ze=performance.now(),Le=re=>{const Me=Math.min(1,(re-ze)/Ee);ge.textContent=Math.round(pe*(1-Math.pow(1-Me,3))),Me<1?requestAnimationFrame(Le):ge.textContent=pe};requestAnimationFrame(Le)}setTimeout(()=>{D("pvp-score-me",A,800),D("pvp-score-opp",B,800)},1500);const F=p.p1Team.MIL||[],U=p.p2Team.MIL||[],J=yt(F)+ht(F),oe=yt(U)+ht(U),Z=J>=oe?"p1":"p2";let ie=p.boostValue;ie==null&&(ie=Vo(),p.boostValue=ie,p.boostOwner=Z,p.boostUsed=!1),R=!0,setTimeout(()=>{const le=t.querySelector("#duel-row-"+(L?"me":"opp")),pe=t.querySelector("#duel-row-"+(L?"opp":"me")),Ee=document.getElementById("pvp-score-me"),ge=document.getElementById("pvp-score-opp"),ze=L?Ee:ge,Le=L?ge:Ee;ze&&(ze.style.fontSize="80px",ze.style.color=L?"#FFD700":"#ff6b6b",ze.style.animation="duelPulse .5s ease"+(L?",duelGlow 1.5s ease infinite .5s":"")),Le&&(Le.style.opacity="0.25"),setTimeout(()=>{le&&(le.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",le.style.zIndex="5"),setTimeout(()=>{const re=document.getElementById("duel-shock");re&&(re.style.animation="shockwave .5s ease-out forwards"),pe&&(pe.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const re=document.getElementById("pvp-duel-finale");if(!re)return;const Me=p.boostOwner===f?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+ie+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ne=f==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;re.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(L?"⚽ "+p[f+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[b+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Me+Ne,re.style.transition="opacity .45s ease",re.style.opacity="1",re.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const Ye=Z;await $({phase:Ye+"-attack",attacker:Ye,round:1,boostValue:ie,boostUsed:!1,boostOwner:Ye})})},600)},700)},2800)}function fe(_,z,A){var pe,Ee;const B=(p.gcDefs||[]).find(ge=>{var ze;return ge.name===_||((ze=ge.name)==null?void 0:ze.toLowerCase().trim())===(_==null?void 0:_.toLowerCase().trim())}),L={purple:"#b06ce0",light_blue:"#00d4ef"}[B==null?void 0:B.color]||"#b06ce0",P=(B==null?void 0:B.name)||_,D=(B==null?void 0:B.effect)||((pe=Oe[_])==null?void 0:pe.desc)||"",F=B!=null&&B.image_url?`/icons/${B.image_url}`:null,U=((Ee=Oe[_])==null?void 0:Ee.icon)||"⚡",oe=z===f?"Vous":p[z+"Name"]||"Adversaire",Z=document.createElement("div");Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",Z.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{filter:drop-shadow(0 0 20px ${L}66)}50%{filter:drop-shadow(0 0 40px ${L}cc)}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${L};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${oe} joue une carte</div>
      <div style="animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        ${it(P,F,U,D,{width:200})}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(Z);let ie=!1;const le=()=>{ie||(ie=!0,Z.remove(),setTimeout(()=>A&&A(),50))};Z.addEventListener("click",le),setTimeout(le,3e3)}function he(_,z){var oe,Z,ie,le;const B=(p["gcCardsFull_"+f]||[]).find(pe=>pe.id===_),L=B==null?void 0:B._gcDef,P=(L==null?void 0:L.name)||z,D=(L==null?void 0:L.effect)||((oe=Oe[z])==null?void 0:oe.desc)||"Carte spéciale.",F=L!=null&&L.image_url?`/icons/${L.image_url}`:null,U=((Z=Oe[z])==null?void 0:Z.icon)||"⚡",J=document.createElement("div");J.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",J.innerHTML=`
      ${it(P,F,U,D,{width:190})}
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(J),(ie=J.querySelector("#pvp-gc-back"))==null||ie.addEventListener("click",()=>J.remove()),(le=J.querySelector("#pvp-gc-use"))==null||le.addEventListener("click",()=>{J.remove(),de(_,z)})}function be(){var B;const _=p[f+"Team"],z=Object.entries(_).flatMap(([L,P])=>(P||[]).filter(D=>!D.used).map(D=>({...D,_line:L})));if(!z.length)return;const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",A.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${z.map(L=>{const P={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[L._line]||"#555",D=jt(L,L._line)+(L.boost||0);return`<div class="bp-item" data-cid="${L.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${P};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${L.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${D}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(A),(B=A.querySelector("#bp-close"))==null||B.addEventListener("click",()=>A.remove()),A.querySelectorAll(".bp-item").forEach(L=>{L.addEventListener("click",async()=>{const P=L.dataset.cid,D=z.find(U=>U.cardId===P);if(!D)return;const F=(_[D._line]||[]).find(U=>U.cardId===P);F&&(F.boost=(F.boost||0)+p.boostValue),A.remove(),await $({[f+"Team"]:_,boostUsed:!0})})})}function je(_=null){var le,pe;if(!(p.phase===f+"-attack")){g("Remplacement uniquement avant votre attaque","warning");return}const A=p[f+"Team"],B=p["usedSubIds_"+f]||[],L=p.maxSubs||3;if(B.length>=L){g(`Maximum ${L} remplacements atteint`,"warning");return}const P=Object.entries(A).flatMap(([Ee,ge])=>(ge||[]).filter(ze=>ze.used).map(ze=>({...ze,_line:Ee}))),D=(p[f+"Subs"]||[]).filter(Ee=>!B.includes(Ee.cardId));if(!P.length){g("Aucun joueur utilisé à remplacer","warning");return}if(!D.length){g("Aucun remplaçant disponible","warning");return}let F=Math.max(0,P.findIndex(Ee=>Ee.cardId===_));const U=((le=P[F])==null?void 0:le._line)||((pe=P[F])==null?void 0:pe.job);let J=Math.max(0,D.findIndex(Ee=>Ee.job===U)),oe=!1;const Z=document.createElement("div");Z.id="pvp-sub-overlay",Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function ie(){var Ne,Ce,Ye,He,nt,Yt;const Ee=P[F],ge=D[J],ze=Math.min(130,Math.round((window.innerWidth-90)/2)),Le=Math.round(ze*1.35),re=Fe=>`background:rgba(255,255,255,0.12);border:none;color:${Fe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Fe?"default":"pointer"};flex-shrink:0`;Z.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${B.length}/${L})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${re(J===0)}" ${J===0?"disabled":""}>▲</button>
          <div>${ge?_t({...ge,used:!1,boost:0},ze,Le):"<div>—</div>"}</div>
          <button id="pin-down" style="${re(J>=D.length-1)}" ${J>=D.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${J+1}/${D.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${re(F===0)}" ${F===0?"disabled":""}>▲</button>
          <div>${Ee?_t({...Ee,used:!1,boost:0},ze,Le):"<div>—</div>"}</div>
          <button id="pout-down" style="${re(F>=P.length-1)}" ${F>=P.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${F+1}/${P.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Ne=Z.querySelector("#psub-close"))==null||Ne.addEventListener("click",()=>Z.remove()),(Ce=Z.querySelector("#pout-up"))==null||Ce.addEventListener("click",()=>{F>0&&(F--,ie())}),(Ye=Z.querySelector("#pout-down"))==null||Ye.addEventListener("click",()=>{F<P.length-1&&(F++,ie())}),(He=Z.querySelector("#pin-up"))==null||He.addEventListener("click",()=>{J>0&&(J--,ie())}),(nt=Z.querySelector("#pin-down"))==null||nt.addEventListener("click",()=>{J<D.length-1&&(J++,ie())});const Me=(Fe,We,Ue,pt)=>{const rt=Z.querySelector("#"+Fe);if(!rt)return;let Bt=0;rt.addEventListener("touchstart",ut=>{Bt=ut.touches[0].clientY},{passive:!0}),rt.addEventListener("touchend",ut=>{const Et=ut.changedTouches[0].clientY-Bt;if(Math.abs(Et)<30)return;const at=We();Et<0&&at<pt-1?(Ue(at+1),ie()):Et>0&&at>0&&(Ue(at-1),ie())},{passive:!0})};Me("pin-panel",()=>J,Fe=>J=Fe,D.length),Me("pout-panel",()=>F,Fe=>F=Fe,P.length),(Yt=Z.querySelector("#psub-confirm"))==null||Yt.addEventListener("click",async Fe=>{if(Fe.preventDefault(),Fe.stopPropagation(),oe)return;oe=!0;const We=P[F],Ue=D[J];if(!We||!Ue)return;const pt=We._line,rt=(A[pt]||[]).findIndex(Et=>Et.cardId===We.cardId);if(rt===-1){g("Erreur : joueur introuvable","error"),Z.remove();return}const Bt={...Ue,_line:pt,position:We.position,used:!1,boost:0};A[pt].splice(rt,1,Bt);const ut=[...B,Ue.cardId];Z.remove(),Be(We,Ue,async()=>{await $({[f+"Team"]:A,[b+"Team"]:p[b+"Team"],["usedSubIds_"+f]:ut})})})}document.body.appendChild(Z),ie()}function Be(_,z,A){const B={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const P=(U,J,oe)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${J};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${oe}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${B[U.job]||"#555"};border:3px solid ${J};position:relative;overflow:hidden;margin:0 auto">
        ${Ct(U)?`<img src="${Ct(U)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(U.name||"").slice(0,12)}</div>
    </div>`;L.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${P(z,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${P(_,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(L);let D=!1;const F=()=>{D||(D=!0,L.remove(),setTimeout(()=>A(),50))};L.addEventListener("click",F),setTimeout(F,2200)}function ye(){var z;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",_.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[b+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Qi(p[b+"Team"],p[b+"Formation"],null,[],At(),Gt())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(_),(z=_.querySelector("#pvp-opp-close"))==null||z.addEventListener("click",()=>_.remove())}function me(){var A;const _=p.log||[],z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",z.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${_.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[..._].reverse().map(B=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${B.type==="goal"?"#FFD700":B.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${B.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(z),(A=z.querySelector("#pvp-hist-close"))==null||A.addEventListener("click",()=>z.remove())}async function ke(){if(p.phase!==f+"-attack")return;const _=f==="p1"?"p2":"p1",z=(p.round||0)+1,A=[...p.log||[]];A.push({type:"info",text:`⏭️ ${p[f+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const B=Se(p),L=ue(_),P=B||!L?"finished":_+"-attack";await $({["selected_"+f]:[],modifiers:{...p.modifiers,[f]:{}},pendingAttack:null,phase:P,attacker:_,round:z,log:A}),P==="finished"&&await xe(p)}function k(_){const z=(_.GK||[]).some(B=>!B.used),A=["DEF","MIL","ATT"].some(B=>(_[B]||[]).some(L=>!L.used));return z&&!A}function q(_){return(_.p1Score||0)!==(_.p2Score||0)?null:k(_.p1Team)&&!ce(_.p2Team)?{side:"p1",gk:(_.p1Team.GK||[]).find(z=>!z.used)}:k(_.p2Team)&&!ce(_.p1Team)?{side:"p2",gk:(_.p2Team.GK||[]).find(z=>!z.used)}:null}async function K(){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(_);const z=(A,B)=>new Promise(L=>{_.innerHTML=`<div style="font-size:32px;font-weight:900;color:${B};letter-spacing:2px;animation:lcFade 1.4s ease both">${A}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(L,1400)});await z("⚽ DERNIER CORNER","#FFD700"),await z("🧤 LE GARDIEN MONTE !","#4fc3f7"),_.remove()}async function O(_,z){const{side:A,gk:B}=_;if(!B)return;const L=A+"Score",P=(z[L]||0)+1;B.used=!0;const D=[...z.log||[]];D.push({type:"duel",isGoal:!0,homeScored:A===f,homePlayers:A==="p1"?[Rt(B)]:[],aiPlayers:A==="p2"?[Rt(B)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${z[A+"Name"]} marque !`});const F=(z.round||0)+1,U=A==="p1"?"p2":"p1",J={...z,[L]:P},oe=Se(J);H.add(F),await K();const Z=A===f?P:z[f+"Score"]||0,ie=A===f?z[b+"Score"]||0:P;Ze([Rt(B)],Z,ie,A===f,async()=>{await $({[L]:P,log:D,round:F,pendingAttack:null,phase:oe?"finished":U+"-attack",attacker:U,["selected_"+f]:[],modifiers:{...p.modifiers,[f]:{}}}),oe&&await xe({...p,[L]:P})})}async function V(){const _=p[f+"Team"],z=!["GK","DEF","MIL","ATT"].some(P=>(p[b+"Team"][P]||[]).some(D=>!D.used)),A=(p["selected_"+f]||[]).map(P=>{const D=(_[P._role]||[]).find(pe=>pe.cardId===P.cardId)||P,F=["GK","DEF"].includes(P._role),U=_[P._role]||[],J=U.findIndex(pe=>pe.cardId===P.cardId),oe=St(U.length),Z=J>=0?oe[J]:D._col??1,ie=p.stadiumDef||p.homeStadiumDef||null,le=D.stadiumBonus||ie&&(ie.club_id&&String(D.club_id)===String(ie.club_id)||ie.country_code&&D.country_code===ie.country_code)||!1;return{...D,_line:P._role,_col:Z,stadiumBonus:le,...F?{note_a:Math.max(1,Number(D.note_a)||0)}:{}}});if(!A.length)return;const B=di(A,p.modifiers[f]||{},p[f+"Formation"]);ve(f,A.map(P=>P.cardId)),A.forEach(P=>{const D=(_[P._role]||[]).find(F=>F.cardId===P.cardId);D&&(D.used=!0)}),p["selected_"+f]=[],S();const L=[...p.log||[]];if(z){if(A.length===1&&(A[0]._line==="GK"||A[0].job==="GK")&&(p.p1Score||0)===(p.p2Score||0)){await O({side:f,gk:A[0]},{...p,[f+"Team"]:_,log:L});return}const D=(p[f+"Score"]||0)+1,F=A.map(ie=>Rt(ie));L.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:F,homeTotal:B.total,aiTotal:0});const U=(p.round||0)+1,J=f==="p1"?"p2":"p1",oe={...p,[f+"Team"]:_,[f+"Score"]:D},Z=Se(oe);H.add(U),Ze(F,D,p[b+"Score"]||0,!0,async()=>{await $({[f+"Team"]:_,[f+"Score"]:D,["selected_"+f]:[],modifiers:{...p.modifiers,[f]:{}},pendingAttack:null,phase:Z?"finished":J+"-attack",attacker:J,round:U,log:L}),Z&&await xe({...p,[f+"Score"]:D})});return}L.push({type:"pending",text:`⚔️ ${p[f+"Name"]} attaque (${B.total})`}),await $({[f+"Team"]:_,[b+"Team"]:p[b+"Team"],pendingAttack:{...B,players:A,side:f},["selected_"+f]:[],modifiers:{...p.modifiers,[f]:{}},phase:b+"-defense",log:L})}async function G(){const _=p[f+"Team"],z=(p["selected_"+f]||[]).map(ge=>{const ze=(_[ge._role]||[]).find(Ce=>Ce.cardId===ge.cardId)||ge,Le=_[ge._role]||[],re=Le.findIndex(Ce=>Ce.cardId===ge.cardId),Me=St(Le.length),Ne=re>=0?Me[re]:ze._col??1;return{...ze,_line:ge._role,_col:Ne}}),A=li(z,p.modifiers[f]||{},p[f+"Formation"]);ve(f,z.map(ge=>ge.cardId)),z.forEach(ge=>{const ze=(_[ge._role]||[]).find(Le=>Le.cardId===ge.cardId);ze&&(ze.used=!0)}),p["selected_"+f]=[],S();const B=Zi(p.pendingAttack.total,A.total,p.modifiers[f]||{}),L=p.pendingAttack.side,P=B==="attack"||(B==null?void 0:B.goal),D=L==="p1"?"p2":"p1",F=(p.round||0)+1,U=(p.pendingAttack.players||[]).map(ge=>Rt(ge)),J=[...p.log||[]];J.push({type:"duel",isGoal:P,homeScored:P&&L===f,text:P?`⚽ BUT de ${p[L+"Name"]} ! (${p.pendingAttack.total} vs ${A.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${A.total})`,homePlayers:U,aiPlayers:z.map(ge=>Rt(ge)),homeTotal:p.pendingAttack.total,aiTotal:A.total});const oe=P?(p[L+"Score"]||0)+1:p[L+"Score"]||0,Z={...p,[f+"Team"]:_,[L+"Score"]:oe},ie=Se(Z),le=ie?"finished":D+"-attack",pe=!ie&&!P?q(Z):null,Ee=async()=>{if(pe){await O(pe,Z);return}await $({[f+"Team"]:_,[b+"Team"]:p[b+"Team"],[L+"Score"]:oe,["selected_"+f]:[],modifiers:{...p.modifiers,[f]:{}},pendingAttack:null,phase:le,attacker:D,round:F,log:J}),(le==="finished"||ie)&&await xe({...p,[L+"Score"]:oe})};if(P){const ge=L===f,ze=ge?oe:p[f+"Score"]||0,Le=ge?p[b+"Score"]||0:oe;H.add(F),Ze(U,ze,Le,ge,Ee)}else await Ee()}function W(_){return["MIL","ATT"].some(z=>(_[z]||[]).some(A=>!A.used))}function ce(_){return["GK","DEF","MIL","ATT"].some(z=>(_[z]||[]).some(A=>!A.used))}function se(_){return ce(_)&&!W(_)}function ue(_){const z=p[_+"Team"],A=p[(_==="p1"?"p2":"p1")+"Team"];return!!(W(z)||se(z)&&!ce(A)||se(z)&&!W(A)&&ce(A))}function Se(_){return!ce(_.p1Team)&&!ce(_.p2Team)}function Ae(_){const z=_.p1Score||0,A=_.p2Score||0;return z===A?null:z>A?v.home_id:v.away_id}async function xe(_){Nt(),Ke();try{const z=Ae(_),A=z?v.home_id===z?v.away_id:v.home_id:null,B=_.p1Score||0,L=_.p2Score||0,{data:P,error:D}=await h.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:z,p_home_score:B,p_away_score:L,p_forfeit:!1});if(D&&console.error("[PvP] finish_pvp_match:",D),c)try{await h.rpc("check_and_finish_mini_league",{p_league_id:c})}catch(F){console.error("[PvP] check_and_finish_mini_league:",F)}z&&A&&la(z,A).catch(()=>{});try{const{data:F}=await h.rpc("apply_match_rewards",{p_match_id:i});F!=null&&F.success&&!(F!=null&&F.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(F){console.error("[PvP] apply_match_rewards:",F)}if(typeof s=="function")try{await s({homeScore:B,awayScore:L,winnerId:z,homeId:v.home_id,awayId:v.away_id,matchId:i})}catch(F){console.error("[PvP] onMatchEnd:",F)}}catch(z){console.error("[PvP] finishMatch:",z)}}function we(){var L;const _=p[f+"Score"],z=p[b+"Score"],A=_>z,B=_===z;It(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${A?"🏆":B?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${A?"Victoire !":B?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${_} - ${z}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${c?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(L=document.getElementById("pvp-home"))==null||L.addEventListener("click",()=>{try{h.removeChannel(X)}catch{}ot(t),c?y("mini-league",{openLeagueId:c}):y("home")})}S()}async function Vi(t,e,i=!1){var d,l;const{state:o,navigate:r,toast:n}=e,a=i&&((l=(d=e==null?void 0:e.state)==null?void 0:d.params)==null?void 0:l.rankedData)||null;await Ii(t,e,i?"ranked":"random",async({deckId:s,formation:c,starters:m,subsRaw:x,gcCardsEnriched:y,gcDefs:g,stadiumDef:f})=>{It(t);const b=async u=>{await pa(t,e,s,c,m,x,u||[],g,f,i,a)};if(!(y!=null&&y.length)){await b([]);return}Ti(t,y,b)})}async function ca(t,e,i){return da(t,e,i)}async function pa(t,e,i,o,r,n,a=[],d=[],l=null,s=!1,c=null){var te,X;const{state:m,navigate:x,toast:y}=e,g=(c==null?void 0:c.mmr)??((te=m.profile)==null?void 0:te.mmr)??450,f=s?bt(g):null,b=s?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",u=s?(f==null?void 0:f.color)||"#D4A017":"#FFD700";let w=!1,v=null,E=null;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${b};color:#fff;padding:32px;text-align:center;gap:20px">
      ${s?`<div style="font-size:36px">${(f==null?void 0:f.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${s?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${s?`<div style="font-size:13px;color:${(f==null?void 0:f.color)||"#D4A017"}">${(f==null?void 0:f.name)||""} · ${Math.round(g)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${u};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const p=async()=>{w=!0,v&&(v.unsubscribe(),v=null),E&&(clearInterval(E),E=null);try{await h.rpc("cancel_matchmaking",{p_user_id:m.profile.id})}catch($){console.error("[Matchmaking] cancel error:",$)}};(X=document.getElementById("cancel-mm"))==null||X.addEventListener("click",async()=>{await p(),ot(t),x("home")});const T=async($,N)=>{w||(w=!0,v&&(v.unsubscribe(),v=null),E&&(clearInterval(E),E=null),await qt(t,e,$,N,{myGC:a,gcDefs:d,stadiumDef:l,isRanked:s,rankedData:c,onMatchEnd:s?ua:null}))},I=m.user.id,{data:M,error:H}=s?await h.rpc("try_matchmake_ranked",{p_user_id:I,p_deck_id:i,p_mmr:g,p_range:200}):await h.rpc("try_matchmake",{p_user_id:I,p_deck_id:i});if(H||!(M!=null&&M.success)){console.error("[Matchmaking] try_matchmake error:",H||M),y("Erreur de matchmaking","error"),ot(t),x("home");return}if(M.matched){await T(M.match_id,!1);return}const ne=async()=>{if(w)return;const{data:$}=await h.from("matchmaking_queue").select("status, match_id").eq("user_id",I).maybeSingle();($==null?void 0:$.status)==="matched"&&$.match_id&&await T($.match_id,!0)};v=h.channel(`mm_${I}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${I}`},$=>{const N=$.new;N.status==="matched"&&N.match_id&&T(N.match_id,!0)}).subscribe(),E=setInterval(ne,3e3),s?setTimeout(async()=>{if(!w){w=!0,v&&(v.unsubscribe(),v=null),E&&(clearInterval(E),E=null);try{await h.rpc("cancel_matchmaking",{p_user_id:m.profile.id})}catch($){console.error("[Matchmaking] cancel error:",$)}y("Aucun adversaire trouvé — match contre une IA calibrée sur votre niveau","info",4e3),x("match",{matchMode:"ranked_ai",rankedData:c,presetSetup:{deckId:i,formation:o,starters:r,subsRaw:n,gcCardsEnriched:a,gcDefs:d,stadiumDef:l}})}},2e4):setTimeout(()=>{w||p()},12e4)}async function ua(t,e){const{state:i,toast:o}=e,{winnerId:r,homeId:n,awayId:a,homeScore:d,awayScore:l,matchId:s}=t,c=i.user.id,m=n===c,x=r===c,{data:y}=await h.from("users").select("mmr, mmr_rd, mmr_v").eq("id",c).single(),{data:g}=await h.from("users").select("mmr, mmr_rd, mmr_v").eq("id",m?a:n).single();if(y&&g){const f=Yo(y.mmr,y.mmr_rd,y.mmr_v,g.mmr,g.mmr_rd,x?1:0);await h.from("users").update({mmr:f.mmr,mmr_rd:f.rd,mmr_v:f.v,mmr_wins:x?h.sql`mmr_wins + 1`:void 0,mmr_losses:x?void 0:h.sql`mmr_losses + 1`}).eq("id",c),o(x?`+MMR ↑ ${Math.round(f.mmr-y.mmr)}`:`-MMR ↓ ${Math.round(y.mmr-f.mmr)}`,x?"success":"error",4e3)}}const fa=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Vi,resumePvpMatch:ca},Symbol.toStringTag,{value:"Module"}));async function ma(t,e){const{state:i,navigate:o,toast:r}=e,n=i.params||{},a=n.friendId||null,d=n.friendName||"Ami",l=!!n.isAccepting;await Ii(t,e,"friend",async({deckId:s,formation:c,starters:m,subsRaw:x,gcCardsEnriched:y,gcDefs:g,stadiumDef:f})=>{It(t);const b=async u=>{const w=u||[];l?await ba(t,e,s,w,g,f):await ga(t,e,s,w,g,f,a,d)};if(!(y!=null&&y.length)){await b([]);return}Ti(t,y,b)})}async function ga(t,e,i,o,r,n,a,d){var w;const{state:l,navigate:s,toast:c}=e,m=l.user.id,{data:x,error:y}=await h.from("friend_match_invites").insert({inviter_id:m,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(y||!x){console.error("[Friend] Erreur création invitation:",y),c("Impossible de créer l'invitation","error"),s("home");return}t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${d}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let g=!1,f=null;const b=async()=>{f&&(f.unsubscribe(),f=null)};(w=document.getElementById("cancel-friend"))==null||w.addEventListener("click",async()=>{await b(),await h.from("friend_match_invites").update({status:"declined"}).eq("id",x.id),ot(t),s("home")}),f=h.channel(`friend_invite_${x.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${x.id}`},async({new:v})=>{g||v.status!=="accepted"||!v.match_id||(g=!0,await b(),await qt(t,e,v.match_id,!0,{myGC:o,gcDefs:r,stadiumDef:n}))}).subscribe();const u=setInterval(async()=>{if(g)return;const{data:v}=await h.from("friend_match_invites").select("status, match_id").eq("id",x.id).single();(v==null?void 0:v.status)==="accepted"&&v.match_id&&(g=!0,clearInterval(u),await b(),await qt(t,e,v.match_id,!0,{myGC:o,gcDefs:r,stadiumDef:n}))},3e3);setTimeout(async()=>{g||(clearInterval(u),await b(),c("Invitation expirée","info"),s("home"))},12e4)}async function ba(t,e,i,o,r,n){const{state:a,navigate:d,toast:l}=e,s=a.user.id,{data:c}=await h.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",s).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){l("Aucune invitation en attente","error"),d("home");return}const{data:m,error:x}=await h.rpc("accept_friend_invite",{p_invite_id:c.id,p_invitee_deck_id:i});if(x||!(m!=null&&m.success)){console.error("[Friend] Erreur accept_friend_invite:",x||m),l((m==null?void 0:m.error)||"Impossible de rejoindre le match","error"),d("home");return}await qt(t,e,m.match_id,!1,{myGC:o,gcDefs:r,stadiumDef:n})}const kn="#1A6B3C",lt="#D4A017",ti="var(--tile-bg)",ii="var(--tile-border)",Tt="var(--divider)",Xe="var(--tile-fg-on-page)",Lt="var(--tile-fg-dim)",et="var(--tile-fg-faint)",ni="var(--nav-fg,#fff)",$n="rgba(255,255,255,0.62)",xa="rgba(255,255,255,0.4)";async function ya(t,e){var o;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(o=e.state.params)==null?void 0:o.openLeagueId;if(i){e.state.params.openLeagueId=null,await dt(t,e,i);return}await tt(t,e)}async function tt(t,e,i="waiting"){var v,E;const{state:o}=e,r=o.profile.id,{data:n}=await h.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",r),a=(n||[]).map(p=>p.league_id),d={};(n||[]).forEach(p=>{d[p.league_id]={amount:p.prize_amount,claimed:p.prize_claimed}});const{data:l,error:s}=await h.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),c=s?(await h.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:l||[],x=(a.length?await h.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],y=x.filter(p=>p.status==="waiting"&&!p.is_archived),g=x.filter(p=>p.status==="active"&&!p.is_archived),f=x.filter(p=>p.is_archived||p.status==="finished");let b=f;if(f.length){const{data:p}=await h.from("mini_league_matches").select("league_id").in("league_id",f.map(I=>I.id)).or(`home_id.eq.${r},away_id.eq.${r}`).not("status","eq","bye"),T=new Set((p||[]).map(I=>I.league_id));b=f.filter(I=>T.has(I.id))}const u=c.filter(p=>!a.includes(p.id)),w=[{key:"waiting",label:"🟡 En attente",count:y.length+u.length},{key:"active",label:"🟢 En cours",count:g.length},{key:"archived",label:"📁 Archivées",count:b.length}];t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Tt};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${ni}">🏆 Mini League</div>
        <div style="font-size:12px;color:${$n}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${ni}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Tt}">
      ${w.map(p=>`<button class="ml-tab" data-tab="${p.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===p.key?kn:"transparent"};background:none;font-size:12px;font-weight:${i===p.key?"900":"600"};color:${i===p.key?"#4ade80":xa};cursor:pointer">${p.label}${p.count?` (${p.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?ha(y,u,r):i==="active"?va(g,r):wa(b,r,d)}
    </div>
  </div>`,(v=document.getElementById("ml-create-btn"))==null||v.addEventListener("click",()=>_a(t,e)),(E=document.getElementById("ml-refresh-list"))==null||E.addEventListener("click",()=>tt(t,e,i)),t.querySelectorAll(".ml-tab").forEach(p=>p.addEventListener("click",()=>tt(t,e,p.dataset.tab))),t.querySelectorAll("[data-league-id]").forEach(p=>p.addEventListener("click",()=>dt(t,e,p.dataset.leagueId))),t.querySelectorAll("[data-join]").forEach(p=>p.addEventListener("click",T=>{T.stopPropagation(),En(t,e,p.dataset.join,p.dataset.type)})),t.querySelectorAll("[data-delete]").forEach(p=>p.addEventListener("click",T=>{T.stopPropagation(),Yi(t,e,p.dataset.delete,p.dataset.name,i)})),t.querySelectorAll("[data-claim-league]").forEach(p=>p.addEventListener("click",async T=>{T.stopPropagation(),p.disabled=!0,p.textContent="...";const{data:I,error:M}=await h.rpc("claim_mini_league_prize",{p_league_id:p.dataset.claimLeague,p_user_id:o.profile.id});if(M||!(I!=null&&I.success)){e.toast((I==null?void 0:I.error)||"Erreur lors de la récupération","error"),tt(t,e,i);return}if(!I.already_claimed){o.profile.credits=(o.profile.credits||0)+I.prize;const H=document.getElementById("nav-credits");H&&(H.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),e.toast(`💰 +${I.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}tt(t,e,i)}))}function Li(t,e,i=!1,o=null){var l,s;const r=t.creator_id===e,n=t.pot||0,a=((s=(l=t.mini_league_members)==null?void 0:l[0])==null?void 0:s.count)||0,d=o&&o.amount>0&&!o.claimed;return`<div data-league-id="${t.id}" style="background:${ti};border:1px solid ${d?"rgba(212,160,23,0.5)":ii};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${Xe}">${t.name}</div>
      ${r?`<button data-delete="${t.id}" data-name="${t.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${Lt};margin-bottom:${i||d?"10px":"0"}">
      <span>${t.type==="private"?"🔒":"🌐"} ${t.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${t.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${t.max_players}</span>
      <span>💰 ${(t.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${n>0?`<span style="color:${lt};font-weight:700">🏆 ${n.toLocaleString("fr")} cr.</span>`:""}
      ${t.current_day>0?`<span>📅 J${t.current_day}/${t.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${t.id}" data-type="${t.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(t.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
    ${d?`<button data-claim-league="${t.id}" class="btn btn-sm" style="width:100%;background:${lt};color:#141000;font-weight:900;border:none">💰 Récupérer ${o.amount.toLocaleString("fr")} cr.</button>`:""}
  </div>`}function ha(t,e,i){const o=[];return t.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${et};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),o.push(...t.map(r=>Li(r,i,!1)))),e.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${et};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),o.push(...e.map(r=>Li(r,i,!0)))),o.length?o.join(""):`<div style="text-align:center;padding:40px;color:${et}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function va(t,e){return t.length?t.map(i=>Li(i,e)).join(""):`<div style="text-align:center;padding:40px;color:${et}">Aucune mini league en cours.</div>`}function wa(t,e,i={}){return t.length?t.map(o=>Li(o,e,!1,i[o.id])).join(""):`<div style="text-align:center;padding:40px;color:${et}">Aucune mini league archivée.</div>`}function _a(t,e){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(o=>o.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=o.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var g,f,b,u;const{toast:o}=e,r=document.getElementById("ml-name").value.trim(),n=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,d=((g=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:g.value)||"public",l=((f=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:f.value)||"aller",s=((u=(b=document.getElementById("ml-pwd"))==null?void 0:b.value)==null?void 0:u.trim())||null;if(!r){o("Le nom est obligatoire","error");return}if(a<100){o("Mise minimum : 100 crédits","error");return}if(d==="private"&&!s){o("Mot de passe requis","error");return}const{data:c,error:m}=await h.from("mini_leagues").insert({name:r,creator_id:e.state.profile.id,type:d,password:s,mode:l,max_players:n,entry_fee:a}).select().single();if(m){o("Erreur : "+m.message,"error");return}const{data:x}=await h.from("users").select("credits").eq("id",e.state.profile.id).single();if(((x==null?void 0:x.credits)||0)<a){await h.from("mini_leagues").delete().eq("id",c.id),o(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await h.from("users").update({credits:x.credits-a}).eq("id",e.state.profile.id),await h.from("mini_leagues").update({pot:a}).eq("id",c.id),await h.from("mini_league_members").insert({league_id:c.id,user_id:e.state.profile.id}),e.state.profile&&(e.state.profile.credits=x.credits-a);const y=document.getElementById("nav-credits");y&&(y.textContent=`💰 ${(e.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),o(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),dt(t,e,c.id)})}function ka(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",e.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(e);const i=e.querySelector("#ml-pwd-input"),o=r=>{e.remove(),t(r)};setTimeout(()=>i==null?void 0:i.focus(),80),e.querySelector("#pwd-cancel").addEventListener("click",()=>o(null)),e.querySelector("#pwd-ok").addEventListener("click",()=>o(i.value.trim())),i.addEventListener("keydown",r=>{r.key==="Enter"&&o(i.value.trim())})})}async function En(t,e,i,o){var m;const{toast:r,state:n}=e,a=n.profile.id;let d=null;if(o==="private"&&(d=await ka(),d===null))return;const{data:l,error:s}=await h.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:d});if(s||!(l!=null&&l.success)){console.error("[MiniLeague] join_mini_league:",s||l),r((l==null?void 0:l.error)||"Erreur lors de l'inscription","error");return}if(typeof e.refreshProfile=="function")await e.refreshProfile();else{const{data:x}=await h.from("users").select("credits").eq("id",a).single();n.profile&&x&&(n.profile.credits=x.credits)}const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(((m=n.profile)==null?void 0:m.credits)||0).toLocaleString("fr")}`),r("✅ Inscrit ! Pot mis à jour.","success"),dt(t,e,i)}async function $a(t,e,i,o){const{toast:r,state:n}=e,a=n.profile.id;if(!await new Promise(x=>{const y=document.createElement("div");y.className="modal-overlay",y.style.zIndex="2100",y.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${o.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(y),y.querySelector("#lv-ok").onclick=()=>{y.remove(),x(!0)},y.querySelector("#lv-cancel").onclick=()=>{y.remove(),x(!1)}}))return;const{data:l,error:s}=await h.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(s||!(l!=null&&l.success)){r((l==null?void 0:l.error)||"Erreur lors de la désinscription","error");return}const c=l.refund||o;n.profile&&(n.profile.credits=(n.profile.credits||0)+c);const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(n.profile.credits||0).toLocaleString("fr")}`),r(`↩️ Désinscrit · +${c.toLocaleString("fr")} cr. remboursés`,"success"),tt(t,e,"waiting")}async function Yi(t,e,i,o,r){const{toast:n}=e;if(!confirm(`Supprimer définitivement "${o}" et tous ses matchs/membres ? Action irréversible.`))return;await h.from("mini_league_matches").delete().eq("league_id",i),await h.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await h.from("mini_leagues").delete().eq("id",i);if(a){n("Erreur suppression ("+a.message+")","error");return}n("Mini League supprimée avec succès","success"),tt(t,e,r)}async function Ea(t,e,i){await h.from("mini_leagues").update({is_archived:!0}).eq("id",i),e.toast("Mini League archivée","success"),tt(t,e,"archived")}async function dt(t,e,i){var E,p,T,I,M,H,ne,te,X;const{state:o,toast:r}=e,n=o.profile.id,[{data:a},{data:d},{data:l}]=await Promise.all([h.from("mini_leagues").select("*").eq("id",i).single(),h.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),h.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){r("Introuvable","error"),await tt(t,e);return}const s=(d||[]).some($=>$.user_id===n),c=a.creator_id===n,m=(d||[]).map($=>$.user).filter(Boolean),x=Ta(m,l||[]),y=(l||[]).filter($=>$.matchday===a.current_day),g=a.pot||0,f=a.entry_fee||100,b=y.length>0&&y.every($=>$.status==="finished"||$.status==="bye"),u=a.current_day>=a.total_days,w=(d||[]).find($=>$.user_id===n);t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Tt};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${ni}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${ni};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${ni}">${a.name}</div>
        <div style="font-size:11px;color:${$n}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${f} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"rgba(74,222,128,0.16)":a.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${a.status==="active"?"#4ade80":a.status==="finished"?"#c084fc":"#eab308"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${g>0?`<div style="font-size:12px;font-weight:900;color:${lt};margin-top:4px">🏆 ${g.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${ti};border:1px solid ${ii};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Xe}">👥 Joueurs (${m.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${Lt};margin-bottom:10px">💰 ${f} cr./joueur → Pot estimé : ${(f*m.length).toLocaleString("fr")} cr. (🥇${Math.floor(f*m.length*.7).toLocaleString("fr")} · 🥈${Math.floor(f*m.length*.2).toLocaleString("fr")} · 🥉${Math.floor(f*m.length*.1).toLocaleString("fr")})</div>
        ${m.map($=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${Tt}">
            <div style="width:36px;height:36px;border-radius:50%;background:${$.club_color2||kn};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${$.club_color1||"#fff"}">${($.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Xe}">${$.club_name||$.pseudo}</div><div style="font-size:11px;color:${et}">@${$.pseudo}</div></div>
            ${$.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${c&&m.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${f} cr. × ${m.length})</button>`:""}
        ${c?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${s?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${f} cr.)</button>`}
        ${s&&!c?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${f.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${ti};border:1px solid ${ii};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${y.map($=>Ro($,m,n,s)).join("")}
        ${c&&b&&!u?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&x.length?`
      <div style="background:${ti};border:1px solid ${ii};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${et};text-transform:uppercase;border-bottom:2px solid ${Tt}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${g>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${lt}">💰</th>`:""}
          </tr></thead>
          <tbody>${x.map(($,N)=>{const ae=g>0&&a.status==="finished"?N===0?Math.floor(g*.7):N===1?Math.floor(g*.2):N===2?Math.floor(g*.1):0:0;return`<tr style="border-bottom:1px solid ${Tt};${$.userId===n?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${N===0?lt:N<3?"#4ade80":Lt}">${["🥇","🥈","🥉"][N]||N+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Xe}">${$.clubName}</div><div style="font-size:10px;color:${et}">@${$.pseudo}</div></td>
              <td style="text-align:center;color:${Lt}">${$.played}</td><td style="text-align:center;color:${Lt}">${$.won}-${$.drawn}-${$.lost}</td>
              <td style="text-align:center;color:${$.goalDiff>=0?"#4ade80":"#ff6b6b"}">${$.goalDiff>=0?"+":""}${$.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Xe}">${$.points}</td>
              ${g>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${lt}">${ae?ae.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${ti};border:1px solid ${ii};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},($,N)=>N+1).reverse().map($=>{const N=(l||[]).filter(ae=>ae.matchday===$);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${et};margin-bottom:6px">Journée ${$}</div>${N.map(ae=>Ro(ae,m,n,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${c&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${Lt}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const v=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((E=document.getElementById("ml-back"))==null||E.addEventListener("click",()=>tt(t,e,v)),(p=document.getElementById("ml-refresh"))==null||p.addEventListener("click",async $=>{const N=$.currentTarget;N.style.opacity="0.5",await dt(t,e,i)}),(T=document.getElementById("ml-start-btn"))==null||T.addEventListener("click",()=>za(t,e,a,m)),(I=document.getElementById("ml-next-day"))==null||I.addEventListener("click",()=>La(t,e,i)),(M=document.getElementById("ml-join-now"))==null||M.addEventListener("click",()=>En(t,e,i,a.type)),(H=document.getElementById("ml-leave-btn"))==null||H.addEventListener("click",()=>$a(t,e,i,f)),(ne=document.getElementById("ml-delete-btn"))==null||ne.addEventListener("click",()=>Yi(t,e,i,a.name,"waiting")),(te=document.getElementById("ml-delete-now"))==null||te.addEventListener("click",()=>Yi(t,e,i,a.name,v)),(X=document.getElementById("ml-archive-btn"))==null||X.addEventListener("click",()=>Ea(t,e,i)),t.querySelectorAll("[data-play-match]").forEach($=>{$.addEventListener("click",()=>{const N=y.find(ae=>ae.id===$.dataset.playMatch);N&&(ct(),e.navigate("match-mini-league",{mlMatchId:N.id,leagueId:i}))})}),a.status==="finished"&&w){const $=x.findIndex(N=>N.userId===n);$>=0&&$<3&&w.prize_amount>0&&!w.prize_claimed&&setTimeout(()=>Sa(t,e,a,w,$),400)}}function Ro(t,e,i,o,r=!1){const n=m=>e.find(x=>x.id===m);if(t.is_bye){const m=n(t.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${Lt};text-align:center">🔵 ${(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"?"} exempté(e)</div>`}const a=n(t.home_id),d=n(t.away_id),l=t.home_id===i||t.away_id===i,s=l&&t.status==="pending"&&o&&!r,c=t.status==="finished"?`${t.home_score} - ${t.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${l?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${l?"rgba(74,222,128,0.35)":Tt}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${t.status==="finished"?"#4ade80":et}">${c}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"?"}</div>
    ${s?`<button data-play-match="${t.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${t.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function za(t,e,i,o){const{toast:r,state:n}=e,a=Ia(o.map(s=>s.id),i.mode),d=[];a.forEach((s,c)=>s.forEach(m=>d.push({league_id:i.id,matchday:c+1,home_id:m.home||m.bye,away_id:m.away||null,is_bye:!!m.bye,status:m.bye?"bye":"pending"})));const{error:l}=await h.from("mini_league_matches").insert(d);if(l){r("Erreur calendrier : "+l.message,"error");return}await h.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),r(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),dt(t,e,i.id)}async function La(t,e,i){const{data:o}=await h.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),r=(o.current_day||0)+1;if(r>(o.total_days||0)){dt(t,e,i);return}await h.from("mini_leagues").update({current_day:r}).eq("id",i),e.toast(`Journée ${r} commencée !`,"success"),dt(t,e,i)}async function Sa(t,e,i,o,r){var x,y;const{state:n,toast:a}=e,d=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],l=["🥇","🥈","🥉"][r],s=o.prize_amount||d[r]||0,c=o.prize_claimed,m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",m.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${l}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${r===0?"Champion !":r===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${lt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${c?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${lt}">${s.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${r===0?"70%":r===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${c?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${lt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${s.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(m),(x=m.querySelector("#prize-close"))==null||x.addEventListener("click",()=>m.remove()),(y=m.querySelector("#claim-prize-btn"))==null||y.addEventListener("click",async g=>{const f=g.currentTarget;f.disabled=!0,f.textContent="...";const{data:b,error:u}=await h.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:n.profile.id});if(u||!(b!=null&&b.success)){console.error("[MiniLeague] claim_mini_league_prize:",u||b),a((b==null?void 0:b.error)||"Erreur lors de la récupération","error"),f.disabled=!1,f.textContent=`💰 Récupérer ${s.toLocaleString("fr")} cr.`;return}if(b.already_claimed)a("Déjà récupéré précédemment","info");else{const w=(n.profile.credits||0)+b.prize;n.profile&&(n.profile.credits=w);const v=document.getElementById("nav-credits");v&&(v.textContent=`💰 ${w.toLocaleString("fr")}`),a(`💰 +${b.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}m.remove(),dt(t,e,i.id)})}function Ia(t,e){const o=t.length%2===0?[...t]:[...t,null],r=o.length;let n=o.slice(1);const a=[];for(let d=0;d<r-1;d++){const l=[],s=[o[0],...n];for(let c=0;c<r/2;c++){const m=s[c],x=s[r-1-c];m===null?l.push({bye:x}):x===null?l.push({bye:m}):l.push({home:m,away:x})}a.push(l),n=[n[n.length-1],...n.slice(0,-1)]}return e==="aller-retour"?[...a,...a.map(d=>d.map(l=>l.bye?l:{home:l.away,away:l.home}))]:a}function Ta(t,e){const i={};return t.forEach(o=>{i[o.id]={userId:o.id,pseudo:o.pseudo,clubName:o.club_name||o.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),e.filter(o=>o.status==="finished"&&!o.is_bye&&o.home_score!=null).forEach(o=>{const r=i[o.home_id],n=i[o.away_id];!r||!n||(r.played++,n.played++,r.goalsFor+=o.home_score,r.goalsAgainst+=o.away_score,n.goalsFor+=o.away_score,n.goalsAgainst+=o.home_score,o.home_score>o.away_score?(r.won++,r.points+=3,n.lost++):o.home_score<o.away_score?(n.won++,n.points+=3,r.lost++):(r.drawn++,r.points++,n.drawn++,n.points++),r.goalDiff=r.goalsFor-r.goalsAgainst,n.goalDiff=n.goalsFor-n.goalsAgainst)}),Object.values(i).sort((o,r)=>r.points-o.points||r.goalDiff-o.goalDiff||r.goalsFor-o.goalsFor)}async function No(t,e){const{state:i,navigate:o,toast:r}=e,n=i.params||{},a=n.leagueId||null,d=n.mlMatchId||null,l=i.user.id;if(!d||!a){r("Match introuvable","error"),o("mini-league");return}const{data:s,error:c}=await h.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",d).single();if(c||!s){r("Match introuvable","error"),o("mini-league",{openLeagueId:a});return}if(s.home_id!==l&&s.away_id!==l){r("Vous ne faites pas partie de ce match","error"),o("mini-league",{openLeagueId:a});return}const m=s.home_id===l;if(s.match_id){await qt(t,e,s.match_id,m,{mlLeagueId:a,mlMatchId:d});return}await Ii(t,e,"mini_league",async({deckId:x,gcCardsEnriched:y,gcDefs:g,stadiumDef:f})=>{It(t);const b=async u=>{const{data:w,error:v}=await h.rpc("start_mini_league_match",{p_ml_match_id:d,p_user_id:l,p_deck_id:x});if(v||!(w!=null&&w.success)){console.error("[MiniLeague] start_mini_league_match error:",v||w),r((w==null?void 0:w.error)||"Impossible de lancer le match","error"),o("mini-league",{openLeagueId:a});return}if(w.matched){await qt(t,e,w.match_id,m,{mlLeagueId:a,mlMatchId:d,myGC:u||[],gcDefs:g,stadiumDef:f});return}await Aa(t,e,{mlMatchId:d,leagueId:a,amIHome:m,chosenGC:u,gcDefs:g,stadiumDef:f})};if(!(y!=null&&y.length)){await b([]);return}Ti(t,y,b)})}function Aa(t,e,{mlMatchId:i,leagueId:o,amIHome:r,chosenGC:n,gcDefs:a,stadiumDef:d}){return new Promise(l=>{var f;const{navigate:s}=e;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let c=!1;const m=async b=>{if(!c){if(c=!0,clearInterval(g),y)try{y.unsubscribe()}catch{}b&&await qt(t,e,b,r,{mlLeagueId:o,mlMatchId:i,myGC:n||[],gcDefs:a,stadiumDef:d}),l()}};(f=document.getElementById("wait-back"))==null||f.addEventListener("click",()=>{if(c=!0,clearInterval(g),y)try{y.unsubscribe()}catch{}s("mini-league",{openLeagueId:o}),l()});const x=async()=>{if(c)return;const{data:b}=await h.from("mini_league_matches").select("match_id").eq("id",i).single();b!=null&&b.match_id&&m(b.match_id)},y=h.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},b=>{var u;(u=b.new)!=null&&u.match_id&&m(b.new.match_id)}).subscribe(),g=setInterval(x,3e3);x()})}const Go={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function xi(t,e,i=0){return e?(Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0)+(e===t.job||e===t.job2?i:0):0}async function Ma(t,e){t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await mo(t,e)}async function mo(t,e){const{state:i,toast:o,navigate:r}=e;Kt(r,i.profile,"market","/icons/",o);const{data:n}=await h.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:a}=await h.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),d=(n||[]).filter(b=>b.seller_id!==i.profile.id),l=a||[];t.innerHTML=`
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
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-top:2px">${d.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
    </div>

    <!-- Onglets -->
    <div style="padding:8px 16px;background:var(--tile-bg);border-bottom:1px solid var(--tile-border);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--tile-border);background:var(--tile-bg);color:var(--tile-fg-dim);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${l.length})</button>
    </div>

    <!-- Filtres (onglet Acheter seulement) -->
    <div id="mkt-filters" style="padding:10px 16px;background:var(--tile-dark-bg);border-bottom:1px solid var(--tile-border);display:flex;flex-wrap:wrap;gap:8px">
      <input id="flt-name"    placeholder="🔍 Nom"         style="flex:1;min-width:110px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-club"    placeholder="🏟️ Club"        style="flex:1;min-width:90px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-country" placeholder="🌍 Pays"        style="flex:1;min-width:80px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <select id="flt-job" style="padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px;background:var(--tile-bg)">
        <option value="">Tous postes</option>
        <option>GK</option><option>DEF</option><option>MIL</option><option>ATT</option>
      </select>
      <select id="flt-rarity" style="padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px;background:var(--tile-bg)">
        <option value="">Toutes raretés</option>
        <option value="normal">Normal</option>
        <option value="pepite">Pépite</option>
        <option value="papyte">Papyte</option>
        <option value="legende">Légende</option>
      </select>
      <input id="flt-note1"   placeholder="★ Note min"    type="number" min="0" max="20" style="width:90px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-note2"   placeholder="☆ Note 2 min" type="number" min="0" max="20" style="width:90px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
    </div>

    <div id="mkt-content" style="padding:10px 16px;display:flex;flex-direction:column;gap:8px"></div>
  </div>`;let s="buy";const c=()=>{var b,u,w,v,E,p,T;return{name:(((b=document.getElementById("flt-name"))==null?void 0:b.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((w=document.getElementById("flt-country"))==null?void 0:w.value)||"").toLowerCase().trim(),job:((v=document.getElementById("flt-job"))==null?void 0:v.value)||"",rarity:((E=document.getElementById("flt-rarity"))==null?void 0:E.value)||"",note1:parseInt((p=document.getElementById("flt-note1"))==null?void 0:p.value)||0,note2:parseInt((T=document.getElementById("flt-note2"))==null?void 0:T.value)||0}};function m(b){const u=c();return b.filter(w=>{var ne,te,X;const v=(ne=w.card)==null?void 0:ne.player;if(!v)return!1;const E=`${v.firstname} ${v.surname_real}`.toLowerCase(),p=(((te=v.clubs)==null?void 0:te.encoded_name)||"").toLowerCase(),T=(v.country_code||"").toLowerCase(),I=((X=w.card)==null?void 0:X.evolution_bonus)||0,M=xi(v,v.job,I),H=v.job2?xi(v,v.job2,I):0;return!(u.name&&!E.includes(u.name)||u.club&&!p.includes(u.club)||u.country&&!T.includes(u.country)||u.job&&v.job!==u.job||u.rarity&&v.rarity!==u.rarity||u.note1&&M<u.note1||u.note2&&H<u.note2)})}function x(b){var p,T,I;const u=(p=b.card)==null?void 0:p.player;if(!u)return"";const w=((T=b.card)==null?void 0:T.evolution_bonus)||0,v=(i.profile.credits||0)>=b.price;return`<div class="mkt-buy-tile">
      ${qe({...u,_evolution_bonus:w},{width:140})}
      <div class="mkt-price">${b.price.toLocaleString("fr")} cr.</div>
      <div class="mkt-seller">Vendeur : ${((I=b.seller)==null?void 0:I.pseudo)||"—"}</div>
      <button class="btn btn-primary btn-sm" data-buy="${b.id}" ${v?"":"disabled"} style="font-size:12px;padding:8px 10px">${v?"Acheter":"Trop cher"}</button>
    </div>`}function y(b){var te,X,$,N;const u=(te=b.card)==null?void 0:te.player;if(!u)return"";const w=((X=b.card)==null?void 0:X.evolution_bonus)||0,v=xi(u,u.job,w),E=u.job2?xi(u,u.job2,w):0,p=b.status==="sold",T=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,I=Go[u.job]||"#bbb",M=u.job2?Go[u.job2]||"#bbb":null,H=u.job==="GK"?"#fff":I,ne=u.job2==="GK"?"#fff":M;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${p?"opacity:0.7":""}">
      ${T?`<img src="${T}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${($=u.clubs)!=null&&$.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${I};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${H};font-family:Arial Black,Arial">${v}</span>
        </div>
        ${E?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${M};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${ne};font-family:Arial Black,Arial">${E}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:${p?"#22c55e":"#999"};margin-top:1px">
          ${p?`✅ Vendu à ${((N=b.buyer)==null?void 0:N.pseudo)||"—"} · ${b.sold_at?new Date(b.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(b.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${b.price.toLocaleString("fr")}</div>
        ${p?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${b.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function g(){const b=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(b){if(u.style.display=s==="buy"?"flex":"none",s==="buy"){const w=m(d);b.innerHTML=w.length?`<div class="mkt-buy-grid">${w.map(x).join("")}</div>`:'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const w=l.filter(E=>E.status==="active").sort((E,p)=>new Date(p.listed_at)-new Date(E.listed_at)),v=l.filter(E=>E.status==="sold").sort((E,p)=>new Date(p.sold_at||p.listed_at)-new Date(E.sold_at||E.listed_at));b.innerHTML=(w.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${w.length})</div>`+w.map(y).join(""):"")+(v.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${v.length})</div>`+v.map(y).join(""):"")+(!w.length&&!v.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}b.querySelectorAll("[data-buy]").forEach(w=>w.addEventListener("click",()=>Ca(w.dataset.buy,d,t,e))),b.querySelectorAll("[data-cancel]").forEach(w=>w.addEventListener("click",()=>qa(w.dataset.cancel,t,e)))}}t.querySelectorAll(".mkt-tab").forEach(b=>{b.addEventListener("click",()=>{s=b.dataset.tab,t.querySelectorAll(".mkt-tab").forEach(u=>{const w=u===b;u.style.background=w?"var(--green)":"var(--tile-bg)",u.style.color=w?"#fff":"var(--tile-fg-dim)",u.style.borderColor=w?"var(--green)":"var(--tile-border)"}),g()})});let f;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(b=>{var u;(u=document.getElementById(b))==null||u.addEventListener("input",()=>{clearTimeout(f),f=setTimeout(g,250)})}),g()}async function Ca(t,e,i,o){const{state:r,toast:n,refreshProfile:a}=o,d=e.find(c=>c.id===t);if(!d)return;const l=d.price;if((r.profile.credits||0)<l){n("Crédits insuffisants","error");return}ja(d,async()=>{const{error:c}=await h.rpc("buy_market_card",{p_listing_id:t,p_buyer_id:r.profile.id});if(c){n("Erreur achat : "+c.message,"error");return}await a();const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),n("✅ Carte achetée !","success"),await mo(i,o)})}function ja(t,e){var a;const i=(a=t.card)==null?void 0:a.player,o=i?`${i.firstname} ${i.surname_real}`:"cette carte",r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${o} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${t.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(r);const n=d=>{r.remove(),d&&e()};r.querySelector("#buy-cancel").addEventListener("click",()=>n(!1)),r.querySelector("#buy-ok").addEventListener("click",()=>n(!0)),r.addEventListener("click",d=>{d.target===r&&n(!1)})}async function qa(t,e,i){const{toast:o}=i,{data:r}=await h.from("market_listings").select("card_id").eq("id",t).single();if(await h.from("market_listings").update({status:"cancelled"}).eq("id",t),r!=null&&r.card_id){const{count:n}=await h.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",r.card_id).eq("status","active");n||await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",r.card_id)}o("Annonce retirée","success"),mo(e,i)}async function Ba(t,e){var y,g,f,b,u;const{state:i,navigate:o}=e,r=((g=(y=e==null?void 0:e.state)==null?void 0:y.params)==null?void 0:g.tab)||"ranked";t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:n},{data:a},{data:d}]=await Promise.all([h.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").order("mmr",{ascending:!1}).limit(100),h.rpc("get_mini_league_leaderboard"),h.rpc("get_random_leaderboard")]);let l=r;const s=w=>w<3?["#D4A017","#a0a0a0","#cd7f32"][w]:"var(--green)",c=w=>w<3?"#000":"#fff";function m(){var E,p,T;const w=document.getElementById("rankings-legend");w&&(w.innerHTML=l==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const v=document.getElementById("rankings-list");if(v){if(l==="ranked"){const I=n||[];v.innerHTML=I.length>0?I.map((M,H)=>{const ne=bt(M.mmr??450),te=hi(M.mmr??450,ne),X=ne.label+(te?" "+te:""),$=(M.ranked_wins||0)+(M.ranked_losses||0)+(M.ranked_draws||0),N=$>0?Math.round((M.ranked_wins||0)/$*100):0,ae=M.id===i.profile.id,j=(M.placement_matches||0)<10;return`
          <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${ae?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${H<3?["#D4A017","#a0a0a0","#cd7f32"][H]:"rgba(255,255,255,0.08)"};color:${H<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${H<3?"16":"13"}px">${H<3?["🥇","🥈","🥉"][H]:H+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${ne.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${M.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${M.club_name}${j?"":` · ${N}% WR`}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:13px;font-weight:900;letter-spacing:0.3px;color:${ne.color};white-space:nowrap">${j?"❓ Placement":X.toUpperCase()}</div>
              ${j?"":`<div style="font-size:11px;color:var(--tile-fg-dim);margin-top:1px">${(M.mmr??450).toLocaleString("fr")} MMR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(l==="mini-league"){const I=a||[];v.innerHTML=I.length>0?I.map((M,H)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${M.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(H)};color:${c(H)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${H<3?"16":"13"}px">${H<3?["🥇","🥈","🥉"][H]:H+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${M.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${M.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${M.top1} 🥈${M.top2} 🥉${M.top3}</div>
            <div style="color:var(--tile-fg-dim)">${M.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const I=d||[];v.innerHTML=I.length>0?I.map((M,H)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${M.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(H)};color:${c(H)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${H<3?"16":"13"}px">${H<3?["🥇","🥈","🥉"][H]:H+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${M.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${M.club_name}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:16px;font-weight:900;color:#D4A017" title="Score de classement — tient compte du nombre de matchs joués">📊 ${M.wilson_score}</div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">${M.wins}/${M.total} V</div>
            <div style="font-size:9px;color:var(--green);font-weight:700;margin-top:2px">${M.win_pct}%</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}(E=document.getElementById("tab-ranked"))!=null&&E.style&&(document.getElementById("tab-ranked").style.cssText=x(l==="ranked")),(p=document.getElementById("tab-mini-league"))!=null&&p.style&&(document.getElementById("tab-mini-league").style.cssText=x(l==="mini-league")),(T=document.getElementById("tab-random"))!=null&&T.style&&(document.getElementById("tab-random").style.cssText=x(l==="random"))}}const x=w=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${w?"900":"400"};background:${w?"var(--green)":"rgba(255,255,255,0.06)"};color:${w?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;t.innerHTML=`
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
  </div>`,m(),(f=document.getElementById("tab-ranked"))==null||f.addEventListener("click",()=>{l="ranked",m()}),(b=document.getElementById("tab-mini-league"))==null||b.addEventListener("click",()=>{l="mini-league",m()}),(u=document.getElementById("tab-random"))==null||u.addEventListener("click",()=>{l="random",m()})}async function Da(t,e){var H,ne,te,X;const{state:i,navigate:o,toast:r}=e,n=i.profile;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:d}]=await Promise.all([h.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),h.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",n.id).single()]);if(!d){r("Erreur chargement profil","error"),o("home");return}if(!a){const $=d.mmr??450,N=bt($);Fi($);const ae=Math.round(450+($-450)*.5),j=bt(ae),{data:de}=await h.from("users").select("id, pseudo, club_name, mmr, rank_tier").order("mmr",{ascending:!1}).limit(100),ve=(de||[]).findIndex(C=>C.id===d.id)+1;t.innerHTML=`
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
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;text-align:center;border:2px solid ${N.color}40">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Ton classement</div>
        <div style="font-size:44px;margin-bottom:2px">${N.emoji}</div>
        <div style="font-size:18px;font-weight:900;color:${N.color};letter-spacing:2px;text-transform:uppercase">${N.label}</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px">MMR ${$} ${ve?`· #${ve} au classement général`:""}</div>
      </div>

      <!-- Top 100 -->
      <div>
        <div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:8px">🏆 Classement général — Top 100</div>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto">
          ${(de||[]).map((C,S)=>{const Y=bt(C.mmr??450),R=C.id===d.id;return`<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:10px;
              background:${R?"rgba(212,160,23,0.15)":"rgba(0,0,0,0.25)"};
              border:1px solid ${R?"#D4A017":"transparent"}">
              <div style="width:26px;text-align:center;font-size:12px;font-weight:900;color:rgba(255,255,255,0.5)">#${S+1}</div>
              <div style="font-size:18px">${Y.emoji}</div>
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${C.pseudo}</div>
                <div style="font-size:10px;color:rgba(255,255,255,0.4)">${C.club_name||"—"}</div>
              </div>
              <div style="font-size:13px;font-weight:900;color:${Y.color}">${C.mmr??450}</div>
            </div>`}).join("")||'<div style="text-align:center;color:rgba(255,255,255,0.4);font-size:12px;padding:16px">Aucun classement disponible.</div>'}
        </div>
      </div>

      <!-- Aperçu saison suivante -->
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;border:1.5px dashed rgba(255,255,255,0.2)">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;text-align:center">📅 Aperçu — prochaine saison</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:24px">
          <div style="text-align:center;opacity:.6">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Actuel</div>
            <div style="font-size:24px">${N.emoji}</div>
            <div style="font-size:12px;font-weight:700;color:${N.color}">${$}</div>
          </div>
          <div style="font-size:20px;color:rgba(255,255,255,0.3)">→</div>
          <div style="text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Recalculé</div>
            <div style="font-size:28px">${j.emoji}</div>
            <div style="font-size:14px;font-weight:900;color:${j.color}">${ae}</div>
          </div>
        </div>
        <div style="font-size:11px;color:rgba(255,255,255,0.35);text-align:center;margin-top:10px">Ton MMR est recalculé vers la moyenne à chaque nouvelle saison, pour repartir sur des bases équilibrées.</div>
      </div>
    </div>`,(H=document.getElementById("ranked-back"))==null||H.addEventListener("click",()=>o("home"));return}const l=d.mmr??450,s=d.mmr_deviation??350,c=d.mmr_volatility??.06,m=d.placement_matches??0,x=m<10,y=Math.max(0,10-m),g=bt(l),f=Fi(l),b=hi(l,g),u=g.label+(b?" "+b:""),w=_o.findIndex($=>$.id===g.id),v=_o[w+1]||null,E=g.id==="master"?"master":`${g.id}_${b}`,p={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},T=(d.ranked_wins||0)+(d.ranked_losses||0)+(d.ranked_draws||0),I=T>0?Math.round((d.ranked_wins||0)/T*100):0,M=Mn.map($=>{const N=$.key===E,ae=$.division==="III"||$.division===null;return`
    <div ${N?'data-current-tier="true"':""} style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:4px;opacity:${N?1:.45};
      transform:${N?"scale(1.15)":"scale(1)"};transition:all 0.3s;min-width:${ae?"60px":"46px"}">
      <div style="font-size:${N?"34px":ae?"26px":"17px"}">${ae?$.emoji:"●"}</div>
      <div style="font-size:${N?"13px":"11px"};color:${$.color};font-weight:${N?"900":"600"};letter-spacing:0.4px;white-space:nowrap">${$.division?$.division:$.label.toUpperCase()}</div>
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
  <div class="rk-root" style="min-height:100%;background:${p[g.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px">
      <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
      <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
    </div>

    <!-- Bandeau tier -->
    <div class="rk-tier-band" style="background:rgba(0,0,0,0.35);border-radius:20px;padding:20px 16px;text-align:center;border:2px solid ${g.color}40">
      <div class="rk-tier-emoji" style="font-size:52px;margin-bottom:4px">${g.emoji}</div>
      <div class="rk-tier-label" style="font-size:22px;font-weight:900;color:${g.color};letter-spacing:3px;text-transform:uppercase">${u}</div>
    </div>

    <!-- Progression bar -->
    ${g.id!=="master"?`
    <div class="rk-progress" style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${g.emoji} ${g.label}</span>
        ${v?`<span>${v.emoji} ${v.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${f}%;background:linear-gradient(90deg,${g.color},${g.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${f}% vers ${v?v.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama : 16 échelons, répartis sur toute la largeur (scrollable si ça déborde) -->
    <div id="tiers-scroll" class="rk-tiers-scroll" style="display:flex;justify-content:space-between;align-items:flex-end;gap:10px;padding:10px 16px;overflow-x:auto;scrollbar-width:none">
      ${M}
    </div>

    <!-- Placement / Stats -->
    ${x?`
    <div class="rk-stats-block" style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${m}/10</div>
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
        <div style="font-size:20px;font-weight:900;color:#D4A017">${I}%</div>
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
        background:linear-gradient(135deg,${g.color},${g.color}99);
        color:#000;font-size:18px;font-weight:900;cursor:pointer;letter-spacing:1px;
        box-shadow:0 4px 20px ${g.color}60;text-transform:uppercase">
        ⚽ Jouer en Ranked
      </button>
      <button id="ranked-leaderboard-btn" class="rk-leader-btn" style="width:100%;padding:12px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.2);
        background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        🏆 Classement Ranked
      </button>
    </div>
  </div>`,(ne=document.getElementById("ranked-back"))==null||ne.addEventListener("click",()=>o("home")),(te=document.getElementById("ranked-leaderboard-btn"))==null||te.addEventListener("click",()=>o("rankings",{tab:"ranked"})),requestAnimationFrame(()=>{const $=document.getElementById("tiers-scroll"),N=$==null?void 0:$.querySelector("[data-current-tier]");$&&N&&($.scrollLeft=N.offsetLeft-$.clientWidth/2+N.clientWidth/2)}),(X=document.getElementById("ranked-play-btn"))==null||X.addEventListener("click",()=>{ct(),o("match",{matchMode:"ranked",rankedData:{mmr:l,rd:s,sigma:c,isPlacement:x}})})}async function Pa(t,{state:e,navigate:i,toast:o}){const r=e.profile;if(!r)return;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await h.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${r.id},away_id.eq.${r.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(n||[]).filter(c=>c.status==="finished"),l=(n||[]).filter(c=>c.status==="in_progress");function s(c){const m=c.home_id===r.id;m?c.home_score:c.away_score,m?c.away_score:c.home_score;const x=c.winner_id===r.id,y=c.home_score===c.away_score&&c.status==="finished",g=c.status!=="finished"?"…":y?"N":x?"V":"D",f=c.status!=="finished"||y?"#888":x?"#1A6B3C":"#c0392b";let b=a[c.mode]||c.mode;c.away_id===null&&!b.startsWith("IA")&&(b="IA");const w=c.home_id===r.id?c.away:c.home;let v;c.away_id===null?v=b:w?v=`${w.club_name||w.pseudo} (${w.pseudo})`:v="Adversaire";let E="";c.status==="in_progress"&&Date.now()-new Date(c.created_at).getTime()>3600*1e3&&(E=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const p=new Date(c.created_at),T=p.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+p.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),I=c.status==="finished"?`${c.home_score} - ${c.away_score}`:`${c.home_score||0} - ${c.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${v}${E}</div>
        <div style="font-size:11px;color:var(--gray-600)">${b} · ${T}${c.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${I}</span>
        <span style="background:${f};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${g}</span>
      </div>
    </div>`}t.innerHTML=`
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

      ${d.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${d.map(s).join("")}
        </div>`:""}

      ${(n||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}Cn(qn);const _e={user:null,profile:null,page:"home",params:{}};function mt(t,e="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=t,o.className=`show ${e}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function Fa(t,e,i=""){document.getElementById("modal-title").textContent=t,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Wi(){document.getElementById("modal-overlay").classList.add("hidden")}async function oi(){if(!_e.user)return;const{data:t}=await h.from("users").select("*").eq("id",_e.user.id).single();t&&(_e.profile=t)}const zn="mw_theme";function ri(){return localStorage.getItem(zn)||"dark"}function Oo(t){var e;localStorage.setItem(zn,t),yi(t),(e=_e.profile)!=null&&e.id&&h.from("users").update({theme:t}).eq("id",_e.profile.id).then(()=>{})}function yi(t){var e,i;document.documentElement.setAttribute("data-theme",t),t==="club"&&(document.documentElement.style.setProperty("--club-color1",((e=_e.profile)==null?void 0:e.club_color1)||"#0a0f0a"),document.documentElement.style.setProperty("--club-color2",((i=_e.profile)==null?void 0:i.club_color2)||"#080d08"))}function wt(t,e={}){_e.page=t,_e.params=e,Ln()}async function Ln(){var o,r,n,a;const t=document.getElementById("page-content");if(!t)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===_e.page)});const e=document.getElementById("nav-credits");e&&_e.profile&&(e.textContent=`💰 ${(_e.profile.credits||0).toLocaleString("fr")}`);const i={state:_e,navigate:wt,toast:mt,openModal:Fa,closeModal:Wi,refreshProfile:oi};switch(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',_e.page){case"home":await qi(t,i);break;case"home2":await qi(t,i);break;case"game":await wr(t,i);break;case"settings":await mn(t,i);break;case"collection":await Sr(t,i);break;case"decks":await Oi(t,i);break;case"boosters":await Vn(t,i);break;case"ranked":await Da(t,i);break;case"match":{const d=_e.params&&_e.params.matchMode||"vs_ai_easy";d==="random"?await Vi(t,i,!1):d==="ranked"?await Vi(t,i,!0):d==="friend"?await ma(t,i,(o=_e.params)==null?void 0:o.friendId,(r=_e.params)==null?void 0:r.friendName):d==="mini_league"||d==="mini-league"?await No(t,i,(n=_e.params)==null?void 0:n.mlMatchId,(a=_e.params)==null?void 0:a.leagueId):await Fr(t,i);break}case"market":await Ma(t,i);break;case"rankings":await Ba(t,i);break;case"matches":await Pa(t,i);break;case"friends":await xr(t,i);break;case"mini-league":await ya(t,i);break;case"match-mini-league":{const d=_e.params||{};await No(t,i,d.mlMatchId,d.leagueId);break}default:await qi(t,i)}}function Ra(){var o,r;const t=document.getElementById("app"),e=_e.profile;if(!e)return;const i="/icons/";t.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.08.02-1743" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",a=>{a.preventDefault(),wt(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>wt("home")),document.getElementById("nav-credits").addEventListener("click",()=>wt("boosters")),(o=document.getElementById("journal-btn"))==null||o.addEventListener("click",()=>Na()),(r=document.getElementById("settings-btn"))==null||r.addEventListener("click",()=>wt("settings"))}async function Na(){const{data:t}=await h.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const r=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${o.image_url?`<img src="${o.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${r}</div>
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}function Ga(t,{onPlay:e}){var o;const i="/icons/";t.style.cssText="",t.innerHTML=`
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
  </div>`,(o=t.querySelector("#pl-play-btn"))==null||o.addEventListener("click",e)}async function Oa(){yi(ri()),document.getElementById("modal-overlay").addEventListener("click",o=>{o.target===o.currentTarget&&Wi()}),document.getElementById("modal-close").addEventListener("click",Wi);const{data:{session:t}}=await h.auth.getSession();if(!t){Ho(),Ga(document.getElementById("app"),{onPlay:()=>ko(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:mt})});return}_e.user=t.user,await oi(),yi(ri()),Ho();try{const{data:o}=await h.from("formation_links_overrides").select("formation, links"),r={};(o||[]).forEach(n=>{r[n.formation]=n.links}),jn(r)}catch(o){console.warn("Impossible de charger les overrides de formation:",o)}if(!_e.profile){Dn(document.getElementById("app"),{state:_e,navigate:async()=>{await oi(),yi(ri()),Pi()},toast:mt,refreshProfile:oi});return}h.rpc("heartbeat").then(()=>{}).catch(()=>{}),setInterval(()=>{h.rpc("heartbeat").then(()=>{}).catch(()=>{})},45e3);const e=Array.isArray(_e.profile.pending_boosters)?_e.profile.pending_boosters:[];if(!_e.profile.onboarding_done&&e.length>0){tr(document.getElementById("app"),{state:_e,toast:mt,refreshProfile:oi,navigate:()=>{Pi(),setTimeout(()=>So(_e.profile,wt,mt),800)}});return}Pi(),new URLSearchParams(location.search).get("tutorial")==="1"?(history.replaceState({},"",location.pathname),setTimeout(()=>fn(_e.profile,wt,mt),800)):setTimeout(()=>So(_e.profile,wt,mt),800),h.auth.onAuthStateChange(async(o,r)=>{o==="SIGNED_OUT"&&(_e.user=null,_e.profile=null,document.getElementById("app").innerHTML="",ko(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:mt}))})}function Ha(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Ai(){const t=document.getElementById("app");t&&(t.style.height=Ha()+"px")}window.addEventListener("resize",Ai);window.addEventListener("orientationchange",()=>setTimeout(Ai,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Ai);function Pi(){const t=()=>{var i;(i=_e.user)!=null&&i.id&&h.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",_e.user.id).then(()=>{})};t(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(t,6e4);const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Ai(),Ra(),Ln()}function Ho(){const t=document.getElementById("app-loader"),e=document.getElementById("app");e&&(e.style.display=""),t&&(t.classList.add("zoom-out"),setTimeout(()=>t.style.display="none",500))}function Sn(t){var o;const e=document.getElementById("app-loader");if(e&&(e.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${t||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(o=document.getElementById("boot-retry"))==null||o.addEventListener("click",()=>window.location.reload())}Oa().catch(t=>{console.error("Échec du démarrage:",t),Sn()});setTimeout(()=>{const t=document.getElementById("app-loader");t&&t.style.display!=="none"&&!t.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Sn("Le serveur met trop de temps à répondre.")},12e3);
