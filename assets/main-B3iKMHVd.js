const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/match-shared-ClAg5DBE.js","assets/match-shared-D_M6t_P4.css"])))=>i.map(i=>d[i]);
import{w as to,s as h,_ as Yo,x as Wo,F as ct,g as Ct,n as it,k as di,m as Kt,r as qe,j as xt,y as ki,z as Hi,G as Oe,t as gi,C as Mi,I as jt,p as io,J as qt,L as Ci,O as Ui,o as $i,P as Ei,Q as Fi,U as ji,V as Vt,W as ci,X as Lt,Y as Jo,Z as pi,$ as Qe,a0 as ui,a1 as $t,a2 as ot,a3 as Cn,a4 as Xo,a5 as oo,a6 as jn,a7 as Qo,a8 as It,T as So,a9 as qn,v as Bn,aa as Dn,d as Fn}from"./match-shared-ClAg5DBE.js";const Pn="/";async function zo(t,{navigate:e,toast:i}){let o="login";const n=await to("signup_access_code_required"),r=()=>{var d,l,s,p,c,g,y,m;const a=o==="login";if(t.innerHTML=`
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
    </style>`,(d=document.getElementById("tab-login-btn"))==null||d.addEventListener("click",()=>{o="login",r()}),(l=document.getElementById("tab-reg-btn"))==null||l.addEventListener("click",()=>{o="register",r()}),a){(s=document.getElementById("login-password"))==null||s.addEventListener("keydown",w=>{var b;w.key==="Enter"&&((b=document.getElementById("login-btn"))==null||b.click())});let u=null,v=!1;n&&((p=document.getElementById("login-access-code"))==null||p.addEventListener("input",w=>{const b=w.target.value,_=document.getElementById("login-access-code-status"),I=document.getElementById("login-btn");if(clearTimeout(u),v=!1,I&&(I.disabled=!0,I.style.opacity="0.45",I.style.cursor="not-allowed"),!b){_&&(_.textContent="");return}_&&(_.textContent="⏳ Vérification…",_.style.color="rgba(255,255,255,0.4)"),u=setTimeout(async()=>{const{data:f,error:P}=await h.rpc("check_signup_password",{input_password:b});if(P){_&&(_.textContent="Erreur de vérification.",_.style.color="#f87171");return}v=!!f,_&&(_.textContent=v?"✅ Code valide":"❌ Code incorrect",_.style.color=v?"#4ade80":"#f87171"),I&&(I.disabled=!v,I.style.opacity=v?"1":"0.45",I.style.cursor=v?"pointer":"not-allowed")},400)})),(c=document.getElementById("login-btn"))==null||c.addEventListener("click",async()=>{var j;const w=document.getElementById("login-email").value.trim(),b=document.getElementById("login-password").value,_=((j=document.getElementById("login-access-code"))==null?void 0:j.value)||"",I=document.getElementById("login-error");if(I.textContent="",!w||!b){I.textContent="Remplissez tous les champs.";return}if(n){const{data:G}=await h.rpc("check_signup_password",{input_password:_});if(!G){I.textContent="Code d'accès incorrect.";return}}const f=document.getElementById("login-btn");f.textContent="⏳ Connexion…",f.disabled=!0;const{error:P}=await h.auth.signInWithPassword({email:w,password:b});if(f.textContent="⚽ Se connecter",f.disabled=!1,P){I.textContent=P.message.includes("Invalid")?"Email ou mot de passe incorrect.":P.message;return}window.location.reload()})}else{(g=document.getElementById("reg-confirm"))==null||g.addEventListener("keydown",w=>{var b;w.key==="Enter"&&((b=document.getElementById("reg-btn"))==null||b.click())});let u=null,v=!1;n&&((y=document.getElementById("reg-access-code"))==null||y.addEventListener("input",w=>{const b=w.target.value,_=document.getElementById("access-code-status"),I=document.getElementById("reg-btn");if(clearTimeout(u),v=!1,I&&(I.disabled=!0,I.style.opacity="0.45",I.style.cursor="not-allowed"),!b){_&&(_.textContent="");return}_&&(_.textContent="⏳ Vérification…",_.style.color="rgba(255,255,255,0.4)"),u=setTimeout(async()=>{const{data:f,error:P}=await h.rpc("check_signup_password",{input_password:b});if(P){_&&(_.textContent="Erreur de vérification.",_.style.color="#f87171");return}v=!!f,_&&(_.textContent=v?"✅ Code valide":"❌ Code incorrect",_.style.color=v?"#4ade80":"#f87171"),I&&(I.disabled=!v,I.style.opacity=v?"1":"0.45",I.style.cursor=v?"pointer":"not-allowed")},400)})),(m=document.getElementById("reg-btn"))==null||m.addEventListener("click",async()=>{var W;const w=document.getElementById("reg-email").value.trim(),b=document.getElementById("reg-password").value,_=document.getElementById("reg-confirm").value,I=((W=document.getElementById("reg-access-code"))==null?void 0:W.value)||"",f=document.getElementById("reg-error");if(f.textContent="",!w||!b||!_){f.textContent="Remplissez tous les champs.";return}if(!w.includes("@")||!w.includes(".")){f.textContent="Adresse email invalide.";return}if(b.length<6){f.textContent="Mot de passe trop court (min. 6 caractères).";return}if(b!==_){f.textContent="Les mots de passe ne correspondent pas.";return}if(n){const{data:Q}=await h.rpc("check_signup_password",{input_password:I});if(!Q){f.textContent="Code d'accès incorrect.";return}}const P=document.getElementById("reg-btn");P.textContent="⏳ Création…",P.disabled=!0;const{data:j,error:G}=await h.auth.signUp({email:w,password:b});if(P.textContent="🚀 Créer mon compte",P.disabled=!1,G){G.message.includes("already registered")||G.message.includes("already exists")||G.message.includes("User already")?f.textContent="Un compte existe déjà avec cette adresse email.":f.textContent=G.message;return}if(j!=null&&j.user&&Array.isArray(j.user.identities)&&j.user.identities.length===0){f.textContent="Un compte existe déjà avec cette adresse email.";return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),o="login",r(),setTimeout(()=>{const Q=document.getElementById("login-email");Q&&(Q.value=w)},50)})}};r()}function Rn(t,{state:e,navigate:i,toast:o,refreshProfile:n}){let r="#1A6B3C",a="#D4A017";t.innerHTML=`
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
  `;function d(){var m;const s=document.getElementById("logo-preview"),p=document.getElementById("logo-initials"),c=((m=document.getElementById("setup-club"))==null?void 0:m.value)||"MW",g=c.trim().split(" ").filter(Boolean),y=g.length>=2?(g[0][0]+g[1][0]).toUpperCase():c.slice(0,2).toUpperCase();s&&(s.style.background=a,s.style.borderColor=r),p&&(p.textContent=y,p.style.color=r)}document.getElementById("color1").addEventListener("input",s=>{r=s.target.value,document.getElementById("swatch1").style.background=r,d()}),document.getElementById("color2").addEventListener("input",s=>{a=s.target.value,document.getElementById("swatch2").style.background=a,d()});function l(s){document.querySelectorAll(".setup-step").forEach(p=>p.classList.remove("active")),document.getElementById(`step-${s}`).classList.add("active"),document.getElementById("step-num").textContent=s,document.getElementById("progress-fill").style.width=`${Math.round(s/3*100)}%`,s===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),p=document.getElementById("step1-error");if(p.textContent="",s.length<3){p.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:c}=await h.from("users").select("id").eq("pseudo",s).maybeSingle();if(c){p.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const s=document.getElementById("setup-club").value.trim(),p=document.getElementById("step2-error");if(p.textContent="",s.length<2){p.textContent="Nom trop court (min. 2 caractères).";return}const{data:c}=await h.from("users").select("id").eq("club_name",s).maybeSingle();if(c){p.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),p=document.getElementById("setup-club").value.trim(),c=document.getElementById("step3-error"),g=document.getElementById("step3-finish");c.textContent="",g.disabled=!0,g.textContent="Création en cours…";try{const{error:y}=await h.from("users").insert({id:e.user.id,pseudo:s,club_name:p,club_color1:r,club_color2:a,credits:15e3});if(y)throw y;await Nn(e.user.id),await n(),o(`Bienvenue ${s} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(y){c.textContent=y.message,g.disabled=!1,g.textContent="🚀 Créer mon profil !"}})}async function Nn(t){const e=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1},{type:"stadium",count:1}];try{await h.from("users").update({pending_boosters:e,onboarding_done:!1,first_booster_opened:!1}).eq("id",t)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Zo="mw_sound_volume";function no(){const t=localStorage.getItem(Zo);if(t===null)return 100;const e=parseInt(t,10);return Number.isFinite(e)?Math.max(0,Math.min(100,e)):100}function Gn(t){localStorage.setItem(Zo,String(Math.max(0,Math.min(100,Math.round(t)))))}function ro(){return no()===0}function Si(t){return Math.max(0,Math.min(1,t*(no()/100)))}function ao(t,e=1){if(ro())return null;try{const i=new Audio(t);return i.volume=Si(e),i.play().catch(()=>{}),i}catch{return null}}let ht=null,Ki=null,Lo=.3;function en(t,e=.3){if(Lo=e,ht&&Ki===t&&!ht.paused){ht.volume=Si(Lo);return}if(Ht(),!ro())try{const i=new Audio(t);i.loop=!0,i.volume=Si(e),i.play().catch(()=>{}),ht=i,Ki=t}catch{}}function Ht(){if(ht)try{ht.pause(),ht.currentTime=0}catch{}ht=null,Ki=null}let oi=null;function tn(t,e=.6){if(Ke(),!ro())try{const i=new Audio(t);i.volume=Si(e),i.play().catch(()=>{}),oi=i}catch{}}function Ke(){if(oi)try{oi.pause(),oi.currentTime=0}catch{}oi=null}async function on(t=null){const e=new Date().toISOString().slice(0,10),{data:i}=await h.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const o=i.filter(a=>!(a.available_from&&e<a.available_from||a.available_until&&e>a.available_until));if(!o.length)return[];let n=o;if(t){const a=o.filter(d=>d.max_per_user!=null);if(a.length){const{data:d}=await h.from("booster_claims").select("booster_id").eq("user_id",t).in("booster_id",a.map(s=>s.id)),l={};(d||[]).forEach(s=>{l[s.booster_id]=(l[s.booster_id]||0)+1}),n=o.filter(s=>s.max_per_user==null?!0:(l[s.id]||0)<s.max_per_user)}}if(!n.length)return[];const{data:r}=await h.from("booster_drop_rates").select("*").in("booster_id",n.map(a=>a.id)).order("sort_order");return n.map(a=>({...a,rates:(r||[]).filter(d=>d.booster_id===a.id)}))}async function On(t,e){const{data:i}=await h.from("booster_configs").select("max_per_user").eq("id",e).single();i!=null&&i.max_per_user&&await h.from("booster_claims").insert({user_id:t,booster_id:e})}function Hn(t){if(!(t!=null&&t.length))return null;const e=t.reduce((o,n)=>o+Number(n.percentage),0);let i=Math.random()*e;for(const o of t)if(i-=Number(o.percentage),i<=0)return o;return t[t.length-1]}const nn=()=>Object.keys(ct),Un=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Vi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Kn(t){const e=t.player;if(!e)return"";const i=t.evolution_bonus||0;return qe({...e,_evolution_bonus:i},{width:140})}function so(t){var n;const e={};(t.rates||[]).forEach(r=>{e[r.card_type]=(e[r.card_type]||0)+Number(r.percentage||0)});const i=((n=Object.entries(e).sort((r,a)=>a[1]-r[1])[0])==null?void 0:n[0])||"player",o=t.image_url||"booster-players.png";return{id:t.id,img:"/icons/"+o,name:t.name,sub:`${t.card_count} carte(s)`,cost:t.price_type==="credits"&&t.price_credits||0,costLabel:t.price_type==="credits"?`${(t.price_credits||0).toLocaleString("fr")} crédits`:t.price_type==="pub"?"1 pub":"Gratuit",cardCount:t.card_count||5,type:i,isPub:t.price_type==="pub",rates:t.rates||[],allow_duplicates:t.allow_duplicates!==!1,_boosterId:t.id,_raw:t}}async function Vn(t,e,i,o){if(t.reward_type==="credits"){const n=(e.credits||0)+(t.credits_amount||0),{error:r}=await h.from("users").update({credits:n}).eq("id",e.id);if(r)throw r;return e.credits=n,{type:"credits",amount:t.credits_amount}}if(t.reward_type==="card"){const{data:n}=await h.from("players").select("firstname, surname_real, rarity").eq("id",t.player_id).single(),{error:r}=await h.from("cards").insert({owner_id:e.id,player_id:t.player_id,card_type:"player"});if(r)throw r;return{type:"card",player:n}}if(t.reward_type==="booster"){const{data:n}=await h.from("booster_configs").select("*").eq("id",t.booster_config_id).single(),{data:r}=await h.from("booster_drop_rates").select("*").eq("booster_id",t.booster_config_id);if(!n)throw new Error("Booster introuvable (peut-être supprimé depuis).");const a=so({...n,rates:r});let d=[];return a.type==="formation"?d=await po(e,0):a.type==="game_changer"?d=await co(e,a.cardCount,0):a.type==="player"?d=await lo(e,a.cardCount,0):d=await zi(e,{...a,cost:0}),{type:"booster",name:n.name,cards:d,boosterUI:a}}throw new Error("Type de récompense inconnu.")}async function Yn(t,{state:e,navigate:i,toast:o}){var c,g,y;Wt(i,e.profile,"boosters","/icons/",o);const n=((c=e.profile)==null?void 0:c.credits)||0;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let r=[];try{r=(await on((g=e.user)==null?void 0:g.id)).map(so)}catch(m){console.warn("Erreur chargement boosters DB, fallback hardcodé",m)}r.length||(r=Un.map(m=>({...m,rates:[],isPub:m.id==="players_pub"})));const a=await h.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.profile.id).then(m=>m.data||[]),d=new Set(a.filter(m=>m.card_type==="stadium").map(m=>m.stadium_id)),l=new Set(a.filter(m=>m.card_type==="formation").map(m=>m.formation)),s=new Set(a.filter(m=>m.card_type==="game_changer").map(m=>m.gc_type)),p={};for(const m of r){if(m.allow_duplicates!==!1||!((y=m.rates)!=null&&y.length))continue;const u=[...new Set((m.rates||[]).map(w=>w.card_type))];let v=!1;for(const w of u)if(w==="stadium"){const{data:b}=await h.from("stadium_definitions").select("id");if((b||[]).some(_=>!d.has(_.id))){v=!0;break}}else if(w==="game_changer"){const{data:b}=await h.from("gc_definitions").select("name").eq("is_active",!0);if((b||[]).some(_=>!s.has(_.name))){v=!0;break}}else if(w==="formation"){const{FORMATION_LINKS:b}=await Yo(async()=>{const{FORMATION_LINKS:_}=await import("./match-shared-ClAg5DBE.js").then(I=>I.ab);return{FORMATION_LINKS:_}},__vite__mapDeps([0,1]));if(Object.keys(b).some(_=>!l.has(_))){v=!0;break}}else{v=!0;break}v||(p[m.id]=!0)}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${n.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${r.map(m=>{const u=m.cost===0||n>=m.cost,v=p[m.id]===!0;return`<div class="booster-card ${!u||v?"disabled":""}" data-booster="${m.id}" style="position:relative">
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
            ${v?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--tile-fg-dim);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,t.querySelectorAll(".booster-card:not(.disabled)").forEach(m=>{m.addEventListener("click",async()=>{const u=r.find(v=>v.id===m.dataset.booster);if(u){m.style.opacity="0.5",m.style.pointerEvents="none";try{await rn(u,{state:e,toast:o,navigate:i,container:t})}catch(v){o(v.message,"error"),m.style.opacity="",m.style.pointerEvents=""}}})}),t.querySelectorAll(".booster-info-btn").forEach(m=>{m.addEventListener("click",u=>{u.stopPropagation();const v=r.find(w=>w.id===m.dataset.boosterId);Zn(v)})})}async function rn(t,{state:e,toast:i,navigate:o,container:n}){var c,g,y;if(t.cost>0&&e.profile.credits<t.cost){i("Crédits insuffisants","error");return}if(t._boosterId){const m=((c=t._raw)==null?void 0:c.max_per_user)??null;if(m!=null){const{count:u}=await h.from("booster_claims").select("id",{count:"exact",head:!0}).eq("user_id",e.user.id).eq("booster_id",t._boosterId);if((u||0)>=m){i(`Quota atteint pour ce booster (${m} max.)`,"error");return}}}if(t.isPub){if(!await to("pub_mode")){Wo();return}await tr()}const{data:r}=await h.from("cards").select("card_type, player_id, formation").eq("owner_id",e.profile.id),a=new Set((r||[]).filter(m=>m.card_type==="player").map(m=>m.player_id)),d=new Set((r||[]).filter(m=>m.card_type==="formation").map(m=>m.formation));let l=[],s=null;try{if((g=t.rates)!=null&&g.length)l=await zi(e.profile,t);else{const m=t.type||"player";m==="player"?l=await lo(e.profile,t.cardCount,t.cost):m==="game_changer"?l=await co(e.profile,t.cardCount,t.cost):m==="formation"?l=await po(e.profile,t.cost):l=await zi(e.profile,t)}}catch(m){s=m.message||String(m),console.error("[Booster] Erreur:",m)}if(l!=null&&l.length&&t._boosterId&&await On(e.user.id,t._boosterId),!(l!=null&&l.length)){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",m.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${s||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(m),(y=m.querySelector("#anim-close-err"))==null||y.addEventListener("click",()=>m.remove());return}l.forEach(m=>{m.card_type==="player"&&m.player?m.isDuplicate=a.has(m.player.id):m.card_type==="formation"&&(m.isDuplicate=d.has(m.formation))});const{data:p}=await h.from("users").select("*").eq("id",e.profile.id).single();p&&(e.profile=p),an(e.profile.id,t,l),uo(l,t,o,null,{state:e,toast:i,container:n})}function Wn(){const t=Math.random()*100;return t<.5?"legende":t<2?"special":t<10?"normal_high":"normal_low"}function yt(t){return Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Jn(t,e){let i;switch(e){case"legende":i=t.filter(o=>o.rarity==="legende"),i.length||(i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=t.filter(o=>yt(o)>=6));break;case"special":i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=t.filter(o=>yt(o)>=6));break;case"normal_high":i=t.filter(o=>o.rarity==="normal"&&yt(o)>=6),i.length||(i=t.filter(o=>yt(o)>=6));break;default:i=t.filter(o=>o.rarity==="normal"&&yt(o)>=1&&yt(o)<=5),i.length||(i=t.filter(o=>o.rarity==="normal"));break}return i.length||(i=t),i[Math.floor(Math.random()*i.length)]}async function zi(t,e){if(e.cost>0){const{error:g}=await h.from("users").update({credits:t.credits-e.cost}).eq("id",t.id);if(g)throw g;t.credits-=e.cost,Jt(t.credits)}const i=e.allow_duplicates!==!1;let o=[];const{data:n,error:r}=await h.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.id);if(r){const{data:g}=await h.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",t.id);o=g||[]}else o=n||[];const a=new Set(o.filter(g=>g.card_type==="player").map(g=>g.player_id)),d=new Set(o.filter(g=>g.card_type==="formation").map(g=>g.formation)),l=new Set(o.filter(g=>g.card_type==="game_changer").map(g=>g.gc_type)),s=new Set(o.filter(g=>g.card_type==="stadium").map(g=>g.stadium_id).filter(Boolean)),p=new Set,c=[];for(let g=0;g<(e.cardCount||5);g++){const y=Hn(e.rates);if(y){if(y.card_type==="player"){const m=j=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[j]||j,u=y.rarity?m(y.rarity):null;let v=h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);u&&(v=v.eq("rarity",u));const{data:w}=await v;let b=w||[];if((y.note_min||y.note_max)&&(b=b.filter(j=>{const G=Math.max(Number(j.note_g)||0,Number(j.note_d)||0,Number(j.note_m)||0,Number(j.note_a)||0);return(!y.note_min||G>=y.note_min)&&(!y.note_max||G<=y.note_max)})),b.length||(y.note_min||y.note_max?(b=w||[],console.warn("[Booster] Aucun joueur avec note",y.note_min,"-",y.note_max,"— fallback rareté uniquement")):b=w||[]),!b.length)continue;let _=b.filter(j=>!p.has(j.id));if(i)_.length||(_=b);else if(_=_.filter(j=>!a.has(j.id)),!_.length)continue;const I=_[Math.floor(Math.random()*_.length)];p.add(I.id);const f=a.has(I.id),{data:P}=await h.from("cards").insert({owner_id:t.id,player_id:I.id,card_type:"player"}).select().single();P&&(c.push({...P,player:I,isDuplicate:f}),h.rpc("record_transfer",{p_card_id:P.id,p_player_id:I.id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(y.card_type==="game_changer"){const{data:m}=await h.from("gc_definitions").select("id,name,color,effect,image_url,gc_type").eq("is_active",!0).eq("gc_type","game_changer"),u=m!=null&&m.length?m:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],v=i?u:u.filter(I=>!l.has(I.name));if(!i&&!v.length)continue;const w=v[Math.floor(Math.random()*v.length)],b=w.name,{data:_}=await h.from("cards").insert({owner_id:t.id,card_type:"game_changer",gc_type:b,gc_definition_id:w.id||null}).select().single();_&&c.push({..._,_gcDef:w})}else if(y.card_type==="formation"){const m=nn(),u=i?m:m.filter(_=>!d.has(_));if(!i&&!u.length)continue;const v=u[Math.floor(Math.random()*u.length)],w=d.has(v),{data:b}=await h.from("cards").insert({owner_id:t.id,card_type:"formation",formation:v}).select();b!=null&&b[0]&&c.push({...b[0],isDuplicate:w})}else if(y.card_type==="stadium"){const{data:m,error:u}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(u){console.error("[Booster] stadium_definitions:",u.message);continue}if(!(m!=null&&m.length)){console.warn("[Booster] Aucun stade en DB");continue}const v=i?m:m.filter(I=>!s.has(I.id));if(!i&&!v.length)continue;const w=v[Math.floor(Math.random()*v.length)],{data:b,error:_}=await h.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:w.id}).select("id,card_type,stadium_id").single();if(_){console.error("[Booster] insert stadium card:",_.message);continue}b&&c.push({...b,rarity:"normal",_stadiumDef:w})}}}return c}async function lo(t,e,i){if(i>0){const{error:s}=await h.from("users").update({credits:t.credits-i}).eq("id",t.id);if(s)throw s;t.credits-=i,Jt(t.credits)}const{data:o}=await h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const n=o.filter(s=>s.job==="GK"),r=o.filter(s=>s.job!=="GK"),a=!t.first_booster_opened&&n.length>0,d=[];for(let s=0;s<e;s++){const p=s===0&&a?n:s===0?r:o,c=Wn(),g=Jn(p,c);g&&d.push(g)}a&&await h.from("users").update({first_booster_opened:!0}).eq("id",t.id);const{data:l}=await h.from("cards").insert(d.map(s=>({owner_id:t.id,player_id:s.id,card_type:"player"}))).select();return(l||[]).forEach((s,p)=>{h.rpc("record_transfer",{p_card_id:s.id,p_player_id:d[p].id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((s,p)=>({...l[p],player:s}))}async function co(t,e,i){const{error:o}=await h.from("users").update({credits:t.credits-i}).eq("id",t.id);if(o)throw o;t.credits-=i,Jt(t.credits);const{data:n}=await h.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),r=n!=null&&n.length?n:Object.keys(Vi).map(c=>({name:c,gc_type:"game_changer"})),a=Array.from({length:e},()=>r[Math.floor(Math.random()*r.length)]),d=a.map(c=>({owner_id:t.id,card_type:"game_changer",gc_type:c.name,gc_definition_id:c.id||null})),{data:l,error:s}=await h.from("cards").insert(d).select();return s&&console.error("[Booster GC] Erreur insert:",s.message,s),(l||[]).map((c,g)=>({...c,_gcDef:a[g]||null}))}async function po(t,e){const{error:i}=await h.from("users").update({credits:t.credits-e}).eq("id",t.id);if(i)throw i;t.credits-=e,Jt(t.credits);const{data:o}=await h.from("cards").select("formation").eq("owner_id",t.id).eq("card_type","formation"),n=new Set((o||[]).map(p=>p.formation)),r=nn(),a=r[Math.floor(Math.random()*r.length)],d=n.has(a),{data:l,error:s}=await h.from("cards").insert({owner_id:t.id,card_type:"formation",formation:a}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),(l||[]).map(p=>({...p,isDuplicate:d}))}async function Xn(t,e){const{data:i}=await h.from("cards").select("stadium_id").eq("owner_id",t.id).eq("card_type","stadium"),o=new Set((i||[]).map(s=>s.stadium_id).filter(Boolean)),{data:n}=await h.from("stadium_definitions").select("*");if(!(n!=null&&n.length))throw new Error("Aucun stade configuré en base.");const r=n[Math.floor(Math.random()*n.length)],a=o.has(r.id),{data:d,error:l}=await h.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:r.id}).select();return l&&console.error("[Booster Stade] Erreur insert:",l.message,l),(d||[]).map(s=>({...s,isDuplicate:a,_stadiumDef:r}))}async function an(t,e,i){try{const o=(i||[]).map(n=>{var r,a,d,l,s;return{card_type:n.card_type,name:n.card_type==="player"?[(r=n.player)==null?void 0:r.firstname,(a=n.player)==null?void 0:a.surname_real].filter(Boolean).join(" "):((d=n._stadiumDef)==null?void 0:d.name)||((l=n._gcDef)==null?void 0:l.name)||n.formation||n.gc_type||null,rarity:((s=n.player)==null?void 0:s.rarity)||null,note:n.current_note??null,is_duplicate:!!n.isDuplicate}});await h.from("booster_openings").insert({user_id:t,booster_name:(e==null?void 0:e.name)||null,booster_type:(e==null?void 0:e.type)||null,cards:o,nb_cards:o.length})}catch(o){console.warn("[Booster] journalisation ignorée:",o==null?void 0:o.message)}}function uo(t,e,i,o=null,n=null){var x,S,J,L,K,ce,A;if(!t||t.length===0){const E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",E.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(E),(x=E.querySelector("#anim-close-err"))==null||x.addEventListener("click",()=>E.remove());return}t=[...t].sort((E,Z)=>{const O=E.player?yt(E.player):-1;return(Z.player?yt(Z.player):-1)-O});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let a=!1;const d=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let s=!1;const p=E=>E.touches&&E.touches[0]?E.touches[0].clientX:E.clientX;function c(E){a||(s=!0,l.style.opacity="1",g(E))}function g(E){if(!s||a)return;const Z=d.getBoundingClientRect(),O=p(E)-Z.left,te=Math.max(0,Math.min(1,O/Z.width));l.style.width=te*Z.width+"px",te>=.82&&m()}function y(){a||(s=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{a||(l.style.transition="")},220))}function m(){var Z;if(a)return;a=!0,s=!1,l.style.width="100%",l.style.opacity="1",(Z=document.getElementById("cut-flash"))==null||Z.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const E=document.getElementById("cut-hint");E&&(E.style.opacity="0"),d.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",b(0)},620)}d.addEventListener("pointerdown",c),window.addEventListener("pointermove",g),window.addEventListener("pointerup",y),d.addEventListener("touchstart",c,{passive:!0}),window.addEventListener("touchmove",g,{passive:!0}),window.addEventListener("touchend",y);let u=0,v=!1;const w=new Set;function b(E){u=E,document.getElementById("reveal-phase").style.display="flex",_(),I(E,0),W()}function _(){const E=document.getElementById("card-dots");E&&(E.innerHTML=t.map((Z,O)=>`<div class="card-dot" data-i="${O}" style="width:8px;height:8px;border-radius:50%;background:${O===u?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),E.querySelectorAll(".card-dot").forEach(Z=>Z.addEventListener("click",()=>P(parseInt(Z.dataset.i)))))}function I(E,Z){var ve,be;const O=t[E],te=document.getElementById("card-counter"),de=document.getElementById("card-track");te&&(te.textContent=`Carte ${E+1} / ${t.length}`);const xe=document.getElementById("reveal-btns");xe&&(xe.style.display=E===t.length-1?"flex":"none");const fe=O.card_type==="player"&&((ve=O.player)==null?void 0:ve.rarity)==="legende",Me=!w.has(E);if(w.add(E),O.card_type==="player"&&O.player){const ke=O.player,B=ke.job||"ATT";(Number(B==="GK"?ke.note_g:B==="DEF"?ke.note_d:B==="MIL"?ke.note_m:ke.note_a)||0)+(O.evolution_bonus||0)}const Be=ke=>{de.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${fe?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Qn(O)}</div>
          ${O.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const B=document.getElementById("current-card-wrap");Z!==0?(B.style.transition="none",B.style.transform=`translateX(${Z>0?100:-100}%)`,requestAnimationFrame(()=>{B.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",B.style.transform="translateX(0)"})):B.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),ke||fe?M():$(),_()};Me&&((be=O.player)==null?void 0:be.rarity)==="legende"&&O.card_type==="player"&&O.player?f(O,()=>Be(!0)):Be(!1)}function f(E,Z){var ge;v=!0;const O=E.player,te=`https://flagsapi.com/${O.country_code}/flat/64.png`,de=(ge=O.clubs)==null?void 0:ge.logo_url,xe=Ct(O),fe=O.job||"ATT",Me=Number(fe==="GK"?O.note_g:fe==="DEF"?O.note_d:fe==="MIL"?O.note_m:O.note_a)||0,Be=E.evolution_bonus||0,ve=Me+Be,be=O.rarity==="legende",ke=ve>=18,B=document.getElementById("walkout-overlay"),T=document.getElementById("walkout-stage");if(!B||!T){v=!1,Z();return}let H=null;be&&(H=ao("/sounds/Legendary.mp3",.8)),B.style.display="flex";const V=()=>{const pe=T.firstElementChild;pe&&(pe.classList.remove("wo-in"),pe.classList.add("wo-out"))},Y=1800,D=400;T.innerHTML=`<img class="wo-in" src="${te}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(V,Y),setTimeout(()=>{var pe;T.innerHTML=de?`<img class="wo-in" src="${de}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((pe=O.clubs)==null?void 0:pe.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},Y+D),setTimeout(V,Y*2+D),setTimeout(()=>{T.innerHTML=xe?`<img class="wo-in" src="${xe}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(Y+D)*2),setTimeout(V,(Y+D)*2+Y);const ue=ke?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[fe]||"#fff";setTimeout(()=>{T.innerHTML=`<div class="wo-in" style="
        font-size:${ke?"120px":"90px"};font-weight:900;color:${ue};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${ue}, 0 0 60px ${ue};
        ${ke?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${ve}
      </div>`,ke&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(Y+D)*3),setTimeout(V,(Y+D)*3+Y),setTimeout(()=>{B.style.display="none",T.innerHTML="",v=!1,H&&!be&&H.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),Z()},(Y+D)*4)}function P(E){if(v||E<0||E>=t.length||E===u)return;const Z=E>u?1:-1;u=E,I(E,Z)}function j(){P(u+1)}function G(){P(u-1)}function W(){const E=document.getElementById("card-viewport");if(!E||E._swipeBound)return;E._swipeBound=!0;let Z=0,O=0,te=0,de=!1;const xe=be=>be.touches?be.touches[0].clientX:be.clientX,fe=be=>be.touches?be.touches[0].clientY:be.clientY,Me=be=>{de=!0,Z=xe(be),O=fe(be),te=0},Be=be=>{if(!de)return;te=xe(be)-Z;const ke=fe(be)-O;if(Math.abs(te)<Math.abs(ke))return;const B=document.getElementById("current-card-wrap");B&&(B.style.transition="none",B.style.transform=`translateX(${te*.6}px) rotate(${te*.02}deg)`)},ve=()=>{if(!de)return;de=!1;const be=document.getElementById("current-card-wrap"),ke=55;te<=-ke&&u<t.length-1?j():te>=ke&&u>0?G():be&&(be.style.transition="transform .2s ease",be.style.transform="translateX(0)")};E.addEventListener("pointerdown",Me),E.addEventListener("pointermove",Be),E.addEventListener("pointerup",ve),E.addEventListener("pointercancel",ve),E.addEventListener("touchstart",Me,{passive:!0}),E.addEventListener("touchmove",Be,{passive:!0}),E.addEventListener("touchend",ve),E.addEventListener("click",be=>{if(Math.abs(te)>8)return;const ke=E.getBoundingClientRect();be.clientX-ke.left>ke.width/2?j():G()})}let Q=null;function M(){const E=document.getElementById("fireworks-canvas");if(!E)return;E.width=window.innerWidth,E.height=window.innerHeight;const Z=E.getContext("2d"),O=[];function te(){const xe=Math.random()*E.width,fe=Math.random()*E.height*.6,Me=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Be=Me[Math.floor(Math.random()*Me.length)];for(let ve=0;ve<60;ve++){const be=Math.PI*2/60*ve,ke=2+Math.random()*5;O.push({x:xe,y:fe,vx:Math.cos(be)*ke,vy:Math.sin(be)*ke,alpha:1,color:Be,size:2+Math.random()*3})}}te(),Q=setInterval(te,600);function de(){if(document.getElementById("fireworks-canvas")){Z.clearRect(0,0,E.width,E.height);for(let xe=O.length-1;xe>=0;xe--){const fe=O[xe];if(fe.x+=fe.vx,fe.y+=fe.vy+.08,fe.vy*=.98,fe.alpha-=.018,fe.alpha<=0){O.splice(xe,1);continue}Z.globalAlpha=fe.alpha,Z.fillStyle=fe.color,Z.beginPath(),Z.arc(fe.x,fe.y,fe.size,0,Math.PI*2),Z.fill()}Z.globalAlpha=1,(Q!==null||O.length>0)&&requestAnimationFrame(de)}}de()}function $(){Q!==null&&(clearInterval(Q),Q=null);const E=document.getElementById("fireworks-canvas");E&&E.getContext("2d").clearRect(0,0,E.width,E.height)}if(o){const E=document.getElementById("reveal-btns");E&&(E.style.flexDirection="row",E.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(S=document.getElementById("reveal-next"))==null||S.addEventListener("click",()=>{$(),r.remove(),o()})}else{const E=document.getElementById("reveal-reopen"),Z=e.cost||0,O=Number((L=(J=n==null?void 0:n.state)==null?void 0:J.profile)==null?void 0:L.credits)||0,te=!Z||O>=Z;if(E)if(n){E.textContent=`🎁 Ouvrir un autre booster${Z?` (${Z.toLocaleString("fr")} cr.)`:""}`;const de=fe=>{E.disabled=!0,E.style.opacity="0.45",E.style.cursor="not-allowed",fe&&(E.title=fe)};te||de("Crédits insuffisants");const xe=((K=e._raw)==null?void 0:K.max_per_user)??null;te&&xe!=null&&((A=(ce=n==null?void 0:n.state)==null?void 0:ce.user)!=null&&A.id)&&h.from("booster_claims").select("id",{count:"exact",head:!0}).eq("user_id",n.state.user.id).eq("booster_id",e._boosterId).then(({count:fe})=>{(fe||0)>=xe&&de(`Quota atteint (${xe} max.)`)}),E.addEventListener("click",()=>{E.disabled||($(),r.remove(),rn(e,{state:n.state,toast:n.toast,navigate:i,container:n.container}))})}else E.textContent="🎁 Ouvrir un autre booster",E.addEventListener("click",()=>{$(),r.remove(),i("boosters")});document.getElementById("reveal-collection").addEventListener("click",()=>{$(),r.remove(),i("collection")}),document.getElementById("reveal-shop").addEventListener("click",()=>{$(),r.remove(),i("boosters")})}}function Qn(t){var e,i,o,n;if(t.card_type==="player"&&t.player)return Kn(t);if(t.card_type==="game_changer"){const r=t._gcDef,a=(r==null?void 0:r.name)||t.gc_type||"Game Changer",d=(r==null?void 0:r.effect)||((e=Vi[t.gc_type])==null?void 0:e.desc)||"",l=r!=null&&r.image_url?`/icons/${r.image_url}`:null,s=((i=Vi[t.gc_type])==null?void 0:i.icon)||"⚡";return it(a,l,s,d,{width:170})}if(t.card_type==="formation")return di(t.formation,ct[t.formation],{width:160});if(t.card_type==="stadium"){const r=t._stadiumDef,a=(r==null?void 0:r.name)||"Stade",d=((o=r==null?void 0:r.club)==null?void 0:o.encoded_name)||(r==null?void 0:r.country_code)||"—",l=r!=null&&r.image_url?`/icons/${r.image_url}`:((n=r==null?void 0:r.club)==null?void 0:n.logo_url)||(r!=null&&r.country_code?`https://flagsapi.com/${r.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),s=`${d}<br>+10 ⭐ joueurs alliés`;return Kt(a,l,s,{width:170})}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Zn(t){var e,i;if((e=t==null?void 0:t.rates)!=null&&e.length){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const n={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},r={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};o.innerHTML=`
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
    `,document.body.appendChild(e);try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(n){console.warn("[AdSense]",n)}let i=5;const o=setInterval(()=>{i--;const n=document.getElementById("mw-ad-cd");n&&(n.textContent=i),i<=0&&(clearInterval(o),e.remove(),t(!0))},1e3)})}async function ir(t,{state:e,navigate:i,toast:o,refreshProfile:n}){var g,y;const{data:r}=await h.from("users").select("*").eq("id",e.user.id).single();r&&(e.profile=r);let a=Array.isArray((g=e.profile)==null?void 0:g.pending_boosters)?[...e.profile.pending_boosters]:[];if(!a.length){await h.from("users").update({onboarding_done:!0}).eq("id",e.user.id),i("home");return}let d=null;try{const u=(await on()).find(v=>(v.name||"").toLowerCase().includes("new player"));u&&(d=so(u))}catch(m){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',m)}const l=a.length;let s=0;t.innerHTML=`
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
  </div>`;const p=async()=>{await h.from("users").update({pending_boosters:a}).eq("id",e.user.id)};async function c(){var b;if(s>=l||!a.length){await h.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",e.user.id),n&&await n(),o("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const m=a[0],{data:u}=await h.from("users").select("*").eq("id",e.user.id).single();u&&(e.profile=u);let v=[];try{if(m.type==="formation")v=await po(e.profile,0);else if(m.type==="game_changer")v=await co(e.profile,m.count||3,0);else if(m.type==="stadium")v=await Xn(e.profile,0);else if(d&&((b=d.rates)!=null&&b.length)){const _={...d,cost:0,cardCount:m.count||d.cardCount||5};v=await zi(e.profile,_),m.guaranteeGK&&!e.profile.first_booster_opened&&(v.some(f=>f.player&&f.player.job==="GK")||await or(e.profile,v),await h.from("users").update({first_booster_opened:!0}).eq("id",e.profile.id))}else v=await lo(e.profile,m.count||5,0)}catch(_){o(_.message||"Erreur ouverture booster","error");return}a.shift(),s++,await p();const w=m.type==="formation"?{name:"Booster Formation",type:"formation",img:"/icons/booster-formation.png"}:m.type==="game_changer"?{name:"Booster Game Changer",type:"game_changer",img:"/icons/booster-gamechanger.png"}:m.type==="stadium"?{name:"Booster Stade",type:"stadium",img:"/icons/booster-stade.png"}:{name:`Booster Joueurs (${s}/${l})`,type:"player",img:(d==null?void 0:d.img)||"/icons/booster-players.png"};an(e.profile.id,w,v),uo(v,w,i,()=>{c()})}(y=document.getElementById("onboard-start"))==null||y.addEventListener("click",()=>c())}async function or(t,e){try{const{data:i}=await h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const o=i[Math.floor(Math.random()*i.length)],n=e.findIndex(a=>a.player);if(n===-1)return;const r=e[n];await h.from("cards").update({player_id:o.id}).eq("id",r.id),e[n]={...r,player_id:o.id,player:o}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const nr=[{key:"home2",route:"home2",label:"ACCUEIL",icon:"nav-home.png"},{key:"cards",route:"collection",label:"CARTES",icon:"nav-collection.png"},{key:"decks",route:"decks",label:"EQUIPES",icon:"nav-decks.png"},{key:"boosters",route:"boosters",label:"BOUTIQUE",icon:"nav-boosters.png"},{key:"market",route:"market",label:"MERCATO",icon:"nav-market.png"}];function Wt(t,e,i,o,n){if(!document.getElementById("home2-chrome-style")){const c=document.createElement("style");c.id="home2-chrome-style",c.textContent=`
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
    `,document.body.appendChild(d),d.querySelector("#home2-mobtop-settings-btn").addEventListener("click",()=>t("settings")),d.querySelector("#home2-mobtop-credits").addEventListener("click",()=>Io(e,n)));let l=document.getElementById("home2-mobile-bottom");l||(l=document.createElement("div"),l.id="home2-mobile-bottom",l.className="home2-mobile-bottom",l.innerHTML=r,document.body.appendChild(l)),document.querySelectorAll(".home2-chrome-tab").forEach(c=>{c._v2Bound||(c._v2Bound=!0,c.addEventListener("click",()=>{document.querySelectorAll(".home2-chrome-tab").forEach(g=>g.classList.remove("active")),document.querySelectorAll(`.home2-chrome-tab[data-key="${c.dataset.key}"]`).forEach(g=>g.classList.add("active")),t(c.dataset.route)}))}),document.querySelectorAll(".home2-chrome-tab").forEach(c=>c.classList.toggle("active",c.dataset.key===i));const s=`💰 ${(e.credits||0).toLocaleString("fr")}`;document.getElementById("home2-chrome-credits")&&(document.getElementById("home2-chrome-credits").textContent=s),document.getElementById("home2-mobtop-credits")&&(document.getElementById("home2-mobtop-credits").textContent=s),document.body.classList.remove("v2-match-flow"),a.style.display="",d.style.display="",l.style.display="";const p=document.getElementById("page-content");p&&(p.style.removeProperty("padding-top"),p.style.removeProperty("padding-bottom")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const c=window.innerWidth<1024;document.documentElement.style.setProperty("--v2-top-height",(c?d.offsetHeight:a.offsetHeight)+"px"),document.documentElement.style.setProperty("--v2-bottom-height",l.offsetHeight+"px")})})}const rr=[{ads:1,seconds:5,credits:4500},{ads:2,seconds:10,credits:9500},{ads:3,seconds:15,credits:15e3}];async function Io(t,e){if(!await to("pub_mode")){Wo();return}const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",i.innerHTML=`
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
    `;try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(c){console.warn("[AdSense]",c)}let s=e;const p=setInterval(()=>{s--;const c=a.querySelector("#credits-ad-cd");c&&(c.textContent=s),s<=0&&(clearInterval(p),l())},1e3)}function l(){var c,g;const s=a.querySelector("#credits-ad-status"),p=a.querySelector("#credits-ad-next-zone");r<t?(s&&(s.textContent="Publicité terminée ✅"),p&&(p.innerHTML=`
        <button id="credits-ad-next-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px">
          Suivant (${r}/${t}) →
        </button>`),(c=a.querySelector("#credits-ad-next-btn"))==null||c.addEventListener("click",()=>{r++,d()})):(s&&(s.textContent="Toutes les publicités ont été vues ✅"),p&&(p.innerHTML=`
        <button id="credits-ad-claim-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px;background:#D4A017;border-color:#D4A017">
          🎁 Récupérer ${i.toLocaleString("fr")} crédits
        </button>`),(g=a.querySelector("#credits-ad-claim-btn"))==null||g.addEventListener("click",async()=>{const y=a.querySelector("#credits-ad-claim-btn");y.disabled=!0,y.textContent="⏳...";const m=(o.credits||0)+i,{error:u}=await h.from("users").update({credits:m}).eq("id",o.id);if(u){n(u.message,"error"),y.disabled=!1;return}o.credits=m,Jt(m),n(`+${i.toLocaleString("fr")} crédits ✅`,"success"),a.remove()}))}d()}async function sn(t,e,i){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",document.body.appendChild(o);async function n(){var l;const{data:r}=await h.from("pending_rewards").select(`*,
        player:players(id, firstname, surname_real, country_code, club_id, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
          clubs(encoded_name, logo_url)),
        booster:booster_configs(name, image_url)`).eq("user_id",t.profile.id).eq("claimed",!1).order("created_at",{ascending:!0});if(!(r!=null&&r.length)){o.remove();const s=document.getElementById("pending-rewards-banner");s&&s.remove();return}const a=s=>{var p;return s.reward_type==="credits"?'<div style="width:56px;height:56px;border-radius:12px;background:rgba(212,160,23,0.15);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">💰</div>':s.reward_type==="card"&&s.player?`<div style="flex-shrink:0">${qe(s.player,{width:56})}</div>`:s.reward_type==="booster"?`<img src="/icons/${((p=s.booster)==null?void 0:p.image_url)||"booster-players.png"}" style="width:56px;height:56px;object-fit:contain;border-radius:12px;background:rgba(255,255,255,0.05);flex-shrink:0">`:'<div style="width:56px;height:56px;border-radius:12px;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">❓</div>'},d=s=>{var p,c,g;return s.reward_type==="credits"?`${(s.credits_amount||0).toLocaleString("fr")} crédits`:s.reward_type==="card"?`${((p=s.player)==null?void 0:p.firstname)||""} ${((c=s.player)==null?void 0:c.surname_real)||""}`.trim()||"Carte joueur":s.reward_type==="booster"?((g=s.booster)==null?void 0:g.name)||"Booster":"Récompense"};o.innerHTML=`
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
      </div>`,(l=o.querySelector("#pending-rewards-close"))==null||l.addEventListener("click",()=>o.remove()),o.querySelectorAll(".claim-reward-btn").forEach(s=>{s.addEventListener("click",async()=>{var c,g;const p=r.find(y=>y.id===s.dataset.id);s.disabled=!0,s.textContent="⏳...";try{const y=await Vn(p,t.profile,e,null);if(await h.from("pending_rewards").update({claimed:!0,claimed_at:new Date().toISOString()}).eq("id",p.id),y.type==="credits")Jt(t.profile.credits),e(`+${y.amount.toLocaleString("fr")} crédits ✅`,"success");else if(y.type==="card")e(`Carte reçue : ${((c=y.player)==null?void 0:c.firstname)||""} ${((g=y.player)==null?void 0:g.surname_real)||""} ✅`,"success");else if(y.type==="booster"){o.remove(),uo(y.cards,y.boosterUI,i,()=>{sn(t,e,i)});return}}catch(y){e(y.message||"Erreur lors de la réclamation","error"),s.disabled=!1,s.textContent="Récupérer";return}n()})})}n(),o.addEventListener("click",r=>{r.target===o&&o.remove()})}function Jt(t){const e=`💰 ${(t||0).toLocaleString("fr")}`,i=document.getElementById("home2-chrome-credits"),o=document.getElementById("home2-mobtop-credits");i&&(i.textContent=e),o&&(o.textContent=e)}function ut(){document.body.classList.add("v2-match-flow");const t=document.getElementById("home2-chrome-header");t&&(t.style.display="none");const e=document.getElementById("home2-mobile-top");e&&(e.style.display="none");const i=document.getElementById("home2-mobile-bottom");i&&(i.style.display="none");const o=document.getElementById("page-content");o&&(o.style.setProperty("padding-top","0","important"),o.style.setProperty("padding-bottom","0","important"))}function sr(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return"à l'instant";if(i<60)return`il y a ${i}min`;const o=Math.floor(i/60);if(o<24)return`il y a ${o}h`;const n=Math.floor(o/24);return n<7?`il y a ${n}j`:new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"short"})}async function lr(t){const{data:e}=await h.from("users").select("id,pseudo,club_name,mmr").order("mmr",{ascending:!1}).limit(5),i=e||[],o=i.some(r=>r.id===t);let n=null;if(!o){const{data:r}=await h.from("users").select("mmr").eq("id",t).single();if(r){const{count:a}=await h.from("users").select("id",{count:"exact",head:!0}).gt("mmr",r.mmr||0);n=(a||0)+1}}return{list:i,iAmInTop:o,myPosition:n}}async function dr(t=4){const{data:e}=await h.from("patch_notes").select("id,title,description,image_url,published_at").eq("is_published",!0).order("published_at",{ascending:!1}).limit(t);return e||[]}async function cr(){const{data:t}=await h.from("booster_configs").select("id,name,icon,price_type,price_credits,card_count").eq("is_active",!0).order("sort_order",{ascending:!0}).limit(5);return t||[]}async function pr(){const{data:t}=await h.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const n=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close-v2").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}async function Pi(t,{state:e,navigate:i,toast:o,openModal:n,closeModal:r}){var j,G,W,Q,M,$;const a=e.profile;if(!a)return;const d="/icons/";Wt(i,a,"home2",d,o);const l=a.mmr??450,s=xt(l),p=ki(l,s),c=Hi(l),g=isFinite(s.max)?s.max+1:null,[{list:y,iAmInTop:m,myPosition:u},v,w,{count:b}]=await Promise.all([lr(a.id),dr(5),cr(),h.from("pending_rewards").select("*",{count:"exact",head:!0}).eq("user_id",a.id).eq("claimed",!1)]),_=(x,S)=>{const J=xt(x.mmr??0),L=ki(x.mmr??0,J);return`
    <div class="rk-row ${x.id===a.id?"rk-row-me":""}">
      <div class="rk-pos ${S<3?"rk-pos-top"+(S+1):""}">${S<3?["🥇","🥈","🥉"][S]:S+1}</div>
      <div class="rk-name ${x.id===a.id?"rk-name-me":""}">${x.pseudo}</div>
      <div class="rk-rp-block">
        <div class="rk-rp-tier" style="color:${J.color}">${J.emoji} ${J.label.toUpperCase()}${L?" "+L:""}</div>
        <div class="rk-rp">${(x.mmr??0).toLocaleString("fr")} MMR</div>
      </div>
    </div>`},I=x=>`
    <div class="news-item">
      ${x.image_url?`<img src="${x.image_url}" class="news-thumb" onerror="this.style.display='none'">`:'<div class="news-thumb news-thumb-fallback">📰</div>'}
      <div class="news-body">
        <div class="news-title">${x.title}</div>
        <div class="news-desc">${x.description||""}</div>
        <div class="news-time">${sr(x.published_at)}</div>
      </div>
    </div>`;let f=0;const P=x=>`
    <div class="promo-icon-wrap">
      <img src="${d}${x.icon||"nav-boosters.png"}" class="promo-icon" onerror="this.style.display='none'">
    </div>
    <div class="promo-info">
      <div class="promo-kicker">NOUVEAU BOOSTER</div>
      <div class="promo-title">${x.name}</div>
      <div class="promo-desc">${x.card_count||5} cartes · ${x.price_type==="pub"?"Pub gratuite":(x.price_credits||0).toLocaleString("fr")+" cr."}</div>
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
                <div class="rank-rp-label">${l.toLocaleString("fr")}${g?" / "+g.toLocaleString("fr"):""} RP</div>
                <button class="rank-inline-link" id="rank-inline-link-btn">📊 Classement</button>
              </div>
            </div>
            <div class="rank-progress-track"><div class="rank-progress-fill" style="width:${c}%"></div></div>
          </div>

          <div class="ranking-widget">
            <div class="ranking-widget-header"><h4>CLASSEMENT</h4><a id="nav-rankings-link">Voir plus</a></div>
            ${y.map((x,S)=>_(x,S)).join("")}
            ${!m&&u?`
              <div style="border-top:1px solid var(--tile-border);margin-top:2px;padding-top:8px">
                ${_({id:a.id,pseudo:a.pseudo,mmr:l},u-1)}
              </div>`:""}
            <button class="ranking-widget-cta" id="nav-rankings-cta">📊 Voir le classement</button>
          </div>
        </div>

        <!-- Colonne centrale : Jouer + promo -->
        <div class="home2-col-center">
          ${b>0?`
          <div id="pending-rewards-banner" style="cursor:pointer;display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:14px;
            background:linear-gradient(135deg,rgba(212,160,23,0.25),rgba(212,160,23,0.1));border:1.5px solid #D4A017;margin-bottom:14px">
            <div style="font-size:28px">🎁</div>
            <div style="flex:1">
              <div style="font-weight:900;font-size:14px;color:#fff">Tu as des récompenses à récupérer !</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.6)">${b} récompense${b>1?"s":""} en attente</div>
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

          ${w.length?`
          <div class="promo-banner" id="promo-banner">
            <div id="promo-slide-content" style="display:flex;align-items:center;gap:14px;flex:1;min-width:0">
              ${P(w[0])}
            </div>
            <button class="promo-cta" id="promo-cta-btn">✅ Ouvrir des boosters</button>
            ${w.length>1?`<div class="promo-dots">${w.map((x,S)=>`<div class="promo-dot ${S===0?"active":""}" data-dot="${S}"></div>`).join("")}</div>`:""}
          </div>`:""}
        </div>

        <!-- Colonne droite : Actualités -->
        <div class="home2-col-right">
          <div class="news-widget">
            <div class="news-widget-header"><h4>ACTUALITÉS</h4><a id="nav-journal-link">Voir tout</a></div>
            ${v.length?v.map(I).join(""):'<div style="font-size:11px;color:var(--tile-fg-dim);padding:8px 0">Aucune actualité pour le moment.</div>'}
          </div>
        </div>

      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var ce,A;const x=((ce=window.visualViewport)==null?void 0:ce.height)||window.innerHeight,S=window.innerWidth<1024;let J=0;if(S){const E=document.getElementById("home2-mobile-top"),Z=document.getElementById("home2-mobile-bottom");J=((E==null?void 0:E.offsetHeight)||0)+((Z==null?void 0:Z.offsetHeight)||0)}else J=((A=document.getElementById("home2-chrome-header"))==null?void 0:A.offsetHeight)||0;const L=x-J,K=t.querySelector(".home-dark");K&&(K.style.minHeight=L+"px")}),(j=document.getElementById("nav-rankings-link"))==null||j.addEventListener("click",()=>i("rankings")),(G=document.getElementById("nav-rankings-cta"))==null||G.addEventListener("click",()=>i("rankings")),(W=document.getElementById("rank-inline-link-btn"))==null||W.addEventListener("click",()=>i("rankings")),(Q=document.getElementById("nav-journal-link"))==null||Q.addEventListener("click",()=>pr()),t.querySelectorAll("[data-action]").forEach(x=>{x.addEventListener("click",()=>{x.style.transform="scale(.96)",setTimeout(()=>x.style.transform="",180);const S=x.dataset.action;if(S==="match-ai"){cn(i,e);return}if(S==="match-random"){ut(),i("match",{matchMode:"random"});return}if(S==="match-friend"){i("friends");return}if(S==="mini-league"){i("mini-league");return}if(S==="ranked"){i("ranked");return}o("Bientôt disponible","info")})}),w.length>1){const x=document.getElementById("promo-slide-content"),S=()=>Array.from(document.querySelectorAll(".promo-dot")),J=L=>{f=L,x&&(x.innerHTML=P(w[f])),S().forEach((K,ce)=>K.classList.toggle("active",ce===f))};setInterval(()=>J((f+1)%w.length),5e3),document.querySelectorAll(".promo-dot").forEach(L=>{L.addEventListener("click",()=>J(Number(L.dataset.dot)))})}(M=document.getElementById("promo-cta-btn"))==null||M.addEventListener("click",()=>i("boosters")),dn(e,o),($=document.getElementById("pending-rewards-banner"))==null||$.addEventListener("click",()=>{sn(e,o,i)}),gr(e,o,i),ln(e,o,i),ur(e,o)}async function ur(t,e){const i=t.profile.id,{data:o}=await h.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(o!=null&&o.length))return;const n=o.reduce((a,d)=>a+(d.prize_amount||0),0),r=document.createElement("div");r.className="modal-overlay",r.style.zIndex="2200",r.innerHTML=`<div class="modal" style="max-width:400px">
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
  </div>`,document.body.appendChild(r),r.querySelector("#claim-later-btn").addEventListener("click",()=>r.remove()),r.querySelector("#claim-all-btn").addEventListener("click",async a=>{const d=a.currentTarget;d.disabled=!0,d.textContent="...";let l=0;for(const s of o){const{data:p}=await h.rpc("claim_mini_league_prize",{p_league_id:s.league_id,p_user_id:i});p!=null&&p.success&&!p.already_claimed&&(l+=p.prize||0)}if(l>0){t.profile.credits=(t.profile.credits||0)+l;const s=document.getElementById("nav-credits");s&&(s.textContent=`💰 ${t.profile.credits.toLocaleString("fr")}`),e(`💰 +${l.toLocaleString("fr")} cr. récupérés !`,"success")}r.remove()})}async function ln(t,e,i){const o=document.getElementById("ongoing-match-banner");if(!o)return;const n=t.profile.id,{data:r}=await h.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${n},away_id.eq.${n}`).order("created_at",{ascending:!1});if(!(r!=null&&r.length)){o.innerHTML="";return}const a=r.map(l=>l.home_id===n?l.away_id:l.home_id).filter(Boolean);let d={};if(a.length){const{data:l}=await h.from("users").select("id, pseudo, club_name").in("id",a);(l||[]).forEach(s=>{d[s.id]=s.club_name||s.pseudo})}o.innerHTML=r.map(l=>{const s=l.home_id===n?l.away_id:l.home_id,p=d[s]||"Adversaire",c=l.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${c?"🏆 Mini League":l.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${p}</div>
      </div>
      <button data-resume="${l.id}" data-mini="${c?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${l.id}" data-opp="${s}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),o.querySelectorAll("[data-resume]").forEach(l=>{l.addEventListener("click",async()=>{ut();const s=document.getElementById("page-content")||document.getElementById("app");if(l.dataset.mini==="1"){const{data:p}=await h.from("mini_league_matches").select("id, league_id").eq("match_id",l.dataset.resume).single();p?i("match-mini-league",{mlMatchId:p.id,leagueId:p.league_id}):i("mini-league")}else{const{resumePvpMatch:p}=await Yo(async()=>{const{resumePvpMatch:c}=await Promise.resolve().then(()=>xa);return{resumePvpMatch:c}},void 0);p(s,{state:t,navigate:i,toast:e,openModal:null,closeModal:null,refreshProfile:null},l.dataset.resume)}})}),o.querySelectorAll("[data-abandon]").forEach(l=>{l.addEventListener("click",()=>{mr(async()=>{await fr(l.dataset.abandon,l.dataset.opp,n),e("Match abandonné (défaite 3-0)","info"),ln(t,e,i)})})})}async function fr(t,e,i){Ht();const{data:o}=await h.from("matches").select("home_id, away_id, game_state, mode").eq("id",t).single();if(!o)return;const n=o.home_id===i,r=n?0:3,a=n?3:0,d=o.game_state||{};d.p1Score=r,d.p2Score=a,d.phase="finished",d.forfeit=!0,await h.from("matches").update({status:"finished",forfeit:!0,winner_id:e,home_score:r,away_score:a,game_state:d}).eq("id",t),o.mode==="mini_league"&&await h.from("mini_league_matches").update({status:"finished",home_score:r,away_score:a}).eq("match_id",t)}function mr(t){const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(e),e.querySelector("#ab-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#ab-ok").addEventListener("click",()=>{e.remove(),t()}),e.addEventListener("click",i=>{i.target===e&&e.remove()})}let yi=null,Rt=null;function gr(t,e,i){var r;const o=(r=t==null?void 0:t.user)==null?void 0:r.id;if(!o)return;const n=()=>br(t,e,i);if(n(),clearInterval(yi),yi=setInterval(()=>{if(!document.getElementById("match-invite-banner")){if(clearInterval(yi),yi=null,Rt){try{h.removeChannel(Rt)}catch{}Rt=null}return}n()},5e3),Rt)try{h.removeChannel(Rt)}catch{}Rt=h.channel("home-match-invites-"+o).on("postgres_changes",{event:"INSERT",schema:"public",table:"friend_match_invites",filter:`invitee_id=eq.${o}`},n).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`invitee_id=eq.${o}`},n).subscribe()}async function br(t,e,i){var d,l,s,p;const o=document.getElementById("match-invite-banner");if(!o)return;const{data:n}=await h.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",t.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!n){o.innerHTML="";return}const r=((d=n.inviter)==null?void 0:d.club_name)||((l=n.inviter)==null?void 0:l.pseudo)||"?",a=n.inviter_id;o.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${r} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(s=document.getElementById("match-inv-accept"))==null||s.addEventListener("click",()=>{o.innerHTML="",ut(),i("match",{matchMode:"friend",friendId:a,friendName:r,isAccepting:!0})}),(p=document.getElementById("match-inv-decline"))==null||p.addEventListener("click",async()=>{await h.from("friend_match_invites").update({status:"declined"}).eq("id",n.id),o.innerHTML="",e("Invitation refusée","info")})}async function dn(t,e){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:o,error:n}=await h.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",t.user.id).eq("status","pending");if(n||!(o!=null&&o.length)){i.innerHTML="";return}const r=o.length,a=o.slice(0,2).map(l=>{var s;return((s=l.requester)==null?void 0:s.pseudo)||"?"}).join(", "),d=r>2?` +${r-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
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
  </div>`,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("solo-cancel").addEventListener("click",o),i.addEventListener("click",s=>{s.target===i&&o()});const[{data:n},{data:r}]=await Promise.all([h.from("solo_levels").select("*").eq("is_active",!0).order("level_number"),h.from("user_solo_progress").select("unlocked_level").eq("user_id",e.profile.id).maybeSingle()]),a=(r==null?void 0:r.unlocked_level)||1,d=n||[],l=document.getElementById("solo-levels-list");if(l){if(!d.length){l.innerHTML='<div style="text-align:center;color:#999;padding:20px">Aucun niveau configuré.</div>';return}l.innerHTML=d.map(s=>{const p=s.level_number>a,c=s.level_number===a,g=p?"#f0f0f0":c?"#eefaf2":"#f7f7f7",y=p?"#ddd":c?"#bfe8cf":"#e0e0e0",m=p?"#999":"#12401f";return`
      <div class="solo-level-card" data-level="${s.level_number}" data-locked="${p}"
        style="cursor:${p?"not-allowed":"pointer"};display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${g};border:1px solid ${y};opacity:${p?.6:1};transition:transform .12s ease">
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
      </div>`}).join(""),l.querySelectorAll(".solo-level-card").forEach(s=>{s.dataset.locked!=="true"&&(s.addEventListener("mouseenter",()=>{s.style.transform="translateY(-1px)"}),s.addEventListener("mouseleave",()=>{s.style.transform=""}),s.addEventListener("click",()=>{o(),ut(),t("match",{matchMode:"solo",soloLevel:Number(s.dataset.level)})}))})}}const fi="#1A6B3C",mi="#cc2222",yr="#D4A017",Ao="#888";async function xr(t,e){const{state:i,toast:o}=e;t.innerHTML=`
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
    </div>`,await pn(i,o,e),document.getElementById("btn-add-friend").addEventListener("click",()=>vr(i,o)),document.getElementById("btn-accept-friend").addEventListener("click",()=>un(i,o,null,e))}async function pn(t,e,i={}){const{navigate:o}=i,n=t.user.id,{data:r,error:a}=await h.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${n},addressee_id.eq.${n}`),{count:d}=await h.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",n).eq("status","pending"),l=document.getElementById("pending-badge");l&&(d>0?(l.style.display="flex",l.textContent=d):l.style.display="none");const s=document.getElementById("friends-list");if(!s)return;if(a){console.error("[Friends] Erreur:",a),s.innerHTML=`<div style="color:${mi};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const p=(r||[]).map(y=>y.requester_id===n?y.addressee_id:y.requester_id);let c={};if(p.length){const{data:y}=await h.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",p);(y||[]).forEach(m=>{c[m.id]=m})}const g=(r||[]).map(y=>({friendshipId:y.id,friend:c[y.requester_id===n?y.addressee_id:y.requester_id]||{pseudo:"?"}}));if(!g.length){s.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}s.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${g.length} ami${g.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${g.map(({friendshipId:y,friend:m})=>hr(m,y)).join("")}
    </div>`,s.querySelectorAll("[data-stats]").forEach(y=>{y.addEventListener("click",()=>wr(t,y.dataset.stats,y.dataset.friendName))}),s.querySelectorAll("[data-match]").forEach(y=>{y.addEventListener("click",async()=>{const m=y.dataset.friendId,u=y.dataset.friendName;if(typeof o!="function"){e("Erreur navigation","error");return}const v=t.user.id,{data:w}=await h.from("friend_match_invites").select("id").eq("inviter_id",m).eq("invitee_id",v).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),b=!!w;console.log("[Friends] clic match",{fid:m,fname:u,isAccepting:b}),ut(),o("match",{matchMode:"friend",friendId:m,friendName:u,isAccepting:b})})})}function hr(t,e){const i=t.club_name||t.pseudo||"?",o=t.pseudo||"",n=(o||i).slice(0,2).toUpperCase(),r=t.club_color2||fi,a=t.club_color1||"#ffffff",d=t.last_seen_at?new Date(t.last_seen_at):null,l=d&&Date.now()-d.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${yr};background:var(--tile-bg);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
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
    ${mo()}`,document.body.appendChild(i);const o=i.querySelector("#friend-pseudo-input"),n=i.querySelector("#add-friend-error"),r=()=>i.remove();o.focus(),i.querySelector("#add-cancel").addEventListener("click",r),i.addEventListener("click",a=>{a.target===i&&r()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=o.value.trim();if(!a){n.textContent="Entre un pseudo";return}n.textContent="";const{data:d}=await h.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!d){n.textContent="Utilisateur introuvable";return}if(d.id===t.user.id){n.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:l}=await h.from("friendships").select("id, status").or(`and(requester_id.eq.${t.user.id},addressee_id.eq.${d.id}),and(requester_id.eq.${d.id},addressee_id.eq.${t.user.id})`).single();if(l){const p=l.status==="accepted"?"Vous êtes déjà amis !":l.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";n.textContent=p;return}const{error:s}=await h.from("friendships").insert({requester_id:t.user.id,addressee_id:d.id,status:"pending"});if(s){n.textContent="Erreur : "+s.message;return}r(),e(`✅ Demande envoyée à ${d.pseudo} !`,"success")})}async function un(t,e,i=null,o={}){const n=t.user.id,{data:r}=await h.from("friendships").select("id, requester_id").eq("addressee_id",n).eq("status","pending").order("created_at",{ascending:!1}),a=(r||[]).map(g=>g.requester_id);let d={};if(a.length){const{data:g}=await h.from("users").select("id, pseudo, club_name").in("id",a);(g||[]).forEach(y=>{d[y.id]=y})}const l=(r||[]).map(g=>({...g,requester:d[g.requester_id]||{pseudo:"?"}})),s=fo(),p=l||[];s.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${p.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${p.map(g=>{var y,m,u;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((y=g.requester)==null?void 0:y.club_name)||((m=g.requester)==null?void 0:m.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((u=g.requester)==null?void 0:u.pseudo)||""})</span>
                </div>
                <button data-accept="${g.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${fi};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${g.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${mi};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${mo()}`,document.body.appendChild(s);const c=()=>s.remove();s.querySelector("#pending-close").addEventListener("click",c),s.addEventListener("click",g=>{g.target===s&&c()}),s.querySelectorAll("[data-accept]").forEach(g=>{g.addEventListener("click",async()=>{const{error:y}=await h.from("friendships").update({status:"accepted"}).eq("id",g.dataset.accept);if(y){e("Erreur : "+y.message,"error");return}g.closest("div[style]").remove(),e("✅ Ami accepté !","success"),pn(t,e,o),i&&i()})}),s.querySelectorAll("[data-decline]").forEach(g=>{g.addEventListener("click",async()=>{await h.from("friendships").delete().eq("id",g.dataset.decline),g.closest("div[style]").remove(),e("Demande refusée","info"),i&&i()})})}async function wr(t,e,i){const o=t.user.id,[n,r]=[o,e].sort(),a=o===n,{data:d}=await h.from("friend_match_stats").select("*").eq("player1_id",n).eq("player2_id",r).single(),l=t.profile.club_name||t.profile.pseudo||"Moi",s=d||{},p=a?s.wins_p1||0:s.wins_p2||0,c=a?s.wins_p2||0:s.wins_p1||0,g=s.draws||0,y=a?s.goals_p1||0:s.goals_p2||0,m=a?s.goals_p2||0:s.goals_p1||0,u=a?s.gc_used_p1||0:s.gc_used_p2||0,v=a?s.gc_used_p2||0:s.gc_used_p1||0,w=s.matches_total||0,b=(I,f,P,j=fi,G=mi)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${j}">${f}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${I}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${G}">${P}</div>
    </div>`,_=fo();_.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${w===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${b("Victoires",p,c)}
        ${b("Nuls",g,g,Ao,Ao)}
        ${b("Défaites",c,p)}
        ${b("Buts marqués",y,m)}
        ${b("Buts encaissés",m,y,mi,fi)}
        ${b("GC utilisés ⚡",u,v,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${w} match${w>1?"s":""} joué${w>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${mo()}`,document.body.appendChild(_),_.querySelector("#stats-close").addEventListener("click",()=>_.remove()),_.addEventListener("click",I=>{I.target===_&&_.remove()})}function fo(){const t=document.createElement("div");return t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",t}function mo(){return`
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function mn(t,e,i){let o=0;const n=document.createElement("div");n.id="tutorial-overlay",n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const r=()=>{var p,c,g;const d=e[o],l=o===e.length-1,s=Math.round((o+1)/e.length*100);n.innerHTML=`
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
    `,n.querySelectorAll("ul,ol").forEach(y=>{y.style.paddingLeft="20px",y.style.marginTop="6px",y.style.marginBottom="6px"}),n.querySelectorAll("li").forEach(y=>{y.style.marginBottom="4px"}),n.querySelectorAll("p").forEach(y=>{y.style.marginBottom="8px"}),(p=n.querySelector("#tuto-prev"))==null||p.addEventListener("click",()=>{o--,r()}),(c=n.querySelector("#tuto-next"))==null||c.addEventListener("click",()=>{l?a():(o++,r())}),(g=n.querySelector("#tuto-skip"))==null||g.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{n.remove(),t!=null&&t.id&&await h.from("users").update({tutorial_done:!0}).eq("id",t.id),i==null||i()};document.body.appendChild(n),r()}async function gn(t,e,i){let o=[];const{data:n,error:r}=await h.rpc("get_tutorial_steps");if(!r&&(n==null?void 0:n.length)>0)o=n;else{const{data:d,error:l}=await h.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(d==null?void 0:d.length)>0?o=d:i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3)}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):fn;mn(t,a,()=>e("settings"))}async function To(t,e,i){if(!t||t.tutorial_done)return;let o=[];const{data:n,error:r}=await h.rpc("get_tutorial_steps");if(!r&&(n==null?void 0:n.length)>0)o=n,console.log(`[Tutorial] RPC OK → ${o.length} étapes`);else{const{data:d,error:l}=await h.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(d==null?void 0:d.length)>0?(o=d,console.log(`[Tutorial] Direct OK → ${o.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${r==null?void 0:r.message}, Direct: ${l==null?void 0:l.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):fn;mn(t,a,()=>e("boosters"))}async function bn(t,e){var v,w,b;const{state:i,navigate:o,toast:n}=e,r=li(),a=no(),d=(v=i==null?void 0:i.profile)==null?void 0:v.is_admin,l="2026.08.05-0840";t.innerHTML=`
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
  </div>`,t.querySelectorAll("[data-theme-choice]").forEach(_=>{_.addEventListener("click",()=>{Ko(_.dataset.themeChoice),bn(t,e)})});const s=t.querySelector("#team-color1"),p=t.querySelector("#team-color2"),c=t.querySelector("#team-preview"),g=()=>{c&&(c.style.background=`linear-gradient(135deg, ${s.value} 50%, ${p.value} 50%)`)};g(),s==null||s.addEventListener("input",g),p==null||p.addEventListener("input",g),(w=t.querySelector("#team-save"))==null||w.addEventListener("click",async()=>{const _=t.querySelector("#team-error"),I=t.querySelector("#team-save"),f=t.querySelector("#team-club-name").value.trim();if(f.length<2){_.textContent="Nom de club trop court.";return}I.disabled=!0,I.textContent="⏳ Enregistrement...",_.textContent="";const{error:P}=await h.from("users").update({club_name:f,club_color1:s.value,club_color2:p.value}).eq("id",i.profile.id);if(I.disabled=!1,I.textContent="💾 Enregistrer",P){_.textContent=P.message;return}i.profile.club_name=f,i.profile.club_color1=s.value,i.profile.club_color2=p.value,_.style.color="#2ecc71",_.textContent="✅ Modifications enregistrées.",li()==="club"&&Ko("club")});const y=t.querySelector("#volume-slider"),m=t.querySelector("#volume-label");let u=null;y.addEventListener("input",()=>{Gn(Number(y.value)),m.textContent=`${y.value}%`,u&&(u.volume=Math.max(0,Math.min(1,Number(y.value)/100)))}),t.querySelector("#volume-test").addEventListener("click",()=>{u=ao("/sounds/match-opening.mp3",1)}),(b=t.querySelector("#settings-tutorial"))==null||b.addEventListener("click",()=>{gn(i.profile,o,n)}),t.querySelector("#settings-logout").addEventListener("click",async()=>{await h.auth.signOut(),window.location.reload()})}const $r={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ti={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Mo=["GK","DEF","MIL","ATT"],Er=["Tous","GK","DEF","MIL","ATT"],Sr={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Co(t){const e=t.player;return e?(e.rarity,Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)):null}function zr(t){return t.length?t.reduce((e,i)=>Co(i)>Co(e)?i:e,t[0]):t[0]}const Lr={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function xi(t,e){return t&&Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Ri(t,e="",i=1){const o=t.player;if(!o)return"";const n=t.evolution_bonus||0,r={...o,_evolution_bonus:n},a=e?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${e}</div>`:"",d=i>1?`
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
  </div>`}async function Ir(t,e){const{state:i,navigate:o,toast:n,openModal:r,closeModal:a}=e;Wt(o,i.profile,"cards","/icons/",n),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await h.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await h.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),s=(d||[]).filter(B=>B.card_type==="player"&&B.player),p=(d||[]).filter(B=>B.card_type==="game_changer"),c=(d||[]).filter(B=>B.card_type==="formation"),g=(d||[]).filter(B=>B.card_type==="stadium"),{data:y}=await h.from("gc_definitions").select("name,gc_type,color,effect,image_url"),m={};(y||[]).forEach(B=>{m[B.name]=B});const{data:u}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),v={};(u||[]).forEach(B=>{v[B.id]=B}),g.forEach(B=>{B.stadium_def&&(v[B.stadium_id]=B.stadium_def)});const w=Object.keys(gi),b=Object.keys(Oe),_={};s.forEach(B=>{const T=B.player.id;_[T]=(_[T]||0)+1}),new Set(Object.keys(_).map(B=>String(B)));const I=new Set(c.map(B=>B.formation)),f=new Set(p.map(B=>B.gc_type));let P="player",j="Tous",G="",W=!1,Q=!1,M=new Set,$=new Set,x="job";function S(B){return B.job==="GK"?Number(B.note_g)||0:B.job==="DEF"?Number(B.note_d)||0:B.job==="MIL"?Number(B.note_m)||0:Number(B.note_a)||0}function J(B,T){return x==="note_desc"?[...B].sort((H,V)=>S(T(V))-S(T(H))):x==="note_asc"?[...B].sort((H,V)=>S(T(H))-S(T(V))):[...B].sort((H,V)=>{const Y=T(H),D=T(V),ee=Mo.indexOf(Y.job),ue=Mo.indexOf(D.job);return ee!==ue?ee-ue:(Y.surname_real||"").localeCompare(D.surname_real||"")})}function L(){return J(s,B=>B.player)}function K(){return J(l||[],B=>B)}function ce(B){return(!M.size||M.has(B.country_code))&&(!$.size||$.has(B.club_id))}function A(){return L().filter(B=>{const T=B.player,H=j==="Tous"||T.job===j,V=!G||`${T.firstname} ${T.surname_real}`.toLowerCase().includes(G);return H&&V&&ce(T)})}function E(){return K().filter(B=>{const T=j==="Tous"||B.job===j,H=!G||`${B.firstname} ${B.surname_real}`.toLowerCase().includes(G);return T&&H&&ce(B)})}t.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--tile-border);background:var(--tile-bg)">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${P==="player"?"var(--green)":"transparent"};
        color:${P==="player"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${s.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${P==="formation"?"var(--green)":"transparent"};
        color:${P==="formation"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${P==="gc"?"var(--green)":"transparent"};
        color:${P==="gc"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${p.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${P==="stadium"?"#4FC3F7":"transparent"};
        color:${P==="stadium"?"#4FC3F7":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${g.length})</div>
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
  </div>`,function(T){const H=document.getElementById(T);if(!H)return;H.addEventListener("wheel",ge=>{Math.abs(ge.deltaY)<=Math.abs(ge.deltaX)||(ge.preventDefault(),H.scrollLeft+=ge.deltaY)},{passive:!1});let V=!1,Y=0,D=0,ee=!1,ue=!1;H.addEventListener("mousedown",ge=>{V=!0,ee=!1,Y=ge.pageX,D=H.scrollLeft}),window.addEventListener("mouseup",()=>{V=!1,ee&&(H.style.cursor="",ue=!0),ee=!1}),window.addEventListener("mousemove",ge=>{if(!V)return;const pe=ge.pageX-Y;!ee&&Math.abs(pe)<6||(ee=!0,H.style.cursor="grabbing",ge.preventDefault(),H.scrollLeft=D-pe)}),H.addEventListener("click",ge=>{ue&&(ge.stopPropagation(),ge.preventDefault(),ue=!1)},!0)}("col-grid");function Z(){const B=document.getElementById("col-filters");B&&(P==="player"?(B.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px;background:#fff;color:#1a1a1a" value="${G}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Er.map(T=>`
            <button class="filter-btn" data-job="${T}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${T===j?"var(--green)":"var(--tile-border)"};
                background:${T===j?"var(--green)":"#fff"};
                color:${T===j?"#fff":"#555"}">
              ${T}
            </button>`).join("")}
          <button id="sort-note-btn" title="Trier par note"
            style="flex-shrink:0;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${x!=="job"?"var(--green)":"var(--tile-border)"};
              background:${x!=="job"?"var(--green)":"#fff"};
              color:${x!=="job"?"#fff":"#555"}">
            ⇅ Note${x==="note_desc"?" ↓":x==="note_asc"?" ↑":""}
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
              border:1.5px solid ${$.size?"var(--green)":"var(--tile-border)"};
              background:${$.size?"var(--green)":"#fff"};
              color:${$.size?"#fff":"#555"}">
            🏟️${$.size?` (${$.size})`:""}
          </button>
          <button id="dupes-only-btn" title="Voir les cartes en plusieurs exemplaires"
            style="flex-shrink:0;margin-left:auto;padding:5px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${Q?"var(--yellow)":"var(--tile-border)"};
              background:${Q?"var(--yellow)":"#fff"};
              color:${Q?"#111":"#555"}">
            🗂️×2
          </button>
          <button id="show-all-btn"
            style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${W?"var(--yellow)":"var(--tile-border)"};
              background:${W?"var(--yellow)":"#fff"};
              color:${W?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${W?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",T=>{G=T.target.value.toLowerCase(),te()}),t.querySelectorAll(".filter-btn").forEach(T=>{T.addEventListener("click",()=>{j=T.dataset.job,Z(),te()})}),document.getElementById("dupes-only-btn").addEventListener("click",()=>{Q=!Q,Z(),te()}),document.getElementById("show-all-btn").addEventListener("click",()=>{W=!W,Z(),te()}),document.getElementById("sort-note-btn").addEventListener("click",()=>{x=x==="job"?"note_desc":x==="note_desc"?"note_asc":"job",Z(),te()}),document.getElementById("country-filter-btn").addEventListener("click",()=>{O("country","🌍 Filtrer par pays",e)}),document.getElementById("club-filter-btn").addEventListener("click",()=>{O("club","🏟️ Filtrer par club",e)})):(B.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${W?"var(--yellow)":"var(--tile-border)"};
              background:${W?"var(--yellow)":"#fff"};
              color:${W?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${W?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{W=!W,Z(),te()})))}function O(B,T,H){var pe,$e,Le;const V=B==="country",Y=V?M:$,D=W?l||[]:s.map(he=>he.player);let ee;if(V){const he=new Map;D.forEach(we=>{we!=null&&we.country_code&&!he.has(we.country_code)&&he.set(we.country_code,we.country_code)}),ee=[...he.keys()].sort().map(we=>({value:we,label:we}))}else{const he=new Map;D.forEach(we=>{var k;we!=null&&we.club_id&&!he.has(we.club_id)&&he.set(we.club_id,((k=we.clubs)==null?void 0:k.encoded_name)||we.club_id)}),ee=[...he.entries()].sort((we,k)=>we[1].localeCompare(k[1])).map(([we,k])=>({value:we,label:k}))}const ue=`
      <div style="display:flex;gap:8px;margin-bottom:10px">
        <button id="mf-all"  class="btn btn-ghost" style="flex:1">Tout cocher</button>
        <button id="mf-none" class="btn btn-ghost" style="flex:1">Tout décocher</button>
      </div>
      <div style="max-height:340px;overflow-y:auto;display:flex;flex-direction:column;gap:2px">
        ${ee.length?ee.map(he=>`
          <label style="display:flex;align-items:center;gap:8px;padding:6px 4px;font-size:14px;color:#1a1a1a;cursor:pointer">
            <input type="checkbox" class="mf-check" value="${he.value}" ${Y.has(he.value)?"checked":""}>
            <span>${he.label}</span>
          </label>`).join(""):'<div style="color:#999;font-size:13px;text-align:center;padding:16px">Aucune option disponible.</div>'}
      </div>`;H.openModal(T,ue,'<button class="btn btn-primary" id="mf-apply" style="width:100%">Appliquer</button>'),(pe=document.getElementById("mf-all"))==null||pe.addEventListener("click",()=>{document.querySelectorAll(".mf-check").forEach(he=>he.checked=!0)}),($e=document.getElementById("mf-none"))==null||$e.addEventListener("click",()=>{document.querySelectorAll(".mf-check").forEach(he=>he.checked=!1)}),(Le=document.getElementById("mf-apply"))==null||Le.addEventListener("click",()=>{Y.clear(),document.querySelectorAll(".mf-check:checked").forEach(he=>Y.add(he.value)),H.closeModal(),Z(),te()})}function te(){const B=document.getElementById("col-grid");B&&(P==="player"?Be(B):P==="formation"?ve(B):P==="stadium"?ke(B):be(B))}function de(B,T,H,V,Y,D=0){const ee=document.getElementById("col-grid"),ue=document.getElementById("col-big");if(!ee||!ue)return;var ge=0;function pe(){var C;const $e=window.innerWidth>=768,Le=document.getElementById("col-big"),he=document.getElementById("col-gap"),we=((C=document.getElementById("col-grid"))==null?void 0:C.parentElement)||null,k=Le?Le.closest(".page"):null;if(Le&&we&&k){let R=0;Array.from(k.children).forEach(function(oe){oe!==Le&&oe!==we&&oe!==he&&(R+=oe.offsetHeight)});const F=Math.max(0,k.clientHeight-R),U=Math.round(F*(D/100)),X=Math.max(0,F-U),ie=$e?50/71:45/63,ne=Math.round(X*ie),ae=Math.max(0,X-ne);he&&(he.style.height=U+"px"),Le.style.flex="none",Le.style.height=ne+"px",Le.style.minHeight="0",we.style.flex="none",we.style.height=ae+"px",we.style.minHeight="0",we.style.display="flex",we.style.overflow="hidden"}const z=document.getElementById("col-grid");z&&(z.style.height="100%",z.style.flexShrink="0",z.style.overflowX="auto",z.style.overflowY="hidden",z.style.alignItems="center",z.style.width="100%"),ue.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+T(B[ge])+"</div>";var q=ue.querySelector("[data-card-id],[data-form-id],[data-gc-id]");q&&q.addEventListener("click",function(){V(B[ge])});var N=ue.querySelector(".big-evolve-btn");N&&N.addEventListener("click",function(R){R.stopPropagation(),V(B[ge],{autoEvolve:!0})}),requestAnimationFrame(function(){var R=document.getElementById("big-card-inner");if(!(!R||!ue)){var F=ue.clientHeight,U=ue.clientWidth-16,X=R.offsetHeight,ie=R.offsetWidth;if(X>0&&ie>0&&F>40){var ne=Math.min(F/X,U/ie);R.style.transform="scale("+ne.toFixed(3)+")",R.style.transformOrigin="center center"}}}),ee.innerHTML=B.map(function(R,F){var U=F===ge,X="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(U?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+F+'" style="'+X+'">'+H(R,U)+"</div>"}).join(""),ee.querySelectorAll(".col-mini-item").forEach(function(R){R.addEventListener("click",function(){ge=Number(R.dataset.idx),pe(),R.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var R=z?z.clientHeight:0,F=ee.querySelector(".col-mini-item > div");if(!(!R||!F)){var U=F.style.zoom;F.style.zoom="1";var X=F.offsetHeight;if(F.style.zoom=U,!(X<=0)){var ie=R/X;ee.querySelectorAll(".col-mini-item > div").forEach(function(ne){ne.style.zoom=ie.toFixed(4)})}}})}pe()}function xe(B,T){var H=window.innerWidth>=768?.76:.54,V;if(!B||B._fake){var Y=B?B.player:null;if(!Y)return"";V=jo(Y)}else V=Ri(B,"");var D=B&&!B._fake?_[B.player&&B.player.id]||1:0,ee=D>0?'<div style="position:absolute;top:6px;right:6px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:11px;font-weight:900;padding:2px 7px;z-index:3;box-shadow:0 1px 4px rgba(0,0,0,0.4)">×'+D+"</div>":"";return'<div style="display:inline-block;position:relative;zoom:'+H+';pointer-events:none;line-height:0">'+ee+V+"</div>"}function fe(B,T,H){var V=H>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+H+"</div>":"",Y=!!T,D=di(B,ct[B],{width:160});return Y||(D='<div style="filter:grayscale(1);opacity:0.5">'+D+"</div>"),"<div "+(T?'data-form-id="'+T.id+'"':"")+' style="position:relative;cursor:pointer">'+V+D+"</div>"}function Me(B,T){var H=window.innerWidth>=768?.76:.54,V=di(B,ct[B],{width:140});return T||(V='<div style="filter:grayscale(1);opacity:0.45">'+V+"</div>"),'<div style="display:inline-block;zoom:'+H+';line-height:0;pointer-events:none">'+V+"</div>"}function Be(B){if(W){const T=E();if(!T.length){B.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const H=T.map(V=>s.find(Y=>Y.player.id===V.id)||{_fake:!0,player:V,id:"fake-"+V.id});de(H,V=>V._fake?jo(V.player):Ri(V,""),V=>V._fake?xe({player:V.player,id:"x",_fake:!0}):xe(V),V=>{V._fake||qo(V,s,_,e)})}else{const T=A();if(!T.length){B.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const H={};T.forEach(Y=>{const D=Y.player.id;H[D]||(H[D]=[]),H[D].push(Y)});const V=Object.values(H).map(Y=>zr(Y)).filter(Y=>!Q||(_[Y.player.id]||1)>1);if(Q&&!V.length){B.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte en plusieurs exemplaires.</div>';return}de(V,Y=>{const D=_[Y.player.id]||1,ee=D>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${D}</div>`:"",ge=s.filter(pe=>pe.player.id===Y.player.id&&pe.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Ri(Y,ee+ge,D)},Y=>xe(Y),(Y,D)=>qo(Y,s,_,e,D))}}function ve(B){const T=W?w:[...I];if(!T.length){B.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const H=T.map(V=>({formation:V,card:c.find(Y=>Y.formation===V)||null,owned:I.has(V)}));de(H,({formation:V,card:Y,owned:D})=>fe(V,D?Y:null,D?c.filter(ee=>ee.formation===V).length:0),({formation:V,owned:Y})=>Me(V,Y),({card:V,owned:Y})=>{Y&&V&&Tr(V,c,e,r)},"#1A6B3C",5)}function be(B){const T=Object.keys(m),H=W?T.length?T:b:[...f];if(!H.length){B.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const V=H.map(Y=>({type:Y,gc:Oe[Y]||{icon:"⚡",desc:""},def:m[Y]||null,owned:f.has(Y),card:p.find(D=>D.gc_type===Y)||null}));de(V,({type:Y,gc:D,def:ee,owned:ue,card:ge})=>{var z;const pe=(ee==null?void 0:ee.name)||Y,$e=ue?p.filter(q=>q.gc_type===Y).length:0,Le=$e>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${$e}</div>`:"",he=(ee==null?void 0:ee.effect)||D.desc||"",we=ee!=null&&ee.image_url?`/icons/${ee.image_url}`:((z=ee==null?void 0:ee.club)==null?void 0:z.logo_url)||(ee!=null&&ee.country_code?`https://flagsapi.com/${ee.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);let k=it(pe,we,D.icon,he,{width:160,onClick:ue});return ue||(k=`<div style="filter:grayscale(1);opacity:0.5">${k}</div>`),`<div ${ue&&ge?`data-gc-id="${ge.id}" data-gc-type="${Y}"`:""} style="position:relative">${Le}${k}</div>`},({type:Y,gc:D,def:ee,owned:ue})=>{const ge=window.innerWidth>=768?.76:.54,pe=(ee==null?void 0:ee.name)||Y,$e=(ee==null?void 0:ee.effect)||D.desc||"",Le=ee!=null&&ee.image_url?`/icons/${ee.image_url}`:null;let he=it(pe,Le,D.icon,$e,{width:140});return ue||(he=`<div style="filter:grayscale(1);opacity:0.45">${he}</div>`),`<div style="display:inline-block;zoom:${ge};line-height:0;pointer-events:none">${he}</div>`},({type:Y,owned:D,def:ee})=>{D&&Ar(Y,ee,r)},"#7a28b8",5)}function ke(B){const T="#4FC3F7",H="/";if(!g.length){B.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const V={};g.forEach(D=>{const ee=D.stadium_id||"?";(V[ee]=V[ee]||[]).push(D)});const Y=Object.entries(V).map(([D,ee])=>({sid:D,def:v[D]||null,count:ee.length,card:ee[0]}));de(Y,({def:D,count:ee})=>{var he,we;const ue=(D==null?void 0:D.name)||"?",ge=((he=D==null?void 0:D.club)==null?void 0:he.encoded_name)||(D==null?void 0:D.country_code)||"—",pe=D!=null&&D.image_url?`${H}icons/${D.image_url}`:((we=D==null?void 0:D.club)==null?void 0:we.logo_url)||(D!=null&&D.country_code?`https://flagsapi.com/${D.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),$e=ee>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ee}</div>`:"",Le=`${ge}<br>+10 ⭐ joueurs alliés`;return`<div style="position:relative">${$e}${Kt(ue,pe,Le,{width:160})}</div>`},({def:D})=>{var Le,he;const ee=window.innerWidth>=768?.76:.54,ue=(D==null?void 0:D.name)||"?",ge=((Le=D==null?void 0:D.club)==null?void 0:Le.encoded_name)||(D==null?void 0:D.country_code)||"—",pe=D!=null&&D.image_url?`${H}icons/${D.image_url}`:((he=D==null?void 0:D.club)==null?void 0:he.logo_url)||(D!=null&&D.country_code?`https://flagsapi.com/${D.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),$e=`${ge}<br>+10 ⭐`;return`<div style="display:inline-block;zoom:${ee};line-height:0;pointer-events:none">${Kt(ue,pe,$e,{width:140})}</div>`},null,T,5)}t.querySelectorAll(".col-tab-btn").forEach(B=>{B.addEventListener("click",()=>{P=B.dataset.tab,j="Tous",G="",W=!1,t.querySelectorAll(".col-tab-btn").forEach(T=>{const H=T.dataset.tab===P;T.style.borderBottomColor=H?"var(--green)":"transparent",T.style.color=H?"var(--green)":"var(--tile-fg-dim)"}),Z(),te()})}),Z(),te()}function Ar(t,e,i){const o=Oe[t]||{icon:"⚡",desc:"Effet spécial."},n=(e==null?void 0:e.name)||t,r=(e==null?void 0:e.effect)||o.desc,a=e!=null&&e.image_url?`/icons/${e.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      ${it(n,a,o.icon,r,{width:200})}
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const hi=1e3;function Tr(t,e,i,o){var m,u,v;const{state:n,toast:r,closeModal:a,navigate:d,refreshProfile:l}=i,s=t.formation,p={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function c(){const w=ct[s]||{},b=gi[s]||[],_=290,I=360,f=20;function P(G){const W=w[G];return W?{x:W.x*_,y:W.y*I}:null}let j=`<svg width="${_}" height="${I}" viewBox="0 0 ${_} ${I}" xmlns="http://www.w3.org/2000/svg">`;for(const[G,W]of b){const Q=P(G),M=P(W);!Q||!M||(j+=`<line x1="${Q.x}" y1="${Q.y}" x2="${M.x}" y2="${M.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const G of Object.keys(w)){const W=P(G);if(!W)continue;const Q=G.replace(/\d+/,""),M=p[Q]||"#555";j+=`<circle cx="${W.x}" cy="${W.y}" r="${f}" fill="${M}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,j+=`<text x="${W.x}" y="${W.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${Q}</text>`}return j+="</svg>",j}const g=e.filter(w=>w.formation===s);g.length;const y=!t.is_for_sale;o(`Formation ${s}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${hi}"
          style="flex:1;padding:8px;border:1.5px solid var(--tile-border);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${t.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(m=document.getElementById("direct-sell-form-btn"))==null||m.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${s} pour ${hi.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const w=g.find(_=>!_.is_for_sale)||g[0];if(!w){r("Aucune carte à vendre","error");return}await h.from("market_listings").delete().eq("card_id",w.id),await h.from("transfer_history").delete().eq("card_id",w.id);const{error:b}=await h.from("cards").delete().eq("id",w.id);if(b){r(b.message,"error");return}await h.from("users").update({credits:(n.profile.credits||0)+hi}).eq("id",n.profile.id),await l(),r(`+${hi.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),d("collection")}),(u=document.getElementById("market-sell-form-btn"))==null||u.addEventListener("click",async()=>{const w=parseInt(document.getElementById("sell-price-form").value);if(!w||w<1){r("Prix invalide","error");return}await h.from("cards").update({is_for_sale:!0,sale_price:w}).eq("id",t.id),await h.from("market_listings").insert({seller_id:n.profile.id,card_id:t.id,price:w}),r("Carte mise en vente sur le marché !","success"),a(),d("collection")}),(v=document.getElementById("cancel-sell-form-btn"))==null||v.addEventListener("click",async()=>{await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await h.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),r("Annonce retirée","success"),a(),d("collection")})}async function qo(t,e,i,o,n={}){var O,te,de,xe,fe,Me,Be,ve,be,ke,B;const{state:r,toast:a,openModal:d,closeModal:l,navigate:s,refreshProfile:p}=o,c=t.player,g=e.filter(T=>T.player.id===c.id),y=g.length,m=t.evolution_bonus||0,u=Math.max((Number(c.note_g)||0)+(c.job==="GK"||c.job2==="GK"?m:0),(Number(c.note_d)||0)+(c.job==="DEF"||c.job2==="DEF"?m:0),(Number(c.note_m)||0)+(c.job==="MIL"||c.job2==="MIL"?m:0),(Number(c.note_a)||0)+(c.job==="ATT"||c.job2==="ATT"?m:0)),v=c.rarity||"normal",{data:w}=await h.from("sell_price_configs").select("*").eq("rarity",v).lte("note_min",u).gte("note_max",u).order("note_min",{ascending:!1}).limit(1),b=((O=w==null?void 0:w[0])==null?void 0:O.price)??Sr[v]??1e3,_=((te=w==null?void 0:w[0])==null?void 0:te.price_min)??null,I=((de=w==null?void 0:w[0])==null?void 0:de.price_max)??null;Ct(c);const f=xi(c,c.job)+m,P=c.job2?xi(c,c.job2)+(xi(c,c.job2)>0?m:0):null;ti[c.job],c.job2&&ti[c.job2];const j=$r[c.rarity]||"#ccc",G=Lr[c.country_code]||c.country_code||"",W=t.evolution_bonus||0,M=f+W,$=P||0,x=$>0?$+W:0,S=g.map(T=>T.id);let J={};if(S.length){const{data:T}=await h.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",S).order("transferred_at",{ascending:!0});(T||[]).forEach(H=>{J[H.card_id]||(J[H.card_id]=[]),J[H.card_id].push(H)})}const L=S.length?`
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
          ${_!==null&&I!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${_.toLocaleString("fr")}</b> – <b>${I.toLocaleString("fr")}</b> cr.
          </div>`:""}
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <input type="number" id="single-sell-price" min="1" placeholder="Prix"
              value="${_||c.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="single-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
          <button id="single-direct-sell-btn" class="btn btn-ghost" style="width:100%;border-color:#1A6B3C;color:#1A6B3C;font-weight:700">
            ⚡ Vente directe immédiate (${(_??b).toLocaleString("fr")} cr.)
          </button>
        </div>
      `}

      ${y-1>0?`<div style="font-size:13px;font-weight:700;margin-bottom:10px">🗂️ Copies (${y-1})</div>`:`
        <div style="font-size:12px;color:#aaa;font-style:italic">Aucune autre copie.</div>
      `}
      <!-- Grille de mini-cartes (copies uniquement, l'exemplaire 1 = carte principale affichée en haut) -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${g.filter(T=>T.id!==t.id).map((T,H)=>{const V=J[T.id]||[],Y=T.is_for_sale,D=V.length?V[V.length-1]:null,ee=T.evolution_bonus||0,ue=D?D.source==="booster"?"Booster":D.price?D.price.toLocaleString("fr")+" cr.":"—":"—",ge=D?new Date(D.transferred_at).toLocaleDateString("fr",{day:"2-digit",month:"2-digit",year:"numeric"}):"",pe=80,$e=Math.round(pe*657/507),Le=qe({...c,_evolution_bonus:ee},{width:pe});return`
            <div class="exemplaire-row" data-card-id="${T.id}" data-card-idx="${H}"
              style="position:relative;cursor:${Y?"not-allowed":"pointer"};opacity:${Y?.55:1};transition:transform .1s">
              <!-- Checkbox cachée -->
              <input type="checkbox" class="expl-check"
                data-id="${T.id}" data-evo="${ee}" data-note="${xi(c,c.job)}"
                ${Y?"disabled":""}
                style="display:none">
              <!-- Wrapper exactement aux dimensions de la carte -->
              <div class="expl-mini-card" style="position:relative;width:${pe}px;height:${$e}px;border-radius:8px;overflow:hidden">
                ${Le}
                <!-- Overlay vert sélection — couvre toute la carte -->
                <div class="expl-sel-overlay" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(26,107,60,0.38);pointer-events:none;z-index:10;box-shadow:inset 0 0 0 3px #1A6B3C;border-radius:8px"></div>
                <!-- Checkmark -->
                <div class="expl-sel-check" style="display:none;position:absolute;top:5px;left:5px;width:20px;height:20px;background:#1A6B3C;border-radius:50%;z-index:11;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:900">✓</div>
                ${Y?'<div style="position:absolute;top:0;right:0;background:#e67e22;color:#fff;font-size:6px;font-weight:900;padding:2px 4px;border-radius:0 6px 0 4px;z-index:12">VENTE</div>':""}
              </div>
              <!-- Source + date -->
              <div style="font-size:9px;color:#888;text-align:center;margin-top:3px;line-height:1.3">
                ${ue}${ge?`<br>${ge}`:""}
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
              ${(t.evolution_bonus||0)>0?`+${t.evolution_bonus} appliqué${t.evolution_bonus>1?"s":""} · Note : ${M}${c.job2&&$>0?` / ${x}`:""}`:`Note actuelle : ${M}${c.job2&&$>0?` / ${x}`:""}`}
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
          ${_!==null&&I!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${_.toLocaleString("fr")}</b> – <b>${I.toLocaleString("fr")}</b> cr. / carte
          </div>`:""}
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${_||c.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
          <button id="market-direct-sell-btn" class="btn btn-ghost" style="width:100%;border-color:#1A6B3C;color:#1A6B3C;font-weight:700">
            ⚡ Vente directe immédiate (${(_??b).toLocaleString("fr")} cr./carte)
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
          <div style="font-weight:900;font-size:15px;color:${c.rarity==="normal"?"#555":c.rarity==="papyte"?"#707070":j}">${c.rarity.toUpperCase()}</div>
          ${c.rarity==="pepite"||c.rarity==="papyte"?`
          <div style="margin-top:8px;background:${j}12;border-left:3px solid ${j};border-radius:0 8px 8px 0;padding:10px 12px">
            <div style="font-size:11px;font-weight:700;color:${j};margin-bottom:4px">✨ Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5;margin-bottom:6px">
              ${c.rarity==="pepite"?'⬆️ Bonus évolution : <b style="color:#D4A017">+30%</b>':'⬇️ Malus évolution : <b style="color:#909090">-30%</b>'}
            </div>
            <div style="font-size:10.5px;color:#888;line-height:1.5;font-style:italic;border-top:1px solid ${j}30;padding-top:6px">
              ${c.rarity==="pepite"?"Une carte Pépite est promise à un grand avenir : à force d'évoluer, elle peut un jour devenir une Légende.":"Une carte Papyte peut devenir une légende dans le temps ou prendre sa retraite..."}
            </div>
          </div>`:""}
        </div>

        <!-- Grille d'infos : Pays / Club / Postes -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px 16px;background:#f8f8f8;border-radius:10px;padding:10px 12px">
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">PAYS</div>
            <div style="font-weight:700;font-size:13px;color:#333">${G||"—"}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">CLUB</div>
            <div style="font-weight:700;font-size:13px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${((xe=c.clubs)==null?void 0:xe.encoded_name)||"—"}</div>
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
            ${[["GK",c.note_g],["DEF",c.note_d],["MIL",c.note_m],["ATT",c.note_a]].map(([T,H])=>{const V=ti[T],Y=T==="GK"?"#fff":V,D=T===c.job||T===c.job2,ee=(Number(H)||0)+(D&&W>0?W:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${V};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${Y};font-family:Arial Black,Arial;line-height:1">${ee}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${Y}">${T}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:900;font-size:18px;color:#1A6B3C">×${y}</div>
        </div>
      </div>
    </div>
    ${L}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(fe=document.getElementById("close-detail"))==null||fe.addEventListener("click",l);let K=new Set;const ce=c.rarity==="pepite"?1.3:c.rarity==="papyte"?.7:1;function A(){let T=0;return document.querySelectorAll(".expl-check:checked").forEach(H=>{if(H.dataset.id===t.id)return;const Y=Number(H.dataset.evo)||0,D=Number(H.dataset.note)||0;T+=D+Y}),Math.round(T*ce)}const E=()=>{const T=K.size,H=document.getElementById("sell-action-panel");if(!H)return;H.style.display=T>0?"block":"none",document.getElementById("sell-selected-count").textContent=T;const V=document.getElementById("evolve-btn");if(V){const Y=A();V.textContent=Y>0?`⬆️ Évoluer (+${Y})`:"⬆️ Évoluer"}};if(document.querySelectorAll(".expl-check").forEach(T=>{T.addEventListener("change",()=>{const H=T.dataset.id;T.checked?K.add(H):K.delete(H);const V=T.closest(".exemplaire-row");if(V){const Y=V.querySelector(".expl-sel-overlay"),D=V.querySelector(".expl-sel-check");Y&&(Y.style.display=T.checked?"block":"none"),D&&(D.style.display=T.checked?"flex":"none"),V.style.transform=T.checked?"scale(1.05)":"scale(1)"}E()})}),n.autoEvolve){document.querySelectorAll(".expl-check").forEach(H=>{if(H.dataset.id===t.id)return;H.checked=!0,K.add(H.dataset.id);const V=H.closest(".exemplaire-row");if(V){const Y=V.querySelector(".expl-sel-overlay"),D=V.querySelector(".expl-sel-check");Y&&(Y.style.display="block"),D&&(D.style.display="flex"),V.style.transform="scale(1.05)"}}),E();const T=document.getElementById("modal-overlay");T&&(T.style.visibility="hidden"),requestAnimationFrame(()=>{const H=document.getElementById("evolve-btn");if(!H||H.disabled){T&&(T.style.visibility="");return}H.click();const V=()=>{T&&(T.style.visibility="",T.classList.contains("hidden")||l())},Y=new MutationObserver(()=>{[...document.body.children].some(ue=>{var ge;return((ge=ue.style)==null?void 0:ge.zIndex)==="9999"})||(Y.disconnect(),clearTimeout(D),V())});Y.observe(document.body,{childList:!0});const D=setTimeout(()=>{Y.disconnect(),V()},6e4)})}document.querySelectorAll(".exemplaire-row").forEach(T=>{T.addEventListener("click",H=>{if(H.target.tagName==="INPUT")return;const V=T.querySelector(".expl-check");V&&!V.disabled&&(V.checked=!V.checked,V.dispatchEvent(new Event("change")))})}),(Me=document.getElementById("evolve-btn"))==null||Me.addEventListener("click",async()=>{if(y<=1)return;const T=[...K];if(!T.length)return;if(K.has(t.id)){const pe=document.createElement("div");pe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",pe.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(pe),pe.querySelector("#err-close").addEventListener("click",()=>pe.remove()),pe.addEventListener("click",$e=>{$e.target===pe&&pe.remove()});return}const H=T.filter(pe=>pe!==t.id);if(!H.length){a("Sélectionne des copies à sacrifier","warning");return}const V=H.reduce((pe,$e)=>{const Le=document.querySelector(`.expl-check[data-id="${$e}"]`),he=Le&&Number(Le.dataset.evo)||0,we=Le&&Number(Le.dataset.note)||0;return pe+we+he},0),Y=Math.round(V*ce),D=c.rarity==="pepite"?" (+30% pépite ✨)":c.rarity==="papyte"?" (-30% papyte)":"";if(!await new Promise(pe=>{const $e=document.createElement("div");$e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",$e.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${c.firstname} ${c.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${H.length}</strong> copie${H.length>1?"s":""} sacrifiée${H.length>1?"s":""}<br>
            ➕ Brut : <strong>+${V}</strong>${D?`<span style="font-size:11px;color:#888"> ${D}</span>`:""}<br>
            ⬆️ Bonus final : <strong style="color:#1A6B3C">+${Y}</strong><br>
            📈 Évolution : <strong>${t.evolution_bonus||0}</strong> → <strong style="color:#1A6B3C">${(t.evolution_bonus||0)+Y}</strong><br>
            📊 Note finale : <strong>${f}</strong> → <strong style="color:#1A6B3C">${f+Y}</strong>
            ${P&&P>0?`<br>📊 Note 2 finale : <strong>${P}</strong> → <strong style="color:#1A6B3C">${P+Y}</strong>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild($e),$e.querySelector("#sac-cancel").addEventListener("click",()=>{$e.remove(),pe(!1)}),$e.querySelector("#sac-ok").addEventListener("click",()=>{$e.remove(),pe(!0)}),$e.addEventListener("click",Le=>{Le.target===$e&&($e.remove(),pe(!1))})}))return;if(H.length){await h.from("market_listings").delete().in("card_id",H),await h.from("deck_cards").delete().in("card_id",H),await h.from("transfer_history").delete().in("card_id",H),await h.from("decks").update({stadium_card_id:null}).in("stadium_card_id",H);const{error:pe}=await h.from("cards").delete().in("id",H);if(pe){a("Erreur suppression : "+pe.message,"error");return}}const ue=(t.evolution_bonus||0)+Y,{error:ge}=await h.from("cards").update({evolution_bonus:ue}).eq("id",t.id);if(ge){a("Erreur évolution : "+ge.message,"error");return}a(`⬆️ ${c.firstname} ${c.surname_real} : note ${f} → ${f+ue} (+${Y}) !`,"success",4e3),l(),s("collection")});async function Z(T){const{data:H}=await h.from("sell_price_configs").select("price_min, price_max").eq("rarity",c.rarity).lte("note_min",f).gte("note_max",f).order("note_max",{ascending:!0}).limit(1).maybeSingle();return H?T<H.price_min||T>H.price_max?{ok:!1,min:H.price_min,max:H.price_max}:{ok:!0}:{ok:!0}}(Be=document.getElementById("market-sell-btn"))==null||Be.addEventListener("click",async()=>{var ue;const T=[...K];if(!T.length){a("Sélectionne au moins un exemplaire","warning");return}const H=parseInt((ue=document.getElementById("sell-market-price"))==null?void 0:ue.value);if(!H||H<1){a("Prix invalide","error");return}const V=await Z(H);if(!V.ok){a(`Prix hors grille : entre ${V.min.toLocaleString("fr")} et ${V.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:Y}=await h.from("cards").update({is_for_sale:!0,sale_price:H}).in("id",T);if(Y){a(Y.message,"error");return}const D=T.map(ge=>({seller_id:r.profile.id,card_id:ge,price:H,status:"active"})),{error:ee}=await h.from("market_listings").insert(D);ee&&console.warn("[Market] insert listings:",ee.message),a(`${T.length} carte${T.length>1?"s":""} mise${T.length>1?"s":""} en vente à ${H.toLocaleString("fr")} cr. chacune !`,"success"),l(),s("collection")}),(ve=document.getElementById("single-sell-btn"))==null||ve.addEventListener("click",async()=>{var D;const T=parseInt((D=document.getElementById("single-sell-price"))==null?void 0:D.value);if(!T||T<1){a("Prix invalide","error");return}const H=await Z(T);if(!H.ok){a(`Prix hors grille : entre ${H.min.toLocaleString("fr")} et ${H.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:V}=await h.from("cards").update({is_for_sale:!0,sale_price:T}).eq("id",t.id);if(V){a(V.message,"error");return}const{error:Y}=await h.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:T,status:"active"});Y&&console.warn("[Market] insert listing:",Y.message),a(`Carte mise en vente à ${T.toLocaleString("fr")} cr. !`,"success"),l(),s("collection")}),(be=document.getElementById("single-direct-sell-btn"))==null||be.addEventListener("click",async()=>{const T=_??b;if(!confirm(`Vendre cette carte immédiatement pour ${T.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;await h.from("market_listings").delete().eq("card_id",t.id),await h.from("transfer_history").delete().eq("card_id",t.id);const{error:H}=await h.from("cards").delete().eq("id",t.id);if(H){a(H.message,"error");return}await h.from("users").update({credits:(r.profile.credits||0)+T}).eq("id",r.profile.id),await p(),a(`+${T.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),l(),s("collection")}),(ke=document.getElementById("market-direct-sell-btn"))==null||ke.addEventListener("click",async()=>{const T=[...K];if(!T.length){a("Sélectionne au moins un exemplaire","warning");return}const V=(_??b)*T.length;if(!confirm(`Vendre ${T.length} carte${T.length>1?"s":""} immédiatement pour ${V.toLocaleString("fr")} crédits au total ? Cette action est irréversible.`))return;await h.from("market_listings").delete().in("card_id",T),await h.from("transfer_history").delete().in("card_id",T);const{error:Y}=await h.from("cards").delete().in("id",T);if(Y){a(Y.message,"error");return}await h.from("users").update({credits:(r.profile.credits||0)+V}).eq("id",r.profile.id),await p(),a(`+${V.toLocaleString("fr")} crédits ! ${T.length} carte${T.length>1?"s":""} vendue${T.length>1?"s":""}.`,"success"),l(),s("collection")}),(B=document.getElementById("cancel-sell-btn"))==null||B.addEventListener("click",async()=>{await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await h.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),a("Annonce retirée","success"),l(),s("collection")})}const Mr={GK:"note_g",DEF:"note_d",MIL:"note_m",ATT:"note_a"};function Ot(t,e){const i=t==null?void 0:t.player;if(!i)return 0;const o=t.evolution_bonus||0;return(Number(i[Mr[e]])||0)+(e===i.job||e===i.job2?o:0)}function wi(t){return t.replace(/[0-9]/g,"")}function yn(t,e){if(!(t!=null&&t.player)||!e)return 0;const i=t.player,o=e.club_id&&String(i.club_id)===String(e.club_id),n=e.country_code&&String(i.country_code)===String(e.country_code);return o||n?10:0}function Ni(t,e,i){let o=0;for(const[r,a]of Object.entries(t))a&&(o+=Ot(a,wi(r)),o+=yn(a,i));const n=Mi(e)||gi[e]||[];for(const[r,a]of n){const d=t[r],l=t[a];if(!d||!l)continue;const s=jt(d.player,l.player);s==="#00ff88"?o+=10:s==="#FFD700"&&(o+=5)}return o}function Cr(t,e,i){const o={},n=new Set,r=[...t].sort((a,d)=>{const l={GK:0,DEF:1,ATT:2,MIL:3};return l[wi(a)]-l[wi(d)]});for(const a of r){const d=wi(a);let l=null,s=-1;for(const p of e){if(n.has(p.id))continue;const c=Ot(p,d)+yn(p,i);c>s&&(s=c,l=p)}l&&(o[a]=l,n.add(l.id))}return{assign:o,used:n}}function jr(t,e,i,o,n,r,a=6){let d=Ni(t,n,r);const l=o.filter(s=>!e.has(s.id));for(let s=0;s<a;s++){let p=!1;for(let c=0;c<i.length;c++)for(let g=c+1;g<i.length;g++){const y=i[c],m=i[g],u=t[y],v=t[m];if(!u||!v)continue;t[y]=v,t[m]=u;const w=Ni(t,n,r);w>d?(d=w,p=!0):(t[y]=u,t[m]=v)}for(const c of i){const g=t[c];for(let y=0;y<l.length;y++){const m=l[y];t[c]=m;const u=Ni(t,n,r);if(u>d){d=u,p=!0,l[y]=g,e.delete(g==null?void 0:g.id),e.add(m.id);break}else t[c]=g}}if(!p)break}return d}function qr({playerCards:t,availableFormations:e,stadiumCards:i,stadDefMap:o}){const n=(t||[]).filter(d=>d.player);if(n.length<11)return null;const r=[{id:null,def:null}];(i||[]).forEach(d=>{const l=o==null?void 0:o[d.stadium_id];l&&r.push({id:d.id,def:l})});let a=null;for(const d of e||[]){const l=ct[d];if(!l)continue;const s=Object.keys(l);if(s.length===11)for(const p of r){const{assign:c,used:g}=Cr(s,n,p.def);if(Object.keys(c).length!==11)continue;const y=jr(c,g,s,n,d,p.def);if(!a||y>a.score){const u=n.filter(w=>!Object.values(c).some(b=>b.id===w.id)).map(w=>({c:w,v:Math.max(Ot(w,"GK"),Ot(w,"DEF"),Ot(w,"MIL"),Ot(w,"ATT"))})).sort((w,b)=>b.v-w.v).slice(0,5).map(w=>w.c.id),v={};Object.entries(c).forEach(([w,b])=>{v[w]=b.id}),a={formation:d,stadiumCardId:p.id,slots:v,subs:u,score:y}}}}return a}function Bo(t,e=""){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:360px">
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
    </div>`,document.body.appendChild(o);const n=r=>{o.remove(),i(r)};o.querySelector("#cm-ok").addEventListener("click",()=>n(!0)),o.querySelector("#cm-cancel").addEventListener("click",()=>n(!1)),o.addEventListener("click",r=>{r.target===o&&n(!1)})})}const Li={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Yi(t,e){const{state:i,navigate:o,toast:n}=e;Wt(o,i.profile,"decks","/icons/",n),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await h.from("decks").select("id,name,formation,stadium_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1}),a=[...new Set((r||[]).map(l=>l.stadium_card_id).filter(Boolean))];let d={};if(a.length){const{data:l}=await h.from("cards").select("id, stadium_id, stadium_definitions(image_url, country_code, club:clubs(logo_url))").in("id",a);(l||[]).forEach(s=>{var g;const p=s.stadium_definitions,c=((g=p==null?void 0:p.club)==null?void 0:g.logo_url)||(p!=null&&p.image_url?`/icons/${p.image_url}`:null)||(p!=null&&p.country_code?`https://flagsapi.com/${p.country_code}/flat/64.png`:null);d[s.id]=c})}t.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const l=await Bo("Nom du deck",`Deck ${((r==null?void 0:r.length)||0)+1}`);if(!l)return;const{data:s,error:p}=await h.from("decks").insert({owner_id:i.profile.id,name:l}).select().single();if(p){n(p.message,"error");return}n("Deck créé !","success"),Do(s.id,t,e)}),t.querySelectorAll("[data-open-deck]").forEach(l=>{l.addEventListener("click",()=>Do(l.dataset.openDeck,t,e))}),t.querySelectorAll("[data-rename]").forEach(l=>{l.addEventListener("click",async()=>{const s=await Bo("Nouveau nom",l.dataset.name);if(!s||s===l.dataset.name)return;const{error:p}=await h.from("decks").update({name:s}).eq("id",l.dataset.rename);if(p){n(p.message,"error");return}n("Deck renommé !","success"),Yi(t,e)})}),t.querySelectorAll("[data-delete]").forEach(l=>{l.addEventListener("click",async()=>{if(!await Br(`Supprimer le deck "${l.dataset.name}" ? Cette action est irréversible.`,!0))return;await h.from("deck_cards").delete().eq("deck_id",l.dataset.delete);const{error:s}=await h.from("decks").delete().eq("id",l.dataset.delete);if(s){n(s.message,"error");return}n("Deck supprimé.","success"),Yi(t,e)})})}async function Do(t,e,i){const{state:o,toast:n}=i;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await h.from("decks").select("*").eq("id",t).single(),{data:a}=await h.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:d}=await h.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id).eq("card_type","stadium"),l=(a||[]).filter(b=>b.card_type==="player"&&b.player),s=(a||[]).filter(b=>b.card_type==="formation"),p=(d||[]).filter(b=>b.card_type==="stadium"),c=[...new Set(p.map(b=>b.stadium_id).filter(Boolean))];let g={};if(p.forEach(b=>{b.stadium_def&&b.stadium_id&&(g[b.stadium_id]=b.stadium_def)}),c.length&&Object.keys(g).length<c.length){const{data:b}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",c);(b||[]).forEach(_=>{g[_.id]=_})}const y=s.map(b=>b.formation).filter(Boolean),{data:m}=await h.from("deck_cards").select("card_id, position, is_starter, slot_order, wanted_player_id").eq("deck_id",t);let u=r.formation||"4-4-2";y.length>0&&!y.includes(u)&&(u=y[0]);const v={deckId:t,name:r.name,formation:u,formationCardId:r.formation_card_id,stadiumCardId:r.stadium_card_id||null,slots:{},wanted:{},subs:[],playerCards:l,formationCards:s,stadiumCards:p,stadDefMap:g,availableFormations:y,_playersCache:{}};(m||[]).forEach(b=>{if(b.wanted_player_id){b.is_starter&&(v.wanted[b.position]=b.wanted_player_id);return}b.is_starter?v.slots[b.position]=b.card_id:v.subs.includes(b.card_id)||v.subs.push(b.card_id)});const w=[...new Set(Object.values(v.wanted))];if(w.length){const{data:b}=await h.from("players").select("id, firstname, surname_real, country_code, club_id, job, job2, note_g, note_d, note_m, note_a, rarity, face, clubs(encoded_name, logo_url)").in("id",w);(b||[]).forEach(_=>{v._playersCache[_.id]=_})}nt(e,v,i,!0)}function nt(t,e,i,o=!1){var v,w;const{navigate:n}=i;o||Nr(e,i),Li[e.formation];const r=Fo(e.formation),a=r.filter(b=>e.slots[b]||e.wanted[b]).length,d=r.filter(b=>e.wanted[b]).length,l=e.availableFormations.length>0?e.availableFormations:Object.keys(Li),s=(v=e.stadiumCards)==null?void 0:v.find(b=>b.id===e.stadiumCardId),p=s&&((w=e.stadDefMap)==null?void 0:w[s.stadium_id])||null,c=e.subs.map(b=>e.playerCards.find(_=>_.id===b)).filter(Boolean);c.length!==e.subs.length&&(e.subs=c.map(b=>b.id)),[...Object.values(e.slots),...e.subs],t.innerHTML=`
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
            ${c.map(b=>{const _={...b.player,_evolution_bonus:b.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:24px">
                ${qe({..._,_evolution_bonus:_._evolution_bonus||0},{width:90,showStad:!0,stadDef:p})}
                <button data-remove-sub="${b.id}"
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
              ${di(e.formation,ct[e.formation],{width:100})}
            </div>
          </div>
          <!-- Stade -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">🏟️ Stade</div>
            <div id="add-stad-btn-pc" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${s?(()=>{var I;const b=e.stadDefMap[s.stadium_id],_=((I=b==null?void 0:b.club)==null?void 0:I.logo_url)||(b==null?void 0:b.image_url)||(b!=null&&b.country_code?`https://flagsapi.com/${b.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Kt((b==null?void 0:b.name)||"Stade",_,"+10 ⭐",{width:100})})():`<div style="width:100px;height:171px;border:2px dashed rgba(79,195,247,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
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
              ${c.map(b=>{const _={...b.player,_evolution_bonus:b.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:20px">
                  ${qe({..._,_evolution_bonus:_._evolution_bonus||0},{width:44,showStad:!0,stadDef:p})}
                  <button data-remove-sub="${b.id}"
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
              ${s?(()=>{var I;const b=e.stadDefMap[s.stadium_id],_=((I=b==null?void 0:b.club)==null?void 0:I.logo_url)||(b==null?void 0:b.image_url)||(b!=null&&b.country_code?`https://flagsapi.com/${b.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Kt((b==null?void 0:b.name)||"Stade",_,"+10⭐",{width:44})})():`<div style="width:44px;height:57px;border:2px dashed rgba(79,195,247,0.5);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
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
  </div>`;const g=window.innerWidth>=900,y=t.querySelector(".deck-pc-layout"),m=t.querySelector(".deck-mobile-layout");y&&(y.style.display=g?"block":"none"),m&&(m.style.display=g?"none":"block"),t.querySelectorAll("#save-deck").forEach(b=>{b.closest(".page-body").style.display=g?"none":"block"}),Dr(t,e,r,i),t.querySelectorAll("#builder-back").forEach(b=>b.addEventListener("click",()=>n("decks")));const u=()=>{const{openModal:b,closeModal:_}=i,f=`<div style="display:flex;flex-wrap:wrap;gap:12px;padding:8px;justify-content:center">
      ${[...new Set(l)].map(P=>{const j=P===e.formation;return`<div data-forma="${P}" style="cursor:pointer;border-radius:10px;${j?"box-shadow:0 0 0 3px #1A6B3C":""}">
          ${di(P,ct[P],{width:90})}
        </div>`}).join("")}
    </div>`;b("⚽ Choisir une formation",f),document.querySelectorAll("#modal-body [data-forma]").forEach(P=>{P.addEventListener("click",()=>{e.formation=P.dataset.forma;const j=Fo(e.formation),G={};j.forEach(W=>{e.slots[W]&&(G[W]=e.slots[W])}),e.slots=G,_(),nt(t,e,i)})})};t.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(b=>b.addEventListener("click",u)),t.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(b=>b.addEventListener("click",()=>Fr(e,t,i))),t.querySelectorAll("#save-deck, #save-deck-pc").forEach(b=>b.addEventListener("click",()=>Gr(e,i))),t.querySelectorAll("#auto-deck-pc, #auto-deck-mobile").forEach(b=>{b.addEventListener("click",async()=>{if(e.playerCards.length<11){i.toast(`Il faut au moins 11 joueurs (tu en as ${e.playerCards.length})`,"error");return}const _=b.textContent;b.disabled=!0,b.textContent="⏳ Optimisation…",await new Promise(f=>setTimeout(f,30));const I=qr({playerCards:e.playerCards,availableFormations:e.availableFormations,stadiumCards:e.stadiumCards,stadDefMap:e.stadDefMap});if(b.disabled=!1,b.textContent=_,!I){i.toast("Impossible de composer une équipe complète","error");return}e.formation=I.formation,e.slots=I.slots,e.wanted={},e.subs=I.subs,e.stadiumCardId=I.stadiumCardId,nt(t,e,i),i.toast(`✨ Deck optimisé : ${I.formation} · score ${I.score}`,"success")})}),t.querySelectorAll("[data-remove-sub]").forEach(b=>{b.addEventListener("click",()=>{e.subs=e.subs.filter(_=>_!==b.dataset.removeSub),nt(t,e,i)})}),t.querySelectorAll("#add-sub-btn").forEach(b=>b.addEventListener("click",()=>Rr(e,t,i)))}function Dr(t,e,i,o){var I,f,P,j,G,W;const n=window.innerWidth>=900,r=t.querySelector(n?"#deck-field-pc":"#deck-field-mobile");if(!r)return;const a=(I=e.stadiumCards)==null?void 0:I.find(Q=>Q.id===e.stadiumCardId),d=a&&((f=e.stadDefMap)==null?void 0:f[a.stadium_id])||null,l=ct[e.formation]||{},s=Mi(e.formation)||[],p={},c=new Set;for(const Q of i){const M=e.slots[Q],$=M?e.playerCards.find(x=>x.id===M):null;$!=null&&$.player?p[Q]={...$.player,_evolution_bonus:$.evolution_bonus||0,face:$.player.face||null}:(P=e.wanted)!=null&&P[Q]&&((j=e._playersCache)!=null&&j[e.wanted[Q]])?(p[Q]={...e._playersCache[e.wanted[Q]],_evolution_bonus:0},c.add(Q)):p[Q]=null}const g=window.innerWidth>=900,y=g?window.innerWidth-280:window.innerWidth-20,m=g?Math.min(y,860):y,u=Math.round(g?m*.82:m*.85),v=g?84:44;let w="";for(const[Q,M]of s){const $=l[Q],x=l[M];if(!$||!x)continue;const S=$.x*m,J=Math.round(.03*u+$.y*.85*u),L=x.x*m,K=Math.round(.03*u+x.y*.85*u),ce=p[Q],A=p[M],E=jt(ce,A);E==="#ff3333"||E==="#cc2222"?w+=`<line x1="${S.toFixed(1)}" y1="${J.toFixed(1)}" x2="${L.toFixed(1)}" y2="${K.toFixed(1)}" stroke="${E}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(w+=`<line x1="${S.toFixed(1)}" y1="${J.toFixed(1)}" x2="${L.toFixed(1)}" y2="${K.toFixed(1)}" stroke="${E}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,w+=`<line x1="${S.toFixed(1)}" y1="${J.toFixed(1)}" x2="${L.toFixed(1)}" y2="${K.toFixed(1)}" stroke="${E}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let b="";const _=Math.round(v*657/507);for(const Q of i){const M=l[Q];if(!M)continue;const $=p[Q],x=M.x*m;M.y*u;const S=Math.round(.03*u+M.y*(.85*u)),J=Math.round(x-v/2),L=Math.round(S-_/2);if($){const K=Q.replace(/\d+/,""),ce=c.has(Q),A=!ce&&d&&(d.club_id&&String($.club_id)===String(d.club_id)||d.country_code&&$.country_code===d.country_code),E=qe({...$,_evolution_bonus:$._evolution_bonus||0},{width:v,showStad:!0,stadDef:d,role:K});A&&((G=d.club)!=null&&G.logo_url||d.image_url);const Z="",O=ce?`<button class="wanted-market-btn" data-wanted-pos="${Q}"
          data-player-name="${($.surname_real||"").replace(/"/g,"&quot;")}"
          data-player-club="${(((W=$.clubs)==null?void 0:W.encoded_name)||"").replace(/"/g,"&quot;")}"
          data-player-country="${$.country_code||""}"
          style="position:absolute;left:50%;bottom:${Math.round(_*.03)}px;transform:translateX(-50%);z-index:3;
          white-space:nowrap;background:linear-gradient(135deg,#f6d365,#D4A017);color:#1a1a1a;border:none;
          border-radius:999px;font-size:${Math.max(8,Math.round(v*.09))}px;font-weight:900;
          padding:3px 8px;cursor:pointer">🛒 Mercato</button>`:"";b+=`<div style="position:absolute;left:${J}px;top:${L}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${Q}">
        <div style="position:relative;${ce?"filter:grayscale(1) brightness(.65)":""}">${E}${Z}</div>
        ${O}
      </div>`}else{const K=Q.replace(/\d+/,"");b+=`<div style="position:absolute;left:${J}px;top:${L}px;width:${v}px;height:${_}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${Q}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${K}</span>
      </div>`}}r.innerHTML=`
    <div style="position:relative;width:${m}px;height:${u}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${m} ${u}">${w}</svg>
      ${b}
    </div>`,r.querySelectorAll(".deck-slot-hit").forEach(Q=>{Q.addEventListener("click",()=>Pr(Q.dataset.pos,e,t,o))}),r.querySelectorAll(".wanted-market-btn").forEach(Q=>{Q.addEventListener("click",M=>{M.stopPropagation(),o.navigate("market",{search:Q.dataset.playerName,club:Q.dataset.playerClub,country:Q.dataset.playerCountry})})})}function Fr(t,e,i){var d;const{openModal:o,closeModal:n}=i,r=new Set,a=(t.stadiumCards||[]).filter(l=>{const s=l.stadium_id||l.id;return r.has(s)?!1:(r.add(s),!0)});o("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:90px;text-align:center">
        <div style="width:85px;height:112px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${t.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:26px">🚫</span>
          <span style="font-size:10px;color:#666">Aucun</span>
        </div>
      </div>
      ${a.map(l=>{var y;const s=t.stadDefMap[l.stadium_id],p=((y=s==null?void 0:s.club)==null?void 0:y.logo_url)||(s==null?void 0:s.image_url)||(s!=null&&s.country_code?`https://flagsapi.com/${s.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),c=t.stadiumCardId===l.id,g=Kt((s==null?void 0:s.name)||"Stade",p,"+10⭐",{width:90});return`<div class="stad-choice" data-stad-id="${l.id}" style="cursor:pointer;position:relative;border-radius:8px;${c?"box-shadow:0 0 0 3px #4fc3f7":""}">
          ${g}
        </div>`}).join("")}
    </div>`),(d=document.getElementById("stad-none"))==null||d.addEventListener("click",()=>{t.stadiumCardId=null,n(),nt(e,t,i)}),document.querySelectorAll(".stad-choice").forEach(l=>{l.addEventListener("click",()=>{t.stadiumCardId=l.dataset.stadId,n(),nt(e,t,i)})})}async function Pr(t,e,i,o){var P,j,G,W,Q;const{openModal:n,closeModal:r,navigate:a}=o,d=t.replace(/\d+/,""),l=(P=e.stadiumCards)==null?void 0:P.find(M=>M.id===e.stadiumCardId),s=l&&((j=e.stadDefMap)==null?void 0:j[l.stadium_id])||null,p=e.slots[t],c=p?e.playerCards.find(M=>M.id===p):null;(G=c==null?void 0:c.player)==null||G.id;const g=new Set;Object.entries(e.slots).forEach(([M,$])=>{var S;if(M===t||!$)return;const x=e.playerCards.find(J=>J.id===$);(S=x==null?void 0:x.player)!=null&&S.id&&g.add(x.player.id)}),e.subs.forEach(M=>{var x;const $=e.playerCards.find(S=>S.id===M);(x=$==null?void 0:$.player)!=null&&x.id&&g.add($.player.id)}),Object.entries(e.wanted||{}).forEach(([M,$])=>{M===t||!$||g.add($)});const y=new Set,m=e.playerCards.filter(M=>{const $=M.player;return!($.job===d||$.job2===d)||g.has($.id)||y.has($.id)?!1:(y.add($.id),!0)}),v=(Mi(e.formation)||gi[e.formation]||[]).filter(([M,$])=>M===t||$===t).map(([M,$])=>M===t?$:M).map(M=>{var $;return($=e.playerCards.find(x=>x.id===e.slots[M]))==null?void 0:$.player}).filter(Boolean);function w(M){const $=M.player,x=M.evolution_bonus||0,S=(d==="GK"?$.note_g:d==="DEF"?$.note_d:d==="MIL"?$.note_m:$.note_a)+(d===$.job||d===$.job2?x:0);let J=0;for(const L of v){const K=jt($,L);K==="#00ff88"?J+=10:K==="#FFD700"&&(J+=5)}if(s){const L=s.club_id&&String($.club_id)===String(s.club_id),K=s.country_code&&String($.country_code)===String(s.country_code);(L||K)&&(J+=10)}return{total:S+J,note:S,bonus:J}}const b=new Map;if(m.forEach(M=>b.set(M.id,w(M))),m.sort((M,$)=>{const x=b.get($.id).total-b.get(M.id).total;return x!==0?x:b.get($.id).note-b.get(M.id).note}),!e._allPlayers){const{data:M}=await h.from("players").select("id, firstname, surname_real, country_code, club_id, job, job2, note_g, note_d, note_m, note_a, rarity, face, clubs(encoded_name, logo_url)").eq("is_active",!0);e._allPlayers=M||[],e._playersCache||(e._playersCache={}),e._allPlayers.forEach($=>{e._playersCache[$.id]=$})}const _=new Set(e.playerCards.map(M=>{var $;return($=M.player)==null?void 0:$.id}).filter(Boolean)),I=e._allPlayers.filter(M=>(M.job===d||M.job2===d)&&!g.has(M.id)).map(M=>{const $=(d==="GK"?M.note_g:d==="DEF"?M.note_d:d==="MIL"?M.note_m:M.note_a)||0;let x=0;for(const S of v){const J=jt(M,S);J==="#00ff88"?x+=10:J==="#FFD700"&&(x+=5)}if(s){const S=s.club_id&&String(M.club_id)===String(s.club_id),J=s.country_code&&String(M.country_code)===String(s.country_code);(S||J)&&(x+=10)}return{p:M,total:$+x,note:$,bonus:x,owned:_.has(M.id)}}).sort((M,$)=>$.total-M.total||$.note-M.note).slice(0,10),f=I.length?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+I.map(M=>{const $={...M.p,_evolution_bonus:0},x=M.bonus>0?`<div style="position:absolute;top:2px;left:2px;z-index:6;background:#1A6B3C;color:#fff;font-size:9px;font-weight:900;padding:1px 5px;border-radius:8px">+${M.bonus}</div>`:"",S=M.owned?e.playerCards.find(L=>{var K;return((K=L.player)==null?void 0:K.id)===M.p.id}):null,J=M.owned?"":'title="Ajouter au deck (non possédé, à acheter)"';return`<div style="position:relative">
      ${x}
      <div class="${M.owned?"player-option":"wanted-option"}"
        ${S?`data-card-id="${S.id}"`:`data-wanted-player-id="${M.p.id}"`}
        ${J}
        style="cursor:pointer;${M.owned?"":"filter:grayscale(1) brightness(.6)"}">
        ${qe($,{width:100,showStad:!0,stadDef:s,role:d})}
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
      <div class="sel-pane" data-pane="top" style="display:none">${f}</div>
      <div class="sel-pane" data-pane="mine">
      ${m.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+m.map(M=>{const $={...M.player,_evolution_bonus:M.evolution_bonus||0},x=b.get(M.id),S=x&&x.bonus>0?`<div style="position:absolute;top:2px;left:2px;z-index:5;background:#1A6B3C;color:#fff;font-size:9px;font-weight:900;padding:1px 5px;border-radius:8px" title="Bonus liens + stade à ce poste">+${x.bonus}</div>`:"";return`<div class="player-option" data-card-id="${M.id}" style="cursor:pointer;position:relative">
          ${S}
          ${qe($,{width:100,showStad:!0,stadDef:s,role:d})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
      </div>
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(W=document.getElementById("close-selector"))==null||W.addEventListener("click",r),document.querySelectorAll(".sel-tab").forEach(M=>{M.addEventListener("click",()=>{document.querySelectorAll(".sel-tab").forEach($=>{const x=$===M;$.style.background=x?"var(--green)":"#e8e8e8",$.style.borderColor=x?"var(--green)":"#ccc",$.style.color=x?"#fff":"#555"}),document.querySelectorAll(".sel-pane").forEach($=>{$.style.display=$.dataset.pane===M.dataset.tab?"block":"none"})})}),document.querySelectorAll(".wanted-option").forEach(M=>{M.addEventListener("click",()=>{var x;e.wanted[t]=M.dataset.wantedPlayerId,delete e.slots[t];const $=(x=e._allPlayers)==null?void 0:x.find(S=>S.id===M.dataset.wantedPlayerId);$&&(e._playersCache[$.id]=$),r(),nt(i,e,o)})}),(Q=document.getElementById("remove-player"))==null||Q.addEventListener("click",()=>{delete e.slots[t],delete e.wanted[t],r(),nt(i,e,o)}),document.querySelectorAll(".player-option").forEach(M=>{M.addEventListener("click",()=>{e.slots[t]=M.dataset.cardId,delete e.wanted[t],r(),nt(i,e,o)})})}function Rr(t,e,i){var p,c,g;const{openModal:o,closeModal:n}=i,r=(p=t.stadiumCards)==null?void 0:p.find(y=>y.id===t.stadiumCardId),a=r&&((c=t.stadDefMap)==null?void 0:c[r.stadium_id])||null,d=new Set;Object.keys(t.slots).forEach(y=>{var v;const m=t.slots[y];if(!m)return;const u=t.playerCards.find(w=>w.id===m);(v=u==null?void 0:u.player)!=null&&v.id&&d.add(u.player.id)}),t.subs.forEach(y=>{var u;const m=t.playerCards.find(v=>v.id===y);(u=m==null?void 0:m.player)!=null&&u.id&&d.add(m.player.id)});const l=new Set,s=t.playerCards.filter(y=>{var m,u,v;return d.has((m=y.player)==null?void 0:m.id)||l.has((u=y.player)==null?void 0:u.id)?!1:(l.add((v=y.player)==null?void 0:v.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+s.map(y=>{const m={...y.player,_evolution_bonus:y.evolution_bonus||0};return`<div class="player-option" data-card-id="${y.id}" style="cursor:pointer">
          ${qe(m,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(g=document.getElementById("close-sub-selector"))==null||g.addEventListener("click",n),document.querySelectorAll(".player-option").forEach(y=>{y.addEventListener("click",()=>{t.subs.push(y.dataset.cardId),n(),nt(e,t,i)})})}async function xn(t){const e=t.formationCards.find(n=>n.formation===t.formation),i=(e==null?void 0:e.id)||t.formationCardId;await h.from("decks").update({formation:t.formation,formation_card_id:i||null,stadium_card_id:t.stadiumCardId||null}).eq("id",t.deckId),await h.from("deck_cards").delete().eq("deck_id",t.deckId);const o=[];return Object.entries(t.slots).forEach(([n,r],a)=>{o.push({deck_id:t.deckId,card_id:r,position:n,is_starter:!0,slot_order:a})}),Object.entries(t.wanted||{}).forEach(([n,r],a)=>{o.push({deck_id:t.deckId,card_id:null,wanted_player_id:r,position:n,is_starter:!0,slot_order:1e3+a})}),t.subs.forEach((n,r)=>{o.push({deck_id:t.deckId,card_id:n,position:`SUB${r+1}`,is_starter:!1,slot_order:100+r})}),o.length>0?await h.from("deck_cards").insert(o):{error:null}}let Wi=null;function Nr(t,e){const{toast:i}=e;clearTimeout(Wi),document.querySelectorAll(".autosave-indicator").forEach(n=>{n.textContent="⏳ Enregistrement...",n.style.opacity="1",n.style.color=""}),Wi=setTimeout(async()=>{const{error:n}=await xn(t),r=document.querySelectorAll(".autosave-indicator");if(n){r.forEach(a=>{a.textContent="⚠️ Erreur d'enregistrement",a.style.color="#ff6b6b"}),i(n.message,"error");return}r.forEach(a=>{a.textContent="✅ Enregistré",a.style.color="",setTimeout(()=>{a.style.opacity="0"},1500)})},600)}async function Gr(t,e){const{toast:i,navigate:o}=e;clearTimeout(Wi);const{error:n}=await xn(t);if(n){i(n.message,"error");return}i("Deck enregistré ✅","success"),o("decks")}function Fo(t){const e=Li[t]||Li["4-4-2"],i=["GK1"];for(let o=1;o<=e.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=e.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=e.ATT;o++)i.push(`ATT${o}`);return i}function Tt(){return Math.min(window.innerWidth-40,860)}function Ut(){return Math.round(Tt()*1.1)}function hn(t){var n,r;if(!t)return null;const e=t._line||t.job||"MIL",i=e==="GK"?t.note_g||0:e==="DEF"?t.note_d||0:e==="MIL"?t.note_m||0:t.note_a||0,o=t.stadiumBonus?10:0;return{name:t.name,firstname:t.firstname||"",note:i+(t.boost||0)+o,note_g:t.note_g||0,note_d:t.note_d||0,note_m:t.note_m||0,note_a:t.note_a||0,_evolution_bonus:0,stadiumBonus:t.stadiumBonus||!1,boost:t.boost||0,job:t.job,job2:t.job2||null,_line:t._line||t.job,_col:t._col,country_code:t.country_code,club_id:t.club_id,rarity:t.rarity,clubName:t.clubName||((n=t.clubs)==null?void 0:n.encoded_name)||null,clubLogo:t.clubLogo||((r=t.clubs)==null?void 0:r.logo_url)||null,face:t.face||null,portrait:Ct(t)}}function Or(t,e,i,o="Adversaire"){en("/sounds/match-opening.mp3",.3);const n=Tt(),r=Ut();return`
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
    </div>`}async function Hr(t,e){const{state:i}=e,o=i.params||{},n=o.matchMode||"vs_ai_easy",r=n==="solo",a=n==="ranked_ai",d=o.soloLevel||1,l=n.replace("vs_ai_",""),s=n;let p=null;if(r){const{data:m}=await h.from("solo_levels").select("*").eq("level_number",d).maybeSingle();p=m||{level_number:d,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500}}const c=o.rankedData||null,g=o.presetSetup||null;async function y({deckId:m,formation:u,starters:v,subsRaw:w,gcCardsEnriched:b,gcDefs:_,stadiumDef:I}){try{let f=Ui(v,u);I&&(f=$i(f,I),Ei(w,I));let P=null;if(a){const M=Kr(f)+Vr(f)*10,{jaune:$,vert:x}=Yr(f,u),S=[.9,1,1.2],J=S[Math.floor(Math.random()*S.length)],L=Math.max(11,Math.round(M*J));P={target_note_avg:Math.max(1,Math.round(L/11)),target_total_note:L,nb_liens_jaune:$,nb_liens_vert:x,nb_joueurs_stade:I?3:0,_variance:J}}const j=p&&{...p,target_total_note:Math.max(11,Math.round((Number(p.target_note_avg)||10)*11))},G=r?await Ro(u,j):a?await Ro(u,P):await Ur(u,l),W=G.lines||G,Q=async M=>{try{const $=s==="vs_ai_club"||s==="solo"||s==="ranked_ai"?"club":s,{data:x,error:S}=await h.from("matches").insert({home_id:i.profile.id,away_id:null,mode:$,home_deck_id:m,status:"in_progress"}).select().single();if(S){console.error("[MatchIA] Erreur création match:",S),Fi(t,"⚠️","Impossible de créer le match ("+S.message+").","Retour",()=>e.navigate("home"));return}const J=G.stadiumDef||null;J&&W&&($i(W,J),Ei(G.subs||[],J));const L={gcDefs:_||[],matchId:x==null?void 0:x.id,mode:s,difficulty:l,formation:u,isSolo:r,soloLevel:d,soloLevelConfig:p,isRankedAI:a,rankedAIData:c,homeTeam:f,aiTeam:W,homeSubs:w,subsUsed:0,maxSubs:Math.min(w.length,3),aiSubs:G.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((G.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:G.gcCards||[],aiUsedGc:[],aiGcTarget:G.gcTarget||2,aiStadiumDef:J,homeScore:0,aiScore:0,gcCards:M,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Wr(t,L,e)}catch($){console.error("[MatchIA] Exception launchMatch:",$),Fi(t,"⚠️","Erreur au lancement du match : "+$.message,"Retour",()=>e.navigate("home"))}};if(a&&g){Q(g.gcCardsEnriched||[]);return}if(!b.length){Q([]);return}ji(t,b,Q)}catch(f){console.error("[MatchIA] Exception setup:",f),Fi(t,"⚠️","Erreur de préparation du match : "+f.message,"Retour",()=>e.navigate("home"))}}g?await y(g):await Ci(t,e,n,y)}async function Ur(t,e){var v;const{data:i}=await h.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:kn(t),subs:[],gcCards:[],stadiumDef:null};const o=Vt[t]||Vt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]},r=new Set;function a(w,b,_){var I,f;return r.add(w.id),{cardId:"ai-"+w.id+"-"+_,id:w.id,firstname:w.firstname,name:w.surname_real,country_code:w.country_code,club_id:w.club_id,job:w.job,job2:w.job2,note_g:Number(w.note_g)||0,note_d:Number(w.note_d)||0,note_m:Number(w.note_m)||0,note_a:Number(w.note_a)||0,rarity:w.rarity,skin:w.skin,hair:w.hair,hair_length:w.hair_length,face:w.face,clubName:((I=w.clubs)==null?void 0:I.encoded_name)||null,clubLogo:((f=w.clubs)==null?void 0:f.logo_url)||null,boost:0,used:!1,_line:b}}for(const w of["GK","DEF","MIL","ATT"]){const b=i.filter(j=>j.job===w&&!r.has(j.id)),_=i.filter(j=>j.job!==w&&!r.has(j.id)),I=[...b,..._],f=[];for(let j=0;j<o[w];j++){const G=I[j];G&&f.push(a(G,w,j))}const P=Lt(f.length);f.forEach((j,G)=>{j._col=P[G]}),n[w]=f}const l=i.filter(w=>!r.has(w.id)).slice(0,5).map((w,b)=>a(w,w.job,100+b)),{data:s}=await h.from("gc_definitions").select("*").eq("is_active",!0),c=[...s||[]].sort(()=>Math.random()-.5).slice(0,3).map((w,b)=>({id:"ai-gc-"+b,gc_type:w.name,name:w.name,icon:"⚡",effect_type:w.effect_type,effect_params:w.effect_params||{}})),g=Object.values(n).flat(),y={};g.forEach(w=>{w.club_id&&(y[w.club_id]=(y[w.club_id]||0)+1)});const m=(v=Object.entries(y).sort((w,b)=>b[1]-w[1])[0])==null?void 0:v[0];let u=null;if(m){const{data:w}=await h.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",m).single();w&&(u={club_id:w.id,country_code:null,name:w.encoded_name+" Stadium",club:{encoded_name:w.encoded_name,logo_url:w.logo_url}})}return{lines:n,subs:l,gcCards:c,stadiumDef:u}}function Kr(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{const n=o._line||i,r=Number(n==="GK"?o.note_g:n==="DEF"?o.note_d:n==="MIL"?o.note_m:o.note_a)||0;e+=r+(o.boost||0)});return e}function Vr(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{o!=null&&o.stadiumBonus&&e++});return e}function Yr(t,e){const i={};for(const a of["GK","DEF","MIL","ATT"])(t[a]||[]).forEach((d,l)=>{i[`${a}${l+1}`]=d});const o=Mi(e)||gi[e]||[];let n=0,r=0;for(const[a,d]of o){const l=i[a],s=i[d];if(!l||!s)continue;const p=jt(l,s);p==="#00ff88"?r++:p==="#FFD700"&&n++}return{jaune:n,vert:r}}function Po(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function ii(t,e,i){if(i<=0||!t.length)return[];const o=[...t].sort((n,r)=>Math.abs(Po(n)-e)-Math.abs(Po(r)-e));return o.slice(0,Math.min(i,o.length))}async function Ro(t,e){var S,J;const i=Number(e==null?void 0:e.target_note_avg)||10,o=Number(e==null?void 0:e.nb_liens_jaune)||0,n=Number(e==null?void 0:e.nb_liens_vert)||0,r=Number(e==null?void 0:e.nb_joueurs_stade)||0,{data:a}=await h.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url,country_code)").eq("is_active",!0).limit(300);if(!a||a.length<16)return{lines:kn(t),subs:[],gcCards:[],stadiumDef:null};const d={};a.forEach(L=>{L.club_id&&(d[L.club_id]=(d[L.club_id]||0)+1)});const l=((S=Object.entries(d).sort((L,K)=>K[1]-L[1])[0])==null?void 0:S[0])||null,s=l?a.filter(L=>L.club_id===l):[],p=((J=s[0])==null?void 0:J.country_code)||null,c=p?a.filter(L=>L.country_code===p&&L.club_id!==l):[],g=Math.min(s.length,Math.max(2,n+1),16),y=Math.min(c.length,Math.max(0,o),16-g),m=[],u=new Set;ii(s,i,g).forEach(L=>{m.push(L),u.add(L.id)}),ii(c,i,y).forEach(L=>{m.push(L),u.add(L.id)});const v=Math.max(0,16-m.length),w=a.filter(L=>!u.has(L.id));ii(w,i,v).forEach(L=>{m.push(L),u.add(L.id)});const b=Vt[t]||Vt["4-4-2"],_={GK:[],DEF:[],MIL:[],ATT:[]},I=new Set;function f(L,K,ce){var A,E;return I.add(L.id),{cardId:"ai-"+L.id+"-"+ce,id:L.id,firstname:L.firstname,name:L.surname_real,country_code:L.country_code,club_id:L.club_id,job:L.job,job2:L.job2,note_g:Number(L.note_g)||0,note_d:Number(L.note_d)||0,note_m:Number(L.note_m)||0,note_a:Number(L.note_a)||0,rarity:L.rarity,skin:L.skin,hair:L.hair,hair_length:L.hair_length,face:L.face,clubName:((A=L.clubs)==null?void 0:A.encoded_name)||null,clubLogo:((E=L.clubs)==null?void 0:E.logo_url)||null,boost:0,used:!1,_line:K}}for(const L of["GK","DEF","MIL","ATT"]){let K=m.filter(O=>O.job===L&&!I.has(O.id));if(L==="GK"&&!K.length){const O=a.filter(te=>te.job==="GK"&&!I.has(te.id));O.length&&(K=ii(O,i,1))}const ce=m.filter(O=>O.job!==L&&!I.has(O.id)),A=[...K,...ce],E=[];for(let O=0;O<b[L];O++){const te=A[O];te&&E.push(f(te,L,O))}const Z=Lt(E.length);E.forEach((O,te)=>{O._col=Z[te]}),_[L]=E}let P=m.filter(L=>!I.has(L.id));if(P.length<5){const L=a.filter(K=>!I.has(K.id)&&!P.some(ce=>ce.id===K.id));P=P.concat(ii(L,i,5-P.length))}const j=P.slice(0,5).map((L,K)=>f(L,L.job,100+K)),G=Number(e==null?void 0:e.target_total_note)||0;if(G>0){const L={GK:"note_g",DEF:"note_d",MIL:"note_m",ATT:"note_a"},K=[];for(const A of["GK","DEF","MIL","ATT"])(_[A]||[]).forEach(E=>K.push({p:E,key:L[A]}));const ce=K.reduce((A,E)=>A+(Number(E.p[E.key])||0),0);if(ce>0&&K.length){const A=G/ce;K.forEach(O=>{O.p[O.key]=Math.max(1,Math.round((Number(O.p[O.key])||0)*A))});let E=G-K.reduce((O,te)=>O+te.p[te.key],0),Z=0;for(;E!==0&&Z++<500;){const O=K[Math.floor(Math.random()*K.length)];E>0?(O.p[O.key]++,E--):O.p[O.key]>1&&(O.p[O.key]--,E++)}j.forEach(O=>{const te=L[O.job]||"note_m";O[te]=Math.max(1,Math.round((Number(O[te])||0)*A))})}}const{data:W}=await h.from("gc_definitions").select("*").eq("is_active",!0),M=[...W||[]].sort(()=>Math.random()-.5).slice(0,3).map((L,K)=>({id:"ai-gc-"+K,gc_type:L.name,name:L.name,icon:"⚡",effect_type:L.effect_type,effect_params:L.effect_params||{}}));let $=null;if(r>0&&l){const{data:L}=await h.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",l).single();L&&($={club_id:L.id,country_code:null,name:L.encoded_name+" Stadium",club:{encoded_name:L.encoded_name,logo_url:L.logo_url}})}const x=1+Math.floor(Math.random()*3);return{lines:_,subs:j,gcCards:M,stadiumDef:$,gcTarget:x}}function kn(t){const e=Vt[t]||Vt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let n=0;for(const r of["GK","DEF","MIL","ATT"]){const a=[];for(let l=0;l<e[r];l++){const s=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+n,id:"fake-"+n,firstname:"IA",name:o[n%o.length],country_code:"XX",club_id:null,job:r,job2:null,note_g:r==="GK"?s:2,note_d:r==="DEF"?s:2,note_m:r==="MIL"?s:2,note_a:r==="ATT"?s:2,rarity:"normal",boost:0,used:!1,_line:r}),n++}const d=Lt(a.length);a.forEach((l,s)=>{l._col=d[s]}),i[r]=a}return i}function Wr(t,e,i){var n;en("/sounds/match-opening.mp3",.3);const o=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
  </div>`;const p=()=>{const m=(u,v)=>t.querySelectorAll(u).forEach((w,b)=>{setTimeout(()=>{w.style.opacity="1",w.style.transform="translateY(0) scale(1)"},v+b*90)});m(".duel-card-home",150),m(".duel-card-ai",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((u,v)=>{setTimeout(()=>{u.style.opacity="1"},v*70)}),900),setTimeout(()=>{const u=t.querySelector("#vs-label");u&&(u.style.opacity="1",u.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(v=>v.style.opacity="1")},1250),setTimeout(()=>{c("score-home",d,800),c("score-ai",l,800)},1500)};function c(m,u,v){const w=document.getElementById(m);if(!w)return;const b=performance.now(),_=I=>{const f=Math.min(1,(I-b)/v);w.textContent=Math.round(u*(1-Math.pow(1-f,3))),f<1?requestAnimationFrame(_):w.textContent=u};requestAnimationFrame(_)}requestAnimationFrame(p),e.attacker=s?"home":"ai";const g=s?Jo():null;s&&(e.boostCard={value:g}),e.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(m=>Ve(m)),aiPlayers:n.map(m=>Ve(m)),homeTotal:d,aiTotal:l,text:`Duel milieu : ${e.clubName} ${d} – ${l} IA → ${s?e.clubName+" attaque":"IA attaque"}`});const y=()=>{e.phase=e.attacker==="home"?"attack":"ai-attack",Ae(t,e,i),e.attacker==="ai"&&setTimeout(()=>bo(t,e,i),800)};setTimeout(()=>{const m=document.getElementById("score-home"),u=document.getElementById("score-ai"),v=document.getElementById(s?"duel-row-home":"duel-row-ai"),w=document.getElementById(s?"duel-row-ai":"duel-row-home"),b=s?m:u,_=s?u:m;b&&(b.style.fontSize="80px",b.style.color=s?"#FFD700":"#ff6b6b",b.style.animation="duelPulse .5s ease"+(s?", duelGlow 1.5s ease infinite .5s":"")),_&&(_.style.opacity="0.25"),setTimeout(()=>{v&&(v.style.transformOrigin="center",v.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",v.style.zIndex="5"),setTimeout(()=>{var f;const I=document.getElementById("duel-shock");if(I){const P=(f=w||v)==null?void 0:f.getBoundingClientRect(),j=t.querySelector(".match-screen").getBoundingClientRect();P&&(I.style.top=P.top-j.top+P.height/2+"px"),I.style.animation="shockwave .5s ease-out forwards"}w&&(w.style.transformOrigin="center",w.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var f;const I=document.getElementById("duel-finale");I&&(I.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${s?`⚽ ${e.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${s?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${g}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,I.style.transition="opacity .45s ease",I.style.opacity="1",I.style.pointerEvents="auto",(f=document.getElementById("start-match-btn"))==null||f.addEventListener("click",y))},600)},700)},2800)}function Ae(t,e,i){var Q,M,$,x,S,J,L,K,ce;const o=e.selected.map(A=>A.cardId),n=e.usedSubIds||[],r=e.homeSubs.filter(A=>!n.includes(A.cardId)),d=Object.values(e.homeTeam).flat().filter(A=>A.used).length>0&&r.length>0&&e.subsUsed<e.maxSubs,l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(A=>!A.used),s=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(A=>!A.used),p=Yt(e.aiTeam),c=l.length===0&&s.length===0&&!p,g=(e.homeTeam.DEF||[]).filter(A=>!A.used),y=(e.homeTeam.GK||[]).filter(A=>!A.used);let m=[];e.phase==="attack"&&l.length===0&&(p?(m=g.map(A=>A.cardId),g.length===0&&(m=m.concat(y.map(A=>A.cardId)))):c&&(m=[...g,...y].map(A=>A.cardId))),e.log[e.log.length-1];const u=e.phase==="ai-attack"||e.phase==="ai-defense",v=e.phase==="attack",w=e.phase==="defense",b=e.phase==="finished",I=(e.homeSubs||[]).filter(A=>!(e.usedSubIds||[]).includes(A.cardId)).length>0&&e.subsUsed<e.maxSubs,f=v&&l.length===0&&m.length===0&&!I,P=e.gcCards.filter(A=>!e.usedGc.includes(A.id)),j=e.boostCard&&!e.boostUsed;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.innerHTML=`
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
      ${(()=>{if(e.phase==="defense"&&e.pendingAttack){const E=e.pendingAttack;let Z="";if(e.selected.length>0){const O=e.selected.map(de=>({...(e.homeTeam[de._role]||[]).find(fe=>fe.cardId===de.cardId)||de,_line:de._role})),te=pi(O,e.modifiers.home,e.formation);Z=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${e.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${Qe(O.map(de=>({...de,used:!1})),"#3a7bd5",te.total,"defense",e.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${Qe((E.players||[]).map(O=>({...O,used:!1})),"#ff6b6b",E.total,"attack",e.formation)}</div>
            ${Z}
          </div>`}if(e.phase==="ai-defense"&&e.pendingAttack){const E=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${Qe((E.players||[]).map(Z=>({...Z,used:!1})),"#00ff88",E.total,"attack",e.formation)}</div>
          </div>`}if(e.phase==="attack"&&e.selected.length>0){const E=e.selected.map(O=>{const te=(e.homeTeam[O._role]||[]).find(xe=>xe.cardId===O.cardId)||O,de=["GK","DEF"].includes(O._role);return{...te,_line:O._role,...de?{note_a:Math.max(1,Number(te.note_a)||0)}:{}}}),Z=ui(E,e.modifiers.home,e.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${e.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(E.map(O=>({...O,used:!1})),"#FFD700",Z.total,"attack",e.formation)}</div>
          </div>`}const A=e.log[e.log.length-1];return A?'<div style="padding:2px 4px">'+vn(A)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${e.log.length})
    </button>

    ${(()=>{const A=window.innerWidth>=700,E=(ve,be,ke)=>{var D,ee;const B=(e.gcDefs||[]).find(ue=>ue.name===ve.gc_type),T=(B==null?void 0:B.name)||ve.gc_type,H=(B==null?void 0:B.effect)||((D=Oe[ve.gc_type])==null?void 0:D.desc)||"",V=B!=null&&B.image_url?`/icons/${B.image_url}`:null,Y=((ee=Oe[ve.gc_type])==null?void 0:ee.icon)||"⚡";return`<div class="gc-mini" data-gc-id="${ve.id}" data-gc-type="${ve.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${it(T,V,Y,H,{width:be})}
        </div>`},Z=(ve,be)=>{var ke;return`<div id="boost-card"
          style="box-sizing:border-box;width:${ve}px;height:${be}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(be*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(be*.2)}px">⚡</div>
            <div style="font-size:${Math.round(be*.09)}px;color:#000;font-weight:900">+${(ke=e.boostCard)==null?void 0:ke.value}</div>
          </div>`},O=(ve,be)=>be?Z(95,162):E(ve,95),te=(ve,be)=>be?Z(53,90):E(ve,53),de=A?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",xe=b?`<button id="btn-results" style="${de};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:u?`<div style="${de};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:f?`<button id="btn-pass" style="${de};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:v?`<button id="btn-action" style="${de};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${e.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:w?`<button id="btn-action" style="${de};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${e.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${de};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,fe=v||w?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${e.selected.length}/3 sélectionné(s)</div>`:"",Me=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${A?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${r.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':r.map(ve=>`<div class="sub-btn-col" data-sub-id="${ve.cardId}" style="cursor:pointer;flex-shrink:0">${$t(ve,76,100)}</div>`).join("")}
      </div>`,Be=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ci(e.homeTeam,e.formation,e.phase,o,A?1300:Tt(),A?600:Ut(),m)}
        </div>
      </div>`;return A?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Me}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Be}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${xe}${fe}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${P.map(ve=>O(ve,!1)).join("")}
            ${j?O(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ci(e.homeTeam,e.formation,e.phase,o,A?1300:Tt(),A?600:Ut(),m)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${P.map(ve=>te(ve,!1)).join("")}
            ${j?te(null,!0):""}
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
          <div>${xe}${fe}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${e.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...e.log].reverse().map(A=>{var E,Z,O;if(A.type==="duel"){const te=A.isGoal,de=A.homeScored?"#FFD700":te?"#ff6b6b":"rgba(255,255,255,0.3)",xe=A.homeScored?"⚽ BUT !":te?"⚽ BUT IA !":(E=A.homePlayers)!=null&&E.length?"⚔️ Attaque":"🛡️ Défense",fe=(A.homeTotal??0)>=(A.aiTotal??0);return`<div style="padding:8px;border-radius:8px;background:${te?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${de};margin-bottom:4px">
                <div style="font-size:9px;color:${de};letter-spacing:1px;margin-bottom:6px;font-weight:700;text-transform:uppercase;text-align:center">${xe}</div>
                <div style="display:flex;align-items:center;justify-content:center;gap:10px">
                  ${(Z=A.aiPlayers)!=null&&Z.length?`<div style="flex:1;display:flex;justify-content:flex-end;opacity:0.75">${Qe(A.aiPlayers,"#ff6b6b",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                  <div style="flex-shrink:0;display:flex;align-items:center;gap:6px">
                    <span style="font-size:16px;font-weight:900;color:${fe?"#e03030":"#22c55e"}">${A.aiTotal??"–"}</span>
                    <span style="font-size:9px;color:rgba(255,255,255,0.3)">VS</span>
                    <span style="font-size:16px;font-weight:900;color:${fe?"#22c55e":"#e03030"}">${A.homeTotal??"–"}</span>
                  </div>
                  ${(O=A.homePlayers)!=null&&O.length?`<div style="flex:1;display:flex;justify-content:flex-start">${Qe(A.homePlayers,"rgba(255,255,255,0.7)",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                </div>
              </div>`}return A.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${A.outPlayer?$t({...A.outPlayer,used:!0,_line:A.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${A.inPlayer?$t({...A.inPlayer,_line:A.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:A.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${A.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${A.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function G(){const A=t.querySelector(".match-screen");if(!A)return;const E=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);A.style.bottom="auto",A.style.height=E+"px",A.style.minHeight=E+"px",A.style.maxHeight=E+"px",A.style.overflow="hidden";const Z=t.querySelector("#mobile-action-bar"),O=t.querySelector("#mobile-play-area");Z&&O&&(O.style.paddingBottom=Z.offsetHeight+"px")}if(G(),setTimeout(G,120),setTimeout(G,400),setTimeout(G,1e3),e._vvBound||(e._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",G),window.visualViewport.addEventListener("scroll",G)),window.addEventListener("resize",G)),function(){const E=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!E)return;const Z=E.closest("#match-terrain-wrap");Z&&(Z.style.cssText="position:relative;width:100%;height:100%;padding:0"),E.removeAttribute("width"),E.removeAttribute("height"),E.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",E.setAttribute("preserveAspectRatio","xMidYMid meet")}(),e._resizeBound||(e._resizeBound=!0,window.addEventListener("resize",()=>{const A=t.querySelector(".terrain-wrapper svg");if(A){const E=A.closest("#match-terrain-wrap");E&&(E.style.cssText="position:relative;width:100%;height:100%;padding:0"),A.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),e.phase==="attack"||e.phase==="defense"){let A=!1,E=30;const Z=()=>document.getElementById("match-timer"),O=()=>{const te=Z();if(!te)return;const de=String(Math.floor(E/60)).padStart(2,"0"),xe=String(E%60).padStart(2,"0");te.textContent=` ${de}:${xe}`,te.style.color=A?"#ff2222":"#ff9500",te.style.fontWeight="900"};O(),e._timerInt=setInterval(()=>{if(E--,E<0)if(!A)A=!0,E=15,O(),tn("/sounds/timer-urgent.mp3",.6);else{clearInterval(e._timerInt),e._timerInt=null,Ke(),e.homeScore=0,e.aiScore=3;const te=document.createElement("div");te.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",te.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(te),setTimeout(()=>{te.remove(),_t(t,e,i)},2500)}else O()},1e3)}(Q=document.getElementById("match-quit"))==null||Q.addEventListener("click",()=>{ot(t),confirm("Abandonner ? Résultat : défaite 3-0")&&(e.homeScore=0,e.aiScore=3,_t(t,e,i))}),(M=document.getElementById("view-ai"))==null||M.addEventListener("click",()=>ca(e,i)),($=document.getElementById("toggle-history"))==null||$.addEventListener("click",()=>{var A;(A=document.getElementById("match-history-panel"))==null||A.classList.add("open")}),(x=document.getElementById("close-history"))==null||x.addEventListener("click",()=>{var A;(A=document.getElementById("match-history-panel"))==null||A.classList.remove("open")}),(S=document.getElementById("btn-action"))==null||S.addEventListener("click",()=>{e.selected.length!==0&&(v?Qr(t,e,i):w&&Zr(t,e,i))}),(J=document.getElementById("btn-results"))==null||J.addEventListener("click",()=>_t(t,e,i)),(L=document.getElementById("btn-pass"))==null||L.addEventListener("click",()=>{if(e.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Ji(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),_t(t,e,i);return}e.phase="ai-attack",Ae(t,e,i),setTimeout(()=>bo(t,e,i),800)}),t.querySelectorAll(".match-slot-hit").forEach(A=>{A.addEventListener("click",()=>Xr(A,e,t,i))}),t.querySelectorAll(".match-used-hit").forEach(A=>{A.addEventListener("click",()=>Gi(t,e,i,null,A.dataset.cardId))}),t.querySelectorAll(".gc-mini").forEach(A=>{v?A.addEventListener("click",()=>aa(A.dataset.gcId,A.dataset.gcType,t,e,i)):(A.style.opacity="0.35",A.style.cursor="default",A.addEventListener("click",()=>St("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(K=document.getElementById("boost-card"))==null||K.addEventListener("click",()=>da(t,e,i)),t.querySelectorAll(".sub-btn-col").forEach(A=>{A.addEventListener("click",()=>Gi(t,e,i,A.dataset.subId))}),(ce=document.getElementById("sub-btn-main"))==null||ce.addEventListener("click",()=>Gi(t,e,i))}function Xr(t,e,i,o){const n=t.dataset.cardId,r=t.dataset.role,a=e.selected.findIndex(d=>d.cardId===n);if(a!==-1)e.selected.splice(a,1);else{if(e.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const d=(e.homeTeam[r]||[]).find(l=>l.cardId===n);if(d)e.selected.push({...d,_role:r,_line:r});else{const l=Object.keys(e.homeTeam||{}).map(s=>`${s}:${(e.homeTeam[s]||[]).length}`).join(" ");o.toast(`Sélection impossible (rôle="${r}" introuvable dans homeTeam[${l}])`,"error"),console.error("[MatchIA] toggleSelect: joueur introuvable",{cardId:n,role:r,homeTeam:e.homeTeam});return}}Ae(i,e,o)}function go(t,e,i){t.matchId&&h.from("matches").update({last_player_id:i}).eq("id",t.matchId).then(()=>{})}function Qr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),go(e,i,i.state.profile.id);const o=e.selected.map(r=>{const a=(e.homeTeam[r._role]||[]).find(l=>l.cardId===r.cardId)||r,d=["GK","DEF"].includes(r._role);return{...a,_line:r._role,...d?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),n=ui(o,e.modifiers.home,e.formation);e.pendingAttack={...n,players:[...o],side:"home"},e.selected.forEach(r=>{const a=(e.homeTeam[r._role]||[]).find(d=>d.cardId===r.cardId);a&&(a.used=!0)}),e.log.push({text:`⚔️ Vous attaquez : ${n.total} (base ${n.base}${n.links?` +${n.links} liens`:""}) — ${e.selected.map(r=>r.name).join(", ")}`,type:"info"}),e.selected=[],e.modifiers.home={},e.phase="ai-defense",Ae(t,e,i),setTimeout(()=>ra(t,e,i),1200)}function Zr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),go(e,i,i.state.profile.id);const o=e.stadiumDef||null,n=e.selected.map(l=>{const s=(e.homeTeam[l._role]||[]).find(c=>c.cardId===l.cardId)||l,p=s.stadiumBonus||o&&(o.club_id&&String(s.club_id)===String(o.club_id)||o.country_code&&s.country_code===o.country_code)||!1;return{...s,_line:l._role,stadiumBonus:p}}),r=pi(n,e.modifiers.home,e.formation);e.selected.forEach(l=>{const s=(e.homeTeam[l._role]||[]).find(p=>p.cardId===l.cardId);s&&(s.used=!0)});const a=oo(e.pendingAttack.total,r.total,e.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(e.pendingAttack.players||[]).map(l=>Ve(l)),homePlayers:e.selected.map(l=>{const s=(e.homeTeam[l._role]||[]).find(p=>p.cardId===l.cardId)||l;return Ve(s)}),homeTotal:r.total,aiTotal:e.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)d.text="🛡️ Bouclier ! But annulé.",e.log.push(d);else if(a.goal){e.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${e.pendingAttack.total} > ${r.total})`,e.log.push(d),e.selected=[],e.modifiers.home={},e.pendingAttack=null,Ae(t,e,i),Ze(d.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${r.total} ≥ ${e.pendingAttack.total})`,e.log.push(d);e.selected=[],e.modifiers.home={},e.pendingAttack=null,Mt(t,e,i,"home-attack")}function ea(t,e=()=>{}){if(t.aiSubsUsed>=t.aiMaxSubs)return e();const i=Object.values(t.aiTeam).flat().filter(s=>s.used);if(!i.length)return e();const o=(t.aiSubs||[]).filter(s=>!t.aiUsedSubIds.includes(s.cardId));if(!o.length)return e();const n=i[Math.floor(Math.random()*i.length)],r=o.find(s=>s.job===n.job)||o[0],a={...r,used:!1,_line:n._line,_col:n._col},d=t.aiTeam[n._line],l=d.findIndex(s=>s.cardId===n.cardId);l!==-1&&(d[l]=a),t.aiUsedSubIds.push(r.cardId),t.aiSubsUsed++,t.log.push({text:`🔄 IA : ${r.firstname} ${r.name} remplace ${n.firstname} ${n.name}`,type:"info"}),wn(n,a,e)}function ta(t,e){const i=t.effect_params||{},o=i.value||1,n=i.count||1,r=i.roles||[],a=i.target||"home";switch(t.effect_type){case"BOOST_STAT":{const l=Object.values(e.aiTeam).flat().filter(s=>!s.used&&(!r.length||r.includes(s._line))).sort(()=>Math.random()-.5).slice(0,n);l.forEach(s=>{s.boost=(s.boost||0)+o}),l.length&&e.log.push({text:`⚡ IA : +${o} sur ${l.length} joueur(s)`,type:"gc"});break}case"DEBUFF_STAT":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(p=>!p.used&&(!r.length||r.includes(p._line))).sort(()=>Math.random()-.5).slice(0,n);s.forEach(p=>{p.boost=(p.boost||0)-o}),s.length&&e.log.push({text:`🎯 IA : -${o} sur ${s.length} joueur(s)${a!=="ai"?" (vous)":""}`,type:"gc"});break}case"GRAY_PLAYER":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(p=>!p.used&&(!r.length||r.includes(p._line))).sort(()=>Math.random()-.5).slice(0,n);s.forEach(p=>{p.used=!0}),s.length&&e.log.push({text:`❌ IA : ${s.length} joueur(s)${a!=="ai"?" (vous)":""} exclu(s)`,type:"gc"});break}case"REVIVE_PLAYER":{const l=Object.values(e.aiTeam).flat().filter(s=>s.used).sort(()=>Math.random()-.5).slice(0,n);l.forEach(s=>{s.used=!1}),l.length&&e.log.push({text:`💫 IA : ${l.length} joueur(s) ressuscité(s)`,type:"gc"});break}case"REMOVE_GOAL":e.homeScore>0&&(e.homeScore--,e.log.push({text:"🚫 IA : votre dernier but est annulé !",type:"gc"}));break;case"ADD_GOAL_DRAW":e.homeScore===e.aiScore&&(e.aiScore++,e.log.push({text:"🎯 IA : but bonus (match nul) !",type:"gc"}));break;case"ADD_SUB":e.aiMaxSubs=(e.aiMaxSubs||3)+o,e.log.push({text:`🔄 IA : +${o} remplacement(s)`,type:"gc"});break}}function ia(t,e=()=>{}){var a;if(!((a=t.aiGcCards)!=null&&a.length))return e();const i=t.aiGcTarget||2;if(t.aiUsedGc.length>=i)return e();const o=t.aiGcCards.filter(d=>!t.aiUsedGc.includes(d.id));if(!o.length||!(t.round>=4&&t.aiUsedGc.length===0)&&Math.random()>.55)return e();const r=o[Math.floor(Math.random()*o.length)];t.aiUsedGc.push(r.id),r.effect_type?ta(r,t):t.log.push({text:`⚡ IA joue ${r.icon||"⚡"} ${r.name}`,type:"gc"}),oa(r,e)}function oa(t,e=()=>{}){const i=document.getElementById("ai-gc-anim-overlay");i&&i.remove();const o=document.createElement("div");o.id="ai-gc-anim-overlay",o.style.cssText=`
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
    </div>`,document.body.appendChild(o),setTimeout(()=>{o.remove(),e()},2100)}function bo(t,e,i){go(e,i,null),ea(e,()=>{ia(e,()=>{Ae(t,e,i),na(t,e,i)})})}function na(t,e,i){let o=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(l=>!l.used),n=!1;if(!o.length){const l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(p=>!p.used),s=Yt(e.homeTeam);if(s||l.length===0){const p=(e.aiTeam.DEF||[]).filter(g=>!g.used),c=(e.aiTeam.GK||[]).filter(g=>!g.used);o=s?p.length?p:c:[...p,...c],n=!0}}const r=Qo(o,"attack",e.difficulty);if(!r.length){Xi(t,e,i);return}n&&r.forEach(l=>{l._line=l._line||l.job,l.note_a=Math.max(1,Number(l.note_a)||0)});const a=ui(r,e.modifiers.ai,e.formation);if(e.pendingAttack={...a,players:r,side:"ai"},r.forEach(l=>{l.used=!0}),e.log.push({text:`🤖 IA attaque : ${a.total} (${r.map(l=>l.name).join(", ")})`,type:"info"}),e.modifiers.ai={},[...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(l=>!l.used).length===0){if(r.length===1&&(r[0]._line==="GK"||r[0].job==="GK")&&Yt(e.homeTeam)&&e.homeScore===e.aiScore){e.aiScore++,Ai(t,e,i,"ai",r[0]);return}e.aiScore++;const s={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:r.map(p=>Ve(p)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};e.log.push(s),e.pendingAttack=null,Ae(t,e,i),Ze(s.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}e.phase="defense",Ae(t,e,i)}function ra(t,e,i){var s,p;const o=[...e.aiTeam.GK||[],...e.aiTeam.DEF||[],...e.aiTeam.MIL||[]],n=Qo(o,"defense",e.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(c=>(e.aiTeam[c]||[]).filter(g=>!g.used)).length){const c=((s=e.pendingAttack)==null?void 0:s.players)||[];if(c.length===1&&(c[0]._line==="GK"||c[0].job==="GK")&&e.homeScore===e.aiScore){e.homeScore++,Ai(t,e,i,"home",c[0]);return}e.homeScore++;const y={type:"duel",isGoal:!0,homeScored:!0,homePlayers:c.map(m=>Ve(m)),homeTotal:((p=e.pendingAttack)==null?void 0:p.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};e.log.push(y),e.modifiers.ai={},e.pendingAttack=null,Ae(t,e,i),Ze(y.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}const a=n.length>0?pi(n,e.modifiers.ai,e.formation).total:0;n.forEach(c=>{c.used=!0});const d=oo(e.pendingAttack.total,a,e.modifiers.ai),l={type:"duel",title:"Attaque",homePlayers:(e.pendingAttack.players||[]).map(c=>Ve(c)),aiPlayers:n.map(c=>Ve(c)),homeTotal:e.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(d.shielded)l.text="🛡️ Bouclier IA !",e.log.push(l);else if(d.goal){e.homeScore++,l.isGoal=!0,l.homeScored=!0,l.text=`⚽ BUT ! (${e.pendingAttack.total} > ${a})`,e.log.push(l),e.modifiers.ai={},e.pendingAttack=null,Ae(t,e,i),Ze(l.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}else l.text=`🧤 IA défend (${a} ≥ ${e.pendingAttack.total})`,e.log.push(l);e.modifiers.ai={},e.pendingAttack=null,Mt(t,e,i,"ai-attack")}function Mt(t,e,i,o){if(e.round++,!$n(t,e,i)){if(yo(e)){_t(t,e,i);return}if(o==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(r=>(e.homeTeam[r]||[]).some(a=>!a.used))){Xi(t,e,i);return}e.phase="attack",Ae(t,e,i)}else{if(!["MIL","ATT","GK","DEF"].some(r=>(e.aiTeam[r]||[]).some(a=>!a.used))){Xi(t,e,i);return}e.phase="ai-attack",Ae(t,e,i),setTimeout(()=>bo(t,e,i),800)}}}function Yt(t){return!["GK","DEF","MIL","ATT"].some(e=>(t[e]||[]).some(i=>!i.used))}function No(t){const e=(t.GK||[]).some(o=>!o.used),i=["DEF","MIL","ATT"].some(o=>(t[o]||[]).some(n=>!n.used));return e&&!i}function $n(t,e,i){if(e.homeScore!==e.aiScore)return!1;if(No(e.homeTeam)&&Yt(e.aiTeam)){const o=(e.homeTeam.GK||[]).find(n=>!n.used);return o?(o.used=!0,e.homeScore++,Ai(t,e,i,"home",o),!0):!1}if(No(e.aiTeam)&&Yt(e.homeTeam)){const o=(e.aiTeam.GK||[]).find(n=>!n.used);return o?(o.used=!0,e.aiScore++,Ai(t,e,i,"ai",o),!0):!1}return!1}function Ai(t,e,i,o,n){e.log.push({type:"duel",isGoal:!0,homeScored:o==="home",homePlayers:o==="home"?[Ve(n)]:[],aiPlayers:o==="ai"?[Ve(n)]:[],text:`⚽ DERNIER CORNER — Le gardien ${o==="home"?"":"adverse "}marque !`});const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(r);const a=(d,l)=>new Promise(s=>{r.innerHTML=`<div style="font-size:32px;font-weight:900;color:${l};letter-spacing:2px;animation:lcFade 1.4s ease both">${d}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(s,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),r.remove(),e.pendingAttack=null,Ae(t,e,i),Ze([Ve(n)],e.homeScore,e.aiScore,o==="home",()=>{if(yo(e)){_t(t,e,i);return}Mt(t,e,i,o==="home"?"ai-attack":"home-attack")})))()}function yo(t){const e=["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(n=>!n.used)),i=["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(n=>!n.used));return!e&&!i}function Ji(t,e){return!(["MIL","ATT"].some(n=>(t[n]||[]).some(r=>!r.used))||Yt(e)||!["MIL","ATT"].some(n=>(e[n]||[]).some(r=>!r.used)))}function Xi(t,e,i){if(!$n(t,e,i)){if(yo(e)){_t(t,e,i);return}if(Ji(e.homeTeam,e.aiTeam)&&Ji(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),_t(t,e,i);return}e.phase="attack",Ae(t,e,i)}}function Gi(t,e,i,o=null,n=null){var y,m;if(e.phase!=="attack"){St("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(e.usedSubIds||(e.usedSubIds=[]),e.subsUsed>=e.maxSubs){St(`Maximum ${e.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const r=Object.entries(e.homeTeam).flatMap(([u,v])=>(v||[]).filter(w=>w.used).map(w=>({...w,_line:w._line||u}))),a=e.homeSubs.filter(u=>!e.usedSubIds.includes(u.cardId));if(!r.length){St("Aucun joueur utilisé à remplacer");return}if(!a.length){St("Aucun remplaçant disponible");return}let d=Math.max(0,r.findIndex(u=>u.cardId===n));const l=((y=r[d])==null?void 0:y._line)||((m=r[d])==null?void 0:m.job);let s=o?Math.max(0,a.findIndex(u=>u.cardId===o)):Math.max(0,a.findIndex(u=>u.job===l)),p=!1;const c=document.createElement("div");c.id="sub-overlay",c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function g(){var f,P,j,G,W,Q;const u=r[d],v=a[s],w=Math.min(130,Math.round((window.innerWidth-90)/2)),b=Math.round(w*1.35),_=M=>`background:rgba(255,255,255,0.12);border:none;color:${M?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${M?"default":"pointer"};flex-shrink:0`;c.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${e.subsUsed}/${e.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${_(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${v?$t({...v,used:!1,boost:0},w,b):"<div>—</div>"}</div>
        <button id="in-down" style="${_(s>=a.length-1)}" ${s>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${_(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${u?$t({...u,used:!1,boost:0},w,b):"<div>—</div>"}</div>
        <button id="out-down" style="${_(d>=r.length-1)}" ${d>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${r.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(f=c.querySelector("#sub-close"))==null||f.addEventListener("click",()=>c.remove()),(P=c.querySelector("#out-up"))==null||P.addEventListener("click",()=>{d>0&&(d--,g())}),(j=c.querySelector("#out-down"))==null||j.addEventListener("click",()=>{d<r.length-1&&(d++,g())}),(G=c.querySelector("#in-up"))==null||G.addEventListener("click",()=>{s>0&&(s--,g())}),(W=c.querySelector("#in-down"))==null||W.addEventListener("click",()=>{s<a.length-1&&(s++,g())});const I=(M,$,x,S)=>{const J=c.querySelector("#"+M);if(!J)return;let L=0;J.addEventListener("touchstart",K=>{L=K.touches[0].clientY},{passive:!0}),J.addEventListener("touchend",K=>{const ce=K.changedTouches[0].clientY-L;if(Math.abs(ce)<30)return;const A=$();ce<0&&A<S-1?(x(A+1),g()):ce>0&&A>0&&(x(A-1),g())},{passive:!0})};I("in-panel",()=>s,M=>s=M,a.length),I("out-panel",()=>d,M=>d=M,r.length),(Q=c.querySelector("#sub-confirm"))==null||Q.addEventListener("click",M=>{if(M.preventDefault(),M.stopPropagation(),p)return;p=!0;const $=r[d],x=a[s];if(!$||!x)return;let S=null,J=-1;for(const[K,ce]of Object.entries(e.homeTeam)){const A=(ce||[]).findIndex(E=>E.cardId===$.cardId);if(A!==-1){S=K,J=A;break}}if(J===-1||!S){St("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),c.remove();return}const L={...x,_line:S,_col:$._col||0,used:!1,boost:0};e.homeTeam[S].splice(J,1,L),e.usedSubIds||(e.usedSubIds=[]),e.usedSubIds.push(x.cardId),e.subsUsed++,e.selected=[],e.log.push({type:"sub",subSide:"home",clubName:e.clubName,outPlayer:{name:$.name,firstname:$.firstname,note:qt($,S),portrait:Ct($),job:$.job,country_code:$.country_code,rarity:$.rarity,clubName:$.clubName,clubLogo:$.clubLogo},inPlayer:{name:x.name,firstname:x.firstname,note:qt(x,S),portrait:Ct(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo},text:`🔄 ${x.firstname} ${x.name} remplace ${$.firstname} ${$.name}`}),c.remove(),wn($,x,()=>Ae(t,e,i))})}document.body.appendChild(c),g()}function aa(t,e,i,o,n){var g,y;const r=(o.gcDefs||[]).find(m=>m.name===e),a=Oe[e]||{icon:"⚡",desc:"Carte spéciale."},d=(r==null?void 0:r.name)||e,l=(r==null?void 0:r.effect)||a.desc,s=r!=null&&r.image_url?`/icons/${r.image_url}`:null,p=a.icon||"⚡",c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",c.innerHTML=`
    ${it(d,s,p,l,{width:190})}
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(c),(g=c.querySelector("#gc-back"))==null||g.addEventListener("click",()=>c.remove()),(y=c.querySelector("#gc-use"))==null||y.addEventListener("click",()=>{c.remove(),la(t,e,i,o,n)})}function vi(t,e,i,o,n,r){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let d=[];function l(){var s,p;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${d.length}/${e}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${t.map(c=>{const g=c._line||c.job||"MIL",y=d.find(u=>u.cardId===c.cardId),m=qe({...c,_evolution_bonus:0},{width:90,showStad:!0,role:g,extraNote:c.boost||0});return`<div class="gc-pick-item" data-cid="${c.cardId}"
          style="position:relative;border-radius:8px;${y?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${c.used?"opacity:0.3;pointer-events:none":""}">
          ${m}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${d.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${d.length}/${e})
      </button>
    </div>`,(s=a.querySelector("#gc-picker-close"))==null||s.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(c=>{c.addEventListener("click",()=>{const g=c.dataset.cid,y=t.find(u=>u.cardId===g);if(!y)return;const m=d.findIndex(u=>u.cardId===g);m>-1?d.splice(m,1):d.length<e&&d.push(y),l()})}),(p=a.querySelector("#gc-picker-confirm"))==null||p.addEventListener("click",()=>{a.remove(),r(d)})}l(),document.body.appendChild(a)}const sa={BOOST_STAT:({value:t=1,count:e=1,roles:i=[]},o,n,r)=>{const a=Object.entries(o.homeTeam).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,l])=>l.filter(s=>!s.used).map(s=>({...s,_line:d})));return a.length?(vi(a,e,`Choisir ${e} joueur(s) à booster (+${t})`,n,o,d=>{d.forEach(l=>{const s=(o.homeTeam[l._line]||[]).find(p=>p.cardId===l.cardId);s&&(s.boost=(s.boost||0)+t,o.log.push({text:`⚡ +${t} sur ${s.name}`,type:"info"}))}),Ae(n,o,r)}),!0):(o.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ae(n,o,r),!0)},DEBUFF_STAT:({value:t=1,count:e=1,roles:i=[],target:o="ai"},n,r,a)=>{const d=o==="home"?n.homeTeam:n.aiTeam,l=o==="ai"?"adverse":"allié",s=Object.entries(d).filter(([p])=>!i.length||i.includes(p)).flatMap(([p,c])=>c.filter(g=>!g.used).map(g=>({...g,_line:p})));return s.length?(vi(s,e,`Choisir ${e} joueur(s) ${l}(s) à débuffer (-${t})`,r,n,p=>{p.forEach(c=>{const y=((o==="home"?n.homeTeam:n.aiTeam)[c._line]||[]).find(m=>m.cardId===c.cardId);y&&(y.boost=(y.boost||0)-t,n.log.push({text:`🎯 -${t} sur ${y.name}${o==="ai"?" (IA)":""}`,type:"info"}))}),Ae(r,n,a)}),!0):(n.log.push({text:`🎯 Aucun joueur ${l} disponible`,type:"info"}),Ae(r,n,a),!0)},GRAY_PLAYER:({count:t=1,roles:e=[],target:i="ai"},o,n,r)=>{const a=i==="home"?o.homeTeam:o.aiTeam,d=i==="ai"?"adverse":"allié",l=Object.entries(a).filter(([s])=>!e.length||e.includes(s)).flatMap(([s,p])=>p.filter(c=>!c.used).map(c=>({...c,_line:s})));return l.length?(vi(l,t,`Choisir ${t} joueur(s) ${d}(s) à exclure`,n,o,s=>{s.forEach(p=>{const g=((i==="home"?o.homeTeam:o.aiTeam)[p._line]||[]).find(y=>y.cardId===p.cardId);g&&(g.used=!0,o.log.push({text:`❌ ${g.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ae(n,o,r)}),!0):(o.log.push({text:`❌ Aucun joueur ${d} à exclure`,type:"info"}),Ae(n,o,r),!0)},REVIVE_PLAYER:({count:t=1,roles:e=[]},i,o,n)=>{const r=Object.entries(i.homeTeam).filter(([a])=>!e.length||e.includes(a)).flatMap(([a,d])=>d.filter(l=>l.used).map(l=>({...l,_line:a})));return r.length?(vi(r,t,`Choisir ${t} joueur(s) à ressusciter`,o,i,a=>{a.forEach(d=>{const l=(i.homeTeam[d._line]||[]).find(s=>s.cardId===d.cardId);l&&(l.used=!1,i.log.push({text:`💫 ${l.name} ressuscité !`,type:"info"}))}),Ae(o,i,n)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ae(o,i,n),!0)},REMOVE_GOAL:({},t)=>(t.aiScore>0?(t.aiScore--,t.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):t.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},t)=>(t.homeScore===t.aiScore?(t.homeScore++,t.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):t.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:t=1},e)=>(e.maxSubs=(e.maxSubs||3)+t,e.log.push({text:`🔄 +${t} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function la(t,e,i,o,n){o.usedGc.push(t);const r=o.gcDefs||[],a=r.find(l=>l.name===e)||r.find(l=>{var s;return((s=l.name)==null?void 0:s.toLowerCase().trim())===(e==null?void 0:e.toLowerCase().trim())});let d=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const l=sa[a.effect_type];l?l(a.effect_params||{},o,i,n)||(d=!0):(n.toast(`Effet "${a.effect_type}" non implémenté`,"error"),d=!0)}else{switch(e){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const l=Object.entries(o.homeTeam).flatMap(([s,p])=>(p||[]).filter(c=>c.used).map(c=>({...c,_line:s})));l.length?(l[0].used=!1,o.log.push({text:`💫 ${l[0].name} ressuscité !`,type:"info"})):o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const l=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(s=>!s.used);if(l.length){const s=l.sort((p,c)=>qt(c,"ATT")-qt(p,"ATT"))[0];s.used=!0,o.log.push({text:`❄️ ${s.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}d=!0}h.from("cards").delete().eq("id",t).then(()=>{}),d&&Ae(i,o,n)}function da(t,e,i){const o=Object.values(e.homeTeam).flat().filter(n=>!n.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const d=(e.homeTeam[a]||[]).find(l=>l.cardId===r);if(d){d.boost=(d.boost||0)+e.boostCard.value,e.log.push({text:`⚡ Boost +${e.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}e.boostUsed=!0,i.closeModal(),Ae(t,e,i)})})}async function _t(t,e,i){var g,y,m,u;Ht(),Ke(),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),e.phase="finished";const{state:o}=i,n=e.homeScore>e.aiScore,r=e.homeScore===e.aiScore,a=n?"victoire":r?"nul":"defaite",d=e.isSolo&&((g=e.soloLevelConfig)!=null&&g.reward_credits)&&n?Number(e.soloLevelConfig.reward_credits):Cn(e.mode,a);if(e.isSolo&&n)try{const{data:v}=await h.from("user_solo_progress").select("unlocked_level").eq("user_id",o.profile.id).maybeSingle(),w=(v==null?void 0:v.unlocked_level)||1;e.soloLevel>=w&&await h.from("user_solo_progress").upsert({user_id:o.profile.id,unlocked_level:e.soloLevel+1,updated_at:new Date().toISOString()})}catch(v){console.warn("[Solo] Erreur mise à jour progression:",v.message)}const l="00000000-0000-0000-0000-000000000000";let s=null;if(e.isRankedAI)try{const{data:v}=await h.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",o.profile.id).single();if(v){const w=v.mmr??450,b=v.mmr_deviation??350,_=v.mmr_volatility??.06,I=n?1:r?.5:0,f=(v.placement_matches??0)<10,P=Xo(w,b,_,w,350,I,f),j=r?null:n?o.profile.id:l;await h.rpc("update_mmr_after_ranked",{p_match_id:e.matchId,p_winner_id:j,p_home_id:o.profile.id,p_away_id:l,p_home_delta:P.delta,p_away_delta:0,p_home_new_rd:P.newRd,p_away_new_rd:350,p_home_new_vol:P.newSigma,p_away_new_vol:.06}),s=P.delta}}catch(v){console.warn("[RankedAI] Erreur mise à jour MMR:",v.message)}e.matchId&&await h.from("matches").update({status:"finished",home_score:e.homeScore,away_score:e.aiScore,winner_id:n?o.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",e.matchId);const p={credits:(o.profile.credits||0)+d,matches_played:(o.profile.matches_played||0)+1};n?p.wins=(o.profile.wins||0)+1:r?p.draws=(o.profile.draws||0)+1:p.losses=(o.profile.losses||0)+1,await h.from("users").update(p).eq("id",o.profile.id),await i.refreshProfile();const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",c.innerHTML=`
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
    </div>`,document.body.appendChild(c),(y=document.getElementById("res-home"))==null||y.addEventListener("click",()=>{c.remove(),ot(t),i.navigate("home")}),(m=document.getElementById("res-replay"))==null||m.addEventListener("click",async()=>{if(c.remove(),ot(t),e.isRankedAI){const{data:v}=await h.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",i.state.profile.id).single();ut(),i.navigate("match",{matchMode:"ranked",rankedData:{mmr:(v==null?void 0:v.mmr)??450,rd:(v==null?void 0:v.mmr_deviation)??350,sigma:(v==null?void 0:v.mmr_volatility)??.06,isPlacement:((v==null?void 0:v.placement_matches)??0)<10}});return}i.navigate("match",e.isSolo?{matchMode:e.mode,soloLevel:e.soloLevel}:{matchMode:e.mode})}),(u=document.getElementById("res-next-level"))==null||u.addEventListener("click",()=>{c.remove(),ot(t),i.navigate("match",{matchMode:"solo",soloLevel:e.soloLevel+1})})}function ca(t,e){e.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${io(t.aiTeam,t.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const pa={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function ua(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}async function fa(t,e){!t||!e||await Promise.all([Go(t,"win"),Go(e,"loss")])}async function Go(t,e){const{data:i}=await h.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",t).eq("card_type","player");if(!(i!=null&&i.length))return;const o=i.filter(n=>{var r,a;return((r=n.player)==null?void 0:r.rarity)==="pepite"||((a=n.player)==null?void 0:a.rarity)==="papyte"});o.length&&await Promise.all(o.map(n=>{const r=pa[n.player.rarity],a=e==="win"?r.win:r.loss,d=n.player.note_min??1,l=n.player.note_max??10,s=ua(n.player),p=n.current_note??s,c=Math.min(l,Math.max(d,p+a));return h.from("cards").update({current_note:c}).eq("id",n.id)}))}const Nt=t=>hn(t);async function Bt(t,e,i,o,n={}){return En(t,e,i,o,n.myGC||[],n.gcDefs||[],n.isRanked||!1,n.rankedData||null,n.stadiumDef||null,n.onMatchEnd||null,n.mlLeagueId||null,n.mlMatchId||null)}async function ma(t,e,i){const{data:o}=await h.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!o){e.toast("Match introuvable","error"),e.navigate("home");return}const n=o.home_id===e.state.user.id;let r=null,a=null;if(o.mode==="mini_league"){const{data:d}=await h.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();d&&(r=d.league_id,a=d.id)}return En(t,e,i,n,[],[],o.is_ranked||!1,null,null,null,r,a)}async function En(t,e,i,o,n=[],r=[],a=!1,d=null,l=null,s=null,p=null,c=null){const{state:g,navigate:y,toast:m}=e,u=o?"p1":"p2",v=o?"p2":"p1",w=(n||[]).map(k=>k.id),b=(n||[]).map(k=>({id:k.id,gc_type:k.gc_type,_gcDef:k._gcDef||null}));t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:_}=await h.from("matches").select("*").eq("id",i).single();if(!_){m("Match introuvable","error"),y("home");return}async function I(){var ze,Ie;console.log("[PvP] buildGameState match:",{id:_.id,home_deck_id:_.home_deck_id,away_deck_id:_.away_deck_id,mode:_.mode,is_ranked:_.is_ranked});const[{data:k,error:z},{data:q,error:N},{data:C},{data:R}]=await Promise.all([h.rpc("get_deck_for_match",{p_deck_id:_.home_deck_id}),h.rpc("get_deck_for_match",{p_deck_id:_.away_deck_id}),h.from("users").select("id,pseudo,club_name").eq("id",_.home_id).single(),h.from("users").select("id,pseudo,club_name").eq("id",_.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",z==null?void 0:z.message,"p2:",N==null?void 0:N.message,"p1D:",(ze=k==null?void 0:k.starters)==null?void 0:ze.length,"p2D:",(Ie=q==null?void 0:q.starters)==null?void 0:Ie.length);const F=se=>{const Ce=Number(se.evolution_bonus)||0;return{cardId:se.card_id,position:se.position,id:se.id,firstname:se.firstname,name:se.surname_real,country_code:se.country_code,club_id:se.club_id,job:se.job,job2:se.job2,note_g:(Number(se.note_g)||0)+(se.job==="GK"||se.job2==="GK"&&Number(se.note_g)>0?Ce:0),note_d:(Number(se.note_d)||0)+(se.job==="DEF"||se.job2==="DEF"&&Number(se.note_d)>0?Ce:0),note_m:(Number(se.note_m)||0)+(se.job==="MIL"||se.job2==="MIL"&&Number(se.note_m)>0?Ce:0),note_a:(Number(se.note_a)||0)+(se.job==="ATT"||se.job2==="ATT"&&Number(se.note_a)>0?Ce:0),evolution_bonus:Ce,rarity:se.rarity,skin:se.skin,hair:se.hair,hair_length:se.hair_length,face:se.face||null,clubName:se.club_encoded_name||null,clubLogo:se.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},U=((k==null?void 0:k.starters)||[]).map(se=>F(se)),X=((q==null?void 0:q.starters)||[]).map(se=>F(se)),ie=(k==null?void 0:k.formation)||"4-4-2",ne=(q==null?void 0:q.formation)||"4-4-2";let ae=Ui(U,ie),oe=Ui(X,ne);const le=((k==null?void 0:k.subs)||[]).map(se=>F(se)),me=((q==null?void 0:q.subs)||[]).map(se=>F(se)),Se=(k==null?void 0:k.stadium_def)||(o?l:null),ye=(q==null?void 0:q.stadium_def)||(o?null:l);return Se&&(ae=$i(ae,Se),Ei(le,Se)),ye&&(oe=$i(oe,ye),Ei(me,ye)),{p1Team:ae,p2Team:oe,p1Subs:le,p2Subs:me,p1Formation:ie,p2Formation:ne,p1Name:(C==null?void 0:C.club_name)||(C==null?void 0:C.pseudo)||"Joueur 1",p2Name:(R==null?void 0:R.club_name)||(R==null?void 0:R.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:o?w:[],gc_p2:o?[]:w,gcCardsFull_p1:o?b:[],gcCardsFull_p2:o?[]:b,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:r||[],lastActionAt:new Date().toISOString()}}let f=_.game_state&&Object.keys(_.game_state).length?_.game_state:null;if(console.log("[PvP] init - amIHome:",o,"gameState exists:",!!f,"match.status:",_.status,"home_id:",_.home_id,"away_id:",_.away_id,"myId:",g.profile.id),!f)if(o){f=await I(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((f==null?void 0:f.p1Team)||{}));const{data:k}=await h.from("matches").select("game_state").eq("id",i).single();!(k!=null&&k.game_state)||!Object.keys(k.game_state).length?await h.from("matches").update({game_state:f,turn_user_id:_.home_id}).eq("id",i):f=k.game_state}else{t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let k=0;k<30&&!f;k++){await new Promise(q=>setTimeout(q,400));const{data:z}=await h.from("matches").select("game_state").eq("id",i).single();z!=null&&z.game_state&&Object.keys(z.game_state).length&&(f=z.game_state),k%5===0&&console.log("[PvP] away - poll",k,"game_state:",!!(z!=null&&z.game_state))}if(!f){m("Erreur de synchronisation","error"),y("home");return}f.gc_p2=w,f.gcCardsFull_p2=b,await h.from("matches").update({game_state:f}).eq("id",i)}let P=!1,j=null,G=!1;const W=new Set,Q=new Set;async function M(k){var ne,ae;Ht();try{h.removeChannel($)}catch{}const z=f[u+"Score"]||0,q=f[v+"Score"]||0;let N,C;k.winner_id?(N=k.winner_id===g.profile.id,C=!1):k.forfeit?(N=z>q,C=!1):(C=z===q,N=z>q);let R="";if(a&&o)try{const{data:oe}=await h.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",_.home_id).single(),{data:le}=await h.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",_.away_id).single();if(oe&&le){const me=N?1:C?.5:0,Se=1-me,ye=oe.placement_matches<10,ze=le.placement_matches<10,Ie=computeGlicko2(oe.mmr,oe.mmr_deviation,oe.mmr_volatility,le.mmr,le.mmr_deviation,me===1?1:me===0?0:.5,ye),se=computeGlicko2(le.mmr,le.mmr_deviation,le.mmr_volatility,oe.mmr,oe.mmr_deviation,Se===1?1:Se===0?0:.5,ze);await h.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:C?null:N?_.home_id:_.away_id,p_home_id:_.home_id,p_away_id:_.away_id,p_home_delta:Ie.delta,p_away_delta:se.delta,p_home_new_rd:Ie.newRd,p_away_new_rd:se.newRd,p_home_new_vol:Ie.newSigma,p_away_new_vol:se.newSigma});const Ce=Ie.delta,Ne=Ie.newMmr,je=getTier(Ne),Ye=Ce>=0?"+":"",He=Ce>=0?"#4caf50":"#ff6b6b",rt=getTier(oe.mmr);R=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${je.id!==rt.id?`<div style="font-size:20px;font-weight:900;color:${je.color}">
                    ${Ne>oe.mmr?"📈":"📉"} ${rt.emoji} ${rt.label} → ${je.emoji} ${je.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Ne>oe.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Ce>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${je.color}">${je.emoji} ${je.label}</div>`}
              ${ye?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${oe.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(oe){console.error("[Ranked] MMR update error:",oe)}(ne=document.getElementById("pvp-end-overlay"))==null||ne.remove();const F=document.createElement("div");F.id="pvp-end-overlay",F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const U=C?"🤝":N?"🏆":"😞",X=C?"MATCH NUL":N?"VICTOIRE !":"DÉFAITE",ie=C?"#fff":N?"#FFD700":"#ff6b6b";F.innerHTML=`
      <div style="font-size:64px">${U}</div>
      <div style="font-size:26px;font-weight:900;color:${ie}">${X}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${f[u+"Name"]} ${z} – ${q} ${f[v+"Name"]}</div>
      ${k.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${N?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${R}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${p?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(F),(ae=F.querySelector("#pvp-end-home"))==null||ae.addEventListener("click",()=>{F.remove(),ot(t),p?y("mini-league",{openLeagueId:p}):y(a?"ranked":"home")})}const $=h.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},k=>{var q;const z=k.new;try{if(z.status==="finished"||z.forfeit){if(P)return;P=!0,j&&(clearInterval(j),j=null),Ke(),z.game_state&&(f=z.game_state),M(z);return}if(z.game_state){const N=f;f=z.game_state;const C=f._lastGC;if(C&&C.seq&&!Q.has(C.seq)&&(Q.add(C.seq),C.by!==u)){de(C.type,C.by,()=>E());return}const R=N[u+"Score"]||0,F=N[v+"Score"]||0,U=f[u+"Score"]||0,X=f[v+"Score"]||0,ie=U>R,ne=X>F;if((ie||ne)&&!W.has(f.round)){W.add(f.round);const ae=[...f.log||[]].reverse().find(me=>me.isGoal),oe=((ae==null?void 0:ae.homePlayers)||[]).map(me=>({name:me.name,note:me.note,portrait:me.portrait,job:me.job}));!!((q=ae==null?void 0:ae.text)!=null&&q.includes("DERNIER CORNER"))?H().then(()=>{Ze(oe,U,X,ie,()=>E())}):Ze(oe,U,X,ie,()=>E());return}E()}}catch(N){console.error("[PvP] crash:",N)}}).subscribe();async function x(k){Object.assign(f,k),f.lastActionAt=new Date().toISOString();const{error:z}=await h.from("matches").update({game_state:f}).eq("id",i);z&&m("Erreur de synchronisation","error");try{E()}catch(q){console.error("[PvP] renderPvpScreen crash:",q)}}async function S(){if(P)return;P=!0,Ht(),Ke(),j&&(clearInterval(j),j=null);const k=o?_.away_id:_.home_id,z=o?"p2":"p1",q=o?"p1":"p2",N={...f,[z+"Score"]:3,[q+"Score"]:0,phase:"finished"},C=N.p1Score||0,R=N.p2Score||0;try{await h.from("matches").update({game_state:N}).eq("id",i);const{data:F,error:U}=await h.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:k,p_home_score:C,p_away_score:R,p_forfeit:!0});if(U&&console.error("[PvP] finish_pvp_match (forfeit):",U),p)try{await h.rpc("check_and_finish_mini_league",{p_league_id:p})}catch(X){console.error("[PvP] check_and_finish_mini_league (forfeit):",X)}try{const{data:X}=await h.rpc("apply_match_rewards",{p_match_id:i});X!=null&&X.success&&!(X!=null&&X.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(X){console.error("[PvP] apply_match_rewards (forfeit):",X)}}catch{}try{h.removeChannel($)}catch{}setTimeout(()=>{ot(t),p?y("mini-league",{openLeagueId:p}):y("home")},800)}const J={BOOST_STAT:({value:k=1,count:z=1,roles:q=[]},N,C)=>{const R=N[u+"Team"],F=Object.entries(R).filter(([U])=>!q.length||q.includes(U)).flatMap(([U,X])=>X.filter(ie=>!ie.used).map(ie=>({...ie,_line:U})));if(!F.length){N.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),C(N);return}L(F,z,`Choisir ${z} joueur(s) à booster (+${k})`,U=>{U.forEach(X=>{const ie=(R[X._line]||[]).find(ne=>ne.cardId===X.cardId);ie&&(ie.boost=(ie.boost||0)+k,N.log.push({text:`⚡ +${k} sur ${ie.name}`,type:"info"}))}),N[u+"Team"]=R,C(N)})},DEBUFF_STAT:({value:k=1,count:z=1,roles:q=[],target:N="ai"},C,R)=>{const F=N==="home"?u:v,U=C[F+"Team"],X=N==="home"?"allié":"adverse",ie=Object.entries(U).filter(([ne])=>!q.length||q.includes(ne)).flatMap(([ne,ae])=>ae.map(oe=>({...oe,_line:ne})));if(!ie.length){C.log.push({text:`🎯 Aucun joueur ${X}`,type:"info"}),R(C);return}L(ie,z,`Choisir ${z} joueur(s) ${X}(s) (-${k})`,ne=>{ne.forEach(ae=>{const oe=(U[ae._line]||[]).find(le=>le.cardId===ae.cardId);oe&&(oe.boost=(oe.boost||0)-k,C.log.push({text:`🎯 -${k} sur ${oe.name}`,type:"info"}))}),C[F+"Team"]=U,R(C)})},GRAY_PLAYER:({count:k=1,roles:z=[],target:q="ai"},N,C)=>{const R=q==="home"?u:v,F=N[R+"Team"],U=q==="home"?"allié":"adverse",X=Object.entries(F).filter(([ie])=>!z.length||z.includes(ie)).flatMap(([ie,ne])=>ne.filter(ae=>!ae.used).map(ae=>({...ae,_line:ie})));if(!X.length){N.log.push({text:`❌ Aucun joueur ${U}`,type:"info"}),C(N);return}L(X,k,`Choisir ${k} joueur(s) ${U}(s) à exclure`,ie=>{const ne="usedCardIds_"+R,ae=new Set(N[ne]||[]);ie.forEach(oe=>{const le=(F[oe._line]||[]).find(me=>me.cardId===oe.cardId);le&&(le.used=!0,ae.add(oe.cardId),N.log.push({text:`❌ ${le.name} exclu !`,type:"info"}))}),N[ne]=[...ae],N[R+"Team"]=F,C(N)})},REVIVE_PLAYER:({count:k=1,roles:z=[]},q,N)=>{const C=q[u+"Team"],R=Object.entries(C).filter(([F])=>!z.length||z.includes(F)).flatMap(([F,U])=>U.filter(X=>X.used).map(X=>({...X,_line:F})));if(!R.length){q.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),N(q);return}L(R,k,`Choisir ${k} joueur(s) à ressusciter`,F=>{F.forEach(U=>{const X=(C[U._line]||[]).find(ie=>ie.cardId===U.cardId);X&&(X.used=!1,q.log.push({text:`💫 ${X.name} ressuscité !`,type:"info"}))}),q[u+"Team"]=C,N(q)})},REMOVE_GOAL:({},k,z)=>{const q=v+"Score";k[q]>0?(k[q]--,k.log.push({text:"🚫 Dernier but annulé !",type:"info"})):k.log.push({text:"🚫 Aucun but à annuler",type:"info"}),z(k)},ADD_GOAL_DRAW:({},k,z)=>{k[u+"Score"]===k[v+"Score"]?(k[u+"Score"]++,k.log.push({text:"🎯 But bonus !",type:"info"})):k.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),z(k)},ADD_SUB:({value:k=1},z,q)=>{z.maxSubs=(z.maxSubs||3)+k,z.log.push({text:`🔄 +${k} remplacement(s)`,type:"info"}),q(z)},CUSTOM:({},k,z)=>z(k)};function L(k,z,q,N){const C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let R=[];function F(){var X,ie;const U=k.map(ne=>{const ae=ne._line||ne.job||"MIL",oe=R.find(me=>me.cardId===ne.cardId),le=qe({...ne,_evolution_bonus:0},{width:90,showStad:!0,role:ae,extraNote:ne.boost||0});return`<div class="pp-item" data-cid="${ne.cardId}"
          style="position:relative;border-radius:8px;${oe?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${ne.used?"opacity:0.3;pointer-events:none":""}">
          ${le}
        </div>`}).join("");C.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${q}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${R.length}/${z}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${U}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${R.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${R.length}/${z})
          </button>
        </div>`,(X=C.querySelector("#pp-close"))==null||X.addEventListener("click",()=>C.remove()),C.querySelectorAll(".pp-item").forEach(ne=>{ne.addEventListener("click",()=>{const ae=ne.dataset.cid,oe=k.find(me=>me.cardId===ae),le=R.findIndex(me=>me.cardId===ae);oe&&(le>-1?R.splice(le,1):R.length<z&&R.push(oe),F())})}),(ie=C.querySelector("#pp-confirm"))==null||ie.addEventListener("click",()=>{C.remove(),N(R)})}F(),document.body.appendChild(C)}async function K(k,z){const N=(f["gcCardsFull_"+u]||[]).find(U=>U.id===k),C=(N==null?void 0:N._gcDef)||(f.gcDefs||[]).find(U=>{var X;return U.name===z||((X=U.name)==null?void 0:X.toLowerCase().trim())===(z==null?void 0:z.toLowerCase().trim())}),R=[...f["usedGc_"+u]||[],k],F={type:z,by:u,seq:(f._gcAnimSeq||0)+1};Q.add(F.seq),de(z,u,async()=>{if(C!=null&&C.effect_type&&C.effect_type!=="CUSTOM"){const X=J[C.effect_type];if(X){const ie={...f};X(C.effect_params||{},ie,async ne=>{ne["usedGc_"+u]=R,ne._lastGC=F,ne._gcAnimSeq=F.seq,await x(ne)});return}}const U={...f};switch(z){case"Remplacement+":U.maxSubs=(U.maxSubs||3)+1,U.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const X=v+"Score";U[X]>0&&(U[X]--,U.log.push({text:"🚫 But annulé",type:"info"}));break}}U["usedGc_"+u]=R,U._lastGC=F,U._gcAnimSeq=F.seq,await x(U)})}function ce(k,z){const q="usedCardIds_"+k,N=new Set(f[q]||[]);z.forEach(C=>N.add(C)),f[q]=[...N]}function A(){for(const k of["p1","p2"]){const z=new Set(f["usedCardIds_"+k]||[]),q=f[k+"Team"];if(q)for(const N of["GK","DEF","MIL","ATT"])(q[N]||[]).forEach(C=>{C.used=z.has(C.cardId)})}}function E(){var vo,wo,_o,ko,$o,Eo;if(f.phase==="reveal")return Z();if(f.phase==="midfield")return te();if(f.phase==="finished")return we();const k=f[u+"Team"],z=f[v+"Team"];A();const q=f[u+"Score"],N=f[v+"Score"],C=f[u+"Name"],R=f[v+"Name"],F=f.phase===u+"-attack",U=f.phase===u+"-defense",X=Array.isArray(f["selected_"+u])?f["selected_"+u]:[],ie=X.map(re=>re.cardId),ne=window.innerWidth>=700,ae=f[u+"Subs"]||[],oe=f["usedSubIds_"+u]||[],le=ae.filter(re=>!oe.includes(re.cardId)),me=f["gcCardsFull_"+u]||[],Se=f["usedGc_"+u]||[],ye=me.filter(re=>!Se.includes(re.id)),ze=f.boostOwner===u&&!f.boostUsed,Ie=[...k.MIL||[],...k.ATT||[]].filter(re=>!re.used),se=[...z.MIL||[],...z.ATT||[]].filter(re=>!re.used),Ce=!ue(z),Ne=Ie.length===0&&se.length===0&&!Ce,je=(k.DEF||[]).filter(re=>!re.used),Ye=(k.GK||[]).filter(re=>!re.used);let He=[];F&&Ie.length===0&&(Ce?(He=je.map(re=>re.cardId),je.length===0&&(He=He.concat(Ye.map(re=>re.cardId)))):Ne&&(He=[...je,...Ye].map(re=>re.cardId)));function rt(re,Ee,De){var Fe,gt;const Te=re._gcDef,Pt=(Te==null?void 0:Te.name)||re.gc_type,lt=(Te==null?void 0:Te.effect)||((Fe=Oe[re.gc_type])==null?void 0:Fe.desc)||"",Re=Te!=null&&Te.image_url?`/icons/${Te.image_url}`:null,Ge=((gt=Oe[re.gc_type])==null?void 0:gt.icon)||"⚡";return`<div class="pvp-gc-mini" data-gc-id="${re.id}" data-gc-type="${re.gc_type}" style="flex-shrink:0;cursor:pointer">
        ${it(Pt,Re,Ge,lt,{width:Ee})}
      </div>`}function Xt(re,Ee){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${re}px;height:${Ee}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Ee*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(Ee*.2)}px">⚡</div>
        <div style="font-size:${Math.round(Ee*.09)}px;color:#000;font-weight:900">+${f.boostValue}</div>
      </div>`}const Pe=(re,Ee)=>Ee?Xt(95,162):rt(re,95),We=(re,Ee)=>Ee?Xt(68,116):rt(re,68),Ue=ne?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ft=F?pe(u)?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${X.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ue};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:U?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${X.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${R}</div>`,at=F&&!pe(u)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':F||U?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${X.length}/3 sélectionné(s)</div>`:"",Dt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${ne?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${le.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':le.map(re=>`<div class="pvp-sub-btn" data-sub-id="${re.cardId}" style="cursor:pointer;flex-shrink:0">${$t(re,ne?76:44,ne?100:58)}</div>`).join("")}
    </div>`,mt=F?"attack":U?"defense":"idle",Et=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ci(k,f[u+"Formation"],mt,ie,ne?1300:Tt(),ne?600:Ut(),He)}
      </div>
    </div>`,st=f[u+"Team"],Mn=(()=>{var Ee,De,Te,Pt,lt;if(U&&((Ee=f.pendingAttack)!=null&&Ee.players)){const Re=f.pendingAttack;let Ge="";if(X.length>0){const Fe=X.map(Je=>{const Qt=(st[Je._role]||[]).find(Di=>Di.cardId===Je.cardId)||Je,Zt=st[Je._role]||[],bi=Zt.findIndex(Di=>Di.cardId===Je.cardId),Bi=Lt(Zt.length),ei=bi>=0?Bi[bi]:Qt._col??1;return{...Qt,_line:Je._role,_col:ei}}),gt=pi(Fe,((De=f.modifiers)==null?void 0:De[u])||{},f[u+"Formation"]);Ge=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${X.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(Fe.map(Je=>({...Je,used:!1})),"#3a7bd5",gt.total,"defense",f[u+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${R} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${Qe((Re.players||[]).map(Fe=>({...Fe,used:!1})),"#ff6b6b",Re.total,"attack",f[v+"Formation"])}</div>
          ${Ge}
        </div>`}if(F&&((Te=f.pendingAttack)!=null&&Te.players)){const Re=f.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${Qe((Re.players||[]).map(Ge=>({...Ge,used:!1})),"#00ff88",Re.total,"attack",f[u+"Formation"])}</div>
        </div>`}if(F&&!((Pt=f.pendingAttack)!=null&&Pt.players)&&X.length>0){const Re=X.map(Fe=>{const gt=(st[Fe._role]||[]).find(ei=>ei.cardId===Fe.cardId)||Fe,Je=["GK","DEF"].includes(Fe._role),Qt=st[Fe._role]||[],Zt=Qt.findIndex(ei=>ei.cardId===Fe.cardId),bi=Lt(Qt.length),Bi=Zt>=0?bi[Zt]:gt._col??1;return{...gt,_line:Fe._role,_col:Bi,...Je?{note_a:Math.max(1,Number(gt.note_a)||0)}:{}}}),Ge=ui(Re,((lt=f.modifiers)==null?void 0:lt[u])||{},f[u+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${X.length}/3)</div>
          <div style="display:flex;justify-content:center">${Qe(Re.map(Fe=>({...Fe,used:!1})),"#FFD700",Ge.total,"attack",f[u+"Formation"])}</div>
        </div>`}const re=(f.log||[]).slice(-1)[0];return re?'<div style="padding:2px 4px">'+vn(re)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),ho=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${C}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${q} – ${N}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${R}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Mn}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(f.log||[]).length})
      </button>`;It(t),t.style.overflow="hidden",ne?t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${ho}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Dt}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Et}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ft}${at}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ye.map(re=>Pe(re,!1)).join("")}
            ${ze?Pe(null,!0):""}
          </div>
        </div>
      </div>`:t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${ho}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ci(k,f[u+"Formation"],mt,ie,Tt(),Ut(),He)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ye.map(re=>We(re,!1)).join("")}
            ${ze?We(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${F&&le.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${F&&le.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${F&&le.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${F&&le.length>0?1:.4}">
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
          <div>${ft}${at}</div>
        </div>
      </div>`;function Ft(){const re=t.querySelector(".match-screen");if(!re)return;const Ee=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);re.style.height=Ee+"px",re.style.minHeight=Ee+"px",re.style.maxHeight=Ee+"px",re.style.overflow="hidden";const De=t.querySelector("#mobile-action-bar"),Te=t.querySelector("#mobile-play-area");De&&Te&&(Te.style.paddingBottom=De.offsetHeight+"px")}if(Ft(),setTimeout(Ft,120),setTimeout(Ft,400),G||(G=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ft),window.visualViewport.addEventListener("scroll",Ft)),window.addEventListener("resize",Ft)),function(){const Ee=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!Ee)return;const De=Ee.closest("#match-terrain-wrap");De&&(De.style.cssText="position:relative;width:100%;height:100%;padding:0"),Ee.removeAttribute("width"),Ee.removeAttribute("height"),Ee.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Ee.setAttribute("preserveAspectRatio","xMidYMid meet")}(),f._pvpResizeBound||(f._pvpResizeBound=!0,window.addEventListener("resize",()=>{const re=t.querySelector(".terrain-wrapper svg");if(re){const Ee=re.closest("#match-terrain-wrap");Ee&&(Ee.style.cssText="position:relative;width:100%;height:100%;padding:0"),re.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t.querySelectorAll(".match-slot-hit").forEach(re=>{re.addEventListener("click",()=>{if(!F&&!U)return;const Ee=re.dataset.cardId,De=re.dataset.role,Te=(k[De]||[]).find(Ge=>Ge.cardId===Ee);if(!Te||Te.used)return;const Pt=He.includes(Ee);if(F&&!["MIL","ATT"].includes(De)&&!Pt)return;Array.isArray(f["selected_"+u])||(f["selected_"+u]=[]);const lt=f["selected_"+u],Re=lt.findIndex(Ge=>Ge.cardId===Ee);Re>-1?lt.splice(Re,1):lt.length<3&&lt.push({...Te,_role:De}),E()})}),t.querySelectorAll(".match-used-hit").forEach(re=>{re.addEventListener("click",()=>Me(re.dataset.cardId))}),t.querySelectorAll(".pvp-sub-btn").forEach(re=>{re.addEventListener("click",()=>Me())}),(vo=t.querySelector("#pvp-sub-open"))==null||vo.addEventListener("click",()=>Me()),t.querySelectorAll(".pvp-gc-mini").forEach(re=>{F?re.addEventListener("click",()=>xe(re.dataset.gcId,re.dataset.gcType)):(re.style.opacity="0.35",re.style.cursor="default",re.addEventListener("click",()=>St("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(wo=t.querySelector("#pvp-boost-card"))==null||wo.addEventListener("click",()=>fe()),(_o=t.querySelector("#pvp-action"))==null||_o.addEventListener("click",re=>{F?re.currentTarget.dataset.pass==="1"||!pe(u)?ke():Y():U&&D()}),(ko=t.querySelector("#pvp-quit"))==null||ko.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&S()}),($o=t.querySelector("#pvp-view-opp"))==null||$o.addEventListener("click",()=>ve()),(Eo=t.querySelector("#pvp-toggle-history"))==null||Eo.addEventListener("click",()=>be()),j&&(clearInterval(j),j=null),Ke(),(F||U)&&!P){let re=30,Ee=!1;const De=()=>document.getElementById("pvp-timer"),Te=()=>{De()&&(De().textContent=re+"s",De().style.color=Ee?"#ff4444":"#fff")};Te(),j=setInterval(()=>{re--,re<0?Ee?(clearInterval(j),j=null,Ke(),F&&!pe(u)?ke():S()):(Ee=!0,re=15,Te(),tn("/sounds/timer-urgent.mp3",.6)):Te()},1e3)}}function Z(){It(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${Or(f[v+"Team"],f[v+"Formation"],null,f[v+"Name"]||"Adversaire")}
    </div>`;const k=t.querySelector("svg"),z=k==null?void 0:k.closest("#match-terrain-wrap");z&&(z.style.cssText="position:relative;width:100%;height:100%;padding:0"),k&&(k.removeAttribute("width"),k.removeAttribute("height"),k.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",k.setAttribute("preserveAspectRatio","xMidYMid meet")),u==="p1"&&setTimeout(async()=>{await x({phase:"midfield"})},5e3)}let O=!1;function te(){if(O)return;const k=f[u+"Team"].MIL||[],z=f[v+"Team"].MIL||[],q=vt(k)+wt(k),N=vt(z)+wt(z),C=q>=N;It(t),t.innerHTML=`
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
      ${Ii(k,f[u+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${Ii(z,f[v+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const R=(le,me)=>t.querySelectorAll(le).forEach((Se,ye)=>{setTimeout(()=>{Se.style.opacity="1",Se.style.transform="translateY(0) scale(1)"},me+ye*90)});R(".duel-card-me",150),R(".duel-card-opp",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((le,me)=>setTimeout(()=>{le.style.opacity="1"},me*70)),900),setTimeout(()=>{const le=t.querySelector("#pvp-vs");le&&(le.style.opacity="1",le.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(me=>me.style.opacity="1")},1250);function F(le,me,Se){const ye=document.getElementById(le);if(!ye)return;const ze=performance.now(),Ie=se=>{const Ce=Math.min(1,(se-ze)/Se);ye.textContent=Math.round(me*(1-Math.pow(1-Ce,3))),Ce<1?requestAnimationFrame(Ie):ye.textContent=me};requestAnimationFrame(Ie)}setTimeout(()=>{F("pvp-score-me",q,800),F("pvp-score-opp",N,800)},1500);const U=f.p1Team.MIL||[],X=f.p2Team.MIL||[],ie=vt(U)+wt(U),ne=vt(X)+wt(X),ae=ie>=ne?"p1":"p2";let oe=f.boostValue;oe==null&&(oe=Jo(),f.boostValue=oe,f.boostOwner=ae,f.boostUsed=!1),O=!0,setTimeout(()=>{const le=t.querySelector("#duel-row-"+(C?"me":"opp")),me=t.querySelector("#duel-row-"+(C?"opp":"me")),Se=document.getElementById("pvp-score-me"),ye=document.getElementById("pvp-score-opp"),ze=C?Se:ye,Ie=C?ye:Se;ze&&(ze.style.fontSize="80px",ze.style.color=C?"#FFD700":"#ff6b6b",ze.style.animation="duelPulse .5s ease"+(C?",duelGlow 1.5s ease infinite .5s":"")),Ie&&(Ie.style.opacity="0.25"),setTimeout(()=>{le&&(le.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",le.style.zIndex="5"),setTimeout(()=>{const se=document.getElementById("duel-shock");se&&(se.style.animation="shockwave .5s ease-out forwards"),me&&(me.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var je;const se=document.getElementById("pvp-duel-finale");if(!se)return;const Ce=f.boostOwner===u?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+oe+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ne=u==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;se.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(C?"⚽ "+f[u+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+f[v+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ce+Ne,se.style.transition="opacity .45s ease",se.style.opacity="1",se.style.pointerEvents="auto",(je=document.getElementById("pvp-start-match"))==null||je.addEventListener("click",async()=>{const Ye=ae;await x({phase:Ye+"-attack",attacker:Ye,round:1,boostValue:oe,boostUsed:!1,boostOwner:Ye})})},600)},700)},2800)}function de(k,z,q){var me,Se;const N=(f.gcDefs||[]).find(ye=>{var ze;return ye.name===k||((ze=ye.name)==null?void 0:ze.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),C={purple:"#b06ce0",light_blue:"#00d4ef"}[N==null?void 0:N.color]||"#b06ce0",R=(N==null?void 0:N.name)||k,F=(N==null?void 0:N.effect)||((me=Oe[k])==null?void 0:me.desc)||"",U=N!=null&&N.image_url?`/icons/${N.image_url}`:null,X=((Se=Oe[k])==null?void 0:Se.icon)||"⚡",ne=z===u?"Vous":f[z+"Name"]||"Adversaire",ae=document.createElement("div");ae.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",ae.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{filter:drop-shadow(0 0 20px ${C}66)}50%{filter:drop-shadow(0 0 40px ${C}cc)}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${C};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${ne} joue une carte</div>
      <div style="animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        ${it(R,U,X,F,{width:200})}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(ae);let oe=!1;const le=()=>{oe||(oe=!0,ae.remove(),setTimeout(()=>q&&q(),50))};ae.addEventListener("click",le),setTimeout(le,3e3)}function xe(k,z){var ne,ae,oe,le;const N=(f["gcCardsFull_"+u]||[]).find(me=>me.id===k),C=N==null?void 0:N._gcDef,R=(C==null?void 0:C.name)||z,F=(C==null?void 0:C.effect)||((ne=Oe[z])==null?void 0:ne.desc)||"Carte spéciale.",U=C!=null&&C.image_url?`/icons/${C.image_url}`:null,X=((ae=Oe[z])==null?void 0:ae.icon)||"⚡",ie=document.createElement("div");ie.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",ie.innerHTML=`
      ${it(R,U,X,F,{width:190})}
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(ie),(oe=ie.querySelector("#pvp-gc-back"))==null||oe.addEventListener("click",()=>ie.remove()),(le=ie.querySelector("#pvp-gc-use"))==null||le.addEventListener("click",()=>{ie.remove(),K(k,z)})}function fe(){var N;const k=f[u+"Team"],z=Object.entries(k).flatMap(([C,R])=>(R||[]).filter(F=>!F.used).map(F=>({...F,_line:C})));if(!z.length)return;const q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",q.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${f.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${z.map(C=>{const R={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[C._line]||"#555",F=qt(C,C._line)+(C.boost||0);return`<div class="bp-item" data-cid="${C.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${R};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${C.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${F}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(q),(N=q.querySelector("#bp-close"))==null||N.addEventListener("click",()=>q.remove()),q.querySelectorAll(".bp-item").forEach(C=>{C.addEventListener("click",async()=>{const R=C.dataset.cid,F=z.find(X=>X.cardId===R);if(!F)return;const U=(k[F._line]||[]).find(X=>X.cardId===R);U&&(U.boost=(U.boost||0)+f.boostValue),q.remove(),await x({[u+"Team"]:k,boostUsed:!0})})})}function Me(k=null){var le,me;if(!(f.phase===u+"-attack")){m("Remplacement uniquement avant votre attaque","warning");return}const q=f[u+"Team"],N=f["usedSubIds_"+u]||[],C=f.maxSubs||3;if(N.length>=C){m(`Maximum ${C} remplacements atteint`,"warning");return}const R=Object.entries(q).flatMap(([Se,ye])=>(ye||[]).filter(ze=>ze.used).map(ze=>({...ze,_line:Se}))),F=(f[u+"Subs"]||[]).filter(Se=>!N.includes(Se.cardId));if(!R.length){m("Aucun joueur utilisé à remplacer","warning");return}if(!F.length){m("Aucun remplaçant disponible","warning");return}let U=Math.max(0,R.findIndex(Se=>Se.cardId===k));const X=((le=R[U])==null?void 0:le._line)||((me=R[U])==null?void 0:me.job);let ie=Math.max(0,F.findIndex(Se=>Se.job===X)),ne=!1;const ae=document.createElement("div");ae.id="pvp-sub-overlay",ae.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function oe(){var Ne,je,Ye,He,rt,Xt;const Se=R[U],ye=F[ie],ze=Math.min(130,Math.round((window.innerWidth-90)/2)),Ie=Math.round(ze*1.35),se=Pe=>`background:rgba(255,255,255,0.12);border:none;color:${Pe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Pe?"default":"pointer"};flex-shrink:0`;ae.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${N.length}/${C})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${se(ie===0)}" ${ie===0?"disabled":""}>▲</button>
          <div>${ye?$t({...ye,used:!1,boost:0},ze,Ie):"<div>—</div>"}</div>
          <button id="pin-down" style="${se(ie>=F.length-1)}" ${ie>=F.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${ie+1}/${F.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${se(U===0)}" ${U===0?"disabled":""}>▲</button>
          <div>${Se?$t({...Se,used:!1,boost:0},ze,Ie):"<div>—</div>"}</div>
          <button id="pout-down" style="${se(U>=R.length-1)}" ${U>=R.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${U+1}/${R.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Ne=ae.querySelector("#psub-close"))==null||Ne.addEventListener("click",()=>ae.remove()),(je=ae.querySelector("#pout-up"))==null||je.addEventListener("click",()=>{U>0&&(U--,oe())}),(Ye=ae.querySelector("#pout-down"))==null||Ye.addEventListener("click",()=>{U<R.length-1&&(U++,oe())}),(He=ae.querySelector("#pin-up"))==null||He.addEventListener("click",()=>{ie>0&&(ie--,oe())}),(rt=ae.querySelector("#pin-down"))==null||rt.addEventListener("click",()=>{ie<F.length-1&&(ie++,oe())});const Ce=(Pe,We,Ue,ft)=>{const at=ae.querySelector("#"+Pe);if(!at)return;let Dt=0;at.addEventListener("touchstart",mt=>{Dt=mt.touches[0].clientY},{passive:!0}),at.addEventListener("touchend",mt=>{const Et=mt.changedTouches[0].clientY-Dt;if(Math.abs(Et)<30)return;const st=We();Et<0&&st<ft-1?(Ue(st+1),oe()):Et>0&&st>0&&(Ue(st-1),oe())},{passive:!0})};Ce("pin-panel",()=>ie,Pe=>ie=Pe,F.length),Ce("pout-panel",()=>U,Pe=>U=Pe,R.length),(Xt=ae.querySelector("#psub-confirm"))==null||Xt.addEventListener("click",async Pe=>{if(Pe.preventDefault(),Pe.stopPropagation(),ne)return;ne=!0;const We=R[U],Ue=F[ie];if(!We||!Ue)return;const ft=We._line,at=(q[ft]||[]).findIndex(Et=>Et.cardId===We.cardId);if(at===-1){m("Erreur : joueur introuvable","error"),ae.remove();return}const Dt={...Ue,_line:ft,position:We.position,used:!1,boost:0};q[ft].splice(at,1,Dt);const mt=[...N,Ue.cardId];ae.remove(),Be(We,Ue,async()=>{await x({[u+"Team"]:q,[v+"Team"]:f[v+"Team"],["usedSubIds_"+u]:mt})})})}document.body.appendChild(ae),oe()}function Be(k,z,q){const N={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const R=(X,ie,ne)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${ie};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${ne}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${N[X.job]||"#555"};border:3px solid ${ie};position:relative;overflow:hidden;margin:0 auto">
        ${Ct(X)?`<img src="${Ct(X)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(X.name||"").slice(0,12)}</div>
    </div>`;C.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${R(z,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${R(k,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(C);let F=!1;const U=()=>{F||(F=!0,C.remove(),setTimeout(()=>q(),50))};C.addEventListener("click",U),setTimeout(U,2200)}function ve(){var z;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",k.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${f[v+"Name"]}</div>
      <div style="width:min(90vw,420px)">${io(f[v+"Team"],f[v+"Formation"],null,[],Tt(),Ut())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(k),(z=k.querySelector("#pvp-opp-close"))==null||z.addEventListener("click",()=>k.remove())}function be(){var q;const k=f.log||[],z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",z.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${k.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...k].reverse().map(N=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${N.type==="goal"?"#FFD700":N.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${N.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(z),(q=z.querySelector("#pvp-hist-close"))==null||q.addEventListener("click",()=>z.remove())}async function ke(){if(f.phase!==u+"-attack")return;const k=u==="p1"?"p2":"p1",z=(f.round||0)+1,q=[...f.log||[]];q.push({type:"info",text:`⏭️ ${f[u+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const N=$e(f),C=pe(k),R=N||!C?"finished":k+"-attack";await x({["selected_"+u]:[],modifiers:{...f.modifiers,[u]:{}},pendingAttack:null,phase:R,attacker:k,round:z,log:q}),R==="finished"&&await he(f)}function B(k){const z=(k.GK||[]).some(N=>!N.used),q=["DEF","MIL","ATT"].some(N=>(k[N]||[]).some(C=>!C.used));return z&&!q}function T(k){return(k.p1Score||0)!==(k.p2Score||0)?null:B(k.p1Team)&&!ue(k.p2Team)?{side:"p1",gk:(k.p1Team.GK||[]).find(z=>!z.used)}:B(k.p2Team)&&!ue(k.p1Team)?{side:"p2",gk:(k.p2Team.GK||[]).find(z=>!z.used)}:null}async function H(){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(k);const z=(q,N)=>new Promise(C=>{k.innerHTML=`<div style="font-size:32px;font-weight:900;color:${N};letter-spacing:2px;animation:lcFade 1.4s ease both">${q}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(C,1400)});await z("⚽ DERNIER CORNER","#FFD700"),await z("🧤 LE GARDIEN MONTE !","#4fc3f7"),k.remove()}async function V(k,z){const{side:q,gk:N}=k;if(!N)return;const C=q+"Score",R=(z[C]||0)+1;N.used=!0;const F=[...z.log||[]];F.push({type:"duel",isGoal:!0,homeScored:q===u,homePlayers:q==="p1"?[Nt(N)]:[],aiPlayers:q==="p2"?[Nt(N)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${z[q+"Name"]} marque !`});const U=(z.round||0)+1,X=q==="p1"?"p2":"p1",ie={...z,[C]:R},ne=$e(ie);W.add(U),await H();const ae=q===u?R:z[u+"Score"]||0,oe=q===u?z[v+"Score"]||0:R;Ze([Nt(N)],ae,oe,q===u,async()=>{await x({[C]:R,log:F,round:U,pendingAttack:null,phase:ne?"finished":X+"-attack",attacker:X,["selected_"+u]:[],modifiers:{...f.modifiers,[u]:{}}}),ne&&await he({...f,[C]:R})})}async function Y(){const k=f[u+"Team"],z=!["GK","DEF","MIL","ATT"].some(R=>(f[v+"Team"][R]||[]).some(F=>!F.used)),q=(f["selected_"+u]||[]).map(R=>{const F=(k[R._role]||[]).find(me=>me.cardId===R.cardId)||R,U=["GK","DEF"].includes(R._role),X=k[R._role]||[],ie=X.findIndex(me=>me.cardId===R.cardId),ne=Lt(X.length),ae=ie>=0?ne[ie]:F._col??1,oe=f.stadiumDef||f.homeStadiumDef||null,le=F.stadiumBonus||oe&&(oe.club_id&&String(F.club_id)===String(oe.club_id)||oe.country_code&&F.country_code===oe.country_code)||!1;return{...F,_line:R._role,_col:ae,stadiumBonus:le,...U?{note_a:Math.max(1,Number(F.note_a)||0)}:{}}});if(!q.length)return;const N=ui(q,f.modifiers[u]||{},f[u+"Formation"]);ce(u,q.map(R=>R.cardId)),q.forEach(R=>{const F=(k[R._role]||[]).find(U=>U.cardId===R.cardId);F&&(F.used=!0)}),f["selected_"+u]=[],E();const C=[...f.log||[]];if(z){if(q.length===1&&(q[0]._line==="GK"||q[0].job==="GK")&&(f.p1Score||0)===(f.p2Score||0)){await V({side:u,gk:q[0]},{...f,[u+"Team"]:k,log:C});return}const F=(f[u+"Score"]||0)+1,U=q.map(oe=>Nt(oe));C.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:U,homeTotal:N.total,aiTotal:0});const X=(f.round||0)+1,ie=u==="p1"?"p2":"p1",ne={...f,[u+"Team"]:k,[u+"Score"]:F},ae=$e(ne);W.add(X),Ze(U,F,f[v+"Score"]||0,!0,async()=>{await x({[u+"Team"]:k,[u+"Score"]:F,["selected_"+u]:[],modifiers:{...f.modifiers,[u]:{}},pendingAttack:null,phase:ae?"finished":ie+"-attack",attacker:ie,round:X,log:C}),ae&&await he({...f,[u+"Score"]:F})});return}C.push({type:"pending",text:`⚔️ ${f[u+"Name"]} attaque (${N.total})`}),await x({[u+"Team"]:k,[v+"Team"]:f[v+"Team"],pendingAttack:{...N,players:q,side:u},["selected_"+u]:[],modifiers:{...f.modifiers,[u]:{}},phase:v+"-defense",log:C})}async function D(){const k=f[u+"Team"],z=(f["selected_"+u]||[]).map(ye=>{const ze=(k[ye._role]||[]).find(je=>je.cardId===ye.cardId)||ye,Ie=k[ye._role]||[],se=Ie.findIndex(je=>je.cardId===ye.cardId),Ce=Lt(Ie.length),Ne=se>=0?Ce[se]:ze._col??1;return{...ze,_line:ye._role,_col:Ne}}),q=pi(z,f.modifiers[u]||{},f[u+"Formation"]);ce(u,z.map(ye=>ye.cardId)),z.forEach(ye=>{const ze=(k[ye._role]||[]).find(Ie=>Ie.cardId===ye.cardId);ze&&(ze.used=!0)}),f["selected_"+u]=[],E();const N=oo(f.pendingAttack.total,q.total,f.modifiers[u]||{}),C=f.pendingAttack.side,R=N==="attack"||(N==null?void 0:N.goal),F=C==="p1"?"p2":"p1",U=(f.round||0)+1,X=(f.pendingAttack.players||[]).map(ye=>Nt(ye)),ie=[...f.log||[]];ie.push({type:"duel",isGoal:R,homeScored:R&&C===u,text:R?`⚽ BUT de ${f[C+"Name"]} ! (${f.pendingAttack.total} vs ${q.total})`:`✋ Attaque stoppée (${f.pendingAttack.total} vs ${q.total})`,homePlayers:X,aiPlayers:z.map(ye=>Nt(ye)),homeTotal:f.pendingAttack.total,aiTotal:q.total});const ne=R?(f[C+"Score"]||0)+1:f[C+"Score"]||0,ae={...f,[u+"Team"]:k,[C+"Score"]:ne},oe=$e(ae),le=oe?"finished":F+"-attack",me=!oe&&!R?T(ae):null,Se=async()=>{if(me){await V(me,ae);return}await x({[u+"Team"]:k,[v+"Team"]:f[v+"Team"],[C+"Score"]:ne,["selected_"+u]:[],modifiers:{...f.modifiers,[u]:{}},pendingAttack:null,phase:le,attacker:F,round:U,log:ie}),(le==="finished"||oe)&&await he({...f,[C+"Score"]:ne})};if(R){const ye=C===u,ze=ye?ne:f[u+"Score"]||0,Ie=ye?f[v+"Score"]||0:ne;W.add(U),Ze(X,ze,Ie,ye,Se)}else await Se()}function ee(k){return["MIL","ATT"].some(z=>(k[z]||[]).some(q=>!q.used))}function ue(k){return["GK","DEF","MIL","ATT"].some(z=>(k[z]||[]).some(q=>!q.used))}function ge(k){return ue(k)&&!ee(k)}function pe(k){const z=f[k+"Team"],q=f[(k==="p1"?"p2":"p1")+"Team"];return!!(ee(z)||ge(z)&&!ue(q)||ge(z)&&!ee(q)&&ue(q))}function $e(k){return!ue(k.p1Team)&&!ue(k.p2Team)}function Le(k){const z=k.p1Score||0,q=k.p2Score||0;return z===q?null:z>q?_.home_id:_.away_id}async function he(k){Ht(),Ke();try{const z=Le(k),q=z?_.home_id===z?_.away_id:_.home_id:null,N=k.p1Score||0,C=k.p2Score||0,{data:R,error:F}=await h.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:z,p_home_score:N,p_away_score:C,p_forfeit:!1});if(F&&console.error("[PvP] finish_pvp_match:",F),p)try{await h.rpc("check_and_finish_mini_league",{p_league_id:p})}catch(U){console.error("[PvP] check_and_finish_mini_league:",U)}z&&q&&fa(z,q).catch(()=>{});try{const{data:U}=await h.rpc("apply_match_rewards",{p_match_id:i});U!=null&&U.success&&!(U!=null&&U.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(U){console.error("[PvP] apply_match_rewards:",U)}if(typeof s=="function")try{await s({homeScore:N,awayScore:C,winnerId:z,homeId:_.home_id,awayId:_.away_id,matchId:i})}catch(U){console.error("[PvP] onMatchEnd:",U)}}catch(z){console.error("[PvP] finishMatch:",z)}}function we(){var C;const k=f[u+"Score"],z=f[v+"Score"],q=k>z,N=k===z;It(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${q?"🏆":N?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${q?"Victoire !":N?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${k} - ${z}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${p?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(C=document.getElementById("pvp-home"))==null||C.addEventListener("click",()=>{try{h.removeChannel($)}catch{}ot(t),p?y("mini-league",{openLeagueId:p}):y("home")})}E()}async function Qi(t,e,i=!1){var d,l;const{state:o,navigate:n,toast:r}=e,a=i&&((l=(d=e==null?void 0:e.state)==null?void 0:d.params)==null?void 0:l.rankedData)||null;await Ci(t,e,i?"ranked":"random",async({deckId:s,formation:p,starters:c,subsRaw:g,gcCardsEnriched:y,gcDefs:m,stadiumDef:u})=>{It(t);const v=async w=>{await ba(t,e,s,p,c,g,w||[],m,u,i,a)};if(!(y!=null&&y.length)){await v([]);return}ji(t,y,v)})}async function ga(t,e,i){return ma(t,e,i)}async function ba(t,e,i,o,n,r,a=[],d=[],l=null,s=!1,p=null){var M,$;const{state:c,navigate:g,toast:y}=e,m=(p==null?void 0:p.mmr)??((M=c.profile)==null?void 0:M.mmr)??450,u=s?xt(m):null,v=s?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",w=s?(u==null?void 0:u.color)||"#D4A017":"#FFD700";let b=!1,_=null,I=null;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${v};color:#fff;padding:32px;text-align:center;gap:20px">
      ${s?`<div style="font-size:36px">${(u==null?void 0:u.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${s?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${s?`<div style="font-size:13px;color:${(u==null?void 0:u.color)||"#D4A017"}">${(u==null?void 0:u.name)||""} · ${Math.round(m)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${w};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const f=async()=>{b=!0,_&&(_.unsubscribe(),_=null),I&&(clearInterval(I),I=null);try{await h.rpc("cancel_matchmaking",{p_user_id:c.profile.id})}catch(x){console.error("[Matchmaking] cancel error:",x)}};($=document.getElementById("cancel-mm"))==null||$.addEventListener("click",async()=>{await f(),ot(t),g("home")});const P=async(x,S)=>{b||(b=!0,_&&(_.unsubscribe(),_=null),I&&(clearInterval(I),I=null),await Bt(t,e,x,S,{myGC:a,gcDefs:d,stadiumDef:l,isRanked:s,rankedData:p,onMatchEnd:s?ya:null}))},j=c.user.id,{data:G,error:W}=s?await h.rpc("try_matchmake_ranked",{p_user_id:j,p_deck_id:i,p_mmr:m,p_range:200}):await h.rpc("try_matchmake",{p_user_id:j,p_deck_id:i});if(W||!(G!=null&&G.success)){console.error("[Matchmaking] try_matchmake error:",W||G),y("Erreur de matchmaking","error"),ot(t),g("home");return}if(G.matched){await P(G.match_id,!1);return}const Q=async()=>{if(b)return;const{data:x}=await h.from("matchmaking_queue").select("status, match_id").eq("user_id",j).maybeSingle();(x==null?void 0:x.status)==="matched"&&x.match_id&&await P(x.match_id,!0)};_=h.channel(`mm_${j}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${j}`},x=>{const S=x.new;S.status==="matched"&&S.match_id&&P(S.match_id,!0)}).subscribe(),I=setInterval(Q,3e3),s?setTimeout(async()=>{if(!b){b=!0,_&&(_.unsubscribe(),_=null),I&&(clearInterval(I),I=null);try{await h.rpc("cancel_matchmaking",{p_user_id:c.profile.id})}catch(x){console.error("[Matchmaking] cancel error:",x)}y("Aucun adversaire trouvé — match contre une IA calibrée sur votre niveau","info",4e3),g("match",{matchMode:"ranked_ai",rankedData:p,presetSetup:{deckId:i,formation:o,starters:n,subsRaw:r,gcCardsEnriched:a,gcDefs:d,stadiumDef:l}})}},2e4):setTimeout(()=>{b||f()},12e4)}async function ya(t,e){const{state:i,toast:o}=e,{winnerId:n,homeId:r,awayId:a,homeScore:d,awayScore:l,matchId:s}=t,p=i.user.id,c=r===p,g=n===p,{data:y}=await h.from("users").select("mmr, mmr_rd, mmr_v").eq("id",p).single(),{data:m}=await h.from("users").select("mmr, mmr_rd, mmr_v").eq("id",c?a:r).single();if(y&&m){const u=Xo(y.mmr,y.mmr_rd,y.mmr_v,m.mmr,m.mmr_rd,g?1:0);await h.from("users").update({mmr:u.mmr,mmr_rd:u.rd,mmr_v:u.v,mmr_wins:g?h.sql`mmr_wins + 1`:void 0,mmr_losses:g?void 0:h.sql`mmr_losses + 1`}).eq("id",p),o(g?`+MMR ↑ ${Math.round(u.mmr-y.mmr)}`:`-MMR ↓ ${Math.round(y.mmr-u.mmr)}`,g?"success":"error",4e3)}}const xa=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Qi,resumePvpMatch:ga},Symbol.toStringTag,{value:"Module"}));async function ha(t,e){const{state:i,navigate:o,toast:n}=e,r=i.params||{},a=r.friendId||null,d=r.friendName||"Ami",l=!!r.isAccepting;await Ci(t,e,"friend",async({deckId:s,formation:p,starters:c,subsRaw:g,gcCardsEnriched:y,gcDefs:m,stadiumDef:u})=>{It(t);const v=async w=>{const b=w||[];l?await wa(t,e,s,b,m,u):await va(t,e,s,b,m,u,a,d)};if(!(y!=null&&y.length)){await v([]);return}ji(t,y,v)})}async function va(t,e,i,o,n,r,a,d){var b;const{state:l,navigate:s,toast:p}=e,c=l.user.id,{data:g,error:y}=await h.from("friend_match_invites").insert({inviter_id:c,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(y||!g){console.error("[Friend] Erreur création invitation:",y),p("Impossible de créer l'invitation","error"),s("home");return}t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${d}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let m=!1,u=null;const v=async()=>{u&&(u.unsubscribe(),u=null)};(b=document.getElementById("cancel-friend"))==null||b.addEventListener("click",async()=>{await v(),await h.from("friend_match_invites").update({status:"declined"}).eq("id",g.id),ot(t),s("home")}),u=h.channel(`friend_invite_${g.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${g.id}`},async({new:_})=>{m||_.status!=="accepted"||!_.match_id||(m=!0,await v(),await Bt(t,e,_.match_id,!0,{myGC:o,gcDefs:n,stadiumDef:r}))}).subscribe();const w=setInterval(async()=>{if(m)return;const{data:_}=await h.from("friend_match_invites").select("status, match_id").eq("id",g.id).single();(_==null?void 0:_.status)==="accepted"&&_.match_id&&(m=!0,clearInterval(w),await v(),await Bt(t,e,_.match_id,!0,{myGC:o,gcDefs:n,stadiumDef:r}))},3e3);setTimeout(async()=>{m||(clearInterval(w),await v(),p("Invitation expirée","info"),s("home"))},12e4)}async function wa(t,e,i,o,n,r){const{state:a,navigate:d,toast:l}=e,s=a.user.id,{data:p}=await h.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",s).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!p){l("Aucune invitation en attente","error"),d("home");return}const{data:c,error:g}=await h.rpc("accept_friend_invite",{p_invite_id:p.id,p_invitee_deck_id:i});if(g||!(c!=null&&c.success)){console.error("[Friend] Erreur accept_friend_invite:",g||c),l((c==null?void 0:c.error)||"Impossible de rejoindre le match","error"),d("home");return}await Bt(t,e,c.match_id,!1,{myGC:o,gcDefs:n,stadiumDef:r})}const Sn="#1A6B3C",dt="#D4A017",ni="var(--tile-bg)",ri="var(--tile-border)",At="var(--divider)",Xe="var(--tile-fg-on-page)",zt="var(--tile-fg-dim)",et="var(--tile-fg-faint)",si="var(--nav-fg,#fff)",zn="rgba(255,255,255,0.62)",_a="rgba(255,255,255,0.4)";async function ka(t,e){var o;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(o=e.state.params)==null?void 0:o.openLeagueId;if(i){e.state.params.openLeagueId=null,await pt(t,e,i);return}await tt(t,e)}async function tt(t,e,i="waiting"){var _,I;const{state:o}=e,n=o.profile.id,{data:r}=await h.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",n),a=(r||[]).map(f=>f.league_id),d={};(r||[]).forEach(f=>{d[f.league_id]={amount:f.prize_amount,claimed:f.prize_claimed}});const{data:l,error:s}=await h.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),p=s?(await h.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:l||[],g=(a.length?await h.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],y=g.filter(f=>f.status==="waiting"&&!f.is_archived),m=g.filter(f=>f.status==="active"&&!f.is_archived),u=g.filter(f=>f.is_archived||f.status==="finished");let v=u;if(u.length){const{data:f}=await h.from("mini_league_matches").select("league_id").in("league_id",u.map(j=>j.id)).or(`home_id.eq.${n},away_id.eq.${n}`).not("status","eq","bye"),P=new Set((f||[]).map(j=>j.league_id));v=u.filter(j=>P.has(j.id))}const w=p.filter(f=>!a.includes(f.id)),b=[{key:"waiting",label:"🟡 En attente",count:y.length+w.length},{key:"active",label:"🟢 En cours",count:m.length},{key:"archived",label:"📁 Archivées",count:v.length}];t.innerHTML=`
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
      ${b.map(f=>`<button class="ml-tab" data-tab="${f.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===f.key?Sn:"transparent"};background:none;font-size:12px;font-weight:${i===f.key?"900":"600"};color:${i===f.key?"#4ade80":_a};cursor:pointer">${f.label}${f.count?` (${f.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?$a(y,w,n):i==="active"?Ea(m,n):Sa(v,n,d)}
    </div>
  </div>`,(_=document.getElementById("ml-create-btn"))==null||_.addEventListener("click",()=>za(t,e)),(I=document.getElementById("ml-refresh-list"))==null||I.addEventListener("click",()=>tt(t,e,i)),t.querySelectorAll(".ml-tab").forEach(f=>f.addEventListener("click",()=>tt(t,e,f.dataset.tab))),t.querySelectorAll("[data-league-id]").forEach(f=>f.addEventListener("click",()=>pt(t,e,f.dataset.leagueId))),t.querySelectorAll("[data-join]").forEach(f=>f.addEventListener("click",P=>{P.stopPropagation(),Ln(t,e,f.dataset.join,f.dataset.type)})),t.querySelectorAll("[data-delete]").forEach(f=>f.addEventListener("click",P=>{P.stopPropagation(),Zi(t,e,f.dataset.delete,f.dataset.name,i)})),t.querySelectorAll("[data-claim-league]").forEach(f=>f.addEventListener("click",async P=>{P.stopPropagation(),f.disabled=!0,f.textContent="...";const{data:j,error:G}=await h.rpc("claim_mini_league_prize",{p_league_id:f.dataset.claimLeague,p_user_id:o.profile.id});if(G||!(j!=null&&j.success)){e.toast((j==null?void 0:j.error)||"Erreur lors de la récupération","error"),tt(t,e,i);return}if(!j.already_claimed){o.profile.credits=(o.profile.credits||0)+j.prize;const W=document.getElementById("nav-credits");W&&(W.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),e.toast(`💰 +${j.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}tt(t,e,i)}))}function Ti(t,e,i=!1,o=null){var l,s;const n=t.creator_id===e,r=t.pot||0,a=((s=(l=t.mini_league_members)==null?void 0:l[0])==null?void 0:s.count)||0,d=o&&o.amount>0&&!o.claimed;return`<div data-league-id="${t.id}" style="background:${ni};border:1px solid ${d?"rgba(212,160,23,0.5)":ri};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${Xe}">${t.name}</div>
      ${n?`<button data-delete="${t.id}" data-name="${t.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${zt};margin-bottom:${i||d?"10px":"0"}">
      <span>${t.type==="private"?"🔒":"🌐"} ${t.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${t.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${t.max_players}</span>
      <span>💰 ${(t.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${r>0?`<span style="color:${dt};font-weight:700">🏆 ${r.toLocaleString("fr")} cr.</span>`:""}
      ${t.current_day>0?`<span>📅 J${t.current_day}/${t.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${t.id}" data-type="${t.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(t.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
    ${d?`<button data-claim-league="${t.id}" class="btn btn-sm" style="width:100%;background:${dt};color:#141000;font-weight:900;border:none">💰 Récupérer ${o.amount.toLocaleString("fr")} cr.</button>`:""}
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(o=>o.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=o.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var m,u,v,w;const{toast:o}=e,n=document.getElementById("ml-name").value.trim(),r=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,d=((m=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:m.value)||"public",l=((u=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:u.value)||"aller",s=((w=(v=document.getElementById("ml-pwd"))==null?void 0:v.value)==null?void 0:w.trim())||null;if(!n){o("Le nom est obligatoire","error");return}if(a<100){o("Mise minimum : 100 crédits","error");return}if(d==="private"&&!s){o("Mot de passe requis","error");return}const{data:p,error:c}=await h.from("mini_leagues").insert({name:n,creator_id:e.state.profile.id,type:d,password:s,mode:l,max_players:r,entry_fee:a}).select().single();if(c){o("Erreur : "+c.message,"error");return}const{data:g}=await h.from("users").select("credits").eq("id",e.state.profile.id).single();if(((g==null?void 0:g.credits)||0)<a){await h.from("mini_leagues").delete().eq("id",p.id),o(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await h.from("users").update({credits:g.credits-a}).eq("id",e.state.profile.id),await h.from("mini_leagues").update({pot:a}).eq("id",p.id),await h.from("mini_league_members").insert({league_id:p.id,user_id:e.state.profile.id}),e.state.profile&&(e.state.profile.credits=g.credits-a);const y=document.getElementById("nav-credits");y&&(y.textContent=`💰 ${(e.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),o(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),pt(t,e,p.id)})}function La(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",e.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(e);const i=e.querySelector("#ml-pwd-input"),o=n=>{e.remove(),t(n)};setTimeout(()=>i==null?void 0:i.focus(),80),e.querySelector("#pwd-cancel").addEventListener("click",()=>o(null)),e.querySelector("#pwd-ok").addEventListener("click",()=>o(i.value.trim())),i.addEventListener("keydown",n=>{n.key==="Enter"&&o(i.value.trim())})})}async function Ln(t,e,i,o){var c;const{toast:n,state:r}=e,a=r.profile.id;let d=null;if(o==="private"&&(d=await La(),d===null))return;const{data:l,error:s}=await h.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:d});if(s||!(l!=null&&l.success)){console.error("[MiniLeague] join_mini_league:",s||l),n((l==null?void 0:l.error)||"Erreur lors de l'inscription","error");return}if(typeof e.refreshProfile=="function")await e.refreshProfile();else{const{data:g}=await h.from("users").select("credits").eq("id",a).single();r.profile&&g&&(r.profile.credits=g.credits)}const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${(((c=r.profile)==null?void 0:c.credits)||0).toLocaleString("fr")}`),n("✅ Inscrit ! Pot mis à jour.","success"),pt(t,e,i)}async function Ia(t,e,i,o){const{toast:n,state:r}=e,a=r.profile.id;if(!await new Promise(g=>{const y=document.createElement("div");y.className="modal-overlay",y.style.zIndex="2100",y.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${o.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(y),y.querySelector("#lv-ok").onclick=()=>{y.remove(),g(!0)},y.querySelector("#lv-cancel").onclick=()=>{y.remove(),g(!1)}}))return;const{data:l,error:s}=await h.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(s||!(l!=null&&l.success)){n((l==null?void 0:l.error)||"Erreur lors de la désinscription","error");return}const p=l.refund||o;r.profile&&(r.profile.credits=(r.profile.credits||0)+p);const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),n(`↩️ Désinscrit · +${p.toLocaleString("fr")} cr. remboursés`,"success"),tt(t,e,"waiting")}async function Zi(t,e,i,o,n){const{toast:r}=e;if(!confirm(`Supprimer définitivement "${o}" et tous ses matchs/membres ? Action irréversible.`))return;await h.from("mini_league_matches").delete().eq("league_id",i),await h.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await h.from("mini_leagues").delete().eq("id",i);if(a){r("Erreur suppression ("+a.message+")","error");return}r("Mini League supprimée avec succès","success"),tt(t,e,n)}async function Aa(t,e,i){await h.from("mini_leagues").update({is_archived:!0}).eq("id",i),e.toast("Mini League archivée","success"),tt(t,e,"archived")}async function pt(t,e,i){var I,f,P,j,G,W,Q,M,$;const{state:o,toast:n}=e,r=o.profile.id,[{data:a},{data:d},{data:l}]=await Promise.all([h.from("mini_leagues").select("*").eq("id",i).single(),h.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),h.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){n("Introuvable","error"),await tt(t,e);return}const s=(d||[]).some(x=>x.user_id===r),p=a.creator_id===r,c=(d||[]).map(x=>x.user).filter(Boolean),g=qa(c,l||[]),y=(l||[]).filter(x=>x.matchday===a.current_day),m=a.pot||0,u=a.entry_fee||100,v=y.length>0&&y.every(x=>x.status==="finished"||x.status==="bye"),w=a.current_day>=a.total_days,b=(d||[]).find(x=>x.user_id===r);t.innerHTML=`
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
        ${m>0?`<div style="font-size:12px;font-weight:900;color:${dt};margin-top:4px">🏆 ${m.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${ni};border:1px solid ${ri};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Xe}">👥 Joueurs (${c.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${zt};margin-bottom:10px">💰 ${u} cr./joueur → Pot estimé : ${(u*c.length).toLocaleString("fr")} cr. (🥇${Math.floor(u*c.length*.7).toLocaleString("fr")} · 🥈${Math.floor(u*c.length*.2).toLocaleString("fr")} · 🥉${Math.floor(u*c.length*.1).toLocaleString("fr")})</div>
        ${c.map(x=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${At}">
            <div style="width:36px;height:36px;border-radius:50%;background:${x.club_color2||Sn};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${x.club_color1||"#fff"}">${(x.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Xe}">${x.club_name||x.pseudo}</div><div style="font-size:11px;color:${et}">@${x.pseudo}</div></div>
            ${x.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
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
        ${y.map(x=>Oo(x,c,r,s)).join("")}
        ${p&&v&&!w?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&g.length?`
      <div style="background:${ni};border:1px solid ${ri};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${et};text-transform:uppercase;border-bottom:2px solid ${At}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${m>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${dt}">💰</th>`:""}
          </tr></thead>
          <tbody>${g.map((x,S)=>{const J=m>0&&a.status==="finished"?S===0?Math.floor(m*.7):S===1?Math.floor(m*.2):S===2?Math.floor(m*.1):0:0;return`<tr style="border-bottom:1px solid ${At};${x.userId===r?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${S===0?dt:S<3?"#4ade80":zt}">${["🥇","🥈","🥉"][S]||S+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Xe}">${x.clubName}</div><div style="font-size:10px;color:${et}">@${x.pseudo}</div></td>
              <td style="text-align:center;color:${zt}">${x.played}</td><td style="text-align:center;color:${zt}">${x.won}-${x.drawn}-${x.lost}</td>
              <td style="text-align:center;color:${x.goalDiff>=0?"#4ade80":"#ff6b6b"}">${x.goalDiff>=0?"+":""}${x.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Xe}">${x.points}</td>
              ${m>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${dt}">${J?J.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${ni};border:1px solid ${ri};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(x,S)=>S+1).reverse().map(x=>{const S=(l||[]).filter(J=>J.matchday===x);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${et};margin-bottom:6px">Journée ${x}</div>${S.map(J=>Oo(J,c,r,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${p&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${zt}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const _=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((I=document.getElementById("ml-back"))==null||I.addEventListener("click",()=>tt(t,e,_)),(f=document.getElementById("ml-refresh"))==null||f.addEventListener("click",async x=>{const S=x.currentTarget;S.style.opacity="0.5",await pt(t,e,i)}),(P=document.getElementById("ml-start-btn"))==null||P.addEventListener("click",()=>Ta(t,e,a,c)),(j=document.getElementById("ml-next-day"))==null||j.addEventListener("click",()=>Ma(t,e,i)),(G=document.getElementById("ml-join-now"))==null||G.addEventListener("click",()=>Ln(t,e,i,a.type)),(W=document.getElementById("ml-leave-btn"))==null||W.addEventListener("click",()=>Ia(t,e,i,u)),(Q=document.getElementById("ml-delete-btn"))==null||Q.addEventListener("click",()=>Zi(t,e,i,a.name,"waiting")),(M=document.getElementById("ml-delete-now"))==null||M.addEventListener("click",()=>Zi(t,e,i,a.name,_)),($=document.getElementById("ml-archive-btn"))==null||$.addEventListener("click",()=>Aa(t,e,i)),t.querySelectorAll("[data-play-match]").forEach(x=>{x.addEventListener("click",()=>{const S=y.find(J=>J.id===x.dataset.playMatch);S&&(ut(),e.navigate("match-mini-league",{mlMatchId:S.id,leagueId:i}))})}),a.status==="finished"&&b){const x=g.findIndex(S=>S.userId===r);x>=0&&x<3&&b.prize_amount>0&&!b.prize_claimed&&setTimeout(()=>Ca(t,e,a,b,x),400)}}function Oo(t,e,i,o,n=!1){const r=c=>e.find(g=>g.id===c);if(t.is_bye){const c=r(t.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${zt};text-align:center">🔵 ${(c==null?void 0:c.club_name)||(c==null?void 0:c.pseudo)||"?"} exempté(e)</div>`}const a=r(t.home_id),d=r(t.away_id),l=t.home_id===i||t.away_id===i,s=l&&t.status==="pending"&&o&&!n,p=t.status==="finished"?`${t.home_score} - ${t.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${l?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${l?"rgba(74,222,128,0.35)":At}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${t.status==="finished"?"#4ade80":et}">${p}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"?"}</div>
    ${s?`<button data-play-match="${t.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${t.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function Ta(t,e,i,o){const{toast:n,state:r}=e,a=ja(o.map(s=>s.id),i.mode),d=[];a.forEach((s,p)=>s.forEach(c=>d.push({league_id:i.id,matchday:p+1,home_id:c.home||c.bye,away_id:c.away||null,is_bye:!!c.bye,status:c.bye?"bye":"pending"})));const{error:l}=await h.from("mini_league_matches").insert(d);if(l){n("Erreur calendrier : "+l.message,"error");return}await h.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),n(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),pt(t,e,i.id)}async function Ma(t,e,i){const{data:o}=await h.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),n=(o.current_day||0)+1;if(n>(o.total_days||0)){pt(t,e,i);return}await h.from("mini_leagues").update({current_day:n}).eq("id",i),e.toast(`Journée ${n} commencée !`,"success"),pt(t,e,i)}async function Ca(t,e,i,o,n){var g,y;const{state:r,toast:a}=e,d=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],l=["🥇","🥈","🥉"][n],s=o.prize_amount||d[n]||0,p=o.prize_claimed,c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",c.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${l}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${n===0?"Champion !":n===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${dt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${p?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${dt}">${s.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${n===0?"70%":n===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${p?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${dt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${s.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(c),(g=c.querySelector("#prize-close"))==null||g.addEventListener("click",()=>c.remove()),(y=c.querySelector("#claim-prize-btn"))==null||y.addEventListener("click",async m=>{const u=m.currentTarget;u.disabled=!0,u.textContent="...";const{data:v,error:w}=await h.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:r.profile.id});if(w||!(v!=null&&v.success)){console.error("[MiniLeague] claim_mini_league_prize:",w||v),a((v==null?void 0:v.error)||"Erreur lors de la récupération","error"),u.disabled=!1,u.textContent=`💰 Récupérer ${s.toLocaleString("fr")} cr.`;return}if(v.already_claimed)a("Déjà récupéré précédemment","info");else{const b=(r.profile.credits||0)+v.prize;r.profile&&(r.profile.credits=b);const _=document.getElementById("nav-credits");_&&(_.textContent=`💰 ${b.toLocaleString("fr")}`),a(`💰 +${v.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}c.remove(),pt(t,e,i.id)})}function ja(t,e){const o=t.length%2===0?[...t]:[...t,null],n=o.length;let r=o.slice(1);const a=[];for(let d=0;d<n-1;d++){const l=[],s=[o[0],...r];for(let p=0;p<n/2;p++){const c=s[p],g=s[n-1-p];c===null?l.push({bye:g}):g===null?l.push({bye:c}):l.push({home:c,away:g})}a.push(l),r=[r[r.length-1],...r.slice(0,-1)]}return e==="aller-retour"?[...a,...a.map(d=>d.map(l=>l.bye?l:{home:l.away,away:l.home}))]:a}function qa(t,e){const i={};return t.forEach(o=>{i[o.id]={userId:o.id,pseudo:o.pseudo,clubName:o.club_name||o.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),e.filter(o=>o.status==="finished"&&!o.is_bye&&o.home_score!=null).forEach(o=>{const n=i[o.home_id],r=i[o.away_id];!n||!r||(n.played++,r.played++,n.goalsFor+=o.home_score,n.goalsAgainst+=o.away_score,r.goalsFor+=o.away_score,r.goalsAgainst+=o.home_score,o.home_score>o.away_score?(n.won++,n.points+=3,r.lost++):o.home_score<o.away_score?(r.won++,r.points+=3,n.lost++):(n.drawn++,n.points++,r.drawn++,r.points++),n.goalDiff=n.goalsFor-n.goalsAgainst,r.goalDiff=r.goalsFor-r.goalsAgainst)}),Object.values(i).sort((o,n)=>n.points-o.points||n.goalDiff-o.goalDiff||n.goalsFor-o.goalsFor)}async function Ho(t,e){const{state:i,navigate:o,toast:n}=e,r=i.params||{},a=r.leagueId||null,d=r.mlMatchId||null,l=i.user.id;if(!d||!a){n("Match introuvable","error"),o("mini-league");return}const{data:s,error:p}=await h.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",d).single();if(p||!s){n("Match introuvable","error"),o("mini-league",{openLeagueId:a});return}if(s.home_id!==l&&s.away_id!==l){n("Vous ne faites pas partie de ce match","error"),o("mini-league",{openLeagueId:a});return}const c=s.home_id===l;if(s.match_id){await Bt(t,e,s.match_id,c,{mlLeagueId:a,mlMatchId:d});return}await Ci(t,e,"mini_league",async({deckId:g,gcCardsEnriched:y,gcDefs:m,stadiumDef:u})=>{It(t);const v=async w=>{const{data:b,error:_}=await h.rpc("start_mini_league_match",{p_ml_match_id:d,p_user_id:l,p_deck_id:g});if(_||!(b!=null&&b.success)){console.error("[MiniLeague] start_mini_league_match error:",_||b),n((b==null?void 0:b.error)||"Impossible de lancer le match","error"),o("mini-league",{openLeagueId:a});return}if(b.matched){await Bt(t,e,b.match_id,c,{mlLeagueId:a,mlMatchId:d,myGC:w||[],gcDefs:m,stadiumDef:u});return}await Ba(t,e,{mlMatchId:d,leagueId:a,amIHome:c,chosenGC:w,gcDefs:m,stadiumDef:u})};if(!(y!=null&&y.length)){await v([]);return}ji(t,y,v)})}function Ba(t,e,{mlMatchId:i,leagueId:o,amIHome:n,chosenGC:r,gcDefs:a,stadiumDef:d}){return new Promise(l=>{var u;const{navigate:s}=e;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let p=!1;const c=async v=>{if(!p){if(p=!0,clearInterval(m),y)try{y.unsubscribe()}catch{}v&&await Bt(t,e,v,n,{mlLeagueId:o,mlMatchId:i,myGC:r||[],gcDefs:a,stadiumDef:d}),l()}};(u=document.getElementById("wait-back"))==null||u.addEventListener("click",()=>{if(p=!0,clearInterval(m),y)try{y.unsubscribe()}catch{}s("mini-league",{openLeagueId:o}),l()});const g=async()=>{if(p)return;const{data:v}=await h.from("mini_league_matches").select("match_id").eq("id",i).single();v!=null&&v.match_id&&c(v.match_id)},y=h.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},v=>{var w;(w=v.new)!=null&&w.match_id&&c(v.new.match_id)}).subscribe(),m=setInterval(g,3e3);g()})}const Uo={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Gt(t,e,i=0){return e?(Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0)+(e===t.job||e===t.job2?i:0):0}async function Da(t,e){t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await xo(t,e)}async function xo(t,e){var P,j,G,W,Q,M;const{state:i,toast:o,navigate:n}=e;Wt(n,i.profile,"market","/icons/",o);const{data:r}=await h.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:a}=await h.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),{data:d}=await h.from("cards").select("player_id").eq("owner_id",i.profile.id).eq("card_type","player").not("player_id","is",null),l=new Set((d||[]).map($=>$.player_id)),{data:s}=await h.from("decks").select("id").eq("owner_id",i.profile.id),p=(s||[]).map($=>$.id);let c=new Set;if(p.length){const{data:$}=await h.from("deck_cards").select("card:cards(player_id)").in("deck_id",p);c=new Set(($||[]).map(x=>{var S;return(S=x.card)==null?void 0:S.player_id}).filter(Boolean))}const g=(r||[]).filter($=>$.seller_id!==i.profile.id),y=a||[];t.innerHTML=`
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
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-top:2px">${g.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
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
  </div>`;let m="buy",u="";const v=()=>{var $,x,S,J,L,K,ce,A;return{name:((($=document.getElementById("flt-name"))==null?void 0:$.value)||"").toLowerCase().trim(),club:(((x=document.getElementById("flt-club"))==null?void 0:x.value)||"").toLowerCase().trim(),country:(((S=document.getElementById("flt-country"))==null?void 0:S.value)||"").toLowerCase().trim(),job:((J=document.getElementById("flt-job"))==null?void 0:J.value)||"",rarity:((L=document.getElementById("flt-rarity"))==null?void 0:L.value)||"",sort:((K=document.getElementById("flt-sort"))==null?void 0:K.value)||"",note1:parseInt((ce=document.getElementById("flt-note1"))==null?void 0:ce.value)||0,note2:parseInt((A=document.getElementById("flt-note2"))==null?void 0:A.value)||0}};function w($){const x=v(),S=$.filter(L=>{var xe,fe,Me;const K=(xe=L.card)==null?void 0:xe.player;if(!K)return!1;const ce=`${K.firstname} ${K.surname_real}`.toLowerCase(),A=(((fe=K.clubs)==null?void 0:fe.encoded_name)||"").toLowerCase(),E=(K.country_code||"").toLowerCase(),Z=((Me=L.card)==null?void 0:Me.evolution_bonus)||0,O=Gt(K,K.job,Z),te=K.job2?Gt(K,K.job2,Z):0;if(x.name&&!ce.includes(x.name)||x.club&&!A.includes(x.club)||x.country&&!E.includes(x.country)||x.job&&K.job!==x.job||x.rarity&&K.rarity!==x.rarity||x.note1&&O<x.note1||x.note2&&te<x.note2)return!1;const de=l.has(K.id);return!(u==="owned"&&!de||u==="new"&&de||u==="indeck"&&!c.has(K.id))}),J=L=>{var A,E;const K=(A=L.card)==null?void 0:A.player;if(!K)return 0;const ce=((E=L.card)==null?void 0:E.evolution_bonus)||0;return Math.max(Gt(K,K.job,ce),K.job2?Gt(K,K.job2,ce):0)};return x.sort==="note_desc"?[...S].sort((L,K)=>J(K)-J(L)):x.sort==="note_asc"?[...S].sort((L,K)=>J(L)-J(K)):x.sort==="price_asc"?[...S].sort((L,K)=>L.price-K.price):x.sort==="price_desc"?[...S].sort((L,K)=>K.price-L.price):S}function b($){var O,te,de;const x=(O=$.card)==null?void 0:O.player;if(!x)return"";const S=((te=$.card)==null?void 0:te.evolution_bonus)||0,J=(i.profile.credits||0)>=$.price,L=l.has(x.id),K=c.has(x.id),ce=qe({...x,_evolution_bonus:S},{width:140}),A=L?"font-size:12px;padding:8px 10px;background:linear-gradient(135deg,#D4A017,#f0c040);border:none;color:#1a1a1a;font-weight:900;display:flex;align-items:center;justify-content:center;gap:5px;width:100%":"font-size:12px;padding:8px 10px;display:flex;align-items:center;justify-content:center;gap:5px;width:100%",E=K?'<img src="/icons/nav-decks.png" alt="Dans une de tes équipes" style="width:16px;height:16px;object-fit:contain;flex-shrink:0">':"",Z=[L?"Tu possèdes déjà ce joueur":"",K?"Il est aligné dans une de tes équipes":""].filter(Boolean).join(" · ");return`<div class="mkt-buy-tile">
      ${ce}
      <div class="mkt-price">${$.price.toLocaleString("fr")} cr.</div>
      <div class="mkt-seller">Vendeur : ${((de=$.seller)==null?void 0:de.pseudo)||"—"}</div>
      <button class="btn btn-primary btn-sm" data-buy="${$.id}" ${J?"":"disabled"} style="${A}" title="${Z}"><span>${J?L?"🟡 Acheter":"Acheter":"Trop cher"}</span>${E}</button>
    </div>`}function _($){var te,de,xe,fe;const x=(te=$.card)==null?void 0:te.player;if(!x)return"";const S=((de=$.card)==null?void 0:de.evolution_bonus)||0,J=Gt(x,x.job,S),L=x.job2?Gt(x,x.job2,S):0,K=$.status==="sold",ce=x.country_code?`https://flagsapi.com/${x.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,A=Uo[x.job]||"#bbb",E=x.job2?Uo[x.job2]||"#bbb":null,Z=x.job==="GK"?"#fff":A,O=x.job2==="GK"?"#fff":E;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${K?"opacity:0.7":""}">
      ${ce?`<img src="${ce}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(xe=x.clubs)!=null&&xe.logo_url?`<img src="${x.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${A};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${Z};font-family:Arial Black,Arial">${J}</span>
        </div>
        ${L?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${E};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${O};font-family:Arial Black,Arial">${L}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${x.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x.surname_real}</div>
        <div style="font-size:10px;color:${K?"#22c55e":"#999"};margin-top:1px">
          ${K?`✅ Vendu à ${((fe=$.buyer)==null?void 0:fe.pseudo)||"—"} · ${$.sold_at?new Date($.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date($.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${$.price.toLocaleString("fr")}</div>
        ${K?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${$.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function I(){const $=document.getElementById("mkt-content"),x=document.getElementById("mkt-filters");if($){if(x.style.display=m==="buy"?"flex":"none",m==="buy"){const S=w(g);$.innerHTML=S.length?`<div class="mkt-buy-grid">${S.map(b).join("")}</div>`:'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const S=y.filter(L=>L.status==="active").sort((L,K)=>new Date(K.listed_at)-new Date(L.listed_at)),J=y.filter(L=>L.status==="sold").sort((L,K)=>new Date(K.sold_at||K.listed_at)-new Date(L.sold_at||L.listed_at));$.innerHTML=(S.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${S.length})</div>`+S.map(_).join(""):"")+(J.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${J.length})</div>`+J.map(_).join(""):"")+(!S.length&&!J.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}$.querySelectorAll("[data-buy]").forEach(S=>S.addEventListener("click",()=>Fa(S.dataset.buy,g,t,e))),$.querySelectorAll("[data-cancel]").forEach(S=>S.addEventListener("click",()=>Na(S.dataset.cancel,t,e)))}}if(t.querySelectorAll(".mkt-tab").forEach($=>{$.addEventListener("click",()=>{m=$.dataset.tab,t.querySelectorAll(".mkt-tab").forEach(x=>{const S=x===$;x.style.background=S?"var(--green)":"var(--tile-bg)",x.style.color=S?"#fff":"var(--tile-fg-dim)",x.style.borderColor=S?"var(--green)":"var(--tile-border)"}),I()})}),(j=(P=e.state)==null?void 0:P.params)!=null&&j.search||(W=(G=e.state)==null?void 0:G.params)!=null&&W.club||(M=(Q=e.state)==null?void 0:Q.params)!=null&&M.country){const $=document.getElementById("flt-name"),x=document.getElementById("flt-club"),S=document.getElementById("flt-country");$&&e.state.params.search&&($.value=e.state.params.search),x&&e.state.params.club&&(x.value=e.state.params.club),S&&e.state.params.country&&(S.value=e.state.params.country),e.state.params={},I()}let f;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-sort","flt-note1","flt-note2"].forEach($=>{var x,S;(x=document.getElementById($))==null||x.addEventListener("input",()=>{clearTimeout(f),f=setTimeout(I,250)}),(S=document.getElementById($))==null||S.addEventListener("change",()=>{clearTimeout(f),f=setTimeout(I,100)})}),t.querySelectorAll(".mkt-own-btn").forEach($=>{$.addEventListener("click",()=>{u=$.dataset.own||"",t.querySelectorAll(".mkt-own-btn").forEach(x=>x.classList.toggle("active",x===$)),I()})}),I()}async function Fa(t,e,i,o){const{state:n,toast:r,refreshProfile:a}=o,d=e.find(p=>p.id===t);if(!d)return;const l=d.price;if((n.profile.credits||0)<l){r("Crédits insuffisants","error");return}Ra(d,async()=>{var g,y;const{error:p}=await h.rpc("buy_market_card",{p_listing_id:t,p_buyer_id:n.profile.id});if(p){r("Erreur achat : "+p.message,"error");return}await a();const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(n.profile.credits||0).toLocaleString("fr")}`),r("✅ Carte achetée !","success"),await Pa(n.profile.id,(y=(g=d.card)==null?void 0:g.player)==null?void 0:y.id,r),await xo(i,o)})}async function Pa(t,e,i){if(!e)return;const{data:o}=await h.from("deck_cards").select("id, deck_id, decks!inner(owner_id)").eq("wanted_player_id",e).eq("decks.owner_id",t);if(!(o!=null&&o.length))return;const{data:n}=await h.from("cards").select("id").eq("owner_id",t).eq("player_id",e).eq("card_type","player").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!n)return;const{error:r}=await h.from("deck_cards").update({card_id:n.id,wanted_player_id:null}).in("id",o.map(a=>a.id));!r&&o.length&&(i==null||i(`🔄 ${o.length} deck(s) complété(s) avec ce joueur`,"success"))}function Ra(t,e){var a;const i=(a=t.card)==null?void 0:a.player,o=i?`${i.firstname} ${i.surname_real}`:"cette carte",n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",n.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${o} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${t.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(n);const r=d=>{n.remove(),d&&e()};n.querySelector("#buy-cancel").addEventListener("click",()=>r(!1)),n.querySelector("#buy-ok").addEventListener("click",()=>r(!0)),n.addEventListener("click",d=>{d.target===n&&r(!1)})}async function Na(t,e,i){const{toast:o}=i,{data:n}=await h.from("market_listings").select("card_id").eq("id",t).single();if(await h.from("market_listings").update({status:"cancelled"}).eq("id",t),n!=null&&n.card_id){const{count:r}=await h.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",n.card_id).eq("status","active");r||await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",n.card_id)}o("Annonce retirée","success"),xo(e,i)}async function Ga(t,e){var y,m,u,v,w;const{state:i,navigate:o}=e,n=((m=(y=e==null?void 0:e.state)==null?void 0:y.params)==null?void 0:m.tab)||"ranked";t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:r},{data:a},{data:d}]=await Promise.all([h.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").order("mmr",{ascending:!1}).limit(100),h.rpc("get_mini_league_leaderboard"),h.rpc("get_random_leaderboard")]);let l=n;const s=b=>b<3?["#D4A017","#a0a0a0","#cd7f32"][b]:"var(--green)",p=b=>b<3?"#000":"#fff";function c(){var I,f,P;const b=document.getElementById("rankings-legend");b&&(b.innerHTML=l==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const _=document.getElementById("rankings-list");if(_){if(l==="ranked"){const j=r||[];_.innerHTML=j.length>0?j.map((G,W)=>{const Q=xt(G.mmr??450),M=ki(G.mmr??450,Q),$=Q.label+(M?" "+M:""),x=(G.ranked_wins||0)+(G.ranked_losses||0)+(G.ranked_draws||0),S=x>0?Math.round((G.ranked_wins||0)/x*100):0,J=G.id===i.profile.id,L=(G.placement_matches||0)<10;return`
          <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${J?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${W<3?["#D4A017","#a0a0a0","#cd7f32"][W]:"rgba(255,255,255,0.08)"};color:${W<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${W<3?"16":"13"}px">${W<3?["🥇","🥈","🥉"][W]:W+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${Q.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${G.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${G.club_name}${L?"":` · ${S}% WR`}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:13px;font-weight:900;letter-spacing:0.3px;color:${Q.color};white-space:nowrap">${L?"❓ Placement":$.toUpperCase()}</div>
              ${L?"":`<div style="font-size:11px;color:var(--tile-fg-dim);margin-top:1px">${(G.mmr??450).toLocaleString("fr")} MMR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(l==="mini-league"){const j=a||[];_.innerHTML=j.length>0?j.map((G,W)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${G.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(W)};color:${p(W)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${W<3?"16":"13"}px">${W<3?["🥇","🥈","🥉"][W]:W+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${G.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${G.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${G.top1} 🥈${G.top2} 🥉${G.top3}</div>
            <div style="color:var(--tile-fg-dim)">${G.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const j=d||[];_.innerHTML=j.length>0?j.map((G,W)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${G.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(W)};color:${p(W)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${W<3?"16":"13"}px">${W<3?["🥇","🥈","🥉"][W]:W+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${G.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${G.club_name}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:16px;font-weight:900;color:#D4A017" title="Score de classement — tient compte du nombre de matchs joués">📊 ${G.wilson_score}</div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">${G.wins}/${G.total} V</div>
            <div style="font-size:9px;color:var(--green);font-weight:700;margin-top:2px">${G.win_pct}%</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}(I=document.getElementById("tab-ranked"))!=null&&I.style&&(document.getElementById("tab-ranked").style.cssText=g(l==="ranked")),(f=document.getElementById("tab-mini-league"))!=null&&f.style&&(document.getElementById("tab-mini-league").style.cssText=g(l==="mini-league")),(P=document.getElementById("tab-random"))!=null&&P.style&&(document.getElementById("tab-random").style.cssText=g(l==="random"))}}const g=b=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${b?"900":"400"};background:${b?"var(--green)":"rgba(255,255,255,0.06)"};color:${b?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-ranked" style="${g(l==="ranked")}">⚔️ Ranked</button>
        <button id="tab-mini-league" style="${g(l==="mini-league")}">🏆 Mini Leagues</button>
        <button id="tab-random" style="${g(l==="random")}">🎲 Random</button>
      </div>
      <div id="rankings-legend"></div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,c(),(u=document.getElementById("tab-ranked"))==null||u.addEventListener("click",()=>{l="ranked",c()}),(v=document.getElementById("tab-mini-league"))==null||v.addEventListener("click",()=>{l="mini-league",c()}),(w=document.getElementById("tab-random"))==null||w.addEventListener("click",()=>{l="random",c()})}async function Oa(t,e){var W,Q,M,$;const{state:i,navigate:o,toast:n}=e,r=i.profile;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:d}]=await Promise.all([h.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),h.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",r.id).single()]);if(!d){n("Erreur chargement profil","error"),o("home");return}if(!a){const x=d.mmr??450,S=xt(x);Hi(x);const J=Math.round(450+(x-450)*.5),L=xt(J),{data:K}=await h.from("users").select("id, pseudo, club_name, mmr, rank_tier").order("mmr",{ascending:!1}).limit(100),ce=(K||[]).findIndex(A=>A.id===d.id)+1;t.innerHTML=`
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
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;text-align:center;border:2px solid ${S.color}40">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Ton classement</div>
        <div style="font-size:44px;margin-bottom:2px">${S.emoji}</div>
        <div style="font-size:18px;font-weight:900;color:${S.color};letter-spacing:2px;text-transform:uppercase">${S.label}</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px">MMR ${x} ${ce?`· #${ce} au classement général`:""}</div>
      </div>

      <!-- Top 100 -->
      <div>
        <div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:8px">🏆 Classement général — Top 100</div>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto">
          ${(K||[]).map((A,E)=>{const Z=xt(A.mmr??450),O=A.id===d.id;return`<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:10px;
              background:${O?"rgba(212,160,23,0.15)":"rgba(0,0,0,0.25)"};
              border:1px solid ${O?"#D4A017":"transparent"}">
              <div style="width:26px;text-align:center;font-size:12px;font-weight:900;color:rgba(255,255,255,0.5)">#${E+1}</div>
              <div style="font-size:18px">${Z.emoji}</div>
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${A.pseudo}</div>
                <div style="font-size:10px;color:rgba(255,255,255,0.4)">${A.club_name||"—"}</div>
              </div>
              <div style="font-size:13px;font-weight:900;color:${Z.color}">${A.mmr??450}</div>
            </div>`}).join("")||'<div style="text-align:center;color:rgba(255,255,255,0.4);font-size:12px;padding:16px">Aucun classement disponible.</div>'}
        </div>
      </div>

      <!-- Aperçu saison suivante -->
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;border:1.5px dashed rgba(255,255,255,0.2)">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;text-align:center">📅 Aperçu — prochaine saison</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:24px">
          <div style="text-align:center;opacity:.6">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Actuel</div>
            <div style="font-size:24px">${S.emoji}</div>
            <div style="font-size:12px;font-weight:700;color:${S.color}">${x}</div>
          </div>
          <div style="font-size:20px;color:rgba(255,255,255,0.3)">→</div>
          <div style="text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Recalculé</div>
            <div style="font-size:28px">${L.emoji}</div>
            <div style="font-size:14px;font-weight:900;color:${L.color}">${J}</div>
          </div>
        </div>
        <div style="font-size:11px;color:rgba(255,255,255,0.35);text-align:center;margin-top:10px">Ton MMR est recalculé vers la moyenne à chaque nouvelle saison, pour repartir sur des bases équilibrées.</div>
      </div>
    </div>`,(W=document.getElementById("ranked-back"))==null||W.addEventListener("click",()=>o("home"));return}const l=d.mmr??450,s=d.mmr_deviation??350,p=d.mmr_volatility??.06,c=d.placement_matches??0,g=c<10,y=Math.max(0,10-c),m=xt(l),u=Hi(l),v=ki(l,m),w=m.label+(v?" "+v:""),b=So.findIndex(x=>x.id===m.id),_=So[b+1]||null,I=m.id==="master"?"master":`${m.id}_${v}`,f={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},P=(d.ranked_wins||0)+(d.ranked_losses||0)+(d.ranked_draws||0),j=P>0?Math.round((d.ranked_wins||0)/P*100):0,G=qn.map(x=>{const S=x.key===I,J=x.division==="III"||x.division===null;return`
    <div ${S?'data-current-tier="true"':""} style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:4px;opacity:${S?1:.45};
      transform:${S?"scale(1.15)":"scale(1)"};transition:all 0.3s;min-width:${J?"60px":"46px"}">
      <div style="font-size:${S?"34px":J?"26px":"17px"}">${J?x.emoji:"●"}</div>
      <div style="font-size:${S?"13px":"11px"};color:${x.color};font-weight:${S?"900":"600"};letter-spacing:0.4px;white-space:nowrap">${x.division?x.division:x.label.toUpperCase()}</div>
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
      <div class="rk-tier-label" style="font-size:22px;font-weight:900;color:${m.color};letter-spacing:3px;text-transform:uppercase">${w}</div>
    </div>

    <!-- Progression bar -->
    ${m.id!=="master"?`
    <div class="rk-progress" style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${m.emoji} ${m.label}</span>
        ${_?`<span>${_.emoji} ${_.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${u}%;background:linear-gradient(90deg,${m.color},${m.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${u}% vers ${_?_.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama : 16 échelons, répartis sur toute la largeur (scrollable si ça déborde) -->
    <div id="tiers-scroll" class="rk-tiers-scroll" style="display:flex;justify-content:space-between;align-items:flex-end;gap:10px;padding:10px 16px;overflow-x:auto;scrollbar-width:none">
      ${G}
    </div>

    <!-- Placement / Stats -->
    ${g?`
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
        <div style="font-size:20px;font-weight:900;color:#D4A017">${j}%</div>
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
  </div>`,(Q=document.getElementById("ranked-back"))==null||Q.addEventListener("click",()=>o("home")),(M=document.getElementById("ranked-leaderboard-btn"))==null||M.addEventListener("click",()=>o("rankings",{tab:"ranked"})),requestAnimationFrame(()=>{const x=document.getElementById("tiers-scroll"),S=x==null?void 0:x.querySelector("[data-current-tier]");x&&S&&(x.scrollLeft=S.offsetLeft-x.clientWidth/2+S.clientWidth/2)}),($=document.getElementById("ranked-play-btn"))==null||$.addEventListener("click",()=>{ut(),o("match",{matchMode:"ranked",rankedData:{mmr:l,rd:s,sigma:p,isPlacement:g}})})}async function Ha(t,{state:e,navigate:i,toast:o}){const n=e.profile;if(!n)return;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await h.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${n.id},away_id.eq.${n.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(r||[]).filter(p=>p.status==="finished"),l=(r||[]).filter(p=>p.status==="in_progress");function s(p){const c=p.home_id===n.id;c?p.home_score:p.away_score,c?p.away_score:p.home_score;const g=p.winner_id===n.id,y=p.home_score===p.away_score&&p.status==="finished",m=p.status!=="finished"?"…":y?"N":g?"V":"D",u=p.status!=="finished"||y?"#888":g?"#1A6B3C":"#c0392b";let v=a[p.mode]||p.mode;p.away_id===null&&!v.startsWith("IA")&&(v="IA");const b=p.home_id===n.id?p.away:p.home;let _;p.away_id===null?_=v:b?_=`${b.club_name||b.pseudo} (${b.pseudo})`:_="Adversaire";let I="";p.status==="in_progress"&&Date.now()-new Date(p.created_at).getTime()>3600*1e3&&(I=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const f=new Date(p.created_at),P=f.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+f.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),j=p.status==="finished"?`${p.home_score} - ${p.away_score}`:`${p.home_score||0} - ${p.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${_}${I}</div>
        <div style="font-size:11px;color:var(--gray-600)">${v} · ${P}${p.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${j}</span>
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
  </div>`}Bn(Fn);const _e={user:null,profile:null,page:"home",params:{}};function bt(t,e="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=t,o.className=`show ${e}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function Ua(t,e,i=""){document.getElementById("modal-title").textContent=t,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i;const o=document.getElementById("modal-overlay");o.style.visibility="",o.classList.remove("hidden")}function eo(){const t=document.getElementById("modal-overlay");t.style.visibility="",t.classList.add("hidden")}async function ai(){if(!_e.user)return;const{data:t}=await h.from("users").select("*").eq("id",_e.user.id).single();t&&(_e.profile=t)}const In="mw_theme";function li(){return localStorage.getItem(In)||"dark"}function Ko(t){var e;localStorage.setItem(In,t),_i(t),(e=_e.profile)!=null&&e.id&&h.from("users").update({theme:t}).eq("id",_e.profile.id).then(()=>{})}function _i(t){var e,i;document.documentElement.setAttribute("data-theme",t),t==="club"&&(document.documentElement.style.setProperty("--club-color1",((e=_e.profile)==null?void 0:e.club_color1)||"#0a0f0a"),document.documentElement.style.setProperty("--club-color2",((i=_e.profile)==null?void 0:i.club_color2)||"#080d08"))}function kt(t,e={}){_e.page=t,_e.params=e,An()}async function An(){var o,n,r,a;const t=document.getElementById("page-content");if(!t)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===_e.page)});const e=document.getElementById("nav-credits");e&&_e.profile&&(e.textContent=`💰 ${(_e.profile.credits||0).toLocaleString("fr")}`);const i={state:_e,navigate:kt,toast:bt,openModal:Ua,closeModal:eo,refreshProfile:ai};switch(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',_e.page){case"home":await Pi(t,i);break;case"home2":await Pi(t,i);break;case"game":await _r(t,i);break;case"settings":await bn(t,i);break;case"collection":await Ir(t,i);break;case"decks":await Yi(t,i);break;case"boosters":await Yn(t,i);break;case"ranked":await Oa(t,i);break;case"match":{const d=_e.params&&_e.params.matchMode||"vs_ai_easy";d==="random"?await Qi(t,i,!1):d==="ranked"?await Qi(t,i,!0):d==="friend"?await ha(t,i,(o=_e.params)==null?void 0:o.friendId,(n=_e.params)==null?void 0:n.friendName):d==="mini_league"||d==="mini-league"?await Ho(t,i,(r=_e.params)==null?void 0:r.mlMatchId,(a=_e.params)==null?void 0:a.leagueId):await Hr(t,i);break}case"market":await Da(t,i);break;case"rankings":await Ga(t,i);break;case"matches":await Ha(t,i);break;case"friends":await xr(t,i);break;case"mini-league":await ka(t,i);break;case"match-mini-league":{const d=_e.params||{};await Ho(t,i,d.mlMatchId,d.leagueId);break}default:await Pi(t,i)}}function Ka(){var o,n;const t=document.getElementById("app"),e=_e.profile;if(!e)return;const i="/icons/";t.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.08.05-0840" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(r=>{r.addEventListener("click",a=>{a.preventDefault(),kt(r.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>kt("home")),document.getElementById("nav-credits").addEventListener("click",()=>kt("boosters")),(o=document.getElementById("journal-btn"))==null||o.addEventListener("click",()=>Va()),(n=document.getElementById("settings-btn"))==null||n.addEventListener("click",()=>kt("settings"))}async function Va(){const{data:t}=await h.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const n=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}function Ya(t,{onPlay:e}){var o;const i="/icons/";t.style.cssText="",t.innerHTML=`
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
  </div>`,(o=t.querySelector("#pl-play-btn"))==null||o.addEventListener("click",e)}async function Wa(){_i(li()),document.getElementById("modal-overlay").addEventListener("click",o=>{o.target===o.currentTarget&&eo()}),document.getElementById("modal-close").addEventListener("click",eo);const{data:{session:t}}=await h.auth.getSession();if(!t){Vo(),Ya(document.getElementById("app"),{onPlay:()=>zo(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:bt})});return}_e.user=t.user,await ai(),_i(li()),Vo();try{const{data:o}=await h.from("formation_links_overrides").select("formation, links"),n={};(o||[]).forEach(r=>{n[r.formation]=r.links}),Dn(n)}catch(o){console.warn("Impossible de charger les overrides de formation:",o)}if(!_e.profile){Rn(document.getElementById("app"),{state:_e,navigate:async()=>{await ai(),_i(li()),Oi()},toast:bt,refreshProfile:ai});return}h.rpc("heartbeat").then(()=>{}).catch(()=>{}),setInterval(()=>{h.rpc("heartbeat").then(()=>{}).catch(()=>{})},45e3);const e=Array.isArray(_e.profile.pending_boosters)?_e.profile.pending_boosters:[];if(!_e.profile.onboarding_done&&e.length>0){ir(document.getElementById("app"),{state:_e,toast:bt,refreshProfile:ai,navigate:()=>{Oi(),setTimeout(()=>To(_e.profile,kt,bt),800)}});return}Oi(),new URLSearchParams(location.search).get("tutorial")==="1"?(history.replaceState({},"",location.pathname),setTimeout(()=>gn(_e.profile,kt,bt),800)):setTimeout(()=>To(_e.profile,kt,bt),800),h.auth.onAuthStateChange(async(o,n)=>{o==="SIGNED_OUT"&&(_e.user=null,_e.profile=null,document.getElementById("app").innerHTML="",zo(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:bt}))})}function Ja(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function qi(){const t=document.getElementById("app");t&&(t.style.height=Ja()+"px")}window.addEventListener("resize",qi);window.addEventListener("orientationchange",()=>setTimeout(qi,150));window.visualViewport&&window.visualViewport.addEventListener("resize",qi);function Oi(){const t=()=>{var i;(i=_e.user)!=null&&i.id&&h.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",_e.user.id).then(()=>{})};t(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(t,6e4);const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",qi(),Ka(),An()}function Vo(){const t=document.getElementById("app-loader"),e=document.getElementById("app");e&&(e.style.display=""),t&&(t.classList.add("zoom-out"),setTimeout(()=>t.style.display="none",500))}function Tn(t){var o;const e=document.getElementById("app-loader");if(e&&(e.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${t||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(o=document.getElementById("boot-retry"))==null||o.addEventListener("click",()=>window.location.reload())}Wa().catch(t=>{console.error("Échec du démarrage:",t),Tn()});setTimeout(()=>{const t=document.getElementById("app-loader");t&&t.style.display!=="none"&&!t.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Tn("Le serveur met trop de temps à répondre.")},12e3);
