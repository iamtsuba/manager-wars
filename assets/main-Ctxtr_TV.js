const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/special-cards-q1oKjNQl.js","assets/special-cards-C5_OzvLA.css"])))=>i.map(i=>d[i]);
import{s as v,j as vi,q as zn,t as Ut,u as Oi,F as Hi,o as tt,n as ti,g as At,r as Ie,m as Mt,v as Mi,w as po,T as Ti,p as uo,x as fo,d as mo}from"./special-cards-q1oKjNQl.js";const go="/";function pn(e,{navigate:t,toast:i}){let n="login";const o=()=>{var a,s,d,c,l,f,y;const r=n==="login";if(e.innerHTML=`
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
        <img src="${go}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
            flex:1;padding:16px;border:none;background:${r?"rgba(26,107,60,0.3)":"transparent"};
            color:${r?"#fff":"rgba(255,255,255,0.4)"};
            font-size:14px;font-weight:${r?"900":"600"};cursor:pointer;
            border-bottom:2px solid ${r?"#22c55e":"transparent"};
            transition:all .2s;
          ">Connexion</button>
          <button id="tab-reg-btn" style="
            flex:1;padding:16px;border:none;background:${r?"transparent":"rgba(26,107,60,0.3)"};
            color:${r?"rgba(255,255,255,0.4)":"#fff"};
            font-size:14px;font-weight:${r?"600":"900"};cursor:pointer;
            border-bottom:2px solid ${r?"transparent":"#22c55e"};
            transition:all .2s;
          ">Inscription</button>
        </div>

        <div style="padding:24px">
          ${r?`
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
    </style>`,(a=document.getElementById("tab-login-btn"))==null||a.addEventListener("click",()=>{n="login",o()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{n="register",o()}),r)(d=document.getElementById("login-password"))==null||d.addEventListener("keydown",x=>{var g;x.key==="Enter"&&((g=document.getElementById("login-btn"))==null||g.click())}),(c=document.getElementById("login-btn"))==null||c.addEventListener("click",async()=>{const x=document.getElementById("login-email").value.trim(),g=document.getElementById("login-password").value,p=document.getElementById("login-error");if(p.textContent="",!x||!g){p.textContent="Remplissez tous les champs.";return}const u=document.getElementById("login-btn");u.textContent="⏳ Connexion…",u.disabled=!0;const{error:b}=await v.auth.signInWithPassword({email:x,password:g});if(u.textContent="⚽ Se connecter",u.disabled=!1,b){p.textContent=b.message.includes("Invalid")?"Email ou mot de passe incorrect.":b.message;return}window.location.reload()});else{(l=document.getElementById("reg-confirm"))==null||l.addEventListener("keydown",p=>{var u;p.key==="Enter"&&((u=document.getElementById("reg-btn"))==null||u.click())});let x=null,g=!1;(f=document.getElementById("reg-access-code"))==null||f.addEventListener("input",p=>{const u=p.target.value,b=document.getElementById("access-code-status"),w=document.getElementById("reg-btn");if(clearTimeout(x),g=!1,w&&(w.disabled=!0,w.style.opacity="0.45",w.style.cursor="not-allowed"),!u){b&&(b.textContent="");return}b&&(b.textContent="⏳ Vérification…",b.style.color="rgba(255,255,255,0.4)"),x=setTimeout(async()=>{const{data:h,error:E}=await v.rpc("check_signup_password",{input_password:u});if(E){b&&(b.textContent="Erreur de vérification.",b.style.color="#f87171");return}g=!!h,b&&(b.textContent=g?"✅ Code valide":"❌ Code incorrect",b.style.color=g?"#4ade80":"#f87171"),w&&(w.disabled=!g,w.style.opacity=g?"1":"0.45",w.style.cursor=g?"pointer":"not-allowed")},400)}),(y=document.getElementById("reg-btn"))==null||y.addEventListener("click",async()=>{var k;const p=document.getElementById("reg-email").value.trim(),u=document.getElementById("reg-password").value,b=document.getElementById("reg-confirm").value,w=((k=document.getElementById("reg-access-code"))==null?void 0:k.value)||"",h=document.getElementById("reg-error");if(h.textContent="",!p||!u||!b){h.textContent="Remplissez tous les champs.";return}if(u.length<6){h.textContent="Mot de passe trop court (min. 6 caractères).";return}if(u!==b){h.textContent="Les mots de passe ne correspondent pas.";return}const{data:E}=await v.rpc("check_signup_password",{input_password:w});if(!E){h.textContent="Code d'accès incorrect.";return}const m=document.getElementById("reg-btn");m.textContent="⏳ Création…",m.disabled=!0;const{error:M}=await v.auth.signUp({email:p,password:u});if(m.textContent="🚀 Créer mon compte",m.disabled=!1,M){h.textContent=M.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",o(),setTimeout(()=>{const I=document.getElementById("login-email");I&&(I.value=p)},50)})}};o()}function xo(e,{state:t,navigate:i,toast:n,refreshProfile:o}){let r="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function s(){var g;const c=document.getElementById("logo-preview"),l=document.getElementById("logo-initials"),f=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",y=f.trim().split(" ").filter(Boolean),x=y.length>=2?(y[0][0]+y[1][0]).toUpperCase():f.slice(0,2).toUpperCase();c&&(c.style.background=a,c.style.borderColor=r),l&&(l.textContent=x,l.style.color=r)}document.getElementById("color1").addEventListener("input",c=>{r=c.target.value,document.getElementById("swatch1").style.background=r,s()}),document.getElementById("color2").addEventListener("input",c=>{a=c.target.value,document.getElementById("swatch2").style.background=a,s()});function d(c){document.querySelectorAll(".setup-step").forEach(l=>l.classList.remove("active")),document.getElementById(`step-${c}`).classList.add("active"),document.getElementById("step-num").textContent=c,document.getElementById("progress-fill").style.width=`${Math.round(c/3*100)}%`,c===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("step1-error");if(l.textContent="",c.length<3){l.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await v.from("users").select("id").eq("pseudo",c).maybeSingle();if(f){l.textContent="Ce pseudo est déjà pris.";return}d(2)}),document.getElementById("step2-back").addEventListener("click",()=>d(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const c=document.getElementById("setup-club").value.trim(),l=document.getElementById("step2-error");if(l.textContent="",c.length<2){l.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await v.from("users").select("id").eq("club_name",c).maybeSingle();if(f){l.textContent="Ce nom de club est déjà pris.";return}d(3)}),document.getElementById("step3-back").addEventListener("click",()=>d(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),y=document.getElementById("step3-finish");f.textContent="",y.disabled=!0,y.textContent="Création en cours…";try{const{error:x}=await v.from("users").insert({id:t.user.id,pseudo:c,club_name:l,club_color1:r,club_color2:a,credits:1e4});if(x)throw x;await yo(t.user.id),await o(),n(`Bienvenue ${c} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(x){f.textContent=x.message,y.disabled=!1,y.textContent="🚀 Créer mon profil !"}})}async function yo(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await v.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const bo="modulepreload",ho=function(e){return"/"+e},un={},Ui=function(t,i,n){let o=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(i.map(d=>{if(d=ho(d),d in un)return;un[d]=!0;const c=d.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${l}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":bo,c||(f.as="script"),f.crossOrigin="",f.href=d,s&&f.setAttribute("nonce",s),document.head.appendChild(f),c)return new Promise((y,x)=>{f.addEventListener("load",y),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return o.then(a=>{for(const s of a||[])s.status==="rejected"&&r(s.reason);return t().catch(r)})},ii="#1A6B3C",ni="#cc2222",vo="#D4A017",fn="#888";async function wo(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await Sn(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>ko(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Ki(i,n,null,t))}async function Sn(e,t,i={}){const{navigate:n}=i,o=e.user.id,{data:r,error:a}=await v.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${o},addressee_id.eq.${o}`),{count:s}=await v.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",o).eq("status","pending"),d=document.getElementById("pending-badge");d&&(s>0?(d.style.display="flex",d.textContent=s):d.style.display="none");const c=document.getElementById("friends-list");if(!c)return;if(a){console.error("[Friends] Erreur:",a),c.innerHTML=`<div style="color:${ni};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const l=(r||[]).map(x=>x.requester_id===o?x.addressee_id:x.requester_id);let f={};if(l.length){const{data:x}=await v.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",l);(x||[]).forEach(g=>{f[g.id]=g})}const y=(r||[]).map(x=>({friendshipId:x.id,friend:f[x.requester_id===o?x.addressee_id:x.requester_id]||{pseudo:"?"}}));if(!y.length){c.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}c.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${y.length} ami${y.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${y.map(({friendshipId:x,friend:g})=>_o(g,x)).join("")}
    </div>`,c.querySelectorAll("[data-stats]").forEach(x=>{x.addEventListener("click",()=>$o(e,x.dataset.stats,x.dataset.friendName))}),c.querySelectorAll("[data-match]").forEach(x=>{x.addEventListener("click",async()=>{const g=x.dataset.friendId,p=x.dataset.friendName;if(typeof n!="function"){t("Erreur navigation","error");return}const u=e.user.id,{data:b}=await v.from("friend_match_invites").select("id").eq("inviter_id",g).eq("invitee_id",u).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),w=!!b;console.log("[Friends] clic match",{fid:g,fname:p,isAccepting:w}),n("match",{matchMode:"friend",friendId:g,friendName:p,isAccepting:w})})})}function _o(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",o=(n||i).slice(0,2).toUpperCase(),r=e.club_color2||ii,a=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,d=s&&Date.now()-s.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:var(--tile-bg);border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${r};border:2.5px solid ${a};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${a}">
          ${o}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${d?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${n}</div>
        <div style="font-size:11px;color:${d?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${d?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:var(--tile-bg);font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${vo};background:var(--tile-bg);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function ko(e,t){const i=Vi();i.innerHTML=`
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
    ${Yi()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),o=i.querySelector("#add-friend-error"),r=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",r),i.addEventListener("click",a=>{a.target===i&&r()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=n.value.trim();if(!a){o.textContent="Entre un pseudo";return}o.textContent="";const{data:s}=await v.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!s){o.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){o.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:d}=await v.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(d){const l=d.status==="accepted"?"Vous êtes déjà amis !":d.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";o.textContent=l;return}const{error:c}=await v.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(c){o.textContent="Erreur : "+c.message;return}r(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function Ki(e,t,i=null,n={}){const o=e.user.id,{data:r}=await v.from("friendships").select("id, requester_id").eq("addressee_id",o).eq("status","pending").order("created_at",{ascending:!1}),a=(r||[]).map(y=>y.requester_id);let s={};if(a.length){const{data:y}=await v.from("users").select("id, pseudo, club_name").in("id",a);(y||[]).forEach(x=>{s[x.id]=x})}const d=(r||[]).map(y=>({...y,requester:s[y.requester_id]||{pseudo:"?"}})),c=Vi(),l=d||[];c.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${l.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${l.map(y=>{var x,g,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((x=y.requester)==null?void 0:x.club_name)||((g=y.requester)==null?void 0:g.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=y.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${y.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${ii};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${y.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${ni};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${Yi()}`,document.body.appendChild(c);const f=()=>c.remove();c.querySelector("#pending-close").addEventListener("click",f),c.addEventListener("click",y=>{y.target===c&&f()}),c.querySelectorAll("[data-accept]").forEach(y=>{y.addEventListener("click",async()=>{const{error:x}=await v.from("friendships").update({status:"accepted"}).eq("id",y.dataset.accept);if(x){t("Erreur : "+x.message,"error");return}y.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Sn(e,t,n),i&&i()})}),c.querySelectorAll("[data-decline]").forEach(y=>{y.addEventListener("click",async()=>{await v.from("friendships").delete().eq("id",y.dataset.decline),y.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function $o(e,t,i){const n=e.user.id,[o,r]=[n,t].sort(),a=n===o,{data:s}=await v.from("friend_match_stats").select("*").eq("player1_id",o).eq("player2_id",r).single(),d=e.profile.club_name||e.profile.pseudo||"Moi",c=s||{},l=a?c.wins_p1||0:c.wins_p2||0,f=a?c.wins_p2||0:c.wins_p1||0,y=c.draws||0,x=a?c.goals_p1||0:c.goals_p2||0,g=a?c.goals_p2||0:c.goals_p1||0,p=a?c.gc_used_p1||0:c.gc_used_p2||0,u=a?c.gc_used_p2||0:c.gc_used_p1||0,b=c.matches_total||0,w=(E,m,M,k=ii,I=ni)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${k}">${m}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${E}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${I}">${M}</div>
    </div>`,h=Vi();h.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${d}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${b===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${w("Victoires",l,f)}
        ${w("Nuls",y,y,fn,fn)}
        ${w("Défaites",f,l)}
        ${w("Buts marqués",x,g)}
        ${w("Buts encaissés",g,x,ni,ii)}
        ${w("GC utilisés ⚡",p,u,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${b} match${b>1?"s":""} joué${b>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${Yi()}`,document.body.appendChild(h),h.querySelector("#stats-close").addEventListener("click",()=>h.remove()),h.addEventListener("click",E=>{E.target===h&&h.remove()})}function Vi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function Yi(){return`
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
        background:${ii};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const An="mw_sound_volume";function Wi(){const e=localStorage.getItem(An);if(e===null)return 100;const t=parseInt(e,10);return Number.isFinite(t)?Math.max(0,Math.min(100,t)):100}function Eo(e){localStorage.setItem(An,String(Math.max(0,Math.min(100,Math.round(e)))))}function Xi(){return Wi()===0}function fi(e){return Math.max(0,Math.min(1,e*(Wi()/100)))}function Ji(e,t=1){if(Xi())return null;try{const i=new Audio(e);return i.volume=fi(t),i.play().catch(()=>{}),i}catch{return null}}let gt=null,Ci=null,mn=.3;function Mn(e,t=.3){if(mn=t,gt&&Ci===e&&!gt.paused){gt.volume=fi(mn);return}if(Tt(),!Xi())try{const i=new Audio(e);i.loop=!0,i.volume=fi(t),i.play().catch(()=>{}),gt=i,Ci=e}catch{}}function Tt(){if(gt)try{gt.pause(),gt.currentTime=0}catch{}gt=null,Ci=null}let Xt=null;function Cn(e,t=.6){if(Ue(),!Xi())try{const i=new Audio(e);i.volume=fi(t),i.play().catch(()=>{}),Xt=i}catch{}}function Ue(){if(Xt)try{Xt.pause(),Xt.currentTime=0}catch{}Xt=null}const Lo="2026.07.23-1433";async function gn(e,{state:t,navigate:i,toast:n}){var r,a,s;const o=t.profile;o&&(e.innerHTML=`
  <style>
    .home-dark {
      min-height: 100%;
      background: var(--page-bg);
      background-image: var(--page-gradient);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 16px 16px 80px;
      box-sizing: border-box;
      overflow-y: auto;
    }
    .home-inner {
      width: 100%;
      max-width: 560px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .home-hero {
      background: linear-gradient(135deg, ${o.club_color1}cc, ${o.club_color2}88);
      border: 1.5px solid ${o.club_color2};
      border-radius: 16px;
      padding: 14px 18px;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    }
    .home-hero-info h3 { margin:0; font-size:17px; font-weight:900; color:var(--tile-fg-on-page); }
    .home-hero-info .level { font-size:11px; color:var(--tile-fg-dim); letter-spacing:1px; text-transform:uppercase; margin-top:2px; }
    .home-hero-btn {
      width:38px; height:38px; border-radius:50%; border:none;
      background:rgba(255,255,255,0.15); cursor:pointer;
      display:flex; align-items:center; justify-content:center;
      transition: background .2s;
    }
    .home-hero-btn:hover { background:rgba(255,255,255,0.25); }
    .home-hero-btn img { width:22px; height:22px; object-fit:contain; }

    .ranked-tile {
      border-radius: 16px;
      background: linear-gradient(135deg, #2d0a6e 0%, #4a1a8a 50%, #6a28b8 100%);
      border: 1.5px solid rgba(122,40,184,0.6);
      box-shadow: 0 4px 20px rgba(122,40,184,0.3);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      transition: transform .15s, box-shadow .15s;
    }
    .ranked-tile:active { transform: scale(.97); }

    .play-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .play-tile {
      border-radius: 16px;
      background: var(--tile-bg);
      border: 1px solid var(--tile-border);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      transition: transform .15s, filter .15s;
      backdrop-filter: blur(4px);
    }
    .play-tile:hover { filter: brightness(1.12); }
    .play-tile:active { transform: scale(.96); }
    .play-text-overlay { max-height: 26px !important; width: auto !important; }
    .ranked-tile .play-text-overlay { max-height: 34px !important; }
    .play-text-overlay { max-height: 28px !important; width: auto !important; }
    .ranked-tile .play-text-overlay { max-height: 36px !important; }

    .home-footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      padding: 4px 0;
    }
    .home-logout-btn {
      background: var(--tile-bg);
      border: 1px solid var(--tile-border);
      border-radius: 20px;
      color: var(--tile-fg-dim);
      font-size: 12px;
      padding: 6px 18px;
      cursor: pointer;
      transition: filter .2s;
    }
    .home-logout-btn:hover { filter: brightness(1.15); }
  </style>

  <div class="home-dark" id="home-dark">
    <div class="home-inner">

      <!-- Bannières dynamiques -->
      <div id="friend-requests-banner"></div>
      <div id="match-invite-banner"></div>
      <div id="ongoing-match-banner"></div>

      <!-- Hero / pseudo -->
      <div class="home-hero">
        <button class="home-hero-btn" id="nav-rankings">
          <img src="/icons/badge-trophy.png" alt="Classement" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'🏆',style:'font-size:20px'}))">
        </button>
        <div class="home-hero-info" style="flex:1">
          <h3>${o.pseudo}</h3>
          <div class="level">Niveau ${o.level} · ${o.club_name}</div>
        </div>
        <button class="home-hero-btn" id="nav-matches">
          <img src="/icons/badge-ball.png" alt="Matchs" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'⚽',style:'font-size:20px'}))">
        </button>
      </div>

      <!-- Ranked -->
      <div class="ranked-tile" data-action="ranked">
        <div class="play-badge-group">
          <img src="/icons/badge-ranked.png" alt="" class="play-icon" style="height:80px">
          <img src="/icons/badge-ranked-txt.png" alt="Ranked" class="play-text-overlay">
        </div>
      </div>

      <!-- Grille 2x2 -->
      <div class="play-grid">
        <div class="play-tile" data-action="match-ai">
          <div class="play-badge-group">
            <img src="/icons/badge-ai.png" alt="" class="play-icon" style="height:70px">
            <img src="/icons/badge-ai-txt.png" alt="Match IA" class="play-text-overlay">
          </div>
        </div>
        <div class="play-tile" data-action="match-random">
          <div class="play-badge-group">
            <img src="/icons/badge-random.png" alt="" class="play-icon" style="height:70px">
            <img src="/icons/badge-random-txt.png" alt="Match Random" class="play-text-overlay">
          </div>
        </div>
        <div class="play-tile" data-action="match-friend">
          <div class="play-badge-group">
            <img src="/icons/badge-vs.png" alt="" class="play-icon" style="height:70px">
            <img src="/icons/badge-vs-txt.png" alt="Match Friend" class="play-text-overlay">
          </div>
        </div>
        <div class="play-tile" data-action="mini-league">
          <div class="play-badge-group">
            <img src="/icons/badge-league.png" alt="" class="play-icon" style="height:70px">
            <img src="/icons/badge-league-txt.png" alt="Mini League" class="play-text-overlay">
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="home-footer">
        <button class="home-logout-btn" id="try-home2-btn" style="background:rgba(212,160,23,0.15);border-color:rgba(212,160,23,0.4);color:#D4A017">🧪 Essayer Home v2</button>
        <button class="home-logout-btn" id="logout-btn">Déconnexion</button>
        ${o.is_admin?`
        <a href="/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:4px 12px;border-radius:8px;font-size:12px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${Lo}</div>`:""}
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var y,x,g,p,u;const d=((y=window.visualViewport)==null?void 0:y.height)||window.innerHeight,c=((x=document.querySelector(".top-nav"))==null?void 0:x.offsetHeight)||56,l=((g=document.querySelector(".bottom-nav"))==null?void 0:g.offsetHeight)||60;if(e.querySelector(".home-inner")){const b=d-c-l;e.querySelector(".home-dark").style.minHeight=b+"px"}if(window.innerWidth<768){const b=((p=e.querySelector(".home-hero"))==null?void 0:p.offsetHeight)||60,w=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const h=((u=e.querySelector(".home-footer"))==null?void 0:u.offsetHeight)||44,E=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((W,te)=>{var Z;return W+(((Z=document.getElementById(te))==null?void 0:Z.offsetHeight)||0)},0),m=12*5,M=d-c-l-b-h-E-m-32,k=Math.max(80,Math.round(M*.28)),I=Math.max(160,Math.round(M*.72)),B=Math.floor((I-10)/2);w&&(w.style.minHeight=w.style.maxHeight=k+"px"),e.querySelectorAll(".play-tile").forEach(W=>{W.style.minHeight=W.style.height=B+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(W=>{W.style.height=Math.round(B*.55)+"px"})}}),(r=document.getElementById("nav-rankings"))==null||r.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(d=>{d.addEventListener("click",()=>{d.style.transform="scale(.96)",setTimeout(()=>d.style.transform="",180);const c=d.dataset.action;if(c==="match-ai"){Ao(i);return}if(c==="match-random"){i("match",{matchMode:"random"});return}if(c==="match-friend"){i("friends");return}if(c==="mini-league"){i("mini-league");return}if(c==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await v.auth.signOut(),window.location.reload()}),(s=document.getElementById("try-home2-btn"))==null||s.addEventListener("click",()=>i("home2")),Bn(t,n),So(t,n,i),jn(t,n,i),To(t,n))}async function To(e,t){const i=e.profile.id,{data:n}=await v.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(n!=null&&n.length))return;const o=n.reduce((a,s)=>a+(s.prize_amount||0),0),r=document.createElement("div");r.className="modal-overlay",r.style.zIndex="2200",r.innerHTML=`<div class="modal" style="max-width:400px">
    <div class="modal-header"><h2 style="color:#1A6B3C">🏆 Gains à récupérer</h2></div>
    <div class="modal-body" style="padding:18px 20px">
      <p style="font-size:14px;color:#555;margin:0 0 14px">Tu as terminé sur le podium de ${n.length>1?"plusieurs mini leagues":"une mini league"} !</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
        ${n.map(a=>{var s;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#f7f7f7;border-radius:10px">
          <span style="font-size:13px;font-weight:700;color:#1a1a1a">${((s=a.mini_leagues)==null?void 0:s.name)||"Mini League"}</span>
          <span style="font-size:13px;font-weight:900;color:#D4A017">+${(a.prize_amount||0).toLocaleString("fr")} cr.</span>
        </div>`}).join("")}
      </div>
      <button id="claim-all-btn" class="btn btn-primary" style="width:100%;margin-bottom:8px">💰 Tout récupérer (+${o.toLocaleString("fr")} cr.)</button>
      <button id="claim-later-btn" class="btn btn-ghost" style="width:100%">Plus tard</button>
    </div>
  </div>`,document.body.appendChild(r),r.querySelector("#claim-later-btn").addEventListener("click",()=>r.remove()),r.querySelector("#claim-all-btn").addEventListener("click",async a=>{const s=a.currentTarget;s.disabled=!0,s.textContent="...";let d=0;for(const c of n){const{data:l}=await v.rpc("claim_mini_league_prize",{p_league_id:c.league_id,p_user_id:i});l!=null&&l.success&&!l.already_claimed&&(d+=l.prize||0)}if(d>0){e.profile.credits=(e.profile.credits||0)+d;const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${e.profile.credits.toLocaleString("fr")}`),t(`💰 +${d.toLocaleString("fr")} cr. récupérés !`,"success")}r.remove()})}async function jn(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const o=e.profile.id,{data:r}=await v.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${o},away_id.eq.${o}`).order("created_at",{ascending:!1});if(!(r!=null&&r.length)){n.innerHTML="";return}const a=r.map(d=>d.home_id===o?d.away_id:d.home_id).filter(Boolean);let s={};if(a.length){const{data:d}=await v.from("users").select("id, pseudo, club_name").in("id",a);(d||[]).forEach(c=>{s[c.id]=c.club_name||c.pseudo})}n.innerHTML=r.map(d=>{const c=d.home_id===o?d.away_id:d.home_id,l=s[c]||"Adversaire",f=d.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${f?"🏆 Mini League":d.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${l}</div>
      </div>
      <button data-resume="${d.id}" data-mini="${f?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${d.id}" data-opp="${c}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(d=>{d.addEventListener("click",async()=>{const c=document.getElementById("page-content")||document.getElementById("app");if(d.dataset.mini==="1"){const{data:l}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",d.dataset.resume).single();l?i("match-mini-league",{mlMatchId:l.id,leagueId:l.league_id}):i("mini-league")}else{const{resumePvpMatch:l}=await Ui(async()=>{const{resumePvpMatch:f}=await Promise.resolve().then(()=>to);return{resumePvpMatch:f}},void 0);l(c,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},d.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(d=>{d.addEventListener("click",()=>{zo(async()=>{await Io(d.dataset.abandon,d.dataset.opp,o),t("Match abandonné (défaite 3-0)","info"),jn(e,t,i)})})})}async function Io(e,t,i){Tt();const{data:n}=await v.from("matches").select("home_id, away_id, game_state, mode").eq("id",e).single();if(!n)return;const o=n.home_id===i,r=o?0:3,a=o?3:0,s=n.game_state||{};s.p1Score=r,s.p2Score=a,s.phase="finished",s.forfeit=!0,await v.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:r,away_score:a,game_state:s}).eq("id",e),n.mode==="mini_league"&&await v.from("mini_league_matches").update({status:"finished",home_score:r,away_score:a}).eq("match_id",e)}function zo(e){const t=document.createElement("div");t.className="modal-overlay",t.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function So(e,t,i){var s,d,c,l;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:o}=await v.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!o){n.innerHTML="";return}const r=((s=o.inviter)==null?void 0:s.club_name)||((d=o.inviter)==null?void 0:d.pseudo)||"?",a=o.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${r} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(c=document.getElementById("match-inv-accept"))==null||c.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:a,friendName:r,isAccepting:!0})}),(l=document.getElementById("match-inv-decline"))==null||l.addEventListener("click",async()=>{await v.from("friend_match_invites").update({status:"declined"}).eq("id",o.id),n.innerHTML="",t("Invitation refusée","info")})}async function Bn(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:o}=await v.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(o||!(n!=null&&n.length)){i.innerHTML="";return}const r=n.length,a=n.slice(0,2).map(d=>{var c;return((c=d.requester)==null?void 0:c.pseudo)||"?"}).join(", "),s=r>2?` +${r-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${r} demande${r>1?"s":""} d'ami${r>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>Ki(e,t,()=>Bn(e,t)))}function Ao(e){const t=[{mode:"vs_ai_easy",label:"Facile",desc:"Pour découvrir le jeu",credits:"500",icon:"🟢",bg:"#eefaf2",border:"#bfe8cf",iconBg:"#1A6B3C",text:"#12401f"},{mode:"vs_ai_medium",label:"Moyen",desc:"Un défi équilibré",credits:"1 000",icon:"🟡",bg:"#fdf7e6",border:"#f0dd9e",iconBg:"#D4A017",text:"#5c4408"},{mode:"vs_ai_hard",label:"Difficile",desc:"Réservé aux experts",credits:"1 500",icon:"🔴",bg:"#fdecec",border:"#f3bcbc",iconBg:"#bb2020",text:"#5c1010"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:400px;border-radius:18px;overflow:hidden">
    <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div style="display:flex;flex-direction:column;gap:10px">
        ${t.map(o=>`
          <div class="diff-card" data-mode="${o.mode}" style="cursor:pointer;display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${o.bg};border:1px solid ${o.border};transition:transform .12s ease, box-shadow .12s ease">
            <div style="width:46px;height:46px;border-radius:12px;background:${o.iconBg};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 4px 10px -4px ${o.iconBg}">${o.icon}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:800;font-size:15px;color:${o.text}">${o.label}</div>
              <div style="font-size:12px;color:${o.text};opacity:0.65;margin-top:1px">${o.desc}</div>
            </div>
            <div style="font-weight:900;font-size:12.5px;color:${o.text};background:rgba(255,255,255,0.6);padding:6px 11px;border-radius:999px;flex-shrink:0;white-space:nowrap">+${o.credits} cr.</div>
          </div>
        `).join("")}
      </div>
    </div>
  </div>`,document.body.appendChild(i),i.querySelectorAll(".diff-card").forEach(o=>{o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)",o.style.boxShadow="0 6px 16px -6px rgba(0,0,0,0.18)"}),o.addEventListener("mouseleave",()=>{o.style.transform="",o.style.boxShadow=""})});const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",o=>{o.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(o=>{o.addEventListener("click",()=>{n(),e("match",{matchMode:o.dataset.mode})})})}const Mo="2026.07.23-1433",Co=[{key:"home2",route:"home2",label:"HOME",icon:"nav-home.png"},{key:"game",route:"game",label:"GAME",emoji:"🎮"},{key:"cards",route:"collection",label:"CARDS",icon:"nav-collection.png"},{key:"decks",route:"decks",label:"DECKS",icon:"nav-decks.png"},{key:"boosters",route:"boosters",label:"BOOSTERS",icon:"nav-boosters.png"},{key:"market",route:"market",label:"MERCATO",icon:"nav-market.png"}];function jo(e,t,i,n){if(!document.getElementById("home2-chrome-style")){const a=document.createElement("style");a.id="home2-chrome-style",a.textContent=`
      body:has(#home2-chrome-marker) .top-nav,
      body:has(#home2-chrome-marker) .bottom-nav { display: none !important; }
      body:has(#home2-chrome-marker) .page { padding-top: var(--v2-header-height, 100px) !important; padding-bottom: 0 !important; }

      .home2-chrome-header {
        position: fixed; top: 0; left: 0; right: 0; z-index: 500;
        display: flex; align-items: center; gap: 14px;
        background: var(--nav-bg); border-bottom: 1px solid var(--tile-border);
        padding: 14px 20px; box-sizing: border-box;
      }
      .home2-chrome-logo { flex-shrink: 0; display: flex; align-items: center; }
      .home2-chrome-logo img { height: 52px; width: auto; display: block; }
      .home2-chrome-tabs { display: flex; gap: 10px; flex: 1; min-width: 0; justify-content: center; overflow-x: auto; scrollbar-width: none; }
      .home2-chrome-tabs::-webkit-scrollbar { display: none; }
      .home2-chrome-tab {
        flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px;
        padding: 12px 22px; border-radius: 14px; cursor: pointer; text-decoration: none;
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
      .home2-chrome-settings {
        width: 40px; height: 40px; border-radius: 50%; border: none;
        background: rgba(255,255,255,0.08); cursor: pointer;
        display: flex; align-items: center; justify-content: center; font-size: 18px; color: rgba(255,255,255,0.8);
      }
      .home2-chrome-settings:hover { background: rgba(255,255,255,0.15); }
      .home2-chrome-credits {
        display: flex; align-items: center; gap: 6px;
        background: rgba(255,255,255,0.06); border: 1px solid var(--tile-border);
        border-radius: 22px; padding: 8px 16px; font-size: 15px; font-weight: 800; color: #f2c94c;
        cursor: pointer; white-space: nowrap;
      }
      .home2-chrome-credits:hover { background: rgba(255,255,255,0.1); }
      .home2-chrome-add {
        width: 36px; height: 36px; border-radius: 50%; border: none;
        background: var(--green); color: #fff; font-size: 20px; font-weight: 900; cursor: pointer;
        display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      }
      .home2-chrome-add:hover { filter: brightness(1.15); }
      @media (max-width: 640px) {
        .home2-chrome-tab { padding: 9px 14px; }
        .home2-chrome-tab img { width: 24px; height: 24px; }
        .home2-chrome-tab-emoji { font-size: 22px; }
        .home2-chrome-logo img { height: 38px; }
      }
    `,document.head.appendChild(a)}let o=document.getElementById("home2-chrome-header");o||(o=document.createElement("div"),o.id="home2-chrome-header",o.className="home2-chrome-header",o.innerHTML=`
      <div id="home2-chrome-marker" style="display:none"></div>
      <div class="home2-chrome-logo"><img src="${n}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-tabs">
        ${Co.map(a=>`
          <a class="home2-chrome-tab" data-route="${a.route}" data-key="${a.key}">
            ${a.icon?`<img src="${n}${a.icon}">`:`<span class="home2-chrome-tab-emoji">${a.emoji}</span>`}${a.label}
          </a>`).join("")}
      </div>
      <div class="home2-chrome-right">
        <button class="home2-chrome-settings" id="home2-chrome-settings-btn">⚙️</button>
        <div class="home2-chrome-credits" id="home2-chrome-credits">💰 ${(t.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-add" id="home2-chrome-add-btn">+</button>
      </div>
    `,document.body.appendChild(o),o.querySelectorAll(".home2-chrome-tab").forEach(a=>{a.addEventListener("click",()=>{o.querySelectorAll(".home2-chrome-tab").forEach(s=>s.classList.remove("active")),a.classList.add("active"),e(a.dataset.route)})}),o.querySelector("#home2-chrome-settings-btn").addEventListener("click",()=>e("settings")),o.querySelector("#home2-chrome-credits").addEventListener("click",()=>e("boosters")),o.querySelector("#home2-chrome-add-btn").addEventListener("click",()=>e("boosters"))),o.querySelectorAll(".home2-chrome-tab").forEach(a=>a.classList.toggle("active",a.dataset.key===i));const r=o.querySelector("#home2-chrome-credits");r&&(r.textContent=`💰 ${(t.credits||0).toLocaleString("fr")}`),requestAnimationFrame(()=>{document.documentElement.style.setProperty("--v2-header-height",o.offsetHeight+"px")})}function xn(){var e,t;(e=document.getElementById("home2-chrome-header"))==null||e.remove(),(t=document.getElementById("home2-chrome-style"))==null||t.remove()}function Bo(e){if(!e)return"";const t=Date.now()-new Date(e).getTime(),i=Math.floor(t/6e4);if(i<1)return"à l'instant";if(i<60)return`il y a ${i}min`;const n=Math.floor(i/60);if(n<24)return`il y a ${n}h`;const o=Math.floor(n/24);return o<7?`il y a ${o}j`:new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"short"})}function qo(e,t){if(!isFinite(t.max))return"";const i=t.max-t.min+1,n=Math.floor((e-t.min)/(i/3));return["III","II","I"][Math.min(2,Math.max(0,n))]}async function Do(e){const{data:t}=await v.from("users").select("id,pseudo,club_name,mmr").order("mmr",{ascending:!1}).limit(5),i=t||[],n=i.some(r=>r.id===e);let o=null;if(!n){const{data:r}=await v.from("users").select("mmr").eq("id",e).single();if(r){const{count:a}=await v.from("users").select("id",{count:"exact",head:!0}).gt("mmr",r.mmr||0);o=(a||0)+1}}return{list:i,iAmInTop:n,myPosition:o}}async function Fo(e=4){const{data:t}=await v.from("patch_notes").select("id,title,description,image_url,published_at").eq("is_published",!0).order("published_at",{ascending:!1}).limit(e);return t||[]}async function Po(){const{data:e}=await v.from("booster_configs").select("id,name,icon,price_type,price_credits,card_count").eq("is_active",!0).order("created_at",{ascending:!1}).limit(5);return e||[]}async function Go(){const{data:e}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const o=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${n.image_url?`<img src="${n.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${o}</div>
      <div style="font-size:15px;font-weight:900;margin-bottom:6px">${n.title}</div>
      <div style="font-size:13px;color:#444;line-height:1.6;white-space:pre-line">${n.description}</div>
    </div>`}).join("");t.innerHTML=`
    <div style="background:#fff;border-radius:16px;width:100%;max-width:460px;max-height:85vh;display:flex;flex-direction:column;overflow:hidden">
      <div style="display:flex;align-items:center;padding:16px 20px;border-bottom:1px solid #f0f0f0;flex-shrink:0">
        <span style="font-size:22px;margin-right:10px">📰</span>
        <div style="flex:1;font-size:17px;font-weight:900">Journal des mises à jour</div>
        <button id="journal-close-v2" style="background:none;border:none;font-size:22px;cursor:pointer;color:#888;padding:0 4px">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:0 20px">
        ${i||'<div style="padding:40px;text-align:center;color:#aaa">Aucune mise à jour pour le moment.</div>'}
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close-v2").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function Ro(e,{state:t,navigate:i,toast:n}){var m,M,k,I,B,W,te,Z,A;const o=t.profile;if(!o)return;const r="/icons/";jo(i,o,"home2",r);const a=o.mmr??1e3,s=vi(a),d=qo(a,s),c=zn(a),l=isFinite(s.max)?s.max+1:null,[{list:f,iAmInTop:y,myPosition:x},g,p]=await Promise.all([Do(o.id),Fo(5),Po()]),u=($,N)=>`
    <div class="rk-row ${$.id===o.id?"rk-row-me":""}">
      <div class="rk-pos ${N<3?"rk-pos-top"+(N+1):""}">${N<3?["🥇","🥈","🥉"][N]:N+1}</div>
      <div class="rk-name ${$.id===o.id?"rk-name-me":""}">${$.pseudo}</div>
      <div class="rk-rp">${($.mmr??0).toLocaleString("fr")} RP</div>
    </div>`,b=$=>`
    <div class="news-item">
      ${$.image_url?`<img src="${$.image_url}" class="news-thumb" onerror="this.style.display='none'">`:'<div class="news-thumb news-thumb-fallback">📰</div>'}
      <div class="news-body">
        <div class="news-title">${$.title}</div>
        <div class="news-desc">${$.description||""}</div>
        <div class="news-time">${Bo($.published_at)}</div>
      </div>
    </div>`;let w=0;const h=$=>`
    <div class="promo-icon-wrap">
      <img src="${r}${$.icon||"nav-boosters.png"}" class="promo-icon" onerror="this.style.display='none'">
    </div>
    <div class="promo-info">
      <div class="promo-kicker">NOUVEAU BOOSTER</div>
      <div class="promo-title">${$.name}</div>
      <div class="promo-desc">${$.card_count||5} cartes · ${$.price_type==="pub"?"Pub gratuite":($.price_credits||0).toLocaleString("fr")+" cr."}</div>
    </div>`;e.innerHTML=`
  <style>
    .home-dark {
      min-height: 100%;
      background: var(--page-bg);
      background-image: var(--page-gradient);
      display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
      padding: 16px 16px 80px; box-sizing: border-box; overflow-y: auto;
    }
    .home-inner { width: 100%; max-width: 560px; display: flex; flex-direction: column; gap: 14px; }

    /* ── Profil ── */
    .profile-row { display: flex; align-items: center; gap: 12px; }
    .profile-badge {
      width: 46px; height: 46px; border-radius: 12px; flex-shrink: 0;
      background: linear-gradient(135deg, ${o.club_color1}cc, ${o.club_color2}88);
      border: 1.5px solid ${o.club_color2};
      display: flex; align-items: center; justify-content: center;
      font-weight: 900; font-size: 19px; color: #fff;
    }
    .profile-info { flex: 1; min-width: 0; }
    .profile-info .name-row { display:flex; align-items:center; gap:6px; }
    .profile-info h3 { margin: 0; font-size: 17px; font-weight: 900; color: var(--tile-fg-on-page); }
    .profile-edit-btn { background:none; border:none; cursor:pointer; font-size:12px; opacity:.55; padding:0; color: var(--tile-fg-dim); }
    .profile-edit-btn:hover { opacity:1; }
    .profile-info .club { display:flex; align-items:center; gap:5px; font-size: 11px; color: var(--tile-fg-dim); margin-top: 2px; letter-spacing:.3px; }
    .profile-info .club .dot { width:6px; height:6px; border-radius:50%; background: var(--green-light); flex-shrink:0; }
    .profile-settings-btn {
      width: 34px; height: 34px; border-radius: 50%; border: none;
      background: rgba(255,255,255,0.08); cursor: pointer; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center; font-size: 16px; color: var(--tile-fg-dim);
    }
    .profile-settings-btn:hover { background: rgba(255,255,255,0.15); }

    /* ── Rank card ── */
    .rank-card {
      background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 16px;
      padding: 14px 16px; display: flex; flex-direction: column; gap: 8px;
    }
    .rank-top-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }
    .rank-tier-block .rank-label { font-size: 10px; font-weight: 900; color: var(--tile-fg-dim); letter-spacing: 1.5px; }
    .rank-tier-block .rank-tier-value { font-size: 20px; font-weight: 900; color: ${s.color}; margin-top: 1px; }
    .rank-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
    .rank-rp-label { font-size: 11px; color: var(--tile-fg-dim); white-space: nowrap; }
    .rank-inline-link {
      display: inline-flex; align-items: center; gap: 4px;
      background: rgba(255,255,255,0.06); border: 1px solid var(--tile-border);
      color: var(--tile-fg-on-page); font-size: 11px; font-weight: 700;
      border-radius: 8px; padding: 4px 9px; cursor: pointer; white-space: nowrap;
    }
    .rank-inline-link:hover { filter: brightness(1.2); }
    .rank-progress-track { width: 100%; height: 7px; border-radius: 4px; background: rgba(255,255,255,0.08); overflow: hidden; }
    .rank-progress-fill { height: 100%; border-radius: 4px; background: linear-gradient(90deg, ${s.color}99, ${s.color}); transition: width .4s; }

    .profile-view-btn {
      display: none; width: 100%; align-items:center; justify-content:center; gap:8px;
      background: rgba(255,255,255,0.05); border: 1px solid var(--tile-border);
      color: var(--tile-fg-on-page); font-size: 12px; font-weight: 700; border-radius: 10px;
      padding: 10px; cursor: pointer;
    }
    .profile-view-btn:hover { filter: brightness(1.15); }

    /* ── Classement mini-widget (PC uniquement) ── */
    .ranking-widget {
      display: none;
      background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 16px;
      padding: 14px 16px; flex-direction: column; gap: 6px;
    }
    .ranking-widget-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:4px; }
    .ranking-widget-header h4 { margin:0; font-size:12px; font-weight:900; color: var(--tile-fg-on-page); letter-spacing:1px; }
    .ranking-widget-header a { font-size: 11px; color: var(--green-light); font-weight:700; cursor:pointer; text-decoration:none; }
    .rk-row { display:flex; align-items:center; gap:10px; padding:6px 0; }
    .rk-row-me { background: rgba(26,107,60,0.18); border-radius: 8px; margin: 0 -8px; padding: 6px 8px; }
    .rk-pos {
      width: 24px; height: 24px; border-radius: 50%; flex-shrink:0;
      background: rgba(255,255,255,0.06); color: var(--tile-fg-dim);
      display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:900;
    }
    .rk-pos-top1 { background:#D4A017; color:#000; }
    .rk-pos-top2 { background:#a0a0a0; color:#000; }
    .rk-pos-top3 { background:#cd7f32; color:#000; }
    .rk-name { flex:1; min-width:0; font-size:12px; font-weight:700; color: var(--tile-fg-on-page); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .rk-name-me { color: var(--green-light); }
    .rk-rp { font-size: 12px; font-weight:900; color: var(--tile-fg-dim); flex-shrink:0; }
    .ranking-widget-cta {
      display:flex; align-items:center; justify-content:center; gap:6px;
      width:100%; margin-top:6px; background: rgba(255,255,255,0.05); border:1px solid var(--tile-border);
      color: var(--tile-fg-on-page); font-size:12px; font-weight:700; border-radius:10px; padding:9px; cursor:pointer;
    }
    .ranking-widget-cta:hover { filter: brightness(1.15); }

    /* ── Section Jouer ── */
    .play-section-header { display:flex; align-items:center; justify-content:center; gap:10px; margin: 2px 0; }
    .play-section-header h4 { margin:0; font-size:14px; font-weight:900; letter-spacing:3px; color: var(--tile-fg-on-page); }
    .play-section-header .slashes { color: var(--green-light); font-weight:900; font-size:15px; letter-spacing:1px; }

    .play-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; }
    .play-tile {
      grid-column: span 2;
      border-radius: 16px; background: var(--tile-bg); border: 1px solid var(--tile-border);
      cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 12px 8px;
      transition: transform .15s, filter .15s; backdrop-filter: blur(4px); text-align:center; gap:2px;
    }
    .play-tile:hover { filter: brightness(1.15); }
    .play-tile:active { transform: scale(.96); }
    .play-tile img.tile-icon { height: 46px; object-fit:contain; }
    .play-tile .tile-label { font-size: 13px; font-weight: 900; color: var(--tile-fg-on-page); letter-spacing:.5px; margin-top:2px; }
    .play-tile .tile-desc { display:none; font-size: 10px; color: var(--tile-fg-dim); line-height:1.3; margin-top:2px; }

    .play-tile-big { grid-column: span 3; padding: 16px 10px; }
    .play-tile-big img.tile-icon { height: 56px; }
    .play-tile-big .tile-label { font-size: 15px; }
    .tile-mini-league { background: linear-gradient(135deg, #2d0a6e 0%, #4a1a8a 50%, #6a28b8 100%); border: 1.5px solid rgba(122,40,184,0.6); box-shadow: 0 4px 20px rgba(122,40,184,0.3); }
    .tile-ranked { background: linear-gradient(135deg, #4a3a05 0%, #8a6a10 50%, #D4A017 100%); border: 1.5px solid rgba(212,160,23,0.6); box-shadow: 0 4px 20px rgba(212,160,23,0.25); }

    /* ── Bannière promo booster ── */
    .promo-banner {
      background: linear-gradient(135deg, #14261a 0%, #0d1a12 100%);
      border: 1px solid rgba(212,160,23,0.3); border-radius: 16px;
      padding: 16px; display:flex; align-items:center; gap:14px; position: relative; overflow:hidden;
    }
    .promo-icon-wrap { width:56px; height:56px; flex-shrink:0; display:flex; align-items:center; justify-content:center; background:rgba(212,160,23,0.12); border-radius:12px; border:1px solid rgba(212,160,23,0.3); }
    .promo-icon { max-width:70%; max-height:70%; object-fit:contain; }
    .promo-info { flex:1; min-width:0; }
    .promo-kicker { font-size:10px; font-weight:900; color:#D4A017; letter-spacing:1px; }
    .promo-title { font-size:16px; font-weight:900; color:#fff; margin-top:2px; }
    .promo-desc { font-size:11px; color:rgba(255,255,255,0.55); margin-top:2px; }
    .promo-cta {
      background: var(--green); color:#fff; border:none; border-radius:10px;
      padding:9px 14px; font-size:12px; font-weight:900; cursor:pointer; flex-shrink:0;
      display:flex; align-items:center; gap:5px; white-space:nowrap;
    }
    .promo-cta:hover { filter: brightness(1.2); }
    .promo-dots { position:absolute; bottom:6px; left:50%; transform:translateX(-50%); display:flex; gap:4px; }
    .promo-dot { width:5px; height:5px; border-radius:50%; background: rgba(255,255,255,0.25); transition: background .2s; cursor:pointer; }
    .promo-dot.active { background: #D4A017; }

    /* ── Actualités ── */
    .news-widget { background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 16px; padding: 14px 16px; display:flex; flex-direction:column; gap: 8px; }
    .news-widget-header { display:flex; align-items:center; justify-content:space-between; }
    .news-widget-header h4 { margin:0; font-size:13px; font-weight:900; color: var(--tile-fg-on-page); letter-spacing:.5px; }
    .news-widget-header a { font-size: 11px; color: var(--green-light); font-weight:700; cursor:pointer; text-decoration:none; }
    .news-item { display:flex; gap:10px; padding: 7px 0; border-top: 1px solid rgba(255,255,255,0.05); }
    .news-item:first-of-type { border-top:none; }
    .news-thumb { width:46px; height:46px; border-radius:8px; object-fit:cover; flex-shrink:0; }
    .news-thumb-fallback { background: rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:center; font-size:18px; }
    .news-body { flex:1; min-width:0; }
    .news-title { font-size:12.5px; font-weight:900; color: var(--tile-fg-on-page); }
    .news-desc { font-size:11px; color: var(--tile-fg-dim); margin-top:1px; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; }
    .news-time { font-size:10px; color: rgba(255,255,255,0.35); margin-top:3px; }

    .home-footer { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 4px 0; }
    .home-logout-btn {
      background: var(--tile-bg); border: 1px solid var(--tile-border); border-radius: 20px;
      color: var(--tile-fg-dim); font-size: 12px; padding: 6px 18px; cursor: pointer; transition: filter .2s;
    }
    .home-logout-btn:hover { filter: brightness(1.15); }

    /* ── Structure : colonne unique par défaut (mobile) ── */
    .home2-dash { display:flex; flex-direction:column; gap:14px; }
    .home2-col-left, .home2-col-center, .home2-col-right { display:contents; }

    /* ══════════ MODE PC (≥1024px) ══════════ */
    @media (min-width: 1024px) {
      .home-inner { max-width: 1180px; }
      .home2-dash { display:grid; grid-template-columns: 300px 1fr 320px; gap: 20px; align-items:start; }
      .home2-col-left, .home2-col-center, .home2-col-right { display:flex; flex-direction:column; gap: 14px; }
      .rank-inline-link { display: none; }
      .profile-view-btn { display: flex; }
      .ranking-widget { display: flex; }
      .play-tile .tile-desc { display: block; }
      .play-tile { padding: 16px 10px; }
      .play-tile img.tile-icon { height: 60px; }
      .play-tile-big img.tile-icon { height: 72px; }
      .home-footer { flex-direction: row; justify-content: space-between; width: 100%; padding: 10px 4px; }
    }
  </style>

  <div class="home-dark" id="home-dark">
    <div class="home-inner">
      <!-- Bannières dynamiques -->
      <div id="friend-requests-banner"></div>
      <div id="match-invite-banner"></div>
      <div id="ongoing-match-banner"></div>

      <div class="home2-dash">

        <!-- Colonne gauche : profil + rang + classement -->
        <div class="home2-col-left">
          <div class="profile-row">
            <div class="profile-badge">${o.level}</div>
            <div class="profile-info">
              <div class="name-row"><h3>${o.pseudo}</h3><button class="profile-edit-btn" id="nav-edit-btn">✏️</button></div>
              <div class="club"><span class="dot"></span>${(o.club_name||"").toUpperCase()}</div>
            </div>
            <button class="profile-settings-btn" id="nav-settings-btn">⚙️</button>
          </div>

          <div class="rank-card">
            <div class="rank-top-row">
              <div class="rank-tier-block">
                <div class="rank-label">🛡️ RANKED</div>
                <div class="rank-tier-value">${s.label.toUpperCase()}${d?" "+d:""}</div>
              </div>
              <div class="rank-right">
                <div class="rank-rp-label">${a.toLocaleString("fr")}${l?" / "+l.toLocaleString("fr"):""} RP</div>
                <button class="rank-inline-link" id="rank-inline-link-btn">📊 Classement</button>
              </div>
            </div>
            <div class="rank-progress-track"><div class="rank-progress-fill" style="width:${c}%"></div></div>
          </div>

          <button class="profile-view-btn" id="nav-profile-btn">Voir mon profil 📤</button>

          <div class="ranking-widget">
            <div class="ranking-widget-header"><h4>CLASSEMENT</h4><a id="nav-rankings-link">Voir plus</a></div>
            ${f.map(($,N)=>u($,N)).join("")}
            ${!y&&x?`
              <div class="rk-row rk-row-me" style="border-top:1px solid var(--tile-border);margin-top:2px;padding-top:8px">
                <div class="rk-pos">${x}</div>
                <div class="rk-name rk-name-me">${o.pseudo}</div>
                <div class="rk-rp">${a.toLocaleString("fr")} RP</div>
              </div>`:""}
            <button class="ranking-widget-cta" id="nav-rankings-cta">📊 Voir le classement</button>
          </div>
        </div>

        <!-- Colonne centrale : Jouer + promo -->
        <div class="home2-col-center">
          <div class="play-section-header"><span class="slashes">///</span><h4>JOUER</h4><span class="slashes">///</span></div>

          <div class="play-grid">
            <div class="play-tile" data-action="match-ai">
              <img src="${r}badge-ai.png" class="tile-icon">
              <div class="tile-label">VS IA</div>
              <div class="tile-desc">Affrontez l'intelligence artificielle</div>
            </div>
            <div class="play-tile" data-action="match-random">
              <img src="${r}badge-random.png" class="tile-icon">
              <div class="tile-label">RANDOM</div>
              <div class="tile-desc">Affrontez un adversaire aléatoire</div>
            </div>
            <div class="play-tile" data-action="match-friend">
              <img src="${r}badge-vs.png" class="tile-icon">
              <div class="tile-label">AMI</div>
              <div class="tile-desc">Affrontez un ami</div>
            </div>
            <div class="play-tile play-tile-big tile-mini-league" data-action="mini-league">
              <img src="${r}badge-league.png" class="tile-icon">
              <div class="tile-label">MINI LEAGUE</div>
              <div class="tile-desc">Participez à des ligues</div>
            </div>
            <div class="play-tile play-tile-big tile-ranked" data-action="ranked">
              <img src="${r}badge-ranked.png" class="tile-icon">
              <div class="tile-label">RANKED</div>
              <div class="tile-desc">Grimpez dans le classement</div>
            </div>
          </div>

          ${p.length?`
          <div class="promo-banner" id="promo-banner">
            <div id="promo-slide-content" style="display:flex;align-items:center;gap:14px;flex:1;min-width:0">
              ${h(p[0])}
            </div>
            <button class="promo-cta" id="promo-cta-btn">✅ Ouvrir des boosters</button>
            ${p.length>1?`<div class="promo-dots">${p.map(($,N)=>`<div class="promo-dot ${N===0?"active":""}" data-dot="${N}"></div>`).join("")}</div>`:""}
          </div>`:""}
        </div>

        <!-- Colonne droite : Actualités -->
        <div class="home2-col-right">
          <div class="news-widget">
            <div class="news-widget-header"><h4>ACTUALITÉS</h4><a id="nav-journal-link">Voir tout</a></div>
            ${g.length?g.map(b).join(""):'<div style="font-size:11px;color:var(--tile-fg-dim);padding:8px 0">Aucune actualité pour le moment.</div>'}
          </div>
        </div>

      </div>

      <!-- Footer -->
      <div class="home-footer">
        <div style="display:flex;align-items:center;gap:8px;background:rgba(212,160,23,0.15);border:1px solid rgba(212,160,23,0.4);border-radius:20px;padding:5px 14px;font-size:11px;font-weight:700;color:#D4A017">
          🧪 HOME V2 (BÊTA)
          <button id="back-to-v1-btn" style="background:none;border:none;color:#D4A017;text-decoration:underline;cursor:pointer;font-size:11px;font-weight:700;padding:0">← Revenir à v1</button>
          <span id="mode-indicator" style="border-left:1px solid rgba(212,160,23,0.4);padding-left:8px;margin-left:2px"></span>
        </div>
        <button class="home-logout-btn" id="logout-btn">Déconnexion</button>
        ${o.is_admin?`
        <a href="/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:4px 12px;border-radius:8px;font-size:12px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${Mo}</div>`:""}
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var C;const $=((C=window.visualViewport)==null?void 0:C.height)||window.innerHeight,N=document.getElementById("home2-chrome-header"),X=N?N.offsetHeight:0,ce=$-X,fe=e.querySelector(".home-dark");fe&&(fe.style.minHeight=ce+"px")});const E=()=>{const $=document.getElementById("mode-indicator");$&&($.textContent=window.innerWidth>=1024?"🖥️ Mode PC":"📱 Mode Mobile")};if(E(),window.addEventListener("resize",E),(m=document.getElementById("nav-settings-btn"))==null||m.addEventListener("click",()=>i("settings")),(M=document.getElementById("nav-edit-btn"))==null||M.addEventListener("click",()=>i("settings")),(k=document.getElementById("nav-profile-btn"))==null||k.addEventListener("click",()=>i("settings")),(I=document.getElementById("nav-rankings-link"))==null||I.addEventListener("click",()=>i("rankings")),(B=document.getElementById("nav-rankings-cta"))==null||B.addEventListener("click",()=>i("rankings")),(W=document.getElementById("rank-inline-link-btn"))==null||W.addEventListener("click",()=>i("rankings")),(te=document.getElementById("nav-journal-link"))==null||te.addEventListener("click",()=>Go()),e.querySelectorAll("[data-action]").forEach($=>{$.addEventListener("click",()=>{$.style.transform="scale(.96)",setTimeout(()=>$.style.transform="",180);const N=$.dataset.action;if(N==="match-ai"){Ko(i);return}if(N==="match-random"){i("match",{matchMode:"random"});return}if(N==="match-friend"){i("friends");return}if(N==="mini-league"){i("mini-league");return}if(N==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),p.length>1){const $=document.getElementById("promo-slide-content"),N=()=>Array.from(document.querySelectorAll(".promo-dot")),X=ce=>{w=ce,$&&($.innerHTML=h(p[w])),N().forEach((fe,C)=>fe.classList.toggle("active",C===w))};setInterval(()=>X((w+1)%p.length),5e3),document.querySelectorAll(".promo-dot").forEach(ce=>{ce.addEventListener("click",()=>X(Number(ce.dataset.dot)))})}(Z=document.getElementById("promo-cta-btn"))==null||Z.addEventListener("click",()=>i("boosters")),document.getElementById("logout-btn").addEventListener("click",async()=>{xn(),await v.auth.signOut(),window.location.reload()}),(A=document.getElementById("back-to-v1-btn"))==null||A.addEventListener("click",()=>{xn(),i("home")}),Dn(t,n),Uo(t,n,i),qn(t,n,i),No(t,n)}async function No(e,t){const i=e.profile.id,{data:n}=await v.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(n!=null&&n.length))return;const o=n.reduce((a,s)=>a+(s.prize_amount||0),0),r=document.createElement("div");r.className="modal-overlay",r.style.zIndex="2200",r.innerHTML=`<div class="modal" style="max-width:400px">
    <div class="modal-header"><h2 style="color:#1A6B3C">🏆 Gains à récupérer</h2></div>
    <div class="modal-body" style="padding:18px 20px">
      <p style="font-size:14px;color:#555;margin:0 0 14px">Tu as terminé sur le podium de ${n.length>1?"plusieurs mini leagues":"une mini league"} !</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
        ${n.map(a=>{var s;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#f7f7f7;border-radius:10px">
          <span style="font-size:13px;font-weight:700;color:#1a1a1a">${((s=a.mini_leagues)==null?void 0:s.name)||"Mini League"}</span>
          <span style="font-size:13px;font-weight:900;color:#D4A017">+${(a.prize_amount||0).toLocaleString("fr")} cr.</span>
        </div>`}).join("")}
      </div>
      <button id="claim-all-btn" class="btn btn-primary" style="width:100%;margin-bottom:8px">💰 Tout récupérer (+${o.toLocaleString("fr")} cr.)</button>
      <button id="claim-later-btn" class="btn btn-ghost" style="width:100%">Plus tard</button>
    </div>
  </div>`,document.body.appendChild(r),r.querySelector("#claim-later-btn").addEventListener("click",()=>r.remove()),r.querySelector("#claim-all-btn").addEventListener("click",async a=>{const s=a.currentTarget;s.disabled=!0,s.textContent="...";let d=0;for(const c of n){const{data:l}=await v.rpc("claim_mini_league_prize",{p_league_id:c.league_id,p_user_id:i});l!=null&&l.success&&!l.already_claimed&&(d+=l.prize||0)}if(d>0){e.profile.credits=(e.profile.credits||0)+d;const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${e.profile.credits.toLocaleString("fr")}`),t(`💰 +${d.toLocaleString("fr")} cr. récupérés !`,"success")}r.remove()})}async function qn(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const o=e.profile.id,{data:r}=await v.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${o},away_id.eq.${o}`).order("created_at",{ascending:!1});if(!(r!=null&&r.length)){n.innerHTML="";return}const a=r.map(d=>d.home_id===o?d.away_id:d.home_id).filter(Boolean);let s={};if(a.length){const{data:d}=await v.from("users").select("id, pseudo, club_name").in("id",a);(d||[]).forEach(c=>{s[c.id]=c.club_name||c.pseudo})}n.innerHTML=r.map(d=>{const c=d.home_id===o?d.away_id:d.home_id,l=s[c]||"Adversaire",f=d.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${f?"🏆 Mini League":d.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${l}</div>
      </div>
      <button data-resume="${d.id}" data-mini="${f?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${d.id}" data-opp="${c}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(d=>{d.addEventListener("click",async()=>{const c=document.getElementById("page-content")||document.getElementById("app");if(d.dataset.mini==="1"){const{data:l}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",d.dataset.resume).single();l?i("match-mini-league",{mlMatchId:l.id,leagueId:l.league_id}):i("mini-league")}else{const{resumePvpMatch:l}=await Ui(async()=>{const{resumePvpMatch:f}=await Promise.resolve().then(()=>to);return{resumePvpMatch:f}},void 0);l(c,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},d.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(d=>{d.addEventListener("click",()=>{Ho(async()=>{await Oo(d.dataset.abandon,d.dataset.opp,o),t("Match abandonné (défaite 3-0)","info"),qn(e,t,i)})})})}async function Oo(e,t,i){Tt();const{data:n}=await v.from("matches").select("home_id, away_id, game_state, mode").eq("id",e).single();if(!n)return;const o=n.home_id===i,r=o?0:3,a=o?3:0,s=n.game_state||{};s.p1Score=r,s.p2Score=a,s.phase="finished",s.forfeit=!0,await v.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:r,away_score:a,game_state:s}).eq("id",e),n.mode==="mini_league"&&await v.from("mini_league_matches").update({status:"finished",home_score:r,away_score:a}).eq("match_id",e)}function Ho(e){const t=document.createElement("div");t.className="modal-overlay",t.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Uo(e,t,i){var s,d,c,l;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:o}=await v.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!o){n.innerHTML="";return}const r=((s=o.inviter)==null?void 0:s.club_name)||((d=o.inviter)==null?void 0:d.pseudo)||"?",a=o.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${r} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(c=document.getElementById("match-inv-accept"))==null||c.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:a,friendName:r,isAccepting:!0})}),(l=document.getElementById("match-inv-decline"))==null||l.addEventListener("click",async()=>{await v.from("friend_match_invites").update({status:"declined"}).eq("id",o.id),n.innerHTML="",t("Invitation refusée","info")})}async function Dn(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:o}=await v.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(o||!(n!=null&&n.length)){i.innerHTML="";return}const r=n.length,a=n.slice(0,2).map(d=>{var c;return((c=d.requester)==null?void 0:c.pseudo)||"?"}).join(", "),s=r>2?` +${r-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${r} demande${r>1?"s":""} d'ami${r>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>Ki(e,t,()=>Dn(e,t)))}function Ko(e){const t=[{mode:"vs_ai_easy",label:"Facile",desc:"Pour découvrir le jeu",credits:"500",icon:"🟢",bg:"#eefaf2",border:"#bfe8cf",iconBg:"#1A6B3C",text:"#12401f"},{mode:"vs_ai_medium",label:"Moyen",desc:"Un défi équilibré",credits:"1 000",icon:"🟡",bg:"#fdf7e6",border:"#f0dd9e",iconBg:"#D4A017",text:"#5c4408"},{mode:"vs_ai_hard",label:"Difficile",desc:"Réservé aux experts",credits:"1 500",icon:"🔴",bg:"#fdecec",border:"#f3bcbc",iconBg:"#bb2020",text:"#5c1010"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:400px;border-radius:18px;overflow:hidden">
    <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div style="display:flex;flex-direction:column;gap:10px">
        ${t.map(o=>`
          <div class="diff-card" data-mode="${o.mode}" style="cursor:pointer;display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${o.bg};border:1px solid ${o.border};transition:transform .12s ease, box-shadow .12s ease">
            <div style="width:46px;height:46px;border-radius:12px;background:${o.iconBg};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 4px 10px -4px ${o.iconBg}">${o.icon}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:800;font-size:15px;color:${o.text}">${o.label}</div>
              <div style="font-size:12px;color:${o.text};opacity:0.65;margin-top:1px">${o.desc}</div>
            </div>
            <div style="font-weight:900;font-size:12.5px;color:${o.text};background:rgba(255,255,255,0.6);padding:6px 11px;border-radius:999px;flex-shrink:0;white-space:nowrap">+${o.credits} cr.</div>
          </div>
        `).join("")}
      </div>
    </div>
  </div>`,document.body.appendChild(i),i.querySelectorAll(".diff-card").forEach(o=>{o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)",o.style.boxShadow="0 6px 16px -6px rgba(0,0,0,0.18)"}),o.addEventListener("mouseleave",()=>{o.style.transform="",o.style.boxShadow=""})});const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",o=>{o.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(o=>{o.addEventListener("click",()=>{n(),e("match",{matchMode:o.dataset.mode})})})}async function Fn(e,t){const{navigate:i}=t,n=ao(),o=Wi();e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px">
      <button id="settings-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:var(--nav-fg,#fff)">‹</button>
      <div style="font-size:18px;font-weight:900;color:var(--nav-fg,#fff)">⚙️ Réglages</div>
    </div>

    <div style="padding:16px;display:flex;flex-direction:column;gap:14px;max-width:520px;margin:0 auto">

      <div style="background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:14px;padding:18px">
        <div style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page);margin-bottom:4px">🎨 Apparence</div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Choisis le thème de l'application.</div>
        <div style="display:flex;gap:10px">
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
          <div id="volume-label" style="font-size:14px;font-weight:900;color:#D4A017">${o}%</div>
        </div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Musiques et effets sonores de l'app.</div>
        <input id="volume-slider" type="range" min="0" max="100" step="5" value="${o}"
          style="width:100%;accent-color:#1A6B3C;cursor:pointer;margin-bottom:14px">
        <button id="volume-test" class="btn" style="width:100%;padding:11px;border-radius:10px;border:1.5px solid var(--tile-border);background:transparent;color:var(--tile-fg-on-page);font-weight:700;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">
          🎵 Tester le son
        </button>
      </div>

      <button id="settings-logout" class="btn" style="width:100%;padding:14px;border-radius:12px;border:1.5px solid #ff6b6b;background:transparent;color:#ff6b6b;font-weight:700;font-size:14px;cursor:pointer;margin-top:6px">
        Déconnexion
      </button>

    </div>
  </div>`,e.querySelector("#settings-back").addEventListener("click",()=>i("home")),e.querySelectorAll("[data-theme-choice]").forEach(d=>{d.addEventListener("click",()=>{La(d.dataset.themeChoice),Fn(e,t)})});const r=e.querySelector("#volume-slider"),a=e.querySelector("#volume-label");let s=null;r.addEventListener("input",()=>{Eo(Number(r.value)),a.textContent=`${r.value}%`,s&&(s.volume=Math.max(0,Math.min(1,Number(r.value)/100)))}),e.querySelector("#volume-test").addEventListener("click",()=>{s=Ji("/sounds/match-opening.mp3",1)}),e.querySelector("#settings-logout").addEventListener("click",async()=>{await v.auth.signOut(),window.location.reload()})}const je={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Pe(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const yn=["ATT","MIL","DEF","GK"];function Pn(e,t,i){if(!e||!t)return!1;if(i&&e.position&&t.position)return Oi(i).some(([l,f])=>l===e.position&&f===t.position||l===t.position&&f===e.position);const n=e._col!=null&&t._col!=null&&e._col===t._col,o=e._col!=null&&t._col!=null&&Math.abs(e._col-t._col)===1,r=yn.indexOf(e._line||e.job),a=yn.indexOf(t._line||t.job),s=Math.abs(r-a)===1;return(e._line||e.job)===(t._line||t.job)&&o||n&&s}function Gn(e,t){let i=0;const n=e.length;for(let o=0;o<n;o++)for(let r=o+1;r<n;r++){const a=e[o],s=e[r];if(!a||!s||!Pn(a,s,t))continue;const d=Ut(a,s);d==="#00ff88"?i+=10:d==="#FFD700"&&(i+=5)}return i}function oi(e,t={},i){let n=0,o=0;e.forEach(d=>{const c=d._line||d.job,l=Number(c==="MIL"?d.note_m:d.note_a)||0,f=d.stadiumBonus&&(c==="MIL"||c==="ATT")?10:0;n+=t.doubleAttack?l*2:l,o+=(d.boost||0)+f});const r=n+o,a=Gn(e,i);let s=r+a;return t.stolenNote&&(s-=t.stolenNote),{base:r,links:a,total:Math.max(0,s)}}function ri(e,t={},i){const n=e.reduce((a,s)=>{const d=s._line||s.job;let c=0;d==="GK"?c=Number(s.note_g)||0:d==="MIL"?c=Number(s.note_m)||0:c=Number(s.note_d)||0;const l=s.stadiumBonus&&(d==="GK"||d==="DEF"||d==="MIL")?10:0;return a+c+(s.boost||0)+l},0),o=Gn(e,i);let r=n+o;return t.stolenNote&&(r-=t.stolenNote),{base:n,links:o,total:Math.max(0,r)}}function Qi(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Rn(e,t,i="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const o=[...n].sort((a,s)=>{const d=t==="attack"?Pe(a,"ATT"):a._line==="GK"?Pe(a,"GK"):Pe(a,"DEF");return(t==="attack"?Pe(s,"ATT"):s._line==="GK"?Pe(s,"GK"):Pe(s,"DEF"))-d});let r=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return o.slice(0,Math.min(r,o.length,3))}function Vo(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Yo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ii={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},di=["GK","DEF","MIL","ATT"],Wo=["Tous","GK","DEF","MIL","ATT"],Xo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function bn(e){const t=e.player;return t?(t.rarity,Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)):null}function Jo(e){return e.length?e.reduce((t,i)=>bn(i)>bn(t)?i:t,e[0]):e[0]}const Qo={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function li(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function zi(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,o={...i,_evolution_bonus:n},r=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${r}
    ${Ie(o,{width:140})}
  </div>`}function hn(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${Ie(e,{width:140})}
  </div>`}async function Zo(e,t){const{state:i,navigate:n,toast:o,openModal:r,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await v.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:d}=await v.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),c=(s||[]).filter(L=>L.card_type==="player"&&L.player),l=(s||[]).filter(L=>L.card_type==="game_changer"),f=(s||[]).filter(L=>L.card_type==="formation"),y=(s||[]).filter(L=>L.card_type==="stadium"),{data:x}=await v.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(x||[]).forEach(L=>{g[L.name]=L});const{data:p}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),u={};(p||[]).forEach(L=>{u[L.id]=L}),y.forEach(L=>{L.stadium_def&&(u[L.stadium_id]=L.stadium_def)});const b=Object.keys(Hi),w=Object.keys(je),h={};c.forEach(L=>{const F=L.player.id;h[F]=(h[F]||0)+1}),new Set(Object.keys(h).map(L=>String(L)));const E=new Set(f.map(L=>L.formation)),m=new Set(l.map(L=>L.gc_type));let M="player",k="Tous",I="",B=!1;function W(){return[...c].sort((L,F)=>{const U=di.indexOf(L.player.job),O=di.indexOf(F.player.job);return U!==O?U-O:(L.player.surname_real||"").localeCompare(F.player.surname_real||"")})}function te(){return[...d||[]].sort((L,F)=>{const U=di.indexOf(L.job),O=di.indexOf(F.job);return U!==O?U-O:(L.surname_real||"").localeCompare(F.surname_real||"")})}function Z(){return W().filter(L=>{const F=L.player,U=k==="Tous"||F.job===k,O=!I||`${F.firstname} ${F.surname_real}`.toLowerCase().includes(I);return U&&O})}function A(){return te().filter(L=>{const F=k==="Tous"||L.job===k,U=!I||`${L.firstname} ${L.surname_real}`.toLowerCase().includes(I);return F&&U})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--tile-border);background:var(--tile-bg)">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${M==="player"?"var(--green)":"transparent"};
        color:${M==="player"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${M==="formation"?"var(--green)":"transparent"};
        color:${M==="formation"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${f.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${M==="gc"?"var(--green)":"transparent"};
        color:${M==="gc"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${l.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${M==="stadium"?"#4FC3F7":"transparent"};
        color:${M==="stadium"?"#4FC3F7":"var(--tile-fg-dim)"}">
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
  </div>`,function(F){const U=document.getElementById(F);if(!U)return;U.addEventListener("wheel",de=>{Math.abs(de.deltaY)<=Math.abs(de.deltaX)||(de.preventDefault(),U.scrollLeft+=de.deltaY)},{passive:!1});let O=!1,re=0,q=0,G=!1,se=!1;U.addEventListener("mousedown",de=>{O=!0,G=!1,re=de.pageX,q=U.scrollLeft}),window.addEventListener("mouseup",()=>{O=!1,G&&(U.style.cursor="",se=!0),G=!1}),window.addEventListener("mousemove",de=>{if(!O)return;const ve=de.pageX-re;!G&&Math.abs(ve)<6||(G=!0,U.style.cursor="grabbing",de.preventDefault(),U.scrollLeft=q-ve)}),U.addEventListener("click",de=>{se&&(de.stopPropagation(),de.preventDefault(),se=!1)},!0)}("col-grid");function $(){const L=document.getElementById("col-filters");L&&(M==="player"?(L.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${I}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Wo.map(F=>`
            <button class="filter-btn" data-job="${F}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${F===k?"var(--green)":"var(--tile-border)"};
                background:${F===k?"var(--green)":"#fff"};
                color:${F===k?"#fff":"var(--tile-fg-dim)"}">
              ${F}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${B?"var(--yellow)":"var(--tile-border)"};
              background:${B?"var(--yellow)":"#fff"};
              color:${B?"#111":"var(--tile-fg-dim)"}; font-size:18px; padding:5px 10px">
            ${B?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",F=>{I=F.target.value.toLowerCase(),N()}),e.querySelectorAll(".filter-btn").forEach(F=>{F.addEventListener("click",()=>{k=F.dataset.job,$(),N()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{B=!B,$(),N()})):(L.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${B?"var(--yellow)":"var(--tile-border)"};
              background:${B?"var(--yellow)":"#fff"};
              color:${B?"#111":"var(--tile-fg-dim)"}; font-size:18px; padding:5px 10px">
            ${B?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{B=!B,$(),N()})))}function N(){const L=document.getElementById("col-grid");L&&(M==="player"?Y(L):M==="formation"?ue(L):M==="stadium"?V(L):K(L))}function X(L,F,U,O,re,q=0){const G=document.getElementById("col-grid"),se=document.getElementById("col-big");if(!G||!se)return;var de=0;function ve(){var ct;const Te=window.innerWidth>=768,he=document.getElementById("col-big"),ze=document.getElementById("col-gap"),Se=((ct=document.getElementById("col-grid"))==null?void 0:ct.parentElement)||null,Be=he?he.closest(".page"):null;if(he&&Se&&Be){let $e=0;Array.from(Be.children).forEach(function(j){j!==he&&j!==Se&&j!==ze&&($e+=j.offsetHeight)});const Ce=Math.max(0,Be.clientHeight-$e),qe=Math.round(Ce*(q/100)),Ge=Math.max(0,Ce-qe),_=Te?50/71:45/63,T=Math.round(Ge*_),S=Math.max(0,Ge-T);ze&&(ze.style.height=qe+"px"),he.style.flex="none",he.style.height=T+"px",he.style.minHeight="0",Se.style.flex="none",Se.style.height=S+"px",Se.style.minHeight="0",Se.style.display="flex",Se.style.overflow="hidden"}const ke=document.getElementById("col-grid");ke&&(ke.style.height="100%",ke.style.flexShrink="0",ke.style.overflowX="auto",ke.style.overflowY="hidden",ke.style.alignItems="center",ke.style.width="100%"),se.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+F(L[de])+"</div>";var _t=se.querySelector("[data-card-id],[data-form-id],[data-gc-id]");_t&&_t.addEventListener("click",function(){O(L[de])}),requestAnimationFrame(function(){var $e=document.getElementById("big-card-inner");if(!(!$e||!se)){var Ce=se.clientHeight,qe=se.clientWidth-16,Ge=$e.offsetHeight,_=$e.offsetWidth;if(Ge>0&&_>0&&Ce>40){var T=Math.min(Ce/Ge,qe/_);$e.style.transform="scale("+T.toFixed(3)+")",$e.style.transformOrigin="center center"}}}),G.innerHTML=L.map(function($e,Ce){var qe=Ce===de,Ge="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(qe?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Ce+'" style="'+Ge+'">'+U($e,qe)+"</div>"}).join(""),G.querySelectorAll(".col-mini-item").forEach(function($e){$e.addEventListener("click",function(){de=Number($e.dataset.idx),ve(),$e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var $e=ke?ke.clientHeight:0,Ce=G.querySelector(".col-mini-item > div");if(!(!$e||!Ce)){var qe=Ce.style.zoom;Ce.style.zoom="1";var Ge=Ce.offsetHeight;if(Ce.style.zoom=qe,!(Ge<=0)){var _=$e/Ge;G.querySelectorAll(".col-mini-item > div").forEach(function(T){T.style.zoom=_.toFixed(4)})}}})}ve()}function ce(L,F){var U=window.innerWidth>=768?.76:.54,O;if(!L||L._fake){var re=L?L.player:null;if(!re)return"";O=hn(re)}else O=zi(L,"");var q=L&&!L._fake?h[L.player&&L.player.id]||1:0,G=q>0?'<div style="position:absolute;top:6px;right:6px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:11px;font-weight:900;padding:2px 7px;z-index:3;box-shadow:0 1px 4px rgba(0,0,0,0.4)">×'+q+"</div>":"";return'<div style="display:inline-block;position:relative;zoom:'+U+';pointer-events:none;line-height:0">'+G+O+"</div>"}function fe(L,F,U){var O=U>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+U+"</div>":"",re=!!F,q=Mi(L,Mt[L],{width:160});return re||(q='<div style="filter:grayscale(1);opacity:0.5">'+q+"</div>"),"<div "+(F?'data-form-id="'+F.id+'"':"")+' style="position:relative;cursor:pointer">'+O+q+"</div>"}function C(L,F){var U=window.innerWidth>=768?.76:.54,O=Mi(L,Mt[L],{width:140});return F||(O='<div style="filter:grayscale(1);opacity:0.45">'+O+"</div>"),'<div style="display:inline-block;zoom:'+U+';line-height:0;pointer-events:none">'+O+"</div>"}function Y(L){if(B){const F=A();if(!F.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const U=F.map(O=>c.find(re=>re.player.id===O.id)||{_fake:!0,player:O,id:"fake-"+O.id});X(U,O=>O._fake?hn(O.player):zi(O,""),O=>O._fake?ce({player:O.player,id:"x",_fake:!0}):ce(O),O=>{O._fake||vn(O,c,h,t)})}else{const F=Z();if(!F.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const U={};F.forEach(re=>{const q=re.player.id;U[q]||(U[q]=[]),U[q].push(re)});const O=Object.values(U).map(re=>Jo(re));X(O,re=>{const q=h[re.player.id]||1,G=q>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${q}</div>`:"",de=c.filter(ve=>ve.player.id===re.player.id&&ve.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return zi(re,G+de)},re=>ce(re),re=>vn(re,c,h,t))}}function ue(L){const F=B?b:[...E];if(!F.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const U=F.map(O=>({formation:O,card:f.find(re=>re.formation===O)||null,owned:E.has(O)}));X(U,({formation:O,card:re,owned:q})=>fe(O,q?re:null,q?f.filter(G=>G.formation===O).length:0),({formation:O,owned:re})=>C(O,re),({card:O,owned:re})=>{re&&O&&tr(O,f,t,r)},"#1A6B3C",5)}function K(L){const F=Object.keys(g),U=B?F.length?F:w:[...m];if(!U.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const O=U.map(re=>({type:re,gc:je[re]||{icon:"⚡",desc:""},def:g[re]||null,owned:m.has(re),card:l.find(q=>q.gc_type===re)||null}));X(O,({type:re,gc:q,def:G,owned:se,card:de})=>{var ke;const ve=(G==null?void 0:G.name)||re,Te=se?l.filter(_t=>_t.gc_type===re).length:0,he=Te>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Te}</div>`:"",ze=(G==null?void 0:G.effect)||q.desc||"",Se=G!=null&&G.image_url?`/icons/${G.image_url}`:((ke=G==null?void 0:G.club)==null?void 0:ke.logo_url)||(G!=null&&G.country_code?`https://flagsapi.com/${G.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);let Be=tt(ve,Se,q.icon,ze,{width:160,onClick:se});return se||(Be=`<div style="filter:grayscale(1);opacity:0.5">${Be}</div>`),`<div ${se&&de?`data-gc-id="${de.id}" data-gc-type="${re}"`:""} style="position:relative">${he}${Be}</div>`},({type:re,gc:q,def:G,owned:se})=>{const de=window.innerWidth>=768?.76:.54,ve=(G==null?void 0:G.name)||re,Te=(G==null?void 0:G.effect)||q.desc||"",he=G!=null&&G.image_url?`/icons/${G.image_url}`:null;let ze=tt(ve,he,q.icon,Te,{width:140});return se||(ze=`<div style="filter:grayscale(1);opacity:0.45">${ze}</div>`),`<div style="display:inline-block;zoom:${de};line-height:0;pointer-events:none">${ze}</div>`},({type:re,owned:q,def:G})=>{q&&er(re,G,r)},"#7a28b8",5)}function V(L){const F="#4FC3F7",U="/";if(!y.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const O={};y.forEach(q=>{const G=q.stadium_id||"?";(O[G]=O[G]||[]).push(q)});const re=Object.entries(O).map(([q,G])=>({sid:q,def:u[q]||null,count:G.length,card:G[0]}));X(re,({def:q,count:G})=>{var ze,Se;const se=(q==null?void 0:q.name)||"?",de=((ze=q==null?void 0:q.club)==null?void 0:ze.encoded_name)||(q==null?void 0:q.country_code)||"—",ve=q!=null&&q.image_url?`${U}icons/${q.image_url}`:((Se=q==null?void 0:q.club)==null?void 0:Se.logo_url)||(q!=null&&q.country_code?`https://flagsapi.com/${q.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Te=G>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${G}</div>`:"",he=`${de}<br>+10 ⭐ joueurs alliés`;return`<div style="position:relative">${Te}${ti(se,ve,he,{width:160})}</div>`},({def:q})=>{var he,ze;const G=window.innerWidth>=768?.76:.54,se=(q==null?void 0:q.name)||"?",de=((he=q==null?void 0:q.club)==null?void 0:he.encoded_name)||(q==null?void 0:q.country_code)||"—",ve=q!=null&&q.image_url?`${U}icons/${q.image_url}`:((ze=q==null?void 0:q.club)==null?void 0:ze.logo_url)||(q!=null&&q.country_code?`https://flagsapi.com/${q.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Te=`${de}<br>+10 ⭐`;return`<div style="display:inline-block;zoom:${G};line-height:0;pointer-events:none">${ti(se,ve,Te,{width:140})}</div>`},null,F,5)}e.querySelectorAll(".col-tab-btn").forEach(L=>{L.addEventListener("click",()=>{M=L.dataset.tab,k="Tous",I="",B=!1,e.querySelectorAll(".col-tab-btn").forEach(F=>{const U=F.dataset.tab===M;F.style.borderBottomColor=U?"var(--green)":"transparent",F.style.color=U?"var(--green)":"var(--tile-fg-dim)"}),$(),N()})}),$(),N()}function er(e,t,i){const n=je[e]||{icon:"⚡",desc:"Effet spécial."},o=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||n.desc,a=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      ${tt(o,a,n.icon,r,{width:200})}
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ci=1e3;function tr(e,t,i,n){var g,p,u;const{state:o,toast:r,closeModal:a,navigate:s,refreshProfile:d}=i,c=e.formation,l={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const b=Mt[c]||{},w=Hi[c]||[],h=290,E=360,m=20;function M(I){const B=b[I];return B?{x:B.x*h,y:B.y*E}:null}let k=`<svg width="${h}" height="${E}" viewBox="0 0 ${h} ${E}" xmlns="http://www.w3.org/2000/svg">`;for(const[I,B]of w){const W=M(I),te=M(B);!W||!te||(k+=`<line x1="${W.x}" y1="${W.y}" x2="${te.x}" y2="${te.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const I of Object.keys(b)){const B=M(I);if(!B)continue;const W=I.replace(/\d+/,""),te=l[W]||"#555";k+=`<circle cx="${B.x}" cy="${B.y}" r="${m}" fill="${te}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,k+=`<text x="${B.x}" y="${B.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${W}</text>`}return k+="</svg>",k}const y=t.filter(b=>b.formation===c);y.length;const x=!e.is_for_sale;n(`Formation ${c}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${ci}"
          style="flex:1;padding:8px;border:1.5px solid var(--tile-border);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(g=document.getElementById("direct-sell-form-btn"))==null||g.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${c} pour ${ci.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const b=y.find(h=>!h.is_for_sale)||y[0];if(!b){r("Aucune carte à vendre","error");return}await v.from("market_listings").delete().eq("card_id",b.id),await v.from("transfer_history").delete().eq("card_id",b.id);const{error:w}=await v.from("cards").delete().eq("id",b.id);if(w){r(w.message,"error");return}await v.from("users").update({credits:(o.profile.credits||0)+ci}).eq("id",o.profile.id),await d(),r(`+${ci.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const b=parseInt(document.getElementById("sell-price-form").value);if(!b||b<1){r("Prix invalide","error");return}await v.from("cards").update({is_for_sale:!0,sale_price:b}).eq("id",e.id),await v.from("market_listings").insert({seller_id:o.profile.id,card_id:e.id,price:b}),r("Carte mise en vente sur le marché !","success"),a(),s("collection")}),(u=document.getElementById("cancel-sell-form-btn"))==null||u.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),r("Annonce retirée","success"),a(),s("collection")})}async function vn(e,t,i,n){var ce,fe,C,Y,ue;const{state:o,toast:r,openModal:a,closeModal:s,navigate:d,refreshProfile:c}=n,l=e.player,f=t.filter(K=>K.player.id===l.id),y=f.length,x=e.evolution_bonus||0,g=Math.max((Number(l.note_g)||0)+(l.job==="GK"||l.job2==="GK"?x:0),(Number(l.note_d)||0)+(l.job==="DEF"||l.job2==="DEF"?x:0),(Number(l.note_m)||0)+(l.job==="MIL"||l.job2==="MIL"?x:0),(Number(l.note_a)||0)+(l.job==="ATT"||l.job2==="ATT"?x:0)),p=l.rarity||"normal",{data:u}=await v.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",g).gte("note_max",g).order("note_min",{ascending:!1}).limit(1);((ce=u==null?void 0:u[0])==null?void 0:ce.price)??Xo[p];const b=l.rarity!=="legende";At(l);const w=li(l,l.job)+x,h=l.job2?li(l,l.job2)+(li(l,l.job2)>0?x:0):null;Ii[l.job],l.job2&&Ii[l.job2];const E=Yo[l.rarity]||"#ccc";Qo[l.country_code]||l.country_code;const m=e.evolution_bonus||0,k=w+m,I=h||0,B=I>0?I+m:0,W=f.map(K=>K.id);let te={};if(W.length){const{data:K}=await v.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",W).order("transferred_at",{ascending:!0});(K||[]).forEach(V=>{te[V.card_id]||(te[V.card_id]=[]),te[V.card_id].push(V)})}const Z=W.length?`
    <div style="margin-top:16px;border-top:1px solid var(--tile-border);padding-top:14px">
      ${y-1>0?`<div style="font-size:13px;font-weight:700;margin-bottom:10px">🗂️ Copies (${y-1})</div>`:'<div style="font-size:12px;color:#aaa;margin-bottom:6px;font-style:italic">Aucune copie à sacrifier</div>'}
      <!-- Grille de mini-cartes (copies uniquement, l'exemplaire 1 = carte principale affichée en haut) -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${f.filter(K=>K.id!==e.id).map((K,V)=>{const L=te[K.id]||[],F=K.is_for_sale,U=L.length?L[L.length-1]:null,O=K.evolution_bonus||0,re=U?U.source==="booster"?"Booster":U.price?U.price.toLocaleString("fr")+" cr.":"—":"—",q=U?new Date(U.transferred_at).toLocaleDateString("fr",{day:"2-digit",month:"2-digit",year:"numeric"}):"",G=80,se=Math.round(G*657/507),de=Ie({...l,_evolution_bonus:O},{width:G});return`
            <div class="exemplaire-row" data-card-id="${K.id}" data-card-idx="${V}"
              style="position:relative;cursor:${F?"not-allowed":"pointer"};opacity:${F?.55:1};transition:transform .1s">
              <!-- Checkbox cachée -->
              <input type="checkbox" class="expl-check"
                data-id="${K.id}" data-evo="${O}" data-note="${li(l,l.job)}"
                ${F?"disabled":""}
                style="display:none">
              <!-- Wrapper exactement aux dimensions de la carte -->
              <div class="expl-mini-card" style="position:relative;width:${G}px;height:${se}px;border-radius:8px;overflow:hidden">
                ${de}
                <!-- Overlay vert sélection — couvre toute la carte -->
                <div class="expl-sel-overlay" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(26,107,60,0.38);pointer-events:none;z-index:10;box-shadow:inset 0 0 0 3px #1A6B3C;border-radius:8px"></div>
                <!-- Checkmark -->
                <div class="expl-sel-check" style="display:none;position:absolute;top:5px;left:5px;width:20px;height:20px;background:#1A6B3C;border-radius:50%;z-index:11;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:900">✓</div>
                ${F?'<div style="position:absolute;top:0;right:0;background:#e67e22;color:#fff;font-size:6px;font-weight:900;padding:2px 4px;border-radius:0 6px 0 4px;z-index:12">VENTE</div>':""}
              </div>
              <!-- Source + date -->
              <div style="font-size:9px;color:#888;text-align:center;margin-top:3px;line-height:1.3">
                ${re}${q?`<br>${q}`:""}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${k}${l.job2&&I>0?` / ${B}`:""}`:`Note actuelle : ${k}${l.job2&&I>0?` / ${B}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${y<=1?"#ccc":"#1A6B3C"};border-color:${y<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${y<=1?"not-allowed":"pointer"}"
            ${y<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${b?`
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
      ${Ie({...l,_evolution_bonus:x},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${E}">${l.rarity.toUpperCase()}</div>
          ${l.rarity==="pepite"||l.rarity==="papyte"?`
          <div style="margin-top:6px;background:${E}18;border-left:3px solid ${E};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${E};margin-bottom:2px">✨ Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5">
              ${l.rarity==="pepite"?'⬆️ Bonus évolution : <b style="color:#D4A017">+30%</b>':'⬇️ Malus évolution : <b style="color:#909090">-30%</b>'}
            </div>
          </div>`:""}
        </div>
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${l.job}${l.job2?" / "+l.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",l.note_g],["DEF",l.note_d],["MIL",l.note_m],["ATT",l.note_a]].map(([K,V])=>{const L=Ii[K],F=K==="GK"?"#fff":L,U=K===l.job||K===l.job2,O=(Number(V)||0)+(U&&m>0?m:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${L};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${F};font-family:Arial Black,Arial;line-height:1">${O}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${F}">${K}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${y}</div>
        </div>
      </div>
    </div>
    ${Z}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(fe=document.getElementById("close-detail"))==null||fe.addEventListener("click",s);let A=new Set;const $=l.rarity==="pepite"?1.3:l.rarity==="papyte"?.7:1;function N(){let K=0;return document.querySelectorAll(".expl-check:checked").forEach(V=>{if(V.dataset.id===e.id)return;const F=Number(V.dataset.evo)||0,U=Number(V.dataset.note)||0;K+=U+F}),Math.round(K*$)}const X=()=>{const K=A.size,V=document.getElementById("sell-action-panel");if(!V)return;V.style.display=K>0?"block":"none",document.getElementById("sell-selected-count").textContent=K;const L=document.getElementById("evolve-btn");if(L){const F=N();L.textContent=F>0?`⬆️ Évoluer (+${F})`:"⬆️ Évoluer"}};document.querySelectorAll(".expl-check").forEach(K=>{K.addEventListener("change",()=>{const V=K.dataset.id;K.checked?A.add(V):A.delete(V);const L=K.closest(".exemplaire-row");if(L){const F=L.querySelector(".expl-sel-overlay"),U=L.querySelector(".expl-sel-check");F&&(F.style.display=K.checked?"block":"none"),U&&(U.style.display=K.checked?"flex":"none"),L.style.transform=K.checked?"scale(1.05)":"scale(1)"}X()})}),document.querySelectorAll(".exemplaire-row").forEach(K=>{K.addEventListener("click",V=>{if(V.target.tagName==="INPUT")return;const L=K.querySelector(".expl-check");L&&!L.disabled&&(L.checked=!L.checked,L.dispatchEvent(new Event("change")))})}),(C=document.getElementById("evolve-btn"))==null||C.addEventListener("click",async()=>{if(y<=1)return;const K=[...A];if(!K.length)return;if(A.has(e.id)){const G=document.createElement("div");G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",G.innerHTML=`
        <div style="background:var(--tile-bg);border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(G),G.querySelector("#err-close").addEventListener("click",()=>G.remove()),G.addEventListener("click",se=>{se.target===G&&G.remove()});return}const V=K.filter(G=>G!==e.id);if(!V.length){r("Sélectionne des copies à sacrifier","warning");return}const L=V.reduce((G,se)=>{const de=document.querySelector(`.expl-check[data-id="${se}"]`),ve=de&&Number(de.dataset.evo)||0,Te=de&&Number(de.dataset.note)||0;return G+Te+ve},0),F=Math.round(L*$),U=l.rarity==="pepite"?" (+30% pépite ✨)":l.rarity==="papyte"?" (-30% papyte)":"";if(!await new Promise(G=>{const se=document.createElement("div");se.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",se.innerHTML=`
        <div style="background:var(--tile-bg);border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${l.firstname} ${l.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${V.length}</strong> copie${V.length>1?"s":""} sacrifiée${V.length>1?"s":""}<br>
            ➕ Brut : <strong>+${L}</strong>${U?`<span style="font-size:11px;color:#888"> ${U}</span>`:""}<br>
            ⬆️ Bonus final : <strong style="color:#1A6B3C">+${F}</strong><br>
            📈 Évolution : <strong>${e.evolution_bonus||0}</strong> → <strong style="color:#1A6B3C">${(e.evolution_bonus||0)+F}</strong><br>
            📊 Note finale : <strong>${w}</strong> → <strong style="color:#1A6B3C">${w+F}</strong>
            ${h&&h>0?`<br>📊 Note 2 finale : <strong>${h}</strong> → <strong style="color:#1A6B3C">${h+F}</strong>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:var(--tile-bg);font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(se),se.querySelector("#sac-cancel").addEventListener("click",()=>{se.remove(),G(!1)}),se.querySelector("#sac-ok").addEventListener("click",()=>{se.remove(),G(!0)}),se.addEventListener("click",de=>{de.target===se&&(se.remove(),G(!1))})}))return;if(V.length){await v.from("market_listings").delete().in("card_id",V),await v.from("deck_cards").delete().in("card_id",V),await v.from("transfer_history").delete().in("card_id",V),await v.from("decks").update({stadium_card_id:null}).in("stadium_card_id",V);const{error:G}=await v.from("cards").delete().in("id",V);if(G){r("Erreur suppression : "+G.message,"error");return}}const re=(e.evolution_bonus||0)+F,{error:q}=await v.from("cards").update({evolution_bonus:re}).eq("id",e.id);if(q){r("Erreur évolution : "+q.message,"error");return}r(`⬆️ ${l.firstname} ${l.surname_real} : note ${w} → ${w+re} (+${F}) !`,"success",4e3),s(),d("collection")}),(Y=document.getElementById("market-sell-btn"))==null||Y.addEventListener("click",async()=>{var O;const K=[...A];if(!K.length){r("Sélectionne au moins un exemplaire","warning");return}const V=parseInt((O=document.getElementById("sell-market-price"))==null?void 0:O.value);if(!V||V<1){r("Prix invalide","error");return}const{error:L}=await v.from("cards").update({is_for_sale:!0,sale_price:V}).in("id",K);if(L){r(L.message,"error");return}const F=K.map(re=>({seller_id:o.profile.id,card_id:re,price:V,status:"active"})),{error:U}=await v.from("market_listings").insert(F);U&&console.warn("[Market] insert listings:",U.message),r(`${K.length} carte${K.length>1?"s":""} mise${K.length>1?"s":""} en vente à ${V.toLocaleString("fr")} cr. chacune !`,"success"),s(),d("collection")}),(ue=document.getElementById("cancel-sell-btn"))==null||ue.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),r("Annonce retirée","success"),s(),d("collection")})}function wn(e,t=""){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${e}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(t||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const o=n.querySelector("#pm-input");o.focus(),o.select();const r=a=>{n.remove(),i(a)};n.querySelector("#pm-ok").addEventListener("click",()=>r(o.value.trim()||null)),n.querySelector("#pm-cancel").addEventListener("click",()=>r(null)),n.querySelector("#pm-cancel2").addEventListener("click",()=>r(null)),n.addEventListener("click",a=>{a.target===n&&r(null)}),o.addEventListener("keydown",a=>{a.key==="Enter"&&r(o.value.trim()||null),a.key==="Escape"&&r(null)})})}function ir(e,t=!1){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${e}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${t?"":"btn-primary"}" id="cm-ok" style="${t?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const o=r=>{n.remove(),i(r)};n.querySelector("#cm-ok").addEventListener("click",()=>o(!0)),n.querySelector("#cm-cancel").addEventListener("click",()=>o(!1)),n.addEventListener("click",r=>{r.target===n&&o(!1)})})}const mi={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function ji(e,t){const{state:i,navigate:n,toast:o}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await v.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(r==null?void 0:r.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(r==null?void 0:r.length)>0?r.map(a=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=await wn("Nom du deck",`Deck ${((r==null?void 0:r.length)||0)+1}`);if(!a)return;const{data:s,error:d}=await v.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(d){o(d.message,"error");return}o("Deck créé !","success"),_n(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>_n(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const s=await wn("Nouveau nom",a.dataset.name);if(!s||s===a.dataset.name)return;const{error:d}=await v.from("decks").update({name:s}).eq("id",a.dataset.rename);if(d){o(d.message,"error");return}o("Deck renommé !","success"),ji(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!await ir(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`,!0))return;await v.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:s}=await v.from("decks").delete().eq("id",a.dataset.delete);if(s){o(s.message,"error");return}o("Deck supprimé.","success"),ji(e,t)})})}async function _n(e,t,i){const{state:n,toast:o}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await v.from("decks").select("*").eq("id",e).single(),{data:a}=await v.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:s}=await v.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),d=(a||[]).filter(b=>b.card_type==="player"&&b.player),c=(a||[]).filter(b=>b.card_type==="formation"),l=(s||[]).filter(b=>b.card_type==="stadium"),f=[...new Set(l.map(b=>b.stadium_id).filter(Boolean))];let y={};if(l.forEach(b=>{b.stadium_def&&b.stadium_id&&(y[b.stadium_id]=b.stadium_def)}),f.length&&Object.keys(y).length<f.length){const{data:b}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",f);(b||[]).forEach(w=>{y[w.id]=w})}const x=c.map(b=>b.formation).filter(Boolean),{data:g}=await v.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=r.formation||"4-4-2";x.length>0&&!x.includes(p)&&(p=x[0]);const u={deckId:e,name:r.name,formation:p,formationCardId:r.formation_card_id,stadiumCardId:r.stadium_card_id||null,slots:{},subs:[],playerCards:d,formationCards:c,stadiumCards:l,stadDefMap:y,availableFormations:x};(g||[]).forEach(b=>{b.is_starter?u.slots[b.position]=b.card_id:u.subs.includes(b.card_id)||u.subs.push(b.card_id)}),wt(t,u,i)}function wt(e,t,i){var g,p;const{navigate:n}=i;mi[t.formation];const o=kn(t.formation),r=o.filter(u=>t.slots[u]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(mi),s=(g=t.stadiumCards)==null?void 0:g.find(u=>u.id===t.stadiumCardId),d=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.subs.map(u=>t.playerCards.find(b=>b.id===u)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <style>.no-scrollbar::-webkit-scrollbar{display:none}</style>
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:8px;padding:6px 12px;min-height:0">
      <button class="btn-icon" id="builder-back" style="font-size:16px">←</button>
      <div style="flex:1">
        <h2 style="font-size:14px;margin:0">${t.name}</h2>
        <p style="font-size:11px;margin:0">${r}/11 · ${t.subs.length}/5 rempl.</p>
      </div>
    </div>



    <!-- ── LAYOUT PC ─────────────────────────────────────── -->
    <div class="deck-pc-layout" style="display:none">
      <div style="display:flex;gap:0;min-height:600px">

        <!-- Remplaçants (colonne gauche) -->
        <div style="width:105px;flex-shrink:0;background:rgba(0,0,0,0.3);display:flex;flex-direction:column;align-items:center;padding:12px 6px;gap:8px;border-right:1px solid rgba(255,255,255,0.1)">


          <!-- Remplaçants PC : colonne verticale -->
          <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;text-align:center;margin-top:8px">Remplaçants<br>(${t.subs.length}/5)</div>
          <div style="display:flex;flex-direction:column;gap:6px;align-items:center" id="subs-list">
            ${c.map(u=>{const b={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:24px">
                ${Ie({...b,_evolution_bonus:b._evolution_bonus||0},{width:90,showStad:!0,stadDef:d})}
                <button data-remove-sub="${u.id}"
                  style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:20px;height:20px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
              </div>`}).join("")}
            ${t.subs.length<5?'<div id="add-sub-btn" style="width:90px;height:117px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:18px;color:rgba(255,255,255,0.4);cursor:pointer">+</div>':""}
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
            <div id="formation-pc-btn" style="cursor:pointer;width:100px;height:50px;border-radius:8px;background:#1a3a6b;border:2px solid #555;display:flex;align-items:center;justify-content:center;margin:0 auto">
              <span style="font-size:18px;font-weight:900;color:#fff">${t.formation}</span>
            </div>
          </div>
          <!-- Stade -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">🏟️ Stade</div>
            <div id="add-stad-btn-pc" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${s?(()=>{var w;const u=t.stadDefMap[s.stadium_id],b=((w=u==null?void 0:u.club)==null?void 0:w.logo_url)||(u==null?void 0:u.image_url)||null;return ti((u==null?void 0:u.name)||"Stade",b,"+10 ⭐",{width:100})})():`<div style="width:100px;height:171px;border:2px dashed rgba(79,195,247,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
                <span style="font-size:36px">🏟️</span>
                <span style="font-size:10px;color:rgba(255,255,255,0.4)">Ajouter</span>
              </div>`}
            </div>
          </div>
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
        <div style="display:flex;gap:10px;align-items:flex-start">
          <!-- Remplaçants mobile -->
          <div style="flex:1;min-width:0">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">Remplaçants (${t.subs.length}/5)</div>
            <div style="display:flex;gap:4px;align-items:center;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none" id="subs-list" class="no-scrollbar">
              ${c.map(u=>{const b={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:20px">
                  ${Ie({...b,_evolution_bonus:b._evolution_bonus||0},{width:66,showStad:!0,stadDef:d})}
                  <button data-remove-sub="${u.id}"
                    style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:16px;height:16px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
                </div>`}).join("")}
              ${t.subs.length<5?'<div id="add-sub-btn" style="width:66px;height:85px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:16px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
            </div>
          </div>
          <!-- Formation mobile -->
          <div style="flex-shrink:0;text-align:center">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">⚽</div>
            <div id="formation-mobile-btn" style="cursor:pointer;width:66px;height:86px;border-radius:6px;background:#1A6B3C;border:2px solid #2ecc71;display:flex;align-items:center;justify-content:center">
              <span style="font-size:11px;font-weight:900;color:#fff;text-align:center">${t.formation}</span>
            </div>
          </div>
          <!-- Stade mobile : à droite -->
          <div style="flex-shrink:0;text-align:center">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">🏟️</div>
            <div id="add-stad-btn" style="cursor:pointer">
              ${s?(()=>{var w;const u=t.stadDefMap[s.stadium_id],b=((w=u==null?void 0:u.club)==null?void 0:w.logo_url)||(u==null?void 0:u.image_url)||null;return ti((u==null?void 0:u.name)||"Stade",b,"+10⭐",{width:66})})():`<div style="width:66px;height:86px;border:2px dashed rgba(79,195,247,0.5);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
                <span style="font-size:18px">🏟️</span>
                <span style="font-size:8px;color:rgba(255,255,255,0.4)">+</span>
              </div>`}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body" style="padding-bottom:20px">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${r<11?"disabled":""}>
        ${r<11?`Placez encore ${11-r} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`;const l=window.innerWidth>=900,f=e.querySelector(".deck-pc-layout"),y=e.querySelector(".deck-mobile-layout");f&&(f.style.display=l?"block":"none"),y&&(y.style.display=l?"none":"block"),nr(e,t,o,i),e.querySelectorAll("#builder-back").forEach(u=>u.addEventListener("click",()=>n("decks")));const x=()=>{const{openModal:u,closeModal:b}=i,w=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${a.map(h=>`<div data-forma="${h}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${h===t.formation?"#1A6B3C":"#f0f0f0"};color:${h===t.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${h===t.formation?"#1A6B3C":"#ddd"}">${h}</div>`).join("")}
    </div>`;u("⚽ Choisir une formation",w),document.querySelectorAll("#modal-body [data-forma]").forEach(h=>{h.addEventListener("click",()=>{t.formation=h.dataset.forma;const E=kn(t.formation),m={};E.forEach(M=>{t.slots[M]&&(m[M]=t.slots[M])}),t.slots=m,b(),wt(e,t,i)})})};e.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(u=>u.addEventListener("click",x)),e.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(u=>u.addEventListener("click",()=>or(t,e,i))),e.querySelectorAll("#save-deck").forEach(u=>u.addEventListener("click",()=>sr(t,i))),e.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{t.subs=t.subs.filter(b=>b!==u.dataset.removeSub),wt(e,t,i)})}),e.querySelectorAll("#add-sub-btn").forEach(u=>u.addEventListener("click",()=>ar(t,e,i)))}function nr(e,t,i,n){var h,E,m;const o=window.innerWidth>=900,r=e.querySelector(o?"#deck-field-pc":"#deck-field-mobile");if(!r)return;const a=(h=t.stadiumCards)==null?void 0:h.find(M=>M.id===t.stadiumCardId),s=a&&((E=t.stadDefMap)==null?void 0:E[a.stadium_id])||null,d=Mt[t.formation]||{},c=Oi(t.formation)||[],l={};for(const M of i){const k=t.slots[M],I=k?t.playerCards.find(B=>B.id===k):null;I!=null&&I.player?l[M]={...I.player,_evolution_bonus:I.evolution_bonus||0,face:I.player.face||null}:l[M]=null}const f=window.innerWidth>=900,y=f?window.innerWidth-280:window.innerWidth-20,x=f?Math.min(y,860):y,g=Math.round(f?x*.82:x*.85),p=f?84:44;let u="";for(const[M,k]of c){const I=d[M],B=d[k];if(!I||!B)continue;const W=I.x*x,te=Math.round(.03*g+I.y*.85*g),Z=B.x*x,A=Math.round(.03*g+B.y*.85*g),$=l[M],N=l[k],X=Ut($,N);X==="#ff3333"||X==="#cc2222"?u+=`<line x1="${W.toFixed(1)}" y1="${te.toFixed(1)}" x2="${Z.toFixed(1)}" y2="${A.toFixed(1)}" stroke="${X}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(u+=`<line x1="${W.toFixed(1)}" y1="${te.toFixed(1)}" x2="${Z.toFixed(1)}" y2="${A.toFixed(1)}" stroke="${X}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,u+=`<line x1="${W.toFixed(1)}" y1="${te.toFixed(1)}" x2="${Z.toFixed(1)}" y2="${A.toFixed(1)}" stroke="${X}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let b="";const w=Math.round(p*657/507);for(const M of i){const k=d[M];if(!k)continue;const I=l[M],B=k.x*x;k.y*g;const W=Math.round(.03*g+k.y*(.85*g)),te=Math.round(B-p/2),Z=Math.round(W-w/2);if(I){const A=M.replace(/\d+/,""),$=s&&(s.club_id&&String(I.club_id)===String(s.club_id)||s.country_code&&I.country_code===s.country_code),N=Ie({...I,_evolution_bonus:I._evolution_bonus||0},{width:p,showStad:!0,stadDef:s,role:A});$&&((m=s.club)!=null&&m.logo_url||s.image_url),b+=`<div style="position:absolute;left:${te}px;top:${Z}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${M}">
        <div style="position:relative">${N}</div>
      </div>`}else{const A=M.replace(/\d+/,"");b+=`<div style="position:absolute;left:${te}px;top:${Z}px;width:${p}px;height:${w}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${M}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${A}</span>
      </div>`}}r.innerHTML=`
    <div style="position:relative;width:${x}px;height:${g}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${x} ${g}">${u}</svg>
      ${b}
    </div>`,r.querySelectorAll(".deck-slot-hit").forEach(M=>{M.addEventListener("click",()=>rr(M.dataset.pos,t,e,n))})}function or(e,t,i){var a;const{openModal:n,closeModal:o}=i,r=e.stadiumCards||[];n("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:70px;text-align:center">
        <div style="width:65px;height:85px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${e.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:22px">🚫</span>
          <span style="font-size:9px;color:#666">Aucun</span>
        </div>
      </div>
      ${r.map(s=>{var b,w;const d=e.stadDefMap[s.stadium_id],c=((b=d==null?void 0:d.club)==null?void 0:b.logo_url)||null,l=d!=null&&d.image_url?"/icons/"+d.image_url:null,f=e.stadiumCardId===s.id,y=d!=null&&d.country_code&&!c?`https://flagsapi.com/${d.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,x=(d==null?void 0:d.name)||"Stade",g=x.match(/^(Stade\s+(?:de\s+)?(?:\w+)?)(.*)?$/i),p=g?g[1].trim():x.slice(0,8),u=((w=g==null?void 0:g[2])==null?void 0:w.trim())||"";return`<div class="stad-choice" data-stad-id="${s.id}" style="cursor:pointer;width:80px;text-align:center">
          <div style="width:75px;height:95px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid ${f?"#4fc3f7":"#444"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;overflow:hidden;position:relative">
            ${l?`<img src="${l}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.4">`:""}
            ${c?`<img src="${c}" style="width:36px;height:36px;object-fit:contain;position:relative;z-index:1">`:y?`<img src="${y}" style="width:40px;height:28px;object-fit:cover;border-radius:3px;position:relative;z-index:1">`:'<span style="font-size:24px;position:relative;z-index:1">🏟️</span>'}
            <div style="position:relative;z-index:1;text-align:center;padding:0 3px">
              <div style="font-size:8px;font-weight:700;color:${f?"#4fc3f7":"#ccc"}">${p}</div>
              ${u?`<div style="font-size:8px;font-weight:700;color:${f?"#4fc3f7":"#aaa"}">${u}</div>`:""}
            </div>
          </div>
        </div>`}).join("")}
    </div>`),(a=document.getElementById("stad-none"))==null||a.addEventListener("click",()=>{e.stadiumCardId=null,o(),wt(t,e,i)}),document.querySelectorAll(".stad-choice").forEach(s=>{s.addEventListener("click",()=>{e.stadiumCardId=s.dataset.stadId,o(),wt(t,e,i)})})}function rr(e,t,i,n){var g,p,u,b,w;const{openModal:o,closeModal:r}=n,a=e.replace(/\d+/,""),s=(g=t.stadiumCards)==null?void 0:g.find(h=>h.id===t.stadiumCardId),d=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.slots[e],l=c?t.playerCards.find(h=>h.id===c):null;(u=l==null?void 0:l.player)==null||u.id;const f=new Set;Object.entries(t.slots).forEach(([h,E])=>{var M;if(h===e||!E)return;const m=t.playerCards.find(k=>k.id===E);(M=m==null?void 0:m.player)!=null&&M.id&&f.add(m.player.id)}),t.subs.forEach(h=>{var m;const E=t.playerCards.find(M=>M.id===h);(m=E==null?void 0:E.player)!=null&&m.id&&f.add(E.player.id)});const y=new Set,x=t.playerCards.filter(h=>{const E=h.player;return!(E.job===a||E.job2===a)||f.has(E.id)||y.has(E.id)?!1:(y.add(E.id),!0)});x.sort((h,E)=>{const m=h.evolution_bonus||0,M=E.evolution_bonus||0,k=(a==="GK"?h.player.note_g:a==="DEF"?h.player.note_d:a==="MIL"?h.player.note_m:h.player.note_a)+(a===h.player.job||a===h.player.job2?m:0);return(a==="GK"?E.player.note_g:a==="DEF"?E.player.note_d:a==="MIL"?E.player.note_m:E.player.note_a)+(a===E.player.job||a===E.player.job2?M:0)-k}),o(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${x.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+x.map(h=>{const E={...h.player,_evolution_bonus:h.evolution_bonus||0};return`<div class="player-option" data-card-id="${h.id}" style="cursor:pointer">
          ${Ie(E,{width:100,showStad:!0,stadDef:d,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(b=document.getElementById("close-selector"))==null||b.addEventListener("click",r),(w=document.getElementById("remove-player"))==null||w.addEventListener("click",()=>{delete t.slots[e],r(),wt(i,t,n)}),document.querySelectorAll(".player-option").forEach(h=>{h.addEventListener("click",()=>{t.slots[e]=h.dataset.cardId,r(),wt(i,t,n)})})}function ar(e,t,i){var l,f,y;const{openModal:n,closeModal:o}=i,r=(l=e.stadiumCards)==null?void 0:l.find(x=>x.id===e.stadiumCardId),a=r&&((f=e.stadDefMap)==null?void 0:f[r.stadium_id])||null,s=new Set;Object.keys(e.slots).forEach(x=>{var u;const g=e.slots[x];if(!g)return;const p=e.playerCards.find(b=>b.id===g);(u=p==null?void 0:p.player)!=null&&u.id&&s.add(p.player.id)}),e.subs.forEach(x=>{var p;const g=e.playerCards.find(u=>u.id===x);(p=g==null?void 0:g.player)!=null&&p.id&&s.add(g.player.id)});const d=new Set,c=e.playerCards.filter(x=>{var g,p,u;return s.has((g=x.player)==null?void 0:g.id)||d.has((p=x.player)==null?void 0:p.id)?!1:(d.add((u=x.player)==null?void 0:u.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+c.map(x=>{const g={...x.player,_evolution_bonus:x.evolution_bonus||0};return`<div class="player-option" data-card-id="${x.id}" style="cursor:pointer">
          ${Ie(g,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(y=document.getElementById("close-sub-selector"))==null||y.addEventListener("click",o),document.querySelectorAll(".player-option").forEach(x=>{x.addEventListener("click",()=>{e.subs.push(x.dataset.cardId),o(),wt(t,e,i)})})}async function sr(e,t){const{state:i,toast:n,navigate:o}=t,r=e.formationCards.find(d=>d.formation===e.formation),a=(r==null?void 0:r.id)||e.formationCardId;await v.from("decks").update({formation:e.formation,formation_card_id:a||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await v.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([d,c],l)=>{s.push({deck_id:e.deckId,card_id:c,position:d,is_starter:!0,slot_order:l})}),e.subs.forEach((d,c)=>{s.push({deck_id:e.deckId,card_id:d,position:`SUB${c+1}`,is_starter:!1,slot_order:100+c})}),s.length>0){const{error:d}=await v.from("deck_cards").insert(s);if(d){n(d.message,"error");return}}n("Deck enregistré ✅","success"),o("decks")}function kn(e){const t=mi[e]||mi["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function Nn(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await v.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(a=>!(a.available_from&&t<a.available_from||a.available_until&&t>a.available_until));if(!n.length)return[];let o=n;if(e){const a=n.filter(s=>s.max_per_user!=null);if(a.length){const{data:s}=await v.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",a.map(c=>c.id)),d={};(s||[]).forEach(c=>{d[c.booster_id]=(d[c.booster_id]||0)+1}),o=n.filter(c=>c.max_per_user==null?!0:(d[c.id]||0)<c.max_per_user)}}if(!o.length)return[];const{data:r}=await v.from("booster_drop_rates").select("*").in("booster_id",o.map(a=>a.id)).order("sort_order");return o.map(a=>({...a,rates:(r||[]).filter(s=>s.booster_id===a.id)}))}async function dr(e,t){const{data:i}=await v.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await v.from("booster_claims").insert({user_id:e,booster_id:t})}function lr(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,o)=>n+Number(o.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const On=()=>Object.keys(Mt),cr=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Bi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function pr(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return Ie({...t,_evolution_bonus:i},{width:140})}function Hn(e){var o;const t={};(e.rates||[]).forEach(r=>{t[r.card_type]=(t[r.card_type]||0)+Number(r.percentage||0)});const i=((o=Object.entries(t).sort((r,a)=>a[1]-r[1])[0])==null?void 0:o[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function ur(e,{state:t,navigate:i,toast:n}){var f,y,x;const o=((f=t.profile)==null?void 0:f.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let r=[];try{r=(await Nn((y=t.user)==null?void 0:y.id)).map(Hn)}catch(g){console.warn("Erreur chargement boosters DB, fallback hardcodé",g)}r.length||(r=cr.map(g=>({...g,rates:[],isPub:g.id==="players_pub"})));const a=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(g=>g.data||[]),s=new Set(a.filter(g=>g.card_type==="stadium").map(g=>g.stadium_id)),d=new Set(a.filter(g=>g.card_type==="formation").map(g=>g.formation)),c=new Set(a.filter(g=>g.card_type==="game_changer").map(g=>g.gc_type)),l={};for(const g of r){if(g.allow_duplicates!==!1||!((x=g.rates)!=null&&x.length))continue;const p=[...new Set((g.rates||[]).map(b=>b.card_type))];let u=!1;for(const b of p)if(b==="stadium"){const{data:w}=await v.from("stadium_definitions").select("id");if((w||[]).some(h=>!s.has(h.id))){u=!0;break}}else if(b==="game_changer"){const{data:w}=await v.from("gc_definitions").select("name").eq("is_active",!0);if((w||[]).some(h=>!c.has(h.name))){u=!0;break}}else if(b==="formation"){const{FORMATION_LINKS:w}=await Ui(async()=>{const{FORMATION_LINKS:h}=await import("./special-cards-q1oKjNQl.js").then(E=>E.y);return{FORMATION_LINKS:h}},__vite__mapDeps([0,1]));if(Object.keys(w).some(h=>!d.has(h))){u=!0;break}}else{u=!0;break}u||(l[g.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${o.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${r.map(g=>{const p=g.cost===0||o>=g.cost,u=l[g.id]===!0;return`<div class="booster-card ${!p||u?"disabled":""}" data-booster="${g.id}" style="position:relative">
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(g=>{g.addEventListener("click",async()=>{const p=r.find(u=>u.id===g.dataset.booster);if(p){g.style.opacity="0.5",g.style.pointerEvents="none";try{await fr(p,{state:t,toast:n,navigate:i,container:e})}catch(u){n(u.message,"error"),g.style.opacity="",g.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(g=>{g.addEventListener("click",p=>{p.stopPropagation();const u=r.find(b=>b.id===g.dataset.boosterId);yr(u)})})}async function fr(e,{state:t,toast:i,navigate:n,container:o}){var f,y;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await hr();const{data:r}=await v.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((r||[]).filter(x=>x.card_type==="player").map(x=>x.player_id)),s=new Set((r||[]).filter(x=>x.card_type==="formation").map(x=>x.formation));let d=[],c=null;try{if((f=e.rates)!=null&&f.length)d=await qi(t.profile,e);else{const x=e.type||"player";x==="player"?d=await Un(t.profile,e.cardCount,e.cost):x==="game_changer"?d=await Kn(t.profile,e.cardCount,e.cost):x==="formation"?d=await Vn(t.profile,e.cost):d=await qi(t.profile,e)}}catch(x){c=x.message||String(x),console.error("[Booster] Erreur:",x)}if(d!=null&&d.length&&e._boosterId&&await dr(t.user.id,e._boosterId),!(d!=null&&d.length)){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",x.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${c||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(x),(y=x.querySelector("#anim-close-err"))==null||y.addEventListener("click",()=>x.remove());return}d.forEach(x=>{x.card_type==="player"&&x.player?x.isDuplicate=a.has(x.player.id):x.card_type==="formation"&&(x.isDuplicate=s.has(x.formation))});const{data:l}=await v.from("users").select("*").eq("id",t.profile.id).single();l&&(t.profile=l),Yn(d,e,n)}function mr(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function gr(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>mt(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>mt(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&mt(n)>=6),i.length||(i=e.filter(n=>mt(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&mt(n)>=1&&mt(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function qi(e,t){if(t.cost>0){const{error:y}=await v.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(y)throw y}const i=t.allow_duplicates!==!1;let n=[];const{data:o,error:r}=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(r){const{data:y}=await v.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=y||[]}else n=o||[];const a=new Set(n.filter(y=>y.card_type==="player").map(y=>y.player_id)),s=new Set(n.filter(y=>y.card_type==="formation").map(y=>y.formation)),d=new Set(n.filter(y=>y.card_type==="game_changer").map(y=>y.gc_type)),c=new Set(n.filter(y=>y.card_type==="stadium").map(y=>y.stadium_id).filter(Boolean)),l=new Set,f=[];for(let y=0;y<(t.cardCount||5);y++){const x=lr(t.rates);if(x){if(x.card_type==="player"){const g=k=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[k]||k,p=x.rarity?g(x.rarity):null;let u=v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(u=u.eq("rarity",p));const{data:b}=await u;let w=b||[];if((x.note_min||x.note_max)&&(w=w.filter(k=>{const I=Math.max(Number(k.note_g)||0,Number(k.note_d)||0,Number(k.note_m)||0,Number(k.note_a)||0);return(!x.note_min||I>=x.note_min)&&(!x.note_max||I<=x.note_max)})),w.length||(x.note_min||x.note_max?(w=b||[],console.warn("[Booster] Aucun joueur avec note",x.note_min,"-",x.note_max,"— fallback rareté uniquement")):w=b||[]),!w.length)continue;let h=w.filter(k=>!l.has(k.id));if(i)h.length||(h=w);else if(h=h.filter(k=>!a.has(k.id)),!h.length)continue;const E=h[Math.floor(Math.random()*h.length)];l.add(E.id);const m=a.has(E.id),{data:M}=await v.from("cards").insert({owner_id:e.id,player_id:E.id,card_type:"player"}).select().single();M&&(f.push({...M,player:E,isDuplicate:m}),v.rpc("record_transfer",{p_card_id:M.id,p_player_id:E.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(x.card_type==="game_changer"){const{data:g}=await v.from("gc_definitions").select("id,name,color,effect,image_url,gc_type").eq("is_active",!0).eq("gc_type","game_changer"),p=g!=null&&g.length?g:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],u=i?p:p.filter(E=>!d.has(E.name));if(!i&&!u.length)continue;const b=u[Math.floor(Math.random()*u.length)],w=b.name,{data:h}=await v.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:w,gc_definition_id:b.id||null}).select().single();h&&f.push({...h,_gcDef:b})}else if(x.card_type==="formation"){const g=On(),p=i?g:g.filter(h=>!s.has(h));if(!i&&!p.length)continue;const u=p[Math.floor(Math.random()*p.length)],b=s.has(u),{data:w}=await v.from("cards").insert({owner_id:e.id,card_type:"formation",formation:u}).select();w!=null&&w[0]&&f.push({...w[0],isDuplicate:b})}else if(x.card_type==="stadium"){const{data:g,error:p}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(g!=null&&g.length)){console.warn("[Booster] Aucun stade en DB");continue}const u=i?g:g.filter(E=>!c.has(E.id));if(!i&&!u.length)continue;const b=u[Math.floor(Math.random()*u.length)],{data:w,error:h}=await v.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:b.id}).select("id,card_type,stadium_id").single();if(h){console.error("[Booster] insert stadium card:",h.message);continue}w&&f.push({...w,rarity:"normal",_stadiumDef:b})}}}return f}async function Un(e,t,i){if(i>0){const{error:c}=await v.from("users").update({credits:e.credits-i}).eq("id",e.id);if(c)throw c}const{data:n}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const o=n.filter(c=>c.job==="GK"),r=n.filter(c=>c.job!=="GK"),a=!e.first_booster_opened&&o.length>0,s=[];for(let c=0;c<t;c++){const l=c===0&&a?o:c===0?r:n,f=mr(),y=gr(l,f);y&&s.push(y)}a&&await v.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:d}=await v.from("cards").insert(s.map(c=>({owner_id:e.id,player_id:c.id,card_type:"player"}))).select();return(d||[]).forEach((c,l)=>{v.rpc("record_transfer",{p_card_id:c.id,p_player_id:s[l].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((c,l)=>({...d[l],player:c}))}async function Kn(e,t,i){const{error:n}=await v.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:o}=await v.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),r=o!=null&&o.length?o:Object.keys(Bi).map(f=>({name:f,gc_type:"game_changer"})),a=Array.from({length:t},()=>r[Math.floor(Math.random()*r.length)]),s=a.map(f=>({owner_id:e.id,card_type:"game_changer",gc_type:f.name,gc_definition_id:f.id||null})),{data:d,error:c}=await v.from("cards").insert(s).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(d||[]).map((f,y)=>({...f,_gcDef:a[y]||null}))}async function Vn(e,t){const{error:i}=await v.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await v.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),o=new Set((n||[]).map(l=>l.formation)),r=On(),a=r[Math.floor(Math.random()*r.length)],s=o.has(a),{data:d,error:c}=await v.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();return c&&console.error("[Booster Formation] Erreur insert:",c.message,c),(d||[]).map(l=>({...l,isDuplicate:s}))}function Yn(e,t,i,n=null){var Z,A;if(!e||e.length===0){const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",$.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild($),(Z=$.querySelector("#anim-close-err"))==null||Z.addEventListener("click",()=>$.remove());return}e=[...e].sort(($,N)=>{const X=$.player?mt($.player):-1;return(N.player?mt(N.player):-1)-X});const o=document.createElement("div");o.id="booster-anim-overlay",o.innerHTML=`
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
        ${t.name} · ${e.length} carte${e.length>1?"s":""}
      </div>
      <div class="pack-visual" id="pack-visual" style="position:relative;animation:packFloat 2s ease-in-out infinite">
        <div id="pack-cut-zone" style="position:relative;width:180px;height:280px;touch-action:none;cursor:grab;user-select:none;-webkit-user-select:none">
          <div class="pack-half pack-half-bottom"><img src="${t.img}" alt="${t.name}" draggable="false"></div>
          <div class="pack-half pack-half-top"><img src="${t.img}" alt="${t.name}" draggable="false"></div>
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
  `,document.body.appendChild(o);let r=!1;const a=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let d=!1;const c=$=>$.touches&&$.touches[0]?$.touches[0].clientX:$.clientX;function l($){r||(d=!0,s.style.opacity="1",f($))}function f($){if(!d||r)return;const N=a.getBoundingClientRect(),X=c($)-N.left,ce=Math.max(0,Math.min(1,X/N.width));s.style.width=ce*N.width+"px",ce>=.82&&x()}function y(){r||(d=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{r||(s.style.transition="")},220))}function x(){var N;if(r)return;r=!0,d=!1,s.style.width="100%",s.style.opacity="1",(N=document.getElementById("cut-flash"))==null||N.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const $=document.getElementById("cut-hint");$&&($.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",b(0)},620)}a.addEventListener("pointerdown",l),window.addEventListener("pointermove",f),window.addEventListener("pointerup",y),a.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",y);let g=0,p=!1;const u=new Set;function b($){g=$,document.getElementById("reveal-phase").style.display="flex",w(),h($,0),I()}function w(){const $=document.getElementById("card-dots");$&&($.innerHTML=e.map((N,X)=>`<div class="card-dot" data-i="${X}" style="width:8px;height:8px;border-radius:50%;background:${X===g?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),$.querySelectorAll(".card-dot").forEach(N=>N.addEventListener("click",()=>m(parseInt(N.dataset.i)))))}function h($,N){var L,F;const X=e[$],ce=document.getElementById("card-counter"),fe=document.getElementById("card-track");ce&&(ce.textContent=`Carte ${$+1} / ${e.length}`);const C=document.getElementById("reveal-btns");C&&(C.style.display=$===e.length-1?"flex":"none");const Y=X.card_type==="player"&&((L=X.player)==null?void 0:L.rarity)==="legende",ue=!u.has($);u.add($);let K=0;if(X.card_type==="player"&&X.player){const U=X.player,O=U.job||"ATT";K=(Number(O==="GK"?U.note_g:O==="DEF"?U.note_d:O==="MIL"?U.note_m:U.note_a)||0)+(X.evolution_bonus||0)}const V=U=>{fe.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${Y?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${xr(X)}</div>
          ${X.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const O=document.getElementById("current-card-wrap");N!==0?(O.style.transition="none",O.style.transform=`translateX(${N>0?100:-100}%)`,requestAnimationFrame(()=>{O.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",O.style.transform="translateX(0)"})):O.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),U||Y?W():te(),w()};ue&&(((F=X.player)==null?void 0:F.rarity)==="legende"||K>=18)&&X.card_type==="player"&&X.player?E(X,()=>V(!0)):V(!1)}function E($,N){var Te;p=!0;const X=$.player,ce=`https://flagsapi.com/${X.country_code}/flat/64.png`,fe=(Te=X.clubs)==null?void 0:Te.logo_url,C=At(X),Y=X.job||"ATT",ue=Number(Y==="GK"?X.note_g:Y==="DEF"?X.note_d:Y==="MIL"?X.note_m:X.note_a)||0,K=$.evolution_bonus||0,V=ue+K,L=V>=18&&V<=20,F=V>=18,U=document.getElementById("walkout-overlay"),O=document.getElementById("walkout-stage");if(!U||!O){p=!1,N();return}let re=null;L&&(re=Ji("/sounds/Legendary.mp3",.8)),U.style.display="flex";const q=()=>{const he=O.firstElementChild;he&&(he.classList.remove("wo-in"),he.classList.add("wo-out"))},G=1800,se=400;O.innerHTML=`<img class="wo-in" src="${ce}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(q,G),setTimeout(()=>{var he;O.innerHTML=fe?`<img class="wo-in" src="${fe}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((he=X.clubs)==null?void 0:he.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},G+se),setTimeout(q,G*2+se),setTimeout(()=>{O.innerHTML=C?`<img class="wo-in" src="${C}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(G+se)*2),setTimeout(q,(G+se)*2+G);const ve=F?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[Y]||"#fff";setTimeout(()=>{O.innerHTML=`<div class="wo-in" style="
        font-size:${F?"120px":"90px"};font-weight:900;color:${ve};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${ve}, 0 0 60px ${ve};
        ${F?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${V}
      </div>`,F&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(G+se)*3),setTimeout(q,(G+se)*3+G),setTimeout(()=>{U.style.display="none",O.innerHTML="",p=!1,re&&!L&&re.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),N()},(G+se)*4)}function m($){if(p||$<0||$>=e.length||$===g)return;const N=$>g?1:-1;g=$,h($,N)}function M(){m(g+1)}function k(){m(g-1)}function I(){const $=document.getElementById("card-viewport");if(!$||$._swipeBound)return;$._swipeBound=!0;let N=0,X=0,ce=0,fe=!1;const C=L=>L.touches?L.touches[0].clientX:L.clientX,Y=L=>L.touches?L.touches[0].clientY:L.clientY,ue=L=>{fe=!0,N=C(L),X=Y(L),ce=0},K=L=>{if(!fe)return;ce=C(L)-N;const F=Y(L)-X;if(Math.abs(ce)<Math.abs(F))return;const U=document.getElementById("current-card-wrap");U&&(U.style.transition="none",U.style.transform=`translateX(${ce*.6}px) rotate(${ce*.02}deg)`)},V=()=>{if(!fe)return;fe=!1;const L=document.getElementById("current-card-wrap"),F=55;ce<=-F&&g<e.length-1?M():ce>=F&&g>0?k():L&&(L.style.transition="transform .2s ease",L.style.transform="translateX(0)")};$.addEventListener("pointerdown",ue),$.addEventListener("pointermove",K),$.addEventListener("pointerup",V),$.addEventListener("pointercancel",V),$.addEventListener("touchstart",ue,{passive:!0}),$.addEventListener("touchmove",K,{passive:!0}),$.addEventListener("touchend",V),$.addEventListener("click",L=>{if(Math.abs(ce)>8)return;const F=$.getBoundingClientRect();L.clientX-F.left>F.width/2?M():k()})}let B=null;function W(){const $=document.getElementById("fireworks-canvas");if(!$)return;$.width=window.innerWidth,$.height=window.innerHeight;const N=$.getContext("2d"),X=[];function ce(){const C=Math.random()*$.width,Y=Math.random()*$.height*.6,ue=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],K=ue[Math.floor(Math.random()*ue.length)];for(let V=0;V<60;V++){const L=Math.PI*2/60*V,F=2+Math.random()*5;X.push({x:C,y:Y,vx:Math.cos(L)*F,vy:Math.sin(L)*F,alpha:1,color:K,size:2+Math.random()*3})}}ce(),B=setInterval(ce,600);function fe(){if(document.getElementById("fireworks-canvas")){N.clearRect(0,0,$.width,$.height);for(let C=X.length-1;C>=0;C--){const Y=X[C];if(Y.x+=Y.vx,Y.y+=Y.vy+.08,Y.vy*=.98,Y.alpha-=.018,Y.alpha<=0){X.splice(C,1);continue}N.globalAlpha=Y.alpha,N.fillStyle=Y.color,N.beginPath(),N.arc(Y.x,Y.y,Y.size,0,Math.PI*2),N.fill()}N.globalAlpha=1,(B!==null||X.length>0)&&requestAnimationFrame(fe)}}fe()}function te(){B!==null&&(clearInterval(B),B=null);const $=document.getElementById("fireworks-canvas");$&&$.getContext("2d").clearRect(0,0,$.width,$.height)}if(n){const $=document.getElementById("reveal-btns");$&&($.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(A=document.getElementById("reveal-next"))==null||A.addEventListener("click",()=>{te(),o.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{te(),o.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{te(),o.remove(),i("boosters")})}function xr(e){var t,i,n,o;if(e.card_type==="player"&&e.player)return pr(e);if(e.card_type==="game_changer"){const r=e._gcDef,a=(r==null?void 0:r.name)||e.gc_type||"Game Changer",s=(r==null?void 0:r.effect)||((t=Bi[e.gc_type])==null?void 0:t.desc)||"",d=r!=null&&r.image_url?`/icons/${r.image_url}`:null,c=((i=Bi[e.gc_type])==null?void 0:i.icon)||"⚡";return tt(a,d,c,s,{width:170})}if(e.card_type==="formation")return Mi(e.formation,Mt[e.formation],{width:160});if(e.card_type==="stadium"){const r=e._stadiumDef,a=(r==null?void 0:r.name)||"Stade",s=((n=r==null?void 0:r.club)==null?void 0:n.encoded_name)||(r==null?void 0:r.country_code)||"—",d=r!=null&&r.image_url?`/icons/${r.image_url}`:((o=r==null?void 0:r.club)==null?void 0:o.logo_url)||(r!=null&&r.country_code?`https://flagsapi.com/${r.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),c=`${s}<br>+10 ⭐ joueurs alliés`;return ti(a,d,c,{width:170})}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function yr(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const o={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},r={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${r[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${o[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}br()}function br(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
    align-items:center;justify-content:center;z-index:4000;padding:16px`,e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function hr(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const o=document.getElementById("mw-ad-cd");o&&(o.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function vr(e,{state:t,navigate:i,toast:n,refreshProfile:o}){var y,x;const{data:r}=await v.from("users").select("*").eq("id",t.user.id).single();r&&(t.profile=r);let a=Array.isArray((y=t.profile)==null?void 0:y.pending_boosters)?[...t.profile.pending_boosters]:[];if(!a.length){await v.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let s=null;try{const p=(await Nn()).find(u=>(u.name||"").toLowerCase().includes("new player"));p&&(s=Hn(p))}catch(g){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',g)}const d=a.length;let c=0;e.innerHTML=`
  <div class="page" style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#0a3d1e,#063015);padding:24px">
    <div style="max-width:420px;text-align:center;color:#fff">
      <div style="font-size:56px;margin-bottom:10px">🎁</div>
      <h2 style="font-size:24px;font-weight:900;margin-bottom:8px">Bienvenue ${t.profile.pseudo} !</h2>
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
  </div>`;const l=async()=>{await v.from("users").update({pending_boosters:a}).eq("id",t.user.id)};async function f(){var w;if(c>=d||!a.length){await v.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),o&&await o(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const g=a[0],{data:p}=await v.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let u=[];try{if(g.type==="formation")u=await Vn(t.profile,0);else if(g.type==="game_changer")u=await Kn(t.profile,g.count||3,0);else if(s&&((w=s.rates)!=null&&w.length)){const h={...s,cost:0,cardCount:g.count||s.cardCount||5};u=await qi(t.profile,h),g.guaranteeGK&&!t.profile.first_booster_opened&&(u.some(m=>m.player&&m.player.job==="GK")||await wr(t.profile,u),await v.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else u=await Un(t.profile,g.count||5,0)}catch(h){n(h.message||"Erreur ouverture booster","error");return}a.shift(),c++,await l();const b=g.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:g.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${c}/${d})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};Yn(u,b,i,()=>{f()})}(x=document.getElementById("onboard-start"))==null||x.addEventListener("click",()=>f())}async function wr(e,t){try{const{data:i}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],o=t.findIndex(a=>a.player);if(o===-1)return;const r=t[o];await v.from("cards").update({player_id:n.id}).eq("id",r.id),t[o]={...r,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Nt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},_r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function It(e,t,i,n,o){var r;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(r=document.getElementById("msg-btn"))==null||r.addEventListener("click",o)}function Di(e,t){var r,a;const i=e.player,n=e.evolution_bonus||0,o=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&o>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&o>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&o>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&o>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((r=i.clubs)==null?void 0:r.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ai(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(o=>{Array.isArray(o)&&o.forEach(r=>{const a=i&&String(r.club_id)===String(i),s=n&&String(r.country_code)===String(n);(a||s)&&(r.stadiumBonus=!0)})}),e}function gi(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(o=>{if(!o)return;const r=i&&String(o.club_id)===String(i),a=n&&String(o.country_code)===String(n);(r||a)&&(o.stadiumBonus=!0)}),e}function xt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Wn(){const e=Math.random()*100;return e<10?10:e<30?5:3}function xi(e,t){const i=Nt[t]||Nt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const s=e.filter(c=>c.position&&c.position.replace(/\d+$/,"")===a).sort((c,l)=>parseInt(c.position.replace(/\D+/g,""),10)-parseInt(l.position.replace(/\D+/g,""),10)).map(c=>({...c,_line:a})),d=xt(s.length);s.forEach((c,l)=>{c._col=d[l]}),n[a]=s}return n}const r=[...e];for(const a of["GK","DEF","MIL","ATT"]){const s=[];for(let c=0;c<i[a];c++){let l=r.findIndex(f=>f.job===a);if(l===-1&&(l=r.findIndex(f=>f.job2===a)),l===-1&&(l=0),r[l]){const f={...r[l],_line:a};s.push(f),r.splice(l,1)}}const d=xt(s.length);s.forEach((c,l)=>{c._col=d[l]}),n[a]=s}return n}function st(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function it(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function wi(e,t,i){const o=new Set,r=t.filter(l=>{const f=l.gc_type||l.id;return o.has(f)?!1:(o.add(f),!0)});let a=[];function s(l,f){const y=l._gcDef,x=(y==null?void 0:y.name)||l.gc_type,g=y!=null&&y.image_url?`/icons/${y.image_url}`:null,p=tt(x,g,"⚡",(y==null?void 0:y.effect)||"",{width:100});return`<div class="gc-select-card" data-id="${l.id}"
      style="position:relative;flex-shrink:0;cursor:pointer;border-radius:10px;
        outline:${f?"3px solid #FFD700":"none"};
        box-shadow:${f?"0 0 18px #FFD700":"none"};
        transform:${f?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      ${p}
      ${f?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const d=l=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(l)};function c(){var f,y,x;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const l=a.length>0;e.innerHTML=`
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
        ${r.map(g=>{const p=a.find(u=>u.gc_type===g.gc_type);return s(g,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(g=>{g.addEventListener("click",()=>{const p=g.dataset.id,u=r.find(w=>w.id===p);if(!u)return;const b=a.findIndex(w=>w.gc_type===u.gc_type);b>-1?a.splice(b,1):a.length<3&&a.push(u),c()})}),(f=e.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{l&&d(a)}),(y=e.querySelector("#gc-no-gc"))==null||y.addEventListener("click",()=>d([])),(x=e.querySelector("#gc-reset"))==null||x.addEventListener("click",()=>{a.length&&(a=[],c())})}c()}function kr(e,t){var o;const i=((o=t==null?void 0:t.state)==null?void 0:o.params)||{},n=e||i.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${i.friendName||"Ami"}`:n==="random"?"Match vs Random":n==="ranked"?"Match Classé":n==="mini_league"||n==="mini-league"?"🏆 Match de Mini League":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function $r(e,t,i){const{state:n,navigate:o}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await v.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!r||r.length===0){It(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>o("decks"));return}const a=r.map(y=>y.id),{data:s}=await v.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),d=[...new Set((s||[]).filter(y=>{var x,g;return((x=y.card)==null?void 0:x.card_type)==="stadium"&&((g=y.card)==null?void 0:g.stadium_id)}).map(y=>y.card.stadium_id))],c={};if(d.length){const{data:y}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",d);(y||[]).forEach(x=>{c[x.id]=x}),(s||[]).forEach(x=>{var g,p;((g=x.card)==null?void 0:g.card_type)==="stadium"&&((p=x.card)!=null&&p.stadium_id)&&(x.card._stadiumDef=c[x.card.stadium_id]||null)})}let l=0;function f(){var m,M,k,I,B,W,te;const y=r[l],x=(s||[]).filter(Z=>Z.deck_id===y.id),g=x.filter(Z=>{var A;return Z.is_starter&&((A=Z.card)==null?void 0:A.player)}).map(Z=>Di(Z.card,Z.position)),p=x.find(Z=>{var A;return((A=Z.card)==null?void 0:A.card_type)==="formation"}),u=y.formation||((m=p==null?void 0:p.card)==null?void 0:m.formation)||"4-4-2";let b=g.length>=11?xi(g,u):null,w=((M=y.stadium_card)==null?void 0:M.stadium_def)||null;w&&b&&(b=ai(b,w));const h=g.length>=11;st(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff;position:relative">
      <button id="cancel-deck-select" style="position:absolute;top:8px;right:10px;z-index:10;width:32px;height:32px;border-radius:50%;border:none;background:rgba(180,30,30,0.85);color:#fff;font-size:18px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${kr(i,t)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${l===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===0?"0.1":"0.3"});color:${l===0?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${l===0?"default":"pointer"};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${y.name}</div>
            <div style="font-size:11px;opacity:.6">${u} · ${g.length}/11${y.is_active?" · ⭐":""}</div>
          </div>
          <button id="next-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${l===r.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===r.length-1?"0.1":"0.3"});color:${l===r.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${l===r.length-1?"default":"pointer"};flex-shrink:0">▶</button>
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
          <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((k=w.club)==null?void 0:k.encoded_name)||w.country_code||""}</span>
        </div>`:""}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${b?'<div class="deck-preview-wrap" style="overflow:hidden;width:100%;height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${g.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${r.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${r.map((Z,A)=>`<div style="width:6px;height:6px;border-radius:50%;background:${A===l?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${h?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${h?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${h?"pointer":"default"}">
          ${h?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function Z(){const A=e.querySelector(".deck-preview-wrap"),$=e.querySelector("#deck-swipe-zone");if(!A||!$||!b)return;const N=$.clientWidth>=900,X=Math.max(200,$.clientHeight-(N?60:40)),fe=Math.max(200,$.clientWidth-16),C=N?Math.min(117,Math.max(52,Math.round(fe*.22))):Math.max(44,Math.round(fe*.168));if(X<220||fe<220){requestAnimationFrame(Z);return}const Y=N?null:Math.round(C*.55);A.innerHTML=Ot(b,u,null,[],fe,X,[],Y),A.style.cssText=`width:${fe}px;height:${X}px;overflow:hidden;margin:${N?0:60}px auto 0`;const ue=A.querySelector("svg");ue&&(ue.style.cssText="display:block;width:100%;height:100%",ue.setAttribute("preserveAspectRatio",N?"xMidYMid meet":"none"))})),(I=document.getElementById("prev-deck"))==null||I.addEventListener("click",()=>{l>0&&(l--,f())}),(B=document.getElementById("next-deck"))==null||B.addEventListener("click",()=>{l<r.length-1&&(l++,f())}),(W=document.getElementById("validate-deck"))==null||W.addEventListener("click",()=>{if(!h)return;const Z=t.state.params||{};t.navigate("match",{...Z,matchMode:Z.matchMode||i,deckId:y.id})}),(te=document.getElementById("cancel-deck-select"))==null||te.addEventListener("click",()=>{it(e),o("home")});const E=document.getElementById("deck-swipe-zone");if(E){let Z=0,A=0;E.addEventListener("touchstart",$=>{Z=$.touches[0].clientX,A=$.touches[0].clientY},{passive:!0}),E.addEventListener("touchend",$=>{const N=$.changedTouches[0].clientX-Z,X=$.changedTouches[0].clientY-A;Math.abs(N)<40||Math.abs(N)<Math.abs(X)||(N<0&&l<r.length-1?(l++,f()):N>0&&l>0&&(l--,f()))},{passive:!0})}}f()}function vt(e,t=44,i=58,n=null){return Ie(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function Je(e,t,i,n,o){if(!(e!=null&&e.length))return"";const r=e.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return r.forEach((s,d)=>{const c=s._line||s.job||"MIL";let l=s.boost||0;if(s.stadiumBonus&&(n==="attack"&&(c==="ATT"||c==="MIL")||n==="defense"&&(c==="GK"||c==="DEF"||c==="MIL")?l+=10:n||(l+=10)),a+=Ie(s,{width:40,role:c,extraNote:l}),d<r.length-1){const f=r[d+1],y=Pn(s,f,o)?Ut(s,f):null;a+=`<div style="width:7px;height:3px;background:${!y||y==="#ff3333"||y==="#cc2222"?"rgba(255,255,255,0.12)":y};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function _i(e,t,i,n,o=310,r=310,a=[],s=null){const d=Mt[t]||{},c=Oi(t)||Hi[t]||[],l={},f=["ATT","MIL","DEF","GK"];for(const b of f)(e[b]||[]).forEach((h,E)=>{l[`${b}${E+1}`]=h});function y(b){const w=d[b];return w?{x:w.x*o,y:w.y*r}:null}let x="";for(const[b,w]of c){const h=y(b),E=y(w);if(!h||!E)continue;const m=l[b],M=l[w],k=Ut(m,M);k==="#00ff88"||k==="#FFD700"?(x+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${k}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,x+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${k}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):x+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${k}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=typeof window<"u"&&window.innerWidth>=900?Math.min(Math.max(81,Math.round(o*.225)),117):Math.max(44,Math.round(o*.168)),p=Math.round(g*657/507);for(const[b,w]of Object.entries(l)){const h=y(b);if(!h||!w)continue;const E=b.replace(/[0-9]/g,""),m=a.includes(w.cardId),M=i==="attack"&&(["MIL","ATT"].includes(E)||m)&&!w.used||i==="defense"&&["GK","DEF","MIL"].includes(E)&&!w.used,k=n.includes(w.cardId);let I=w.boost||0,B=!1;w.stadiumBonus&&(i==="attack"&&(E==="ATT"||E==="MIL")||i==="defense"&&(E==="GK"||E==="DEF"||E==="MIL")?(I+=10,B=!0):i||(I+=10,B=!0));const W=Math.round(h.x-g/2),te=Math.round(h.y-p/2);if(w.used){x+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${W}" y="${te}" width="${g}" height="${p}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${w.cardId}" data-role="${E}" style="cursor:pointer"/>`;continue}const Z=Ie({...w,_evolution_bonus:0,stadiumBonus:!1},{width:g,showStad:!1,stadDef:null,role:E,extraNote:I,_cardOffset:30,_forceStadColor:B}),A=k?`position:absolute;top:30px;left:0;width:${g}px;height:${p}px;outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;pointer-events:none;`:"";x+=`<foreignObject x="${W-2}" y="${te-30}" width="${g+8}" height="${p+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">
        ${Z}
        ${k?`<div style="${A}"></div>`:""}
      </div>
    </foreignObject>`,M&&(x+=`<rect x="${W}" y="${te}" width="${g}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${k?"selected":""}" data-card-id="${w.cardId}" data-role="${E}" style="cursor:pointer"/>`)}const u=s!==null?s:Math.round(Math.max(g*.7,80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-u} ${-u} ${o+u*2} ${r+u*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${x}
  </svg>`}function Ot(e,t,i,n,o=300,r=300,a=[],s=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${_i(e,t,i,n,o,r,a,s)}
  </div>`}async function ki(e,t,i,n){var M;const{state:o,navigate:r,toast:a}=t;st(e);const s=o.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return $r(e,t,i);const d=s.deckId;let c,l,f,y;try{const k=await Promise.all([v.from("decks").select("formation,name,stadium_card_id").eq("id",d).single(),v.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",d).order("slot_order")]);c=k[0].data,f=k[0].error,l=k[1].data,y=k[1].error}catch(k){console.error("[Match] Exception chargement deck:",k),It(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>r("home"));return}if(f||y){console.error("[Match] Erreur Supabase:",f||y),It(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>r("home"));return}const x=(l||[]).filter(k=>{var I;return k.is_starter&&((I=k.card)==null?void 0:I.player)}).map(k=>Di(k.card,k.position)),g=(l||[]).filter(k=>{var I;return!k.is_starter&&((I=k.card)==null?void 0:I.player)}).map(k=>Di(k.card,k.position));if(x.length<11){It(e,"⚠️",`Deck incomplet (${x.length}/11).`,"Compléter",()=>r("decks"));return}const p=(l||[]).find(k=>{var I;return((I=k.card)==null?void 0:I.card_type)==="formation"}),u=(c==null?void 0:c.formation)||((M=p==null?void 0:p.card)==null?void 0:M.formation)||"4-4-2",{data:b,error:w}=await v.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",o.profile.id).eq("card_type","game_changer"),{data:h}=await v.from("gc_definitions").select("*").eq("is_active",!0),E=(b||[]).map(k=>({...k,_gcDef:(h==null?void 0:h.find(I=>I.name===k.gc_type||I.id===k.gc_definition_id))||null}));let m=null;if(c!=null&&c.stadium_card_id){const{data:k}=await v.from("cards").select("stadium_id").eq("id",c.stadium_card_id).single();if(k!=null&&k.stadium_id){const{data:I}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",k.stadium_id).single();m=I||null}}n({deckId:d,formation:u,starters:x,subsRaw:g,gcCardsEnriched:E,gcDefs:h||[],stadiumDef:m})}function zt(){return Math.min(window.innerWidth-40,860)}function Rt(){return Math.round(zt()*1.1)}function Xn(e){var o,r;if(!e)return null;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0,n=e.stadiumBonus?10:0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+n,note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((o=e.clubs)==null?void 0:o.encoded_name)||null,clubLogo:e.clubLogo||((r=e.clubs)==null?void 0:r.logo_url)||null,face:e.face||null,portrait:At(e)}}function Er(e,t,i,n="Adversaire"){Mn("/sounds/match-opening.mp3",.3);const o=zt(),r=Rt();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${n}</div>
      
      <div style="width:100%;max-width:${o}px;margin:0 auto">
        ${_i(e,t,null,[],o,r)}
      </div>
    </div>`}function Jn(e){var r,a,s;if(!e)return"";const t=d=>d?Ie({...d,_evolution_bonus:0},{width:52,role:d._line||d.job,showStad:!!d.stadiumBonus,extraNote:d.boost||0}):"",n={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[e.type]||"📋";return`
    <div style="padding:8px 12px;border-left:3px solid ${((r=e.type)==null?void 0:r.includes("goal"))?"#22c55e":"rgba(255,255,255,0.15)"};margin-bottom:4px">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px;text-align:center">${n} ${e.title||e.text||""}</div>
      ${(a=e.homePlayers)!=null&&a.length||(s=e.aiPlayers)!=null&&s.length?`
        <div style="display:flex;align-items:flex-start;justify-content:center;gap:16px">
          <div style="flex:1;display:flex;gap:3px;flex-wrap:wrap;justify-content:flex-end">
            ${(e.homePlayers||[]).map(t).join("")}
          </div>
          <div style="flex:1;display:flex;gap:3px;flex-wrap:wrap;justify-content:flex-start">
            ${(e.aiPlayers||[]).map(t).join("")}
          </div>
        </div>`:""}
      ${e.text&&e.title?`<div style="font-size:10px;color:rgba(255,255,255,0.4);margin-top:4px;text-align:center">${e.text}</div>`:""}
    </div>`}function Qe(e,t,i,n,o){Ji("/sounds/goal.mp3",.7);const r=document.getElementById("goal-anim-overlay");r&&r.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(e||[]).slice(0,3).map(d=>Ie({...d,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:d._line||d.job,showStad:!!d.stadiumBonus})).join("");if(a.innerHTML=`
    <div style="animation:goalPop 0.4s ease-out;text-align:center">
      <div style="font-size:clamp(48px,10vw,80px);margin-bottom:8px">⚽</div>
      <div style="font-size:clamp(28px,6vw,48px);font-weight:900;color:#22c55e;letter-spacing:2px;text-shadow:0 0 20px #22c55e">BUT !</div>
      <div style="display:flex;gap:8px;justify-content:center;margin:16px 0">${s}</div>
      <div style="font-size:clamp(32px,7vw,56px);font-weight:900;color:#fff;margin-top:8px">
        ${n?`<span style="color:#22c55e">${t}</span>`:t}
        <span style="color:rgba(255,255,255,0.4);margin:0 12px">—</span>
        ${n?i:`<span style="color:#22c55e">${i}</span>`}
      </div>
    </div>`,document.body.appendChild(a),!document.getElementById("goal-anim-style")){const d=document.createElement("style");d.id="goal-anim-style",d.textContent=`
      @keyframes goalPop {
        from { transform: scale(0.5); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }`,document.head.appendChild(d)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),o==null||o()},400)},1800)}function Lr(e,t,i){const n=document.getElementById("sub-anim-overlay");n&&n.remove();const o=document.createElement("div");o.id="sub-anim-overlay",o.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const r=Math.min(120,Math.round(window.innerWidth/4)),a=e?Ie({...e,_evolution_bonus:0},{width:r,role:e._line||e.job}):"",s=t?Ie({...t,_evolution_bonus:0},{width:r,role:t._line||t.job}):"";o.innerHTML=`
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
    </div>`,document.body.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transition="opacity 0.4s",setTimeout(()=>{o.remove(),i==null||i()},400)},1600)}function $t(e,t="rgba(0,0,0,0.85)",i=2200){const n=document.getElementById("game-toast");n&&n.remove();const o=document.createElement("div");if(o.id="game-toast",o.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${t};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,o.textContent=e,!document.getElementById("game-toast-style")){const r=document.createElement("style");r.id="game-toast-style",r.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(r)}document.body.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transition="opacity 0.3s",setTimeout(()=>o.remove(),300)},i)}function Qn(e,t){const i=Pe(e,"MIL"),n=e.stadiumBonus||t&&(t.club_id&&String(e.club_id)===String(t.club_id)||t.country_code&&e.country_code===t.country_code)?10:0;return i+n}function yt(e,t){return e.reduce((i,n)=>i+Qn(n,t),0)}function bt(e){let t=0;for(let i=0;i<e.length-1;i++){const n=Ut(e[i],e[i+1]);n==="#00ff88"?t+=10:n==="#FFD700"&&(t+=5)}return t}function yi(e,t,i,n,o){return`<div id="duel-row-${n}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${t}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${e.map((r,a)=>{const s=a<e.length-1?Ut(r,e[a+1]):null,d=!s||s==="#ff3333"||s==="#cc2222",c=s==="#00ff88"?"+10":s==="#FFD700"?"+5":"";return Qn(r,o),r.stadiumBonus||o&&(o.club_id&&String(r.club_id)===String(o.club_id)||o.country_code&&(r.country_code,o.country_code)),`
          <div class="duel-card duel-card-${n}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ie({...r,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:o,role:"MIL",extraNote:r.boost||0})}
          </div>
          ${a<e.length-1?`<div class="duel-link duel-link-${n}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${d?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${d?"none":`0 0 8px ${s}`}">
            ${c?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${c}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${n}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${yt(e,o)} + ${bt(e)} liens = <b style="color:#fff">${yt(e,o)+bt(e)}</b>
      </div>
    </div>`}async function Tr(e,t){const{state:i}=t,o=(i.params||{}).matchMode||"vs_ai_easy",r=o.replace("vs_ai_",""),a=o;await ki(e,t,o,async({deckId:s,formation:d,starters:c,subsRaw:l,gcCardsEnriched:f,gcDefs:y,stadiumDef:x})=>{try{let g=xi(c,d);x&&(g=ai(g,x),gi(l,x));const p=await Ir(d,r),u=p.lines||p,b=async w=>{try{const h=a==="vs_ai_club"?"club":a,{data:E,error:m}=await v.from("matches").insert({home_id:i.profile.id,away_id:null,mode:h,home_deck_id:s,status:"in_progress"}).select().single();if(m){console.error("[MatchIA] Erreur création match:",m),It(e,"⚠️","Impossible de créer le match ("+m.message+").","Retour",()=>t.navigate("home"));return}const M=p.stadiumDef||null;M&&u&&(ai(u,M),gi(p.subs||[],M));const k={gcDefs:y||[],matchId:E==null?void 0:E.id,mode:a,difficulty:r,formation:d,homeTeam:g,aiTeam:u,homeSubs:l,subsUsed:0,maxSubs:Math.min(l.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:M,homeScore:0,aiScore:0,gcCards:w,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Sr(e,k,t)}catch(h){console.error("[MatchIA] Exception launchMatch:",h),It(e,"⚠️","Erreur au lancement du match : "+h.message,"Retour",()=>t.navigate("home"))}};if(!f.length){b([]);return}wi(e,f,b)}catch(g){console.error("[MatchIA] Exception setup:",g),It(e,"⚠️","Erreur de préparation du match : "+g.message,"Retour",()=>t.navigate("home"))}})}async function Ir(e,t){var u;const{data:i}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:zr(e),subs:[],gcCards:[],stadiumDef:null};const n=Nt[e]||Nt["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]},r=new Set;function a(b,w,h){var E,m;return r.add(b.id),{cardId:"ai-"+b.id+"-"+h,id:b.id,firstname:b.firstname,name:b.surname_real,country_code:b.country_code,club_id:b.club_id,job:b.job,job2:b.job2,note_g:Number(b.note_g)||0,note_d:Number(b.note_d)||0,note_m:Number(b.note_m)||0,note_a:Number(b.note_a)||0,rarity:b.rarity,skin:b.skin,hair:b.hair,hair_length:b.hair_length,clubName:((E=b.clubs)==null?void 0:E.encoded_name)||null,clubLogo:((m=b.clubs)==null?void 0:m.logo_url)||null,boost:0,used:!1,_line:w}}for(const b of["GK","DEF","MIL","ATT"]){const w=i.filter(k=>k.job===b&&!r.has(k.id)),h=i.filter(k=>k.job!==b&&!r.has(k.id)),E=[...w,...h],m=[];for(let k=0;k<n[b];k++){const I=E[k];I&&m.push(a(I,b,k))}const M=xt(m.length);m.forEach((k,I)=>{k._col=M[I]}),o[b]=m}const d=i.filter(b=>!r.has(b.id)).slice(0,5).map((b,w)=>a(b,b.job,100+w)),f=Object.keys(je).sort(()=>Math.random()-.5).slice(0,3).map((b,w)=>{var h,E;return{id:"ai-gc-"+w,gc_type:b,name:((h=je[b])==null?void 0:h.name)||b,icon:((E=je[b])==null?void 0:E.icon)||"⚡"}}),y=Object.values(o).flat(),x={};y.forEach(b=>{b.club_id&&(x[b.club_id]=(x[b.club_id]||0)+1)});const g=(u=Object.entries(x).sort((b,w)=>w[1]-b[1])[0])==null?void 0:u[0];let p=null;if(g){const{data:b}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",g).single();b&&(p={club_id:b.id,country_code:null,name:b.encoded_name+" Stadium",club:{encoded_name:b.encoded_name,logo_url:b.logo_url}})}return{lines:o,subs:d,gcCards:f,stadiumDef:p}}function zr(e){const t=Nt[e]||Nt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let o=0;for(const r of["GK","DEF","MIL","ATT"]){const a=[];for(let d=0;d<t[r];d++){const c=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+o,id:"fake-"+o,firstname:"IA",name:n[o%n.length],country_code:"XX",club_id:null,job:r,job2:null,note_g:r==="GK"?c:2,note_d:r==="DEF"?c:2,note_m:r==="MIL"?c:2,note_a:r==="ATT"?c:2,rarity:"normal",boost:0,used:!1,_line:r}),o++}const s=xt(a.length);a.forEach((d,c)=>{d._col=s[c]}),i[r]=a}return i}function Sr(e,t,i){var o;Mn("/sounds/match-opening.mp3",.3);const n=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
  </div>`;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">
    <div style="flex-shrink:0;padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center">
      <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    </div>
    ${t.aiStadiumDef?`
    <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(30,100,220,0.35),rgba(10,60,180,0.15));border-bottom:1px solid rgba(30,120,255,0.45);flex-shrink:0">
      ${n}
      <span style="font-size:12px;font-weight:700">${t.aiStadiumDef.name}</span>
      <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((o=t.aiStadiumDef.club)==null?void 0:o.encoded_name)||t.aiStadiumDef.country_code||""}</span>
    </div>`:""}
    <div id="opponent-swipe-zone" style="flex:1;min-height:0;overflow:hidden;display:flex;align-items:center;justify-content:center">
      <div class="opponent-preview-wrap" style="overflow:hidden;display:flex;align-items:center;justify-content:center"></div>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const r=e.querySelector(".opponent-preview-wrap"),a=e.querySelector("#opponent-swipe-zone");if(!r||!a)return;const s=a.clientWidth>=900,d=Math.max(200,a.clientHeight-(s?8:40)),c=Math.max(200,a.clientWidth-(s?8:16)),l=s?null:Math.round(Math.max(44,Math.round(c*.168))*.55);r.innerHTML=Ot(t.aiTeam,t.formation,null,[],c,d,[],l),r.style.cssText=`width:${c}px;height:${d}px;overflow:hidden;flex-shrink:0`;const f=r.querySelector("svg");f&&(f.style.cssText="display:block;width:100%;height:100%",f.setAttribute("preserveAspectRatio",s?"xMidYMid meet":"none"))})),setTimeout(()=>Ar(e,t,i),5e3)}const Ke=e=>Xn(e);function Ar(e,t,i){const n=t.homeTeam.MIL||[],o=t.aiTeam.MIL||[],r=t.stadiumDef||null,a=t.aiStadiumDef||null,s=yt(n,r)+bt(n),d=yt(o,a)+bt(o),c=s>=d;e.innerHTML=`
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

    ${yi(n,t.clubName,"#D4A017","home",r)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${yi(o,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const l=()=>{const g=(p,u)=>e.querySelectorAll(p).forEach((b,w)=>{setTimeout(()=>{b.style.opacity="1",b.style.transform="translateY(0) scale(1)"},u+w*90)});g(".duel-card-home",150),g(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,u)=>{setTimeout(()=>{p.style.opacity="1"},u*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(u=>u.style.opacity="1")},1250),setTimeout(()=>{f("score-home",s,800),f("score-ai",d,800)},1500)};function f(g,p,u){const b=document.getElementById(g);if(!b)return;const w=performance.now(),h=E=>{const m=Math.min(1,(E-w)/u);b.textContent=Math.round(p*(1-Math.pow(1-m,3))),m<1?requestAnimationFrame(h):b.textContent=p};requestAnimationFrame(h)}requestAnimationFrame(l),t.attacker=c?"home":"ai";const y=c?Wn():null;c&&(t.boostCard={value:y}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(g=>Ke(g)),aiPlayers:o.map(g=>Ke(g)),homeTotal:s,aiTotal:d,text:`Duel milieu : ${t.clubName} ${s} – ${d} IA → ${c?t.clubName+" attaque":"IA attaque"}`});const x=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",_e(e,t,i),t.attacker==="ai"&&setTimeout(()=>en(e,t,i),800)};setTimeout(()=>{const g=document.getElementById("score-home"),p=document.getElementById("score-ai"),u=document.getElementById(c?"duel-row-home":"duel-row-ai"),b=document.getElementById(c?"duel-row-ai":"duel-row-home"),w=c?g:p,h=c?p:g;w&&(w.style.fontSize="80px",w.style.color=c?"#FFD700":"#ff6b6b",w.style.animation="duelPulse .5s ease"+(c?", duelGlow 1.5s ease infinite .5s":"")),h&&(h.style.opacity="0.25"),setTimeout(()=>{u&&(u.style.transformOrigin="center",u.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",u.style.zIndex="5"),setTimeout(()=>{var m;const E=document.getElementById("duel-shock");if(E){const M=(m=b||u)==null?void 0:m.getBoundingClientRect(),k=e.querySelector(".match-screen").getBoundingClientRect();M&&(E.style.top=M.top-k.top+M.height/2+"px"),E.style.animation="shockwave .5s ease-out forwards"}b&&(b.style.transformOrigin="center",b.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var m;const E=document.getElementById("duel-finale");E&&(E.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${c?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${c?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${y}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,E.style.transition="opacity .45s ease",E.style.opacity="1",E.style.pointerEvents="auto",(m=document.getElementById("start-match-btn"))==null||m.addEventListener("click",x))},600)},700)},2800)}function _e(e,t,i){var W,te,Z,A,$,N,X,ce,fe;const n=t.selected.map(C=>C.cardId),o=t.usedSubIds||[],r=t.homeSubs.filter(C=>!o.includes(C.cardId)),s=Object.values(t.homeTeam).flat().filter(C=>C.used).length>0&&r.length>0&&t.subsUsed<t.maxSubs,d=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(C=>!C.used),c=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(C=>!C.used),l=Ht(t.aiTeam),f=d.length===0&&c.length===0&&!l,y=(t.homeTeam.DEF||[]).filter(C=>!C.used),x=(t.homeTeam.GK||[]).filter(C=>!C.used);let g=[];t.phase==="attack"&&d.length===0&&(l?(g=y.map(C=>C.cardId),y.length===0&&(g=g.concat(x.map(C=>C.cardId)))):f&&(g=[...y,...x].map(C=>C.cardId))),t.log[t.log.length-1];const p=t.phase==="ai-attack"||t.phase==="ai-defense",u=t.phase==="attack",b=t.phase==="defense",w=t.phase==="finished",E=(t.homeSubs||[]).filter(C=>!(t.usedSubIds||[]).includes(C.cardId)).length>0&&t.subsUsed<t.maxSubs,m=u&&d.length===0&&g.length===0&&!E,M=t.gcCards.filter(C=>!t.usedGc.includes(C.id)),k=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
        <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.clubName}</span>
        <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${t.homeScore} – ${t.aiScore}</span>
        <span style="font-size:12px;color:rgba(255,255,255,0.5)">IA (${t.difficulty.toUpperCase()})</span>
      </div>
      <button id="view-ai" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
    </div>

    <!-- ZONE ACTIONS -->
    <div id="last-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const Y=t.pendingAttack;let ue="";if(t.selected.length>0){const K=t.selected.map(L=>({...(t.homeTeam[L._role]||[]).find(U=>U.cardId===L.cardId)||L,_line:L._role})),V=ri(K,t.modifiers.home,t.formation);ue=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${t.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${Je(K.map(L=>({...L,used:!1})),"#3a7bd5",V.total,"defense",t.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${Je((Y.players||[]).map(K=>({...K,used:!1})),"#ff6b6b",Y.total,"attack",t.formation)}</div>
            ${ue}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const Y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${Je((Y.players||[]).map(ue=>({...ue,used:!1})),"#00ff88",Y.total,"attack",t.formation)}</div>
          </div>`}if(t.phase==="attack"&&t.selected.length>0){const Y=t.selected.map(K=>{const V=(t.homeTeam[K._role]||[]).find(F=>F.cardId===K.cardId)||K,L=["GK","DEF"].includes(K._role);return{...V,_line:K._role,...L?{note_a:Math.max(1,Number(V.note_a)||0)}:{}}}),ue=oi(Y,t.modifiers.home,t.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${t.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${Je(Y.map(K=>({...K,used:!1})),"#FFD700",ue.total,"attack",t.formation)}</div>
          </div>`}const C=t.log[t.log.length-1];return C?'<div style="padding:2px 4px">'+Jn(C)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const C=window.innerWidth>=700,Y=(q,G,se)=>{var Se,Be;const de=(t.gcDefs||[]).find(ke=>ke.name===q.gc_type),ve=(de==null?void 0:de.name)||q.gc_type,Te=(de==null?void 0:de.effect)||((Se=je[q.gc_type])==null?void 0:Se.desc)||"",he=de!=null&&de.image_url?`/icons/${de.image_url}`:null,ze=((Be=je[q.gc_type])==null?void 0:Be.icon)||"⚡";return`<div class="gc-mini" data-gc-id="${q.id}" data-gc-type="${q.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${tt(ve,he,ze,Te,{width:G})}
        </div>`},ue=(q,G)=>{var se;return`<div id="boost-card"
          style="box-sizing:border-box;width:${q}px;height:${G}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(G*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(G*.2)}px">⚡</div>
            <div style="font-size:${Math.round(G*.09)}px;color:#000;font-weight:900">+${(se=t.boostCard)==null?void 0:se.value}</div>
          </div>`},K=(q,G)=>G?ue(95,162):Y(q,95),V=(q,G)=>G?ue(68,116):Y(q,68),L=C?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",F=w?`<button id="btn-results" style="${L};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:p?`<div style="${L};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:m?`<button id="btn-pass" style="${L};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:u?`<button id="btn-action" style="${L};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:b?`<button id="btn-action" style="${L};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${L};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,U=u||b?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",O=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${C?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${r.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':r.map(q=>`<div class="sub-btn-col" data-sub-id="${q.cardId}" style="cursor:pointer;flex-shrink:0">${vt(q,76,100)}</div>`).join("")}
      </div>`,re=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${Ot(t.homeTeam,t.formation,t.phase,n,C?1300:zt(),C?600:Rt(),g)}
        </div>
      </div>`;return C?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${O}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${re}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${F}${U}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${M.map(q=>K(q,!1)).join("")}
            ${k?K(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ot(t.homeTeam,t.formation,t.phase,n,C?1300:zt(),C?600:Rt(),g)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${M.map(q=>V(q,!1)).join("")}
            ${k?V(null,!0):""}
            <div id="sub-btn-main" style="cursor:${s?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${s?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${s?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${s?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${r.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${t.subsUsed}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${t.subsUsed}/${t.maxSubs} rempl.</div>
            </div>
          </div>
          <div>${F}${U}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(C=>{var Y,ue,K;if(C.type==="duel"){const V=C.isGoal,L=C.homeScored?"#FFD700":V?"#ff6b6b":"rgba(255,255,255,0.3)",F=C.homeScored?"⚽ BUT !":V?"⚽ BUT IA !":(Y=C.homePlayers)!=null&&Y.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${V?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${L};margin-bottom:4px">
                <div style="font-size:9px;color:${L};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${F}</div>
                ${(ue=C.homePlayers)!=null&&ue.length?`<div style="margin-bottom:3px">${Je(C.homePlayers,"rgba(255,255,255,0.7)",C.homeTotal,void 0,t.formation)}</div>`:""}
                ${(K=C.aiPlayers)!=null&&K.length?`<div style="opacity:0.7">${Je(C.aiPlayers,"#ff6b6b",C.aiTotal,void 0,t.formation)}</div>`:""}
              </div>`}return C.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${C.outPlayer?vt({...C.outPlayer,used:!0,_line:C.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${C.inPlayer?vt({...C.inPlayer,_line:C.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:C.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${C.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${C.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function I(){const C=e.querySelector(".match-screen");if(!C)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);C.style.bottom="auto",C.style.height=Y+"px",C.style.minHeight=Y+"px",C.style.maxHeight=Y+"px",C.style.overflow="hidden";const ue=e.querySelector("#mobile-action-bar"),K=e.querySelector("#mobile-play-area");ue&&K&&(K.style.paddingBottom=ue.offsetHeight+"px")}if(I(),setTimeout(I,120),setTimeout(I,400),setTimeout(I,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",I),window.visualViewport.addEventListener("scroll",I)),window.addEventListener("resize",I)),function(){const Y=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!Y)return;const ue=Y.closest("#match-terrain-wrap");ue&&(ue.style.cssText="position:relative;width:100%;height:100%;padding:0"),Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("preserveAspectRatio","xMidYMid meet")}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const C=e.querySelector(".terrain-wrapper svg");if(C){const Y=C.closest("#match-terrain-wrap");Y&&(Y.style.cssText="position:relative;width:100%;height:100%;padding:0"),C.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ue(),t.phase==="attack"||t.phase==="defense"){let C=!1,Y=30;const ue=()=>document.getElementById("match-timer"),K=()=>{const V=ue();if(!V)return;const L=String(Math.floor(Y/60)).padStart(2,"0"),F=String(Y%60).padStart(2,"0");V.textContent=` ${L}:${F}`,V.style.color=C?"#ff2222":"#ff9500",V.style.fontWeight="900"};K(),t._timerInt=setInterval(()=>{if(Y--,Y<0)if(!C)C=!0,Y=15,K(),Cn("/sounds/timer-urgent.mp3",.6);else{clearInterval(t._timerInt),t._timerInt=null,Ue(),t.homeScore=0,t.aiScore=3;const V=document.createElement("div");V.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",V.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(V),setTimeout(()=>{V.remove(),ht(e,t,i)},2500)}else K()},1e3)}(W=document.getElementById("match-quit"))==null||W.addEventListener("click",()=>{it(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,ht(e,t,i))}),(te=document.getElementById("view-ai"))==null||te.addEventListener("click",()=>Nr(t,i)),(Z=document.getElementById("toggle-history"))==null||Z.addEventListener("click",()=>{var C;(C=document.getElementById("match-history-panel"))==null||C.classList.add("open")}),(A=document.getElementById("close-history"))==null||A.addEventListener("click",()=>{var C;(C=document.getElementById("match-history-panel"))==null||C.classList.remove("open")}),($=document.getElementById("btn-action"))==null||$.addEventListener("click",()=>{t.selected.length!==0&&(u?Cr(e,t,i):b&&jr(e,t,i))}),(N=document.getElementById("btn-results"))==null||N.addEventListener("click",()=>ht(e,t,i)),(X=document.getElementById("btn-pass"))==null||X.addEventListener("click",()=>{if(t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Fi(t.aiTeam,t.homeTeam)){t.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),ht(e,t,i);return}t.phase="ai-attack",_e(e,t,i),setTimeout(()=>en(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(C=>{C.addEventListener("click",()=>Mr(C,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(C=>{C.addEventListener("click",()=>Si(e,t,i,null,C.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(C=>{u?C.addEventListener("click",()=>Fr(C.dataset.gcId,C.dataset.gcType,e,t,i)):(C.style.opacity="0.35",C.style.cursor="default",C.addEventListener("click",()=>$t("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(ce=document.getElementById("boost-card"))==null||ce.addEventListener("click",()=>Rr(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(C=>{C.addEventListener("click",()=>Si(e,t,i,C.dataset.subId))}),(fe=document.getElementById("sub-btn-main"))==null||fe.addEventListener("click",()=>Si(e,t,i))}function Mr(e,t,i,n){const o=e.dataset.cardId,r=e.dataset.role,a=t.selected.findIndex(s=>s.cardId===o);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[r]||[]).find(d=>d.cardId===o);s&&t.selected.push({...s,_role:r,_line:r})}_e(i,t,n)}function Zi(e,t,i){e.matchId&&v.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Cr(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ue(),Zi(t,i,i.state.profile.id);const n=t.selected.map(r=>{const a=(t.homeTeam[r._role]||[]).find(d=>d.cardId===r.cardId)||r,s=["GK","DEF"].includes(r._role);return{...a,_line:r._role,...s?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),o=oi(n,t.modifiers.home,t.formation);t.pendingAttack={...o,players:[...n],side:"home"},t.selected.forEach(r=>{const a=(t.homeTeam[r._role]||[]).find(s=>s.cardId===r.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${o.total} (base ${o.base}${o.links?` +${o.links} liens`:""}) — ${t.selected.map(r=>r.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",_e(e,t,i),setTimeout(()=>Dr(e,t,i),1200)}function jr(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ue(),Zi(t,i,i.state.profile.id);const n=t.stadiumDef||null,o=t.selected.map(d=>{const c=(t.homeTeam[d._role]||[]).find(f=>f.cardId===d.cardId)||d,l=c.stadiumBonus||n&&(n.club_id&&String(c.club_id)===String(n.club_id)||n.country_code&&c.country_code===n.country_code)||!1;return{...c,_line:d._role,stadiumBonus:l}}),r=ri(o,t.modifiers.home,t.formation);t.selected.forEach(d=>{const c=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId);c&&(c.used=!0)});const a=Qi(t.pendingAttack.total,r.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>Ke(d)),homePlayers:t.selected.map(d=>{const c=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId)||d;return Ke(c)}),homeTotal:r.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(a.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${r.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,_e(e,t,i),Qe(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{St(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${r.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,St(e,t,i,"home-attack")}function Br(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(d=>d.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(d=>!e.aiUsedSubIds.includes(d.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],o=i.find(d=>d.job===n.job)||i[0],r={...o,used:!1,_line:n._line,_col:n._col},a=e.aiTeam[n._line],s=a.findIndex(d=>d.cardId===n.cardId);s!==-1&&(a[s]=r),e.aiUsedSubIds.push(o.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${o.firstname} ${o.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function qr(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(o=>!e.aiUsedGc.includes(o.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),je[i.gc_type],i.gc_type){case"Boost+2":{const o=Object.values(e.aiTeam).flat().filter(r=>!r.used);if(o.length){const r=o[Math.floor(Math.random()*o.length)];r.boost=(r.boost||0)+2}break}case"Boost+3":{const o=Object.values(e.aiTeam).flat().filter(r=>!r.used);if(o.length){const r=o[Math.floor(Math.random()*o.length)];r.boost=(r.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function en(e,t,i){Zi(t,i,null),Br(t),qr(t);let n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used),o=!1;if(!n.length){const l=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(y=>!y.used),f=Ht(t.homeTeam);if(f||l.length===0){const y=(t.aiTeam.DEF||[]).filter(g=>!g.used),x=(t.aiTeam.GK||[]).filter(g=>!g.used);n=f?y.length?y:x:[...y,...x],o=!0}}const r=Rn(n,"attack",t.difficulty);if(!r.length){Pi(e,t,i);return}o&&r.forEach(l=>{l._line=l._line||l.job,l.note_a=Math.max(1,Number(l.note_a)||0)});const a=oi(r,t.modifiers.ai,t.formation);t.pendingAttack={...a,players:r,side:"ai"},r.forEach(l=>{l.used=!0}),t.log.push({text:`🤖 IA attaque : ${a.total} (${r.map(l=>l.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used),c=(t.homeSubs||[]).filter(l=>!(t.usedSubIds||[]).includes(l.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!c){if(r.length===1&&(r[0]._line==="GK"||r[0].job==="GK")&&Ht(t.homeTeam)&&t.homeScore===t.aiScore){t.aiScore++,bi(e,t,i,"ai",r[0]);return}t.aiScore++;const f={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:r.map(y=>Ke(y)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(f),t.pendingAttack=null,_e(e,t,i),Qe(f.aiPlayers,t.homeScore,t.aiScore,!1,()=>{St(e,t,i,"home-attack")});return}t.phase="defense",_e(e,t,i)}function Dr(e,t,i){var c,l;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],o=Rn(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(t.aiTeam[f]||[]).filter(y=>!y.used)).length){const f=((c=t.pendingAttack)==null?void 0:c.players)||[];if(f.length===1&&(f[0]._line==="GK"||f[0].job==="GK")&&t.homeScore===t.aiScore){t.homeScore++,bi(e,t,i,"home",f[0]);return}t.homeScore++;const x={type:"duel",isGoal:!0,homeScored:!0,homePlayers:f.map(g=>Ke(g)),homeTotal:((l=t.pendingAttack)==null?void 0:l.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(x),t.modifiers.ai={},t.pendingAttack=null,_e(e,t,i),Qe(x.homePlayers,t.homeScore,t.aiScore,!0,()=>{St(e,t,i,"ai-attack")});return}const a=o.length>0?ri(o,t.modifiers.ai,t.formation).total:0;o.forEach(f=>{f.used=!0});const s=Qi(t.pendingAttack.total,a,t.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(f=>Ke(f)),aiPlayers:o.map(f=>Ke(f)),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier IA !",t.log.push(d);else if(s.goal){t.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(d),t.modifiers.ai={},t.pendingAttack=null,_e(e,t,i),Qe(d.homePlayers,t.homeScore,t.aiScore,!0,()=>{St(e,t,i,"ai-attack")});return}else d.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.modifiers.ai={},t.pendingAttack=null,St(e,t,i,"ai-attack")}function St(e,t,i,n){if(t.round++,!Zn(e,t,i)){if(tn(t)){ht(e,t,i);return}if(n==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(r=>(t.homeTeam[r]||[]).some(a=>!a.used))){Pi(e,t,i);return}t.phase="attack",_e(e,t,i)}else{if(!["MIL","ATT","GK","DEF"].some(r=>(t.aiTeam[r]||[]).some(a=>!a.used))){Pi(e,t,i);return}t.phase="ai-attack",_e(e,t,i),setTimeout(()=>en(e,t,i),800)}}}function Ht(e){return!["GK","DEF","MIL","ATT"].some(t=>(e[t]||[]).some(i=>!i.used))}function $n(e){const t=(e.GK||[]).some(n=>!n.used),i=["DEF","MIL","ATT"].some(n=>(e[n]||[]).some(o=>!o.used));return t&&!i}function Zn(e,t,i){if(t.homeScore!==t.aiScore)return!1;if($n(t.homeTeam)&&Ht(t.aiTeam)){const n=(t.homeTeam.GK||[]).find(o=>!o.used);return n?(n.used=!0,t.homeScore++,bi(e,t,i,"home",n),!0):!1}if($n(t.aiTeam)&&Ht(t.homeTeam)){const n=(t.aiTeam.GK||[]).find(o=>!o.used);return n?(n.used=!0,t.aiScore++,bi(e,t,i,"ai",n),!0):!1}return!1}function bi(e,t,i,n,o){t.log.push({type:"duel",isGoal:!0,homeScored:n==="home",homePlayers:n==="home"?[Ke(o)]:[],aiPlayers:n==="ai"?[Ke(o)]:[],text:`⚽ DERNIER CORNER — Le gardien ${n==="home"?"":"adverse "}marque !`});const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(r);const a=(s,d)=>new Promise(c=>{r.innerHTML=`<div style="font-size:32px;font-weight:900;color:${d};letter-spacing:2px;animation:lcFade 1.4s ease both">${s}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(c,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),r.remove(),t.pendingAttack=null,_e(e,t,i),Qe([Ke(o)],t.homeScore,t.aiScore,n==="home",()=>{if(tn(t)){ht(e,t,i);return}St(e,t,i,n==="home"?"ai-attack":"home-attack")})))()}function tn(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(o=>!o.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(o=>!o.used));return!t&&!i}function Fi(e,t){return!(["MIL","ATT"].some(o=>(e[o]||[]).some(r=>!r.used))||Ht(t)||!["MIL","ATT"].some(o=>(t[o]||[]).some(r=>!r.used)))}function Pi(e,t,i){if(!Zn(e,t,i)){if(tn(t)){ht(e,t,i);return}if(Fi(t.homeTeam,t.aiTeam)&&Fi(t.aiTeam,t.homeTeam)){t.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),ht(e,t,i);return}t.phase="attack",_e(e,t,i)}}function Si(e,t,i,n=null,o=null){var x,g;if(t.phase!=="attack"){$t("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){$t(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const r=Object.entries(t.homeTeam).flatMap(([p,u])=>(u||[]).filter(b=>b.used).map(b=>({...b,_line:b._line||p}))),a=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!r.length){$t("Aucun joueur utilisé à remplacer");return}if(!a.length){$t("Aucun remplaçant disponible");return}let s=Math.max(0,r.findIndex(p=>p.cardId===o));const d=((x=r[s])==null?void 0:x._line)||((g=r[s])==null?void 0:g.job);let c=n?Math.max(0,a.findIndex(p=>p.cardId===n)):Math.max(0,a.findIndex(p=>p.job===d)),l=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function y(){var m,M,k,I,B,W;const p=r[s],u=a[c],b=Math.min(130,Math.round((window.innerWidth-90)/2)),w=Math.round(b*1.35),h=te=>`background:rgba(255,255,255,0.12);border:none;color:${te?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${te?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${h(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${u?vt({...u,used:!1,boost:0},b,w):"<div>—</div>"}</div>
        <button id="in-down" style="${h(c>=a.length-1)}" ${c>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${h(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?vt({...p,used:!1,boost:0},b,w):"<div>—</div>"}</div>
        <button id="out-down" style="${h(s>=r.length-1)}" ${s>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${r.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(m=f.querySelector("#sub-close"))==null||m.addEventListener("click",()=>f.remove()),(M=f.querySelector("#out-up"))==null||M.addEventListener("click",()=>{s>0&&(s--,y())}),(k=f.querySelector("#out-down"))==null||k.addEventListener("click",()=>{s<r.length-1&&(s++,y())}),(I=f.querySelector("#in-up"))==null||I.addEventListener("click",()=>{c>0&&(c--,y())}),(B=f.querySelector("#in-down"))==null||B.addEventListener("click",()=>{c<a.length-1&&(c++,y())});const E=(te,Z,A,$)=>{const N=f.querySelector("#"+te);if(!N)return;let X=0;N.addEventListener("touchstart",ce=>{X=ce.touches[0].clientY},{passive:!0}),N.addEventListener("touchend",ce=>{const fe=ce.changedTouches[0].clientY-X;if(Math.abs(fe)<30)return;const C=Z();fe<0&&C<$-1?(A(C+1),y()):fe>0&&C>0&&(A(C-1),y())},{passive:!0})};E("in-panel",()=>c,te=>c=te,a.length),E("out-panel",()=>s,te=>s=te,r.length),(W=f.querySelector("#sub-confirm"))==null||W.addEventListener("click",te=>{if(te.preventDefault(),te.stopPropagation(),l)return;l=!0;const Z=r[s],A=a[c];if(!Z||!A)return;let $=null,N=-1;for(const[ce,fe]of Object.entries(t.homeTeam)){const C=(fe||[]).findIndex(Y=>Y.cardId===Z.cardId);if(C!==-1){$=ce,N=C;break}}if(N===-1||!$){$t("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const X={...A,_line:$,_col:Z._col||0,used:!1,boost:0};t.homeTeam[$].splice(N,1,X),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(A.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Z.name,firstname:Z.firstname,note:Pe(Z,$),portrait:At(Z),job:Z.job,country_code:Z.country_code,rarity:Z.rarity,clubName:Z.clubName,clubLogo:Z.clubLogo},inPlayer:{name:A.name,firstname:A.firstname,note:Pe(A,$),portrait:At(A),job:A.job,country_code:A.country_code,rarity:A.rarity,clubName:A.clubName,clubLogo:A.clubLogo},text:`🔄 ${A.firstname} ${A.name} remplace ${Z.firstname} ${Z.name}`}),f.remove(),Lr(Z,A,()=>_e(e,t,i))})}document.body.appendChild(f),y()}function Fr(e,t,i,n,o){var y,x;const r=(n.gcDefs||[]).find(g=>g.name===t),a=je[t]||{icon:"⚡",desc:"Carte spéciale."},s=(r==null?void 0:r.name)||t,d=(r==null?void 0:r.effect)||a.desc,c=r!=null&&r.image_url?`/icons/${r.image_url}`:null,l=a.icon||"⚡",f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",f.innerHTML=`
    ${tt(s,c,l,d,{width:190})}
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(f),(y=f.querySelector("#gc-back"))==null||y.addEventListener("click",()=>f.remove()),(x=f.querySelector("#gc-use"))==null||x.addEventListener("click",()=>{f.remove(),Gr(e,t,i,n,o)})}function pi(e,t,i,n,o,r){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function d(){var c,l;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${e.map(f=>{const y=f._line||f.job||"MIL",x=s.find(p=>p.cardId===f.cardId),g=Ie({...f,_evolution_bonus:0},{width:90,showStad:!0,role:y,extraNote:f.boost||0});return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="position:relative;border-radius:8px;${x?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          ${g}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(c=a.querySelector("#gc-picker-close"))==null||c.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const y=f.dataset.cid,x=e.find(p=>p.cardId===y);if(!x)return;const g=s.findIndex(p=>p.cardId===y);g>-1?s.splice(g,1):s.length<t&&s.push(x),d()})}),(l=a.querySelector("#gc-picker-confirm"))==null||l.addEventListener("click",()=>{a.remove(),r(s)})}d(),document.body.appendChild(a)}const Pr={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,o,r)=>{const a=Object.entries(n.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,d])=>d.filter(c=>!c.used).map(c=>({...c,_line:s})));return a.length?(pi(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,o,n,s=>{s.forEach(d=>{const c=(n.homeTeam[d._line]||[]).find(l=>l.cardId===d.cardId);c&&(c.boost=(c.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${c.name}`,type:"info"}))}),_e(o,n,r)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),_e(o,n,r),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},o,r,a)=>{const s=n==="home"?o.homeTeam:o.aiTeam,d=n==="ai"?"adverse":"allié",c=Object.entries(s).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,f])=>f.filter(y=>!y.used).map(y=>({...y,_line:l})));return c.length?(pi(c,t,`Choisir ${t} joueur(s) ${d}(s) à débuffer (-${e})`,r,o,l=>{l.forEach(f=>{const x=((n==="home"?o.homeTeam:o.aiTeam)[f._line]||[]).find(g=>g.cardId===f.cardId);x&&(x.boost=(x.boost||0)-e,o.log.push({text:`🎯 -${e} sur ${x.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),_e(r,o,a)}),!0):(o.log.push({text:`🎯 Aucun joueur ${d} disponible`,type:"info"}),_e(r,o,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,o,r)=>{const a=i==="home"?n.homeTeam:n.aiTeam,s=i==="ai"?"adverse":"allié",d=Object.entries(a).filter(([c])=>!t.length||t.includes(c)).flatMap(([c,l])=>l.filter(f=>!f.used).map(f=>({...f,_line:c})));return d.length?(pi(d,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,o,n,c=>{c.forEach(l=>{const y=((i==="home"?n.homeTeam:n.aiTeam)[l._line]||[]).find(x=>x.cardId===l.cardId);y&&(y.used=!0,n.log.push({text:`❌ ${y.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),_e(o,n,r)}),!0):(n.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),_e(o,n,r),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,o)=>{const r=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,s])=>s.filter(d=>d.used).map(d=>({...d,_line:a})));return r.length?(pi(r,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,a=>{a.forEach(s=>{const d=(i.homeTeam[s._line]||[]).find(c=>c.cardId===s.cardId);d&&(d.used=!1,i.log.push({text:`💫 ${d.name} ressuscité !`,type:"info"}))}),_e(n,i,o)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),_e(n,i,o),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Gr(e,t,i,n,o){n.usedGc.push(e);const r=n.gcDefs||[],a=r.find(d=>d.name===t)||r.find(d=>{var c;return((c=d.name)==null?void 0:c.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const d=Pr[a.effect_type];d?d(a.effect_params||{},n,i,o)||(s=!0):(o.toast(`Effet "${a.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const d=Object.entries(n.homeTeam).flatMap(([c,l])=>(l||[]).filter(f=>f.used).map(f=>({...f,_line:c})));d.length?(d[0].used=!1,n.log.push({text:`💫 ${d[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const d=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(c=>!c.used);if(d.length){const c=d.sort((l,f)=>Pe(f,"ATT")-Pe(l,"ATT"))[0];c.used=!0,n.log.push({text:`❄️ ${c.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}v.from("cards").delete().eq("id",e).then(()=>{}),s&&_e(i,n,o)}function Rr(e,t,i){const n=Object.values(t.homeTeam).flat().filter(o=>!o.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(o=>`
        <div class="player-boost-opt" data-card-id="${o.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${_r[o.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Pe(o,o._line||o.job)}</div>
          <div style="flex:1"><b>${o.firstname} ${o.name}</b><div style="font-size:11px;color:#888">${o._line||o.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(o=>{o.addEventListener("click",()=>{const r=o.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[a]||[]).find(d=>d.cardId===r);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),_e(e,t,i)})})}async function ht(e,t,i){var l,f;Tt(),Ue(),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,o=t.homeScore>t.aiScore,r=t.homeScore===t.aiScore,a=o?"victoire":r?"nul":"defaite",s=Vo(t.mode,a);t.matchId&&await v.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:o?n.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const d={credits:(n.profile.credits||0)+s,matches_played:(n.profile.matches_played||0)+1};o?d.wins=(n.profile.wins||0)+1:r?d.draws=(n.profile.draws||0)+1:d.losses=(n.profile.losses||0)+1,await v.from("users").update(d).eq("id",n.profile.id),await i.refreshProfile();const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",c.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${o?"🏆":r?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${o?"Victoire !":r?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${s.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(c),(l=document.getElementById("res-home"))==null||l.addEventListener("click",()=>{c.remove(),it(e),i.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{c.remove(),it(e),i.navigate("match",{matchMode:t.mode})})}function Nr(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${_i(e.aiTeam,e.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Or={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function Hr(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Ur(e,t){!e||!t||await Promise.all([En(e,"win"),En(t,"loss")])}async function En(e,t){const{data:i}=await v.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const n=i.filter(o=>{var r,a;return((r=o.player)==null?void 0:r.rarity)==="pepite"||((a=o.player)==null?void 0:a.rarity)==="papyte"});n.length&&await Promise.all(n.map(o=>{const r=Or[o.player.rarity],a=t==="win"?r.win:r.loss,s=o.player.note_min??1,d=o.player.note_max??10,c=Hr(o.player),l=o.current_note??c,f=Math.min(d,Math.max(s,l+a));return v.from("cards").update({current_note:f}).eq("id",o.id)}))}const Dt=e=>Xn(e);async function Ct(e,t,i,n,o={}){return eo(e,t,i,n,o.myGC||[],o.gcDefs||[],o.isRanked||!1,o.rankedData||null,o.stadiumDef||null,o.onMatchEnd||null,o.mlLeagueId||null,o.mlMatchId||null)}async function Kr(e,t,i){const{data:n}=await v.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!n){t.toast("Match introuvable","error"),t.navigate("home");return}const o=n.home_id===t.state.user.id;let r=null,a=null;if(n.mode==="mini_league"){const{data:s}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();s&&(r=s.league_id,a=s.id)}return eo(e,t,i,o,[],[],n.is_ranked||!1,null,null,null,r,a)}async function eo(e,t,i,n,o=[],r=[],a=!1,s=null,d=null,c=null,l=null,f=null){const{state:y,navigate:x,toast:g}=t,p=n?"p1":"p2",u=n?"p2":"p1",b=(o||[]).map(_=>_.id),w=(o||[]).map(_=>({id:_.id,gc_type:_.gc_type,_gcDef:_._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await v.from("matches").select("*").eq("id",i).single();if(!h){g("Match introuvable","error"),x("home");return}async function E(){var xe,be;console.log("[PvP] buildGameState match:",{id:h.id,home_deck_id:h.home_deck_id,away_deck_id:h.away_deck_id,mode:h.mode,is_ranked:h.is_ranked});const[{data:_,error:T},{data:S,error:j},{data:z},{data:R}]=await Promise.all([v.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),v.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),v.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),v.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",T==null?void 0:T.message,"p2:",j==null?void 0:j.message,"p1D:",(xe=_==null?void 0:_.starters)==null?void 0:xe.length,"p2D:",(be=S==null?void 0:S.starters)==null?void 0:be.length);const D=oe=>{const Ee=Number(oe.evolution_bonus)||0;return{cardId:oe.card_id,position:oe.position,id:oe.id,firstname:oe.firstname,name:oe.surname_real,country_code:oe.country_code,club_id:oe.club_id,job:oe.job,job2:oe.job2,note_g:(Number(oe.note_g)||0)+(oe.job==="GK"||oe.job2==="GK"&&Number(oe.note_g)>0?Ee:0),note_d:(Number(oe.note_d)||0)+(oe.job==="DEF"||oe.job2==="DEF"&&Number(oe.note_d)>0?Ee:0),note_m:(Number(oe.note_m)||0)+(oe.job==="MIL"||oe.job2==="MIL"&&Number(oe.note_m)>0?Ee:0),note_a:(Number(oe.note_a)||0)+(oe.job==="ATT"||oe.job2==="ATT"&&Number(oe.note_a)>0?Ee:0),evolution_bonus:Ee,rarity:oe.rarity,skin:oe.skin,hair:oe.hair,hair_length:oe.hair_length,face:oe.face||null,clubName:oe.club_encoded_name||null,clubLogo:oe.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},P=((_==null?void 0:_.starters)||[]).map(oe=>D(oe)),H=((S==null?void 0:S.starters)||[]).map(oe=>D(oe)),Q=(_==null?void 0:_.formation)||"4-4-2",ne=(S==null?void 0:S.formation)||"4-4-2";let ie=xi(P,Q),ee=xi(H,ne);const ae=((_==null?void 0:_.subs)||[]).map(oe=>D(oe)),le=((S==null?void 0:S.subs)||[]).map(oe=>D(oe)),ge=(_==null?void 0:_.stadium_def)||(n?d:null),pe=(S==null?void 0:S.stadium_def)||(n?null:d);return ge&&(ie=ai(ie,ge),gi(ae,ge)),pe&&(ee=ai(ee,pe),gi(le,pe)),{p1Team:ie,p2Team:ee,p1Subs:ae,p2Subs:le,p1Formation:Q,p2Formation:ne,p1Name:(z==null?void 0:z.club_name)||(z==null?void 0:z.pseudo)||"Joueur 1",p2Name:(R==null?void 0:R.club_name)||(R==null?void 0:R.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?b:[],gc_p2:n?[]:b,gcCardsFull_p1:n?w:[],gcCardsFull_p2:n?[]:w,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:r||[],lastActionAt:new Date().toISOString()}}let m=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!m,"match.status:",h.status,"home_id:",h.home_id,"away_id:",h.away_id,"myId:",y.profile.id),!m)if(n){m=await E(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((m==null?void 0:m.p1Team)||{}));const{data:_}=await v.from("matches").select("game_state").eq("id",i).single();!(_!=null&&_.game_state)||!Object.keys(_.game_state).length?await v.from("matches").update({game_state:m,turn_user_id:h.home_id}).eq("id",i):m=_.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let _=0;_<30&&!m;_++){await new Promise(S=>setTimeout(S,400));const{data:T}=await v.from("matches").select("game_state").eq("id",i).single();T!=null&&T.game_state&&Object.keys(T.game_state).length&&(m=T.game_state),_%5===0&&console.log("[PvP] away - poll",_,"game_state:",!!(T!=null&&T.game_state))}if(!m){g("Erreur de synchronisation","error"),x("home");return}m.gc_p2=b,m.gcCardsFull_p2=w,await v.from("matches").update({game_state:m}).eq("id",i)}let M=!1,k=null,I=!1;const B=new Set,W=new Set;async function te(_){var ne,ie;Tt();try{v.removeChannel(Z)}catch{}const T=m[p+"Score"]||0,S=m[u+"Score"]||0;let j,z;_.winner_id?(j=_.winner_id===y.profile.id,z=!1):_.forfeit?(j=T>S,z=!1):(z=T===S,j=T>S);let R="";if(a&&n)try{const{data:ee}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.home_id).single(),{data:ae}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.away_id).single();if(ee&&ae){const le=j?1:z?.5:0,ge=1-le,pe=ee.placement_matches<10,xe=ae.placement_matches<10,be=computeGlicko2(ee.mmr,ee.mmr_deviation,ee.mmr_volatility,ae.mmr,ae.mmr_deviation,le===1?1:le===0?0:.5,pe),oe=computeGlicko2(ae.mmr,ae.mmr_deviation,ae.mmr_volatility,ee.mmr,ee.mmr_deviation,ge===1?1:ge===0?0:.5,xe);await v.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:z?null:j?h.home_id:h.away_id,p_home_id:h.home_id,p_away_id:h.away_id,p_home_delta:be.delta,p_away_delta:oe.delta,p_home_new_rd:be.newRd,p_away_new_rd:oe.newRd,p_home_new_vol:be.newSigma,p_away_new_vol:oe.newSigma});const Ee=be.delta,Re=be.newMmr,Le=getTier(Re),Ve=Ee>=0?"+":"",Oe=Ee>=0?"#4caf50":"#ff6b6b",nt=getTier(ee.mmr);R=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Le.id!==nt.id?`<div style="font-size:20px;font-weight:900;color:${Le.color}">
                    ${Re>ee.mmr?"📈":"📉"} ${nt.emoji} ${nt.label} → ${Le.emoji} ${Le.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Re>ee.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Ee>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Le.color}">${Le.emoji} ${Le.label}</div>`}
              ${pe?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${ee.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(ee){console.error("[Ranked] MMR update error:",ee)}(ne=document.getElementById("pvp-end-overlay"))==null||ne.remove();const D=document.createElement("div");D.id="pvp-end-overlay",D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const P=z?"🤝":j?"🏆":"😞",H=z?"MATCH NUL":j?"VICTOIRE !":"DÉFAITE",Q=z?"#fff":j?"#FFD700":"#ff6b6b";D.innerHTML=`
      <div style="font-size:64px">${P}</div>
      <div style="font-size:26px;font-weight:900;color:${Q}">${H}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${m[p+"Name"]} ${T} – ${S} ${m[u+"Name"]}</div>
      ${_.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${j?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${R}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(D),(ie=D.querySelector("#pvp-end-home"))==null||ie.addEventListener("click",()=>{D.remove(),it(e),l?x("mini-league",{openLeagueId:l}):x(a?"ranked":"home")})}const Z=v.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},_=>{var S;const T=_.new;try{if(T.status==="finished"||T.forfeit){if(M)return;M=!0,k&&(clearInterval(k),k=null),Ue(),T.game_state&&(m=T.game_state),te(T);return}if(T.game_state){const j=m;m=T.game_state;const z=m._lastGC;if(z&&z.seq&&!W.has(z.seq)&&(W.add(z.seq),z.by!==p)){L(z.type,z.by,()=>Y());return}const R=j[p+"Score"]||0,D=j[u+"Score"]||0,P=m[p+"Score"]||0,H=m[u+"Score"]||0,Q=P>R,ne=H>D;if((Q||ne)&&!B.has(m.round)){B.add(m.round);const ie=[...m.log||[]].reverse().find(le=>le.isGoal),ee=((ie==null?void 0:ie.homePlayers)||[]).map(le=>({name:le.name,note:le.note,portrait:le.portrait,job:le.job}));!!((S=ie==null?void 0:ie.text)!=null&&S.includes("DERNIER CORNER"))?Te().then(()=>{Qe(ee,P,H,Q,()=>Y())}):Qe(ee,P,H,Q,()=>Y());return}Y()}}catch(j){console.error("[PvP] crash:",j)}}).subscribe();async function A(_){Object.assign(m,_),m.lastActionAt=new Date().toISOString();const{error:T}=await v.from("matches").update({game_state:m}).eq("id",i);T&&g("Erreur de synchronisation","error");try{Y()}catch(S){console.error("[PvP] renderPvpScreen crash:",S)}}async function $(){if(M)return;M=!0,Tt(),Ue(),k&&(clearInterval(k),k=null);const _=n?h.away_id:h.home_id,T=n?"p2":"p1",S=n?"p1":"p2",j={...m,[T+"Score"]:3,[S+"Score"]:0,phase:"finished"},z=j.p1Score||0,R=j.p2Score||0;try{await v.from("matches").update({game_state:j}).eq("id",i);const{data:D,error:P}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:_,p_home_score:z,p_away_score:R,p_forfeit:!0});if(P&&console.error("[PvP] finish_pvp_match (forfeit):",P),l)try{await v.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(H){console.error("[PvP] check_and_finish_mini_league (forfeit):",H)}try{const{data:H}=await v.rpc("apply_match_rewards",{p_match_id:i});H!=null&&H.success&&!(H!=null&&H.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(H){console.error("[PvP] apply_match_rewards (forfeit):",H)}}catch{}try{v.removeChannel(Z)}catch{}setTimeout(()=>{it(e),l?x("mini-league",{openLeagueId:l}):x("home")},800)}const N={BOOST_STAT:({value:_=1,count:T=1,roles:S=[]},j,z)=>{const R=j[p+"Team"],D=Object.entries(R).filter(([P])=>!S.length||S.includes(P)).flatMap(([P,H])=>H.filter(Q=>!Q.used).map(Q=>({...Q,_line:P})));if(!D.length){j.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),z(j);return}X(D,T,`Choisir ${T} joueur(s) à booster (+${_})`,P=>{P.forEach(H=>{const Q=(R[H._line]||[]).find(ne=>ne.cardId===H.cardId);Q&&(Q.boost=(Q.boost||0)+_,j.log.push({text:`⚡ +${_} sur ${Q.name}`,type:"info"}))}),j[p+"Team"]=R,z(j)})},DEBUFF_STAT:({value:_=1,count:T=1,roles:S=[],target:j="ai"},z,R)=>{const D=j==="home"?p:u,P=z[D+"Team"],H=j==="home"?"allié":"adverse",Q=Object.entries(P).filter(([ne])=>!S.length||S.includes(ne)).flatMap(([ne,ie])=>ie.map(ee=>({...ee,_line:ne})));if(!Q.length){z.log.push({text:`🎯 Aucun joueur ${H}`,type:"info"}),R(z);return}X(Q,T,`Choisir ${T} joueur(s) ${H}(s) (-${_})`,ne=>{ne.forEach(ie=>{const ee=(P[ie._line]||[]).find(ae=>ae.cardId===ie.cardId);ee&&(ee.boost=(ee.boost||0)-_,z.log.push({text:`🎯 -${_} sur ${ee.name}`,type:"info"}))}),z[D+"Team"]=P,R(z)})},GRAY_PLAYER:({count:_=1,roles:T=[],target:S="ai"},j,z)=>{const R=S==="home"?p:u,D=j[R+"Team"],P=S==="home"?"allié":"adverse",H=Object.entries(D).filter(([Q])=>!T.length||T.includes(Q)).flatMap(([Q,ne])=>ne.filter(ie=>!ie.used).map(ie=>({...ie,_line:Q})));if(!H.length){j.log.push({text:`❌ Aucun joueur ${P}`,type:"info"}),z(j);return}X(H,_,`Choisir ${_} joueur(s) ${P}(s) à exclure`,Q=>{const ne="usedCardIds_"+R,ie=new Set(j[ne]||[]);Q.forEach(ee=>{const ae=(D[ee._line]||[]).find(le=>le.cardId===ee.cardId);ae&&(ae.used=!0,ie.add(ee.cardId),j.log.push({text:`❌ ${ae.name} exclu !`,type:"info"}))}),j[ne]=[...ie],j[R+"Team"]=D,z(j)})},REVIVE_PLAYER:({count:_=1,roles:T=[]},S,j)=>{const z=S[p+"Team"],R=Object.entries(z).filter(([D])=>!T.length||T.includes(D)).flatMap(([D,P])=>P.filter(H=>H.used).map(H=>({...H,_line:D})));if(!R.length){S.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),j(S);return}X(R,_,`Choisir ${_} joueur(s) à ressusciter`,D=>{D.forEach(P=>{const H=(z[P._line]||[]).find(Q=>Q.cardId===P.cardId);H&&(H.used=!1,S.log.push({text:`💫 ${H.name} ressuscité !`,type:"info"}))}),S[p+"Team"]=z,j(S)})},REMOVE_GOAL:({},_,T)=>{const S=u+"Score";_[S]>0?(_[S]--,_.log.push({text:"🚫 Dernier but annulé !",type:"info"})):_.log.push({text:"🚫 Aucun but à annuler",type:"info"}),T(_)},ADD_GOAL_DRAW:({},_,T)=>{_[p+"Score"]===_[u+"Score"]?(_[p+"Score"]++,_.log.push({text:"🎯 But bonus !",type:"info"})):_.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),T(_)},ADD_SUB:({value:_=1},T,S)=>{T.maxSubs=(T.maxSubs||3)+_,T.log.push({text:`🔄 +${_} remplacement(s)`,type:"info"}),S(T)},CUSTOM:({},_,T)=>T(_)};function X(_,T,S,j){const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let R=[];function D(){var H,Q;const P=_.map(ne=>{const ie=ne._line||ne.job||"MIL",ee=R.find(le=>le.cardId===ne.cardId),ae=Ie({...ne,_evolution_bonus:0},{width:90,showStad:!0,role:ie,extraNote:ne.boost||0});return`<div class="pp-item" data-cid="${ne.cardId}"
          style="position:relative;border-radius:8px;${ee?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${ne.used?"opacity:0.3;pointer-events:none":""}">
          ${ae}
        </div>`}).join("");z.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${S}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${R.length}/${T}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${P}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${R.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${R.length}/${T})
          </button>
        </div>`,(H=z.querySelector("#pp-close"))==null||H.addEventListener("click",()=>z.remove()),z.querySelectorAll(".pp-item").forEach(ne=>{ne.addEventListener("click",()=>{const ie=ne.dataset.cid,ee=_.find(le=>le.cardId===ie),ae=R.findIndex(le=>le.cardId===ie);ee&&(ae>-1?R.splice(ae,1):R.length<T&&R.push(ee),D())})}),(Q=z.querySelector("#pp-confirm"))==null||Q.addEventListener("click",()=>{z.remove(),j(R)})}D(),document.body.appendChild(z)}async function ce(_,T){const j=(m["gcCardsFull_"+p]||[]).find(P=>P.id===_),z=(j==null?void 0:j._gcDef)||(m.gcDefs||[]).find(P=>{var H;return P.name===T||((H=P.name)==null?void 0:H.toLowerCase().trim())===(T==null?void 0:T.toLowerCase().trim())}),R=[...m["usedGc_"+p]||[],_],D={type:T,by:p,seq:(m._gcAnimSeq||0)+1};W.add(D.seq),L(T,p,async()=>{if(z!=null&&z.effect_type&&z.effect_type!=="CUSTOM"){const H=N[z.effect_type];if(H){const Q={...m};H(z.effect_params||{},Q,async ne=>{ne["usedGc_"+p]=R,ne._lastGC=D,ne._gcAnimSeq=D.seq,await A(ne)});return}}const P={...m};switch(T){case"Remplacement+":P.maxSubs=(P.maxSubs||3)+1,P.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const H=u+"Score";P[H]>0&&(P[H]--,P.log.push({text:"🚫 But annulé",type:"info"}));break}}P["usedGc_"+p]=R,P._lastGC=D,P._gcAnimSeq=D.seq,await A(P)})}function fe(_,T){const S="usedCardIds_"+_,j=new Set(m[S]||[]);T.forEach(z=>j.add(z)),m[S]=[...j]}function C(){for(const _ of["p1","p2"]){const T=new Set(m["usedCardIds_"+_]||[]),S=m[_+"Team"];if(S)for(const j of["GK","DEF","MIL","ATT"])(S[j]||[]).forEach(z=>{z.used=T.has(z.cardId)})}}function Y(){var rn,an,sn,dn,ln,cn;if(m.phase==="reveal")return ue();if(m.phase==="midfield")return V();if(m.phase==="finished")return Ge();const _=m[p+"Team"],T=m[u+"Team"];C();const S=m[p+"Score"],j=m[u+"Score"],z=m[p+"Name"],R=m[u+"Name"],D=m.phase===p+"-attack",P=m.phase===p+"-defense",H=Array.isArray(m["selected_"+p])?m["selected_"+p]:[],Q=H.map(J=>J.cardId),ne=window.innerWidth>=700,ie=m[p+"Subs"]||[],ee=m["usedSubIds_"+p]||[],ae=ie.filter(J=>!ee.includes(J.cardId)),le=m["gcCardsFull_"+p]||[],ge=m["usedGc_"+p]||[],pe=le.filter(J=>!ge.includes(J.id)),xe=m.boostOwner===p&&!m.boostUsed,be=[..._.MIL||[],..._.ATT||[]].filter(J=>!J.used),oe=[...T.MIL||[],...T.ATT||[]].filter(J=>!J.used),Ee=!ke(T),Re=be.length===0&&oe.length===0&&!Ee,Le=(_.DEF||[]).filter(J=>!J.used),Ve=(_.GK||[]).filter(J=>!J.used);let Oe=[];D&&be.length===0&&(Ee?(Oe=Le.map(J=>J.cardId),Le.length===0&&(Oe=Oe.concat(Ve.map(J=>J.cardId)))):Re&&(Oe=[...Le,...Ve].map(J=>J.cardId)));function nt(J,me,Ae){var Me,ft;const we=J._gcDef,qt=(we==null?void 0:we.name)||J.gc_type,at=(we==null?void 0:we.effect)||((Me=je[J.gc_type])==null?void 0:Me.desc)||"",Fe=we!=null&&we.image_url?`/icons/${we.image_url}`:null,Ne=((ft=je[J.gc_type])==null?void 0:ft.icon)||"⚡";return`<div class="pvp-gc-mini" data-gc-id="${J.id}" data-gc-type="${J.gc_type}" style="flex-shrink:0;cursor:pointer">
        ${tt(qt,Fe,Ne,at,{width:me})}
      </div>`}function Kt(J,me){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${J}px;height:${me}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(me*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(me*.2)}px">⚡</div>
        <div style="font-size:${Math.round(me*.09)}px;color:#000;font-weight:900">+${m.boostValue}</div>
      </div>`}const De=(J,me)=>me?Kt(95,162):nt(J,95),Ye=(J,me)=>me?Kt(68,116):nt(J,68),He=ne?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",pt=D?ct(p)?`<button id="pvp-action" style="${He};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${H.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${He};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:P?`<button id="pvp-action" style="${He};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${H.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${R}</div>`,ot=D&&!ct(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':D||P?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${H.length}/3 sélectionné(s)</div>`:"",jt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${ne?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ae.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ae.map(J=>`<div class="pvp-sub-btn" data-sub-id="${J.cardId}" style="cursor:pointer;flex-shrink:0">${vt(J,ne?76:44,ne?100:58)}</div>`).join("")}
    </div>`,ut=D?"attack":P?"defense":"idle",kt=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${Ot(_,m[p+"Formation"],ut,Q,ne?1300:zt(),ne?600:Rt(),Oe)}
      </div>
    </div>`,rt=m[p+"Team"],co=(()=>{var me,Ae,we,qt,at;if(P&&((me=m.pendingAttack)!=null&&me.players)){const Fe=m.pendingAttack;let Ne="";if(H.length>0){const Me=H.map(We=>{const Vt=(rt[We._role]||[]).find(Li=>Li.cardId===We.cardId)||We,Yt=rt[We._role]||[],si=Yt.findIndex(Li=>Li.cardId===We.cardId),Ei=xt(Yt.length),Wt=si>=0?Ei[si]:Vt._col??1;return{...Vt,_line:We._role,_col:Wt}}),ft=ri(Me,((Ae=m.modifiers)==null?void 0:Ae[p])||{},m[p+"Formation"]);Ne=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${H.length}/3)</div>
            <div style="display:flex;justify-content:center">${Je(Me.map(We=>({...We,used:!1})),"#3a7bd5",ft.total,"defense",m[p+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${R} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${Je((Fe.players||[]).map(Me=>({...Me,used:!1})),"#ff6b6b",Fe.total,"attack",m[u+"Formation"])}</div>
          ${Ne}
        </div>`}if(D&&((we=m.pendingAttack)!=null&&we.players)){const Fe=m.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${Je((Fe.players||[]).map(Ne=>({...Ne,used:!1})),"#00ff88",Fe.total,"attack",m[p+"Formation"])}</div>
        </div>`}if(D&&!((qt=m.pendingAttack)!=null&&qt.players)&&H.length>0){const Fe=H.map(Me=>{const ft=(rt[Me._role]||[]).find(Wt=>Wt.cardId===Me.cardId)||Me,We=["GK","DEF"].includes(Me._role),Vt=rt[Me._role]||[],Yt=Vt.findIndex(Wt=>Wt.cardId===Me.cardId),si=xt(Vt.length),Ei=Yt>=0?si[Yt]:ft._col??1;return{...ft,_line:Me._role,_col:Ei,...We?{note_a:Math.max(1,Number(ft.note_a)||0)}:{}}}),Ne=oi(Fe,((at=m.modifiers)==null?void 0:at[p])||{},m[p+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${H.length}/3)</div>
          <div style="display:flex;justify-content:center">${Je(Fe.map(Me=>({...Me,used:!1})),"#FFD700",Ne.total,"attack",m[p+"Formation"])}</div>
        </div>`}const J=(m.log||[]).slice(-1)[0];return J?'<div style="padding:2px 4px">'+Jn(J)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),on=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${z}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${S} – ${j}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${R}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${co}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(m.log||[]).length})
      </button>`;st(e),e.style.overflow="hidden",ne?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${on}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${jt}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${kt}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${pt}${ot}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${pe.map(J=>De(J,!1)).join("")}
            ${xe?De(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${on}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ot(_,m[p+"Formation"],ut,Q,zt(),Rt(),Oe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${pe.map(J=>Ye(J,!1)).join("")}
            ${xe?Ye(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${D&&ae.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${D&&ae.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${D&&ae.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${D&&ae.length>0?1:.4}">
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
          <div>${pt}${ot}</div>
        </div>
      </div>`;function Bt(){const J=e.querySelector(".match-screen");if(!J)return;const me=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);J.style.height=me+"px",J.style.minHeight=me+"px",J.style.maxHeight=me+"px",J.style.overflow="hidden";const Ae=e.querySelector("#mobile-action-bar"),we=e.querySelector("#mobile-play-area");Ae&&we&&(we.style.paddingBottom=Ae.offsetHeight+"px")}if(Bt(),setTimeout(Bt,120),setTimeout(Bt,400),I||(I=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Bt),window.visualViewport.addEventListener("scroll",Bt)),window.addEventListener("resize",Bt)),function(){const me=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!me)return;const Ae=me.closest("#match-terrain-wrap");Ae&&(Ae.style.cssText="position:relative;width:100%;height:100%;padding:0"),me.removeAttribute("width"),me.removeAttribute("height"),me.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",me.setAttribute("preserveAspectRatio","xMidYMid meet")}(),m._pvpResizeBound||(m._pvpResizeBound=!0,window.addEventListener("resize",()=>{const J=e.querySelector(".terrain-wrapper svg");if(J){const me=J.closest("#match-terrain-wrap");me&&(me.style.cssText="position:relative;width:100%;height:100%;padding:0"),J.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e.querySelectorAll(".match-slot-hit").forEach(J=>{J.addEventListener("click",()=>{if(!D&&!P)return;const me=J.dataset.cardId,Ae=J.dataset.role,we=(_[Ae]||[]).find(Ne=>Ne.cardId===me);if(!we||we.used)return;const qt=Oe.includes(me);if(D&&!["MIL","ATT"].includes(Ae)&&!qt)return;Array.isArray(m["selected_"+p])||(m["selected_"+p]=[]);const at=m["selected_"+p],Fe=at.findIndex(Ne=>Ne.cardId===me);Fe>-1?at.splice(Fe,1):at.length<3&&at.push({...we,_role:Ae}),Y()})}),e.querySelectorAll(".match-used-hit").forEach(J=>{J.addEventListener("click",()=>O(J.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(J=>{J.addEventListener("click",()=>O())}),(rn=e.querySelector("#pvp-sub-open"))==null||rn.addEventListener("click",()=>O()),e.querySelectorAll(".pvp-gc-mini").forEach(J=>{D?J.addEventListener("click",()=>F(J.dataset.gcId,J.dataset.gcType)):(J.style.opacity="0.35",J.style.cursor="default",J.addEventListener("click",()=>$t("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(an=e.querySelector("#pvp-boost-card"))==null||an.addEventListener("click",()=>U()),(sn=e.querySelector("#pvp-action"))==null||sn.addEventListener("click",J=>{D?J.currentTarget.dataset.pass==="1"||!ct(p)?se():ze():P&&Se()}),(dn=e.querySelector("#pvp-quit"))==null||dn.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&$()}),(ln=e.querySelector("#pvp-view-opp"))==null||ln.addEventListener("click",()=>q()),(cn=e.querySelector("#pvp-toggle-history"))==null||cn.addEventListener("click",()=>G()),k&&(clearInterval(k),k=null),Ue(),(D||P)&&!M){let J=30,me=!1;const Ae=()=>document.getElementById("pvp-timer"),we=()=>{Ae()&&(Ae().textContent=J+"s",Ae().style.color=me?"#ff4444":"#fff")};we(),k=setInterval(()=>{J--,J<0?me?(clearInterval(k),k=null,Ue(),D&&!ct(p)?se():$()):(me=!0,J=15,we(),Cn("/sounds/timer-urgent.mp3",.6)):we()},1e3)}}function ue(){st(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${Er(m[u+"Team"],m[u+"Formation"],null,m[u+"Name"]||"Adversaire")}
    </div>`;const _=e.querySelector("svg"),T=_==null?void 0:_.closest("#match-terrain-wrap");T&&(T.style.cssText="position:relative;width:100%;height:100%;padding:0"),_&&(_.removeAttribute("width"),_.removeAttribute("height"),_.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",_.setAttribute("preserveAspectRatio","xMidYMid meet")),p==="p1"&&setTimeout(async()=>{await A({phase:"midfield"})},5e3)}let K=!1;function V(){if(K)return;const _=m[p+"Team"].MIL||[],T=m[u+"Team"].MIL||[],S=yt(_)+bt(_),j=yt(T)+bt(T),z=S>=j;st(e),e.innerHTML=`
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
      ${yi(_,m[p+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${yi(T,m[u+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const R=(ae,le)=>e.querySelectorAll(ae).forEach((ge,pe)=>{setTimeout(()=>{ge.style.opacity="1",ge.style.transform="translateY(0) scale(1)"},le+pe*90)});R(".duel-card-me",150),R(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((ae,le)=>setTimeout(()=>{ae.style.opacity="1"},le*70)),900),setTimeout(()=>{const ae=e.querySelector("#pvp-vs");ae&&(ae.style.opacity="1",ae.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(le=>le.style.opacity="1")},1250);function D(ae,le,ge){const pe=document.getElementById(ae);if(!pe)return;const xe=performance.now(),be=oe=>{const Ee=Math.min(1,(oe-xe)/ge);pe.textContent=Math.round(le*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(be):pe.textContent=le};requestAnimationFrame(be)}setTimeout(()=>{D("pvp-score-me",S,800),D("pvp-score-opp",j,800)},1500);const P=m.p1Team.MIL||[],H=m.p2Team.MIL||[],Q=yt(P)+bt(P),ne=yt(H)+bt(H),ie=Q>=ne?"p1":"p2";let ee=m.boostValue;ee==null&&(ee=Wn(),m.boostValue=ee,m.boostOwner=ie,m.boostUsed=!1),K=!0,setTimeout(()=>{const ae=e.querySelector("#duel-row-"+(z?"me":"opp")),le=e.querySelector("#duel-row-"+(z?"opp":"me")),ge=document.getElementById("pvp-score-me"),pe=document.getElementById("pvp-score-opp"),xe=z?ge:pe,be=z?pe:ge;xe&&(xe.style.fontSize="80px",xe.style.color=z?"#FFD700":"#ff6b6b",xe.style.animation="duelPulse .5s ease"+(z?",duelGlow 1.5s ease infinite .5s":"")),be&&(be.style.opacity="0.25"),setTimeout(()=>{ae&&(ae.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ae.style.zIndex="5"),setTimeout(()=>{const oe=document.getElementById("duel-shock");oe&&(oe.style.animation="shockwave .5s ease-out forwards"),le&&(le.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Le;const oe=document.getElementById("pvp-duel-finale");if(!oe)return;const Ee=m.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+ee+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;oe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(z?"⚽ "+m[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+m[u+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+Re,oe.style.transition="opacity .45s ease",oe.style.opacity="1",oe.style.pointerEvents="auto",(Le=document.getElementById("pvp-start-match"))==null||Le.addEventListener("click",async()=>{const Ve=ie;await A({phase:Ve+"-attack",attacker:Ve,round:1,boostValue:ee,boostUsed:!1,boostOwner:Ve})})},600)},700)},2800)}function L(_,T,S){var le,ge;const j=(m.gcDefs||[]).find(pe=>{var xe;return pe.name===_||((xe=pe.name)==null?void 0:xe.toLowerCase().trim())===(_==null?void 0:_.toLowerCase().trim())}),z={purple:"#b06ce0",light_blue:"#00d4ef"}[j==null?void 0:j.color]||"#b06ce0",R=(j==null?void 0:j.name)||_,D=(j==null?void 0:j.effect)||((le=je[_])==null?void 0:le.desc)||"",P=j!=null&&j.image_url?`/icons/${j.image_url}`:null,H=((ge=je[_])==null?void 0:ge.icon)||"⚡",ne=T===p?"Vous":m[T+"Name"]||"Adversaire",ie=document.createElement("div");ie.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",ie.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{filter:drop-shadow(0 0 20px ${z}66)}50%{filter:drop-shadow(0 0 40px ${z}cc)}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${z};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${ne} joue une carte</div>
      <div style="animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        ${tt(R,P,H,D,{width:200})}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(ie);let ee=!1;const ae=()=>{ee||(ee=!0,ie.remove(),setTimeout(()=>S&&S(),50))};ie.addEventListener("click",ae),setTimeout(ae,3e3)}function F(_,T){var ne,ie,ee,ae;const j=(m["gcCardsFull_"+p]||[]).find(le=>le.id===_),z=j==null?void 0:j._gcDef,R=(z==null?void 0:z.name)||T,D=(z==null?void 0:z.effect)||((ne=je[T])==null?void 0:ne.desc)||"Carte spéciale.",P=z!=null&&z.image_url?`/icons/${z.image_url}`:null,H=((ie=je[T])==null?void 0:ie.icon)||"⚡",Q=document.createElement("div");Q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",Q.innerHTML=`
      ${tt(R,P,H,D,{width:190})}
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(Q),(ee=Q.querySelector("#pvp-gc-back"))==null||ee.addEventListener("click",()=>Q.remove()),(ae=Q.querySelector("#pvp-gc-use"))==null||ae.addEventListener("click",()=>{Q.remove(),ce(_,T)})}function U(){var j;const _=m[p+"Team"],T=Object.entries(_).flatMap(([z,R])=>(R||[]).filter(D=>!D.used).map(D=>({...D,_line:z})));if(!T.length)return;const S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",S.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${m.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${T.map(z=>{const R={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[z._line]||"#555",D=Pe(z,z._line)+(z.boost||0);return`<div class="bp-item" data-cid="${z.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${R};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${z.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${D}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(S),(j=S.querySelector("#bp-close"))==null||j.addEventListener("click",()=>S.remove()),S.querySelectorAll(".bp-item").forEach(z=>{z.addEventListener("click",async()=>{const R=z.dataset.cid,D=T.find(H=>H.cardId===R);if(!D)return;const P=(_[D._line]||[]).find(H=>H.cardId===R);P&&(P.boost=(P.boost||0)+m.boostValue),S.remove(),await A({[p+"Team"]:_,boostUsed:!0})})})}function O(_=null){var ae,le;if(!(m.phase===p+"-attack")){g("Remplacement uniquement avant votre attaque","warning");return}const S=m[p+"Team"],j=m["usedSubIds_"+p]||[],z=m.maxSubs||3;if(j.length>=z){g(`Maximum ${z} remplacements atteint`,"warning");return}const R=Object.entries(S).flatMap(([ge,pe])=>(pe||[]).filter(xe=>xe.used).map(xe=>({...xe,_line:ge}))),D=(m[p+"Subs"]||[]).filter(ge=>!j.includes(ge.cardId));if(!R.length){g("Aucun joueur utilisé à remplacer","warning");return}if(!D.length){g("Aucun remplaçant disponible","warning");return}let P=Math.max(0,R.findIndex(ge=>ge.cardId===_));const H=((ae=R[P])==null?void 0:ae._line)||((le=R[P])==null?void 0:le.job);let Q=Math.max(0,D.findIndex(ge=>ge.job===H)),ne=!1;const ie=document.createElement("div");ie.id="pvp-sub-overlay",ie.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function ee(){var Re,Le,Ve,Oe,nt,Kt;const ge=R[P],pe=D[Q],xe=Math.min(130,Math.round((window.innerWidth-90)/2)),be=Math.round(xe*1.35),oe=De=>`background:rgba(255,255,255,0.12);border:none;color:${De?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${De?"default":"pointer"};flex-shrink:0`;ie.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${j.length}/${z})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${oe(Q===0)}" ${Q===0?"disabled":""}>▲</button>
          <div>${pe?vt({...pe,used:!1,boost:0},xe,be):"<div>—</div>"}</div>
          <button id="pin-down" style="${oe(Q>=D.length-1)}" ${Q>=D.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${Q+1}/${D.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${oe(P===0)}" ${P===0?"disabled":""}>▲</button>
          <div>${ge?vt({...ge,used:!1,boost:0},xe,be):"<div>—</div>"}</div>
          <button id="pout-down" style="${oe(P>=R.length-1)}" ${P>=R.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${P+1}/${R.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Re=ie.querySelector("#psub-close"))==null||Re.addEventListener("click",()=>ie.remove()),(Le=ie.querySelector("#pout-up"))==null||Le.addEventListener("click",()=>{P>0&&(P--,ee())}),(Ve=ie.querySelector("#pout-down"))==null||Ve.addEventListener("click",()=>{P<R.length-1&&(P++,ee())}),(Oe=ie.querySelector("#pin-up"))==null||Oe.addEventListener("click",()=>{Q>0&&(Q--,ee())}),(nt=ie.querySelector("#pin-down"))==null||nt.addEventListener("click",()=>{Q<D.length-1&&(Q++,ee())});const Ee=(De,Ye,He,pt)=>{const ot=ie.querySelector("#"+De);if(!ot)return;let jt=0;ot.addEventListener("touchstart",ut=>{jt=ut.touches[0].clientY},{passive:!0}),ot.addEventListener("touchend",ut=>{const kt=ut.changedTouches[0].clientY-jt;if(Math.abs(kt)<30)return;const rt=Ye();kt<0&&rt<pt-1?(He(rt+1),ee()):kt>0&&rt>0&&(He(rt-1),ee())},{passive:!0})};Ee("pin-panel",()=>Q,De=>Q=De,D.length),Ee("pout-panel",()=>P,De=>P=De,R.length),(Kt=ie.querySelector("#psub-confirm"))==null||Kt.addEventListener("click",async De=>{if(De.preventDefault(),De.stopPropagation(),ne)return;ne=!0;const Ye=R[P],He=D[Q];if(!Ye||!He)return;const pt=Ye._line,ot=(S[pt]||[]).findIndex(kt=>kt.cardId===Ye.cardId);if(ot===-1){g("Erreur : joueur introuvable","error"),ie.remove();return}const jt={...He,_line:pt,position:Ye.position,used:!1,boost:0};S[pt].splice(ot,1,jt);const ut=[...j,He.cardId];ie.remove(),re(Ye,He,async()=>{await A({[p+"Team"]:S,[u+"Team"]:m[u+"Team"],["usedSubIds_"+p]:ut})})})}document.body.appendChild(ie),ee()}function re(_,T,S){const j={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const R=(H,Q,ne)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${Q};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${ne}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${j[H.job]||"#555"};border:3px solid ${Q};position:relative;overflow:hidden;margin:0 auto">
        ${At(H)?`<img src="${At(H)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(H.name||"").slice(0,12)}</div>
    </div>`;z.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${R(T,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${R(_,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(z);let D=!1;const P=()=>{D||(D=!0,z.remove(),setTimeout(()=>S(),50))};z.addEventListener("click",P),setTimeout(P,2200)}function q(){var T;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",_.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${m[u+"Name"]}</div>
      <div style="width:min(90vw,420px)">${_i(m[u+"Team"],m[u+"Formation"],null,[],zt(),Rt())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(_),(T=_.querySelector("#pvp-opp-close"))==null||T.addEventListener("click",()=>_.remove())}function G(){var S;const _=m.log||[],T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",T.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${_.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[..._].reverse().map(j=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${j.type==="goal"?"#FFD700":j.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${j.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(T),(S=T.querySelector("#pvp-hist-close"))==null||S.addEventListener("click",()=>T.remove())}async function se(){if(m.phase!==p+"-attack")return;const _=p==="p1"?"p2":"p1",T=(m.round||0)+1,S=[...m.log||[]];S.push({type:"info",text:`⏭️ ${m[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const j=$e(m),z=ct(_),R=j||!z?"finished":_+"-attack";await A({["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},pendingAttack:null,phase:R,attacker:_,round:T,log:S}),R==="finished"&&await qe(m)}function de(_){const T=(_.GK||[]).some(j=>!j.used),S=["DEF","MIL","ATT"].some(j=>(_[j]||[]).some(z=>!z.used));return T&&!S}function ve(_){return(_.p1Score||0)!==(_.p2Score||0)?null:de(_.p1Team)&&!ke(_.p2Team)?{side:"p1",gk:(_.p1Team.GK||[]).find(T=>!T.used)}:de(_.p2Team)&&!ke(_.p1Team)?{side:"p2",gk:(_.p2Team.GK||[]).find(T=>!T.used)}:null}async function Te(){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(_);const T=(S,j)=>new Promise(z=>{_.innerHTML=`<div style="font-size:32px;font-weight:900;color:${j};letter-spacing:2px;animation:lcFade 1.4s ease both">${S}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(z,1400)});await T("⚽ DERNIER CORNER","#FFD700"),await T("🧤 LE GARDIEN MONTE !","#4fc3f7"),_.remove()}async function he(_,T){const{side:S,gk:j}=_;if(!j)return;const z=S+"Score",R=(T[z]||0)+1;j.used=!0;const D=[...T.log||[]];D.push({type:"duel",isGoal:!0,homeScored:S===p,homePlayers:S==="p1"?[Dt(j)]:[],aiPlayers:S==="p2"?[Dt(j)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${T[S+"Name"]} marque !`});const P=(T.round||0)+1,H=S==="p1"?"p2":"p1",Q={...T,[z]:R},ne=$e(Q);B.add(P),await Te();const ie=S===p?R:T[p+"Score"]||0,ee=S===p?T[u+"Score"]||0:R;Qe([Dt(j)],ie,ee,S===p,async()=>{await A({[z]:R,log:D,round:P,pendingAttack:null,phase:ne?"finished":H+"-attack",attacker:H,["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}}}),ne&&await qe({...m,[z]:R})})}async function ze(){const _=m[p+"Team"],T=!["GK","DEF","MIL","ATT"].some(R=>(m[u+"Team"][R]||[]).some(D=>!D.used)),S=(m["selected_"+p]||[]).map(R=>{const D=(_[R._role]||[]).find(le=>le.cardId===R.cardId)||R,P=["GK","DEF"].includes(R._role),H=_[R._role]||[],Q=H.findIndex(le=>le.cardId===R.cardId),ne=xt(H.length),ie=Q>=0?ne[Q]:D._col??1,ee=m.stadiumDef||m.homeStadiumDef||null,ae=D.stadiumBonus||ee&&(ee.club_id&&String(D.club_id)===String(ee.club_id)||ee.country_code&&D.country_code===ee.country_code)||!1;return{...D,_line:R._role,_col:ie,stadiumBonus:ae,...P?{note_a:Math.max(1,Number(D.note_a)||0)}:{}}});if(!S.length)return;const j=oi(S,m.modifiers[p]||{},m[p+"Formation"]);fe(p,S.map(R=>R.cardId)),S.forEach(R=>{const D=(_[R._role]||[]).find(P=>P.cardId===R.cardId);D&&(D.used=!0)}),m["selected_"+p]=[],Y();const z=[...m.log||[]];if(T){if(S.length===1&&(S[0]._line==="GK"||S[0].job==="GK")&&(m.p1Score||0)===(m.p2Score||0)){await he({side:p,gk:S[0]},{...m,[p+"Team"]:_,log:z});return}const D=(m[p+"Score"]||0)+1,P=S.map(ee=>Dt(ee));z.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:P,homeTotal:j.total,aiTotal:0});const H=(m.round||0)+1,Q=p==="p1"?"p2":"p1",ne={...m,[p+"Team"]:_,[p+"Score"]:D},ie=$e(ne);B.add(H),Qe(P,D,m[u+"Score"]||0,!0,async()=>{await A({[p+"Team"]:_,[p+"Score"]:D,["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},pendingAttack:null,phase:ie?"finished":Q+"-attack",attacker:Q,round:H,log:z}),ie&&await qe({...m,[p+"Score"]:D})});return}z.push({type:"pending",text:`⚔️ ${m[p+"Name"]} attaque (${j.total})`}),await A({[p+"Team"]:_,[u+"Team"]:m[u+"Team"],pendingAttack:{...j,players:S,side:p},["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},phase:u+"-defense",log:z})}async function Se(){const _=m[p+"Team"],T=(m["selected_"+p]||[]).map(pe=>{const xe=(_[pe._role]||[]).find(Le=>Le.cardId===pe.cardId)||pe,be=_[pe._role]||[],oe=be.findIndex(Le=>Le.cardId===pe.cardId),Ee=xt(be.length),Re=oe>=0?Ee[oe]:xe._col??1;return{...xe,_line:pe._role,_col:Re}}),S=ri(T,m.modifiers[p]||{},m[p+"Formation"]);fe(p,T.map(pe=>pe.cardId)),T.forEach(pe=>{const xe=(_[pe._role]||[]).find(be=>be.cardId===pe.cardId);xe&&(xe.used=!0)}),m["selected_"+p]=[],Y();const j=Qi(m.pendingAttack.total,S.total,m.modifiers[p]||{}),z=m.pendingAttack.side,R=j==="attack"||(j==null?void 0:j.goal),D=z==="p1"?"p2":"p1",P=(m.round||0)+1,H=(m.pendingAttack.players||[]).map(pe=>Dt(pe)),Q=[...m.log||[]];Q.push({type:"duel",isGoal:R,homeScored:R&&z===p,text:R?`⚽ BUT de ${m[z+"Name"]} ! (${m.pendingAttack.total} vs ${S.total})`:`✋ Attaque stoppée (${m.pendingAttack.total} vs ${S.total})`,homePlayers:H,aiPlayers:T.map(pe=>Dt(pe)),homeTotal:m.pendingAttack.total,aiTotal:S.total});const ne=R?(m[z+"Score"]||0)+1:m[z+"Score"]||0,ie={...m,[p+"Team"]:_,[z+"Score"]:ne},ee=$e(ie),ae=ee?"finished":D+"-attack",le=!ee&&!R?ve(ie):null,ge=async()=>{if(le){await he(le,ie);return}await A({[p+"Team"]:_,[u+"Team"]:m[u+"Team"],[z+"Score"]:ne,["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},pendingAttack:null,phase:ae,attacker:D,round:P,log:Q}),(ae==="finished"||ee)&&await qe({...m,[z+"Score"]:ne})};if(R){const pe=z===p,xe=pe?ne:m[p+"Score"]||0,be=pe?m[u+"Score"]||0:ne;B.add(P),Qe(H,xe,be,pe,ge)}else await ge()}function Be(_){return["MIL","ATT"].some(T=>(_[T]||[]).some(S=>!S.used))}function ke(_){return["GK","DEF","MIL","ATT"].some(T=>(_[T]||[]).some(S=>!S.used))}function _t(_){return ke(_)&&!Be(_)}function ct(_){const T=m[_+"Team"],S=m[(_==="p1"?"p2":"p1")+"Team"];return!!(Be(T)||_t(T)&&!ke(S)||_t(T)&&!Be(S)&&ke(S))}function $e(_){return!ke(_.p1Team)&&!ke(_.p2Team)}function Ce(_){const T=_.p1Score||0,S=_.p2Score||0;return T===S?null:T>S?h.home_id:h.away_id}async function qe(_){Tt(),Ue();try{const T=Ce(_),S=T?h.home_id===T?h.away_id:h.home_id:null,j=_.p1Score||0,z=_.p2Score||0,{data:R,error:D}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:T,p_home_score:j,p_away_score:z,p_forfeit:!1});if(D&&console.error("[PvP] finish_pvp_match:",D),l)try{await v.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(P){console.error("[PvP] check_and_finish_mini_league:",P)}T&&S&&Ur(T,S).catch(()=>{});try{const{data:P}=await v.rpc("apply_match_rewards",{p_match_id:i});P!=null&&P.success&&!(P!=null&&P.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(P){console.error("[PvP] apply_match_rewards:",P)}if(typeof c=="function")try{await c({homeScore:j,awayScore:z,winnerId:T,homeId:h.home_id,awayId:h.away_id,matchId:i})}catch(P){console.error("[PvP] onMatchEnd:",P)}}catch(T){console.error("[PvP] finishMatch:",T)}}function Ge(){var z;const _=m[p+"Score"],T=m[u+"Score"],S=_>T,j=_===T;st(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${S?"🏆":j?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${S?"Victoire !":j?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${_} - ${T}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(z=document.getElementById("pvp-home"))==null||z.addEventListener("click",()=>{try{v.removeChannel(Z)}catch{}it(e),l?x("mini-league",{openLeagueId:l}):x("home")})}Y()}async function Gi(e,t,i=!1){var s,d;const{state:n,navigate:o,toast:r}=t,a=i&&((d=(s=t==null?void 0:t.state)==null?void 0:s.params)==null?void 0:d.rankedData)||null;await ki(e,t,i?"ranked":"random",async({deckId:c,formation:l,starters:f,subsRaw:y,gcCardsEnriched:x,gcDefs:g,stadiumDef:p})=>{st(e);const u=async b=>{await Yr(e,t,c,l,f,y,b||[],g,p,i,a)};if(!(x!=null&&x.length)){await u([]);return}wi(e,x,u)})}async function Vr(e,t,i){return Kr(e,t,i)}async function Yr(e,t,i,n,o,r,a=[],s=[],d=null,c=!1,l=null){var te,Z;const{state:f,navigate:y,toast:x}=t,g=(l==null?void 0:l.mmr)??((te=f.profile)==null?void 0:te.mmr)??1e3,p=c?vi(g):null,u=c?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",b=c?(p==null?void 0:p.color)||"#D4A017":"#FFD700";let w=!1,h=null,E=null;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${u};color:#fff;padding:32px;text-align:center;gap:20px">
      ${c?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${c?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${c?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(g)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${b};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const m=async()=>{w=!0,h&&(h.unsubscribe(),h=null),E&&(clearInterval(E),E=null);try{await v.rpc("cancel_matchmaking",{p_user_id:f.profile.id})}catch(A){console.error("[Matchmaking] cancel error:",A)}};(Z=document.getElementById("cancel-mm"))==null||Z.addEventListener("click",async()=>{await m(),it(e),y("home")});const M=async(A,$)=>{w||(w=!0,h&&(h.unsubscribe(),h=null),E&&(clearInterval(E),E=null),await Ct(e,t,A,$,{myGC:a,gcDefs:s,stadiumDef:d,isRanked:c,rankedData:l,onMatchEnd:c?Wr:null}))},k=f.user.id,{data:I,error:B}=c?await v.rpc("try_matchmake_ranked",{p_user_id:k,p_deck_id:i,p_mmr:g}):await v.rpc("try_matchmake",{p_user_id:k,p_deck_id:i});if(B||!(I!=null&&I.success)){console.error("[Matchmaking] try_matchmake error:",B||I),x("Erreur de matchmaking","error"),it(e),y("home");return}if(I.matched){await M(I.match_id,!1);return}const W=async()=>{if(w)return;const{data:A}=await v.from("matchmaking_queue").select("status, match_id").eq("user_id",k).maybeSingle();(A==null?void 0:A.status)==="matched"&&A.match_id&&await M(A.match_id,!0)};h=v.channel(`mm_${k}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${k}`},A=>{const $=A.new;$.status==="matched"&&$.match_id&&M($.match_id,!0)}).subscribe(),E=setInterval(W,3e3),setTimeout(()=>{w||m()},12e4)}async function Wr(e,t){const{state:i,toast:n}=t,{winnerId:o,homeId:r,awayId:a,homeScore:s,awayScore:d,matchId:c}=e,l=i.user.id,f=r===l,y=o===l,{data:x}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",l).single(),{data:g}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",f?a:r).single();if(x&&g){const p=po(x.mmr,x.mmr_rd,x.mmr_v,g.mmr,g.mmr_rd,y?1:0);await v.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:y?v.sql`mmr_wins + 1`:void 0,mmr_losses:y?void 0:v.sql`mmr_losses + 1`}).eq("id",l),n(y?`+MMR ↑ ${Math.round(p.mmr-x.mmr)}`:`-MMR ↓ ${Math.round(x.mmr-p.mmr)}`,y?"success":"error",4e3)}}const to=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Gi,resumePvpMatch:Vr},Symbol.toStringTag,{value:"Module"}));async function Xr(e,t){const{state:i,navigate:n,toast:o}=t,r=i.params||{},a=r.friendId||null,s=r.friendName||"Ami",d=!!r.isAccepting;await ki(e,t,"friend",async({deckId:c,formation:l,starters:f,subsRaw:y,gcCardsEnriched:x,gcDefs:g,stadiumDef:p})=>{st(e);const u=async b=>{const w=b||[];d?await Qr(e,t,c,w,g,p):await Jr(e,t,c,w,g,p,a,s)};if(!(x!=null&&x.length)){await u([]);return}wi(e,x,u)})}async function Jr(e,t,i,n,o,r,a,s){var w;const{state:d,navigate:c,toast:l}=t,f=d.user.id,{data:y,error:x}=await v.from("friend_match_invites").insert({inviter_id:f,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(x||!y){console.error("[Friend] Erreur création invitation:",x),l("Impossible de créer l'invitation","error"),c("home");return}e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let g=!1,p=null;const u=async()=>{p&&(p.unsubscribe(),p=null)};(w=document.getElementById("cancel-friend"))==null||w.addEventListener("click",async()=>{await u(),await v.from("friend_match_invites").update({status:"declined"}).eq("id",y.id),it(e),c("home")}),p=v.channel(`friend_invite_${y.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${y.id}`},async({new:h})=>{g||h.status!=="accepted"||!h.match_id||(g=!0,await u(),await Ct(e,t,h.match_id,!0,{myGC:n,gcDefs:o,stadiumDef:r}))}).subscribe();const b=setInterval(async()=>{if(g)return;const{data:h}=await v.from("friend_match_invites").select("status, match_id").eq("id",y.id).single();(h==null?void 0:h.status)==="accepted"&&h.match_id&&(g=!0,clearInterval(b),await u(),await Ct(e,t,h.match_id,!0,{myGC:n,gcDefs:o,stadiumDef:r}))},3e3);setTimeout(async()=>{g||(clearInterval(b),await u(),l("Invitation expirée","info"),c("home"))},12e4)}async function Qr(e,t,i,n,o,r){const{state:a,navigate:s,toast:d}=t,c=a.user.id,{data:l}=await v.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",c).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){d("Aucune invitation en attente","error"),s("home");return}const{data:f,error:y}=await v.rpc("accept_friend_invite",{p_invite_id:l.id,p_invitee_deck_id:i});if(y||!(f!=null&&f.success)){console.error("[Friend] Erreur accept_friend_invite:",y||f),d((f==null?void 0:f.error)||"Impossible de rejoindre le match","error"),s("home");return}await Ct(e,t,f.match_id,!1,{myGC:n,gcDefs:o,stadiumDef:r})}const io="#1A6B3C",dt="#D4A017",Jt="var(--tile-bg)",Qt="var(--tile-border)",Lt="var(--divider)",Xe="var(--tile-fg-on-page)",Et="var(--tile-fg-dim)",Ze="var(--tile-fg-faint)",ei="var(--nav-fg,#fff)",no="rgba(255,255,255,0.62)",Zr="rgba(255,255,255,0.4)";async function ea(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await lt(e,t,i);return}await et(e,t)}async function et(e,t,i="waiting"){var h,E;const{state:n}=t,o=n.profile.id,{data:r}=await v.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",o),a=(r||[]).map(m=>m.league_id),s={};(r||[]).forEach(m=>{s[m.league_id]={amount:m.prize_amount,claimed:m.prize_claimed}});const{data:d,error:c}=await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),l=c?(await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:d||[],y=(a.length?await v.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],x=y.filter(m=>m.status==="waiting"&&!m.is_archived),g=y.filter(m=>m.status==="active"&&!m.is_archived),p=y.filter(m=>m.is_archived||m.status==="finished");let u=p;if(p.length){const{data:m}=await v.from("mini_league_matches").select("league_id").in("league_id",p.map(k=>k.id)).or(`home_id.eq.${o},away_id.eq.${o}`).not("status","eq","bye"),M=new Set((m||[]).map(k=>k.league_id));u=p.filter(k=>M.has(k.id))}const b=l.filter(m=>!a.includes(m.id)),w=[{key:"waiting",label:"🟡 En attente",count:x.length+b.length},{key:"active",label:"🟢 En cours",count:g.length},{key:"archived",label:"📁 Archivées",count:u.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Lt};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${ei}">🏆 Mini League</div>
        <div style="font-size:12px;color:${no}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${ei}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Lt}">
      ${w.map(m=>`<button class="ml-tab" data-tab="${m.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===m.key?io:"transparent"};background:none;font-size:12px;font-weight:${i===m.key?"900":"600"};color:${i===m.key?"#4ade80":Zr};cursor:pointer">${m.label}${m.count?` (${m.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?ta(x,b,o):i==="active"?ia(g,o):na(u,o,s)}
    </div>
  </div>`,(h=document.getElementById("ml-create-btn"))==null||h.addEventListener("click",()=>oa(e,t)),(E=document.getElementById("ml-refresh-list"))==null||E.addEventListener("click",()=>et(e,t,i)),e.querySelectorAll(".ml-tab").forEach(m=>m.addEventListener("click",()=>et(e,t,m.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(m=>m.addEventListener("click",()=>lt(e,t,m.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(m=>m.addEventListener("click",M=>{M.stopPropagation(),oo(e,t,m.dataset.join,m.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(m=>m.addEventListener("click",M=>{M.stopPropagation(),Ri(e,t,m.dataset.delete,m.dataset.name,i)})),e.querySelectorAll("[data-claim-league]").forEach(m=>m.addEventListener("click",async M=>{M.stopPropagation(),m.disabled=!0,m.textContent="...";const{data:k,error:I}=await v.rpc("claim_mini_league_prize",{p_league_id:m.dataset.claimLeague,p_user_id:n.profile.id});if(I||!(k!=null&&k.success)){t.toast((k==null?void 0:k.error)||"Erreur lors de la récupération","error"),et(e,t,i);return}if(!k.already_claimed){n.profile.credits=(n.profile.credits||0)+k.prize;const B=document.getElementById("nav-credits");B&&(B.textContent=`💰 ${n.profile.credits.toLocaleString("fr")}`),t.toast(`💰 +${k.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}et(e,t,i)}))}function hi(e,t,i=!1,n=null){var d,c;const o=e.creator_id===t,r=e.pot||0,a=((c=(d=e.mini_league_members)==null?void 0:d[0])==null?void 0:c.count)||0,s=n&&n.amount>0&&!n.claimed;return`<div data-league-id="${e.id}" style="background:${Jt};border:1px solid ${s?"rgba(212,160,23,0.5)":Qt};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${Xe}">${e.name}</div>
      ${o?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${Et};margin-bottom:${i||s?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${r>0?`<span style="color:${dt};font-weight:700">🏆 ${r.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
    ${s?`<button data-claim-league="${e.id}" class="btn btn-sm" style="width:100%;background:${dt};color:#141000;font-weight:900;border:none">💰 Récupérer ${n.amount.toLocaleString("fr")} cr.</button>`:""}
  </div>`}function ta(e,t,i){const n=[];return e.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Ze};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),n.push(...e.map(o=>hi(o,i,!1)))),t.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Ze};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),n.push(...t.map(o=>hi(o,i,!0)))),n.length?n.join(""):`<div style="text-align:center;padding:40px;color:${Ze}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function ia(e,t){return e.length?e.map(i=>hi(i,t)).join(""):`<div style="text-align:center;padding:40px;color:${Ze}">Aucune mini league en cours.</div>`}function na(e,t,i={}){return e.length?e.map(n=>hi(n,t,!1,i[n.id])).join(""):`<div style="text-align:center;padding:40px;color:${Ze}">Aucune mini league archivée.</div>`}function oa(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var g,p,u,b;const{toast:n}=t,o=document.getElementById("ml-name").value.trim(),r=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,s=((g=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:g.value)||"public",d=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",c=((b=(u=document.getElementById("ml-pwd"))==null?void 0:u.value)==null?void 0:b.trim())||null;if(!o){n("Le nom est obligatoire","error");return}if(a<100){n("Mise minimum : 100 crédits","error");return}if(s==="private"&&!c){n("Mot de passe requis","error");return}const{data:l,error:f}=await v.from("mini_leagues").insert({name:o,creator_id:t.state.profile.id,type:s,password:c,mode:d,max_players:r,entry_fee:a}).select().single();if(f){n("Erreur : "+f.message,"error");return}const{data:y}=await v.from("users").select("credits").eq("id",t.state.profile.id).single();if(((y==null?void 0:y.credits)||0)<a){await v.from("mini_leagues").delete().eq("id",l.id),n(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await v.from("users").update({credits:y.credits-a}).eq("id",t.state.profile.id),await v.from("mini_leagues").update({pot:a}).eq("id",l.id),await v.from("mini_league_members").insert({league_id:l.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=y.credits-a);const x=document.getElementById("nav-credits");x&&(x.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),lt(e,t,l.id)})}function ra(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=o=>{t.remove(),e(o)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",o=>{o.key==="Enter"&&n(i.value.trim())})})}async function oo(e,t,i,n){var f;const{toast:o,state:r}=t,a=r.profile.id;let s=null;if(n==="private"&&(s=await ra(),s===null))return;const{data:d,error:c}=await v.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:s});if(c||!(d!=null&&d.success)){console.error("[MiniLeague] join_mini_league:",c||d),o((d==null?void 0:d.error)||"Erreur lors de l'inscription","error");return}if(typeof t.refreshProfile=="function")await t.refreshProfile();else{const{data:y}=await v.from("users").select("credits").eq("id",a).single();r.profile&&y&&(r.profile.credits=y.credits)}const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${(((f=r.profile)==null?void 0:f.credits)||0).toLocaleString("fr")}`),o("✅ Inscrit ! Pot mis à jour.","success"),lt(e,t,i)}async function aa(e,t,i,n){const{toast:o,state:r}=t,a=r.profile.id;if(!await new Promise(y=>{const x=document.createElement("div");x.className="modal-overlay",x.style.zIndex="2100",x.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${n.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(x),x.querySelector("#lv-ok").onclick=()=>{x.remove(),y(!0)},x.querySelector("#lv-cancel").onclick=()=>{x.remove(),y(!1)}}))return;const{data:d,error:c}=await v.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(c||!(d!=null&&d.success)){o((d==null?void 0:d.error)||"Erreur lors de la désinscription","error");return}const l=d.refund||n;r.profile&&(r.profile.credits=(r.profile.credits||0)+l);const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),o(`↩️ Désinscrit · +${l.toLocaleString("fr")} cr. remboursés`,"success"),et(e,t,"waiting")}async function Ri(e,t,i,n,o){const{toast:r}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await v.from("mini_league_matches").delete().eq("league_id",i),await v.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await v.from("mini_leagues").delete().eq("id",i);if(a){r("Erreur suppression ("+a.message+")","error");return}r("Mini League supprimée avec succès","success"),et(e,t,o)}async function sa(e,t,i){await v.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),et(e,t,"archived")}async function lt(e,t,i){var E,m,M,k,I,B,W,te,Z;const{state:n,toast:o}=t,r=n.profile.id,[{data:a},{data:s},{data:d}]=await Promise.all([v.from("mini_leagues").select("*").eq("id",i).single(),v.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),v.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){o("Introuvable","error"),await et(e,t);return}const c=(s||[]).some(A=>A.user_id===r),l=a.creator_id===r,f=(s||[]).map(A=>A.user).filter(Boolean),y=ua(f,d||[]),x=(d||[]).filter(A=>A.matchday===a.current_day),g=a.pot||0,p=a.entry_fee||100,u=x.length>0&&x.every(A=>A.status==="finished"||A.status==="bye"),b=a.current_day>=a.total_days,w=(s||[]).find(A=>A.user_id===r);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Lt};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${ei}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${ei};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${ei}">${a.name}</div>
        <div style="font-size:11px;color:${no}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${p} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"rgba(74,222,128,0.16)":a.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${a.status==="active"?"#4ade80":a.status==="finished"?"#c084fc":"#eab308"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${g>0?`<div style="font-size:12px;font-weight:900;color:${dt};margin-top:4px">🏆 ${g.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${Jt};border:1px solid ${Qt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Xe}">👥 Joueurs (${f.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${Et};margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*f.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*f.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*f.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*f.length*.1).toLocaleString("fr")})</div>
        ${f.map(A=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${Lt}">
            <div style="width:36px;height:36px;border-radius:50%;background:${A.club_color2||io};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${A.club_color1||"#fff"}">${(A.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Xe}">${A.club_name||A.pseudo}</div><div style="font-size:11px;color:${Ze}">@${A.pseudo}</div></div>
            ${A.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${l&&f.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${p} cr. × ${f.length})</button>`:""}
        ${l?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${c?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${p} cr.)</button>`}
        ${c&&!l?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${p.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${Jt};border:1px solid ${Qt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${x.map(A=>Ln(A,f,r,c)).join("")}
        ${l&&u&&!b?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&y.length?`
      <div style="background:${Jt};border:1px solid ${Qt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${Ze};text-transform:uppercase;border-bottom:2px solid ${Lt}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${g>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${dt}">💰</th>`:""}
          </tr></thead>
          <tbody>${y.map((A,$)=>{const N=g>0&&a.status==="finished"?$===0?Math.floor(g*.7):$===1?Math.floor(g*.2):$===2?Math.floor(g*.1):0:0;return`<tr style="border-bottom:1px solid ${Lt};${A.userId===r?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${$===0?dt:$<3?"#4ade80":Et}">${["🥇","🥈","🥉"][$]||$+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Xe}">${A.clubName}</div><div style="font-size:10px;color:${Ze}">@${A.pseudo}</div></td>
              <td style="text-align:center;color:${Et}">${A.played}</td><td style="text-align:center;color:${Et}">${A.won}-${A.drawn}-${A.lost}</td>
              <td style="text-align:center;color:${A.goalDiff>=0?"#4ade80":"#ff6b6b"}">${A.goalDiff>=0?"+":""}${A.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Xe}">${A.points}</td>
              ${g>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${dt}">${N?N.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${Jt};border:1px solid ${Qt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(A,$)=>$+1).reverse().map(A=>{const $=(d||[]).filter(N=>N.matchday===A);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${Ze};margin-bottom:6px">Journée ${A}</div>${$.map(N=>Ln(N,f,r,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${l&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${Et}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const h=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((E=document.getElementById("ml-back"))==null||E.addEventListener("click",()=>et(e,t,h)),(m=document.getElementById("ml-refresh"))==null||m.addEventListener("click",async A=>{const $=A.currentTarget;$.style.opacity="0.5",await lt(e,t,i)}),(M=document.getElementById("ml-start-btn"))==null||M.addEventListener("click",()=>da(e,t,a,f)),(k=document.getElementById("ml-next-day"))==null||k.addEventListener("click",()=>la(e,t,i)),(I=document.getElementById("ml-join-now"))==null||I.addEventListener("click",()=>oo(e,t,i,a.type)),(B=document.getElementById("ml-leave-btn"))==null||B.addEventListener("click",()=>aa(e,t,i,p)),(W=document.getElementById("ml-delete-btn"))==null||W.addEventListener("click",()=>Ri(e,t,i,a.name,"waiting")),(te=document.getElementById("ml-delete-now"))==null||te.addEventListener("click",()=>Ri(e,t,i,a.name,h)),(Z=document.getElementById("ml-archive-btn"))==null||Z.addEventListener("click",()=>sa(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(A=>{A.addEventListener("click",()=>{const $=x.find(N=>N.id===A.dataset.playMatch);$&&t.navigate("match-mini-league",{mlMatchId:$.id,leagueId:i})})}),a.status==="finished"&&w){const A=y.findIndex($=>$.userId===r);A>=0&&A<3&&w.prize_amount>0&&!w.prize_claimed&&setTimeout(()=>ca(e,t,a,w,A),400)}}function Ln(e,t,i,n,o=!1){const r=f=>t.find(y=>y.id===f);if(e.is_bye){const f=r(e.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${Et};text-align:center">🔵 ${(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"?"} exempté(e)</div>`}const a=r(e.home_id),s=r(e.away_id),d=e.home_id===i||e.away_id===i,c=d&&e.status==="pending"&&n&&!o,l=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${d?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${d?"rgba(74,222,128,0.35)":Lt}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?"#4ade80":Ze}">${l}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${c?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function da(e,t,i,n){const{toast:o,state:r}=t,a=pa(n.map(c=>c.id),i.mode),s=[];a.forEach((c,l)=>c.forEach(f=>s.push({league_id:i.id,matchday:l+1,home_id:f.home||f.bye,away_id:f.away||null,is_bye:!!f.bye,status:f.bye?"bye":"pending"})));const{error:d}=await v.from("mini_league_matches").insert(s);if(d){o("Erreur calendrier : "+d.message,"error");return}await v.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),o(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),lt(e,t,i.id)}async function la(e,t,i){const{data:n}=await v.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),o=(n.current_day||0)+1;if(o>(n.total_days||0)){lt(e,t,i);return}await v.from("mini_leagues").update({current_day:o}).eq("id",i),t.toast(`Journée ${o} commencée !`,"success"),lt(e,t,i)}async function ca(e,t,i,n,o){var y,x;const{state:r,toast:a}=t,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],d=["🥇","🥈","🥉"][o],c=n.prize_amount||s[o]||0,l=n.prize_claimed,f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",f.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${d}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${o===0?"Champion !":o===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${dt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${l?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${dt}">${c.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${o===0?"70%":o===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${l?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${dt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${c.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(f),(y=f.querySelector("#prize-close"))==null||y.addEventListener("click",()=>f.remove()),(x=f.querySelector("#claim-prize-btn"))==null||x.addEventListener("click",async g=>{const p=g.currentTarget;p.disabled=!0,p.textContent="...";const{data:u,error:b}=await v.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:r.profile.id});if(b||!(u!=null&&u.success)){console.error("[MiniLeague] claim_mini_league_prize:",b||u),a((u==null?void 0:u.error)||"Erreur lors de la récupération","error"),p.disabled=!1,p.textContent=`💰 Récupérer ${c.toLocaleString("fr")} cr.`;return}if(u.already_claimed)a("Déjà récupéré précédemment","info");else{const w=(r.profile.credits||0)+u.prize;r.profile&&(r.profile.credits=w);const h=document.getElementById("nav-credits");h&&(h.textContent=`💰 ${w.toLocaleString("fr")}`),a(`💰 +${u.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}f.remove(),lt(e,t,i.id)})}function pa(e,t){const n=e.length%2===0?[...e]:[...e,null],o=n.length;let r=n.slice(1);const a=[];for(let s=0;s<o-1;s++){const d=[],c=[n[0],...r];for(let l=0;l<o/2;l++){const f=c[l],y=c[o-1-l];f===null?d.push({bye:y}):y===null?d.push({bye:f}):d.push({home:f,away:y})}a.push(d),r=[r[r.length-1],...r.slice(0,-1)]}return t==="aller-retour"?[...a,...a.map(s=>s.map(d=>d.bye?d:{home:d.away,away:d.home}))]:a}function ua(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const o=i[n.home_id],r=i[n.away_id];!o||!r||(o.played++,r.played++,o.goalsFor+=n.home_score,o.goalsAgainst+=n.away_score,r.goalsFor+=n.away_score,r.goalsAgainst+=n.home_score,n.home_score>n.away_score?(o.won++,o.points+=3,r.lost++):n.home_score<n.away_score?(r.won++,r.points+=3,o.lost++):(o.drawn++,o.points++,r.drawn++,r.points++),o.goalDiff=o.goalsFor-o.goalsAgainst,r.goalDiff=r.goalsFor-r.goalsAgainst)}),Object.values(i).sort((n,o)=>o.points-n.points||o.goalDiff-n.goalDiff||o.goalsFor-n.goalsFor)}async function Tn(e,t){const{state:i,navigate:n,toast:o}=t,r=i.params||{},a=r.leagueId||null,s=r.mlMatchId||null,d=i.user.id;if(!s||!a){o("Match introuvable","error"),n("mini-league");return}const{data:c,error:l}=await v.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",s).single();if(l||!c){o("Match introuvable","error"),n("mini-league",{openLeagueId:a});return}if(c.home_id!==d&&c.away_id!==d){o("Vous ne faites pas partie de ce match","error"),n("mini-league",{openLeagueId:a});return}const f=c.home_id===d;if(c.match_id){await Ct(e,t,c.match_id,f,{mlLeagueId:a,mlMatchId:s});return}await ki(e,t,"mini_league",async({deckId:y,gcCardsEnriched:x,gcDefs:g,stadiumDef:p})=>{st(e);const u=async b=>{const{data:w,error:h}=await v.rpc("start_mini_league_match",{p_ml_match_id:s,p_user_id:d,p_deck_id:y});if(h||!(w!=null&&w.success)){console.error("[MiniLeague] start_mini_league_match error:",h||w),o((w==null?void 0:w.error)||"Impossible de lancer le match","error"),n("mini-league",{openLeagueId:a});return}if(w.matched){await Ct(e,t,w.match_id,f,{mlLeagueId:a,mlMatchId:s,myGC:b||[],gcDefs:g,stadiumDef:p});return}await fa(e,t,{mlMatchId:s,leagueId:a,amIHome:f,chosenGC:b,gcDefs:g,stadiumDef:p})};if(!(x!=null&&x.length)){await u([]);return}wi(e,x,u)})}function fa(e,t,{mlMatchId:i,leagueId:n,amIHome:o,chosenGC:r,gcDefs:a,stadiumDef:s}){return new Promise(d=>{var p;const{navigate:c}=t;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let l=!1;const f=async u=>{if(!l){if(l=!0,clearInterval(g),x)try{x.unsubscribe()}catch{}u&&await Ct(e,t,u,o,{mlLeagueId:n,mlMatchId:i,myGC:r||[],gcDefs:a,stadiumDef:s}),d()}};(p=document.getElementById("wait-back"))==null||p.addEventListener("click",()=>{if(l=!0,clearInterval(g),x)try{x.unsubscribe()}catch{}c("mini-league",{openLeagueId:n}),d()});const y=async()=>{if(l)return;const{data:u}=await v.from("mini_league_matches").select("match_id").eq("id",i).single();u!=null&&u.match_id&&f(u.match_id)},x=v.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},u=>{var b;(b=u.new)!=null&&b.match_id&&f(u.new.match_id)}).subscribe(),g=setInterval(y,3e3);y()})}const ma="/",ga=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function xa(e,t,i){let n=0;const o=document.createElement("div");o.id="tutorial-overlay",o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const r=()=>{var l,f,y;const s=t[n],d=n===t.length-1,c=Math.round((n+1)/t.length*100);o.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${c}%;background:${s.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${s.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${s.title}</div>
          <div style="font-size:11px;color:#aaa">${n+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${s.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${ma}icons/${s.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${s.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${s.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${n>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${d?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${s.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${d?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,o.querySelectorAll("ul,ol").forEach(x=>{x.style.paddingLeft="20px",x.style.marginTop="6px",x.style.marginBottom="6px"}),o.querySelectorAll("li").forEach(x=>{x.style.marginBottom="4px"}),o.querySelectorAll("p").forEach(x=>{x.style.marginBottom="8px"}),(l=o.querySelector("#tuto-prev"))==null||l.addEventListener("click",()=>{n--,r()}),(f=o.querySelector("#tuto-next"))==null||f.addEventListener("click",()=>{d?a():(n++,r())}),(y=o.querySelector("#tuto-skip"))==null||y.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{o.remove(),e!=null&&e.id&&await v.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(o),r()}async function ya(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:o,error:r}=await v.rpc("get_tutorial_steps");if(!r&&(o==null?void 0:o.length)>0)n=o,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:s,error:d}=await v.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!d&&(s==null?void 0:s.length)>0?(n=s,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${r==null?void 0:r.message}, Direct: ${d==null?void 0:d.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=n.length>0?n.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):ga;xa(e,a,()=>t("boosters"))}const ui={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ft(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function ba(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await nn(e,t)}async function nn(e,t){const{state:i,toast:n}=t,{data:o}=await v.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:r}=await v.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(o||[]).filter(p=>p.seller_id!==i.profile.id),s=r||[];e.innerHTML=`
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
  </div>`;let d="buy";const c=()=>{var p,u,b,w,h,E,m;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((b=document.getElementById("flt-country"))==null?void 0:b.value)||"").toLowerCase().trim(),job:((w=document.getElementById("flt-job"))==null?void 0:w.value)||"",rarity:((h=document.getElementById("flt-rarity"))==null?void 0:h.value)||"",note1:parseInt((E=document.getElementById("flt-note1"))==null?void 0:E.value)||0,note2:parseInt((m=document.getElementById("flt-note2"))==null?void 0:m.value)||0}};function l(p){const u=c();return p.filter(b=>{var B,W,te;const w=(B=b.card)==null?void 0:B.player;if(!w)return!1;const h=`${w.firstname} ${w.surname_real}`.toLowerCase(),E=(((W=w.clubs)==null?void 0:W.encoded_name)||"").toLowerCase(),m=(w.country_code||"").toLowerCase(),M=((te=b.card)==null?void 0:te.evolution_bonus)||0,k=Ft(w,w.job,M),I=w.job2?Ft(w,w.job2,M):0;return!(u.name&&!h.includes(u.name)||u.club&&!E.includes(u.club)||u.country&&!m.includes(u.country)||u.job&&w.job!==u.job||u.rarity&&w.rarity!==u.rarity||u.note1&&k<u.note1||u.note2&&I<u.note2)})}function f(p){var I,B,W,te;const u=(I=p.card)==null?void 0:I.player;if(!u)return"";const b=((B=p.card)==null?void 0:B.evolution_bonus)||0,w=Ft(u,u.job,b),h=u.job2?Ft(u,u.job2,b):0,E=(i.profile.credits||0)>=p.price,m=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,M=ui[u.job]||"#bbb",k=u.job2?ui[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${m?`<img src="${m}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(W=u.clubs)!=null&&W.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${M};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${M};font-family:Arial Black,Arial">${w}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${k};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${k};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((te=p.seller)==null?void 0:te.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${E?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${E?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function y(p){var I,B,W,te;const u=(I=p.card)==null?void 0:I.player;if(!u)return"";const b=((B=p.card)==null?void 0:B.evolution_bonus)||0,w=Ft(u,u.job,b),h=u.job2?Ft(u,u.job2,b):0,E=p.status==="sold",m=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,M=ui[u.job]||"#bbb",k=u.job2?ui[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${E?"opacity:0.7":""}">
      ${m?`<img src="${m}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(W=u.clubs)!=null&&W.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${M};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${M};font-family:Arial Black,Arial">${w}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${k};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${k};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:${E?"#22c55e":"#999"};margin-top:1px">
          ${E?`✅ Vendu à ${((te=p.buyer)==null?void 0:te.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${E?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function x(){const p=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(p){if(u.style.display=d==="buy"?"flex":"none",d==="buy"){const b=l(a);p.innerHTML=b.length?b.map(f).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const b=s.filter(h=>h.status==="active").sort((h,E)=>new Date(E.listed_at)-new Date(h.listed_at)),w=s.filter(h=>h.status==="sold").sort((h,E)=>new Date(E.sold_at||E.listed_at)-new Date(h.sold_at||h.listed_at));p.innerHTML=(b.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${b.length})</div>`+b.map(y).join(""):"")+(w.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${w.length})</div>`+w.map(y).join(""):"")+(!b.length&&!w.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(b=>b.addEventListener("click",()=>ha(b.dataset.buy,a,e,t))),p.querySelectorAll("[data-cancel]").forEach(b=>b.addEventListener("click",()=>wa(b.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{d=p.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(u=>{const b=u===p;u.style.background=b?"var(--green)":"var(--tile-bg)",u.style.color=b?"#fff":"var(--tile-fg-dim)",u.style.borderColor=b?"var(--green)":"var(--tile-border)"}),x()})});let g;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var u;(u=document.getElementById(p))==null||u.addEventListener("input",()=>{clearTimeout(g),g=setTimeout(x,250)})}),x()}async function ha(e,t,i,n){const{state:o,toast:r,refreshProfile:a}=n,s=t.find(l=>l.id===e);if(!s)return;const d=s.price;if((o.profile.credits||0)<d){r("Crédits insuffisants","error");return}va(s,async()=>{const{error:l}=await v.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:o.profile.id});if(l){r("Erreur achat : "+l.message,"error");return}await a();const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),r("✅ Carte achetée !","success"),await nn(i,n)})}function va(e,t){var a;const i=(a=e.card)==null?void 0:a.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",o.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(o);const r=s=>{o.remove(),s&&t()};o.querySelector("#buy-cancel").addEventListener("click",()=>r(!1)),o.querySelector("#buy-ok").addEventListener("click",()=>r(!0)),o.addEventListener("click",s=>{s.target===o&&r(!1)})}async function wa(e,t,i){const{toast:n}=i,{data:o}=await v.from("market_listings").select("card_id").eq("id",e).single();if(await v.from("market_listings").update({status:"cancelled"}).eq("id",e),o!=null&&o.card_id){const{count:r}=await v.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",o.card_id).eq("status","active");r||await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",o.card_id)}n("Annonce retirée","success"),nn(t,i)}async function _a(e,t){var x,g,p,u,b;const{state:i,navigate:n}=t,o=((g=(x=t==null?void 0:t.state)==null?void 0:x.params)==null?void 0:g.tab)||"ranked";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:r},{data:a},{data:s}]=await Promise.all([v.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100),v.rpc("get_mini_league_leaderboard"),v.rpc("get_random_leaderboard")]);let d=o;const c=w=>w<3?["#D4A017","#a0a0a0","#cd7f32"][w]:"var(--green)",l=w=>w<3?"#000":"#fff";function f(){var E,m,M;const w=document.getElementById("rankings-legend");w&&(w.innerHTML=d==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const h=document.getElementById("rankings-list");if(h){if(d==="ranked"){const k=r||[];h.innerHTML=k.length>0?k.map((I,B)=>{const W=vi(I.mmr??1e3),te=(I.ranked_wins||0)+(I.ranked_losses||0)+(I.ranked_draws||0),Z=te>0?Math.round((I.ranked_wins||0)/te*100):0,A=I.id===i.profile.id,$=(I.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${A?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${B<3?["#D4A017","#a0a0a0","#cd7f32"][B]:"rgba(255,255,255,0.08)"};color:${B<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${B<3?"16":"13"}px">${B<3?["🥇","🥈","🥉"][B]:B+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${W.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${I.club_name} · ${W.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${$?"❓":W.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${W.color}">${$?"Placement":W.label}</div>
              ${$?"":`<div style="font-size:10px;color:var(--tile-fg-dim)">${Z}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(d==="mini-league"){const k=a||[];h.innerHTML=k.length>0?k.map((I,B)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${I.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${c(B)};color:${l(B)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${B<3?"16":"13"}px">${B<3?["🥇","🥈","🥉"][B]:B+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${I.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${I.top1} 🥈${I.top2} 🥉${I.top3}</div>
            <div style="color:var(--tile-fg-dim)">${I.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const k=s||[];h.innerHTML=k.length>0?k.map((I,B)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${I.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${c(B)};color:${l(B)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${B<3?"16":"13"}px">${B<3?["🥇","🥈","🥉"][B]:B+1}</div>
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
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}(E=document.getElementById("tab-ranked"))!=null&&E.style&&(document.getElementById("tab-ranked").style.cssText=y(d==="ranked")),(m=document.getElementById("tab-mini-league"))!=null&&m.style&&(document.getElementById("tab-mini-league").style.cssText=y(d==="mini-league")),(M=document.getElementById("tab-random"))!=null&&M.style&&(document.getElementById("tab-random").style.cssText=y(d==="random"))}}const y=w=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${w?"900":"400"};background:${w?"var(--green)":"rgba(255,255,255,0.06)"};color:${w?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-ranked" style="${y(d==="ranked")}">⚔️ Ranked</button>
        <button id="tab-mini-league" style="${y(d==="mini-league")}">🏆 Mini Leagues</button>
        <button id="tab-random" style="${y(d==="random")}">🎲 Random</button>
      </div>
      <div id="rankings-legend"></div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,f(),(p=document.getElementById("tab-ranked"))==null||p.addEventListener("click",()=>{d="ranked",f()}),(u=document.getElementById("tab-mini-league"))==null||u.addEventListener("click",()=>{d="mini-league",f()}),(b=document.getElementById("tab-random"))==null||b.addEventListener("click",()=>{d="random",f()})}async function ka(e,t){var M,k,I,B;const{state:i,navigate:n,toast:o}=t,r=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:s}]=await Promise.all([v.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),v.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",r.id).single()]);if(!s){o("Erreur chargement profil","error"),n("home");return}if(!a){e.innerHTML=`
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
    </div>`,(M=document.getElementById("ranked-back"))==null||M.addEventListener("click",()=>n("home"));return}const d=s.mmr??1e3,c=s.mmr_deviation??350,l=s.mmr_volatility??.06,f=s.placement_matches??0,y=f<10,x=Math.max(0,10-f),g=vi(d),p=zn(d),u=Ti.findIndex(W=>W.id===g.id),b=Ti[u+1]||null,w={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},h=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),E=h>0?Math.round((s.ranked_wins||0)/h*100):0,m=Ti.map(W=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${g.id===W.id?1:.35};
      transform:${g.id===W.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${g.id===W.id?"28px":"20px"}">${W.emoji}</div>
      <div style="font-size:9px;color:${W.color};font-weight:${g.id===W.id?"900":"400"};letter-spacing:0.5px">${W.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
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
        ${b?`<span>${b.emoji} ${b.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${p}%;background:linear-gradient(90deg,${g.color},${g.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${p}% vers ${b?b.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${m}
    </div>

    <!-- Placement / Stats -->
    ${y?`
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
  </div>`,(k=document.getElementById("ranked-back"))==null||k.addEventListener("click",()=>n("home")),(I=document.getElementById("ranked-leaderboard-btn"))==null||I.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(B=document.getElementById("ranked-play-btn"))==null||B.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:d,rd:c,sigma:l,isPlacement:y}})})}async function $a(e,{state:t,navigate:i,toast:n}){const o=t.profile;if(!o)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await v.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${o.id},away_id.eq.${o.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(r||[]).filter(l=>l.status==="finished"),d=(r||[]).filter(l=>l.status==="in_progress");function c(l){const f=l.home_id===o.id;f?l.home_score:l.away_score,f?l.away_score:l.home_score;const y=l.winner_id===o.id,x=l.home_score===l.away_score&&l.status==="finished",g=l.status!=="finished"?"…":x?"N":y?"V":"D",p=l.status!=="finished"||x?"#888":y?"#1A6B3C":"#c0392b";let u=a[l.mode]||l.mode;l.away_id===null&&!u.startsWith("IA")&&(u="IA");const w=l.home_id===o.id?l.away:l.home;let h;l.away_id===null?h=u:w?h=`${w.club_name||w.pseudo} (${w.pseudo})`:h="Adversaire";let E="";l.status==="in_progress"&&Date.now()-new Date(l.created_at).getTime()>3600*1e3&&(E=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const m=new Date(l.created_at),M=m.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+m.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),k=l.status==="finished"?`${l.home_score} - ${l.away_score}`:`${l.home_score||0} - ${l.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${E}</div>
        <div style="font-size:11px;color:var(--gray-600)">${u} · ${M}${l.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${k}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${g}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(r||[]).length} match(s)</p>
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

      ${(r||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}uo(mo);const ye={user:null,profile:null,page:"home",params:{}};function Pt(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function Ea(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Ni(){document.getElementById("modal-overlay").classList.add("hidden")}async function Zt(){if(!ye.user)return;const{data:e}=await v.from("users").select("*").eq("id",ye.user.id).single();e&&(ye.profile=e)}const ro="mw_theme";function ao(){return localStorage.getItem(ro)||"dark"}function La(e){var t;localStorage.setItem(ro,e),Ta(e),(t=ye.profile)!=null&&t.id&&v.from("users").update({theme:e}).eq("id",ye.profile.id).then(()=>{})}function Ta(e){document.documentElement.setAttribute("data-theme",e)}function Gt(e,t={}){ye.page=e,ye.params=t,so()}async function so(){var n,o,r,a;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===ye.page)});const t=document.getElementById("nav-credits");t&&ye.profile&&(t.textContent=`💰 ${(ye.profile.credits||0).toLocaleString("fr")}`);const i={state:ye,navigate:Gt,toast:Pt,openModal:Ea,closeModal:Ni,refreshProfile:Zt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ye.page){case"home":await gn(e,i);break;case"home2":await Ro(e,i);break;case"settings":await Fn(e,i);break;case"collection":await Zo(e,i);break;case"decks":await ji(e,i);break;case"boosters":await ur(e,i);break;case"ranked":await ka(e,i);break;case"match":{const s=ye.params&&ye.params.matchMode||"vs_ai_easy";s==="random"?await Gi(e,i,!1):s==="ranked"?await Gi(e,i,!0):s==="friend"?await Xr(e,i,(n=ye.params)==null?void 0:n.friendId,(o=ye.params)==null?void 0:o.friendName):s==="mini_league"||s==="mini-league"?await Tn(e,i,(r=ye.params)==null?void 0:r.mlMatchId,(a=ye.params)==null?void 0:a.leagueId):await Tr(e,i);break}case"market":await ba(e,i);break;case"rankings":await _a(e,i);break;case"matches":await $a(e,i);break;case"friends":await wo(e,i);break;case"mini-league":await ea(e,i);break;case"match-mini-league":{const s=ye.params||{};await Tn(e,i,s.mlMatchId,s.leagueId);break}default:await gn(e,i)}}function Ia(){var n,o;const e=document.getElementById("app"),t=ye.profile;if(!t)return;const i="/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.07.23-1433" style="cursor:pointer">
        <img src="${i}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <div id="nav-credits" class="credits">💰 ${(t.credits||0).toLocaleString("fr")}</div>
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
  `,document.querySelectorAll(".bottom-nav a").forEach(r=>{r.addEventListener("click",a=>{a.preventDefault(),Gt(r.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Gt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Gt("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>za()),(o=document.getElementById("settings-btn"))==null||o.addEventListener("click",()=>Gt("settings"))}async function za(){const{data:e}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const o=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${n.image_url?`<img src="${n.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${o}</div>
      <div style="font-size:15px;font-weight:900;margin-bottom:6px">${n.title}</div>
      <div style="font-size:13px;color:#444;line-height:1.6;white-space:pre-line">${n.description}</div>
    </div>`}).join("");t.innerHTML=`
    <div style="background:#fff;border-radius:16px;width:100%;max-width:460px;max-height:85vh;display:flex;flex-direction:column;overflow:hidden">
      <div style="display:flex;align-items:center;padding:16px 20px;border-bottom:1px solid #f0f0f0;flex-shrink:0">
        <span style="font-size:22px;margin-right:10px">📰</span>
        <div style="flex:1;font-size:17px;font-weight:900">Journal des mises à jour</div>
        <button id="journal-close" style="background:none;border:none;font-size:22px;cursor:pointer;color:#888;padding:0 4px">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:0 20px">
        ${i||'<div style="padding:40px;text-align:center;color:#aaa">Aucune mise à jour pour le moment.</div>'}
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}function Sa(e,{onPlay:t}){var n;const i="/icons/";e.style.cssText="",e.innerHTML=`
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
  </div>`,(n=e.querySelector("#pl-play-btn"))==null||n.addEventListener("click",t)}async function Aa(){document.documentElement.setAttribute("data-theme",ao()),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Ni()}),document.getElementById("modal-close").addEventListener("click",Ni);const{data:{session:e}}=await v.auth.getSession();if(!e){In(),Sa(document.getElementById("app"),{onPlay:()=>pn(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Pt})});return}ye.user=e.user,await Zt(),In();try{const{data:i}=await v.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(o=>{n[o.formation]=o.links}),fo(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!ye.profile){xo(document.getElementById("app"),{state:ye,navigate:async()=>{await Zt(),Ai()},toast:Pt,refreshProfile:Zt});return}const t=Array.isArray(ye.profile.pending_boosters)?ye.profile.pending_boosters:[];if(!ye.profile.onboarding_done&&t.length>0){vr(document.getElementById("app"),{state:ye,navigate:()=>Ai(),toast:Pt,refreshProfile:Zt});return}Ai(),setTimeout(()=>ya(ye.profile,Gt,Pt),800),v.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(ye.user=null,ye.profile=null,document.getElementById("app").innerHTML="",pn(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Pt}))})}function Ma(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function $i(){const e=document.getElementById("app");e&&(e.style.height=Ma()+"px")}window.addEventListener("resize",$i);window.addEventListener("orientationchange",()=>setTimeout($i,150));window.visualViewport&&window.visualViewport.addEventListener("resize",$i);function Ai(){const e=()=>{var i;(i=ye.user)!=null&&i.id&&v.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",ye.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",$i(),Ia(),so()}function In(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function lo(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}Aa().catch(e=>{console.error("Échec du démarrage:",e),lo()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&lo("Le serveur met trop de temps à répondre.")},12e3);
