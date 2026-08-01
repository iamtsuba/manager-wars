const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/match-shared-DVEmlV85.js","assets/match-shared-D_M6t_P4.css"])))=>i.map(i=>d[i]);
import{v as Wi,s as v,w as Oo,F as _t,g as Ct,o as dt,m as ni,n as Ot,r as je,k as Lt,x as Pi,G as Oe,q as Ji,y as Go,z as Si,p as Xi,C as jt,I as Li,J as Fi,L as yi,O as vi,P as Mi,Q as zi,T as Gt,U as ri,V as zt,W as Ho,X as ai,Y as Qe,Z as si,_ as wt,$ as it,a0 as Uo,a1 as En,a2 as Ko,a3 as Qi,a4 as Sn,a5 as It,a6 as Ci,u as Ln,a7 as zn,d as In}from"./match-shared-DVEmlV85.js";const An="/";async function wo(t,{navigate:e,toast:i}){let o="login";const r=await Wi("signup_access_code_required"),n=()=>{var d,l,s,c,f,y,g,x;const a=o==="login";if(t.innerHTML=`
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
        <img src="${An}icons/logo-withname.png" alt="Manager Wars" style="height:44px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(d=document.getElementById("tab-login-btn"))==null||d.addEventListener("click",()=>{o="login",n()}),(l=document.getElementById("tab-reg-btn"))==null||l.addEventListener("click",()=>{o="register",n()}),a){(s=document.getElementById("login-password"))==null||s.addEventListener("keydown",u=>{var w;u.key==="Enter"&&((w=document.getElementById("login-btn"))==null||w.click())});let m=null,b=!1;r&&((c=document.getElementById("login-access-code"))==null||c.addEventListener("input",u=>{const w=u.target.value,h=document.getElementById("login-access-code-status"),$=document.getElementById("login-btn");if(clearTimeout(m),b=!1,$&&($.disabled=!0,$.style.opacity="0.45",$.style.cursor="not-allowed"),!w){h&&(h.textContent="");return}h&&(h.textContent="⏳ Vérification…",h.style.color="rgba(255,255,255,0.4)"),m=setTimeout(async()=>{const{data:p,error:z}=await v.rpc("check_signup_password",{input_password:w});if(z){h&&(h.textContent="Erreur de vérification.",h.style.color="#f87171");return}b=!!p,h&&(h.textContent=b?"✅ Code valide":"❌ Code incorrect",h.style.color=b?"#4ade80":"#f87171"),$&&($.disabled=!b,$.style.opacity=b?"1":"0.45",$.style.cursor=b?"pointer":"not-allowed")},400)})),(f=document.getElementById("login-btn"))==null||f.addEventListener("click",async()=>{var S;const u=document.getElementById("login-email").value.trim(),w=document.getElementById("login-password").value,h=((S=document.getElementById("login-access-code"))==null?void 0:S.value)||"",$=document.getElementById("login-error");if($.textContent="",!u||!w){$.textContent="Remplissez tous les champs.";return}if(r){const{data:M}=await v.rpc("check_signup_password",{input_password:h});if(!M){$.textContent="Code d'accès incorrect.";return}}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:z}=await v.auth.signInWithPassword({email:u,password:w});if(p.textContent="⚽ Se connecter",p.disabled=!1,z){$.textContent=z.message.includes("Invalid")?"Email ou mot de passe incorrect.":z.message;return}window.location.reload()})}else{(y=document.getElementById("reg-confirm"))==null||y.addEventListener("keydown",u=>{var w;u.key==="Enter"&&((w=document.getElementById("reg-btn"))==null||w.click())});let m=null,b=!1;r&&((g=document.getElementById("reg-access-code"))==null||g.addEventListener("input",u=>{const w=u.target.value,h=document.getElementById("access-code-status"),$=document.getElementById("reg-btn");if(clearTimeout(m),b=!1,$&&($.disabled=!0,$.style.opacity="0.45",$.style.cursor="not-allowed"),!w){h&&(h.textContent="");return}h&&(h.textContent="⏳ Vérification…",h.style.color="rgba(255,255,255,0.4)"),m=setTimeout(async()=>{const{data:p,error:z}=await v.rpc("check_signup_password",{input_password:w});if(z){h&&(h.textContent="Erreur de vérification.",h.style.color="#f87171");return}b=!!p,h&&(h.textContent=b?"✅ Code valide":"❌ Code incorrect",h.style.color=b?"#4ade80":"#f87171"),$&&($.disabled=!b,$.style.opacity=b?"1":"0.45",$.style.cursor=b?"pointer":"not-allowed")},400)})),(x=document.getElementById("reg-btn"))==null||x.addEventListener("click",async()=>{var R;const u=document.getElementById("reg-email").value.trim(),w=document.getElementById("reg-password").value,h=document.getElementById("reg-confirm").value,$=((R=document.getElementById("reg-access-code"))==null?void 0:R.value)||"",p=document.getElementById("reg-error");if(p.textContent="",!u||!w||!h){p.textContent="Remplissez tous les champs.";return}if(!u.includes("@")||!u.includes(".")){p.textContent="Adresse email invalide.";return}if(w.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(w!==h){p.textContent="Les mots de passe ne correspondent pas.";return}if(r){const{data:V}=await v.rpc("check_signup_password",{input_password:$});if(!V){p.textContent="Code d'accès incorrect.";return}}const z=document.getElementById("reg-btn");z.textContent="⏳ Création…",z.disabled=!0;const{data:S,error:M}=await v.auth.signUp({email:u,password:w});if(z.textContent="🚀 Créer mon compte",z.disabled=!1,M){M.message.includes("already registered")||M.message.includes("already exists")||M.message.includes("User already")?p.textContent="Un compte existe déjà avec cette adresse email.":p.textContent=M.message;return}if(S!=null&&S.user&&Array.isArray(S.user.identities)&&S.user.identities.length===0){p.textContent="Un compte existe déjà avec cette adresse email.";return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),o="login",n(),setTimeout(()=>{const V=document.getElementById("login-email");V&&(V.value=u)},50)})}};n()}function Tn(t,{state:e,navigate:i,toast:o,refreshProfile:r}){let n="#1A6B3C",a="#D4A017";t.innerHTML=`
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
  `;function d(){var x;const s=document.getElementById("logo-preview"),c=document.getElementById("logo-initials"),f=((x=document.getElementById("setup-club"))==null?void 0:x.value)||"MW",y=f.trim().split(" ").filter(Boolean),g=y.length>=2?(y[0][0]+y[1][0]).toUpperCase():f.slice(0,2).toUpperCase();s&&(s.style.background=a,s.style.borderColor=n),c&&(c.textContent=g,c.style.color=n)}document.getElementById("color1").addEventListener("input",s=>{n=s.target.value,document.getElementById("swatch1").style.background=n,d()}),document.getElementById("color2").addEventListener("input",s=>{a=s.target.value,document.getElementById("swatch2").style.background=a,d()});function l(s){document.querySelectorAll(".setup-step").forEach(c=>c.classList.remove("active")),document.getElementById(`step-${s}`).classList.add("active"),document.getElementById("step-num").textContent=s,document.getElementById("progress-fill").style.width=`${Math.round(s/3*100)}%`,s===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("step1-error");if(c.textContent="",s.length<3){c.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await v.from("users").select("id").eq("pseudo",s).maybeSingle();if(f){c.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const s=document.getElementById("setup-club").value.trim(),c=document.getElementById("step2-error");if(c.textContent="",s.length<2){c.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await v.from("users").select("id").eq("club_name",s).maybeSingle();if(f){c.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),y=document.getElementById("step3-finish");f.textContent="",y.disabled=!0,y.textContent="Création en cours…";try{const{error:g}=await v.from("users").insert({id:e.user.id,pseudo:s,club_name:c,club_color1:n,club_color2:a,credits:15e3});if(g)throw g;await Mn(e.user.id),await r(),o(`Bienvenue ${s} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){f.textContent=g.message,y.disabled=!1,y.textContent="🚀 Créer mon profil !"}})}async function Mn(t){const e=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1},{type:"stadium",count:1}];try{await v.from("users").update({pending_boosters:e,onboarding_done:!1,first_booster_opened:!1}).eq("id",t)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Cn="modulepreload",jn=function(t){return"/"+t},_o={},Vo=function(e,i,o){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),d=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(i.map(l=>{if(l=jn(l),l in _o)return;_o[l]=!0;const s=l.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const f=document.createElement("link");if(f.rel=s?"stylesheet":Cn,s||(f.as="script"),f.crossOrigin="",f.href=l,d&&f.setAttribute("nonce",d),document.head.appendChild(f),s)return new Promise((y,g)=>{f.addEventListener("load",y),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(a){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=a,window.dispatchEvent(d),!d.defaultPrevented)throw a}return r.then(a=>{for(const d of a||[])d.status==="rejected"&&n(d.reason);return e().catch(n)})},Yo="mw_sound_volume";function Zi(){const t=localStorage.getItem(Yo);if(t===null)return 100;const e=parseInt(t,10);return Number.isFinite(e)?Math.max(0,Math.min(100,e)):100}function qn(t){localStorage.setItem(Yo,String(Math.max(0,Math.min(100,Math.round(t)))))}function eo(){return Zi()===0}function hi(t){return Math.max(0,Math.min(1,t*(Zi()/100)))}function to(t,e=1){if(eo())return null;try{const i=new Audio(t);return i.volume=hi(e),i.play().catch(()=>{}),i}catch{return null}}let bt=null,Ri=null,ko=.3;function Wo(t,e=.3){if(ko=e,bt&&Ri===t&&!bt.paused){bt.volume=hi(ko);return}if(Rt(),!eo())try{const i=new Audio(t);i.loop=!0,i.volume=hi(e),i.play().catch(()=>{}),bt=i,Ri=t}catch{}}function Rt(){if(bt)try{bt.pause(),bt.currentTime=0}catch{}bt=null,Ri=null}let Qt=null;function Jo(t,e=.6){if(Ke(),!eo())try{const i=new Audio(t);i.volume=hi(e),i.play().catch(()=>{}),Qt=i}catch{}}function Ke(){if(Qt)try{Qt.pause(),Qt.currentTime=0}catch{}Qt=null}async function Xo(t=null){const e=new Date().toISOString().slice(0,10),{data:i}=await v.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const o=i.filter(a=>!(a.available_from&&e<a.available_from||a.available_until&&e>a.available_until));if(!o.length)return[];let r=o;if(t){const a=o.filter(d=>d.max_per_user!=null);if(a.length){const{data:d}=await v.from("booster_claims").select("booster_id").eq("user_id",t).in("booster_id",a.map(s=>s.id)),l={};(d||[]).forEach(s=>{l[s.booster_id]=(l[s.booster_id]||0)+1}),r=o.filter(s=>s.max_per_user==null?!0:(l[s.id]||0)<s.max_per_user)}}if(!r.length)return[];const{data:n}=await v.from("booster_drop_rates").select("*").in("booster_id",r.map(a=>a.id)).order("sort_order");return r.map(a=>({...a,rates:(n||[]).filter(d=>d.booster_id===a.id)}))}async function Bn(t,e){const{data:i}=await v.from("booster_configs").select("max_per_user").eq("id",e).single();i!=null&&i.max_per_user&&await v.from("booster_claims").insert({user_id:t,booster_id:e})}function Dn(t){if(!(t!=null&&t.length))return null;const e=t.reduce((o,r)=>o+Number(r.percentage),0);let i=Math.random()*e;for(const o of t)if(i-=Number(o.percentage),i<=0)return o;return t[t.length-1]}const Qo=()=>Object.keys(_t),Pn=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Ni={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Fn(t){const e=t.player;if(!e)return"";const i=t.evolution_bonus||0;return je({...e,_evolution_bonus:i},{width:140})}function io(t){var r;const e={};(t.rates||[]).forEach(n=>{e[n.card_type]=(e[n.card_type]||0)+Number(n.percentage||0)});const i=((r=Object.entries(e).sort((n,a)=>a[1]-n[1])[0])==null?void 0:r[0])||"player",o=t.image_url||"booster-players.png";return{id:t.id,img:"/icons/"+o,name:t.name,sub:`${t.card_count} carte(s)`,cost:t.price_type==="credits"&&t.price_credits||0,costLabel:t.price_type==="credits"?`${(t.price_credits||0).toLocaleString("fr")} crédits`:t.price_type==="pub"?"1 pub":"Gratuit",cardCount:t.card_count||5,type:i,isPub:t.price_type==="pub",rates:t.rates||[],allow_duplicates:t.allow_duplicates!==!1,_boosterId:t.id,_raw:t}}async function Rn(t,e,i,o){if(t.reward_type==="credits"){const r=(e.credits||0)+(t.credits_amount||0),{error:n}=await v.from("users").update({credits:r}).eq("id",e.id);if(n)throw n;return e.credits=r,{type:"credits",amount:t.credits_amount}}if(t.reward_type==="card"){const{data:r}=await v.from("players").select("firstname, surname_real, rarity").eq("id",t.player_id).single(),{error:n}=await v.from("cards").insert({owner_id:e.id,player_id:t.player_id,card_type:"player"});if(n)throw n;return{type:"card",player:r}}if(t.reward_type==="booster"){const{data:r}=await v.from("booster_configs").select("*").eq("id",t.booster_config_id).single(),{data:n}=await v.from("booster_drop_rates").select("*").eq("booster_id",t.booster_config_id);if(!r)throw new Error("Booster introuvable (peut-être supprimé depuis).");const a=io({...r,rates:n});let d=[];return a.type==="formation"?d=await ro(e,0):a.type==="game_changer"?d=await no(e,a.cardCount,0):a.type==="player"?d=await oo(e,a.cardCount,0):d=await wi(e,{...a,cost:0}),{type:"booster",name:r.name,cards:d,boosterUI:a}}throw new Error("Type de récompense inconnu.")}async function Nn(t,{state:e,navigate:i,toast:o}){var f,y,g;Ut(i,e.profile,"boosters","/icons/",o);const r=((f=e.profile)==null?void 0:f.credits)||0;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let n=[];try{n=(await Xo((y=e.user)==null?void 0:y.id)).map(io)}catch(x){console.warn("Erreur chargement boosters DB, fallback hardcodé",x)}n.length||(n=Pn.map(x=>({...x,rates:[],isPub:x.id==="players_pub"})));const a=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.profile.id).then(x=>x.data||[]),d=new Set(a.filter(x=>x.card_type==="stadium").map(x=>x.stadium_id)),l=new Set(a.filter(x=>x.card_type==="formation").map(x=>x.formation)),s=new Set(a.filter(x=>x.card_type==="game_changer").map(x=>x.gc_type)),c={};for(const x of n){if(x.allow_duplicates!==!1||!((g=x.rates)!=null&&g.length))continue;const m=[...new Set((x.rates||[]).map(u=>u.card_type))];let b=!1;for(const u of m)if(u==="stadium"){const{data:w}=await v.from("stadium_definitions").select("id");if((w||[]).some(h=>!d.has(h.id))){b=!0;break}}else if(u==="game_changer"){const{data:w}=await v.from("gc_definitions").select("name").eq("is_active",!0);if((w||[]).some(h=>!s.has(h.name))){b=!0;break}}else if(u==="formation"){const{FORMATION_LINKS:w}=await Vo(async()=>{const{FORMATION_LINKS:h}=await import("./match-shared-DVEmlV85.js").then($=>$.a8);return{FORMATION_LINKS:h}},__vite__mapDeps([0,1]));if(Object.keys(w).some(h=>!l.has(h))){b=!0;break}}else{b=!0;break}b||(c[x.id]=!0)}t.innerHTML=`
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
  </div>`,t.querySelectorAll(".booster-card:not(.disabled)").forEach(x=>{x.addEventListener("click",async()=>{const m=n.find(b=>b.id===x.dataset.booster);if(m){x.style.opacity="0.5",x.style.pointerEvents="none";try{await On(m,{state:e,toast:o,navigate:i,container:t})}catch(b){o(b.message,"error"),x.style.opacity="",x.style.pointerEvents=""}}})}),t.querySelectorAll(".booster-info-btn").forEach(x=>{x.addEventListener("click",m=>{m.stopPropagation();const b=n.find(u=>u.id===x.dataset.boosterId);Vn(b)})})}async function On(t,{state:e,toast:i,navigate:o,container:r}){var f,y;if(t.cost>0&&e.profile.credits<t.cost){i("Crédits insuffisants","error");return}if(t.isPub){if(!await Wi("pub_mode")){Oo();return}await Wn()}const{data:n}=await v.from("cards").select("card_type, player_id, formation").eq("owner_id",e.profile.id),a=new Set((n||[]).filter(g=>g.card_type==="player").map(g=>g.player_id)),d=new Set((n||[]).filter(g=>g.card_type==="formation").map(g=>g.formation));let l=[],s=null;try{if((f=t.rates)!=null&&f.length)l=await wi(e.profile,t);else{const g=t.type||"player";g==="player"?l=await oo(e.profile,t.cardCount,t.cost):g==="game_changer"?l=await no(e.profile,t.cardCount,t.cost):g==="formation"?l=await ro(e.profile,t.cost):l=await wi(e.profile,t)}}catch(g){s=g.message||String(g),console.error("[Booster] Erreur:",g)}if(l!=null&&l.length&&t._boosterId&&await Bn(e.user.id,t._boosterId),!(l!=null&&l.length)){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",g.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${s||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(g),(y=g.querySelector("#anim-close-err"))==null||y.addEventListener("click",()=>g.remove());return}l.forEach(g=>{g.card_type==="player"&&g.player?g.isDuplicate=a.has(g.player.id):g.card_type==="formation"&&(g.isDuplicate=d.has(g.formation))});const{data:c}=await v.from("users").select("*").eq("id",e.profile.id).single();c&&(e.profile=c),Zo(e.profile.id,t,l),ao(l,t,o)}function Gn(){const t=Math.random()*100;return t<.5?"legende":t<2?"special":t<10?"normal_high":"normal_low"}function gt(t){return Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Hn(t,e){let i;switch(e){case"legende":i=t.filter(o=>o.rarity==="legende"),i.length||(i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=t.filter(o=>gt(o)>=6));break;case"special":i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=t.filter(o=>gt(o)>=6));break;case"normal_high":i=t.filter(o=>o.rarity==="normal"&&gt(o)>=6),i.length||(i=t.filter(o=>gt(o)>=6));break;default:i=t.filter(o=>o.rarity==="normal"&&gt(o)>=1&&gt(o)<=5),i.length||(i=t.filter(o=>o.rarity==="normal"));break}return i.length||(i=t),i[Math.floor(Math.random()*i.length)]}async function wi(t,e){if(e.cost>0){const{error:y}=await v.from("users").update({credits:t.credits-e.cost}).eq("id",t.id);if(y)throw y;t.credits-=e.cost,Kt(t.credits)}const i=e.allow_duplicates!==!1;let o=[];const{data:r,error:n}=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.id);if(n){const{data:y}=await v.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",t.id);o=y||[]}else o=r||[];const a=new Set(o.filter(y=>y.card_type==="player").map(y=>y.player_id)),d=new Set(o.filter(y=>y.card_type==="formation").map(y=>y.formation)),l=new Set(o.filter(y=>y.card_type==="game_changer").map(y=>y.gc_type)),s=new Set(o.filter(y=>y.card_type==="stadium").map(y=>y.stadium_id).filter(Boolean)),c=new Set,f=[];for(let y=0;y<(e.cardCount||5);y++){const g=Dn(e.rates);if(g){if(g.card_type==="player"){const x=S=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[S]||S,m=g.rarity?x(g.rarity):null;let b=v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);m&&(b=b.eq("rarity",m));const{data:u}=await b;let w=u||[];if((g.note_min||g.note_max)&&(w=w.filter(S=>{const M=Math.max(Number(S.note_g)||0,Number(S.note_d)||0,Number(S.note_m)||0,Number(S.note_a)||0);return(!g.note_min||M>=g.note_min)&&(!g.note_max||M<=g.note_max)})),w.length||(g.note_min||g.note_max?(w=u||[],console.warn("[Booster] Aucun joueur avec note",g.note_min,"-",g.note_max,"— fallback rareté uniquement")):w=u||[]),!w.length)continue;let h=w.filter(S=>!c.has(S.id));if(i)h.length||(h=w);else if(h=h.filter(S=>!a.has(S.id)),!h.length)continue;const $=h[Math.floor(Math.random()*h.length)];c.add($.id);const p=a.has($.id),{data:z}=await v.from("cards").insert({owner_id:t.id,player_id:$.id,card_type:"player"}).select().single();z&&(f.push({...z,player:$,isDuplicate:p}),v.rpc("record_transfer",{p_card_id:z.id,p_player_id:$.id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(g.card_type==="game_changer"){const{data:x}=await v.from("gc_definitions").select("id,name,color,effect,image_url,gc_type").eq("is_active",!0).eq("gc_type","game_changer"),m=x!=null&&x.length?x:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],b=i?m:m.filter($=>!l.has($.name));if(!i&&!b.length)continue;const u=b[Math.floor(Math.random()*b.length)],w=u.name,{data:h}=await v.from("cards").insert({owner_id:t.id,card_type:"game_changer",gc_type:w,gc_definition_id:u.id||null}).select().single();h&&f.push({...h,_gcDef:u})}else if(g.card_type==="formation"){const x=Qo(),m=i?x:x.filter(h=>!d.has(h));if(!i&&!m.length)continue;const b=m[Math.floor(Math.random()*m.length)],u=d.has(b),{data:w}=await v.from("cards").insert({owner_id:t.id,card_type:"formation",formation:b}).select();w!=null&&w[0]&&f.push({...w[0],isDuplicate:u})}else if(g.card_type==="stadium"){const{data:x,error:m}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(m){console.error("[Booster] stadium_definitions:",m.message);continue}if(!(x!=null&&x.length)){console.warn("[Booster] Aucun stade en DB");continue}const b=i?x:x.filter($=>!s.has($.id));if(!i&&!b.length)continue;const u=b[Math.floor(Math.random()*b.length)],{data:w,error:h}=await v.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:u.id}).select("id,card_type,stadium_id").single();if(h){console.error("[Booster] insert stadium card:",h.message);continue}w&&f.push({...w,rarity:"normal",_stadiumDef:u})}}}return f}async function oo(t,e,i){if(i>0){const{error:s}=await v.from("users").update({credits:t.credits-i}).eq("id",t.id);if(s)throw s;t.credits-=i,Kt(t.credits)}const{data:o}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const r=o.filter(s=>s.job==="GK"),n=o.filter(s=>s.job!=="GK"),a=!t.first_booster_opened&&r.length>0,d=[];for(let s=0;s<e;s++){const c=s===0&&a?r:s===0?n:o,f=Gn(),y=Hn(c,f);y&&d.push(y)}a&&await v.from("users").update({first_booster_opened:!0}).eq("id",t.id);const{data:l}=await v.from("cards").insert(d.map(s=>({owner_id:t.id,player_id:s.id,card_type:"player"}))).select();return(l||[]).forEach((s,c)=>{v.rpc("record_transfer",{p_card_id:s.id,p_player_id:d[c].id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((s,c)=>({...l[c],player:s}))}async function no(t,e,i){const{error:o}=await v.from("users").update({credits:t.credits-i}).eq("id",t.id);if(o)throw o;t.credits-=i,Kt(t.credits);const{data:r}=await v.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),n=r!=null&&r.length?r:Object.keys(Ni).map(f=>({name:f,gc_type:"game_changer"})),a=Array.from({length:e},()=>n[Math.floor(Math.random()*n.length)]),d=a.map(f=>({owner_id:t.id,card_type:"game_changer",gc_type:f.name,gc_definition_id:f.id||null})),{data:l,error:s}=await v.from("cards").insert(d).select();return s&&console.error("[Booster GC] Erreur insert:",s.message,s),(l||[]).map((f,y)=>({...f,_gcDef:a[y]||null}))}async function ro(t,e){const{error:i}=await v.from("users").update({credits:t.credits-e}).eq("id",t.id);if(i)throw i;t.credits-=e,Kt(t.credits);const{data:o}=await v.from("cards").select("formation").eq("owner_id",t.id).eq("card_type","formation"),r=new Set((o||[]).map(c=>c.formation)),n=Qo(),a=n[Math.floor(Math.random()*n.length)],d=r.has(a),{data:l,error:s}=await v.from("cards").insert({owner_id:t.id,card_type:"formation",formation:a}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),(l||[]).map(c=>({...c,isDuplicate:d}))}async function Un(t,e){const{data:i}=await v.from("cards").select("stadium_id").eq("owner_id",t.id).eq("card_type","stadium"),o=new Set((i||[]).map(s=>s.stadium_id).filter(Boolean)),{data:r}=await v.from("stadium_definitions").select("*");if(!(r!=null&&r.length))throw new Error("Aucun stade configuré en base.");const n=r[Math.floor(Math.random()*r.length)],a=o.has(n.id),{data:d,error:l}=await v.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:n.id}).select();return l&&console.error("[Booster Stade] Erreur insert:",l.message,l),(d||[]).map(s=>({...s,isDuplicate:a,_stadiumDef:n}))}async function Zo(t,e,i){try{const o=(i||[]).map(r=>{var n,a,d,l,s;return{card_type:r.card_type,name:r.card_type==="player"?[(n=r.player)==null?void 0:n.firstname,(a=r.player)==null?void 0:a.surname_real].filter(Boolean).join(" "):((d=r._stadiumDef)==null?void 0:d.name)||((l=r._gcDef)==null?void 0:l.name)||r.formation||r.gc_type||null,rarity:((s=r.player)==null?void 0:s.rarity)||null,note:r.current_note??null,is_duplicate:!!r.isDuplicate}});await v.from("booster_openings").insert({user_id:t,booster_name:(e==null?void 0:e.name)||null,booster_type:(e==null?void 0:e.type)||null,cards:o,nb_cards:o.length})}catch(o){console.warn("[Booster] journalisation ignorée:",o==null?void 0:o.message)}}function ao(t,e,i,o=null){var oe,L;if(!t||t.length===0){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",_.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(_),(oe=_.querySelector("#anim-close-err"))==null||oe.addEventListener("click",()=>_.remove());return}t=[...t].sort((_,G)=>{const N=_.player?gt(_.player):-1;return(G.player?gt(G.player):-1)-N});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let n=!1;const a=document.getElementById("pack-cut-zone"),d=document.getElementById("pack-blade");let l=!1;const s=_=>_.touches&&_.touches[0]?_.touches[0].clientX:_.clientX;function c(_){n||(l=!0,d.style.opacity="1",f(_))}function f(_){if(!l||n)return;const G=a.getBoundingClientRect(),N=s(_)-G.left,ce=Math.max(0,Math.min(1,N/G.width));d.style.width=ce*G.width+"px",ce>=.82&&g()}function y(){n||(l=!1,d.style.transition="width .2s ease, opacity .2s ease",d.style.width="0",d.style.opacity="0",setTimeout(()=>{n||(d.style.transition="")},220))}function g(){var G;if(n)return;n=!0,l=!1,d.style.width="100%",d.style.opacity="1",(G=document.getElementById("cut-flash"))==null||G.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const _=document.getElementById("cut-hint");_&&(_.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{d.style.opacity="0",document.getElementById("pack-phase").style.display="none",u(0)},620)}a.addEventListener("pointerdown",c),window.addEventListener("pointermove",f),window.addEventListener("pointerup",y),a.addEventListener("touchstart",c,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",y);let x=0,m=!1;const b=new Set;function u(_){x=_,document.getElementById("reveal-phase").style.display="flex",w(),h(_,0),M()}function w(){const _=document.getElementById("card-dots");_&&(_.innerHTML=t.map((G,N)=>`<div class="card-dot" data-i="${N}" style="width:8px;height:8px;border-radius:50%;background:${N===x?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),_.querySelectorAll(".card-dot").forEach(G=>G.addEventListener("click",()=>p(parseInt(G.dataset.i)))))}function h(_,G){var be,de;const N=t[_],ce=document.getElementById("card-counter"),ue=document.getElementById("card-track");ce&&(ce.textContent=`Carte ${_+1} / ${t.length}`);const T=document.getElementById("reveal-btns");T&&(T.style.display=_===t.length-1?"flex":"none");const O=N.card_type==="player"&&((be=N.player)==null?void 0:be.rarity)==="legende",fe=!b.has(_);if(b.add(_),N.card_type==="player"&&N.player){const j=N.player,K=j.job||"ATT";(Number(K==="GK"?j.note_g:K==="DEF"?j.note_d:K==="MIL"?j.note_m:j.note_a)||0)+(N.evolution_bonus||0)}const ge=j=>{ue.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${O?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Kn(N)}</div>
          ${N.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const K=document.getElementById("current-card-wrap");G!==0?(K.style.transition="none",K.style.transform=`translateX(${G>0?100:-100}%)`,requestAnimationFrame(()=>{K.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",K.style.transform="translateX(0)"})):K.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),j||O?V():J(),w()};fe&&((de=N.player)==null?void 0:de.rarity)==="legende"&&N.card_type==="player"&&N.player?$(N,()=>ge(!0)):ge(!1)}function $(_,G){var ae;m=!0;const N=_.player,ce=`https://flagsapi.com/${N.country_code}/flat/64.png`,ue=(ae=N.clubs)==null?void 0:ae.logo_url,T=Ct(N),O=N.job||"ATT",fe=Number(O==="GK"?N.note_g:O==="DEF"?N.note_d:O==="MIL"?N.note_m:N.note_a)||0,ge=_.evolution_bonus||0,be=fe+ge,de=N.rarity==="legende",j=be>=18,K=document.getElementById("walkout-overlay"),re=document.getElementById("walkout-stage");if(!K||!re){m=!1,G();return}let ee=null;de&&(ee=to("/sounds/Legendary.mp3",.8)),K.style.display="flex";const Y=()=>{const le=re.firstElementChild;le&&(le.classList.remove("wo-in"),le.classList.add("wo-out"))},P=1800,W=400;re.innerHTML=`<img class="wo-in" src="${ce}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(Y,P),setTimeout(()=>{var le;re.innerHTML=ue?`<img class="wo-in" src="${ue}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((le=N.clubs)==null?void 0:le.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},P+W),setTimeout(Y,P*2+W),setTimeout(()=>{re.innerHTML=T?`<img class="wo-in" src="${T}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(P+W)*2),setTimeout(Y,(P+W)*2+P);const H=j?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[O]||"#fff";setTimeout(()=>{re.innerHTML=`<div class="wo-in" style="
        font-size:${j?"120px":"90px"};font-weight:900;color:${H};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${H}, 0 0 60px ${H};
        ${j?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${be}
      </div>`,j&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(P+W)*3),setTimeout(Y,(P+W)*3+P),setTimeout(()=>{K.style.display="none",re.innerHTML="",m=!1,ee&&!de&&ee.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),G()},(P+W)*4)}function p(_){if(m||_<0||_>=t.length||_===x)return;const G=_>x?1:-1;x=_,h(_,G)}function z(){p(x+1)}function S(){p(x-1)}function M(){const _=document.getElementById("card-viewport");if(!_||_._swipeBound)return;_._swipeBound=!0;let G=0,N=0,ce=0,ue=!1;const T=de=>de.touches?de.touches[0].clientX:de.clientX,O=de=>de.touches?de.touches[0].clientY:de.clientY,fe=de=>{ue=!0,G=T(de),N=O(de),ce=0},ge=de=>{if(!ue)return;ce=T(de)-G;const j=O(de)-N;if(Math.abs(ce)<Math.abs(j))return;const K=document.getElementById("current-card-wrap");K&&(K.style.transition="none",K.style.transform=`translateX(${ce*.6}px) rotate(${ce*.02}deg)`)},be=()=>{if(!ue)return;ue=!1;const de=document.getElementById("current-card-wrap"),j=55;ce<=-j&&x<t.length-1?z():ce>=j&&x>0?S():de&&(de.style.transition="transform .2s ease",de.style.transform="translateX(0)")};_.addEventListener("pointerdown",fe),_.addEventListener("pointermove",ge),_.addEventListener("pointerup",be),_.addEventListener("pointercancel",be),_.addEventListener("touchstart",fe,{passive:!0}),_.addEventListener("touchmove",ge,{passive:!0}),_.addEventListener("touchend",be),_.addEventListener("click",de=>{if(Math.abs(ce)>8)return;const j=_.getBoundingClientRect();de.clientX-j.left>j.width/2?z():S()})}let R=null;function V(){const _=document.getElementById("fireworks-canvas");if(!_)return;_.width=window.innerWidth,_.height=window.innerHeight;const G=_.getContext("2d"),N=[];function ce(){const T=Math.random()*_.width,O=Math.random()*_.height*.6,fe=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],ge=fe[Math.floor(Math.random()*fe.length)];for(let be=0;be<60;be++){const de=Math.PI*2/60*be,j=2+Math.random()*5;N.push({x:T,y:O,vx:Math.cos(de)*j,vy:Math.sin(de)*j,alpha:1,color:ge,size:2+Math.random()*3})}}ce(),R=setInterval(ce,600);function ue(){if(document.getElementById("fireworks-canvas")){G.clearRect(0,0,_.width,_.height);for(let T=N.length-1;T>=0;T--){const O=N[T];if(O.x+=O.vx,O.y+=O.vy+.08,O.vy*=.98,O.alpha-=.018,O.alpha<=0){N.splice(T,1);continue}G.globalAlpha=O.alpha,G.fillStyle=O.color,G.beginPath(),G.arc(O.x,O.y,O.size,0,Math.PI*2),G.fill()}G.globalAlpha=1,(R!==null||N.length>0)&&requestAnimationFrame(ue)}}ue()}function J(){R!==null&&(clearInterval(R),R=null);const _=document.getElementById("fireworks-canvas");_&&_.getContext("2d").clearRect(0,0,_.width,_.height)}if(o){const _=document.getElementById("reveal-btns");_&&(_.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(L=document.getElementById("reveal-next"))==null||L.addEventListener("click",()=>{J(),r.remove(),o()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{J(),r.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{J(),r.remove(),i("boosters")})}function Kn(t){var e,i,o,r;if(t.card_type==="player"&&t.player)return Fn(t);if(t.card_type==="game_changer"){const n=t._gcDef,a=(n==null?void 0:n.name)||t.gc_type||"Game Changer",d=(n==null?void 0:n.effect)||((e=Ni[t.gc_type])==null?void 0:e.desc)||"",l=n!=null&&n.image_url?`/icons/${n.image_url}`:null,s=((i=Ni[t.gc_type])==null?void 0:i.icon)||"⚡";return dt(a,l,s,d,{width:170})}if(t.card_type==="formation")return ni(t.formation,_t[t.formation],{width:160});if(t.card_type==="stadium"){const n=t._stadiumDef,a=(n==null?void 0:n.name)||"Stade",d=((o=n==null?void 0:n.club)==null?void 0:o.encoded_name)||(n==null?void 0:n.country_code)||"—",l=n!=null&&n.image_url?`/icons/${n.image_url}`:((r=n==null?void 0:n.club)==null?void 0:r.logo_url)||(n!=null&&n.country_code?`https://flagsapi.com/${n.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),s=`${d}<br>+10 ⭐ joueurs alliés`;return Ot(a,l,s,{width:170})}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Vn(t){var e,i;if((e=t==null?void 0:t.rates)!=null&&e.length){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const r={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},n={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};o.innerHTML=`
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
      </div>`,document.body.appendChild(o),o.addEventListener("click",a=>{a.target===o&&o.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>o.remove());return}Yn()}function Yn(){const t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(t),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.getElementById("odds-close").addEventListener("click",()=>t.remove())}function Wn(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText=`
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
    `,document.body.appendChild(e);try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(r){console.warn("[AdSense]",r)}let i=5;const o=setInterval(()=>{i--;const r=document.getElementById("mw-ad-cd");r&&(r.textContent=i),i<=0&&(clearInterval(o),e.remove(),t(!0))},1e3)})}async function Jn(t,{state:e,navigate:i,toast:o,refreshProfile:r}){var y,g;const{data:n}=await v.from("users").select("*").eq("id",e.user.id).single();n&&(e.profile=n);let a=Array.isArray((y=e.profile)==null?void 0:y.pending_boosters)?[...e.profile.pending_boosters]:[];if(!a.length){await v.from("users").update({onboarding_done:!0}).eq("id",e.user.id),i("home");return}let d=null;try{const m=(await Xo()).find(b=>(b.name||"").toLowerCase().includes("new player"));m&&(d=io(m))}catch(x){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',x)}const l=a.length;let s=0;t.innerHTML=`
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
  </div>`;const c=async()=>{await v.from("users").update({pending_boosters:a}).eq("id",e.user.id)};async function f(){var w;if(s>=l||!a.length){await v.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",e.user.id),r&&await r(),o("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const x=a[0],{data:m}=await v.from("users").select("*").eq("id",e.user.id).single();m&&(e.profile=m);let b=[];try{if(x.type==="formation")b=await ro(e.profile,0);else if(x.type==="game_changer")b=await no(e.profile,x.count||3,0);else if(x.type==="stadium")b=await Un(e.profile,0);else if(d&&((w=d.rates)!=null&&w.length)){const h={...d,cost:0,cardCount:x.count||d.cardCount||5};b=await wi(e.profile,h),x.guaranteeGK&&!e.profile.first_booster_opened&&(b.some(p=>p.player&&p.player.job==="GK")||await Xn(e.profile,b),await v.from("users").update({first_booster_opened:!0}).eq("id",e.profile.id))}else b=await oo(e.profile,x.count||5,0)}catch(h){o(h.message||"Erreur ouverture booster","error");return}a.shift(),s++,await c();const u=x.type==="formation"?{name:"Booster Formation",type:"formation",img:"/icons/booster-formation.png"}:x.type==="game_changer"?{name:"Booster Game Changer",type:"game_changer",img:"/icons/booster-gamechanger.png"}:x.type==="stadium"?{name:"Booster Stade",type:"stadium",img:"/icons/booster-stade.png"}:{name:`Booster Joueurs (${s}/${l})`,type:"player",img:(d==null?void 0:d.img)||"/icons/booster-players.png"};Zo(e.profile.id,u,b),ao(b,u,i,()=>{f()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>f())}async function Xn(t,e){try{const{data:i}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const o=i[Math.floor(Math.random()*i.length)],r=e.findIndex(a=>a.player);if(r===-1)return;const n=e[r];await v.from("cards").update({player_id:o.id}).eq("id",n.id),e[r]={...n,player_id:o.id,player:o}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Qn=[{key:"home2",route:"home2",label:"ACCUEIL",icon:"nav-home.png"},{key:"cards",route:"collection",label:"CARTES",icon:"nav-collection.png"},{key:"decks",route:"decks",label:"EQUIPES",icon:"nav-decks.png"},{key:"boosters",route:"boosters",label:"BOUTIQUE",icon:"nav-boosters.png"},{key:"market",route:"market",label:"MERCATO",icon:"nav-market.png"}];function Ut(t,e,i,o,r){if(!document.getElementById("home2-chrome-style")){const f=document.createElement("style");f.id="home2-chrome-style",f.textContent=`
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
    `,document.head.appendChild(f)}const n=Qn.map(f=>`
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
    `,document.body.appendChild(a),a.querySelector("#home2-chrome-settings-btn").addEventListener("click",()=>t("settings")),a.querySelector("#home2-chrome-credits").addEventListener("click",()=>$o(e,r)));let d=document.getElementById("home2-mobile-top");d||(d=document.createElement("div"),d.id="home2-mobile-top",d.className="home2-mobile-top",d.innerHTML=`
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-mobtop-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-mobtop-settings-btn"><span>⚙️</span><span class="pill-label">Paramètres</span></button>
      </div>
    `,document.body.appendChild(d),d.querySelector("#home2-mobtop-settings-btn").addEventListener("click",()=>t("settings")),d.querySelector("#home2-mobtop-credits").addEventListener("click",()=>$o(e,r)));let l=document.getElementById("home2-mobile-bottom");l||(l=document.createElement("div"),l.id="home2-mobile-bottom",l.className="home2-mobile-bottom",l.innerHTML=n,document.body.appendChild(l)),document.querySelectorAll(".home2-chrome-tab").forEach(f=>{f._v2Bound||(f._v2Bound=!0,f.addEventListener("click",()=>{document.querySelectorAll(".home2-chrome-tab").forEach(y=>y.classList.remove("active")),document.querySelectorAll(`.home2-chrome-tab[data-key="${f.dataset.key}"]`).forEach(y=>y.classList.add("active")),t(f.dataset.route)}))}),document.querySelectorAll(".home2-chrome-tab").forEach(f=>f.classList.toggle("active",f.dataset.key===i));const s=`💰 ${(e.credits||0).toLocaleString("fr")}`;document.getElementById("home2-chrome-credits")&&(document.getElementById("home2-chrome-credits").textContent=s),document.getElementById("home2-mobtop-credits")&&(document.getElementById("home2-mobtop-credits").textContent=s),document.body.classList.remove("v2-match-flow"),a.style.display="",d.style.display="",l.style.display="";const c=document.getElementById("page-content");c&&(c.style.removeProperty("padding-top"),c.style.removeProperty("padding-bottom")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const f=window.innerWidth<1024;document.documentElement.style.setProperty("--v2-top-height",(f?d.offsetHeight:a.offsetHeight)+"px"),document.documentElement.style.setProperty("--v2-bottom-height",l.offsetHeight+"px")})})}const Zn=[{ads:1,seconds:5,credits:4500},{ads:2,seconds:10,credits:9500},{ads:3,seconds:15,credits:15e3}];async function $o(t,e){if(!await Wi("pub_mode")){Oo();return}const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",i.innerHTML=`
    <div style="background:#111a12;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:400px;width:100%;color:#fff">
      <div style="font-size:18px;font-weight:900;margin-bottom:4px">💰 Gagner des crédits</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:18px">Regarde une ou plusieurs publicités pour recevoir des crédits gratuits.</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${Zn.map(o=>`
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
    </div>`,document.body.appendChild(i),i.querySelector("#credits-ad-cancel").addEventListener("click",()=>i.remove()),i.querySelectorAll(".credits-ad-offer-btn").forEach(o=>{o.addEventListener("click",()=>{i.remove(),er(parseInt(o.dataset.ads),5,parseInt(o.dataset.credits),t,e)})})}function er(t,e,i,o,r){let n=1;const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.94);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;gap:14px;color:#fff;padding:16px",document.body.appendChild(a);function d(){a.innerHTML=`
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
        </button>`),(y=a.querySelector("#credits-ad-claim-btn"))==null||y.addEventListener("click",async()=>{const g=a.querySelector("#credits-ad-claim-btn");g.disabled=!0,g.textContent="⏳...";const x=(o.credits||0)+i,{error:m}=await v.from("users").update({credits:x}).eq("id",o.id);if(m){r(m.message,"error"),g.disabled=!1;return}o.credits=x,Kt(x),r(`+${i.toLocaleString("fr")} crédits ✅`,"success"),a.remove()}))}d()}async function en(t,e,i){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",document.body.appendChild(o);async function r(){var l;const{data:n}=await v.from("pending_rewards").select(`*,
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
      </div>`,(l=o.querySelector("#pending-rewards-close"))==null||l.addEventListener("click",()=>o.remove()),o.querySelectorAll(".claim-reward-btn").forEach(s=>{s.addEventListener("click",async()=>{var f,y;const c=n.find(g=>g.id===s.dataset.id);s.disabled=!0,s.textContent="⏳...";try{const g=await Rn(c,t.profile,e,null);if(await v.from("pending_rewards").update({claimed:!0,claimed_at:new Date().toISOString()}).eq("id",c.id),g.type==="credits")Kt(t.profile.credits),e(`+${g.amount.toLocaleString("fr")} crédits ✅`,"success");else if(g.type==="card")e(`Carte reçue : ${((f=g.player)==null?void 0:f.firstname)||""} ${((y=g.player)==null?void 0:y.surname_real)||""} ✅`,"success");else if(g.type==="booster"){o.remove(),ao(g.cards,g.boosterUI,i,()=>{en(t,e,i)});return}}catch(g){e(g.message||"Erreur lors de la réclamation","error"),s.disabled=!1,s.textContent="Récupérer";return}r()})})}r(),o.addEventListener("click",n=>{n.target===o&&o.remove()})}function Kt(t){const e=`💰 ${(t||0).toLocaleString("fr")}`,i=document.getElementById("home2-chrome-credits"),o=document.getElementById("home2-mobtop-credits");i&&(i.textContent=e),o&&(o.textContent=e)}function ct(){document.body.classList.add("v2-match-flow");const t=document.getElementById("home2-chrome-header");t&&(t.style.display="none");const e=document.getElementById("home2-mobile-top");e&&(e.style.display="none");const i=document.getElementById("home2-mobile-bottom");i&&(i.style.display="none");const o=document.getElementById("page-content");o&&(o.style.setProperty("padding-top","0","important"),o.style.setProperty("padding-bottom","0","important"))}function tr(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return"à l'instant";if(i<60)return`il y a ${i}min`;const o=Math.floor(i/60);if(o<24)return`il y a ${o}h`;const r=Math.floor(o/24);return r<7?`il y a ${r}j`:new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"short"})}function ir(t,e){if(!isFinite(e.max))return"";const i=e.max-e.min+1,o=Math.floor((t-e.min)/(i/3));return["III","II","I"][Math.min(2,Math.max(0,o))]}async function or(t){const{data:e}=await v.from("users").select("id,pseudo,club_name,mmr").order("mmr",{ascending:!1}).limit(5),i=e||[],o=i.some(n=>n.id===t);let r=null;if(!o){const{data:n}=await v.from("users").select("mmr").eq("id",t).single();if(n){const{count:a}=await v.from("users").select("id",{count:"exact",head:!0}).gt("mmr",n.mmr||0);r=(a||0)+1}}return{list:i,iAmInTop:o,myPosition:r}}async function nr(t=4){const{data:e}=await v.from("patch_notes").select("id,title,description,image_url,published_at").eq("is_published",!0).order("published_at",{ascending:!1}).limit(t);return e||[]}async function rr(){const{data:t}=await v.from("booster_configs").select("id,name,icon,price_type,price_credits,card_count").eq("is_active",!0).order("sort_order",{ascending:!0}).limit(5);return t||[]}async function ar(){const{data:t}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const r=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close-v2").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}async function ji(t,{state:e,navigate:i,toast:o,openModal:r,closeModal:n}){var S,M,R,V,J,oe;const a=e.profile;if(!a)return;const d="/icons/";Ut(i,a,"home2",d,o);const l=a.mmr??1e3,s=Lt(l),c=ir(l,s),f=Pi(l),y=isFinite(s.max)?s.max+1:null,[{list:g,iAmInTop:x,myPosition:m},b,u,{count:w}]=await Promise.all([or(a.id),nr(5),rr(),v.from("pending_rewards").select("*",{count:"exact",head:!0}).eq("user_id",a.id).eq("claimed",!1)]),h=(L,_)=>`
    <div class="rk-row ${L.id===a.id?"rk-row-me":""}">
      <div class="rk-pos ${_<3?"rk-pos-top"+(_+1):""}">${_<3?["🥇","🥈","🥉"][_]:_+1}</div>
      <div class="rk-name ${L.id===a.id?"rk-name-me":""}">${L.pseudo}</div>
      <div class="rk-rp">${(L.mmr??0).toLocaleString("fr")} RP</div>
    </div>`,$=L=>`
    <div class="news-item">
      ${L.image_url?`<img src="${L.image_url}" class="news-thumb" onerror="this.style.display='none'">`:'<div class="news-thumb news-thumb-fallback">📰</div>'}
      <div class="news-body">
        <div class="news-title">${L.title}</div>
        <div class="news-desc">${L.description||""}</div>
        <div class="news-time">${tr(L.published_at)}</div>
      </div>
    </div>`;let p=0;const z=L=>`
    <div class="promo-icon-wrap">
      <img src="${d}${L.icon||"nav-boosters.png"}" class="promo-icon" onerror="this.style.display='none'">
    </div>
    <div class="promo-info">
      <div class="promo-kicker">NOUVEAU BOOSTER</div>
      <div class="promo-title">${L.name}</div>
      <div class="promo-desc">${L.card_count||5} cartes · ${L.price_type==="pub"?"Pub gratuite":(L.price_credits||0).toLocaleString("fr")+" cr."}</div>
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
            ${g.map((L,_)=>h(L,_)).join("")}
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
              ${z(u[0])}
            </div>
            <button class="promo-cta" id="promo-cta-btn">✅ Ouvrir des boosters</button>
            ${u.length>1?`<div class="promo-dots">${u.map((L,_)=>`<div class="promo-dot ${_===0?"active":""}" data-dot="${_}"></div>`).join("")}</div>`:""}
          </div>`:""}
        </div>

        <!-- Colonne droite : Actualités -->
        <div class="home2-col-right">
          <div class="news-widget">
            <div class="news-widget-header"><h4>ACTUALITÉS</h4><a id="nav-journal-link">Voir tout</a></div>
            ${b.length?b.map($).join(""):'<div style="font-size:11px;color:var(--tile-fg-dim);padding:8px 0">Aucune actualité pour le moment.</div>'}
          </div>
        </div>

      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var ue,T;const L=((ue=window.visualViewport)==null?void 0:ue.height)||window.innerHeight,_=window.innerWidth<1024;let G=0;if(_){const O=document.getElementById("home2-mobile-top"),fe=document.getElementById("home2-mobile-bottom");G=((O==null?void 0:O.offsetHeight)||0)+((fe==null?void 0:fe.offsetHeight)||0)}else G=((T=document.getElementById("home2-chrome-header"))==null?void 0:T.offsetHeight)||0;const N=L-G,ce=t.querySelector(".home-dark");ce&&(ce.style.minHeight=N+"px")}),(S=document.getElementById("nav-rankings-link"))==null||S.addEventListener("click",()=>i("rankings")),(M=document.getElementById("nav-rankings-cta"))==null||M.addEventListener("click",()=>i("rankings")),(R=document.getElementById("rank-inline-link-btn"))==null||R.addEventListener("click",()=>i("rankings")),(V=document.getElementById("nav-journal-link"))==null||V.addEventListener("click",()=>ar()),t.querySelectorAll("[data-action]").forEach(L=>{L.addEventListener("click",()=>{L.style.transform="scale(.96)",setTimeout(()=>L.style.transform="",180);const _=L.dataset.action;if(_==="match-ai"){nn(i,e);return}if(_==="match-random"){ct(),i("match",{matchMode:"random"});return}if(_==="match-friend"){i("friends");return}if(_==="mini-league"){i("mini-league");return}if(_==="ranked"){i("ranked");return}o("Bientôt disponible","info")})}),u.length>1){const L=document.getElementById("promo-slide-content"),_=()=>Array.from(document.querySelectorAll(".promo-dot")),G=N=>{p=N,L&&(L.innerHTML=z(u[p])),_().forEach((ce,ue)=>ce.classList.toggle("active",ue===p))};setInterval(()=>G((p+1)%u.length),5e3),document.querySelectorAll(".promo-dot").forEach(N=>{N.addEventListener("click",()=>G(Number(N.dataset.dot)))})}(J=document.getElementById("promo-cta-btn"))==null||J.addEventListener("click",()=>i("boosters")),on(e,o),(oe=document.getElementById("pending-rewards-banner"))==null||oe.addEventListener("click",()=>{en(e,o,i)}),cr(e,o,i),tn(e,o,i),sr(e,o)}async function sr(t,e){const i=t.profile.id,{data:o}=await v.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(o!=null&&o.length))return;const r=o.reduce((a,d)=>a+(d.prize_amount||0),0),n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2200",n.innerHTML=`<div class="modal" style="max-width:400px">
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
  </div>`,document.body.appendChild(n),n.querySelector("#claim-later-btn").addEventListener("click",()=>n.remove()),n.querySelector("#claim-all-btn").addEventListener("click",async a=>{const d=a.currentTarget;d.disabled=!0,d.textContent="...";let l=0;for(const s of o){const{data:c}=await v.rpc("claim_mini_league_prize",{p_league_id:s.league_id,p_user_id:i});c!=null&&c.success&&!c.already_claimed&&(l+=c.prize||0)}if(l>0){t.profile.credits=(t.profile.credits||0)+l;const s=document.getElementById("nav-credits");s&&(s.textContent=`💰 ${t.profile.credits.toLocaleString("fr")}`),e(`💰 +${l.toLocaleString("fr")} cr. récupérés !`,"success")}n.remove()})}async function tn(t,e,i){const o=document.getElementById("ongoing-match-banner");if(!o)return;const r=t.profile.id,{data:n}=await v.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${r},away_id.eq.${r}`).order("created_at",{ascending:!1});if(!(n!=null&&n.length)){o.innerHTML="";return}const a=n.map(l=>l.home_id===r?l.away_id:l.home_id).filter(Boolean);let d={};if(a.length){const{data:l}=await v.from("users").select("id, pseudo, club_name").in("id",a);(l||[]).forEach(s=>{d[s.id]=s.club_name||s.pseudo})}o.innerHTML=n.map(l=>{const s=l.home_id===r?l.away_id:l.home_id,c=d[s]||"Adversaire",f=l.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${f?"🏆 Mini League":l.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${c}</div>
      </div>
      <button data-resume="${l.id}" data-mini="${f?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${l.id}" data-opp="${s}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),o.querySelectorAll("[data-resume]").forEach(l=>{l.addEventListener("click",async()=>{ct();const s=document.getElementById("page-content")||document.getElementById("app");if(l.dataset.mini==="1"){const{data:c}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",l.dataset.resume).single();c?i("match-mini-league",{mlMatchId:c.id,leagueId:c.league_id}):i("mini-league")}else{const{resumePvpMatch:c}=await Vo(async()=>{const{resumePvpMatch:f}=await Promise.resolve().then(()=>aa);return{resumePvpMatch:f}},void 0);c(s,{state:t,navigate:i,toast:e,openModal:null,closeModal:null,refreshProfile:null},l.dataset.resume)}})}),o.querySelectorAll("[data-abandon]").forEach(l=>{l.addEventListener("click",()=>{lr(async()=>{await dr(l.dataset.abandon,l.dataset.opp,r),e("Match abandonné (défaite 3-0)","info"),tn(t,e,i)})})})}async function dr(t,e,i){Rt();const{data:o}=await v.from("matches").select("home_id, away_id, game_state, mode").eq("id",t).single();if(!o)return;const r=o.home_id===i,n=r?0:3,a=r?3:0,d=o.game_state||{};d.p1Score=n,d.p2Score=a,d.phase="finished",d.forfeit=!0,await v.from("matches").update({status:"finished",forfeit:!0,winner_id:e,home_score:n,away_score:a,game_state:d}).eq("id",t),o.mode==="mini_league"&&await v.from("mini_league_matches").update({status:"finished",home_score:n,away_score:a}).eq("match_id",t)}function lr(t){const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(e),e.querySelector("#ab-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#ab-ok").addEventListener("click",()=>{e.remove(),t()}),e.addEventListener("click",i=>{i.target===e&&e.remove()})}async function cr(t,e,i){var d,l,s,c;const o=document.getElementById("match-invite-banner");if(!o)return;const{data:r}=await v.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",t.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!r){o.innerHTML="";return}const n=((d=r.inviter)==null?void 0:d.club_name)||((l=r.inviter)==null?void 0:l.pseudo)||"?",a=r.inviter_id;o.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${n} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(s=document.getElementById("match-inv-accept"))==null||s.addEventListener("click",()=>{o.innerHTML="",ct(),i("match",{matchMode:"friend",friendId:a,friendName:n,isAccepting:!0})}),(c=document.getElementById("match-inv-decline"))==null||c.addEventListener("click",async()=>{await v.from("friend_match_invites").update({status:"declined"}).eq("id",r.id),o.innerHTML="",e("Invitation refusée","info")})}async function on(t,e){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:o,error:r}=await v.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",t.user.id).eq("status","pending");if(r||!(o!=null&&o.length)){i.innerHTML="";return}const n=o.length,a=o.slice(0,2).map(l=>{var s;return((s=l.requester)==null?void 0:s.pseudo)||"?"}).join(", "),d=n>2?` +${n-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${n} demande${n>1?"s":""} d'ami${n>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${d}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>an(t,e,()=>on(t,e)))}async function nn(t,e){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:420px;border-radius:18px">
    <div class="modal-header"><h2>Solo — Choisir un niveau</h2><button class="btn-icon" id="solo-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div id="solo-levels-list" style="display:flex;flex-direction:column;gap:10px">
        <div style="text-align:center;color:#999;padding:20px">⏳ Chargement…</div>
      </div>
    </div>
  </div>`,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("solo-cancel").addEventListener("click",o),i.addEventListener("click",s=>{s.target===i&&o()});const[{data:r},{data:n}]=await Promise.all([v.from("solo_levels").select("*").eq("is_active",!0).order("level_number"),v.from("user_solo_progress").select("unlocked_level").eq("user_id",e.profile.id).maybeSingle()]),a=(n==null?void 0:n.unlocked_level)||1,d=r||[],l=document.getElementById("solo-levels-list");if(l){if(!d.length){l.innerHTML='<div style="text-align:center;color:#999;padding:20px">Aucun niveau configuré.</div>';return}l.innerHTML=d.map(s=>{const c=s.level_number>a,f=s.level_number===a,y=c?"#f0f0f0":f?"#eefaf2":"#f7f7f7",g=c?"#ddd":f?"#bfe8cf":"#e0e0e0",x=c?"#999":"#12401f";return`
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
      </div>`}).join(""),l.querySelectorAll(".solo-level-card").forEach(s=>{s.dataset.locked!=="true"&&(s.addEventListener("mouseenter",()=>{s.style.transform="translateY(-1px)"}),s.addEventListener("mouseleave",()=>{s.style.transform=""}),s.addEventListener("click",()=>{o(),ct(),t("match",{matchMode:"solo",soloLevel:Number(s.dataset.level)})}))})}}const di="#1A6B3C",li="#cc2222",pr="#D4A017",Eo="#888";async function ur(t,e){const{state:i,toast:o}=e;t.innerHTML=`
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
    </div>`,await rn(i,o,e),document.getElementById("btn-add-friend").addEventListener("click",()=>mr(i,o)),document.getElementById("btn-accept-friend").addEventListener("click",()=>an(i,o,null,e))}async function rn(t,e,i={}){const{navigate:o}=i,r=t.user.id,{data:n,error:a}=await v.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${r},addressee_id.eq.${r}`),{count:d}=await v.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",r).eq("status","pending"),l=document.getElementById("pending-badge");l&&(d>0?(l.style.display="flex",l.textContent=d):l.style.display="none");const s=document.getElementById("friends-list");if(!s)return;if(a){console.error("[Friends] Erreur:",a),s.innerHTML=`<div style="color:${li};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const c=(n||[]).map(g=>g.requester_id===r?g.addressee_id:g.requester_id);let f={};if(c.length){const{data:g}=await v.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",c);(g||[]).forEach(x=>{f[x.id]=x})}const y=(n||[]).map(g=>({friendshipId:g.id,friend:f[g.requester_id===r?g.addressee_id:g.requester_id]||{pseudo:"?"}}));if(!y.length){s.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}s.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${y.length} ami${y.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${y.map(({friendshipId:g,friend:x})=>fr(x,g)).join("")}
    </div>`,s.querySelectorAll("[data-stats]").forEach(g=>{g.addEventListener("click",()=>gr(t,g.dataset.stats,g.dataset.friendName))}),s.querySelectorAll("[data-match]").forEach(g=>{g.addEventListener("click",async()=>{const x=g.dataset.friendId,m=g.dataset.friendName;if(typeof o!="function"){e("Erreur navigation","error");return}const b=t.user.id,{data:u}=await v.from("friend_match_invites").select("id").eq("inviter_id",x).eq("invitee_id",b).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),w=!!u;console.log("[Friends] clic match",{fid:x,fname:m,isAccepting:w}),ct(),o("match",{matchMode:"friend",friendId:x,friendName:m,isAccepting:w})})})}function fr(t,e){const i=t.club_name||t.pseudo||"?",o=t.pseudo||"",r=(o||i).slice(0,2).toUpperCase(),n=t.club_color2||di,a=t.club_color1||"#ffffff",d=t.last_seen_at?new Date(t.last_seen_at):null,l=d&&Date.now()-d.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${pr};background:var(--tile-bg);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function mr(t,e){const i=so();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${li};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${lo()}`,document.body.appendChild(i);const o=i.querySelector("#friend-pseudo-input"),r=i.querySelector("#add-friend-error"),n=()=>i.remove();o.focus(),i.querySelector("#add-cancel").addEventListener("click",n),i.addEventListener("click",a=>{a.target===i&&n()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=o.value.trim();if(!a){r.textContent="Entre un pseudo";return}r.textContent="";const{data:d}=await v.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!d){r.textContent="Utilisateur introuvable";return}if(d.id===t.user.id){r.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:l}=await v.from("friendships").select("id, status").or(`and(requester_id.eq.${t.user.id},addressee_id.eq.${d.id}),and(requester_id.eq.${d.id},addressee_id.eq.${t.user.id})`).single();if(l){const c=l.status==="accepted"?"Vous êtes déjà amis !":l.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";r.textContent=c;return}const{error:s}=await v.from("friendships").insert({requester_id:t.user.id,addressee_id:d.id,status:"pending"});if(s){r.textContent="Erreur : "+s.message;return}n(),e(`✅ Demande envoyée à ${d.pseudo} !`,"success")})}async function an(t,e,i=null,o={}){const r=t.user.id,{data:n}=await v.from("friendships").select("id, requester_id").eq("addressee_id",r).eq("status","pending").order("created_at",{ascending:!1}),a=(n||[]).map(y=>y.requester_id);let d={};if(a.length){const{data:y}=await v.from("users").select("id, pseudo, club_name").in("id",a);(y||[]).forEach(g=>{d[g.id]=g})}const l=(n||[]).map(y=>({...y,requester:d[y.requester_id]||{pseudo:"?"}})),s=so(),c=l||[];s.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${c.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${c.map(y=>{var g,x,m;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((g=y.requester)==null?void 0:g.club_name)||((x=y.requester)==null?void 0:x.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((m=y.requester)==null?void 0:m.pseudo)||""})</span>
                </div>
                <button data-accept="${y.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${di};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${y.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${li};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${lo()}`,document.body.appendChild(s);const f=()=>s.remove();s.querySelector("#pending-close").addEventListener("click",f),s.addEventListener("click",y=>{y.target===s&&f()}),s.querySelectorAll("[data-accept]").forEach(y=>{y.addEventListener("click",async()=>{const{error:g}=await v.from("friendships").update({status:"accepted"}).eq("id",y.dataset.accept);if(g){e("Erreur : "+g.message,"error");return}y.closest("div[style]").remove(),e("✅ Ami accepté !","success"),rn(t,e,o),i&&i()})}),s.querySelectorAll("[data-decline]").forEach(y=>{y.addEventListener("click",async()=>{await v.from("friendships").delete().eq("id",y.dataset.decline),y.closest("div[style]").remove(),e("Demande refusée","info"),i&&i()})})}async function gr(t,e,i){const o=t.user.id,[r,n]=[o,e].sort(),a=o===r,{data:d}=await v.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",n).single(),l=t.profile.club_name||t.profile.pseudo||"Moi",s=d||{},c=a?s.wins_p1||0:s.wins_p2||0,f=a?s.wins_p2||0:s.wins_p1||0,y=s.draws||0,g=a?s.goals_p1||0:s.goals_p2||0,x=a?s.goals_p2||0:s.goals_p1||0,m=a?s.gc_used_p1||0:s.gc_used_p2||0,b=a?s.gc_used_p2||0:s.gc_used_p1||0,u=s.matches_total||0,w=($,p,z,S=di,M=li)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${S}">${p}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${$}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${M}">${z}</div>
    </div>`,h=so();h.innerHTML=`
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
        ${w("Nuls",y,y,Eo,Eo)}
        ${w("Défaites",f,c)}
        ${w("Buts marqués",g,x)}
        ${w("Buts encaissés",x,g,li,di)}
        ${w("GC utilisés ⚡",m,b,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${u} match${u>1?"s":""} joué${u>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${lo()}`,document.body.appendChild(h),h.querySelector("#stats-close").addEventListener("click",()=>h.remove()),h.addEventListener("click",$=>{$.target===h&&h.remove()})}function so(){const t=document.createElement("div");return t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",t}function lo(){return`
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
        background:${di};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function br(t,{state:e,navigate:i,toast:o}){const r=e.profile;if(!r)return;const n="/icons/";Ut(i,r,"game",n,o),t.innerHTML=`
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
  </div>`,t.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",()=>{a.style.transform="scale(.96)",setTimeout(()=>a.style.transform="",180);const d=a.dataset.action;if(d==="match-ai"){nn(i,e);return}if(d==="match-random"){ct(),i("match",{matchMode:"random"});return}if(d==="match-friend"){i("friends");return}if(d==="mini-league"){i("mini-league");return}if(d==="ranked"){i("ranked");return}o("Bientôt disponible","info")})})}const xr="/",sn=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function dn(t,e,i){let o=0;const r=document.createElement("div");r.id="tutorial-overlay",r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const n=()=>{var c,f,y;const d=e[o],l=o===e.length-1,s=Math.round((o+1)/e.length*100);r.innerHTML=`
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
        ${d.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${xr}icons/${d.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,r.querySelectorAll("ul,ol").forEach(g=>{g.style.paddingLeft="20px",g.style.marginTop="6px",g.style.marginBottom="6px"}),r.querySelectorAll("li").forEach(g=>{g.style.marginBottom="4px"}),r.querySelectorAll("p").forEach(g=>{g.style.marginBottom="8px"}),(c=r.querySelector("#tuto-prev"))==null||c.addEventListener("click",()=>{o--,n()}),(f=r.querySelector("#tuto-next"))==null||f.addEventListener("click",()=>{l?a():(o++,n())}),(y=r.querySelector("#tuto-skip"))==null||y.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{r.remove(),t!=null&&t.id&&await v.from("users").update({tutorial_done:!0}).eq("id",t.id),i==null||i()};document.body.appendChild(r),n()}async function ln(t,e,i){let o=[];const{data:r,error:n}=await v.rpc("get_tutorial_steps");if(!n&&(r==null?void 0:r.length)>0)o=r;else{const{data:d,error:l}=await v.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(d==null?void 0:d.length)>0?o=d:i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3)}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):sn;dn(t,a,()=>e("settings"))}async function So(t,e,i){if(!t||t.tutorial_done)return;let o=[];const{data:r,error:n}=await v.rpc("get_tutorial_steps");if(!n&&(r==null?void 0:r.length)>0)o=r,console.log(`[Tutorial] RPC OK → ${o.length} étapes`);else{const{data:d,error:l}=await v.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(d==null?void 0:d.length)>0?(o=d,console.log(`[Tutorial] Direct OK → ${o.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${n==null?void 0:n.message}, Direct: ${l==null?void 0:l.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):sn;dn(t,a,()=>e("boosters"))}async function cn(t,e){var b,u,w;const{state:i,navigate:o,toast:r}=e,n=oi(),a=Zi(),d=(b=i==null?void 0:i.profile)==null?void 0:b.is_admin,l="2026.08.01-1549";t.innerHTML=`
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
  </div>`,t.querySelectorAll("[data-theme-choice]").forEach(h=>{h.addEventListener("click",()=>{Ro(h.dataset.themeChoice),cn(t,e)})});const s=t.querySelector("#team-color1"),c=t.querySelector("#team-color2"),f=t.querySelector("#team-preview"),y=()=>{f&&(f.style.background=`linear-gradient(135deg, ${s.value} 50%, ${c.value} 50%)`)};y(),s==null||s.addEventListener("input",y),c==null||c.addEventListener("input",y),(u=t.querySelector("#team-save"))==null||u.addEventListener("click",async()=>{const h=t.querySelector("#team-error"),$=t.querySelector("#team-save"),p=t.querySelector("#team-club-name").value.trim();if(p.length<2){h.textContent="Nom de club trop court.";return}$.disabled=!0,$.textContent="⏳ Enregistrement...",h.textContent="";const{error:z}=await v.from("users").update({club_name:p,club_color1:s.value,club_color2:c.value}).eq("id",i.profile.id);if($.disabled=!1,$.textContent="💾 Enregistrer",z){h.textContent=z.message;return}i.profile.club_name=p,i.profile.club_color1=s.value,i.profile.club_color2=c.value,h.style.color="#2ecc71",h.textContent="✅ Modifications enregistrées.",oi()==="club"&&Ro("club")});const g=t.querySelector("#volume-slider"),x=t.querySelector("#volume-label");let m=null;g.addEventListener("input",()=>{qn(Number(g.value)),x.textContent=`${g.value}%`,m&&(m.volume=Math.max(0,Math.min(1,Number(g.value)/100)))}),t.querySelector("#volume-test").addEventListener("click",()=>{m=to("/sounds/match-opening.mp3",1)}),(w=t.querySelector("#settings-tutorial"))==null||w.addEventListener("click",()=>{ln(i.profile,o,r)}),t.querySelector("#settings-logout").addEventListener("click",async()=>{await v.auth.signOut(),window.location.reload()})}const yr={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Xt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},pi=["GK","DEF","MIL","ATT"],vr=["Tous","GK","DEF","MIL","ATT"],hr={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Lo(t){const e=t.player;return e?(e.rarity,Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)):null}function wr(t){return t.length?t.reduce((e,i)=>Lo(i)>Lo(e)?i:e,t[0]):t[0]}const _r={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ui(t,e){return t&&Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function qi(t,e=""){const i=t.player;if(!i)return"";const o=t.evolution_bonus||0,r={...i,_evolution_bonus:o},n=e?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${e}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${t.id}">
    ${n}
    ${je(r,{width:140})}
  </div>`}function zo(t){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${je(t,{width:140})}
  </div>`}async function kr(t,e){const{state:i,navigate:o,toast:r,openModal:n,closeModal:a}=e;Ut(o,i.profile,"cards","/icons/",r),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await v.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await v.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),s=(d||[]).filter(j=>j.card_type==="player"&&j.player),c=(d||[]).filter(j=>j.card_type==="game_changer"),f=(d||[]).filter(j=>j.card_type==="formation"),y=(d||[]).filter(j=>j.card_type==="stadium"),{data:g}=await v.from("gc_definitions").select("name,gc_type,color,effect,image_url"),x={};(g||[]).forEach(j=>{x[j.name]=j});const{data:m}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),b={};(m||[]).forEach(j=>{b[j.id]=j}),y.forEach(j=>{j.stadium_def&&(b[j.stadium_id]=j.stadium_def)});const u=Object.keys(Ji),w=Object.keys(Oe),h={};s.forEach(j=>{const K=j.player.id;h[K]=(h[K]||0)+1}),new Set(Object.keys(h).map(j=>String(j)));const $=new Set(f.map(j=>j.formation)),p=new Set(c.map(j=>j.gc_type));let z="player",S="Tous",M="",R=!1,V=!1;function J(){return[...s].sort((j,K)=>{const re=pi.indexOf(j.player.job),ee=pi.indexOf(K.player.job);return re!==ee?re-ee:(j.player.surname_real||"").localeCompare(K.player.surname_real||"")})}function oe(){return[...l||[]].sort((j,K)=>{const re=pi.indexOf(j.job),ee=pi.indexOf(K.job);return re!==ee?re-ee:(j.surname_real||"").localeCompare(K.surname_real||"")})}function L(){return J().filter(j=>{const K=j.player,re=S==="Tous"||K.job===S,ee=!M||`${K.firstname} ${K.surname_real}`.toLowerCase().includes(M);return re&&ee})}function _(){return oe().filter(j=>{const K=S==="Tous"||j.job===S,re=!M||`${j.firstname} ${j.surname_real}`.toLowerCase().includes(M);return K&&re})}t.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--tile-border);background:var(--tile-bg)">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${z==="player"?"var(--green)":"transparent"};
        color:${z==="player"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${s.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${z==="formation"?"var(--green)":"transparent"};
        color:${z==="formation"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${f.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${z==="gc"?"var(--green)":"transparent"};
        color:${z==="gc"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${z==="stadium"?"#4FC3F7":"transparent"};
        color:${z==="stadium"?"#4FC3F7":"var(--tile-fg-dim)"}">
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
  </div>`,function(K){const re=document.getElementById(K);if(!re)return;re.addEventListener("wheel",H=>{Math.abs(H.deltaY)<=Math.abs(H.deltaX)||(H.preventDefault(),re.scrollLeft+=H.deltaY)},{passive:!1});let ee=!1,Y=0,P=0,W=!1,D=!1;re.addEventListener("mousedown",H=>{ee=!0,W=!1,Y=H.pageX,P=re.scrollLeft}),window.addEventListener("mouseup",()=>{ee=!1,W&&(re.style.cursor="",D=!0),W=!1}),window.addEventListener("mousemove",H=>{if(!ee)return;const ae=H.pageX-Y;!W&&Math.abs(ae)<6||(W=!0,re.style.cursor="grabbing",H.preventDefault(),re.scrollLeft=P-ae)}),re.addEventListener("click",H=>{D&&(H.stopPropagation(),H.preventDefault(),D=!1)},!0)}("col-grid");function G(){const j=document.getElementById("col-filters");j&&(z==="player"?(j.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px;background:#fff;color:#1a1a1a" value="${M}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${vr.map(K=>`
            <button class="filter-btn" data-job="${K}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${K===S?"var(--green)":"var(--tile-border)"};
                background:${K===S?"var(--green)":"#fff"};
                color:${K===S?"#fff":"#555"}">
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
              border:1.5px solid ${R?"var(--yellow)":"var(--tile-border)"};
              background:${R?"var(--yellow)":"#fff"};
              color:${R?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${R?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",K=>{M=K.target.value.toLowerCase(),N()}),t.querySelectorAll(".filter-btn").forEach(K=>{K.addEventListener("click",()=>{S=K.dataset.job,G(),N()})}),document.getElementById("dupes-only-btn").addEventListener("click",()=>{V=!V,G(),N()}),document.getElementById("show-all-btn").addEventListener("click",()=>{R=!R,G(),N()})):(j.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${R?"var(--yellow)":"var(--tile-border)"};
              background:${R?"var(--yellow)":"#fff"};
              color:${R?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${R?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{R=!R,G(),N()})))}function N(){const j=document.getElementById("col-grid");j&&(z==="player"?fe(j):z==="formation"?ge(j):z==="stadium"?de(j):be(j))}function ce(j,K,re,ee,Y,P=0){const W=document.getElementById("col-grid"),D=document.getElementById("col-big");if(!W||!D)return;var H=0;function ae(){var De;const le=window.innerWidth>=768,xe=document.getElementById("col-big"),ke=document.getElementById("col-gap"),Ee=((De=document.getElementById("col-grid"))==null?void 0:De.parentElement)||null,Le=xe?xe.closest(".page"):null;if(xe&&Ee&&Le){let Te=0;Array.from(Le.children).forEach(function(I){I!==xe&&I!==Ee&&I!==ke&&(Te+=I.offsetHeight)});const Me=Math.max(0,Le.clientHeight-Te),Ge=Math.round(Me*(P/100)),k=Math.max(0,Me-Ge),E=le?50/71:45/63,A=Math.round(k*E),C=Math.max(0,k-A);ke&&(ke.style.height=Ge+"px"),xe.style.flex="none",xe.style.height=A+"px",xe.style.minHeight="0",Ee.style.flex="none",Ee.style.height=C+"px",Ee.style.minHeight="0",Ee.style.display="flex",Ee.style.overflow="hidden"}const ye=document.getElementById("col-grid");ye&&(ye.style.height="100%",ye.style.flexShrink="0",ye.style.overflowX="auto",ye.style.overflowY="hidden",ye.style.alignItems="center",ye.style.width="100%"),D.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+K(j[H])+"</div>";var Se=D.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Se&&Se.addEventListener("click",function(){ee(j[H])}),requestAnimationFrame(function(){var Te=document.getElementById("big-card-inner");if(!(!Te||!D)){var Me=D.clientHeight,Ge=D.clientWidth-16,k=Te.offsetHeight,E=Te.offsetWidth;if(k>0&&E>0&&Me>40){var A=Math.min(Me/k,Ge/E);Te.style.transform="scale("+A.toFixed(3)+")",Te.style.transformOrigin="center center"}}}),W.innerHTML=j.map(function(Te,Me){var Ge=Me===H,k="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Ge?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Me+'" style="'+k+'">'+re(Te,Ge)+"</div>"}).join(""),W.querySelectorAll(".col-mini-item").forEach(function(Te){Te.addEventListener("click",function(){H=Number(Te.dataset.idx),ae(),Te.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var Te=ye?ye.clientHeight:0,Me=W.querySelector(".col-mini-item > div");if(!(!Te||!Me)){var Ge=Me.style.zoom;Me.style.zoom="1";var k=Me.offsetHeight;if(Me.style.zoom=Ge,!(k<=0)){var E=Te/k;W.querySelectorAll(".col-mini-item > div").forEach(function(A){A.style.zoom=E.toFixed(4)})}}})}ae()}function ue(j,K){var re=window.innerWidth>=768?.76:.54,ee;if(!j||j._fake){var Y=j?j.player:null;if(!Y)return"";ee=zo(Y)}else ee=qi(j,"");var P=j&&!j._fake?h[j.player&&j.player.id]||1:0,W=P>0?'<div style="position:absolute;top:6px;right:6px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:11px;font-weight:900;padding:2px 7px;z-index:3;box-shadow:0 1px 4px rgba(0,0,0,0.4)">×'+P+"</div>":"";return'<div style="display:inline-block;position:relative;zoom:'+re+';pointer-events:none;line-height:0">'+W+ee+"</div>"}function T(j,K,re){var ee=re>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+re+"</div>":"",Y=!!K,P=ni(j,_t[j],{width:160});return Y||(P='<div style="filter:grayscale(1);opacity:0.5">'+P+"</div>"),"<div "+(K?'data-form-id="'+K.id+'"':"")+' style="position:relative;cursor:pointer">'+ee+P+"</div>"}function O(j,K){var re=window.innerWidth>=768?.76:.54,ee=ni(j,_t[j],{width:140});return K||(ee='<div style="filter:grayscale(1);opacity:0.45">'+ee+"</div>"),'<div style="display:inline-block;zoom:'+re+';line-height:0;pointer-events:none">'+ee+"</div>"}function fe(j){if(R){const K=_();if(!K.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const re=K.map(ee=>s.find(Y=>Y.player.id===ee.id)||{_fake:!0,player:ee,id:"fake-"+ee.id});ce(re,ee=>ee._fake?zo(ee.player):qi(ee,""),ee=>ee._fake?ue({player:ee.player,id:"x",_fake:!0}):ue(ee),ee=>{ee._fake||Io(ee,s,h,e)})}else{const K=L();if(!K.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const re={};K.forEach(Y=>{const P=Y.player.id;re[P]||(re[P]=[]),re[P].push(Y)});const ee=Object.values(re).map(Y=>wr(Y)).filter(Y=>!V||(h[Y.player.id]||1)>1);if(V&&!ee.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte en plusieurs exemplaires.</div>';return}ce(ee,Y=>{const P=h[Y.player.id]||1,W=P>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${P}</div>`:"",H=s.filter(ae=>ae.player.id===Y.player.id&&ae.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return qi(Y,W+H)},Y=>ue(Y),Y=>Io(Y,s,h,e))}}function ge(j){const K=R?u:[...$];if(!K.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const re=K.map(ee=>({formation:ee,card:f.find(Y=>Y.formation===ee)||null,owned:$.has(ee)}));ce(re,({formation:ee,card:Y,owned:P})=>T(ee,P?Y:null,P?f.filter(W=>W.formation===ee).length:0),({formation:ee,owned:Y})=>O(ee,Y),({card:ee,owned:Y})=>{Y&&ee&&Er(ee,f,e,n)},"#1A6B3C",5)}function be(j){const K=Object.keys(x),re=R?K.length?K:w:[...p];if(!re.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const ee=re.map(Y=>({type:Y,gc:Oe[Y]||{icon:"⚡",desc:""},def:x[Y]||null,owned:p.has(Y),card:c.find(P=>P.gc_type===Y)||null}));ce(ee,({type:Y,gc:P,def:W,owned:D,card:H})=>{var ye;const ae=(W==null?void 0:W.name)||Y,le=D?c.filter(Se=>Se.gc_type===Y).length:0,xe=le>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${le}</div>`:"",ke=(W==null?void 0:W.effect)||P.desc||"",Ee=W!=null&&W.image_url?`/icons/${W.image_url}`:((ye=W==null?void 0:W.club)==null?void 0:ye.logo_url)||(W!=null&&W.country_code?`https://flagsapi.com/${W.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);let Le=dt(ae,Ee,P.icon,ke,{width:160,onClick:D});return D||(Le=`<div style="filter:grayscale(1);opacity:0.5">${Le}</div>`),`<div ${D&&H?`data-gc-id="${H.id}" data-gc-type="${Y}"`:""} style="position:relative">${xe}${Le}</div>`},({type:Y,gc:P,def:W,owned:D})=>{const H=window.innerWidth>=768?.76:.54,ae=(W==null?void 0:W.name)||Y,le=(W==null?void 0:W.effect)||P.desc||"",xe=W!=null&&W.image_url?`/icons/${W.image_url}`:null;let ke=dt(ae,xe,P.icon,le,{width:140});return D||(ke=`<div style="filter:grayscale(1);opacity:0.45">${ke}</div>`),`<div style="display:inline-block;zoom:${H};line-height:0;pointer-events:none">${ke}</div>`},({type:Y,owned:P,def:W})=>{P&&$r(Y,W,n)},"#7a28b8",5)}function de(j){const K="#4FC3F7",re="/";if(!y.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const ee={};y.forEach(P=>{const W=P.stadium_id||"?";(ee[W]=ee[W]||[]).push(P)});const Y=Object.entries(ee).map(([P,W])=>({sid:P,def:b[P]||null,count:W.length,card:W[0]}));ce(Y,({def:P,count:W})=>{var ke,Ee;const D=(P==null?void 0:P.name)||"?",H=((ke=P==null?void 0:P.club)==null?void 0:ke.encoded_name)||(P==null?void 0:P.country_code)||"—",ae=P!=null&&P.image_url?`${re}icons/${P.image_url}`:((Ee=P==null?void 0:P.club)==null?void 0:Ee.logo_url)||(P!=null&&P.country_code?`https://flagsapi.com/${P.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),le=W>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${W}</div>`:"",xe=`${H}<br>+10 ⭐ joueurs alliés`;return`<div style="position:relative">${le}${Ot(D,ae,xe,{width:160})}</div>`},({def:P})=>{var xe,ke;const W=window.innerWidth>=768?.76:.54,D=(P==null?void 0:P.name)||"?",H=((xe=P==null?void 0:P.club)==null?void 0:xe.encoded_name)||(P==null?void 0:P.country_code)||"—",ae=P!=null&&P.image_url?`${re}icons/${P.image_url}`:((ke=P==null?void 0:P.club)==null?void 0:ke.logo_url)||(P!=null&&P.country_code?`https://flagsapi.com/${P.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),le=`${H}<br>+10 ⭐`;return`<div style="display:inline-block;zoom:${W};line-height:0;pointer-events:none">${Ot(D,ae,le,{width:140})}</div>`},null,K,5)}t.querySelectorAll(".col-tab-btn").forEach(j=>{j.addEventListener("click",()=>{z=j.dataset.tab,S="Tous",M="",R=!1,t.querySelectorAll(".col-tab-btn").forEach(K=>{const re=K.dataset.tab===z;K.style.borderBottomColor=re?"var(--green)":"transparent",K.style.color=re?"var(--green)":"var(--tile-fg-dim)"}),G(),N()})}),G(),N()}function $r(t,e,i){const o=Oe[t]||{icon:"⚡",desc:"Effet spécial."},r=(e==null?void 0:e.name)||t,n=(e==null?void 0:e.effect)||o.desc,a=e!=null&&e.image_url?`/icons/${e.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      ${dt(r,a,o.icon,n,{width:200})}
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const fi=1e3;function Er(t,e,i,o){var x,m,b;const{state:r,toast:n,closeModal:a,navigate:d,refreshProfile:l}=i,s=t.formation,c={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const u=_t[s]||{},w=Ji[s]||[],h=290,$=360,p=20;function z(M){const R=u[M];return R?{x:R.x*h,y:R.y*$}:null}let S=`<svg width="${h}" height="${$}" viewBox="0 0 ${h} ${$}" xmlns="http://www.w3.org/2000/svg">`;for(const[M,R]of w){const V=z(M),J=z(R);!V||!J||(S+=`<line x1="${V.x}" y1="${V.y}" x2="${J.x}" y2="${J.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const M of Object.keys(u)){const R=z(M);if(!R)continue;const V=M.replace(/\d+/,""),J=c[V]||"#555";S+=`<circle cx="${R.x}" cy="${R.y}" r="${p}" fill="${J}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,S+=`<text x="${R.x}" y="${R.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${V}</text>`}return S+="</svg>",S}const y=e.filter(u=>u.formation===s);y.length;const g=!t.is_for_sale;o(`Formation ${s}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${fi}"
          style="flex:1;padding:8px;border:1.5px solid var(--tile-border);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${t.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(x=document.getElementById("direct-sell-form-btn"))==null||x.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${s} pour ${fi.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const u=y.find(h=>!h.is_for_sale)||y[0];if(!u){n("Aucune carte à vendre","error");return}await v.from("market_listings").delete().eq("card_id",u.id),await v.from("transfer_history").delete().eq("card_id",u.id);const{error:w}=await v.from("cards").delete().eq("id",u.id);if(w){n(w.message,"error");return}await v.from("users").update({credits:(r.profile.credits||0)+fi}).eq("id",r.profile.id),await l(),n(`+${fi.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),d("collection")}),(m=document.getElementById("market-sell-form-btn"))==null||m.addEventListener("click",async()=>{const u=parseInt(document.getElementById("sell-price-form").value);if(!u||u<1){n("Prix invalide","error");return}await v.from("cards").update({is_for_sale:!0,sale_price:u}).eq("id",t.id),await v.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:u}),n("Carte mise en vente sur le marché !","success"),a(),d("collection")}),(b=document.getElementById("cancel-sell-form-btn"))==null||b.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),a(),d("collection")})}async function Io(t,e,i,o){var fe,ge,be,de,j,K,re,ee,Y,P,W;const{state:r,toast:n,openModal:a,closeModal:d,navigate:l,refreshProfile:s}=o,c=t.player,f=e.filter(D=>D.player.id===c.id),y=f.length,g=t.evolution_bonus||0,x=Math.max((Number(c.note_g)||0)+(c.job==="GK"||c.job2==="GK"?g:0),(Number(c.note_d)||0)+(c.job==="DEF"||c.job2==="DEF"?g:0),(Number(c.note_m)||0)+(c.job==="MIL"||c.job2==="MIL"?g:0),(Number(c.note_a)||0)+(c.job==="ATT"||c.job2==="ATT"?g:0)),m=c.rarity||"normal",{data:b}=await v.from("sell_price_configs").select("*").eq("rarity",m).lte("note_min",x).gte("note_max",x).order("note_min",{ascending:!1}).limit(1),u=((fe=b==null?void 0:b[0])==null?void 0:fe.price)??hr[m]??1e3,w=((ge=b==null?void 0:b[0])==null?void 0:ge.price_min)??null,h=((be=b==null?void 0:b[0])==null?void 0:be.price_max)??null;Ct(c);const $=ui(c,c.job)+g,p=c.job2?ui(c,c.job2)+(ui(c,c.job2)>0?g:0):null;Xt[c.job],c.job2&&Xt[c.job2];const z=yr[c.rarity]||"#ccc",S=_r[c.country_code]||c.country_code||"",M=t.evolution_bonus||0,V=$+M,J=p||0,oe=J>0?J+M:0,L=f.map(D=>D.id);let _={};if(L.length){const{data:D}=await v.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",L).order("transferred_at",{ascending:!0});(D||[]).forEach(H=>{_[H.card_id]||(_[H.card_id]=[]),_[H.card_id].push(H)})}const G=L.length?`
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
          ${w!==null&&h!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${w.toLocaleString("fr")}</b> – <b>${h.toLocaleString("fr")}</b> cr.
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
        ${f.filter(D=>D.id!==t.id).map((D,H)=>{const ae=_[D.id]||[],le=D.is_for_sale,xe=ae.length?ae[ae.length-1]:null,ke=D.evolution_bonus||0,Ee=xe?xe.source==="booster"?"Booster":xe.price?xe.price.toLocaleString("fr")+" cr.":"—":"—",Le=xe?new Date(xe.transferred_at).toLocaleDateString("fr",{day:"2-digit",month:"2-digit",year:"numeric"}):"",ye=80,Se=Math.round(ye*657/507),De=je({...c,_evolution_bonus:ke},{width:ye});return`
            <div class="exemplaire-row" data-card-id="${D.id}" data-card-idx="${H}"
              style="position:relative;cursor:${le?"not-allowed":"pointer"};opacity:${le?.55:1};transition:transform .1s">
              <!-- Checkbox cachée -->
              <input type="checkbox" class="expl-check"
                data-id="${D.id}" data-evo="${ke}" data-note="${ui(c,c.job)}"
                ${le?"disabled":""}
                style="display:none">
              <!-- Wrapper exactement aux dimensions de la carte -->
              <div class="expl-mini-card" style="position:relative;width:${ye}px;height:${Se}px;border-radius:8px;overflow:hidden">
                ${De}
                <!-- Overlay vert sélection — couvre toute la carte -->
                <div class="expl-sel-overlay" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(26,107,60,0.38);pointer-events:none;z-index:10;box-shadow:inset 0 0 0 3px #1A6B3C;border-radius:8px"></div>
                <!-- Checkmark -->
                <div class="expl-sel-check" style="display:none;position:absolute;top:5px;left:5px;width:20px;height:20px;background:#1A6B3C;border-radius:50%;z-index:11;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:900">✓</div>
                ${le?'<div style="position:absolute;top:0;right:0;background:#e67e22;color:#fff;font-size:6px;font-weight:900;padding:2px 4px;border-radius:0 6px 0 4px;z-index:12">VENTE</div>':""}
              </div>
              <!-- Source + date -->
              <div style="font-size:9px;color:#888;text-align:center;margin-top:3px;line-height:1.3">
                ${Ee}${Le?`<br>${Le}`:""}
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
              ${(t.evolution_bonus||0)>0?`+${t.evolution_bonus} appliqué${t.evolution_bonus>1?"s":""} · Note : ${V}${c.job2&&J>0?` / ${oe}`:""}`:`Note actuelle : ${V}${c.job2&&J>0?` / ${oe}`:""}`}
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
          ${w!==null&&h!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${w.toLocaleString("fr")}</b> – <b>${h.toLocaleString("fr")}</b> cr. / carte
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
          <div style="font-weight:900;font-size:15px;color:${c.rarity==="normal"?"#555":c.rarity==="papyte"?"#707070":z}">${c.rarity.toUpperCase()}</div>
          ${c.rarity==="pepite"||c.rarity==="papyte"?`
          <div style="margin-top:8px;background:${z}12;border-left:3px solid ${z};border-radius:0 8px 8px 0;padding:10px 12px">
            <div style="font-size:11px;font-weight:700;color:${z};margin-bottom:4px">✨ Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5;margin-bottom:6px">
              ${c.rarity==="pepite"?'⬆️ Bonus évolution : <b style="color:#D4A017">+30%</b>':'⬇️ Malus évolution : <b style="color:#909090">-30%</b>'}
            </div>
            <div style="font-size:10.5px;color:#888;line-height:1.5;font-style:italic;border-top:1px solid ${z}30;padding-top:6px">
              ${c.rarity==="pepite"?"Une carte Pépite est promise à un grand avenir : à force d'évoluer, elle peut un jour devenir une Légende.":"Une carte Papyte peut devenir une légende dans le temps ou prendre sa retraite..."}
            </div>
          </div>`:""}
        </div>

        <!-- Grille d'infos : Pays / Club / Postes -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px 16px;background:#f8f8f8;border-radius:10px;padding:10px 12px">
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">PAYS</div>
            <div style="font-weight:700;font-size:13px;color:#333">${S||"—"}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">CLUB</div>
            <div style="font-weight:700;font-size:13px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${((de=c.clubs)==null?void 0:de.encoded_name)||"—"}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">POSTE PRINCIPAL</div>
            <div style="font-weight:700;font-size:13px;color:${Xt[c.job]||"#333"}">${c.job}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">POSTE SECONDAIRE</div>
            <div style="font-weight:700;font-size:13px;color:${c.job2?Xt[c.job2]||"#333":"#bbb"}">${c.job2||"Aucun"}</div>
          </div>
        </div>

        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",c.note_g],["DEF",c.note_d],["MIL",c.note_m],["ATT",c.note_a]].map(([D,H])=>{const ae=Xt[D],le=D==="GK"?"#fff":ae,xe=D===c.job||D===c.job2,ke=(Number(H)||0)+(xe&&M>0?M:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${ae};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${le};font-family:Arial Black,Arial;line-height:1">${ke}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${le}">${D}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:900;font-size:18px;color:#1A6B3C">×${y}</div>
        </div>
      </div>
    </div>
    ${G}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(j=document.getElementById("close-detail"))==null||j.addEventListener("click",d);let N=new Set;const ce=c.rarity==="pepite"?1.3:c.rarity==="papyte"?.7:1;function ue(){let D=0;return document.querySelectorAll(".expl-check:checked").forEach(H=>{if(H.dataset.id===t.id)return;const le=Number(H.dataset.evo)||0,xe=Number(H.dataset.note)||0;D+=xe+le}),Math.round(D*ce)}const T=()=>{const D=N.size,H=document.getElementById("sell-action-panel");if(!H)return;H.style.display=D>0?"block":"none",document.getElementById("sell-selected-count").textContent=D;const ae=document.getElementById("evolve-btn");if(ae){const le=ue();ae.textContent=le>0?`⬆️ Évoluer (+${le})`:"⬆️ Évoluer"}};document.querySelectorAll(".expl-check").forEach(D=>{D.addEventListener("change",()=>{const H=D.dataset.id;D.checked?N.add(H):N.delete(H);const ae=D.closest(".exemplaire-row");if(ae){const le=ae.querySelector(".expl-sel-overlay"),xe=ae.querySelector(".expl-sel-check");le&&(le.style.display=D.checked?"block":"none"),xe&&(xe.style.display=D.checked?"flex":"none"),ae.style.transform=D.checked?"scale(1.05)":"scale(1)"}T()})}),document.querySelectorAll(".exemplaire-row").forEach(D=>{D.addEventListener("click",H=>{if(H.target.tagName==="INPUT")return;const ae=D.querySelector(".expl-check");ae&&!ae.disabled&&(ae.checked=!ae.checked,ae.dispatchEvent(new Event("change")))})}),(K=document.getElementById("evolve-btn"))==null||K.addEventListener("click",async()=>{if(y<=1)return;const D=[...N];if(!D.length)return;if(N.has(t.id)){const ye=document.createElement("div");ye.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ye.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(ye),ye.querySelector("#err-close").addEventListener("click",()=>ye.remove()),ye.addEventListener("click",Se=>{Se.target===ye&&ye.remove()});return}const H=D.filter(ye=>ye!==t.id);if(!H.length){n("Sélectionne des copies à sacrifier","warning");return}const ae=H.reduce((ye,Se)=>{const De=document.querySelector(`.expl-check[data-id="${Se}"]`),Te=De&&Number(De.dataset.evo)||0,Me=De&&Number(De.dataset.note)||0;return ye+Me+Te},0),le=Math.round(ae*ce),xe=c.rarity==="pepite"?" (+30% pépite ✨)":c.rarity==="papyte"?" (-30% papyte)":"";if(!await new Promise(ye=>{const Se=document.createElement("div");Se.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",Se.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${c.firstname} ${c.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${H.length}</strong> copie${H.length>1?"s":""} sacrifiée${H.length>1?"s":""}<br>
            ➕ Brut : <strong>+${ae}</strong>${xe?`<span style="font-size:11px;color:#888"> ${xe}</span>`:""}<br>
            ⬆️ Bonus final : <strong style="color:#1A6B3C">+${le}</strong><br>
            📈 Évolution : <strong>${t.evolution_bonus||0}</strong> → <strong style="color:#1A6B3C">${(t.evolution_bonus||0)+le}</strong><br>
            📊 Note finale : <strong>${$}</strong> → <strong style="color:#1A6B3C">${$+le}</strong>
            ${p&&p>0?`<br>📊 Note 2 finale : <strong>${p}</strong> → <strong style="color:#1A6B3C">${p+le}</strong>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(Se),Se.querySelector("#sac-cancel").addEventListener("click",()=>{Se.remove(),ye(!1)}),Se.querySelector("#sac-ok").addEventListener("click",()=>{Se.remove(),ye(!0)}),Se.addEventListener("click",De=>{De.target===Se&&(Se.remove(),ye(!1))})}))return;if(H.length){await v.from("market_listings").delete().in("card_id",H),await v.from("deck_cards").delete().in("card_id",H),await v.from("transfer_history").delete().in("card_id",H),await v.from("decks").update({stadium_card_id:null}).in("stadium_card_id",H);const{error:ye}=await v.from("cards").delete().in("id",H);if(ye){n("Erreur suppression : "+ye.message,"error");return}}const Ee=(t.evolution_bonus||0)+le,{error:Le}=await v.from("cards").update({evolution_bonus:Ee}).eq("id",t.id);if(Le){n("Erreur évolution : "+Le.message,"error");return}n(`⬆️ ${c.firstname} ${c.surname_real} : note ${$} → ${$+Ee} (+${le}) !`,"success",4e3),d(),l("collection")});async function O(D){const{data:H}=await v.from("sell_price_configs").select("price_min, price_max").eq("rarity",c.rarity).lte("note_min",$).gte("note_max",$).order("note_max",{ascending:!0}).limit(1).maybeSingle();return H?D<H.price_min||D>H.price_max?{ok:!1,min:H.price_min,max:H.price_max}:{ok:!0}:{ok:!0}}(re=document.getElementById("market-sell-btn"))==null||re.addEventListener("click",async()=>{var Ee;const D=[...N];if(!D.length){n("Sélectionne au moins un exemplaire","warning");return}const H=parseInt((Ee=document.getElementById("sell-market-price"))==null?void 0:Ee.value);if(!H||H<1){n("Prix invalide","error");return}const ae=await O(H);if(!ae.ok){n(`Prix hors grille : entre ${ae.min.toLocaleString("fr")} et ${ae.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:le}=await v.from("cards").update({is_for_sale:!0,sale_price:H}).in("id",D);if(le){n(le.message,"error");return}const xe=D.map(Le=>({seller_id:r.profile.id,card_id:Le,price:H,status:"active"})),{error:ke}=await v.from("market_listings").insert(xe);ke&&console.warn("[Market] insert listings:",ke.message),n(`${D.length} carte${D.length>1?"s":""} mise${D.length>1?"s":""} en vente à ${H.toLocaleString("fr")} cr. chacune !`,"success"),d(),l("collection")}),(ee=document.getElementById("single-sell-btn"))==null||ee.addEventListener("click",async()=>{var xe;const D=parseInt((xe=document.getElementById("single-sell-price"))==null?void 0:xe.value);if(!D||D<1){n("Prix invalide","error");return}const H=await O(D);if(!H.ok){n(`Prix hors grille : entre ${H.min.toLocaleString("fr")} et ${H.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:ae}=await v.from("cards").update({is_for_sale:!0,sale_price:D}).eq("id",t.id);if(ae){n(ae.message,"error");return}const{error:le}=await v.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:D,status:"active"});le&&console.warn("[Market] insert listing:",le.message),n(`Carte mise en vente à ${D.toLocaleString("fr")} cr. !`,"success"),d(),l("collection")}),(Y=document.getElementById("single-direct-sell-btn"))==null||Y.addEventListener("click",async()=>{const D=w??u;if(!confirm(`Vendre cette carte immédiatement pour ${D.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;await v.from("market_listings").delete().eq("card_id",t.id),await v.from("transfer_history").delete().eq("card_id",t.id);const{error:H}=await v.from("cards").delete().eq("id",t.id);if(H){n(H.message,"error");return}await v.from("users").update({credits:(r.profile.credits||0)+D}).eq("id",r.profile.id),await s(),n(`+${D.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),l("collection")}),(P=document.getElementById("market-direct-sell-btn"))==null||P.addEventListener("click",async()=>{const D=[...N];if(!D.length){n("Sélectionne au moins un exemplaire","warning");return}const ae=(w??u)*D.length;if(!confirm(`Vendre ${D.length} carte${D.length>1?"s":""} immédiatement pour ${ae.toLocaleString("fr")} crédits au total ? Cette action est irréversible.`))return;await v.from("market_listings").delete().in("card_id",D),await v.from("transfer_history").delete().in("card_id",D);const{error:le}=await v.from("cards").delete().in("id",D);if(le){n(le.message,"error");return}await v.from("users").update({credits:(r.profile.credits||0)+ae}).eq("id",r.profile.id),await s(),n(`+${ae.toLocaleString("fr")} crédits ! ${D.length} carte${D.length>1?"s":""} vendue${D.length>1?"s":""}.`,"success"),d(),l("collection")}),(W=document.getElementById("cancel-sell-btn"))==null||W.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),d(),l("collection")})}function Ao(t,e=""){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${t}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(e||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const r=o.querySelector("#pm-input");r.focus(),r.select();const n=a=>{o.remove(),i(a)};o.querySelector("#pm-ok").addEventListener("click",()=>n(r.value.trim()||null)),o.querySelector("#pm-cancel").addEventListener("click",()=>n(null)),o.querySelector("#pm-cancel2").addEventListener("click",()=>n(null)),o.addEventListener("click",a=>{a.target===o&&n(null)}),r.addEventListener("keydown",a=>{a.key==="Enter"&&n(r.value.trim()||null),a.key==="Escape"&&n(null)})})}function Sr(t,e=!1){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${t}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${e?"":"btn-primary"}" id="cm-ok" style="${e?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const r=n=>{o.remove(),i(n)};o.querySelector("#cm-ok").addEventListener("click",()=>r(!0)),o.querySelector("#cm-cancel").addEventListener("click",()=>r(!1)),o.addEventListener("click",n=>{n.target===o&&r(!1)})})}const _i={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Oi(t,e){const{state:i,navigate:o,toast:r}=e;Ut(o,i.profile,"decks","/icons/",r),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await v.from("decks").select("id,name,formation,stadium_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1}),a=[...new Set((n||[]).map(l=>l.stadium_card_id).filter(Boolean))];let d={};if(a.length){const{data:l}=await v.from("cards").select("id, stadium_id, stadium_definitions(image_url, country_code, club:clubs(logo_url))").in("id",a);(l||[]).forEach(s=>{var y;const c=s.stadium_definitions,f=((y=c==null?void 0:c.club)==null?void 0:y.logo_url)||(c!=null&&c.image_url?`/icons/${c.image_url}`:null)||(c!=null&&c.country_code?`https://flagsapi.com/${c.country_code}/flat/64.png`:null);d[s.id]=f})}t.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const l=await Ao("Nom du deck",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!l)return;const{data:s,error:c}=await v.from("decks").insert({owner_id:i.profile.id,name:l}).select().single();if(c){r(c.message,"error");return}r("Deck créé !","success"),To(s.id,t,e)}),t.querySelectorAll("[data-open-deck]").forEach(l=>{l.addEventListener("click",()=>To(l.dataset.openDeck,t,e))}),t.querySelectorAll("[data-rename]").forEach(l=>{l.addEventListener("click",async()=>{const s=await Ao("Nouveau nom",l.dataset.name);if(!s||s===l.dataset.name)return;const{error:c}=await v.from("decks").update({name:s}).eq("id",l.dataset.rename);if(c){r(c.message,"error");return}r("Deck renommé !","success"),Oi(t,e)})}),t.querySelectorAll("[data-delete]").forEach(l=>{l.addEventListener("click",async()=>{if(!await Sr(`Supprimer le deck "${l.dataset.name}" ? Cette action est irréversible.`,!0))return;await v.from("deck_cards").delete().eq("deck_id",l.dataset.delete);const{error:s}=await v.from("decks").delete().eq("id",l.dataset.delete);if(s){r(s.message,"error");return}r("Deck supprimé.","success"),Oi(t,e)})})}async function To(t,e,i){const{state:o,toast:r}=i;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await v.from("decks").select("*").eq("id",t).single(),{data:a}=await v.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:d}=await v.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id).eq("card_type","stadium"),l=(a||[]).filter(u=>u.card_type==="player"&&u.player),s=(a||[]).filter(u=>u.card_type==="formation"),c=(d||[]).filter(u=>u.card_type==="stadium"),f=[...new Set(c.map(u=>u.stadium_id).filter(Boolean))];let y={};if(c.forEach(u=>{u.stadium_def&&u.stadium_id&&(y[u.stadium_id]=u.stadium_def)}),f.length&&Object.keys(y).length<f.length){const{data:u}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",f);(u||[]).forEach(w=>{y[w.id]=w})}const g=s.map(u=>u.formation).filter(Boolean),{data:x}=await v.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",t);let m=n.formation||"4-4-2";g.length>0&&!g.includes(m)&&(m=g[0]);const b={deckId:t,name:n.name,formation:m,formationCardId:n.formation_card_id,stadiumCardId:n.stadium_card_id||null,slots:{},subs:[],playerCards:l,formationCards:s,stadiumCards:c,stadDefMap:y,availableFormations:g};(x||[]).forEach(u=>{u.is_starter?b.slots[u.position]=u.card_id:b.subs.includes(u.card_id)||b.subs.push(u.card_id)}),kt(e,b,i,!0)}function kt(t,e,i,o=!1){var m,b;const{navigate:r}=i;o||Tr(e,i),_i[e.formation];const n=Mo(e.formation),a=n.filter(u=>e.slots[u]).length,d=e.availableFormations.length>0?e.availableFormations:Object.keys(_i),l=(m=e.stadiumCards)==null?void 0:m.find(u=>u.id===e.stadiumCardId),s=l&&((b=e.stadDefMap)==null?void 0:b[l.stadium_id])||null,c=e.subs.map(u=>e.playerCards.find(w=>w.id===u)).filter(Boolean);c.length!==e.subs.length&&(e.subs=c.map(u=>u.id)),[...Object.values(e.slots),...e.subs],t.innerHTML=`
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
              ${ni(e.formation,_t[e.formation],{width:100})}
            </div>
          </div>
          <!-- Stade -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">🏟️ Stade</div>
            <div id="add-stad-btn-pc" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${l?(()=>{var h;const u=e.stadDefMap[l.stadium_id],w=((h=u==null?void 0:u.club)==null?void 0:h.logo_url)||(u==null?void 0:u.image_url)||(u!=null&&u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ot((u==null?void 0:u.name)||"Stade",w,"+10 ⭐",{width:100})})():`<div style="width:100px;height:171px;border:2px dashed rgba(79,195,247,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
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
              ${l?(()=>{var h;const u=e.stadDefMap[l.stadium_id],w=((h=u==null?void 0:u.club)==null?void 0:h.logo_url)||(u==null?void 0:u.image_url)||(u!=null&&u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ot((u==null?void 0:u.name)||"Stade",w,"+10⭐",{width:44})})():`<div style="width:44px;height:57px;border:2px dashed rgba(79,195,247,0.5);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
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
  </div>`;const f=window.innerWidth>=900,y=t.querySelector(".deck-pc-layout"),g=t.querySelector(".deck-mobile-layout");y&&(y.style.display=f?"block":"none"),g&&(g.style.display=f?"none":"block"),t.querySelectorAll("#save-deck").forEach(u=>{u.closest(".page-body").style.display=f?"none":"block"}),Lr(t,e,n,i),t.querySelectorAll("#builder-back").forEach(u=>u.addEventListener("click",()=>r("decks")));const x=()=>{const{openModal:u,closeModal:w}=i,$=`<div style="display:flex;flex-wrap:wrap;gap:12px;padding:8px;justify-content:center">
      ${[...new Set(d)].map(p=>{const z=p===e.formation;return`<div data-forma="${p}" style="cursor:pointer;border-radius:10px;${z?"box-shadow:0 0 0 3px #1A6B3C":""}">
          ${ni(p,_t[p],{width:90})}
        </div>`}).join("")}
    </div>`;u("⚽ Choisir une formation",$),document.querySelectorAll("#modal-body [data-forma]").forEach(p=>{p.addEventListener("click",()=>{e.formation=p.dataset.forma;const z=Mo(e.formation),S={};z.forEach(M=>{e.slots[M]&&(S[M]=e.slots[M])}),e.slots=S,w(),kt(t,e,i)})})};t.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(u=>u.addEventListener("click",x)),t.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(u=>u.addEventListener("click",()=>zr(e,t,i))),t.querySelectorAll("#save-deck, #save-deck-pc").forEach(u=>u.addEventListener("click",()=>Mr(e,i))),t.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{e.subs=e.subs.filter(w=>w!==u.dataset.removeSub),kt(t,e,i)})}),t.querySelectorAll("#add-sub-btn").forEach(u=>u.addEventListener("click",()=>Ar(e,t,i)))}function Lr(t,e,i,o){var h,$,p;const r=window.innerWidth>=900,n=t.querySelector(r?"#deck-field-pc":"#deck-field-mobile");if(!n)return;const a=(h=e.stadiumCards)==null?void 0:h.find(z=>z.id===e.stadiumCardId),d=a&&(($=e.stadDefMap)==null?void 0:$[a.stadium_id])||null,l=_t[e.formation]||{},s=Go(e.formation)||[],c={};for(const z of i){const S=e.slots[z],M=S?e.playerCards.find(R=>R.id===S):null;M!=null&&M.player?c[z]={...M.player,_evolution_bonus:M.evolution_bonus||0,face:M.player.face||null}:c[z]=null}const f=window.innerWidth>=900,y=f?window.innerWidth-280:window.innerWidth-20,g=f?Math.min(y,860):y,x=Math.round(f?g*.82:g*.85),m=f?84:44;let b="";for(const[z,S]of s){const M=l[z],R=l[S];if(!M||!R)continue;const V=M.x*g,J=Math.round(.03*x+M.y*.85*x),oe=R.x*g,L=Math.round(.03*x+R.y*.85*x),_=c[z],G=c[S],N=Si(_,G);N==="#ff3333"||N==="#cc2222"?b+=`<line x1="${V.toFixed(1)}" y1="${J.toFixed(1)}" x2="${oe.toFixed(1)}" y2="${L.toFixed(1)}" stroke="${N}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(b+=`<line x1="${V.toFixed(1)}" y1="${J.toFixed(1)}" x2="${oe.toFixed(1)}" y2="${L.toFixed(1)}" stroke="${N}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,b+=`<line x1="${V.toFixed(1)}" y1="${J.toFixed(1)}" x2="${oe.toFixed(1)}" y2="${L.toFixed(1)}" stroke="${N}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let u="";const w=Math.round(m*657/507);for(const z of i){const S=l[z];if(!S)continue;const M=c[z],R=S.x*g;S.y*x;const V=Math.round(.03*x+S.y*(.85*x)),J=Math.round(R-m/2),oe=Math.round(V-w/2);if(M){const L=z.replace(/\d+/,""),_=d&&(d.club_id&&String(M.club_id)===String(d.club_id)||d.country_code&&M.country_code===d.country_code),G=je({...M,_evolution_bonus:M._evolution_bonus||0},{width:m,showStad:!0,stadDef:d,role:L});_&&((p=d.club)!=null&&p.logo_url||d.image_url),u+=`<div style="position:absolute;left:${J}px;top:${oe}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${z}">
        <div style="position:relative">${G}</div>
      </div>`}else{const L=z.replace(/\d+/,"");u+=`<div style="position:absolute;left:${J}px;top:${oe}px;width:${m}px;height:${w}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${z}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${L}</span>
      </div>`}}n.innerHTML=`
    <div style="position:relative;width:${g}px;height:${x}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${g} ${x}">${b}</svg>
      ${u}
    </div>`,n.querySelectorAll(".deck-slot-hit").forEach(z=>{z.addEventListener("click",()=>Ir(z.dataset.pos,e,t,o))})}function zr(t,e,i){var d;const{openModal:o,closeModal:r}=i,n=new Set,a=(t.stadiumCards||[]).filter(l=>{const s=l.stadium_id||l.id;return n.has(s)?!1:(n.add(s),!0)});o("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:90px;text-align:center">
        <div style="width:85px;height:112px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${t.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:26px">🚫</span>
          <span style="font-size:10px;color:#666">Aucun</span>
        </div>
      </div>
      ${a.map(l=>{var g;const s=t.stadDefMap[l.stadium_id],c=((g=s==null?void 0:s.club)==null?void 0:g.logo_url)||(s==null?void 0:s.image_url)||(s!=null&&s.country_code?`https://flagsapi.com/${s.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),f=t.stadiumCardId===l.id,y=Ot((s==null?void 0:s.name)||"Stade",c,"+10⭐",{width:90});return`<div class="stad-choice" data-stad-id="${l.id}" style="cursor:pointer;position:relative;border-radius:8px;${f?"box-shadow:0 0 0 3px #4fc3f7":""}">
          ${y}
        </div>`}).join("")}
    </div>`),(d=document.getElementById("stad-none"))==null||d.addEventListener("click",()=>{t.stadiumCardId=null,r(),kt(e,t,i)}),document.querySelectorAll(".stad-choice").forEach(l=>{l.addEventListener("click",()=>{t.stadiumCardId=l.dataset.stadId,r(),kt(e,t,i)})})}function Ir(t,e,i,o){var x,m,b,u,w;const{openModal:r,closeModal:n}=o,a=t.replace(/\d+/,""),d=(x=e.stadiumCards)==null?void 0:x.find(h=>h.id===e.stadiumCardId),l=d&&((m=e.stadDefMap)==null?void 0:m[d.stadium_id])||null,s=e.slots[t],c=s?e.playerCards.find(h=>h.id===s):null;(b=c==null?void 0:c.player)==null||b.id;const f=new Set;Object.entries(e.slots).forEach(([h,$])=>{var z;if(h===t||!$)return;const p=e.playerCards.find(S=>S.id===$);(z=p==null?void 0:p.player)!=null&&z.id&&f.add(p.player.id)}),e.subs.forEach(h=>{var p;const $=e.playerCards.find(z=>z.id===h);(p=$==null?void 0:$.player)!=null&&p.id&&f.add($.player.id)});const y=new Set,g=e.playerCards.filter(h=>{const $=h.player;return!($.job===a||$.job2===a)||f.has($.id)||y.has($.id)?!1:(y.add($.id),!0)});g.sort((h,$)=>{const p=h.evolution_bonus||0,z=$.evolution_bonus||0,S=(a==="GK"?h.player.note_g:a==="DEF"?h.player.note_d:a==="MIL"?h.player.note_m:h.player.note_a)+(a===h.player.job||a===h.player.job2?p:0);return(a==="GK"?$.player.note_g:a==="DEF"?$.player.note_d:a==="MIL"?$.player.note_m:$.player.note_a)+(a===$.player.job||a===$.player.job2?z:0)-S}),r(`Choisir ${a} — ${t}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${e.slots[t]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${g.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+g.map(h=>{const $={...h.player,_evolution_bonus:h.evolution_bonus||0};return`<div class="player-option" data-card-id="${h.id}" style="cursor:pointer">
          ${je($,{width:100,showStad:!0,stadDef:l,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(u=document.getElementById("close-selector"))==null||u.addEventListener("click",n),(w=document.getElementById("remove-player"))==null||w.addEventListener("click",()=>{delete e.slots[t],n(),kt(i,e,o)}),document.querySelectorAll(".player-option").forEach(h=>{h.addEventListener("click",()=>{e.slots[t]=h.dataset.cardId,n(),kt(i,e,o)})})}function Ar(t,e,i){var c,f,y;const{openModal:o,closeModal:r}=i,n=(c=t.stadiumCards)==null?void 0:c.find(g=>g.id===t.stadiumCardId),a=n&&((f=t.stadDefMap)==null?void 0:f[n.stadium_id])||null,d=new Set;Object.keys(t.slots).forEach(g=>{var b;const x=t.slots[g];if(!x)return;const m=t.playerCards.find(u=>u.id===x);(b=m==null?void 0:m.player)!=null&&b.id&&d.add(m.player.id)}),t.subs.forEach(g=>{var m;const x=t.playerCards.find(b=>b.id===g);(m=x==null?void 0:x.player)!=null&&m.id&&d.add(x.player.id)});const l=new Set,s=t.playerCards.filter(g=>{var x,m,b;return d.has((x=g.player)==null?void 0:x.id)||l.has((m=g.player)==null?void 0:m.id)?!1:(l.add((b=g.player)==null?void 0:b.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+s.map(g=>{const x={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div class="player-option" data-card-id="${g.id}" style="cursor:pointer">
          ${je(x,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(y=document.getElementById("close-sub-selector"))==null||y.addEventListener("click",r),document.querySelectorAll(".player-option").forEach(g=>{g.addEventListener("click",()=>{t.subs.push(g.dataset.cardId),r(),kt(e,t,i)})})}async function pn(t){const e=t.formationCards.find(r=>r.formation===t.formation),i=(e==null?void 0:e.id)||t.formationCardId;await v.from("decks").update({formation:t.formation,formation_card_id:i||null,stadium_card_id:t.stadiumCardId||null}).eq("id",t.deckId),await v.from("deck_cards").delete().eq("deck_id",t.deckId);const o=[];return Object.entries(t.slots).forEach(([r,n],a)=>{o.push({deck_id:t.deckId,card_id:n,position:r,is_starter:!0,slot_order:a})}),t.subs.forEach((r,n)=>{o.push({deck_id:t.deckId,card_id:r,position:`SUB${n+1}`,is_starter:!1,slot_order:100+n})}),o.length>0?await v.from("deck_cards").insert(o):{error:null}}let Gi=null;function Tr(t,e){const{toast:i}=e;clearTimeout(Gi),document.querySelectorAll(".autosave-indicator").forEach(r=>{r.textContent="⏳ Enregistrement...",r.style.opacity="1",r.style.color=""}),Gi=setTimeout(async()=>{const{error:r}=await pn(t),n=document.querySelectorAll(".autosave-indicator");if(r){n.forEach(a=>{a.textContent="⚠️ Erreur d'enregistrement",a.style.color="#ff6b6b"}),i(r.message,"error");return}n.forEach(a=>{a.textContent="✅ Enregistré",a.style.color="",setTimeout(()=>{a.style.opacity="0"},1500)})},600)}async function Mr(t,e){const{toast:i,navigate:o}=e;clearTimeout(Gi);const{error:r}=await pn(t);if(r){i(r.message,"error");return}i("Deck enregistré ✅","success"),o("decks")}function Mo(t){const e=_i[t]||_i["4-4-2"],i=["GK1"];for(let o=1;o<=e.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=e.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=e.ATT;o++)i.push(`ATT${o}`);return i}function Tt(){return Math.min(window.innerWidth-40,860)}function Nt(){return Math.round(Tt()*1.1)}function un(t){var r,n;if(!t)return null;const e=t._line||t.job||"MIL",i=e==="GK"?t.note_g||0:e==="DEF"?t.note_d||0:e==="MIL"?t.note_m||0:t.note_a||0,o=t.stadiumBonus?10:0;return{name:t.name,firstname:t.firstname||"",note:i+(t.boost||0)+o,note_g:t.note_g||0,note_d:t.note_d||0,note_m:t.note_m||0,note_a:t.note_a||0,_evolution_bonus:0,stadiumBonus:t.stadiumBonus||!1,boost:t.boost||0,job:t.job,job2:t.job2||null,_line:t._line||t.job,_col:t._col,country_code:t.country_code,club_id:t.club_id,rarity:t.rarity,clubName:t.clubName||((r=t.clubs)==null?void 0:r.encoded_name)||null,clubLogo:t.clubLogo||((n=t.clubs)==null?void 0:n.logo_url)||null,face:t.face||null,portrait:Ct(t)}}function Cr(t,e,i,o="Adversaire"){Wo("/sounds/match-opening.mp3",.3);const r=Tt(),n=Nt();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${o}</div>
      
      <div style="width:100%;max-width:${r}px;margin:0 auto">
        ${Xi(t,e,null,[],r,n)}
      </div>
    </div>`}function fn(t){var n,a,d;if(!t)return"";const e=l=>l?je({...l,_evolution_bonus:0},{width:52,role:l._line||l.job,showStad:!!l.stadiumBonus,extraNote:l.boost||0}):"",o={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[t.type]||"📋";return`
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
    </div>`}function Ze(t,e,i,o,r){to("/sounds/goal.mp3",.7);const n=document.getElementById("goal-anim-overlay");n&&n.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
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
      }`,document.head.appendChild(l)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),r==null||r()},400)},1800)}function jr(t,e,i){const o=document.getElementById("sub-anim-overlay");o&&o.remove();const r=document.createElement("div");r.id="sub-anim-overlay",r.style.cssText=`
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
      }`,document.head.appendChild(n)}document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.3s",setTimeout(()=>r.remove(),300)},i)}function mn(t,e){const i=jt(t,"MIL"),o=t.stadiumBonus||e&&(e.club_id&&String(t.club_id)===String(e.club_id)||e.country_code&&t.country_code===e.country_code)?10:0;return i+o}function xt(t,e){return t.reduce((i,o)=>i+mn(o,e),0)}function yt(t){let e=0;for(let i=0;i<t.length-1;i++){const o=Si(t[i],t[i+1]);o==="#00ff88"?e+=10:o==="#FFD700"&&(e+=5)}return e}function ki(t,e,i,o,r){return`<div id="duel-row-${o}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${e}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${t.map((n,a)=>{const d=a<t.length-1?Si(n,t[a+1]):null,l=!d||d==="#ff3333"||d==="#cc2222",s=d==="#00ff88"?"+10":d==="#FFD700"?"+5":"";return mn(n,r),n.stadiumBonus||r&&(r.club_id&&String(n.club_id)===String(r.club_id)||r.country_code&&(n.country_code,r.country_code)),`
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
    </div>`}async function qr(t,e){const{state:i}=e,o=i.params||{},r=o.matchMode||"vs_ai_easy",n=r==="solo",a=r==="ranked_ai",d=o.soloLevel||1,l=r.replace("vs_ai_",""),s=r;let c=null;if(n){const{data:x}=await v.from("solo_levels").select("*").eq("level_number",d).maybeSingle();c=x||{level_number:d,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500}}const f=o.rankedData||null,y=o.presetSetup||null;async function g({deckId:x,formation:m,starters:b,subsRaw:u,gcCardsEnriched:w,gcDefs:h,stadiumDef:$}){try{let p=Fi(b,m);$&&(p=yi(p,$),vi(u,$));let z=null;if(a){const V=Dr(p),{jaune:J,vert:oe}=Pr(p,m),L=.9+Math.random()*.2;z={target_note_avg:Math.max(1,Math.round(V*L/16)),nb_liens_jaune:J,nb_liens_vert:oe,nb_joueurs_stade:$?3:0}}const S=n?await jo(m,c):a?await jo(m,z):await Br(m,l),M=S.lines||S,R=async V=>{try{const J=s==="vs_ai_club"||s==="solo"||s==="ranked_ai"?"club":s,{data:oe,error:L}=await v.from("matches").insert({home_id:i.profile.id,away_id:null,mode:J,home_deck_id:x,status:"in_progress"}).select().single();if(L){console.error("[MatchIA] Erreur création match:",L),Mi(t,"⚠️","Impossible de créer le match ("+L.message+").","Retour",()=>e.navigate("home"));return}const _=S.stadiumDef||null;_&&M&&(yi(M,_),vi(S.subs||[],_));const G={gcDefs:h||[],matchId:oe==null?void 0:oe.id,mode:s,difficulty:l,formation:m,isSolo:n,soloLevel:d,soloLevelConfig:c,isRankedAI:a,rankedAIData:f,homeTeam:p,aiTeam:M,homeSubs:u,subsUsed:0,maxSubs:Math.min(u.length,3),aiSubs:S.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((S.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:S.gcCards||[],aiUsedGc:[],aiStadiumDef:_,homeScore:0,aiScore:0,gcCards:V,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Fr(t,G,e)}catch(J){console.error("[MatchIA] Exception launchMatch:",J),Mi(t,"⚠️","Erreur au lancement du match : "+J.message,"Retour",()=>e.navigate("home"))}};if(a&&y){R(y.gcCardsEnriched||[]);return}if(!w.length){R([]);return}zi(t,w,R)}catch(p){console.error("[MatchIA] Exception setup:",p),Mi(t,"⚠️","Erreur de préparation du match : "+p.message,"Retour",()=>e.navigate("home"))}}y?await g(y):await Li(t,e,r,g)}async function Br(t,e){var b;const{data:i}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:gn(t),subs:[],gcCards:[],stadiumDef:null};const o=Gt[t]||Gt["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},n=new Set;function a(u,w,h){var $,p;return n.add(u.id),{cardId:"ai-"+u.id+"-"+h,id:u.id,firstname:u.firstname,name:u.surname_real,country_code:u.country_code,club_id:u.club_id,job:u.job,job2:u.job2,note_g:Number(u.note_g)||0,note_d:Number(u.note_d)||0,note_m:Number(u.note_m)||0,note_a:Number(u.note_a)||0,rarity:u.rarity,skin:u.skin,hair:u.hair,hair_length:u.hair_length,face:u.face,clubName:(($=u.clubs)==null?void 0:$.encoded_name)||null,clubLogo:((p=u.clubs)==null?void 0:p.logo_url)||null,boost:0,used:!1,_line:w}}for(const u of["GK","DEF","MIL","ATT"]){const w=i.filter(S=>S.job===u&&!n.has(S.id)),h=i.filter(S=>S.job!==u&&!n.has(S.id)),$=[...w,...h],p=[];for(let S=0;S<o[u];S++){const M=$[S];M&&p.push(a(M,u,S))}const z=zt(p.length);p.forEach((S,M)=>{S._col=z[M]}),r[u]=p}const l=i.filter(u=>!n.has(u.id)).slice(0,5).map((u,w)=>a(u,u.job,100+w)),{data:s}=await v.from("gc_definitions").select("*").eq("is_active",!0),f=[...s||[]].sort(()=>Math.random()-.5).slice(0,3).map((u,w)=>({id:"ai-gc-"+w,gc_type:u.name,name:u.name,icon:"⚡",effect_type:u.effect_type,effect_params:u.effect_params||{}})),y=Object.values(r).flat(),g={};y.forEach(u=>{u.club_id&&(g[u.club_id]=(g[u.club_id]||0)+1)});const x=(b=Object.entries(g).sort((u,w)=>w[1]-u[1])[0])==null?void 0:b[0];let m=null;if(x){const{data:u}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",x).single();u&&(m={club_id:u.id,country_code:null,name:u.encoded_name+" Stadium",club:{encoded_name:u.encoded_name,logo_url:u.logo_url}})}return{lines:r,subs:l,gcCards:f,stadiumDef:m}}function Dr(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{const r=o._line||i,n=Number(r==="GK"?o.note_g:r==="DEF"?o.note_d:r==="MIL"?o.note_m:o.note_a)||0;e+=n+(o.boost||0)});return e}function Pr(t,e){const i={};for(const a of["GK","DEF","MIL","ATT"])(t[a]||[]).forEach((d,l)=>{i[`${a}${l+1}`]=d});const o=Go(e)||Ji[e]||[];let r=0,n=0;for(const[a,d]of o){const l=i[a],s=i[d];if(!l||!s)continue;const c=Si(l,s);c==="#00ff88"?n++:c==="#FFD700"&&r++}return{jaune:r,vert:n}}function Co(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function mi(t,e,i){if(i<=0||!t.length)return[];const o=[...t].sort((r,n)=>Math.abs(Co(r)-e)-Math.abs(Co(n)-e));return o.slice(0,Math.min(i,o.length))}async function jo(t,e){var oe,L;const i=Number(e==null?void 0:e.target_note_avg)||10,o=Number(e==null?void 0:e.nb_liens_jaune)||0,r=Number(e==null?void 0:e.nb_liens_vert)||0,n=Number(e==null?void 0:e.nb_joueurs_stade)||0,{data:a}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url,country_code)").eq("is_active",!0).limit(300);if(!a||a.length<16)return{lines:gn(t),subs:[],gcCards:[],stadiumDef:null};const d={};a.forEach(_=>{_.club_id&&(d[_.club_id]=(d[_.club_id]||0)+1)});const l=((oe=Object.entries(d).sort((_,G)=>G[1]-_[1])[0])==null?void 0:oe[0])||null,s=l?a.filter(_=>_.club_id===l):[],c=((L=s[0])==null?void 0:L.country_code)||null,f=c?a.filter(_=>_.country_code===c&&_.club_id!==l):[],y=Math.min(s.length,Math.max(2,r+1),16),g=Math.min(f.length,Math.max(0,o),16-y),x=[],m=new Set;mi(s,i,y).forEach(_=>{x.push(_),m.add(_.id)}),mi(f,i,g).forEach(_=>{x.push(_),m.add(_.id)});const b=Math.max(0,16-x.length),u=a.filter(_=>!m.has(_.id));mi(u,i,b).forEach(_=>{x.push(_),m.add(_.id)});const w=Gt[t]||Gt["4-4-2"],h={GK:[],DEF:[],MIL:[],ATT:[]},$=new Set;function p(_,G,N){var ce,ue;return $.add(_.id),{cardId:"ai-"+_.id+"-"+N,id:_.id,firstname:_.firstname,name:_.surname_real,country_code:_.country_code,club_id:_.club_id,job:_.job,job2:_.job2,note_g:Number(_.note_g)||0,note_d:Number(_.note_d)||0,note_m:Number(_.note_m)||0,note_a:Number(_.note_a)||0,rarity:_.rarity,skin:_.skin,hair:_.hair,hair_length:_.hair_length,face:_.face,clubName:((ce=_.clubs)==null?void 0:ce.encoded_name)||null,clubLogo:((ue=_.clubs)==null?void 0:ue.logo_url)||null,boost:0,used:!1,_line:G}}for(const _ of["GK","DEF","MIL","ATT"]){const G=x.filter(O=>O.job===_&&!$.has(O.id)),N=x.filter(O=>O.job!==_&&!$.has(O.id)),ce=[...G,...N],ue=[];for(let O=0;O<w[_];O++){const fe=ce[O];fe&&ue.push(p(fe,_,O))}const T=zt(ue.length);ue.forEach((O,fe)=>{O._col=T[fe]}),h[_]=ue}let z=x.filter(_=>!$.has(_.id));if(z.length<5){const _=a.filter(G=>!$.has(G.id)&&!z.some(N=>N.id===G.id));z=z.concat(mi(_,i,5-z.length))}const S=z.slice(0,5).map((_,G)=>p(_,_.job,100+G)),{data:M}=await v.from("gc_definitions").select("*").eq("is_active",!0),V=[...M||[]].sort(()=>Math.random()-.5).slice(0,3).map((_,G)=>({id:"ai-gc-"+G,gc_type:_.name,name:_.name,icon:"⚡",effect_type:_.effect_type,effect_params:_.effect_params||{}}));let J=null;if(n>0&&l){const{data:_}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",l).single();_&&(J={club_id:_.id,country_code:null,name:_.encoded_name+" Stadium",club:{encoded_name:_.encoded_name,logo_url:_.logo_url}})}return{lines:h,subs:S,gcCards:V,stadiumDef:J}}function gn(t){const e=Gt[t]||Gt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let r=0;for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let l=0;l<e[n];l++){const s=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+r,id:"fake-"+r,firstname:"IA",name:o[r%o.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?s:2,note_d:n==="DEF"?s:2,note_m:n==="MIL"?s:2,note_a:n==="ATT"?s:2,rarity:"normal",boost:0,used:!1,_line:n}),r++}const d=zt(a.length);a.forEach((l,s)=>{l._col=d[s]}),i[n]=a}return i}function Fr(t,e,i){var r;Wo("/sounds/match-opening.mp3",.3);const o=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const n=t.querySelector(".opponent-preview-wrap"),a=t.querySelector("#opponent-swipe-zone");if(!n||!a)return;const d=a.clientWidth>=900,l=Math.max(200,a.clientHeight-(d?8:40)),s=Math.max(200,a.clientWidth-(d?8:16)),c=d?null:Math.round(Math.max(44,Math.round(s*.168))*.55);n.innerHTML=ri(e.aiTeam,e.formation,null,[],s,l,[],c),n.style.cssText=`width:${s}px;height:${l}px;overflow:hidden;flex-shrink:0`;const f=n.querySelector("svg");f&&(f.style.cssText="display:block;width:100%;height:100%",f.setAttribute("preserveAspectRatio",d?"xMidYMid meet":"none"))})),setTimeout(()=>Rr(t,e,i),5e3)}const Ve=t=>un(t);function Rr(t,e,i){const o=e.homeTeam.MIL||[],r=e.aiTeam.MIL||[],n=e.stadiumDef||null,a=e.aiStadiumDef||null,d=xt(o,n)+yt(o),l=xt(r,a)+yt(r),s=d>=l;t.innerHTML=`
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

    ${ki(o,e.clubName,"#D4A017","home",n)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${ki(r,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const c=()=>{const x=(m,b)=>t.querySelectorAll(m).forEach((u,w)=>{setTimeout(()=>{u.style.opacity="1",u.style.transform="translateY(0) scale(1)"},b+w*90)});x(".duel-card-home",150),x(".duel-card-ai",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((m,b)=>{setTimeout(()=>{m.style.opacity="1"},b*70)}),900),setTimeout(()=>{const m=t.querySelector("#vs-label");m&&(m.style.opacity="1",m.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(b=>b.style.opacity="1")},1250),setTimeout(()=>{f("score-home",d,800),f("score-ai",l,800)},1500)};function f(x,m,b){const u=document.getElementById(x);if(!u)return;const w=performance.now(),h=$=>{const p=Math.min(1,($-w)/b);u.textContent=Math.round(m*(1-Math.pow(1-p,3))),p<1?requestAnimationFrame(h):u.textContent=m};requestAnimationFrame(h)}requestAnimationFrame(c),e.attacker=s?"home":"ai";const y=s?Ho():null;s&&(e.boostCard={value:y}),e.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(x=>Ve(x)),aiPlayers:r.map(x=>Ve(x)),homeTotal:d,aiTotal:l,text:`Duel milieu : ${e.clubName} ${d} – ${l} IA → ${s?e.clubName+" attaque":"IA attaque"}`});const g=()=>{e.phase=e.attacker==="home"?"attack":"ai-attack",Ie(t,e,i),e.attacker==="ai"&&setTimeout(()=>po(t,e,i),800)};setTimeout(()=>{const x=document.getElementById("score-home"),m=document.getElementById("score-ai"),b=document.getElementById(s?"duel-row-home":"duel-row-ai"),u=document.getElementById(s?"duel-row-ai":"duel-row-home"),w=s?x:m,h=s?m:x;w&&(w.style.fontSize="80px",w.style.color=s?"#FFD700":"#ff6b6b",w.style.animation="duelPulse .5s ease"+(s?", duelGlow 1.5s ease infinite .5s":"")),h&&(h.style.opacity="0.25"),setTimeout(()=>{b&&(b.style.transformOrigin="center",b.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",b.style.zIndex="5"),setTimeout(()=>{var p;const $=document.getElementById("duel-shock");if($){const z=(p=u||b)==null?void 0:p.getBoundingClientRect(),S=t.querySelector(".match-screen").getBoundingClientRect();z&&($.style.top=z.top-S.top+z.height/2+"px"),$.style.animation="shockwave .5s ease-out forwards"}u&&(u.style.transformOrigin="center",u.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var p;const $=document.getElementById("duel-finale");$&&($.innerHTML=`
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
          </button>`,$.style.transition="opacity .45s ease",$.style.opacity="1",$.style.pointerEvents="auto",(p=document.getElementById("start-match-btn"))==null||p.addEventListener("click",g))},600)},700)},2800)}function Ie(t,e,i){var V,J,oe,L,_,G,N,ce,ue;const o=e.selected.map(T=>T.cardId),r=e.usedSubIds||[],n=e.homeSubs.filter(T=>!r.includes(T.cardId)),d=Object.values(e.homeTeam).flat().filter(T=>T.used).length>0&&n.length>0&&e.subsUsed<e.maxSubs,l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(T=>!T.used),s=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(T=>!T.used),c=Ht(e.aiTeam),f=l.length===0&&s.length===0&&!c,y=(e.homeTeam.DEF||[]).filter(T=>!T.used),g=(e.homeTeam.GK||[]).filter(T=>!T.used);let x=[];e.phase==="attack"&&l.length===0&&(c?(x=y.map(T=>T.cardId),y.length===0&&(x=x.concat(g.map(T=>T.cardId)))):f&&(x=[...y,...g].map(T=>T.cardId))),e.log[e.log.length-1];const m=e.phase==="ai-attack"||e.phase==="ai-defense",b=e.phase==="attack",u=e.phase==="defense",w=e.phase==="finished",$=(e.homeSubs||[]).filter(T=>!(e.usedSubIds||[]).includes(T.cardId)).length>0&&e.subsUsed<e.maxSubs,p=b&&l.length===0&&x.length===0&&!$,z=e.gcCards.filter(T=>!e.usedGc.includes(T.id)),S=e.boostCard&&!e.boostUsed;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.innerHTML=`
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
      ${(()=>{if(e.phase==="defense"&&e.pendingAttack){const O=e.pendingAttack;let fe="";if(e.selected.length>0){const ge=e.selected.map(de=>({...(e.homeTeam[de._role]||[]).find(K=>K.cardId===de.cardId)||de,_line:de._role})),be=ai(ge,e.modifiers.home,e.formation);fe=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${e.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${Qe(ge.map(de=>({...de,used:!1})),"#3a7bd5",be.total,"defense",e.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${Qe((O.players||[]).map(ge=>({...ge,used:!1})),"#ff6b6b",O.total,"attack",e.formation)}</div>
            ${fe}
          </div>`}if(e.phase==="ai-defense"&&e.pendingAttack){const O=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${Qe((O.players||[]).map(fe=>({...fe,used:!1})),"#00ff88",O.total,"attack",e.formation)}</div>
          </div>`}if(e.phase==="attack"&&e.selected.length>0){const O=e.selected.map(ge=>{const be=(e.homeTeam[ge._role]||[]).find(j=>j.cardId===ge.cardId)||ge,de=["GK","DEF"].includes(ge._role);return{...be,_line:ge._role,...de?{note_a:Math.max(1,Number(be.note_a)||0)}:{}}}),fe=si(O,e.modifiers.home,e.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${e.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(O.map(ge=>({...ge,used:!1})),"#FFD700",fe.total,"attack",e.formation)}</div>
          </div>`}const T=e.log[e.log.length-1];return T?'<div style="padding:2px 4px">'+fn(T)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${e.log.length})
    </button>

    ${(()=>{const T=window.innerWidth>=700,O=(Y,P,W)=>{var ke,Ee;const D=(e.gcDefs||[]).find(Le=>Le.name===Y.gc_type),H=(D==null?void 0:D.name)||Y.gc_type,ae=(D==null?void 0:D.effect)||((ke=Oe[Y.gc_type])==null?void 0:ke.desc)||"",le=D!=null&&D.image_url?`/icons/${D.image_url}`:null,xe=((Ee=Oe[Y.gc_type])==null?void 0:Ee.icon)||"⚡";return`<div class="gc-mini" data-gc-id="${Y.id}" data-gc-type="${Y.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${dt(H,le,xe,ae,{width:P})}
        </div>`},fe=(Y,P)=>{var W;return`<div id="boost-card"
          style="box-sizing:border-box;width:${Y}px;height:${P}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(P*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(P*.2)}px">⚡</div>
            <div style="font-size:${Math.round(P*.09)}px;color:#000;font-weight:900">+${(W=e.boostCard)==null?void 0:W.value}</div>
          </div>`},ge=(Y,P)=>P?fe(95,162):O(Y,95),be=(Y,P)=>P?fe(53,90):O(Y,53),de=T?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",j=w?`<button id="btn-results" style="${de};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:m?`<div style="${de};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:p?`<button id="btn-pass" style="${de};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:b?`<button id="btn-action" style="${de};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${e.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:u?`<button id="btn-action" style="${de};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${e.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${de};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,K=b||u?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${e.selected.length}/3 sélectionné(s)</div>`:"",re=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${T?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(Y=>`<div class="sub-btn-col" data-sub-id="${Y.cardId}" style="cursor:pointer;flex-shrink:0">${wt(Y,76,100)}</div>`).join("")}
      </div>`,ee=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ri(e.homeTeam,e.formation,e.phase,o,T?1300:Tt(),T?600:Nt(),x)}
        </div>
      </div>`;return T?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${re}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${ee}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${j}${K}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${z.map(Y=>ge(Y,!1)).join("")}
            ${S?ge(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ri(e.homeTeam,e.formation,e.phase,o,T?1300:Tt(),T?600:Nt(),x)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${z.map(Y=>be(Y,!1)).join("")}
            ${S?be(null,!0):""}
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
          <div>${j}${K}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${e.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...e.log].reverse().map(T=>{var O,fe,ge;if(T.type==="duel"){const be=T.isGoal,de=T.homeScored?"#FFD700":be?"#ff6b6b":"rgba(255,255,255,0.3)",j=T.homeScored?"⚽ BUT !":be?"⚽ BUT IA !":(O=T.homePlayers)!=null&&O.length?"⚔️ Attaque":"🛡️ Défense",K=(T.homeTotal??0)>=(T.aiTotal??0);return`<div style="padding:8px;border-radius:8px;background:${be?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${de};margin-bottom:4px">
                <div style="font-size:9px;color:${de};letter-spacing:1px;margin-bottom:6px;font-weight:700;text-transform:uppercase;text-align:center">${j}</div>
                <div style="display:flex;align-items:center;justify-content:center;gap:10px">
                  ${(fe=T.aiPlayers)!=null&&fe.length?`<div style="flex:1;display:flex;justify-content:flex-end;opacity:0.75">${Qe(T.aiPlayers,"#ff6b6b",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                  <div style="flex-shrink:0;display:flex;align-items:center;gap:6px">
                    <span style="font-size:16px;font-weight:900;color:${K?"#e03030":"#22c55e"}">${T.aiTotal??"–"}</span>
                    <span style="font-size:9px;color:rgba(255,255,255,0.3)">VS</span>
                    <span style="font-size:16px;font-weight:900;color:${K?"#22c55e":"#e03030"}">${T.homeTotal??"–"}</span>
                  </div>
                  ${(ge=T.homePlayers)!=null&&ge.length?`<div style="flex:1;display:flex;justify-content:flex-start">${Qe(T.homePlayers,"rgba(255,255,255,0.7)",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                </div>
              </div>`}return T.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${T.outPlayer?wt({...T.outPlayer,used:!0,_line:T.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${T.inPlayer?wt({...T.inPlayer,_line:T.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:T.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${T.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${T.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function M(){const T=t.querySelector(".match-screen");if(!T)return;const O=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);T.style.bottom="auto",T.style.height=O+"px",T.style.minHeight=O+"px",T.style.maxHeight=O+"px",T.style.overflow="hidden";const fe=t.querySelector("#mobile-action-bar"),ge=t.querySelector("#mobile-play-area");fe&&ge&&(ge.style.paddingBottom=fe.offsetHeight+"px")}if(M(),setTimeout(M,120),setTimeout(M,400),setTimeout(M,1e3),e._vvBound||(e._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",M),window.visualViewport.addEventListener("scroll",M)),window.addEventListener("resize",M)),function(){const O=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!O)return;const fe=O.closest("#match-terrain-wrap");fe&&(fe.style.cssText="position:relative;width:100%;height:100%;padding:0"),O.removeAttribute("width"),O.removeAttribute("height"),O.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",O.setAttribute("preserveAspectRatio","xMidYMid meet")}(),e._resizeBound||(e._resizeBound=!0,window.addEventListener("resize",()=>{const T=t.querySelector(".terrain-wrapper svg");if(T){const O=T.closest("#match-terrain-wrap");O&&(O.style.cssText="position:relative;width:100%;height:100%;padding:0"),T.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),e.phase==="attack"||e.phase==="defense"){let T=!1,O=30;const fe=()=>document.getElementById("match-timer"),ge=()=>{const be=fe();if(!be)return;const de=String(Math.floor(O/60)).padStart(2,"0"),j=String(O%60).padStart(2,"0");be.textContent=` ${de}:${j}`,be.style.color=T?"#ff2222":"#ff9500",be.style.fontWeight="900"};ge(),e._timerInt=setInterval(()=>{if(O--,O<0)if(!T)T=!0,O=15,ge(),Jo("/sounds/timer-urgent.mp3",.6);else{clearInterval(e._timerInt),e._timerInt=null,Ke(),e.homeScore=0,e.aiScore=3;const be=document.createElement("div");be.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",be.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(be),setTimeout(()=>{be.remove(),vt(t,e,i)},2500)}else ge()},1e3)}(V=document.getElementById("match-quit"))==null||V.addEventListener("click",()=>{it(t),confirm("Abandonner ? Résultat : défaite 3-0")&&(e.homeScore=0,e.aiScore=3,vt(t,e,i))}),(J=document.getElementById("view-ai"))==null||J.addEventListener("click",()=>Qr(e,i)),(oe=document.getElementById("toggle-history"))==null||oe.addEventListener("click",()=>{var T;(T=document.getElementById("match-history-panel"))==null||T.classList.add("open")}),(L=document.getElementById("close-history"))==null||L.addEventListener("click",()=>{var T;(T=document.getElementById("match-history-panel"))==null||T.classList.remove("open")}),(_=document.getElementById("btn-action"))==null||_.addEventListener("click",()=>{e.selected.length!==0&&(b?Or(t,e,i):u&&Gr(t,e,i))}),(G=document.getElementById("btn-results"))==null||G.addEventListener("click",()=>vt(t,e,i)),(N=document.getElementById("btn-pass"))==null||N.addEventListener("click",()=>{if(e.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Hi(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),vt(t,e,i);return}e.phase="ai-attack",Ie(t,e,i),setTimeout(()=>po(t,e,i),800)}),t.querySelectorAll(".match-slot-hit").forEach(T=>{T.addEventListener("click",()=>Nr(T,e,t,i))}),t.querySelectorAll(".match-used-hit").forEach(T=>{T.addEventListener("click",()=>Bi(t,e,i,null,T.dataset.cardId))}),t.querySelectorAll(".gc-mini").forEach(T=>{b?T.addEventListener("click",()=>Yr(T.dataset.gcId,T.dataset.gcType,t,e,i)):(T.style.opacity="0.35",T.style.cursor="default",T.addEventListener("click",()=>Et("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(ce=document.getElementById("boost-card"))==null||ce.addEventListener("click",()=>Xr(t,e,i)),t.querySelectorAll(".sub-btn-col").forEach(T=>{T.addEventListener("click",()=>Bi(t,e,i,T.dataset.subId))}),(ue=document.getElementById("sub-btn-main"))==null||ue.addEventListener("click",()=>Bi(t,e,i))}function Nr(t,e,i,o){const r=t.dataset.cardId,n=t.dataset.role,a=e.selected.findIndex(d=>d.cardId===r);if(a!==-1)e.selected.splice(a,1);else{if(e.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const d=(e.homeTeam[n]||[]).find(l=>l.cardId===r);if(d)e.selected.push({...d,_role:n,_line:n});else{const l=Object.keys(e.homeTeam||{}).map(s=>`${s}:${(e.homeTeam[s]||[]).length}`).join(" ");o.toast(`Sélection impossible (rôle="${n}" introuvable dans homeTeam[${l}])`,"error"),console.error("[MatchIA] toggleSelect: joueur introuvable",{cardId:r,role:n,homeTeam:e.homeTeam});return}}Ie(i,e,o)}function co(t,e,i){t.matchId&&v.from("matches").update({last_player_id:i}).eq("id",t.matchId).then(()=>{})}function Or(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),co(e,i,i.state.profile.id);const o=e.selected.map(n=>{const a=(e.homeTeam[n._role]||[]).find(l=>l.cardId===n.cardId)||n,d=["GK","DEF"].includes(n._role);return{...a,_line:n._role,...d?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),r=si(o,e.modifiers.home,e.formation);e.pendingAttack={...r,players:[...o],side:"home"},e.selected.forEach(n=>{const a=(e.homeTeam[n._role]||[]).find(d=>d.cardId===n.cardId);a&&(a.used=!0)}),e.log.push({text:`⚔️ Vous attaquez : ${r.total} (base ${r.base}${r.links?` +${r.links} liens`:""}) — ${e.selected.map(n=>n.name).join(", ")}`,type:"info"}),e.selected=[],e.modifiers.home={},e.phase="ai-defense",Ie(t,e,i),setTimeout(()=>Vr(t,e,i),1200)}function Gr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),co(e,i,i.state.profile.id);const o=e.stadiumDef||null,r=e.selected.map(l=>{const s=(e.homeTeam[l._role]||[]).find(f=>f.cardId===l.cardId)||l,c=s.stadiumBonus||o&&(o.club_id&&String(s.club_id)===String(o.club_id)||o.country_code&&s.country_code===o.country_code)||!1;return{...s,_line:l._role,stadiumBonus:c}}),n=ai(r,e.modifiers.home,e.formation);e.selected.forEach(l=>{const s=(e.homeTeam[l._role]||[]).find(c=>c.cardId===l.cardId);s&&(s.used=!0)});const a=Qi(e.pendingAttack.total,n.total,e.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(e.pendingAttack.players||[]).map(l=>Ve(l)),homePlayers:e.selected.map(l=>{const s=(e.homeTeam[l._role]||[]).find(c=>c.cardId===l.cardId)||l;return Ve(s)}),homeTotal:n.total,aiTotal:e.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)d.text="🛡️ Bouclier ! But annulé.",e.log.push(d);else if(a.goal){e.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${e.pendingAttack.total} > ${n.total})`,e.log.push(d),e.selected=[],e.modifiers.home={},e.pendingAttack=null,Ie(t,e,i),Ze(d.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${n.total} ≥ ${e.pendingAttack.total})`,e.log.push(d);e.selected=[],e.modifiers.home={},e.pendingAttack=null,Mt(t,e,i,"home-attack")}function Hr(t){if(t.aiSubsUsed>=t.aiMaxSubs)return;const e=Object.values(t.aiTeam).flat().filter(l=>l.used);if(!e.length)return;const i=(t.aiSubs||[]).filter(l=>!t.aiUsedSubIds.includes(l.cardId));if(!i.length)return;const o=e[Math.floor(Math.random()*e.length)],r=i.find(l=>l.job===o.job)||i[0],n={...r,used:!1,_line:o._line,_col:o._col},a=t.aiTeam[o._line],d=a.findIndex(l=>l.cardId===o.cardId);d!==-1&&(a[d]=n),t.aiUsedSubIds.push(r.cardId),t.aiSubsUsed++,t.log.push({text:`🔄 IA : ${r.firstname} ${r.name} remplace ${o.firstname} ${o.name}`,type:"info"})}function Ur(t,e){const i=t.effect_params||{},o=i.value||1,r=i.count||1,n=i.roles||[],a=i.target||"home";switch(t.effect_type){case"BOOST_STAT":{const l=Object.values(e.aiTeam).flat().filter(s=>!s.used&&(!n.length||n.includes(s._line))).sort(()=>Math.random()-.5).slice(0,r);l.forEach(s=>{s.boost=(s.boost||0)+o}),l.length&&e.log.push({text:`⚡ IA : +${o} sur ${l.length} joueur(s)`,type:"gc"});break}case"DEBUFF_STAT":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(c=>!c.used&&(!n.length||n.includes(c._line))).sort(()=>Math.random()-.5).slice(0,r);s.forEach(c=>{c.boost=(c.boost||0)-o}),s.length&&e.log.push({text:`🎯 IA : -${o} sur ${s.length} joueur(s)${a!=="ai"?" (vous)":""}`,type:"gc"});break}case"GRAY_PLAYER":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(c=>!c.used&&(!n.length||n.includes(c._line))).sort(()=>Math.random()-.5).slice(0,r);s.forEach(c=>{c.used=!0}),s.length&&e.log.push({text:`❌ IA : ${s.length} joueur(s)${a!=="ai"?" (vous)":""} exclu(s)`,type:"gc"});break}case"REVIVE_PLAYER":{const l=Object.values(e.aiTeam).flat().filter(s=>s.used).sort(()=>Math.random()-.5).slice(0,r);l.forEach(s=>{s.used=!1}),l.length&&e.log.push({text:`💫 IA : ${l.length} joueur(s) ressuscité(s)`,type:"gc"});break}case"REMOVE_GOAL":e.homeScore>0&&(e.homeScore--,e.log.push({text:"🚫 IA : votre dernier but est annulé !",type:"gc"}));break;case"ADD_GOAL_DRAW":e.homeScore===e.aiScore&&(e.aiScore++,e.log.push({text:"🎯 IA : but bonus (match nul) !",type:"gc"}));break;case"ADD_SUB":e.aiMaxSubs=(e.aiMaxSubs||3)+o,e.log.push({text:`🔄 IA : +${o} remplacement(s)`,type:"gc"});break}}function Kr(t){var o;if(!((o=t.aiGcCards)!=null&&o.length))return;const e=t.aiGcCards.filter(r=>!t.aiUsedGc.includes(r.id));if(!e.length||Math.random()>.5)return;const i=e[Math.floor(Math.random()*e.length)];t.aiUsedGc.push(i.id),i.effect_type?Ur(i,t):t.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function po(t,e,i){co(e,i,null),Hr(e),Kr(e);let o=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(c=>!c.used),r=!1;if(!o.length){const c=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(y=>!y.used),f=Ht(e.homeTeam);if(f||c.length===0){const y=(e.aiTeam.DEF||[]).filter(x=>!x.used),g=(e.aiTeam.GK||[]).filter(x=>!x.used);o=f?y.length?y:g:[...y,...g],r=!0}}const n=Uo(o,"attack",e.difficulty);if(!n.length){Ui(t,e,i);return}r&&n.forEach(c=>{c._line=c._line||c.job,c.note_a=Math.max(1,Number(c.note_a)||0)});const a=si(n,e.modifiers.ai,e.formation);e.pendingAttack={...a,players:n,side:"ai"},n.forEach(c=>{c.used=!0}),e.log.push({text:`🤖 IA attaque : ${a.total} (${n.map(c=>c.name).join(", ")})`,type:"info"}),e.modifiers.ai={};const d=[...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(c=>!c.used),s=(e.homeSubs||[]).filter(c=>!(e.usedSubIds||[]).includes(c.cardId)).length>0&&e.subsUsed<e.maxSubs;if(d.length===0&&!s){if(n.length===1&&(n[0]._line==="GK"||n[0].job==="GK")&&Ht(e.homeTeam)&&e.homeScore===e.aiScore){e.aiScore++,$i(t,e,i,"ai",n[0]);return}e.aiScore++;const f={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:n.map(y=>Ve(y)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};e.log.push(f),e.pendingAttack=null,Ie(t,e,i),Ze(f.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}e.phase="defense",Ie(t,e,i)}function Vr(t,e,i){var s,c;const o=[...e.aiTeam.GK||[],...e.aiTeam.DEF||[],...e.aiTeam.MIL||[]],r=Uo(o,"defense",e.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(e.aiTeam[f]||[]).filter(y=>!y.used)).length){const f=((s=e.pendingAttack)==null?void 0:s.players)||[];if(f.length===1&&(f[0]._line==="GK"||f[0].job==="GK")&&e.homeScore===e.aiScore){e.homeScore++,$i(t,e,i,"home",f[0]);return}e.homeScore++;const g={type:"duel",isGoal:!0,homeScored:!0,homePlayers:f.map(x=>Ve(x)),homeTotal:((c=e.pendingAttack)==null?void 0:c.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};e.log.push(g),e.modifiers.ai={},e.pendingAttack=null,Ie(t,e,i),Ze(g.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}const a=r.length>0?ai(r,e.modifiers.ai,e.formation).total:0;r.forEach(f=>{f.used=!0});const d=Qi(e.pendingAttack.total,a,e.modifiers.ai),l={type:"duel",title:"Attaque",homePlayers:(e.pendingAttack.players||[]).map(f=>Ve(f)),aiPlayers:r.map(f=>Ve(f)),homeTotal:e.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(d.shielded)l.text="🛡️ Bouclier IA !",e.log.push(l);else if(d.goal){e.homeScore++,l.isGoal=!0,l.homeScored=!0,l.text=`⚽ BUT ! (${e.pendingAttack.total} > ${a})`,e.log.push(l),e.modifiers.ai={},e.pendingAttack=null,Ie(t,e,i),Ze(l.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}else l.text=`🧤 IA défend (${a} ≥ ${e.pendingAttack.total})`,e.log.push(l);e.modifiers.ai={},e.pendingAttack=null,Mt(t,e,i,"ai-attack")}function Mt(t,e,i,o){if(e.round++,!bn(t,e,i)){if(uo(e)){vt(t,e,i);return}if(o==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(a=>!a.used))){Ui(t,e,i);return}e.phase="attack",Ie(t,e,i)}else{if(!["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(a=>!a.used))){Ui(t,e,i);return}e.phase="ai-attack",Ie(t,e,i),setTimeout(()=>po(t,e,i),800)}}}function Ht(t){return!["GK","DEF","MIL","ATT"].some(e=>(t[e]||[]).some(i=>!i.used))}function qo(t){const e=(t.GK||[]).some(o=>!o.used),i=["DEF","MIL","ATT"].some(o=>(t[o]||[]).some(r=>!r.used));return e&&!i}function bn(t,e,i){if(e.homeScore!==e.aiScore)return!1;if(qo(e.homeTeam)&&Ht(e.aiTeam)){const o=(e.homeTeam.GK||[]).find(r=>!r.used);return o?(o.used=!0,e.homeScore++,$i(t,e,i,"home",o),!0):!1}if(qo(e.aiTeam)&&Ht(e.homeTeam)){const o=(e.aiTeam.GK||[]).find(r=>!r.used);return o?(o.used=!0,e.aiScore++,$i(t,e,i,"ai",o),!0):!1}return!1}function $i(t,e,i,o,r){e.log.push({type:"duel",isGoal:!0,homeScored:o==="home",homePlayers:o==="home"?[Ve(r)]:[],aiPlayers:o==="ai"?[Ve(r)]:[],text:`⚽ DERNIER CORNER — Le gardien ${o==="home"?"":"adverse "}marque !`});const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(n);const a=(d,l)=>new Promise(s=>{n.innerHTML=`<div style="font-size:32px;font-weight:900;color:${l};letter-spacing:2px;animation:lcFade 1.4s ease both">${d}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(s,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),n.remove(),e.pendingAttack=null,Ie(t,e,i),Ze([Ve(r)],e.homeScore,e.aiScore,o==="home",()=>{if(uo(e)){vt(t,e,i);return}Mt(t,e,i,o==="home"?"ai-attack":"home-attack")})))()}function uo(t){const e=["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(r=>!r.used)),i=["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(r=>!r.used));return!e&&!i}function Hi(t,e){return!(["MIL","ATT"].some(r=>(t[r]||[]).some(n=>!n.used))||Ht(e)||!["MIL","ATT"].some(r=>(e[r]||[]).some(n=>!n.used)))}function Ui(t,e,i){if(!bn(t,e,i)){if(uo(e)){vt(t,e,i);return}if(Hi(e.homeTeam,e.aiTeam)&&Hi(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),vt(t,e,i);return}e.phase="attack",Ie(t,e,i)}}function Bi(t,e,i,o=null,r=null){var g,x;if(e.phase!=="attack"){Et("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(e.usedSubIds||(e.usedSubIds=[]),e.subsUsed>=e.maxSubs){Et(`Maximum ${e.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const n=Object.entries(e.homeTeam).flatMap(([m,b])=>(b||[]).filter(u=>u.used).map(u=>({...u,_line:u._line||m}))),a=e.homeSubs.filter(m=>!e.usedSubIds.includes(m.cardId));if(!n.length){Et("Aucun joueur utilisé à remplacer");return}if(!a.length){Et("Aucun remplaçant disponible");return}let d=Math.max(0,n.findIndex(m=>m.cardId===r));const l=((g=n[d])==null?void 0:g._line)||((x=n[d])==null?void 0:x.job);let s=o?Math.max(0,a.findIndex(m=>m.cardId===o)):Math.max(0,a.findIndex(m=>m.job===l)),c=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function y(){var p,z,S,M,R,V;const m=n[d],b=a[s],u=Math.min(130,Math.round((window.innerWidth-90)/2)),w=Math.round(u*1.35),h=J=>`background:rgba(255,255,255,0.12);border:none;color:${J?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${J?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${e.subsUsed}/${e.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${h(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${b?wt({...b,used:!1,boost:0},u,w):"<div>—</div>"}</div>
        <button id="in-down" style="${h(s>=a.length-1)}" ${s>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${h(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${m?wt({...m,used:!1,boost:0},u,w):"<div>—</div>"}</div>
        <button id="out-down" style="${h(d>=n.length-1)}" ${d>=n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${n.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(p=f.querySelector("#sub-close"))==null||p.addEventListener("click",()=>f.remove()),(z=f.querySelector("#out-up"))==null||z.addEventListener("click",()=>{d>0&&(d--,y())}),(S=f.querySelector("#out-down"))==null||S.addEventListener("click",()=>{d<n.length-1&&(d++,y())}),(M=f.querySelector("#in-up"))==null||M.addEventListener("click",()=>{s>0&&(s--,y())}),(R=f.querySelector("#in-down"))==null||R.addEventListener("click",()=>{s<a.length-1&&(s++,y())});const $=(J,oe,L,_)=>{const G=f.querySelector("#"+J);if(!G)return;let N=0;G.addEventListener("touchstart",ce=>{N=ce.touches[0].clientY},{passive:!0}),G.addEventListener("touchend",ce=>{const ue=ce.changedTouches[0].clientY-N;if(Math.abs(ue)<30)return;const T=oe();ue<0&&T<_-1?(L(T+1),y()):ue>0&&T>0&&(L(T-1),y())},{passive:!0})};$("in-panel",()=>s,J=>s=J,a.length),$("out-panel",()=>d,J=>d=J,n.length),(V=f.querySelector("#sub-confirm"))==null||V.addEventListener("click",J=>{if(J.preventDefault(),J.stopPropagation(),c)return;c=!0;const oe=n[d],L=a[s];if(!oe||!L)return;let _=null,G=-1;for(const[ce,ue]of Object.entries(e.homeTeam)){const T=(ue||[]).findIndex(O=>O.cardId===oe.cardId);if(T!==-1){_=ce,G=T;break}}if(G===-1||!_){Et("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const N={...L,_line:_,_col:oe._col||0,used:!1,boost:0};e.homeTeam[_].splice(G,1,N),e.usedSubIds||(e.usedSubIds=[]),e.usedSubIds.push(L.cardId),e.subsUsed++,e.selected=[],e.log.push({type:"sub",subSide:"home",clubName:e.clubName,outPlayer:{name:oe.name,firstname:oe.firstname,note:jt(oe,_),portrait:Ct(oe),job:oe.job,country_code:oe.country_code,rarity:oe.rarity,clubName:oe.clubName,clubLogo:oe.clubLogo},inPlayer:{name:L.name,firstname:L.firstname,note:jt(L,_),portrait:Ct(L),job:L.job,country_code:L.country_code,rarity:L.rarity,clubName:L.clubName,clubLogo:L.clubLogo},text:`🔄 ${L.firstname} ${L.name} remplace ${oe.firstname} ${oe.name}`}),f.remove(),jr(oe,L,()=>Ie(t,e,i))})}document.body.appendChild(f),y()}function Yr(t,e,i,o,r){var y,g;const n=(o.gcDefs||[]).find(x=>x.name===e),a=Oe[e]||{icon:"⚡",desc:"Carte spéciale."},d=(n==null?void 0:n.name)||e,l=(n==null?void 0:n.effect)||a.desc,s=n!=null&&n.image_url?`/icons/${n.image_url}`:null,c=a.icon||"⚡",f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",f.innerHTML=`
    ${dt(d,s,c,l,{width:190})}
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(f),(y=f.querySelector("#gc-back"))==null||y.addEventListener("click",()=>f.remove()),(g=f.querySelector("#gc-use"))==null||g.addEventListener("click",()=>{f.remove(),Jr(t,e,i,o,r)})}function gi(t,e,i,o,r,n){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let d=[];function l(){var s,c;a.innerHTML=`
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
    </div>`,(s=a.querySelector("#gc-picker-close"))==null||s.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const y=f.dataset.cid,g=t.find(m=>m.cardId===y);if(!g)return;const x=d.findIndex(m=>m.cardId===y);x>-1?d.splice(x,1):d.length<e&&d.push(g),l()})}),(c=a.querySelector("#gc-picker-confirm"))==null||c.addEventListener("click",()=>{a.remove(),n(d)})}l(),document.body.appendChild(a)}const Wr={BOOST_STAT:({value:t=1,count:e=1,roles:i=[]},o,r,n)=>{const a=Object.entries(o.homeTeam).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,l])=>l.filter(s=>!s.used).map(s=>({...s,_line:d})));return a.length?(gi(a,e,`Choisir ${e} joueur(s) à booster (+${t})`,r,o,d=>{d.forEach(l=>{const s=(o.homeTeam[l._line]||[]).find(c=>c.cardId===l.cardId);s&&(s.boost=(s.boost||0)+t,o.log.push({text:`⚡ +${t} sur ${s.name}`,type:"info"}))}),Ie(r,o,n)}),!0):(o.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ie(r,o,n),!0)},DEBUFF_STAT:({value:t=1,count:e=1,roles:i=[],target:o="ai"},r,n,a)=>{const d=o==="home"?r.homeTeam:r.aiTeam,l=o==="ai"?"adverse":"allié",s=Object.entries(d).filter(([c])=>!i.length||i.includes(c)).flatMap(([c,f])=>f.filter(y=>!y.used).map(y=>({...y,_line:c})));return s.length?(gi(s,e,`Choisir ${e} joueur(s) ${l}(s) à débuffer (-${t})`,n,r,c=>{c.forEach(f=>{const g=((o==="home"?r.homeTeam:r.aiTeam)[f._line]||[]).find(x=>x.cardId===f.cardId);g&&(g.boost=(g.boost||0)-t,r.log.push({text:`🎯 -${t} sur ${g.name}${o==="ai"?" (IA)":""}`,type:"info"}))}),Ie(n,r,a)}),!0):(r.log.push({text:`🎯 Aucun joueur ${l} disponible`,type:"info"}),Ie(n,r,a),!0)},GRAY_PLAYER:({count:t=1,roles:e=[],target:i="ai"},o,r,n)=>{const a=i==="home"?o.homeTeam:o.aiTeam,d=i==="ai"?"adverse":"allié",l=Object.entries(a).filter(([s])=>!e.length||e.includes(s)).flatMap(([s,c])=>c.filter(f=>!f.used).map(f=>({...f,_line:s})));return l.length?(gi(l,t,`Choisir ${t} joueur(s) ${d}(s) à exclure`,r,o,s=>{s.forEach(c=>{const y=((i==="home"?o.homeTeam:o.aiTeam)[c._line]||[]).find(g=>g.cardId===c.cardId);y&&(y.used=!0,o.log.push({text:`❌ ${y.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ie(r,o,n)}),!0):(o.log.push({text:`❌ Aucun joueur ${d} à exclure`,type:"info"}),Ie(r,o,n),!0)},REVIVE_PLAYER:({count:t=1,roles:e=[]},i,o,r)=>{const n=Object.entries(i.homeTeam).filter(([a])=>!e.length||e.includes(a)).flatMap(([a,d])=>d.filter(l=>l.used).map(l=>({...l,_line:a})));return n.length?(gi(n,t,`Choisir ${t} joueur(s) à ressusciter`,o,i,a=>{a.forEach(d=>{const l=(i.homeTeam[d._line]||[]).find(s=>s.cardId===d.cardId);l&&(l.used=!1,i.log.push({text:`💫 ${l.name} ressuscité !`,type:"info"}))}),Ie(o,i,r)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ie(o,i,r),!0)},REMOVE_GOAL:({},t)=>(t.aiScore>0?(t.aiScore--,t.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):t.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},t)=>(t.homeScore===t.aiScore?(t.homeScore++,t.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):t.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:t=1},e)=>(e.maxSubs=(e.maxSubs||3)+t,e.log.push({text:`🔄 +${t} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Jr(t,e,i,o,r){o.usedGc.push(t);const n=o.gcDefs||[],a=n.find(l=>l.name===e)||n.find(l=>{var s;return((s=l.name)==null?void 0:s.toLowerCase().trim())===(e==null?void 0:e.toLowerCase().trim())});let d=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const l=Wr[a.effect_type];l?l(a.effect_params||{},o,i,r)||(d=!0):(r.toast(`Effet "${a.effect_type}" non implémenté`,"error"),d=!0)}else{switch(e){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const l=Object.entries(o.homeTeam).flatMap(([s,c])=>(c||[]).filter(f=>f.used).map(f=>({...f,_line:s})));l.length?(l[0].used=!1,o.log.push({text:`💫 ${l[0].name} ressuscité !`,type:"info"})):o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const l=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(s=>!s.used);if(l.length){const s=l.sort((c,f)=>jt(f,"ATT")-jt(c,"ATT"))[0];s.used=!0,o.log.push({text:`❄️ ${s.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}d=!0}v.from("cards").delete().eq("id",t).then(()=>{}),d&&Ie(i,o,r)}function Xr(t,e,i){const o=Object.values(e.homeTeam).flat().filter(r=>!r.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${e.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${o.map(r=>`
        <div class="player-boost-opt" data-card-id="${r.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Sn[r.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${jt(r,r._line||r.job)}</div>
          <div style="flex:1"><b>${r.firstname} ${r.name}</b><div style="font-size:11px;color:#888">${r._line||r.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${e.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(r=>{r.addEventListener("click",()=>{const n=r.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const d=(e.homeTeam[a]||[]).find(l=>l.cardId===n);if(d){d.boost=(d.boost||0)+e.boostCard.value,e.log.push({text:`⚡ Boost +${e.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}e.boostUsed=!0,i.closeModal(),Ie(t,e,i)})})}async function vt(t,e,i){var y,g,x,m;Rt(),Ke(),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),e.phase="finished";const{state:o}=i,r=e.homeScore>e.aiScore,n=e.homeScore===e.aiScore,a=r?"victoire":n?"nul":"defaite",d=e.isSolo&&((y=e.soloLevelConfig)!=null&&y.reward_credits)&&r?Number(e.soloLevelConfig.reward_credits):En(e.mode,a);if(e.isSolo&&r)try{const{data:b}=await v.from("user_solo_progress").select("unlocked_level").eq("user_id",o.profile.id).maybeSingle(),u=(b==null?void 0:b.unlocked_level)||1;e.soloLevel>=u&&await v.from("user_solo_progress").upsert({user_id:o.profile.id,unlocked_level:e.soloLevel+1,updated_at:new Date().toISOString()})}catch(b){console.warn("[Solo] Erreur mise à jour progression:",b.message)}const l="00000000-0000-0000-0000-000000000000";let s=null;if(e.isRankedAI)try{const{data:b}=await v.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",o.profile.id).single();if(b){const u=b.mmr??1e3,w=b.mmr_deviation??350,h=b.mmr_volatility??.06,$=r?1:n?.5:0,p=(b.placement_matches??0)<10,z=Ko(u,w,h,u,350,$,p),S=n?null:r?o.profile.id:l;await v.rpc("update_mmr_after_ranked",{p_match_id:e.matchId,p_winner_id:S,p_home_id:o.profile.id,p_away_id:l,p_home_delta:z.delta,p_away_delta:0,p_home_new_rd:z.newRd,p_away_new_rd:350,p_home_new_vol:z.newSigma,p_away_new_vol:.06}),s=z.delta}}catch(b){console.warn("[RankedAI] Erreur mise à jour MMR:",b.message)}e.matchId&&await v.from("matches").update({status:"finished",home_score:e.homeScore,away_score:e.aiScore,winner_id:r?o.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",e.matchId);const c={credits:(o.profile.credits||0)+d,matches_played:(o.profile.matches_played||0)+1};r?c.wins=(o.profile.wins||0)+1:n?c.draws=(o.profile.draws||0)+1:c.losses=(o.profile.losses||0)+1,await v.from("users").update(c).eq("id",o.profile.id),await i.refreshProfile();const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",f.innerHTML=`
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
    </div>`,document.body.appendChild(f),(g=document.getElementById("res-home"))==null||g.addEventListener("click",()=>{f.remove(),it(t),i.navigate("home")}),(x=document.getElementById("res-replay"))==null||x.addEventListener("click",async()=>{if(f.remove(),it(t),e.isRankedAI){const{data:b}=await v.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",i.state.profile.id).single();ct(),i.navigate("match",{matchMode:"ranked",rankedData:{mmr:(b==null?void 0:b.mmr)??1e3,rd:(b==null?void 0:b.mmr_deviation)??350,sigma:(b==null?void 0:b.mmr_volatility)??.06,isPlacement:((b==null?void 0:b.placement_matches)??0)<10}});return}i.navigate("match",e.isSolo?{matchMode:e.mode,soloLevel:e.soloLevel}:{matchMode:e.mode})}),(m=document.getElementById("res-next-level"))==null||m.addEventListener("click",()=>{f.remove(),it(t),i.navigate("match",{matchMode:"solo",soloLevel:e.soloLevel+1})})}function Qr(t,e){e.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Xi(t.aiTeam,t.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Zr={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function ea(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}async function ta(t,e){!t||!e||await Promise.all([Bo(t,"win"),Bo(e,"loss")])}async function Bo(t,e){const{data:i}=await v.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",t).eq("card_type","player");if(!(i!=null&&i.length))return;const o=i.filter(r=>{var n,a;return((n=r.player)==null?void 0:n.rarity)==="pepite"||((a=r.player)==null?void 0:a.rarity)==="papyte"});o.length&&await Promise.all(o.map(r=>{const n=Zr[r.player.rarity],a=e==="win"?n.win:n.loss,d=r.player.note_min??1,l=r.player.note_max??10,s=ea(r.player),c=r.current_note??s,f=Math.min(l,Math.max(d,c+a));return v.from("cards").update({current_note:f}).eq("id",r.id)}))}const Ft=t=>un(t);async function qt(t,e,i,o,r={}){return xn(t,e,i,o,r.myGC||[],r.gcDefs||[],r.isRanked||!1,r.rankedData||null,r.stadiumDef||null,r.onMatchEnd||null,r.mlLeagueId||null,r.mlMatchId||null)}async function ia(t,e,i){const{data:o}=await v.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!o){e.toast("Match introuvable","error"),e.navigate("home");return}const r=o.home_id===e.state.user.id;let n=null,a=null;if(o.mode==="mini_league"){const{data:d}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();d&&(n=d.league_id,a=d.id)}return xn(t,e,i,r,[],[],o.is_ranked||!1,null,null,null,n,a)}async function xn(t,e,i,o,r=[],n=[],a=!1,d=null,l=null,s=null,c=null,f=null){const{state:y,navigate:g,toast:x}=e,m=o?"p1":"p2",b=o?"p2":"p1",u=(r||[]).map(k=>k.id),w=(r||[]).map(k=>({id:k.id,gc_type:k.gc_type,_gcDef:k._gcDef||null}));t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await v.from("matches").select("*").eq("id",i).single();if(!h){x("Match introuvable","error"),g("home");return}async function $(){var _e,$e;console.log("[PvP] buildGameState match:",{id:h.id,home_deck_id:h.home_deck_id,away_deck_id:h.away_deck_id,mode:h.mode,is_ranked:h.is_ranked});const[{data:k,error:E},{data:A,error:C},{data:I},{data:F}]=await Promise.all([v.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),v.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),v.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),v.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",E==null?void 0:E.message,"p2:",C==null?void 0:C.message,"p1D:",(_e=k==null?void 0:k.starters)==null?void 0:_e.length,"p2D:",($e=A==null?void 0:A.starters)==null?void 0:$e.length);const q=ne=>{const Ae=Number(ne.evolution_bonus)||0;return{cardId:ne.card_id,position:ne.position,id:ne.id,firstname:ne.firstname,name:ne.surname_real,country_code:ne.country_code,club_id:ne.club_id,job:ne.job,job2:ne.job2,note_g:(Number(ne.note_g)||0)+(ne.job==="GK"||ne.job2==="GK"&&Number(ne.note_g)>0?Ae:0),note_d:(Number(ne.note_d)||0)+(ne.job==="DEF"||ne.job2==="DEF"&&Number(ne.note_d)>0?Ae:0),note_m:(Number(ne.note_m)||0)+(ne.job==="MIL"||ne.job2==="MIL"&&Number(ne.note_m)>0?Ae:0),note_a:(Number(ne.note_a)||0)+(ne.job==="ATT"||ne.job2==="ATT"&&Number(ne.note_a)>0?Ae:0),evolution_bonus:Ae,rarity:ne.rarity,skin:ne.skin,hair:ne.hair,hair_length:ne.hair_length,face:ne.face||null,clubName:ne.club_encoded_name||null,clubLogo:ne.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},B=((k==null?void 0:k.starters)||[]).map(ne=>q(ne)),U=((A==null?void 0:A.starters)||[]).map(ne=>q(ne)),Q=(k==null?void 0:k.formation)||"4-4-2",ie=(A==null?void 0:A.formation)||"4-4-2";let te=Fi(B,Q),Z=Fi(U,ie);const se=((k==null?void 0:k.subs)||[]).map(ne=>q(ne)),pe=((A==null?void 0:A.subs)||[]).map(ne=>q(ne)),we=(k==null?void 0:k.stadium_def)||(o?l:null),me=(A==null?void 0:A.stadium_def)||(o?null:l);return we&&(te=yi(te,we),vi(se,we)),me&&(Z=yi(Z,me),vi(pe,me)),{p1Team:te,p2Team:Z,p1Subs:se,p2Subs:pe,p1Formation:Q,p2Formation:ie,p1Name:(I==null?void 0:I.club_name)||(I==null?void 0:I.pseudo)||"Joueur 1",p2Name:(F==null?void 0:F.club_name)||(F==null?void 0:F.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:o?u:[],gc_p2:o?[]:u,gcCardsFull_p1:o?w:[],gcCardsFull_p2:o?[]:w,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:n||[],lastActionAt:new Date().toISOString()}}let p=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(console.log("[PvP] init - amIHome:",o,"gameState exists:",!!p,"match.status:",h.status,"home_id:",h.home_id,"away_id:",h.away_id,"myId:",y.profile.id),!p)if(o){p=await $(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((p==null?void 0:p.p1Team)||{}));const{data:k}=await v.from("matches").select("game_state").eq("id",i).single();!(k!=null&&k.game_state)||!Object.keys(k.game_state).length?await v.from("matches").update({game_state:p,turn_user_id:h.home_id}).eq("id",i):p=k.game_state}else{t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let k=0;k<30&&!p;k++){await new Promise(A=>setTimeout(A,400));const{data:E}=await v.from("matches").select("game_state").eq("id",i).single();E!=null&&E.game_state&&Object.keys(E.game_state).length&&(p=E.game_state),k%5===0&&console.log("[PvP] away - poll",k,"game_state:",!!(E!=null&&E.game_state))}if(!p){x("Erreur de synchronisation","error"),g("home");return}p.gc_p2=u,p.gcCardsFull_p2=w,await v.from("matches").update({game_state:p}).eq("id",i)}let z=!1,S=null,M=!1;const R=new Set,V=new Set;async function J(k){var ie,te;Rt();try{v.removeChannel(oe)}catch{}const E=p[m+"Score"]||0,A=p[b+"Score"]||0;let C,I;k.winner_id?(C=k.winner_id===y.profile.id,I=!1):k.forfeit?(C=E>A,I=!1):(I=E===A,C=E>A);let F="";if(a&&o)try{const{data:Z}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.home_id).single(),{data:se}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.away_id).single();if(Z&&se){const pe=C?1:I?.5:0,we=1-pe,me=Z.placement_matches<10,_e=se.placement_matches<10,$e=computeGlicko2(Z.mmr,Z.mmr_deviation,Z.mmr_volatility,se.mmr,se.mmr_deviation,pe===1?1:pe===0?0:.5,me),ne=computeGlicko2(se.mmr,se.mmr_deviation,se.mmr_volatility,Z.mmr,Z.mmr_deviation,we===1?1:we===0?0:.5,_e);await v.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:I?null:C?h.home_id:h.away_id,p_home_id:h.home_id,p_away_id:h.away_id,p_home_delta:$e.delta,p_away_delta:ne.delta,p_home_new_rd:$e.newRd,p_away_new_rd:ne.newRd,p_home_new_vol:$e.newSigma,p_away_new_vol:ne.newSigma});const Ae=$e.delta,Re=$e.newMmr,Ce=getTier(Re),Ye=Ae>=0?"+":"",He=Ae>=0?"#4caf50":"#ff6b6b",ot=getTier(Z.mmr);F=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Ce.id!==ot.id?`<div style="font-size:20px;font-weight:900;color:${Ce.color}">
                    ${Re>Z.mmr?"📈":"📉"} ${ot.emoji} ${ot.label} → ${Ce.emoji} ${Ce.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Re>Z.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Ae>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Ce.color}">${Ce.emoji} ${Ce.label}</div>`}
              ${me?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${Z.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(Z){console.error("[Ranked] MMR update error:",Z)}(ie=document.getElementById("pvp-end-overlay"))==null||ie.remove();const q=document.createElement("div");q.id="pvp-end-overlay",q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const B=I?"🤝":C?"🏆":"😞",U=I?"MATCH NUL":C?"VICTOIRE !":"DÉFAITE",Q=I?"#fff":C?"#FFD700":"#ff6b6b";q.innerHTML=`
      <div style="font-size:64px">${B}</div>
      <div style="font-size:26px;font-weight:900;color:${Q}">${U}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${p[m+"Name"]} ${E} – ${A} ${p[b+"Name"]}</div>
      ${k.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${C?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${F}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${c?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(q),(te=q.querySelector("#pvp-end-home"))==null||te.addEventListener("click",()=>{q.remove(),it(t),c?g("mini-league",{openLeagueId:c}):g(a?"ranked":"home")})}const oe=v.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},k=>{var A;const E=k.new;try{if(E.status==="finished"||E.forfeit){if(z)return;z=!0,S&&(clearInterval(S),S=null),Ke(),E.game_state&&(p=E.game_state),J(E);return}if(E.game_state){const C=p;p=E.game_state;const I=p._lastGC;if(I&&I.seq&&!V.has(I.seq)&&(V.add(I.seq),I.by!==m)){de(I.type,I.by,()=>O());return}const F=C[m+"Score"]||0,q=C[b+"Score"]||0,B=p[m+"Score"]||0,U=p[b+"Score"]||0,Q=B>F,ie=U>q;if((Q||ie)&&!R.has(p.round)){R.add(p.round);const te=[...p.log||[]].reverse().find(pe=>pe.isGoal),Z=((te==null?void 0:te.homePlayers)||[]).map(pe=>({name:pe.name,note:pe.note,portrait:pe.portrait,job:pe.job}));!!((A=te==null?void 0:te.text)!=null&&A.includes("DERNIER CORNER"))?ae().then(()=>{Ze(Z,B,U,Q,()=>O())}):Ze(Z,B,U,Q,()=>O());return}O()}}catch(C){console.error("[PvP] crash:",C)}}).subscribe();async function L(k){Object.assign(p,k),p.lastActionAt=new Date().toISOString();const{error:E}=await v.from("matches").update({game_state:p}).eq("id",i);E&&x("Erreur de synchronisation","error");try{O()}catch(A){console.error("[PvP] renderPvpScreen crash:",A)}}async function _(){if(z)return;z=!0,Rt(),Ke(),S&&(clearInterval(S),S=null);const k=o?h.away_id:h.home_id,E=o?"p2":"p1",A=o?"p1":"p2",C={...p,[E+"Score"]:3,[A+"Score"]:0,phase:"finished"},I=C.p1Score||0,F=C.p2Score||0;try{await v.from("matches").update({game_state:C}).eq("id",i);const{data:q,error:B}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:k,p_home_score:I,p_away_score:F,p_forfeit:!0});if(B&&console.error("[PvP] finish_pvp_match (forfeit):",B),c)try{await v.rpc("check_and_finish_mini_league",{p_league_id:c})}catch(U){console.error("[PvP] check_and_finish_mini_league (forfeit):",U)}try{const{data:U}=await v.rpc("apply_match_rewards",{p_match_id:i});U!=null&&U.success&&!(U!=null&&U.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(U){console.error("[PvP] apply_match_rewards (forfeit):",U)}}catch{}try{v.removeChannel(oe)}catch{}setTimeout(()=>{it(t),c?g("mini-league",{openLeagueId:c}):g("home")},800)}const G={BOOST_STAT:({value:k=1,count:E=1,roles:A=[]},C,I)=>{const F=C[m+"Team"],q=Object.entries(F).filter(([B])=>!A.length||A.includes(B)).flatMap(([B,U])=>U.filter(Q=>!Q.used).map(Q=>({...Q,_line:B})));if(!q.length){C.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),I(C);return}N(q,E,`Choisir ${E} joueur(s) à booster (+${k})`,B=>{B.forEach(U=>{const Q=(F[U._line]||[]).find(ie=>ie.cardId===U.cardId);Q&&(Q.boost=(Q.boost||0)+k,C.log.push({text:`⚡ +${k} sur ${Q.name}`,type:"info"}))}),C[m+"Team"]=F,I(C)})},DEBUFF_STAT:({value:k=1,count:E=1,roles:A=[],target:C="ai"},I,F)=>{const q=C==="home"?m:b,B=I[q+"Team"],U=C==="home"?"allié":"adverse",Q=Object.entries(B).filter(([ie])=>!A.length||A.includes(ie)).flatMap(([ie,te])=>te.map(Z=>({...Z,_line:ie})));if(!Q.length){I.log.push({text:`🎯 Aucun joueur ${U}`,type:"info"}),F(I);return}N(Q,E,`Choisir ${E} joueur(s) ${U}(s) (-${k})`,ie=>{ie.forEach(te=>{const Z=(B[te._line]||[]).find(se=>se.cardId===te.cardId);Z&&(Z.boost=(Z.boost||0)-k,I.log.push({text:`🎯 -${k} sur ${Z.name}`,type:"info"}))}),I[q+"Team"]=B,F(I)})},GRAY_PLAYER:({count:k=1,roles:E=[],target:A="ai"},C,I)=>{const F=A==="home"?m:b,q=C[F+"Team"],B=A==="home"?"allié":"adverse",U=Object.entries(q).filter(([Q])=>!E.length||E.includes(Q)).flatMap(([Q,ie])=>ie.filter(te=>!te.used).map(te=>({...te,_line:Q})));if(!U.length){C.log.push({text:`❌ Aucun joueur ${B}`,type:"info"}),I(C);return}N(U,k,`Choisir ${k} joueur(s) ${B}(s) à exclure`,Q=>{const ie="usedCardIds_"+F,te=new Set(C[ie]||[]);Q.forEach(Z=>{const se=(q[Z._line]||[]).find(pe=>pe.cardId===Z.cardId);se&&(se.used=!0,te.add(Z.cardId),C.log.push({text:`❌ ${se.name} exclu !`,type:"info"}))}),C[ie]=[...te],C[F+"Team"]=q,I(C)})},REVIVE_PLAYER:({count:k=1,roles:E=[]},A,C)=>{const I=A[m+"Team"],F=Object.entries(I).filter(([q])=>!E.length||E.includes(q)).flatMap(([q,B])=>B.filter(U=>U.used).map(U=>({...U,_line:q})));if(!F.length){A.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),C(A);return}N(F,k,`Choisir ${k} joueur(s) à ressusciter`,q=>{q.forEach(B=>{const U=(I[B._line]||[]).find(Q=>Q.cardId===B.cardId);U&&(U.used=!1,A.log.push({text:`💫 ${U.name} ressuscité !`,type:"info"}))}),A[m+"Team"]=I,C(A)})},REMOVE_GOAL:({},k,E)=>{const A=b+"Score";k[A]>0?(k[A]--,k.log.push({text:"🚫 Dernier but annulé !",type:"info"})):k.log.push({text:"🚫 Aucun but à annuler",type:"info"}),E(k)},ADD_GOAL_DRAW:({},k,E)=>{k[m+"Score"]===k[b+"Score"]?(k[m+"Score"]++,k.log.push({text:"🎯 But bonus !",type:"info"})):k.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),E(k)},ADD_SUB:({value:k=1},E,A)=>{E.maxSubs=(E.maxSubs||3)+k,E.log.push({text:`🔄 +${k} remplacement(s)`,type:"info"}),A(E)},CUSTOM:({},k,E)=>E(k)};function N(k,E,A,C){const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let F=[];function q(){var U,Q;const B=k.map(ie=>{const te=ie._line||ie.job||"MIL",Z=F.find(pe=>pe.cardId===ie.cardId),se=je({...ie,_evolution_bonus:0},{width:90,showStad:!0,role:te,extraNote:ie.boost||0});return`<div class="pp-item" data-cid="${ie.cardId}"
          style="position:relative;border-radius:8px;${Z?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${ie.used?"opacity:0.3;pointer-events:none":""}">
          ${se}
        </div>`}).join("");I.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${A}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${F.length}/${E}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${B}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${F.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${F.length}/${E})
          </button>
        </div>`,(U=I.querySelector("#pp-close"))==null||U.addEventListener("click",()=>I.remove()),I.querySelectorAll(".pp-item").forEach(ie=>{ie.addEventListener("click",()=>{const te=ie.dataset.cid,Z=k.find(pe=>pe.cardId===te),se=F.findIndex(pe=>pe.cardId===te);Z&&(se>-1?F.splice(se,1):F.length<E&&F.push(Z),q())})}),(Q=I.querySelector("#pp-confirm"))==null||Q.addEventListener("click",()=>{I.remove(),C(F)})}q(),document.body.appendChild(I)}async function ce(k,E){const C=(p["gcCardsFull_"+m]||[]).find(B=>B.id===k),I=(C==null?void 0:C._gcDef)||(p.gcDefs||[]).find(B=>{var U;return B.name===E||((U=B.name)==null?void 0:U.toLowerCase().trim())===(E==null?void 0:E.toLowerCase().trim())}),F=[...p["usedGc_"+m]||[],k],q={type:E,by:m,seq:(p._gcAnimSeq||0)+1};V.add(q.seq),de(E,m,async()=>{if(I!=null&&I.effect_type&&I.effect_type!=="CUSTOM"){const U=G[I.effect_type];if(U){const Q={...p};U(I.effect_params||{},Q,async ie=>{ie["usedGc_"+m]=F,ie._lastGC=q,ie._gcAnimSeq=q.seq,await L(ie)});return}}const B={...p};switch(E){case"Remplacement+":B.maxSubs=(B.maxSubs||3)+1,B.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const U=b+"Score";B[U]>0&&(B[U]--,B.log.push({text:"🚫 But annulé",type:"info"}));break}}B["usedGc_"+m]=F,B._lastGC=q,B._gcAnimSeq=q.seq,await L(B)})}function ue(k,E){const A="usedCardIds_"+k,C=new Set(p[A]||[]);E.forEach(I=>C.add(I)),p[A]=[...C]}function T(){for(const k of["p1","p2"]){const E=new Set(p["usedCardIds_"+k]||[]),A=p[k+"Team"];if(A)for(const C of["GK","DEF","MIL","ATT"])(A[C]||[]).forEach(I=>{I.used=E.has(I.cardId)})}}function O(){var go,bo,xo,yo,vo,ho;if(p.phase==="reveal")return fe();if(p.phase==="midfield")return be();if(p.phase==="finished")return Ge();const k=p[m+"Team"],E=p[b+"Team"];T();const A=p[m+"Score"],C=p[b+"Score"],I=p[m+"Name"],F=p[b+"Name"],q=p.phase===m+"-attack",B=p.phase===m+"-defense",U=Array.isArray(p["selected_"+m])?p["selected_"+m]:[],Q=U.map(X=>X.cardId),ie=window.innerWidth>=700,te=p[m+"Subs"]||[],Z=p["usedSubIds_"+m]||[],se=te.filter(X=>!Z.includes(X.cardId)),pe=p["gcCardsFull_"+m]||[],we=p["usedGc_"+m]||[],me=pe.filter(X=>!we.includes(X.id)),_e=p.boostOwner===m&&!p.boostUsed,$e=[...k.MIL||[],...k.ATT||[]].filter(X=>!X.used),ne=[...E.MIL||[],...E.ATT||[]].filter(X=>!X.used),Ae=!Le(E),Re=$e.length===0&&ne.length===0&&!Ae,Ce=(k.DEF||[]).filter(X=>!X.used),Ye=(k.GK||[]).filter(X=>!X.used);let He=[];q&&$e.length===0&&(Ae?(He=Ce.map(X=>X.cardId),Ce.length===0&&(He=He.concat(Ye.map(X=>X.cardId)))):Re&&(He=[...Ce,...Ye].map(X=>X.cardId)));function ot(X,he,qe){var Be,ft;const ze=X._gcDef,Pt=(ze==null?void 0:ze.name)||X.gc_type,at=(ze==null?void 0:ze.effect)||((Be=Oe[X.gc_type])==null?void 0:Be.desc)||"",Fe=ze!=null&&ze.image_url?`/icons/${ze.image_url}`:null,Ne=((ft=Oe[X.gc_type])==null?void 0:ft.icon)||"⚡";return`<div class="pvp-gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}" style="flex-shrink:0;cursor:pointer">
        ${dt(Pt,Fe,Ne,at,{width:he})}
      </div>`}function Vt(X,he){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${X}px;height:${he}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(he*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(he*.2)}px">⚡</div>
        <div style="font-size:${Math.round(he*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const Pe=(X,he)=>he?Vt(95,162):ot(X,95),We=(X,he)=>he?Vt(68,116):ot(X,68),Ue=ie?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",pt=q?Se(m)?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${U.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ue};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:B?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${U.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${F}</div>`,nt=q&&!Se(m)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':q||B?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${U.length}/3 sélectionné(s)</div>`:"",Bt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${ie?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${se.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':se.map(X=>`<div class="pvp-sub-btn" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${wt(X,ie?76:44,ie?100:58)}</div>`).join("")}
    </div>`,ut=q?"attack":B?"defense":"idle",$t=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ri(k,p[m+"Formation"],ut,Q,ie?1300:Tt(),ie?600:Nt(),He)}
      </div>
    </div>`,rt=p[m+"Team"],$n=(()=>{var he,qe,ze,Pt,at;if(B&&((he=p.pendingAttack)!=null&&he.players)){const Fe=p.pendingAttack;let Ne="";if(U.length>0){const Be=U.map(Je=>{const Yt=(rt[Je._role]||[]).find(Ti=>Ti.cardId===Je.cardId)||Je,Wt=rt[Je._role]||[],ci=Wt.findIndex(Ti=>Ti.cardId===Je.cardId),Ai=zt(Wt.length),Jt=ci>=0?Ai[ci]:Yt._col??1;return{...Yt,_line:Je._role,_col:Jt}}),ft=ai(Be,((qe=p.modifiers)==null?void 0:qe[m])||{},p[m+"Formation"]);Ne=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${U.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(Be.map(Je=>({...Je,used:!1})),"#3a7bd5",ft.total,"defense",p[m+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${F} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${Qe((Fe.players||[]).map(Be=>({...Be,used:!1})),"#ff6b6b",Fe.total,"attack",p[b+"Formation"])}</div>
          ${Ne}
        </div>`}if(q&&((ze=p.pendingAttack)!=null&&ze.players)){const Fe=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${Qe((Fe.players||[]).map(Ne=>({...Ne,used:!1})),"#00ff88",Fe.total,"attack",p[m+"Formation"])}</div>
        </div>`}if(q&&!((Pt=p.pendingAttack)!=null&&Pt.players)&&U.length>0){const Fe=U.map(Be=>{const ft=(rt[Be._role]||[]).find(Jt=>Jt.cardId===Be.cardId)||Be,Je=["GK","DEF"].includes(Be._role),Yt=rt[Be._role]||[],Wt=Yt.findIndex(Jt=>Jt.cardId===Be.cardId),ci=zt(Yt.length),Ai=Wt>=0?ci[Wt]:ft._col??1;return{...ft,_line:Be._role,_col:Ai,...Je?{note_a:Math.max(1,Number(ft.note_a)||0)}:{}}}),Ne=si(Fe,((at=p.modifiers)==null?void 0:at[m])||{},p[m+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${U.length}/3)</div>
          <div style="display:flex;justify-content:center">${Qe(Fe.map(Be=>({...Be,used:!1})),"#FFD700",Ne.total,"attack",p[m+"Formation"])}</div>
        </div>`}const X=(p.log||[]).slice(-1)[0];return X?'<div style="padding:2px 4px">'+fn(X)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),mo=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${A} – ${C}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${F}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${$n}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(p.log||[]).length})
      </button>`;It(t),t.style.overflow="hidden",ie?t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${mo}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Bt}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${$t}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${pt}${nt}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${me.map(X=>Pe(X,!1)).join("")}
            ${_e?Pe(null,!0):""}
          </div>
        </div>
      </div>`:t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${mo}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ri(k,p[m+"Formation"],ut,Q,Tt(),Nt(),He)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${me.map(X=>We(X,!1)).join("")}
            ${_e?We(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${q&&se.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${q&&se.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${q&&se.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${q&&se.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${se.length}</div>
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
          <div>${pt}${nt}</div>
        </div>
      </div>`;function Dt(){const X=t.querySelector(".match-screen");if(!X)return;const he=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);X.style.height=he+"px",X.style.minHeight=he+"px",X.style.maxHeight=he+"px",X.style.overflow="hidden";const qe=t.querySelector("#mobile-action-bar"),ze=t.querySelector("#mobile-play-area");qe&&ze&&(ze.style.paddingBottom=qe.offsetHeight+"px")}if(Dt(),setTimeout(Dt,120),setTimeout(Dt,400),M||(M=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Dt),window.visualViewport.addEventListener("scroll",Dt)),window.addEventListener("resize",Dt)),function(){const he=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!he)return;const qe=he.closest("#match-terrain-wrap");qe&&(qe.style.cssText="position:relative;width:100%;height:100%;padding:0"),he.removeAttribute("width"),he.removeAttribute("height"),he.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",he.setAttribute("preserveAspectRatio","xMidYMid meet")}(),p._pvpResizeBound||(p._pvpResizeBound=!0,window.addEventListener("resize",()=>{const X=t.querySelector(".terrain-wrapper svg");if(X){const he=X.closest("#match-terrain-wrap");he&&(he.style.cssText="position:relative;width:100%;height:100%;padding:0"),X.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t.querySelectorAll(".match-slot-hit").forEach(X=>{X.addEventListener("click",()=>{if(!q&&!B)return;const he=X.dataset.cardId,qe=X.dataset.role,ze=(k[qe]||[]).find(Ne=>Ne.cardId===he);if(!ze||ze.used)return;const Pt=He.includes(he);if(q&&!["MIL","ATT"].includes(qe)&&!Pt)return;Array.isArray(p["selected_"+m])||(p["selected_"+m]=[]);const at=p["selected_"+m],Fe=at.findIndex(Ne=>Ne.cardId===he);Fe>-1?at.splice(Fe,1):at.length<3&&at.push({...ze,_role:qe}),O()})}),t.querySelectorAll(".match-used-hit").forEach(X=>{X.addEventListener("click",()=>re(X.dataset.cardId))}),t.querySelectorAll(".pvp-sub-btn").forEach(X=>{X.addEventListener("click",()=>re())}),(go=t.querySelector("#pvp-sub-open"))==null||go.addEventListener("click",()=>re()),t.querySelectorAll(".pvp-gc-mini").forEach(X=>{q?X.addEventListener("click",()=>j(X.dataset.gcId,X.dataset.gcType)):(X.style.opacity="0.35",X.style.cursor="default",X.addEventListener("click",()=>Et("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(bo=t.querySelector("#pvp-boost-card"))==null||bo.addEventListener("click",()=>K()),(xo=t.querySelector("#pvp-action"))==null||xo.addEventListener("click",X=>{q?X.currentTarget.dataset.pass==="1"||!Se(m)?W():xe():B&&ke()}),(yo=t.querySelector("#pvp-quit"))==null||yo.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&_()}),(vo=t.querySelector("#pvp-view-opp"))==null||vo.addEventListener("click",()=>Y()),(ho=t.querySelector("#pvp-toggle-history"))==null||ho.addEventListener("click",()=>P()),S&&(clearInterval(S),S=null),Ke(),(q||B)&&!z){let X=30,he=!1;const qe=()=>document.getElementById("pvp-timer"),ze=()=>{qe()&&(qe().textContent=X+"s",qe().style.color=he?"#ff4444":"#fff")};ze(),S=setInterval(()=>{X--,X<0?he?(clearInterval(S),S=null,Ke(),q&&!Se(m)?W():_()):(he=!0,X=15,ze(),Jo("/sounds/timer-urgent.mp3",.6)):ze()},1e3)}}function fe(){It(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${Cr(p[b+"Team"],p[b+"Formation"],null,p[b+"Name"]||"Adversaire")}
    </div>`;const k=t.querySelector("svg"),E=k==null?void 0:k.closest("#match-terrain-wrap");E&&(E.style.cssText="position:relative;width:100%;height:100%;padding:0"),k&&(k.removeAttribute("width"),k.removeAttribute("height"),k.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",k.setAttribute("preserveAspectRatio","xMidYMid meet")),m==="p1"&&setTimeout(async()=>{await L({phase:"midfield"})},5e3)}let ge=!1;function be(){if(ge)return;const k=p[m+"Team"].MIL||[],E=p[b+"Team"].MIL||[],A=xt(k)+yt(k),C=xt(E)+yt(E),I=A>=C;It(t),t.innerHTML=`
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
      ${ki(k,p[m+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${ki(E,p[b+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const F=(se,pe)=>t.querySelectorAll(se).forEach((we,me)=>{setTimeout(()=>{we.style.opacity="1",we.style.transform="translateY(0) scale(1)"},pe+me*90)});F(".duel-card-me",150),F(".duel-card-opp",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((se,pe)=>setTimeout(()=>{se.style.opacity="1"},pe*70)),900),setTimeout(()=>{const se=t.querySelector("#pvp-vs");se&&(se.style.opacity="1",se.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(pe=>pe.style.opacity="1")},1250);function q(se,pe,we){const me=document.getElementById(se);if(!me)return;const _e=performance.now(),$e=ne=>{const Ae=Math.min(1,(ne-_e)/we);me.textContent=Math.round(pe*(1-Math.pow(1-Ae,3))),Ae<1?requestAnimationFrame($e):me.textContent=pe};requestAnimationFrame($e)}setTimeout(()=>{q("pvp-score-me",A,800),q("pvp-score-opp",C,800)},1500);const B=p.p1Team.MIL||[],U=p.p2Team.MIL||[],Q=xt(B)+yt(B),ie=xt(U)+yt(U),te=Q>=ie?"p1":"p2";let Z=p.boostValue;Z==null&&(Z=Ho(),p.boostValue=Z,p.boostOwner=te,p.boostUsed=!1),ge=!0,setTimeout(()=>{const se=t.querySelector("#duel-row-"+(I?"me":"opp")),pe=t.querySelector("#duel-row-"+(I?"opp":"me")),we=document.getElementById("pvp-score-me"),me=document.getElementById("pvp-score-opp"),_e=I?we:me,$e=I?me:we;_e&&(_e.style.fontSize="80px",_e.style.color=I?"#FFD700":"#ff6b6b",_e.style.animation="duelPulse .5s ease"+(I?",duelGlow 1.5s ease infinite .5s":"")),$e&&($e.style.opacity="0.25"),setTimeout(()=>{se&&(se.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",se.style.zIndex="5"),setTimeout(()=>{const ne=document.getElementById("duel-shock");ne&&(ne.style.animation="shockwave .5s ease-out forwards"),pe&&(pe.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const ne=document.getElementById("pvp-duel-finale");if(!ne)return;const Ae=p.boostOwner===m?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+Z+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=m==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ne.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(I?"⚽ "+p[m+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[b+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ae+Re,ne.style.transition="opacity .45s ease",ne.style.opacity="1",ne.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const Ye=te;await L({phase:Ye+"-attack",attacker:Ye,round:1,boostValue:Z,boostUsed:!1,boostOwner:Ye})})},600)},700)},2800)}function de(k,E,A){var pe,we;const C=(p.gcDefs||[]).find(me=>{var _e;return me.name===k||((_e=me.name)==null?void 0:_e.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),I={purple:"#b06ce0",light_blue:"#00d4ef"}[C==null?void 0:C.color]||"#b06ce0",F=(C==null?void 0:C.name)||k,q=(C==null?void 0:C.effect)||((pe=Oe[k])==null?void 0:pe.desc)||"",B=C!=null&&C.image_url?`/icons/${C.image_url}`:null,U=((we=Oe[k])==null?void 0:we.icon)||"⚡",ie=E===m?"Vous":p[E+"Name"]||"Adversaire",te=document.createElement("div");te.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",te.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{filter:drop-shadow(0 0 20px ${I}66)}50%{filter:drop-shadow(0 0 40px ${I}cc)}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${I};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${ie} joue une carte</div>
      <div style="animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        ${dt(F,B,U,q,{width:200})}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(te);let Z=!1;const se=()=>{Z||(Z=!0,te.remove(),setTimeout(()=>A&&A(),50))};te.addEventListener("click",se),setTimeout(se,3e3)}function j(k,E){var ie,te,Z,se;const C=(p["gcCardsFull_"+m]||[]).find(pe=>pe.id===k),I=C==null?void 0:C._gcDef,F=(I==null?void 0:I.name)||E,q=(I==null?void 0:I.effect)||((ie=Oe[E])==null?void 0:ie.desc)||"Carte spéciale.",B=I!=null&&I.image_url?`/icons/${I.image_url}`:null,U=((te=Oe[E])==null?void 0:te.icon)||"⚡",Q=document.createElement("div");Q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",Q.innerHTML=`
      ${dt(F,B,U,q,{width:190})}
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(Q),(Z=Q.querySelector("#pvp-gc-back"))==null||Z.addEventListener("click",()=>Q.remove()),(se=Q.querySelector("#pvp-gc-use"))==null||se.addEventListener("click",()=>{Q.remove(),ce(k,E)})}function K(){var C;const k=p[m+"Team"],E=Object.entries(k).flatMap(([I,F])=>(F||[]).filter(q=>!q.used).map(q=>({...q,_line:I})));if(!E.length)return;const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",A.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${E.map(I=>{const F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[I._line]||"#555",q=jt(I,I._line)+(I.boost||0);return`<div class="bp-item" data-cid="${I.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${F};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${I.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${q}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(A),(C=A.querySelector("#bp-close"))==null||C.addEventListener("click",()=>A.remove()),A.querySelectorAll(".bp-item").forEach(I=>{I.addEventListener("click",async()=>{const F=I.dataset.cid,q=E.find(U=>U.cardId===F);if(!q)return;const B=(k[q._line]||[]).find(U=>U.cardId===F);B&&(B.boost=(B.boost||0)+p.boostValue),A.remove(),await L({[m+"Team"]:k,boostUsed:!0})})})}function re(k=null){var se,pe;if(!(p.phase===m+"-attack")){x("Remplacement uniquement avant votre attaque","warning");return}const A=p[m+"Team"],C=p["usedSubIds_"+m]||[],I=p.maxSubs||3;if(C.length>=I){x(`Maximum ${I} remplacements atteint`,"warning");return}const F=Object.entries(A).flatMap(([we,me])=>(me||[]).filter(_e=>_e.used).map(_e=>({..._e,_line:we}))),q=(p[m+"Subs"]||[]).filter(we=>!C.includes(we.cardId));if(!F.length){x("Aucun joueur utilisé à remplacer","warning");return}if(!q.length){x("Aucun remplaçant disponible","warning");return}let B=Math.max(0,F.findIndex(we=>we.cardId===k));const U=((se=F[B])==null?void 0:se._line)||((pe=F[B])==null?void 0:pe.job);let Q=Math.max(0,q.findIndex(we=>we.job===U)),ie=!1;const te=document.createElement("div");te.id="pvp-sub-overlay",te.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function Z(){var Re,Ce,Ye,He,ot,Vt;const we=F[B],me=q[Q],_e=Math.min(130,Math.round((window.innerWidth-90)/2)),$e=Math.round(_e*1.35),ne=Pe=>`background:rgba(255,255,255,0.12);border:none;color:${Pe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Pe?"default":"pointer"};flex-shrink:0`;te.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${C.length}/${I})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ne(Q===0)}" ${Q===0?"disabled":""}>▲</button>
          <div>${me?wt({...me,used:!1,boost:0},_e,$e):"<div>—</div>"}</div>
          <button id="pin-down" style="${ne(Q>=q.length-1)}" ${Q>=q.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${Q+1}/${q.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ne(B===0)}" ${B===0?"disabled":""}>▲</button>
          <div>${we?wt({...we,used:!1,boost:0},_e,$e):"<div>—</div>"}</div>
          <button id="pout-down" style="${ne(B>=F.length-1)}" ${B>=F.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${B+1}/${F.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Re=te.querySelector("#psub-close"))==null||Re.addEventListener("click",()=>te.remove()),(Ce=te.querySelector("#pout-up"))==null||Ce.addEventListener("click",()=>{B>0&&(B--,Z())}),(Ye=te.querySelector("#pout-down"))==null||Ye.addEventListener("click",()=>{B<F.length-1&&(B++,Z())}),(He=te.querySelector("#pin-up"))==null||He.addEventListener("click",()=>{Q>0&&(Q--,Z())}),(ot=te.querySelector("#pin-down"))==null||ot.addEventListener("click",()=>{Q<q.length-1&&(Q++,Z())});const Ae=(Pe,We,Ue,pt)=>{const nt=te.querySelector("#"+Pe);if(!nt)return;let Bt=0;nt.addEventListener("touchstart",ut=>{Bt=ut.touches[0].clientY},{passive:!0}),nt.addEventListener("touchend",ut=>{const $t=ut.changedTouches[0].clientY-Bt;if(Math.abs($t)<30)return;const rt=We();$t<0&&rt<pt-1?(Ue(rt+1),Z()):$t>0&&rt>0&&(Ue(rt-1),Z())},{passive:!0})};Ae("pin-panel",()=>Q,Pe=>Q=Pe,q.length),Ae("pout-panel",()=>B,Pe=>B=Pe,F.length),(Vt=te.querySelector("#psub-confirm"))==null||Vt.addEventListener("click",async Pe=>{if(Pe.preventDefault(),Pe.stopPropagation(),ie)return;ie=!0;const We=F[B],Ue=q[Q];if(!We||!Ue)return;const pt=We._line,nt=(A[pt]||[]).findIndex($t=>$t.cardId===We.cardId);if(nt===-1){x("Erreur : joueur introuvable","error"),te.remove();return}const Bt={...Ue,_line:pt,position:We.position,used:!1,boost:0};A[pt].splice(nt,1,Bt);const ut=[...C,Ue.cardId];te.remove(),ee(We,Ue,async()=>{await L({[m+"Team"]:A,[b+"Team"]:p[b+"Team"],["usedSubIds_"+m]:ut})})})}document.body.appendChild(te),Z()}function ee(k,E,A){const C={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const F=(U,Q,ie)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${Q};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${ie}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${C[U.job]||"#555"};border:3px solid ${Q};position:relative;overflow:hidden;margin:0 auto">
        ${Ct(U)?`<img src="${Ct(U)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(U.name||"").slice(0,12)}</div>
    </div>`;I.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${F(E,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${F(k,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(I);let q=!1;const B=()=>{q||(q=!0,I.remove(),setTimeout(()=>A(),50))};I.addEventListener("click",B),setTimeout(B,2200)}function Y(){var E;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",k.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[b+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Xi(p[b+"Team"],p[b+"Formation"],null,[],Tt(),Nt())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(k),(E=k.querySelector("#pvp-opp-close"))==null||E.addEventListener("click",()=>k.remove())}function P(){var A;const k=p.log||[],E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",E.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${k.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...k].reverse().map(C=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${C.type==="goal"?"#FFD700":C.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${C.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(E),(A=E.querySelector("#pvp-hist-close"))==null||A.addEventListener("click",()=>E.remove())}async function W(){if(p.phase!==m+"-attack")return;const k=m==="p1"?"p2":"p1",E=(p.round||0)+1,A=[...p.log||[]];A.push({type:"info",text:`⏭️ ${p[m+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const C=De(p),I=Se(k),F=C||!I?"finished":k+"-attack";await L({["selected_"+m]:[],modifiers:{...p.modifiers,[m]:{}},pendingAttack:null,phase:F,attacker:k,round:E,log:A}),F==="finished"&&await Me(p)}function D(k){const E=(k.GK||[]).some(C=>!C.used),A=["DEF","MIL","ATT"].some(C=>(k[C]||[]).some(I=>!I.used));return E&&!A}function H(k){return(k.p1Score||0)!==(k.p2Score||0)?null:D(k.p1Team)&&!Le(k.p2Team)?{side:"p1",gk:(k.p1Team.GK||[]).find(E=>!E.used)}:D(k.p2Team)&&!Le(k.p1Team)?{side:"p2",gk:(k.p2Team.GK||[]).find(E=>!E.used)}:null}async function ae(){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(k);const E=(A,C)=>new Promise(I=>{k.innerHTML=`<div style="font-size:32px;font-weight:900;color:${C};letter-spacing:2px;animation:lcFade 1.4s ease both">${A}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(I,1400)});await E("⚽ DERNIER CORNER","#FFD700"),await E("🧤 LE GARDIEN MONTE !","#4fc3f7"),k.remove()}async function le(k,E){const{side:A,gk:C}=k;if(!C)return;const I=A+"Score",F=(E[I]||0)+1;C.used=!0;const q=[...E.log||[]];q.push({type:"duel",isGoal:!0,homeScored:A===m,homePlayers:A==="p1"?[Ft(C)]:[],aiPlayers:A==="p2"?[Ft(C)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${E[A+"Name"]} marque !`});const B=(E.round||0)+1,U=A==="p1"?"p2":"p1",Q={...E,[I]:F},ie=De(Q);R.add(B),await ae();const te=A===m?F:E[m+"Score"]||0,Z=A===m?E[b+"Score"]||0:F;Ze([Ft(C)],te,Z,A===m,async()=>{await L({[I]:F,log:q,round:B,pendingAttack:null,phase:ie?"finished":U+"-attack",attacker:U,["selected_"+m]:[],modifiers:{...p.modifiers,[m]:{}}}),ie&&await Me({...p,[I]:F})})}async function xe(){const k=p[m+"Team"],E=!["GK","DEF","MIL","ATT"].some(F=>(p[b+"Team"][F]||[]).some(q=>!q.used)),A=(p["selected_"+m]||[]).map(F=>{const q=(k[F._role]||[]).find(pe=>pe.cardId===F.cardId)||F,B=["GK","DEF"].includes(F._role),U=k[F._role]||[],Q=U.findIndex(pe=>pe.cardId===F.cardId),ie=zt(U.length),te=Q>=0?ie[Q]:q._col??1,Z=p.stadiumDef||p.homeStadiumDef||null,se=q.stadiumBonus||Z&&(Z.club_id&&String(q.club_id)===String(Z.club_id)||Z.country_code&&q.country_code===Z.country_code)||!1;return{...q,_line:F._role,_col:te,stadiumBonus:se,...B?{note_a:Math.max(1,Number(q.note_a)||0)}:{}}});if(!A.length)return;const C=si(A,p.modifiers[m]||{},p[m+"Formation"]);ue(m,A.map(F=>F.cardId)),A.forEach(F=>{const q=(k[F._role]||[]).find(B=>B.cardId===F.cardId);q&&(q.used=!0)}),p["selected_"+m]=[],O();const I=[...p.log||[]];if(E){if(A.length===1&&(A[0]._line==="GK"||A[0].job==="GK")&&(p.p1Score||0)===(p.p2Score||0)){await le({side:m,gk:A[0]},{...p,[m+"Team"]:k,log:I});return}const q=(p[m+"Score"]||0)+1,B=A.map(Z=>Ft(Z));I.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:B,homeTotal:C.total,aiTotal:0});const U=(p.round||0)+1,Q=m==="p1"?"p2":"p1",ie={...p,[m+"Team"]:k,[m+"Score"]:q},te=De(ie);R.add(U),Ze(B,q,p[b+"Score"]||0,!0,async()=>{await L({[m+"Team"]:k,[m+"Score"]:q,["selected_"+m]:[],modifiers:{...p.modifiers,[m]:{}},pendingAttack:null,phase:te?"finished":Q+"-attack",attacker:Q,round:U,log:I}),te&&await Me({...p,[m+"Score"]:q})});return}I.push({type:"pending",text:`⚔️ ${p[m+"Name"]} attaque (${C.total})`}),await L({[m+"Team"]:k,[b+"Team"]:p[b+"Team"],pendingAttack:{...C,players:A,side:m},["selected_"+m]:[],modifiers:{...p.modifiers,[m]:{}},phase:b+"-defense",log:I})}async function ke(){const k=p[m+"Team"],E=(p["selected_"+m]||[]).map(me=>{const _e=(k[me._role]||[]).find(Ce=>Ce.cardId===me.cardId)||me,$e=k[me._role]||[],ne=$e.findIndex(Ce=>Ce.cardId===me.cardId),Ae=zt($e.length),Re=ne>=0?Ae[ne]:_e._col??1;return{..._e,_line:me._role,_col:Re}}),A=ai(E,p.modifiers[m]||{},p[m+"Formation"]);ue(m,E.map(me=>me.cardId)),E.forEach(me=>{const _e=(k[me._role]||[]).find($e=>$e.cardId===me.cardId);_e&&(_e.used=!0)}),p["selected_"+m]=[],O();const C=Qi(p.pendingAttack.total,A.total,p.modifiers[m]||{}),I=p.pendingAttack.side,F=C==="attack"||(C==null?void 0:C.goal),q=I==="p1"?"p2":"p1",B=(p.round||0)+1,U=(p.pendingAttack.players||[]).map(me=>Ft(me)),Q=[...p.log||[]];Q.push({type:"duel",isGoal:F,homeScored:F&&I===m,text:F?`⚽ BUT de ${p[I+"Name"]} ! (${p.pendingAttack.total} vs ${A.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${A.total})`,homePlayers:U,aiPlayers:E.map(me=>Ft(me)),homeTotal:p.pendingAttack.total,aiTotal:A.total});const ie=F?(p[I+"Score"]||0)+1:p[I+"Score"]||0,te={...p,[m+"Team"]:k,[I+"Score"]:ie},Z=De(te),se=Z?"finished":q+"-attack",pe=!Z&&!F?H(te):null,we=async()=>{if(pe){await le(pe,te);return}await L({[m+"Team"]:k,[b+"Team"]:p[b+"Team"],[I+"Score"]:ie,["selected_"+m]:[],modifiers:{...p.modifiers,[m]:{}},pendingAttack:null,phase:se,attacker:q,round:B,log:Q}),(se==="finished"||Z)&&await Me({...p,[I+"Score"]:ie})};if(F){const me=I===m,_e=me?ie:p[m+"Score"]||0,$e=me?p[b+"Score"]||0:ie;R.add(B),Ze(U,_e,$e,me,we)}else await we()}function Ee(k){return["MIL","ATT"].some(E=>(k[E]||[]).some(A=>!A.used))}function Le(k){return["GK","DEF","MIL","ATT"].some(E=>(k[E]||[]).some(A=>!A.used))}function ye(k){return Le(k)&&!Ee(k)}function Se(k){const E=p[k+"Team"],A=p[(k==="p1"?"p2":"p1")+"Team"];return!!(Ee(E)||ye(E)&&!Le(A)||ye(E)&&!Ee(A)&&Le(A))}function De(k){return!Le(k.p1Team)&&!Le(k.p2Team)}function Te(k){const E=k.p1Score||0,A=k.p2Score||0;return E===A?null:E>A?h.home_id:h.away_id}async function Me(k){Rt(),Ke();try{const E=Te(k),A=E?h.home_id===E?h.away_id:h.home_id:null,C=k.p1Score||0,I=k.p2Score||0,{data:F,error:q}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:E,p_home_score:C,p_away_score:I,p_forfeit:!1});if(q&&console.error("[PvP] finish_pvp_match:",q),c)try{await v.rpc("check_and_finish_mini_league",{p_league_id:c})}catch(B){console.error("[PvP] check_and_finish_mini_league:",B)}E&&A&&ta(E,A).catch(()=>{});try{const{data:B}=await v.rpc("apply_match_rewards",{p_match_id:i});B!=null&&B.success&&!(B!=null&&B.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(B){console.error("[PvP] apply_match_rewards:",B)}if(typeof s=="function")try{await s({homeScore:C,awayScore:I,winnerId:E,homeId:h.home_id,awayId:h.away_id,matchId:i})}catch(B){console.error("[PvP] onMatchEnd:",B)}}catch(E){console.error("[PvP] finishMatch:",E)}}function Ge(){var I;const k=p[m+"Score"],E=p[b+"Score"],A=k>E,C=k===E;It(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${A?"🏆":C?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${A?"Victoire !":C?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${k} - ${E}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${c?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(I=document.getElementById("pvp-home"))==null||I.addEventListener("click",()=>{try{v.removeChannel(oe)}catch{}it(t),c?g("mini-league",{openLeagueId:c}):g("home")})}O()}async function Ki(t,e,i=!1){var d,l;const{state:o,navigate:r,toast:n}=e,a=i&&((l=(d=e==null?void 0:e.state)==null?void 0:d.params)==null?void 0:l.rankedData)||null;await Li(t,e,i?"ranked":"random",async({deckId:s,formation:c,starters:f,subsRaw:y,gcCardsEnriched:g,gcDefs:x,stadiumDef:m})=>{It(t);const b=async u=>{await na(t,e,s,c,f,y,u||[],x,m,i,a)};if(!(g!=null&&g.length)){await b([]);return}zi(t,g,b)})}async function oa(t,e,i){return ia(t,e,i)}async function na(t,e,i,o,r,n,a=[],d=[],l=null,s=!1,c=null){var J,oe;const{state:f,navigate:y,toast:g}=e,x=(c==null?void 0:c.mmr)??((J=f.profile)==null?void 0:J.mmr)??1e3,m=s?Lt(x):null,b=s?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",u=s?(m==null?void 0:m.color)||"#D4A017":"#FFD700";let w=!1,h=null,$=null;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${b};color:#fff;padding:32px;text-align:center;gap:20px">
      ${s?`<div style="font-size:36px">${(m==null?void 0:m.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${s?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${s?`<div style="font-size:13px;color:${(m==null?void 0:m.color)||"#D4A017"}">${(m==null?void 0:m.name)||""} · ${Math.round(x)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${u};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const p=async()=>{w=!0,h&&(h.unsubscribe(),h=null),$&&(clearInterval($),$=null);try{await v.rpc("cancel_matchmaking",{p_user_id:f.profile.id})}catch(L){console.error("[Matchmaking] cancel error:",L)}};(oe=document.getElementById("cancel-mm"))==null||oe.addEventListener("click",async()=>{await p(),it(t),y("home")});const z=async(L,_)=>{w||(w=!0,h&&(h.unsubscribe(),h=null),$&&(clearInterval($),$=null),await qt(t,e,L,_,{myGC:a,gcDefs:d,stadiumDef:l,isRanked:s,rankedData:c,onMatchEnd:s?ra:null}))},S=f.user.id,{data:M,error:R}=s?await v.rpc("try_matchmake_ranked",{p_user_id:S,p_deck_id:i,p_mmr:x,p_range:200}):await v.rpc("try_matchmake",{p_user_id:S,p_deck_id:i});if(R||!(M!=null&&M.success)){console.error("[Matchmaking] try_matchmake error:",R||M),g("Erreur de matchmaking","error"),it(t),y("home");return}if(M.matched){await z(M.match_id,!1);return}const V=async()=>{if(w)return;const{data:L}=await v.from("matchmaking_queue").select("status, match_id").eq("user_id",S).maybeSingle();(L==null?void 0:L.status)==="matched"&&L.match_id&&await z(L.match_id,!0)};h=v.channel(`mm_${S}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${S}`},L=>{const _=L.new;_.status==="matched"&&_.match_id&&z(_.match_id,!0)}).subscribe(),$=setInterval(V,3e3),s?setTimeout(async()=>{if(!w){w=!0,h&&(h.unsubscribe(),h=null),$&&(clearInterval($),$=null);try{await v.rpc("cancel_matchmaking",{p_user_id:f.profile.id})}catch(L){console.error("[Matchmaking] cancel error:",L)}g("Aucun adversaire trouvé — match contre une IA calibrée sur votre niveau","info",4e3),y("match",{matchMode:"ranked_ai",rankedData:c,presetSetup:{deckId:i,formation:o,starters:r,subsRaw:n,gcCardsEnriched:a,gcDefs:d,stadiumDef:l}})}},2e4):setTimeout(()=>{w||p()},12e4)}async function ra(t,e){const{state:i,toast:o}=e,{winnerId:r,homeId:n,awayId:a,homeScore:d,awayScore:l,matchId:s}=t,c=i.user.id,f=n===c,y=r===c,{data:g}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",c).single(),{data:x}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",f?a:n).single();if(g&&x){const m=Ko(g.mmr,g.mmr_rd,g.mmr_v,x.mmr,x.mmr_rd,y?1:0);await v.from("users").update({mmr:m.mmr,mmr_rd:m.rd,mmr_v:m.v,mmr_wins:y?v.sql`mmr_wins + 1`:void 0,mmr_losses:y?void 0:v.sql`mmr_losses + 1`}).eq("id",c),o(y?`+MMR ↑ ${Math.round(m.mmr-g.mmr)}`:`-MMR ↓ ${Math.round(g.mmr-m.mmr)}`,y?"success":"error",4e3)}}const aa=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Ki,resumePvpMatch:oa},Symbol.toStringTag,{value:"Module"}));async function sa(t,e){const{state:i,navigate:o,toast:r}=e,n=i.params||{},a=n.friendId||null,d=n.friendName||"Ami",l=!!n.isAccepting;await Li(t,e,"friend",async({deckId:s,formation:c,starters:f,subsRaw:y,gcCardsEnriched:g,gcDefs:x,stadiumDef:m})=>{It(t);const b=async u=>{const w=u||[];l?await la(t,e,s,w,x,m):await da(t,e,s,w,x,m,a,d)};if(!(g!=null&&g.length)){await b([]);return}zi(t,g,b)})}async function da(t,e,i,o,r,n,a,d){var w;const{state:l,navigate:s,toast:c}=e,f=l.user.id,{data:y,error:g}=await v.from("friend_match_invites").insert({inviter_id:f,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(g||!y){console.error("[Friend] Erreur création invitation:",g),c("Impossible de créer l'invitation","error"),s("home");return}t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${d}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let x=!1,m=null;const b=async()=>{m&&(m.unsubscribe(),m=null)};(w=document.getElementById("cancel-friend"))==null||w.addEventListener("click",async()=>{await b(),await v.from("friend_match_invites").update({status:"declined"}).eq("id",y.id),it(t),s("home")}),m=v.channel(`friend_invite_${y.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${y.id}`},async({new:h})=>{x||h.status!=="accepted"||!h.match_id||(x=!0,await b(),await qt(t,e,h.match_id,!0,{myGC:o,gcDefs:r,stadiumDef:n}))}).subscribe();const u=setInterval(async()=>{if(x)return;const{data:h}=await v.from("friend_match_invites").select("status, match_id").eq("id",y.id).single();(h==null?void 0:h.status)==="accepted"&&h.match_id&&(x=!0,clearInterval(u),await b(),await qt(t,e,h.match_id,!0,{myGC:o,gcDefs:r,stadiumDef:n}))},3e3);setTimeout(async()=>{x||(clearInterval(u),await b(),c("Invitation expirée","info"),s("home"))},12e4)}async function la(t,e,i,o,r,n){const{state:a,navigate:d,toast:l}=e,s=a.user.id,{data:c}=await v.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",s).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){l("Aucune invitation en attente","error"),d("home");return}const{data:f,error:y}=await v.rpc("accept_friend_invite",{p_invite_id:c.id,p_invitee_deck_id:i});if(y||!(f!=null&&f.success)){console.error("[Friend] Erreur accept_friend_invite:",y||f),l((f==null?void 0:f.error)||"Impossible de rejoindre le match","error"),d("home");return}await qt(t,e,f.match_id,!1,{myGC:o,gcDefs:r,stadiumDef:n})}const yn="#1A6B3C",st="#D4A017",Zt="var(--tile-bg)",ei="var(--tile-border)",At="var(--divider)",Xe="var(--tile-fg-on-page)",St="var(--tile-fg-dim)",et="var(--tile-fg-faint)",ii="var(--nav-fg,#fff)",vn="rgba(255,255,255,0.62)",ca="rgba(255,255,255,0.4)";async function pa(t,e){var o;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(o=e.state.params)==null?void 0:o.openLeagueId;if(i){e.state.params.openLeagueId=null,await lt(t,e,i);return}await tt(t,e)}async function tt(t,e,i="waiting"){var h,$;const{state:o}=e,r=o.profile.id,{data:n}=await v.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",r),a=(n||[]).map(p=>p.league_id),d={};(n||[]).forEach(p=>{d[p.league_id]={amount:p.prize_amount,claimed:p.prize_claimed}});const{data:l,error:s}=await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),c=s?(await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:l||[],y=(a.length?await v.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],g=y.filter(p=>p.status==="waiting"&&!p.is_archived),x=y.filter(p=>p.status==="active"&&!p.is_archived),m=y.filter(p=>p.is_archived||p.status==="finished");let b=m;if(m.length){const{data:p}=await v.from("mini_league_matches").select("league_id").in("league_id",m.map(S=>S.id)).or(`home_id.eq.${r},away_id.eq.${r}`).not("status","eq","bye"),z=new Set((p||[]).map(S=>S.league_id));b=m.filter(S=>z.has(S.id))}const u=c.filter(p=>!a.includes(p.id)),w=[{key:"waiting",label:"🟡 En attente",count:g.length+u.length},{key:"active",label:"🟢 En cours",count:x.length},{key:"archived",label:"📁 Archivées",count:b.length}];t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${At};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${ii}">🏆 Mini League</div>
        <div style="font-size:12px;color:${vn}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${ii}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${At}">
      ${w.map(p=>`<button class="ml-tab" data-tab="${p.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===p.key?yn:"transparent"};background:none;font-size:12px;font-weight:${i===p.key?"900":"600"};color:${i===p.key?"#4ade80":ca};cursor:pointer">${p.label}${p.count?` (${p.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?ua(g,u,r):i==="active"?fa(x,r):ma(b,r,d)}
    </div>
  </div>`,(h=document.getElementById("ml-create-btn"))==null||h.addEventListener("click",()=>ga(t,e)),($=document.getElementById("ml-refresh-list"))==null||$.addEventListener("click",()=>tt(t,e,i)),t.querySelectorAll(".ml-tab").forEach(p=>p.addEventListener("click",()=>tt(t,e,p.dataset.tab))),t.querySelectorAll("[data-league-id]").forEach(p=>p.addEventListener("click",()=>lt(t,e,p.dataset.leagueId))),t.querySelectorAll("[data-join]").forEach(p=>p.addEventListener("click",z=>{z.stopPropagation(),hn(t,e,p.dataset.join,p.dataset.type)})),t.querySelectorAll("[data-delete]").forEach(p=>p.addEventListener("click",z=>{z.stopPropagation(),Vi(t,e,p.dataset.delete,p.dataset.name,i)})),t.querySelectorAll("[data-claim-league]").forEach(p=>p.addEventListener("click",async z=>{z.stopPropagation(),p.disabled=!0,p.textContent="...";const{data:S,error:M}=await v.rpc("claim_mini_league_prize",{p_league_id:p.dataset.claimLeague,p_user_id:o.profile.id});if(M||!(S!=null&&S.success)){e.toast((S==null?void 0:S.error)||"Erreur lors de la récupération","error"),tt(t,e,i);return}if(!S.already_claimed){o.profile.credits=(o.profile.credits||0)+S.prize;const R=document.getElementById("nav-credits");R&&(R.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),e.toast(`💰 +${S.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}tt(t,e,i)}))}function Ei(t,e,i=!1,o=null){var l,s;const r=t.creator_id===e,n=t.pot||0,a=((s=(l=t.mini_league_members)==null?void 0:l[0])==null?void 0:s.count)||0,d=o&&o.amount>0&&!o.claimed;return`<div data-league-id="${t.id}" style="background:${Zt};border:1px solid ${d?"rgba(212,160,23,0.5)":ei};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${Xe}">${t.name}</div>
      ${r?`<button data-delete="${t.id}" data-name="${t.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${St};margin-bottom:${i||d?"10px":"0"}">
      <span>${t.type==="private"?"🔒":"🌐"} ${t.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${t.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${t.max_players}</span>
      <span>💰 ${(t.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${n>0?`<span style="color:${st};font-weight:700">🏆 ${n.toLocaleString("fr")} cr.</span>`:""}
      ${t.current_day>0?`<span>📅 J${t.current_day}/${t.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${t.id}" data-type="${t.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(t.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
    ${d?`<button data-claim-league="${t.id}" class="btn btn-sm" style="width:100%;background:${st};color:#141000;font-weight:900;border:none">💰 Récupérer ${o.amount.toLocaleString("fr")} cr.</button>`:""}
  </div>`}function ua(t,e,i){const o=[];return t.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${et};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),o.push(...t.map(r=>Ei(r,i,!1)))),e.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${et};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),o.push(...e.map(r=>Ei(r,i,!0)))),o.length?o.join(""):`<div style="text-align:center;padding:40px;color:${et}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function fa(t,e){return t.length?t.map(i=>Ei(i,e)).join(""):`<div style="text-align:center;padding:40px;color:${et}">Aucune mini league en cours.</div>`}function ma(t,e,i={}){return t.length?t.map(o=>Ei(o,e,!1,i[o.id])).join(""):`<div style="text-align:center;padding:40px;color:${et}">Aucune mini league archivée.</div>`}function ga(t,e){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(o=>o.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=o.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var x,m,b,u;const{toast:o}=e,r=document.getElementById("ml-name").value.trim(),n=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,d=((x=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:x.value)||"public",l=((m=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:m.value)||"aller",s=((u=(b=document.getElementById("ml-pwd"))==null?void 0:b.value)==null?void 0:u.trim())||null;if(!r){o("Le nom est obligatoire","error");return}if(a<100){o("Mise minimum : 100 crédits","error");return}if(d==="private"&&!s){o("Mot de passe requis","error");return}const{data:c,error:f}=await v.from("mini_leagues").insert({name:r,creator_id:e.state.profile.id,type:d,password:s,mode:l,max_players:n,entry_fee:a}).select().single();if(f){o("Erreur : "+f.message,"error");return}const{data:y}=await v.from("users").select("credits").eq("id",e.state.profile.id).single();if(((y==null?void 0:y.credits)||0)<a){await v.from("mini_leagues").delete().eq("id",c.id),o(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await v.from("users").update({credits:y.credits-a}).eq("id",e.state.profile.id),await v.from("mini_leagues").update({pot:a}).eq("id",c.id),await v.from("mini_league_members").insert({league_id:c.id,user_id:e.state.profile.id}),e.state.profile&&(e.state.profile.credits=y.credits-a);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(e.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),o(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),lt(t,e,c.id)})}function ba(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",e.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(e);const i=e.querySelector("#ml-pwd-input"),o=r=>{e.remove(),t(r)};setTimeout(()=>i==null?void 0:i.focus(),80),e.querySelector("#pwd-cancel").addEventListener("click",()=>o(null)),e.querySelector("#pwd-ok").addEventListener("click",()=>o(i.value.trim())),i.addEventListener("keydown",r=>{r.key==="Enter"&&o(i.value.trim())})})}async function hn(t,e,i,o){var f;const{toast:r,state:n}=e,a=n.profile.id;let d=null;if(o==="private"&&(d=await ba(),d===null))return;const{data:l,error:s}=await v.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:d});if(s||!(l!=null&&l.success)){console.error("[MiniLeague] join_mini_league:",s||l),r((l==null?void 0:l.error)||"Erreur lors de l'inscription","error");return}if(typeof e.refreshProfile=="function")await e.refreshProfile();else{const{data:y}=await v.from("users").select("credits").eq("id",a).single();n.profile&&y&&(n.profile.credits=y.credits)}const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(((f=n.profile)==null?void 0:f.credits)||0).toLocaleString("fr")}`),r("✅ Inscrit ! Pot mis à jour.","success"),lt(t,e,i)}async function xa(t,e,i,o){const{toast:r,state:n}=e,a=n.profile.id;if(!await new Promise(y=>{const g=document.createElement("div");g.className="modal-overlay",g.style.zIndex="2100",g.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${o.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(g),g.querySelector("#lv-ok").onclick=()=>{g.remove(),y(!0)},g.querySelector("#lv-cancel").onclick=()=>{g.remove(),y(!1)}}))return;const{data:l,error:s}=await v.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(s||!(l!=null&&l.success)){r((l==null?void 0:l.error)||"Erreur lors de la désinscription","error");return}const c=l.refund||o;n.profile&&(n.profile.credits=(n.profile.credits||0)+c);const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(n.profile.credits||0).toLocaleString("fr")}`),r(`↩️ Désinscrit · +${c.toLocaleString("fr")} cr. remboursés`,"success"),tt(t,e,"waiting")}async function Vi(t,e,i,o,r){const{toast:n}=e;if(!confirm(`Supprimer définitivement "${o}" et tous ses matchs/membres ? Action irréversible.`))return;await v.from("mini_league_matches").delete().eq("league_id",i),await v.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await v.from("mini_leagues").delete().eq("id",i);if(a){n("Erreur suppression ("+a.message+")","error");return}n("Mini League supprimée avec succès","success"),tt(t,e,r)}async function ya(t,e,i){await v.from("mini_leagues").update({is_archived:!0}).eq("id",i),e.toast("Mini League archivée","success"),tt(t,e,"archived")}async function lt(t,e,i){var $,p,z,S,M,R,V,J,oe;const{state:o,toast:r}=e,n=o.profile.id,[{data:a},{data:d},{data:l}]=await Promise.all([v.from("mini_leagues").select("*").eq("id",i).single(),v.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),v.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){r("Introuvable","error"),await tt(t,e);return}const s=(d||[]).some(L=>L.user_id===n),c=a.creator_id===n,f=(d||[]).map(L=>L.user).filter(Boolean),y=ka(f,l||[]),g=(l||[]).filter(L=>L.matchday===a.current_day),x=a.pot||0,m=a.entry_fee||100,b=g.length>0&&g.every(L=>L.status==="finished"||L.status==="bye"),u=a.current_day>=a.total_days,w=(d||[]).find(L=>L.user_id===n);t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${At};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${ii}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${ii};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${ii}">${a.name}</div>
        <div style="font-size:11px;color:${vn}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${m} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"rgba(74,222,128,0.16)":a.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${a.status==="active"?"#4ade80":a.status==="finished"?"#c084fc":"#eab308"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${x>0?`<div style="font-size:12px;font-weight:900;color:${st};margin-top:4px">🏆 ${x.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${Zt};border:1px solid ${ei};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Xe}">👥 Joueurs (${f.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${St};margin-bottom:10px">💰 ${m} cr./joueur → Pot estimé : ${(m*f.length).toLocaleString("fr")} cr. (🥇${Math.floor(m*f.length*.7).toLocaleString("fr")} · 🥈${Math.floor(m*f.length*.2).toLocaleString("fr")} · 🥉${Math.floor(m*f.length*.1).toLocaleString("fr")})</div>
        ${f.map(L=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${At}">
            <div style="width:36px;height:36px;border-radius:50%;background:${L.club_color2||yn};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${L.club_color1||"#fff"}">${(L.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Xe}">${L.club_name||L.pseudo}</div><div style="font-size:11px;color:${et}">@${L.pseudo}</div></div>
            ${L.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${c&&f.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${m} cr. × ${f.length})</button>`:""}
        ${c?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${s?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${m} cr.)</button>`}
        ${s&&!c?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${m.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${Zt};border:1px solid ${ei};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${g.map(L=>Do(L,f,n,s)).join("")}
        ${c&&b&&!u?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&y.length?`
      <div style="background:${Zt};border:1px solid ${ei};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${et};text-transform:uppercase;border-bottom:2px solid ${At}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${x>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${st}">💰</th>`:""}
          </tr></thead>
          <tbody>${y.map((L,_)=>{const G=x>0&&a.status==="finished"?_===0?Math.floor(x*.7):_===1?Math.floor(x*.2):_===2?Math.floor(x*.1):0:0;return`<tr style="border-bottom:1px solid ${At};${L.userId===n?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${_===0?st:_<3?"#4ade80":St}">${["🥇","🥈","🥉"][_]||_+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Xe}">${L.clubName}</div><div style="font-size:10px;color:${et}">@${L.pseudo}</div></td>
              <td style="text-align:center;color:${St}">${L.played}</td><td style="text-align:center;color:${St}">${L.won}-${L.drawn}-${L.lost}</td>
              <td style="text-align:center;color:${L.goalDiff>=0?"#4ade80":"#ff6b6b"}">${L.goalDiff>=0?"+":""}${L.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Xe}">${L.points}</td>
              ${x>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${st}">${G?G.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${Zt};border:1px solid ${ei};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(L,_)=>_+1).reverse().map(L=>{const _=(l||[]).filter(G=>G.matchday===L);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${et};margin-bottom:6px">Journée ${L}</div>${_.map(G=>Do(G,f,n,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${c&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${St}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const h=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if(($=document.getElementById("ml-back"))==null||$.addEventListener("click",()=>tt(t,e,h)),(p=document.getElementById("ml-refresh"))==null||p.addEventListener("click",async L=>{const _=L.currentTarget;_.style.opacity="0.5",await lt(t,e,i)}),(z=document.getElementById("ml-start-btn"))==null||z.addEventListener("click",()=>va(t,e,a,f)),(S=document.getElementById("ml-next-day"))==null||S.addEventListener("click",()=>ha(t,e,i)),(M=document.getElementById("ml-join-now"))==null||M.addEventListener("click",()=>hn(t,e,i,a.type)),(R=document.getElementById("ml-leave-btn"))==null||R.addEventListener("click",()=>xa(t,e,i,m)),(V=document.getElementById("ml-delete-btn"))==null||V.addEventListener("click",()=>Vi(t,e,i,a.name,"waiting")),(J=document.getElementById("ml-delete-now"))==null||J.addEventListener("click",()=>Vi(t,e,i,a.name,h)),(oe=document.getElementById("ml-archive-btn"))==null||oe.addEventListener("click",()=>ya(t,e,i)),t.querySelectorAll("[data-play-match]").forEach(L=>{L.addEventListener("click",()=>{const _=g.find(G=>G.id===L.dataset.playMatch);_&&(ct(),e.navigate("match-mini-league",{mlMatchId:_.id,leagueId:i}))})}),a.status==="finished"&&w){const L=y.findIndex(_=>_.userId===n);L>=0&&L<3&&w.prize_amount>0&&!w.prize_claimed&&setTimeout(()=>wa(t,e,a,w,L),400)}}function Do(t,e,i,o,r=!1){const n=f=>e.find(y=>y.id===f);if(t.is_bye){const f=n(t.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${St};text-align:center">🔵 ${(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"?"} exempté(e)</div>`}const a=n(t.home_id),d=n(t.away_id),l=t.home_id===i||t.away_id===i,s=l&&t.status==="pending"&&o&&!r,c=t.status==="finished"?`${t.home_score} - ${t.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${l?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${l?"rgba(74,222,128,0.35)":At}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${t.status==="finished"?"#4ade80":et}">${c}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"?"}</div>
    ${s?`<button data-play-match="${t.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${t.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function va(t,e,i,o){const{toast:r,state:n}=e,a=_a(o.map(s=>s.id),i.mode),d=[];a.forEach((s,c)=>s.forEach(f=>d.push({league_id:i.id,matchday:c+1,home_id:f.home||f.bye,away_id:f.away||null,is_bye:!!f.bye,status:f.bye?"bye":"pending"})));const{error:l}=await v.from("mini_league_matches").insert(d);if(l){r("Erreur calendrier : "+l.message,"error");return}await v.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),r(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),lt(t,e,i.id)}async function ha(t,e,i){const{data:o}=await v.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),r=(o.current_day||0)+1;if(r>(o.total_days||0)){lt(t,e,i);return}await v.from("mini_leagues").update({current_day:r}).eq("id",i),e.toast(`Journée ${r} commencée !`,"success"),lt(t,e,i)}async function wa(t,e,i,o,r){var y,g;const{state:n,toast:a}=e,d=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],l=["🥇","🥈","🥉"][r],s=o.prize_amount||d[r]||0,c=o.prize_claimed,f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",f.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${l}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${r===0?"Champion !":r===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${st};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${c?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${st}">${s.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${r===0?"70%":r===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${c?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${st};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${s.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(f),(y=f.querySelector("#prize-close"))==null||y.addEventListener("click",()=>f.remove()),(g=f.querySelector("#claim-prize-btn"))==null||g.addEventListener("click",async x=>{const m=x.currentTarget;m.disabled=!0,m.textContent="...";const{data:b,error:u}=await v.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:n.profile.id});if(u||!(b!=null&&b.success)){console.error("[MiniLeague] claim_mini_league_prize:",u||b),a((b==null?void 0:b.error)||"Erreur lors de la récupération","error"),m.disabled=!1,m.textContent=`💰 Récupérer ${s.toLocaleString("fr")} cr.`;return}if(b.already_claimed)a("Déjà récupéré précédemment","info");else{const w=(n.profile.credits||0)+b.prize;n.profile&&(n.profile.credits=w);const h=document.getElementById("nav-credits");h&&(h.textContent=`💰 ${w.toLocaleString("fr")}`),a(`💰 +${b.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}f.remove(),lt(t,e,i.id)})}function _a(t,e){const o=t.length%2===0?[...t]:[...t,null],r=o.length;let n=o.slice(1);const a=[];for(let d=0;d<r-1;d++){const l=[],s=[o[0],...n];for(let c=0;c<r/2;c++){const f=s[c],y=s[r-1-c];f===null?l.push({bye:y}):y===null?l.push({bye:f}):l.push({home:f,away:y})}a.push(l),n=[n[n.length-1],...n.slice(0,-1)]}return e==="aller-retour"?[...a,...a.map(d=>d.map(l=>l.bye?l:{home:l.away,away:l.home}))]:a}function ka(t,e){const i={};return t.forEach(o=>{i[o.id]={userId:o.id,pseudo:o.pseudo,clubName:o.club_name||o.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),e.filter(o=>o.status==="finished"&&!o.is_bye&&o.home_score!=null).forEach(o=>{const r=i[o.home_id],n=i[o.away_id];!r||!n||(r.played++,n.played++,r.goalsFor+=o.home_score,r.goalsAgainst+=o.away_score,n.goalsFor+=o.away_score,n.goalsAgainst+=o.home_score,o.home_score>o.away_score?(r.won++,r.points+=3,n.lost++):o.home_score<o.away_score?(n.won++,n.points+=3,r.lost++):(r.drawn++,r.points++,n.drawn++,n.points++),r.goalDiff=r.goalsFor-r.goalsAgainst,n.goalDiff=n.goalsFor-n.goalsAgainst)}),Object.values(i).sort((o,r)=>r.points-o.points||r.goalDiff-o.goalDiff||r.goalsFor-o.goalsFor)}async function Po(t,e){const{state:i,navigate:o,toast:r}=e,n=i.params||{},a=n.leagueId||null,d=n.mlMatchId||null,l=i.user.id;if(!d||!a){r("Match introuvable","error"),o("mini-league");return}const{data:s,error:c}=await v.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",d).single();if(c||!s){r("Match introuvable","error"),o("mini-league",{openLeagueId:a});return}if(s.home_id!==l&&s.away_id!==l){r("Vous ne faites pas partie de ce match","error"),o("mini-league",{openLeagueId:a});return}const f=s.home_id===l;if(s.match_id){await qt(t,e,s.match_id,f,{mlLeagueId:a,mlMatchId:d});return}await Li(t,e,"mini_league",async({deckId:y,gcCardsEnriched:g,gcDefs:x,stadiumDef:m})=>{It(t);const b=async u=>{const{data:w,error:h}=await v.rpc("start_mini_league_match",{p_ml_match_id:d,p_user_id:l,p_deck_id:y});if(h||!(w!=null&&w.success)){console.error("[MiniLeague] start_mini_league_match error:",h||w),r((w==null?void 0:w.error)||"Impossible de lancer le match","error"),o("mini-league",{openLeagueId:a});return}if(w.matched){await qt(t,e,w.match_id,f,{mlLeagueId:a,mlMatchId:d,myGC:u||[],gcDefs:x,stadiumDef:m});return}await $a(t,e,{mlMatchId:d,leagueId:a,amIHome:f,chosenGC:u,gcDefs:x,stadiumDef:m})};if(!(g!=null&&g.length)){await b([]);return}zi(t,g,b)})}function $a(t,e,{mlMatchId:i,leagueId:o,amIHome:r,chosenGC:n,gcDefs:a,stadiumDef:d}){return new Promise(l=>{var m;const{navigate:s}=e;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let c=!1;const f=async b=>{if(!c){if(c=!0,clearInterval(x),g)try{g.unsubscribe()}catch{}b&&await qt(t,e,b,r,{mlLeagueId:o,mlMatchId:i,myGC:n||[],gcDefs:a,stadiumDef:d}),l()}};(m=document.getElementById("wait-back"))==null||m.addEventListener("click",()=>{if(c=!0,clearInterval(x),g)try{g.unsubscribe()}catch{}s("mini-league",{openLeagueId:o}),l()});const y=async()=>{if(c)return;const{data:b}=await v.from("mini_league_matches").select("match_id").eq("id",i).single();b!=null&&b.match_id&&f(b.match_id)},g=v.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},b=>{var u;(u=b.new)!=null&&u.match_id&&f(b.new.match_id)}).subscribe(),x=setInterval(y,3e3);y()})}const Fo={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function bi(t,e,i=0){return e?(Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0)+(e===t.job||e===t.job2?i:0):0}async function Ea(t,e){t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await fo(t,e)}async function fo(t,e){const{state:i,toast:o,navigate:r}=e;Ut(r,i.profile,"market","/icons/",o);const{data:n}=await v.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:a}=await v.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
  </div>`;let s="buy";const c=()=>{var b,u,w,h,$,p,z;return{name:(((b=document.getElementById("flt-name"))==null?void 0:b.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((w=document.getElementById("flt-country"))==null?void 0:w.value)||"").toLowerCase().trim(),job:((h=document.getElementById("flt-job"))==null?void 0:h.value)||"",rarity:(($=document.getElementById("flt-rarity"))==null?void 0:$.value)||"",note1:parseInt((p=document.getElementById("flt-note1"))==null?void 0:p.value)||0,note2:parseInt((z=document.getElementById("flt-note2"))==null?void 0:z.value)||0}};function f(b){const u=c();return b.filter(w=>{var V,J,oe;const h=(V=w.card)==null?void 0:V.player;if(!h)return!1;const $=`${h.firstname} ${h.surname_real}`.toLowerCase(),p=(((J=h.clubs)==null?void 0:J.encoded_name)||"").toLowerCase(),z=(h.country_code||"").toLowerCase(),S=((oe=w.card)==null?void 0:oe.evolution_bonus)||0,M=bi(h,h.job,S),R=h.job2?bi(h,h.job2,S):0;return!(u.name&&!$.includes(u.name)||u.club&&!p.includes(u.club)||u.country&&!z.includes(u.country)||u.job&&h.job!==u.job||u.rarity&&h.rarity!==u.rarity||u.note1&&M<u.note1||u.note2&&R<u.note2)})}function y(b){var p,z,S;const u=(p=b.card)==null?void 0:p.player;if(!u)return"";const w=((z=b.card)==null?void 0:z.evolution_bonus)||0,h=(i.profile.credits||0)>=b.price;return`<div class="mkt-buy-tile">
      ${je({...u,_evolution_bonus:w},{width:140})}
      <div class="mkt-price">${b.price.toLocaleString("fr")} cr.</div>
      <div class="mkt-seller">Vendeur : ${((S=b.seller)==null?void 0:S.pseudo)||"—"}</div>
      <button class="btn btn-primary btn-sm" data-buy="${b.id}" ${h?"":"disabled"} style="font-size:12px;padding:8px 10px">${h?"Acheter":"Trop cher"}</button>
    </div>`}function g(b){var J,oe,L,_;const u=(J=b.card)==null?void 0:J.player;if(!u)return"";const w=((oe=b.card)==null?void 0:oe.evolution_bonus)||0,h=bi(u,u.job,w),$=u.job2?bi(u,u.job2,w):0,p=b.status==="sold",z=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,S=Fo[u.job]||"#bbb",M=u.job2?Fo[u.job2]||"#bbb":null,R=u.job==="GK"?"#fff":S,V=u.job2==="GK"?"#fff":M;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${p?"opacity:0.7":""}">
      ${z?`<img src="${z}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(L=u.clubs)!=null&&L.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${S};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${R};font-family:Arial Black,Arial">${h}</span>
        </div>
        ${$?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${M};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${V};font-family:Arial Black,Arial">${$}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:${p?"#22c55e":"#999"};margin-top:1px">
          ${p?`✅ Vendu à ${((_=b.buyer)==null?void 0:_.pseudo)||"—"} · ${b.sold_at?new Date(b.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(b.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${b.price.toLocaleString("fr")}</div>
        ${p?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${b.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function x(){const b=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(b){if(u.style.display=s==="buy"?"flex":"none",s==="buy"){const w=f(d);b.innerHTML=w.length?`<div class="mkt-buy-grid">${w.map(y).join("")}</div>`:'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const w=l.filter($=>$.status==="active").sort(($,p)=>new Date(p.listed_at)-new Date($.listed_at)),h=l.filter($=>$.status==="sold").sort(($,p)=>new Date(p.sold_at||p.listed_at)-new Date($.sold_at||$.listed_at));b.innerHTML=(w.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${w.length})</div>`+w.map(g).join(""):"")+(h.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${h.length})</div>`+h.map(g).join(""):"")+(!w.length&&!h.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}b.querySelectorAll("[data-buy]").forEach(w=>w.addEventListener("click",()=>Sa(w.dataset.buy,d,t,e))),b.querySelectorAll("[data-cancel]").forEach(w=>w.addEventListener("click",()=>za(w.dataset.cancel,t,e)))}}t.querySelectorAll(".mkt-tab").forEach(b=>{b.addEventListener("click",()=>{s=b.dataset.tab,t.querySelectorAll(".mkt-tab").forEach(u=>{const w=u===b;u.style.background=w?"var(--green)":"var(--tile-bg)",u.style.color=w?"#fff":"var(--tile-fg-dim)",u.style.borderColor=w?"var(--green)":"var(--tile-border)"}),x()})});let m;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(b=>{var u;(u=document.getElementById(b))==null||u.addEventListener("input",()=>{clearTimeout(m),m=setTimeout(x,250)})}),x()}async function Sa(t,e,i,o){const{state:r,toast:n,refreshProfile:a}=o,d=e.find(c=>c.id===t);if(!d)return;const l=d.price;if((r.profile.credits||0)<l){n("Crédits insuffisants","error");return}La(d,async()=>{const{error:c}=await v.rpc("buy_market_card",{p_listing_id:t,p_buyer_id:r.profile.id});if(c){n("Erreur achat : "+c.message,"error");return}await a();const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),n("✅ Carte achetée !","success"),await fo(i,o)})}function La(t,e){var a;const i=(a=t.card)==null?void 0:a.player,o=i?`${i.firstname} ${i.surname_real}`:"cette carte",r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${o} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${t.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(r);const n=d=>{r.remove(),d&&e()};r.querySelector("#buy-cancel").addEventListener("click",()=>n(!1)),r.querySelector("#buy-ok").addEventListener("click",()=>n(!0)),r.addEventListener("click",d=>{d.target===r&&n(!1)})}async function za(t,e,i){const{toast:o}=i,{data:r}=await v.from("market_listings").select("card_id").eq("id",t).single();if(await v.from("market_listings").update({status:"cancelled"}).eq("id",t),r!=null&&r.card_id){const{count:n}=await v.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",r.card_id).eq("status","active");n||await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",r.card_id)}o("Annonce retirée","success"),fo(e,i)}async function Ia(t,e){var g,x,m,b,u;const{state:i,navigate:o}=e,r=((x=(g=e==null?void 0:e.state)==null?void 0:g.params)==null?void 0:x.tab)||"ranked";t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:n},{data:a},{data:d}]=await Promise.all([v.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").order("mmr",{ascending:!1}).limit(100),v.rpc("get_mini_league_leaderboard"),v.rpc("get_random_leaderboard")]);let l=r;const s=w=>w<3?["#D4A017","#a0a0a0","#cd7f32"][w]:"var(--green)",c=w=>w<3?"#000":"#fff";function f(){var $,p,z;const w=document.getElementById("rankings-legend");w&&(w.innerHTML=l==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const h=document.getElementById("rankings-list");if(h){if(l==="ranked"){const S=n||[];h.innerHTML=S.length>0?S.map((M,R)=>{const V=Lt(M.mmr??1e3),J=(M.ranked_wins||0)+(M.ranked_losses||0)+(M.ranked_draws||0),oe=J>0?Math.round((M.ranked_wins||0)/J*100):0,L=M.id===i.profile.id,_=(M.placement_matches||0)<10;return`
          <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${L?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${R<3?["#D4A017","#a0a0a0","#cd7f32"][R]:"rgba(255,255,255,0.08)"};color:${R<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${R<3?"16":"13"}px">${R<3?["🥇","🥈","🥉"][R]:R+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${V.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${M.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${M.club_name} · ${V.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${_?"❓":V.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${V.color}">${_?"Placement":V.label}</div>
              ${_?"":`<div style="font-size:10px;color:var(--tile-fg-dim)">${oe}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(l==="mini-league"){const S=a||[];h.innerHTML=S.length>0?S.map((M,R)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${M.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(R)};color:${c(R)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${R<3?"16":"13"}px">${R<3?["🥇","🥈","🥉"][R]:R+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${M.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${M.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${M.top1} 🥈${M.top2} 🥉${M.top3}</div>
            <div style="color:var(--tile-fg-dim)">${M.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const S=d||[];h.innerHTML=S.length>0?S.map((M,R)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${M.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(R)};color:${c(R)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${R<3?"16":"13"}px">${R<3?["🥇","🥈","🥉"][R]:R+1}</div>
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
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}($=document.getElementById("tab-ranked"))!=null&&$.style&&(document.getElementById("tab-ranked").style.cssText=y(l==="ranked")),(p=document.getElementById("tab-mini-league"))!=null&&p.style&&(document.getElementById("tab-mini-league").style.cssText=y(l==="mini-league")),(z=document.getElementById("tab-random"))!=null&&z.style&&(document.getElementById("tab-random").style.cssText=y(l==="random"))}}const y=w=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${w?"900":"400"};background:${w?"var(--green)":"rgba(255,255,255,0.06)"};color:${w?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;t.innerHTML=`
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
  </div>`,f(),(m=document.getElementById("tab-ranked"))==null||m.addEventListener("click",()=>{l="ranked",f()}),(b=document.getElementById("tab-mini-league"))==null||b.addEventListener("click",()=>{l="mini-league",f()}),(u=document.getElementById("tab-random"))==null||u.addEventListener("click",()=>{l="random",f()})}async function Aa(t,e){var z,S,M,R;const{state:i,navigate:o,toast:r}=e,n=i.profile;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:d}]=await Promise.all([v.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),v.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",n.id).single()]);if(!d){r("Erreur chargement profil","error"),o("home");return}if(!a){const V=d.mmr??1e3,J=Lt(V);Pi(V);const oe=Math.round(1e3+(V-1e3)*.5),L=Lt(oe),{data:_}=await v.from("users").select("id, pseudo, club_name, mmr, rank_tier").order("mmr",{ascending:!1}).limit(100),G=(_||[]).findIndex(N=>N.id===d.id)+1;t.innerHTML=`
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
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;text-align:center;border:2px solid ${J.color}40">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Ton classement</div>
        <div style="font-size:44px;margin-bottom:2px">${J.emoji}</div>
        <div style="font-size:18px;font-weight:900;color:${J.color};letter-spacing:2px;text-transform:uppercase">${J.label}</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px">MMR ${V} ${G?`· #${G} au classement général`:""}</div>
      </div>

      <!-- Top 100 -->
      <div>
        <div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:8px">🏆 Classement général — Top 100</div>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto">
          ${(_||[]).map((N,ce)=>{const ue=Lt(N.mmr??1e3),T=N.id===d.id;return`<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:10px;
              background:${T?"rgba(212,160,23,0.15)":"rgba(0,0,0,0.25)"};
              border:1px solid ${T?"#D4A017":"transparent"}">
              <div style="width:26px;text-align:center;font-size:12px;font-weight:900;color:rgba(255,255,255,0.5)">#${ce+1}</div>
              <div style="font-size:18px">${ue.emoji}</div>
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${N.pseudo}</div>
                <div style="font-size:10px;color:rgba(255,255,255,0.4)">${N.club_name||"—"}</div>
              </div>
              <div style="font-size:13px;font-weight:900;color:${ue.color}">${N.mmr??1e3}</div>
            </div>`}).join("")||'<div style="text-align:center;color:rgba(255,255,255,0.4);font-size:12px;padding:16px">Aucun classement disponible.</div>'}
        </div>
      </div>

      <!-- Aperçu saison suivante -->
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;border:1.5px dashed rgba(255,255,255,0.2)">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;text-align:center">📅 Aperçu — prochaine saison</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:24px">
          <div style="text-align:center;opacity:.6">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Actuel</div>
            <div style="font-size:24px">${J.emoji}</div>
            <div style="font-size:12px;font-weight:700;color:${J.color}">${V}</div>
          </div>
          <div style="font-size:20px;color:rgba(255,255,255,0.3)">→</div>
          <div style="text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Recalculé</div>
            <div style="font-size:28px">${L.emoji}</div>
            <div style="font-size:14px;font-weight:900;color:${L.color}">${oe}</div>
          </div>
        </div>
        <div style="font-size:11px;color:rgba(255,255,255,0.35);text-align:center;margin-top:10px">Ton MMR est recalculé vers la moyenne à chaque nouvelle saison, pour repartir sur des bases équilibrées.</div>
      </div>
    </div>`,(z=document.getElementById("ranked-back"))==null||z.addEventListener("click",()=>o("home"));return}const l=d.mmr??1e3,s=d.mmr_deviation??350,c=d.mmr_volatility??.06,f=d.placement_matches??0,y=f<10,g=Math.max(0,10-f),x=Lt(l),m=Pi(l),b=Ci.findIndex(V=>V.id===x.id),u=Ci[b+1]||null,w={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},h=(d.ranked_wins||0)+(d.ranked_losses||0)+(d.ranked_draws||0),$=h>0?Math.round((d.ranked_wins||0)/h*100):0,p=Ci.map(V=>`
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
        <div style="font-size:20px;font-weight:900;color:#D4A017">${$}%</div>
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
  </div>`,(S=document.getElementById("ranked-back"))==null||S.addEventListener("click",()=>o("home")),(M=document.getElementById("ranked-leaderboard-btn"))==null||M.addEventListener("click",()=>o("rankings",{tab:"ranked"})),(R=document.getElementById("ranked-play-btn"))==null||R.addEventListener("click",()=>{ct(),o("match",{matchMode:"ranked",rankedData:{mmr:l,rd:s,sigma:c,isPlacement:y}})})}async function Ta(t,{state:e,navigate:i,toast:o}){const r=e.profile;if(!r)return;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await v.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${r.id},away_id.eq.${r.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(n||[]).filter(c=>c.status==="finished"),l=(n||[]).filter(c=>c.status==="in_progress");function s(c){const f=c.home_id===r.id;f?c.home_score:c.away_score,f?c.away_score:c.home_score;const y=c.winner_id===r.id,g=c.home_score===c.away_score&&c.status==="finished",x=c.status!=="finished"?"…":g?"N":y?"V":"D",m=c.status!=="finished"||g?"#888":y?"#1A6B3C":"#c0392b";let b=a[c.mode]||c.mode;c.away_id===null&&!b.startsWith("IA")&&(b="IA");const w=c.home_id===r.id?c.away:c.home;let h;c.away_id===null?h=b:w?h=`${w.club_name||w.pseudo} (${w.pseudo})`:h="Adversaire";let $="";c.status==="in_progress"&&Date.now()-new Date(c.created_at).getTime()>3600*1e3&&($=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const p=new Date(c.created_at),z=p.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+p.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),S=c.status==="finished"?`${c.home_score} - ${c.away_score}`:`${c.home_score||0} - ${c.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${$}</div>
        <div style="font-size:11px;color:var(--gray-600)">${b} · ${z}${c.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${S}</span>
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
  </div>`}Ln(In);const ve={user:null,profile:null,page:"home",params:{}};function mt(t,e="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=t,o.className=`show ${e}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function Ma(t,e,i=""){document.getElementById("modal-title").textContent=t,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Yi(){document.getElementById("modal-overlay").classList.add("hidden")}async function ti(){if(!ve.user)return;const{data:t}=await v.from("users").select("*").eq("id",ve.user.id).single();t&&(ve.profile=t)}const wn="mw_theme";function oi(){return localStorage.getItem(wn)||"dark"}function Ro(t){var e;localStorage.setItem(wn,t),xi(t),(e=ve.profile)!=null&&e.id&&v.from("users").update({theme:t}).eq("id",ve.profile.id).then(()=>{})}function xi(t){var e,i;document.documentElement.setAttribute("data-theme",t),t==="club"&&(document.documentElement.style.setProperty("--club-color1",((e=ve.profile)==null?void 0:e.club_color1)||"#0a0f0a"),document.documentElement.style.setProperty("--club-color2",((i=ve.profile)==null?void 0:i.club_color2)||"#080d08"))}function ht(t,e={}){ve.page=t,ve.params=e,_n()}async function _n(){var o,r,n,a;const t=document.getElementById("page-content");if(!t)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===ve.page)});const e=document.getElementById("nav-credits");e&&ve.profile&&(e.textContent=`💰 ${(ve.profile.credits||0).toLocaleString("fr")}`);const i={state:ve,navigate:ht,toast:mt,openModal:Ma,closeModal:Yi,refreshProfile:ti};switch(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ve.page){case"home":await ji(t,i);break;case"home2":await ji(t,i);break;case"game":await br(t,i);break;case"settings":await cn(t,i);break;case"collection":await kr(t,i);break;case"decks":await Oi(t,i);break;case"boosters":await Nn(t,i);break;case"ranked":await Aa(t,i);break;case"match":{const d=ve.params&&ve.params.matchMode||"vs_ai_easy";d==="random"?await Ki(t,i,!1):d==="ranked"?await Ki(t,i,!0):d==="friend"?await sa(t,i,(o=ve.params)==null?void 0:o.friendId,(r=ve.params)==null?void 0:r.friendName):d==="mini_league"||d==="mini-league"?await Po(t,i,(n=ve.params)==null?void 0:n.mlMatchId,(a=ve.params)==null?void 0:a.leagueId):await qr(t,i);break}case"market":await Ea(t,i);break;case"rankings":await Ia(t,i);break;case"matches":await Ta(t,i);break;case"friends":await ur(t,i);break;case"mini-league":await pa(t,i);break;case"match-mini-league":{const d=ve.params||{};await Po(t,i,d.mlMatchId,d.leagueId);break}default:await ji(t,i)}}function Ca(){var o,r;const t=document.getElementById("app"),e=ve.profile;if(!e)return;const i="/icons/";t.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.08.01-1549" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",a=>{a.preventDefault(),ht(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>ht("home")),document.getElementById("nav-credits").addEventListener("click",()=>ht("boosters")),(o=document.getElementById("journal-btn"))==null||o.addEventListener("click",()=>ja()),(r=document.getElementById("settings-btn"))==null||r.addEventListener("click",()=>ht("settings"))}async function ja(){const{data:t}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const r=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}function qa(t,{onPlay:e}){var o;const i="/icons/";t.style.cssText="",t.innerHTML=`
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
  </div>`,(o=t.querySelector("#pl-play-btn"))==null||o.addEventListener("click",e)}async function Ba(){xi(oi()),document.getElementById("modal-overlay").addEventListener("click",o=>{o.target===o.currentTarget&&Yi()}),document.getElementById("modal-close").addEventListener("click",Yi);const{data:{session:t}}=await v.auth.getSession();if(!t){No(),qa(document.getElementById("app"),{onPlay:()=>wo(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:mt})});return}ve.user=t.user,await ti(),xi(oi()),No();try{const{data:o}=await v.from("formation_links_overrides").select("formation, links"),r={};(o||[]).forEach(n=>{r[n.formation]=n.links}),zn(r)}catch(o){console.warn("Impossible de charger les overrides de formation:",o)}if(!ve.profile){Tn(document.getElementById("app"),{state:ve,navigate:async()=>{await ti(),xi(oi()),Di()},toast:mt,refreshProfile:ti});return}v.rpc("heartbeat").then(()=>{}).catch(()=>{}),setInterval(()=>{v.rpc("heartbeat").then(()=>{}).catch(()=>{})},45e3);const e=Array.isArray(ve.profile.pending_boosters)?ve.profile.pending_boosters:[];if(!ve.profile.onboarding_done&&e.length>0){Jn(document.getElementById("app"),{state:ve,toast:mt,refreshProfile:ti,navigate:()=>{Di(),setTimeout(()=>So(ve.profile,ht,mt),800)}});return}Di(),new URLSearchParams(location.search).get("tutorial")==="1"?(history.replaceState({},"",location.pathname),setTimeout(()=>ln(ve.profile,ht,mt),800)):setTimeout(()=>So(ve.profile,ht,mt),800),v.auth.onAuthStateChange(async(o,r)=>{o==="SIGNED_OUT"&&(ve.user=null,ve.profile=null,document.getElementById("app").innerHTML="",wo(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:mt}))})}function Da(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Ii(){const t=document.getElementById("app");t&&(t.style.height=Da()+"px")}window.addEventListener("resize",Ii);window.addEventListener("orientationchange",()=>setTimeout(Ii,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Ii);function Di(){const t=()=>{var i;(i=ve.user)!=null&&i.id&&v.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",ve.user.id).then(()=>{})};t(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(t,6e4);const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Ii(),Ca(),_n()}function No(){const t=document.getElementById("app-loader"),e=document.getElementById("app");e&&(e.style.display=""),t&&(t.classList.add("zoom-out"),setTimeout(()=>t.style.display="none",500))}function kn(t){var o;const e=document.getElementById("app-loader");if(e&&(e.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${t||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(o=document.getElementById("boot-retry"))==null||o.addEventListener("click",()=>window.location.reload())}Ba().catch(t=>{console.error("Échec du démarrage:",t),kn()});setTimeout(()=>{const t=document.getElementById("app-loader");t&&t.style.display!=="none"&&!t.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&kn("Le serveur met trop de temps à répondre.")},12e3);
