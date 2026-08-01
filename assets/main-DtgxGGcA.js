const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/match-shared-DxhZaXlw.js","assets/match-shared-D_M6t_P4.css"])))=>i.map(i=>d[i]);
import{w as Xi,s as h,x as Ho,F as _t,g as Ct,o as it,m as ai,n as Ot,r as je,k as St,y as Ri,G as Ge,t as Qi,z as Uo,C as zi,q as Zi,I as jt,J as Ti,L as Ni,p as vi,O as wi,P as ji,Q as Ii,T as Ht,U as si,V as zt,W as Ko,X as li,Y as Qe,Z as di,_ as wt,$ as ot,a0 as zn,a1 as Vo,a2 as eo,a3 as Tn,a4 as Yo,a5 as Tt,a6 as qi,v as In,a7 as An,d as Mn}from"./match-shared-DxhZaXlw.js";const Cn="/";async function ko(t,{navigate:e,toast:i}){let o="login";const r=await Xi("signup_access_code_required"),n=()=>{var d,l,s,c,f,y,g,x;const a=o==="login";if(t.innerHTML=`
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
        <img src="${Cn}icons/logo-withname.png" alt="Manager Wars" style="height:44px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(d=document.getElementById("tab-login-btn"))==null||d.addEventListener("click",()=>{o="login",n()}),(l=document.getElementById("tab-reg-btn"))==null||l.addEventListener("click",()=>{o="register",n()}),a){(s=document.getElementById("login-password"))==null||s.addEventListener("keydown",u=>{var w;u.key==="Enter"&&((w=document.getElementById("login-btn"))==null||w.click())});let m=null,b=!1;r&&((c=document.getElementById("login-access-code"))==null||c.addEventListener("input",u=>{const w=u.target.value,v=document.getElementById("login-access-code-status"),k=document.getElementById("login-btn");if(clearTimeout(m),b=!1,k&&(k.disabled=!0,k.style.opacity="0.45",k.style.cursor="not-allowed"),!w){v&&(v.textContent="");return}v&&(v.textContent="⏳ Vérification…",v.style.color="rgba(255,255,255,0.4)"),m=setTimeout(async()=>{const{data:p,error:T}=await h.rpc("check_signup_password",{input_password:w});if(T){v&&(v.textContent="Erreur de vérification.",v.style.color="#f87171");return}b=!!p,v&&(v.textContent=b?"✅ Code valide":"❌ Code incorrect",v.style.color=b?"#4ade80":"#f87171"),k&&(k.disabled=!b,k.style.opacity=b?"1":"0.45",k.style.cursor=b?"pointer":"not-allowed")},400)})),(f=document.getElementById("login-btn"))==null||f.addEventListener("click",async()=>{var z;const u=document.getElementById("login-email").value.trim(),w=document.getElementById("login-password").value,v=((z=document.getElementById("login-access-code"))==null?void 0:z.value)||"",k=document.getElementById("login-error");if(k.textContent="",!u||!w){k.textContent="Remplissez tous les champs.";return}if(r){const{data:C}=await h.rpc("check_signup_password",{input_password:v});if(!C){k.textContent="Code d'accès incorrect.";return}}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:T}=await h.auth.signInWithPassword({email:u,password:w});if(p.textContent="⚽ Se connecter",p.disabled=!1,T){k.textContent=T.message.includes("Invalid")?"Email ou mot de passe incorrect.":T.message;return}window.location.reload()})}else{(y=document.getElementById("reg-confirm"))==null||y.addEventListener("keydown",u=>{var w;u.key==="Enter"&&((w=document.getElementById("reg-btn"))==null||w.click())});let m=null,b=!1;r&&((g=document.getElementById("reg-access-code"))==null||g.addEventListener("input",u=>{const w=u.target.value,v=document.getElementById("access-code-status"),k=document.getElementById("reg-btn");if(clearTimeout(m),b=!1,k&&(k.disabled=!0,k.style.opacity="0.45",k.style.cursor="not-allowed"),!w){v&&(v.textContent="");return}v&&(v.textContent="⏳ Vérification…",v.style.color="rgba(255,255,255,0.4)"),m=setTimeout(async()=>{const{data:p,error:T}=await h.rpc("check_signup_password",{input_password:w});if(T){v&&(v.textContent="Erreur de vérification.",v.style.color="#f87171");return}b=!!p,v&&(v.textContent=b?"✅ Code valide":"❌ Code incorrect",v.style.color=b?"#4ade80":"#f87171"),k&&(k.disabled=!b,k.style.opacity=b?"1":"0.45",k.style.cursor=b?"pointer":"not-allowed")},400)})),(x=document.getElementById("reg-btn"))==null||x.addEventListener("click",async()=>{var N;const u=document.getElementById("reg-email").value.trim(),w=document.getElementById("reg-password").value,v=document.getElementById("reg-confirm").value,k=((N=document.getElementById("reg-access-code"))==null?void 0:N.value)||"",p=document.getElementById("reg-error");if(p.textContent="",!u||!w||!v){p.textContent="Remplissez tous les champs.";return}if(!u.includes("@")||!u.includes(".")){p.textContent="Adresse email invalide.";return}if(w.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(w!==v){p.textContent="Les mots de passe ne correspondent pas.";return}if(r){const{data:V}=await h.rpc("check_signup_password",{input_password:k});if(!V){p.textContent="Code d'accès incorrect.";return}}const T=document.getElementById("reg-btn");T.textContent="⏳ Création…",T.disabled=!0;const{data:z,error:C}=await h.auth.signUp({email:u,password:w});if(T.textContent="🚀 Créer mon compte",T.disabled=!1,C){C.message.includes("already registered")||C.message.includes("already exists")||C.message.includes("User already")?p.textContent="Un compte existe déjà avec cette adresse email.":p.textContent=C.message;return}if(z!=null&&z.user&&Array.isArray(z.user.identities)&&z.user.identities.length===0){p.textContent="Un compte existe déjà avec cette adresse email.";return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),o="login",n(),setTimeout(()=>{const V=document.getElementById("login-email");V&&(V.value=u)},50)})}};n()}function jn(t,{state:e,navigate:i,toast:o,refreshProfile:r}){let n="#1A6B3C",a="#D4A017";t.innerHTML=`
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
  `;function d(){var x;const s=document.getElementById("logo-preview"),c=document.getElementById("logo-initials"),f=((x=document.getElementById("setup-club"))==null?void 0:x.value)||"MW",y=f.trim().split(" ").filter(Boolean),g=y.length>=2?(y[0][0]+y[1][0]).toUpperCase():f.slice(0,2).toUpperCase();s&&(s.style.background=a,s.style.borderColor=n),c&&(c.textContent=g,c.style.color=n)}document.getElementById("color1").addEventListener("input",s=>{n=s.target.value,document.getElementById("swatch1").style.background=n,d()}),document.getElementById("color2").addEventListener("input",s=>{a=s.target.value,document.getElementById("swatch2").style.background=a,d()});function l(s){document.querySelectorAll(".setup-step").forEach(c=>c.classList.remove("active")),document.getElementById(`step-${s}`).classList.add("active"),document.getElementById("step-num").textContent=s,document.getElementById("progress-fill").style.width=`${Math.round(s/3*100)}%`,s===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("step1-error");if(c.textContent="",s.length<3){c.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await h.from("users").select("id").eq("pseudo",s).maybeSingle();if(f){c.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const s=document.getElementById("setup-club").value.trim(),c=document.getElementById("step2-error");if(c.textContent="",s.length<2){c.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await h.from("users").select("id").eq("club_name",s).maybeSingle();if(f){c.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),y=document.getElementById("step3-finish");f.textContent="",y.disabled=!0,y.textContent="Création en cours…";try{const{error:g}=await h.from("users").insert({id:e.user.id,pseudo:s,club_name:c,club_color1:n,club_color2:a,credits:15e3});if(g)throw g;await qn(e.user.id),await r(),o(`Bienvenue ${s} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){f.textContent=g.message,y.disabled=!1,y.textContent="🚀 Créer mon profil !"}})}async function qn(t){const e=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1},{type:"stadium",count:1}];try{await h.from("users").update({pending_boosters:e,onboarding_done:!1,first_booster_opened:!1}).eq("id",t)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Bn="modulepreload",Dn=function(t){return"/"+t},$o={},Wo=function(e,i,o){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),d=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(i.map(l=>{if(l=Dn(l),l in $o)return;$o[l]=!0;const s=l.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const f=document.createElement("link");if(f.rel=s?"stylesheet":Bn,s||(f.as="script"),f.crossOrigin="",f.href=l,d&&f.setAttribute("nonce",d),document.head.appendChild(f),s)return new Promise((y,g)=>{f.addEventListener("load",y),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(a){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=a,window.dispatchEvent(d),!d.defaultPrevented)throw a}return r.then(a=>{for(const d of a||[])d.status==="rejected"&&n(d.reason);return e().catch(n)})},Jo="mw_sound_volume";function to(){const t=localStorage.getItem(Jo);if(t===null)return 100;const e=parseInt(t,10);return Number.isFinite(e)?Math.max(0,Math.min(100,e)):100}function Pn(t){localStorage.setItem(Jo,String(Math.max(0,Math.min(100,Math.round(t)))))}function io(){return to()===0}function _i(t){return Math.max(0,Math.min(1,t*(to()/100)))}function oo(t,e=1){if(io())return null;try{const i=new Audio(t);return i.volume=_i(e),i.play().catch(()=>{}),i}catch{return null}}let bt=null,Gi=null,Eo=.3;function Xo(t,e=.3){if(Eo=e,bt&&Gi===t&&!bt.paused){bt.volume=_i(Eo);return}if(Nt(),!io())try{const i=new Audio(t);i.loop=!0,i.volume=_i(e),i.play().catch(()=>{}),bt=i,Gi=t}catch{}}function Nt(){if(bt)try{bt.pause(),bt.currentTime=0}catch{}bt=null,Gi=null}let ei=null;function Qo(t,e=.6){if(Ke(),!io())try{const i=new Audio(t);i.volume=_i(e),i.play().catch(()=>{}),ei=i}catch{}}function Ke(){if(ei)try{ei.pause(),ei.currentTime=0}catch{}ei=null}async function Zo(t=null){const e=new Date().toISOString().slice(0,10),{data:i}=await h.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const o=i.filter(a=>!(a.available_from&&e<a.available_from||a.available_until&&e>a.available_until));if(!o.length)return[];let r=o;if(t){const a=o.filter(d=>d.max_per_user!=null);if(a.length){const{data:d}=await h.from("booster_claims").select("booster_id").eq("user_id",t).in("booster_id",a.map(s=>s.id)),l={};(d||[]).forEach(s=>{l[s.booster_id]=(l[s.booster_id]||0)+1}),r=o.filter(s=>s.max_per_user==null?!0:(l[s.id]||0)<s.max_per_user)}}if(!r.length)return[];const{data:n}=await h.from("booster_drop_rates").select("*").in("booster_id",r.map(a=>a.id)).order("sort_order");return r.map(a=>({...a,rates:(n||[]).filter(d=>d.booster_id===a.id)}))}async function Fn(t,e){const{data:i}=await h.from("booster_configs").select("max_per_user").eq("id",e).single();i!=null&&i.max_per_user&&await h.from("booster_claims").insert({user_id:t,booster_id:e})}function Rn(t){if(!(t!=null&&t.length))return null;const e=t.reduce((o,r)=>o+Number(r.percentage),0);let i=Math.random()*e;for(const o of t)if(i-=Number(o.percentage),i<=0)return o;return t[t.length-1]}const en=()=>Object.keys(_t),Nn=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Oi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Gn(t){const e=t.player;if(!e)return"";const i=t.evolution_bonus||0;return je({...e,_evolution_bonus:i},{width:140})}function no(t){var r;const e={};(t.rates||[]).forEach(n=>{e[n.card_type]=(e[n.card_type]||0)+Number(n.percentage||0)});const i=((r=Object.entries(e).sort((n,a)=>a[1]-n[1])[0])==null?void 0:r[0])||"player",o=t.image_url||"booster-players.png";return{id:t.id,img:"/icons/"+o,name:t.name,sub:`${t.card_count} carte(s)`,cost:t.price_type==="credits"&&t.price_credits||0,costLabel:t.price_type==="credits"?`${(t.price_credits||0).toLocaleString("fr")} crédits`:t.price_type==="pub"?"1 pub":"Gratuit",cardCount:t.card_count||5,type:i,isPub:t.price_type==="pub",rates:t.rates||[],allow_duplicates:t.allow_duplicates!==!1,_boosterId:t.id,_raw:t}}async function On(t,e,i,o){if(t.reward_type==="credits"){const r=(e.credits||0)+(t.credits_amount||0),{error:n}=await h.from("users").update({credits:r}).eq("id",e.id);if(n)throw n;return e.credits=r,{type:"credits",amount:t.credits_amount}}if(t.reward_type==="card"){const{data:r}=await h.from("players").select("firstname, surname_real, rarity").eq("id",t.player_id).single(),{error:n}=await h.from("cards").insert({owner_id:e.id,player_id:t.player_id,card_type:"player"});if(n)throw n;return{type:"card",player:r}}if(t.reward_type==="booster"){const{data:r}=await h.from("booster_configs").select("*").eq("id",t.booster_config_id).single(),{data:n}=await h.from("booster_drop_rates").select("*").eq("booster_id",t.booster_config_id);if(!r)throw new Error("Booster introuvable (peut-être supprimé depuis).");const a=no({...r,rates:n});let d=[];return a.type==="formation"?d=await so(e,0):a.type==="game_changer"?d=await ao(e,a.cardCount,0):a.type==="player"?d=await ro(e,a.cardCount,0):d=await ki(e,{...a,cost:0}),{type:"booster",name:r.name,cards:d,boosterUI:a}}throw new Error("Type de récompense inconnu.")}async function Hn(t,{state:e,navigate:i,toast:o}){var f,y,g;Kt(i,e.profile,"boosters","/icons/",o);const r=((f=e.profile)==null?void 0:f.credits)||0;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let n=[];try{n=(await Zo((y=e.user)==null?void 0:y.id)).map(no)}catch(x){console.warn("Erreur chargement boosters DB, fallback hardcodé",x)}n.length||(n=Nn.map(x=>({...x,rates:[],isPub:x.id==="players_pub"})));const a=await h.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.profile.id).then(x=>x.data||[]),d=new Set(a.filter(x=>x.card_type==="stadium").map(x=>x.stadium_id)),l=new Set(a.filter(x=>x.card_type==="formation").map(x=>x.formation)),s=new Set(a.filter(x=>x.card_type==="game_changer").map(x=>x.gc_type)),c={};for(const x of n){if(x.allow_duplicates!==!1||!((g=x.rates)!=null&&g.length))continue;const m=[...new Set((x.rates||[]).map(u=>u.card_type))];let b=!1;for(const u of m)if(u==="stadium"){const{data:w}=await h.from("stadium_definitions").select("id");if((w||[]).some(v=>!d.has(v.id))){b=!0;break}}else if(u==="game_changer"){const{data:w}=await h.from("gc_definitions").select("name").eq("is_active",!0);if((w||[]).some(v=>!s.has(v.name))){b=!0;break}}else if(u==="formation"){const{FORMATION_LINKS:w}=await Wo(async()=>{const{FORMATION_LINKS:v}=await import("./match-shared-DxhZaXlw.js").then(k=>k.a8);return{FORMATION_LINKS:v}},__vite__mapDeps([0,1]));if(Object.keys(w).some(v=>!l.has(v))){b=!0;break}}else{b=!0;break}b||(c[x.id]=!0)}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${r.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${n.map(x=>{const m=x.cost===0||r>=x.cost,b=c[x.id]===!0;return`<div class="booster-card ${!m||b?"disabled":""}" data-booster="${x.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${x.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${x.img}" alt="${x.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${x.name}</div>
            <div class="desc">${x.sub}</div>
            <div class="cost">${x.costLabel}</div>
            ${m?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
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
  </div>`,t.querySelectorAll(".booster-card:not(.disabled)").forEach(x=>{x.addEventListener("click",async()=>{const m=n.find(b=>b.id===x.dataset.booster);if(m){x.style.opacity="0.5",x.style.pointerEvents="none";try{await Un(m,{state:e,toast:o,navigate:i,container:t})}catch(b){o(b.message,"error"),x.style.opacity="",x.style.pointerEvents=""}}})}),t.querySelectorAll(".booster-info-btn").forEach(x=>{x.addEventListener("click",m=>{m.stopPropagation();const b=n.find(u=>u.id===x.dataset.boosterId);Jn(b)})})}async function Un(t,{state:e,toast:i,navigate:o,container:r}){var f,y;if(t.cost>0&&e.profile.credits<t.cost){i("Crédits insuffisants","error");return}if(t.isPub){if(!await Xi("pub_mode")){Ho();return}await Qn()}const{data:n}=await h.from("cards").select("card_type, player_id, formation").eq("owner_id",e.profile.id),a=new Set((n||[]).filter(g=>g.card_type==="player").map(g=>g.player_id)),d=new Set((n||[]).filter(g=>g.card_type==="formation").map(g=>g.formation));let l=[],s=null;try{if((f=t.rates)!=null&&f.length)l=await ki(e.profile,t);else{const g=t.type||"player";g==="player"?l=await ro(e.profile,t.cardCount,t.cost):g==="game_changer"?l=await ao(e.profile,t.cardCount,t.cost):g==="formation"?l=await so(e.profile,t.cost):l=await ki(e.profile,t)}}catch(g){s=g.message||String(g),console.error("[Booster] Erreur:",g)}if(l!=null&&l.length&&t._boosterId&&await Fn(e.user.id,t._boosterId),!(l!=null&&l.length)){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",g.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${s||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(g),(y=g.querySelector("#anim-close-err"))==null||y.addEventListener("click",()=>g.remove());return}l.forEach(g=>{g.card_type==="player"&&g.player?g.isDuplicate=a.has(g.player.id):g.card_type==="formation"&&(g.isDuplicate=d.has(g.formation))});const{data:c}=await h.from("users").select("*").eq("id",e.profile.id).single();c&&(e.profile=c),tn(e.profile.id,t,l),lo(l,t,o)}function Kn(){const t=Math.random()*100;return t<.5?"legende":t<2?"special":t<10?"normal_high":"normal_low"}function gt(t){return Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Vn(t,e){let i;switch(e){case"legende":i=t.filter(o=>o.rarity==="legende"),i.length||(i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=t.filter(o=>gt(o)>=6));break;case"special":i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=t.filter(o=>gt(o)>=6));break;case"normal_high":i=t.filter(o=>o.rarity==="normal"&&gt(o)>=6),i.length||(i=t.filter(o=>gt(o)>=6));break;default:i=t.filter(o=>o.rarity==="normal"&&gt(o)>=1&&gt(o)<=5),i.length||(i=t.filter(o=>o.rarity==="normal"));break}return i.length||(i=t),i[Math.floor(Math.random()*i.length)]}async function ki(t,e){if(e.cost>0){const{error:y}=await h.from("users").update({credits:t.credits-e.cost}).eq("id",t.id);if(y)throw y;t.credits-=e.cost,Vt(t.credits)}const i=e.allow_duplicates!==!1;let o=[];const{data:r,error:n}=await h.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.id);if(n){const{data:y}=await h.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",t.id);o=y||[]}else o=r||[];const a=new Set(o.filter(y=>y.card_type==="player").map(y=>y.player_id)),d=new Set(o.filter(y=>y.card_type==="formation").map(y=>y.formation)),l=new Set(o.filter(y=>y.card_type==="game_changer").map(y=>y.gc_type)),s=new Set(o.filter(y=>y.card_type==="stadium").map(y=>y.stadium_id).filter(Boolean)),c=new Set,f=[];for(let y=0;y<(e.cardCount||5);y++){const g=Rn(e.rates);if(g){if(g.card_type==="player"){const x=z=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[z]||z,m=g.rarity?x(g.rarity):null;let b=h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);m&&(b=b.eq("rarity",m));const{data:u}=await b;let w=u||[];if((g.note_min||g.note_max)&&(w=w.filter(z=>{const C=Math.max(Number(z.note_g)||0,Number(z.note_d)||0,Number(z.note_m)||0,Number(z.note_a)||0);return(!g.note_min||C>=g.note_min)&&(!g.note_max||C<=g.note_max)})),w.length||(g.note_min||g.note_max?(w=u||[],console.warn("[Booster] Aucun joueur avec note",g.note_min,"-",g.note_max,"— fallback rareté uniquement")):w=u||[]),!w.length)continue;let v=w.filter(z=>!c.has(z.id));if(i)v.length||(v=w);else if(v=v.filter(z=>!a.has(z.id)),!v.length)continue;const k=v[Math.floor(Math.random()*v.length)];c.add(k.id);const p=a.has(k.id),{data:T}=await h.from("cards").insert({owner_id:t.id,player_id:k.id,card_type:"player"}).select().single();T&&(f.push({...T,player:k,isDuplicate:p}),h.rpc("record_transfer",{p_card_id:T.id,p_player_id:k.id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(g.card_type==="game_changer"){const{data:x}=await h.from("gc_definitions").select("id,name,color,effect,image_url,gc_type").eq("is_active",!0).eq("gc_type","game_changer"),m=x!=null&&x.length?x:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],b=i?m:m.filter(k=>!l.has(k.name));if(!i&&!b.length)continue;const u=b[Math.floor(Math.random()*b.length)],w=u.name,{data:v}=await h.from("cards").insert({owner_id:t.id,card_type:"game_changer",gc_type:w,gc_definition_id:u.id||null}).select().single();v&&f.push({...v,_gcDef:u})}else if(g.card_type==="formation"){const x=en(),m=i?x:x.filter(v=>!d.has(v));if(!i&&!m.length)continue;const b=m[Math.floor(Math.random()*m.length)],u=d.has(b),{data:w}=await h.from("cards").insert({owner_id:t.id,card_type:"formation",formation:b}).select();w!=null&&w[0]&&f.push({...w[0],isDuplicate:u})}else if(g.card_type==="stadium"){const{data:x,error:m}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(m){console.error("[Booster] stadium_definitions:",m.message);continue}if(!(x!=null&&x.length)){console.warn("[Booster] Aucun stade en DB");continue}const b=i?x:x.filter(k=>!s.has(k.id));if(!i&&!b.length)continue;const u=b[Math.floor(Math.random()*b.length)],{data:w,error:v}=await h.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:u.id}).select("id,card_type,stadium_id").single();if(v){console.error("[Booster] insert stadium card:",v.message);continue}w&&f.push({...w,rarity:"normal",_stadiumDef:u})}}}return f}async function ro(t,e,i){if(i>0){const{error:s}=await h.from("users").update({credits:t.credits-i}).eq("id",t.id);if(s)throw s;t.credits-=i,Vt(t.credits)}const{data:o}=await h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const r=o.filter(s=>s.job==="GK"),n=o.filter(s=>s.job!=="GK"),a=!t.first_booster_opened&&r.length>0,d=[];for(let s=0;s<e;s++){const c=s===0&&a?r:s===0?n:o,f=Kn(),y=Vn(c,f);y&&d.push(y)}a&&await h.from("users").update({first_booster_opened:!0}).eq("id",t.id);const{data:l}=await h.from("cards").insert(d.map(s=>({owner_id:t.id,player_id:s.id,card_type:"player"}))).select();return(l||[]).forEach((s,c)=>{h.rpc("record_transfer",{p_card_id:s.id,p_player_id:d[c].id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((s,c)=>({...l[c],player:s}))}async function ao(t,e,i){const{error:o}=await h.from("users").update({credits:t.credits-i}).eq("id",t.id);if(o)throw o;t.credits-=i,Vt(t.credits);const{data:r}=await h.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),n=r!=null&&r.length?r:Object.keys(Oi).map(f=>({name:f,gc_type:"game_changer"})),a=Array.from({length:e},()=>n[Math.floor(Math.random()*n.length)]),d=a.map(f=>({owner_id:t.id,card_type:"game_changer",gc_type:f.name,gc_definition_id:f.id||null})),{data:l,error:s}=await h.from("cards").insert(d).select();return s&&console.error("[Booster GC] Erreur insert:",s.message,s),(l||[]).map((f,y)=>({...f,_gcDef:a[y]||null}))}async function so(t,e){const{error:i}=await h.from("users").update({credits:t.credits-e}).eq("id",t.id);if(i)throw i;t.credits-=e,Vt(t.credits);const{data:o}=await h.from("cards").select("formation").eq("owner_id",t.id).eq("card_type","formation"),r=new Set((o||[]).map(c=>c.formation)),n=en(),a=n[Math.floor(Math.random()*n.length)],d=r.has(a),{data:l,error:s}=await h.from("cards").insert({owner_id:t.id,card_type:"formation",formation:a}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),(l||[]).map(c=>({...c,isDuplicate:d}))}async function Yn(t,e){const{data:i}=await h.from("cards").select("stadium_id").eq("owner_id",t.id).eq("card_type","stadium"),o=new Set((i||[]).map(s=>s.stadium_id).filter(Boolean)),{data:r}=await h.from("stadium_definitions").select("*");if(!(r!=null&&r.length))throw new Error("Aucun stade configuré en base.");const n=r[Math.floor(Math.random()*r.length)],a=o.has(n.id),{data:d,error:l}=await h.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:n.id}).select();return l&&console.error("[Booster Stade] Erreur insert:",l.message,l),(d||[]).map(s=>({...s,isDuplicate:a,_stadiumDef:n}))}async function tn(t,e,i){try{const o=(i||[]).map(r=>{var n,a,d,l,s;return{card_type:r.card_type,name:r.card_type==="player"?[(n=r.player)==null?void 0:n.firstname,(a=r.player)==null?void 0:a.surname_real].filter(Boolean).join(" "):((d=r._stadiumDef)==null?void 0:d.name)||((l=r._gcDef)==null?void 0:l.name)||r.formation||r.gc_type||null,rarity:((s=r.player)==null?void 0:s.rarity)||null,note:r.current_note??null,is_duplicate:!!r.isDuplicate}});await h.from("booster_openings").insert({user_id:t,booster_name:(e==null?void 0:e.name)||null,booster_type:(e==null?void 0:e.type)||null,cards:o,nb_cards:o.length})}catch(o){console.warn("[Booster] journalisation ignorée:",o==null?void 0:o.message)}}function lo(t,e,i,o=null){var ne,S;if(!t||t.length===0){const E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",E.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(E),(ne=E.querySelector("#anim-close-err"))==null||ne.addEventListener("click",()=>E.remove());return}t=[...t].sort((E,U)=>{const $=E.player?gt(E.player):-1;return(U.player?gt(U.player):-1)-$});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
      <div id="reveal-btns" style="display:none;flex-direction:row;gap:10px;width:100%;max-width:400px;margin-top:4px">
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
  `,document.body.appendChild(r);let n=!1;const a=document.getElementById("pack-cut-zone"),d=document.getElementById("pack-blade");let l=!1;const s=E=>E.touches&&E.touches[0]?E.touches[0].clientX:E.clientX;function c(E){n||(l=!0,d.style.opacity="1",f(E))}function f(E){if(!l||n)return;const U=a.getBoundingClientRect(),$=s(E)-U.left,te=Math.max(0,Math.min(1,$/U.width));d.style.width=te*U.width+"px",te>=.82&&g()}function y(){n||(l=!1,d.style.transition="width .2s ease, opacity .2s ease",d.style.width="0",d.style.opacity="0",setTimeout(()=>{n||(d.style.transition="")},220))}function g(){var U;if(n)return;n=!0,l=!1,d.style.width="100%",d.style.opacity="1",(U=document.getElementById("cut-flash"))==null||U.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const E=document.getElementById("cut-hint");E&&(E.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{d.style.opacity="0",document.getElementById("pack-phase").style.display="none",u(0)},620)}a.addEventListener("pointerdown",c),window.addEventListener("pointermove",f),window.addEventListener("pointerup",y),a.addEventListener("touchstart",c,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",y);let x=0,m=!1;const b=new Set;function u(E){x=E,document.getElementById("reveal-phase").style.display="flex",w(),v(E,0),C()}function w(){const E=document.getElementById("card-dots");E&&(E.innerHTML=t.map((U,$)=>`<div class="card-dot" data-i="${$}" style="width:8px;height:8px;border-radius:50%;background:${$===x?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),E.querySelectorAll(".card-dot").forEach(U=>U.addEventListener("click",()=>p(parseInt(U.dataset.i)))))}function v(E,U){var pe,ce;const $=t[E],te=document.getElementById("card-counter"),me=document.getElementById("card-track");te&&(te.textContent=`Carte ${E+1} / ${t.length}`);const A=document.getElementById("reveal-btns");A&&(A.style.display=E===t.length-1?"flex":"none");const G=$.card_type==="player"&&((pe=$.player)==null?void 0:pe.rarity)==="legende",be=!b.has(E);if(b.add(E),$.card_type==="player"&&$.player){const q=$.player,K=q.job||"ATT";(Number(K==="GK"?q.note_g:K==="DEF"?q.note_d:K==="MIL"?q.note_m:q.note_a)||0)+($.evolution_bonus||0)}const W=q=>{me.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${G?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Wn($)}</div>
          ${$.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const K=document.getElementById("current-card-wrap");U!==0?(K.style.transition="none",K.style.transform=`translateX(${U>0?100:-100}%)`,requestAnimationFrame(()=>{K.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",K.style.transform="translateX(0)"})):K.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),q||G?V():Z(),w()};be&&((ce=$.player)==null?void 0:ce.rarity)==="legende"&&$.card_type==="player"&&$.player?k($,()=>W(!0)):W(!1)}function k(E,U){var le;m=!0;const $=E.player,te=`https://flagsapi.com/${$.country_code}/flat/64.png`,me=(le=$.clubs)==null?void 0:le.logo_url,A=Ct($),G=$.job||"ATT",be=Number(G==="GK"?$.note_g:G==="DEF"?$.note_d:G==="MIL"?$.note_m:$.note_a)||0,W=E.evolution_bonus||0,pe=be+W,ce=$.rarity==="legende",q=pe>=18,K=document.getElementById("walkout-overlay"),se=document.getElementById("walkout-stage");if(!K||!se){m=!1,U();return}let ie=null;ce&&(ie=oo("/sounds/Legendary.mp3",.8)),K.style.display="flex";const Y=()=>{const ue=se.firstElementChild;ue&&(ue.classList.remove("wo-in"),ue.classList.add("wo-out"))},F=1800,J=400;se.innerHTML=`<img class="wo-in" src="${te}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(Y,F),setTimeout(()=>{var ue;se.innerHTML=me?`<img class="wo-in" src="${me}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((ue=$.clubs)==null?void 0:ue.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},F+J),setTimeout(Y,F*2+J),setTimeout(()=>{se.innerHTML=A?`<img class="wo-in" src="${A}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(F+J)*2),setTimeout(Y,(F+J)*2+F);const O=q?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[G]||"#fff";setTimeout(()=>{se.innerHTML=`<div class="wo-in" style="
        font-size:${q?"120px":"90px"};font-weight:900;color:${O};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${O}, 0 0 60px ${O};
        ${q?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${pe}
      </div>`,q&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(F+J)*3),setTimeout(Y,(F+J)*3+F),setTimeout(()=>{K.style.display="none",se.innerHTML="",m=!1,ie&&!ce&&ie.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),U()},(F+J)*4)}function p(E){if(m||E<0||E>=t.length||E===x)return;const U=E>x?1:-1;x=E,v(E,U)}function T(){p(x+1)}function z(){p(x-1)}function C(){const E=document.getElementById("card-viewport");if(!E||E._swipeBound)return;E._swipeBound=!0;let U=0,$=0,te=0,me=!1;const A=ce=>ce.touches?ce.touches[0].clientX:ce.clientX,G=ce=>ce.touches?ce.touches[0].clientY:ce.clientY,be=ce=>{me=!0,U=A(ce),$=G(ce),te=0},W=ce=>{if(!me)return;te=A(ce)-U;const q=G(ce)-$;if(Math.abs(te)<Math.abs(q))return;const K=document.getElementById("current-card-wrap");K&&(K.style.transition="none",K.style.transform=`translateX(${te*.6}px) rotate(${te*.02}deg)`)},pe=()=>{if(!me)return;me=!1;const ce=document.getElementById("current-card-wrap"),q=55;te<=-q&&x<t.length-1?T():te>=q&&x>0?z():ce&&(ce.style.transition="transform .2s ease",ce.style.transform="translateX(0)")};E.addEventListener("pointerdown",be),E.addEventListener("pointermove",W),E.addEventListener("pointerup",pe),E.addEventListener("pointercancel",pe),E.addEventListener("touchstart",be,{passive:!0}),E.addEventListener("touchmove",W,{passive:!0}),E.addEventListener("touchend",pe),E.addEventListener("click",ce=>{if(Math.abs(te)>8)return;const q=E.getBoundingClientRect();ce.clientX-q.left>q.width/2?T():z()})}let N=null;function V(){const E=document.getElementById("fireworks-canvas");if(!E)return;E.width=window.innerWidth,E.height=window.innerHeight;const U=E.getContext("2d"),$=[];function te(){const A=Math.random()*E.width,G=Math.random()*E.height*.6,be=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],W=be[Math.floor(Math.random()*be.length)];for(let pe=0;pe<60;pe++){const ce=Math.PI*2/60*pe,q=2+Math.random()*5;$.push({x:A,y:G,vx:Math.cos(ce)*q,vy:Math.sin(ce)*q,alpha:1,color:W,size:2+Math.random()*3})}}te(),N=setInterval(te,600);function me(){if(document.getElementById("fireworks-canvas")){U.clearRect(0,0,E.width,E.height);for(let A=$.length-1;A>=0;A--){const G=$[A];if(G.x+=G.vx,G.y+=G.vy+.08,G.vy*=.98,G.alpha-=.018,G.alpha<=0){$.splice(A,1);continue}U.globalAlpha=G.alpha,U.fillStyle=G.color,U.beginPath(),U.arc(G.x,G.y,G.size,0,Math.PI*2),U.fill()}U.globalAlpha=1,(N!==null||$.length>0)&&requestAnimationFrame(me)}}me()}function Z(){N!==null&&(clearInterval(N),N=null);const E=document.getElementById("fireworks-canvas");E&&E.getContext("2d").clearRect(0,0,E.width,E.height)}if(o){const E=document.getElementById("reveal-btns");E&&(E.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(S=document.getElementById("reveal-next"))==null||S.addEventListener("click",()=>{Z(),r.remove(),o()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{Z(),r.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{Z(),r.remove(),i("boosters")})}function Wn(t){var e,i,o,r;if(t.card_type==="player"&&t.player)return Gn(t);if(t.card_type==="game_changer"){const n=t._gcDef,a=(n==null?void 0:n.name)||t.gc_type||"Game Changer",d=(n==null?void 0:n.effect)||((e=Oi[t.gc_type])==null?void 0:e.desc)||"",l=n!=null&&n.image_url?`/icons/${n.image_url}`:null,s=((i=Oi[t.gc_type])==null?void 0:i.icon)||"⚡";return it(a,l,s,d,{width:170})}if(t.card_type==="formation")return ai(t.formation,_t[t.formation],{width:160});if(t.card_type==="stadium"){const n=t._stadiumDef,a=(n==null?void 0:n.name)||"Stade",d=((o=n==null?void 0:n.club)==null?void 0:o.encoded_name)||(n==null?void 0:n.country_code)||"—",l=n!=null&&n.image_url?`/icons/${n.image_url}`:((r=n==null?void 0:n.club)==null?void 0:r.logo_url)||(n!=null&&n.country_code?`https://flagsapi.com/${n.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),s=`${d}<br>+10 ⭐ joueurs alliés`;return Ot(a,l,s,{width:170})}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Jn(t){var e,i;if((e=t==null?void 0:t.rates)!=null&&e.length){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const r={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},n={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};o.innerHTML=`
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
      </div>`,document.body.appendChild(o),o.addEventListener("click",a=>{a.target===o&&o.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>o.remove());return}Xn()}function Xn(){const t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(t),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.getElementById("odds-close").addEventListener("click",()=>t.remove())}function Qn(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText=`
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
    `,document.body.appendChild(e);try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(r){console.warn("[AdSense]",r)}let i=5;const o=setInterval(()=>{i--;const r=document.getElementById("mw-ad-cd");r&&(r.textContent=i),i<=0&&(clearInterval(o),e.remove(),t(!0))},1e3)})}async function Zn(t,{state:e,navigate:i,toast:o,refreshProfile:r}){var y,g;const{data:n}=await h.from("users").select("*").eq("id",e.user.id).single();n&&(e.profile=n);let a=Array.isArray((y=e.profile)==null?void 0:y.pending_boosters)?[...e.profile.pending_boosters]:[];if(!a.length){await h.from("users").update({onboarding_done:!0}).eq("id",e.user.id),i("home");return}let d=null;try{const m=(await Zo()).find(b=>(b.name||"").toLowerCase().includes("new player"));m&&(d=no(m))}catch(x){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',x)}const l=a.length;let s=0;t.innerHTML=`
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
  </div>`;const c=async()=>{await h.from("users").update({pending_boosters:a}).eq("id",e.user.id)};async function f(){var w;if(s>=l||!a.length){await h.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",e.user.id),r&&await r(),o("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const x=a[0],{data:m}=await h.from("users").select("*").eq("id",e.user.id).single();m&&(e.profile=m);let b=[];try{if(x.type==="formation")b=await so(e.profile,0);else if(x.type==="game_changer")b=await ao(e.profile,x.count||3,0);else if(x.type==="stadium")b=await Yn(e.profile,0);else if(d&&((w=d.rates)!=null&&w.length)){const v={...d,cost:0,cardCount:x.count||d.cardCount||5};b=await ki(e.profile,v),x.guaranteeGK&&!e.profile.first_booster_opened&&(b.some(p=>p.player&&p.player.job==="GK")||await er(e.profile,b),await h.from("users").update({first_booster_opened:!0}).eq("id",e.profile.id))}else b=await ro(e.profile,x.count||5,0)}catch(v){o(v.message||"Erreur ouverture booster","error");return}a.shift(),s++,await c();const u=x.type==="formation"?{name:"Booster Formation",type:"formation",img:"/icons/booster-formation.png"}:x.type==="game_changer"?{name:"Booster Game Changer",type:"game_changer",img:"/icons/booster-gamechanger.png"}:x.type==="stadium"?{name:"Booster Stade",type:"stadium",img:"/icons/booster-stade.png"}:{name:`Booster Joueurs (${s}/${l})`,type:"player",img:(d==null?void 0:d.img)||"/icons/booster-players.png"};tn(e.profile.id,u,b),lo(b,u,i,()=>{f()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>f())}async function er(t,e){try{const{data:i}=await h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const o=i[Math.floor(Math.random()*i.length)],r=e.findIndex(a=>a.player);if(r===-1)return;const n=e[r];await h.from("cards").update({player_id:o.id}).eq("id",n.id),e[r]={...n,player_id:o.id,player:o}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const tr=[{key:"home2",route:"home2",label:"ACCUEIL",icon:"nav-home.png"},{key:"cards",route:"collection",label:"CARTES",icon:"nav-collection.png"},{key:"decks",route:"decks",label:"EQUIPES",icon:"nav-decks.png"},{key:"boosters",route:"boosters",label:"BOUTIQUE",icon:"nav-boosters.png"},{key:"market",route:"market",label:"MERCATO",icon:"nav-market.png"}];function Kt(t,e,i,o,r){if(!document.getElementById("home2-chrome-style")){const f=document.createElement("style");f.id="home2-chrome-style",f.textContent=`
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
    `,document.head.appendChild(f)}const n=tr.map(f=>`
    <a class="home2-chrome-tab" data-route="${f.route}" data-key="${f.key}">
      ${f.icon?`<img src="${o}${f.icon}">`:`<span class="home2-chrome-tab-emoji">${f.emoji}</span>`}${f.label}
    </a>`).join("");let a=document.getElementById("home2-chrome-header");a||(a=document.createElement("div"),a.id="home2-chrome-header",a.className="home2-chrome-header",a.innerHTML=`
      <div id="home2-chrome-marker" style="display:none"></div>
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-tabs">${n}</div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-chrome-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-chrome-settings-btn">⚙️</button>
      </div>
    `,document.body.appendChild(a),a.querySelector("#home2-chrome-settings-btn").addEventListener("click",()=>t("settings")),a.querySelector("#home2-chrome-credits").addEventListener("click",()=>Lo(e,r)));let d=document.getElementById("home2-mobile-top");d||(d=document.createElement("div"),d.id="home2-mobile-top",d.className="home2-mobile-top",d.innerHTML=`
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-mobtop-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-mobtop-settings-btn"><span>⚙️</span><span class="pill-label">Paramètres</span></button>
      </div>
    `,document.body.appendChild(d),d.querySelector("#home2-mobtop-settings-btn").addEventListener("click",()=>t("settings")),d.querySelector("#home2-mobtop-credits").addEventListener("click",()=>Lo(e,r)));let l=document.getElementById("home2-mobile-bottom");l||(l=document.createElement("div"),l.id="home2-mobile-bottom",l.className="home2-mobile-bottom",l.innerHTML=n,document.body.appendChild(l)),document.querySelectorAll(".home2-chrome-tab").forEach(f=>{f._v2Bound||(f._v2Bound=!0,f.addEventListener("click",()=>{document.querySelectorAll(".home2-chrome-tab").forEach(y=>y.classList.remove("active")),document.querySelectorAll(`.home2-chrome-tab[data-key="${f.dataset.key}"]`).forEach(y=>y.classList.add("active")),t(f.dataset.route)}))}),document.querySelectorAll(".home2-chrome-tab").forEach(f=>f.classList.toggle("active",f.dataset.key===i));const s=`💰 ${(e.credits||0).toLocaleString("fr")}`;document.getElementById("home2-chrome-credits")&&(document.getElementById("home2-chrome-credits").textContent=s),document.getElementById("home2-mobtop-credits")&&(document.getElementById("home2-mobtop-credits").textContent=s),document.body.classList.remove("v2-match-flow"),a.style.display="",d.style.display="",l.style.display="";const c=document.getElementById("page-content");c&&(c.style.removeProperty("padding-top"),c.style.removeProperty("padding-bottom")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const f=window.innerWidth<1024;document.documentElement.style.setProperty("--v2-top-height",(f?d.offsetHeight:a.offsetHeight)+"px"),document.documentElement.style.setProperty("--v2-bottom-height",l.offsetHeight+"px")})})}const ir=[{ads:1,seconds:5,credits:4500},{ads:2,seconds:10,credits:9500},{ads:3,seconds:15,credits:15e3}];async function Lo(t,e){if(!await Xi("pub_mode")){Ho();return}const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",i.innerHTML=`
    <div style="background:#111a12;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:400px;width:100%;color:#fff">
      <div style="font-size:18px;font-weight:900;margin-bottom:4px">💰 Gagner des crédits</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:18px">Regarde une ou plusieurs publicités pour recevoir des crédits gratuits.</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${ir.map(o=>`
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
    </div>`,document.body.appendChild(i),i.querySelector("#credits-ad-cancel").addEventListener("click",()=>i.remove()),i.querySelectorAll(".credits-ad-offer-btn").forEach(o=>{o.addEventListener("click",()=>{i.remove(),or(parseInt(o.dataset.ads),5,parseInt(o.dataset.credits),t,e)})})}function or(t,e,i,o,r){let n=1;const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.94);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;gap:14px;color:#fff;padding:16px",document.body.appendChild(a);function d(){a.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité ${n}/${t}</div>
      <div style="width:400px;max-width:100%;height:400px;max-height:55vh;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center">
        <ins class="adsbygoogle"
          style="display:inline-block;width:400px;height:400px"
          data-ad-client="ca-pub-5827602487507112"
          data-ad-slot="6638827438"></ins>
      </div>
      <div id="credits-ad-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Chargement… <span id="credits-ad-cd">${e}</span>s</div>
      <div id="credits-ad-next-zone" style="width:280px;max-width:100%"></div>
    `;try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(f){console.warn("[AdSense]",f)}let s=e;const c=setInterval(()=>{s--;const f=a.querySelector("#credits-ad-cd");f&&(f.textContent=s),s<=0&&(clearInterval(c),l())},1e3)}function l(){var f,y;const s=a.querySelector("#credits-ad-status"),c=a.querySelector("#credits-ad-next-zone");n<t?(s&&(s.textContent="Publicité terminée ✅"),c&&(c.innerHTML=`
        <button id="credits-ad-next-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px">
          Suivant (${n}/${t}) →
        </button>`),(f=a.querySelector("#credits-ad-next-btn"))==null||f.addEventListener("click",()=>{n++,d()})):(s&&(s.textContent="Toutes les publicités ont été vues ✅"),c&&(c.innerHTML=`
        <button id="credits-ad-claim-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px;background:#D4A017;border-color:#D4A017">
          🎁 Récupérer ${i.toLocaleString("fr")} crédits
        </button>`),(y=a.querySelector("#credits-ad-claim-btn"))==null||y.addEventListener("click",async()=>{const g=a.querySelector("#credits-ad-claim-btn");g.disabled=!0,g.textContent="⏳...";const x=(o.credits||0)+i,{error:m}=await h.from("users").update({credits:x}).eq("id",o.id);if(m){r(m.message,"error"),g.disabled=!1;return}o.credits=x,Vt(x),r(`+${i.toLocaleString("fr")} crédits ✅`,"success"),a.remove()}))}d()}async function on(t,e,i){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",document.body.appendChild(o);async function r(){var l;const{data:n}=await h.from("pending_rewards").select(`*,
        player:players(id, firstname, surname_real, country_code, club_id, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
          clubs(encoded_name, logo_url)),
        booster:booster_configs(name, image_url)`).eq("user_id",t.profile.id).eq("claimed",!1).order("created_at",{ascending:!0});if(!(n!=null&&n.length)){o.remove();const s=document.getElementById("pending-rewards-banner");s&&s.remove();return}const a=s=>{var c;return s.reward_type==="credits"?'<div style="width:56px;height:56px;border-radius:12px;background:rgba(212,160,23,0.15);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">💰</div>':s.reward_type==="card"&&s.player?`<div style="flex-shrink:0">${je(s.player,{width:56})}</div>`:s.reward_type==="booster"?`<img src="/icons/${((c=s.booster)==null?void 0:c.image_url)||"booster-players.png"}" style="width:56px;height:56px;object-fit:contain;border-radius:12px;background:rgba(255,255,255,0.05);flex-shrink:0">`:'<div style="width:56px;height:56px;border-radius:12px;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">❓</div>'},d=s=>{var c,f,y;return s.reward_type==="credits"?`${(s.credits_amount||0).toLocaleString("fr")} crédits`:s.reward_type==="card"?`${((c=s.player)==null?void 0:c.firstname)||""} ${((f=s.player)==null?void 0:f.surname_real)||""}`.trim()||"Carte joueur":s.reward_type==="booster"?((y=s.booster)==null?void 0:y.name)||"Booster":"Récompense"};o.innerHTML=`
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
      </div>`,(l=o.querySelector("#pending-rewards-close"))==null||l.addEventListener("click",()=>o.remove()),o.querySelectorAll(".claim-reward-btn").forEach(s=>{s.addEventListener("click",async()=>{var f,y;const c=n.find(g=>g.id===s.dataset.id);s.disabled=!0,s.textContent="⏳...";try{const g=await On(c,t.profile,e,null);if(await h.from("pending_rewards").update({claimed:!0,claimed_at:new Date().toISOString()}).eq("id",c.id),g.type==="credits")Vt(t.profile.credits),e(`+${g.amount.toLocaleString("fr")} crédits ✅`,"success");else if(g.type==="card")e(`Carte reçue : ${((f=g.player)==null?void 0:f.firstname)||""} ${((y=g.player)==null?void 0:y.surname_real)||""} ✅`,"success");else if(g.type==="booster"){o.remove(),lo(g.cards,g.boosterUI,i,()=>{on(t,e,i)});return}}catch(g){e(g.message||"Erreur lors de la réclamation","error"),s.disabled=!1,s.textContent="Récupérer";return}r()})})}r(),o.addEventListener("click",n=>{n.target===o&&o.remove()})}function Vt(t){const e=`💰 ${(t||0).toLocaleString("fr")}`,i=document.getElementById("home2-chrome-credits"),o=document.getElementById("home2-mobtop-credits");i&&(i.textContent=e),o&&(o.textContent=e)}function ct(){document.body.classList.add("v2-match-flow");const t=document.getElementById("home2-chrome-header");t&&(t.style.display="none");const e=document.getElementById("home2-mobile-top");e&&(e.style.display="none");const i=document.getElementById("home2-mobile-bottom");i&&(i.style.display="none");const o=document.getElementById("page-content");o&&(o.style.setProperty("padding-top","0","important"),o.style.setProperty("padding-bottom","0","important"))}function nr(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return"à l'instant";if(i<60)return`il y a ${i}min`;const o=Math.floor(i/60);if(o<24)return`il y a ${o}h`;const r=Math.floor(o/24);return r<7?`il y a ${r}j`:new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"short"})}function rr(t,e){if(!isFinite(e.max))return"";const i=e.max-e.min+1,o=Math.floor((t-e.min)/(i/3));return["III","II","I"][Math.min(2,Math.max(0,o))]}async function ar(t){const{data:e}=await h.from("users").select("id,pseudo,club_name,mmr").order("mmr",{ascending:!1}).limit(5),i=e||[],o=i.some(n=>n.id===t);let r=null;if(!o){const{data:n}=await h.from("users").select("mmr").eq("id",t).single();if(n){const{count:a}=await h.from("users").select("id",{count:"exact",head:!0}).gt("mmr",n.mmr||0);r=(a||0)+1}}return{list:i,iAmInTop:o,myPosition:r}}async function sr(t=4){const{data:e}=await h.from("patch_notes").select("id,title,description,image_url,published_at").eq("is_published",!0).order("published_at",{ascending:!1}).limit(t);return e||[]}async function lr(){const{data:t}=await h.from("booster_configs").select("id,name,icon,price_type,price_credits,card_count").eq("is_active",!0).order("sort_order",{ascending:!0}).limit(5);return t||[]}async function dr(){const{data:t}=await h.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const r=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close-v2").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}async function Bi(t,{state:e,navigate:i,toast:o,openModal:r,closeModal:n}){var z,C,N,V,Z,ne;const a=e.profile;if(!a)return;const d="/icons/";Kt(i,a,"home2",d,o);const l=a.mmr??1e3,s=St(l),c=rr(l,s),f=Ri(l),y=isFinite(s.max)?s.max+1:null,[{list:g,iAmInTop:x,myPosition:m},b,u,{count:w}]=await Promise.all([ar(a.id),sr(5),lr(),h.from("pending_rewards").select("*",{count:"exact",head:!0}).eq("user_id",a.id).eq("claimed",!1)]),v=(S,E)=>`
    <div class="rk-row ${S.id===a.id?"rk-row-me":""}">
      <div class="rk-pos ${E<3?"rk-pos-top"+(E+1):""}">${E<3?["🥇","🥈","🥉"][E]:E+1}</div>
      <div class="rk-name ${S.id===a.id?"rk-name-me":""}">${S.pseudo}</div>
      <div class="rk-rp">${(S.mmr??0).toLocaleString("fr")} RP</div>
    </div>`,k=S=>`
    <div class="news-item">
      ${S.image_url?`<img src="${S.image_url}" class="news-thumb" onerror="this.style.display='none'">`:'<div class="news-thumb news-thumb-fallback">📰</div>'}
      <div class="news-body">
        <div class="news-title">${S.title}</div>
        <div class="news-desc">${S.description||""}</div>
        <div class="news-time">${nr(S.published_at)}</div>
      </div>
    </div>`;let p=0;const T=S=>`
    <div class="promo-icon-wrap">
      <img src="${d}${S.icon||"nav-boosters.png"}" class="promo-icon" onerror="this.style.display='none'">
    </div>
    <div class="promo-info">
      <div class="promo-kicker">NOUVEAU BOOSTER</div>
      <div class="promo-title">${S.name}</div>
      <div class="promo-desc">${S.card_count||5} cartes · ${S.price_type==="pub"?"Pub gratuite":(S.price_credits||0).toLocaleString("fr")+" cr."}</div>
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
    .rk-rp { font-size: 14px; font-weight:900; color: var(--tile-fg-dim); flex-shrink:0; }
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
                <div class="rank-rp-label">${l.toLocaleString("fr")}${y?" / "+y.toLocaleString("fr"):""} RP</div>
                <button class="rank-inline-link" id="rank-inline-link-btn">📊 Classement</button>
              </div>
            </div>
            <div class="rank-progress-track"><div class="rank-progress-fill" style="width:${f}%"></div></div>
          </div>

          <div class="ranking-widget">
            <div class="ranking-widget-header"><h4>CLASSEMENT</h4><a id="nav-rankings-link">Voir plus</a></div>
            ${g.map((S,E)=>v(S,E)).join("")}
            ${!x&&m?`
              <div class="rk-row rk-row-me" style="border-top:1px solid var(--tile-border);margin-top:2px;padding-top:8px">
                <div class="rk-pos">${m}</div>
                <div class="rk-name rk-name-me">${a.pseudo}</div>
                <div class="rk-rp">${l.toLocaleString("fr")} RP</div>
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
            ${u.length>1?`<div class="promo-dots">${u.map((S,E)=>`<div class="promo-dot ${E===0?"active":""}" data-dot="${E}"></div>`).join("")}</div>`:""}
          </div>`:""}
        </div>

        <!-- Colonne droite : Actualités -->
        <div class="home2-col-right">
          <div class="news-widget">
            <div class="news-widget-header"><h4>ACTUALITÉS</h4><a id="nav-journal-link">Voir tout</a></div>
            ${b.length?b.map(k).join(""):'<div style="font-size:11px;color:var(--tile-fg-dim);padding:8px 0">Aucune actualité pour le moment.</div>'}
          </div>
        </div>

      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var me,A;const S=((me=window.visualViewport)==null?void 0:me.height)||window.innerHeight,E=window.innerWidth<1024;let U=0;if(E){const G=document.getElementById("home2-mobile-top"),be=document.getElementById("home2-mobile-bottom");U=((G==null?void 0:G.offsetHeight)||0)+((be==null?void 0:be.offsetHeight)||0)}else U=((A=document.getElementById("home2-chrome-header"))==null?void 0:A.offsetHeight)||0;const $=S-U,te=t.querySelector(".home-dark");te&&(te.style.minHeight=$+"px")}),(z=document.getElementById("nav-rankings-link"))==null||z.addEventListener("click",()=>i("rankings")),(C=document.getElementById("nav-rankings-cta"))==null||C.addEventListener("click",()=>i("rankings")),(N=document.getElementById("rank-inline-link-btn"))==null||N.addEventListener("click",()=>i("rankings")),(V=document.getElementById("nav-journal-link"))==null||V.addEventListener("click",()=>dr()),t.querySelectorAll("[data-action]").forEach(S=>{S.addEventListener("click",()=>{S.style.transform="scale(.96)",setTimeout(()=>S.style.transform="",180);const E=S.dataset.action;if(E==="match-ai"){an(i,e);return}if(E==="match-random"){ct(),i("match",{matchMode:"random"});return}if(E==="match-friend"){i("friends");return}if(E==="mini-league"){i("mini-league");return}if(E==="ranked"){i("ranked");return}o("Bientôt disponible","info")})}),u.length>1){const S=document.getElementById("promo-slide-content"),E=()=>Array.from(document.querySelectorAll(".promo-dot")),U=$=>{p=$,S&&(S.innerHTML=T(u[p])),E().forEach((te,me)=>te.classList.toggle("active",me===p))};setInterval(()=>U((p+1)%u.length),5e3),document.querySelectorAll(".promo-dot").forEach($=>{$.addEventListener("click",()=>U(Number($.dataset.dot)))})}(Z=document.getElementById("promo-cta-btn"))==null||Z.addEventListener("click",()=>i("boosters")),rn(e,o),(ne=document.getElementById("pending-rewards-banner"))==null||ne.addEventListener("click",()=>{on(e,o,i)}),fr(e,o,i),nn(e,o,i),cr(e,o)}async function cr(t,e){const i=t.profile.id,{data:o}=await h.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(o!=null&&o.length))return;const r=o.reduce((a,d)=>a+(d.prize_amount||0),0),n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2200",n.innerHTML=`<div class="modal" style="max-width:400px">
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
  </div>`,document.body.appendChild(n),n.querySelector("#claim-later-btn").addEventListener("click",()=>n.remove()),n.querySelector("#claim-all-btn").addEventListener("click",async a=>{const d=a.currentTarget;d.disabled=!0,d.textContent="...";let l=0;for(const s of o){const{data:c}=await h.rpc("claim_mini_league_prize",{p_league_id:s.league_id,p_user_id:i});c!=null&&c.success&&!c.already_claimed&&(l+=c.prize||0)}if(l>0){t.profile.credits=(t.profile.credits||0)+l;const s=document.getElementById("nav-credits");s&&(s.textContent=`💰 ${t.profile.credits.toLocaleString("fr")}`),e(`💰 +${l.toLocaleString("fr")} cr. récupérés !`,"success")}n.remove()})}async function nn(t,e,i){const o=document.getElementById("ongoing-match-banner");if(!o)return;const r=t.profile.id,{data:n}=await h.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${r},away_id.eq.${r}`).order("created_at",{ascending:!1});if(!(n!=null&&n.length)){o.innerHTML="";return}const a=n.map(l=>l.home_id===r?l.away_id:l.home_id).filter(Boolean);let d={};if(a.length){const{data:l}=await h.from("users").select("id, pseudo, club_name").in("id",a);(l||[]).forEach(s=>{d[s.id]=s.club_name||s.pseudo})}o.innerHTML=n.map(l=>{const s=l.home_id===r?l.away_id:l.home_id,c=d[s]||"Adversaire",f=l.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${f?"🏆 Mini League":l.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${c}</div>
      </div>
      <button data-resume="${l.id}" data-mini="${f?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${l.id}" data-opp="${s}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),o.querySelectorAll("[data-resume]").forEach(l=>{l.addEventListener("click",async()=>{ct();const s=document.getElementById("page-content")||document.getElementById("app");if(l.dataset.mini==="1"){const{data:c}=await h.from("mini_league_matches").select("id, league_id").eq("match_id",l.dataset.resume).single();c?i("match-mini-league",{mlMatchId:c.id,leagueId:c.league_id}):i("mini-league")}else{const{resumePvpMatch:c}=await Wo(async()=>{const{resumePvpMatch:f}=await Promise.resolve().then(()=>ua);return{resumePvpMatch:f}},void 0);c(s,{state:t,navigate:i,toast:e,openModal:null,closeModal:null,refreshProfile:null},l.dataset.resume)}})}),o.querySelectorAll("[data-abandon]").forEach(l=>{l.addEventListener("click",()=>{ur(async()=>{await pr(l.dataset.abandon,l.dataset.opp,r),e("Match abandonné (défaite 3-0)","info"),nn(t,e,i)})})})}async function pr(t,e,i){Nt();const{data:o}=await h.from("matches").select("home_id, away_id, game_state, mode").eq("id",t).single();if(!o)return;const r=o.home_id===i,n=r?0:3,a=r?3:0,d=o.game_state||{};d.p1Score=n,d.p2Score=a,d.phase="finished",d.forfeit=!0,await h.from("matches").update({status:"finished",forfeit:!0,winner_id:e,home_score:n,away_score:a,game_state:d}).eq("id",t),o.mode==="mini_league"&&await h.from("mini_league_matches").update({status:"finished",home_score:n,away_score:a}).eq("match_id",t)}function ur(t){const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(e),e.querySelector("#ab-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#ab-ok").addEventListener("click",()=>{e.remove(),t()}),e.addEventListener("click",i=>{i.target===e&&e.remove()})}let fi=null,Ft=null;function fr(t,e,i){var n;const o=(n=t==null?void 0:t.user)==null?void 0:n.id;if(!o)return;const r=()=>mr(t,e,i);if(r(),clearInterval(fi),fi=setInterval(()=>{if(!document.getElementById("match-invite-banner")){if(clearInterval(fi),fi=null,Ft){try{h.removeChannel(Ft)}catch{}Ft=null}return}r()},5e3),Ft)try{h.removeChannel(Ft)}catch{}Ft=h.channel("home-match-invites-"+o).on("postgres_changes",{event:"INSERT",schema:"public",table:"friend_match_invites",filter:`invitee_id=eq.${o}`},r).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`invitee_id=eq.${o}`},r).subscribe()}async function mr(t,e,i){var d,l,s,c;const o=document.getElementById("match-invite-banner");if(!o)return;const{data:r}=await h.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",t.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!r){o.innerHTML="";return}const n=((d=r.inviter)==null?void 0:d.club_name)||((l=r.inviter)==null?void 0:l.pseudo)||"?",a=r.inviter_id;o.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${n} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(s=document.getElementById("match-inv-accept"))==null||s.addEventListener("click",()=>{o.innerHTML="",ct(),i("match",{matchMode:"friend",friendId:a,friendName:n,isAccepting:!0})}),(c=document.getElementById("match-inv-decline"))==null||c.addEventListener("click",async()=>{await h.from("friend_match_invites").update({status:"declined"}).eq("id",r.id),o.innerHTML="",e("Invitation refusée","info")})}async function rn(t,e){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:o,error:r}=await h.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",t.user.id).eq("status","pending");if(r||!(o!=null&&o.length)){i.innerHTML="";return}const n=o.length,a=o.slice(0,2).map(l=>{var s;return((s=l.requester)==null?void 0:s.pseudo)||"?"}).join(", "),d=n>2?` +${n-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${n} demande${n>1?"s":""} d'ami${n>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${d}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>ln(t,e,()=>rn(t,e)))}async function an(t,e){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:420px;border-radius:18px">
    <div class="modal-header"><h2>Solo — Choisir un niveau</h2><button class="btn-icon" id="solo-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div id="solo-levels-list" style="display:flex;flex-direction:column;gap:10px">
        <div style="text-align:center;color:#999;padding:20px">⏳ Chargement…</div>
      </div>
    </div>
  </div>`,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("solo-cancel").addEventListener("click",o),i.addEventListener("click",s=>{s.target===i&&o()});const[{data:r},{data:n}]=await Promise.all([h.from("solo_levels").select("*").eq("is_active",!0).order("level_number"),h.from("user_solo_progress").select("unlocked_level").eq("user_id",e.profile.id).maybeSingle()]),a=(n==null?void 0:n.unlocked_level)||1,d=r||[],l=document.getElementById("solo-levels-list");if(l){if(!d.length){l.innerHTML='<div style="text-align:center;color:#999;padding:20px">Aucun niveau configuré.</div>';return}l.innerHTML=d.map(s=>{const c=s.level_number>a,f=s.level_number===a,y=c?"#f0f0f0":f?"#eefaf2":"#f7f7f7",g=c?"#ddd":f?"#bfe8cf":"#e0e0e0",x=c?"#999":"#12401f";return`
      <div class="solo-level-card" data-level="${s.level_number}" data-locked="${c}"
        style="cursor:${c?"not-allowed":"pointer"};display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${y};border:1px solid ${g};opacity:${c?.6:1};transition:transform .12s ease">
        <div style="width:46px;height:46px;border-radius:12px;background:${c?"#bbb":"#1A6B3C"};display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#fff;flex-shrink:0">
          ${c?"🔒":s.level_number}
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:800;font-size:15px;color:${x}">Niveau ${s.level_number}</div>
          <div style="font-size:11px;color:${x};opacity:0.75;margin-top:1px">
            Note globale ~${s.target_note_avg} · 🟡${s.nb_liens_jaune} 🟢${s.nb_liens_vert} · 🏟️${s.nb_joueurs_stade}
          </div>
        </div>
        ${c?"":`<div style="font-weight:900;font-size:12.5px;color:${x};background:rgba(255,255,255,0.7);padding:6px 11px;border-radius:999px;flex-shrink:0;white-space:nowrap">+${s.reward_credits} cr.</div>`}
      </div>`}).join(""),l.querySelectorAll(".solo-level-card").forEach(s=>{s.dataset.locked!=="true"&&(s.addEventListener("mouseenter",()=>{s.style.transform="translateY(-1px)"}),s.addEventListener("mouseleave",()=>{s.style.transform=""}),s.addEventListener("click",()=>{o(),ct(),t("match",{matchMode:"solo",soloLevel:Number(s.dataset.level)})}))})}}const ci="#1A6B3C",pi="#cc2222",gr="#D4A017",So="#888";async function br(t,e){const{state:i,toast:o}=e;t.innerHTML=`
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
    </div>`,await sn(i,o,e),document.getElementById("btn-add-friend").addEventListener("click",()=>yr(i,o)),document.getElementById("btn-accept-friend").addEventListener("click",()=>ln(i,o,null,e))}async function sn(t,e,i={}){const{navigate:o}=i,r=t.user.id,{data:n,error:a}=await h.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${r},addressee_id.eq.${r}`),{count:d}=await h.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",r).eq("status","pending"),l=document.getElementById("pending-badge");l&&(d>0?(l.style.display="flex",l.textContent=d):l.style.display="none");const s=document.getElementById("friends-list");if(!s)return;if(a){console.error("[Friends] Erreur:",a),s.innerHTML=`<div style="color:${pi};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const c=(n||[]).map(g=>g.requester_id===r?g.addressee_id:g.requester_id);let f={};if(c.length){const{data:g}=await h.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",c);(g||[]).forEach(x=>{f[x.id]=x})}const y=(n||[]).map(g=>({friendshipId:g.id,friend:f[g.requester_id===r?g.addressee_id:g.requester_id]||{pseudo:"?"}}));if(!y.length){s.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}s.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${y.length} ami${y.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${y.map(({friendshipId:g,friend:x})=>xr(x,g)).join("")}
    </div>`,s.querySelectorAll("[data-stats]").forEach(g=>{g.addEventListener("click",()=>hr(t,g.dataset.stats,g.dataset.friendName))}),s.querySelectorAll("[data-match]").forEach(g=>{g.addEventListener("click",async()=>{const x=g.dataset.friendId,m=g.dataset.friendName;if(typeof o!="function"){e("Erreur navigation","error");return}const b=t.user.id,{data:u}=await h.from("friend_match_invites").select("id").eq("inviter_id",x).eq("invitee_id",b).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),w=!!u;console.log("[Friends] clic match",{fid:x,fname:m,isAccepting:w}),ct(),o("match",{matchMode:"friend",friendId:x,friendName:m,isAccepting:w})})})}function xr(t,e){const i=t.club_name||t.pseudo||"?",o=t.pseudo||"",r=(o||i).slice(0,2).toUpperCase(),n=t.club_color2||ci,a=t.club_color1||"#ffffff",d=t.last_seen_at?new Date(t.last_seen_at):null,l=d&&Date.now()-d.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${gr};background:var(--tile-bg);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function yr(t,e){const i=co();i.innerHTML=`
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
    ${po()}`,document.body.appendChild(i);const o=i.querySelector("#friend-pseudo-input"),r=i.querySelector("#add-friend-error"),n=()=>i.remove();o.focus(),i.querySelector("#add-cancel").addEventListener("click",n),i.addEventListener("click",a=>{a.target===i&&n()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=o.value.trim();if(!a){r.textContent="Entre un pseudo";return}r.textContent="";const{data:d}=await h.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!d){r.textContent="Utilisateur introuvable";return}if(d.id===t.user.id){r.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:l}=await h.from("friendships").select("id, status").or(`and(requester_id.eq.${t.user.id},addressee_id.eq.${d.id}),and(requester_id.eq.${d.id},addressee_id.eq.${t.user.id})`).single();if(l){const c=l.status==="accepted"?"Vous êtes déjà amis !":l.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";r.textContent=c;return}const{error:s}=await h.from("friendships").insert({requester_id:t.user.id,addressee_id:d.id,status:"pending"});if(s){r.textContent="Erreur : "+s.message;return}n(),e(`✅ Demande envoyée à ${d.pseudo} !`,"success")})}async function ln(t,e,i=null,o={}){const r=t.user.id,{data:n}=await h.from("friendships").select("id, requester_id").eq("addressee_id",r).eq("status","pending").order("created_at",{ascending:!1}),a=(n||[]).map(y=>y.requester_id);let d={};if(a.length){const{data:y}=await h.from("users").select("id, pseudo, club_name").in("id",a);(y||[]).forEach(g=>{d[g.id]=g})}const l=(n||[]).map(y=>({...y,requester:d[y.requester_id]||{pseudo:"?"}})),s=co(),c=l||[];s.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${c.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${c.map(y=>{var g,x,m;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((g=y.requester)==null?void 0:g.club_name)||((x=y.requester)==null?void 0:x.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((m=y.requester)==null?void 0:m.pseudo)||""})</span>
                </div>
                <button data-accept="${y.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${ci};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${y.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${pi};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${po()}`,document.body.appendChild(s);const f=()=>s.remove();s.querySelector("#pending-close").addEventListener("click",f),s.addEventListener("click",y=>{y.target===s&&f()}),s.querySelectorAll("[data-accept]").forEach(y=>{y.addEventListener("click",async()=>{const{error:g}=await h.from("friendships").update({status:"accepted"}).eq("id",y.dataset.accept);if(g){e("Erreur : "+g.message,"error");return}y.closest("div[style]").remove(),e("✅ Ami accepté !","success"),sn(t,e,o),i&&i()})}),s.querySelectorAll("[data-decline]").forEach(y=>{y.addEventListener("click",async()=>{await h.from("friendships").delete().eq("id",y.dataset.decline),y.closest("div[style]").remove(),e("Demande refusée","info"),i&&i()})})}async function hr(t,e,i){const o=t.user.id,[r,n]=[o,e].sort(),a=o===r,{data:d}=await h.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",n).single(),l=t.profile.club_name||t.profile.pseudo||"Moi",s=d||{},c=a?s.wins_p1||0:s.wins_p2||0,f=a?s.wins_p2||0:s.wins_p1||0,y=s.draws||0,g=a?s.goals_p1||0:s.goals_p2||0,x=a?s.goals_p2||0:s.goals_p1||0,m=a?s.gc_used_p1||0:s.gc_used_p2||0,b=a?s.gc_used_p2||0:s.gc_used_p1||0,u=s.matches_total||0,w=(k,p,T,z=ci,C=pi)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${z}">${p}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${k}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${C}">${T}</div>
    </div>`,v=co();v.innerHTML=`
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
        ${w("Victoires",c,f)}
        ${w("Nuls",y,y,So,So)}
        ${w("Défaites",f,c)}
        ${w("Buts marqués",g,x)}
        ${w("Buts encaissés",x,g,pi,ci)}
        ${w("GC utilisés ⚡",m,b,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${u} match${u>1?"s":""} joué${u>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${po()}`,document.body.appendChild(v),v.querySelector("#stats-close").addEventListener("click",()=>v.remove()),v.addEventListener("click",k=>{k.target===v&&v.remove()})}function co(){const t=document.createElement("div");return t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",t}function po(){return`
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
    </style>`}async function vr(t,{state:e,navigate:i,toast:o}){const r=e.profile;if(!r)return;const n="/icons/";Kt(i,r,"game",n,o),t.innerHTML=`
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
  </div>`,t.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",()=>{a.style.transform="scale(.96)",setTimeout(()=>a.style.transform="",180);const d=a.dataset.action;if(d==="match-ai"){an(i,e);return}if(d==="match-random"){ct(),i("match",{matchMode:"random"});return}if(d==="match-friend"){i("friends");return}if(d==="mini-league"){i("mini-league");return}if(d==="ranked"){i("ranked");return}o("Bientôt disponible","info")})})}const wr="/",dn=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function cn(t,e,i){let o=0;const r=document.createElement("div");r.id="tutorial-overlay",r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const n=()=>{var c,f,y;const d=e[o],l=o===e.length-1,s=Math.round((o+1)/e.length*100);r.innerHTML=`
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
        ${d.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${wr}icons/${d.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,r.querySelectorAll("ul,ol").forEach(g=>{g.style.paddingLeft="20px",g.style.marginTop="6px",g.style.marginBottom="6px"}),r.querySelectorAll("li").forEach(g=>{g.style.marginBottom="4px"}),r.querySelectorAll("p").forEach(g=>{g.style.marginBottom="8px"}),(c=r.querySelector("#tuto-prev"))==null||c.addEventListener("click",()=>{o--,n()}),(f=r.querySelector("#tuto-next"))==null||f.addEventListener("click",()=>{l?a():(o++,n())}),(y=r.querySelector("#tuto-skip"))==null||y.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{r.remove(),t!=null&&t.id&&await h.from("users").update({tutorial_done:!0}).eq("id",t.id),i==null||i()};document.body.appendChild(r),n()}async function pn(t,e,i){let o=[];const{data:r,error:n}=await h.rpc("get_tutorial_steps");if(!n&&(r==null?void 0:r.length)>0)o=r;else{const{data:d,error:l}=await h.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(d==null?void 0:d.length)>0?o=d:i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3)}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):dn;cn(t,a,()=>e("settings"))}async function zo(t,e,i){if(!t||t.tutorial_done)return;let o=[];const{data:r,error:n}=await h.rpc("get_tutorial_steps");if(!n&&(r==null?void 0:r.length)>0)o=r,console.log(`[Tutorial] RPC OK → ${o.length} étapes`);else{const{data:d,error:l}=await h.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(d==null?void 0:d.length)>0?(o=d,console.log(`[Tutorial] Direct OK → ${o.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${n==null?void 0:n.message}, Direct: ${l==null?void 0:l.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):dn;cn(t,a,()=>e("boosters"))}async function un(t,e){var b,u,w;const{state:i,navigate:o,toast:r}=e,n=ri(),a=to(),d=(b=i==null?void 0:i.profile)==null?void 0:b.is_admin,l="2026.08.01-2018";t.innerHTML=`
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
  </div>`,t.querySelectorAll("[data-theme-choice]").forEach(v=>{v.addEventListener("click",()=>{Go(v.dataset.themeChoice),un(t,e)})});const s=t.querySelector("#team-color1"),c=t.querySelector("#team-color2"),f=t.querySelector("#team-preview"),y=()=>{f&&(f.style.background=`linear-gradient(135deg, ${s.value} 50%, ${c.value} 50%)`)};y(),s==null||s.addEventListener("input",y),c==null||c.addEventListener("input",y),(u=t.querySelector("#team-save"))==null||u.addEventListener("click",async()=>{const v=t.querySelector("#team-error"),k=t.querySelector("#team-save"),p=t.querySelector("#team-club-name").value.trim();if(p.length<2){v.textContent="Nom de club trop court.";return}k.disabled=!0,k.textContent="⏳ Enregistrement...",v.textContent="";const{error:T}=await h.from("users").update({club_name:p,club_color1:s.value,club_color2:c.value}).eq("id",i.profile.id);if(k.disabled=!1,k.textContent="💾 Enregistrer",T){v.textContent=T.message;return}i.profile.club_name=p,i.profile.club_color1=s.value,i.profile.club_color2=c.value,v.style.color="#2ecc71",v.textContent="✅ Modifications enregistrées.",ri()==="club"&&Go("club")});const g=t.querySelector("#volume-slider"),x=t.querySelector("#volume-label");let m=null;g.addEventListener("input",()=>{Pn(Number(g.value)),x.textContent=`${g.value}%`,m&&(m.volume=Math.max(0,Math.min(1,Number(g.value)/100)))}),t.querySelector("#volume-test").addEventListener("click",()=>{m=oo("/sounds/match-opening.mp3",1)}),(w=t.querySelector("#settings-tutorial"))==null||w.addEventListener("click",()=>{pn(i.profile,o,r)}),t.querySelector("#settings-logout").addEventListener("click",async()=>{await h.auth.signOut(),window.location.reload()})}const _r={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Qt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},mi=["GK","DEF","MIL","ATT"],kr=["Tous","GK","DEF","MIL","ATT"],$r={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function To(t){const e=t.player;return e?(e.rarity,Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)):null}function Er(t){return t.length?t.reduce((e,i)=>To(i)>To(e)?i:e,t[0]):t[0]}const Lr={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function gi(t,e){return t&&Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Di(t,e=""){const i=t.player;if(!i)return"";const o=t.evolution_bonus||0,r={...i,_evolution_bonus:o},n=e?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${e}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${t.id}">
    ${n}
    ${je(r,{width:140})}
  </div>`}function Io(t){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${je(t,{width:140})}
  </div>`}async function Sr(t,e){const{state:i,navigate:o,toast:r,openModal:n,closeModal:a}=e;Kt(o,i.profile,"cards","/icons/",r),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await h.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await h.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),s=(d||[]).filter(q=>q.card_type==="player"&&q.player),c=(d||[]).filter(q=>q.card_type==="game_changer"),f=(d||[]).filter(q=>q.card_type==="formation"),y=(d||[]).filter(q=>q.card_type==="stadium"),{data:g}=await h.from("gc_definitions").select("name,gc_type,color,effect,image_url"),x={};(g||[]).forEach(q=>{x[q.name]=q});const{data:m}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),b={};(m||[]).forEach(q=>{b[q.id]=q}),y.forEach(q=>{q.stadium_def&&(b[q.stadium_id]=q.stadium_def)});const u=Object.keys(Qi),w=Object.keys(Ge),v={};s.forEach(q=>{const K=q.player.id;v[K]=(v[K]||0)+1}),new Set(Object.keys(v).map(q=>String(q)));const k=new Set(f.map(q=>q.formation)),p=new Set(c.map(q=>q.gc_type));let T="player",z="Tous",C="",N=!1,V=!1;function Z(){return[...s].sort((q,K)=>{const se=mi.indexOf(q.player.job),ie=mi.indexOf(K.player.job);return se!==ie?se-ie:(q.player.surname_real||"").localeCompare(K.player.surname_real||"")})}function ne(){return[...l||[]].sort((q,K)=>{const se=mi.indexOf(q.job),ie=mi.indexOf(K.job);return se!==ie?se-ie:(q.surname_real||"").localeCompare(K.surname_real||"")})}function S(){return Z().filter(q=>{const K=q.player,se=z==="Tous"||K.job===z,ie=!C||`${K.firstname} ${K.surname_real}`.toLowerCase().includes(C);return se&&ie})}function E(){return ne().filter(q=>{const K=z==="Tous"||q.job===z,se=!C||`${q.firstname} ${q.surname_real}`.toLowerCase().includes(C);return K&&se})}t.innerHTML=`
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
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${f.length})</div>
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
  </div>`,function(K){const se=document.getElementById(K);if(!se)return;se.addEventListener("wheel",O=>{Math.abs(O.deltaY)<=Math.abs(O.deltaX)||(O.preventDefault(),se.scrollLeft+=O.deltaY)},{passive:!1});let ie=!1,Y=0,F=0,J=!1,P=!1;se.addEventListener("mousedown",O=>{ie=!0,J=!1,Y=O.pageX,F=se.scrollLeft}),window.addEventListener("mouseup",()=>{ie=!1,J&&(se.style.cursor="",P=!0),J=!1}),window.addEventListener("mousemove",O=>{if(!ie)return;const le=O.pageX-Y;!J&&Math.abs(le)<6||(J=!0,se.style.cursor="grabbing",O.preventDefault(),se.scrollLeft=F-le)}),se.addEventListener("click",O=>{P&&(O.stopPropagation(),O.preventDefault(),P=!1)},!0)}("col-grid");function U(){const q=document.getElementById("col-filters");q&&(T==="player"?(q.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px;background:#fff;color:#1a1a1a" value="${C}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${kr.map(K=>`
            <button class="filter-btn" data-job="${K}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${K===z?"var(--green)":"var(--tile-border)"};
                background:${K===z?"var(--green)":"#fff"};
                color:${K===z?"#fff":"#555"}">
              ${K}
            </button>`).join("")}
          <button id="dupes-only-btn" title="Voir les cartes en plusieurs exemplaires"
            style="flex-shrink:0;margin-left:auto;padding:5px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${V?"var(--yellow)":"var(--tile-border)"};
              background:${V?"var(--yellow)":"#fff"};
              color:${V?"#111":"#555"}">
            🗂️×2
          </button>
          <button id="show-all-btn"
            style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${N?"var(--yellow)":"var(--tile-border)"};
              background:${N?"var(--yellow)":"#fff"};
              color:${N?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${N?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",K=>{C=K.target.value.toLowerCase(),$()}),t.querySelectorAll(".filter-btn").forEach(K=>{K.addEventListener("click",()=>{z=K.dataset.job,U(),$()})}),document.getElementById("dupes-only-btn").addEventListener("click",()=>{V=!V,U(),$()}),document.getElementById("show-all-btn").addEventListener("click",()=>{N=!N,U(),$()})):(q.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${N?"var(--yellow)":"var(--tile-border)"};
              background:${N?"var(--yellow)":"#fff"};
              color:${N?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${N?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{N=!N,U(),$()})))}function $(){const q=document.getElementById("col-grid");q&&(T==="player"?be(q):T==="formation"?W(q):T==="stadium"?ce(q):pe(q))}function te(q,K,se,ie,Y,F=0){const J=document.getElementById("col-grid"),P=document.getElementById("col-big");if(!J||!P)return;var O=0;function le(){var De;const ue=window.innerWidth>=768,xe=document.getElementById("col-big"),ke=document.getElementById("col-gap"),Ee=((De=document.getElementById("col-grid"))==null?void 0:De.parentElement)||null,Se=xe?xe.closest(".page"):null;if(xe&&Ee&&Se){let Ae=0;Array.from(Se.children).forEach(function(I){I!==xe&&I!==Ee&&I!==ke&&(Ae+=I.offsetHeight)});const Me=Math.max(0,Se.clientHeight-Ae),Oe=Math.round(Me*(F/100)),_=Math.max(0,Me-Oe),L=ue?50/71:45/63,M=Math.round(_*L),j=Math.max(0,_-M);ke&&(ke.style.height=Oe+"px"),xe.style.flex="none",xe.style.height=M+"px",xe.style.minHeight="0",Ee.style.flex="none",Ee.style.height=j+"px",Ee.style.minHeight="0",Ee.style.display="flex",Ee.style.overflow="hidden"}const ye=document.getElementById("col-grid");ye&&(ye.style.height="100%",ye.style.flexShrink="0",ye.style.overflowX="auto",ye.style.overflowY="hidden",ye.style.alignItems="center",ye.style.width="100%"),P.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+K(q[O])+"</div>";var Le=P.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Le&&Le.addEventListener("click",function(){ie(q[O])}),requestAnimationFrame(function(){var Ae=document.getElementById("big-card-inner");if(!(!Ae||!P)){var Me=P.clientHeight,Oe=P.clientWidth-16,_=Ae.offsetHeight,L=Ae.offsetWidth;if(_>0&&L>0&&Me>40){var M=Math.min(Me/_,Oe/L);Ae.style.transform="scale("+M.toFixed(3)+")",Ae.style.transformOrigin="center center"}}}),J.innerHTML=q.map(function(Ae,Me){var Oe=Me===O,_="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Oe?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Me+'" style="'+_+'">'+se(Ae,Oe)+"</div>"}).join(""),J.querySelectorAll(".col-mini-item").forEach(function(Ae){Ae.addEventListener("click",function(){O=Number(Ae.dataset.idx),le(),Ae.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var Ae=ye?ye.clientHeight:0,Me=J.querySelector(".col-mini-item > div");if(!(!Ae||!Me)){var Oe=Me.style.zoom;Me.style.zoom="1";var _=Me.offsetHeight;if(Me.style.zoom=Oe,!(_<=0)){var L=Ae/_;J.querySelectorAll(".col-mini-item > div").forEach(function(M){M.style.zoom=L.toFixed(4)})}}})}le()}function me(q,K){var se=window.innerWidth>=768?.76:.54,ie;if(!q||q._fake){var Y=q?q.player:null;if(!Y)return"";ie=Io(Y)}else ie=Di(q,"");var F=q&&!q._fake?v[q.player&&q.player.id]||1:0,J=F>0?'<div style="position:absolute;top:6px;right:6px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:11px;font-weight:900;padding:2px 7px;z-index:3;box-shadow:0 1px 4px rgba(0,0,0,0.4)">×'+F+"</div>":"";return'<div style="display:inline-block;position:relative;zoom:'+se+';pointer-events:none;line-height:0">'+J+ie+"</div>"}function A(q,K,se){var ie=se>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+se+"</div>":"",Y=!!K,F=ai(q,_t[q],{width:160});return Y||(F='<div style="filter:grayscale(1);opacity:0.5">'+F+"</div>"),"<div "+(K?'data-form-id="'+K.id+'"':"")+' style="position:relative;cursor:pointer">'+ie+F+"</div>"}function G(q,K){var se=window.innerWidth>=768?.76:.54,ie=ai(q,_t[q],{width:140});return K||(ie='<div style="filter:grayscale(1);opacity:0.45">'+ie+"</div>"),'<div style="display:inline-block;zoom:'+se+';line-height:0;pointer-events:none">'+ie+"</div>"}function be(q){if(N){const K=E();if(!K.length){q.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const se=K.map(ie=>s.find(Y=>Y.player.id===ie.id)||{_fake:!0,player:ie,id:"fake-"+ie.id});te(se,ie=>ie._fake?Io(ie.player):Di(ie,""),ie=>ie._fake?me({player:ie.player,id:"x",_fake:!0}):me(ie),ie=>{ie._fake||Ao(ie,s,v,e)})}else{const K=S();if(!K.length){q.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const se={};K.forEach(Y=>{const F=Y.player.id;se[F]||(se[F]=[]),se[F].push(Y)});const ie=Object.values(se).map(Y=>Er(Y)).filter(Y=>!V||(v[Y.player.id]||1)>1);if(V&&!ie.length){q.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte en plusieurs exemplaires.</div>';return}te(ie,Y=>{const F=v[Y.player.id]||1,J=F>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${F}</div>`:"",O=s.filter(le=>le.player.id===Y.player.id&&le.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Di(Y,J+O)},Y=>me(Y),Y=>Ao(Y,s,v,e))}}function W(q){const K=N?u:[...k];if(!K.length){q.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const se=K.map(ie=>({formation:ie,card:f.find(Y=>Y.formation===ie)||null,owned:k.has(ie)}));te(se,({formation:ie,card:Y,owned:F})=>A(ie,F?Y:null,F?f.filter(J=>J.formation===ie).length:0),({formation:ie,owned:Y})=>G(ie,Y),({card:ie,owned:Y})=>{Y&&ie&&Tr(ie,f,e,n)},"#1A6B3C",5)}function pe(q){const K=Object.keys(x),se=N?K.length?K:w:[...p];if(!se.length){q.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const ie=se.map(Y=>({type:Y,gc:Ge[Y]||{icon:"⚡",desc:""},def:x[Y]||null,owned:p.has(Y),card:c.find(F=>F.gc_type===Y)||null}));te(ie,({type:Y,gc:F,def:J,owned:P,card:O})=>{var ye;const le=(J==null?void 0:J.name)||Y,ue=P?c.filter(Le=>Le.gc_type===Y).length:0,xe=ue>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ue}</div>`:"",ke=(J==null?void 0:J.effect)||F.desc||"",Ee=J!=null&&J.image_url?`/icons/${J.image_url}`:((ye=J==null?void 0:J.club)==null?void 0:ye.logo_url)||(J!=null&&J.country_code?`https://flagsapi.com/${J.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);let Se=it(le,Ee,F.icon,ke,{width:160,onClick:P});return P||(Se=`<div style="filter:grayscale(1);opacity:0.5">${Se}</div>`),`<div ${P&&O?`data-gc-id="${O.id}" data-gc-type="${Y}"`:""} style="position:relative">${xe}${Se}</div>`},({type:Y,gc:F,def:J,owned:P})=>{const O=window.innerWidth>=768?.76:.54,le=(J==null?void 0:J.name)||Y,ue=(J==null?void 0:J.effect)||F.desc||"",xe=J!=null&&J.image_url?`/icons/${J.image_url}`:null;let ke=it(le,xe,F.icon,ue,{width:140});return P||(ke=`<div style="filter:grayscale(1);opacity:0.45">${ke}</div>`),`<div style="display:inline-block;zoom:${O};line-height:0;pointer-events:none">${ke}</div>`},({type:Y,owned:F,def:J})=>{F&&zr(Y,J,n)},"#7a28b8",5)}function ce(q){const K="#4FC3F7",se="/";if(!y.length){q.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const ie={};y.forEach(F=>{const J=F.stadium_id||"?";(ie[J]=ie[J]||[]).push(F)});const Y=Object.entries(ie).map(([F,J])=>({sid:F,def:b[F]||null,count:J.length,card:J[0]}));te(Y,({def:F,count:J})=>{var ke,Ee;const P=(F==null?void 0:F.name)||"?",O=((ke=F==null?void 0:F.club)==null?void 0:ke.encoded_name)||(F==null?void 0:F.country_code)||"—",le=F!=null&&F.image_url?`${se}icons/${F.image_url}`:((Ee=F==null?void 0:F.club)==null?void 0:Ee.logo_url)||(F!=null&&F.country_code?`https://flagsapi.com/${F.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),ue=J>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${J}</div>`:"",xe=`${O}<br>+10 ⭐ joueurs alliés`;return`<div style="position:relative">${ue}${Ot(P,le,xe,{width:160})}</div>`},({def:F})=>{var xe,ke;const J=window.innerWidth>=768?.76:.54,P=(F==null?void 0:F.name)||"?",O=((xe=F==null?void 0:F.club)==null?void 0:xe.encoded_name)||(F==null?void 0:F.country_code)||"—",le=F!=null&&F.image_url?`${se}icons/${F.image_url}`:((ke=F==null?void 0:F.club)==null?void 0:ke.logo_url)||(F!=null&&F.country_code?`https://flagsapi.com/${F.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),ue=`${O}<br>+10 ⭐`;return`<div style="display:inline-block;zoom:${J};line-height:0;pointer-events:none">${Ot(P,le,ue,{width:140})}</div>`},null,K,5)}t.querySelectorAll(".col-tab-btn").forEach(q=>{q.addEventListener("click",()=>{T=q.dataset.tab,z="Tous",C="",N=!1,t.querySelectorAll(".col-tab-btn").forEach(K=>{const se=K.dataset.tab===T;K.style.borderBottomColor=se?"var(--green)":"transparent",K.style.color=se?"var(--green)":"var(--tile-fg-dim)"}),U(),$()})}),U(),$()}function zr(t,e,i){const o=Ge[t]||{icon:"⚡",desc:"Effet spécial."},r=(e==null?void 0:e.name)||t,n=(e==null?void 0:e.effect)||o.desc,a=e!=null&&e.image_url?`/icons/${e.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      ${it(r,a,o.icon,n,{width:200})}
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const bi=1e3;function Tr(t,e,i,o){var x,m,b;const{state:r,toast:n,closeModal:a,navigate:d,refreshProfile:l}=i,s=t.formation,c={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const u=_t[s]||{},w=Qi[s]||[],v=290,k=360,p=20;function T(C){const N=u[C];return N?{x:N.x*v,y:N.y*k}:null}let z=`<svg width="${v}" height="${k}" viewBox="0 0 ${v} ${k}" xmlns="http://www.w3.org/2000/svg">`;for(const[C,N]of w){const V=T(C),Z=T(N);!V||!Z||(z+=`<line x1="${V.x}" y1="${V.y}" x2="${Z.x}" y2="${Z.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const C of Object.keys(u)){const N=T(C);if(!N)continue;const V=C.replace(/\d+/,""),Z=c[V]||"#555";z+=`<circle cx="${N.x}" cy="${N.y}" r="${p}" fill="${Z}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,z+=`<text x="${N.x}" y="${N.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${V}</text>`}return z+="</svg>",z}const y=e.filter(u=>u.formation===s);y.length;const g=!t.is_for_sale;o(`Formation ${s}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${f()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+5</b> à l'action (<b>+10</b> si les deux correspondent).
      </div>
    </div>
    ${clubsHTML}

    <!-- Marché (optionnel) -->
    ${g?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(x=document.getElementById("direct-sell-form-btn"))==null||x.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${s} pour ${bi.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const u=y.find(v=>!v.is_for_sale)||y[0];if(!u){n("Aucune carte à vendre","error");return}await h.from("market_listings").delete().eq("card_id",u.id),await h.from("transfer_history").delete().eq("card_id",u.id);const{error:w}=await h.from("cards").delete().eq("id",u.id);if(w){n(w.message,"error");return}await h.from("users").update({credits:(r.profile.credits||0)+bi}).eq("id",r.profile.id),await l(),n(`+${bi.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),d("collection")}),(m=document.getElementById("market-sell-form-btn"))==null||m.addEventListener("click",async()=>{const u=parseInt(document.getElementById("sell-price-form").value);if(!u||u<1){n("Prix invalide","error");return}await h.from("cards").update({is_for_sale:!0,sale_price:u}).eq("id",t.id),await h.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:u}),n("Carte mise en vente sur le marché !","success"),a(),d("collection")}),(b=document.getElementById("cancel-sell-form-btn"))==null||b.addEventListener("click",async()=>{await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await h.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),a(),d("collection")})}async function Ao(t,e,i,o){var be,W,pe,ce,q,K,se,ie,Y,F,J;const{state:r,toast:n,openModal:a,closeModal:d,navigate:l,refreshProfile:s}=o,c=t.player,f=e.filter(P=>P.player.id===c.id),y=f.length,g=t.evolution_bonus||0,x=Math.max((Number(c.note_g)||0)+(c.job==="GK"||c.job2==="GK"?g:0),(Number(c.note_d)||0)+(c.job==="DEF"||c.job2==="DEF"?g:0),(Number(c.note_m)||0)+(c.job==="MIL"||c.job2==="MIL"?g:0),(Number(c.note_a)||0)+(c.job==="ATT"||c.job2==="ATT"?g:0)),m=c.rarity||"normal",{data:b}=await h.from("sell_price_configs").select("*").eq("rarity",m).lte("note_min",x).gte("note_max",x).order("note_min",{ascending:!1}).limit(1),u=((be=b==null?void 0:b[0])==null?void 0:be.price)??$r[m]??1e3,w=((W=b==null?void 0:b[0])==null?void 0:W.price_min)??null,v=((pe=b==null?void 0:b[0])==null?void 0:pe.price_max)??null;Ct(c);const k=gi(c,c.job)+g,p=c.job2?gi(c,c.job2)+(gi(c,c.job2)>0?g:0):null;Qt[c.job],c.job2&&Qt[c.job2];const T=_r[c.rarity]||"#ccc",z=Lr[c.country_code]||c.country_code||"",C=t.evolution_bonus||0,V=k+C,Z=p||0,ne=Z>0?Z+C:0,S=f.map(P=>P.id);let E={};if(S.length){const{data:P}=await h.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",S).order("transferred_at",{ascending:!0});(P||[]).forEach(O=>{E[O.card_id]||(E[O.card_id]=[]),E[O.card_id].push(O)})}const U=S.length?`
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

      ${y-1>0?`<div style="font-size:13px;font-weight:700;margin-bottom:10px">🗂️ Copies (${y-1})</div>`:`
        <div style="font-size:12px;color:#aaa;font-style:italic">Aucune autre copie.</div>
      `}
      <!-- Grille de mini-cartes (copies uniquement, l'exemplaire 1 = carte principale affichée en haut) -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${f.filter(P=>P.id!==t.id).map((P,O)=>{const le=E[P.id]||[],ue=P.is_for_sale,xe=le.length?le[le.length-1]:null,ke=P.evolution_bonus||0,Ee=xe?xe.source==="booster"?"Booster":xe.price?xe.price.toLocaleString("fr")+" cr.":"—":"—",Se=xe?new Date(xe.transferred_at).toLocaleDateString("fr",{day:"2-digit",month:"2-digit",year:"numeric"}):"",ye=80,Le=Math.round(ye*657/507),De=je({...c,_evolution_bonus:ke},{width:ye});return`
            <div class="exemplaire-row" data-card-id="${P.id}" data-card-idx="${O}"
              style="position:relative;cursor:${ue?"not-allowed":"pointer"};opacity:${ue?.55:1};transition:transform .1s">
              <!-- Checkbox cachée -->
              <input type="checkbox" class="expl-check"
                data-id="${P.id}" data-evo="${ke}" data-note="${gi(c,c.job)}"
                ${ue?"disabled":""}
                style="display:none">
              <!-- Wrapper exactement aux dimensions de la carte -->
              <div class="expl-mini-card" style="position:relative;width:${ye}px;height:${Le}px;border-radius:8px;overflow:hidden">
                ${De}
                <!-- Overlay vert sélection — couvre toute la carte -->
                <div class="expl-sel-overlay" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(26,107,60,0.38);pointer-events:none;z-index:10;box-shadow:inset 0 0 0 3px #1A6B3C;border-radius:8px"></div>
                <!-- Checkmark -->
                <div class="expl-sel-check" style="display:none;position:absolute;top:5px;left:5px;width:20px;height:20px;background:#1A6B3C;border-radius:50%;z-index:11;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:900">✓</div>
                ${ue?'<div style="position:absolute;top:0;right:0;background:#e67e22;color:#fff;font-size:6px;font-weight:900;padding:2px 4px;border-radius:0 6px 0 4px;z-index:12">VENTE</div>':""}
              </div>
              <!-- Source + date -->
              <div style="font-size:9px;color:#888;text-align:center;margin-top:3px;line-height:1.3">
                ${Ee}${Se?`<br>${Se}`:""}
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
              ${(t.evolution_bonus||0)>0?`+${t.evolution_bonus} appliqué${t.evolution_bonus>1?"s":""} · Note : ${V}${c.job2&&Z>0?` / ${ne}`:""}`:`Note actuelle : ${V}${c.job2&&Z>0?` / ${ne}`:""}`}
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
      ${je({...c,_evolution_bonus:g},{width:160})}


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
            <div style="font-weight:700;font-size:13px;color:#333">${z||"—"}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">CLUB</div>
            <div style="font-weight:700;font-size:13px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${((ce=c.clubs)==null?void 0:ce.encoded_name)||"—"}</div>
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
            ${[["GK",c.note_g],["DEF",c.note_d],["MIL",c.note_m],["ATT",c.note_a]].map(([P,O])=>{const le=Qt[P],ue=P==="GK"?"#fff":le,xe=P===c.job||P===c.job2,ke=(Number(O)||0)+(xe&&C>0?C:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${le};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${ue};font-family:Arial Black,Arial;line-height:1">${ke}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${ue}">${P}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:900;font-size:18px;color:#1A6B3C">×${y}</div>
        </div>
      </div>
    </div>
    ${U}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(q=document.getElementById("close-detail"))==null||q.addEventListener("click",d);let $=new Set;const te=c.rarity==="pepite"?1.3:c.rarity==="papyte"?.7:1;function me(){let P=0;return document.querySelectorAll(".expl-check:checked").forEach(O=>{if(O.dataset.id===t.id)return;const ue=Number(O.dataset.evo)||0,xe=Number(O.dataset.note)||0;P+=xe+ue}),Math.round(P*te)}const A=()=>{const P=$.size,O=document.getElementById("sell-action-panel");if(!O)return;O.style.display=P>0?"block":"none",document.getElementById("sell-selected-count").textContent=P;const le=document.getElementById("evolve-btn");if(le){const ue=me();le.textContent=ue>0?`⬆️ Évoluer (+${ue})`:"⬆️ Évoluer"}};document.querySelectorAll(".expl-check").forEach(P=>{P.addEventListener("change",()=>{const O=P.dataset.id;P.checked?$.add(O):$.delete(O);const le=P.closest(".exemplaire-row");if(le){const ue=le.querySelector(".expl-sel-overlay"),xe=le.querySelector(".expl-sel-check");ue&&(ue.style.display=P.checked?"block":"none"),xe&&(xe.style.display=P.checked?"flex":"none"),le.style.transform=P.checked?"scale(1.05)":"scale(1)"}A()})}),document.querySelectorAll(".exemplaire-row").forEach(P=>{P.addEventListener("click",O=>{if(O.target.tagName==="INPUT")return;const le=P.querySelector(".expl-check");le&&!le.disabled&&(le.checked=!le.checked,le.dispatchEvent(new Event("change")))})}),(K=document.getElementById("evolve-btn"))==null||K.addEventListener("click",async()=>{if(y<=1)return;const P=[...$];if(!P.length)return;if($.has(t.id)){const ye=document.createElement("div");ye.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ye.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(ye),ye.querySelector("#err-close").addEventListener("click",()=>ye.remove()),ye.addEventListener("click",Le=>{Le.target===ye&&ye.remove()});return}const O=P.filter(ye=>ye!==t.id);if(!O.length){n("Sélectionne des copies à sacrifier","warning");return}const le=O.reduce((ye,Le)=>{const De=document.querySelector(`.expl-check[data-id="${Le}"]`),Ae=De&&Number(De.dataset.evo)||0,Me=De&&Number(De.dataset.note)||0;return ye+Me+Ae},0),ue=Math.round(le*te),xe=c.rarity==="pepite"?" (+30% pépite ✨)":c.rarity==="papyte"?" (-30% papyte)":"";if(!await new Promise(ye=>{const Le=document.createElement("div");Le.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",Le.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${c.firstname} ${c.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${O.length}</strong> copie${O.length>1?"s":""} sacrifiée${O.length>1?"s":""}<br>
            ➕ Brut : <strong>+${le}</strong>${xe?`<span style="font-size:11px;color:#888"> ${xe}</span>`:""}<br>
            ⬆️ Bonus final : <strong style="color:#1A6B3C">+${ue}</strong><br>
            📈 Évolution : <strong>${t.evolution_bonus||0}</strong> → <strong style="color:#1A6B3C">${(t.evolution_bonus||0)+ue}</strong><br>
            📊 Note finale : <strong>${k}</strong> → <strong style="color:#1A6B3C">${k+ue}</strong>
            ${p&&p>0?`<br>📊 Note 2 finale : <strong>${p}</strong> → <strong style="color:#1A6B3C">${p+ue}</strong>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(Le),Le.querySelector("#sac-cancel").addEventListener("click",()=>{Le.remove(),ye(!1)}),Le.querySelector("#sac-ok").addEventListener("click",()=>{Le.remove(),ye(!0)}),Le.addEventListener("click",De=>{De.target===Le&&(Le.remove(),ye(!1))})}))return;if(O.length){await h.from("market_listings").delete().in("card_id",O),await h.from("deck_cards").delete().in("card_id",O),await h.from("transfer_history").delete().in("card_id",O),await h.from("decks").update({stadium_card_id:null}).in("stadium_card_id",O);const{error:ye}=await h.from("cards").delete().in("id",O);if(ye){n("Erreur suppression : "+ye.message,"error");return}}const Ee=(t.evolution_bonus||0)+ue,{error:Se}=await h.from("cards").update({evolution_bonus:Ee}).eq("id",t.id);if(Se){n("Erreur évolution : "+Se.message,"error");return}n(`⬆️ ${c.firstname} ${c.surname_real} : note ${k} → ${k+Ee} (+${ue}) !`,"success",4e3),d(),l("collection")});async function G(P){const{data:O}=await h.from("sell_price_configs").select("price_min, price_max").eq("rarity",c.rarity).lte("note_min",k).gte("note_max",k).order("note_max",{ascending:!0}).limit(1).maybeSingle();return O?P<O.price_min||P>O.price_max?{ok:!1,min:O.price_min,max:O.price_max}:{ok:!0}:{ok:!0}}(se=document.getElementById("market-sell-btn"))==null||se.addEventListener("click",async()=>{var Ee;const P=[...$];if(!P.length){n("Sélectionne au moins un exemplaire","warning");return}const O=parseInt((Ee=document.getElementById("sell-market-price"))==null?void 0:Ee.value);if(!O||O<1){n("Prix invalide","error");return}const le=await G(O);if(!le.ok){n(`Prix hors grille : entre ${le.min.toLocaleString("fr")} et ${le.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:ue}=await h.from("cards").update({is_for_sale:!0,sale_price:O}).in("id",P);if(ue){n(ue.message,"error");return}const xe=P.map(Se=>({seller_id:r.profile.id,card_id:Se,price:O,status:"active"})),{error:ke}=await h.from("market_listings").insert(xe);ke&&console.warn("[Market] insert listings:",ke.message),n(`${P.length} carte${P.length>1?"s":""} mise${P.length>1?"s":""} en vente à ${O.toLocaleString("fr")} cr. chacune !`,"success"),d(),l("collection")}),(ie=document.getElementById("single-sell-btn"))==null||ie.addEventListener("click",async()=>{var xe;const P=parseInt((xe=document.getElementById("single-sell-price"))==null?void 0:xe.value);if(!P||P<1){n("Prix invalide","error");return}const O=await G(P);if(!O.ok){n(`Prix hors grille : entre ${O.min.toLocaleString("fr")} et ${O.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:le}=await h.from("cards").update({is_for_sale:!0,sale_price:P}).eq("id",t.id);if(le){n(le.message,"error");return}const{error:ue}=await h.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:P,status:"active"});ue&&console.warn("[Market] insert listing:",ue.message),n(`Carte mise en vente à ${P.toLocaleString("fr")} cr. !`,"success"),d(),l("collection")}),(Y=document.getElementById("single-direct-sell-btn"))==null||Y.addEventListener("click",async()=>{const P=w??u;if(!confirm(`Vendre cette carte immédiatement pour ${P.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;await h.from("market_listings").delete().eq("card_id",t.id),await h.from("transfer_history").delete().eq("card_id",t.id);const{error:O}=await h.from("cards").delete().eq("id",t.id);if(O){n(O.message,"error");return}await h.from("users").update({credits:(r.profile.credits||0)+P}).eq("id",r.profile.id),await s(),n(`+${P.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),l("collection")}),(F=document.getElementById("market-direct-sell-btn"))==null||F.addEventListener("click",async()=>{const P=[...$];if(!P.length){n("Sélectionne au moins un exemplaire","warning");return}const le=(w??u)*P.length;if(!confirm(`Vendre ${P.length} carte${P.length>1?"s":""} immédiatement pour ${le.toLocaleString("fr")} crédits au total ? Cette action est irréversible.`))return;await h.from("market_listings").delete().in("card_id",P),await h.from("transfer_history").delete().in("card_id",P);const{error:ue}=await h.from("cards").delete().in("id",P);if(ue){n(ue.message,"error");return}await h.from("users").update({credits:(r.profile.credits||0)+le}).eq("id",r.profile.id),await s(),n(`+${le.toLocaleString("fr")} crédits ! ${P.length} carte${P.length>1?"s":""} vendue${P.length>1?"s":""}.`,"success"),d(),l("collection")}),(J=document.getElementById("cancel-sell-btn"))==null||J.addEventListener("click",async()=>{await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await h.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),d(),l("collection")})}function Mo(t,e=""){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${t}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(e||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const r=o.querySelector("#pm-input");r.focus(),r.select();const n=a=>{o.remove(),i(a)};o.querySelector("#pm-ok").addEventListener("click",()=>n(r.value.trim()||null)),o.querySelector("#pm-cancel").addEventListener("click",()=>n(null)),o.querySelector("#pm-cancel2").addEventListener("click",()=>n(null)),o.addEventListener("click",a=>{a.target===o&&n(null)}),r.addEventListener("keydown",a=>{a.key==="Enter"&&n(r.value.trim()||null),a.key==="Escape"&&n(null)})})}function Ir(t,e=!1){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${t}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${e?"":"btn-primary"}" id="cm-ok" style="${e?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const r=n=>{o.remove(),i(n)};o.querySelector("#cm-ok").addEventListener("click",()=>r(!0)),o.querySelector("#cm-cancel").addEventListener("click",()=>r(!1)),o.addEventListener("click",n=>{n.target===o&&r(!1)})})}const $i={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Hi(t,e){const{state:i,navigate:o,toast:r}=e;Kt(o,i.profile,"decks","/icons/",r),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await h.from("decks").select("id,name,formation,stadium_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1}),a=[...new Set((n||[]).map(l=>l.stadium_card_id).filter(Boolean))];let d={};if(a.length){const{data:l}=await h.from("cards").select("id, stadium_id, stadium_definitions(image_url, country_code, club:clubs(logo_url))").in("id",a);(l||[]).forEach(s=>{var y;const c=s.stadium_definitions,f=((y=c==null?void 0:c.club)==null?void 0:y.logo_url)||(c!=null&&c.image_url?`/icons/${c.image_url}`:null)||(c!=null&&c.country_code?`https://flagsapi.com/${c.country_code}/flat/64.png`:null);d[s.id]=f})}t.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const l=await Mo("Nom du deck",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!l)return;const{data:s,error:c}=await h.from("decks").insert({owner_id:i.profile.id,name:l}).select().single();if(c){r(c.message,"error");return}r("Deck créé !","success"),Co(s.id,t,e)}),t.querySelectorAll("[data-open-deck]").forEach(l=>{l.addEventListener("click",()=>Co(l.dataset.openDeck,t,e))}),t.querySelectorAll("[data-rename]").forEach(l=>{l.addEventListener("click",async()=>{const s=await Mo("Nouveau nom",l.dataset.name);if(!s||s===l.dataset.name)return;const{error:c}=await h.from("decks").update({name:s}).eq("id",l.dataset.rename);if(c){r(c.message,"error");return}r("Deck renommé !","success"),Hi(t,e)})}),t.querySelectorAll("[data-delete]").forEach(l=>{l.addEventListener("click",async()=>{if(!await Ir(`Supprimer le deck "${l.dataset.name}" ? Cette action est irréversible.`,!0))return;await h.from("deck_cards").delete().eq("deck_id",l.dataset.delete);const{error:s}=await h.from("decks").delete().eq("id",l.dataset.delete);if(s){r(s.message,"error");return}r("Deck supprimé.","success"),Hi(t,e)})})}async function Co(t,e,i){const{state:o,toast:r}=i;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await h.from("decks").select("*").eq("id",t).single(),{data:a}=await h.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:d}=await h.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id).eq("card_type","stadium"),l=(a||[]).filter(u=>u.card_type==="player"&&u.player),s=(a||[]).filter(u=>u.card_type==="formation"),c=(d||[]).filter(u=>u.card_type==="stadium"),f=[...new Set(c.map(u=>u.stadium_id).filter(Boolean))];let y={};if(c.forEach(u=>{u.stadium_def&&u.stadium_id&&(y[u.stadium_id]=u.stadium_def)}),f.length&&Object.keys(y).length<f.length){const{data:u}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",f);(u||[]).forEach(w=>{y[w.id]=w})}const g=s.map(u=>u.formation).filter(Boolean),{data:x}=await h.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",t);let m=n.formation||"4-4-2";g.length>0&&!g.includes(m)&&(m=g[0]);const b={deckId:t,name:n.name,formation:m,formationCardId:n.formation_card_id,stadiumCardId:n.stadium_card_id||null,slots:{},subs:[],playerCards:l,formationCards:s,stadiumCards:c,stadDefMap:y,availableFormations:g};(x||[]).forEach(u=>{u.is_starter?b.slots[u.position]=u.card_id:b.subs.includes(u.card_id)||b.subs.push(u.card_id)}),kt(e,b,i,!0)}function kt(t,e,i,o=!1){var m,b;const{navigate:r}=i;o||qr(e,i),$i[e.formation];const n=jo(e.formation),a=n.filter(u=>e.slots[u]).length,d=e.availableFormations.length>0?e.availableFormations:Object.keys($i),l=(m=e.stadiumCards)==null?void 0:m.find(u=>u.id===e.stadiumCardId),s=l&&((b=e.stadDefMap)==null?void 0:b[l.stadium_id])||null,c=e.subs.map(u=>e.playerCards.find(w=>w.id===u)).filter(Boolean);c.length!==e.subs.length&&(e.subs=c.map(u=>u.id)),[...Object.values(e.slots),...e.subs],t.innerHTML=`
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
                ${je({...w,_evolution_bonus:w._evolution_bonus||0},{width:90,showStad:!0,stadDef:s})}
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
              ${ai(e.formation,_t[e.formation],{width:100})}
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
                  ${je({...w,_evolution_bonus:w._evolution_bonus||0},{width:44,showStad:!0,stadDef:s})}
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
  </div>`;const f=window.innerWidth>=900,y=t.querySelector(".deck-pc-layout"),g=t.querySelector(".deck-mobile-layout");y&&(y.style.display=f?"block":"none"),g&&(g.style.display=f?"none":"block"),t.querySelectorAll("#save-deck").forEach(u=>{u.closest(".page-body").style.display=f?"none":"block"}),Ar(t,e,n,i),t.querySelectorAll("#builder-back").forEach(u=>u.addEventListener("click",()=>r("decks")));const x=()=>{const{openModal:u,closeModal:w}=i,k=`<div style="display:flex;flex-wrap:wrap;gap:12px;padding:8px;justify-content:center">
      ${[...new Set(d)].map(p=>{const T=p===e.formation;return`<div data-forma="${p}" style="cursor:pointer;border-radius:10px;${T?"box-shadow:0 0 0 3px #1A6B3C":""}">
          ${ai(p,_t[p],{width:90})}
        </div>`}).join("")}
    </div>`;u("⚽ Choisir une formation",k),document.querySelectorAll("#modal-body [data-forma]").forEach(p=>{p.addEventListener("click",()=>{e.formation=p.dataset.forma;const T=jo(e.formation),z={};T.forEach(C=>{e.slots[C]&&(z[C]=e.slots[C])}),e.slots=z,w(),kt(t,e,i)})})};t.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(u=>u.addEventListener("click",x)),t.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(u=>u.addEventListener("click",()=>Mr(e,t,i))),t.querySelectorAll("#save-deck, #save-deck-pc").forEach(u=>u.addEventListener("click",()=>Br(e,i))),t.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{e.subs=e.subs.filter(w=>w!==u.dataset.removeSub),kt(t,e,i)})}),t.querySelectorAll("#add-sub-btn").forEach(u=>u.addEventListener("click",()=>jr(e,t,i)))}function Ar(t,e,i,o){var v,k,p;const r=window.innerWidth>=900,n=t.querySelector(r?"#deck-field-pc":"#deck-field-mobile");if(!n)return;const a=(v=e.stadiumCards)==null?void 0:v.find(T=>T.id===e.stadiumCardId),d=a&&((k=e.stadDefMap)==null?void 0:k[a.stadium_id])||null,l=_t[e.formation]||{},s=Uo(e.formation)||[],c={};for(const T of i){const z=e.slots[T],C=z?e.playerCards.find(N=>N.id===z):null;C!=null&&C.player?c[T]={...C.player,_evolution_bonus:C.evolution_bonus||0,face:C.player.face||null}:c[T]=null}const f=window.innerWidth>=900,y=f?window.innerWidth-280:window.innerWidth-20,g=f?Math.min(y,860):y,x=Math.round(f?g*.82:g*.85),m=f?84:44;let b="";for(const[T,z]of s){const C=l[T],N=l[z];if(!C||!N)continue;const V=C.x*g,Z=Math.round(.03*x+C.y*.85*x),ne=N.x*g,S=Math.round(.03*x+N.y*.85*x),E=c[T],U=c[z],$=zi(E,U);$==="#ff3333"||$==="#cc2222"?b+=`<line x1="${V.toFixed(1)}" y1="${Z.toFixed(1)}" x2="${ne.toFixed(1)}" y2="${S.toFixed(1)}" stroke="${$}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(b+=`<line x1="${V.toFixed(1)}" y1="${Z.toFixed(1)}" x2="${ne.toFixed(1)}" y2="${S.toFixed(1)}" stroke="${$}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,b+=`<line x1="${V.toFixed(1)}" y1="${Z.toFixed(1)}" x2="${ne.toFixed(1)}" y2="${S.toFixed(1)}" stroke="${$}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let u="";const w=Math.round(m*657/507);for(const T of i){const z=l[T];if(!z)continue;const C=c[T],N=z.x*g;z.y*x;const V=Math.round(.03*x+z.y*(.85*x)),Z=Math.round(N-m/2),ne=Math.round(V-w/2);if(C){const S=T.replace(/\d+/,""),E=d&&(d.club_id&&String(C.club_id)===String(d.club_id)||d.country_code&&C.country_code===d.country_code),U=je({...C,_evolution_bonus:C._evolution_bonus||0},{width:m,showStad:!0,stadDef:d,role:S});E&&((p=d.club)!=null&&p.logo_url||d.image_url),u+=`<div style="position:absolute;left:${Z}px;top:${ne}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${T}">
        <div style="position:relative">${U}</div>
      </div>`}else{const S=T.replace(/\d+/,"");u+=`<div style="position:absolute;left:${Z}px;top:${ne}px;width:${m}px;height:${w}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${T}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${S}</span>
      </div>`}}n.innerHTML=`
    <div style="position:relative;width:${g}px;height:${x}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${g} ${x}">${b}</svg>
      ${u}
    </div>`,n.querySelectorAll(".deck-slot-hit").forEach(T=>{T.addEventListener("click",()=>Cr(T.dataset.pos,e,t,o))})}function Mr(t,e,i){var d;const{openModal:o,closeModal:r}=i,n=new Set,a=(t.stadiumCards||[]).filter(l=>{const s=l.stadium_id||l.id;return n.has(s)?!1:(n.add(s),!0)});o("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:90px;text-align:center">
        <div style="width:85px;height:112px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${t.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:26px">🚫</span>
          <span style="font-size:10px;color:#666">Aucun</span>
        </div>
      </div>
      ${a.map(l=>{var g;const s=t.stadDefMap[l.stadium_id],c=((g=s==null?void 0:s.club)==null?void 0:g.logo_url)||(s==null?void 0:s.image_url)||(s!=null&&s.country_code?`https://flagsapi.com/${s.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),f=t.stadiumCardId===l.id,y=Ot((s==null?void 0:s.name)||"Stade",c,"+10⭐",{width:90});return`<div class="stad-choice" data-stad-id="${l.id}" style="cursor:pointer;position:relative;border-radius:8px;${f?"box-shadow:0 0 0 3px #4fc3f7":""}">
          ${y}
        </div>`}).join("")}
    </div>`),(d=document.getElementById("stad-none"))==null||d.addEventListener("click",()=>{t.stadiumCardId=null,r(),kt(e,t,i)}),document.querySelectorAll(".stad-choice").forEach(l=>{l.addEventListener("click",()=>{t.stadiumCardId=l.dataset.stadId,r(),kt(e,t,i)})})}function Cr(t,e,i,o){var x,m,b,u,w;const{openModal:r,closeModal:n}=o,a=t.replace(/\d+/,""),d=(x=e.stadiumCards)==null?void 0:x.find(v=>v.id===e.stadiumCardId),l=d&&((m=e.stadDefMap)==null?void 0:m[d.stadium_id])||null,s=e.slots[t],c=s?e.playerCards.find(v=>v.id===s):null;(b=c==null?void 0:c.player)==null||b.id;const f=new Set;Object.entries(e.slots).forEach(([v,k])=>{var T;if(v===t||!k)return;const p=e.playerCards.find(z=>z.id===k);(T=p==null?void 0:p.player)!=null&&T.id&&f.add(p.player.id)}),e.subs.forEach(v=>{var p;const k=e.playerCards.find(T=>T.id===v);(p=k==null?void 0:k.player)!=null&&p.id&&f.add(k.player.id)});const y=new Set,g=e.playerCards.filter(v=>{const k=v.player;return!(k.job===a||k.job2===a)||f.has(k.id)||y.has(k.id)?!1:(y.add(k.id),!0)});g.sort((v,k)=>{const p=v.evolution_bonus||0,T=k.evolution_bonus||0,z=(a==="GK"?v.player.note_g:a==="DEF"?v.player.note_d:a==="MIL"?v.player.note_m:v.player.note_a)+(a===v.player.job||a===v.player.job2?p:0);return(a==="GK"?k.player.note_g:a==="DEF"?k.player.note_d:a==="MIL"?k.player.note_m:k.player.note_a)+(a===k.player.job||a===k.player.job2?T:0)-z}),r(`Choisir ${a} — ${t}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${e.slots[t]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${g.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+g.map(v=>{const k={...v.player,_evolution_bonus:v.evolution_bonus||0};return`<div class="player-option" data-card-id="${v.id}" style="cursor:pointer">
          ${je(k,{width:100,showStad:!0,stadDef:l,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(u=document.getElementById("close-selector"))==null||u.addEventListener("click",n),(w=document.getElementById("remove-player"))==null||w.addEventListener("click",()=>{delete e.slots[t],n(),kt(i,e,o)}),document.querySelectorAll(".player-option").forEach(v=>{v.addEventListener("click",()=>{e.slots[t]=v.dataset.cardId,n(),kt(i,e,o)})})}function jr(t,e,i){var c,f,y;const{openModal:o,closeModal:r}=i,n=(c=t.stadiumCards)==null?void 0:c.find(g=>g.id===t.stadiumCardId),a=n&&((f=t.stadDefMap)==null?void 0:f[n.stadium_id])||null,d=new Set;Object.keys(t.slots).forEach(g=>{var b;const x=t.slots[g];if(!x)return;const m=t.playerCards.find(u=>u.id===x);(b=m==null?void 0:m.player)!=null&&b.id&&d.add(m.player.id)}),t.subs.forEach(g=>{var m;const x=t.playerCards.find(b=>b.id===g);(m=x==null?void 0:x.player)!=null&&m.id&&d.add(x.player.id)});const l=new Set,s=t.playerCards.filter(g=>{var x,m,b;return d.has((x=g.player)==null?void 0:x.id)||l.has((m=g.player)==null?void 0:m.id)?!1:(l.add((b=g.player)==null?void 0:b.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+s.map(g=>{const x={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div class="player-option" data-card-id="${g.id}" style="cursor:pointer">
          ${je(x,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(y=document.getElementById("close-sub-selector"))==null||y.addEventListener("click",r),document.querySelectorAll(".player-option").forEach(g=>{g.addEventListener("click",()=>{t.subs.push(g.dataset.cardId),r(),kt(e,t,i)})})}async function fn(t){const e=t.formationCards.find(r=>r.formation===t.formation),i=(e==null?void 0:e.id)||t.formationCardId;await h.from("decks").update({formation:t.formation,formation_card_id:i||null,stadium_card_id:t.stadiumCardId||null}).eq("id",t.deckId),await h.from("deck_cards").delete().eq("deck_id",t.deckId);const o=[];return Object.entries(t.slots).forEach(([r,n],a)=>{o.push({deck_id:t.deckId,card_id:n,position:r,is_starter:!0,slot_order:a})}),t.subs.forEach((r,n)=>{o.push({deck_id:t.deckId,card_id:r,position:`SUB${n+1}`,is_starter:!1,slot_order:100+n})}),o.length>0?await h.from("deck_cards").insert(o):{error:null}}let Ui=null;function qr(t,e){const{toast:i}=e;clearTimeout(Ui),document.querySelectorAll(".autosave-indicator").forEach(r=>{r.textContent="⏳ Enregistrement...",r.style.opacity="1",r.style.color=""}),Ui=setTimeout(async()=>{const{error:r}=await fn(t),n=document.querySelectorAll(".autosave-indicator");if(r){n.forEach(a=>{a.textContent="⚠️ Erreur d'enregistrement",a.style.color="#ff6b6b"}),i(r.message,"error");return}n.forEach(a=>{a.textContent="✅ Enregistré",a.style.color="",setTimeout(()=>{a.style.opacity="0"},1500)})},600)}async function Br(t,e){const{toast:i,navigate:o}=e;clearTimeout(Ui);const{error:r}=await fn(t);if(r){i(r.message,"error");return}i("Deck enregistré ✅","success"),o("decks")}function jo(t){const e=$i[t]||$i["4-4-2"],i=["GK1"];for(let o=1;o<=e.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=e.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=e.ATT;o++)i.push(`ATT${o}`);return i}function At(){return Math.min(window.innerWidth-40,860)}function Gt(){return Math.round(At()*1.1)}function mn(t){var r,n;if(!t)return null;const e=t._line||t.job||"MIL",i=e==="GK"?t.note_g||0:e==="DEF"?t.note_d||0:e==="MIL"?t.note_m||0:t.note_a||0,o=t.stadiumBonus?10:0;return{name:t.name,firstname:t.firstname||"",note:i+(t.boost||0)+o,note_g:t.note_g||0,note_d:t.note_d||0,note_m:t.note_m||0,note_a:t.note_a||0,_evolution_bonus:0,stadiumBonus:t.stadiumBonus||!1,boost:t.boost||0,job:t.job,job2:t.job2||null,_line:t._line||t.job,_col:t._col,country_code:t.country_code,club_id:t.club_id,rarity:t.rarity,clubName:t.clubName||((r=t.clubs)==null?void 0:r.encoded_name)||null,clubLogo:t.clubLogo||((n=t.clubs)==null?void 0:n.logo_url)||null,face:t.face||null,portrait:Ct(t)}}function Dr(t,e,i,o="Adversaire"){Xo("/sounds/match-opening.mp3",.3);const r=At(),n=Gt();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${o}</div>
      
      <div style="width:100%;max-width:${r}px;margin:0 auto">
        ${Zi(t,e,null,[],r,n)}
      </div>
    </div>`}function gn(t){var n,a,d;if(!t)return"";const e=l=>l?je({...l,_evolution_bonus:0},{width:52,role:l._line||l.job,showStad:!!l.stadiumBonus,extraNote:l.boost||0}):"",o={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[t.type]||"📋";return`
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
    </div>`}function Ze(t,e,i,o,r){oo("/sounds/goal.mp3",.7);const n=document.getElementById("goal-anim-overlay");n&&n.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const d=(t||[]).slice(0,3).map(l=>je({...l,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:l._line||l.job,showStad:!!l.stadiumBonus})).join("");if(a.innerHTML=`
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
      }`,document.head.appendChild(l)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),r==null||r()},400)},1800)}function bn(t,e,i){const o=document.getElementById("sub-anim-overlay");o&&o.remove();const r=document.createElement("div");r.id="sub-anim-overlay",r.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const n=Math.min(120,Math.round(window.innerWidth/4)),a=t?je({...t,_evolution_bonus:0},{width:n,role:t._line||t.job}):"",d=e?je({...e,_evolution_bonus:0},{width:n,role:e._line||e.job}):"";r.innerHTML=`
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
    </div>`,document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.4s",setTimeout(()=>{r.remove(),i==null||i()},400)},1600)}function Et(t,e="rgba(0,0,0,0.85)",i=2200){const o=document.getElementById("game-toast");o&&o.remove();const r=document.createElement("div");if(r.id="game-toast",r.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${e};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,r.textContent=t,!document.getElementById("game-toast-style")){const n=document.createElement("style");n.id="game-toast-style",n.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(n)}document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.3s",setTimeout(()=>r.remove(),300)},i)}function xn(t,e){const i=jt(t,"MIL"),o=t.stadiumBonus||e&&(e.club_id&&String(t.club_id)===String(e.club_id)||e.country_code&&t.country_code===e.country_code)?10:0;return i+o}function xt(t,e){return t.reduce((i,o)=>i+xn(o,e),0)}function yt(t){let e=0;for(let i=0;i<t.length-1;i++){const o=zi(t[i],t[i+1]);o==="#00ff88"?e+=10:o==="#FFD700"&&(e+=5)}return e}function Ei(t,e,i,o,r){return`<div id="duel-row-${o}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${e}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${t.map((n,a)=>{const d=a<t.length-1?zi(n,t[a+1]):null,l=!d||d==="#ff3333"||d==="#cc2222",s=d==="#00ff88"?"+10":d==="#FFD700"?"+5":"";return xn(n,r),n.stadiumBonus||r&&(r.club_id&&String(n.club_id)===String(r.club_id)||r.country_code&&(n.country_code,r.country_code)),`
          <div class="duel-card duel-card-${o}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${je({...n,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:r,role:"MIL",extraNote:n.boost||0})}
          </div>
          ${a<t.length-1?`<div class="duel-link duel-link-${o}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${l?"rgba(255,255,255,0.12)":d};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${l?"none":`0 0 8px ${d}`}">
            ${s?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${d}">${s}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${o}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${xt(t,r)} + ${yt(t)} liens = <b style="color:#fff">${xt(t,r)+yt(t)}</b>
      </div>
    </div>`}async function Pr(t,e){const{state:i}=e,o=i.params||{},r=o.matchMode||"vs_ai_easy",n=r==="solo",a=r==="ranked_ai",d=o.soloLevel||1,l=r.replace("vs_ai_",""),s=r;let c=null;if(n){const{data:x}=await h.from("solo_levels").select("*").eq("level_number",d).maybeSingle();c=x||{level_number:d,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500}}const f=o.rankedData||null,y=o.presetSetup||null;async function g({deckId:x,formation:m,starters:b,subsRaw:u,gcCardsEnriched:w,gcDefs:v,stadiumDef:k}){try{let p=Ni(b,m);k&&(p=vi(p,k),wi(u,k));let T=null;if(a){const Z=Rr(p)+Nr(p)*10,{jaune:ne,vert:S}=Gr(p,m),E=[.9,1,1.2],U=E[Math.floor(Math.random()*E.length)],$=Math.max(11,Math.round(Z*U));T={target_note_avg:Math.max(1,Math.round($/11)),target_total_note:$,nb_liens_jaune:ne,nb_liens_vert:S,nb_joueurs_stade:k?3:0,_variance:U}}const z=c&&{...c,target_total_note:Math.max(11,Math.round((Number(c.target_note_avg)||10)*11))},C=n?await Bo(m,z):a?await Bo(m,T):await Fr(m,l),N=C.lines||C,V=async Z=>{try{const ne=s==="vs_ai_club"||s==="solo"||s==="ranked_ai"?"club":s,{data:S,error:E}=await h.from("matches").insert({home_id:i.profile.id,away_id:null,mode:ne,home_deck_id:x,status:"in_progress"}).select().single();if(E){console.error("[MatchIA] Erreur création match:",E),ji(t,"⚠️","Impossible de créer le match ("+E.message+").","Retour",()=>e.navigate("home"));return}const U=C.stadiumDef||null;U&&N&&(vi(N,U),wi(C.subs||[],U));const $={gcDefs:v||[],matchId:S==null?void 0:S.id,mode:s,difficulty:l,formation:m,isSolo:n,soloLevel:d,soloLevelConfig:c,isRankedAI:a,rankedAIData:f,homeTeam:p,aiTeam:N,homeSubs:u,subsUsed:0,maxSubs:Math.min(u.length,3),aiSubs:C.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((C.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:C.gcCards||[],aiUsedGc:[],aiGcTarget:C.gcTarget||2,aiStadiumDef:U,homeScore:0,aiScore:0,gcCards:Z,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Or(t,$,e)}catch(ne){console.error("[MatchIA] Exception launchMatch:",ne),ji(t,"⚠️","Erreur au lancement du match : "+ne.message,"Retour",()=>e.navigate("home"))}};if(a&&y){V(y.gcCardsEnriched||[]);return}if(!w.length){V([]);return}Ii(t,w,V)}catch(p){console.error("[MatchIA] Exception setup:",p),ji(t,"⚠️","Erreur de préparation du match : "+p.message,"Retour",()=>e.navigate("home"))}}y?await g(y):await Ti(t,e,r,g)}async function Fr(t,e){var b;const{data:i}=await h.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:yn(t),subs:[],gcCards:[],stadiumDef:null};const o=Ht[t]||Ht["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},n=new Set;function a(u,w,v){var k,p;return n.add(u.id),{cardId:"ai-"+u.id+"-"+v,id:u.id,firstname:u.firstname,name:u.surname_real,country_code:u.country_code,club_id:u.club_id,job:u.job,job2:u.job2,note_g:Number(u.note_g)||0,note_d:Number(u.note_d)||0,note_m:Number(u.note_m)||0,note_a:Number(u.note_a)||0,rarity:u.rarity,skin:u.skin,hair:u.hair,hair_length:u.hair_length,face:u.face,clubName:((k=u.clubs)==null?void 0:k.encoded_name)||null,clubLogo:((p=u.clubs)==null?void 0:p.logo_url)||null,boost:0,used:!1,_line:w}}for(const u of["GK","DEF","MIL","ATT"]){const w=i.filter(z=>z.job===u&&!n.has(z.id)),v=i.filter(z=>z.job!==u&&!n.has(z.id)),k=[...w,...v],p=[];for(let z=0;z<o[u];z++){const C=k[z];C&&p.push(a(C,u,z))}const T=zt(p.length);p.forEach((z,C)=>{z._col=T[C]}),r[u]=p}const l=i.filter(u=>!n.has(u.id)).slice(0,5).map((u,w)=>a(u,u.job,100+w)),{data:s}=await h.from("gc_definitions").select("*").eq("is_active",!0),f=[...s||[]].sort(()=>Math.random()-.5).slice(0,3).map((u,w)=>({id:"ai-gc-"+w,gc_type:u.name,name:u.name,icon:"⚡",effect_type:u.effect_type,effect_params:u.effect_params||{}})),y=Object.values(r).flat(),g={};y.forEach(u=>{u.club_id&&(g[u.club_id]=(g[u.club_id]||0)+1)});const x=(b=Object.entries(g).sort((u,w)=>w[1]-u[1])[0])==null?void 0:b[0];let m=null;if(x){const{data:u}=await h.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",x).single();u&&(m={club_id:u.id,country_code:null,name:u.encoded_name+" Stadium",club:{encoded_name:u.encoded_name,logo_url:u.logo_url}})}return{lines:r,subs:l,gcCards:f,stadiumDef:m}}function Rr(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{const r=o._line||i,n=Number(r==="GK"?o.note_g:r==="DEF"?o.note_d:r==="MIL"?o.note_m:o.note_a)||0;e+=n+(o.boost||0)});return e}function Nr(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{o!=null&&o.stadiumBonus&&e++});return e}function Gr(t,e){const i={};for(const a of["GK","DEF","MIL","ATT"])(t[a]||[]).forEach((d,l)=>{i[`${a}${l+1}`]=d});const o=Uo(e)||Qi[e]||[];let r=0,n=0;for(const[a,d]of o){const l=i[a],s=i[d];if(!l||!s)continue;const c=zi(l,s);c==="#00ff88"?n++:c==="#FFD700"&&r++}return{jaune:r,vert:n}}function qo(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Zt(t,e,i){if(i<=0||!t.length)return[];const o=[...t].sort((r,n)=>Math.abs(qo(r)-e)-Math.abs(qo(n)-e));return o.slice(0,Math.min(i,o.length))}async function Bo(t,e){var E,U;const i=Number(e==null?void 0:e.target_note_avg)||10,o=Number(e==null?void 0:e.nb_liens_jaune)||0,r=Number(e==null?void 0:e.nb_liens_vert)||0,n=Number(e==null?void 0:e.nb_joueurs_stade)||0,{data:a}=await h.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url,country_code)").eq("is_active",!0).limit(300);if(!a||a.length<16)return{lines:yn(t),subs:[],gcCards:[],stadiumDef:null};const d={};a.forEach($=>{$.club_id&&(d[$.club_id]=(d[$.club_id]||0)+1)});const l=((E=Object.entries(d).sort(($,te)=>te[1]-$[1])[0])==null?void 0:E[0])||null,s=l?a.filter($=>$.club_id===l):[],c=((U=s[0])==null?void 0:U.country_code)||null,f=c?a.filter($=>$.country_code===c&&$.club_id!==l):[],y=Math.min(s.length,Math.max(2,r+1),16),g=Math.min(f.length,Math.max(0,o),16-y),x=[],m=new Set;Zt(s,i,y).forEach($=>{x.push($),m.add($.id)}),Zt(f,i,g).forEach($=>{x.push($),m.add($.id)});const b=Math.max(0,16-x.length),u=a.filter($=>!m.has($.id));Zt(u,i,b).forEach($=>{x.push($),m.add($.id)});const w=Ht[t]||Ht["4-4-2"],v={GK:[],DEF:[],MIL:[],ATT:[]},k=new Set;function p($,te,me){var A,G;return k.add($.id),{cardId:"ai-"+$.id+"-"+me,id:$.id,firstname:$.firstname,name:$.surname_real,country_code:$.country_code,club_id:$.club_id,job:$.job,job2:$.job2,note_g:Number($.note_g)||0,note_d:Number($.note_d)||0,note_m:Number($.note_m)||0,note_a:Number($.note_a)||0,rarity:$.rarity,skin:$.skin,hair:$.hair,hair_length:$.hair_length,face:$.face,clubName:((A=$.clubs)==null?void 0:A.encoded_name)||null,clubLogo:((G=$.clubs)==null?void 0:G.logo_url)||null,boost:0,used:!1,_line:te}}for(const $ of["GK","DEF","MIL","ATT"]){let te=x.filter(W=>W.job===$&&!k.has(W.id));if($==="GK"&&!te.length){const W=a.filter(pe=>pe.job==="GK"&&!k.has(pe.id));W.length&&(te=Zt(W,i,1))}const me=x.filter(W=>W.job!==$&&!k.has(W.id)),A=[...te,...me],G=[];for(let W=0;W<w[$];W++){const pe=A[W];pe&&G.push(p(pe,$,W))}const be=zt(G.length);G.forEach((W,pe)=>{W._col=be[pe]}),v[$]=G}let T=x.filter($=>!k.has($.id));if(T.length<5){const $=a.filter(te=>!k.has(te.id)&&!T.some(me=>me.id===te.id));T=T.concat(Zt($,i,5-T.length))}const z=T.slice(0,5).map(($,te)=>p($,$.job,100+te)),C=Number(e==null?void 0:e.target_total_note)||0;if(C>0){const $={GK:"note_g",DEF:"note_d",MIL:"note_m",ATT:"note_a"},te=[];for(const A of["GK","DEF","MIL","ATT"])(v[A]||[]).forEach(G=>te.push({p:G,key:$[A]}));const me=te.reduce((A,G)=>A+(Number(G.p[G.key])||0),0);if(me>0&&te.length){const A=C/me;te.forEach(W=>{W.p[W.key]=Math.max(1,Math.round((Number(W.p[W.key])||0)*A))});let G=C-te.reduce((W,pe)=>W+pe.p[pe.key],0),be=0;for(;G!==0&&be++<500;){const W=te[Math.floor(Math.random()*te.length)];G>0?(W.p[W.key]++,G--):W.p[W.key]>1&&(W.p[W.key]--,G++)}z.forEach(W=>{const pe=$[W.job]||"note_m";W[pe]=Math.max(1,Math.round((Number(W[pe])||0)*A))})}}const{data:N}=await h.from("gc_definitions").select("*").eq("is_active",!0),Z=[...N||[]].sort(()=>Math.random()-.5).slice(0,3).map(($,te)=>({id:"ai-gc-"+te,gc_type:$.name,name:$.name,icon:"⚡",effect_type:$.effect_type,effect_params:$.effect_params||{}}));let ne=null;if(n>0&&l){const{data:$}=await h.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",l).single();$&&(ne={club_id:$.id,country_code:null,name:$.encoded_name+" Stadium",club:{encoded_name:$.encoded_name,logo_url:$.logo_url}})}const S=1+Math.floor(Math.random()*3);return{lines:v,subs:z,gcCards:Z,stadiumDef:ne,gcTarget:S}}function yn(t){const e=Ht[t]||Ht["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let r=0;for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let l=0;l<e[n];l++){const s=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+r,id:"fake-"+r,firstname:"IA",name:o[r%o.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?s:2,note_d:n==="DEF"?s:2,note_m:n==="MIL"?s:2,note_a:n==="ATT"?s:2,rarity:"normal",boost:0,used:!1,_line:n}),r++}const d=zt(a.length);a.forEach((l,s)=>{l._col=d[s]}),i[n]=a}return i}function Or(t,e,i){var r;Xo("/sounds/match-opening.mp3",.3);const o=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const n=t.querySelector(".opponent-preview-wrap"),a=t.querySelector("#opponent-swipe-zone");if(!n||!a)return;const d=a.clientWidth>=900,l=Math.max(200,a.clientHeight-(d?8:40)),s=Math.max(200,a.clientWidth-(d?8:16)),c=d?null:Math.round(Math.max(44,Math.round(s*.168))*.55);n.innerHTML=si(e.aiTeam,e.formation,null,[],s,l,[],c),n.style.cssText=`width:${s}px;height:${l}px;overflow:hidden;flex-shrink:0`;const f=n.querySelector("svg");f&&(f.style.cssText="display:block;width:100%;height:100%",f.setAttribute("preserveAspectRatio",d?"xMidYMid meet":"none"))})),setTimeout(()=>Hr(t,e,i),5e3)}const Ve=t=>mn(t);function Hr(t,e,i){const o=e.homeTeam.MIL||[],r=e.aiTeam.MIL||[],n=e.stadiumDef||null,a=e.aiStadiumDef||null,d=xt(o,n)+yt(o),l=xt(r,a)+yt(r),s=d>=l;t.innerHTML=`
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
  </div>`;const c=()=>{const x=(m,b)=>t.querySelectorAll(m).forEach((u,w)=>{setTimeout(()=>{u.style.opacity="1",u.style.transform="translateY(0) scale(1)"},b+w*90)});x(".duel-card-home",150),x(".duel-card-ai",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((m,b)=>{setTimeout(()=>{m.style.opacity="1"},b*70)}),900),setTimeout(()=>{const m=t.querySelector("#vs-label");m&&(m.style.opacity="1",m.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(b=>b.style.opacity="1")},1250),setTimeout(()=>{f("score-home",d,800),f("score-ai",l,800)},1500)};function f(x,m,b){const u=document.getElementById(x);if(!u)return;const w=performance.now(),v=k=>{const p=Math.min(1,(k-w)/b);u.textContent=Math.round(m*(1-Math.pow(1-p,3))),p<1?requestAnimationFrame(v):u.textContent=m};requestAnimationFrame(v)}requestAnimationFrame(c),e.attacker=s?"home":"ai";const y=s?Ko():null;s&&(e.boostCard={value:y}),e.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(x=>Ve(x)),aiPlayers:r.map(x=>Ve(x)),homeTotal:d,aiTotal:l,text:`Duel milieu : ${e.clubName} ${d} – ${l} IA → ${s?e.clubName+" attaque":"IA attaque"}`});const g=()=>{e.phase=e.attacker==="home"?"attack":"ai-attack",ze(t,e,i),e.attacker==="ai"&&setTimeout(()=>fo(t,e,i),800)};setTimeout(()=>{const x=document.getElementById("score-home"),m=document.getElementById("score-ai"),b=document.getElementById(s?"duel-row-home":"duel-row-ai"),u=document.getElementById(s?"duel-row-ai":"duel-row-home"),w=s?x:m,v=s?m:x;w&&(w.style.fontSize="80px",w.style.color=s?"#FFD700":"#ff6b6b",w.style.animation="duelPulse .5s ease"+(s?", duelGlow 1.5s ease infinite .5s":"")),v&&(v.style.opacity="0.25"),setTimeout(()=>{b&&(b.style.transformOrigin="center",b.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",b.style.zIndex="5"),setTimeout(()=>{var p;const k=document.getElementById("duel-shock");if(k){const T=(p=u||b)==null?void 0:p.getBoundingClientRect(),z=t.querySelector(".match-screen").getBoundingClientRect();T&&(k.style.top=T.top-z.top+T.height/2+"px"),k.style.animation="shockwave .5s ease-out forwards"}u&&(u.style.transformOrigin="center",u.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var p;const k=document.getElementById("duel-finale");k&&(k.innerHTML=`
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
          </button>`,k.style.transition="opacity .45s ease",k.style.opacity="1",k.style.pointerEvents="auto",(p=document.getElementById("start-match-btn"))==null||p.addEventListener("click",g))},600)},700)},2800)}function ze(t,e,i){var V,Z,ne,S,E,U,$,te,me;const o=e.selected.map(A=>A.cardId),r=e.usedSubIds||[],n=e.homeSubs.filter(A=>!r.includes(A.cardId)),d=Object.values(e.homeTeam).flat().filter(A=>A.used).length>0&&n.length>0&&e.subsUsed<e.maxSubs,l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(A=>!A.used),s=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(A=>!A.used),c=Ut(e.aiTeam),f=l.length===0&&s.length===0&&!c,y=(e.homeTeam.DEF||[]).filter(A=>!A.used),g=(e.homeTeam.GK||[]).filter(A=>!A.used);let x=[];e.phase==="attack"&&l.length===0&&(c?(x=y.map(A=>A.cardId),y.length===0&&(x=x.concat(g.map(A=>A.cardId)))):f&&(x=[...y,...g].map(A=>A.cardId))),e.log[e.log.length-1];const m=e.phase==="ai-attack"||e.phase==="ai-defense",b=e.phase==="attack",u=e.phase==="defense",w=e.phase==="finished",k=(e.homeSubs||[]).filter(A=>!(e.usedSubIds||[]).includes(A.cardId)).length>0&&e.subsUsed<e.maxSubs,p=b&&l.length===0&&x.length===0&&!k,T=e.gcCards.filter(A=>!e.usedGc.includes(A.id)),z=e.boostCard&&!e.boostUsed;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.innerHTML=`
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
      ${(()=>{if(e.phase==="defense"&&e.pendingAttack){const G=e.pendingAttack;let be="";if(e.selected.length>0){const W=e.selected.map(ce=>({...(e.homeTeam[ce._role]||[]).find(K=>K.cardId===ce.cardId)||ce,_line:ce._role})),pe=li(W,e.modifiers.home,e.formation);be=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${e.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${Qe(W.map(ce=>({...ce,used:!1})),"#3a7bd5",pe.total,"defense",e.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${Qe((G.players||[]).map(W=>({...W,used:!1})),"#ff6b6b",G.total,"attack",e.formation)}</div>
            ${be}
          </div>`}if(e.phase==="ai-defense"&&e.pendingAttack){const G=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${Qe((G.players||[]).map(be=>({...be,used:!1})),"#00ff88",G.total,"attack",e.formation)}</div>
          </div>`}if(e.phase==="attack"&&e.selected.length>0){const G=e.selected.map(W=>{const pe=(e.homeTeam[W._role]||[]).find(q=>q.cardId===W.cardId)||W,ce=["GK","DEF"].includes(W._role);return{...pe,_line:W._role,...ce?{note_a:Math.max(1,Number(pe.note_a)||0)}:{}}}),be=di(G,e.modifiers.home,e.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${e.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(G.map(W=>({...W,used:!1})),"#FFD700",be.total,"attack",e.formation)}</div>
          </div>`}const A=e.log[e.log.length-1];return A?'<div style="padding:2px 4px">'+gn(A)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${e.log.length})
    </button>

    ${(()=>{const A=window.innerWidth>=700,G=(Y,F,J)=>{var ke,Ee;const P=(e.gcDefs||[]).find(Se=>Se.name===Y.gc_type),O=(P==null?void 0:P.name)||Y.gc_type,le=(P==null?void 0:P.effect)||((ke=Ge[Y.gc_type])==null?void 0:ke.desc)||"",ue=P!=null&&P.image_url?`/icons/${P.image_url}`:null,xe=((Ee=Ge[Y.gc_type])==null?void 0:Ee.icon)||"⚡";return`<div class="gc-mini" data-gc-id="${Y.id}" data-gc-type="${Y.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${it(O,ue,xe,le,{width:F})}
        </div>`},be=(Y,F)=>{var J;return`<div id="boost-card"
          style="box-sizing:border-box;width:${Y}px;height:${F}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(F*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(F*.2)}px">⚡</div>
            <div style="font-size:${Math.round(F*.09)}px;color:#000;font-weight:900">+${(J=e.boostCard)==null?void 0:J.value}</div>
          </div>`},W=(Y,F)=>F?be(95,162):G(Y,95),pe=(Y,F)=>F?be(53,90):G(Y,53),ce=A?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",q=w?`<button id="btn-results" style="${ce};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:m?`<div style="${ce};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:p?`<button id="btn-pass" style="${ce};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:b?`<button id="btn-action" style="${ce};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${e.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:u?`<button id="btn-action" style="${ce};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${e.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${ce};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,K=b||u?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${e.selected.length}/3 sélectionné(s)</div>`:"",se=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${A?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(Y=>`<div class="sub-btn-col" data-sub-id="${Y.cardId}" style="cursor:pointer;flex-shrink:0">${wt(Y,76,100)}</div>`).join("")}
      </div>`,ie=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${si(e.homeTeam,e.formation,e.phase,o,A?1300:At(),A?600:Gt(),x)}
        </div>
      </div>`;return A?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${se}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${ie}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${q}${K}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${T.map(Y=>W(Y,!1)).join("")}
            ${z?W(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${si(e.homeTeam,e.formation,e.phase,o,A?1300:At(),A?600:Gt(),x)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${T.map(Y=>pe(Y,!1)).join("")}
            ${z?pe(null,!0):""}
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
          <div>${q}${K}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${e.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...e.log].reverse().map(A=>{var G,be,W;if(A.type==="duel"){const pe=A.isGoal,ce=A.homeScored?"#FFD700":pe?"#ff6b6b":"rgba(255,255,255,0.3)",q=A.homeScored?"⚽ BUT !":pe?"⚽ BUT IA !":(G=A.homePlayers)!=null&&G.length?"⚔️ Attaque":"🛡️ Défense",K=(A.homeTotal??0)>=(A.aiTotal??0);return`<div style="padding:8px;border-radius:8px;background:${pe?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${ce};margin-bottom:4px">
                <div style="font-size:9px;color:${ce};letter-spacing:1px;margin-bottom:6px;font-weight:700;text-transform:uppercase;text-align:center">${q}</div>
                <div style="display:flex;align-items:center;justify-content:center;gap:10px">
                  ${(be=A.aiPlayers)!=null&&be.length?`<div style="flex:1;display:flex;justify-content:flex-end;opacity:0.75">${Qe(A.aiPlayers,"#ff6b6b",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                  <div style="flex-shrink:0;display:flex;align-items:center;gap:6px">
                    <span style="font-size:16px;font-weight:900;color:${K?"#e03030":"#22c55e"}">${A.aiTotal??"–"}</span>
                    <span style="font-size:9px;color:rgba(255,255,255,0.3)">VS</span>
                    <span style="font-size:16px;font-weight:900;color:${K?"#22c55e":"#e03030"}">${A.homeTotal??"–"}</span>
                  </div>
                  ${(W=A.homePlayers)!=null&&W.length?`<div style="flex:1;display:flex;justify-content:flex-start">${Qe(A.homePlayers,"rgba(255,255,255,0.7)",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                </div>
              </div>`}return A.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${A.outPlayer?wt({...A.outPlayer,used:!0,_line:A.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${A.inPlayer?wt({...A.inPlayer,_line:A.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:A.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${A.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${A.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function C(){const A=t.querySelector(".match-screen");if(!A)return;const G=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);A.style.bottom="auto",A.style.height=G+"px",A.style.minHeight=G+"px",A.style.maxHeight=G+"px",A.style.overflow="hidden";const be=t.querySelector("#mobile-action-bar"),W=t.querySelector("#mobile-play-area");be&&W&&(W.style.paddingBottom=be.offsetHeight+"px")}if(C(),setTimeout(C,120),setTimeout(C,400),setTimeout(C,1e3),e._vvBound||(e._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",C),window.visualViewport.addEventListener("scroll",C)),window.addEventListener("resize",C)),function(){const G=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!G)return;const be=G.closest("#match-terrain-wrap");be&&(be.style.cssText="position:relative;width:100%;height:100%;padding:0"),G.removeAttribute("width"),G.removeAttribute("height"),G.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",G.setAttribute("preserveAspectRatio","xMidYMid meet")}(),e._resizeBound||(e._resizeBound=!0,window.addEventListener("resize",()=>{const A=t.querySelector(".terrain-wrapper svg");if(A){const G=A.closest("#match-terrain-wrap");G&&(G.style.cssText="position:relative;width:100%;height:100%;padding:0"),A.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),e.phase==="attack"||e.phase==="defense"){let A=!1,G=30;const be=()=>document.getElementById("match-timer"),W=()=>{const pe=be();if(!pe)return;const ce=String(Math.floor(G/60)).padStart(2,"0"),q=String(G%60).padStart(2,"0");pe.textContent=` ${ce}:${q}`,pe.style.color=A?"#ff2222":"#ff9500",pe.style.fontWeight="900"};W(),e._timerInt=setInterval(()=>{if(G--,G<0)if(!A)A=!0,G=15,W(),Qo("/sounds/timer-urgent.mp3",.6);else{clearInterval(e._timerInt),e._timerInt=null,Ke(),e.homeScore=0,e.aiScore=3;const pe=document.createElement("div");pe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",pe.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(pe),setTimeout(()=>{pe.remove(),ht(t,e,i)},2500)}else W()},1e3)}(V=document.getElementById("match-quit"))==null||V.addEventListener("click",()=>{ot(t),confirm("Abandonner ? Résultat : défaite 3-0")&&(e.homeScore=0,e.aiScore=3,ht(t,e,i))}),(Z=document.getElementById("view-ai"))==null||Z.addEventListener("click",()=>na(e,i)),(ne=document.getElementById("toggle-history"))==null||ne.addEventListener("click",()=>{var A;(A=document.getElementById("match-history-panel"))==null||A.classList.add("open")}),(S=document.getElementById("close-history"))==null||S.addEventListener("click",()=>{var A;(A=document.getElementById("match-history-panel"))==null||A.classList.remove("open")}),(E=document.getElementById("btn-action"))==null||E.addEventListener("click",()=>{e.selected.length!==0&&(b?Kr(t,e,i):u&&Vr(t,e,i))}),(U=document.getElementById("btn-results"))==null||U.addEventListener("click",()=>ht(t,e,i)),($=document.getElementById("btn-pass"))==null||$.addEventListener("click",()=>{if(e.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Ki(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),ht(t,e,i);return}e.phase="ai-attack",ze(t,e,i),setTimeout(()=>fo(t,e,i),800)}),t.querySelectorAll(".match-slot-hit").forEach(A=>{A.addEventListener("click",()=>Ur(A,e,t,i))}),t.querySelectorAll(".match-used-hit").forEach(A=>{A.addEventListener("click",()=>Pi(t,e,i,null,A.dataset.cardId))}),t.querySelectorAll(".gc-mini").forEach(A=>{b?A.addEventListener("click",()=>ea(A.dataset.gcId,A.dataset.gcType,t,e,i)):(A.style.opacity="0.35",A.style.cursor="default",A.addEventListener("click",()=>Et("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(te=document.getElementById("boost-card"))==null||te.addEventListener("click",()=>oa(t,e,i)),t.querySelectorAll(".sub-btn-col").forEach(A=>{A.addEventListener("click",()=>Pi(t,e,i,A.dataset.subId))}),(me=document.getElementById("sub-btn-main"))==null||me.addEventListener("click",()=>Pi(t,e,i))}function Ur(t,e,i,o){const r=t.dataset.cardId,n=t.dataset.role,a=e.selected.findIndex(d=>d.cardId===r);if(a!==-1)e.selected.splice(a,1);else{if(e.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const d=(e.homeTeam[n]||[]).find(l=>l.cardId===r);if(d)e.selected.push({...d,_role:n,_line:n});else{const l=Object.keys(e.homeTeam||{}).map(s=>`${s}:${(e.homeTeam[s]||[]).length}`).join(" ");o.toast(`Sélection impossible (rôle="${n}" introuvable dans homeTeam[${l}])`,"error"),console.error("[MatchIA] toggleSelect: joueur introuvable",{cardId:r,role:n,homeTeam:e.homeTeam});return}}ze(i,e,o)}function uo(t,e,i){t.matchId&&h.from("matches").update({last_player_id:i}).eq("id",t.matchId).then(()=>{})}function Kr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),uo(e,i,i.state.profile.id);const o=e.selected.map(n=>{const a=(e.homeTeam[n._role]||[]).find(l=>l.cardId===n.cardId)||n,d=["GK","DEF"].includes(n._role);return{...a,_line:n._role,...d?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),r=di(o,e.modifiers.home,e.formation);e.pendingAttack={...r,players:[...o],side:"home"},e.selected.forEach(n=>{const a=(e.homeTeam[n._role]||[]).find(d=>d.cardId===n.cardId);a&&(a.used=!0)}),e.log.push({text:`⚔️ Vous attaquez : ${r.total} (base ${r.base}${r.links?` +${r.links} liens`:""}) — ${e.selected.map(n=>n.name).join(", ")}`,type:"info"}),e.selected=[],e.modifiers.home={},e.phase="ai-defense",ze(t,e,i),setTimeout(()=>Zr(t,e,i),1200)}function Vr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),uo(e,i,i.state.profile.id);const o=e.stadiumDef||null,r=e.selected.map(l=>{const s=(e.homeTeam[l._role]||[]).find(f=>f.cardId===l.cardId)||l,c=s.stadiumBonus||o&&(o.club_id&&String(s.club_id)===String(o.club_id)||o.country_code&&s.country_code===o.country_code)||!1;return{...s,_line:l._role,stadiumBonus:c}}),n=li(r,e.modifiers.home,e.formation);e.selected.forEach(l=>{const s=(e.homeTeam[l._role]||[]).find(c=>c.cardId===l.cardId);s&&(s.used=!0)});const a=eo(e.pendingAttack.total,n.total,e.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(e.pendingAttack.players||[]).map(l=>Ve(l)),homePlayers:e.selected.map(l=>{const s=(e.homeTeam[l._role]||[]).find(c=>c.cardId===l.cardId)||l;return Ve(s)}),homeTotal:n.total,aiTotal:e.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)d.text="🛡️ Bouclier ! But annulé.",e.log.push(d);else if(a.goal){e.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${e.pendingAttack.total} > ${n.total})`,e.log.push(d),e.selected=[],e.modifiers.home={},e.pendingAttack=null,ze(t,e,i),Ze(d.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${n.total} ≥ ${e.pendingAttack.total})`,e.log.push(d);e.selected=[],e.modifiers.home={},e.pendingAttack=null,Mt(t,e,i,"home-attack")}function Yr(t,e=()=>{}){if(t.aiSubsUsed>=t.aiMaxSubs)return e();const i=Object.values(t.aiTeam).flat().filter(s=>s.used);if(!i.length)return e();const o=(t.aiSubs||[]).filter(s=>!t.aiUsedSubIds.includes(s.cardId));if(!o.length)return e();const r=i[Math.floor(Math.random()*i.length)],n=o.find(s=>s.job===r.job)||o[0],a={...n,used:!1,_line:r._line,_col:r._col},d=t.aiTeam[r._line],l=d.findIndex(s=>s.cardId===r.cardId);l!==-1&&(d[l]=a),t.aiUsedSubIds.push(n.cardId),t.aiSubsUsed++,t.log.push({text:`🔄 IA : ${n.firstname} ${n.name} remplace ${r.firstname} ${r.name}`,type:"info"}),bn(r,a,e)}function Wr(t,e){const i=t.effect_params||{},o=i.value||1,r=i.count||1,n=i.roles||[],a=i.target||"home";switch(t.effect_type){case"BOOST_STAT":{const l=Object.values(e.aiTeam).flat().filter(s=>!s.used&&(!n.length||n.includes(s._line))).sort(()=>Math.random()-.5).slice(0,r);l.forEach(s=>{s.boost=(s.boost||0)+o}),l.length&&e.log.push({text:`⚡ IA : +${o} sur ${l.length} joueur(s)`,type:"gc"});break}case"DEBUFF_STAT":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(c=>!c.used&&(!n.length||n.includes(c._line))).sort(()=>Math.random()-.5).slice(0,r);s.forEach(c=>{c.boost=(c.boost||0)-o}),s.length&&e.log.push({text:`🎯 IA : -${o} sur ${s.length} joueur(s)${a!=="ai"?" (vous)":""}`,type:"gc"});break}case"GRAY_PLAYER":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(c=>!c.used&&(!n.length||n.includes(c._line))).sort(()=>Math.random()-.5).slice(0,r);s.forEach(c=>{c.used=!0}),s.length&&e.log.push({text:`❌ IA : ${s.length} joueur(s)${a!=="ai"?" (vous)":""} exclu(s)`,type:"gc"});break}case"REVIVE_PLAYER":{const l=Object.values(e.aiTeam).flat().filter(s=>s.used).sort(()=>Math.random()-.5).slice(0,r);l.forEach(s=>{s.used=!1}),l.length&&e.log.push({text:`💫 IA : ${l.length} joueur(s) ressuscité(s)`,type:"gc"});break}case"REMOVE_GOAL":e.homeScore>0&&(e.homeScore--,e.log.push({text:"🚫 IA : votre dernier but est annulé !",type:"gc"}));break;case"ADD_GOAL_DRAW":e.homeScore===e.aiScore&&(e.aiScore++,e.log.push({text:"🎯 IA : but bonus (match nul) !",type:"gc"}));break;case"ADD_SUB":e.aiMaxSubs=(e.aiMaxSubs||3)+o,e.log.push({text:`🔄 IA : +${o} remplacement(s)`,type:"gc"});break}}function Jr(t,e=()=>{}){var a;if(!((a=t.aiGcCards)!=null&&a.length))return e();const i=t.aiGcTarget||2;if(t.aiUsedGc.length>=i)return e();const o=t.aiGcCards.filter(d=>!t.aiUsedGc.includes(d.id));if(!o.length||!(t.round>=4&&t.aiUsedGc.length===0)&&Math.random()>.55)return e();const n=o[Math.floor(Math.random()*o.length)];t.aiUsedGc.push(n.id),n.effect_type?Wr(n,t):t.log.push({text:`⚡ IA joue ${n.icon||"⚡"} ${n.name}`,type:"gc"}),Xr(n,e)}function Xr(t,e=()=>{}){const i=document.getElementById("ai-gc-anim-overlay");i&&i.remove();const o=document.createElement("div");o.id="ai-gc-anim-overlay",o.style.cssText=`
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
    </div>`,document.body.appendChild(o),setTimeout(()=>{o.remove(),e()},2100)}function fo(t,e,i){uo(e,i,null),Yr(e,()=>{Jr(e,()=>{ze(t,e,i),Qr(t,e,i)})})}function Qr(t,e,i){let o=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(l=>!l.used),r=!1;if(!o.length){const l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(c=>!c.used),s=Ut(e.homeTeam);if(s||l.length===0){const c=(e.aiTeam.DEF||[]).filter(y=>!y.used),f=(e.aiTeam.GK||[]).filter(y=>!y.used);o=s?c.length?c:f:[...c,...f],r=!0}}const n=Yo(o,"attack",e.difficulty);if(!n.length){Vi(t,e,i);return}r&&n.forEach(l=>{l._line=l._line||l.job,l.note_a=Math.max(1,Number(l.note_a)||0)});const a=di(n,e.modifiers.ai,e.formation);if(e.pendingAttack={...a,players:n,side:"ai"},n.forEach(l=>{l.used=!0}),e.log.push({text:`🤖 IA attaque : ${a.total} (${n.map(l=>l.name).join(", ")})`,type:"info"}),e.modifiers.ai={},[...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(l=>!l.used).length===0){if(n.length===1&&(n[0]._line==="GK"||n[0].job==="GK")&&Ut(e.homeTeam)&&e.homeScore===e.aiScore){e.aiScore++,Li(t,e,i,"ai",n[0]);return}e.aiScore++;const s={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:n.map(c=>Ve(c)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};e.log.push(s),e.pendingAttack=null,ze(t,e,i),Ze(s.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}e.phase="defense",ze(t,e,i)}function Zr(t,e,i){var s,c;const o=[...e.aiTeam.GK||[],...e.aiTeam.DEF||[],...e.aiTeam.MIL||[]],r=Yo(o,"defense",e.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(e.aiTeam[f]||[]).filter(y=>!y.used)).length){const f=((s=e.pendingAttack)==null?void 0:s.players)||[];if(f.length===1&&(f[0]._line==="GK"||f[0].job==="GK")&&e.homeScore===e.aiScore){e.homeScore++,Li(t,e,i,"home",f[0]);return}e.homeScore++;const g={type:"duel",isGoal:!0,homeScored:!0,homePlayers:f.map(x=>Ve(x)),homeTotal:((c=e.pendingAttack)==null?void 0:c.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};e.log.push(g),e.modifiers.ai={},e.pendingAttack=null,ze(t,e,i),Ze(g.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}const a=r.length>0?li(r,e.modifiers.ai,e.formation).total:0;r.forEach(f=>{f.used=!0});const d=eo(e.pendingAttack.total,a,e.modifiers.ai),l={type:"duel",title:"Attaque",homePlayers:(e.pendingAttack.players||[]).map(f=>Ve(f)),aiPlayers:r.map(f=>Ve(f)),homeTotal:e.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(d.shielded)l.text="🛡️ Bouclier IA !",e.log.push(l);else if(d.goal){e.homeScore++,l.isGoal=!0,l.homeScored=!0,l.text=`⚽ BUT ! (${e.pendingAttack.total} > ${a})`,e.log.push(l),e.modifiers.ai={},e.pendingAttack=null,ze(t,e,i),Ze(l.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}else l.text=`🧤 IA défend (${a} ≥ ${e.pendingAttack.total})`,e.log.push(l);e.modifiers.ai={},e.pendingAttack=null,Mt(t,e,i,"ai-attack")}function Mt(t,e,i,o){if(e.round++,!hn(t,e,i)){if(mo(e)){ht(t,e,i);return}if(o==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(a=>!a.used))){Vi(t,e,i);return}e.phase="attack",ze(t,e,i)}else{if(!["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(a=>!a.used))){Vi(t,e,i);return}e.phase="ai-attack",ze(t,e,i),setTimeout(()=>fo(t,e,i),800)}}}function Ut(t){return!["GK","DEF","MIL","ATT"].some(e=>(t[e]||[]).some(i=>!i.used))}function Do(t){const e=(t.GK||[]).some(o=>!o.used),i=["DEF","MIL","ATT"].some(o=>(t[o]||[]).some(r=>!r.used));return e&&!i}function hn(t,e,i){if(e.homeScore!==e.aiScore)return!1;if(Do(e.homeTeam)&&Ut(e.aiTeam)){const o=(e.homeTeam.GK||[]).find(r=>!r.used);return o?(o.used=!0,e.homeScore++,Li(t,e,i,"home",o),!0):!1}if(Do(e.aiTeam)&&Ut(e.homeTeam)){const o=(e.aiTeam.GK||[]).find(r=>!r.used);return o?(o.used=!0,e.aiScore++,Li(t,e,i,"ai",o),!0):!1}return!1}function Li(t,e,i,o,r){e.log.push({type:"duel",isGoal:!0,homeScored:o==="home",homePlayers:o==="home"?[Ve(r)]:[],aiPlayers:o==="ai"?[Ve(r)]:[],text:`⚽ DERNIER CORNER — Le gardien ${o==="home"?"":"adverse "}marque !`});const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(n);const a=(d,l)=>new Promise(s=>{n.innerHTML=`<div style="font-size:32px;font-weight:900;color:${l};letter-spacing:2px;animation:lcFade 1.4s ease both">${d}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(s,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),n.remove(),e.pendingAttack=null,ze(t,e,i),Ze([Ve(r)],e.homeScore,e.aiScore,o==="home",()=>{if(mo(e)){ht(t,e,i);return}Mt(t,e,i,o==="home"?"ai-attack":"home-attack")})))()}function mo(t){const e=["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(r=>!r.used)),i=["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(r=>!r.used));return!e&&!i}function Ki(t,e){return!(["MIL","ATT"].some(r=>(t[r]||[]).some(n=>!n.used))||Ut(e)||!["MIL","ATT"].some(r=>(e[r]||[]).some(n=>!n.used)))}function Vi(t,e,i){if(!hn(t,e,i)){if(mo(e)){ht(t,e,i);return}if(Ki(e.homeTeam,e.aiTeam)&&Ki(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),ht(t,e,i);return}e.phase="attack",ze(t,e,i)}}function Pi(t,e,i,o=null,r=null){var g,x;if(e.phase!=="attack"){Et("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(e.usedSubIds||(e.usedSubIds=[]),e.subsUsed>=e.maxSubs){Et(`Maximum ${e.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const n=Object.entries(e.homeTeam).flatMap(([m,b])=>(b||[]).filter(u=>u.used).map(u=>({...u,_line:u._line||m}))),a=e.homeSubs.filter(m=>!e.usedSubIds.includes(m.cardId));if(!n.length){Et("Aucun joueur utilisé à remplacer");return}if(!a.length){Et("Aucun remplaçant disponible");return}let d=Math.max(0,n.findIndex(m=>m.cardId===r));const l=((g=n[d])==null?void 0:g._line)||((x=n[d])==null?void 0:x.job);let s=o?Math.max(0,a.findIndex(m=>m.cardId===o)):Math.max(0,a.findIndex(m=>m.job===l)),c=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function y(){var p,T,z,C,N,V;const m=n[d],b=a[s],u=Math.min(130,Math.round((window.innerWidth-90)/2)),w=Math.round(u*1.35),v=Z=>`background:rgba(255,255,255,0.12);border:none;color:${Z?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Z?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${e.subsUsed}/${e.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${v(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${b?wt({...b,used:!1,boost:0},u,w):"<div>—</div>"}</div>
        <button id="in-down" style="${v(s>=a.length-1)}" ${s>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${v(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${m?wt({...m,used:!1,boost:0},u,w):"<div>—</div>"}</div>
        <button id="out-down" style="${v(d>=n.length-1)}" ${d>=n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${n.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(p=f.querySelector("#sub-close"))==null||p.addEventListener("click",()=>f.remove()),(T=f.querySelector("#out-up"))==null||T.addEventListener("click",()=>{d>0&&(d--,y())}),(z=f.querySelector("#out-down"))==null||z.addEventListener("click",()=>{d<n.length-1&&(d++,y())}),(C=f.querySelector("#in-up"))==null||C.addEventListener("click",()=>{s>0&&(s--,y())}),(N=f.querySelector("#in-down"))==null||N.addEventListener("click",()=>{s<a.length-1&&(s++,y())});const k=(Z,ne,S,E)=>{const U=f.querySelector("#"+Z);if(!U)return;let $=0;U.addEventListener("touchstart",te=>{$=te.touches[0].clientY},{passive:!0}),U.addEventListener("touchend",te=>{const me=te.changedTouches[0].clientY-$;if(Math.abs(me)<30)return;const A=ne();me<0&&A<E-1?(S(A+1),y()):me>0&&A>0&&(S(A-1),y())},{passive:!0})};k("in-panel",()=>s,Z=>s=Z,a.length),k("out-panel",()=>d,Z=>d=Z,n.length),(V=f.querySelector("#sub-confirm"))==null||V.addEventListener("click",Z=>{if(Z.preventDefault(),Z.stopPropagation(),c)return;c=!0;const ne=n[d],S=a[s];if(!ne||!S)return;let E=null,U=-1;for(const[te,me]of Object.entries(e.homeTeam)){const A=(me||[]).findIndex(G=>G.cardId===ne.cardId);if(A!==-1){E=te,U=A;break}}if(U===-1||!E){Et("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const $={...S,_line:E,_col:ne._col||0,used:!1,boost:0};e.homeTeam[E].splice(U,1,$),e.usedSubIds||(e.usedSubIds=[]),e.usedSubIds.push(S.cardId),e.subsUsed++,e.selected=[],e.log.push({type:"sub",subSide:"home",clubName:e.clubName,outPlayer:{name:ne.name,firstname:ne.firstname,note:jt(ne,E),portrait:Ct(ne),job:ne.job,country_code:ne.country_code,rarity:ne.rarity,clubName:ne.clubName,clubLogo:ne.clubLogo},inPlayer:{name:S.name,firstname:S.firstname,note:jt(S,E),portrait:Ct(S),job:S.job,country_code:S.country_code,rarity:S.rarity,clubName:S.clubName,clubLogo:S.clubLogo},text:`🔄 ${S.firstname} ${S.name} remplace ${ne.firstname} ${ne.name}`}),f.remove(),bn(ne,S,()=>ze(t,e,i))})}document.body.appendChild(f),y()}function ea(t,e,i,o,r){var y,g;const n=(o.gcDefs||[]).find(x=>x.name===e),a=Ge[e]||{icon:"⚡",desc:"Carte spéciale."},d=(n==null?void 0:n.name)||e,l=(n==null?void 0:n.effect)||a.desc,s=n!=null&&n.image_url?`/icons/${n.image_url}`:null,c=a.icon||"⚡",f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",f.innerHTML=`
    ${it(d,s,c,l,{width:190})}
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(f),(y=f.querySelector("#gc-back"))==null||y.addEventListener("click",()=>f.remove()),(g=f.querySelector("#gc-use"))==null||g.addEventListener("click",()=>{f.remove(),ia(t,e,i,o,r)})}function xi(t,e,i,o,r,n){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let d=[];function l(){var s,c;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${d.length}/${e}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${t.map(f=>{const y=f._line||f.job||"MIL",g=d.find(m=>m.cardId===f.cardId),x=je({...f,_evolution_bonus:0},{width:90,showStad:!0,role:y,extraNote:f.boost||0});return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="position:relative;border-radius:8px;${g?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          ${x}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${d.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${d.length}/${e})
      </button>
    </div>`,(s=a.querySelector("#gc-picker-close"))==null||s.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const y=f.dataset.cid,g=t.find(m=>m.cardId===y);if(!g)return;const x=d.findIndex(m=>m.cardId===y);x>-1?d.splice(x,1):d.length<e&&d.push(g),l()})}),(c=a.querySelector("#gc-picker-confirm"))==null||c.addEventListener("click",()=>{a.remove(),n(d)})}l(),document.body.appendChild(a)}const ta={BOOST_STAT:({value:t=1,count:e=1,roles:i=[]},o,r,n)=>{const a=Object.entries(o.homeTeam).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,l])=>l.filter(s=>!s.used).map(s=>({...s,_line:d})));return a.length?(xi(a,e,`Choisir ${e} joueur(s) à booster (+${t})`,r,o,d=>{d.forEach(l=>{const s=(o.homeTeam[l._line]||[]).find(c=>c.cardId===l.cardId);s&&(s.boost=(s.boost||0)+t,o.log.push({text:`⚡ +${t} sur ${s.name}`,type:"info"}))}),ze(r,o,n)}),!0):(o.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),ze(r,o,n),!0)},DEBUFF_STAT:({value:t=1,count:e=1,roles:i=[],target:o="ai"},r,n,a)=>{const d=o==="home"?r.homeTeam:r.aiTeam,l=o==="ai"?"adverse":"allié",s=Object.entries(d).filter(([c])=>!i.length||i.includes(c)).flatMap(([c,f])=>f.filter(y=>!y.used).map(y=>({...y,_line:c})));return s.length?(xi(s,e,`Choisir ${e} joueur(s) ${l}(s) à débuffer (-${t})`,n,r,c=>{c.forEach(f=>{const g=((o==="home"?r.homeTeam:r.aiTeam)[f._line]||[]).find(x=>x.cardId===f.cardId);g&&(g.boost=(g.boost||0)-t,r.log.push({text:`🎯 -${t} sur ${g.name}${o==="ai"?" (IA)":""}`,type:"info"}))}),ze(n,r,a)}),!0):(r.log.push({text:`🎯 Aucun joueur ${l} disponible`,type:"info"}),ze(n,r,a),!0)},GRAY_PLAYER:({count:t=1,roles:e=[],target:i="ai"},o,r,n)=>{const a=i==="home"?o.homeTeam:o.aiTeam,d=i==="ai"?"adverse":"allié",l=Object.entries(a).filter(([s])=>!e.length||e.includes(s)).flatMap(([s,c])=>c.filter(f=>!f.used).map(f=>({...f,_line:s})));return l.length?(xi(l,t,`Choisir ${t} joueur(s) ${d}(s) à exclure`,r,o,s=>{s.forEach(c=>{const y=((i==="home"?o.homeTeam:o.aiTeam)[c._line]||[]).find(g=>g.cardId===c.cardId);y&&(y.used=!0,o.log.push({text:`❌ ${y.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),ze(r,o,n)}),!0):(o.log.push({text:`❌ Aucun joueur ${d} à exclure`,type:"info"}),ze(r,o,n),!0)},REVIVE_PLAYER:({count:t=1,roles:e=[]},i,o,r)=>{const n=Object.entries(i.homeTeam).filter(([a])=>!e.length||e.includes(a)).flatMap(([a,d])=>d.filter(l=>l.used).map(l=>({...l,_line:a})));return n.length?(xi(n,t,`Choisir ${t} joueur(s) à ressusciter`,o,i,a=>{a.forEach(d=>{const l=(i.homeTeam[d._line]||[]).find(s=>s.cardId===d.cardId);l&&(l.used=!1,i.log.push({text:`💫 ${l.name} ressuscité !`,type:"info"}))}),ze(o,i,r)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),ze(o,i,r),!0)},REMOVE_GOAL:({},t)=>(t.aiScore>0?(t.aiScore--,t.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):t.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},t)=>(t.homeScore===t.aiScore?(t.homeScore++,t.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):t.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:t=1},e)=>(e.maxSubs=(e.maxSubs||3)+t,e.log.push({text:`🔄 +${t} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function ia(t,e,i,o,r){o.usedGc.push(t);const n=o.gcDefs||[],a=n.find(l=>l.name===e)||n.find(l=>{var s;return((s=l.name)==null?void 0:s.toLowerCase().trim())===(e==null?void 0:e.toLowerCase().trim())});let d=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const l=ta[a.effect_type];l?l(a.effect_params||{},o,i,r)||(d=!0):(r.toast(`Effet "${a.effect_type}" non implémenté`,"error"),d=!0)}else{switch(e){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const l=Object.entries(o.homeTeam).flatMap(([s,c])=>(c||[]).filter(f=>f.used).map(f=>({...f,_line:s})));l.length?(l[0].used=!1,o.log.push({text:`💫 ${l[0].name} ressuscité !`,type:"info"})):o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const l=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(s=>!s.used);if(l.length){const s=l.sort((c,f)=>jt(f,"ATT")-jt(c,"ATT"))[0];s.used=!0,o.log.push({text:`❄️ ${s.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}d=!0}h.from("cards").delete().eq("id",t).then(()=>{}),d&&ze(i,o,r)}function oa(t,e,i){const o=Object.values(e.homeTeam).flat().filter(r=>!r.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${e.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${o.map(r=>`
        <div class="player-boost-opt" data-card-id="${r.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Tn[r.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${jt(r,r._line||r.job)}</div>
          <div style="flex:1"><b>${r.firstname} ${r.name}</b><div style="font-size:11px;color:#888">${r._line||r.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${e.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(r=>{r.addEventListener("click",()=>{const n=r.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const d=(e.homeTeam[a]||[]).find(l=>l.cardId===n);if(d){d.boost=(d.boost||0)+e.boostCard.value,e.log.push({text:`⚡ Boost +${e.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}e.boostUsed=!0,i.closeModal(),ze(t,e,i)})})}async function ht(t,e,i){var y,g,x,m;Nt(),Ke(),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),e.phase="finished";const{state:o}=i,r=e.homeScore>e.aiScore,n=e.homeScore===e.aiScore,a=r?"victoire":n?"nul":"defaite",d=e.isSolo&&((y=e.soloLevelConfig)!=null&&y.reward_credits)&&r?Number(e.soloLevelConfig.reward_credits):zn(e.mode,a);if(e.isSolo&&r)try{const{data:b}=await h.from("user_solo_progress").select("unlocked_level").eq("user_id",o.profile.id).maybeSingle(),u=(b==null?void 0:b.unlocked_level)||1;e.soloLevel>=u&&await h.from("user_solo_progress").upsert({user_id:o.profile.id,unlocked_level:e.soloLevel+1,updated_at:new Date().toISOString()})}catch(b){console.warn("[Solo] Erreur mise à jour progression:",b.message)}const l="00000000-0000-0000-0000-000000000000";let s=null;if(e.isRankedAI)try{const{data:b}=await h.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",o.profile.id).single();if(b){const u=b.mmr??1e3,w=b.mmr_deviation??350,v=b.mmr_volatility??.06,k=r?1:n?.5:0,p=(b.placement_matches??0)<10,T=Vo(u,w,v,u,350,k,p),z=n?null:r?o.profile.id:l;await h.rpc("update_mmr_after_ranked",{p_match_id:e.matchId,p_winner_id:z,p_home_id:o.profile.id,p_away_id:l,p_home_delta:T.delta,p_away_delta:0,p_home_new_rd:T.newRd,p_away_new_rd:350,p_home_new_vol:T.newSigma,p_away_new_vol:.06}),s=T.delta}}catch(b){console.warn("[RankedAI] Erreur mise à jour MMR:",b.message)}e.matchId&&await h.from("matches").update({status:"finished",home_score:e.homeScore,away_score:e.aiScore,winner_id:r?o.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",e.matchId);const c={credits:(o.profile.credits||0)+d,matches_played:(o.profile.matches_played||0)+1};r?c.wins=(o.profile.wins||0)+1:n?c.draws=(o.profile.draws||0)+1:c.losses=(o.profile.losses||0)+1,await h.from("users").update(c).eq("id",o.profile.id),await i.refreshProfile();const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",f.innerHTML=`
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
    </div>`,document.body.appendChild(f),(g=document.getElementById("res-home"))==null||g.addEventListener("click",()=>{f.remove(),ot(t),i.navigate("home")}),(x=document.getElementById("res-replay"))==null||x.addEventListener("click",async()=>{if(f.remove(),ot(t),e.isRankedAI){const{data:b}=await h.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",i.state.profile.id).single();ct(),i.navigate("match",{matchMode:"ranked",rankedData:{mmr:(b==null?void 0:b.mmr)??1e3,rd:(b==null?void 0:b.mmr_deviation)??350,sigma:(b==null?void 0:b.mmr_volatility)??.06,isPlacement:((b==null?void 0:b.placement_matches)??0)<10}});return}i.navigate("match",e.isSolo?{matchMode:e.mode,soloLevel:e.soloLevel}:{matchMode:e.mode})}),(m=document.getElementById("res-next-level"))==null||m.addEventListener("click",()=>{f.remove(),ot(t),i.navigate("match",{matchMode:"solo",soloLevel:e.soloLevel+1})})}function na(t,e){e.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Zi(t.aiTeam,t.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ra={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function aa(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}async function sa(t,e){!t||!e||await Promise.all([Po(t,"win"),Po(e,"loss")])}async function Po(t,e){const{data:i}=await h.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",t).eq("card_type","player");if(!(i!=null&&i.length))return;const o=i.filter(r=>{var n,a;return((n=r.player)==null?void 0:n.rarity)==="pepite"||((a=r.player)==null?void 0:a.rarity)==="papyte"});o.length&&await Promise.all(o.map(r=>{const n=ra[r.player.rarity],a=e==="win"?n.win:n.loss,d=r.player.note_min??1,l=r.player.note_max??10,s=aa(r.player),c=r.current_note??s,f=Math.min(l,Math.max(d,c+a));return h.from("cards").update({current_note:f}).eq("id",r.id)}))}const Rt=t=>mn(t);async function qt(t,e,i,o,r={}){return vn(t,e,i,o,r.myGC||[],r.gcDefs||[],r.isRanked||!1,r.rankedData||null,r.stadiumDef||null,r.onMatchEnd||null,r.mlLeagueId||null,r.mlMatchId||null)}async function la(t,e,i){const{data:o}=await h.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!o){e.toast("Match introuvable","error"),e.navigate("home");return}const r=o.home_id===e.state.user.id;let n=null,a=null;if(o.mode==="mini_league"){const{data:d}=await h.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();d&&(n=d.league_id,a=d.id)}return vn(t,e,i,r,[],[],o.is_ranked||!1,null,null,null,n,a)}async function vn(t,e,i,o,r=[],n=[],a=!1,d=null,l=null,s=null,c=null,f=null){const{state:y,navigate:g,toast:x}=e,m=o?"p1":"p2",b=o?"p2":"p1",u=(r||[]).map(_=>_.id),w=(r||[]).map(_=>({id:_.id,gc_type:_.gc_type,_gcDef:_._gcDef||null}));t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:v}=await h.from("matches").select("*").eq("id",i).single();if(!v){x("Match introuvable","error"),g("home");return}async function k(){var _e,$e;console.log("[PvP] buildGameState match:",{id:v.id,home_deck_id:v.home_deck_id,away_deck_id:v.away_deck_id,mode:v.mode,is_ranked:v.is_ranked});const[{data:_,error:L},{data:M,error:j},{data:I},{data:R}]=await Promise.all([h.rpc("get_deck_for_match",{p_deck_id:v.home_deck_id}),h.rpc("get_deck_for_match",{p_deck_id:v.away_deck_id}),h.from("users").select("id,pseudo,club_name").eq("id",v.home_id).single(),h.from("users").select("id,pseudo,club_name").eq("id",v.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",L==null?void 0:L.message,"p2:",j==null?void 0:j.message,"p1D:",(_e=_==null?void 0:_.starters)==null?void 0:_e.length,"p2D:",($e=M==null?void 0:M.starters)==null?void 0:$e.length);const B=ae=>{const Ie=Number(ae.evolution_bonus)||0;return{cardId:ae.card_id,position:ae.position,id:ae.id,firstname:ae.firstname,name:ae.surname_real,country_code:ae.country_code,club_id:ae.club_id,job:ae.job,job2:ae.job2,note_g:(Number(ae.note_g)||0)+(ae.job==="GK"||ae.job2==="GK"&&Number(ae.note_g)>0?Ie:0),note_d:(Number(ae.note_d)||0)+(ae.job==="DEF"||ae.job2==="DEF"&&Number(ae.note_d)>0?Ie:0),note_m:(Number(ae.note_m)||0)+(ae.job==="MIL"||ae.job2==="MIL"&&Number(ae.note_m)>0?Ie:0),note_a:(Number(ae.note_a)||0)+(ae.job==="ATT"||ae.job2==="ATT"&&Number(ae.note_a)>0?Ie:0),evolution_bonus:Ie,rarity:ae.rarity,skin:ae.skin,hair:ae.hair,hair_length:ae.hair_length,face:ae.face||null,clubName:ae.club_encoded_name||null,clubLogo:ae.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},D=((_==null?void 0:_.starters)||[]).map(ae=>B(ae)),H=((M==null?void 0:M.starters)||[]).map(ae=>B(ae)),Q=(_==null?void 0:_.formation)||"4-4-2",re=(M==null?void 0:M.formation)||"4-4-2";let oe=Ni(D,Q),ee=Ni(H,re);const de=((_==null?void 0:_.subs)||[]).map(ae=>B(ae)),fe=((M==null?void 0:M.subs)||[]).map(ae=>B(ae)),we=(_==null?void 0:_.stadium_def)||(o?l:null),ge=(M==null?void 0:M.stadium_def)||(o?null:l);return we&&(oe=vi(oe,we),wi(de,we)),ge&&(ee=vi(ee,ge),wi(fe,ge)),{p1Team:oe,p2Team:ee,p1Subs:de,p2Subs:fe,p1Formation:Q,p2Formation:re,p1Name:(I==null?void 0:I.club_name)||(I==null?void 0:I.pseudo)||"Joueur 1",p2Name:(R==null?void 0:R.club_name)||(R==null?void 0:R.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:o?u:[],gc_p2:o?[]:u,gcCardsFull_p1:o?w:[],gcCardsFull_p2:o?[]:w,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:n||[],lastActionAt:new Date().toISOString()}}let p=v.game_state&&Object.keys(v.game_state).length?v.game_state:null;if(console.log("[PvP] init - amIHome:",o,"gameState exists:",!!p,"match.status:",v.status,"home_id:",v.home_id,"away_id:",v.away_id,"myId:",y.profile.id),!p)if(o){p=await k(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((p==null?void 0:p.p1Team)||{}));const{data:_}=await h.from("matches").select("game_state").eq("id",i).single();!(_!=null&&_.game_state)||!Object.keys(_.game_state).length?await h.from("matches").update({game_state:p,turn_user_id:v.home_id}).eq("id",i):p=_.game_state}else{t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let _=0;_<30&&!p;_++){await new Promise(M=>setTimeout(M,400));const{data:L}=await h.from("matches").select("game_state").eq("id",i).single();L!=null&&L.game_state&&Object.keys(L.game_state).length&&(p=L.game_state),_%5===0&&console.log("[PvP] away - poll",_,"game_state:",!!(L!=null&&L.game_state))}if(!p){x("Erreur de synchronisation","error"),g("home");return}p.gc_p2=u,p.gcCardsFull_p2=w,await h.from("matches").update({game_state:p}).eq("id",i)}let T=!1,z=null,C=!1;const N=new Set,V=new Set;async function Z(_){var re,oe;Nt();try{h.removeChannel(ne)}catch{}const L=p[m+"Score"]||0,M=p[b+"Score"]||0;let j,I;_.winner_id?(j=_.winner_id===y.profile.id,I=!1):_.forfeit?(j=L>M,I=!1):(I=L===M,j=L>M);let R="";if(a&&o)try{const{data:ee}=await h.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",v.home_id).single(),{data:de}=await h.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",v.away_id).single();if(ee&&de){const fe=j?1:I?.5:0,we=1-fe,ge=ee.placement_matches<10,_e=de.placement_matches<10,$e=computeGlicko2(ee.mmr,ee.mmr_deviation,ee.mmr_volatility,de.mmr,de.mmr_deviation,fe===1?1:fe===0?0:.5,ge),ae=computeGlicko2(de.mmr,de.mmr_deviation,de.mmr_volatility,ee.mmr,ee.mmr_deviation,we===1?1:we===0?0:.5,_e);await h.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:I?null:j?v.home_id:v.away_id,p_home_id:v.home_id,p_away_id:v.away_id,p_home_delta:$e.delta,p_away_delta:ae.delta,p_home_new_rd:$e.newRd,p_away_new_rd:ae.newRd,p_home_new_vol:$e.newSigma,p_away_new_vol:ae.newSigma});const Ie=$e.delta,Re=$e.newMmr,Ce=getTier(Re),Ye=Ie>=0?"+":"",He=Ie>=0?"#4caf50":"#ff6b6b",nt=getTier(ee.mmr);R=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Ce.id!==nt.id?`<div style="font-size:20px;font-weight:900;color:${Ce.color}">
                    ${Re>ee.mmr?"📈":"📉"} ${nt.emoji} ${nt.label} → ${Ce.emoji} ${Ce.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Re>ee.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Ie>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Ce.color}">${Ce.emoji} ${Ce.label}</div>`}
              ${ge?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${ee.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(ee){console.error("[Ranked] MMR update error:",ee)}(re=document.getElementById("pvp-end-overlay"))==null||re.remove();const B=document.createElement("div");B.id="pvp-end-overlay",B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const D=I?"🤝":j?"🏆":"😞",H=I?"MATCH NUL":j?"VICTOIRE !":"DÉFAITE",Q=I?"#fff":j?"#FFD700":"#ff6b6b";B.innerHTML=`
      <div style="font-size:64px">${D}</div>
      <div style="font-size:26px;font-weight:900;color:${Q}">${H}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${p[m+"Name"]} ${L} – ${M} ${p[b+"Name"]}</div>
      ${_.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${j?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${R}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${c?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(B),(oe=B.querySelector("#pvp-end-home"))==null||oe.addEventListener("click",()=>{B.remove(),ot(t),c?g("mini-league",{openLeagueId:c}):g(a?"ranked":"home")})}const ne=h.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},_=>{var M;const L=_.new;try{if(L.status==="finished"||L.forfeit){if(T)return;T=!0,z&&(clearInterval(z),z=null),Ke(),L.game_state&&(p=L.game_state),Z(L);return}if(L.game_state){const j=p;p=L.game_state;const I=p._lastGC;if(I&&I.seq&&!V.has(I.seq)&&(V.add(I.seq),I.by!==m)){ce(I.type,I.by,()=>G());return}const R=j[m+"Score"]||0,B=j[b+"Score"]||0,D=p[m+"Score"]||0,H=p[b+"Score"]||0,Q=D>R,re=H>B;if((Q||re)&&!N.has(p.round)){N.add(p.round);const oe=[...p.log||[]].reverse().find(fe=>fe.isGoal),ee=((oe==null?void 0:oe.homePlayers)||[]).map(fe=>({name:fe.name,note:fe.note,portrait:fe.portrait,job:fe.job}));!!((M=oe==null?void 0:oe.text)!=null&&M.includes("DERNIER CORNER"))?le().then(()=>{Ze(ee,D,H,Q,()=>G())}):Ze(ee,D,H,Q,()=>G());return}G()}}catch(j){console.error("[PvP] crash:",j)}}).subscribe();async function S(_){Object.assign(p,_),p.lastActionAt=new Date().toISOString();const{error:L}=await h.from("matches").update({game_state:p}).eq("id",i);L&&x("Erreur de synchronisation","error");try{G()}catch(M){console.error("[PvP] renderPvpScreen crash:",M)}}async function E(){if(T)return;T=!0,Nt(),Ke(),z&&(clearInterval(z),z=null);const _=o?v.away_id:v.home_id,L=o?"p2":"p1",M=o?"p1":"p2",j={...p,[L+"Score"]:3,[M+"Score"]:0,phase:"finished"},I=j.p1Score||0,R=j.p2Score||0;try{await h.from("matches").update({game_state:j}).eq("id",i);const{data:B,error:D}=await h.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:_,p_home_score:I,p_away_score:R,p_forfeit:!0});if(D&&console.error("[PvP] finish_pvp_match (forfeit):",D),c)try{await h.rpc("check_and_finish_mini_league",{p_league_id:c})}catch(H){console.error("[PvP] check_and_finish_mini_league (forfeit):",H)}try{const{data:H}=await h.rpc("apply_match_rewards",{p_match_id:i});H!=null&&H.success&&!(H!=null&&H.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(H){console.error("[PvP] apply_match_rewards (forfeit):",H)}}catch{}try{h.removeChannel(ne)}catch{}setTimeout(()=>{ot(t),c?g("mini-league",{openLeagueId:c}):g("home")},800)}const U={BOOST_STAT:({value:_=1,count:L=1,roles:M=[]},j,I)=>{const R=j[m+"Team"],B=Object.entries(R).filter(([D])=>!M.length||M.includes(D)).flatMap(([D,H])=>H.filter(Q=>!Q.used).map(Q=>({...Q,_line:D})));if(!B.length){j.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),I(j);return}$(B,L,`Choisir ${L} joueur(s) à booster (+${_})`,D=>{D.forEach(H=>{const Q=(R[H._line]||[]).find(re=>re.cardId===H.cardId);Q&&(Q.boost=(Q.boost||0)+_,j.log.push({text:`⚡ +${_} sur ${Q.name}`,type:"info"}))}),j[m+"Team"]=R,I(j)})},DEBUFF_STAT:({value:_=1,count:L=1,roles:M=[],target:j="ai"},I,R)=>{const B=j==="home"?m:b,D=I[B+"Team"],H=j==="home"?"allié":"adverse",Q=Object.entries(D).filter(([re])=>!M.length||M.includes(re)).flatMap(([re,oe])=>oe.map(ee=>({...ee,_line:re})));if(!Q.length){I.log.push({text:`🎯 Aucun joueur ${H}`,type:"info"}),R(I);return}$(Q,L,`Choisir ${L} joueur(s) ${H}(s) (-${_})`,re=>{re.forEach(oe=>{const ee=(D[oe._line]||[]).find(de=>de.cardId===oe.cardId);ee&&(ee.boost=(ee.boost||0)-_,I.log.push({text:`🎯 -${_} sur ${ee.name}`,type:"info"}))}),I[B+"Team"]=D,R(I)})},GRAY_PLAYER:({count:_=1,roles:L=[],target:M="ai"},j,I)=>{const R=M==="home"?m:b,B=j[R+"Team"],D=M==="home"?"allié":"adverse",H=Object.entries(B).filter(([Q])=>!L.length||L.includes(Q)).flatMap(([Q,re])=>re.filter(oe=>!oe.used).map(oe=>({...oe,_line:Q})));if(!H.length){j.log.push({text:`❌ Aucun joueur ${D}`,type:"info"}),I(j);return}$(H,_,`Choisir ${_} joueur(s) ${D}(s) à exclure`,Q=>{const re="usedCardIds_"+R,oe=new Set(j[re]||[]);Q.forEach(ee=>{const de=(B[ee._line]||[]).find(fe=>fe.cardId===ee.cardId);de&&(de.used=!0,oe.add(ee.cardId),j.log.push({text:`❌ ${de.name} exclu !`,type:"info"}))}),j[re]=[...oe],j[R+"Team"]=B,I(j)})},REVIVE_PLAYER:({count:_=1,roles:L=[]},M,j)=>{const I=M[m+"Team"],R=Object.entries(I).filter(([B])=>!L.length||L.includes(B)).flatMap(([B,D])=>D.filter(H=>H.used).map(H=>({...H,_line:B})));if(!R.length){M.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),j(M);return}$(R,_,`Choisir ${_} joueur(s) à ressusciter`,B=>{B.forEach(D=>{const H=(I[D._line]||[]).find(Q=>Q.cardId===D.cardId);H&&(H.used=!1,M.log.push({text:`💫 ${H.name} ressuscité !`,type:"info"}))}),M[m+"Team"]=I,j(M)})},REMOVE_GOAL:({},_,L)=>{const M=b+"Score";_[M]>0?(_[M]--,_.log.push({text:"🚫 Dernier but annulé !",type:"info"})):_.log.push({text:"🚫 Aucun but à annuler",type:"info"}),L(_)},ADD_GOAL_DRAW:({},_,L)=>{_[m+"Score"]===_[b+"Score"]?(_[m+"Score"]++,_.log.push({text:"🎯 But bonus !",type:"info"})):_.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),L(_)},ADD_SUB:({value:_=1},L,M)=>{L.maxSubs=(L.maxSubs||3)+_,L.log.push({text:`🔄 +${_} remplacement(s)`,type:"info"}),M(L)},CUSTOM:({},_,L)=>L(_)};function $(_,L,M,j){const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let R=[];function B(){var H,Q;const D=_.map(re=>{const oe=re._line||re.job||"MIL",ee=R.find(fe=>fe.cardId===re.cardId),de=je({...re,_evolution_bonus:0},{width:90,showStad:!0,role:oe,extraNote:re.boost||0});return`<div class="pp-item" data-cid="${re.cardId}"
          style="position:relative;border-radius:8px;${ee?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${re.used?"opacity:0.3;pointer-events:none":""}">
          ${de}
        </div>`}).join("");I.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${M}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${R.length}/${L}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${D}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${R.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${R.length}/${L})
          </button>
        </div>`,(H=I.querySelector("#pp-close"))==null||H.addEventListener("click",()=>I.remove()),I.querySelectorAll(".pp-item").forEach(re=>{re.addEventListener("click",()=>{const oe=re.dataset.cid,ee=_.find(fe=>fe.cardId===oe),de=R.findIndex(fe=>fe.cardId===oe);ee&&(de>-1?R.splice(de,1):R.length<L&&R.push(ee),B())})}),(Q=I.querySelector("#pp-confirm"))==null||Q.addEventListener("click",()=>{I.remove(),j(R)})}B(),document.body.appendChild(I)}async function te(_,L){const j=(p["gcCardsFull_"+m]||[]).find(D=>D.id===_),I=(j==null?void 0:j._gcDef)||(p.gcDefs||[]).find(D=>{var H;return D.name===L||((H=D.name)==null?void 0:H.toLowerCase().trim())===(L==null?void 0:L.toLowerCase().trim())}),R=[...p["usedGc_"+m]||[],_],B={type:L,by:m,seq:(p._gcAnimSeq||0)+1};V.add(B.seq),ce(L,m,async()=>{if(I!=null&&I.effect_type&&I.effect_type!=="CUSTOM"){const H=U[I.effect_type];if(H){const Q={...p};H(I.effect_params||{},Q,async re=>{re["usedGc_"+m]=R,re._lastGC=B,re._gcAnimSeq=B.seq,await S(re)});return}}const D={...p};switch(L){case"Remplacement+":D.maxSubs=(D.maxSubs||3)+1,D.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const H=b+"Score";D[H]>0&&(D[H]--,D.log.push({text:"🚫 But annulé",type:"info"}));break}}D["usedGc_"+m]=R,D._lastGC=B,D._gcAnimSeq=B.seq,await S(D)})}function me(_,L){const M="usedCardIds_"+_,j=new Set(p[M]||[]);L.forEach(I=>j.add(I)),p[M]=[...j]}function A(){for(const _ of["p1","p2"]){const L=new Set(p["usedCardIds_"+_]||[]),M=p[_+"Team"];if(M)for(const j of["GK","DEF","MIL","ATT"])(M[j]||[]).forEach(I=>{I.used=L.has(I.cardId)})}}function G(){var xo,yo,ho,vo,wo,_o;if(p.phase==="reveal")return be();if(p.phase==="midfield")return pe();if(p.phase==="finished")return Oe();const _=p[m+"Team"],L=p[b+"Team"];A();const M=p[m+"Score"],j=p[b+"Score"],I=p[m+"Name"],R=p[b+"Name"],B=p.phase===m+"-attack",D=p.phase===m+"-defense",H=Array.isArray(p["selected_"+m])?p["selected_"+m]:[],Q=H.map(X=>X.cardId),re=window.innerWidth>=700,oe=p[m+"Subs"]||[],ee=p["usedSubIds_"+m]||[],de=oe.filter(X=>!ee.includes(X.cardId)),fe=p["gcCardsFull_"+m]||[],we=p["usedGc_"+m]||[],ge=fe.filter(X=>!we.includes(X.id)),_e=p.boostOwner===m&&!p.boostUsed,$e=[..._.MIL||[],..._.ATT||[]].filter(X=>!X.used),ae=[...L.MIL||[],...L.ATT||[]].filter(X=>!X.used),Ie=!Se(L),Re=$e.length===0&&ae.length===0&&!Ie,Ce=(_.DEF||[]).filter(X=>!X.used),Ye=(_.GK||[]).filter(X=>!X.used);let He=[];B&&$e.length===0&&(Ie?(He=Ce.map(X=>X.cardId),Ce.length===0&&(He=He.concat(Ye.map(X=>X.cardId)))):Re&&(He=[...Ce,...Ye].map(X=>X.cardId)));function nt(X,ve,qe){var Be,ft;const Te=X._gcDef,Pt=(Te==null?void 0:Te.name)||X.gc_type,st=(Te==null?void 0:Te.effect)||((Be=Ge[X.gc_type])==null?void 0:Be.desc)||"",Fe=Te!=null&&Te.image_url?`/icons/${Te.image_url}`:null,Ne=((ft=Ge[X.gc_type])==null?void 0:ft.icon)||"⚡";return`<div class="pvp-gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}" style="flex-shrink:0;cursor:pointer">
        ${it(Pt,Fe,Ne,st,{width:ve})}
      </div>`}function Yt(X,ve){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${X}px;height:${ve}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ve*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ve*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ve*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const Pe=(X,ve)=>ve?Yt(95,162):nt(X,95),We=(X,ve)=>ve?Yt(68,116):nt(X,68),Ue=re?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",pt=B?Le(m)?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${H.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ue};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:D?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${H.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${R}</div>`,rt=B&&!Le(m)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':B||D?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${H.length}/3 sélectionné(s)</div>`:"",Bt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${re?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${de.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':de.map(X=>`<div class="pvp-sub-btn" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${wt(X,re?76:44,re?100:58)}</div>`).join("")}
    </div>`,ut=B?"attack":D?"defense":"idle",$t=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${si(_,p[m+"Formation"],ut,Q,re?1300:At(),re?600:Gt(),He)}
      </div>
    </div>`,at=p[m+"Team"],Sn=(()=>{var ve,qe,Te,Pt,st;if(D&&((ve=p.pendingAttack)!=null&&ve.players)){const Fe=p.pendingAttack;let Ne="";if(H.length>0){const Be=H.map(Je=>{const Wt=(at[Je._role]||[]).find(Ci=>Ci.cardId===Je.cardId)||Je,Jt=at[Je._role]||[],ui=Jt.findIndex(Ci=>Ci.cardId===Je.cardId),Mi=zt(Jt.length),Xt=ui>=0?Mi[ui]:Wt._col??1;return{...Wt,_line:Je._role,_col:Xt}}),ft=li(Be,((qe=p.modifiers)==null?void 0:qe[m])||{},p[m+"Formation"]);Ne=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${H.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(Be.map(Je=>({...Je,used:!1})),"#3a7bd5",ft.total,"defense",p[m+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${R} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${Qe((Fe.players||[]).map(Be=>({...Be,used:!1})),"#ff6b6b",Fe.total,"attack",p[b+"Formation"])}</div>
          ${Ne}
        </div>`}if(B&&((Te=p.pendingAttack)!=null&&Te.players)){const Fe=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${Qe((Fe.players||[]).map(Ne=>({...Ne,used:!1})),"#00ff88",Fe.total,"attack",p[m+"Formation"])}</div>
        </div>`}if(B&&!((Pt=p.pendingAttack)!=null&&Pt.players)&&H.length>0){const Fe=H.map(Be=>{const ft=(at[Be._role]||[]).find(Xt=>Xt.cardId===Be.cardId)||Be,Je=["GK","DEF"].includes(Be._role),Wt=at[Be._role]||[],Jt=Wt.findIndex(Xt=>Xt.cardId===Be.cardId),ui=zt(Wt.length),Mi=Jt>=0?ui[Jt]:ft._col??1;return{...ft,_line:Be._role,_col:Mi,...Je?{note_a:Math.max(1,Number(ft.note_a)||0)}:{}}}),Ne=di(Fe,((st=p.modifiers)==null?void 0:st[m])||{},p[m+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${H.length}/3)</div>
          <div style="display:flex;justify-content:center">${Qe(Fe.map(Be=>({...Be,used:!1})),"#FFD700",Ne.total,"attack",p[m+"Formation"])}</div>
        </div>`}const X=(p.log||[]).slice(-1)[0];return X?'<div style="padding:2px 4px">'+gn(X)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),bo=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${M} – ${j}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${R}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Sn}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(p.log||[]).length})
      </button>`;Tt(t),t.style.overflow="hidden",re?t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${bo}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Bt}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${$t}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${pt}${rt}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ge.map(X=>Pe(X,!1)).join("")}
            ${_e?Pe(null,!0):""}
          </div>
        </div>
      </div>`:t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${bo}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${si(_,p[m+"Formation"],ut,Q,At(),Gt(),He)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ge.map(X=>We(X,!1)).join("")}
            ${_e?We(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${B&&de.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${B&&de.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${B&&de.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${B&&de.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${de.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(p["usedSubIds_"+m]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(p["usedSubIds_"+m]||[]).length}/${p.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${pt}${rt}</div>
        </div>
      </div>`;function Dt(){const X=t.querySelector(".match-screen");if(!X)return;const ve=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);X.style.height=ve+"px",X.style.minHeight=ve+"px",X.style.maxHeight=ve+"px",X.style.overflow="hidden";const qe=t.querySelector("#mobile-action-bar"),Te=t.querySelector("#mobile-play-area");qe&&Te&&(Te.style.paddingBottom=qe.offsetHeight+"px")}if(Dt(),setTimeout(Dt,120),setTimeout(Dt,400),C||(C=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Dt),window.visualViewport.addEventListener("scroll",Dt)),window.addEventListener("resize",Dt)),function(){const ve=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!ve)return;const qe=ve.closest("#match-terrain-wrap");qe&&(qe.style.cssText="position:relative;width:100%;height:100%;padding:0"),ve.removeAttribute("width"),ve.removeAttribute("height"),ve.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ve.setAttribute("preserveAspectRatio","xMidYMid meet")}(),p._pvpResizeBound||(p._pvpResizeBound=!0,window.addEventListener("resize",()=>{const X=t.querySelector(".terrain-wrapper svg");if(X){const ve=X.closest("#match-terrain-wrap");ve&&(ve.style.cssText="position:relative;width:100%;height:100%;padding:0"),X.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t.querySelectorAll(".match-slot-hit").forEach(X=>{X.addEventListener("click",()=>{if(!B&&!D)return;const ve=X.dataset.cardId,qe=X.dataset.role,Te=(_[qe]||[]).find(Ne=>Ne.cardId===ve);if(!Te||Te.used)return;const Pt=He.includes(ve);if(B&&!["MIL","ATT"].includes(qe)&&!Pt)return;Array.isArray(p["selected_"+m])||(p["selected_"+m]=[]);const st=p["selected_"+m],Fe=st.findIndex(Ne=>Ne.cardId===ve);Fe>-1?st.splice(Fe,1):st.length<3&&st.push({...Te,_role:qe}),G()})}),t.querySelectorAll(".match-used-hit").forEach(X=>{X.addEventListener("click",()=>se(X.dataset.cardId))}),t.querySelectorAll(".pvp-sub-btn").forEach(X=>{X.addEventListener("click",()=>se())}),(xo=t.querySelector("#pvp-sub-open"))==null||xo.addEventListener("click",()=>se()),t.querySelectorAll(".pvp-gc-mini").forEach(X=>{B?X.addEventListener("click",()=>q(X.dataset.gcId,X.dataset.gcType)):(X.style.opacity="0.35",X.style.cursor="default",X.addEventListener("click",()=>Et("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(yo=t.querySelector("#pvp-boost-card"))==null||yo.addEventListener("click",()=>K()),(ho=t.querySelector("#pvp-action"))==null||ho.addEventListener("click",X=>{B?X.currentTarget.dataset.pass==="1"||!Le(m)?J():xe():D&&ke()}),(vo=t.querySelector("#pvp-quit"))==null||vo.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&E()}),(wo=t.querySelector("#pvp-view-opp"))==null||wo.addEventListener("click",()=>Y()),(_o=t.querySelector("#pvp-toggle-history"))==null||_o.addEventListener("click",()=>F()),z&&(clearInterval(z),z=null),Ke(),(B||D)&&!T){let X=30,ve=!1;const qe=()=>document.getElementById("pvp-timer"),Te=()=>{qe()&&(qe().textContent=X+"s",qe().style.color=ve?"#ff4444":"#fff")};Te(),z=setInterval(()=>{X--,X<0?ve?(clearInterval(z),z=null,Ke(),B&&!Le(m)?J():E()):(ve=!0,X=15,Te(),Qo("/sounds/timer-urgent.mp3",.6)):Te()},1e3)}}function be(){Tt(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${Dr(p[b+"Team"],p[b+"Formation"],null,p[b+"Name"]||"Adversaire")}
    </div>`;const _=t.querySelector("svg"),L=_==null?void 0:_.closest("#match-terrain-wrap");L&&(L.style.cssText="position:relative;width:100%;height:100%;padding:0"),_&&(_.removeAttribute("width"),_.removeAttribute("height"),_.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",_.setAttribute("preserveAspectRatio","xMidYMid meet")),m==="p1"&&setTimeout(async()=>{await S({phase:"midfield"})},5e3)}let W=!1;function pe(){if(W)return;const _=p[m+"Team"].MIL||[],L=p[b+"Team"].MIL||[],M=xt(_)+yt(_),j=xt(L)+yt(L),I=M>=j;Tt(t),t.innerHTML=`
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
      ${Ei(_,p[m+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${Ei(L,p[b+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const R=(de,fe)=>t.querySelectorAll(de).forEach((we,ge)=>{setTimeout(()=>{we.style.opacity="1",we.style.transform="translateY(0) scale(1)"},fe+ge*90)});R(".duel-card-me",150),R(".duel-card-opp",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((de,fe)=>setTimeout(()=>{de.style.opacity="1"},fe*70)),900),setTimeout(()=>{const de=t.querySelector("#pvp-vs");de&&(de.style.opacity="1",de.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(fe=>fe.style.opacity="1")},1250);function B(de,fe,we){const ge=document.getElementById(de);if(!ge)return;const _e=performance.now(),$e=ae=>{const Ie=Math.min(1,(ae-_e)/we);ge.textContent=Math.round(fe*(1-Math.pow(1-Ie,3))),Ie<1?requestAnimationFrame($e):ge.textContent=fe};requestAnimationFrame($e)}setTimeout(()=>{B("pvp-score-me",M,800),B("pvp-score-opp",j,800)},1500);const D=p.p1Team.MIL||[],H=p.p2Team.MIL||[],Q=xt(D)+yt(D),re=xt(H)+yt(H),oe=Q>=re?"p1":"p2";let ee=p.boostValue;ee==null&&(ee=Ko(),p.boostValue=ee,p.boostOwner=oe,p.boostUsed=!1),W=!0,setTimeout(()=>{const de=t.querySelector("#duel-row-"+(I?"me":"opp")),fe=t.querySelector("#duel-row-"+(I?"opp":"me")),we=document.getElementById("pvp-score-me"),ge=document.getElementById("pvp-score-opp"),_e=I?we:ge,$e=I?ge:we;_e&&(_e.style.fontSize="80px",_e.style.color=I?"#FFD700":"#ff6b6b",_e.style.animation="duelPulse .5s ease"+(I?",duelGlow 1.5s ease infinite .5s":"")),$e&&($e.style.opacity="0.25"),setTimeout(()=>{de&&(de.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",de.style.zIndex="5"),setTimeout(()=>{const ae=document.getElementById("duel-shock");ae&&(ae.style.animation="shockwave .5s ease-out forwards"),fe&&(fe.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const ae=document.getElementById("pvp-duel-finale");if(!ae)return;const Ie=p.boostOwner===m?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+ee+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=m==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ae.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(I?"⚽ "+p[m+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[b+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ie+Re,ae.style.transition="opacity .45s ease",ae.style.opacity="1",ae.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const Ye=oe;await S({phase:Ye+"-attack",attacker:Ye,round:1,boostValue:ee,boostUsed:!1,boostOwner:Ye})})},600)},700)},2800)}function ce(_,L,M){var fe,we;const j=(p.gcDefs||[]).find(ge=>{var _e;return ge.name===_||((_e=ge.name)==null?void 0:_e.toLowerCase().trim())===(_==null?void 0:_.toLowerCase().trim())}),I={purple:"#b06ce0",light_blue:"#00d4ef"}[j==null?void 0:j.color]||"#b06ce0",R=(j==null?void 0:j.name)||_,B=(j==null?void 0:j.effect)||((fe=Ge[_])==null?void 0:fe.desc)||"",D=j!=null&&j.image_url?`/icons/${j.image_url}`:null,H=((we=Ge[_])==null?void 0:we.icon)||"⚡",re=L===m?"Vous":p[L+"Name"]||"Adversaire",oe=document.createElement("div");oe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",oe.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{filter:drop-shadow(0 0 20px ${I}66)}50%{filter:drop-shadow(0 0 40px ${I}cc)}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${I};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${re} joue une carte</div>
      <div style="animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        ${it(R,D,H,B,{width:200})}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(oe);let ee=!1;const de=()=>{ee||(ee=!0,oe.remove(),setTimeout(()=>M&&M(),50))};oe.addEventListener("click",de),setTimeout(de,3e3)}function q(_,L){var re,oe,ee,de;const j=(p["gcCardsFull_"+m]||[]).find(fe=>fe.id===_),I=j==null?void 0:j._gcDef,R=(I==null?void 0:I.name)||L,B=(I==null?void 0:I.effect)||((re=Ge[L])==null?void 0:re.desc)||"Carte spéciale.",D=I!=null&&I.image_url?`/icons/${I.image_url}`:null,H=((oe=Ge[L])==null?void 0:oe.icon)||"⚡",Q=document.createElement("div");Q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",Q.innerHTML=`
      ${it(R,D,H,B,{width:190})}
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(Q),(ee=Q.querySelector("#pvp-gc-back"))==null||ee.addEventListener("click",()=>Q.remove()),(de=Q.querySelector("#pvp-gc-use"))==null||de.addEventListener("click",()=>{Q.remove(),te(_,L)})}function K(){var j;const _=p[m+"Team"],L=Object.entries(_).flatMap(([I,R])=>(R||[]).filter(B=>!B.used).map(B=>({...B,_line:I})));if(!L.length)return;const M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",M.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${L.map(I=>{const R={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[I._line]||"#555",B=jt(I,I._line)+(I.boost||0);return`<div class="bp-item" data-cid="${I.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${R};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${I.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(M),(j=M.querySelector("#bp-close"))==null||j.addEventListener("click",()=>M.remove()),M.querySelectorAll(".bp-item").forEach(I=>{I.addEventListener("click",async()=>{const R=I.dataset.cid,B=L.find(H=>H.cardId===R);if(!B)return;const D=(_[B._line]||[]).find(H=>H.cardId===R);D&&(D.boost=(D.boost||0)+p.boostValue),M.remove(),await S({[m+"Team"]:_,boostUsed:!0})})})}function se(_=null){var de,fe;if(!(p.phase===m+"-attack")){x("Remplacement uniquement avant votre attaque","warning");return}const M=p[m+"Team"],j=p["usedSubIds_"+m]||[],I=p.maxSubs||3;if(j.length>=I){x(`Maximum ${I} remplacements atteint`,"warning");return}const R=Object.entries(M).flatMap(([we,ge])=>(ge||[]).filter(_e=>_e.used).map(_e=>({..._e,_line:we}))),B=(p[m+"Subs"]||[]).filter(we=>!j.includes(we.cardId));if(!R.length){x("Aucun joueur utilisé à remplacer","warning");return}if(!B.length){x("Aucun remplaçant disponible","warning");return}let D=Math.max(0,R.findIndex(we=>we.cardId===_));const H=((de=R[D])==null?void 0:de._line)||((fe=R[D])==null?void 0:fe.job);let Q=Math.max(0,B.findIndex(we=>we.job===H)),re=!1;const oe=document.createElement("div");oe.id="pvp-sub-overlay",oe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function ee(){var Re,Ce,Ye,He,nt,Yt;const we=R[D],ge=B[Q],_e=Math.min(130,Math.round((window.innerWidth-90)/2)),$e=Math.round(_e*1.35),ae=Pe=>`background:rgba(255,255,255,0.12);border:none;color:${Pe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Pe?"default":"pointer"};flex-shrink:0`;oe.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${j.length}/${I})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ae(Q===0)}" ${Q===0?"disabled":""}>▲</button>
          <div>${ge?wt({...ge,used:!1,boost:0},_e,$e):"<div>—</div>"}</div>
          <button id="pin-down" style="${ae(Q>=B.length-1)}" ${Q>=B.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${Q+1}/${B.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ae(D===0)}" ${D===0?"disabled":""}>▲</button>
          <div>${we?wt({...we,used:!1,boost:0},_e,$e):"<div>—</div>"}</div>
          <button id="pout-down" style="${ae(D>=R.length-1)}" ${D>=R.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${D+1}/${R.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Re=oe.querySelector("#psub-close"))==null||Re.addEventListener("click",()=>oe.remove()),(Ce=oe.querySelector("#pout-up"))==null||Ce.addEventListener("click",()=>{D>0&&(D--,ee())}),(Ye=oe.querySelector("#pout-down"))==null||Ye.addEventListener("click",()=>{D<R.length-1&&(D++,ee())}),(He=oe.querySelector("#pin-up"))==null||He.addEventListener("click",()=>{Q>0&&(Q--,ee())}),(nt=oe.querySelector("#pin-down"))==null||nt.addEventListener("click",()=>{Q<B.length-1&&(Q++,ee())});const Ie=(Pe,We,Ue,pt)=>{const rt=oe.querySelector("#"+Pe);if(!rt)return;let Bt=0;rt.addEventListener("touchstart",ut=>{Bt=ut.touches[0].clientY},{passive:!0}),rt.addEventListener("touchend",ut=>{const $t=ut.changedTouches[0].clientY-Bt;if(Math.abs($t)<30)return;const at=We();$t<0&&at<pt-1?(Ue(at+1),ee()):$t>0&&at>0&&(Ue(at-1),ee())},{passive:!0})};Ie("pin-panel",()=>Q,Pe=>Q=Pe,B.length),Ie("pout-panel",()=>D,Pe=>D=Pe,R.length),(Yt=oe.querySelector("#psub-confirm"))==null||Yt.addEventListener("click",async Pe=>{if(Pe.preventDefault(),Pe.stopPropagation(),re)return;re=!0;const We=R[D],Ue=B[Q];if(!We||!Ue)return;const pt=We._line,rt=(M[pt]||[]).findIndex($t=>$t.cardId===We.cardId);if(rt===-1){x("Erreur : joueur introuvable","error"),oe.remove();return}const Bt={...Ue,_line:pt,position:We.position,used:!1,boost:0};M[pt].splice(rt,1,Bt);const ut=[...j,Ue.cardId];oe.remove(),ie(We,Ue,async()=>{await S({[m+"Team"]:M,[b+"Team"]:p[b+"Team"],["usedSubIds_"+m]:ut})})})}document.body.appendChild(oe),ee()}function ie(_,L,M){const j={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const R=(H,Q,re)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${Q};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${re}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${j[H.job]||"#555"};border:3px solid ${Q};position:relative;overflow:hidden;margin:0 auto">
        ${Ct(H)?`<img src="${Ct(H)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(H.name||"").slice(0,12)}</div>
    </div>`;I.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${R(L,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${R(_,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(I);let B=!1;const D=()=>{B||(B=!0,I.remove(),setTimeout(()=>M(),50))};I.addEventListener("click",D),setTimeout(D,2200)}function Y(){var L;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",_.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[b+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Zi(p[b+"Team"],p[b+"Formation"],null,[],At(),Gt())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(_),(L=_.querySelector("#pvp-opp-close"))==null||L.addEventListener("click",()=>_.remove())}function F(){var M;const _=p.log||[],L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",L.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${_.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[..._].reverse().map(j=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${j.type==="goal"?"#FFD700":j.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${j.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(L),(M=L.querySelector("#pvp-hist-close"))==null||M.addEventListener("click",()=>L.remove())}async function J(){if(p.phase!==m+"-attack")return;const _=m==="p1"?"p2":"p1",L=(p.round||0)+1,M=[...p.log||[]];M.push({type:"info",text:`⏭️ ${p[m+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const j=De(p),I=Le(_),R=j||!I?"finished":_+"-attack";await S({["selected_"+m]:[],modifiers:{...p.modifiers,[m]:{}},pendingAttack:null,phase:R,attacker:_,round:L,log:M}),R==="finished"&&await Me(p)}function P(_){const L=(_.GK||[]).some(j=>!j.used),M=["DEF","MIL","ATT"].some(j=>(_[j]||[]).some(I=>!I.used));return L&&!M}function O(_){return(_.p1Score||0)!==(_.p2Score||0)?null:P(_.p1Team)&&!Se(_.p2Team)?{side:"p1",gk:(_.p1Team.GK||[]).find(L=>!L.used)}:P(_.p2Team)&&!Se(_.p1Team)?{side:"p2",gk:(_.p2Team.GK||[]).find(L=>!L.used)}:null}async function le(){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(_);const L=(M,j)=>new Promise(I=>{_.innerHTML=`<div style="font-size:32px;font-weight:900;color:${j};letter-spacing:2px;animation:lcFade 1.4s ease both">${M}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(I,1400)});await L("⚽ DERNIER CORNER","#FFD700"),await L("🧤 LE GARDIEN MONTE !","#4fc3f7"),_.remove()}async function ue(_,L){const{side:M,gk:j}=_;if(!j)return;const I=M+"Score",R=(L[I]||0)+1;j.used=!0;const B=[...L.log||[]];B.push({type:"duel",isGoal:!0,homeScored:M===m,homePlayers:M==="p1"?[Rt(j)]:[],aiPlayers:M==="p2"?[Rt(j)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${L[M+"Name"]} marque !`});const D=(L.round||0)+1,H=M==="p1"?"p2":"p1",Q={...L,[I]:R},re=De(Q);N.add(D),await le();const oe=M===m?R:L[m+"Score"]||0,ee=M===m?L[b+"Score"]||0:R;Ze([Rt(j)],oe,ee,M===m,async()=>{await S({[I]:R,log:B,round:D,pendingAttack:null,phase:re?"finished":H+"-attack",attacker:H,["selected_"+m]:[],modifiers:{...p.modifiers,[m]:{}}}),re&&await Me({...p,[I]:R})})}async function xe(){const _=p[m+"Team"],L=!["GK","DEF","MIL","ATT"].some(R=>(p[b+"Team"][R]||[]).some(B=>!B.used)),M=(p["selected_"+m]||[]).map(R=>{const B=(_[R._role]||[]).find(fe=>fe.cardId===R.cardId)||R,D=["GK","DEF"].includes(R._role),H=_[R._role]||[],Q=H.findIndex(fe=>fe.cardId===R.cardId),re=zt(H.length),oe=Q>=0?re[Q]:B._col??1,ee=p.stadiumDef||p.homeStadiumDef||null,de=B.stadiumBonus||ee&&(ee.club_id&&String(B.club_id)===String(ee.club_id)||ee.country_code&&B.country_code===ee.country_code)||!1;return{...B,_line:R._role,_col:oe,stadiumBonus:de,...D?{note_a:Math.max(1,Number(B.note_a)||0)}:{}}});if(!M.length)return;const j=di(M,p.modifiers[m]||{},p[m+"Formation"]);me(m,M.map(R=>R.cardId)),M.forEach(R=>{const B=(_[R._role]||[]).find(D=>D.cardId===R.cardId);B&&(B.used=!0)}),p["selected_"+m]=[],G();const I=[...p.log||[]];if(L){if(M.length===1&&(M[0]._line==="GK"||M[0].job==="GK")&&(p.p1Score||0)===(p.p2Score||0)){await ue({side:m,gk:M[0]},{...p,[m+"Team"]:_,log:I});return}const B=(p[m+"Score"]||0)+1,D=M.map(ee=>Rt(ee));I.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:D,homeTotal:j.total,aiTotal:0});const H=(p.round||0)+1,Q=m==="p1"?"p2":"p1",re={...p,[m+"Team"]:_,[m+"Score"]:B},oe=De(re);N.add(H),Ze(D,B,p[b+"Score"]||0,!0,async()=>{await S({[m+"Team"]:_,[m+"Score"]:B,["selected_"+m]:[],modifiers:{...p.modifiers,[m]:{}},pendingAttack:null,phase:oe?"finished":Q+"-attack",attacker:Q,round:H,log:I}),oe&&await Me({...p,[m+"Score"]:B})});return}I.push({type:"pending",text:`⚔️ ${p[m+"Name"]} attaque (${j.total})`}),await S({[m+"Team"]:_,[b+"Team"]:p[b+"Team"],pendingAttack:{...j,players:M,side:m},["selected_"+m]:[],modifiers:{...p.modifiers,[m]:{}},phase:b+"-defense",log:I})}async function ke(){const _=p[m+"Team"],L=(p["selected_"+m]||[]).map(ge=>{const _e=(_[ge._role]||[]).find(Ce=>Ce.cardId===ge.cardId)||ge,$e=_[ge._role]||[],ae=$e.findIndex(Ce=>Ce.cardId===ge.cardId),Ie=zt($e.length),Re=ae>=0?Ie[ae]:_e._col??1;return{..._e,_line:ge._role,_col:Re}}),M=li(L,p.modifiers[m]||{},p[m+"Formation"]);me(m,L.map(ge=>ge.cardId)),L.forEach(ge=>{const _e=(_[ge._role]||[]).find($e=>$e.cardId===ge.cardId);_e&&(_e.used=!0)}),p["selected_"+m]=[],G();const j=eo(p.pendingAttack.total,M.total,p.modifiers[m]||{}),I=p.pendingAttack.side,R=j==="attack"||(j==null?void 0:j.goal),B=I==="p1"?"p2":"p1",D=(p.round||0)+1,H=(p.pendingAttack.players||[]).map(ge=>Rt(ge)),Q=[...p.log||[]];Q.push({type:"duel",isGoal:R,homeScored:R&&I===m,text:R?`⚽ BUT de ${p[I+"Name"]} ! (${p.pendingAttack.total} vs ${M.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${M.total})`,homePlayers:H,aiPlayers:L.map(ge=>Rt(ge)),homeTotal:p.pendingAttack.total,aiTotal:M.total});const re=R?(p[I+"Score"]||0)+1:p[I+"Score"]||0,oe={...p,[m+"Team"]:_,[I+"Score"]:re},ee=De(oe),de=ee?"finished":B+"-attack",fe=!ee&&!R?O(oe):null,we=async()=>{if(fe){await ue(fe,oe);return}await S({[m+"Team"]:_,[b+"Team"]:p[b+"Team"],[I+"Score"]:re,["selected_"+m]:[],modifiers:{...p.modifiers,[m]:{}},pendingAttack:null,phase:de,attacker:B,round:D,log:Q}),(de==="finished"||ee)&&await Me({...p,[I+"Score"]:re})};if(R){const ge=I===m,_e=ge?re:p[m+"Score"]||0,$e=ge?p[b+"Score"]||0:re;N.add(D),Ze(H,_e,$e,ge,we)}else await we()}function Ee(_){return["MIL","ATT"].some(L=>(_[L]||[]).some(M=>!M.used))}function Se(_){return["GK","DEF","MIL","ATT"].some(L=>(_[L]||[]).some(M=>!M.used))}function ye(_){return Se(_)&&!Ee(_)}function Le(_){const L=p[_+"Team"],M=p[(_==="p1"?"p2":"p1")+"Team"];return!!(Ee(L)||ye(L)&&!Se(M)||ye(L)&&!Ee(M)&&Se(M))}function De(_){return!Se(_.p1Team)&&!Se(_.p2Team)}function Ae(_){const L=_.p1Score||0,M=_.p2Score||0;return L===M?null:L>M?v.home_id:v.away_id}async function Me(_){Nt(),Ke();try{const L=Ae(_),M=L?v.home_id===L?v.away_id:v.home_id:null,j=_.p1Score||0,I=_.p2Score||0,{data:R,error:B}=await h.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:L,p_home_score:j,p_away_score:I,p_forfeit:!1});if(B&&console.error("[PvP] finish_pvp_match:",B),c)try{await h.rpc("check_and_finish_mini_league",{p_league_id:c})}catch(D){console.error("[PvP] check_and_finish_mini_league:",D)}L&&M&&sa(L,M).catch(()=>{});try{const{data:D}=await h.rpc("apply_match_rewards",{p_match_id:i});D!=null&&D.success&&!(D!=null&&D.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(D){console.error("[PvP] apply_match_rewards:",D)}if(typeof s=="function")try{await s({homeScore:j,awayScore:I,winnerId:L,homeId:v.home_id,awayId:v.away_id,matchId:i})}catch(D){console.error("[PvP] onMatchEnd:",D)}}catch(L){console.error("[PvP] finishMatch:",L)}}function Oe(){var I;const _=p[m+"Score"],L=p[b+"Score"],M=_>L,j=_===L;Tt(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${M?"🏆":j?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${M?"Victoire !":j?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${_} - ${L}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${c?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(I=document.getElementById("pvp-home"))==null||I.addEventListener("click",()=>{try{h.removeChannel(ne)}catch{}ot(t),c?g("mini-league",{openLeagueId:c}):g("home")})}G()}async function Yi(t,e,i=!1){var d,l;const{state:o,navigate:r,toast:n}=e,a=i&&((l=(d=e==null?void 0:e.state)==null?void 0:d.params)==null?void 0:l.rankedData)||null;await Ti(t,e,i?"ranked":"random",async({deckId:s,formation:c,starters:f,subsRaw:y,gcCardsEnriched:g,gcDefs:x,stadiumDef:m})=>{Tt(t);const b=async u=>{await ca(t,e,s,c,f,y,u||[],x,m,i,a)};if(!(g!=null&&g.length)){await b([]);return}Ii(t,g,b)})}async function da(t,e,i){return la(t,e,i)}async function ca(t,e,i,o,r,n,a=[],d=[],l=null,s=!1,c=null){var Z,ne;const{state:f,navigate:y,toast:g}=e,x=(c==null?void 0:c.mmr)??((Z=f.profile)==null?void 0:Z.mmr)??1e3,m=s?St(x):null,b=s?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",u=s?(m==null?void 0:m.color)||"#D4A017":"#FFD700";let w=!1,v=null,k=null;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${b};color:#fff;padding:32px;text-align:center;gap:20px">
      ${s?`<div style="font-size:36px">${(m==null?void 0:m.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${s?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${s?`<div style="font-size:13px;color:${(m==null?void 0:m.color)||"#D4A017"}">${(m==null?void 0:m.name)||""} · ${Math.round(x)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${u};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const p=async()=>{w=!0,v&&(v.unsubscribe(),v=null),k&&(clearInterval(k),k=null);try{await h.rpc("cancel_matchmaking",{p_user_id:f.profile.id})}catch(S){console.error("[Matchmaking] cancel error:",S)}};(ne=document.getElementById("cancel-mm"))==null||ne.addEventListener("click",async()=>{await p(),ot(t),y("home")});const T=async(S,E)=>{w||(w=!0,v&&(v.unsubscribe(),v=null),k&&(clearInterval(k),k=null),await qt(t,e,S,E,{myGC:a,gcDefs:d,stadiumDef:l,isRanked:s,rankedData:c,onMatchEnd:s?pa:null}))},z=f.user.id,{data:C,error:N}=s?await h.rpc("try_matchmake_ranked",{p_user_id:z,p_deck_id:i,p_mmr:x,p_range:200}):await h.rpc("try_matchmake",{p_user_id:z,p_deck_id:i});if(N||!(C!=null&&C.success)){console.error("[Matchmaking] try_matchmake error:",N||C),g("Erreur de matchmaking","error"),ot(t),y("home");return}if(C.matched){await T(C.match_id,!1);return}const V=async()=>{if(w)return;const{data:S}=await h.from("matchmaking_queue").select("status, match_id").eq("user_id",z).maybeSingle();(S==null?void 0:S.status)==="matched"&&S.match_id&&await T(S.match_id,!0)};v=h.channel(`mm_${z}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${z}`},S=>{const E=S.new;E.status==="matched"&&E.match_id&&T(E.match_id,!0)}).subscribe(),k=setInterval(V,3e3),s?setTimeout(async()=>{if(!w){w=!0,v&&(v.unsubscribe(),v=null),k&&(clearInterval(k),k=null);try{await h.rpc("cancel_matchmaking",{p_user_id:f.profile.id})}catch(S){console.error("[Matchmaking] cancel error:",S)}g("Aucun adversaire trouvé — match contre une IA calibrée sur votre niveau","info",4e3),y("match",{matchMode:"ranked_ai",rankedData:c,presetSetup:{deckId:i,formation:o,starters:r,subsRaw:n,gcCardsEnriched:a,gcDefs:d,stadiumDef:l}})}},2e4):setTimeout(()=>{w||p()},12e4)}async function pa(t,e){const{state:i,toast:o}=e,{winnerId:r,homeId:n,awayId:a,homeScore:d,awayScore:l,matchId:s}=t,c=i.user.id,f=n===c,y=r===c,{data:g}=await h.from("users").select("mmr, mmr_rd, mmr_v").eq("id",c).single(),{data:x}=await h.from("users").select("mmr, mmr_rd, mmr_v").eq("id",f?a:n).single();if(g&&x){const m=Vo(g.mmr,g.mmr_rd,g.mmr_v,x.mmr,x.mmr_rd,y?1:0);await h.from("users").update({mmr:m.mmr,mmr_rd:m.rd,mmr_v:m.v,mmr_wins:y?h.sql`mmr_wins + 1`:void 0,mmr_losses:y?void 0:h.sql`mmr_losses + 1`}).eq("id",c),o(y?`+MMR ↑ ${Math.round(m.mmr-g.mmr)}`:`-MMR ↓ ${Math.round(g.mmr-m.mmr)}`,y?"success":"error",4e3)}}const ua=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Yi,resumePvpMatch:da},Symbol.toStringTag,{value:"Module"}));async function fa(t,e){const{state:i,navigate:o,toast:r}=e,n=i.params||{},a=n.friendId||null,d=n.friendName||"Ami",l=!!n.isAccepting;await Ti(t,e,"friend",async({deckId:s,formation:c,starters:f,subsRaw:y,gcCardsEnriched:g,gcDefs:x,stadiumDef:m})=>{Tt(t);const b=async u=>{const w=u||[];l?await ga(t,e,s,w,x,m):await ma(t,e,s,w,x,m,a,d)};if(!(g!=null&&g.length)){await b([]);return}Ii(t,g,b)})}async function ma(t,e,i,o,r,n,a,d){var w;const{state:l,navigate:s,toast:c}=e,f=l.user.id,{data:y,error:g}=await h.from("friend_match_invites").insert({inviter_id:f,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(g||!y){console.error("[Friend] Erreur création invitation:",g),c("Impossible de créer l'invitation","error"),s("home");return}t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${d}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let x=!1,m=null;const b=async()=>{m&&(m.unsubscribe(),m=null)};(w=document.getElementById("cancel-friend"))==null||w.addEventListener("click",async()=>{await b(),await h.from("friend_match_invites").update({status:"declined"}).eq("id",y.id),ot(t),s("home")}),m=h.channel(`friend_invite_${y.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${y.id}`},async({new:v})=>{x||v.status!=="accepted"||!v.match_id||(x=!0,await b(),await qt(t,e,v.match_id,!0,{myGC:o,gcDefs:r,stadiumDef:n}))}).subscribe();const u=setInterval(async()=>{if(x)return;const{data:v}=await h.from("friend_match_invites").select("status, match_id").eq("id",y.id).single();(v==null?void 0:v.status)==="accepted"&&v.match_id&&(x=!0,clearInterval(u),await b(),await qt(t,e,v.match_id,!0,{myGC:o,gcDefs:r,stadiumDef:n}))},3e3);setTimeout(async()=>{x||(clearInterval(u),await b(),c("Invitation expirée","info"),s("home"))},12e4)}async function ga(t,e,i,o,r,n){const{state:a,navigate:d,toast:l}=e,s=a.user.id,{data:c}=await h.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",s).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){l("Aucune invitation en attente","error"),d("home");return}const{data:f,error:y}=await h.rpc("accept_friend_invite",{p_invite_id:c.id,p_invitee_deck_id:i});if(y||!(f!=null&&f.success)){console.error("[Friend] Erreur accept_friend_invite:",y||f),l((f==null?void 0:f.error)||"Impossible de rejoindre le match","error"),d("home");return}await qt(t,e,f.match_id,!1,{myGC:o,gcDefs:r,stadiumDef:n})}const wn="#1A6B3C",lt="#D4A017",ti="var(--tile-bg)",ii="var(--tile-border)",It="var(--divider)",Xe="var(--tile-fg-on-page)",Lt="var(--tile-fg-dim)",et="var(--tile-fg-faint)",ni="var(--nav-fg,#fff)",_n="rgba(255,255,255,0.62)",ba="rgba(255,255,255,0.4)";async function xa(t,e){var o;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(o=e.state.params)==null?void 0:o.openLeagueId;if(i){e.state.params.openLeagueId=null,await dt(t,e,i);return}await tt(t,e)}async function tt(t,e,i="waiting"){var v,k;const{state:o}=e,r=o.profile.id,{data:n}=await h.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",r),a=(n||[]).map(p=>p.league_id),d={};(n||[]).forEach(p=>{d[p.league_id]={amount:p.prize_amount,claimed:p.prize_claimed}});const{data:l,error:s}=await h.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),c=s?(await h.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:l||[],y=(a.length?await h.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],g=y.filter(p=>p.status==="waiting"&&!p.is_archived),x=y.filter(p=>p.status==="active"&&!p.is_archived),m=y.filter(p=>p.is_archived||p.status==="finished");let b=m;if(m.length){const{data:p}=await h.from("mini_league_matches").select("league_id").in("league_id",m.map(z=>z.id)).or(`home_id.eq.${r},away_id.eq.${r}`).not("status","eq","bye"),T=new Set((p||[]).map(z=>z.league_id));b=m.filter(z=>T.has(z.id))}const u=c.filter(p=>!a.includes(p.id)),w=[{key:"waiting",label:"🟡 En attente",count:g.length+u.length},{key:"active",label:"🟢 En cours",count:x.length},{key:"archived",label:"📁 Archivées",count:b.length}];t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${It};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${ni}">🏆 Mini League</div>
        <div style="font-size:12px;color:${_n}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${ni}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${It}">
      ${w.map(p=>`<button class="ml-tab" data-tab="${p.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===p.key?wn:"transparent"};background:none;font-size:12px;font-weight:${i===p.key?"900":"600"};color:${i===p.key?"#4ade80":ba};cursor:pointer">${p.label}${p.count?` (${p.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?ya(g,u,r):i==="active"?ha(x,r):va(b,r,d)}
    </div>
  </div>`,(v=document.getElementById("ml-create-btn"))==null||v.addEventListener("click",()=>wa(t,e)),(k=document.getElementById("ml-refresh-list"))==null||k.addEventListener("click",()=>tt(t,e,i)),t.querySelectorAll(".ml-tab").forEach(p=>p.addEventListener("click",()=>tt(t,e,p.dataset.tab))),t.querySelectorAll("[data-league-id]").forEach(p=>p.addEventListener("click",()=>dt(t,e,p.dataset.leagueId))),t.querySelectorAll("[data-join]").forEach(p=>p.addEventListener("click",T=>{T.stopPropagation(),kn(t,e,p.dataset.join,p.dataset.type)})),t.querySelectorAll("[data-delete]").forEach(p=>p.addEventListener("click",T=>{T.stopPropagation(),Wi(t,e,p.dataset.delete,p.dataset.name,i)})),t.querySelectorAll("[data-claim-league]").forEach(p=>p.addEventListener("click",async T=>{T.stopPropagation(),p.disabled=!0,p.textContent="...";const{data:z,error:C}=await h.rpc("claim_mini_league_prize",{p_league_id:p.dataset.claimLeague,p_user_id:o.profile.id});if(C||!(z!=null&&z.success)){e.toast((z==null?void 0:z.error)||"Erreur lors de la récupération","error"),tt(t,e,i);return}if(!z.already_claimed){o.profile.credits=(o.profile.credits||0)+z.prize;const N=document.getElementById("nav-credits");N&&(N.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),e.toast(`💰 +${z.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}tt(t,e,i)}))}function Si(t,e,i=!1,o=null){var l,s;const r=t.creator_id===e,n=t.pot||0,a=((s=(l=t.mini_league_members)==null?void 0:l[0])==null?void 0:s.count)||0,d=o&&o.amount>0&&!o.claimed;return`<div data-league-id="${t.id}" style="background:${ti};border:1px solid ${d?"rgba(212,160,23,0.5)":ii};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
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
  </div>`}function ya(t,e,i){const o=[];return t.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${et};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),o.push(...t.map(r=>Si(r,i,!1)))),e.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${et};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),o.push(...e.map(r=>Si(r,i,!0)))),o.length?o.join(""):`<div style="text-align:center;padding:40px;color:${et}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function ha(t,e){return t.length?t.map(i=>Si(i,e)).join(""):`<div style="text-align:center;padding:40px;color:${et}">Aucune mini league en cours.</div>`}function va(t,e,i={}){return t.length?t.map(o=>Si(o,e,!1,i[o.id])).join(""):`<div style="text-align:center;padding:40px;color:${et}">Aucune mini league archivée.</div>`}function wa(t,e){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(o=>o.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=o.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var x,m,b,u;const{toast:o}=e,r=document.getElementById("ml-name").value.trim(),n=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,d=((x=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:x.value)||"public",l=((m=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:m.value)||"aller",s=((u=(b=document.getElementById("ml-pwd"))==null?void 0:b.value)==null?void 0:u.trim())||null;if(!r){o("Le nom est obligatoire","error");return}if(a<100){o("Mise minimum : 100 crédits","error");return}if(d==="private"&&!s){o("Mot de passe requis","error");return}const{data:c,error:f}=await h.from("mini_leagues").insert({name:r,creator_id:e.state.profile.id,type:d,password:s,mode:l,max_players:n,entry_fee:a}).select().single();if(f){o("Erreur : "+f.message,"error");return}const{data:y}=await h.from("users").select("credits").eq("id",e.state.profile.id).single();if(((y==null?void 0:y.credits)||0)<a){await h.from("mini_leagues").delete().eq("id",c.id),o(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await h.from("users").update({credits:y.credits-a}).eq("id",e.state.profile.id),await h.from("mini_leagues").update({pot:a}).eq("id",c.id),await h.from("mini_league_members").insert({league_id:c.id,user_id:e.state.profile.id}),e.state.profile&&(e.state.profile.credits=y.credits-a);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(e.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),o(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),dt(t,e,c.id)})}function _a(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",e.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(e);const i=e.querySelector("#ml-pwd-input"),o=r=>{e.remove(),t(r)};setTimeout(()=>i==null?void 0:i.focus(),80),e.querySelector("#pwd-cancel").addEventListener("click",()=>o(null)),e.querySelector("#pwd-ok").addEventListener("click",()=>o(i.value.trim())),i.addEventListener("keydown",r=>{r.key==="Enter"&&o(i.value.trim())})})}async function kn(t,e,i,o){var f;const{toast:r,state:n}=e,a=n.profile.id;let d=null;if(o==="private"&&(d=await _a(),d===null))return;const{data:l,error:s}=await h.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:d});if(s||!(l!=null&&l.success)){console.error("[MiniLeague] join_mini_league:",s||l),r((l==null?void 0:l.error)||"Erreur lors de l'inscription","error");return}if(typeof e.refreshProfile=="function")await e.refreshProfile();else{const{data:y}=await h.from("users").select("credits").eq("id",a).single();n.profile&&y&&(n.profile.credits=y.credits)}const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(((f=n.profile)==null?void 0:f.credits)||0).toLocaleString("fr")}`),r("✅ Inscrit ! Pot mis à jour.","success"),dt(t,e,i)}async function ka(t,e,i,o){const{toast:r,state:n}=e,a=n.profile.id;if(!await new Promise(y=>{const g=document.createElement("div");g.className="modal-overlay",g.style.zIndex="2100",g.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${o.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(g),g.querySelector("#lv-ok").onclick=()=>{g.remove(),y(!0)},g.querySelector("#lv-cancel").onclick=()=>{g.remove(),y(!1)}}))return;const{data:l,error:s}=await h.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(s||!(l!=null&&l.success)){r((l==null?void 0:l.error)||"Erreur lors de la désinscription","error");return}const c=l.refund||o;n.profile&&(n.profile.credits=(n.profile.credits||0)+c);const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(n.profile.credits||0).toLocaleString("fr")}`),r(`↩️ Désinscrit · +${c.toLocaleString("fr")} cr. remboursés`,"success"),tt(t,e,"waiting")}async function Wi(t,e,i,o,r){const{toast:n}=e;if(!confirm(`Supprimer définitivement "${o}" et tous ses matchs/membres ? Action irréversible.`))return;await h.from("mini_league_matches").delete().eq("league_id",i),await h.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await h.from("mini_leagues").delete().eq("id",i);if(a){n("Erreur suppression ("+a.message+")","error");return}n("Mini League supprimée avec succès","success"),tt(t,e,r)}async function $a(t,e,i){await h.from("mini_leagues").update({is_archived:!0}).eq("id",i),e.toast("Mini League archivée","success"),tt(t,e,"archived")}async function dt(t,e,i){var k,p,T,z,C,N,V,Z,ne;const{state:o,toast:r}=e,n=o.profile.id,[{data:a},{data:d},{data:l}]=await Promise.all([h.from("mini_leagues").select("*").eq("id",i).single(),h.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),h.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){r("Introuvable","error"),await tt(t,e);return}const s=(d||[]).some(S=>S.user_id===n),c=a.creator_id===n,f=(d||[]).map(S=>S.user).filter(Boolean),y=Ta(f,l||[]),g=(l||[]).filter(S=>S.matchday===a.current_day),x=a.pot||0,m=a.entry_fee||100,b=g.length>0&&g.every(S=>S.status==="finished"||S.status==="bye"),u=a.current_day>=a.total_days,w=(d||[]).find(S=>S.user_id===n);t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${It};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${ni}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${ni};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${ni}">${a.name}</div>
        <div style="font-size:11px;color:${_n}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${m} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"rgba(74,222,128,0.16)":a.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${a.status==="active"?"#4ade80":a.status==="finished"?"#c084fc":"#eab308"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${x>0?`<div style="font-size:12px;font-weight:900;color:${lt};margin-top:4px">🏆 ${x.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${ti};border:1px solid ${ii};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Xe}">👥 Joueurs (${f.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${Lt};margin-bottom:10px">💰 ${m} cr./joueur → Pot estimé : ${(m*f.length).toLocaleString("fr")} cr. (🥇${Math.floor(m*f.length*.7).toLocaleString("fr")} · 🥈${Math.floor(m*f.length*.2).toLocaleString("fr")} · 🥉${Math.floor(m*f.length*.1).toLocaleString("fr")})</div>
        ${f.map(S=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${It}">
            <div style="width:36px;height:36px;border-radius:50%;background:${S.club_color2||wn};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${S.club_color1||"#fff"}">${(S.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Xe}">${S.club_name||S.pseudo}</div><div style="font-size:11px;color:${et}">@${S.pseudo}</div></div>
            ${S.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${c&&f.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${m} cr. × ${f.length})</button>`:""}
        ${c?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${s?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${m} cr.)</button>`}
        ${s&&!c?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${m.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${ti};border:1px solid ${ii};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${g.map(S=>Fo(S,f,n,s)).join("")}
        ${c&&b&&!u?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&y.length?`
      <div style="background:${ti};border:1px solid ${ii};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${et};text-transform:uppercase;border-bottom:2px solid ${It}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${x>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${lt}">💰</th>`:""}
          </tr></thead>
          <tbody>${y.map((S,E)=>{const U=x>0&&a.status==="finished"?E===0?Math.floor(x*.7):E===1?Math.floor(x*.2):E===2?Math.floor(x*.1):0:0;return`<tr style="border-bottom:1px solid ${It};${S.userId===n?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${E===0?lt:E<3?"#4ade80":Lt}">${["🥇","🥈","🥉"][E]||E+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Xe}">${S.clubName}</div><div style="font-size:10px;color:${et}">@${S.pseudo}</div></td>
              <td style="text-align:center;color:${Lt}">${S.played}</td><td style="text-align:center;color:${Lt}">${S.won}-${S.drawn}-${S.lost}</td>
              <td style="text-align:center;color:${S.goalDiff>=0?"#4ade80":"#ff6b6b"}">${S.goalDiff>=0?"+":""}${S.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Xe}">${S.points}</td>
              ${x>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${lt}">${U?U.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${ti};border:1px solid ${ii};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(S,E)=>E+1).reverse().map(S=>{const E=(l||[]).filter(U=>U.matchday===S);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${et};margin-bottom:6px">Journée ${S}</div>${E.map(U=>Fo(U,f,n,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${c&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${Lt}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const v=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((k=document.getElementById("ml-back"))==null||k.addEventListener("click",()=>tt(t,e,v)),(p=document.getElementById("ml-refresh"))==null||p.addEventListener("click",async S=>{const E=S.currentTarget;E.style.opacity="0.5",await dt(t,e,i)}),(T=document.getElementById("ml-start-btn"))==null||T.addEventListener("click",()=>Ea(t,e,a,f)),(z=document.getElementById("ml-next-day"))==null||z.addEventListener("click",()=>La(t,e,i)),(C=document.getElementById("ml-join-now"))==null||C.addEventListener("click",()=>kn(t,e,i,a.type)),(N=document.getElementById("ml-leave-btn"))==null||N.addEventListener("click",()=>ka(t,e,i,m)),(V=document.getElementById("ml-delete-btn"))==null||V.addEventListener("click",()=>Wi(t,e,i,a.name,"waiting")),(Z=document.getElementById("ml-delete-now"))==null||Z.addEventListener("click",()=>Wi(t,e,i,a.name,v)),(ne=document.getElementById("ml-archive-btn"))==null||ne.addEventListener("click",()=>$a(t,e,i)),t.querySelectorAll("[data-play-match]").forEach(S=>{S.addEventListener("click",()=>{const E=g.find(U=>U.id===S.dataset.playMatch);E&&(ct(),e.navigate("match-mini-league",{mlMatchId:E.id,leagueId:i}))})}),a.status==="finished"&&w){const S=y.findIndex(E=>E.userId===n);S>=0&&S<3&&w.prize_amount>0&&!w.prize_claimed&&setTimeout(()=>Sa(t,e,a,w,S),400)}}function Fo(t,e,i,o,r=!1){const n=f=>e.find(y=>y.id===f);if(t.is_bye){const f=n(t.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${Lt};text-align:center">🔵 ${(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"?"} exempté(e)</div>`}const a=n(t.home_id),d=n(t.away_id),l=t.home_id===i||t.away_id===i,s=l&&t.status==="pending"&&o&&!r,c=t.status==="finished"?`${t.home_score} - ${t.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${l?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${l?"rgba(74,222,128,0.35)":It}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${t.status==="finished"?"#4ade80":et}">${c}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"?"}</div>
    ${s?`<button data-play-match="${t.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${t.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function Ea(t,e,i,o){const{toast:r,state:n}=e,a=za(o.map(s=>s.id),i.mode),d=[];a.forEach((s,c)=>s.forEach(f=>d.push({league_id:i.id,matchday:c+1,home_id:f.home||f.bye,away_id:f.away||null,is_bye:!!f.bye,status:f.bye?"bye":"pending"})));const{error:l}=await h.from("mini_league_matches").insert(d);if(l){r("Erreur calendrier : "+l.message,"error");return}await h.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),r(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),dt(t,e,i.id)}async function La(t,e,i){const{data:o}=await h.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),r=(o.current_day||0)+1;if(r>(o.total_days||0)){dt(t,e,i);return}await h.from("mini_leagues").update({current_day:r}).eq("id",i),e.toast(`Journée ${r} commencée !`,"success"),dt(t,e,i)}async function Sa(t,e,i,o,r){var y,g;const{state:n,toast:a}=e,d=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],l=["🥇","🥈","🥉"][r],s=o.prize_amount||d[r]||0,c=o.prize_claimed,f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",f.innerHTML=`
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
    </div>`,document.body.appendChild(f),(y=f.querySelector("#prize-close"))==null||y.addEventListener("click",()=>f.remove()),(g=f.querySelector("#claim-prize-btn"))==null||g.addEventListener("click",async x=>{const m=x.currentTarget;m.disabled=!0,m.textContent="...";const{data:b,error:u}=await h.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:n.profile.id});if(u||!(b!=null&&b.success)){console.error("[MiniLeague] claim_mini_league_prize:",u||b),a((b==null?void 0:b.error)||"Erreur lors de la récupération","error"),m.disabled=!1,m.textContent=`💰 Récupérer ${s.toLocaleString("fr")} cr.`;return}if(b.already_claimed)a("Déjà récupéré précédemment","info");else{const w=(n.profile.credits||0)+b.prize;n.profile&&(n.profile.credits=w);const v=document.getElementById("nav-credits");v&&(v.textContent=`💰 ${w.toLocaleString("fr")}`),a(`💰 +${b.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}f.remove(),dt(t,e,i.id)})}function za(t,e){const o=t.length%2===0?[...t]:[...t,null],r=o.length;let n=o.slice(1);const a=[];for(let d=0;d<r-1;d++){const l=[],s=[o[0],...n];for(let c=0;c<r/2;c++){const f=s[c],y=s[r-1-c];f===null?l.push({bye:y}):y===null?l.push({bye:f}):l.push({home:f,away:y})}a.push(l),n=[n[n.length-1],...n.slice(0,-1)]}return e==="aller-retour"?[...a,...a.map(d=>d.map(l=>l.bye?l:{home:l.away,away:l.home}))]:a}function Ta(t,e){const i={};return t.forEach(o=>{i[o.id]={userId:o.id,pseudo:o.pseudo,clubName:o.club_name||o.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),e.filter(o=>o.status==="finished"&&!o.is_bye&&o.home_score!=null).forEach(o=>{const r=i[o.home_id],n=i[o.away_id];!r||!n||(r.played++,n.played++,r.goalsFor+=o.home_score,r.goalsAgainst+=o.away_score,n.goalsFor+=o.away_score,n.goalsAgainst+=o.home_score,o.home_score>o.away_score?(r.won++,r.points+=3,n.lost++):o.home_score<o.away_score?(n.won++,n.points+=3,r.lost++):(r.drawn++,r.points++,n.drawn++,n.points++),r.goalDiff=r.goalsFor-r.goalsAgainst,n.goalDiff=n.goalsFor-n.goalsAgainst)}),Object.values(i).sort((o,r)=>r.points-o.points||r.goalDiff-o.goalDiff||r.goalsFor-o.goalsFor)}async function Ro(t,e){const{state:i,navigate:o,toast:r}=e,n=i.params||{},a=n.leagueId||null,d=n.mlMatchId||null,l=i.user.id;if(!d||!a){r("Match introuvable","error"),o("mini-league");return}const{data:s,error:c}=await h.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",d).single();if(c||!s){r("Match introuvable","error"),o("mini-league",{openLeagueId:a});return}if(s.home_id!==l&&s.away_id!==l){r("Vous ne faites pas partie de ce match","error"),o("mini-league",{openLeagueId:a});return}const f=s.home_id===l;if(s.match_id){await qt(t,e,s.match_id,f,{mlLeagueId:a,mlMatchId:d});return}await Ti(t,e,"mini_league",async({deckId:y,gcCardsEnriched:g,gcDefs:x,stadiumDef:m})=>{Tt(t);const b=async u=>{const{data:w,error:v}=await h.rpc("start_mini_league_match",{p_ml_match_id:d,p_user_id:l,p_deck_id:y});if(v||!(w!=null&&w.success)){console.error("[MiniLeague] start_mini_league_match error:",v||w),r((w==null?void 0:w.error)||"Impossible de lancer le match","error"),o("mini-league",{openLeagueId:a});return}if(w.matched){await qt(t,e,w.match_id,f,{mlLeagueId:a,mlMatchId:d,myGC:u||[],gcDefs:x,stadiumDef:m});return}await Ia(t,e,{mlMatchId:d,leagueId:a,amIHome:f,chosenGC:u,gcDefs:x,stadiumDef:m})};if(!(g!=null&&g.length)){await b([]);return}Ii(t,g,b)})}function Ia(t,e,{mlMatchId:i,leagueId:o,amIHome:r,chosenGC:n,gcDefs:a,stadiumDef:d}){return new Promise(l=>{var m;const{navigate:s}=e;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let c=!1;const f=async b=>{if(!c){if(c=!0,clearInterval(x),g)try{g.unsubscribe()}catch{}b&&await qt(t,e,b,r,{mlLeagueId:o,mlMatchId:i,myGC:n||[],gcDefs:a,stadiumDef:d}),l()}};(m=document.getElementById("wait-back"))==null||m.addEventListener("click",()=>{if(c=!0,clearInterval(x),g)try{g.unsubscribe()}catch{}s("mini-league",{openLeagueId:o}),l()});const y=async()=>{if(c)return;const{data:b}=await h.from("mini_league_matches").select("match_id").eq("id",i).single();b!=null&&b.match_id&&f(b.match_id)},g=h.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},b=>{var u;(u=b.new)!=null&&u.match_id&&f(b.new.match_id)}).subscribe(),x=setInterval(y,3e3);y()})}const No={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function yi(t,e,i=0){return e?(Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0)+(e===t.job||e===t.job2?i:0):0}async function Aa(t,e){t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await go(t,e)}async function go(t,e){const{state:i,toast:o,navigate:r}=e;Kt(r,i.profile,"market","/icons/",o);const{data:n}=await h.from("market_listings").select(`id, price, status, listed_at, seller_id,
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
  </div>`;let s="buy";const c=()=>{var b,u,w,v,k,p,T;return{name:(((b=document.getElementById("flt-name"))==null?void 0:b.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((w=document.getElementById("flt-country"))==null?void 0:w.value)||"").toLowerCase().trim(),job:((v=document.getElementById("flt-job"))==null?void 0:v.value)||"",rarity:((k=document.getElementById("flt-rarity"))==null?void 0:k.value)||"",note1:parseInt((p=document.getElementById("flt-note1"))==null?void 0:p.value)||0,note2:parseInt((T=document.getElementById("flt-note2"))==null?void 0:T.value)||0}};function f(b){const u=c();return b.filter(w=>{var V,Z,ne;const v=(V=w.card)==null?void 0:V.player;if(!v)return!1;const k=`${v.firstname} ${v.surname_real}`.toLowerCase(),p=(((Z=v.clubs)==null?void 0:Z.encoded_name)||"").toLowerCase(),T=(v.country_code||"").toLowerCase(),z=((ne=w.card)==null?void 0:ne.evolution_bonus)||0,C=yi(v,v.job,z),N=v.job2?yi(v,v.job2,z):0;return!(u.name&&!k.includes(u.name)||u.club&&!p.includes(u.club)||u.country&&!T.includes(u.country)||u.job&&v.job!==u.job||u.rarity&&v.rarity!==u.rarity||u.note1&&C<u.note1||u.note2&&N<u.note2)})}function y(b){var p,T,z;const u=(p=b.card)==null?void 0:p.player;if(!u)return"";const w=((T=b.card)==null?void 0:T.evolution_bonus)||0,v=(i.profile.credits||0)>=b.price;return`<div class="mkt-buy-tile">
      ${je({...u,_evolution_bonus:w},{width:140})}
      <div class="mkt-price">${b.price.toLocaleString("fr")} cr.</div>
      <div class="mkt-seller">Vendeur : ${((z=b.seller)==null?void 0:z.pseudo)||"—"}</div>
      <button class="btn btn-primary btn-sm" data-buy="${b.id}" ${v?"":"disabled"} style="font-size:12px;padding:8px 10px">${v?"Acheter":"Trop cher"}</button>
    </div>`}function g(b){var Z,ne,S,E;const u=(Z=b.card)==null?void 0:Z.player;if(!u)return"";const w=((ne=b.card)==null?void 0:ne.evolution_bonus)||0,v=yi(u,u.job,w),k=u.job2?yi(u,u.job2,w):0,p=b.status==="sold",T=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,z=No[u.job]||"#bbb",C=u.job2?No[u.job2]||"#bbb":null,N=u.job==="GK"?"#fff":z,V=u.job2==="GK"?"#fff":C;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${p?"opacity:0.7":""}">
      ${T?`<img src="${T}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(S=u.clubs)!=null&&S.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${z};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${N};font-family:Arial Black,Arial">${v}</span>
        </div>
        ${k?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${C};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${V};font-family:Arial Black,Arial">${k}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:${p?"#22c55e":"#999"};margin-top:1px">
          ${p?`✅ Vendu à ${((E=b.buyer)==null?void 0:E.pseudo)||"—"} · ${b.sold_at?new Date(b.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(b.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${b.price.toLocaleString("fr")}</div>
        ${p?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${b.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function x(){const b=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(b){if(u.style.display=s==="buy"?"flex":"none",s==="buy"){const w=f(d);b.innerHTML=w.length?`<div class="mkt-buy-grid">${w.map(y).join("")}</div>`:'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const w=l.filter(k=>k.status==="active").sort((k,p)=>new Date(p.listed_at)-new Date(k.listed_at)),v=l.filter(k=>k.status==="sold").sort((k,p)=>new Date(p.sold_at||p.listed_at)-new Date(k.sold_at||k.listed_at));b.innerHTML=(w.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${w.length})</div>`+w.map(g).join(""):"")+(v.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${v.length})</div>`+v.map(g).join(""):"")+(!w.length&&!v.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}b.querySelectorAll("[data-buy]").forEach(w=>w.addEventListener("click",()=>Ma(w.dataset.buy,d,t,e))),b.querySelectorAll("[data-cancel]").forEach(w=>w.addEventListener("click",()=>ja(w.dataset.cancel,t,e)))}}t.querySelectorAll(".mkt-tab").forEach(b=>{b.addEventListener("click",()=>{s=b.dataset.tab,t.querySelectorAll(".mkt-tab").forEach(u=>{const w=u===b;u.style.background=w?"var(--green)":"var(--tile-bg)",u.style.color=w?"#fff":"var(--tile-fg-dim)",u.style.borderColor=w?"var(--green)":"var(--tile-border)"}),x()})});let m;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(b=>{var u;(u=document.getElementById(b))==null||u.addEventListener("input",()=>{clearTimeout(m),m=setTimeout(x,250)})}),x()}async function Ma(t,e,i,o){const{state:r,toast:n,refreshProfile:a}=o,d=e.find(c=>c.id===t);if(!d)return;const l=d.price;if((r.profile.credits||0)<l){n("Crédits insuffisants","error");return}Ca(d,async()=>{const{error:c}=await h.rpc("buy_market_card",{p_listing_id:t,p_buyer_id:r.profile.id});if(c){n("Erreur achat : "+c.message,"error");return}await a();const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),n("✅ Carte achetée !","success"),await go(i,o)})}function Ca(t,e){var a;const i=(a=t.card)==null?void 0:a.player,o=i?`${i.firstname} ${i.surname_real}`:"cette carte",r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${o} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${t.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(r);const n=d=>{r.remove(),d&&e()};r.querySelector("#buy-cancel").addEventListener("click",()=>n(!1)),r.querySelector("#buy-ok").addEventListener("click",()=>n(!0)),r.addEventListener("click",d=>{d.target===r&&n(!1)})}async function ja(t,e,i){const{toast:o}=i,{data:r}=await h.from("market_listings").select("card_id").eq("id",t).single();if(await h.from("market_listings").update({status:"cancelled"}).eq("id",t),r!=null&&r.card_id){const{count:n}=await h.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",r.card_id).eq("status","active");n||await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",r.card_id)}o("Annonce retirée","success"),go(e,i)}async function qa(t,e){var g,x,m,b,u;const{state:i,navigate:o}=e,r=((x=(g=e==null?void 0:e.state)==null?void 0:g.params)==null?void 0:x.tab)||"ranked";t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:n},{data:a},{data:d}]=await Promise.all([h.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").order("mmr",{ascending:!1}).limit(100),h.rpc("get_mini_league_leaderboard"),h.rpc("get_random_leaderboard")]);let l=r;const s=w=>w<3?["#D4A017","#a0a0a0","#cd7f32"][w]:"var(--green)",c=w=>w<3?"#000":"#fff";function f(){var k,p,T;const w=document.getElementById("rankings-legend");w&&(w.innerHTML=l==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const v=document.getElementById("rankings-list");if(v){if(l==="ranked"){const z=n||[];v.innerHTML=z.length>0?z.map((C,N)=>{const V=St(C.mmr??1e3),Z=(C.ranked_wins||0)+(C.ranked_losses||0)+(C.ranked_draws||0),ne=Z>0?Math.round((C.ranked_wins||0)/Z*100):0,S=C.id===i.profile.id,E=(C.placement_matches||0)<10;return`
          <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${S?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${N<3?["#D4A017","#a0a0a0","#cd7f32"][N]:"rgba(255,255,255,0.08)"};color:${N<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${N<3?"16":"13"}px">${N<3?["🥇","🥈","🥉"][N]:N+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${V.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${C.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${C.club_name} · ${V.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${E?"❓":V.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${V.color}">${E?"Placement":V.label}</div>
              ${E?"":`<div style="font-size:10px;color:var(--tile-fg-dim)">${ne}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(l==="mini-league"){const z=a||[];v.innerHTML=z.length>0?z.map((C,N)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${C.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(N)};color:${c(N)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${N<3?"16":"13"}px">${N<3?["🥇","🥈","🥉"][N]:N+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${C.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${C.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${C.top1} 🥈${C.top2} 🥉${C.top3}</div>
            <div style="color:var(--tile-fg-dim)">${C.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const z=d||[];v.innerHTML=z.length>0?z.map((C,N)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${C.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(N)};color:${c(N)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${N<3?"16":"13"}px">${N<3?["🥇","🥈","🥉"][N]:N+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${C.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${C.club_name}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:16px;font-weight:900;color:#D4A017" title="Score de classement — tient compte du nombre de matchs joués">📊 ${C.wilson_score}</div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">${C.wins}/${C.total} V</div>
            <div style="font-size:9px;color:var(--green);font-weight:700;margin-top:2px">${C.win_pct}%</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}(k=document.getElementById("tab-ranked"))!=null&&k.style&&(document.getElementById("tab-ranked").style.cssText=y(l==="ranked")),(p=document.getElementById("tab-mini-league"))!=null&&p.style&&(document.getElementById("tab-mini-league").style.cssText=y(l==="mini-league")),(T=document.getElementById("tab-random"))!=null&&T.style&&(document.getElementById("tab-random").style.cssText=y(l==="random"))}}const y=w=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${w?"900":"400"};background:${w?"var(--green)":"rgba(255,255,255,0.06)"};color:${w?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;t.innerHTML=`
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
  </div>`,f(),(m=document.getElementById("tab-ranked"))==null||m.addEventListener("click",()=>{l="ranked",f()}),(b=document.getElementById("tab-mini-league"))==null||b.addEventListener("click",()=>{l="mini-league",f()}),(u=document.getElementById("tab-random"))==null||u.addEventListener("click",()=>{l="random",f()})}async function Ba(t,e){var T,z,C,N;const{state:i,navigate:o,toast:r}=e,n=i.profile;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:d}]=await Promise.all([h.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),h.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",n.id).single()]);if(!d){r("Erreur chargement profil","error"),o("home");return}if(!a){const V=d.mmr??1e3,Z=St(V);Ri(V);const ne=Math.round(1e3+(V-1e3)*.5),S=St(ne),{data:E}=await h.from("users").select("id, pseudo, club_name, mmr, rank_tier").order("mmr",{ascending:!1}).limit(100),U=(E||[]).findIndex($=>$.id===d.id)+1;t.innerHTML=`
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
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;text-align:center;border:2px solid ${Z.color}40">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Ton classement</div>
        <div style="font-size:44px;margin-bottom:2px">${Z.emoji}</div>
        <div style="font-size:18px;font-weight:900;color:${Z.color};letter-spacing:2px;text-transform:uppercase">${Z.label}</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px">MMR ${V} ${U?`· #${U} au classement général`:""}</div>
      </div>

      <!-- Top 100 -->
      <div>
        <div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:8px">🏆 Classement général — Top 100</div>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto">
          ${(E||[]).map(($,te)=>{const me=St($.mmr??1e3),A=$.id===d.id;return`<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:10px;
              background:${A?"rgba(212,160,23,0.15)":"rgba(0,0,0,0.25)"};
              border:1px solid ${A?"#D4A017":"transparent"}">
              <div style="width:26px;text-align:center;font-size:12px;font-weight:900;color:rgba(255,255,255,0.5)">#${te+1}</div>
              <div style="font-size:18px">${me.emoji}</div>
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${$.pseudo}</div>
                <div style="font-size:10px;color:rgba(255,255,255,0.4)">${$.club_name||"—"}</div>
              </div>
              <div style="font-size:13px;font-weight:900;color:${me.color}">${$.mmr??1e3}</div>
            </div>`}).join("")||'<div style="text-align:center;color:rgba(255,255,255,0.4);font-size:12px;padding:16px">Aucun classement disponible.</div>'}
        </div>
      </div>

      <!-- Aperçu saison suivante -->
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;border:1.5px dashed rgba(255,255,255,0.2)">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;text-align:center">📅 Aperçu — prochaine saison</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:24px">
          <div style="text-align:center;opacity:.6">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Actuel</div>
            <div style="font-size:24px">${Z.emoji}</div>
            <div style="font-size:12px;font-weight:700;color:${Z.color}">${V}</div>
          </div>
          <div style="font-size:20px;color:rgba(255,255,255,0.3)">→</div>
          <div style="text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Recalculé</div>
            <div style="font-size:28px">${S.emoji}</div>
            <div style="font-size:14px;font-weight:900;color:${S.color}">${ne}</div>
          </div>
        </div>
        <div style="font-size:11px;color:rgba(255,255,255,0.35);text-align:center;margin-top:10px">Ton MMR est recalculé vers la moyenne à chaque nouvelle saison, pour repartir sur des bases équilibrées.</div>
      </div>
    </div>`,(T=document.getElementById("ranked-back"))==null||T.addEventListener("click",()=>o("home"));return}const l=d.mmr??1e3,s=d.mmr_deviation??350,c=d.mmr_volatility??.06,f=d.placement_matches??0,y=f<10,g=Math.max(0,10-f),x=St(l),m=Ri(l),b=qi.findIndex(V=>V.id===x.id),u=qi[b+1]||null,w={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},v=(d.ranked_wins||0)+(d.ranked_losses||0)+(d.ranked_draws||0),k=v>0?Math.round((d.ranked_wins||0)/v*100):0,p=qi.map(V=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${x.id===V.id?1:.35};
      transform:${x.id===V.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${x.id===V.id?"28px":"20px"}">${V.emoji}</div>
      <div style="font-size:9px;color:${V.color};font-weight:${x.id===V.id?"900":"400"};letter-spacing:0.5px">${V.label.toUpperCase()}</div>
    </div>
  `).join("");t.innerHTML=`
  <div style="min-height:100%;background:${w[x.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px">
      <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
      <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
    </div>

    <!-- Bandeau tier -->
    <div style="background:rgba(0,0,0,0.35);border-radius:20px;padding:20px 16px;text-align:center;border:2px solid ${x.color}40">
      <div style="font-size:52px;margin-bottom:4px">${x.emoji}</div>
      <div style="font-size:22px;font-weight:900;color:${x.color};letter-spacing:3px;text-transform:uppercase">${x.label}</div>
    </div>

    <!-- Progression bar -->
    ${x.id!=="master"?`
    <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${x.emoji} ${x.label}</span>
        ${u?`<span>${u.emoji} ${u.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${m}%;background:linear-gradient(90deg,${x.color},${x.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${m}% vers ${u?u.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${p}
    </div>

    <!-- Placement / Stats -->
    ${y?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${f}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${g} match${g>1?"s":""} — gains et pertes ×2</div>
    </div>`:`
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
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
        <div style="font-size:20px;font-weight:900;color:#D4A017">${k}%</div>
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
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:auto;padding-top:8px">
      <button id="ranked-play-btn" style="width:100%;padding:18px;border-radius:16px;border:none;
        background:linear-gradient(135deg,${x.color},${x.color}99);
        color:#000;font-size:18px;font-weight:900;cursor:pointer;letter-spacing:1px;
        box-shadow:0 4px 20px ${x.color}60;text-transform:uppercase">
        ⚽ Jouer en Ranked
      </button>
      <button id="ranked-leaderboard-btn" style="width:100%;padding:12px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.2);
        background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        🏆 Classement Ranked
      </button>
    </div>
  </div>`,(z=document.getElementById("ranked-back"))==null||z.addEventListener("click",()=>o("home")),(C=document.getElementById("ranked-leaderboard-btn"))==null||C.addEventListener("click",()=>o("rankings",{tab:"ranked"})),(N=document.getElementById("ranked-play-btn"))==null||N.addEventListener("click",()=>{ct(),o("match",{matchMode:"ranked",rankedData:{mmr:l,rd:s,sigma:c,isPlacement:y}})})}async function Da(t,{state:e,navigate:i,toast:o}){const r=e.profile;if(!r)return;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await h.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${r.id},away_id.eq.${r.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(n||[]).filter(c=>c.status==="finished"),l=(n||[]).filter(c=>c.status==="in_progress");function s(c){const f=c.home_id===r.id;f?c.home_score:c.away_score,f?c.away_score:c.home_score;const y=c.winner_id===r.id,g=c.home_score===c.away_score&&c.status==="finished",x=c.status!=="finished"?"…":g?"N":y?"V":"D",m=c.status!=="finished"||g?"#888":y?"#1A6B3C":"#c0392b";let b=a[c.mode]||c.mode;c.away_id===null&&!b.startsWith("IA")&&(b="IA");const w=c.home_id===r.id?c.away:c.home;let v;c.away_id===null?v=b:w?v=`${w.club_name||w.pseudo} (${w.pseudo})`:v="Adversaire";let k="";c.status==="in_progress"&&Date.now()-new Date(c.created_at).getTime()>3600*1e3&&(k=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const p=new Date(c.created_at),T=p.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+p.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),z=c.status==="finished"?`${c.home_score} - ${c.away_score}`:`${c.home_score||0} - ${c.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${v}${k}</div>
        <div style="font-size:11px;color:var(--gray-600)">${b} · ${T}${c.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${z}</span>
        <span style="background:${m};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${x}</span>
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
  </div>`}In(Mn);const he={user:null,profile:null,page:"home",params:{}};function mt(t,e="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=t,o.className=`show ${e}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function Pa(t,e,i=""){document.getElementById("modal-title").textContent=t,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Ji(){document.getElementById("modal-overlay").classList.add("hidden")}async function oi(){if(!he.user)return;const{data:t}=await h.from("users").select("*").eq("id",he.user.id).single();t&&(he.profile=t)}const $n="mw_theme";function ri(){return localStorage.getItem($n)||"dark"}function Go(t){var e;localStorage.setItem($n,t),hi(t),(e=he.profile)!=null&&e.id&&h.from("users").update({theme:t}).eq("id",he.profile.id).then(()=>{})}function hi(t){var e,i;document.documentElement.setAttribute("data-theme",t),t==="club"&&(document.documentElement.style.setProperty("--club-color1",((e=he.profile)==null?void 0:e.club_color1)||"#0a0f0a"),document.documentElement.style.setProperty("--club-color2",((i=he.profile)==null?void 0:i.club_color2)||"#080d08"))}function vt(t,e={}){he.page=t,he.params=e,En()}async function En(){var o,r,n,a;const t=document.getElementById("page-content");if(!t)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===he.page)});const e=document.getElementById("nav-credits");e&&he.profile&&(e.textContent=`💰 ${(he.profile.credits||0).toLocaleString("fr")}`);const i={state:he,navigate:vt,toast:mt,openModal:Pa,closeModal:Ji,refreshProfile:oi};switch(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',he.page){case"home":await Bi(t,i);break;case"home2":await Bi(t,i);break;case"game":await vr(t,i);break;case"settings":await un(t,i);break;case"collection":await Sr(t,i);break;case"decks":await Hi(t,i);break;case"boosters":await Hn(t,i);break;case"ranked":await Ba(t,i);break;case"match":{const d=he.params&&he.params.matchMode||"vs_ai_easy";d==="random"?await Yi(t,i,!1):d==="ranked"?await Yi(t,i,!0):d==="friend"?await fa(t,i,(o=he.params)==null?void 0:o.friendId,(r=he.params)==null?void 0:r.friendName):d==="mini_league"||d==="mini-league"?await Ro(t,i,(n=he.params)==null?void 0:n.mlMatchId,(a=he.params)==null?void 0:a.leagueId):await Pr(t,i);break}case"market":await Aa(t,i);break;case"rankings":await qa(t,i);break;case"matches":await Da(t,i);break;case"friends":await br(t,i);break;case"mini-league":await xa(t,i);break;case"match-mini-league":{const d=he.params||{};await Ro(t,i,d.mlMatchId,d.leagueId);break}default:await Bi(t,i)}}function Fa(){var o,r;const t=document.getElementById("app"),e=he.profile;if(!e)return;const i="/icons/";t.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.08.01-2018" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",a=>{a.preventDefault(),vt(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>vt("home")),document.getElementById("nav-credits").addEventListener("click",()=>vt("boosters")),(o=document.getElementById("journal-btn"))==null||o.addEventListener("click",()=>Ra()),(r=document.getElementById("settings-btn"))==null||r.addEventListener("click",()=>vt("settings"))}async function Ra(){const{data:t}=await h.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const r=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}function Na(t,{onPlay:e}){var o;const i="/icons/";t.style.cssText="",t.innerHTML=`
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
  </div>`,(o=t.querySelector("#pl-play-btn"))==null||o.addEventListener("click",e)}async function Ga(){hi(ri()),document.getElementById("modal-overlay").addEventListener("click",o=>{o.target===o.currentTarget&&Ji()}),document.getElementById("modal-close").addEventListener("click",Ji);const{data:{session:t}}=await h.auth.getSession();if(!t){Oo(),Na(document.getElementById("app"),{onPlay:()=>ko(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:mt})});return}he.user=t.user,await oi(),hi(ri()),Oo();try{const{data:o}=await h.from("formation_links_overrides").select("formation, links"),r={};(o||[]).forEach(n=>{r[n.formation]=n.links}),An(r)}catch(o){console.warn("Impossible de charger les overrides de formation:",o)}if(!he.profile){jn(document.getElementById("app"),{state:he,navigate:async()=>{await oi(),hi(ri()),Fi()},toast:mt,refreshProfile:oi});return}h.rpc("heartbeat").then(()=>{}).catch(()=>{}),setInterval(()=>{h.rpc("heartbeat").then(()=>{}).catch(()=>{})},45e3);const e=Array.isArray(he.profile.pending_boosters)?he.profile.pending_boosters:[];if(!he.profile.onboarding_done&&e.length>0){Zn(document.getElementById("app"),{state:he,toast:mt,refreshProfile:oi,navigate:()=>{Fi(),setTimeout(()=>zo(he.profile,vt,mt),800)}});return}Fi(),new URLSearchParams(location.search).get("tutorial")==="1"?(history.replaceState({},"",location.pathname),setTimeout(()=>pn(he.profile,vt,mt),800)):setTimeout(()=>zo(he.profile,vt,mt),800),h.auth.onAuthStateChange(async(o,r)=>{o==="SIGNED_OUT"&&(he.user=null,he.profile=null,document.getElementById("app").innerHTML="",ko(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:mt}))})}function Oa(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Ai(){const t=document.getElementById("app");t&&(t.style.height=Oa()+"px")}window.addEventListener("resize",Ai);window.addEventListener("orientationchange",()=>setTimeout(Ai,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Ai);function Fi(){const t=()=>{var i;(i=he.user)!=null&&i.id&&h.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",he.user.id).then(()=>{})};t(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(t,6e4);const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Ai(),Fa(),En()}function Oo(){const t=document.getElementById("app-loader"),e=document.getElementById("app");e&&(e.style.display=""),t&&(t.classList.add("zoom-out"),setTimeout(()=>t.style.display="none",500))}function Ln(t){var o;const e=document.getElementById("app-loader");if(e&&(e.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${t||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(o=document.getElementById("boot-retry"))==null||o.addEventListener("click",()=>window.location.reload())}Ga().catch(t=>{console.error("Échec du démarrage:",t),Ln()});setTimeout(()=>{const t=document.getElementById("app-loader");t&&t.style.display!=="none"&&!t.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Ln("Le serveur met trop de temps à répondre.")},12e3);
