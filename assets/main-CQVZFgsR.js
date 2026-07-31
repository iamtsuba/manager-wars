const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/special-cards-Bn7RhUuk.js","assets/special-cards-D_M6t_P4.css"])))=>i.map(i=>d[i]);
import{s as h,t as Ho,u as Uo,n as ut,g as Bt,p as nt,v as si,o as Ut,r as Ae,k as At,w as Gi,x as Ft,y as Ii,F as zi,z as Ko,T as Di,q as Tn,C as In,d as zn}from"./special-cards-Bn7RhUuk.js";const An="/";function _o(t,{navigate:e,toast:i}){let o="login";const r=()=>{var a,d,c,s,l,p,b;const n=o==="login";if(t.innerHTML=`
    <div style="
      position:fixed; inset:0; z-index:20;
      background:linear-gradient(180deg,#0a0a12 0%,#0f1a10 60%,#0a1628 100%);
      display:flex; flex-direction:column; align-items:center; justify-content:flex-start;
      padding:24px 16px; overflow-y:auto; overflow-x:hidden; -webkit-overflow-scrolling:touch;
    ">
      <!-- Particules décoratives -->
      <div style="position:absolute;inset:0;pointer-events:none;overflow:hidden">
        <div style="position:absolute;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(26,107,60,0.15),transparent 70%);top:-80px;left:-80px"></div>
        <div style="position:absolute;width:250px;height:250px;border-radius:50%;background:radial-gradient(circle,rgba(212,160,23,0.1),transparent 70%);bottom:-60px;right:-60px"></div>
      </div>

      <!-- Logo -->
      <div style="margin-bottom:28px;text-align:center;animation:authFadeIn .5s ease">
        <img src="${An}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:8px;letter-spacing:1px">LE JEU DE CARTES FOOTBALL STRATÉGIQUE</div>
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
            flex:1;padding:16px;border:none;background:${n?"rgba(26,107,60,0.3)":"transparent"};
            color:${n?"#fff":"rgba(255,255,255,0.4)"};
            font-size:14px;font-weight:${n?"900":"600"};cursor:pointer;
            border-bottom:2px solid ${n?"#22c55e":"transparent"};
            transition:all .2s;
          ">Connexion</button>
          <button id="tab-reg-btn" style="
            flex:1;padding:16px;border:none;background:${n?"transparent":"rgba(26,107,60,0.3)"};
            color:${n?"rgba(255,255,255,0.4)":"#fff"};
            font-size:14px;font-weight:${n?"600":"900"};cursor:pointer;
            border-bottom:2px solid ${n?"transparent":"#22c55e"};
            transition:all .2s;
          ">Inscription</button>
        </div>

        <div style="padding:24px">
          ${n?`
          <!-- CONNEXION -->
          <div style="display:flex;flex-direction:column;gap:14px">
            <div>
              <label style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.5);display:block;margin-bottom:6px;letter-spacing:.5px">EMAIL</label>
              <input type="email" id="login-email" placeholder="manager@example.com" autocomplete="email" style="
                width:100%;box-sizing:border-box;padding:12px 14px;
                background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.12);
                border-radius:10px;font-size:15px;color:#fff;outline:none;
                transition:border-color .2s;
              " onfocus="this.style.borderColor='#22c55e'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'"
              >
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.5);display:block;margin-bottom:6px;letter-spacing:.5px">MOT DE PASSE</label>
              <input type="password" id="login-password" placeholder="••••••••" autocomplete="current-password" style="
                width:100%;box-sizing:border-box;padding:12px 14px;
                background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.12);
                border-radius:10px;font-size:15px;color:#fff;outline:none;
                transition:border-color .2s;
              " onfocus="this.style.borderColor='#22c55e'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'"
              >
            </div>
            <div id="login-error" style="font-size:12px;color:#f87171;min-height:16px;text-align:center"></div>
            <button id="login-btn" style="
              width:100%;padding:14px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#1A6B3C,#22c55e);
              color:#fff;font-size:15px;font-weight:900;cursor:pointer;
              box-shadow:0 4px 16px rgba(34,197,94,0.3);
              transition:transform .1s,box-shadow .1s;
            " onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''" ontouchstart="this.style.transform='scale(0.98)'" ontouchend="this.style.transform=''">
              ⚽ Se connecter
            </button>
          </div>
          `:`
          <!-- INSCRIPTION -->
          <div style="display:flex;flex-direction:column;gap:14px">
            <div>
              <label style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.5);display:block;margin-bottom:6px;letter-spacing:.5px">EMAIL</label>
              <input type="email" id="reg-email" placeholder="manager@example.com" autocomplete="email" style="
                width:100%;box-sizing:border-box;padding:12px 14px;
                background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.12);
                border-radius:10px;font-size:15px;color:#fff;outline:none;
              " onfocus="this.style.borderColor='#22c55e'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'"
              >
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.5);display:block;margin-bottom:6px;letter-spacing:.5px">MOT DE PASSE (min. 6 caractères)</label>
              <input type="password" id="reg-password" placeholder="••••••••" autocomplete="new-password" style="
                width:100%;box-sizing:border-box;padding:12px 14px;
                background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.12);
                border-radius:10px;font-size:15px;color:#fff;outline:none;
              " onfocus="this.style.borderColor='#22c55e'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'"
              >
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.5);display:block;margin-bottom:6px;letter-spacing:.5px">CONFIRMER LE MOT DE PASSE</label>
              <input type="password" id="reg-confirm" placeholder="••••••••" autocomplete="new-password" style="
                width:100%;box-sizing:border-box;padding:12px 14px;
                background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.12);
                border-radius:10px;font-size:15px;color:#fff;outline:none;
              " onfocus="this.style.borderColor='#22c55e'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'"
              >
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.5);display:block;margin-bottom:6px;letter-spacing:.5px">CODE D'ACCÈS</label>
              <input type="password" id="reg-access-code" placeholder="Code fourni par l'administrateur" autocomplete="off" style="
                width:100%;box-sizing:border-box;padding:12px 14px;
                background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.12);
                border-radius:10px;font-size:15px;color:#fff;outline:none;
              " onfocus="this.style.borderColor='#22c55e'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'"
              >
              <div id="access-code-status" style="font-size:11px;margin-top:5px;min-height:14px"></div>
            </div>
            <div id="reg-error" style="font-size:12px;color:#f87171;min-height:16px;text-align:center"></div>
            <button id="reg-btn" disabled style="
              width:100%;padding:14px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#1A6B3C,#22c55e);
              color:#fff;font-size:15px;font-weight:900;cursor:not-allowed;
              box-shadow:0 4px 16px rgba(34,197,94,0.3);
              opacity:0.45;transition:opacity .2s;
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
      <div style="display:flex;gap:12px;margin-top:24px;animation:authFadeIn .5s ease .2s both">
        <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:6px 14px;font-size:11px;color:rgba(255,255,255,0.4)">⚽ 100% Gratuit</div>
        <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:6px 14px;font-size:11px;color:rgba(255,255,255,0.4)">🃏 Cartes uniques</div>
        <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:6px 14px;font-size:11px;color:rgba(255,255,255,0.4)">🏆 Classements</div>
      </div>
    </div>
    <style>
      @keyframes authFadeIn { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:none } }
      #login-email::placeholder,#login-password::placeholder,
      #reg-email::placeholder,#reg-password::placeholder,#reg-confirm::placeholder
        { color:rgba(255,255,255,0.2) }
    </style>`,(a=document.getElementById("tab-login-btn"))==null||a.addEventListener("click",()=>{o="login",r()}),(d=document.getElementById("tab-reg-btn"))==null||d.addEventListener("click",()=>{o="register",r()}),n)(c=document.getElementById("login-password"))==null||c.addEventListener("keydown",g=>{var x;g.key==="Enter"&&((x=document.getElementById("login-btn"))==null||x.click())}),(s=document.getElementById("login-btn"))==null||s.addEventListener("click",async()=>{const g=document.getElementById("login-email").value.trim(),x=document.getElementById("login-password").value,f=document.getElementById("login-error");if(f.textContent="",!g||!x){f.textContent="Remplissez tous les champs.";return}const y=document.getElementById("login-btn");y.textContent="⏳ Connexion…",y.disabled=!0;const{error:u}=await h.auth.signInWithPassword({email:g,password:x});if(y.textContent="⚽ Se connecter",y.disabled=!1,u){f.textContent=u.message.includes("Invalid")?"Email ou mot de passe incorrect.":u.message;return}window.location.reload()});else{(l=document.getElementById("reg-confirm"))==null||l.addEventListener("keydown",f=>{var y;f.key==="Enter"&&((y=document.getElementById("reg-btn"))==null||y.click())});let g=null,x=!1;(p=document.getElementById("reg-access-code"))==null||p.addEventListener("input",f=>{const y=f.target.value,u=document.getElementById("access-code-status"),w=document.getElementById("reg-btn");if(clearTimeout(g),x=!1,w&&(w.disabled=!0,w.style.opacity="0.45",w.style.cursor="not-allowed"),!y){u&&(u.textContent="");return}u&&(u.textContent="⏳ Vérification…",u.style.color="rgba(255,255,255,0.4)"),g=setTimeout(async()=>{const{data:v,error:E}=await h.rpc("check_signup_password",{input_password:y});if(E){u&&(u.textContent="Erreur de vérification.",u.style.color="#f87171");return}x=!!v,u&&(u.textContent=x?"✅ Code valide":"❌ Code incorrect",u.style.color=x?"#4ade80":"#f87171"),w&&(w.disabled=!x,w.style.opacity=x?"1":"0.45",w.style.cursor=x?"pointer":"not-allowed")},400)}),(b=document.getElementById("reg-btn"))==null||b.addEventListener("click",async()=>{var I;const f=document.getElementById("reg-email").value.trim(),y=document.getElementById("reg-password").value,u=document.getElementById("reg-confirm").value,w=((I=document.getElementById("reg-access-code"))==null?void 0:I.value)||"",v=document.getElementById("reg-error");if(v.textContent="",!f||!y||!u){v.textContent="Remplissez tous les champs.";return}if(!f.includes("@")||!f.includes(".")){v.textContent="Adresse email invalide.";return}if(y.length<6){v.textContent="Mot de passe trop court (min. 6 caractères).";return}if(y!==u){v.textContent="Les mots de passe ne correspondent pas.";return}const{data:E}=await h.rpc("check_signup_password",{input_password:w});if(!E){v.textContent="Code d'accès incorrect.";return}const m=document.getElementById("reg-btn");m.textContent="⏳ Création…",m.disabled=!0;const{data:T,error:$}=await h.auth.signUp({email:f,password:y});if(m.textContent="🚀 Créer mon compte",m.disabled=!1,$){$.message.includes("already registered")||$.message.includes("already exists")||$.message.includes("User already")?v.textContent="Un compte existe déjà avec cette adresse email.":v.textContent=$.message;return}if(T!=null&&T.user&&Array.isArray(T.user.identities)&&T.user.identities.length===0){v.textContent="Un compte existe déjà avec cette adresse email.";return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),o="login",r(),setTimeout(()=>{const B=document.getElementById("login-email");B&&(B.value=f)},50)})}};r()}function Mn(t,{state:e,navigate:i,toast:o,refreshProfile:r}){let n="#1A6B3C",a="#D4A017";t.innerHTML=`
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
  `;function d(){var x;const s=document.getElementById("logo-preview"),l=document.getElementById("logo-initials"),p=((x=document.getElementById("setup-club"))==null?void 0:x.value)||"MW",b=p.trim().split(" ").filter(Boolean),g=b.length>=2?(b[0][0]+b[1][0]).toUpperCase():p.slice(0,2).toUpperCase();s&&(s.style.background=a,s.style.borderColor=n),l&&(l.textContent=g,l.style.color=n)}document.getElementById("color1").addEventListener("input",s=>{n=s.target.value,document.getElementById("swatch1").style.background=n,d()}),document.getElementById("color2").addEventListener("input",s=>{a=s.target.value,document.getElementById("swatch2").style.background=a,d()});function c(s){document.querySelectorAll(".setup-step").forEach(l=>l.classList.remove("active")),document.getElementById(`step-${s}`).classList.add("active"),document.getElementById("step-num").textContent=s,document.getElementById("progress-fill").style.width=`${Math.round(s/3*100)}%`,s===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("step1-error");if(l.textContent="",s.length<3){l.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:p}=await h.from("users").select("id").eq("pseudo",s).maybeSingle();if(p){l.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const s=document.getElementById("setup-club").value.trim(),l=document.getElementById("step2-error");if(l.textContent="",s.length<2){l.textContent="Nom trop court (min. 2 caractères).";return}const{data:p}=await h.from("users").select("id").eq("club_name",s).maybeSingle();if(p){l.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("setup-club").value.trim(),p=document.getElementById("step3-error"),b=document.getElementById("step3-finish");p.textContent="",b.disabled=!0,b.textContent="Création en cours…";try{const{error:g}=await h.from("users").insert({id:e.user.id,pseudo:s,club_name:l,club_color1:n,club_color2:a,credits:15e3});if(g)throw g;await Cn(e.user.id),await r(),o(`Bienvenue ${s} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){p.textContent=g.message,b.disabled=!1,b.textContent="🚀 Créer mon profil !"}})}async function Cn(t){const e=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1},{type:"stadium",count:1}];try{await h.from("users").update({pending_boosters:e,onboarding_done:!1,first_booster_opened:!1}).eq("id",t)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const jn="modulepreload",qn=function(t){return"/"+t},ko={},Vo=function(e,i,o){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),d=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(i.map(c=>{if(c=qn(c),c in ko)return;ko[c]=!0;const s=c.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${l}`))return;const p=document.createElement("link");if(p.rel=s?"stylesheet":jn,s||(p.as="script"),p.crossOrigin="",p.href=c,d&&p.setAttribute("nonce",d),document.head.appendChild(p),s)return new Promise((b,g)=>{p.addEventListener("load",b),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(a){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=a,window.dispatchEvent(d),!d.defaultPrevented)throw a}return r.then(a=>{for(const d of a||[])d.status==="rejected"&&n(d.reason);return e().catch(n)})},Yo="mw_sound_volume";function Zi(){const t=localStorage.getItem(Yo);if(t===null)return 100;const e=parseInt(t,10);return Number.isFinite(e)?Math.max(0,Math.min(100,e)):100}function Bn(t){localStorage.setItem(Yo,String(Math.max(0,Math.min(100,Math.round(t)))))}function eo(){return Zi()===0}function wi(t){return Math.max(0,Math.min(1,t*(Zi()/100)))}function to(t,e=1){if(eo())return null;try{const i=new Audio(t);return i.volume=wi(e),i.play().catch(()=>{}),i}catch{return null}}let vt=null,Oi=null,$o=.3;function Wo(t,e=.3){if($o=e,vt&&Oi===t&&!vt.paused){vt.volume=wi($o);return}if(Ot(),!eo())try{const i=new Audio(t);i.loop=!0,i.volume=wi(e),i.play().catch(()=>{}),vt=i,Oi=t}catch{}}function Ot(){if(vt)try{vt.pause(),vt.currentTime=0}catch{}vt=null,Oi=null}let ti=null;function Xo(t,e=.6){if(Ve(),!eo())try{const i=new Audio(t);i.volume=wi(e),i.play().catch(()=>{}),ti=i}catch{}}function Ve(){if(ti)try{ti.pause(),ti.currentTime=0}catch{}ti=null}async function Jo(t=null){const e=new Date().toISOString().slice(0,10),{data:i}=await h.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const o=i.filter(a=>!(a.available_from&&e<a.available_from||a.available_until&&e>a.available_until));if(!o.length)return[];let r=o;if(t){const a=o.filter(d=>d.max_per_user!=null);if(a.length){const{data:d}=await h.from("booster_claims").select("booster_id").eq("user_id",t).in("booster_id",a.map(s=>s.id)),c={};(d||[]).forEach(s=>{c[s.booster_id]=(c[s.booster_id]||0)+1}),r=o.filter(s=>s.max_per_user==null?!0:(c[s.id]||0)<s.max_per_user)}}if(!r.length)return[];const{data:n}=await h.from("booster_drop_rates").select("*").in("booster_id",r.map(a=>a.id)).order("sort_order");return r.map(a=>({...a,rates:(n||[]).filter(d=>d.booster_id===a.id)}))}async function Dn(t,e){const{data:i}=await h.from("booster_configs").select("max_per_user").eq("id",e).single();i!=null&&i.max_per_user&&await h.from("booster_claims").insert({user_id:t,booster_id:e})}function Fn(t){if(!(t!=null&&t.length))return null;const e=t.reduce((o,r)=>o+Number(r.percentage),0);let i=Math.random()*e;for(const o of t)if(i-=Number(o.percentage),i<=0)return o;return t[t.length-1]}const Qo=()=>Object.keys(ut),Pn=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Hi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Rn(t){const e=t.player;if(!e)return"";const i=t.evolution_bonus||0;return Ae({...e,_evolution_bonus:i},{width:140})}function io(t){var r;const e={};(t.rates||[]).forEach(n=>{e[n.card_type]=(e[n.card_type]||0)+Number(n.percentage||0)});const i=((r=Object.entries(e).sort((n,a)=>a[1]-n[1])[0])==null?void 0:r[0])||"player",o=t.image_url||"booster-players.png";return{id:t.id,img:"/icons/"+o,name:t.name,sub:`${t.card_count} carte(s)`,cost:t.price_type==="credits"&&t.price_credits||0,costLabel:t.price_type==="credits"?`${(t.price_credits||0).toLocaleString("fr")} crédits`:t.price_type==="pub"?"1 pub":"Gratuit",cardCount:t.card_count||5,type:i,isPub:t.price_type==="pub",rates:t.rates||[],allow_duplicates:t.allow_duplicates!==!1,_boosterId:t.id,_raw:t}}async function Nn(t,e,i,o){if(t.reward_type==="credits"){const r=(e.credits||0)+(t.credits_amount||0),{error:n}=await h.from("users").update({credits:r}).eq("id",e.id);if(n)throw n;return e.credits=r,{type:"credits",amount:t.credits_amount}}if(t.reward_type==="card"){const{data:r}=await h.from("players").select("firstname, surname_real, rarity").eq("id",t.player_id).single(),{error:n}=await h.from("cards").insert({owner_id:e.id,player_id:t.player_id,card_type:"player"});if(n)throw n;return{type:"card",player:r}}if(t.reward_type==="booster"){const{data:r}=await h.from("booster_configs").select("*").eq("id",t.booster_config_id).single(),{data:n}=await h.from("booster_drop_rates").select("*").eq("booster_id",t.booster_config_id);if(!r)throw new Error("Booster introuvable (peut-être supprimé depuis).");const a=io({...r,rates:n});let d=[];return a.type==="formation"?d=await ro(e,0):a.type==="game_changer"?d=await no(e,a.cardCount,0):a.type==="player"?d=await oo(e,a.cardCount,0):d=await _i(e,{...a,cost:0}),{type:"booster",name:r.name,cards:d,boosterUI:a}}throw new Error("Type de récompense inconnu.")}async function Gn(t,{state:e,navigate:i,toast:o}){var p,b,g;Yt(i,e.profile,"boosters","/icons/",o);const r=((p=e.profile)==null?void 0:p.credits)||0;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let n=[];try{n=(await Jo((b=e.user)==null?void 0:b.id)).map(io)}catch(x){console.warn("Erreur chargement boosters DB, fallback hardcodé",x)}n.length||(n=Pn.map(x=>({...x,rates:[],isPub:x.id==="players_pub"})));const a=await h.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.profile.id).then(x=>x.data||[]),d=new Set(a.filter(x=>x.card_type==="stadium").map(x=>x.stadium_id)),c=new Set(a.filter(x=>x.card_type==="formation").map(x=>x.formation)),s=new Set(a.filter(x=>x.card_type==="game_changer").map(x=>x.gc_type)),l={};for(const x of n){if(x.allow_duplicates!==!1||!((g=x.rates)!=null&&g.length))continue;const f=[...new Set((x.rates||[]).map(u=>u.card_type))];let y=!1;for(const u of f)if(u==="stadium"){const{data:w}=await h.from("stadium_definitions").select("id");if((w||[]).some(v=>!d.has(v.id))){y=!0;break}}else if(u==="game_changer"){const{data:w}=await h.from("gc_definitions").select("name").eq("is_active",!0);if((w||[]).some(v=>!s.has(v.name))){y=!0;break}}else if(u==="formation"){const{FORMATION_LINKS:w}=await Vo(async()=>{const{FORMATION_LINKS:v}=await import("./special-cards-Bn7RhUuk.js").then(E=>E.G);return{FORMATION_LINKS:v}},__vite__mapDeps([0,1]));if(Object.keys(w).some(v=>!c.has(v))){y=!0;break}}else{y=!0;break}y||(l[x.id]=!0)}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${r.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${n.map(x=>{const f=x.cost===0||r>=x.cost,y=l[x.id]===!0;return`<div class="booster-card ${!f||y?"disabled":""}" data-booster="${x.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${x.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${x.img}" alt="${x.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${x.name}</div>
            <div class="desc">${x.sub}</div>
            <div class="cost">${x.costLabel}</div>
            ${f?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
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
  </div>`,t.querySelectorAll(".booster-card:not(.disabled)").forEach(x=>{x.addEventListener("click",async()=>{const f=n.find(y=>y.id===x.dataset.booster);if(f){x.style.opacity="0.5",x.style.pointerEvents="none";try{await On(f,{state:e,toast:o,navigate:i,container:t})}catch(y){o(y.message,"error"),x.style.opacity="",x.style.pointerEvents=""}}})}),t.querySelectorAll(".booster-info-btn").forEach(x=>{x.addEventListener("click",f=>{f.stopPropagation();const y=n.find(u=>u.id===x.dataset.boosterId);Yn(y)})})}async function On(t,{state:e,toast:i,navigate:o,container:r}){var p,b;if(t.cost>0&&e.profile.credits<t.cost){i("Crédits insuffisants","error");return}if(t.isPub){if(!await Ho("pub_mode")){Uo();return}await Xn()}const{data:n}=await h.from("cards").select("card_type, player_id, formation").eq("owner_id",e.profile.id),a=new Set((n||[]).filter(g=>g.card_type==="player").map(g=>g.player_id)),d=new Set((n||[]).filter(g=>g.card_type==="formation").map(g=>g.formation));let c=[],s=null;try{if((p=t.rates)!=null&&p.length)c=await _i(e.profile,t);else{const g=t.type||"player";g==="player"?c=await oo(e.profile,t.cardCount,t.cost):g==="game_changer"?c=await no(e.profile,t.cardCount,t.cost):g==="formation"?c=await ro(e.profile,t.cost):c=await _i(e.profile,t)}}catch(g){s=g.message||String(g),console.error("[Booster] Erreur:",g)}if(c!=null&&c.length&&t._boosterId&&await Dn(e.user.id,t._boosterId),!(c!=null&&c.length)){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",g.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${s||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(g),(b=g.querySelector("#anim-close-err"))==null||b.addEventListener("click",()=>g.remove());return}c.forEach(g=>{g.card_type==="player"&&g.player?g.isDuplicate=a.has(g.player.id):g.card_type==="formation"&&(g.isDuplicate=d.has(g.formation))});const{data:l}=await h.from("users").select("*").eq("id",e.profile.id).single();l&&(e.profile=l),ao(c,t,o)}function Hn(){const t=Math.random()*100;return t<.5?"legende":t<2?"special":t<10?"normal_high":"normal_low"}function ht(t){return Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Un(t,e){let i;switch(e){case"legende":i=t.filter(o=>o.rarity==="legende"),i.length||(i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=t.filter(o=>ht(o)>=6));break;case"special":i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=t.filter(o=>ht(o)>=6));break;case"normal_high":i=t.filter(o=>o.rarity==="normal"&&ht(o)>=6),i.length||(i=t.filter(o=>ht(o)>=6));break;default:i=t.filter(o=>o.rarity==="normal"&&ht(o)>=1&&ht(o)<=5),i.length||(i=t.filter(o=>o.rarity==="normal"));break}return i.length||(i=t),i[Math.floor(Math.random()*i.length)]}async function _i(t,e){if(e.cost>0){const{error:b}=await h.from("users").update({credits:t.credits-e.cost}).eq("id",t.id);if(b)throw b;t.credits-=e.cost,Wt(t.credits)}const i=e.allow_duplicates!==!1;let o=[];const{data:r,error:n}=await h.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.id);if(n){const{data:b}=await h.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",t.id);o=b||[]}else o=r||[];const a=new Set(o.filter(b=>b.card_type==="player").map(b=>b.player_id)),d=new Set(o.filter(b=>b.card_type==="formation").map(b=>b.formation)),c=new Set(o.filter(b=>b.card_type==="game_changer").map(b=>b.gc_type)),s=new Set(o.filter(b=>b.card_type==="stadium").map(b=>b.stadium_id).filter(Boolean)),l=new Set,p=[];for(let b=0;b<(e.cardCount||5);b++){const g=Fn(e.rates);if(g){if(g.card_type==="player"){const x=$=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[$]||$,f=g.rarity?x(g.rarity):null;let y=h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);f&&(y=y.eq("rarity",f));const{data:u}=await y;let w=u||[];if((g.note_min||g.note_max)&&(w=w.filter($=>{const I=Math.max(Number($.note_g)||0,Number($.note_d)||0,Number($.note_m)||0,Number($.note_a)||0);return(!g.note_min||I>=g.note_min)&&(!g.note_max||I<=g.note_max)})),w.length||(g.note_min||g.note_max?(w=u||[],console.warn("[Booster] Aucun joueur avec note",g.note_min,"-",g.note_max,"— fallback rareté uniquement")):w=u||[]),!w.length)continue;let v=w.filter($=>!l.has($.id));if(i)v.length||(v=w);else if(v=v.filter($=>!a.has($.id)),!v.length)continue;const E=v[Math.floor(Math.random()*v.length)];l.add(E.id);const m=a.has(E.id),{data:T}=await h.from("cards").insert({owner_id:t.id,player_id:E.id,card_type:"player"}).select().single();T&&(p.push({...T,player:E,isDuplicate:m}),h.rpc("record_transfer",{p_card_id:T.id,p_player_id:E.id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(g.card_type==="game_changer"){const{data:x}=await h.from("gc_definitions").select("id,name,color,effect,image_url,gc_type").eq("is_active",!0).eq("gc_type","game_changer"),f=x!=null&&x.length?x:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],y=i?f:f.filter(E=>!c.has(E.name));if(!i&&!y.length)continue;const u=y[Math.floor(Math.random()*y.length)],w=u.name,{data:v}=await h.from("cards").insert({owner_id:t.id,card_type:"game_changer",gc_type:w,gc_definition_id:u.id||null}).select().single();v&&p.push({...v,_gcDef:u})}else if(g.card_type==="formation"){const x=Qo(),f=i?x:x.filter(v=>!d.has(v));if(!i&&!f.length)continue;const y=f[Math.floor(Math.random()*f.length)],u=d.has(y),{data:w}=await h.from("cards").insert({owner_id:t.id,card_type:"formation",formation:y}).select();w!=null&&w[0]&&p.push({...w[0],isDuplicate:u})}else if(g.card_type==="stadium"){const{data:x,error:f}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(f){console.error("[Booster] stadium_definitions:",f.message);continue}if(!(x!=null&&x.length)){console.warn("[Booster] Aucun stade en DB");continue}const y=i?x:x.filter(E=>!s.has(E.id));if(!i&&!y.length)continue;const u=y[Math.floor(Math.random()*y.length)],{data:w,error:v}=await h.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:u.id}).select("id,card_type,stadium_id").single();if(v){console.error("[Booster] insert stadium card:",v.message);continue}w&&p.push({...w,rarity:"normal",_stadiumDef:u})}}}return p}async function oo(t,e,i){if(i>0){const{error:s}=await h.from("users").update({credits:t.credits-i}).eq("id",t.id);if(s)throw s;t.credits-=i,Wt(t.credits)}const{data:o}=await h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const r=o.filter(s=>s.job==="GK"),n=o.filter(s=>s.job!=="GK"),a=!t.first_booster_opened&&r.length>0,d=[];for(let s=0;s<e;s++){const l=s===0&&a?r:s===0?n:o,p=Hn(),b=Un(l,p);b&&d.push(b)}a&&await h.from("users").update({first_booster_opened:!0}).eq("id",t.id);const{data:c}=await h.from("cards").insert(d.map(s=>({owner_id:t.id,player_id:s.id,card_type:"player"}))).select();return(c||[]).forEach((s,l)=>{h.rpc("record_transfer",{p_card_id:s.id,p_player_id:d[l].id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((s,l)=>({...c[l],player:s}))}async function no(t,e,i){const{error:o}=await h.from("users").update({credits:t.credits-i}).eq("id",t.id);if(o)throw o;t.credits-=i,Wt(t.credits);const{data:r}=await h.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),n=r!=null&&r.length?r:Object.keys(Hi).map(p=>({name:p,gc_type:"game_changer"})),a=Array.from({length:e},()=>n[Math.floor(Math.random()*n.length)]),d=a.map(p=>({owner_id:t.id,card_type:"game_changer",gc_type:p.name,gc_definition_id:p.id||null})),{data:c,error:s}=await h.from("cards").insert(d).select();return s&&console.error("[Booster GC] Erreur insert:",s.message,s),(c||[]).map((p,b)=>({...p,_gcDef:a[b]||null}))}async function ro(t,e){const{error:i}=await h.from("users").update({credits:t.credits-e}).eq("id",t.id);if(i)throw i;t.credits-=e,Wt(t.credits);const{data:o}=await h.from("cards").select("formation").eq("owner_id",t.id).eq("card_type","formation"),r=new Set((o||[]).map(l=>l.formation)),n=Qo(),a=n[Math.floor(Math.random()*n.length)],d=r.has(a),{data:c,error:s}=await h.from("cards").insert({owner_id:t.id,card_type:"formation",formation:a}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),(c||[]).map(l=>({...l,isDuplicate:d}))}async function Kn(t,e){const{data:i}=await h.from("cards").select("stadium_id").eq("owner_id",t.id).eq("card_type","stadium"),o=new Set((i||[]).map(s=>s.stadium_id).filter(Boolean)),{data:r}=await h.from("stadium_definitions").select("*");if(!(r!=null&&r.length))throw new Error("Aucun stade configuré en base.");const n=r[Math.floor(Math.random()*r.length)],a=o.has(n.id),{data:d,error:c}=await h.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:n.id}).select();return c&&console.error("[Booster Stade] Erreur insert:",c.message,c),(d||[]).map(s=>({...s,isDuplicate:a,_stadiumDef:n}))}function ao(t,e,i,o=null){var K,L;if(!t||t.length===0){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",_.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(_),(K=_.querySelector("#anim-close-err"))==null||K.addEventListener("click",()=>_.remove());return}t=[...t].sort((_,N)=>{const G=_.player?ht(_.player):-1;return(N.player?ht(N.player):-1)-G});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let n=!1;const a=document.getElementById("pack-cut-zone"),d=document.getElementById("pack-blade");let c=!1;const s=_=>_.touches&&_.touches[0]?_.touches[0].clientX:_.clientX;function l(_){n||(c=!0,d.style.opacity="1",p(_))}function p(_){if(!c||n)return;const N=a.getBoundingClientRect(),G=s(_)-N.left,le=Math.max(0,Math.min(1,G/N.width));d.style.width=le*N.width+"px",le>=.82&&g()}function b(){n||(c=!1,d.style.transition="width .2s ease, opacity .2s ease",d.style.width="0",d.style.opacity="0",setTimeout(()=>{n||(d.style.transition="")},220))}function g(){var N;if(n)return;n=!0,c=!1,d.style.width="100%",d.style.opacity="1",(N=document.getElementById("cut-flash"))==null||N.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const _=document.getElementById("cut-hint");_&&(_.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{d.style.opacity="0",document.getElementById("pack-phase").style.display="none",u(0)},620)}a.addEventListener("pointerdown",l),window.addEventListener("pointermove",p),window.addEventListener("pointerup",b),a.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchmove",p,{passive:!0}),window.addEventListener("touchend",b);let x=0,f=!1;const y=new Set;function u(_){x=_,document.getElementById("reveal-phase").style.display="flex",w(),v(_,0),I()}function w(){const _=document.getElementById("card-dots");_&&(_.innerHTML=t.map((N,G)=>`<div class="card-dot" data-i="${G}" style="width:8px;height:8px;border-radius:50%;background:${G===x?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),_.querySelectorAll(".card-dot").forEach(N=>N.addEventListener("click",()=>m(parseInt(N.dataset.i)))))}function v(_,N){var xe,de;const G=t[_],le=document.getElementById("card-counter"),pe=document.getElementById("card-track");le&&(le.textContent=`Carte ${_+1} / ${t.length}`);const M=document.getElementById("reveal-btns");M&&(M.style.display=_===t.length-1?"flex":"none");const O=G.card_type==="player"&&((xe=G.player)==null?void 0:xe.rarity)==="legende",ue=!y.has(_);if(y.add(_),G.card_type==="player"&&G.player){const j=G.player,V=j.job||"ATT";(Number(V==="GK"?j.note_g:V==="DEF"?j.note_d:V==="MIL"?j.note_m:j.note_a)||0)+(G.evolution_bonus||0)}const ge=j=>{pe.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${O?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Vn(G)}</div>
          ${G.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const V=document.getElementById("current-card-wrap");N!==0?(V.style.transition="none",V.style.transform=`translateX(${N>0?100:-100}%)`,requestAnimationFrame(()=>{V.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",V.style.transform="translateX(0)"})):V.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),j||O?Y():W(),w()};ue&&((de=G.player)==null?void 0:de.rarity)==="legende"&&G.card_type==="player"&&G.player?E(G,()=>ge(!0)):ge(!1)}function E(_,N){var ae;f=!0;const G=_.player,le=`https://flagsapi.com/${G.country_code}/flat/64.png`,pe=(ae=G.clubs)==null?void 0:ae.logo_url,M=Bt(G),O=G.job||"ATT",ue=Number(O==="GK"?G.note_g:O==="DEF"?G.note_d:O==="MIL"?G.note_m:G.note_a)||0,ge=_.evolution_bonus||0,xe=ue+ge,de=G.rarity==="legende",j=xe>=18,V=document.getElementById("walkout-overlay"),re=document.getElementById("walkout-stage");if(!V||!re){f=!1,N();return}let te=null;de&&(te=to("/sounds/Legendary.mp3",.8)),V.style.display="flex";const X=()=>{const ce=re.firstElementChild;ce&&(ce.classList.remove("wo-in"),ce.classList.add("wo-out"))},P=1800,J=400;re.innerHTML=`<img class="wo-in" src="${le}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(X,P),setTimeout(()=>{var ce;re.innerHTML=pe?`<img class="wo-in" src="${pe}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((ce=G.clubs)==null?void 0:ce.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},P+J),setTimeout(X,P*2+J),setTimeout(()=>{re.innerHTML=M?`<img class="wo-in" src="${M}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(P+J)*2),setTimeout(X,(P+J)*2+P);const H=j?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[O]||"#fff";setTimeout(()=>{re.innerHTML=`<div class="wo-in" style="
        font-size:${j?"120px":"90px"};font-weight:900;color:${H};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${H}, 0 0 60px ${H};
        ${j?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${xe}
      </div>`,j&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(P+J)*3),setTimeout(X,(P+J)*3+P),setTimeout(()=>{V.style.display="none",re.innerHTML="",f=!1,te&&!de&&te.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),N()},(P+J)*4)}function m(_){if(f||_<0||_>=t.length||_===x)return;const N=_>x?1:-1;x=_,v(_,N)}function T(){m(x+1)}function $(){m(x-1)}function I(){const _=document.getElementById("card-viewport");if(!_||_._swipeBound)return;_._swipeBound=!0;let N=0,G=0,le=0,pe=!1;const M=de=>de.touches?de.touches[0].clientX:de.clientX,O=de=>de.touches?de.touches[0].clientY:de.clientY,ue=de=>{pe=!0,N=M(de),G=O(de),le=0},ge=de=>{if(!pe)return;le=M(de)-N;const j=O(de)-G;if(Math.abs(le)<Math.abs(j))return;const V=document.getElementById("current-card-wrap");V&&(V.style.transition="none",V.style.transform=`translateX(${le*.6}px) rotate(${le*.02}deg)`)},xe=()=>{if(!pe)return;pe=!1;const de=document.getElementById("current-card-wrap"),j=55;le<=-j&&x<t.length-1?T():le>=j&&x>0?$():de&&(de.style.transition="transform .2s ease",de.style.transform="translateX(0)")};_.addEventListener("pointerdown",ue),_.addEventListener("pointermove",ge),_.addEventListener("pointerup",xe),_.addEventListener("pointercancel",xe),_.addEventListener("touchstart",ue,{passive:!0}),_.addEventListener("touchmove",ge,{passive:!0}),_.addEventListener("touchend",xe),_.addEventListener("click",de=>{if(Math.abs(le)>8)return;const j=_.getBoundingClientRect();de.clientX-j.left>j.width/2?T():$()})}let B=null;function Y(){const _=document.getElementById("fireworks-canvas");if(!_)return;_.width=window.innerWidth,_.height=window.innerHeight;const N=_.getContext("2d"),G=[];function le(){const M=Math.random()*_.width,O=Math.random()*_.height*.6,ue=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],ge=ue[Math.floor(Math.random()*ue.length)];for(let xe=0;xe<60;xe++){const de=Math.PI*2/60*xe,j=2+Math.random()*5;G.push({x:M,y:O,vx:Math.cos(de)*j,vy:Math.sin(de)*j,alpha:1,color:ge,size:2+Math.random()*3})}}le(),B=setInterval(le,600);function pe(){if(document.getElementById("fireworks-canvas")){N.clearRect(0,0,_.width,_.height);for(let M=G.length-1;M>=0;M--){const O=G[M];if(O.x+=O.vx,O.y+=O.vy+.08,O.vy*=.98,O.alpha-=.018,O.alpha<=0){G.splice(M,1);continue}N.globalAlpha=O.alpha,N.fillStyle=O.color,N.beginPath(),N.arc(O.x,O.y,O.size,0,Math.PI*2),N.fill()}N.globalAlpha=1,(B!==null||G.length>0)&&requestAnimationFrame(pe)}}pe()}function W(){B!==null&&(clearInterval(B),B=null);const _=document.getElementById("fireworks-canvas");_&&_.getContext("2d").clearRect(0,0,_.width,_.height)}if(o){const _=document.getElementById("reveal-btns");_&&(_.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(L=document.getElementById("reveal-next"))==null||L.addEventListener("click",()=>{W(),r.remove(),o()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{W(),r.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{W(),r.remove(),i("boosters")})}function Vn(t){var e,i,o,r;if(t.card_type==="player"&&t.player)return Rn(t);if(t.card_type==="game_changer"){const n=t._gcDef,a=(n==null?void 0:n.name)||t.gc_type||"Game Changer",d=(n==null?void 0:n.effect)||((e=Hi[t.gc_type])==null?void 0:e.desc)||"",c=n!=null&&n.image_url?`/icons/${n.image_url}`:null,s=((i=Hi[t.gc_type])==null?void 0:i.icon)||"⚡";return nt(a,c,s,d,{width:170})}if(t.card_type==="formation")return si(t.formation,ut[t.formation],{width:160});if(t.card_type==="stadium"){const n=t._stadiumDef,a=(n==null?void 0:n.name)||"Stade",d=((o=n==null?void 0:n.club)==null?void 0:o.encoded_name)||(n==null?void 0:n.country_code)||"—",c=n!=null&&n.image_url?`/icons/${n.image_url}`:((r=n==null?void 0:n.club)==null?void 0:r.logo_url)||(n!=null&&n.country_code?`https://flagsapi.com/${n.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),s=`${d}<br>+10 ⭐ joueurs alliés`;return Ut(a,c,s,{width:170})}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Yn(t){var e,i;if((e=t==null?void 0:t.rates)!=null&&e.length){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const r={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},n={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};o.innerHTML=`
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
      </div>`,document.body.appendChild(o),o.addEventListener("click",a=>{a.target===o&&o.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>o.remove());return}Wn()}function Wn(){const t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
    `,document.body.appendChild(e);try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(r){console.warn("[AdSense]",r)}let i=5;const o=setInterval(()=>{i--;const r=document.getElementById("mw-ad-cd");r&&(r.textContent=i),i<=0&&(clearInterval(o),e.remove(),t(!0))},1e3)})}async function Jn(t,{state:e,navigate:i,toast:o,refreshProfile:r}){var b,g;const{data:n}=await h.from("users").select("*").eq("id",e.user.id).single();n&&(e.profile=n);let a=Array.isArray((b=e.profile)==null?void 0:b.pending_boosters)?[...e.profile.pending_boosters]:[];if(!a.length){await h.from("users").update({onboarding_done:!0}).eq("id",e.user.id),i("home");return}let d=null;try{const f=(await Jo()).find(y=>(y.name||"").toLowerCase().includes("new player"));f&&(d=io(f))}catch(x){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',x)}const c=a.length;let s=0;t.innerHTML=`
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
  </div>`;const l=async()=>{await h.from("users").update({pending_boosters:a}).eq("id",e.user.id)};async function p(){var w;if(s>=c||!a.length){await h.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",e.user.id),r&&await r(),o("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const x=a[0],{data:f}=await h.from("users").select("*").eq("id",e.user.id).single();f&&(e.profile=f);let y=[];try{if(x.type==="formation")y=await ro(e.profile,0);else if(x.type==="game_changer")y=await no(e.profile,x.count||3,0);else if(x.type==="stadium")y=await Kn(e.profile,0);else if(d&&((w=d.rates)!=null&&w.length)){const v={...d,cost:0,cardCount:x.count||d.cardCount||5};y=await _i(e.profile,v),x.guaranteeGK&&!e.profile.first_booster_opened&&(y.some(m=>m.player&&m.player.job==="GK")||await Qn(e.profile,y),await h.from("users").update({first_booster_opened:!0}).eq("id",e.profile.id))}else y=await oo(e.profile,x.count||5,0)}catch(v){o(v.message||"Erreur ouverture booster","error");return}a.shift(),s++,await l();const u=x.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:x.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:x.type==="stadium"?{name:"Booster Stade",img:"/icons/booster-stade.png"}:{name:`Booster Joueurs (${s}/${c})`,img:(d==null?void 0:d.img)||"/icons/booster-players.png"};ao(y,u,i,()=>{p()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>p())}async function Qn(t,e){try{const{data:i}=await h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const o=i[Math.floor(Math.random()*i.length)],r=e.findIndex(a=>a.player);if(r===-1)return;const n=e[r];await h.from("cards").update({player_id:o.id}).eq("id",n.id),e[r]={...n,player_id:o.id,player:o}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Zn=[{key:"home2",route:"home2",label:"ACCUEIL",icon:"nav-home.png"},{key:"cards",route:"collection",label:"CARTES",icon:"nav-collection.png"},{key:"decks",route:"decks",label:"EQUIPES",icon:"nav-decks.png"},{key:"boosters",route:"boosters",label:"BOUTIQUE",icon:"nav-boosters.png"},{key:"market",route:"market",label:"MERCATO",icon:"nav-market.png"}];function Yt(t,e,i,o,r){if(!document.getElementById("home2-chrome-style")){const p=document.createElement("style");p.id="home2-chrome-style",p.textContent=`
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
    `,document.head.appendChild(p)}const n=Zn.map(p=>`
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
    `,document.body.appendChild(a),a.querySelector("#home2-chrome-settings-btn").addEventListener("click",()=>t("settings")),a.querySelector("#home2-chrome-credits").addEventListener("click",()=>Eo(e,r)));let d=document.getElementById("home2-mobile-top");d||(d=document.createElement("div"),d.id="home2-mobile-top",d.className="home2-mobile-top",d.innerHTML=`
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-mobtop-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-mobtop-settings-btn"><span>⚙️</span><span class="pill-label">Paramètres</span></button>
      </div>
    `,document.body.appendChild(d),d.querySelector("#home2-mobtop-settings-btn").addEventListener("click",()=>t("settings")),d.querySelector("#home2-mobtop-credits").addEventListener("click",()=>Eo(e,r)));let c=document.getElementById("home2-mobile-bottom");c||(c=document.createElement("div"),c.id="home2-mobile-bottom",c.className="home2-mobile-bottom",c.innerHTML=n,document.body.appendChild(c)),document.querySelectorAll(".home2-chrome-tab").forEach(p=>{p._v2Bound||(p._v2Bound=!0,p.addEventListener("click",()=>{document.querySelectorAll(".home2-chrome-tab").forEach(b=>b.classList.remove("active")),document.querySelectorAll(`.home2-chrome-tab[data-key="${p.dataset.key}"]`).forEach(b=>b.classList.add("active")),t(p.dataset.route)}))}),document.querySelectorAll(".home2-chrome-tab").forEach(p=>p.classList.toggle("active",p.dataset.key===i));const s=`💰 ${(e.credits||0).toLocaleString("fr")}`;document.getElementById("home2-chrome-credits")&&(document.getElementById("home2-chrome-credits").textContent=s),document.getElementById("home2-mobtop-credits")&&(document.getElementById("home2-mobtop-credits").textContent=s),document.body.classList.remove("v2-match-flow"),a.style.display="",d.style.display="",c.style.display="";const l=document.getElementById("page-content");l&&(l.style.removeProperty("padding-top"),l.style.removeProperty("padding-bottom")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const p=window.innerWidth<1024;document.documentElement.style.setProperty("--v2-top-height",(p?d.offsetHeight:a.offsetHeight)+"px"),document.documentElement.style.setProperty("--v2-bottom-height",c.offsetHeight+"px")})})}const er=[{ads:1,seconds:5,credits:4500},{ads:2,seconds:10,credits:9500},{ads:3,seconds:15,credits:15e3}];async function Eo(t,e){if(!await Ho("pub_mode")){Uo();return}const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",i.innerHTML=`
    <div style="background:#111a12;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:400px;width:100%;color:#fff">
      <div style="font-size:18px;font-weight:900;margin-bottom:4px">💰 Gagner des crédits</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:18px">Regarde une ou plusieurs publicités pour recevoir des crédits gratuits.</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${er.map(o=>`
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
    </div>`,document.body.appendChild(i),i.querySelector("#credits-ad-cancel").addEventListener("click",()=>i.remove()),i.querySelectorAll(".credits-ad-offer-btn").forEach(o=>{o.addEventListener("click",()=>{i.remove(),tr(parseInt(o.dataset.ads),5,parseInt(o.dataset.credits),t,e)})})}function tr(t,e,i,o,r){let n=1;const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.94);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;gap:14px;color:#fff;padding:16px",document.body.appendChild(a);function d(){a.innerHTML=`
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
        </button>`),(b=a.querySelector("#credits-ad-claim-btn"))==null||b.addEventListener("click",async()=>{const g=a.querySelector("#credits-ad-claim-btn");g.disabled=!0,g.textContent="⏳...";const x=(o.credits||0)+i,{error:f}=await h.from("users").update({credits:x}).eq("id",o.id);if(f){r(f.message,"error"),g.disabled=!1;return}o.credits=x,Wt(x),r(`+${i.toLocaleString("fr")} crédits ✅`,"success"),a.remove()}))}d()}async function Zo(t,e,i){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px",document.body.appendChild(o);async function r(){var c;const{data:n}=await h.from("pending_rewards").select(`*,
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
      </div>`,(c=o.querySelector("#pending-rewards-close"))==null||c.addEventListener("click",()=>o.remove()),o.querySelectorAll(".claim-reward-btn").forEach(s=>{s.addEventListener("click",async()=>{var p,b;const l=n.find(g=>g.id===s.dataset.id);s.disabled=!0,s.textContent="⏳...";try{const g=await Nn(l,t.profile,e,null);if(await h.from("pending_rewards").update({claimed:!0,claimed_at:new Date().toISOString()}).eq("id",l.id),g.type==="credits")Wt(t.profile.credits),e(`+${g.amount.toLocaleString("fr")} crédits ✅`,"success");else if(g.type==="card")e(`Carte reçue : ${((p=g.player)==null?void 0:p.firstname)||""} ${((b=g.player)==null?void 0:b.surname_real)||""} ✅`,"success");else if(g.type==="booster"){o.remove(),ao(g.cards,g.boosterUI,i,()=>{Zo(t,e,i)});return}}catch(g){e(g.message||"Erreur lors de la réclamation","error"),s.disabled=!1,s.textContent="Récupérer";return}r()})})}r(),o.addEventListener("click",n=>{n.target===o&&o.remove()})}function Wt(t){const e=`💰 ${(t||0).toLocaleString("fr")}`,i=document.getElementById("home2-chrome-credits"),o=document.getElementById("home2-mobtop-credits");i&&(i.textContent=e),o&&(o.textContent=e)}function mt(){document.body.classList.add("v2-match-flow");const t=document.getElementById("home2-chrome-header");t&&(t.style.display="none");const e=document.getElementById("home2-mobile-top");e&&(e.style.display="none");const i=document.getElementById("home2-mobile-bottom");i&&(i.style.display="none");const o=document.getElementById("page-content");o&&(o.style.setProperty("padding-top","0","important"),o.style.setProperty("padding-bottom","0","important"))}function ir(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return"à l'instant";if(i<60)return`il y a ${i}min`;const o=Math.floor(i/60);if(o<24)return`il y a ${o}h`;const r=Math.floor(o/24);return r<7?`il y a ${r}j`:new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"short"})}function or(t,e){if(!isFinite(e.max))return"";const i=e.max-e.min+1,o=Math.floor((t-e.min)/(i/3));return["III","II","I"][Math.min(2,Math.max(0,o))]}async function nr(t){const{data:e}=await h.from("users").select("id,pseudo,club_name,mmr").order("mmr",{ascending:!1}).limit(5),i=e||[],o=i.some(n=>n.id===t);let r=null;if(!o){const{data:n}=await h.from("users").select("mmr").eq("id",t).single();if(n){const{count:a}=await h.from("users").select("id",{count:"exact",head:!0}).gt("mmr",n.mmr||0);r=(a||0)+1}}return{list:i,iAmInTop:o,myPosition:r}}async function rr(t=4){const{data:e}=await h.from("patch_notes").select("id,title,description,image_url,published_at").eq("is_published",!0).order("published_at",{ascending:!1}).limit(t);return e||[]}async function ar(){const{data:t}=await h.from("booster_configs").select("id,name,icon,price_type,price_credits,card_count").eq("is_active",!0).order("sort_order",{ascending:!0}).limit(5);return t||[]}async function sr(){const{data:t}=await h.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const r=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close-v2").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}async function Fi(t,{state:e,navigate:i,toast:o,openModal:r,closeModal:n}){var $,I,B,Y,W,K;const a=e.profile;if(!a)return;const d="/icons/";Yt(i,a,"home2",d,o);const c=a.mmr??1e3,s=At(c),l=or(c,s),p=Gi(c),b=isFinite(s.max)?s.max+1:null,[{list:g,iAmInTop:x,myPosition:f},y,u,{count:w}]=await Promise.all([nr(a.id),rr(5),ar(),h.from("pending_rewards").select("*",{count:"exact",head:!0}).eq("user_id",a.id).eq("claimed",!1)]),v=(L,_)=>`
    <div class="rk-row ${L.id===a.id?"rk-row-me":""}">
      <div class="rk-pos ${_<3?"rk-pos-top"+(_+1):""}">${_<3?["🥇","🥈","🥉"][_]:_+1}</div>
      <div class="rk-name ${L.id===a.id?"rk-name-me":""}">${L.pseudo}</div>
      <div class="rk-rp">${(L.mmr??0).toLocaleString("fr")} RP</div>
    </div>`,E=L=>`
    <div class="news-item">
      ${L.image_url?`<img src="${L.image_url}" class="news-thumb" onerror="this.style.display='none'">`:'<div class="news-thumb news-thumb-fallback">📰</div>'}
      <div class="news-body">
        <div class="news-title">${L.title}</div>
        <div class="news-desc">${L.description||""}</div>
        <div class="news-time">${ir(L.published_at)}</div>
      </div>
    </div>`;let m=0;const T=L=>`
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
            ${g.map((L,_)=>v(L,_)).join("")}
            ${!x&&f?`
              <div class="rk-row rk-row-me" style="border-top:1px solid var(--tile-border);margin-top:2px;padding-top:8px">
                <div class="rk-pos">${f}</div>
                <div class="rk-name rk-name-me">${a.pseudo}</div>
                <div class="rk-rp">${c.toLocaleString("fr")} RP</div>
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
            ${u.length>1?`<div class="promo-dots">${u.map((L,_)=>`<div class="promo-dot ${_===0?"active":""}" data-dot="${_}"></div>`).join("")}</div>`:""}
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
  </div>`,requestAnimationFrame(()=>{var pe,M;const L=((pe=window.visualViewport)==null?void 0:pe.height)||window.innerHeight,_=window.innerWidth<1024;let N=0;if(_){const O=document.getElementById("home2-mobile-top"),ue=document.getElementById("home2-mobile-bottom");N=((O==null?void 0:O.offsetHeight)||0)+((ue==null?void 0:ue.offsetHeight)||0)}else N=((M=document.getElementById("home2-chrome-header"))==null?void 0:M.offsetHeight)||0;const G=L-N,le=t.querySelector(".home-dark");le&&(le.style.minHeight=G+"px")}),($=document.getElementById("nav-rankings-link"))==null||$.addEventListener("click",()=>i("rankings")),(I=document.getElementById("nav-rankings-cta"))==null||I.addEventListener("click",()=>i("rankings")),(B=document.getElementById("rank-inline-link-btn"))==null||B.addEventListener("click",()=>i("rankings")),(Y=document.getElementById("nav-journal-link"))==null||Y.addEventListener("click",()=>sr()),t.querySelectorAll("[data-action]").forEach(L=>{L.addEventListener("click",()=>{L.style.transform="scale(.96)",setTimeout(()=>L.style.transform="",180);const _=L.dataset.action;if(_==="match-ai"){on(i,e);return}if(_==="match-random"){mt(),i("match",{matchMode:"random"});return}if(_==="match-friend"){i("friends");return}if(_==="mini-league"){i("mini-league");return}if(_==="ranked"){i("ranked");return}o("Bientôt disponible","info")})}),u.length>1){const L=document.getElementById("promo-slide-content"),_=()=>Array.from(document.querySelectorAll(".promo-dot")),N=G=>{m=G,L&&(L.innerHTML=T(u[m])),_().forEach((le,pe)=>le.classList.toggle("active",pe===m))};setInterval(()=>N((m+1)%u.length),5e3),document.querySelectorAll(".promo-dot").forEach(G=>{G.addEventListener("click",()=>N(Number(G.dataset.dot)))})}(W=document.getElementById("promo-cta-btn"))==null||W.addEventListener("click",()=>i("boosters")),tn(e,o),(K=document.getElementById("pending-rewards-banner"))==null||K.addEventListener("click",()=>{Zo(e,o,i)}),pr(e,o,i),en(e,o,i),dr(e,o)}async function dr(t,e){const i=t.profile.id,{data:o}=await h.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(o!=null&&o.length))return;const r=o.reduce((a,d)=>a+(d.prize_amount||0),0),n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2200",n.innerHTML=`<div class="modal" style="max-width:400px">
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
  </div>`,document.body.appendChild(n),n.querySelector("#claim-later-btn").addEventListener("click",()=>n.remove()),n.querySelector("#claim-all-btn").addEventListener("click",async a=>{const d=a.currentTarget;d.disabled=!0,d.textContent="...";let c=0;for(const s of o){const{data:l}=await h.rpc("claim_mini_league_prize",{p_league_id:s.league_id,p_user_id:i});l!=null&&l.success&&!l.already_claimed&&(c+=l.prize||0)}if(c>0){t.profile.credits=(t.profile.credits||0)+c;const s=document.getElementById("nav-credits");s&&(s.textContent=`💰 ${t.profile.credits.toLocaleString("fr")}`),e(`💰 +${c.toLocaleString("fr")} cr. récupérés !`,"success")}n.remove()})}async function en(t,e,i){const o=document.getElementById("ongoing-match-banner");if(!o)return;const r=t.profile.id,{data:n}=await h.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${r},away_id.eq.${r}`).order("created_at",{ascending:!1});if(!(n!=null&&n.length)){o.innerHTML="";return}const a=n.map(c=>c.home_id===r?c.away_id:c.home_id).filter(Boolean);let d={};if(a.length){const{data:c}=await h.from("users").select("id, pseudo, club_name").in("id",a);(c||[]).forEach(s=>{d[s.id]=s.club_name||s.pseudo})}o.innerHTML=n.map(c=>{const s=c.home_id===r?c.away_id:c.home_id,l=d[s]||"Adversaire",p=c.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${p?"🏆 Mini League":c.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${l}</div>
      </div>
      <button data-resume="${c.id}" data-mini="${p?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${c.id}" data-opp="${s}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),o.querySelectorAll("[data-resume]").forEach(c=>{c.addEventListener("click",async()=>{mt();const s=document.getElementById("page-content")||document.getElementById("app");if(c.dataset.mini==="1"){const{data:l}=await h.from("mini_league_matches").select("id, league_id").eq("match_id",c.dataset.resume).single();l?i("match-mini-league",{mlMatchId:l.id,leagueId:l.league_id}):i("mini-league")}else{const{resumePvpMatch:l}=await Vo(async()=>{const{resumePvpMatch:p}=await Promise.resolve().then(()=>pa);return{resumePvpMatch:p}},void 0);l(s,{state:t,navigate:i,toast:e,openModal:null,closeModal:null,refreshProfile:null},c.dataset.resume)}})}),o.querySelectorAll("[data-abandon]").forEach(c=>{c.addEventListener("click",()=>{cr(async()=>{await lr(c.dataset.abandon,c.dataset.opp,r),e("Match abandonné (défaite 3-0)","info"),en(t,e,i)})})})}async function lr(t,e,i){Ot();const{data:o}=await h.from("matches").select("home_id, away_id, game_state, mode").eq("id",t).single();if(!o)return;const r=o.home_id===i,n=r?0:3,a=r?3:0,d=o.game_state||{};d.p1Score=n,d.p2Score=a,d.phase="finished",d.forfeit=!0,await h.from("matches").update({status:"finished",forfeit:!0,winner_id:e,home_score:n,away_score:a,game_state:d}).eq("id",t),o.mode==="mini_league"&&await h.from("mini_league_matches").update({status:"finished",home_score:n,away_score:a}).eq("match_id",t)}function cr(t){const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(e),e.querySelector("#ab-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#ab-ok").addEventListener("click",()=>{e.remove(),t()}),e.addEventListener("click",i=>{i.target===e&&e.remove()})}async function pr(t,e,i){var d,c,s,l;const o=document.getElementById("match-invite-banner");if(!o)return;const{data:r}=await h.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",t.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!r){o.innerHTML="";return}const n=((d=r.inviter)==null?void 0:d.club_name)||((c=r.inviter)==null?void 0:c.pseudo)||"?",a=r.inviter_id;o.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${n} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(s=document.getElementById("match-inv-accept"))==null||s.addEventListener("click",()=>{o.innerHTML="",mt(),i("match",{matchMode:"friend",friendId:a,friendName:n,isAccepting:!0})}),(l=document.getElementById("match-inv-decline"))==null||l.addEventListener("click",async()=>{await h.from("friend_match_invites").update({status:"declined"}).eq("id",r.id),o.innerHTML="",e("Invitation refusée","info")})}async function tn(t,e){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:o,error:r}=await h.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",t.user.id).eq("status","pending");if(r||!(o!=null&&o.length)){i.innerHTML="";return}const n=o.length,a=o.slice(0,2).map(c=>{var s;return((s=c.requester)==null?void 0:s.pseudo)||"?"}).join(", "),d=n>2?` +${n-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${n} demande${n>1?"s":""} d'ami${n>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${d}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>rn(t,e,()=>tn(t,e)))}async function on(t,e){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:420px;border-radius:18px;overflow:hidden">
    <div class="modal-header"><h2>Solo — Choisir un niveau</h2><button class="btn-icon" id="solo-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div id="solo-levels-list" style="display:flex;flex-direction:column;gap:10px">
        <div style="text-align:center;color:#999;padding:20px">⏳ Chargement…</div>
      </div>
    </div>
  </div>`,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("solo-cancel").addEventListener("click",o),i.addEventListener("click",s=>{s.target===i&&o()});const[{data:r},{data:n}]=await Promise.all([h.from("solo_levels").select("*").eq("is_active",!0).order("level_number"),h.from("user_solo_progress").select("unlocked_level").eq("user_id",e.profile.id).maybeSingle()]),a=(n==null?void 0:n.unlocked_level)||1,d=r||[],c=document.getElementById("solo-levels-list");if(c){if(!d.length){c.innerHTML='<div style="text-align:center;color:#999;padding:20px">Aucun niveau configuré.</div>';return}c.innerHTML=d.map(s=>{const l=s.level_number>a,p=s.level_number===a,b=l?"#f0f0f0":p?"#eefaf2":"#f7f7f7",g=l?"#ddd":p?"#bfe8cf":"#e0e0e0",x=l?"#999":"#12401f";return`
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
      </div>`}).join(""),c.querySelectorAll(".solo-level-card").forEach(s=>{s.dataset.locked!=="true"&&(s.addEventListener("mouseenter",()=>{s.style.transform="translateY(-1px)"}),s.addEventListener("mouseleave",()=>{s.style.transform=""}),s.addEventListener("click",()=>{o(),mt(),t("match",{matchMode:"solo",soloLevel:Number(s.dataset.level)})}))})}}const di="#1A6B3C",li="#cc2222",ur="#D4A017",Lo="#888";async function fr(t,e){const{state:i,toast:o}=e;t.innerHTML=`
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
    </div>`,await nn(i,o,e),document.getElementById("btn-add-friend").addEventListener("click",()=>gr(i,o)),document.getElementById("btn-accept-friend").addEventListener("click",()=>rn(i,o,null,e))}async function nn(t,e,i={}){const{navigate:o}=i,r=t.user.id,{data:n,error:a}=await h.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${r},addressee_id.eq.${r}`),{count:d}=await h.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",r).eq("status","pending"),c=document.getElementById("pending-badge");c&&(d>0?(c.style.display="flex",c.textContent=d):c.style.display="none");const s=document.getElementById("friends-list");if(!s)return;if(a){console.error("[Friends] Erreur:",a),s.innerHTML=`<div style="color:${li};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const l=(n||[]).map(g=>g.requester_id===r?g.addressee_id:g.requester_id);let p={};if(l.length){const{data:g}=await h.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",l);(g||[]).forEach(x=>{p[x.id]=x})}const b=(n||[]).map(g=>({friendshipId:g.id,friend:p[g.requester_id===r?g.addressee_id:g.requester_id]||{pseudo:"?"}}));if(!b.length){s.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}s.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${b.length} ami${b.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${b.map(({friendshipId:g,friend:x})=>mr(x,g)).join("")}
    </div>`,s.querySelectorAll("[data-stats]").forEach(g=>{g.addEventListener("click",()=>xr(t,g.dataset.stats,g.dataset.friendName))}),s.querySelectorAll("[data-match]").forEach(g=>{g.addEventListener("click",async()=>{const x=g.dataset.friendId,f=g.dataset.friendName;if(typeof o!="function"){e("Erreur navigation","error");return}const y=t.user.id,{data:u}=await h.from("friend_match_invites").select("id").eq("inviter_id",x).eq("invitee_id",y).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),w=!!u;console.log("[Friends] clic match",{fid:x,fname:f,isAccepting:w}),mt(),o("match",{matchMode:"friend",friendId:x,friendName:f,isAccepting:w})})})}function mr(t,e){const i=t.club_name||t.pseudo||"?",o=t.pseudo||"",r=(o||i).slice(0,2).toUpperCase(),n=t.club_color2||di,a=t.club_color1||"#ffffff",d=t.last_seen_at?new Date(t.last_seen_at):null,c=d&&Date.now()-d.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${ur};background:var(--tile-bg);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function gr(t,e){const i=so();i.innerHTML=`
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
    ${lo()}`,document.body.appendChild(i);const o=i.querySelector("#friend-pseudo-input"),r=i.querySelector("#add-friend-error"),n=()=>i.remove();o.focus(),i.querySelector("#add-cancel").addEventListener("click",n),i.addEventListener("click",a=>{a.target===i&&n()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=o.value.trim();if(!a){r.textContent="Entre un pseudo";return}r.textContent="";const{data:d}=await h.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!d){r.textContent="Utilisateur introuvable";return}if(d.id===t.user.id){r.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:c}=await h.from("friendships").select("id, status").or(`and(requester_id.eq.${t.user.id},addressee_id.eq.${d.id}),and(requester_id.eq.${d.id},addressee_id.eq.${t.user.id})`).single();if(c){const l=c.status==="accepted"?"Vous êtes déjà amis !":c.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";r.textContent=l;return}const{error:s}=await h.from("friendships").insert({requester_id:t.user.id,addressee_id:d.id,status:"pending"});if(s){r.textContent="Erreur : "+s.message;return}n(),e(`✅ Demande envoyée à ${d.pseudo} !`,"success")})}async function rn(t,e,i=null,o={}){const r=t.user.id,{data:n}=await h.from("friendships").select("id, requester_id").eq("addressee_id",r).eq("status","pending").order("created_at",{ascending:!1}),a=(n||[]).map(b=>b.requester_id);let d={};if(a.length){const{data:b}=await h.from("users").select("id, pseudo, club_name").in("id",a);(b||[]).forEach(g=>{d[g.id]=g})}const c=(n||[]).map(b=>({...b,requester:d[b.requester_id]||{pseudo:"?"}})),s=so(),l=c||[];s.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${l.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${l.map(b=>{var g,x,f;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((g=b.requester)==null?void 0:g.club_name)||((x=b.requester)==null?void 0:x.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((f=b.requester)==null?void 0:f.pseudo)||""})</span>
                </div>
                <button data-accept="${b.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${di};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${b.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${li};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${lo()}`,document.body.appendChild(s);const p=()=>s.remove();s.querySelector("#pending-close").addEventListener("click",p),s.addEventListener("click",b=>{b.target===s&&p()}),s.querySelectorAll("[data-accept]").forEach(b=>{b.addEventListener("click",async()=>{const{error:g}=await h.from("friendships").update({status:"accepted"}).eq("id",b.dataset.accept);if(g){e("Erreur : "+g.message,"error");return}b.closest("div[style]").remove(),e("✅ Ami accepté !","success"),nn(t,e,o),i&&i()})}),s.querySelectorAll("[data-decline]").forEach(b=>{b.addEventListener("click",async()=>{await h.from("friendships").delete().eq("id",b.dataset.decline),b.closest("div[style]").remove(),e("Demande refusée","info"),i&&i()})})}async function xr(t,e,i){const o=t.user.id,[r,n]=[o,e].sort(),a=o===r,{data:d}=await h.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",n).single(),c=t.profile.club_name||t.profile.pseudo||"Moi",s=d||{},l=a?s.wins_p1||0:s.wins_p2||0,p=a?s.wins_p2||0:s.wins_p1||0,b=s.draws||0,g=a?s.goals_p1||0:s.goals_p2||0,x=a?s.goals_p2||0:s.goals_p1||0,f=a?s.gc_used_p1||0:s.gc_used_p2||0,y=a?s.gc_used_p2||0:s.gc_used_p1||0,u=s.matches_total||0,w=(E,m,T,$=di,I=li)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${$}">${m}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${E}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${I}">${T}</div>
    </div>`,v=so();v.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${u===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${w("Victoires",l,p)}
        ${w("Nuls",b,b,Lo,Lo)}
        ${w("Défaites",p,l)}
        ${w("Buts marqués",g,x)}
        ${w("Buts encaissés",x,g,li,di)}
        ${w("GC utilisés ⚡",f,y,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${u} match${u>1?"s":""} joué${u>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${lo()}`,document.body.appendChild(v),v.querySelector("#stats-close").addEventListener("click",()=>v.remove()),v.addEventListener("click",E=>{E.target===v&&v.remove()})}function so(){const t=document.createElement("div");return t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",t}function lo(){return`
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
    </style>`}async function br(t,{state:e,navigate:i,toast:o}){const r=e.profile;if(!r)return;const n="/icons/";Yt(i,r,"game",n,o),t.innerHTML=`
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
  </div>`,t.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",()=>{a.style.transform="scale(.96)",setTimeout(()=>a.style.transform="",180);const d=a.dataset.action;if(d==="match-ai"){on(i,e);return}if(d==="match-random"){mt(),i("match",{matchMode:"random"});return}if(d==="match-friend"){i("friends");return}if(d==="mini-league"){i("mini-league");return}if(d==="ranked"){i("ranked");return}o("Bientôt disponible","info")})})}const yr="/",an=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function sn(t,e,i){let o=0;const r=document.createElement("div");r.id="tutorial-overlay",r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const n=()=>{var l,p,b;const d=e[o],c=o===e.length-1,s=Math.round((o+1)/e.length*100);r.innerHTML=`
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
        ${d.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${yr}icons/${d.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,r.querySelectorAll("ul,ol").forEach(g=>{g.style.paddingLeft="20px",g.style.marginTop="6px",g.style.marginBottom="6px"}),r.querySelectorAll("li").forEach(g=>{g.style.marginBottom="4px"}),r.querySelectorAll("p").forEach(g=>{g.style.marginBottom="8px"}),(l=r.querySelector("#tuto-prev"))==null||l.addEventListener("click",()=>{o--,n()}),(p=r.querySelector("#tuto-next"))==null||p.addEventListener("click",()=>{c?a():(o++,n())}),(b=r.querySelector("#tuto-skip"))==null||b.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{r.remove(),t!=null&&t.id&&await h.from("users").update({tutorial_done:!0}).eq("id",t.id),i==null||i()};document.body.appendChild(r),n()}async function dn(t,e,i){let o=[];const{data:r,error:n}=await h.rpc("get_tutorial_steps");if(!n&&(r==null?void 0:r.length)>0)o=r;else{const{data:d,error:c}=await h.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!c&&(d==null?void 0:d.length)>0?o=d:i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3)}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):an;sn(t,a,()=>e("settings"))}async function So(t,e,i){if(!t||t.tutorial_done)return;let o=[];const{data:r,error:n}=await h.rpc("get_tutorial_steps");if(!n&&(r==null?void 0:r.length)>0)o=r,console.log(`[Tutorial] RPC OK → ${o.length} étapes`);else{const{data:d,error:c}=await h.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!c&&(d==null?void 0:d.length)>0?(o=d,console.log(`[Tutorial] Direct OK → ${o.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${n==null?void 0:n.message}, Direct: ${c==null?void 0:c.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=o.length>0?o.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):an;sn(t,a,()=>e("boosters"))}async function ln(t,e){var y,u,w;const{state:i,navigate:o,toast:r}=e,n=ai(),a=Zi(),d=(y=i==null?void 0:i.profile)==null?void 0:y.is_admin,c="2026.07.31-2340";t.innerHTML=`
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
  </div>`,t.querySelectorAll("[data-theme-choice]").forEach(v=>{v.addEventListener("click",()=>{Go(v.dataset.themeChoice),ln(t,e)})});const s=t.querySelector("#team-color1"),l=t.querySelector("#team-color2"),p=t.querySelector("#team-preview"),b=()=>{p&&(p.style.background=`linear-gradient(135deg, ${s.value} 50%, ${l.value} 50%)`)};b(),s==null||s.addEventListener("input",b),l==null||l.addEventListener("input",b),(u=t.querySelector("#team-save"))==null||u.addEventListener("click",async()=>{const v=t.querySelector("#team-error"),E=t.querySelector("#team-save"),m=t.querySelector("#team-club-name").value.trim();if(m.length<2){v.textContent="Nom de club trop court.";return}E.disabled=!0,E.textContent="⏳ Enregistrement...",v.textContent="";const{error:T}=await h.from("users").update({club_name:m,club_color1:s.value,club_color2:l.value}).eq("id",i.profile.id);if(E.disabled=!1,E.textContent="💾 Enregistrer",T){v.textContent=T.message;return}i.profile.club_name=m,i.profile.club_color1=s.value,i.profile.club_color2=l.value,v.style.color="#2ecc71",v.textContent="✅ Modifications enregistrées.",ai()==="club"&&Go("club")});const g=t.querySelector("#volume-slider"),x=t.querySelector("#volume-label");let f=null;g.addEventListener("input",()=>{Bn(Number(g.value)),x.textContent=`${g.value}%`,f&&(f.volume=Math.max(0,Math.min(1,Number(g.value)/100)))}),t.querySelector("#volume-test").addEventListener("click",()=>{f=to("/sounds/match-opening.mp3",1)}),(w=t.querySelector("#settings-tutorial"))==null||w.addEventListener("click",()=>{dn(i.profile,o,r)}),t.querySelector("#settings-logout").addEventListener("click",async()=>{await h.auth.signOut(),window.location.reload()})}const Oe={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Re(t,e){if(!t)return 0;let i=0;switch(e){case"GK":i=Number(t.note_g)||0;break;case"DEF":i=Number(t.note_d)||0;break;case"MIL":i=Number(t.note_m)||0;break;case"ATT":i=Number(t.note_a)||0;break;default:i=0}return i+(t.boost||0)}const To=["ATT","MIL","DEF","GK"];function cn(t,e,i){if(!t||!e)return!1;if(i&&t.position&&e.position)return Ii(i).some(([l,p])=>l===t.position&&p===e.position||l===e.position&&p===t.position);const o=t._col!=null&&e._col!=null&&t._col===e._col,r=t._col!=null&&e._col!=null&&Math.abs(t._col-e._col)===1,n=To.indexOf(t._line||t.job),a=To.indexOf(e._line||e.job),d=Math.abs(n-a)===1;return(t._line||t.job)===(e._line||e.job)&&r||o&&d}function pn(t,e){let i=0;const o=t.length;for(let r=0;r<o;r++)for(let n=r+1;n<o;n++){const a=t[r],d=t[n];if(!a||!d||!cn(a,d,e))continue;const c=Ft(a,d);c==="#00ff88"?i+=10:c==="#FFD700"&&(i+=5)}return i}function ci(t,e={},i){let o=0,r=0;t.forEach(c=>{const s=c._line||c.job,l=Number(s==="MIL"?c.note_m:c.note_a)||0,p=c.stadiumBonus&&(s==="MIL"||s==="ATT")?10:0;o+=e.doubleAttack?l*2:l,r+=(c.boost||0)+p});const n=o+r,a=pn(t,i);let d=n+a;return e.stolenNote&&(d-=e.stolenNote),{base:n,links:a,total:Math.max(0,d)}}function pi(t,e={},i){const o=t.reduce((a,d)=>{const c=d._line||d.job;let s=0;c==="GK"?s=Number(d.note_g)||0:c==="MIL"?s=Number(d.note_m)||0:s=Number(d.note_d)||0;const l=d.stadiumBonus&&(c==="GK"||c==="DEF"||c==="MIL")?10:0;return a+s+(d.boost||0)+l},0),r=pn(t,i);let n=o+r;return e.stolenNote&&(n-=e.stolenNote),{base:o,links:r,total:Math.max(0,n)}}function co(t,e,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:t>e,shielded:!1}}function un(t,e,i="easy"){const o=t.filter(a=>!a.used);if(!o.length)return[];const r=[...o].sort((a,d)=>{const c=e==="attack"?Re(a,"ATT"):a._line==="GK"?Re(a,"GK"):Re(a,"DEF");return(e==="attack"?Re(d,"ATT"):d._line==="GK"?Re(d,"GK"):Re(d,"DEF"))-c});let n=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return r.slice(0,Math.min(n,r.length,3))}function hr(t,e){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[t]||i.vs_ai_easy)[e]||0}const vr={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ei={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},mi=["GK","DEF","MIL","ATT"],wr=["Tous","GK","DEF","MIL","ATT"],_r={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Io(t){const e=t.player;return e?(e.rarity,Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)):null}function kr(t){return t.length?t.reduce((e,i)=>Io(i)>Io(e)?i:e,t[0]):t[0]}const $r={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function gi(t,e){return t&&Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Pi(t,e=""){const i=t.player;if(!i)return"";const o=t.evolution_bonus||0,r={...i,_evolution_bonus:o},n=e?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${e}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${t.id}">
    ${n}
    ${Ae(r,{width:140})}
  </div>`}function zo(t){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${Ae(t,{width:140})}
  </div>`}async function Er(t,e){const{state:i,navigate:o,toast:r,openModal:n,closeModal:a}=e;Yt(o,i.profile,"cards","/icons/",r),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await h.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:c}=await h.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),s=(d||[]).filter(j=>j.card_type==="player"&&j.player),l=(d||[]).filter(j=>j.card_type==="game_changer"),p=(d||[]).filter(j=>j.card_type==="formation"),b=(d||[]).filter(j=>j.card_type==="stadium"),{data:g}=await h.from("gc_definitions").select("name,gc_type,color,effect,image_url"),x={};(g||[]).forEach(j=>{x[j.name]=j});const{data:f}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),y={};(f||[]).forEach(j=>{y[j.id]=j}),b.forEach(j=>{j.stadium_def&&(y[j.stadium_id]=j.stadium_def)});const u=Object.keys(zi),w=Object.keys(Oe),v={};s.forEach(j=>{const V=j.player.id;v[V]=(v[V]||0)+1}),new Set(Object.keys(v).map(j=>String(j)));const E=new Set(p.map(j=>j.formation)),m=new Set(l.map(j=>j.gc_type));let T="player",$="Tous",I="",B=!1,Y=!1;function W(){return[...s].sort((j,V)=>{const re=mi.indexOf(j.player.job),te=mi.indexOf(V.player.job);return re!==te?re-te:(j.player.surname_real||"").localeCompare(V.player.surname_real||"")})}function K(){return[...c||[]].sort((j,V)=>{const re=mi.indexOf(j.job),te=mi.indexOf(V.job);return re!==te?re-te:(j.surname_real||"").localeCompare(V.surname_real||"")})}function L(){return W().filter(j=>{const V=j.player,re=$==="Tous"||V.job===$,te=!I||`${V.firstname} ${V.surname_real}`.toLowerCase().includes(I);return re&&te})}function _(){return K().filter(j=>{const V=$==="Tous"||j.job===$,re=!I||`${j.firstname} ${j.surname_real}`.toLowerCase().includes(I);return V&&re})}t.innerHTML=`
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
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${p.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${T==="gc"?"var(--green)":"transparent"};
        color:${T==="gc"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${l.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${T==="stadium"?"#4FC3F7":"transparent"};
        color:${T==="stadium"?"#4FC3F7":"var(--tile-fg-dim)"}">
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
  </div>`,function(V){const re=document.getElementById(V);if(!re)return;re.addEventListener("wheel",H=>{Math.abs(H.deltaY)<=Math.abs(H.deltaX)||(H.preventDefault(),re.scrollLeft+=H.deltaY)},{passive:!1});let te=!1,X=0,P=0,J=!1,F=!1;re.addEventListener("mousedown",H=>{te=!0,J=!1,X=H.pageX,P=re.scrollLeft}),window.addEventListener("mouseup",()=>{te=!1,J&&(re.style.cursor="",F=!0),J=!1}),window.addEventListener("mousemove",H=>{if(!te)return;const ae=H.pageX-X;!J&&Math.abs(ae)<6||(J=!0,re.style.cursor="grabbing",H.preventDefault(),re.scrollLeft=P-ae)}),re.addEventListener("click",H=>{F&&(H.stopPropagation(),H.preventDefault(),F=!1)},!0)}("col-grid");function N(){const j=document.getElementById("col-filters");j&&(T==="player"?(j.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px;background:#fff;color:#1a1a1a" value="${I}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${wr.map(V=>`
            <button class="filter-btn" data-job="${V}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${V===$?"var(--green)":"var(--tile-border)"};
                background:${V===$?"var(--green)":"#fff"};
                color:${V===$?"#fff":"#555"}">
              ${V}
            </button>`).join("")}
          <button id="dupes-only-btn" title="Voir les cartes en plusieurs exemplaires"
            style="flex-shrink:0;margin-left:auto;padding:5px 10px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${Y?"var(--yellow)":"var(--tile-border)"};
              background:${Y?"var(--yellow)":"#fff"};
              color:${Y?"#111":"#555"}">
            🗂️×2
          </button>
          <button id="show-all-btn"
            style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${B?"var(--yellow)":"var(--tile-border)"};
              background:${B?"var(--yellow)":"#fff"};
              color:${B?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${B?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",V=>{I=V.target.value.toLowerCase(),G()}),t.querySelectorAll(".filter-btn").forEach(V=>{V.addEventListener("click",()=>{$=V.dataset.job,N(),G()})}),document.getElementById("dupes-only-btn").addEventListener("click",()=>{Y=!Y,N(),G()}),document.getElementById("show-all-btn").addEventListener("click",()=>{B=!B,N(),G()})):(j.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${B?"var(--yellow)":"var(--tile-border)"};
              background:${B?"var(--yellow)":"#fff"};
              color:${B?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${B?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{B=!B,N(),G()})))}function G(){const j=document.getElementById("col-grid");j&&(T==="player"?ue(j):T==="formation"?ge(j):T==="stadium"?de(j):xe(j))}function le(j,V,re,te,X,P=0){const J=document.getElementById("col-grid"),F=document.getElementById("col-big");if(!J||!F)return;var H=0;function ae(){var De;const ce=window.innerWidth>=768,be=document.getElementById("col-big"),ke=document.getElementById("col-gap"),Ee=((De=document.getElementById("col-grid"))==null?void 0:De.parentElement)||null,Se=be?be.closest(".page"):null;if(be&&Ee&&Se){let Me=0;Array.from(Se.children).forEach(function(z){z!==be&&z!==Ee&&z!==ke&&(Me+=z.offsetHeight)});const Ce=Math.max(0,Se.clientHeight-Me),He=Math.round(Ce*(P/100)),k=Math.max(0,Ce-He),S=ce?50/71:45/63,A=Math.round(k*S),C=Math.max(0,k-A);ke&&(ke.style.height=He+"px"),be.style.flex="none",be.style.height=A+"px",be.style.minHeight="0",Ee.style.flex="none",Ee.style.height=C+"px",Ee.style.minHeight="0",Ee.style.display="flex",Ee.style.overflow="hidden"}const ye=document.getElementById("col-grid");ye&&(ye.style.height="100%",ye.style.flexShrink="0",ye.style.overflowX="auto",ye.style.overflowY="hidden",ye.style.alignItems="center",ye.style.width="100%"),F.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+V(j[H])+"</div>";var Le=F.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Le&&Le.addEventListener("click",function(){te(j[H])}),requestAnimationFrame(function(){var Me=document.getElementById("big-card-inner");if(!(!Me||!F)){var Ce=F.clientHeight,He=F.clientWidth-16,k=Me.offsetHeight,S=Me.offsetWidth;if(k>0&&S>0&&Ce>40){var A=Math.min(Ce/k,He/S);Me.style.transform="scale("+A.toFixed(3)+")",Me.style.transformOrigin="center center"}}}),J.innerHTML=j.map(function(Me,Ce){var He=Ce===H,k="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(He?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Ce+'" style="'+k+'">'+re(Me,He)+"</div>"}).join(""),J.querySelectorAll(".col-mini-item").forEach(function(Me){Me.addEventListener("click",function(){H=Number(Me.dataset.idx),ae(),Me.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var Me=ye?ye.clientHeight:0,Ce=J.querySelector(".col-mini-item > div");if(!(!Me||!Ce)){var He=Ce.style.zoom;Ce.style.zoom="1";var k=Ce.offsetHeight;if(Ce.style.zoom=He,!(k<=0)){var S=Me/k;J.querySelectorAll(".col-mini-item > div").forEach(function(A){A.style.zoom=S.toFixed(4)})}}})}ae()}function pe(j,V){var re=window.innerWidth>=768?.76:.54,te;if(!j||j._fake){var X=j?j.player:null;if(!X)return"";te=zo(X)}else te=Pi(j,"");var P=j&&!j._fake?v[j.player&&j.player.id]||1:0,J=P>0?'<div style="position:absolute;top:6px;right:6px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:11px;font-weight:900;padding:2px 7px;z-index:3;box-shadow:0 1px 4px rgba(0,0,0,0.4)">×'+P+"</div>":"";return'<div style="display:inline-block;position:relative;zoom:'+re+';pointer-events:none;line-height:0">'+J+te+"</div>"}function M(j,V,re){var te=re>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+re+"</div>":"",X=!!V,P=si(j,ut[j],{width:160});return X||(P='<div style="filter:grayscale(1);opacity:0.5">'+P+"</div>"),"<div "+(V?'data-form-id="'+V.id+'"':"")+' style="position:relative;cursor:pointer">'+te+P+"</div>"}function O(j,V){var re=window.innerWidth>=768?.76:.54,te=si(j,ut[j],{width:140});return V||(te='<div style="filter:grayscale(1);opacity:0.45">'+te+"</div>"),'<div style="display:inline-block;zoom:'+re+';line-height:0;pointer-events:none">'+te+"</div>"}function ue(j){if(B){const V=_();if(!V.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const re=V.map(te=>s.find(X=>X.player.id===te.id)||{_fake:!0,player:te,id:"fake-"+te.id});le(re,te=>te._fake?zo(te.player):Pi(te,""),te=>te._fake?pe({player:te.player,id:"x",_fake:!0}):pe(te),te=>{te._fake||Ao(te,s,v,e)})}else{const V=L();if(!V.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const re={};V.forEach(X=>{const P=X.player.id;re[P]||(re[P]=[]),re[P].push(X)});const te=Object.values(re).map(X=>kr(X)).filter(X=>!Y||(v[X.player.id]||1)>1);if(Y&&!te.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte en plusieurs exemplaires.</div>';return}le(te,X=>{const P=v[X.player.id]||1,J=P>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${P}</div>`:"",H=s.filter(ae=>ae.player.id===X.player.id&&ae.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Pi(X,J+H)},X=>pe(X),X=>Ao(X,s,v,e))}}function ge(j){const V=B?u:[...E];if(!V.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const re=V.map(te=>({formation:te,card:p.find(X=>X.formation===te)||null,owned:E.has(te)}));le(re,({formation:te,card:X,owned:P})=>M(te,P?X:null,P?p.filter(J=>J.formation===te).length:0),({formation:te,owned:X})=>O(te,X),({card:te,owned:X})=>{X&&te&&Sr(te,p,e,n)},"#1A6B3C",5)}function xe(j){const V=Object.keys(x),re=B?V.length?V:w:[...m];if(!re.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const te=re.map(X=>({type:X,gc:Oe[X]||{icon:"⚡",desc:""},def:x[X]||null,owned:m.has(X),card:l.find(P=>P.gc_type===X)||null}));le(te,({type:X,gc:P,def:J,owned:F,card:H})=>{var ye;const ae=(J==null?void 0:J.name)||X,ce=F?l.filter(Le=>Le.gc_type===X).length:0,be=ce>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ce}</div>`:"",ke=(J==null?void 0:J.effect)||P.desc||"",Ee=J!=null&&J.image_url?`/icons/${J.image_url}`:((ye=J==null?void 0:J.club)==null?void 0:ye.logo_url)||(J!=null&&J.country_code?`https://flagsapi.com/${J.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);let Se=nt(ae,Ee,P.icon,ke,{width:160,onClick:F});return F||(Se=`<div style="filter:grayscale(1);opacity:0.5">${Se}</div>`),`<div ${F&&H?`data-gc-id="${H.id}" data-gc-type="${X}"`:""} style="position:relative">${be}${Se}</div>`},({type:X,gc:P,def:J,owned:F})=>{const H=window.innerWidth>=768?.76:.54,ae=(J==null?void 0:J.name)||X,ce=(J==null?void 0:J.effect)||P.desc||"",be=J!=null&&J.image_url?`/icons/${J.image_url}`:null;let ke=nt(ae,be,P.icon,ce,{width:140});return F||(ke=`<div style="filter:grayscale(1);opacity:0.45">${ke}</div>`),`<div style="display:inline-block;zoom:${H};line-height:0;pointer-events:none">${ke}</div>`},({type:X,owned:P,def:J})=>{P&&Lr(X,J,n)},"#7a28b8",5)}function de(j){const V="#4FC3F7",re="/";if(!b.length){j.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const te={};b.forEach(P=>{const J=P.stadium_id||"?";(te[J]=te[J]||[]).push(P)});const X=Object.entries(te).map(([P,J])=>({sid:P,def:y[P]||null,count:J.length,card:J[0]}));le(X,({def:P,count:J})=>{var ke,Ee;const F=(P==null?void 0:P.name)||"?",H=((ke=P==null?void 0:P.club)==null?void 0:ke.encoded_name)||(P==null?void 0:P.country_code)||"—",ae=P!=null&&P.image_url?`${re}icons/${P.image_url}`:((Ee=P==null?void 0:P.club)==null?void 0:Ee.logo_url)||(P!=null&&P.country_code?`https://flagsapi.com/${P.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),ce=J>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${J}</div>`:"",be=`${H}<br>+10 ⭐ joueurs alliés`;return`<div style="position:relative">${ce}${Ut(F,ae,be,{width:160})}</div>`},({def:P})=>{var be,ke;const J=window.innerWidth>=768?.76:.54,F=(P==null?void 0:P.name)||"?",H=((be=P==null?void 0:P.club)==null?void 0:be.encoded_name)||(P==null?void 0:P.country_code)||"—",ae=P!=null&&P.image_url?`${re}icons/${P.image_url}`:((ke=P==null?void 0:P.club)==null?void 0:ke.logo_url)||(P!=null&&P.country_code?`https://flagsapi.com/${P.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),ce=`${H}<br>+10 ⭐`;return`<div style="display:inline-block;zoom:${J};line-height:0;pointer-events:none">${Ut(F,ae,ce,{width:140})}</div>`},null,V,5)}t.querySelectorAll(".col-tab-btn").forEach(j=>{j.addEventListener("click",()=>{T=j.dataset.tab,$="Tous",I="",B=!1,t.querySelectorAll(".col-tab-btn").forEach(V=>{const re=V.dataset.tab===T;V.style.borderBottomColor=re?"var(--green)":"transparent",V.style.color=re?"var(--green)":"var(--tile-fg-dim)"}),N(),G()})}),N(),G()}function Lr(t,e,i){const o=Oe[t]||{icon:"⚡",desc:"Effet spécial."},r=(e==null?void 0:e.name)||t,n=(e==null?void 0:e.effect)||o.desc,a=e!=null&&e.image_url?`/icons/${e.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      ${nt(r,a,o.icon,n,{width:200})}
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const xi=1e3;function Sr(t,e,i,o){var x,f,y;const{state:r,toast:n,closeModal:a,navigate:d,refreshProfile:c}=i,s=t.formation,l={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function p(){const u=ut[s]||{},w=zi[s]||[],v=290,E=360,m=20;function T(I){const B=u[I];return B?{x:B.x*v,y:B.y*E}:null}let $=`<svg width="${v}" height="${E}" viewBox="0 0 ${v} ${E}" xmlns="http://www.w3.org/2000/svg">`;for(const[I,B]of w){const Y=T(I),W=T(B);!Y||!W||($+=`<line x1="${Y.x}" y1="${Y.y}" x2="${W.x}" y2="${W.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const I of Object.keys(u)){const B=T(I);if(!B)continue;const Y=I.replace(/\d+/,""),W=l[Y]||"#555";$+=`<circle cx="${B.x}" cy="${B.y}" r="${m}" fill="${W}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,$+=`<text x="${B.x}" y="${B.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${Y}</text>`}return $+="</svg>",$}const b=e.filter(u=>u.formation===s);b.length;const g=!t.is_for_sale;o(`Formation ${s}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${xi}"
          style="flex:1;padding:8px;border:1.5px solid var(--tile-border);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${t.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(x=document.getElementById("direct-sell-form-btn"))==null||x.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${s} pour ${xi.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const u=b.find(v=>!v.is_for_sale)||b[0];if(!u){n("Aucune carte à vendre","error");return}await h.from("market_listings").delete().eq("card_id",u.id),await h.from("transfer_history").delete().eq("card_id",u.id);const{error:w}=await h.from("cards").delete().eq("id",u.id);if(w){n(w.message,"error");return}await h.from("users").update({credits:(r.profile.credits||0)+xi}).eq("id",r.profile.id),await c(),n(`+${xi.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),d("collection")}),(f=document.getElementById("market-sell-form-btn"))==null||f.addEventListener("click",async()=>{const u=parseInt(document.getElementById("sell-price-form").value);if(!u||u<1){n("Prix invalide","error");return}await h.from("cards").update({is_for_sale:!0,sale_price:u}).eq("id",t.id),await h.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:u}),n("Carte mise en vente sur le marché !","success"),a(),d("collection")}),(y=document.getElementById("cancel-sell-form-btn"))==null||y.addEventListener("click",async()=>{await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await h.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),a(),d("collection")})}async function Ao(t,e,i,o){var ue,ge,xe,de,j,V,re,te,X,P,J;const{state:r,toast:n,openModal:a,closeModal:d,navigate:c,refreshProfile:s}=o,l=t.player,p=e.filter(F=>F.player.id===l.id),b=p.length,g=t.evolution_bonus||0,x=Math.max((Number(l.note_g)||0)+(l.job==="GK"||l.job2==="GK"?g:0),(Number(l.note_d)||0)+(l.job==="DEF"||l.job2==="DEF"?g:0),(Number(l.note_m)||0)+(l.job==="MIL"||l.job2==="MIL"?g:0),(Number(l.note_a)||0)+(l.job==="ATT"||l.job2==="ATT"?g:0)),f=l.rarity||"normal",{data:y}=await h.from("sell_price_configs").select("*").eq("rarity",f).lte("note_min",x).gte("note_max",x).order("note_min",{ascending:!1}).limit(1),u=((ue=y==null?void 0:y[0])==null?void 0:ue.price)??_r[f]??1e3,w=((ge=y==null?void 0:y[0])==null?void 0:ge.price_min)??null,v=((xe=y==null?void 0:y[0])==null?void 0:xe.price_max)??null;Bt(l);const E=gi(l,l.job)+g,m=l.job2?gi(l,l.job2)+(gi(l,l.job2)>0?g:0):null;ei[l.job],l.job2&&ei[l.job2];const T=vr[l.rarity]||"#ccc",$=$r[l.country_code]||l.country_code||"",I=t.evolution_bonus||0,Y=E+I,W=m||0,K=W>0?W+I:0,L=p.map(F=>F.id);let _={};if(L.length){const{data:F}=await h.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",L).order("transferred_at",{ascending:!0});(F||[]).forEach(H=>{_[H.card_id]||(_[H.card_id]=[]),_[H.card_id].push(H)})}const N=L.length?`
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
              value="${w||l.sell_price||5e3}"
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

      ${b-1>0?`<div style="font-size:13px;font-weight:700;margin-bottom:10px">🗂️ Copies (${b-1})</div>`:`
        <div style="font-size:12px;color:#aaa;font-style:italic">Aucune autre copie.</div>
      `}
      <!-- Grille de mini-cartes (copies uniquement, l'exemplaire 1 = carte principale affichée en haut) -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${p.filter(F=>F.id!==t.id).map((F,H)=>{const ae=_[F.id]||[],ce=F.is_for_sale,be=ae.length?ae[ae.length-1]:null,ke=F.evolution_bonus||0,Ee=be?be.source==="booster"?"Booster":be.price?be.price.toLocaleString("fr")+" cr.":"—":"—",Se=be?new Date(be.transferred_at).toLocaleDateString("fr",{day:"2-digit",month:"2-digit",year:"numeric"}):"",ye=80,Le=Math.round(ye*657/507),De=Ae({...l,_evolution_bonus:ke},{width:ye});return`
            <div class="exemplaire-row" data-card-id="${F.id}" data-card-idx="${H}"
              style="position:relative;cursor:${ce?"not-allowed":"pointer"};opacity:${ce?.55:1};transition:transform .1s">
              <!-- Checkbox cachée -->
              <input type="checkbox" class="expl-check"
                data-id="${F.id}" data-evo="${ke}" data-note="${gi(l,l.job)}"
                ${ce?"disabled":""}
                style="display:none">
              <!-- Wrapper exactement aux dimensions de la carte -->
              <div class="expl-mini-card" style="position:relative;width:${ye}px;height:${Le}px;border-radius:8px;overflow:hidden">
                ${De}
                <!-- Overlay vert sélection — couvre toute la carte -->
                <div class="expl-sel-overlay" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(26,107,60,0.38);pointer-events:none;z-index:10;box-shadow:inset 0 0 0 3px #1A6B3C;border-radius:8px"></div>
                <!-- Checkmark -->
                <div class="expl-sel-check" style="display:none;position:absolute;top:5px;left:5px;width:20px;height:20px;background:#1A6B3C;border-radius:50%;z-index:11;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:900">✓</div>
                ${ce?'<div style="position:absolute;top:0;right:0;background:#e67e22;color:#fff;font-size:6px;font-weight:900;padding:2px 4px;border-radius:0 6px 0 4px;z-index:12">VENTE</div>':""}
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
              ${(t.evolution_bonus||0)>0?`+${t.evolution_bonus} appliqué${t.evolution_bonus>1?"s":""} · Note : ${Y}${l.job2&&W>0?` / ${K}`:""}`:`Note actuelle : ${Y}${l.job2&&W>0?` / ${K}`:""}`}
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
          ${w!==null&&v!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${w.toLocaleString("fr")}</b> – <b>${v.toLocaleString("fr")}</b> cr. / carte
          </div>`:""}
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${w||l.sell_price||5e3}"
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
    </div>`:"";a(`${l.firstname} ${l.surname_real}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${Ae({...l,_evolution_bonus:g},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:12px">

        <!-- Rareté + carte évolutive -->
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:3px">RARETÉ</div>
          <div style="font-weight:900;font-size:15px;color:${l.rarity==="normal"?"#555":l.rarity==="papyte"?"#707070":T}">${l.rarity.toUpperCase()}</div>
          ${l.rarity==="pepite"||l.rarity==="papyte"?`
          <div style="margin-top:8px;background:${T}12;border-left:3px solid ${T};border-radius:0 8px 8px 0;padding:10px 12px">
            <div style="font-size:11px;font-weight:700;color:${T};margin-bottom:4px">✨ Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5;margin-bottom:6px">
              ${l.rarity==="pepite"?'⬆️ Bonus évolution : <b style="color:#D4A017">+30%</b>':'⬇️ Malus évolution : <b style="color:#909090">-30%</b>'}
            </div>
            <div style="font-size:10.5px;color:#888;line-height:1.5;font-style:italic;border-top:1px solid ${T}30;padding-top:6px">
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
            <div style="font-weight:700;font-size:13px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${((de=l.clubs)==null?void 0:de.encoded_name)||"—"}</div>
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
            ${[["GK",l.note_g],["DEF",l.note_d],["MIL",l.note_m],["ATT",l.note_a]].map(([F,H])=>{const ae=ei[F],ce=F==="GK"?"#fff":ae,be=F===l.job||F===l.job2,ke=(Number(H)||0)+(be&&I>0?I:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${ae};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${ce};font-family:Arial Black,Arial;line-height:1">${ke}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${ce}">${F}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:900;font-size:18px;color:#1A6B3C">×${b}</div>
        </div>
      </div>
    </div>
    ${N}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(j=document.getElementById("close-detail"))==null||j.addEventListener("click",d);let G=new Set;const le=l.rarity==="pepite"?1.3:l.rarity==="papyte"?.7:1;function pe(){let F=0;return document.querySelectorAll(".expl-check:checked").forEach(H=>{if(H.dataset.id===t.id)return;const ce=Number(H.dataset.evo)||0,be=Number(H.dataset.note)||0;F+=be+ce}),Math.round(F*le)}const M=()=>{const F=G.size,H=document.getElementById("sell-action-panel");if(!H)return;H.style.display=F>0?"block":"none",document.getElementById("sell-selected-count").textContent=F;const ae=document.getElementById("evolve-btn");if(ae){const ce=pe();ae.textContent=ce>0?`⬆️ Évoluer (+${ce})`:"⬆️ Évoluer"}};document.querySelectorAll(".expl-check").forEach(F=>{F.addEventListener("change",()=>{const H=F.dataset.id;F.checked?G.add(H):G.delete(H);const ae=F.closest(".exemplaire-row");if(ae){const ce=ae.querySelector(".expl-sel-overlay"),be=ae.querySelector(".expl-sel-check");ce&&(ce.style.display=F.checked?"block":"none"),be&&(be.style.display=F.checked?"flex":"none"),ae.style.transform=F.checked?"scale(1.05)":"scale(1)"}M()})}),document.querySelectorAll(".exemplaire-row").forEach(F=>{F.addEventListener("click",H=>{if(H.target.tagName==="INPUT")return;const ae=F.querySelector(".expl-check");ae&&!ae.disabled&&(ae.checked=!ae.checked,ae.dispatchEvent(new Event("change")))})}),(V=document.getElementById("evolve-btn"))==null||V.addEventListener("click",async()=>{if(b<=1)return;const F=[...G];if(!F.length)return;if(G.has(t.id)){const ye=document.createElement("div");ye.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ye.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(ye),ye.querySelector("#err-close").addEventListener("click",()=>ye.remove()),ye.addEventListener("click",Le=>{Le.target===ye&&ye.remove()});return}const H=F.filter(ye=>ye!==t.id);if(!H.length){n("Sélectionne des copies à sacrifier","warning");return}const ae=H.reduce((ye,Le)=>{const De=document.querySelector(`.expl-check[data-id="${Le}"]`),Me=De&&Number(De.dataset.evo)||0,Ce=De&&Number(De.dataset.note)||0;return ye+Ce+Me},0),ce=Math.round(ae*le),be=l.rarity==="pepite"?" (+30% pépite ✨)":l.rarity==="papyte"?" (-30% papyte)":"";if(!await new Promise(ye=>{const Le=document.createElement("div");Le.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",Le.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${l.firstname} ${l.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${H.length}</strong> copie${H.length>1?"s":""} sacrifiée${H.length>1?"s":""}<br>
            ➕ Brut : <strong>+${ae}</strong>${be?`<span style="font-size:11px;color:#888"> ${be}</span>`:""}<br>
            ⬆️ Bonus final : <strong style="color:#1A6B3C">+${ce}</strong><br>
            📈 Évolution : <strong>${t.evolution_bonus||0}</strong> → <strong style="color:#1A6B3C">${(t.evolution_bonus||0)+ce}</strong><br>
            📊 Note finale : <strong>${E}</strong> → <strong style="color:#1A6B3C">${E+ce}</strong>
            ${m&&m>0?`<br>📊 Note 2 finale : <strong>${m}</strong> → <strong style="color:#1A6B3C">${m+ce}</strong>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(Le),Le.querySelector("#sac-cancel").addEventListener("click",()=>{Le.remove(),ye(!1)}),Le.querySelector("#sac-ok").addEventListener("click",()=>{Le.remove(),ye(!0)}),Le.addEventListener("click",De=>{De.target===Le&&(Le.remove(),ye(!1))})}))return;if(H.length){await h.from("market_listings").delete().in("card_id",H),await h.from("deck_cards").delete().in("card_id",H),await h.from("transfer_history").delete().in("card_id",H),await h.from("decks").update({stadium_card_id:null}).in("stadium_card_id",H);const{error:ye}=await h.from("cards").delete().in("id",H);if(ye){n("Erreur suppression : "+ye.message,"error");return}}const Ee=(t.evolution_bonus||0)+ce,{error:Se}=await h.from("cards").update({evolution_bonus:Ee}).eq("id",t.id);if(Se){n("Erreur évolution : "+Se.message,"error");return}n(`⬆️ ${l.firstname} ${l.surname_real} : note ${E} → ${E+Ee} (+${ce}) !`,"success",4e3),d(),c("collection")});async function O(F){const{data:H}=await h.from("sell_price_configs").select("price_min, price_max").eq("rarity",l.rarity).lte("note_min",E).gte("note_max",E).order("note_max",{ascending:!0}).limit(1).maybeSingle();return H?F<H.price_min||F>H.price_max?{ok:!1,min:H.price_min,max:H.price_max}:{ok:!0}:{ok:!0}}(re=document.getElementById("market-sell-btn"))==null||re.addEventListener("click",async()=>{var Ee;const F=[...G];if(!F.length){n("Sélectionne au moins un exemplaire","warning");return}const H=parseInt((Ee=document.getElementById("sell-market-price"))==null?void 0:Ee.value);if(!H||H<1){n("Prix invalide","error");return}const ae=await O(H);if(!ae.ok){n(`Prix hors grille : entre ${ae.min.toLocaleString("fr")} et ${ae.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:ce}=await h.from("cards").update({is_for_sale:!0,sale_price:H}).in("id",F);if(ce){n(ce.message,"error");return}const be=F.map(Se=>({seller_id:r.profile.id,card_id:Se,price:H,status:"active"})),{error:ke}=await h.from("market_listings").insert(be);ke&&console.warn("[Market] insert listings:",ke.message),n(`${F.length} carte${F.length>1?"s":""} mise${F.length>1?"s":""} en vente à ${H.toLocaleString("fr")} cr. chacune !`,"success"),d(),c("collection")}),(te=document.getElementById("single-sell-btn"))==null||te.addEventListener("click",async()=>{var be;const F=parseInt((be=document.getElementById("single-sell-price"))==null?void 0:be.value);if(!F||F<1){n("Prix invalide","error");return}const H=await O(F);if(!H.ok){n(`Prix hors grille : entre ${H.min.toLocaleString("fr")} et ${H.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:ae}=await h.from("cards").update({is_for_sale:!0,sale_price:F}).eq("id",t.id);if(ae){n(ae.message,"error");return}const{error:ce}=await h.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:F,status:"active"});ce&&console.warn("[Market] insert listing:",ce.message),n(`Carte mise en vente à ${F.toLocaleString("fr")} cr. !`,"success"),d(),c("collection")}),(X=document.getElementById("single-direct-sell-btn"))==null||X.addEventListener("click",async()=>{const F=w??u;if(!confirm(`Vendre cette carte immédiatement pour ${F.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;await h.from("market_listings").delete().eq("card_id",t.id),await h.from("transfer_history").delete().eq("card_id",t.id);const{error:H}=await h.from("cards").delete().eq("id",t.id);if(H){n(H.message,"error");return}await h.from("users").update({credits:(r.profile.credits||0)+F}).eq("id",r.profile.id),await s(),n(`+${F.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),d(),c("collection")}),(P=document.getElementById("market-direct-sell-btn"))==null||P.addEventListener("click",async()=>{const F=[...G];if(!F.length){n("Sélectionne au moins un exemplaire","warning");return}const ae=(w??u)*F.length;if(!confirm(`Vendre ${F.length} carte${F.length>1?"s":""} immédiatement pour ${ae.toLocaleString("fr")} crédits au total ? Cette action est irréversible.`))return;await h.from("market_listings").delete().in("card_id",F),await h.from("transfer_history").delete().in("card_id",F);const{error:ce}=await h.from("cards").delete().in("id",F);if(ce){n(ce.message,"error");return}await h.from("users").update({credits:(r.profile.credits||0)+ae}).eq("id",r.profile.id),await s(),n(`+${ae.toLocaleString("fr")} crédits ! ${F.length} carte${F.length>1?"s":""} vendue${F.length>1?"s":""}.`,"success"),d(),c("collection")}),(J=document.getElementById("cancel-sell-btn"))==null||J.addEventListener("click",async()=>{await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await h.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),d(),c("collection")})}function Mo(t,e=""){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${t}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(e||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const r=o.querySelector("#pm-input");r.focus(),r.select();const n=a=>{o.remove(),i(a)};o.querySelector("#pm-ok").addEventListener("click",()=>n(r.value.trim()||null)),o.querySelector("#pm-cancel").addEventListener("click",()=>n(null)),o.querySelector("#pm-cancel2").addEventListener("click",()=>n(null)),o.addEventListener("click",a=>{a.target===o&&n(null)}),r.addEventListener("keydown",a=>{a.key==="Enter"&&n(r.value.trim()||null),a.key==="Escape"&&n(null)})})}function Tr(t,e=!1){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${t}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${e?"":"btn-primary"}" id="cm-ok" style="${e?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const r=n=>{o.remove(),i(n)};o.querySelector("#cm-ok").addEventListener("click",()=>r(!0)),o.querySelector("#cm-cancel").addEventListener("click",()=>r(!1)),o.addEventListener("click",n=>{n.target===o&&r(!1)})})}const ki={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Ui(t,e){const{state:i,navigate:o,toast:r}=e;Yt(o,i.profile,"decks","/icons/",r),t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await h.from("decks").select("id,name,formation,stadium_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1}),a=[...new Set((n||[]).map(c=>c.stadium_card_id).filter(Boolean))];let d={};if(a.length){const{data:c}=await h.from("cards").select("id, stadium_id, stadium_definitions(image_url, country_code, club:clubs(logo_url))").in("id",a);(c||[]).forEach(s=>{var b;const l=s.stadium_definitions,p=((b=l==null?void 0:l.club)==null?void 0:b.logo_url)||(l!=null&&l.image_url?`/icons/${l.image_url}`:null)||(l!=null&&l.country_code?`https://flagsapi.com/${l.country_code}/flat/64.png`:null);d[s.id]=p})}t.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const c=await Mo("Nom du deck",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!c)return;const{data:s,error:l}=await h.from("decks").insert({owner_id:i.profile.id,name:c}).select().single();if(l){r(l.message,"error");return}r("Deck créé !","success"),Co(s.id,t,e)}),t.querySelectorAll("[data-open-deck]").forEach(c=>{c.addEventListener("click",()=>Co(c.dataset.openDeck,t,e))}),t.querySelectorAll("[data-rename]").forEach(c=>{c.addEventListener("click",async()=>{const s=await Mo("Nouveau nom",c.dataset.name);if(!s||s===c.dataset.name)return;const{error:l}=await h.from("decks").update({name:s}).eq("id",c.dataset.rename);if(l){r(l.message,"error");return}r("Deck renommé !","success"),Ui(t,e)})}),t.querySelectorAll("[data-delete]").forEach(c=>{c.addEventListener("click",async()=>{if(!await Tr(`Supprimer le deck "${c.dataset.name}" ? Cette action est irréversible.`,!0))return;await h.from("deck_cards").delete().eq("deck_id",c.dataset.delete);const{error:s}=await h.from("decks").delete().eq("id",c.dataset.delete);if(s){r(s.message,"error");return}r("Deck supprimé.","success"),Ui(t,e)})})}async function Co(t,e,i){const{state:o,toast:r}=i;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await h.from("decks").select("*").eq("id",t).single(),{data:a}=await h.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:d}=await h.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id).eq("card_type","stadium"),c=(a||[]).filter(u=>u.card_type==="player"&&u.player),s=(a||[]).filter(u=>u.card_type==="formation"),l=(d||[]).filter(u=>u.card_type==="stadium"),p=[...new Set(l.map(u=>u.stadium_id).filter(Boolean))];let b={};if(l.forEach(u=>{u.stadium_def&&u.stadium_id&&(b[u.stadium_id]=u.stadium_def)}),p.length&&Object.keys(b).length<p.length){const{data:u}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",p);(u||[]).forEach(w=>{b[w.id]=w})}const g=s.map(u=>u.formation).filter(Boolean),{data:x}=await h.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",t);let f=n.formation||"4-4-2";g.length>0&&!g.includes(f)&&(f=g[0]);const y={deckId:t,name:n.name,formation:f,formationCardId:n.formation_card_id,stadiumCardId:n.stadium_card_id||null,slots:{},subs:[],playerCards:c,formationCards:s,stadiumCards:l,stadDefMap:b,availableFormations:g};(x||[]).forEach(u=>{u.is_starter?y.slots[u.position]=u.card_id:y.subs.includes(u.card_id)||y.subs.push(u.card_id)}),Lt(e,y,i,!0)}function Lt(t,e,i,o=!1){var f,y;const{navigate:r}=i;o||Cr(e,i),ki[e.formation];const n=jo(e.formation),a=n.filter(u=>e.slots[u]).length,d=e.availableFormations.length>0?e.availableFormations:Object.keys(ki),c=(f=e.stadiumCards)==null?void 0:f.find(u=>u.id===e.stadiumCardId),s=c&&((y=e.stadDefMap)==null?void 0:y[c.stadium_id])||null,l=e.subs.map(u=>e.playerCards.find(w=>w.id===u)).filter(Boolean);l.length!==e.subs.length&&(e.subs=l.map(u=>u.id)),[...Object.values(e.slots),...e.subs],t.innerHTML=`
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
            ${l.map(u=>{const w={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:24px">
                ${Ae({...w,_evolution_bonus:w._evolution_bonus||0},{width:90,showStad:!0,stadDef:s})}
                <button data-remove-sub="${u.id}"
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
              ${c?(()=>{var v;const u=e.stadDefMap[c.stadium_id],w=((v=u==null?void 0:u.club)==null?void 0:v.logo_url)||(u==null?void 0:u.image_url)||(u!=null&&u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ut((u==null?void 0:u.name)||"Stade",w,"+10 ⭐",{width:100})})():`<div style="width:100px;height:171px;border:2px dashed rgba(79,195,247,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
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
              ${l.map(u=>{const w={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:20px">
                  ${Ae({...w,_evolution_bonus:w._evolution_bonus||0},{width:44,showStad:!0,stadDef:s})}
                  <button data-remove-sub="${u.id}"
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
              ${c?(()=>{var v;const u=e.stadDefMap[c.stadium_id],w=((v=u==null?void 0:u.club)==null?void 0:v.logo_url)||(u==null?void 0:u.image_url)||(u!=null&&u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ut((u==null?void 0:u.name)||"Stade",w,"+10⭐",{width:44})})():`<div style="width:44px;height:57px;border:2px dashed rgba(79,195,247,0.5);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
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
  </div>`;const p=window.innerWidth>=900,b=t.querySelector(".deck-pc-layout"),g=t.querySelector(".deck-mobile-layout");b&&(b.style.display=p?"block":"none"),g&&(g.style.display=p?"none":"block"),t.querySelectorAll("#save-deck").forEach(u=>{u.closest(".page-body").style.display=p?"none":"block"}),Ir(t,e,n,i),t.querySelectorAll("#builder-back").forEach(u=>u.addEventListener("click",()=>r("decks")));const x=()=>{const{openModal:u,closeModal:w}=i,E=`<div style="display:flex;flex-wrap:wrap;gap:12px;padding:8px;justify-content:center">
      ${[...new Set(d)].map(m=>{const T=m===e.formation;return`<div data-forma="${m}" style="cursor:pointer;border-radius:10px;${T?"box-shadow:0 0 0 3px #1A6B3C":""}">
          ${si(m,ut[m],{width:90})}
        </div>`}).join("")}
    </div>`;u("⚽ Choisir une formation",E),document.querySelectorAll("#modal-body [data-forma]").forEach(m=>{m.addEventListener("click",()=>{e.formation=m.dataset.forma;const T=jo(e.formation),$={};T.forEach(I=>{e.slots[I]&&($[I]=e.slots[I])}),e.slots=$,w(),Lt(t,e,i)})})};t.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(u=>u.addEventListener("click",x)),t.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(u=>u.addEventListener("click",()=>zr(e,t,i))),t.querySelectorAll("#save-deck, #save-deck-pc").forEach(u=>u.addEventListener("click",()=>jr(e,i))),t.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{e.subs=e.subs.filter(w=>w!==u.dataset.removeSub),Lt(t,e,i)})}),t.querySelectorAll("#add-sub-btn").forEach(u=>u.addEventListener("click",()=>Mr(e,t,i)))}function Ir(t,e,i,o){var v,E,m;const r=window.innerWidth>=900,n=t.querySelector(r?"#deck-field-pc":"#deck-field-mobile");if(!n)return;const a=(v=e.stadiumCards)==null?void 0:v.find(T=>T.id===e.stadiumCardId),d=a&&((E=e.stadDefMap)==null?void 0:E[a.stadium_id])||null,c=ut[e.formation]||{},s=Ii(e.formation)||[],l={};for(const T of i){const $=e.slots[T],I=$?e.playerCards.find(B=>B.id===$):null;I!=null&&I.player?l[T]={...I.player,_evolution_bonus:I.evolution_bonus||0,face:I.player.face||null}:l[T]=null}const p=window.innerWidth>=900,b=p?window.innerWidth-280:window.innerWidth-20,g=p?Math.min(b,860):b,x=Math.round(p?g*.82:g*.85),f=p?84:44;let y="";for(const[T,$]of s){const I=c[T],B=c[$];if(!I||!B)continue;const Y=I.x*g,W=Math.round(.03*x+I.y*.85*x),K=B.x*g,L=Math.round(.03*x+B.y*.85*x),_=l[T],N=l[$],G=Ft(_,N);G==="#ff3333"||G==="#cc2222"?y+=`<line x1="${Y.toFixed(1)}" y1="${W.toFixed(1)}" x2="${K.toFixed(1)}" y2="${L.toFixed(1)}" stroke="${G}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(y+=`<line x1="${Y.toFixed(1)}" y1="${W.toFixed(1)}" x2="${K.toFixed(1)}" y2="${L.toFixed(1)}" stroke="${G}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,y+=`<line x1="${Y.toFixed(1)}" y1="${W.toFixed(1)}" x2="${K.toFixed(1)}" y2="${L.toFixed(1)}" stroke="${G}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let u="";const w=Math.round(f*657/507);for(const T of i){const $=c[T];if(!$)continue;const I=l[T],B=$.x*g;$.y*x;const Y=Math.round(.03*x+$.y*(.85*x)),W=Math.round(B-f/2),K=Math.round(Y-w/2);if(I){const L=T.replace(/\d+/,""),_=d&&(d.club_id&&String(I.club_id)===String(d.club_id)||d.country_code&&I.country_code===d.country_code),N=Ae({...I,_evolution_bonus:I._evolution_bonus||0},{width:f,showStad:!0,stadDef:d,role:L});_&&((m=d.club)!=null&&m.logo_url||d.image_url),u+=`<div style="position:absolute;left:${W}px;top:${K}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${T}">
        <div style="position:relative">${N}</div>
      </div>`}else{const L=T.replace(/\d+/,"");u+=`<div style="position:absolute;left:${W}px;top:${K}px;width:${f}px;height:${w}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${T}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${L}</span>
      </div>`}}n.innerHTML=`
    <div style="position:relative;width:${g}px;height:${x}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${g} ${x}">${y}</svg>
      ${u}
    </div>`,n.querySelectorAll(".deck-slot-hit").forEach(T=>{T.addEventListener("click",()=>Ar(T.dataset.pos,e,t,o))})}function zr(t,e,i){var d;const{openModal:o,closeModal:r}=i,n=new Set,a=(t.stadiumCards||[]).filter(c=>{const s=c.stadium_id||c.id;return n.has(s)?!1:(n.add(s),!0)});o("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:90px;text-align:center">
        <div style="width:85px;height:112px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${t.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:26px">🚫</span>
          <span style="font-size:10px;color:#666">Aucun</span>
        </div>
      </div>
      ${a.map(c=>{var g;const s=t.stadDefMap[c.stadium_id],l=((g=s==null?void 0:s.club)==null?void 0:g.logo_url)||(s==null?void 0:s.image_url)||(s!=null&&s.country_code?`https://flagsapi.com/${s.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),p=t.stadiumCardId===c.id,b=Ut((s==null?void 0:s.name)||"Stade",l,"+10⭐",{width:90});return`<div class="stad-choice" data-stad-id="${c.id}" style="cursor:pointer;position:relative;border-radius:8px;${p?"box-shadow:0 0 0 3px #4fc3f7":""}">
          ${b}
        </div>`}).join("")}
    </div>`),(d=document.getElementById("stad-none"))==null||d.addEventListener("click",()=>{t.stadiumCardId=null,r(),Lt(e,t,i)}),document.querySelectorAll(".stad-choice").forEach(c=>{c.addEventListener("click",()=>{t.stadiumCardId=c.dataset.stadId,r(),Lt(e,t,i)})})}function Ar(t,e,i,o){var x,f,y,u,w;const{openModal:r,closeModal:n}=o,a=t.replace(/\d+/,""),d=(x=e.stadiumCards)==null?void 0:x.find(v=>v.id===e.stadiumCardId),c=d&&((f=e.stadDefMap)==null?void 0:f[d.stadium_id])||null,s=e.slots[t],l=s?e.playerCards.find(v=>v.id===s):null;(y=l==null?void 0:l.player)==null||y.id;const p=new Set;Object.entries(e.slots).forEach(([v,E])=>{var T;if(v===t||!E)return;const m=e.playerCards.find($=>$.id===E);(T=m==null?void 0:m.player)!=null&&T.id&&p.add(m.player.id)}),e.subs.forEach(v=>{var m;const E=e.playerCards.find(T=>T.id===v);(m=E==null?void 0:E.player)!=null&&m.id&&p.add(E.player.id)});const b=new Set,g=e.playerCards.filter(v=>{const E=v.player;return!(E.job===a||E.job2===a)||p.has(E.id)||b.has(E.id)?!1:(b.add(E.id),!0)});g.sort((v,E)=>{const m=v.evolution_bonus||0,T=E.evolution_bonus||0,$=(a==="GK"?v.player.note_g:a==="DEF"?v.player.note_d:a==="MIL"?v.player.note_m:v.player.note_a)+(a===v.player.job||a===v.player.job2?m:0);return(a==="GK"?E.player.note_g:a==="DEF"?E.player.note_d:a==="MIL"?E.player.note_m:E.player.note_a)+(a===E.player.job||a===E.player.job2?T:0)-$}),r(`Choisir ${a} — ${t}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${e.slots[t]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${g.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+g.map(v=>{const E={...v.player,_evolution_bonus:v.evolution_bonus||0};return`<div class="player-option" data-card-id="${v.id}" style="cursor:pointer">
          ${Ae(E,{width:100,showStad:!0,stadDef:c,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(u=document.getElementById("close-selector"))==null||u.addEventListener("click",n),(w=document.getElementById("remove-player"))==null||w.addEventListener("click",()=>{delete e.slots[t],n(),Lt(i,e,o)}),document.querySelectorAll(".player-option").forEach(v=>{v.addEventListener("click",()=>{e.slots[t]=v.dataset.cardId,n(),Lt(i,e,o)})})}function Mr(t,e,i){var l,p,b;const{openModal:o,closeModal:r}=i,n=(l=t.stadiumCards)==null?void 0:l.find(g=>g.id===t.stadiumCardId),a=n&&((p=t.stadDefMap)==null?void 0:p[n.stadium_id])||null,d=new Set;Object.keys(t.slots).forEach(g=>{var y;const x=t.slots[g];if(!x)return;const f=t.playerCards.find(u=>u.id===x);(y=f==null?void 0:f.player)!=null&&y.id&&d.add(f.player.id)}),t.subs.forEach(g=>{var f;const x=t.playerCards.find(y=>y.id===g);(f=x==null?void 0:x.player)!=null&&f.id&&d.add(x.player.id)});const c=new Set,s=t.playerCards.filter(g=>{var x,f,y;return d.has((x=g.player)==null?void 0:x.id)||c.has((f=g.player)==null?void 0:f.id)?!1:(c.add((y=g.player)==null?void 0:y.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+s.map(g=>{const x={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div class="player-option" data-card-id="${g.id}" style="cursor:pointer">
          ${Ae(x,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(b=document.getElementById("close-sub-selector"))==null||b.addEventListener("click",r),document.querySelectorAll(".player-option").forEach(g=>{g.addEventListener("click",()=>{t.subs.push(g.dataset.cardId),r(),Lt(e,t,i)})})}async function fn(t){const e=t.formationCards.find(r=>r.formation===t.formation),i=(e==null?void 0:e.id)||t.formationCardId;await h.from("decks").update({formation:t.formation,formation_card_id:i||null,stadium_card_id:t.stadiumCardId||null}).eq("id",t.deckId),await h.from("deck_cards").delete().eq("deck_id",t.deckId);const o=[];return Object.entries(t.slots).forEach(([r,n],a)=>{o.push({deck_id:t.deckId,card_id:n,position:r,is_starter:!0,slot_order:a})}),t.subs.forEach((r,n)=>{o.push({deck_id:t.deckId,card_id:r,position:`SUB${n+1}`,is_starter:!1,slot_order:100+n})}),o.length>0?await h.from("deck_cards").insert(o):{error:null}}let Ki=null;function Cr(t,e){const{toast:i}=e;clearTimeout(Ki),document.querySelectorAll(".autosave-indicator").forEach(r=>{r.textContent="⏳ Enregistrement...",r.style.opacity="1",r.style.color=""}),Ki=setTimeout(async()=>{const{error:r}=await fn(t),n=document.querySelectorAll(".autosave-indicator");if(r){n.forEach(a=>{a.textContent="⚠️ Erreur d'enregistrement",a.style.color="#ff6b6b"}),i(r.message,"error");return}n.forEach(a=>{a.textContent="✅ Enregistré",a.style.color="",setTimeout(()=>{a.style.opacity="0"},1500)})},600)}async function jr(t,e){const{toast:i,navigate:o}=e;clearTimeout(Ki);const{error:r}=await fn(t);if(r){i(r.message,"error");return}i("Deck enregistré ✅","success"),o("decks")}function jo(t){const e=ki[t]||ki["4-4-2"],i=["GK1"];for(let o=1;o<=e.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=e.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=e.ATT;o++)i.push(`ATT${o}`);return i}const St={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},qr={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ct(t,e,i,o,r){var n;t.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${e}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${o}</button>
    </div>
  </div>`,(n=document.getElementById("msg-btn"))==null||n.addEventListener("click",r)}function Vi(t,e){var n,a;const i=t.player,o=t.evolution_bonus||0,r=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:t.id,position:e||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?o:0)+(i.job2==="GK"&&r>0?o:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?o:0)+(i.job2==="DEF"&&r>0?o:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?o:0)+(i.job2==="MIL"&&r>0?o:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?o:0)+(i.job2==="ATT"&&r>0?o:0),evolution_bonus:o,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((n=i.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ui(t,e){if(!e||!t)return t;const{club_id:i,country_code:o}=e;return Object.values(t).forEach(r=>{Array.isArray(r)&&r.forEach(n=>{const a=i&&String(n.club_id)===String(i),d=o&&String(n.country_code)===String(o);(a||d)&&(n.stadiumBonus=!0)})}),t}function $i(t,e){if(!e||!(t!=null&&t.length))return t;const{club_id:i,country_code:o}=e;return t.forEach(r=>{if(!r)return;const n=i&&String(r.club_id)===String(i),a=o&&String(r.country_code)===String(o);(n||a)&&(r.stadiumBonus=!0)}),t}function lt(t){return t===1?[1]:t===2?[0,2]:t===3?[0,1,2]:t===4?[0,1,1,2]:t===5?[0,1,1,1,2]:[1]}function mn(){const t=Math.random()*100;return t<10?10:t<30?5:3}function Ei(t,e){const i=St[e]||St["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]};if(t.length&&t.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const d=t.filter(s=>s.position&&s.position.replace(/\d+$/,"")===a).sort((s,l)=>parseInt(s.position.replace(/\D+/g,""),10)-parseInt(l.position.replace(/\D+/g,""),10)).map(s=>({...s,_line:a})),c=lt(d.length);d.forEach((s,l)=>{s._col=c[l]}),o[a]=d}return o}const n=[...t];for(const a of["GK","DEF","MIL","ATT"]){const d=[];for(let s=0;s<i[a];s++){let l=n.findIndex(p=>p.job===a);if(l===-1&&(l=n.findIndex(p=>p.job2===a)),l===-1&&(l=0),n[l]){const p={...n[l],_line:a};d.push(p),n.splice(l,1)}}const c=lt(d.length);d.forEach((s,l)=>{s._col=c[l]}),o[a]=d}return o}function ct(t){document.querySelectorAll(".top-nav, .bottom-nav").forEach(e=>{e.style.setProperty("display","none","important"),e.dataset.matchHidden="1"}),t&&t.style.setProperty("padding-bottom","0","important")}function Ye(t){document.querySelectorAll(".top-nav, .bottom-nav").forEach(e=>{e.style.removeProperty("display"),delete e.dataset.matchHidden}),t&&t.style.removeProperty("padding-bottom")}function Ai(t,e,i){const r=new Set,n=e.filter(l=>{var b;const p=((b=l._gcDef)==null?void 0:b.name)||l.gc_type||l.id;return r.has(p)?!1:(r.add(p),!0)});let a=[];function d(l,p){const b=l._gcDef,g=(b==null?void 0:b.name)||l.gc_type,x=b!=null&&b.image_url?`/icons/${b.image_url}`:null,f=nt(g,x,"⚡",(b==null?void 0:b.effect)||"",{width:100});return`<div class="gc-select-card" data-id="${l.id}"
      style="position:relative;flex-shrink:0;cursor:pointer;border-radius:10px;
        outline:${p?"3px solid #FFD700":"none"};
        box-shadow:${p?"0 0 18px #FFD700":"none"};
        transform:${p?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      ${f}
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
        ${n.map(x=>{const f=a.find(y=>y.gc_type===x.gc_type);return d(x,!!f)}).join("")}
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
    </div>`,t.querySelectorAll(".gc-select-card").forEach(x=>{x.addEventListener("click",()=>{const f=x.dataset.id,y=n.find(w=>w.id===f);if(!y)return;const u=a.findIndex(w=>w.gc_type===y.gc_type);u>-1?a.splice(u,1):a.length<3&&a.push(y),s()})}),(p=t.querySelector("#gc-launch"))==null||p.addEventListener("click",()=>{l&&c(a)}),(b=t.querySelector("#gc-no-gc"))==null||b.addEventListener("click",()=>c([])),(g=t.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{a.length&&(a=[],s())})}s()}function Br(t,e){var r;const i=((r=e==null?void 0:e.state)==null?void 0:r.params)||{},o=t||i.matchMode||"vs_ai_easy";return o==="friend"?`Match vs ${i.friendName||"Ami"}`:o==="random"?"Match vs Random":o==="ranked"?"Match Classé":o==="mini_league"||o==="mini-league"?"🏆 Match de Mini League":`Match vs IA — ${o.replace("vs_ai_","").toUpperCase()}`}async function Dr(t,e,i){const{state:o,navigate:r}=e;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await h.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",o.profile.id).order("created_at",{ascending:!1});if(!n||n.length===0){Ct(t,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>r("decks"));return}const a=n.map(b=>b.id),{data:d}=await h.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),c=[...new Set((d||[]).filter(b=>{var g,x;return((g=b.card)==null?void 0:g.card_type)==="stadium"&&((x=b.card)==null?void 0:x.stadium_id)}).map(b=>b.card.stadium_id))],s={};if(c.length){const{data:b}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",c);(b||[]).forEach(g=>{s[g.id]=g}),(d||[]).forEach(g=>{var x,f;((x=g.card)==null?void 0:x.card_type)==="stadium"&&((f=g.card)!=null&&f.stadium_id)&&(g.card._stadiumDef=s[g.card.stadium_id]||null)})}let l=0;function p(){var m,T,$,I,B,Y,W;const b=n[l],g=(d||[]).filter(K=>K.deck_id===b.id),x=g.filter(K=>{var L;return K.is_starter&&((L=K.card)==null?void 0:L.player)}).map(K=>Vi(K.card,K.position)),f=g.find(K=>{var L;return((L=K.card)==null?void 0:L.card_type)==="formation"}),y=b.formation||((m=f==null?void 0:f.card)==null?void 0:m.formation)||"4-4-2";let u=x.length>=11?Ei(x,y):null,w=((T=b.stadium_card)==null?void 0:T.stadium_def)||null;w&&u&&(u=ui(u,w));const v=x.length>=11;ct(t),t.style.height="100%",t.style.overflow="hidden",t.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff;position:relative">
      <button id="cancel-deck-select" style="position:absolute;top:8px;right:10px;z-index:10;width:32px;height:32px;border-radius:50%;border:none;background:rgba(180,30,30,0.85);color:#fff;font-size:18px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Br(i,e)}</div>
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
        ${w?`
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
          <span style="font-size:12px;font-weight:700">${w.name}</span>
          <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${(($=w.club)==null?void 0:$.encoded_name)||w.country_code||""}</span>
        </div>`:""}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${u?'<div class="deck-preview-wrap" style="overflow:visible;width:100%;min-height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${x.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${n.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${n.map((K,L)=>`<div style="width:6px;height:6px;border-radius:50%;background:${L===l?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${v?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${v?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${v?"pointer":"default"}">
          ${v?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function K(){const L=t.querySelector(".deck-preview-wrap"),_=t.querySelector("#deck-swipe-zone");if(!L||!_||!u)return;const N=_.clientWidth>=900,G=Math.max(200,_.clientHeight-(N?60:40)),pe=Math.max(200,_.clientWidth-16),M=N?Math.min(117,Math.max(52,Math.round(pe*.22))):Math.max(44,Math.round(pe*.168));if(G<220||pe<220){requestAnimationFrame(K);return}const O=N?null:Math.round(M*.55);L.innerHTML=Kt(u,y,null,[],pe,G,[],O),L.style.cssText=`width:${pe}px;height:${G}px;overflow:hidden;margin:${N?0:60}px auto 0`;const ue=L.querySelector("svg");ue&&(ue.style.cssText="display:block;width:100%;height:100%",ue.setAttribute("preserveAspectRatio",N?"xMidYMid meet":"none"))})),(I=document.getElementById("prev-deck"))==null||I.addEventListener("click",()=>{l>0&&(l--,p())}),(B=document.getElementById("next-deck"))==null||B.addEventListener("click",()=>{l<n.length-1&&(l++,p())}),(Y=document.getElementById("validate-deck"))==null||Y.addEventListener("click",()=>{if(!v)return;const K=e.state.params||{};e.navigate("match",{...K,matchMode:K.matchMode||i,deckId:b.id})}),(W=document.getElementById("cancel-deck-select"))==null||W.addEventListener("click",()=>{Ye(t),r("home")});const E=document.getElementById("deck-swipe-zone");if(E){let K=0,L=0;E.addEventListener("touchstart",_=>{K=_.touches[0].clientX,L=_.touches[0].clientY},{passive:!0}),E.addEventListener("touchend",_=>{const N=_.changedTouches[0].clientX-K,G=_.changedTouches[0].clientY-L;Math.abs(N)<40||Math.abs(N)<Math.abs(G)||(N<0&&l<n.length-1?(l++,p()):N>0&&l>0&&(l--,p()))},{passive:!0})}}p()}function Et(t,e=44,i=58,o=null){return Ae(t,{width:e,showStad:!!o,stadDef:o,used:t==null?void 0:t.used})}function et(t,e,i,o,r){if(!(t!=null&&t.length))return"";const n=t.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((d,c)=>{const s=d._line||d.job||"MIL";let l=d.boost||0;if(d.stadiumBonus&&(o==="attack"&&(s==="ATT"||s==="MIL")||o==="defense"&&(s==="GK"||s==="DEF"||s==="MIL")?l+=10:o||(l+=10)),a+=Ae({...d,_evolution_bonus:0,evolution_bonus:0},{width:40,role:s,extraNote:l}),c<n.length-1){const p=n[c+1],b=cn(d,p,r)?Ft(d,p):null;a+=`<div style="width:7px;height:3px;background:${!b||b==="#ff3333"||b==="#cc2222"?"rgba(255,255,255,0.12)":b};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${e};color:${e==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function Mi(t,e,i,o,r=310,n=310,a=[],d=null){const c=ut[e]||{},s=Ii(e)||zi[e]||[],l={},p=["ATT","MIL","DEF","GK"];for(const u of p)(t[u]||[]).forEach((v,E)=>{l[`${u}${E+1}`]=v});function b(u){const w=c[u];return w?{x:w.x*r,y:w.y*n}:null}let g="";for(const[u,w]of s){const v=b(u),E=b(w);if(!v||!E)continue;const m=l[u],T=l[w],$=Ft(m,T);$==="#00ff88"||$==="#FFD700"?(g+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${$}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,g+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${$}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):g+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${$}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const x=typeof window<"u"&&window.innerWidth>=900?Math.min(Math.max(81,Math.round(r*.225)),117):Math.max(44,Math.round(r*.168)),f=Math.round(x*657/507);for(const[u,w]of Object.entries(l)){const v=b(u);if(!v||!w)continue;const E=u.replace(/[0-9]/g,""),m=a.includes(w.cardId),T=i==="attack"&&(["MIL","ATT"].includes(E)||m)&&!w.used||i==="defense"&&["GK","DEF","MIL"].includes(E)&&!w.used,$=o.includes(w.cardId);let I=w.boost||0,B=!1;w.stadiumBonus&&(i==="attack"&&(E==="ATT"||E==="MIL")||i==="defense"&&(E==="GK"||E==="DEF"||E==="MIL")?(I+=10,B=!0):i||(I+=10,B=!0));const Y=Math.round(v.x-x/2),W=Math.round(v.y-f/2);if(w.used){g+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${Y}" y="${W}" width="${x}" height="${f}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${w.cardId}" data-role="${E}" style="cursor:pointer"/>`;continue}const K=Ae({...w,_evolution_bonus:0,stadiumBonus:!1},{width:x,showStad:!1,stadDef:null,role:E,extraNote:I,_cardOffset:30,_forceStadColor:B}),L=$?`position:absolute;top:30px;left:0;width:${x}px;height:${f}px;outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;pointer-events:none;`:"";g+=`<foreignObject x="${Y-2}" y="${W-30}" width="${x+8}" height="${f+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">
        ${K}
        ${$?`<div style="${L}"></div>`:""}
      </div>
    </foreignObject>`,T&&(g+=`<rect x="${Y}" y="${W}" width="${x}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${$?"selected":""}" data-card-id="${w.cardId}" data-role="${E}" style="cursor:pointer"/>`)}const y=d!==null?d:Math.round(Math.max(x*.7,80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-y} ${-y} ${r+y*2} ${n+y*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${g}
  </svg>`}function Kt(t,e,i,o,r=300,n=300,a=[],d=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Mi(t,e,i,o,r,n,a,d)}
  </div>`}async function Ci(t,e,i,o){var T;const{state:r,navigate:n,toast:a}=e;ct(t);const d=r.params||{};if(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!d.deckId)return Dr(t,e,i);const c=d.deckId;let s,l,p,b;try{const $=await Promise.all([h.from("decks").select("formation,name,stadium_card_id").eq("id",c).single(),h.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);s=$[0].data,p=$[0].error,l=$[1].data,b=$[1].error}catch($){console.error("[Match] Exception chargement deck:",$),Ct(t,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>n("home"));return}if(p||b){console.error("[Match] Erreur Supabase:",p||b),Ct(t,"⚠️","Erreur lors du chargement du deck.","Retour",()=>n("home"));return}const g=(l||[]).filter($=>{var I;return $.is_starter&&((I=$.card)==null?void 0:I.player)}).map($=>Vi($.card,$.position)),x=(l||[]).filter($=>{var I;return!$.is_starter&&((I=$.card)==null?void 0:I.player)}).map($=>Vi($.card,$.position));if(g.length<11){Ct(t,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>n("decks"));return}const f=(l||[]).find($=>{var I;return((I=$.card)==null?void 0:I.card_type)==="formation"}),y=(s==null?void 0:s.formation)||((T=f==null?void 0:f.card)==null?void 0:T.formation)||"4-4-2",{data:u,error:w}=await h.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",r.profile.id).eq("card_type","game_changer"),{data:v}=await h.from("gc_definitions").select("*").eq("is_active",!0),E=(u||[]).map($=>({...$,_gcDef:(v==null?void 0:v.find(I=>I.name===$.gc_type||I.id===$.gc_definition_id))||null}));let m=null;if(s!=null&&s.stadium_card_id){const{data:$}=await h.from("cards").select("stadium_id").eq("id",s.stadium_card_id).single();if($!=null&&$.stadium_id){const{data:I}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",$.stadium_id).single();m=I||null}}o({deckId:c,formation:y,starters:g,subsRaw:x,gcCardsEnriched:E,gcDefs:v||[],stadiumDef:m})}function jt(){return Math.min(window.innerWidth-40,860)}function Ht(){return Math.round(jt()*1.1)}function gn(t){var r,n;if(!t)return null;const e=t._line||t.job||"MIL",i=e==="GK"?t.note_g||0:e==="DEF"?t.note_d||0:e==="MIL"?t.note_m||0:t.note_a||0,o=t.stadiumBonus?10:0;return{name:t.name,firstname:t.firstname||"",note:i+(t.boost||0)+o,note_g:t.note_g||0,note_d:t.note_d||0,note_m:t.note_m||0,note_a:t.note_a||0,_evolution_bonus:0,stadiumBonus:t.stadiumBonus||!1,boost:t.boost||0,job:t.job,job2:t.job2||null,_line:t._line||t.job,_col:t._col,country_code:t.country_code,club_id:t.club_id,rarity:t.rarity,clubName:t.clubName||((r=t.clubs)==null?void 0:r.encoded_name)||null,clubLogo:t.clubLogo||((n=t.clubs)==null?void 0:n.logo_url)||null,face:t.face||null,portrait:Bt(t)}}function Fr(t,e,i,o="Adversaire"){Wo("/sounds/match-opening.mp3",.3);const r=jt(),n=Ht();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${o}</div>
      
      <div style="width:100%;max-width:${r}px;margin:0 auto">
        ${Mi(t,e,null,[],r,n)}
      </div>
    </div>`}function xn(t){var n,a,d;if(!t)return"";const e=c=>c?Ae({...c,_evolution_bonus:0},{width:52,role:c._line||c.job,showStad:!!c.stadiumBonus,extraNote:c.boost||0}):"",o={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[t.type]||"📋";return`
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
    </div>`}function tt(t,e,i,o,r){to("/sounds/goal.mp3",.7);const n=document.getElementById("goal-anim-overlay");n&&n.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
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
      }`,document.head.appendChild(c)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),r==null||r()},400)},1800)}function Pr(t,e,i){const o=document.getElementById("sub-anim-overlay");o&&o.remove();const r=document.createElement("div");r.id="sub-anim-overlay",r.style.cssText=`
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
      }`,document.head.appendChild(n)}document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.3s",setTimeout(()=>r.remove(),300)},i)}function bn(t,e){const i=Re(t,"MIL"),o=t.stadiumBonus||e&&(e.club_id&&String(t.club_id)===String(e.club_id)||e.country_code&&t.country_code===e.country_code)?10:0;return i+o}function wt(t,e){return t.reduce((i,o)=>i+bn(o,e),0)}function _t(t){let e=0;for(let i=0;i<t.length-1;i++){const o=Ft(t[i],t[i+1]);o==="#00ff88"?e+=10:o==="#FFD700"&&(e+=5)}return e}function Li(t,e,i,o,r){return`<div id="duel-row-${o}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${e}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${t.map((n,a)=>{const d=a<t.length-1?Ft(n,t[a+1]):null,c=!d||d==="#ff3333"||d==="#cc2222",s=d==="#00ff88"?"+10":d==="#FFD700"?"+5":"";return bn(n,r),n.stadiumBonus||r&&(r.club_id&&String(n.club_id)===String(r.club_id)||r.country_code&&(n.country_code,r.country_code)),`
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
    </div>`}async function Rr(t,e){const{state:i}=e,o=i.params||{},r=o.matchMode||"vs_ai_easy",n=r==="solo",a=r==="ranked_ai",d=o.soloLevel||1,c=r.replace("vs_ai_",""),s=r;let l=null;if(n){const{data:x}=await h.from("solo_levels").select("*").eq("level_number",d).maybeSingle();l=x||{level_number:d,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500}}const p=o.rankedData||null,b=o.presetSetup||null;async function g({deckId:x,formation:f,starters:y,subsRaw:u,gcCardsEnriched:w,gcDefs:v,stadiumDef:E}){try{let m=Ei(y,f);E&&(m=ui(m,E),$i(u,E));let T=null;if(a){const Y=Gr(m),{jaune:W,vert:K}=Or(m,f),L=.9+Math.random()*.2;T={target_note_avg:Math.max(1,Math.round(Y*L/16)),nb_liens_jaune:W,nb_liens_vert:K,nb_joueurs_stade:E?3:0}}const $=n?await Bo(f,l):a?await Bo(f,T):await Nr(f,c),I=$.lines||$,B=async Y=>{try{const W=s==="vs_ai_club"||s==="solo"||s==="ranked_ai"?"club":s,{data:K,error:L}=await h.from("matches").insert({home_id:i.profile.id,away_id:null,mode:W,home_deck_id:x,status:"in_progress"}).select().single();if(L){console.error("[MatchIA] Erreur création match:",L),Ct(t,"⚠️","Impossible de créer le match ("+L.message+").","Retour",()=>e.navigate("home"));return}const _=$.stadiumDef||null;_&&I&&(ui(I,_),$i($.subs||[],_));const N={gcDefs:v||[],matchId:K==null?void 0:K.id,mode:s,difficulty:c,formation:f,isSolo:n,soloLevel:d,soloLevelConfig:l,isRankedAI:a,rankedAIData:p,homeTeam:m,aiTeam:I,homeSubs:u,subsUsed:0,maxSubs:Math.min(u.length,3),aiSubs:$.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min(($.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:$.gcCards||[],aiUsedGc:[],aiStadiumDef:_,homeScore:0,aiScore:0,gcCards:Y,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Hr(t,N,e)}catch(W){console.error("[MatchIA] Exception launchMatch:",W),Ct(t,"⚠️","Erreur au lancement du match : "+W.message,"Retour",()=>e.navigate("home"))}};if(a&&b){B(b.gcCardsEnriched||[]);return}if(!w.length){B([]);return}Ai(t,w,B)}catch(m){console.error("[MatchIA] Exception setup:",m),Ct(t,"⚠️","Erreur de préparation du match : "+m.message,"Retour",()=>e.navigate("home"))}}b?await g(b):await Ci(t,e,r,g)}async function Nr(t,e){var y;const{data:i}=await h.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:yn(t),subs:[],gcCards:[],stadiumDef:null};const o=St[t]||St["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},n=new Set;function a(u,w,v){var E,m;return n.add(u.id),{cardId:"ai-"+u.id+"-"+v,id:u.id,firstname:u.firstname,name:u.surname_real,country_code:u.country_code,club_id:u.club_id,job:u.job,job2:u.job2,note_g:Number(u.note_g)||0,note_d:Number(u.note_d)||0,note_m:Number(u.note_m)||0,note_a:Number(u.note_a)||0,rarity:u.rarity,skin:u.skin,hair:u.hair,hair_length:u.hair_length,face:u.face,clubName:((E=u.clubs)==null?void 0:E.encoded_name)||null,clubLogo:((m=u.clubs)==null?void 0:m.logo_url)||null,boost:0,used:!1,_line:w}}for(const u of["GK","DEF","MIL","ATT"]){const w=i.filter($=>$.job===u&&!n.has($.id)),v=i.filter($=>$.job!==u&&!n.has($.id)),E=[...w,...v],m=[];for(let $=0;$<o[u];$++){const I=E[$];I&&m.push(a(I,u,$))}const T=lt(m.length);m.forEach(($,I)=>{$._col=T[I]}),r[u]=m}const c=i.filter(u=>!n.has(u.id)).slice(0,5).map((u,w)=>a(u,u.job,100+w)),{data:s}=await h.from("gc_definitions").select("*").eq("is_active",!0),p=[...s||[]].sort(()=>Math.random()-.5).slice(0,3).map((u,w)=>({id:"ai-gc-"+w,gc_type:u.name,name:u.name,icon:"⚡",effect_type:u.effect_type,effect_params:u.effect_params||{}})),b=Object.values(r).flat(),g={};b.forEach(u=>{u.club_id&&(g[u.club_id]=(g[u.club_id]||0)+1)});const x=(y=Object.entries(g).sort((u,w)=>w[1]-u[1])[0])==null?void 0:y[0];let f=null;if(x){const{data:u}=await h.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",x).single();u&&(f={club_id:u.id,country_code:null,name:u.encoded_name+" Stadium",club:{encoded_name:u.encoded_name,logo_url:u.logo_url}})}return{lines:r,subs:c,gcCards:p,stadiumDef:f}}function Gr(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{const r=o._line||i,n=Number(r==="GK"?o.note_g:r==="DEF"?o.note_d:r==="MIL"?o.note_m:o.note_a)||0;e+=n+(o.boost||0)});return e}function Or(t,e){const i={};for(const a of["GK","DEF","MIL","ATT"])(t[a]||[]).forEach((d,c)=>{i[`${a}${c+1}`]=d});const o=Ii(e)||zi[e]||[];let r=0,n=0;for(const[a,d]of o){const c=i[a],s=i[d];if(!c||!s)continue;const l=Ft(c,s);l==="#00ff88"?n++:l==="#FFD700"&&r++}return{jaune:r,vert:n}}function qo(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function bi(t,e,i){if(i<=0||!t.length)return[];const o=[...t].sort((r,n)=>Math.abs(qo(r)-e)-Math.abs(qo(n)-e));return o.slice(0,Math.min(i,o.length))}async function Bo(t,e){var K,L;const i=Number(e==null?void 0:e.target_note_avg)||10,o=Number(e==null?void 0:e.nb_liens_jaune)||0,r=Number(e==null?void 0:e.nb_liens_vert)||0,n=Number(e==null?void 0:e.nb_joueurs_stade)||0,{data:a}=await h.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url,country_code)").eq("is_active",!0).limit(300);if(!a||a.length<16)return{lines:yn(t),subs:[],gcCards:[],stadiumDef:null};const d={};a.forEach(_=>{_.club_id&&(d[_.club_id]=(d[_.club_id]||0)+1)});const c=((K=Object.entries(d).sort((_,N)=>N[1]-_[1])[0])==null?void 0:K[0])||null,s=c?a.filter(_=>_.club_id===c):[],l=((L=s[0])==null?void 0:L.country_code)||null,p=l?a.filter(_=>_.country_code===l&&_.club_id!==c):[],b=Math.min(s.length,Math.max(2,r+1),16),g=Math.min(p.length,Math.max(0,o),16-b),x=[],f=new Set;bi(s,i,b).forEach(_=>{x.push(_),f.add(_.id)}),bi(p,i,g).forEach(_=>{x.push(_),f.add(_.id)});const y=Math.max(0,16-x.length),u=a.filter(_=>!f.has(_.id));bi(u,i,y).forEach(_=>{x.push(_),f.add(_.id)});const w=St[t]||St["4-4-2"],v={GK:[],DEF:[],MIL:[],ATT:[]},E=new Set;function m(_,N,G){var le,pe;return E.add(_.id),{cardId:"ai-"+_.id+"-"+G,id:_.id,firstname:_.firstname,name:_.surname_real,country_code:_.country_code,club_id:_.club_id,job:_.job,job2:_.job2,note_g:Number(_.note_g)||0,note_d:Number(_.note_d)||0,note_m:Number(_.note_m)||0,note_a:Number(_.note_a)||0,rarity:_.rarity,skin:_.skin,hair:_.hair,hair_length:_.hair_length,face:_.face,clubName:((le=_.clubs)==null?void 0:le.encoded_name)||null,clubLogo:((pe=_.clubs)==null?void 0:pe.logo_url)||null,boost:0,used:!1,_line:N}}for(const _ of["GK","DEF","MIL","ATT"]){const N=x.filter(O=>O.job===_&&!E.has(O.id)),G=x.filter(O=>O.job!==_&&!E.has(O.id)),le=[...N,...G],pe=[];for(let O=0;O<w[_];O++){const ue=le[O];ue&&pe.push(m(ue,_,O))}const M=lt(pe.length);pe.forEach((O,ue)=>{O._col=M[ue]}),v[_]=pe}let T=x.filter(_=>!E.has(_.id));if(T.length<5){const _=a.filter(N=>!E.has(N.id)&&!T.some(G=>G.id===N.id));T=T.concat(bi(_,i,5-T.length))}const $=T.slice(0,5).map((_,N)=>m(_,_.job,100+N)),{data:I}=await h.from("gc_definitions").select("*").eq("is_active",!0),Y=[...I||[]].sort(()=>Math.random()-.5).slice(0,3).map((_,N)=>({id:"ai-gc-"+N,gc_type:_.name,name:_.name,icon:"⚡",effect_type:_.effect_type,effect_params:_.effect_params||{}}));let W=null;if(n>0&&c){const{data:_}=await h.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",c).single();_&&(W={club_id:_.id,country_code:null,name:_.encoded_name+" Stadium",club:{encoded_name:_.encoded_name,logo_url:_.logo_url}})}return{lines:v,subs:$,gcCards:Y,stadiumDef:W}}function yn(t){const e=St[t]||St["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let r=0;for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let c=0;c<e[n];c++){const s=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+r,id:"fake-"+r,firstname:"IA",name:o[r%o.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?s:2,note_d:n==="DEF"?s:2,note_m:n==="MIL"?s:2,note_a:n==="ATT"?s:2,rarity:"normal",boost:0,used:!1,_line:n}),r++}const d=lt(a.length);a.forEach((c,s)=>{c._col=d[s]}),i[n]=a}return i}function Hr(t,e,i){var r;Wo("/sounds/match-opening.mp3",.3);const o=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const n=t.querySelector(".opponent-preview-wrap"),a=t.querySelector("#opponent-swipe-zone");if(!n||!a)return;const d=a.clientWidth>=900,c=Math.max(200,a.clientHeight-(d?8:40)),s=Math.max(200,a.clientWidth-(d?8:16)),l=d?null:Math.round(Math.max(44,Math.round(s*.168))*.55);n.innerHTML=Kt(e.aiTeam,e.formation,null,[],s,c,[],l),n.style.cssText=`width:${s}px;height:${c}px;overflow:hidden;flex-shrink:0`;const p=n.querySelector("svg");p&&(p.style.cssText="display:block;width:100%;height:100%",p.setAttribute("preserveAspectRatio",d?"xMidYMid meet":"none"))})),setTimeout(()=>Ur(t,e,i),5e3)}const We=t=>gn(t);function Ur(t,e,i){const o=e.homeTeam.MIL||[],r=e.aiTeam.MIL||[],n=e.stadiumDef||null,a=e.aiStadiumDef||null,d=wt(o,n)+_t(o),c=wt(r,a)+_t(r),s=d>=c;t.innerHTML=`
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

    ${Li(o,e.clubName,"#D4A017","home",n)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${Li(r,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const l=()=>{const x=(f,y)=>t.querySelectorAll(f).forEach((u,w)=>{setTimeout(()=>{u.style.opacity="1",u.style.transform="translateY(0) scale(1)"},y+w*90)});x(".duel-card-home",150),x(".duel-card-ai",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((f,y)=>{setTimeout(()=>{f.style.opacity="1"},y*70)}),900),setTimeout(()=>{const f=t.querySelector("#vs-label");f&&(f.style.opacity="1",f.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(y=>y.style.opacity="1")},1250),setTimeout(()=>{p("score-home",d,800),p("score-ai",c,800)},1500)};function p(x,f,y){const u=document.getElementById(x);if(!u)return;const w=performance.now(),v=E=>{const m=Math.min(1,(E-w)/y);u.textContent=Math.round(f*(1-Math.pow(1-m,3))),m<1?requestAnimationFrame(v):u.textContent=f};requestAnimationFrame(v)}requestAnimationFrame(l),e.attacker=s?"home":"ai";const b=s?mn():null;s&&(e.boostCard={value:b}),e.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(x=>We(x)),aiPlayers:r.map(x=>We(x)),homeTotal:d,aiTotal:c,text:`Duel milieu : ${e.clubName} ${d} – ${c} IA → ${s?e.clubName+" attaque":"IA attaque"}`});const g=()=>{e.phase=e.attacker==="home"?"attack":"ai-attack",Ie(t,e,i),e.attacker==="ai"&&setTimeout(()=>uo(t,e,i),800)};setTimeout(()=>{const x=document.getElementById("score-home"),f=document.getElementById("score-ai"),y=document.getElementById(s?"duel-row-home":"duel-row-ai"),u=document.getElementById(s?"duel-row-ai":"duel-row-home"),w=s?x:f,v=s?f:x;w&&(w.style.fontSize="80px",w.style.color=s?"#FFD700":"#ff6b6b",w.style.animation="duelPulse .5s ease"+(s?", duelGlow 1.5s ease infinite .5s":"")),v&&(v.style.opacity="0.25"),setTimeout(()=>{y&&(y.style.transformOrigin="center",y.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",y.style.zIndex="5"),setTimeout(()=>{var m;const E=document.getElementById("duel-shock");if(E){const T=(m=u||y)==null?void 0:m.getBoundingClientRect(),$=t.querySelector(".match-screen").getBoundingClientRect();T&&(E.style.top=T.top-$.top+T.height/2+"px"),E.style.animation="shockwave .5s ease-out forwards"}u&&(u.style.transformOrigin="center",u.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var m;const E=document.getElementById("duel-finale");E&&(E.innerHTML=`
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
          </button>`,E.style.transition="opacity .45s ease",E.style.opacity="1",E.style.pointerEvents="auto",(m=document.getElementById("start-match-btn"))==null||m.addEventListener("click",g))},600)},700)},2800)}function Ie(t,e,i){var Y,W,K,L,_,N,G,le,pe;const o=e.selected.map(M=>M.cardId),r=e.usedSubIds||[],n=e.homeSubs.filter(M=>!r.includes(M.cardId)),d=Object.values(e.homeTeam).flat().filter(M=>M.used).length>0&&n.length>0&&e.subsUsed<e.maxSubs,c=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(M=>!M.used),s=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(M=>!M.used),l=Vt(e.aiTeam),p=c.length===0&&s.length===0&&!l,b=(e.homeTeam.DEF||[]).filter(M=>!M.used),g=(e.homeTeam.GK||[]).filter(M=>!M.used);let x=[];e.phase==="attack"&&c.length===0&&(l?(x=b.map(M=>M.cardId),b.length===0&&(x=x.concat(g.map(M=>M.cardId)))):p&&(x=[...b,...g].map(M=>M.cardId))),e.log[e.log.length-1];const f=e.phase==="ai-attack"||e.phase==="ai-defense",y=e.phase==="attack",u=e.phase==="defense",w=e.phase==="finished",E=(e.homeSubs||[]).filter(M=>!(e.usedSubIds||[]).includes(M.cardId)).length>0&&e.subsUsed<e.maxSubs,m=y&&c.length===0&&x.length===0&&!E,T=e.gcCards.filter(M=>!e.usedGc.includes(M.id)),$=e.boostCard&&!e.boostUsed;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.innerHTML=`
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
      ${(()=>{if(e.phase==="defense"&&e.pendingAttack){const O=e.pendingAttack;let ue="";if(e.selected.length>0){const ge=e.selected.map(de=>({...(e.homeTeam[de._role]||[]).find(V=>V.cardId===de.cardId)||de,_line:de._role})),xe=pi(ge,e.modifiers.home,e.formation);ue=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${e.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${et(ge.map(de=>({...de,used:!1})),"#3a7bd5",xe.total,"defense",e.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${et((O.players||[]).map(ge=>({...ge,used:!1})),"#ff6b6b",O.total,"attack",e.formation)}</div>
            ${ue}
          </div>`}if(e.phase==="ai-defense"&&e.pendingAttack){const O=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${et((O.players||[]).map(ue=>({...ue,used:!1})),"#00ff88",O.total,"attack",e.formation)}</div>
          </div>`}if(e.phase==="attack"&&e.selected.length>0){const O=e.selected.map(ge=>{const xe=(e.homeTeam[ge._role]||[]).find(j=>j.cardId===ge.cardId)||ge,de=["GK","DEF"].includes(ge._role);return{...xe,_line:ge._role,...de?{note_a:Math.max(1,Number(xe.note_a)||0)}:{}}}),ue=ci(O,e.modifiers.home,e.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${e.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${et(O.map(ge=>({...ge,used:!1})),"#FFD700",ue.total,"attack",e.formation)}</div>
          </div>`}const M=e.log[e.log.length-1];return M?'<div style="padding:2px 4px">'+xn(M)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${e.log.length})
    </button>

    ${(()=>{const M=window.innerWidth>=700,O=(X,P,J)=>{var ke,Ee;const F=(e.gcDefs||[]).find(Se=>Se.name===X.gc_type),H=(F==null?void 0:F.name)||X.gc_type,ae=(F==null?void 0:F.effect)||((ke=Oe[X.gc_type])==null?void 0:ke.desc)||"",ce=F!=null&&F.image_url?`/icons/${F.image_url}`:null,be=((Ee=Oe[X.gc_type])==null?void 0:Ee.icon)||"⚡";return`<div class="gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${nt(H,ce,be,ae,{width:P})}
        </div>`},ue=(X,P)=>{var J;return`<div id="boost-card"
          style="box-sizing:border-box;width:${X}px;height:${P}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(P*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(P*.2)}px">⚡</div>
            <div style="font-size:${Math.round(P*.09)}px;color:#000;font-weight:900">+${(J=e.boostCard)==null?void 0:J.value}</div>
          </div>`},ge=(X,P)=>P?ue(95,162):O(X,95),xe=(X,P)=>P?ue(53,90):O(X,53),de=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",j=w?`<button id="btn-results" style="${de};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${de};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:m?`<button id="btn-pass" style="${de};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:y?`<button id="btn-action" style="${de};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${e.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:u?`<button id="btn-action" style="${de};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${e.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${de};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,V=y||u?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${e.selected.length}/3 sélectionné(s)</div>`:"",re=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
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
              ${j}${V}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${T.map(X=>ge(X,!1)).join("")}
            ${$?ge(null,!0):""}
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
            ${T.map(X=>xe(X,!1)).join("")}
            ${$?xe(null,!0):""}
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
          <div>${j}${V}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${e.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...e.log].reverse().map(M=>{var O,ue,ge;if(M.type==="duel"){const xe=M.isGoal,de=M.homeScored?"#FFD700":xe?"#ff6b6b":"rgba(255,255,255,0.3)",j=M.homeScored?"⚽ BUT !":xe?"⚽ BUT IA !":(O=M.homePlayers)!=null&&O.length?"⚔️ Attaque":"🛡️ Défense",V=(M.homeTotal??0)>=(M.aiTotal??0);return`<div style="padding:8px;border-radius:8px;background:${xe?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${de};margin-bottom:4px">
                <div style="font-size:9px;color:${de};letter-spacing:1px;margin-bottom:6px;font-weight:700;text-transform:uppercase;text-align:center">${j}</div>
                <div style="display:flex;align-items:center;justify-content:center;gap:10px">
                  ${(ue=M.aiPlayers)!=null&&ue.length?`<div style="flex:1;display:flex;justify-content:flex-end;opacity:0.75">${et(M.aiPlayers,"#ff6b6b",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                  <div style="flex-shrink:0;display:flex;align-items:center;gap:6px">
                    <span style="font-size:16px;font-weight:900;color:${V?"#e03030":"#22c55e"}">${M.aiTotal??"–"}</span>
                    <span style="font-size:9px;color:rgba(255,255,255,0.3)">VS</span>
                    <span style="font-size:16px;font-weight:900;color:${V?"#22c55e":"#e03030"}">${M.homeTotal??"–"}</span>
                  </div>
                  ${(ge=M.homePlayers)!=null&&ge.length?`<div style="flex:1;display:flex;justify-content:flex-start">${et(M.homePlayers,"rgba(255,255,255,0.7)",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
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
  </div>`;function I(){const M=t.querySelector(".match-screen");if(!M)return;const O=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);M.style.bottom="auto",M.style.height=O+"px",M.style.minHeight=O+"px",M.style.maxHeight=O+"px",M.style.overflow="hidden";const ue=t.querySelector("#mobile-action-bar"),ge=t.querySelector("#mobile-play-area");ue&&ge&&(ge.style.paddingBottom=ue.offsetHeight+"px")}if(I(),setTimeout(I,120),setTimeout(I,400),setTimeout(I,1e3),e._vvBound||(e._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",I),window.visualViewport.addEventListener("scroll",I)),window.addEventListener("resize",I)),function(){const O=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!O)return;const ue=O.closest("#match-terrain-wrap");ue&&(ue.style.cssText="position:relative;width:100%;height:100%;padding:0"),O.removeAttribute("width"),O.removeAttribute("height"),O.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",O.setAttribute("preserveAspectRatio","xMidYMid meet")}(),e._resizeBound||(e._resizeBound=!0,window.addEventListener("resize",()=>{const M=t.querySelector(".terrain-wrapper svg");if(M){const O=M.closest("#match-terrain-wrap");O&&(O.style.cssText="position:relative;width:100%;height:100%;padding:0"),M.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ve(),e.phase==="attack"||e.phase==="defense"){let M=!1,O=30;const ue=()=>document.getElementById("match-timer"),ge=()=>{const xe=ue();if(!xe)return;const de=String(Math.floor(O/60)).padStart(2,"0"),j=String(O%60).padStart(2,"0");xe.textContent=` ${de}:${j}`,xe.style.color=M?"#ff2222":"#ff9500",xe.style.fontWeight="900"};ge(),e._timerInt=setInterval(()=>{if(O--,O<0)if(!M)M=!0,O=15,ge(),Xo("/sounds/timer-urgent.mp3",.6);else{clearInterval(e._timerInt),e._timerInt=null,Ve(),e.homeScore=0,e.aiScore=3;const xe=document.createElement("div");xe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",xe.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(xe),setTimeout(()=>{xe.remove(),kt(t,e,i)},2500)}else ge()},1e3)}(Y=document.getElementById("match-quit"))==null||Y.addEventListener("click",()=>{Ye(t),confirm("Abandonner ? Résultat : défaite 3-0")&&(e.homeScore=0,e.aiScore=3,kt(t,e,i))}),(W=document.getElementById("view-ai"))==null||W.addEventListener("click",()=>oa(e,i)),(K=document.getElementById("toggle-history"))==null||K.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.add("open")}),(L=document.getElementById("close-history"))==null||L.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.remove("open")}),(_=document.getElementById("btn-action"))==null||_.addEventListener("click",()=>{e.selected.length!==0&&(y?Vr(t,e,i):u&&Yr(t,e,i))}),(N=document.getElementById("btn-results"))==null||N.addEventListener("click",()=>kt(t,e,i)),(G=document.getElementById("btn-pass"))==null||G.addEventListener("click",()=>{if(e.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Yi(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),kt(t,e,i);return}e.phase="ai-attack",Ie(t,e,i),setTimeout(()=>uo(t,e,i),800)}),t.querySelectorAll(".match-slot-hit").forEach(M=>{M.addEventListener("click",()=>Kr(M,e,t,i))}),t.querySelectorAll(".match-used-hit").forEach(M=>{M.addEventListener("click",()=>Ri(t,e,i,null,M.dataset.cardId))}),t.querySelectorAll(".gc-mini").forEach(M=>{y?M.addEventListener("click",()=>Zr(M.dataset.gcId,M.dataset.gcType,t,e,i)):(M.style.opacity="0.35",M.style.cursor="default",M.addEventListener("click",()=>It("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(le=document.getElementById("boost-card"))==null||le.addEventListener("click",()=>ia(t,e,i)),t.querySelectorAll(".sub-btn-col").forEach(M=>{M.addEventListener("click",()=>Ri(t,e,i,M.dataset.subId))}),(pe=document.getElementById("sub-btn-main"))==null||pe.addEventListener("click",()=>Ri(t,e,i))}function Kr(t,e,i,o){const r=t.dataset.cardId,n=t.dataset.role,a=e.selected.findIndex(d=>d.cardId===r);if(a!==-1)e.selected.splice(a,1);else{if(e.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const d=(e.homeTeam[n]||[]).find(c=>c.cardId===r);d&&e.selected.push({...d,_role:n,_line:n})}Ie(i,e,o)}function po(t,e,i){t.matchId&&h.from("matches").update({last_player_id:i}).eq("id",t.matchId).then(()=>{})}function Vr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ve(),po(e,i,i.state.profile.id);const o=e.selected.map(n=>{const a=(e.homeTeam[n._role]||[]).find(c=>c.cardId===n.cardId)||n,d=["GK","DEF"].includes(n._role);return{...a,_line:n._role,...d?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),r=ci(o,e.modifiers.home,e.formation);e.pendingAttack={...r,players:[...o],side:"home"},e.selected.forEach(n=>{const a=(e.homeTeam[n._role]||[]).find(d=>d.cardId===n.cardId);a&&(a.used=!0)}),e.log.push({text:`⚔️ Vous attaquez : ${r.total} (base ${r.base}${r.links?` +${r.links} liens`:""}) — ${e.selected.map(n=>n.name).join(", ")}`,type:"info"}),e.selected=[],e.modifiers.home={},e.phase="ai-defense",Ie(t,e,i),setTimeout(()=>Qr(t,e,i),1200)}function Yr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ve(),po(e,i,i.state.profile.id);const o=e.stadiumDef||null,r=e.selected.map(c=>{const s=(e.homeTeam[c._role]||[]).find(p=>p.cardId===c.cardId)||c,l=s.stadiumBonus||o&&(o.club_id&&String(s.club_id)===String(o.club_id)||o.country_code&&s.country_code===o.country_code)||!1;return{...s,_line:c._role,stadiumBonus:l}}),n=pi(r,e.modifiers.home,e.formation);e.selected.forEach(c=>{const s=(e.homeTeam[c._role]||[]).find(l=>l.cardId===c.cardId);s&&(s.used=!0)});const a=co(e.pendingAttack.total,n.total,e.modifiers.home),d={type:"duel",title:"Défense",aiPlayers:(e.pendingAttack.players||[]).map(c=>We(c)),homePlayers:e.selected.map(c=>{const s=(e.homeTeam[c._role]||[]).find(l=>l.cardId===c.cardId)||c;return We(s)}),homeTotal:n.total,aiTotal:e.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)d.text="🛡️ Bouclier ! But annulé.",e.log.push(d);else if(a.goal){e.aiScore++,d.isGoal=!0,d.homeScored=!1,d.text=`⚽ BUT IA ! (${e.pendingAttack.total} > ${n.total})`,e.log.push(d),e.selected=[],e.modifiers.home={},e.pendingAttack=null,Ie(t,e,i),tt(d.aiPlayers,e.homeScore,e.aiScore,!1,()=>{qt(t,e,i,"home-attack")});return}else d.text=`🧤 Défense réussie ! (${n.total} ≥ ${e.pendingAttack.total})`,e.log.push(d);e.selected=[],e.modifiers.home={},e.pendingAttack=null,qt(t,e,i,"home-attack")}function Wr(t){if(t.aiSubsUsed>=t.aiMaxSubs)return;const e=Object.values(t.aiTeam).flat().filter(c=>c.used);if(!e.length)return;const i=(t.aiSubs||[]).filter(c=>!t.aiUsedSubIds.includes(c.cardId));if(!i.length)return;const o=e[Math.floor(Math.random()*e.length)],r=i.find(c=>c.job===o.job)||i[0],n={...r,used:!1,_line:o._line,_col:o._col},a=t.aiTeam[o._line],d=a.findIndex(c=>c.cardId===o.cardId);d!==-1&&(a[d]=n),t.aiUsedSubIds.push(r.cardId),t.aiSubsUsed++,t.log.push({text:`🔄 IA : ${r.firstname} ${r.name} remplace ${o.firstname} ${o.name}`,type:"info"})}function Xr(t,e){const i=t.effect_params||{},o=i.value||1,r=i.count||1,n=i.roles||[],a=i.target||"home";switch(t.effect_type){case"BOOST_STAT":{const c=Object.values(e.aiTeam).flat().filter(s=>!s.used&&(!n.length||n.includes(s._line))).sort(()=>Math.random()-.5).slice(0,r);c.forEach(s=>{s.boost=(s.boost||0)+o}),c.length&&e.log.push({text:`⚡ IA : +${o} sur ${c.length} joueur(s)`,type:"gc"});break}case"DEBUFF_STAT":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(l=>!l.used&&(!n.length||n.includes(l._line))).sort(()=>Math.random()-.5).slice(0,r);s.forEach(l=>{l.boost=(l.boost||0)-o}),s.length&&e.log.push({text:`🎯 IA : -${o} sur ${s.length} joueur(s)${a!=="ai"?" (vous)":""}`,type:"gc"});break}case"GRAY_PLAYER":{const d=a==="ai"?e.aiTeam:e.homeTeam,s=Object.values(d).flat().filter(l=>!l.used&&(!n.length||n.includes(l._line))).sort(()=>Math.random()-.5).slice(0,r);s.forEach(l=>{l.used=!0}),s.length&&e.log.push({text:`❌ IA : ${s.length} joueur(s)${a!=="ai"?" (vous)":""} exclu(s)`,type:"gc"});break}case"REVIVE_PLAYER":{const c=Object.values(e.aiTeam).flat().filter(s=>s.used).sort(()=>Math.random()-.5).slice(0,r);c.forEach(s=>{s.used=!1}),c.length&&e.log.push({text:`💫 IA : ${c.length} joueur(s) ressuscité(s)`,type:"gc"});break}case"REMOVE_GOAL":e.homeScore>0&&(e.homeScore--,e.log.push({text:"🚫 IA : votre dernier but est annulé !",type:"gc"}));break;case"ADD_GOAL_DRAW":e.homeScore===e.aiScore&&(e.aiScore++,e.log.push({text:"🎯 IA : but bonus (match nul) !",type:"gc"}));break;case"ADD_SUB":e.aiMaxSubs=(e.aiMaxSubs||3)+o,e.log.push({text:`🔄 IA : +${o} remplacement(s)`,type:"gc"});break}}function Jr(t){var o;if(!((o=t.aiGcCards)!=null&&o.length))return;const e=t.aiGcCards.filter(r=>!t.aiUsedGc.includes(r.id));if(!e.length||Math.random()>.5)return;const i=e[Math.floor(Math.random()*e.length)];t.aiUsedGc.push(i.id),i.effect_type?Xr(i,t):t.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function uo(t,e,i){po(e,i,null),Wr(e),Jr(e);let o=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(l=>!l.used),r=!1;if(!o.length){const l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(b=>!b.used),p=Vt(e.homeTeam);if(p||l.length===0){const b=(e.aiTeam.DEF||[]).filter(x=>!x.used),g=(e.aiTeam.GK||[]).filter(x=>!x.used);o=p?b.length?b:g:[...b,...g],r=!0}}const n=un(o,"attack",e.difficulty);if(!n.length){Wi(t,e,i);return}r&&n.forEach(l=>{l._line=l._line||l.job,l.note_a=Math.max(1,Number(l.note_a)||0)});const a=ci(n,e.modifiers.ai,e.formation);e.pendingAttack={...a,players:n,side:"ai"},n.forEach(l=>{l.used=!0}),e.log.push({text:`🤖 IA attaque : ${a.total} (${n.map(l=>l.name).join(", ")})`,type:"info"}),e.modifiers.ai={};const d=[...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(l=>!l.used),s=(e.homeSubs||[]).filter(l=>!(e.usedSubIds||[]).includes(l.cardId)).length>0&&e.subsUsed<e.maxSubs;if(d.length===0&&!s){if(n.length===1&&(n[0]._line==="GK"||n[0].job==="GK")&&Vt(e.homeTeam)&&e.homeScore===e.aiScore){e.aiScore++,Si(t,e,i,"ai",n[0]);return}e.aiScore++;const p={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:n.map(b=>We(b)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};e.log.push(p),e.pendingAttack=null,Ie(t,e,i),tt(p.aiPlayers,e.homeScore,e.aiScore,!1,()=>{qt(t,e,i,"home-attack")});return}e.phase="defense",Ie(t,e,i)}function Qr(t,e,i){var s,l;const o=[...e.aiTeam.GK||[],...e.aiTeam.DEF||[],...e.aiTeam.MIL||[]],r=un(o,"defense",e.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(p=>(e.aiTeam[p]||[]).filter(b=>!b.used)).length){const p=((s=e.pendingAttack)==null?void 0:s.players)||[];if(p.length===1&&(p[0]._line==="GK"||p[0].job==="GK")&&e.homeScore===e.aiScore){e.homeScore++,Si(t,e,i,"home",p[0]);return}e.homeScore++;const g={type:"duel",isGoal:!0,homeScored:!0,homePlayers:p.map(x=>We(x)),homeTotal:((l=e.pendingAttack)==null?void 0:l.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};e.log.push(g),e.modifiers.ai={},e.pendingAttack=null,Ie(t,e,i),tt(g.homePlayers,e.homeScore,e.aiScore,!0,()=>{qt(t,e,i,"ai-attack")});return}const a=r.length>0?pi(r,e.modifiers.ai,e.formation).total:0;r.forEach(p=>{p.used=!0});const d=co(e.pendingAttack.total,a,e.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(e.pendingAttack.players||[]).map(p=>We(p)),aiPlayers:r.map(p=>We(p)),homeTotal:e.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(d.shielded)c.text="🛡️ Bouclier IA !",e.log.push(c);else if(d.goal){e.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${e.pendingAttack.total} > ${a})`,e.log.push(c),e.modifiers.ai={},e.pendingAttack=null,Ie(t,e,i),tt(c.homePlayers,e.homeScore,e.aiScore,!0,()=>{qt(t,e,i,"ai-attack")});return}else c.text=`🧤 IA défend (${a} ≥ ${e.pendingAttack.total})`,e.log.push(c);e.modifiers.ai={},e.pendingAttack=null,qt(t,e,i,"ai-attack")}function qt(t,e,i,o){if(e.round++,!hn(t,e,i)){if(fo(e)){kt(t,e,i);return}if(o==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(a=>!a.used))){Wi(t,e,i);return}e.phase="attack",Ie(t,e,i)}else{if(!["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(a=>!a.used))){Wi(t,e,i);return}e.phase="ai-attack",Ie(t,e,i),setTimeout(()=>uo(t,e,i),800)}}}function Vt(t){return!["GK","DEF","MIL","ATT"].some(e=>(t[e]||[]).some(i=>!i.used))}function Do(t){const e=(t.GK||[]).some(o=>!o.used),i=["DEF","MIL","ATT"].some(o=>(t[o]||[]).some(r=>!r.used));return e&&!i}function hn(t,e,i){if(e.homeScore!==e.aiScore)return!1;if(Do(e.homeTeam)&&Vt(e.aiTeam)){const o=(e.homeTeam.GK||[]).find(r=>!r.used);return o?(o.used=!0,e.homeScore++,Si(t,e,i,"home",o),!0):!1}if(Do(e.aiTeam)&&Vt(e.homeTeam)){const o=(e.aiTeam.GK||[]).find(r=>!r.used);return o?(o.used=!0,e.aiScore++,Si(t,e,i,"ai",o),!0):!1}return!1}function Si(t,e,i,o,r){e.log.push({type:"duel",isGoal:!0,homeScored:o==="home",homePlayers:o==="home"?[We(r)]:[],aiPlayers:o==="ai"?[We(r)]:[],text:`⚽ DERNIER CORNER — Le gardien ${o==="home"?"":"adverse "}marque !`});const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(n);const a=(d,c)=>new Promise(s=>{n.innerHTML=`<div style="font-size:32px;font-weight:900;color:${c};letter-spacing:2px;animation:lcFade 1.4s ease both">${d}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(s,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),n.remove(),e.pendingAttack=null,Ie(t,e,i),tt([We(r)],e.homeScore,e.aiScore,o==="home",()=>{if(fo(e)){kt(t,e,i);return}qt(t,e,i,o==="home"?"ai-attack":"home-attack")})))()}function fo(t){const e=["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(r=>!r.used)),i=["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(r=>!r.used));return!e&&!i}function Yi(t,e){return!(["MIL","ATT"].some(r=>(t[r]||[]).some(n=>!n.used))||Vt(e)||!["MIL","ATT"].some(r=>(e[r]||[]).some(n=>!n.used)))}function Wi(t,e,i){if(!hn(t,e,i)){if(fo(e)){kt(t,e,i);return}if(Yi(e.homeTeam,e.aiTeam)&&Yi(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),kt(t,e,i);return}e.phase="attack",Ie(t,e,i)}}function Ri(t,e,i,o=null,r=null){var g,x;if(e.phase!=="attack"){It("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(e.usedSubIds||(e.usedSubIds=[]),e.subsUsed>=e.maxSubs){It(`Maximum ${e.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const n=Object.entries(e.homeTeam).flatMap(([f,y])=>(y||[]).filter(u=>u.used).map(u=>({...u,_line:u._line||f}))),a=e.homeSubs.filter(f=>!e.usedSubIds.includes(f.cardId));if(!n.length){It("Aucun joueur utilisé à remplacer");return}if(!a.length){It("Aucun remplaçant disponible");return}let d=Math.max(0,n.findIndex(f=>f.cardId===r));const c=((g=n[d])==null?void 0:g._line)||((x=n[d])==null?void 0:x.job);let s=o?Math.max(0,a.findIndex(f=>f.cardId===o)):Math.max(0,a.findIndex(f=>f.job===c)),l=!1;const p=document.createElement("div");p.id="sub-overlay",p.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function b(){var m,T,$,I,B,Y;const f=n[d],y=a[s],u=Math.min(130,Math.round((window.innerWidth-90)/2)),w=Math.round(u*1.35),v=W=>`background:rgba(255,255,255,0.12);border:none;color:${W?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${W?"default":"pointer"};flex-shrink:0`;p.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${e.subsUsed}/${e.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${v(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${y?Et({...y,used:!1,boost:0},u,w):"<div>—</div>"}</div>
        <button id="in-down" style="${v(s>=a.length-1)}" ${s>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${v(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${f?Et({...f,used:!1,boost:0},u,w):"<div>—</div>"}</div>
        <button id="out-down" style="${v(d>=n.length-1)}" ${d>=n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${n.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(m=p.querySelector("#sub-close"))==null||m.addEventListener("click",()=>p.remove()),(T=p.querySelector("#out-up"))==null||T.addEventListener("click",()=>{d>0&&(d--,b())}),($=p.querySelector("#out-down"))==null||$.addEventListener("click",()=>{d<n.length-1&&(d++,b())}),(I=p.querySelector("#in-up"))==null||I.addEventListener("click",()=>{s>0&&(s--,b())}),(B=p.querySelector("#in-down"))==null||B.addEventListener("click",()=>{s<a.length-1&&(s++,b())});const E=(W,K,L,_)=>{const N=p.querySelector("#"+W);if(!N)return;let G=0;N.addEventListener("touchstart",le=>{G=le.touches[0].clientY},{passive:!0}),N.addEventListener("touchend",le=>{const pe=le.changedTouches[0].clientY-G;if(Math.abs(pe)<30)return;const M=K();pe<0&&M<_-1?(L(M+1),b()):pe>0&&M>0&&(L(M-1),b())},{passive:!0})};E("in-panel",()=>s,W=>s=W,a.length),E("out-panel",()=>d,W=>d=W,n.length),(Y=p.querySelector("#sub-confirm"))==null||Y.addEventListener("click",W=>{if(W.preventDefault(),W.stopPropagation(),l)return;l=!0;const K=n[d],L=a[s];if(!K||!L)return;let _=null,N=-1;for(const[le,pe]of Object.entries(e.homeTeam)){const M=(pe||[]).findIndex(O=>O.cardId===K.cardId);if(M!==-1){_=le,N=M;break}}if(N===-1||!_){It("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),p.remove();return}const G={...L,_line:_,_col:K._col||0,used:!1,boost:0};e.homeTeam[_].splice(N,1,G),e.usedSubIds||(e.usedSubIds=[]),e.usedSubIds.push(L.cardId),e.subsUsed++,e.selected=[],e.log.push({type:"sub",subSide:"home",clubName:e.clubName,outPlayer:{name:K.name,firstname:K.firstname,note:Re(K,_),portrait:Bt(K),job:K.job,country_code:K.country_code,rarity:K.rarity,clubName:K.clubName,clubLogo:K.clubLogo},inPlayer:{name:L.name,firstname:L.firstname,note:Re(L,_),portrait:Bt(L),job:L.job,country_code:L.country_code,rarity:L.rarity,clubName:L.clubName,clubLogo:L.clubLogo},text:`🔄 ${L.firstname} ${L.name} remplace ${K.firstname} ${K.name}`}),p.remove(),Pr(K,L,()=>Ie(t,e,i))})}document.body.appendChild(p),b()}function Zr(t,e,i,o,r){var b,g;const n=(o.gcDefs||[]).find(x=>x.name===e),a=Oe[e]||{icon:"⚡",desc:"Carte spéciale."},d=(n==null?void 0:n.name)||e,c=(n==null?void 0:n.effect)||a.desc,s=n!=null&&n.image_url?`/icons/${n.image_url}`:null,l=a.icon||"⚡",p=document.createElement("div");p.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",p.innerHTML=`
    ${nt(d,s,l,c,{width:190})}
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(p),(b=p.querySelector("#gc-back"))==null||b.addEventListener("click",()=>p.remove()),(g=p.querySelector("#gc-use"))==null||g.addEventListener("click",()=>{p.remove(),ta(t,e,i,o,r)})}function yi(t,e,i,o,r,n){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let d=[];function c(){var s,l;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${d.length}/${e}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${t.map(p=>{const b=p._line||p.job||"MIL",g=d.find(f=>f.cardId===p.cardId),x=Ae({...p,_evolution_bonus:0},{width:90,showStad:!0,role:b,extraNote:p.boost||0});return`<div class="gc-pick-item" data-cid="${p.cardId}"
          style="position:relative;border-radius:8px;${g?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${p.used?"opacity:0.3;pointer-events:none":""}">
          ${x}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${d.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${d.length}/${e})
      </button>
    </div>`,(s=a.querySelector("#gc-picker-close"))==null||s.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(p=>{p.addEventListener("click",()=>{const b=p.dataset.cid,g=t.find(f=>f.cardId===b);if(!g)return;const x=d.findIndex(f=>f.cardId===b);x>-1?d.splice(x,1):d.length<e&&d.push(g),c()})}),(l=a.querySelector("#gc-picker-confirm"))==null||l.addEventListener("click",()=>{a.remove(),n(d)})}c(),document.body.appendChild(a)}const ea={BOOST_STAT:({value:t=1,count:e=1,roles:i=[]},o,r,n)=>{const a=Object.entries(o.homeTeam).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,c])=>c.filter(s=>!s.used).map(s=>({...s,_line:d})));return a.length?(yi(a,e,`Choisir ${e} joueur(s) à booster (+${t})`,r,o,d=>{d.forEach(c=>{const s=(o.homeTeam[c._line]||[]).find(l=>l.cardId===c.cardId);s&&(s.boost=(s.boost||0)+t,o.log.push({text:`⚡ +${t} sur ${s.name}`,type:"info"}))}),Ie(r,o,n)}),!0):(o.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ie(r,o,n),!0)},DEBUFF_STAT:({value:t=1,count:e=1,roles:i=[],target:o="ai"},r,n,a)=>{const d=o==="home"?r.homeTeam:r.aiTeam,c=o==="ai"?"adverse":"allié",s=Object.entries(d).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,p])=>p.filter(b=>!b.used).map(b=>({...b,_line:l})));return s.length?(yi(s,e,`Choisir ${e} joueur(s) ${c}(s) à débuffer (-${t})`,n,r,l=>{l.forEach(p=>{const g=((o==="home"?r.homeTeam:r.aiTeam)[p._line]||[]).find(x=>x.cardId===p.cardId);g&&(g.boost=(g.boost||0)-t,r.log.push({text:`🎯 -${t} sur ${g.name}${o==="ai"?" (IA)":""}`,type:"info"}))}),Ie(n,r,a)}),!0):(r.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),Ie(n,r,a),!0)},GRAY_PLAYER:({count:t=1,roles:e=[],target:i="ai"},o,r,n)=>{const a=i==="home"?o.homeTeam:o.aiTeam,d=i==="ai"?"adverse":"allié",c=Object.entries(a).filter(([s])=>!e.length||e.includes(s)).flatMap(([s,l])=>l.filter(p=>!p.used).map(p=>({...p,_line:s})));return c.length?(yi(c,t,`Choisir ${t} joueur(s) ${d}(s) à exclure`,r,o,s=>{s.forEach(l=>{const b=((i==="home"?o.homeTeam:o.aiTeam)[l._line]||[]).find(g=>g.cardId===l.cardId);b&&(b.used=!0,o.log.push({text:`❌ ${b.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ie(r,o,n)}),!0):(o.log.push({text:`❌ Aucun joueur ${d} à exclure`,type:"info"}),Ie(r,o,n),!0)},REVIVE_PLAYER:({count:t=1,roles:e=[]},i,o,r)=>{const n=Object.entries(i.homeTeam).filter(([a])=>!e.length||e.includes(a)).flatMap(([a,d])=>d.filter(c=>c.used).map(c=>({...c,_line:a})));return n.length?(yi(n,t,`Choisir ${t} joueur(s) à ressusciter`,o,i,a=>{a.forEach(d=>{const c=(i.homeTeam[d._line]||[]).find(s=>s.cardId===d.cardId);c&&(c.used=!1,i.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),Ie(o,i,r)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ie(o,i,r),!0)},REMOVE_GOAL:({},t)=>(t.aiScore>0?(t.aiScore--,t.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):t.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},t)=>(t.homeScore===t.aiScore?(t.homeScore++,t.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):t.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:t=1},e)=>(e.maxSubs=(e.maxSubs||3)+t,e.log.push({text:`🔄 +${t} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function ta(t,e,i,o,r){o.usedGc.push(t);const n=o.gcDefs||[],a=n.find(c=>c.name===e)||n.find(c=>{var s;return((s=c.name)==null?void 0:s.toLowerCase().trim())===(e==null?void 0:e.toLowerCase().trim())});let d=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const c=ea[a.effect_type];c?c(a.effect_params||{},o,i,r)||(d=!0):(r.toast(`Effet "${a.effect_type}" non implémenté`,"error"),d=!0)}else{switch(e){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(o.homeTeam).flatMap(([s,l])=>(l||[]).filter(p=>p.used).map(p=>({...p,_line:s})));c.length?(c[0].used=!1,o.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(s=>!s.used);if(c.length){const s=c.sort((l,p)=>Re(p,"ATT")-Re(l,"ATT"))[0];s.used=!0,o.log.push({text:`❄️ ${s.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}d=!0}h.from("cards").delete().eq("id",t).then(()=>{}),d&&Ie(i,o,r)}function ia(t,e,i){const o=Object.values(e.homeTeam).flat().filter(r=>!r.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${e.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${o.map(r=>`
        <div class="player-boost-opt" data-card-id="${r.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${qr[r.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Re(r,r._line||r.job)}</div>
          <div style="flex:1"><b>${r.firstname} ${r.name}</b><div style="font-size:11px;color:#888">${r._line||r.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${e.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(r=>{r.addEventListener("click",()=>{const n=r.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const d=(e.homeTeam[a]||[]).find(c=>c.cardId===n);if(d){d.boost=(d.boost||0)+e.boostCard.value,e.log.push({text:`⚡ Boost +${e.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}e.boostUsed=!0,i.closeModal(),Ie(t,e,i)})})}async function kt(t,e,i){var b,g,x,f;Ot(),Ve(),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),e.phase="finished";const{state:o}=i,r=e.homeScore>e.aiScore,n=e.homeScore===e.aiScore,a=r?"victoire":n?"nul":"defaite",d=e.isSolo&&((b=e.soloLevelConfig)!=null&&b.reward_credits)&&r?Number(e.soloLevelConfig.reward_credits):hr(e.mode,a);if(e.isSolo&&r)try{const{data:y}=await h.from("user_solo_progress").select("unlocked_level").eq("user_id",o.profile.id).maybeSingle(),u=(y==null?void 0:y.unlocked_level)||1;e.soloLevel>=u&&await h.from("user_solo_progress").upsert({user_id:o.profile.id,unlocked_level:e.soloLevel+1,updated_at:new Date().toISOString()})}catch(y){console.warn("[Solo] Erreur mise à jour progression:",y.message)}const c="00000000-0000-0000-0000-000000000000";let s=null;if(e.isRankedAI)try{const{data:y}=await h.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",o.profile.id).single();if(y){const u=y.mmr??1e3,w=y.mmr_deviation??350,v=y.mmr_volatility??.06,E=r?1:n?.5:0,m=(y.placement_matches??0)<10,T=Ko(u,w,v,u,350,E,m),$=n?null:r?o.profile.id:c;await h.rpc("update_mmr_after_ranked",{p_match_id:e.matchId,p_winner_id:$,p_home_id:o.profile.id,p_away_id:c,p_home_delta:T.delta,p_away_delta:0,p_home_new_rd:T.newRd,p_away_new_rd:350,p_home_new_vol:T.newSigma,p_away_new_vol:.06}),s=T.delta}}catch(y){console.warn("[RankedAI] Erreur mise à jour MMR:",y.message)}e.matchId&&await h.from("matches").update({status:"finished",home_score:e.homeScore,away_score:e.aiScore,winner_id:r?o.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",e.matchId);const l={credits:(o.profile.credits||0)+d,matches_played:(o.profile.matches_played||0)+1};r?l.wins=(o.profile.wins||0)+1:n?l.draws=(o.profile.draws||0)+1:l.losses=(o.profile.losses||0)+1,await h.from("users").update(l).eq("id",o.profile.id),await i.refreshProfile();const p=document.createElement("div");p.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",p.innerHTML=`
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
    </div>`,document.body.appendChild(p),(g=document.getElementById("res-home"))==null||g.addEventListener("click",()=>{p.remove(),Ye(t),i.navigate("home")}),(x=document.getElementById("res-replay"))==null||x.addEventListener("click",async()=>{if(p.remove(),Ye(t),e.isRankedAI){const{data:y}=await h.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",i.state.profile.id).single();mt(),i.navigate("match",{matchMode:"ranked",rankedData:{mmr:(y==null?void 0:y.mmr)??1e3,rd:(y==null?void 0:y.mmr_deviation)??350,sigma:(y==null?void 0:y.mmr_volatility)??.06,isPlacement:((y==null?void 0:y.placement_matches)??0)<10}});return}i.navigate("match",e.isSolo?{matchMode:e.mode,soloLevel:e.soloLevel}:{matchMode:e.mode})}),(f=document.getElementById("res-next-level"))==null||f.addEventListener("click",()=>{p.remove(),Ye(t),i.navigate("match",{matchMode:"solo",soloLevel:e.soloLevel+1})})}function oa(t,e){e.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Mi(t.aiTeam,t.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const na={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function ra(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}async function aa(t,e){!t||!e||await Promise.all([Fo(t,"win"),Fo(e,"loss")])}async function Fo(t,e){const{data:i}=await h.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",t).eq("card_type","player");if(!(i!=null&&i.length))return;const o=i.filter(r=>{var n,a;return((n=r.player)==null?void 0:n.rarity)==="pepite"||((a=r.player)==null?void 0:a.rarity)==="papyte"});o.length&&await Promise.all(o.map(r=>{const n=na[r.player.rarity],a=e==="win"?n.win:n.loss,d=r.player.note_min??1,c=r.player.note_max??10,s=ra(r.player),l=r.current_note??s,p=Math.min(c,Math.max(d,l+a));return h.from("cards").update({current_note:p}).eq("id",r.id)}))}const Gt=t=>gn(t);async function Dt(t,e,i,o,r={}){return vn(t,e,i,o,r.myGC||[],r.gcDefs||[],r.isRanked||!1,r.rankedData||null,r.stadiumDef||null,r.onMatchEnd||null,r.mlLeagueId||null,r.mlMatchId||null)}async function sa(t,e,i){const{data:o}=await h.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!o){e.toast("Match introuvable","error"),e.navigate("home");return}const r=o.home_id===e.state.user.id;let n=null,a=null;if(o.mode==="mini_league"){const{data:d}=await h.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();d&&(n=d.league_id,a=d.id)}return vn(t,e,i,r,[],[],o.is_ranked||!1,null,null,null,n,a)}async function vn(t,e,i,o,r=[],n=[],a=!1,d=null,c=null,s=null,l=null,p=null){const{state:b,navigate:g,toast:x}=e,f=o?"p1":"p2",y=o?"p2":"p1",u=(r||[]).map(k=>k.id),w=(r||[]).map(k=>({id:k.id,gc_type:k.gc_type,_gcDef:k._gcDef||null}));t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:v}=await h.from("matches").select("*").eq("id",i).single();if(!v){x("Match introuvable","error"),g("home");return}async function E(){var _e,$e;console.log("[PvP] buildGameState match:",{id:v.id,home_deck_id:v.home_deck_id,away_deck_id:v.away_deck_id,mode:v.mode,is_ranked:v.is_ranked});const[{data:k,error:S},{data:A,error:C},{data:z},{data:R}]=await Promise.all([h.rpc("get_deck_for_match",{p_deck_id:v.home_deck_id}),h.rpc("get_deck_for_match",{p_deck_id:v.away_deck_id}),h.from("users").select("id,pseudo,club_name").eq("id",v.home_id).single(),h.from("users").select("id,pseudo,club_name").eq("id",v.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",S==null?void 0:S.message,"p2:",C==null?void 0:C.message,"p1D:",(_e=k==null?void 0:k.starters)==null?void 0:_e.length,"p2D:",($e=A==null?void 0:A.starters)==null?void 0:$e.length);const q=ne=>{const ze=Number(ne.evolution_bonus)||0;return{cardId:ne.card_id,position:ne.position,id:ne.id,firstname:ne.firstname,name:ne.surname_real,country_code:ne.country_code,club_id:ne.club_id,job:ne.job,job2:ne.job2,note_g:(Number(ne.note_g)||0)+(ne.job==="GK"||ne.job2==="GK"&&Number(ne.note_g)>0?ze:0),note_d:(Number(ne.note_d)||0)+(ne.job==="DEF"||ne.job2==="DEF"&&Number(ne.note_d)>0?ze:0),note_m:(Number(ne.note_m)||0)+(ne.job==="MIL"||ne.job2==="MIL"&&Number(ne.note_m)>0?ze:0),note_a:(Number(ne.note_a)||0)+(ne.job==="ATT"||ne.job2==="ATT"&&Number(ne.note_a)>0?ze:0),evolution_bonus:ze,rarity:ne.rarity,skin:ne.skin,hair:ne.hair,hair_length:ne.hair_length,face:ne.face||null,clubName:ne.club_encoded_name||null,clubLogo:ne.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},D=((k==null?void 0:k.starters)||[]).map(ne=>q(ne)),U=((A==null?void 0:A.starters)||[]).map(ne=>q(ne)),Z=(k==null?void 0:k.formation)||"4-4-2",oe=(A==null?void 0:A.formation)||"4-4-2";let ie=Ei(D,Z),ee=Ei(U,oe);const se=((k==null?void 0:k.subs)||[]).map(ne=>q(ne)),fe=((A==null?void 0:A.subs)||[]).map(ne=>q(ne)),we=(k==null?void 0:k.stadium_def)||(o?c:null),me=(A==null?void 0:A.stadium_def)||(o?null:c);return we&&(ie=ui(ie,we),$i(se,we)),me&&(ee=ui(ee,me),$i(fe,me)),{p1Team:ie,p2Team:ee,p1Subs:se,p2Subs:fe,p1Formation:Z,p2Formation:oe,p1Name:(z==null?void 0:z.club_name)||(z==null?void 0:z.pseudo)||"Joueur 1",p2Name:(R==null?void 0:R.club_name)||(R==null?void 0:R.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:o?u:[],gc_p2:o?[]:u,gcCardsFull_p1:o?w:[],gcCardsFull_p2:o?[]:w,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:n||[],lastActionAt:new Date().toISOString()}}let m=v.game_state&&Object.keys(v.game_state).length?v.game_state:null;if(console.log("[PvP] init - amIHome:",o,"gameState exists:",!!m,"match.status:",v.status,"home_id:",v.home_id,"away_id:",v.away_id,"myId:",b.profile.id),!m)if(o){m=await E(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((m==null?void 0:m.p1Team)||{}));const{data:k}=await h.from("matches").select("game_state").eq("id",i).single();!(k!=null&&k.game_state)||!Object.keys(k.game_state).length?await h.from("matches").update({game_state:m,turn_user_id:v.home_id}).eq("id",i):m=k.game_state}else{t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let k=0;k<30&&!m;k++){await new Promise(A=>setTimeout(A,400));const{data:S}=await h.from("matches").select("game_state").eq("id",i).single();S!=null&&S.game_state&&Object.keys(S.game_state).length&&(m=S.game_state),k%5===0&&console.log("[PvP] away - poll",k,"game_state:",!!(S!=null&&S.game_state))}if(!m){x("Erreur de synchronisation","error"),g("home");return}m.gc_p2=u,m.gcCardsFull_p2=w,await h.from("matches").update({game_state:m}).eq("id",i)}let T=!1,$=null,I=!1;const B=new Set,Y=new Set;async function W(k){var oe,ie;Ot();try{h.removeChannel(K)}catch{}const S=m[f+"Score"]||0,A=m[y+"Score"]||0;let C,z;k.winner_id?(C=k.winner_id===b.profile.id,z=!1):k.forfeit?(C=S>A,z=!1):(z=S===A,C=S>A);let R="";if(a&&o)try{const{data:ee}=await h.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",v.home_id).single(),{data:se}=await h.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",v.away_id).single();if(ee&&se){const fe=C?1:z?.5:0,we=1-fe,me=ee.placement_matches<10,_e=se.placement_matches<10,$e=computeGlicko2(ee.mmr,ee.mmr_deviation,ee.mmr_volatility,se.mmr,se.mmr_deviation,fe===1?1:fe===0?0:.5,me),ne=computeGlicko2(se.mmr,se.mmr_deviation,se.mmr_volatility,ee.mmr,ee.mmr_deviation,we===1?1:we===0?0:.5,_e);await h.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:z?null:C?v.home_id:v.away_id,p_home_id:v.home_id,p_away_id:v.away_id,p_home_delta:$e.delta,p_away_delta:ne.delta,p_home_new_rd:$e.newRd,p_away_new_rd:ne.newRd,p_home_new_vol:$e.newSigma,p_away_new_vol:ne.newSigma});const ze=$e.delta,Ne=$e.newMmr,je=getTier(Ne),Xe=ze>=0?"+":"",Ue=ze>=0?"#4caf50":"#ff6b6b",rt=getTier(ee.mmr);R=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${je.id!==rt.id?`<div style="font-size:20px;font-weight:900;color:${je.color}">
                    ${Ne>ee.mmr?"📈":"📉"} ${rt.emoji} ${rt.label} → ${je.emoji} ${je.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Ne>ee.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${ze>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${je.color}">${je.emoji} ${je.label}</div>`}
              ${me?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${ee.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(ee){console.error("[Ranked] MMR update error:",ee)}(oe=document.getElementById("pvp-end-overlay"))==null||oe.remove();const q=document.createElement("div");q.id="pvp-end-overlay",q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const D=z?"🤝":C?"🏆":"😞",U=z?"MATCH NUL":C?"VICTOIRE !":"DÉFAITE",Z=z?"#fff":C?"#FFD700":"#ff6b6b";q.innerHTML=`
      <div style="font-size:64px">${D}</div>
      <div style="font-size:26px;font-weight:900;color:${Z}">${U}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${m[f+"Name"]} ${S} – ${A} ${m[y+"Name"]}</div>
      ${k.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${C?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${R}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(q),(ie=q.querySelector("#pvp-end-home"))==null||ie.addEventListener("click",()=>{q.remove(),Ye(t),l?g("mini-league",{openLeagueId:l}):g(a?"ranked":"home")})}const K=h.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},k=>{var A;const S=k.new;try{if(S.status==="finished"||S.forfeit){if(T)return;T=!0,$&&(clearInterval($),$=null),Ve(),S.game_state&&(m=S.game_state),W(S);return}if(S.game_state){const C=m;m=S.game_state;const z=m._lastGC;if(z&&z.seq&&!Y.has(z.seq)&&(Y.add(z.seq),z.by!==f)){de(z.type,z.by,()=>O());return}const R=C[f+"Score"]||0,q=C[y+"Score"]||0,D=m[f+"Score"]||0,U=m[y+"Score"]||0,Z=D>R,oe=U>q;if((Z||oe)&&!B.has(m.round)){B.add(m.round);const ie=[...m.log||[]].reverse().find(fe=>fe.isGoal),ee=((ie==null?void 0:ie.homePlayers)||[]).map(fe=>({name:fe.name,note:fe.note,portrait:fe.portrait,job:fe.job}));!!((A=ie==null?void 0:ie.text)!=null&&A.includes("DERNIER CORNER"))?ae().then(()=>{tt(ee,D,U,Z,()=>O())}):tt(ee,D,U,Z,()=>O());return}O()}}catch(C){console.error("[PvP] crash:",C)}}).subscribe();async function L(k){Object.assign(m,k),m.lastActionAt=new Date().toISOString();const{error:S}=await h.from("matches").update({game_state:m}).eq("id",i);S&&x("Erreur de synchronisation","error");try{O()}catch(A){console.error("[PvP] renderPvpScreen crash:",A)}}async function _(){if(T)return;T=!0,Ot(),Ve(),$&&(clearInterval($),$=null);const k=o?v.away_id:v.home_id,S=o?"p2":"p1",A=o?"p1":"p2",C={...m,[S+"Score"]:3,[A+"Score"]:0,phase:"finished"},z=C.p1Score||0,R=C.p2Score||0;try{await h.from("matches").update({game_state:C}).eq("id",i);const{data:q,error:D}=await h.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:k,p_home_score:z,p_away_score:R,p_forfeit:!0});if(D&&console.error("[PvP] finish_pvp_match (forfeit):",D),l)try{await h.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(U){console.error("[PvP] check_and_finish_mini_league (forfeit):",U)}try{const{data:U}=await h.rpc("apply_match_rewards",{p_match_id:i});U!=null&&U.success&&!(U!=null&&U.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(U){console.error("[PvP] apply_match_rewards (forfeit):",U)}}catch{}try{h.removeChannel(K)}catch{}setTimeout(()=>{Ye(t),l?g("mini-league",{openLeagueId:l}):g("home")},800)}const N={BOOST_STAT:({value:k=1,count:S=1,roles:A=[]},C,z)=>{const R=C[f+"Team"],q=Object.entries(R).filter(([D])=>!A.length||A.includes(D)).flatMap(([D,U])=>U.filter(Z=>!Z.used).map(Z=>({...Z,_line:D})));if(!q.length){C.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),z(C);return}G(q,S,`Choisir ${S} joueur(s) à booster (+${k})`,D=>{D.forEach(U=>{const Z=(R[U._line]||[]).find(oe=>oe.cardId===U.cardId);Z&&(Z.boost=(Z.boost||0)+k,C.log.push({text:`⚡ +${k} sur ${Z.name}`,type:"info"}))}),C[f+"Team"]=R,z(C)})},DEBUFF_STAT:({value:k=1,count:S=1,roles:A=[],target:C="ai"},z,R)=>{const q=C==="home"?f:y,D=z[q+"Team"],U=C==="home"?"allié":"adverse",Z=Object.entries(D).filter(([oe])=>!A.length||A.includes(oe)).flatMap(([oe,ie])=>ie.map(ee=>({...ee,_line:oe})));if(!Z.length){z.log.push({text:`🎯 Aucun joueur ${U}`,type:"info"}),R(z);return}G(Z,S,`Choisir ${S} joueur(s) ${U}(s) (-${k})`,oe=>{oe.forEach(ie=>{const ee=(D[ie._line]||[]).find(se=>se.cardId===ie.cardId);ee&&(ee.boost=(ee.boost||0)-k,z.log.push({text:`🎯 -${k} sur ${ee.name}`,type:"info"}))}),z[q+"Team"]=D,R(z)})},GRAY_PLAYER:({count:k=1,roles:S=[],target:A="ai"},C,z)=>{const R=A==="home"?f:y,q=C[R+"Team"],D=A==="home"?"allié":"adverse",U=Object.entries(q).filter(([Z])=>!S.length||S.includes(Z)).flatMap(([Z,oe])=>oe.filter(ie=>!ie.used).map(ie=>({...ie,_line:Z})));if(!U.length){C.log.push({text:`❌ Aucun joueur ${D}`,type:"info"}),z(C);return}G(U,k,`Choisir ${k} joueur(s) ${D}(s) à exclure`,Z=>{const oe="usedCardIds_"+R,ie=new Set(C[oe]||[]);Z.forEach(ee=>{const se=(q[ee._line]||[]).find(fe=>fe.cardId===ee.cardId);se&&(se.used=!0,ie.add(ee.cardId),C.log.push({text:`❌ ${se.name} exclu !`,type:"info"}))}),C[oe]=[...ie],C[R+"Team"]=q,z(C)})},REVIVE_PLAYER:({count:k=1,roles:S=[]},A,C)=>{const z=A[f+"Team"],R=Object.entries(z).filter(([q])=>!S.length||S.includes(q)).flatMap(([q,D])=>D.filter(U=>U.used).map(U=>({...U,_line:q})));if(!R.length){A.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),C(A);return}G(R,k,`Choisir ${k} joueur(s) à ressusciter`,q=>{q.forEach(D=>{const U=(z[D._line]||[]).find(Z=>Z.cardId===D.cardId);U&&(U.used=!1,A.log.push({text:`💫 ${U.name} ressuscité !`,type:"info"}))}),A[f+"Team"]=z,C(A)})},REMOVE_GOAL:({},k,S)=>{const A=y+"Score";k[A]>0?(k[A]--,k.log.push({text:"🚫 Dernier but annulé !",type:"info"})):k.log.push({text:"🚫 Aucun but à annuler",type:"info"}),S(k)},ADD_GOAL_DRAW:({},k,S)=>{k[f+"Score"]===k[y+"Score"]?(k[f+"Score"]++,k.log.push({text:"🎯 But bonus !",type:"info"})):k.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),S(k)},ADD_SUB:({value:k=1},S,A)=>{S.maxSubs=(S.maxSubs||3)+k,S.log.push({text:`🔄 +${k} remplacement(s)`,type:"info"}),A(S)},CUSTOM:({},k,S)=>S(k)};function G(k,S,A,C){const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let R=[];function q(){var U,Z;const D=k.map(oe=>{const ie=oe._line||oe.job||"MIL",ee=R.find(fe=>fe.cardId===oe.cardId),se=Ae({...oe,_evolution_bonus:0},{width:90,showStad:!0,role:ie,extraNote:oe.boost||0});return`<div class="pp-item" data-cid="${oe.cardId}"
          style="position:relative;border-radius:8px;${ee?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${oe.used?"opacity:0.3;pointer-events:none":""}">
          ${se}
        </div>`}).join("");z.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${A}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${R.length}/${S}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${D}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${R.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${R.length}/${S})
          </button>
        </div>`,(U=z.querySelector("#pp-close"))==null||U.addEventListener("click",()=>z.remove()),z.querySelectorAll(".pp-item").forEach(oe=>{oe.addEventListener("click",()=>{const ie=oe.dataset.cid,ee=k.find(fe=>fe.cardId===ie),se=R.findIndex(fe=>fe.cardId===ie);ee&&(se>-1?R.splice(se,1):R.length<S&&R.push(ee),q())})}),(Z=z.querySelector("#pp-confirm"))==null||Z.addEventListener("click",()=>{z.remove(),C(R)})}q(),document.body.appendChild(z)}async function le(k,S){const C=(m["gcCardsFull_"+f]||[]).find(D=>D.id===k),z=(C==null?void 0:C._gcDef)||(m.gcDefs||[]).find(D=>{var U;return D.name===S||((U=D.name)==null?void 0:U.toLowerCase().trim())===(S==null?void 0:S.toLowerCase().trim())}),R=[...m["usedGc_"+f]||[],k],q={type:S,by:f,seq:(m._gcAnimSeq||0)+1};Y.add(q.seq),de(S,f,async()=>{if(z!=null&&z.effect_type&&z.effect_type!=="CUSTOM"){const U=N[z.effect_type];if(U){const Z={...m};U(z.effect_params||{},Z,async oe=>{oe["usedGc_"+f]=R,oe._lastGC=q,oe._gcAnimSeq=q.seq,await L(oe)});return}}const D={...m};switch(S){case"Remplacement+":D.maxSubs=(D.maxSubs||3)+1,D.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const U=y+"Score";D[U]>0&&(D[U]--,D.log.push({text:"🚫 But annulé",type:"info"}));break}}D["usedGc_"+f]=R,D._lastGC=q,D._gcAnimSeq=q.seq,await L(D)})}function pe(k,S){const A="usedCardIds_"+k,C=new Set(m[A]||[]);S.forEach(z=>C.add(z)),m[A]=[...C]}function M(){for(const k of["p1","p2"]){const S=new Set(m["usedCardIds_"+k]||[]),A=m[k+"Team"];if(A)for(const C of["GK","DEF","MIL","ATT"])(A[C]||[]).forEach(z=>{z.used=S.has(z.cardId)})}}function O(){var xo,bo,yo,ho,vo,wo;if(m.phase==="reveal")return ue();if(m.phase==="midfield")return xe();if(m.phase==="finished")return He();const k=m[f+"Team"],S=m[y+"Team"];M();const A=m[f+"Score"],C=m[y+"Score"],z=m[f+"Name"],R=m[y+"Name"],q=m.phase===f+"-attack",D=m.phase===f+"-defense",U=Array.isArray(m["selected_"+f])?m["selected_"+f]:[],Z=U.map(Q=>Q.cardId),oe=window.innerWidth>=700,ie=m[f+"Subs"]||[],ee=m["usedSubIds_"+f]||[],se=ie.filter(Q=>!ee.includes(Q.cardId)),fe=m["gcCardsFull_"+f]||[],we=m["usedGc_"+f]||[],me=fe.filter(Q=>!we.includes(Q.id)),_e=m.boostOwner===f&&!m.boostUsed,$e=[...k.MIL||[],...k.ATT||[]].filter(Q=>!Q.used),ne=[...S.MIL||[],...S.ATT||[]].filter(Q=>!Q.used),ze=!Se(S),Ne=$e.length===0&&ne.length===0&&!ze,je=(k.DEF||[]).filter(Q=>!Q.used),Xe=(k.GK||[]).filter(Q=>!Q.used);let Ue=[];q&&$e.length===0&&(ze?(Ue=je.map(Q=>Q.cardId),je.length===0&&(Ue=Ue.concat(Xe.map(Q=>Q.cardId)))):Ne&&(Ue=[...je,...Xe].map(Q=>Q.cardId)));function rt(Q,ve,qe){var Be,bt;const Te=Q._gcDef,Nt=(Te==null?void 0:Te.name)||Q.gc_type,dt=(Te==null?void 0:Te.effect)||((Be=Oe[Q.gc_type])==null?void 0:Be.desc)||"",Pe=Te!=null&&Te.image_url?`/icons/${Te.image_url}`:null,Ge=((bt=Oe[Q.gc_type])==null?void 0:bt.icon)||"⚡";return`<div class="pvp-gc-mini" data-gc-id="${Q.id}" data-gc-type="${Q.gc_type}" style="flex-shrink:0;cursor:pointer">
        ${nt(Nt,Pe,Ge,dt,{width:ve})}
      </div>`}function Xt(Q,ve){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${Q}px;height:${ve}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ve*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ve*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ve*.09)}px;color:#000;font-weight:900">+${m.boostValue}</div>
      </div>`}const Fe=(Q,ve)=>ve?Xt(95,162):rt(Q,95),Je=(Q,ve)=>ve?Xt(68,116):rt(Q,68),Ke=oe?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",gt=q?Le(f)?`<button id="pvp-action" style="${Ke};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${U.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ke};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:D?`<button id="pvp-action" style="${Ke};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${U.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${R}</div>`,at=q&&!Le(f)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':q||D?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${U.length}/3 sélectionné(s)</div>`:"",Pt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${oe?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${se.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':se.map(Q=>`<div class="pvp-sub-btn" data-sub-id="${Q.cardId}" style="cursor:pointer;flex-shrink:0">${Et(Q,oe?76:44,oe?100:58)}</div>`).join("")}
    </div>`,xt=q?"attack":D?"defense":"idle",Tt=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${Kt(k,m[f+"Formation"],xt,Z,oe?1300:jt(),oe?600:Ht(),Ue)}
      </div>
    </div>`,st=m[f+"Team"],Sn=(()=>{var ve,qe,Te,Nt,dt;if(D&&((ve=m.pendingAttack)!=null&&ve.players)){const Pe=m.pendingAttack;let Ge="";if(U.length>0){const Be=U.map(Qe=>{const Jt=(st[Qe._role]||[]).find(Bi=>Bi.cardId===Qe.cardId)||Qe,Qt=st[Qe._role]||[],fi=Qt.findIndex(Bi=>Bi.cardId===Qe.cardId),qi=lt(Qt.length),Zt=fi>=0?qi[fi]:Jt._col??1;return{...Jt,_line:Qe._role,_col:Zt}}),bt=pi(Be,((qe=m.modifiers)==null?void 0:qe[f])||{},m[f+"Formation"]);Ge=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${U.length}/3)</div>
            <div style="display:flex;justify-content:center">${et(Be.map(Qe=>({...Qe,used:!1})),"#3a7bd5",bt.total,"defense",m[f+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${R} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${et((Pe.players||[]).map(Be=>({...Be,used:!1})),"#ff6b6b",Pe.total,"attack",m[y+"Formation"])}</div>
          ${Ge}
        </div>`}if(q&&((Te=m.pendingAttack)!=null&&Te.players)){const Pe=m.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${et((Pe.players||[]).map(Ge=>({...Ge,used:!1})),"#00ff88",Pe.total,"attack",m[f+"Formation"])}</div>
        </div>`}if(q&&!((Nt=m.pendingAttack)!=null&&Nt.players)&&U.length>0){const Pe=U.map(Be=>{const bt=(st[Be._role]||[]).find(Zt=>Zt.cardId===Be.cardId)||Be,Qe=["GK","DEF"].includes(Be._role),Jt=st[Be._role]||[],Qt=Jt.findIndex(Zt=>Zt.cardId===Be.cardId),fi=lt(Jt.length),qi=Qt>=0?fi[Qt]:bt._col??1;return{...bt,_line:Be._role,_col:qi,...Qe?{note_a:Math.max(1,Number(bt.note_a)||0)}:{}}}),Ge=ci(Pe,((dt=m.modifiers)==null?void 0:dt[f])||{},m[f+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${U.length}/3)</div>
          <div style="display:flex;justify-content:center">${et(Pe.map(Be=>({...Be,used:!1})),"#FFD700",Ge.total,"attack",m[f+"Formation"])}</div>
        </div>`}const Q=(m.log||[]).slice(-1)[0];return Q?'<div style="padding:2px 4px">'+xn(Q)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),go=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${z}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${A} – ${C}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${R}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Sn}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(m.log||[]).length})
      </button>`;ct(t),t.style.overflow="hidden",oe?t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${go}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Pt}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Tt}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${gt}${at}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${me.map(Q=>Fe(Q,!1)).join("")}
            ${_e?Fe(null,!0):""}
          </div>
        </div>
      </div>`:t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${go}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Kt(k,m[f+"Formation"],xt,Z,jt(),Ht(),Ue)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${me.map(Q=>Je(Q,!1)).join("")}
            ${_e?Je(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${q&&se.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${q&&se.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${q&&se.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${q&&se.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${se.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(m["usedSubIds_"+f]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(m["usedSubIds_"+f]||[]).length}/${m.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${gt}${at}</div>
        </div>
      </div>`;function Rt(){const Q=t.querySelector(".match-screen");if(!Q)return;const ve=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);Q.style.height=ve+"px",Q.style.minHeight=ve+"px",Q.style.maxHeight=ve+"px",Q.style.overflow="hidden";const qe=t.querySelector("#mobile-action-bar"),Te=t.querySelector("#mobile-play-area");qe&&Te&&(Te.style.paddingBottom=qe.offsetHeight+"px")}if(Rt(),setTimeout(Rt,120),setTimeout(Rt,400),I||(I=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Rt),window.visualViewport.addEventListener("scroll",Rt)),window.addEventListener("resize",Rt)),function(){const ve=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!ve)return;const qe=ve.closest("#match-terrain-wrap");qe&&(qe.style.cssText="position:relative;width:100%;height:100%;padding:0"),ve.removeAttribute("width"),ve.removeAttribute("height"),ve.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ve.setAttribute("preserveAspectRatio","xMidYMid meet")}(),m._pvpResizeBound||(m._pvpResizeBound=!0,window.addEventListener("resize",()=>{const Q=t.querySelector(".terrain-wrapper svg");if(Q){const ve=Q.closest("#match-terrain-wrap");ve&&(ve.style.cssText="position:relative;width:100%;height:100%;padding:0"),Q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t.querySelectorAll(".match-slot-hit").forEach(Q=>{Q.addEventListener("click",()=>{if(!q&&!D)return;const ve=Q.dataset.cardId,qe=Q.dataset.role,Te=(k[qe]||[]).find(Ge=>Ge.cardId===ve);if(!Te||Te.used)return;const Nt=Ue.includes(ve);if(q&&!["MIL","ATT"].includes(qe)&&!Nt)return;Array.isArray(m["selected_"+f])||(m["selected_"+f]=[]);const dt=m["selected_"+f],Pe=dt.findIndex(Ge=>Ge.cardId===ve);Pe>-1?dt.splice(Pe,1):dt.length<3&&dt.push({...Te,_role:qe}),O()})}),t.querySelectorAll(".match-used-hit").forEach(Q=>{Q.addEventListener("click",()=>re(Q.dataset.cardId))}),t.querySelectorAll(".pvp-sub-btn").forEach(Q=>{Q.addEventListener("click",()=>re())}),(xo=t.querySelector("#pvp-sub-open"))==null||xo.addEventListener("click",()=>re()),t.querySelectorAll(".pvp-gc-mini").forEach(Q=>{q?Q.addEventListener("click",()=>j(Q.dataset.gcId,Q.dataset.gcType)):(Q.style.opacity="0.35",Q.style.cursor="default",Q.addEventListener("click",()=>It("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(bo=t.querySelector("#pvp-boost-card"))==null||bo.addEventListener("click",()=>V()),(yo=t.querySelector("#pvp-action"))==null||yo.addEventListener("click",Q=>{q?Q.currentTarget.dataset.pass==="1"||!Le(f)?J():be():D&&ke()}),(ho=t.querySelector("#pvp-quit"))==null||ho.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&_()}),(vo=t.querySelector("#pvp-view-opp"))==null||vo.addEventListener("click",()=>X()),(wo=t.querySelector("#pvp-toggle-history"))==null||wo.addEventListener("click",()=>P()),$&&(clearInterval($),$=null),Ve(),(q||D)&&!T){let Q=30,ve=!1;const qe=()=>document.getElementById("pvp-timer"),Te=()=>{qe()&&(qe().textContent=Q+"s",qe().style.color=ve?"#ff4444":"#fff")};Te(),$=setInterval(()=>{Q--,Q<0?ve?(clearInterval($),$=null,Ve(),q&&!Le(f)?J():_()):(ve=!0,Q=15,Te(),Xo("/sounds/timer-urgent.mp3",.6)):Te()},1e3)}}function ue(){ct(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${Fr(m[y+"Team"],m[y+"Formation"],null,m[y+"Name"]||"Adversaire")}
    </div>`;const k=t.querySelector("svg"),S=k==null?void 0:k.closest("#match-terrain-wrap");S&&(S.style.cssText="position:relative;width:100%;height:100%;padding:0"),k&&(k.removeAttribute("width"),k.removeAttribute("height"),k.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",k.setAttribute("preserveAspectRatio","xMidYMid meet")),f==="p1"&&setTimeout(async()=>{await L({phase:"midfield"})},5e3)}let ge=!1;function xe(){if(ge)return;const k=m[f+"Team"].MIL||[],S=m[y+"Team"].MIL||[],A=wt(k)+_t(k),C=wt(S)+_t(S),z=A>=C;ct(t),t.innerHTML=`
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
      ${Li(k,m[f+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${Li(S,m[y+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const R=(se,fe)=>t.querySelectorAll(se).forEach((we,me)=>{setTimeout(()=>{we.style.opacity="1",we.style.transform="translateY(0) scale(1)"},fe+me*90)});R(".duel-card-me",150),R(".duel-card-opp",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((se,fe)=>setTimeout(()=>{se.style.opacity="1"},fe*70)),900),setTimeout(()=>{const se=t.querySelector("#pvp-vs");se&&(se.style.opacity="1",se.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(fe=>fe.style.opacity="1")},1250);function q(se,fe,we){const me=document.getElementById(se);if(!me)return;const _e=performance.now(),$e=ne=>{const ze=Math.min(1,(ne-_e)/we);me.textContent=Math.round(fe*(1-Math.pow(1-ze,3))),ze<1?requestAnimationFrame($e):me.textContent=fe};requestAnimationFrame($e)}setTimeout(()=>{q("pvp-score-me",A,800),q("pvp-score-opp",C,800)},1500);const D=m.p1Team.MIL||[],U=m.p2Team.MIL||[],Z=wt(D)+_t(D),oe=wt(U)+_t(U),ie=Z>=oe?"p1":"p2";let ee=m.boostValue;ee==null&&(ee=mn(),m.boostValue=ee,m.boostOwner=ie,m.boostUsed=!1),ge=!0,setTimeout(()=>{const se=t.querySelector("#duel-row-"+(z?"me":"opp")),fe=t.querySelector("#duel-row-"+(z?"opp":"me")),we=document.getElementById("pvp-score-me"),me=document.getElementById("pvp-score-opp"),_e=z?we:me,$e=z?me:we;_e&&(_e.style.fontSize="80px",_e.style.color=z?"#FFD700":"#ff6b6b",_e.style.animation="duelPulse .5s ease"+(z?",duelGlow 1.5s ease infinite .5s":"")),$e&&($e.style.opacity="0.25"),setTimeout(()=>{se&&(se.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",se.style.zIndex="5"),setTimeout(()=>{const ne=document.getElementById("duel-shock");ne&&(ne.style.animation="shockwave .5s ease-out forwards"),fe&&(fe.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var je;const ne=document.getElementById("pvp-duel-finale");if(!ne)return;const ze=m.boostOwner===f?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+ee+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ne=f==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ne.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(z?"⚽ "+m[f+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+m[y+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ze+Ne,ne.style.transition="opacity .45s ease",ne.style.opacity="1",ne.style.pointerEvents="auto",(je=document.getElementById("pvp-start-match"))==null||je.addEventListener("click",async()=>{const Xe=ie;await L({phase:Xe+"-attack",attacker:Xe,round:1,boostValue:ee,boostUsed:!1,boostOwner:Xe})})},600)},700)},2800)}function de(k,S,A){var fe,we;const C=(m.gcDefs||[]).find(me=>{var _e;return me.name===k||((_e=me.name)==null?void 0:_e.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),z={purple:"#b06ce0",light_blue:"#00d4ef"}[C==null?void 0:C.color]||"#b06ce0",R=(C==null?void 0:C.name)||k,q=(C==null?void 0:C.effect)||((fe=Oe[k])==null?void 0:fe.desc)||"",D=C!=null&&C.image_url?`/icons/${C.image_url}`:null,U=((we=Oe[k])==null?void 0:we.icon)||"⚡",oe=S===f?"Vous":m[S+"Name"]||"Adversaire",ie=document.createElement("div");ie.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",ie.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{filter:drop-shadow(0 0 20px ${z}66)}50%{filter:drop-shadow(0 0 40px ${z}cc)}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${z};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${oe} joue une carte</div>
      <div style="animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        ${nt(R,D,U,q,{width:200})}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(ie);let ee=!1;const se=()=>{ee||(ee=!0,ie.remove(),setTimeout(()=>A&&A(),50))};ie.addEventListener("click",se),setTimeout(se,3e3)}function j(k,S){var oe,ie,ee,se;const C=(m["gcCardsFull_"+f]||[]).find(fe=>fe.id===k),z=C==null?void 0:C._gcDef,R=(z==null?void 0:z.name)||S,q=(z==null?void 0:z.effect)||((oe=Oe[S])==null?void 0:oe.desc)||"Carte spéciale.",D=z!=null&&z.image_url?`/icons/${z.image_url}`:null,U=((ie=Oe[S])==null?void 0:ie.icon)||"⚡",Z=document.createElement("div");Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",Z.innerHTML=`
      ${nt(R,D,U,q,{width:190})}
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(Z),(ee=Z.querySelector("#pvp-gc-back"))==null||ee.addEventListener("click",()=>Z.remove()),(se=Z.querySelector("#pvp-gc-use"))==null||se.addEventListener("click",()=>{Z.remove(),le(k,S)})}function V(){var C;const k=m[f+"Team"],S=Object.entries(k).flatMap(([z,R])=>(R||[]).filter(q=>!q.used).map(q=>({...q,_line:z})));if(!S.length)return;const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",A.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${m.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${S.map(z=>{const R={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[z._line]||"#555",q=Re(z,z._line)+(z.boost||0);return`<div class="bp-item" data-cid="${z.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${R};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${z.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${q}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(A),(C=A.querySelector("#bp-close"))==null||C.addEventListener("click",()=>A.remove()),A.querySelectorAll(".bp-item").forEach(z=>{z.addEventListener("click",async()=>{const R=z.dataset.cid,q=S.find(U=>U.cardId===R);if(!q)return;const D=(k[q._line]||[]).find(U=>U.cardId===R);D&&(D.boost=(D.boost||0)+m.boostValue),A.remove(),await L({[f+"Team"]:k,boostUsed:!0})})})}function re(k=null){var se,fe;if(!(m.phase===f+"-attack")){x("Remplacement uniquement avant votre attaque","warning");return}const A=m[f+"Team"],C=m["usedSubIds_"+f]||[],z=m.maxSubs||3;if(C.length>=z){x(`Maximum ${z} remplacements atteint`,"warning");return}const R=Object.entries(A).flatMap(([we,me])=>(me||[]).filter(_e=>_e.used).map(_e=>({..._e,_line:we}))),q=(m[f+"Subs"]||[]).filter(we=>!C.includes(we.cardId));if(!R.length){x("Aucun joueur utilisé à remplacer","warning");return}if(!q.length){x("Aucun remplaçant disponible","warning");return}let D=Math.max(0,R.findIndex(we=>we.cardId===k));const U=((se=R[D])==null?void 0:se._line)||((fe=R[D])==null?void 0:fe.job);let Z=Math.max(0,q.findIndex(we=>we.job===U)),oe=!1;const ie=document.createElement("div");ie.id="pvp-sub-overlay",ie.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function ee(){var Ne,je,Xe,Ue,rt,Xt;const we=R[D],me=q[Z],_e=Math.min(130,Math.round((window.innerWidth-90)/2)),$e=Math.round(_e*1.35),ne=Fe=>`background:rgba(255,255,255,0.12);border:none;color:${Fe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Fe?"default":"pointer"};flex-shrink:0`;ie.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${C.length}/${z})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ne(Z===0)}" ${Z===0?"disabled":""}>▲</button>
          <div>${me?Et({...me,used:!1,boost:0},_e,$e):"<div>—</div>"}</div>
          <button id="pin-down" style="${ne(Z>=q.length-1)}" ${Z>=q.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${Z+1}/${q.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ne(D===0)}" ${D===0?"disabled":""}>▲</button>
          <div>${we?Et({...we,used:!1,boost:0},_e,$e):"<div>—</div>"}</div>
          <button id="pout-down" style="${ne(D>=R.length-1)}" ${D>=R.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${D+1}/${R.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Ne=ie.querySelector("#psub-close"))==null||Ne.addEventListener("click",()=>ie.remove()),(je=ie.querySelector("#pout-up"))==null||je.addEventListener("click",()=>{D>0&&(D--,ee())}),(Xe=ie.querySelector("#pout-down"))==null||Xe.addEventListener("click",()=>{D<R.length-1&&(D++,ee())}),(Ue=ie.querySelector("#pin-up"))==null||Ue.addEventListener("click",()=>{Z>0&&(Z--,ee())}),(rt=ie.querySelector("#pin-down"))==null||rt.addEventListener("click",()=>{Z<q.length-1&&(Z++,ee())});const ze=(Fe,Je,Ke,gt)=>{const at=ie.querySelector("#"+Fe);if(!at)return;let Pt=0;at.addEventListener("touchstart",xt=>{Pt=xt.touches[0].clientY},{passive:!0}),at.addEventListener("touchend",xt=>{const Tt=xt.changedTouches[0].clientY-Pt;if(Math.abs(Tt)<30)return;const st=Je();Tt<0&&st<gt-1?(Ke(st+1),ee()):Tt>0&&st>0&&(Ke(st-1),ee())},{passive:!0})};ze("pin-panel",()=>Z,Fe=>Z=Fe,q.length),ze("pout-panel",()=>D,Fe=>D=Fe,R.length),(Xt=ie.querySelector("#psub-confirm"))==null||Xt.addEventListener("click",async Fe=>{if(Fe.preventDefault(),Fe.stopPropagation(),oe)return;oe=!0;const Je=R[D],Ke=q[Z];if(!Je||!Ke)return;const gt=Je._line,at=(A[gt]||[]).findIndex(Tt=>Tt.cardId===Je.cardId);if(at===-1){x("Erreur : joueur introuvable","error"),ie.remove();return}const Pt={...Ke,_line:gt,position:Je.position,used:!1,boost:0};A[gt].splice(at,1,Pt);const xt=[...C,Ke.cardId];ie.remove(),te(Je,Ke,async()=>{await L({[f+"Team"]:A,[y+"Team"]:m[y+"Team"],["usedSubIds_"+f]:xt})})})}document.body.appendChild(ie),ee()}function te(k,S,A){const C={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const R=(U,Z,oe)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${Z};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${oe}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${C[U.job]||"#555"};border:3px solid ${Z};position:relative;overflow:hidden;margin:0 auto">
        ${Bt(U)?`<img src="${Bt(U)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(U.name||"").slice(0,12)}</div>
    </div>`;z.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${R(S,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${R(k,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(z);let q=!1;const D=()=>{q||(q=!0,z.remove(),setTimeout(()=>A(),50))};z.addEventListener("click",D),setTimeout(D,2200)}function X(){var S;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",k.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${m[y+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Mi(m[y+"Team"],m[y+"Formation"],null,[],jt(),Ht())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(k),(S=k.querySelector("#pvp-opp-close"))==null||S.addEventListener("click",()=>k.remove())}function P(){var A;const k=m.log||[],S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",S.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${k.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...k].reverse().map(C=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${C.type==="goal"?"#FFD700":C.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${C.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(S),(A=S.querySelector("#pvp-hist-close"))==null||A.addEventListener("click",()=>S.remove())}async function J(){if(m.phase!==f+"-attack")return;const k=f==="p1"?"p2":"p1",S=(m.round||0)+1,A=[...m.log||[]];A.push({type:"info",text:`⏭️ ${m[f+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const C=De(m),z=Le(k),R=C||!z?"finished":k+"-attack";await L({["selected_"+f]:[],modifiers:{...m.modifiers,[f]:{}},pendingAttack:null,phase:R,attacker:k,round:S,log:A}),R==="finished"&&await Ce(m)}function F(k){const S=(k.GK||[]).some(C=>!C.used),A=["DEF","MIL","ATT"].some(C=>(k[C]||[]).some(z=>!z.used));return S&&!A}function H(k){return(k.p1Score||0)!==(k.p2Score||0)?null:F(k.p1Team)&&!Se(k.p2Team)?{side:"p1",gk:(k.p1Team.GK||[]).find(S=>!S.used)}:F(k.p2Team)&&!Se(k.p1Team)?{side:"p2",gk:(k.p2Team.GK||[]).find(S=>!S.used)}:null}async function ae(){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(k);const S=(A,C)=>new Promise(z=>{k.innerHTML=`<div style="font-size:32px;font-weight:900;color:${C};letter-spacing:2px;animation:lcFade 1.4s ease both">${A}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(z,1400)});await S("⚽ DERNIER CORNER","#FFD700"),await S("🧤 LE GARDIEN MONTE !","#4fc3f7"),k.remove()}async function ce(k,S){const{side:A,gk:C}=k;if(!C)return;const z=A+"Score",R=(S[z]||0)+1;C.used=!0;const q=[...S.log||[]];q.push({type:"duel",isGoal:!0,homeScored:A===f,homePlayers:A==="p1"?[Gt(C)]:[],aiPlayers:A==="p2"?[Gt(C)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${S[A+"Name"]} marque !`});const D=(S.round||0)+1,U=A==="p1"?"p2":"p1",Z={...S,[z]:R},oe=De(Z);B.add(D),await ae();const ie=A===f?R:S[f+"Score"]||0,ee=A===f?S[y+"Score"]||0:R;tt([Gt(C)],ie,ee,A===f,async()=>{await L({[z]:R,log:q,round:D,pendingAttack:null,phase:oe?"finished":U+"-attack",attacker:U,["selected_"+f]:[],modifiers:{...m.modifiers,[f]:{}}}),oe&&await Ce({...m,[z]:R})})}async function be(){const k=m[f+"Team"],S=!["GK","DEF","MIL","ATT"].some(R=>(m[y+"Team"][R]||[]).some(q=>!q.used)),A=(m["selected_"+f]||[]).map(R=>{const q=(k[R._role]||[]).find(fe=>fe.cardId===R.cardId)||R,D=["GK","DEF"].includes(R._role),U=k[R._role]||[],Z=U.findIndex(fe=>fe.cardId===R.cardId),oe=lt(U.length),ie=Z>=0?oe[Z]:q._col??1,ee=m.stadiumDef||m.homeStadiumDef||null,se=q.stadiumBonus||ee&&(ee.club_id&&String(q.club_id)===String(ee.club_id)||ee.country_code&&q.country_code===ee.country_code)||!1;return{...q,_line:R._role,_col:ie,stadiumBonus:se,...D?{note_a:Math.max(1,Number(q.note_a)||0)}:{}}});if(!A.length)return;const C=ci(A,m.modifiers[f]||{},m[f+"Formation"]);pe(f,A.map(R=>R.cardId)),A.forEach(R=>{const q=(k[R._role]||[]).find(D=>D.cardId===R.cardId);q&&(q.used=!0)}),m["selected_"+f]=[],O();const z=[...m.log||[]];if(S){if(A.length===1&&(A[0]._line==="GK"||A[0].job==="GK")&&(m.p1Score||0)===(m.p2Score||0)){await ce({side:f,gk:A[0]},{...m,[f+"Team"]:k,log:z});return}const q=(m[f+"Score"]||0)+1,D=A.map(ee=>Gt(ee));z.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:D,homeTotal:C.total,aiTotal:0});const U=(m.round||0)+1,Z=f==="p1"?"p2":"p1",oe={...m,[f+"Team"]:k,[f+"Score"]:q},ie=De(oe);B.add(U),tt(D,q,m[y+"Score"]||0,!0,async()=>{await L({[f+"Team"]:k,[f+"Score"]:q,["selected_"+f]:[],modifiers:{...m.modifiers,[f]:{}},pendingAttack:null,phase:ie?"finished":Z+"-attack",attacker:Z,round:U,log:z}),ie&&await Ce({...m,[f+"Score"]:q})});return}z.push({type:"pending",text:`⚔️ ${m[f+"Name"]} attaque (${C.total})`}),await L({[f+"Team"]:k,[y+"Team"]:m[y+"Team"],pendingAttack:{...C,players:A,side:f},["selected_"+f]:[],modifiers:{...m.modifiers,[f]:{}},phase:y+"-defense",log:z})}async function ke(){const k=m[f+"Team"],S=(m["selected_"+f]||[]).map(me=>{const _e=(k[me._role]||[]).find(je=>je.cardId===me.cardId)||me,$e=k[me._role]||[],ne=$e.findIndex(je=>je.cardId===me.cardId),ze=lt($e.length),Ne=ne>=0?ze[ne]:_e._col??1;return{..._e,_line:me._role,_col:Ne}}),A=pi(S,m.modifiers[f]||{},m[f+"Formation"]);pe(f,S.map(me=>me.cardId)),S.forEach(me=>{const _e=(k[me._role]||[]).find($e=>$e.cardId===me.cardId);_e&&(_e.used=!0)}),m["selected_"+f]=[],O();const C=co(m.pendingAttack.total,A.total,m.modifiers[f]||{}),z=m.pendingAttack.side,R=C==="attack"||(C==null?void 0:C.goal),q=z==="p1"?"p2":"p1",D=(m.round||0)+1,U=(m.pendingAttack.players||[]).map(me=>Gt(me)),Z=[...m.log||[]];Z.push({type:"duel",isGoal:R,homeScored:R&&z===f,text:R?`⚽ BUT de ${m[z+"Name"]} ! (${m.pendingAttack.total} vs ${A.total})`:`✋ Attaque stoppée (${m.pendingAttack.total} vs ${A.total})`,homePlayers:U,aiPlayers:S.map(me=>Gt(me)),homeTotal:m.pendingAttack.total,aiTotal:A.total});const oe=R?(m[z+"Score"]||0)+1:m[z+"Score"]||0,ie={...m,[f+"Team"]:k,[z+"Score"]:oe},ee=De(ie),se=ee?"finished":q+"-attack",fe=!ee&&!R?H(ie):null,we=async()=>{if(fe){await ce(fe,ie);return}await L({[f+"Team"]:k,[y+"Team"]:m[y+"Team"],[z+"Score"]:oe,["selected_"+f]:[],modifiers:{...m.modifiers,[f]:{}},pendingAttack:null,phase:se,attacker:q,round:D,log:Z}),(se==="finished"||ee)&&await Ce({...m,[z+"Score"]:oe})};if(R){const me=z===f,_e=me?oe:m[f+"Score"]||0,$e=me?m[y+"Score"]||0:oe;B.add(D),tt(U,_e,$e,me,we)}else await we()}function Ee(k){return["MIL","ATT"].some(S=>(k[S]||[]).some(A=>!A.used))}function Se(k){return["GK","DEF","MIL","ATT"].some(S=>(k[S]||[]).some(A=>!A.used))}function ye(k){return Se(k)&&!Ee(k)}function Le(k){const S=m[k+"Team"],A=m[(k==="p1"?"p2":"p1")+"Team"];return!!(Ee(S)||ye(S)&&!Se(A)||ye(S)&&!Ee(A)&&Se(A))}function De(k){return!Se(k.p1Team)&&!Se(k.p2Team)}function Me(k){const S=k.p1Score||0,A=k.p2Score||0;return S===A?null:S>A?v.home_id:v.away_id}async function Ce(k){Ot(),Ve();try{const S=Me(k),A=S?v.home_id===S?v.away_id:v.home_id:null,C=k.p1Score||0,z=k.p2Score||0,{data:R,error:q}=await h.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:S,p_home_score:C,p_away_score:z,p_forfeit:!1});if(q&&console.error("[PvP] finish_pvp_match:",q),l)try{await h.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(D){console.error("[PvP] check_and_finish_mini_league:",D)}S&&A&&aa(S,A).catch(()=>{});try{const{data:D}=await h.rpc("apply_match_rewards",{p_match_id:i});D!=null&&D.success&&!(D!=null&&D.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(D){console.error("[PvP] apply_match_rewards:",D)}if(typeof s=="function")try{await s({homeScore:C,awayScore:z,winnerId:S,homeId:v.home_id,awayId:v.away_id,matchId:i})}catch(D){console.error("[PvP] onMatchEnd:",D)}}catch(S){console.error("[PvP] finishMatch:",S)}}function He(){var z;const k=m[f+"Score"],S=m[y+"Score"],A=k>S,C=k===S;ct(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${A?"🏆":C?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${A?"Victoire !":C?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${k} - ${S}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(z=document.getElementById("pvp-home"))==null||z.addEventListener("click",()=>{try{h.removeChannel(K)}catch{}Ye(t),l?g("mini-league",{openLeagueId:l}):g("home")})}O()}async function Xi(t,e,i=!1){var d,c;const{state:o,navigate:r,toast:n}=e,a=i&&((c=(d=e==null?void 0:e.state)==null?void 0:d.params)==null?void 0:c.rankedData)||null;await Ci(t,e,i?"ranked":"random",async({deckId:s,formation:l,starters:p,subsRaw:b,gcCardsEnriched:g,gcDefs:x,stadiumDef:f})=>{ct(t);const y=async u=>{await la(t,e,s,l,p,b,u||[],x,f,i,a)};if(!(g!=null&&g.length)){await y([]);return}Ai(t,g,y)})}async function da(t,e,i){return sa(t,e,i)}async function la(t,e,i,o,r,n,a=[],d=[],c=null,s=!1,l=null){var W,K;const{state:p,navigate:b,toast:g}=e,x=(l==null?void 0:l.mmr)??((W=p.profile)==null?void 0:W.mmr)??1e3,f=s?At(x):null,y=s?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",u=s?(f==null?void 0:f.color)||"#D4A017":"#FFD700";let w=!1,v=null,E=null;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${y};color:#fff;padding:32px;text-align:center;gap:20px">
      ${s?`<div style="font-size:36px">${(f==null?void 0:f.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${s?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${s?`<div style="font-size:13px;color:${(f==null?void 0:f.color)||"#D4A017"}">${(f==null?void 0:f.name)||""} · ${Math.round(x)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${u};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const m=async()=>{w=!0,v&&(v.unsubscribe(),v=null),E&&(clearInterval(E),E=null);try{await h.rpc("cancel_matchmaking",{p_user_id:p.profile.id})}catch(L){console.error("[Matchmaking] cancel error:",L)}};(K=document.getElementById("cancel-mm"))==null||K.addEventListener("click",async()=>{await m(),Ye(t),b("home")});const T=async(L,_)=>{w||(w=!0,v&&(v.unsubscribe(),v=null),E&&(clearInterval(E),E=null),await Dt(t,e,L,_,{myGC:a,gcDefs:d,stadiumDef:c,isRanked:s,rankedData:l,onMatchEnd:s?ca:null}))},$=p.user.id,{data:I,error:B}=s?await h.rpc("try_matchmake_ranked",{p_user_id:$,p_deck_id:i,p_mmr:x,p_range:200}):await h.rpc("try_matchmake",{p_user_id:$,p_deck_id:i});if(B||!(I!=null&&I.success)){console.error("[Matchmaking] try_matchmake error:",B||I),g("Erreur de matchmaking","error"),Ye(t),b("home");return}if(I.matched){await T(I.match_id,!1);return}const Y=async()=>{if(w)return;const{data:L}=await h.from("matchmaking_queue").select("status, match_id").eq("user_id",$).maybeSingle();(L==null?void 0:L.status)==="matched"&&L.match_id&&await T(L.match_id,!0)};v=h.channel(`mm_${$}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${$}`},L=>{const _=L.new;_.status==="matched"&&_.match_id&&T(_.match_id,!0)}).subscribe(),E=setInterval(Y,3e3),s?setTimeout(async()=>{if(!w){w=!0,v&&(v.unsubscribe(),v=null),E&&(clearInterval(E),E=null);try{await h.rpc("cancel_matchmaking",{p_user_id:p.profile.id})}catch(L){console.error("[Matchmaking] cancel error:",L)}g("Aucun adversaire trouvé — match contre une IA calibrée sur votre niveau","info",4e3),b("match",{matchMode:"ranked_ai",rankedData:l,presetSetup:{deckId:i,formation:o,starters:r,subsRaw:n,gcCardsEnriched:a,gcDefs:d,stadiumDef:c}})}},2e4):setTimeout(()=>{w||m()},12e4)}async function ca(t,e){const{state:i,toast:o}=e,{winnerId:r,homeId:n,awayId:a,homeScore:d,awayScore:c,matchId:s}=t,l=i.user.id,p=n===l,b=r===l,{data:g}=await h.from("users").select("mmr, mmr_rd, mmr_v").eq("id",l).single(),{data:x}=await h.from("users").select("mmr, mmr_rd, mmr_v").eq("id",p?a:n).single();if(g&&x){const f=Ko(g.mmr,g.mmr_rd,g.mmr_v,x.mmr,x.mmr_rd,b?1:0);await h.from("users").update({mmr:f.mmr,mmr_rd:f.rd,mmr_v:f.v,mmr_wins:b?h.sql`mmr_wins + 1`:void 0,mmr_losses:b?void 0:h.sql`mmr_losses + 1`}).eq("id",l),o(b?`+MMR ↑ ${Math.round(f.mmr-g.mmr)}`:`-MMR ↓ ${Math.round(g.mmr-f.mmr)}`,b?"success":"error",4e3)}}const pa=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Xi,resumePvpMatch:da},Symbol.toStringTag,{value:"Module"}));async function ua(t,e){const{state:i,navigate:o,toast:r}=e,n=i.params||{},a=n.friendId||null,d=n.friendName||"Ami",c=!!n.isAccepting;await Ci(t,e,"friend",async({deckId:s,formation:l,starters:p,subsRaw:b,gcCardsEnriched:g,gcDefs:x,stadiumDef:f})=>{ct(t);const y=async u=>{const w=u||[];c?await ma(t,e,s,w,x,f):await fa(t,e,s,w,x,f,a,d)};if(!(g!=null&&g.length)){await y([]);return}Ai(t,g,y)})}async function fa(t,e,i,o,r,n,a,d){var w;const{state:c,navigate:s,toast:l}=e,p=c.user.id,{data:b,error:g}=await h.from("friend_match_invites").insert({inviter_id:p,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(g||!b){console.error("[Friend] Erreur création invitation:",g),l("Impossible de créer l'invitation","error"),s("home");return}t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${d}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let x=!1,f=null;const y=async()=>{f&&(f.unsubscribe(),f=null)};(w=document.getElementById("cancel-friend"))==null||w.addEventListener("click",async()=>{await y(),await h.from("friend_match_invites").update({status:"declined"}).eq("id",b.id),Ye(t),s("home")}),f=h.channel(`friend_invite_${b.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${b.id}`},async({new:v})=>{x||v.status!=="accepted"||!v.match_id||(x=!0,await y(),await Dt(t,e,v.match_id,!0,{myGC:o,gcDefs:r,stadiumDef:n}))}).subscribe();const u=setInterval(async()=>{if(x)return;const{data:v}=await h.from("friend_match_invites").select("status, match_id").eq("id",b.id).single();(v==null?void 0:v.status)==="accepted"&&v.match_id&&(x=!0,clearInterval(u),await y(),await Dt(t,e,v.match_id,!0,{myGC:o,gcDefs:r,stadiumDef:n}))},3e3);setTimeout(async()=>{x||(clearInterval(u),await y(),l("Invitation expirée","info"),s("home"))},12e4)}async function ma(t,e,i,o,r,n){const{state:a,navigate:d,toast:c}=e,s=a.user.id,{data:l}=await h.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",s).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){c("Aucune invitation en attente","error"),d("home");return}const{data:p,error:b}=await h.rpc("accept_friend_invite",{p_invite_id:l.id,p_invitee_deck_id:i});if(b||!(p!=null&&p.success)){console.error("[Friend] Erreur accept_friend_invite:",b||p),c((p==null?void 0:p.error)||"Impossible de rejoindre le match","error"),d("home");return}await Dt(t,e,p.match_id,!1,{myGC:o,gcDefs:r,stadiumDef:n})}const wn="#1A6B3C",pt="#D4A017",ii="var(--tile-bg)",oi="var(--tile-border)",Mt="var(--divider)",Ze="var(--tile-fg-on-page)",zt="var(--tile-fg-dim)",it="var(--tile-fg-faint)",ri="var(--nav-fg,#fff)",_n="rgba(255,255,255,0.62)",ga="rgba(255,255,255,0.4)";async function xa(t,e){var o;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(o=e.state.params)==null?void 0:o.openLeagueId;if(i){e.state.params.openLeagueId=null,await ft(t,e,i);return}await ot(t,e)}async function ot(t,e,i="waiting"){var v,E;const{state:o}=e,r=o.profile.id,{data:n}=await h.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",r),a=(n||[]).map(m=>m.league_id),d={};(n||[]).forEach(m=>{d[m.league_id]={amount:m.prize_amount,claimed:m.prize_claimed}});const{data:c,error:s}=await h.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),l=s?(await h.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:c||[],b=(a.length?await h.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],g=b.filter(m=>m.status==="waiting"&&!m.is_archived),x=b.filter(m=>m.status==="active"&&!m.is_archived),f=b.filter(m=>m.is_archived||m.status==="finished");let y=f;if(f.length){const{data:m}=await h.from("mini_league_matches").select("league_id").in("league_id",f.map($=>$.id)).or(`home_id.eq.${r},away_id.eq.${r}`).not("status","eq","bye"),T=new Set((m||[]).map($=>$.league_id));y=f.filter($=>T.has($.id))}const u=l.filter(m=>!a.includes(m.id)),w=[{key:"waiting",label:"🟡 En attente",count:g.length+u.length},{key:"active",label:"🟢 En cours",count:x.length},{key:"archived",label:"📁 Archivées",count:y.length}];t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Mt};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${ri}">🏆 Mini League</div>
        <div style="font-size:12px;color:${_n}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${ri}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Mt}">
      ${w.map(m=>`<button class="ml-tab" data-tab="${m.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===m.key?wn:"transparent"};background:none;font-size:12px;font-weight:${i===m.key?"900":"600"};color:${i===m.key?"#4ade80":ga};cursor:pointer">${m.label}${m.count?` (${m.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?ba(g,u,r):i==="active"?ya(x,r):ha(y,r,d)}
    </div>
  </div>`,(v=document.getElementById("ml-create-btn"))==null||v.addEventListener("click",()=>va(t,e)),(E=document.getElementById("ml-refresh-list"))==null||E.addEventListener("click",()=>ot(t,e,i)),t.querySelectorAll(".ml-tab").forEach(m=>m.addEventListener("click",()=>ot(t,e,m.dataset.tab))),t.querySelectorAll("[data-league-id]").forEach(m=>m.addEventListener("click",()=>ft(t,e,m.dataset.leagueId))),t.querySelectorAll("[data-join]").forEach(m=>m.addEventListener("click",T=>{T.stopPropagation(),kn(t,e,m.dataset.join,m.dataset.type)})),t.querySelectorAll("[data-delete]").forEach(m=>m.addEventListener("click",T=>{T.stopPropagation(),Ji(t,e,m.dataset.delete,m.dataset.name,i)})),t.querySelectorAll("[data-claim-league]").forEach(m=>m.addEventListener("click",async T=>{T.stopPropagation(),m.disabled=!0,m.textContent="...";const{data:$,error:I}=await h.rpc("claim_mini_league_prize",{p_league_id:m.dataset.claimLeague,p_user_id:o.profile.id});if(I||!($!=null&&$.success)){e.toast(($==null?void 0:$.error)||"Erreur lors de la récupération","error"),ot(t,e,i);return}if(!$.already_claimed){o.profile.credits=(o.profile.credits||0)+$.prize;const B=document.getElementById("nav-credits");B&&(B.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),e.toast(`💰 +${$.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}ot(t,e,i)}))}function Ti(t,e,i=!1,o=null){var c,s;const r=t.creator_id===e,n=t.pot||0,a=((s=(c=t.mini_league_members)==null?void 0:c[0])==null?void 0:s.count)||0,d=o&&o.amount>0&&!o.claimed;return`<div data-league-id="${t.id}" style="background:${ii};border:1px solid ${d?"rgba(212,160,23,0.5)":oi};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
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
  </div>`}function ba(t,e,i){const o=[];return t.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${it};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),o.push(...t.map(r=>Ti(r,i,!1)))),e.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${it};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),o.push(...e.map(r=>Ti(r,i,!0)))),o.length?o.join(""):`<div style="text-align:center;padding:40px;color:${it}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function ya(t,e){return t.length?t.map(i=>Ti(i,e)).join(""):`<div style="text-align:center;padding:40px;color:${it}">Aucune mini league en cours.</div>`}function ha(t,e,i={}){return t.length?t.map(o=>Ti(o,e,!1,i[o.id])).join(""):`<div style="text-align:center;padding:40px;color:${it}">Aucune mini league archivée.</div>`}function va(t,e){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(o=>o.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=o.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var x,f,y,u;const{toast:o}=e,r=document.getElementById("ml-name").value.trim(),n=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,d=((x=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:x.value)||"public",c=((f=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:f.value)||"aller",s=((u=(y=document.getElementById("ml-pwd"))==null?void 0:y.value)==null?void 0:u.trim())||null;if(!r){o("Le nom est obligatoire","error");return}if(a<100){o("Mise minimum : 100 crédits","error");return}if(d==="private"&&!s){o("Mot de passe requis","error");return}const{data:l,error:p}=await h.from("mini_leagues").insert({name:r,creator_id:e.state.profile.id,type:d,password:s,mode:c,max_players:n,entry_fee:a}).select().single();if(p){o("Erreur : "+p.message,"error");return}const{data:b}=await h.from("users").select("credits").eq("id",e.state.profile.id).single();if(((b==null?void 0:b.credits)||0)<a){await h.from("mini_leagues").delete().eq("id",l.id),o(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await h.from("users").update({credits:b.credits-a}).eq("id",e.state.profile.id),await h.from("mini_leagues").update({pot:a}).eq("id",l.id),await h.from("mini_league_members").insert({league_id:l.id,user_id:e.state.profile.id}),e.state.profile&&(e.state.profile.credits=b.credits-a);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(e.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),o(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),ft(t,e,l.id)})}function wa(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",e.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(e);const i=e.querySelector("#ml-pwd-input"),o=r=>{e.remove(),t(r)};setTimeout(()=>i==null?void 0:i.focus(),80),e.querySelector("#pwd-cancel").addEventListener("click",()=>o(null)),e.querySelector("#pwd-ok").addEventListener("click",()=>o(i.value.trim())),i.addEventListener("keydown",r=>{r.key==="Enter"&&o(i.value.trim())})})}async function kn(t,e,i,o){var p;const{toast:r,state:n}=e,a=n.profile.id;let d=null;if(o==="private"&&(d=await wa(),d===null))return;const{data:c,error:s}=await h.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:d});if(s||!(c!=null&&c.success)){console.error("[MiniLeague] join_mini_league:",s||c),r((c==null?void 0:c.error)||"Erreur lors de l'inscription","error");return}if(typeof e.refreshProfile=="function")await e.refreshProfile();else{const{data:b}=await h.from("users").select("credits").eq("id",a).single();n.profile&&b&&(n.profile.credits=b.credits)}const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${(((p=n.profile)==null?void 0:p.credits)||0).toLocaleString("fr")}`),r("✅ Inscrit ! Pot mis à jour.","success"),ft(t,e,i)}async function _a(t,e,i,o){const{toast:r,state:n}=e,a=n.profile.id;if(!await new Promise(b=>{const g=document.createElement("div");g.className="modal-overlay",g.style.zIndex="2100",g.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${o.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(g),g.querySelector("#lv-ok").onclick=()=>{g.remove(),b(!0)},g.querySelector("#lv-cancel").onclick=()=>{g.remove(),b(!1)}}))return;const{data:c,error:s}=await h.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(s||!(c!=null&&c.success)){r((c==null?void 0:c.error)||"Erreur lors de la désinscription","error");return}const l=c.refund||o;n.profile&&(n.profile.credits=(n.profile.credits||0)+l);const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${(n.profile.credits||0).toLocaleString("fr")}`),r(`↩️ Désinscrit · +${l.toLocaleString("fr")} cr. remboursés`,"success"),ot(t,e,"waiting")}async function Ji(t,e,i,o,r){const{toast:n}=e;if(!confirm(`Supprimer définitivement "${o}" et tous ses matchs/membres ? Action irréversible.`))return;await h.from("mini_league_matches").delete().eq("league_id",i),await h.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await h.from("mini_leagues").delete().eq("id",i);if(a){n("Erreur suppression ("+a.message+")","error");return}n("Mini League supprimée avec succès","success"),ot(t,e,r)}async function ka(t,e,i){await h.from("mini_leagues").update({is_archived:!0}).eq("id",i),e.toast("Mini League archivée","success"),ot(t,e,"archived")}async function ft(t,e,i){var E,m,T,$,I,B,Y,W,K;const{state:o,toast:r}=e,n=o.profile.id,[{data:a},{data:d},{data:c}]=await Promise.all([h.from("mini_leagues").select("*").eq("id",i).single(),h.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),h.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){r("Introuvable","error"),await ot(t,e);return}const s=(d||[]).some(L=>L.user_id===n),l=a.creator_id===n,p=(d||[]).map(L=>L.user).filter(Boolean),b=Ta(p,c||[]),g=(c||[]).filter(L=>L.matchday===a.current_day),x=a.pot||0,f=a.entry_fee||100,y=g.length>0&&g.every(L=>L.status==="finished"||L.status==="bye"),u=a.current_day>=a.total_days,w=(d||[]).find(L=>L.user_id===n);t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Mt};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${ri}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${ri};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${ri}">${a.name}</div>
        <div style="font-size:11px;color:${_n}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${f} cr./joueur</div>
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
        <div style="font-size:12px;color:${zt};margin-bottom:10px">💰 ${f} cr./joueur → Pot estimé : ${(f*p.length).toLocaleString("fr")} cr. (🥇${Math.floor(f*p.length*.7).toLocaleString("fr")} · 🥈${Math.floor(f*p.length*.2).toLocaleString("fr")} · 🥉${Math.floor(f*p.length*.1).toLocaleString("fr")})</div>
        ${p.map(L=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${Mt}">
            <div style="width:36px;height:36px;border-radius:50%;background:${L.club_color2||wn};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${L.club_color1||"#fff"}">${(L.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Ze}">${L.club_name||L.pseudo}</div><div style="font-size:11px;color:${it}">@${L.pseudo}</div></div>
            ${L.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${l&&p.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${f} cr. × ${p.length})</button>`:""}
        ${l?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${s?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${f} cr.)</button>`}
        ${s&&!l?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${f.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${ii};border:1px solid ${oi};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Ze}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${g.map(L=>Po(L,p,n,s)).join("")}
        ${l&&y&&!u?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
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
          <tbody>${b.map((L,_)=>{const N=x>0&&a.status==="finished"?_===0?Math.floor(x*.7):_===1?Math.floor(x*.2):_===2?Math.floor(x*.1):0:0;return`<tr style="border-bottom:1px solid ${Mt};${L.userId===n?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${_===0?pt:_<3?"#4ade80":zt}">${["🥇","🥈","🥉"][_]||_+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Ze}">${L.clubName}</div><div style="font-size:10px;color:${it}">@${L.pseudo}</div></td>
              <td style="text-align:center;color:${zt}">${L.played}</td><td style="text-align:center;color:${zt}">${L.won}-${L.drawn}-${L.lost}</td>
              <td style="text-align:center;color:${L.goalDiff>=0?"#4ade80":"#ff6b6b"}">${L.goalDiff>=0?"+":""}${L.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Ze}">${L.points}</td>
              ${x>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${pt}">${N?N.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${ii};border:1px solid ${oi};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Ze}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(L,_)=>_+1).reverse().map(L=>{const _=(c||[]).filter(N=>N.matchday===L);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${it};margin-bottom:6px">Journée ${L}</div>${_.map(N=>Po(N,p,n,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${l&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${zt}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const v=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((E=document.getElementById("ml-back"))==null||E.addEventListener("click",()=>ot(t,e,v)),(m=document.getElementById("ml-refresh"))==null||m.addEventListener("click",async L=>{const _=L.currentTarget;_.style.opacity="0.5",await ft(t,e,i)}),(T=document.getElementById("ml-start-btn"))==null||T.addEventListener("click",()=>$a(t,e,a,p)),($=document.getElementById("ml-next-day"))==null||$.addEventListener("click",()=>Ea(t,e,i)),(I=document.getElementById("ml-join-now"))==null||I.addEventListener("click",()=>kn(t,e,i,a.type)),(B=document.getElementById("ml-leave-btn"))==null||B.addEventListener("click",()=>_a(t,e,i,f)),(Y=document.getElementById("ml-delete-btn"))==null||Y.addEventListener("click",()=>Ji(t,e,i,a.name,"waiting")),(W=document.getElementById("ml-delete-now"))==null||W.addEventListener("click",()=>Ji(t,e,i,a.name,v)),(K=document.getElementById("ml-archive-btn"))==null||K.addEventListener("click",()=>ka(t,e,i)),t.querySelectorAll("[data-play-match]").forEach(L=>{L.addEventListener("click",()=>{const _=g.find(N=>N.id===L.dataset.playMatch);_&&(mt(),e.navigate("match-mini-league",{mlMatchId:_.id,leagueId:i}))})}),a.status==="finished"&&w){const L=b.findIndex(_=>_.userId===n);L>=0&&L<3&&w.prize_amount>0&&!w.prize_claimed&&setTimeout(()=>La(t,e,a,w,L),400)}}function Po(t,e,i,o,r=!1){const n=p=>e.find(b=>b.id===p);if(t.is_bye){const p=n(t.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${zt};text-align:center">🔵 ${(p==null?void 0:p.club_name)||(p==null?void 0:p.pseudo)||"?"} exempté(e)</div>`}const a=n(t.home_id),d=n(t.away_id),c=t.home_id===i||t.away_id===i,s=c&&t.status==="pending"&&o&&!r,l=t.status==="finished"?`${t.home_score} - ${t.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${c?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${c?"rgba(74,222,128,0.35)":Mt}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Ze};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${t.status==="finished"?"#4ade80":it}">${l}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Ze};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"?"}</div>
    ${s?`<button data-play-match="${t.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${t.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function $a(t,e,i,o){const{toast:r,state:n}=e,a=Sa(o.map(s=>s.id),i.mode),d=[];a.forEach((s,l)=>s.forEach(p=>d.push({league_id:i.id,matchday:l+1,home_id:p.home||p.bye,away_id:p.away||null,is_bye:!!p.bye,status:p.bye?"bye":"pending"})));const{error:c}=await h.from("mini_league_matches").insert(d);if(c){r("Erreur calendrier : "+c.message,"error");return}await h.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),r(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),ft(t,e,i.id)}async function Ea(t,e,i){const{data:o}=await h.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),r=(o.current_day||0)+1;if(r>(o.total_days||0)){ft(t,e,i);return}await h.from("mini_leagues").update({current_day:r}).eq("id",i),e.toast(`Journée ${r} commencée !`,"success"),ft(t,e,i)}async function La(t,e,i,o,r){var b,g;const{state:n,toast:a}=e,d=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],c=["🥇","🥈","🥉"][r],s=o.prize_amount||d[r]||0,l=o.prize_claimed,p=document.createElement("div");p.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",p.innerHTML=`
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
    </div>`,document.body.appendChild(p),(b=p.querySelector("#prize-close"))==null||b.addEventListener("click",()=>p.remove()),(g=p.querySelector("#claim-prize-btn"))==null||g.addEventListener("click",async x=>{const f=x.currentTarget;f.disabled=!0,f.textContent="...";const{data:y,error:u}=await h.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:n.profile.id});if(u||!(y!=null&&y.success)){console.error("[MiniLeague] claim_mini_league_prize:",u||y),a((y==null?void 0:y.error)||"Erreur lors de la récupération","error"),f.disabled=!1,f.textContent=`💰 Récupérer ${s.toLocaleString("fr")} cr.`;return}if(y.already_claimed)a("Déjà récupéré précédemment","info");else{const w=(n.profile.credits||0)+y.prize;n.profile&&(n.profile.credits=w);const v=document.getElementById("nav-credits");v&&(v.textContent=`💰 ${w.toLocaleString("fr")}`),a(`💰 +${y.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}p.remove(),ft(t,e,i.id)})}function Sa(t,e){const o=t.length%2===0?[...t]:[...t,null],r=o.length;let n=o.slice(1);const a=[];for(let d=0;d<r-1;d++){const c=[],s=[o[0],...n];for(let l=0;l<r/2;l++){const p=s[l],b=s[r-1-l];p===null?c.push({bye:b}):b===null?c.push({bye:p}):c.push({home:p,away:b})}a.push(c),n=[n[n.length-1],...n.slice(0,-1)]}return e==="aller-retour"?[...a,...a.map(d=>d.map(c=>c.bye?c:{home:c.away,away:c.home}))]:a}function Ta(t,e){const i={};return t.forEach(o=>{i[o.id]={userId:o.id,pseudo:o.pseudo,clubName:o.club_name||o.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),e.filter(o=>o.status==="finished"&&!o.is_bye&&o.home_score!=null).forEach(o=>{const r=i[o.home_id],n=i[o.away_id];!r||!n||(r.played++,n.played++,r.goalsFor+=o.home_score,r.goalsAgainst+=o.away_score,n.goalsFor+=o.away_score,n.goalsAgainst+=o.home_score,o.home_score>o.away_score?(r.won++,r.points+=3,n.lost++):o.home_score<o.away_score?(n.won++,n.points+=3,r.lost++):(r.drawn++,r.points++,n.drawn++,n.points++),r.goalDiff=r.goalsFor-r.goalsAgainst,n.goalDiff=n.goalsFor-n.goalsAgainst)}),Object.values(i).sort((o,r)=>r.points-o.points||r.goalDiff-o.goalDiff||r.goalsFor-o.goalsFor)}async function Ro(t,e){const{state:i,navigate:o,toast:r}=e,n=i.params||{},a=n.leagueId||null,d=n.mlMatchId||null,c=i.user.id;if(!d||!a){r("Match introuvable","error"),o("mini-league");return}const{data:s,error:l}=await h.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",d).single();if(l||!s){r("Match introuvable","error"),o("mini-league",{openLeagueId:a});return}if(s.home_id!==c&&s.away_id!==c){r("Vous ne faites pas partie de ce match","error"),o("mini-league",{openLeagueId:a});return}const p=s.home_id===c;if(s.match_id){await Dt(t,e,s.match_id,p,{mlLeagueId:a,mlMatchId:d});return}await Ci(t,e,"mini_league",async({deckId:b,gcCardsEnriched:g,gcDefs:x,stadiumDef:f})=>{ct(t);const y=async u=>{const{data:w,error:v}=await h.rpc("start_mini_league_match",{p_ml_match_id:d,p_user_id:c,p_deck_id:b});if(v||!(w!=null&&w.success)){console.error("[MiniLeague] start_mini_league_match error:",v||w),r((w==null?void 0:w.error)||"Impossible de lancer le match","error"),o("mini-league",{openLeagueId:a});return}if(w.matched){await Dt(t,e,w.match_id,p,{mlLeagueId:a,mlMatchId:d,myGC:u||[],gcDefs:x,stadiumDef:f});return}await Ia(t,e,{mlMatchId:d,leagueId:a,amIHome:p,chosenGC:u,gcDefs:x,stadiumDef:f})};if(!(g!=null&&g.length)){await y([]);return}Ai(t,g,y)})}function Ia(t,e,{mlMatchId:i,leagueId:o,amIHome:r,chosenGC:n,gcDefs:a,stadiumDef:d}){return new Promise(c=>{var f;const{navigate:s}=e;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let l=!1;const p=async y=>{if(!l){if(l=!0,clearInterval(x),g)try{g.unsubscribe()}catch{}y&&await Dt(t,e,y,r,{mlLeagueId:o,mlMatchId:i,myGC:n||[],gcDefs:a,stadiumDef:d}),c()}};(f=document.getElementById("wait-back"))==null||f.addEventListener("click",()=>{if(l=!0,clearInterval(x),g)try{g.unsubscribe()}catch{}s("mini-league",{openLeagueId:o}),c()});const b=async()=>{if(l)return;const{data:y}=await h.from("mini_league_matches").select("match_id").eq("id",i).single();y!=null&&y.match_id&&p(y.match_id)},g=h.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},y=>{var u;(u=y.new)!=null&&u.match_id&&p(y.new.match_id)}).subscribe(),x=setInterval(b,3e3);b()})}const No={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function hi(t,e,i=0){return e?(Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0)+(e===t.job||e===t.job2?i:0):0}async function za(t,e){t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await mo(t,e)}async function mo(t,e){const{state:i,toast:o,navigate:r}=e;Yt(r,i.profile,"market","/icons/",o);const{data:n}=await h.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:a}=await h.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
  </div>`;let s="buy";const l=()=>{var y,u,w,v,E,m,T;return{name:(((y=document.getElementById("flt-name"))==null?void 0:y.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((w=document.getElementById("flt-country"))==null?void 0:w.value)||"").toLowerCase().trim(),job:((v=document.getElementById("flt-job"))==null?void 0:v.value)||"",rarity:((E=document.getElementById("flt-rarity"))==null?void 0:E.value)||"",note1:parseInt((m=document.getElementById("flt-note1"))==null?void 0:m.value)||0,note2:parseInt((T=document.getElementById("flt-note2"))==null?void 0:T.value)||0}};function p(y){const u=l();return y.filter(w=>{var Y,W,K;const v=(Y=w.card)==null?void 0:Y.player;if(!v)return!1;const E=`${v.firstname} ${v.surname_real}`.toLowerCase(),m=(((W=v.clubs)==null?void 0:W.encoded_name)||"").toLowerCase(),T=(v.country_code||"").toLowerCase(),$=((K=w.card)==null?void 0:K.evolution_bonus)||0,I=hi(v,v.job,$),B=v.job2?hi(v,v.job2,$):0;return!(u.name&&!E.includes(u.name)||u.club&&!m.includes(u.club)||u.country&&!T.includes(u.country)||u.job&&v.job!==u.job||u.rarity&&v.rarity!==u.rarity||u.note1&&I<u.note1||u.note2&&B<u.note2)})}function b(y){var m,T,$;const u=(m=y.card)==null?void 0:m.player;if(!u)return"";const w=((T=y.card)==null?void 0:T.evolution_bonus)||0,v=(i.profile.credits||0)>=y.price;return`<div class="mkt-buy-tile">
      ${Ae({...u,_evolution_bonus:w},{width:140})}
      <div class="mkt-price">${y.price.toLocaleString("fr")} cr.</div>
      <div class="mkt-seller">Vendeur : ${(($=y.seller)==null?void 0:$.pseudo)||"—"}</div>
      <button class="btn btn-primary btn-sm" data-buy="${y.id}" ${v?"":"disabled"} style="font-size:12px;padding:8px 10px">${v?"Acheter":"Trop cher"}</button>
    </div>`}function g(y){var W,K,L,_;const u=(W=y.card)==null?void 0:W.player;if(!u)return"";const w=((K=y.card)==null?void 0:K.evolution_bonus)||0,v=hi(u,u.job,w),E=u.job2?hi(u,u.job2,w):0,m=y.status==="sold",T=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,$=No[u.job]||"#bbb",I=u.job2?No[u.job2]||"#bbb":null,B=u.job==="GK"?"#fff":$,Y=u.job2==="GK"?"#fff":I;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${m?"opacity:0.7":""}">
      ${T?`<img src="${T}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(L=u.clubs)!=null&&L.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${$};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${B};font-family:Arial Black,Arial">${v}</span>
        </div>
        ${E?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${I};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${Y};font-family:Arial Black,Arial">${E}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:${m?"#22c55e":"#999"};margin-top:1px">
          ${m?`✅ Vendu à ${((_=y.buyer)==null?void 0:_.pseudo)||"—"} · ${y.sold_at?new Date(y.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(y.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${y.price.toLocaleString("fr")}</div>
        ${m?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${y.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function x(){const y=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(y){if(u.style.display=s==="buy"?"flex":"none",s==="buy"){const w=p(d);y.innerHTML=w.length?`<div class="mkt-buy-grid">${w.map(b).join("")}</div>`:'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const w=c.filter(E=>E.status==="active").sort((E,m)=>new Date(m.listed_at)-new Date(E.listed_at)),v=c.filter(E=>E.status==="sold").sort((E,m)=>new Date(m.sold_at||m.listed_at)-new Date(E.sold_at||E.listed_at));y.innerHTML=(w.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${w.length})</div>`+w.map(g).join(""):"")+(v.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${v.length})</div>`+v.map(g).join(""):"")+(!w.length&&!v.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}y.querySelectorAll("[data-buy]").forEach(w=>w.addEventListener("click",()=>Aa(w.dataset.buy,d,t,e))),y.querySelectorAll("[data-cancel]").forEach(w=>w.addEventListener("click",()=>Ca(w.dataset.cancel,t,e)))}}t.querySelectorAll(".mkt-tab").forEach(y=>{y.addEventListener("click",()=>{s=y.dataset.tab,t.querySelectorAll(".mkt-tab").forEach(u=>{const w=u===y;u.style.background=w?"var(--green)":"var(--tile-bg)",u.style.color=w?"#fff":"var(--tile-fg-dim)",u.style.borderColor=w?"var(--green)":"var(--tile-border)"}),x()})});let f;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(y=>{var u;(u=document.getElementById(y))==null||u.addEventListener("input",()=>{clearTimeout(f),f=setTimeout(x,250)})}),x()}async function Aa(t,e,i,o){const{state:r,toast:n,refreshProfile:a}=o,d=e.find(l=>l.id===t);if(!d)return;const c=d.price;if((r.profile.credits||0)<c){n("Crédits insuffisants","error");return}Ma(d,async()=>{const{error:l}=await h.rpc("buy_market_card",{p_listing_id:t,p_buyer_id:r.profile.id});if(l){n("Erreur achat : "+l.message,"error");return}await a();const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),n("✅ Carte achetée !","success"),await mo(i,o)})}function Ma(t,e){var a;const i=(a=t.card)==null?void 0:a.player,o=i?`${i.firstname} ${i.surname_real}`:"cette carte",r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${o} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${t.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(r);const n=d=>{r.remove(),d&&e()};r.querySelector("#buy-cancel").addEventListener("click",()=>n(!1)),r.querySelector("#buy-ok").addEventListener("click",()=>n(!0)),r.addEventListener("click",d=>{d.target===r&&n(!1)})}async function Ca(t,e,i){const{toast:o}=i,{data:r}=await h.from("market_listings").select("card_id").eq("id",t).single();if(await h.from("market_listings").update({status:"cancelled"}).eq("id",t),r!=null&&r.card_id){const{count:n}=await h.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",r.card_id).eq("status","active");n||await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",r.card_id)}o("Annonce retirée","success"),mo(e,i)}async function ja(t,e){var g,x,f,y,u;const{state:i,navigate:o}=e,r=((x=(g=e==null?void 0:e.state)==null?void 0:g.params)==null?void 0:x.tab)||"ranked";t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:n},{data:a},{data:d}]=await Promise.all([h.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").order("mmr",{ascending:!1}).limit(100),h.rpc("get_mini_league_leaderboard"),h.rpc("get_random_leaderboard")]);let c=r;const s=w=>w<3?["#D4A017","#a0a0a0","#cd7f32"][w]:"var(--green)",l=w=>w<3?"#000":"#fff";function p(){var E,m,T;const w=document.getElementById("rankings-legend");w&&(w.innerHTML=c==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const v=document.getElementById("rankings-list");if(v){if(c==="ranked"){const $=n||[];v.innerHTML=$.length>0?$.map((I,B)=>{const Y=At(I.mmr??1e3),W=(I.ranked_wins||0)+(I.ranked_losses||0)+(I.ranked_draws||0),K=W>0?Math.round((I.ranked_wins||0)/W*100):0,L=I.id===i.profile.id,_=(I.placement_matches||0)<10;return`
          <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${L?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${B<3?["#D4A017","#a0a0a0","#cd7f32"][B]:"rgba(255,255,255,0.08)"};color:${B<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${B<3?"16":"13"}px">${B<3?["🥇","🥈","🥉"][B]:B+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${Y.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${I.club_name} · ${Y.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${_?"❓":Y.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${Y.color}">${_?"Placement":Y.label}</div>
              ${_?"":`<div style="font-size:10px;color:var(--tile-fg-dim)">${K}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(c==="mini-league"){const $=a||[];v.innerHTML=$.length>0?$.map((I,B)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${I.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(B)};color:${l(B)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${B<3?"16":"13"}px">${B<3?["🥇","🥈","🥉"][B]:B+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${I.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${I.top1} 🥈${I.top2} 🥉${I.top3}</div>
            <div style="color:var(--tile-fg-dim)">${I.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const $=d||[];v.innerHTML=$.length>0?$.map((I,B)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${I.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${s(B)};color:${l(B)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${B<3?"16":"13"}px">${B<3?["🥇","🥈","🥉"][B]:B+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${I.club_name}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:16px;font-weight:900;color:#D4A017" title="Score de classement — tient compte du nombre de matchs joués">📊 ${I.wilson_score}</div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">${I.wins}/${I.total} V</div>
            <div style="font-size:9px;color:var(--green);font-weight:700;margin-top:2px">${I.win_pct}%</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}(E=document.getElementById("tab-ranked"))!=null&&E.style&&(document.getElementById("tab-ranked").style.cssText=b(c==="ranked")),(m=document.getElementById("tab-mini-league"))!=null&&m.style&&(document.getElementById("tab-mini-league").style.cssText=b(c==="mini-league")),(T=document.getElementById("tab-random"))!=null&&T.style&&(document.getElementById("tab-random").style.cssText=b(c==="random"))}}const b=w=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${w?"900":"400"};background:${w?"var(--green)":"rgba(255,255,255,0.06)"};color:${w?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;t.innerHTML=`
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
  </div>`,p(),(f=document.getElementById("tab-ranked"))==null||f.addEventListener("click",()=>{c="ranked",p()}),(y=document.getElementById("tab-mini-league"))==null||y.addEventListener("click",()=>{c="mini-league",p()}),(u=document.getElementById("tab-random"))==null||u.addEventListener("click",()=>{c="random",p()})}async function qa(t,e){var T,$,I,B;const{state:i,navigate:o,toast:r}=e,n=i.profile;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:d}]=await Promise.all([h.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),h.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",n.id).single()]);if(!d){r("Erreur chargement profil","error"),o("home");return}if(!a){const Y=d.mmr??1e3,W=At(Y);Gi(Y);const K=Math.round(1e3+(Y-1e3)*.5),L=At(K),{data:_}=await h.from("users").select("id, pseudo, club_name, mmr, rank_tier").order("mmr",{ascending:!1}).limit(100),N=(_||[]).findIndex(G=>G.id===d.id)+1;t.innerHTML=`
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
        <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px">MMR ${Y} ${N?`· #${N} au classement général`:""}</div>
      </div>

      <!-- Top 100 -->
      <div>
        <div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:8px">🏆 Classement général — Top 100</div>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto">
          ${(_||[]).map((G,le)=>{const pe=At(G.mmr??1e3),M=G.id===d.id;return`<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:10px;
              background:${M?"rgba(212,160,23,0.15)":"rgba(0,0,0,0.25)"};
              border:1px solid ${M?"#D4A017":"transparent"}">
              <div style="width:26px;text-align:center;font-size:12px;font-weight:900;color:rgba(255,255,255,0.5)">#${le+1}</div>
              <div style="font-size:18px">${pe.emoji}</div>
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${G.pseudo}</div>
                <div style="font-size:10px;color:rgba(255,255,255,0.4)">${G.club_name||"—"}</div>
              </div>
              <div style="font-size:13px;font-weight:900;color:${pe.color}">${G.mmr??1e3}</div>
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
            <div style="font-size:12px;font-weight:700;color:${W.color}">${Y}</div>
          </div>
          <div style="font-size:20px;color:rgba(255,255,255,0.3)">→</div>
          <div style="text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.4)">Recalculé</div>
            <div style="font-size:28px">${L.emoji}</div>
            <div style="font-size:14px;font-weight:900;color:${L.color}">${K}</div>
          </div>
        </div>
        <div style="font-size:11px;color:rgba(255,255,255,0.35);text-align:center;margin-top:10px">Ton MMR est recalculé vers la moyenne à chaque nouvelle saison, pour repartir sur des bases équilibrées.</div>
      </div>
    </div>`,(T=document.getElementById("ranked-back"))==null||T.addEventListener("click",()=>o("home"));return}const c=d.mmr??1e3,s=d.mmr_deviation??350,l=d.mmr_volatility??.06,p=d.placement_matches??0,b=p<10,g=Math.max(0,10-p),x=At(c),f=Gi(c),y=Di.findIndex(Y=>Y.id===x.id),u=Di[y+1]||null,w={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},v=(d.ranked_wins||0)+(d.ranked_losses||0)+(d.ranked_draws||0),E=v>0?Math.round((d.ranked_wins||0)/v*100):0,m=Di.map(Y=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${x.id===Y.id?1:.35};
      transform:${x.id===Y.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${x.id===Y.id?"28px":"20px"}">${Y.emoji}</div>
      <div style="font-size:9px;color:${Y.color};font-weight:${x.id===Y.id?"900":"400"};letter-spacing:0.5px">${Y.label.toUpperCase()}</div>
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
        <div style="height:100%;width:${f}%;background:linear-gradient(90deg,${x.color},${x.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${f}% vers ${u?u.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${m}
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
  </div>`,($=document.getElementById("ranked-back"))==null||$.addEventListener("click",()=>o("home")),(I=document.getElementById("ranked-leaderboard-btn"))==null||I.addEventListener("click",()=>o("rankings",{tab:"ranked"})),(B=document.getElementById("ranked-play-btn"))==null||B.addEventListener("click",()=>{mt(),o("match",{matchMode:"ranked",rankedData:{mmr:c,rd:s,sigma:l,isPlacement:b}})})}async function Ba(t,{state:e,navigate:i,toast:o}){const r=e.profile;if(!r)return;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await h.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${r.id},away_id.eq.${r.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(n||[]).filter(l=>l.status==="finished"),c=(n||[]).filter(l=>l.status==="in_progress");function s(l){const p=l.home_id===r.id;p?l.home_score:l.away_score,p?l.away_score:l.home_score;const b=l.winner_id===r.id,g=l.home_score===l.away_score&&l.status==="finished",x=l.status!=="finished"?"…":g?"N":b?"V":"D",f=l.status!=="finished"||g?"#888":b?"#1A6B3C":"#c0392b";let y=a[l.mode]||l.mode;l.away_id===null&&!y.startsWith("IA")&&(y="IA");const w=l.home_id===r.id?l.away:l.home;let v;l.away_id===null?v=y:w?v=`${w.club_name||w.pseudo} (${w.pseudo})`:v="Adversaire";let E="";l.status==="in_progress"&&Date.now()-new Date(l.created_at).getTime()>3600*1e3&&(E=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const m=new Date(l.created_at),T=m.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+m.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),$=l.status==="finished"?`${l.home_score} - ${l.away_score}`:`${l.home_score||0} - ${l.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${v}${E}</div>
        <div style="font-size:11px;color:var(--gray-600)">${y} · ${T}${l.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${$}</span>
        <span style="background:${f};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${x}</span>
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
  </div>`}Tn(zn);const he={user:null,profile:null,page:"home",params:{}};function yt(t,e="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=t,o.className=`show ${e}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function Da(t,e,i=""){document.getElementById("modal-title").textContent=t,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Qi(){document.getElementById("modal-overlay").classList.add("hidden")}async function ni(){if(!he.user)return;const{data:t}=await h.from("users").select("*").eq("id",he.user.id).single();t&&(he.profile=t)}const $n="mw_theme";function ai(){return localStorage.getItem($n)||"dark"}function Go(t){var e;localStorage.setItem($n,t),vi(t),(e=he.profile)!=null&&e.id&&h.from("users").update({theme:t}).eq("id",he.profile.id).then(()=>{})}function vi(t){var e,i;document.documentElement.setAttribute("data-theme",t),t==="club"&&(document.documentElement.style.setProperty("--club-color1",((e=he.profile)==null?void 0:e.club_color1)||"#0a0f0a"),document.documentElement.style.setProperty("--club-color2",((i=he.profile)==null?void 0:i.club_color2)||"#080d08"))}function $t(t,e={}){he.page=t,he.params=e,En()}async function En(){var o,r,n,a;const t=document.getElementById("page-content");if(!t)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===he.page)});const e=document.getElementById("nav-credits");e&&he.profile&&(e.textContent=`💰 ${(he.profile.credits||0).toLocaleString("fr")}`);const i={state:he,navigate:$t,toast:yt,openModal:Da,closeModal:Qi,refreshProfile:ni};switch(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',he.page){case"home":await Fi(t,i);break;case"home2":await Fi(t,i);break;case"game":await br(t,i);break;case"settings":await ln(t,i);break;case"collection":await Er(t,i);break;case"decks":await Ui(t,i);break;case"boosters":await Gn(t,i);break;case"ranked":await qa(t,i);break;case"match":{const d=he.params&&he.params.matchMode||"vs_ai_easy";d==="random"?await Xi(t,i,!1):d==="ranked"?await Xi(t,i,!0):d==="friend"?await ua(t,i,(o=he.params)==null?void 0:o.friendId,(r=he.params)==null?void 0:r.friendName):d==="mini_league"||d==="mini-league"?await Ro(t,i,(n=he.params)==null?void 0:n.mlMatchId,(a=he.params)==null?void 0:a.leagueId):await Rr(t,i);break}case"market":await za(t,i);break;case"rankings":await ja(t,i);break;case"matches":await Ba(t,i);break;case"friends":await fr(t,i);break;case"mini-league":await xa(t,i);break;case"match-mini-league":{const d=he.params||{};await Ro(t,i,d.mlMatchId,d.leagueId);break}default:await Fi(t,i)}}function Fa(){var o,r;const t=document.getElementById("app"),e=he.profile;if(!e)return;const i="/icons/";t.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.07.31-2340" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",a=>{a.preventDefault(),$t(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>$t("home")),document.getElementById("nav-credits").addEventListener("click",()=>$t("boosters")),(o=document.getElementById("journal-btn"))==null||o.addEventListener("click",()=>Pa()),(r=document.getElementById("settings-btn"))==null||r.addEventListener("click",()=>$t("settings"))}async function Pa(){const{data:t}=await h.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const r=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}function Ra(t,{onPlay:e}){var o;const i="/icons/";t.style.cssText="",t.innerHTML=`
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
  </div>`,(o=t.querySelector("#pl-play-btn"))==null||o.addEventListener("click",e)}async function Na(){vi(ai()),document.getElementById("modal-overlay").addEventListener("click",o=>{o.target===o.currentTarget&&Qi()}),document.getElementById("modal-close").addEventListener("click",Qi);const{data:{session:t}}=await h.auth.getSession();if(!t){Oo(),Ra(document.getElementById("app"),{onPlay:()=>_o(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:yt})});return}he.user=t.user,await ni(),vi(ai()),Oo();try{const{data:o}=await h.from("formation_links_overrides").select("formation, links"),r={};(o||[]).forEach(n=>{r[n.formation]=n.links}),In(r)}catch(o){console.warn("Impossible de charger les overrides de formation:",o)}if(!he.profile){Mn(document.getElementById("app"),{state:he,navigate:async()=>{await ni(),vi(ai()),Ni()},toast:yt,refreshProfile:ni});return}const e=Array.isArray(he.profile.pending_boosters)?he.profile.pending_boosters:[];if(!he.profile.onboarding_done&&e.length>0){Jn(document.getElementById("app"),{state:he,toast:yt,refreshProfile:ni,navigate:()=>{Ni(),setTimeout(()=>So(he.profile,$t,yt),800)}});return}Ni(),new URLSearchParams(location.search).get("tutorial")==="1"?(history.replaceState({},"",location.pathname),setTimeout(()=>dn(he.profile,$t,yt),800)):setTimeout(()=>So(he.profile,$t,yt),800),h.auth.onAuthStateChange(async(o,r)=>{o==="SIGNED_OUT"&&(he.user=null,he.profile=null,document.getElementById("app").innerHTML="",_o(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:yt}))})}function Ga(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function ji(){const t=document.getElementById("app");t&&(t.style.height=Ga()+"px")}window.addEventListener("resize",ji);window.addEventListener("orientationchange",()=>setTimeout(ji,150));window.visualViewport&&window.visualViewport.addEventListener("resize",ji);function Ni(){const t=()=>{var i;(i=he.user)!=null&&i.id&&h.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",he.user.id).then(()=>{})};t(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(t,6e4);const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",ji(),Fa(),En()}function Oo(){const t=document.getElementById("app-loader"),e=document.getElementById("app");e&&(e.style.display=""),t&&(t.classList.add("zoom-out"),setTimeout(()=>t.style.display="none",500))}function Ln(t){var o;const e=document.getElementById("app-loader");if(e&&(e.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${t||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(o=document.getElementById("boot-retry"))==null||o.addEventListener("click",()=>window.location.reload())}Na().catch(t=>{console.error("Échec du démarrage:",t),Ln()});setTimeout(()=>{const t=document.getElementById("app-loader");t&&t.style.display!=="none"&&!t.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Ln("Le serveur met trop de temps à répondre.")},12e3);
