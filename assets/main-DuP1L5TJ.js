const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/match-shared-ClAg5DBE.js","assets/match-shared-D_M6t_P4.css"])))=>i.map(i=>d[i]);
import{w as to,s as y,_ as Yo,x as Wo,F as ct,g as Ct,n as it,k as di,m as Kt,r as qe,j as yt,y as ki,z as Hi,G as Oe,t as gi,C as Mi,I as jt,p as io,J as qt,L as Ci,O as Ui,o as $i,P as Ei,Q as Fi,U as ji,V as Vt,W as ci,X as Lt,Y as Jo,Z as pi,$ as Qe,a0 as ui,a1 as $t,a2 as ot,a3 as Cn,a4 as Xo,a5 as oo,a6 as jn,a7 as Qo,a8 as It,T as So,a9 as qn,v as Bn,aa as Dn,d as Fn}from"./match-shared-ClAg5DBE.js";const Pn="/";async function zo(t,{navigate:e,toast:i}){let o="login";const n=await to("signup_access_code_required"),r=()=>{var d,l,s,p,c,b,x,m;const a=o==="login";if(t.innerHTML=`
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
        <img src="${Pn}icons/logo-withname.png" alt="Manager Wars" style="height:44px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(d=document.getElementById("tab-login-btn"))==null||d.addEventListener("click",()=>{o="login",r()}),(l=document.getElementById("tab-reg-btn"))==null||l.addEventListener("click",()=>{o="register",r()}),a){(s=document.getElementById("login-password"))==null||s.addEventListener("keydown",g=>{var k;g.key==="Enter"&&((k=document.getElementById("login-btn"))==null||k.click())});let u=null,h=!1;n&&((p=document.getElementById("login-access-code"))==null||p.addEventListener("input",g=>{const k=g.target.value,w=document.getElementById("login-access-code-status"),j=document.getElementById("login-btn");if(clearTimeout(u),h=!1,j&&(j.disabled=!0,j.style.opacity="0.45",j.style.cursor="not-allowed"),!k){w&&(w.textContent="");return}w&&(w.textContent="⏳ Vérification…",w.style.color="rgba(255,255,255,0.4)"),u=setTimeout(async()=>{const{data:f,error:B}=await y.rpc("check_signup_password",{input_password:k});if(B){w&&(w.textContent="Erreur de vérification.",w.style.color="#f87171");return}h=!!f,w&&(w.textContent=h?"✅ Code valide":"❌ Code incorrect",w.style.color=h?"#4ade80":"#f87171"),j&&(j.disabled=!h,j.style.opacity=h?"1":"0.45",j.style.cursor=h?"pointer":"not-allowed")},400)})),(c=document.getElementById("login-btn"))==null||c.addEventListener("click",async()=>{var T;const g=document.getElementById("login-email").value.trim(),k=document.getElementById("login-password").value,w=((T=document.getElementById("login-access-code"))==null?void 0:T.value)||"",j=document.getElementById("login-error");if(j.textContent="",!g||!k){j.textContent="Remplissez tous les champs.";return}if(n){const{data:$}=await y.rpc("check_signup_password",{input_password:w});if(!$){j.textContent="Code d'accès incorrect.";return}}const f=document.getElementById("login-btn");f.textContent="⏳ Connexion…",f.disabled=!0;const{error:B}=await y.auth.signInWithPassword({email:g,password:k});if(f.textContent="⚽ Se connecter",f.disabled=!1,B){j.textContent=B.message.includes("Invalid")?"Email ou mot de passe incorrect.":B.message;return}window.location.reload()})}else{(b=document.getElementById("reg-confirm"))==null||b.addEventListener("keydown",g=>{var k;g.key==="Enter"&&((k=document.getElementById("reg-btn"))==null||k.click())});let u=null,h=!1;n&&((x=document.getElementById("reg-access-code"))==null||x.addEventListener("input",g=>{const k=g.target.value,w=document.getElementById("access-code-status"),j=document.getElementById("reg-btn");if(clearTimeout(u),h=!1,j&&(j.disabled=!0,j.style.opacity="0.45",j.style.cursor="not-allowed"),!k){w&&(w.textContent="");return}w&&(w.textContent="⏳ Vérification…",w.style.color="rgba(255,255,255,0.4)"),u=setTimeout(async()=>{const{data:f,error:B}=await y.rpc("check_signup_password",{input_password:k});if(B){w&&(w.textContent="Erreur de vérification.",w.style.color="#f87171");return}h=!!f,w&&(w.textContent=h?"✅ Code valide":"❌ Code incorrect",w.style.color=h?"#4ade80":"#f87171"),j&&(j.disabled=!h,j.style.opacity=h?"1":"0.45",j.style.cursor=h?"pointer":"not-allowed")},400)})),(m=document.getElementById("reg-btn"))==null||m.addEventListener("click",async()=>{var L;const g=document.getElementById("reg-email").value.trim(),k=document.getElementById("reg-password").value,w=document.getElementById("reg-confirm").value,j=((L=document.getElementById("reg-access-code"))==null?void 0:L.value)||"",f=document.getElementById("reg-error");if(f.textContent="",!g||!k||!w){f.textContent="Remplissez tous les champs.";return}if(!g.includes("@")||!g.includes(".")){f.textContent="Adresse email invalide.";return}if(k.length<6){f.textContent="Mot de passe trop court (min. 6 caractères).";return}if(k!==w){f.textContent="Les mots de passe ne correspondent pas.";return}if(n){const{data:W}=await y.rpc("check_signup_password",{input_password:j});if(!W){f.textContent="Code d'accès incorrect.";return}}const B=document.getElementById("reg-btn");B.textContent="⏳ Création…",B.disabled=!0;const{data:T,error:$}=await y.auth.signUp({email:g,password:k});if(B.textContent="🚀 Créer mon compte",B.disabled=!1,$){$.message.includes("already registered")||$.message.includes("already exists")||$.message.includes("User already")?f.textContent="Un compte existe déjà avec cette adresse email.":f.textContent=$.message;return}if(T!=null&&T.user&&Array.isArray(T.user.identities)&&T.user.identities.length===0){f.textContent="Un compte existe déjà avec cette adresse email.";return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),o="login",r(),setTimeout(()=>{const W=document.getElementById("login-email");W&&(W.value=g)},50)})}};r()}function Rn(t,{state:e,navigate:i,toast:o,refreshProfile:n}){let r="#1A6B3C",a="#D4A017";t.innerHTML=`
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
  `;function d(){var m;const s=document.getElementById("logo-preview"),p=document.getElementById("logo-initials"),c=((m=document.getElementById("setup-club"))==null?void 0:m.value)||"MW",b=c.trim().split(" ").filter(Boolean),x=b.length>=2?(b[0][0]+b[1][0]).toUpperCase():c.slice(0,2).toUpperCase();s&&(s.style.background=a,s.style.borderColor=r),p&&(p.textContent=x,p.style.color=r)}document.getElementById("color1").addEventListener("input",s=>{r=s.target.value,document.getElementById("swatch1").style.background=r,d()}),document.getElementById("color2").addEventListener("input",s=>{a=s.target.value,document.getElementById("swatch2").style.background=a,d()});function l(s){document.querySelectorAll(".setup-step").forEach(p=>p.classList.remove("active")),document.getElementById(`step-${s}`).classList.add("active"),document.getElementById("step-num").textContent=s,document.getElementById("progress-fill").style.width=`${Math.round(s/3*100)}%`,s===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),p=document.getElementById("step1-error");if(p.textContent="",s.length<3){p.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:c}=await y.from("users").select("id").eq("pseudo",s).maybeSingle();if(c){p.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const s=document.getElementById("setup-club").value.trim(),p=document.getElementById("step2-error");if(p.textContent="",s.length<2){p.textContent="Nom trop court (min. 2 caractères).";return}const{data:c}=await y.from("users").select("id").eq("club_name",s).maybeSingle();if(c){p.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),p=document.getElementById("setup-club").value.trim(),c=document.getElementById("step3-error"),b=document.getElementById("step3-finish");c.textContent="",b.disabled=!0,b.textContent="Création en cours…";try{const{error:x}=await y.from("users").insert({id:e.user.id,pseudo:s,club_name:p,club_color1:r,club_color2:a,credits:15e3});if(x)throw x;await Nn(e.user.id),await n(),o(`Bienvenue ${s} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(x){c.textContent=x.message,b.disabled=!1,b.textContent="🚀 Créer mon profil !"}})}async function Nn(t){const e=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1},{type:"stadium",count:1}];try{await y.from("users").update({pending_boosters:e,onboarding_done:!1,first_booster_opened:!1}).eq("id",t)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Zo="mw_sound_volume";function no(){const t=localStorage.getItem(Zo);if(t===null)return 100;const e=parseInt(t,10);return Number.isFinite(e)?Math.max(0,Math.min(100,e)):100}function Gn(t){localStorage.setItem(Zo,String(Math.max(0,Math.min(100,Math.round(t)))))}function ro(){return no()===0}function Si(t){return Math.max(0,Math.min(1,t*(no()/100)))}function ao(t,e=1){if(ro())return null;try{const i=new Audio(t);return i.volume=Si(e),i.play().catch(()=>{}),i}catch{return null}}let ht=null,Ki=null,Lo=.3;function en(t,e=.3){if(Lo=e,ht&&Ki===t&&!ht.paused){ht.volume=Si(Lo);return}if(Ht(),!ro())try{const i=new Audio(t);i.loop=!0,i.volume=Si(e),i.play().catch(()=>{}),ht=i,Ki=t}catch{}}function Ht(){if(ht)try{ht.pause(),ht.currentTime=0}catch{}ht=null,Ki=null}let oi=null;function tn(t,e=.6){if(Ke(),!ro())try{const i=new Audio(t);i.volume=Si(e),i.play().catch(()=>{}),oi=i}catch{}}function Ke(){if(oi)try{oi.pause(),oi.currentTime=0}catch{}oi=null}async function on(t=null){const e=new Date().toISOString().slice(0,10),{data:i}=await y.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const o=i.filter(a=>!(a.available_from&&e<a.available_from||a.available_until&&e>a.available_until));if(!o.length)return[];let n=o;if(t){const a=o.filter(d=>d.max_per_user!=null);if(a.length){const{data:d}=await y.from("booster_claims").select("booster_id").eq("user_id",t).in("booster_id",a.map(s=>s.id)),l={};(d||[]).forEach(s=>{l[s.booster_id]=(l[s.booster_id]||0)+1}),n=o.filter(s=>s.max_per_user==null?!0:(l[s.id]||0)<s.max_per_user)}}if(!n.length)return[];const{data:r}=await y.from("booster_drop_rates").select("*").in("booster_id",n.map(a=>a.id)).order("sort_order");return n.map(a=>({...a,rates:(r||[]).filter(d=>d.booster_id===a.id)}))}async function On(t,e){const{data:i}=await y.from("booster_configs").select("max_per_user").eq("id",e).single();i!=null&&i.max_per_user&&await y.from("booster_claims").insert({user_id:t,booster_id:e})}function Hn(t){if(!(t!=null&&t.length))return null;const e=t.reduce((o,n)=>o+Number(n.percentage),0);let i=Math.random()*e;for(const o of t)if(i-=Number(o.percentage),i<=0)return o;return t[t.length-1]}const nn=()=>Object.keys(ct),Un=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Vi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Kn(t){const e=t.player;if(!e)return"";const i=t.evolution_bonus||0;return qe({...e,_evolution_bonus:i},{width:140})}function so(t){var n;const e={};(t.rates||[]).forEach(r=>{e[r.card_type]=(e[r.card_type]||0)+Number(r.percentage||0)});const i=((n=Object.entries(e).sort((r,a)=>a[1]-r[1])[0])==null?void 0:n[0])||"player",o=t.image_url||"booster-players.png";return{id:t.id,img:"/icons/"+o,name:t.name,sub:`${t.card_count} carte(s)`,cost:t.price_type==="credits"&&t.price_credits||0,costLabel:t.price_type==="credits"?`${(t.price_credits||0).toLocaleString("fr")} crédits`:t.price_type==="pub"?"1 pub":"Gratuit",cardCount:t.card_count||5,type:i,isPub:t.price_type==="pub",rates:t.rates||[],allow_duplicates:t.allow_duplicates!==!1,_boosterId:t.id,_raw:t}}async function Vn(t,e,i,o){if(t.reward_type==="credits"){const n=(e.credits||0)+(t.credits_amount||0),{error:r}=await y.from("users").update({credits:n}).eq("id",e.id);if(r)throw r;return e.credits=n,{type:"credits",amount:t.credits_amount}}if(t.reward_type==="card"){const{data:n}=await y.from("players").select("firstname, surname_real, rarity").eq("id",t.player_id).single(),{error:r}=await y.from("cards").insert({owner_id:e.id,player_id:t.player_id,card_type:"player"});if(r)throw r;return{type:"card",player:n}}if(t.reward_type==="booster"){const{data:n}=await y.from("booster_configs").select("*").eq("id",t.booster_config_id).single(),{data:r}=await y.from("booster_drop_rates").select("*").eq("booster_id",t.booster_config_id);if(!n)throw new Error("Booster introuvable (peut-être supprimé depuis).");const a=so({...n,rates:r});let d=[];return a.type==="formation"?d=await po(e,0):a.type==="game_changer"?d=await co(e,a.cardCount,0):a.type==="player"?d=await lo(e,a.cardCount,0):d=await zi(e,{...a,cost:0}),{type:"booster",name:n.name,cards:d,boosterUI:a}}throw new Error("Type de récompense inconnu.")}async function Yn(t,{state:e,navigate:i,toast:o}){var c,b,x;Wt(i,e.profile,"boosters","/icons/",o);const n=((c=e.profile)==null?void 0:c.credits)||0;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let r=[];try{r=(await on((b=e.user)==null?void 0:b.id)).map(so)}catch(m){console.warn("Erreur chargement boosters DB, fallback hardcodé",m)}r.length||(r=Un.map(m=>({...m,rates:[],isPub:m.id==="players_pub"})));const a=await y.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.profile.id).then(m=>m.data||[]),d=new Set(a.filter(m=>m.card_type==="stadium").map(m=>m.stadium_id)),l=new Set(a.filter(m=>m.card_type==="formation").map(m=>m.formation)),s=new Set(a.filter(m=>m.card_type==="game_changer").map(m=>m.gc_type)),p={};for(const m of r){if(m.allow_duplicates!==!1||!((x=m.rates)!=null&&x.length))continue;const u=[...new Set((m.rates||[]).map(g=>g.card_type))];let h=!1;for(const g of u)if(g==="stadium"){const{data:k}=await y.from("stadium_definitions").select("id");if((k||[]).some(w=>!d.has(w.id))){h=!0;break}}else if(g==="game_changer"){const{data:k}=await y.from("gc_definitions").select("name").eq("is_active",!0);if((k||[]).some(w=>!s.has(w.name))){h=!0;break}}else if(g==="formation"){const{FORMATION_LINKS:k}=await Yo(async()=>{const{FORMATION_LINKS:w}=await import("./match-shared-ClAg5DBE.js").then(j=>j.ab);return{FORMATION_LINKS:w}},__vite__mapDeps([0,1]));if(Object.keys(k).some(w=>!l.has(w))){h=!0;break}}else{h=!0;break}h||(p[m.id]=!0)}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${n.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${r.map(m=>{const u=m.cost===0||n>=m.cost,h=p[m.id]===!0;return`<div class="booster-card ${!u||h?"disabled":""}" data-booster="${m.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${m.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${m.img}" alt="${m.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${m.name}</div>
            <div class="desc">${m.sub}</div>
            <div class="cost">${m.costLabel}</div>
            ${u?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
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
  </div>`,t.querySelectorAll(".booster-card:not(.disabled)").forEach(m=>{m.addEventListener("click",async()=>{const u=r.find(h=>h.id===m.dataset.booster);if(u){m.style.opacity="0.5",m.style.pointerEvents="none";try{await rn(u,{state:e,toast:o,navigate:i,container:t})}catch(h){o(h.message,"error"),m.style.opacity="",m.style.pointerEvents=""}}})}),t.querySelectorAll(".booster-info-btn").forEach(m=>{m.addEventListener("click",u=>{u.stopPropagation();const h=r.find(g=>g.id===m.dataset.boosterId);Zn(h)})})}async function rn(t,{state:e,toast:i,navigate:o,container:n}){var c,b,x;if(t.cost>0&&e.profile.credits<t.cost){i("Crédits insuffisants","error");return}if(t._boosterId){const m=((c=t._raw)==null?void 0:c.max_per_user)??null;if(m!=null){const{count:u}=await y.from("booster_claims").select("id",{count:"exact",head:!0}).eq("user_id",e.user.id).eq("booster_id",t._boosterId);if((u||0)>=m){i(`Quota atteint pour ce booster (${m} max.)`,"error");return}}}if(t.isPub){if(!await to("pub_mode")){Wo();return}await tr()}const{data:r}=await y.from("cards").select("card_type, player_id, formation").eq("owner_id",e.profile.id),a=new Set((r||[]).filter(m=>m.card_type==="player").map(m=>m.player_id)),d=new Set((r||[]).filter(m=>m.card_type==="formation").map(m=>m.formation));let l=[],s=null;try{if((b=t.rates)!=null&&b.length)l=await zi(e.profile,t);else{const m=t.type||"player";m==="player"?l=await lo(e.profile,t.cardCount,t.cost):m==="game_changer"?l=await co(e.profile,t.cardCount,t.cost):m==="formation"?l=await po(e.profile,t.cost):l=await zi(e.profile,t)}}catch(m){s=m.message||String(m),console.error("[Booster] Erreur:",m)}if(l!=null&&l.length&&t._boosterId&&await On(e.user.id,t._boosterId),!(l!=null&&l.length)){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",m.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${s||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(m),(x=m.querySelector("#anim-close-err"))==null||x.addEventListener("click",()=>m.remove());return}l.forEach(m=>{m.card_type==="player"&&m.player?m.isDuplicate=a.has(m.player.id):m.card_type==="formation"&&(m.isDuplicate=d.has(m.formation))});const{data:p}=await y.from("users").select("*").eq("id",e.profile.id).single();p&&(e.profile=p),an(e.profile.id,t,l),uo(l,t,o,null,{state:e,toast:i,container:n})}function Wn(){const t=Math.random()*100;return t<.5?"legende":t<2?"special":t<10?"normal_high":"normal_low"}function xt(t){return Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Jn(t,e){let i;switch(e){case"legende":i=t.filter(o=>o.rarity==="legende"),i.length||(i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=t.filter(o=>xt(o)>=6));break;case"special":i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=t.filter(o=>xt(o)>=6));break;case"normal_high":i=t.filter(o=>o.rarity==="normal"&&xt(o)>=6),i.length||(i=t.filter(o=>xt(o)>=6));break;default:i=t.filter(o=>o.rarity==="normal"&&xt(o)>=1&&xt(o)<=5),i.length||(i=t.filter(o=>o.rarity==="normal"));break}return i.length||(i=t),i[Math.floor(Math.random()*i.length)]}async function zi(t,e){if(e.cost>0){const{error:b}=await y.from("users").update({credits:t.credits-e.cost}).eq("id",t.id);if(b)throw b;t.credits-=e.cost,Jt(t.credits)}const i=e.allow_duplicates!==!1;let o=[];const{data:n,error:r}=await y.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.id);if(r){const{data:b}=await y.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",t.id);o=b||[]}else o=n||[];const a=new Set(o.filter(b=>b.card_type==="player").map(b=>b.player_id)),d=new Set(o.filter(b=>b.card_type==="formation").map(b=>b.formation)),l=new Set(o.filter(b=>b.card_type==="game_changer").map(b=>b.gc_type)),s=new Set(o.filter(b=>b.card_type==="stadium").map(b=>b.stadium_id).filter(Boolean)),p=new Set,c=[];for(let b=0;b<(e.cardCount||5);b++){const x=Hn(e.rates);if(x){if(x.card_type==="player"){const m=T=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[T]||T,u=x.rarity?m(x.rarity):null;let h=y.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);u&&(h=h.eq("rarity",u));const{data:g}=await h;let k=g||[];if((x.note_min||x.note_max)&&(k=k.filter(T=>{const $=Math.max(Number(T.note_g)||0,Number(T.note_d)||0,Number(T.note_m)||0,Number(T.note_a)||0);return(!x.note_min||$>=x.note_min)&&(!x.note_max||$<=x.note_max)})),k.length||(x.note_min||x.note_max?(k=g||[],console.warn("[Booster] Aucun joueur avec note",x.note_min,"-",x.note_max,"— fallback rareté uniquement")):k=g||[]),!k.length)continue;let w=k.filter(T=>!p.has(T.id));if(i)w.length||(w=k);else if(w=w.filter(T=>!a.has(T.id)),!w.length)continue;const j=w[Math.floor(Math.random()*w.length)];p.add(j.id);const f=a.has(j.id),{data:B}=await y.from("cards").insert({owner_id:t.id,player_id:j.id,card_type:"player"}).select().single();B&&(c.push({...B,player:j,isDuplicate:f}),y.rpc("record_transfer",{p_card_id:B.id,p_player_id:j.id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(x.card_type==="game_changer"){const{data:m}=await y.from("gc_definitions").select("id,name,color,effect,image_url,gc_type").eq("is_active",!0).eq("gc_type","game_changer"),u=m!=null&&m.length?m:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],h=i?u:u.filter(j=>!l.has(j.name));if(!i&&!h.length)continue;const g=h[Math.floor(Math.random()*h.length)],k=g.name,{data:w}=await y.from("cards").insert({owner_id:t.id,card_type:"game_changer",gc_type:k,gc_definition_id:g.id||null}).select().single();w&&c.push({...w,_gcDef:g})}else if(x.card_type==="formation"){const m=nn(),u=i?m:m.filter(w=>!d.has(w));if(!i&&!u.length)continue;const h=u[Math.floor(Math.random()*u.length)],g=d.has(h),{data:k}=await y.from("cards").insert({owner_id:t.id,card_type:"formation",formation:h}).select();k!=null&&k[0]&&c.push({...k[0],isDuplicate:g})}else if(x.card_type==="stadium"){const{data:m,error:u}=await y.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(u){console.error("[Booster] stadium_definitions:",u.message);continue}if(!(m!=null&&m.length)){console.warn("[Booster] Aucun stade en DB");continue}const h=i?m:m.filter(j=>!s.has(j.id));if(!i&&!h.length)continue;const g=h[Math.floor(Math.random()*h.length)],{data:k,error:w}=await y.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:g.id}).select("id,card_type,stadium_id").single();if(w){console.error("[Booster] insert stadium card:",w.message);continue}k&&c.push({...k,rarity:"normal",_stadiumDef:g})}}}return c}async function lo(t,e,i){if(i>0){const{error:s}=await y.from("users").update({credits:t.credits-i}).eq("id",t.id);if(s)throw s;t.credits-=i,Jt(t.credits)}const{data:o}=await y.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const n=o.filter(s=>s.job==="GK"),r=o.filter(s=>s.job!=="GK"),a=!t.first_booster_opened&&n.length>0,d=[];for(let s=0;s<e;s++){const p=s===0&&a?n:s===0?r:o,c=Wn(),b=Jn(p,c);b&&d.push(b)}a&&await y.from("users").update({first_booster_opened:!0}).eq("id",t.id);const{data:l}=await y.from("cards").insert(d.map(s=>({owner_id:t.id,player_id:s.id,card_type:"player"}))).select();return(l||[]).forEach((s,p)=>{y.rpc("record_transfer",{p_card_id:s.id,p_player_id:d[p].id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((s,p)=>({...l[p],player:s}))}async function co(t,e,i){const{error:o}=await y.from("users").update({credits:t.credits-i}).eq("id",t.id);if(o)throw o;t.credits-=i,Jt(t.credits);const{data:n}=await y.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),r=n!=null&&n.length?n:Object.keys(Vi).map(c=>({name:c,gc_type:"game_changer"})),a=Array.from({length:e},()=>r[Math.floor(Math.random()*r.length)]),d=a.map(c=>({owner_id:t.id,card_type:"game_changer",gc_type:c.name,gc_definition_id:c.id||null})),{data:l,error:s}=await y.from("cards").insert(d).select();return s&&console.error("[Booster GC] Erreur insert:",s.message,s),(l||[]).map((c,b)=>({...c,_gcDef:a[b]||null}))}async function po(t,e){const{error:i}=await y.from("users").update({credits:t.credits-e}).eq("id",t.id);if(i)throw i;t.credits-=e,Jt(t.credits);const{data:o}=await y.from("cards").select("formation").eq("owner_id",t.id).eq("card_type","formation"),n=new Set((o||[]).map(p=>p.formation)),r=nn(),a=r[Math.floor(Math.random()*r.length)],d=n.has(a),{data:l,error:s}=await y.from("cards").insert({owner_id:t.id,card_type:"formation",formation:a}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),(l||[]).map(p=>({...p,isDuplicate:d}))}async function Xn(t,e){const{data:i}=await y.from("cards").select("stadium_id").eq("owner_id",t.id).eq("card_type","stadium"),o=new Set((i||[]).map(s=>s.stadium_id).filter(Boolean)),{data:n}=await y.from("stadium_definitions").select("*");if(!(n!=null&&n.length))throw new Error("Aucun stade configuré en base.");const r=n[Math.floor(Math.random()*n.length)],a=o.has(r.id),{data:d,error:l}=await y.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:r.id}).select();return l&&console.error("[Booster Stade] Erreur insert:",l.message,l),(d||[]).map(s=>({...s,isDuplicate:a,_stadiumDef:r}))}async function an(t,e,i){try{const o=(i||[]).map(n=>{var r,a,d,l,s;return{card_type:n.card_type,name:n.card_type==="player"?[(r=n.player)==null?void 0:r.firstname,(a=n.player)==null?void 0:a.surname_real].filter(Boolean).join(" "):((d=n._stadiumDef)==null?void 0:d.name)||((l=n._gcDef)==null?void 0:l.name)||n.formation||n.gc_type||null,rarity:((s=n.player)==null?void 0:s.rarity)||null,note:n.current_note??null,is_duplicate:!!n.isDuplicate}});await y.from("booster_openings").insert({user_id:t,booster_name:(e==null?void 0:e.name)||null,booster_type:(e==null?void 0:e.type)||null,cards:o,nb_cards:o.length})}catch(o){console.warn("[Booster] journalisation ignorée:",o==null?void 0:o.message)}}function uo(t,e,i,o=null,n=null){var v,D,X,F,ae,xe,C;if(!t||t.length===0){const E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",E.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(E),(v=E.querySelector("#anim-close-err"))==null||v.addEventListener("click",()=>E.remove());return}t=[...t].sort((E,Q)=>{const K=E.player?xt(E.player):-1;return(Q.player?xt(Q.player):-1)-K});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let a=!1;const d=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let s=!1;const p=E=>E.touches&&E.touches[0]?E.touches[0].clientX:E.clientX;function c(E){a||(s=!0,l.style.opacity="1",b(E))}function b(E){if(!s||a)return;const Q=d.getBoundingClientRect(),K=p(E)-Q.left,te=Math.max(0,Math.min(1,K/Q.width));l.style.width=te*Q.width+"px",te>=.82&&m()}function x(){a||(s=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{a||(l.style.transition="")},220))}function m(){var Q;if(a)return;a=!0,s=!1,l.style.width="100%",l.style.opacity="1",(Q=document.getElementById("cut-flash"))==null||Q.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const E=document.getElementById("cut-hint");E&&(E.style.opacity="0"),d.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",k(0)},620)}d.addEventListener("pointerdown",c),window.addEventListener("pointermove",b),window.addEventListener("pointerup",x),d.addEventListener("touchstart",c,{passive:!0}),window.addEventListener("touchmove",b,{passive:!0}),window.addEventListener("touchend",x);let u=0,h=!1;const g=new Set;function k(E){u=E,document.getElementById("reveal-phase").style.display="flex",w(),j(E,0),L()}function w(){const E=document.getElementById("card-dots");E&&(E.innerHTML=t.map((Q,K)=>`<div class="card-dot" data-i="${K}" style="width:8px;height:8px;border-radius:50%;background:${K===u?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),E.querySelectorAll(".card-dot").forEach(Q=>Q.addEventListener("click",()=>B(parseInt(Q.dataset.i)))))}function j(E,Q){var he,me;const K=t[E],te=document.getElementById("card-counter"),ue=document.getElementById("card-track");te&&(te.textContent=`Carte ${E+1} / ${t.length}`);const ve=document.getElementById("reveal-btns");ve&&(ve.style.display=E===t.length-1?"flex":"none");const be=K.card_type==="player"&&((he=K.player)==null?void 0:he.rarity)==="legende",je=!g.has(E);if(g.add(E),K.card_type==="player"&&K.player){const ke=K.player,P=ke.job||"ATT";(Number(P==="GK"?ke.note_g:P==="DEF"?ke.note_d:P==="MIL"?ke.note_m:ke.note_a)||0)+(K.evolution_bonus||0)}const Be=ke=>{ue.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${be?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Qn(K)}</div>
          ${K.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const P=document.getElementById("current-card-wrap");Q!==0?(P.style.transition="none",P.style.transform=`translateX(${Q>0?100:-100}%)`,requestAnimationFrame(()=>{P.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",P.style.transform="translateX(0)"})):P.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),ke||be?I():S(),w()};je&&((me=K.player)==null?void 0:me.rarity)==="legende"&&K.card_type==="player"&&K.player?f(K,()=>Be(!0)):Be(!1)}function f(E,Q){var fe;h=!0;const K=E.player,te=`https://flagsapi.com/${K.country_code}/flat/64.png`,ue=(fe=K.clubs)==null?void 0:fe.logo_url,ve=Ct(K),be=K.job||"ATT",je=Number(be==="GK"?K.note_g:be==="DEF"?K.note_d:be==="MIL"?K.note_m:K.note_a)||0,Be=E.evolution_bonus||0,he=je+Be,me=K.rarity==="legende",ke=he>=18,P=document.getElementById("walkout-overlay"),A=document.getElementById("walkout-stage");if(!P||!A){h=!1,Q();return}let H=null;me&&(H=ao("/sounds/Legendary.mp3",.8)),P.style.display="flex";const V=()=>{const de=A.firstElementChild;de&&(de.classList.remove("wo-in"),de.classList.add("wo-out"))},Y=1800,R=400;A.innerHTML=`<img class="wo-in" src="${te}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(V,Y),setTimeout(()=>{var de;A.innerHTML=ue?`<img class="wo-in" src="${ue}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((de=K.clubs)==null?void 0:de.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},Y+R),setTimeout(V,Y*2+R),setTimeout(()=>{A.innerHTML=ve?`<img class="wo-in" src="${ve}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(Y+R)*2),setTimeout(V,(Y+R)*2+Y);const ce=ke?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[be]||"#fff";setTimeout(()=>{A.innerHTML=`<div class="wo-in" style="
        font-size:${ke?"120px":"90px"};font-weight:900;color:${ce};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${ce}, 0 0 60px ${ce};
        ${ke?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${he}
      </div>`,ke&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(Y+R)*3),setTimeout(V,(Y+R)*3+Y),setTimeout(()=>{P.style.display="none",A.innerHTML="",h=!1,H&&!me&&H.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),Q()},(Y+R)*4)}function B(E){if(h||E<0||E>=t.length||E===u)return;const Q=E>u?1:-1;u=E,j(E,Q)}function T(){B(u+1)}function $(){B(u-1)}function L(){const E=document.getElementById("card-viewport");if(!E||E._swipeBound)return;E._swipeBound=!0;let Q=0,K=0,te=0,ue=!1;const ve=me=>me.touches?me.touches[0].clientX:me.clientX,be=me=>me.touches?me.touches[0].clientY:me.clientY,je=me=>{ue=!0,Q=ve(me),K=be(me),te=0},Be=me=>{if(!ue)return;te=ve(me)-Q;const ke=be(me)-K;if(Math.abs(te)<Math.abs(ke))return;const P=document.getElementById("current-card-wrap");P&&(P.style.transition="none",P.style.transform=`translateX(${te*.6}px) rotate(${te*.02}deg)`)},he=()=>{if(!ue)return;ue=!1;const me=document.getElementById("current-card-wrap"),ke=55;te<=-ke&&u<t.length-1?T():te>=ke&&u>0?$():me&&(me.style.transition="transform .2s ease",me.style.transform="translateX(0)")};E.addEventListener("pointerdown",je),E.addEventListener("pointermove",Be),E.addEventListener("pointerup",he),E.addEventListener("pointercancel",he),E.addEventListener("touchstart",je,{passive:!0}),E.addEventListener("touchmove",Be,{passive:!0}),E.addEventListener("touchend",he),E.addEventListener("click",me=>{if(Math.abs(te)>8)return;const ke=E.getBoundingClientRect();me.clientX-ke.left>ke.width/2?T():$()})}let W=null;function I(){const E=document.getElementById("fireworks-canvas");if(!E)return;E.width=window.innerWidth,E.height=window.innerHeight;const Q=E.getContext("2d"),K=[];function te(){const ve=Math.random()*E.width,be=Math.random()*E.height*.6,je=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Be=je[Math.floor(Math.random()*je.length)];for(let he=0;he<60;he++){const me=Math.PI*2/60*he,ke=2+Math.random()*5;K.push({x:ve,y:be,vx:Math.cos(me)*ke,vy:Math.sin(me)*ke,alpha:1,color:Be,size:2+Math.random()*3})}}te(),W=setInterval(te,600);function ue(){if(document.getElementById("fireworks-canvas")){Q.clearRect(0,0,E.width,E.height);for(let ve=K.length-1;ve>=0;ve--){const be=K[ve];if(be.x+=be.vx,be.y+=be.vy+.08,be.vy*=.98,be.alpha-=.018,be.alpha<=0){K.splice(ve,1);continue}Q.globalAlpha=be.alpha,Q.fillStyle=be.color,Q.beginPath(),Q.arc(be.x,be.y,be.size,0,Math.PI*2),Q.fill()}Q.globalAlpha=1,(W!==null||K.length>0)&&requestAnimationFrame(ue)}}ue()}function S(){W!==null&&(clearInterval(W),W=null);const E=document.getElementById("fireworks-canvas");E&&E.getContext("2d").clearRect(0,0,E.width,E.height)}if(o){const E=document.getElementById("reveal-btns");E&&(E.style.flexDirection="row",E.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(D=document.getElementById("reveal-next"))==null||D.addEventListener("click",()=>{S(),r.remove(),o()})}else{const E=document.getElementById("reveal-reopen"),Q=e.cost||0,K=Number((F=(X=n==null?void 0:n.state)==null?void 0:X.profile)==null?void 0:F.credits)||0,te=!Q||K>=Q;if(E)if(n){E.textContent=`🎁 Ouvrir un autre booster${Q?` (${Q.toLocaleString("fr")} cr.)`:""}`;const ue=be=>{E.disabled=!0,E.style.opacity="0.45",E.style.cursor="not-allowed",be&&(E.title=be)};te||ue("Crédits insuffisants");const ve=((ae=e._raw)==null?void 0:ae.max_per_user)??null;te&&ve!=null&&((C=(xe=n==null?void 0:n.state)==null?void 0:xe.user)!=null&&C.id)&&y.from("booster_claims").select("id",{count:"exact",head:!0}).eq("user_id",n.state.user.id).eq("booster_id",e._boosterId).then(({count:be})=>{(be||0)>=ve&&ue(`Quota atteint (${ve} max.)`)}),E.addEventListener("click",()=>{E.disabled||(S(),r.remove(),rn(e,{state:n.state,toast:n.toast,navigate:i,container:n.container}))})}else E.textContent="🎁 Ouvrir un autre booster",E.addEventListener("click",()=>{S(),r.remove(),i("boosters")});document.getElementById("reveal-collection").addEventListener("click",()=>{S(),r.remove(),i("collection")}),document.getElementById("reveal-shop").addEventListener("click",()=>{S(),r.remove(),i("boosters")})}}function Qn(t){var e,i,o,n;if(t.card_type==="player"&&t.player)return Kn(t);if(t.card_type==="game_changer"){const r=t._gcDef,a=(r==null?void 0:r.name)||t.gc_type||"Game Changer",d=(r==null?void 0:r.effect)||((e=Vi[t.gc_type])==null?void 0:e.desc)||"",l=r!=null&&r.image_url?`/icons/${r.image_url}`:null,s=((i=Vi[t.gc_type])==null?void 0:i.icon)||"⚡";return it(a,l,s,d,{width:170})}if(t.card_type==="formation")return di(t.formation,ct[t.formation],{width:160});if(t.card_type==="stadium"){const r=t._stadiumDef,a=(r==null?void 0:r.name)||"Stade",d=((o=r==null?void 0:r.club)==null?void 0:o.encoded_name)||(r==null?void 0:r.country_code)||"—",l=r!=null&&r.image_url?`/icons/${r.image_url}`:((n=r==null?void 0:r.club)==null?void 0:n.logo_url)||(r!=null&&r.country_code?`https://flagsapi.com/${r.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),s=`${d}<br>+10 ⭐ joueurs alliés`;return Kt(a,l,s,{width:170})}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Zn(t){var e,i;if((e=t==null?void 0:t.rates)!=null&&e.length){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const n={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},r={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};o.innerHTML=`
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
      </div>`,document.body.appendChild(o),o.addEventListener("click",a=>{a.target===o&&o.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>o.remove());return}er()}function er(){const t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(t),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.getElementById("odds-close").addEventListener("click",()=>t.remove())}function tr(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText=`
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
    `,document.body.appendChild(e);try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(n){console.warn("[AdSense]",n)}let i=5;const o=setInterval(()=>{i--;const n=document.getElementById("mw-ad-cd");n&&(n.textContent=i),i<=0&&(clearInterval(o),e.remove(),t(!0))},1e3)})}async function ir(t,{state:e,navigate:i,toast:o,refreshProfile:n}){var b,x;const{data:r}=await y.from("users").select("*").eq("id",e.user.id).single();r&&(e.profile=r);let a=Array.isArray((b=e.profile)==null?void 0:b.pending_boosters)?[...e.profile.pending_boosters]:[];if(!a.length){await y.from("users").update({onboarding_done:!0}).eq("id",e.user.id),i("home");return}let d=null;try{const u=(await on()).find(h=>(h.name||"").toLowerCase().includes("new player"));u&&(d=so(u))}catch(m){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',m)}const l=a.length;let s=0;t.innerHTML=`
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
  </div>`;const p=async()=>{await y.from("users").update({pending_boosters:a}).eq("id",e.user.id)};async function c(){var k;if(s>=l||!a.length){await y.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",e.user.id),n&&await n(),o("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const m=a[0],{data:u}=await y.from("users").select("*").eq("id",e.user.id).single();u&&(e.profile=u);let h=[];try{if(m.type==="formation")h=await po(e.profile,0);else if(m.type==="game_changer")h=await co(e.profile,m.count||3,0);else if(m.type==="stadium")h=await Xn(e.profile,0);else if(d&&((k=d.rates)!=null&&k.length)){const w={...d,cost:0,cardCount:m.count||d.cardCount||5};h=await zi(e.profile,w),m.guaranteeGK&&!e.profile.first_booster_opened&&(h.some(f=>f.player&&f.player.job==="GK")||await or(e.profile,h),await y.from("users").update({first_booster_opened:!0}).eq("id",e.profile.id))}else h=await lo(e.profile,m.count||5,0)}catch(w){o(w.message||"Erreur ouverture booster","error");return}a.shift(),s++,await p();const g=m.type==="formation"?{name:"Booster Formation",type:"formation",img:"/icons/booster-formation.png"}:m.type==="game_changer"?{name:"Booster Game Changer",type:"game_changer",img:"/icons/booster-gamechanger.png"}:m.type==="stadium"?{name:"Booster Stade",type:"stadium",img:"/icons/booster-stade.png"}:{name:`Booster Joueurs (${s}/${l})`,type:"player",img:(d==null?void 0:d.img)||"/icons/booster-players.png"};an(e.profile.id,g,h),uo(h,g,i,()=>{c()})}(x=document.getElementById("onboard-start"))==null||x.addEventListener("click",()=>c())}async function or(t,e){try{const{data:i}=await y.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const o=i[Math.floor(Math.random()*i.length)],n=e.findIndex(a=>a.player);if(n===-1)return;const r=e[n];await y.from("cards").update({player_id:o.id}).eq("id",r.id),e[n]={...r,player_id:o.id,player:o}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const nr=[{key:"home2",route:"home2",label:"ACCUEIL",icon:"nav-home.png"},{key:"cards",route:"collection",label:"CARTES",icon:"nav-collection.png"},{key:"decks",route:"decks",label:"EQUIPES",icon:"nav-decks.png"},{key:"boosters",route:"boosters",label:"BOUTIQUE",icon:"nav-boosters.png"},{key:"market",route:"market",label:"MERCATO",icon:"nav-market.png"}];function Wt(t,e,i,o,n){if(!document.getElementById("home2-chrome-style")){const c=document.createElement("style");c.id="home2-chrome-style",c.textContent=`
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
    `,document.head.appendChild(c)}const r=nr.map(c=>`
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
    `,document.body.appendChild(a),a.querySelector("#home2-chrome-settings-btn").addEventListener("click",()=>t("settings")),a.querySelector("#home2-chrome-credits").addEventListener("click",()=>Io(e,n)));let d=document.getElementById("home2-mobile-top");d||(d=document.createElement("div"),d.id="home2-mobile-top",d.className="home2-mobile-top",d.innerHTML=`
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-mobtop-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-mobtop-settings-btn"><span>⚙️</span><span class="pill-label">Paramètres</span></button>
      </div>
    `,document.body.appendChild(d),d.querySelector("#home2-mobtop-settings-btn").addEventListener("click",()=>t("settings")),d.querySelector("#home2-mobtop-credits").addEventListener("click",()=>Io(e,n)));let l=document.getElementById("home2-mobile-bottom");l||(l=document.createElement("div"),l.id="home2-mobile-bottom",l.className="home2-mobile-bottom",l.innerHTML=r,document.body.appendChild(l)),document.querySelectorAll(".home2-chrome-tab").forEach(c=>{c._v2Bound||(c._v2Bound=!0,c.addEventListener("click",()=>{document.querySelectorAll(".home2-chrome-tab").forEach(b=>b.classList.remove("active")),document.querySelectorAll(`.home2-chrome-tab[data-key="${c.dataset.key}"]`).forEach(b=>b.classList.add("active")),t(c.dataset.route)}))}),document.querySelectorAll(".home2-chrome-tab").forEach(c=>c.classList.toggle("active",c.dataset.key===i));const s=`💰 ${(e.credits||0).toLocaleString("fr")}`;document.getElementById("home2-chrome-credits")&&(document.getElementById("home2-chrome-credits").textContent=s),document.getElementById("home2-mobtop-credits")&&(document.getElementById("home2-mobtop-credits").textContent=s),document.body.classList.remove("v2-match-flow"),a.style.display="",d.style.display="",l.style.display="";const p=document.getElementById("page-content");p&&(p.style.removeProperty("padding-top"),p.style.removeProperty("padding-bottom")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const c=window.innerWidth<1024;document.documentElement.style.setProperty("--v2-top-height",(c?d.offsetHeight:a.offsetHeight)+"px"),document.documentElement.style.setProperty("--v2-bottom-height",l.offsetHeight+"px")})})}const rr=[{ads:1,seconds:5,credits:4500},{ads:2,seconds:10,credits:9500},{ads:3,seconds:15,credits:15e3}];async function Io(t,e){if(!await to("pub_mode")){Wo();return}const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",i.innerHTML=`
    <div style="background:#111a12;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:400px;width:100%;color:#fff">
      <div style="font-size:18px;font-weight:900;margin-bottom:4px">💰 Gagner des crédits</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:18px">Regarde une ou plusieurs publicités pour recevoir des crédits gratuits.</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${rr.map(o=>`
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
    </div>`,document.body.appendChild(i),i.querySelector("#credits-ad-cancel").addEventListener("click",()=>i.remove()),i.querySelectorAll(".credits-ad-offer-btn").forEach(o=>{o.addEventListener("click",()=>{i.remove(),ar(parseInt(o.dataset.ads),5,parseInt(o.dataset.credits),t,e)})})}function ar(t,e,i,o,n){let r=1;const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.94);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;gap:14px;color:#fff;padding:16px",document.body.appendChild(a);function d(){a.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité ${r}/${t}</div>
      <div style="width:400px;max-width:100%;height:400px;max-height:55vh;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center">
        <ins class="adsbygoogle"
          style="display:inline-block;width:400px;height:400px"
          data-ad-client="ca-pub-5827602487507112"
          data-ad-slot="6638827438"></ins>
      </div>
      <div id="credits-ad-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Chargement… <span id="credits-ad-cd">${e}</span>s</div>
      <div id="credits-ad-next-zone" style="width:280px;max-width:100%"></div>
    `;try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(c){console.warn("[AdSense]",c)}let s=e;const p=setInterval(()=>{s--;const c=a.querySelector("#credits-ad-cd");c&&(c.textContent=s),s<=0&&(clearInterval(p),l())},1e3)}function l(){var c,b;const s=a.querySelector("#credits-ad-status"),p=a.querySelector("#credits-ad-next-zone");r<t?(s&&(s.textContent="Publicité terminée ✅"),p&&(p.innerHTML=`
        <button id="credits-ad-next-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px">
          Suivant (${r}/${t}) →
        </button>`),(c=a.querySelector("#credits-ad-next-btn"))==null||c.addEventListener("click",()=>{r++,d()})):(s&&(s.textContent="Toutes les publicités ont été vues ✅"),p&&(p.innerHTML=`
        <button id="credits-ad-claim-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px;background:#D4A017;border-color:#D4A017">
          🎁 Récupérer ${i.toLocaleString("fr")} crédits
        </button>`),(b=a.querySelector("#credits-ad-claim-btn"))==null||b.addEventListener("click",async()=>{const x=a.querySelector("#credits-ad-claim-btn");x.disabled=!0,x.textContent="⏳...";const m=(o.credits||0)+i,{error:u}=await y.from("users").update({credits:m}).eq("id",o.id);if(u){n(u.message,"error"),x.disabled=!1;return}o.credits=m,Jt(m),n(`+${i.toLocaleString("fr")} crédits ✅`,"success"),a.remove()}))}d()}async function sn(t,e,i){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",document.body.appendChild(o);async function n(){var l;const{data:r}=await y.from("pending_rewards").select(`*,
        player:players(id, firstname, surname_real, country_code, club_id, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
          clubs(encoded_name, logo_url)),
        booster:booster_configs(name, image_url)`).eq("user_id",t.profile.id).eq("claimed",!1).order("created_at",{ascending:!0});if(!(r!=null&&r.length)){o.remove();const s=document.getElementById("pending-rewards-banner");s&&s.remove();return}const a=s=>{var p;return s.reward_type==="credits"?'<div style="width:56px;height:56px;border-radius:12px;background:rgba(212,160,23,0.15);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">💰</div>':s.reward_type==="card"&&s.player?`<div style="flex-shrink:0">${qe(s.player,{width:56})}</div>`:s.reward_type==="booster"?`<img src="/icons/${((p=s.booster)==null?void 0:p.image_url)||"booster-players.png"}" style="width:56px;height:56px;object-fit:contain;border-radius:12px;background:rgba(255,255,255,0.05);flex-shrink:0">`:'<div style="width:56px;height:56px;border-radius:12px;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">❓</div>'},d=s=>{var p,c,b;return s.reward_type==="credits"?`${(s.credits_amount||0).toLocaleString("fr")} crédits`:s.reward_type==="card"?`${((p=s.player)==null?void 0:p.firstname)||""} ${((c=s.player)==null?void 0:c.surname_real)||""}`.trim()||"Carte joueur":s.reward_type==="booster"?((b=s.booster)==null?void 0:b.name)||"Booster":"Récompense"};o.innerHTML=`
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
      </div>`,(l=o.querySelector("#pending-rewards-close"))==null||l.addEventListener("click",()=>o.remove()),o.querySelectorAll(".claim-reward-btn").forEach(s=>{s.addEventListener("click",async()=>{var c,b;const p=r.find(x=>x.id===s.dataset.id);s.disabled=!0,s.textContent="⏳...";try{const x=await Vn(p,t.profile,e,null);if(await y.from("pending_rewards").update({claimed:!0,claimed_at:new Date().toISOString()}).eq("id",p.id),x.type==="credits")Jt(t.profile.credits),e(`+${x.amount.toLocaleString("fr")} crédits ✅`,"success");else if(x.type==="card")e(`Carte reçue : ${((c=x.player)==null?void 0:c.firstname)||""} ${((b=x.player)==null?void 0:b.surname_real)||""} ✅`,"success");else if(x.type==="booster"){o.remove(),uo(x.cards,x.boosterUI,i,()=>{sn(t,e,i)});return}}catch(x){e(x.message||"Erreur lors de la réclamation","error"),s.disabled=!1,s.textContent="Récupérer";return}n()})})}n(),o.addEventListener("click",r=>{r.target===o&&o.remove()})}function Jt(t){const e=`💰 ${(t||0).toLocaleString("fr")}`,i=document.getElementById("home2-chrome-credits"),o=document.getElementById("home2-mobtop-credits");i&&(i.textContent=e),o&&(o.textContent=e)}function ut(){document.body.classList.add("v2-match-flow");const t=document.getElementById("home2-chrome-header");t&&(t.style.display="none");const e=document.getElementById("home2-mobile-top");e&&(e.style.display="none");const i=document.getElementById("home2-mobile-bottom");i&&(i.style.display="none");const o=document.getElementById("page-content");o&&(o.style.setProperty("padding-top","0","important"),o.style.setProperty("padding-bottom","0","important"))}function sr(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return"à l'instant";if(i<60)return`il y a ${i}min`;const o=Math.floor(i/60);if(o<24)return`il y a ${o}h`;const n=Math.floor(o/24);return n<7?`il y a ${n}j`:new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"short"})}async function lr(t){const{data:e}=await y.from("users").select("id,pseudo,club_name,mmr").order("mmr",{ascending:!1}).limit(5),i=e||[],o=i.some(r=>r.id===t);let n=null;if(!o){const{data:r}=await y.from("users").select("mmr").eq("id",t).single();if(r){const{count:a}=await y.from("users").select("id",{count:"exact",head:!0}).gt("mmr",r.mmr||0);n=(a||0)+1}}return{list:i,iAmInTop:o,myPosition:n}}async function dr(t=4){const{data:e}=await y.from("patch_notes").select("id,title,description,image_url,published_at").eq("is_published",!0).order("published_at",{ascending:!1}).limit(t);return e||[]}async function cr(){const{data:t}=await y.from("booster_configs").select("id,name,icon,price_type,price_credits,card_count").eq("is_active",!0).order("sort_order",{ascending:!0}).limit(5);return t||[]}async function pr(){const{data:t}=await y.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const n=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close-v2").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}async function Pi(t,{state:e,navigate:i,toast:o,openModal:n,closeModal:r}){var T,$,L,W,I,S;const a=e.profile;if(!a)return;const d="/icons/";Wt(i,a,"home2",d,o);const l=a.mmr??450,s=yt(l),p=ki(l,s),c=Hi(l),b=isFinite(s.max)?s.max+1:null,[{list:x,iAmInTop:m,myPosition:u},h,g,{count:k}]=await Promise.all([lr(a.id),dr(5),cr(),y.from("pending_rewards").select("*",{count:"exact",head:!0}).eq("user_id",a.id).eq("claimed",!1)]),w=(v,D)=>{const X=yt(v.mmr??0),F=ki(v.mmr??0,X);return`
    <div class="rk-row ${v.id===a.id?"rk-row-me":""}">
      <div class="rk-pos ${D<3?"rk-pos-top"+(D+1):""}">${D<3?["🥇","🥈","🥉"][D]:D+1}</div>
      <div class="rk-name ${v.id===a.id?"rk-name-me":""}">${v.pseudo}</div>
      <div class="rk-rp-block">
        <div class="rk-rp-tier" style="color:${X.color}">${X.emoji} ${X.label.toUpperCase()}${F?" "+F:""}</div>
        <div class="rk-rp">${(v.mmr??0).toLocaleString("fr")} MMR</div>
      </div>
    </div>`},j=v=>`
    <div class="news-item">
      ${v.image_url?`<img src="${v.image_url}" class="news-thumb" onerror="this.style.display='none'">`:'<div class="news-thumb news-thumb-fallback">📰</div>'}
      <div class="news-body">
        <div class="news-title">${v.title}</div>
        <div class="news-desc">${v.description||""}</div>
        <div class="news-time">${sr(v.published_at)}</div>
      </div>
    </div>`;let f=0;const B=v=>`
    <div class="promo-icon-wrap">
      <img src="${d}${v.icon||"nav-boosters.png"}" class="promo-icon" onerror="this.style.display='none'">
    </div>
    <div class="promo-info">
      <div class="promo-kicker">NOUVEAU BOOSTER</div>
      <div class="promo-title">${v.name}</div>
      <div class="promo-desc">${v.card_count||5} cartes · ${v.price_type==="pub"?"Pub gratuite":(v.price_credits||0).toLocaleString("fr")+" cr."}</div>
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
                <div class="rank-rp-label">${l.toLocaleString("fr")}${b?" / "+b.toLocaleString("fr"):""} RP</div>
                <button class="rank-inline-link" id="rank-inline-link-btn">📊 Classement</button>
              </div>
            </div>
            <div class="rank-progress-track"><div class="rank-progress-fill" style="width:${c}%"></div></div>
          </div>

          <div class="ranking-widget">
            <div class="ranking-widget-header"><h4>CLASSEMENT</h4><a id="nav-rankings-link">Voir plus</a></div>
            ${x.map((v,D)=>w(v,D)).join("")}
            ${!m&&u?`
              <div style="border-top:1px solid var(--tile-border);margin-top:2px;padding-top:8px">
                ${w({id:a.id,pseudo:a.pseudo,mmr:l},u-1)}
              </div>`:""}
            <button class="ranking-widget-cta" id="nav-rankings-cta">📊 Voir le classement</button>
          </div>
        </div>

        <!-- Colonne centrale : Jouer + promo -->
        <div class="home2-col-center">
          ${k>0?`
          <div id="pending-rewards-banner" style="cursor:pointer;display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:14px;
            background:linear-gradient(135deg,rgba(212,160,23,0.25),rgba(212,160,23,0.1));border:1.5px solid #D4A017;margin-bottom:14px">
            <div style="font-size:28px">🎁</div>
            <div style="flex:1">
              <div style="font-weight:900;font-size:14px;color:#fff">Tu as des récompenses à récupérer !</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.6)">${k} récompense${k>1?"s":""} en attente</div>
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
              ${B(g[0])}
            </div>
            <button class="promo-cta" id="promo-cta-btn">✅ Ouvrir des boosters</button>
            ${g.length>1?`<div class="promo-dots">${g.map((v,D)=>`<div class="promo-dot ${D===0?"active":""}" data-dot="${D}"></div>`).join("")}</div>`:""}
          </div>`:""}
        </div>

        <!-- Colonne droite : Actualités -->
        <div class="home2-col-right">
          <div class="news-widget">
            <div class="news-widget-header"><h4>ACTUALITÉS</h4><a id="nav-journal-link">Voir tout</a></div>
            ${h.length?h.map(j).join(""):'<div style="font-size:11px;color:var(--tile-fg-dim);padding:8px 0">Aucune actualité pour le moment.</div>'}
          </div>
        </div>

      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var xe,C;const v=((xe=window.visualViewport)==null?void 0:xe.height)||window.innerHeight,D=window.innerWidth<1024;let X=0;if(D){const E=document.getElementById("home2-mobile-top"),Q=document.getElementById("home2-mobile-bottom");X=((E==null?void 0:E.offsetHeight)||0)+((Q==null?void 0:Q.offsetHeight)||0)}else X=((C=document.getElementById("home2-chrome-header"))==null?void 0:C.offsetHeight)||0;const F=v-X,ae=t.querySelector(".home-dark");ae&&(ae.style.minHeight=F+"px")}),(T=document.getElementById("nav-rankings-link"))==null||T.addEventListener("click",()=>i("rankings")),($=document.getElementById("nav-rankings-cta"))==null||$.addEventListener("click",()=>i("rankings")),(L=document.getElementById("rank-inline-link-btn"))==null||L.addEventListener("click",()=>i("rankings")),(W=document.getElementById("nav-journal-link"))==null||W.addEventListener("click",()=>pr()),t.querySelectorAll("[data-action]").forEach(v=>{v.addEventListener("click",()=>{v.style.transform="scale(.96)",setTimeout(()=>v.style.transform="",180);const D=v.dataset.action;if(D==="match-ai"){cn(i,e);return}if(D==="match-random"){ut(),i("match",{matchMode:"random"});return}if(D==="match-friend"){i("friends");return}if(D==="mini-league"){i("mini-league");return}if(D==="ranked"){i("ranked");return}o("Bientôt disponible","info")})}),g.length>1){const v=document.getElementById("promo-slide-content"),D=()=>Array.from(document.querySelectorAll(".promo-dot")),X=F=>{f=F,v&&(v.innerHTML=B(g[f])),D().forEach((ae,xe)=>ae.classList.toggle("active",xe===f))};setInterval(()=>X((f+1)%g.length),5e3),document.querySelectorAll(".promo-dot").forEach(F=>{F.addEventListener("click",()=>X(Number(F.dataset.dot)))})}(I=document.getElementById("promo-cta-btn"))==null||I.addEventListener("click",()=>i("boosters")),dn(e,o),(S=document.getElementById("pending-rewards-banner"))==null||S.addEventListener("click",()=>{sn(e,o,i)}),gr(e,o,i),ln(e,o,i),ur(e,o)}async function ur(t,e){const i=t.profile.id,{data:o}=await y.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(o!=null&&o.length))return;const n=o.reduce((a,d)=>a+(d.prize_amount||0),0),r=document.createElement("div");r.className="modal-overlay",r.style.zIndex="2200",r.innerHTML=`<div class="modal" style="max-width:400px">
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
  </div>`,document.body.appendChild(r),r.querySelector("#claim-later-btn").addEventListener("click",()=>r.remove()),r.querySelector("#claim-all-btn").addEventListener("click",async a=>{const d=a.currentTarget;d.disabled=!0,d.textContent="...";let l=0;for(const s of o){const{data:p}=await y.rpc("claim_mini_league_prize",{p_league_id:s.league_id,p_user_id:i});p!=null&&p.success&&!p.already_claimed&&(l+=p.prize||0)}if(l>0){t.profile.credits=(t.profile.credits||0)+l;const s=document.getElementById("nav-credits");s&&(s.textContent=`💰 ${t.profile.credits.toLocaleString("fr")}`),e(`💰 +${l.toLocaleString("fr")} cr. récupérés !`,"success")}r.remove()})}async function ln(t,e,i){const o=document.getElementById("ongoing-match-banner");if(!o)return;const n=t.profile.id,{data:r}=await y.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${n},away_id.eq.${n}`).order("created_at",{ascending:!1});if(!(r!=null&&r.length)){o.innerHTML="";return}const a=r.map(l=>l.home_id===n?l.away_id:l.home_id).filter(Boolean);let d={};if(a.length){const{data:l}=await y.from("users").select("id, pseudo, club_name").in("id",a);(l||[]).forEach(s=>{d[s.id]=s.club_name||s.pseudo})}o.innerHTML=r.map(l=>{const s=l.home_id===n?l.away_id:l.home_id,p=d[s]||"Adversaire",c=l.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${c?"🏆 Mini League":l.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${p}</div>
      </div>
      <button data-resume="${l.id}" data-mini="${c?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${l.id}" data-opp="${s}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),o.querySelectorAll("[data-resume]").forEach(l=>{l.addEventListener("click",async()=>{ut();const s=document.getElementById("page-content")||document.getElementById("app");if(l.dataset.mini==="1"){const{data:p}=await y.from("mini_league_matches").select("id, league_id").eq("match_id",l.dataset.resume).single();p?i("match-mini-league",{mlMatchId:p.id,leagueId:p.league_id}):i("mini-league")}else{const{resumePvpMatch:p}=await Yo(async()=>{const{resumePvpMatch:c}=await Promise.resolve().then(()=>ya);return{resumePvpMatch:c}},void 0);p(s,{state:t,navigate:i,toast:e,openModal:null,closeModal:null,refreshProfile:null},l.dataset.resume)}})}),o.querySelectorAll("[data-abandon]").forEach(l=>{l.addEventListener("click",()=>{mr(async()=>{await fr(l.dataset.abandon,l.dataset.opp,n),e("Match abandonné (défaite 3-0)","info"),ln(t,e,i)})})})}async function fr(t,e,i){Ht();const{data:o}=await y.from("matches").select("home_id, away_id, game_state, mode").eq("id",t).single();if(!o)return;const n=o.home_id===i,r=n?0:3,a=n?3:0,d=o.game_state||{};d.p1Score=r,d.p2Score=a,d.phase="finished",d.forfeit=!0,await y.from("matches").update({status:"finished",forfeit:!0,winner_id:e,home_score:r,away_score:a,game_state:d}).eq("id",t),o.mode==="mini_league"&&await y.from("mini_league_matches").update({status:"finished",home_score:r,away_score:a}).eq("match_id",t)}function mr(t){const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(e),e.querySelector("#ab-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#ab-ok").addEventListener("click",()=>{e.remove(),t()}),e.addEventListener("click",i=>{i.target===e&&e.remove()})}let xi=null,Rt=null;function gr(t,e,i){var r;const o=(r=t==null?void 0:t.user)==null?void 0:r.id;if(!o)return;const n=()=>br(t,e,i);if(n(),clearInterval(xi),xi=setInterval(()=>{if(!document.getElementById("match-invite-banner")){if(clearInterval(xi),xi=null,Rt){try{y.removeChannel(Rt)}catch{}Rt=null}return}n()},5e3),Rt)try{y.removeChannel(Rt)}catch{}Rt=y.channel("home-match-invites-"+o).on("postgres_changes",{event:"INSERT",schema:"public",table:"friend_match_invites",filter:`invitee_id=eq.${o}`},n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`invitee_id=eq.${o}`},n).subscribe()}async function br(t,e,i){var d,l,s,p;const o=document.getElementById("match-invite-banner");if(!o)return;const{data:n}=await y.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",t.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!n){o.innerHTML="";return}const r=((d=n.inviter)==null?void 0:d.club_name)||((l=n.inviter)==null?void 0:l.pseudo)||"?",a=n.inviter_id;o.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${r} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(s=document.getElementById("match-inv-accept"))==null||s.addEventListener("click",()=>{o.innerHTML="",ut(),i("match",{matchMode:"friend",friendId:a,friendName:r,isAccepting:!0})}),(p=document.getElementById("match-inv-decline"))==null||p.addEventListener("click",async()=>{await y.from("friend_match_invites").update({status:"declined"}).eq("id",n.id),o.innerHTML="",e("Invitation refusée","info")})}async function dn(t,e){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:o,error:n}=await y.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",t.user.id).eq("status","pending");if(n||!(o!=null&&o.length)){i.innerHTML="";return}const r=o.length,a=o.slice(0,2).map(l=>{var s;return((s=l.requester)==null?void 0:s.pseudo)||"?"}).join(", "),d=r>2?` +${r-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${r} demande${r>1?"s":""} d'ami${r>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${d}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>un(t,e,()=>dn(t,e)))}async function cn(t,e){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:420px;border-radius:18px">
    <div class="modal-header"><h2>Solo — Choisir un niveau</h2><button class="btn-icon" id="solo-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div id="solo-levels-list" style="display:flex;flex-direction:column;gap:10px">
        <div style="text-align:center;color:#999;padding:20px">⏳ Chargement…</div>
      </div>
    </div>
  </div>`,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("solo-cancel").addEventListener("click",o),i.addEventListener("click",s=>{s.target===i&&o()});const[{data:n},{data:r}]=await Promise.all([y.from("solo_levels").select("*").eq("is_active",!0).order("level_number"),y.from("user_solo_progress").select("unlocked_level").eq("user_id",e.profile.id).maybeSingle()]),a=(r==null?void 0:r.unlocked_level)||1,d=n||[],l=document.getElementById("solo-levels-list");if(l){if(!d.length){l.innerHTML='<div style="text-align:center;color:#999;padding:20px">Aucun niveau configuré.</div>';return}l.innerHTML=d.map(s=>{const p=s.level_number>a,c=s.level_number===a,b=p?"#f0f0f0":c?"#eefaf2":"#f7f7f7",x=p?"#ddd":c?"#bfe8cf":"#e0e0e0",m=p?"#999":"#12401f";return`
      <div class="solo-level-card" data-level="${s.level_number}" data-locked="${p}"
        style="cursor:${p?"not-allowed":"pointer"};display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${b};border:1px solid ${x};opacity:${p?.6:1};transition:transform .12s ease">
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
      </div>`}).join(""),l.querySelectorAll(".solo-level-card").forEach(s=>{s.dataset.locked!=="true"&&(s.addEventListener("mouseenter",()=>{s.style.transform="translateY(-1px)"}),s.addEventListener("mouseleave",()=>{s.style.transform=""}),s.addEventListener("click",()=>{o(),ut(),t("match",{matchMode:"solo",soloLevel:Number(s.dataset.level)})}))})}}const fi="#1A6B3C",mi="#cc2222",xr="#D4A017",Ao="#888";async function yr(t,e){const{state:i,toast:o}=e;t.innerHTML=`
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
    </div>`,await pn(i,o,e),document.getElementById("btn-add-friend").addEventListener("click",()=>vr(i,o)),document.getElementById("btn-accept-friend").addEventListener("click",()=>un(i,o,null,e))}async function pn(t,e,i={}){const{navigate:o}=i,n=t.user.id,{data:r,error:a}=await y.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${n},addressee_id.eq.${n}`),{count:d}=await y.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",n).eq("status","pending"),l=document.getElementById("pending-badge");l&&(d>0?(l.style.display="flex",l.textContent=d):l.style.display="none");const s=document.getElementById("friends-list");if(!s)return;if(a){console.error("[Friends] Erreur:",a),s.innerHTML=`<div style="color:${mi};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const p=(r||[]).map(x=>x.requester_id===n?x.addressee_id:x.requester_id);let c={};if(p.length){const{data:x}=await y.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",p);(x||[]).forEach(m=>{c[m.id]=m})}const b=(r||[]).map(x=>({friendshipId:x.id,friend:c[x.requester_id===n?x.addressee_id:x.requester_id]||{pseudo:"?"}}));if(!b.length){s.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}s.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${b.length} ami${b.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${b.map(({friendshipId:x,friend:m})=>hr(m,x)).join("")}
    </div>`,s.querySelectorAll("[data-stats]").forEach(x=>{x.addEventListener("click",()=>wr(t,x.dataset.stats,x.dataset.friendName))}),s.querySelectorAll("[data-match]").forEach(x=>{x.addEventListener("click",async()=>{const m=x.dataset.friendId,u=x.dataset.friendName;if(typeof o!="function"){e("Erreur navigation","error");return}const h=t.user.id,{data:g}=await y.from("friend_match_invites").select("id").eq("inviter_id",m).eq("invitee_id",h).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),k=!!g;console.log("[Friends] clic match",{fid:m,fname:u,isAccepting:k}),ut(),o("match",{matchMode:"friend",friendId:m,friendName:u,isAccepting:k})})})}function hr(t,e){const i=t.club_name||t.pseudo||"?",o=t.pseudo||"",n=(o||i).slice(0,2).toUpperCase(),r=t.club_color2||fi,a=t.club_color1||"#ffffff",d=t.last_seen_at?new Date(t.last_seen_at):null,l=d&&Date.now()-d.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${xr};background:var(--tile-bg);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function vr(t,e){const i=fo();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${mi};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${mo()}`,document.body.appendChild(i);const o=i.querySelector("#friend-pseudo-input"),n=i.querySelector("#add-friend-error"),r=()=>i.remove();o.focus(),i.querySelector("#add-cancel").addEventListener("click",r),i.addEventListener("click",a=>{a.target===i&&r()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=o.value.trim();if(!a){n.textContent="Entre un pseudo";return}n.textContent="";const{data:d}=await y.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!d){n.textContent="Utilisateur introuvable";return}if(d.id===t.user.id){n.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:l}=await y.from("friendships").select("id, status").or(`and(requester_id.eq.${t.user.id},addressee_id.eq.${d.id}),and(requester_id.eq.${d.id},addressee_id.eq.${t.user.id})`).single();if(l){const p=l.status==="accepted"?"Vous êtes déjà amis !":l.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";n.textContent=p;return}const{error:s}=await y.from("friendships").insert({requester_id:t.user.id,addressee_id:d.id,status:"pending"});if(s){n.textContent="Erreur : "+s.message;return}r(),e(`✅ Demande envoyée à ${d.pseudo} !`,"success")})}async function un(t,e,i=null,o={}){const n=t.user.id,{data:r}=await y.from("friendships").select("id, requester_id").eq("addressee_id",n).eq("status","pending").order("created_at",{ascending:!1}),a=(r||[]).map(b=>b.requester_id);let d={};if(a.length){const{data:b}=await y.from("users").select("id, pseudo, club_name").in("id",a);(b||[]).forEach(x=>{d[x.id]=x})}const l=(r||[]).map(b=>({...b,requester:d[b.requester_id]||{pseudo:"?"}})),s=fo(),p=l||[];s.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${p.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${p.map(b=>{var x,m,u;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((x=b.requester)==null?void 0:x.club_name)||((m=b.requester)==null?void 0:m.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((u=b.requester)==null?void 0:u.pseudo)||""})</span>
                </div>
                <button data-accept="${b.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${fi};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${b.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${mi};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${mo()}`,document.body.appendChild(s);const c=()=>s.remove();s.querySelector("#pending-close").addEventListener("click",c),s.addEventListener("click",b=>{b.target===s&&c()}),s.querySelectorAll("[data-accept]").forEach(b=>{b.addEventListener("click",async()=>{const{error:x}=await y.from("friendships").update({status:"accepted"}).eq("id",b.dataset.accept);if(x){e("Erreur : "+x.message,"error");return}b.closest("div[style]").remove(),e("✅ Ami accepté !","success"),pn(t,e,o),i&&i()})}),s.querySelectorAll("[data-decline]").forEach(b=>{b.addEventListener("click",async()=>{await y.from("friendships").delete().eq("id",b.dataset.decline),b.closest("div[style]").remove(),e("Demande refusée","info"),i&&i()})})}async function wr(t,e,i){const o=t.user.id,[n,r]=[o,e].sort(),a=o===n,{data:d}=await y.from("friend_match_stats").select("*").eq("player1_id",n).eq("player2_id",r).single(),l=t.profile.club_name||t.profile.pseudo||"Moi",s=d||{},p=a?s.wins_p1||0:s.wins_p2||0,c=a?s.wins_p2||0:s.wins_p1||0,b=s.draws||0,x=a?s.goals_p1||0:s.goals_p2||0,m=a?s.goals_p2||0:s.goals_p1||0,u=a?s.gc_used_p1||0:s.gc_used_p2||0,h=a?s.gc_used_p2||0:s.gc_used_p1||0,g=s.matches_total||0,k=(j,f,B,T=fi,$=mi)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${T}">${f}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${j}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${$}">${B}</div>
    </div>`,w=fo();w.innerHTML=`
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
        ${k("Victoires",p,c)}
        ${k("Nuls",b,b,Ao,Ao)}
        ${k("Défaites",c,p)}
        ${k("Buts marqués",x,m)}
        ${k("Buts encaissés",m,x,mi,fi)}
        ${k("GC utilisés ⚡",u,h,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${g} match${g>1?"s":""} joué${g>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${mo()}`,document.body.appendChild(w),w.querySelector("#stats-close").addEventListener("click",()=>w.remove()),w.addEventListener("click",j=>{j.target===w&&w.remove()})}function fo(){const t=document.createElement("div");return t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",t}function mo(){return`
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
        background:${fi};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function _r(t,{state:e,navigate:i,toast:o}){const n=e.profile;if(!n)return;const r="/icons/";Wt(i,n,"game",r,o),t.innerHTML=`
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
  </div>`,t.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",()=>{a.style.transform="scale(.96)",setTimeout(()=>a.style.transform="",180);const d=a.dataset.action;if(d==="match-ai"){cn(i,e);return}if(d==="match-random"){ut(),i("match",{matchMode:"random"});return}if(d==="match-friend"){i("friends");return}if(d==="mini-league"){i("mini-league");return}if(d==="ranked"){i("ranked");return}o("Bientôt disponible","info")})})}const kr="/",fn=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function mn(t,e,i){let o=0;const n=document.createElement("div");n.id="tutorial-overlay",n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const r=()=>{var p,c,b;const d=e[o],l=o===e.length-1,s=Math.round((o+1)/e.length*100);n.innerHTML=`
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
        ${d.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${kr}icons/${d.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,n.querySelectorAll("ul,ol").forEach(x=>{x.style.paddingLeft="20px",x.style.marginTop="6px",x.style.marginBottom="6px"}),n.querySelectorAll("li").forEach(x=>{x.style.marginBottom="4px"}),n.querySelectorAll("p").forEach(x=>{x.style.marginBottom="8px"}),(p=n.querySelector("#tuto-prev"))==null||p.addEventListener("click",()=>{o--,r()}),(c=n.querySelector("#tuto-next"))==null||c.addEventListener("click",()=>{l?a():(o++,r())}),(b=n.querySelector("#tuto-skip"))==null||b.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{n.remove(),t!=null&&t.id&&await y.from("users").update({tutorial_done:!0}).eq("id",t.id),i==null||i()};document.body.appendChild(n),r()}async function gn(t,e,i){let o=[];const{data:n,error:r}=await y.rpc("get_tutorial_steps");if(!r&&(n==null?void 0:n.length)>0)o=n;else{const{data:d,error:l}=await y.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(d==null?void 0:d.length)>0?o=d:i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3)}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):fn;mn(t,a,()=>e("settings"))}async function To(t,e,i){if(!t||t.tutorial_done)return;let o=[];const{data:n,error:r}=await y.rpc("get_tutorial_steps");if(!r&&(n==null?void 0:n.length)>0)o=n,console.log(`[Tutorial] RPC OK → ${o.length} étapes`);else{const{data:d,error:l}=await y.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(d==null?void 0:d.length)>0?(o=d,console.log(`[Tutorial] Direct OK → ${o.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${r==null?void 0:r.message}, Direct: ${l==null?void 0:l.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):fn;mn(t,a,()=>e("boosters"))}async function bn(t,e){var h,g,k;const{state:i,navigate:o,toast:n}=e,r=li(),a=no(),d=(h=i==null?void 0:i.profile)==null?void 0:h.is_admin,l="2026.08.05-0749";t.innerHTML=`
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
  </div>`,t.querySelectorAll("[data-theme-choice]").forEach(w=>{w.addEventListener("click",()=>{Ko(w.dataset.themeChoice),bn(t,e)})});const s=t.querySelector("#team-color1"),p=t.querySelector("#team-color2"),c=t.querySelector("#team-preview"),b=()=>{c&&(c.style.background=`linear-gradient(135deg, ${s.value} 50%, ${p.value} 50%)`)};b(),s==null||s.addEventListener("input",b),p==null||p.addEventListener("input",b),(g=t.querySelector("#team-save"))==null||g.addEventListener("click",async()=>{const w=t.querySelector("#team-error"),j=t.querySelector("#team-save"),f=t.querySelector("#team-club-name").value.trim();if(f.length<2){w.textContent="Nom de club trop court.";return}j.disabled=!0,j.textContent="⏳ Enregistrement...",w.textContent="";const{error:B}=await y.from("users").update({club_name:f,club_color1:s.value,club_color2:p.value}).eq("id",i.profile.id);if(j.disabled=!1,j.textContent="💾 Enregistrer",B){w.textContent=B.message;return}i.profile.club_name=f,i.profile.club_color1=s.value,i.profile.club_color2=p.value,w.style.color="#2ecc71",w.textContent="✅ Modifications enregistrées.",li()==="club"&&Ko("club")});const x=t.querySelector("#volume-slider"),m=t.querySelector("#volume-label");let u=null;x.addEventListener("input",()=>{Gn(Number(x.value)),m.textContent=`${x.value}%`,u&&(u.volume=Math.max(0,Math.min(1,Number(x.value)/100)))}),t.querySelector("#volume-test").addEventListener("click",()=>{u=ao("/sounds/match-opening.mp3",1)}),(k=t.querySelector("#settings-tutorial"))==null||k.addEventListener("click",()=>{gn(i.profile,o,n)}),t.querySelector("#settings-logout").addEventListener("click",async()=>{await y.auth.signOut(),window.location.reload()})}const $r={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ti={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Mo=["GK","DEF","MIL","ATT"],Er=["Tous","GK","DEF","MIL","ATT"],Sr={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Co(t){const e=t.player;return e?(e.rarity,Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)):null}function zr(t){return t.length?t.reduce((e,i)=>Co(i)>Co(e)?i:e,t[0]):t[0]}const Lr={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function yi(t,e){return t&&Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Ri(t,e="",i=1){const o=t.player;if(!o)return"";const n=t.evolution_bonus||0,r={...o,_evolution_bonus:n},a=e?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${e}</div>`:"",d=i>1?`
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
  </div>`}function jo(t){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${qe(t,{width:140})}
  </div>`}async function Ir(t,e){const{state:i,navigate:o,toast:n,openModal:r,closeModal:a}=e;Wt(o,i.profile,"cards","/icons/",n),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await y.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await y.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),s=(d||[]).filter(P=>P.card_type==="player"&&P.player),p=(d||[]).filter(P=>P.card_type==="game_changer"),c=(d||[]).filter(P=>P.card_type==="formation"),b=(d||[]).filter(P=>P.card_type==="stadium"),{data:x}=await y.from("gc_definitions").select("name,gc_type,color,effect,image_url"),m={};(x||[]).forEach(P=>{m[P.name]=P});const{data:u}=await y.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),h={};(u||[]).forEach(P=>{h[P.id]=P}),b.forEach(P=>{P.stadium_def&&(h[P.stadium_id]=P.stadium_def)});const g=Object.keys(gi),k=Object.keys(Oe),w={};s.forEach(P=>{const A=P.player.id;w[A]=(w[A]||0)+1}),new Set(Object.keys(w).map(P=>String(P)));const j=new Set(c.map(P=>P.formation)),f=new Set(p.map(P=>P.gc_type));let B="player",T="Tous",$="",L=!1,W=!1,I=new Set,S=new Set,v="job";function D(P){return P.job==="GK"?Number(P.note_g)||0:P.job==="DEF"?Number(P.note_d)||0:P.job==="MIL"?Number(P.note_m)||0:Number(P.note_a)||0}function X(P,A){return v==="note_desc"?[...P].sort((H,V)=>D(A(V))-D(A(H))):v==="note_asc"?[...P].sort((H,V)=>D(A(H))-D(A(V))):[...P].sort((H,V)=>{const Y=A(H),R=A(V),Z=Mo.indexOf(Y.job),ce=Mo.indexOf(R.job);return Z!==ce?Z-ce:(Y.surname_real||"").localeCompare(R.surname_real||"")})}function F(){return X(s,P=>P.player)}function ae(){return X(l||[],P=>P)}function xe(P){return(!I.size||I.has(P.country_code))&&(!S.size||S.has(P.club_id))}function C(){return F().filter(P=>{const A=P.player,H=T==="Tous"||A.job===T,V=!$||`${A.firstname} ${A.surname_real}`.toLowerCase().includes($);return H&&V&&xe(A)})}function E(){return ae().filter(P=>{const A=T==="Tous"||P.job===T,H=!$||`${P.firstname} ${P.surname_real}`.toLowerCase().includes($);return A&&H&&xe(P)})}t.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--tile-border);background:var(--tile-bg)">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="player"?"var(--green)":"transparent"};
        color:${B==="player"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${s.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="formation"?"var(--green)":"transparent"};
        color:${B==="formation"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="gc"?"var(--green)":"transparent"};
        color:${B==="gc"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${p.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="stadium"?"#4FC3F7":"transparent"};
        color:${B==="stadium"?"#4FC3F7":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${b.length})</div>
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
  </div>`,function(A){const H=document.getElementById(A);if(!H)return;H.addEventListener("wheel",fe=>{Math.abs(fe.deltaY)<=Math.abs(fe.deltaX)||(fe.preventDefault(),H.scrollLeft+=fe.deltaY)},{passive:!1});let V=!1,Y=0,R=0,Z=!1,ce=!1;H.addEventListener("mousedown",fe=>{V=!0,Z=!1,Y=fe.pageX,R=H.scrollLeft}),window.addEventListener("mouseup",()=>{V=!1,Z&&(H.style.cursor="",ce=!0),Z=!1}),window.addEventListener("mousemove",fe=>{if(!V)return;const de=fe.pageX-Y;!Z&&Math.abs(de)<6||(Z=!0,H.style.cursor="grabbing",fe.preventDefault(),H.scrollLeft=R-de)}),H.addEventListener("click",fe=>{ce&&(fe.stopPropagation(),fe.preventDefault(),ce=!1)},!0)}("col-grid");function Q(){const P=document.getElementById("col-filters");P&&(B==="player"?(P.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px;background:#fff;color:#1a1a1a" value="${$}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Er.map(A=>`
            <button class="filter-btn" data-job="${A}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${A===T?"var(--green)":"var(--tile-border)"};
                background:${A===T?"var(--green)":"#fff"};
                color:${A===T?"#fff":"#555"}">
              ${A}
            </button>`).join("")}
          <button id="sort-note-btn" title="Trier par note"
            style="flex-shrink:0;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${v!=="job"?"var(--green)":"var(--tile-border)"};
              background:${v!=="job"?"var(--green)":"#fff"};
              color:${v!=="job"?"#fff":"#555"}">
            ⇅ Note${v==="note_desc"?" ↓":v==="note_asc"?" ↑":""}
          </button>
          <button id="country-filter-btn" title="Filtrer par pays"
            style="flex-shrink:0;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${I.size?"var(--green)":"var(--tile-border)"};
              background:${I.size?"var(--green)":"#fff"};
              color:${I.size?"#fff":"#555"}">
            🌍${I.size?` (${I.size})`:""}
          </button>
          <button id="club-filter-btn" title="Filtrer par club"
            style="flex-shrink:0;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${S.size?"var(--green)":"var(--tile-border)"};
              background:${S.size?"var(--green)":"#fff"};
              color:${S.size?"#fff":"#555"}">
            🏟️${S.size?` (${S.size})`:""}
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
              border:1.5px solid ${L?"var(--yellow)":"var(--tile-border)"};
              background:${L?"var(--yellow)":"#fff"};
              color:${L?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${L?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",A=>{$=A.target.value.toLowerCase(),te()}),t.querySelectorAll(".filter-btn").forEach(A=>{A.addEventListener("click",()=>{T=A.dataset.job,Q(),te()})}),document.getElementById("dupes-only-btn").addEventListener("click",()=>{W=!W,Q(),te()}),document.getElementById("show-all-btn").addEventListener("click",()=>{L=!L,Q(),te()}),document.getElementById("sort-note-btn").addEventListener("click",()=>{v=v==="job"?"note_desc":v==="note_desc"?"note_asc":"job",Q(),te()}),document.getElementById("country-filter-btn").addEventListener("click",()=>{K("country","🌍 Filtrer par pays",e)}),document.getElementById("club-filter-btn").addEventListener("click",()=>{K("club","🏟️ Filtrer par club",e)})):(P.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${L?"var(--yellow)":"var(--tile-border)"};
              background:${L?"var(--yellow)":"#fff"};
              color:${L?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${L?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{L=!L,Q(),te()})))}function K(P,A,H){var de,$e,Le;const V=P==="country",Y=V?I:S,R=L?l||[]:s.map(ye=>ye.player);let Z;if(V){const ye=new Map;R.forEach(we=>{we!=null&&we.country_code&&!ye.has(we.country_code)&&ye.set(we.country_code,we.country_code)}),Z=[...ye.keys()].sort().map(we=>({value:we,label:we}))}else{const ye=new Map;R.forEach(we=>{var _;we!=null&&we.club_id&&!ye.has(we.club_id)&&ye.set(we.club_id,((_=we.clubs)==null?void 0:_.encoded_name)||we.club_id)}),Z=[...ye.entries()].sort((we,_)=>we[1].localeCompare(_[1])).map(([we,_])=>({value:we,label:_}))}const ce=`
      <div style="display:flex;gap:8px;margin-bottom:10px">
        <button id="mf-all"  class="btn btn-ghost" style="flex:1">Tout cocher</button>
        <button id="mf-none" class="btn btn-ghost" style="flex:1">Tout décocher</button>
      </div>
      <div style="max-height:340px;overflow-y:auto;display:flex;flex-direction:column;gap:2px">
        ${Z.length?Z.map(ye=>`
          <label style="display:flex;align-items:center;gap:8px;padding:6px 4px;font-size:14px;color:#1a1a1a;cursor:pointer">
            <input type="checkbox" class="mf-check" value="${ye.value}" ${Y.has(ye.value)?"checked":""}>
            <span>${ye.label}</span>
          </label>`).join(""):'<div style="color:#999;font-size:13px;text-align:center;padding:16px">Aucune option disponible.</div>'}
      </div>`;H.openModal(A,ce,'<button class="btn btn-primary" id="mf-apply" style="width:100%">Appliquer</button>'),(de=document.getElementById("mf-all"))==null||de.addEventListener("click",()=>{document.querySelectorAll(".mf-check").forEach(ye=>ye.checked=!0)}),($e=document.getElementById("mf-none"))==null||$e.addEventListener("click",()=>{document.querySelectorAll(".mf-check").forEach(ye=>ye.checked=!1)}),(Le=document.getElementById("mf-apply"))==null||Le.addEventListener("click",()=>{Y.clear(),document.querySelectorAll(".mf-check:checked").forEach(ye=>Y.add(ye.value)),H.closeModal(),Q(),te()})}function te(){const P=document.getElementById("col-grid");P&&(B==="player"?Be(P):B==="formation"?he(P):B==="stadium"?ke(P):me(P))}function ue(P,A,H,V,Y,R=0){const Z=document.getElementById("col-grid"),ce=document.getElementById("col-big");if(!Z||!ce)return;var fe=0;function de(){var M;const $e=window.innerWidth>=768,Le=document.getElementById("col-big"),ye=document.getElementById("col-gap"),we=((M=document.getElementById("col-grid"))==null?void 0:M.parentElement)||null,_=Le?Le.closest(".page"):null;if(Le&&we&&_){let G=0;Array.from(_.children).forEach(function(ie){ie!==Le&&ie!==we&&ie!==ye&&(G+=ie.offsetHeight)});const N=Math.max(0,_.clientHeight-G),U=Math.round(N*(R/100)),J=Math.max(0,N-U),ee=$e?50/71:45/63,oe=Math.round(J*ee),re=Math.max(0,J-oe);ye&&(ye.style.height=U+"px"),Le.style.flex="none",Le.style.height=oe+"px",Le.style.minHeight="0",we.style.flex="none",we.style.height=re+"px",we.style.minHeight="0",we.style.display="flex",we.style.overflow="hidden"}const z=document.getElementById("col-grid");z&&(z.style.height="100%",z.style.flexShrink="0",z.style.overflowX="auto",z.style.overflowY="hidden",z.style.alignItems="center",z.style.width="100%"),ce.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+A(P[fe])+"</div>";var q=ce.querySelector("[data-card-id],[data-form-id],[data-gc-id]");q&&q.addEventListener("click",function(){V(P[fe])});var O=ce.querySelector(".big-evolve-btn");O&&O.addEventListener("click",function(G){G.stopPropagation(),V(P[fe],{autoEvolve:!0})}),requestAnimationFrame(function(){var G=document.getElementById("big-card-inner");if(!(!G||!ce)){var N=ce.clientHeight,U=ce.clientWidth-16,J=G.offsetHeight,ee=G.offsetWidth;if(J>0&&ee>0&&N>40){var oe=Math.min(N/J,U/ee);G.style.transform="scale("+oe.toFixed(3)+")",G.style.transformOrigin="center center"}}}),Z.innerHTML=P.map(function(G,N){var U=N===fe,J="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(U?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+N+'" style="'+J+'">'+H(G,U)+"</div>"}).join(""),Z.querySelectorAll(".col-mini-item").forEach(function(G){G.addEventListener("click",function(){fe=Number(G.dataset.idx),de(),G.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var G=z?z.clientHeight:0,N=Z.querySelector(".col-mini-item > div");if(!(!G||!N)){var U=N.style.zoom;N.style.zoom="1";var J=N.offsetHeight;if(N.style.zoom=U,!(J<=0)){var ee=G/J;Z.querySelectorAll(".col-mini-item > div").forEach(function(oe){oe.style.zoom=ee.toFixed(4)})}}})}de()}function ve(P,A){var H=window.innerWidth>=768?.76:.54,V;if(!P||P._fake){var Y=P?P.player:null;if(!Y)return"";V=jo(Y)}else V=Ri(P,"");var R=P&&!P._fake?w[P.player&&P.player.id]||1:0,Z=R>0?'<div style="position:absolute;top:6px;right:6px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:11px;font-weight:900;padding:2px 7px;z-index:3;box-shadow:0 1px 4px rgba(0,0,0,0.4)">×'+R+"</div>":"";return'<div style="display:inline-block;position:relative;zoom:'+H+';pointer-events:none;line-height:0">'+Z+V+"</div>"}function be(P,A,H){var V=H>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+H+"</div>":"",Y=!!A,R=di(P,ct[P],{width:160});return Y||(R='<div style="filter:grayscale(1);opacity:0.5">'+R+"</div>"),"<div "+(A?'data-form-id="'+A.id+'"':"")+' style="position:relative;cursor:pointer">'+V+R+"</div>"}function je(P,A){var H=window.innerWidth>=768?.76:.54,V=di(P,ct[P],{width:140});return A||(V='<div style="filter:grayscale(1);opacity:0.45">'+V+"</div>"),'<div style="display:inline-block;zoom:'+H+';line-height:0;pointer-events:none">'+V+"</div>"}function Be(P){if(L){const A=E();if(!A.length){P.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const H=A.map(V=>s.find(Y=>Y.player.id===V.id)||{_fake:!0,player:V,id:"fake-"+V.id});ue(H,V=>V._fake?jo(V.player):Ri(V,""),V=>V._fake?ve({player:V.player,id:"x",_fake:!0}):ve(V),V=>{V._fake||qo(V,s,w,e)})}else{const A=C();if(!A.length){P.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const H={};A.forEach(Y=>{const R=Y.player.id;H[R]||(H[R]=[]),H[R].push(Y)});const V=Object.values(H).map(Y=>zr(Y)).filter(Y=>!W||(w[Y.player.id]||1)>1);if(W&&!V.length){P.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte en plusieurs exemplaires.</div>';return}ue(V,Y=>{const R=w[Y.player.id]||1,Z=R>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${R}</div>`:"",fe=s.filter(de=>de.player.id===Y.player.id&&de.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Ri(Y,Z+fe,R)},Y=>ve(Y),(Y,R)=>qo(Y,s,w,e,R))}}function he(P){const A=L?g:[...j];if(!A.length){P.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const H=A.map(V=>({formation:V,card:c.find(Y=>Y.formation===V)||null,owned:j.has(V)}));ue(H,({formation:V,card:Y,owned:R})=>be(V,R?Y:null,R?c.filter(Z=>Z.formation===V).length:0),({formation:V,owned:Y})=>je(V,Y),({card:V,owned:Y})=>{Y&&V&&Tr(V,c,e,r)},"#1A6B3C",5)}function me(P){const A=Object.keys(m),H=L?A.length?A:k:[...f];if(!H.length){P.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const V=H.map(Y=>({type:Y,gc:Oe[Y]||{icon:"⚡",desc:""},def:m[Y]||null,owned:f.has(Y),card:p.find(R=>R.gc_type===Y)||null}));ue(V,({type:Y,gc:R,def:Z,owned:ce,card:fe})=>{var z;const de=(Z==null?void 0:Z.name)||Y,$e=ce?p.filter(q=>q.gc_type===Y).length:0,Le=$e>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${$e}</div>`:"",ye=(Z==null?void 0:Z.effect)||R.desc||"",we=Z!=null&&Z.image_url?`/icons/${Z.image_url}`:((z=Z==null?void 0:Z.club)==null?void 0:z.logo_url)||(Z!=null&&Z.country_code?`https://flagsapi.com/${Z.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);let _=it(de,we,R.icon,ye,{width:160,onClick:ce});return ce||(_=`<div style="filter:grayscale(1);opacity:0.5">${_}</div>`),`<div ${ce&&fe?`data-gc-id="${fe.id}" data-gc-type="${Y}"`:""} style="position:relative">${Le}${_}</div>`},({type:Y,gc:R,def:Z,owned:ce})=>{const fe=window.innerWidth>=768?.76:.54,de=(Z==null?void 0:Z.name)||Y,$e=(Z==null?void 0:Z.effect)||R.desc||"",Le=Z!=null&&Z.image_url?`/icons/${Z.image_url}`:null;let ye=it(de,Le,R.icon,$e,{width:140});return ce||(ye=`<div style="filter:grayscale(1);opacity:0.45">${ye}</div>`),`<div style="display:inline-block;zoom:${fe};line-height:0;pointer-events:none">${ye}</div>`},({type:Y,owned:R,def:Z})=>{R&&Ar(Y,Z,r)},"#7a28b8",5)}function ke(P){const A="#4FC3F7",H="/";if(!b.length){P.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const V={};b.forEach(R=>{const Z=R.stadium_id||"?";(V[Z]=V[Z]||[]).push(R)});const Y=Object.entries(V).map(([R,Z])=>({sid:R,def:h[R]||null,count:Z.length,card:Z[0]}));ue(Y,({def:R,count:Z})=>{var ye,we;const ce=(R==null?void 0:R.name)||"?",fe=((ye=R==null?void 0:R.club)==null?void 0:ye.encoded_name)||(R==null?void 0:R.country_code)||"—",de=R!=null&&R.image_url?`${H}icons/${R.image_url}`:((we=R==null?void 0:R.club)==null?void 0:we.logo_url)||(R!=null&&R.country_code?`https://flagsapi.com/${R.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),$e=Z>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Z}</div>`:"",Le=`${fe}<br>+10 ⭐ joueurs alliés`;return`<div style="position:relative">${$e}${Kt(ce,de,Le,{width:160})}</div>`},({def:R})=>{var Le,ye;const Z=window.innerWidth>=768?.76:.54,ce=(R==null?void 0:R.name)||"?",fe=((Le=R==null?void 0:R.club)==null?void 0:Le.encoded_name)||(R==null?void 0:R.country_code)||"—",de=R!=null&&R.image_url?`${H}icons/${R.image_url}`:((ye=R==null?void 0:R.club)==null?void 0:ye.logo_url)||(R!=null&&R.country_code?`https://flagsapi.com/${R.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),$e=`${fe}<br>+10 ⭐`;return`<div style="display:inline-block;zoom:${Z};line-height:0;pointer-events:none">${Kt(ce,de,$e,{width:140})}</div>`},null,A,5)}t.querySelectorAll(".col-tab-btn").forEach(P=>{P.addEventListener("click",()=>{B=P.dataset.tab,T="Tous",$="",L=!1,t.querySelectorAll(".col-tab-btn").forEach(A=>{const H=A.dataset.tab===B;A.style.borderBottomColor=H?"var(--green)":"transparent",A.style.color=H?"var(--green)":"var(--tile-fg-dim)"}),Q(),te()})}),Q(),te()}function Ar(t,e,i){const o=Oe[t]||{icon:"⚡",desc:"Effet spécial."},n=(e==null?void 0:e.name)||t,r=(e==null?void 0:e.effect)||o.desc,a=e!=null&&e.image_url?`/icons/${e.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      ${it(n,a,o.icon,r,{width:200})}
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const hi=1e3;function Tr(t,e,i,o){var m,u,h;const{state:n,toast:r,closeModal:a,navigate:d,refreshProfile:l}=i,s=t.formation,p={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function c(){const g=ct[s]||{},k=gi[s]||[],w=290,j=360,f=20;function B($){const L=g[$];return L?{x:L.x*w,y:L.y*j}:null}let T=`<svg width="${w}" height="${j}" viewBox="0 0 ${w} ${j}" xmlns="http://www.w3.org/2000/svg">`;for(const[$,L]of k){const W=B($),I=B(L);!W||!I||(T+=`<line x1="${W.x}" y1="${W.y}" x2="${I.x}" y2="${I.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const $ of Object.keys(g)){const L=B($);if(!L)continue;const W=$.replace(/\d+/,""),I=p[W]||"#555";T+=`<circle cx="${L.x}" cy="${L.y}" r="${f}" fill="${I}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,T+=`<text x="${L.x}" y="${L.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${W}</text>`}return T+="</svg>",T}const b=e.filter(g=>g.formation===s);b.length;const x=!t.is_for_sale;o(`Formation ${s}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    ${x?`
    <div style="margin-top:12px;border-top:1px solid var(--tile-border);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${hi}"
          style="flex:1;padding:8px;border:1.5px solid var(--tile-border);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${t.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(m=document.getElementById("direct-sell-form-btn"))==null||m.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${s} pour ${hi.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const g=b.find(w=>!w.is_for_sale)||b[0];if(!g){r("Aucune carte à vendre","error");return}await y.from("market_listings").delete().eq("card_id",g.id),await y.from("transfer_history").delete().eq("card_id",g.id);const{error:k}=await y.from("cards").delete().eq("id",g.id);if(k){r(k.message,"error");return}await y.from("users").update({credits:(n.profile.credits||0)+hi}).eq("id",n.profile.id),await l(),r(`+${hi.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),d("collection")}),(u=document.getElementById("market-sell-form-btn"))==null||u.addEventListener("click",async()=>{const g=parseInt(document.getElementById("sell-price-form").value);if(!g||g<1){r("Prix invalide","error");return}await y.from("cards").update({is_for_sale:!0,sale_price:g}).eq("id",t.id),await y.from("market_listings").insert({seller_id:n.profile.id,card_id:t.id,price:g}),r("Carte mise en vente sur le marché !","success"),a(),d("collection")}),(h=document.getElementById("cancel-sell-form-btn"))==null||h.addEventListener("click",async()=>{await y.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await y.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),r("Annonce retirée","success"),a(),d("collection")})}async function qo(t,e,i,o,n={}){var K,te,ue,ve,be,je,Be,he,me,ke,P;const{state:r,toast:a,openModal:d,closeModal:l,navigate:s,refreshProfile:p}=o,c=t.player,b=e.filter(A=>A.player.id===c.id),x=b.length,m=t.evolution_bonus||0,u=Math.max((Number(c.note_g)||0)+(c.job==="GK"||c.job2==="GK"?m:0),(Number(c.note_d)||0)+(c.job==="DEF"||c.job2==="DEF"?m:0),(Number(c.note_m)||0)+(c.job==="MIL"||c.job2==="MIL"?m:0),(Number(c.note_a)||0)+(c.job==="ATT"||c.job2==="ATT"?m:0)),h=c.rarity||"normal",{data:g}=await y.from("sell_price_configs").select("*").eq("rarity",h).lte("note_min",u).gte("note_max",u).order("note_min",{ascending:!1}).limit(1),k=((K=g==null?void 0:g[0])==null?void 0:K.price)??Sr[h]??1e3,w=((te=g==null?void 0:g[0])==null?void 0:te.price_min)??null,j=((ue=g==null?void 0:g[0])==null?void 0:ue.price_max)??null;Ct(c);const f=yi(c,c.job)+m,B=c.job2?yi(c,c.job2)+(yi(c,c.job2)>0?m:0):null;ti[c.job],c.job2&&ti[c.job2];const T=$r[c.rarity]||"#ccc",$=Lr[c.country_code]||c.country_code||"",L=t.evolution_bonus||0,I=f+L,S=B||0,v=S>0?S+L:0,D=b.map(A=>A.id);let X={};if(D.length){const{data:A}=await y.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",D).order("transferred_at",{ascending:!0});(A||[]).forEach(H=>{X[H.card_id]||(X[H.card_id]=[]),X[H.card_id].push(H)})}const F=D.length?`
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
          ${w!==null&&j!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${w.toLocaleString("fr")}</b> – <b>${j.toLocaleString("fr")}</b> cr.
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
            ⚡ Vente directe immédiate (${(w??k).toLocaleString("fr")} cr.)
          </button>
        </div>
      `}

      ${x-1>0?`<div style="font-size:13px;font-weight:700;margin-bottom:10px">🗂️ Copies (${x-1})</div>`:`
        <div style="font-size:12px;color:#aaa;font-style:italic">Aucune autre copie.</div>
      `}
      <!-- Grille de mini-cartes (copies uniquement, l'exemplaire 1 = carte principale affichée en haut) -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${b.filter(A=>A.id!==t.id).map((A,H)=>{const V=X[A.id]||[],Y=A.is_for_sale,R=V.length?V[V.length-1]:null,Z=A.evolution_bonus||0,ce=R?R.source==="booster"?"Booster":R.price?R.price.toLocaleString("fr")+" cr.":"—":"—",fe=R?new Date(R.transferred_at).toLocaleDateString("fr",{day:"2-digit",month:"2-digit",year:"numeric"}):"",de=80,$e=Math.round(de*657/507),Le=qe({...c,_evolution_bonus:Z},{width:de});return`
            <div class="exemplaire-row" data-card-id="${A.id}" data-card-idx="${H}"
              style="position:relative;cursor:${Y?"not-allowed":"pointer"};opacity:${Y?.55:1};transition:transform .1s">
              <!-- Checkbox cachée -->
              <input type="checkbox" class="expl-check"
                data-id="${A.id}" data-evo="${Z}" data-note="${yi(c,c.job)}"
                ${Y?"disabled":""}
                style="display:none">
              <!-- Wrapper exactement aux dimensions de la carte -->
              <div class="expl-mini-card" style="position:relative;width:${de}px;height:${$e}px;border-radius:8px;overflow:hidden">
                ${Le}
                <!-- Overlay vert sélection — couvre toute la carte -->
                <div class="expl-sel-overlay" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(26,107,60,0.38);pointer-events:none;z-index:10;box-shadow:inset 0 0 0 3px #1A6B3C;border-radius:8px"></div>
                <!-- Checkmark -->
                <div class="expl-sel-check" style="display:none;position:absolute;top:5px;left:5px;width:20px;height:20px;background:#1A6B3C;border-radius:50%;z-index:11;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:900">✓</div>
                ${Y?'<div style="position:absolute;top:0;right:0;background:#e67e22;color:#fff;font-size:6px;font-weight:900;padding:2px 4px;border-radius:0 6px 0 4px;z-index:12">VENTE</div>':""}
              </div>
              <!-- Source + date -->
              <div style="font-size:9px;color:#888;text-align:center;margin-top:3px;line-height:1.3">
                ${ce}${fe?`<br>${fe}`:""}
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
              ${(t.evolution_bonus||0)>0?`+${t.evolution_bonus} appliqué${t.evolution_bonus>1?"s":""} · Note : ${I}${c.job2&&S>0?` / ${v}`:""}`:`Note actuelle : ${I}${c.job2&&S>0?` / ${v}`:""}`}
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
          ${w!==null&&j!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${w.toLocaleString("fr")}</b> – <b>${j.toLocaleString("fr")}</b> cr. / carte
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
            ⚡ Vente directe immédiate (${(w??k).toLocaleString("fr")} cr./carte)
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
            <div style="font-weight:700;font-size:13px;color:#333">${$||"—"}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">CLUB</div>
            <div style="font-weight:700;font-size:13px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${((ve=c.clubs)==null?void 0:ve.encoded_name)||"—"}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">POSTE PRINCIPAL</div>
            <div style="font-weight:700;font-size:13px;color:${ti[c.job]||"#333"}">${c.job}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">POSTE SECONDAIRE</div>
            <div style="font-weight:700;font-size:13px;color:${c.job2?ti[c.job2]||"#333":"#bbb"}">${c.job2||"Aucun"}</div>
          </div>
        </div>

        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",c.note_g],["DEF",c.note_d],["MIL",c.note_m],["ATT",c.note_a]].map(([A,H])=>{const V=ti[A],Y=A==="GK"?"#fff":V,R=A===c.job||A===c.job2,Z=(Number(H)||0)+(R&&L>0?L:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${V};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${Y};font-family:Arial Black,Arial;line-height:1">${Z}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${Y}">${A}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:900;font-size:18px;color:#1A6B3C">×${x}</div>
        </div>
      </div>
    </div>
    ${F}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(be=document.getElementById("close-detail"))==null||be.addEventListener("click",l);let ae=new Set;const xe=c.rarity==="pepite"?1.3:c.rarity==="papyte"?.7:1;function C(){let A=0;return document.querySelectorAll(".expl-check:checked").forEach(H=>{if(H.dataset.id===t.id)return;const Y=Number(H.dataset.evo)||0,R=Number(H.dataset.note)||0;A+=R+Y}),Math.round(A*xe)}const E=()=>{const A=ae.size,H=document.getElementById("sell-action-panel");if(!H)return;H.style.display=A>0?"block":"none",document.getElementById("sell-selected-count").textContent=A;const V=document.getElementById("evolve-btn");if(V){const Y=C();V.textContent=Y>0?`⬆️ Évoluer (+${Y})`:"⬆️ Évoluer"}};if(document.querySelectorAll(".expl-check").forEach(A=>{A.addEventListener("change",()=>{const H=A.dataset.id;A.checked?ae.add(H):ae.delete(H);const V=A.closest(".exemplaire-row");if(V){const Y=V.querySelector(".expl-sel-overlay"),R=V.querySelector(".expl-sel-check");Y&&(Y.style.display=A.checked?"block":"none"),R&&(R.style.display=A.checked?"flex":"none"),V.style.transform=A.checked?"scale(1.05)":"scale(1)"}E()})}),n.autoEvolve){document.querySelectorAll(".expl-check").forEach(H=>{if(H.dataset.id===t.id)return;H.checked=!0,ae.add(H.dataset.id);const V=H.closest(".exemplaire-row");if(V){const Y=V.querySelector(".expl-sel-overlay"),R=V.querySelector(".expl-sel-check");Y&&(Y.style.display="block"),R&&(R.style.display="flex"),V.style.transform="scale(1.05)"}}),E();const A=document.getElementById("modal-overlay");A&&(A.style.visibility="hidden"),requestAnimationFrame(()=>{const H=document.getElementById("evolve-btn");if(!H||H.disabled){A&&(A.style.visibility="");return}H.click();const V=()=>{A&&(A.style.visibility="",A.classList.contains("hidden")||l())},Y=new MutationObserver(()=>{[...document.body.children].some(ce=>{var fe;return((fe=ce.style)==null?void 0:fe.zIndex)==="9999"})||(Y.disconnect(),clearTimeout(R),V())});Y.observe(document.body,{childList:!0});const R=setTimeout(()=>{Y.disconnect(),V()},6e4)})}document.querySelectorAll(".exemplaire-row").forEach(A=>{A.addEventListener("click",H=>{if(H.target.tagName==="INPUT")return;const V=A.querySelector(".expl-check");V&&!V.disabled&&(V.checked=!V.checked,V.dispatchEvent(new Event("change")))})}),(je=document.getElementById("evolve-btn"))==null||je.addEventListener("click",async()=>{if(x<=1)return;const A=[...ae];if(!A.length)return;if(ae.has(t.id)){const de=document.createElement("div");de.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",de.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(de),de.querySelector("#err-close").addEventListener("click",()=>de.remove()),de.addEventListener("click",$e=>{$e.target===de&&de.remove()});return}const H=A.filter(de=>de!==t.id);if(!H.length){a("Sélectionne des copies à sacrifier","warning");return}const V=H.reduce((de,$e)=>{const Le=document.querySelector(`.expl-check[data-id="${$e}"]`),ye=Le&&Number(Le.dataset.evo)||0,we=Le&&Number(Le.dataset.note)||0;return de+we+ye},0),Y=Math.round(V*xe),R=c.rarity==="pepite"?" (+30% pépite ✨)":c.rarity==="papyte"?" (-30% papyte)":"";if(!await new Promise(de=>{const $e=document.createElement("div");$e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",$e.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${c.firstname} ${c.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${H.length}</strong> copie${H.length>1?"s":""} sacrifiée${H.length>1?"s":""}<br>
            ➕ Brut : <strong>+${V}</strong>${R?`<span style="font-size:11px;color:#888"> ${R}</span>`:""}<br>
            ⬆️ Bonus final : <strong style="color:#1A6B3C">+${Y}</strong><br>
            📈 Évolution : <strong>${t.evolution_bonus||0}</strong> → <strong style="color:#1A6B3C">${(t.evolution_bonus||0)+Y}</strong><br>
            📊 Note finale : <strong>${f}</strong> → <strong style="color:#1A6B3C">${f+Y}</strong>
            ${B&&B>0?`<br>📊 Note 2 finale : <strong>${B}</strong> → <strong style="color:#1A6B3C">${B+Y}</strong>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild($e),$e.querySelector("#sac-cancel").addEventListener("click",()=>{$e.remove(),de(!1)}),$e.querySelector("#sac-ok").addEventListener("click",()=>{$e.remove(),de(!0)}),$e.addEventListener("click",Le=>{Le.target===$e&&($e.remove(),de(!1))})}))return;if(H.length){await y.from("market_listings").delete().in("card_id",H),await y.from("deck_cards").delete().in("card_id",H),await y.from("transfer_history").delete().in("card_id",H),await y.from("decks").update({stadium_card_id:null}).in("stadium_card_id",H);const{error:de}=await y.from("cards").delete().in("id",H);if(de){a("Erreur suppression : "+de.message,"error");return}}const ce=(t.evolution_bonus||0)+Y,{error:fe}=await y.from("cards").update({evolution_bonus:ce}).eq("id",t.id);if(fe){a("Erreur évolution : "+fe.message,"error");return}a(`⬆️ ${c.firstname} ${c.surname_real} : note ${f} → ${f+ce} (+${Y}) !`,"success",4e3),l(),s("collection")});async function Q(A){const{data:H}=await y.from("sell_price_configs").select("price_min, price_max").eq("rarity",c.rarity).lte("note_min",f).gte("note_max",f).order("note_max",{ascending:!0}).limit(1).maybeSingle();return H?A<H.price_min||A>H.price_max?{ok:!1,min:H.price_min,max:H.price_max}:{ok:!0}:{ok:!0}}(Be=document.getElementById("market-sell-btn"))==null||Be.addEventListener("click",async()=>{var ce;const A=[...ae];if(!A.length){a("Sélectionne au moins un exemplaire","warning");return}const H=parseInt((ce=document.getElementById("sell-market-price"))==null?void 0:ce.value);if(!H||H<1){a("Prix invalide","error");return}const V=await Q(H);if(!V.ok){a(`Prix hors grille : entre ${V.min.toLocaleString("fr")} et ${V.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:Y}=await y.from("cards").update({is_for_sale:!0,sale_price:H}).in("id",A);if(Y){a(Y.message,"error");return}const R=A.map(fe=>({seller_id:r.profile.id,card_id:fe,price:H,status:"active"})),{error:Z}=await y.from("market_listings").insert(R);Z&&console.warn("[Market] insert listings:",Z.message),a(`${A.length} carte${A.length>1?"s":""} mise${A.length>1?"s":""} en vente à ${H.toLocaleString("fr")} cr. chacune !`,"success"),l(),s("collection")}),(he=document.getElementById("single-sell-btn"))==null||he.addEventListener("click",async()=>{var R;const A=parseInt((R=document.getElementById("single-sell-price"))==null?void 0:R.value);if(!A||A<1){a("Prix invalide","error");return}const H=await Q(A);if(!H.ok){a(`Prix hors grille : entre ${H.min.toLocaleString("fr")} et ${H.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:V}=await y.from("cards").update({is_for_sale:!0,sale_price:A}).eq("id",t.id);if(V){a(V.message,"error");return}const{error:Y}=await y.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:A,status:"active"});Y&&console.warn("[Market] insert listing:",Y.message),a(`Carte mise en vente à ${A.toLocaleString("fr")} cr. !`,"success"),l(),s("collection")}),(me=document.getElementById("single-direct-sell-btn"))==null||me.addEventListener("click",async()=>{const A=w??k;if(!confirm(`Vendre cette carte immédiatement pour ${A.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;await y.from("market_listings").delete().eq("card_id",t.id),await y.from("transfer_history").delete().eq("card_id",t.id);const{error:H}=await y.from("cards").delete().eq("id",t.id);if(H){a(H.message,"error");return}await y.from("users").update({credits:(r.profile.credits||0)+A}).eq("id",r.profile.id),await p(),a(`+${A.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),s("collection")}),(ke=document.getElementById("market-direct-sell-btn"))==null||ke.addEventListener("click",async()=>{const A=[...ae];if(!A.length){a("Sélectionne au moins un exemplaire","warning");return}const V=(w??k)*A.length;if(!confirm(`Vendre ${A.length} carte${A.length>1?"s":""} immédiatement pour ${V.toLocaleString("fr")} crédits au total ? Cette action est irréversible.`))return;await y.from("market_listings").delete().in("card_id",A),await y.from("transfer_history").delete().in("card_id",A);const{error:Y}=await y.from("cards").delete().in("id",A);if(Y){a(Y.message,"error");return}await y.from("users").update({credits:(r.profile.credits||0)+V}).eq("id",r.profile.id),await p(),a(`+${V.toLocaleString("fr")} crédits ! ${A.length} carte${A.length>1?"s":""} vendue${A.length>1?"s":""}.`,"success"),l(),s("collection")}),(P=document.getElementById("cancel-sell-btn"))==null||P.addEventListener("click",async()=>{await y.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await y.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),a("Annonce retirée","success"),l(),s("collection")})}const Mr={GK:"note_g",DEF:"note_d",MIL:"note_m",ATT:"note_a"};function Ot(t,e){const i=t==null?void 0:t.player;if(!i)return 0;const o=t.evolution_bonus||0;return(Number(i[Mr[e]])||0)+(e===i.job||e===i.job2?o:0)}function wi(t){return t.replace(/[0-9]/g,"")}function xn(t,e){if(!(t!=null&&t.player)||!e)return 0;const i=t.player,o=e.club_id&&String(i.club_id)===String(e.club_id),n=e.country_code&&String(i.country_code)===String(e.country_code);return o||n?10:0}function Ni(t,e,i){let o=0;for(const[r,a]of Object.entries(t))a&&(o+=Ot(a,wi(r)),o+=xn(a,i));const n=Mi(e)||gi[e]||[];for(const[r,a]of n){const d=t[r],l=t[a];if(!d||!l)continue;const s=jt(d.player,l.player);s==="#00ff88"?o+=10:s==="#FFD700"&&(o+=5)}return o}function Cr(t,e,i){const o={},n=new Set,r=[...t].sort((a,d)=>{const l={GK:0,DEF:1,ATT:2,MIL:3};return l[wi(a)]-l[wi(d)]});for(const a of r){const d=wi(a);let l=null,s=-1;for(const p of e){if(n.has(p.id))continue;const c=Ot(p,d)+xn(p,i);c>s&&(s=c,l=p)}l&&(o[a]=l,n.add(l.id))}return{assign:o,used:n}}function jr(t,e,i,o,n,r,a=6){let d=Ni(t,n,r);const l=o.filter(s=>!e.has(s.id));for(let s=0;s<a;s++){let p=!1;for(let c=0;c<i.length;c++)for(let b=c+1;b<i.length;b++){const x=i[c],m=i[b],u=t[x],h=t[m];if(!u||!h)continue;t[x]=h,t[m]=u;const g=Ni(t,n,r);g>d?(d=g,p=!0):(t[x]=u,t[m]=h)}for(const c of i){const b=t[c];for(let x=0;x<l.length;x++){const m=l[x];t[c]=m;const u=Ni(t,n,r);if(u>d){d=u,p=!0,l[x]=b,e.delete(b==null?void 0:b.id),e.add(m.id);break}else t[c]=b}}if(!p)break}return d}function qr({playerCards:t,availableFormations:e,stadiumCards:i,stadDefMap:o}){const n=(t||[]).filter(d=>d.player);if(n.length<11)return null;const r=[{id:null,def:null}];(i||[]).forEach(d=>{const l=o==null?void 0:o[d.stadium_id];l&&r.push({id:d.id,def:l})});let a=null;for(const d of e||[]){const l=ct[d];if(!l)continue;const s=Object.keys(l);if(s.length===11)for(const p of r){const{assign:c,used:b}=Cr(s,n,p.def);if(Object.keys(c).length!==11)continue;const x=jr(c,b,s,n,d,p.def);if(!a||x>a.score){const u=n.filter(g=>!Object.values(c).some(k=>k.id===g.id)).map(g=>({c:g,v:Math.max(Ot(g,"GK"),Ot(g,"DEF"),Ot(g,"MIL"),Ot(g,"ATT"))})).sort((g,k)=>k.v-g.v).slice(0,5).map(g=>g.c.id),h={};Object.entries(c).forEach(([g,k])=>{h[g]=k.id}),a={formation:d,stadiumCardId:p.id,slots:h,subs:u,score:x}}}}return a}function Bo(t,e=""){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${t}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(e||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const n=o.querySelector("#pm-input");n.focus(),n.select();const r=a=>{o.remove(),i(a)};o.querySelector("#pm-ok").addEventListener("click",()=>r(n.value.trim()||null)),o.querySelector("#pm-cancel").addEventListener("click",()=>r(null)),o.querySelector("#pm-cancel2").addEventListener("click",()=>r(null)),o.addEventListener("click",a=>{a.target===o&&r(null)}),n.addEventListener("keydown",a=>{a.key==="Enter"&&r(n.value.trim()||null),a.key==="Escape"&&r(null)})})}function Br(t,e=!1){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${t}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${e?"":"btn-primary"}" id="cm-ok" style="${e?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const n=r=>{o.remove(),i(r)};o.querySelector("#cm-ok").addEventListener("click",()=>n(!0)),o.querySelector("#cm-cancel").addEventListener("click",()=>n(!1)),o.addEventListener("click",r=>{r.target===o&&n(!1)})})}const Li={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Yi(t,e){const{state:i,navigate:o,toast:n}=e;Wt(o,i.profile,"decks","/icons/",n),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await y.from("decks").select("id,name,formation,stadium_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1}),a=[...new Set((r||[]).map(l=>l.stadium_card_id).filter(Boolean))];let d={};if(a.length){const{data:l}=await y.from("cards").select("id, stadium_id, stadium_definitions(image_url, country_code, club:clubs(logo_url))").in("id",a);(l||[]).forEach(s=>{var b;const p=s.stadium_definitions,c=((b=p==null?void 0:p.club)==null?void 0:b.logo_url)||(p!=null&&p.image_url?`/icons/${p.image_url}`:null)||(p!=null&&p.country_code?`https://flagsapi.com/${p.country_code}/flat/64.png`:null);d[s.id]=c})}t.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const l=await Bo("Nom du deck",`Deck ${((r==null?void 0:r.length)||0)+1}`);if(!l)return;const{data:s,error:p}=await y.from("decks").insert({owner_id:i.profile.id,name:l}).select().single();if(p){n(p.message,"error");return}n("Deck créé !","success"),Do(s.id,t,e)}),t.querySelectorAll("[data-open-deck]").forEach(l=>{l.addEventListener("click",()=>Do(l.dataset.openDeck,t,e))}),t.querySelectorAll("[data-rename]").forEach(l=>{l.addEventListener("click",async()=>{const s=await Bo("Nouveau nom",l.dataset.name);if(!s||s===l.dataset.name)return;const{error:p}=await y.from("decks").update({name:s}).eq("id",l.dataset.rename);if(p){n(p.message,"error");return}n("Deck renommé !","success"),Yi(t,e)})}),t.querySelectorAll("[data-delete]").forEach(l=>{l.addEventListener("click",async()=>{if(!await Br(`Supprimer le deck "${l.dataset.name}" ? Cette action est irréversible.`,!0))return;await y.from("deck_cards").delete().eq("deck_id",l.dataset.delete);const{error:s}=await y.from("decks").delete().eq("id",l.dataset.delete);if(s){n(s.message,"error");return}n("Deck supprimé.","success"),Yi(t,e)})})}async function Do(t,e,i){const{state:o,toast:n}=i;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await y.from("decks").select("*").eq("id",t).single(),{data:a}=await y.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:d}=await y.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id).eq("card_type","stadium"),l=(a||[]).filter(g=>g.card_type==="player"&&g.player),s=(a||[]).filter(g=>g.card_type==="formation"),p=(d||[]).filter(g=>g.card_type==="stadium"),c=[...new Set(p.map(g=>g.stadium_id).filter(Boolean))];let b={};if(p.forEach(g=>{g.stadium_def&&g.stadium_id&&(b[g.stadium_id]=g.stadium_def)}),c.length&&Object.keys(b).length<c.length){const{data:g}=await y.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",c);(g||[]).forEach(k=>{b[k.id]=k})}const x=s.map(g=>g.formation).filter(Boolean),{data:m}=await y.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",t);let u=r.formation||"4-4-2";x.length>0&&!x.includes(u)&&(u=x[0]);const h={deckId:t,name:r.name,formation:u,formationCardId:r.formation_card_id,stadiumCardId:r.stadium_card_id||null,slots:{},subs:[],playerCards:l,formationCards:s,stadiumCards:p,stadDefMap:b,availableFormations:x};(m||[]).forEach(g=>{g.is_starter?h.slots[g.position]=g.card_id:h.subs.includes(g.card_id)||h.subs.push(g.card_id)}),dt(e,h,i,!0)}function dt(t,e,i,o=!1){var u,h;const{navigate:n}=i;o||Nr(e,i),Li[e.formation];const r=Fo(e.formation),a=r.filter(g=>e.slots[g]).length,d=e.availableFormations.length>0?e.availableFormations:Object.keys(Li),l=(u=e.stadiumCards)==null?void 0:u.find(g=>g.id===e.stadiumCardId),s=l&&((h=e.stadDefMap)==null?void 0:h[l.stadium_id])||null,p=e.subs.map(g=>e.playerCards.find(k=>k.id===g)).filter(Boolean);p.length!==e.subs.length&&(e.subs=p.map(g=>g.id)),[...Object.values(e.slots),...e.subs],t.innerHTML=`
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
            ${p.map(g=>{const k={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:24px">
                ${qe({...k,_evolution_bonus:k._evolution_bonus||0},{width:90,showStad:!0,stadDef:s})}
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
              ${di(e.formation,ct[e.formation],{width:100})}
            </div>
          </div>
          <!-- Stade -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">🏟️ Stade</div>
            <div id="add-stad-btn-pc" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${l?(()=>{var w;const g=e.stadDefMap[l.stadium_id],k=((w=g==null?void 0:g.club)==null?void 0:w.logo_url)||(g==null?void 0:g.image_url)||(g!=null&&g.country_code?`https://flagsapi.com/${g.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Kt((g==null?void 0:g.name)||"Stade",k,"+10 ⭐",{width:100})})():`<div style="width:100px;height:171px;border:2px dashed rgba(79,195,247,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
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
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">Remplaçants (${p.length}/5)</div>
            <div style="display:flex;gap:2px;align-items:center;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none" id="subs-list" class="no-scrollbar">
              ${p.map(g=>{const k={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:20px">
                  ${qe({...k,_evolution_bonus:k._evolution_bonus||0},{width:44,showStad:!0,stadDef:s})}
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
              ${l?(()=>{var w;const g=e.stadDefMap[l.stadium_id],k=((w=g==null?void 0:g.club)==null?void 0:w.logo_url)||(g==null?void 0:g.image_url)||(g!=null&&g.country_code?`https://flagsapi.com/${g.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Kt((g==null?void 0:g.name)||"Stade",k,"+10⭐",{width:44})})():`<div style="width:44px;height:57px;border:2px dashed rgba(79,195,247,0.5);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
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
  </div>`;const c=window.innerWidth>=900,b=t.querySelector(".deck-pc-layout"),x=t.querySelector(".deck-mobile-layout");b&&(b.style.display=c?"block":"none"),x&&(x.style.display=c?"none":"block"),t.querySelectorAll("#save-deck").forEach(g=>{g.closest(".page-body").style.display=c?"none":"block"}),Dr(t,e,r,i),t.querySelectorAll("#builder-back").forEach(g=>g.addEventListener("click",()=>n("decks")));const m=()=>{const{openModal:g,closeModal:k}=i,j=`<div style="display:flex;flex-wrap:wrap;gap:12px;padding:8px;justify-content:center">
      ${[...new Set(d)].map(f=>{const B=f===e.formation;return`<div data-forma="${f}" style="cursor:pointer;border-radius:10px;${B?"box-shadow:0 0 0 3px #1A6B3C":""}">
          ${di(f,ct[f],{width:90})}
        </div>`}).join("")}
    </div>`;g("⚽ Choisir une formation",j),document.querySelectorAll("#modal-body [data-forma]").forEach(f=>{f.addEventListener("click",()=>{e.formation=f.dataset.forma;const B=Fo(e.formation),T={};B.forEach($=>{e.slots[$]&&(T[$]=e.slots[$])}),e.slots=T,k(),dt(t,e,i)})})};t.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(g=>g.addEventListener("click",m)),t.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(g=>g.addEventListener("click",()=>Fr(e,t,i))),t.querySelectorAll("#save-deck, #save-deck-pc").forEach(g=>g.addEventListener("click",()=>Gr(e,i))),t.querySelectorAll("#auto-deck-pc, #auto-deck-mobile").forEach(g=>{g.addEventListener("click",async()=>{if(e.playerCards.length<11){i.toast(`Il faut au moins 11 joueurs (tu en as ${e.playerCards.length})`,"error");return}const k=g.textContent;g.disabled=!0,g.textContent="⏳ Optimisation…",await new Promise(j=>setTimeout(j,30));const w=qr({playerCards:e.playerCards,availableFormations:e.availableFormations,stadiumCards:e.stadiumCards,stadDefMap:e.stadDefMap});if(g.disabled=!1,g.textContent=k,!w){i.toast("Impossible de composer une équipe complète","error");return}e.formation=w.formation,e.slots=w.slots,e.subs=w.subs,e.stadiumCardId=w.stadiumCardId,dt(t,e,i),i.toast(`✨ Deck optimisé : ${w.formation} · score ${w.score}`,"success")})}),t.querySelectorAll("[data-remove-sub]").forEach(g=>{g.addEventListener("click",()=>{e.subs=e.subs.filter(k=>k!==g.dataset.removeSub),dt(t,e,i)})}),t.querySelectorAll("#add-sub-btn").forEach(g=>g.addEventListener("click",()=>Rr(e,t,i)))}function Dr(t,e,i,o){var w,j,f;const n=window.innerWidth>=900,r=t.querySelector(n?"#deck-field-pc":"#deck-field-mobile");if(!r)return;const a=(w=e.stadiumCards)==null?void 0:w.find(B=>B.id===e.stadiumCardId),d=a&&((j=e.stadDefMap)==null?void 0:j[a.stadium_id])||null,l=ct[e.formation]||{},s=Mi(e.formation)||[],p={};for(const B of i){const T=e.slots[B],$=T?e.playerCards.find(L=>L.id===T):null;$!=null&&$.player?p[B]={...$.player,_evolution_bonus:$.evolution_bonus||0,face:$.player.face||null}:p[B]=null}const c=window.innerWidth>=900,b=c?window.innerWidth-280:window.innerWidth-20,x=c?Math.min(b,860):b,m=Math.round(c?x*.82:x*.85),u=c?84:44;let h="";for(const[B,T]of s){const $=l[B],L=l[T];if(!$||!L)continue;const W=$.x*x,I=Math.round(.03*m+$.y*.85*m),S=L.x*x,v=Math.round(.03*m+L.y*.85*m),D=p[B],X=p[T],F=jt(D,X);F==="#ff3333"||F==="#cc2222"?h+=`<line x1="${W.toFixed(1)}" y1="${I.toFixed(1)}" x2="${S.toFixed(1)}" y2="${v.toFixed(1)}" stroke="${F}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(h+=`<line x1="${W.toFixed(1)}" y1="${I.toFixed(1)}" x2="${S.toFixed(1)}" y2="${v.toFixed(1)}" stroke="${F}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,h+=`<line x1="${W.toFixed(1)}" y1="${I.toFixed(1)}" x2="${S.toFixed(1)}" y2="${v.toFixed(1)}" stroke="${F}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let g="";const k=Math.round(u*657/507);for(const B of i){const T=l[B];if(!T)continue;const $=p[B],L=T.x*x;T.y*m;const W=Math.round(.03*m+T.y*(.85*m)),I=Math.round(L-u/2),S=Math.round(W-k/2);if($){const v=B.replace(/\d+/,""),D=d&&(d.club_id&&String($.club_id)===String(d.club_id)||d.country_code&&$.country_code===d.country_code),X=qe({...$,_evolution_bonus:$._evolution_bonus||0},{width:u,showStad:!0,stadDef:d,role:v});D&&((f=d.club)!=null&&f.logo_url||d.image_url),g+=`<div style="position:absolute;left:${I}px;top:${S}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${B}">
        <div style="position:relative">${X}</div>
      </div>`}else{const v=B.replace(/\d+/,"");g+=`<div style="position:absolute;left:${I}px;top:${S}px;width:${u}px;height:${k}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${B}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${v}</span>
      </div>`}}r.innerHTML=`
    <div style="position:relative;width:${x}px;height:${m}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${x} ${m}">${h}</svg>
      ${g}
    </div>`,r.querySelectorAll(".deck-slot-hit").forEach(B=>{B.addEventListener("click",()=>Pr(B.dataset.pos,e,t,o))})}function Fr(t,e,i){var d;const{openModal:o,closeModal:n}=i,r=new Set,a=(t.stadiumCards||[]).filter(l=>{const s=l.stadium_id||l.id;return r.has(s)?!1:(r.add(s),!0)});o("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:90px;text-align:center">
        <div style="width:85px;height:112px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${t.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:26px">🚫</span>
          <span style="font-size:10px;color:#666">Aucun</span>
        </div>
      </div>
      ${a.map(l=>{var x;const s=t.stadDefMap[l.stadium_id],p=((x=s==null?void 0:s.club)==null?void 0:x.logo_url)||(s==null?void 0:s.image_url)||(s!=null&&s.country_code?`https://flagsapi.com/${s.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),c=t.stadiumCardId===l.id,b=Kt((s==null?void 0:s.name)||"Stade",p,"+10⭐",{width:90});return`<div class="stad-choice" data-stad-id="${l.id}" style="cursor:pointer;position:relative;border-radius:8px;${c?"box-shadow:0 0 0 3px #4fc3f7":""}">
          ${b}
        </div>`}).join("")}
    </div>`),(d=document.getElementById("stad-none"))==null||d.addEventListener("click",()=>{t.stadiumCardId=null,n(),dt(e,t,i)}),document.querySelectorAll(".stad-choice").forEach(l=>{l.addEventListener("click",()=>{t.stadiumCardId=l.dataset.stadId,n(),dt(e,t,i)})})}async function Pr(t,e,i,o){var B,T,$,L,W;const{openModal:n,closeModal:r,navigate:a}=o,d=t.replace(/\d+/,""),l=(B=e.stadiumCards)==null?void 0:B.find(I=>I.id===e.stadiumCardId),s=l&&((T=e.stadDefMap)==null?void 0:T[l.stadium_id])||null,p=e.slots[t],c=p?e.playerCards.find(I=>I.id===p):null;($=c==null?void 0:c.player)==null||$.id;const b=new Set;Object.entries(e.slots).forEach(([I,S])=>{var D;if(I===t||!S)return;const v=e.playerCards.find(X=>X.id===S);(D=v==null?void 0:v.player)!=null&&D.id&&b.add(v.player.id)}),e.subs.forEach(I=>{var v;const S=e.playerCards.find(D=>D.id===I);(v=S==null?void 0:S.player)!=null&&v.id&&b.add(S.player.id)});const x=new Set,m=e.playerCards.filter(I=>{const S=I.player;return!(S.job===d||S.job2===d)||b.has(S.id)||x.has(S.id)?!1:(x.add(S.id),!0)}),h=(Mi(e.formation)||gi[e.formation]||[]).filter(([I,S])=>I===t||S===t).map(([I,S])=>I===t?S:I).map(I=>{var S;return(S=e.playerCards.find(v=>v.id===e.slots[I]))==null?void 0:S.player}).filter(Boolean);function g(I){const S=I.player,v=I.evolution_bonus||0,D=(d==="GK"?S.note_g:d==="DEF"?S.note_d:d==="MIL"?S.note_m:S.note_a)+(d===S.job||d===S.job2?v:0);let X=0;for(const F of h){const ae=jt(S,F);ae==="#00ff88"?X+=10:ae==="#FFD700"&&(X+=5)}if(s){const F=s.club_id&&String(S.club_id)===String(s.club_id),ae=s.country_code&&String(S.country_code)===String(s.country_code);(F||ae)&&(X+=10)}return{total:D+X,note:D,bonus:X}}const k=new Map;if(m.forEach(I=>k.set(I.id,g(I))),m.sort((I,S)=>{const v=k.get(S.id).total-k.get(I.id).total;return v!==0?v:k.get(S.id).note-k.get(I.id).note}),!e._allPlayers){const{data:I}=await y.from("players").select("id, firstname, surname_real, country_code, club_id, job, job2, note_g, note_d, note_m, note_a, rarity, face, clubs(encoded_name, logo_url)").eq("is_active",!0);e._allPlayers=I||[]}const w=new Set(e.playerCards.map(I=>{var S;return(S=I.player)==null?void 0:S.id}).filter(Boolean)),j=e._allPlayers.filter(I=>(I.job===d||I.job2===d)&&!b.has(I.id)).map(I=>{const S=(d==="GK"?I.note_g:d==="DEF"?I.note_d:d==="MIL"?I.note_m:I.note_a)||0;let v=0;for(const D of h){const X=jt(I,D);X==="#00ff88"?v+=10:X==="#FFD700"&&(v+=5)}if(s){const D=s.club_id&&String(I.club_id)===String(s.club_id),X=s.country_code&&String(I.country_code)===String(s.country_code);(D||X)&&(v+=10)}return{p:I,total:S+v,note:S,bonus:v,owned:w.has(I.id)}}).sort((I,S)=>S.total-I.total||S.note-I.note).slice(0,10),f=j.length?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+j.map(I=>{const S={...I.p,_evolution_bonus:0},v=I.bonus>0?`<div style="position:absolute;top:2px;left:2px;z-index:6;background:#1A6B3C;color:#fff;font-size:9px;font-weight:900;padding:1px 5px;border-radius:8px">+${I.bonus}</div>`:"",D=I.owned?e.playerCards.find(X=>{var F;return((F=X.player)==null?void 0:F.id)===I.p.id}):null;return`<div style="position:relative">
      ${v}
      <div class="${I.owned?"player-option":""}" ${D?`data-card-id="${D.id}"`:""}
        style="cursor:${I.owned?"pointer":"default"};${I.owned?"":"filter:grayscale(1) brightness(.6)"}">
        ${qe(S,{width:100,showStad:!0,stadDef:s,role:d})}
      </div>
      ${I.owned?"":`<button class="goto-market" data-player-name="${(I.p.surname_real||"").replace(/"/g,"&quot;")}"
        style="position:absolute;left:50%;bottom:4px;transform:translateX(-50%);z-index:7;white-space:nowrap;
        background:linear-gradient(135deg,#f6d365,#D4A017);color:#1a1a1a;border:none;border-radius:999px;
        font-size:9px;font-weight:900;padding:3px 8px;cursor:pointer">🛒 Mercato</button>`}
    </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.</div>';n(`Choisir ${d} — ${t}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${e.slots[t]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      <div style="display:flex;gap:6px;border-bottom:1px solid var(--tile-border);padding-bottom:8px;margin-bottom:4px">
        <button type="button" class="sel-tab" data-tab="mine" style="flex:1;padding:7px;border-radius:8px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:12.5px;font-weight:700;cursor:pointer">🎴 Mes cartes (${m.length})</button>
        <button type="button" class="sel-tab" data-tab="top" style="flex:1;padding:7px;border-radius:8px;border:1.5px solid var(--tile-border);background:transparent;color:var(--tile-fg-dim);font-size:12.5px;font-weight:700;cursor:pointer">🏆 Top 10 idéal</button>
      </div>
      <div class="sel-pane" data-pane="top" style="display:none">${f}</div>
      <div class="sel-pane" data-pane="mine">
      ${m.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+m.map(I=>{const S={...I.player,_evolution_bonus:I.evolution_bonus||0},v=k.get(I.id),D=v&&v.bonus>0?`<div style="position:absolute;top:2px;left:2px;z-index:5;background:#1A6B3C;color:#fff;font-size:9px;font-weight:900;padding:1px 5px;border-radius:8px" title="Bonus liens + stade à ce poste">+${v.bonus}</div>`:"";return`<div class="player-option" data-card-id="${I.id}" style="cursor:pointer;position:relative">
          ${D}
          ${qe(S,{width:100,showStad:!0,stadDef:s,role:d})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
      </div>
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(L=document.getElementById("close-selector"))==null||L.addEventListener("click",r),document.querySelectorAll(".sel-tab").forEach(I=>{I.addEventListener("click",()=>{document.querySelectorAll(".sel-tab").forEach(S=>{const v=S===I;S.style.background=v?"var(--green)":"transparent",S.style.borderColor=v?"var(--green)":"var(--tile-border)",S.style.color=v?"#fff":"var(--tile-fg-dim)"}),document.querySelectorAll(".sel-pane").forEach(S=>{S.style.display=S.dataset.pane===I.dataset.tab?"block":"none"})})}),document.querySelectorAll(".goto-market").forEach(I=>{I.addEventListener("click",S=>{S.stopPropagation(),r(),a("market",{search:I.dataset.playerName})})}),(W=document.getElementById("remove-player"))==null||W.addEventListener("click",()=>{delete e.slots[t],r(),dt(i,e,o)}),document.querySelectorAll(".player-option").forEach(I=>{I.addEventListener("click",()=>{e.slots[t]=I.dataset.cardId,r(),dt(i,e,o)})})}function Rr(t,e,i){var p,c,b;const{openModal:o,closeModal:n}=i,r=(p=t.stadiumCards)==null?void 0:p.find(x=>x.id===t.stadiumCardId),a=r&&((c=t.stadDefMap)==null?void 0:c[r.stadium_id])||null,d=new Set;Object.keys(t.slots).forEach(x=>{var h;const m=t.slots[x];if(!m)return;const u=t.playerCards.find(g=>g.id===m);(h=u==null?void 0:u.player)!=null&&h.id&&d.add(u.player.id)}),t.subs.forEach(x=>{var u;const m=t.playerCards.find(h=>h.id===x);(u=m==null?void 0:m.player)!=null&&u.id&&d.add(m.player.id)});const l=new Set,s=t.playerCards.filter(x=>{var m,u,h;return d.has((m=x.player)==null?void 0:m.id)||l.has((u=x.player)==null?void 0:u.id)?!1:(l.add((h=x.player)==null?void 0:h.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+s.map(x=>{const m={...x.player,_evolution_bonus:x.evolution_bonus||0};return`<div class="player-option" data-card-id="${x.id}" style="cursor:pointer">
          ${qe(m,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(b=document.getElementById("close-sub-selector"))==null||b.addEventListener("click",n),document.querySelectorAll(".player-option").forEach(x=>{x.addEventListener("click",()=>{t.subs.push(x.dataset.cardId),n(),dt(e,t,i)})})}async function yn(t){const e=t.formationCards.find(n=>n.formation===t.formation),i=(e==null?void 0:e.id)||t.formationCardId;await y.from("decks").update({formation:t.formation,formation_card_id:i||null,stadium_card_id:t.stadiumCardId||null}).eq("id",t.deckId),await y.from("deck_cards").delete().eq("deck_id",t.deckId);const o=[];return Object.entries(t.slots).forEach(([n,r],a)=>{o.push({deck_id:t.deckId,card_id:r,position:n,is_starter:!0,slot_order:a})}),t.subs.forEach((n,r)=>{o.push({deck_id:t.deckId,card_id:n,position:`SUB${r+1}`,is_starter:!1,slot_order:100+r})}),o.length>0?await y.from("deck_cards").insert(o):{error:null}}let Wi=null;function Nr(t,e){const{toast:i}=e;clearTimeout(Wi),document.querySelectorAll(".autosave-indicator").forEach(n=>{n.textContent="⏳ Enregistrement...",n.style.opacity="1",n.style.color=""}),Wi=setTimeout(async()=>{const{error:n}=await yn(t),r=document.querySelectorAll(".autosave-indicator");if(n){r.forEach(a=>{a.textContent="⚠️ Erreur d'enregistrement",a.style.color="#ff6b6b"}),i(n.message,"error");return}r.forEach(a=>{a.textContent="✅ Enregistré",a.style.color="",setTimeout(()=>{a.style.opacity="0"},1500)})},600)}async function Gr(t,e){const{toast:i,navigate:o}=e;clearTimeout(Wi);const{error:n}=await yn(t);if(n){i(n.message,"error");return}i("Deck enregistré ✅","success"),o("decks")}function Fo(t){const e=Li[t]||Li["4-4-2"],i=["GK1"];for(let o=1;o<=e.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=e.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=e.ATT;o++)i.push(`ATT${o}`);return i}function Tt(){return Math.min(window.innerWidth-40,860)}function Ut(){return Math.round(Tt()*1.1)}function hn(t){var n,r;if(!t)return null;const e=t._line||t.job||"MIL",i=e==="GK"?t.note_g||0:e==="DEF"?t.note_d||0:e==="MIL"?t.note_m||0:t.note_a||0,o=t.stadiumBonus?10:0;return{name:t.name,firstname:t.firstname||"",note:i+(t.boost||0)+o,note_g:t.note_g||0,note_d:t.note_d||0,note_m:t.note_m||0,note_a:t.note_a||0,_evolution_bonus:0,stadiumBonus:t.stadiumBonus||!1,boost:t.boost||0,job:t.job,job2:t.job2||null,_line:t._line||t.job,_col:t._col,country_code:t.country_code,club_id:t.club_id,rarity:t.rarity,clubName:t.clubName||((n=t.clubs)==null?void 0:n.encoded_name)||null,clubLogo:t.clubLogo||((r=t.clubs)==null?void 0:r.logo_url)||null,face:t.face||null,portrait:Ct(t)}}function Or(t,e,i,o="Adversaire"){en("/sounds/match-opening.mp3",.3);const n=Tt(),r=Ut();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${o}</div>
      
      <div style="width:100%;max-width:${n}px;margin:0 auto">
        ${io(t,e,null,[],n,r)}
      </div>
    </div>`}function vn(t){var r,a,d;if(!t)return"";const e=l=>l?qe({...l,_evolution_bonus:0},{width:52,role:l._line||l.job,showStad:!!l.stadiumBonus,extraNote:l.boost||0}):"",o={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[t.type]||"📋";return`
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
    </div>`}function Ze(t,e,i,o,n){ao("/sounds/goal.mp3",.7);const r=document.getElementById("goal-anim-overlay");r&&r.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
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
      }`,document.head.appendChild(l)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),n==null||n()},400)},1800)}function wn(t,e,i){const o=document.getElementById("sub-anim-overlay");o&&o.remove();const n=document.createElement("div");n.id="sub-anim-overlay",n.style.cssText=`
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
    </div>`,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity 0.4s",setTimeout(()=>{n.remove(),i==null||i()},400)},1600)}function St(t,e="rgba(0,0,0,0.85)",i=2200){const o=document.getElementById("game-toast");o&&o.remove();const n=document.createElement("div");if(n.id="game-toast",n.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${e};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,n.textContent=t,!document.getElementById("game-toast-style")){const r=document.createElement("style");r.id="game-toast-style",r.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(r)}document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity 0.3s",setTimeout(()=>n.remove(),300)},i)}function _n(t,e){const i=qt(t,"MIL"),o=t.stadiumBonus||e&&(e.club_id&&String(t.club_id)===String(e.club_id)||e.country_code&&t.country_code===e.country_code)?10:0;return i+o}function vt(t,e){return t.reduce((i,o)=>i+_n(o,e),0)}function wt(t){let e=0;for(let i=0;i<t.length-1;i++){const o=jt(t[i],t[i+1]);o==="#00ff88"?e+=10:o==="#FFD700"&&(e+=5)}return e}function Ii(t,e,i,o,n){return`<div id="duel-row-${o}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${e}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${t.map((r,a)=>{const d=a<t.length-1?jt(r,t[a+1]):null,l=!d||d==="#ff3333"||d==="#cc2222",s=d==="#00ff88"?"+10":d==="#FFD700"?"+5":"";return _n(r,n),r.stadiumBonus||n&&(n.club_id&&String(r.club_id)===String(n.club_id)||n.country_code&&(r.country_code,n.country_code)),`
          <div class="duel-card duel-card-${o}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${qe({...r,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:n,role:"MIL",extraNote:r.boost||0})}
          </div>
          ${a<t.length-1?`<div class="duel-link duel-link-${o}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${l?"rgba(255,255,255,0.12)":d};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${l?"none":`0 0 8px ${d}`}">
            ${s?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${d}">${s}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${o}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${vt(t,n)} + ${wt(t)} liens = <b style="color:#fff">${vt(t,n)+wt(t)}</b>
      </div>
    </div>`}async function Hr(t,e){const{state:i}=e,o=i.params||{},n=o.matchMode||"vs_ai_easy",r=n==="solo",a=n==="ranked_ai",d=o.soloLevel||1,l=n.replace("vs_ai_",""),s=n;let p=null;if(r){const{data:m}=await y.from("solo_levels").select("*").eq("level_number",d).maybeSingle();p=m||{level_number:d,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500}}const c=o.rankedData||null,b=o.presetSetup||null;async function x({deckId:m,formation:u,starters:h,subsRaw:g,gcCardsEnriched:k,gcDefs:w,stadiumDef:j}){try{let f=Ui(h,u);j&&(f=$i(f,j),Ei(g,j));let B=null;if(a){const I=Kr(f)+Vr(f)*10,{jaune:S,vert:v}=Yr(f,u),D=[.9,1,1.2],X=D[Math.floor(Math.random()*D.length)],F=Math.max(11,Math.round(I*X));B={target_note_avg:Math.max(1,Math.round(F/11)),target_total_note:F,nb_liens_jaune:S,nb_liens_vert:v,nb_joueurs_stade:j?3:0,_variance:X}}const T=p&&{...p,target_total_note:Math.max(11,Math.round((Number(p.target_note_avg)||10)*11))},$=r?await Ro(u,T):a?await Ro(u,B):await Ur(u,l),L=$.lines||$,W=async I=>{try{const S=s==="vs_ai_club"||s==="solo"||s==="ranked_ai"?"club":s,{data:v,error:D}=await y.from("matches").insert({home_id:i.profile.id,away_id:null,mode:S,home_deck_id:m,status:"in_progress"}).select().single();if(D){console.error("[MatchIA] Erreur création match:",D),Fi(t,"⚠️","Impossible de créer le match ("+D.message+").","Retour",()=>e.navigate("home"));return}const X=$.stadiumDef||null;X&&L&&($i(L,X),Ei($.subs||[],X));const F={gcDefs:w||[],matchId:v==null?void 0:v.id,mode:s,difficulty:l,formation:u,isSolo:r,soloLevel:d,soloLevelConfig:p,isRankedAI:a,rankedAIData:c,homeTeam:f,aiTeam:L,homeSubs:g,subsUsed:0,maxSubs:Math.min(g.length,3),aiSubs:$.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min(($.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:$.gcCards||[],aiUsedGc:[],aiGcTarget:$.gcTarget||2,aiStadiumDef:X,homeScore:0,aiScore:0,gcCards:I,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Wr(t,F,e)}catch(S){console.error("[MatchIA] Exception launchMatch:",S),Fi(t,"⚠️","Erreur au lancement du match : "+S.message,"Retour",()=>e.navigate("home"))}};if(a&&b){W(b.gcCardsEnriched||[]);return}if(!k.length){W([]);return}ji(t,k,W)}catch(f){console.error("[MatchIA] Exception setup:",f),Fi(t,"⚠️","Erreur de préparation du match : "+f.message,"Retour",()=>e.navigate("home"))}}b?await x(b):await Ci(t,e,n,x)}async function Ur(t,e){var h;const{data:i}=await y.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:kn(t),subs:[],gcCards:[],stadiumDef:null};const o=Vt[t]||Vt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},r=new Set;function a(g,k,w){var j,f;return r.add(g.id),{cardId:"ai-"+g.id+"-"+w,id:g.id,firstname:g.firstname,name:g.surname_real,country_code:g.country_code,club_id:g.club_id,job:g.job,job2:g.job2,note_g:Number(g.note_g)||0,note_d:Number(g.note_d)||0,note_m:Number(g.note_m)||0,note_a:Number(g.note_a)||0,rarity:g.rarity,skin:g.skin,hair:g.hair,hair_length:g.hair_length,face:g.face,clubName:((j=g.clubs)==null?void 0:j.encoded_name)||null,clubLogo:((f=g.clubs)==null?void 0:f.logo_url)||null,boost:0,used:!1,_line:k}}for(const g of["GK","DEF","MIL","ATT"]){const k=i.filter(T=>T.job===g&&!r.has(T.id)),w=i.filter(T=>T.job!==g&&!r.has(T.id)),j=[...k,...w],f=[];for(let T=0;T<o[g];T++){const $=j[T];$&&f.push(a($,g,T))}const B=Lt(f.length);f.forEach((T,$)=>{T._col=B[$]}),n[g]=f}const l=i.filter(g=>!r.has(g.id)).slice(0,5).map((g,k)=>a(g,g.job,100+k)),{data:s}=await y.from("gc_definitions").select("*").eq("is_active",!0),c=[...s||[]].sort(()=>Math.random()-.5).slice(0,3).map((g,k)=>({id:"ai-gc-"+k,gc_type:g.name,name:g.name,icon:"⚡",effect_type:g.effect_type,effect_params:g.effect_params||{}})),b=Object.values(n).flat(),x={};b.forEach(g=>{g.club_id&&(x[g.club_id]=(x[g.club_id]||0)+1)});const m=(h=Object.entries(x).sort((g,k)=>k[1]-g[1])[0])==null?void 0:h[0];let u=null;if(m){const{data:g}=await y.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",m).single();g&&(u={club_id:g.id,country_code:null,name:g.encoded_name+" Stadium",club:{encoded_name:g.encoded_name,logo_url:g.logo_url}})}return{lines:n,subs:l,gcCards:c,stadiumDef:u}}function Kr(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{const n=o._line||i,r=Number(n==="GK"?o.note_g:n==="DEF"?o.note_d:n==="MIL"?o.note_m:o.note_a)||0;e+=r+(o.boost||0)});return e}function Vr(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{o!=null&&o.stadiumBonus&&e++});return e}function Yr(t,e){const i={};for(const a of["GK","DEF","MIL","ATT"])(t[a]||[]).forEach((d,l)=>{i[`${a}${l+1}`]=d});const o=Mi(e)||gi[e]||[];let n=0,r=0;for(const[a,d]of o){const l=i[a],s=i[d];if(!l||!s)continue;const p=jt(l,s);p==="#00ff88"?r++:p==="#FFD700"&&n++}return{jaune:n,vert:r}}function Po(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function ii(t,e,i){if(i<=0||!t.length)return[];const o=[...t].sort((n,r)=>Math.abs(Po(n)-e)-Math.abs(Po(r)-e));return o.slice(0,Math.min(i,o.length))}async function Ro(t,e){var D,X;const i=Number(e==null?void 0:e.target_note_avg)||10,o=Number(e==null?void 0:e.nb_liens_jaune)||0,n=Number(e==null?void 0:e.nb_liens_vert)||0,r=Number(e==null?void 0:e.nb_joueurs_stade)||0,{data:a}=await y.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url,country_code)").eq("is_active",!0).limit(300);if(!a||a.length<16)return{lines:kn(t),subs:[],gcCards:[],stadiumDef:null};const d={};a.forEach(F=>{F.club_id&&(d[F.club_id]=(d[F.club_id]||0)+1)});const l=((D=Object.entries(d).sort((F,ae)=>ae[1]-F[1])[0])==null?void 0:D[0])||null,s=l?a.filter(F=>F.club_id===l):[],p=((X=s[0])==null?void 0:X.country_code)||null,c=p?a.filter(F=>F.country_code===p&&F.club_id!==l):[],b=Math.min(s.length,Math.max(2,n+1),16),x=Math.min(c.length,Math.max(0,o),16-b),m=[],u=new Set;ii(s,i,b).forEach(F=>{m.push(F),u.add(F.id)}),ii(c,i,x).forEach(F=>{m.push(F),u.add(F.id)});const h=Math.max(0,16-m.length),g=a.filter(F=>!u.has(F.id));ii(g,i,h).forEach(F=>{m.push(F),u.add(F.id)});const k=Vt[t]||Vt["4-4-2"],w={GK:[],DEF:[],MIL:[],ATT:[]},j=new Set;function f(F,ae,xe){var C,E;return j.add(F.id),{cardId:"ai-"+F.id+"-"+xe,id:F.id,firstname:F.firstname,name:F.surname_real,country_code:F.country_code,club_id:F.club_id,job:F.job,job2:F.job2,note_g:Number(F.note_g)||0,note_d:Number(F.note_d)||0,note_m:Number(F.note_m)||0,note_a:Number(F.note_a)||0,rarity:F.rarity,skin:F.skin,hair:F.hair,hair_length:F.hair_length,face:F.face,clubName:((C=F.clubs)==null?void 0:C.encoded_name)||null,clubLogo:((E=F.clubs)==null?void 0:E.logo_url)||null,boost:0,used:!1,_line:ae}}for(const F of["GK","DEF","MIL","ATT"]){let ae=m.filter(K=>K.job===F&&!j.has(K.id));if(F==="GK"&&!ae.length){const K=a.filter(te=>te.job==="GK"&&!j.has(te.id));K.length&&(ae=ii(K,i,1))}const xe=m.filter(K=>K.job!==F&&!j.has(K.id)),C=[...ae,...xe],E=[];for(let K=0;K<k[F];K++){const te=C[K];te&&E.push(f(te,F,K))}const Q=Lt(E.length);E.forEach((K,te)=>{K._col=Q[te]}),w[F]=E}let B=m.filter(F=>!j.has(F.id));if(B.length<5){const F=a.filter(ae=>!j.has(ae.id)&&!B.some(xe=>xe.id===ae.id));B=B.concat(ii(F,i,5-B.length))}const T=B.slice(0,5).map((F,ae)=>f(F,F.job,100+ae)),$=Number(e==null?void 0:e.target_total_note)||0;if($>0){const F={GK:"note_g",DEF:"note_d",MIL:"note_m",ATT:"note_a"},ae=[];for(const C of["GK","DEF","MIL","ATT"])(w[C]||[]).forEach(E=>ae.push({p:E,key:F[C]}));const xe=ae.reduce((C,E)=>C+(Number(E.p[E.key])||0),0);if(xe>0&&ae.length){const C=$/xe;ae.forEach(K=>{K.p[K.key]=Math.max(1,Math.round((Number(K.p[K.key])||0)*C))});let E=$-ae.reduce((K,te)=>K+te.p[te.key],0),Q=0;for(;E!==0&&Q++<500;){const K=ae[Math.floor(Math.random()*ae.length)];E>0?(K.p[K.key]++,E--):K.p[K.key]>1&&(K.p[K.key]--,E++)}T.forEach(K=>{const te=F[K.job]||"note_m";K[te]=Math.max(1,Math.round((Number(K[te])||0)*C))})}}const{data:L}=await y.from("gc_definitions").select("*").eq("is_active",!0),I=[...L||[]].sort(()=>Math.random()-.5).slice(0,3).map((F,ae)=>({id:"ai-gc-"+ae,gc_type:F.name,name:F.name,icon:"⚡",effect_type:F.effect_type,effect_params:F.effect_params||{}}));let S=null;if(r>0&&l){const{data:F}=await y.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",l).single();F&&(S={club_id:F.id,country_code:null,name:F.encoded_name+" Stadium",club:{encoded_name:F.encoded_name,logo_url:F.logo_url}})}const v=1+Math.floor(Math.random()*3);return{lines:w,subs:T,gcCards:I,stadiumDef:S,gcTarget:v}}function kn(t){const e=Vt[t]||Vt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let n=0;for(const r of["GK","DEF","MIL","ATT"]){const a=[];for(let l=0;l<e[r];l++){const s=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+n,id:"fake-"+n,firstname:"IA",name:o[n%o.length],country_code:"XX",club_id:null,job:r,job2:null,note_g:r==="GK"?s:2,note_d:r==="DEF"?s:2,note_m:r==="MIL"?s:2,note_a:r==="ATT"?s:2,rarity:"normal",boost:0,used:!1,_line:r}),n++}const d=Lt(a.length);a.forEach((l,s)=>{l._col=d[s]}),i[r]=a}return i}function Wr(t,e,i){var n;en("/sounds/match-opening.mp3",.3);const o=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const r=t.querySelector(".opponent-preview-wrap"),a=t.querySelector("#opponent-swipe-zone");if(!r||!a)return;const d=a.clientWidth>=900,l=Math.max(200,a.clientHeight-(d?8:40)),s=Math.max(200,a.clientWidth-(d?8:16)),p=d?null:Math.round(Math.max(44,Math.round(s*.168))*.55);r.innerHTML=ci(e.aiTeam,e.formation,null,[],s,l,[],p),r.style.cssText=`width:${s}px;height:${l}px;overflow:hidden;flex-shrink:0`;const c=r.querySelector("svg");c&&(c.style.cssText="display:block;width:100%;height:100%",c.setAttribute("preserveAspectRatio",d?"xMidYMid meet":"none"))})),setTimeout(()=>Jr(t,e,i),5e3)}const Ve=t=>hn(t);function Jr(t,e,i){const o=e.homeTeam.MIL||[],n=e.aiTeam.MIL||[],r=e.stadiumDef||null,a=e.aiStadiumDef||null,d=vt(o,r)+wt(o),l=vt(n,a)+wt(n),s=d>=l;t.innerHTML=`
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

    ${Ii(o,e.clubName,"#D4A017","home",r)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${Ii(n,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const p=()=>{const m=(u,h)=>t.querySelectorAll(u).forEach((g,k)=>{setTimeout(()=>{g.style.opacity="1",g.style.transform="translateY(0) scale(1)"},h+k*90)});m(".duel-card-home",150),m(".duel-card-ai",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((u,h)=>{setTimeout(()=>{u.style.opacity="1"},h*70)}),900),setTimeout(()=>{const u=t.querySelector("#vs-label");u&&(u.style.opacity="1",u.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(h=>h.style.opacity="1")},1250),setTimeout(()=>{c("score-home",d,800),c("score-ai",l,800)},1500)};function c(m,u,h){const g=document.getElementById(m);if(!g)return;const k=performance.now(),w=j=>{const f=Math.min(1,(j-k)/h);g.textContent=Math.round(u*(1-Math.pow(1-f,3))),f<1?requestAnimationFrame(w):g.textContent=u};requestAnimationFrame(w)}requestAnimationFrame(p),e.attacker=s?"home":"ai";const b=s?Jo():null;s&&(e.boostCard={value:b}),e.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(m=>Ve(m)),aiPlayers:n.map(m=>Ve(m)),homeTotal:d,aiTotal:l,text:`Duel milieu : ${e.clubName} ${d} – ${l} IA → ${s?e.clubName+" attaque":"IA attaque"}`});const x=()=>{e.phase=e.attacker==="home"?"attack":"ai-attack",Ae(t,e,i),e.attacker==="ai"&&setTimeout(()=>bo(t,e,i),800)};setTimeout(()=>{const m=document.getElementById("score-home"),u=document.getElementById("score-ai"),h=document.getElementById(s?"duel-row-home":"duel-row-ai"),g=document.getElementById(s?"duel-row-ai":"duel-row-home"),k=s?m:u,w=s?u:m;k&&(k.style.fontSize="80px",k.style.color=s?"#FFD700":"#ff6b6b",k.style.animation="duelPulse .5s ease"+(s?", duelGlow 1.5s ease infinite .5s":"")),w&&(w.style.opacity="0.25"),setTimeout(()=>{h&&(h.style.transformOrigin="center",h.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",h.style.zIndex="5"),setTimeout(()=>{var f;const j=document.getElementById("duel-shock");if(j){const B=(f=g||h)==null?void 0:f.getBoundingClientRect(),T=t.querySelector(".match-screen").getBoundingClientRect();B&&(j.style.top=B.top-T.top+B.height/2+"px"),j.style.animation="shockwave .5s ease-out forwards"}g&&(g.style.transformOrigin="center",g.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var f;const j=document.getElementById("duel-finale");j&&(j.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${s?`⚽ ${e.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${s?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${b}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,j.style.transition="opacity .45s ease",j.style.opacity="1",j.style.pointerEvents="auto",(f=document.getElementById("start-match-btn"))==null||f.addEventListener("click",x))},600)},700)},2800)}function Ae(t,e,i){var W,I,S,v,D,X,F,ae,xe;const o=e.selected.map(C=>C.cardId),n=e.usedSubIds||[],r=e.homeSubs.filter(C=>!n.includes(C.cardId)),d=Object.values(e.homeTeam).flat().filter(C=>C.used).length>0&&r.length>0&&e.subsUsed<e.maxSubs,l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(C=>!C.used),s=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(C=>!C.used),p=Yt(e.aiTeam),c=l.length===0&&s.length===0&&!p,b=(e.homeTeam.DEF||[]).filter(C=>!C.used),x=(e.homeTeam.GK||[]).filter(C=>!C.used);let m=[];e.phase==="attack"&&l.length===0&&(p?(m=b.map(C=>C.cardId),b.length===0&&(m=m.concat(x.map(C=>C.cardId)))):c&&(m=[...b,...x].map(C=>C.cardId))),e.log[e.log.length-1];const u=e.phase==="ai-attack"||e.phase==="ai-defense",h=e.phase==="attack",g=e.phase==="defense",k=e.phase==="finished",j=(e.homeSubs||[]).filter(C=>!(e.usedSubIds||[]).includes(C.cardId)).length>0&&e.subsUsed<e.maxSubs,f=h&&l.length===0&&m.length===0&&!j,B=e.gcCards.filter(C=>!e.usedGc.includes(C.id)),T=e.boostCard&&!e.boostUsed;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.innerHTML=`
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
      ${(()=>{if(e.phase==="defense"&&e.pendingAttack){const E=e.pendingAttack;let Q="";if(e.selected.length>0){const K=e.selected.map(ue=>({...(e.homeTeam[ue._role]||[]).find(be=>be.cardId===ue.cardId)||ue,_line:ue._role})),te=pi(K,e.modifiers.home,e.formation);Q=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${e.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${Qe(K.map(ue=>({...ue,used:!1})),"#3a7bd5",te.total,"defense",e.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${Qe((E.players||[]).map(K=>({...K,used:!1})),"#ff6b6b",E.total,"attack",e.formation)}</div>
            ${Q}
          </div>`}if(e.phase==="ai-defense"&&e.pendingAttack){const E=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${Qe((E.players||[]).map(Q=>({...Q,used:!1})),"#00ff88",E.total,"attack",e.formation)}</div>
          </div>`}if(e.phase==="attack"&&e.selected.length>0){const E=e.selected.map(K=>{const te=(e.homeTeam[K._role]||[]).find(ve=>ve.cardId===K.cardId)||K,ue=["GK","DEF"].includes(K._role);return{...te,_line:K._role,...ue?{note_a:Math.max(1,Number(te.note_a)||0)}:{}}}),Q=ui(E,e.modifiers.home,e.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${e.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(E.map(K=>({...K,used:!1})),"#FFD700",Q.total,"attack",e.formation)}</div>
          </div>`}const C=e.log[e.log.length-1];return C?'<div style="padding:2px 4px">'+vn(C)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${e.log.length})
    </button>

    ${(()=>{const C=window.innerWidth>=700,E=(he,me,ke)=>{var R,Z;const P=(e.gcDefs||[]).find(ce=>ce.name===he.gc_type),A=(P==null?void 0:P.name)||he.gc_type,H=(P==null?void 0:P.effect)||((R=Oe[he.gc_type])==null?void 0:R.desc)||"",V=P!=null&&P.image_url?`/icons/${P.image_url}`:null,Y=((Z=Oe[he.gc_type])==null?void 0:Z.icon)||"⚡";return`<div class="gc-mini" data-gc-id="${he.id}" data-gc-type="${he.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${it(A,V,Y,H,{width:me})}
        </div>`},Q=(he,me)=>{var ke;return`<div id="boost-card"
          style="box-sizing:border-box;width:${he}px;height:${me}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(me*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(me*.2)}px">⚡</div>
            <div style="font-size:${Math.round(me*.09)}px;color:#000;font-weight:900">+${(ke=e.boostCard)==null?void 0:ke.value}</div>
          </div>`},K=(he,me)=>me?Q(95,162):E(he,95),te=(he,me)=>me?Q(53,90):E(he,53),ue=C?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ve=k?`<button id="btn-results" style="${ue};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:u?`<div style="${ue};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:f?`<button id="btn-pass" style="${ue};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:h?`<button id="btn-action" style="${ue};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${e.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${ue};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${e.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${ue};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,be=h||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${e.selected.length}/3 sélectionné(s)</div>`:"",je=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${C?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${r.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':r.map(he=>`<div class="sub-btn-col" data-sub-id="${he.cardId}" style="cursor:pointer;flex-shrink:0">${$t(he,76,100)}</div>`).join("")}
      </div>`,Be=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ci(e.homeTeam,e.formation,e.phase,o,C?1300:Tt(),C?600:Ut(),m)}
        </div>
      </div>`;return C?`
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
            ${B.map(he=>K(he,!1)).join("")}
            ${T?K(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ci(e.homeTeam,e.formation,e.phase,o,C?1300:Tt(),C?600:Ut(),m)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${B.map(he=>te(he,!1)).join("")}
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
      ${e.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...e.log].reverse().map(C=>{var E,Q,K;if(C.type==="duel"){const te=C.isGoal,ue=C.homeScored?"#FFD700":te?"#ff6b6b":"rgba(255,255,255,0.3)",ve=C.homeScored?"⚽ BUT !":te?"⚽ BUT IA !":(E=C.homePlayers)!=null&&E.length?"⚔️ Attaque":"🛡️ Défense",be=(C.homeTotal??0)>=(C.aiTotal??0);return`<div style="padding:8px;border-radius:8px;background:${te?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${ue};margin-bottom:4px">
                <div style="font-size:9px;color:${ue};letter-spacing:1px;margin-bottom:6px;font-weight:700;text-transform:uppercase;text-align:center">${ve}</div>
                <div style="display:flex;align-items:center;justify-content:center;gap:10px">
                  ${(Q=C.aiPlayers)!=null&&Q.length?`<div style="flex:1;display:flex;justify-content:flex-end;opacity:0.75">${Qe(C.aiPlayers,"#ff6b6b",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                  <div style="flex-shrink:0;display:flex;align-items:center;gap:6px">
                    <span style="font-size:16px;font-weight:900;color:${be?"#e03030":"#22c55e"}">${C.aiTotal??"–"}</span>
                    <span style="font-size:9px;color:rgba(255,255,255,0.3)">VS</span>
                    <span style="font-size:16px;font-weight:900;color:${be?"#22c55e":"#e03030"}">${C.homeTotal??"–"}</span>
                  </div>
                  ${(K=C.homePlayers)!=null&&K.length?`<div style="flex:1;display:flex;justify-content:flex-start">${Qe(C.homePlayers,"rgba(255,255,255,0.7)",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                </div>
              </div>`}return C.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${C.outPlayer?$t({...C.outPlayer,used:!0,_line:C.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${C.inPlayer?$t({...C.inPlayer,_line:C.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:C.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${C.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${C.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function $(){const C=t.querySelector(".match-screen");if(!C)return;const E=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);C.style.bottom="auto",C.style.height=E+"px",C.style.minHeight=E+"px",C.style.maxHeight=E+"px",C.style.overflow="hidden";const Q=t.querySelector("#mobile-action-bar"),K=t.querySelector("#mobile-play-area");Q&&K&&(K.style.paddingBottom=Q.offsetHeight+"px")}if($(),setTimeout($,120),setTimeout($,400),setTimeout($,1e3),e._vvBound||(e._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",$),window.visualViewport.addEventListener("scroll",$)),window.addEventListener("resize",$)),function(){const E=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!E)return;const Q=E.closest("#match-terrain-wrap");Q&&(Q.style.cssText="position:relative;width:100%;height:100%;padding:0"),E.removeAttribute("width"),E.removeAttribute("height"),E.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",E.setAttribute("preserveAspectRatio","xMidYMid meet")}(),e._resizeBound||(e._resizeBound=!0,window.addEventListener("resize",()=>{const C=t.querySelector(".terrain-wrapper svg");if(C){const E=C.closest("#match-terrain-wrap");E&&(E.style.cssText="position:relative;width:100%;height:100%;padding:0"),C.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),e.phase==="attack"||e.phase==="defense"){let C=!1,E=30;const Q=()=>document.getElementById("match-timer"),K=()=>{const te=Q();if(!te)return;const ue=String(Math.floor(E/60)).padStart(2,"0"),ve=String(E%60).padStart(2,"0");te.textContent=` ${ue}:${ve}`,te.style.color=C?"#ff2222":"#ff9500",te.style.fontWeight="900"};K(),e._timerInt=setInterval(()=>{if(E--,E<0)if(!C)C=!0,E=15,K(),tn("/sounds/timer-urgent.mp3",.6);else{clearInterval(e._timerInt),e._timerInt=null,Ke(),e.homeScore=0,e.aiScore=3;const te=document.createElement("div");te.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",te.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(te),setTimeout(()=>{te.remove(),_t(t,e,i)},2500)}else K()},1e3)}(W=document.getElementById("match-quit"))==null||W.addEventListener("click",()=>{ot(t),confirm("Abandonner ? Résultat : défaite 3-0")&&(e.homeScore=0,e.aiScore=3,_t(t,e,i))}),(I=document.getElementById("view-ai"))==null||I.addEventListener("click",()=>ca(e,i)),(S=document.getElementById("toggle-history"))==null||S.addEventListener("click",()=>{var C;(C=document.getElementById("match-history-panel"))==null||C.classList.add("open")}),(v=document.getElementById("close-history"))==null||v.addEventListener("click",()=>{var C;(C=document.getElementById("match-history-panel"))==null||C.classList.remove("open")}),(D=document.getElementById("btn-action"))==null||D.addEventListener("click",()=>{e.selected.length!==0&&(h?Qr(t,e,i):g&&Zr(t,e,i))}),(X=document.getElementById("btn-results"))==null||X.addEventListener("click",()=>_t(t,e,i)),(F=document.getElementById("btn-pass"))==null||F.addEventListener("click",()=>{if(e.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Ji(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),_t(t,e,i);return}e.phase="ai-attack",Ae(t,e,i),setTimeout(()=>bo(t,e,i),800)}),t.querySelectorAll(".match-slot-hit").forEach(C=>{C.addEventListener("click",()=>Xr(C,e,t,i))}),t.querySelectorAll(".match-used-hit").forEach(C=>{C.addEventListener("click",()=>Gi(t,e,i,null,C.dataset.cardId))}),t.querySelectorAll(".gc-mini").forEach(C=>{h?C.addEventListener("click",()=>aa(C.dataset.gcId,C.dataset.gcType,t,e,i)):(C.style.opacity="0.35",C.style.cursor="default",C.addEventListener("click",()=>St("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(ae=document.getElementById("boost-card"))==null||ae.addEventListener("click",()=>da(t,e,i)),t.querySelectorAll(".sub-btn-col").forEach(C=>{C.addEventListener("click",()=>Gi(t,e,i,C.dataset.subId))}),(xe=document.getElementById("sub-btn-main"))==null||xe.addEventListener("click",()=>Gi(t,e,i))}function Xr(t,e,i,o){const n=t.dataset.cardId,r=t.dataset.role,a=e.selected.findIndex(d=>d.cardId===n);if(a!==-1)e.selected.splice(a,1);else{if(e.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const d=(e.homeTeam[r]||[]).find(l=>l.cardId===n);if(d)e.selected.push({...d,_role:r,_line:r});else{const l=Object.keys(e.homeTeam||{}).map(s=>`${s}:${(e.homeTeam[s]||[]).length}`).join(" ");o.toast(`Sélection impossible (rôle="${r}" introuvable dans homeTeam[${l}])`,"error"),console.error("[MatchIA] toggleSelect: joueur introuvable",{cardId:n,role:r,homeTeam:e.homeTeam});return}}Ae(i,e,o)}function go(t,e,i){t.matchId&&y.from("matches").update({last_player_id:i}).eq("id",t.matchId).then(()=>{})}function Qr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),go(e,i,i.state.profile.id);const o=e.selected.map(r=>{const a=(e.homeTeam[r._role]||[]).find(l=>l.cardId===r.cardId)||r,d=["GK","DEF"].includes(r._role);return{...a,_line:r._role,...d?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),n=ui(o,e.modifiers.home,e.formation);e.pendingAttack={...n,players:[...o],side:"home"},e.selected.forEach(r=>{const a=(e.homeTeam[r._role]||[]).find(d=>d.cardId===r.cardId);a&&(a.used=!0)}),e.log.push({text:`⚔️ Vous attaquez : ${n.total} (base ${n.base}${n.links?` +${n.links} liens`:""}) — ${e.selected.map(r=>r.name).join(", ")}`,type:"info"}),e.selected=[],e.modifiers.home={},e.phase="ai-defense",Ae(t,e,i),setTimeout(()=>ra(t,e,i),1200)}function Zr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),go(e,i,i.state.profile.id);const o=e.stadiumDef||null,n=e.selected.map(l=>{const s=(e.homeTeam[l._role]||[]).find(c=>c.cardId===l.cardId)||l,p=s.stadiumBonus||o&&(o.club_id&&String(s.club_id)===String(o.club_id)||o.country_code&&s.country_code===o.country_code)||!1;return{...s,_line:l._role,stadiumBonus:p}}),r=pi(n,e.modifiers.home,e.formation);e.selected.forEach(l=>{const s=(e.homeTeam[l._role]||[]).find(p=>p.cardId===l.cardId);s&&(s.used=!0)});const a=oo(e.pendingAttack.total,r.total,e.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(e.pendingAttack.players||[]).map(l=>Ve(l)),homePlayers:e.selected.map(l=>{const s=(e.homeTeam[l._role]||[]).find(p=>p.cardId===l.cardId)||l;return Ve(s)}),homeTotal:r.total,aiTotal:e.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)d.text="🛡️ Bouclier ! But annulé.",e.log.push(d);else if(a.goal){e.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${e.pendingAttack.total} > ${r.total})`,e.log.push(d),e.selected=[],e.modifiers.home={},e.pendingAttack=null,Ae(t,e,i),Ze(d.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${r.total} ≥ ${e.pendingAttack.total})`,e.log.push(d);e.selected=[],e.modifiers.home={},e.pendingAttack=null,Mt(t,e,i,"home-attack")}function ea(t,e=()=>{}){if(t.aiSubsUsed>=t.aiMaxSubs)return e();const i=Object.values(t.aiTeam).flat().filter(s=>s.used);if(!i.length)return e();const o=(t.aiSubs||[]).filter(s=>!t.aiUsedSubIds.includes(s.cardId));if(!o.length)return e();const n=i[Math.floor(Math.random()*i.length)],r=o.find(s=>s.job===n.job)||o[0],a={...r,used:!1,_line:n._line,_col:n._col},d=t.aiTeam[n._line],l=d.findIndex(s=>s.cardId===n.cardId);l!==-1&&(d[l]=a),t.aiUsedSubIds.push(r.cardId),t.aiSubsUsed++,t.log.push({text:`🔄 IA : ${r.firstname} ${r.name} remplace ${n.firstname} ${n.name}`,type:"info"}),wn(n,a,e)}function ta(t,e){const i=t.effect_params||{},o=i.value||1,n=i.count||1,r=i.roles||[],a=i.target||"home";switch(t.effect_type){case"BOOST_STAT":{const l=Object.values(e.aiTeam).flat().filter(s=>!s.used&&(!r.length||r.includes(s._line))).sort(()=>Math.random()-.5).slice(0,n);l.forEach(s=>{s.boost=(s.boost||0)+o}),l.length&&e.log.push({text:`⚡ IA : +${o} sur ${l.length} joueur(s)`,type:"gc"});break}case"DEBUFF_STAT":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(p=>!p.used&&(!r.length||r.includes(p._line))).sort(()=>Math.random()-.5).slice(0,n);s.forEach(p=>{p.boost=(p.boost||0)-o}),s.length&&e.log.push({text:`🎯 IA : -${o} sur ${s.length} joueur(s)${a!=="ai"?" (vous)":""}`,type:"gc"});break}case"GRAY_PLAYER":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(p=>!p.used&&(!r.length||r.includes(p._line))).sort(()=>Math.random()-.5).slice(0,n);s.forEach(p=>{p.used=!0}),s.length&&e.log.push({text:`❌ IA : ${s.length} joueur(s)${a!=="ai"?" (vous)":""} exclu(s)`,type:"gc"});break}case"REVIVE_PLAYER":{const l=Object.values(e.aiTeam).flat().filter(s=>s.used).sort(()=>Math.random()-.5).slice(0,n);l.forEach(s=>{s.used=!1}),l.length&&e.log.push({text:`💫 IA : ${l.length} joueur(s) ressuscité(s)`,type:"gc"});break}case"REMOVE_GOAL":e.homeScore>0&&(e.homeScore--,e.log.push({text:"🚫 IA : votre dernier but est annulé !",type:"gc"}));break;case"ADD_GOAL_DRAW":e.homeScore===e.aiScore&&(e.aiScore++,e.log.push({text:"🎯 IA : but bonus (match nul) !",type:"gc"}));break;case"ADD_SUB":e.aiMaxSubs=(e.aiMaxSubs||3)+o,e.log.push({text:`🔄 IA : +${o} remplacement(s)`,type:"gc"});break}}function ia(t,e=()=>{}){var a;if(!((a=t.aiGcCards)!=null&&a.length))return e();const i=t.aiGcTarget||2;if(t.aiUsedGc.length>=i)return e();const o=t.aiGcCards.filter(d=>!t.aiUsedGc.includes(d.id));if(!o.length||!(t.round>=4&&t.aiUsedGc.length===0)&&Math.random()>.55)return e();const r=o[Math.floor(Math.random()*o.length)];t.aiUsedGc.push(r.id),r.effect_type?ta(r,t):t.log.push({text:`⚡ IA joue ${r.icon||"⚡"} ${r.name}`,type:"gc"}),oa(r,e)}function oa(t,e=()=>{}){const i=document.getElementById("ai-gc-anim-overlay");i&&i.remove();const o=document.createElement("div");o.id="ai-gc-anim-overlay",o.style.cssText=`
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
    </div>`,document.body.appendChild(o),setTimeout(()=>{o.remove(),e()},2100)}function bo(t,e,i){go(e,i,null),ea(e,()=>{ia(e,()=>{Ae(t,e,i),na(t,e,i)})})}function na(t,e,i){let o=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(l=>!l.used),n=!1;if(!o.length){const l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(p=>!p.used),s=Yt(e.homeTeam);if(s||l.length===0){const p=(e.aiTeam.DEF||[]).filter(b=>!b.used),c=(e.aiTeam.GK||[]).filter(b=>!b.used);o=s?p.length?p:c:[...p,...c],n=!0}}const r=Qo(o,"attack",e.difficulty);if(!r.length){Xi(t,e,i);return}n&&r.forEach(l=>{l._line=l._line||l.job,l.note_a=Math.max(1,Number(l.note_a)||0)});const a=ui(r,e.modifiers.ai,e.formation);if(e.pendingAttack={...a,players:r,side:"ai"},r.forEach(l=>{l.used=!0}),e.log.push({text:`🤖 IA attaque : ${a.total} (${r.map(l=>l.name).join(", ")})`,type:"info"}),e.modifiers.ai={},[...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(l=>!l.used).length===0){if(r.length===1&&(r[0]._line==="GK"||r[0].job==="GK")&&Yt(e.homeTeam)&&e.homeScore===e.aiScore){e.aiScore++,Ai(t,e,i,"ai",r[0]);return}e.aiScore++;const s={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:r.map(p=>Ve(p)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};e.log.push(s),e.pendingAttack=null,Ae(t,e,i),Ze(s.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}e.phase="defense",Ae(t,e,i)}function ra(t,e,i){var s,p;const o=[...e.aiTeam.GK||[],...e.aiTeam.DEF||[],...e.aiTeam.MIL||[]],n=Qo(o,"defense",e.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(c=>(e.aiTeam[c]||[]).filter(b=>!b.used)).length){const c=((s=e.pendingAttack)==null?void 0:s.players)||[];if(c.length===1&&(c[0]._line==="GK"||c[0].job==="GK")&&e.homeScore===e.aiScore){e.homeScore++,Ai(t,e,i,"home",c[0]);return}e.homeScore++;const x={type:"duel",isGoal:!0,homeScored:!0,homePlayers:c.map(m=>Ve(m)),homeTotal:((p=e.pendingAttack)==null?void 0:p.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};e.log.push(x),e.modifiers.ai={},e.pendingAttack=null,Ae(t,e,i),Ze(x.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}const a=n.length>0?pi(n,e.modifiers.ai,e.formation).total:0;n.forEach(c=>{c.used=!0});const d=oo(e.pendingAttack.total,a,e.modifiers.ai),l={type:"duel",title:"Attaque",homePlayers:(e.pendingAttack.players||[]).map(c=>Ve(c)),aiPlayers:n.map(c=>Ve(c)),homeTotal:e.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(d.shielded)l.text="🛡️ Bouclier IA !",e.log.push(l);else if(d.goal){e.homeScore++,l.isGoal=!0,l.homeScored=!0,l.text=`⚽ BUT ! (${e.pendingAttack.total} > ${a})`,e.log.push(l),e.modifiers.ai={},e.pendingAttack=null,Ae(t,e,i),Ze(l.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}else l.text=`🧤 IA défend (${a} ≥ ${e.pendingAttack.total})`,e.log.push(l);e.modifiers.ai={},e.pendingAttack=null,Mt(t,e,i,"ai-attack")}function Mt(t,e,i,o){if(e.round++,!$n(t,e,i)){if(xo(e)){_t(t,e,i);return}if(o==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(r=>(e.homeTeam[r]||[]).some(a=>!a.used))){Xi(t,e,i);return}e.phase="attack",Ae(t,e,i)}else{if(!["MIL","ATT","GK","DEF"].some(r=>(e.aiTeam[r]||[]).some(a=>!a.used))){Xi(t,e,i);return}e.phase="ai-attack",Ae(t,e,i),setTimeout(()=>bo(t,e,i),800)}}}function Yt(t){return!["GK","DEF","MIL","ATT"].some(e=>(t[e]||[]).some(i=>!i.used))}function No(t){const e=(t.GK||[]).some(o=>!o.used),i=["DEF","MIL","ATT"].some(o=>(t[o]||[]).some(n=>!n.used));return e&&!i}function $n(t,e,i){if(e.homeScore!==e.aiScore)return!1;if(No(e.homeTeam)&&Yt(e.aiTeam)){const o=(e.homeTeam.GK||[]).find(n=>!n.used);return o?(o.used=!0,e.homeScore++,Ai(t,e,i,"home",o),!0):!1}if(No(e.aiTeam)&&Yt(e.homeTeam)){const o=(e.aiTeam.GK||[]).find(n=>!n.used);return o?(o.used=!0,e.aiScore++,Ai(t,e,i,"ai",o),!0):!1}return!1}function Ai(t,e,i,o,n){e.log.push({type:"duel",isGoal:!0,homeScored:o==="home",homePlayers:o==="home"?[Ve(n)]:[],aiPlayers:o==="ai"?[Ve(n)]:[],text:`⚽ DERNIER CORNER — Le gardien ${o==="home"?"":"adverse "}marque !`});const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(r);const a=(d,l)=>new Promise(s=>{r.innerHTML=`<div style="font-size:32px;font-weight:900;color:${l};letter-spacing:2px;animation:lcFade 1.4s ease both">${d}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(s,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),r.remove(),e.pendingAttack=null,Ae(t,e,i),Ze([Ve(n)],e.homeScore,e.aiScore,o==="home",()=>{if(xo(e)){_t(t,e,i);return}Mt(t,e,i,o==="home"?"ai-attack":"home-attack")})))()}function xo(t){const e=["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(n=>!n.used)),i=["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(n=>!n.used));return!e&&!i}function Ji(t,e){return!(["MIL","ATT"].some(n=>(t[n]||[]).some(r=>!r.used))||Yt(e)||!["MIL","ATT"].some(n=>(e[n]||[]).some(r=>!r.used)))}function Xi(t,e,i){if(!$n(t,e,i)){if(xo(e)){_t(t,e,i);return}if(Ji(e.homeTeam,e.aiTeam)&&Ji(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),_t(t,e,i);return}e.phase="attack",Ae(t,e,i)}}function Gi(t,e,i,o=null,n=null){var x,m;if(e.phase!=="attack"){St("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(e.usedSubIds||(e.usedSubIds=[]),e.subsUsed>=e.maxSubs){St(`Maximum ${e.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const r=Object.entries(e.homeTeam).flatMap(([u,h])=>(h||[]).filter(g=>g.used).map(g=>({...g,_line:g._line||u}))),a=e.homeSubs.filter(u=>!e.usedSubIds.includes(u.cardId));if(!r.length){St("Aucun joueur utilisé à remplacer");return}if(!a.length){St("Aucun remplaçant disponible");return}let d=Math.max(0,r.findIndex(u=>u.cardId===n));const l=((x=r[d])==null?void 0:x._line)||((m=r[d])==null?void 0:m.job);let s=o?Math.max(0,a.findIndex(u=>u.cardId===o)):Math.max(0,a.findIndex(u=>u.job===l)),p=!1;const c=document.createElement("div");c.id="sub-overlay",c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function b(){var f,B,T,$,L,W;const u=r[d],h=a[s],g=Math.min(130,Math.round((window.innerWidth-90)/2)),k=Math.round(g*1.35),w=I=>`background:rgba(255,255,255,0.12);border:none;color:${I?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${I?"default":"pointer"};flex-shrink:0`;c.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${e.subsUsed}/${e.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${w(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${h?$t({...h,used:!1,boost:0},g,k):"<div>—</div>"}</div>
        <button id="in-down" style="${w(s>=a.length-1)}" ${s>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${w(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${u?$t({...u,used:!1,boost:0},g,k):"<div>—</div>"}</div>
        <button id="out-down" style="${w(d>=r.length-1)}" ${d>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${r.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(f=c.querySelector("#sub-close"))==null||f.addEventListener("click",()=>c.remove()),(B=c.querySelector("#out-up"))==null||B.addEventListener("click",()=>{d>0&&(d--,b())}),(T=c.querySelector("#out-down"))==null||T.addEventListener("click",()=>{d<r.length-1&&(d++,b())}),($=c.querySelector("#in-up"))==null||$.addEventListener("click",()=>{s>0&&(s--,b())}),(L=c.querySelector("#in-down"))==null||L.addEventListener("click",()=>{s<a.length-1&&(s++,b())});const j=(I,S,v,D)=>{const X=c.querySelector("#"+I);if(!X)return;let F=0;X.addEventListener("touchstart",ae=>{F=ae.touches[0].clientY},{passive:!0}),X.addEventListener("touchend",ae=>{const xe=ae.changedTouches[0].clientY-F;if(Math.abs(xe)<30)return;const C=S();xe<0&&C<D-1?(v(C+1),b()):xe>0&&C>0&&(v(C-1),b())},{passive:!0})};j("in-panel",()=>s,I=>s=I,a.length),j("out-panel",()=>d,I=>d=I,r.length),(W=c.querySelector("#sub-confirm"))==null||W.addEventListener("click",I=>{if(I.preventDefault(),I.stopPropagation(),p)return;p=!0;const S=r[d],v=a[s];if(!S||!v)return;let D=null,X=-1;for(const[ae,xe]of Object.entries(e.homeTeam)){const C=(xe||[]).findIndex(E=>E.cardId===S.cardId);if(C!==-1){D=ae,X=C;break}}if(X===-1||!D){St("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),c.remove();return}const F={...v,_line:D,_col:S._col||0,used:!1,boost:0};e.homeTeam[D].splice(X,1,F),e.usedSubIds||(e.usedSubIds=[]),e.usedSubIds.push(v.cardId),e.subsUsed++,e.selected=[],e.log.push({type:"sub",subSide:"home",clubName:e.clubName,outPlayer:{name:S.name,firstname:S.firstname,note:qt(S,D),portrait:Ct(S),job:S.job,country_code:S.country_code,rarity:S.rarity,clubName:S.clubName,clubLogo:S.clubLogo},inPlayer:{name:v.name,firstname:v.firstname,note:qt(v,D),portrait:Ct(v),job:v.job,country_code:v.country_code,rarity:v.rarity,clubName:v.clubName,clubLogo:v.clubLogo},text:`🔄 ${v.firstname} ${v.name} remplace ${S.firstname} ${S.name}`}),c.remove(),wn(S,v,()=>Ae(t,e,i))})}document.body.appendChild(c),b()}function aa(t,e,i,o,n){var b,x;const r=(o.gcDefs||[]).find(m=>m.name===e),a=Oe[e]||{icon:"⚡",desc:"Carte spéciale."},d=(r==null?void 0:r.name)||e,l=(r==null?void 0:r.effect)||a.desc,s=r!=null&&r.image_url?`/icons/${r.image_url}`:null,p=a.icon||"⚡",c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",c.innerHTML=`
    ${it(d,s,p,l,{width:190})}
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(c),(b=c.querySelector("#gc-back"))==null||b.addEventListener("click",()=>c.remove()),(x=c.querySelector("#gc-use"))==null||x.addEventListener("click",()=>{c.remove(),la(t,e,i,o,n)})}function vi(t,e,i,o,n,r){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let d=[];function l(){var s,p;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${d.length}/${e}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${t.map(c=>{const b=c._line||c.job||"MIL",x=d.find(u=>u.cardId===c.cardId),m=qe({...c,_evolution_bonus:0},{width:90,showStad:!0,role:b,extraNote:c.boost||0});return`<div class="gc-pick-item" data-cid="${c.cardId}"
          style="position:relative;border-radius:8px;${x?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${c.used?"opacity:0.3;pointer-events:none":""}">
          ${m}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${d.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${d.length}/${e})
      </button>
    </div>`,(s=a.querySelector("#gc-picker-close"))==null||s.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(c=>{c.addEventListener("click",()=>{const b=c.dataset.cid,x=t.find(u=>u.cardId===b);if(!x)return;const m=d.findIndex(u=>u.cardId===b);m>-1?d.splice(m,1):d.length<e&&d.push(x),l()})}),(p=a.querySelector("#gc-picker-confirm"))==null||p.addEventListener("click",()=>{a.remove(),r(d)})}l(),document.body.appendChild(a)}const sa={BOOST_STAT:({value:t=1,count:e=1,roles:i=[]},o,n,r)=>{const a=Object.entries(o.homeTeam).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,l])=>l.filter(s=>!s.used).map(s=>({...s,_line:d})));return a.length?(vi(a,e,`Choisir ${e} joueur(s) à booster (+${t})`,n,o,d=>{d.forEach(l=>{const s=(o.homeTeam[l._line]||[]).find(p=>p.cardId===l.cardId);s&&(s.boost=(s.boost||0)+t,o.log.push({text:`⚡ +${t} sur ${s.name}`,type:"info"}))}),Ae(n,o,r)}),!0):(o.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ae(n,o,r),!0)},DEBUFF_STAT:({value:t=1,count:e=1,roles:i=[],target:o="ai"},n,r,a)=>{const d=o==="home"?n.homeTeam:n.aiTeam,l=o==="ai"?"adverse":"allié",s=Object.entries(d).filter(([p])=>!i.length||i.includes(p)).flatMap(([p,c])=>c.filter(b=>!b.used).map(b=>({...b,_line:p})));return s.length?(vi(s,e,`Choisir ${e} joueur(s) ${l}(s) à débuffer (-${t})`,r,n,p=>{p.forEach(c=>{const x=((o==="home"?n.homeTeam:n.aiTeam)[c._line]||[]).find(m=>m.cardId===c.cardId);x&&(x.boost=(x.boost||0)-t,n.log.push({text:`🎯 -${t} sur ${x.name}${o==="ai"?" (IA)":""}`,type:"info"}))}),Ae(r,n,a)}),!0):(n.log.push({text:`🎯 Aucun joueur ${l} disponible`,type:"info"}),Ae(r,n,a),!0)},GRAY_PLAYER:({count:t=1,roles:e=[],target:i="ai"},o,n,r)=>{const a=i==="home"?o.homeTeam:o.aiTeam,d=i==="ai"?"adverse":"allié",l=Object.entries(a).filter(([s])=>!e.length||e.includes(s)).flatMap(([s,p])=>p.filter(c=>!c.used).map(c=>({...c,_line:s})));return l.length?(vi(l,t,`Choisir ${t} joueur(s) ${d}(s) à exclure`,n,o,s=>{s.forEach(p=>{const b=((i==="home"?o.homeTeam:o.aiTeam)[p._line]||[]).find(x=>x.cardId===p.cardId);b&&(b.used=!0,o.log.push({text:`❌ ${b.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ae(n,o,r)}),!0):(o.log.push({text:`❌ Aucun joueur ${d} à exclure`,type:"info"}),Ae(n,o,r),!0)},REVIVE_PLAYER:({count:t=1,roles:e=[]},i,o,n)=>{const r=Object.entries(i.homeTeam).filter(([a])=>!e.length||e.includes(a)).flatMap(([a,d])=>d.filter(l=>l.used).map(l=>({...l,_line:a})));return r.length?(vi(r,t,`Choisir ${t} joueur(s) à ressusciter`,o,i,a=>{a.forEach(d=>{const l=(i.homeTeam[d._line]||[]).find(s=>s.cardId===d.cardId);l&&(l.used=!1,i.log.push({text:`💫 ${l.name} ressuscité !`,type:"info"}))}),Ae(o,i,n)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ae(o,i,n),!0)},REMOVE_GOAL:({},t)=>(t.aiScore>0?(t.aiScore--,t.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):t.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},t)=>(t.homeScore===t.aiScore?(t.homeScore++,t.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):t.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:t=1},e)=>(e.maxSubs=(e.maxSubs||3)+t,e.log.push({text:`🔄 +${t} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function la(t,e,i,o,n){o.usedGc.push(t);const r=o.gcDefs||[],a=r.find(l=>l.name===e)||r.find(l=>{var s;return((s=l.name)==null?void 0:s.toLowerCase().trim())===(e==null?void 0:e.toLowerCase().trim())});let d=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const l=sa[a.effect_type];l?l(a.effect_params||{},o,i,n)||(d=!0):(n.toast(`Effet "${a.effect_type}" non implémenté`,"error"),d=!0)}else{switch(e){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const l=Object.entries(o.homeTeam).flatMap(([s,p])=>(p||[]).filter(c=>c.used).map(c=>({...c,_line:s})));l.length?(l[0].used=!1,o.log.push({text:`💫 ${l[0].name} ressuscité !`,type:"info"})):o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const l=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(s=>!s.used);if(l.length){const s=l.sort((p,c)=>qt(c,"ATT")-qt(p,"ATT"))[0];s.used=!0,o.log.push({text:`❄️ ${s.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}d=!0}y.from("cards").delete().eq("id",t).then(()=>{}),d&&Ae(i,o,n)}function da(t,e,i){const o=Object.values(e.homeTeam).flat().filter(n=>!n.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${e.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${o.map(n=>`
        <div class="player-boost-opt" data-card-id="${n.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${jn[n.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${qt(n,n._line||n.job)}</div>
          <div style="flex:1"><b>${n.firstname} ${n.name}</b><div style="font-size:11px;color:#888">${n._line||n.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${e.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const d=(e.homeTeam[a]||[]).find(l=>l.cardId===r);if(d){d.boost=(d.boost||0)+e.boostCard.value,e.log.push({text:`⚡ Boost +${e.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}e.boostUsed=!0,i.closeModal(),Ae(t,e,i)})})}async function _t(t,e,i){var b,x,m,u;Ht(),Ke(),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),e.phase="finished";const{state:o}=i,n=e.homeScore>e.aiScore,r=e.homeScore===e.aiScore,a=n?"victoire":r?"nul":"defaite",d=e.isSolo&&((b=e.soloLevelConfig)!=null&&b.reward_credits)&&n?Number(e.soloLevelConfig.reward_credits):Cn(e.mode,a);if(e.isSolo&&n)try{const{data:h}=await y.from("user_solo_progress").select("unlocked_level").eq("user_id",o.profile.id).maybeSingle(),g=(h==null?void 0:h.unlocked_level)||1;e.soloLevel>=g&&await y.from("user_solo_progress").upsert({user_id:o.profile.id,unlocked_level:e.soloLevel+1,updated_at:new Date().toISOString()})}catch(h){console.warn("[Solo] Erreur mise à jour progression:",h.message)}const l="00000000-0000-0000-0000-000000000000";let s=null;if(e.isRankedAI)try{const{data:h}=await y.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",o.profile.id).single();if(h){const g=h.mmr??450,k=h.mmr_deviation??350,w=h.mmr_volatility??.06,j=n?1:r?.5:0,f=(h.placement_matches??0)<10,B=Xo(g,k,w,g,350,j,f),T=r?null:n?o.profile.id:l;await y.rpc("update_mmr_after_ranked",{p_match_id:e.matchId,p_winner_id:T,p_home_id:o.profile.id,p_away_id:l,p_home_delta:B.delta,p_away_delta:0,p_home_new_rd:B.newRd,p_away_new_rd:350,p_home_new_vol:B.newSigma,p_away_new_vol:.06}),s=B.delta}}catch(h){console.warn("[RankedAI] Erreur mise à jour MMR:",h.message)}e.matchId&&await y.from("matches").update({status:"finished",home_score:e.homeScore,away_score:e.aiScore,winner_id:n?o.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",e.matchId);const p={credits:(o.profile.credits||0)+d,matches_played:(o.profile.matches_played||0)+1};n?p.wins=(o.profile.wins||0)+1:r?p.draws=(o.profile.draws||0)+1:p.losses=(o.profile.losses||0)+1,await y.from("users").update(p).eq("id",o.profile.id),await i.refreshProfile();const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",c.innerHTML=`
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
    </div>`,document.body.appendChild(c),(x=document.getElementById("res-home"))==null||x.addEventListener("click",()=>{c.remove(),ot(t),i.navigate("home")}),(m=document.getElementById("res-replay"))==null||m.addEventListener("click",async()=>{if(c.remove(),ot(t),e.isRankedAI){const{data:h}=await y.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",i.state.profile.id).single();ut(),i.navigate("match",{matchMode:"ranked",rankedData:{mmr:(h==null?void 0:h.mmr)??450,rd:(h==null?void 0:h.mmr_deviation)??350,sigma:(h==null?void 0:h.mmr_volatility)??.06,isPlacement:((h==null?void 0:h.placement_matches)??0)<10}});return}i.navigate("match",e.isSolo?{matchMode:e.mode,soloLevel:e.soloLevel}:{matchMode:e.mode})}),(u=document.getElementById("res-next-level"))==null||u.addEventListener("click",()=>{c.remove(),ot(t),i.navigate("match",{matchMode:"solo",soloLevel:e.soloLevel+1})})}function ca(t,e){e.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${io(t.aiTeam,t.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const pa={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function ua(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}async function fa(t,e){!t||!e||await Promise.all([Go(t,"win"),Go(e,"loss")])}async function Go(t,e){const{data:i}=await y.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",t).eq("card_type","player");if(!(i!=null&&i.length))return;const o=i.filter(n=>{var r,a;return((r=n.player)==null?void 0:r.rarity)==="pepite"||((a=n.player)==null?void 0:a.rarity)==="papyte"});o.length&&await Promise.all(o.map(n=>{const r=pa[n.player.rarity],a=e==="win"?r.win:r.loss,d=n.player.note_min??1,l=n.player.note_max??10,s=ua(n.player),p=n.current_note??s,c=Math.min(l,Math.max(d,p+a));return y.from("cards").update({current_note:c}).eq("id",n.id)}))}const Nt=t=>hn(t);async function Bt(t,e,i,o,n={}){return En(t,e,i,o,n.myGC||[],n.gcDefs||[],n.isRanked||!1,n.rankedData||null,n.stadiumDef||null,n.onMatchEnd||null,n.mlLeagueId||null,n.mlMatchId||null)}async function ma(t,e,i){const{data:o}=await y.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!o){e.toast("Match introuvable","error"),e.navigate("home");return}const n=o.home_id===e.state.user.id;let r=null,a=null;if(o.mode==="mini_league"){const{data:d}=await y.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();d&&(r=d.league_id,a=d.id)}return En(t,e,i,n,[],[],o.is_ranked||!1,null,null,null,r,a)}async function En(t,e,i,o,n=[],r=[],a=!1,d=null,l=null,s=null,p=null,c=null){const{state:b,navigate:x,toast:m}=e,u=o?"p1":"p2",h=o?"p2":"p1",g=(n||[]).map(_=>_.id),k=(n||[]).map(_=>({id:_.id,gc_type:_.gc_type,_gcDef:_._gcDef||null}));t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:w}=await y.from("matches").select("*").eq("id",i).single();if(!w){m("Match introuvable","error"),x("home");return}async function j(){var ze,Ie;console.log("[PvP] buildGameState match:",{id:w.id,home_deck_id:w.home_deck_id,away_deck_id:w.away_deck_id,mode:w.mode,is_ranked:w.is_ranked});const[{data:_,error:z},{data:q,error:O},{data:M},{data:G}]=await Promise.all([y.rpc("get_deck_for_match",{p_deck_id:w.home_deck_id}),y.rpc("get_deck_for_match",{p_deck_id:w.away_deck_id}),y.from("users").select("id,pseudo,club_name").eq("id",w.home_id).single(),y.from("users").select("id,pseudo,club_name").eq("id",w.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",z==null?void 0:z.message,"p2:",O==null?void 0:O.message,"p1D:",(ze=_==null?void 0:_.starters)==null?void 0:ze.length,"p2D:",(Ie=q==null?void 0:q.starters)==null?void 0:Ie.length);const N=se=>{const Me=Number(se.evolution_bonus)||0;return{cardId:se.card_id,position:se.position,id:se.id,firstname:se.firstname,name:se.surname_real,country_code:se.country_code,club_id:se.club_id,job:se.job,job2:se.job2,note_g:(Number(se.note_g)||0)+(se.job==="GK"||se.job2==="GK"&&Number(se.note_g)>0?Me:0),note_d:(Number(se.note_d)||0)+(se.job==="DEF"||se.job2==="DEF"&&Number(se.note_d)>0?Me:0),note_m:(Number(se.note_m)||0)+(se.job==="MIL"||se.job2==="MIL"&&Number(se.note_m)>0?Me:0),note_a:(Number(se.note_a)||0)+(se.job==="ATT"||se.job2==="ATT"&&Number(se.note_a)>0?Me:0),evolution_bonus:Me,rarity:se.rarity,skin:se.skin,hair:se.hair,hair_length:se.hair_length,face:se.face||null,clubName:se.club_encoded_name||null,clubLogo:se.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},U=((_==null?void 0:_.starters)||[]).map(se=>N(se)),J=((q==null?void 0:q.starters)||[]).map(se=>N(se)),ee=(_==null?void 0:_.formation)||"4-4-2",oe=(q==null?void 0:q.formation)||"4-4-2";let re=Ui(U,ee),ie=Ui(J,oe);const le=((_==null?void 0:_.subs)||[]).map(se=>N(se)),pe=((q==null?void 0:q.subs)||[]).map(se=>N(se)),Se=(_==null?void 0:_.stadium_def)||(o?l:null),ge=(q==null?void 0:q.stadium_def)||(o?null:l);return Se&&(re=$i(re,Se),Ei(le,Se)),ge&&(ie=$i(ie,ge),Ei(pe,ge)),{p1Team:re,p2Team:ie,p1Subs:le,p2Subs:pe,p1Formation:ee,p2Formation:oe,p1Name:(M==null?void 0:M.club_name)||(M==null?void 0:M.pseudo)||"Joueur 1",p2Name:(G==null?void 0:G.club_name)||(G==null?void 0:G.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:o?g:[],gc_p2:o?[]:g,gcCardsFull_p1:o?k:[],gcCardsFull_p2:o?[]:k,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:r||[],lastActionAt:new Date().toISOString()}}let f=w.game_state&&Object.keys(w.game_state).length?w.game_state:null;if(console.log("[PvP] init - amIHome:",o,"gameState exists:",!!f,"match.status:",w.status,"home_id:",w.home_id,"away_id:",w.away_id,"myId:",b.profile.id),!f)if(o){f=await j(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((f==null?void 0:f.p1Team)||{}));const{data:_}=await y.from("matches").select("game_state").eq("id",i).single();!(_!=null&&_.game_state)||!Object.keys(_.game_state).length?await y.from("matches").update({game_state:f,turn_user_id:w.home_id}).eq("id",i):f=_.game_state}else{t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let _=0;_<30&&!f;_++){await new Promise(q=>setTimeout(q,400));const{data:z}=await y.from("matches").select("game_state").eq("id",i).single();z!=null&&z.game_state&&Object.keys(z.game_state).length&&(f=z.game_state),_%5===0&&console.log("[PvP] away - poll",_,"game_state:",!!(z!=null&&z.game_state))}if(!f){m("Erreur de synchronisation","error"),x("home");return}f.gc_p2=g,f.gcCardsFull_p2=k,await y.from("matches").update({game_state:f}).eq("id",i)}let B=!1,T=null,$=!1;const L=new Set,W=new Set;async function I(_){var oe,re;Ht();try{y.removeChannel(S)}catch{}const z=f[u+"Score"]||0,q=f[h+"Score"]||0;let O,M;_.winner_id?(O=_.winner_id===b.profile.id,M=!1):_.forfeit?(O=z>q,M=!1):(M=z===q,O=z>q);let G="";if(a&&o)try{const{data:ie}=await y.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",w.home_id).single(),{data:le}=await y.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",w.away_id).single();if(ie&&le){const pe=O?1:M?.5:0,Se=1-pe,ge=ie.placement_matches<10,ze=le.placement_matches<10,Ie=computeGlicko2(ie.mmr,ie.mmr_deviation,ie.mmr_volatility,le.mmr,le.mmr_deviation,pe===1?1:pe===0?0:.5,ge),se=computeGlicko2(le.mmr,le.mmr_deviation,le.mmr_volatility,ie.mmr,ie.mmr_deviation,Se===1?1:Se===0?0:.5,ze);await y.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:M?null:O?w.home_id:w.away_id,p_home_id:w.home_id,p_away_id:w.away_id,p_home_delta:Ie.delta,p_away_delta:se.delta,p_home_new_rd:Ie.newRd,p_away_new_rd:se.newRd,p_home_new_vol:Ie.newSigma,p_away_new_vol:se.newSigma});const Me=Ie.delta,Ne=Ie.newMmr,Ce=getTier(Ne),Ye=Me>=0?"+":"",He=Me>=0?"#4caf50":"#ff6b6b",nt=getTier(ie.mmr);G=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Ce.id!==nt.id?`<div style="font-size:20px;font-weight:900;color:${Ce.color}">
                    ${Ne>ie.mmr?"📈":"📉"} ${nt.emoji} ${nt.label} → ${Ce.emoji} ${Ce.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Ne>ie.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Me>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Ce.color}">${Ce.emoji} ${Ce.label}</div>`}
              ${ge?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${ie.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(ie){console.error("[Ranked] MMR update error:",ie)}(oe=document.getElementById("pvp-end-overlay"))==null||oe.remove();const N=document.createElement("div");N.id="pvp-end-overlay",N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const U=M?"🤝":O?"🏆":"😞",J=M?"MATCH NUL":O?"VICTOIRE !":"DÉFAITE",ee=M?"#fff":O?"#FFD700":"#ff6b6b";N.innerHTML=`
      <div style="font-size:64px">${U}</div>
      <div style="font-size:26px;font-weight:900;color:${ee}">${J}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${f[u+"Name"]} ${z} – ${q} ${f[h+"Name"]}</div>
      ${_.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${O?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${G}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${p?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(N),(re=N.querySelector("#pvp-end-home"))==null||re.addEventListener("click",()=>{N.remove(),ot(t),p?x("mini-league",{openLeagueId:p}):x(a?"ranked":"home")})}const S=y.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},_=>{var q;const z=_.new;try{if(z.status==="finished"||z.forfeit){if(B)return;B=!0,T&&(clearInterval(T),T=null),Ke(),z.game_state&&(f=z.game_state),I(z);return}if(z.game_state){const O=f;f=z.game_state;const M=f._lastGC;if(M&&M.seq&&!W.has(M.seq)&&(W.add(M.seq),M.by!==u)){ue(M.type,M.by,()=>E());return}const G=O[u+"Score"]||0,N=O[h+"Score"]||0,U=f[u+"Score"]||0,J=f[h+"Score"]||0,ee=U>G,oe=J>N;if((ee||oe)&&!L.has(f.round)){L.add(f.round);const re=[...f.log||[]].reverse().find(pe=>pe.isGoal),ie=((re==null?void 0:re.homePlayers)||[]).map(pe=>({name:pe.name,note:pe.note,portrait:pe.portrait,job:pe.job}));!!((q=re==null?void 0:re.text)!=null&&q.includes("DERNIER CORNER"))?H().then(()=>{Ze(ie,U,J,ee,()=>E())}):Ze(ie,U,J,ee,()=>E());return}E()}}catch(O){console.error("[PvP] crash:",O)}}).subscribe();async function v(_){Object.assign(f,_),f.lastActionAt=new Date().toISOString();const{error:z}=await y.from("matches").update({game_state:f}).eq("id",i);z&&m("Erreur de synchronisation","error");try{E()}catch(q){console.error("[PvP] renderPvpScreen crash:",q)}}async function D(){if(B)return;B=!0,Ht(),Ke(),T&&(clearInterval(T),T=null);const _=o?w.away_id:w.home_id,z=o?"p2":"p1",q=o?"p1":"p2",O={...f,[z+"Score"]:3,[q+"Score"]:0,phase:"finished"},M=O.p1Score||0,G=O.p2Score||0;try{await y.from("matches").update({game_state:O}).eq("id",i);const{data:N,error:U}=await y.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:_,p_home_score:M,p_away_score:G,p_forfeit:!0});if(U&&console.error("[PvP] finish_pvp_match (forfeit):",U),p)try{await y.rpc("check_and_finish_mini_league",{p_league_id:p})}catch(J){console.error("[PvP] check_and_finish_mini_league (forfeit):",J)}try{const{data:J}=await y.rpc("apply_match_rewards",{p_match_id:i});J!=null&&J.success&&!(J!=null&&J.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(J){console.error("[PvP] apply_match_rewards (forfeit):",J)}}catch{}try{y.removeChannel(S)}catch{}setTimeout(()=>{ot(t),p?x("mini-league",{openLeagueId:p}):x("home")},800)}const X={BOOST_STAT:({value:_=1,count:z=1,roles:q=[]},O,M)=>{const G=O[u+"Team"],N=Object.entries(G).filter(([U])=>!q.length||q.includes(U)).flatMap(([U,J])=>J.filter(ee=>!ee.used).map(ee=>({...ee,_line:U})));if(!N.length){O.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),M(O);return}F(N,z,`Choisir ${z} joueur(s) à booster (+${_})`,U=>{U.forEach(J=>{const ee=(G[J._line]||[]).find(oe=>oe.cardId===J.cardId);ee&&(ee.boost=(ee.boost||0)+_,O.log.push({text:`⚡ +${_} sur ${ee.name}`,type:"info"}))}),O[u+"Team"]=G,M(O)})},DEBUFF_STAT:({value:_=1,count:z=1,roles:q=[],target:O="ai"},M,G)=>{const N=O==="home"?u:h,U=M[N+"Team"],J=O==="home"?"allié":"adverse",ee=Object.entries(U).filter(([oe])=>!q.length||q.includes(oe)).flatMap(([oe,re])=>re.map(ie=>({...ie,_line:oe})));if(!ee.length){M.log.push({text:`🎯 Aucun joueur ${J}`,type:"info"}),G(M);return}F(ee,z,`Choisir ${z} joueur(s) ${J}(s) (-${_})`,oe=>{oe.forEach(re=>{const ie=(U[re._line]||[]).find(le=>le.cardId===re.cardId);ie&&(ie.boost=(ie.boost||0)-_,M.log.push({text:`🎯 -${_} sur ${ie.name}`,type:"info"}))}),M[N+"Team"]=U,G(M)})},GRAY_PLAYER:({count:_=1,roles:z=[],target:q="ai"},O,M)=>{const G=q==="home"?u:h,N=O[G+"Team"],U=q==="home"?"allié":"adverse",J=Object.entries(N).filter(([ee])=>!z.length||z.includes(ee)).flatMap(([ee,oe])=>oe.filter(re=>!re.used).map(re=>({...re,_line:ee})));if(!J.length){O.log.push({text:`❌ Aucun joueur ${U}`,type:"info"}),M(O);return}F(J,_,`Choisir ${_} joueur(s) ${U}(s) à exclure`,ee=>{const oe="usedCardIds_"+G,re=new Set(O[oe]||[]);ee.forEach(ie=>{const le=(N[ie._line]||[]).find(pe=>pe.cardId===ie.cardId);le&&(le.used=!0,re.add(ie.cardId),O.log.push({text:`❌ ${le.name} exclu !`,type:"info"}))}),O[oe]=[...re],O[G+"Team"]=N,M(O)})},REVIVE_PLAYER:({count:_=1,roles:z=[]},q,O)=>{const M=q[u+"Team"],G=Object.entries(M).filter(([N])=>!z.length||z.includes(N)).flatMap(([N,U])=>U.filter(J=>J.used).map(J=>({...J,_line:N})));if(!G.length){q.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),O(q);return}F(G,_,`Choisir ${_} joueur(s) à ressusciter`,N=>{N.forEach(U=>{const J=(M[U._line]||[]).find(ee=>ee.cardId===U.cardId);J&&(J.used=!1,q.log.push({text:`💫 ${J.name} ressuscité !`,type:"info"}))}),q[u+"Team"]=M,O(q)})},REMOVE_GOAL:({},_,z)=>{const q=h+"Score";_[q]>0?(_[q]--,_.log.push({text:"🚫 Dernier but annulé !",type:"info"})):_.log.push({text:"🚫 Aucun but à annuler",type:"info"}),z(_)},ADD_GOAL_DRAW:({},_,z)=>{_[u+"Score"]===_[h+"Score"]?(_[u+"Score"]++,_.log.push({text:"🎯 But bonus !",type:"info"})):_.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),z(_)},ADD_SUB:({value:_=1},z,q)=>{z.maxSubs=(z.maxSubs||3)+_,z.log.push({text:`🔄 +${_} remplacement(s)`,type:"info"}),q(z)},CUSTOM:({},_,z)=>z(_)};function F(_,z,q,O){const M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let G=[];function N(){var J,ee;const U=_.map(oe=>{const re=oe._line||oe.job||"MIL",ie=G.find(pe=>pe.cardId===oe.cardId),le=qe({...oe,_evolution_bonus:0},{width:90,showStad:!0,role:re,extraNote:oe.boost||0});return`<div class="pp-item" data-cid="${oe.cardId}"
          style="position:relative;border-radius:8px;${ie?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${oe.used?"opacity:0.3;pointer-events:none":""}">
          ${le}
        </div>`}).join("");M.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${q}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${G.length}/${z}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${U}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${G.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${G.length}/${z})
          </button>
        </div>`,(J=M.querySelector("#pp-close"))==null||J.addEventListener("click",()=>M.remove()),M.querySelectorAll(".pp-item").forEach(oe=>{oe.addEventListener("click",()=>{const re=oe.dataset.cid,ie=_.find(pe=>pe.cardId===re),le=G.findIndex(pe=>pe.cardId===re);ie&&(le>-1?G.splice(le,1):G.length<z&&G.push(ie),N())})}),(ee=M.querySelector("#pp-confirm"))==null||ee.addEventListener("click",()=>{M.remove(),O(G)})}N(),document.body.appendChild(M)}async function ae(_,z){const O=(f["gcCardsFull_"+u]||[]).find(U=>U.id===_),M=(O==null?void 0:O._gcDef)||(f.gcDefs||[]).find(U=>{var J;return U.name===z||((J=U.name)==null?void 0:J.toLowerCase().trim())===(z==null?void 0:z.toLowerCase().trim())}),G=[...f["usedGc_"+u]||[],_],N={type:z,by:u,seq:(f._gcAnimSeq||0)+1};W.add(N.seq),ue(z,u,async()=>{if(M!=null&&M.effect_type&&M.effect_type!=="CUSTOM"){const J=X[M.effect_type];if(J){const ee={...f};J(M.effect_params||{},ee,async oe=>{oe["usedGc_"+u]=G,oe._lastGC=N,oe._gcAnimSeq=N.seq,await v(oe)});return}}const U={...f};switch(z){case"Remplacement+":U.maxSubs=(U.maxSubs||3)+1,U.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const J=h+"Score";U[J]>0&&(U[J]--,U.log.push({text:"🚫 But annulé",type:"info"}));break}}U["usedGc_"+u]=G,U._lastGC=N,U._gcAnimSeq=N.seq,await v(U)})}function xe(_,z){const q="usedCardIds_"+_,O=new Set(f[q]||[]);z.forEach(M=>O.add(M)),f[q]=[...O]}function C(){for(const _ of["p1","p2"]){const z=new Set(f["usedCardIds_"+_]||[]),q=f[_+"Team"];if(q)for(const O of["GK","DEF","MIL","ATT"])(q[O]||[]).forEach(M=>{M.used=z.has(M.cardId)})}}function E(){var vo,wo,_o,ko,$o,Eo;if(f.phase==="reveal")return Q();if(f.phase==="midfield")return te();if(f.phase==="finished")return we();const _=f[u+"Team"],z=f[h+"Team"];C();const q=f[u+"Score"],O=f[h+"Score"],M=f[u+"Name"],G=f[h+"Name"],N=f.phase===u+"-attack",U=f.phase===u+"-defense",J=Array.isArray(f["selected_"+u])?f["selected_"+u]:[],ee=J.map(ne=>ne.cardId),oe=window.innerWidth>=700,re=f[u+"Subs"]||[],ie=f["usedSubIds_"+u]||[],le=re.filter(ne=>!ie.includes(ne.cardId)),pe=f["gcCardsFull_"+u]||[],Se=f["usedGc_"+u]||[],ge=pe.filter(ne=>!Se.includes(ne.id)),ze=f.boostOwner===u&&!f.boostUsed,Ie=[..._.MIL||[],..._.ATT||[]].filter(ne=>!ne.used),se=[...z.MIL||[],...z.ATT||[]].filter(ne=>!ne.used),Me=!ce(z),Ne=Ie.length===0&&se.length===0&&!Me,Ce=(_.DEF||[]).filter(ne=>!ne.used),Ye=(_.GK||[]).filter(ne=>!ne.used);let He=[];N&&Ie.length===0&&(Me?(He=Ce.map(ne=>ne.cardId),Ce.length===0&&(He=He.concat(Ye.map(ne=>ne.cardId)))):Ne&&(He=[...Ce,...Ye].map(ne=>ne.cardId)));function nt(ne,Ee,De){var Fe,gt;const Te=ne._gcDef,Pt=(Te==null?void 0:Te.name)||ne.gc_type,st=(Te==null?void 0:Te.effect)||((Fe=Oe[ne.gc_type])==null?void 0:Fe.desc)||"",Re=Te!=null&&Te.image_url?`/icons/${Te.image_url}`:null,Ge=((gt=Oe[ne.gc_type])==null?void 0:gt.icon)||"⚡";return`<div class="pvp-gc-mini" data-gc-id="${ne.id}" data-gc-type="${ne.gc_type}" style="flex-shrink:0;cursor:pointer">
        ${it(Pt,Re,Ge,st,{width:Ee})}
      </div>`}function Xt(ne,Ee){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ne}px;height:${Ee}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Ee*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(Ee*.2)}px">⚡</div>
        <div style="font-size:${Math.round(Ee*.09)}px;color:#000;font-weight:900">+${f.boostValue}</div>
      </div>`}const Pe=(ne,Ee)=>Ee?Xt(95,162):nt(ne,95),We=(ne,Ee)=>Ee?Xt(68,116):nt(ne,68),Ue=oe?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ft=N?de(u)?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${J.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ue};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:U?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${J.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${G}</div>`,rt=N&&!de(u)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':N||U?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${J.length}/3 sélectionné(s)</div>`:"",Dt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${oe?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${le.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':le.map(ne=>`<div class="pvp-sub-btn" data-sub-id="${ne.cardId}" style="cursor:pointer;flex-shrink:0">${$t(ne,oe?76:44,oe?100:58)}</div>`).join("")}
    </div>`,mt=N?"attack":U?"defense":"idle",Et=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ci(_,f[u+"Formation"],mt,ee,oe?1300:Tt(),oe?600:Ut(),He)}
      </div>
    </div>`,at=f[u+"Team"],Mn=(()=>{var Ee,De,Te,Pt,st;if(U&&((Ee=f.pendingAttack)!=null&&Ee.players)){const Re=f.pendingAttack;let Ge="";if(J.length>0){const Fe=J.map(Je=>{const Qt=(at[Je._role]||[]).find(Di=>Di.cardId===Je.cardId)||Je,Zt=at[Je._role]||[],bi=Zt.findIndex(Di=>Di.cardId===Je.cardId),Bi=Lt(Zt.length),ei=bi>=0?Bi[bi]:Qt._col??1;return{...Qt,_line:Je._role,_col:ei}}),gt=pi(Fe,((De=f.modifiers)==null?void 0:De[u])||{},f[u+"Formation"]);Ge=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${J.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(Fe.map(Je=>({...Je,used:!1})),"#3a7bd5",gt.total,"defense",f[u+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${G} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${Qe((Re.players||[]).map(Fe=>({...Fe,used:!1})),"#ff6b6b",Re.total,"attack",f[h+"Formation"])}</div>
          ${Ge}
        </div>`}if(N&&((Te=f.pendingAttack)!=null&&Te.players)){const Re=f.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${Qe((Re.players||[]).map(Ge=>({...Ge,used:!1})),"#00ff88",Re.total,"attack",f[u+"Formation"])}</div>
        </div>`}if(N&&!((Pt=f.pendingAttack)!=null&&Pt.players)&&J.length>0){const Re=J.map(Fe=>{const gt=(at[Fe._role]||[]).find(ei=>ei.cardId===Fe.cardId)||Fe,Je=["GK","DEF"].includes(Fe._role),Qt=at[Fe._role]||[],Zt=Qt.findIndex(ei=>ei.cardId===Fe.cardId),bi=Lt(Qt.length),Bi=Zt>=0?bi[Zt]:gt._col??1;return{...gt,_line:Fe._role,_col:Bi,...Je?{note_a:Math.max(1,Number(gt.note_a)||0)}:{}}}),Ge=ui(Re,((st=f.modifiers)==null?void 0:st[u])||{},f[u+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${J.length}/3)</div>
          <div style="display:flex;justify-content:center">${Qe(Re.map(Fe=>({...Fe,used:!1})),"#FFD700",Ge.total,"attack",f[u+"Formation"])}</div>
        </div>`}const ne=(f.log||[]).slice(-1)[0];return ne?'<div style="padding:2px 4px">'+vn(ne)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),ho=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${M}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${q} – ${O}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${G}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Mn}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(f.log||[]).length})
      </button>`;It(t),t.style.overflow="hidden",oe?t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${ho}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Dt}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Et}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ft}${rt}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ge.map(ne=>Pe(ne,!1)).join("")}
            ${ze?Pe(null,!0):""}
          </div>
        </div>
      </div>`:t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${ho}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ci(_,f[u+"Formation"],mt,ee,Tt(),Ut(),He)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ge.map(ne=>We(ne,!1)).join("")}
            ${ze?We(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${N&&le.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${N&&le.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${N&&le.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${N&&le.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${le.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(f["usedSubIds_"+u]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(f["usedSubIds_"+u]||[]).length}/${f.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${ft}${rt}</div>
        </div>
      </div>`;function Ft(){const ne=t.querySelector(".match-screen");if(!ne)return;const Ee=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ne.style.height=Ee+"px",ne.style.minHeight=Ee+"px",ne.style.maxHeight=Ee+"px",ne.style.overflow="hidden";const De=t.querySelector("#mobile-action-bar"),Te=t.querySelector("#mobile-play-area");De&&Te&&(Te.style.paddingBottom=De.offsetHeight+"px")}if(Ft(),setTimeout(Ft,120),setTimeout(Ft,400),$||($=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ft),window.visualViewport.addEventListener("scroll",Ft)),window.addEventListener("resize",Ft)),function(){const Ee=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!Ee)return;const De=Ee.closest("#match-terrain-wrap");De&&(De.style.cssText="position:relative;width:100%;height:100%;padding:0"),Ee.removeAttribute("width"),Ee.removeAttribute("height"),Ee.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Ee.setAttribute("preserveAspectRatio","xMidYMid meet")}(),f._pvpResizeBound||(f._pvpResizeBound=!0,window.addEventListener("resize",()=>{const ne=t.querySelector(".terrain-wrapper svg");if(ne){const Ee=ne.closest("#match-terrain-wrap");Ee&&(Ee.style.cssText="position:relative;width:100%;height:100%;padding:0"),ne.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t.querySelectorAll(".match-slot-hit").forEach(ne=>{ne.addEventListener("click",()=>{if(!N&&!U)return;const Ee=ne.dataset.cardId,De=ne.dataset.role,Te=(_[De]||[]).find(Ge=>Ge.cardId===Ee);if(!Te||Te.used)return;const Pt=He.includes(Ee);if(N&&!["MIL","ATT"].includes(De)&&!Pt)return;Array.isArray(f["selected_"+u])||(f["selected_"+u]=[]);const st=f["selected_"+u],Re=st.findIndex(Ge=>Ge.cardId===Ee);Re>-1?st.splice(Re,1):st.length<3&&st.push({...Te,_role:De}),E()})}),t.querySelectorAll(".match-used-hit").forEach(ne=>{ne.addEventListener("click",()=>je(ne.dataset.cardId))}),t.querySelectorAll(".pvp-sub-btn").forEach(ne=>{ne.addEventListener("click",()=>je())}),(vo=t.querySelector("#pvp-sub-open"))==null||vo.addEventListener("click",()=>je()),t.querySelectorAll(".pvp-gc-mini").forEach(ne=>{N?ne.addEventListener("click",()=>ve(ne.dataset.gcId,ne.dataset.gcType)):(ne.style.opacity="0.35",ne.style.cursor="default",ne.addEventListener("click",()=>St("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(wo=t.querySelector("#pvp-boost-card"))==null||wo.addEventListener("click",()=>be()),(_o=t.querySelector("#pvp-action"))==null||_o.addEventListener("click",ne=>{N?ne.currentTarget.dataset.pass==="1"||!de(u)?ke():Y():U&&R()}),(ko=t.querySelector("#pvp-quit"))==null||ko.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&D()}),($o=t.querySelector("#pvp-view-opp"))==null||$o.addEventListener("click",()=>he()),(Eo=t.querySelector("#pvp-toggle-history"))==null||Eo.addEventListener("click",()=>me()),T&&(clearInterval(T),T=null),Ke(),(N||U)&&!B){let ne=30,Ee=!1;const De=()=>document.getElementById("pvp-timer"),Te=()=>{De()&&(De().textContent=ne+"s",De().style.color=Ee?"#ff4444":"#fff")};Te(),T=setInterval(()=>{ne--,ne<0?Ee?(clearInterval(T),T=null,Ke(),N&&!de(u)?ke():D()):(Ee=!0,ne=15,Te(),tn("/sounds/timer-urgent.mp3",.6)):Te()},1e3)}}function Q(){It(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${Or(f[h+"Team"],f[h+"Formation"],null,f[h+"Name"]||"Adversaire")}
    </div>`;const _=t.querySelector("svg"),z=_==null?void 0:_.closest("#match-terrain-wrap");z&&(z.style.cssText="position:relative;width:100%;height:100%;padding:0"),_&&(_.removeAttribute("width"),_.removeAttribute("height"),_.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",_.setAttribute("preserveAspectRatio","xMidYMid meet")),u==="p1"&&setTimeout(async()=>{await v({phase:"midfield"})},5e3)}let K=!1;function te(){if(K)return;const _=f[u+"Team"].MIL||[],z=f[h+"Team"].MIL||[],q=vt(_)+wt(_),O=vt(z)+wt(z),M=q>=O;It(t),t.innerHTML=`
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
      ${Ii(_,f[u+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${Ii(z,f[h+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const G=(le,pe)=>t.querySelectorAll(le).forEach((Se,ge)=>{setTimeout(()=>{Se.style.opacity="1",Se.style.transform="translateY(0) scale(1)"},pe+ge*90)});G(".duel-card-me",150),G(".duel-card-opp",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((le,pe)=>setTimeout(()=>{le.style.opacity="1"},pe*70)),900),setTimeout(()=>{const le=t.querySelector("#pvp-vs");le&&(le.style.opacity="1",le.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(pe=>pe.style.opacity="1")},1250);function N(le,pe,Se){const ge=document.getElementById(le);if(!ge)return;const ze=performance.now(),Ie=se=>{const Me=Math.min(1,(se-ze)/Se);ge.textContent=Math.round(pe*(1-Math.pow(1-Me,3))),Me<1?requestAnimationFrame(Ie):ge.textContent=pe};requestAnimationFrame(Ie)}setTimeout(()=>{N("pvp-score-me",q,800),N("pvp-score-opp",O,800)},1500);const U=f.p1Team.MIL||[],J=f.p2Team.MIL||[],ee=vt(U)+wt(U),oe=vt(J)+wt(J),re=ee>=oe?"p1":"p2";let ie=f.boostValue;ie==null&&(ie=Jo(),f.boostValue=ie,f.boostOwner=re,f.boostUsed=!1),K=!0,setTimeout(()=>{const le=t.querySelector("#duel-row-"+(M?"me":"opp")),pe=t.querySelector("#duel-row-"+(M?"opp":"me")),Se=document.getElementById("pvp-score-me"),ge=document.getElementById("pvp-score-opp"),ze=M?Se:ge,Ie=M?ge:Se;ze&&(ze.style.fontSize="80px",ze.style.color=M?"#FFD700":"#ff6b6b",ze.style.animation="duelPulse .5s ease"+(M?",duelGlow 1.5s ease infinite .5s":"")),Ie&&(Ie.style.opacity="0.25"),setTimeout(()=>{le&&(le.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",le.style.zIndex="5"),setTimeout(()=>{const se=document.getElementById("duel-shock");se&&(se.style.animation="shockwave .5s ease-out forwards"),pe&&(pe.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const se=document.getElementById("pvp-duel-finale");if(!se)return;const Me=f.boostOwner===u?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+ie+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ne=u==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;se.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(M?"⚽ "+f[u+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+f[h+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Me+Ne,se.style.transition="opacity .45s ease",se.style.opacity="1",se.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const Ye=re;await v({phase:Ye+"-attack",attacker:Ye,round:1,boostValue:ie,boostUsed:!1,boostOwner:Ye})})},600)},700)},2800)}function ue(_,z,q){var pe,Se;const O=(f.gcDefs||[]).find(ge=>{var ze;return ge.name===_||((ze=ge.name)==null?void 0:ze.toLowerCase().trim())===(_==null?void 0:_.toLowerCase().trim())}),M={purple:"#b06ce0",light_blue:"#00d4ef"}[O==null?void 0:O.color]||"#b06ce0",G=(O==null?void 0:O.name)||_,N=(O==null?void 0:O.effect)||((pe=Oe[_])==null?void 0:pe.desc)||"",U=O!=null&&O.image_url?`/icons/${O.image_url}`:null,J=((Se=Oe[_])==null?void 0:Se.icon)||"⚡",oe=z===u?"Vous":f[z+"Name"]||"Adversaire",re=document.createElement("div");re.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",re.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{filter:drop-shadow(0 0 20px ${M}66)}50%{filter:drop-shadow(0 0 40px ${M}cc)}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${M};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${oe} joue une carte</div>
      <div style="animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        ${it(G,U,J,N,{width:200})}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(re);let ie=!1;const le=()=>{ie||(ie=!0,re.remove(),setTimeout(()=>q&&q(),50))};re.addEventListener("click",le),setTimeout(le,3e3)}function ve(_,z){var oe,re,ie,le;const O=(f["gcCardsFull_"+u]||[]).find(pe=>pe.id===_),M=O==null?void 0:O._gcDef,G=(M==null?void 0:M.name)||z,N=(M==null?void 0:M.effect)||((oe=Oe[z])==null?void 0:oe.desc)||"Carte spéciale.",U=M!=null&&M.image_url?`/icons/${M.image_url}`:null,J=((re=Oe[z])==null?void 0:re.icon)||"⚡",ee=document.createElement("div");ee.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",ee.innerHTML=`
      ${it(G,U,J,N,{width:190})}
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(ee),(ie=ee.querySelector("#pvp-gc-back"))==null||ie.addEventListener("click",()=>ee.remove()),(le=ee.querySelector("#pvp-gc-use"))==null||le.addEventListener("click",()=>{ee.remove(),ae(_,z)})}function be(){var O;const _=f[u+"Team"],z=Object.entries(_).flatMap(([M,G])=>(G||[]).filter(N=>!N.used).map(N=>({...N,_line:M})));if(!z.length)return;const q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",q.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${f.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${z.map(M=>{const G={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[M._line]||"#555",N=qt(M,M._line)+(M.boost||0);return`<div class="bp-item" data-cid="${M.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${G};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${M.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${N}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(q),(O=q.querySelector("#bp-close"))==null||O.addEventListener("click",()=>q.remove()),q.querySelectorAll(".bp-item").forEach(M=>{M.addEventListener("click",async()=>{const G=M.dataset.cid,N=z.find(J=>J.cardId===G);if(!N)return;const U=(_[N._line]||[]).find(J=>J.cardId===G);U&&(U.boost=(U.boost||0)+f.boostValue),q.remove(),await v({[u+"Team"]:_,boostUsed:!0})})})}function je(_=null){var le,pe;if(!(f.phase===u+"-attack")){m("Remplacement uniquement avant votre attaque","warning");return}const q=f[u+"Team"],O=f["usedSubIds_"+u]||[],M=f.maxSubs||3;if(O.length>=M){m(`Maximum ${M} remplacements atteint`,"warning");return}const G=Object.entries(q).flatMap(([Se,ge])=>(ge||[]).filter(ze=>ze.used).map(ze=>({...ze,_line:Se}))),N=(f[u+"Subs"]||[]).filter(Se=>!O.includes(Se.cardId));if(!G.length){m("Aucun joueur utilisé à remplacer","warning");return}if(!N.length){m("Aucun remplaçant disponible","warning");return}let U=Math.max(0,G.findIndex(Se=>Se.cardId===_));const J=((le=G[U])==null?void 0:le._line)||((pe=G[U])==null?void 0:pe.job);let ee=Math.max(0,N.findIndex(Se=>Se.job===J)),oe=!1;const re=document.createElement("div");re.id="pvp-sub-overlay",re.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function ie(){var Ne,Ce,Ye,He,nt,Xt;const Se=G[U],ge=N[ee],ze=Math.min(130,Math.round((window.innerWidth-90)/2)),Ie=Math.round(ze*1.35),se=Pe=>`background:rgba(255,255,255,0.12);border:none;color:${Pe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Pe?"default":"pointer"};flex-shrink:0`;re.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${O.length}/${M})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${se(ee===0)}" ${ee===0?"disabled":""}>▲</button>
          <div>${ge?$t({...ge,used:!1,boost:0},ze,Ie):"<div>—</div>"}</div>
          <button id="pin-down" style="${se(ee>=N.length-1)}" ${ee>=N.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${ee+1}/${N.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${se(U===0)}" ${U===0?"disabled":""}>▲</button>
          <div>${Se?$t({...Se,used:!1,boost:0},ze,Ie):"<div>—</div>"}</div>
          <button id="pout-down" style="${se(U>=G.length-1)}" ${U>=G.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${U+1}/${G.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Ne=re.querySelector("#psub-close"))==null||Ne.addEventListener("click",()=>re.remove()),(Ce=re.querySelector("#pout-up"))==null||Ce.addEventListener("click",()=>{U>0&&(U--,ie())}),(Ye=re.querySelector("#pout-down"))==null||Ye.addEventListener("click",()=>{U<G.length-1&&(U++,ie())}),(He=re.querySelector("#pin-up"))==null||He.addEventListener("click",()=>{ee>0&&(ee--,ie())}),(nt=re.querySelector("#pin-down"))==null||nt.addEventListener("click",()=>{ee<N.length-1&&(ee++,ie())});const Me=(Pe,We,Ue,ft)=>{const rt=re.querySelector("#"+Pe);if(!rt)return;let Dt=0;rt.addEventListener("touchstart",mt=>{Dt=mt.touches[0].clientY},{passive:!0}),rt.addEventListener("touchend",mt=>{const Et=mt.changedTouches[0].clientY-Dt;if(Math.abs(Et)<30)return;const at=We();Et<0&&at<ft-1?(Ue(at+1),ie()):Et>0&&at>0&&(Ue(at-1),ie())},{passive:!0})};Me("pin-panel",()=>ee,Pe=>ee=Pe,N.length),Me("pout-panel",()=>U,Pe=>U=Pe,G.length),(Xt=re.querySelector("#psub-confirm"))==null||Xt.addEventListener("click",async Pe=>{if(Pe.preventDefault(),Pe.stopPropagation(),oe)return;oe=!0;const We=G[U],Ue=N[ee];if(!We||!Ue)return;const ft=We._line,rt=(q[ft]||[]).findIndex(Et=>Et.cardId===We.cardId);if(rt===-1){m("Erreur : joueur introuvable","error"),re.remove();return}const Dt={...Ue,_line:ft,position:We.position,used:!1,boost:0};q[ft].splice(rt,1,Dt);const mt=[...O,Ue.cardId];re.remove(),Be(We,Ue,async()=>{await v({[u+"Team"]:q,[h+"Team"]:f[h+"Team"],["usedSubIds_"+u]:mt})})})}document.body.appendChild(re),ie()}function Be(_,z,q){const O={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const G=(J,ee,oe)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${ee};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${oe}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${O[J.job]||"#555"};border:3px solid ${ee};position:relative;overflow:hidden;margin:0 auto">
        ${Ct(J)?`<img src="${Ct(J)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(J.name||"").slice(0,12)}</div>
    </div>`;M.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${G(z,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${G(_,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(M);let N=!1;const U=()=>{N||(N=!0,M.remove(),setTimeout(()=>q(),50))};M.addEventListener("click",U),setTimeout(U,2200)}function he(){var z;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",_.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${f[h+"Name"]}</div>
      <div style="width:min(90vw,420px)">${io(f[h+"Team"],f[h+"Formation"],null,[],Tt(),Ut())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(_),(z=_.querySelector("#pvp-opp-close"))==null||z.addEventListener("click",()=>_.remove())}function me(){var q;const _=f.log||[],z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",z.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${_.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[..._].reverse().map(O=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${O.type==="goal"?"#FFD700":O.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${O.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(z),(q=z.querySelector("#pvp-hist-close"))==null||q.addEventListener("click",()=>z.remove())}async function ke(){if(f.phase!==u+"-attack")return;const _=u==="p1"?"p2":"p1",z=(f.round||0)+1,q=[...f.log||[]];q.push({type:"info",text:`⏭️ ${f[u+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const O=$e(f),M=de(_),G=O||!M?"finished":_+"-attack";await v({["selected_"+u]:[],modifiers:{...f.modifiers,[u]:{}},pendingAttack:null,phase:G,attacker:_,round:z,log:q}),G==="finished"&&await ye(f)}function P(_){const z=(_.GK||[]).some(O=>!O.used),q=["DEF","MIL","ATT"].some(O=>(_[O]||[]).some(M=>!M.used));return z&&!q}function A(_){return(_.p1Score||0)!==(_.p2Score||0)?null:P(_.p1Team)&&!ce(_.p2Team)?{side:"p1",gk:(_.p1Team.GK||[]).find(z=>!z.used)}:P(_.p2Team)&&!ce(_.p1Team)?{side:"p2",gk:(_.p2Team.GK||[]).find(z=>!z.used)}:null}async function H(){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(_);const z=(q,O)=>new Promise(M=>{_.innerHTML=`<div style="font-size:32px;font-weight:900;color:${O};letter-spacing:2px;animation:lcFade 1.4s ease both">${q}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(M,1400)});await z("⚽ DERNIER CORNER","#FFD700"),await z("🧤 LE GARDIEN MONTE !","#4fc3f7"),_.remove()}async function V(_,z){const{side:q,gk:O}=_;if(!O)return;const M=q+"Score",G=(z[M]||0)+1;O.used=!0;const N=[...z.log||[]];N.push({type:"duel",isGoal:!0,homeScored:q===u,homePlayers:q==="p1"?[Nt(O)]:[],aiPlayers:q==="p2"?[Nt(O)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${z[q+"Name"]} marque !`});const U=(z.round||0)+1,J=q==="p1"?"p2":"p1",ee={...z,[M]:G},oe=$e(ee);L.add(U),await H();const re=q===u?G:z[u+"Score"]||0,ie=q===u?z[h+"Score"]||0:G;Ze([Nt(O)],re,ie,q===u,async()=>{await v({[M]:G,log:N,round:U,pendingAttack:null,phase:oe?"finished":J+"-attack",attacker:J,["selected_"+u]:[],modifiers:{...f.modifiers,[u]:{}}}),oe&&await ye({...f,[M]:G})})}async function Y(){const _=f[u+"Team"],z=!["GK","DEF","MIL","ATT"].some(G=>(f[h+"Team"][G]||[]).some(N=>!N.used)),q=(f["selected_"+u]||[]).map(G=>{const N=(_[G._role]||[]).find(pe=>pe.cardId===G.cardId)||G,U=["GK","DEF"].includes(G._role),J=_[G._role]||[],ee=J.findIndex(pe=>pe.cardId===G.cardId),oe=Lt(J.length),re=ee>=0?oe[ee]:N._col??1,ie=f.stadiumDef||f.homeStadiumDef||null,le=N.stadiumBonus||ie&&(ie.club_id&&String(N.club_id)===String(ie.club_id)||ie.country_code&&N.country_code===ie.country_code)||!1;return{...N,_line:G._role,_col:re,stadiumBonus:le,...U?{note_a:Math.max(1,Number(N.note_a)||0)}:{}}});if(!q.length)return;const O=ui(q,f.modifiers[u]||{},f[u+"Formation"]);xe(u,q.map(G=>G.cardId)),q.forEach(G=>{const N=(_[G._role]||[]).find(U=>U.cardId===G.cardId);N&&(N.used=!0)}),f["selected_"+u]=[],E();const M=[...f.log||[]];if(z){if(q.length===1&&(q[0]._line==="GK"||q[0].job==="GK")&&(f.p1Score||0)===(f.p2Score||0)){await V({side:u,gk:q[0]},{...f,[u+"Team"]:_,log:M});return}const N=(f[u+"Score"]||0)+1,U=q.map(ie=>Nt(ie));M.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:U,homeTotal:O.total,aiTotal:0});const J=(f.round||0)+1,ee=u==="p1"?"p2":"p1",oe={...f,[u+"Team"]:_,[u+"Score"]:N},re=$e(oe);L.add(J),Ze(U,N,f[h+"Score"]||0,!0,async()=>{await v({[u+"Team"]:_,[u+"Score"]:N,["selected_"+u]:[],modifiers:{...f.modifiers,[u]:{}},pendingAttack:null,phase:re?"finished":ee+"-attack",attacker:ee,round:J,log:M}),re&&await ye({...f,[u+"Score"]:N})});return}M.push({type:"pending",text:`⚔️ ${f[u+"Name"]} attaque (${O.total})`}),await v({[u+"Team"]:_,[h+"Team"]:f[h+"Team"],pendingAttack:{...O,players:q,side:u},["selected_"+u]:[],modifiers:{...f.modifiers,[u]:{}},phase:h+"-defense",log:M})}async function R(){const _=f[u+"Team"],z=(f["selected_"+u]||[]).map(ge=>{const ze=(_[ge._role]||[]).find(Ce=>Ce.cardId===ge.cardId)||ge,Ie=_[ge._role]||[],se=Ie.findIndex(Ce=>Ce.cardId===ge.cardId),Me=Lt(Ie.length),Ne=se>=0?Me[se]:ze._col??1;return{...ze,_line:ge._role,_col:Ne}}),q=pi(z,f.modifiers[u]||{},f[u+"Formation"]);xe(u,z.map(ge=>ge.cardId)),z.forEach(ge=>{const ze=(_[ge._role]||[]).find(Ie=>Ie.cardId===ge.cardId);ze&&(ze.used=!0)}),f["selected_"+u]=[],E();const O=oo(f.pendingAttack.total,q.total,f.modifiers[u]||{}),M=f.pendingAttack.side,G=O==="attack"||(O==null?void 0:O.goal),N=M==="p1"?"p2":"p1",U=(f.round||0)+1,J=(f.pendingAttack.players||[]).map(ge=>Nt(ge)),ee=[...f.log||[]];ee.push({type:"duel",isGoal:G,homeScored:G&&M===u,text:G?`⚽ BUT de ${f[M+"Name"]} ! (${f.pendingAttack.total} vs ${q.total})`:`✋ Attaque stoppée (${f.pendingAttack.total} vs ${q.total})`,homePlayers:J,aiPlayers:z.map(ge=>Nt(ge)),homeTotal:f.pendingAttack.total,aiTotal:q.total});const oe=G?(f[M+"Score"]||0)+1:f[M+"Score"]||0,re={...f,[u+"Team"]:_,[M+"Score"]:oe},ie=$e(re),le=ie?"finished":N+"-attack",pe=!ie&&!G?A(re):null,Se=async()=>{if(pe){await V(pe,re);return}await v({[u+"Team"]:_,[h+"Team"]:f[h+"Team"],[M+"Score"]:oe,["selected_"+u]:[],modifiers:{...f.modifiers,[u]:{}},pendingAttack:null,phase:le,attacker:N,round:U,log:ee}),(le==="finished"||ie)&&await ye({...f,[M+"Score"]:oe})};if(G){const ge=M===u,ze=ge?oe:f[u+"Score"]||0,Ie=ge?f[h+"Score"]||0:oe;L.add(U),Ze(J,ze,Ie,ge,Se)}else await Se()}function Z(_){return["MIL","ATT"].some(z=>(_[z]||[]).some(q=>!q.used))}function ce(_){return["GK","DEF","MIL","ATT"].some(z=>(_[z]||[]).some(q=>!q.used))}function fe(_){return ce(_)&&!Z(_)}function de(_){const z=f[_+"Team"],q=f[(_==="p1"?"p2":"p1")+"Team"];return!!(Z(z)||fe(z)&&!ce(q)||fe(z)&&!Z(q)&&ce(q))}function $e(_){return!ce(_.p1Team)&&!ce(_.p2Team)}function Le(_){const z=_.p1Score||0,q=_.p2Score||0;return z===q?null:z>q?w.home_id:w.away_id}async function ye(_){Ht(),Ke();try{const z=Le(_),q=z?w.home_id===z?w.away_id:w.home_id:null,O=_.p1Score||0,M=_.p2Score||0,{data:G,error:N}=await y.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:z,p_home_score:O,p_away_score:M,p_forfeit:!1});if(N&&console.error("[PvP] finish_pvp_match:",N),p)try{await y.rpc("check_and_finish_mini_league",{p_league_id:p})}catch(U){console.error("[PvP] check_and_finish_mini_league:",U)}z&&q&&fa(z,q).catch(()=>{});try{const{data:U}=await y.rpc("apply_match_rewards",{p_match_id:i});U!=null&&U.success&&!(U!=null&&U.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(U){console.error("[PvP] apply_match_rewards:",U)}if(typeof s=="function")try{await s({homeScore:O,awayScore:M,winnerId:z,homeId:w.home_id,awayId:w.away_id,matchId:i})}catch(U){console.error("[PvP] onMatchEnd:",U)}}catch(z){console.error("[PvP] finishMatch:",z)}}function we(){var M;const _=f[u+"Score"],z=f[h+"Score"],q=_>z,O=_===z;It(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${q?"🏆":O?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${q?"Victoire !":O?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${_} - ${z}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${p?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(M=document.getElementById("pvp-home"))==null||M.addEventListener("click",()=>{try{y.removeChannel(S)}catch{}ot(t),p?x("mini-league",{openLeagueId:p}):x("home")})}E()}async function Qi(t,e,i=!1){var d,l;const{state:o,navigate:n,toast:r}=e,a=i&&((l=(d=e==null?void 0:e.state)==null?void 0:d.params)==null?void 0:l.rankedData)||null;await Ci(t,e,i?"ranked":"random",async({deckId:s,formation:p,starters:c,subsRaw:b,gcCardsEnriched:x,gcDefs:m,stadiumDef:u})=>{It(t);const h=async g=>{await ba(t,e,s,p,c,b,g||[],m,u,i,a)};if(!(x!=null&&x.length)){await h([]);return}ji(t,x,h)})}async function ga(t,e,i){return ma(t,e,i)}async function ba(t,e,i,o,n,r,a=[],d=[],l=null,s=!1,p=null){var I,S;const{state:c,navigate:b,toast:x}=e,m=(p==null?void 0:p.mmr)??((I=c.profile)==null?void 0:I.mmr)??450,u=s?yt(m):null,h=s?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",g=s?(u==null?void 0:u.color)||"#D4A017":"#FFD700";let k=!1,w=null,j=null;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${h};color:#fff;padding:32px;text-align:center;gap:20px">
      ${s?`<div style="font-size:36px">${(u==null?void 0:u.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${s?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${s?`<div style="font-size:13px;color:${(u==null?void 0:u.color)||"#D4A017"}">${(u==null?void 0:u.name)||""} · ${Math.round(m)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${g};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const f=async()=>{k=!0,w&&(w.unsubscribe(),w=null),j&&(clearInterval(j),j=null);try{await y.rpc("cancel_matchmaking",{p_user_id:c.profile.id})}catch(v){console.error("[Matchmaking] cancel error:",v)}};(S=document.getElementById("cancel-mm"))==null||S.addEventListener("click",async()=>{await f(),ot(t),b("home")});const B=async(v,D)=>{k||(k=!0,w&&(w.unsubscribe(),w=null),j&&(clearInterval(j),j=null),await Bt(t,e,v,D,{myGC:a,gcDefs:d,stadiumDef:l,isRanked:s,rankedData:p,onMatchEnd:s?xa:null}))},T=c.user.id,{data:$,error:L}=s?await y.rpc("try_matchmake_ranked",{p_user_id:T,p_deck_id:i,p_mmr:m,p_range:200}):await y.rpc("try_matchmake",{p_user_id:T,p_deck_id:i});if(L||!($!=null&&$.success)){console.error("[Matchmaking] try_matchmake error:",L||$),x("Erreur de matchmaking","error"),ot(t),b("home");return}if($.matched){await B($.match_id,!1);return}const W=async()=>{if(k)return;const{data:v}=await y.from("matchmaking_queue").select("status, match_id").eq("user_id",T).maybeSingle();(v==null?void 0:v.status)==="matched"&&v.match_id&&await B(v.match_id,!0)};w=y.channel(`mm_${T}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${T}`},v=>{const D=v.new;D.status==="matched"&&D.match_id&&B(D.match_id,!0)}).subscribe(),j=setInterval(W,3e3),s?setTimeout(async()=>{if(!k){k=!0,w&&(w.unsubscribe(),w=null),j&&(clearInterval(j),j=null);try{await y.rpc("cancel_matchmaking",{p_user_id:c.profile.id})}catch(v){console.error("[Matchmaking] cancel error:",v)}x("Aucun adversaire trouvé — match contre une IA calibrée sur votre niveau","info",4e3),b("match",{matchMode:"ranked_ai",rankedData:p,presetSetup:{deckId:i,formation:o,starters:n,subsRaw:r,gcCardsEnriched:a,gcDefs:d,stadiumDef:l}})}},2e4):setTimeout(()=>{k||f()},12e4)}async function xa(t,e){const{state:i,toast:o}=e,{winnerId:n,homeId:r,awayId:a,homeScore:d,awayScore:l,matchId:s}=t,p=i.user.id,c=r===p,b=n===p,{data:x}=await y.from("users").select("mmr, mmr_rd, mmr_v").eq("id",p).single(),{data:m}=await y.from("users").select("mmr, mmr_rd, mmr_v").eq("id",c?a:r).single();if(x&&m){const u=Xo(x.mmr,x.mmr_rd,x.mmr_v,m.mmr,m.mmr_rd,b?1:0);await y.from("users").update({mmr:u.mmr,mmr_rd:u.rd,mmr_v:u.v,mmr_wins:b?y.sql`mmr_wins + 1`:void 0,mmr_losses:b?void 0:y.sql`mmr_losses + 1`}).eq("id",p),o(b?`+MMR ↑ ${Math.round(u.mmr-x.mmr)}`:`-MMR ↓ ${Math.round(x.mmr-u.mmr)}`,b?"success":"error",4e3)}}const ya=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Qi,resumePvpMatch:ga},Symbol.toStringTag,{value:"Module"}));async function ha(t,e){const{state:i,navigate:o,toast:n}=e,r=i.params||{},a=r.friendId||null,d=r.friendName||"Ami",l=!!r.isAccepting;await Ci(t,e,"friend",async({deckId:s,formation:p,starters:c,subsRaw:b,gcCardsEnriched:x,gcDefs:m,stadiumDef:u})=>{It(t);const h=async g=>{const k=g||[];l?await wa(t,e,s,k,m,u):await va(t,e,s,k,m,u,a,d)};if(!(x!=null&&x.length)){await h([]);return}ji(t,x,h)})}async function va(t,e,i,o,n,r,a,d){var k;const{state:l,navigate:s,toast:p}=e,c=l.user.id,{data:b,error:x}=await y.from("friend_match_invites").insert({inviter_id:c,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(x||!b){console.error("[Friend] Erreur création invitation:",x),p("Impossible de créer l'invitation","error"),s("home");return}t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${d}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let m=!1,u=null;const h=async()=>{u&&(u.unsubscribe(),u=null)};(k=document.getElementById("cancel-friend"))==null||k.addEventListener("click",async()=>{await h(),await y.from("friend_match_invites").update({status:"declined"}).eq("id",b.id),ot(t),s("home")}),u=y.channel(`friend_invite_${b.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${b.id}`},async({new:w})=>{m||w.status!=="accepted"||!w.match_id||(m=!0,await h(),await Bt(t,e,w.match_id,!0,{myGC:o,gcDefs:n,stadiumDef:r}))}).subscribe();const g=setInterval(async()=>{if(m)return;const{data:w}=await y.from("friend_match_invites").select("status, match_id").eq("id",b.id).single();(w==null?void 0:w.status)==="accepted"&&w.match_id&&(m=!0,clearInterval(g),await h(),await Bt(t,e,w.match_id,!0,{myGC:o,gcDefs:n,stadiumDef:r}))},3e3);setTimeout(async()=>{m||(clearInterval(g),await h(),p("Invitation expirée","info"),s("home"))},12e4)}async function wa(t,e,i,o,n,r){const{state:a,navigate:d,toast:l}=e,s=a.user.id,{data:p}=await y.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",s).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!p){l("Aucune invitation en attente","error"),d("home");return}const{data:c,error:b}=await y.rpc("accept_friend_invite",{p_invite_id:p.id,p_invitee_deck_id:i});if(b||!(c!=null&&c.success)){console.error("[Friend] Erreur accept_friend_invite:",b||c),l((c==null?void 0:c.error)||"Impossible de rejoindre le match","error"),d("home");return}await Bt(t,e,c.match_id,!1,{myGC:o,gcDefs:n,stadiumDef:r})}const Sn="#1A6B3C",lt="#D4A017",ni="var(--tile-bg)",ri="var(--tile-border)",At="var(--divider)",Xe="var(--tile-fg-on-page)",zt="var(--tile-fg-dim)",et="var(--tile-fg-faint)",si="var(--nav-fg,#fff)",zn="rgba(255,255,255,0.62)",_a="rgba(255,255,255,0.4)";async function ka(t,e){var o;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(o=e.state.params)==null?void 0:o.openLeagueId;if(i){e.state.params.openLeagueId=null,await pt(t,e,i);return}await tt(t,e)}async function tt(t,e,i="waiting"){var w,j;const{state:o}=e,n=o.profile.id,{data:r}=await y.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",n),a=(r||[]).map(f=>f.league_id),d={};(r||[]).forEach(f=>{d[f.league_id]={amount:f.prize_amount,claimed:f.prize_claimed}});const{data:l,error:s}=await y.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),p=s?(await y.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:l||[],b=(a.length?await y.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],x=b.filter(f=>f.status==="waiting"&&!f.is_archived),m=b.filter(f=>f.status==="active"&&!f.is_archived),u=b.filter(f=>f.is_archived||f.status==="finished");let h=u;if(u.length){const{data:f}=await y.from("mini_league_matches").select("league_id").in("league_id",u.map(T=>T.id)).or(`home_id.eq.${n},away_id.eq.${n}`).not("status","eq","bye"),B=new Set((f||[]).map(T=>T.league_id));h=u.filter(T=>B.has(T.id))}const g=p.filter(f=>!a.includes(f.id)),k=[{key:"waiting",label:"🟡 En attente",count:x.length+g.length},{key:"active",label:"🟢 En cours",count:m.length},{key:"archived",label:"📁 Archivées",count:h.length}];t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${At};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${si}">🏆 Mini League</div>
        <div style="font-size:12px;color:${zn}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${si}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${At}">
      ${k.map(f=>`<button class="ml-tab" data-tab="${f.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===f.key?Sn:"transparent"};background:none;font-size:12px;font-weight:${i===f.key?"900":"600"};color:${i===f.key?"#4ade80":_a};cursor:pointer">${f.label}${f.count?` (${f.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?$a(x,g,n):i==="active"?Ea(m,n):Sa(h,n,d)}
    </div>
  </div>`,(w=document.getElementById("ml-create-btn"))==null||w.addEventListener("click",()=>za(t,e)),(j=document.getElementById("ml-refresh-list"))==null||j.addEventListener("click",()=>tt(t,e,i)),t.querySelectorAll(".ml-tab").forEach(f=>f.addEventListener("click",()=>tt(t,e,f.dataset.tab))),t.querySelectorAll("[data-league-id]").forEach(f=>f.addEventListener("click",()=>pt(t,e,f.dataset.leagueId))),t.querySelectorAll("[data-join]").forEach(f=>f.addEventListener("click",B=>{B.stopPropagation(),Ln(t,e,f.dataset.join,f.dataset.type)})),t.querySelectorAll("[data-delete]").forEach(f=>f.addEventListener("click",B=>{B.stopPropagation(),Zi(t,e,f.dataset.delete,f.dataset.name,i)})),t.querySelectorAll("[data-claim-league]").forEach(f=>f.addEventListener("click",async B=>{B.stopPropagation(),f.disabled=!0,f.textContent="...";const{data:T,error:$}=await y.rpc("claim_mini_league_prize",{p_league_id:f.dataset.claimLeague,p_user_id:o.profile.id});if($||!(T!=null&&T.success)){e.toast((T==null?void 0:T.error)||"Erreur lors de la récupération","error"),tt(t,e,i);return}if(!T.already_claimed){o.profile.credits=(o.profile.credits||0)+T.prize;const L=document.getElementById("nav-credits");L&&(L.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),e.toast(`💰 +${T.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}tt(t,e,i)}))}function Ti(t,e,i=!1,o=null){var l,s;const n=t.creator_id===e,r=t.pot||0,a=((s=(l=t.mini_league_members)==null?void 0:l[0])==null?void 0:s.count)||0,d=o&&o.amount>0&&!o.claimed;return`<div data-league-id="${t.id}" style="background:${ni};border:1px solid ${d?"rgba(212,160,23,0.5)":ri};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${Xe}">${t.name}</div>
      ${n?`<button data-delete="${t.id}" data-name="${t.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${zt};margin-bottom:${i||d?"10px":"0"}">
      <span>${t.type==="private"?"🔒":"🌐"} ${t.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${t.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${t.max_players}</span>
      <span>💰 ${(t.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${r>0?`<span style="color:${lt};font-weight:700">🏆 ${r.toLocaleString("fr")} cr.</span>`:""}
      ${t.current_day>0?`<span>📅 J${t.current_day}/${t.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${t.id}" data-type="${t.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(t.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
    ${d?`<button data-claim-league="${t.id}" class="btn btn-sm" style="width:100%;background:${lt};color:#141000;font-weight:900;border:none">💰 Récupérer ${o.amount.toLocaleString("fr")} cr.</button>`:""}
  </div>`}function $a(t,e,i){const o=[];return t.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${et};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),o.push(...t.map(n=>Ti(n,i,!1)))),e.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${et};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),o.push(...e.map(n=>Ti(n,i,!0)))),o.length?o.join(""):`<div style="text-align:center;padding:40px;color:${et}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function Ea(t,e){return t.length?t.map(i=>Ti(i,e)).join(""):`<div style="text-align:center;padding:40px;color:${et}">Aucune mini league en cours.</div>`}function Sa(t,e,i={}){return t.length?t.map(o=>Ti(o,e,!1,i[o.id])).join(""):`<div style="text-align:center;padding:40px;color:${et}">Aucune mini league archivée.</div>`}function za(t,e){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(o=>o.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=o.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var m,u,h,g;const{toast:o}=e,n=document.getElementById("ml-name").value.trim(),r=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,d=((m=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:m.value)||"public",l=((u=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:u.value)||"aller",s=((g=(h=document.getElementById("ml-pwd"))==null?void 0:h.value)==null?void 0:g.trim())||null;if(!n){o("Le nom est obligatoire","error");return}if(a<100){o("Mise minimum : 100 crédits","error");return}if(d==="private"&&!s){o("Mot de passe requis","error");return}const{data:p,error:c}=await y.from("mini_leagues").insert({name:n,creator_id:e.state.profile.id,type:d,password:s,mode:l,max_players:r,entry_fee:a}).select().single();if(c){o("Erreur : "+c.message,"error");return}const{data:b}=await y.from("users").select("credits").eq("id",e.state.profile.id).single();if(((b==null?void 0:b.credits)||0)<a){await y.from("mini_leagues").delete().eq("id",p.id),o(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await y.from("users").update({credits:b.credits-a}).eq("id",e.state.profile.id),await y.from("mini_leagues").update({pot:a}).eq("id",p.id),await y.from("mini_league_members").insert({league_id:p.id,user_id:e.state.profile.id}),e.state.profile&&(e.state.profile.credits=b.credits-a);const x=document.getElementById("nav-credits");x&&(x.textContent=`💰 ${(e.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),o(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),pt(t,e,p.id)})}function La(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",e.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(e);const i=e.querySelector("#ml-pwd-input"),o=n=>{e.remove(),t(n)};setTimeout(()=>i==null?void 0:i.focus(),80),e.querySelector("#pwd-cancel").addEventListener("click",()=>o(null)),e.querySelector("#pwd-ok").addEventListener("click",()=>o(i.value.trim())),i.addEventListener("keydown",n=>{n.key==="Enter"&&o(i.value.trim())})})}async function Ln(t,e,i,o){var c;const{toast:n,state:r}=e,a=r.profile.id;let d=null;if(o==="private"&&(d=await La(),d===null))return;const{data:l,error:s}=await y.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:d});if(s||!(l!=null&&l.success)){console.error("[MiniLeague] join_mini_league:",s||l),n((l==null?void 0:l.error)||"Erreur lors de l'inscription","error");return}if(typeof e.refreshProfile=="function")await e.refreshProfile();else{const{data:b}=await y.from("users").select("credits").eq("id",a).single();r.profile&&b&&(r.profile.credits=b.credits)}const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${(((c=r.profile)==null?void 0:c.credits)||0).toLocaleString("fr")}`),n("✅ Inscrit ! Pot mis à jour.","success"),pt(t,e,i)}async function Ia(t,e,i,o){const{toast:n,state:r}=e,a=r.profile.id;if(!await new Promise(b=>{const x=document.createElement("div");x.className="modal-overlay",x.style.zIndex="2100",x.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${o.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(x),x.querySelector("#lv-ok").onclick=()=>{x.remove(),b(!0)},x.querySelector("#lv-cancel").onclick=()=>{x.remove(),b(!1)}}))return;const{data:l,error:s}=await y.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(s||!(l!=null&&l.success)){n((l==null?void 0:l.error)||"Erreur lors de la désinscription","error");return}const p=l.refund||o;r.profile&&(r.profile.credits=(r.profile.credits||0)+p);const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),n(`↩️ Désinscrit · +${p.toLocaleString("fr")} cr. remboursés`,"success"),tt(t,e,"waiting")}async function Zi(t,e,i,o,n){const{toast:r}=e;if(!confirm(`Supprimer définitivement "${o}" et tous ses matchs/membres ? Action irréversible.`))return;await y.from("mini_league_matches").delete().eq("league_id",i),await y.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await y.from("mini_leagues").delete().eq("id",i);if(a){r("Erreur suppression ("+a.message+")","error");return}r("Mini League supprimée avec succès","success"),tt(t,e,n)}async function Aa(t,e,i){await y.from("mini_leagues").update({is_archived:!0}).eq("id",i),e.toast("Mini League archivée","success"),tt(t,e,"archived")}async function pt(t,e,i){var j,f,B,T,$,L,W,I,S;const{state:o,toast:n}=e,r=o.profile.id,[{data:a},{data:d},{data:l}]=await Promise.all([y.from("mini_leagues").select("*").eq("id",i).single(),y.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),y.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){n("Introuvable","error"),await tt(t,e);return}const s=(d||[]).some(v=>v.user_id===r),p=a.creator_id===r,c=(d||[]).map(v=>v.user).filter(Boolean),b=qa(c,l||[]),x=(l||[]).filter(v=>v.matchday===a.current_day),m=a.pot||0,u=a.entry_fee||100,h=x.length>0&&x.every(v=>v.status==="finished"||v.status==="bye"),g=a.current_day>=a.total_days,k=(d||[]).find(v=>v.user_id===r);t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${At};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${si}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${si};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${si}">${a.name}</div>
        <div style="font-size:11px;color:${zn}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${u} cr./joueur</div>
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
      <div style="background:${ni};border:1px solid ${ri};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Xe}">👥 Joueurs (${c.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${zt};margin-bottom:10px">💰 ${u} cr./joueur → Pot estimé : ${(u*c.length).toLocaleString("fr")} cr. (🥇${Math.floor(u*c.length*.7).toLocaleString("fr")} · 🥈${Math.floor(u*c.length*.2).toLocaleString("fr")} · 🥉${Math.floor(u*c.length*.1).toLocaleString("fr")})</div>
        ${c.map(v=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${At}">
            <div style="width:36px;height:36px;border-radius:50%;background:${v.club_color2||Sn};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${v.club_color1||"#fff"}">${(v.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Xe}">${v.club_name||v.pseudo}</div><div style="font-size:11px;color:${et}">@${v.pseudo}</div></div>
            ${v.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${p&&c.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${u} cr. × ${c.length})</button>`:""}
        ${p?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${s?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${u} cr.)</button>`}
        ${s&&!p?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${u.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${ni};border:1px solid ${ri};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${x.map(v=>Oo(v,c,r,s)).join("")}
        ${p&&h&&!g?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&b.length?`
      <div style="background:${ni};border:1px solid ${ri};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${et};text-transform:uppercase;border-bottom:2px solid ${At}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${m>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${lt}">💰</th>`:""}
          </tr></thead>
          <tbody>${b.map((v,D)=>{const X=m>0&&a.status==="finished"?D===0?Math.floor(m*.7):D===1?Math.floor(m*.2):D===2?Math.floor(m*.1):0:0;return`<tr style="border-bottom:1px solid ${At};${v.userId===r?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${D===0?lt:D<3?"#4ade80":zt}">${["🥇","🥈","🥉"][D]||D+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Xe}">${v.clubName}</div><div style="font-size:10px;color:${et}">@${v.pseudo}</div></td>
              <td style="text-align:center;color:${zt}">${v.played}</td><td style="text-align:center;color:${zt}">${v.won}-${v.drawn}-${v.lost}</td>
              <td style="text-align:center;color:${v.goalDiff>=0?"#4ade80":"#ff6b6b"}">${v.goalDiff>=0?"+":""}${v.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Xe}">${v.points}</td>
              ${m>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${lt}">${X?X.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${ni};border:1px solid ${ri};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(v,D)=>D+1).reverse().map(v=>{const D=(l||[]).filter(X=>X.matchday===v);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${et};margin-bottom:6px">Journée ${v}</div>${D.map(X=>Oo(X,c,r,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${p&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${zt}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const w=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((j=document.getElementById("ml-back"))==null||j.addEventListener("click",()=>tt(t,e,w)),(f=document.getElementById("ml-refresh"))==null||f.addEventListener("click",async v=>{const D=v.currentTarget;D.style.opacity="0.5",await pt(t,e,i)}),(B=document.getElementById("ml-start-btn"))==null||B.addEventListener("click",()=>Ta(t,e,a,c)),(T=document.getElementById("ml-next-day"))==null||T.addEventListener("click",()=>Ma(t,e,i)),($=document.getElementById("ml-join-now"))==null||$.addEventListener("click",()=>Ln(t,e,i,a.type)),(L=document.getElementById("ml-leave-btn"))==null||L.addEventListener("click",()=>Ia(t,e,i,u)),(W=document.getElementById("ml-delete-btn"))==null||W.addEventListener("click",()=>Zi(t,e,i,a.name,"waiting")),(I=document.getElementById("ml-delete-now"))==null||I.addEventListener("click",()=>Zi(t,e,i,a.name,w)),(S=document.getElementById("ml-archive-btn"))==null||S.addEventListener("click",()=>Aa(t,e,i)),t.querySelectorAll("[data-play-match]").forEach(v=>{v.addEventListener("click",()=>{const D=x.find(X=>X.id===v.dataset.playMatch);D&&(ut(),e.navigate("match-mini-league",{mlMatchId:D.id,leagueId:i}))})}),a.status==="finished"&&k){const v=b.findIndex(D=>D.userId===r);v>=0&&v<3&&k.prize_amount>0&&!k.prize_claimed&&setTimeout(()=>Ca(t,e,a,k,v),400)}}function Oo(t,e,i,o,n=!1){const r=c=>e.find(b=>b.id===c);if(t.is_bye){const c=r(t.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${zt};text-align:center">🔵 ${(c==null?void 0:c.club_name)||(c==null?void 0:c.pseudo)||"?"} exempté(e)</div>`}const a=r(t.home_id),d=r(t.away_id),l=t.home_id===i||t.away_id===i,s=l&&t.status==="pending"&&o&&!n,p=t.status==="finished"?`${t.home_score} - ${t.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${l?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${l?"rgba(74,222,128,0.35)":At}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${t.status==="finished"?"#4ade80":et}">${p}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"?"}</div>
    ${s?`<button data-play-match="${t.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${t.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function Ta(t,e,i,o){const{toast:n,state:r}=e,a=ja(o.map(s=>s.id),i.mode),d=[];a.forEach((s,p)=>s.forEach(c=>d.push({league_id:i.id,matchday:p+1,home_id:c.home||c.bye,away_id:c.away||null,is_bye:!!c.bye,status:c.bye?"bye":"pending"})));const{error:l}=await y.from("mini_league_matches").insert(d);if(l){n("Erreur calendrier : "+l.message,"error");return}await y.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),n(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),pt(t,e,i.id)}async function Ma(t,e,i){const{data:o}=await y.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),n=(o.current_day||0)+1;if(n>(o.total_days||0)){pt(t,e,i);return}await y.from("mini_leagues").update({current_day:n}).eq("id",i),e.toast(`Journée ${n} commencée !`,"success"),pt(t,e,i)}async function Ca(t,e,i,o,n){var b,x;const{state:r,toast:a}=e,d=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],l=["🥇","🥈","🥉"][n],s=o.prize_amount||d[n]||0,p=o.prize_claimed,c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",c.innerHTML=`
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
    </div>`,document.body.appendChild(c),(b=c.querySelector("#prize-close"))==null||b.addEventListener("click",()=>c.remove()),(x=c.querySelector("#claim-prize-btn"))==null||x.addEventListener("click",async m=>{const u=m.currentTarget;u.disabled=!0,u.textContent="...";const{data:h,error:g}=await y.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:r.profile.id});if(g||!(h!=null&&h.success)){console.error("[MiniLeague] claim_mini_league_prize:",g||h),a((h==null?void 0:h.error)||"Erreur lors de la récupération","error"),u.disabled=!1,u.textContent=`💰 Récupérer ${s.toLocaleString("fr")} cr.`;return}if(h.already_claimed)a("Déjà récupéré précédemment","info");else{const k=(r.profile.credits||0)+h.prize;r.profile&&(r.profile.credits=k);const w=document.getElementById("nav-credits");w&&(w.textContent=`💰 ${k.toLocaleString("fr")}`),a(`💰 +${h.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}c.remove(),pt(t,e,i.id)})}function ja(t,e){const o=t.length%2===0?[...t]:[...t,null],n=o.length;let r=o.slice(1);const a=[];for(let d=0;d<n-1;d++){const l=[],s=[o[0],...r];for(let p=0;p<n/2;p++){const c=s[p],b=s[n-1-p];c===null?l.push({bye:b}):b===null?l.push({bye:c}):l.push({home:c,away:b})}a.push(l),r=[r[r.length-1],...r.slice(0,-1)]}return e==="aller-retour"?[...a,...a.map(d=>d.map(l=>l.bye?l:{home:l.away,away:l.home}))]:a}function qa(t,e){const i={};return t.forEach(o=>{i[o.id]={userId:o.id,pseudo:o.pseudo,clubName:o.club_name||o.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),e.filter(o=>o.status==="finished"&&!o.is_bye&&o.home_score!=null).forEach(o=>{const n=i[o.home_id],r=i[o.away_id];!n||!r||(n.played++,r.played++,n.goalsFor+=o.home_score,n.goalsAgainst+=o.away_score,r.goalsFor+=o.away_score,r.goalsAgainst+=o.home_score,o.home_score>o.away_score?(n.won++,n.points+=3,r.lost++):o.home_score<o.away_score?(r.won++,r.points+=3,n.lost++):(n.drawn++,n.points++,r.drawn++,r.points++),n.goalDiff=n.goalsFor-n.goalsAgainst,r.goalDiff=r.goalsFor-r.goalsAgainst)}),Object.values(i).sort((o,n)=>n.points-o.points||n.goalDiff-o.goalDiff||n.goalsFor-o.goalsFor)}async function Ho(t,e){const{state:i,navigate:o,toast:n}=e,r=i.params||{},a=r.leagueId||null,d=r.mlMatchId||null,l=i.user.id;if(!d||!a){n("Match introuvable","error"),o("mini-league");return}const{data:s,error:p}=await y.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",d).single();if(p||!s){n("Match introuvable","error"),o("mini-league",{openLeagueId:a});return}if(s.home_id!==l&&s.away_id!==l){n("Vous ne faites pas partie de ce match","error"),o("mini-league",{openLeagueId:a});return}const c=s.home_id===l;if(s.match_id){await Bt(t,e,s.match_id,c,{mlLeagueId:a,mlMatchId:d});return}await Ci(t,e,"mini_league",async({deckId:b,gcCardsEnriched:x,gcDefs:m,stadiumDef:u})=>{It(t);const h=async g=>{const{data:k,error:w}=await y.rpc("start_mini_league_match",{p_ml_match_id:d,p_user_id:l,p_deck_id:b});if(w||!(k!=null&&k.success)){console.error("[MiniLeague] start_mini_league_match error:",w||k),n((k==null?void 0:k.error)||"Impossible de lancer le match","error"),o("mini-league",{openLeagueId:a});return}if(k.matched){await Bt(t,e,k.match_id,c,{mlLeagueId:a,mlMatchId:d,myGC:g||[],gcDefs:m,stadiumDef:u});return}await Ba(t,e,{mlMatchId:d,leagueId:a,amIHome:c,chosenGC:g,gcDefs:m,stadiumDef:u})};if(!(x!=null&&x.length)){await h([]);return}ji(t,x,h)})}function Ba(t,e,{mlMatchId:i,leagueId:o,amIHome:n,chosenGC:r,gcDefs:a,stadiumDef:d}){return new Promise(l=>{var u;const{navigate:s}=e;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let p=!1;const c=async h=>{if(!p){if(p=!0,clearInterval(m),x)try{x.unsubscribe()}catch{}h&&await Bt(t,e,h,n,{mlLeagueId:o,mlMatchId:i,myGC:r||[],gcDefs:a,stadiumDef:d}),l()}};(u=document.getElementById("wait-back"))==null||u.addEventListener("click",()=>{if(p=!0,clearInterval(m),x)try{x.unsubscribe()}catch{}s("mini-league",{openLeagueId:o}),l()});const b=async()=>{if(p)return;const{data:h}=await y.from("mini_league_matches").select("match_id").eq("id",i).single();h!=null&&h.match_id&&c(h.match_id)},x=y.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},h=>{var g;(g=h.new)!=null&&g.match_id&&c(h.new.match_id)}).subscribe(),m=setInterval(b,3e3);b()})}const Uo={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Gt(t,e,i=0){return e?(Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0)+(e===t.job||e===t.job2?i:0):0}async function Da(t,e){t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await yo(t,e)}async function yo(t,e){var B,T;const{state:i,toast:o,navigate:n}=e;Wt(n,i.profile,"market","/icons/",o);const{data:r}=await y.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:a}=await y.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),{data:d}=await y.from("cards").select("player_id").eq("owner_id",i.profile.id).eq("card_type","player").not("player_id","is",null),l=new Set((d||[]).map($=>$.player_id)),{data:s}=await y.from("decks").select("id").eq("owner_id",i.profile.id),p=(s||[]).map($=>$.id);let c=new Set;if(p.length){const{data:$}=await y.from("deck_cards").select("card:cards(player_id)").in("deck_id",p);c=new Set(($||[]).map(L=>{var W;return(W=L.card)==null?void 0:W.player_id}).filter(Boolean))}const b=(r||[]).filter($=>$.seller_id!==i.profile.id),x=a||[];t.innerHTML=`
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
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-top:2px">${b.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
    </div>

    <!-- Onglets -->
    <div style="padding:8px 16px;background:var(--tile-bg);border-bottom:1px solid var(--tile-border);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--tile-border);background:var(--tile-bg);color:var(--tile-fg-dim);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${x.length})</button>
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
  </div>`;let m="buy",u="";const h=()=>{var $,L,W,I,S,v,D,X;return{name:((($=document.getElementById("flt-name"))==null?void 0:$.value)||"").toLowerCase().trim(),club:(((L=document.getElementById("flt-club"))==null?void 0:L.value)||"").toLowerCase().trim(),country:(((W=document.getElementById("flt-country"))==null?void 0:W.value)||"").toLowerCase().trim(),job:((I=document.getElementById("flt-job"))==null?void 0:I.value)||"",rarity:((S=document.getElementById("flt-rarity"))==null?void 0:S.value)||"",sort:((v=document.getElementById("flt-sort"))==null?void 0:v.value)||"",note1:parseInt((D=document.getElementById("flt-note1"))==null?void 0:D.value)||0,note2:parseInt((X=document.getElementById("flt-note2"))==null?void 0:X.value)||0}};function g($){const L=h(),W=$.filter(S=>{var Q,K,te;const v=(Q=S.card)==null?void 0:Q.player;if(!v)return!1;const D=`${v.firstname} ${v.surname_real}`.toLowerCase(),X=(((K=v.clubs)==null?void 0:K.encoded_name)||"").toLowerCase(),F=(v.country_code||"").toLowerCase(),ae=((te=S.card)==null?void 0:te.evolution_bonus)||0,xe=Gt(v,v.job,ae),C=v.job2?Gt(v,v.job2,ae):0;if(L.name&&!D.includes(L.name)||L.club&&!X.includes(L.club)||L.country&&!F.includes(L.country)||L.job&&v.job!==L.job||L.rarity&&v.rarity!==L.rarity||L.note1&&xe<L.note1||L.note2&&C<L.note2)return!1;const E=l.has(v.id);return!(u==="owned"&&!E||u==="new"&&E||u==="indeck"&&!c.has(v.id))}),I=S=>{var X,F;const v=(X=S.card)==null?void 0:X.player;if(!v)return 0;const D=((F=S.card)==null?void 0:F.evolution_bonus)||0;return Math.max(Gt(v,v.job,D),v.job2?Gt(v,v.job2,D):0)};return L.sort==="note_desc"?[...W].sort((S,v)=>I(v)-I(S)):L.sort==="note_asc"?[...W].sort((S,v)=>I(S)-I(v)):L.sort==="price_asc"?[...W].sort((S,v)=>S.price-v.price):L.sort==="price_desc"?[...W].sort((S,v)=>v.price-S.price):W}function k($){var xe,C,E;const L=(xe=$.card)==null?void 0:xe.player;if(!L)return"";const W=((C=$.card)==null?void 0:C.evolution_bonus)||0,I=(i.profile.credits||0)>=$.price,S=l.has(L.id),v=c.has(L.id),D=qe({...L,_evolution_bonus:W},{width:140}),X=S?"font-size:12px;padding:8px 10px;background:linear-gradient(135deg,#D4A017,#f0c040);border:none;color:#1a1a1a;font-weight:900;display:flex;align-items:center;justify-content:center;gap:5px;width:100%":"font-size:12px;padding:8px 10px;display:flex;align-items:center;justify-content:center;gap:5px;width:100%",F=v?'<img src="/icons/nav-decks.png" alt="Dans une de tes équipes" style="width:16px;height:16px;object-fit:contain;flex-shrink:0">':"",ae=[S?"Tu possèdes déjà ce joueur":"",v?"Il est aligné dans une de tes équipes":""].filter(Boolean).join(" · ");return`<div class="mkt-buy-tile">
      ${D}
      <div class="mkt-price">${$.price.toLocaleString("fr")} cr.</div>
      <div class="mkt-seller">Vendeur : ${((E=$.seller)==null?void 0:E.pseudo)||"—"}</div>
      <button class="btn btn-primary btn-sm" data-buy="${$.id}" ${I?"":"disabled"} style="${X}" title="${ae}"><span>${I?S?"🟡 Acheter":"Acheter":"Trop cher"}</span>${F}</button>
    </div>`}function w($){var C,E,Q,K;const L=(C=$.card)==null?void 0:C.player;if(!L)return"";const W=((E=$.card)==null?void 0:E.evolution_bonus)||0,I=Gt(L,L.job,W),S=L.job2?Gt(L,L.job2,W):0,v=$.status==="sold",D=L.country_code?`https://flagsapi.com/${L.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,X=Uo[L.job]||"#bbb",F=L.job2?Uo[L.job2]||"#bbb":null,ae=L.job==="GK"?"#fff":X,xe=L.job2==="GK"?"#fff":F;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${v?"opacity:0.7":""}">
      ${D?`<img src="${D}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(Q=L.clubs)!=null&&Q.logo_url?`<img src="${L.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${X};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${ae};font-family:Arial Black,Arial">${I}</span>
        </div>
        ${S?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${F};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${xe};font-family:Arial Black,Arial">${S}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${L.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${L.surname_real}</div>
        <div style="font-size:10px;color:${v?"#22c55e":"#999"};margin-top:1px">
          ${v?`✅ Vendu à ${((K=$.buyer)==null?void 0:K.pseudo)||"—"} · ${$.sold_at?new Date($.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date($.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${$.price.toLocaleString("fr")}</div>
        ${v?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${$.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function j(){const $=document.getElementById("mkt-content"),L=document.getElementById("mkt-filters");if($){if(L.style.display=m==="buy"?"flex":"none",m==="buy"){const W=g(b);$.innerHTML=W.length?`<div class="mkt-buy-grid">${W.map(k).join("")}</div>`:'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const W=x.filter(S=>S.status==="active").sort((S,v)=>new Date(v.listed_at)-new Date(S.listed_at)),I=x.filter(S=>S.status==="sold").sort((S,v)=>new Date(v.sold_at||v.listed_at)-new Date(S.sold_at||S.listed_at));$.innerHTML=(W.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${W.length})</div>`+W.map(w).join(""):"")+(I.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${I.length})</div>`+I.map(w).join(""):"")+(!W.length&&!I.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}$.querySelectorAll("[data-buy]").forEach(W=>W.addEventListener("click",()=>Fa(W.dataset.buy,b,t,e))),$.querySelectorAll("[data-cancel]").forEach(W=>W.addEventListener("click",()=>Ra(W.dataset.cancel,t,e)))}}if(t.querySelectorAll(".mkt-tab").forEach($=>{$.addEventListener("click",()=>{m=$.dataset.tab,t.querySelectorAll(".mkt-tab").forEach(L=>{const W=L===$;L.style.background=W?"var(--green)":"var(--tile-bg)",L.style.color=W?"#fff":"var(--tile-fg-dim)",L.style.borderColor=W?"var(--green)":"var(--tile-border)"}),j()})}),(T=(B=e.state)==null?void 0:B.params)!=null&&T.search){const $=document.getElementById("flt-name");$&&($.value=e.state.params.search),e.state.params={},j()}let f;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-sort","flt-note1","flt-note2"].forEach($=>{var L,W;(L=document.getElementById($))==null||L.addEventListener("input",()=>{clearTimeout(f),f=setTimeout(j,250)}),(W=document.getElementById($))==null||W.addEventListener("change",()=>{clearTimeout(f),f=setTimeout(j,100)})}),t.querySelectorAll(".mkt-own-btn").forEach($=>{$.addEventListener("click",()=>{u=$.dataset.own||"",t.querySelectorAll(".mkt-own-btn").forEach(L=>L.classList.toggle("active",L===$)),j()})}),j()}async function Fa(t,e,i,o){const{state:n,toast:r,refreshProfile:a}=o,d=e.find(p=>p.id===t);if(!d)return;const l=d.price;if((n.profile.credits||0)<l){r("Crédits insuffisants","error");return}Pa(d,async()=>{const{error:p}=await y.rpc("buy_market_card",{p_listing_id:t,p_buyer_id:n.profile.id});if(p){r("Erreur achat : "+p.message,"error");return}await a();const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(n.profile.credits||0).toLocaleString("fr")}`),r("✅ Carte achetée !","success"),await yo(i,o)})}function Pa(t,e){var a;const i=(a=t.card)==null?void 0:a.player,o=i?`${i.firstname} ${i.surname_real}`:"cette carte",n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",n.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${o} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${t.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(n);const r=d=>{n.remove(),d&&e()};n.querySelector("#buy-cancel").addEventListener("click",()=>r(!1)),n.querySelector("#buy-ok").addEventListener("click",()=>r(!0)),n.addEventListener("click",d=>{d.target===n&&r(!1)})}async function Ra(t,e,i){const{toast:o}=i,{data:n}=await y.from("market_listings").select("card_id").eq("id",t).single();if(await y.from("market_listings").update({status:"cancelled"}).eq("id",t),n!=null&&n.card_id){const{count:r}=await y.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",n.card_id).eq("status","active");r||await y.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",n.card_id)}o("Annonce retirée","success"),yo(e,i)}async function Na(t,e){var x,m,u,h,g;const{state:i,navigate:o}=e,n=((m=(x=e==null?void 0:e.state)==null?void 0:x.params)==null?void 0:m.tab)||"ranked";t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:r},{data:a},{data:d}]=await Promise.all([y.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").order("mmr",{ascending:!1}).limit(100),y.rpc("get_mini_league_leaderboard"),y.rpc("get_random_leaderboard")]);let l=n;const s=k=>k<3?["#D4A017","#a0a0a0","#cd7f32"][k]:"var(--green)",p=k=>k<3?"#000":"#fff";function c(){var j,f,B;const k=document.getElementById("rankings-legend");k&&(k.innerHTML=l==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const w=document.getElementById("rankings-list");if(w){if(l==="ranked"){const T=r||[];w.innerHTML=T.length>0?T.map(($,L)=>{const W=yt($.mmr??450),I=ki($.mmr??450,W),S=W.label+(I?" "+I:""),v=($.ranked_wins||0)+($.ranked_losses||0)+($.ranked_draws||0),D=v>0?Math.round(($.ranked_wins||0)/v*100):0,X=$.id===i.profile.id,F=($.placement_matches||0)<10;return`
          <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${X?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${L<3?["#D4A017","#a0a0a0","#cd7f32"][L]:"rgba(255,255,255,0.08)"};color:${L<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${L<3?"16":"13"}px">${L<3?["🥇","🥈","🥉"][L]:L+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${W.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${$.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${$.club_name}${F?"":` · ${D}% WR`}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:13px;font-weight:900;letter-spacing:0.3px;color:${W.color};white-space:nowrap">${F?"❓ Placement":S.toUpperCase()}</div>
              ${F?"":`<div style="font-size:11px;color:var(--tile-fg-dim);margin-top:1px">${($.mmr??450).toLocaleString("fr")} MMR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(l==="mini-league"){const T=a||[];w.innerHTML=T.length>0?T.map(($,L)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${$.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(L)};color:${p(L)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${L<3?"16":"13"}px">${L<3?["🥇","🥈","🥉"][L]:L+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${$.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${$.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${$.top1} 🥈${$.top2} 🥉${$.top3}</div>
            <div style="color:var(--tile-fg-dim)">${$.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const T=d||[];w.innerHTML=T.length>0?T.map(($,L)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${$.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(L)};color:${p(L)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${L<3?"16":"13"}px">${L<3?["🥇","🥈","🥉"][L]:L+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${$.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${$.club_name}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:16px;font-weight:900;color:#D4A017" title="Score de classement — tient compte du nombre de matchs joués">📊 ${$.wilson_score}</div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">${$.wins}/${$.total} V</div>
            <div style="font-size:9px;color:var(--green);font-weight:700;margin-top:2px">${$.win_pct}%</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}(j=document.getElementById("tab-ranked"))!=null&&j.style&&(document.getElementById("tab-ranked").style.cssText=b(l==="ranked")),(f=document.getElementById("tab-mini-league"))!=null&&f.style&&(document.getElementById("tab-mini-league").style.cssText=b(l==="mini-league")),(B=document.getElementById("tab-random"))!=null&&B.style&&(document.getElementById("tab-random").style.cssText=b(l==="random"))}}const b=k=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${k?"900":"400"};background:${k?"var(--green)":"rgba(255,255,255,0.06)"};color:${k?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-ranked" style="${b(l==="ranked")}">⚔️ Ranked</button>
        <button id="tab-mini-league" style="${b(l==="mini-league")}">🏆 Mini Leagues</button>
        <button id="tab-random" style="${b(l==="random")}">🎲 Random</button>
      </div>
      <div id="rankings-legend"></div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,c(),(u=document.getElementById("tab-ranked"))==null||u.addEventListener("click",()=>{l="ranked",c()}),(h=document.getElementById("tab-mini-league"))==null||h.addEventListener("click",()=>{l="mini-league",c()}),(g=document.getElementById("tab-random"))==null||g.addEventListener("click",()=>{l="random",c()})}async function Ga(t,e){var L,W,I,S;const{state:i,navigate:o,toast:n}=e,r=i.profile;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:d}]=await Promise.all([y.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),y.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",r.id).single()]);if(!d){n("Erreur chargement profil","error"),o("home");return}if(!a){const v=d.mmr??450,D=yt(v);Hi(v);const X=Math.round(450+(v-450)*.5),F=yt(X),{data:ae}=await y.from("users").select("id, pseudo, club_name, mmr, rank_tier").order("mmr",{ascending:!1}).limit(100),xe=(ae||[]).findIndex(C=>C.id===d.id)+1;t.innerHTML=`
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
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;text-align:center;border:2px solid ${D.color}40">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Ton classement</div>
        <div style="font-size:44px;margin-bottom:2px">${D.emoji}</div>
        <div style="font-size:18px;font-weight:900;color:${D.color};letter-spacing:2px;text-transform:uppercase">${D.label}</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px">MMR ${v} ${xe?`· #${xe} au classement général`:""}</div>
      </div>

      <!-- Top 100 -->
      <div>
        <div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:8px">🏆 Classement général — Top 100</div>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto">
          ${(ae||[]).map((C,E)=>{const Q=yt(C.mmr??450),K=C.id===d.id;return`<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:10px;
              background:${K?"rgba(212,160,23,0.15)":"rgba(0,0,0,0.25)"};
              border:1px solid ${K?"#D4A017":"transparent"}">
              <div style="width:26px;text-align:center;font-size:12px;font-weight:900;color:rgba(255,255,255,0.5)">#${E+1}</div>
              <div style="font-size:18px">${Q.emoji}</div>
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${C.pseudo}</div>
                <div style="font-size:10px;color:rgba(255,255,255,0.4)">${C.club_name||"—"}</div>
              </div>
              <div style="font-size:13px;font-weight:900;color:${Q.color}">${C.mmr??450}</div>
            </div>`}).join("")||'<div style="text-align:center;color:rgba(255,255,255,0.4);font-size:12px;padding:16px">Aucun classement disponible.</div>'}
        </div>
      </div>

      <!-- Aperçu saison suivante -->
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;border:1.5px dashed rgba(255,255,255,0.2)">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;text-align:center">📅 Aperçu — prochaine saison</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:24px">
          <div style="text-align:center;opacity:.6">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Actuel</div>
            <div style="font-size:24px">${D.emoji}</div>
            <div style="font-size:12px;font-weight:700;color:${D.color}">${v}</div>
          </div>
          <div style="font-size:20px;color:rgba(255,255,255,0.3)">→</div>
          <div style="text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Recalculé</div>
            <div style="font-size:28px">${F.emoji}</div>
            <div style="font-size:14px;font-weight:900;color:${F.color}">${X}</div>
          </div>
        </div>
        <div style="font-size:11px;color:rgba(255,255,255,0.35);text-align:center;margin-top:10px">Ton MMR est recalculé vers la moyenne à chaque nouvelle saison, pour repartir sur des bases équilibrées.</div>
      </div>
    </div>`,(L=document.getElementById("ranked-back"))==null||L.addEventListener("click",()=>o("home"));return}const l=d.mmr??450,s=d.mmr_deviation??350,p=d.mmr_volatility??.06,c=d.placement_matches??0,b=c<10,x=Math.max(0,10-c),m=yt(l),u=Hi(l),h=ki(l,m),g=m.label+(h?" "+h:""),k=So.findIndex(v=>v.id===m.id),w=So[k+1]||null,j=m.id==="master"?"master":`${m.id}_${h}`,f={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},B=(d.ranked_wins||0)+(d.ranked_losses||0)+(d.ranked_draws||0),T=B>0?Math.round((d.ranked_wins||0)/B*100):0,$=qn.map(v=>{const D=v.key===j,X=v.division==="III"||v.division===null;return`
    <div ${D?'data-current-tier="true"':""} style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:4px;opacity:${D?1:.45};
      transform:${D?"scale(1.15)":"scale(1)"};transition:all 0.3s;min-width:${X?"60px":"46px"}">
      <div style="font-size:${D?"34px":X?"26px":"17px"}">${X?v.emoji:"●"}</div>
      <div style="font-size:${D?"13px":"11px"};color:${v.color};font-weight:${D?"900":"600"};letter-spacing:0.4px;white-space:nowrap">${v.division?v.division:v.label.toUpperCase()}</div>
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
  <div class="rk-root" style="min-height:100%;background:${f[m.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

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
        ${w?`<span>${w.emoji} ${w.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${u}%;background:linear-gradient(90deg,${m.color},${m.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${u}% vers ${w?w.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama : 16 échelons, répartis sur toute la largeur (scrollable si ça déborde) -->
    <div id="tiers-scroll" class="rk-tiers-scroll" style="display:flex;justify-content:space-between;align-items:flex-end;gap:10px;padding:10px 16px;overflow-x:auto;scrollbar-width:none">
      ${$}
    </div>

    <!-- Placement / Stats -->
    ${b?`
    <div class="rk-stats-block" style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${c}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${x} match${x>1?"s":""} — gains et pertes ×2</div>
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
  </div>`,(W=document.getElementById("ranked-back"))==null||W.addEventListener("click",()=>o("home")),(I=document.getElementById("ranked-leaderboard-btn"))==null||I.addEventListener("click",()=>o("rankings",{tab:"ranked"})),requestAnimationFrame(()=>{const v=document.getElementById("tiers-scroll"),D=v==null?void 0:v.querySelector("[data-current-tier]");v&&D&&(v.scrollLeft=D.offsetLeft-v.clientWidth/2+D.clientWidth/2)}),(S=document.getElementById("ranked-play-btn"))==null||S.addEventListener("click",()=>{ut(),o("match",{matchMode:"ranked",rankedData:{mmr:l,rd:s,sigma:p,isPlacement:b}})})}async function Oa(t,{state:e,navigate:i,toast:o}){const n=e.profile;if(!n)return;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await y.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${n.id},away_id.eq.${n.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(r||[]).filter(p=>p.status==="finished"),l=(r||[]).filter(p=>p.status==="in_progress");function s(p){const c=p.home_id===n.id;c?p.home_score:p.away_score,c?p.away_score:p.home_score;const b=p.winner_id===n.id,x=p.home_score===p.away_score&&p.status==="finished",m=p.status!=="finished"?"…":x?"N":b?"V":"D",u=p.status!=="finished"||x?"#888":b?"#1A6B3C":"#c0392b";let h=a[p.mode]||p.mode;p.away_id===null&&!h.startsWith("IA")&&(h="IA");const k=p.home_id===n.id?p.away:p.home;let w;p.away_id===null?w=h:k?w=`${k.club_name||k.pseudo} (${k.pseudo})`:w="Adversaire";let j="";p.status==="in_progress"&&Date.now()-new Date(p.created_at).getTime()>3600*1e3&&(j=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const f=new Date(p.created_at),B=f.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+f.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),T=p.status==="finished"?`${p.home_score} - ${p.away_score}`:`${p.home_score||0} - ${p.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${w}${j}</div>
        <div style="font-size:11px;color:var(--gray-600)">${h} · ${B}${p.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${T}</span>
        <span style="background:${u};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${m}</span>
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
  </div>`}Bn(Fn);const _e={user:null,profile:null,page:"home",params:{}};function bt(t,e="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=t,o.className=`show ${e}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function Ha(t,e,i=""){document.getElementById("modal-title").textContent=t,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i;const o=document.getElementById("modal-overlay");o.style.visibility="",o.classList.remove("hidden")}function eo(){const t=document.getElementById("modal-overlay");t.style.visibility="",t.classList.add("hidden")}async function ai(){if(!_e.user)return;const{data:t}=await y.from("users").select("*").eq("id",_e.user.id).single();t&&(_e.profile=t)}const In="mw_theme";function li(){return localStorage.getItem(In)||"dark"}function Ko(t){var e;localStorage.setItem(In,t),_i(t),(e=_e.profile)!=null&&e.id&&y.from("users").update({theme:t}).eq("id",_e.profile.id).then(()=>{})}function _i(t){var e,i;document.documentElement.setAttribute("data-theme",t),t==="club"&&(document.documentElement.style.setProperty("--club-color1",((e=_e.profile)==null?void 0:e.club_color1)||"#0a0f0a"),document.documentElement.style.setProperty("--club-color2",((i=_e.profile)==null?void 0:i.club_color2)||"#080d08"))}function kt(t,e={}){_e.page=t,_e.params=e,An()}async function An(){var o,n,r,a;const t=document.getElementById("page-content");if(!t)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===_e.page)});const e=document.getElementById("nav-credits");e&&_e.profile&&(e.textContent=`💰 ${(_e.profile.credits||0).toLocaleString("fr")}`);const i={state:_e,navigate:kt,toast:bt,openModal:Ha,closeModal:eo,refreshProfile:ai};switch(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',_e.page){case"home":await Pi(t,i);break;case"home2":await Pi(t,i);break;case"game":await _r(t,i);break;case"settings":await bn(t,i);break;case"collection":await Ir(t,i);break;case"decks":await Yi(t,i);break;case"boosters":await Yn(t,i);break;case"ranked":await Ga(t,i);break;case"match":{const d=_e.params&&_e.params.matchMode||"vs_ai_easy";d==="random"?await Qi(t,i,!1):d==="ranked"?await Qi(t,i,!0):d==="friend"?await ha(t,i,(o=_e.params)==null?void 0:o.friendId,(n=_e.params)==null?void 0:n.friendName):d==="mini_league"||d==="mini-league"?await Ho(t,i,(r=_e.params)==null?void 0:r.mlMatchId,(a=_e.params)==null?void 0:a.leagueId):await Hr(t,i);break}case"market":await Da(t,i);break;case"rankings":await Na(t,i);break;case"matches":await Oa(t,i);break;case"friends":await yr(t,i);break;case"mini-league":await ka(t,i);break;case"match-mini-league":{const d=_e.params||{};await Ho(t,i,d.mlMatchId,d.leagueId);break}default:await Pi(t,i)}}function Ua(){var o,n;const t=document.getElementById("app"),e=_e.profile;if(!e)return;const i="/icons/";t.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.08.05-0749" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(r=>{r.addEventListener("click",a=>{a.preventDefault(),kt(r.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>kt("home")),document.getElementById("nav-credits").addEventListener("click",()=>kt("boosters")),(o=document.getElementById("journal-btn"))==null||o.addEventListener("click",()=>Ka()),(n=document.getElementById("settings-btn"))==null||n.addEventListener("click",()=>kt("settings"))}async function Ka(){const{data:t}=await y.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const n=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}function Va(t,{onPlay:e}){var o;const i="/icons/";t.style.cssText="",t.innerHTML=`
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
  </div>`,(o=t.querySelector("#pl-play-btn"))==null||o.addEventListener("click",e)}async function Ya(){_i(li()),document.getElementById("modal-overlay").addEventListener("click",o=>{o.target===o.currentTarget&&eo()}),document.getElementById("modal-close").addEventListener("click",eo);const{data:{session:t}}=await y.auth.getSession();if(!t){Vo(),Va(document.getElementById("app"),{onPlay:()=>zo(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:bt})});return}_e.user=t.user,await ai(),_i(li()),Vo();try{const{data:o}=await y.from("formation_links_overrides").select("formation, links"),n={};(o||[]).forEach(r=>{n[r.formation]=r.links}),Dn(n)}catch(o){console.warn("Impossible de charger les overrides de formation:",o)}if(!_e.profile){Rn(document.getElementById("app"),{state:_e,navigate:async()=>{await ai(),_i(li()),Oi()},toast:bt,refreshProfile:ai});return}y.rpc("heartbeat").then(()=>{}).catch(()=>{}),setInterval(()=>{y.rpc("heartbeat").then(()=>{}).catch(()=>{})},45e3);const e=Array.isArray(_e.profile.pending_boosters)?_e.profile.pending_boosters:[];if(!_e.profile.onboarding_done&&e.length>0){ir(document.getElementById("app"),{state:_e,toast:bt,refreshProfile:ai,navigate:()=>{Oi(),setTimeout(()=>To(_e.profile,kt,bt),800)}});return}Oi(),new URLSearchParams(location.search).get("tutorial")==="1"?(history.replaceState({},"",location.pathname),setTimeout(()=>gn(_e.profile,kt,bt),800)):setTimeout(()=>To(_e.profile,kt,bt),800),y.auth.onAuthStateChange(async(o,n)=>{o==="SIGNED_OUT"&&(_e.user=null,_e.profile=null,document.getElementById("app").innerHTML="",zo(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:bt}))})}function Wa(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function qi(){const t=document.getElementById("app");t&&(t.style.height=Wa()+"px")}window.addEventListener("resize",qi);window.addEventListener("orientationchange",()=>setTimeout(qi,150));window.visualViewport&&window.visualViewport.addEventListener("resize",qi);function Oi(){const t=()=>{var i;(i=_e.user)!=null&&i.id&&y.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",_e.user.id).then(()=>{})};t(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(t,6e4);const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",qi(),Ua(),An()}function Vo(){const t=document.getElementById("app-loader"),e=document.getElementById("app");e&&(e.style.display=""),t&&(t.classList.add("zoom-out"),setTimeout(()=>t.style.display="none",500))}function Tn(t){var o;const e=document.getElementById("app-loader");if(e&&(e.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${t||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(o=document.getElementById("boot-retry"))==null||o.addEventListener("click",()=>window.location.reload())}Ya().catch(t=>{console.error("Échec du démarrage:",t),Tn()});setTimeout(()=>{const t=document.getElementById("app-loader");t&&t.style.display!=="none"&&!t.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Tn("Le serveur met trop de temps à répondre.")},12e3);
