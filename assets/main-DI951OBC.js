const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/special-cards-lEGt-tGs.js","assets/special-cards-CYiiPJPw.css"])))=>i.map(i=>d[i]);
import{s as v,j as ki,q as zo,t as Kt,u as Ki,F as Vi,o as it,n as Ot,g as Ct,r as Se,m as wt,v as gi,w as Mo,T as zi,p as xn,x as bn,d as yn}from"./special-cards-lEGt-tGs.js";const hn="/";function uo(t,{navigate:e,toast:i}){let o="login";const a=()=>{var r,s,d,c,l,f,b;const n=o==="login";if(t.innerHTML=`
    <div style="
      min-height:100vh; min-height:100dvh;
      background:linear-gradient(180deg,#0a0a12 0%,#0f1a10 60%,#0a1628 100%);
      display:flex; flex-direction:column; align-items:center; justify-content:center;
      padding:24px 16px; position:relative; overflow:hidden;
    ">
      <!-- Particules décoratives -->
      <div style="position:absolute;inset:0;pointer-events:none;overflow:hidden">
        <div style="position:absolute;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(26,107,60,0.15),transparent 70%);top:-80px;left:-80px"></div>
        <div style="position:absolute;width:250px;height:250px;border-radius:50%;background:radial-gradient(circle,rgba(212,160,23,0.1),transparent 70%);bottom:-60px;right:-60px"></div>
      </div>

      <!-- Logo -->
      <div style="margin-bottom:28px;text-align:center;animation:authFadeIn .5s ease">
        <img src="${hn}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(r=document.getElementById("tab-login-btn"))==null||r.addEventListener("click",()=>{o="login",a()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{o="register",a()}),n)(d=document.getElementById("login-password"))==null||d.addEventListener("keydown",x=>{var g;x.key==="Enter"&&((g=document.getElementById("login-btn"))==null||g.click())}),(c=document.getElementById("login-btn"))==null||c.addEventListener("click",async()=>{const x=document.getElementById("login-email").value.trim(),g=document.getElementById("login-password").value,p=document.getElementById("login-error");if(p.textContent="",!x||!g){p.textContent="Remplissez tous les champs.";return}const u=document.getElementById("login-btn");u.textContent="⏳ Connexion…",u.disabled=!0;const{error:y}=await v.auth.signInWithPassword({email:x,password:g});if(u.textContent="⚽ Se connecter",u.disabled=!1,y){p.textContent=y.message.includes("Invalid")?"Email ou mot de passe incorrect.":y.message;return}window.location.reload()});else{(l=document.getElementById("reg-confirm"))==null||l.addEventListener("keydown",p=>{var u;p.key==="Enter"&&((u=document.getElementById("reg-btn"))==null||u.click())});let x=null,g=!1;(f=document.getElementById("reg-access-code"))==null||f.addEventListener("input",p=>{const u=p.target.value,y=document.getElementById("access-code-status"),w=document.getElementById("reg-btn");if(clearTimeout(x),g=!1,w&&(w.disabled=!0,w.style.opacity="0.45",w.style.cursor="not-allowed"),!u){y&&(y.textContent="");return}y&&(y.textContent="⏳ Vérification…",y.style.color="rgba(255,255,255,0.4)"),x=setTimeout(async()=>{const{data:h,error:E}=await v.rpc("check_signup_password",{input_password:u});if(E){y&&(y.textContent="Erreur de vérification.",y.style.color="#f87171");return}g=!!h,y&&(y.textContent=g?"✅ Code valide":"❌ Code incorrect",y.style.color=g?"#4ade80":"#f87171"),w&&(w.disabled=!g,w.style.opacity=g?"1":"0.45",w.style.cursor=g?"pointer":"not-allowed")},400)}),(b=document.getElementById("reg-btn"))==null||b.addEventListener("click",async()=>{var $;const p=document.getElementById("reg-email").value.trim(),u=document.getElementById("reg-password").value,y=document.getElementById("reg-confirm").value,w=(($=document.getElementById("reg-access-code"))==null?void 0:$.value)||"",h=document.getElementById("reg-error");if(h.textContent="",!p||!u||!y){h.textContent="Remplissez tous les champs.";return}if(u.length<6){h.textContent="Mot de passe trop court (min. 6 caractères).";return}if(u!==y){h.textContent="Les mots de passe ne correspondent pas.";return}const{data:E}=await v.rpc("check_signup_password",{input_password:w});if(!E){h.textContent="Code d'accès incorrect.";return}const m=document.getElementById("reg-btn");m.textContent="⏳ Création…",m.disabled=!0;const{error:T}=await v.auth.signUp({email:p,password:u});if(m.textContent="🚀 Créer mon compte",m.disabled=!1,T){h.textContent=T.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),o="login",a(),setTimeout(()=>{const S=document.getElementById("login-email");S&&(S.value=p)},50)})}};a()}function vn(t,{state:e,navigate:i,toast:o,refreshProfile:a}){let n="#1A6B3C",r="#D4A017";t.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${r};border-color:${n}">
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
            <div class="color-swatch" id="swatch2" style="background:${r};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur de l'intérieur</label>
              <input type="color" id="color2" value="${r}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function s(){var g;const c=document.getElementById("logo-preview"),l=document.getElementById("logo-initials"),f=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",b=f.trim().split(" ").filter(Boolean),x=b.length>=2?(b[0][0]+b[1][0]).toUpperCase():f.slice(0,2).toUpperCase();c&&(c.style.background=r,c.style.borderColor=n),l&&(l.textContent=x,l.style.color=n)}document.getElementById("color1").addEventListener("input",c=>{n=c.target.value,document.getElementById("swatch1").style.background=n,s()}),document.getElementById("color2").addEventListener("input",c=>{r=c.target.value,document.getElementById("swatch2").style.background=r,s()});function d(c){document.querySelectorAll(".setup-step").forEach(l=>l.classList.remove("active")),document.getElementById(`step-${c}`).classList.add("active"),document.getElementById("step-num").textContent=c,document.getElementById("progress-fill").style.width=`${Math.round(c/3*100)}%`,c===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("step1-error");if(l.textContent="",c.length<3){l.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await v.from("users").select("id").eq("pseudo",c).maybeSingle();if(f){l.textContent="Ce pseudo est déjà pris.";return}d(2)}),document.getElementById("step2-back").addEventListener("click",()=>d(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const c=document.getElementById("setup-club").value.trim(),l=document.getElementById("step2-error");if(l.textContent="",c.length<2){l.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await v.from("users").select("id").eq("club_name",c).maybeSingle();if(f){l.textContent="Ce nom de club est déjà pris.";return}d(3)}),document.getElementById("step3-back").addEventListener("click",()=>d(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),b=document.getElementById("step3-finish");f.textContent="",b.disabled=!0,b.textContent="Création en cours…";try{const{error:x}=await v.from("users").insert({id:e.user.id,pseudo:c,club_name:l,club_color1:n,club_color2:r,credits:1e4});if(x)throw x;await wn(e.user.id),await a(),o(`Bienvenue ${c} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(x){f.textContent=x.message,b.disabled=!1,b.textContent="🚀 Créer mon profil !"}})}async function wn(t){const e=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await v.from("users").update({pending_boosters:e,onboarding_done:!1,first_booster_opened:!1}).eq("id",t)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const _n="modulepreload",kn=function(t){return"/"+t},fo={},Co=function(e,i,o){let a=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),s=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));a=Promise.allSettled(i.map(d=>{if(d=kn(d),d in fo)return;fo[d]=!0;const c=d.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${l}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":_n,c||(f.as="script"),f.crossOrigin="",f.href=d,s&&f.setAttribute("nonce",s),document.head.appendChild(f),c)return new Promise((b,x)=>{f.addEventListener("load",b),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function n(r){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r}return a.then(r=>{for(const s of r||[])s.status==="rejected"&&n(s.reason);return e().catch(n)})},jo="mw_sound_volume";function Yi(){const t=localStorage.getItem(jo);if(t===null)return 100;const e=parseInt(t,10);return Number.isFinite(e)?Math.max(0,Math.min(100,e)):100}function $n(t){localStorage.setItem(jo,String(Math.max(0,Math.min(100,Math.round(t)))))}function Wi(){return Yi()===0}function xi(t){return Math.max(0,Math.min(1,t*(Yi()/100)))}function Xi(t,e=1){if(Wi())return null;try{const i=new Audio(t);return i.volume=xi(e),i.play().catch(()=>{}),i}catch{return null}}let xt=null,qi=null,mo=.3;function Bo(t,e=.3){if(mo=e,xt&&qi===t&&!xt.paused){xt.volume=xi(mo);return}if(Gt(),!Wi())try{const i=new Audio(t);i.loop=!0,i.volume=xi(e),i.play().catch(()=>{}),xt=i,qi=t}catch{}}function Gt(){if(xt)try{xt.pause(),xt.currentTime=0}catch{}xt=null,qi=null}let Qt=null;function qo(t,e=.6){if(Ue(),!Wi())try{const i=new Audio(t);i.volume=xi(e),i.play().catch(()=>{}),Qt=i}catch{}}function Ue(){if(Qt)try{Qt.pause(),Qt.currentTime=0}catch{}Qt=null}const En=[{key:"home2",route:"home2",label:"HOME",icon:"nav-home.png"},{key:"game",route:"game",label:"GAME",emoji:"🎮"},{key:"cards",route:"collection",label:"CARDS",icon:"nav-collection.png"},{key:"decks",route:"decks",label:"DECKS",icon:"nav-decks.png"},{key:"boosters",route:"boosters",label:"BOOSTERS",icon:"nav-boosters.png"},{key:"market",route:"market",label:"MERCATO",icon:"nav-market.png"}];function Do(t,e,i,o){if(!document.getElementById("home2-chrome-style")){const l=document.createElement("style");l.id="home2-chrome-style",l.textContent=`
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
      .home2-chrome-logo img { height: 52px; width: auto; display: block; }
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
        .home2-mobile-top .home2-chrome-logo img { height: 34px; }
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
    `,document.head.appendChild(l)}const a=En.map(l=>`
    <a class="home2-chrome-tab" data-route="${l.route}" data-key="${l.key}">
      ${l.icon?`<img src="${o}${l.icon}">`:`<span class="home2-chrome-tab-emoji">${l.emoji}</span>`}${l.label}
    </a>`).join("");let n=document.getElementById("home2-chrome-header");n||(n=document.createElement("div"),n.id="home2-chrome-header",n.className="home2-chrome-header",n.innerHTML=`
      <div id="home2-chrome-marker" style="display:none"></div>
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-tabs">${a}</div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-chrome-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-chrome-settings-btn">⚙️</button>
      </div>
    `,document.body.appendChild(n),n.querySelector("#home2-chrome-settings-btn").addEventListener("click",()=>t("settings")),n.querySelector("#home2-chrome-credits").addEventListener("click",()=>t("boosters")));let r=document.getElementById("home2-mobile-top");r||(r=document.createElement("div"),r.id="home2-mobile-top",r.className="home2-mobile-top",r.innerHTML=`
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-mobtop-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-mobtop-settings-btn"><span>⚙️</span><span class="pill-label">Paramètres</span></button>
      </div>
    `,document.body.appendChild(r),r.querySelector("#home2-mobtop-settings-btn").addEventListener("click",()=>t("settings")),r.querySelector("#home2-mobtop-credits").addEventListener("click",()=>t("boosters")));let s=document.getElementById("home2-mobile-bottom");s||(s=document.createElement("div"),s.id="home2-mobile-bottom",s.className="home2-mobile-bottom",s.innerHTML=a,document.body.appendChild(s)),document.querySelectorAll(".home2-chrome-tab").forEach(l=>{l._v2Bound||(l._v2Bound=!0,l.addEventListener("click",()=>{document.querySelectorAll(".home2-chrome-tab").forEach(f=>f.classList.remove("active")),document.querySelectorAll(`.home2-chrome-tab[data-key="${l.dataset.key}"]`).forEach(f=>f.classList.add("active")),t(l.dataset.route)}))}),document.querySelectorAll(".home2-chrome-tab").forEach(l=>l.classList.toggle("active",l.dataset.key===i));const d=`💰 ${(e.credits||0).toLocaleString("fr")}`;document.getElementById("home2-chrome-credits")&&(document.getElementById("home2-chrome-credits").textContent=d),document.getElementById("home2-mobtop-credits")&&(document.getElementById("home2-mobtop-credits").textContent=d),document.body.classList.remove("v2-match-flow"),n.style.display="",r.style.display="",s.style.display="";const c=document.getElementById("page-content");c&&(c.style.paddingTop="",c.style.paddingBottom=""),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const l=window.innerWidth<1024;document.documentElement.style.setProperty("--v2-top-height",(l?r.offsetHeight:n.offsetHeight)+"px"),document.documentElement.style.setProperty("--v2-bottom-height",s.offsetHeight+"px")})})}function $i(t){const e=`💰 ${(t||0).toLocaleString("fr")}`,i=document.getElementById("home2-chrome-credits"),o=document.getElementById("home2-mobtop-credits");i&&(i.textContent=e),o&&(o.textContent=e)}function $t(){document.body.classList.add("v2-match-flow");const t=document.getElementById("home2-chrome-header");t&&(t.style.display="none");const e=document.getElementById("home2-mobile-top");e&&(e.style.display="none");const i=document.getElementById("home2-mobile-bottom");i&&(i.style.display="none");const o=document.getElementById("page-content");o&&(o.style.paddingTop="0",o.style.paddingBottom="0")}function Ln(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return"à l'instant";if(i<60)return`il y a ${i}min`;const o=Math.floor(i/60);if(o<24)return`il y a ${o}h`;const a=Math.floor(o/24);return a<7?`il y a ${a}j`:new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"short"})}function Tn(t,e){if(!isFinite(e.max))return"";const i=e.max-e.min+1,o=Math.floor((t-e.min)/(i/3));return["III","II","I"][Math.min(2,Math.max(0,o))]}async function In(t){const{data:e}=await v.from("users").select("id,pseudo,club_name,mmr").order("mmr",{ascending:!1}).limit(5),i=e||[],o=i.some(n=>n.id===t);let a=null;if(!o){const{data:n}=await v.from("users").select("mmr").eq("id",t).single();if(n){const{count:r}=await v.from("users").select("id",{count:"exact",head:!0}).gt("mmr",n.mmr||0);a=(r||0)+1}}return{list:i,iAmInTop:o,myPosition:a}}async function Sn(t=4){const{data:e}=await v.from("patch_notes").select("id,title,description,image_url,published_at").eq("is_published",!0).order("published_at",{ascending:!1}).limit(t);return e||[]}async function An(){const{data:t}=await v.from("booster_configs").select("id,name,icon,price_type,price_credits,card_count").eq("is_active",!0).order("sort_order",{ascending:!0}).limit(5);return t||[]}async function zn(){const{data:t}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const a=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${o.image_url?`<img src="${o.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${a}</div>
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close-v2").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}async function Mi(t,{state:e,navigate:i,toast:o}){var E,m,T,$,S,F;const a=e.profile;if(!a)return;const n="/icons/";Do(i,a,"home2",n);const r=a.mmr??1e3,s=ki(r),d=Tn(r,s),c=zo(r),l=isFinite(s.max)?s.max+1:null,[{list:f,iAmInTop:b,myPosition:x},g,p]=await Promise.all([In(a.id),Sn(5),An()]),u=(H,K)=>`
    <div class="rk-row ${H.id===a.id?"rk-row-me":""}">
      <div class="rk-pos ${K<3?"rk-pos-top"+(K+1):""}">${K<3?["🥇","🥈","🥉"][K]:K+1}</div>
      <div class="rk-name ${H.id===a.id?"rk-name-me":""}">${H.pseudo}</div>
      <div class="rk-rp">${(H.mmr??0).toLocaleString("fr")} RP</div>
    </div>`,y=H=>`
    <div class="news-item">
      ${H.image_url?`<img src="${H.image_url}" class="news-thumb" onerror="this.style.display='none'">`:'<div class="news-thumb news-thumb-fallback">📰</div>'}
      <div class="news-body">
        <div class="news-title">${H.title}</div>
        <div class="news-desc">${H.description||""}</div>
        <div class="news-time">${Ln(H.published_at)}</div>
      </div>
    </div>`;let w=0;const h=H=>`
    <div class="promo-icon-wrap">
      <img src="${n}${H.icon||"nav-boosters.png"}" class="promo-icon" onerror="this.style.display='none'">
    </div>
    <div class="promo-info">
      <div class="promo-kicker">NOUVEAU BOOSTER</div>
      <div class="promo-title">${H.name}</div>
      <div class="promo-desc">${H.card_count||5} cartes · ${H.price_type==="pub"?"Pub gratuite":(H.price_credits||0).toLocaleString("fr")+" cr."}</div>
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
                <div class="rank-tier-value">${s.label.toUpperCase()}${d?" "+d:""}</div>
              </div>
              <div class="rank-right">
                <div class="rank-rp-label">${r.toLocaleString("fr")}${l?" / "+l.toLocaleString("fr"):""} RP</div>
                <button class="rank-inline-link" id="rank-inline-link-btn">📊 Classement</button>
              </div>
            </div>
            <div class="rank-progress-track"><div class="rank-progress-fill" style="width:${c}%"></div></div>
          </div>

          <button class="profile-view-btn" id="nav-profile-btn">Voir mon profil 📤</button>

          <div class="ranking-widget">
            <div class="ranking-widget-header"><h4>CLASSEMENT</h4><a id="nav-rankings-link">Voir plus</a></div>
            ${f.map((H,K)=>u(H,K)).join("")}
            ${!b&&x?`
              <div class="rk-row rk-row-me" style="border-top:1px solid var(--tile-border);margin-top:2px;padding-top:8px">
                <div class="rk-pos">${x}</div>
                <div class="rk-name rk-name-me">${a.pseudo}</div>
                <div class="rk-rp">${r.toLocaleString("fr")} RP</div>
              </div>`:""}
            <button class="ranking-widget-cta" id="nav-rankings-cta">📊 Voir le classement</button>
          </div>
        </div>

        <!-- Colonne centrale : Jouer + promo -->
        <div class="home2-col-center">
          <div class="play-section-header"><span class="slashes">///</span><h4>JOUER</h4><span class="slashes">///</span></div>

          <div class="play-grid">
            <div class="play-tile play-tile-big tile-ranked" data-action="ranked">
              <img src="${n}badge-ranked.png" class="tile-icon">
              <div class="tile-label">RANKED</div>
              <div class="tile-desc">Grimpez dans le classement</div>
            </div>
            <div class="play-tile play-tile-big tile-mini-league" data-action="mini-league">
              <img src="${n}badge-league.png" class="tile-icon">
              <div class="tile-label">MINI LEAGUE</div>
              <div class="tile-desc">Participez à des ligues</div>
            </div>
            <div class="play-tile" data-action="match-ai">
              <img src="${n}badge-ai.png" class="tile-icon">
              <div class="tile-label">SOLO</div>
              <div class="tile-desc">Progressez à travers les niveaux</div>
            </div>
            <div class="play-tile" data-action="match-random">
              <img src="${n}badge-random.png" class="tile-icon">
              <div class="tile-label">RANDOM</div>
              <div class="tile-desc">Affrontez un adversaire aléatoire</div>
            </div>
            <div class="play-tile" data-action="match-friend">
              <img src="${n}badge-vs.png" class="tile-icon">
              <div class="tile-label">AMI</div>
              <div class="tile-desc">Affrontez un ami</div>
            </div>
          </div>

          ${p.length?`
          <div class="promo-banner" id="promo-banner">
            <div id="promo-slide-content" style="display:flex;align-items:center;gap:14px;flex:1;min-width:0">
              ${h(p[0])}
            </div>
            <button class="promo-cta" id="promo-cta-btn">✅ Ouvrir des boosters</button>
            ${p.length>1?`<div class="promo-dots">${p.map((H,K)=>`<div class="promo-dot ${K===0?"active":""}" data-dot="${K}"></div>`).join("")}</div>`:""}
          </div>`:""}
        </div>

        <!-- Colonne droite : Actualités -->
        <div class="home2-col-right">
          <div class="news-widget">
            <div class="news-widget-header"><h4>ACTUALITÉS</h4><a id="nav-journal-link">Voir tout</a></div>
            ${g.length?g.map(y).join(""):'<div style="font-size:11px;color:var(--tile-fg-dim);padding:8px 0">Aucune actualité pour le moment.</div>'}
          </div>
        </div>

      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var O,J;const H=((O=window.visualViewport)==null?void 0:O.height)||window.innerHeight,K=window.innerWidth<1024;let X=0;if(K){const re=document.getElementById("home2-mobile-top"),le=document.getElementById("home2-mobile-bottom");X=((re==null?void 0:re.offsetHeight)||0)+((le==null?void 0:le.offsetHeight)||0)}else X=((J=document.getElementById("home2-chrome-header"))==null?void 0:J.offsetHeight)||0;const A=H-X,_=t.querySelector(".home-dark");_&&(_.style.minHeight=A+"px")}),(E=document.getElementById("nav-profile-btn"))==null||E.addEventListener("click",()=>i("settings")),(m=document.getElementById("nav-rankings-link"))==null||m.addEventListener("click",()=>i("rankings")),(T=document.getElementById("nav-rankings-cta"))==null||T.addEventListener("click",()=>i("rankings")),($=document.getElementById("rank-inline-link-btn"))==null||$.addEventListener("click",()=>i("rankings")),(S=document.getElementById("nav-journal-link"))==null||S.addEventListener("click",()=>zn()),t.querySelectorAll("[data-action]").forEach(H=>{H.addEventListener("click",()=>{H.style.transform="scale(.96)",setTimeout(()=>H.style.transform="",180);const K=H.dataset.action;if(K==="match-ai"){No(i,e);return}if(K==="match-random"){$t(),i("match",{matchMode:"random"});return}if(K==="match-friend"){i("friends");return}if(K==="mini-league"){i("mini-league");return}if(K==="ranked"){i("ranked");return}o("Bientôt disponible","info")})}),p.length>1){const H=document.getElementById("promo-slide-content"),K=()=>Array.from(document.querySelectorAll(".promo-dot")),X=A=>{w=A,H&&(H.innerHTML=h(p[w])),K().forEach((_,O)=>_.classList.toggle("active",O===w))};setInterval(()=>X((w+1)%p.length),5e3),document.querySelectorAll(".promo-dot").forEach(A=>{A.addEventListener("click",()=>X(Number(A.dataset.dot)))})}(F=document.getElementById("promo-cta-btn"))==null||F.addEventListener("click",()=>i("boosters")),Po(e,o),Bn(e,o,i),Fo(e,o,i),Mn(e,o)}async function Mn(t,e){const i=t.profile.id,{data:o}=await v.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(o!=null&&o.length))return;const a=o.reduce((r,s)=>r+(s.prize_amount||0),0),n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2200",n.innerHTML=`<div class="modal" style="max-width:400px">
    <div class="modal-header"><h2 style="color:#1A6B3C">🏆 Gains à récupérer</h2></div>
    <div class="modal-body" style="padding:18px 20px">
      <p style="font-size:14px;color:#555;margin:0 0 14px">Tu as terminé sur le podium de ${o.length>1?"plusieurs mini leagues":"une mini league"} !</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
        ${o.map(r=>{var s;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#f7f7f7;border-radius:10px">
          <span style="font-size:13px;font-weight:700;color:#1a1a1a">${((s=r.mini_leagues)==null?void 0:s.name)||"Mini League"}</span>
          <span style="font-size:13px;font-weight:900;color:#D4A017">+${(r.prize_amount||0).toLocaleString("fr")} cr.</span>
        </div>`}).join("")}
      </div>
      <button id="claim-all-btn" class="btn btn-primary" style="width:100%;margin-bottom:8px">💰 Tout récupérer (+${a.toLocaleString("fr")} cr.)</button>
      <button id="claim-later-btn" class="btn btn-ghost" style="width:100%">Plus tard</button>
    </div>
  </div>`,document.body.appendChild(n),n.querySelector("#claim-later-btn").addEventListener("click",()=>n.remove()),n.querySelector("#claim-all-btn").addEventListener("click",async r=>{const s=r.currentTarget;s.disabled=!0,s.textContent="...";let d=0;for(const c of o){const{data:l}=await v.rpc("claim_mini_league_prize",{p_league_id:c.league_id,p_user_id:i});l!=null&&l.success&&!l.already_claimed&&(d+=l.prize||0)}if(d>0){t.profile.credits=(t.profile.credits||0)+d;const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${t.profile.credits.toLocaleString("fr")}`),e(`💰 +${d.toLocaleString("fr")} cr. récupérés !`,"success")}n.remove()})}async function Fo(t,e,i){const o=document.getElementById("ongoing-match-banner");if(!o)return;const a=t.profile.id,{data:n}=await v.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${a},away_id.eq.${a}`).order("created_at",{ascending:!1});if(!(n!=null&&n.length)){o.innerHTML="";return}const r=n.map(d=>d.home_id===a?d.away_id:d.home_id).filter(Boolean);let s={};if(r.length){const{data:d}=await v.from("users").select("id, pseudo, club_name").in("id",r);(d||[]).forEach(c=>{s[c.id]=c.club_name||c.pseudo})}o.innerHTML=n.map(d=>{const c=d.home_id===a?d.away_id:d.home_id,l=s[c]||"Adversaire",f=d.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${f?"🏆 Mini League":d.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${l}</div>
      </div>
      <button data-resume="${d.id}" data-mini="${f?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${d.id}" data-opp="${c}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),o.querySelectorAll("[data-resume]").forEach(d=>{d.addEventListener("click",async()=>{$t();const c=document.getElementById("page-content")||document.getElementById("app");if(d.dataset.mini==="1"){const{data:l}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",d.dataset.resume).single();l?i("match-mini-league",{mlMatchId:l.id,leagueId:l.league_id}):i("mini-league")}else{const{resumePvpMatch:l}=await Co(async()=>{const{resumePvpMatch:f}=await Promise.resolve().then(()=>Hr);return{resumePvpMatch:f}},void 0);l(c,{state:t,navigate:i,toast:e,openModal:null,closeModal:null,refreshProfile:null},d.dataset.resume)}})}),o.querySelectorAll("[data-abandon]").forEach(d=>{d.addEventListener("click",()=>{jn(async()=>{await Cn(d.dataset.abandon,d.dataset.opp,a),e("Match abandonné (défaite 3-0)","info"),Fo(t,e,i)})})})}async function Cn(t,e,i){Gt();const{data:o}=await v.from("matches").select("home_id, away_id, game_state, mode").eq("id",t).single();if(!o)return;const a=o.home_id===i,n=a?0:3,r=a?3:0,s=o.game_state||{};s.p1Score=n,s.p2Score=r,s.phase="finished",s.forfeit=!0,await v.from("matches").update({status:"finished",forfeit:!0,winner_id:e,home_score:n,away_score:r,game_state:s}).eq("id",t),o.mode==="mini_league"&&await v.from("mini_league_matches").update({status:"finished",home_score:n,away_score:r}).eq("match_id",t)}function jn(t){const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(e),e.querySelector("#ab-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#ab-ok").addEventListener("click",()=>{e.remove(),t()}),e.addEventListener("click",i=>{i.target===e&&e.remove()})}async function Bn(t,e,i){var s,d,c,l;const o=document.getElementById("match-invite-banner");if(!o)return;const{data:a}=await v.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",t.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!a){o.innerHTML="";return}const n=((s=a.inviter)==null?void 0:s.club_name)||((d=a.inviter)==null?void 0:d.pseudo)||"?",r=a.inviter_id;o.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${n} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(c=document.getElementById("match-inv-accept"))==null||c.addEventListener("click",()=>{o.innerHTML="",$t(),i("match",{matchMode:"friend",friendId:r,friendName:n,isAccepting:!0})}),(l=document.getElementById("match-inv-decline"))==null||l.addEventListener("click",async()=>{await v.from("friend_match_invites").update({status:"declined"}).eq("id",a.id),o.innerHTML="",e("Invitation refusée","info")})}async function Po(t,e){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:o,error:a}=await v.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",t.user.id).eq("status","pending");if(a||!(o!=null&&o.length)){i.innerHTML="";return}const n=o.length,r=o.slice(0,2).map(d=>{var c;return((c=d.requester)==null?void 0:c.pseudo)||"?"}).join(", "),s=n>2?` +${n-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${n} demande${n>1?"s":""} d'ami${n>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>Ro(t,e,()=>Po(t,e)))}async function No(t,e){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:420px;border-radius:18px;overflow:hidden">
    <div class="modal-header"><h2>Solo — Choisir un niveau</h2><button class="btn-icon" id="solo-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div id="solo-levels-list" style="display:flex;flex-direction:column;gap:10px">
        <div style="text-align:center;color:#999;padding:20px">⏳ Chargement…</div>
      </div>
    </div>
  </div>`,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("solo-cancel").addEventListener("click",o),i.addEventListener("click",c=>{c.target===i&&o()});const[{data:a},{data:n}]=await Promise.all([v.from("solo_levels").select("*").eq("is_active",!0).order("level_number"),v.from("user_solo_progress").select("unlocked_level").eq("user_id",e.profile.id).maybeSingle()]),r=(n==null?void 0:n.unlocked_level)||1,s=a||[],d=document.getElementById("solo-levels-list");if(d){if(!s.length){d.innerHTML='<div style="text-align:center;color:#999;padding:20px">Aucun niveau configuré.</div>';return}d.innerHTML=s.map(c=>{const l=c.level_number>r,f=c.level_number===r,b=l?"#f0f0f0":f?"#eefaf2":"#f7f7f7",x=l?"#ddd":f?"#bfe8cf":"#e0e0e0",g=l?"#999":"#12401f";return`
      <div class="solo-level-card" data-level="${c.level_number}" data-locked="${l}"
        style="cursor:${l?"not-allowed":"pointer"};display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${b};border:1px solid ${x};opacity:${l?.6:1};transition:transform .12s ease">
        <div style="width:46px;height:46px;border-radius:12px;background:${l?"#bbb":"#1A6B3C"};display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#fff;flex-shrink:0">
          ${l?"🔒":c.level_number}
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:800;font-size:15px;color:${g}">Niveau ${c.level_number}</div>
          <div style="font-size:11px;color:${g};opacity:0.75;margin-top:1px">
            Note globale ~${c.target_note_avg} · 🟡${c.nb_liens_jaune} 🟢${c.nb_liens_vert} · 🏟️${c.nb_joueurs_stade}
          </div>
        </div>
        ${l?"":`<div style="font-weight:900;font-size:12.5px;color:${g};background:rgba(255,255,255,0.7);padding:6px 11px;border-radius:999px;flex-shrink:0;white-space:nowrap">+${c.reward_credits} cr.</div>`}
      </div>`}).join(""),d.querySelectorAll(".solo-level-card").forEach(c=>{c.dataset.locked!=="true"&&(c.addEventListener("mouseenter",()=>{c.style.transform="translateY(-1px)"}),c.addEventListener("mouseleave",()=>{c.style.transform=""}),c.addEventListener("click",()=>{o(),$t(),t("match",{matchMode:"solo",soloLevel:Number(c.dataset.level)})}))})}}const oi="#1A6B3C",ni="#cc2222",qn="#D4A017",go="#888";async function Dn(t,e){const{state:i,toast:o}=e;t.innerHTML=`
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
    </div>`,await Go(i,o,e),document.getElementById("btn-add-friend").addEventListener("click",()=>Pn(i,o)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Ro(i,o,null,e))}async function Go(t,e,i={}){const{navigate:o}=i,a=t.user.id,{data:n,error:r}=await v.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${a},addressee_id.eq.${a}`),{count:s}=await v.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",a).eq("status","pending"),d=document.getElementById("pending-badge");d&&(s>0?(d.style.display="flex",d.textContent=s):d.style.display="none");const c=document.getElementById("friends-list");if(!c)return;if(r){console.error("[Friends] Erreur:",r),c.innerHTML=`<div style="color:${ni};text-align:center;padding:16px">Erreur chargement : ${r.message}</div>`;return}const l=(n||[]).map(x=>x.requester_id===a?x.addressee_id:x.requester_id);let f={};if(l.length){const{data:x}=await v.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",l);(x||[]).forEach(g=>{f[g.id]=g})}const b=(n||[]).map(x=>({friendshipId:x.id,friend:f[x.requester_id===a?x.addressee_id:x.requester_id]||{pseudo:"?"}}));if(!b.length){c.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}c.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${b.length} ami${b.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${b.map(({friendshipId:x,friend:g})=>Fn(g,x)).join("")}
    </div>`,c.querySelectorAll("[data-stats]").forEach(x=>{x.addEventListener("click",()=>Nn(t,x.dataset.stats,x.dataset.friendName))}),c.querySelectorAll("[data-match]").forEach(x=>{x.addEventListener("click",async()=>{const g=x.dataset.friendId,p=x.dataset.friendName;if(typeof o!="function"){e("Erreur navigation","error");return}const u=t.user.id,{data:y}=await v.from("friend_match_invites").select("id").eq("inviter_id",g).eq("invitee_id",u).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),w=!!y;console.log("[Friends] clic match",{fid:g,fname:p,isAccepting:w}),$t(),o("match",{matchMode:"friend",friendId:g,friendName:p,isAccepting:w})})})}function Fn(t,e){const i=t.club_name||t.pseudo||"?",o=t.pseudo||"",a=(o||i).slice(0,2).toUpperCase(),n=t.club_color2||oi,r=t.club_color1||"#ffffff",s=t.last_seen_at?new Date(t.last_seen_at):null,d=s&&Date.now()-s.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:var(--tile-bg);border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${n};border:2.5px solid ${r};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${r}">
          ${a}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${d?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${o}</div>
        <div style="font-size:11px;color:${d?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${d?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${e}" data-friend-id="${t.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:var(--tile-bg);font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${t.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${qn};background:var(--tile-bg);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Pn(t,e){const i=Ji();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${ni};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${Qi()}`,document.body.appendChild(i);const o=i.querySelector("#friend-pseudo-input"),a=i.querySelector("#add-friend-error"),n=()=>i.remove();o.focus(),i.querySelector("#add-cancel").addEventListener("click",n),i.addEventListener("click",r=>{r.target===i&&n()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const r=o.value.trim();if(!r){a.textContent="Entre un pseudo";return}a.textContent="";const{data:s}=await v.from("users").select("id, pseudo").ilike("pseudo",r).single();if(!s){a.textContent="Utilisateur introuvable";return}if(s.id===t.user.id){a.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:d}=await v.from("friendships").select("id, status").or(`and(requester_id.eq.${t.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${t.user.id})`).single();if(d){const l=d.status==="accepted"?"Vous êtes déjà amis !":d.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";a.textContent=l;return}const{error:c}=await v.from("friendships").insert({requester_id:t.user.id,addressee_id:s.id,status:"pending"});if(c){a.textContent="Erreur : "+c.message;return}n(),e(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function Ro(t,e,i=null,o={}){const a=t.user.id,{data:n}=await v.from("friendships").select("id, requester_id").eq("addressee_id",a).eq("status","pending").order("created_at",{ascending:!1}),r=(n||[]).map(b=>b.requester_id);let s={};if(r.length){const{data:b}=await v.from("users").select("id, pseudo, club_name").in("id",r);(b||[]).forEach(x=>{s[x.id]=x})}const d=(n||[]).map(b=>({...b,requester:s[b.requester_id]||{pseudo:"?"}})),c=Ji(),l=d||[];c.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${l.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${l.map(b=>{var x,g,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((x=b.requester)==null?void 0:x.club_name)||((g=b.requester)==null?void 0:g.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=b.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${b.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${oi};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${b.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${ni};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${Qi()}`,document.body.appendChild(c);const f=()=>c.remove();c.querySelector("#pending-close").addEventListener("click",f),c.addEventListener("click",b=>{b.target===c&&f()}),c.querySelectorAll("[data-accept]").forEach(b=>{b.addEventListener("click",async()=>{const{error:x}=await v.from("friendships").update({status:"accepted"}).eq("id",b.dataset.accept);if(x){e("Erreur : "+x.message,"error");return}b.closest("div[style]").remove(),e("✅ Ami accepté !","success"),Go(t,e,o),i&&i()})}),c.querySelectorAll("[data-decline]").forEach(b=>{b.addEventListener("click",async()=>{await v.from("friendships").delete().eq("id",b.dataset.decline),b.closest("div[style]").remove(),e("Demande refusée","info"),i&&i()})})}async function Nn(t,e,i){const o=t.user.id,[a,n]=[o,e].sort(),r=o===a,{data:s}=await v.from("friend_match_stats").select("*").eq("player1_id",a).eq("player2_id",n).single(),d=t.profile.club_name||t.profile.pseudo||"Moi",c=s||{},l=r?c.wins_p1||0:c.wins_p2||0,f=r?c.wins_p2||0:c.wins_p1||0,b=c.draws||0,x=r?c.goals_p1||0:c.goals_p2||0,g=r?c.goals_p2||0:c.goals_p1||0,p=r?c.gc_used_p1||0:c.gc_used_p2||0,u=r?c.gc_used_p2||0:c.gc_used_p1||0,y=c.matches_total||0,w=(E,m,T,$=oi,S=ni)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${$}">${m}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${E}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${S}">${T}</div>
    </div>`,h=Ji();h.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${d}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${y===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${w("Victoires",l,f)}
        ${w("Nuls",b,b,go,go)}
        ${w("Défaites",f,l)}
        ${w("Buts marqués",x,g)}
        ${w("Buts encaissés",g,x,ni,oi)}
        ${w("GC utilisés ⚡",p,u,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${y} match${y>1?"s":""} joué${y>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${Qi()}`,document.body.appendChild(h),h.querySelector("#stats-close").addEventListener("click",()=>h.remove()),h.addEventListener("click",E=>{E.target===h&&h.remove()})}function Ji(){const t=document.createElement("div");return t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",t}function Qi(){return`
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
        background:${oi};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function Gn(t,{state:e,navigate:i,toast:o}){const a=e.profile;if(!a)return;const n="/icons/";Do(i,a,"game",n),t.innerHTML=`
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
  </div>`,t.querySelectorAll("[data-action]").forEach(r=>{r.addEventListener("click",()=>{r.style.transform="scale(.96)",setTimeout(()=>r.style.transform="",180);const s=r.dataset.action;if(s==="match-ai"){No(i,e);return}if(s==="match-random"){$t(),i("match",{matchMode:"random"});return}if(s==="match-friend"){i("friends");return}if(s==="mini-league"){i("mini-league");return}if(s==="ranked"){i("ranked");return}o("Bientôt disponible","info")})})}async function Oo(t,e){var f;const{state:i,navigate:o}=e,a=un(),n=Yi(),r=(f=i==null?void 0:i.profile)==null?void 0:f.is_admin,s="2026.07.27-1322";t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">

    <div style="padding:16px;display:flex;flex-direction:column;gap:14px;max-width:520px;margin:0 auto">

      <div style="background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:14px;padding:18px">
        <div style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page);margin-bottom:4px">🎨 Apparence</div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Choisis le thème de l'application.</div>
        <div style="display:flex;gap:10px">
          <button data-theme-choice="dark" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${a==="dark"?"#D4A017":"var(--tile-border)"};background:${a==="dark"?"rgba(212,160,23,0.12)":"transparent"}">
            <div style="font-size:22px;margin-bottom:6px">🌙</div>
            <div style="font-size:13px;font-weight:700;color:var(--tile-fg-on-page)">Sombre</div>
          </button>
          <button data-theme-choice="light" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${a==="light"?"#D4A017":"var(--tile-border)"};background:${a==="light"?"rgba(212,160,23,0.12)":"transparent"}">
            <div style="font-size:22px;margin-bottom:6px">☀️</div>
            <div style="font-size:13px;font-weight:700;color:var(--tile-fg-on-page)">Clair</div>
          </button>
        </div>
      </div>

      <div style="background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:14px;padding:18px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
          <div style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page)">🔊 Son</div>
          <div id="volume-label" style="font-size:14px;font-weight:900;color:#D4A017">${n}%</div>
        </div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Musiques et effets sonores de l'app.</div>
        <input id="volume-slider" type="range" min="0" max="100" step="5" value="${n}"
          style="width:100%;accent-color:#1A6B3C;cursor:pointer;margin-bottom:14px">
        <button id="volume-test" class="btn" style="width:100%;padding:11px;border-radius:10px;border:1.5px solid var(--tile-border);background:transparent;color:var(--tile-fg-on-page);font-weight:700;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">
          🎵 Tester le son
        </button>
      </div>

      ${r?`
      <a href="/admin.html" id="settings-admin-mode"
        style="width:100%;box-sizing:border-box;padding:14px;border-radius:12px;border:none;background:var(--yellow,#D4A017);color:#111;font-weight:900;font-size:14px;cursor:pointer;margin-top:6px;text-align:center;text-decoration:none;display:flex;align-items:center;justify-content:center;gap:8px">
        ⚙️ Administration Mode
      </a>`:""}

      <button id="settings-logout" class="btn" style="width:100%;padding:14px;border-radius:12px;border:1.5px solid #ff6b6b;background:transparent;color:#ff6b6b;font-weight:700;font-size:14px;cursor:pointer;margin-top:${r?"0":"6px"}">
        Déconnexion
      </button>

      <div style="text-align:center;font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace;margin-top:4px">build ${s}</div>

    </div>
  </div>`,t.querySelectorAll("[data-theme-choice]").forEach(b=>{b.addEventListener("click",()=>{wa(b.dataset.themeChoice),Oo(t,e)})});const d=t.querySelector("#volume-slider"),c=t.querySelector("#volume-label");let l=null;d.addEventListener("input",()=>{$n(Number(d.value)),c.textContent=`${d.value}%`,l&&(l.volume=Math.max(0,Math.min(1,Number(d.value)/100)))}),t.querySelector("#volume-test").addEventListener("click",()=>{l=Xi("/sounds/match-opening.mp3",1)}),t.querySelector("#settings-logout").addEventListener("click",async()=>{await v.auth.signOut(),window.location.reload()})}const ze={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Pe(t,e){if(!t)return 0;let i=0;switch(e){case"GK":i=Number(t.note_g)||0;break;case"DEF":i=Number(t.note_d)||0;break;case"MIL":i=Number(t.note_m)||0;break;case"ATT":i=Number(t.note_a)||0;break;default:i=0}return i+(t.boost||0)}const xo=["ATT","MIL","DEF","GK"];function Ho(t,e,i){if(!t||!e)return!1;if(i&&t.position&&e.position)return Ki(i).some(([l,f])=>l===t.position&&f===e.position||l===e.position&&f===t.position);const o=t._col!=null&&e._col!=null&&t._col===e._col,a=t._col!=null&&e._col!=null&&Math.abs(t._col-e._col)===1,n=xo.indexOf(t._line||t.job),r=xo.indexOf(e._line||e.job),s=Math.abs(n-r)===1;return(t._line||t.job)===(e._line||e.job)&&a||o&&s}function Uo(t,e){let i=0;const o=t.length;for(let a=0;a<o;a++)for(let n=a+1;n<o;n++){const r=t[a],s=t[n];if(!r||!s||!Ho(r,s,e))continue;const d=Kt(r,s);d==="#00ff88"?i+=10:d==="#FFD700"&&(i+=5)}return i}function ri(t,e={},i){let o=0,a=0;t.forEach(d=>{const c=d._line||d.job,l=Number(c==="MIL"?d.note_m:d.note_a)||0,f=d.stadiumBonus&&(c==="MIL"||c==="ATT")?10:0;o+=e.doubleAttack?l*2:l,a+=(d.boost||0)+f});const n=o+a,r=Uo(t,i);let s=n+r;return e.stolenNote&&(s-=e.stolenNote),{base:n,links:r,total:Math.max(0,s)}}function ai(t,e={},i){const o=t.reduce((r,s)=>{const d=s._line||s.job;let c=0;d==="GK"?c=Number(s.note_g)||0:d==="MIL"?c=Number(s.note_m)||0:c=Number(s.note_d)||0;const l=s.stadiumBonus&&(d==="GK"||d==="DEF"||d==="MIL")?10:0;return r+c+(s.boost||0)+l},0),a=Uo(t,i);let n=o+a;return e.stolenNote&&(n-=e.stolenNote),{base:o,links:a,total:Math.max(0,n)}}function Zi(t,e,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:t>e,shielded:!1}}function Ko(t,e,i="easy"){const o=t.filter(r=>!r.used);if(!o.length)return[];const a=[...o].sort((r,s)=>{const d=e==="attack"?Pe(r,"ATT"):r._line==="GK"?Pe(r,"GK"):Pe(r,"DEF");return(e==="attack"?Pe(s,"ATT"):s._line==="GK"?Pe(s,"GK"):Pe(s,"DEF"))-d});let n=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return a.slice(0,Math.min(n,a.length,3))}function Rn(t,e){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[t]||i.vs_ai_easy)[e]||0}const On={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Jt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},di=["GK","DEF","MIL","ATT"],Hn=["Tous","GK","DEF","MIL","ATT"],Un={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function bo(t){const e=t.player;return e?(e.rarity,Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)):null}function Kn(t){return t.length?t.reduce((e,i)=>bo(i)>bo(e)?i:e,t[0]):t[0]}const Vn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ci(t,e){return t&&Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Ci(t,e=""){const i=t.player;if(!i)return"";const o=t.evolution_bonus||0,a={...i,_evolution_bonus:o},n=e?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${e}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${t.id}">
    ${n}
    ${Se(a,{width:140})}
  </div>`}function yo(t){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${Se(t,{width:140})}
  </div>`}async function Yn(t,e){const{state:i,navigate:o,toast:a,openModal:n,closeModal:r}=e;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await v.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:d}=await v.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),c=(s||[]).filter(M=>M.card_type==="player"&&M.player),l=(s||[]).filter(M=>M.card_type==="game_changer"),f=(s||[]).filter(M=>M.card_type==="formation"),b=(s||[]).filter(M=>M.card_type==="stadium"),{data:x}=await v.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(x||[]).forEach(M=>{g[M.name]=M});const{data:p}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),u={};(p||[]).forEach(M=>{u[M.id]=M}),b.forEach(M=>{M.stadium_def&&(u[M.stadium_id]=M.stadium_def)});const y=Object.keys(Vi),w=Object.keys(ze),h={};c.forEach(M=>{const Y=M.player.id;h[Y]=(h[Y]||0)+1}),new Set(Object.keys(h).map(M=>String(M)));const E=new Set(f.map(M=>M.formation)),m=new Set(l.map(M=>M.gc_type));let T="player",$="Tous",S="",F=!1;function H(){return[...c].sort((M,Y)=>{const q=di.indexOf(M.player.job),j=di.indexOf(Y.player.job);return q!==j?q-j:(M.player.surname_real||"").localeCompare(Y.player.surname_real||"")})}function K(){return[...d||[]].sort((M,Y)=>{const q=di.indexOf(M.job),j=di.indexOf(Y.job);return q!==j?q-j:(M.surname_real||"").localeCompare(Y.surname_real||"")})}function X(){return H().filter(M=>{const Y=M.player,q=$==="Tous"||Y.job===$,j=!S||`${Y.firstname} ${Y.surname_real}`.toLowerCase().includes(S);return q&&j})}function A(){return K().filter(M=>{const Y=$==="Tous"||M.job===$,q=!S||`${M.firstname} ${M.surname_real}`.toLowerCase().includes(S);return Y&&q})}t.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--tile-border);background:var(--tile-bg)">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${T==="player"?"var(--green)":"transparent"};
        color:${T==="player"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
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
  </div>`,function(Y){const q=document.getElementById(Y);if(!q)return;q.addEventListener("wheel",ae=>{Math.abs(ae.deltaY)<=Math.abs(ae.deltaX)||(ae.preventDefault(),q.scrollLeft+=ae.deltaY)},{passive:!1});let j=!1,W=0,C=0,R=!1,ce=!1;q.addEventListener("mousedown",ae=>{j=!0,R=!1,W=ae.pageX,C=q.scrollLeft}),window.addEventListener("mouseup",()=>{j=!1,R&&(q.style.cursor="",ce=!0),R=!1}),window.addEventListener("mousemove",ae=>{if(!j)return;const he=ae.pageX-W;!R&&Math.abs(he)<6||(R=!0,q.style.cursor="grabbing",ae.preventDefault(),q.scrollLeft=C-he)}),q.addEventListener("click",ae=>{ce&&(ae.stopPropagation(),ae.preventDefault(),ce=!1)},!0)}("col-grid");function _(){const M=document.getElementById("col-filters");M&&(T==="player"?(M.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${S}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Hn.map(Y=>`
            <button class="filter-btn" data-job="${Y}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${Y===$?"var(--green)":"var(--tile-border)"};
                background:${Y===$?"var(--green)":"#fff"};
                color:${Y===$?"#fff":"#555"}">
              ${Y}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${F?"var(--yellow)":"var(--tile-border)"};
              background:${F?"var(--yellow)":"#fff"};
              color:${F?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${F?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",Y=>{S=Y.target.value.toLowerCase(),O()}),t.querySelectorAll(".filter-btn").forEach(Y=>{Y.addEventListener("click",()=>{$=Y.dataset.job,_(),O()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{F=!F,_(),O()})):(M.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${F?"var(--yellow)":"var(--tile-border)"};
              background:${F?"var(--yellow)":"#fff"};
              color:${F?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${F?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{F=!F,_(),O()})))}function O(){const M=document.getElementById("col-grid");M&&(T==="player"?U(M):T==="formation"?de(M):T==="stadium"?fe(M):me(M))}function J(M,Y,q,j,W,C=0){const R=document.getElementById("col-grid"),ce=document.getElementById("col-big");if(!R||!ce)return;var ae=0;function he(){var pt;const ge=window.innerWidth>=768,ue=document.getElementById("col-big"),_e=document.getElementById("col-gap"),Ae=((pt=document.getElementById("col-grid"))==null?void 0:pt.parentElement)||null,je=ue?ue.closest(".page"):null;if(ue&&Ae&&je){let Le=0;Array.from(je.children).forEach(function(D){D!==ue&&D!==Ae&&D!==_e&&(Le+=D.offsetHeight)});const Be=Math.max(0,je.clientHeight-Le),qe=Math.round(Be*(C/100)),Ne=Math.max(0,Be-qe),k=ge?50/71:45/63,L=Math.round(Ne*k),z=Math.max(0,Ne-L);_e&&(_e.style.height=qe+"px"),ue.style.flex="none",ue.style.height=L+"px",ue.style.minHeight="0",Ae.style.flex="none",Ae.style.height=z+"px",Ae.style.minHeight="0",Ae.style.display="flex",Ae.style.overflow="hidden"}const Ee=document.getElementById("col-grid");Ee&&(Ee.style.height="100%",Ee.style.flexShrink="0",Ee.style.overflowX="auto",Ee.style.overflowY="hidden",Ee.style.alignItems="center",Ee.style.width="100%"),ce.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+Y(M[ae])+"</div>";var Et=ce.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Et&&Et.addEventListener("click",function(){j(M[ae])}),requestAnimationFrame(function(){var Le=document.getElementById("big-card-inner");if(!(!Le||!ce)){var Be=ce.clientHeight,qe=ce.clientWidth-16,Ne=Le.offsetHeight,k=Le.offsetWidth;if(Ne>0&&k>0&&Be>40){var L=Math.min(Be/Ne,qe/k);Le.style.transform="scale("+L.toFixed(3)+")",Le.style.transformOrigin="center center"}}}),R.innerHTML=M.map(function(Le,Be){var qe=Be===ae,Ne="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(qe?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Be+'" style="'+Ne+'">'+q(Le,qe)+"</div>"}).join(""),R.querySelectorAll(".col-mini-item").forEach(function(Le){Le.addEventListener("click",function(){ae=Number(Le.dataset.idx),he(),Le.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var Le=Ee?Ee.clientHeight:0,Be=R.querySelector(".col-mini-item > div");if(!(!Le||!Be)){var qe=Be.style.zoom;Be.style.zoom="1";var Ne=Be.offsetHeight;if(Be.style.zoom=qe,!(Ne<=0)){var k=Le/Ne;R.querySelectorAll(".col-mini-item > div").forEach(function(L){L.style.zoom=k.toFixed(4)})}}})}he()}function re(M,Y){var q=window.innerWidth>=768?.76:.54,j;if(!M||M._fake){var W=M?M.player:null;if(!W)return"";j=yo(W)}else j=Ci(M,"");var C=M&&!M._fake?h[M.player&&M.player.id]||1:0,R=C>0?'<div style="position:absolute;top:6px;right:6px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:11px;font-weight:900;padding:2px 7px;z-index:3;box-shadow:0 1px 4px rgba(0,0,0,0.4)">×'+C+"</div>":"";return'<div style="display:inline-block;position:relative;zoom:'+q+';pointer-events:none;line-height:0">'+R+j+"</div>"}function le(M,Y,q){var j=q>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+q+"</div>":"",W=!!Y,C=gi(M,wt[M],{width:160});return W||(C='<div style="filter:grayscale(1);opacity:0.5">'+C+"</div>"),"<div "+(Y?'data-form-id="'+Y.id+'"':"")+' style="position:relative;cursor:pointer">'+j+C+"</div>"}function B(M,Y){var q=window.innerWidth>=768?.76:.54,j=gi(M,wt[M],{width:140});return Y||(j='<div style="filter:grayscale(1);opacity:0.45">'+j+"</div>"),'<div style="display:inline-block;zoom:'+q+';line-height:0;pointer-events:none">'+j+"</div>"}function U(M){if(F){const Y=A();if(!Y.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const q=Y.map(j=>c.find(W=>W.player.id===j.id)||{_fake:!0,player:j,id:"fake-"+j.id});J(q,j=>j._fake?yo(j.player):Ci(j,""),j=>j._fake?re({player:j.player,id:"x",_fake:!0}):re(j),j=>{j._fake||ho(j,c,h,e)})}else{const Y=X();if(!Y.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const q={};Y.forEach(W=>{const C=W.player.id;q[C]||(q[C]=[]),q[C].push(W)});const j=Object.values(q).map(W=>Kn(W));J(j,W=>{const C=h[W.player.id]||1,R=C>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${C}</div>`:"",ae=c.filter(he=>he.player.id===W.player.id&&he.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Ci(W,R+ae)},W=>re(W),W=>ho(W,c,h,e))}}function de(M){const Y=F?y:[...E];if(!Y.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const q=Y.map(j=>({formation:j,card:f.find(W=>W.formation===j)||null,owned:E.has(j)}));J(q,({formation:j,card:W,owned:C})=>le(j,C?W:null,C?f.filter(R=>R.formation===j).length:0),({formation:j,owned:W})=>B(j,W),({card:j,owned:W})=>{W&&j&&Xn(j,f,e,n)},"#1A6B3C",5)}function me(M){const Y=Object.keys(g),q=F?Y.length?Y:w:[...m];if(!q.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const j=q.map(W=>({type:W,gc:ze[W]||{icon:"⚡",desc:""},def:g[W]||null,owned:m.has(W),card:l.find(C=>C.gc_type===W)||null}));J(j,({type:W,gc:C,def:R,owned:ce,card:ae})=>{var Ee;const he=(R==null?void 0:R.name)||W,ge=ce?l.filter(Et=>Et.gc_type===W).length:0,ue=ge>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ge}</div>`:"",_e=(R==null?void 0:R.effect)||C.desc||"",Ae=R!=null&&R.image_url?`/icons/${R.image_url}`:((Ee=R==null?void 0:R.club)==null?void 0:Ee.logo_url)||(R!=null&&R.country_code?`https://flagsapi.com/${R.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);let je=it(he,Ae,C.icon,_e,{width:160,onClick:ce});return ce||(je=`<div style="filter:grayscale(1);opacity:0.5">${je}</div>`),`<div ${ce&&ae?`data-gc-id="${ae.id}" data-gc-type="${W}"`:""} style="position:relative">${ue}${je}</div>`},({type:W,gc:C,def:R,owned:ce})=>{const ae=window.innerWidth>=768?.76:.54,he=(R==null?void 0:R.name)||W,ge=(R==null?void 0:R.effect)||C.desc||"",ue=R!=null&&R.image_url?`/icons/${R.image_url}`:null;let _e=it(he,ue,C.icon,ge,{width:140});return ce||(_e=`<div style="filter:grayscale(1);opacity:0.45">${_e}</div>`),`<div style="display:inline-block;zoom:${ae};line-height:0;pointer-events:none">${_e}</div>`},({type:W,owned:C,def:R})=>{C&&Wn(W,R,n)},"#7a28b8",5)}function fe(M){const Y="#4FC3F7",q="/";if(!b.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const j={};b.forEach(C=>{const R=C.stadium_id||"?";(j[R]=j[R]||[]).push(C)});const W=Object.entries(j).map(([C,R])=>({sid:C,def:u[C]||null,count:R.length,card:R[0]}));J(W,({def:C,count:R})=>{var _e,Ae;const ce=(C==null?void 0:C.name)||"?",ae=((_e=C==null?void 0:C.club)==null?void 0:_e.encoded_name)||(C==null?void 0:C.country_code)||"—",he=C!=null&&C.image_url?`${q}icons/${C.image_url}`:((Ae=C==null?void 0:C.club)==null?void 0:Ae.logo_url)||(C!=null&&C.country_code?`https://flagsapi.com/${C.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),ge=R>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${R}</div>`:"",ue=`${ae}<br>+10 ⭐ joueurs alliés`;return`<div style="position:relative">${ge}${Ot(ce,he,ue,{width:160})}</div>`},({def:C})=>{var ue,_e;const R=window.innerWidth>=768?.76:.54,ce=(C==null?void 0:C.name)||"?",ae=((ue=C==null?void 0:C.club)==null?void 0:ue.encoded_name)||(C==null?void 0:C.country_code)||"—",he=C!=null&&C.image_url?`${q}icons/${C.image_url}`:((_e=C==null?void 0:C.club)==null?void 0:_e.logo_url)||(C!=null&&C.country_code?`https://flagsapi.com/${C.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),ge=`${ae}<br>+10 ⭐`;return`<div style="display:inline-block;zoom:${R};line-height:0;pointer-events:none">${Ot(ce,he,ge,{width:140})}</div>`},null,Y,5)}t.querySelectorAll(".col-tab-btn").forEach(M=>{M.addEventListener("click",()=>{T=M.dataset.tab,$="Tous",S="",F=!1,t.querySelectorAll(".col-tab-btn").forEach(Y=>{const q=Y.dataset.tab===T;Y.style.borderBottomColor=q?"var(--green)":"transparent",Y.style.color=q?"var(--green)":"var(--tile-fg-dim)"}),_(),O()})}),_(),O()}function Wn(t,e,i){const o=ze[t]||{icon:"⚡",desc:"Effet spécial."},a=(e==null?void 0:e.name)||t,n=(e==null?void 0:e.effect)||o.desc,r=e!=null&&e.image_url?`/icons/${e.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      ${it(a,r,o.icon,n,{width:200})}
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const pi=1e3;function Xn(t,e,i,o){var g,p,u;const{state:a,toast:n,closeModal:r,navigate:s,refreshProfile:d}=i,c=t.formation,l={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const y=wt[c]||{},w=Vi[c]||[],h=290,E=360,m=20;function T(S){const F=y[S];return F?{x:F.x*h,y:F.y*E}:null}let $=`<svg width="${h}" height="${E}" viewBox="0 0 ${h} ${E}" xmlns="http://www.w3.org/2000/svg">`;for(const[S,F]of w){const H=T(S),K=T(F);!H||!K||($+=`<line x1="${H.x}" y1="${H.y}" x2="${K.x}" y2="${K.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const S of Object.keys(y)){const F=T(S);if(!F)continue;const H=S.replace(/\d+/,""),K=l[H]||"#555";$+=`<circle cx="${F.x}" cy="${F.y}" r="${m}" fill="${K}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,$+=`<text x="${F.x}" y="${F.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${H}</text>`}return $+="</svg>",$}const b=e.filter(y=>y.formation===c);b.length;const x=!t.is_for_sale;o(`Formation ${c}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    ${x?`
    <div style="margin-top:12px;border-top:1px solid var(--tile-border);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${pi}"
          style="flex:1;padding:8px;border:1.5px solid var(--tile-border);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${t.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(g=document.getElementById("direct-sell-form-btn"))==null||g.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${c} pour ${pi.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const y=b.find(h=>!h.is_for_sale)||b[0];if(!y){n("Aucune carte à vendre","error");return}await v.from("market_listings").delete().eq("card_id",y.id),await v.from("transfer_history").delete().eq("card_id",y.id);const{error:w}=await v.from("cards").delete().eq("id",y.id);if(w){n(w.message,"error");return}await v.from("users").update({credits:(a.profile.credits||0)+pi}).eq("id",a.profile.id),await d(),n(`+${pi.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const y=parseInt(document.getElementById("sell-price-form").value);if(!y||y<1){n("Prix invalide","error");return}await v.from("cards").update({is_for_sale:!0,sale_price:y}).eq("id",t.id),await v.from("market_listings").insert({seller_id:a.profile.id,card_id:t.id,price:y}),n("Carte mise en vente sur le marché !","success"),r(),s("collection")}),(u=document.getElementById("cancel-sell-form-btn"))==null||u.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),r(),s("collection")})}async function ho(t,e,i,o){var B,U,de,me,fe,M,Y;const{state:a,toast:n,openModal:r,closeModal:s,navigate:d,refreshProfile:c}=o,l=t.player,f=e.filter(q=>q.player.id===l.id),b=f.length,x=t.evolution_bonus||0,g=Math.max((Number(l.note_g)||0)+(l.job==="GK"||l.job2==="GK"?x:0),(Number(l.note_d)||0)+(l.job==="DEF"||l.job2==="DEF"?x:0),(Number(l.note_m)||0)+(l.job==="MIL"||l.job2==="MIL"?x:0),(Number(l.note_a)||0)+(l.job==="ATT"||l.job2==="ATT"?x:0)),p=l.rarity||"normal",{data:u}=await v.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",g).gte("note_max",g).order("note_min",{ascending:!1}).limit(1);((B=u==null?void 0:u[0])==null?void 0:B.price)??Un[p];const y=l.rarity!=="legende";Ct(l);const w=ci(l,l.job)+x,h=l.job2?ci(l,l.job2)+(ci(l,l.job2)>0?x:0):null;Jt[l.job],l.job2&&Jt[l.job2];const E=On[l.rarity]||"#ccc",m=Vn[l.country_code]||l.country_code||"",T=t.evolution_bonus||0,S=w+T,F=h||0,H=F>0?F+T:0,K=f.map(q=>q.id);let X={};if(K.length){const{data:q}=await v.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",K).order("transferred_at",{ascending:!0});(q||[]).forEach(j=>{X[j.card_id]||(X[j.card_id]=[]),X[j.card_id].push(j)})}const A=K.length?`
    <div style="margin-top:16px;border-top:1px solid var(--tile-border);padding-top:14px">
      ${b-1>0?`<div style="font-size:13px;font-weight:700;margin-bottom:10px">🗂️ Copies (${b-1})</div>`:`
        <div style="font-size:12px;color:#aaa;margin-bottom:10px;font-style:italic">Aucune copie à sacrifier</div>
        ${t.is_for_sale?`
        <div style="background:#fff8e1;border-radius:10px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center">
          <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
          <button id="cancel-sell-btn" class="btn btn-ghost btn-sm">Retirer</button>
        </div>`:y?`
        <!-- Vente directe : un seul exemplaire = c'est cette carte qui part sur le marché -->
        <div style="background:#f0fdf4;border:2px solid #1A6B3C;border-radius:12px;padding:14px">
          <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:8px">🛒 Mettre cette carte en vente</div>
          <div style="display:flex;gap:8px">
            <input type="number" id="single-sell-price" min="1" placeholder="Prix"
              value="${l.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="single-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>`:'<div style="font-size:11px;color:#aaa;font-style:italic">Les cartes légendes ne sont pas vendables.</div>'}
      `}
      <!-- Grille de mini-cartes (copies uniquement, l'exemplaire 1 = carte principale affichée en haut) -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${f.filter(q=>q.id!==t.id).map((q,j)=>{const W=X[q.id]||[],C=q.is_for_sale,R=W.length?W[W.length-1]:null,ce=q.evolution_bonus||0,ae=R?R.source==="booster"?"Booster":R.price?R.price.toLocaleString("fr")+" cr.":"—":"—",he=R?new Date(R.transferred_at).toLocaleDateString("fr",{day:"2-digit",month:"2-digit",year:"numeric"}):"",ge=80,ue=Math.round(ge*657/507),_e=Se({...l,_evolution_bonus:ce},{width:ge});return`
            <div class="exemplaire-row" data-card-id="${q.id}" data-card-idx="${j}"
              style="position:relative;cursor:${C?"not-allowed":"pointer"};opacity:${C?.55:1};transition:transform .1s">
              <!-- Checkbox cachée -->
              <input type="checkbox" class="expl-check"
                data-id="${q.id}" data-evo="${ce}" data-note="${ci(l,l.job)}"
                ${C?"disabled":""}
                style="display:none">
              <!-- Wrapper exactement aux dimensions de la carte -->
              <div class="expl-mini-card" style="position:relative;width:${ge}px;height:${ue}px;border-radius:8px;overflow:hidden">
                ${_e}
                <!-- Overlay vert sélection — couvre toute la carte -->
                <div class="expl-sel-overlay" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(26,107,60,0.38);pointer-events:none;z-index:10;box-shadow:inset 0 0 0 3px #1A6B3C;border-radius:8px"></div>
                <!-- Checkmark -->
                <div class="expl-sel-check" style="display:none;position:absolute;top:5px;left:5px;width:20px;height:20px;background:#1A6B3C;border-radius:50%;z-index:11;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:900">✓</div>
                ${C?'<div style="position:absolute;top:0;right:0;background:#e67e22;color:#fff;font-size:6px;font-weight:900;padding:2px 4px;border-radius:0 6px 0 4px;z-index:12">VENTE</div>':""}
              </div>
              <!-- Source + date -->
              <div style="font-size:9px;color:#888;text-align:center;margin-top:3px;line-height:1.3">
                ${ae}${he?`<br>${he}`:""}
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
              ${(t.evolution_bonus||0)>0?`+${t.evolution_bonus} appliqué${t.evolution_bonus>1?"s":""} · Note : ${S}${l.job2&&F>0?` / ${H}`:""}`:`Note actuelle : ${S}${l.job2&&F>0?` / ${H}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${b<=1?"#ccc":"#1A6B3C"};border-color:${b<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${b<=1?"not-allowed":"pointer"}"
            ${b<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${y?`
        <div style="border-top:1px solid #d1fae5;padding-top:8px">
          <div style="font-size:11px;color:#555;margin-bottom:6px">Marché des transferts (prix par carte)</div>
          <div style="display:flex;gap:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${l.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>`:""}
      </div>
    </div>`:"";r(`${l.firstname} ${l.surname_real}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${Se({...l,_evolution_bonus:x},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:12px">

        <!-- Rareté + carte évolutive -->
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:3px">RARETÉ</div>
          <div style="font-weight:900;font-size:15px;color:${l.rarity==="normal"?"#555":l.rarity==="papyte"?"#707070":E}">${l.rarity.toUpperCase()}</div>
          ${l.rarity==="pepite"||l.rarity==="papyte"?`
          <div style="margin-top:8px;background:${E}12;border-left:3px solid ${E};border-radius:0 8px 8px 0;padding:10px 12px">
            <div style="font-size:11px;font-weight:700;color:${E};margin-bottom:4px">✨ Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5;margin-bottom:6px">
              ${l.rarity==="pepite"?'⬆️ Bonus évolution : <b style="color:#D4A017">+30%</b>':'⬇️ Malus évolution : <b style="color:#909090">-30%</b>'}
            </div>
            <div style="font-size:10.5px;color:#888;line-height:1.5;font-style:italic;border-top:1px solid ${E}30;padding-top:6px">
              ${l.rarity==="pepite"?"Une carte Pépite est promise à un grand avenir : à force d'évoluer, elle peut un jour devenir une Légende.":"Une carte Papyte peut devenir une légende dans le temps ou prendre sa retraite..."}
            </div>
          </div>`:""}
        </div>

        <!-- Grille d'infos : Pays / Club / Postes -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px 16px;background:#f8f8f8;border-radius:10px;padding:10px 12px">
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">PAYS</div>
            <div style="font-weight:700;font-size:13px;color:#333">${m||"—"}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">CLUB</div>
            <div style="font-weight:700;font-size:13px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${((U=l.clubs)==null?void 0:U.encoded_name)||"—"}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">POSTE PRINCIPAL</div>
            <div style="font-weight:700;font-size:13px;color:${Jt[l.job]||"#333"}">${l.job}</div>
          </div>
          <div>
            <div style="font-size:10px;color:#999;letter-spacing:.5px">POSTE SECONDAIRE</div>
            <div style="font-weight:700;font-size:13px;color:${l.job2?Jt[l.job2]||"#333":"#bbb"}">${l.job2||"Aucun"}</div>
          </div>
        </div>

        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",l.note_g],["DEF",l.note_d],["MIL",l.note_m],["ATT",l.note_a]].map(([q,j])=>{const W=Jt[q],C=q==="GK"?"#fff":W,R=q===l.job||q===l.job2,ce=(Number(j)||0)+(R&&T>0?T:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${W};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${C};font-family:Arial Black,Arial;line-height:1">${ce}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${C}">${q}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:900;font-size:18px;color:#1A6B3C">×${b}</div>
        </div>
      </div>
    </div>
    ${A}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(de=document.getElementById("close-detail"))==null||de.addEventListener("click",s);let _=new Set;const O=l.rarity==="pepite"?1.3:l.rarity==="papyte"?.7:1;function J(){let q=0;return document.querySelectorAll(".expl-check:checked").forEach(j=>{if(j.dataset.id===t.id)return;const C=Number(j.dataset.evo)||0,R=Number(j.dataset.note)||0;q+=R+C}),Math.round(q*O)}const re=()=>{const q=_.size,j=document.getElementById("sell-action-panel");if(!j)return;j.style.display=q>0?"block":"none",document.getElementById("sell-selected-count").textContent=q;const W=document.getElementById("evolve-btn");if(W){const C=J();W.textContent=C>0?`⬆️ Évoluer (+${C})`:"⬆️ Évoluer"}};document.querySelectorAll(".expl-check").forEach(q=>{q.addEventListener("change",()=>{const j=q.dataset.id;q.checked?_.add(j):_.delete(j);const W=q.closest(".exemplaire-row");if(W){const C=W.querySelector(".expl-sel-overlay"),R=W.querySelector(".expl-sel-check");C&&(C.style.display=q.checked?"block":"none"),R&&(R.style.display=q.checked?"flex":"none"),W.style.transform=q.checked?"scale(1.05)":"scale(1)"}re()})}),document.querySelectorAll(".exemplaire-row").forEach(q=>{q.addEventListener("click",j=>{if(j.target.tagName==="INPUT")return;const W=q.querySelector(".expl-check");W&&!W.disabled&&(W.checked=!W.checked,W.dispatchEvent(new Event("change")))})}),(me=document.getElementById("evolve-btn"))==null||me.addEventListener("click",async()=>{if(b<=1)return;const q=[..._];if(!q.length)return;if(_.has(t.id)){const ge=document.createElement("div");ge.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ge.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(ge),ge.querySelector("#err-close").addEventListener("click",()=>ge.remove()),ge.addEventListener("click",ue=>{ue.target===ge&&ge.remove()});return}const j=q.filter(ge=>ge!==t.id);if(!j.length){n("Sélectionne des copies à sacrifier","warning");return}const W=j.reduce((ge,ue)=>{const _e=document.querySelector(`.expl-check[data-id="${ue}"]`),Ae=_e&&Number(_e.dataset.evo)||0,je=_e&&Number(_e.dataset.note)||0;return ge+je+Ae},0),C=Math.round(W*O),R=l.rarity==="pepite"?" (+30% pépite ✨)":l.rarity==="papyte"?" (-30% papyte)":"";if(!await new Promise(ge=>{const ue=document.createElement("div");ue.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ue.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${l.firstname} ${l.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${j.length}</strong> copie${j.length>1?"s":""} sacrifiée${j.length>1?"s":""}<br>
            ➕ Brut : <strong>+${W}</strong>${R?`<span style="font-size:11px;color:#888"> ${R}</span>`:""}<br>
            ⬆️ Bonus final : <strong style="color:#1A6B3C">+${C}</strong><br>
            📈 Évolution : <strong>${t.evolution_bonus||0}</strong> → <strong style="color:#1A6B3C">${(t.evolution_bonus||0)+C}</strong><br>
            📊 Note finale : <strong>${w}</strong> → <strong style="color:#1A6B3C">${w+C}</strong>
            ${h&&h>0?`<br>📊 Note 2 finale : <strong>${h}</strong> → <strong style="color:#1A6B3C">${h+C}</strong>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(ue),ue.querySelector("#sac-cancel").addEventListener("click",()=>{ue.remove(),ge(!1)}),ue.querySelector("#sac-ok").addEventListener("click",()=>{ue.remove(),ge(!0)}),ue.addEventListener("click",_e=>{_e.target===ue&&(ue.remove(),ge(!1))})}))return;if(j.length){await v.from("market_listings").delete().in("card_id",j),await v.from("deck_cards").delete().in("card_id",j),await v.from("transfer_history").delete().in("card_id",j),await v.from("decks").update({stadium_card_id:null}).in("stadium_card_id",j);const{error:ge}=await v.from("cards").delete().in("id",j);if(ge){n("Erreur suppression : "+ge.message,"error");return}}const ae=(t.evolution_bonus||0)+C,{error:he}=await v.from("cards").update({evolution_bonus:ae}).eq("id",t.id);if(he){n("Erreur évolution : "+he.message,"error");return}n(`⬆️ ${l.firstname} ${l.surname_real} : note ${w} → ${w+ae} (+${C}) !`,"success",4e3),s(),d("collection")});async function le(q){const{data:j}=await v.from("sell_price_configs").select("price_min, price_max").eq("rarity",l.rarity).lte("note_min",w).gte("note_max",w).order("note_max",{ascending:!0}).limit(1).maybeSingle();return j?q<j.price_min||q>j.price_max?{ok:!1,min:j.price_min,max:j.price_max}:{ok:!0}:{ok:!0}}(fe=document.getElementById("market-sell-btn"))==null||fe.addEventListener("click",async()=>{var ae;const q=[..._];if(!q.length){n("Sélectionne au moins un exemplaire","warning");return}const j=parseInt((ae=document.getElementById("sell-market-price"))==null?void 0:ae.value);if(!j||j<1){n("Prix invalide","error");return}const W=await le(j);if(!W.ok){n(`Prix hors grille : entre ${W.min.toLocaleString("fr")} et ${W.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:C}=await v.from("cards").update({is_for_sale:!0,sale_price:j}).in("id",q);if(C){n(C.message,"error");return}const R=q.map(he=>({seller_id:a.profile.id,card_id:he,price:j,status:"active"})),{error:ce}=await v.from("market_listings").insert(R);ce&&console.warn("[Market] insert listings:",ce.message),n(`${q.length} carte${q.length>1?"s":""} mise${q.length>1?"s":""} en vente à ${j.toLocaleString("fr")} cr. chacune !`,"success"),s(),d("collection")}),(M=document.getElementById("single-sell-btn"))==null||M.addEventListener("click",async()=>{var R;const q=parseInt((R=document.getElementById("single-sell-price"))==null?void 0:R.value);if(!q||q<1){n("Prix invalide","error");return}const j=await le(q);if(!j.ok){n(`Prix hors grille : entre ${j.min.toLocaleString("fr")} et ${j.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:W}=await v.from("cards").update({is_for_sale:!0,sale_price:q}).eq("id",t.id);if(W){n(W.message,"error");return}const{error:C}=await v.from("market_listings").insert({seller_id:a.profile.id,card_id:t.id,price:q,status:"active"});C&&console.warn("[Market] insert listing:",C.message),n(`Carte mise en vente à ${q.toLocaleString("fr")} cr. !`,"success"),s(),d("collection")}),(Y=document.getElementById("cancel-sell-btn"))==null||Y.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),s(),d("collection")})}function vo(t,e=""){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${t}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(e||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const a=o.querySelector("#pm-input");a.focus(),a.select();const n=r=>{o.remove(),i(r)};o.querySelector("#pm-ok").addEventListener("click",()=>n(a.value.trim()||null)),o.querySelector("#pm-cancel").addEventListener("click",()=>n(null)),o.querySelector("#pm-cancel2").addEventListener("click",()=>n(null)),o.addEventListener("click",r=>{r.target===o&&n(null)}),a.addEventListener("keydown",r=>{r.key==="Enter"&&n(a.value.trim()||null),r.key==="Escape"&&n(null)})})}function Jn(t,e=!1){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${t}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${e?"":"btn-primary"}" id="cm-ok" style="${e?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const a=n=>{o.remove(),i(n)};o.querySelector("#cm-ok").addEventListener("click",()=>a(!0)),o.querySelector("#cm-cancel").addEventListener("click",()=>a(!1)),o.addEventListener("click",n=>{n.target===o&&a(!1)})})}const bi={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Di(t,e){const{state:i,navigate:o,toast:a}=e;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await v.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});t.innerHTML=`
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(n==null?void 0:n.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(n==null?void 0:n.length)>0?n.map(r=>`
          <div class="card-panel" data-open-deck="${r.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="font-weight:700;font-size:15px;flex:1">${r.name}</div>
            <div style="display:flex;gap:6px" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${r.id}" data-name="${r.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${r.id}" data-name="${r.name}">🗑️</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const r=await vo("Nom du deck",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!r)return;const{data:s,error:d}=await v.from("decks").insert({owner_id:i.profile.id,name:r}).select().single();if(d){a(d.message,"error");return}a("Deck créé !","success"),wo(s.id,t,e)}),t.querySelectorAll("[data-open-deck]").forEach(r=>{r.addEventListener("click",()=>wo(r.dataset.openDeck,t,e))}),t.querySelectorAll("[data-rename]").forEach(r=>{r.addEventListener("click",async()=>{const s=await vo("Nouveau nom",r.dataset.name);if(!s||s===r.dataset.name)return;const{error:d}=await v.from("decks").update({name:s}).eq("id",r.dataset.rename);if(d){a(d.message,"error");return}a("Deck renommé !","success"),Di(t,e)})}),t.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{if(!await Jn(`Supprimer le deck "${r.dataset.name}" ? Cette action est irréversible.`,!0))return;await v.from("deck_cards").delete().eq("deck_id",r.dataset.delete);const{error:s}=await v.from("decks").delete().eq("id",r.dataset.delete);if(s){a(s.message,"error");return}a("Deck supprimé.","success"),Di(t,e)})})}async function wo(t,e,i){const{state:o,toast:a}=i;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await v.from("decks").select("*").eq("id",t).single(),{data:r}=await v.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:s}=await v.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id).eq("card_type","stadium"),d=(r||[]).filter(y=>y.card_type==="player"&&y.player),c=(r||[]).filter(y=>y.card_type==="formation"),l=(s||[]).filter(y=>y.card_type==="stadium"),f=[...new Set(l.map(y=>y.stadium_id).filter(Boolean))];let b={};if(l.forEach(y=>{y.stadium_def&&y.stadium_id&&(b[y.stadium_id]=y.stadium_def)}),f.length&&Object.keys(b).length<f.length){const{data:y}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",f);(y||[]).forEach(w=>{b[w.id]=w})}const x=c.map(y=>y.formation).filter(Boolean),{data:g}=await v.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",t);let p=n.formation||"4-4-2";x.length>0&&!x.includes(p)&&(p=x[0]);const u={deckId:t,name:n.name,formation:p,formationCardId:n.formation_card_id,stadiumCardId:n.stadium_card_id||null,slots:{},subs:[],playerCards:d,formationCards:c,stadiumCards:l,stadDefMap:b,availableFormations:x};(g||[]).forEach(y=>{y.is_starter?u.slots[y.position]=y.card_id:u.subs.includes(y.card_id)||u.subs.push(y.card_id)}),_t(e,u,i)}function _t(t,e,i){var g,p;const{navigate:o}=i;bi[e.formation];const a=_o(e.formation),n=a.filter(u=>e.slots[u]).length,r=e.availableFormations.length>0?e.availableFormations:Object.keys(bi),s=(g=e.stadiumCards)==null?void 0:g.find(u=>u.id===e.stadiumCardId),d=s&&((p=e.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=e.subs.map(u=>e.playerCards.find(y=>y.id===u)).filter(Boolean);c.length!==e.subs.length&&(e.subs=c.map(u=>u.id)),[...Object.values(e.slots),...e.subs],t.innerHTML=`
  <style>.no-scrollbar::-webkit-scrollbar{display:none}</style>
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:8px;padding:6px 12px;min-height:0">
      <button class="btn-icon" id="builder-back" style="font-size:16px">←</button>
      <div style="flex:1">
        <h2 style="font-size:14px;margin:0">${e.name}</h2>
        <p style="font-size:11px;margin:0">${n}/11 · ${c.length}/5 rempl.</p>
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
            ${c.map(u=>{const y={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:24px">
                ${Se({...y,_evolution_bonus:y._evolution_bonus||0},{width:90,showStad:!0,stadDef:d})}
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
              ${gi(e.formation,wt[e.formation],{width:100})}
            </div>
          </div>
          <!-- Stade -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">🏟️ Stade</div>
            <div id="add-stad-btn-pc" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${s?(()=>{var w;const u=e.stadDefMap[s.stadium_id],y=((w=u==null?void 0:u.club)==null?void 0:w.logo_url)||(u==null?void 0:u.image_url)||(u!=null&&u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ot((u==null?void 0:u.name)||"Stade",y,"+10 ⭐",{width:100})})():`<div style="width:100px;height:171px;border:2px dashed rgba(79,195,247,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
                <span style="font-size:36px">🏟️</span>
                <span style="font-size:10px;color:rgba(255,255,255,0.4)">Ajouter</span>
              </div>`}
            </div>
          </div>
          <!-- Enregistrer (PC uniquement — plus haut, évite le scroll derrière le grand terrain) -->
          <button class="btn btn-primary" id="save-deck-pc" style="width:100%;margin-top:8px" ${n<11?"disabled":""}>
            ${n<11?`Placez encore ${11-n}`:"💾 Enregistrer"}
          </button>
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
              ${c.map(u=>{const y={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:20px">
                  ${Se({...y,_evolution_bonus:y._evolution_bonus||0},{width:44,showStad:!0,stadDef:d})}
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
              ${s?(()=>{var w;const u=e.stadDefMap[s.stadium_id],y=((w=u==null?void 0:u.club)==null?void 0:w.logo_url)||(u==null?void 0:u.image_url)||(u!=null&&u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ot((u==null?void 0:u.name)||"Stade",y,"+10⭐",{width:44})})():`<div style="width:44px;height:57px;border:2px dashed rgba(79,195,247,0.5);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
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
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${n<11?"disabled":""}>
        ${n<11?`Placez encore ${11-n} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`;const l=window.innerWidth>=900,f=t.querySelector(".deck-pc-layout"),b=t.querySelector(".deck-mobile-layout");f&&(f.style.display=l?"block":"none"),b&&(b.style.display=l?"none":"block"),t.querySelectorAll("#save-deck").forEach(u=>{u.closest(".page-body").style.display=l?"none":"block"}),Qn(t,e,a,i),t.querySelectorAll("#builder-back").forEach(u=>u.addEventListener("click",()=>o("decks")));const x=()=>{const{openModal:u,closeModal:y}=i,w=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${r.map(h=>`<div data-forma="${h}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${h===e.formation?"#1A6B3C":"#f0f0f0"};color:${h===e.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${h===e.formation?"#1A6B3C":"#ddd"}">${h}</div>`).join("")}
    </div>`;u("⚽ Choisir une formation",w),document.querySelectorAll("#modal-body [data-forma]").forEach(h=>{h.addEventListener("click",()=>{e.formation=h.dataset.forma;const E=_o(e.formation),m={};E.forEach(T=>{e.slots[T]&&(m[T]=e.slots[T])}),e.slots=m,y(),_t(t,e,i)})})};t.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(u=>u.addEventListener("click",x)),t.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(u=>u.addEventListener("click",()=>Zn(e,t,i))),t.querySelectorAll("#save-deck, #save-deck-pc").forEach(u=>u.addEventListener("click",()=>ir(e,i))),t.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{e.subs=e.subs.filter(y=>y!==u.dataset.removeSub),_t(t,e,i)})}),t.querySelectorAll("#add-sub-btn").forEach(u=>u.addEventListener("click",()=>tr(e,t,i)))}function Qn(t,e,i,o){var h,E,m;const a=window.innerWidth>=900,n=t.querySelector(a?"#deck-field-pc":"#deck-field-mobile");if(!n)return;const r=(h=e.stadiumCards)==null?void 0:h.find(T=>T.id===e.stadiumCardId),s=r&&((E=e.stadDefMap)==null?void 0:E[r.stadium_id])||null,d=wt[e.formation]||{},c=Ki(e.formation)||[],l={};for(const T of i){const $=e.slots[T],S=$?e.playerCards.find(F=>F.id===$):null;S!=null&&S.player?l[T]={...S.player,_evolution_bonus:S.evolution_bonus||0,face:S.player.face||null}:l[T]=null}const f=window.innerWidth>=900,b=f?window.innerWidth-280:window.innerWidth-20,x=f?Math.min(b,860):b,g=Math.round(f?x*.82:x*.85),p=f?84:44;let u="";for(const[T,$]of c){const S=d[T],F=d[$];if(!S||!F)continue;const H=S.x*x,K=Math.round(.03*g+S.y*.85*g),X=F.x*x,A=Math.round(.03*g+F.y*.85*g),_=l[T],O=l[$],J=Kt(_,O);J==="#ff3333"||J==="#cc2222"?u+=`<line x1="${H.toFixed(1)}" y1="${K.toFixed(1)}" x2="${X.toFixed(1)}" y2="${A.toFixed(1)}" stroke="${J}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(u+=`<line x1="${H.toFixed(1)}" y1="${K.toFixed(1)}" x2="${X.toFixed(1)}" y2="${A.toFixed(1)}" stroke="${J}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,u+=`<line x1="${H.toFixed(1)}" y1="${K.toFixed(1)}" x2="${X.toFixed(1)}" y2="${A.toFixed(1)}" stroke="${J}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let y="";const w=Math.round(p*657/507);for(const T of i){const $=d[T];if(!$)continue;const S=l[T],F=$.x*x;$.y*g;const H=Math.round(.03*g+$.y*(.85*g)),K=Math.round(F-p/2),X=Math.round(H-w/2);if(S){const A=T.replace(/\d+/,""),_=s&&(s.club_id&&String(S.club_id)===String(s.club_id)||s.country_code&&S.country_code===s.country_code),O=Se({...S,_evolution_bonus:S._evolution_bonus||0},{width:p,showStad:!0,stadDef:s,role:A});_&&((m=s.club)!=null&&m.logo_url||s.image_url),y+=`<div style="position:absolute;left:${K}px;top:${X}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${T}">
        <div style="position:relative">${O}</div>
      </div>`}else{const A=T.replace(/\d+/,"");y+=`<div style="position:absolute;left:${K}px;top:${X}px;width:${p}px;height:${w}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${T}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${A}</span>
      </div>`}}n.innerHTML=`
    <div style="position:relative;width:${x}px;height:${g}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${x} ${g}">${u}</svg>
      ${y}
    </div>`,n.querySelectorAll(".deck-slot-hit").forEach(T=>{T.addEventListener("click",()=>er(T.dataset.pos,e,t,o))})}function Zn(t,e,i){var r;const{openModal:o,closeModal:a}=i,n=t.stadiumCards||[];o("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:90px;text-align:center">
        <div style="width:85px;height:112px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${t.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:26px">🚫</span>
          <span style="font-size:10px;color:#666">Aucun</span>
        </div>
      </div>
      ${n.map(s=>{var b;const d=t.stadDefMap[s.stadium_id],c=((b=d==null?void 0:d.club)==null?void 0:b.logo_url)||(d==null?void 0:d.image_url)||(d!=null&&d.country_code?`https://flagsapi.com/${d.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),l=t.stadiumCardId===s.id,f=Ot((d==null?void 0:d.name)||"Stade",c,"+10⭐",{width:90});return`<div class="stad-choice" data-stad-id="${s.id}" style="cursor:pointer;position:relative;border-radius:8px;${l?"box-shadow:0 0 0 3px #4fc3f7":""}">
          ${f}
        </div>`}).join("")}
    </div>`),(r=document.getElementById("stad-none"))==null||r.addEventListener("click",()=>{t.stadiumCardId=null,a(),_t(e,t,i)}),document.querySelectorAll(".stad-choice").forEach(s=>{s.addEventListener("click",()=>{t.stadiumCardId=s.dataset.stadId,a(),_t(e,t,i)})})}function er(t,e,i,o){var g,p,u,y,w;const{openModal:a,closeModal:n}=o,r=t.replace(/\d+/,""),s=(g=e.stadiumCards)==null?void 0:g.find(h=>h.id===e.stadiumCardId),d=s&&((p=e.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=e.slots[t],l=c?e.playerCards.find(h=>h.id===c):null;(u=l==null?void 0:l.player)==null||u.id;const f=new Set;Object.entries(e.slots).forEach(([h,E])=>{var T;if(h===t||!E)return;const m=e.playerCards.find($=>$.id===E);(T=m==null?void 0:m.player)!=null&&T.id&&f.add(m.player.id)}),e.subs.forEach(h=>{var m;const E=e.playerCards.find(T=>T.id===h);(m=E==null?void 0:E.player)!=null&&m.id&&f.add(E.player.id)});const b=new Set,x=e.playerCards.filter(h=>{const E=h.player;return!(E.job===r||E.job2===r)||f.has(E.id)||b.has(E.id)?!1:(b.add(E.id),!0)});x.sort((h,E)=>{const m=h.evolution_bonus||0,T=E.evolution_bonus||0,$=(r==="GK"?h.player.note_g:r==="DEF"?h.player.note_d:r==="MIL"?h.player.note_m:h.player.note_a)+(r===h.player.job||r===h.player.job2?m:0);return(r==="GK"?E.player.note_g:r==="DEF"?E.player.note_d:r==="MIL"?E.player.note_m:E.player.note_a)+(r===E.player.job||r===E.player.job2?T:0)-$}),a(`Choisir ${r} — ${t}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${e.slots[t]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${x.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+x.map(h=>{const E={...h.player,_evolution_bonus:h.evolution_bonus||0};return`<div class="player-option" data-card-id="${h.id}" style="cursor:pointer">
          ${Se(E,{width:100,showStad:!0,stadDef:d,role:r})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(y=document.getElementById("close-selector"))==null||y.addEventListener("click",n),(w=document.getElementById("remove-player"))==null||w.addEventListener("click",()=>{delete e.slots[t],n(),_t(i,e,o)}),document.querySelectorAll(".player-option").forEach(h=>{h.addEventListener("click",()=>{e.slots[t]=h.dataset.cardId,n(),_t(i,e,o)})})}function tr(t,e,i){var l,f,b;const{openModal:o,closeModal:a}=i,n=(l=t.stadiumCards)==null?void 0:l.find(x=>x.id===t.stadiumCardId),r=n&&((f=t.stadDefMap)==null?void 0:f[n.stadium_id])||null,s=new Set;Object.keys(t.slots).forEach(x=>{var u;const g=t.slots[x];if(!g)return;const p=t.playerCards.find(y=>y.id===g);(u=p==null?void 0:p.player)!=null&&u.id&&s.add(p.player.id)}),t.subs.forEach(x=>{var p;const g=t.playerCards.find(u=>u.id===x);(p=g==null?void 0:g.player)!=null&&p.id&&s.add(g.player.id)});const d=new Set,c=t.playerCards.filter(x=>{var g,p,u;return s.has((g=x.player)==null?void 0:g.id)||d.has((p=x.player)==null?void 0:p.id)?!1:(d.add((u=x.player)==null?void 0:u.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+c.map(x=>{const g={...x.player,_evolution_bonus:x.evolution_bonus||0};return`<div class="player-option" data-card-id="${x.id}" style="cursor:pointer">
          ${Se(g,{width:100,showStad:!0,stadDef:r})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(b=document.getElementById("close-sub-selector"))==null||b.addEventListener("click",a),document.querySelectorAll(".player-option").forEach(x=>{x.addEventListener("click",()=>{t.subs.push(x.dataset.cardId),a(),_t(e,t,i)})})}async function ir(t,e){const{state:i,toast:o,navigate:a}=e,n=t.formationCards.find(d=>d.formation===t.formation),r=(n==null?void 0:n.id)||t.formationCardId;await v.from("decks").update({formation:t.formation,formation_card_id:r||null,stadium_card_id:t.stadiumCardId||null}).eq("id",t.deckId),await v.from("deck_cards").delete().eq("deck_id",t.deckId);const s=[];if(Object.entries(t.slots).forEach(([d,c],l)=>{s.push({deck_id:t.deckId,card_id:c,position:d,is_starter:!0,slot_order:l})}),t.subs.forEach((d,c)=>{s.push({deck_id:t.deckId,card_id:d,position:`SUB${c+1}`,is_starter:!1,slot_order:100+c})}),s.length>0){const{error:d}=await v.from("deck_cards").insert(s);if(d){o(d.message,"error");return}}o("Deck enregistré ✅","success"),a("decks")}function _o(t){const e=bi[t]||bi["4-4-2"],i=["GK1"];for(let o=1;o<=e.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=e.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=e.ATT;o++)i.push(`ATT${o}`);return i}async function Vo(t=null){const e=new Date().toISOString().slice(0,10),{data:i}=await v.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const o=i.filter(r=>!(r.available_from&&e<r.available_from||r.available_until&&e>r.available_until));if(!o.length)return[];let a=o;if(t){const r=o.filter(s=>s.max_per_user!=null);if(r.length){const{data:s}=await v.from("booster_claims").select("booster_id").eq("user_id",t).in("booster_id",r.map(c=>c.id)),d={};(s||[]).forEach(c=>{d[c.booster_id]=(d[c.booster_id]||0)+1}),a=o.filter(c=>c.max_per_user==null?!0:(d[c.id]||0)<c.max_per_user)}}if(!a.length)return[];const{data:n}=await v.from("booster_drop_rates").select("*").in("booster_id",a.map(r=>r.id)).order("sort_order");return a.map(r=>({...r,rates:(n||[]).filter(s=>s.booster_id===r.id)}))}async function or(t,e){const{data:i}=await v.from("booster_configs").select("max_per_user").eq("id",e).single();i!=null&&i.max_per_user&&await v.from("booster_claims").insert({user_id:t,booster_id:e})}function nr(t){if(!(t!=null&&t.length))return null;const e=t.reduce((o,a)=>o+Number(a.percentage),0);let i=Math.random()*e;for(const o of t)if(i-=Number(o.percentage),i<=0)return o;return t[t.length-1]}const Yo=()=>Object.keys(wt),rr=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Fi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ar(t){const e=t.player;if(!e)return"";const i=t.evolution_bonus||0;return Se({...e,_evolution_bonus:i},{width:140})}function Wo(t){var a;const e={};(t.rates||[]).forEach(n=>{e[n.card_type]=(e[n.card_type]||0)+Number(n.percentage||0)});const i=((a=Object.entries(e).sort((n,r)=>r[1]-n[1])[0])==null?void 0:a[0])||"player",o=t.image_url||"booster-players.png";return{id:t.id,img:"/icons/"+o,name:t.name,sub:`${t.card_count} carte(s)`,cost:t.price_type==="credits"&&t.price_credits||0,costLabel:t.price_type==="credits"?`${(t.price_credits||0).toLocaleString("fr")} crédits`:t.price_type==="pub"?"1 pub":"Gratuit",cardCount:t.card_count||5,type:i,isPub:t.price_type==="pub",rates:t.rates||[],allow_duplicates:t.allow_duplicates!==!1,_boosterId:t.id,_raw:t}}async function sr(t,{state:e,navigate:i,toast:o}){var f,b,x;const a=((f=e.profile)==null?void 0:f.credits)||0;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let n=[];try{n=(await Vo((b=e.user)==null?void 0:b.id)).map(Wo)}catch(g){console.warn("Erreur chargement boosters DB, fallback hardcodé",g)}n.length||(n=rr.map(g=>({...g,rates:[],isPub:g.id==="players_pub"})));const r=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.profile.id).then(g=>g.data||[]),s=new Set(r.filter(g=>g.card_type==="stadium").map(g=>g.stadium_id)),d=new Set(r.filter(g=>g.card_type==="formation").map(g=>g.formation)),c=new Set(r.filter(g=>g.card_type==="game_changer").map(g=>g.gc_type)),l={};for(const g of n){if(g.allow_duplicates!==!1||!((x=g.rates)!=null&&x.length))continue;const p=[...new Set((g.rates||[]).map(y=>y.card_type))];let u=!1;for(const y of p)if(y==="stadium"){const{data:w}=await v.from("stadium_definitions").select("id");if((w||[]).some(h=>!s.has(h.id))){u=!0;break}}else if(y==="game_changer"){const{data:w}=await v.from("gc_definitions").select("name").eq("is_active",!0);if((w||[]).some(h=>!c.has(h.name))){u=!0;break}}else if(y==="formation"){const{FORMATION_LINKS:w}=await Co(async()=>{const{FORMATION_LINKS:h}=await import("./special-cards-lEGt-tGs.js").then(E=>E.y);return{FORMATION_LINKS:h}},__vite__mapDeps([0,1]));if(Object.keys(w).some(h=>!d.has(h))){u=!0;break}}else{u=!0;break}u||(l[g.id]=!0)}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${a.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${n.map(g=>{const p=g.cost===0||a>=g.cost,u=l[g.id]===!0;return`<div class="booster-card ${!p||u?"disabled":""}" data-booster="${g.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${g.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${g.img}" alt="${g.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${g.name}</div>
            <div class="desc">${g.sub}</div>
            <div class="cost">${g.costLabel}</div>
            ${p?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
            ${u?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--tile-fg-dim);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,t.querySelectorAll(".booster-card:not(.disabled)").forEach(g=>{g.addEventListener("click",async()=>{const p=n.find(u=>u.id===g.dataset.booster);if(p){g.style.opacity="0.5",g.style.pointerEvents="none";try{await lr(p,{state:e,toast:o,navigate:i,container:t})}catch(u){o(u.message,"error"),g.style.opacity="",g.style.pointerEvents=""}}})}),t.querySelectorAll(".booster-info-btn").forEach(g=>{g.addEventListener("click",p=>{p.stopPropagation();const u=n.find(y=>y.id===g.dataset.boosterId);ur(u)})})}async function lr(t,{state:e,toast:i,navigate:o,container:a}){var f,b;if(t.cost>0&&e.profile.credits<t.cost){i("Crédits insuffisants","error");return}t.isPub&&await mr();const{data:n}=await v.from("cards").select("card_type, player_id, formation").eq("owner_id",e.profile.id),r=new Set((n||[]).filter(x=>x.card_type==="player").map(x=>x.player_id)),s=new Set((n||[]).filter(x=>x.card_type==="formation").map(x=>x.formation));let d=[],c=null;try{if((f=t.rates)!=null&&f.length)d=await Pi(e.profile,t);else{const x=t.type||"player";x==="player"?d=await Xo(e.profile,t.cardCount,t.cost):x==="game_changer"?d=await Jo(e.profile,t.cardCount,t.cost):x==="formation"?d=await Qo(e.profile,t.cost):d=await Pi(e.profile,t)}}catch(x){c=x.message||String(x),console.error("[Booster] Erreur:",x)}if(d!=null&&d.length&&t._boosterId&&await or(e.user.id,t._boosterId),!(d!=null&&d.length)){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",x.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${c||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(x),(b=x.querySelector("#anim-close-err"))==null||b.addEventListener("click",()=>x.remove());return}d.forEach(x=>{x.card_type==="player"&&x.player?x.isDuplicate=r.has(x.player.id):x.card_type==="formation"&&(x.isDuplicate=s.has(x.formation))});const{data:l}=await v.from("users").select("*").eq("id",e.profile.id).single();l&&(e.profile=l),Zo(d,t,o)}function dr(){const t=Math.random()*100;return t<.5?"legende":t<2?"special":t<10?"normal_high":"normal_low"}function gt(t){return Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function cr(t,e){let i;switch(e){case"legende":i=t.filter(o=>o.rarity==="legende"),i.length||(i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=t.filter(o=>gt(o)>=6));break;case"special":i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=t.filter(o=>gt(o)>=6));break;case"normal_high":i=t.filter(o=>o.rarity==="normal"&&gt(o)>=6),i.length||(i=t.filter(o=>gt(o)>=6));break;default:i=t.filter(o=>o.rarity==="normal"&&gt(o)>=1&&gt(o)<=5),i.length||(i=t.filter(o=>o.rarity==="normal"));break}return i.length||(i=t),i[Math.floor(Math.random()*i.length)]}async function Pi(t,e){if(e.cost>0){const{error:b}=await v.from("users").update({credits:t.credits-e.cost}).eq("id",t.id);if(b)throw b;t.credits-=e.cost,$i(t.credits)}const i=e.allow_duplicates!==!1;let o=[];const{data:a,error:n}=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.id);if(n){const{data:b}=await v.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",t.id);o=b||[]}else o=a||[];const r=new Set(o.filter(b=>b.card_type==="player").map(b=>b.player_id)),s=new Set(o.filter(b=>b.card_type==="formation").map(b=>b.formation)),d=new Set(o.filter(b=>b.card_type==="game_changer").map(b=>b.gc_type)),c=new Set(o.filter(b=>b.card_type==="stadium").map(b=>b.stadium_id).filter(Boolean)),l=new Set,f=[];for(let b=0;b<(e.cardCount||5);b++){const x=nr(e.rates);if(x){if(x.card_type==="player"){const g=$=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[$]||$,p=x.rarity?g(x.rarity):null;let u=v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(u=u.eq("rarity",p));const{data:y}=await u;let w=y||[];if((x.note_min||x.note_max)&&(w=w.filter($=>{const S=Math.max(Number($.note_g)||0,Number($.note_d)||0,Number($.note_m)||0,Number($.note_a)||0);return(!x.note_min||S>=x.note_min)&&(!x.note_max||S<=x.note_max)})),w.length||(x.note_min||x.note_max?(w=y||[],console.warn("[Booster] Aucun joueur avec note",x.note_min,"-",x.note_max,"— fallback rareté uniquement")):w=y||[]),!w.length)continue;let h=w.filter($=>!l.has($.id));if(i)h.length||(h=w);else if(h=h.filter($=>!r.has($.id)),!h.length)continue;const E=h[Math.floor(Math.random()*h.length)];l.add(E.id);const m=r.has(E.id),{data:T}=await v.from("cards").insert({owner_id:t.id,player_id:E.id,card_type:"player"}).select().single();T&&(f.push({...T,player:E,isDuplicate:m}),v.rpc("record_transfer",{p_card_id:T.id,p_player_id:E.id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(x.card_type==="game_changer"){const{data:g}=await v.from("gc_definitions").select("id,name,color,effect,image_url,gc_type").eq("is_active",!0).eq("gc_type","game_changer"),p=g!=null&&g.length?g:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],u=i?p:p.filter(E=>!d.has(E.name));if(!i&&!u.length)continue;const y=u[Math.floor(Math.random()*u.length)],w=y.name,{data:h}=await v.from("cards").insert({owner_id:t.id,card_type:"game_changer",gc_type:w,gc_definition_id:y.id||null}).select().single();h&&f.push({...h,_gcDef:y})}else if(x.card_type==="formation"){const g=Yo(),p=i?g:g.filter(h=>!s.has(h));if(!i&&!p.length)continue;const u=p[Math.floor(Math.random()*p.length)],y=s.has(u),{data:w}=await v.from("cards").insert({owner_id:t.id,card_type:"formation",formation:u}).select();w!=null&&w[0]&&f.push({...w[0],isDuplicate:y})}else if(x.card_type==="stadium"){const{data:g,error:p}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(g!=null&&g.length)){console.warn("[Booster] Aucun stade en DB");continue}const u=i?g:g.filter(E=>!c.has(E.id));if(!i&&!u.length)continue;const y=u[Math.floor(Math.random()*u.length)],{data:w,error:h}=await v.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:y.id}).select("id,card_type,stadium_id").single();if(h){console.error("[Booster] insert stadium card:",h.message);continue}w&&f.push({...w,rarity:"normal",_stadiumDef:y})}}}return f}async function Xo(t,e,i){if(i>0){const{error:c}=await v.from("users").update({credits:t.credits-i}).eq("id",t.id);if(c)throw c;t.credits-=i,$i(t.credits)}const{data:o}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const a=o.filter(c=>c.job==="GK"),n=o.filter(c=>c.job!=="GK"),r=!t.first_booster_opened&&a.length>0,s=[];for(let c=0;c<e;c++){const l=c===0&&r?a:c===0?n:o,f=dr(),b=cr(l,f);b&&s.push(b)}r&&await v.from("users").update({first_booster_opened:!0}).eq("id",t.id);const{data:d}=await v.from("cards").insert(s.map(c=>({owner_id:t.id,player_id:c.id,card_type:"player"}))).select();return(d||[]).forEach((c,l)=>{v.rpc("record_transfer",{p_card_id:c.id,p_player_id:s[l].id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((c,l)=>({...d[l],player:c}))}async function Jo(t,e,i){const{error:o}=await v.from("users").update({credits:t.credits-i}).eq("id",t.id);if(o)throw o;t.credits-=i,$i(t.credits);const{data:a}=await v.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),n=a!=null&&a.length?a:Object.keys(Fi).map(f=>({name:f,gc_type:"game_changer"})),r=Array.from({length:e},()=>n[Math.floor(Math.random()*n.length)]),s=r.map(f=>({owner_id:t.id,card_type:"game_changer",gc_type:f.name,gc_definition_id:f.id||null})),{data:d,error:c}=await v.from("cards").insert(s).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(d||[]).map((f,b)=>({...f,_gcDef:r[b]||null}))}async function Qo(t,e){const{error:i}=await v.from("users").update({credits:t.credits-e}).eq("id",t.id);if(i)throw i;t.credits-=e,$i(t.credits);const{data:o}=await v.from("cards").select("formation").eq("owner_id",t.id).eq("card_type","formation"),a=new Set((o||[]).map(l=>l.formation)),n=Yo(),r=n[Math.floor(Math.random()*n.length)],s=a.has(r),{data:d,error:c}=await v.from("cards").insert({owner_id:t.id,card_type:"formation",formation:r}).select();return c&&console.error("[Booster Formation] Erreur insert:",c.message,c),(d||[]).map(l=>({...l,isDuplicate:s}))}function Zo(t,e,i,o=null){var X,A;if(!t||t.length===0){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",_.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(_),(X=_.querySelector("#anim-close-err"))==null||X.addEventListener("click",()=>_.remove());return}t=[...t].sort((_,O)=>{const J=_.player?gt(_.player):-1;return(O.player?gt(O.player):-1)-J});const a=document.createElement("div");a.id="booster-anim-overlay",a.innerHTML=`
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
  `,document.body.appendChild(a);let n=!1;const r=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let d=!1;const c=_=>_.touches&&_.touches[0]?_.touches[0].clientX:_.clientX;function l(_){n||(d=!0,s.style.opacity="1",f(_))}function f(_){if(!d||n)return;const O=r.getBoundingClientRect(),J=c(_)-O.left,re=Math.max(0,Math.min(1,J/O.width));s.style.width=re*O.width+"px",re>=.82&&x()}function b(){n||(d=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{n||(s.style.transition="")},220))}function x(){var O;if(n)return;n=!0,d=!1,s.style.width="100%",s.style.opacity="1",(O=document.getElementById("cut-flash"))==null||O.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const _=document.getElementById("cut-hint");_&&(_.style.opacity="0"),r.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",y(0)},620)}r.addEventListener("pointerdown",l),window.addEventListener("pointermove",f),window.addEventListener("pointerup",b),r.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",b);let g=0,p=!1;const u=new Set;function y(_){g=_,document.getElementById("reveal-phase").style.display="flex",w(),h(_,0),S()}function w(){const _=document.getElementById("card-dots");_&&(_.innerHTML=t.map((O,J)=>`<div class="card-dot" data-i="${J}" style="width:8px;height:8px;border-radius:50%;background:${J===g?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),_.querySelectorAll(".card-dot").forEach(O=>O.addEventListener("click",()=>m(parseInt(O.dataset.i)))))}function h(_,O){var M,Y;const J=t[_],re=document.getElementById("card-counter"),le=document.getElementById("card-track");re&&(re.textContent=`Carte ${_+1} / ${t.length}`);const B=document.getElementById("reveal-btns");B&&(B.style.display=_===t.length-1?"flex":"none");const U=J.card_type==="player"&&((M=J.player)==null?void 0:M.rarity)==="legende",de=!u.has(_);u.add(_);let me=0;if(J.card_type==="player"&&J.player){const q=J.player,j=q.job||"ATT";me=(Number(j==="GK"?q.note_g:j==="DEF"?q.note_d:j==="MIL"?q.note_m:q.note_a)||0)+(J.evolution_bonus||0)}const fe=q=>{le.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${U?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${pr(J)}</div>
          ${J.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const j=document.getElementById("current-card-wrap");O!==0?(j.style.transition="none",j.style.transform=`translateX(${O>0?100:-100}%)`,requestAnimationFrame(()=>{j.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",j.style.transform="translateX(0)"})):j.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),q||U?H():K(),w()};de&&(((Y=J.player)==null?void 0:Y.rarity)==="legende"||me>=18)&&J.card_type==="player"&&J.player?E(J,()=>fe(!0)):fe(!1)}function E(_,O){var ge;p=!0;const J=_.player,re=`https://flagsapi.com/${J.country_code}/flat/64.png`,le=(ge=J.clubs)==null?void 0:ge.logo_url,B=Ct(J),U=J.job||"ATT",de=Number(U==="GK"?J.note_g:U==="DEF"?J.note_d:U==="MIL"?J.note_m:J.note_a)||0,me=_.evolution_bonus||0,fe=de+me,M=fe>=18&&fe<=20,Y=fe>=18,q=document.getElementById("walkout-overlay"),j=document.getElementById("walkout-stage");if(!q||!j){p=!1,O();return}let W=null;M&&(W=Xi("/sounds/Legendary.mp3",.8)),q.style.display="flex";const C=()=>{const ue=j.firstElementChild;ue&&(ue.classList.remove("wo-in"),ue.classList.add("wo-out"))},R=1800,ce=400;j.innerHTML=`<img class="wo-in" src="${re}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(C,R),setTimeout(()=>{var ue;j.innerHTML=le?`<img class="wo-in" src="${le}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((ue=J.clubs)==null?void 0:ue.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},R+ce),setTimeout(C,R*2+ce),setTimeout(()=>{j.innerHTML=B?`<img class="wo-in" src="${B}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(R+ce)*2),setTimeout(C,(R+ce)*2+R);const he=Y?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[U]||"#fff";setTimeout(()=>{j.innerHTML=`<div class="wo-in" style="
        font-size:${Y?"120px":"90px"};font-weight:900;color:${he};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${he}, 0 0 60px ${he};
        ${Y?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${fe}
      </div>`,Y&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(R+ce)*3),setTimeout(C,(R+ce)*3+R),setTimeout(()=>{q.style.display="none",j.innerHTML="",p=!1,W&&!M&&W.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),O()},(R+ce)*4)}function m(_){if(p||_<0||_>=t.length||_===g)return;const O=_>g?1:-1;g=_,h(_,O)}function T(){m(g+1)}function $(){m(g-1)}function S(){const _=document.getElementById("card-viewport");if(!_||_._swipeBound)return;_._swipeBound=!0;let O=0,J=0,re=0,le=!1;const B=M=>M.touches?M.touches[0].clientX:M.clientX,U=M=>M.touches?M.touches[0].clientY:M.clientY,de=M=>{le=!0,O=B(M),J=U(M),re=0},me=M=>{if(!le)return;re=B(M)-O;const Y=U(M)-J;if(Math.abs(re)<Math.abs(Y))return;const q=document.getElementById("current-card-wrap");q&&(q.style.transition="none",q.style.transform=`translateX(${re*.6}px) rotate(${re*.02}deg)`)},fe=()=>{if(!le)return;le=!1;const M=document.getElementById("current-card-wrap"),Y=55;re<=-Y&&g<t.length-1?T():re>=Y&&g>0?$():M&&(M.style.transition="transform .2s ease",M.style.transform="translateX(0)")};_.addEventListener("pointerdown",de),_.addEventListener("pointermove",me),_.addEventListener("pointerup",fe),_.addEventListener("pointercancel",fe),_.addEventListener("touchstart",de,{passive:!0}),_.addEventListener("touchmove",me,{passive:!0}),_.addEventListener("touchend",fe),_.addEventListener("click",M=>{if(Math.abs(re)>8)return;const Y=_.getBoundingClientRect();M.clientX-Y.left>Y.width/2?T():$()})}let F=null;function H(){const _=document.getElementById("fireworks-canvas");if(!_)return;_.width=window.innerWidth,_.height=window.innerHeight;const O=_.getContext("2d"),J=[];function re(){const B=Math.random()*_.width,U=Math.random()*_.height*.6,de=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],me=de[Math.floor(Math.random()*de.length)];for(let fe=0;fe<60;fe++){const M=Math.PI*2/60*fe,Y=2+Math.random()*5;J.push({x:B,y:U,vx:Math.cos(M)*Y,vy:Math.sin(M)*Y,alpha:1,color:me,size:2+Math.random()*3})}}re(),F=setInterval(re,600);function le(){if(document.getElementById("fireworks-canvas")){O.clearRect(0,0,_.width,_.height);for(let B=J.length-1;B>=0;B--){const U=J[B];if(U.x+=U.vx,U.y+=U.vy+.08,U.vy*=.98,U.alpha-=.018,U.alpha<=0){J.splice(B,1);continue}O.globalAlpha=U.alpha,O.fillStyle=U.color,O.beginPath(),O.arc(U.x,U.y,U.size,0,Math.PI*2),O.fill()}O.globalAlpha=1,(F!==null||J.length>0)&&requestAnimationFrame(le)}}le()}function K(){F!==null&&(clearInterval(F),F=null);const _=document.getElementById("fireworks-canvas");_&&_.getContext("2d").clearRect(0,0,_.width,_.height)}if(o){const _=document.getElementById("reveal-btns");_&&(_.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(A=document.getElementById("reveal-next"))==null||A.addEventListener("click",()=>{K(),a.remove(),o()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{K(),a.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{K(),a.remove(),i("boosters")})}function pr(t){var e,i,o,a;if(t.card_type==="player"&&t.player)return ar(t);if(t.card_type==="game_changer"){const n=t._gcDef,r=(n==null?void 0:n.name)||t.gc_type||"Game Changer",s=(n==null?void 0:n.effect)||((e=Fi[t.gc_type])==null?void 0:e.desc)||"",d=n!=null&&n.image_url?`/icons/${n.image_url}`:null,c=((i=Fi[t.gc_type])==null?void 0:i.icon)||"⚡";return it(r,d,c,s,{width:170})}if(t.card_type==="formation")return gi(t.formation,wt[t.formation],{width:160});if(t.card_type==="stadium"){const n=t._stadiumDef,r=(n==null?void 0:n.name)||"Stade",s=((o=n==null?void 0:n.club)==null?void 0:o.encoded_name)||(n==null?void 0:n.country_code)||"—",d=n!=null&&n.image_url?`/icons/${n.image_url}`:((a=n==null?void 0:n.club)==null?void 0:a.logo_url)||(n!=null&&n.country_code?`https://flagsapi.com/${n.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),c=`${s}<br>+10 ⭐ joueurs alliés`;return Ot(r,d,c,{width:170})}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function ur(t){var e,i;if((e=t==null?void 0:t.rates)!=null&&e.length){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const a={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},n={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};o.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${t.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${t.rates.map(r=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${n[r.card_type]||r.card_type}</span>
            ${r.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${a[r.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${r.rarity}</span>`:""}
            ${r.note_min||r.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${r.note_min||""}–${r.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(r.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(o),o.addEventListener("click",r=>{r.target===o&&o.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>o.remove());return}fr()}function fr(){const t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(t),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.getElementById("odds-close").addEventListener("click",()=>t.remove())}function mr(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,e.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(e);let i=5;const o=setInterval(()=>{i--;const a=document.getElementById("mw-ad-cd");a&&(a.textContent=i),i<=0&&(clearInterval(o),e.remove(),t(!0))},1e3)})}async function gr(t,{state:e,navigate:i,toast:o,refreshProfile:a}){var b,x;const{data:n}=await v.from("users").select("*").eq("id",e.user.id).single();n&&(e.profile=n);let r=Array.isArray((b=e.profile)==null?void 0:b.pending_boosters)?[...e.profile.pending_boosters]:[];if(!r.length){await v.from("users").update({onboarding_done:!0}).eq("id",e.user.id),i("home");return}let s=null;try{const p=(await Vo()).find(u=>(u.name||"").toLowerCase().includes("new player"));p&&(s=Wo(p))}catch(g){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',g)}const d=r.length;let c=0;t.innerHTML=`
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
        📋 1 booster Formation
      </div>
      <p style="font-size:13px;color:rgba(255,255,255,0.55);margin-bottom:24px">
        Ouvre-les un par un pour découvrir tes cartes !
      </p>
      <button class="btn btn-primary" id="onboard-start" style="width:100%;font-size:16px;padding:14px">
        Ouvrir mon 1er booster 🎉
      </button>
    </div>
  </div>`;const l=async()=>{await v.from("users").update({pending_boosters:r}).eq("id",e.user.id)};async function f(){var w;if(c>=d||!r.length){await v.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",e.user.id),a&&await a(),o("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const g=r[0],{data:p}=await v.from("users").select("*").eq("id",e.user.id).single();p&&(e.profile=p);let u=[];try{if(g.type==="formation")u=await Qo(e.profile,0);else if(g.type==="game_changer")u=await Jo(e.profile,g.count||3,0);else if(s&&((w=s.rates)!=null&&w.length)){const h={...s,cost:0,cardCount:g.count||s.cardCount||5};u=await Pi(e.profile,h),g.guaranteeGK&&!e.profile.first_booster_opened&&(u.some(m=>m.player&&m.player.job==="GK")||await xr(e.profile,u),await v.from("users").update({first_booster_opened:!0}).eq("id",e.profile.id))}else u=await Xo(e.profile,g.count||5,0)}catch(h){o(h.message||"Erreur ouverture booster","error");return}r.shift(),c++,await l();const y=g.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:g.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${c}/${d})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};Zo(u,y,i,()=>{f()})}(x=document.getElementById("onboard-start"))==null||x.addEventListener("click",()=>f())}async function xr(t,e){try{const{data:i}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const o=i[Math.floor(Math.random()*i.length)],a=e.findIndex(r=>r.player);if(a===-1)return;const n=e[a];await v.from("cards").update({player_id:o.id}).eq("id",n.id),e[a]={...n,player_id:o.id,player:o}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const kt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},br={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function At(t,e,i,o,a){var n;t.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${e}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${o}</button>
    </div>
  </div>`,(n=document.getElementById("msg-btn"))==null||n.addEventListener("click",a)}function Ni(t,e){var n,r;const i=t.player,o=t.evolution_bonus||0,a=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:t.id,position:e||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?o:0)+(i.job2==="GK"&&a>0?o:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?o:0)+(i.job2==="DEF"&&a>0?o:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?o:0)+(i.job2==="MIL"&&a>0?o:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?o:0)+(i.job2==="ATT"&&a>0?o:0),evolution_bonus:o,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((n=i.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((r=i.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function si(t,e){if(!e||!t)return t;const{club_id:i,country_code:o}=e;return Object.values(t).forEach(a=>{Array.isArray(a)&&a.forEach(n=>{const r=i&&String(n.club_id)===String(i),s=o&&String(n.country_code)===String(o);(r||s)&&(n.stadiumBonus=!0)})}),t}function yi(t,e){if(!e||!(t!=null&&t.length))return t;const{club_id:i,country_code:o}=e;return t.forEach(a=>{if(!a)return;const n=i&&String(a.club_id)===String(i),r=o&&String(a.country_code)===String(o);(n||r)&&(a.stadiumBonus=!0)}),t}function st(t){return t===1?[1]:t===2?[0,2]:t===3?[0,1,2]:t===4?[0,1,1,2]:t===5?[0,1,1,1,2]:[1]}function en(){const t=Math.random()*100;return t<10?10:t<30?5:3}function hi(t,e){const i=kt[e]||kt["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]};if(t.length&&t.every(r=>r.position)){for(const r of["GK","DEF","MIL","ATT"]){const s=t.filter(c=>c.position&&c.position.replace(/\d+$/,"")===r).sort((c,l)=>parseInt(c.position.replace(/\D+/g,""),10)-parseInt(l.position.replace(/\D+/g,""),10)).map(c=>({...c,_line:r})),d=st(s.length);s.forEach((c,l)=>{c._col=d[l]}),o[r]=s}return o}const n=[...t];for(const r of["GK","DEF","MIL","ATT"]){const s=[];for(let c=0;c<i[r];c++){let l=n.findIndex(f=>f.job===r);if(l===-1&&(l=n.findIndex(f=>f.job2===r)),l===-1&&(l=0),n[l]){const f={...n[l],_line:r};s.push(f),n.splice(l,1)}}const d=st(s.length);s.forEach((c,l)=>{c._col=d[l]}),o[r]=s}return o}function lt(t){document.querySelectorAll(".top-nav, .bottom-nav").forEach(e=>{e.style.setProperty("display","none","important"),e.dataset.matchHidden="1"}),t&&t.style.setProperty("padding-bottom","0","important")}function Ke(t){document.querySelectorAll(".top-nav, .bottom-nav").forEach(e=>{e.style.removeProperty("display"),delete e.dataset.matchHidden}),t&&t.style.removeProperty("padding-bottom")}function Ei(t,e,i){const a=new Set,n=e.filter(l=>{var b;const f=((b=l._gcDef)==null?void 0:b.name)||l.gc_type||l.id;return a.has(f)?!1:(a.add(f),!0)});let r=[];function s(l,f){const b=l._gcDef,x=(b==null?void 0:b.name)||l.gc_type,g=b!=null&&b.image_url?`/icons/${b.image_url}`:null,p=it(x,g,"⚡",(b==null?void 0:b.effect)||"",{width:100});return`<div class="gc-select-card" data-id="${l.id}"
      style="position:relative;flex-shrink:0;cursor:pointer;border-radius:10px;
        outline:${f?"3px solid #FFD700":"none"};
        box-shadow:${f?"0 0 18px #FFD700":"none"};
        transform:${f?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      ${p}
      ${f?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const d=l=>{t.style.overflow="",t.style.height="",t.style.display="",t.style.flexDirection="",i(l)};function c(){var f,b,x;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column";const l=r.length>0;t.innerHTML=`
    <div id="gc-screen-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <!-- Header -->
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Jusqu'à <b style="color:#FFD700">3</b> cartes · ${r.length}/3
        </div>
      </div>
      <!-- Grille cartes -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px">
        ${n.map(g=>{const p=r.find(u=>u.gc_type===g.gc_type);return s(g,!!p)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${l?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${l?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${l?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${l?"pointer":"default"};box-shadow:${l?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
          ⚡ Valider (${r.length}/3)
        </button>
        <div style="display:flex;gap:8px">
          <button id="gc-no-gc" style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.7);font-size:13px;font-weight:600;cursor:pointer">
            ▶ Sans GC
          </button>
          <button id="gc-reset" ${r.length===0?"disabled":""} style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(212,160,23,0.4);background:rgba(212,160,23,0.1);color:${r.length===0?"rgba(212,160,23,0.3)":"#D4A017"};font-size:13px;font-weight:700;cursor:${r.length===0?"default":"pointer"}">
            🔄 Réinitialiser
          </button>
        </div>
      </div>
    </div>`,t.querySelectorAll(".gc-select-card").forEach(g=>{g.addEventListener("click",()=>{const p=g.dataset.id,u=n.find(w=>w.id===p);if(!u)return;const y=r.findIndex(w=>w.gc_type===u.gc_type);y>-1?r.splice(y,1):r.length<3&&r.push(u),c()})}),(f=t.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{l&&d(r)}),(b=t.querySelector("#gc-no-gc"))==null||b.addEventListener("click",()=>d([])),(x=t.querySelector("#gc-reset"))==null||x.addEventListener("click",()=>{r.length&&(r=[],c())})}c()}function yr(t,e){var a;const i=((a=e==null?void 0:e.state)==null?void 0:a.params)||{},o=t||i.matchMode||"vs_ai_easy";return o==="friend"?`Match vs ${i.friendName||"Ami"}`:o==="random"?"Match vs Random":o==="ranked"?"Match Classé":o==="mini_league"||o==="mini-league"?"🏆 Match de Mini League":`Match vs IA — ${o.replace("vs_ai_","").toUpperCase()}`}async function hr(t,e,i){const{state:o,navigate:a}=e;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await v.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",o.profile.id).order("created_at",{ascending:!1});if(!n||n.length===0){At(t,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>a("decks"));return}const r=n.map(b=>b.id),{data:s}=await v.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",r).order("slot_order"),d=[...new Set((s||[]).filter(b=>{var x,g;return((x=b.card)==null?void 0:x.card_type)==="stadium"&&((g=b.card)==null?void 0:g.stadium_id)}).map(b=>b.card.stadium_id))],c={};if(d.length){const{data:b}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",d);(b||[]).forEach(x=>{c[x.id]=x}),(s||[]).forEach(x=>{var g,p;((g=x.card)==null?void 0:g.card_type)==="stadium"&&((p=x.card)!=null&&p.stadium_id)&&(x.card._stadiumDef=c[x.card.stadium_id]||null)})}let l=0;function f(){var m,T,$,S,F,H,K;const b=n[l],x=(s||[]).filter(X=>X.deck_id===b.id),g=x.filter(X=>{var A;return X.is_starter&&((A=X.card)==null?void 0:A.player)}).map(X=>Ni(X.card,X.position)),p=x.find(X=>{var A;return((A=X.card)==null?void 0:A.card_type)==="formation"}),u=b.formation||((m=p==null?void 0:p.card)==null?void 0:m.formation)||"4-4-2";let y=g.length>=11?hi(g,u):null,w=((T=b.stadium_card)==null?void 0:T.stadium_def)||null;w&&y&&(y=si(y,w));const h=g.length>=11;lt(t),t.style.height="100%",t.style.overflow="hidden",t.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff;position:relative">
      <button id="cancel-deck-select" style="position:absolute;top:8px;right:10px;z-index:10;width:32px;height:32px;border-radius:50%;border:none;background:rgba(180,30,30,0.85);color:#fff;font-size:18px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${yr(i,e)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${l===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===0?"0.1":"0.3"});color:${l===0?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${l===0?"default":"pointer"};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${b.name}</div>
            <div style="font-size:11px;opacity:.6">${u} · ${g.length}/11${b.is_active?" · ⭐":""}</div>
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
        ${y?'<div class="deck-preview-wrap" style="overflow:visible;width:100%;min-height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${g.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${n.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${n.map((X,A)=>`<div style="width:6px;height:6px;border-radius:50%;background:${A===l?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${h?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${h?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${h?"pointer":"default"}">
          ${h?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function X(){const A=t.querySelector(".deck-preview-wrap"),_=t.querySelector("#deck-swipe-zone");if(!A||!_||!y)return;const O=_.clientWidth>=900,J=Math.max(200,_.clientHeight-(O?60:40)),le=Math.max(200,_.clientWidth-16),B=O?Math.min(117,Math.max(52,Math.round(le*.22))):Math.max(44,Math.round(le*.168));if(J<220||le<220){requestAnimationFrame(X);return}const U=O?null:Math.round(B*.55);A.innerHTML=Ht(y,u,null,[],le,J,[],U),A.style.cssText=`width:${le}px;height:${J}px;overflow:hidden;margin:${O?0:60}px auto 0`;const de=A.querySelector("svg");de&&(de.style.cssText="display:block;width:100%;height:100%",de.setAttribute("preserveAspectRatio",O?"xMidYMid meet":"none"))})),(S=document.getElementById("prev-deck"))==null||S.addEventListener("click",()=>{l>0&&(l--,f())}),(F=document.getElementById("next-deck"))==null||F.addEventListener("click",()=>{l<n.length-1&&(l++,f())}),(H=document.getElementById("validate-deck"))==null||H.addEventListener("click",()=>{if(!h)return;const X=e.state.params||{};e.navigate("match",{...X,matchMode:X.matchMode||i,deckId:b.id})}),(K=document.getElementById("cancel-deck-select"))==null||K.addEventListener("click",()=>{Ke(t),a("home")});const E=document.getElementById("deck-swipe-zone");if(E){let X=0,A=0;E.addEventListener("touchstart",_=>{X=_.touches[0].clientX,A=_.touches[0].clientY},{passive:!0}),E.addEventListener("touchend",_=>{const O=_.changedTouches[0].clientX-X,J=_.changedTouches[0].clientY-A;Math.abs(O)<40||Math.abs(O)<Math.abs(J)||(O<0&&l<n.length-1?(l++,f()):O>0&&l>0&&(l--,f()))},{passive:!0})}}f()}function vt(t,e=44,i=58,o=null){return Se(t,{width:e,showStad:!!o,stadDef:o,used:t==null?void 0:t.used})}function Qe(t,e,i,o,a){if(!(t!=null&&t.length))return"";const n=t.slice(0,5);let r='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((s,d)=>{const c=s._line||s.job||"MIL";let l=s.boost||0;if(s.stadiumBonus&&(o==="attack"&&(c==="ATT"||c==="MIL")||o==="defense"&&(c==="GK"||c==="DEF"||c==="MIL")?l+=10:o||(l+=10)),r+=Se(s,{width:40,role:c,extraNote:l}),d<n.length-1){const f=n[d+1],b=Ho(s,f,a)?Kt(s,f):null;r+=`<div style="width:7px;height:3px;background:${!b||b==="#ff3333"||b==="#cc2222"?"rgba(255,255,255,0.12)":b};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(r+=`<div style="margin-left:6px;background:${e};color:${e==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),r+="</div>",r}function Li(t,e,i,o,a=310,n=310,r=[],s=null){const d=wt[e]||{},c=Ki(e)||Vi[e]||[],l={},f=["ATT","MIL","DEF","GK"];for(const y of f)(t[y]||[]).forEach((h,E)=>{l[`${y}${E+1}`]=h});function b(y){const w=d[y];return w?{x:w.x*a,y:w.y*n}:null}let x="";for(const[y,w]of c){const h=b(y),E=b(w);if(!h||!E)continue;const m=l[y],T=l[w],$=Kt(m,T);$==="#00ff88"||$==="#FFD700"?(x+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${$}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,x+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${$}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):x+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${$}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=typeof window<"u"&&window.innerWidth>=900?Math.min(Math.max(81,Math.round(a*.225)),117):Math.max(44,Math.round(a*.168)),p=Math.round(g*657/507);for(const[y,w]of Object.entries(l)){const h=b(y);if(!h||!w)continue;const E=y.replace(/[0-9]/g,""),m=r.includes(w.cardId),T=i==="attack"&&(["MIL","ATT"].includes(E)||m)&&!w.used||i==="defense"&&["GK","DEF","MIL"].includes(E)&&!w.used,$=o.includes(w.cardId);let S=w.boost||0,F=!1;w.stadiumBonus&&(i==="attack"&&(E==="ATT"||E==="MIL")||i==="defense"&&(E==="GK"||E==="DEF"||E==="MIL")?(S+=10,F=!0):i||(S+=10,F=!0));const H=Math.round(h.x-g/2),K=Math.round(h.y-p/2);if(w.used){x+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${H}" y="${K}" width="${g}" height="${p}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${w.cardId}" data-role="${E}" style="cursor:pointer"/>`;continue}const X=Se({...w,_evolution_bonus:0,stadiumBonus:!1},{width:g,showStad:!1,stadDef:null,role:E,extraNote:S,_cardOffset:30,_forceStadColor:F}),A=$?`position:absolute;top:30px;left:0;width:${g}px;height:${p}px;outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;pointer-events:none;`:"";x+=`<foreignObject x="${H-2}" y="${K-30}" width="${g+8}" height="${p+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">
        ${X}
        ${$?`<div style="${A}"></div>`:""}
      </div>
    </foreignObject>`,T&&(x+=`<rect x="${H}" y="${K}" width="${g}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${$?"selected":""}" data-card-id="${w.cardId}" data-role="${E}" style="cursor:pointer"/>`)}const u=s!==null?s:Math.round(Math.max(g*.7,80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-u} ${-u} ${a+u*2} ${n+u*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${x}
  </svg>`}function Ht(t,e,i,o,a=300,n=300,r=[],s=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Li(t,e,i,o,a,n,r,s)}
  </div>`}async function Ti(t,e,i,o){var T;const{state:a,navigate:n,toast:r}=e;lt(t);const s=a.params||{};if(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return hr(t,e,i);const d=s.deckId;let c,l,f,b;try{const $=await Promise.all([v.from("decks").select("formation,name,stadium_card_id").eq("id",d).single(),v.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",d).order("slot_order")]);c=$[0].data,f=$[0].error,l=$[1].data,b=$[1].error}catch($){console.error("[Match] Exception chargement deck:",$),At(t,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>n("home"));return}if(f||b){console.error("[Match] Erreur Supabase:",f||b),At(t,"⚠️","Erreur lors du chargement du deck.","Retour",()=>n("home"));return}const x=(l||[]).filter($=>{var S;return $.is_starter&&((S=$.card)==null?void 0:S.player)}).map($=>Ni($.card,$.position)),g=(l||[]).filter($=>{var S;return!$.is_starter&&((S=$.card)==null?void 0:S.player)}).map($=>Ni($.card,$.position));if(x.length<11){At(t,"⚠️",`Deck incomplet (${x.length}/11).`,"Compléter",()=>n("decks"));return}const p=(l||[]).find($=>{var S;return((S=$.card)==null?void 0:S.card_type)==="formation"}),u=(c==null?void 0:c.formation)||((T=p==null?void 0:p.card)==null?void 0:T.formation)||"4-4-2",{data:y,error:w}=await v.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",a.profile.id).eq("card_type","game_changer"),{data:h}=await v.from("gc_definitions").select("*").eq("is_active",!0),E=(y||[]).map($=>({...$,_gcDef:(h==null?void 0:h.find(S=>S.name===$.gc_type||S.id===$.gc_definition_id))||null}));let m=null;if(c!=null&&c.stadium_card_id){const{data:$}=await v.from("cards").select("stadium_id").eq("id",c.stadium_card_id).single();if($!=null&&$.stadium_id){const{data:S}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",$.stadium_id).single();m=S||null}}o({deckId:d,formation:u,starters:x,subsRaw:g,gcCardsEnriched:E,gcDefs:h||[],stadiumDef:m})}function zt(){return Math.min(window.innerWidth-40,860)}function Rt(){return Math.round(zt()*1.1)}function tn(t){var a,n;if(!t)return null;const e=t._line||t.job||"MIL",i=e==="GK"?t.note_g||0:e==="DEF"?t.note_d||0:e==="MIL"?t.note_m||0:t.note_a||0,o=t.stadiumBonus?10:0;return{name:t.name,firstname:t.firstname||"",note:i+(t.boost||0)+o,note_g:t.note_g||0,note_d:t.note_d||0,note_m:t.note_m||0,note_a:t.note_a||0,_evolution_bonus:0,stadiumBonus:t.stadiumBonus||!1,boost:t.boost||0,job:t.job,job2:t.job2||null,_line:t._line||t.job,_col:t._col,country_code:t.country_code,club_id:t.club_id,rarity:t.rarity,clubName:t.clubName||((a=t.clubs)==null?void 0:a.encoded_name)||null,clubLogo:t.clubLogo||((n=t.clubs)==null?void 0:n.logo_url)||null,face:t.face||null,portrait:Ct(t)}}function vr(t,e,i,o="Adversaire"){Bo("/sounds/match-opening.mp3",.3);const a=zt(),n=Rt();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${o}</div>
      
      <div style="width:100%;max-width:${a}px;margin:0 auto">
        ${Li(t,e,null,[],a,n)}
      </div>
    </div>`}function on(t){var n,r,s;if(!t)return"";const e=d=>d?Se({...d,_evolution_bonus:0},{width:52,role:d._line||d.job,showStad:!!d.stadiumBonus,extraNote:d.boost||0}):"",o={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[t.type]||"📋";return`
    <div style="padding:8px 12px;border-left:3px solid ${((n=t.type)==null?void 0:n.includes("goal"))?"#22c55e":"rgba(255,255,255,0.15)"};margin-bottom:4px">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px;text-align:center">${o} ${t.title||t.text||""}</div>
      ${(r=t.homePlayers)!=null&&r.length||(s=t.aiPlayers)!=null&&s.length?`
        <div style="display:flex;align-items:flex-start;justify-content:center;gap:16px">
          <div style="flex:1;display:flex;gap:3px;flex-wrap:wrap;justify-content:flex-end">
            ${(t.homePlayers||[]).map(e).join("")}
          </div>
          <div style="flex:1;display:flex;gap:3px;flex-wrap:wrap;justify-content:flex-start">
            ${(t.aiPlayers||[]).map(e).join("")}
          </div>
        </div>`:""}
      ${t.text&&t.title?`<div style="font-size:10px;color:rgba(255,255,255,0.4);margin-top:4px;text-align:center">${t.text}</div>`:""}
    </div>`}function Ze(t,e,i,o,a){Xi("/sounds/goal.mp3",.7);const n=document.getElementById("goal-anim-overlay");n&&n.remove();const r=document.createElement("div");r.id="goal-anim-overlay",r.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(t||[]).slice(0,3).map(d=>Se({...d,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:d._line||d.job,showStad:!!d.stadiumBonus})).join("");if(r.innerHTML=`
    <div style="animation:goalPop 0.4s ease-out;text-align:center">
      <div style="font-size:clamp(48px,10vw,80px);margin-bottom:8px">⚽</div>
      <div style="font-size:clamp(28px,6vw,48px);font-weight:900;color:#22c55e;letter-spacing:2px;text-shadow:0 0 20px #22c55e">BUT !</div>
      <div style="display:flex;gap:8px;justify-content:center;margin:16px 0">${s}</div>
      <div style="font-size:clamp(32px,7vw,56px);font-weight:900;color:#fff;margin-top:8px">
        ${o?`<span style="color:#22c55e">${e}</span>`:e}
        <span style="color:rgba(255,255,255,0.4);margin:0 12px">—</span>
        ${o?i:`<span style="color:#22c55e">${i}</span>`}
      </div>
    </div>`,document.body.appendChild(r),!document.getElementById("goal-anim-style")){const d=document.createElement("style");d.id="goal-anim-style",d.textContent=`
      @keyframes goalPop {
        from { transform: scale(0.5); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }`,document.head.appendChild(d)}setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.4s",setTimeout(()=>{r.remove(),a==null||a()},400)},1800)}function wr(t,e,i){const o=document.getElementById("sub-anim-overlay");o&&o.remove();const a=document.createElement("div");a.id="sub-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const n=Math.min(120,Math.round(window.innerWidth/4)),r=t?Se({...t,_evolution_bonus:0},{width:n,role:t._line||t.job}):"",s=e?Se({...e,_evolution_bonus:0},{width:n,role:e._line||e.job}):"";a.innerHTML=`
    <div style="text-align:center">
      <div style="font-size:32px;margin-bottom:8px">🔄</div>
      <div style="font-size:18px;font-weight:700;color:#fff;margin-bottom:16px">Remplacement</div>
      <div style="display:flex;align-items:center;gap:16px;justify-content:center">
        <div style="text-align:center">
          ${r}
          <div style="font-size:10px;color:#e03030;margin-top:4px">SORT ▼</div>
        </div>
        <div style="font-size:28px;color:rgba(255,255,255,0.4)">→</div>
        <div style="text-align:center">
          ${s}
          <div style="font-size:10px;color:#22c55e;margin-top:4px">ENTRE ▲</div>
        </div>
      </div>
    </div>`,document.body.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),i==null||i()},400)},1600)}function Tt(t,e="rgba(0,0,0,0.85)",i=2200){const o=document.getElementById("game-toast");o&&o.remove();const a=document.createElement("div");if(a.id="game-toast",a.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${e};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,a.textContent=t,!document.getElementById("game-toast-style")){const n=document.createElement("style");n.id="game-toast-style",n.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(n)}document.body.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.3s",setTimeout(()=>a.remove(),300)},i)}function nn(t,e){const i=Pe(t,"MIL"),o=t.stadiumBonus||e&&(e.club_id&&String(t.club_id)===String(e.club_id)||e.country_code&&t.country_code===e.country_code)?10:0;return i+o}function bt(t,e){return t.reduce((i,o)=>i+nn(o,e),0)}function yt(t){let e=0;for(let i=0;i<t.length-1;i++){const o=Kt(t[i],t[i+1]);o==="#00ff88"?e+=10:o==="#FFD700"&&(e+=5)}return e}function vi(t,e,i,o,a){return`<div id="duel-row-${o}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${e}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${t.map((n,r)=>{const s=r<t.length-1?Kt(n,t[r+1]):null,d=!s||s==="#ff3333"||s==="#cc2222",c=s==="#00ff88"?"+10":s==="#FFD700"?"+5":"";return nn(n,a),n.stadiumBonus||a&&(a.club_id&&String(n.club_id)===String(a.club_id)||a.country_code&&(n.country_code,a.country_code)),`
          <div class="duel-card duel-card-${o}" data-idx="${r}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Se({...n,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:a,role:"MIL",extraNote:n.boost||0})}
          </div>
          ${r<t.length-1?`<div class="duel-link duel-link-${o}" data-idx="${r}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${d?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${d?"none":`0 0 8px ${s}`}">
            ${c?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${c}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${o}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${bt(t,a)} + ${yt(t)} liens = <b style="color:#fff">${bt(t,a)+yt(t)}</b>
      </div>
    </div>`}async function _r(t,e){const{state:i}=e,o=i.params||{},a=o.matchMode||"vs_ai_easy",n=a==="solo",r=a==="ranked_ai",s=o.soloLevel||1,d=a.replace("vs_ai_",""),c=a;let l=null;if(n){const{data:p}=await v.from("solo_levels").select("*").eq("level_number",s).maybeSingle();l=p||{level_number:s,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500}}const f=o.rankedData||null;let b=null;if(r){const p=(f==null?void 0:f.mmr)??1e3;b={target_note_avg:Math.min(20,Math.max(1,Math.round(p/100))),nb_liens_jaune:3,nb_liens_vert:2,nb_joueurs_stade:3}}const x=o.presetSetup||null;async function g({deckId:p,formation:u,starters:y,subsRaw:w,gcCardsEnriched:h,gcDefs:E,stadiumDef:m}){try{let T=hi(y,u);m&&(T=si(T,m),yi(w,m));const $=n?await $o(u,l):r?await $o(u,b):await kr(u,d),S=$.lines||$,F=async H=>{try{const K=c==="vs_ai_club"||c==="solo"||c==="ranked_ai"?"club":c,{data:X,error:A}=await v.from("matches").insert({home_id:i.profile.id,away_id:null,mode:K,home_deck_id:p,status:"in_progress"}).select().single();if(A){console.error("[MatchIA] Erreur création match:",A),At(t,"⚠️","Impossible de créer le match ("+A.message+").","Retour",()=>e.navigate("home"));return}const _=$.stadiumDef||null;_&&S&&(si(S,_),yi($.subs||[],_));const O={gcDefs:E||[],matchId:X==null?void 0:X.id,mode:c,difficulty:d,formation:u,isSolo:n,soloLevel:s,soloLevelConfig:l,isRankedAI:r,rankedAIData:f,homeTeam:T,aiTeam:S,homeSubs:w,subsUsed:0,maxSubs:Math.min(w.length,3),aiSubs:$.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min(($.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:$.gcCards||[],aiUsedGc:[],aiStadiumDef:_,homeScore:0,aiScore:0,gcCards:H,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};$r(t,O,e)}catch(K){console.error("[MatchIA] Exception launchMatch:",K),At(t,"⚠️","Erreur au lancement du match : "+K.message,"Retour",()=>e.navigate("home"))}};if(r&&x){F(x.gcCardsEnriched||[]);return}if(!h.length){F([]);return}Ei(t,h,F)}catch(T){console.error("[MatchIA] Exception setup:",T),At(t,"⚠️","Erreur de préparation du match : "+T.message,"Retour",()=>e.navigate("home"))}}x?await g(x):await Ti(t,e,a,g)}async function kr(t,e){var u;const{data:i}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:rn(t),subs:[],gcCards:[],stadiumDef:null};const o=kt[t]||kt["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]},n=new Set;function r(y,w,h){var E,m;return n.add(y.id),{cardId:"ai-"+y.id+"-"+h,id:y.id,firstname:y.firstname,name:y.surname_real,country_code:y.country_code,club_id:y.club_id,job:y.job,job2:y.job2,note_g:Number(y.note_g)||0,note_d:Number(y.note_d)||0,note_m:Number(y.note_m)||0,note_a:Number(y.note_a)||0,rarity:y.rarity,skin:y.skin,hair:y.hair,hair_length:y.hair_length,face:y.face,clubName:((E=y.clubs)==null?void 0:E.encoded_name)||null,clubLogo:((m=y.clubs)==null?void 0:m.logo_url)||null,boost:0,used:!1,_line:w}}for(const y of["GK","DEF","MIL","ATT"]){const w=i.filter($=>$.job===y&&!n.has($.id)),h=i.filter($=>$.job!==y&&!n.has($.id)),E=[...w,...h],m=[];for(let $=0;$<o[y];$++){const S=E[$];S&&m.push(r(S,y,$))}const T=st(m.length);m.forEach(($,S)=>{$._col=T[S]}),a[y]=m}const d=i.filter(y=>!n.has(y.id)).slice(0,5).map((y,w)=>r(y,y.job,100+w)),f=Object.keys(ze).sort(()=>Math.random()-.5).slice(0,3).map((y,w)=>{var h,E;return{id:"ai-gc-"+w,gc_type:y,name:((h=ze[y])==null?void 0:h.name)||y,icon:((E=ze[y])==null?void 0:E.icon)||"⚡"}}),b=Object.values(a).flat(),x={};b.forEach(y=>{y.club_id&&(x[y.club_id]=(x[y.club_id]||0)+1)});const g=(u=Object.entries(x).sort((y,w)=>w[1]-y[1])[0])==null?void 0:u[0];let p=null;if(g){const{data:y}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",g).single();y&&(p={club_id:y.id,country_code:null,name:y.encoded_name+" Stadium",club:{encoded_name:y.encoded_name,logo_url:y.logo_url}})}return{lines:a,subs:d,gcCards:f,stadiumDef:p}}function ko(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function ui(t,e,i){if(i<=0||!t.length)return[];const o=[...t].sort((a,n)=>Math.abs(ko(a)-e)-Math.abs(ko(n)-e));return o.slice(0,Math.min(i,o.length))}async function $o(t,e){var X,A;const i=Number(e==null?void 0:e.target_note_avg)||10,o=Number(e==null?void 0:e.nb_liens_jaune)||0,a=Number(e==null?void 0:e.nb_liens_vert)||0,n=Number(e==null?void 0:e.nb_joueurs_stade)||0,{data:r}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url,country_code)").eq("is_active",!0).limit(300);if(!r||r.length<16)return{lines:rn(t),subs:[],gcCards:[],stadiumDef:null};const s={};r.forEach(_=>{_.club_id&&(s[_.club_id]=(s[_.club_id]||0)+1)});const d=((X=Object.entries(s).sort((_,O)=>O[1]-_[1])[0])==null?void 0:X[0])||null,c=d?r.filter(_=>_.club_id===d):[],l=((A=c[0])==null?void 0:A.country_code)||null,f=l?r.filter(_=>_.country_code===l&&_.club_id!==d):[],b=Math.min(c.length,Math.max(2,a+1),16),x=Math.min(f.length,Math.max(0,o),16-b),g=[],p=new Set;ui(c,i,b).forEach(_=>{g.push(_),p.add(_.id)}),ui(f,i,x).forEach(_=>{g.push(_),p.add(_.id)});const u=Math.max(0,16-g.length),y=r.filter(_=>!p.has(_.id));ui(y,i,u).forEach(_=>{g.push(_),p.add(_.id)});const w=kt[t]||kt["4-4-2"],h={GK:[],DEF:[],MIL:[],ATT:[]},E=new Set;function m(_,O,J){var re,le;return E.add(_.id),{cardId:"ai-"+_.id+"-"+J,id:_.id,firstname:_.firstname,name:_.surname_real,country_code:_.country_code,club_id:_.club_id,job:_.job,job2:_.job2,note_g:Number(_.note_g)||0,note_d:Number(_.note_d)||0,note_m:Number(_.note_m)||0,note_a:Number(_.note_a)||0,rarity:_.rarity,skin:_.skin,hair:_.hair,hair_length:_.hair_length,face:_.face,clubName:((re=_.clubs)==null?void 0:re.encoded_name)||null,clubLogo:((le=_.clubs)==null?void 0:le.logo_url)||null,boost:0,used:!1,_line:O}}for(const _ of["GK","DEF","MIL","ATT"]){const O=g.filter(U=>U.job===_&&!E.has(U.id)),J=g.filter(U=>U.job!==_&&!E.has(U.id)),re=[...O,...J],le=[];for(let U=0;U<w[_];U++){const de=re[U];de&&le.push(m(de,_,U))}const B=st(le.length);le.forEach((U,de)=>{U._col=B[de]}),h[_]=le}let T=g.filter(_=>!E.has(_.id));if(T.length<5){const _=r.filter(O=>!E.has(O.id)&&!T.some(J=>J.id===O.id));T=T.concat(ui(_,i,5-T.length))}const $=T.slice(0,5).map((_,O)=>m(_,_.job,100+O)),H=Object.keys(ze).sort(()=>Math.random()-.5).slice(0,3).map((_,O)=>{var J,re;return{id:"ai-gc-"+O,gc_type:_,name:((J=ze[_])==null?void 0:J.name)||_,icon:((re=ze[_])==null?void 0:re.icon)||"⚡"}});let K=null;if(n>0&&d){const{data:_}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",d).single();_&&(K={club_id:_.id,country_code:null,name:_.encoded_name+" Stadium",club:{encoded_name:_.encoded_name,logo_url:_.logo_url}})}return{lines:h,subs:$,gcCards:H,stadiumDef:K}}function rn(t){const e=kt[t]||kt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let a=0;for(const n of["GK","DEF","MIL","ATT"]){const r=[];for(let d=0;d<e[n];d++){const c=3+Math.floor(Math.random()*5);r.push({cardId:"fake-"+a,id:"fake-"+a,firstname:"IA",name:o[a%o.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?c:2,note_d:n==="DEF"?c:2,note_m:n==="MIL"?c:2,note_a:n==="ATT"?c:2,rarity:"normal",boost:0,used:!1,_line:n}),a++}const s=st(r.length);r.forEach((d,c)=>{d._col=s[c]}),i[n]=r}return i}function $r(t,e,i){var a;Bo("/sounds/match-opening.mp3",.3);const o=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
      <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((a=e.aiStadiumDef.club)==null?void 0:a.encoded_name)||e.aiStadiumDef.country_code||""}</span>
    </div>`:""}
    <div id="opponent-swipe-zone" style="flex:1;min-height:0;overflow:hidden;display:flex;align-items:center;justify-content:center">
      <div class="opponent-preview-wrap" style="overflow:hidden;display:flex;align-items:center;justify-content:center"></div>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const n=t.querySelector(".opponent-preview-wrap"),r=t.querySelector("#opponent-swipe-zone");if(!n||!r)return;const s=r.clientWidth>=900,d=Math.max(200,r.clientHeight-(s?8:40)),c=Math.max(200,r.clientWidth-(s?8:16)),l=s?null:Math.round(Math.max(44,Math.round(c*.168))*.55);n.innerHTML=Ht(e.aiTeam,e.formation,null,[],c,d,[],l),n.style.cssText=`width:${c}px;height:${d}px;overflow:hidden;flex-shrink:0`;const f=n.querySelector("svg");f&&(f.style.cssText="display:block;width:100%;height:100%",f.setAttribute("preserveAspectRatio",s?"xMidYMid meet":"none"))})),setTimeout(()=>Er(t,e,i),5e3)}const Ve=t=>tn(t);function Er(t,e,i){const o=e.homeTeam.MIL||[],a=e.aiTeam.MIL||[],n=e.stadiumDef||null,r=e.aiStadiumDef||null,s=bt(o,n)+yt(o),d=bt(a,r)+yt(a),c=s>=d;t.innerHTML=`
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

    ${vi(o,e.clubName,"#D4A017","home",n)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${vi(a,"IA","#bb2020","ai",r)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const l=()=>{const g=(p,u)=>t.querySelectorAll(p).forEach((y,w)=>{setTimeout(()=>{y.style.opacity="1",y.style.transform="translateY(0) scale(1)"},u+w*90)});g(".duel-card-home",150),g(".duel-card-ai",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((p,u)=>{setTimeout(()=>{p.style.opacity="1"},u*70)}),900),setTimeout(()=>{const p=t.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(u=>u.style.opacity="1")},1250),setTimeout(()=>{f("score-home",s,800),f("score-ai",d,800)},1500)};function f(g,p,u){const y=document.getElementById(g);if(!y)return;const w=performance.now(),h=E=>{const m=Math.min(1,(E-w)/u);y.textContent=Math.round(p*(1-Math.pow(1-m,3))),m<1?requestAnimationFrame(h):y.textContent=p};requestAnimationFrame(h)}requestAnimationFrame(l),e.attacker=c?"home":"ai";const b=c?en():null;c&&(e.boostCard={value:b}),e.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(g=>Ve(g)),aiPlayers:a.map(g=>Ve(g)),homeTotal:s,aiTotal:d,text:`Duel milieu : ${e.clubName} ${s} – ${d} IA → ${c?e.clubName+" attaque":"IA attaque"}`});const x=()=>{e.phase=e.attacker==="home"?"attack":"ai-attack",$e(t,e,i),e.attacker==="ai"&&setTimeout(()=>to(t,e,i),800)};setTimeout(()=>{const g=document.getElementById("score-home"),p=document.getElementById("score-ai"),u=document.getElementById(c?"duel-row-home":"duel-row-ai"),y=document.getElementById(c?"duel-row-ai":"duel-row-home"),w=c?g:p,h=c?p:g;w&&(w.style.fontSize="80px",w.style.color=c?"#FFD700":"#ff6b6b",w.style.animation="duelPulse .5s ease"+(c?", duelGlow 1.5s ease infinite .5s":"")),h&&(h.style.opacity="0.25"),setTimeout(()=>{u&&(u.style.transformOrigin="center",u.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",u.style.zIndex="5"),setTimeout(()=>{var m;const E=document.getElementById("duel-shock");if(E){const T=(m=y||u)==null?void 0:m.getBoundingClientRect(),$=t.querySelector(".match-screen").getBoundingClientRect();T&&(E.style.top=T.top-$.top+T.height/2+"px"),E.style.animation="shockwave .5s ease-out forwards"}y&&(y.style.transformOrigin="center",y.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var m;const E=document.getElementById("duel-finale");E&&(E.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${c?`⚽ ${e.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${c?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${b}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,E.style.transition="opacity .45s ease",E.style.opacity="1",E.style.pointerEvents="auto",(m=document.getElementById("start-match-btn"))==null||m.addEventListener("click",x))},600)},700)},2800)}function $e(t,e,i){var H,K,X,A,_,O,J,re,le;const o=e.selected.map(B=>B.cardId),a=e.usedSubIds||[],n=e.homeSubs.filter(B=>!a.includes(B.cardId)),s=Object.values(e.homeTeam).flat().filter(B=>B.used).length>0&&n.length>0&&e.subsUsed<e.maxSubs,d=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(B=>!B.used),c=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(B=>!B.used),l=Ut(e.aiTeam),f=d.length===0&&c.length===0&&!l,b=(e.homeTeam.DEF||[]).filter(B=>!B.used),x=(e.homeTeam.GK||[]).filter(B=>!B.used);let g=[];e.phase==="attack"&&d.length===0&&(l?(g=b.map(B=>B.cardId),b.length===0&&(g=g.concat(x.map(B=>B.cardId)))):f&&(g=[...b,...x].map(B=>B.cardId))),e.log[e.log.length-1];const p=e.phase==="ai-attack"||e.phase==="ai-defense",u=e.phase==="attack",y=e.phase==="defense",w=e.phase==="finished",E=(e.homeSubs||[]).filter(B=>!(e.usedSubIds||[]).includes(B.cardId)).length>0&&e.subsUsed<e.maxSubs,m=u&&d.length===0&&g.length===0&&!E,T=e.gcCards.filter(B=>!e.usedGc.includes(B.id)),$=e.boostCard&&!e.boostUsed;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.innerHTML=`
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
      ${(()=>{if(e.phase==="defense"&&e.pendingAttack){const U=e.pendingAttack;let de="";if(e.selected.length>0){const me=e.selected.map(M=>({...(e.homeTeam[M._role]||[]).find(q=>q.cardId===M.cardId)||M,_line:M._role})),fe=ai(me,e.modifiers.home,e.formation);de=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${e.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${Qe(me.map(M=>({...M,used:!1})),"#3a7bd5",fe.total,"defense",e.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${Qe((U.players||[]).map(me=>({...me,used:!1})),"#ff6b6b",U.total,"attack",e.formation)}</div>
            ${de}
          </div>`}if(e.phase==="ai-defense"&&e.pendingAttack){const U=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${Qe((U.players||[]).map(de=>({...de,used:!1})),"#00ff88",U.total,"attack",e.formation)}</div>
          </div>`}if(e.phase==="attack"&&e.selected.length>0){const U=e.selected.map(me=>{const fe=(e.homeTeam[me._role]||[]).find(Y=>Y.cardId===me.cardId)||me,M=["GK","DEF"].includes(me._role);return{...fe,_line:me._role,...M?{note_a:Math.max(1,Number(fe.note_a)||0)}:{}}}),de=ri(U,e.modifiers.home,e.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${e.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(U.map(me=>({...me,used:!1})),"#FFD700",de.total,"attack",e.formation)}</div>
          </div>`}const B=e.log[e.log.length-1];return B?'<div style="padding:2px 4px">'+on(B)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${e.log.length})
    </button>

    ${(()=>{const B=window.innerWidth>=700,U=(C,R,ce)=>{var Ae,je;const ae=(e.gcDefs||[]).find(Ee=>Ee.name===C.gc_type),he=(ae==null?void 0:ae.name)||C.gc_type,ge=(ae==null?void 0:ae.effect)||((Ae=ze[C.gc_type])==null?void 0:Ae.desc)||"",ue=ae!=null&&ae.image_url?`/icons/${ae.image_url}`:null,_e=((je=ze[C.gc_type])==null?void 0:je.icon)||"⚡";return`<div class="gc-mini" data-gc-id="${C.id}" data-gc-type="${C.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${it(he,ue,_e,ge,{width:R})}
        </div>`},de=(C,R)=>{var ce;return`<div id="boost-card"
          style="box-sizing:border-box;width:${C}px;height:${R}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(R*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(R*.2)}px">⚡</div>
            <div style="font-size:${Math.round(R*.09)}px;color:#000;font-weight:900">+${(ce=e.boostCard)==null?void 0:ce.value}</div>
          </div>`},me=(C,R)=>R?de(95,162):U(C,95),fe=(C,R)=>R?de(53,90):U(C,53),M=B?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Y=w?`<button id="btn-results" style="${M};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:p?`<div style="${M};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:m?`<button id="btn-pass" style="${M};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:u?`<button id="btn-action" style="${M};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${e.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:y?`<button id="btn-action" style="${M};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${e.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${M};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,q=u||y?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${e.selected.length}/3 sélectionné(s)</div>`:"",j=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${B?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(C=>`<div class="sub-btn-col" data-sub-id="${C.cardId}" style="cursor:pointer;flex-shrink:0">${vt(C,76,100)}</div>`).join("")}
      </div>`,W=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${Ht(e.homeTeam,e.formation,e.phase,o,B?1300:zt(),B?600:Rt(),g)}
        </div>
      </div>`;return B?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${j}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${W}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Y}${q}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${T.map(C=>me(C,!1)).join("")}
            ${$?me(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ht(e.homeTeam,e.formation,e.phase,o,B?1300:zt(),B?600:Rt(),g)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${T.map(C=>fe(C,!1)).join("")}
            ${$?fe(null,!0):""}
            <div id="sub-btn-main" style="cursor:${s?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${s?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${s?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${s?1:.4}">
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
          <div>${Y}${q}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${e.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...e.log].reverse().map(B=>{var U,de,me;if(B.type==="duel"){const fe=B.isGoal,M=B.homeScored?"#FFD700":fe?"#ff6b6b":"rgba(255,255,255,0.3)",Y=B.homeScored?"⚽ BUT !":fe?"⚽ BUT IA !":(U=B.homePlayers)!=null&&U.length?"⚔️ Attaque":"🛡️ Défense",q=(B.homeTotal??0)>=(B.aiTotal??0);return`<div style="padding:8px;border-radius:8px;background:${fe?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${M};margin-bottom:4px">
                <div style="font-size:9px;color:${M};letter-spacing:1px;margin-bottom:6px;font-weight:700;text-transform:uppercase;text-align:center">${Y}</div>
                <div style="display:flex;align-items:center;justify-content:center;gap:10px">
                  ${(de=B.aiPlayers)!=null&&de.length?`<div style="flex:1;display:flex;justify-content:flex-end;opacity:0.75">${Qe(B.aiPlayers,"#ff6b6b",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                  <div style="flex-shrink:0;display:flex;align-items:center;gap:6px">
                    <span style="font-size:16px;font-weight:900;color:${q?"#e03030":"#22c55e"}">${B.aiTotal??"–"}</span>
                    <span style="font-size:9px;color:rgba(255,255,255,0.3)">VS</span>
                    <span style="font-size:16px;font-weight:900;color:${q?"#22c55e":"#e03030"}">${B.homeTotal??"–"}</span>
                  </div>
                  ${(me=B.homePlayers)!=null&&me.length?`<div style="flex:1;display:flex;justify-content:flex-start">${Qe(B.homePlayers,"rgba(255,255,255,0.7)",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                </div>
              </div>`}return B.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${B.outPlayer?vt({...B.outPlayer,used:!0,_line:B.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${B.inPlayer?vt({...B.inPlayer,_line:B.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:B.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${B.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${B.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function S(){const B=t.querySelector(".match-screen");if(!B)return;const U=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);B.style.bottom="auto",B.style.height=U+"px",B.style.minHeight=U+"px",B.style.maxHeight=U+"px",B.style.overflow="hidden";const de=t.querySelector("#mobile-action-bar"),me=t.querySelector("#mobile-play-area");de&&me&&(me.style.paddingBottom=de.offsetHeight+"px")}if(S(),setTimeout(S,120),setTimeout(S,400),setTimeout(S,1e3),e._vvBound||(e._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",S),window.visualViewport.addEventListener("scroll",S)),window.addEventListener("resize",S)),function(){const U=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!U)return;const de=U.closest("#match-terrain-wrap");de&&(de.style.cssText="position:relative;width:100%;height:100%;padding:0"),U.removeAttribute("width"),U.removeAttribute("height"),U.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",U.setAttribute("preserveAspectRatio","xMidYMid meet")}(),e._resizeBound||(e._resizeBound=!0,window.addEventListener("resize",()=>{const B=t.querySelector(".terrain-wrapper svg");if(B){const U=B.closest("#match-terrain-wrap");U&&(U.style.cssText="position:relative;width:100%;height:100%;padding:0"),B.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ue(),e.phase==="attack"||e.phase==="defense"){let B=!1,U=30;const de=()=>document.getElementById("match-timer"),me=()=>{const fe=de();if(!fe)return;const M=String(Math.floor(U/60)).padStart(2,"0"),Y=String(U%60).padStart(2,"0");fe.textContent=` ${M}:${Y}`,fe.style.color=B?"#ff2222":"#ff9500",fe.style.fontWeight="900"};me(),e._timerInt=setInterval(()=>{if(U--,U<0)if(!B)B=!0,U=15,me(),qo("/sounds/timer-urgent.mp3",.6);else{clearInterval(e._timerInt),e._timerInt=null,Ue(),e.homeScore=0,e.aiScore=3;const fe=document.createElement("div");fe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",fe.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(fe),setTimeout(()=>{fe.remove(),ht(t,e,i)},2500)}else me()},1e3)}(H=document.getElementById("match-quit"))==null||H.addEventListener("click",()=>{Ke(t),confirm("Abandonner ? Résultat : défaite 3-0")&&(e.homeScore=0,e.aiScore=3,ht(t,e,i))}),(K=document.getElementById("view-ai"))==null||K.addEventListener("click",()=>qr(e,i)),(X=document.getElementById("toggle-history"))==null||X.addEventListener("click",()=>{var B;(B=document.getElementById("match-history-panel"))==null||B.classList.add("open")}),(A=document.getElementById("close-history"))==null||A.addEventListener("click",()=>{var B;(B=document.getElementById("match-history-panel"))==null||B.classList.remove("open")}),(_=document.getElementById("btn-action"))==null||_.addEventListener("click",()=>{e.selected.length!==0&&(u?Tr(t,e,i):y&&Ir(t,e,i))}),(O=document.getElementById("btn-results"))==null||O.addEventListener("click",()=>ht(t,e,i)),(J=document.getElementById("btn-pass"))==null||J.addEventListener("click",()=>{if(e.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Gi(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),ht(t,e,i);return}e.phase="ai-attack",$e(t,e,i),setTimeout(()=>to(t,e,i),800)}),t.querySelectorAll(".match-slot-hit").forEach(B=>{B.addEventListener("click",()=>Lr(B,e,t,i))}),t.querySelectorAll(".match-used-hit").forEach(B=>{B.addEventListener("click",()=>ji(t,e,i,null,B.dataset.cardId))}),t.querySelectorAll(".gc-mini").forEach(B=>{u?B.addEventListener("click",()=>Mr(B.dataset.gcId,B.dataset.gcType,t,e,i)):(B.style.opacity="0.35",B.style.cursor="default",B.addEventListener("click",()=>Tt("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(re=document.getElementById("boost-card"))==null||re.addEventListener("click",()=>Br(t,e,i)),t.querySelectorAll(".sub-btn-col").forEach(B=>{B.addEventListener("click",()=>ji(t,e,i,B.dataset.subId))}),(le=document.getElementById("sub-btn-main"))==null||le.addEventListener("click",()=>ji(t,e,i))}function Lr(t,e,i,o){const a=t.dataset.cardId,n=t.dataset.role,r=e.selected.findIndex(s=>s.cardId===a);if(r!==-1)e.selected.splice(r,1);else{if(e.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const s=(e.homeTeam[n]||[]).find(d=>d.cardId===a);s&&e.selected.push({...s,_role:n,_line:n})}$e(i,e,o)}function eo(t,e,i){t.matchId&&v.from("matches").update({last_player_id:i}).eq("id",t.matchId).then(()=>{})}function Tr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ue(),eo(e,i,i.state.profile.id);const o=e.selected.map(n=>{const r=(e.homeTeam[n._role]||[]).find(d=>d.cardId===n.cardId)||n,s=["GK","DEF"].includes(n._role);return{...r,_line:n._role,...s?{note_a:Math.max(1,Number(r.note_a)||0)}:{}}}),a=ri(o,e.modifiers.home,e.formation);e.pendingAttack={...a,players:[...o],side:"home"},e.selected.forEach(n=>{const r=(e.homeTeam[n._role]||[]).find(s=>s.cardId===n.cardId);r&&(r.used=!0)}),e.log.push({text:`⚔️ Vous attaquez : ${a.total} (base ${a.base}${a.links?` +${a.links} liens`:""}) — ${e.selected.map(n=>n.name).join(", ")}`,type:"info"}),e.selected=[],e.modifiers.home={},e.phase="ai-defense",$e(t,e,i),setTimeout(()=>zr(t,e,i),1200)}function Ir(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ue(),eo(e,i,i.state.profile.id);const o=e.stadiumDef||null,a=e.selected.map(d=>{const c=(e.homeTeam[d._role]||[]).find(f=>f.cardId===d.cardId)||d,l=c.stadiumBonus||o&&(o.club_id&&String(c.club_id)===String(o.club_id)||o.country_code&&c.country_code===o.country_code)||!1;return{...c,_line:d._role,stadiumBonus:l}}),n=ai(a,e.modifiers.home,e.formation);e.selected.forEach(d=>{const c=(e.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId);c&&(c.used=!0)});const r=Zi(e.pendingAttack.total,n.total,e.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(e.pendingAttack.players||[]).map(d=>Ve(d)),homePlayers:e.selected.map(d=>{const c=(e.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId)||d;return Ve(c)}),homeTotal:n.total,aiTotal:e.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(r.shielded)s.text="🛡️ Bouclier ! But annulé.",e.log.push(s);else if(r.goal){e.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${e.pendingAttack.total} > ${n.total})`,e.log.push(s),e.selected=[],e.modifiers.home={},e.pendingAttack=null,$e(t,e,i),Ze(s.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${n.total} ≥ ${e.pendingAttack.total})`,e.log.push(s);e.selected=[],e.modifiers.home={},e.pendingAttack=null,Mt(t,e,i,"home-attack")}function Sr(t){if(t.aiSubsUsed>=t.aiMaxSubs)return;const e=Object.values(t.aiTeam).flat().filter(d=>d.used);if(!e.length)return;const i=(t.aiSubs||[]).filter(d=>!t.aiUsedSubIds.includes(d.cardId));if(!i.length)return;const o=e[Math.floor(Math.random()*e.length)],a=i.find(d=>d.job===o.job)||i[0],n={...a,used:!1,_line:o._line,_col:o._col},r=t.aiTeam[o._line],s=r.findIndex(d=>d.cardId===o.cardId);s!==-1&&(r[s]=n),t.aiUsedSubIds.push(a.cardId),t.aiSubsUsed++,t.log.push({text:`🔄 IA : ${a.firstname} ${a.name} remplace ${o.firstname} ${o.name}`,type:"info"})}function Ar(t){var o;if(!((o=t.aiGcCards)!=null&&o.length))return;const e=t.aiGcCards.filter(a=>!t.aiUsedGc.includes(a.id));if(!e.length||Math.random()>.3)return;const i=e[Math.floor(Math.random()*e.length)];switch(t.aiUsedGc.push(i.id),ze[i.gc_type],i.gc_type){case"Boost+2":{const a=Object.values(t.aiTeam).flat().filter(n=>!n.used);if(a.length){const n=a[Math.floor(Math.random()*a.length)];n.boost=(n.boost||0)+2}break}case"Boost+3":{const a=Object.values(t.aiTeam).flat().filter(n=>!n.used);if(a.length){const n=a[Math.floor(Math.random()*a.length)];n.boost=(n.boost||0)+3}break}case"Remplacement+":t.aiMaxSubs=(t.aiMaxSubs||3)+1;break;case"Bouclier":t.modifiers.ai.shield=!0;break;case"Nul+1":t.modifiers.ai.drawBonus=(t.modifiers.ai.drawBonus||0)+1;break}t.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function to(t,e,i){eo(e,i,null),Sr(e),Ar(e);let o=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(l=>!l.used),a=!1;if(!o.length){const l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(b=>!b.used),f=Ut(e.homeTeam);if(f||l.length===0){const b=(e.aiTeam.DEF||[]).filter(g=>!g.used),x=(e.aiTeam.GK||[]).filter(g=>!g.used);o=f?b.length?b:x:[...b,...x],a=!0}}const n=Ko(o,"attack",e.difficulty);if(!n.length){Ri(t,e,i);return}a&&n.forEach(l=>{l._line=l._line||l.job,l.note_a=Math.max(1,Number(l.note_a)||0)});const r=ri(n,e.modifiers.ai,e.formation);e.pendingAttack={...r,players:n,side:"ai"},n.forEach(l=>{l.used=!0}),e.log.push({text:`🤖 IA attaque : ${r.total} (${n.map(l=>l.name).join(", ")})`,type:"info"}),e.modifiers.ai={};const s=[...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(l=>!l.used),c=(e.homeSubs||[]).filter(l=>!(e.usedSubIds||[]).includes(l.cardId)).length>0&&e.subsUsed<e.maxSubs;if(s.length===0&&!c){if(n.length===1&&(n[0]._line==="GK"||n[0].job==="GK")&&Ut(e.homeTeam)&&e.homeScore===e.aiScore){e.aiScore++,wi(t,e,i,"ai",n[0]);return}e.aiScore++;const f={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:n.map(b=>Ve(b)),aiTotal:r.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};e.log.push(f),e.pendingAttack=null,$e(t,e,i),Ze(f.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}e.phase="defense",$e(t,e,i)}function zr(t,e,i){var c,l;const o=[...e.aiTeam.GK||[],...e.aiTeam.DEF||[],...e.aiTeam.MIL||[]],a=Ko(o,"defense",e.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(e.aiTeam[f]||[]).filter(b=>!b.used)).length){const f=((c=e.pendingAttack)==null?void 0:c.players)||[];if(f.length===1&&(f[0]._line==="GK"||f[0].job==="GK")&&e.homeScore===e.aiScore){e.homeScore++,wi(t,e,i,"home",f[0]);return}e.homeScore++;const x={type:"duel",isGoal:!0,homeScored:!0,homePlayers:f.map(g=>Ve(g)),homeTotal:((l=e.pendingAttack)==null?void 0:l.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};e.log.push(x),e.modifiers.ai={},e.pendingAttack=null,$e(t,e,i),Ze(x.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}const r=a.length>0?ai(a,e.modifiers.ai,e.formation).total:0;a.forEach(f=>{f.used=!0});const s=Zi(e.pendingAttack.total,r,e.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(e.pendingAttack.players||[]).map(f=>Ve(f)),aiPlayers:a.map(f=>Ve(f)),homeTotal:e.pendingAttack.total,aiTotal:r,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier IA !",e.log.push(d);else if(s.goal){e.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${e.pendingAttack.total} > ${r})`,e.log.push(d),e.modifiers.ai={},e.pendingAttack=null,$e(t,e,i),Ze(d.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}else d.text=`🧤 IA défend (${r} ≥ ${e.pendingAttack.total})`,e.log.push(d);e.modifiers.ai={},e.pendingAttack=null,Mt(t,e,i,"ai-attack")}function Mt(t,e,i,o){if(e.round++,!an(t,e,i)){if(io(e)){ht(t,e,i);return}if(o==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(r=>!r.used))){Ri(t,e,i);return}e.phase="attack",$e(t,e,i)}else{if(!["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(r=>!r.used))){Ri(t,e,i);return}e.phase="ai-attack",$e(t,e,i),setTimeout(()=>to(t,e,i),800)}}}function Ut(t){return!["GK","DEF","MIL","ATT"].some(e=>(t[e]||[]).some(i=>!i.used))}function Eo(t){const e=(t.GK||[]).some(o=>!o.used),i=["DEF","MIL","ATT"].some(o=>(t[o]||[]).some(a=>!a.used));return e&&!i}function an(t,e,i){if(e.homeScore!==e.aiScore)return!1;if(Eo(e.homeTeam)&&Ut(e.aiTeam)){const o=(e.homeTeam.GK||[]).find(a=>!a.used);return o?(o.used=!0,e.homeScore++,wi(t,e,i,"home",o),!0):!1}if(Eo(e.aiTeam)&&Ut(e.homeTeam)){const o=(e.aiTeam.GK||[]).find(a=>!a.used);return o?(o.used=!0,e.aiScore++,wi(t,e,i,"ai",o),!0):!1}return!1}function wi(t,e,i,o,a){e.log.push({type:"duel",isGoal:!0,homeScored:o==="home",homePlayers:o==="home"?[Ve(a)]:[],aiPlayers:o==="ai"?[Ve(a)]:[],text:`⚽ DERNIER CORNER — Le gardien ${o==="home"?"":"adverse "}marque !`});const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(n);const r=(s,d)=>new Promise(c=>{n.innerHTML=`<div style="font-size:32px;font-weight:900;color:${d};letter-spacing:2px;animation:lcFade 1.4s ease both">${s}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(c,1400)});(async()=>(await r("⚽ DERNIER CORNER","#FFD700"),await r("🧤 LE GARDIEN MONTE !","#4fc3f7"),n.remove(),e.pendingAttack=null,$e(t,e,i),Ze([Ve(a)],e.homeScore,e.aiScore,o==="home",()=>{if(io(e)){ht(t,e,i);return}Mt(t,e,i,o==="home"?"ai-attack":"home-attack")})))()}function io(t){const e=["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(a=>!a.used)),i=["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(a=>!a.used));return!e&&!i}function Gi(t,e){return!(["MIL","ATT"].some(a=>(t[a]||[]).some(n=>!n.used))||Ut(e)||!["MIL","ATT"].some(a=>(e[a]||[]).some(n=>!n.used)))}function Ri(t,e,i){if(!an(t,e,i)){if(io(e)){ht(t,e,i);return}if(Gi(e.homeTeam,e.aiTeam)&&Gi(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),ht(t,e,i);return}e.phase="attack",$e(t,e,i)}}function ji(t,e,i,o=null,a=null){var x,g;if(e.phase!=="attack"){Tt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(e.usedSubIds||(e.usedSubIds=[]),e.subsUsed>=e.maxSubs){Tt(`Maximum ${e.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const n=Object.entries(e.homeTeam).flatMap(([p,u])=>(u||[]).filter(y=>y.used).map(y=>({...y,_line:y._line||p}))),r=e.homeSubs.filter(p=>!e.usedSubIds.includes(p.cardId));if(!n.length){Tt("Aucun joueur utilisé à remplacer");return}if(!r.length){Tt("Aucun remplaçant disponible");return}let s=Math.max(0,n.findIndex(p=>p.cardId===a));const d=((x=n[s])==null?void 0:x._line)||((g=n[s])==null?void 0:g.job);let c=o?Math.max(0,r.findIndex(p=>p.cardId===o)):Math.max(0,r.findIndex(p=>p.job===d)),l=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function b(){var m,T,$,S,F,H;const p=n[s],u=r[c],y=Math.min(130,Math.round((window.innerWidth-90)/2)),w=Math.round(y*1.35),h=K=>`background:rgba(255,255,255,0.12);border:none;color:${K?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${K?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${e.subsUsed}/${e.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${h(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${u?vt({...u,used:!1,boost:0},y,w):"<div>—</div>"}</div>
        <button id="in-down" style="${h(c>=r.length-1)}" ${c>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${r.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${h(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?vt({...p,used:!1,boost:0},y,w):"<div>—</div>"}</div>
        <button id="out-down" style="${h(s>=n.length-1)}" ${s>=n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${n.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(m=f.querySelector("#sub-close"))==null||m.addEventListener("click",()=>f.remove()),(T=f.querySelector("#out-up"))==null||T.addEventListener("click",()=>{s>0&&(s--,b())}),($=f.querySelector("#out-down"))==null||$.addEventListener("click",()=>{s<n.length-1&&(s++,b())}),(S=f.querySelector("#in-up"))==null||S.addEventListener("click",()=>{c>0&&(c--,b())}),(F=f.querySelector("#in-down"))==null||F.addEventListener("click",()=>{c<r.length-1&&(c++,b())});const E=(K,X,A,_)=>{const O=f.querySelector("#"+K);if(!O)return;let J=0;O.addEventListener("touchstart",re=>{J=re.touches[0].clientY},{passive:!0}),O.addEventListener("touchend",re=>{const le=re.changedTouches[0].clientY-J;if(Math.abs(le)<30)return;const B=X();le<0&&B<_-1?(A(B+1),b()):le>0&&B>0&&(A(B-1),b())},{passive:!0})};E("in-panel",()=>c,K=>c=K,r.length),E("out-panel",()=>s,K=>s=K,n.length),(H=f.querySelector("#sub-confirm"))==null||H.addEventListener("click",K=>{if(K.preventDefault(),K.stopPropagation(),l)return;l=!0;const X=n[s],A=r[c];if(!X||!A)return;let _=null,O=-1;for(const[re,le]of Object.entries(e.homeTeam)){const B=(le||[]).findIndex(U=>U.cardId===X.cardId);if(B!==-1){_=re,O=B;break}}if(O===-1||!_){Tt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const J={...A,_line:_,_col:X._col||0,used:!1,boost:0};e.homeTeam[_].splice(O,1,J),e.usedSubIds||(e.usedSubIds=[]),e.usedSubIds.push(A.cardId),e.subsUsed++,e.selected=[],e.log.push({type:"sub",subSide:"home",clubName:e.clubName,outPlayer:{name:X.name,firstname:X.firstname,note:Pe(X,_),portrait:Ct(X),job:X.job,country_code:X.country_code,rarity:X.rarity,clubName:X.clubName,clubLogo:X.clubLogo},inPlayer:{name:A.name,firstname:A.firstname,note:Pe(A,_),portrait:Ct(A),job:A.job,country_code:A.country_code,rarity:A.rarity,clubName:A.clubName,clubLogo:A.clubLogo},text:`🔄 ${A.firstname} ${A.name} remplace ${X.firstname} ${X.name}`}),f.remove(),wr(X,A,()=>$e(t,e,i))})}document.body.appendChild(f),b()}function Mr(t,e,i,o,a){var b,x;const n=(o.gcDefs||[]).find(g=>g.name===e),r=ze[e]||{icon:"⚡",desc:"Carte spéciale."},s=(n==null?void 0:n.name)||e,d=(n==null?void 0:n.effect)||r.desc,c=n!=null&&n.image_url?`/icons/${n.image_url}`:null,l=r.icon||"⚡",f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",f.innerHTML=`
    ${it(s,c,l,d,{width:190})}
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(f),(b=f.querySelector("#gc-back"))==null||b.addEventListener("click",()=>f.remove()),(x=f.querySelector("#gc-use"))==null||x.addEventListener("click",()=>{f.remove(),jr(t,e,i,o,a)})}function fi(t,e,i,o,a,n){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function d(){var c,l;r.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${e}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${t.map(f=>{const b=f._line||f.job||"MIL",x=s.find(p=>p.cardId===f.cardId),g=Se({...f,_evolution_bonus:0},{width:90,showStad:!0,role:b,extraNote:f.boost||0});return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="position:relative;border-radius:8px;${x?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          ${g}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${e})
      </button>
    </div>`,(c=r.querySelector("#gc-picker-close"))==null||c.addEventListener("click",()=>r.remove()),r.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const b=f.dataset.cid,x=t.find(p=>p.cardId===b);if(!x)return;const g=s.findIndex(p=>p.cardId===b);g>-1?s.splice(g,1):s.length<e&&s.push(x),d()})}),(l=r.querySelector("#gc-picker-confirm"))==null||l.addEventListener("click",()=>{r.remove(),n(s)})}d(),document.body.appendChild(r)}const Cr={BOOST_STAT:({value:t=1,count:e=1,roles:i=[]},o,a,n)=>{const r=Object.entries(o.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,d])=>d.filter(c=>!c.used).map(c=>({...c,_line:s})));return r.length?(fi(r,e,`Choisir ${e} joueur(s) à booster (+${t})`,a,o,s=>{s.forEach(d=>{const c=(o.homeTeam[d._line]||[]).find(l=>l.cardId===d.cardId);c&&(c.boost=(c.boost||0)+t,o.log.push({text:`⚡ +${t} sur ${c.name}`,type:"info"}))}),$e(a,o,n)}),!0):(o.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),$e(a,o,n),!0)},DEBUFF_STAT:({value:t=1,count:e=1,roles:i=[],target:o="ai"},a,n,r)=>{const s=o==="home"?a.homeTeam:a.aiTeam,d=o==="ai"?"adverse":"allié",c=Object.entries(s).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,f])=>f.filter(b=>!b.used).map(b=>({...b,_line:l})));return c.length?(fi(c,e,`Choisir ${e} joueur(s) ${d}(s) à débuffer (-${t})`,n,a,l=>{l.forEach(f=>{const x=((o==="home"?a.homeTeam:a.aiTeam)[f._line]||[]).find(g=>g.cardId===f.cardId);x&&(x.boost=(x.boost||0)-t,a.log.push({text:`🎯 -${t} sur ${x.name}${o==="ai"?" (IA)":""}`,type:"info"}))}),$e(n,a,r)}),!0):(a.log.push({text:`🎯 Aucun joueur ${d} disponible`,type:"info"}),$e(n,a,r),!0)},GRAY_PLAYER:({count:t=1,roles:e=[],target:i="ai"},o,a,n)=>{const r=i==="home"?o.homeTeam:o.aiTeam,s=i==="ai"?"adverse":"allié",d=Object.entries(r).filter(([c])=>!e.length||e.includes(c)).flatMap(([c,l])=>l.filter(f=>!f.used).map(f=>({...f,_line:c})));return d.length?(fi(d,t,`Choisir ${t} joueur(s) ${s}(s) à exclure`,a,o,c=>{c.forEach(l=>{const b=((i==="home"?o.homeTeam:o.aiTeam)[l._line]||[]).find(x=>x.cardId===l.cardId);b&&(b.used=!0,o.log.push({text:`❌ ${b.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),$e(a,o,n)}),!0):(o.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),$e(a,o,n),!0)},REVIVE_PLAYER:({count:t=1,roles:e=[]},i,o,a)=>{const n=Object.entries(i.homeTeam).filter(([r])=>!e.length||e.includes(r)).flatMap(([r,s])=>s.filter(d=>d.used).map(d=>({...d,_line:r})));return n.length?(fi(n,t,`Choisir ${t} joueur(s) à ressusciter`,o,i,r=>{r.forEach(s=>{const d=(i.homeTeam[s._line]||[]).find(c=>c.cardId===s.cardId);d&&(d.used=!1,i.log.push({text:`💫 ${d.name} ressuscité !`,type:"info"}))}),$e(o,i,a)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),$e(o,i,a),!0)},REMOVE_GOAL:({},t)=>(t.aiScore>0?(t.aiScore--,t.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):t.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},t)=>(t.homeScore===t.aiScore?(t.homeScore++,t.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):t.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:t=1},e)=>(e.maxSubs=(e.maxSubs||3)+t,e.log.push({text:`🔄 +${t} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function jr(t,e,i,o,a){o.usedGc.push(t);const n=o.gcDefs||[],r=n.find(d=>d.name===e)||n.find(d=>{var c;return((c=d.name)==null?void 0:c.toLowerCase().trim())===(e==null?void 0:e.toLowerCase().trim())});let s=!1;if(r!=null&&r.effect_type&&r.effect_type!=="CUSTOM"){const d=Cr[r.effect_type];d?d(r.effect_params||{},o,i,a)||(s=!0):(a.toast(`Effet "${r.effect_type}" non implémenté`,"error"),s=!0)}else{switch(e){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const d=Object.entries(o.homeTeam).flatMap(([c,l])=>(l||[]).filter(f=>f.used).map(f=>({...f,_line:c})));d.length?(d[0].used=!1,o.log.push({text:`💫 ${d[0].name} ressuscité !`,type:"info"})):o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const d=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(c=>!c.used);if(d.length){const c=d.sort((l,f)=>Pe(f,"ATT")-Pe(l,"ATT"))[0];c.used=!0,o.log.push({text:`❄️ ${c.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}v.from("cards").delete().eq("id",t).then(()=>{}),s&&$e(i,o,a)}function Br(t,e,i){const o=Object.values(e.homeTeam).flat().filter(a=>!a.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${e.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${o.map(a=>`
        <div class="player-boost-opt" data-card-id="${a.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${br[a.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Pe(a,a._line||a.job)}</div>
          <div style="flex:1"><b>${a.firstname} ${a.name}</b><div style="font-size:11px;color:#888">${a._line||a.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${e.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.cardId;for(const r of["GK","DEF","MIL","ATT"]){const s=(e.homeTeam[r]||[]).find(d=>d.cardId===n);if(s){s.boost=(s.boost||0)+e.boostCard.value,e.log.push({text:`⚡ Boost +${e.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}e.boostUsed=!0,i.closeModal(),$e(t,e,i)})})}async function ht(t,e,i){var f,b,x,g,p;Gt(),Ue(),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),e.phase="finished";const{state:o}=i,a=e.homeScore>e.aiScore,n=e.homeScore===e.aiScore,r=a?"victoire":n?"nul":"defaite",s=e.isSolo&&((f=e.soloLevelConfig)!=null&&f.reward_credits)&&a?Number(e.soloLevelConfig.reward_credits):Rn(e.mode,r);if(e.isSolo&&a)try{const{data:u}=await v.from("user_solo_progress").select("unlocked_level").eq("user_id",o.profile.id).maybeSingle(),y=(u==null?void 0:u.unlocked_level)||1;e.soloLevel>=y&&await v.from("user_solo_progress").upsert({user_id:o.profile.id,unlocked_level:e.soloLevel+1,updated_at:new Date().toISOString()})}catch(u){console.warn("[Solo] Erreur mise à jour progression:",u.message)}let d=null;if(e.isRankedAI)try{const{data:u}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",o.profile.id).single();if(u){const y=u.mmr??1e3,w=u.mmr_rd??350,h=u.mmr_v??.06,E=a?1:n?.5:0,m=((b=e.rankedAIData)==null?void 0:b.isPlacement)||!1,T=Mo(y,w,h,y,350,E,m);await v.from("users").update({mmr:T.mmr,mmr_rd:T.rd,mmr_v:T.v}).eq("id",o.profile.id),d=Math.round(T.mmr-y)}}catch(u){console.warn("[RankedAI] Erreur mise à jour MMR:",u.message)}e.matchId&&await v.from("matches").update({status:"finished",home_score:e.homeScore,away_score:e.aiScore,winner_id:a?o.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",e.matchId);const c={credits:(o.profile.credits||0)+s,matches_played:(o.profile.matches_played||0)+1};a?c.wins=(o.profile.wins||0)+1:n?c.draws=(o.profile.draws||0)+1:c.losses=(o.profile.losses||0)+1,await v.from("users").update(c).eq("id",o.profile.id),await i.refreshProfile();const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",l.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${a?"🏆":n?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${a?"Victoire !":n?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${e.homeScore} – ${e.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${s.toLocaleString("fr")} crédits</div>
      </div>
      ${e.isSolo&&a?`<div style="background:rgba(26,107,60,0.25);border:1px solid #1A6B3C;border-radius:12px;padding:10px;margin-bottom:8px;font-size:14px;font-weight:700">🔓 Niveau ${e.soloLevel+1} débloqué !</div>`:""}
      ${e.isRankedAI&&d!==null?`<div style="background:${d>=0?"rgba(26,107,60,0.25)":"rgba(224,48,48,0.2)"};border:1px solid ${d>=0?"#1A6B3C":"#e03030"};border-radius:12px;padding:10px;margin-bottom:8px;font-size:14px;font-weight:700">MMR ${d>=0?"↑ +":"↓ "}${d}</div>`:""}
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
      ${e.isSolo&&a?`<button class="btn btn-primary" id="res-next-level" style="width:100%;margin-top:10px;background:#D4A017;border-color:#D4A017">▶️ Niveau ${e.soloLevel+1}</button>`:""}
    </div>`,document.body.appendChild(l),(x=document.getElementById("res-home"))==null||x.addEventListener("click",()=>{l.remove(),Ke(t),i.navigate("home")}),(g=document.getElementById("res-replay"))==null||g.addEventListener("click",()=>{l.remove(),Ke(t),i.navigate("match",e.isSolo?{matchMode:e.mode,soloLevel:e.soloLevel}:{matchMode:e.mode})}),(p=document.getElementById("res-next-level"))==null||p.addEventListener("click",()=>{l.remove(),Ke(t),i.navigate("match",{matchMode:"solo",soloLevel:e.soloLevel+1})})}function qr(t,e){e.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Li(t.aiTeam,t.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Dr={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function Fr(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}async function Pr(t,e){!t||!e||await Promise.all([Lo(t,"win"),Lo(e,"loss")])}async function Lo(t,e){const{data:i}=await v.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",t).eq("card_type","player");if(!(i!=null&&i.length))return;const o=i.filter(a=>{var n,r;return((n=a.player)==null?void 0:n.rarity)==="pepite"||((r=a.player)==null?void 0:r.rarity)==="papyte"});o.length&&await Promise.all(o.map(a=>{const n=Dr[a.player.rarity],r=e==="win"?n.win:n.loss,s=a.player.note_min??1,d=a.player.note_max??10,c=Fr(a.player),l=a.current_note??c,f=Math.min(d,Math.max(s,l+r));return v.from("cards").update({current_note:f}).eq("id",a.id)}))}const Ft=t=>tn(t);async function jt(t,e,i,o,a={}){return sn(t,e,i,o,a.myGC||[],a.gcDefs||[],a.isRanked||!1,a.rankedData||null,a.stadiumDef||null,a.onMatchEnd||null,a.mlLeagueId||null,a.mlMatchId||null)}async function Nr(t,e,i){const{data:o}=await v.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!o){e.toast("Match introuvable","error"),e.navigate("home");return}const a=o.home_id===e.state.user.id;let n=null,r=null;if(o.mode==="mini_league"){const{data:s}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();s&&(n=s.league_id,r=s.id)}return sn(t,e,i,a,[],[],o.is_ranked||!1,null,null,null,n,r)}async function sn(t,e,i,o,a=[],n=[],r=!1,s=null,d=null,c=null,l=null,f=null){const{state:b,navigate:x,toast:g}=e,p=o?"p1":"p2",u=o?"p2":"p1",y=(a||[]).map(k=>k.id),w=(a||[]).map(k=>({id:k.id,gc_type:k.gc_type,_gcDef:k._gcDef||null}));t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await v.from("matches").select("*").eq("id",i).single();if(!h){g("Match introuvable","error"),x("home");return}async function E(){var ye,we;console.log("[PvP] buildGameState match:",{id:h.id,home_deck_id:h.home_deck_id,away_deck_id:h.away_deck_id,mode:h.mode,is_ranked:h.is_ranked});const[{data:k,error:L},{data:z,error:D},{data:I},{data:G}]=await Promise.all([v.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),v.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),v.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),v.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",L==null?void 0:L.message,"p2:",D==null?void 0:D.message,"p1D:",(ye=k==null?void 0:k.starters)==null?void 0:ye.length,"p2D:",(we=z==null?void 0:z.starters)==null?void 0:we.length);const P=oe=>{const Te=Number(oe.evolution_bonus)||0;return{cardId:oe.card_id,position:oe.position,id:oe.id,firstname:oe.firstname,name:oe.surname_real,country_code:oe.country_code,club_id:oe.club_id,job:oe.job,job2:oe.job2,note_g:(Number(oe.note_g)||0)+(oe.job==="GK"||oe.job2==="GK"&&Number(oe.note_g)>0?Te:0),note_d:(Number(oe.note_d)||0)+(oe.job==="DEF"||oe.job2==="DEF"&&Number(oe.note_d)>0?Te:0),note_m:(Number(oe.note_m)||0)+(oe.job==="MIL"||oe.job2==="MIL"&&Number(oe.note_m)>0?Te:0),note_a:(Number(oe.note_a)||0)+(oe.job==="ATT"||oe.job2==="ATT"&&Number(oe.note_a)>0?Te:0),evolution_bonus:Te,rarity:oe.rarity,skin:oe.skin,hair:oe.hair,hair_length:oe.hair_length,face:oe.face||null,clubName:oe.club_encoded_name||null,clubLogo:oe.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},N=((k==null?void 0:k.starters)||[]).map(oe=>P(oe)),V=((z==null?void 0:z.starters)||[]).map(oe=>P(oe)),Z=(k==null?void 0:k.formation)||"4-4-2",ie=(z==null?void 0:z.formation)||"4-4-2";let te=hi(N,Z),ee=hi(V,ie);const ne=((k==null?void 0:k.subs)||[]).map(oe=>P(oe)),se=((z==null?void 0:z.subs)||[]).map(oe=>P(oe)),be=(k==null?void 0:k.stadium_def)||(o?d:null),pe=(z==null?void 0:z.stadium_def)||(o?null:d);return be&&(te=si(te,be),yi(ne,be)),pe&&(ee=si(ee,pe),yi(se,pe)),{p1Team:te,p2Team:ee,p1Subs:ne,p2Subs:se,p1Formation:Z,p2Formation:ie,p1Name:(I==null?void 0:I.club_name)||(I==null?void 0:I.pseudo)||"Joueur 1",p2Name:(G==null?void 0:G.club_name)||(G==null?void 0:G.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:o?y:[],gc_p2:o?[]:y,gcCardsFull_p1:o?w:[],gcCardsFull_p2:o?[]:w,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:n||[],lastActionAt:new Date().toISOString()}}let m=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(console.log("[PvP] init - amIHome:",o,"gameState exists:",!!m,"match.status:",h.status,"home_id:",h.home_id,"away_id:",h.away_id,"myId:",b.profile.id),!m)if(o){m=await E(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((m==null?void 0:m.p1Team)||{}));const{data:k}=await v.from("matches").select("game_state").eq("id",i).single();!(k!=null&&k.game_state)||!Object.keys(k.game_state).length?await v.from("matches").update({game_state:m,turn_user_id:h.home_id}).eq("id",i):m=k.game_state}else{t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let k=0;k<30&&!m;k++){await new Promise(z=>setTimeout(z,400));const{data:L}=await v.from("matches").select("game_state").eq("id",i).single();L!=null&&L.game_state&&Object.keys(L.game_state).length&&(m=L.game_state),k%5===0&&console.log("[PvP] away - poll",k,"game_state:",!!(L!=null&&L.game_state))}if(!m){g("Erreur de synchronisation","error"),x("home");return}m.gc_p2=y,m.gcCardsFull_p2=w,await v.from("matches").update({game_state:m}).eq("id",i)}let T=!1,$=null,S=!1;const F=new Set,H=new Set;async function K(k){var ie,te;Gt();try{v.removeChannel(X)}catch{}const L=m[p+"Score"]||0,z=m[u+"Score"]||0;let D,I;k.winner_id?(D=k.winner_id===b.profile.id,I=!1):k.forfeit?(D=L>z,I=!1):(I=L===z,D=L>z);let G="";if(r&&o)try{const{data:ee}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.home_id).single(),{data:ne}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.away_id).single();if(ee&&ne){const se=D?1:I?.5:0,be=1-se,pe=ee.placement_matches<10,ye=ne.placement_matches<10,we=computeGlicko2(ee.mmr,ee.mmr_deviation,ee.mmr_volatility,ne.mmr,ne.mmr_deviation,se===1?1:se===0?0:.5,pe),oe=computeGlicko2(ne.mmr,ne.mmr_deviation,ne.mmr_volatility,ee.mmr,ee.mmr_deviation,be===1?1:be===0?0:.5,ye);await v.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:I?null:D?h.home_id:h.away_id,p_home_id:h.home_id,p_away_id:h.away_id,p_home_delta:we.delta,p_away_delta:oe.delta,p_home_new_rd:we.newRd,p_away_new_rd:oe.newRd,p_home_new_vol:we.newSigma,p_away_new_vol:oe.newSigma});const Te=we.delta,Ge=we.newMmr,Ie=getTier(Ge),Ye=Te>=0?"+":"",Oe=Te>=0?"#4caf50":"#ff6b6b",ot=getTier(ee.mmr);G=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Ie.id!==ot.id?`<div style="font-size:20px;font-weight:900;color:${Ie.color}">
                    ${Ge>ee.mmr?"📈":"📉"} ${ot.emoji} ${ot.label} → ${Ie.emoji} ${Ie.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Ge>ee.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Te>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Ie.color}">${Ie.emoji} ${Ie.label}</div>`}
              ${pe?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${ee.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(ee){console.error("[Ranked] MMR update error:",ee)}(ie=document.getElementById("pvp-end-overlay"))==null||ie.remove();const P=document.createElement("div");P.id="pvp-end-overlay",P.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const N=I?"🤝":D?"🏆":"😞",V=I?"MATCH NUL":D?"VICTOIRE !":"DÉFAITE",Z=I?"#fff":D?"#FFD700":"#ff6b6b";P.innerHTML=`
      <div style="font-size:64px">${N}</div>
      <div style="font-size:26px;font-weight:900;color:${Z}">${V}</div>
      ${r?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${m[p+"Name"]} ${L} – ${z} ${m[u+"Name"]}</div>
      ${k.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${D?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${G}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":r?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(P),(te=P.querySelector("#pvp-end-home"))==null||te.addEventListener("click",()=>{P.remove(),Ke(t),l?x("mini-league",{openLeagueId:l}):x(r?"ranked":"home")})}const X=v.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},k=>{var z;const L=k.new;try{if(L.status==="finished"||L.forfeit){if(T)return;T=!0,$&&(clearInterval($),$=null),Ue(),L.game_state&&(m=L.game_state),K(L);return}if(L.game_state){const D=m;m=L.game_state;const I=m._lastGC;if(I&&I.seq&&!H.has(I.seq)&&(H.add(I.seq),I.by!==p)){M(I.type,I.by,()=>U());return}const G=D[p+"Score"]||0,P=D[u+"Score"]||0,N=m[p+"Score"]||0,V=m[u+"Score"]||0,Z=N>G,ie=V>P;if((Z||ie)&&!F.has(m.round)){F.add(m.round);const te=[...m.log||[]].reverse().find(se=>se.isGoal),ee=((te==null?void 0:te.homePlayers)||[]).map(se=>({name:se.name,note:se.note,portrait:se.portrait,job:se.job}));!!((z=te==null?void 0:te.text)!=null&&z.includes("DERNIER CORNER"))?ge().then(()=>{Ze(ee,N,V,Z,()=>U())}):Ze(ee,N,V,Z,()=>U());return}U()}}catch(D){console.error("[PvP] crash:",D)}}).subscribe();async function A(k){Object.assign(m,k),m.lastActionAt=new Date().toISOString();const{error:L}=await v.from("matches").update({game_state:m}).eq("id",i);L&&g("Erreur de synchronisation","error");try{U()}catch(z){console.error("[PvP] renderPvpScreen crash:",z)}}async function _(){if(T)return;T=!0,Gt(),Ue(),$&&(clearInterval($),$=null);const k=o?h.away_id:h.home_id,L=o?"p2":"p1",z=o?"p1":"p2",D={...m,[L+"Score"]:3,[z+"Score"]:0,phase:"finished"},I=D.p1Score||0,G=D.p2Score||0;try{await v.from("matches").update({game_state:D}).eq("id",i);const{data:P,error:N}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:k,p_home_score:I,p_away_score:G,p_forfeit:!0});if(N&&console.error("[PvP] finish_pvp_match (forfeit):",N),l)try{await v.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(V){console.error("[PvP] check_and_finish_mini_league (forfeit):",V)}try{const{data:V}=await v.rpc("apply_match_rewards",{p_match_id:i});V!=null&&V.success&&!(V!=null&&V.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(V){console.error("[PvP] apply_match_rewards (forfeit):",V)}}catch{}try{v.removeChannel(X)}catch{}setTimeout(()=>{Ke(t),l?x("mini-league",{openLeagueId:l}):x("home")},800)}const O={BOOST_STAT:({value:k=1,count:L=1,roles:z=[]},D,I)=>{const G=D[p+"Team"],P=Object.entries(G).filter(([N])=>!z.length||z.includes(N)).flatMap(([N,V])=>V.filter(Z=>!Z.used).map(Z=>({...Z,_line:N})));if(!P.length){D.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),I(D);return}J(P,L,`Choisir ${L} joueur(s) à booster (+${k})`,N=>{N.forEach(V=>{const Z=(G[V._line]||[]).find(ie=>ie.cardId===V.cardId);Z&&(Z.boost=(Z.boost||0)+k,D.log.push({text:`⚡ +${k} sur ${Z.name}`,type:"info"}))}),D[p+"Team"]=G,I(D)})},DEBUFF_STAT:({value:k=1,count:L=1,roles:z=[],target:D="ai"},I,G)=>{const P=D==="home"?p:u,N=I[P+"Team"],V=D==="home"?"allié":"adverse",Z=Object.entries(N).filter(([ie])=>!z.length||z.includes(ie)).flatMap(([ie,te])=>te.map(ee=>({...ee,_line:ie})));if(!Z.length){I.log.push({text:`🎯 Aucun joueur ${V}`,type:"info"}),G(I);return}J(Z,L,`Choisir ${L} joueur(s) ${V}(s) (-${k})`,ie=>{ie.forEach(te=>{const ee=(N[te._line]||[]).find(ne=>ne.cardId===te.cardId);ee&&(ee.boost=(ee.boost||0)-k,I.log.push({text:`🎯 -${k} sur ${ee.name}`,type:"info"}))}),I[P+"Team"]=N,G(I)})},GRAY_PLAYER:({count:k=1,roles:L=[],target:z="ai"},D,I)=>{const G=z==="home"?p:u,P=D[G+"Team"],N=z==="home"?"allié":"adverse",V=Object.entries(P).filter(([Z])=>!L.length||L.includes(Z)).flatMap(([Z,ie])=>ie.filter(te=>!te.used).map(te=>({...te,_line:Z})));if(!V.length){D.log.push({text:`❌ Aucun joueur ${N}`,type:"info"}),I(D);return}J(V,k,`Choisir ${k} joueur(s) ${N}(s) à exclure`,Z=>{const ie="usedCardIds_"+G,te=new Set(D[ie]||[]);Z.forEach(ee=>{const ne=(P[ee._line]||[]).find(se=>se.cardId===ee.cardId);ne&&(ne.used=!0,te.add(ee.cardId),D.log.push({text:`❌ ${ne.name} exclu !`,type:"info"}))}),D[ie]=[...te],D[G+"Team"]=P,I(D)})},REVIVE_PLAYER:({count:k=1,roles:L=[]},z,D)=>{const I=z[p+"Team"],G=Object.entries(I).filter(([P])=>!L.length||L.includes(P)).flatMap(([P,N])=>N.filter(V=>V.used).map(V=>({...V,_line:P})));if(!G.length){z.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),D(z);return}J(G,k,`Choisir ${k} joueur(s) à ressusciter`,P=>{P.forEach(N=>{const V=(I[N._line]||[]).find(Z=>Z.cardId===N.cardId);V&&(V.used=!1,z.log.push({text:`💫 ${V.name} ressuscité !`,type:"info"}))}),z[p+"Team"]=I,D(z)})},REMOVE_GOAL:({},k,L)=>{const z=u+"Score";k[z]>0?(k[z]--,k.log.push({text:"🚫 Dernier but annulé !",type:"info"})):k.log.push({text:"🚫 Aucun but à annuler",type:"info"}),L(k)},ADD_GOAL_DRAW:({},k,L)=>{k[p+"Score"]===k[u+"Score"]?(k[p+"Score"]++,k.log.push({text:"🎯 But bonus !",type:"info"})):k.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),L(k)},ADD_SUB:({value:k=1},L,z)=>{L.maxSubs=(L.maxSubs||3)+k,L.log.push({text:`🔄 +${k} remplacement(s)`,type:"info"}),z(L)},CUSTOM:({},k,L)=>L(k)};function J(k,L,z,D){const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let G=[];function P(){var V,Z;const N=k.map(ie=>{const te=ie._line||ie.job||"MIL",ee=G.find(se=>se.cardId===ie.cardId),ne=Se({...ie,_evolution_bonus:0},{width:90,showStad:!0,role:te,extraNote:ie.boost||0});return`<div class="pp-item" data-cid="${ie.cardId}"
          style="position:relative;border-radius:8px;${ee?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${ie.used?"opacity:0.3;pointer-events:none":""}">
          ${ne}
        </div>`}).join("");I.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${z}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${G.length}/${L}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${N}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${G.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${G.length}/${L})
          </button>
        </div>`,(V=I.querySelector("#pp-close"))==null||V.addEventListener("click",()=>I.remove()),I.querySelectorAll(".pp-item").forEach(ie=>{ie.addEventListener("click",()=>{const te=ie.dataset.cid,ee=k.find(se=>se.cardId===te),ne=G.findIndex(se=>se.cardId===te);ee&&(ne>-1?G.splice(ne,1):G.length<L&&G.push(ee),P())})}),(Z=I.querySelector("#pp-confirm"))==null||Z.addEventListener("click",()=>{I.remove(),D(G)})}P(),document.body.appendChild(I)}async function re(k,L){const D=(m["gcCardsFull_"+p]||[]).find(N=>N.id===k),I=(D==null?void 0:D._gcDef)||(m.gcDefs||[]).find(N=>{var V;return N.name===L||((V=N.name)==null?void 0:V.toLowerCase().trim())===(L==null?void 0:L.toLowerCase().trim())}),G=[...m["usedGc_"+p]||[],k],P={type:L,by:p,seq:(m._gcAnimSeq||0)+1};H.add(P.seq),M(L,p,async()=>{if(I!=null&&I.effect_type&&I.effect_type!=="CUSTOM"){const V=O[I.effect_type];if(V){const Z={...m};V(I.effect_params||{},Z,async ie=>{ie["usedGc_"+p]=G,ie._lastGC=P,ie._gcAnimSeq=P.seq,await A(ie)});return}}const N={...m};switch(L){case"Remplacement+":N.maxSubs=(N.maxSubs||3)+1,N.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const V=u+"Score";N[V]>0&&(N[V]--,N.log.push({text:"🚫 But annulé",type:"info"}));break}}N["usedGc_"+p]=G,N._lastGC=P,N._gcAnimSeq=P.seq,await A(N)})}function le(k,L){const z="usedCardIds_"+k,D=new Set(m[z]||[]);L.forEach(I=>D.add(I)),m[z]=[...D]}function B(){for(const k of["p1","p2"]){const L=new Set(m["usedCardIds_"+k]||[]),z=m[k+"Team"];if(z)for(const D of["GK","DEF","MIL","ATT"])(z[D]||[]).forEach(I=>{I.used=L.has(I.cardId)})}}function U(){var ro,ao,so,lo,co,po;if(m.phase==="reveal")return de();if(m.phase==="midfield")return fe();if(m.phase==="finished")return Ne();const k=m[p+"Team"],L=m[u+"Team"];B();const z=m[p+"Score"],D=m[u+"Score"],I=m[p+"Name"],G=m[u+"Name"],P=m.phase===p+"-attack",N=m.phase===p+"-defense",V=Array.isArray(m["selected_"+p])?m["selected_"+p]:[],Z=V.map(Q=>Q.cardId),ie=window.innerWidth>=700,te=m[p+"Subs"]||[],ee=m["usedSubIds_"+p]||[],ne=te.filter(Q=>!ee.includes(Q.cardId)),se=m["gcCardsFull_"+p]||[],be=m["usedGc_"+p]||[],pe=se.filter(Q=>!be.includes(Q.id)),ye=m.boostOwner===p&&!m.boostUsed,we=[...k.MIL||[],...k.ATT||[]].filter(Q=>!Q.used),oe=[...L.MIL||[],...L.ATT||[]].filter(Q=>!Q.used),Te=!Ee(L),Ge=we.length===0&&oe.length===0&&!Te,Ie=(k.DEF||[]).filter(Q=>!Q.used),Ye=(k.GK||[]).filter(Q=>!Q.used);let Oe=[];P&&we.length===0&&(Te?(Oe=Ie.map(Q=>Q.cardId),Ie.length===0&&(Oe=Oe.concat(Ye.map(Q=>Q.cardId)))):Ge&&(Oe=[...Ie,...Ye].map(Q=>Q.cardId)));function ot(Q,xe,Me){var Ce,mt;const ke=Q._gcDef,Dt=(ke==null?void 0:ke.name)||Q.gc_type,at=(ke==null?void 0:ke.effect)||((Ce=ze[Q.gc_type])==null?void 0:Ce.desc)||"",Fe=ke!=null&&ke.image_url?`/icons/${ke.image_url}`:null,Re=((mt=ze[Q.gc_type])==null?void 0:mt.icon)||"⚡";return`<div class="pvp-gc-mini" data-gc-id="${Q.id}" data-gc-type="${Q.gc_type}" style="flex-shrink:0;cursor:pointer">
        ${it(Dt,Fe,Re,at,{width:xe})}
      </div>`}function Vt(Q,xe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${Q}px;height:${xe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(xe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(xe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(xe*.09)}px;color:#000;font-weight:900">+${m.boostValue}</div>
      </div>`}const De=(Q,xe)=>xe?Vt(95,162):ot(Q,95),We=(Q,xe)=>xe?Vt(68,116):ot(Q,68),He=ie?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ut=P?pt(p)?`<button id="pvp-action" style="${He};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${V.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${He};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:N?`<button id="pvp-action" style="${He};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${V.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${G}</div>`,nt=P&&!pt(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':P||N?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${V.length}/3 sélectionné(s)</div>`:"",Bt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${ie?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ne.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ne.map(Q=>`<div class="pvp-sub-btn" data-sub-id="${Q.cardId}" style="cursor:pointer;flex-shrink:0">${vt(Q,ie?76:44,ie?100:58)}</div>`).join("")}
    </div>`,ft=P?"attack":N?"defense":"idle",Lt=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${Ht(k,m[p+"Formation"],ft,Z,ie?1300:zt(),ie?600:Rt(),Oe)}
      </div>
    </div>`,rt=m[p+"Team"],gn=(()=>{var xe,Me,ke,Dt,at;if(N&&((xe=m.pendingAttack)!=null&&xe.players)){const Fe=m.pendingAttack;let Re="";if(V.length>0){const Ce=V.map(Xe=>{const Yt=(rt[Xe._role]||[]).find(Ai=>Ai.cardId===Xe.cardId)||Xe,Wt=rt[Xe._role]||[],li=Wt.findIndex(Ai=>Ai.cardId===Xe.cardId),Si=st(Wt.length),Xt=li>=0?Si[li]:Yt._col??1;return{...Yt,_line:Xe._role,_col:Xt}}),mt=ai(Ce,((Me=m.modifiers)==null?void 0:Me[p])||{},m[p+"Formation"]);Re=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${V.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(Ce.map(Xe=>({...Xe,used:!1})),"#3a7bd5",mt.total,"defense",m[p+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${G} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${Qe((Fe.players||[]).map(Ce=>({...Ce,used:!1})),"#ff6b6b",Fe.total,"attack",m[u+"Formation"])}</div>
          ${Re}
        </div>`}if(P&&((ke=m.pendingAttack)!=null&&ke.players)){const Fe=m.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${Qe((Fe.players||[]).map(Re=>({...Re,used:!1})),"#00ff88",Fe.total,"attack",m[p+"Formation"])}</div>
        </div>`}if(P&&!((Dt=m.pendingAttack)!=null&&Dt.players)&&V.length>0){const Fe=V.map(Ce=>{const mt=(rt[Ce._role]||[]).find(Xt=>Xt.cardId===Ce.cardId)||Ce,Xe=["GK","DEF"].includes(Ce._role),Yt=rt[Ce._role]||[],Wt=Yt.findIndex(Xt=>Xt.cardId===Ce.cardId),li=st(Yt.length),Si=Wt>=0?li[Wt]:mt._col??1;return{...mt,_line:Ce._role,_col:Si,...Xe?{note_a:Math.max(1,Number(mt.note_a)||0)}:{}}}),Re=ri(Fe,((at=m.modifiers)==null?void 0:at[p])||{},m[p+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${V.length}/3)</div>
          <div style="display:flex;justify-content:center">${Qe(Fe.map(Ce=>({...Ce,used:!1})),"#FFD700",Re.total,"attack",m[p+"Formation"])}</div>
        </div>`}const Q=(m.log||[]).slice(-1)[0];return Q?'<div style="padding:2px 4px">'+on(Q)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),no=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${z} – ${D}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${G}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${gn}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(m.log||[]).length})
      </button>`;lt(t),t.style.overflow="hidden",ie?t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${no}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Bt}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Lt}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ut}${nt}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${pe.map(Q=>De(Q,!1)).join("")}
            ${ye?De(null,!0):""}
          </div>
        </div>
      </div>`:t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${no}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ht(k,m[p+"Formation"],ft,Z,zt(),Rt(),Oe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${pe.map(Q=>We(Q,!1)).join("")}
            ${ye?We(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${P&&ne.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${P&&ne.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${P&&ne.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${P&&ne.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${ne.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(m["usedSubIds_"+p]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(m["usedSubIds_"+p]||[]).length}/${m.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${ut}${nt}</div>
        </div>
      </div>`;function qt(){const Q=t.querySelector(".match-screen");if(!Q)return;const xe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);Q.style.height=xe+"px",Q.style.minHeight=xe+"px",Q.style.maxHeight=xe+"px",Q.style.overflow="hidden";const Me=t.querySelector("#mobile-action-bar"),ke=t.querySelector("#mobile-play-area");Me&&ke&&(ke.style.paddingBottom=Me.offsetHeight+"px")}if(qt(),setTimeout(qt,120),setTimeout(qt,400),S||(S=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",qt),window.visualViewport.addEventListener("scroll",qt)),window.addEventListener("resize",qt)),function(){const xe=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!xe)return;const Me=xe.closest("#match-terrain-wrap");Me&&(Me.style.cssText="position:relative;width:100%;height:100%;padding:0"),xe.removeAttribute("width"),xe.removeAttribute("height"),xe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",xe.setAttribute("preserveAspectRatio","xMidYMid meet")}(),m._pvpResizeBound||(m._pvpResizeBound=!0,window.addEventListener("resize",()=>{const Q=t.querySelector(".terrain-wrapper svg");if(Q){const xe=Q.closest("#match-terrain-wrap");xe&&(xe.style.cssText="position:relative;width:100%;height:100%;padding:0"),Q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t.querySelectorAll(".match-slot-hit").forEach(Q=>{Q.addEventListener("click",()=>{if(!P&&!N)return;const xe=Q.dataset.cardId,Me=Q.dataset.role,ke=(k[Me]||[]).find(Re=>Re.cardId===xe);if(!ke||ke.used)return;const Dt=Oe.includes(xe);if(P&&!["MIL","ATT"].includes(Me)&&!Dt)return;Array.isArray(m["selected_"+p])||(m["selected_"+p]=[]);const at=m["selected_"+p],Fe=at.findIndex(Re=>Re.cardId===xe);Fe>-1?at.splice(Fe,1):at.length<3&&at.push({...ke,_role:Me}),U()})}),t.querySelectorAll(".match-used-hit").forEach(Q=>{Q.addEventListener("click",()=>j(Q.dataset.cardId))}),t.querySelectorAll(".pvp-sub-btn").forEach(Q=>{Q.addEventListener("click",()=>j())}),(ro=t.querySelector("#pvp-sub-open"))==null||ro.addEventListener("click",()=>j()),t.querySelectorAll(".pvp-gc-mini").forEach(Q=>{P?Q.addEventListener("click",()=>Y(Q.dataset.gcId,Q.dataset.gcType)):(Q.style.opacity="0.35",Q.style.cursor="default",Q.addEventListener("click",()=>Tt("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(ao=t.querySelector("#pvp-boost-card"))==null||ao.addEventListener("click",()=>q()),(so=t.querySelector("#pvp-action"))==null||so.addEventListener("click",Q=>{P?Q.currentTarget.dataset.pass==="1"||!pt(p)?ce():_e():N&&Ae()}),(lo=t.querySelector("#pvp-quit"))==null||lo.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&_()}),(co=t.querySelector("#pvp-view-opp"))==null||co.addEventListener("click",()=>C()),(po=t.querySelector("#pvp-toggle-history"))==null||po.addEventListener("click",()=>R()),$&&(clearInterval($),$=null),Ue(),(P||N)&&!T){let Q=30,xe=!1;const Me=()=>document.getElementById("pvp-timer"),ke=()=>{Me()&&(Me().textContent=Q+"s",Me().style.color=xe?"#ff4444":"#fff")};ke(),$=setInterval(()=>{Q--,Q<0?xe?(clearInterval($),$=null,Ue(),P&&!pt(p)?ce():_()):(xe=!0,Q=15,ke(),qo("/sounds/timer-urgent.mp3",.6)):ke()},1e3)}}function de(){lt(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${vr(m[u+"Team"],m[u+"Formation"],null,m[u+"Name"]||"Adversaire")}
    </div>`;const k=t.querySelector("svg"),L=k==null?void 0:k.closest("#match-terrain-wrap");L&&(L.style.cssText="position:relative;width:100%;height:100%;padding:0"),k&&(k.removeAttribute("width"),k.removeAttribute("height"),k.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",k.setAttribute("preserveAspectRatio","xMidYMid meet")),p==="p1"&&setTimeout(async()=>{await A({phase:"midfield"})},5e3)}let me=!1;function fe(){if(me)return;const k=m[p+"Team"].MIL||[],L=m[u+"Team"].MIL||[],z=bt(k)+yt(k),D=bt(L)+yt(L),I=z>=D;lt(t),t.innerHTML=`
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
      ${vi(k,m[p+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${vi(L,m[u+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const G=(ne,se)=>t.querySelectorAll(ne).forEach((be,pe)=>{setTimeout(()=>{be.style.opacity="1",be.style.transform="translateY(0) scale(1)"},se+pe*90)});G(".duel-card-me",150),G(".duel-card-opp",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((ne,se)=>setTimeout(()=>{ne.style.opacity="1"},se*70)),900),setTimeout(()=>{const ne=t.querySelector("#pvp-vs");ne&&(ne.style.opacity="1",ne.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(se=>se.style.opacity="1")},1250);function P(ne,se,be){const pe=document.getElementById(ne);if(!pe)return;const ye=performance.now(),we=oe=>{const Te=Math.min(1,(oe-ye)/be);pe.textContent=Math.round(se*(1-Math.pow(1-Te,3))),Te<1?requestAnimationFrame(we):pe.textContent=se};requestAnimationFrame(we)}setTimeout(()=>{P("pvp-score-me",z,800),P("pvp-score-opp",D,800)},1500);const N=m.p1Team.MIL||[],V=m.p2Team.MIL||[],Z=bt(N)+yt(N),ie=bt(V)+yt(V),te=Z>=ie?"p1":"p2";let ee=m.boostValue;ee==null&&(ee=en(),m.boostValue=ee,m.boostOwner=te,m.boostUsed=!1),me=!0,setTimeout(()=>{const ne=t.querySelector("#duel-row-"+(I?"me":"opp")),se=t.querySelector("#duel-row-"+(I?"opp":"me")),be=document.getElementById("pvp-score-me"),pe=document.getElementById("pvp-score-opp"),ye=I?be:pe,we=I?pe:be;ye&&(ye.style.fontSize="80px",ye.style.color=I?"#FFD700":"#ff6b6b",ye.style.animation="duelPulse .5s ease"+(I?",duelGlow 1.5s ease infinite .5s":"")),we&&(we.style.opacity="0.25"),setTimeout(()=>{ne&&(ne.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ne.style.zIndex="5"),setTimeout(()=>{const oe=document.getElementById("duel-shock");oe&&(oe.style.animation="shockwave .5s ease-out forwards"),se&&(se.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ie;const oe=document.getElementById("pvp-duel-finale");if(!oe)return;const Te=m.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+ee+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ge=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;oe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(I?"⚽ "+m[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+m[u+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Te+Ge,oe.style.transition="opacity .45s ease",oe.style.opacity="1",oe.style.pointerEvents="auto",(Ie=document.getElementById("pvp-start-match"))==null||Ie.addEventListener("click",async()=>{const Ye=te;await A({phase:Ye+"-attack",attacker:Ye,round:1,boostValue:ee,boostUsed:!1,boostOwner:Ye})})},600)},700)},2800)}function M(k,L,z){var se,be;const D=(m.gcDefs||[]).find(pe=>{var ye;return pe.name===k||((ye=pe.name)==null?void 0:ye.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),I={purple:"#b06ce0",light_blue:"#00d4ef"}[D==null?void 0:D.color]||"#b06ce0",G=(D==null?void 0:D.name)||k,P=(D==null?void 0:D.effect)||((se=ze[k])==null?void 0:se.desc)||"",N=D!=null&&D.image_url?`/icons/${D.image_url}`:null,V=((be=ze[k])==null?void 0:be.icon)||"⚡",ie=L===p?"Vous":m[L+"Name"]||"Adversaire",te=document.createElement("div");te.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",te.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{filter:drop-shadow(0 0 20px ${I}66)}50%{filter:drop-shadow(0 0 40px ${I}cc)}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${I};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${ie} joue une carte</div>
      <div style="animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        ${it(G,N,V,P,{width:200})}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(te);let ee=!1;const ne=()=>{ee||(ee=!0,te.remove(),setTimeout(()=>z&&z(),50))};te.addEventListener("click",ne),setTimeout(ne,3e3)}function Y(k,L){var ie,te,ee,ne;const D=(m["gcCardsFull_"+p]||[]).find(se=>se.id===k),I=D==null?void 0:D._gcDef,G=(I==null?void 0:I.name)||L,P=(I==null?void 0:I.effect)||((ie=ze[L])==null?void 0:ie.desc)||"Carte spéciale.",N=I!=null&&I.image_url?`/icons/${I.image_url}`:null,V=((te=ze[L])==null?void 0:te.icon)||"⚡",Z=document.createElement("div");Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",Z.innerHTML=`
      ${it(G,N,V,P,{width:190})}
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(Z),(ee=Z.querySelector("#pvp-gc-back"))==null||ee.addEventListener("click",()=>Z.remove()),(ne=Z.querySelector("#pvp-gc-use"))==null||ne.addEventListener("click",()=>{Z.remove(),re(k,L)})}function q(){var D;const k=m[p+"Team"],L=Object.entries(k).flatMap(([I,G])=>(G||[]).filter(P=>!P.used).map(P=>({...P,_line:I})));if(!L.length)return;const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",z.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${m.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${L.map(I=>{const G={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[I._line]||"#555",P=Pe(I,I._line)+(I.boost||0);return`<div class="bp-item" data-cid="${I.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${G};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${I.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${P}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(z),(D=z.querySelector("#bp-close"))==null||D.addEventListener("click",()=>z.remove()),z.querySelectorAll(".bp-item").forEach(I=>{I.addEventListener("click",async()=>{const G=I.dataset.cid,P=L.find(V=>V.cardId===G);if(!P)return;const N=(k[P._line]||[]).find(V=>V.cardId===G);N&&(N.boost=(N.boost||0)+m.boostValue),z.remove(),await A({[p+"Team"]:k,boostUsed:!0})})})}function j(k=null){var ne,se;if(!(m.phase===p+"-attack")){g("Remplacement uniquement avant votre attaque","warning");return}const z=m[p+"Team"],D=m["usedSubIds_"+p]||[],I=m.maxSubs||3;if(D.length>=I){g(`Maximum ${I} remplacements atteint`,"warning");return}const G=Object.entries(z).flatMap(([be,pe])=>(pe||[]).filter(ye=>ye.used).map(ye=>({...ye,_line:be}))),P=(m[p+"Subs"]||[]).filter(be=>!D.includes(be.cardId));if(!G.length){g("Aucun joueur utilisé à remplacer","warning");return}if(!P.length){g("Aucun remplaçant disponible","warning");return}let N=Math.max(0,G.findIndex(be=>be.cardId===k));const V=((ne=G[N])==null?void 0:ne._line)||((se=G[N])==null?void 0:se.job);let Z=Math.max(0,P.findIndex(be=>be.job===V)),ie=!1;const te=document.createElement("div");te.id="pvp-sub-overlay",te.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function ee(){var Ge,Ie,Ye,Oe,ot,Vt;const be=G[N],pe=P[Z],ye=Math.min(130,Math.round((window.innerWidth-90)/2)),we=Math.round(ye*1.35),oe=De=>`background:rgba(255,255,255,0.12);border:none;color:${De?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${De?"default":"pointer"};flex-shrink:0`;te.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${D.length}/${I})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${oe(Z===0)}" ${Z===0?"disabled":""}>▲</button>
          <div>${pe?vt({...pe,used:!1,boost:0},ye,we):"<div>—</div>"}</div>
          <button id="pin-down" style="${oe(Z>=P.length-1)}" ${Z>=P.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${Z+1}/${P.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${oe(N===0)}" ${N===0?"disabled":""}>▲</button>
          <div>${be?vt({...be,used:!1,boost:0},ye,we):"<div>—</div>"}</div>
          <button id="pout-down" style="${oe(N>=G.length-1)}" ${N>=G.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${N+1}/${G.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Ge=te.querySelector("#psub-close"))==null||Ge.addEventListener("click",()=>te.remove()),(Ie=te.querySelector("#pout-up"))==null||Ie.addEventListener("click",()=>{N>0&&(N--,ee())}),(Ye=te.querySelector("#pout-down"))==null||Ye.addEventListener("click",()=>{N<G.length-1&&(N++,ee())}),(Oe=te.querySelector("#pin-up"))==null||Oe.addEventListener("click",()=>{Z>0&&(Z--,ee())}),(ot=te.querySelector("#pin-down"))==null||ot.addEventListener("click",()=>{Z<P.length-1&&(Z++,ee())});const Te=(De,We,He,ut)=>{const nt=te.querySelector("#"+De);if(!nt)return;let Bt=0;nt.addEventListener("touchstart",ft=>{Bt=ft.touches[0].clientY},{passive:!0}),nt.addEventListener("touchend",ft=>{const Lt=ft.changedTouches[0].clientY-Bt;if(Math.abs(Lt)<30)return;const rt=We();Lt<0&&rt<ut-1?(He(rt+1),ee()):Lt>0&&rt>0&&(He(rt-1),ee())},{passive:!0})};Te("pin-panel",()=>Z,De=>Z=De,P.length),Te("pout-panel",()=>N,De=>N=De,G.length),(Vt=te.querySelector("#psub-confirm"))==null||Vt.addEventListener("click",async De=>{if(De.preventDefault(),De.stopPropagation(),ie)return;ie=!0;const We=G[N],He=P[Z];if(!We||!He)return;const ut=We._line,nt=(z[ut]||[]).findIndex(Lt=>Lt.cardId===We.cardId);if(nt===-1){g("Erreur : joueur introuvable","error"),te.remove();return}const Bt={...He,_line:ut,position:We.position,used:!1,boost:0};z[ut].splice(nt,1,Bt);const ft=[...D,He.cardId];te.remove(),W(We,He,async()=>{await A({[p+"Team"]:z,[u+"Team"]:m[u+"Team"],["usedSubIds_"+p]:ft})})})}document.body.appendChild(te),ee()}function W(k,L,z){const D={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const G=(V,Z,ie)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${Z};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${ie}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${D[V.job]||"#555"};border:3px solid ${Z};position:relative;overflow:hidden;margin:0 auto">
        ${Ct(V)?`<img src="${Ct(V)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(V.name||"").slice(0,12)}</div>
    </div>`;I.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${G(L,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${G(k,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(I);let P=!1;const N=()=>{P||(P=!0,I.remove(),setTimeout(()=>z(),50))};I.addEventListener("click",N),setTimeout(N,2200)}function C(){var L;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",k.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${m[u+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Li(m[u+"Team"],m[u+"Formation"],null,[],zt(),Rt())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(k),(L=k.querySelector("#pvp-opp-close"))==null||L.addEventListener("click",()=>k.remove())}function R(){var z;const k=m.log||[],L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",L.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${k.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...k].reverse().map(D=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${D.type==="goal"?"#FFD700":D.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${D.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(L),(z=L.querySelector("#pvp-hist-close"))==null||z.addEventListener("click",()=>L.remove())}async function ce(){if(m.phase!==p+"-attack")return;const k=p==="p1"?"p2":"p1",L=(m.round||0)+1,z=[...m.log||[]];z.push({type:"info",text:`⏭️ ${m[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const D=Le(m),I=pt(k),G=D||!I?"finished":k+"-attack";await A({["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},pendingAttack:null,phase:G,attacker:k,round:L,log:z}),G==="finished"&&await qe(m)}function ae(k){const L=(k.GK||[]).some(D=>!D.used),z=["DEF","MIL","ATT"].some(D=>(k[D]||[]).some(I=>!I.used));return L&&!z}function he(k){return(k.p1Score||0)!==(k.p2Score||0)?null:ae(k.p1Team)&&!Ee(k.p2Team)?{side:"p1",gk:(k.p1Team.GK||[]).find(L=>!L.used)}:ae(k.p2Team)&&!Ee(k.p1Team)?{side:"p2",gk:(k.p2Team.GK||[]).find(L=>!L.used)}:null}async function ge(){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(k);const L=(z,D)=>new Promise(I=>{k.innerHTML=`<div style="font-size:32px;font-weight:900;color:${D};letter-spacing:2px;animation:lcFade 1.4s ease both">${z}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(I,1400)});await L("⚽ DERNIER CORNER","#FFD700"),await L("🧤 LE GARDIEN MONTE !","#4fc3f7"),k.remove()}async function ue(k,L){const{side:z,gk:D}=k;if(!D)return;const I=z+"Score",G=(L[I]||0)+1;D.used=!0;const P=[...L.log||[]];P.push({type:"duel",isGoal:!0,homeScored:z===p,homePlayers:z==="p1"?[Ft(D)]:[],aiPlayers:z==="p2"?[Ft(D)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${L[z+"Name"]} marque !`});const N=(L.round||0)+1,V=z==="p1"?"p2":"p1",Z={...L,[I]:G},ie=Le(Z);F.add(N),await ge();const te=z===p?G:L[p+"Score"]||0,ee=z===p?L[u+"Score"]||0:G;Ze([Ft(D)],te,ee,z===p,async()=>{await A({[I]:G,log:P,round:N,pendingAttack:null,phase:ie?"finished":V+"-attack",attacker:V,["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}}}),ie&&await qe({...m,[I]:G})})}async function _e(){const k=m[p+"Team"],L=!["GK","DEF","MIL","ATT"].some(G=>(m[u+"Team"][G]||[]).some(P=>!P.used)),z=(m["selected_"+p]||[]).map(G=>{const P=(k[G._role]||[]).find(se=>se.cardId===G.cardId)||G,N=["GK","DEF"].includes(G._role),V=k[G._role]||[],Z=V.findIndex(se=>se.cardId===G.cardId),ie=st(V.length),te=Z>=0?ie[Z]:P._col??1,ee=m.stadiumDef||m.homeStadiumDef||null,ne=P.stadiumBonus||ee&&(ee.club_id&&String(P.club_id)===String(ee.club_id)||ee.country_code&&P.country_code===ee.country_code)||!1;return{...P,_line:G._role,_col:te,stadiumBonus:ne,...N?{note_a:Math.max(1,Number(P.note_a)||0)}:{}}});if(!z.length)return;const D=ri(z,m.modifiers[p]||{},m[p+"Formation"]);le(p,z.map(G=>G.cardId)),z.forEach(G=>{const P=(k[G._role]||[]).find(N=>N.cardId===G.cardId);P&&(P.used=!0)}),m["selected_"+p]=[],U();const I=[...m.log||[]];if(L){if(z.length===1&&(z[0]._line==="GK"||z[0].job==="GK")&&(m.p1Score||0)===(m.p2Score||0)){await ue({side:p,gk:z[0]},{...m,[p+"Team"]:k,log:I});return}const P=(m[p+"Score"]||0)+1,N=z.map(ee=>Ft(ee));I.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:N,homeTotal:D.total,aiTotal:0});const V=(m.round||0)+1,Z=p==="p1"?"p2":"p1",ie={...m,[p+"Team"]:k,[p+"Score"]:P},te=Le(ie);F.add(V),Ze(N,P,m[u+"Score"]||0,!0,async()=>{await A({[p+"Team"]:k,[p+"Score"]:P,["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},pendingAttack:null,phase:te?"finished":Z+"-attack",attacker:Z,round:V,log:I}),te&&await qe({...m,[p+"Score"]:P})});return}I.push({type:"pending",text:`⚔️ ${m[p+"Name"]} attaque (${D.total})`}),await A({[p+"Team"]:k,[u+"Team"]:m[u+"Team"],pendingAttack:{...D,players:z,side:p},["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},phase:u+"-defense",log:I})}async function Ae(){const k=m[p+"Team"],L=(m["selected_"+p]||[]).map(pe=>{const ye=(k[pe._role]||[]).find(Ie=>Ie.cardId===pe.cardId)||pe,we=k[pe._role]||[],oe=we.findIndex(Ie=>Ie.cardId===pe.cardId),Te=st(we.length),Ge=oe>=0?Te[oe]:ye._col??1;return{...ye,_line:pe._role,_col:Ge}}),z=ai(L,m.modifiers[p]||{},m[p+"Formation"]);le(p,L.map(pe=>pe.cardId)),L.forEach(pe=>{const ye=(k[pe._role]||[]).find(we=>we.cardId===pe.cardId);ye&&(ye.used=!0)}),m["selected_"+p]=[],U();const D=Zi(m.pendingAttack.total,z.total,m.modifiers[p]||{}),I=m.pendingAttack.side,G=D==="attack"||(D==null?void 0:D.goal),P=I==="p1"?"p2":"p1",N=(m.round||0)+1,V=(m.pendingAttack.players||[]).map(pe=>Ft(pe)),Z=[...m.log||[]];Z.push({type:"duel",isGoal:G,homeScored:G&&I===p,text:G?`⚽ BUT de ${m[I+"Name"]} ! (${m.pendingAttack.total} vs ${z.total})`:`✋ Attaque stoppée (${m.pendingAttack.total} vs ${z.total})`,homePlayers:V,aiPlayers:L.map(pe=>Ft(pe)),homeTotal:m.pendingAttack.total,aiTotal:z.total});const ie=G?(m[I+"Score"]||0)+1:m[I+"Score"]||0,te={...m,[p+"Team"]:k,[I+"Score"]:ie},ee=Le(te),ne=ee?"finished":P+"-attack",se=!ee&&!G?he(te):null,be=async()=>{if(se){await ue(se,te);return}await A({[p+"Team"]:k,[u+"Team"]:m[u+"Team"],[I+"Score"]:ie,["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},pendingAttack:null,phase:ne,attacker:P,round:N,log:Z}),(ne==="finished"||ee)&&await qe({...m,[I+"Score"]:ie})};if(G){const pe=I===p,ye=pe?ie:m[p+"Score"]||0,we=pe?m[u+"Score"]||0:ie;F.add(N),Ze(V,ye,we,pe,be)}else await be()}function je(k){return["MIL","ATT"].some(L=>(k[L]||[]).some(z=>!z.used))}function Ee(k){return["GK","DEF","MIL","ATT"].some(L=>(k[L]||[]).some(z=>!z.used))}function Et(k){return Ee(k)&&!je(k)}function pt(k){const L=m[k+"Team"],z=m[(k==="p1"?"p2":"p1")+"Team"];return!!(je(L)||Et(L)&&!Ee(z)||Et(L)&&!je(z)&&Ee(z))}function Le(k){return!Ee(k.p1Team)&&!Ee(k.p2Team)}function Be(k){const L=k.p1Score||0,z=k.p2Score||0;return L===z?null:L>z?h.home_id:h.away_id}async function qe(k){Gt(),Ue();try{const L=Be(k),z=L?h.home_id===L?h.away_id:h.home_id:null,D=k.p1Score||0,I=k.p2Score||0,{data:G,error:P}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:L,p_home_score:D,p_away_score:I,p_forfeit:!1});if(P&&console.error("[PvP] finish_pvp_match:",P),l)try{await v.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(N){console.error("[PvP] check_and_finish_mini_league:",N)}L&&z&&Pr(L,z).catch(()=>{});try{const{data:N}=await v.rpc("apply_match_rewards",{p_match_id:i});N!=null&&N.success&&!(N!=null&&N.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(N){console.error("[PvP] apply_match_rewards:",N)}if(typeof c=="function")try{await c({homeScore:D,awayScore:I,winnerId:L,homeId:h.home_id,awayId:h.away_id,matchId:i})}catch(N){console.error("[PvP] onMatchEnd:",N)}}catch(L){console.error("[PvP] finishMatch:",L)}}function Ne(){var I;const k=m[p+"Score"],L=m[u+"Score"],z=k>L,D=k===L;lt(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${z?"🏆":D?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${z?"Victoire !":D?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${k} - ${L}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(I=document.getElementById("pvp-home"))==null||I.addEventListener("click",()=>{try{v.removeChannel(X)}catch{}Ke(t),l?x("mini-league",{openLeagueId:l}):x("home")})}U()}async function Oi(t,e,i=!1){var s,d;const{state:o,navigate:a,toast:n}=e,r=i&&((d=(s=e==null?void 0:e.state)==null?void 0:s.params)==null?void 0:d.rankedData)||null;await Ti(t,e,i?"ranked":"random",async({deckId:c,formation:l,starters:f,subsRaw:b,gcCardsEnriched:x,gcDefs:g,stadiumDef:p})=>{lt(t);const u=async y=>{await Rr(t,e,c,l,f,b,y||[],g,p,i,r)};if(!(x!=null&&x.length)){await u([]);return}Ei(t,x,u)})}async function Gr(t,e,i){return Nr(t,e,i)}async function Rr(t,e,i,o,a,n,r=[],s=[],d=null,c=!1,l=null){var K,X;const{state:f,navigate:b,toast:x}=e,g=(l==null?void 0:l.mmr)??((K=f.profile)==null?void 0:K.mmr)??1e3,p=c?ki(g):null,u=c?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",y=c?(p==null?void 0:p.color)||"#D4A017":"#FFD700";let w=!1,h=null,E=null;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${u};color:#fff;padding:32px;text-align:center;gap:20px">
      ${c?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${c?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${c?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(g)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${y};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const m=async()=>{w=!0,h&&(h.unsubscribe(),h=null),E&&(clearInterval(E),E=null);try{await v.rpc("cancel_matchmaking",{p_user_id:f.profile.id})}catch(A){console.error("[Matchmaking] cancel error:",A)}};(X=document.getElementById("cancel-mm"))==null||X.addEventListener("click",async()=>{await m(),Ke(t),b("home")});const T=async(A,_)=>{w||(w=!0,h&&(h.unsubscribe(),h=null),E&&(clearInterval(E),E=null),await jt(t,e,A,_,{myGC:r,gcDefs:s,stadiumDef:d,isRanked:c,rankedData:l,onMatchEnd:c?Or:null}))},$=f.user.id,{data:S,error:F}=c?await v.rpc("try_matchmake_ranked",{p_user_id:$,p_deck_id:i,p_mmr:g,p_range:200}):await v.rpc("try_matchmake",{p_user_id:$,p_deck_id:i});if(F||!(S!=null&&S.success)){console.error("[Matchmaking] try_matchmake error:",F||S),x("Erreur de matchmaking","error"),Ke(t),b("home");return}if(S.matched){await T(S.match_id,!1);return}const H=async()=>{if(w)return;const{data:A}=await v.from("matchmaking_queue").select("status, match_id").eq("user_id",$).maybeSingle();(A==null?void 0:A.status)==="matched"&&A.match_id&&await T(A.match_id,!0)};h=v.channel(`mm_${$}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${$}`},A=>{const _=A.new;_.status==="matched"&&_.match_id&&T(_.match_id,!0)}).subscribe(),E=setInterval(H,3e3),c?setTimeout(async()=>{if(!w){w=!0,h&&(h.unsubscribe(),h=null),E&&(clearInterval(E),E=null);try{await v.rpc("cancel_matchmaking",{p_user_id:f.profile.id})}catch(A){console.error("[Matchmaking] cancel error:",A)}x("Aucun adversaire trouvé — match contre une IA calibrée sur votre niveau","info",4e3),b("match",{matchMode:"ranked_ai",rankedData:l,presetSetup:{deckId:i,formation:o,starters:a,subsRaw:n,gcCardsEnriched:r,gcDefs:s,stadiumDef:d}})}},2e4):setTimeout(()=>{w||m()},12e4)}async function Or(t,e){const{state:i,toast:o}=e,{winnerId:a,homeId:n,awayId:r,homeScore:s,awayScore:d,matchId:c}=t,l=i.user.id,f=n===l,b=a===l,{data:x}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",l).single(),{data:g}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",f?r:n).single();if(x&&g){const p=Mo(x.mmr,x.mmr_rd,x.mmr_v,g.mmr,g.mmr_rd,b?1:0);await v.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:b?v.sql`mmr_wins + 1`:void 0,mmr_losses:b?void 0:v.sql`mmr_losses + 1`}).eq("id",l),o(b?`+MMR ↑ ${Math.round(p.mmr-x.mmr)}`:`-MMR ↓ ${Math.round(x.mmr-p.mmr)}`,b?"success":"error",4e3)}}const Hr=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Oi,resumePvpMatch:Gr},Symbol.toStringTag,{value:"Module"}));async function Ur(t,e){const{state:i,navigate:o,toast:a}=e,n=i.params||{},r=n.friendId||null,s=n.friendName||"Ami",d=!!n.isAccepting;await Ti(t,e,"friend",async({deckId:c,formation:l,starters:f,subsRaw:b,gcCardsEnriched:x,gcDefs:g,stadiumDef:p})=>{lt(t);const u=async y=>{const w=y||[];d?await Vr(t,e,c,w,g,p):await Kr(t,e,c,w,g,p,r,s)};if(!(x!=null&&x.length)){await u([]);return}Ei(t,x,u)})}async function Kr(t,e,i,o,a,n,r,s){var w;const{state:d,navigate:c,toast:l}=e,f=d.user.id,{data:b,error:x}=await v.from("friend_match_invites").insert({inviter_id:f,invitee_id:r,friend_id:r,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(x||!b){console.error("[Friend] Erreur création invitation:",x),l("Impossible de créer l'invitation","error"),c("home");return}t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let g=!1,p=null;const u=async()=>{p&&(p.unsubscribe(),p=null)};(w=document.getElementById("cancel-friend"))==null||w.addEventListener("click",async()=>{await u(),await v.from("friend_match_invites").update({status:"declined"}).eq("id",b.id),Ke(t),c("home")}),p=v.channel(`friend_invite_${b.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${b.id}`},async({new:h})=>{g||h.status!=="accepted"||!h.match_id||(g=!0,await u(),await jt(t,e,h.match_id,!0,{myGC:o,gcDefs:a,stadiumDef:n}))}).subscribe();const y=setInterval(async()=>{if(g)return;const{data:h}=await v.from("friend_match_invites").select("status, match_id").eq("id",b.id).single();(h==null?void 0:h.status)==="accepted"&&h.match_id&&(g=!0,clearInterval(y),await u(),await jt(t,e,h.match_id,!0,{myGC:o,gcDefs:a,stadiumDef:n}))},3e3);setTimeout(async()=>{g||(clearInterval(y),await u(),l("Invitation expirée","info"),c("home"))},12e4)}async function Vr(t,e,i,o,a,n){const{state:r,navigate:s,toast:d}=e,c=r.user.id,{data:l}=await v.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",c).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){d("Aucune invitation en attente","error"),s("home");return}const{data:f,error:b}=await v.rpc("accept_friend_invite",{p_invite_id:l.id,p_invitee_deck_id:i});if(b||!(f!=null&&f.success)){console.error("[Friend] Erreur accept_friend_invite:",b||f),d((f==null?void 0:f.error)||"Impossible de rejoindre le match","error"),s("home");return}await jt(t,e,f.match_id,!1,{myGC:o,gcDefs:a,stadiumDef:n})}const ln="#1A6B3C",dt="#D4A017",Zt="var(--tile-bg)",ei="var(--tile-border)",St="var(--divider)",Je="var(--tile-fg-on-page)",It="var(--tile-fg-dim)",et="var(--tile-fg-faint)",ii="var(--nav-fg,#fff)",dn="rgba(255,255,255,0.62)",Yr="rgba(255,255,255,0.4)";async function Wr(t,e){var o;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(o=e.state.params)==null?void 0:o.openLeagueId;if(i){e.state.params.openLeagueId=null,await ct(t,e,i);return}await tt(t,e)}async function tt(t,e,i="waiting"){var h,E;const{state:o}=e,a=o.profile.id,{data:n}=await v.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",a),r=(n||[]).map(m=>m.league_id),s={};(n||[]).forEach(m=>{s[m.league_id]={amount:m.prize_amount,claimed:m.prize_claimed}});const{data:d,error:c}=await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),l=c?(await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:d||[],b=(r.length?await v.from("mini_leagues").select("*, mini_league_members(count)").in("id",r).order("created_at",{ascending:!1}):{data:[]}).data||[],x=b.filter(m=>m.status==="waiting"&&!m.is_archived),g=b.filter(m=>m.status==="active"&&!m.is_archived),p=b.filter(m=>m.is_archived||m.status==="finished");let u=p;if(p.length){const{data:m}=await v.from("mini_league_matches").select("league_id").in("league_id",p.map($=>$.id)).or(`home_id.eq.${a},away_id.eq.${a}`).not("status","eq","bye"),T=new Set((m||[]).map($=>$.league_id));u=p.filter($=>T.has($.id))}const y=l.filter(m=>!r.includes(m.id)),w=[{key:"waiting",label:"🟡 En attente",count:x.length+y.length},{key:"active",label:"🟢 En cours",count:g.length},{key:"archived",label:"📁 Archivées",count:u.length}];t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${St};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${ii}">🏆 Mini League</div>
        <div style="font-size:12px;color:${dn}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${ii}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${St}">
      ${w.map(m=>`<button class="ml-tab" data-tab="${m.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===m.key?ln:"transparent"};background:none;font-size:12px;font-weight:${i===m.key?"900":"600"};color:${i===m.key?"#4ade80":Yr};cursor:pointer">${m.label}${m.count?` (${m.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Xr(x,y,a):i==="active"?Jr(g,a):Qr(u,a,s)}
    </div>
  </div>`,(h=document.getElementById("ml-create-btn"))==null||h.addEventListener("click",()=>Zr(t,e)),(E=document.getElementById("ml-refresh-list"))==null||E.addEventListener("click",()=>tt(t,e,i)),t.querySelectorAll(".ml-tab").forEach(m=>m.addEventListener("click",()=>tt(t,e,m.dataset.tab))),t.querySelectorAll("[data-league-id]").forEach(m=>m.addEventListener("click",()=>ct(t,e,m.dataset.leagueId))),t.querySelectorAll("[data-join]").forEach(m=>m.addEventListener("click",T=>{T.stopPropagation(),cn(t,e,m.dataset.join,m.dataset.type)})),t.querySelectorAll("[data-delete]").forEach(m=>m.addEventListener("click",T=>{T.stopPropagation(),Hi(t,e,m.dataset.delete,m.dataset.name,i)})),t.querySelectorAll("[data-claim-league]").forEach(m=>m.addEventListener("click",async T=>{T.stopPropagation(),m.disabled=!0,m.textContent="...";const{data:$,error:S}=await v.rpc("claim_mini_league_prize",{p_league_id:m.dataset.claimLeague,p_user_id:o.profile.id});if(S||!($!=null&&$.success)){e.toast(($==null?void 0:$.error)||"Erreur lors de la récupération","error"),tt(t,e,i);return}if(!$.already_claimed){o.profile.credits=(o.profile.credits||0)+$.prize;const F=document.getElementById("nav-credits");F&&(F.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),e.toast(`💰 +${$.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}tt(t,e,i)}))}function _i(t,e,i=!1,o=null){var d,c;const a=t.creator_id===e,n=t.pot||0,r=((c=(d=t.mini_league_members)==null?void 0:d[0])==null?void 0:c.count)||0,s=o&&o.amount>0&&!o.claimed;return`<div data-league-id="${t.id}" style="background:${Zt};border:1px solid ${s?"rgba(212,160,23,0.5)":ei};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${Je}">${t.name}</div>
      ${a?`<button data-delete="${t.id}" data-name="${t.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${It};margin-bottom:${i||s?"10px":"0"}">
      <span>${t.type==="private"?"🔒":"🌐"} ${t.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${t.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${r}/${t.max_players}</span>
      <span>💰 ${(t.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${n>0?`<span style="color:${dt};font-weight:700">🏆 ${n.toLocaleString("fr")} cr.</span>`:""}
      ${t.current_day>0?`<span>📅 J${t.current_day}/${t.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${t.id}" data-type="${t.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(t.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
    ${s?`<button data-claim-league="${t.id}" class="btn btn-sm" style="width:100%;background:${dt};color:#141000;font-weight:900;border:none">💰 Récupérer ${o.amount.toLocaleString("fr")} cr.</button>`:""}
  </div>`}function Xr(t,e,i){const o=[];return t.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${et};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),o.push(...t.map(a=>_i(a,i,!1)))),e.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${et};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),o.push(...e.map(a=>_i(a,i,!0)))),o.length?o.join(""):`<div style="text-align:center;padding:40px;color:${et}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function Jr(t,e){return t.length?t.map(i=>_i(i,e)).join(""):`<div style="text-align:center;padding:40px;color:${et}">Aucune mini league en cours.</div>`}function Qr(t,e,i={}){return t.length?t.map(o=>_i(o,e,!1,i[o.id])).join(""):`<div style="text-align:center;padding:40px;color:${et}">Aucune mini league archivée.</div>`}function Zr(t,e){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(o=>o.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=o.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var g,p,u,y;const{toast:o}=e,a=document.getElementById("ml-name").value.trim(),n=parseInt(document.getElementById("ml-max").value)||6,r=parseInt(document.getElementById("ml-fee").value)||500,s=((g=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:g.value)||"public",d=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",c=((y=(u=document.getElementById("ml-pwd"))==null?void 0:u.value)==null?void 0:y.trim())||null;if(!a){o("Le nom est obligatoire","error");return}if(r<100){o("Mise minimum : 100 crédits","error");return}if(s==="private"&&!c){o("Mot de passe requis","error");return}const{data:l,error:f}=await v.from("mini_leagues").insert({name:a,creator_id:e.state.profile.id,type:s,password:c,mode:d,max_players:n,entry_fee:r}).select().single();if(f){o("Erreur : "+f.message,"error");return}const{data:b}=await v.from("users").select("credits").eq("id",e.state.profile.id).single();if(((b==null?void 0:b.credits)||0)<r){await v.from("mini_leagues").delete().eq("id",l.id),o(`Crédits insuffisants pour la mise (${r.toLocaleString("fr")} cr.)`,"error");return}await v.from("users").update({credits:b.credits-r}).eq("id",e.state.profile.id),await v.from("mini_leagues").update({pot:r}).eq("id",l.id),await v.from("mini_league_members").insert({league_id:l.id,user_id:e.state.profile.id}),e.state.profile&&(e.state.profile.credits=b.credits-r);const x=document.getElementById("nav-credits");x&&(x.textContent=`💰 ${(e.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),o(`Mini League créée ! ${r.toLocaleString("fr")} cr. déduits.`,"success"),ct(t,e,l.id)})}function ea(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",e.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(e);const i=e.querySelector("#ml-pwd-input"),o=a=>{e.remove(),t(a)};setTimeout(()=>i==null?void 0:i.focus(),80),e.querySelector("#pwd-cancel").addEventListener("click",()=>o(null)),e.querySelector("#pwd-ok").addEventListener("click",()=>o(i.value.trim())),i.addEventListener("keydown",a=>{a.key==="Enter"&&o(i.value.trim())})})}async function cn(t,e,i,o){var f;const{toast:a,state:n}=e,r=n.profile.id;let s=null;if(o==="private"&&(s=await ea(),s===null))return;const{data:d,error:c}=await v.rpc("join_mini_league",{p_league_id:i,p_user_id:r,p_password:s});if(c||!(d!=null&&d.success)){console.error("[MiniLeague] join_mini_league:",c||d),a((d==null?void 0:d.error)||"Erreur lors de l'inscription","error");return}if(typeof e.refreshProfile=="function")await e.refreshProfile();else{const{data:b}=await v.from("users").select("credits").eq("id",r).single();n.profile&&b&&(n.profile.credits=b.credits)}const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${(((f=n.profile)==null?void 0:f.credits)||0).toLocaleString("fr")}`),a("✅ Inscrit ! Pot mis à jour.","success"),ct(t,e,i)}async function ta(t,e,i,o){const{toast:a,state:n}=e,r=n.profile.id;if(!await new Promise(b=>{const x=document.createElement("div");x.className="modal-overlay",x.style.zIndex="2100",x.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${o.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(x),x.querySelector("#lv-ok").onclick=()=>{x.remove(),b(!0)},x.querySelector("#lv-cancel").onclick=()=>{x.remove(),b(!1)}}))return;const{data:d,error:c}=await v.rpc("leave_mini_league",{p_league_id:i,p_user_id:r});if(c||!(d!=null&&d.success)){a((d==null?void 0:d.error)||"Erreur lors de la désinscription","error");return}const l=d.refund||o;n.profile&&(n.profile.credits=(n.profile.credits||0)+l);const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(n.profile.credits||0).toLocaleString("fr")}`),a(`↩️ Désinscrit · +${l.toLocaleString("fr")} cr. remboursés`,"success"),tt(t,e,"waiting")}async function Hi(t,e,i,o,a){const{toast:n}=e;if(!confirm(`Supprimer définitivement "${o}" et tous ses matchs/membres ? Action irréversible.`))return;await v.from("mini_league_matches").delete().eq("league_id",i),await v.from("mini_league_members").delete().eq("league_id",i);const{error:r}=await v.from("mini_leagues").delete().eq("id",i);if(r){n("Erreur suppression ("+r.message+")","error");return}n("Mini League supprimée avec succès","success"),tt(t,e,a)}async function ia(t,e,i){await v.from("mini_leagues").update({is_archived:!0}).eq("id",i),e.toast("Mini League archivée","success"),tt(t,e,"archived")}async function ct(t,e,i){var E,m,T,$,S,F,H,K,X;const{state:o,toast:a}=e,n=o.profile.id,[{data:r},{data:s},{data:d}]=await Promise.all([v.from("mini_leagues").select("*").eq("id",i).single(),v.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),v.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!r){a("Introuvable","error"),await tt(t,e);return}const c=(s||[]).some(A=>A.user_id===n),l=r.creator_id===n,f=(s||[]).map(A=>A.user).filter(Boolean),b=sa(f,d||[]),x=(d||[]).filter(A=>A.matchday===r.current_day),g=r.pot||0,p=r.entry_fee||100,u=x.length>0&&x.every(A=>A.status==="finished"||A.status==="bye"),y=r.current_day>=r.total_days,w=(s||[]).find(A=>A.user_id===n);t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${St};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${ii}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${ii};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${ii}">${r.name}</div>
        <div style="font-size:11px;color:${dn}">${r.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${r.max_players} · 💰 ${p} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${r.status==="active"?"rgba(74,222,128,0.16)":r.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${r.status==="active"?"#4ade80":r.status==="finished"?"#c084fc":"#eab308"}">
          ${r.status==="waiting"?"En attente":r.status==="active"?`J${r.current_day}/${r.total_days}`:"Terminée"}
        </div>
        ${g>0?`<div style="font-size:12px;font-weight:900;color:${dt};margin-top:4px">🏆 ${g.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${r.status==="waiting"?`
      <div style="background:${Zt};border:1px solid ${ei};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Je}">👥 Joueurs (${f.length}/${r.max_players})</div>
        <div style="font-size:12px;color:${It};margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*f.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*f.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*f.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*f.length*.1).toLocaleString("fr")})</div>
        ${f.map(A=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${St}">
            <div style="width:36px;height:36px;border-radius:50%;background:${A.club_color2||ln};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${A.club_color1||"#fff"}">${(A.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Je}">${A.club_name||A.pseudo}</div><div style="font-size:11px;color:${et}">@${A.pseudo}</div></div>
            ${A.id===r.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${l&&f.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${p} cr. × ${f.length})</button>`:""}
        ${l?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${c?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${p} cr.)</button>`}
        ${c&&!l?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${p.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${r.status==="active"?`
      <div style="background:${Zt};border:1px solid ${ei};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Je}">📅 Journée ${r.current_day} / ${r.total_days}</div>
        ${x.map(A=>To(A,f,n,c)).join("")}
        ${l&&u&&!y?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(r.status==="active"||r.status==="finished")&&b.length?`
      <div style="background:${Zt};border:1px solid ${ei};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Je}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${et};text-transform:uppercase;border-bottom:2px solid ${St}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${g>0&&r.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${dt}">💰</th>`:""}
          </tr></thead>
          <tbody>${b.map((A,_)=>{const O=g>0&&r.status==="finished"?_===0?Math.floor(g*.7):_===1?Math.floor(g*.2):_===2?Math.floor(g*.1):0:0;return`<tr style="border-bottom:1px solid ${St};${A.userId===n?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${_===0?dt:_<3?"#4ade80":It}">${["🥇","🥈","🥉"][_]||_+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Je}">${A.clubName}</div><div style="font-size:10px;color:${et}">@${A.pseudo}</div></td>
              <td style="text-align:center;color:${It}">${A.played}</td><td style="text-align:center;color:${It}">${A.won}-${A.drawn}-${A.lost}</td>
              <td style="text-align:center;color:${A.goalDiff>=0?"#4ade80":"#ff6b6b"}">${A.goalDiff>=0?"+":""}${A.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Je}">${A.points}</td>
              ${g>0&&r.status==="finished"?`<td style="text-align:right;font-weight:700;color:${dt}">${O?O.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${r.status!=="waiting"&&r.current_day>1?`
      <div style="background:${Zt};border:1px solid ${ei};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Je}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,r.status==="active"?r.current_day-1:r.current_day)},(A,_)=>_+1).reverse().map(A=>{const _=(d||[]).filter(O=>O.matchday===A);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${et};margin-bottom:6px">Journée ${A}</div>${_.map(O=>To(O,f,n,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${l&&!r.is_archived&&r.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${It}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const h=r.status==="waiting"?"waiting":r.status==="active"?"active":"archived";if((E=document.getElementById("ml-back"))==null||E.addEventListener("click",()=>tt(t,e,h)),(m=document.getElementById("ml-refresh"))==null||m.addEventListener("click",async A=>{const _=A.currentTarget;_.style.opacity="0.5",await ct(t,e,i)}),(T=document.getElementById("ml-start-btn"))==null||T.addEventListener("click",()=>oa(t,e,r,f)),($=document.getElementById("ml-next-day"))==null||$.addEventListener("click",()=>na(t,e,i)),(S=document.getElementById("ml-join-now"))==null||S.addEventListener("click",()=>cn(t,e,i,r.type)),(F=document.getElementById("ml-leave-btn"))==null||F.addEventListener("click",()=>ta(t,e,i,p)),(H=document.getElementById("ml-delete-btn"))==null||H.addEventListener("click",()=>Hi(t,e,i,r.name,"waiting")),(K=document.getElementById("ml-delete-now"))==null||K.addEventListener("click",()=>Hi(t,e,i,r.name,h)),(X=document.getElementById("ml-archive-btn"))==null||X.addEventListener("click",()=>ia(t,e,i)),t.querySelectorAll("[data-play-match]").forEach(A=>{A.addEventListener("click",()=>{const _=x.find(O=>O.id===A.dataset.playMatch);_&&($t(),e.navigate("match-mini-league",{mlMatchId:_.id,leagueId:i}))})}),r.status==="finished"&&w){const A=b.findIndex(_=>_.userId===n);A>=0&&A<3&&w.prize_amount>0&&!w.prize_claimed&&setTimeout(()=>ra(t,e,r,w,A),400)}}function To(t,e,i,o,a=!1){const n=f=>e.find(b=>b.id===f);if(t.is_bye){const f=n(t.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${It};text-align:center">🔵 ${(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"?"} exempté(e)</div>`}const r=n(t.home_id),s=n(t.away_id),d=t.home_id===i||t.away_id===i,c=d&&t.status==="pending"&&o&&!a,l=t.status==="finished"?`${t.home_score} - ${t.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${d?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${d?"rgba(74,222,128,0.35)":St}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Je};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(r==null?void 0:r.club_name)||(r==null?void 0:r.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${t.status==="finished"?"#4ade80":et}">${l}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Je};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${c?`<button data-play-match="${t.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${t.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function oa(t,e,i,o){const{toast:a,state:n}=e,r=aa(o.map(c=>c.id),i.mode),s=[];r.forEach((c,l)=>c.forEach(f=>s.push({league_id:i.id,matchday:l+1,home_id:f.home||f.bye,away_id:f.away||null,is_bye:!!f.bye,status:f.bye?"bye":"pending"})));const{error:d}=await v.from("mini_league_matches").insert(s);if(d){a("Erreur calendrier : "+d.message,"error");return}await v.from("mini_leagues").update({status:"active",current_day:1,total_days:r.length}).eq("id",i.id),a(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),ct(t,e,i.id)}async function na(t,e,i){const{data:o}=await v.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),a=(o.current_day||0)+1;if(a>(o.total_days||0)){ct(t,e,i);return}await v.from("mini_leagues").update({current_day:a}).eq("id",i),e.toast(`Journée ${a} commencée !`,"success"),ct(t,e,i)}async function ra(t,e,i,o,a){var b,x;const{state:n,toast:r}=e,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],d=["🥇","🥈","🥉"][a],c=o.prize_amount||s[a]||0,l=o.prize_claimed,f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",f.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${d}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${a===0?"Champion !":a===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${dt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${l?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${dt}">${c.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${a===0?"70%":a===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${l?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${dt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${c.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(f),(b=f.querySelector("#prize-close"))==null||b.addEventListener("click",()=>f.remove()),(x=f.querySelector("#claim-prize-btn"))==null||x.addEventListener("click",async g=>{const p=g.currentTarget;p.disabled=!0,p.textContent="...";const{data:u,error:y}=await v.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:n.profile.id});if(y||!(u!=null&&u.success)){console.error("[MiniLeague] claim_mini_league_prize:",y||u),r((u==null?void 0:u.error)||"Erreur lors de la récupération","error"),p.disabled=!1,p.textContent=`💰 Récupérer ${c.toLocaleString("fr")} cr.`;return}if(u.already_claimed)r("Déjà récupéré précédemment","info");else{const w=(n.profile.credits||0)+u.prize;n.profile&&(n.profile.credits=w);const h=document.getElementById("nav-credits");h&&(h.textContent=`💰 ${w.toLocaleString("fr")}`),r(`💰 +${u.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}f.remove(),ct(t,e,i.id)})}function aa(t,e){const o=t.length%2===0?[...t]:[...t,null],a=o.length;let n=o.slice(1);const r=[];for(let s=0;s<a-1;s++){const d=[],c=[o[0],...n];for(let l=0;l<a/2;l++){const f=c[l],b=c[a-1-l];f===null?d.push({bye:b}):b===null?d.push({bye:f}):d.push({home:f,away:b})}r.push(d),n=[n[n.length-1],...n.slice(0,-1)]}return e==="aller-retour"?[...r,...r.map(s=>s.map(d=>d.bye?d:{home:d.away,away:d.home}))]:r}function sa(t,e){const i={};return t.forEach(o=>{i[o.id]={userId:o.id,pseudo:o.pseudo,clubName:o.club_name||o.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),e.filter(o=>o.status==="finished"&&!o.is_bye&&o.home_score!=null).forEach(o=>{const a=i[o.home_id],n=i[o.away_id];!a||!n||(a.played++,n.played++,a.goalsFor+=o.home_score,a.goalsAgainst+=o.away_score,n.goalsFor+=o.away_score,n.goalsAgainst+=o.home_score,o.home_score>o.away_score?(a.won++,a.points+=3,n.lost++):o.home_score<o.away_score?(n.won++,n.points+=3,a.lost++):(a.drawn++,a.points++,n.drawn++,n.points++),a.goalDiff=a.goalsFor-a.goalsAgainst,n.goalDiff=n.goalsFor-n.goalsAgainst)}),Object.values(i).sort((o,a)=>a.points-o.points||a.goalDiff-o.goalDiff||a.goalsFor-o.goalsFor)}async function Io(t,e){const{state:i,navigate:o,toast:a}=e,n=i.params||{},r=n.leagueId||null,s=n.mlMatchId||null,d=i.user.id;if(!s||!r){a("Match introuvable","error"),o("mini-league");return}const{data:c,error:l}=await v.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",s).single();if(l||!c){a("Match introuvable","error"),o("mini-league",{openLeagueId:r});return}if(c.home_id!==d&&c.away_id!==d){a("Vous ne faites pas partie de ce match","error"),o("mini-league",{openLeagueId:r});return}const f=c.home_id===d;if(c.match_id){await jt(t,e,c.match_id,f,{mlLeagueId:r,mlMatchId:s});return}await Ti(t,e,"mini_league",async({deckId:b,gcCardsEnriched:x,gcDefs:g,stadiumDef:p})=>{lt(t);const u=async y=>{const{data:w,error:h}=await v.rpc("start_mini_league_match",{p_ml_match_id:s,p_user_id:d,p_deck_id:b});if(h||!(w!=null&&w.success)){console.error("[MiniLeague] start_mini_league_match error:",h||w),a((w==null?void 0:w.error)||"Impossible de lancer le match","error"),o("mini-league",{openLeagueId:r});return}if(w.matched){await jt(t,e,w.match_id,f,{mlLeagueId:r,mlMatchId:s,myGC:y||[],gcDefs:g,stadiumDef:p});return}await la(t,e,{mlMatchId:s,leagueId:r,amIHome:f,chosenGC:y,gcDefs:g,stadiumDef:p})};if(!(x!=null&&x.length)){await u([]);return}Ei(t,x,u)})}function la(t,e,{mlMatchId:i,leagueId:o,amIHome:a,chosenGC:n,gcDefs:r,stadiumDef:s}){return new Promise(d=>{var p;const{navigate:c}=e;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let l=!1;const f=async u=>{if(!l){if(l=!0,clearInterval(g),x)try{x.unsubscribe()}catch{}u&&await jt(t,e,u,a,{mlLeagueId:o,mlMatchId:i,myGC:n||[],gcDefs:r,stadiumDef:s}),d()}};(p=document.getElementById("wait-back"))==null||p.addEventListener("click",()=>{if(l=!0,clearInterval(g),x)try{x.unsubscribe()}catch{}c("mini-league",{openLeagueId:o}),d()});const b=async()=>{if(l)return;const{data:u}=await v.from("mini_league_matches").select("match_id").eq("id",i).single();u!=null&&u.match_id&&f(u.match_id)},x=v.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},u=>{var y;(y=u.new)!=null&&y.match_id&&f(u.new.match_id)}).subscribe(),g=setInterval(b,3e3);b()})}const da="/",ca=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function pa(t,e,i){let o=0;const a=document.createElement("div");a.id="tutorial-overlay",a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const n=()=>{var l,f,b;const s=e[o],d=o===e.length-1,c=Math.round((o+1)/e.length*100);a.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${c}%;background:${s.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${s.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${s.title}</div>
          <div style="font-size:11px;color:#aaa">${o+1} / ${e.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${s.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${da}icons/${s.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${s.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${s.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${o>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${d?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${s.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${d?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,a.querySelectorAll("ul,ol").forEach(x=>{x.style.paddingLeft="20px",x.style.marginTop="6px",x.style.marginBottom="6px"}),a.querySelectorAll("li").forEach(x=>{x.style.marginBottom="4px"}),a.querySelectorAll("p").forEach(x=>{x.style.marginBottom="8px"}),(l=a.querySelector("#tuto-prev"))==null||l.addEventListener("click",()=>{o--,n()}),(f=a.querySelector("#tuto-next"))==null||f.addEventListener("click",()=>{d?r():(o++,n())}),(b=a.querySelector("#tuto-skip"))==null||b.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&r()})},r=async()=>{a.remove(),t!=null&&t.id&&await v.from("users").update({tutorial_done:!0}).eq("id",t.id),i==null||i()};document.body.appendChild(a),n()}async function ua(t,e,i){if(!t||t.tutorial_done)return;let o=[];const{data:a,error:n}=await v.rpc("get_tutorial_steps");if(!n&&(a==null?void 0:a.length)>0)o=a,console.log(`[Tutorial] RPC OK → ${o.length} étapes`);else{const{data:s,error:d}=await v.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!d&&(s==null?void 0:s.length)>0?(o=s,console.log(`[Tutorial] Direct OK → ${o.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${n==null?void 0:n.message}, Direct: ${d==null?void 0:d.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const r=o.length>0?o.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):ca;pa(t,r,()=>e("boosters"))}const So={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function mi(t,e,i=0){return e?(Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0)+(e===t.job||e===t.job2?i:0):0}async function fa(t,e){t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await oo(t,e)}async function oo(t,e){const{state:i,toast:o}=e,{data:a}=await v.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:n}=await v.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),r=(a||[]).filter(p=>p.seller_id!==i.profile.id),s=n||[];t.innerHTML=`
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
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-top:2px">${r.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
    </div>

    <!-- Onglets -->
    <div style="padding:8px 16px;background:var(--tile-bg);border-bottom:1px solid var(--tile-border);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--tile-border);background:var(--tile-bg);color:var(--tile-fg-dim);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${s.length})</button>
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
  </div>`;let d="buy";const c=()=>{var p,u,y,w,h,E,m;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((y=document.getElementById("flt-country"))==null?void 0:y.value)||"").toLowerCase().trim(),job:((w=document.getElementById("flt-job"))==null?void 0:w.value)||"",rarity:((h=document.getElementById("flt-rarity"))==null?void 0:h.value)||"",note1:parseInt((E=document.getElementById("flt-note1"))==null?void 0:E.value)||0,note2:parseInt((m=document.getElementById("flt-note2"))==null?void 0:m.value)||0}};function l(p){const u=c();return p.filter(y=>{var F,H,K;const w=(F=y.card)==null?void 0:F.player;if(!w)return!1;const h=`${w.firstname} ${w.surname_real}`.toLowerCase(),E=(((H=w.clubs)==null?void 0:H.encoded_name)||"").toLowerCase(),m=(w.country_code||"").toLowerCase(),T=((K=y.card)==null?void 0:K.evolution_bonus)||0,$=mi(w,w.job,T),S=w.job2?mi(w,w.job2,T):0;return!(u.name&&!h.includes(u.name)||u.club&&!E.includes(u.club)||u.country&&!m.includes(u.country)||u.job&&w.job!==u.job||u.rarity&&w.rarity!==u.rarity||u.note1&&$<u.note1||u.note2&&S<u.note2)})}function f(p){var E,m,T;const u=(E=p.card)==null?void 0:E.player;if(!u)return"";const y=((m=p.card)==null?void 0:m.evolution_bonus)||0,w=(i.profile.credits||0)>=p.price;return`<div class="mkt-buy-tile">
      ${Se({...u,_evolution_bonus:y},{width:140})}
      <div class="mkt-price">${p.price.toLocaleString("fr")} cr.</div>
      <div class="mkt-seller">Vendeur : ${((T=p.seller)==null?void 0:T.pseudo)||"—"}</div>
      <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${w?"":"disabled"} style="font-size:12px;padding:8px 10px">${w?"Acheter":"Trop cher"}</button>
    </div>`}function b(p){var S,F,H,K;const u=(S=p.card)==null?void 0:S.player;if(!u)return"";const y=((F=p.card)==null?void 0:F.evolution_bonus)||0,w=mi(u,u.job,y),h=u.job2?mi(u,u.job2,y):0,E=p.status==="sold",m=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,T=So[u.job]||"#bbb",$=u.job2?So[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${E?"opacity:0.7":""}">
      ${m?`<img src="${m}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(H=u.clubs)!=null&&H.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${T};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${T};font-family:Arial Black,Arial">${w}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${$};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${$};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:${E?"#22c55e":"#999"};margin-top:1px">
          ${E?`✅ Vendu à ${((K=p.buyer)==null?void 0:K.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${E?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function x(){const p=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(p){if(u.style.display=d==="buy"?"flex":"none",d==="buy"){const y=l(r);p.innerHTML=y.length?`<div class="mkt-buy-grid">${y.map(f).join("")}</div>`:'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const y=s.filter(h=>h.status==="active").sort((h,E)=>new Date(E.listed_at)-new Date(h.listed_at)),w=s.filter(h=>h.status==="sold").sort((h,E)=>new Date(E.sold_at||E.listed_at)-new Date(h.sold_at||h.listed_at));p.innerHTML=(y.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${y.length})</div>`+y.map(b).join(""):"")+(w.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${w.length})</div>`+w.map(b).join(""):"")+(!y.length&&!w.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(y=>y.addEventListener("click",()=>ma(y.dataset.buy,r,t,e))),p.querySelectorAll("[data-cancel]").forEach(y=>y.addEventListener("click",()=>xa(y.dataset.cancel,t,e)))}}t.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{d=p.dataset.tab,t.querySelectorAll(".mkt-tab").forEach(u=>{const y=u===p;u.style.background=y?"var(--green)":"var(--tile-bg)",u.style.color=y?"#fff":"var(--tile-fg-dim)",u.style.borderColor=y?"var(--green)":"var(--tile-border)"}),x()})});let g;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var u;(u=document.getElementById(p))==null||u.addEventListener("input",()=>{clearTimeout(g),g=setTimeout(x,250)})}),x()}async function ma(t,e,i,o){const{state:a,toast:n,refreshProfile:r}=o,s=e.find(l=>l.id===t);if(!s)return;const d=s.price;if((a.profile.credits||0)<d){n("Crédits insuffisants","error");return}ga(s,async()=>{const{error:l}=await v.rpc("buy_market_card",{p_listing_id:t,p_buyer_id:a.profile.id});if(l){n("Erreur achat : "+l.message,"error");return}await r();const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(a.profile.credits||0).toLocaleString("fr")}`),n("✅ Carte achetée !","success"),await oo(i,o)})}function ga(t,e){var r;const i=(r=t.card)==null?void 0:r.player,o=i?`${i.firstname} ${i.surname_real}`:"cette carte",a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",a.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${o} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${t.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(a);const n=s=>{a.remove(),s&&e()};a.querySelector("#buy-cancel").addEventListener("click",()=>n(!1)),a.querySelector("#buy-ok").addEventListener("click",()=>n(!0)),a.addEventListener("click",s=>{s.target===a&&n(!1)})}async function xa(t,e,i){const{toast:o}=i,{data:a}=await v.from("market_listings").select("card_id").eq("id",t).single();if(await v.from("market_listings").update({status:"cancelled"}).eq("id",t),a!=null&&a.card_id){const{count:n}=await v.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",a.card_id).eq("status","active");n||await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",a.card_id)}o("Annonce retirée","success"),oo(e,i)}async function ba(t,e){var x,g,p,u,y;const{state:i,navigate:o}=e,a=((g=(x=e==null?void 0:e.state)==null?void 0:x.params)==null?void 0:g.tab)||"ranked";t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:n},{data:r},{data:s}]=await Promise.all([v.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100),v.rpc("get_mini_league_leaderboard"),v.rpc("get_random_leaderboard")]);let d=a;const c=w=>w<3?["#D4A017","#a0a0a0","#cd7f32"][w]:"var(--green)",l=w=>w<3?"#000":"#fff";function f(){var E,m,T;const w=document.getElementById("rankings-legend");w&&(w.innerHTML=d==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const h=document.getElementById("rankings-list");if(h){if(d==="ranked"){const $=n||[];h.innerHTML=$.length>0?$.map((S,F)=>{const H=ki(S.mmr??1e3),K=(S.ranked_wins||0)+(S.ranked_losses||0)+(S.ranked_draws||0),X=K>0?Math.round((S.ranked_wins||0)/K*100):0,A=S.id===i.profile.id,_=(S.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${A?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${F<3?["#D4A017","#a0a0a0","#cd7f32"][F]:"rgba(255,255,255,0.08)"};color:${F<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${F<3?"16":"13"}px">${F<3?["🥇","🥈","🥉"][F]:F+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${H.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${S.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${S.club_name} · ${H.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${_?"❓":H.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${H.color}">${_?"Placement":H.label}</div>
              ${_?"":`<div style="font-size:10px;color:var(--tile-fg-dim)">${X}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(d==="mini-league"){const $=r||[];h.innerHTML=$.length>0?$.map((S,F)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${S.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${c(F)};color:${l(F)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${F<3?"16":"13"}px">${F<3?["🥇","🥈","🥉"][F]:F+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${S.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${S.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${S.top1} 🥈${S.top2} 🥉${S.top3}</div>
            <div style="color:var(--tile-fg-dim)">${S.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const $=s||[];h.innerHTML=$.length>0?$.map((S,F)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${S.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${c(F)};color:${l(F)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${F<3?"16":"13"}px">${F<3?["🥇","🥈","🥉"][F]:F+1}</div>
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
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}(E=document.getElementById("tab-ranked"))!=null&&E.style&&(document.getElementById("tab-ranked").style.cssText=b(d==="ranked")),(m=document.getElementById("tab-mini-league"))!=null&&m.style&&(document.getElementById("tab-mini-league").style.cssText=b(d==="mini-league")),(T=document.getElementById("tab-random"))!=null&&T.style&&(document.getElementById("tab-random").style.cssText=b(d==="random"))}}const b=w=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${w?"900":"400"};background:${w?"var(--green)":"rgba(255,255,255,0.06)"};color:${w?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-ranked" style="${b(d==="ranked")}">⚔️ Ranked</button>
        <button id="tab-mini-league" style="${b(d==="mini-league")}">🏆 Mini Leagues</button>
        <button id="tab-random" style="${b(d==="random")}">🎲 Random</button>
      </div>
      <div id="rankings-legend"></div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,f(),(p=document.getElementById("tab-ranked"))==null||p.addEventListener("click",()=>{d="ranked",f()}),(u=document.getElementById("tab-mini-league"))==null||u.addEventListener("click",()=>{d="mini-league",f()}),(y=document.getElementById("tab-random"))==null||y.addEventListener("click",()=>{d="random",f()})}async function ya(t,e){var T,$,S,F;const{state:i,navigate:o,toast:a}=e,n=i.profile;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:r},{data:s}]=await Promise.all([v.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),v.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",n.id).single()]);if(!s){a("Erreur chargement profil","error"),o("home");return}if(!r){t.innerHTML=`
    <div style="min-height:100%;background:linear-gradient(160deg,#1a1a1a,#2a2a2a);padding:16px;display:flex;flex-direction:column;gap:16px">
      <div style="display:flex;align-items:center;gap:10px">
        <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
        <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center;padding:40px">
        <div style="font-size:64px">⏸️</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Ranked en pause</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.5);max-width:260px">Aucune saison n'est active pour le moment. Revenez bientôt !</div>
      </div>
    </div>`,(T=document.getElementById("ranked-back"))==null||T.addEventListener("click",()=>o("home"));return}const d=s.mmr??1e3,c=s.mmr_deviation??350,l=s.mmr_volatility??.06,f=s.placement_matches??0,b=f<10,x=Math.max(0,10-f),g=ki(d),p=zo(d),u=zi.findIndex(H=>H.id===g.id),y=zi[u+1]||null,w={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},h=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),E=h>0?Math.round((s.ranked_wins||0)/h*100):0,m=zi.map(H=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${g.id===H.id?1:.35};
      transform:${g.id===H.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${g.id===H.id?"28px":"20px"}">${H.emoji}</div>
      <div style="font-size:9px;color:${H.color};font-weight:${g.id===H.id?"900":"400"};letter-spacing:0.5px">${H.label.toUpperCase()}</div>
    </div>
  `).join("");t.innerHTML=`
  <div style="min-height:100%;background:${w[g.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px">
      <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
      <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
    </div>

    <!-- Bandeau tier -->
    <div style="background:rgba(0,0,0,0.35);border-radius:20px;padding:20px 16px;text-align:center;border:2px solid ${g.color}40">
      <div style="font-size:52px;margin-bottom:4px">${g.emoji}</div>
      <div style="font-size:22px;font-weight:900;color:${g.color};letter-spacing:3px;text-transform:uppercase">${g.label}</div>
    </div>

    <!-- Progression bar -->
    ${g.id!=="master"?`
    <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${g.emoji} ${g.label}</span>
        ${y?`<span>${y.emoji} ${y.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${p}%;background:linear-gradient(90deg,${g.color},${g.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${p}% vers ${y?y.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${m}
    </div>

    <!-- Placement / Stats -->
    ${b?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${f}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${x} match${x>1?"s":""} — gains et pertes ×2</div>
    </div>`:`
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#1A6B3C">${s.ranked_wins||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Victoires</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#888">${s.ranked_draws||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Nuls</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#bb2020">${s.ranked_losses||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Défaites</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#D4A017">${E}%</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Win rate</div>
      </div>
    </div>`}

    <!-- Saison info -->
    ${r?`
    <div style="background:rgba(0,0,0,0.25);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:12px;color:rgba(255,255,255,0.6)">📅 ${r.name}</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.4)">Fin : ${new Date(r.end_at).toLocaleDateString("fr",{day:"numeric",month:"short"})}</div>
    </div>`:""}

    <!-- Bouton jouer -->
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:auto;padding-top:8px">
      <button id="ranked-play-btn" style="width:100%;padding:18px;border-radius:16px;border:none;
        background:linear-gradient(135deg,${g.color},${g.color}99);
        color:#000;font-size:18px;font-weight:900;cursor:pointer;letter-spacing:1px;
        box-shadow:0 4px 20px ${g.color}60;text-transform:uppercase">
        ⚽ Jouer en Ranked
      </button>
      <button id="ranked-leaderboard-btn" style="width:100%;padding:12px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.2);
        background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        🏆 Classement Ranked
      </button>
    </div>
  </div>`,($=document.getElementById("ranked-back"))==null||$.addEventListener("click",()=>o("home")),(S=document.getElementById("ranked-leaderboard-btn"))==null||S.addEventListener("click",()=>o("rankings",{tab:"ranked"})),(F=document.getElementById("ranked-play-btn"))==null||F.addEventListener("click",()=>{$t(),o("match",{matchMode:"ranked",rankedData:{mmr:d,rd:c,sigma:l,isPlacement:b}})})}async function ha(t,{state:e,navigate:i,toast:o}){const a=e.profile;if(!a)return;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await v.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${a.id},away_id.eq.${a.id}`).order("created_at",{ascending:!1}).limit(50),r={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(n||[]).filter(l=>l.status==="finished"),d=(n||[]).filter(l=>l.status==="in_progress");function c(l){const f=l.home_id===a.id;f?l.home_score:l.away_score,f?l.away_score:l.home_score;const b=l.winner_id===a.id,x=l.home_score===l.away_score&&l.status==="finished",g=l.status!=="finished"?"…":x?"N":b?"V":"D",p=l.status!=="finished"||x?"#888":b?"#1A6B3C":"#c0392b";let u=r[l.mode]||l.mode;l.away_id===null&&!u.startsWith("IA")&&(u="IA");const w=l.home_id===a.id?l.away:l.home;let h;l.away_id===null?h=u:w?h=`${w.club_name||w.pseudo} (${w.pseudo})`:h="Adversaire";let E="";l.status==="in_progress"&&Date.now()-new Date(l.created_at).getTime()>3600*1e3&&(E=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const m=new Date(l.created_at),T=m.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+m.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),$=l.status==="finished"?`${l.home_score} - ${l.away_score}`:`${l.home_score||0} - ${l.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${E}</div>
        <div style="font-size:11px;color:var(--gray-600)">${u} · ${T}${l.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${$}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${g}</span>
      </div>
    </div>`}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(n||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${d.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${d.map(c).join("")}
        </div>`:""}

      ${s.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${s.map(c).join("")}
        </div>`:""}

      ${(n||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}xn(yn);const ve={user:null,profile:null,page:"home",params:{}};function Pt(t,e="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=t,o.className=`show ${e}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function va(t,e,i=""){document.getElementById("modal-title").textContent=t,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Ui(){document.getElementById("modal-overlay").classList.add("hidden")}async function ti(){if(!ve.user)return;const{data:t}=await v.from("users").select("*").eq("id",ve.user.id).single();t&&(ve.profile=t)}const pn="mw_theme";function un(){return localStorage.getItem(pn)||"dark"}function wa(t){var e;localStorage.setItem(pn,t),_a(t),(e=ve.profile)!=null&&e.id&&v.from("users").update({theme:t}).eq("id",ve.profile.id).then(()=>{})}function _a(t){document.documentElement.setAttribute("data-theme",t)}function Nt(t,e={}){ve.page=t,ve.params=e,fn()}async function fn(){var o,a,n,r;const t=document.getElementById("page-content");if(!t)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===ve.page)});const e=document.getElementById("nav-credits");e&&ve.profile&&(e.textContent=`💰 ${(ve.profile.credits||0).toLocaleString("fr")}`);const i={state:ve,navigate:Nt,toast:Pt,openModal:va,closeModal:Ui,refreshProfile:ti};switch(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ve.page){case"home":await Mi(t,i);break;case"home2":await Mi(t,i);break;case"game":await Gn(t,i);break;case"settings":await Oo(t,i);break;case"collection":await Yn(t,i);break;case"decks":await Di(t,i);break;case"boosters":await sr(t,i);break;case"ranked":await ya(t,i);break;case"match":{const s=ve.params&&ve.params.matchMode||"vs_ai_easy";s==="random"?await Oi(t,i,!1):s==="ranked"?await Oi(t,i,!0):s==="friend"?await Ur(t,i,(o=ve.params)==null?void 0:o.friendId,(a=ve.params)==null?void 0:a.friendName):s==="mini_league"||s==="mini-league"?await Io(t,i,(n=ve.params)==null?void 0:n.mlMatchId,(r=ve.params)==null?void 0:r.leagueId):await _r(t,i);break}case"market":await fa(t,i);break;case"rankings":await ba(t,i);break;case"matches":await ha(t,i);break;case"friends":await Dn(t,i);break;case"mini-league":await Wr(t,i);break;case"match-mini-league":{const s=ve.params||{};await Io(t,i,s.mlMatchId,s.leagueId);break}default:await Mi(t,i)}}function ka(){var o,a;const t=document.getElementById("app"),e=ve.profile;if(!e)return;const i="/icons/";t.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.07.27-1322" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",r=>{r.preventDefault(),Nt(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Nt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Nt("boosters")),(o=document.getElementById("journal-btn"))==null||o.addEventListener("click",()=>$a()),(a=document.getElementById("settings-btn"))==null||a.addEventListener("click",()=>Nt("settings"))}async function $a(){const{data:t}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const a=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${o.image_url?`<img src="${o.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${a}</div>
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}function Ea(t,{onPlay:e}){var o;const i="/icons/";t.style.cssText="",t.innerHTML=`
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
  </div>`,(o=t.querySelector("#pl-play-btn"))==null||o.addEventListener("click",e)}async function La(){document.documentElement.setAttribute("data-theme",un()),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Ui()}),document.getElementById("modal-close").addEventListener("click",Ui);const{data:{session:t}}=await v.auth.getSession();if(!t){Ao(),Ea(document.getElementById("app"),{onPlay:()=>uo(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Pt})});return}ve.user=t.user,await ti(),Ao();try{const{data:i}=await v.from("formation_links_overrides").select("formation, links"),o={};(i||[]).forEach(a=>{o[a.formation]=a.links}),bn(o)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!ve.profile){vn(document.getElementById("app"),{state:ve,navigate:async()=>{await ti(),Bi()},toast:Pt,refreshProfile:ti});return}const e=Array.isArray(ve.profile.pending_boosters)?ve.profile.pending_boosters:[];if(!ve.profile.onboarding_done&&e.length>0){gr(document.getElementById("app"),{state:ve,navigate:()=>Bi(),toast:Pt,refreshProfile:ti});return}Bi(),setTimeout(()=>ua(ve.profile,Nt,Pt),800),v.auth.onAuthStateChange(async(i,o)=>{i==="SIGNED_OUT"&&(ve.user=null,ve.profile=null,document.getElementById("app").innerHTML="",uo(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Pt}))})}function Ta(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Ii(){const t=document.getElementById("app");t&&(t.style.height=Ta()+"px")}window.addEventListener("resize",Ii);window.addEventListener("orientationchange",()=>setTimeout(Ii,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Ii);function Bi(){const t=()=>{var i;(i=ve.user)!=null&&i.id&&v.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",ve.user.id).then(()=>{})};t(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(t,6e4);const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Ii(),ka(),fn()}function Ao(){const t=document.getElementById("app-loader"),e=document.getElementById("app");e&&(e.style.display=""),t&&(t.classList.add("zoom-out"),setTimeout(()=>t.style.display="none",500))}function mn(t){var o;const e=document.getElementById("app-loader");if(e&&(e.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${t||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(o=document.getElementById("boot-retry"))==null||o.addEventListener("click",()=>window.location.reload())}La().catch(t=>{console.error("Échec du démarrage:",t),mn()});setTimeout(()=>{const t=document.getElementById("app-loader");t&&t.style.display!=="none"&&!t.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&mn("Le serveur met trop de temps à répondre.")},12e3);
