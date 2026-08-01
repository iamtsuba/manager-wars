const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/special-cards-Bn7RhUuk.js","assets/special-cards-D_M6t_P4.css"])))=>i.map(i=>d[i]);
import{t as eo,s as v,u as Vo,n as ut,g as Bt,p as nt,v as si,o as Ut,r as Ae,k as At,w as Oi,x as Ft,y as zi,F as Ai,z as Yo,T as Fi,q as An,C as Mn,d as Cn}from"./special-cards-Bn7RhUuk.js";const jn="/";async function $o(t,{navigate:e,toast:i}){let o="login";const r=await eo("signup_access_code_required"),n=()=>{var d,c,s,l,p,b,g,x;const a=o==="login";if(t.innerHTML=`
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
        <img src="${jn}icons/logo-withname.png" alt="Manager Wars" style="height:44px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(d=document.getElementById("tab-login-btn"))==null||d.addEventListener("click",()=>{o="login",n()}),(c=document.getElementById("tab-reg-btn"))==null||c.addEventListener("click",()=>{o="register",n()}),a){(s=document.getElementById("login-password"))==null||s.addEventListener("keydown",f=>{var _;f.key==="Enter"&&((_=document.getElementById("login-btn"))==null||_.click())});let m=null,y=!1;r&&((l=document.getElementById("login-access-code"))==null||l.addEventListener("input",f=>{const _=f.target.value,h=document.getElementById("login-access-code-status"),E=document.getElementById("login-btn");if(clearTimeout(m),y=!1,E&&(E.disabled=!0,E.style.opacity="0.45",E.style.cursor="not-allowed"),!_){h&&(h.textContent="");return}h&&(h.textContent="⏳ Vérification…",h.style.color="rgba(255,255,255,0.4)"),m=setTimeout(async()=>{const{data:u,error:I}=await v.rpc("check_signup_password",{input_password:_});if(I){h&&(h.textContent="Erreur de vérification.",h.style.color="#f87171");return}y=!!u,h&&(h.textContent=y?"✅ Code valide":"❌ Code incorrect",h.style.color=y?"#4ade80":"#f87171"),E&&(E.disabled=!y,E.style.opacity=y?"1":"0.45",E.style.cursor=y?"pointer":"not-allowed")},400)})),(p=document.getElementById("login-btn"))==null||p.addEventListener("click",async()=>{var $;const f=document.getElementById("login-email").value.trim(),_=document.getElementById("login-password").value,h=(($=document.getElementById("login-access-code"))==null?void 0:$.value)||"",E=document.getElementById("login-error");if(E.textContent="",!f||!_){E.textContent="Remplissez tous les champs.";return}if(r){const{data:S}=await v.rpc("check_signup_password",{input_password:h});if(!S){E.textContent="Code d'accès incorrect.";return}}const u=document.getElementById("login-btn");u.textContent="⏳ Connexion…",u.disabled=!0;const{error:I}=await v.auth.signInWithPassword({email:f,password:_});if(u.textContent="⚽ Se connecter",u.disabled=!1,I){E.textContent=I.message.includes("Invalid")?"Email ou mot de passe incorrect.":I.message;return}window.location.reload()})}else{(b=document.getElementById("reg-confirm"))==null||b.addEventListener("keydown",f=>{var _;f.key==="Enter"&&((_=document.getElementById("reg-btn"))==null||_.click())});let m=null,y=!1;r&&((g=document.getElementById("reg-access-code"))==null||g.addEventListener("input",f=>{const _=f.target.value,h=document.getElementById("access-code-status"),E=document.getElementById("reg-btn");if(clearTimeout(m),y=!1,E&&(E.disabled=!0,E.style.opacity="0.45",E.style.cursor="not-allowed"),!_){h&&(h.textContent="");return}h&&(h.textContent="⏳ Vérification…",h.style.color="rgba(255,255,255,0.4)"),m=setTimeout(async()=>{const{data:u,error:I}=await v.rpc("check_signup_password",{input_password:_});if(I){h&&(h.textContent="Erreur de vérification.",h.style.color="#f87171");return}y=!!u,h&&(h.textContent=y?"✅ Code valide":"❌ Code incorrect",h.style.color=y?"#4ade80":"#f87171"),E&&(E.disabled=!y,E.style.opacity=y?"1":"0.45",E.style.cursor=y?"pointer":"not-allowed")},400)})),(x=document.getElementById("reg-btn"))==null||x.addEventListener("click",async()=>{var q;const f=document.getElementById("reg-email").value.trim(),_=document.getElementById("reg-password").value,h=document.getElementById("reg-confirm").value,E=((q=document.getElementById("reg-access-code"))==null?void 0:q.value)||"",u=document.getElementById("reg-error");if(u.textContent="",!f||!_||!h){u.textContent="Remplissez tous les champs.";return}if(!f.includes("@")||!f.includes(".")){u.textContent="Adresse email invalide.";return}if(_.length<6){u.textContent="Mot de passe trop court (min. 6 caractères).";return}if(_!==h){u.textContent="Les mots de passe ne correspondent pas.";return}if(r){const{data:O}=await v.rpc("check_signup_password",{input_password:E});if(!O){u.textContent="Code d'accès incorrect.";return}}const I=document.getElementById("reg-btn");I.textContent="⏳ Création…",I.disabled=!0;const{data:$,error:S}=await v.auth.signUp({email:f,password:_});if(I.textContent="🚀 Créer mon compte",I.disabled=!1,S){S.message.includes("already registered")||S.message.includes("already exists")||S.message.includes("User already")?u.textContent="Un compte existe déjà avec cette adresse email.":u.textContent=S.message;return}if($!=null&&$.user&&Array.isArray($.user.identities)&&$.user.identities.length===0){u.textContent="Un compte existe déjà avec cette adresse email.";return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),o="login",n(),setTimeout(()=>{const O=document.getElementById("login-email");O&&(O.value=f)},50)})}};n()}function qn(t,{state:e,navigate:i,toast:o,refreshProfile:r}){let n="#1A6B3C",a="#D4A017";t.innerHTML=`
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
  `;function d(){var x;const s=document.getElementById("logo-preview"),l=document.getElementById("logo-initials"),p=((x=document.getElementById("setup-club"))==null?void 0:x.value)||"MW",b=p.trim().split(" ").filter(Boolean),g=b.length>=2?(b[0][0]+b[1][0]).toUpperCase():p.slice(0,2).toUpperCase();s&&(s.style.background=a,s.style.borderColor=n),l&&(l.textContent=g,l.style.color=n)}document.getElementById("color1").addEventListener("input",s=>{n=s.target.value,document.getElementById("swatch1").style.background=n,d()}),document.getElementById("color2").addEventListener("input",s=>{a=s.target.value,document.getElementById("swatch2").style.background=a,d()});function c(s){document.querySelectorAll(".setup-step").forEach(l=>l.classList.remove("active")),document.getElementById(`step-${s}`).classList.add("active"),document.getElementById("step-num").textContent=s,document.getElementById("progress-fill").style.width=`${Math.round(s/3*100)}%`,s===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("step1-error");if(l.textContent="",s.length<3){l.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:p}=await v.from("users").select("id").eq("pseudo",s).maybeSingle();if(p){l.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const s=document.getElementById("setup-club").value.trim(),l=document.getElementById("step2-error");if(l.textContent="",s.length<2){l.textContent="Nom trop court (min. 2 caractères).";return}const{data:p}=await v.from("users").select("id").eq("club_name",s).maybeSingle();if(p){l.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("setup-club").value.trim(),p=document.getElementById("step3-error"),b=document.getElementById("step3-finish");p.textContent="",b.disabled=!0,b.textContent="Création en cours…";try{const{error:g}=await v.from("users").insert({id:e.user.id,pseudo:s,club_name:l,club_color1:n,club_color2:a,credits:15e3});if(g)throw g;await Bn(e.user.id),await r(),o(`Bienvenue ${s} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){p.textContent=g.message,b.disabled=!1,b.textContent="🚀 Créer mon profil !"}})}async function Bn(t){const e=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1},{type:"stadium",count:1}];try{await v.from("users").update({pending_boosters:e,onboarding_done:!1,first_booster_opened:!1}).eq("id",t)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Dn="modulepreload",Fn=function(t){return"/"+t},Eo={},Wo=function(e,i,o){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),d=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(i.map(c=>{if(c=Fn(c),c in Eo)return;Eo[c]=!0;const s=c.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${l}`))return;const p=document.createElement("link");if(p.rel=s?"stylesheet":Dn,s||(p.as="script"),p.crossOrigin="",p.href=c,d&&p.setAttribute("nonce",d),document.head.appendChild(p),s)return new Promise((b,g)=>{p.addEventListener("load",b),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(a){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=a,window.dispatchEvent(d),!d.defaultPrevented)throw a}return r.then(a=>{for(const d of a||[])d.status==="rejected"&&n(d.reason);return e().catch(n)})},Xo="mw_sound_volume";function to(){const t=localStorage.getItem(Xo);if(t===null)return 100;const e=parseInt(t,10);return Number.isFinite(e)?Math.max(0,Math.min(100,e)):100}function Pn(t){localStorage.setItem(Xo,String(Math.max(0,Math.min(100,Math.round(t)))))}function io(){return to()===0}function _i(t){return Math.max(0,Math.min(1,t*(to()/100)))}function oo(t,e=1){if(io())return null;try{const i=new Audio(t);return i.volume=_i(e),i.play().catch(()=>{}),i}catch{return null}}let vt=null,Hi=null,Lo=.3;function Jo(t,e=.3){if(Lo=e,vt&&Hi===t&&!vt.paused){vt.volume=_i(Lo);return}if(Ot(),!io())try{const i=new Audio(t);i.loop=!0,i.volume=_i(e),i.play().catch(()=>{}),vt=i,Hi=t}catch{}}function Ot(){if(vt)try{vt.pause(),vt.currentTime=0}catch{}vt=null,Hi=null}let ti=null;function Qo(t,e=.6){if(Ve(),!io())try{const i=new Audio(t);i.volume=_i(e),i.play().catch(()=>{}),ti=i}catch{}}function Ve(){if(ti)try{ti.pause(),ti.currentTime=0}catch{}ti=null}async function Zo(t=null){const e=new Date().toISOString().slice(0,10),{data:i}=await v.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const o=i.filter(a=>!(a.available_from&&e<a.available_from||a.available_until&&e>a.available_until));if(!o.length)return[];let r=o;if(t){const a=o.filter(d=>d.max_per_user!=null);if(a.length){const{data:d}=await v.from("booster_claims").select("booster_id").eq("user_id",t).in("booster_id",a.map(s=>s.id)),c={};(d||[]).forEach(s=>{c[s.booster_id]=(c[s.booster_id]||0)+1}),r=o.filter(s=>s.max_per_user==null?!0:(c[s.id]||0)<s.max_per_user)}}if(!r.length)return[];const{data:n}=await v.from("booster_drop_rates").select("*").in("booster_id",r.map(a=>a.id)).order("sort_order");return r.map(a=>({...a,rates:(n||[]).filter(d=>d.booster_id===a.id)}))}async function Rn(t,e){const{data:i}=await v.from("booster_configs").select("max_per_user").eq("id",e).single();i!=null&&i.max_per_user&&await v.from("booster_claims").insert({user_id:t,booster_id:e})}function Nn(t){if(!(t!=null&&t.length))return null;const e=t.reduce((o,r)=>o+Number(r.percentage),0);let i=Math.random()*e;for(const o of t)if(i-=Number(o.percentage),i<=0)return o;return t[t.length-1]}const en=()=>Object.keys(ut),Gn=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Ui={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function On(t){const e=t.player;if(!e)return"";const i=t.evolution_bonus||0;return Ae({...e,_evolution_bonus:i},{width:140})}function no(t){var r;const e={};(t.rates||[]).forEach(n=>{e[n.card_type]=(e[n.card_type]||0)+Number(n.percentage||0)});const i=((r=Object.entries(e).sort((n,a)=>a[1]-n[1])[0])==null?void 0:r[0])||"player",o=t.image_url||"booster-players.png";return{id:t.id,img:"/icons/"+o,name:t.name,sub:`${t.card_count} carte(s)`,cost:t.price_type==="credits"&&t.price_credits||0,costLabel:t.price_type==="credits"?`${(t.price_credits||0).toLocaleString("fr")} crédits`:t.price_type==="pub"?"1 pub":"Gratuit",cardCount:t.card_count||5,type:i,isPub:t.price_type==="pub",rates:t.rates||[],allow_duplicates:t.allow_duplicates!==!1,_boosterId:t.id,_raw:t}}async function Hn(t,e,i,o){if(t.reward_type==="credits"){const r=(e.credits||0)+(t.credits_amount||0),{error:n}=await v.from("users").update({credits:r}).eq("id",e.id);if(n)throw n;return e.credits=r,{type:"credits",amount:t.credits_amount}}if(t.reward_type==="card"){const{data:r}=await v.from("players").select("firstname, surname_real, rarity").eq("id",t.player_id).single(),{error:n}=await v.from("cards").insert({owner_id:e.id,player_id:t.player_id,card_type:"player"});if(n)throw n;return{type:"card",player:r}}if(t.reward_type==="booster"){const{data:r}=await v.from("booster_configs").select("*").eq("id",t.booster_config_id).single(),{data:n}=await v.from("booster_drop_rates").select("*").eq("booster_id",t.booster_config_id);if(!r)throw new Error("Booster introuvable (peut-être supprimé depuis).");const a=no({...r,rates:n});let d=[];return a.type==="formation"?d=await so(e,0):a.type==="game_changer"?d=await ao(e,a.cardCount,0):a.type==="player"?d=await ro(e,a.cardCount,0):d=await ki(e,{...a,cost:0}),{type:"booster",name:r.name,cards:d,boosterUI:a}}throw new Error("Type de récompense inconnu.")}async function Un(t,{state:e,navigate:i,toast:o}){var p,b,g;Yt(i,e.profile,"boosters","/icons/",o);const r=((p=e.profile)==null?void 0:p.credits)||0;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let n=[];try{n=(await Zo((b=e.user)==null?void 0:b.id)).map(no)}catch(x){console.warn("Erreur chargement boosters DB, fallback hardcodé",x)}n.length||(n=Gn.map(x=>({...x,rates:[],isPub:x.id==="players_pub"})));const a=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.profile.id).then(x=>x.data||[]),d=new Set(a.filter(x=>x.card_type==="stadium").map(x=>x.stadium_id)),c=new Set(a.filter(x=>x.card_type==="formation").map(x=>x.formation)),s=new Set(a.filter(x=>x.card_type==="game_changer").map(x=>x.gc_type)),l={};for(const x of n){if(x.allow_duplicates!==!1||!((g=x.rates)!=null&&g.length))continue;const m=[...new Set((x.rates||[]).map(f=>f.card_type))];let y=!1;for(const f of m)if(f==="stadium"){const{data:_}=await v.from("stadium_definitions").select("id");if((_||[]).some(h=>!d.has(h.id))){y=!0;break}}else if(f==="game_changer"){const{data:_}=await v.from("gc_definitions").select("name").eq("is_active",!0);if((_||[]).some(h=>!s.has(h.name))){y=!0;break}}else if(f==="formation"){const{FORMATION_LINKS:_}=await Wo(async()=>{const{FORMATION_LINKS:h}=await import("./special-cards-Bn7RhUuk.js").then(E=>E.G);return{FORMATION_LINKS:h}},__vite__mapDeps([0,1]));if(Object.keys(_).some(h=>!c.has(h))){y=!0;break}}else{y=!0;break}y||(l[x.id]=!0)}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${r.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${n.map(x=>{const m=x.cost===0||r>=x.cost,y=l[x.id]===!0;return`<div class="booster-card ${!m||y?"disabled":""}" data-booster="${x.id}" style="position:relative">
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
            ${y?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--tile-fg-dim);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,t.querySelectorAll(".booster-card:not(.disabled)").forEach(x=>{x.addEventListener("click",async()=>{const m=n.find(y=>y.id===x.dataset.booster);if(m){x.style.opacity="0.5",x.style.pointerEvents="none";try{await Kn(m,{state:e,toast:o,navigate:i,container:t})}catch(y){o(y.message,"error"),x.style.opacity="",x.style.pointerEvents=""}}})}),t.querySelectorAll(".booster-info-btn").forEach(x=>{x.addEventListener("click",m=>{m.stopPropagation();const y=n.find(f=>f.id===x.dataset.boosterId);Jn(y)})})}async function Kn(t,{state:e,toast:i,navigate:o,container:r}){var p,b;if(t.cost>0&&e.profile.credits<t.cost){i("Crédits insuffisants","error");return}if(t.isPub){if(!await eo("pub_mode")){Vo();return}await Zn()}const{data:n}=await v.from("cards").select("card_type, player_id, formation").eq("owner_id",e.profile.id),a=new Set((n||[]).filter(g=>g.card_type==="player").map(g=>g.player_id)),d=new Set((n||[]).filter(g=>g.card_type==="formation").map(g=>g.formation));let c=[],s=null;try{if((p=t.rates)!=null&&p.length)c=await ki(e.profile,t);else{const g=t.type||"player";g==="player"?c=await ro(e.profile,t.cardCount,t.cost):g==="game_changer"?c=await ao(e.profile,t.cardCount,t.cost):g==="formation"?c=await so(e.profile,t.cost):c=await ki(e.profile,t)}}catch(g){s=g.message||String(g),console.error("[Booster] Erreur:",g)}if(c!=null&&c.length&&t._boosterId&&await Rn(e.user.id,t._boosterId),!(c!=null&&c.length)){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",g.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${s||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(g),(b=g.querySelector("#anim-close-err"))==null||b.addEventListener("click",()=>g.remove());return}c.forEach(g=>{g.card_type==="player"&&g.player?g.isDuplicate=a.has(g.player.id):g.card_type==="formation"&&(g.isDuplicate=d.has(g.formation))});const{data:l}=await v.from("users").select("*").eq("id",e.profile.id).single();l&&(e.profile=l),lo(c,t,o)}function Vn(){const t=Math.random()*100;return t<.5?"legende":t<2?"special":t<10?"normal_high":"normal_low"}function ht(t){return Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Yn(t,e){let i;switch(e){case"legende":i=t.filter(o=>o.rarity==="legende"),i.length||(i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=t.filter(o=>ht(o)>=6));break;case"special":i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=t.filter(o=>ht(o)>=6));break;case"normal_high":i=t.filter(o=>o.rarity==="normal"&&ht(o)>=6),i.length||(i=t.filter(o=>ht(o)>=6));break;default:i=t.filter(o=>o.rarity==="normal"&&ht(o)>=1&&ht(o)<=5),i.length||(i=t.filter(o=>o.rarity==="normal"));break}return i.length||(i=t),i[Math.floor(Math.random()*i.length)]}async function ki(t,e){if(e.cost>0){const{error:b}=await v.from("users").update({credits:t.credits-e.cost}).eq("id",t.id);if(b)throw b;t.credits-=e.cost,Wt(t.credits)}const i=e.allow_duplicates!==!1;let o=[];const{data:r,error:n}=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.id);if(n){const{data:b}=await v.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",t.id);o=b||[]}else o=r||[];const a=new Set(o.filter(b=>b.card_type==="player").map(b=>b.player_id)),d=new Set(o.filter(b=>b.card_type==="formation").map(b=>b.formation)),c=new Set(o.filter(b=>b.card_type==="game_changer").map(b=>b.gc_type)),s=new Set(o.filter(b=>b.card_type==="stadium").map(b=>b.stadium_id).filter(Boolean)),l=new Set,p=[];for(let b=0;b<(e.cardCount||5);b++){const g=Nn(e.rates);if(g){if(g.card_type==="player"){const x=$=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[$]||$,m=g.rarity?x(g.rarity):null;let y=v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);m&&(y=y.eq("rarity",m));const{data:f}=await y;let _=f||[];if((g.note_min||g.note_max)&&(_=_.filter($=>{const S=Math.max(Number($.note_g)||0,Number($.note_d)||0,Number($.note_m)||0,Number($.note_a)||0);return(!g.note_min||S>=g.note_min)&&(!g.note_max||S<=g.note_max)})),_.length||(g.note_min||g.note_max?(_=f||[],console.warn("[Booster] Aucun joueur avec note",g.note_min,"-",g.note_max,"— fallback rareté uniquement")):_=f||[]),!_.length)continue;let h=_.filter($=>!l.has($.id));if(i)h.length||(h=_);else if(h=h.filter($=>!a.has($.id)),!h.length)continue;const E=h[Math.floor(Math.random()*h.length)];l.add(E.id);const u=a.has(E.id),{data:I}=await v.from("cards").insert({owner_id:t.id,player_id:E.id,card_type:"player"}).select().single();I&&(p.push({...I,player:E,isDuplicate:u}),v.rpc("record_transfer",{p_card_id:I.id,p_player_id:E.id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(g.card_type==="game_changer"){const{data:x}=await v.from("gc_definitions").select("id,name,color,effect,image_url,gc_type").eq("is_active",!0).eq("gc_type","game_changer"),m=x!=null&&x.length?x:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],y=i?m:m.filter(E=>!c.has(E.name));if(!i&&!y.length)continue;const f=y[Math.floor(Math.random()*y.length)],_=f.name,{data:h}=await v.from("cards").insert({owner_id:t.id,card_type:"game_changer",gc_type:_,gc_definition_id:f.id||null}).select().single();h&&p.push({...h,_gcDef:f})}else if(g.card_type==="formation"){const x=en(),m=i?x:x.filter(h=>!d.has(h));if(!i&&!m.length)continue;const y=m[Math.floor(Math.random()*m.length)],f=d.has(y),{data:_}=await v.from("cards").insert({owner_id:t.id,card_type:"formation",formation:y}).select();_!=null&&_[0]&&p.push({..._[0],isDuplicate:f})}else if(g.card_type==="stadium"){const{data:x,error:m}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(m){console.error("[Booster] stadium_definitions:",m.message);continue}if(!(x!=null&&x.length)){console.warn("[Booster] Aucun stade en DB");continue}const y=i?x:x.filter(E=>!s.has(E.id));if(!i&&!y.length)continue;const f=y[Math.floor(Math.random()*y.length)],{data:_,error:h}=await v.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:f.id}).select("id,card_type,stadium_id").single();if(h){console.error("[Booster] insert stadium card:",h.message);continue}_&&p.push({..._,rarity:"normal",_stadiumDef:f})}}}return p}async function ro(t,e,i){if(i>0){const{error:s}=await v.from("users").update({credits:t.credits-i}).eq("id",t.id);if(s)throw s;t.credits-=i,Wt(t.credits)}const{data:o}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const r=o.filter(s=>s.job==="GK"),n=o.filter(s=>s.job!=="GK"),a=!t.first_booster_opened&&r.length>0,d=[];for(let s=0;s<e;s++){const l=s===0&&a?r:s===0?n:o,p=Vn(),b=Yn(l,p);b&&d.push(b)}a&&await v.from("users").update({first_booster_opened:!0}).eq("id",t.id);const{data:c}=await v.from("cards").insert(d.map(s=>({owner_id:t.id,player_id:s.id,card_type:"player"}))).select();return(c||[]).forEach((s,l)=>{v.rpc("record_transfer",{p_card_id:s.id,p_player_id:d[l].id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((s,l)=>({...c[l],player:s}))}async function ao(t,e,i){const{error:o}=await v.from("users").update({credits:t.credits-i}).eq("id",t.id);if(o)throw o;t.credits-=i,Wt(t.credits);const{data:r}=await v.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),n=r!=null&&r.length?r:Object.keys(Ui).map(p=>({name:p,gc_type:"game_changer"})),a=Array.from({length:e},()=>n[Math.floor(Math.random()*n.length)]),d=a.map(p=>({owner_id:t.id,card_type:"game_changer",gc_type:p.name,gc_definition_id:p.id||null})),{data:c,error:s}=await v.from("cards").insert(d).select();return s&&console.error("[Booster GC] Erreur insert:",s.message,s),(c||[]).map((p,b)=>({...p,_gcDef:a[b]||null}))}async function so(t,e){const{error:i}=await v.from("users").update({credits:t.credits-e}).eq("id",t.id);if(i)throw i;t.credits-=e,Wt(t.credits);const{data:o}=await v.from("cards").select("formation").eq("owner_id",t.id).eq("card_type","formation"),r=new Set((o||[]).map(l=>l.formation)),n=en(),a=n[Math.floor(Math.random()*n.length)],d=r.has(a),{data:c,error:s}=await v.from("cards").insert({owner_id:t.id,card_type:"formation",formation:a}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),(c||[]).map(l=>({...l,isDuplicate:d}))}async function Wn(t,e){const{data:i}=await v.from("cards").select("stadium_id").eq("owner_id",t.id).eq("card_type","stadium"),o=new Set((i||[]).map(s=>s.stadium_id).filter(Boolean)),{data:r}=await v.from("stadium_definitions").select("*");if(!(r!=null&&r.length))throw new Error("Aucun stade configuré en base.");const n=r[Math.floor(Math.random()*r.length)],a=o.has(n.id),{data:d,error:c}=await v.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:n.id}).select();return c&&console.error("[Booster Stade] Erreur insert:",c.message,c),(d||[]).map(s=>({...s,isDuplicate:a,_stadiumDef:n}))}function lo(t,e,i,o=null){var U,L;if(!t||t.length===0){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",w.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(w),(U=w.querySelector("#anim-close-err"))==null||U.addEventListener("click",()=>w.remove());return}t=[...t].sort((w,F)=>{const R=w.player?ht(w.player):-1;return(F.player?ht(F.player):-1)-R});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let n=!1;const a=document.getElementById("pack-cut-zone"),d=document.getElementById("pack-blade");let c=!1;const s=w=>w.touches&&w.touches[0]?w.touches[0].clientX:w.clientX;function l(w){n||(c=!0,d.style.opacity="1",p(w))}function p(w){if(!c||n)return;const F=a.getBoundingClientRect(),R=s(w)-F.left,se=Math.max(0,Math.min(1,R/F.width));d.style.width=se*F.width+"px",se>=.82&&g()}function b(){n||(c=!1,d.style.transition="width .2s ease, opacity .2s ease",d.style.width="0",d.style.opacity="0",setTimeout(()=>{n||(d.style.transition="")},220))}function g(){var F;if(n)return;n=!0,c=!1,d.style.width="100%",d.style.opacity="1",(F=document.getElementById("cut-flash"))==null||F.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const w=document.getElementById("cut-hint");w&&(w.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{d.style.opacity="0",document.getElementById("pack-phase").style.display="none",f(0)},620)}a.addEventListener("pointerdown",l),window.addEventListener("pointermove",p),window.addEventListener("pointerup",b),a.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchmove",p,{passive:!0}),window.addEventListener("touchend",b);let x=0,m=!1;const y=new Set;function f(w){x=w,document.getElementById("reveal-phase").style.display="flex",_(),h(w,0),S()}function _(){const w=document.getElementById("card-dots");w&&(w.innerHTML=t.map((F,R)=>`<div class="card-dot" data-i="${R}" style="width:8px;height:8px;border-radius:50%;background:${R===x?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),w.querySelectorAll(".card-dot").forEach(F=>F.addEventListener("click",()=>u(parseInt(F.dataset.i)))))}function h(w,F){var be,le;const R=t[w],se=document.getElementById("card-counter"),ce=document.getElementById("card-track");se&&(se.textContent=`Carte ${w+1} / ${t.length}`);const M=document.getElementById("reveal-btns");M&&(M.style.display=w===t.length-1?"flex":"none");const H=R.card_type==="player"&&((be=R.player)==null?void 0:be.rarity)==="legende",ue=!y.has(w);if(y.add(w),R.card_type==="player"&&R.player){const j=R.player,Y=j.job||"ATT";(Number(Y==="GK"?j.note_g:Y==="DEF"?j.note_d:Y==="MIL"?j.note_m:j.note_a)||0)+(R.evolution_bonus||0)}const me=j=>{ce.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${H?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Xn(R)}</div>
          ${R.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const Y=document.getElementById("current-card-wrap");F!==0?(Y.style.transition="none",Y.style.transform=`translateX(${F>0?100:-100}%)`,requestAnimationFrame(()=>{Y.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",Y.style.transform="translateX(0)"})):Y.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),j||H?O():W(),_()};ue&&((le=R.player)==null?void 0:le.rarity)==="legende"&&R.card_type==="player"&&R.player?E(R,()=>me(!0)):me(!1)}function E(w,F){var ae;m=!0;const R=w.player,se=`https://flagsapi.com/${R.country_code}/flat/64.png`,ce=(ae=R.clubs)==null?void 0:ae.logo_url,M=Bt(R),H=R.job||"ATT",ue=Number(H==="GK"?R.note_g:H==="DEF"?R.note_d:H==="MIL"?R.note_m:R.note_a)||0,me=w.evolution_bonus||0,be=ue+me,le=R.rarity==="legende",j=be>=18,Y=document.getElementById("walkout-overlay"),re=document.getElementById("walkout-stage");if(!Y||!re){m=!1,F();return}let te=null;le&&(te=oo("/sounds/Legendary.mp3",.8)),Y.style.display="flex";const X=()=>{const pe=re.firstElementChild;pe&&(pe.classList.remove("wo-in"),pe.classList.add("wo-out"))},N=1800,J=400;re.innerHTML=`<img class="wo-in" src="${se}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(X,N),setTimeout(()=>{var pe;re.innerHTML=ce?`<img class="wo-in" src="${ce}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((pe=R.clubs)==null?void 0:pe.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},N+J),setTimeout(X,N*2+J),setTimeout(()=>{re.innerHTML=M?`<img class="wo-in" src="${M}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(N+J)*2),setTimeout(X,(N+J)*2+N);const K=j?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[H]||"#fff";setTimeout(()=>{re.innerHTML=`<div class="wo-in" style="
        font-size:${j?"120px":"90px"};font-weight:900;color:${K};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${K}, 0 0 60px ${K};
        ${j?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${be}
      </div>`,j&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(N+J)*3),setTimeout(X,(N+J)*3+N),setTimeout(()=>{Y.style.display="none",re.innerHTML="",m=!1,te&&!le&&te.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),F()},(N+J)*4)}function u(w){if(m||w<0||w>=t.length||w===x)return;const F=w>x?1:-1;x=w,h(w,F)}function I(){u(x+1)}function $(){u(x-1)}function S(){const w=document.getElementById("card-viewport");if(!w||w._swipeBound)return;w._swipeBound=!0;let F=0,R=0,se=0,ce=!1;const M=le=>le.touches?le.touches[0].clientX:le.clientX,H=le=>le.touches?le.touches[0].clientY:le.clientY,ue=le=>{ce=!0,F=M(le),R=H(le),se=0},me=le=>{if(!ce)return;se=M(le)-F;const j=H(le)-R;if(Math.abs(se)<Math.abs(j))return;const Y=document.getElementById("current-card-wrap");Y&&(Y.style.transition="none",Y.style.transform=`translateX(${se*.6}px) rotate(${se*.02}deg)`)},be=()=>{if(!ce)return;ce=!1;const le=document.getElementById("current-card-wrap"),j=55;se<=-j&&x<t.length-1?I():se>=j&&x>0?$():le&&(le.style.transition="transform .2s ease",le.style.transform="translateX(0)")};w.addEventListener("pointerdown",ue),w.addEventListener("pointermove",me),w.addEventListener("pointerup",be),w.addEventListener("pointercancel",be),w.addEventListener("touchstart",ue,{passive:!0}),w.addEventListener("touchmove",me,{passive:!0}),w.addEventListener("touchend",be),w.addEventListener("click",le=>{if(Math.abs(se)>8)return;const j=w.getBoundingClientRect();le.clientX-j.left>j.width/2?I():$()})}let q=null;function O(){const w=document.getElementById("fireworks-canvas");if(!w)return;w.width=window.innerWidth,w.height=window.innerHeight;const F=w.getContext("2d"),R=[];function se(){const M=Math.random()*w.width,H=Math.random()*w.height*.6,ue=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],me=ue[Math.floor(Math.random()*ue.length)];for(let be=0;be<60;be++){const le=Math.PI*2/60*be,j=2+Math.random()*5;R.push({x:M,y:H,vx:Math.cos(le)*j,vy:Math.sin(le)*j,alpha:1,color:me,size:2+Math.random()*3})}}se(),q=setInterval(se,600);function ce(){if(document.getElementById("fireworks-canvas")){F.clearRect(0,0,w.width,w.height);for(let M=R.length-1;M>=0;M--){const H=R[M];if(H.x+=H.vx,H.y+=H.vy+.08,H.vy*=.98,H.alpha-=.018,H.alpha<=0){R.splice(M,1);continue}F.globalAlpha=H.alpha,F.fillStyle=H.color,F.beginPath(),F.arc(H.x,H.y,H.size,0,Math.PI*2),F.fill()}F.globalAlpha=1,(q!==null||R.length>0)&&requestAnimationFrame(ce)}}ce()}function W(){q!==null&&(clearInterval(q),q=null);const w=document.getElementById("fireworks-canvas");w&&w.getContext("2d").clearRect(0,0,w.width,w.height)}if(o){const w=document.getElementById("reveal-btns");w&&(w.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(L=document.getElementById("reveal-next"))==null||L.addEventListener("click",()=>{W(),r.remove(),o()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{W(),r.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{W(),r.remove(),i("boosters")})}function Xn(t){var e,i,o,r;if(t.card_type==="player"&&t.player)return On(t);if(t.card_type==="game_changer"){const n=t._gcDef,a=(n==null?void 0:n.name)||t.gc_type||"Game Changer",d=(n==null?void 0:n.effect)||((e=Ui[t.gc_type])==null?void 0:e.desc)||"",c=n!=null&&n.image_url?`/icons/${n.image_url}`:null,s=((i=Ui[t.gc_type])==null?void 0:i.icon)||"⚡";return nt(a,c,s,d,{width:170})}if(t.card_type==="formation")return si(t.formation,ut[t.formation],{width:160});if(t.card_type==="stadium"){const n=t._stadiumDef,a=(n==null?void 0:n.name)||"Stade",d=((o=n==null?void 0:n.club)==null?void 0:o.encoded_name)||(n==null?void 0:n.country_code)||"—",c=n!=null&&n.image_url?`/icons/${n.image_url}`:((r=n==null?void 0:n.club)==null?void 0:r.logo_url)||(n!=null&&n.country_code?`https://flagsapi.com/${n.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),s=`${d}<br>+10 ⭐ joueurs alliés`;return Ut(a,c,s,{width:170})}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Jn(t){var e,i;if((e=t==null?void 0:t.rates)!=null&&e.length){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const r={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},n={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};o.innerHTML=`
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
      </div>`,document.body.appendChild(o),o.addEventListener("click",a=>{a.target===o&&o.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>o.remove());return}Qn()}function Qn(){const t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(t),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.getElementById("odds-close").addEventListener("click",()=>t.remove())}function Zn(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText=`
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
    `,document.body.appendChild(e);try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(r){console.warn("[AdSense]",r)}let i=5;const o=setInterval(()=>{i--;const r=document.getElementById("mw-ad-cd");r&&(r.textContent=i),i<=0&&(clearInterval(o),e.remove(),t(!0))},1e3)})}async function er(t,{state:e,navigate:i,toast:o,refreshProfile:r}){var b,g;const{data:n}=await v.from("users").select("*").eq("id",e.user.id).single();n&&(e.profile=n);let a=Array.isArray((b=e.profile)==null?void 0:b.pending_boosters)?[...e.profile.pending_boosters]:[];if(!a.length){await v.from("users").update({onboarding_done:!0}).eq("id",e.user.id),i("home");return}let d=null;try{const m=(await Zo()).find(y=>(y.name||"").toLowerCase().includes("new player"));m&&(d=no(m))}catch(x){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',x)}const c=a.length;let s=0;t.innerHTML=`
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
  </div>`;const l=async()=>{await v.from("users").update({pending_boosters:a}).eq("id",e.user.id)};async function p(){var _;if(s>=c||!a.length){await v.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",e.user.id),r&&await r(),o("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const x=a[0],{data:m}=await v.from("users").select("*").eq("id",e.user.id).single();m&&(e.profile=m);let y=[];try{if(x.type==="formation")y=await so(e.profile,0);else if(x.type==="game_changer")y=await ao(e.profile,x.count||3,0);else if(x.type==="stadium")y=await Wn(e.profile,0);else if(d&&((_=d.rates)!=null&&_.length)){const h={...d,cost:0,cardCount:x.count||d.cardCount||5};y=await ki(e.profile,h),x.guaranteeGK&&!e.profile.first_booster_opened&&(y.some(u=>u.player&&u.player.job==="GK")||await tr(e.profile,y),await v.from("users").update({first_booster_opened:!0}).eq("id",e.profile.id))}else y=await ro(e.profile,x.count||5,0)}catch(h){o(h.message||"Erreur ouverture booster","error");return}a.shift(),s++,await l();const f=x.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:x.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:x.type==="stadium"?{name:"Booster Stade",img:"/icons/booster-stade.png"}:{name:`Booster Joueurs (${s}/${c})`,img:(d==null?void 0:d.img)||"/icons/booster-players.png"};lo(y,f,i,()=>{p()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>p())}async function tr(t,e){try{const{data:i}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const o=i[Math.floor(Math.random()*i.length)],r=e.findIndex(a=>a.player);if(r===-1)return;const n=e[r];await v.from("cards").update({player_id:o.id}).eq("id",n.id),e[r]={...n,player_id:o.id,player:o}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const ir=[{key:"home2",route:"home2",label:"ACCUEIL",icon:"nav-home.png"},{key:"cards",route:"collection",label:"CARTES",icon:"nav-collection.png"},{key:"decks",route:"decks",label:"EQUIPES",icon:"nav-decks.png"},{key:"boosters",route:"boosters",label:"BOUTIQUE",icon:"nav-boosters.png"},{key:"market",route:"market",label:"MERCATO",icon:"nav-market.png"}];function Yt(t,e,i,o,r){if(!document.getElementById("home2-chrome-style")){const p=document.createElement("style");p.id="home2-chrome-style",p.textContent=`
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
    `,document.head.appendChild(p)}const n=ir.map(p=>`
    <a class="home2-chrome-tab" data-route="${p.route}" data-key="${p.key}">
      ${p.icon?`<img src="${o}${p.icon}">`:`<span class="home2-chrome-tab-emoji">${p.emoji}</span>`}${p.label}
    </a>`).join("");let a=document.getElementById("home2-chrome-header");a||(a=document.createElement("div"),a.id="home2-chrome-header",a.className="home2-chrome-header",a.innerHTML=`
      <div id="home2-chrome-marker" style="display:none"></div>
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-tabs">${n}</div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-chrome-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-chrome-settings-btn">⚙️</button>
      </div>
    `,document.body.appendChild(a),a.querySelector("#home2-chrome-settings-btn").addEventListener("click",()=>t("settings")),a.querySelector("#home2-chrome-credits").addEventListener("click",()=>So(e,r)));let d=document.getElementById("home2-mobile-top");d||(d=document.createElement("div"),d.id="home2-mobile-top",d.className="home2-mobile-top",d.innerHTML=`
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-mobtop-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-mobtop-settings-btn"><span>⚙️</span><span class="pill-label">Paramètres</span></button>
      </div>
    `,document.body.appendChild(d),d.querySelector("#home2-mobtop-settings-btn").addEventListener("click",()=>t("settings")),d.querySelector("#home2-mobtop-credits").addEventListener("click",()=>So(e,r)));let c=document.getElementById("home2-mobile-bottom");c||(c=document.createElement("div"),c.id="home2-mobile-bottom",c.className="home2-mobile-bottom",c.innerHTML=n,document.body.appendChild(c)),document.querySelectorAll(".home2-chrome-tab").forEach(p=>{p._v2Bound||(p._v2Bound=!0,p.addEventListener("click",()=>{document.querySelectorAll(".home2-chrome-tab").forEach(b=>b.classList.remove("active")),document.querySelectorAll(`.home2-chrome-tab[data-key="${p.dataset.key}"]`).forEach(b=>b.classList.add("active")),t(p.dataset.route)}))}),document.querySelectorAll(".home2-chrome-tab").forEach(p=>p.classList.toggle("active",p.dataset.key===i));const s=`💰 ${(e.credits||0).toLocaleString("fr")}`;document.getElementById("home2-chrome-credits")&&(document.getElementById("home2-chrome-credits").textContent=s),document.getElementById("home2-mobtop-credits")&&(document.getElementById("home2-mobtop-credits").textContent=s),document.body.classList.remove("v2-match-flow"),a.style.display="",d.style.display="",c.style.display="";const l=document.getElementById("page-content");l&&(l.style.removeProperty("padding-top"),l.style.removeProperty("padding-bottom")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const p=window.innerWidth<1024;document.documentElement.style.setProperty("--v2-top-height",(p?d.offsetHeight:a.offsetHeight)+"px"),document.documentElement.style.setProperty("--v2-bottom-height",c.offsetHeight+"px")})})}const or=[{ads:1,seconds:5,credits:4500},{ads:2,seconds:10,credits:9500},{ads:3,seconds:15,credits:15e3}];async function So(t,e){if(!await eo("pub_mode")){Vo();return}const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",i.innerHTML=`
    <div style="background:#111a12;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:400px;width:100%;color:#fff">
      <div style="font-size:18px;font-weight:900;margin-bottom:4px">💰 Gagner des crédits</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:18px">Regarde une ou plusieurs publicités pour recevoir des crédits gratuits.</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${or.map(o=>`
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
    </div>`,document.body.appendChild(i),i.querySelector("#credits-ad-cancel").addEventListener("click",()=>i.remove()),i.querySelectorAll(".credits-ad-offer-btn").forEach(o=>{o.addEventListener("click",()=>{i.remove(),nr(parseInt(o.dataset.ads),5,parseInt(o.dataset.credits),t,e)})})}function nr(t,e,i,o,r){let n=1;const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.94);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;gap:14px;color:#fff;padding:16px",document.body.appendChild(a);function d(){a.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité ${n}/${t}</div>
      <div style="width:400px;max-width:100%;height:400px;max-height:55vh;background:rgba(255,255,255,0.04);border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center">
        <ins class="adsbygoogle"
          style="display:inline-block;width:400px;height:400px"
          data-ad-client="ca-pub-5827602487507112"
          data-ad-slot="6638827438"></ins>
      </div>
      <div id="credits-ad-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Chargement… <span id="credits-ad-cd">${e}</span>s</div>
      <div id="credits-ad-next-zone" style="width:280px;max-width:100%"></div>
    `;try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(p){console.warn("[AdSense]",p)}let s=e;const l=setInterval(()=>{s--;const p=a.querySelector("#credits-ad-cd");p&&(p.textContent=s),s<=0&&(clearInterval(l),c())},1e3)}function c(){var p,b;const s=a.querySelector("#credits-ad-status"),l=a.querySelector("#credits-ad-next-zone");n<t?(s&&(s.textContent="Publicité terminée ✅"),l&&(l.innerHTML=`
        <button id="credits-ad-next-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px">
          Suivant (${n}/${t}) →
        </button>`),(p=a.querySelector("#credits-ad-next-btn"))==null||p.addEventListener("click",()=>{n++,d()})):(s&&(s.textContent="Toutes les publicités ont été vues ✅"),l&&(l.innerHTML=`
        <button id="credits-ad-claim-btn" class="btn btn-primary" style="width:100%;padding:12px;font-size:14px;background:#D4A017;border-color:#D4A017">
          🎁 Récupérer ${i.toLocaleString("fr")} crédits
        </button>`),(b=a.querySelector("#credits-ad-claim-btn"))==null||b.addEventListener("click",async()=>{const g=a.querySelector("#credits-ad-claim-btn");g.disabled=!0,g.textContent="⏳...";const x=(o.credits||0)+i,{error:m}=await v.from("users").update({credits:x}).eq("id",o.id);if(m){r(m.message,"error"),g.disabled=!1;return}o.credits=x,Wt(x),r(`+${i.toLocaleString("fr")} crédits ✅`,"success"),a.remove()}))}d()}async function tn(t,e,i){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",document.body.appendChild(o);async function r(){var c;const{data:n}=await v.from("pending_rewards").select(`*,
        player:players(id, firstname, surname_real, country_code, club_id, job, job2,
          note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
          clubs(encoded_name, logo_url)),
        booster:booster_configs(name, image_url)`).eq("user_id",t.profile.id).eq("claimed",!1).order("created_at",{ascending:!0});if(!(n!=null&&n.length)){o.remove();const s=document.getElementById("pending-rewards-banner");s&&s.remove();return}const a=s=>{var l;return s.reward_type==="credits"?'<div style="width:56px;height:56px;border-radius:12px;background:rgba(212,160,23,0.15);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">💰</div>':s.reward_type==="card"&&s.player?`<div style="flex-shrink:0">${Ae(s.player,{width:56})}</div>`:s.reward_type==="booster"?`<img src="/icons/${((l=s.booster)==null?void 0:l.image_url)||"booster-players.png"}" style="width:56px;height:56px;object-fit:contain;border-radius:12px;background:rgba(255,255,255,0.05);flex-shrink:0">`:'<div style="width:56px;height:56px;border-radius:12px;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">❓</div>'},d=s=>{var l,p,b;return s.reward_type==="credits"?`${(s.credits_amount||0).toLocaleString("fr")} crédits`:s.reward_type==="card"?`${((l=s.player)==null?void 0:l.firstname)||""} ${((p=s.player)==null?void 0:p.surname_real)||""}`.trim()||"Carte joueur":s.reward_type==="booster"?((b=s.booster)==null?void 0:b.name)||"Booster":"Récompense"};o.innerHTML=`
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
      </div>`,(c=o.querySelector("#pending-rewards-close"))==null||c.addEventListener("click",()=>o.remove()),o.querySelectorAll(".claim-reward-btn").forEach(s=>{s.addEventListener("click",async()=>{var p,b;const l=n.find(g=>g.id===s.dataset.id);s.disabled=!0,s.textContent="⏳...";try{const g=await Hn(l,t.profile,e,null);if(await v.from("pending_rewards").update({claimed:!0,claimed_at:new Date().toISOString()}).eq("id",l.id),g.type==="credits")Wt(t.profile.credits),e(`+${g.amount.toLocaleString("fr")} crédits ✅`,"success");else if(g.type==="card")e(`Carte reçue : ${((p=g.player)==null?void 0:p.firstname)||""} ${((b=g.player)==null?void 0:b.surname_real)||""} ✅`,"success");else if(g.type==="booster"){o.remove(),lo(g.cards,g.boosterUI,i,()=>{tn(t,e,i)});return}}catch(g){e(g.message||"Erreur lors de la réclamation","error"),s.disabled=!1,s.textContent="Récupérer";return}r()})})}r(),o.addEventListener("click",n=>{n.target===o&&o.remove()})}function Wt(t){const e=`💰 ${(t||0).toLocaleString("fr")}`,i=document.getElementById("home2-chrome-credits"),o=document.getElementById("home2-mobtop-credits");i&&(i.textContent=e),o&&(o.textContent=e)}function mt(){document.body.classList.add("v2-match-flow");const t=document.getElementById("home2-chrome-header");t&&(t.style.display="none");const e=document.getElementById("home2-mobile-top");e&&(e.style.display="none");const i=document.getElementById("home2-mobile-bottom");i&&(i.style.display="none");const o=document.getElementById("page-content");o&&(o.style.setProperty("padding-top","0","important"),o.style.setProperty("padding-bottom","0","important"))}function rr(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return"à l'instant";if(i<60)return`il y a ${i}min`;const o=Math.floor(i/60);if(o<24)return`il y a ${o}h`;const r=Math.floor(o/24);return r<7?`il y a ${r}j`:new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"short"})}function ar(t,e){if(!isFinite(e.max))return"";const i=e.max-e.min+1,o=Math.floor((t-e.min)/(i/3));return["III","II","I"][Math.min(2,Math.max(0,o))]}async function sr(t){const{data:e}=await v.from("users").select("id,pseudo,club_name,mmr").order("mmr",{ascending:!1}).limit(5),i=e||[],o=i.some(n=>n.id===t);let r=null;if(!o){const{data:n}=await v.from("users").select("mmr").eq("id",t).single();if(n){const{count:a}=await v.from("users").select("id",{count:"exact",head:!0}).gt("mmr",n.mmr||0);r=(a||0)+1}}return{list:i,iAmInTop:o,myPosition:r}}async function dr(t=4){const{data:e}=await v.from("patch_notes").select("id,title,description,image_url,published_at").eq("is_published",!0).order("published_at",{ascending:!1}).limit(t);return e||[]}async function lr(){const{data:t}=await v.from("booster_configs").select("id,name,icon,price_type,price_credits,card_count").eq("is_active",!0).order("sort_order",{ascending:!0}).limit(5);return t||[]}async function cr(){const{data:t}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const r=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close-v2").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}async function Pi(t,{state:e,navigate:i,toast:o,openModal:r,closeModal:n}){var $,S,q,O,W,U;const a=e.profile;if(!a)return;const d="/icons/";Yt(i,a,"home2",d,o);const c=a.mmr??1e3,s=At(c),l=ar(c,s),p=Oi(c),b=isFinite(s.max)?s.max+1:null,[{list:g,iAmInTop:x,myPosition:m},y,f,{count:_}]=await Promise.all([sr(a.id),dr(5),lr(),v.from("pending_rewards").select("*",{count:"exact",head:!0}).eq("user_id",a.id).eq("claimed",!1)]),h=(L,w)=>`
    <div class="rk-row ${L.id===a.id?"rk-row-me":""}">
      <div class="rk-pos ${w<3?"rk-pos-top"+(w+1):""}">${w<3?["🥇","🥈","🥉"][w]:w+1}</div>
      <div class="rk-name ${L.id===a.id?"rk-name-me":""}">${L.pseudo}</div>
      <div class="rk-rp">${(L.mmr??0).toLocaleString("fr")} RP</div>
    </div>`,E=L=>`
    <div class="news-item">
      ${L.image_url?`<img src="${L.image_url}" class="news-thumb" onerror="this.style.display='none'">`:'<div class="news-thumb news-thumb-fallback">📰</div>'}
      <div class="news-body">
        <div class="news-title">${L.title}</div>
        <div class="news-desc">${L.description||""}</div>
        <div class="news-time">${rr(L.published_at)}</div>
      </div>
    </div>`;let u=0;const I=L=>`
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
                <div class="rank-tier-value">${s.label.toUpperCase()}${l?" "+l:""}</div>
              </div>
              <div class="rank-right">
                <div class="rank-rp-label">${c.toLocaleString("fr")}${b?" / "+b.toLocaleString("fr"):""} RP</div>
                <button class="rank-inline-link" id="rank-inline-link-btn">📊 Classement</button>
              </div>
            </div>
            <div class="rank-progress-track"><div class="rank-progress-fill" style="width:${p}%"></div></div>
          </div>

          <div class="ranking-widget">
            <div class="ranking-widget-header"><h4>CLASSEMENT</h4><a id="nav-rankings-link">Voir plus</a></div>
            ${g.map((L,w)=>h(L,w)).join("")}
            ${!x&&m?`
              <div class="rk-row rk-row-me" style="border-top:1px solid var(--tile-border);margin-top:2px;padding-top:8px">
                <div class="rk-pos">${m}</div>
                <div class="rk-name rk-name-me">${a.pseudo}</div>
                <div class="rk-rp">${c.toLocaleString("fr")} RP</div>
              </div>`:""}
            <button class="ranking-widget-cta" id="nav-rankings-cta">📊 Voir le classement</button>
          </div>
        </div>

        <!-- Colonne centrale : Jouer + promo -->
        <div class="home2-col-center">
          ${_>0?`
          <div id="pending-rewards-banner" style="cursor:pointer;display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:14px;
            background:linear-gradient(135deg,rgba(212,160,23,0.25),rgba(212,160,23,0.1));border:1.5px solid #D4A017;margin-bottom:14px">
            <div style="font-size:28px">🎁</div>
            <div style="flex:1">
              <div style="font-weight:900;font-size:14px;color:#fff">Tu as des récompenses à récupérer !</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.6)">${_} récompense${_>1?"s":""} en attente</div>
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

          ${f.length?`
          <div class="promo-banner" id="promo-banner">
            <div id="promo-slide-content" style="display:flex;align-items:center;gap:14px;flex:1;min-width:0">
              ${I(f[0])}
            </div>
            <button class="promo-cta" id="promo-cta-btn">✅ Ouvrir des boosters</button>
            ${f.length>1?`<div class="promo-dots">${f.map((L,w)=>`<div class="promo-dot ${w===0?"active":""}" data-dot="${w}"></div>`).join("")}</div>`:""}
          </div>`:""}
        </div>

        <!-- Colonne droite : Actualités -->
        <div class="home2-col-right">
          <div class="news-widget">
            <div class="news-widget-header"><h4>ACTUALITÉS</h4><a id="nav-journal-link">Voir tout</a></div>
            ${y.length?y.map(E).join(""):'<div style="font-size:11px;color:var(--tile-fg-dim);padding:8px 0">Aucune actualité pour le moment.</div>'}
          </div>
        </div>

      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var ce,M;const L=((ce=window.visualViewport)==null?void 0:ce.height)||window.innerHeight,w=window.innerWidth<1024;let F=0;if(w){const H=document.getElementById("home2-mobile-top"),ue=document.getElementById("home2-mobile-bottom");F=((H==null?void 0:H.offsetHeight)||0)+((ue==null?void 0:ue.offsetHeight)||0)}else F=((M=document.getElementById("home2-chrome-header"))==null?void 0:M.offsetHeight)||0;const R=L-F,se=t.querySelector(".home-dark");se&&(se.style.minHeight=R+"px")}),($=document.getElementById("nav-rankings-link"))==null||$.addEventListener("click",()=>i("rankings")),(S=document.getElementById("nav-rankings-cta"))==null||S.addEventListener("click",()=>i("rankings")),(q=document.getElementById("rank-inline-link-btn"))==null||q.addEventListener("click",()=>i("rankings")),(O=document.getElementById("nav-journal-link"))==null||O.addEventListener("click",()=>cr()),t.querySelectorAll("[data-action]").forEach(L=>{L.addEventListener("click",()=>{L.style.transform="scale(.96)",setTimeout(()=>L.style.transform="",180);const w=L.dataset.action;if(w==="match-ai"){rn(i,e);return}if(w==="match-random"){mt(),i("match",{matchMode:"random"});return}if(w==="match-friend"){i("friends");return}if(w==="mini-league"){i("mini-league");return}if(w==="ranked"){i("ranked");return}o("Bientôt disponible","info")})}),f.length>1){const L=document.getElementById("promo-slide-content"),w=()=>Array.from(document.querySelectorAll(".promo-dot")),F=R=>{u=R,L&&(L.innerHTML=I(f[u])),w().forEach((se,ce)=>se.classList.toggle("active",ce===u))};setInterval(()=>F((u+1)%f.length),5e3),document.querySelectorAll(".promo-dot").forEach(R=>{R.addEventListener("click",()=>F(Number(R.dataset.dot)))})}(W=document.getElementById("promo-cta-btn"))==null||W.addEventListener("click",()=>i("boosters")),nn(e,o),(U=document.getElementById("pending-rewards-banner"))==null||U.addEventListener("click",()=>{tn(e,o,i)}),mr(e,o,i),on(e,o,i),pr(e,o)}async function pr(t,e){const i=t.profile.id,{data:o}=await v.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(o!=null&&o.length))return;const r=o.reduce((a,d)=>a+(d.prize_amount||0),0),n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2200",n.innerHTML=`<div class="modal" style="max-width:400px">
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
  </div>`,document.body.appendChild(n),n.querySelector("#claim-later-btn").addEventListener("click",()=>n.remove()),n.querySelector("#claim-all-btn").addEventListener("click",async a=>{const d=a.currentTarget;d.disabled=!0,d.textContent="...";let c=0;for(const s of o){const{data:l}=await v.rpc("claim_mini_league_prize",{p_league_id:s.league_id,p_user_id:i});l!=null&&l.success&&!l.already_claimed&&(c+=l.prize||0)}if(c>0){t.profile.credits=(t.profile.credits||0)+c;const s=document.getElementById("nav-credits");s&&(s.textContent=`💰 ${t.profile.credits.toLocaleString("fr")}`),e(`💰 +${c.toLocaleString("fr")} cr. récupérés !`,"success")}n.remove()})}async function on(t,e,i){const o=document.getElementById("ongoing-match-banner");if(!o)return;const r=t.profile.id,{data:n}=await v.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${r},away_id.eq.${r}`).order("created_at",{ascending:!1});if(!(n!=null&&n.length)){o.innerHTML="";return}const a=n.map(c=>c.home_id===r?c.away_id:c.home_id).filter(Boolean);let d={};if(a.length){const{data:c}=await v.from("users").select("id, pseudo, club_name").in("id",a);(c||[]).forEach(s=>{d[s.id]=s.club_name||s.pseudo})}o.innerHTML=n.map(c=>{const s=c.home_id===r?c.away_id:c.home_id,l=d[s]||"Adversaire",p=c.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${p?"🏆 Mini League":c.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${l}</div>
      </div>
      <button data-resume="${c.id}" data-mini="${p?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${c.id}" data-opp="${s}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),o.querySelectorAll("[data-resume]").forEach(c=>{c.addEventListener("click",async()=>{mt();const s=document.getElementById("page-content")||document.getElementById("app");if(c.dataset.mini==="1"){const{data:l}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",c.dataset.resume).single();l?i("match-mini-league",{mlMatchId:l.id,leagueId:l.league_id}):i("mini-league")}else{const{resumePvpMatch:l}=await Wo(async()=>{const{resumePvpMatch:p}=await Promise.resolve().then(()=>ga);return{resumePvpMatch:p}},void 0);l(s,{state:t,navigate:i,toast:e,openModal:null,closeModal:null,refreshProfile:null},c.dataset.resume)}})}),o.querySelectorAll("[data-abandon]").forEach(c=>{c.addEventListener("click",()=>{fr(async()=>{await ur(c.dataset.abandon,c.dataset.opp,r),e("Match abandonné (défaite 3-0)","info"),on(t,e,i)})})})}async function ur(t,e,i){Ot();const{data:o}=await v.from("matches").select("home_id, away_id, game_state, mode").eq("id",t).single();if(!o)return;const r=o.home_id===i,n=r?0:3,a=r?3:0,d=o.game_state||{};d.p1Score=n,d.p2Score=a,d.phase="finished",d.forfeit=!0,await v.from("matches").update({status:"finished",forfeit:!0,winner_id:e,home_score:n,away_score:a,game_state:d}).eq("id",t),o.mode==="mini_league"&&await v.from("mini_league_matches").update({status:"finished",home_score:n,away_score:a}).eq("match_id",t)}function fr(t){const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(e),e.querySelector("#ab-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#ab-ok").addEventListener("click",()=>{e.remove(),t()}),e.addEventListener("click",i=>{i.target===e&&e.remove()})}async function mr(t,e,i){var d,c,s,l;const o=document.getElementById("match-invite-banner");if(!o)return;const{data:r}=await v.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",t.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!r){o.innerHTML="";return}const n=((d=r.inviter)==null?void 0:d.club_name)||((c=r.inviter)==null?void 0:c.pseudo)||"?",a=r.inviter_id;o.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${n} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(s=document.getElementById("match-inv-accept"))==null||s.addEventListener("click",()=>{o.innerHTML="",mt(),i("match",{matchMode:"friend",friendId:a,friendName:n,isAccepting:!0})}),(l=document.getElementById("match-inv-decline"))==null||l.addEventListener("click",async()=>{await v.from("friend_match_invites").update({status:"declined"}).eq("id",r.id),o.innerHTML="",e("Invitation refusée","info")})}async function nn(t,e){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:o,error:r}=await v.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",t.user.id).eq("status","pending");if(r||!(o!=null&&o.length)){i.innerHTML="";return}const n=o.length,a=o.slice(0,2).map(c=>{var s;return((s=c.requester)==null?void 0:s.pseudo)||"?"}).join(", "),d=n>2?` +${n-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${n} demande${n>1?"s":""} d'ami${n>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${d}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>sn(t,e,()=>nn(t,e)))}async function rn(t,e){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:420px;border-radius:18px">
    <div class="modal-header"><h2>Solo — Choisir un niveau</h2><button class="btn-icon" id="solo-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div id="solo-levels-list" style="display:flex;flex-direction:column;gap:10px">
        <div style="text-align:center;color:#999;padding:20px">⏳ Chargement…</div>
      </div>
    </div>
  </div>`,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("solo-cancel").addEventListener("click",o),i.addEventListener("click",s=>{s.target===i&&o()});const[{data:r},{data:n}]=await Promise.all([v.from("solo_levels").select("*").eq("is_active",!0).order("level_number"),v.from("user_solo_progress").select("unlocked_level").eq("user_id",e.profile.id).maybeSingle()]),a=(n==null?void 0:n.unlocked_level)||1,d=r||[],c=document.getElementById("solo-levels-list");if(c){if(!d.length){c.innerHTML='<div style="text-align:center;color:#999;padding:20px">Aucun niveau configuré.</div>';return}c.innerHTML=d.map(s=>{const l=s.level_number>a,p=s.level_number===a,b=l?"#f0f0f0":p?"#eefaf2":"#f7f7f7",g=l?"#ddd":p?"#bfe8cf":"#e0e0e0",x=l?"#999":"#12401f";return`
      <div class="solo-level-card" data-level="${s.level_number}" data-locked="${l}"
        style="cursor:${l?"not-allowed":"pointer"};display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${b};border:1px solid ${g};opacity:${l?.6:1};transition:transform .12s ease">
        <div style="width:46px;height:46px;border-radius:12px;background:${l?"#bbb":"#1A6B3C"};display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#fff;flex-shrink:0">
          ${l?"🔒":s.level_number}
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:800;font-size:15px;color:${x}">Niveau ${s.level_number}</div>
          <div style="font-size:11px;color:${x};opacity:0.75;margin-top:1px">
            Note globale ~${s.target_note_avg} · 🟡${s.nb_liens_jaune} 🟢${s.nb_liens_vert} · 🏟️${s.nb_joueurs_stade}
          </div>
        </div>
        ${l?"":`<div style="font-weight:900;font-size:12.5px;color:${x};background:rgba(255,255,255,0.7);padding:6px 11px;border-radius:999px;flex-shrink:0;white-space:nowrap">+${s.reward_credits} cr.</div>`}
      </div>`}).join(""),c.querySelectorAll(".solo-level-card").forEach(s=>{s.dataset.locked!=="true"&&(s.addEventListener("mouseenter",()=>{s.style.transform="translateY(-1px)"}),s.addEventListener("mouseleave",()=>{s.style.transform=""}),s.addEventListener("click",()=>{o(),mt(),t("match",{matchMode:"solo",soloLevel:Number(s.dataset.level)})}))})}}const di="#1A6B3C",li="#cc2222",gr="#D4A017",To="#888";async function br(t,e){const{state:i,toast:o}=e;t.innerHTML=`
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
    </div>`,await an(i,o,e),document.getElementById("btn-add-friend").addEventListener("click",()=>yr(i,o)),document.getElementById("btn-accept-friend").addEventListener("click",()=>sn(i,o,null,e))}async function an(t,e,i={}){const{navigate:o}=i,r=t.user.id,{data:n,error:a}=await v.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${r},addressee_id.eq.${r}`),{count:d}=await v.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",r).eq("status","pending"),c=document.getElementById("pending-badge");c&&(d>0?(c.style.display="flex",c.textContent=d):c.style.display="none");const s=document.getElementById("friends-list");if(!s)return;if(a){console.error("[Friends] Erreur:",a),s.innerHTML=`<div style="color:${li};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const l=(n||[]).map(g=>g.requester_id===r?g.addressee_id:g.requester_id);let p={};if(l.length){const{data:g}=await v.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",l);(g||[]).forEach(x=>{p[x.id]=x})}const b=(n||[]).map(g=>({friendshipId:g.id,friend:p[g.requester_id===r?g.addressee_id:g.requester_id]||{pseudo:"?"}}));if(!b.length){s.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}s.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${b.length} ami${b.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${b.map(({friendshipId:g,friend:x})=>xr(x,g)).join("")}
    </div>`,s.querySelectorAll("[data-stats]").forEach(g=>{g.addEventListener("click",()=>hr(t,g.dataset.stats,g.dataset.friendName))}),s.querySelectorAll("[data-match]").forEach(g=>{g.addEventListener("click",async()=>{const x=g.dataset.friendId,m=g.dataset.friendName;if(typeof o!="function"){e("Erreur navigation","error");return}const y=t.user.id,{data:f}=await v.from("friend_match_invites").select("id").eq("inviter_id",x).eq("invitee_id",y).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),_=!!f;console.log("[Friends] clic match",{fid:x,fname:m,isAccepting:_}),mt(),o("match",{matchMode:"friend",friendId:x,friendName:m,isAccepting:_})})})}function xr(t,e){const i=t.club_name||t.pseudo||"?",o=t.pseudo||"",r=(o||i).slice(0,2).toUpperCase(),n=t.club_color2||di,a=t.club_color1||"#ffffff",d=t.last_seen_at?new Date(t.last_seen_at):null,c=d&&Date.now()-d.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:var(--tile-bg);border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${n};border:2.5px solid ${a};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${a}">
          ${r}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${c?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${o}</div>
        <div style="font-size:11px;color:${c?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${c?"🟢 En ligne":"🔴 Hors ligne"}</div>
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
      <div id="add-friend-error" style="color:${li};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${po()}`,document.body.appendChild(i);const o=i.querySelector("#friend-pseudo-input"),r=i.querySelector("#add-friend-error"),n=()=>i.remove();o.focus(),i.querySelector("#add-cancel").addEventListener("click",n),i.addEventListener("click",a=>{a.target===i&&n()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=o.value.trim();if(!a){r.textContent="Entre un pseudo";return}r.textContent="";const{data:d}=await v.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!d){r.textContent="Utilisateur introuvable";return}if(d.id===t.user.id){r.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:c}=await v.from("friendships").select("id, status").or(`and(requester_id.eq.${t.user.id},addressee_id.eq.${d.id}),and(requester_id.eq.${d.id},addressee_id.eq.${t.user.id})`).single();if(c){const l=c.status==="accepted"?"Vous êtes déjà amis !":c.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";r.textContent=l;return}const{error:s}=await v.from("friendships").insert({requester_id:t.user.id,addressee_id:d.id,status:"pending"});if(s){r.textContent="Erreur : "+s.message;return}n(),e(`✅ Demande envoyée à ${d.pseudo} !`,"success")})}async function sn(t,e,i=null,o={}){const r=t.user.id,{data:n}=await v.from("friendships").select("id, requester_id").eq("addressee_id",r).eq("status","pending").order("created_at",{ascending:!1}),a=(n||[]).map(b=>b.requester_id);let d={};if(a.length){const{data:b}=await v.from("users").select("id, pseudo, club_name").in("id",a);(b||[]).forEach(g=>{d[g.id]=g})}const c=(n||[]).map(b=>({...b,requester:d[b.requester_id]||{pseudo:"?"}})),s=co(),l=c||[];s.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${l.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${l.map(b=>{var g,x,m;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((g=b.requester)==null?void 0:g.club_name)||((x=b.requester)==null?void 0:x.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((m=b.requester)==null?void 0:m.pseudo)||""})</span>
                </div>
                <button data-accept="${b.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${di};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${b.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${li};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${po()}`,document.body.appendChild(s);const p=()=>s.remove();s.querySelector("#pending-close").addEventListener("click",p),s.addEventListener("click",b=>{b.target===s&&p()}),s.querySelectorAll("[data-accept]").forEach(b=>{b.addEventListener("click",async()=>{const{error:g}=await v.from("friendships").update({status:"accepted"}).eq("id",b.dataset.accept);if(g){e("Erreur : "+g.message,"error");return}b.closest("div[style]").remove(),e("✅ Ami accepté !","success"),an(t,e,o),i&&i()})}),s.querySelectorAll("[data-decline]").forEach(b=>{b.addEventListener("click",async()=>{await v.from("friendships").delete().eq("id",b.dataset.decline),b.closest("div[style]").remove(),e("Demande refusée","info"),i&&i()})})}async function hr(t,e,i){const o=t.user.id,[r,n]=[o,e].sort(),a=o===r,{data:d}=await v.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",n).single(),c=t.profile.club_name||t.profile.pseudo||"Moi",s=d||{},l=a?s.wins_p1||0:s.wins_p2||0,p=a?s.wins_p2||0:s.wins_p1||0,b=s.draws||0,g=a?s.goals_p1||0:s.goals_p2||0,x=a?s.goals_p2||0:s.goals_p1||0,m=a?s.gc_used_p1||0:s.gc_used_p2||0,y=a?s.gc_used_p2||0:s.gc_used_p1||0,f=s.matches_total||0,_=(E,u,I,$=di,S=li)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${$}">${u}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${E}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${S}">${I}</div>
    </div>`,h=co();h.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${f===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${_("Victoires",l,p)}
        ${_("Nuls",b,b,To,To)}
        ${_("Défaites",p,l)}
        ${_("Buts marqués",g,x)}
        ${_("Buts encaissés",x,g,li,di)}
        ${_("GC utilisés ⚡",m,y,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${f} match${f>1?"s":""} joué${f>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${po()}`,document.body.appendChild(h),h.querySelector("#stats-close").addEventListener("click",()=>h.remove()),h.addEventListener("click",E=>{E.target===h&&h.remove()})}function co(){const t=document.createElement("div");return t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",t}function po(){return`
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
        background:${di};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function vr(t,{state:e,navigate:i,toast:o}){const r=e.profile;if(!r)return;const n="/icons/";Yt(i,r,"game",n,o),t.innerHTML=`
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
  </div>`,t.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",()=>{a.style.transform="scale(.96)",setTimeout(()=>a.style.transform="",180);const d=a.dataset.action;if(d==="match-ai"){rn(i,e);return}if(d==="match-random"){mt(),i("match",{matchMode:"random"});return}if(d==="match-friend"){i("friends");return}if(d==="mini-league"){i("mini-league");return}if(d==="ranked"){i("ranked");return}o("Bientôt disponible","info")})})}const wr="/",dn=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function ln(t,e,i){let o=0;const r=document.createElement("div");r.id="tutorial-overlay",r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const n=()=>{var l,p,b;const d=e[o],c=o===e.length-1,s=Math.round((o+1)/e.length*100);r.innerHTML=`
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
            ${c?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${d.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${c?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,r.querySelectorAll("ul,ol").forEach(g=>{g.style.paddingLeft="20px",g.style.marginTop="6px",g.style.marginBottom="6px"}),r.querySelectorAll("li").forEach(g=>{g.style.marginBottom="4px"}),r.querySelectorAll("p").forEach(g=>{g.style.marginBottom="8px"}),(l=r.querySelector("#tuto-prev"))==null||l.addEventListener("click",()=>{o--,n()}),(p=r.querySelector("#tuto-next"))==null||p.addEventListener("click",()=>{c?a():(o++,n())}),(b=r.querySelector("#tuto-skip"))==null||b.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{r.remove(),t!=null&&t.id&&await v.from("users").update({tutorial_done:!0}).eq("id",t.id),i==null||i()};document.body.appendChild(r),n()}async function cn(t,e,i){let o=[];const{data:r,error:n}=await v.rpc("get_tutorial_steps");if(!n&&(r==null?void 0:r.length)>0)o=r;else{const{data:d,error:c}=await v.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!c&&(d==null?void 0:d.length)>0?o=d:i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3)}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):dn;ln(t,a,()=>e("settings"))}async function Io(t,e,i){if(!t||t.tutorial_done)return;let o=[];const{data:r,error:n}=await v.rpc("get_tutorial_steps");if(!n&&(r==null?void 0:r.length)>0)o=r,console.log(`[Tutorial] RPC OK → ${o.length} étapes`);else{const{data:d,error:c}=await v.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!c&&(d==null?void 0:d.length)>0?(o=d,console.log(`[Tutorial] Direct OK → ${o.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${n==null?void 0:n.message}, Direct: ${c==null?void 0:c.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):dn;ln(t,a,()=>e("boosters"))}async function pn(t,e){var y,f,_;const{state:i,navigate:o,toast:r}=e,n=ai(),a=to(),d=(y=i==null?void 0:i.profile)==null?void 0:y.is_admin,c="2026.08.01-1403";t.innerHTML=`
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

      <div style="text-align:center;font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace;margin-top:4px">build ${c}</div>

    </div>
  </div>`,t.querySelectorAll("[data-theme-choice]").forEach(h=>{h.addEventListener("click",()=>{Uo(h.dataset.themeChoice),pn(t,e)})});const s=t.querySelector("#team-color1"),l=t.querySelector("#team-color2"),p=t.querySelector("#team-preview"),b=()=>{p&&(p.style.background=`linear-gradient(135deg, ${s.value} 50%, ${l.value} 50%)`)};b(),s==null||s.addEventListener("input",b),l==null||l.addEventListener("input",b),(f=t.querySelector("#team-save"))==null||f.addEventListener("click",async()=>{const h=t.querySelector("#team-error"),E=t.querySelector("#team-save"),u=t.querySelector("#team-club-name").value.trim();if(u.length<2){h.textContent="Nom de club trop court.";return}E.disabled=!0,E.textContent="⏳ Enregistrement...",h.textContent="";const{error:I}=await v.from("users").update({club_name:u,club_color1:s.value,club_color2:l.value}).eq("id",i.profile.id);if(E.disabled=!1,E.textContent="💾 Enregistrer",I){h.textContent=I.message;return}i.profile.club_name=u,i.profile.club_color1=s.value,i.profile.club_color2=l.value,h.style.color="#2ecc71",h.textContent="✅ Modifications enregistrées.",ai()==="club"&&Uo("club")});const g=t.querySelector("#volume-slider"),x=t.querySelector("#volume-label");let m=null;g.addEventListener("input",()=>{Pn(Number(g.value)),x.textContent=`${g.value}%`,m&&(m.volume=Math.max(0,Math.min(1,Number(g.value)/100)))}),t.querySelector("#volume-test").addEventListener("click",()=>{m=oo("/sounds/match-opening.mp3",1)}),(_=t.querySelector("#settings-tutorial"))==null||_.addEventListener("click",()=>{cn(i.profile,o,r)}),t.querySelector("#settings-logout").addEventListener("click",async()=>{await v.auth.signOut(),window.location.reload()})}const Oe={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Re(t,e){if(!t)return 0;let i=0;switch(e){case"GK":i=Number(t.note_g)||0;break;case"DEF":i=Number(t.note_d)||0;break;case"MIL":i=Number(t.note_m)||0;break;case"ATT":i=Number(t.note_a)||0;break;default:i=0}return i+(t.boost||0)}const zo=["ATT","MIL","DEF","GK"];function un(t,e,i){if(!t||!e)return!1;if(i&&t.position&&e.position)return zi(i).some(([l,p])=>l===t.position&&p===e.position||l===e.position&&p===t.position);const o=t._col!=null&&e._col!=null&&t._col===e._col,r=t._col!=null&&e._col!=null&&Math.abs(t._col-e._col)===1,n=zo.indexOf(t._line||t.job),a=zo.indexOf(e._line||e.job),d=Math.abs(n-a)===1;return(t._line||t.job)===(e._line||e.job)&&r||o&&d}function fn(t,e){let i=0;const o=t.length;for(let r=0;r<o;r++)for(let n=r+1;n<o;n++){const a=t[r],d=t[n];if(!a||!d||!un(a,d,e))continue;const c=Ft(a,d);c==="#00ff88"?i+=10:c==="#FFD700"&&(i+=5)}return i}function ci(t,e={},i){let o=0,r=0;t.forEach(c=>{const s=c._line||c.job,l=Number(s==="MIL"?c.note_m:c.note_a)||0,p=c.stadiumBonus&&(s==="MIL"||s==="ATT")?10:0;o+=e.doubleAttack?l*2:l,r+=(c.boost||0)+p});const n=o+r,a=fn(t,i);let d=n+a;return e.stolenNote&&(d-=e.stolenNote),{base:n,links:a,total:Math.max(0,d)}}function pi(t,e={},i){const o=t.reduce((a,d)=>{const c=d._line||d.job;let s=0;c==="GK"?s=Number(d.note_g)||0:c==="MIL"?s=Number(d.note_m)||0:s=Number(d.note_d)||0;const l=d.stadiumBonus&&(c==="GK"||c==="DEF"||c==="MIL")?10:0;return a+s+(d.boost||0)+l},0),r=fn(t,i);let n=o+r;return e.stolenNote&&(n-=e.stolenNote),{base:o,links:r,total:Math.max(0,n)}}function uo(t,e,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:t>e,shielded:!1}}function mn(t,e,i="easy"){const o=t.filter(a=>!a.used);if(!o.length)return[];const r=[...o].sort((a,d)=>{const c=e==="attack"?Re(a,"ATT"):a._line==="GK"?Re(a,"GK"):Re(a,"DEF");return(e==="attack"?Re(d,"ATT"):d._line==="GK"?Re(d,"GK"):Re(d,"DEF"))-c});let n=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return r.slice(0,Math.min(n,r.length,3))}function _r(t,e){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[t]||i.vs_ai_easy)[e]||0}const kr={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ei={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},mi=["GK","DEF","MIL","ATT"],$r=["Tous","GK","DEF","MIL","ATT"],Er={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Ao(t){const e=t.player;return e?(e.rarity,Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)):null}function Lr(t){return t.length?t.reduce((e,i)=>Ao(i)>Ao(e)?i:e,t[0]):t[0]}const Sr={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function gi(t,e){return t&&Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Ri(t,e=""){const i=t.player;if(!i)return"";const o=t.evolution_bonus||0,r={...i,_evolution_bonus:o},n=e?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${e}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${t.id}">
    ${n}
    ${Ae(r,{width:140})}
  </div>`}function Mo(t){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${Ae(t,{width:140})}
  </div>`}async function Tr(t,e){const{state:i,navigate:o,toast:r,openModal:n,closeModal:a}=e;Yt(o,i.profile,"cards","/icons/",r),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await v.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:c}=await v.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),s=(d||[]).filter(j=>j.card_type==="player"&&j.player),l=(d||[]).filter(j=>j.card_type==="game_changer"),p=(d||[]).filter(j=>j.card_type==="formation"),b=(d||[]).filter(j=>j.card_type==="stadium"),{data:g}=await v.from("gc_definitions").select("name,gc_type,color,effect,image_url"),x={};(g||[]).forEach(j=>{x[j.name]=j});const{data:m}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),y={};(m||[]).forEach(j=>{y[j.id]=j}),b.forEach(j=>{j.stadium_def&&(y[j.stadium_id]=j.stadium_def)});const f=Object.keys(Ai),_=Object.keys(Oe),h={};s.forEach(j=>{const Y=j.player.id;h[Y]=(h[Y]||0)+1}),new Set(Object.keys(h).map(j=>String(j)));const E=new Set(p.map(j=>j.formation)),u=new Set(l.map(j=>j.gc_type));let I="player",$="Tous",S="",q=!1,O=!1;function W(){return[...s].sort((j,Y)=>{const re=mi.indexOf(j.player.job),te=mi.indexOf(Y.player.job);return re!==te?re-te:(j.player.surname_real||"").localeCompare(Y.player.surname_real||"")})}function U(){return[...c||[]].sort((j,Y)=>{const re=mi.indexOf(j.job),te=mi.indexOf(Y.job);return re!==te?re-te:(j.surname_real||"").localeCompare(Y.surname_real||"")})}function L(){return W().filter(j=>{const Y=j.player,re=$==="Tous"||Y.job===$,te=!S||`${Y.firstname} ${Y.surname_real}`.toLowerCase().includes(S);return re&&te})}function w(){return U().filter(j=>{const Y=$==="Tous"||j.job===$,re=!S||`${j.firstname} ${j.surname_real}`.toLowerCase().includes(S);return Y&&re})}t.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--tile-border);background:var(--tile-bg)">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="player"?"var(--green)":"transparent"};
        color:${I==="player"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${s.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="formation"?"var(--green)":"transparent"};
        color:${I==="formation"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${p.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="gc"?"var(--green)":"transparent"};
        color:${I==="gc"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${l.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="stadium"?"#4FC3F7":"transparent"};
        color:${I==="stadium"?"#4FC3F7":"var(--tile-fg-dim)"}">
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
  </div>`,function(Y){const re=document.getElementById(Y);if(!re)return;re.addEventListener("wheel",K=>{Math.abs(K.deltaY)<=Math.abs(K.deltaX)||(K.preventDefault(),re.scrollLeft+=K.deltaY)},{passive:!1});let te=!1,X=0,N=0,J=!1,P=!1;re.addEventListener("mousedown",K=>{te=!0,J=!1,X=K.pageX,N=re.scrollLeft}),window.addEventListener("mouseup",()=>{te=!1,J&&(re.style.cursor="",P=!0),J=!1}),window.addEventListener("mousemove",K=>{if(!te)return;const ae=K.pageX-X;!J&&Math.abs(ae)<6||(J=!0,re.style.cursor="grabbing",K.preventDefault(),re.scrollLeft=N-ae)}),re.addEventListener("click",K=>{P&&(K.stopPropagation(),K.preventDefault(),P=!1)},!0)}("col-grid");function F(){const j=document.getElementById("col-filters");j&&(I==="player"?(j.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px;background:#fff;color:#1a1a1a" value="${S}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${$r.map(Y=>`
            <button class="filter-btn" data-job="${Y}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${Y===$?"var(--green)":"var(--tile-border)"};
                background:${Y===$?"var(--green)":"#fff"};
                color:${Y===$?"#fff":"#555"}">
              ${Y}
            </button>`).join("")}
          <button id="dupes-only-btn" title="Voir les cartes en plusieurs exemplaires"
            style="flex-shrink:0;margin-left:auto;padding:5px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${O?"var(--yellow)":"var(--tile-border)"};
              background:${O?"var(--yellow)":"#fff"};
              color:${O?"#111":"#555"}">
            🗂️×2
          </button>
          <button id="show-all-btn"
            style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${q?"var(--yellow)":"var(--tile-border)"};
              background:${q?"var(--yellow)":"#fff"};
              color:${q?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${q?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",Y=>{S=Y.target.value.toLowerCase(),R()}),t.querySelectorAll(".filter-btn").forEach(Y=>{Y.addEventListener("click",()=>{$=Y.dataset.job,F(),R()})}),document.getElementById("dupes-only-btn").addEventListener("click",()=>{O=!O,F(),R()}),document.getElementById("show-all-btn").addEventListener("click",()=>{q=!q,F(),R()})):(j.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${q?"var(--yellow)":"var(--tile-border)"};
              background:${q?"var(--yellow)":"#fff"};
              color:${q?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${q?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{q=!q,F(),R()})))}function R(){const j=document.getElementById("col-grid");j&&(I==="player"?ue(j):I==="formation"?me(j):I==="stadium"?le(j):be(j))}function se(j,Y,re,te,X,N=0){const J=document.getElementById("col-grid"),P=document.getElementById("col-big");if(!J||!P)return;var K=0;function ae(){var De;const pe=window.innerWidth>=768,xe=document.getElementById("col-big"),ke=document.getElementById("col-gap"),Ee=((De=document.getElementById("col-grid"))==null?void 0:De.parentElement)||null,Se=xe?xe.closest(".page"):null;if(xe&&Ee&&Se){let Me=0;Array.from(Se.children).forEach(function(z){z!==xe&&z!==Ee&&z!==ke&&(Me+=z.offsetHeight)});const Ce=Math.max(0,Se.clientHeight-Me),He=Math.round(Ce*(N/100)),k=Math.max(0,Ce-He),T=pe?50/71:45/63,A=Math.round(k*T),C=Math.max(0,k-A);ke&&(ke.style.height=He+"px"),xe.style.flex="none",xe.style.height=A+"px",xe.style.minHeight="0",Ee.style.flex="none",Ee.style.height=C+"px",Ee.style.minHeight="0",Ee.style.display="flex",Ee.style.overflow="hidden"}const ye=document.getElementById("col-grid");ye&&(ye.style.height="100%",ye.style.flexShrink="0",ye.style.overflowX="auto",ye.style.overflowY="hidden",ye.style.alignItems="center",ye.style.width="100%"),P.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+Y(j[K])+"</div>";var Le=P.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Le&&Le.addEventListener("click",function(){te(j[K])}),requestAnimationFrame(function(){var Me=document.getElementById("big-card-inner");if(!(!Me||!P)){var Ce=P.clientHeight,He=P.clientWidth-16,k=Me.offsetHeight,T=Me.offsetWidth;if(k>0&&T>0&&Ce>40){var A=Math.min(Ce/k,He/T);Me.style.transform="scale("+A.toFixed(3)+")",Me.style.transformOrigin="center center"}}}),J.innerHTML=j.map(function(Me,Ce){var He=Ce===K,k="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(He?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Ce+'" style="'+k+'">'+re(Me,He)+"</div>"}).join(""),J.querySelectorAll(".col-mini-item").forEach(function(Me){Me.addEventListener("click",function(){K=Number(Me.dataset.idx),ae(),Me.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var Me=ye?ye.clientHeight:0,Ce=J.querySelector(".col-mini-item > div");if(!(!Me||!Ce)){var He=Ce.style.zoom;Ce.style.zoom="1";var k=Ce.offsetHeight;if(Ce.style.zoom=He,!(k<=0)){var T=Me/k;J.querySelectorAll(".col-mini-item > div").forEach(function(A){A.style.zoom=T.toFixed(4)})}}})}ae()}function ce(j,Y){var re=window.innerWidth>=768?.76:.54,te;if(!j||j._fake){var X=j?j.player:null;if(!X)return"";te=Mo(X)}else te=Ri(j,"");var N=j&&!j._fake?h[j.player&&j.player.id]||1:0,J=N>0?'<div style="position:absolute;top:6px;right:6px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:11px;font-weight:900;padding:2px 7px;z-index:3;box-shadow:0 1px 4px rgba(0,0,0,0.4)">×'+N+"</div>":"";return'<div style="display:inline-block;position:relative;zoom:'+re+';pointer-events:none;line-height:0">'+J+te+"</div>"}function M(j,Y,re){var te=re>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+re+"</div>":"",X=!!Y,N=si(j,ut[j],{width:160});return X||(N='<div style="filter:grayscale(1);opacity:0.5">'+N+"</div>"),"<div "+(Y?'data-form-id="'+Y.id+'"':"")+' style="position:relative;cursor:pointer">'+te+N+"</div>"}function H(j,Y){var re=window.innerWidth>=768?.76:.54,te=si(j,ut[j],{width:140});return Y||(te='<div style="filter:grayscale(1);opacity:0.45">'+te+"</div>"),'<div style="display:inline-block;zoom:'+re+';line-height:0;pointer-events:none">'+te+"</div>"}function ue(j){if(q){const Y=w();if(!Y.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const re=Y.map(te=>s.find(X=>X.player.id===te.id)||{_fake:!0,player:te,id:"fake-"+te.id});se(re,te=>te._fake?Mo(te.player):Ri(te,""),te=>te._fake?ce({player:te.player,id:"x",_fake:!0}):ce(te),te=>{te._fake||Co(te,s,h,e)})}else{const Y=L();if(!Y.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const re={};Y.forEach(X=>{const N=X.player.id;re[N]||(re[N]=[]),re[N].push(X)});const te=Object.values(re).map(X=>Lr(X)).filter(X=>!O||(h[X.player.id]||1)>1);if(O&&!te.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte en plusieurs exemplaires.</div>';return}se(te,X=>{const N=h[X.player.id]||1,J=N>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${N}</div>`:"",K=s.filter(ae=>ae.player.id===X.player.id&&ae.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Ri(X,J+K)},X=>ce(X),X=>Co(X,s,h,e))}}function me(j){const Y=q?f:[...E];if(!Y.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const re=Y.map(te=>({formation:te,card:p.find(X=>X.formation===te)||null,owned:E.has(te)}));se(re,({formation:te,card:X,owned:N})=>M(te,N?X:null,N?p.filter(J=>J.formation===te).length:0),({formation:te,owned:X})=>H(te,X),({card:te,owned:X})=>{X&&te&&zr(te,p,e,n)},"#1A6B3C",5)}function be(j){const Y=Object.keys(x),re=q?Y.length?Y:_:[...u];if(!re.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const te=re.map(X=>({type:X,gc:Oe[X]||{icon:"⚡",desc:""},def:x[X]||null,owned:u.has(X),card:l.find(N=>N.gc_type===X)||null}));se(te,({type:X,gc:N,def:J,owned:P,card:K})=>{var ye;const ae=(J==null?void 0:J.name)||X,pe=P?l.filter(Le=>Le.gc_type===X).length:0,xe=pe>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${pe}</div>`:"",ke=(J==null?void 0:J.effect)||N.desc||"",Ee=J!=null&&J.image_url?`/icons/${J.image_url}`:((ye=J==null?void 0:J.club)==null?void 0:ye.logo_url)||(J!=null&&J.country_code?`https://flagsapi.com/${J.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);let Se=nt(ae,Ee,N.icon,ke,{width:160,onClick:P});return P||(Se=`<div style="filter:grayscale(1);opacity:0.5">${Se}</div>`),`<div ${P&&K?`data-gc-id="${K.id}" data-gc-type="${X}"`:""} style="position:relative">${xe}${Se}</div>`},({type:X,gc:N,def:J,owned:P})=>{const K=window.innerWidth>=768?.76:.54,ae=(J==null?void 0:J.name)||X,pe=(J==null?void 0:J.effect)||N.desc||"",xe=J!=null&&J.image_url?`/icons/${J.image_url}`:null;let ke=nt(ae,xe,N.icon,pe,{width:140});return P||(ke=`<div style="filter:grayscale(1);opacity:0.45">${ke}</div>`),`<div style="display:inline-block;zoom:${K};line-height:0;pointer-events:none">${ke}</div>`},({type:X,owned:N,def:J})=>{N&&Ir(X,J,n)},"#7a28b8",5)}function le(j){const Y="#4FC3F7",re="/";if(!b.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const te={};b.forEach(N=>{const J=N.stadium_id||"?";(te[J]=te[J]||[]).push(N)});const X=Object.entries(te).map(([N,J])=>({sid:N,def:y[N]||null,count:J.length,card:J[0]}));se(X,({def:N,count:J})=>{var ke,Ee;const P=(N==null?void 0:N.name)||"?",K=((ke=N==null?void 0:N.club)==null?void 0:ke.encoded_name)||(N==null?void 0:N.country_code)||"—",ae=N!=null&&N.image_url?`${re}icons/${N.image_url}`:((Ee=N==null?void 0:N.club)==null?void 0:Ee.logo_url)||(N!=null&&N.country_code?`https://flagsapi.com/${N.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),pe=J>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${J}</div>`:"",xe=`${K}<br>+10 ⭐ joueurs alliés`;return`<div style="position:relative">${pe}${Ut(P,ae,xe,{width:160})}</div>`},({def:N})=>{var xe,ke;const J=window.innerWidth>=768?.76:.54,P=(N==null?void 0:N.name)||"?",K=((xe=N==null?void 0:N.club)==null?void 0:xe.encoded_name)||(N==null?void 0:N.country_code)||"—",ae=N!=null&&N.image_url?`${re}icons/${N.image_url}`:((ke=N==null?void 0:N.club)==null?void 0:ke.logo_url)||(N!=null&&N.country_code?`https://flagsapi.com/${N.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),pe=`${K}<br>+10 ⭐`;return`<div style="display:inline-block;zoom:${J};line-height:0;pointer-events:none">${Ut(P,ae,pe,{width:140})}</div>`},null,Y,5)}t.querySelectorAll(".col-tab-btn").forEach(j=>{j.addEventListener("click",()=>{I=j.dataset.tab,$="Tous",S="",q=!1,t.querySelectorAll(".col-tab-btn").forEach(Y=>{const re=Y.dataset.tab===I;Y.style.borderBottomColor=re?"var(--green)":"transparent",Y.style.color=re?"var(--green)":"var(--tile-fg-dim)"}),F(),R()})}),F(),R()}function Ir(t,e,i){const o=Oe[t]||{icon:"⚡",desc:"Effet spécial."},r=(e==null?void 0:e.name)||t,n=(e==null?void 0:e.effect)||o.desc,a=e!=null&&e.image_url?`/icons/${e.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      ${nt(r,a,o.icon,n,{width:200})}
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const bi=1e3;function zr(t,e,i,o){var x,m,y;const{state:r,toast:n,closeModal:a,navigate:d,refreshProfile:c}=i,s=t.formation,l={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function p(){const f=ut[s]||{},_=Ai[s]||[],h=290,E=360,u=20;function I(S){const q=f[S];return q?{x:q.x*h,y:q.y*E}:null}let $=`<svg width="${h}" height="${E}" viewBox="0 0 ${h} ${E}" xmlns="http://www.w3.org/2000/svg">`;for(const[S,q]of _){const O=I(S),W=I(q);!O||!W||($+=`<line x1="${O.x}" y1="${O.y}" x2="${W.x}" y2="${W.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const S of Object.keys(f)){const q=I(S);if(!q)continue;const O=S.replace(/\d+/,""),W=l[O]||"#555";$+=`<circle cx="${q.x}" cy="${q.y}" r="${u}" fill="${W}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,$+=`<text x="${q.x}" y="${q.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${O}</text>`}return $+="</svg>",$}const b=e.filter(f=>f.formation===s);b.length;const g=!t.is_for_sale;o(`Formation ${s}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${p()}
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(x=document.getElementById("direct-sell-form-btn"))==null||x.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${s} pour ${bi.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const f=b.find(h=>!h.is_for_sale)||b[0];if(!f){n("Aucune carte à vendre","error");return}await v.from("market_listings").delete().eq("card_id",f.id),await v.from("transfer_history").delete().eq("card_id",f.id);const{error:_}=await v.from("cards").delete().eq("id",f.id);if(_){n(_.message,"error");return}await v.from("users").update({credits:(r.profile.credits||0)+bi}).eq("id",r.profile.id),await c(),n(`+${bi.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),d("collection")}),(m=document.getElementById("market-sell-form-btn"))==null||m.addEventListener("click",async()=>{const f=parseInt(document.getElementById("sell-price-form").value);if(!f||f<1){n("Prix invalide","error");return}await v.from("cards").update({is_for_sale:!0,sale_price:f}).eq("id",t.id),await v.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:f}),n("Carte mise en vente sur le marché !","success"),a(),d("collection")}),(y=document.getElementById("cancel-sell-form-btn"))==null||y.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),a(),d("collection")})}async function Co(t,e,i,o){var ue,me,be,le,j,Y,re,te,X,N,J;const{state:r,toast:n,openModal:a,closeModal:d,navigate:c,refreshProfile:s}=o,l=t.player,p=e.filter(P=>P.player.id===l.id),b=p.length,g=t.evolution_bonus||0,x=Math.max((Number(l.note_g)||0)+(l.job==="GK"||l.job2==="GK"?g:0),(Number(l.note_d)||0)+(l.job==="DEF"||l.job2==="DEF"?g:0),(Number(l.note_m)||0)+(l.job==="MIL"||l.job2==="MIL"?g:0),(Number(l.note_a)||0)+(l.job==="ATT"||l.job2==="ATT"?g:0)),m=l.rarity||"normal",{data:y}=await v.from("sell_price_configs").select("*").eq("rarity",m).lte("note_min",x).gte("note_max",x).order("note_min",{ascending:!1}).limit(1),f=((ue=y==null?void 0:y[0])==null?void 0:ue.price)??Er[m]??1e3,_=((me=y==null?void 0:y[0])==null?void 0:me.price_min)??null,h=((be=y==null?void 0:y[0])==null?void 0:be.price_max)??null;Bt(l);const E=gi(l,l.job)+g,u=l.job2?gi(l,l.job2)+(gi(l,l.job2)>0?g:0):null;ei[l.job],l.job2&&ei[l.job2];const I=kr[l.rarity]||"#ccc",$=Sr[l.country_code]||l.country_code||"",S=t.evolution_bonus||0,O=E+S,W=u||0,U=W>0?W+S:0,L=p.map(P=>P.id);let w={};if(L.length){const{data:P}=await v.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",L).order("transferred_at",{ascending:!0});(P||[]).forEach(K=>{w[K.card_id]||(w[K.card_id]=[]),w[K.card_id].push(K)})}const F=L.length?`
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
          ${_!==null&&h!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${_.toLocaleString("fr")}</b> – <b>${h.toLocaleString("fr")}</b> cr.
          </div>`:""}
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <input type="number" id="single-sell-price" min="1" placeholder="Prix"
              value="${_||l.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="single-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
          <button id="single-direct-sell-btn" class="btn btn-ghost" style="width:100%;border-color:#1A6B3C;color:#1A6B3C;font-weight:700">
            ⚡ Vente directe immédiate (${(_??f).toLocaleString("fr")} cr.)
          </button>
        </div>
      `}

      ${b-1>0?`<div style="font-size:13px;font-weight:700;margin-bottom:10px">🗂️ Copies (${b-1})</div>`:`
        <div style="font-size:12px;color:#aaa;font-style:italic">Aucune autre copie.</div>
      `}
      <!-- Grille de mini-cartes (copies uniquement, l'exemplaire 1 = carte principale affichée en haut) -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${p.filter(P=>P.id!==t.id).map((P,K)=>{const ae=w[P.id]||[],pe=P.is_for_sale,xe=ae.length?ae[ae.length-1]:null,ke=P.evolution_bonus||0,Ee=xe?xe.source==="booster"?"Booster":xe.price?xe.price.toLocaleString("fr")+" cr.":"—":"—",Se=xe?new Date(xe.transferred_at).toLocaleDateString("fr",{day:"2-digit",month:"2-digit",year:"numeric"}):"",ye=80,Le=Math.round(ye*657/507),De=Ae({...l,_evolution_bonus:ke},{width:ye});return`
            <div class="exemplaire-row" data-card-id="${P.id}" data-card-idx="${K}"
              style="position:relative;cursor:${pe?"not-allowed":"pointer"};opacity:${pe?.55:1};transition:transform .1s">
              <!-- Checkbox cachée -->
              <input type="checkbox" class="expl-check"
                data-id="${P.id}" data-evo="${ke}" data-note="${gi(l,l.job)}"
                ${pe?"disabled":""}
                style="display:none">
              <!-- Wrapper exactement aux dimensions de la carte -->
              <div class="expl-mini-card" style="position:relative;width:${ye}px;height:${Le}px;border-radius:8px;overflow:hidden">
                ${De}
                <!-- Overlay vert sélection — couvre toute la carte -->
                <div class="expl-sel-overlay" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(26,107,60,0.38);pointer-events:none;z-index:10;box-shadow:inset 0 0 0 3px #1A6B3C;border-radius:8px"></div>
                <!-- Checkmark -->
                <div class="expl-sel-check" style="display:none;position:absolute;top:5px;left:5px;width:20px;height:20px;background:#1A6B3C;border-radius:50%;z-index:11;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:900">✓</div>
                ${pe?'<div style="position:absolute;top:0;right:0;background:#e67e22;color:#fff;font-size:6px;font-weight:900;padding:2px 4px;border-radius:0 6px 0 4px;z-index:12">VENTE</div>':""}
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
              ${(t.evolution_bonus||0)>0?`+${t.evolution_bonus} appliqué${t.evolution_bonus>1?"s":""} · Note : ${O}${l.job2&&W>0?` / ${U}`:""}`:`Note actuelle : ${O}${l.job2&&W>0?` / ${U}`:""}`}
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
          ${_!==null&&h!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${_.toLocaleString("fr")}</b> – <b>${h.toLocaleString("fr")}</b> cr. / carte
          </div>`:""}
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${_||l.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
          <button id="market-direct-sell-btn" class="btn btn-ghost" style="width:100%;border-color:#1A6B3C;color:#1A6B3C;font-weight:700">
            ⚡ Vente directe immédiate (${(_??f).toLocaleString("fr")} cr./carte)
          </button>
        </div>`}
      </div>
    </div>`:"";a(`${l.firstname} ${l.surname_real}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${Ae({...l,_evolution_bonus:g},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:12px">

        <!-- Rareté + carte évolutive -->
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:3px">RARETÉ</div>
          <div style="font-weight:900;font-size:15px;color:${l.rarity==="normal"?"#555":l.rarity==="papyte"?"#707070":I}">${l.rarity.toUpperCase()}</div>
          ${l.rarity==="pepite"||l.rarity==="papyte"?`
          <div style="margin-top:8px;background:${I}12;border-left:3px solid ${I};border-radius:0 8px 8px 0;padding:10px 12px">
            <div style="font-size:11px;font-weight:700;color:${I};margin-bottom:4px">✨ Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5;margin-bottom:6px">
              ${l.rarity==="pepite"?'⬆️ Bonus évolution : <b style="color:#D4A017">+30%</b>':'⬇️ Malus évolution : <b style="color:#909090">-30%</b>'}
            </div>
            <div style="font-size:10.5px;color:#888;line-height:1.5;font-style:italic;border-top:1px solid ${I}30;padding-top:6px">
              ${l.rarity==="pepite"?"Une carte Pépite est promise à un grand avenir : à force d'évoluer, elle peut un jour devenir une Légende.":"Une carte Papyte peut devenir une légende dans le temps ou prendre sa retraite..."}
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
            <div style="font-weight:700;font-size:13px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${((le=l.clubs)==null?void 0:le.encoded_name)||"—"}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">POSTE PRINCIPAL</div>
            <div style="font-weight:700;font-size:13px;color:${ei[l.job]||"#333"}">${l.job}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">POSTE SECONDAIRE</div>
            <div style="font-weight:700;font-size:13px;color:${l.job2?ei[l.job2]||"#333":"#bbb"}">${l.job2||"Aucun"}</div>
          </div>
        </div>

        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",l.note_g],["DEF",l.note_d],["MIL",l.note_m],["ATT",l.note_a]].map(([P,K])=>{const ae=ei[P],pe=P==="GK"?"#fff":ae,xe=P===l.job||P===l.job2,ke=(Number(K)||0)+(xe&&S>0?S:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${ae};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${pe};font-family:Arial Black,Arial;line-height:1">${ke}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${pe}">${P}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:900;font-size:18px;color:#1A6B3C">×${b}</div>
        </div>
      </div>
    </div>
    ${F}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(j=document.getElementById("close-detail"))==null||j.addEventListener("click",d);let R=new Set;const se=l.rarity==="pepite"?1.3:l.rarity==="papyte"?.7:1;function ce(){let P=0;return document.querySelectorAll(".expl-check:checked").forEach(K=>{if(K.dataset.id===t.id)return;const pe=Number(K.dataset.evo)||0,xe=Number(K.dataset.note)||0;P+=xe+pe}),Math.round(P*se)}const M=()=>{const P=R.size,K=document.getElementById("sell-action-panel");if(!K)return;K.style.display=P>0?"block":"none",document.getElementById("sell-selected-count").textContent=P;const ae=document.getElementById("evolve-btn");if(ae){const pe=ce();ae.textContent=pe>0?`⬆️ Évoluer (+${pe})`:"⬆️ Évoluer"}};document.querySelectorAll(".expl-check").forEach(P=>{P.addEventListener("change",()=>{const K=P.dataset.id;P.checked?R.add(K):R.delete(K);const ae=P.closest(".exemplaire-row");if(ae){const pe=ae.querySelector(".expl-sel-overlay"),xe=ae.querySelector(".expl-sel-check");pe&&(pe.style.display=P.checked?"block":"none"),xe&&(xe.style.display=P.checked?"flex":"none"),ae.style.transform=P.checked?"scale(1.05)":"scale(1)"}M()})}),document.querySelectorAll(".exemplaire-row").forEach(P=>{P.addEventListener("click",K=>{if(K.target.tagName==="INPUT")return;const ae=P.querySelector(".expl-check");ae&&!ae.disabled&&(ae.checked=!ae.checked,ae.dispatchEvent(new Event("change")))})}),(Y=document.getElementById("evolve-btn"))==null||Y.addEventListener("click",async()=>{if(b<=1)return;const P=[...R];if(!P.length)return;if(R.has(t.id)){const ye=document.createElement("div");ye.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ye.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(ye),ye.querySelector("#err-close").addEventListener("click",()=>ye.remove()),ye.addEventListener("click",Le=>{Le.target===ye&&ye.remove()});return}const K=P.filter(ye=>ye!==t.id);if(!K.length){n("Sélectionne des copies à sacrifier","warning");return}const ae=K.reduce((ye,Le)=>{const De=document.querySelector(`.expl-check[data-id="${Le}"]`),Me=De&&Number(De.dataset.evo)||0,Ce=De&&Number(De.dataset.note)||0;return ye+Ce+Me},0),pe=Math.round(ae*se),xe=l.rarity==="pepite"?" (+30% pépite ✨)":l.rarity==="papyte"?" (-30% papyte)":"";if(!await new Promise(ye=>{const Le=document.createElement("div");Le.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",Le.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${l.firstname} ${l.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${K.length}</strong> copie${K.length>1?"s":""} sacrifiée${K.length>1?"s":""}<br>
            ➕ Brut : <strong>+${ae}</strong>${xe?`<span style="font-size:11px;color:#888"> ${xe}</span>`:""}<br>
            ⬆️ Bonus final : <strong style="color:#1A6B3C">+${pe}</strong><br>
            📈 Évolution : <strong>${t.evolution_bonus||0}</strong> → <strong style="color:#1A6B3C">${(t.evolution_bonus||0)+pe}</strong><br>
            📊 Note finale : <strong>${E}</strong> → <strong style="color:#1A6B3C">${E+pe}</strong>
            ${u&&u>0?`<br>📊 Note 2 finale : <strong>${u}</strong> → <strong style="color:#1A6B3C">${u+pe}</strong>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(Le),Le.querySelector("#sac-cancel").addEventListener("click",()=>{Le.remove(),ye(!1)}),Le.querySelector("#sac-ok").addEventListener("click",()=>{Le.remove(),ye(!0)}),Le.addEventListener("click",De=>{De.target===Le&&(Le.remove(),ye(!1))})}))return;if(K.length){await v.from("market_listings").delete().in("card_id",K),await v.from("deck_cards").delete().in("card_id",K),await v.from("transfer_history").delete().in("card_id",K),await v.from("decks").update({stadium_card_id:null}).in("stadium_card_id",K);const{error:ye}=await v.from("cards").delete().in("id",K);if(ye){n("Erreur suppression : "+ye.message,"error");return}}const Ee=(t.evolution_bonus||0)+pe,{error:Se}=await v.from("cards").update({evolution_bonus:Ee}).eq("id",t.id);if(Se){n("Erreur évolution : "+Se.message,"error");return}n(`⬆️ ${l.firstname} ${l.surname_real} : note ${E} → ${E+Ee} (+${pe}) !`,"success",4e3),d(),c("collection")});async function H(P){const{data:K}=await v.from("sell_price_configs").select("price_min, price_max").eq("rarity",l.rarity).lte("note_min",E).gte("note_max",E).order("note_max",{ascending:!0}).limit(1).maybeSingle();return K?P<K.price_min||P>K.price_max?{ok:!1,min:K.price_min,max:K.price_max}:{ok:!0}:{ok:!0}}(re=document.getElementById("market-sell-btn"))==null||re.addEventListener("click",async()=>{var Ee;const P=[...R];if(!P.length){n("Sélectionne au moins un exemplaire","warning");return}const K=parseInt((Ee=document.getElementById("sell-market-price"))==null?void 0:Ee.value);if(!K||K<1){n("Prix invalide","error");return}const ae=await H(K);if(!ae.ok){n(`Prix hors grille : entre ${ae.min.toLocaleString("fr")} et ${ae.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:pe}=await v.from("cards").update({is_for_sale:!0,sale_price:K}).in("id",P);if(pe){n(pe.message,"error");return}const xe=P.map(Se=>({seller_id:r.profile.id,card_id:Se,price:K,status:"active"})),{error:ke}=await v.from("market_listings").insert(xe);ke&&console.warn("[Market] insert listings:",ke.message),n(`${P.length} carte${P.length>1?"s":""} mise${P.length>1?"s":""} en vente à ${K.toLocaleString("fr")} cr. chacune !`,"success"),d(),c("collection")}),(te=document.getElementById("single-sell-btn"))==null||te.addEventListener("click",async()=>{var xe;const P=parseInt((xe=document.getElementById("single-sell-price"))==null?void 0:xe.value);if(!P||P<1){n("Prix invalide","error");return}const K=await H(P);if(!K.ok){n(`Prix hors grille : entre ${K.min.toLocaleString("fr")} et ${K.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:ae}=await v.from("cards").update({is_for_sale:!0,sale_price:P}).eq("id",t.id);if(ae){n(ae.message,"error");return}const{error:pe}=await v.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:P,status:"active"});pe&&console.warn("[Market] insert listing:",pe.message),n(`Carte mise en vente à ${P.toLocaleString("fr")} cr. !`,"success"),d(),c("collection")}),(X=document.getElementById("single-direct-sell-btn"))==null||X.addEventListener("click",async()=>{const P=_??f;if(!confirm(`Vendre cette carte immédiatement pour ${P.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;await v.from("market_listings").delete().eq("card_id",t.id),await v.from("transfer_history").delete().eq("card_id",t.id);const{error:K}=await v.from("cards").delete().eq("id",t.id);if(K){n(K.message,"error");return}await v.from("users").update({credits:(r.profile.credits||0)+P}).eq("id",r.profile.id),await s(),n(`+${P.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),c("collection")}),(N=document.getElementById("market-direct-sell-btn"))==null||N.addEventListener("click",async()=>{const P=[...R];if(!P.length){n("Sélectionne au moins un exemplaire","warning");return}const ae=(_??f)*P.length;if(!confirm(`Vendre ${P.length} carte${P.length>1?"s":""} immédiatement pour ${ae.toLocaleString("fr")} crédits au total ? Cette action est irréversible.`))return;await v.from("market_listings").delete().in("card_id",P),await v.from("transfer_history").delete().in("card_id",P);const{error:pe}=await v.from("cards").delete().in("id",P);if(pe){n(pe.message,"error");return}await v.from("users").update({credits:(r.profile.credits||0)+ae}).eq("id",r.profile.id),await s(),n(`+${ae.toLocaleString("fr")} crédits ! ${P.length} carte${P.length>1?"s":""} vendue${P.length>1?"s":""}.`,"success"),d(),c("collection")}),(J=document.getElementById("cancel-sell-btn"))==null||J.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),d(),c("collection")})}function jo(t,e=""){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:360px">
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
    </div>`,document.body.appendChild(o);const r=n=>{o.remove(),i(n)};o.querySelector("#cm-ok").addEventListener("click",()=>r(!0)),o.querySelector("#cm-cancel").addEventListener("click",()=>r(!1)),o.addEventListener("click",n=>{n.target===o&&r(!1)})})}const $i={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Ki(t,e){const{state:i,navigate:o,toast:r}=e;Yt(o,i.profile,"decks","/icons/",r),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await v.from("decks").select("id,name,formation,stadium_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1}),a=[...new Set((n||[]).map(c=>c.stadium_card_id).filter(Boolean))];let d={};if(a.length){const{data:c}=await v.from("cards").select("id, stadium_id, stadium_definitions(image_url, country_code, club:clubs(logo_url))").in("id",a);(c||[]).forEach(s=>{var b;const l=s.stadium_definitions,p=((b=l==null?void 0:l.club)==null?void 0:b.logo_url)||(l!=null&&l.image_url?`/icons/${l.image_url}`:null)||(l!=null&&l.country_code?`https://flagsapi.com/${l.country_code}/flat/64.png`:null);d[s.id]=p})}t.innerHTML=`
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(n==null?void 0:n.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(n==null?void 0:n.length)>0?n.map(c=>`
          <div class="card-panel" data-open-deck="${c.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0">
              ${d[c.stadium_card_id]?`<img src="${d[c.stadium_card_id]}" style="width:32px;height:32px;object-fit:contain;border-radius:6px;flex-shrink:0;background:rgba(255,255,255,0.06)">`:'<div style="width:32px;height:32px;border-radius:6px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:16px;opacity:.4">🏟️</div>'}
              <div style="min-width:0">
                <div style="font-weight:700;font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.name}</div>
                <div style="font-size:11px;color:var(--tile-fg-dim)">${c.formation||"—"}</div>
              </div>
            </div>
            <div style="display:flex;gap:6px;flex-shrink:0" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${c.id}" data-name="${c.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${c.id}" data-name="${c.name}">🗑️</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const c=await jo("Nom du deck",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!c)return;const{data:s,error:l}=await v.from("decks").insert({owner_id:i.profile.id,name:c}).select().single();if(l){r(l.message,"error");return}r("Deck créé !","success"),qo(s.id,t,e)}),t.querySelectorAll("[data-open-deck]").forEach(c=>{c.addEventListener("click",()=>qo(c.dataset.openDeck,t,e))}),t.querySelectorAll("[data-rename]").forEach(c=>{c.addEventListener("click",async()=>{const s=await jo("Nouveau nom",c.dataset.name);if(!s||s===c.dataset.name)return;const{error:l}=await v.from("decks").update({name:s}).eq("id",c.dataset.rename);if(l){r(l.message,"error");return}r("Deck renommé !","success"),Ki(t,e)})}),t.querySelectorAll("[data-delete]").forEach(c=>{c.addEventListener("click",async()=>{if(!await Ar(`Supprimer le deck "${c.dataset.name}" ? Cette action est irréversible.`,!0))return;await v.from("deck_cards").delete().eq("deck_id",c.dataset.delete);const{error:s}=await v.from("decks").delete().eq("id",c.dataset.delete);if(s){r(s.message,"error");return}r("Deck supprimé.","success"),Ki(t,e)})})}async function qo(t,e,i){const{state:o,toast:r}=i;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await v.from("decks").select("*").eq("id",t).single(),{data:a}=await v.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:d}=await v.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id).eq("card_type","stadium"),c=(a||[]).filter(f=>f.card_type==="player"&&f.player),s=(a||[]).filter(f=>f.card_type==="formation"),l=(d||[]).filter(f=>f.card_type==="stadium"),p=[...new Set(l.map(f=>f.stadium_id).filter(Boolean))];let b={};if(l.forEach(f=>{f.stadium_def&&f.stadium_id&&(b[f.stadium_id]=f.stadium_def)}),p.length&&Object.keys(b).length<p.length){const{data:f}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",p);(f||[]).forEach(_=>{b[_.id]=_})}const g=s.map(f=>f.formation).filter(Boolean),{data:x}=await v.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",t);let m=n.formation||"4-4-2";g.length>0&&!g.includes(m)&&(m=g[0]);const y={deckId:t,name:n.name,formation:m,formationCardId:n.formation_card_id,stadiumCardId:n.stadium_card_id||null,slots:{},subs:[],playerCards:c,formationCards:s,stadiumCards:l,stadDefMap:b,availableFormations:g};(x||[]).forEach(f=>{f.is_starter?y.slots[f.position]=f.card_id:y.subs.includes(f.card_id)||y.subs.push(f.card_id)}),Lt(e,y,i,!0)}function Lt(t,e,i,o=!1){var m,y;const{navigate:r}=i;o||Br(e,i),$i[e.formation];const n=Bo(e.formation),a=n.filter(f=>e.slots[f]).length,d=e.availableFormations.length>0?e.availableFormations:Object.keys($i),c=(m=e.stadiumCards)==null?void 0:m.find(f=>f.id===e.stadiumCardId),s=c&&((y=e.stadDefMap)==null?void 0:y[c.stadium_id])||null,l=e.subs.map(f=>e.playerCards.find(_=>_.id===f)).filter(Boolean);l.length!==e.subs.length&&(e.subs=l.map(f=>f.id)),[...Object.values(e.slots),...e.subs],t.innerHTML=`
  <style>.no-scrollbar::-webkit-scrollbar{display:none}</style>
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:8px;padding:6px 12px;min-height:0">
      <button class="btn-icon" id="builder-back" style="font-size:16px">←</button>
      <div style="flex:1">
        <h2 style="font-size:14px;margin:0">${e.name}</h2>
        <p style="font-size:11px;margin:0">${a}/11 · ${l.length}/5 rempl.</p>
      </div>
    </div>



    <!-- ── LAYOUT PC ─────────────────────────────────────── -->
    <div class="deck-pc-layout" style="display:none">
      <div style="display:flex;gap:0;min-height:600px">

        <!-- Remplaçants (colonne gauche) -->
        <div style="width:105px;flex-shrink:0;background:rgba(0,0,0,0.3);display:flex;flex-direction:column;align-items:center;padding:12px 6px;gap:8px;border-right:1px solid rgba(255,255,255,0.1)">


          <!-- Remplaçants PC : colonne verticale -->
          <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;text-align:center;margin-top:8px">Remplaçants<br>(${l.length}/5)</div>
          <div style="display:flex;flex-direction:column;gap:6px;align-items:center" id="subs-list">
            ${l.map(f=>{const _={...f.player,_evolution_bonus:f.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:24px">
                ${Ae({..._,_evolution_bonus:_._evolution_bonus||0},{width:90,showStad:!0,stadDef:s})}
                <button data-remove-sub="${f.id}"
                  style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:20px;height:20px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
              </div>`}).join("")}
            ${l.length<5?'<div id="add-sub-btn" style="width:90px;height:117px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:18px;color:rgba(255,255,255,0.4);cursor:pointer">+</div>':""}
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
              ${si(e.formation,ut[e.formation],{width:100})}
            </div>
          </div>
          <!-- Stade -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">🏟️ Stade</div>
            <div id="add-stad-btn-pc" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${c?(()=>{var h;const f=e.stadDefMap[c.stadium_id],_=((h=f==null?void 0:f.club)==null?void 0:h.logo_url)||(f==null?void 0:f.image_url)||(f!=null&&f.country_code?`https://flagsapi.com/${f.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ut((f==null?void 0:f.name)||"Stade",_,"+10 ⭐",{width:100})})():`<div style="width:100px;height:171px;border:2px dashed rgba(79,195,247,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
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
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">Remplaçants (${l.length}/5)</div>
            <div style="display:flex;gap:2px;align-items:center;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none" id="subs-list" class="no-scrollbar">
              ${l.map(f=>{const _={...f.player,_evolution_bonus:f.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:20px">
                  ${Ae({..._,_evolution_bonus:_._evolution_bonus||0},{width:44,showStad:!0,stadDef:s})}
                  <button data-remove-sub="${f.id}"
                    style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:16px;height:16px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
                </div>`}).join("")}
              ${l.length<5?'<div id="add-sub-btn" style="width:44px;height:57px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:14px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
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
              ${c?(()=>{var h;const f=e.stadDefMap[c.stadium_id],_=((h=f==null?void 0:f.club)==null?void 0:h.logo_url)||(f==null?void 0:f.image_url)||(f!=null&&f.country_code?`https://flagsapi.com/${f.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ut((f==null?void 0:f.name)||"Stade",_,"+10⭐",{width:44})})():`<div style="width:44px;height:57px;border:2px dashed rgba(79,195,247,0.5);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
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
  </div>`;const p=window.innerWidth>=900,b=t.querySelector(".deck-pc-layout"),g=t.querySelector(".deck-mobile-layout");b&&(b.style.display=p?"block":"none"),g&&(g.style.display=p?"none":"block"),t.querySelectorAll("#save-deck").forEach(f=>{f.closest(".page-body").style.display=p?"none":"block"}),Mr(t,e,n,i),t.querySelectorAll("#builder-back").forEach(f=>f.addEventListener("click",()=>r("decks")));const x=()=>{const{openModal:f,closeModal:_}=i,E=`<div style="display:flex;flex-wrap:wrap;gap:12px;padding:8px;justify-content:center">
      ${[...new Set(d)].map(u=>{const I=u===e.formation;return`<div data-forma="${u}" style="cursor:pointer;border-radius:10px;${I?"box-shadow:0 0 0 3px #1A6B3C":""}">
          ${si(u,ut[u],{width:90})}
        </div>`}).join("")}
    </div>`;f("⚽ Choisir une formation",E),document.querySelectorAll("#modal-body [data-forma]").forEach(u=>{u.addEventListener("click",()=>{e.formation=u.dataset.forma;const I=Bo(e.formation),$={};I.forEach(S=>{e.slots[S]&&($[S]=e.slots[S])}),e.slots=$,_(),Lt(t,e,i)})})};t.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(f=>f.addEventListener("click",x)),t.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(f=>f.addEventListener("click",()=>Cr(e,t,i))),t.querySelectorAll("#save-deck, #save-deck-pc").forEach(f=>f.addEventListener("click",()=>Dr(e,i))),t.querySelectorAll("[data-remove-sub]").forEach(f=>{f.addEventListener("click",()=>{e.subs=e.subs.filter(_=>_!==f.dataset.removeSub),Lt(t,e,i)})}),t.querySelectorAll("#add-sub-btn").forEach(f=>f.addEventListener("click",()=>qr(e,t,i)))}function Mr(t,e,i,o){var h,E,u;const r=window.innerWidth>=900,n=t.querySelector(r?"#deck-field-pc":"#deck-field-mobile");if(!n)return;const a=(h=e.stadiumCards)==null?void 0:h.find(I=>I.id===e.stadiumCardId),d=a&&((E=e.stadDefMap)==null?void 0:E[a.stadium_id])||null,c=ut[e.formation]||{},s=zi(e.formation)||[],l={};for(const I of i){const $=e.slots[I],S=$?e.playerCards.find(q=>q.id===$):null;S!=null&&S.player?l[I]={...S.player,_evolution_bonus:S.evolution_bonus||0,face:S.player.face||null}:l[I]=null}const p=window.innerWidth>=900,b=p?window.innerWidth-280:window.innerWidth-20,g=p?Math.min(b,860):b,x=Math.round(p?g*.82:g*.85),m=p?84:44;let y="";for(const[I,$]of s){const S=c[I],q=c[$];if(!S||!q)continue;const O=S.x*g,W=Math.round(.03*x+S.y*.85*x),U=q.x*g,L=Math.round(.03*x+q.y*.85*x),w=l[I],F=l[$],R=Ft(w,F);R==="#ff3333"||R==="#cc2222"?y+=`<line x1="${O.toFixed(1)}" y1="${W.toFixed(1)}" x2="${U.toFixed(1)}" y2="${L.toFixed(1)}" stroke="${R}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(y+=`<line x1="${O.toFixed(1)}" y1="${W.toFixed(1)}" x2="${U.toFixed(1)}" y2="${L.toFixed(1)}" stroke="${R}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,y+=`<line x1="${O.toFixed(1)}" y1="${W.toFixed(1)}" x2="${U.toFixed(1)}" y2="${L.toFixed(1)}" stroke="${R}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let f="";const _=Math.round(m*657/507);for(const I of i){const $=c[I];if(!$)continue;const S=l[I],q=$.x*g;$.y*x;const O=Math.round(.03*x+$.y*(.85*x)),W=Math.round(q-m/2),U=Math.round(O-_/2);if(S){const L=I.replace(/\d+/,""),w=d&&(d.club_id&&String(S.club_id)===String(d.club_id)||d.country_code&&S.country_code===d.country_code),F=Ae({...S,_evolution_bonus:S._evolution_bonus||0},{width:m,showStad:!0,stadDef:d,role:L});w&&((u=d.club)!=null&&u.logo_url||d.image_url),f+=`<div style="position:absolute;left:${W}px;top:${U}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${I}">
        <div style="position:relative">${F}</div>
      </div>`}else{const L=I.replace(/\d+/,"");f+=`<div style="position:absolute;left:${W}px;top:${U}px;width:${m}px;height:${_}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${I}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${L}</span>
      </div>`}}n.innerHTML=`
    <div style="position:relative;width:${g}px;height:${x}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${g} ${x}">${y}</svg>
      ${f}
    </div>`,n.querySelectorAll(".deck-slot-hit").forEach(I=>{I.addEventListener("click",()=>jr(I.dataset.pos,e,t,o))})}function Cr(t,e,i){var d;const{openModal:o,closeModal:r}=i,n=new Set,a=(t.stadiumCards||[]).filter(c=>{const s=c.stadium_id||c.id;return n.has(s)?!1:(n.add(s),!0)});o("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:90px;text-align:center">
        <div style="width:85px;height:112px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${t.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:26px">🚫</span>
          <span style="font-size:10px;color:#666">Aucun</span>
        </div>
      </div>
      ${a.map(c=>{var g;const s=t.stadDefMap[c.stadium_id],l=((g=s==null?void 0:s.club)==null?void 0:g.logo_url)||(s==null?void 0:s.image_url)||(s!=null&&s.country_code?`https://flagsapi.com/${s.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),p=t.stadiumCardId===c.id,b=Ut((s==null?void 0:s.name)||"Stade",l,"+10⭐",{width:90});return`<div class="stad-choice" data-stad-id="${c.id}" style="cursor:pointer;position:relative;border-radius:8px;${p?"box-shadow:0 0 0 3px #4fc3f7":""}">
          ${b}
        </div>`}).join("")}
    </div>`),(d=document.getElementById("stad-none"))==null||d.addEventListener("click",()=>{t.stadiumCardId=null,r(),Lt(e,t,i)}),document.querySelectorAll(".stad-choice").forEach(c=>{c.addEventListener("click",()=>{t.stadiumCardId=c.dataset.stadId,r(),Lt(e,t,i)})})}function jr(t,e,i,o){var x,m,y,f,_;const{openModal:r,closeModal:n}=o,a=t.replace(/\d+/,""),d=(x=e.stadiumCards)==null?void 0:x.find(h=>h.id===e.stadiumCardId),c=d&&((m=e.stadDefMap)==null?void 0:m[d.stadium_id])||null,s=e.slots[t],l=s?e.playerCards.find(h=>h.id===s):null;(y=l==null?void 0:l.player)==null||y.id;const p=new Set;Object.entries(e.slots).forEach(([h,E])=>{var I;if(h===t||!E)return;const u=e.playerCards.find($=>$.id===E);(I=u==null?void 0:u.player)!=null&&I.id&&p.add(u.player.id)}),e.subs.forEach(h=>{var u;const E=e.playerCards.find(I=>I.id===h);(u=E==null?void 0:E.player)!=null&&u.id&&p.add(E.player.id)});const b=new Set,g=e.playerCards.filter(h=>{const E=h.player;return!(E.job===a||E.job2===a)||p.has(E.id)||b.has(E.id)?!1:(b.add(E.id),!0)});g.sort((h,E)=>{const u=h.evolution_bonus||0,I=E.evolution_bonus||0,$=(a==="GK"?h.player.note_g:a==="DEF"?h.player.note_d:a==="MIL"?h.player.note_m:h.player.note_a)+(a===h.player.job||a===h.player.job2?u:0);return(a==="GK"?E.player.note_g:a==="DEF"?E.player.note_d:a==="MIL"?E.player.note_m:E.player.note_a)+(a===E.player.job||a===E.player.job2?I:0)-$}),r(`Choisir ${a} — ${t}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${e.slots[t]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${g.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+g.map(h=>{const E={...h.player,_evolution_bonus:h.evolution_bonus||0};return`<div class="player-option" data-card-id="${h.id}" style="cursor:pointer">
          ${Ae(E,{width:100,showStad:!0,stadDef:c,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(f=document.getElementById("close-selector"))==null||f.addEventListener("click",n),(_=document.getElementById("remove-player"))==null||_.addEventListener("click",()=>{delete e.slots[t],n(),Lt(i,e,o)}),document.querySelectorAll(".player-option").forEach(h=>{h.addEventListener("click",()=>{e.slots[t]=h.dataset.cardId,n(),Lt(i,e,o)})})}function qr(t,e,i){var l,p,b;const{openModal:o,closeModal:r}=i,n=(l=t.stadiumCards)==null?void 0:l.find(g=>g.id===t.stadiumCardId),a=n&&((p=t.stadDefMap)==null?void 0:p[n.stadium_id])||null,d=new Set;Object.keys(t.slots).forEach(g=>{var y;const x=t.slots[g];if(!x)return;const m=t.playerCards.find(f=>f.id===x);(y=m==null?void 0:m.player)!=null&&y.id&&d.add(m.player.id)}),t.subs.forEach(g=>{var m;const x=t.playerCards.find(y=>y.id===g);(m=x==null?void 0:x.player)!=null&&m.id&&d.add(x.player.id)});const c=new Set,s=t.playerCards.filter(g=>{var x,m,y;return d.has((x=g.player)==null?void 0:x.id)||c.has((m=g.player)==null?void 0:m.id)?!1:(c.add((y=g.player)==null?void 0:y.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+s.map(g=>{const x={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div class="player-option" data-card-id="${g.id}" style="cursor:pointer">
          ${Ae(x,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(b=document.getElementById("close-sub-selector"))==null||b.addEventListener("click",r),document.querySelectorAll(".player-option").forEach(g=>{g.addEventListener("click",()=>{t.subs.push(g.dataset.cardId),r(),Lt(e,t,i)})})}async function gn(t){const e=t.formationCards.find(r=>r.formation===t.formation),i=(e==null?void 0:e.id)||t.formationCardId;await v.from("decks").update({formation:t.formation,formation_card_id:i||null,stadium_card_id:t.stadiumCardId||null}).eq("id",t.deckId),await v.from("deck_cards").delete().eq("deck_id",t.deckId);const o=[];return Object.entries(t.slots).forEach(([r,n],a)=>{o.push({deck_id:t.deckId,card_id:n,position:r,is_starter:!0,slot_order:a})}),t.subs.forEach((r,n)=>{o.push({deck_id:t.deckId,card_id:r,position:`SUB${n+1}`,is_starter:!1,slot_order:100+n})}),o.length>0?await v.from("deck_cards").insert(o):{error:null}}let Vi=null;function Br(t,e){const{toast:i}=e;clearTimeout(Vi),document.querySelectorAll(".autosave-indicator").forEach(r=>{r.textContent="⏳ Enregistrement...",r.style.opacity="1",r.style.color=""}),Vi=setTimeout(async()=>{const{error:r}=await gn(t),n=document.querySelectorAll(".autosave-indicator");if(r){n.forEach(a=>{a.textContent="⚠️ Erreur d'enregistrement",a.style.color="#ff6b6b"}),i(r.message,"error");return}n.forEach(a=>{a.textContent="✅ Enregistré",a.style.color="",setTimeout(()=>{a.style.opacity="0"},1500)})},600)}async function Dr(t,e){const{toast:i,navigate:o}=e;clearTimeout(Vi);const{error:r}=await gn(t);if(r){i(r.message,"error");return}i("Deck enregistré ✅","success"),o("decks")}function Bo(t){const e=$i[t]||$i["4-4-2"],i=["GK1"];for(let o=1;o<=e.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=e.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=e.ATT;o++)i.push(`ATT${o}`);return i}const St={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Fr={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ct(t,e,i,o,r){var n;t.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${e}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${o}</button>
    </div>
  </div>`,(n=document.getElementById("msg-btn"))==null||n.addEventListener("click",r)}function Yi(t,e){var n,a;const i=t.player,o=t.evolution_bonus||0,r=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:t.id,position:e||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?o:0)+(i.job2==="GK"&&r>0?o:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?o:0)+(i.job2==="DEF"&&r>0?o:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?o:0)+(i.job2==="MIL"&&r>0?o:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?o:0)+(i.job2==="ATT"&&r>0?o:0),evolution_bonus:o,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((n=i.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ui(t,e){if(!e||!t)return t;const{club_id:i,country_code:o}=e;return Object.values(t).forEach(r=>{Array.isArray(r)&&r.forEach(n=>{const a=i&&String(n.club_id)===String(i),d=o&&String(n.country_code)===String(o);(a||d)&&(n.stadiumBonus=!0)})}),t}function Ei(t,e){if(!e||!(t!=null&&t.length))return t;const{club_id:i,country_code:o}=e;return t.forEach(r=>{if(!r)return;const n=i&&String(r.club_id)===String(i),a=o&&String(r.country_code)===String(o);(n||a)&&(r.stadiumBonus=!0)}),t}function lt(t){return t===1?[1]:t===2?[0,2]:t===3?[0,1,2]:t===4?[0,1,1,2]:t===5?[0,1,1,1,2]:[1]}function bn(){const t=Math.random()*100;return t<10?10:t<30?5:3}function Li(t,e){const i=St[e]||St["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]};if(t.length&&t.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const d=t.filter(s=>s.position&&s.position.replace(/\d+$/,"")===a).sort((s,l)=>parseInt(s.position.replace(/\D+/g,""),10)-parseInt(l.position.replace(/\D+/g,""),10)).map(s=>({...s,_line:a})),c=lt(d.length);d.forEach((s,l)=>{s._col=c[l]}),o[a]=d}return o}const n=[...t];for(const a of["GK","DEF","MIL","ATT"]){const d=[];for(let s=0;s<i[a];s++){let l=n.findIndex(p=>p.job===a);if(l===-1&&(l=n.findIndex(p=>p.job2===a)),l===-1&&(l=0),n[l]){const p={...n[l],_line:a};d.push(p),n.splice(l,1)}}const c=lt(d.length);d.forEach((s,l)=>{s._col=c[l]}),o[a]=d}return o}function ct(t){document.querySelectorAll(".top-nav, .bottom-nav").forEach(e=>{e.style.setProperty("display","none","important"),e.dataset.matchHidden="1"}),t&&t.style.setProperty("padding-bottom","0","important")}function Ye(t){document.querySelectorAll(".top-nav, .bottom-nav").forEach(e=>{e.style.removeProperty("display"),delete e.dataset.matchHidden}),t&&t.style.removeProperty("padding-bottom")}function Mi(t,e,i){const r=new Set,n=e.filter(l=>{var b;const p=((b=l._gcDef)==null?void 0:b.name)||l.gc_type||l.id;return r.has(p)?!1:(r.add(p),!0)});let a=[];function d(l,p){const b=l._gcDef,g=(b==null?void 0:b.name)||l.gc_type,x=b!=null&&b.image_url?`/icons/${b.image_url}`:null,m=nt(g,x,"⚡",(b==null?void 0:b.effect)||"",{width:100});return`<div class="gc-select-card" data-id="${l.id}"
      style="position:relative;flex-shrink:0;cursor:pointer;border-radius:10px;
        outline:${p?"3px solid #FFD700":"none"};
        box-shadow:${p?"0 0 18px #FFD700":"none"};
        transform:${p?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      ${m}
      ${p?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const c=l=>{t.style.overflow="",t.style.height="",t.style.display="",t.style.flexDirection="",i(l)};function s(){var p,b,g;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column";const l=a.length>0;t.innerHTML=`
    <div id="gc-screen-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <!-- Header -->
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Jusqu'à <b style="color:#FFD700">3</b> cartes · ${a.length}/3
        </div>
      </div>
      <!-- Grille cartes -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px">
        ${n.map(x=>{const m=a.find(y=>y.gc_type===x.gc_type);return d(x,!!m)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${l?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${l?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${l?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${l?"pointer":"default"};box-shadow:${l?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
          ⚡ Valider (${a.length}/3)
        </button>
        <div style="display:flex;gap:8px">
          <button id="gc-no-gc" style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.7);font-size:13px;font-weight:600;cursor:pointer">
            ▶ Sans GC
          </button>
          <button id="gc-reset" ${a.length===0?"disabled":""} style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(212,160,23,0.4);background:rgba(212,160,23,0.1);color:${a.length===0?"rgba(212,160,23,0.3)":"#D4A017"};font-size:13px;font-weight:700;cursor:${a.length===0?"default":"pointer"}">
            🔄 Réinitialiser
          </button>
        </div>
      </div>
    </div>`,t.querySelectorAll(".gc-select-card").forEach(x=>{x.addEventListener("click",()=>{const m=x.dataset.id,y=n.find(_=>_.id===m);if(!y)return;const f=a.findIndex(_=>_.gc_type===y.gc_type);f>-1?a.splice(f,1):a.length<3&&a.push(y),s()})}),(p=t.querySelector("#gc-launch"))==null||p.addEventListener("click",()=>{l&&c(a)}),(b=t.querySelector("#gc-no-gc"))==null||b.addEventListener("click",()=>c([])),(g=t.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{a.length&&(a=[],s())})}s()}function Pr(t,e){var r;const i=((r=e==null?void 0:e.state)==null?void 0:r.params)||{},o=t||i.matchMode||"vs_ai_easy";return o==="friend"?`Match vs ${i.friendName||"Ami"}`:o==="random"?"Match vs Random":o==="ranked"?"Match Classé":o==="mini_league"||o==="mini-league"?"🏆 Match de Mini League":`Match vs IA — ${o.replace("vs_ai_","").toUpperCase()}`}async function Rr(t,e,i){const{state:o,navigate:r}=e;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await v.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",o.profile.id).order("created_at",{ascending:!1});if(!n||n.length===0){Ct(t,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>r("decks"));return}const a=n.map(b=>b.id),{data:d}=await v.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),c=[...new Set((d||[]).filter(b=>{var g,x;return((g=b.card)==null?void 0:g.card_type)==="stadium"&&((x=b.card)==null?void 0:x.stadium_id)}).map(b=>b.card.stadium_id))],s={};if(c.length){const{data:b}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",c);(b||[]).forEach(g=>{s[g.id]=g}),(d||[]).forEach(g=>{var x,m;((x=g.card)==null?void 0:x.card_type)==="stadium"&&((m=g.card)!=null&&m.stadium_id)&&(g.card._stadiumDef=s[g.card.stadium_id]||null)})}let l=0;function p(){var u,I,$,S,q,O,W;const b=n[l],g=(d||[]).filter(U=>U.deck_id===b.id),x=g.filter(U=>{var L;return U.is_starter&&((L=U.card)==null?void 0:L.player)}).map(U=>Yi(U.card,U.position)),m=g.find(U=>{var L;return((L=U.card)==null?void 0:L.card_type)==="formation"}),y=b.formation||((u=m==null?void 0:m.card)==null?void 0:u.formation)||"4-4-2";let f=x.length>=11?Li(x,y):null,_=((I=b.stadium_card)==null?void 0:I.stadium_def)||null;_&&f&&(f=ui(f,_));const h=x.length>=11;ct(t),t.style.height="100%",t.style.overflow="hidden",t.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff;position:relative">
      <button id="cancel-deck-select" style="position:absolute;top:8px;right:10px;z-index:10;width:32px;height:32px;border-radius:50%;border:none;background:rgba(180,30,30,0.85);color:#fff;font-size:18px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Pr(i,e)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${l===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===0?"0.1":"0.3"});color:${l===0?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${l===0?"default":"pointer"};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${b.name}</div>
            <div style="font-size:11px;opacity:.6">${y} · ${x.length}/11${b.is_active?" · ⭐":""}</div>
          </div>
          <button id="next-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${l===n.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===n.length-1?"0.1":"0.3"});color:${l===n.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${l===n.length-1?"default":"pointer"};flex-shrink:0">▶</button>
        </div>
        ${_?`
        <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(30,100,220,0.35),rgba(10,60,180,0.15));border-top:1px solid rgba(30,120,255,0.45)">
          <div style="position:relative;width:30px;height:30px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
            <div style="position:absolute;inset:-7px;border-radius:50%;background:radial-gradient(ellipse,rgba(30,144,255,0.6) 0%,transparent 68%);pointer-events:none"></div>
            <svg width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="position:relative;z-index:1;display:block">
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
          </div>
          <span style="font-size:12px;font-weight:700">${_.name}</span>
          <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${(($=_.club)==null?void 0:$.encoded_name)||_.country_code||""}</span>
        </div>`:""}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${f?'<div class="deck-preview-wrap" style="overflow:visible;width:100%;min-height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${x.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${n.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${n.map((U,L)=>`<div style="width:6px;height:6px;border-radius:50%;background:${L===l?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${h?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${h?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${h?"pointer":"default"}">
          ${h?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function U(){const L=t.querySelector(".deck-preview-wrap"),w=t.querySelector("#deck-swipe-zone");if(!L||!w||!f)return;const F=w.clientWidth>=900,R=Math.max(200,w.clientHeight-(F?60:40)),ce=Math.max(200,w.clientWidth-16),M=F?Math.min(117,Math.max(52,Math.round(ce*.22))):Math.max(44,Math.round(ce*.168));if(R<220||ce<220){requestAnimationFrame(U);return}const H=F?null:Math.round(M*.55);L.innerHTML=Kt(f,y,null,[],ce,R,[],H),L.style.cssText=`width:${ce}px;height:${R}px;overflow:hidden;margin:${F?0:60}px auto 0`;const ue=L.querySelector("svg");ue&&(ue.style.cssText="display:block;width:100%;height:100%",ue.setAttribute("preserveAspectRatio",F?"xMidYMid meet":"none"))})),(S=document.getElementById("prev-deck"))==null||S.addEventListener("click",()=>{l>0&&(l--,p())}),(q=document.getElementById("next-deck"))==null||q.addEventListener("click",()=>{l<n.length-1&&(l++,p())}),(O=document.getElementById("validate-deck"))==null||O.addEventListener("click",()=>{if(!h)return;const U=e.state.params||{};e.navigate("match",{...U,matchMode:U.matchMode||i,deckId:b.id})}),(W=document.getElementById("cancel-deck-select"))==null||W.addEventListener("click",()=>{Ye(t),r("home")});const E=document.getElementById("deck-swipe-zone");if(E){let U=0,L=0;E.addEventListener("touchstart",w=>{U=w.touches[0].clientX,L=w.touches[0].clientY},{passive:!0}),E.addEventListener("touchend",w=>{const F=w.changedTouches[0].clientX-U,R=w.changedTouches[0].clientY-L;Math.abs(F)<40||Math.abs(F)<Math.abs(R)||(F<0&&l<n.length-1?(l++,p()):F>0&&l>0&&(l--,p()))},{passive:!0})}}p()}function Et(t,e=44,i=58,o=null){return Ae(t,{width:e,showStad:!!o,stadDef:o,used:t==null?void 0:t.used})}function et(t,e,i,o,r){if(!(t!=null&&t.length))return"";const n=t.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((d,c)=>{const s=d._line||d.job||"MIL";let l=d.boost||0;if(d.stadiumBonus&&(o==="attack"&&(s==="ATT"||s==="MIL")||o==="defense"&&(s==="GK"||s==="DEF"||s==="MIL")?l+=10:o||(l+=10)),a+=Ae({...d,_evolution_bonus:0,evolution_bonus:0},{width:40,role:s,extraNote:l}),c<n.length-1){const p=n[c+1],b=un(d,p,r)?Ft(d,p):null;a+=`<div style="width:7px;height:3px;background:${!b||b==="#ff3333"||b==="#cc2222"?"rgba(255,255,255,0.12)":b};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${e};color:${e==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}const xn=(()=>{if(typeof navigator>"u")return!1;const t=navigator.userAgent||"",e=/iP(hone|ad|od)/.test(t)||/Macintosh/.test(t)&&(navigator.maxTouchPoints||0)>1,i=/^((?!chrome|android|crios|fxios|edg).)*safari/i.test(t);return e||i})();function Do(t){const e=t.parentElement;if(!e)return;const i=Number(t.dataset.terrainW)||0,o=e.clientWidth;!i||!o||(t.style.transform=`scale(${(o/i).toFixed(5)})`)}let xi=null;function Nr(){if(typeof document>"u")return;const t=document.querySelectorAll("[data-terrain-scale]");t.length&&(!xi&&typeof ResizeObserver<"u"&&(xi=new ResizeObserver(e=>{e.forEach(i=>{i.target.querySelectorAll("[data-terrain-scale]").forEach(Do)})})),t.forEach(e=>{Do(e);const i=e.parentElement;xi&&i&&!i._terrainObserved&&(i._terrainObserved=!0,xi.observe(i))}))}if(xn&&typeof window<"u"&&typeof MutationObserver<"u"){let t=null;const e=()=>{t||(t=requestAnimationFrame(()=>{t=null,Nr()}))},i=()=>{new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0}),e()};document.body?i():document.addEventListener("DOMContentLoaded",i),window.addEventListener("resize",e),window.addEventListener("orientationchange",e)}function Ci(t,e,i,o,r=310,n=310,a=[],d=null){const c=ut[e]||{},s=zi(e)||Ai[e]||[],l={},p=["ATT","MIL","DEF","GK"];for(const $ of p)(t[$]||[]).forEach((q,O)=>{l[`${$}${O+1}`]=q});function b($){const S=c[$];return S?{x:S.x*r,y:S.y*n}:null}let g="";for(const[$,S]of s){const q=b($),O=b(S);if(!q||!O)continue;const W=l[$],U=l[S],L=Ft(W,U);L==="#00ff88"||L==="#FFD700"?(g+=`<line x1="${q.x.toFixed(1)}" y1="${q.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}"
        stroke="${L}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,g+=`<line x1="${q.x.toFixed(1)}" y1="${q.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}"
        stroke="${L}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):g+=`<line x1="${q.x.toFixed(1)}" y1="${q.y.toFixed(1)}" x2="${O.x.toFixed(1)}" y2="${O.y.toFixed(1)}"
        stroke="${L}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}let x=g;const m=typeof window<"u"&&window.innerWidth>=900?Math.min(Math.max(81,Math.round(r*.225)),117):Math.max(44,Math.round(r*.168)),y=Math.round(m*657/507),f=d!==null?d:Math.round(Math.max(m*.7,80)),_=r+f*2,h=n+f*2;let E="",u="";for(const[$,S]of Object.entries(l)){const q=b($);if(!q||!S)continue;const O=$.replace(/[0-9]/g,""),W=a.includes(S.cardId),U=i==="attack"&&(["MIL","ATT"].includes(O)||W)&&!S.used||i==="defense"&&["GK","DEF","MIL"].includes(O)&&!S.used,L=o.includes(S.cardId);let w=S.boost||0,F=!1;S.stadiumBonus&&(i==="attack"&&(O==="ATT"||O==="MIL")||i==="defense"&&(O==="GK"||O==="DEF"||O==="MIL")?(w+=10,F=!0):i||(w+=10,F=!0));const R=Math.round(q.x-m/2),se=Math.round(q.y-y/2);if(S.used){const me=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${R}" y="${se}" width="${m}" height="${y}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${S.cardId}" data-role="${O}" style="cursor:pointer"/>`;x+=me,E+=me;continue}const ce=Ae({...S,_evolution_bonus:0,stadiumBonus:!1},{width:m,showStad:!1,stadDef:null,role:O,extraNote:w,_cardOffset:30,_forceStadColor:F}),M=L?`position:absolute;top:30px;left:0;width:${m}px;height:${y}px;outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;pointer-events:none;`:"";if(x+=`<foreignObject x="${R-2}" y="${se-30}" width="${m+8}" height="${y+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">
        ${ce}
        ${L?`<div style="${M}"></div>`:""}
      </div>
    </foreignObject>`,u+=`<div style="position:absolute;left:${R-2+f}px;top:${se-30+f}px;width:${m+8}px;height:${y+60}px">
      <div style="position:relative">
        ${ce}
        ${L?`<div style="${M}"></div>`:""}
      </div>
    </div>`,U){const H=`<rect x="${R}" y="${se}" width="${m}" height="${y}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${L?"selected":""}" data-card-id="${S.cardId}" data-role="${O}" style="cursor:pointer"/>`;x+=H,E+=H}}const I=`${-f} ${-f} ${_} ${h}`;return xn?`<div style="position:relative;width:100%">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${I}" width="100%" style="display:block;width:100%;margin:0 auto">
        ${g}${E}
      </svg>
      <div data-terrain-scale data-terrain-w="${_}" style="position:absolute;top:0;left:0;width:${_}px;height:${h}px;transform-origin:0 0;pointer-events:none">
        ${u}
      </div>
    </div>`:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${I}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${x}
  </svg>`}function Kt(t,e,i,o,r=300,n=300,a=[],d=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ci(t,e,i,o,r,n,a,d)}
  </div>`}async function ji(t,e,i,o){var I;const{state:r,navigate:n,toast:a}=e;ct(t);const d=r.params||{};if(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!d.deckId)return Rr(t,e,i);const c=d.deckId;let s,l,p,b;try{const $=await Promise.all([v.from("decks").select("formation,name,stadium_card_id").eq("id",c).single(),v.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);s=$[0].data,p=$[0].error,l=$[1].data,b=$[1].error}catch($){console.error("[Match] Exception chargement deck:",$),Ct(t,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>n("home"));return}if(p||b){console.error("[Match] Erreur Supabase:",p||b),Ct(t,"⚠️","Erreur lors du chargement du deck.","Retour",()=>n("home"));return}const g=(l||[]).filter($=>{var S;return $.is_starter&&((S=$.card)==null?void 0:S.player)}).map($=>Yi($.card,$.position)),x=(l||[]).filter($=>{var S;return!$.is_starter&&((S=$.card)==null?void 0:S.player)}).map($=>Yi($.card,$.position));if(g.length<11){Ct(t,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>n("decks"));return}const m=(l||[]).find($=>{var S;return((S=$.card)==null?void 0:S.card_type)==="formation"}),y=(s==null?void 0:s.formation)||((I=m==null?void 0:m.card)==null?void 0:I.formation)||"4-4-2",{data:f,error:_}=await v.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",r.profile.id).eq("card_type","game_changer"),{data:h}=await v.from("gc_definitions").select("*").eq("is_active",!0),E=(f||[]).map($=>({...$,_gcDef:(h==null?void 0:h.find(S=>S.name===$.gc_type||S.id===$.gc_definition_id))||null}));let u=null;if(s!=null&&s.stadium_card_id){const{data:$}=await v.from("cards").select("stadium_id").eq("id",s.stadium_card_id).single();if($!=null&&$.stadium_id){const{data:S}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",$.stadium_id).single();u=S||null}}o({deckId:c,formation:y,starters:g,subsRaw:x,gcCardsEnriched:E,gcDefs:h||[],stadiumDef:u})}function jt(){return Math.min(window.innerWidth-40,860)}function Ht(){return Math.round(jt()*1.1)}function yn(t){var r,n;if(!t)return null;const e=t._line||t.job||"MIL",i=e==="GK"?t.note_g||0:e==="DEF"?t.note_d||0:e==="MIL"?t.note_m||0:t.note_a||0,o=t.stadiumBonus?10:0;return{name:t.name,firstname:t.firstname||"",note:i+(t.boost||0)+o,note_g:t.note_g||0,note_d:t.note_d||0,note_m:t.note_m||0,note_a:t.note_a||0,_evolution_bonus:0,stadiumBonus:t.stadiumBonus||!1,boost:t.boost||0,job:t.job,job2:t.job2||null,_line:t._line||t.job,_col:t._col,country_code:t.country_code,club_id:t.club_id,rarity:t.rarity,clubName:t.clubName||((r=t.clubs)==null?void 0:r.encoded_name)||null,clubLogo:t.clubLogo||((n=t.clubs)==null?void 0:n.logo_url)||null,face:t.face||null,portrait:Bt(t)}}function Gr(t,e,i,o="Adversaire"){Jo("/sounds/match-opening.mp3",.3);const r=jt(),n=Ht();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${o}</div>
      
      <div style="width:100%;max-width:${r}px;margin:0 auto">
        ${Ci(t,e,null,[],r,n)}
      </div>
    </div>`}function hn(t){var n,a,d;if(!t)return"";const e=c=>c?Ae({...c,_evolution_bonus:0},{width:52,role:c._line||c.job,showStad:!!c.stadiumBonus,extraNote:c.boost||0}):"",o={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[t.type]||"📋";return`
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
    </div>`}function tt(t,e,i,o,r){oo("/sounds/goal.mp3",.7);const n=document.getElementById("goal-anim-overlay");n&&n.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const d=(t||[]).slice(0,3).map(c=>Ae({...c,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:c._line||c.job,showStad:!!c.stadiumBonus})).join("");if(a.innerHTML=`
    <div style="animation:goalPop 0.4s ease-out;text-align:center">
      <div style="font-size:clamp(48px,10vw,80px);margin-bottom:8px">⚽</div>
      <div style="font-size:clamp(28px,6vw,48px);font-weight:900;color:#22c55e;letter-spacing:2px;text-shadow:0 0 20px #22c55e">BUT !</div>
      <div style="display:flex;gap:8px;justify-content:center;margin:16px 0">${d}</div>
      <div style="font-size:clamp(32px,7vw,56px);font-weight:900;color:#fff;margin-top:8px">
        ${o?`<span style="color:#22c55e">${e}</span>`:e}
        <span style="color:rgba(255,255,255,0.4);margin:0 12px">—</span>
        ${o?i:`<span style="color:#22c55e">${i}</span>`}
      </div>
    </div>`,document.body.appendChild(a),!document.getElementById("goal-anim-style")){const c=document.createElement("style");c.id="goal-anim-style",c.textContent=`
      @keyframes goalPop {
        from { transform: scale(0.5); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }`,document.head.appendChild(c)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),r==null||r()},400)},1800)}function Or(t,e,i){const o=document.getElementById("sub-anim-overlay");o&&o.remove();const r=document.createElement("div");r.id="sub-anim-overlay",r.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const n=Math.min(120,Math.round(window.innerWidth/4)),a=t?Ae({...t,_evolution_bonus:0},{width:n,role:t._line||t.job}):"",d=e?Ae({...e,_evolution_bonus:0},{width:n,role:e._line||e.job}):"";r.innerHTML=`
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
    </div>`,document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.4s",setTimeout(()=>{r.remove(),i==null||i()},400)},1600)}function It(t,e="rgba(0,0,0,0.85)",i=2200){const o=document.getElementById("game-toast");o&&o.remove();const r=document.createElement("div");if(r.id="game-toast",r.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${e};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,r.textContent=t,!document.getElementById("game-toast-style")){const n=document.createElement("style");n.id="game-toast-style",n.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(n)}document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.3s",setTimeout(()=>r.remove(),300)},i)}function vn(t,e){const i=Re(t,"MIL"),o=t.stadiumBonus||e&&(e.club_id&&String(t.club_id)===String(e.club_id)||e.country_code&&t.country_code===e.country_code)?10:0;return i+o}function wt(t,e){return t.reduce((i,o)=>i+vn(o,e),0)}function _t(t){let e=0;for(let i=0;i<t.length-1;i++){const o=Ft(t[i],t[i+1]);o==="#00ff88"?e+=10:o==="#FFD700"&&(e+=5)}return e}function Si(t,e,i,o,r){return`<div id="duel-row-${o}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${e}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${t.map((n,a)=>{const d=a<t.length-1?Ft(n,t[a+1]):null,c=!d||d==="#ff3333"||d==="#cc2222",s=d==="#00ff88"?"+10":d==="#FFD700"?"+5":"";return vn(n,r),n.stadiumBonus||r&&(r.club_id&&String(n.club_id)===String(r.club_id)||r.country_code&&(n.country_code,r.country_code)),`
          <div class="duel-card duel-card-${o}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ae({...n,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:r,role:"MIL",extraNote:n.boost||0})}
          </div>
          ${a<t.length-1?`<div class="duel-link duel-link-${o}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${c?"rgba(255,255,255,0.12)":d};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${c?"none":`0 0 8px ${d}`}">
            ${s?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${d}">${s}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${o}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${wt(t,r)} + ${_t(t)} liens = <b style="color:#fff">${wt(t,r)+_t(t)}</b>
      </div>
    </div>`}async function Hr(t,e){const{state:i}=e,o=i.params||{},r=o.matchMode||"vs_ai_easy",n=r==="solo",a=r==="ranked_ai",d=o.soloLevel||1,c=r.replace("vs_ai_",""),s=r;let l=null;if(n){const{data:x}=await v.from("solo_levels").select("*").eq("level_number",d).maybeSingle();l=x||{level_number:d,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500}}const p=o.rankedData||null,b=o.presetSetup||null;async function g({deckId:x,formation:m,starters:y,subsRaw:f,gcCardsEnriched:_,gcDefs:h,stadiumDef:E}){try{let u=Li(y,m);E&&(u=ui(u,E),Ei(f,E));let I=null;if(a){const O=Kr(u),{jaune:W,vert:U}=Vr(u,m),L=.9+Math.random()*.2;I={target_note_avg:Math.max(1,Math.round(O*L/16)),nb_liens_jaune:W,nb_liens_vert:U,nb_joueurs_stade:E?3:0}}const $=n?await Po(m,l):a?await Po(m,I):await Ur(m,c),S=$.lines||$,q=async O=>{try{const W=s==="vs_ai_club"||s==="solo"||s==="ranked_ai"?"club":s,{data:U,error:L}=await v.from("matches").insert({home_id:i.profile.id,away_id:null,mode:W,home_deck_id:x,status:"in_progress"}).select().single();if(L){console.error("[MatchIA] Erreur création match:",L),Ct(t,"⚠️","Impossible de créer le match ("+L.message+").","Retour",()=>e.navigate("home"));return}const w=$.stadiumDef||null;w&&S&&(ui(S,w),Ei($.subs||[],w));const F={gcDefs:h||[],matchId:U==null?void 0:U.id,mode:s,difficulty:c,formation:m,isSolo:n,soloLevel:d,soloLevelConfig:l,isRankedAI:a,rankedAIData:p,homeTeam:u,aiTeam:S,homeSubs:f,subsUsed:0,maxSubs:Math.min(f.length,3),aiSubs:$.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min(($.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:$.gcCards||[],aiUsedGc:[],aiStadiumDef:w,homeScore:0,aiScore:0,gcCards:O,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Yr(t,F,e)}catch(W){console.error("[MatchIA] Exception launchMatch:",W),Ct(t,"⚠️","Erreur au lancement du match : "+W.message,"Retour",()=>e.navigate("home"))}};if(a&&b){q(b.gcCardsEnriched||[]);return}if(!_.length){q([]);return}Mi(t,_,q)}catch(u){console.error("[MatchIA] Exception setup:",u),Ct(t,"⚠️","Erreur de préparation du match : "+u.message,"Retour",()=>e.navigate("home"))}}b?await g(b):await ji(t,e,r,g)}async function Ur(t,e){var y;const{data:i}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:wn(t),subs:[],gcCards:[],stadiumDef:null};const o=St[t]||St["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},n=new Set;function a(f,_,h){var E,u;return n.add(f.id),{cardId:"ai-"+f.id+"-"+h,id:f.id,firstname:f.firstname,name:f.surname_real,country_code:f.country_code,club_id:f.club_id,job:f.job,job2:f.job2,note_g:Number(f.note_g)||0,note_d:Number(f.note_d)||0,note_m:Number(f.note_m)||0,note_a:Number(f.note_a)||0,rarity:f.rarity,skin:f.skin,hair:f.hair,hair_length:f.hair_length,face:f.face,clubName:((E=f.clubs)==null?void 0:E.encoded_name)||null,clubLogo:((u=f.clubs)==null?void 0:u.logo_url)||null,boost:0,used:!1,_line:_}}for(const f of["GK","DEF","MIL","ATT"]){const _=i.filter($=>$.job===f&&!n.has($.id)),h=i.filter($=>$.job!==f&&!n.has($.id)),E=[..._,...h],u=[];for(let $=0;$<o[f];$++){const S=E[$];S&&u.push(a(S,f,$))}const I=lt(u.length);u.forEach(($,S)=>{$._col=I[S]}),r[f]=u}const c=i.filter(f=>!n.has(f.id)).slice(0,5).map((f,_)=>a(f,f.job,100+_)),{data:s}=await v.from("gc_definitions").select("*").eq("is_active",!0),p=[...s||[]].sort(()=>Math.random()-.5).slice(0,3).map((f,_)=>({id:"ai-gc-"+_,gc_type:f.name,name:f.name,icon:"⚡",effect_type:f.effect_type,effect_params:f.effect_params||{}})),b=Object.values(r).flat(),g={};b.forEach(f=>{f.club_id&&(g[f.club_id]=(g[f.club_id]||0)+1)});const x=(y=Object.entries(g).sort((f,_)=>_[1]-f[1])[0])==null?void 0:y[0];let m=null;if(x){const{data:f}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",x).single();f&&(m={club_id:f.id,country_code:null,name:f.encoded_name+" Stadium",club:{encoded_name:f.encoded_name,logo_url:f.logo_url}})}return{lines:r,subs:c,gcCards:p,stadiumDef:m}}function Kr(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{const r=o._line||i,n=Number(r==="GK"?o.note_g:r==="DEF"?o.note_d:r==="MIL"?o.note_m:o.note_a)||0;e+=n+(o.boost||0)});return e}function Vr(t,e){const i={};for(const a of["GK","DEF","MIL","ATT"])(t[a]||[]).forEach((d,c)=>{i[`${a}${c+1}`]=d});const o=zi(e)||Ai[e]||[];let r=0,n=0;for(const[a,d]of o){const c=i[a],s=i[d];if(!c||!s)continue;const l=Ft(c,s);l==="#00ff88"?n++:l==="#FFD700"&&r++}return{jaune:r,vert:n}}function Fo(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function yi(t,e,i){if(i<=0||!t.length)return[];const o=[...t].sort((r,n)=>Math.abs(Fo(r)-e)-Math.abs(Fo(n)-e));return o.slice(0,Math.min(i,o.length))}async function Po(t,e){var U,L;const i=Number(e==null?void 0:e.target_note_avg)||10,o=Number(e==null?void 0:e.nb_liens_jaune)||0,r=Number(e==null?void 0:e.nb_liens_vert)||0,n=Number(e==null?void 0:e.nb_joueurs_stade)||0,{data:a}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url,country_code)").eq("is_active",!0).limit(300);if(!a||a.length<16)return{lines:wn(t),subs:[],gcCards:[],stadiumDef:null};const d={};a.forEach(w=>{w.club_id&&(d[w.club_id]=(d[w.club_id]||0)+1)});const c=((U=Object.entries(d).sort((w,F)=>F[1]-w[1])[0])==null?void 0:U[0])||null,s=c?a.filter(w=>w.club_id===c):[],l=((L=s[0])==null?void 0:L.country_code)||null,p=l?a.filter(w=>w.country_code===l&&w.club_id!==c):[],b=Math.min(s.length,Math.max(2,r+1),16),g=Math.min(p.length,Math.max(0,o),16-b),x=[],m=new Set;yi(s,i,b).forEach(w=>{x.push(w),m.add(w.id)}),yi(p,i,g).forEach(w=>{x.push(w),m.add(w.id)});const y=Math.max(0,16-x.length),f=a.filter(w=>!m.has(w.id));yi(f,i,y).forEach(w=>{x.push(w),m.add(w.id)});const _=St[t]||St["4-4-2"],h={GK:[],DEF:[],MIL:[],ATT:[]},E=new Set;function u(w,F,R){var se,ce;return E.add(w.id),{cardId:"ai-"+w.id+"-"+R,id:w.id,firstname:w.firstname,name:w.surname_real,country_code:w.country_code,club_id:w.club_id,job:w.job,job2:w.job2,note_g:Number(w.note_g)||0,note_d:Number(w.note_d)||0,note_m:Number(w.note_m)||0,note_a:Number(w.note_a)||0,rarity:w.rarity,skin:w.skin,hair:w.hair,hair_length:w.hair_length,face:w.face,clubName:((se=w.clubs)==null?void 0:se.encoded_name)||null,clubLogo:((ce=w.clubs)==null?void 0:ce.logo_url)||null,boost:0,used:!1,_line:F}}for(const w of["GK","DEF","MIL","ATT"]){const F=x.filter(H=>H.job===w&&!E.has(H.id)),R=x.filter(H=>H.job!==w&&!E.has(H.id)),se=[...F,...R],ce=[];for(let H=0;H<_[w];H++){const ue=se[H];ue&&ce.push(u(ue,w,H))}const M=lt(ce.length);ce.forEach((H,ue)=>{H._col=M[ue]}),h[w]=ce}let I=x.filter(w=>!E.has(w.id));if(I.length<5){const w=a.filter(F=>!E.has(F.id)&&!I.some(R=>R.id===F.id));I=I.concat(yi(w,i,5-I.length))}const $=I.slice(0,5).map((w,F)=>u(w,w.job,100+F)),{data:S}=await v.from("gc_definitions").select("*").eq("is_active",!0),O=[...S||[]].sort(()=>Math.random()-.5).slice(0,3).map((w,F)=>({id:"ai-gc-"+F,gc_type:w.name,name:w.name,icon:"⚡",effect_type:w.effect_type,effect_params:w.effect_params||{}}));let W=null;if(n>0&&c){const{data:w}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",c).single();w&&(W={club_id:w.id,country_code:null,name:w.encoded_name+" Stadium",club:{encoded_name:w.encoded_name,logo_url:w.logo_url}})}return{lines:h,subs:$,gcCards:O,stadiumDef:W}}function wn(t){const e=St[t]||St["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let r=0;for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let c=0;c<e[n];c++){const s=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+r,id:"fake-"+r,firstname:"IA",name:o[r%o.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?s:2,note_d:n==="DEF"?s:2,note_m:n==="MIL"?s:2,note_a:n==="ATT"?s:2,rarity:"normal",boost:0,used:!1,_line:n}),r++}const d=lt(a.length);a.forEach((c,s)=>{c._col=d[s]}),i[n]=a}return i}function Yr(t,e,i){var r;Jo("/sounds/match-opening.mp3",.3);const o=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const n=t.querySelector(".opponent-preview-wrap"),a=t.querySelector("#opponent-swipe-zone");if(!n||!a)return;const d=a.clientWidth>=900,c=Math.max(200,a.clientHeight-(d?8:40)),s=Math.max(200,a.clientWidth-(d?8:16)),l=d?null:Math.round(Math.max(44,Math.round(s*.168))*.55);n.innerHTML=Kt(e.aiTeam,e.formation,null,[],s,c,[],l),n.style.cssText=`width:${s}px;height:${c}px;overflow:hidden;flex-shrink:0`;const p=n.querySelector("svg");p&&(p.style.cssText="display:block;width:100%;height:100%",p.setAttribute("preserveAspectRatio",d?"xMidYMid meet":"none"))})),setTimeout(()=>Wr(t,e,i),5e3)}const We=t=>yn(t);function Wr(t,e,i){const o=e.homeTeam.MIL||[],r=e.aiTeam.MIL||[],n=e.stadiumDef||null,a=e.aiStadiumDef||null,d=wt(o,n)+_t(o),c=wt(r,a)+_t(r),s=d>=c;t.innerHTML=`
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

    ${Si(o,e.clubName,"#D4A017","home",n)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${Si(r,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const l=()=>{const x=(m,y)=>t.querySelectorAll(m).forEach((f,_)=>{setTimeout(()=>{f.style.opacity="1",f.style.transform="translateY(0) scale(1)"},y+_*90)});x(".duel-card-home",150),x(".duel-card-ai",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((m,y)=>{setTimeout(()=>{m.style.opacity="1"},y*70)}),900),setTimeout(()=>{const m=t.querySelector("#vs-label");m&&(m.style.opacity="1",m.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(y=>y.style.opacity="1")},1250),setTimeout(()=>{p("score-home",d,800),p("score-ai",c,800)},1500)};function p(x,m,y){const f=document.getElementById(x);if(!f)return;const _=performance.now(),h=E=>{const u=Math.min(1,(E-_)/y);f.textContent=Math.round(m*(1-Math.pow(1-u,3))),u<1?requestAnimationFrame(h):f.textContent=m};requestAnimationFrame(h)}requestAnimationFrame(l),e.attacker=s?"home":"ai";const b=s?bn():null;s&&(e.boostCard={value:b}),e.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(x=>We(x)),aiPlayers:r.map(x=>We(x)),homeTotal:d,aiTotal:c,text:`Duel milieu : ${e.clubName} ${d} – ${c} IA → ${s?e.clubName+" attaque":"IA attaque"}`});const g=()=>{e.phase=e.attacker==="home"?"attack":"ai-attack",Ie(t,e,i),e.attacker==="ai"&&setTimeout(()=>mo(t,e,i),800)};setTimeout(()=>{const x=document.getElementById("score-home"),m=document.getElementById("score-ai"),y=document.getElementById(s?"duel-row-home":"duel-row-ai"),f=document.getElementById(s?"duel-row-ai":"duel-row-home"),_=s?x:m,h=s?m:x;_&&(_.style.fontSize="80px",_.style.color=s?"#FFD700":"#ff6b6b",_.style.animation="duelPulse .5s ease"+(s?", duelGlow 1.5s ease infinite .5s":"")),h&&(h.style.opacity="0.25"),setTimeout(()=>{y&&(y.style.transformOrigin="center",y.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",y.style.zIndex="5"),setTimeout(()=>{var u;const E=document.getElementById("duel-shock");if(E){const I=(u=f||y)==null?void 0:u.getBoundingClientRect(),$=t.querySelector(".match-screen").getBoundingClientRect();I&&(E.style.top=I.top-$.top+I.height/2+"px"),E.style.animation="shockwave .5s ease-out forwards"}f&&(f.style.transformOrigin="center",f.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var u;const E=document.getElementById("duel-finale");E&&(E.innerHTML=`
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
          </button>`,E.style.transition="opacity .45s ease",E.style.opacity="1",E.style.pointerEvents="auto",(u=document.getElementById("start-match-btn"))==null||u.addEventListener("click",g))},600)},700)},2800)}function Ie(t,e,i){var O,W,U,L,w,F,R,se,ce;const o=e.selected.map(M=>M.cardId),r=e.usedSubIds||[],n=e.homeSubs.filter(M=>!r.includes(M.cardId)),d=Object.values(e.homeTeam).flat().filter(M=>M.used).length>0&&n.length>0&&e.subsUsed<e.maxSubs,c=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(M=>!M.used),s=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(M=>!M.used),l=Vt(e.aiTeam),p=c.length===0&&s.length===0&&!l,b=(e.homeTeam.DEF||[]).filter(M=>!M.used),g=(e.homeTeam.GK||[]).filter(M=>!M.used);let x=[];e.phase==="attack"&&c.length===0&&(l?(x=b.map(M=>M.cardId),b.length===0&&(x=x.concat(g.map(M=>M.cardId)))):p&&(x=[...b,...g].map(M=>M.cardId))),e.log[e.log.length-1];const m=e.phase==="ai-attack"||e.phase==="ai-defense",y=e.phase==="attack",f=e.phase==="defense",_=e.phase==="finished",E=(e.homeSubs||[]).filter(M=>!(e.usedSubIds||[]).includes(M.cardId)).length>0&&e.subsUsed<e.maxSubs,u=y&&c.length===0&&x.length===0&&!E,I=e.gcCards.filter(M=>!e.usedGc.includes(M.id)),$=e.boostCard&&!e.boostUsed;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.innerHTML=`
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
      ${(()=>{if(e.phase==="defense"&&e.pendingAttack){const H=e.pendingAttack;let ue="";if(e.selected.length>0){const me=e.selected.map(le=>({...(e.homeTeam[le._role]||[]).find(Y=>Y.cardId===le.cardId)||le,_line:le._role})),be=pi(me,e.modifiers.home,e.formation);ue=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${e.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${et(me.map(le=>({...le,used:!1})),"#3a7bd5",be.total,"defense",e.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${et((H.players||[]).map(me=>({...me,used:!1})),"#ff6b6b",H.total,"attack",e.formation)}</div>
            ${ue}
          </div>`}if(e.phase==="ai-defense"&&e.pendingAttack){const H=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${et((H.players||[]).map(ue=>({...ue,used:!1})),"#00ff88",H.total,"attack",e.formation)}</div>
          </div>`}if(e.phase==="attack"&&e.selected.length>0){const H=e.selected.map(me=>{const be=(e.homeTeam[me._role]||[]).find(j=>j.cardId===me.cardId)||me,le=["GK","DEF"].includes(me._role);return{...be,_line:me._role,...le?{note_a:Math.max(1,Number(be.note_a)||0)}:{}}}),ue=ci(H,e.modifiers.home,e.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${e.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${et(H.map(me=>({...me,used:!1})),"#FFD700",ue.total,"attack",e.formation)}</div>
          </div>`}const M=e.log[e.log.length-1];return M?'<div style="padding:2px 4px">'+hn(M)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${e.log.length})
    </button>

    ${(()=>{const M=window.innerWidth>=700,H=(X,N,J)=>{var ke,Ee;const P=(e.gcDefs||[]).find(Se=>Se.name===X.gc_type),K=(P==null?void 0:P.name)||X.gc_type,ae=(P==null?void 0:P.effect)||((ke=Oe[X.gc_type])==null?void 0:ke.desc)||"",pe=P!=null&&P.image_url?`/icons/${P.image_url}`:null,xe=((Ee=Oe[X.gc_type])==null?void 0:Ee.icon)||"⚡";return`<div class="gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${nt(K,pe,xe,ae,{width:N})}
        </div>`},ue=(X,N)=>{var J;return`<div id="boost-card"
          style="box-sizing:border-box;width:${X}px;height:${N}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(N*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(N*.2)}px">⚡</div>
            <div style="font-size:${Math.round(N*.09)}px;color:#000;font-weight:900">+${(J=e.boostCard)==null?void 0:J.value}</div>
          </div>`},me=(X,N)=>N?ue(95,162):H(X,95),be=(X,N)=>N?ue(53,90):H(X,53),le=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",j=_?`<button id="btn-results" style="${le};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:m?`<div style="${le};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:u?`<button id="btn-pass" style="${le};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:y?`<button id="btn-action" style="${le};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${e.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:f?`<button id="btn-action" style="${le};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${e.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${le};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Y=y||f?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${e.selected.length}/3 sélectionné(s)</div>`:"",re=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(X=>`<div class="sub-btn-col" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${Et(X,76,100)}</div>`).join("")}
      </div>`,te=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${Kt(e.homeTeam,e.formation,e.phase,o,M?1300:jt(),M?600:Ht(),x)}
        </div>
      </div>`;return M?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${re}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${te}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${j}${Y}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${I.map(X=>me(X,!1)).join("")}
            ${$?me(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Kt(e.homeTeam,e.formation,e.phase,o,M?1300:jt(),M?600:Ht(),x)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${I.map(X=>be(X,!1)).join("")}
            ${$?be(null,!0):""}
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
          <div>${j}${Y}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${e.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...e.log].reverse().map(M=>{var H,ue,me;if(M.type==="duel"){const be=M.isGoal,le=M.homeScored?"#FFD700":be?"#ff6b6b":"rgba(255,255,255,0.3)",j=M.homeScored?"⚽ BUT !":be?"⚽ BUT IA !":(H=M.homePlayers)!=null&&H.length?"⚔️ Attaque":"🛡️ Défense",Y=(M.homeTotal??0)>=(M.aiTotal??0);return`<div style="padding:8px;border-radius:8px;background:${be?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${le};margin-bottom:4px">
                <div style="font-size:9px;color:${le};letter-spacing:1px;margin-bottom:6px;font-weight:700;text-transform:uppercase;text-align:center">${j}</div>
                <div style="display:flex;align-items:center;justify-content:center;gap:10px">
                  ${(ue=M.aiPlayers)!=null&&ue.length?`<div style="flex:1;display:flex;justify-content:flex-end;opacity:0.75">${et(M.aiPlayers,"#ff6b6b",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                  <div style="flex-shrink:0;display:flex;align-items:center;gap:6px">
                    <span style="font-size:16px;font-weight:900;color:${Y?"#e03030":"#22c55e"}">${M.aiTotal??"–"}</span>
                    <span style="font-size:9px;color:rgba(255,255,255,0.3)">VS</span>
                    <span style="font-size:16px;font-weight:900;color:${Y?"#22c55e":"#e03030"}">${M.homeTotal??"–"}</span>
                  </div>
                  ${(me=M.homePlayers)!=null&&me.length?`<div style="flex:1;display:flex;justify-content:flex-start">${et(M.homePlayers,"rgba(255,255,255,0.7)",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                </div>
              </div>`}return M.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${M.outPlayer?Et({...M.outPlayer,used:!0,_line:M.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${M.inPlayer?Et({...M.inPlayer,_line:M.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:M.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${M.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${M.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function S(){const M=t.querySelector(".match-screen");if(!M)return;const H=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);M.style.bottom="auto",M.style.height=H+"px",M.style.minHeight=H+"px",M.style.maxHeight=H+"px",M.style.overflow="hidden";const ue=t.querySelector("#mobile-action-bar"),me=t.querySelector("#mobile-play-area");ue&&me&&(me.style.paddingBottom=ue.offsetHeight+"px")}if(S(),setTimeout(S,120),setTimeout(S,400),setTimeout(S,1e3),e._vvBound||(e._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",S),window.visualViewport.addEventListener("scroll",S)),window.addEventListener("resize",S)),function(){const H=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!H)return;const ue=H.closest("#match-terrain-wrap");ue&&(ue.style.cssText="position:relative;width:100%;height:100%;padding:0"),H.removeAttribute("width"),H.removeAttribute("height"),H.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",H.setAttribute("preserveAspectRatio","xMidYMid meet")}(),e._resizeBound||(e._resizeBound=!0,window.addEventListener("resize",()=>{const M=t.querySelector(".terrain-wrapper svg");if(M){const H=M.closest("#match-terrain-wrap");H&&(H.style.cssText="position:relative;width:100%;height:100%;padding:0"),M.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ve(),e.phase==="attack"||e.phase==="defense"){let M=!1,H=30;const ue=()=>document.getElementById("match-timer"),me=()=>{const be=ue();if(!be)return;const le=String(Math.floor(H/60)).padStart(2,"0"),j=String(H%60).padStart(2,"0");be.textContent=` ${le}:${j}`,be.style.color=M?"#ff2222":"#ff9500",be.style.fontWeight="900"};me(),e._timerInt=setInterval(()=>{if(H--,H<0)if(!M)M=!0,H=15,me(),Qo("/sounds/timer-urgent.mp3",.6);else{clearInterval(e._timerInt),e._timerInt=null,Ve(),e.homeScore=0,e.aiScore=3;const be=document.createElement("div");be.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",be.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(be),setTimeout(()=>{be.remove(),kt(t,e,i)},2500)}else me()},1e3)}(O=document.getElementById("match-quit"))==null||O.addEventListener("click",()=>{Ye(t),confirm("Abandonner ? Résultat : défaite 3-0")&&(e.homeScore=0,e.aiScore=3,kt(t,e,i))}),(W=document.getElementById("view-ai"))==null||W.addEventListener("click",()=>sa(e,i)),(U=document.getElementById("toggle-history"))==null||U.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.add("open")}),(L=document.getElementById("close-history"))==null||L.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.remove("open")}),(w=document.getElementById("btn-action"))==null||w.addEventListener("click",()=>{e.selected.length!==0&&(y?Jr(t,e,i):f&&Qr(t,e,i))}),(F=document.getElementById("btn-results"))==null||F.addEventListener("click",()=>kt(t,e,i)),(R=document.getElementById("btn-pass"))==null||R.addEventListener("click",()=>{if(e.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Wi(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),kt(t,e,i);return}e.phase="ai-attack",Ie(t,e,i),setTimeout(()=>mo(t,e,i),800)}),t.querySelectorAll(".match-slot-hit").forEach(M=>{M.addEventListener("click",()=>Xr(M,e,t,i))}),t.querySelectorAll(".match-used-hit").forEach(M=>{M.addEventListener("click",()=>Ni(t,e,i,null,M.dataset.cardId))}),t.querySelectorAll(".gc-mini").forEach(M=>{y?M.addEventListener("click",()=>oa(M.dataset.gcId,M.dataset.gcType,t,e,i)):(M.style.opacity="0.35",M.style.cursor="default",M.addEventListener("click",()=>It("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(se=document.getElementById("boost-card"))==null||se.addEventListener("click",()=>aa(t,e,i)),t.querySelectorAll(".sub-btn-col").forEach(M=>{M.addEventListener("click",()=>Ni(t,e,i,M.dataset.subId))}),(ce=document.getElementById("sub-btn-main"))==null||ce.addEventListener("click",()=>Ni(t,e,i))}function Xr(t,e,i,o){const r=t.dataset.cardId,n=t.dataset.role,a=e.selected.findIndex(d=>d.cardId===r);if(a!==-1)e.selected.splice(a,1);else{if(e.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const d=(e.homeTeam[n]||[]).find(c=>c.cardId===r);if(d)e.selected.push({...d,_role:n,_line:n});else{const c=Object.keys(e.homeTeam||{}).map(s=>`${s}:${(e.homeTeam[s]||[]).length}`).join(" ");o.toast(`Sélection impossible (rôle="${n}" introuvable dans homeTeam[${c}])`,"error"),console.error("[MatchIA] toggleSelect: joueur introuvable",{cardId:r,role:n,homeTeam:e.homeTeam});return}}Ie(i,e,o)}function fo(t,e,i){t.matchId&&v.from("matches").update({last_player_id:i}).eq("id",t.matchId).then(()=>{})}function Jr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ve(),fo(e,i,i.state.profile.id);const o=e.selected.map(n=>{const a=(e.homeTeam[n._role]||[]).find(c=>c.cardId===n.cardId)||n,d=["GK","DEF"].includes(n._role);return{...a,_line:n._role,...d?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),r=ci(o,e.modifiers.home,e.formation);e.pendingAttack={...r,players:[...o],side:"home"},e.selected.forEach(n=>{const a=(e.homeTeam[n._role]||[]).find(d=>d.cardId===n.cardId);a&&(a.used=!0)}),e.log.push({text:`⚔️ Vous attaquez : ${r.total} (base ${r.base}${r.links?` +${r.links} liens`:""}) — ${e.selected.map(n=>n.name).join(", ")}`,type:"info"}),e.selected=[],e.modifiers.home={},e.phase="ai-defense",Ie(t,e,i),setTimeout(()=>ia(t,e,i),1200)}function Qr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ve(),fo(e,i,i.state.profile.id);const o=e.stadiumDef||null,r=e.selected.map(c=>{const s=(e.homeTeam[c._role]||[]).find(p=>p.cardId===c.cardId)||c,l=s.stadiumBonus||o&&(o.club_id&&String(s.club_id)===String(o.club_id)||o.country_code&&s.country_code===o.country_code)||!1;return{...s,_line:c._role,stadiumBonus:l}}),n=pi(r,e.modifiers.home,e.formation);e.selected.forEach(c=>{const s=(e.homeTeam[c._role]||[]).find(l=>l.cardId===c.cardId);s&&(s.used=!0)});const a=uo(e.pendingAttack.total,n.total,e.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(e.pendingAttack.players||[]).map(c=>We(c)),homePlayers:e.selected.map(c=>{const s=(e.homeTeam[c._role]||[]).find(l=>l.cardId===c.cardId)||c;return We(s)}),homeTotal:n.total,aiTotal:e.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)d.text="🛡️ Bouclier ! But annulé.",e.log.push(d);else if(a.goal){e.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${e.pendingAttack.total} > ${n.total})`,e.log.push(d),e.selected=[],e.modifiers.home={},e.pendingAttack=null,Ie(t,e,i),tt(d.aiPlayers,e.homeScore,e.aiScore,!1,()=>{qt(t,e,i,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${n.total} ≥ ${e.pendingAttack.total})`,e.log.push(d);e.selected=[],e.modifiers.home={},e.pendingAttack=null,qt(t,e,i,"home-attack")}function Zr(t){if(t.aiSubsUsed>=t.aiMaxSubs)return;const e=Object.values(t.aiTeam).flat().filter(c=>c.used);if(!e.length)return;const i=(t.aiSubs||[]).filter(c=>!t.aiUsedSubIds.includes(c.cardId));if(!i.length)return;const o=e[Math.floor(Math.random()*e.length)],r=i.find(c=>c.job===o.job)||i[0],n={...r,used:!1,_line:o._line,_col:o._col},a=t.aiTeam[o._line],d=a.findIndex(c=>c.cardId===o.cardId);d!==-1&&(a[d]=n),t.aiUsedSubIds.push(r.cardId),t.aiSubsUsed++,t.log.push({text:`🔄 IA : ${r.firstname} ${r.name} remplace ${o.firstname} ${o.name}`,type:"info"})}function ea(t,e){const i=t.effect_params||{},o=i.value||1,r=i.count||1,n=i.roles||[],a=i.target||"home";switch(t.effect_type){case"BOOST_STAT":{const c=Object.values(e.aiTeam).flat().filter(s=>!s.used&&(!n.length||n.includes(s._line))).sort(()=>Math.random()-.5).slice(0,r);c.forEach(s=>{s.boost=(s.boost||0)+o}),c.length&&e.log.push({text:`⚡ IA : +${o} sur ${c.length} joueur(s)`,type:"gc"});break}case"DEBUFF_STAT":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(l=>!l.used&&(!n.length||n.includes(l._line))).sort(()=>Math.random()-.5).slice(0,r);s.forEach(l=>{l.boost=(l.boost||0)-o}),s.length&&e.log.push({text:`🎯 IA : -${o} sur ${s.length} joueur(s)${a!=="ai"?" (vous)":""}`,type:"gc"});break}case"GRAY_PLAYER":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(l=>!l.used&&(!n.length||n.includes(l._line))).sort(()=>Math.random()-.5).slice(0,r);s.forEach(l=>{l.used=!0}),s.length&&e.log.push({text:`❌ IA : ${s.length} joueur(s)${a!=="ai"?" (vous)":""} exclu(s)`,type:"gc"});break}case"REVIVE_PLAYER":{const c=Object.values(e.aiTeam).flat().filter(s=>s.used).sort(()=>Math.random()-.5).slice(0,r);c.forEach(s=>{s.used=!1}),c.length&&e.log.push({text:`💫 IA : ${c.length} joueur(s) ressuscité(s)`,type:"gc"});break}case"REMOVE_GOAL":e.homeScore>0&&(e.homeScore--,e.log.push({text:"🚫 IA : votre dernier but est annulé !",type:"gc"}));break;case"ADD_GOAL_DRAW":e.homeScore===e.aiScore&&(e.aiScore++,e.log.push({text:"🎯 IA : but bonus (match nul) !",type:"gc"}));break;case"ADD_SUB":e.aiMaxSubs=(e.aiMaxSubs||3)+o,e.log.push({text:`🔄 IA : +${o} remplacement(s)`,type:"gc"});break}}function ta(t){var o;if(!((o=t.aiGcCards)!=null&&o.length))return;const e=t.aiGcCards.filter(r=>!t.aiUsedGc.includes(r.id));if(!e.length||Math.random()>.5)return;const i=e[Math.floor(Math.random()*e.length)];t.aiUsedGc.push(i.id),i.effect_type?ea(i,t):t.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function mo(t,e,i){fo(e,i,null),Zr(e),ta(e);let o=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(l=>!l.used),r=!1;if(!o.length){const l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(b=>!b.used),p=Vt(e.homeTeam);if(p||l.length===0){const b=(e.aiTeam.DEF||[]).filter(x=>!x.used),g=(e.aiTeam.GK||[]).filter(x=>!x.used);o=p?b.length?b:g:[...b,...g],r=!0}}const n=mn(o,"attack",e.difficulty);if(!n.length){Xi(t,e,i);return}r&&n.forEach(l=>{l._line=l._line||l.job,l.note_a=Math.max(1,Number(l.note_a)||0)});const a=ci(n,e.modifiers.ai,e.formation);e.pendingAttack={...a,players:n,side:"ai"},n.forEach(l=>{l.used=!0}),e.log.push({text:`🤖 IA attaque : ${a.total} (${n.map(l=>l.name).join(", ")})`,type:"info"}),e.modifiers.ai={};const d=[...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(l=>!l.used),s=(e.homeSubs||[]).filter(l=>!(e.usedSubIds||[]).includes(l.cardId)).length>0&&e.subsUsed<e.maxSubs;if(d.length===0&&!s){if(n.length===1&&(n[0]._line==="GK"||n[0].job==="GK")&&Vt(e.homeTeam)&&e.homeScore===e.aiScore){e.aiScore++,Ti(t,e,i,"ai",n[0]);return}e.aiScore++;const p={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:n.map(b=>We(b)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};e.log.push(p),e.pendingAttack=null,Ie(t,e,i),tt(p.aiPlayers,e.homeScore,e.aiScore,!1,()=>{qt(t,e,i,"home-attack")});return}e.phase="defense",Ie(t,e,i)}function ia(t,e,i){var s,l;const o=[...e.aiTeam.GK||[],...e.aiTeam.DEF||[],...e.aiTeam.MIL||[]],r=mn(o,"defense",e.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(p=>(e.aiTeam[p]||[]).filter(b=>!b.used)).length){const p=((s=e.pendingAttack)==null?void 0:s.players)||[];if(p.length===1&&(p[0]._line==="GK"||p[0].job==="GK")&&e.homeScore===e.aiScore){e.homeScore++,Ti(t,e,i,"home",p[0]);return}e.homeScore++;const g={type:"duel",isGoal:!0,homeScored:!0,homePlayers:p.map(x=>We(x)),homeTotal:((l=e.pendingAttack)==null?void 0:l.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};e.log.push(g),e.modifiers.ai={},e.pendingAttack=null,Ie(t,e,i),tt(g.homePlayers,e.homeScore,e.aiScore,!0,()=>{qt(t,e,i,"ai-attack")});return}const a=r.length>0?pi(r,e.modifiers.ai,e.formation).total:0;r.forEach(p=>{p.used=!0});const d=uo(e.pendingAttack.total,a,e.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(e.pendingAttack.players||[]).map(p=>We(p)),aiPlayers:r.map(p=>We(p)),homeTotal:e.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(d.shielded)c.text="🛡️ Bouclier IA !",e.log.push(c);else if(d.goal){e.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${e.pendingAttack.total} > ${a})`,e.log.push(c),e.modifiers.ai={},e.pendingAttack=null,Ie(t,e,i),tt(c.homePlayers,e.homeScore,e.aiScore,!0,()=>{qt(t,e,i,"ai-attack")});return}else c.text=`🧤 IA défend (${a} ≥ ${e.pendingAttack.total})`,e.log.push(c);e.modifiers.ai={},e.pendingAttack=null,qt(t,e,i,"ai-attack")}function qt(t,e,i,o){if(e.round++,!_n(t,e,i)){if(go(e)){kt(t,e,i);return}if(o==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(a=>!a.used))){Xi(t,e,i);return}e.phase="attack",Ie(t,e,i)}else{if(!["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(a=>!a.used))){Xi(t,e,i);return}e.phase="ai-attack",Ie(t,e,i),setTimeout(()=>mo(t,e,i),800)}}}function Vt(t){return!["GK","DEF","MIL","ATT"].some(e=>(t[e]||[]).some(i=>!i.used))}function Ro(t){const e=(t.GK||[]).some(o=>!o.used),i=["DEF","MIL","ATT"].some(o=>(t[o]||[]).some(r=>!r.used));return e&&!i}function _n(t,e,i){if(e.homeScore!==e.aiScore)return!1;if(Ro(e.homeTeam)&&Vt(e.aiTeam)){const o=(e.homeTeam.GK||[]).find(r=>!r.used);return o?(o.used=!0,e.homeScore++,Ti(t,e,i,"home",o),!0):!1}if(Ro(e.aiTeam)&&Vt(e.homeTeam)){const o=(e.aiTeam.GK||[]).find(r=>!r.used);return o?(o.used=!0,e.aiScore++,Ti(t,e,i,"ai",o),!0):!1}return!1}function Ti(t,e,i,o,r){e.log.push({type:"duel",isGoal:!0,homeScored:o==="home",homePlayers:o==="home"?[We(r)]:[],aiPlayers:o==="ai"?[We(r)]:[],text:`⚽ DERNIER CORNER — Le gardien ${o==="home"?"":"adverse "}marque !`});const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(n);const a=(d,c)=>new Promise(s=>{n.innerHTML=`<div style="font-size:32px;font-weight:900;color:${c};letter-spacing:2px;animation:lcFade 1.4s ease both">${d}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(s,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),n.remove(),e.pendingAttack=null,Ie(t,e,i),tt([We(r)],e.homeScore,e.aiScore,o==="home",()=>{if(go(e)){kt(t,e,i);return}qt(t,e,i,o==="home"?"ai-attack":"home-attack")})))()}function go(t){const e=["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(r=>!r.used)),i=["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(r=>!r.used));return!e&&!i}function Wi(t,e){return!(["MIL","ATT"].some(r=>(t[r]||[]).some(n=>!n.used))||Vt(e)||!["MIL","ATT"].some(r=>(e[r]||[]).some(n=>!n.used)))}function Xi(t,e,i){if(!_n(t,e,i)){if(go(e)){kt(t,e,i);return}if(Wi(e.homeTeam,e.aiTeam)&&Wi(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),kt(t,e,i);return}e.phase="attack",Ie(t,e,i)}}function Ni(t,e,i,o=null,r=null){var g,x;if(e.phase!=="attack"){It("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(e.usedSubIds||(e.usedSubIds=[]),e.subsUsed>=e.maxSubs){It(`Maximum ${e.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const n=Object.entries(e.homeTeam).flatMap(([m,y])=>(y||[]).filter(f=>f.used).map(f=>({...f,_line:f._line||m}))),a=e.homeSubs.filter(m=>!e.usedSubIds.includes(m.cardId));if(!n.length){It("Aucun joueur utilisé à remplacer");return}if(!a.length){It("Aucun remplaçant disponible");return}let d=Math.max(0,n.findIndex(m=>m.cardId===r));const c=((g=n[d])==null?void 0:g._line)||((x=n[d])==null?void 0:x.job);let s=o?Math.max(0,a.findIndex(m=>m.cardId===o)):Math.max(0,a.findIndex(m=>m.job===c)),l=!1;const p=document.createElement("div");p.id="sub-overlay",p.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function b(){var u,I,$,S,q,O;const m=n[d],y=a[s],f=Math.min(130,Math.round((window.innerWidth-90)/2)),_=Math.round(f*1.35),h=W=>`background:rgba(255,255,255,0.12);border:none;color:${W?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${W?"default":"pointer"};flex-shrink:0`;p.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${e.subsUsed}/${e.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${h(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${y?Et({...y,used:!1,boost:0},f,_):"<div>—</div>"}</div>
        <button id="in-down" style="${h(s>=a.length-1)}" ${s>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${h(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${m?Et({...m,used:!1,boost:0},f,_):"<div>—</div>"}</div>
        <button id="out-down" style="${h(d>=n.length-1)}" ${d>=n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${n.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(u=p.querySelector("#sub-close"))==null||u.addEventListener("click",()=>p.remove()),(I=p.querySelector("#out-up"))==null||I.addEventListener("click",()=>{d>0&&(d--,b())}),($=p.querySelector("#out-down"))==null||$.addEventListener("click",()=>{d<n.length-1&&(d++,b())}),(S=p.querySelector("#in-up"))==null||S.addEventListener("click",()=>{s>0&&(s--,b())}),(q=p.querySelector("#in-down"))==null||q.addEventListener("click",()=>{s<a.length-1&&(s++,b())});const E=(W,U,L,w)=>{const F=p.querySelector("#"+W);if(!F)return;let R=0;F.addEventListener("touchstart",se=>{R=se.touches[0].clientY},{passive:!0}),F.addEventListener("touchend",se=>{const ce=se.changedTouches[0].clientY-R;if(Math.abs(ce)<30)return;const M=U();ce<0&&M<w-1?(L(M+1),b()):ce>0&&M>0&&(L(M-1),b())},{passive:!0})};E("in-panel",()=>s,W=>s=W,a.length),E("out-panel",()=>d,W=>d=W,n.length),(O=p.querySelector("#sub-confirm"))==null||O.addEventListener("click",W=>{if(W.preventDefault(),W.stopPropagation(),l)return;l=!0;const U=n[d],L=a[s];if(!U||!L)return;let w=null,F=-1;for(const[se,ce]of Object.entries(e.homeTeam)){const M=(ce||[]).findIndex(H=>H.cardId===U.cardId);if(M!==-1){w=se,F=M;break}}if(F===-1||!w){It("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),p.remove();return}const R={...L,_line:w,_col:U._col||0,used:!1,boost:0};e.homeTeam[w].splice(F,1,R),e.usedSubIds||(e.usedSubIds=[]),e.usedSubIds.push(L.cardId),e.subsUsed++,e.selected=[],e.log.push({type:"sub",subSide:"home",clubName:e.clubName,outPlayer:{name:U.name,firstname:U.firstname,note:Re(U,w),portrait:Bt(U),job:U.job,country_code:U.country_code,rarity:U.rarity,clubName:U.clubName,clubLogo:U.clubLogo},inPlayer:{name:L.name,firstname:L.firstname,note:Re(L,w),portrait:Bt(L),job:L.job,country_code:L.country_code,rarity:L.rarity,clubName:L.clubName,clubLogo:L.clubLogo},text:`🔄 ${L.firstname} ${L.name} remplace ${U.firstname} ${U.name}`}),p.remove(),Or(U,L,()=>Ie(t,e,i))})}document.body.appendChild(p),b()}function oa(t,e,i,o,r){var b,g;const n=(o.gcDefs||[]).find(x=>x.name===e),a=Oe[e]||{icon:"⚡",desc:"Carte spéciale."},d=(n==null?void 0:n.name)||e,c=(n==null?void 0:n.effect)||a.desc,s=n!=null&&n.image_url?`/icons/${n.image_url}`:null,l=a.icon||"⚡",p=document.createElement("div");p.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",p.innerHTML=`
    ${nt(d,s,l,c,{width:190})}
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(p),(b=p.querySelector("#gc-back"))==null||b.addEventListener("click",()=>p.remove()),(g=p.querySelector("#gc-use"))==null||g.addEventListener("click",()=>{p.remove(),ra(t,e,i,o,r)})}function hi(t,e,i,o,r,n){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let d=[];function c(){var s,l;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${d.length}/${e}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${t.map(p=>{const b=p._line||p.job||"MIL",g=d.find(m=>m.cardId===p.cardId),x=Ae({...p,_evolution_bonus:0},{width:90,showStad:!0,role:b,extraNote:p.boost||0});return`<div class="gc-pick-item" data-cid="${p.cardId}"
          style="position:relative;border-radius:8px;${g?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${p.used?"opacity:0.3;pointer-events:none":""}">
          ${x}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${d.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${d.length}/${e})
      </button>
    </div>`,(s=a.querySelector("#gc-picker-close"))==null||s.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(p=>{p.addEventListener("click",()=>{const b=p.dataset.cid,g=t.find(m=>m.cardId===b);if(!g)return;const x=d.findIndex(m=>m.cardId===b);x>-1?d.splice(x,1):d.length<e&&d.push(g),c()})}),(l=a.querySelector("#gc-picker-confirm"))==null||l.addEventListener("click",()=>{a.remove(),n(d)})}c(),document.body.appendChild(a)}const na={BOOST_STAT:({value:t=1,count:e=1,roles:i=[]},o,r,n)=>{const a=Object.entries(o.homeTeam).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,c])=>c.filter(s=>!s.used).map(s=>({...s,_line:d})));return a.length?(hi(a,e,`Choisir ${e} joueur(s) à booster (+${t})`,r,o,d=>{d.forEach(c=>{const s=(o.homeTeam[c._line]||[]).find(l=>l.cardId===c.cardId);s&&(s.boost=(s.boost||0)+t,o.log.push({text:`⚡ +${t} sur ${s.name}`,type:"info"}))}),Ie(r,o,n)}),!0):(o.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ie(r,o,n),!0)},DEBUFF_STAT:({value:t=1,count:e=1,roles:i=[],target:o="ai"},r,n,a)=>{const d=o==="home"?r.homeTeam:r.aiTeam,c=o==="ai"?"adverse":"allié",s=Object.entries(d).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,p])=>p.filter(b=>!b.used).map(b=>({...b,_line:l})));return s.length?(hi(s,e,`Choisir ${e} joueur(s) ${c}(s) à débuffer (-${t})`,n,r,l=>{l.forEach(p=>{const g=((o==="home"?r.homeTeam:r.aiTeam)[p._line]||[]).find(x=>x.cardId===p.cardId);g&&(g.boost=(g.boost||0)-t,r.log.push({text:`🎯 -${t} sur ${g.name}${o==="ai"?" (IA)":""}`,type:"info"}))}),Ie(n,r,a)}),!0):(r.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),Ie(n,r,a),!0)},GRAY_PLAYER:({count:t=1,roles:e=[],target:i="ai"},o,r,n)=>{const a=i==="home"?o.homeTeam:o.aiTeam,d=i==="ai"?"adverse":"allié",c=Object.entries(a).filter(([s])=>!e.length||e.includes(s)).flatMap(([s,l])=>l.filter(p=>!p.used).map(p=>({...p,_line:s})));return c.length?(hi(c,t,`Choisir ${t} joueur(s) ${d}(s) à exclure`,r,o,s=>{s.forEach(l=>{const b=((i==="home"?o.homeTeam:o.aiTeam)[l._line]||[]).find(g=>g.cardId===l.cardId);b&&(b.used=!0,o.log.push({text:`❌ ${b.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ie(r,o,n)}),!0):(o.log.push({text:`❌ Aucun joueur ${d} à exclure`,type:"info"}),Ie(r,o,n),!0)},REVIVE_PLAYER:({count:t=1,roles:e=[]},i,o,r)=>{const n=Object.entries(i.homeTeam).filter(([a])=>!e.length||e.includes(a)).flatMap(([a,d])=>d.filter(c=>c.used).map(c=>({...c,_line:a})));return n.length?(hi(n,t,`Choisir ${t} joueur(s) à ressusciter`,o,i,a=>{a.forEach(d=>{const c=(i.homeTeam[d._line]||[]).find(s=>s.cardId===d.cardId);c&&(c.used=!1,i.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),Ie(o,i,r)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ie(o,i,r),!0)},REMOVE_GOAL:({},t)=>(t.aiScore>0?(t.aiScore--,t.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):t.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},t)=>(t.homeScore===t.aiScore?(t.homeScore++,t.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):t.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:t=1},e)=>(e.maxSubs=(e.maxSubs||3)+t,e.log.push({text:`🔄 +${t} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function ra(t,e,i,o,r){o.usedGc.push(t);const n=o.gcDefs||[],a=n.find(c=>c.name===e)||n.find(c=>{var s;return((s=c.name)==null?void 0:s.toLowerCase().trim())===(e==null?void 0:e.toLowerCase().trim())});let d=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const c=na[a.effect_type];c?c(a.effect_params||{},o,i,r)||(d=!0):(r.toast(`Effet "${a.effect_type}" non implémenté`,"error"),d=!0)}else{switch(e){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(o.homeTeam).flatMap(([s,l])=>(l||[]).filter(p=>p.used).map(p=>({...p,_line:s})));c.length?(c[0].used=!1,o.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(s=>!s.used);if(c.length){const s=c.sort((l,p)=>Re(p,"ATT")-Re(l,"ATT"))[0];s.used=!0,o.log.push({text:`❄️ ${s.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}d=!0}v.from("cards").delete().eq("id",t).then(()=>{}),d&&Ie(i,o,r)}function aa(t,e,i){const o=Object.values(e.homeTeam).flat().filter(r=>!r.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${e.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${o.map(r=>`
        <div class="player-boost-opt" data-card-id="${r.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Fr[r.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Re(r,r._line||r.job)}</div>
          <div style="flex:1"><b>${r.firstname} ${r.name}</b><div style="font-size:11px;color:#888">${r._line||r.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${e.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(r=>{r.addEventListener("click",()=>{const n=r.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const d=(e.homeTeam[a]||[]).find(c=>c.cardId===n);if(d){d.boost=(d.boost||0)+e.boostCard.value,e.log.push({text:`⚡ Boost +${e.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}e.boostUsed=!0,i.closeModal(),Ie(t,e,i)})})}async function kt(t,e,i){var b,g,x,m;Ot(),Ve(),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),e.phase="finished";const{state:o}=i,r=e.homeScore>e.aiScore,n=e.homeScore===e.aiScore,a=r?"victoire":n?"nul":"defaite",d=e.isSolo&&((b=e.soloLevelConfig)!=null&&b.reward_credits)&&r?Number(e.soloLevelConfig.reward_credits):_r(e.mode,a);if(e.isSolo&&r)try{const{data:y}=await v.from("user_solo_progress").select("unlocked_level").eq("user_id",o.profile.id).maybeSingle(),f=(y==null?void 0:y.unlocked_level)||1;e.soloLevel>=f&&await v.from("user_solo_progress").upsert({user_id:o.profile.id,unlocked_level:e.soloLevel+1,updated_at:new Date().toISOString()})}catch(y){console.warn("[Solo] Erreur mise à jour progression:",y.message)}const c="00000000-0000-0000-0000-000000000000";let s=null;if(e.isRankedAI)try{const{data:y}=await v.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",o.profile.id).single();if(y){const f=y.mmr??1e3,_=y.mmr_deviation??350,h=y.mmr_volatility??.06,E=r?1:n?.5:0,u=(y.placement_matches??0)<10,I=Yo(f,_,h,f,350,E,u),$=n?null:r?o.profile.id:c;await v.rpc("update_mmr_after_ranked",{p_match_id:e.matchId,p_winner_id:$,p_home_id:o.profile.id,p_away_id:c,p_home_delta:I.delta,p_away_delta:0,p_home_new_rd:I.newRd,p_away_new_rd:350,p_home_new_vol:I.newSigma,p_away_new_vol:.06}),s=I.delta}}catch(y){console.warn("[RankedAI] Erreur mise à jour MMR:",y.message)}e.matchId&&await v.from("matches").update({status:"finished",home_score:e.homeScore,away_score:e.aiScore,winner_id:r?o.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",e.matchId);const l={credits:(o.profile.credits||0)+d,matches_played:(o.profile.matches_played||0)+1};r?l.wins=(o.profile.wins||0)+1:n?l.draws=(o.profile.draws||0)+1:l.losses=(o.profile.losses||0)+1,await v.from("users").update(l).eq("id",o.profile.id),await i.refreshProfile();const p=document.createElement("div");p.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",p.innerHTML=`
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
    </div>`,document.body.appendChild(p),(g=document.getElementById("res-home"))==null||g.addEventListener("click",()=>{p.remove(),Ye(t),i.navigate("home")}),(x=document.getElementById("res-replay"))==null||x.addEventListener("click",async()=>{if(p.remove(),Ye(t),e.isRankedAI){const{data:y}=await v.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",i.state.profile.id).single();mt(),i.navigate("match",{matchMode:"ranked",rankedData:{mmr:(y==null?void 0:y.mmr)??1e3,rd:(y==null?void 0:y.mmr_deviation)??350,sigma:(y==null?void 0:y.mmr_volatility)??.06,isPlacement:((y==null?void 0:y.placement_matches)??0)<10}});return}i.navigate("match",e.isSolo?{matchMode:e.mode,soloLevel:e.soloLevel}:{matchMode:e.mode})}),(m=document.getElementById("res-next-level"))==null||m.addEventListener("click",()=>{p.remove(),Ye(t),i.navigate("match",{matchMode:"solo",soloLevel:e.soloLevel+1})})}function sa(t,e){e.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ci(t.aiTeam,t.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const da={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function la(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}async function ca(t,e){!t||!e||await Promise.all([No(t,"win"),No(e,"loss")])}async function No(t,e){const{data:i}=await v.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",t).eq("card_type","player");if(!(i!=null&&i.length))return;const o=i.filter(r=>{var n,a;return((n=r.player)==null?void 0:n.rarity)==="pepite"||((a=r.player)==null?void 0:a.rarity)==="papyte"});o.length&&await Promise.all(o.map(r=>{const n=da[r.player.rarity],a=e==="win"?n.win:n.loss,d=r.player.note_min??1,c=r.player.note_max??10,s=la(r.player),l=r.current_note??s,p=Math.min(c,Math.max(d,l+a));return v.from("cards").update({current_note:p}).eq("id",r.id)}))}const Gt=t=>yn(t);async function Dt(t,e,i,o,r={}){return kn(t,e,i,o,r.myGC||[],r.gcDefs||[],r.isRanked||!1,r.rankedData||null,r.stadiumDef||null,r.onMatchEnd||null,r.mlLeagueId||null,r.mlMatchId||null)}async function pa(t,e,i){const{data:o}=await v.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!o){e.toast("Match introuvable","error"),e.navigate("home");return}const r=o.home_id===e.state.user.id;let n=null,a=null;if(o.mode==="mini_league"){const{data:d}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();d&&(n=d.league_id,a=d.id)}return kn(t,e,i,r,[],[],o.is_ranked||!1,null,null,null,n,a)}async function kn(t,e,i,o,r=[],n=[],a=!1,d=null,c=null,s=null,l=null,p=null){const{state:b,navigate:g,toast:x}=e,m=o?"p1":"p2",y=o?"p2":"p1",f=(r||[]).map(k=>k.id),_=(r||[]).map(k=>({id:k.id,gc_type:k.gc_type,_gcDef:k._gcDef||null}));t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await v.from("matches").select("*").eq("id",i).single();if(!h){x("Match introuvable","error"),g("home");return}async function E(){var _e,$e;console.log("[PvP] buildGameState match:",{id:h.id,home_deck_id:h.home_deck_id,away_deck_id:h.away_deck_id,mode:h.mode,is_ranked:h.is_ranked});const[{data:k,error:T},{data:A,error:C},{data:z},{data:G}]=await Promise.all([v.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),v.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),v.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),v.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",T==null?void 0:T.message,"p2:",C==null?void 0:C.message,"p1D:",(_e=k==null?void 0:k.starters)==null?void 0:_e.length,"p2D:",($e=A==null?void 0:A.starters)==null?void 0:$e.length);const B=ne=>{const ze=Number(ne.evolution_bonus)||0;return{cardId:ne.card_id,position:ne.position,id:ne.id,firstname:ne.firstname,name:ne.surname_real,country_code:ne.country_code,club_id:ne.club_id,job:ne.job,job2:ne.job2,note_g:(Number(ne.note_g)||0)+(ne.job==="GK"||ne.job2==="GK"&&Number(ne.note_g)>0?ze:0),note_d:(Number(ne.note_d)||0)+(ne.job==="DEF"||ne.job2==="DEF"&&Number(ne.note_d)>0?ze:0),note_m:(Number(ne.note_m)||0)+(ne.job==="MIL"||ne.job2==="MIL"&&Number(ne.note_m)>0?ze:0),note_a:(Number(ne.note_a)||0)+(ne.job==="ATT"||ne.job2==="ATT"&&Number(ne.note_a)>0?ze:0),evolution_bonus:ze,rarity:ne.rarity,skin:ne.skin,hair:ne.hair,hair_length:ne.hair_length,face:ne.face||null,clubName:ne.club_encoded_name||null,clubLogo:ne.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},D=((k==null?void 0:k.starters)||[]).map(ne=>B(ne)),V=((A==null?void 0:A.starters)||[]).map(ne=>B(ne)),Z=(k==null?void 0:k.formation)||"4-4-2",oe=(A==null?void 0:A.formation)||"4-4-2";let ie=Li(D,Z),ee=Li(V,oe);const de=((k==null?void 0:k.subs)||[]).map(ne=>B(ne)),fe=((A==null?void 0:A.subs)||[]).map(ne=>B(ne)),we=(k==null?void 0:k.stadium_def)||(o?c:null),ge=(A==null?void 0:A.stadium_def)||(o?null:c);return we&&(ie=ui(ie,we),Ei(de,we)),ge&&(ee=ui(ee,ge),Ei(fe,ge)),{p1Team:ie,p2Team:ee,p1Subs:de,p2Subs:fe,p1Formation:Z,p2Formation:oe,p1Name:(z==null?void 0:z.club_name)||(z==null?void 0:z.pseudo)||"Joueur 1",p2Name:(G==null?void 0:G.club_name)||(G==null?void 0:G.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:o?f:[],gc_p2:o?[]:f,gcCardsFull_p1:o?_:[],gcCardsFull_p2:o?[]:_,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:n||[],lastActionAt:new Date().toISOString()}}let u=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(console.log("[PvP] init - amIHome:",o,"gameState exists:",!!u,"match.status:",h.status,"home_id:",h.home_id,"away_id:",h.away_id,"myId:",b.profile.id),!u)if(o){u=await E(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((u==null?void 0:u.p1Team)||{}));const{data:k}=await v.from("matches").select("game_state").eq("id",i).single();!(k!=null&&k.game_state)||!Object.keys(k.game_state).length?await v.from("matches").update({game_state:u,turn_user_id:h.home_id}).eq("id",i):u=k.game_state}else{t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let k=0;k<30&&!u;k++){await new Promise(A=>setTimeout(A,400));const{data:T}=await v.from("matches").select("game_state").eq("id",i).single();T!=null&&T.game_state&&Object.keys(T.game_state).length&&(u=T.game_state),k%5===0&&console.log("[PvP] away - poll",k,"game_state:",!!(T!=null&&T.game_state))}if(!u){x("Erreur de synchronisation","error"),g("home");return}u.gc_p2=f,u.gcCardsFull_p2=_,await v.from("matches").update({game_state:u}).eq("id",i)}let I=!1,$=null,S=!1;const q=new Set,O=new Set;async function W(k){var oe,ie;Ot();try{v.removeChannel(U)}catch{}const T=u[m+"Score"]||0,A=u[y+"Score"]||0;let C,z;k.winner_id?(C=k.winner_id===b.profile.id,z=!1):k.forfeit?(C=T>A,z=!1):(z=T===A,C=T>A);let G="";if(a&&o)try{const{data:ee}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.home_id).single(),{data:de}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.away_id).single();if(ee&&de){const fe=C?1:z?.5:0,we=1-fe,ge=ee.placement_matches<10,_e=de.placement_matches<10,$e=computeGlicko2(ee.mmr,ee.mmr_deviation,ee.mmr_volatility,de.mmr,de.mmr_deviation,fe===1?1:fe===0?0:.5,ge),ne=computeGlicko2(de.mmr,de.mmr_deviation,de.mmr_volatility,ee.mmr,ee.mmr_deviation,we===1?1:we===0?0:.5,_e);await v.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:z?null:C?h.home_id:h.away_id,p_home_id:h.home_id,p_away_id:h.away_id,p_home_delta:$e.delta,p_away_delta:ne.delta,p_home_new_rd:$e.newRd,p_away_new_rd:ne.newRd,p_home_new_vol:$e.newSigma,p_away_new_vol:ne.newSigma});const ze=$e.delta,Ne=$e.newMmr,je=getTier(Ne),Xe=ze>=0?"+":"",Ue=ze>=0?"#4caf50":"#ff6b6b",rt=getTier(ee.mmr);G=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${je.id!==rt.id?`<div style="font-size:20px;font-weight:900;color:${je.color}">
                    ${Ne>ee.mmr?"📈":"📉"} ${rt.emoji} ${rt.label} → ${je.emoji} ${je.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Ne>ee.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${ze>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${je.color}">${je.emoji} ${je.label}</div>`}
              ${ge?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${ee.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(ee){console.error("[Ranked] MMR update error:",ee)}(oe=document.getElementById("pvp-end-overlay"))==null||oe.remove();const B=document.createElement("div");B.id="pvp-end-overlay",B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const D=z?"🤝":C?"🏆":"😞",V=z?"MATCH NUL":C?"VICTOIRE !":"DÉFAITE",Z=z?"#fff":C?"#FFD700":"#ff6b6b";B.innerHTML=`
      <div style="font-size:64px">${D}</div>
      <div style="font-size:26px;font-weight:900;color:${Z}">${V}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${u[m+"Name"]} ${T} – ${A} ${u[y+"Name"]}</div>
      ${k.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${C?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${G}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(B),(ie=B.querySelector("#pvp-end-home"))==null||ie.addEventListener("click",()=>{B.remove(),Ye(t),l?g("mini-league",{openLeagueId:l}):g(a?"ranked":"home")})}const U=v.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},k=>{var A;const T=k.new;try{if(T.status==="finished"||T.forfeit){if(I)return;I=!0,$&&(clearInterval($),$=null),Ve(),T.game_state&&(u=T.game_state),W(T);return}if(T.game_state){const C=u;u=T.game_state;const z=u._lastGC;if(z&&z.seq&&!O.has(z.seq)&&(O.add(z.seq),z.by!==m)){le(z.type,z.by,()=>H());return}const G=C[m+"Score"]||0,B=C[y+"Score"]||0,D=u[m+"Score"]||0,V=u[y+"Score"]||0,Z=D>G,oe=V>B;if((Z||oe)&&!q.has(u.round)){q.add(u.round);const ie=[...u.log||[]].reverse().find(fe=>fe.isGoal),ee=((ie==null?void 0:ie.homePlayers)||[]).map(fe=>({name:fe.name,note:fe.note,portrait:fe.portrait,job:fe.job}));!!((A=ie==null?void 0:ie.text)!=null&&A.includes("DERNIER CORNER"))?ae().then(()=>{tt(ee,D,V,Z,()=>H())}):tt(ee,D,V,Z,()=>H());return}H()}}catch(C){console.error("[PvP] crash:",C)}}).subscribe();async function L(k){Object.assign(u,k),u.lastActionAt=new Date().toISOString();const{error:T}=await v.from("matches").update({game_state:u}).eq("id",i);T&&x("Erreur de synchronisation","error");try{H()}catch(A){console.error("[PvP] renderPvpScreen crash:",A)}}async function w(){if(I)return;I=!0,Ot(),Ve(),$&&(clearInterval($),$=null);const k=o?h.away_id:h.home_id,T=o?"p2":"p1",A=o?"p1":"p2",C={...u,[T+"Score"]:3,[A+"Score"]:0,phase:"finished"},z=C.p1Score||0,G=C.p2Score||0;try{await v.from("matches").update({game_state:C}).eq("id",i);const{data:B,error:D}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:k,p_home_score:z,p_away_score:G,p_forfeit:!0});if(D&&console.error("[PvP] finish_pvp_match (forfeit):",D),l)try{await v.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(V){console.error("[PvP] check_and_finish_mini_league (forfeit):",V)}try{const{data:V}=await v.rpc("apply_match_rewards",{p_match_id:i});V!=null&&V.success&&!(V!=null&&V.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(V){console.error("[PvP] apply_match_rewards (forfeit):",V)}}catch{}try{v.removeChannel(U)}catch{}setTimeout(()=>{Ye(t),l?g("mini-league",{openLeagueId:l}):g("home")},800)}const F={BOOST_STAT:({value:k=1,count:T=1,roles:A=[]},C,z)=>{const G=C[m+"Team"],B=Object.entries(G).filter(([D])=>!A.length||A.includes(D)).flatMap(([D,V])=>V.filter(Z=>!Z.used).map(Z=>({...Z,_line:D})));if(!B.length){C.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),z(C);return}R(B,T,`Choisir ${T} joueur(s) à booster (+${k})`,D=>{D.forEach(V=>{const Z=(G[V._line]||[]).find(oe=>oe.cardId===V.cardId);Z&&(Z.boost=(Z.boost||0)+k,C.log.push({text:`⚡ +${k} sur ${Z.name}`,type:"info"}))}),C[m+"Team"]=G,z(C)})},DEBUFF_STAT:({value:k=1,count:T=1,roles:A=[],target:C="ai"},z,G)=>{const B=C==="home"?m:y,D=z[B+"Team"],V=C==="home"?"allié":"adverse",Z=Object.entries(D).filter(([oe])=>!A.length||A.includes(oe)).flatMap(([oe,ie])=>ie.map(ee=>({...ee,_line:oe})));if(!Z.length){z.log.push({text:`🎯 Aucun joueur ${V}`,type:"info"}),G(z);return}R(Z,T,`Choisir ${T} joueur(s) ${V}(s) (-${k})`,oe=>{oe.forEach(ie=>{const ee=(D[ie._line]||[]).find(de=>de.cardId===ie.cardId);ee&&(ee.boost=(ee.boost||0)-k,z.log.push({text:`🎯 -${k} sur ${ee.name}`,type:"info"}))}),z[B+"Team"]=D,G(z)})},GRAY_PLAYER:({count:k=1,roles:T=[],target:A="ai"},C,z)=>{const G=A==="home"?m:y,B=C[G+"Team"],D=A==="home"?"allié":"adverse",V=Object.entries(B).filter(([Z])=>!T.length||T.includes(Z)).flatMap(([Z,oe])=>oe.filter(ie=>!ie.used).map(ie=>({...ie,_line:Z})));if(!V.length){C.log.push({text:`❌ Aucun joueur ${D}`,type:"info"}),z(C);return}R(V,k,`Choisir ${k} joueur(s) ${D}(s) à exclure`,Z=>{const oe="usedCardIds_"+G,ie=new Set(C[oe]||[]);Z.forEach(ee=>{const de=(B[ee._line]||[]).find(fe=>fe.cardId===ee.cardId);de&&(de.used=!0,ie.add(ee.cardId),C.log.push({text:`❌ ${de.name} exclu !`,type:"info"}))}),C[oe]=[...ie],C[G+"Team"]=B,z(C)})},REVIVE_PLAYER:({count:k=1,roles:T=[]},A,C)=>{const z=A[m+"Team"],G=Object.entries(z).filter(([B])=>!T.length||T.includes(B)).flatMap(([B,D])=>D.filter(V=>V.used).map(V=>({...V,_line:B})));if(!G.length){A.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),C(A);return}R(G,k,`Choisir ${k} joueur(s) à ressusciter`,B=>{B.forEach(D=>{const V=(z[D._line]||[]).find(Z=>Z.cardId===D.cardId);V&&(V.used=!1,A.log.push({text:`💫 ${V.name} ressuscité !`,type:"info"}))}),A[m+"Team"]=z,C(A)})},REMOVE_GOAL:({},k,T)=>{const A=y+"Score";k[A]>0?(k[A]--,k.log.push({text:"🚫 Dernier but annulé !",type:"info"})):k.log.push({text:"🚫 Aucun but à annuler",type:"info"}),T(k)},ADD_GOAL_DRAW:({},k,T)=>{k[m+"Score"]===k[y+"Score"]?(k[m+"Score"]++,k.log.push({text:"🎯 But bonus !",type:"info"})):k.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),T(k)},ADD_SUB:({value:k=1},T,A)=>{T.maxSubs=(T.maxSubs||3)+k,T.log.push({text:`🔄 +${k} remplacement(s)`,type:"info"}),A(T)},CUSTOM:({},k,T)=>T(k)};function R(k,T,A,C){const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let G=[];function B(){var V,Z;const D=k.map(oe=>{const ie=oe._line||oe.job||"MIL",ee=G.find(fe=>fe.cardId===oe.cardId),de=Ae({...oe,_evolution_bonus:0},{width:90,showStad:!0,role:ie,extraNote:oe.boost||0});return`<div class="pp-item" data-cid="${oe.cardId}"
          style="position:relative;border-radius:8px;${ee?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${oe.used?"opacity:0.3;pointer-events:none":""}">
          ${de}
        </div>`}).join("");z.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${A}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${G.length}/${T}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${D}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${G.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${G.length}/${T})
          </button>
        </div>`,(V=z.querySelector("#pp-close"))==null||V.addEventListener("click",()=>z.remove()),z.querySelectorAll(".pp-item").forEach(oe=>{oe.addEventListener("click",()=>{const ie=oe.dataset.cid,ee=k.find(fe=>fe.cardId===ie),de=G.findIndex(fe=>fe.cardId===ie);ee&&(de>-1?G.splice(de,1):G.length<T&&G.push(ee),B())})}),(Z=z.querySelector("#pp-confirm"))==null||Z.addEventListener("click",()=>{z.remove(),C(G)})}B(),document.body.appendChild(z)}async function se(k,T){const C=(u["gcCardsFull_"+m]||[]).find(D=>D.id===k),z=(C==null?void 0:C._gcDef)||(u.gcDefs||[]).find(D=>{var V;return D.name===T||((V=D.name)==null?void 0:V.toLowerCase().trim())===(T==null?void 0:T.toLowerCase().trim())}),G=[...u["usedGc_"+m]||[],k],B={type:T,by:m,seq:(u._gcAnimSeq||0)+1};O.add(B.seq),le(T,m,async()=>{if(z!=null&&z.effect_type&&z.effect_type!=="CUSTOM"){const V=F[z.effect_type];if(V){const Z={...u};V(z.effect_params||{},Z,async oe=>{oe["usedGc_"+m]=G,oe._lastGC=B,oe._gcAnimSeq=B.seq,await L(oe)});return}}const D={...u};switch(T){case"Remplacement+":D.maxSubs=(D.maxSubs||3)+1,D.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const V=y+"Score";D[V]>0&&(D[V]--,D.log.push({text:"🚫 But annulé",type:"info"}));break}}D["usedGc_"+m]=G,D._lastGC=B,D._gcAnimSeq=B.seq,await L(D)})}function ce(k,T){const A="usedCardIds_"+k,C=new Set(u[A]||[]);T.forEach(z=>C.add(z)),u[A]=[...C]}function M(){for(const k of["p1","p2"]){const T=new Set(u["usedCardIds_"+k]||[]),A=u[k+"Team"];if(A)for(const C of["GK","DEF","MIL","ATT"])(A[C]||[]).forEach(z=>{z.used=T.has(z.cardId)})}}function H(){var yo,ho,vo,wo,_o,ko;if(u.phase==="reveal")return ue();if(u.phase==="midfield")return be();if(u.phase==="finished")return He();const k=u[m+"Team"],T=u[y+"Team"];M();const A=u[m+"Score"],C=u[y+"Score"],z=u[m+"Name"],G=u[y+"Name"],B=u.phase===m+"-attack",D=u.phase===m+"-defense",V=Array.isArray(u["selected_"+m])?u["selected_"+m]:[],Z=V.map(Q=>Q.cardId),oe=window.innerWidth>=700,ie=u[m+"Subs"]||[],ee=u["usedSubIds_"+m]||[],de=ie.filter(Q=>!ee.includes(Q.cardId)),fe=u["gcCardsFull_"+m]||[],we=u["usedGc_"+m]||[],ge=fe.filter(Q=>!we.includes(Q.id)),_e=u.boostOwner===m&&!u.boostUsed,$e=[...k.MIL||[],...k.ATT||[]].filter(Q=>!Q.used),ne=[...T.MIL||[],...T.ATT||[]].filter(Q=>!Q.used),ze=!Se(T),Ne=$e.length===0&&ne.length===0&&!ze,je=(k.DEF||[]).filter(Q=>!Q.used),Xe=(k.GK||[]).filter(Q=>!Q.used);let Ue=[];B&&$e.length===0&&(ze?(Ue=je.map(Q=>Q.cardId),je.length===0&&(Ue=Ue.concat(Xe.map(Q=>Q.cardId)))):Ne&&(Ue=[...je,...Xe].map(Q=>Q.cardId)));function rt(Q,ve,qe){var Be,xt;const Te=Q._gcDef,Nt=(Te==null?void 0:Te.name)||Q.gc_type,dt=(Te==null?void 0:Te.effect)||((Be=Oe[Q.gc_type])==null?void 0:Be.desc)||"",Pe=Te!=null&&Te.image_url?`/icons/${Te.image_url}`:null,Ge=((xt=Oe[Q.gc_type])==null?void 0:xt.icon)||"⚡";return`<div class="pvp-gc-mini" data-gc-id="${Q.id}" data-gc-type="${Q.gc_type}" style="flex-shrink:0;cursor:pointer">
        ${nt(Nt,Pe,Ge,dt,{width:ve})}
      </div>`}function Xt(Q,ve){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${Q}px;height:${ve}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ve*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ve*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ve*.09)}px;color:#000;font-weight:900">+${u.boostValue}</div>
      </div>`}const Fe=(Q,ve)=>ve?Xt(95,162):rt(Q,95),Je=(Q,ve)=>ve?Xt(68,116):rt(Q,68),Ke=oe?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",gt=B?Le(m)?`<button id="pvp-action" style="${Ke};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${V.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ke};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:D?`<button id="pvp-action" style="${Ke};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${V.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${G}</div>`,at=B&&!Le(m)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':B||D?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${V.length}/3 sélectionné(s)</div>`:"",Pt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${oe?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${de.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':de.map(Q=>`<div class="pvp-sub-btn" data-sub-id="${Q.cardId}" style="cursor:pointer;flex-shrink:0">${Et(Q,oe?76:44,oe?100:58)}</div>`).join("")}
    </div>`,bt=B?"attack":D?"defense":"idle",Tt=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${Kt(k,u[m+"Formation"],bt,Z,oe?1300:jt(),oe?600:Ht(),Ue)}
      </div>
    </div>`,st=u[m+"Team"],zn=(()=>{var ve,qe,Te,Nt,dt;if(D&&((ve=u.pendingAttack)!=null&&ve.players)){const Pe=u.pendingAttack;let Ge="";if(V.length>0){const Be=V.map(Qe=>{const Jt=(st[Qe._role]||[]).find(Di=>Di.cardId===Qe.cardId)||Qe,Qt=st[Qe._role]||[],fi=Qt.findIndex(Di=>Di.cardId===Qe.cardId),Bi=lt(Qt.length),Zt=fi>=0?Bi[fi]:Jt._col??1;return{...Jt,_line:Qe._role,_col:Zt}}),xt=pi(Be,((qe=u.modifiers)==null?void 0:qe[m])||{},u[m+"Formation"]);Ge=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${V.length}/3)</div>
            <div style="display:flex;justify-content:center">${et(Be.map(Qe=>({...Qe,used:!1})),"#3a7bd5",xt.total,"defense",u[m+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${G} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${et((Pe.players||[]).map(Be=>({...Be,used:!1})),"#ff6b6b",Pe.total,"attack",u[y+"Formation"])}</div>
          ${Ge}
        </div>`}if(B&&((Te=u.pendingAttack)!=null&&Te.players)){const Pe=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${et((Pe.players||[]).map(Ge=>({...Ge,used:!1})),"#00ff88",Pe.total,"attack",u[m+"Formation"])}</div>
        </div>`}if(B&&!((Nt=u.pendingAttack)!=null&&Nt.players)&&V.length>0){const Pe=V.map(Be=>{const xt=(st[Be._role]||[]).find(Zt=>Zt.cardId===Be.cardId)||Be,Qe=["GK","DEF"].includes(Be._role),Jt=st[Be._role]||[],Qt=Jt.findIndex(Zt=>Zt.cardId===Be.cardId),fi=lt(Jt.length),Bi=Qt>=0?fi[Qt]:xt._col??1;return{...xt,_line:Be._role,_col:Bi,...Qe?{note_a:Math.max(1,Number(xt.note_a)||0)}:{}}}),Ge=ci(Pe,((dt=u.modifiers)==null?void 0:dt[m])||{},u[m+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${V.length}/3)</div>
          <div style="display:flex;justify-content:center">${et(Pe.map(Be=>({...Be,used:!1})),"#FFD700",Ge.total,"attack",u[m+"Formation"])}</div>
        </div>`}const Q=(u.log||[]).slice(-1)[0];return Q?'<div style="padding:2px 4px">'+hn(Q)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),xo=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${z}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${A} – ${C}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${G}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${zn}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(u.log||[]).length})
      </button>`;ct(t),t.style.overflow="hidden",oe?t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${xo}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Pt}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Tt}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${gt}${at}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ge.map(Q=>Fe(Q,!1)).join("")}
            ${_e?Fe(null,!0):""}
          </div>
        </div>
      </div>`:t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${xo}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Kt(k,u[m+"Formation"],bt,Z,jt(),Ht(),Ue)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ge.map(Q=>Je(Q,!1)).join("")}
            ${_e?Je(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${B&&de.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${B&&de.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${B&&de.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${B&&de.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${de.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(u["usedSubIds_"+m]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(u["usedSubIds_"+m]||[]).length}/${u.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${gt}${at}</div>
        </div>
      </div>`;function Rt(){const Q=t.querySelector(".match-screen");if(!Q)return;const ve=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);Q.style.height=ve+"px",Q.style.minHeight=ve+"px",Q.style.maxHeight=ve+"px",Q.style.overflow="hidden";const qe=t.querySelector("#mobile-action-bar"),Te=t.querySelector("#mobile-play-area");qe&&Te&&(Te.style.paddingBottom=qe.offsetHeight+"px")}if(Rt(),setTimeout(Rt,120),setTimeout(Rt,400),S||(S=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Rt),window.visualViewport.addEventListener("scroll",Rt)),window.addEventListener("resize",Rt)),function(){const ve=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!ve)return;const qe=ve.closest("#match-terrain-wrap");qe&&(qe.style.cssText="position:relative;width:100%;height:100%;padding:0"),ve.removeAttribute("width"),ve.removeAttribute("height"),ve.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ve.setAttribute("preserveAspectRatio","xMidYMid meet")}(),u._pvpResizeBound||(u._pvpResizeBound=!0,window.addEventListener("resize",()=>{const Q=t.querySelector(".terrain-wrapper svg");if(Q){const ve=Q.closest("#match-terrain-wrap");ve&&(ve.style.cssText="position:relative;width:100%;height:100%;padding:0"),Q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t.querySelectorAll(".match-slot-hit").forEach(Q=>{Q.addEventListener("click",()=>{if(!B&&!D)return;const ve=Q.dataset.cardId,qe=Q.dataset.role,Te=(k[qe]||[]).find(Ge=>Ge.cardId===ve);if(!Te||Te.used)return;const Nt=Ue.includes(ve);if(B&&!["MIL","ATT"].includes(qe)&&!Nt)return;Array.isArray(u["selected_"+m])||(u["selected_"+m]=[]);const dt=u["selected_"+m],Pe=dt.findIndex(Ge=>Ge.cardId===ve);Pe>-1?dt.splice(Pe,1):dt.length<3&&dt.push({...Te,_role:qe}),H()})}),t.querySelectorAll(".match-used-hit").forEach(Q=>{Q.addEventListener("click",()=>re(Q.dataset.cardId))}),t.querySelectorAll(".pvp-sub-btn").forEach(Q=>{Q.addEventListener("click",()=>re())}),(yo=t.querySelector("#pvp-sub-open"))==null||yo.addEventListener("click",()=>re()),t.querySelectorAll(".pvp-gc-mini").forEach(Q=>{B?Q.addEventListener("click",()=>j(Q.dataset.gcId,Q.dataset.gcType)):(Q.style.opacity="0.35",Q.style.cursor="default",Q.addEventListener("click",()=>It("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(ho=t.querySelector("#pvp-boost-card"))==null||ho.addEventListener("click",()=>Y()),(vo=t.querySelector("#pvp-action"))==null||vo.addEventListener("click",Q=>{B?Q.currentTarget.dataset.pass==="1"||!Le(m)?J():xe():D&&ke()}),(wo=t.querySelector("#pvp-quit"))==null||wo.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&w()}),(_o=t.querySelector("#pvp-view-opp"))==null||_o.addEventListener("click",()=>X()),(ko=t.querySelector("#pvp-toggle-history"))==null||ko.addEventListener("click",()=>N()),$&&(clearInterval($),$=null),Ve(),(B||D)&&!I){let Q=30,ve=!1;const qe=()=>document.getElementById("pvp-timer"),Te=()=>{qe()&&(qe().textContent=Q+"s",qe().style.color=ve?"#ff4444":"#fff")};Te(),$=setInterval(()=>{Q--,Q<0?ve?(clearInterval($),$=null,Ve(),B&&!Le(m)?J():w()):(ve=!0,Q=15,Te(),Qo("/sounds/timer-urgent.mp3",.6)):Te()},1e3)}}function ue(){ct(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${Gr(u[y+"Team"],u[y+"Formation"],null,u[y+"Name"]||"Adversaire")}
    </div>`;const k=t.querySelector("svg"),T=k==null?void 0:k.closest("#match-terrain-wrap");T&&(T.style.cssText="position:relative;width:100%;height:100%;padding:0"),k&&(k.removeAttribute("width"),k.removeAttribute("height"),k.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",k.setAttribute("preserveAspectRatio","xMidYMid meet")),m==="p1"&&setTimeout(async()=>{await L({phase:"midfield"})},5e3)}let me=!1;function be(){if(me)return;const k=u[m+"Team"].MIL||[],T=u[y+"Team"].MIL||[],A=wt(k)+_t(k),C=wt(T)+_t(T),z=A>=C;ct(t),t.innerHTML=`
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
      ${Si(k,u[m+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${Si(T,u[y+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const G=(de,fe)=>t.querySelectorAll(de).forEach((we,ge)=>{setTimeout(()=>{we.style.opacity="1",we.style.transform="translateY(0) scale(1)"},fe+ge*90)});G(".duel-card-me",150),G(".duel-card-opp",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((de,fe)=>setTimeout(()=>{de.style.opacity="1"},fe*70)),900),setTimeout(()=>{const de=t.querySelector("#pvp-vs");de&&(de.style.opacity="1",de.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(fe=>fe.style.opacity="1")},1250);function B(de,fe,we){const ge=document.getElementById(de);if(!ge)return;const _e=performance.now(),$e=ne=>{const ze=Math.min(1,(ne-_e)/we);ge.textContent=Math.round(fe*(1-Math.pow(1-ze,3))),ze<1?requestAnimationFrame($e):ge.textContent=fe};requestAnimationFrame($e)}setTimeout(()=>{B("pvp-score-me",A,800),B("pvp-score-opp",C,800)},1500);const D=u.p1Team.MIL||[],V=u.p2Team.MIL||[],Z=wt(D)+_t(D),oe=wt(V)+_t(V),ie=Z>=oe?"p1":"p2";let ee=u.boostValue;ee==null&&(ee=bn(),u.boostValue=ee,u.boostOwner=ie,u.boostUsed=!1),me=!0,setTimeout(()=>{const de=t.querySelector("#duel-row-"+(z?"me":"opp")),fe=t.querySelector("#duel-row-"+(z?"opp":"me")),we=document.getElementById("pvp-score-me"),ge=document.getElementById("pvp-score-opp"),_e=z?we:ge,$e=z?ge:we;_e&&(_e.style.fontSize="80px",_e.style.color=z?"#FFD700":"#ff6b6b",_e.style.animation="duelPulse .5s ease"+(z?",duelGlow 1.5s ease infinite .5s":"")),$e&&($e.style.opacity="0.25"),setTimeout(()=>{de&&(de.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",de.style.zIndex="5"),setTimeout(()=>{const ne=document.getElementById("duel-shock");ne&&(ne.style.animation="shockwave .5s ease-out forwards"),fe&&(fe.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var je;const ne=document.getElementById("pvp-duel-finale");if(!ne)return;const ze=u.boostOwner===m?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+ee+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ne=m==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ne.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(z?"⚽ "+u[m+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+u[y+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ze+Ne,ne.style.transition="opacity .45s ease",ne.style.opacity="1",ne.style.pointerEvents="auto",(je=document.getElementById("pvp-start-match"))==null||je.addEventListener("click",async()=>{const Xe=ie;await L({phase:Xe+"-attack",attacker:Xe,round:1,boostValue:ee,boostUsed:!1,boostOwner:Xe})})},600)},700)},2800)}function le(k,T,A){var fe,we;const C=(u.gcDefs||[]).find(ge=>{var _e;return ge.name===k||((_e=ge.name)==null?void 0:_e.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),z={purple:"#b06ce0",light_blue:"#00d4ef"}[C==null?void 0:C.color]||"#b06ce0",G=(C==null?void 0:C.name)||k,B=(C==null?void 0:C.effect)||((fe=Oe[k])==null?void 0:fe.desc)||"",D=C!=null&&C.image_url?`/icons/${C.image_url}`:null,V=((we=Oe[k])==null?void 0:we.icon)||"⚡",oe=T===m?"Vous":u[T+"Name"]||"Adversaire",ie=document.createElement("div");ie.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",ie.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{filter:drop-shadow(0 0 20px ${z}66)}50%{filter:drop-shadow(0 0 40px ${z}cc)}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${z};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${oe} joue une carte</div>
      <div style="animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        ${nt(G,D,V,B,{width:200})}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(ie);let ee=!1;const de=()=>{ee||(ee=!0,ie.remove(),setTimeout(()=>A&&A(),50))};ie.addEventListener("click",de),setTimeout(de,3e3)}function j(k,T){var oe,ie,ee,de;const C=(u["gcCardsFull_"+m]||[]).find(fe=>fe.id===k),z=C==null?void 0:C._gcDef,G=(z==null?void 0:z.name)||T,B=(z==null?void 0:z.effect)||((oe=Oe[T])==null?void 0:oe.desc)||"Carte spéciale.",D=z!=null&&z.image_url?`/icons/${z.image_url}`:null,V=((ie=Oe[T])==null?void 0:ie.icon)||"⚡",Z=document.createElement("div");Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",Z.innerHTML=`
      ${nt(G,D,V,B,{width:190})}
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(Z),(ee=Z.querySelector("#pvp-gc-back"))==null||ee.addEventListener("click",()=>Z.remove()),(de=Z.querySelector("#pvp-gc-use"))==null||de.addEventListener("click",()=>{Z.remove(),se(k,T)})}function Y(){var C;const k=u[m+"Team"],T=Object.entries(k).flatMap(([z,G])=>(G||[]).filter(B=>!B.used).map(B=>({...B,_line:z})));if(!T.length)return;const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",A.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${u.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${T.map(z=>{const G={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[z._line]||"#555",B=Re(z,z._line)+(z.boost||0);return`<div class="bp-item" data-cid="${z.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${G};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${z.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(A),(C=A.querySelector("#bp-close"))==null||C.addEventListener("click",()=>A.remove()),A.querySelectorAll(".bp-item").forEach(z=>{z.addEventListener("click",async()=>{const G=z.dataset.cid,B=T.find(V=>V.cardId===G);if(!B)return;const D=(k[B._line]||[]).find(V=>V.cardId===G);D&&(D.boost=(D.boost||0)+u.boostValue),A.remove(),await L({[m+"Team"]:k,boostUsed:!0})})})}function re(k=null){var de,fe;if(!(u.phase===m+"-attack")){x("Remplacement uniquement avant votre attaque","warning");return}const A=u[m+"Team"],C=u["usedSubIds_"+m]||[],z=u.maxSubs||3;if(C.length>=z){x(`Maximum ${z} remplacements atteint`,"warning");return}const G=Object.entries(A).flatMap(([we,ge])=>(ge||[]).filter(_e=>_e.used).map(_e=>({..._e,_line:we}))),B=(u[m+"Subs"]||[]).filter(we=>!C.includes(we.cardId));if(!G.length){x("Aucun joueur utilisé à remplacer","warning");return}if(!B.length){x("Aucun remplaçant disponible","warning");return}let D=Math.max(0,G.findIndex(we=>we.cardId===k));const V=((de=G[D])==null?void 0:de._line)||((fe=G[D])==null?void 0:fe.job);let Z=Math.max(0,B.findIndex(we=>we.job===V)),oe=!1;const ie=document.createElement("div");ie.id="pvp-sub-overlay",ie.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function ee(){var Ne,je,Xe,Ue,rt,Xt;const we=G[D],ge=B[Z],_e=Math.min(130,Math.round((window.innerWidth-90)/2)),$e=Math.round(_e*1.35),ne=Fe=>`background:rgba(255,255,255,0.12);border:none;color:${Fe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Fe?"default":"pointer"};flex-shrink:0`;ie.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${C.length}/${z})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ne(Z===0)}" ${Z===0?"disabled":""}>▲</button>
          <div>${ge?Et({...ge,used:!1,boost:0},_e,$e):"<div>—</div>"}</div>
          <button id="pin-down" style="${ne(Z>=B.length-1)}" ${Z>=B.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${Z+1}/${B.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ne(D===0)}" ${D===0?"disabled":""}>▲</button>
          <div>${we?Et({...we,used:!1,boost:0},_e,$e):"<div>—</div>"}</div>
          <button id="pout-down" style="${ne(D>=G.length-1)}" ${D>=G.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${D+1}/${G.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Ne=ie.querySelector("#psub-close"))==null||Ne.addEventListener("click",()=>ie.remove()),(je=ie.querySelector("#pout-up"))==null||je.addEventListener("click",()=>{D>0&&(D--,ee())}),(Xe=ie.querySelector("#pout-down"))==null||Xe.addEventListener("click",()=>{D<G.length-1&&(D++,ee())}),(Ue=ie.querySelector("#pin-up"))==null||Ue.addEventListener("click",()=>{Z>0&&(Z--,ee())}),(rt=ie.querySelector("#pin-down"))==null||rt.addEventListener("click",()=>{Z<B.length-1&&(Z++,ee())});const ze=(Fe,Je,Ke,gt)=>{const at=ie.querySelector("#"+Fe);if(!at)return;let Pt=0;at.addEventListener("touchstart",bt=>{Pt=bt.touches[0].clientY},{passive:!0}),at.addEventListener("touchend",bt=>{const Tt=bt.changedTouches[0].clientY-Pt;if(Math.abs(Tt)<30)return;const st=Je();Tt<0&&st<gt-1?(Ke(st+1),ee()):Tt>0&&st>0&&(Ke(st-1),ee())},{passive:!0})};ze("pin-panel",()=>Z,Fe=>Z=Fe,B.length),ze("pout-panel",()=>D,Fe=>D=Fe,G.length),(Xt=ie.querySelector("#psub-confirm"))==null||Xt.addEventListener("click",async Fe=>{if(Fe.preventDefault(),Fe.stopPropagation(),oe)return;oe=!0;const Je=G[D],Ke=B[Z];if(!Je||!Ke)return;const gt=Je._line,at=(A[gt]||[]).findIndex(Tt=>Tt.cardId===Je.cardId);if(at===-1){x("Erreur : joueur introuvable","error"),ie.remove();return}const Pt={...Ke,_line:gt,position:Je.position,used:!1,boost:0};A[gt].splice(at,1,Pt);const bt=[...C,Ke.cardId];ie.remove(),te(Je,Ke,async()=>{await L({[m+"Team"]:A,[y+"Team"]:u[y+"Team"],["usedSubIds_"+m]:bt})})})}document.body.appendChild(ie),ee()}function te(k,T,A){const C={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const G=(V,Z,oe)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${Z};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${oe}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${C[V.job]||"#555"};border:3px solid ${Z};position:relative;overflow:hidden;margin:0 auto">
        ${Bt(V)?`<img src="${Bt(V)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(V.name||"").slice(0,12)}</div>
    </div>`;z.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${G(T,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${G(k,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(z);let B=!1;const D=()=>{B||(B=!0,z.remove(),setTimeout(()=>A(),50))};z.addEventListener("click",D),setTimeout(D,2200)}function X(){var T;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",k.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${u[y+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Ci(u[y+"Team"],u[y+"Formation"],null,[],jt(),Ht())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(k),(T=k.querySelector("#pvp-opp-close"))==null||T.addEventListener("click",()=>k.remove())}function N(){var A;const k=u.log||[],T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",T.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${k.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...k].reverse().map(C=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${C.type==="goal"?"#FFD700":C.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${C.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(T),(A=T.querySelector("#pvp-hist-close"))==null||A.addEventListener("click",()=>T.remove())}async function J(){if(u.phase!==m+"-attack")return;const k=m==="p1"?"p2":"p1",T=(u.round||0)+1,A=[...u.log||[]];A.push({type:"info",text:`⏭️ ${u[m+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const C=De(u),z=Le(k),G=C||!z?"finished":k+"-attack";await L({["selected_"+m]:[],modifiers:{...u.modifiers,[m]:{}},pendingAttack:null,phase:G,attacker:k,round:T,log:A}),G==="finished"&&await Ce(u)}function P(k){const T=(k.GK||[]).some(C=>!C.used),A=["DEF","MIL","ATT"].some(C=>(k[C]||[]).some(z=>!z.used));return T&&!A}function K(k){return(k.p1Score||0)!==(k.p2Score||0)?null:P(k.p1Team)&&!Se(k.p2Team)?{side:"p1",gk:(k.p1Team.GK||[]).find(T=>!T.used)}:P(k.p2Team)&&!Se(k.p1Team)?{side:"p2",gk:(k.p2Team.GK||[]).find(T=>!T.used)}:null}async function ae(){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(k);const T=(A,C)=>new Promise(z=>{k.innerHTML=`<div style="font-size:32px;font-weight:900;color:${C};letter-spacing:2px;animation:lcFade 1.4s ease both">${A}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(z,1400)});await T("⚽ DERNIER CORNER","#FFD700"),await T("🧤 LE GARDIEN MONTE !","#4fc3f7"),k.remove()}async function pe(k,T){const{side:A,gk:C}=k;if(!C)return;const z=A+"Score",G=(T[z]||0)+1;C.used=!0;const B=[...T.log||[]];B.push({type:"duel",isGoal:!0,homeScored:A===m,homePlayers:A==="p1"?[Gt(C)]:[],aiPlayers:A==="p2"?[Gt(C)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${T[A+"Name"]} marque !`});const D=(T.round||0)+1,V=A==="p1"?"p2":"p1",Z={...T,[z]:G},oe=De(Z);q.add(D),await ae();const ie=A===m?G:T[m+"Score"]||0,ee=A===m?T[y+"Score"]||0:G;tt([Gt(C)],ie,ee,A===m,async()=>{await L({[z]:G,log:B,round:D,pendingAttack:null,phase:oe?"finished":V+"-attack",attacker:V,["selected_"+m]:[],modifiers:{...u.modifiers,[m]:{}}}),oe&&await Ce({...u,[z]:G})})}async function xe(){const k=u[m+"Team"],T=!["GK","DEF","MIL","ATT"].some(G=>(u[y+"Team"][G]||[]).some(B=>!B.used)),A=(u["selected_"+m]||[]).map(G=>{const B=(k[G._role]||[]).find(fe=>fe.cardId===G.cardId)||G,D=["GK","DEF"].includes(G._role),V=k[G._role]||[],Z=V.findIndex(fe=>fe.cardId===G.cardId),oe=lt(V.length),ie=Z>=0?oe[Z]:B._col??1,ee=u.stadiumDef||u.homeStadiumDef||null,de=B.stadiumBonus||ee&&(ee.club_id&&String(B.club_id)===String(ee.club_id)||ee.country_code&&B.country_code===ee.country_code)||!1;return{...B,_line:G._role,_col:ie,stadiumBonus:de,...D?{note_a:Math.max(1,Number(B.note_a)||0)}:{}}});if(!A.length)return;const C=ci(A,u.modifiers[m]||{},u[m+"Formation"]);ce(m,A.map(G=>G.cardId)),A.forEach(G=>{const B=(k[G._role]||[]).find(D=>D.cardId===G.cardId);B&&(B.used=!0)}),u["selected_"+m]=[],H();const z=[...u.log||[]];if(T){if(A.length===1&&(A[0]._line==="GK"||A[0].job==="GK")&&(u.p1Score||0)===(u.p2Score||0)){await pe({side:m,gk:A[0]},{...u,[m+"Team"]:k,log:z});return}const B=(u[m+"Score"]||0)+1,D=A.map(ee=>Gt(ee));z.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:D,homeTotal:C.total,aiTotal:0});const V=(u.round||0)+1,Z=m==="p1"?"p2":"p1",oe={...u,[m+"Team"]:k,[m+"Score"]:B},ie=De(oe);q.add(V),tt(D,B,u[y+"Score"]||0,!0,async()=>{await L({[m+"Team"]:k,[m+"Score"]:B,["selected_"+m]:[],modifiers:{...u.modifiers,[m]:{}},pendingAttack:null,phase:ie?"finished":Z+"-attack",attacker:Z,round:V,log:z}),ie&&await Ce({...u,[m+"Score"]:B})});return}z.push({type:"pending",text:`⚔️ ${u[m+"Name"]} attaque (${C.total})`}),await L({[m+"Team"]:k,[y+"Team"]:u[y+"Team"],pendingAttack:{...C,players:A,side:m},["selected_"+m]:[],modifiers:{...u.modifiers,[m]:{}},phase:y+"-defense",log:z})}async function ke(){const k=u[m+"Team"],T=(u["selected_"+m]||[]).map(ge=>{const _e=(k[ge._role]||[]).find(je=>je.cardId===ge.cardId)||ge,$e=k[ge._role]||[],ne=$e.findIndex(je=>je.cardId===ge.cardId),ze=lt($e.length),Ne=ne>=0?ze[ne]:_e._col??1;return{..._e,_line:ge._role,_col:Ne}}),A=pi(T,u.modifiers[m]||{},u[m+"Formation"]);ce(m,T.map(ge=>ge.cardId)),T.forEach(ge=>{const _e=(k[ge._role]||[]).find($e=>$e.cardId===ge.cardId);_e&&(_e.used=!0)}),u["selected_"+m]=[],H();const C=uo(u.pendingAttack.total,A.total,u.modifiers[m]||{}),z=u.pendingAttack.side,G=C==="attack"||(C==null?void 0:C.goal),B=z==="p1"?"p2":"p1",D=(u.round||0)+1,V=(u.pendingAttack.players||[]).map(ge=>Gt(ge)),Z=[...u.log||[]];Z.push({type:"duel",isGoal:G,homeScored:G&&z===m,text:G?`⚽ BUT de ${u[z+"Name"]} ! (${u.pendingAttack.total} vs ${A.total})`:`✋ Attaque stoppée (${u.pendingAttack.total} vs ${A.total})`,homePlayers:V,aiPlayers:T.map(ge=>Gt(ge)),homeTotal:u.pendingAttack.total,aiTotal:A.total});const oe=G?(u[z+"Score"]||0)+1:u[z+"Score"]||0,ie={...u,[m+"Team"]:k,[z+"Score"]:oe},ee=De(ie),de=ee?"finished":B+"-attack",fe=!ee&&!G?K(ie):null,we=async()=>{if(fe){await pe(fe,ie);return}await L({[m+"Team"]:k,[y+"Team"]:u[y+"Team"],[z+"Score"]:oe,["selected_"+m]:[],modifiers:{...u.modifiers,[m]:{}},pendingAttack:null,phase:de,attacker:B,round:D,log:Z}),(de==="finished"||ee)&&await Ce({...u,[z+"Score"]:oe})};if(G){const ge=z===m,_e=ge?oe:u[m+"Score"]||0,$e=ge?u[y+"Score"]||0:oe;q.add(D),tt(V,_e,$e,ge,we)}else await we()}function Ee(k){return["MIL","ATT"].some(T=>(k[T]||[]).some(A=>!A.used))}function Se(k){return["GK","DEF","MIL","ATT"].some(T=>(k[T]||[]).some(A=>!A.used))}function ye(k){return Se(k)&&!Ee(k)}function Le(k){const T=u[k+"Team"],A=u[(k==="p1"?"p2":"p1")+"Team"];return!!(Ee(T)||ye(T)&&!Se(A)||ye(T)&&!Ee(A)&&Se(A))}function De(k){return!Se(k.p1Team)&&!Se(k.p2Team)}function Me(k){const T=k.p1Score||0,A=k.p2Score||0;return T===A?null:T>A?h.home_id:h.away_id}async function Ce(k){Ot(),Ve();try{const T=Me(k),A=T?h.home_id===T?h.away_id:h.home_id:null,C=k.p1Score||0,z=k.p2Score||0,{data:G,error:B}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:T,p_home_score:C,p_away_score:z,p_forfeit:!1});if(B&&console.error("[PvP] finish_pvp_match:",B),l)try{await v.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(D){console.error("[PvP] check_and_finish_mini_league:",D)}T&&A&&ca(T,A).catch(()=>{});try{const{data:D}=await v.rpc("apply_match_rewards",{p_match_id:i});D!=null&&D.success&&!(D!=null&&D.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(D){console.error("[PvP] apply_match_rewards:",D)}if(typeof s=="function")try{await s({homeScore:C,awayScore:z,winnerId:T,homeId:h.home_id,awayId:h.away_id,matchId:i})}catch(D){console.error("[PvP] onMatchEnd:",D)}}catch(T){console.error("[PvP] finishMatch:",T)}}function He(){var z;const k=u[m+"Score"],T=u[y+"Score"],A=k>T,C=k===T;ct(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${A?"🏆":C?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${A?"Victoire !":C?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${k} - ${T}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(z=document.getElementById("pvp-home"))==null||z.addEventListener("click",()=>{try{v.removeChannel(U)}catch{}Ye(t),l?g("mini-league",{openLeagueId:l}):g("home")})}H()}async function Ji(t,e,i=!1){var d,c;const{state:o,navigate:r,toast:n}=e,a=i&&((c=(d=e==null?void 0:e.state)==null?void 0:d.params)==null?void 0:c.rankedData)||null;await ji(t,e,i?"ranked":"random",async({deckId:s,formation:l,starters:p,subsRaw:b,gcCardsEnriched:g,gcDefs:x,stadiumDef:m})=>{ct(t);const y=async f=>{await fa(t,e,s,l,p,b,f||[],x,m,i,a)};if(!(g!=null&&g.length)){await y([]);return}Mi(t,g,y)})}async function ua(t,e,i){return pa(t,e,i)}async function fa(t,e,i,o,r,n,a=[],d=[],c=null,s=!1,l=null){var W,U;const{state:p,navigate:b,toast:g}=e,x=(l==null?void 0:l.mmr)??((W=p.profile)==null?void 0:W.mmr)??1e3,m=s?At(x):null,y=s?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",f=s?(m==null?void 0:m.color)||"#D4A017":"#FFD700";let _=!1,h=null,E=null;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${y};color:#fff;padding:32px;text-align:center;gap:20px">
      ${s?`<div style="font-size:36px">${(m==null?void 0:m.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${s?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${s?`<div style="font-size:13px;color:${(m==null?void 0:m.color)||"#D4A017"}">${(m==null?void 0:m.name)||""} · ${Math.round(x)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${f};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const u=async()=>{_=!0,h&&(h.unsubscribe(),h=null),E&&(clearInterval(E),E=null);try{await v.rpc("cancel_matchmaking",{p_user_id:p.profile.id})}catch(L){console.error("[Matchmaking] cancel error:",L)}};(U=document.getElementById("cancel-mm"))==null||U.addEventListener("click",async()=>{await u(),Ye(t),b("home")});const I=async(L,w)=>{_||(_=!0,h&&(h.unsubscribe(),h=null),E&&(clearInterval(E),E=null),await Dt(t,e,L,w,{myGC:a,gcDefs:d,stadiumDef:c,isRanked:s,rankedData:l,onMatchEnd:s?ma:null}))},$=p.user.id,{data:S,error:q}=s?await v.rpc("try_matchmake_ranked",{p_user_id:$,p_deck_id:i,p_mmr:x,p_range:200}):await v.rpc("try_matchmake",{p_user_id:$,p_deck_id:i});if(q||!(S!=null&&S.success)){console.error("[Matchmaking] try_matchmake error:",q||S),g("Erreur de matchmaking","error"),Ye(t),b("home");return}if(S.matched){await I(S.match_id,!1);return}const O=async()=>{if(_)return;const{data:L}=await v.from("matchmaking_queue").select("status, match_id").eq("user_id",$).maybeSingle();(L==null?void 0:L.status)==="matched"&&L.match_id&&await I(L.match_id,!0)};h=v.channel(`mm_${$}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${$}`},L=>{const w=L.new;w.status==="matched"&&w.match_id&&I(w.match_id,!0)}).subscribe(),E=setInterval(O,3e3),s?setTimeout(async()=>{if(!_){_=!0,h&&(h.unsubscribe(),h=null),E&&(clearInterval(E),E=null);try{await v.rpc("cancel_matchmaking",{p_user_id:p.profile.id})}catch(L){console.error("[Matchmaking] cancel error:",L)}g("Aucun adversaire trouvé — match contre une IA calibrée sur votre niveau","info",4e3),b("match",{matchMode:"ranked_ai",rankedData:l,presetSetup:{deckId:i,formation:o,starters:r,subsRaw:n,gcCardsEnriched:a,gcDefs:d,stadiumDef:c}})}},2e4):setTimeout(()=>{_||u()},12e4)}async function ma(t,e){const{state:i,toast:o}=e,{winnerId:r,homeId:n,awayId:a,homeScore:d,awayScore:c,matchId:s}=t,l=i.user.id,p=n===l,b=r===l,{data:g}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",l).single(),{data:x}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",p?a:n).single();if(g&&x){const m=Yo(g.mmr,g.mmr_rd,g.mmr_v,x.mmr,x.mmr_rd,b?1:0);await v.from("users").update({mmr:m.mmr,mmr_rd:m.rd,mmr_v:m.v,mmr_wins:b?v.sql`mmr_wins + 1`:void 0,mmr_losses:b?void 0:v.sql`mmr_losses + 1`}).eq("id",l),o(b?`+MMR ↑ ${Math.round(m.mmr-g.mmr)}`:`-MMR ↓ ${Math.round(g.mmr-m.mmr)}`,b?"success":"error",4e3)}}const ga=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Ji,resumePvpMatch:ua},Symbol.toStringTag,{value:"Module"}));async function ba(t,e){const{state:i,navigate:o,toast:r}=e,n=i.params||{},a=n.friendId||null,d=n.friendName||"Ami",c=!!n.isAccepting;await ji(t,e,"friend",async({deckId:s,formation:l,starters:p,subsRaw:b,gcCardsEnriched:g,gcDefs:x,stadiumDef:m})=>{ct(t);const y=async f=>{const _=f||[];c?await ya(t,e,s,_,x,m):await xa(t,e,s,_,x,m,a,d)};if(!(g!=null&&g.length)){await y([]);return}Mi(t,g,y)})}async function xa(t,e,i,o,r,n,a,d){var _;const{state:c,navigate:s,toast:l}=e,p=c.user.id,{data:b,error:g}=await v.from("friend_match_invites").insert({inviter_id:p,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(g||!b){console.error("[Friend] Erreur création invitation:",g),l("Impossible de créer l'invitation","error"),s("home");return}t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${d}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let x=!1,m=null;const y=async()=>{m&&(m.unsubscribe(),m=null)};(_=document.getElementById("cancel-friend"))==null||_.addEventListener("click",async()=>{await y(),await v.from("friend_match_invites").update({status:"declined"}).eq("id",b.id),Ye(t),s("home")}),m=v.channel(`friend_invite_${b.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${b.id}`},async({new:h})=>{x||h.status!=="accepted"||!h.match_id||(x=!0,await y(),await Dt(t,e,h.match_id,!0,{myGC:o,gcDefs:r,stadiumDef:n}))}).subscribe();const f=setInterval(async()=>{if(x)return;const{data:h}=await v.from("friend_match_invites").select("status, match_id").eq("id",b.id).single();(h==null?void 0:h.status)==="accepted"&&h.match_id&&(x=!0,clearInterval(f),await y(),await Dt(t,e,h.match_id,!0,{myGC:o,gcDefs:r,stadiumDef:n}))},3e3);setTimeout(async()=>{x||(clearInterval(f),await y(),l("Invitation expirée","info"),s("home"))},12e4)}async function ya(t,e,i,o,r,n){const{state:a,navigate:d,toast:c}=e,s=a.user.id,{data:l}=await v.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",s).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){c("Aucune invitation en attente","error"),d("home");return}const{data:p,error:b}=await v.rpc("accept_friend_invite",{p_invite_id:l.id,p_invitee_deck_id:i});if(b||!(p!=null&&p.success)){console.error("[Friend] Erreur accept_friend_invite:",b||p),c((p==null?void 0:p.error)||"Impossible de rejoindre le match","error"),d("home");return}await Dt(t,e,p.match_id,!1,{myGC:o,gcDefs:r,stadiumDef:n})}const $n="#1A6B3C",pt="#D4A017",ii="var(--tile-bg)",oi="var(--tile-border)",Mt="var(--divider)",Ze="var(--tile-fg-on-page)",zt="var(--tile-fg-dim)",it="var(--tile-fg-faint)",ri="var(--nav-fg,#fff)",En="rgba(255,255,255,0.62)",ha="rgba(255,255,255,0.4)";async function va(t,e){var o;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(o=e.state.params)==null?void 0:o.openLeagueId;if(i){e.state.params.openLeagueId=null,await ft(t,e,i);return}await ot(t,e)}async function ot(t,e,i="waiting"){var h,E;const{state:o}=e,r=o.profile.id,{data:n}=await v.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",r),a=(n||[]).map(u=>u.league_id),d={};(n||[]).forEach(u=>{d[u.league_id]={amount:u.prize_amount,claimed:u.prize_claimed}});const{data:c,error:s}=await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),l=s?(await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:c||[],b=(a.length?await v.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],g=b.filter(u=>u.status==="waiting"&&!u.is_archived),x=b.filter(u=>u.status==="active"&&!u.is_archived),m=b.filter(u=>u.is_archived||u.status==="finished");let y=m;if(m.length){const{data:u}=await v.from("mini_league_matches").select("league_id").in("league_id",m.map($=>$.id)).or(`home_id.eq.${r},away_id.eq.${r}`).not("status","eq","bye"),I=new Set((u||[]).map($=>$.league_id));y=m.filter($=>I.has($.id))}const f=l.filter(u=>!a.includes(u.id)),_=[{key:"waiting",label:"🟡 En attente",count:g.length+f.length},{key:"active",label:"🟢 En cours",count:x.length},{key:"archived",label:"📁 Archivées",count:y.length}];t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Mt};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${ri}">🏆 Mini League</div>
        <div style="font-size:12px;color:${En}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${ri}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Mt}">
      ${_.map(u=>`<button class="ml-tab" data-tab="${u.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===u.key?$n:"transparent"};background:none;font-size:12px;font-weight:${i===u.key?"900":"600"};color:${i===u.key?"#4ade80":ha};cursor:pointer">${u.label}${u.count?` (${u.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?wa(g,f,r):i==="active"?_a(x,r):ka(y,r,d)}
    </div>
  </div>`,(h=document.getElementById("ml-create-btn"))==null||h.addEventListener("click",()=>$a(t,e)),(E=document.getElementById("ml-refresh-list"))==null||E.addEventListener("click",()=>ot(t,e,i)),t.querySelectorAll(".ml-tab").forEach(u=>u.addEventListener("click",()=>ot(t,e,u.dataset.tab))),t.querySelectorAll("[data-league-id]").forEach(u=>u.addEventListener("click",()=>ft(t,e,u.dataset.leagueId))),t.querySelectorAll("[data-join]").forEach(u=>u.addEventListener("click",I=>{I.stopPropagation(),Ln(t,e,u.dataset.join,u.dataset.type)})),t.querySelectorAll("[data-delete]").forEach(u=>u.addEventListener("click",I=>{I.stopPropagation(),Qi(t,e,u.dataset.delete,u.dataset.name,i)})),t.querySelectorAll("[data-claim-league]").forEach(u=>u.addEventListener("click",async I=>{I.stopPropagation(),u.disabled=!0,u.textContent="...";const{data:$,error:S}=await v.rpc("claim_mini_league_prize",{p_league_id:u.dataset.claimLeague,p_user_id:o.profile.id});if(S||!($!=null&&$.success)){e.toast(($==null?void 0:$.error)||"Erreur lors de la récupération","error"),ot(t,e,i);return}if(!$.already_claimed){o.profile.credits=(o.profile.credits||0)+$.prize;const q=document.getElementById("nav-credits");q&&(q.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),e.toast(`💰 +${$.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}ot(t,e,i)}))}function Ii(t,e,i=!1,o=null){var c,s;const r=t.creator_id===e,n=t.pot||0,a=((s=(c=t.mini_league_members)==null?void 0:c[0])==null?void 0:s.count)||0,d=o&&o.amount>0&&!o.claimed;return`<div data-league-id="${t.id}" style="background:${ii};border:1px solid ${d?"rgba(212,160,23,0.5)":oi};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${Ze}">${t.name}</div>
      ${r?`<button data-delete="${t.id}" data-name="${t.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${zt};margin-bottom:${i||d?"10px":"0"}">
      <span>${t.type==="private"?"🔒":"🌐"} ${t.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${t.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${t.max_players}</span>
      <span>💰 ${(t.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${n>0?`<span style="color:${pt};font-weight:700">🏆 ${n.toLocaleString("fr")} cr.</span>`:""}
      ${t.current_day>0?`<span>📅 J${t.current_day}/${t.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${t.id}" data-type="${t.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(t.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
    ${d?`<button data-claim-league="${t.id}" class="btn btn-sm" style="width:100%;background:${pt};color:#141000;font-weight:900;border:none">💰 Récupérer ${o.amount.toLocaleString("fr")} cr.</button>`:""}
  </div>`}function wa(t,e,i){const o=[];return t.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${it};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),o.push(...t.map(r=>Ii(r,i,!1)))),e.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${it};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),o.push(...e.map(r=>Ii(r,i,!0)))),o.length?o.join(""):`<div style="text-align:center;padding:40px;color:${it}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function _a(t,e){return t.length?t.map(i=>Ii(i,e)).join(""):`<div style="text-align:center;padding:40px;color:${it}">Aucune mini league en cours.</div>`}function ka(t,e,i={}){return t.length?t.map(o=>Ii(o,e,!1,i[o.id])).join(""):`<div style="text-align:center;padding:40px;color:${it}">Aucune mini league archivée.</div>`}function $a(t,e){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(o=>o.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=o.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var x,m,y,f;const{toast:o}=e,r=document.getElementById("ml-name").value.trim(),n=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,d=((x=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:x.value)||"public",c=((m=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:m.value)||"aller",s=((f=(y=document.getElementById("ml-pwd"))==null?void 0:y.value)==null?void 0:f.trim())||null;if(!r){o("Le nom est obligatoire","error");return}if(a<100){o("Mise minimum : 100 crédits","error");return}if(d==="private"&&!s){o("Mot de passe requis","error");return}const{data:l,error:p}=await v.from("mini_leagues").insert({name:r,creator_id:e.state.profile.id,type:d,password:s,mode:c,max_players:n,entry_fee:a}).select().single();if(p){o("Erreur : "+p.message,"error");return}const{data:b}=await v.from("users").select("credits").eq("id",e.state.profile.id).single();if(((b==null?void 0:b.credits)||0)<a){await v.from("mini_leagues").delete().eq("id",l.id),o(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await v.from("users").update({credits:b.credits-a}).eq("id",e.state.profile.id),await v.from("mini_leagues").update({pot:a}).eq("id",l.id),await v.from("mini_league_members").insert({league_id:l.id,user_id:e.state.profile.id}),e.state.profile&&(e.state.profile.credits=b.credits-a);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(e.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),o(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),ft(t,e,l.id)})}function Ea(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",e.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(e);const i=e.querySelector("#ml-pwd-input"),o=r=>{e.remove(),t(r)};setTimeout(()=>i==null?void 0:i.focus(),80),e.querySelector("#pwd-cancel").addEventListener("click",()=>o(null)),e.querySelector("#pwd-ok").addEventListener("click",()=>o(i.value.trim())),i.addEventListener("keydown",r=>{r.key==="Enter"&&o(i.value.trim())})})}async function Ln(t,e,i,o){var p;const{toast:r,state:n}=e,a=n.profile.id;let d=null;if(o==="private"&&(d=await Ea(),d===null))return;const{data:c,error:s}=await v.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:d});if(s||!(c!=null&&c.success)){console.error("[MiniLeague] join_mini_league:",s||c),r((c==null?void 0:c.error)||"Erreur lors de l'inscription","error");return}if(typeof e.refreshProfile=="function")await e.refreshProfile();else{const{data:b}=await v.from("users").select("credits").eq("id",a).single();n.profile&&b&&(n.profile.credits=b.credits)}const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${(((p=n.profile)==null?void 0:p.credits)||0).toLocaleString("fr")}`),r("✅ Inscrit ! Pot mis à jour.","success"),ft(t,e,i)}async function La(t,e,i,o){const{toast:r,state:n}=e,a=n.profile.id;if(!await new Promise(b=>{const g=document.createElement("div");g.className="modal-overlay",g.style.zIndex="2100",g.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${o.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(g),g.querySelector("#lv-ok").onclick=()=>{g.remove(),b(!0)},g.querySelector("#lv-cancel").onclick=()=>{g.remove(),b(!1)}}))return;const{data:c,error:s}=await v.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(s||!(c!=null&&c.success)){r((c==null?void 0:c.error)||"Erreur lors de la désinscription","error");return}const l=c.refund||o;n.profile&&(n.profile.credits=(n.profile.credits||0)+l);const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${(n.profile.credits||0).toLocaleString("fr")}`),r(`↩️ Désinscrit · +${l.toLocaleString("fr")} cr. remboursés`,"success"),ot(t,e,"waiting")}async function Qi(t,e,i,o,r){const{toast:n}=e;if(!confirm(`Supprimer définitivement "${o}" et tous ses matchs/membres ? Action irréversible.`))return;await v.from("mini_league_matches").delete().eq("league_id",i),await v.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await v.from("mini_leagues").delete().eq("id",i);if(a){n("Erreur suppression ("+a.message+")","error");return}n("Mini League supprimée avec succès","success"),ot(t,e,r)}async function Sa(t,e,i){await v.from("mini_leagues").update({is_archived:!0}).eq("id",i),e.toast("Mini League archivée","success"),ot(t,e,"archived")}async function ft(t,e,i){var E,u,I,$,S,q,O,W,U;const{state:o,toast:r}=e,n=o.profile.id,[{data:a},{data:d},{data:c}]=await Promise.all([v.from("mini_leagues").select("*").eq("id",i).single(),v.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),v.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){r("Introuvable","error"),await ot(t,e);return}const s=(d||[]).some(L=>L.user_id===n),l=a.creator_id===n,p=(d||[]).map(L=>L.user).filter(Boolean),b=Ma(p,c||[]),g=(c||[]).filter(L=>L.matchday===a.current_day),x=a.pot||0,m=a.entry_fee||100,y=g.length>0&&g.every(L=>L.status==="finished"||L.status==="bye"),f=a.current_day>=a.total_days,_=(d||[]).find(L=>L.user_id===n);t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Mt};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${ri}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${ri};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${ri}">${a.name}</div>
        <div style="font-size:11px;color:${En}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${m} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"rgba(74,222,128,0.16)":a.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${a.status==="active"?"#4ade80":a.status==="finished"?"#c084fc":"#eab308"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${x>0?`<div style="font-size:12px;font-weight:900;color:${pt};margin-top:4px">🏆 ${x.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${ii};border:1px solid ${oi};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Ze}">👥 Joueurs (${p.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${zt};margin-bottom:10px">💰 ${m} cr./joueur → Pot estimé : ${(m*p.length).toLocaleString("fr")} cr. (🥇${Math.floor(m*p.length*.7).toLocaleString("fr")} · 🥈${Math.floor(m*p.length*.2).toLocaleString("fr")} · 🥉${Math.floor(m*p.length*.1).toLocaleString("fr")})</div>
        ${p.map(L=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${Mt}">
            <div style="width:36px;height:36px;border-radius:50%;background:${L.club_color2||$n};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${L.club_color1||"#fff"}">${(L.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Ze}">${L.club_name||L.pseudo}</div><div style="font-size:11px;color:${it}">@${L.pseudo}</div></div>
            ${L.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${l&&p.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${m} cr. × ${p.length})</button>`:""}
        ${l?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${s?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${m} cr.)</button>`}
        ${s&&!l?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${m.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${ii};border:1px solid ${oi};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Ze}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${g.map(L=>Go(L,p,n,s)).join("")}
        ${l&&y&&!f?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&b.length?`
      <div style="background:${ii};border:1px solid ${oi};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Ze}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${it};text-transform:uppercase;border-bottom:2px solid ${Mt}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${x>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${pt}">💰</th>`:""}
          </tr></thead>
          <tbody>${b.map((L,w)=>{const F=x>0&&a.status==="finished"?w===0?Math.floor(x*.7):w===1?Math.floor(x*.2):w===2?Math.floor(x*.1):0:0;return`<tr style="border-bottom:1px solid ${Mt};${L.userId===n?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${w===0?pt:w<3?"#4ade80":zt}">${["🥇","🥈","🥉"][w]||w+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Ze}">${L.clubName}</div><div style="font-size:10px;color:${it}">@${L.pseudo}</div></td>
              <td style="text-align:center;color:${zt}">${L.played}</td><td style="text-align:center;color:${zt}">${L.won}-${L.drawn}-${L.lost}</td>
              <td style="text-align:center;color:${L.goalDiff>=0?"#4ade80":"#ff6b6b"}">${L.goalDiff>=0?"+":""}${L.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Ze}">${L.points}</td>
              ${x>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${pt}">${F?F.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${ii};border:1px solid ${oi};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Ze}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(L,w)=>w+1).reverse().map(L=>{const w=(c||[]).filter(F=>F.matchday===L);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${it};margin-bottom:6px">Journée ${L}</div>${w.map(F=>Go(F,p,n,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${l&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${zt}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const h=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((E=document.getElementById("ml-back"))==null||E.addEventListener("click",()=>ot(t,e,h)),(u=document.getElementById("ml-refresh"))==null||u.addEventListener("click",async L=>{const w=L.currentTarget;w.style.opacity="0.5",await ft(t,e,i)}),(I=document.getElementById("ml-start-btn"))==null||I.addEventListener("click",()=>Ta(t,e,a,p)),($=document.getElementById("ml-next-day"))==null||$.addEventListener("click",()=>Ia(t,e,i)),(S=document.getElementById("ml-join-now"))==null||S.addEventListener("click",()=>Ln(t,e,i,a.type)),(q=document.getElementById("ml-leave-btn"))==null||q.addEventListener("click",()=>La(t,e,i,m)),(O=document.getElementById("ml-delete-btn"))==null||O.addEventListener("click",()=>Qi(t,e,i,a.name,"waiting")),(W=document.getElementById("ml-delete-now"))==null||W.addEventListener("click",()=>Qi(t,e,i,a.name,h)),(U=document.getElementById("ml-archive-btn"))==null||U.addEventListener("click",()=>Sa(t,e,i)),t.querySelectorAll("[data-play-match]").forEach(L=>{L.addEventListener("click",()=>{const w=g.find(F=>F.id===L.dataset.playMatch);w&&(mt(),e.navigate("match-mini-league",{mlMatchId:w.id,leagueId:i}))})}),a.status==="finished"&&_){const L=b.findIndex(w=>w.userId===n);L>=0&&L<3&&_.prize_amount>0&&!_.prize_claimed&&setTimeout(()=>za(t,e,a,_,L),400)}}function Go(t,e,i,o,r=!1){const n=p=>e.find(b=>b.id===p);if(t.is_bye){const p=n(t.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${zt};text-align:center">🔵 ${(p==null?void 0:p.club_name)||(p==null?void 0:p.pseudo)||"?"} exempté(e)</div>`}const a=n(t.home_id),d=n(t.away_id),c=t.home_id===i||t.away_id===i,s=c&&t.status==="pending"&&o&&!r,l=t.status==="finished"?`${t.home_score} - ${t.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${c?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${c?"rgba(74,222,128,0.35)":Mt}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Ze};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${t.status==="finished"?"#4ade80":it}">${l}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Ze};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"?"}</div>
    ${s?`<button data-play-match="${t.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${t.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function Ta(t,e,i,o){const{toast:r,state:n}=e,a=Aa(o.map(s=>s.id),i.mode),d=[];a.forEach((s,l)=>s.forEach(p=>d.push({league_id:i.id,matchday:l+1,home_id:p.home||p.bye,away_id:p.away||null,is_bye:!!p.bye,status:p.bye?"bye":"pending"})));const{error:c}=await v.from("mini_league_matches").insert(d);if(c){r("Erreur calendrier : "+c.message,"error");return}await v.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),r(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),ft(t,e,i.id)}async function Ia(t,e,i){const{data:o}=await v.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),r=(o.current_day||0)+1;if(r>(o.total_days||0)){ft(t,e,i);return}await v.from("mini_leagues").update({current_day:r}).eq("id",i),e.toast(`Journée ${r} commencée !`,"success"),ft(t,e,i)}async function za(t,e,i,o,r){var b,g;const{state:n,toast:a}=e,d=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],c=["🥇","🥈","🥉"][r],s=o.prize_amount||d[r]||0,l=o.prize_claimed,p=document.createElement("div");p.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",p.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${c}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${r===0?"Champion !":r===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${pt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${l?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${pt}">${s.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${r===0?"70%":r===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${l?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${pt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${s.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(p),(b=p.querySelector("#prize-close"))==null||b.addEventListener("click",()=>p.remove()),(g=p.querySelector("#claim-prize-btn"))==null||g.addEventListener("click",async x=>{const m=x.currentTarget;m.disabled=!0,m.textContent="...";const{data:y,error:f}=await v.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:n.profile.id});if(f||!(y!=null&&y.success)){console.error("[MiniLeague] claim_mini_league_prize:",f||y),a((y==null?void 0:y.error)||"Erreur lors de la récupération","error"),m.disabled=!1,m.textContent=`💰 Récupérer ${s.toLocaleString("fr")} cr.`;return}if(y.already_claimed)a("Déjà récupéré précédemment","info");else{const _=(n.profile.credits||0)+y.prize;n.profile&&(n.profile.credits=_);const h=document.getElementById("nav-credits");h&&(h.textContent=`💰 ${_.toLocaleString("fr")}`),a(`💰 +${y.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}p.remove(),ft(t,e,i.id)})}function Aa(t,e){const o=t.length%2===0?[...t]:[...t,null],r=o.length;let n=o.slice(1);const a=[];for(let d=0;d<r-1;d++){const c=[],s=[o[0],...n];for(let l=0;l<r/2;l++){const p=s[l],b=s[r-1-l];p===null?c.push({bye:b}):b===null?c.push({bye:p}):c.push({home:p,away:b})}a.push(c),n=[n[n.length-1],...n.slice(0,-1)]}return e==="aller-retour"?[...a,...a.map(d=>d.map(c=>c.bye?c:{home:c.away,away:c.home}))]:a}function Ma(t,e){const i={};return t.forEach(o=>{i[o.id]={userId:o.id,pseudo:o.pseudo,clubName:o.club_name||o.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),e.filter(o=>o.status==="finished"&&!o.is_bye&&o.home_score!=null).forEach(o=>{const r=i[o.home_id],n=i[o.away_id];!r||!n||(r.played++,n.played++,r.goalsFor+=o.home_score,r.goalsAgainst+=o.away_score,n.goalsFor+=o.away_score,n.goalsAgainst+=o.home_score,o.home_score>o.away_score?(r.won++,r.points+=3,n.lost++):o.home_score<o.away_score?(n.won++,n.points+=3,r.lost++):(r.drawn++,r.points++,n.drawn++,n.points++),r.goalDiff=r.goalsFor-r.goalsAgainst,n.goalDiff=n.goalsFor-n.goalsAgainst)}),Object.values(i).sort((o,r)=>r.points-o.points||r.goalDiff-o.goalDiff||r.goalsFor-o.goalsFor)}async function Oo(t,e){const{state:i,navigate:o,toast:r}=e,n=i.params||{},a=n.leagueId||null,d=n.mlMatchId||null,c=i.user.id;if(!d||!a){r("Match introuvable","error"),o("mini-league");return}const{data:s,error:l}=await v.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",d).single();if(l||!s){r("Match introuvable","error"),o("mini-league",{openLeagueId:a});return}if(s.home_id!==c&&s.away_id!==c){r("Vous ne faites pas partie de ce match","error"),o("mini-league",{openLeagueId:a});return}const p=s.home_id===c;if(s.match_id){await Dt(t,e,s.match_id,p,{mlLeagueId:a,mlMatchId:d});return}await ji(t,e,"mini_league",async({deckId:b,gcCardsEnriched:g,gcDefs:x,stadiumDef:m})=>{ct(t);const y=async f=>{const{data:_,error:h}=await v.rpc("start_mini_league_match",{p_ml_match_id:d,p_user_id:c,p_deck_id:b});if(h||!(_!=null&&_.success)){console.error("[MiniLeague] start_mini_league_match error:",h||_),r((_==null?void 0:_.error)||"Impossible de lancer le match","error"),o("mini-league",{openLeagueId:a});return}if(_.matched){await Dt(t,e,_.match_id,p,{mlLeagueId:a,mlMatchId:d,myGC:f||[],gcDefs:x,stadiumDef:m});return}await Ca(t,e,{mlMatchId:d,leagueId:a,amIHome:p,chosenGC:f,gcDefs:x,stadiumDef:m})};if(!(g!=null&&g.length)){await y([]);return}Mi(t,g,y)})}function Ca(t,e,{mlMatchId:i,leagueId:o,amIHome:r,chosenGC:n,gcDefs:a,stadiumDef:d}){return new Promise(c=>{var m;const{navigate:s}=e;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let l=!1;const p=async y=>{if(!l){if(l=!0,clearInterval(x),g)try{g.unsubscribe()}catch{}y&&await Dt(t,e,y,r,{mlLeagueId:o,mlMatchId:i,myGC:n||[],gcDefs:a,stadiumDef:d}),c()}};(m=document.getElementById("wait-back"))==null||m.addEventListener("click",()=>{if(l=!0,clearInterval(x),g)try{g.unsubscribe()}catch{}s("mini-league",{openLeagueId:o}),c()});const b=async()=>{if(l)return;const{data:y}=await v.from("mini_league_matches").select("match_id").eq("id",i).single();y!=null&&y.match_id&&p(y.match_id)},g=v.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},y=>{var f;(f=y.new)!=null&&f.match_id&&p(y.new.match_id)}).subscribe(),x=setInterval(b,3e3);b()})}const Ho={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function vi(t,e,i=0){return e?(Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0)+(e===t.job||e===t.job2?i:0):0}async function ja(t,e){t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await bo(t,e)}async function bo(t,e){const{state:i,toast:o,navigate:r}=e;Yt(r,i.profile,"market","/icons/",o);const{data:n}=await v.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:a}=await v.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),d=(n||[]).filter(y=>y.seller_id!==i.profile.id),c=a||[];t.innerHTML=`
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
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--tile-border);background:var(--tile-bg);color:var(--tile-fg-dim);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${c.length})</button>
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
  </div>`;let s="buy";const l=()=>{var y,f,_,h,E,u,I;return{name:(((y=document.getElementById("flt-name"))==null?void 0:y.value)||"").toLowerCase().trim(),club:(((f=document.getElementById("flt-club"))==null?void 0:f.value)||"").toLowerCase().trim(),country:(((_=document.getElementById("flt-country"))==null?void 0:_.value)||"").toLowerCase().trim(),job:((h=document.getElementById("flt-job"))==null?void 0:h.value)||"",rarity:((E=document.getElementById("flt-rarity"))==null?void 0:E.value)||"",note1:parseInt((u=document.getElementById("flt-note1"))==null?void 0:u.value)||0,note2:parseInt((I=document.getElementById("flt-note2"))==null?void 0:I.value)||0}};function p(y){const f=l();return y.filter(_=>{var O,W,U;const h=(O=_.card)==null?void 0:O.player;if(!h)return!1;const E=`${h.firstname} ${h.surname_real}`.toLowerCase(),u=(((W=h.clubs)==null?void 0:W.encoded_name)||"").toLowerCase(),I=(h.country_code||"").toLowerCase(),$=((U=_.card)==null?void 0:U.evolution_bonus)||0,S=vi(h,h.job,$),q=h.job2?vi(h,h.job2,$):0;return!(f.name&&!E.includes(f.name)||f.club&&!u.includes(f.club)||f.country&&!I.includes(f.country)||f.job&&h.job!==f.job||f.rarity&&h.rarity!==f.rarity||f.note1&&S<f.note1||f.note2&&q<f.note2)})}function b(y){var u,I,$;const f=(u=y.card)==null?void 0:u.player;if(!f)return"";const _=((I=y.card)==null?void 0:I.evolution_bonus)||0,h=(i.profile.credits||0)>=y.price;return`<div class="mkt-buy-tile">
      ${Ae({...f,_evolution_bonus:_},{width:140})}
      <div class="mkt-price">${y.price.toLocaleString("fr")} cr.</div>
      <div class="mkt-seller">Vendeur : ${(($=y.seller)==null?void 0:$.pseudo)||"—"}</div>
      <button class="btn btn-primary btn-sm" data-buy="${y.id}" ${h?"":"disabled"} style="font-size:12px;padding:8px 10px">${h?"Acheter":"Trop cher"}</button>
    </div>`}function g(y){var W,U,L,w;const f=(W=y.card)==null?void 0:W.player;if(!f)return"";const _=((U=y.card)==null?void 0:U.evolution_bonus)||0,h=vi(f,f.job,_),E=f.job2?vi(f,f.job2,_):0,u=y.status==="sold",I=f.country_code?`https://flagsapi.com/${f.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,$=Ho[f.job]||"#bbb",S=f.job2?Ho[f.job2]||"#bbb":null,q=f.job==="GK"?"#fff":$,O=f.job2==="GK"?"#fff":S;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${u?"opacity:0.7":""}">
      ${I?`<img src="${I}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(L=f.clubs)!=null&&L.logo_url?`<img src="${f.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${$};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${q};font-family:Arial Black,Arial">${h}</span>
        </div>
        ${E?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${S};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${O};font-family:Arial Black,Arial">${E}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${f.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.surname_real}</div>
        <div style="font-size:10px;color:${u?"#22c55e":"#999"};margin-top:1px">
          ${u?`✅ Vendu à ${((w=y.buyer)==null?void 0:w.pseudo)||"—"} · ${y.sold_at?new Date(y.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(y.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${y.price.toLocaleString("fr")}</div>
        ${u?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${y.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function x(){const y=document.getElementById("mkt-content"),f=document.getElementById("mkt-filters");if(y){if(f.style.display=s==="buy"?"flex":"none",s==="buy"){const _=p(d);y.innerHTML=_.length?`<div class="mkt-buy-grid">${_.map(b).join("")}</div>`:'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const _=c.filter(E=>E.status==="active").sort((E,u)=>new Date(u.listed_at)-new Date(E.listed_at)),h=c.filter(E=>E.status==="sold").sort((E,u)=>new Date(u.sold_at||u.listed_at)-new Date(E.sold_at||E.listed_at));y.innerHTML=(_.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${_.length})</div>`+_.map(g).join(""):"")+(h.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${h.length})</div>`+h.map(g).join(""):"")+(!_.length&&!h.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}y.querySelectorAll("[data-buy]").forEach(_=>_.addEventListener("click",()=>qa(_.dataset.buy,d,t,e))),y.querySelectorAll("[data-cancel]").forEach(_=>_.addEventListener("click",()=>Da(_.dataset.cancel,t,e)))}}t.querySelectorAll(".mkt-tab").forEach(y=>{y.addEventListener("click",()=>{s=y.dataset.tab,t.querySelectorAll(".mkt-tab").forEach(f=>{const _=f===y;f.style.background=_?"var(--green)":"var(--tile-bg)",f.style.color=_?"#fff":"var(--tile-fg-dim)",f.style.borderColor=_?"var(--green)":"var(--tile-border)"}),x()})});let m;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(y=>{var f;(f=document.getElementById(y))==null||f.addEventListener("input",()=>{clearTimeout(m),m=setTimeout(x,250)})}),x()}async function qa(t,e,i,o){const{state:r,toast:n,refreshProfile:a}=o,d=e.find(l=>l.id===t);if(!d)return;const c=d.price;if((r.profile.credits||0)<c){n("Crédits insuffisants","error");return}Ba(d,async()=>{const{error:l}=await v.rpc("buy_market_card",{p_listing_id:t,p_buyer_id:r.profile.id});if(l){n("Erreur achat : "+l.message,"error");return}await a();const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),n("✅ Carte achetée !","success"),await bo(i,o)})}function Ba(t,e){var a;const i=(a=t.card)==null?void 0:a.player,o=i?`${i.firstname} ${i.surname_real}`:"cette carte",r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${o} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${t.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(r);const n=d=>{r.remove(),d&&e()};r.querySelector("#buy-cancel").addEventListener("click",()=>n(!1)),r.querySelector("#buy-ok").addEventListener("click",()=>n(!0)),r.addEventListener("click",d=>{d.target===r&&n(!1)})}async function Da(t,e,i){const{toast:o}=i,{data:r}=await v.from("market_listings").select("card_id").eq("id",t).single();if(await v.from("market_listings").update({status:"cancelled"}).eq("id",t),r!=null&&r.card_id){const{count:n}=await v.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",r.card_id).eq("status","active");n||await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",r.card_id)}o("Annonce retirée","success"),bo(e,i)}async function Fa(t,e){var g,x,m,y,f;const{state:i,navigate:o}=e,r=((x=(g=e==null?void 0:e.state)==null?void 0:g.params)==null?void 0:x.tab)||"ranked";t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:n},{data:a},{data:d}]=await Promise.all([v.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").order("mmr",{ascending:!1}).limit(100),v.rpc("get_mini_league_leaderboard"),v.rpc("get_random_leaderboard")]);let c=r;const s=_=>_<3?["#D4A017","#a0a0a0","#cd7f32"][_]:"var(--green)",l=_=>_<3?"#000":"#fff";function p(){var E,u,I;const _=document.getElementById("rankings-legend");_&&(_.innerHTML=c==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const h=document.getElementById("rankings-list");if(h){if(c==="ranked"){const $=n||[];h.innerHTML=$.length>0?$.map((S,q)=>{const O=At(S.mmr??1e3),W=(S.ranked_wins||0)+(S.ranked_losses||0)+(S.ranked_draws||0),U=W>0?Math.round((S.ranked_wins||0)/W*100):0,L=S.id===i.profile.id,w=(S.placement_matches||0)<10;return`
          <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${L?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${q<3?["#D4A017","#a0a0a0","#cd7f32"][q]:"rgba(255,255,255,0.08)"};color:${q<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${q<3?"16":"13"}px">${q<3?["🥇","🥈","🥉"][q]:q+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${O.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${S.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${S.club_name} · ${O.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${w?"❓":O.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${O.color}">${w?"Placement":O.label}</div>
              ${w?"":`<div style="font-size:10px;color:var(--tile-fg-dim)">${U}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(c==="mini-league"){const $=a||[];h.innerHTML=$.length>0?$.map((S,q)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${S.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(q)};color:${l(q)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${q<3?"16":"13"}px">${q<3?["🥇","🥈","🥉"][q]:q+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${S.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${S.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${S.top1} 🥈${S.top2} 🥉${S.top3}</div>
            <div style="color:var(--tile-fg-dim)">${S.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const $=d||[];h.innerHTML=$.length>0?$.map((S,q)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${S.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(q)};color:${l(q)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${q<3?"16":"13"}px">${q<3?["🥇","🥈","🥉"][q]:q+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${S.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${S.club_name}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:16px;font-weight:900;color:#D4A017" title="Score de classement — tient compte du nombre de matchs joués">📊 ${S.wilson_score}</div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">${S.wins}/${S.total} V</div>
            <div style="font-size:9px;color:var(--green);font-weight:700;margin-top:2px">${S.win_pct}%</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}(E=document.getElementById("tab-ranked"))!=null&&E.style&&(document.getElementById("tab-ranked").style.cssText=b(c==="ranked")),(u=document.getElementById("tab-mini-league"))!=null&&u.style&&(document.getElementById("tab-mini-league").style.cssText=b(c==="mini-league")),(I=document.getElementById("tab-random"))!=null&&I.style&&(document.getElementById("tab-random").style.cssText=b(c==="random"))}}const b=_=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${_?"900":"400"};background:${_?"var(--green)":"rgba(255,255,255,0.06)"};color:${_?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-ranked" style="${b(c==="ranked")}">⚔️ Ranked</button>
        <button id="tab-mini-league" style="${b(c==="mini-league")}">🏆 Mini Leagues</button>
        <button id="tab-random" style="${b(c==="random")}">🎲 Random</button>
      </div>
      <div id="rankings-legend"></div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,p(),(m=document.getElementById("tab-ranked"))==null||m.addEventListener("click",()=>{c="ranked",p()}),(y=document.getElementById("tab-mini-league"))==null||y.addEventListener("click",()=>{c="mini-league",p()}),(f=document.getElementById("tab-random"))==null||f.addEventListener("click",()=>{c="random",p()})}async function Pa(t,e){var I,$,S,q;const{state:i,navigate:o,toast:r}=e,n=i.profile;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:d}]=await Promise.all([v.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),v.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",n.id).single()]);if(!d){r("Erreur chargement profil","error"),o("home");return}if(!a){const O=d.mmr??1e3,W=At(O);Oi(O);const U=Math.round(1e3+(O-1e3)*.5),L=At(U),{data:w}=await v.from("users").select("id, pseudo, club_name, mmr, rank_tier").order("mmr",{ascending:!1}).limit(100),F=(w||[]).findIndex(R=>R.id===d.id)+1;t.innerHTML=`
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
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;text-align:center;border:2px solid ${W.color}40">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Ton classement</div>
        <div style="font-size:44px;margin-bottom:2px">${W.emoji}</div>
        <div style="font-size:18px;font-weight:900;color:${W.color};letter-spacing:2px;text-transform:uppercase">${W.label}</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px">MMR ${O} ${F?`· #${F} au classement général`:""}</div>
      </div>

      <!-- Top 100 -->
      <div>
        <div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:8px">🏆 Classement général — Top 100</div>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto">
          ${(w||[]).map((R,se)=>{const ce=At(R.mmr??1e3),M=R.id===d.id;return`<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:10px;
              background:${M?"rgba(212,160,23,0.15)":"rgba(0,0,0,0.25)"};
              border:1px solid ${M?"#D4A017":"transparent"}">
              <div style="width:26px;text-align:center;font-size:12px;font-weight:900;color:rgba(255,255,255,0.5)">#${se+1}</div>
              <div style="font-size:18px">${ce.emoji}</div>
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${R.pseudo}</div>
                <div style="font-size:10px;color:rgba(255,255,255,0.4)">${R.club_name||"—"}</div>
              </div>
              <div style="font-size:13px;font-weight:900;color:${ce.color}">${R.mmr??1e3}</div>
            </div>`}).join("")||'<div style="text-align:center;color:rgba(255,255,255,0.4);font-size:12px;padding:16px">Aucun classement disponible.</div>'}
        </div>
      </div>

      <!-- Aperçu saison suivante -->
      <div style="background:rgba(0,0,0,0.3);border-radius:16px;padding:18px;border:1.5px dashed rgba(255,255,255,0.2)">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;text-align:center">📅 Aperçu — prochaine saison</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:24px">
          <div style="text-align:center;opacity:.6">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Actuel</div>
            <div style="font-size:24px">${W.emoji}</div>
            <div style="font-size:12px;font-weight:700;color:${W.color}">${O}</div>
          </div>
          <div style="font-size:20px;color:rgba(255,255,255,0.3)">→</div>
          <div style="text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Recalculé</div>
            <div style="font-size:28px">${L.emoji}</div>
            <div style="font-size:14px;font-weight:900;color:${L.color}">${U}</div>
          </div>
        </div>
        <div style="font-size:11px;color:rgba(255,255,255,0.35);text-align:center;margin-top:10px">Ton MMR est recalculé vers la moyenne à chaque nouvelle saison, pour repartir sur des bases équilibrées.</div>
      </div>
    </div>`,(I=document.getElementById("ranked-back"))==null||I.addEventListener("click",()=>o("home"));return}const c=d.mmr??1e3,s=d.mmr_deviation??350,l=d.mmr_volatility??.06,p=d.placement_matches??0,b=p<10,g=Math.max(0,10-p),x=At(c),m=Oi(c),y=Fi.findIndex(O=>O.id===x.id),f=Fi[y+1]||null,_={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},h=(d.ranked_wins||0)+(d.ranked_losses||0)+(d.ranked_draws||0),E=h>0?Math.round((d.ranked_wins||0)/h*100):0,u=Fi.map(O=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${x.id===O.id?1:.35};
      transform:${x.id===O.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${x.id===O.id?"28px":"20px"}">${O.emoji}</div>
      <div style="font-size:9px;color:${O.color};font-weight:${x.id===O.id?"900":"400"};letter-spacing:0.5px">${O.label.toUpperCase()}</div>
    </div>
  `).join("");t.innerHTML=`
  <div style="min-height:100%;background:${_[x.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

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
        ${f?`<span>${f.emoji} ${f.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${m}%;background:linear-gradient(90deg,${x.color},${x.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${m}% vers ${f?f.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${u}
    </div>

    <!-- Placement / Stats -->
    ${b?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${p}/10</div>
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
        <div style="font-size:20px;font-weight:900;color:#D4A017">${E}%</div>
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
  </div>`,($=document.getElementById("ranked-back"))==null||$.addEventListener("click",()=>o("home")),(S=document.getElementById("ranked-leaderboard-btn"))==null||S.addEventListener("click",()=>o("rankings",{tab:"ranked"})),(q=document.getElementById("ranked-play-btn"))==null||q.addEventListener("click",()=>{mt(),o("match",{matchMode:"ranked",rankedData:{mmr:c,rd:s,sigma:l,isPlacement:b}})})}async function Ra(t,{state:e,navigate:i,toast:o}){const r=e.profile;if(!r)return;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await v.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${r.id},away_id.eq.${r.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(n||[]).filter(l=>l.status==="finished"),c=(n||[]).filter(l=>l.status==="in_progress");function s(l){const p=l.home_id===r.id;p?l.home_score:l.away_score,p?l.away_score:l.home_score;const b=l.winner_id===r.id,g=l.home_score===l.away_score&&l.status==="finished",x=l.status!=="finished"?"…":g?"N":b?"V":"D",m=l.status!=="finished"||g?"#888":b?"#1A6B3C":"#c0392b";let y=a[l.mode]||l.mode;l.away_id===null&&!y.startsWith("IA")&&(y="IA");const _=l.home_id===r.id?l.away:l.home;let h;l.away_id===null?h=y:_?h=`${_.club_name||_.pseudo} (${_.pseudo})`:h="Adversaire";let E="";l.status==="in_progress"&&Date.now()-new Date(l.created_at).getTime()>3600*1e3&&(E=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const u=new Date(l.created_at),I=u.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+u.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),$=l.status==="finished"?`${l.home_score} - ${l.away_score}`:`${l.home_score||0} - ${l.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${E}</div>
        <div style="font-size:11px;color:var(--gray-600)">${y} · ${I}${l.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${$}</span>
        <span style="background:${m};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${x}</span>
      </div>
    </div>`}t.innerHTML=`
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

      ${d.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${d.map(s).join("")}
        </div>`:""}

      ${(n||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}An(Cn);const he={user:null,profile:null,page:"home",params:{}};function yt(t,e="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=t,o.className=`show ${e}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function Na(t,e,i=""){document.getElementById("modal-title").textContent=t,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Zi(){document.getElementById("modal-overlay").classList.add("hidden")}async function ni(){if(!he.user)return;const{data:t}=await v.from("users").select("*").eq("id",he.user.id).single();t&&(he.profile=t)}const Sn="mw_theme";function ai(){return localStorage.getItem(Sn)||"dark"}function Uo(t){var e;localStorage.setItem(Sn,t),wi(t),(e=he.profile)!=null&&e.id&&v.from("users").update({theme:t}).eq("id",he.profile.id).then(()=>{})}function wi(t){var e,i;document.documentElement.setAttribute("data-theme",t),t==="club"&&(document.documentElement.style.setProperty("--club-color1",((e=he.profile)==null?void 0:e.club_color1)||"#0a0f0a"),document.documentElement.style.setProperty("--club-color2",((i=he.profile)==null?void 0:i.club_color2)||"#080d08"))}function $t(t,e={}){he.page=t,he.params=e,Tn()}async function Tn(){var o,r,n,a;const t=document.getElementById("page-content");if(!t)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===he.page)});const e=document.getElementById("nav-credits");e&&he.profile&&(e.textContent=`💰 ${(he.profile.credits||0).toLocaleString("fr")}`);const i={state:he,navigate:$t,toast:yt,openModal:Na,closeModal:Zi,refreshProfile:ni};switch(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',he.page){case"home":await Pi(t,i);break;case"home2":await Pi(t,i);break;case"game":await vr(t,i);break;case"settings":await pn(t,i);break;case"collection":await Tr(t,i);break;case"decks":await Ki(t,i);break;case"boosters":await Un(t,i);break;case"ranked":await Pa(t,i);break;case"match":{const d=he.params&&he.params.matchMode||"vs_ai_easy";d==="random"?await Ji(t,i,!1):d==="ranked"?await Ji(t,i,!0):d==="friend"?await ba(t,i,(o=he.params)==null?void 0:o.friendId,(r=he.params)==null?void 0:r.friendName):d==="mini_league"||d==="mini-league"?await Oo(t,i,(n=he.params)==null?void 0:n.mlMatchId,(a=he.params)==null?void 0:a.leagueId):await Hr(t,i);break}case"market":await ja(t,i);break;case"rankings":await Fa(t,i);break;case"matches":await Ra(t,i);break;case"friends":await br(t,i);break;case"mini-league":await va(t,i);break;case"match-mini-league":{const d=he.params||{};await Oo(t,i,d.mlMatchId,d.leagueId);break}default:await Pi(t,i)}}function Ga(){var o,r;const t=document.getElementById("app"),e=he.profile;if(!e)return;const i="/icons/";t.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.08.01-1403" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",a=>{a.preventDefault(),$t(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>$t("home")),document.getElementById("nav-credits").addEventListener("click",()=>$t("boosters")),(o=document.getElementById("journal-btn"))==null||o.addEventListener("click",()=>Oa()),(r=document.getElementById("settings-btn"))==null||r.addEventListener("click",()=>$t("settings"))}async function Oa(){const{data:t}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const r=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}function Ha(t,{onPlay:e}){var o;const i="/icons/";t.style.cssText="",t.innerHTML=`
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
  </div>`,(o=t.querySelector("#pl-play-btn"))==null||o.addEventListener("click",e)}async function Ua(){wi(ai()),document.getElementById("modal-overlay").addEventListener("click",o=>{o.target===o.currentTarget&&Zi()}),document.getElementById("modal-close").addEventListener("click",Zi);const{data:{session:t}}=await v.auth.getSession();if(!t){Ko(),Ha(document.getElementById("app"),{onPlay:()=>$o(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:yt})});return}he.user=t.user,await ni(),wi(ai()),Ko();try{const{data:o}=await v.from("formation_links_overrides").select("formation, links"),r={};(o||[]).forEach(n=>{r[n.formation]=n.links}),Mn(r)}catch(o){console.warn("Impossible de charger les overrides de formation:",o)}if(!he.profile){qn(document.getElementById("app"),{state:he,navigate:async()=>{await ni(),wi(ai()),Gi()},toast:yt,refreshProfile:ni});return}v.rpc("heartbeat").then(()=>{}).catch(()=>{}),setInterval(()=>{v.rpc("heartbeat").then(()=>{}).catch(()=>{})},45e3);const e=Array.isArray(he.profile.pending_boosters)?he.profile.pending_boosters:[];if(!he.profile.onboarding_done&&e.length>0){er(document.getElementById("app"),{state:he,toast:yt,refreshProfile:ni,navigate:()=>{Gi(),setTimeout(()=>Io(he.profile,$t,yt),800)}});return}Gi(),new URLSearchParams(location.search).get("tutorial")==="1"?(history.replaceState({},"",location.pathname),setTimeout(()=>cn(he.profile,$t,yt),800)):setTimeout(()=>Io(he.profile,$t,yt),800),v.auth.onAuthStateChange(async(o,r)=>{o==="SIGNED_OUT"&&(he.user=null,he.profile=null,document.getElementById("app").innerHTML="",$o(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:yt}))})}function Ka(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function qi(){const t=document.getElementById("app");t&&(t.style.height=Ka()+"px")}window.addEventListener("resize",qi);window.addEventListener("orientationchange",()=>setTimeout(qi,150));window.visualViewport&&window.visualViewport.addEventListener("resize",qi);function Gi(){const t=()=>{var i;(i=he.user)!=null&&i.id&&v.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",he.user.id).then(()=>{})};t(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(t,6e4);const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",qi(),Ga(),Tn()}function Ko(){const t=document.getElementById("app-loader"),e=document.getElementById("app");e&&(e.style.display=""),t&&(t.classList.add("zoom-out"),setTimeout(()=>t.style.display="none",500))}function In(t){var o;const e=document.getElementById("app-loader");if(e&&(e.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${t||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(o=document.getElementById("boot-retry"))==null||o.addEventListener("click",()=>window.location.reload())}Ua().catch(t=>{console.error("Échec du démarrage:",t),In()});setTimeout(()=>{const t=document.getElementById("app-loader");t&&t.style.display!=="none"&&!t.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&In("Le serveur met trop de temps à répondre.")},12e3);
