const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/special-cards-CuDZ8qxo.js","assets/special-cards-9iGyNo1-.css"])))=>i.map(i=>d[i]);
import{s as v,j as Ei,q as jo,t as Bt,u as Li,F as Ii,o as nt,n as Ht,g as Ct,r as ze,m as ut,v as ni,w as Bo,T as Bi,p as yn,x as hn,d as vn}from"./special-cards-CuDZ8qxo.js";const wn="/";function mo(t,{navigate:e,toast:i}){let o="login";const r=()=>{var a,s,c,d,l,f,x;const n=o==="login";if(t.innerHTML=`
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
        <img src="${wn}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(a=document.getElementById("tab-login-btn"))==null||a.addEventListener("click",()=>{o="login",r()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{o="register",r()}),n)(c=document.getElementById("login-password"))==null||c.addEventListener("keydown",b=>{var g;b.key==="Enter"&&((g=document.getElementById("login-btn"))==null||g.click())}),(d=document.getElementById("login-btn"))==null||d.addEventListener("click",async()=>{const b=document.getElementById("login-email").value.trim(),g=document.getElementById("login-password").value,p=document.getElementById("login-error");if(p.textContent="",!b||!g){p.textContent="Remplissez tous les champs.";return}const u=document.getElementById("login-btn");u.textContent="⏳ Connexion…",u.disabled=!0;const{error:y}=await v.auth.signInWithPassword({email:b,password:g});if(u.textContent="⚽ Se connecter",u.disabled=!1,y){p.textContent=y.message.includes("Invalid")?"Email ou mot de passe incorrect.":y.message;return}window.location.reload()});else{(l=document.getElementById("reg-confirm"))==null||l.addEventListener("keydown",p=>{var u;p.key==="Enter"&&((u=document.getElementById("reg-btn"))==null||u.click())});let b=null,g=!1;(f=document.getElementById("reg-access-code"))==null||f.addEventListener("input",p=>{const u=p.target.value,y=document.getElementById("access-code-status"),w=document.getElementById("reg-btn");if(clearTimeout(b),g=!1,w&&(w.disabled=!0,w.style.opacity="0.45",w.style.cursor="not-allowed"),!u){y&&(y.textContent="");return}y&&(y.textContent="⏳ Vérification…",y.style.color="rgba(255,255,255,0.4)"),b=setTimeout(async()=>{const{data:h,error:E}=await v.rpc("check_signup_password",{input_password:u});if(E){y&&(y.textContent="Erreur de vérification.",y.style.color="#f87171");return}g=!!h,y&&(y.textContent=g?"✅ Code valide":"❌ Code incorrect",y.style.color=g?"#4ade80":"#f87171"),w&&(w.disabled=!g,w.style.opacity=g?"1":"0.45",w.style.cursor=g?"pointer":"not-allowed")},400)}),(x=document.getElementById("reg-btn"))==null||x.addEventListener("click",async()=>{var $;const p=document.getElementById("reg-email").value.trim(),u=document.getElementById("reg-password").value,y=document.getElementById("reg-confirm").value,w=(($=document.getElementById("reg-access-code"))==null?void 0:$.value)||"",h=document.getElementById("reg-error");if(h.textContent="",!p||!u||!y){h.textContent="Remplissez tous les champs.";return}if(u.length<6){h.textContent="Mot de passe trop court (min. 6 caractères).";return}if(u!==y){h.textContent="Les mots de passe ne correspondent pas.";return}const{data:E}=await v.rpc("check_signup_password",{input_password:w});if(!E){h.textContent="Code d'accès incorrect.";return}const m=document.getElementById("reg-btn");m.textContent="⏳ Création…",m.disabled=!0;const{error:S}=await v.auth.signUp({email:p,password:u});if(m.textContent="🚀 Créer mon compte",m.disabled=!1,S){h.textContent=S.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),o="login",r(),setTimeout(()=>{const A=document.getElementById("login-email");A&&(A.value=p)},50)})}};r()}function _n(t,{state:e,navigate:i,toast:o,refreshProfile:r}){let n="#1A6B3C",a="#D4A017";t.innerHTML=`
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
  `;function s(){var g;const d=document.getElementById("logo-preview"),l=document.getElementById("logo-initials"),f=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",x=f.trim().split(" ").filter(Boolean),b=x.length>=2?(x[0][0]+x[1][0]).toUpperCase():f.slice(0,2).toUpperCase();d&&(d.style.background=a,d.style.borderColor=n),l&&(l.textContent=b,l.style.color=n)}document.getElementById("color1").addEventListener("input",d=>{n=d.target.value,document.getElementById("swatch1").style.background=n,s()}),document.getElementById("color2").addEventListener("input",d=>{a=d.target.value,document.getElementById("swatch2").style.background=a,s()});function c(d){document.querySelectorAll(".setup-step").forEach(l=>l.classList.remove("active")),document.getElementById(`step-${d}`).classList.add("active"),document.getElementById("step-num").textContent=d,document.getElementById("progress-fill").style.width=`${Math.round(d/3*100)}%`,d===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const d=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("step1-error");if(l.textContent="",d.length<3){l.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await v.from("users").select("id").eq("pseudo",d).maybeSingle();if(f){l.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const d=document.getElementById("setup-club").value.trim(),l=document.getElementById("step2-error");if(l.textContent="",d.length<2){l.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await v.from("users").select("id").eq("club_name",d).maybeSingle();if(f){l.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const d=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),x=document.getElementById("step3-finish");f.textContent="",x.disabled=!0,x.textContent="Création en cours…";try{const{error:b}=await v.from("users").insert({id:e.user.id,pseudo:d,club_name:l,club_color1:n,club_color2:a,credits:1e4});if(b)throw b;await kn(e.user.id),await r(),o(`Bienvenue ${d} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(b){f.textContent=b.message,x.disabled=!1,x.textContent="🚀 Créer mon profil !"}})}async function kn(t){const e=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await v.from("users").update({pending_boosters:e,onboarding_done:!1,first_booster_opened:!1}).eq("id",t)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const $n="modulepreload",En=function(t){return"/"+t},go={},qo=function(e,i,o){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(i.map(c=>{if(c=En(c),c in go)return;go[c]=!0;const d=c.endsWith(".css"),l=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${l}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":$n,d||(f.as="script"),f.crossOrigin="",f.href=c,s&&f.setAttribute("nonce",s),document.head.appendChild(f),d)return new Promise((x,b)=>{f.addEventListener("load",x),f.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return r.then(a=>{for(const s of a||[])s.status==="rejected"&&n(s.reason);return e().catch(n)})},Do="mw_sound_volume";function Xi(){const t=localStorage.getItem(Do);if(t===null)return 100;const e=parseInt(t,10);return Number.isFinite(e)?Math.max(0,Math.min(100,e)):100}function Ln(t){localStorage.setItem(Do,String(Math.max(0,Math.min(100,Math.round(t)))))}function Ji(){return Xi()===0}function yi(t){return Math.max(0,Math.min(1,t*(Xi()/100)))}function Qi(t,e=1){if(Ji())return null;try{const i=new Audio(t);return i.volume=yi(e),i.play().catch(()=>{}),i}catch{return null}}let ht=null,Ni=null,bo=.3;function Fo(t,e=.3){if(bo=e,ht&&Ni===t&&!ht.paused){ht.volume=yi(bo);return}if(Rt(),!Ji())try{const i=new Audio(t);i.loop=!0,i.volume=yi(e),i.play().catch(()=>{}),ht=i,Ni=t}catch{}}function Rt(){if(ht)try{ht.pause(),ht.currentTime=0}catch{}ht=null,Ni=null}let Qt=null;function Po(t,e=.6){if(Ke(),!Ji())try{const i=new Audio(t);i.volume=yi(e),i.play().catch(()=>{}),Qt=i}catch{}}function Ke(){if(Qt)try{Qt.pause(),Qt.currentTime=0}catch{}Qt=null}const In=[{key:"home2",route:"home2",label:"HOME",icon:"nav-home.png"},{key:"cards",route:"collection",label:"CARDS",icon:"nav-collection.png"},{key:"decks",route:"decks",label:"DECKS",icon:"nav-decks.png"},{key:"boosters",route:"boosters",label:"BOOSTERS",icon:"nav-boosters.png"},{key:"market",route:"market",label:"MERCATO",icon:"nav-market.png"}];function No(t,e,i,o){if(!document.getElementById("home2-chrome-style")){const l=document.createElement("style");l.id="home2-chrome-style",l.textContent=`
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
    `,document.head.appendChild(l)}const r=In.map(l=>`
    <a class="home2-chrome-tab" data-route="${l.route}" data-key="${l.key}">
      ${l.icon?`<img src="${o}${l.icon}">`:`<span class="home2-chrome-tab-emoji">${l.emoji}</span>`}${l.label}
    </a>`).join("");let n=document.getElementById("home2-chrome-header");n||(n=document.createElement("div"),n.id="home2-chrome-header",n.className="home2-chrome-header",n.innerHTML=`
      <div id="home2-chrome-marker" style="display:none"></div>
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-tabs">${r}</div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-chrome-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-chrome-settings-btn">⚙️</button>
      </div>
    `,document.body.appendChild(n),n.querySelector("#home2-chrome-settings-btn").addEventListener("click",()=>t("settings")),n.querySelector("#home2-chrome-credits").addEventListener("click",()=>t("boosters")));let a=document.getElementById("home2-mobile-top");a||(a=document.createElement("div"),a.id="home2-mobile-top",a.className="home2-mobile-top",a.innerHTML=`
      <div class="home2-chrome-logo"><img src="${o}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-mobtop-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-mobtop-settings-btn"><span>⚙️</span><span class="pill-label">Paramètres</span></button>
      </div>
    `,document.body.appendChild(a),a.querySelector("#home2-mobtop-settings-btn").addEventListener("click",()=>t("settings")),a.querySelector("#home2-mobtop-credits").addEventListener("click",()=>t("boosters")));let s=document.getElementById("home2-mobile-bottom");s||(s=document.createElement("div"),s.id="home2-mobile-bottom",s.className="home2-mobile-bottom",s.innerHTML=r,document.body.appendChild(s)),document.querySelectorAll(".home2-chrome-tab").forEach(l=>{l._v2Bound||(l._v2Bound=!0,l.addEventListener("click",()=>{document.querySelectorAll(".home2-chrome-tab").forEach(f=>f.classList.remove("active")),document.querySelectorAll(`.home2-chrome-tab[data-key="${l.dataset.key}"]`).forEach(f=>f.classList.add("active")),t(l.dataset.route)}))}),document.querySelectorAll(".home2-chrome-tab").forEach(l=>l.classList.toggle("active",l.dataset.key===i));const c=`💰 ${(e.credits||0).toLocaleString("fr")}`;document.getElementById("home2-chrome-credits")&&(document.getElementById("home2-chrome-credits").textContent=c),document.getElementById("home2-mobtop-credits")&&(document.getElementById("home2-mobtop-credits").textContent=c),document.body.classList.remove("v2-match-flow"),n.style.display="",a.style.display="",s.style.display="";const d=document.getElementById("page-content");d&&(d.style.removeProperty("padding-top"),d.style.removeProperty("padding-bottom")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const l=window.innerWidth<1024;document.documentElement.style.setProperty("--v2-top-height",(l?a.offsetHeight:n.offsetHeight)+"px"),document.documentElement.style.setProperty("--v2-bottom-height",s.offsetHeight+"px")})})}function Ti(t){const e=`💰 ${(t||0).toLocaleString("fr")}`,i=document.getElementById("home2-chrome-credits"),o=document.getElementById("home2-mobtop-credits");i&&(i.textContent=e),o&&(o.textContent=e)}function mt(){document.body.classList.add("v2-match-flow");const t=document.getElementById("home2-chrome-header");t&&(t.style.display="none");const e=document.getElementById("home2-mobile-top");e&&(e.style.display="none");const i=document.getElementById("home2-mobile-bottom");i&&(i.style.display="none");const o=document.getElementById("page-content");o&&(o.style.setProperty("padding-top","0","important"),o.style.setProperty("padding-bottom","0","important"))}function Tn(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return"à l'instant";if(i<60)return`il y a ${i}min`;const o=Math.floor(i/60);if(o<24)return`il y a ${o}h`;const r=Math.floor(o/24);return r<7?`il y a ${r}j`:new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"short"})}function Sn(t,e){if(!isFinite(e.max))return"";const i=e.max-e.min+1,o=Math.floor((t-e.min)/(i/3));return["III","II","I"][Math.min(2,Math.max(0,o))]}async function An(t){const{data:e}=await v.from("users").select("id,pseudo,club_name,mmr").order("mmr",{ascending:!1}).limit(5),i=e||[],o=i.some(n=>n.id===t);let r=null;if(!o){const{data:n}=await v.from("users").select("mmr").eq("id",t).single();if(n){const{count:a}=await v.from("users").select("id",{count:"exact",head:!0}).gt("mmr",n.mmr||0);r=(a||0)+1}}return{list:i,iAmInTop:o,myPosition:r}}async function zn(t=4){const{data:e}=await v.from("patch_notes").select("id,title,description,image_url,published_at").eq("is_published",!0).order("published_at",{ascending:!1}).limit(t);return e||[]}async function Mn(){const{data:t}=await v.from("booster_configs").select("id,name,icon,price_type,price_credits,card_count").eq("is_active",!0).order("sort_order",{ascending:!0}).limit(5);return t||[]}async function Cn(){const{data:t}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const r=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close-v2").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}async function qi(t,{state:e,navigate:i,toast:o}){var E,m,S,$,A,P;const r=e.profile;if(!r)return;const n="/icons/";No(i,r,"home2",n);const a=r.mmr??1e3,s=Ei(a),c=Sn(a,s),d=jo(a),l=isFinite(s.max)?s.max+1:null,[{list:f,iAmInTop:x,myPosition:b},g,p]=await Promise.all([An(r.id),zn(5),Mn()]),u=(R,O)=>`
    <div class="rk-row ${R.id===r.id?"rk-row-me":""}">
      <div class="rk-pos ${O<3?"rk-pos-top"+(O+1):""}">${O<3?["🥇","🥈","🥉"][O]:O+1}</div>
      <div class="rk-name ${R.id===r.id?"rk-name-me":""}">${R.pseudo}</div>
      <div class="rk-rp">${(R.mmr??0).toLocaleString("fr")} RP</div>
    </div>`,y=R=>`
    <div class="news-item">
      ${R.image_url?`<img src="${R.image_url}" class="news-thumb" onerror="this.style.display='none'">`:'<div class="news-thumb news-thumb-fallback">📰</div>'}
      <div class="news-body">
        <div class="news-title">${R.title}</div>
        <div class="news-desc">${R.description||""}</div>
        <div class="news-time">${Tn(R.published_at)}</div>
      </div>
    </div>`;let w=0;const h=R=>`
    <div class="promo-icon-wrap">
      <img src="${n}${R.icon||"nav-boosters.png"}" class="promo-icon" onerror="this.style.display='none'">
    </div>
    <div class="promo-info">
      <div class="promo-kicker">NOUVEAU BOOSTER</div>
      <div class="promo-title">${R.name}</div>
      <div class="promo-desc">${R.card_count||5} cartes · ${R.price_type==="pub"?"Pub gratuite":(R.price_credits||0).toLocaleString("fr")+" cr."}</div>
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
      background: linear-gradient(135deg, ${r.club_color1}cc, ${r.club_color2}88);
      border: 2px solid ${r.club_color2};
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
                <div class="rank-rp-label">${a.toLocaleString("fr")}${l?" / "+l.toLocaleString("fr"):""} RP</div>
                <button class="rank-inline-link" id="rank-inline-link-btn">📊 Classement</button>
              </div>
            </div>
            <div class="rank-progress-track"><div class="rank-progress-fill" style="width:${d}%"></div></div>
          </div>

          <button class="profile-view-btn" id="nav-profile-btn">Voir mon profil 📤</button>

          <div class="ranking-widget">
            <div class="ranking-widget-header"><h4>CLASSEMENT</h4><a id="nav-rankings-link">Voir plus</a></div>
            ${f.map((R,O)=>u(R,O)).join("")}
            ${!x&&b?`
              <div class="rk-row rk-row-me" style="border-top:1px solid var(--tile-border);margin-top:2px;padding-top:8px">
                <div class="rk-pos">${b}</div>
                <div class="rk-name rk-name-me">${r.pseudo}</div>
                <div class="rk-rp">${a.toLocaleString("fr")} RP</div>
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
            ${p.length>1?`<div class="promo-dots">${p.map((R,O)=>`<div class="promo-dot ${O===0?"active":""}" data-dot="${O}"></div>`).join("")}</div>`:""}
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
  </div>`,requestAnimationFrame(()=>{var G,K;const R=((G=window.visualViewport)==null?void 0:G.height)||window.innerHeight,O=window.innerWidth<1024;let Y=0;if(O){const le=document.getElementById("home2-mobile-top"),ce=document.getElementById("home2-mobile-bottom");Y=((le==null?void 0:le.offsetHeight)||0)+((ce==null?void 0:ce.offsetHeight)||0)}else Y=((K=document.getElementById("home2-chrome-header"))==null?void 0:K.offsetHeight)||0;const I=R-Y,_=t.querySelector(".home-dark");_&&(_.style.minHeight=I+"px")}),(E=document.getElementById("nav-profile-btn"))==null||E.addEventListener("click",()=>i("settings")),(m=document.getElementById("nav-rankings-link"))==null||m.addEventListener("click",()=>i("rankings")),(S=document.getElementById("nav-rankings-cta"))==null||S.addEventListener("click",()=>i("rankings")),($=document.getElementById("rank-inline-link-btn"))==null||$.addEventListener("click",()=>i("rankings")),(A=document.getElementById("nav-journal-link"))==null||A.addEventListener("click",()=>Cn()),t.querySelectorAll("[data-action]").forEach(R=>{R.addEventListener("click",()=>{R.style.transform="scale(.96)",setTimeout(()=>R.style.transform="",180);const O=R.dataset.action;if(O==="match-ai"){Oo(i,e);return}if(O==="match-random"){mt(),i("match",{matchMode:"random"});return}if(O==="match-friend"){i("friends");return}if(O==="mini-league"){i("mini-league");return}if(O==="ranked"){i("ranked");return}o("Bientôt disponible","info")})}),p.length>1){const R=document.getElementById("promo-slide-content"),O=()=>Array.from(document.querySelectorAll(".promo-dot")),Y=I=>{w=I,R&&(R.innerHTML=h(p[w])),O().forEach((_,G)=>_.classList.toggle("active",G===w))};setInterval(()=>Y((w+1)%p.length),5e3),document.querySelectorAll(".promo-dot").forEach(I=>{I.addEventListener("click",()=>Y(Number(I.dataset.dot)))})}(P=document.getElementById("promo-cta-btn"))==null||P.addEventListener("click",()=>i("boosters")),Ro(e,o),Dn(e,o,i),Go(e,o,i),jn(e,o)}async function jn(t,e){const i=t.profile.id,{data:o}=await v.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(o!=null&&o.length))return;const r=o.reduce((a,s)=>a+(s.prize_amount||0),0),n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2200",n.innerHTML=`<div class="modal" style="max-width:400px">
    <div class="modal-header"><h2 style="color:#1A6B3C">🏆 Gains à récupérer</h2></div>
    <div class="modal-body" style="padding:18px 20px">
      <p style="font-size:14px;color:#555;margin:0 0 14px">Tu as terminé sur le podium de ${o.length>1?"plusieurs mini leagues":"une mini league"} !</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
        ${o.map(a=>{var s;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#f7f7f7;border-radius:10px">
          <span style="font-size:13px;font-weight:700;color:#1a1a1a">${((s=a.mini_leagues)==null?void 0:s.name)||"Mini League"}</span>
          <span style="font-size:13px;font-weight:900;color:#D4A017">+${(a.prize_amount||0).toLocaleString("fr")} cr.</span>
        </div>`}).join("")}
      </div>
      <button id="claim-all-btn" class="btn btn-primary" style="width:100%;margin-bottom:8px">💰 Tout récupérer (+${r.toLocaleString("fr")} cr.)</button>
      <button id="claim-later-btn" class="btn btn-ghost" style="width:100%">Plus tard</button>
    </div>
  </div>`,document.body.appendChild(n),n.querySelector("#claim-later-btn").addEventListener("click",()=>n.remove()),n.querySelector("#claim-all-btn").addEventListener("click",async a=>{const s=a.currentTarget;s.disabled=!0,s.textContent="...";let c=0;for(const d of o){const{data:l}=await v.rpc("claim_mini_league_prize",{p_league_id:d.league_id,p_user_id:i});l!=null&&l.success&&!l.already_claimed&&(c+=l.prize||0)}if(c>0){t.profile.credits=(t.profile.credits||0)+c;const d=document.getElementById("nav-credits");d&&(d.textContent=`💰 ${t.profile.credits.toLocaleString("fr")}`),e(`💰 +${c.toLocaleString("fr")} cr. récupérés !`,"success")}n.remove()})}async function Go(t,e,i){const o=document.getElementById("ongoing-match-banner");if(!o)return;const r=t.profile.id,{data:n}=await v.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${r},away_id.eq.${r}`).order("created_at",{ascending:!1});if(!(n!=null&&n.length)){o.innerHTML="";return}const a=n.map(c=>c.home_id===r?c.away_id:c.home_id).filter(Boolean);let s={};if(a.length){const{data:c}=await v.from("users").select("id, pseudo, club_name").in("id",a);(c||[]).forEach(d=>{s[d.id]=d.club_name||d.pseudo})}o.innerHTML=n.map(c=>{const d=c.home_id===r?c.away_id:c.home_id,l=s[d]||"Adversaire",f=c.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${f?"🏆 Mini League":c.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${l}</div>
      </div>
      <button data-resume="${c.id}" data-mini="${f?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${c.id}" data-opp="${d}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),o.querySelectorAll("[data-resume]").forEach(c=>{c.addEventListener("click",async()=>{mt();const d=document.getElementById("page-content")||document.getElementById("app");if(c.dataset.mini==="1"){const{data:l}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",c.dataset.resume).single();l?i("match-mini-league",{mlMatchId:l.id,leagueId:l.league_id}):i("mini-league")}else{const{resumePvpMatch:l}=await qo(async()=>{const{resumePvpMatch:f}=await Promise.resolve().then(()=>Yr);return{resumePvpMatch:f}},void 0);l(d,{state:t,navigate:i,toast:e,openModal:null,closeModal:null,refreshProfile:null},c.dataset.resume)}})}),o.querySelectorAll("[data-abandon]").forEach(c=>{c.addEventListener("click",()=>{qn(async()=>{await Bn(c.dataset.abandon,c.dataset.opp,r),e("Match abandonné (défaite 3-0)","info"),Go(t,e,i)})})})}async function Bn(t,e,i){Rt();const{data:o}=await v.from("matches").select("home_id, away_id, game_state, mode").eq("id",t).single();if(!o)return;const r=o.home_id===i,n=r?0:3,a=r?3:0,s=o.game_state||{};s.p1Score=n,s.p2Score=a,s.phase="finished",s.forfeit=!0,await v.from("matches").update({status:"finished",forfeit:!0,winner_id:e,home_score:n,away_score:a,game_state:s}).eq("id",t),o.mode==="mini_league"&&await v.from("mini_league_matches").update({status:"finished",home_score:n,away_score:a}).eq("match_id",t)}function qn(t){const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(e),e.querySelector("#ab-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#ab-ok").addEventListener("click",()=>{e.remove(),t()}),e.addEventListener("click",i=>{i.target===e&&e.remove()})}async function Dn(t,e,i){var s,c,d,l;const o=document.getElementById("match-invite-banner");if(!o)return;const{data:r}=await v.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",t.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!r){o.innerHTML="";return}const n=((s=r.inviter)==null?void 0:s.club_name)||((c=r.inviter)==null?void 0:c.pseudo)||"?",a=r.inviter_id;o.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${n} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(d=document.getElementById("match-inv-accept"))==null||d.addEventListener("click",()=>{o.innerHTML="",mt(),i("match",{matchMode:"friend",friendId:a,friendName:n,isAccepting:!0})}),(l=document.getElementById("match-inv-decline"))==null||l.addEventListener("click",async()=>{await v.from("friend_match_invites").update({status:"declined"}).eq("id",r.id),o.innerHTML="",e("Invitation refusée","info")})}async function Ro(t,e){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:o,error:r}=await v.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",t.user.id).eq("status","pending");if(r||!(o!=null&&o.length)){i.innerHTML="";return}const n=o.length,a=o.slice(0,2).map(c=>{var d;return((d=c.requester)==null?void 0:d.pseudo)||"?"}).join(", "),s=n>2?` +${n-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${n} demande${n>1?"s":""} d'ami${n>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>Uo(t,e,()=>Ro(t,e)))}async function Oo(t,e){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:420px;border-radius:18px;overflow:hidden">
    <div class="modal-header"><h2>Solo — Choisir un niveau</h2><button class="btn-icon" id="solo-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div id="solo-levels-list" style="display:flex;flex-direction:column;gap:10px">
        <div style="text-align:center;color:#999;padding:20px">⏳ Chargement…</div>
      </div>
    </div>
  </div>`,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("solo-cancel").addEventListener("click",o),i.addEventListener("click",d=>{d.target===i&&o()});const[{data:r},{data:n}]=await Promise.all([v.from("solo_levels").select("*").eq("is_active",!0).order("level_number"),v.from("user_solo_progress").select("unlocked_level").eq("user_id",e.profile.id).maybeSingle()]),a=(n==null?void 0:n.unlocked_level)||1,s=r||[],c=document.getElementById("solo-levels-list");if(c){if(!s.length){c.innerHTML='<div style="text-align:center;color:#999;padding:20px">Aucun niveau configuré.</div>';return}c.innerHTML=s.map(d=>{const l=d.level_number>a,f=d.level_number===a,x=l?"#f0f0f0":f?"#eefaf2":"#f7f7f7",b=l?"#ddd":f?"#bfe8cf":"#e0e0e0",g=l?"#999":"#12401f";return`
      <div class="solo-level-card" data-level="${d.level_number}" data-locked="${l}"
        style="cursor:${l?"not-allowed":"pointer"};display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${x};border:1px solid ${b};opacity:${l?.6:1};transition:transform .12s ease">
        <div style="width:46px;height:46px;border-radius:12px;background:${l?"#bbb":"#1A6B3C"};display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#fff;flex-shrink:0">
          ${l?"🔒":d.level_number}
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:800;font-size:15px;color:${g}">Niveau ${d.level_number}</div>
          <div style="font-size:11px;color:${g};opacity:0.75;margin-top:1px">
            Note globale ~${d.target_note_avg} · 🟡${d.nb_liens_jaune} 🟢${d.nb_liens_vert} · 🏟️${d.nb_joueurs_stade}
          </div>
        </div>
        ${l?"":`<div style="font-weight:900;font-size:12.5px;color:${g};background:rgba(255,255,255,0.7);padding:6px 11px;border-radius:999px;flex-shrink:0;white-space:nowrap">+${d.reward_credits} cr.</div>`}
      </div>`}).join(""),c.querySelectorAll(".solo-level-card").forEach(d=>{d.dataset.locked!=="true"&&(d.addEventListener("mouseenter",()=>{d.style.transform="translateY(-1px)"}),d.addEventListener("mouseleave",()=>{d.style.transform=""}),d.addEventListener("click",()=>{o(),mt(),t("match",{matchMode:"solo",soloLevel:Number(d.dataset.level)})}))})}}const ri="#1A6B3C",ai="#cc2222",Fn="#D4A017",xo="#888";async function Pn(t,e){const{state:i,toast:o}=e;t.innerHTML=`
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
    </div>`,await Ho(i,o,e),document.getElementById("btn-add-friend").addEventListener("click",()=>Gn(i,o)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Uo(i,o,null,e))}async function Ho(t,e,i={}){const{navigate:o}=i,r=t.user.id,{data:n,error:a}=await v.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${r},addressee_id.eq.${r}`),{count:s}=await v.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",r).eq("status","pending"),c=document.getElementById("pending-badge");c&&(s>0?(c.style.display="flex",c.textContent=s):c.style.display="none");const d=document.getElementById("friends-list");if(!d)return;if(a){console.error("[Friends] Erreur:",a),d.innerHTML=`<div style="color:${ai};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const l=(n||[]).map(b=>b.requester_id===r?b.addressee_id:b.requester_id);let f={};if(l.length){const{data:b}=await v.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",l);(b||[]).forEach(g=>{f[g.id]=g})}const x=(n||[]).map(b=>({friendshipId:b.id,friend:f[b.requester_id===r?b.addressee_id:b.requester_id]||{pseudo:"?"}}));if(!x.length){d.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}d.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${x.length} ami${x.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${x.map(({friendshipId:b,friend:g})=>Nn(g,b)).join("")}
    </div>`,d.querySelectorAll("[data-stats]").forEach(b=>{b.addEventListener("click",()=>Rn(t,b.dataset.stats,b.dataset.friendName))}),d.querySelectorAll("[data-match]").forEach(b=>{b.addEventListener("click",async()=>{const g=b.dataset.friendId,p=b.dataset.friendName;if(typeof o!="function"){e("Erreur navigation","error");return}const u=t.user.id,{data:y}=await v.from("friend_match_invites").select("id").eq("inviter_id",g).eq("invitee_id",u).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),w=!!y;console.log("[Friends] clic match",{fid:g,fname:p,isAccepting:w}),mt(),o("match",{matchMode:"friend",friendId:g,friendName:p,isAccepting:w})})})}function Nn(t,e){const i=t.club_name||t.pseudo||"?",o=t.pseudo||"",r=(o||i).slice(0,2).toUpperCase(),n=t.club_color2||ri,a=t.club_color1||"#ffffff",s=t.last_seen_at?new Date(t.last_seen_at):null,c=s&&Date.now()-s.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${Fn};background:var(--tile-bg);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Gn(t,e){const i=Zi();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${ai};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${eo()}`,document.body.appendChild(i);const o=i.querySelector("#friend-pseudo-input"),r=i.querySelector("#add-friend-error"),n=()=>i.remove();o.focus(),i.querySelector("#add-cancel").addEventListener("click",n),i.addEventListener("click",a=>{a.target===i&&n()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=o.value.trim();if(!a){r.textContent="Entre un pseudo";return}r.textContent="";const{data:s}=await v.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!s){r.textContent="Utilisateur introuvable";return}if(s.id===t.user.id){r.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:c}=await v.from("friendships").select("id, status").or(`and(requester_id.eq.${t.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${t.user.id})`).single();if(c){const l=c.status==="accepted"?"Vous êtes déjà amis !":c.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";r.textContent=l;return}const{error:d}=await v.from("friendships").insert({requester_id:t.user.id,addressee_id:s.id,status:"pending"});if(d){r.textContent="Erreur : "+d.message;return}n(),e(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function Uo(t,e,i=null,o={}){const r=t.user.id,{data:n}=await v.from("friendships").select("id, requester_id").eq("addressee_id",r).eq("status","pending").order("created_at",{ascending:!1}),a=(n||[]).map(x=>x.requester_id);let s={};if(a.length){const{data:x}=await v.from("users").select("id, pseudo, club_name").in("id",a);(x||[]).forEach(b=>{s[b.id]=b})}const c=(n||[]).map(x=>({...x,requester:s[x.requester_id]||{pseudo:"?"}})),d=Zi(),l=c||[];d.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${l.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${l.map(x=>{var b,g,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((b=x.requester)==null?void 0:b.club_name)||((g=x.requester)==null?void 0:g.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=x.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${x.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${ri};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${x.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${ai};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${eo()}`,document.body.appendChild(d);const f=()=>d.remove();d.querySelector("#pending-close").addEventListener("click",f),d.addEventListener("click",x=>{x.target===d&&f()}),d.querySelectorAll("[data-accept]").forEach(x=>{x.addEventListener("click",async()=>{const{error:b}=await v.from("friendships").update({status:"accepted"}).eq("id",x.dataset.accept);if(b){e("Erreur : "+b.message,"error");return}x.closest("div[style]").remove(),e("✅ Ami accepté !","success"),Ho(t,e,o),i&&i()})}),d.querySelectorAll("[data-decline]").forEach(x=>{x.addEventListener("click",async()=>{await v.from("friendships").delete().eq("id",x.dataset.decline),x.closest("div[style]").remove(),e("Demande refusée","info"),i&&i()})})}async function Rn(t,e,i){const o=t.user.id,[r,n]=[o,e].sort(),a=o===r,{data:s}=await v.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",n).single(),c=t.profile.club_name||t.profile.pseudo||"Moi",d=s||{},l=a?d.wins_p1||0:d.wins_p2||0,f=a?d.wins_p2||0:d.wins_p1||0,x=d.draws||0,b=a?d.goals_p1||0:d.goals_p2||0,g=a?d.goals_p2||0:d.goals_p1||0,p=a?d.gc_used_p1||0:d.gc_used_p2||0,u=a?d.gc_used_p2||0:d.gc_used_p1||0,y=d.matches_total||0,w=(E,m,S,$=ri,A=ai)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${$}">${m}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${E}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${A}">${S}</div>
    </div>`,h=Zi();h.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${y===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${w("Victoires",l,f)}
        ${w("Nuls",x,x,xo,xo)}
        ${w("Défaites",f,l)}
        ${w("Buts marqués",b,g)}
        ${w("Buts encaissés",g,b,ai,ri)}
        ${w("GC utilisés ⚡",p,u,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${y} match${y>1?"s":""} joué${y>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${eo()}`,document.body.appendChild(h),h.querySelector("#stats-close").addEventListener("click",()=>h.remove()),h.addEventListener("click",E=>{E.target===h&&h.remove()})}function Zi(){const t=document.createElement("div");return t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",t}function eo(){return`
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
        background:${ri};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function On(t,{state:e,navigate:i,toast:o}){const r=e.profile;if(!r)return;const n="/icons/";No(i,r,"game",n),t.innerHTML=`
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
  </div>`,t.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",()=>{a.style.transform="scale(.96)",setTimeout(()=>a.style.transform="",180);const s=a.dataset.action;if(s==="match-ai"){Oo(i,e);return}if(s==="match-random"){mt(),i("match",{matchMode:"random"});return}if(s==="match-friend"){i("friends");return}if(s==="mini-league"){i("mini-league");return}if(s==="ranked"){i("ranked");return}o("Bientôt disponible","info")})})}async function Ko(t,e){var p,u;const{state:i,navigate:o}=e,r=oi(),n=Xi(),a=(p=i==null?void 0:i.profile)==null?void 0:p.is_admin,s="2026.07.27-2015";t.innerHTML=`
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
          <div id="volume-label" style="font-size:14px;font-weight:900;color:#D4A017">${n}%</div>
        </div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Musiques et effets sonores de l'app.</div>
        <input id="volume-slider" type="range" min="0" max="100" step="5" value="${n}"
          style="width:100%;accent-color:#1A6B3C;cursor:pointer;margin-bottom:14px">
        <button id="volume-test" class="btn" style="width:100%;padding:11px;border-radius:10px;border:1.5px solid var(--tile-border);background:transparent;color:var(--tile-fg-on-page);font-weight:700;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">
          🎵 Tester le son
        </button>
      </div>

      ${a?`
      <a href="/admin.html" id="settings-admin-mode"
        style="width:100%;box-sizing:border-box;padding:14px;border-radius:12px;border:none;background:var(--yellow,#D4A017);color:#111;font-weight:900;font-size:14px;cursor:pointer;margin-top:6px;text-align:center;text-decoration:none;display:flex;align-items:center;justify-content:center;gap:8px">
        ⚙️ Administration Mode
      </a>`:""}

      <button id="settings-logout" class="btn" style="width:100%;padding:14px;border-radius:12px;border:1.5px solid #ff6b6b;background:transparent;color:#ff6b6b;font-weight:700;font-size:14px;cursor:pointer;margin-top:${a?"0":"6px"}">
        Déconnexion
      </button>

      <div style="text-align:center;font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace;margin-top:4px">build ${s}</div>

    </div>
  </div>`,t.querySelectorAll("[data-theme-choice]").forEach(y=>{y.addEventListener("click",()=>{Mo(y.dataset.themeChoice),Ko(t,e)})});const c=t.querySelector("#team-color1"),d=t.querySelector("#team-color2"),l=t.querySelector("#team-preview"),f=()=>{l&&(l.style.background=`linear-gradient(135deg, ${c.value} 50%, ${d.value} 50%)`)};f(),c==null||c.addEventListener("input",f),d==null||d.addEventListener("input",f),(u=t.querySelector("#team-save"))==null||u.addEventListener("click",async()=>{const y=t.querySelector("#team-error"),w=t.querySelector("#team-save"),h=t.querySelector("#team-club-name").value.trim();if(h.length<2){y.textContent="Nom de club trop court.";return}w.disabled=!0,w.textContent="⏳ Enregistrement...",y.textContent="";const{error:E}=await v.from("users").update({club_name:h,club_color1:c.value,club_color2:d.value}).eq("id",i.profile.id);if(w.disabled=!1,w.textContent="💾 Enregistrer",E){y.textContent=E.message;return}i.profile.club_name=h,i.profile.club_color1=c.value,i.profile.club_color2=d.value,y.style.color="#2ecc71",y.textContent="✅ Modifications enregistrées.",oi()==="club"&&Mo("club")});const x=t.querySelector("#volume-slider"),b=t.querySelector("#volume-label");let g=null;x.addEventListener("input",()=>{Ln(Number(x.value)),b.textContent=`${x.value}%`,g&&(g.volume=Math.max(0,Math.min(1,Number(x.value)/100)))}),t.querySelector("#volume-test").addEventListener("click",()=>{g=Qi("/sounds/match-opening.mp3",1)}),t.querySelector("#settings-logout").addEventListener("click",async()=>{await v.auth.signOut(),window.location.reload()})}const Me={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Ne(t,e){if(!t)return 0;let i=0;switch(e){case"GK":i=Number(t.note_g)||0;break;case"DEF":i=Number(t.note_d)||0;break;case"MIL":i=Number(t.note_m)||0;break;case"ATT":i=Number(t.note_a)||0;break;default:i=0}return i+(t.boost||0)}const yo=["ATT","MIL","DEF","GK"];function Vo(t,e,i){if(!t||!e)return!1;if(i&&t.position&&e.position)return Li(i).some(([l,f])=>l===t.position&&f===e.position||l===e.position&&f===t.position);const o=t._col!=null&&e._col!=null&&t._col===e._col,r=t._col!=null&&e._col!=null&&Math.abs(t._col-e._col)===1,n=yo.indexOf(t._line||t.job),a=yo.indexOf(e._line||e.job),s=Math.abs(n-a)===1;return(t._line||t.job)===(e._line||e.job)&&r||o&&s}function Yo(t,e){let i=0;const o=t.length;for(let r=0;r<o;r++)for(let n=r+1;n<o;n++){const a=t[r],s=t[n];if(!a||!s||!Vo(a,s,e))continue;const c=Bt(a,s);c==="#00ff88"?i+=10:c==="#FFD700"&&(i+=5)}return i}function si(t,e={},i){let o=0,r=0;t.forEach(c=>{const d=c._line||c.job,l=Number(d==="MIL"?c.note_m:c.note_a)||0,f=c.stadiumBonus&&(d==="MIL"||d==="ATT")?10:0;o+=e.doubleAttack?l*2:l,r+=(c.boost||0)+f});const n=o+r,a=Yo(t,i);let s=n+a;return e.stolenNote&&(s-=e.stolenNote),{base:n,links:a,total:Math.max(0,s)}}function li(t,e={},i){const o=t.reduce((a,s)=>{const c=s._line||s.job;let d=0;c==="GK"?d=Number(s.note_g)||0:c==="MIL"?d=Number(s.note_m)||0:d=Number(s.note_d)||0;const l=s.stadiumBonus&&(c==="GK"||c==="DEF"||c==="MIL")?10:0;return a+d+(s.boost||0)+l},0),r=Yo(t,i);let n=o+r;return e.stolenNote&&(n-=e.stolenNote),{base:o,links:r,total:Math.max(0,n)}}function to(t,e,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:t>e,shielded:!1}}function Wo(t,e,i="easy"){const o=t.filter(a=>!a.used);if(!o.length)return[];const r=[...o].sort((a,s)=>{const c=e==="attack"?Ne(a,"ATT"):a._line==="GK"?Ne(a,"GK"):Ne(a,"DEF");return(e==="attack"?Ne(s,"ATT"):s._line==="GK"?Ne(s,"GK"):Ne(s,"DEF"))-c});let n=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return r.slice(0,Math.min(n,r.length,3))}function Hn(t,e){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[t]||i.vs_ai_easy)[e]||0}const Un={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Jt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},pi=["GK","DEF","MIL","ATT"],Kn=["Tous","GK","DEF","MIL","ATT"],Vn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function ho(t){const e=t.player;return e?(e.rarity,Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)):null}function Yn(t){return t.length?t.reduce((e,i)=>ho(i)>ho(e)?i:e,t[0]):t[0]}const Wn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ui(t,e){return t&&Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Di(t,e=""){const i=t.player;if(!i)return"";const o=t.evolution_bonus||0,r={...i,_evolution_bonus:o},n=e?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${e}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${t.id}">
    ${n}
    ${ze(r,{width:140})}
  </div>`}function vo(t){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${ze(t,{width:140})}
  </div>`}async function Xn(t,e){const{state:i,navigate:o,toast:r,openModal:n,closeModal:a}=e;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await v.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:c}=await v.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),d=(s||[]).filter(C=>C.card_type==="player"&&C.player),l=(s||[]).filter(C=>C.card_type==="game_changer"),f=(s||[]).filter(C=>C.card_type==="formation"),x=(s||[]).filter(C=>C.card_type==="stadium"),{data:b}=await v.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(b||[]).forEach(C=>{g[C.name]=C});const{data:p}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),u={};(p||[]).forEach(C=>{u[C.id]=C}),x.forEach(C=>{C.stadium_def&&(u[C.stadium_id]=C.stadium_def)});const y=Object.keys(Ii),w=Object.keys(Me),h={};d.forEach(C=>{const V=C.player.id;h[V]=(h[V]||0)+1}),new Set(Object.keys(h).map(C=>String(C)));const E=new Set(f.map(C=>C.formation)),m=new Set(l.map(C=>C.gc_type));let S="player",$="Tous",A="",P=!1;function R(){return[...d].sort((C,V)=>{const Q=pi.indexOf(C.player.job),X=pi.indexOf(V.player.job);return Q!==X?Q-X:(C.player.surname_real||"").localeCompare(V.player.surname_real||"")})}function O(){return[...c||[]].sort((C,V)=>{const Q=pi.indexOf(C.job),X=pi.indexOf(V.job);return Q!==X?Q-X:(C.surname_real||"").localeCompare(V.surname_real||"")})}function Y(){return R().filter(C=>{const V=C.player,Q=$==="Tous"||V.job===$,X=!A||`${V.firstname} ${V.surname_real}`.toLowerCase().includes(A);return Q&&X})}function I(){return O().filter(C=>{const V=$==="Tous"||C.job===$,Q=!A||`${C.firstname} ${C.surname_real}`.toLowerCase().includes(A);return V&&Q})}t.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--tile-border);background:var(--tile-bg)">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${S==="player"?"var(--green)":"transparent"};
        color:${S==="player"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${d.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${S==="formation"?"var(--green)":"transparent"};
        color:${S==="formation"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${f.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${S==="gc"?"var(--green)":"transparent"};
        color:${S==="gc"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${l.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${S==="stadium"?"#4FC3F7":"transparent"};
        color:${S==="stadium"?"#4FC3F7":"var(--tile-fg-dim)"}">
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
  </div>`,function(V){const Q=document.getElementById(V);if(!Q)return;Q.addEventListener("wheel",Z=>{Math.abs(Z.deltaY)<=Math.abs(Z.deltaX)||(Z.preventDefault(),Q.scrollLeft+=Z.deltaY)},{passive:!1});let X=!1,re=0,F=0,z=!1,W=!1;Q.addEventListener("mousedown",Z=>{X=!0,z=!1,re=Z.pageX,F=Q.scrollLeft}),window.addEventListener("mouseup",()=>{X=!1,z&&(Q.style.cursor="",W=!0),z=!1}),window.addEventListener("mousemove",Z=>{if(!X)return;const se=Z.pageX-re;!z&&Math.abs(se)<6||(z=!0,Q.style.cursor="grabbing",Z.preventDefault(),Q.scrollLeft=F-se)}),Q.addEventListener("click",Z=>{W&&(Z.stopPropagation(),Z.preventDefault(),W=!1)},!0)}("col-grid");function _(){const C=document.getElementById("col-filters");C&&(S==="player"?(C.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${A}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Kn.map(V=>`
            <button class="filter-btn" data-job="${V}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${V===$?"var(--green)":"var(--tile-border)"};
                background:${V===$?"var(--green)":"#fff"};
                color:${V===$?"#fff":"#555"}">
              ${V}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${P?"var(--yellow)":"var(--tile-border)"};
              background:${P?"var(--yellow)":"#fff"};
              color:${P?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${P?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",V=>{A=V.target.value.toLowerCase(),G()}),t.querySelectorAll(".filter-btn").forEach(V=>{V.addEventListener("click",()=>{$=V.dataset.job,_(),G()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{P=!P,_(),G()})):(C.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${P?"var(--yellow)":"var(--tile-border)"};
              background:${P?"var(--yellow)":"#fff"};
              color:${P?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${P?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{P=!P,_(),G()})))}function G(){const C=document.getElementById("col-grid");C&&(S==="player"?H(C):S==="formation"?pe(C):S==="stadium"?fe(C):me(C))}function K(C,V,Q,X,re,F=0){const z=document.getElementById("col-grid"),W=document.getElementById("col-big");if(!z||!W)return;var Z=0;function se(){var We;const ge=window.innerWidth>=768,ye=document.getElementById("col-big"),$e=document.getElementById("col-gap"),Ee=((We=document.getElementById("col-grid"))==null?void 0:We.parentElement)||null,xe=ye?ye.closest(".page"):null;if(ye&&Ee&&xe){let Le=0;Array.from(xe.children).forEach(function(B){B!==ye&&B!==Ee&&B!==$e&&(Le+=B.offsetHeight)});const qe=Math.max(0,xe.clientHeight-Le),De=Math.round(qe*(F/100)),Ge=Math.max(0,qe-De),k=ge?50/71:45/63,L=Math.round(Ge*k),M=Math.max(0,Ge-L);$e&&($e.style.height=De+"px"),ye.style.flex="none",ye.style.height=L+"px",ye.style.minHeight="0",Ee.style.flex="none",Ee.style.height=M+"px",Ee.style.minHeight="0",Ee.style.display="flex",Ee.style.overflow="hidden"}const be=document.getElementById("col-grid");be&&(be.style.height="100%",be.style.flexShrink="0",be.style.overflowX="auto",be.style.overflowY="hidden",be.style.alignItems="center",be.style.width="100%"),W.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+V(C[Z])+"</div>";var Be=W.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Be&&Be.addEventListener("click",function(){X(C[Z])}),requestAnimationFrame(function(){var Le=document.getElementById("big-card-inner");if(!(!Le||!W)){var qe=W.clientHeight,De=W.clientWidth-16,Ge=Le.offsetHeight,k=Le.offsetWidth;if(Ge>0&&k>0&&qe>40){var L=Math.min(qe/Ge,De/k);Le.style.transform="scale("+L.toFixed(3)+")",Le.style.transformOrigin="center center"}}}),z.innerHTML=C.map(function(Le,qe){var De=qe===Z,Ge="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(De?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+qe+'" style="'+Ge+'">'+Q(Le,De)+"</div>"}).join(""),z.querySelectorAll(".col-mini-item").forEach(function(Le){Le.addEventListener("click",function(){Z=Number(Le.dataset.idx),se(),Le.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var Le=be?be.clientHeight:0,qe=z.querySelector(".col-mini-item > div");if(!(!Le||!qe)){var De=qe.style.zoom;qe.style.zoom="1";var Ge=qe.offsetHeight;if(qe.style.zoom=De,!(Ge<=0)){var k=Le/Ge;z.querySelectorAll(".col-mini-item > div").forEach(function(L){L.style.zoom=k.toFixed(4)})}}})}se()}function le(C,V){var Q=window.innerWidth>=768?.76:.54,X;if(!C||C._fake){var re=C?C.player:null;if(!re)return"";X=vo(re)}else X=Di(C,"");var F=C&&!C._fake?h[C.player&&C.player.id]||1:0,z=F>0?'<div style="position:absolute;top:6px;right:6px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:11px;font-weight:900;padding:2px 7px;z-index:3;box-shadow:0 1px 4px rgba(0,0,0,0.4)">×'+F+"</div>":"";return'<div style="display:inline-block;position:relative;zoom:'+Q+';pointer-events:none;line-height:0">'+z+X+"</div>"}function ce(C,V,Q){var X=Q>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+Q+"</div>":"",re=!!V,F=ni(C,ut[C],{width:160});return re||(F='<div style="filter:grayscale(1);opacity:0.5">'+F+"</div>"),"<div "+(V?'data-form-id="'+V.id+'"':"")+' style="position:relative;cursor:pointer">'+X+F+"</div>"}function j(C,V){var Q=window.innerWidth>=768?.76:.54,X=ni(C,ut[C],{width:140});return V||(X='<div style="filter:grayscale(1);opacity:0.45">'+X+"</div>"),'<div style="display:inline-block;zoom:'+Q+';line-height:0;pointer-events:none">'+X+"</div>"}function H(C){if(P){const V=I();if(!V.length){C.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const Q=V.map(X=>d.find(re=>re.player.id===X.id)||{_fake:!0,player:X,id:"fake-"+X.id});K(Q,X=>X._fake?vo(X.player):Di(X,""),X=>X._fake?le({player:X.player,id:"x",_fake:!0}):le(X),X=>{X._fake||wo(X,d,h,e)})}else{const V=Y();if(!V.length){C.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const Q={};V.forEach(re=>{const F=re.player.id;Q[F]||(Q[F]=[]),Q[F].push(re)});const X=Object.values(Q).map(re=>Yn(re));K(X,re=>{const F=h[re.player.id]||1,z=F>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${F}</div>`:"",Z=d.filter(se=>se.player.id===re.player.id&&se.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Di(re,z+Z)},re=>le(re),re=>wo(re,d,h,e))}}function pe(C){const V=P?y:[...E];if(!V.length){C.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const Q=V.map(X=>({formation:X,card:f.find(re=>re.formation===X)||null,owned:E.has(X)}));K(Q,({formation:X,card:re,owned:F})=>ce(X,F?re:null,F?f.filter(z=>z.formation===X).length:0),({formation:X,owned:re})=>j(X,re),({card:X,owned:re})=>{re&&X&&Qn(X,f,e,n)},"#1A6B3C",5)}function me(C){const V=Object.keys(g),Q=P?V.length?V:w:[...m];if(!Q.length){C.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const X=Q.map(re=>({type:re,gc:Me[re]||{icon:"⚡",desc:""},def:g[re]||null,owned:m.has(re),card:l.find(F=>F.gc_type===re)||null}));K(X,({type:re,gc:F,def:z,owned:W,card:Z})=>{var be;const se=(z==null?void 0:z.name)||re,ge=W?l.filter(Be=>Be.gc_type===re).length:0,ye=ge>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ge}</div>`:"",$e=(z==null?void 0:z.effect)||F.desc||"",Ee=z!=null&&z.image_url?`/icons/${z.image_url}`:((be=z==null?void 0:z.club)==null?void 0:be.logo_url)||(z!=null&&z.country_code?`https://flagsapi.com/${z.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);let xe=nt(se,Ee,F.icon,$e,{width:160,onClick:W});return W||(xe=`<div style="filter:grayscale(1);opacity:0.5">${xe}</div>`),`<div ${W&&Z?`data-gc-id="${Z.id}" data-gc-type="${re}"`:""} style="position:relative">${ye}${xe}</div>`},({type:re,gc:F,def:z,owned:W})=>{const Z=window.innerWidth>=768?.76:.54,se=(z==null?void 0:z.name)||re,ge=(z==null?void 0:z.effect)||F.desc||"",ye=z!=null&&z.image_url?`/icons/${z.image_url}`:null;let $e=nt(se,ye,F.icon,ge,{width:140});return W||($e=`<div style="filter:grayscale(1);opacity:0.45">${$e}</div>`),`<div style="display:inline-block;zoom:${Z};line-height:0;pointer-events:none">${$e}</div>`},({type:re,owned:F,def:z})=>{F&&Jn(re,z,n)},"#7a28b8",5)}function fe(C){const V="#4FC3F7",Q="/";if(!x.length){C.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const X={};x.forEach(F=>{const z=F.stadium_id||"?";(X[z]=X[z]||[]).push(F)});const re=Object.entries(X).map(([F,z])=>({sid:F,def:u[F]||null,count:z.length,card:z[0]}));K(re,({def:F,count:z})=>{var $e,Ee;const W=(F==null?void 0:F.name)||"?",Z=(($e=F==null?void 0:F.club)==null?void 0:$e.encoded_name)||(F==null?void 0:F.country_code)||"—",se=F!=null&&F.image_url?`${Q}icons/${F.image_url}`:((Ee=F==null?void 0:F.club)==null?void 0:Ee.logo_url)||(F!=null&&F.country_code?`https://flagsapi.com/${F.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),ge=z>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${z}</div>`:"",ye=`${Z}<br>+10 ⭐ joueurs alliés`;return`<div style="position:relative">${ge}${Ht(W,se,ye,{width:160})}</div>`},({def:F})=>{var ye,$e;const z=window.innerWidth>=768?.76:.54,W=(F==null?void 0:F.name)||"?",Z=((ye=F==null?void 0:F.club)==null?void 0:ye.encoded_name)||(F==null?void 0:F.country_code)||"—",se=F!=null&&F.image_url?`${Q}icons/${F.image_url}`:(($e=F==null?void 0:F.club)==null?void 0:$e.logo_url)||(F!=null&&F.country_code?`https://flagsapi.com/${F.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),ge=`${Z}<br>+10 ⭐`;return`<div style="display:inline-block;zoom:${z};line-height:0;pointer-events:none">${Ht(W,se,ge,{width:140})}</div>`},null,V,5)}t.querySelectorAll(".col-tab-btn").forEach(C=>{C.addEventListener("click",()=>{S=C.dataset.tab,$="Tous",A="",P=!1,t.querySelectorAll(".col-tab-btn").forEach(V=>{const Q=V.dataset.tab===S;V.style.borderBottomColor=Q?"var(--green)":"transparent",V.style.color=Q?"var(--green)":"var(--tile-fg-dim)"}),_(),G()})}),_(),G()}function Jn(t,e,i){const o=Me[t]||{icon:"⚡",desc:"Effet spécial."},r=(e==null?void 0:e.name)||t,n=(e==null?void 0:e.effect)||o.desc,a=e!=null&&e.image_url?`/icons/${e.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      ${nt(r,a,o.icon,n,{width:200})}
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const fi=1e3;function Qn(t,e,i,o){var g,p,u;const{state:r,toast:n,closeModal:a,navigate:s,refreshProfile:c}=i,d=t.formation,l={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const y=ut[d]||{},w=Ii[d]||[],h=290,E=360,m=20;function S(A){const P=y[A];return P?{x:P.x*h,y:P.y*E}:null}let $=`<svg width="${h}" height="${E}" viewBox="0 0 ${h} ${E}" xmlns="http://www.w3.org/2000/svg">`;for(const[A,P]of w){const R=S(A),O=S(P);!R||!O||($+=`<line x1="${R.x}" y1="${R.y}" x2="${O.x}" y2="${O.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const A of Object.keys(y)){const P=S(A);if(!P)continue;const R=A.replace(/\d+/,""),O=l[R]||"#555";$+=`<circle cx="${P.x}" cy="${P.y}" r="${m}" fill="${O}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,$+=`<text x="${P.x}" y="${P.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${R}</text>`}return $+="</svg>",$}const x=e.filter(y=>y.formation===d);x.length;const b=!t.is_for_sale;o(`Formation ${d}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    ${b?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(g=document.getElementById("direct-sell-form-btn"))==null||g.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${d} pour ${fi.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const y=x.find(h=>!h.is_for_sale)||x[0];if(!y){n("Aucune carte à vendre","error");return}await v.from("market_listings").delete().eq("card_id",y.id),await v.from("transfer_history").delete().eq("card_id",y.id);const{error:w}=await v.from("cards").delete().eq("id",y.id);if(w){n(w.message,"error");return}await v.from("users").update({credits:(r.profile.credits||0)+fi}).eq("id",r.profile.id),await c(),n(`+${fi.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const y=parseInt(document.getElementById("sell-price-form").value);if(!y||y<1){n("Prix invalide","error");return}await v.from("cards").update({is_for_sale:!0,sale_price:y}).eq("id",t.id),await v.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:y}),n("Carte mise en vente sur le marché !","success"),a(),s("collection")}),(u=document.getElementById("cancel-sell-form-btn"))==null||u.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),a(),s("collection")})}async function wo(t,e,i,o){var pe,me,fe,C,V,Q,X,re,F;const{state:r,toast:n,openModal:a,closeModal:s,navigate:c,refreshProfile:d}=o,l=t.player,f=e.filter(z=>z.player.id===l.id),x=f.length,b=t.evolution_bonus||0,g=Math.max((Number(l.note_g)||0)+(l.job==="GK"||l.job2==="GK"?b:0),(Number(l.note_d)||0)+(l.job==="DEF"||l.job2==="DEF"?b:0),(Number(l.note_m)||0)+(l.job==="MIL"||l.job2==="MIL"?b:0),(Number(l.note_a)||0)+(l.job==="ATT"||l.job2==="ATT"?b:0)),p=l.rarity||"normal",{data:u}=await v.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",g).gte("note_max",g).order("note_min",{ascending:!1}).limit(1);((pe=u==null?void 0:u[0])==null?void 0:pe.price)??Vn[p];const y=((me=u==null?void 0:u[0])==null?void 0:me.price_min)??null,w=((fe=u==null?void 0:u[0])==null?void 0:fe.price_max)??null,h=l.rarity!=="legende";Ct(l);const E=ui(l,l.job)+b,m=l.job2?ui(l,l.job2)+(ui(l,l.job2)>0?b:0):null;Jt[l.job],l.job2&&Jt[l.job2];const S=Un[l.rarity]||"#ccc",$=Wn[l.country_code]||l.country_code||"",A=t.evolution_bonus||0,R=E+A,O=m||0,Y=O>0?O+A:0,I=f.map(z=>z.id);let _={};if(I.length){const{data:z}=await v.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",I).order("transferred_at",{ascending:!0});(z||[]).forEach(W=>{_[W.card_id]||(_[W.card_id]=[]),_[W.card_id].push(W)})}const G=I.length?`
    <div style="margin-top:16px;border-top:1px solid var(--tile-border);padding-top:14px">
      ${x-1>0?`<div style="font-size:13px;font-weight:700;margin-bottom:10px">🗂️ Copies (${x-1})</div>`:`
        <div style="font-size:12px;color:#aaa;margin-bottom:10px;font-style:italic">Aucune copie à sacrifier</div>
        ${t.is_for_sale?`
        <div style="background:#fff8e1;border-radius:10px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center">
          <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
          <button id="cancel-sell-btn" class="btn btn-ghost btn-sm">Retirer</button>
        </div>`:h?`
        <!-- Vente directe : un seul exemplaire = c'est cette carte qui part sur le marché -->
        <div style="background:#f0fdf4;border:2px solid #1A6B3C;border-radius:12px;padding:14px">
          <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:8px">🛒 Mettre cette carte en vente</div>
          ${y!==null&&w!==null?`
          <div style="font-size:11px;color:#555;margin-bottom:8px;background:#fff;border-radius:6px;padding:6px 10px">
            💰 Fourchette autorisée : <b>${y.toLocaleString("fr")}</b> – <b>${w.toLocaleString("fr")}</b> cr.
          </div>`:""}
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
        ${f.filter(z=>z.id!==t.id).map((z,W)=>{const Z=_[z.id]||[],se=z.is_for_sale,ge=Z.length?Z[Z.length-1]:null,ye=z.evolution_bonus||0,$e=ge?ge.source==="booster"?"Booster":ge.price?ge.price.toLocaleString("fr")+" cr.":"—":"—",Ee=ge?new Date(ge.transferred_at).toLocaleDateString("fr",{day:"2-digit",month:"2-digit",year:"numeric"}):"",xe=80,be=Math.round(xe*657/507),Be=ze({...l,_evolution_bonus:ye},{width:xe});return`
            <div class="exemplaire-row" data-card-id="${z.id}" data-card-idx="${W}"
              style="position:relative;cursor:${se?"not-allowed":"pointer"};opacity:${se?.55:1};transition:transform .1s">
              <!-- Checkbox cachée -->
              <input type="checkbox" class="expl-check"
                data-id="${z.id}" data-evo="${ye}" data-note="${ui(l,l.job)}"
                ${se?"disabled":""}
                style="display:none">
              <!-- Wrapper exactement aux dimensions de la carte -->
              <div class="expl-mini-card" style="position:relative;width:${xe}px;height:${be}px;border-radius:8px;overflow:hidden">
                ${Be}
                <!-- Overlay vert sélection — couvre toute la carte -->
                <div class="expl-sel-overlay" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(26,107,60,0.38);pointer-events:none;z-index:10;box-shadow:inset 0 0 0 3px #1A6B3C;border-radius:8px"></div>
                <!-- Checkmark -->
                <div class="expl-sel-check" style="display:none;position:absolute;top:5px;left:5px;width:20px;height:20px;background:#1A6B3C;border-radius:50%;z-index:11;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:900">✓</div>
                ${se?'<div style="position:absolute;top:0;right:0;background:#e67e22;color:#fff;font-size:6px;font-weight:900;padding:2px 4px;border-radius:0 6px 0 4px;z-index:12">VENTE</div>':""}
              </div>
              <!-- Source + date -->
              <div style="font-size:9px;color:#888;text-align:center;margin-top:3px;line-height:1.3">
                ${$e}${Ee?`<br>${Ee}`:""}
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
              ${(t.evolution_bonus||0)>0?`+${t.evolution_bonus} appliqué${t.evolution_bonus>1?"s":""} · Note : ${R}${l.job2&&O>0?` / ${Y}`:""}`:`Note actuelle : ${R}${l.job2&&O>0?` / ${Y}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${x<=1?"#ccc":"#1A6B3C"};border-color:${x<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${x<=1?"not-allowed":"pointer"}"
            ${x<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${h?`
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
    </div>`:"";a(`${l.firstname} ${l.surname_real}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${ze({...l,_evolution_bonus:b},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:12px">

        <!-- Rareté + carte évolutive -->
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:3px">RARETÉ</div>
          <div style="font-weight:900;font-size:15px;color:${l.rarity==="normal"?"#555":l.rarity==="papyte"?"#707070":S}">${l.rarity.toUpperCase()}</div>
          ${l.rarity==="pepite"||l.rarity==="papyte"?`
          <div style="margin-top:8px;background:${S}12;border-left:3px solid ${S};border-radius:0 8px 8px 0;padding:10px 12px">
            <div style="font-size:11px;font-weight:700;color:${S};margin-bottom:4px">✨ Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5;margin-bottom:6px">
              ${l.rarity==="pepite"?'⬆️ Bonus évolution : <b style="color:#D4A017">+30%</b>':'⬇️ Malus évolution : <b style="color:#909090">-30%</b>'}
            </div>
            <div style="font-size:10.5px;color:#888;line-height:1.5;font-style:italic;border-top:1px solid ${S}30;padding-top:6px">
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
            <div style="font-weight:700;font-size:13px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${((C=l.clubs)==null?void 0:C.encoded_name)||"—"}</div>
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
            ${[["GK",l.note_g],["DEF",l.note_d],["MIL",l.note_m],["ATT",l.note_a]].map(([z,W])=>{const Z=Jt[z],se=z==="GK"?"#fff":Z,ge=z===l.job||z===l.job2,ye=(Number(W)||0)+(ge&&A>0?A:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${Z};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${se};font-family:Arial Black,Arial;line-height:1">${ye}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${se}">${z}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:#888;letter-spacing:.5px;margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:900;font-size:18px;color:#1A6B3C">×${x}</div>
        </div>
      </div>
    </div>
    ${G}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(V=document.getElementById("close-detail"))==null||V.addEventListener("click",s);let K=new Set;const le=l.rarity==="pepite"?1.3:l.rarity==="papyte"?.7:1;function ce(){let z=0;return document.querySelectorAll(".expl-check:checked").forEach(W=>{if(W.dataset.id===t.id)return;const se=Number(W.dataset.evo)||0,ge=Number(W.dataset.note)||0;z+=ge+se}),Math.round(z*le)}const j=()=>{const z=K.size,W=document.getElementById("sell-action-panel");if(!W)return;W.style.display=z>0?"block":"none",document.getElementById("sell-selected-count").textContent=z;const Z=document.getElementById("evolve-btn");if(Z){const se=ce();Z.textContent=se>0?`⬆️ Évoluer (+${se})`:"⬆️ Évoluer"}};document.querySelectorAll(".expl-check").forEach(z=>{z.addEventListener("change",()=>{const W=z.dataset.id;z.checked?K.add(W):K.delete(W);const Z=z.closest(".exemplaire-row");if(Z){const se=Z.querySelector(".expl-sel-overlay"),ge=Z.querySelector(".expl-sel-check");se&&(se.style.display=z.checked?"block":"none"),ge&&(ge.style.display=z.checked?"flex":"none"),Z.style.transform=z.checked?"scale(1.05)":"scale(1)"}j()})}),document.querySelectorAll(".exemplaire-row").forEach(z=>{z.addEventListener("click",W=>{if(W.target.tagName==="INPUT")return;const Z=z.querySelector(".expl-check");Z&&!Z.disabled&&(Z.checked=!Z.checked,Z.dispatchEvent(new Event("change")))})}),(Q=document.getElementById("evolve-btn"))==null||Q.addEventListener("click",async()=>{if(x<=1)return;const z=[...K];if(!z.length)return;if(K.has(t.id)){const xe=document.createElement("div");xe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",xe.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(xe),xe.querySelector("#err-close").addEventListener("click",()=>xe.remove()),xe.addEventListener("click",be=>{be.target===xe&&xe.remove()});return}const W=z.filter(xe=>xe!==t.id);if(!W.length){n("Sélectionne des copies à sacrifier","warning");return}const Z=W.reduce((xe,be)=>{const Be=document.querySelector(`.expl-check[data-id="${be}"]`),We=Be&&Number(Be.dataset.evo)||0,Le=Be&&Number(Be.dataset.note)||0;return xe+Le+We},0),se=Math.round(Z*le),ge=l.rarity==="pepite"?" (+30% pépite ✨)":l.rarity==="papyte"?" (-30% papyte)":"";if(!await new Promise(xe=>{const be=document.createElement("div");be.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",be.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${l.firstname} ${l.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${W.length}</strong> copie${W.length>1?"s":""} sacrifiée${W.length>1?"s":""}<br>
            ➕ Brut : <strong>+${Z}</strong>${ge?`<span style="font-size:11px;color:#888"> ${ge}</span>`:""}<br>
            ⬆️ Bonus final : <strong style="color:#1A6B3C">+${se}</strong><br>
            📈 Évolution : <strong>${t.evolution_bonus||0}</strong> → <strong style="color:#1A6B3C">${(t.evolution_bonus||0)+se}</strong><br>
            📊 Note finale : <strong>${E}</strong> → <strong style="color:#1A6B3C">${E+se}</strong>
            ${m&&m>0?`<br>📊 Note 2 finale : <strong>${m}</strong> → <strong style="color:#1A6B3C">${m+se}</strong>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(be),be.querySelector("#sac-cancel").addEventListener("click",()=>{be.remove(),xe(!1)}),be.querySelector("#sac-ok").addEventListener("click",()=>{be.remove(),xe(!0)}),be.addEventListener("click",Be=>{Be.target===be&&(be.remove(),xe(!1))})}))return;if(W.length){await v.from("market_listings").delete().in("card_id",W),await v.from("deck_cards").delete().in("card_id",W),await v.from("transfer_history").delete().in("card_id",W),await v.from("decks").update({stadium_card_id:null}).in("stadium_card_id",W);const{error:xe}=await v.from("cards").delete().in("id",W);if(xe){n("Erreur suppression : "+xe.message,"error");return}}const $e=(t.evolution_bonus||0)+se,{error:Ee}=await v.from("cards").update({evolution_bonus:$e}).eq("id",t.id);if(Ee){n("Erreur évolution : "+Ee.message,"error");return}n(`⬆️ ${l.firstname} ${l.surname_real} : note ${E} → ${E+$e} (+${se}) !`,"success",4e3),s(),c("collection")});async function H(z){const{data:W}=await v.from("sell_price_configs").select("price_min, price_max").eq("rarity",l.rarity).lte("note_min",E).gte("note_max",E).order("note_max",{ascending:!0}).limit(1).maybeSingle();return W?z<W.price_min||z>W.price_max?{ok:!1,min:W.price_min,max:W.price_max}:{ok:!0}:{ok:!0}}(X=document.getElementById("market-sell-btn"))==null||X.addEventListener("click",async()=>{var $e;const z=[...K];if(!z.length){n("Sélectionne au moins un exemplaire","warning");return}const W=parseInt(($e=document.getElementById("sell-market-price"))==null?void 0:$e.value);if(!W||W<1){n("Prix invalide","error");return}const Z=await H(W);if(!Z.ok){n(`Prix hors grille : entre ${Z.min.toLocaleString("fr")} et ${Z.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:se}=await v.from("cards").update({is_for_sale:!0,sale_price:W}).in("id",z);if(se){n(se.message,"error");return}const ge=z.map(Ee=>({seller_id:r.profile.id,card_id:Ee,price:W,status:"active"})),{error:ye}=await v.from("market_listings").insert(ge);ye&&console.warn("[Market] insert listings:",ye.message),n(`${z.length} carte${z.length>1?"s":""} mise${z.length>1?"s":""} en vente à ${W.toLocaleString("fr")} cr. chacune !`,"success"),s(),c("collection")}),(re=document.getElementById("single-sell-btn"))==null||re.addEventListener("click",async()=>{var ge;const z=parseInt((ge=document.getElementById("single-sell-price"))==null?void 0:ge.value);if(!z||z<1){n("Prix invalide","error");return}const W=await H(z);if(!W.ok){n(`Prix hors grille : entre ${W.min.toLocaleString("fr")} et ${W.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:Z}=await v.from("cards").update({is_for_sale:!0,sale_price:z}).eq("id",t.id);if(Z){n(Z.message,"error");return}const{error:se}=await v.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:z,status:"active"});se&&console.warn("[Market] insert listing:",se.message),n(`Carte mise en vente à ${z.toLocaleString("fr")} cr. !`,"success"),s(),c("collection")}),(F=document.getElementById("cancel-sell-btn"))==null||F.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),n("Annonce retirée","success"),s(),c("collection")})}function _o(t,e=""){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${t}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(e||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const r=o.querySelector("#pm-input");r.focus(),r.select();const n=a=>{o.remove(),i(a)};o.querySelector("#pm-ok").addEventListener("click",()=>n(r.value.trim()||null)),o.querySelector("#pm-cancel").addEventListener("click",()=>n(null)),o.querySelector("#pm-cancel2").addEventListener("click",()=>n(null)),o.addEventListener("click",a=>{a.target===o&&n(null)}),r.addEventListener("keydown",a=>{a.key==="Enter"&&n(r.value.trim()||null),a.key==="Escape"&&n(null)})})}function Zn(t,e=!1){return new Promise(i=>{const o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2100",o.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${t}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${e?"":"btn-primary"}" id="cm-ok" style="${e?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);const r=n=>{o.remove(),i(n)};o.querySelector("#cm-ok").addEventListener("click",()=>r(!0)),o.querySelector("#cm-cancel").addEventListener("click",()=>r(!1)),o.addEventListener("click",n=>{n.target===o&&r(!1)})})}const hi={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Gi(t,e){const{state:i,navigate:o,toast:r}=e;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await v.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});t.innerHTML=`
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(n==null?void 0:n.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(n==null?void 0:n.length)>0?n.map(a=>`
          <div class="card-panel" data-open-deck="${a.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="font-weight:700;font-size:15px;flex:1">${a.name}</div>
            <div style="display:flex;gap:6px" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${a.id}" data-name="${a.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${a.id}" data-name="${a.name}">🗑️</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=await _o("Nom du deck",`Deck ${((n==null?void 0:n.length)||0)+1}`);if(!a)return;const{data:s,error:c}=await v.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(c){r(c.message,"error");return}r("Deck créé !","success"),ko(s.id,t,e)}),t.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>ko(a.dataset.openDeck,t,e))}),t.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const s=await _o("Nouveau nom",a.dataset.name);if(!s||s===a.dataset.name)return;const{error:c}=await v.from("decks").update({name:s}).eq("id",a.dataset.rename);if(c){r(c.message,"error");return}r("Deck renommé !","success"),Gi(t,e)})}),t.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!await Zn(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`,!0))return;await v.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:s}=await v.from("decks").delete().eq("id",a.dataset.delete);if(s){r(s.message,"error");return}r("Deck supprimé.","success"),Gi(t,e)})})}async function ko(t,e,i){const{state:o,toast:r}=i;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await v.from("decks").select("*").eq("id",t).single(),{data:a}=await v.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:s}=await v.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id).eq("card_type","stadium"),c=(a||[]).filter(y=>y.card_type==="player"&&y.player),d=(a||[]).filter(y=>y.card_type==="formation"),l=(s||[]).filter(y=>y.card_type==="stadium"),f=[...new Set(l.map(y=>y.stadium_id).filter(Boolean))];let x={};if(l.forEach(y=>{y.stadium_def&&y.stadium_id&&(x[y.stadium_id]=y.stadium_def)}),f.length&&Object.keys(x).length<f.length){const{data:y}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",f);(y||[]).forEach(w=>{x[w.id]=w})}const b=d.map(y=>y.formation).filter(Boolean),{data:g}=await v.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",t);let p=n.formation||"4-4-2";b.length>0&&!b.includes(p)&&(p=b[0]);const u={deckId:t,name:n.name,formation:p,formationCardId:n.formation_card_id,stadiumCardId:n.stadium_card_id||null,slots:{},subs:[],playerCards:c,formationCards:d,stadiumCards:l,stadDefMap:x,availableFormations:b};(g||[]).forEach(y=>{y.is_starter?u.slots[y.position]=y.card_id:u.subs.includes(y.card_id)||u.subs.push(y.card_id)}),$t(e,u,i)}function $t(t,e,i){var g,p;const{navigate:o}=i;hi[e.formation];const r=$o(e.formation),n=r.filter(u=>e.slots[u]).length,a=e.availableFormations.length>0?e.availableFormations:Object.keys(hi),s=(g=e.stadiumCards)==null?void 0:g.find(u=>u.id===e.stadiumCardId),c=s&&((p=e.stadDefMap)==null?void 0:p[s.stadium_id])||null,d=e.subs.map(u=>e.playerCards.find(y=>y.id===u)).filter(Boolean);d.length!==e.subs.length&&(e.subs=d.map(u=>u.id)),[...Object.values(e.slots),...e.subs],t.innerHTML=`
  <style>.no-scrollbar::-webkit-scrollbar{display:none}</style>
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:8px;padding:6px 12px;min-height:0">
      <button class="btn-icon" id="builder-back" style="font-size:16px">←</button>
      <div style="flex:1">
        <h2 style="font-size:14px;margin:0">${e.name}</h2>
        <p style="font-size:11px;margin:0">${n}/11 · ${d.length}/5 rempl.</p>
      </div>
    </div>



    <!-- ── LAYOUT PC ─────────────────────────────────────── -->
    <div class="deck-pc-layout" style="display:none">
      <div style="display:flex;gap:0;min-height:600px">

        <!-- Remplaçants (colonne gauche) -->
        <div style="width:105px;flex-shrink:0;background:rgba(0,0,0,0.3);display:flex;flex-direction:column;align-items:center;padding:12px 6px;gap:8px;border-right:1px solid rgba(255,255,255,0.1)">


          <!-- Remplaçants PC : colonne verticale -->
          <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;text-align:center;margin-top:8px">Remplaçants<br>(${d.length}/5)</div>
          <div style="display:flex;flex-direction:column;gap:6px;align-items:center" id="subs-list">
            ${d.map(u=>{const y={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:24px">
                ${ze({...y,_evolution_bonus:y._evolution_bonus||0},{width:90,showStad:!0,stadDef:c})}
                <button data-remove-sub="${u.id}"
                  style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:20px;height:20px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
              </div>`}).join("")}
            ${d.length<5?'<div id="add-sub-btn" style="width:90px;height:117px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:18px;color:rgba(255,255,255,0.4);cursor:pointer">+</div>':""}
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
              ${ni(e.formation,ut[e.formation],{width:100})}
            </div>
          </div>
          <!-- Stade -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">🏟️ Stade</div>
            <div id="add-stad-btn-pc" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${s?(()=>{var w;const u=e.stadDefMap[s.stadium_id],y=((w=u==null?void 0:u.club)==null?void 0:w.logo_url)||(u==null?void 0:u.image_url)||(u!=null&&u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ht((u==null?void 0:u.name)||"Stade",y,"+10 ⭐",{width:100})})():`<div style="width:100px;height:171px;border:2px dashed rgba(79,195,247,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
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
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">Remplaçants (${d.length}/5)</div>
            <div style="display:flex;gap:2px;align-items:center;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none" id="subs-list" class="no-scrollbar">
              ${d.map(u=>{const y={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:20px">
                  ${ze({...y,_evolution_bonus:y._evolution_bonus||0},{width:44,showStad:!0,stadDef:c})}
                  <button data-remove-sub="${u.id}"
                    style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:16px;height:16px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
                </div>`}).join("")}
              ${d.length<5?'<div id="add-sub-btn" style="width:44px;height:57px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:14px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
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
              ${s?(()=>{var w;const u=e.stadDefMap[s.stadium_id],y=((w=u==null?void 0:u.club)==null?void 0:w.logo_url)||(u==null?void 0:u.image_url)||(u!=null&&u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ht((u==null?void 0:u.name)||"Stade",y,"+10⭐",{width:44})})():`<div style="width:44px;height:57px;border:2px dashed rgba(79,195,247,0.5);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
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
  </div>`;const l=window.innerWidth>=900,f=t.querySelector(".deck-pc-layout"),x=t.querySelector(".deck-mobile-layout");f&&(f.style.display=l?"block":"none"),x&&(x.style.display=l?"none":"block"),t.querySelectorAll("#save-deck").forEach(u=>{u.closest(".page-body").style.display=l?"none":"block"}),er(t,e,r,i),t.querySelectorAll("#builder-back").forEach(u=>u.addEventListener("click",()=>o("decks")));const b=()=>{const{openModal:u,closeModal:y}=i,h=`<div style="display:flex;flex-wrap:wrap;gap:12px;padding:8px;justify-content:center">
      ${[...new Set(a)].map(E=>{const m=E===e.formation;return`<div data-forma="${E}" style="cursor:pointer;border-radius:10px;${m?"box-shadow:0 0 0 3px #1A6B3C":""}">
          ${ni(E,ut[E],{width:90})}
        </div>`}).join("")}
    </div>`;u("⚽ Choisir une formation",h),document.querySelectorAll("#modal-body [data-forma]").forEach(E=>{E.addEventListener("click",()=>{e.formation=E.dataset.forma;const m=$o(e.formation),S={};m.forEach($=>{e.slots[$]&&(S[$]=e.slots[$])}),e.slots=S,y(),$t(t,e,i)})})};t.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(u=>u.addEventListener("click",b)),t.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(u=>u.addEventListener("click",()=>tr(e,t,i))),t.querySelectorAll("#save-deck, #save-deck-pc").forEach(u=>u.addEventListener("click",()=>nr(e,i))),t.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{e.subs=e.subs.filter(y=>y!==u.dataset.removeSub),$t(t,e,i)})}),t.querySelectorAll("#add-sub-btn").forEach(u=>u.addEventListener("click",()=>or(e,t,i)))}function er(t,e,i,o){var h,E,m;const r=window.innerWidth>=900,n=t.querySelector(r?"#deck-field-pc":"#deck-field-mobile");if(!n)return;const a=(h=e.stadiumCards)==null?void 0:h.find(S=>S.id===e.stadiumCardId),s=a&&((E=e.stadDefMap)==null?void 0:E[a.stadium_id])||null,c=ut[e.formation]||{},d=Li(e.formation)||[],l={};for(const S of i){const $=e.slots[S],A=$?e.playerCards.find(P=>P.id===$):null;A!=null&&A.player?l[S]={...A.player,_evolution_bonus:A.evolution_bonus||0,face:A.player.face||null}:l[S]=null}const f=window.innerWidth>=900,x=f?window.innerWidth-280:window.innerWidth-20,b=f?Math.min(x,860):x,g=Math.round(f?b*.82:b*.85),p=f?84:44;let u="";for(const[S,$]of d){const A=c[S],P=c[$];if(!A||!P)continue;const R=A.x*b,O=Math.round(.03*g+A.y*.85*g),Y=P.x*b,I=Math.round(.03*g+P.y*.85*g),_=l[S],G=l[$],K=Bt(_,G);K==="#ff3333"||K==="#cc2222"?u+=`<line x1="${R.toFixed(1)}" y1="${O.toFixed(1)}" x2="${Y.toFixed(1)}" y2="${I.toFixed(1)}" stroke="${K}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(u+=`<line x1="${R.toFixed(1)}" y1="${O.toFixed(1)}" x2="${Y.toFixed(1)}" y2="${I.toFixed(1)}" stroke="${K}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,u+=`<line x1="${R.toFixed(1)}" y1="${O.toFixed(1)}" x2="${Y.toFixed(1)}" y2="${I.toFixed(1)}" stroke="${K}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let y="";const w=Math.round(p*657/507);for(const S of i){const $=c[S];if(!$)continue;const A=l[S],P=$.x*b;$.y*g;const R=Math.round(.03*g+$.y*(.85*g)),O=Math.round(P-p/2),Y=Math.round(R-w/2);if(A){const I=S.replace(/\d+/,""),_=s&&(s.club_id&&String(A.club_id)===String(s.club_id)||s.country_code&&A.country_code===s.country_code),G=ze({...A,_evolution_bonus:A._evolution_bonus||0},{width:p,showStad:!0,stadDef:s,role:I});_&&((m=s.club)!=null&&m.logo_url||s.image_url),y+=`<div style="position:absolute;left:${O}px;top:${Y}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${S}">
        <div style="position:relative">${G}</div>
      </div>`}else{const I=S.replace(/\d+/,"");y+=`<div style="position:absolute;left:${O}px;top:${Y}px;width:${p}px;height:${w}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${S}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${I}</span>
      </div>`}}n.innerHTML=`
    <div style="position:relative;width:${b}px;height:${g}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${b} ${g}">${u}</svg>
      ${y}
    </div>`,n.querySelectorAll(".deck-slot-hit").forEach(S=>{S.addEventListener("click",()=>ir(S.dataset.pos,e,t,o))})}function tr(t,e,i){var s;const{openModal:o,closeModal:r}=i,n=new Set,a=(t.stadiumCards||[]).filter(c=>{const d=c.stadium_id||c.id;return n.has(d)?!1:(n.add(d),!0)});o("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:90px;text-align:center">
        <div style="width:85px;height:112px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${t.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:26px">🚫</span>
          <span style="font-size:10px;color:#666">Aucun</span>
        </div>
      </div>
      ${a.map(c=>{var b;const d=t.stadDefMap[c.stadium_id],l=((b=d==null?void 0:d.club)==null?void 0:b.logo_url)||(d==null?void 0:d.image_url)||(d!=null&&d.country_code?`https://flagsapi.com/${d.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),f=t.stadiumCardId===c.id,x=Ht((d==null?void 0:d.name)||"Stade",l,"+10⭐",{width:90});return`<div class="stad-choice" data-stad-id="${c.id}" style="cursor:pointer;position:relative;border-radius:8px;${f?"box-shadow:0 0 0 3px #4fc3f7":""}">
          ${x}
        </div>`}).join("")}
    </div>`),(s=document.getElementById("stad-none"))==null||s.addEventListener("click",()=>{t.stadiumCardId=null,r(),$t(e,t,i)}),document.querySelectorAll(".stad-choice").forEach(c=>{c.addEventListener("click",()=>{t.stadiumCardId=c.dataset.stadId,r(),$t(e,t,i)})})}function ir(t,e,i,o){var g,p,u,y,w;const{openModal:r,closeModal:n}=o,a=t.replace(/\d+/,""),s=(g=e.stadiumCards)==null?void 0:g.find(h=>h.id===e.stadiumCardId),c=s&&((p=e.stadDefMap)==null?void 0:p[s.stadium_id])||null,d=e.slots[t],l=d?e.playerCards.find(h=>h.id===d):null;(u=l==null?void 0:l.player)==null||u.id;const f=new Set;Object.entries(e.slots).forEach(([h,E])=>{var S;if(h===t||!E)return;const m=e.playerCards.find($=>$.id===E);(S=m==null?void 0:m.player)!=null&&S.id&&f.add(m.player.id)}),e.subs.forEach(h=>{var m;const E=e.playerCards.find(S=>S.id===h);(m=E==null?void 0:E.player)!=null&&m.id&&f.add(E.player.id)});const x=new Set,b=e.playerCards.filter(h=>{const E=h.player;return!(E.job===a||E.job2===a)||f.has(E.id)||x.has(E.id)?!1:(x.add(E.id),!0)});b.sort((h,E)=>{const m=h.evolution_bonus||0,S=E.evolution_bonus||0,$=(a==="GK"?h.player.note_g:a==="DEF"?h.player.note_d:a==="MIL"?h.player.note_m:h.player.note_a)+(a===h.player.job||a===h.player.job2?m:0);return(a==="GK"?E.player.note_g:a==="DEF"?E.player.note_d:a==="MIL"?E.player.note_m:E.player.note_a)+(a===E.player.job||a===E.player.job2?S:0)-$}),r(`Choisir ${a} — ${t}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${e.slots[t]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${b.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+b.map(h=>{const E={...h.player,_evolution_bonus:h.evolution_bonus||0};return`<div class="player-option" data-card-id="${h.id}" style="cursor:pointer">
          ${ze(E,{width:100,showStad:!0,stadDef:c,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(y=document.getElementById("close-selector"))==null||y.addEventListener("click",n),(w=document.getElementById("remove-player"))==null||w.addEventListener("click",()=>{delete e.slots[t],n(),$t(i,e,o)}),document.querySelectorAll(".player-option").forEach(h=>{h.addEventListener("click",()=>{e.slots[t]=h.dataset.cardId,n(),$t(i,e,o)})})}function or(t,e,i){var l,f,x;const{openModal:o,closeModal:r}=i,n=(l=t.stadiumCards)==null?void 0:l.find(b=>b.id===t.stadiumCardId),a=n&&((f=t.stadDefMap)==null?void 0:f[n.stadium_id])||null,s=new Set;Object.keys(t.slots).forEach(b=>{var u;const g=t.slots[b];if(!g)return;const p=t.playerCards.find(y=>y.id===g);(u=p==null?void 0:p.player)!=null&&u.id&&s.add(p.player.id)}),t.subs.forEach(b=>{var p;const g=t.playerCards.find(u=>u.id===b);(p=g==null?void 0:g.player)!=null&&p.id&&s.add(g.player.id)});const c=new Set,d=t.playerCards.filter(b=>{var g,p,u;return s.has((g=b.player)==null?void 0:g.id)||c.has((p=b.player)==null?void 0:p.id)?!1:(c.add((u=b.player)==null?void 0:u.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${d.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+d.map(b=>{const g={...b.player,_evolution_bonus:b.evolution_bonus||0};return`<div class="player-option" data-card-id="${b.id}" style="cursor:pointer">
          ${ze(g,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(x=document.getElementById("close-sub-selector"))==null||x.addEventListener("click",r),document.querySelectorAll(".player-option").forEach(b=>{b.addEventListener("click",()=>{t.subs.push(b.dataset.cardId),r(),$t(e,t,i)})})}async function nr(t,e){const{state:i,toast:o,navigate:r}=e,n=t.formationCards.find(c=>c.formation===t.formation),a=(n==null?void 0:n.id)||t.formationCardId;await v.from("decks").update({formation:t.formation,formation_card_id:a||null,stadium_card_id:t.stadiumCardId||null}).eq("id",t.deckId),await v.from("deck_cards").delete().eq("deck_id",t.deckId);const s=[];if(Object.entries(t.slots).forEach(([c,d],l)=>{s.push({deck_id:t.deckId,card_id:d,position:c,is_starter:!0,slot_order:l})}),t.subs.forEach((c,d)=>{s.push({deck_id:t.deckId,card_id:c,position:`SUB${d+1}`,is_starter:!1,slot_order:100+d})}),s.length>0){const{error:c}=await v.from("deck_cards").insert(s);if(c){o(c.message,"error");return}}o("Deck enregistré ✅","success"),r("decks")}function $o(t){const e=hi[t]||hi["4-4-2"],i=["GK1"];for(let o=1;o<=e.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=e.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=e.ATT;o++)i.push(`ATT${o}`);return i}async function Xo(t=null){const e=new Date().toISOString().slice(0,10),{data:i}=await v.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const o=i.filter(a=>!(a.available_from&&e<a.available_from||a.available_until&&e>a.available_until));if(!o.length)return[];let r=o;if(t){const a=o.filter(s=>s.max_per_user!=null);if(a.length){const{data:s}=await v.from("booster_claims").select("booster_id").eq("user_id",t).in("booster_id",a.map(d=>d.id)),c={};(s||[]).forEach(d=>{c[d.booster_id]=(c[d.booster_id]||0)+1}),r=o.filter(d=>d.max_per_user==null?!0:(c[d.id]||0)<d.max_per_user)}}if(!r.length)return[];const{data:n}=await v.from("booster_drop_rates").select("*").in("booster_id",r.map(a=>a.id)).order("sort_order");return r.map(a=>({...a,rates:(n||[]).filter(s=>s.booster_id===a.id)}))}async function rr(t,e){const{data:i}=await v.from("booster_configs").select("max_per_user").eq("id",e).single();i!=null&&i.max_per_user&&await v.from("booster_claims").insert({user_id:t,booster_id:e})}function ar(t){if(!(t!=null&&t.length))return null;const e=t.reduce((o,r)=>o+Number(r.percentage),0);let i=Math.random()*e;for(const o of t)if(i-=Number(o.percentage),i<=0)return o;return t[t.length-1]}const Jo=()=>Object.keys(ut),sr=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Ri={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function lr(t){const e=t.player;if(!e)return"";const i=t.evolution_bonus||0;return ze({...e,_evolution_bonus:i},{width:140})}function Qo(t){var r;const e={};(t.rates||[]).forEach(n=>{e[n.card_type]=(e[n.card_type]||0)+Number(n.percentage||0)});const i=((r=Object.entries(e).sort((n,a)=>a[1]-n[1])[0])==null?void 0:r[0])||"player",o=t.image_url||"booster-players.png";return{id:t.id,img:"/icons/"+o,name:t.name,sub:`${t.card_count} carte(s)`,cost:t.price_type==="credits"&&t.price_credits||0,costLabel:t.price_type==="credits"?`${(t.price_credits||0).toLocaleString("fr")} crédits`:t.price_type==="pub"?"1 pub":"Gratuit",cardCount:t.card_count||5,type:i,isPub:t.price_type==="pub",rates:t.rates||[],allow_duplicates:t.allow_duplicates!==!1,_boosterId:t.id,_raw:t}}async function dr(t,{state:e,navigate:i,toast:o}){var f,x,b;const r=((f=e.profile)==null?void 0:f.credits)||0;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let n=[];try{n=(await Xo((x=e.user)==null?void 0:x.id)).map(Qo)}catch(g){console.warn("Erreur chargement boosters DB, fallback hardcodé",g)}n.length||(n=sr.map(g=>({...g,rates:[],isPub:g.id==="players_pub"})));const a=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.profile.id).then(g=>g.data||[]),s=new Set(a.filter(g=>g.card_type==="stadium").map(g=>g.stadium_id)),c=new Set(a.filter(g=>g.card_type==="formation").map(g=>g.formation)),d=new Set(a.filter(g=>g.card_type==="game_changer").map(g=>g.gc_type)),l={};for(const g of n){if(g.allow_duplicates!==!1||!((b=g.rates)!=null&&b.length))continue;const p=[...new Set((g.rates||[]).map(y=>y.card_type))];let u=!1;for(const y of p)if(y==="stadium"){const{data:w}=await v.from("stadium_definitions").select("id");if((w||[]).some(h=>!s.has(h.id))){u=!0;break}}else if(y==="game_changer"){const{data:w}=await v.from("gc_definitions").select("name").eq("is_active",!0);if((w||[]).some(h=>!d.has(h.name))){u=!0;break}}else if(y==="formation"){const{FORMATION_LINKS:w}=await qo(async()=>{const{FORMATION_LINKS:h}=await import("./special-cards-CuDZ8qxo.js").then(E=>E.y);return{FORMATION_LINKS:h}},__vite__mapDeps([0,1]));if(Object.keys(w).some(h=>!c.has(h))){u=!0;break}}else{u=!0;break}u||(l[g.id]=!0)}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${r.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${n.map(g=>{const p=g.cost===0||r>=g.cost,u=l[g.id]===!0;return`<div class="booster-card ${!p||u?"disabled":""}" data-booster="${g.id}" style="position:relative">
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
  </div>`,t.querySelectorAll(".booster-card:not(.disabled)").forEach(g=>{g.addEventListener("click",async()=>{const p=n.find(u=>u.id===g.dataset.booster);if(p){g.style.opacity="0.5",g.style.pointerEvents="none";try{await cr(p,{state:e,toast:o,navigate:i,container:t})}catch(u){o(u.message,"error"),g.style.opacity="",g.style.pointerEvents=""}}})}),t.querySelectorAll(".booster-info-btn").forEach(g=>{g.addEventListener("click",p=>{p.stopPropagation();const u=n.find(y=>y.id===g.dataset.boosterId);mr(u)})})}async function cr(t,{state:e,toast:i,navigate:o,container:r}){var f,x;if(t.cost>0&&e.profile.credits<t.cost){i("Crédits insuffisants","error");return}t.isPub&&await br();const{data:n}=await v.from("cards").select("card_type, player_id, formation").eq("owner_id",e.profile.id),a=new Set((n||[]).filter(b=>b.card_type==="player").map(b=>b.player_id)),s=new Set((n||[]).filter(b=>b.card_type==="formation").map(b=>b.formation));let c=[],d=null;try{if((f=t.rates)!=null&&f.length)c=await Oi(e.profile,t);else{const b=t.type||"player";b==="player"?c=await Zo(e.profile,t.cardCount,t.cost):b==="game_changer"?c=await en(e.profile,t.cardCount,t.cost):b==="formation"?c=await tn(e.profile,t.cost):c=await Oi(e.profile,t)}}catch(b){d=b.message||String(b),console.error("[Booster] Erreur:",b)}if(c!=null&&c.length&&t._boosterId&&await rr(e.user.id,t._boosterId),!(c!=null&&c.length)){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",b.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${d||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(b),(x=b.querySelector("#anim-close-err"))==null||x.addEventListener("click",()=>b.remove());return}c.forEach(b=>{b.card_type==="player"&&b.player?b.isDuplicate=a.has(b.player.id):b.card_type==="formation"&&(b.isDuplicate=s.has(b.formation))});const{data:l}=await v.from("users").select("*").eq("id",e.profile.id).single();l&&(e.profile=l),on(c,t,o)}function pr(){const t=Math.random()*100;return t<.5?"legende":t<2?"special":t<10?"normal_high":"normal_low"}function yt(t){return Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function ur(t,e){let i;switch(e){case"legende":i=t.filter(o=>o.rarity==="legende"),i.length||(i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=t.filter(o=>yt(o)>=6));break;case"special":i=t.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=t.filter(o=>yt(o)>=6));break;case"normal_high":i=t.filter(o=>o.rarity==="normal"&&yt(o)>=6),i.length||(i=t.filter(o=>yt(o)>=6));break;default:i=t.filter(o=>o.rarity==="normal"&&yt(o)>=1&&yt(o)<=5),i.length||(i=t.filter(o=>o.rarity==="normal"));break}return i.length||(i=t),i[Math.floor(Math.random()*i.length)]}async function Oi(t,e){if(e.cost>0){const{error:x}=await v.from("users").update({credits:t.credits-e.cost}).eq("id",t.id);if(x)throw x;t.credits-=e.cost,Ti(t.credits)}const i=e.allow_duplicates!==!1;let o=[];const{data:r,error:n}=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.id);if(n){const{data:x}=await v.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",t.id);o=x||[]}else o=r||[];const a=new Set(o.filter(x=>x.card_type==="player").map(x=>x.player_id)),s=new Set(o.filter(x=>x.card_type==="formation").map(x=>x.formation)),c=new Set(o.filter(x=>x.card_type==="game_changer").map(x=>x.gc_type)),d=new Set(o.filter(x=>x.card_type==="stadium").map(x=>x.stadium_id).filter(Boolean)),l=new Set,f=[];for(let x=0;x<(e.cardCount||5);x++){const b=ar(e.rates);if(b){if(b.card_type==="player"){const g=$=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[$]||$,p=b.rarity?g(b.rarity):null;let u=v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(u=u.eq("rarity",p));const{data:y}=await u;let w=y||[];if((b.note_min||b.note_max)&&(w=w.filter($=>{const A=Math.max(Number($.note_g)||0,Number($.note_d)||0,Number($.note_m)||0,Number($.note_a)||0);return(!b.note_min||A>=b.note_min)&&(!b.note_max||A<=b.note_max)})),w.length||(b.note_min||b.note_max?(w=y||[],console.warn("[Booster] Aucun joueur avec note",b.note_min,"-",b.note_max,"— fallback rareté uniquement")):w=y||[]),!w.length)continue;let h=w.filter($=>!l.has($.id));if(i)h.length||(h=w);else if(h=h.filter($=>!a.has($.id)),!h.length)continue;const E=h[Math.floor(Math.random()*h.length)];l.add(E.id);const m=a.has(E.id),{data:S}=await v.from("cards").insert({owner_id:t.id,player_id:E.id,card_type:"player"}).select().single();S&&(f.push({...S,player:E,isDuplicate:m}),v.rpc("record_transfer",{p_card_id:S.id,p_player_id:E.id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(b.card_type==="game_changer"){const{data:g}=await v.from("gc_definitions").select("id,name,color,effect,image_url,gc_type").eq("is_active",!0).eq("gc_type","game_changer"),p=g!=null&&g.length?g:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],u=i?p:p.filter(E=>!c.has(E.name));if(!i&&!u.length)continue;const y=u[Math.floor(Math.random()*u.length)],w=y.name,{data:h}=await v.from("cards").insert({owner_id:t.id,card_type:"game_changer",gc_type:w,gc_definition_id:y.id||null}).select().single();h&&f.push({...h,_gcDef:y})}else if(b.card_type==="formation"){const g=Jo(),p=i?g:g.filter(h=>!s.has(h));if(!i&&!p.length)continue;const u=p[Math.floor(Math.random()*p.length)],y=s.has(u),{data:w}=await v.from("cards").insert({owner_id:t.id,card_type:"formation",formation:u}).select();w!=null&&w[0]&&f.push({...w[0],isDuplicate:y})}else if(b.card_type==="stadium"){const{data:g,error:p}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(g!=null&&g.length)){console.warn("[Booster] Aucun stade en DB");continue}const u=i?g:g.filter(E=>!d.has(E.id));if(!i&&!u.length)continue;const y=u[Math.floor(Math.random()*u.length)],{data:w,error:h}=await v.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:y.id}).select("id,card_type,stadium_id").single();if(h){console.error("[Booster] insert stadium card:",h.message);continue}w&&f.push({...w,rarity:"normal",_stadiumDef:y})}}}return f}async function Zo(t,e,i){if(i>0){const{error:d}=await v.from("users").update({credits:t.credits-i}).eq("id",t.id);if(d)throw d;t.credits-=i,Ti(t.credits)}const{data:o}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const r=o.filter(d=>d.job==="GK"),n=o.filter(d=>d.job!=="GK"),a=!t.first_booster_opened&&r.length>0,s=[];for(let d=0;d<e;d++){const l=d===0&&a?r:d===0?n:o,f=pr(),x=ur(l,f);x&&s.push(x)}a&&await v.from("users").update({first_booster_opened:!0}).eq("id",t.id);const{data:c}=await v.from("cards").insert(s.map(d=>({owner_id:t.id,player_id:d.id,card_type:"player"}))).select();return(c||[]).forEach((d,l)=>{v.rpc("record_transfer",{p_card_id:d.id,p_player_id:s[l].id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((d,l)=>({...c[l],player:d}))}async function en(t,e,i){const{error:o}=await v.from("users").update({credits:t.credits-i}).eq("id",t.id);if(o)throw o;t.credits-=i,Ti(t.credits);const{data:r}=await v.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),n=r!=null&&r.length?r:Object.keys(Ri).map(f=>({name:f,gc_type:"game_changer"})),a=Array.from({length:e},()=>n[Math.floor(Math.random()*n.length)]),s=a.map(f=>({owner_id:t.id,card_type:"game_changer",gc_type:f.name,gc_definition_id:f.id||null})),{data:c,error:d}=await v.from("cards").insert(s).select();return d&&console.error("[Booster GC] Erreur insert:",d.message,d),(c||[]).map((f,x)=>({...f,_gcDef:a[x]||null}))}async function tn(t,e){const{error:i}=await v.from("users").update({credits:t.credits-e}).eq("id",t.id);if(i)throw i;t.credits-=e,Ti(t.credits);const{data:o}=await v.from("cards").select("formation").eq("owner_id",t.id).eq("card_type","formation"),r=new Set((o||[]).map(l=>l.formation)),n=Jo(),a=n[Math.floor(Math.random()*n.length)],s=r.has(a),{data:c,error:d}=await v.from("cards").insert({owner_id:t.id,card_type:"formation",formation:a}).select();return d&&console.error("[Booster Formation] Erreur insert:",d.message,d),(c||[]).map(l=>({...l,isDuplicate:s}))}function on(t,e,i,o=null){var Y,I;if(!t||t.length===0){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",_.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(_),(Y=_.querySelector("#anim-close-err"))==null||Y.addEventListener("click",()=>_.remove());return}t=[...t].sort((_,G)=>{const K=_.player?yt(_.player):-1;return(G.player?yt(G.player):-1)-K});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let n=!1;const a=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let c=!1;const d=_=>_.touches&&_.touches[0]?_.touches[0].clientX:_.clientX;function l(_){n||(c=!0,s.style.opacity="1",f(_))}function f(_){if(!c||n)return;const G=a.getBoundingClientRect(),K=d(_)-G.left,le=Math.max(0,Math.min(1,K/G.width));s.style.width=le*G.width+"px",le>=.82&&b()}function x(){n||(c=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{n||(s.style.transition="")},220))}function b(){var G;if(n)return;n=!0,c=!1,s.style.width="100%",s.style.opacity="1",(G=document.getElementById("cut-flash"))==null||G.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const _=document.getElementById("cut-hint");_&&(_.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",y(0)},620)}a.addEventListener("pointerdown",l),window.addEventListener("pointermove",f),window.addEventListener("pointerup",x),a.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",x);let g=0,p=!1;const u=new Set;function y(_){g=_,document.getElementById("reveal-phase").style.display="flex",w(),h(_,0),A()}function w(){const _=document.getElementById("card-dots");_&&(_.innerHTML=t.map((G,K)=>`<div class="card-dot" data-i="${K}" style="width:8px;height:8px;border-radius:50%;background:${K===g?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),_.querySelectorAll(".card-dot").forEach(G=>G.addEventListener("click",()=>m(parseInt(G.dataset.i)))))}function h(_,G){var C,V;const K=t[_],le=document.getElementById("card-counter"),ce=document.getElementById("card-track");le&&(le.textContent=`Carte ${_+1} / ${t.length}`);const j=document.getElementById("reveal-btns");j&&(j.style.display=_===t.length-1?"flex":"none");const H=K.card_type==="player"&&((C=K.player)==null?void 0:C.rarity)==="legende",pe=!u.has(_);u.add(_);let me=0;if(K.card_type==="player"&&K.player){const Q=K.player,X=Q.job||"ATT";me=(Number(X==="GK"?Q.note_g:X==="DEF"?Q.note_d:X==="MIL"?Q.note_m:Q.note_a)||0)+(K.evolution_bonus||0)}const fe=Q=>{ce.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${H?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${fr(K)}</div>
          ${K.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const X=document.getElementById("current-card-wrap");G!==0?(X.style.transition="none",X.style.transform=`translateX(${G>0?100:-100}%)`,requestAnimationFrame(()=>{X.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",X.style.transform="translateX(0)"})):X.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),Q||H?R():O(),w()};pe&&(((V=K.player)==null?void 0:V.rarity)==="legende"||me>=18)&&K.card_type==="player"&&K.player?E(K,()=>fe(!0)):fe(!1)}function E(_,G){var ge;p=!0;const K=_.player,le=`https://flagsapi.com/${K.country_code}/flat/64.png`,ce=(ge=K.clubs)==null?void 0:ge.logo_url,j=Ct(K),H=K.job||"ATT",pe=Number(H==="GK"?K.note_g:H==="DEF"?K.note_d:H==="MIL"?K.note_m:K.note_a)||0,me=_.evolution_bonus||0,fe=pe+me,C=fe>=18&&fe<=20,V=fe>=18,Q=document.getElementById("walkout-overlay"),X=document.getElementById("walkout-stage");if(!Q||!X){p=!1,G();return}let re=null;C&&(re=Qi("/sounds/Legendary.mp3",.8)),Q.style.display="flex";const F=()=>{const ye=X.firstElementChild;ye&&(ye.classList.remove("wo-in"),ye.classList.add("wo-out"))},z=1800,W=400;X.innerHTML=`<img class="wo-in" src="${le}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(F,z),setTimeout(()=>{var ye;X.innerHTML=ce?`<img class="wo-in" src="${ce}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((ye=K.clubs)==null?void 0:ye.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},z+W),setTimeout(F,z*2+W),setTimeout(()=>{X.innerHTML=j?`<img class="wo-in" src="${j}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(z+W)*2),setTimeout(F,(z+W)*2+z);const se=V?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[H]||"#fff";setTimeout(()=>{X.innerHTML=`<div class="wo-in" style="
        font-size:${V?"120px":"90px"};font-weight:900;color:${se};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${se}, 0 0 60px ${se};
        ${V?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${fe}
      </div>`,V&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(z+W)*3),setTimeout(F,(z+W)*3+z),setTimeout(()=>{Q.style.display="none",X.innerHTML="",p=!1,re&&!C&&re.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),G()},(z+W)*4)}function m(_){if(p||_<0||_>=t.length||_===g)return;const G=_>g?1:-1;g=_,h(_,G)}function S(){m(g+1)}function $(){m(g-1)}function A(){const _=document.getElementById("card-viewport");if(!_||_._swipeBound)return;_._swipeBound=!0;let G=0,K=0,le=0,ce=!1;const j=C=>C.touches?C.touches[0].clientX:C.clientX,H=C=>C.touches?C.touches[0].clientY:C.clientY,pe=C=>{ce=!0,G=j(C),K=H(C),le=0},me=C=>{if(!ce)return;le=j(C)-G;const V=H(C)-K;if(Math.abs(le)<Math.abs(V))return;const Q=document.getElementById("current-card-wrap");Q&&(Q.style.transition="none",Q.style.transform=`translateX(${le*.6}px) rotate(${le*.02}deg)`)},fe=()=>{if(!ce)return;ce=!1;const C=document.getElementById("current-card-wrap"),V=55;le<=-V&&g<t.length-1?S():le>=V&&g>0?$():C&&(C.style.transition="transform .2s ease",C.style.transform="translateX(0)")};_.addEventListener("pointerdown",pe),_.addEventListener("pointermove",me),_.addEventListener("pointerup",fe),_.addEventListener("pointercancel",fe),_.addEventListener("touchstart",pe,{passive:!0}),_.addEventListener("touchmove",me,{passive:!0}),_.addEventListener("touchend",fe),_.addEventListener("click",C=>{if(Math.abs(le)>8)return;const V=_.getBoundingClientRect();C.clientX-V.left>V.width/2?S():$()})}let P=null;function R(){const _=document.getElementById("fireworks-canvas");if(!_)return;_.width=window.innerWidth,_.height=window.innerHeight;const G=_.getContext("2d"),K=[];function le(){const j=Math.random()*_.width,H=Math.random()*_.height*.6,pe=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],me=pe[Math.floor(Math.random()*pe.length)];for(let fe=0;fe<60;fe++){const C=Math.PI*2/60*fe,V=2+Math.random()*5;K.push({x:j,y:H,vx:Math.cos(C)*V,vy:Math.sin(C)*V,alpha:1,color:me,size:2+Math.random()*3})}}le(),P=setInterval(le,600);function ce(){if(document.getElementById("fireworks-canvas")){G.clearRect(0,0,_.width,_.height);for(let j=K.length-1;j>=0;j--){const H=K[j];if(H.x+=H.vx,H.y+=H.vy+.08,H.vy*=.98,H.alpha-=.018,H.alpha<=0){K.splice(j,1);continue}G.globalAlpha=H.alpha,G.fillStyle=H.color,G.beginPath(),G.arc(H.x,H.y,H.size,0,Math.PI*2),G.fill()}G.globalAlpha=1,(P!==null||K.length>0)&&requestAnimationFrame(ce)}}ce()}function O(){P!==null&&(clearInterval(P),P=null);const _=document.getElementById("fireworks-canvas");_&&_.getContext("2d").clearRect(0,0,_.width,_.height)}if(o){const _=document.getElementById("reveal-btns");_&&(_.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(I=document.getElementById("reveal-next"))==null||I.addEventListener("click",()=>{O(),r.remove(),o()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{O(),r.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{O(),r.remove(),i("boosters")})}function fr(t){var e,i,o,r;if(t.card_type==="player"&&t.player)return lr(t);if(t.card_type==="game_changer"){const n=t._gcDef,a=(n==null?void 0:n.name)||t.gc_type||"Game Changer",s=(n==null?void 0:n.effect)||((e=Ri[t.gc_type])==null?void 0:e.desc)||"",c=n!=null&&n.image_url?`/icons/${n.image_url}`:null,d=((i=Ri[t.gc_type])==null?void 0:i.icon)||"⚡";return nt(a,c,d,s,{width:170})}if(t.card_type==="formation")return ni(t.formation,ut[t.formation],{width:160});if(t.card_type==="stadium"){const n=t._stadiumDef,a=(n==null?void 0:n.name)||"Stade",s=((o=n==null?void 0:n.club)==null?void 0:o.encoded_name)||(n==null?void 0:n.country_code)||"—",c=n!=null&&n.image_url?`/icons/${n.image_url}`:((r=n==null?void 0:n.club)==null?void 0:r.logo_url)||(n!=null&&n.country_code?`https://flagsapi.com/${n.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),d=`${s}<br>+10 ⭐ joueurs alliés`;return Ht(a,c,d,{width:170})}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function mr(t){var e,i;if((e=t==null?void 0:t.rates)!=null&&e.length){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const r={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},n={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};o.innerHTML=`
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
      </div>`,document.body.appendChild(o),o.addEventListener("click",a=>{a.target===o&&o.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>o.remove());return}gr()}function gr(){const t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(t),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.getElementById("odds-close").addEventListener("click",()=>t.remove())}function br(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,e.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(e);let i=5;const o=setInterval(()=>{i--;const r=document.getElementById("mw-ad-cd");r&&(r.textContent=i),i<=0&&(clearInterval(o),e.remove(),t(!0))},1e3)})}async function xr(t,{state:e,navigate:i,toast:o,refreshProfile:r}){var x,b;const{data:n}=await v.from("users").select("*").eq("id",e.user.id).single();n&&(e.profile=n);let a=Array.isArray((x=e.profile)==null?void 0:x.pending_boosters)?[...e.profile.pending_boosters]:[];if(!a.length){await v.from("users").update({onboarding_done:!0}).eq("id",e.user.id),i("home");return}let s=null;try{const p=(await Xo()).find(u=>(u.name||"").toLowerCase().includes("new player"));p&&(s=Qo(p))}catch(g){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',g)}const c=a.length;let d=0;t.innerHTML=`
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
  </div>`;const l=async()=>{await v.from("users").update({pending_boosters:a}).eq("id",e.user.id)};async function f(){var w;if(d>=c||!a.length){await v.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",e.user.id),r&&await r(),o("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const g=a[0],{data:p}=await v.from("users").select("*").eq("id",e.user.id).single();p&&(e.profile=p);let u=[];try{if(g.type==="formation")u=await tn(e.profile,0);else if(g.type==="game_changer")u=await en(e.profile,g.count||3,0);else if(s&&((w=s.rates)!=null&&w.length)){const h={...s,cost:0,cardCount:g.count||s.cardCount||5};u=await Oi(e.profile,h),g.guaranteeGK&&!e.profile.first_booster_opened&&(u.some(m=>m.player&&m.player.job==="GK")||await yr(e.profile,u),await v.from("users").update({first_booster_opened:!0}).eq("id",e.profile.id))}else u=await Zo(e.profile,g.count||5,0)}catch(h){o(h.message||"Erreur ouverture booster","error");return}a.shift(),d++,await l();const y=g.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:g.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${d}/${c})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};on(u,y,i,()=>{f()})}(b=document.getElementById("onboard-start"))==null||b.addEventListener("click",()=>f())}async function yr(t,e){try{const{data:i}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const o=i[Math.floor(Math.random()*i.length)],r=e.findIndex(a=>a.player);if(r===-1)return;const n=e[r];await v.from("cards").update({player_id:o.id}).eq("id",n.id),e[r]={...n,player_id:o.id,player:o}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Et={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},hr={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function At(t,e,i,o,r){var n;t.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${e}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${o}</button>
    </div>
  </div>`,(n=document.getElementById("msg-btn"))==null||n.addEventListener("click",r)}function Hi(t,e){var n,a;const i=t.player,o=t.evolution_bonus||0,r=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:t.id,position:e||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?o:0)+(i.job2==="GK"&&r>0?o:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?o:0)+(i.job2==="DEF"&&r>0?o:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?o:0)+(i.job2==="MIL"&&r>0?o:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?o:0)+(i.job2==="ATT"&&r>0?o:0),evolution_bonus:o,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((n=i.clubs)==null?void 0:n.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function di(t,e){if(!e||!t)return t;const{club_id:i,country_code:o}=e;return Object.values(t).forEach(r=>{Array.isArray(r)&&r.forEach(n=>{const a=i&&String(n.club_id)===String(i),s=o&&String(n.country_code)===String(o);(a||s)&&(n.stadiumBonus=!0)})}),t}function vi(t,e){if(!e||!(t!=null&&t.length))return t;const{club_id:i,country_code:o}=e;return t.forEach(r=>{if(!r)return;const n=i&&String(r.club_id)===String(i),a=o&&String(r.country_code)===String(o);(n||a)&&(r.stadiumBonus=!0)}),t}function dt(t){return t===1?[1]:t===2?[0,2]:t===3?[0,1,2]:t===4?[0,1,1,2]:t===5?[0,1,1,1,2]:[1]}function nn(){const t=Math.random()*100;return t<10?10:t<30?5:3}function wi(t,e){const i=Et[e]||Et["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]};if(t.length&&t.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const s=t.filter(d=>d.position&&d.position.replace(/\d+$/,"")===a).sort((d,l)=>parseInt(d.position.replace(/\D+/g,""),10)-parseInt(l.position.replace(/\D+/g,""),10)).map(d=>({...d,_line:a})),c=dt(s.length);s.forEach((d,l)=>{d._col=c[l]}),o[a]=s}return o}const n=[...t];for(const a of["GK","DEF","MIL","ATT"]){const s=[];for(let d=0;d<i[a];d++){let l=n.findIndex(f=>f.job===a);if(l===-1&&(l=n.findIndex(f=>f.job2===a)),l===-1&&(l=0),n[l]){const f={...n[l],_line:a};s.push(f),n.splice(l,1)}}const c=dt(s.length);s.forEach((d,l)=>{d._col=c[l]}),o[a]=s}return o}function ct(t){document.querySelectorAll(".top-nav, .bottom-nav").forEach(e=>{e.style.setProperty("display","none","important"),e.dataset.matchHidden="1"}),t&&t.style.setProperty("padding-bottom","0","important")}function Ve(t){document.querySelectorAll(".top-nav, .bottom-nav").forEach(e=>{e.style.removeProperty("display"),delete e.dataset.matchHidden}),t&&t.style.removeProperty("padding-bottom")}function Si(t,e,i){const r=new Set,n=e.filter(l=>{var x;const f=((x=l._gcDef)==null?void 0:x.name)||l.gc_type||l.id;return r.has(f)?!1:(r.add(f),!0)});let a=[];function s(l,f){const x=l._gcDef,b=(x==null?void 0:x.name)||l.gc_type,g=x!=null&&x.image_url?`/icons/${x.image_url}`:null,p=nt(b,g,"⚡",(x==null?void 0:x.effect)||"",{width:100});return`<div class="gc-select-card" data-id="${l.id}"
      style="position:relative;flex-shrink:0;cursor:pointer;border-radius:10px;
        outline:${f?"3px solid #FFD700":"none"};
        box-shadow:${f?"0 0 18px #FFD700":"none"};
        transform:${f?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      ${p}
      ${f?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const c=l=>{t.style.overflow="",t.style.height="",t.style.display="",t.style.flexDirection="",i(l)};function d(){var f,x,b;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column";const l=a.length>0;t.innerHTML=`
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
        ${n.map(g=>{const p=a.find(u=>u.gc_type===g.gc_type);return s(g,!!p)}).join("")}
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
    </div>`,t.querySelectorAll(".gc-select-card").forEach(g=>{g.addEventListener("click",()=>{const p=g.dataset.id,u=n.find(w=>w.id===p);if(!u)return;const y=a.findIndex(w=>w.gc_type===u.gc_type);y>-1?a.splice(y,1):a.length<3&&a.push(u),d()})}),(f=t.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{l&&c(a)}),(x=t.querySelector("#gc-no-gc"))==null||x.addEventListener("click",()=>c([])),(b=t.querySelector("#gc-reset"))==null||b.addEventListener("click",()=>{a.length&&(a=[],d())})}d()}function vr(t,e){var r;const i=((r=e==null?void 0:e.state)==null?void 0:r.params)||{},o=t||i.matchMode||"vs_ai_easy";return o==="friend"?`Match vs ${i.friendName||"Ami"}`:o==="random"?"Match vs Random":o==="ranked"?"Match Classé":o==="mini_league"||o==="mini-league"?"🏆 Match de Mini League":`Match vs IA — ${o.replace("vs_ai_","").toUpperCase()}`}async function wr(t,e,i){const{state:o,navigate:r}=e;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await v.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",o.profile.id).order("created_at",{ascending:!1});if(!n||n.length===0){At(t,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>r("decks"));return}const a=n.map(x=>x.id),{data:s}=await v.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),c=[...new Set((s||[]).filter(x=>{var b,g;return((b=x.card)==null?void 0:b.card_type)==="stadium"&&((g=x.card)==null?void 0:g.stadium_id)}).map(x=>x.card.stadium_id))],d={};if(c.length){const{data:x}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",c);(x||[]).forEach(b=>{d[b.id]=b}),(s||[]).forEach(b=>{var g,p;((g=b.card)==null?void 0:g.card_type)==="stadium"&&((p=b.card)!=null&&p.stadium_id)&&(b.card._stadiumDef=d[b.card.stadium_id]||null)})}let l=0;function f(){var m,S,$,A,P,R,O;const x=n[l],b=(s||[]).filter(Y=>Y.deck_id===x.id),g=b.filter(Y=>{var I;return Y.is_starter&&((I=Y.card)==null?void 0:I.player)}).map(Y=>Hi(Y.card,Y.position)),p=b.find(Y=>{var I;return((I=Y.card)==null?void 0:I.card_type)==="formation"}),u=x.formation||((m=p==null?void 0:p.card)==null?void 0:m.formation)||"4-4-2";let y=g.length>=11?wi(g,u):null,w=((S=x.stadium_card)==null?void 0:S.stadium_def)||null;w&&y&&(y=di(y,w));const h=g.length>=11;ct(t),t.style.height="100%",t.style.overflow="hidden",t.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff;position:relative">
      <button id="cancel-deck-select" style="position:absolute;top:8px;right:10px;z-index:10;width:32px;height:32px;border-radius:50%;border:none;background:rgba(180,30,30,0.85);color:#fff;font-size:18px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${vr(i,e)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${l===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===0?"0.1":"0.3"});color:${l===0?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${l===0?"default":"pointer"};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${x.name}</div>
            <div style="font-size:11px;opacity:.6">${u} · ${g.length}/11${x.is_active?" · ⭐":""}</div>
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
      ${n.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${n.map((Y,I)=>`<div style="width:6px;height:6px;border-radius:50%;background:${I===l?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${h?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${h?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${h?"pointer":"default"}">
          ${h?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function Y(){const I=t.querySelector(".deck-preview-wrap"),_=t.querySelector("#deck-swipe-zone");if(!I||!_||!y)return;const G=_.clientWidth>=900,K=Math.max(200,_.clientHeight-(G?60:40)),ce=Math.max(200,_.clientWidth-16),j=G?Math.min(117,Math.max(52,Math.round(ce*.22))):Math.max(44,Math.round(ce*.168));if(K<220||ce<220){requestAnimationFrame(Y);return}const H=G?null:Math.round(j*.55);I.innerHTML=Ut(y,u,null,[],ce,K,[],H),I.style.cssText=`width:${ce}px;height:${K}px;overflow:hidden;margin:${G?0:60}px auto 0`;const pe=I.querySelector("svg");pe&&(pe.style.cssText="display:block;width:100%;height:100%",pe.setAttribute("preserveAspectRatio",G?"xMidYMid meet":"none"))})),(A=document.getElementById("prev-deck"))==null||A.addEventListener("click",()=>{l>0&&(l--,f())}),(P=document.getElementById("next-deck"))==null||P.addEventListener("click",()=>{l<n.length-1&&(l++,f())}),(R=document.getElementById("validate-deck"))==null||R.addEventListener("click",()=>{if(!h)return;const Y=e.state.params||{};e.navigate("match",{...Y,matchMode:Y.matchMode||i,deckId:x.id})}),(O=document.getElementById("cancel-deck-select"))==null||O.addEventListener("click",()=>{Ve(t),r("home")});const E=document.getElementById("deck-swipe-zone");if(E){let Y=0,I=0;E.addEventListener("touchstart",_=>{Y=_.touches[0].clientX,I=_.touches[0].clientY},{passive:!0}),E.addEventListener("touchend",_=>{const G=_.changedTouches[0].clientX-Y,K=_.changedTouches[0].clientY-I;Math.abs(G)<40||Math.abs(G)<Math.abs(K)||(G<0&&l<n.length-1?(l++,f()):G>0&&l>0&&(l--,f()))},{passive:!0})}}f()}function kt(t,e=44,i=58,o=null){return ze(t,{width:e,showStad:!!o,stadDef:o,used:t==null?void 0:t.used})}function et(t,e,i,o,r){if(!(t!=null&&t.length))return"";const n=t.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((s,c)=>{const d=s._line||s.job||"MIL";let l=s.boost||0;if(s.stadiumBonus&&(o==="attack"&&(d==="ATT"||d==="MIL")||o==="defense"&&(d==="GK"||d==="DEF"||d==="MIL")?l+=10:o||(l+=10)),a+=ze({...s,_evolution_bonus:0,evolution_bonus:0},{width:40,role:d,extraNote:l}),c<n.length-1){const f=n[c+1],x=Vo(s,f,r)?Bt(s,f):null;a+=`<div style="width:7px;height:3px;background:${!x||x==="#ff3333"||x==="#cc2222"?"rgba(255,255,255,0.12)":x};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${e};color:${e==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function Ai(t,e,i,o,r=310,n=310,a=[],s=null){const c=ut[e]||{},d=Li(e)||Ii[e]||[],l={},f=["ATT","MIL","DEF","GK"];for(const y of f)(t[y]||[]).forEach((h,E)=>{l[`${y}${E+1}`]=h});function x(y){const w=c[y];return w?{x:w.x*r,y:w.y*n}:null}let b="";for(const[y,w]of d){const h=x(y),E=x(w);if(!h||!E)continue;const m=l[y],S=l[w],$=Bt(m,S);$==="#00ff88"||$==="#FFD700"?(b+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${$}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,b+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${$}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):b+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${$}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=typeof window<"u"&&window.innerWidth>=900?Math.min(Math.max(81,Math.round(r*.225)),117):Math.max(44,Math.round(r*.168)),p=Math.round(g*657/507);for(const[y,w]of Object.entries(l)){const h=x(y);if(!h||!w)continue;const E=y.replace(/[0-9]/g,""),m=a.includes(w.cardId),S=i==="attack"&&(["MIL","ATT"].includes(E)||m)&&!w.used||i==="defense"&&["GK","DEF","MIL"].includes(E)&&!w.used,$=o.includes(w.cardId);let A=w.boost||0,P=!1;w.stadiumBonus&&(i==="attack"&&(E==="ATT"||E==="MIL")||i==="defense"&&(E==="GK"||E==="DEF"||E==="MIL")?(A+=10,P=!0):i||(A+=10,P=!0));const R=Math.round(h.x-g/2),O=Math.round(h.y-p/2);if(w.used){b+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${R}" y="${O}" width="${g}" height="${p}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${w.cardId}" data-role="${E}" style="cursor:pointer"/>`;continue}const Y=ze({...w,_evolution_bonus:0,stadiumBonus:!1},{width:g,showStad:!1,stadDef:null,role:E,extraNote:A,_cardOffset:30,_forceStadColor:P}),I=$?`position:absolute;top:30px;left:0;width:${g}px;height:${p}px;outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;pointer-events:none;`:"";b+=`<foreignObject x="${R-2}" y="${O-30}" width="${g+8}" height="${p+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">
        ${Y}
        ${$?`<div style="${I}"></div>`:""}
      </div>
    </foreignObject>`,S&&(b+=`<rect x="${R}" y="${O}" width="${g}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${$?"selected":""}" data-card-id="${w.cardId}" data-role="${E}" style="cursor:pointer"/>`)}const u=s!==null?s:Math.round(Math.max(g*.7,80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-u} ${-u} ${r+u*2} ${n+u*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${b}
  </svg>`}function Ut(t,e,i,o,r=300,n=300,a=[],s=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ai(t,e,i,o,r,n,a,s)}
  </div>`}async function zi(t,e,i,o){var S;const{state:r,navigate:n,toast:a}=e;ct(t);const s=r.params||{};if(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return wr(t,e,i);const c=s.deckId;let d,l,f,x;try{const $=await Promise.all([v.from("decks").select("formation,name,stadium_card_id").eq("id",c).single(),v.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);d=$[0].data,f=$[0].error,l=$[1].data,x=$[1].error}catch($){console.error("[Match] Exception chargement deck:",$),At(t,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>n("home"));return}if(f||x){console.error("[Match] Erreur Supabase:",f||x),At(t,"⚠️","Erreur lors du chargement du deck.","Retour",()=>n("home"));return}const b=(l||[]).filter($=>{var A;return $.is_starter&&((A=$.card)==null?void 0:A.player)}).map($=>Hi($.card,$.position)),g=(l||[]).filter($=>{var A;return!$.is_starter&&((A=$.card)==null?void 0:A.player)}).map($=>Hi($.card,$.position));if(b.length<11){At(t,"⚠️",`Deck incomplet (${b.length}/11).`,"Compléter",()=>n("decks"));return}const p=(l||[]).find($=>{var A;return((A=$.card)==null?void 0:A.card_type)==="formation"}),u=(d==null?void 0:d.formation)||((S=p==null?void 0:p.card)==null?void 0:S.formation)||"4-4-2",{data:y,error:w}=await v.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",r.profile.id).eq("card_type","game_changer"),{data:h}=await v.from("gc_definitions").select("*").eq("is_active",!0),E=(y||[]).map($=>({...$,_gcDef:(h==null?void 0:h.find(A=>A.name===$.gc_type||A.id===$.gc_definition_id))||null}));let m=null;if(d!=null&&d.stadium_card_id){const{data:$}=await v.from("cards").select("stadium_id").eq("id",d.stadium_card_id).single();if($!=null&&$.stadium_id){const{data:A}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",$.stadium_id).single();m=A||null}}o({deckId:c,formation:u,starters:b,subsRaw:g,gcCardsEnriched:E,gcDefs:h||[],stadiumDef:m})}function zt(){return Math.min(window.innerWidth-40,860)}function Ot(){return Math.round(zt()*1.1)}function rn(t){var r,n;if(!t)return null;const e=t._line||t.job||"MIL",i=e==="GK"?t.note_g||0:e==="DEF"?t.note_d||0:e==="MIL"?t.note_m||0:t.note_a||0,o=t.stadiumBonus?10:0;return{name:t.name,firstname:t.firstname||"",note:i+(t.boost||0)+o,note_g:t.note_g||0,note_d:t.note_d||0,note_m:t.note_m||0,note_a:t.note_a||0,_evolution_bonus:0,stadiumBonus:t.stadiumBonus||!1,boost:t.boost||0,job:t.job,job2:t.job2||null,_line:t._line||t.job,_col:t._col,country_code:t.country_code,club_id:t.club_id,rarity:t.rarity,clubName:t.clubName||((r=t.clubs)==null?void 0:r.encoded_name)||null,clubLogo:t.clubLogo||((n=t.clubs)==null?void 0:n.logo_url)||null,face:t.face||null,portrait:Ct(t)}}function _r(t,e,i,o="Adversaire"){Fo("/sounds/match-opening.mp3",.3);const r=zt(),n=Ot();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${o}</div>
      
      <div style="width:100%;max-width:${r}px;margin:0 auto">
        ${Ai(t,e,null,[],r,n)}
      </div>
    </div>`}function an(t){var n,a,s;if(!t)return"";const e=c=>c?ze({...c,_evolution_bonus:0},{width:52,role:c._line||c.job,showStad:!!c.stadiumBonus,extraNote:c.boost||0}):"",o={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[t.type]||"📋";return`
    <div style="padding:8px 12px;border-left:3px solid ${((n=t.type)==null?void 0:n.includes("goal"))?"#22c55e":"rgba(255,255,255,0.15)"};margin-bottom:4px">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px;text-align:center">${o} ${t.title||t.text||""}</div>
      ${(a=t.homePlayers)!=null&&a.length||(s=t.aiPlayers)!=null&&s.length?`
        <div style="display:flex;align-items:flex-start;justify-content:center;gap:16px">
          <div style="flex:1;display:flex;gap:3px;flex-wrap:wrap;justify-content:flex-end">
            ${(t.homePlayers||[]).map(e).join("")}
          </div>
          <div style="flex:1;display:flex;gap:3px;flex-wrap:wrap;justify-content:flex-start">
            ${(t.aiPlayers||[]).map(e).join("")}
          </div>
        </div>`:""}
      ${t.text&&t.title?`<div style="font-size:10px;color:rgba(255,255,255,0.4);margin-top:4px;text-align:center">${t.text}</div>`:""}
    </div>`}function tt(t,e,i,o,r){Qi("/sounds/goal.mp3",.7);const n=document.getElementById("goal-anim-overlay");n&&n.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(t||[]).slice(0,3).map(c=>ze({...c,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:c._line||c.job,showStad:!!c.stadiumBonus})).join("");if(a.innerHTML=`
    <div style="animation:goalPop 0.4s ease-out;text-align:center">
      <div style="font-size:clamp(48px,10vw,80px);margin-bottom:8px">⚽</div>
      <div style="font-size:clamp(28px,6vw,48px);font-weight:900;color:#22c55e;letter-spacing:2px;text-shadow:0 0 20px #22c55e">BUT !</div>
      <div style="display:flex;gap:8px;justify-content:center;margin:16px 0">${s}</div>
      <div style="font-size:clamp(32px,7vw,56px);font-weight:900;color:#fff;margin-top:8px">
        ${o?`<span style="color:#22c55e">${e}</span>`:e}
        <span style="color:rgba(255,255,255,0.4);margin:0 12px">—</span>
        ${o?i:`<span style="color:#22c55e">${i}</span>`}
      </div>
    </div>`,document.body.appendChild(a),!document.getElementById("goal-anim-style")){const c=document.createElement("style");c.id="goal-anim-style",c.textContent=`
      @keyframes goalPop {
        from { transform: scale(0.5); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }`,document.head.appendChild(c)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),r==null||r()},400)},1800)}function kr(t,e,i){const o=document.getElementById("sub-anim-overlay");o&&o.remove();const r=document.createElement("div");r.id="sub-anim-overlay",r.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const n=Math.min(120,Math.round(window.innerWidth/4)),a=t?ze({...t,_evolution_bonus:0},{width:n,role:t._line||t.job}):"",s=e?ze({...e,_evolution_bonus:0},{width:n,role:e._line||e.job}):"";r.innerHTML=`
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
          ${s}
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
      }`,document.head.appendChild(n)}document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.3s",setTimeout(()=>r.remove(),300)},i)}function sn(t,e){const i=Ne(t,"MIL"),o=t.stadiumBonus||e&&(e.club_id&&String(t.club_id)===String(e.club_id)||e.country_code&&t.country_code===e.country_code)?10:0;return i+o}function vt(t,e){return t.reduce((i,o)=>i+sn(o,e),0)}function wt(t){let e=0;for(let i=0;i<t.length-1;i++){const o=Bt(t[i],t[i+1]);o==="#00ff88"?e+=10:o==="#FFD700"&&(e+=5)}return e}function _i(t,e,i,o,r){return`<div id="duel-row-${o}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${e}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${t.map((n,a)=>{const s=a<t.length-1?Bt(n,t[a+1]):null,c=!s||s==="#ff3333"||s==="#cc2222",d=s==="#00ff88"?"+10":s==="#FFD700"?"+5":"";return sn(n,r),n.stadiumBonus||r&&(r.club_id&&String(n.club_id)===String(r.club_id)||r.country_code&&(n.country_code,r.country_code)),`
          <div class="duel-card duel-card-${o}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${ze({...n,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:r,role:"MIL",extraNote:n.boost||0})}
          </div>
          ${a<t.length-1?`<div class="duel-link duel-link-${o}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${c?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${c?"none":`0 0 8px ${s}`}">
            ${d?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${d}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${o}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${vt(t,r)} + ${wt(t)} liens = <b style="color:#fff">${vt(t,r)+wt(t)}</b>
      </div>
    </div>`}async function $r(t,e){const{state:i}=e,o=i.params||{},r=o.matchMode||"vs_ai_easy",n=r==="solo",a=r==="ranked_ai",s=o.soloLevel||1,c=r.replace("vs_ai_",""),d=r;let l=null;if(n){const{data:g}=await v.from("solo_levels").select("*").eq("level_number",s).maybeSingle();l=g||{level_number:s,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500}}const f=o.rankedData||null,x=o.presetSetup||null;async function b({deckId:g,formation:p,starters:u,subsRaw:y,gcCardsEnriched:w,gcDefs:h,stadiumDef:E}){try{let m=wi(u,p);E&&(m=di(m,E),vi(y,E));let S=null;if(a){const R=Lr(m),{jaune:O,vert:Y}=Ir(m,p),I=.9+Math.random()*.2;S={target_note_avg:Math.max(1,Math.round(R*I/16)),nb_liens_jaune:O,nb_liens_vert:Y,nb_joueurs_stade:E?3:0}}const $=n?await Lo(p,l):a?await Lo(p,S):await Er(p,c),A=$.lines||$,P=async R=>{try{const O=d==="vs_ai_club"||d==="solo"||d==="ranked_ai"?"club":d,{data:Y,error:I}=await v.from("matches").insert({home_id:i.profile.id,away_id:null,mode:O,home_deck_id:g,status:"in_progress"}).select().single();if(I){console.error("[MatchIA] Erreur création match:",I),At(t,"⚠️","Impossible de créer le match ("+I.message+").","Retour",()=>e.navigate("home"));return}const _=$.stadiumDef||null;_&&A&&(di(A,_),vi($.subs||[],_));const G={gcDefs:h||[],matchId:Y==null?void 0:Y.id,mode:d,difficulty:c,formation:p,isSolo:n,soloLevel:s,soloLevelConfig:l,isRankedAI:a,rankedAIData:f,homeTeam:m,aiTeam:A,homeSubs:y,subsUsed:0,maxSubs:Math.min(y.length,3),aiSubs:$.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min(($.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:$.gcCards||[],aiUsedGc:[],aiStadiumDef:_,homeScore:0,aiScore:0,gcCards:R,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Tr(t,G,e)}catch(O){console.error("[MatchIA] Exception launchMatch:",O),At(t,"⚠️","Erreur au lancement du match : "+O.message,"Retour",()=>e.navigate("home"))}};if(a&&x){P(x.gcCardsEnriched||[]);return}if(!w.length){P([]);return}Si(t,w,P)}catch(m){console.error("[MatchIA] Exception setup:",m),At(t,"⚠️","Erreur de préparation du match : "+m.message,"Retour",()=>e.navigate("home"))}}x?await b(x):await zi(t,e,r,b)}async function Er(t,e){var u;const{data:i}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:ln(t),subs:[],gcCards:[],stadiumDef:null};const o=Et[t]||Et["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},n=new Set;function a(y,w,h){var E,m;return n.add(y.id),{cardId:"ai-"+y.id+"-"+h,id:y.id,firstname:y.firstname,name:y.surname_real,country_code:y.country_code,club_id:y.club_id,job:y.job,job2:y.job2,note_g:Number(y.note_g)||0,note_d:Number(y.note_d)||0,note_m:Number(y.note_m)||0,note_a:Number(y.note_a)||0,rarity:y.rarity,skin:y.skin,hair:y.hair,hair_length:y.hair_length,face:y.face,clubName:((E=y.clubs)==null?void 0:E.encoded_name)||null,clubLogo:((m=y.clubs)==null?void 0:m.logo_url)||null,boost:0,used:!1,_line:w}}for(const y of["GK","DEF","MIL","ATT"]){const w=i.filter($=>$.job===y&&!n.has($.id)),h=i.filter($=>$.job!==y&&!n.has($.id)),E=[...w,...h],m=[];for(let $=0;$<o[y];$++){const A=E[$];A&&m.push(a(A,y,$))}const S=dt(m.length);m.forEach(($,A)=>{$._col=S[A]}),r[y]=m}const c=i.filter(y=>!n.has(y.id)).slice(0,5).map((y,w)=>a(y,y.job,100+w)),f=Object.keys(Me).sort(()=>Math.random()-.5).slice(0,3).map((y,w)=>{var h,E;return{id:"ai-gc-"+w,gc_type:y,name:((h=Me[y])==null?void 0:h.name)||y,icon:((E=Me[y])==null?void 0:E.icon)||"⚡"}}),x=Object.values(r).flat(),b={};x.forEach(y=>{y.club_id&&(b[y.club_id]=(b[y.club_id]||0)+1)});const g=(u=Object.entries(b).sort((y,w)=>w[1]-y[1])[0])==null?void 0:u[0];let p=null;if(g){const{data:y}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",g).single();y&&(p={club_id:y.id,country_code:null,name:y.encoded_name+" Stadium",club:{encoded_name:y.encoded_name,logo_url:y.logo_url}})}return{lines:r,subs:c,gcCards:f,stadiumDef:p}}function Lr(t){let e=0;for(const i of["GK","DEF","MIL","ATT"])(t[i]||[]).forEach(o=>{const r=o._line||i,n=Number(r==="GK"?o.note_g:r==="DEF"?o.note_d:r==="MIL"?o.note_m:o.note_a)||0;e+=n+(o.boost||0)});return e}function Ir(t,e){const i={};for(const a of["GK","DEF","MIL","ATT"])(t[a]||[]).forEach((s,c)=>{i[`${a}${c+1}`]=s});const o=Li(e)||Ii[e]||[];let r=0,n=0;for(const[a,s]of o){const c=i[a],d=i[s];if(!c||!d)continue;const l=Bt(c,d);l==="#00ff88"?n++:l==="#FFD700"&&r++}return{jaune:r,vert:n}}function Eo(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function mi(t,e,i){if(i<=0||!t.length)return[];const o=[...t].sort((r,n)=>Math.abs(Eo(r)-e)-Math.abs(Eo(n)-e));return o.slice(0,Math.min(i,o.length))}async function Lo(t,e){var Y,I;const i=Number(e==null?void 0:e.target_note_avg)||10,o=Number(e==null?void 0:e.nb_liens_jaune)||0,r=Number(e==null?void 0:e.nb_liens_vert)||0,n=Number(e==null?void 0:e.nb_joueurs_stade)||0,{data:a}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url,country_code)").eq("is_active",!0).limit(300);if(!a||a.length<16)return{lines:ln(t),subs:[],gcCards:[],stadiumDef:null};const s={};a.forEach(_=>{_.club_id&&(s[_.club_id]=(s[_.club_id]||0)+1)});const c=((Y=Object.entries(s).sort((_,G)=>G[1]-_[1])[0])==null?void 0:Y[0])||null,d=c?a.filter(_=>_.club_id===c):[],l=((I=d[0])==null?void 0:I.country_code)||null,f=l?a.filter(_=>_.country_code===l&&_.club_id!==c):[],x=Math.min(d.length,Math.max(2,r+1),16),b=Math.min(f.length,Math.max(0,o),16-x),g=[],p=new Set;mi(d,i,x).forEach(_=>{g.push(_),p.add(_.id)}),mi(f,i,b).forEach(_=>{g.push(_),p.add(_.id)});const u=Math.max(0,16-g.length),y=a.filter(_=>!p.has(_.id));mi(y,i,u).forEach(_=>{g.push(_),p.add(_.id)});const w=Et[t]||Et["4-4-2"],h={GK:[],DEF:[],MIL:[],ATT:[]},E=new Set;function m(_,G,K){var le,ce;return E.add(_.id),{cardId:"ai-"+_.id+"-"+K,id:_.id,firstname:_.firstname,name:_.surname_real,country_code:_.country_code,club_id:_.club_id,job:_.job,job2:_.job2,note_g:Number(_.note_g)||0,note_d:Number(_.note_d)||0,note_m:Number(_.note_m)||0,note_a:Number(_.note_a)||0,rarity:_.rarity,skin:_.skin,hair:_.hair,hair_length:_.hair_length,face:_.face,clubName:((le=_.clubs)==null?void 0:le.encoded_name)||null,clubLogo:((ce=_.clubs)==null?void 0:ce.logo_url)||null,boost:0,used:!1,_line:G}}for(const _ of["GK","DEF","MIL","ATT"]){const G=g.filter(H=>H.job===_&&!E.has(H.id)),K=g.filter(H=>H.job!==_&&!E.has(H.id)),le=[...G,...K],ce=[];for(let H=0;H<w[_];H++){const pe=le[H];pe&&ce.push(m(pe,_,H))}const j=dt(ce.length);ce.forEach((H,pe)=>{H._col=j[pe]}),h[_]=ce}let S=g.filter(_=>!E.has(_.id));if(S.length<5){const _=a.filter(G=>!E.has(G.id)&&!S.some(K=>K.id===G.id));S=S.concat(mi(_,i,5-S.length))}const $=S.slice(0,5).map((_,G)=>m(_,_.job,100+G)),R=Object.keys(Me).sort(()=>Math.random()-.5).slice(0,3).map((_,G)=>{var K,le;return{id:"ai-gc-"+G,gc_type:_,name:((K=Me[_])==null?void 0:K.name)||_,icon:((le=Me[_])==null?void 0:le.icon)||"⚡"}});let O=null;if(n>0&&c){const{data:_}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",c).single();_&&(O={club_id:_.id,country_code:null,name:_.encoded_name+" Stadium",club:{encoded_name:_.encoded_name,logo_url:_.logo_url}})}return{lines:h,subs:$,gcCards:R,stadiumDef:O}}function ln(t){const e=Et[t]||Et["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let r=0;for(const n of["GK","DEF","MIL","ATT"]){const a=[];for(let c=0;c<e[n];c++){const d=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+r,id:"fake-"+r,firstname:"IA",name:o[r%o.length],country_code:"XX",club_id:null,job:n,job2:null,note_g:n==="GK"?d:2,note_d:n==="DEF"?d:2,note_m:n==="MIL"?d:2,note_a:n==="ATT"?d:2,rarity:"normal",boost:0,used:!1,_line:n}),r++}const s=dt(a.length);a.forEach((c,d)=>{c._col=s[d]}),i[n]=a}return i}function Tr(t,e,i){var r;Fo("/sounds/match-opening.mp3",.3);const o=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const n=t.querySelector(".opponent-preview-wrap"),a=t.querySelector("#opponent-swipe-zone");if(!n||!a)return;const s=a.clientWidth>=900,c=Math.max(200,a.clientHeight-(s?8:40)),d=Math.max(200,a.clientWidth-(s?8:16)),l=s?null:Math.round(Math.max(44,Math.round(d*.168))*.55);n.innerHTML=Ut(e.aiTeam,e.formation,null,[],d,c,[],l),n.style.cssText=`width:${d}px;height:${c}px;overflow:hidden;flex-shrink:0`;const f=n.querySelector("svg");f&&(f.style.cssText="display:block;width:100%;height:100%",f.setAttribute("preserveAspectRatio",s?"xMidYMid meet":"none"))})),setTimeout(()=>Sr(t,e,i),5e3)}const Ye=t=>rn(t);function Sr(t,e,i){const o=e.homeTeam.MIL||[],r=e.aiTeam.MIL||[],n=e.stadiumDef||null,a=e.aiStadiumDef||null,s=vt(o,n)+wt(o),c=vt(r,a)+wt(r),d=s>=c;t.innerHTML=`
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

    ${_i(o,e.clubName,"#D4A017","home",n)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${_i(r,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const l=()=>{const g=(p,u)=>t.querySelectorAll(p).forEach((y,w)=>{setTimeout(()=>{y.style.opacity="1",y.style.transform="translateY(0) scale(1)"},u+w*90)});g(".duel-card-home",150),g(".duel-card-ai",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((p,u)=>{setTimeout(()=>{p.style.opacity="1"},u*70)}),900),setTimeout(()=>{const p=t.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(u=>u.style.opacity="1")},1250),setTimeout(()=>{f("score-home",s,800),f("score-ai",c,800)},1500)};function f(g,p,u){const y=document.getElementById(g);if(!y)return;const w=performance.now(),h=E=>{const m=Math.min(1,(E-w)/u);y.textContent=Math.round(p*(1-Math.pow(1-m,3))),m<1?requestAnimationFrame(h):y.textContent=p};requestAnimationFrame(h)}requestAnimationFrame(l),e.attacker=d?"home":"ai";const x=d?nn():null;d&&(e.boostCard={value:x}),e.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(g=>Ye(g)),aiPlayers:r.map(g=>Ye(g)),homeTotal:s,aiTotal:c,text:`Duel milieu : ${e.clubName} ${s} – ${c} IA → ${d?e.clubName+" attaque":"IA attaque"}`});const b=()=>{e.phase=e.attacker==="home"?"attack":"ai-attack",Te(t,e,i),e.attacker==="ai"&&setTimeout(()=>oo(t,e,i),800)};setTimeout(()=>{const g=document.getElementById("score-home"),p=document.getElementById("score-ai"),u=document.getElementById(d?"duel-row-home":"duel-row-ai"),y=document.getElementById(d?"duel-row-ai":"duel-row-home"),w=d?g:p,h=d?p:g;w&&(w.style.fontSize="80px",w.style.color=d?"#FFD700":"#ff6b6b",w.style.animation="duelPulse .5s ease"+(d?", duelGlow 1.5s ease infinite .5s":"")),h&&(h.style.opacity="0.25"),setTimeout(()=>{u&&(u.style.transformOrigin="center",u.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",u.style.zIndex="5"),setTimeout(()=>{var m;const E=document.getElementById("duel-shock");if(E){const S=(m=y||u)==null?void 0:m.getBoundingClientRect(),$=t.querySelector(".match-screen").getBoundingClientRect();S&&(E.style.top=S.top-$.top+S.height/2+"px"),E.style.animation="shockwave .5s ease-out forwards"}y&&(y.style.transformOrigin="center",y.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var m;const E=document.getElementById("duel-finale");E&&(E.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${d?`⚽ ${e.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${d?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${x}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,E.style.transition="opacity .45s ease",E.style.opacity="1",E.style.pointerEvents="auto",(m=document.getElementById("start-match-btn"))==null||m.addEventListener("click",b))},600)},700)},2800)}function Te(t,e,i){var R,O,Y,I,_,G,K,le,ce;const o=e.selected.map(j=>j.cardId),r=e.usedSubIds||[],n=e.homeSubs.filter(j=>!r.includes(j.cardId)),s=Object.values(e.homeTeam).flat().filter(j=>j.used).length>0&&n.length>0&&e.subsUsed<e.maxSubs,c=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(j=>!j.used),d=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(j=>!j.used),l=Kt(e.aiTeam),f=c.length===0&&d.length===0&&!l,x=(e.homeTeam.DEF||[]).filter(j=>!j.used),b=(e.homeTeam.GK||[]).filter(j=>!j.used);let g=[];e.phase==="attack"&&c.length===0&&(l?(g=x.map(j=>j.cardId),x.length===0&&(g=g.concat(b.map(j=>j.cardId)))):f&&(g=[...x,...b].map(j=>j.cardId))),e.log[e.log.length-1];const p=e.phase==="ai-attack"||e.phase==="ai-defense",u=e.phase==="attack",y=e.phase==="defense",w=e.phase==="finished",E=(e.homeSubs||[]).filter(j=>!(e.usedSubIds||[]).includes(j.cardId)).length>0&&e.subsUsed<e.maxSubs,m=u&&c.length===0&&g.length===0&&!E,S=e.gcCards.filter(j=>!e.usedGc.includes(j.id)),$=e.boostCard&&!e.boostUsed;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.innerHTML=`
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
      ${(()=>{if(e.phase==="defense"&&e.pendingAttack){const H=e.pendingAttack;let pe="";if(e.selected.length>0){const me=e.selected.map(C=>({...(e.homeTeam[C._role]||[]).find(Q=>Q.cardId===C.cardId)||C,_line:C._role})),fe=li(me,e.modifiers.home,e.formation);pe=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${e.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${et(me.map(C=>({...C,used:!1})),"#3a7bd5",fe.total,"defense",e.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${et((H.players||[]).map(me=>({...me,used:!1})),"#ff6b6b",H.total,"attack",e.formation)}</div>
            ${pe}
          </div>`}if(e.phase==="ai-defense"&&e.pendingAttack){const H=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${et((H.players||[]).map(pe=>({...pe,used:!1})),"#00ff88",H.total,"attack",e.formation)}</div>
          </div>`}if(e.phase==="attack"&&e.selected.length>0){const H=e.selected.map(me=>{const fe=(e.homeTeam[me._role]||[]).find(V=>V.cardId===me.cardId)||me,C=["GK","DEF"].includes(me._role);return{...fe,_line:me._role,...C?{note_a:Math.max(1,Number(fe.note_a)||0)}:{}}}),pe=si(H,e.modifiers.home,e.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${e.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${et(H.map(me=>({...me,used:!1})),"#FFD700",pe.total,"attack",e.formation)}</div>
          </div>`}const j=e.log[e.log.length-1];return j?'<div style="padding:2px 4px">'+an(j)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${e.log.length})
    </button>

    ${(()=>{const j=window.innerWidth>=700,H=(F,z,W)=>{var Ee,xe;const Z=(e.gcDefs||[]).find(be=>be.name===F.gc_type),se=(Z==null?void 0:Z.name)||F.gc_type,ge=(Z==null?void 0:Z.effect)||((Ee=Me[F.gc_type])==null?void 0:Ee.desc)||"",ye=Z!=null&&Z.image_url?`/icons/${Z.image_url}`:null,$e=((xe=Me[F.gc_type])==null?void 0:xe.icon)||"⚡";return`<div class="gc-mini" data-gc-id="${F.id}" data-gc-type="${F.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${nt(se,ye,$e,ge,{width:z})}
        </div>`},pe=(F,z)=>{var W;return`<div id="boost-card"
          style="box-sizing:border-box;width:${F}px;height:${z}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(z*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(z*.2)}px">⚡</div>
            <div style="font-size:${Math.round(z*.09)}px;color:#000;font-weight:900">+${(W=e.boostCard)==null?void 0:W.value}</div>
          </div>`},me=(F,z)=>z?pe(95,162):H(F,95),fe=(F,z)=>z?pe(53,90):H(F,53),C=j?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",V=w?`<button id="btn-results" style="${C};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:p?`<div style="${C};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:m?`<button id="btn-pass" style="${C};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:u?`<button id="btn-action" style="${C};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${e.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:y?`<button id="btn-action" style="${C};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${e.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${C};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Q=u||y?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${e.selected.length}/3 sélectionné(s)</div>`:"",X=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${j?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${n.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':n.map(F=>`<div class="sub-btn-col" data-sub-id="${F.cardId}" style="cursor:pointer;flex-shrink:0">${kt(F,76,100)}</div>`).join("")}
      </div>`,re=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${Ut(e.homeTeam,e.formation,e.phase,o,j?1300:zt(),j?600:Ot(),g)}
        </div>
      </div>`;return j?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${X}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${re}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${V}${Q}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${S.map(F=>me(F,!1)).join("")}
            ${$?me(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ut(e.homeTeam,e.formation,e.phase,o,j?1300:zt(),j?600:Ot(),g)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${S.map(F=>fe(F,!1)).join("")}
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
          <div>${V}${Q}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${e.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...e.log].reverse().map(j=>{var H,pe,me;if(j.type==="duel"){const fe=j.isGoal,C=j.homeScored?"#FFD700":fe?"#ff6b6b":"rgba(255,255,255,0.3)",V=j.homeScored?"⚽ BUT !":fe?"⚽ BUT IA !":(H=j.homePlayers)!=null&&H.length?"⚔️ Attaque":"🛡️ Défense",Q=(j.homeTotal??0)>=(j.aiTotal??0);return`<div style="padding:8px;border-radius:8px;background:${fe?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${C};margin-bottom:4px">
                <div style="font-size:9px;color:${C};letter-spacing:1px;margin-bottom:6px;font-weight:700;text-transform:uppercase;text-align:center">${V}</div>
                <div style="display:flex;align-items:center;justify-content:center;gap:10px">
                  ${(pe=j.aiPlayers)!=null&&pe.length?`<div style="flex:1;display:flex;justify-content:flex-end;opacity:0.75">${et(j.aiPlayers,"#ff6b6b",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                  <div style="flex-shrink:0;display:flex;align-items:center;gap:6px">
                    <span style="font-size:16px;font-weight:900;color:${Q?"#e03030":"#22c55e"}">${j.aiTotal??"–"}</span>
                    <span style="font-size:9px;color:rgba(255,255,255,0.3)">VS</span>
                    <span style="font-size:16px;font-weight:900;color:${Q?"#22c55e":"#e03030"}">${j.homeTotal??"–"}</span>
                  </div>
                  ${(me=j.homePlayers)!=null&&me.length?`<div style="flex:1;display:flex;justify-content:flex-start">${et(j.homePlayers,"rgba(255,255,255,0.7)",void 0,void 0,e.formation)}</div>`:'<div style="flex:1"></div>'}
                </div>
              </div>`}return j.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${j.outPlayer?kt({...j.outPlayer,used:!0,_line:j.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${j.inPlayer?kt({...j.inPlayer,_line:j.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:j.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${j.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${j.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function A(){const j=t.querySelector(".match-screen");if(!j)return;const H=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);j.style.bottom="auto",j.style.height=H+"px",j.style.minHeight=H+"px",j.style.maxHeight=H+"px",j.style.overflow="hidden";const pe=t.querySelector("#mobile-action-bar"),me=t.querySelector("#mobile-play-area");pe&&me&&(me.style.paddingBottom=pe.offsetHeight+"px")}if(A(),setTimeout(A,120),setTimeout(A,400),setTimeout(A,1e3),e._vvBound||(e._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",A),window.visualViewport.addEventListener("scroll",A)),window.addEventListener("resize",A)),function(){const H=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!H)return;const pe=H.closest("#match-terrain-wrap");pe&&(pe.style.cssText="position:relative;width:100%;height:100%;padding:0"),H.removeAttribute("width"),H.removeAttribute("height"),H.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",H.setAttribute("preserveAspectRatio","xMidYMid meet")}(),e._resizeBound||(e._resizeBound=!0,window.addEventListener("resize",()=>{const j=t.querySelector(".terrain-wrapper svg");if(j){const H=j.closest("#match-terrain-wrap");H&&(H.style.cssText="position:relative;width:100%;height:100%;padding:0"),j.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),e.phase==="attack"||e.phase==="defense"){let j=!1,H=30;const pe=()=>document.getElementById("match-timer"),me=()=>{const fe=pe();if(!fe)return;const C=String(Math.floor(H/60)).padStart(2,"0"),V=String(H%60).padStart(2,"0");fe.textContent=` ${C}:${V}`,fe.style.color=j?"#ff2222":"#ff9500",fe.style.fontWeight="900"};me(),e._timerInt=setInterval(()=>{if(H--,H<0)if(!j)j=!0,H=15,me(),Po("/sounds/timer-urgent.mp3",.6);else{clearInterval(e._timerInt),e._timerInt=null,Ke(),e.homeScore=0,e.aiScore=3;const fe=document.createElement("div");fe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",fe.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(fe),setTimeout(()=>{fe.remove(),_t(t,e,i)},2500)}else me()},1e3)}(R=document.getElementById("match-quit"))==null||R.addEventListener("click",()=>{Ve(t),confirm("Abandonner ? Résultat : défaite 3-0")&&(e.homeScore=0,e.aiScore=3,_t(t,e,i))}),(O=document.getElementById("view-ai"))==null||O.addEventListener("click",()=>Nr(e,i)),(Y=document.getElementById("toggle-history"))==null||Y.addEventListener("click",()=>{var j;(j=document.getElementById("match-history-panel"))==null||j.classList.add("open")}),(I=document.getElementById("close-history"))==null||I.addEventListener("click",()=>{var j;(j=document.getElementById("match-history-panel"))==null||j.classList.remove("open")}),(_=document.getElementById("btn-action"))==null||_.addEventListener("click",()=>{e.selected.length!==0&&(u?zr(t,e,i):y&&Mr(t,e,i))}),(G=document.getElementById("btn-results"))==null||G.addEventListener("click",()=>_t(t,e,i)),(K=document.getElementById("btn-pass"))==null||K.addEventListener("click",()=>{if(e.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Ui(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),_t(t,e,i);return}e.phase="ai-attack",Te(t,e,i),setTimeout(()=>oo(t,e,i),800)}),t.querySelectorAll(".match-slot-hit").forEach(j=>{j.addEventListener("click",()=>Ar(j,e,t,i))}),t.querySelectorAll(".match-used-hit").forEach(j=>{j.addEventListener("click",()=>Fi(t,e,i,null,j.dataset.cardId))}),t.querySelectorAll(".gc-mini").forEach(j=>{u?j.addEventListener("click",()=>qr(j.dataset.gcId,j.dataset.gcType,t,e,i)):(j.style.opacity="0.35",j.style.cursor="default",j.addEventListener("click",()=>It("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(le=document.getElementById("boost-card"))==null||le.addEventListener("click",()=>Pr(t,e,i)),t.querySelectorAll(".sub-btn-col").forEach(j=>{j.addEventListener("click",()=>Fi(t,e,i,j.dataset.subId))}),(ce=document.getElementById("sub-btn-main"))==null||ce.addEventListener("click",()=>Fi(t,e,i))}function Ar(t,e,i,o){const r=t.dataset.cardId,n=t.dataset.role,a=e.selected.findIndex(s=>s.cardId===r);if(a!==-1)e.selected.splice(a,1);else{if(e.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const s=(e.homeTeam[n]||[]).find(c=>c.cardId===r);s&&e.selected.push({...s,_role:n,_line:n})}Te(i,e,o)}function io(t,e,i){t.matchId&&v.from("matches").update({last_player_id:i}).eq("id",t.matchId).then(()=>{})}function zr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),io(e,i,i.state.profile.id);const o=e.selected.map(n=>{const a=(e.homeTeam[n._role]||[]).find(c=>c.cardId===n.cardId)||n,s=["GK","DEF"].includes(n._role);return{...a,_line:n._role,...s?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),r=si(o,e.modifiers.home,e.formation);e.pendingAttack={...r,players:[...o],side:"home"},e.selected.forEach(n=>{const a=(e.homeTeam[n._role]||[]).find(s=>s.cardId===n.cardId);a&&(a.used=!0)}),e.log.push({text:`⚔️ Vous attaquez : ${r.total} (base ${r.base}${r.links?` +${r.links} liens`:""}) — ${e.selected.map(n=>n.name).join(", ")}`,type:"info"}),e.selected=[],e.modifiers.home={},e.phase="ai-defense",Te(t,e,i),setTimeout(()=>Br(t,e,i),1200)}function Mr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ke(),io(e,i,i.state.profile.id);const o=e.stadiumDef||null,r=e.selected.map(c=>{const d=(e.homeTeam[c._role]||[]).find(f=>f.cardId===c.cardId)||c,l=d.stadiumBonus||o&&(o.club_id&&String(d.club_id)===String(o.club_id)||o.country_code&&d.country_code===o.country_code)||!1;return{...d,_line:c._role,stadiumBonus:l}}),n=li(r,e.modifiers.home,e.formation);e.selected.forEach(c=>{const d=(e.homeTeam[c._role]||[]).find(l=>l.cardId===c.cardId);d&&(d.used=!0)});const a=to(e.pendingAttack.total,n.total,e.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(e.pendingAttack.players||[]).map(c=>Ye(c)),homePlayers:e.selected.map(c=>{const d=(e.homeTeam[c._role]||[]).find(l=>l.cardId===c.cardId)||c;return Ye(d)}),homeTotal:n.total,aiTotal:e.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)s.text="🛡️ Bouclier ! But annulé.",e.log.push(s);else if(a.goal){e.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${e.pendingAttack.total} > ${n.total})`,e.log.push(s),e.selected=[],e.modifiers.home={},e.pendingAttack=null,Te(t,e,i),tt(s.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${n.total} ≥ ${e.pendingAttack.total})`,e.log.push(s);e.selected=[],e.modifiers.home={},e.pendingAttack=null,Mt(t,e,i,"home-attack")}function Cr(t){if(t.aiSubsUsed>=t.aiMaxSubs)return;const e=Object.values(t.aiTeam).flat().filter(c=>c.used);if(!e.length)return;const i=(t.aiSubs||[]).filter(c=>!t.aiUsedSubIds.includes(c.cardId));if(!i.length)return;const o=e[Math.floor(Math.random()*e.length)],r=i.find(c=>c.job===o.job)||i[0],n={...r,used:!1,_line:o._line,_col:o._col},a=t.aiTeam[o._line],s=a.findIndex(c=>c.cardId===o.cardId);s!==-1&&(a[s]=n),t.aiUsedSubIds.push(r.cardId),t.aiSubsUsed++,t.log.push({text:`🔄 IA : ${r.firstname} ${r.name} remplace ${o.firstname} ${o.name}`,type:"info"})}function jr(t){var o;if(!((o=t.aiGcCards)!=null&&o.length))return;const e=t.aiGcCards.filter(r=>!t.aiUsedGc.includes(r.id));if(!e.length||Math.random()>.3)return;const i=e[Math.floor(Math.random()*e.length)];switch(t.aiUsedGc.push(i.id),Me[i.gc_type],i.gc_type){case"Boost+2":{const r=Object.values(t.aiTeam).flat().filter(n=>!n.used);if(r.length){const n=r[Math.floor(Math.random()*r.length)];n.boost=(n.boost||0)+2}break}case"Boost+3":{const r=Object.values(t.aiTeam).flat().filter(n=>!n.used);if(r.length){const n=r[Math.floor(Math.random()*r.length)];n.boost=(n.boost||0)+3}break}case"Remplacement+":t.aiMaxSubs=(t.aiMaxSubs||3)+1;break;case"Bouclier":t.modifiers.ai.shield=!0;break;case"Nul+1":t.modifiers.ai.drawBonus=(t.modifiers.ai.drawBonus||0)+1;break}t.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function oo(t,e,i){io(e,i,null),Cr(e),jr(e);let o=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(l=>!l.used),r=!1;if(!o.length){const l=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(x=>!x.used),f=Kt(e.homeTeam);if(f||l.length===0){const x=(e.aiTeam.DEF||[]).filter(g=>!g.used),b=(e.aiTeam.GK||[]).filter(g=>!g.used);o=f?x.length?x:b:[...x,...b],r=!0}}const n=Wo(o,"attack",e.difficulty);if(!n.length){Ki(t,e,i);return}r&&n.forEach(l=>{l._line=l._line||l.job,l.note_a=Math.max(1,Number(l.note_a)||0)});const a=si(n,e.modifiers.ai,e.formation);e.pendingAttack={...a,players:n,side:"ai"},n.forEach(l=>{l.used=!0}),e.log.push({text:`🤖 IA attaque : ${a.total} (${n.map(l=>l.name).join(", ")})`,type:"info"}),e.modifiers.ai={};const s=[...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(l=>!l.used),d=(e.homeSubs||[]).filter(l=>!(e.usedSubIds||[]).includes(l.cardId)).length>0&&e.subsUsed<e.maxSubs;if(s.length===0&&!d){if(n.length===1&&(n[0]._line==="GK"||n[0].job==="GK")&&Kt(e.homeTeam)&&e.homeScore===e.aiScore){e.aiScore++,ki(t,e,i,"ai",n[0]);return}e.aiScore++;const f={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:n.map(x=>Ye(x)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};e.log.push(f),e.pendingAttack=null,Te(t,e,i),tt(f.aiPlayers,e.homeScore,e.aiScore,!1,()=>{Mt(t,e,i,"home-attack")});return}e.phase="defense",Te(t,e,i)}function Br(t,e,i){var d,l;const o=[...e.aiTeam.GK||[],...e.aiTeam.DEF||[],...e.aiTeam.MIL||[]],r=Wo(o,"defense",e.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(e.aiTeam[f]||[]).filter(x=>!x.used)).length){const f=((d=e.pendingAttack)==null?void 0:d.players)||[];if(f.length===1&&(f[0]._line==="GK"||f[0].job==="GK")&&e.homeScore===e.aiScore){e.homeScore++,ki(t,e,i,"home",f[0]);return}e.homeScore++;const b={type:"duel",isGoal:!0,homeScored:!0,homePlayers:f.map(g=>Ye(g)),homeTotal:((l=e.pendingAttack)==null?void 0:l.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};e.log.push(b),e.modifiers.ai={},e.pendingAttack=null,Te(t,e,i),tt(b.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}const a=r.length>0?li(r,e.modifiers.ai,e.formation).total:0;r.forEach(f=>{f.used=!0});const s=to(e.pendingAttack.total,a,e.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(e.pendingAttack.players||[]).map(f=>Ye(f)),aiPlayers:r.map(f=>Ye(f)),homeTotal:e.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(s.shielded)c.text="🛡️ Bouclier IA !",e.log.push(c);else if(s.goal){e.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${e.pendingAttack.total} > ${a})`,e.log.push(c),e.modifiers.ai={},e.pendingAttack=null,Te(t,e,i),tt(c.homePlayers,e.homeScore,e.aiScore,!0,()=>{Mt(t,e,i,"ai-attack")});return}else c.text=`🧤 IA défend (${a} ≥ ${e.pendingAttack.total})`,e.log.push(c);e.modifiers.ai={},e.pendingAttack=null,Mt(t,e,i,"ai-attack")}function Mt(t,e,i,o){if(e.round++,!dn(t,e,i)){if(no(e)){_t(t,e,i);return}if(o==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(a=>!a.used))){Ki(t,e,i);return}e.phase="attack",Te(t,e,i)}else{if(!["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(a=>!a.used))){Ki(t,e,i);return}e.phase="ai-attack",Te(t,e,i),setTimeout(()=>oo(t,e,i),800)}}}function Kt(t){return!["GK","DEF","MIL","ATT"].some(e=>(t[e]||[]).some(i=>!i.used))}function Io(t){const e=(t.GK||[]).some(o=>!o.used),i=["DEF","MIL","ATT"].some(o=>(t[o]||[]).some(r=>!r.used));return e&&!i}function dn(t,e,i){if(e.homeScore!==e.aiScore)return!1;if(Io(e.homeTeam)&&Kt(e.aiTeam)){const o=(e.homeTeam.GK||[]).find(r=>!r.used);return o?(o.used=!0,e.homeScore++,ki(t,e,i,"home",o),!0):!1}if(Io(e.aiTeam)&&Kt(e.homeTeam)){const o=(e.aiTeam.GK||[]).find(r=>!r.used);return o?(o.used=!0,e.aiScore++,ki(t,e,i,"ai",o),!0):!1}return!1}function ki(t,e,i,o,r){e.log.push({type:"duel",isGoal:!0,homeScored:o==="home",homePlayers:o==="home"?[Ye(r)]:[],aiPlayers:o==="ai"?[Ye(r)]:[],text:`⚽ DERNIER CORNER — Le gardien ${o==="home"?"":"adverse "}marque !`});const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(n);const a=(s,c)=>new Promise(d=>{n.innerHTML=`<div style="font-size:32px;font-weight:900;color:${c};letter-spacing:2px;animation:lcFade 1.4s ease both">${s}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(d,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),n.remove(),e.pendingAttack=null,Te(t,e,i),tt([Ye(r)],e.homeScore,e.aiScore,o==="home",()=>{if(no(e)){_t(t,e,i);return}Mt(t,e,i,o==="home"?"ai-attack":"home-attack")})))()}function no(t){const e=["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(r=>!r.used)),i=["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(r=>!r.used));return!e&&!i}function Ui(t,e){return!(["MIL","ATT"].some(r=>(t[r]||[]).some(n=>!n.used))||Kt(e)||!["MIL","ATT"].some(r=>(e[r]||[]).some(n=>!n.used)))}function Ki(t,e,i){if(!dn(t,e,i)){if(no(e)){_t(t,e,i);return}if(Ui(e.homeTeam,e.aiTeam)&&Ui(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),_t(t,e,i);return}e.phase="attack",Te(t,e,i)}}function Fi(t,e,i,o=null,r=null){var b,g;if(e.phase!=="attack"){It("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(e.usedSubIds||(e.usedSubIds=[]),e.subsUsed>=e.maxSubs){It(`Maximum ${e.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const n=Object.entries(e.homeTeam).flatMap(([p,u])=>(u||[]).filter(y=>y.used).map(y=>({...y,_line:y._line||p}))),a=e.homeSubs.filter(p=>!e.usedSubIds.includes(p.cardId));if(!n.length){It("Aucun joueur utilisé à remplacer");return}if(!a.length){It("Aucun remplaçant disponible");return}let s=Math.max(0,n.findIndex(p=>p.cardId===r));const c=((b=n[s])==null?void 0:b._line)||((g=n[s])==null?void 0:g.job);let d=o?Math.max(0,a.findIndex(p=>p.cardId===o)):Math.max(0,a.findIndex(p=>p.job===c)),l=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function x(){var m,S,$,A,P,R;const p=n[s],u=a[d],y=Math.min(130,Math.round((window.innerWidth-90)/2)),w=Math.round(y*1.35),h=O=>`background:rgba(255,255,255,0.12);border:none;color:${O?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${O?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${e.subsUsed}/${e.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${h(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${u?kt({...u,used:!1,boost:0},y,w):"<div>—</div>"}</div>
        <button id="in-down" style="${h(d>=a.length-1)}" ${d>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${h(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?kt({...p,used:!1,boost:0},y,w):"<div>—</div>"}</div>
        <button id="out-down" style="${h(s>=n.length-1)}" ${s>=n.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${n.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(m=f.querySelector("#sub-close"))==null||m.addEventListener("click",()=>f.remove()),(S=f.querySelector("#out-up"))==null||S.addEventListener("click",()=>{s>0&&(s--,x())}),($=f.querySelector("#out-down"))==null||$.addEventListener("click",()=>{s<n.length-1&&(s++,x())}),(A=f.querySelector("#in-up"))==null||A.addEventListener("click",()=>{d>0&&(d--,x())}),(P=f.querySelector("#in-down"))==null||P.addEventListener("click",()=>{d<a.length-1&&(d++,x())});const E=(O,Y,I,_)=>{const G=f.querySelector("#"+O);if(!G)return;let K=0;G.addEventListener("touchstart",le=>{K=le.touches[0].clientY},{passive:!0}),G.addEventListener("touchend",le=>{const ce=le.changedTouches[0].clientY-K;if(Math.abs(ce)<30)return;const j=Y();ce<0&&j<_-1?(I(j+1),x()):ce>0&&j>0&&(I(j-1),x())},{passive:!0})};E("in-panel",()=>d,O=>d=O,a.length),E("out-panel",()=>s,O=>s=O,n.length),(R=f.querySelector("#sub-confirm"))==null||R.addEventListener("click",O=>{if(O.preventDefault(),O.stopPropagation(),l)return;l=!0;const Y=n[s],I=a[d];if(!Y||!I)return;let _=null,G=-1;for(const[le,ce]of Object.entries(e.homeTeam)){const j=(ce||[]).findIndex(H=>H.cardId===Y.cardId);if(j!==-1){_=le,G=j;break}}if(G===-1||!_){It("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const K={...I,_line:_,_col:Y._col||0,used:!1,boost:0};e.homeTeam[_].splice(G,1,K),e.usedSubIds||(e.usedSubIds=[]),e.usedSubIds.push(I.cardId),e.subsUsed++,e.selected=[],e.log.push({type:"sub",subSide:"home",clubName:e.clubName,outPlayer:{name:Y.name,firstname:Y.firstname,note:Ne(Y,_),portrait:Ct(Y),job:Y.job,country_code:Y.country_code,rarity:Y.rarity,clubName:Y.clubName,clubLogo:Y.clubLogo},inPlayer:{name:I.name,firstname:I.firstname,note:Ne(I,_),portrait:Ct(I),job:I.job,country_code:I.country_code,rarity:I.rarity,clubName:I.clubName,clubLogo:I.clubLogo},text:`🔄 ${I.firstname} ${I.name} remplace ${Y.firstname} ${Y.name}`}),f.remove(),kr(Y,I,()=>Te(t,e,i))})}document.body.appendChild(f),x()}function qr(t,e,i,o,r){var x,b;const n=(o.gcDefs||[]).find(g=>g.name===e),a=Me[e]||{icon:"⚡",desc:"Carte spéciale."},s=(n==null?void 0:n.name)||e,c=(n==null?void 0:n.effect)||a.desc,d=n!=null&&n.image_url?`/icons/${n.image_url}`:null,l=a.icon||"⚡",f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",f.innerHTML=`
    ${nt(s,d,l,c,{width:190})}
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(f),(x=f.querySelector("#gc-back"))==null||x.addEventListener("click",()=>f.remove()),(b=f.querySelector("#gc-use"))==null||b.addEventListener("click",()=>{f.remove(),Fr(t,e,i,o,r)})}function gi(t,e,i,o,r,n){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function c(){var d,l;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${e}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${t.map(f=>{const x=f._line||f.job||"MIL",b=s.find(p=>p.cardId===f.cardId),g=ze({...f,_evolution_bonus:0},{width:90,showStad:!0,role:x,extraNote:f.boost||0});return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="position:relative;border-radius:8px;${b?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          ${g}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${e})
      </button>
    </div>`,(d=a.querySelector("#gc-picker-close"))==null||d.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const x=f.dataset.cid,b=t.find(p=>p.cardId===x);if(!b)return;const g=s.findIndex(p=>p.cardId===x);g>-1?s.splice(g,1):s.length<e&&s.push(b),c()})}),(l=a.querySelector("#gc-picker-confirm"))==null||l.addEventListener("click",()=>{a.remove(),n(s)})}c(),document.body.appendChild(a)}const Dr={BOOST_STAT:({value:t=1,count:e=1,roles:i=[]},o,r,n)=>{const a=Object.entries(o.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,c])=>c.filter(d=>!d.used).map(d=>({...d,_line:s})));return a.length?(gi(a,e,`Choisir ${e} joueur(s) à booster (+${t})`,r,o,s=>{s.forEach(c=>{const d=(o.homeTeam[c._line]||[]).find(l=>l.cardId===c.cardId);d&&(d.boost=(d.boost||0)+t,o.log.push({text:`⚡ +${t} sur ${d.name}`,type:"info"}))}),Te(r,o,n)}),!0):(o.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Te(r,o,n),!0)},DEBUFF_STAT:({value:t=1,count:e=1,roles:i=[],target:o="ai"},r,n,a)=>{const s=o==="home"?r.homeTeam:r.aiTeam,c=o==="ai"?"adverse":"allié",d=Object.entries(s).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,f])=>f.filter(x=>!x.used).map(x=>({...x,_line:l})));return d.length?(gi(d,e,`Choisir ${e} joueur(s) ${c}(s) à débuffer (-${t})`,n,r,l=>{l.forEach(f=>{const b=((o==="home"?r.homeTeam:r.aiTeam)[f._line]||[]).find(g=>g.cardId===f.cardId);b&&(b.boost=(b.boost||0)-t,r.log.push({text:`🎯 -${t} sur ${b.name}${o==="ai"?" (IA)":""}`,type:"info"}))}),Te(n,r,a)}),!0):(r.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),Te(n,r,a),!0)},GRAY_PLAYER:({count:t=1,roles:e=[],target:i="ai"},o,r,n)=>{const a=i==="home"?o.homeTeam:o.aiTeam,s=i==="ai"?"adverse":"allié",c=Object.entries(a).filter(([d])=>!e.length||e.includes(d)).flatMap(([d,l])=>l.filter(f=>!f.used).map(f=>({...f,_line:d})));return c.length?(gi(c,t,`Choisir ${t} joueur(s) ${s}(s) à exclure`,r,o,d=>{d.forEach(l=>{const x=((i==="home"?o.homeTeam:o.aiTeam)[l._line]||[]).find(b=>b.cardId===l.cardId);x&&(x.used=!0,o.log.push({text:`❌ ${x.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Te(r,o,n)}),!0):(o.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),Te(r,o,n),!0)},REVIVE_PLAYER:({count:t=1,roles:e=[]},i,o,r)=>{const n=Object.entries(i.homeTeam).filter(([a])=>!e.length||e.includes(a)).flatMap(([a,s])=>s.filter(c=>c.used).map(c=>({...c,_line:a})));return n.length?(gi(n,t,`Choisir ${t} joueur(s) à ressusciter`,o,i,a=>{a.forEach(s=>{const c=(i.homeTeam[s._line]||[]).find(d=>d.cardId===s.cardId);c&&(c.used=!1,i.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),Te(o,i,r)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Te(o,i,r),!0)},REMOVE_GOAL:({},t)=>(t.aiScore>0?(t.aiScore--,t.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):t.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},t)=>(t.homeScore===t.aiScore?(t.homeScore++,t.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):t.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:t=1},e)=>(e.maxSubs=(e.maxSubs||3)+t,e.log.push({text:`🔄 +${t} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Fr(t,e,i,o,r){o.usedGc.push(t);const n=o.gcDefs||[],a=n.find(c=>c.name===e)||n.find(c=>{var d;return((d=c.name)==null?void 0:d.toLowerCase().trim())===(e==null?void 0:e.toLowerCase().trim())});let s=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const c=Dr[a.effect_type];c?c(a.effect_params||{},o,i,r)||(s=!0):(r.toast(`Effet "${a.effect_type}" non implémenté`,"error"),s=!0)}else{switch(e){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(o.homeTeam).flatMap(([d,l])=>(l||[]).filter(f=>f.used).map(f=>({...f,_line:d})));c.length?(c[0].used=!1,o.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(d=>!d.used);if(c.length){const d=c.sort((l,f)=>Ne(f,"ATT")-Ne(l,"ATT"))[0];d.used=!0,o.log.push({text:`❄️ ${d.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}v.from("cards").delete().eq("id",t).then(()=>{}),s&&Te(i,o,r)}function Pr(t,e,i){const o=Object.values(e.homeTeam).flat().filter(r=>!r.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${e.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${o.map(r=>`
        <div class="player-boost-opt" data-card-id="${r.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${hr[r.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Ne(r,r._line||r.job)}</div>
          <div style="flex:1"><b>${r.firstname} ${r.name}</b><div style="font-size:11px;color:#888">${r._line||r.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${e.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(r=>{r.addEventListener("click",()=>{const n=r.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const s=(e.homeTeam[a]||[]).find(c=>c.cardId===n);if(s){s.boost=(s.boost||0)+e.boostCard.value,e.log.push({text:`⚡ Boost +${e.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}e.boostUsed=!0,i.closeModal(),Te(t,e,i)})})}async function _t(t,e,i){var x,b,g,p;Rt(),Ke(),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),e.phase="finished";const{state:o}=i,r=e.homeScore>e.aiScore,n=e.homeScore===e.aiScore,a=r?"victoire":n?"nul":"defaite",s=e.isSolo&&((x=e.soloLevelConfig)!=null&&x.reward_credits)&&r?Number(e.soloLevelConfig.reward_credits):Hn(e.mode,a);if(e.isSolo&&r)try{const{data:u}=await v.from("user_solo_progress").select("unlocked_level").eq("user_id",o.profile.id).maybeSingle(),y=(u==null?void 0:u.unlocked_level)||1;e.soloLevel>=y&&await v.from("user_solo_progress").upsert({user_id:o.profile.id,unlocked_level:e.soloLevel+1,updated_at:new Date().toISOString()})}catch(u){console.warn("[Solo] Erreur mise à jour progression:",u.message)}const c="00000000-0000-0000-0000-000000000000";let d=null;if(e.isRankedAI)try{const{data:u}=await v.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",o.profile.id).single();if(u){const y=u.mmr??1e3,w=u.mmr_deviation??350,h=u.mmr_volatility??.06,E=r?1:n?.5:0,m=(u.placement_matches??0)<10,S=Bo(y,w,h,y,350,E,m),$=n?null:r?o.profile.id:c;await v.rpc("update_mmr_after_ranked",{p_match_id:e.matchId,p_winner_id:$,p_home_id:o.profile.id,p_away_id:c,p_home_delta:S.delta,p_away_delta:0,p_home_new_rd:S.newRd,p_away_new_rd:350,p_home_new_vol:S.newSigma,p_away_new_vol:.06}),d=S.delta}}catch(u){console.warn("[RankedAI] Erreur mise à jour MMR:",u.message)}e.matchId&&await v.from("matches").update({status:"finished",home_score:e.homeScore,away_score:e.aiScore,winner_id:r?o.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",e.matchId);const l={credits:(o.profile.credits||0)+s,matches_played:(o.profile.matches_played||0)+1};r?l.wins=(o.profile.wins||0)+1:n?l.draws=(o.profile.draws||0)+1:l.losses=(o.profile.losses||0)+1,await v.from("users").update(l).eq("id",o.profile.id),await i.refreshProfile();const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",f.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:380px;width:100%">
      <div style="font-size:72px;margin-bottom:12px">${r?"🏆":n?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${r?"Victoire !":n?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${e.homeScore} – ${e.aiScore}</div>

      <div style="display:grid;grid-template-columns:${e.isRankedAI&&d!==null?"1fr 1fr":"1fr"};gap:10px;margin:16px 0">
        <div style="background:rgba(212,160,23,0.15);border:1px solid var(--yellow);border-radius:14px;padding:14px 10px">
          <div style="font-size:11px;opacity:.7;margin-bottom:4px">Récompense</div>
          <div style="font-size:20px;font-weight:900;color:var(--yellow);white-space:nowrap">+${s.toLocaleString("fr")} cr.</div>
        </div>
        ${e.isRankedAI&&d!==null?`
        <div style="background:${d>=0?"rgba(26,107,60,0.2)":"rgba(224,48,48,0.15)"};border:1px solid ${d>=0?"#1A6B3C":"#e03030"};border-radius:14px;padding:14px 10px">
          <div style="font-size:11px;opacity:.7;margin-bottom:4px">MMR</div>
          <div style="font-size:20px;font-weight:900;color:${d>=0?"#4caf50":"#ff6b6b"};white-space:nowrap">${d>=0?"↑ +":"↓ "}${d}</div>
        </div>`:""}
      </div>

      ${e.isSolo&&r?`<div style="background:rgba(26,107,60,0.2);border:1px solid #1A6B3C;border-radius:14px;padding:12px;margin-bottom:12px;font-size:14px;font-weight:700">🔓 Niveau ${e.soloLevel+1} débloqué !</div>`:""}

      <div style="display:flex;gap:10px;margin-top:8px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3);padding:12px 8px;font-size:14px;white-space:nowrap">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1;padding:12px 8px;font-size:14px;white-space:nowrap">${e.isRankedAI?"🔄 Nouveau match":"Rejouer"}</button>
      </div>
      ${e.isSolo&&r?`<button class="btn btn-primary" id="res-next-level" style="width:100%;margin-top:10px;padding:12px;font-size:14px;background:#D4A017;border-color:#D4A017">▶️ Niveau ${e.soloLevel+1}</button>`:""}
    </div>`,document.body.appendChild(f),(b=document.getElementById("res-home"))==null||b.addEventListener("click",()=>{f.remove(),Ve(t),i.navigate("home")}),(g=document.getElementById("res-replay"))==null||g.addEventListener("click",async()=>{if(f.remove(),Ve(t),e.isRankedAI){const{data:u}=await v.from("users").select("mmr, mmr_deviation, mmr_volatility, placement_matches").eq("id",i.state.profile.id).single();mt(),i.navigate("match",{matchMode:"ranked",rankedData:{mmr:(u==null?void 0:u.mmr)??1e3,rd:(u==null?void 0:u.mmr_deviation)??350,sigma:(u==null?void 0:u.mmr_volatility)??.06,isPlacement:((u==null?void 0:u.placement_matches)??0)<10}});return}i.navigate("match",e.isSolo?{matchMode:e.mode,soloLevel:e.soloLevel}:{matchMode:e.mode})}),(p=document.getElementById("res-next-level"))==null||p.addEventListener("click",()=>{f.remove(),Ve(t),i.navigate("match",{matchMode:"solo",soloLevel:e.soloLevel+1})})}function Nr(t,e){e.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ai(t.aiTeam,t.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Gr={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function Rr(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}async function Or(t,e){!t||!e||await Promise.all([To(t,"win"),To(e,"loss")])}async function To(t,e){const{data:i}=await v.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",t).eq("card_type","player");if(!(i!=null&&i.length))return;const o=i.filter(r=>{var n,a;return((n=r.player)==null?void 0:n.rarity)==="pepite"||((a=r.player)==null?void 0:a.rarity)==="papyte"});o.length&&await Promise.all(o.map(r=>{const n=Gr[r.player.rarity],a=e==="win"?n.win:n.loss,s=r.player.note_min??1,c=r.player.note_max??10,d=Rr(r.player),l=r.current_note??d,f=Math.min(c,Math.max(s,l+a));return v.from("cards").update({current_note:f}).eq("id",r.id)}))}const Pt=t=>rn(t);async function jt(t,e,i,o,r={}){return cn(t,e,i,o,r.myGC||[],r.gcDefs||[],r.isRanked||!1,r.rankedData||null,r.stadiumDef||null,r.onMatchEnd||null,r.mlLeagueId||null,r.mlMatchId||null)}async function Hr(t,e,i){const{data:o}=await v.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!o){e.toast("Match introuvable","error"),e.navigate("home");return}const r=o.home_id===e.state.user.id;let n=null,a=null;if(o.mode==="mini_league"){const{data:s}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();s&&(n=s.league_id,a=s.id)}return cn(t,e,i,r,[],[],o.is_ranked||!1,null,null,null,n,a)}async function cn(t,e,i,o,r=[],n=[],a=!1,s=null,c=null,d=null,l=null,f=null){const{state:x,navigate:b,toast:g}=e,p=o?"p1":"p2",u=o?"p2":"p1",y=(r||[]).map(k=>k.id),w=(r||[]).map(k=>({id:k.id,gc_type:k.gc_type,_gcDef:k._gcDef||null}));t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await v.from("matches").select("*").eq("id",i).single();if(!h){g("Match introuvable","error"),b("home");return}async function E(){var _e,ke;console.log("[PvP] buildGameState match:",{id:h.id,home_deck_id:h.home_deck_id,away_deck_id:h.away_deck_id,mode:h.mode,is_ranked:h.is_ranked});const[{data:k,error:L},{data:M,error:B},{data:T},{data:N}]=await Promise.all([v.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),v.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),v.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),v.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",L==null?void 0:L.message,"p2:",B==null?void 0:B.message,"p1D:",(_e=k==null?void 0:k.starters)==null?void 0:_e.length,"p2D:",(ke=M==null?void 0:M.starters)==null?void 0:ke.length);const q=ne=>{const Se=Number(ne.evolution_bonus)||0;return{cardId:ne.card_id,position:ne.position,id:ne.id,firstname:ne.firstname,name:ne.surname_real,country_code:ne.country_code,club_id:ne.club_id,job:ne.job,job2:ne.job2,note_g:(Number(ne.note_g)||0)+(ne.job==="GK"||ne.job2==="GK"&&Number(ne.note_g)>0?Se:0),note_d:(Number(ne.note_d)||0)+(ne.job==="DEF"||ne.job2==="DEF"&&Number(ne.note_d)>0?Se:0),note_m:(Number(ne.note_m)||0)+(ne.job==="MIL"||ne.job2==="MIL"&&Number(ne.note_m)>0?Se:0),note_a:(Number(ne.note_a)||0)+(ne.job==="ATT"||ne.job2==="ATT"&&Number(ne.note_a)>0?Se:0),evolution_bonus:Se,rarity:ne.rarity,skin:ne.skin,hair:ne.hair,hair_length:ne.hair_length,face:ne.face||null,clubName:ne.club_encoded_name||null,clubLogo:ne.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},D=((k==null?void 0:k.starters)||[]).map(ne=>q(ne)),U=((M==null?void 0:M.starters)||[]).map(ne=>q(ne)),ee=(k==null?void 0:k.formation)||"4-4-2",oe=(M==null?void 0:M.formation)||"4-4-2";let ie=wi(D,ee),te=wi(U,oe);const ae=((k==null?void 0:k.subs)||[]).map(ne=>q(ne)),de=((M==null?void 0:M.subs)||[]).map(ne=>q(ne)),we=(k==null?void 0:k.stadium_def)||(o?c:null),ue=(M==null?void 0:M.stadium_def)||(o?null:c);return we&&(ie=di(ie,we),vi(ae,we)),ue&&(te=di(te,ue),vi(de,ue)),{p1Team:ie,p2Team:te,p1Subs:ae,p2Subs:de,p1Formation:ee,p2Formation:oe,p1Name:(T==null?void 0:T.club_name)||(T==null?void 0:T.pseudo)||"Joueur 1",p2Name:(N==null?void 0:N.club_name)||(N==null?void 0:N.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:o?y:[],gc_p2:o?[]:y,gcCardsFull_p1:o?w:[],gcCardsFull_p2:o?[]:w,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:n||[],lastActionAt:new Date().toISOString()}}let m=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(console.log("[PvP] init - amIHome:",o,"gameState exists:",!!m,"match.status:",h.status,"home_id:",h.home_id,"away_id:",h.away_id,"myId:",x.profile.id),!m)if(o){m=await E(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((m==null?void 0:m.p1Team)||{}));const{data:k}=await v.from("matches").select("game_state").eq("id",i).single();!(k!=null&&k.game_state)||!Object.keys(k.game_state).length?await v.from("matches").update({game_state:m,turn_user_id:h.home_id}).eq("id",i):m=k.game_state}else{t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let k=0;k<30&&!m;k++){await new Promise(M=>setTimeout(M,400));const{data:L}=await v.from("matches").select("game_state").eq("id",i).single();L!=null&&L.game_state&&Object.keys(L.game_state).length&&(m=L.game_state),k%5===0&&console.log("[PvP] away - poll",k,"game_state:",!!(L!=null&&L.game_state))}if(!m){g("Erreur de synchronisation","error"),b("home");return}m.gc_p2=y,m.gcCardsFull_p2=w,await v.from("matches").update({game_state:m}).eq("id",i)}let S=!1,$=null,A=!1;const P=new Set,R=new Set;async function O(k){var oe,ie;Rt();try{v.removeChannel(Y)}catch{}const L=m[p+"Score"]||0,M=m[u+"Score"]||0;let B,T;k.winner_id?(B=k.winner_id===x.profile.id,T=!1):k.forfeit?(B=L>M,T=!1):(T=L===M,B=L>M);let N="";if(a&&o)try{const{data:te}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.home_id).single(),{data:ae}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.away_id).single();if(te&&ae){const de=B?1:T?.5:0,we=1-de,ue=te.placement_matches<10,_e=ae.placement_matches<10,ke=computeGlicko2(te.mmr,te.mmr_deviation,te.mmr_volatility,ae.mmr,ae.mmr_deviation,de===1?1:de===0?0:.5,ue),ne=computeGlicko2(ae.mmr,ae.mmr_deviation,ae.mmr_volatility,te.mmr,te.mmr_deviation,we===1?1:we===0?0:.5,_e);await v.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:T?null:B?h.home_id:h.away_id,p_home_id:h.home_id,p_away_id:h.away_id,p_home_delta:ke.delta,p_away_delta:ne.delta,p_home_new_rd:ke.newRd,p_away_new_rd:ne.newRd,p_home_new_vol:ke.newSigma,p_away_new_vol:ne.newSigma});const Se=ke.delta,Re=ke.newMmr,Ae=getTier(Re),Xe=Se>=0?"+":"",He=Se>=0?"#4caf50":"#ff6b6b",rt=getTier(te.mmr);N=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Ae.id!==rt.id?`<div style="font-size:20px;font-weight:900;color:${Ae.color}">
                    ${Re>te.mmr?"📈":"📉"} ${rt.emoji} ${rt.label} → ${Ae.emoji} ${Ae.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Re>te.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Se>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Ae.color}">${Ae.emoji} ${Ae.label}</div>`}
              ${ue?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${te.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(te){console.error("[Ranked] MMR update error:",te)}(oe=document.getElementById("pvp-end-overlay"))==null||oe.remove();const q=document.createElement("div");q.id="pvp-end-overlay",q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const D=T?"🤝":B?"🏆":"😞",U=T?"MATCH NUL":B?"VICTOIRE !":"DÉFAITE",ee=T?"#fff":B?"#FFD700":"#ff6b6b";q.innerHTML=`
      <div style="font-size:64px">${D}</div>
      <div style="font-size:26px;font-weight:900;color:${ee}">${U}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${m[p+"Name"]} ${L} – ${M} ${m[u+"Name"]}</div>
      ${k.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${B?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${N}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(q),(ie=q.querySelector("#pvp-end-home"))==null||ie.addEventListener("click",()=>{q.remove(),Ve(t),l?b("mini-league",{openLeagueId:l}):b(a?"ranked":"home")})}const Y=v.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},k=>{var M;const L=k.new;try{if(L.status==="finished"||L.forfeit){if(S)return;S=!0,$&&(clearInterval($),$=null),Ke(),L.game_state&&(m=L.game_state),O(L);return}if(L.game_state){const B=m;m=L.game_state;const T=m._lastGC;if(T&&T.seq&&!R.has(T.seq)&&(R.add(T.seq),T.by!==p)){C(T.type,T.by,()=>H());return}const N=B[p+"Score"]||0,q=B[u+"Score"]||0,D=m[p+"Score"]||0,U=m[u+"Score"]||0,ee=D>N,oe=U>q;if((ee||oe)&&!P.has(m.round)){P.add(m.round);const ie=[...m.log||[]].reverse().find(de=>de.isGoal),te=((ie==null?void 0:ie.homePlayers)||[]).map(de=>({name:de.name,note:de.note,portrait:de.portrait,job:de.job}));!!((M=ie==null?void 0:ie.text)!=null&&M.includes("DERNIER CORNER"))?ge().then(()=>{tt(te,D,U,ee,()=>H())}):tt(te,D,U,ee,()=>H());return}H()}}catch(B){console.error("[PvP] crash:",B)}}).subscribe();async function I(k){Object.assign(m,k),m.lastActionAt=new Date().toISOString();const{error:L}=await v.from("matches").update({game_state:m}).eq("id",i);L&&g("Erreur de synchronisation","error");try{H()}catch(M){console.error("[PvP] renderPvpScreen crash:",M)}}async function _(){if(S)return;S=!0,Rt(),Ke(),$&&(clearInterval($),$=null);const k=o?h.away_id:h.home_id,L=o?"p2":"p1",M=o?"p1":"p2",B={...m,[L+"Score"]:3,[M+"Score"]:0,phase:"finished"},T=B.p1Score||0,N=B.p2Score||0;try{await v.from("matches").update({game_state:B}).eq("id",i);const{data:q,error:D}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:k,p_home_score:T,p_away_score:N,p_forfeit:!0});if(D&&console.error("[PvP] finish_pvp_match (forfeit):",D),l)try{await v.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(U){console.error("[PvP] check_and_finish_mini_league (forfeit):",U)}try{const{data:U}=await v.rpc("apply_match_rewards",{p_match_id:i});U!=null&&U.success&&!(U!=null&&U.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(U){console.error("[PvP] apply_match_rewards (forfeit):",U)}}catch{}try{v.removeChannel(Y)}catch{}setTimeout(()=>{Ve(t),l?b("mini-league",{openLeagueId:l}):b("home")},800)}const G={BOOST_STAT:({value:k=1,count:L=1,roles:M=[]},B,T)=>{const N=B[p+"Team"],q=Object.entries(N).filter(([D])=>!M.length||M.includes(D)).flatMap(([D,U])=>U.filter(ee=>!ee.used).map(ee=>({...ee,_line:D})));if(!q.length){B.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),T(B);return}K(q,L,`Choisir ${L} joueur(s) à booster (+${k})`,D=>{D.forEach(U=>{const ee=(N[U._line]||[]).find(oe=>oe.cardId===U.cardId);ee&&(ee.boost=(ee.boost||0)+k,B.log.push({text:`⚡ +${k} sur ${ee.name}`,type:"info"}))}),B[p+"Team"]=N,T(B)})},DEBUFF_STAT:({value:k=1,count:L=1,roles:M=[],target:B="ai"},T,N)=>{const q=B==="home"?p:u,D=T[q+"Team"],U=B==="home"?"allié":"adverse",ee=Object.entries(D).filter(([oe])=>!M.length||M.includes(oe)).flatMap(([oe,ie])=>ie.map(te=>({...te,_line:oe})));if(!ee.length){T.log.push({text:`🎯 Aucun joueur ${U}`,type:"info"}),N(T);return}K(ee,L,`Choisir ${L} joueur(s) ${U}(s) (-${k})`,oe=>{oe.forEach(ie=>{const te=(D[ie._line]||[]).find(ae=>ae.cardId===ie.cardId);te&&(te.boost=(te.boost||0)-k,T.log.push({text:`🎯 -${k} sur ${te.name}`,type:"info"}))}),T[q+"Team"]=D,N(T)})},GRAY_PLAYER:({count:k=1,roles:L=[],target:M="ai"},B,T)=>{const N=M==="home"?p:u,q=B[N+"Team"],D=M==="home"?"allié":"adverse",U=Object.entries(q).filter(([ee])=>!L.length||L.includes(ee)).flatMap(([ee,oe])=>oe.filter(ie=>!ie.used).map(ie=>({...ie,_line:ee})));if(!U.length){B.log.push({text:`❌ Aucun joueur ${D}`,type:"info"}),T(B);return}K(U,k,`Choisir ${k} joueur(s) ${D}(s) à exclure`,ee=>{const oe="usedCardIds_"+N,ie=new Set(B[oe]||[]);ee.forEach(te=>{const ae=(q[te._line]||[]).find(de=>de.cardId===te.cardId);ae&&(ae.used=!0,ie.add(te.cardId),B.log.push({text:`❌ ${ae.name} exclu !`,type:"info"}))}),B[oe]=[...ie],B[N+"Team"]=q,T(B)})},REVIVE_PLAYER:({count:k=1,roles:L=[]},M,B)=>{const T=M[p+"Team"],N=Object.entries(T).filter(([q])=>!L.length||L.includes(q)).flatMap(([q,D])=>D.filter(U=>U.used).map(U=>({...U,_line:q})));if(!N.length){M.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),B(M);return}K(N,k,`Choisir ${k} joueur(s) à ressusciter`,q=>{q.forEach(D=>{const U=(T[D._line]||[]).find(ee=>ee.cardId===D.cardId);U&&(U.used=!1,M.log.push({text:`💫 ${U.name} ressuscité !`,type:"info"}))}),M[p+"Team"]=T,B(M)})},REMOVE_GOAL:({},k,L)=>{const M=u+"Score";k[M]>0?(k[M]--,k.log.push({text:"🚫 Dernier but annulé !",type:"info"})):k.log.push({text:"🚫 Aucun but à annuler",type:"info"}),L(k)},ADD_GOAL_DRAW:({},k,L)=>{k[p+"Score"]===k[u+"Score"]?(k[p+"Score"]++,k.log.push({text:"🎯 But bonus !",type:"info"})):k.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),L(k)},ADD_SUB:({value:k=1},L,M)=>{L.maxSubs=(L.maxSubs||3)+k,L.log.push({text:`🔄 +${k} remplacement(s)`,type:"info"}),M(L)},CUSTOM:({},k,L)=>L(k)};function K(k,L,M,B){const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let N=[];function q(){var U,ee;const D=k.map(oe=>{const ie=oe._line||oe.job||"MIL",te=N.find(de=>de.cardId===oe.cardId),ae=ze({...oe,_evolution_bonus:0},{width:90,showStad:!0,role:ie,extraNote:oe.boost||0});return`<div class="pp-item" data-cid="${oe.cardId}"
          style="position:relative;border-radius:8px;${te?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${oe.used?"opacity:0.3;pointer-events:none":""}">
          ${ae}
        </div>`}).join("");T.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${M}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${N.length}/${L}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${D}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${N.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${N.length}/${L})
          </button>
        </div>`,(U=T.querySelector("#pp-close"))==null||U.addEventListener("click",()=>T.remove()),T.querySelectorAll(".pp-item").forEach(oe=>{oe.addEventListener("click",()=>{const ie=oe.dataset.cid,te=k.find(de=>de.cardId===ie),ae=N.findIndex(de=>de.cardId===ie);te&&(ae>-1?N.splice(ae,1):N.length<L&&N.push(te),q())})}),(ee=T.querySelector("#pp-confirm"))==null||ee.addEventListener("click",()=>{T.remove(),B(N)})}q(),document.body.appendChild(T)}async function le(k,L){const B=(m["gcCardsFull_"+p]||[]).find(D=>D.id===k),T=(B==null?void 0:B._gcDef)||(m.gcDefs||[]).find(D=>{var U;return D.name===L||((U=D.name)==null?void 0:U.toLowerCase().trim())===(L==null?void 0:L.toLowerCase().trim())}),N=[...m["usedGc_"+p]||[],k],q={type:L,by:p,seq:(m._gcAnimSeq||0)+1};R.add(q.seq),C(L,p,async()=>{if(T!=null&&T.effect_type&&T.effect_type!=="CUSTOM"){const U=G[T.effect_type];if(U){const ee={...m};U(T.effect_params||{},ee,async oe=>{oe["usedGc_"+p]=N,oe._lastGC=q,oe._gcAnimSeq=q.seq,await I(oe)});return}}const D={...m};switch(L){case"Remplacement+":D.maxSubs=(D.maxSubs||3)+1,D.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const U=u+"Score";D[U]>0&&(D[U]--,D.log.push({text:"🚫 But annulé",type:"info"}));break}}D["usedGc_"+p]=N,D._lastGC=q,D._gcAnimSeq=q.seq,await I(D)})}function ce(k,L){const M="usedCardIds_"+k,B=new Set(m[M]||[]);L.forEach(T=>B.add(T)),m[M]=[...B]}function j(){for(const k of["p1","p2"]){const L=new Set(m["usedCardIds_"+k]||[]),M=m[k+"Team"];if(M)for(const B of["GK","DEF","MIL","ATT"])(M[B]||[]).forEach(T=>{T.used=L.has(T.cardId)})}}function H(){var so,lo,co,po,uo,fo;if(m.phase==="reveal")return pe();if(m.phase==="midfield")return fe();if(m.phase==="finished")return Ge();const k=m[p+"Team"],L=m[u+"Team"];j();const M=m[p+"Score"],B=m[u+"Score"],T=m[p+"Name"],N=m[u+"Name"],q=m.phase===p+"-attack",D=m.phase===p+"-defense",U=Array.isArray(m["selected_"+p])?m["selected_"+p]:[],ee=U.map(J=>J.cardId),oe=window.innerWidth>=700,ie=m[p+"Subs"]||[],te=m["usedSubIds_"+p]||[],ae=ie.filter(J=>!te.includes(J.cardId)),de=m["gcCardsFull_"+p]||[],we=m["usedGc_"+p]||[],ue=de.filter(J=>!we.includes(J.id)),_e=m.boostOwner===p&&!m.boostUsed,ke=[...k.MIL||[],...k.ATT||[]].filter(J=>!J.used),ne=[...L.MIL||[],...L.ATT||[]].filter(J=>!J.used),Se=!be(L),Re=ke.length===0&&ne.length===0&&!Se,Ae=(k.DEF||[]).filter(J=>!J.used),Xe=(k.GK||[]).filter(J=>!J.used);let He=[];q&&ke.length===0&&(Se?(He=Ae.map(J=>J.cardId),Ae.length===0&&(He=He.concat(Xe.map(J=>J.cardId)))):Re&&(He=[...Ae,...Xe].map(J=>J.cardId)));function rt(J,he,Ce){var je,xt;const Ie=J._gcDef,Ft=(Ie==null?void 0:Ie.name)||J.gc_type,lt=(Ie==null?void 0:Ie.effect)||((je=Me[J.gc_type])==null?void 0:je.desc)||"",Pe=Ie!=null&&Ie.image_url?`/icons/${Ie.image_url}`:null,Oe=((xt=Me[J.gc_type])==null?void 0:xt.icon)||"⚡";return`<div class="pvp-gc-mini" data-gc-id="${J.id}" data-gc-type="${J.gc_type}" style="flex-shrink:0;cursor:pointer">
        ${nt(Ft,Pe,Oe,lt,{width:he})}
      </div>`}function Vt(J,he){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${J}px;height:${he}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(he*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(he*.2)}px">⚡</div>
        <div style="font-size:${Math.round(he*.09)}px;color:#000;font-weight:900">+${m.boostValue}</div>
      </div>`}const Fe=(J,he)=>he?Vt(95,162):rt(J,95),Je=(J,he)=>he?Vt(68,116):rt(J,68),Ue=oe?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",gt=q?We(p)?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${U.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ue};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:D?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${U.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${N}</div>`,at=q&&!We(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':q||D?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${U.length}/3 sélectionné(s)</div>`:"",qt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${oe?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ae.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ae.map(J=>`<div class="pvp-sub-btn" data-sub-id="${J.cardId}" style="cursor:pointer;flex-shrink:0">${kt(J,oe?76:44,oe?100:58)}</div>`).join("")}
    </div>`,bt=q?"attack":D?"defense":"idle",Lt=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${Ut(k,m[p+"Formation"],bt,ee,oe?1300:zt(),oe?600:Ot(),He)}
      </div>
    </div>`,st=m[p+"Team"],xn=(()=>{var he,Ce,Ie,Ft,lt;if(D&&((he=m.pendingAttack)!=null&&he.players)){const Pe=m.pendingAttack;let Oe="";if(U.length>0){const je=U.map(Qe=>{const Yt=(st[Qe._role]||[]).find(ji=>ji.cardId===Qe.cardId)||Qe,Wt=st[Qe._role]||[],ci=Wt.findIndex(ji=>ji.cardId===Qe.cardId),Ci=dt(Wt.length),Xt=ci>=0?Ci[ci]:Yt._col??1;return{...Yt,_line:Qe._role,_col:Xt}}),xt=li(je,((Ce=m.modifiers)==null?void 0:Ce[p])||{},m[p+"Formation"]);Oe=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${U.length}/3)</div>
            <div style="display:flex;justify-content:center">${et(je.map(Qe=>({...Qe,used:!1})),"#3a7bd5",xt.total,"defense",m[p+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${N} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${et((Pe.players||[]).map(je=>({...je,used:!1})),"#ff6b6b",Pe.total,"attack",m[u+"Formation"])}</div>
          ${Oe}
        </div>`}if(q&&((Ie=m.pendingAttack)!=null&&Ie.players)){const Pe=m.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${et((Pe.players||[]).map(Oe=>({...Oe,used:!1})),"#00ff88",Pe.total,"attack",m[p+"Formation"])}</div>
        </div>`}if(q&&!((Ft=m.pendingAttack)!=null&&Ft.players)&&U.length>0){const Pe=U.map(je=>{const xt=(st[je._role]||[]).find(Xt=>Xt.cardId===je.cardId)||je,Qe=["GK","DEF"].includes(je._role),Yt=st[je._role]||[],Wt=Yt.findIndex(Xt=>Xt.cardId===je.cardId),ci=dt(Yt.length),Ci=Wt>=0?ci[Wt]:xt._col??1;return{...xt,_line:je._role,_col:Ci,...Qe?{note_a:Math.max(1,Number(xt.note_a)||0)}:{}}}),Oe=si(Pe,((lt=m.modifiers)==null?void 0:lt[p])||{},m[p+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${U.length}/3)</div>
          <div style="display:flex;justify-content:center">${et(Pe.map(je=>({...je,used:!1})),"#FFD700",Oe.total,"attack",m[p+"Formation"])}</div>
        </div>`}const J=(m.log||[]).slice(-1)[0];return J?'<div style="padding:2px 4px">'+an(J)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),ao=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${T}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${M} – ${B}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${N}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${xn}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(m.log||[]).length})
      </button>`;ct(t),t.style.overflow="hidden",oe?t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${ao}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${qt}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Lt}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${gt}${at}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ue.map(J=>Fe(J,!1)).join("")}
            ${_e?Fe(null,!0):""}
          </div>
        </div>
      </div>`:t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${ao}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ut(k,m[p+"Formation"],bt,ee,zt(),Ot(),He)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ue.map(J=>Je(J,!1)).join("")}
            ${_e?Je(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${q&&ae.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${q&&ae.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${q&&ae.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${q&&ae.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${ae.length}</div>
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
          <div>${gt}${at}</div>
        </div>
      </div>`;function Dt(){const J=t.querySelector(".match-screen");if(!J)return;const he=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);J.style.height=he+"px",J.style.minHeight=he+"px",J.style.maxHeight=he+"px",J.style.overflow="hidden";const Ce=t.querySelector("#mobile-action-bar"),Ie=t.querySelector("#mobile-play-area");Ce&&Ie&&(Ie.style.paddingBottom=Ce.offsetHeight+"px")}if(Dt(),setTimeout(Dt,120),setTimeout(Dt,400),A||(A=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Dt),window.visualViewport.addEventListener("scroll",Dt)),window.addEventListener("resize",Dt)),function(){const he=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!he)return;const Ce=he.closest("#match-terrain-wrap");Ce&&(Ce.style.cssText="position:relative;width:100%;height:100%;padding:0"),he.removeAttribute("width"),he.removeAttribute("height"),he.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",he.setAttribute("preserveAspectRatio","xMidYMid meet")}(),m._pvpResizeBound||(m._pvpResizeBound=!0,window.addEventListener("resize",()=>{const J=t.querySelector(".terrain-wrapper svg");if(J){const he=J.closest("#match-terrain-wrap");he&&(he.style.cssText="position:relative;width:100%;height:100%;padding:0"),J.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t.querySelectorAll(".match-slot-hit").forEach(J=>{J.addEventListener("click",()=>{if(!q&&!D)return;const he=J.dataset.cardId,Ce=J.dataset.role,Ie=(k[Ce]||[]).find(Oe=>Oe.cardId===he);if(!Ie||Ie.used)return;const Ft=He.includes(he);if(q&&!["MIL","ATT"].includes(Ce)&&!Ft)return;Array.isArray(m["selected_"+p])||(m["selected_"+p]=[]);const lt=m["selected_"+p],Pe=lt.findIndex(Oe=>Oe.cardId===he);Pe>-1?lt.splice(Pe,1):lt.length<3&&lt.push({...Ie,_role:Ce}),H()})}),t.querySelectorAll(".match-used-hit").forEach(J=>{J.addEventListener("click",()=>X(J.dataset.cardId))}),t.querySelectorAll(".pvp-sub-btn").forEach(J=>{J.addEventListener("click",()=>X())}),(so=t.querySelector("#pvp-sub-open"))==null||so.addEventListener("click",()=>X()),t.querySelectorAll(".pvp-gc-mini").forEach(J=>{q?J.addEventListener("click",()=>V(J.dataset.gcId,J.dataset.gcType)):(J.style.opacity="0.35",J.style.cursor="default",J.addEventListener("click",()=>It("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(lo=t.querySelector("#pvp-boost-card"))==null||lo.addEventListener("click",()=>Q()),(co=t.querySelector("#pvp-action"))==null||co.addEventListener("click",J=>{q?J.currentTarget.dataset.pass==="1"||!We(p)?W():$e():D&&Ee()}),(po=t.querySelector("#pvp-quit"))==null||po.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&_()}),(uo=t.querySelector("#pvp-view-opp"))==null||uo.addEventListener("click",()=>F()),(fo=t.querySelector("#pvp-toggle-history"))==null||fo.addEventListener("click",()=>z()),$&&(clearInterval($),$=null),Ke(),(q||D)&&!S){let J=30,he=!1;const Ce=()=>document.getElementById("pvp-timer"),Ie=()=>{Ce()&&(Ce().textContent=J+"s",Ce().style.color=he?"#ff4444":"#fff")};Ie(),$=setInterval(()=>{J--,J<0?he?(clearInterval($),$=null,Ke(),q&&!We(p)?W():_()):(he=!0,J=15,Ie(),Po("/sounds/timer-urgent.mp3",.6)):Ie()},1e3)}}function pe(){ct(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${_r(m[u+"Team"],m[u+"Formation"],null,m[u+"Name"]||"Adversaire")}
    </div>`;const k=t.querySelector("svg"),L=k==null?void 0:k.closest("#match-terrain-wrap");L&&(L.style.cssText="position:relative;width:100%;height:100%;padding:0"),k&&(k.removeAttribute("width"),k.removeAttribute("height"),k.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",k.setAttribute("preserveAspectRatio","xMidYMid meet")),p==="p1"&&setTimeout(async()=>{await I({phase:"midfield"})},5e3)}let me=!1;function fe(){if(me)return;const k=m[p+"Team"].MIL||[],L=m[u+"Team"].MIL||[],M=vt(k)+wt(k),B=vt(L)+wt(L),T=M>=B;ct(t),t.innerHTML=`
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
      ${_i(k,m[p+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_i(L,m[u+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const N=(ae,de)=>t.querySelectorAll(ae).forEach((we,ue)=>{setTimeout(()=>{we.style.opacity="1",we.style.transform="translateY(0) scale(1)"},de+ue*90)});N(".duel-card-me",150),N(".duel-card-opp",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((ae,de)=>setTimeout(()=>{ae.style.opacity="1"},de*70)),900),setTimeout(()=>{const ae=t.querySelector("#pvp-vs");ae&&(ae.style.opacity="1",ae.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(de=>de.style.opacity="1")},1250);function q(ae,de,we){const ue=document.getElementById(ae);if(!ue)return;const _e=performance.now(),ke=ne=>{const Se=Math.min(1,(ne-_e)/we);ue.textContent=Math.round(de*(1-Math.pow(1-Se,3))),Se<1?requestAnimationFrame(ke):ue.textContent=de};requestAnimationFrame(ke)}setTimeout(()=>{q("pvp-score-me",M,800),q("pvp-score-opp",B,800)},1500);const D=m.p1Team.MIL||[],U=m.p2Team.MIL||[],ee=vt(D)+wt(D),oe=vt(U)+wt(U),ie=ee>=oe?"p1":"p2";let te=m.boostValue;te==null&&(te=nn(),m.boostValue=te,m.boostOwner=ie,m.boostUsed=!1),me=!0,setTimeout(()=>{const ae=t.querySelector("#duel-row-"+(T?"me":"opp")),de=t.querySelector("#duel-row-"+(T?"opp":"me")),we=document.getElementById("pvp-score-me"),ue=document.getElementById("pvp-score-opp"),_e=T?we:ue,ke=T?ue:we;_e&&(_e.style.fontSize="80px",_e.style.color=T?"#FFD700":"#ff6b6b",_e.style.animation="duelPulse .5s ease"+(T?",duelGlow 1.5s ease infinite .5s":"")),ke&&(ke.style.opacity="0.25"),setTimeout(()=>{ae&&(ae.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ae.style.zIndex="5"),setTimeout(()=>{const ne=document.getElementById("duel-shock");ne&&(ne.style.animation="shockwave .5s ease-out forwards"),de&&(de.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ae;const ne=document.getElementById("pvp-duel-finale");if(!ne)return;const Se=m.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+te+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ne.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(T?"⚽ "+m[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+m[u+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Se+Re,ne.style.transition="opacity .45s ease",ne.style.opacity="1",ne.style.pointerEvents="auto",(Ae=document.getElementById("pvp-start-match"))==null||Ae.addEventListener("click",async()=>{const Xe=ie;await I({phase:Xe+"-attack",attacker:Xe,round:1,boostValue:te,boostUsed:!1,boostOwner:Xe})})},600)},700)},2800)}function C(k,L,M){var de,we;const B=(m.gcDefs||[]).find(ue=>{var _e;return ue.name===k||((_e=ue.name)==null?void 0:_e.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),T={purple:"#b06ce0",light_blue:"#00d4ef"}[B==null?void 0:B.color]||"#b06ce0",N=(B==null?void 0:B.name)||k,q=(B==null?void 0:B.effect)||((de=Me[k])==null?void 0:de.desc)||"",D=B!=null&&B.image_url?`/icons/${B.image_url}`:null,U=((we=Me[k])==null?void 0:we.icon)||"⚡",oe=L===p?"Vous":m[L+"Name"]||"Adversaire",ie=document.createElement("div");ie.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",ie.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{filter:drop-shadow(0 0 20px ${T}66)}50%{filter:drop-shadow(0 0 40px ${T}cc)}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${T};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${oe} joue une carte</div>
      <div style="animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        ${nt(N,D,U,q,{width:200})}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(ie);let te=!1;const ae=()=>{te||(te=!0,ie.remove(),setTimeout(()=>M&&M(),50))};ie.addEventListener("click",ae),setTimeout(ae,3e3)}function V(k,L){var oe,ie,te,ae;const B=(m["gcCardsFull_"+p]||[]).find(de=>de.id===k),T=B==null?void 0:B._gcDef,N=(T==null?void 0:T.name)||L,q=(T==null?void 0:T.effect)||((oe=Me[L])==null?void 0:oe.desc)||"Carte spéciale.",D=T!=null&&T.image_url?`/icons/${T.image_url}`:null,U=((ie=Me[L])==null?void 0:ie.icon)||"⚡",ee=document.createElement("div");ee.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",ee.innerHTML=`
      ${nt(N,D,U,q,{width:190})}
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(ee),(te=ee.querySelector("#pvp-gc-back"))==null||te.addEventListener("click",()=>ee.remove()),(ae=ee.querySelector("#pvp-gc-use"))==null||ae.addEventListener("click",()=>{ee.remove(),le(k,L)})}function Q(){var B;const k=m[p+"Team"],L=Object.entries(k).flatMap(([T,N])=>(N||[]).filter(q=>!q.used).map(q=>({...q,_line:T})));if(!L.length)return;const M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",M.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${m.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${L.map(T=>{const N={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[T._line]||"#555",q=Ne(T,T._line)+(T.boost||0);return`<div class="bp-item" data-cid="${T.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${N};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${T.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${q}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(M),(B=M.querySelector("#bp-close"))==null||B.addEventListener("click",()=>M.remove()),M.querySelectorAll(".bp-item").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.cid,q=L.find(U=>U.cardId===N);if(!q)return;const D=(k[q._line]||[]).find(U=>U.cardId===N);D&&(D.boost=(D.boost||0)+m.boostValue),M.remove(),await I({[p+"Team"]:k,boostUsed:!0})})})}function X(k=null){var ae,de;if(!(m.phase===p+"-attack")){g("Remplacement uniquement avant votre attaque","warning");return}const M=m[p+"Team"],B=m["usedSubIds_"+p]||[],T=m.maxSubs||3;if(B.length>=T){g(`Maximum ${T} remplacements atteint`,"warning");return}const N=Object.entries(M).flatMap(([we,ue])=>(ue||[]).filter(_e=>_e.used).map(_e=>({..._e,_line:we}))),q=(m[p+"Subs"]||[]).filter(we=>!B.includes(we.cardId));if(!N.length){g("Aucun joueur utilisé à remplacer","warning");return}if(!q.length){g("Aucun remplaçant disponible","warning");return}let D=Math.max(0,N.findIndex(we=>we.cardId===k));const U=((ae=N[D])==null?void 0:ae._line)||((de=N[D])==null?void 0:de.job);let ee=Math.max(0,q.findIndex(we=>we.job===U)),oe=!1;const ie=document.createElement("div");ie.id="pvp-sub-overlay",ie.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function te(){var Re,Ae,Xe,He,rt,Vt;const we=N[D],ue=q[ee],_e=Math.min(130,Math.round((window.innerWidth-90)/2)),ke=Math.round(_e*1.35),ne=Fe=>`background:rgba(255,255,255,0.12);border:none;color:${Fe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Fe?"default":"pointer"};flex-shrink:0`;ie.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${B.length}/${T})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ne(ee===0)}" ${ee===0?"disabled":""}>▲</button>
          <div>${ue?kt({...ue,used:!1,boost:0},_e,ke):"<div>—</div>"}</div>
          <button id="pin-down" style="${ne(ee>=q.length-1)}" ${ee>=q.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${ee+1}/${q.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ne(D===0)}" ${D===0?"disabled":""}>▲</button>
          <div>${we?kt({...we,used:!1,boost:0},_e,ke):"<div>—</div>"}</div>
          <button id="pout-down" style="${ne(D>=N.length-1)}" ${D>=N.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${D+1}/${N.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Re=ie.querySelector("#psub-close"))==null||Re.addEventListener("click",()=>ie.remove()),(Ae=ie.querySelector("#pout-up"))==null||Ae.addEventListener("click",()=>{D>0&&(D--,te())}),(Xe=ie.querySelector("#pout-down"))==null||Xe.addEventListener("click",()=>{D<N.length-1&&(D++,te())}),(He=ie.querySelector("#pin-up"))==null||He.addEventListener("click",()=>{ee>0&&(ee--,te())}),(rt=ie.querySelector("#pin-down"))==null||rt.addEventListener("click",()=>{ee<q.length-1&&(ee++,te())});const Se=(Fe,Je,Ue,gt)=>{const at=ie.querySelector("#"+Fe);if(!at)return;let qt=0;at.addEventListener("touchstart",bt=>{qt=bt.touches[0].clientY},{passive:!0}),at.addEventListener("touchend",bt=>{const Lt=bt.changedTouches[0].clientY-qt;if(Math.abs(Lt)<30)return;const st=Je();Lt<0&&st<gt-1?(Ue(st+1),te()):Lt>0&&st>0&&(Ue(st-1),te())},{passive:!0})};Se("pin-panel",()=>ee,Fe=>ee=Fe,q.length),Se("pout-panel",()=>D,Fe=>D=Fe,N.length),(Vt=ie.querySelector("#psub-confirm"))==null||Vt.addEventListener("click",async Fe=>{if(Fe.preventDefault(),Fe.stopPropagation(),oe)return;oe=!0;const Je=N[D],Ue=q[ee];if(!Je||!Ue)return;const gt=Je._line,at=(M[gt]||[]).findIndex(Lt=>Lt.cardId===Je.cardId);if(at===-1){g("Erreur : joueur introuvable","error"),ie.remove();return}const qt={...Ue,_line:gt,position:Je.position,used:!1,boost:0};M[gt].splice(at,1,qt);const bt=[...B,Ue.cardId];ie.remove(),re(Je,Ue,async()=>{await I({[p+"Team"]:M,[u+"Team"]:m[u+"Team"],["usedSubIds_"+p]:bt})})})}document.body.appendChild(ie),te()}function re(k,L,M){const B={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const N=(U,ee,oe)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${ee};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${oe}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${B[U.job]||"#555"};border:3px solid ${ee};position:relative;overflow:hidden;margin:0 auto">
        ${Ct(U)?`<img src="${Ct(U)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(U.name||"").slice(0,12)}</div>
    </div>`;T.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${N(L,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${N(k,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(T);let q=!1;const D=()=>{q||(q=!0,T.remove(),setTimeout(()=>M(),50))};T.addEventListener("click",D),setTimeout(D,2200)}function F(){var L;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",k.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${m[u+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Ai(m[u+"Team"],m[u+"Formation"],null,[],zt(),Ot())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(k),(L=k.querySelector("#pvp-opp-close"))==null||L.addEventListener("click",()=>k.remove())}function z(){var M;const k=m.log||[],L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",L.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${k.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...k].reverse().map(B=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${B.type==="goal"?"#FFD700":B.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${B.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(L),(M=L.querySelector("#pvp-hist-close"))==null||M.addEventListener("click",()=>L.remove())}async function W(){if(m.phase!==p+"-attack")return;const k=p==="p1"?"p2":"p1",L=(m.round||0)+1,M=[...m.log||[]];M.push({type:"info",text:`⏭️ ${m[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const B=Le(m),T=We(k),N=B||!T?"finished":k+"-attack";await I({["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},pendingAttack:null,phase:N,attacker:k,round:L,log:M}),N==="finished"&&await De(m)}function Z(k){const L=(k.GK||[]).some(B=>!B.used),M=["DEF","MIL","ATT"].some(B=>(k[B]||[]).some(T=>!T.used));return L&&!M}function se(k){return(k.p1Score||0)!==(k.p2Score||0)?null:Z(k.p1Team)&&!be(k.p2Team)?{side:"p1",gk:(k.p1Team.GK||[]).find(L=>!L.used)}:Z(k.p2Team)&&!be(k.p1Team)?{side:"p2",gk:(k.p2Team.GK||[]).find(L=>!L.used)}:null}async function ge(){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(k);const L=(M,B)=>new Promise(T=>{k.innerHTML=`<div style="font-size:32px;font-weight:900;color:${B};letter-spacing:2px;animation:lcFade 1.4s ease both">${M}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(T,1400)});await L("⚽ DERNIER CORNER","#FFD700"),await L("🧤 LE GARDIEN MONTE !","#4fc3f7"),k.remove()}async function ye(k,L){const{side:M,gk:B}=k;if(!B)return;const T=M+"Score",N=(L[T]||0)+1;B.used=!0;const q=[...L.log||[]];q.push({type:"duel",isGoal:!0,homeScored:M===p,homePlayers:M==="p1"?[Pt(B)]:[],aiPlayers:M==="p2"?[Pt(B)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${L[M+"Name"]} marque !`});const D=(L.round||0)+1,U=M==="p1"?"p2":"p1",ee={...L,[T]:N},oe=Le(ee);P.add(D),await ge();const ie=M===p?N:L[p+"Score"]||0,te=M===p?L[u+"Score"]||0:N;tt([Pt(B)],ie,te,M===p,async()=>{await I({[T]:N,log:q,round:D,pendingAttack:null,phase:oe?"finished":U+"-attack",attacker:U,["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}}}),oe&&await De({...m,[T]:N})})}async function $e(){const k=m[p+"Team"],L=!["GK","DEF","MIL","ATT"].some(N=>(m[u+"Team"][N]||[]).some(q=>!q.used)),M=(m["selected_"+p]||[]).map(N=>{const q=(k[N._role]||[]).find(de=>de.cardId===N.cardId)||N,D=["GK","DEF"].includes(N._role),U=k[N._role]||[],ee=U.findIndex(de=>de.cardId===N.cardId),oe=dt(U.length),ie=ee>=0?oe[ee]:q._col??1,te=m.stadiumDef||m.homeStadiumDef||null,ae=q.stadiumBonus||te&&(te.club_id&&String(q.club_id)===String(te.club_id)||te.country_code&&q.country_code===te.country_code)||!1;return{...q,_line:N._role,_col:ie,stadiumBonus:ae,...D?{note_a:Math.max(1,Number(q.note_a)||0)}:{}}});if(!M.length)return;const B=si(M,m.modifiers[p]||{},m[p+"Formation"]);ce(p,M.map(N=>N.cardId)),M.forEach(N=>{const q=(k[N._role]||[]).find(D=>D.cardId===N.cardId);q&&(q.used=!0)}),m["selected_"+p]=[],H();const T=[...m.log||[]];if(L){if(M.length===1&&(M[0]._line==="GK"||M[0].job==="GK")&&(m.p1Score||0)===(m.p2Score||0)){await ye({side:p,gk:M[0]},{...m,[p+"Team"]:k,log:T});return}const q=(m[p+"Score"]||0)+1,D=M.map(te=>Pt(te));T.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:D,homeTotal:B.total,aiTotal:0});const U=(m.round||0)+1,ee=p==="p1"?"p2":"p1",oe={...m,[p+"Team"]:k,[p+"Score"]:q},ie=Le(oe);P.add(U),tt(D,q,m[u+"Score"]||0,!0,async()=>{await I({[p+"Team"]:k,[p+"Score"]:q,["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},pendingAttack:null,phase:ie?"finished":ee+"-attack",attacker:ee,round:U,log:T}),ie&&await De({...m,[p+"Score"]:q})});return}T.push({type:"pending",text:`⚔️ ${m[p+"Name"]} attaque (${B.total})`}),await I({[p+"Team"]:k,[u+"Team"]:m[u+"Team"],pendingAttack:{...B,players:M,side:p},["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},phase:u+"-defense",log:T})}async function Ee(){const k=m[p+"Team"],L=(m["selected_"+p]||[]).map(ue=>{const _e=(k[ue._role]||[]).find(Ae=>Ae.cardId===ue.cardId)||ue,ke=k[ue._role]||[],ne=ke.findIndex(Ae=>Ae.cardId===ue.cardId),Se=dt(ke.length),Re=ne>=0?Se[ne]:_e._col??1;return{..._e,_line:ue._role,_col:Re}}),M=li(L,m.modifiers[p]||{},m[p+"Formation"]);ce(p,L.map(ue=>ue.cardId)),L.forEach(ue=>{const _e=(k[ue._role]||[]).find(ke=>ke.cardId===ue.cardId);_e&&(_e.used=!0)}),m["selected_"+p]=[],H();const B=to(m.pendingAttack.total,M.total,m.modifiers[p]||{}),T=m.pendingAttack.side,N=B==="attack"||(B==null?void 0:B.goal),q=T==="p1"?"p2":"p1",D=(m.round||0)+1,U=(m.pendingAttack.players||[]).map(ue=>Pt(ue)),ee=[...m.log||[]];ee.push({type:"duel",isGoal:N,homeScored:N&&T===p,text:N?`⚽ BUT de ${m[T+"Name"]} ! (${m.pendingAttack.total} vs ${M.total})`:`✋ Attaque stoppée (${m.pendingAttack.total} vs ${M.total})`,homePlayers:U,aiPlayers:L.map(ue=>Pt(ue)),homeTotal:m.pendingAttack.total,aiTotal:M.total});const oe=N?(m[T+"Score"]||0)+1:m[T+"Score"]||0,ie={...m,[p+"Team"]:k,[T+"Score"]:oe},te=Le(ie),ae=te?"finished":q+"-attack",de=!te&&!N?se(ie):null,we=async()=>{if(de){await ye(de,ie);return}await I({[p+"Team"]:k,[u+"Team"]:m[u+"Team"],[T+"Score"]:oe,["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},pendingAttack:null,phase:ae,attacker:q,round:D,log:ee}),(ae==="finished"||te)&&await De({...m,[T+"Score"]:oe})};if(N){const ue=T===p,_e=ue?oe:m[p+"Score"]||0,ke=ue?m[u+"Score"]||0:oe;P.add(D),tt(U,_e,ke,ue,we)}else await we()}function xe(k){return["MIL","ATT"].some(L=>(k[L]||[]).some(M=>!M.used))}function be(k){return["GK","DEF","MIL","ATT"].some(L=>(k[L]||[]).some(M=>!M.used))}function Be(k){return be(k)&&!xe(k)}function We(k){const L=m[k+"Team"],M=m[(k==="p1"?"p2":"p1")+"Team"];return!!(xe(L)||Be(L)&&!be(M)||Be(L)&&!xe(M)&&be(M))}function Le(k){return!be(k.p1Team)&&!be(k.p2Team)}function qe(k){const L=k.p1Score||0,M=k.p2Score||0;return L===M?null:L>M?h.home_id:h.away_id}async function De(k){Rt(),Ke();try{const L=qe(k),M=L?h.home_id===L?h.away_id:h.home_id:null,B=k.p1Score||0,T=k.p2Score||0,{data:N,error:q}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:L,p_home_score:B,p_away_score:T,p_forfeit:!1});if(q&&console.error("[PvP] finish_pvp_match:",q),l)try{await v.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(D){console.error("[PvP] check_and_finish_mini_league:",D)}L&&M&&Or(L,M).catch(()=>{});try{const{data:D}=await v.rpc("apply_match_rewards",{p_match_id:i});D!=null&&D.success&&!(D!=null&&D.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(D){console.error("[PvP] apply_match_rewards:",D)}if(typeof d=="function")try{await d({homeScore:B,awayScore:T,winnerId:L,homeId:h.home_id,awayId:h.away_id,matchId:i})}catch(D){console.error("[PvP] onMatchEnd:",D)}}catch(L){console.error("[PvP] finishMatch:",L)}}function Ge(){var T;const k=m[p+"Score"],L=m[u+"Score"],M=k>L,B=k===L;ct(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${M?"🏆":B?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${M?"Victoire !":B?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${k} - ${L}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(T=document.getElementById("pvp-home"))==null||T.addEventListener("click",()=>{try{v.removeChannel(Y)}catch{}Ve(t),l?b("mini-league",{openLeagueId:l}):b("home")})}H()}async function Vi(t,e,i=!1){var s,c;const{state:o,navigate:r,toast:n}=e,a=i&&((c=(s=e==null?void 0:e.state)==null?void 0:s.params)==null?void 0:c.rankedData)||null;await zi(t,e,i?"ranked":"random",async({deckId:d,formation:l,starters:f,subsRaw:x,gcCardsEnriched:b,gcDefs:g,stadiumDef:p})=>{ct(t);const u=async y=>{await Kr(t,e,d,l,f,x,y||[],g,p,i,a)};if(!(b!=null&&b.length)){await u([]);return}Si(t,b,u)})}async function Ur(t,e,i){return Hr(t,e,i)}async function Kr(t,e,i,o,r,n,a=[],s=[],c=null,d=!1,l=null){var O,Y;const{state:f,navigate:x,toast:b}=e,g=(l==null?void 0:l.mmr)??((O=f.profile)==null?void 0:O.mmr)??1e3,p=d?Ei(g):null,u=d?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",y=d?(p==null?void 0:p.color)||"#D4A017":"#FFD700";let w=!1,h=null,E=null;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${u};color:#fff;padding:32px;text-align:center;gap:20px">
      ${d?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${d?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${d?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(g)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${y};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const m=async()=>{w=!0,h&&(h.unsubscribe(),h=null),E&&(clearInterval(E),E=null);try{await v.rpc("cancel_matchmaking",{p_user_id:f.profile.id})}catch(I){console.error("[Matchmaking] cancel error:",I)}};(Y=document.getElementById("cancel-mm"))==null||Y.addEventListener("click",async()=>{await m(),Ve(t),x("home")});const S=async(I,_)=>{w||(w=!0,h&&(h.unsubscribe(),h=null),E&&(clearInterval(E),E=null),await jt(t,e,I,_,{myGC:a,gcDefs:s,stadiumDef:c,isRanked:d,rankedData:l,onMatchEnd:d?Vr:null}))},$=f.user.id,{data:A,error:P}=d?await v.rpc("try_matchmake_ranked",{p_user_id:$,p_deck_id:i,p_mmr:g,p_range:200}):await v.rpc("try_matchmake",{p_user_id:$,p_deck_id:i});if(P||!(A!=null&&A.success)){console.error("[Matchmaking] try_matchmake error:",P||A),b("Erreur de matchmaking","error"),Ve(t),x("home");return}if(A.matched){await S(A.match_id,!1);return}const R=async()=>{if(w)return;const{data:I}=await v.from("matchmaking_queue").select("status, match_id").eq("user_id",$).maybeSingle();(I==null?void 0:I.status)==="matched"&&I.match_id&&await S(I.match_id,!0)};h=v.channel(`mm_${$}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${$}`},I=>{const _=I.new;_.status==="matched"&&_.match_id&&S(_.match_id,!0)}).subscribe(),E=setInterval(R,3e3),d?setTimeout(async()=>{if(!w){w=!0,h&&(h.unsubscribe(),h=null),E&&(clearInterval(E),E=null);try{await v.rpc("cancel_matchmaking",{p_user_id:f.profile.id})}catch(I){console.error("[Matchmaking] cancel error:",I)}b("Aucun adversaire trouvé — match contre une IA calibrée sur votre niveau","info",4e3),x("match",{matchMode:"ranked_ai",rankedData:l,presetSetup:{deckId:i,formation:o,starters:r,subsRaw:n,gcCardsEnriched:a,gcDefs:s,stadiumDef:c}})}},2e4):setTimeout(()=>{w||m()},12e4)}async function Vr(t,e){const{state:i,toast:o}=e,{winnerId:r,homeId:n,awayId:a,homeScore:s,awayScore:c,matchId:d}=t,l=i.user.id,f=n===l,x=r===l,{data:b}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",l).single(),{data:g}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",f?a:n).single();if(b&&g){const p=Bo(b.mmr,b.mmr_rd,b.mmr_v,g.mmr,g.mmr_rd,x?1:0);await v.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:x?v.sql`mmr_wins + 1`:void 0,mmr_losses:x?void 0:v.sql`mmr_losses + 1`}).eq("id",l),o(x?`+MMR ↑ ${Math.round(p.mmr-b.mmr)}`:`-MMR ↓ ${Math.round(b.mmr-p.mmr)}`,x?"success":"error",4e3)}}const Yr=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Vi,resumePvpMatch:Ur},Symbol.toStringTag,{value:"Module"}));async function Wr(t,e){const{state:i,navigate:o,toast:r}=e,n=i.params||{},a=n.friendId||null,s=n.friendName||"Ami",c=!!n.isAccepting;await zi(t,e,"friend",async({deckId:d,formation:l,starters:f,subsRaw:x,gcCardsEnriched:b,gcDefs:g,stadiumDef:p})=>{ct(t);const u=async y=>{const w=y||[];c?await Jr(t,e,d,w,g,p):await Xr(t,e,d,w,g,p,a,s)};if(!(b!=null&&b.length)){await u([]);return}Si(t,b,u)})}async function Xr(t,e,i,o,r,n,a,s){var w;const{state:c,navigate:d,toast:l}=e,f=c.user.id,{data:x,error:b}=await v.from("friend_match_invites").insert({inviter_id:f,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(b||!x){console.error("[Friend] Erreur création invitation:",b),l("Impossible de créer l'invitation","error"),d("home");return}t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let g=!1,p=null;const u=async()=>{p&&(p.unsubscribe(),p=null)};(w=document.getElementById("cancel-friend"))==null||w.addEventListener("click",async()=>{await u(),await v.from("friend_match_invites").update({status:"declined"}).eq("id",x.id),Ve(t),d("home")}),p=v.channel(`friend_invite_${x.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${x.id}`},async({new:h})=>{g||h.status!=="accepted"||!h.match_id||(g=!0,await u(),await jt(t,e,h.match_id,!0,{myGC:o,gcDefs:r,stadiumDef:n}))}).subscribe();const y=setInterval(async()=>{if(g)return;const{data:h}=await v.from("friend_match_invites").select("status, match_id").eq("id",x.id).single();(h==null?void 0:h.status)==="accepted"&&h.match_id&&(g=!0,clearInterval(y),await u(),await jt(t,e,h.match_id,!0,{myGC:o,gcDefs:r,stadiumDef:n}))},3e3);setTimeout(async()=>{g||(clearInterval(y),await u(),l("Invitation expirée","info"),d("home"))},12e4)}async function Jr(t,e,i,o,r,n){const{state:a,navigate:s,toast:c}=e,d=a.user.id,{data:l}=await v.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",d).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){c("Aucune invitation en attente","error"),s("home");return}const{data:f,error:x}=await v.rpc("accept_friend_invite",{p_invite_id:l.id,p_invitee_deck_id:i});if(x||!(f!=null&&f.success)){console.error("[Friend] Erreur accept_friend_invite:",x||f),c((f==null?void 0:f.error)||"Impossible de rejoindre le match","error"),s("home");return}await jt(t,e,f.match_id,!1,{myGC:o,gcDefs:r,stadiumDef:n})}const pn="#1A6B3C",pt="#D4A017",Zt="var(--tile-bg)",ei="var(--tile-border)",St="var(--divider)",Ze="var(--tile-fg-on-page)",Tt="var(--tile-fg-dim)",it="var(--tile-fg-faint)",ii="var(--nav-fg,#fff)",un="rgba(255,255,255,0.62)",Qr="rgba(255,255,255,0.4)";async function Zr(t,e){var o;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(o=e.state.params)==null?void 0:o.openLeagueId;if(i){e.state.params.openLeagueId=null,await ft(t,e,i);return}await ot(t,e)}async function ot(t,e,i="waiting"){var h,E;const{state:o}=e,r=o.profile.id,{data:n}=await v.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",r),a=(n||[]).map(m=>m.league_id),s={};(n||[]).forEach(m=>{s[m.league_id]={amount:m.prize_amount,claimed:m.prize_claimed}});const{data:c,error:d}=await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),l=d?(await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:c||[],x=(a.length?await v.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],b=x.filter(m=>m.status==="waiting"&&!m.is_archived),g=x.filter(m=>m.status==="active"&&!m.is_archived),p=x.filter(m=>m.is_archived||m.status==="finished");let u=p;if(p.length){const{data:m}=await v.from("mini_league_matches").select("league_id").in("league_id",p.map($=>$.id)).or(`home_id.eq.${r},away_id.eq.${r}`).not("status","eq","bye"),S=new Set((m||[]).map($=>$.league_id));u=p.filter($=>S.has($.id))}const y=l.filter(m=>!a.includes(m.id)),w=[{key:"waiting",label:"🟡 En attente",count:b.length+y.length},{key:"active",label:"🟢 En cours",count:g.length},{key:"archived",label:"📁 Archivées",count:u.length}];t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${St};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${ii}">🏆 Mini League</div>
        <div style="font-size:12px;color:${un}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${ii}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${St}">
      ${w.map(m=>`<button class="ml-tab" data-tab="${m.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===m.key?pn:"transparent"};background:none;font-size:12px;font-weight:${i===m.key?"900":"600"};color:${i===m.key?"#4ade80":Qr};cursor:pointer">${m.label}${m.count?` (${m.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?ea(b,y,r):i==="active"?ta(g,r):ia(u,r,s)}
    </div>
  </div>`,(h=document.getElementById("ml-create-btn"))==null||h.addEventListener("click",()=>oa(t,e)),(E=document.getElementById("ml-refresh-list"))==null||E.addEventListener("click",()=>ot(t,e,i)),t.querySelectorAll(".ml-tab").forEach(m=>m.addEventListener("click",()=>ot(t,e,m.dataset.tab))),t.querySelectorAll("[data-league-id]").forEach(m=>m.addEventListener("click",()=>ft(t,e,m.dataset.leagueId))),t.querySelectorAll("[data-join]").forEach(m=>m.addEventListener("click",S=>{S.stopPropagation(),fn(t,e,m.dataset.join,m.dataset.type)})),t.querySelectorAll("[data-delete]").forEach(m=>m.addEventListener("click",S=>{S.stopPropagation(),Yi(t,e,m.dataset.delete,m.dataset.name,i)})),t.querySelectorAll("[data-claim-league]").forEach(m=>m.addEventListener("click",async S=>{S.stopPropagation(),m.disabled=!0,m.textContent="...";const{data:$,error:A}=await v.rpc("claim_mini_league_prize",{p_league_id:m.dataset.claimLeague,p_user_id:o.profile.id});if(A||!($!=null&&$.success)){e.toast(($==null?void 0:$.error)||"Erreur lors de la récupération","error"),ot(t,e,i);return}if(!$.already_claimed){o.profile.credits=(o.profile.credits||0)+$.prize;const P=document.getElementById("nav-credits");P&&(P.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),e.toast(`💰 +${$.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}ot(t,e,i)}))}function $i(t,e,i=!1,o=null){var c,d;const r=t.creator_id===e,n=t.pot||0,a=((d=(c=t.mini_league_members)==null?void 0:c[0])==null?void 0:d.count)||0,s=o&&o.amount>0&&!o.claimed;return`<div data-league-id="${t.id}" style="background:${Zt};border:1px solid ${s?"rgba(212,160,23,0.5)":ei};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${Ze}">${t.name}</div>
      ${r?`<button data-delete="${t.id}" data-name="${t.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${Tt};margin-bottom:${i||s?"10px":"0"}">
      <span>${t.type==="private"?"🔒":"🌐"} ${t.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${t.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${t.max_players}</span>
      <span>💰 ${(t.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${n>0?`<span style="color:${pt};font-weight:700">🏆 ${n.toLocaleString("fr")} cr.</span>`:""}
      ${t.current_day>0?`<span>📅 J${t.current_day}/${t.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${t.id}" data-type="${t.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(t.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
    ${s?`<button data-claim-league="${t.id}" class="btn btn-sm" style="width:100%;background:${pt};color:#141000;font-weight:900;border:none">💰 Récupérer ${o.amount.toLocaleString("fr")} cr.</button>`:""}
  </div>`}function ea(t,e,i){const o=[];return t.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${it};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),o.push(...t.map(r=>$i(r,i,!1)))),e.length&&(o.push(`<div style="font-size:11px;font-weight:700;color:${it};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),o.push(...e.map(r=>$i(r,i,!0)))),o.length?o.join(""):`<div style="text-align:center;padding:40px;color:${it}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function ta(t,e){return t.length?t.map(i=>$i(i,e)).join(""):`<div style="text-align:center;padding:40px;color:${it}">Aucune mini league en cours.</div>`}function ia(t,e,i={}){return t.length?t.map(o=>$i(o,e,!1,i[o.id])).join(""):`<div style="text-align:center;padding:40px;color:${it}">Aucune mini league archivée.</div>`}function oa(t,e){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(o=>o.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=o.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var g,p,u,y;const{toast:o}=e,r=document.getElementById("ml-name").value.trim(),n=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,s=((g=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:g.value)||"public",c=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",d=((y=(u=document.getElementById("ml-pwd"))==null?void 0:u.value)==null?void 0:y.trim())||null;if(!r){o("Le nom est obligatoire","error");return}if(a<100){o("Mise minimum : 100 crédits","error");return}if(s==="private"&&!d){o("Mot de passe requis","error");return}const{data:l,error:f}=await v.from("mini_leagues").insert({name:r,creator_id:e.state.profile.id,type:s,password:d,mode:c,max_players:n,entry_fee:a}).select().single();if(f){o("Erreur : "+f.message,"error");return}const{data:x}=await v.from("users").select("credits").eq("id",e.state.profile.id).single();if(((x==null?void 0:x.credits)||0)<a){await v.from("mini_leagues").delete().eq("id",l.id),o(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await v.from("users").update({credits:x.credits-a}).eq("id",e.state.profile.id),await v.from("mini_leagues").update({pot:a}).eq("id",l.id),await v.from("mini_league_members").insert({league_id:l.id,user_id:e.state.profile.id}),e.state.profile&&(e.state.profile.credits=x.credits-a);const b=document.getElementById("nav-credits");b&&(b.textContent=`💰 ${(e.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),o(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),ft(t,e,l.id)})}function na(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",e.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(e);const i=e.querySelector("#ml-pwd-input"),o=r=>{e.remove(),t(r)};setTimeout(()=>i==null?void 0:i.focus(),80),e.querySelector("#pwd-cancel").addEventListener("click",()=>o(null)),e.querySelector("#pwd-ok").addEventListener("click",()=>o(i.value.trim())),i.addEventListener("keydown",r=>{r.key==="Enter"&&o(i.value.trim())})})}async function fn(t,e,i,o){var f;const{toast:r,state:n}=e,a=n.profile.id;let s=null;if(o==="private"&&(s=await na(),s===null))return;const{data:c,error:d}=await v.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:s});if(d||!(c!=null&&c.success)){console.error("[MiniLeague] join_mini_league:",d||c),r((c==null?void 0:c.error)||"Erreur lors de l'inscription","error");return}if(typeof e.refreshProfile=="function")await e.refreshProfile();else{const{data:x}=await v.from("users").select("credits").eq("id",a).single();n.profile&&x&&(n.profile.credits=x.credits)}const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${(((f=n.profile)==null?void 0:f.credits)||0).toLocaleString("fr")}`),r("✅ Inscrit ! Pot mis à jour.","success"),ft(t,e,i)}async function ra(t,e,i,o){const{toast:r,state:n}=e,a=n.profile.id;if(!await new Promise(x=>{const b=document.createElement("div");b.className="modal-overlay",b.style.zIndex="2100",b.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${o.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(b),b.querySelector("#lv-ok").onclick=()=>{b.remove(),x(!0)},b.querySelector("#lv-cancel").onclick=()=>{b.remove(),x(!1)}}))return;const{data:c,error:d}=await v.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(d||!(c!=null&&c.success)){r((c==null?void 0:c.error)||"Erreur lors de la désinscription","error");return}const l=c.refund||o;n.profile&&(n.profile.credits=(n.profile.credits||0)+l);const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(n.profile.credits||0).toLocaleString("fr")}`),r(`↩️ Désinscrit · +${l.toLocaleString("fr")} cr. remboursés`,"success"),ot(t,e,"waiting")}async function Yi(t,e,i,o,r){const{toast:n}=e;if(!confirm(`Supprimer définitivement "${o}" et tous ses matchs/membres ? Action irréversible.`))return;await v.from("mini_league_matches").delete().eq("league_id",i),await v.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await v.from("mini_leagues").delete().eq("id",i);if(a){n("Erreur suppression ("+a.message+")","error");return}n("Mini League supprimée avec succès","success"),ot(t,e,r)}async function aa(t,e,i){await v.from("mini_leagues").update({is_archived:!0}).eq("id",i),e.toast("Mini League archivée","success"),ot(t,e,"archived")}async function ft(t,e,i){var E,m,S,$,A,P,R,O,Y;const{state:o,toast:r}=e,n=o.profile.id,[{data:a},{data:s},{data:c}]=await Promise.all([v.from("mini_leagues").select("*").eq("id",i).single(),v.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),v.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){r("Introuvable","error"),await ot(t,e);return}const d=(s||[]).some(I=>I.user_id===n),l=a.creator_id===n,f=(s||[]).map(I=>I.user).filter(Boolean),x=pa(f,c||[]),b=(c||[]).filter(I=>I.matchday===a.current_day),g=a.pot||0,p=a.entry_fee||100,u=b.length>0&&b.every(I=>I.status==="finished"||I.status==="bye"),y=a.current_day>=a.total_days,w=(s||[]).find(I=>I.user_id===n);t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${St};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${ii}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${ii};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${ii}">${a.name}</div>
        <div style="font-size:11px;color:${un}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${p} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"rgba(74,222,128,0.16)":a.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${a.status==="active"?"#4ade80":a.status==="finished"?"#c084fc":"#eab308"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${g>0?`<div style="font-size:12px;font-weight:900;color:${pt};margin-top:4px">🏆 ${g.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${Zt};border:1px solid ${ei};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Ze}">👥 Joueurs (${f.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${Tt};margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*f.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*f.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*f.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*f.length*.1).toLocaleString("fr")})</div>
        ${f.map(I=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${St}">
            <div style="width:36px;height:36px;border-radius:50%;background:${I.club_color2||pn};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${I.club_color1||"#fff"}">${(I.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Ze}">${I.club_name||I.pseudo}</div><div style="font-size:11px;color:${it}">@${I.pseudo}</div></div>
            ${I.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${l&&f.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${p} cr. × ${f.length})</button>`:""}
        ${l?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${d?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${p} cr.)</button>`}
        ${d&&!l?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${p.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${Zt};border:1px solid ${ei};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Ze}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${b.map(I=>So(I,f,n,d)).join("")}
        ${l&&u&&!y?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&x.length?`
      <div style="background:${Zt};border:1px solid ${ei};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Ze}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${it};text-transform:uppercase;border-bottom:2px solid ${St}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${g>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${pt}">💰</th>`:""}
          </tr></thead>
          <tbody>${x.map((I,_)=>{const G=g>0&&a.status==="finished"?_===0?Math.floor(g*.7):_===1?Math.floor(g*.2):_===2?Math.floor(g*.1):0:0;return`<tr style="border-bottom:1px solid ${St};${I.userId===n?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${_===0?pt:_<3?"#4ade80":Tt}">${["🥇","🥈","🥉"][_]||_+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Ze}">${I.clubName}</div><div style="font-size:10px;color:${it}">@${I.pseudo}</div></td>
              <td style="text-align:center;color:${Tt}">${I.played}</td><td style="text-align:center;color:${Tt}">${I.won}-${I.drawn}-${I.lost}</td>
              <td style="text-align:center;color:${I.goalDiff>=0?"#4ade80":"#ff6b6b"}">${I.goalDiff>=0?"+":""}${I.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Ze}">${I.points}</td>
              ${g>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${pt}">${G?G.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${Zt};border:1px solid ${ei};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Ze}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(I,_)=>_+1).reverse().map(I=>{const _=(c||[]).filter(G=>G.matchday===I);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${it};margin-bottom:6px">Journée ${I}</div>${_.map(G=>So(G,f,n,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${l&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${Tt}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const h=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((E=document.getElementById("ml-back"))==null||E.addEventListener("click",()=>ot(t,e,h)),(m=document.getElementById("ml-refresh"))==null||m.addEventListener("click",async I=>{const _=I.currentTarget;_.style.opacity="0.5",await ft(t,e,i)}),(S=document.getElementById("ml-start-btn"))==null||S.addEventListener("click",()=>sa(t,e,a,f)),($=document.getElementById("ml-next-day"))==null||$.addEventListener("click",()=>la(t,e,i)),(A=document.getElementById("ml-join-now"))==null||A.addEventListener("click",()=>fn(t,e,i,a.type)),(P=document.getElementById("ml-leave-btn"))==null||P.addEventListener("click",()=>ra(t,e,i,p)),(R=document.getElementById("ml-delete-btn"))==null||R.addEventListener("click",()=>Yi(t,e,i,a.name,"waiting")),(O=document.getElementById("ml-delete-now"))==null||O.addEventListener("click",()=>Yi(t,e,i,a.name,h)),(Y=document.getElementById("ml-archive-btn"))==null||Y.addEventListener("click",()=>aa(t,e,i)),t.querySelectorAll("[data-play-match]").forEach(I=>{I.addEventListener("click",()=>{const _=b.find(G=>G.id===I.dataset.playMatch);_&&(mt(),e.navigate("match-mini-league",{mlMatchId:_.id,leagueId:i}))})}),a.status==="finished"&&w){const I=x.findIndex(_=>_.userId===n);I>=0&&I<3&&w.prize_amount>0&&!w.prize_claimed&&setTimeout(()=>da(t,e,a,w,I),400)}}function So(t,e,i,o,r=!1){const n=f=>e.find(x=>x.id===f);if(t.is_bye){const f=n(t.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${Tt};text-align:center">🔵 ${(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"?"} exempté(e)</div>`}const a=n(t.home_id),s=n(t.away_id),c=t.home_id===i||t.away_id===i,d=c&&t.status==="pending"&&o&&!r,l=t.status==="finished"?`${t.home_score} - ${t.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${c?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${c?"rgba(74,222,128,0.35)":St}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Ze};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${t.status==="finished"?"#4ade80":it}">${l}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Ze};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${d?`<button data-play-match="${t.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${t.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function sa(t,e,i,o){const{toast:r,state:n}=e,a=ca(o.map(d=>d.id),i.mode),s=[];a.forEach((d,l)=>d.forEach(f=>s.push({league_id:i.id,matchday:l+1,home_id:f.home||f.bye,away_id:f.away||null,is_bye:!!f.bye,status:f.bye?"bye":"pending"})));const{error:c}=await v.from("mini_league_matches").insert(s);if(c){r("Erreur calendrier : "+c.message,"error");return}await v.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),r(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),ft(t,e,i.id)}async function la(t,e,i){const{data:o}=await v.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),r=(o.current_day||0)+1;if(r>(o.total_days||0)){ft(t,e,i);return}await v.from("mini_leagues").update({current_day:r}).eq("id",i),e.toast(`Journée ${r} commencée !`,"success"),ft(t,e,i)}async function da(t,e,i,o,r){var x,b;const{state:n,toast:a}=e,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],c=["🥇","🥈","🥉"][r],d=o.prize_amount||s[r]||0,l=o.prize_claimed,f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",f.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${c}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${r===0?"Champion !":r===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${pt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${l?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${pt}">${d.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${r===0?"70%":r===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${l?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${pt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${d.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(f),(x=f.querySelector("#prize-close"))==null||x.addEventListener("click",()=>f.remove()),(b=f.querySelector("#claim-prize-btn"))==null||b.addEventListener("click",async g=>{const p=g.currentTarget;p.disabled=!0,p.textContent="...";const{data:u,error:y}=await v.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:n.profile.id});if(y||!(u!=null&&u.success)){console.error("[MiniLeague] claim_mini_league_prize:",y||u),a((u==null?void 0:u.error)||"Erreur lors de la récupération","error"),p.disabled=!1,p.textContent=`💰 Récupérer ${d.toLocaleString("fr")} cr.`;return}if(u.already_claimed)a("Déjà récupéré précédemment","info");else{const w=(n.profile.credits||0)+u.prize;n.profile&&(n.profile.credits=w);const h=document.getElementById("nav-credits");h&&(h.textContent=`💰 ${w.toLocaleString("fr")}`),a(`💰 +${u.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}f.remove(),ft(t,e,i.id)})}function ca(t,e){const o=t.length%2===0?[...t]:[...t,null],r=o.length;let n=o.slice(1);const a=[];for(let s=0;s<r-1;s++){const c=[],d=[o[0],...n];for(let l=0;l<r/2;l++){const f=d[l],x=d[r-1-l];f===null?c.push({bye:x}):x===null?c.push({bye:f}):c.push({home:f,away:x})}a.push(c),n=[n[n.length-1],...n.slice(0,-1)]}return e==="aller-retour"?[...a,...a.map(s=>s.map(c=>c.bye?c:{home:c.away,away:c.home}))]:a}function pa(t,e){const i={};return t.forEach(o=>{i[o.id]={userId:o.id,pseudo:o.pseudo,clubName:o.club_name||o.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),e.filter(o=>o.status==="finished"&&!o.is_bye&&o.home_score!=null).forEach(o=>{const r=i[o.home_id],n=i[o.away_id];!r||!n||(r.played++,n.played++,r.goalsFor+=o.home_score,r.goalsAgainst+=o.away_score,n.goalsFor+=o.away_score,n.goalsAgainst+=o.home_score,o.home_score>o.away_score?(r.won++,r.points+=3,n.lost++):o.home_score<o.away_score?(n.won++,n.points+=3,r.lost++):(r.drawn++,r.points++,n.drawn++,n.points++),r.goalDiff=r.goalsFor-r.goalsAgainst,n.goalDiff=n.goalsFor-n.goalsAgainst)}),Object.values(i).sort((o,r)=>r.points-o.points||r.goalDiff-o.goalDiff||r.goalsFor-o.goalsFor)}async function Ao(t,e){const{state:i,navigate:o,toast:r}=e,n=i.params||{},a=n.leagueId||null,s=n.mlMatchId||null,c=i.user.id;if(!s||!a){r("Match introuvable","error"),o("mini-league");return}const{data:d,error:l}=await v.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",s).single();if(l||!d){r("Match introuvable","error"),o("mini-league",{openLeagueId:a});return}if(d.home_id!==c&&d.away_id!==c){r("Vous ne faites pas partie de ce match","error"),o("mini-league",{openLeagueId:a});return}const f=d.home_id===c;if(d.match_id){await jt(t,e,d.match_id,f,{mlLeagueId:a,mlMatchId:s});return}await zi(t,e,"mini_league",async({deckId:x,gcCardsEnriched:b,gcDefs:g,stadiumDef:p})=>{ct(t);const u=async y=>{const{data:w,error:h}=await v.rpc("start_mini_league_match",{p_ml_match_id:s,p_user_id:c,p_deck_id:x});if(h||!(w!=null&&w.success)){console.error("[MiniLeague] start_mini_league_match error:",h||w),r((w==null?void 0:w.error)||"Impossible de lancer le match","error"),o("mini-league",{openLeagueId:a});return}if(w.matched){await jt(t,e,w.match_id,f,{mlLeagueId:a,mlMatchId:s,myGC:y||[],gcDefs:g,stadiumDef:p});return}await ua(t,e,{mlMatchId:s,leagueId:a,amIHome:f,chosenGC:y,gcDefs:g,stadiumDef:p})};if(!(b!=null&&b.length)){await u([]);return}Si(t,b,u)})}function ua(t,e,{mlMatchId:i,leagueId:o,amIHome:r,chosenGC:n,gcDefs:a,stadiumDef:s}){return new Promise(c=>{var p;const{navigate:d}=e;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let l=!1;const f=async u=>{if(!l){if(l=!0,clearInterval(g),b)try{b.unsubscribe()}catch{}u&&await jt(t,e,u,r,{mlLeagueId:o,mlMatchId:i,myGC:n||[],gcDefs:a,stadiumDef:s}),c()}};(p=document.getElementById("wait-back"))==null||p.addEventListener("click",()=>{if(l=!0,clearInterval(g),b)try{b.unsubscribe()}catch{}d("mini-league",{openLeagueId:o}),c()});const x=async()=>{if(l)return;const{data:u}=await v.from("mini_league_matches").select("match_id").eq("id",i).single();u!=null&&u.match_id&&f(u.match_id)},b=v.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},u=>{var y;(y=u.new)!=null&&y.match_id&&f(u.new.match_id)}).subscribe(),g=setInterval(x,3e3);x()})}const fa="/",ma=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function ga(t,e,i){let o=0;const r=document.createElement("div");r.id="tutorial-overlay",r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const n=()=>{var l,f,x;const s=e[o],c=o===e.length-1,d=Math.round((o+1)/e.length*100);r.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${d}%;background:${s.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${s.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${s.title}</div>
          <div style="font-size:11px;color:#aaa">${o+1} / ${e.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${s.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${fa}icons/${s.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${s.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${s.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${o>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${c?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${s.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${c?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,r.querySelectorAll("ul,ol").forEach(b=>{b.style.paddingLeft="20px",b.style.marginTop="6px",b.style.marginBottom="6px"}),r.querySelectorAll("li").forEach(b=>{b.style.marginBottom="4px"}),r.querySelectorAll("p").forEach(b=>{b.style.marginBottom="8px"}),(l=r.querySelector("#tuto-prev"))==null||l.addEventListener("click",()=>{o--,n()}),(f=r.querySelector("#tuto-next"))==null||f.addEventListener("click",()=>{c?a():(o++,n())}),(x=r.querySelector("#tuto-skip"))==null||x.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{r.remove(),t!=null&&t.id&&await v.from("users").update({tutorial_done:!0}).eq("id",t.id),i==null||i()};document.body.appendChild(r),n()}async function ba(t,e,i){if(!t||t.tutorial_done)return;let o=[];const{data:r,error:n}=await v.rpc("get_tutorial_steps");if(!n&&(r==null?void 0:r.length)>0)o=r,console.log(`[Tutorial] RPC OK → ${o.length} étapes`);else{const{data:s,error:c}=await v.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!c&&(s==null?void 0:s.length)>0?(o=s,console.log(`[Tutorial] Direct OK → ${o.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${n==null?void 0:n.message}, Direct: ${c==null?void 0:c.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=o.length>0?o.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):ma;ga(t,a,()=>e("boosters"))}const zo={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function bi(t,e,i=0){return e?(Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0)+(e===t.job||e===t.job2?i:0):0}async function xa(t,e){t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await ro(t,e)}async function ro(t,e){const{state:i,toast:o}=e,{data:r}=await v.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:n}=await v.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(r||[]).filter(p=>p.seller_id!==i.profile.id),s=n||[];t.innerHTML=`
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
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-top:2px">${a.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
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
  </div>`;let c="buy";const d=()=>{var p,u,y,w,h,E,m;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((y=document.getElementById("flt-country"))==null?void 0:y.value)||"").toLowerCase().trim(),job:((w=document.getElementById("flt-job"))==null?void 0:w.value)||"",rarity:((h=document.getElementById("flt-rarity"))==null?void 0:h.value)||"",note1:parseInt((E=document.getElementById("flt-note1"))==null?void 0:E.value)||0,note2:parseInt((m=document.getElementById("flt-note2"))==null?void 0:m.value)||0}};function l(p){const u=d();return p.filter(y=>{var P,R,O;const w=(P=y.card)==null?void 0:P.player;if(!w)return!1;const h=`${w.firstname} ${w.surname_real}`.toLowerCase(),E=(((R=w.clubs)==null?void 0:R.encoded_name)||"").toLowerCase(),m=(w.country_code||"").toLowerCase(),S=((O=y.card)==null?void 0:O.evolution_bonus)||0,$=bi(w,w.job,S),A=w.job2?bi(w,w.job2,S):0;return!(u.name&&!h.includes(u.name)||u.club&&!E.includes(u.club)||u.country&&!m.includes(u.country)||u.job&&w.job!==u.job||u.rarity&&w.rarity!==u.rarity||u.note1&&$<u.note1||u.note2&&A<u.note2)})}function f(p){var E,m,S;const u=(E=p.card)==null?void 0:E.player;if(!u)return"";const y=((m=p.card)==null?void 0:m.evolution_bonus)||0,w=(i.profile.credits||0)>=p.price;return`<div class="mkt-buy-tile">
      ${ze({...u,_evolution_bonus:y},{width:140})}
      <div class="mkt-price">${p.price.toLocaleString("fr")} cr.</div>
      <div class="mkt-seller">Vendeur : ${((S=p.seller)==null?void 0:S.pseudo)||"—"}</div>
      <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${w?"":"disabled"} style="font-size:12px;padding:8px 10px">${w?"Acheter":"Trop cher"}</button>
    </div>`}function x(p){var R,O,Y,I;const u=(R=p.card)==null?void 0:R.player;if(!u)return"";const y=((O=p.card)==null?void 0:O.evolution_bonus)||0,w=bi(u,u.job,y),h=u.job2?bi(u,u.job2,y):0,E=p.status==="sold",m=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,S=zo[u.job]||"#bbb",$=u.job2?zo[u.job2]||"#bbb":null,A=u.job==="GK"?"#fff":S,P=u.job2==="GK"?"#fff":$;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${E?"opacity:0.7":""}">
      ${m?`<img src="${m}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(Y=u.clubs)!=null&&Y.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${S};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${A};font-family:Arial Black,Arial">${w}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${$};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${P};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:${E?"#22c55e":"#999"};margin-top:1px">
          ${E?`✅ Vendu à ${((I=p.buyer)==null?void 0:I.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${E?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function b(){const p=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(p){if(u.style.display=c==="buy"?"flex":"none",c==="buy"){const y=l(a);p.innerHTML=y.length?`<div class="mkt-buy-grid">${y.map(f).join("")}</div>`:'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const y=s.filter(h=>h.status==="active").sort((h,E)=>new Date(E.listed_at)-new Date(h.listed_at)),w=s.filter(h=>h.status==="sold").sort((h,E)=>new Date(E.sold_at||E.listed_at)-new Date(h.sold_at||h.listed_at));p.innerHTML=(y.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${y.length})</div>`+y.map(x).join(""):"")+(w.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${w.length})</div>`+w.map(x).join(""):"")+(!y.length&&!w.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(y=>y.addEventListener("click",()=>ya(y.dataset.buy,a,t,e))),p.querySelectorAll("[data-cancel]").forEach(y=>y.addEventListener("click",()=>va(y.dataset.cancel,t,e)))}}t.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{c=p.dataset.tab,t.querySelectorAll(".mkt-tab").forEach(u=>{const y=u===p;u.style.background=y?"var(--green)":"var(--tile-bg)",u.style.color=y?"#fff":"var(--tile-fg-dim)",u.style.borderColor=y?"var(--green)":"var(--tile-border)"}),b()})});let g;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var u;(u=document.getElementById(p))==null||u.addEventListener("input",()=>{clearTimeout(g),g=setTimeout(b,250)})}),b()}async function ya(t,e,i,o){const{state:r,toast:n,refreshProfile:a}=o,s=e.find(l=>l.id===t);if(!s)return;const c=s.price;if((r.profile.credits||0)<c){n("Crédits insuffisants","error");return}ha(s,async()=>{const{error:l}=await v.rpc("buy_market_card",{p_listing_id:t,p_buyer_id:r.profile.id});if(l){n("Erreur achat : "+l.message,"error");return}await a();const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),n("✅ Carte achetée !","success"),await ro(i,o)})}function ha(t,e){var a;const i=(a=t.card)==null?void 0:a.player,o=i?`${i.firstname} ${i.surname_real}`:"cette carte",r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${o} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${t.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(r);const n=s=>{r.remove(),s&&e()};r.querySelector("#buy-cancel").addEventListener("click",()=>n(!1)),r.querySelector("#buy-ok").addEventListener("click",()=>n(!0)),r.addEventListener("click",s=>{s.target===r&&n(!1)})}async function va(t,e,i){const{toast:o}=i,{data:r}=await v.from("market_listings").select("card_id").eq("id",t).single();if(await v.from("market_listings").update({status:"cancelled"}).eq("id",t),r!=null&&r.card_id){const{count:n}=await v.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",r.card_id).eq("status","active");n||await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",r.card_id)}o("Annonce retirée","success"),ro(e,i)}async function wa(t,e){var b,g,p,u,y;const{state:i,navigate:o}=e,r=((g=(b=e==null?void 0:e.state)==null?void 0:b.params)==null?void 0:g.tab)||"ranked";t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:n},{data:a},{data:s}]=await Promise.all([v.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").order("mmr",{ascending:!1}).limit(100),v.rpc("get_mini_league_leaderboard"),v.rpc("get_random_leaderboard")]);let c=r;const d=w=>w<3?["#D4A017","#a0a0a0","#cd7f32"][w]:"var(--green)",l=w=>w<3?"#000":"#fff";function f(){var E,m,S;const w=document.getElementById("rankings-legend");w&&(w.innerHTML=c==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const h=document.getElementById("rankings-list");if(h){if(c==="ranked"){const $=n||[];h.innerHTML=$.length>0?$.map((A,P)=>{const R=Ei(A.mmr??1e3),O=(A.ranked_wins||0)+(A.ranked_losses||0)+(A.ranked_draws||0),Y=O>0?Math.round((A.ranked_wins||0)/O*100):0,I=A.id===i.profile.id,_=(A.placement_matches||0)<10;return`
          <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${I?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${P<3?["#D4A017","#a0a0a0","#cd7f32"][P]:"rgba(255,255,255,0.08)"};color:${P<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${P<3?"16":"13"}px">${P<3?["🥇","🥈","🥉"][P]:P+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${R.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${A.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${A.club_name} · ${R.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${_?"❓":R.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${R.color}">${_?"Placement":R.label}</div>
              ${_?"":`<div style="font-size:10px;color:var(--tile-fg-dim)">${Y}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(c==="mini-league"){const $=a||[];h.innerHTML=$.length>0?$.map((A,P)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${A.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${d(P)};color:${l(P)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${P<3?"16":"13"}px">${P<3?["🥇","🥈","🥉"][P]:P+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${A.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${A.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${A.top1} 🥈${A.top2} 🥉${A.top3}</div>
            <div style="color:var(--tile-fg-dim)">${A.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const $=s||[];h.innerHTML=$.length>0?$.map((A,P)=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--tile-bg,rgba(255,255,255,0.05));border-radius:12px;border:1px solid var(--tile-border,rgba(255,255,255,0.1));${A.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${d(P)};color:${l(P)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${P<3?"16":"13"}px">${P<3?["🥇","🥈","🥉"][P]:P+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${A.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${A.club_name}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:16px;font-weight:900;color:#D4A017" title="Score de classement — tient compte du nombre de matchs joués">📊 ${A.wilson_score}</div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">${A.wins}/${A.total} V</div>
            <div style="font-size:9px;color:var(--green);font-weight:700;margin-top:2px">${A.win_pct}%</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}(E=document.getElementById("tab-ranked"))!=null&&E.style&&(document.getElementById("tab-ranked").style.cssText=x(c==="ranked")),(m=document.getElementById("tab-mini-league"))!=null&&m.style&&(document.getElementById("tab-mini-league").style.cssText=x(c==="mini-league")),(S=document.getElementById("tab-random"))!=null&&S.style&&(document.getElementById("tab-random").style.cssText=x(c==="random"))}}const x=w=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${w?"900":"400"};background:${w?"var(--green)":"rgba(255,255,255,0.06)"};color:${w?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-ranked" style="${x(c==="ranked")}">⚔️ Ranked</button>
        <button id="tab-mini-league" style="${x(c==="mini-league")}">🏆 Mini Leagues</button>
        <button id="tab-random" style="${x(c==="random")}">🎲 Random</button>
      </div>
      <div id="rankings-legend"></div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,f(),(p=document.getElementById("tab-ranked"))==null||p.addEventListener("click",()=>{c="ranked",f()}),(u=document.getElementById("tab-mini-league"))==null||u.addEventListener("click",()=>{c="mini-league",f()}),(y=document.getElementById("tab-random"))==null||y.addEventListener("click",()=>{c="random",f()})}async function _a(t,e){var S,$,A,P;const{state:i,navigate:o,toast:r}=e,n=i.profile;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:s}]=await Promise.all([v.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),v.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",n.id).single()]);if(!s){r("Erreur chargement profil","error"),o("home");return}if(!a){t.innerHTML=`
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
    </div>`,(S=document.getElementById("ranked-back"))==null||S.addEventListener("click",()=>o("home"));return}const c=s.mmr??1e3,d=s.mmr_deviation??350,l=s.mmr_volatility??.06,f=s.placement_matches??0,x=f<10,b=Math.max(0,10-f),g=Ei(c),p=jo(c),u=Bi.findIndex(R=>R.id===g.id),y=Bi[u+1]||null,w={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},h=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),E=h>0?Math.round((s.ranked_wins||0)/h*100):0,m=Bi.map(R=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${g.id===R.id?1:.35};
      transform:${g.id===R.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${g.id===R.id?"28px":"20px"}">${R.emoji}</div>
      <div style="font-size:9px;color:${R.color};font-weight:${g.id===R.id?"900":"400"};letter-spacing:0.5px">${R.label.toUpperCase()}</div>
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
    ${x?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${f}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${b} match${b>1?"s":""} — gains et pertes ×2</div>
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
    ${a?`
    <div style="background:rgba(0,0,0,0.25);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:12px;color:rgba(255,255,255,0.6)">📅 ${a.name}</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.4)">Fin : ${new Date(a.end_at).toLocaleDateString("fr",{day:"numeric",month:"short"})}</div>
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
  </div>`,($=document.getElementById("ranked-back"))==null||$.addEventListener("click",()=>o("home")),(A=document.getElementById("ranked-leaderboard-btn"))==null||A.addEventListener("click",()=>o("rankings",{tab:"ranked"})),(P=document.getElementById("ranked-play-btn"))==null||P.addEventListener("click",()=>{mt(),o("match",{matchMode:"ranked",rankedData:{mmr:c,rd:d,sigma:l,isPlacement:x}})})}async function ka(t,{state:e,navigate:i,toast:o}){const r=e.profile;if(!r)return;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:n}=await v.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${r.id},away_id.eq.${r.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(n||[]).filter(l=>l.status==="finished"),c=(n||[]).filter(l=>l.status==="in_progress");function d(l){const f=l.home_id===r.id;f?l.home_score:l.away_score,f?l.away_score:l.home_score;const x=l.winner_id===r.id,b=l.home_score===l.away_score&&l.status==="finished",g=l.status!=="finished"?"…":b?"N":x?"V":"D",p=l.status!=="finished"||b?"#888":x?"#1A6B3C":"#c0392b";let u=a[l.mode]||l.mode;l.away_id===null&&!u.startsWith("IA")&&(u="IA");const w=l.home_id===r.id?l.away:l.home;let h;l.away_id===null?h=u:w?h=`${w.club_name||w.pseudo} (${w.pseudo})`:h="Adversaire";let E="";l.status==="in_progress"&&Date.now()-new Date(l.created_at).getTime()>3600*1e3&&(E=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const m=new Date(l.created_at),S=m.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+m.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),$=l.status==="finished"?`${l.home_score} - ${l.away_score}`:`${l.home_score||0} - ${l.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${E}</div>
        <div style="font-size:11px;color:var(--gray-600)">${u} · ${S}${l.status==="in_progress"?" · en cours":""}</div>
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
      ${c.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${c.map(d).join("")}
        </div>`:""}

      ${s.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${s.map(d).join("")}
        </div>`:""}

      ${(n||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}yn(vn);const ve={user:null,profile:null,page:"home",params:{}};function Nt(t,e="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=t,o.className=`show ${e}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function $a(t,e,i=""){document.getElementById("modal-title").textContent=t,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Wi(){document.getElementById("modal-overlay").classList.add("hidden")}async function ti(){if(!ve.user)return;const{data:t}=await v.from("users").select("*").eq("id",ve.user.id).single();t&&(ve.profile=t)}const mn="mw_theme";function oi(){return localStorage.getItem(mn)||"club"}function Mo(t){var e;localStorage.setItem(mn,t),xi(t),(e=ve.profile)!=null&&e.id&&v.from("users").update({theme:t}).eq("id",ve.profile.id).then(()=>{})}function xi(t){var e,i;document.documentElement.setAttribute("data-theme",t),t==="club"&&(document.documentElement.style.setProperty("--club-color1",((e=ve.profile)==null?void 0:e.club_color1)||"#0a0f0a"),document.documentElement.style.setProperty("--club-color2",((i=ve.profile)==null?void 0:i.club_color2)||"#080d08"))}function Gt(t,e={}){ve.page=t,ve.params=e,gn()}async function gn(){var o,r,n,a;const t=document.getElementById("page-content");if(!t)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===ve.page)});const e=document.getElementById("nav-credits");e&&ve.profile&&(e.textContent=`💰 ${(ve.profile.credits||0).toLocaleString("fr")}`);const i={state:ve,navigate:Gt,toast:Nt,openModal:$a,closeModal:Wi,refreshProfile:ti};switch(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ve.page){case"home":await qi(t,i);break;case"home2":await qi(t,i);break;case"game":await On(t,i);break;case"settings":await Ko(t,i);break;case"collection":await Xn(t,i);break;case"decks":await Gi(t,i);break;case"boosters":await dr(t,i);break;case"ranked":await _a(t,i);break;case"match":{const s=ve.params&&ve.params.matchMode||"vs_ai_easy";s==="random"?await Vi(t,i,!1):s==="ranked"?await Vi(t,i,!0):s==="friend"?await Wr(t,i,(o=ve.params)==null?void 0:o.friendId,(r=ve.params)==null?void 0:r.friendName):s==="mini_league"||s==="mini-league"?await Ao(t,i,(n=ve.params)==null?void 0:n.mlMatchId,(a=ve.params)==null?void 0:a.leagueId):await $r(t,i);break}case"market":await xa(t,i);break;case"rankings":await wa(t,i);break;case"matches":await ka(t,i);break;case"friends":await Pn(t,i);break;case"mini-league":await Zr(t,i);break;case"match-mini-league":{const s=ve.params||{};await Ao(t,i,s.mlMatchId,s.leagueId);break}default:await qi(t,i)}}function Ea(){var o,r;const t=document.getElementById("app"),e=ve.profile;if(!e)return;const i="/icons/";t.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.07.27-2015" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(n=>{n.addEventListener("click",a=>{a.preventDefault(),Gt(n.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Gt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Gt("boosters")),(o=document.getElementById("journal-btn"))==null||o.addEventListener("click",()=>La()),(r=document.getElementById("settings-btn"))==null||r.addEventListener("click",()=>Gt("settings"))}async function La(){const{data:t}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(o=>{const r=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}function Ia(t,{onPlay:e}){var o;const i="/icons/";t.style.cssText="",t.innerHTML=`
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
  </div>`,(o=t.querySelector("#pl-play-btn"))==null||o.addEventListener("click",e)}async function Ta(){xi(oi()),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Wi()}),document.getElementById("modal-close").addEventListener("click",Wi);const{data:{session:t}}=await v.auth.getSession();if(!t){Co(),Ia(document.getElementById("app"),{onPlay:()=>mo(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Nt})});return}ve.user=t.user,await ti(),xi(oi()),Co();try{const{data:i}=await v.from("formation_links_overrides").select("formation, links"),o={};(i||[]).forEach(r=>{o[r.formation]=r.links}),hn(o)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!ve.profile){_n(document.getElementById("app"),{state:ve,navigate:async()=>{await ti(),xi(oi()),Pi()},toast:Nt,refreshProfile:ti});return}const e=Array.isArray(ve.profile.pending_boosters)?ve.profile.pending_boosters:[];if(!ve.profile.onboarding_done&&e.length>0){xr(document.getElementById("app"),{state:ve,navigate:()=>Pi(),toast:Nt,refreshProfile:ti});return}Pi(),setTimeout(()=>ba(ve.profile,Gt,Nt),800),v.auth.onAuthStateChange(async(i,o)=>{i==="SIGNED_OUT"&&(ve.user=null,ve.profile=null,document.getElementById("app").innerHTML="",mo(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Nt}))})}function Sa(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Mi(){const t=document.getElementById("app");t&&(t.style.height=Sa()+"px")}window.addEventListener("resize",Mi);window.addEventListener("orientationchange",()=>setTimeout(Mi,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Mi);function Pi(){const t=()=>{var i;(i=ve.user)!=null&&i.id&&v.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",ve.user.id).then(()=>{})};t(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(t,6e4);const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",Mi(),Ea(),gn()}function Co(){const t=document.getElementById("app-loader"),e=document.getElementById("app");e&&(e.style.display=""),t&&(t.classList.add("zoom-out"),setTimeout(()=>t.style.display="none",500))}function bn(t){var o;const e=document.getElementById("app-loader");if(e&&(e.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${t||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(o=document.getElementById("boot-retry"))==null||o.addEventListener("click",()=>window.location.reload())}Ta().catch(t=>{console.error("Échec du démarrage:",t),bn()});setTimeout(()=>{const t=document.getElementById("app-loader");t&&t.style.display!=="none"&&!t.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&bn("Le serveur met trop de temps à répondre.")},12e3);
