const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/special-cards-lEGt-tGs.js","assets/special-cards-CYiiPJPw.css"])))=>i.map(i=>d[i]);
import{s as v,j as vi,q as An,t as Ut,u as Oi,F as Hi,o as tt,n as Rt,g as Mt,r as Se,m as Ct,v as Mi,w as xo,T as Ii,p as bo,x as yo,d as ho}from"./special-cards-lEGt-tGs.js";const vo="/";function un(t,{navigate:e,toast:i}){let n="login";const r=()=>{var a,s,d,l,c,f,b;const o=n==="login";if(t.innerHTML=`
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
        <img src="${vo}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
            flex:1;padding:16px;border:none;background:${o?"rgba(26,107,60,0.3)":"transparent"};
            color:${o?"#fff":"rgba(255,255,255,0.4)"};
            font-size:14px;font-weight:${o?"900":"600"};cursor:pointer;
            border-bottom:2px solid ${o?"#22c55e":"transparent"};
            transition:all .2s;
          ">Connexion</button>
          <button id="tab-reg-btn" style="
            flex:1;padding:16px;border:none;background:${o?"transparent":"rgba(26,107,60,0.3)"};
            color:${o?"rgba(255,255,255,0.4)":"#fff"};
            font-size:14px;font-weight:${o?"600":"900"};cursor:pointer;
            border-bottom:2px solid ${o?"transparent":"#22c55e"};
            transition:all .2s;
          ">Inscription</button>
        </div>

        <div style="padding:24px">
          ${o?`
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
    </style>`,(a=document.getElementById("tab-login-btn"))==null||a.addEventListener("click",()=>{n="login",r()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{n="register",r()}),o)(d=document.getElementById("login-password"))==null||d.addEventListener("keydown",x=>{var g;x.key==="Enter"&&((g=document.getElementById("login-btn"))==null||g.click())}),(l=document.getElementById("login-btn"))==null||l.addEventListener("click",async()=>{const x=document.getElementById("login-email").value.trim(),g=document.getElementById("login-password").value,p=document.getElementById("login-error");if(p.textContent="",!x||!g){p.textContent="Remplissez tous les champs.";return}const u=document.getElementById("login-btn");u.textContent="⏳ Connexion…",u.disabled=!0;const{error:y}=await v.auth.signInWithPassword({email:x,password:g});if(u.textContent="⚽ Se connecter",u.disabled=!1,y){p.textContent=y.message.includes("Invalid")?"Email ou mot de passe incorrect.":y.message;return}window.location.reload()});else{(c=document.getElementById("reg-confirm"))==null||c.addEventListener("keydown",p=>{var u;p.key==="Enter"&&((u=document.getElementById("reg-btn"))==null||u.click())});let x=null,g=!1;(f=document.getElementById("reg-access-code"))==null||f.addEventListener("input",p=>{const u=p.target.value,y=document.getElementById("access-code-status"),w=document.getElementById("reg-btn");if(clearTimeout(x),g=!1,w&&(w.disabled=!0,w.style.opacity="0.45",w.style.cursor="not-allowed"),!u){y&&(y.textContent="");return}y&&(y.textContent="⏳ Vérification…",y.style.color="rgba(255,255,255,0.4)"),x=setTimeout(async()=>{const{data:h,error:L}=await v.rpc("check_signup_password",{input_password:u});if(L){y&&(y.textContent="Erreur de vérification.",y.style.color="#f87171");return}g=!!h,y&&(y.textContent=g?"✅ Code valide":"❌ Code incorrect",y.style.color=g?"#4ade80":"#f87171"),w&&(w.disabled=!g,w.style.opacity=g?"1":"0.45",w.style.cursor=g?"pointer":"not-allowed")},400)}),(b=document.getElementById("reg-btn"))==null||b.addEventListener("click",async()=>{var E;const p=document.getElementById("reg-email").value.trim(),u=document.getElementById("reg-password").value,y=document.getElementById("reg-confirm").value,w=((E=document.getElementById("reg-access-code"))==null?void 0:E.value)||"",h=document.getElementById("reg-error");if(h.textContent="",!p||!u||!y){h.textContent="Remplissez tous les champs.";return}if(u.length<6){h.textContent="Mot de passe trop court (min. 6 caractères).";return}if(u!==y){h.textContent="Les mots de passe ne correspondent pas.";return}const{data:L}=await v.rpc("check_signup_password",{input_password:w});if(!L){h.textContent="Code d'accès incorrect.";return}const m=document.getElementById("reg-btn");m.textContent="⏳ Création…",m.disabled=!0;const{error:A}=await v.auth.signUp({email:p,password:u});if(m.textContent="🚀 Créer mon compte",m.disabled=!1,A){h.textContent=A.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",r(),setTimeout(()=>{const S=document.getElementById("login-email");S&&(S.value=p)},50)})}};r()}function wo(t,{state:e,navigate:i,toast:n,refreshProfile:r}){let o="#1A6B3C",a="#D4A017";t.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${a};border-color:${o}">
          <span id="logo-initials" style="color:${o}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${o};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${o}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function s(){var g;const l=document.getElementById("logo-preview"),c=document.getElementById("logo-initials"),f=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",b=f.trim().split(" ").filter(Boolean),x=b.length>=2?(b[0][0]+b[1][0]).toUpperCase():f.slice(0,2).toUpperCase();l&&(l.style.background=a,l.style.borderColor=o),c&&(c.textContent=x,c.style.color=o)}document.getElementById("color1").addEventListener("input",l=>{o=l.target.value,document.getElementById("swatch1").style.background=o,s()}),document.getElementById("color2").addEventListener("input",l=>{a=l.target.value,document.getElementById("swatch2").style.background=a,s()});function d(l){document.querySelectorAll(".setup-step").forEach(c=>c.classList.remove("active")),document.getElementById(`step-${l}`).classList.add("active"),document.getElementById("step-num").textContent=l,document.getElementById("progress-fill").style.width=`${Math.round(l/3*100)}%`,l===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("step1-error");if(c.textContent="",l.length<3){c.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await v.from("users").select("id").eq("pseudo",l).maybeSingle();if(f){c.textContent="Ce pseudo est déjà pris.";return}d(2)}),document.getElementById("step2-back").addEventListener("click",()=>d(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const l=document.getElementById("setup-club").value.trim(),c=document.getElementById("step2-error");if(c.textContent="",l.length<2){c.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await v.from("users").select("id").eq("club_name",l).maybeSingle();if(f){c.textContent="Ce nom de club est déjà pris.";return}d(3)}),document.getElementById("step3-back").addEventListener("click",()=>d(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),b=document.getElementById("step3-finish");f.textContent="",b.disabled=!0,b.textContent="Création en cours…";try{const{error:x}=await v.from("users").insert({id:e.user.id,pseudo:l,club_name:c,club_color1:o,club_color2:a,credits:1e4});if(x)throw x;await _o(e.user.id),await r(),n(`Bienvenue ${l} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(x){f.textContent=x.message,b.disabled=!1,b.textContent="🚀 Créer mon profil !"}})}async function _o(t){const e=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await v.from("users").update({pending_boosters:e,onboarding_done:!1,first_booster_opened:!1}).eq("id",t)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const ko="modulepreload",$o=function(t){return"/"+t},fn={},Ui=function(e,i,n){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(i.map(d=>{if(d=$o(d),d in fn)return;fn[d]=!0;const l=d.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${c}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":ko,l||(f.as="script"),f.crossOrigin="",f.href=d,s&&f.setAttribute("nonce",s),document.head.appendChild(f),l)return new Promise((b,x)=>{f.addEventListener("load",b),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return r.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return e().catch(o)})},ti="#1A6B3C",ii="#cc2222",Eo="#D4A017",mn="#888";async function Lo(t,e){const{state:i,toast:n}=e;t.innerHTML=`
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
    </div>`,await Mn(i,n,e),document.getElementById("btn-add-friend").addEventListener("click",()=>To(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Ki(i,n,null,e))}async function Mn(t,e,i={}){const{navigate:n}=i,r=t.user.id,{data:o,error:a}=await v.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${r},addressee_id.eq.${r}`),{count:s}=await v.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",r).eq("status","pending"),d=document.getElementById("pending-badge");d&&(s>0?(d.style.display="flex",d.textContent=s):d.style.display="none");const l=document.getElementById("friends-list");if(!l)return;if(a){console.error("[Friends] Erreur:",a),l.innerHTML=`<div style="color:${ii};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const c=(o||[]).map(x=>x.requester_id===r?x.addressee_id:x.requester_id);let f={};if(c.length){const{data:x}=await v.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",c);(x||[]).forEach(g=>{f[g.id]=g})}const b=(o||[]).map(x=>({friendshipId:x.id,friend:f[x.requester_id===r?x.addressee_id:x.requester_id]||{pseudo:"?"}}));if(!b.length){l.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}l.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${b.length} ami${b.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${b.map(({friendshipId:x,friend:g})=>Io(g,x)).join("")}
    </div>`,l.querySelectorAll("[data-stats]").forEach(x=>{x.addEventListener("click",()=>So(t,x.dataset.stats,x.dataset.friendName))}),l.querySelectorAll("[data-match]").forEach(x=>{x.addEventListener("click",async()=>{const g=x.dataset.friendId,p=x.dataset.friendName;if(typeof n!="function"){e("Erreur navigation","error");return}const u=t.user.id,{data:y}=await v.from("friend_match_invites").select("id").eq("inviter_id",g).eq("invitee_id",u).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),w=!!y;console.log("[Friends] clic match",{fid:g,fname:p,isAccepting:w}),n("match",{matchMode:"friend",friendId:g,friendName:p,isAccepting:w})})})}function Io(t,e){const i=t.club_name||t.pseudo||"?",n=t.pseudo||"",r=(n||i).slice(0,2).toUpperCase(),o=t.club_color2||ti,a=t.club_color1||"#ffffff",s=t.last_seen_at?new Date(t.last_seen_at):null,d=s&&Date.now()-s.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:var(--tile-bg);border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${o};border:2.5px solid ${a};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${a}">
          ${r}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${d?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${n}</div>
        <div style="font-size:11px;color:${d?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${d?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${e}" data-friend-id="${t.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:var(--tile-bg);font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${t.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${Eo};background:var(--tile-bg);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function To(t,e){const i=Vi();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${ii};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${Yi()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),r=i.querySelector("#add-friend-error"),o=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",o),i.addEventListener("click",a=>{a.target===i&&o()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=n.value.trim();if(!a){r.textContent="Entre un pseudo";return}r.textContent="";const{data:s}=await v.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!s){r.textContent="Utilisateur introuvable";return}if(s.id===t.user.id){r.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:d}=await v.from("friendships").select("id, status").or(`and(requester_id.eq.${t.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${t.user.id})`).single();if(d){const c=d.status==="accepted"?"Vous êtes déjà amis !":d.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";r.textContent=c;return}const{error:l}=await v.from("friendships").insert({requester_id:t.user.id,addressee_id:s.id,status:"pending"});if(l){r.textContent="Erreur : "+l.message;return}o(),e(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function Ki(t,e,i=null,n={}){const r=t.user.id,{data:o}=await v.from("friendships").select("id, requester_id").eq("addressee_id",r).eq("status","pending").order("created_at",{ascending:!1}),a=(o||[]).map(b=>b.requester_id);let s={};if(a.length){const{data:b}=await v.from("users").select("id, pseudo, club_name").in("id",a);(b||[]).forEach(x=>{s[x.id]=x})}const d=(o||[]).map(b=>({...b,requester:s[b.requester_id]||{pseudo:"?"}})),l=Vi(),c=d||[];l.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${c.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${c.map(b=>{var x,g,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((x=b.requester)==null?void 0:x.club_name)||((g=b.requester)==null?void 0:g.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=b.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${b.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${ti};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${b.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${ii};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${Yi()}`,document.body.appendChild(l);const f=()=>l.remove();l.querySelector("#pending-close").addEventListener("click",f),l.addEventListener("click",b=>{b.target===l&&f()}),l.querySelectorAll("[data-accept]").forEach(b=>{b.addEventListener("click",async()=>{const{error:x}=await v.from("friendships").update({status:"accepted"}).eq("id",b.dataset.accept);if(x){e("Erreur : "+x.message,"error");return}b.closest("div[style]").remove(),e("✅ Ami accepté !","success"),Mn(t,e,n),i&&i()})}),l.querySelectorAll("[data-decline]").forEach(b=>{b.addEventListener("click",async()=>{await v.from("friendships").delete().eq("id",b.dataset.decline),b.closest("div[style]").remove(),e("Demande refusée","info"),i&&i()})})}async function So(t,e,i){const n=t.user.id,[r,o]=[n,e].sort(),a=n===r,{data:s}=await v.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",o).single(),d=t.profile.club_name||t.profile.pseudo||"Moi",l=s||{},c=a?l.wins_p1||0:l.wins_p2||0,f=a?l.wins_p2||0:l.wins_p1||0,b=l.draws||0,x=a?l.goals_p1||0:l.goals_p2||0,g=a?l.goals_p2||0:l.goals_p1||0,p=a?l.gc_used_p1||0:l.gc_used_p2||0,u=a?l.gc_used_p2||0:l.gc_used_p1||0,y=l.matches_total||0,w=(L,m,A,E=ti,S=ii)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${E}">${m}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${L}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${S}">${A}</div>
    </div>`,h=Vi();h.innerHTML=`
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
        ${w("Victoires",c,f)}
        ${w("Nuls",b,b,mn,mn)}
        ${w("Défaites",f,c)}
        ${w("Buts marqués",x,g)}
        ${w("Buts encaissés",g,x,ii,ti)}
        ${w("GC utilisés ⚡",p,u,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${y} match${y>1?"s":""} joué${y>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${Yi()}`,document.body.appendChild(h),h.querySelector("#stats-close").addEventListener("click",()=>h.remove()),h.addEventListener("click",L=>{L.target===h&&h.remove()})}function Vi(){const t=document.createElement("div");return t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",t}function Yi(){return`
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
        background:${ti};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const Cn="mw_sound_volume";function Wi(){const t=localStorage.getItem(Cn);if(t===null)return 100;const e=parseInt(t,10);return Number.isFinite(e)?Math.max(0,Math.min(100,e)):100}function zo(t){localStorage.setItem(Cn,String(Math.max(0,Math.min(100,Math.round(t)))))}function Xi(){return Wi()===0}function fi(t){return Math.max(0,Math.min(1,t*(Wi()/100)))}function Ji(t,e=1){if(Xi())return null;try{const i=new Audio(t);return i.volume=fi(e),i.play().catch(()=>{}),i}catch{return null}}let xt=null,Ci=null,gn=.3;function jn(t,e=.3){if(gn=e,xt&&Ci===t&&!xt.paused){xt.volume=fi(gn);return}if(Tt(),!Xi())try{const i=new Audio(t);i.loop=!0,i.volume=fi(e),i.play().catch(()=>{}),xt=i,Ci=t}catch{}}function Tt(){if(xt)try{xt.pause(),xt.currentTime=0}catch{}xt=null,Ci=null}let Xt=null;function Bn(t,e=.6){if(Ue(),!Xi())try{const i=new Audio(t);i.volume=fi(e),i.play().catch(()=>{}),Xt=i}catch{}}function Ue(){if(Xt)try{Xt.pause(),Xt.currentTime=0}catch{}Xt=null}const Ao="2026.07.26-1545";async function xn(t,{state:e,navigate:i,toast:n}){var o,a,s;const r=e.profile;r&&(t.innerHTML=`
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
      background: linear-gradient(135deg, ${r.club_color1}cc, ${r.club_color2}88);
      border: 1.5px solid ${r.club_color2};
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
          <h3>${r.pseudo}</h3>
          <div class="level">Niveau ${r.level} · ${r.club_name}</div>
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
        ${r.is_admin?`
        <a href="/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:4px 12px;border-radius:8px;font-size:12px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${Ao}</div>`:""}
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var b,x,g,p,u;const d=((b=window.visualViewport)==null?void 0:b.height)||window.innerHeight,l=((x=document.querySelector(".top-nav"))==null?void 0:x.offsetHeight)||56,c=((g=document.querySelector(".bottom-nav"))==null?void 0:g.offsetHeight)||60;if(t.querySelector(".home-inner")){const y=d-l-c;t.querySelector(".home-dark").style.minHeight=y+"px"}if(window.innerWidth<768){const y=((p=t.querySelector(".home-hero"))==null?void 0:p.offsetHeight)||60,w=t.querySelector(".ranked-tile");t.querySelector(".play-grid");const h=((u=t.querySelector(".home-footer"))==null?void 0:u.offsetHeight)||44,L=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((W,ee)=>{var G;return W+(((G=document.getElementById(ee))==null?void 0:G.offsetHeight)||0)},0),m=12*5,A=d-l-c-y-h-L-m-32,E=Math.max(80,Math.round(A*.28)),S=Math.max(160,Math.round(A*.72)),q=Math.floor((S-10)/2);w&&(w.style.minHeight=w.style.maxHeight=E+"px"),t.querySelectorAll(".play-tile").forEach(W=>{W.style.minHeight=W.style.height=q+"px"}),t.querySelectorAll(".play-tile .play-icon").forEach(W=>{W.style.height=Math.round(q*.55)+"px"})}}),(o=document.getElementById("nav-rankings"))==null||o.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),t.querySelectorAll("[data-action]").forEach(d=>{d.addEventListener("click",()=>{d.style.transform="scale(.96)",setTimeout(()=>d.style.transform="",180);const l=d.dataset.action;if(l==="match-ai"){qo(i);return}if(l==="match-random"){i("match",{matchMode:"random"});return}if(l==="match-friend"){i("friends");return}if(l==="mini-league"){i("mini-league");return}if(l==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await v.auth.signOut(),window.location.reload()}),(s=document.getElementById("try-home2-btn"))==null||s.addEventListener("click",()=>i("home2")),Dn(e,n),Bo(e,n,i),qn(e,n,i),Mo(e,n))}async function Mo(t,e){const i=t.profile.id,{data:n}=await v.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(n!=null&&n.length))return;const r=n.reduce((a,s)=>a+(s.prize_amount||0),0),o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2200",o.innerHTML=`<div class="modal" style="max-width:400px">
    <div class="modal-header"><h2 style="color:#1A6B3C">🏆 Gains à récupérer</h2></div>
    <div class="modal-body" style="padding:18px 20px">
      <p style="font-size:14px;color:#555;margin:0 0 14px">Tu as terminé sur le podium de ${n.length>1?"plusieurs mini leagues":"une mini league"} !</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
        ${n.map(a=>{var s;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#f7f7f7;border-radius:10px">
          <span style="font-size:13px;font-weight:700;color:#1a1a1a">${((s=a.mini_leagues)==null?void 0:s.name)||"Mini League"}</span>
          <span style="font-size:13px;font-weight:900;color:#D4A017">+${(a.prize_amount||0).toLocaleString("fr")} cr.</span>
        </div>`}).join("")}
      </div>
      <button id="claim-all-btn" class="btn btn-primary" style="width:100%;margin-bottom:8px">💰 Tout récupérer (+${r.toLocaleString("fr")} cr.)</button>
      <button id="claim-later-btn" class="btn btn-ghost" style="width:100%">Plus tard</button>
    </div>
  </div>`,document.body.appendChild(o),o.querySelector("#claim-later-btn").addEventListener("click",()=>o.remove()),o.querySelector("#claim-all-btn").addEventListener("click",async a=>{const s=a.currentTarget;s.disabled=!0,s.textContent="...";let d=0;for(const l of n){const{data:c}=await v.rpc("claim_mini_league_prize",{p_league_id:l.league_id,p_user_id:i});c!=null&&c.success&&!c.already_claimed&&(d+=c.prize||0)}if(d>0){t.profile.credits=(t.profile.credits||0)+d;const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${t.profile.credits.toLocaleString("fr")}`),e(`💰 +${d.toLocaleString("fr")} cr. récupérés !`,"success")}o.remove()})}async function qn(t,e,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const r=t.profile.id,{data:o}=await v.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${r},away_id.eq.${r}`).order("created_at",{ascending:!1});if(!(o!=null&&o.length)){n.innerHTML="";return}const a=o.map(d=>d.home_id===r?d.away_id:d.home_id).filter(Boolean);let s={};if(a.length){const{data:d}=await v.from("users").select("id, pseudo, club_name").in("id",a);(d||[]).forEach(l=>{s[l.id]=l.club_name||l.pseudo})}n.innerHTML=o.map(d=>{const l=d.home_id===r?d.away_id:d.home_id,c=s[l]||"Adversaire",f=d.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${f?"🏆 Mini League":d.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${c}</div>
      </div>
      <button data-resume="${d.id}" data-mini="${f?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${d.id}" data-opp="${l}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(d=>{d.addEventListener("click",async()=>{const l=document.getElementById("page-content")||document.getElementById("app");if(d.dataset.mini==="1"){const{data:c}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",d.dataset.resume).single();c?i("match-mini-league",{mlMatchId:c.id,leagueId:c.league_id}):i("mini-league")}else{const{resumePvpMatch:c}=await Ui(async()=>{const{resumePvpMatch:f}=await Promise.resolve().then(()=>ao);return{resumePvpMatch:f}},void 0);c(l,{state:t,navigate:i,toast:e,openModal:null,closeModal:null,refreshProfile:null},d.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(d=>{d.addEventListener("click",()=>{jo(async()=>{await Co(d.dataset.abandon,d.dataset.opp,r),e("Match abandonné (défaite 3-0)","info"),qn(t,e,i)})})})}async function Co(t,e,i){Tt();const{data:n}=await v.from("matches").select("home_id, away_id, game_state, mode").eq("id",t).single();if(!n)return;const r=n.home_id===i,o=r?0:3,a=r?3:0,s=n.game_state||{};s.p1Score=o,s.p2Score=a,s.phase="finished",s.forfeit=!0,await v.from("matches").update({status:"finished",forfeit:!0,winner_id:e,home_score:o,away_score:a,game_state:s}).eq("id",t),n.mode==="mini_league"&&await v.from("mini_league_matches").update({status:"finished",home_score:o,away_score:a}).eq("match_id",t)}function jo(t){const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(e),e.querySelector("#ab-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#ab-ok").addEventListener("click",()=>{e.remove(),t()}),e.addEventListener("click",i=>{i.target===e&&e.remove()})}async function Bo(t,e,i){var s,d,l,c;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:r}=await v.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",t.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!r){n.innerHTML="";return}const o=((s=r.inviter)==null?void 0:s.club_name)||((d=r.inviter)==null?void 0:d.pseudo)||"?",a=r.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${o} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(l=document.getElementById("match-inv-accept"))==null||l.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:a,friendName:o,isAccepting:!0})}),(c=document.getElementById("match-inv-decline"))==null||c.addEventListener("click",async()=>{await v.from("friend_match_invites").update({status:"declined"}).eq("id",r.id),n.innerHTML="",e("Invitation refusée","info")})}async function Dn(t,e){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:r}=await v.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",t.user.id).eq("status","pending");if(r||!(n!=null&&n.length)){i.innerHTML="";return}const o=n.length,a=n.slice(0,2).map(d=>{var l;return((l=d.requester)==null?void 0:l.pseudo)||"?"}).join(", "),s=o>2?` +${o-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${o} demande${o>1?"s":""} d'ami${o>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>Ki(t,e,()=>Dn(t,e)))}function qo(t){const e=[{mode:"vs_ai_easy",label:"Facile",desc:"Pour découvrir le jeu",credits:"500",icon:"🟢",bg:"#eefaf2",border:"#bfe8cf",iconBg:"#1A6B3C",text:"#12401f"},{mode:"vs_ai_medium",label:"Moyen",desc:"Un défi équilibré",credits:"1 000",icon:"🟡",bg:"#fdf7e6",border:"#f0dd9e",iconBg:"#D4A017",text:"#5c4408"},{mode:"vs_ai_hard",label:"Difficile",desc:"Réservé aux experts",credits:"1 500",icon:"🔴",bg:"#fdecec",border:"#f3bcbc",iconBg:"#bb2020",text:"#5c1010"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:400px;border-radius:18px;overflow:hidden">
    <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div style="display:flex;flex-direction:column;gap:10px">
        ${e.map(r=>`
          <div class="diff-card" data-mode="${r.mode}" style="cursor:pointer;display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${r.bg};border:1px solid ${r.border};transition:transform .12s ease, box-shadow .12s ease">
            <div style="width:46px;height:46px;border-radius:12px;background:${r.iconBg};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 4px 10px -4px ${r.iconBg}">${r.icon}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:800;font-size:15px;color:${r.text}">${r.label}</div>
              <div style="font-size:12px;color:${r.text};opacity:0.65;margin-top:1px">${r.desc}</div>
            </div>
            <div style="font-weight:900;font-size:12.5px;color:${r.text};background:rgba(255,255,255,0.6);padding:6px 11px;border-radius:999px;flex-shrink:0;white-space:nowrap">+${r.credits} cr.</div>
          </div>
        `).join("")}
      </div>
    </div>
  </div>`,document.body.appendChild(i),i.querySelectorAll(".diff-card").forEach(r=>{r.addEventListener("mouseenter",()=>{r.style.transform="translateY(-1px)",r.style.boxShadow="0 6px 16px -6px rgba(0,0,0,0.18)"}),r.addEventListener("mouseleave",()=>{r.style.transform="",r.style.boxShadow=""})});const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",r=>{r.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(r=>{r.addEventListener("click",()=>{n(),t("match",{matchMode:r.dataset.mode})})})}const Do=[{key:"home2",route:"home2",label:"HOME",icon:"nav-home.png"},{key:"game",route:"game",label:"GAME",emoji:"🎮"},{key:"cards",route:"collection",label:"CARDS",icon:"nav-collection.png"},{key:"decks",route:"decks",label:"DECKS",icon:"nav-decks.png"},{key:"boosters",route:"boosters",label:"BOOSTERS",icon:"nav-boosters.png"},{key:"market",route:"market",label:"MERCATO",icon:"nav-market.png"}];function Fn(t,e,i,n){if(!document.getElementById("home2-chrome-style")){const l=document.createElement("style");l.id="home2-chrome-style",l.textContent=`
      body:has(#home2-chrome-marker) .top-nav,
      body:has(#home2-chrome-marker) .bottom-nav { display: none !important; }
      body:has(#home2-chrome-marker) #page-content {
        padding-top: var(--v2-top-height, 100px) !important;
        padding-bottom: 0 !important;
      }
      /* Neutralise le padding-top/bottom que certaines pages (ex: Cards) réappliquent sur leur propre .page interne imbriqué */
      body:has(#home2-chrome-marker) #page-content .page { padding-top: 0 !important; padding-bottom: 0 !important; }

      /* ── Pendant un match (.match-screen présent), le bandeau v2 doit totalement disparaître ── */
      body:has(#home2-chrome-marker) #page-content:has(.match-screen) {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
      body:has(.match-screen) #home2-chrome-header,
      body:has(.match-screen) .home2-mobile-top,
      body:has(.match-screen) .home2-mobile-bottom { display: none !important; }

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
        display: flex; align-items: center; gap: 7px;
        background: rgba(255,255,255,0.06); border: 1px solid var(--tile-border);
        border-radius: 22px; padding: 8px 18px; font-size: 14px; font-weight: 800; color: rgba(255,255,255,0.85);
        cursor: pointer; white-space: nowrap;
      }
      .home2-chrome-settings-pill:hover { background: rgba(255,255,255,0.12); }

      /* ══════════ Mobile (<1024px) : DEUX bandeaux séparés, haut + bas ══════════ */
      .home2-mobile-top, .home2-mobile-bottom { display: none; }

      @media (max-width: 1023px) {
        .home2-chrome-header { display: none; } /* le bandeau unique PC disparaît totalement */

        body:has(#home2-chrome-marker) #page-content {
          padding-top: var(--v2-top-height, 66px) !important;
          padding-bottom: var(--v2-bottom-height, 76px) !important;
        }
        body:has(#home2-chrome-marker) #page-content:has(.match-screen) {
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
    `,document.head.appendChild(l)}const r=Do.map(l=>`
    <a class="home2-chrome-tab" data-route="${l.route}" data-key="${l.key}">
      ${l.icon?`<img src="${n}${l.icon}">`:`<span class="home2-chrome-tab-emoji">${l.emoji}</span>`}${l.label}
    </a>`).join("");let o=document.getElementById("home2-chrome-header");o||(o=document.createElement("div"),o.id="home2-chrome-header",o.className="home2-chrome-header",o.innerHTML=`
      <div id="home2-chrome-marker" style="display:none"></div>
      <div class="home2-chrome-logo"><img src="${n}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-tabs">${r}</div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-chrome-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-chrome-settings-btn">⚙️ Paramètres</button>
      </div>
    `,document.body.appendChild(o),o.querySelector("#home2-chrome-settings-btn").addEventListener("click",()=>t("settings")),o.querySelector("#home2-chrome-credits").addEventListener("click",()=>t("boosters")));let a=document.getElementById("home2-mobile-top");a||(a=document.createElement("div"),a.id="home2-mobile-top",a.className="home2-mobile-top",a.innerHTML=`
      <div class="home2-chrome-logo"><img src="${n}logo-withname.png" alt="Manager Wars"></div>
      <div class="home2-chrome-right">
        <div class="home2-chrome-credits" id="home2-mobtop-credits">💰 ${(e.credits||0).toLocaleString("fr")}</div>
        <button class="home2-chrome-settings-pill" id="home2-mobtop-settings-btn"><span>⚙️</span><span class="pill-label">Paramètres</span></button>
      </div>
    `,document.body.appendChild(a),a.querySelector("#home2-mobtop-settings-btn").addEventListener("click",()=>t("settings")),a.querySelector("#home2-mobtop-credits").addEventListener("click",()=>t("boosters")));let s=document.getElementById("home2-mobile-bottom");s||(s=document.createElement("div"),s.id="home2-mobile-bottom",s.className="home2-mobile-bottom",s.innerHTML=r,document.body.appendChild(s)),document.querySelectorAll(".home2-chrome-tab").forEach(l=>{l._v2Bound||(l._v2Bound=!0,l.addEventListener("click",()=>{document.querySelectorAll(".home2-chrome-tab").forEach(c=>c.classList.remove("active")),document.querySelectorAll(`.home2-chrome-tab[data-key="${l.dataset.key}"]`).forEach(c=>c.classList.add("active")),t(l.dataset.route)}))}),document.querySelectorAll(".home2-chrome-tab").forEach(l=>l.classList.toggle("active",l.dataset.key===i));const d=`💰 ${(e.credits||0).toLocaleString("fr")}`;document.getElementById("home2-chrome-credits")&&(document.getElementById("home2-chrome-credits").textContent=d),document.getElementById("home2-mobtop-credits")&&(document.getElementById("home2-mobtop-credits").textContent=d),o.style.display="",a.style.display="",s.style.display="",requestAnimationFrame(()=>{const l=window.innerWidth<1024;document.documentElement.style.setProperty("--v2-top-height",(l?a.offsetHeight:o.offsetHeight)+"px"),document.documentElement.style.setProperty("--v2-bottom-height",s.offsetHeight+"px")})}function Fo(){var t,e,i,n;(t=document.getElementById("home2-chrome-header"))==null||t.remove(),(e=document.getElementById("home2-mobile-top"))==null||e.remove(),(i=document.getElementById("home2-mobile-bottom"))==null||i.remove(),(n=document.getElementById("home2-chrome-style"))==null||n.remove()}function Qi(){const t=document.getElementById("home2-chrome-header");t&&(t.style.display="none");const e=document.getElementById("home2-mobile-top");e&&(e.style.display="none");const i=document.getElementById("home2-mobile-bottom");i&&(i.style.display="none")}function Po(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),i=Math.floor(e/6e4);if(i<1)return"à l'instant";if(i<60)return`il y a ${i}min`;const n=Math.floor(i/60);if(n<24)return`il y a ${n}h`;const r=Math.floor(n/24);return r<7?`il y a ${r}j`:new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"short"})}function No(t,e){if(!isFinite(e.max))return"";const i=e.max-e.min+1,n=Math.floor((t-e.min)/(i/3));return["III","II","I"][Math.min(2,Math.max(0,n))]}async function Go(t){const{data:e}=await v.from("users").select("id,pseudo,club_name,mmr").order("mmr",{ascending:!1}).limit(5),i=e||[],n=i.some(o=>o.id===t);let r=null;if(!n){const{data:o}=await v.from("users").select("mmr").eq("id",t).single();if(o){const{count:a}=await v.from("users").select("id",{count:"exact",head:!0}).gt("mmr",o.mmr||0);r=(a||0)+1}}return{list:i,iAmInTop:n,myPosition:r}}async function Ro(t=4){const{data:e}=await v.from("patch_notes").select("id,title,description,image_url,published_at").eq("is_published",!0).order("published_at",{ascending:!1}).limit(t);return e||[]}async function Oo(){const{data:t}=await v.from("booster_configs").select("id,name,icon,price_type,price_credits,card_count").eq("is_active",!0).order("created_at",{ascending:!1}).limit(5);return t||[]}async function Ho(){const{data:t}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(n=>{const r=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${n.image_url?`<img src="${n.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${r}</div>
      <div style="font-size:15px;font-weight:900;margin-bottom:6px">${n.title}</div>
      <div style="font-size:13px;color:#444;line-height:1.6;white-space:pre-line">${n.description}</div>
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close-v2").addEventListener("click",()=>e.remove()),e.addEventListener("click",n=>{n.target===e&&e.remove()})}async function Uo(t,{state:e,navigate:i,toast:n}){var m,A,E,S,q,W,ee;const r=e.profile;if(!r)return;const o="/icons/";Fn(i,r,"home2",o);const a=r.mmr??1e3,s=vi(a),d=No(a,s),l=An(a),c=isFinite(s.max)?s.max+1:null,[{list:f,iAmInTop:b,myPosition:x},g,p]=await Promise.all([Go(r.id),Ro(5),Oo()]),u=(G,T)=>`
    <div class="rk-row ${G.id===r.id?"rk-row-me":""}">
      <div class="rk-pos ${T<3?"rk-pos-top"+(T+1):""}">${T<3?["🥇","🥈","🥉"][T]:T+1}</div>
      <div class="rk-name ${G.id===r.id?"rk-name-me":""}">${G.pseudo}</div>
      <div class="rk-rp">${(G.mmr??0).toLocaleString("fr")} RP</div>
    </div>`,y=G=>`
    <div class="news-item">
      ${G.image_url?`<img src="${G.image_url}" class="news-thumb" onerror="this.style.display='none'">`:'<div class="news-thumb news-thumb-fallback">📰</div>'}
      <div class="news-body">
        <div class="news-title">${G.title}</div>
        <div class="news-desc">${G.description||""}</div>
        <div class="news-time">${Po(G.published_at)}</div>
      </div>
    </div>`;let w=0;const h=G=>`
    <div class="promo-icon-wrap">
      <img src="${o}${G.icon||"nav-boosters.png"}" class="promo-icon" onerror="this.style.display='none'">
    </div>
    <div class="promo-info">
      <div class="promo-kicker">NOUVEAU BOOSTER</div>
      <div class="promo-title">${G.name}</div>
      <div class="promo-desc">${G.card_count||5} cartes · ${G.price_type==="pub"?"Pub gratuite":(G.price_credits||0).toLocaleString("fr")+" cr."}</div>
    </div>`;t.innerHTML=`
  <style>
    .home-dark {
      min-height: 100%;
      background: var(--page-bg);
      background-image: var(--page-gradient);
      display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
      padding: 0 16px 80px; box-sizing: border-box; overflow-y: auto;
    }
    .home-inner { width: 100%; max-width: 640px; display: flex; flex-direction: column; gap: 18px; }

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
                <div class="rank-tier-value">${s.label.toUpperCase()}${d?" "+d:""}</div>
              </div>
              <div class="rank-right">
                <div class="rank-rp-label">${a.toLocaleString("fr")}${c?" / "+c.toLocaleString("fr"):""} RP</div>
                <button class="rank-inline-link" id="rank-inline-link-btn">📊 Classement</button>
              </div>
            </div>
            <div class="rank-progress-track"><div class="rank-progress-fill" style="width:${l}%"></div></div>
          </div>

          <button class="profile-view-btn" id="nav-profile-btn">Voir mon profil 📤</button>

          <div class="ranking-widget">
            <div class="ranking-widget-header"><h4>CLASSEMENT</h4><a id="nav-rankings-link">Voir plus</a></div>
            ${f.map((G,T)=>u(G,T)).join("")}
            ${!b&&x?`
              <div class="rk-row rk-row-me" style="border-top:1px solid var(--tile-border);margin-top:2px;padding-top:8px">
                <div class="rk-pos">${x}</div>
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
              <img src="${o}badge-ranked.png" class="tile-icon">
              <div class="tile-label">RANKED</div>
              <div class="tile-desc">Grimpez dans le classement</div>
            </div>
            <div class="play-tile play-tile-big tile-mini-league" data-action="mini-league">
              <img src="${o}badge-league.png" class="tile-icon">
              <div class="tile-label">MINI LEAGUE</div>
              <div class="tile-desc">Participez à des ligues</div>
            </div>
            <div class="play-tile" data-action="match-ai">
              <img src="${o}badge-ai.png" class="tile-icon">
              <div class="tile-label">SOLO</div>
              <div class="tile-desc">Progressez à travers les niveaux</div>
            </div>
            <div class="play-tile" data-action="match-random">
              <img src="${o}badge-random.png" class="tile-icon">
              <div class="tile-label">RANDOM</div>
              <div class="tile-desc">Affrontez un adversaire aléatoire</div>
            </div>
            <div class="play-tile" data-action="match-friend">
              <img src="${o}badge-vs.png" class="tile-icon">
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
            ${p.length>1?`<div class="promo-dots">${p.map((G,T)=>`<div class="promo-dot ${T===0?"active":""}" data-dot="${T}"></div>`).join("")}</div>`:""}
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

      <!-- Footer -->
      <div class="home-footer">
        <div style="display:flex;align-items:center;gap:8px;background:rgba(212,160,23,0.15);border:1px solid rgba(212,160,23,0.4);border-radius:20px;padding:5px 14px;font-size:11px;font-weight:700;color:#D4A017">
          🧪 HOME V2 (BÊTA)
          <button id="back-to-v1-btn" style="background:none;border:none;color:#D4A017;text-decoration:underline;cursor:pointer;font-size:11px;font-weight:700;padding:0">← Revenir à v1</button>
          <span id="mode-indicator" style="border-left:1px solid rgba(212,160,23,0.4);padding-left:8px;margin-left:2px"></span>
        </div>
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var ae,de;const G=((ae=window.visualViewport)==null?void 0:ae.height)||window.innerHeight,T=window.innerWidth<1024;let _=0;if(T){const j=document.getElementById("home2-mobile-top"),U=document.getElementById("home2-mobile-bottom");_=((j==null?void 0:j.offsetHeight)||0)+((U==null?void 0:U.offsetHeight)||0)}else _=((de=document.getElementById("home2-chrome-header"))==null?void 0:de.offsetHeight)||0;const H=G-_,Y=t.querySelector(".home-dark");Y&&(Y.style.minHeight=H+"px")});const L=()=>{const G=document.getElementById("mode-indicator");G&&(G.textContent=window.innerWidth>=1024?"🖥️ Mode PC":"📱 Mode Mobile")};if(L(),window.addEventListener("resize",L),(m=document.getElementById("nav-profile-btn"))==null||m.addEventListener("click",()=>i("settings")),(A=document.getElementById("nav-rankings-link"))==null||A.addEventListener("click",()=>i("rankings")),(E=document.getElementById("nav-rankings-cta"))==null||E.addEventListener("click",()=>i("rankings")),(S=document.getElementById("rank-inline-link-btn"))==null||S.addEventListener("click",()=>i("rankings")),(q=document.getElementById("nav-journal-link"))==null||q.addEventListener("click",()=>Ho()),t.querySelectorAll("[data-action]").forEach(G=>{G.addEventListener("click",()=>{G.style.transform="scale(.96)",setTimeout(()=>G.style.transform="",180);const T=G.dataset.action;if(T==="match-ai"){Gn(i,e);return}if(T==="match-random"){Qi(),i("match",{matchMode:"random"});return}if(T==="match-friend"){i("friends");return}if(T==="mini-league"){i("mini-league");return}if(T==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),p.length>1){const G=document.getElementById("promo-slide-content"),T=()=>Array.from(document.querySelectorAll(".promo-dot")),_=H=>{w=H,G&&(G.innerHTML=h(p[w])),T().forEach((Y,ae)=>Y.classList.toggle("active",ae===w))};setInterval(()=>_((w+1)%p.length),5e3),document.querySelectorAll(".promo-dot").forEach(H=>{H.addEventListener("click",()=>_(Number(H.dataset.dot)))})}(W=document.getElementById("promo-cta-btn"))==null||W.addEventListener("click",()=>i("boosters")),(ee=document.getElementById("back-to-v1-btn"))==null||ee.addEventListener("click",()=>{Fo(),i("home")}),Nn(e,n),Wo(e,n,i),Pn(e,n,i),Ko(e,n)}async function Ko(t,e){const i=t.profile.id,{data:n}=await v.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(n!=null&&n.length))return;const r=n.reduce((a,s)=>a+(s.prize_amount||0),0),o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2200",o.innerHTML=`<div class="modal" style="max-width:400px">
    <div class="modal-header"><h2 style="color:#1A6B3C">🏆 Gains à récupérer</h2></div>
    <div class="modal-body" style="padding:18px 20px">
      <p style="font-size:14px;color:#555;margin:0 0 14px">Tu as terminé sur le podium de ${n.length>1?"plusieurs mini leagues":"une mini league"} !</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
        ${n.map(a=>{var s;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#f7f7f7;border-radius:10px">
          <span style="font-size:13px;font-weight:700;color:#1a1a1a">${((s=a.mini_leagues)==null?void 0:s.name)||"Mini League"}</span>
          <span style="font-size:13px;font-weight:900;color:#D4A017">+${(a.prize_amount||0).toLocaleString("fr")} cr.</span>
        </div>`}).join("")}
      </div>
      <button id="claim-all-btn" class="btn btn-primary" style="width:100%;margin-bottom:8px">💰 Tout récupérer (+${r.toLocaleString("fr")} cr.)</button>
      <button id="claim-later-btn" class="btn btn-ghost" style="width:100%">Plus tard</button>
    </div>
  </div>`,document.body.appendChild(o),o.querySelector("#claim-later-btn").addEventListener("click",()=>o.remove()),o.querySelector("#claim-all-btn").addEventListener("click",async a=>{const s=a.currentTarget;s.disabled=!0,s.textContent="...";let d=0;for(const l of n){const{data:c}=await v.rpc("claim_mini_league_prize",{p_league_id:l.league_id,p_user_id:i});c!=null&&c.success&&!c.already_claimed&&(d+=c.prize||0)}if(d>0){t.profile.credits=(t.profile.credits||0)+d;const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${t.profile.credits.toLocaleString("fr")}`),e(`💰 +${d.toLocaleString("fr")} cr. récupérés !`,"success")}o.remove()})}async function Pn(t,e,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const r=t.profile.id,{data:o}=await v.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${r},away_id.eq.${r}`).order("created_at",{ascending:!1});if(!(o!=null&&o.length)){n.innerHTML="";return}const a=o.map(d=>d.home_id===r?d.away_id:d.home_id).filter(Boolean);let s={};if(a.length){const{data:d}=await v.from("users").select("id, pseudo, club_name").in("id",a);(d||[]).forEach(l=>{s[l.id]=l.club_name||l.pseudo})}n.innerHTML=o.map(d=>{const l=d.home_id===r?d.away_id:d.home_id,c=s[l]||"Adversaire",f=d.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${f?"🏆 Mini League":d.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${c}</div>
      </div>
      <button data-resume="${d.id}" data-mini="${f?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${d.id}" data-opp="${l}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(d=>{d.addEventListener("click",async()=>{const l=document.getElementById("page-content")||document.getElementById("app");if(d.dataset.mini==="1"){const{data:c}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",d.dataset.resume).single();c?i("match-mini-league",{mlMatchId:c.id,leagueId:c.league_id}):i("mini-league")}else{const{resumePvpMatch:c}=await Ui(async()=>{const{resumePvpMatch:f}=await Promise.resolve().then(()=>ao);return{resumePvpMatch:f}},void 0);c(l,{state:t,navigate:i,toast:e,openModal:null,closeModal:null,refreshProfile:null},d.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(d=>{d.addEventListener("click",()=>{Yo(async()=>{await Vo(d.dataset.abandon,d.dataset.opp,r),e("Match abandonné (défaite 3-0)","info"),Pn(t,e,i)})})})}async function Vo(t,e,i){Tt();const{data:n}=await v.from("matches").select("home_id, away_id, game_state, mode").eq("id",t).single();if(!n)return;const r=n.home_id===i,o=r?0:3,a=r?3:0,s=n.game_state||{};s.p1Score=o,s.p2Score=a,s.phase="finished",s.forfeit=!0,await v.from("matches").update({status:"finished",forfeit:!0,winner_id:e,home_score:o,away_score:a,game_state:s}).eq("id",t),n.mode==="mini_league"&&await v.from("mini_league_matches").update({status:"finished",home_score:o,away_score:a}).eq("match_id",t)}function Yo(t){const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(e),e.querySelector("#ab-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#ab-ok").addEventListener("click",()=>{e.remove(),t()}),e.addEventListener("click",i=>{i.target===e&&e.remove()})}async function Wo(t,e,i){var s,d,l,c;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:r}=await v.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",t.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!r){n.innerHTML="";return}const o=((s=r.inviter)==null?void 0:s.club_name)||((d=r.inviter)==null?void 0:d.pseudo)||"?",a=r.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${o} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(l=document.getElementById("match-inv-accept"))==null||l.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:a,friendName:o,isAccepting:!0})}),(c=document.getElementById("match-inv-decline"))==null||c.addEventListener("click",async()=>{await v.from("friend_match_invites").update({status:"declined"}).eq("id",r.id),n.innerHTML="",e("Invitation refusée","info")})}async function Nn(t,e){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:r}=await v.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",t.user.id).eq("status","pending");if(r||!(n!=null&&n.length)){i.innerHTML="";return}const o=n.length,a=n.slice(0,2).map(d=>{var l;return((l=d.requester)==null?void 0:l.pseudo)||"?"}).join(", "),s=o>2?` +${o-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${o} demande${o>1?"s":""} d'ami${o>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>Ki(t,e,()=>Nn(t,e)))}async function Gn(t,e){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:420px;border-radius:18px;overflow:hidden">
    <div class="modal-header"><h2>Solo — Choisir un niveau</h2><button class="btn-icon" id="solo-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div id="solo-levels-list" style="display:flex;flex-direction:column;gap:10px">
        <div style="text-align:center;color:#999;padding:20px">⏳ Chargement…</div>
      </div>
    </div>
  </div>`,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("solo-cancel").addEventListener("click",n),i.addEventListener("click",l=>{l.target===i&&n()});const[{data:r},{data:o}]=await Promise.all([v.from("solo_levels").select("*").eq("is_active",!0).order("level_number"),v.from("user_solo_progress").select("unlocked_level").eq("user_id",e.profile.id).maybeSingle()]),a=(o==null?void 0:o.unlocked_level)||1,s=r||[],d=document.getElementById("solo-levels-list");if(d){if(!s.length){d.innerHTML='<div style="text-align:center;color:#999;padding:20px">Aucun niveau configuré.</div>';return}d.innerHTML=s.map(l=>{const c=l.level_number>a,f=l.level_number===a,b=c?"#f0f0f0":f?"#eefaf2":"#f7f7f7",x=c?"#ddd":f?"#bfe8cf":"#e0e0e0",g=c?"#999":"#12401f";return`
      <div class="solo-level-card" data-level="${l.level_number}" data-locked="${c}"
        style="cursor:${c?"not-allowed":"pointer"};display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${b};border:1px solid ${x};opacity:${c?.6:1};transition:transform .12s ease">
        <div style="width:46px;height:46px;border-radius:12px;background:${c?"#bbb":"#1A6B3C"};display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#fff;flex-shrink:0">
          ${c?"🔒":l.level_number}
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:800;font-size:15px;color:${g}">Niveau ${l.level_number}</div>
          <div style="font-size:11px;color:${g};opacity:0.75;margin-top:1px">
            Note globale ~${l.target_note_avg} · 🟡${l.nb_liens_jaune} 🟢${l.nb_liens_vert} · 🏟️${l.nb_joueurs_stade}
          </div>
        </div>
        ${c?"":`<div style="font-weight:900;font-size:12.5px;color:${g};background:rgba(255,255,255,0.7);padding:6px 11px;border-radius:999px;flex-shrink:0;white-space:nowrap">+${l.reward_credits} cr.</div>`}
      </div>`}).join(""),d.querySelectorAll(".solo-level-card").forEach(l=>{l.dataset.locked!=="true"&&(l.addEventListener("mouseenter",()=>{l.style.transform="translateY(-1px)"}),l.addEventListener("mouseleave",()=>{l.style.transform=""}),l.addEventListener("click",()=>{n(),Qi(),t("match",{matchMode:"solo",soloLevel:Number(l.dataset.level)})}))})}}async function Xo(t,{state:e,navigate:i,toast:n}){const r=e.profile;if(!r)return;const o="/icons/";Fn(i,r,"game",o),t.innerHTML=`
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
          <img src="${o}badge-ai.png">
          <div class="g-label">SOLO</div>
          <div class="g-desc">Progressez à travers les niveaux</div>
        </div>
        <div class="game-tile" data-action="match-random">
          <img src="${o}badge-random.png">
          <div class="g-label">RANDOM</div>
          <div class="g-desc">Affrontez un adversaire aléatoire</div>
        </div>
        <div class="game-tile" data-action="match-friend">
          <img src="${o}badge-vs.png">
          <div class="g-label">AMI</div>
          <div class="g-desc">Affrontez un ami</div>
        </div>
        <div class="game-tile game-tile-big tile-mini-league" data-action="mini-league">
          <img src="${o}badge-league.png">
          <div class="g-label">MINI LEAGUE</div>
          <div class="g-desc">Participez à des ligues</div>
        </div>
        <div class="game-tile game-tile-big tile-ranked" data-action="ranked">
          <img src="${o}badge-ranked.png">
          <div class="g-label">RANKED</div>
          <div class="g-desc">Grimpez dans le classement</div>
        </div>
      </div>
    </div>
  </div>`,t.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",()=>{a.style.transform="scale(.96)",setTimeout(()=>a.style.transform="",180);const s=a.dataset.action;if(s==="match-ai"){Gn(i,e);return}if(s==="match-random"){Qi(),i("match",{matchMode:"random"});return}if(s==="match-friend"){i("friends");return}if(s==="mini-league"){i("mini-league");return}if(s==="ranked"){i("ranked");return}n("Bientôt disponible","info")})})}async function Rn(t,e){var f;const{state:i,navigate:n}=e,r=uo(),o=Wi(),a=(f=i==null?void 0:i.profile)==null?void 0:f.is_admin,s="2026.07.26-1545";t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">

    <div style="padding:16px;display:flex;flex-direction:column;gap:14px;max-width:520px;margin:0 auto">

      <div style="background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:14px;padding:18px">
        <div style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page);margin-bottom:4px">🎨 Apparence</div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Choisis le thème de l'application.</div>
        <div style="display:flex;gap:10px">
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
          <div id="volume-label" style="font-size:14px;font-weight:900;color:#D4A017">${o}%</div>
        </div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Musiques et effets sonores de l'app.</div>
        <input id="volume-slider" type="range" min="0" max="100" step="5" value="${o}"
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
  </div>`,t.querySelectorAll("[data-theme-choice]").forEach(b=>{b.addEventListener("click",()=>{za(b.dataset.themeChoice),Rn(t,e)})});const d=t.querySelector("#volume-slider"),l=t.querySelector("#volume-label");let c=null;d.addEventListener("input",()=>{zo(Number(d.value)),l.textContent=`${d.value}%`,c&&(c.volume=Math.max(0,Math.min(1,Number(d.value)/100)))}),t.querySelector("#volume-test").addEventListener("click",()=>{c=Ji("/sounds/match-opening.mp3",1)}),t.querySelector("#settings-logout").addEventListener("click",async()=>{await v.auth.signOut(),window.location.reload()})}const ze={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Pe(t,e){if(!t)return 0;let i=0;switch(e){case"GK":i=Number(t.note_g)||0;break;case"DEF":i=Number(t.note_d)||0;break;case"MIL":i=Number(t.note_m)||0;break;case"ATT":i=Number(t.note_a)||0;break;default:i=0}return i+(t.boost||0)}const bn=["ATT","MIL","DEF","GK"];function On(t,e,i){if(!t||!e)return!1;if(i&&t.position&&e.position)return Oi(i).some(([c,f])=>c===t.position&&f===e.position||c===e.position&&f===t.position);const n=t._col!=null&&e._col!=null&&t._col===e._col,r=t._col!=null&&e._col!=null&&Math.abs(t._col-e._col)===1,o=bn.indexOf(t._line||t.job),a=bn.indexOf(e._line||e.job),s=Math.abs(o-a)===1;return(t._line||t.job)===(e._line||e.job)&&r||n&&s}function Hn(t,e){let i=0;const n=t.length;for(let r=0;r<n;r++)for(let o=r+1;o<n;o++){const a=t[r],s=t[o];if(!a||!s||!On(a,s,e))continue;const d=Ut(a,s);d==="#00ff88"?i+=10:d==="#FFD700"&&(i+=5)}return i}function ni(t,e={},i){let n=0,r=0;t.forEach(d=>{const l=d._line||d.job,c=Number(l==="MIL"?d.note_m:d.note_a)||0,f=d.stadiumBonus&&(l==="MIL"||l==="ATT")?10:0;n+=e.doubleAttack?c*2:c,r+=(d.boost||0)+f});const o=n+r,a=Hn(t,i);let s=o+a;return e.stolenNote&&(s-=e.stolenNote),{base:o,links:a,total:Math.max(0,s)}}function oi(t,e={},i){const n=t.reduce((a,s)=>{const d=s._line||s.job;let l=0;d==="GK"?l=Number(s.note_g)||0:d==="MIL"?l=Number(s.note_m)||0:l=Number(s.note_d)||0;const c=s.stadiumBonus&&(d==="GK"||d==="DEF"||d==="MIL")?10:0;return a+l+(s.boost||0)+c},0),r=Hn(t,i);let o=n+r;return e.stolenNote&&(o-=e.stolenNote),{base:n,links:r,total:Math.max(0,o)}}function Zi(t,e,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:t>e,shielded:!1}}function Un(t,e,i="easy"){const n=t.filter(a=>!a.used);if(!n.length)return[];const r=[...n].sort((a,s)=>{const d=e==="attack"?Pe(a,"ATT"):a._line==="GK"?Pe(a,"GK"):Pe(a,"DEF");return(e==="attack"?Pe(s,"ATT"):s._line==="GK"?Pe(s,"GK"):Pe(s,"DEF"))-d});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return r.slice(0,Math.min(o,r.length,3))}function Jo(t,e){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[t]||i.vs_ai_easy)[e]||0}const Qo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ti={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},si=["GK","DEF","MIL","ATT"],Zo=["Tous","GK","DEF","MIL","ATT"],er={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function yn(t){const e=t.player;return e?(e.rarity,Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)):null}function tr(t){return t.length?t.reduce((e,i)=>yn(i)>yn(e)?i:e,t[0]):t[0]}const ir={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function di(t,e){return t&&Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function Si(t,e=""){const i=t.player;if(!i)return"";const n=t.evolution_bonus||0,r={...i,_evolution_bonus:n},o=e?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${e}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${t.id}">
    ${o}
    ${Se(r,{width:140})}
  </div>`}function hn(t){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${Se(t,{width:140})}
  </div>`}async function nr(t,e){const{state:i,navigate:n,toast:r,openModal:o,closeModal:a}=e;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await v.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:d}=await v.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),l=(s||[]).filter($=>$.card_type==="player"&&$.player),c=(s||[]).filter($=>$.card_type==="game_changer"),f=(s||[]).filter($=>$.card_type==="formation"),b=(s||[]).filter($=>$.card_type==="stadium"),{data:x}=await v.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(x||[]).forEach($=>{g[$.name]=$});const{data:p}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),u={};(p||[]).forEach($=>{u[$.id]=$}),b.forEach($=>{$.stadium_def&&(u[$.stadium_id]=$.stadium_def)});const y=Object.keys(Hi),w=Object.keys(ze),h={};l.forEach($=>{const C=$.player.id;h[C]=(h[C]||0)+1}),new Set(Object.keys(h).map($=>String($)));const L=new Set(f.map($=>$.formation)),m=new Set(c.map($=>$.gc_type));let A="player",E="Tous",S="",q=!1;function W(){return[...l].sort(($,C)=>{const O=si.indexOf($.player.job),P=si.indexOf(C.player.job);return O!==P?O-P:($.player.surname_real||"").localeCompare(C.player.surname_real||"")})}function ee(){return[...d||[]].sort(($,C)=>{const O=si.indexOf($.job),P=si.indexOf(C.job);return O!==P?O-P:($.surname_real||"").localeCompare(C.surname_real||"")})}function G(){return W().filter($=>{const C=$.player,O=E==="Tous"||C.job===E,P=!S||`${C.firstname} ${C.surname_real}`.toLowerCase().includes(S);return O&&P})}function T(){return ee().filter($=>{const C=E==="Tous"||$.job===E,O=!S||`${$.firstname} ${$.surname_real}`.toLowerCase().includes(S);return C&&O})}t.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--tile-border);background:var(--tile-bg)">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${A==="player"?"var(--green)":"transparent"};
        color:${A==="player"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${l.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${A==="formation"?"var(--green)":"transparent"};
        color:${A==="formation"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${f.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${A==="gc"?"var(--green)":"transparent"};
        color:${A==="gc"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${A==="stadium"?"#4FC3F7":"transparent"};
        color:${A==="stadium"?"#4FC3F7":"var(--tile-fg-dim)"}">
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
  </div>`,function(C){const O=document.getElementById(C);if(!O)return;O.addEventListener("wheel",ne=>{Math.abs(ne.deltaY)<=Math.abs(ne.deltaX)||(ne.preventDefault(),O.scrollLeft+=ne.deltaY)},{passive:!1});let P=!1,X=0,D=0,K=!1,pe=!1;O.addEventListener("mousedown",ne=>{P=!0,K=!1,X=ne.pageX,D=O.scrollLeft}),window.addEventListener("mouseup",()=>{P=!1,K&&(O.style.cursor="",pe=!0),K=!1}),window.addEventListener("mousemove",ne=>{if(!P)return;const me=ne.pageX-X;!K&&Math.abs(me)<6||(K=!0,O.style.cursor="grabbing",ne.preventDefault(),O.scrollLeft=D-me)}),O.addEventListener("click",ne=>{pe&&(ne.stopPropagation(),ne.preventDefault(),pe=!1)},!0)}("col-grid");function _(){const $=document.getElementById("col-filters");$&&(A==="player"?($.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${S}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Zo.map(C=>`
            <button class="filter-btn" data-job="${C}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${C===E?"var(--green)":"var(--tile-border)"};
                background:${C===E?"var(--green)":"#fff"};
                color:${C===E?"#fff":"#555"}">
              ${C}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${q?"var(--yellow)":"var(--tile-border)"};
              background:${q?"var(--yellow)":"#fff"};
              color:${q?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${q?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",C=>{S=C.target.value.toLowerCase(),H()}),t.querySelectorAll(".filter-btn").forEach(C=>{C.addEventListener("click",()=>{E=C.dataset.job,_(),H()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{q=!q,_(),H()})):($.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${q?"var(--yellow)":"var(--tile-border)"};
              background:${q?"var(--yellow)":"#fff"};
              color:${q?"#111":"#555"}; font-size:18px; padding:5px 10px">
            ${q?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{q=!q,_(),H()})))}function H(){const $=document.getElementById("col-grid");$&&(A==="player"?U($):A==="formation"?le($):A==="stadium"?ue($):fe($))}function Y($,C,O,P,X,D=0){const K=document.getElementById("col-grid"),pe=document.getElementById("col-big");if(!K||!pe)return;var ne=0;function me(){var pt;const we=window.innerWidth>=768,he=document.getElementById("col-big"),Ie=document.getElementById("col-gap"),Ae=((pt=document.getElementById("col-grid"))==null?void 0:pt.parentElement)||null,Be=he?he.closest(".page"):null;if(he&&Ae&&Be){let Ee=0;Array.from(Be.children).forEach(function(B){B!==he&&B!==Ae&&B!==Ie&&(Ee+=B.offsetHeight)});const je=Math.max(0,Be.clientHeight-Ee),qe=Math.round(je*(D/100)),Ne=Math.max(0,je-qe),k=we?50/71:45/63,I=Math.round(Ne*k),M=Math.max(0,Ne-I);Ie&&(Ie.style.height=qe+"px"),he.style.flex="none",he.style.height=I+"px",he.style.minHeight="0",Ae.style.flex="none",Ae.style.height=M+"px",Ae.style.minHeight="0",Ae.style.display="flex",Ae.style.overflow="hidden"}const $e=document.getElementById("col-grid");$e&&($e.style.height="100%",$e.style.flexShrink="0",$e.style.overflowX="auto",$e.style.overflowY="hidden",$e.style.alignItems="center",$e.style.width="100%"),pe.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+C($[ne])+"</div>";var kt=pe.querySelector("[data-card-id],[data-form-id],[data-gc-id]");kt&&kt.addEventListener("click",function(){P($[ne])}),requestAnimationFrame(function(){var Ee=document.getElementById("big-card-inner");if(!(!Ee||!pe)){var je=pe.clientHeight,qe=pe.clientWidth-16,Ne=Ee.offsetHeight,k=Ee.offsetWidth;if(Ne>0&&k>0&&je>40){var I=Math.min(je/Ne,qe/k);Ee.style.transform="scale("+I.toFixed(3)+")",Ee.style.transformOrigin="center center"}}}),K.innerHTML=$.map(function(Ee,je){var qe=je===ne,Ne="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(qe?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+je+'" style="'+Ne+'">'+O(Ee,qe)+"</div>"}).join(""),K.querySelectorAll(".col-mini-item").forEach(function(Ee){Ee.addEventListener("click",function(){ne=Number(Ee.dataset.idx),me(),Ee.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var Ee=$e?$e.clientHeight:0,je=K.querySelector(".col-mini-item > div");if(!(!Ee||!je)){var qe=je.style.zoom;je.style.zoom="1";var Ne=je.offsetHeight;if(je.style.zoom=qe,!(Ne<=0)){var k=Ee/Ne;K.querySelectorAll(".col-mini-item > div").forEach(function(I){I.style.zoom=k.toFixed(4)})}}})}me()}function ae($,C){var O=window.innerWidth>=768?.76:.54,P;if(!$||$._fake){var X=$?$.player:null;if(!X)return"";P=hn(X)}else P=Si($,"");var D=$&&!$._fake?h[$.player&&$.player.id]||1:0,K=D>0?'<div style="position:absolute;top:6px;right:6px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:11px;font-weight:900;padding:2px 7px;z-index:3;box-shadow:0 1px 4px rgba(0,0,0,0.4)">×'+D+"</div>":"";return'<div style="display:inline-block;position:relative;zoom:'+O+';pointer-events:none;line-height:0">'+K+P+"</div>"}function de($,C,O){var P=O>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+O+"</div>":"",X=!!C,D=Mi($,Ct[$],{width:160});return X||(D='<div style="filter:grayscale(1);opacity:0.5">'+D+"</div>"),"<div "+(C?'data-form-id="'+C.id+'"':"")+' style="position:relative;cursor:pointer">'+P+D+"</div>"}function j($,C){var O=window.innerWidth>=768?.76:.54,P=Mi($,Ct[$],{width:140});return C||(P='<div style="filter:grayscale(1);opacity:0.45">'+P+"</div>"),'<div style="display:inline-block;zoom:'+O+';line-height:0;pointer-events:none">'+P+"</div>"}function U($){if(q){const C=T();if(!C.length){$.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const O=C.map(P=>l.find(X=>X.player.id===P.id)||{_fake:!0,player:P,id:"fake-"+P.id});Y(O,P=>P._fake?hn(P.player):Si(P,""),P=>P._fake?ae({player:P.player,id:"x",_fake:!0}):ae(P),P=>{P._fake||vn(P,l,h,e)})}else{const C=G();if(!C.length){$.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const O={};C.forEach(X=>{const D=X.player.id;O[D]||(O[D]=[]),O[D].push(X)});const P=Object.values(O).map(X=>tr(X));Y(P,X=>{const D=h[X.player.id]||1,K=D>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${D}</div>`:"",ne=l.filter(me=>me.player.id===X.player.id&&me.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Si(X,K+ne)},X=>ae(X),X=>vn(X,l,h,e))}}function le($){const C=q?y:[...L];if(!C.length){$.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const O=C.map(P=>({formation:P,card:f.find(X=>X.formation===P)||null,owned:L.has(P)}));Y(O,({formation:P,card:X,owned:D})=>de(P,D?X:null,D?f.filter(K=>K.formation===P).length:0),({formation:P,owned:X})=>j(P,X),({card:P,owned:X})=>{X&&P&&rr(P,f,e,o)},"#1A6B3C",5)}function fe($){const C=Object.keys(g),O=q?C.length?C:w:[...m];if(!O.length){$.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const P=O.map(X=>({type:X,gc:ze[X]||{icon:"⚡",desc:""},def:g[X]||null,owned:m.has(X),card:c.find(D=>D.gc_type===X)||null}));Y(P,({type:X,gc:D,def:K,owned:pe,card:ne})=>{var $e;const me=(K==null?void 0:K.name)||X,we=pe?c.filter(kt=>kt.gc_type===X).length:0,he=we>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${we}</div>`:"",Ie=(K==null?void 0:K.effect)||D.desc||"",Ae=K!=null&&K.image_url?`/icons/${K.image_url}`:(($e=K==null?void 0:K.club)==null?void 0:$e.logo_url)||(K!=null&&K.country_code?`https://flagsapi.com/${K.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);let Be=tt(me,Ae,D.icon,Ie,{width:160,onClick:pe});return pe||(Be=`<div style="filter:grayscale(1);opacity:0.5">${Be}</div>`),`<div ${pe&&ne?`data-gc-id="${ne.id}" data-gc-type="${X}"`:""} style="position:relative">${he}${Be}</div>`},({type:X,gc:D,def:K,owned:pe})=>{const ne=window.innerWidth>=768?.76:.54,me=(K==null?void 0:K.name)||X,we=(K==null?void 0:K.effect)||D.desc||"",he=K!=null&&K.image_url?`/icons/${K.image_url}`:null;let Ie=tt(me,he,D.icon,we,{width:140});return pe||(Ie=`<div style="filter:grayscale(1);opacity:0.45">${Ie}</div>`),`<div style="display:inline-block;zoom:${ne};line-height:0;pointer-events:none">${Ie}</div>`},({type:X,owned:D,def:K})=>{D&&or(X,K,o)},"#7a28b8",5)}function ue($){const C="#4FC3F7",O="/";if(!b.length){$.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const P={};b.forEach(D=>{const K=D.stadium_id||"?";(P[K]=P[K]||[]).push(D)});const X=Object.entries(P).map(([D,K])=>({sid:D,def:u[D]||null,count:K.length,card:K[0]}));Y(X,({def:D,count:K})=>{var Ie,Ae;const pe=(D==null?void 0:D.name)||"?",ne=((Ie=D==null?void 0:D.club)==null?void 0:Ie.encoded_name)||(D==null?void 0:D.country_code)||"—",me=D!=null&&D.image_url?`${O}icons/${D.image_url}`:((Ae=D==null?void 0:D.club)==null?void 0:Ae.logo_url)||(D!=null&&D.country_code?`https://flagsapi.com/${D.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),we=K>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${K}</div>`:"",he=`${ne}<br>+10 ⭐ joueurs alliés`;return`<div style="position:relative">${we}${Rt(pe,me,he,{width:160})}</div>`},({def:D})=>{var he,Ie;const K=window.innerWidth>=768?.76:.54,pe=(D==null?void 0:D.name)||"?",ne=((he=D==null?void 0:D.club)==null?void 0:he.encoded_name)||(D==null?void 0:D.country_code)||"—",me=D!=null&&D.image_url?`${O}icons/${D.image_url}`:((Ie=D==null?void 0:D.club)==null?void 0:Ie.logo_url)||(D!=null&&D.country_code?`https://flagsapi.com/${D.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),we=`${ne}<br>+10 ⭐`;return`<div style="display:inline-block;zoom:${K};line-height:0;pointer-events:none">${Rt(pe,me,we,{width:140})}</div>`},null,C,5)}t.querySelectorAll(".col-tab-btn").forEach($=>{$.addEventListener("click",()=>{A=$.dataset.tab,E="Tous",S="",q=!1,t.querySelectorAll(".col-tab-btn").forEach(C=>{const O=C.dataset.tab===A;C.style.borderBottomColor=O?"var(--green)":"transparent",C.style.color=O?"var(--green)":"var(--tile-fg-dim)"}),_(),H()})}),_(),H()}function or(t,e,i){const n=ze[t]||{icon:"⚡",desc:"Effet spécial."},r=(e==null?void 0:e.name)||t,o=(e==null?void 0:e.effect)||n.desc,a=e!=null&&e.image_url?`/icons/${e.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      ${tt(r,a,n.icon,o,{width:200})}
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const li=1e3;function rr(t,e,i,n){var g,p,u;const{state:r,toast:o,closeModal:a,navigate:s,refreshProfile:d}=i,l=t.formation,c={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const y=Ct[l]||{},w=Hi[l]||[],h=290,L=360,m=20;function A(S){const q=y[S];return q?{x:q.x*h,y:q.y*L}:null}let E=`<svg width="${h}" height="${L}" viewBox="0 0 ${h} ${L}" xmlns="http://www.w3.org/2000/svg">`;for(const[S,q]of w){const W=A(S),ee=A(q);!W||!ee||(E+=`<line x1="${W.x}" y1="${W.y}" x2="${ee.x}" y2="${ee.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const S of Object.keys(y)){const q=A(S);if(!q)continue;const W=S.replace(/\d+/,""),ee=c[W]||"#555";E+=`<circle cx="${q.x}" cy="${q.y}" r="${m}" fill="${ee}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,E+=`<text x="${q.x}" y="${q.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${W}</text>`}return E+="</svg>",E}const b=e.filter(y=>y.formation===l);b.length;const x=!t.is_for_sale;n(`Formation ${l}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${li}"
          style="flex:1;padding:8px;border:1.5px solid var(--tile-border);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${t.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(t.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(g=document.getElementById("direct-sell-form-btn"))==null||g.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${l} pour ${li.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const y=b.find(h=>!h.is_for_sale)||b[0];if(!y){o("Aucune carte à vendre","error");return}await v.from("market_listings").delete().eq("card_id",y.id),await v.from("transfer_history").delete().eq("card_id",y.id);const{error:w}=await v.from("cards").delete().eq("id",y.id);if(w){o(w.message,"error");return}await v.from("users").update({credits:(r.profile.credits||0)+li}).eq("id",r.profile.id),await d(),o(`+${li.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const y=parseInt(document.getElementById("sell-price-form").value);if(!y||y<1){o("Prix invalide","error");return}await v.from("cards").update({is_for_sale:!0,sale_price:y}).eq("id",t.id),await v.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:y}),o("Carte mise en vente sur le marché !","success"),a(),s("collection")}),(u=document.getElementById("cancel-sell-form-btn"))==null||u.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),o("Annonce retirée","success"),a(),s("collection")})}async function vn(t,e,i,n){var de,j,U,le,fe,ue;const{state:r,toast:o,openModal:a,closeModal:s,navigate:d,refreshProfile:l}=n,c=t.player,f=e.filter($=>$.player.id===c.id),b=f.length,x=t.evolution_bonus||0,g=Math.max((Number(c.note_g)||0)+(c.job==="GK"||c.job2==="GK"?x:0),(Number(c.note_d)||0)+(c.job==="DEF"||c.job2==="DEF"?x:0),(Number(c.note_m)||0)+(c.job==="MIL"||c.job2==="MIL"?x:0),(Number(c.note_a)||0)+(c.job==="ATT"||c.job2==="ATT"?x:0)),p=c.rarity||"normal",{data:u}=await v.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",g).gte("note_max",g).order("note_min",{ascending:!1}).limit(1);((de=u==null?void 0:u[0])==null?void 0:de.price)??er[p];const y=c.rarity!=="legende";Mt(c);const w=di(c,c.job)+x,h=c.job2?di(c,c.job2)+(di(c,c.job2)>0?x:0):null;Ti[c.job],c.job2&&Ti[c.job2];const L=Qo[c.rarity]||"#ccc";ir[c.country_code]||c.country_code;const m=t.evolution_bonus||0,E=w+m,S=h||0,q=S>0?S+m:0,W=f.map($=>$.id);let ee={};if(W.length){const{data:$}=await v.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",W).order("transferred_at",{ascending:!0});($||[]).forEach(C=>{ee[C.card_id]||(ee[C.card_id]=[]),ee[C.card_id].push(C)})}const G=W.length?`
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
              value="${c.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="single-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>`:'<div style="font-size:11px;color:#aaa;font-style:italic">Les cartes légendes ne sont pas vendables.</div>'}
      `}
      <!-- Grille de mini-cartes (copies uniquement, l'exemplaire 1 = carte principale affichée en haut) -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${f.filter($=>$.id!==t.id).map(($,C)=>{const O=ee[$.id]||[],P=$.is_for_sale,X=O.length?O[O.length-1]:null,D=$.evolution_bonus||0,K=X?X.source==="booster"?"Booster":X.price?X.price.toLocaleString("fr")+" cr.":"—":"—",pe=X?new Date(X.transferred_at).toLocaleDateString("fr",{day:"2-digit",month:"2-digit",year:"numeric"}):"",ne=80,me=Math.round(ne*657/507),we=Se({...c,_evolution_bonus:D},{width:ne});return`
            <div class="exemplaire-row" data-card-id="${$.id}" data-card-idx="${C}"
              style="position:relative;cursor:${P?"not-allowed":"pointer"};opacity:${P?.55:1};transition:transform .1s">
              <!-- Checkbox cachée -->
              <input type="checkbox" class="expl-check"
                data-id="${$.id}" data-evo="${D}" data-note="${di(c,c.job)}"
                ${P?"disabled":""}
                style="display:none">
              <!-- Wrapper exactement aux dimensions de la carte -->
              <div class="expl-mini-card" style="position:relative;width:${ne}px;height:${me}px;border-radius:8px;overflow:hidden">
                ${we}
                <!-- Overlay vert sélection — couvre toute la carte -->
                <div class="expl-sel-overlay" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(26,107,60,0.38);pointer-events:none;z-index:10;box-shadow:inset 0 0 0 3px #1A6B3C;border-radius:8px"></div>
                <!-- Checkmark -->
                <div class="expl-sel-check" style="display:none;position:absolute;top:5px;left:5px;width:20px;height:20px;background:#1A6B3C;border-radius:50%;z-index:11;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:900">✓</div>
                ${P?'<div style="position:absolute;top:0;right:0;background:#e67e22;color:#fff;font-size:6px;font-weight:900;padding:2px 4px;border-radius:0 6px 0 4px;z-index:12">VENTE</div>':""}
              </div>
              <!-- Source + date -->
              <div style="font-size:9px;color:#888;text-align:center;margin-top:3px;line-height:1.3">
                ${K}${pe?`<br>${pe}`:""}
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
              ${(t.evolution_bonus||0)>0?`+${t.evolution_bonus} appliqué${t.evolution_bonus>1?"s":""} · Note : ${E}${c.job2&&S>0?` / ${q}`:""}`:`Note actuelle : ${E}${c.job2&&S>0?` / ${q}`:""}`}
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
              value="${c.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>`:""}
      </div>
    </div>`:"";a(`${c.firstname} ${c.surname_real}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${Se({...c,_evolution_bonus:x},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:#888;margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${c.rarity==="normal"?"#555":c.rarity==="papyte"?"#707070":L}">${c.rarity.toUpperCase()}</div>
          ${c.rarity==="pepite"||c.rarity==="papyte"?`
          <div style="margin-top:6px;background:${L}18;border-left:3px solid ${L};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${L};margin-bottom:2px">✨ Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5">
              ${c.rarity==="pepite"?'⬆️ Bonus évolution : <b style="color:#D4A017">+30%</b>':'⬇️ Malus évolution : <b style="color:#909090">-30%</b>'}
            </div>
          </div>`:""}
        </div>
        <div>
          <div style="font-size:11px;color:#888;margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${c.job}${c.job2?" / "+c.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:#888;margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",c.note_g],["DEF",c.note_d],["MIL",c.note_m],["ATT",c.note_a]].map(([$,C])=>{const O=Ti[$],P=$==="GK"?"#fff":O,X=$===c.job||$===c.job2,D=(Number(C)||0)+(X&&m>0?m:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${O};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${P};font-family:Arial Black,Arial;line-height:1">${D}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${P}">${$}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:#888;margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${b}</div>
        </div>
      </div>
    </div>
    ${G}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(j=document.getElementById("close-detail"))==null||j.addEventListener("click",s);let T=new Set;const _=c.rarity==="pepite"?1.3:c.rarity==="papyte"?.7:1;function H(){let $=0;return document.querySelectorAll(".expl-check:checked").forEach(C=>{if(C.dataset.id===t.id)return;const P=Number(C.dataset.evo)||0,X=Number(C.dataset.note)||0;$+=X+P}),Math.round($*_)}const Y=()=>{const $=T.size,C=document.getElementById("sell-action-panel");if(!C)return;C.style.display=$>0?"block":"none",document.getElementById("sell-selected-count").textContent=$;const O=document.getElementById("evolve-btn");if(O){const P=H();O.textContent=P>0?`⬆️ Évoluer (+${P})`:"⬆️ Évoluer"}};document.querySelectorAll(".expl-check").forEach($=>{$.addEventListener("change",()=>{const C=$.dataset.id;$.checked?T.add(C):T.delete(C);const O=$.closest(".exemplaire-row");if(O){const P=O.querySelector(".expl-sel-overlay"),X=O.querySelector(".expl-sel-check");P&&(P.style.display=$.checked?"block":"none"),X&&(X.style.display=$.checked?"flex":"none"),O.style.transform=$.checked?"scale(1.05)":"scale(1)"}Y()})}),document.querySelectorAll(".exemplaire-row").forEach($=>{$.addEventListener("click",C=>{if(C.target.tagName==="INPUT")return;const O=$.querySelector(".expl-check");O&&!O.disabled&&(O.checked=!O.checked,O.dispatchEvent(new Event("change")))})}),(U=document.getElementById("evolve-btn"))==null||U.addEventListener("click",async()=>{if(b<=1)return;const $=[...T];if(!$.length)return;if(T.has(t.id)){const ne=document.createElement("div");ne.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ne.innerHTML=`
        <div style="background:var(--tile-bg);border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(ne),ne.querySelector("#err-close").addEventListener("click",()=>ne.remove()),ne.addEventListener("click",me=>{me.target===ne&&ne.remove()});return}const C=$.filter(ne=>ne!==t.id);if(!C.length){o("Sélectionne des copies à sacrifier","warning");return}const O=C.reduce((ne,me)=>{const we=document.querySelector(`.expl-check[data-id="${me}"]`),he=we&&Number(we.dataset.evo)||0,Ie=we&&Number(we.dataset.note)||0;return ne+Ie+he},0),P=Math.round(O*_),X=c.rarity==="pepite"?" (+30% pépite ✨)":c.rarity==="papyte"?" (-30% papyte)":"";if(!await new Promise(ne=>{const me=document.createElement("div");me.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",me.innerHTML=`
        <div style="background:var(--tile-bg);border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${c.firstname} ${c.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${C.length}</strong> copie${C.length>1?"s":""} sacrifiée${C.length>1?"s":""}<br>
            ➕ Brut : <strong>+${O}</strong>${X?`<span style="font-size:11px;color:#888"> ${X}</span>`:""}<br>
            ⬆️ Bonus final : <strong style="color:#1A6B3C">+${P}</strong><br>
            📈 Évolution : <strong>${t.evolution_bonus||0}</strong> → <strong style="color:#1A6B3C">${(t.evolution_bonus||0)+P}</strong><br>
            📊 Note finale : <strong>${w}</strong> → <strong style="color:#1A6B3C">${w+P}</strong>
            ${h&&h>0?`<br>📊 Note 2 finale : <strong>${h}</strong> → <strong style="color:#1A6B3C">${h+P}</strong>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:var(--tile-bg);font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(me),me.querySelector("#sac-cancel").addEventListener("click",()=>{me.remove(),ne(!1)}),me.querySelector("#sac-ok").addEventListener("click",()=>{me.remove(),ne(!0)}),me.addEventListener("click",we=>{we.target===me&&(me.remove(),ne(!1))})}))return;if(C.length){await v.from("market_listings").delete().in("card_id",C),await v.from("deck_cards").delete().in("card_id",C),await v.from("transfer_history").delete().in("card_id",C),await v.from("decks").update({stadium_card_id:null}).in("stadium_card_id",C);const{error:ne}=await v.from("cards").delete().in("id",C);if(ne){o("Erreur suppression : "+ne.message,"error");return}}const K=(t.evolution_bonus||0)+P,{error:pe}=await v.from("cards").update({evolution_bonus:K}).eq("id",t.id);if(pe){o("Erreur évolution : "+pe.message,"error");return}o(`⬆️ ${c.firstname} ${c.surname_real} : note ${w} → ${w+K} (+${P}) !`,"success",4e3),s(),d("collection")});async function ae($){const{data:C}=await v.from("sell_price_configs").select("price_min, price_max").eq("rarity",c.rarity).lte("note_min",w).gte("note_max",w).order("note_max",{ascending:!0}).limit(1).maybeSingle();return C?$<C.price_min||$>C.price_max?{ok:!1,min:C.price_min,max:C.price_max}:{ok:!0}:{ok:!0}}(le=document.getElementById("market-sell-btn"))==null||le.addEventListener("click",async()=>{var K;const $=[...T];if(!$.length){o("Sélectionne au moins un exemplaire","warning");return}const C=parseInt((K=document.getElementById("sell-market-price"))==null?void 0:K.value);if(!C||C<1){o("Prix invalide","error");return}const O=await ae(C);if(!O.ok){o(`Prix hors grille : entre ${O.min.toLocaleString("fr")} et ${O.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:P}=await v.from("cards").update({is_for_sale:!0,sale_price:C}).in("id",$);if(P){o(P.message,"error");return}const X=$.map(pe=>({seller_id:r.profile.id,card_id:pe,price:C,status:"active"})),{error:D}=await v.from("market_listings").insert(X);D&&console.warn("[Market] insert listings:",D.message),o(`${$.length} carte${$.length>1?"s":""} mise${$.length>1?"s":""} en vente à ${C.toLocaleString("fr")} cr. chacune !`,"success"),s(),d("collection")}),(fe=document.getElementById("single-sell-btn"))==null||fe.addEventListener("click",async()=>{var X;const $=parseInt((X=document.getElementById("single-sell-price"))==null?void 0:X.value);if(!$||$<1){o("Prix invalide","error");return}const C=await ae($);if(!C.ok){o(`Prix hors grille : entre ${C.min.toLocaleString("fr")} et ${C.max.toLocaleString("fr")} cr. pour cette rareté/note`,"error");return}const{error:O}=await v.from("cards").update({is_for_sale:!0,sale_price:$}).eq("id",t.id);if(O){o(O.message,"error");return}const{error:P}=await v.from("market_listings").insert({seller_id:r.profile.id,card_id:t.id,price:$,status:"active"});P&&console.warn("[Market] insert listing:",P.message),o(`Carte mise en vente à ${$.toLocaleString("fr")} cr. !`,"success"),s(),d("collection")}),(ue=document.getElementById("cancel-sell-btn"))==null||ue.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",t.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",t.id).eq("status","active"),o("Annonce retirée","success"),s(),d("collection")})}function wn(t,e=""){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${t}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(e||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const r=n.querySelector("#pm-input");r.focus(),r.select();const o=a=>{n.remove(),i(a)};n.querySelector("#pm-ok").addEventListener("click",()=>o(r.value.trim()||null)),n.querySelector("#pm-cancel").addEventListener("click",()=>o(null)),n.querySelector("#pm-cancel2").addEventListener("click",()=>o(null)),n.addEventListener("click",a=>{a.target===n&&o(null)}),r.addEventListener("keydown",a=>{a.key==="Enter"&&o(r.value.trim()||null),a.key==="Escape"&&o(null)})})}function ar(t,e=!1){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${t}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${e?"":"btn-primary"}" id="cm-ok" style="${e?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const r=o=>{n.remove(),i(o)};n.querySelector("#cm-ok").addEventListener("click",()=>r(!0)),n.querySelector("#cm-cancel").addEventListener("click",()=>r(!1)),n.addEventListener("click",o=>{o.target===n&&r(!1)})})}const mi={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function ji(t,e){const{state:i,navigate:n,toast:r}=e;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await v.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});t.innerHTML=`
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(o==null?void 0:o.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(o==null?void 0:o.length)>0?o.map(a=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=await wn("Nom du deck",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!a)return;const{data:s,error:d}=await v.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(d){r(d.message,"error");return}r("Deck créé !","success"),_n(s.id,t,e)}),t.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>_n(a.dataset.openDeck,t,e))}),t.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const s=await wn("Nouveau nom",a.dataset.name);if(!s||s===a.dataset.name)return;const{error:d}=await v.from("decks").update({name:s}).eq("id",a.dataset.rename);if(d){r(d.message,"error");return}r("Deck renommé !","success"),ji(t,e)})}),t.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!await ar(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`,!0))return;await v.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:s}=await v.from("decks").delete().eq("id",a.dataset.delete);if(s){r(s.message,"error");return}r("Deck supprimé.","success"),ji(t,e)})})}async function _n(t,e,i){const{state:n,toast:r}=i;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await v.from("decks").select("*").eq("id",t).single(),{data:a}=await v.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:s}=await v.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),d=(a||[]).filter(y=>y.card_type==="player"&&y.player),l=(a||[]).filter(y=>y.card_type==="formation"),c=(s||[]).filter(y=>y.card_type==="stadium"),f=[...new Set(c.map(y=>y.stadium_id).filter(Boolean))];let b={};if(c.forEach(y=>{y.stadium_def&&y.stadium_id&&(b[y.stadium_id]=y.stadium_def)}),f.length&&Object.keys(b).length<f.length){const{data:y}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",f);(y||[]).forEach(w=>{b[w.id]=w})}const x=l.map(y=>y.formation).filter(Boolean),{data:g}=await v.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",t);let p=o.formation||"4-4-2";x.length>0&&!x.includes(p)&&(p=x[0]);const u={deckId:t,name:o.name,formation:p,formationCardId:o.formation_card_id,stadiumCardId:o.stadium_card_id||null,slots:{},subs:[],playerCards:d,formationCards:l,stadiumCards:c,stadDefMap:b,availableFormations:x};(g||[]).forEach(y=>{y.is_starter?u.slots[y.position]=y.card_id:u.subs.includes(y.card_id)||u.subs.push(y.card_id)}),wt(e,u,i)}function wt(t,e,i){var g,p;const{navigate:n}=i;mi[e.formation];const r=kn(e.formation),o=r.filter(u=>e.slots[u]).length,a=e.availableFormations.length>0?e.availableFormations:Object.keys(mi),s=(g=e.stadiumCards)==null?void 0:g.find(u=>u.id===e.stadiumCardId),d=s&&((p=e.stadDefMap)==null?void 0:p[s.stadium_id])||null,l=e.subs.map(u=>e.playerCards.find(y=>y.id===u)).filter(Boolean);l.length!==e.subs.length&&(e.subs=l.map(u=>u.id)),[...Object.values(e.slots),...e.subs],t.innerHTML=`
  <style>.no-scrollbar::-webkit-scrollbar{display:none}</style>
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:8px;padding:6px 12px;min-height:0">
      <button class="btn-icon" id="builder-back" style="font-size:16px">←</button>
      <div style="flex:1">
        <h2 style="font-size:14px;margin:0">${e.name}</h2>
        <p style="font-size:11px;margin:0">${o}/11 · ${l.length}/5 rempl.</p>
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
            ${l.map(u=>{const y={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:24px">
                ${Se({...y,_evolution_bonus:y._evolution_bonus||0},{width:90,showStad:!0,stadDef:d})}
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
            <div id="formation-pc-btn" style="cursor:pointer;width:100px;height:50px;border-radius:8px;background:#1a3a6b;border:2px solid #555;display:flex;align-items:center;justify-content:center;margin:0 auto">
              <span style="font-size:18px;font-weight:900;color:#fff">${e.formation}</span>
            </div>
          </div>
          <!-- Stade -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">🏟️ Stade</div>
            <div id="add-stad-btn-pc" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${s?(()=>{var w;const u=e.stadDefMap[s.stadium_id],y=((w=u==null?void 0:u.club)==null?void 0:w.logo_url)||(u==null?void 0:u.image_url)||(u!=null&&u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Rt((u==null?void 0:u.name)||"Stade",y,"+10 ⭐",{width:100})})():`<div style="width:100px;height:171px;border:2px dashed rgba(79,195,247,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
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
        <div style="display:flex;gap:6px;align-items:flex-start">
          <!-- Remplaçants mobile -->
          <div style="flex:1;min-width:0">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">Remplaçants (${l.length}/5)</div>
            <div style="display:flex;gap:2px;align-items:center;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none" id="subs-list" class="no-scrollbar">
              ${l.map(u=>{const y={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:20px">
                  ${Se({...y,_evolution_bonus:y._evolution_bonus||0},{width:44,showStad:!0,stadDef:d})}
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
              ${s?(()=>{var w;const u=e.stadDefMap[s.stadium_id],y=((w=u==null?void 0:u.club)==null?void 0:w.logo_url)||(u==null?void 0:u.image_url)||(u!=null&&u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Rt((u==null?void 0:u.name)||"Stade",y,"+10⭐",{width:44})})():`<div style="width:44px;height:57px;border:2px dashed rgba(79,195,247,0.5);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
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
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${o<11?"disabled":""}>
        ${o<11?`Placez encore ${11-o} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`;const c=window.innerWidth>=900,f=t.querySelector(".deck-pc-layout"),b=t.querySelector(".deck-mobile-layout");f&&(f.style.display=c?"block":"none"),b&&(b.style.display=c?"none":"block"),sr(t,e,r,i),t.querySelectorAll("#builder-back").forEach(u=>u.addEventListener("click",()=>n("decks")));const x=()=>{const{openModal:u,closeModal:y}=i,w=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${a.map(h=>`<div data-forma="${h}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${h===e.formation?"#1A6B3C":"#f0f0f0"};color:${h===e.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${h===e.formation?"#1A6B3C":"#ddd"}">${h}</div>`).join("")}
    </div>`;u("⚽ Choisir une formation",w),document.querySelectorAll("#modal-body [data-forma]").forEach(h=>{h.addEventListener("click",()=>{e.formation=h.dataset.forma;const L=kn(e.formation),m={};L.forEach(A=>{e.slots[A]&&(m[A]=e.slots[A])}),e.slots=m,y(),wt(t,e,i)})})};t.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(u=>u.addEventListener("click",x)),t.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(u=>u.addEventListener("click",()=>dr(e,t,i))),t.querySelectorAll("#save-deck").forEach(u=>u.addEventListener("click",()=>pr(e,i))),t.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{e.subs=e.subs.filter(y=>y!==u.dataset.removeSub),wt(t,e,i)})}),t.querySelectorAll("#add-sub-btn").forEach(u=>u.addEventListener("click",()=>cr(e,t,i)))}function sr(t,e,i,n){var h,L,m;const r=window.innerWidth>=900,o=t.querySelector(r?"#deck-field-pc":"#deck-field-mobile");if(!o)return;const a=(h=e.stadiumCards)==null?void 0:h.find(A=>A.id===e.stadiumCardId),s=a&&((L=e.stadDefMap)==null?void 0:L[a.stadium_id])||null,d=Ct[e.formation]||{},l=Oi(e.formation)||[],c={};for(const A of i){const E=e.slots[A],S=E?e.playerCards.find(q=>q.id===E):null;S!=null&&S.player?c[A]={...S.player,_evolution_bonus:S.evolution_bonus||0,face:S.player.face||null}:c[A]=null}const f=window.innerWidth>=900,b=f?window.innerWidth-280:window.innerWidth-20,x=f?Math.min(b,860):b,g=Math.round(f?x*.82:x*.85),p=f?84:44;let u="";for(const[A,E]of l){const S=d[A],q=d[E];if(!S||!q)continue;const W=S.x*x,ee=Math.round(.03*g+S.y*.85*g),G=q.x*x,T=Math.round(.03*g+q.y*.85*g),_=c[A],H=c[E],Y=Ut(_,H);Y==="#ff3333"||Y==="#cc2222"?u+=`<line x1="${W.toFixed(1)}" y1="${ee.toFixed(1)}" x2="${G.toFixed(1)}" y2="${T.toFixed(1)}" stroke="${Y}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(u+=`<line x1="${W.toFixed(1)}" y1="${ee.toFixed(1)}" x2="${G.toFixed(1)}" y2="${T.toFixed(1)}" stroke="${Y}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,u+=`<line x1="${W.toFixed(1)}" y1="${ee.toFixed(1)}" x2="${G.toFixed(1)}" y2="${T.toFixed(1)}" stroke="${Y}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let y="";const w=Math.round(p*657/507);for(const A of i){const E=d[A];if(!E)continue;const S=c[A],q=E.x*x;E.y*g;const W=Math.round(.03*g+E.y*(.85*g)),ee=Math.round(q-p/2),G=Math.round(W-w/2);if(S){const T=A.replace(/\d+/,""),_=s&&(s.club_id&&String(S.club_id)===String(s.club_id)||s.country_code&&S.country_code===s.country_code),H=Se({...S,_evolution_bonus:S._evolution_bonus||0},{width:p,showStad:!0,stadDef:s,role:T});_&&((m=s.club)!=null&&m.logo_url||s.image_url),y+=`<div style="position:absolute;left:${ee}px;top:${G}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${A}">
        <div style="position:relative">${H}</div>
      </div>`}else{const T=A.replace(/\d+/,"");y+=`<div style="position:absolute;left:${ee}px;top:${G}px;width:${p}px;height:${w}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${A}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${T}</span>
      </div>`}}o.innerHTML=`
    <div style="position:relative;width:${x}px;height:${g}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${x} ${g}">${u}</svg>
      ${y}
    </div>`,o.querySelectorAll(".deck-slot-hit").forEach(A=>{A.addEventListener("click",()=>lr(A.dataset.pos,e,t,n))})}function dr(t,e,i){var a;const{openModal:n,closeModal:r}=i,o=t.stadiumCards||[];n("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:90px;text-align:center">
        <div style="width:85px;height:112px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${t.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:26px">🚫</span>
          <span style="font-size:10px;color:#666">Aucun</span>
        </div>
      </div>
      ${o.map(s=>{var b;const d=t.stadDefMap[s.stadium_id],l=((b=d==null?void 0:d.club)==null?void 0:b.logo_url)||(d==null?void 0:d.image_url)||(d!=null&&d.country_code?`https://flagsapi.com/${d.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),c=t.stadiumCardId===s.id,f=Rt((d==null?void 0:d.name)||"Stade",l,"+10⭐",{width:90});return`<div class="stad-choice" data-stad-id="${s.id}" style="cursor:pointer;position:relative;border-radius:8px;${c?"box-shadow:0 0 0 3px #4fc3f7":""}">
          ${f}
        </div>`}).join("")}
    </div>`),(a=document.getElementById("stad-none"))==null||a.addEventListener("click",()=>{t.stadiumCardId=null,r(),wt(e,t,i)}),document.querySelectorAll(".stad-choice").forEach(s=>{s.addEventListener("click",()=>{t.stadiumCardId=s.dataset.stadId,r(),wt(e,t,i)})})}function lr(t,e,i,n){var g,p,u,y,w;const{openModal:r,closeModal:o}=n,a=t.replace(/\d+/,""),s=(g=e.stadiumCards)==null?void 0:g.find(h=>h.id===e.stadiumCardId),d=s&&((p=e.stadDefMap)==null?void 0:p[s.stadium_id])||null,l=e.slots[t],c=l?e.playerCards.find(h=>h.id===l):null;(u=c==null?void 0:c.player)==null||u.id;const f=new Set;Object.entries(e.slots).forEach(([h,L])=>{var A;if(h===t||!L)return;const m=e.playerCards.find(E=>E.id===L);(A=m==null?void 0:m.player)!=null&&A.id&&f.add(m.player.id)}),e.subs.forEach(h=>{var m;const L=e.playerCards.find(A=>A.id===h);(m=L==null?void 0:L.player)!=null&&m.id&&f.add(L.player.id)});const b=new Set,x=e.playerCards.filter(h=>{const L=h.player;return!(L.job===a||L.job2===a)||f.has(L.id)||b.has(L.id)?!1:(b.add(L.id),!0)});x.sort((h,L)=>{const m=h.evolution_bonus||0,A=L.evolution_bonus||0,E=(a==="GK"?h.player.note_g:a==="DEF"?h.player.note_d:a==="MIL"?h.player.note_m:h.player.note_a)+(a===h.player.job||a===h.player.job2?m:0);return(a==="GK"?L.player.note_g:a==="DEF"?L.player.note_d:a==="MIL"?L.player.note_m:L.player.note_a)+(a===L.player.job||a===L.player.job2?A:0)-E}),r(`Choisir ${a} — ${t}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${e.slots[t]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${x.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+x.map(h=>{const L={...h.player,_evolution_bonus:h.evolution_bonus||0};return`<div class="player-option" data-card-id="${h.id}" style="cursor:pointer">
          ${Se(L,{width:100,showStad:!0,stadDef:d,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(y=document.getElementById("close-selector"))==null||y.addEventListener("click",o),(w=document.getElementById("remove-player"))==null||w.addEventListener("click",()=>{delete e.slots[t],o(),wt(i,e,n)}),document.querySelectorAll(".player-option").forEach(h=>{h.addEventListener("click",()=>{e.slots[t]=h.dataset.cardId,o(),wt(i,e,n)})})}function cr(t,e,i){var c,f,b;const{openModal:n,closeModal:r}=i,o=(c=t.stadiumCards)==null?void 0:c.find(x=>x.id===t.stadiumCardId),a=o&&((f=t.stadDefMap)==null?void 0:f[o.stadium_id])||null,s=new Set;Object.keys(t.slots).forEach(x=>{var u;const g=t.slots[x];if(!g)return;const p=t.playerCards.find(y=>y.id===g);(u=p==null?void 0:p.player)!=null&&u.id&&s.add(p.player.id)}),t.subs.forEach(x=>{var p;const g=t.playerCards.find(u=>u.id===x);(p=g==null?void 0:g.player)!=null&&p.id&&s.add(g.player.id)});const d=new Set,l=t.playerCards.filter(x=>{var g,p,u;return s.has((g=x.player)==null?void 0:g.id)||d.has((p=x.player)==null?void 0:p.id)?!1:(d.add((u=x.player)==null?void 0:u.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+l.map(x=>{const g={...x.player,_evolution_bonus:x.evolution_bonus||0};return`<div class="player-option" data-card-id="${x.id}" style="cursor:pointer">
          ${Se(g,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(b=document.getElementById("close-sub-selector"))==null||b.addEventListener("click",r),document.querySelectorAll(".player-option").forEach(x=>{x.addEventListener("click",()=>{t.subs.push(x.dataset.cardId),r(),wt(e,t,i)})})}async function pr(t,e){const{state:i,toast:n,navigate:r}=e,o=t.formationCards.find(d=>d.formation===t.formation),a=(o==null?void 0:o.id)||t.formationCardId;await v.from("decks").update({formation:t.formation,formation_card_id:a||null,stadium_card_id:t.stadiumCardId||null}).eq("id",t.deckId),await v.from("deck_cards").delete().eq("deck_id",t.deckId);const s=[];if(Object.entries(t.slots).forEach(([d,l],c)=>{s.push({deck_id:t.deckId,card_id:l,position:d,is_starter:!0,slot_order:c})}),t.subs.forEach((d,l)=>{s.push({deck_id:t.deckId,card_id:d,position:`SUB${l+1}`,is_starter:!1,slot_order:100+l})}),s.length>0){const{error:d}=await v.from("deck_cards").insert(s);if(d){n(d.message,"error");return}}n("Deck enregistré ✅","success"),r("decks")}function kn(t){const e=mi[t]||mi["4-4-2"],i=["GK1"];for(let n=1;n<=e.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=e.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=e.ATT;n++)i.push(`ATT${n}`);return i}async function Kn(t=null){const e=new Date().toISOString().slice(0,10),{data:i}=await v.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(a=>!(a.available_from&&e<a.available_from||a.available_until&&e>a.available_until));if(!n.length)return[];let r=n;if(t){const a=n.filter(s=>s.max_per_user!=null);if(a.length){const{data:s}=await v.from("booster_claims").select("booster_id").eq("user_id",t).in("booster_id",a.map(l=>l.id)),d={};(s||[]).forEach(l=>{d[l.booster_id]=(d[l.booster_id]||0)+1}),r=n.filter(l=>l.max_per_user==null?!0:(d[l.id]||0)<l.max_per_user)}}if(!r.length)return[];const{data:o}=await v.from("booster_drop_rates").select("*").in("booster_id",r.map(a=>a.id)).order("sort_order");return r.map(a=>({...a,rates:(o||[]).filter(s=>s.booster_id===a.id)}))}async function ur(t,e){const{data:i}=await v.from("booster_configs").select("max_per_user").eq("id",e).single();i!=null&&i.max_per_user&&await v.from("booster_claims").insert({user_id:t,booster_id:e})}function fr(t){if(!(t!=null&&t.length))return null;const e=t.reduce((n,r)=>n+Number(r.percentage),0);let i=Math.random()*e;for(const n of t)if(i-=Number(n.percentage),i<=0)return n;return t[t.length-1]}const Vn=()=>Object.keys(Ct),mr=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Bi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function gr(t){const e=t.player;if(!e)return"";const i=t.evolution_bonus||0;return Se({...e,_evolution_bonus:i},{width:140})}function Yn(t){var r;const e={};(t.rates||[]).forEach(o=>{e[o.card_type]=(e[o.card_type]||0)+Number(o.percentage||0)});const i=((r=Object.entries(e).sort((o,a)=>a[1]-o[1])[0])==null?void 0:r[0])||"player",n=t.image_url||"booster-players.png";return{id:t.id,img:"/icons/"+n,name:t.name,sub:`${t.card_count} carte(s)`,cost:t.price_type==="credits"&&t.price_credits||0,costLabel:t.price_type==="credits"?`${(t.price_credits||0).toLocaleString("fr")} crédits`:t.price_type==="pub"?"1 pub":"Gratuit",cardCount:t.card_count||5,type:i,isPub:t.price_type==="pub",rates:t.rates||[],allow_duplicates:t.allow_duplicates!==!1,_boosterId:t.id,_raw:t}}async function xr(t,{state:e,navigate:i,toast:n}){var f,b,x;const r=((f=e.profile)==null?void 0:f.credits)||0;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await Kn((b=e.user)==null?void 0:b.id)).map(Yn)}catch(g){console.warn("Erreur chargement boosters DB, fallback hardcodé",g)}o.length||(o=mr.map(g=>({...g,rates:[],isPub:g.id==="players_pub"})));const a=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.profile.id).then(g=>g.data||[]),s=new Set(a.filter(g=>g.card_type==="stadium").map(g=>g.stadium_id)),d=new Set(a.filter(g=>g.card_type==="formation").map(g=>g.formation)),l=new Set(a.filter(g=>g.card_type==="game_changer").map(g=>g.gc_type)),c={};for(const g of o){if(g.allow_duplicates!==!1||!((x=g.rates)!=null&&x.length))continue;const p=[...new Set((g.rates||[]).map(y=>y.card_type))];let u=!1;for(const y of p)if(y==="stadium"){const{data:w}=await v.from("stadium_definitions").select("id");if((w||[]).some(h=>!s.has(h.id))){u=!0;break}}else if(y==="game_changer"){const{data:w}=await v.from("gc_definitions").select("name").eq("is_active",!0);if((w||[]).some(h=>!l.has(h.name))){u=!0;break}}else if(y==="formation"){const{FORMATION_LINKS:w}=await Ui(async()=>{const{FORMATION_LINKS:h}=await import("./special-cards-lEGt-tGs.js").then(L=>L.y);return{FORMATION_LINKS:h}},__vite__mapDeps([0,1]));if(Object.keys(w).some(h=>!d.has(h))){u=!0;break}}else{u=!0;break}u||(c[g.id]=!0)}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${r.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(g=>{const p=g.cost===0||r>=g.cost,u=c[g.id]===!0;return`<div class="booster-card ${!p||u?"disabled":""}" data-booster="${g.id}" style="position:relative">
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
  </div>`,t.querySelectorAll(".booster-card:not(.disabled)").forEach(g=>{g.addEventListener("click",async()=>{const p=o.find(u=>u.id===g.dataset.booster);if(p){g.style.opacity="0.5",g.style.pointerEvents="none";try{await br(p,{state:e,toast:n,navigate:i,container:t})}catch(u){n(u.message,"error"),g.style.opacity="",g.style.pointerEvents=""}}})}),t.querySelectorAll(".booster-info-btn").forEach(g=>{g.addEventListener("click",p=>{p.stopPropagation();const u=o.find(y=>y.id===g.dataset.boosterId);wr(u)})})}async function br(t,{state:e,toast:i,navigate:n,container:r}){var f,b;if(t.cost>0&&e.profile.credits<t.cost){i("Crédits insuffisants","error");return}t.isPub&&await kr();const{data:o}=await v.from("cards").select("card_type, player_id, formation").eq("owner_id",e.profile.id),a=new Set((o||[]).filter(x=>x.card_type==="player").map(x=>x.player_id)),s=new Set((o||[]).filter(x=>x.card_type==="formation").map(x=>x.formation));let d=[],l=null;try{if((f=t.rates)!=null&&f.length)d=await qi(e.profile,t);else{const x=t.type||"player";x==="player"?d=await Wn(e.profile,t.cardCount,t.cost):x==="game_changer"?d=await Xn(e.profile,t.cardCount,t.cost):x==="formation"?d=await Jn(e.profile,t.cost):d=await qi(e.profile,t)}}catch(x){l=x.message||String(x),console.error("[Booster] Erreur:",x)}if(d!=null&&d.length&&t._boosterId&&await ur(e.user.id,t._boosterId),!(d!=null&&d.length)){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",x.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${l||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(x),(b=x.querySelector("#anim-close-err"))==null||b.addEventListener("click",()=>x.remove());return}d.forEach(x=>{x.card_type==="player"&&x.player?x.isDuplicate=a.has(x.player.id):x.card_type==="formation"&&(x.isDuplicate=s.has(x.formation))});const{data:c}=await v.from("users").select("*").eq("id",e.profile.id).single();c&&(e.profile=c),Qn(d,t,n)}function yr(){const t=Math.random()*100;return t<.5?"legende":t<2?"special":t<10?"normal_high":"normal_low"}function gt(t){return Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function hr(t,e){let i;switch(e){case"legende":i=t.filter(n=>n.rarity==="legende"),i.length||(i=t.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=t.filter(n=>gt(n)>=6));break;case"special":i=t.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=t.filter(n=>gt(n)>=6));break;case"normal_high":i=t.filter(n=>n.rarity==="normal"&&gt(n)>=6),i.length||(i=t.filter(n=>gt(n)>=6));break;default:i=t.filter(n=>n.rarity==="normal"&&gt(n)>=1&&gt(n)<=5),i.length||(i=t.filter(n=>n.rarity==="normal"));break}return i.length||(i=t),i[Math.floor(Math.random()*i.length)]}async function qi(t,e){if(e.cost>0){const{error:b}=await v.from("users").update({credits:t.credits-e.cost}).eq("id",t.id);if(b)throw b}const i=e.allow_duplicates!==!1;let n=[];const{data:r,error:o}=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.id);if(o){const{data:b}=await v.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",t.id);n=b||[]}else n=r||[];const a=new Set(n.filter(b=>b.card_type==="player").map(b=>b.player_id)),s=new Set(n.filter(b=>b.card_type==="formation").map(b=>b.formation)),d=new Set(n.filter(b=>b.card_type==="game_changer").map(b=>b.gc_type)),l=new Set(n.filter(b=>b.card_type==="stadium").map(b=>b.stadium_id).filter(Boolean)),c=new Set,f=[];for(let b=0;b<(e.cardCount||5);b++){const x=fr(e.rates);if(x){if(x.card_type==="player"){const g=E=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[E]||E,p=x.rarity?g(x.rarity):null;let u=v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(u=u.eq("rarity",p));const{data:y}=await u;let w=y||[];if((x.note_min||x.note_max)&&(w=w.filter(E=>{const S=Math.max(Number(E.note_g)||0,Number(E.note_d)||0,Number(E.note_m)||0,Number(E.note_a)||0);return(!x.note_min||S>=x.note_min)&&(!x.note_max||S<=x.note_max)})),w.length||(x.note_min||x.note_max?(w=y||[],console.warn("[Booster] Aucun joueur avec note",x.note_min,"-",x.note_max,"— fallback rareté uniquement")):w=y||[]),!w.length)continue;let h=w.filter(E=>!c.has(E.id));if(i)h.length||(h=w);else if(h=h.filter(E=>!a.has(E.id)),!h.length)continue;const L=h[Math.floor(Math.random()*h.length)];c.add(L.id);const m=a.has(L.id),{data:A}=await v.from("cards").insert({owner_id:t.id,player_id:L.id,card_type:"player"}).select().single();A&&(f.push({...A,player:L,isDuplicate:m}),v.rpc("record_transfer",{p_card_id:A.id,p_player_id:L.id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(x.card_type==="game_changer"){const{data:g}=await v.from("gc_definitions").select("id,name,color,effect,image_url,gc_type").eq("is_active",!0).eq("gc_type","game_changer"),p=g!=null&&g.length?g:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],u=i?p:p.filter(L=>!d.has(L.name));if(!i&&!u.length)continue;const y=u[Math.floor(Math.random()*u.length)],w=y.name,{data:h}=await v.from("cards").insert({owner_id:t.id,card_type:"game_changer",gc_type:w,gc_definition_id:y.id||null}).select().single();h&&f.push({...h,_gcDef:y})}else if(x.card_type==="formation"){const g=Vn(),p=i?g:g.filter(h=>!s.has(h));if(!i&&!p.length)continue;const u=p[Math.floor(Math.random()*p.length)],y=s.has(u),{data:w}=await v.from("cards").insert({owner_id:t.id,card_type:"formation",formation:u}).select();w!=null&&w[0]&&f.push({...w[0],isDuplicate:y})}else if(x.card_type==="stadium"){const{data:g,error:p}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(g!=null&&g.length)){console.warn("[Booster] Aucun stade en DB");continue}const u=i?g:g.filter(L=>!l.has(L.id));if(!i&&!u.length)continue;const y=u[Math.floor(Math.random()*u.length)],{data:w,error:h}=await v.from("cards").insert({owner_id:t.id,card_type:"stadium",stadium_id:y.id}).select("id,card_type,stadium_id").single();if(h){console.error("[Booster] insert stadium card:",h.message);continue}w&&f.push({...w,rarity:"normal",_stadiumDef:y})}}}return f}async function Wn(t,e,i){if(i>0){const{error:l}=await v.from("users").update({credits:t.credits-i}).eq("id",t.id);if(l)throw l}const{data:n}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const r=n.filter(l=>l.job==="GK"),o=n.filter(l=>l.job!=="GK"),a=!t.first_booster_opened&&r.length>0,s=[];for(let l=0;l<e;l++){const c=l===0&&a?r:l===0?o:n,f=yr(),b=hr(c,f);b&&s.push(b)}a&&await v.from("users").update({first_booster_opened:!0}).eq("id",t.id);const{data:d}=await v.from("cards").insert(s.map(l=>({owner_id:t.id,player_id:l.id,card_type:"player"}))).select();return(d||[]).forEach((l,c)=>{v.rpc("record_transfer",{p_card_id:l.id,p_player_id:s[c].id,p_club_name:t.club_name||t.pseudo,p_manager_name:t.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((l,c)=>({...d[c],player:l}))}async function Xn(t,e,i){const{error:n}=await v.from("users").update({credits:t.credits-i}).eq("id",t.id);if(n)throw n;const{data:r}=await v.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=r!=null&&r.length?r:Object.keys(Bi).map(f=>({name:f,gc_type:"game_changer"})),a=Array.from({length:e},()=>o[Math.floor(Math.random()*o.length)]),s=a.map(f=>({owner_id:t.id,card_type:"game_changer",gc_type:f.name,gc_definition_id:f.id||null})),{data:d,error:l}=await v.from("cards").insert(s).select();return l&&console.error("[Booster GC] Erreur insert:",l.message,l),(d||[]).map((f,b)=>({...f,_gcDef:a[b]||null}))}async function Jn(t,e){const{error:i}=await v.from("users").update({credits:t.credits-e}).eq("id",t.id);if(i)throw i;const{data:n}=await v.from("cards").select("formation").eq("owner_id",t.id).eq("card_type","formation"),r=new Set((n||[]).map(c=>c.formation)),o=Vn(),a=o[Math.floor(Math.random()*o.length)],s=r.has(a),{data:d,error:l}=await v.from("cards").insert({owner_id:t.id,card_type:"formation",formation:a}).select();return l&&console.error("[Booster Formation] Erreur insert:",l.message,l),(d||[]).map(c=>({...c,isDuplicate:s}))}function Qn(t,e,i,n=null){var G,T;if(!t||t.length===0){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",_.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(_),(G=_.querySelector("#anim-close-err"))==null||G.addEventListener("click",()=>_.remove());return}t=[...t].sort((_,H)=>{const Y=_.player?gt(_.player):-1;return(H.player?gt(H.player):-1)-Y});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let o=!1;const a=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let d=!1;const l=_=>_.touches&&_.touches[0]?_.touches[0].clientX:_.clientX;function c(_){o||(d=!0,s.style.opacity="1",f(_))}function f(_){if(!d||o)return;const H=a.getBoundingClientRect(),Y=l(_)-H.left,ae=Math.max(0,Math.min(1,Y/H.width));s.style.width=ae*H.width+"px",ae>=.82&&x()}function b(){o||(d=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{o||(s.style.transition="")},220))}function x(){var H;if(o)return;o=!0,d=!1,s.style.width="100%",s.style.opacity="1",(H=document.getElementById("cut-flash"))==null||H.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const _=document.getElementById("cut-hint");_&&(_.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",y(0)},620)}a.addEventListener("pointerdown",c),window.addEventListener("pointermove",f),window.addEventListener("pointerup",b),a.addEventListener("touchstart",c,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",b);let g=0,p=!1;const u=new Set;function y(_){g=_,document.getElementById("reveal-phase").style.display="flex",w(),h(_,0),S()}function w(){const _=document.getElementById("card-dots");_&&(_.innerHTML=t.map((H,Y)=>`<div class="card-dot" data-i="${Y}" style="width:8px;height:8px;border-radius:50%;background:${Y===g?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),_.querySelectorAll(".card-dot").forEach(H=>H.addEventListener("click",()=>m(parseInt(H.dataset.i)))))}function h(_,H){var $,C;const Y=t[_],ae=document.getElementById("card-counter"),de=document.getElementById("card-track");ae&&(ae.textContent=`Carte ${_+1} / ${t.length}`);const j=document.getElementById("reveal-btns");j&&(j.style.display=_===t.length-1?"flex":"none");const U=Y.card_type==="player"&&(($=Y.player)==null?void 0:$.rarity)==="legende",le=!u.has(_);u.add(_);let fe=0;if(Y.card_type==="player"&&Y.player){const O=Y.player,P=O.job||"ATT";fe=(Number(P==="GK"?O.note_g:P==="DEF"?O.note_d:P==="MIL"?O.note_m:O.note_a)||0)+(Y.evolution_bonus||0)}const ue=O=>{de.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${U?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${vr(Y)}</div>
          ${Y.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const P=document.getElementById("current-card-wrap");H!==0?(P.style.transition="none",P.style.transform=`translateX(${H>0?100:-100}%)`,requestAnimationFrame(()=>{P.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",P.style.transform="translateX(0)"})):P.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),O||U?W():ee(),w()};le&&(((C=Y.player)==null?void 0:C.rarity)==="legende"||fe>=18)&&Y.card_type==="player"&&Y.player?L(Y,()=>ue(!0)):ue(!1)}function L(_,H){var we;p=!0;const Y=_.player,ae=`https://flagsapi.com/${Y.country_code}/flat/64.png`,de=(we=Y.clubs)==null?void 0:we.logo_url,j=Mt(Y),U=Y.job||"ATT",le=Number(U==="GK"?Y.note_g:U==="DEF"?Y.note_d:U==="MIL"?Y.note_m:Y.note_a)||0,fe=_.evolution_bonus||0,ue=le+fe,$=ue>=18&&ue<=20,C=ue>=18,O=document.getElementById("walkout-overlay"),P=document.getElementById("walkout-stage");if(!O||!P){p=!1,H();return}let X=null;$&&(X=Ji("/sounds/Legendary.mp3",.8)),O.style.display="flex";const D=()=>{const he=P.firstElementChild;he&&(he.classList.remove("wo-in"),he.classList.add("wo-out"))},K=1800,pe=400;P.innerHTML=`<img class="wo-in" src="${ae}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(D,K),setTimeout(()=>{var he;P.innerHTML=de?`<img class="wo-in" src="${de}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((he=Y.clubs)==null?void 0:he.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},K+pe),setTimeout(D,K*2+pe),setTimeout(()=>{P.innerHTML=j?`<img class="wo-in" src="${j}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(K+pe)*2),setTimeout(D,(K+pe)*2+K);const me=C?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[U]||"#fff";setTimeout(()=>{P.innerHTML=`<div class="wo-in" style="
        font-size:${C?"120px":"90px"};font-weight:900;color:${me};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${me}, 0 0 60px ${me};
        ${C?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${ue}
      </div>`,C&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(K+pe)*3),setTimeout(D,(K+pe)*3+K),setTimeout(()=>{O.style.display="none",P.innerHTML="",p=!1,X&&!$&&X.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),H()},(K+pe)*4)}function m(_){if(p||_<0||_>=t.length||_===g)return;const H=_>g?1:-1;g=_,h(_,H)}function A(){m(g+1)}function E(){m(g-1)}function S(){const _=document.getElementById("card-viewport");if(!_||_._swipeBound)return;_._swipeBound=!0;let H=0,Y=0,ae=0,de=!1;const j=$=>$.touches?$.touches[0].clientX:$.clientX,U=$=>$.touches?$.touches[0].clientY:$.clientY,le=$=>{de=!0,H=j($),Y=U($),ae=0},fe=$=>{if(!de)return;ae=j($)-H;const C=U($)-Y;if(Math.abs(ae)<Math.abs(C))return;const O=document.getElementById("current-card-wrap");O&&(O.style.transition="none",O.style.transform=`translateX(${ae*.6}px) rotate(${ae*.02}deg)`)},ue=()=>{if(!de)return;de=!1;const $=document.getElementById("current-card-wrap"),C=55;ae<=-C&&g<t.length-1?A():ae>=C&&g>0?E():$&&($.style.transition="transform .2s ease",$.style.transform="translateX(0)")};_.addEventListener("pointerdown",le),_.addEventListener("pointermove",fe),_.addEventListener("pointerup",ue),_.addEventListener("pointercancel",ue),_.addEventListener("touchstart",le,{passive:!0}),_.addEventListener("touchmove",fe,{passive:!0}),_.addEventListener("touchend",ue),_.addEventListener("click",$=>{if(Math.abs(ae)>8)return;const C=_.getBoundingClientRect();$.clientX-C.left>C.width/2?A():E()})}let q=null;function W(){const _=document.getElementById("fireworks-canvas");if(!_)return;_.width=window.innerWidth,_.height=window.innerHeight;const H=_.getContext("2d"),Y=[];function ae(){const j=Math.random()*_.width,U=Math.random()*_.height*.6,le=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],fe=le[Math.floor(Math.random()*le.length)];for(let ue=0;ue<60;ue++){const $=Math.PI*2/60*ue,C=2+Math.random()*5;Y.push({x:j,y:U,vx:Math.cos($)*C,vy:Math.sin($)*C,alpha:1,color:fe,size:2+Math.random()*3})}}ae(),q=setInterval(ae,600);function de(){if(document.getElementById("fireworks-canvas")){H.clearRect(0,0,_.width,_.height);for(let j=Y.length-1;j>=0;j--){const U=Y[j];if(U.x+=U.vx,U.y+=U.vy+.08,U.vy*=.98,U.alpha-=.018,U.alpha<=0){Y.splice(j,1);continue}H.globalAlpha=U.alpha,H.fillStyle=U.color,H.beginPath(),H.arc(U.x,U.y,U.size,0,Math.PI*2),H.fill()}H.globalAlpha=1,(q!==null||Y.length>0)&&requestAnimationFrame(de)}}de()}function ee(){q!==null&&(clearInterval(q),q=null);const _=document.getElementById("fireworks-canvas");_&&_.getContext("2d").clearRect(0,0,_.width,_.height)}if(n){const _=document.getElementById("reveal-btns");_&&(_.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(T=document.getElementById("reveal-next"))==null||T.addEventListener("click",()=>{ee(),r.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{ee(),r.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{ee(),r.remove(),i("boosters")})}function vr(t){var e,i,n,r;if(t.card_type==="player"&&t.player)return gr(t);if(t.card_type==="game_changer"){const o=t._gcDef,a=(o==null?void 0:o.name)||t.gc_type||"Game Changer",s=(o==null?void 0:o.effect)||((e=Bi[t.gc_type])==null?void 0:e.desc)||"",d=o!=null&&o.image_url?`/icons/${o.image_url}`:null,l=((i=Bi[t.gc_type])==null?void 0:i.icon)||"⚡";return tt(a,d,l,s,{width:170})}if(t.card_type==="formation")return Mi(t.formation,Ct[t.formation],{width:160});if(t.card_type==="stadium"){const o=t._stadiumDef,a=(o==null?void 0:o.name)||"Stade",s=((n=o==null?void 0:o.club)==null?void 0:n.encoded_name)||(o==null?void 0:o.country_code)||"—",d=o!=null&&o.image_url?`/icons/${o.image_url}`:((r=o==null?void 0:o.club)==null?void 0:r.logo_url)||(o!=null&&o.country_code?`https://flagsapi.com/${o.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),l=`${s}<br>+10 ⭐ joueurs alliés`;return Rt(a,d,l,{width:170})}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function wr(t){var e,i;if((e=t==null?void 0:t.rates)!=null&&e.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const r={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${t.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${t.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${o[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${r[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}_r()}function _r(){const t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(t),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.getElementById("odds-close").addEventListener("click",()=>t.remove())}function kr(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,e.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(e);let i=5;const n=setInterval(()=>{i--;const r=document.getElementById("mw-ad-cd");r&&(r.textContent=i),i<=0&&(clearInterval(n),e.remove(),t(!0))},1e3)})}async function $r(t,{state:e,navigate:i,toast:n,refreshProfile:r}){var b,x;const{data:o}=await v.from("users").select("*").eq("id",e.user.id).single();o&&(e.profile=o);let a=Array.isArray((b=e.profile)==null?void 0:b.pending_boosters)?[...e.profile.pending_boosters]:[];if(!a.length){await v.from("users").update({onboarding_done:!0}).eq("id",e.user.id),i("home");return}let s=null;try{const p=(await Kn()).find(u=>(u.name||"").toLowerCase().includes("new player"));p&&(s=Yn(p))}catch(g){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',g)}const d=a.length;let l=0;t.innerHTML=`
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
  </div>`;const c=async()=>{await v.from("users").update({pending_boosters:a}).eq("id",e.user.id)};async function f(){var w;if(l>=d||!a.length){await v.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",e.user.id),r&&await r(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const g=a[0],{data:p}=await v.from("users").select("*").eq("id",e.user.id).single();p&&(e.profile=p);let u=[];try{if(g.type==="formation")u=await Jn(e.profile,0);else if(g.type==="game_changer")u=await Xn(e.profile,g.count||3,0);else if(s&&((w=s.rates)!=null&&w.length)){const h={...s,cost:0,cardCount:g.count||s.cardCount||5};u=await qi(e.profile,h),g.guaranteeGK&&!e.profile.first_booster_opened&&(u.some(m=>m.player&&m.player.job==="GK")||await Er(e.profile,u),await v.from("users").update({first_booster_opened:!0}).eq("id",e.profile.id))}else u=await Wn(e.profile,g.count||5,0)}catch(h){n(h.message||"Erreur ouverture booster","error");return}a.shift(),l++,await c();const y=g.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:g.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${l}/${d})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};Qn(u,y,i,()=>{f()})}(x=document.getElementById("onboard-start"))==null||x.addEventListener("click",()=>f())}async function Er(t,e){try{const{data:i}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],r=e.findIndex(a=>a.player);if(r===-1)return;const o=e[r];await v.from("cards").update({player_id:n.id}).eq("id",o.id),e[r]={...o,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const _t={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Lr={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function St(t,e,i,n,r){var o;t.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${e}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",r)}function Di(t,e){var o,a;const i=t.player,n=t.evolution_bonus||0,r=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:t.id,position:e||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&r>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&r>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&r>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&r>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((o=i.clubs)==null?void 0:o.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ri(t,e){if(!e||!t)return t;const{club_id:i,country_code:n}=e;return Object.values(t).forEach(r=>{Array.isArray(r)&&r.forEach(o=>{const a=i&&String(o.club_id)===String(i),s=n&&String(o.country_code)===String(n);(a||s)&&(o.stadiumBonus=!0)})}),t}function gi(t,e){if(!e||!(t!=null&&t.length))return t;const{club_id:i,country_code:n}=e;return t.forEach(r=>{if(!r)return;const o=i&&String(r.club_id)===String(i),a=n&&String(r.country_code)===String(n);(o||a)&&(r.stadiumBonus=!0)}),t}function st(t){return t===1?[1]:t===2?[0,2]:t===3?[0,1,2]:t===4?[0,1,1,2]:t===5?[0,1,1,1,2]:[1]}function Zn(){const t=Math.random()*100;return t<10?10:t<30?5:3}function xi(t,e){const i=_t[e]||_t["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(t.length&&t.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const s=t.filter(l=>l.position&&l.position.replace(/\d+$/,"")===a).sort((l,c)=>parseInt(l.position.replace(/\D+/g,""),10)-parseInt(c.position.replace(/\D+/g,""),10)).map(l=>({...l,_line:a})),d=st(s.length);s.forEach((l,c)=>{l._col=d[c]}),n[a]=s}return n}const o=[...t];for(const a of["GK","DEF","MIL","ATT"]){const s=[];for(let l=0;l<i[a];l++){let c=o.findIndex(f=>f.job===a);if(c===-1&&(c=o.findIndex(f=>f.job2===a)),c===-1&&(c=0),o[c]){const f={...o[c],_line:a};s.push(f),o.splice(c,1)}}const d=st(s.length);s.forEach((l,c)=>{l._col=d[c]}),n[a]=s}return n}function dt(t){document.querySelectorAll(".top-nav, .bottom-nav").forEach(e=>{e.style.setProperty("display","none","important"),e.dataset.matchHidden="1"}),t&&t.style.setProperty("padding-bottom","0","important")}function it(t){document.querySelectorAll(".top-nav, .bottom-nav").forEach(e=>{e.style.removeProperty("display"),delete e.dataset.matchHidden}),t&&t.style.removeProperty("padding-bottom")}function wi(t,e,i){const r=new Set,o=e.filter(c=>{const f=c.gc_type||c.id;return r.has(f)?!1:(r.add(f),!0)});let a=[];function s(c,f){const b=c._gcDef,x=(b==null?void 0:b.name)||c.gc_type,g=b!=null&&b.image_url?`/icons/${b.image_url}`:null,p=tt(x,g,"⚡",(b==null?void 0:b.effect)||"",{width:100});return`<div class="gc-select-card" data-id="${c.id}"
      style="position:relative;flex-shrink:0;cursor:pointer;border-radius:10px;
        outline:${f?"3px solid #FFD700":"none"};
        box-shadow:${f?"0 0 18px #FFD700":"none"};
        transform:${f?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      ${p}
      ${f?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const d=c=>{t.style.overflow="",t.style.height="",t.style.display="",t.style.flexDirection="",i(c)};function l(){var f,b,x;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column";const c=a.length>0;t.innerHTML=`
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
        ${o.map(g=>{const p=a.find(u=>u.gc_type===g.gc_type);return s(g,!!p)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${c?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${c?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${c?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${c?"pointer":"default"};box-shadow:${c?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
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
    </div>`,t.querySelectorAll(".gc-select-card").forEach(g=>{g.addEventListener("click",()=>{const p=g.dataset.id,u=o.find(w=>w.id===p);if(!u)return;const y=a.findIndex(w=>w.gc_type===u.gc_type);y>-1?a.splice(y,1):a.length<3&&a.push(u),l()})}),(f=t.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{c&&d(a)}),(b=t.querySelector("#gc-no-gc"))==null||b.addEventListener("click",()=>d([])),(x=t.querySelector("#gc-reset"))==null||x.addEventListener("click",()=>{a.length&&(a=[],l())})}l()}function Ir(t,e){var r;const i=((r=e==null?void 0:e.state)==null?void 0:r.params)||{},n=t||i.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${i.friendName||"Ami"}`:n==="random"?"Match vs Random":n==="ranked"?"Match Classé":n==="mini_league"||n==="mini-league"?"🏆 Match de Mini League":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function Tr(t,e,i){const{state:n,navigate:r}=e;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await v.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){St(t,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>r("decks"));return}const a=o.map(b=>b.id),{data:s}=await v.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),d=[...new Set((s||[]).filter(b=>{var x,g;return((x=b.card)==null?void 0:x.card_type)==="stadium"&&((g=b.card)==null?void 0:g.stadium_id)}).map(b=>b.card.stadium_id))],l={};if(d.length){const{data:b}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",d);(b||[]).forEach(x=>{l[x.id]=x}),(s||[]).forEach(x=>{var g,p;((g=x.card)==null?void 0:g.card_type)==="stadium"&&((p=x.card)!=null&&p.stadium_id)&&(x.card._stadiumDef=l[x.card.stadium_id]||null)})}let c=0;function f(){var m,A,E,S,q,W,ee;const b=o[c],x=(s||[]).filter(G=>G.deck_id===b.id),g=x.filter(G=>{var T;return G.is_starter&&((T=G.card)==null?void 0:T.player)}).map(G=>Di(G.card,G.position)),p=x.find(G=>{var T;return((T=G.card)==null?void 0:T.card_type)==="formation"}),u=b.formation||((m=p==null?void 0:p.card)==null?void 0:m.formation)||"4-4-2";let y=g.length>=11?xi(g,u):null,w=((A=b.stadium_card)==null?void 0:A.stadium_def)||null;w&&y&&(y=ri(y,w));const h=g.length>=11;dt(t),t.style.height="100%",t.style.overflow="hidden",t.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff;position:relative">
      <button id="cancel-deck-select" style="position:absolute;top:8px;right:10px;z-index:10;width:32px;height:32px;border-radius:50%;border:none;background:rgba(180,30,30,0.85);color:#fff;font-size:18px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Ir(i,e)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${c===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===0?"0.1":"0.3"});color:${c===0?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${c===0?"default":"pointer"};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${b.name}</div>
            <div style="font-size:11px;opacity:.6">${u} · ${g.length}/11${b.is_active?" · ⭐":""}</div>
          </div>
          <button id="next-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${c===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===o.length-1?"0.1":"0.3"});color:${c===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${c===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
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
          <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((E=w.club)==null?void 0:E.encoded_name)||w.country_code||""}</span>
        </div>`:""}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${y?'<div class="deck-preview-wrap" style="overflow:hidden;width:100%;height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${g.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${o.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${o.map((G,T)=>`<div style="width:6px;height:6px;border-radius:50%;background:${T===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${h?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${h?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${h?"pointer":"default"}">
          ${h?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function G(){const T=t.querySelector(".deck-preview-wrap"),_=t.querySelector("#deck-swipe-zone");if(!T||!_||!y)return;const H=_.clientWidth>=900,Y=Math.max(200,_.clientHeight-(H?60:40)),de=Math.max(200,_.clientWidth-16),j=H?Math.min(117,Math.max(52,Math.round(de*.22))):Math.max(44,Math.round(de*.168));if(Y<220||de<220){requestAnimationFrame(G);return}const U=H?null:Math.round(j*.55);T.innerHTML=Ot(y,u,null,[],de,Y,[],U),T.style.cssText=`width:${de}px;height:${Y}px;overflow:hidden;margin:${H?0:60}px auto 0`;const le=T.querySelector("svg");le&&(le.style.cssText="display:block;width:100%;height:100%",le.setAttribute("preserveAspectRatio",H?"xMidYMid meet":"none"))})),(S=document.getElementById("prev-deck"))==null||S.addEventListener("click",()=>{c>0&&(c--,f())}),(q=document.getElementById("next-deck"))==null||q.addEventListener("click",()=>{c<o.length-1&&(c++,f())}),(W=document.getElementById("validate-deck"))==null||W.addEventListener("click",()=>{if(!h)return;const G=e.state.params||{};e.navigate("match",{...G,matchMode:G.matchMode||i,deckId:b.id})}),(ee=document.getElementById("cancel-deck-select"))==null||ee.addEventListener("click",()=>{it(t),r("home")});const L=document.getElementById("deck-swipe-zone");if(L){let G=0,T=0;L.addEventListener("touchstart",_=>{G=_.touches[0].clientX,T=_.touches[0].clientY},{passive:!0}),L.addEventListener("touchend",_=>{const H=_.changedTouches[0].clientX-G,Y=_.changedTouches[0].clientY-T;Math.abs(H)<40||Math.abs(H)<Math.abs(Y)||(H<0&&c<o.length-1?(c++,f()):H>0&&c>0&&(c--,f()))},{passive:!0})}}f()}function vt(t,e=44,i=58,n=null){return Se(t,{width:e,showStad:!!n,stadDef:n,used:t==null?void 0:t.used})}function Je(t,e,i,n,r){if(!(t!=null&&t.length))return"";const o=t.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return o.forEach((s,d)=>{const l=s._line||s.job||"MIL";let c=s.boost||0;if(s.stadiumBonus&&(n==="attack"&&(l==="ATT"||l==="MIL")||n==="defense"&&(l==="GK"||l==="DEF"||l==="MIL")?c+=10:n||(c+=10)),a+=Se(s,{width:40,role:l,extraNote:c}),d<o.length-1){const f=o[d+1],b=On(s,f,r)?Ut(s,f):null;a+=`<div style="width:7px;height:3px;background:${!b||b==="#ff3333"||b==="#cc2222"?"rgba(255,255,255,0.12)":b};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${e};color:${e==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function _i(t,e,i,n,r=310,o=310,a=[],s=null){const d=Ct[e]||{},l=Oi(e)||Hi[e]||[],c={},f=["ATT","MIL","DEF","GK"];for(const y of f)(t[y]||[]).forEach((h,L)=>{c[`${y}${L+1}`]=h});function b(y){const w=d[y];return w?{x:w.x*r,y:w.y*o}:null}let x="";for(const[y,w]of l){const h=b(y),L=b(w);if(!h||!L)continue;const m=c[y],A=c[w],E=Ut(m,A);E==="#00ff88"||E==="#FFD700"?(x+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${E}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,x+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${E}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):x+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${E}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=typeof window<"u"&&window.innerWidth>=900?Math.min(Math.max(81,Math.round(r*.225)),117):Math.max(44,Math.round(r*.168)),p=Math.round(g*657/507);for(const[y,w]of Object.entries(c)){const h=b(y);if(!h||!w)continue;const L=y.replace(/[0-9]/g,""),m=a.includes(w.cardId),A=i==="attack"&&(["MIL","ATT"].includes(L)||m)&&!w.used||i==="defense"&&["GK","DEF","MIL"].includes(L)&&!w.used,E=n.includes(w.cardId);let S=w.boost||0,q=!1;w.stadiumBonus&&(i==="attack"&&(L==="ATT"||L==="MIL")||i==="defense"&&(L==="GK"||L==="DEF"||L==="MIL")?(S+=10,q=!0):i||(S+=10,q=!0));const W=Math.round(h.x-g/2),ee=Math.round(h.y-p/2);if(w.used){x+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${W}" y="${ee}" width="${g}" height="${p}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${w.cardId}" data-role="${L}" style="cursor:pointer"/>`;continue}const G=Se({...w,_evolution_bonus:0,stadiumBonus:!1},{width:g,showStad:!1,stadDef:null,role:L,extraNote:S,_cardOffset:30,_forceStadColor:q}),T=E?`position:absolute;top:30px;left:0;width:${g}px;height:${p}px;outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;pointer-events:none;`:"";x+=`<foreignObject x="${W-2}" y="${ee-30}" width="${g+8}" height="${p+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">
        ${G}
        ${E?`<div style="${T}"></div>`:""}
      </div>
    </foreignObject>`,A&&(x+=`<rect x="${W}" y="${ee}" width="${g}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${E?"selected":""}" data-card-id="${w.cardId}" data-role="${L}" style="cursor:pointer"/>`)}const u=s!==null?s:Math.round(Math.max(g*.7,80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-u} ${-u} ${r+u*2} ${o+u*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${x}
  </svg>`}function Ot(t,e,i,n,r=300,o=300,a=[],s=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${_i(t,e,i,n,r,o,a,s)}
  </div>`}async function ki(t,e,i,n){var A;const{state:r,navigate:o,toast:a}=e;dt(t);const s=r.params||{};if(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return Tr(t,e,i);const d=s.deckId;let l,c,f,b;try{const E=await Promise.all([v.from("decks").select("formation,name,stadium_card_id").eq("id",d).single(),v.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",d).order("slot_order")]);l=E[0].data,f=E[0].error,c=E[1].data,b=E[1].error}catch(E){console.error("[Match] Exception chargement deck:",E),St(t,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>o("home"));return}if(f||b){console.error("[Match] Erreur Supabase:",f||b),St(t,"⚠️","Erreur lors du chargement du deck.","Retour",()=>o("home"));return}const x=(c||[]).filter(E=>{var S;return E.is_starter&&((S=E.card)==null?void 0:S.player)}).map(E=>Di(E.card,E.position)),g=(c||[]).filter(E=>{var S;return!E.is_starter&&((S=E.card)==null?void 0:S.player)}).map(E=>Di(E.card,E.position));if(x.length<11){St(t,"⚠️",`Deck incomplet (${x.length}/11).`,"Compléter",()=>o("decks"));return}const p=(c||[]).find(E=>{var S;return((S=E.card)==null?void 0:S.card_type)==="formation"}),u=(l==null?void 0:l.formation)||((A=p==null?void 0:p.card)==null?void 0:A.formation)||"4-4-2",{data:y,error:w}=await v.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",r.profile.id).eq("card_type","game_changer"),{data:h}=await v.from("gc_definitions").select("*").eq("is_active",!0),L=(y||[]).map(E=>({...E,_gcDef:(h==null?void 0:h.find(S=>S.name===E.gc_type||S.id===E.gc_definition_id))||null}));let m=null;if(l!=null&&l.stadium_card_id){const{data:E}=await v.from("cards").select("stadium_id").eq("id",l.stadium_card_id).single();if(E!=null&&E.stadium_id){const{data:S}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",E.stadium_id).single();m=S||null}}n({deckId:d,formation:u,starters:x,subsRaw:g,gcCardsEnriched:L,gcDefs:h||[],stadiumDef:m})}function zt(){return Math.min(window.innerWidth-40,860)}function Gt(){return Math.round(zt()*1.1)}function eo(t){var r,o;if(!t)return null;const e=t._line||t.job||"MIL",i=e==="GK"?t.note_g||0:e==="DEF"?t.note_d||0:e==="MIL"?t.note_m||0:t.note_a||0,n=t.stadiumBonus?10:0;return{name:t.name,firstname:t.firstname||"",note:i+(t.boost||0)+n,note_g:t.note_g||0,note_d:t.note_d||0,note_m:t.note_m||0,note_a:t.note_a||0,_evolution_bonus:0,stadiumBonus:t.stadiumBonus||!1,boost:t.boost||0,job:t.job,job2:t.job2||null,_line:t._line||t.job,_col:t._col,country_code:t.country_code,club_id:t.club_id,rarity:t.rarity,clubName:t.clubName||((r=t.clubs)==null?void 0:r.encoded_name)||null,clubLogo:t.clubLogo||((o=t.clubs)==null?void 0:o.logo_url)||null,face:t.face||null,portrait:Mt(t)}}function Sr(t,e,i,n="Adversaire"){jn("/sounds/match-opening.mp3",.3);const r=zt(),o=Gt();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${n}</div>
      
      <div style="width:100%;max-width:${r}px;margin:0 auto">
        ${_i(t,e,null,[],r,o)}
      </div>
    </div>`}function to(t){var o,a,s;if(!t)return"";const e=d=>d?Se({...d,_evolution_bonus:0},{width:52,role:d._line||d.job,showStad:!!d.stadiumBonus,extraNote:d.boost||0}):"",n={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[t.type]||"📋";return`
    <div style="padding:8px 12px;border-left:3px solid ${((o=t.type)==null?void 0:o.includes("goal"))?"#22c55e":"rgba(255,255,255,0.15)"};margin-bottom:4px">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px;text-align:center">${n} ${t.title||t.text||""}</div>
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
    </div>`}function Qe(t,e,i,n,r){Ji("/sounds/goal.mp3",.7);const o=document.getElementById("goal-anim-overlay");o&&o.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(t||[]).slice(0,3).map(d=>Se({...d,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:d._line||d.job,showStad:!!d.stadiumBonus})).join("");if(a.innerHTML=`
    <div style="animation:goalPop 0.4s ease-out;text-align:center">
      <div style="font-size:clamp(48px,10vw,80px);margin-bottom:8px">⚽</div>
      <div style="font-size:clamp(28px,6vw,48px);font-weight:900;color:#22c55e;letter-spacing:2px;text-shadow:0 0 20px #22c55e">BUT !</div>
      <div style="display:flex;gap:8px;justify-content:center;margin:16px 0">${s}</div>
      <div style="font-size:clamp(32px,7vw,56px);font-weight:900;color:#fff;margin-top:8px">
        ${n?`<span style="color:#22c55e">${e}</span>`:e}
        <span style="color:rgba(255,255,255,0.4);margin:0 12px">—</span>
        ${n?i:`<span style="color:#22c55e">${i}</span>`}
      </div>
    </div>`,document.body.appendChild(a),!document.getElementById("goal-anim-style")){const d=document.createElement("style");d.id="goal-anim-style",d.textContent=`
      @keyframes goalPop {
        from { transform: scale(0.5); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }`,document.head.appendChild(d)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),r==null||r()},400)},1800)}function zr(t,e,i){const n=document.getElementById("sub-anim-overlay");n&&n.remove();const r=document.createElement("div");r.id="sub-anim-overlay",r.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const o=Math.min(120,Math.round(window.innerWidth/4)),a=t?Se({...t,_evolution_bonus:0},{width:o,role:t._line||t.job}):"",s=e?Se({...e,_evolution_bonus:0},{width:o,role:e._line||e.job}):"";r.innerHTML=`
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
    </div>`,document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.4s",setTimeout(()=>{r.remove(),i==null||i()},400)},1600)}function Et(t,e="rgba(0,0,0,0.85)",i=2200){const n=document.getElementById("game-toast");n&&n.remove();const r=document.createElement("div");if(r.id="game-toast",r.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${e};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,r.textContent=t,!document.getElementById("game-toast-style")){const o=document.createElement("style");o.id="game-toast-style",o.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(o)}document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.3s",setTimeout(()=>r.remove(),300)},i)}function io(t,e){const i=Pe(t,"MIL"),n=t.stadiumBonus||e&&(e.club_id&&String(t.club_id)===String(e.club_id)||e.country_code&&t.country_code===e.country_code)?10:0;return i+n}function bt(t,e){return t.reduce((i,n)=>i+io(n,e),0)}function yt(t){let e=0;for(let i=0;i<t.length-1;i++){const n=Ut(t[i],t[i+1]);n==="#00ff88"?e+=10:n==="#FFD700"&&(e+=5)}return e}function bi(t,e,i,n,r){return`<div id="duel-row-${n}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${e}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${t.map((o,a)=>{const s=a<t.length-1?Ut(o,t[a+1]):null,d=!s||s==="#ff3333"||s==="#cc2222",l=s==="#00ff88"?"+10":s==="#FFD700"?"+5":"";return io(o,r),o.stadiumBonus||r&&(r.club_id&&String(o.club_id)===String(r.club_id)||r.country_code&&(o.country_code,r.country_code)),`
          <div class="duel-card duel-card-${n}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Se({...o,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:r,role:"MIL",extraNote:o.boost||0})}
          </div>
          ${a<t.length-1?`<div class="duel-link duel-link-${n}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${d?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${d?"none":`0 0 8px ${s}`}">
            ${l?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${l}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${n}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${bt(t,r)} + ${yt(t)} liens = <b style="color:#fff">${bt(t,r)+yt(t)}</b>
      </div>
    </div>`}async function Ar(t,e){const{state:i}=e,n=i.params||{},r=n.matchMode||"vs_ai_easy",o=r==="solo",a=n.soloLevel||1,s=r.replace("vs_ai_",""),d=r;let l=null;if(o){const{data:c}=await v.from("solo_levels").select("*").eq("level_number",a).maybeSingle();l=c||{level_number:a,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500}}await ki(t,e,r,async({deckId:c,formation:f,starters:b,subsRaw:x,gcCardsEnriched:g,gcDefs:p,stadiumDef:u})=>{try{let y=xi(b,f);u&&(y=ri(y,u),gi(x,u));const w=o?await Cr(f,l):await Mr(f,s),h=w.lines||w,L=async m=>{try{const A=d==="vs_ai_club"||d==="solo"?"club":d,{data:E,error:S}=await v.from("matches").insert({home_id:i.profile.id,away_id:null,mode:A,home_deck_id:c,status:"in_progress"}).select().single();if(S){console.error("[MatchIA] Erreur création match:",S),St(t,"⚠️","Impossible de créer le match ("+S.message+").","Retour",()=>e.navigate("home"));return}const q=w.stadiumDef||null;q&&h&&(ri(h,q),gi(w.subs||[],q));const W={gcDefs:p||[],matchId:E==null?void 0:E.id,mode:d,difficulty:s,formation:f,isSolo:o,soloLevel:a,soloLevelConfig:l,homeTeam:y,aiTeam:h,homeSubs:x,subsUsed:0,maxSubs:Math.min(x.length,3),aiSubs:w.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((w.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:w.gcCards||[],aiUsedGc:[],aiStadiumDef:q,homeScore:0,aiScore:0,gcCards:m,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};jr(t,W,e)}catch(A){console.error("[MatchIA] Exception launchMatch:",A),St(t,"⚠️","Erreur au lancement du match : "+A.message,"Retour",()=>e.navigate("home"))}};if(!g.length){L([]);return}wi(t,g,L)}catch(y){console.error("[MatchIA] Exception setup:",y),St(t,"⚠️","Erreur de préparation du match : "+y.message,"Retour",()=>e.navigate("home"))}})}async function Mr(t,e){var u;const{data:i}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:no(t),subs:[],gcCards:[],stadiumDef:null};const n=_t[t]||_t["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},o=new Set;function a(y,w,h){var L,m;return o.add(y.id),{cardId:"ai-"+y.id+"-"+h,id:y.id,firstname:y.firstname,name:y.surname_real,country_code:y.country_code,club_id:y.club_id,job:y.job,job2:y.job2,note_g:Number(y.note_g)||0,note_d:Number(y.note_d)||0,note_m:Number(y.note_m)||0,note_a:Number(y.note_a)||0,rarity:y.rarity,skin:y.skin,hair:y.hair,hair_length:y.hair_length,face:y.face,clubName:((L=y.clubs)==null?void 0:L.encoded_name)||null,clubLogo:((m=y.clubs)==null?void 0:m.logo_url)||null,boost:0,used:!1,_line:w}}for(const y of["GK","DEF","MIL","ATT"]){const w=i.filter(E=>E.job===y&&!o.has(E.id)),h=i.filter(E=>E.job!==y&&!o.has(E.id)),L=[...w,...h],m=[];for(let E=0;E<n[y];E++){const S=L[E];S&&m.push(a(S,y,E))}const A=st(m.length);m.forEach((E,S)=>{E._col=A[S]}),r[y]=m}const d=i.filter(y=>!o.has(y.id)).slice(0,5).map((y,w)=>a(y,y.job,100+w)),f=Object.keys(ze).sort(()=>Math.random()-.5).slice(0,3).map((y,w)=>{var h,L;return{id:"ai-gc-"+w,gc_type:y,name:((h=ze[y])==null?void 0:h.name)||y,icon:((L=ze[y])==null?void 0:L.icon)||"⚡"}}),b=Object.values(r).flat(),x={};b.forEach(y=>{y.club_id&&(x[y.club_id]=(x[y.club_id]||0)+1)});const g=(u=Object.entries(x).sort((y,w)=>w[1]-y[1])[0])==null?void 0:u[0];let p=null;if(g){const{data:y}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",g).single();y&&(p={club_id:y.id,country_code:null,name:y.encoded_name+" Stadium",club:{encoded_name:y.encoded_name,logo_url:y.logo_url}})}return{lines:r,subs:d,gcCards:f,stadiumDef:p}}function $n(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}function ci(t,e,i){if(i<=0||!t.length)return[];const n=[...t].sort((r,o)=>Math.abs($n(r)-e)-Math.abs($n(o)-e));return n.slice(0,Math.min(i,n.length))}async function Cr(t,e){var G,T;const i=Number(e==null?void 0:e.target_note_avg)||10,n=Number(e==null?void 0:e.nb_liens_jaune)||0,r=Number(e==null?void 0:e.nb_liens_vert)||0,o=Number(e==null?void 0:e.nb_joueurs_stade)||0,{data:a}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url,country_code)").eq("is_active",!0).limit(300);if(!a||a.length<16)return{lines:no(t),subs:[],gcCards:[],stadiumDef:null};const s={};a.forEach(_=>{_.club_id&&(s[_.club_id]=(s[_.club_id]||0)+1)});const d=((G=Object.entries(s).sort((_,H)=>H[1]-_[1])[0])==null?void 0:G[0])||null,l=d?a.filter(_=>_.club_id===d):[],c=((T=l[0])==null?void 0:T.country_code)||null,f=c?a.filter(_=>_.country_code===c&&_.club_id!==d):[],b=Math.min(l.length,Math.max(2,r+1),16),x=Math.min(f.length,Math.max(0,n),16-b),g=[],p=new Set;ci(l,i,b).forEach(_=>{g.push(_),p.add(_.id)}),ci(f,i,x).forEach(_=>{g.push(_),p.add(_.id)});const u=Math.max(0,16-g.length),y=a.filter(_=>!p.has(_.id));ci(y,i,u).forEach(_=>{g.push(_),p.add(_.id)});const w=_t[t]||_t["4-4-2"],h={GK:[],DEF:[],MIL:[],ATT:[]},L=new Set;function m(_,H,Y){var ae,de;return L.add(_.id),{cardId:"ai-"+_.id+"-"+Y,id:_.id,firstname:_.firstname,name:_.surname_real,country_code:_.country_code,club_id:_.club_id,job:_.job,job2:_.job2,note_g:Number(_.note_g)||0,note_d:Number(_.note_d)||0,note_m:Number(_.note_m)||0,note_a:Number(_.note_a)||0,rarity:_.rarity,skin:_.skin,hair:_.hair,hair_length:_.hair_length,face:_.face,clubName:((ae=_.clubs)==null?void 0:ae.encoded_name)||null,clubLogo:((de=_.clubs)==null?void 0:de.logo_url)||null,boost:0,used:!1,_line:H}}for(const _ of["GK","DEF","MIL","ATT"]){const H=g.filter(U=>U.job===_&&!L.has(U.id)),Y=g.filter(U=>U.job!==_&&!L.has(U.id)),ae=[...H,...Y],de=[];for(let U=0;U<w[_];U++){const le=ae[U];le&&de.push(m(le,_,U))}const j=st(de.length);de.forEach((U,le)=>{U._col=j[le]}),h[_]=de}let A=g.filter(_=>!L.has(_.id));if(A.length<5){const _=a.filter(H=>!L.has(H.id)&&!A.some(Y=>Y.id===H.id));A=A.concat(ci(_,i,5-A.length))}const E=A.slice(0,5).map((_,H)=>m(_,_.job,100+H)),W=Object.keys(ze).sort(()=>Math.random()-.5).slice(0,3).map((_,H)=>{var Y,ae;return{id:"ai-gc-"+H,gc_type:_,name:((Y=ze[_])==null?void 0:Y.name)||_,icon:((ae=ze[_])==null?void 0:ae.icon)||"⚡"}});let ee=null;if(o>0&&d){const{data:_}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",d).single();_&&(ee={club_id:_.id,country_code:null,name:_.encoded_name+" Stadium",club:{encoded_name:_.encoded_name,logo_url:_.logo_url}})}return{lines:h,subs:E,gcCards:W,stadiumDef:ee}}function no(t){const e=_t[t]||_t["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let r=0;for(const o of["GK","DEF","MIL","ATT"]){const a=[];for(let d=0;d<e[o];d++){const l=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+r,id:"fake-"+r,firstname:"IA",name:n[r%n.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?l:2,note_d:o==="DEF"?l:2,note_m:o==="MIL"?l:2,note_a:o==="ATT"?l:2,rarity:"normal",boost:0,used:!1,_line:o}),r++}const s=st(a.length);a.forEach((d,l)=>{d._col=s[l]}),i[o]=a}return i}function jr(t,e,i){var r;jn("/sounds/match-opening.mp3",.3);const n=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${e.isSolo?`SOLO — NIVEAU ${e.soloLevel}`:`IA (${e.difficulty.toUpperCase()})`}</div>
    </div>
    ${e.aiStadiumDef?`
    <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(30,100,220,0.35),rgba(10,60,180,0.15));border-bottom:1px solid rgba(30,120,255,0.45);flex-shrink:0">
      ${n}
      <span style="font-size:12px;font-weight:700">${e.aiStadiumDef.name}</span>
      <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((r=e.aiStadiumDef.club)==null?void 0:r.encoded_name)||e.aiStadiumDef.country_code||""}</span>
    </div>`:""}
    <div id="opponent-swipe-zone" style="flex:1;min-height:0;overflow:hidden;display:flex;align-items:center;justify-content:center">
      <div class="opponent-preview-wrap" style="overflow:hidden;display:flex;align-items:center;justify-content:center"></div>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const o=t.querySelector(".opponent-preview-wrap"),a=t.querySelector("#opponent-swipe-zone");if(!o||!a)return;const s=a.clientWidth>=900,d=Math.max(200,a.clientHeight-(s?8:40)),l=Math.max(200,a.clientWidth-(s?8:16)),c=s?null:Math.round(Math.max(44,Math.round(l*.168))*.55);o.innerHTML=Ot(e.aiTeam,e.formation,null,[],l,d,[],c),o.style.cssText=`width:${l}px;height:${d}px;overflow:hidden;flex-shrink:0`;const f=o.querySelector("svg");f&&(f.style.cssText="display:block;width:100%;height:100%",f.setAttribute("preserveAspectRatio",s?"xMidYMid meet":"none"))})),setTimeout(()=>Br(t,e,i),5e3)}const Ke=t=>eo(t);function Br(t,e,i){const n=e.homeTeam.MIL||[],r=e.aiTeam.MIL||[],o=e.stadiumDef||null,a=e.aiStadiumDef||null,s=bt(n,o)+yt(n),d=bt(r,a)+yt(r),l=s>=d;t.innerHTML=`
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

    ${bi(n,e.clubName,"#D4A017","home",o)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${bi(r,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const c=()=>{const g=(p,u)=>t.querySelectorAll(p).forEach((y,w)=>{setTimeout(()=>{y.style.opacity="1",y.style.transform="translateY(0) scale(1)"},u+w*90)});g(".duel-card-home",150),g(".duel-card-ai",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((p,u)=>{setTimeout(()=>{p.style.opacity="1"},u*70)}),900),setTimeout(()=>{const p=t.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(u=>u.style.opacity="1")},1250),setTimeout(()=>{f("score-home",s,800),f("score-ai",d,800)},1500)};function f(g,p,u){const y=document.getElementById(g);if(!y)return;const w=performance.now(),h=L=>{const m=Math.min(1,(L-w)/u);y.textContent=Math.round(p*(1-Math.pow(1-m,3))),m<1?requestAnimationFrame(h):y.textContent=p};requestAnimationFrame(h)}requestAnimationFrame(c),e.attacker=l?"home":"ai";const b=l?Zn():null;l&&(e.boostCard={value:b}),e.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(g=>Ke(g)),aiPlayers:r.map(g=>Ke(g)),homeTotal:s,aiTotal:d,text:`Duel milieu : ${e.clubName} ${s} – ${d} IA → ${l?e.clubName+" attaque":"IA attaque"}`});const x=()=>{e.phase=e.attacker==="home"?"attack":"ai-attack",ke(t,e,i),e.attacker==="ai"&&setTimeout(()=>tn(t,e,i),800)};setTimeout(()=>{const g=document.getElementById("score-home"),p=document.getElementById("score-ai"),u=document.getElementById(l?"duel-row-home":"duel-row-ai"),y=document.getElementById(l?"duel-row-ai":"duel-row-home"),w=l?g:p,h=l?p:g;w&&(w.style.fontSize="80px",w.style.color=l?"#FFD700":"#ff6b6b",w.style.animation="duelPulse .5s ease"+(l?", duelGlow 1.5s ease infinite .5s":"")),h&&(h.style.opacity="0.25"),setTimeout(()=>{u&&(u.style.transformOrigin="center",u.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",u.style.zIndex="5"),setTimeout(()=>{var m;const L=document.getElementById("duel-shock");if(L){const A=(m=y||u)==null?void 0:m.getBoundingClientRect(),E=t.querySelector(".match-screen").getBoundingClientRect();A&&(L.style.top=A.top-E.top+A.height/2+"px"),L.style.animation="shockwave .5s ease-out forwards"}y&&(y.style.transformOrigin="center",y.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var m;const L=document.getElementById("duel-finale");L&&(L.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${l?`⚽ ${e.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${l?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${b}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,L.style.transition="opacity .45s ease",L.style.opacity="1",L.style.pointerEvents="auto",(m=document.getElementById("start-match-btn"))==null||m.addEventListener("click",x))},600)},700)},2800)}function ke(t,e,i){var W,ee,G,T,_,H,Y,ae,de;const n=e.selected.map(j=>j.cardId),r=e.usedSubIds||[],o=e.homeSubs.filter(j=>!r.includes(j.cardId)),s=Object.values(e.homeTeam).flat().filter(j=>j.used).length>0&&o.length>0&&e.subsUsed<e.maxSubs,d=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(j=>!j.used),l=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(j=>!j.used),c=Ht(e.aiTeam),f=d.length===0&&l.length===0&&!c,b=(e.homeTeam.DEF||[]).filter(j=>!j.used),x=(e.homeTeam.GK||[]).filter(j=>!j.used);let g=[];e.phase==="attack"&&d.length===0&&(c?(g=b.map(j=>j.cardId),b.length===0&&(g=g.concat(x.map(j=>j.cardId)))):f&&(g=[...b,...x].map(j=>j.cardId))),e.log[e.log.length-1];const p=e.phase==="ai-attack"||e.phase==="ai-defense",u=e.phase==="attack",y=e.phase==="defense",w=e.phase==="finished",L=(e.homeSubs||[]).filter(j=>!(e.usedSubIds||[]).includes(j.cardId)).length>0&&e.subsUsed<e.maxSubs,m=u&&d.length===0&&g.length===0&&!L,A=e.gcCards.filter(j=>!e.usedGc.includes(j.id)),E=e.boostCard&&!e.boostUsed;t.style.overflow="hidden",t.style.height="100%",t.style.display="flex",t.style.flexDirection="column",t.innerHTML=`
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
        <span style="font-size:12px;color:rgba(255,255,255,0.5)">${e.isSolo?`SOLO — NIVEAU ${e.soloLevel}`:`IA (${e.difficulty.toUpperCase()})`}</span>
      </div>
      <button id="view-ai" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
    </div>

    <!-- ZONE ACTIONS -->
    <div id="last-action-zone" style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">
      ${(()=>{if(e.phase==="defense"&&e.pendingAttack){const U=e.pendingAttack;let le="";if(e.selected.length>0){const fe=e.selected.map($=>({...(e.homeTeam[$._role]||[]).find(O=>O.cardId===$.cardId)||$,_line:$._role})),ue=oi(fe,e.modifiers.home,e.formation);le=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${e.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${Je(fe.map($=>({...$,used:!1})),"#3a7bd5",ue.total,"defense",e.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${Je((U.players||[]).map(fe=>({...fe,used:!1})),"#ff6b6b",U.total,"attack",e.formation)}</div>
            ${le}
          </div>`}if(e.phase==="ai-defense"&&e.pendingAttack){const U=e.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${Je((U.players||[]).map(le=>({...le,used:!1})),"#00ff88",U.total,"attack",e.formation)}</div>
          </div>`}if(e.phase==="attack"&&e.selected.length>0){const U=e.selected.map(fe=>{const ue=(e.homeTeam[fe._role]||[]).find(C=>C.cardId===fe.cardId)||fe,$=["GK","DEF"].includes(fe._role);return{...ue,_line:fe._role,...$?{note_a:Math.max(1,Number(ue.note_a)||0)}:{}}}),le=ni(U,e.modifiers.home,e.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${e.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${Je(U.map(fe=>({...fe,used:!1})),"#FFD700",le.total,"attack",e.formation)}</div>
          </div>`}const j=e.log[e.log.length-1];return j?'<div style="padding:2px 4px">'+to(j)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${e.log.length})
    </button>

    ${(()=>{const j=window.innerWidth>=700,U=(D,K,pe)=>{var Ae,Be;const ne=(e.gcDefs||[]).find($e=>$e.name===D.gc_type),me=(ne==null?void 0:ne.name)||D.gc_type,we=(ne==null?void 0:ne.effect)||((Ae=ze[D.gc_type])==null?void 0:Ae.desc)||"",he=ne!=null&&ne.image_url?`/icons/${ne.image_url}`:null,Ie=((Be=ze[D.gc_type])==null?void 0:Be.icon)||"⚡";return`<div class="gc-mini" data-gc-id="${D.id}" data-gc-type="${D.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${tt(me,he,Ie,we,{width:K})}
        </div>`},le=(D,K)=>{var pe;return`<div id="boost-card"
          style="box-sizing:border-box;width:${D}px;height:${K}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(K*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(K*.2)}px">⚡</div>
            <div style="font-size:${Math.round(K*.09)}px;color:#000;font-weight:900">+${(pe=e.boostCard)==null?void 0:pe.value}</div>
          </div>`},fe=(D,K)=>K?le(95,162):U(D,95),ue=(D,K)=>K?le(53,90):U(D,53),$=j?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",C=w?`<button id="btn-results" style="${$};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:p?`<div style="${$};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:m?`<button id="btn-pass" style="${$};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:u?`<button id="btn-action" style="${$};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${e.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:y?`<button id="btn-action" style="${$};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${e.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${$};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,O=u||y?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${e.selected.length}/3 sélectionné(s)</div>`:"",P=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${j?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(D=>`<div class="sub-btn-col" data-sub-id="${D.cardId}" style="cursor:pointer;flex-shrink:0">${vt(D,76,100)}</div>`).join("")}
      </div>`,X=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${Ot(e.homeTeam,e.formation,e.phase,n,j?1300:zt(),j?600:Gt(),g)}
        </div>
      </div>`;return j?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${P}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${X}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${C}${O}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${A.map(D=>fe(D,!1)).join("")}
            ${E?fe(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ot(e.homeTeam,e.formation,e.phase,n,j?1300:zt(),j?600:Gt(),g)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${A.map(D=>ue(D,!1)).join("")}
            ${E?ue(null,!0):""}
            <div id="sub-btn-main" style="cursor:${s?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${s?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${s?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${s?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${o.length}</div>
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
          <div>${C}${O}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${e.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...e.log].reverse().map(j=>{var U,le,fe;if(j.type==="duel"){const ue=j.isGoal,$=j.homeScored?"#FFD700":ue?"#ff6b6b":"rgba(255,255,255,0.3)",C=j.homeScored?"⚽ BUT !":ue?"⚽ BUT IA !":(U=j.homePlayers)!=null&&U.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${ue?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${$};margin-bottom:4px">
                <div style="font-size:9px;color:${$};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${C}</div>
                ${(le=j.homePlayers)!=null&&le.length?`<div style="margin-bottom:3px">${Je(j.homePlayers,"rgba(255,255,255,0.7)",j.homeTotal,void 0,e.formation)}</div>`:""}
                ${(fe=j.aiPlayers)!=null&&fe.length?`<div style="opacity:0.7">${Je(j.aiPlayers,"#ff6b6b",j.aiTotal,void 0,e.formation)}</div>`:""}
              </div>`}return j.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${j.outPlayer?vt({...j.outPlayer,used:!0,_line:j.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${j.inPlayer?vt({...j.inPlayer,_line:j.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:j.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${j.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${j.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function S(){const j=t.querySelector(".match-screen");if(!j)return;const U=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);j.style.bottom="auto",j.style.height=U+"px",j.style.minHeight=U+"px",j.style.maxHeight=U+"px",j.style.overflow="hidden";const le=t.querySelector("#mobile-action-bar"),fe=t.querySelector("#mobile-play-area");le&&fe&&(fe.style.paddingBottom=le.offsetHeight+"px")}if(S(),setTimeout(S,120),setTimeout(S,400),setTimeout(S,1e3),e._vvBound||(e._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",S),window.visualViewport.addEventListener("scroll",S)),window.addEventListener("resize",S)),function(){const U=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!U)return;const le=U.closest("#match-terrain-wrap");le&&(le.style.cssText="position:relative;width:100%;height:100%;padding:0"),U.removeAttribute("width"),U.removeAttribute("height"),U.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",U.setAttribute("preserveAspectRatio","xMidYMid meet")}(),e._resizeBound||(e._resizeBound=!0,window.addEventListener("resize",()=>{const j=t.querySelector(".terrain-wrapper svg");if(j){const U=j.closest("#match-terrain-wrap");U&&(U.style.cssText="position:relative;width:100%;height:100%;padding:0"),j.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ue(),e.phase==="attack"||e.phase==="defense"){let j=!1,U=30;const le=()=>document.getElementById("match-timer"),fe=()=>{const ue=le();if(!ue)return;const $=String(Math.floor(U/60)).padStart(2,"0"),C=String(U%60).padStart(2,"0");ue.textContent=` ${$}:${C}`,ue.style.color=j?"#ff2222":"#ff9500",ue.style.fontWeight="900"};fe(),e._timerInt=setInterval(()=>{if(U--,U<0)if(!j)j=!0,U=15,fe(),Bn("/sounds/timer-urgent.mp3",.6);else{clearInterval(e._timerInt),e._timerInt=null,Ue(),e.homeScore=0,e.aiScore=3;const ue=document.createElement("div");ue.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",ue.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(ue),setTimeout(()=>{ue.remove(),ht(t,e,i)},2500)}else fe()},1e3)}(W=document.getElementById("match-quit"))==null||W.addEventListener("click",()=>{it(t),confirm("Abandonner ? Résultat : défaite 3-0")&&(e.homeScore=0,e.aiScore=3,ht(t,e,i))}),(ee=document.getElementById("view-ai"))==null||ee.addEventListener("click",()=>Kr(e,i)),(G=document.getElementById("toggle-history"))==null||G.addEventListener("click",()=>{var j;(j=document.getElementById("match-history-panel"))==null||j.classList.add("open")}),(T=document.getElementById("close-history"))==null||T.addEventListener("click",()=>{var j;(j=document.getElementById("match-history-panel"))==null||j.classList.remove("open")}),(_=document.getElementById("btn-action"))==null||_.addEventListener("click",()=>{e.selected.length!==0&&(u?Dr(t,e,i):y&&Fr(t,e,i))}),(H=document.getElementById("btn-results"))==null||H.addEventListener("click",()=>ht(t,e,i)),(Y=document.getElementById("btn-pass"))==null||Y.addEventListener("click",()=>{if(e.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Fi(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),ht(t,e,i);return}e.phase="ai-attack",ke(t,e,i),setTimeout(()=>tn(t,e,i),800)}),t.querySelectorAll(".match-slot-hit").forEach(j=>{j.addEventListener("click",()=>qr(j,e,t,i))}),t.querySelectorAll(".match-used-hit").forEach(j=>{j.addEventListener("click",()=>zi(t,e,i,null,j.dataset.cardId))}),t.querySelectorAll(".gc-mini").forEach(j=>{u?j.addEventListener("click",()=>Rr(j.dataset.gcId,j.dataset.gcType,t,e,i)):(j.style.opacity="0.35",j.style.cursor="default",j.addEventListener("click",()=>Et("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(ae=document.getElementById("boost-card"))==null||ae.addEventListener("click",()=>Ur(t,e,i)),t.querySelectorAll(".sub-btn-col").forEach(j=>{j.addEventListener("click",()=>zi(t,e,i,j.dataset.subId))}),(de=document.getElementById("sub-btn-main"))==null||de.addEventListener("click",()=>zi(t,e,i))}function qr(t,e,i,n){const r=t.dataset.cardId,o=t.dataset.role,a=e.selected.findIndex(s=>s.cardId===r);if(a!==-1)e.selected.splice(a,1);else{if(e.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const s=(e.homeTeam[o]||[]).find(d=>d.cardId===r);s&&e.selected.push({...s,_role:o,_line:o})}ke(i,e,n)}function en(t,e,i){t.matchId&&v.from("matches").update({last_player_id:i}).eq("id",t.matchId).then(()=>{})}function Dr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ue(),en(e,i,i.state.profile.id);const n=e.selected.map(o=>{const a=(e.homeTeam[o._role]||[]).find(d=>d.cardId===o.cardId)||o,s=["GK","DEF"].includes(o._role);return{...a,_line:o._role,...s?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),r=ni(n,e.modifiers.home,e.formation);e.pendingAttack={...r,players:[...n],side:"home"},e.selected.forEach(o=>{const a=(e.homeTeam[o._role]||[]).find(s=>s.cardId===o.cardId);a&&(a.used=!0)}),e.log.push({text:`⚔️ Vous attaquez : ${r.total} (base ${r.base}${r.links?` +${r.links} liens`:""}) — ${e.selected.map(o=>o.name).join(", ")}`,type:"info"}),e.selected=[],e.modifiers.home={},e.phase="ai-defense",ke(t,e,i),setTimeout(()=>Gr(t,e,i),1200)}function Fr(t,e,i){e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),Ue(),en(e,i,i.state.profile.id);const n=e.stadiumDef||null,r=e.selected.map(d=>{const l=(e.homeTeam[d._role]||[]).find(f=>f.cardId===d.cardId)||d,c=l.stadiumBonus||n&&(n.club_id&&String(l.club_id)===String(n.club_id)||n.country_code&&l.country_code===n.country_code)||!1;return{...l,_line:d._role,stadiumBonus:c}}),o=oi(r,e.modifiers.home,e.formation);e.selected.forEach(d=>{const l=(e.homeTeam[d._role]||[]).find(c=>c.cardId===d.cardId);l&&(l.used=!0)});const a=Zi(e.pendingAttack.total,o.total,e.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(e.pendingAttack.players||[]).map(d=>Ke(d)),homePlayers:e.selected.map(d=>{const l=(e.homeTeam[d._role]||[]).find(c=>c.cardId===d.cardId)||d;return Ke(l)}),homeTotal:o.total,aiTotal:e.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)s.text="🛡️ Bouclier ! But annulé.",e.log.push(s);else if(a.goal){e.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${e.pendingAttack.total} > ${o.total})`,e.log.push(s),e.selected=[],e.modifiers.home={},e.pendingAttack=null,ke(t,e,i),Qe(s.aiPlayers,e.homeScore,e.aiScore,!1,()=>{At(t,e,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${o.total} ≥ ${e.pendingAttack.total})`,e.log.push(s);e.selected=[],e.modifiers.home={},e.pendingAttack=null,At(t,e,i,"home-attack")}function Pr(t){if(t.aiSubsUsed>=t.aiMaxSubs)return;const e=Object.values(t.aiTeam).flat().filter(d=>d.used);if(!e.length)return;const i=(t.aiSubs||[]).filter(d=>!t.aiUsedSubIds.includes(d.cardId));if(!i.length)return;const n=e[Math.floor(Math.random()*e.length)],r=i.find(d=>d.job===n.job)||i[0],o={...r,used:!1,_line:n._line,_col:n._col},a=t.aiTeam[n._line],s=a.findIndex(d=>d.cardId===n.cardId);s!==-1&&(a[s]=o),t.aiUsedSubIds.push(r.cardId),t.aiSubsUsed++,t.log.push({text:`🔄 IA : ${r.firstname} ${r.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function Nr(t){var n;if(!((n=t.aiGcCards)!=null&&n.length))return;const e=t.aiGcCards.filter(r=>!t.aiUsedGc.includes(r.id));if(!e.length||Math.random()>.3)return;const i=e[Math.floor(Math.random()*e.length)];switch(t.aiUsedGc.push(i.id),ze[i.gc_type],i.gc_type){case"Boost+2":{const r=Object.values(t.aiTeam).flat().filter(o=>!o.used);if(r.length){const o=r[Math.floor(Math.random()*r.length)];o.boost=(o.boost||0)+2}break}case"Boost+3":{const r=Object.values(t.aiTeam).flat().filter(o=>!o.used);if(r.length){const o=r[Math.floor(Math.random()*r.length)];o.boost=(o.boost||0)+3}break}case"Remplacement+":t.aiMaxSubs=(t.aiMaxSubs||3)+1;break;case"Bouclier":t.modifiers.ai.shield=!0;break;case"Nul+1":t.modifiers.ai.drawBonus=(t.modifiers.ai.drawBonus||0)+1;break}t.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function tn(t,e,i){en(e,i,null),Pr(e),Nr(e);let n=[...e.aiTeam.MIL||[],...e.aiTeam.ATT||[]].filter(c=>!c.used),r=!1;if(!n.length){const c=[...e.homeTeam.MIL||[],...e.homeTeam.ATT||[]].filter(b=>!b.used),f=Ht(e.homeTeam);if(f||c.length===0){const b=(e.aiTeam.DEF||[]).filter(g=>!g.used),x=(e.aiTeam.GK||[]).filter(g=>!g.used);n=f?b.length?b:x:[...b,...x],r=!0}}const o=Un(n,"attack",e.difficulty);if(!o.length){Pi(t,e,i);return}r&&o.forEach(c=>{c._line=c._line||c.job,c.note_a=Math.max(1,Number(c.note_a)||0)});const a=ni(o,e.modifiers.ai,e.formation);e.pendingAttack={...a,players:o,side:"ai"},o.forEach(c=>{c.used=!0}),e.log.push({text:`🤖 IA attaque : ${a.total} (${o.map(c=>c.name).join(", ")})`,type:"info"}),e.modifiers.ai={};const s=[...e.homeTeam.GK||[],...e.homeTeam.DEF||[],...e.homeTeam.MIL||[]].filter(c=>!c.used),l=(e.homeSubs||[]).filter(c=>!(e.usedSubIds||[]).includes(c.cardId)).length>0&&e.subsUsed<e.maxSubs;if(s.length===0&&!l){if(o.length===1&&(o[0]._line==="GK"||o[0].job==="GK")&&Ht(e.homeTeam)&&e.homeScore===e.aiScore){e.aiScore++,yi(t,e,i,"ai",o[0]);return}e.aiScore++;const f={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:o.map(b=>Ke(b)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};e.log.push(f),e.pendingAttack=null,ke(t,e,i),Qe(f.aiPlayers,e.homeScore,e.aiScore,!1,()=>{At(t,e,i,"home-attack")});return}e.phase="defense",ke(t,e,i)}function Gr(t,e,i){var l,c;const n=[...e.aiTeam.GK||[],...e.aiTeam.DEF||[],...e.aiTeam.MIL||[]],r=Un(n,"defense",e.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(e.aiTeam[f]||[]).filter(b=>!b.used)).length){const f=((l=e.pendingAttack)==null?void 0:l.players)||[];if(f.length===1&&(f[0]._line==="GK"||f[0].job==="GK")&&e.homeScore===e.aiScore){e.homeScore++,yi(t,e,i,"home",f[0]);return}e.homeScore++;const x={type:"duel",isGoal:!0,homeScored:!0,homePlayers:f.map(g=>Ke(g)),homeTotal:((c=e.pendingAttack)==null?void 0:c.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};e.log.push(x),e.modifiers.ai={},e.pendingAttack=null,ke(t,e,i),Qe(x.homePlayers,e.homeScore,e.aiScore,!0,()=>{At(t,e,i,"ai-attack")});return}const a=r.length>0?oi(r,e.modifiers.ai,e.formation).total:0;r.forEach(f=>{f.used=!0});const s=Zi(e.pendingAttack.total,a,e.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(e.pendingAttack.players||[]).map(f=>Ke(f)),aiPlayers:r.map(f=>Ke(f)),homeTotal:e.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier IA !",e.log.push(d);else if(s.goal){e.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${e.pendingAttack.total} > ${a})`,e.log.push(d),e.modifiers.ai={},e.pendingAttack=null,ke(t,e,i),Qe(d.homePlayers,e.homeScore,e.aiScore,!0,()=>{At(t,e,i,"ai-attack")});return}else d.text=`🧤 IA défend (${a} ≥ ${e.pendingAttack.total})`,e.log.push(d);e.modifiers.ai={},e.pendingAttack=null,At(t,e,i,"ai-attack")}function At(t,e,i,n){if(e.round++,!oo(t,e,i)){if(nn(e)){ht(t,e,i);return}if(n==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(o=>(e.homeTeam[o]||[]).some(a=>!a.used))){Pi(t,e,i);return}e.phase="attack",ke(t,e,i)}else{if(!["MIL","ATT","GK","DEF"].some(o=>(e.aiTeam[o]||[]).some(a=>!a.used))){Pi(t,e,i);return}e.phase="ai-attack",ke(t,e,i),setTimeout(()=>tn(t,e,i),800)}}}function Ht(t){return!["GK","DEF","MIL","ATT"].some(e=>(t[e]||[]).some(i=>!i.used))}function En(t){const e=(t.GK||[]).some(n=>!n.used),i=["DEF","MIL","ATT"].some(n=>(t[n]||[]).some(r=>!r.used));return e&&!i}function oo(t,e,i){if(e.homeScore!==e.aiScore)return!1;if(En(e.homeTeam)&&Ht(e.aiTeam)){const n=(e.homeTeam.GK||[]).find(r=>!r.used);return n?(n.used=!0,e.homeScore++,yi(t,e,i,"home",n),!0):!1}if(En(e.aiTeam)&&Ht(e.homeTeam)){const n=(e.aiTeam.GK||[]).find(r=>!r.used);return n?(n.used=!0,e.aiScore++,yi(t,e,i,"ai",n),!0):!1}return!1}function yi(t,e,i,n,r){e.log.push({type:"duel",isGoal:!0,homeScored:n==="home",homePlayers:n==="home"?[Ke(r)]:[],aiPlayers:n==="ai"?[Ke(r)]:[],text:`⚽ DERNIER CORNER — Le gardien ${n==="home"?"":"adverse "}marque !`});const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(o);const a=(s,d)=>new Promise(l=>{o.innerHTML=`<div style="font-size:32px;font-weight:900;color:${d};letter-spacing:2px;animation:lcFade 1.4s ease both">${s}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(l,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),o.remove(),e.pendingAttack=null,ke(t,e,i),Qe([Ke(r)],e.homeScore,e.aiScore,n==="home",()=>{if(nn(e)){ht(t,e,i);return}At(t,e,i,n==="home"?"ai-attack":"home-attack")})))()}function nn(t){const e=["MIL","ATT","GK","DEF"].some(n=>(t.homeTeam[n]||[]).some(r=>!r.used)),i=["MIL","ATT","GK","DEF"].some(n=>(t.aiTeam[n]||[]).some(r=>!r.used));return!e&&!i}function Fi(t,e){return!(["MIL","ATT"].some(r=>(t[r]||[]).some(o=>!o.used))||Ht(e)||!["MIL","ATT"].some(r=>(e[r]||[]).some(o=>!o.used)))}function Pi(t,e,i){if(!oo(t,e,i)){if(nn(e)){ht(t,e,i);return}if(Fi(e.homeTeam,e.aiTeam)&&Fi(e.aiTeam,e.homeTeam)){e.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),ht(t,e,i);return}e.phase="attack",ke(t,e,i)}}function zi(t,e,i,n=null,r=null){var x,g;if(e.phase!=="attack"){Et("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(e.usedSubIds||(e.usedSubIds=[]),e.subsUsed>=e.maxSubs){Et(`Maximum ${e.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const o=Object.entries(e.homeTeam).flatMap(([p,u])=>(u||[]).filter(y=>y.used).map(y=>({...y,_line:y._line||p}))),a=e.homeSubs.filter(p=>!e.usedSubIds.includes(p.cardId));if(!o.length){Et("Aucun joueur utilisé à remplacer");return}if(!a.length){Et("Aucun remplaçant disponible");return}let s=Math.max(0,o.findIndex(p=>p.cardId===r));const d=((x=o[s])==null?void 0:x._line)||((g=o[s])==null?void 0:g.job);let l=n?Math.max(0,a.findIndex(p=>p.cardId===n)):Math.max(0,a.findIndex(p=>p.job===d)),c=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function b(){var m,A,E,S,q,W;const p=o[s],u=a[l],y=Math.min(130,Math.round((window.innerWidth-90)/2)),w=Math.round(y*1.35),h=ee=>`background:rgba(255,255,255,0.12);border:none;color:${ee?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ee?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${e.subsUsed}/${e.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${h(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${u?vt({...u,used:!1,boost:0},y,w):"<div>—</div>"}</div>
        <button id="in-down" style="${h(l>=a.length-1)}" ${l>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${h(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?vt({...p,used:!1,boost:0},y,w):"<div>—</div>"}</div>
        <button id="out-down" style="${h(s>=o.length-1)}" ${s>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${o.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(m=f.querySelector("#sub-close"))==null||m.addEventListener("click",()=>f.remove()),(A=f.querySelector("#out-up"))==null||A.addEventListener("click",()=>{s>0&&(s--,b())}),(E=f.querySelector("#out-down"))==null||E.addEventListener("click",()=>{s<o.length-1&&(s++,b())}),(S=f.querySelector("#in-up"))==null||S.addEventListener("click",()=>{l>0&&(l--,b())}),(q=f.querySelector("#in-down"))==null||q.addEventListener("click",()=>{l<a.length-1&&(l++,b())});const L=(ee,G,T,_)=>{const H=f.querySelector("#"+ee);if(!H)return;let Y=0;H.addEventListener("touchstart",ae=>{Y=ae.touches[0].clientY},{passive:!0}),H.addEventListener("touchend",ae=>{const de=ae.changedTouches[0].clientY-Y;if(Math.abs(de)<30)return;const j=G();de<0&&j<_-1?(T(j+1),b()):de>0&&j>0&&(T(j-1),b())},{passive:!0})};L("in-panel",()=>l,ee=>l=ee,a.length),L("out-panel",()=>s,ee=>s=ee,o.length),(W=f.querySelector("#sub-confirm"))==null||W.addEventListener("click",ee=>{if(ee.preventDefault(),ee.stopPropagation(),c)return;c=!0;const G=o[s],T=a[l];if(!G||!T)return;let _=null,H=-1;for(const[ae,de]of Object.entries(e.homeTeam)){const j=(de||[]).findIndex(U=>U.cardId===G.cardId);if(j!==-1){_=ae,H=j;break}}if(H===-1||!_){Et("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const Y={...T,_line:_,_col:G._col||0,used:!1,boost:0};e.homeTeam[_].splice(H,1,Y),e.usedSubIds||(e.usedSubIds=[]),e.usedSubIds.push(T.cardId),e.subsUsed++,e.selected=[],e.log.push({type:"sub",subSide:"home",clubName:e.clubName,outPlayer:{name:G.name,firstname:G.firstname,note:Pe(G,_),portrait:Mt(G),job:G.job,country_code:G.country_code,rarity:G.rarity,clubName:G.clubName,clubLogo:G.clubLogo},inPlayer:{name:T.name,firstname:T.firstname,note:Pe(T,_),portrait:Mt(T),job:T.job,country_code:T.country_code,rarity:T.rarity,clubName:T.clubName,clubLogo:T.clubLogo},text:`🔄 ${T.firstname} ${T.name} remplace ${G.firstname} ${G.name}`}),f.remove(),zr(G,T,()=>ke(t,e,i))})}document.body.appendChild(f),b()}function Rr(t,e,i,n,r){var b,x;const o=(n.gcDefs||[]).find(g=>g.name===e),a=ze[e]||{icon:"⚡",desc:"Carte spéciale."},s=(o==null?void 0:o.name)||e,d=(o==null?void 0:o.effect)||a.desc,l=o!=null&&o.image_url?`/icons/${o.image_url}`:null,c=a.icon||"⚡",f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",f.innerHTML=`
    ${tt(s,l,c,d,{width:190})}
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(f),(b=f.querySelector("#gc-back"))==null||b.addEventListener("click",()=>f.remove()),(x=f.querySelector("#gc-use"))==null||x.addEventListener("click",()=>{f.remove(),Hr(t,e,i,n,r)})}function pi(t,e,i,n,r,o){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function d(){var l,c;a.innerHTML=`
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
    </div>`,(l=a.querySelector("#gc-picker-close"))==null||l.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const b=f.dataset.cid,x=t.find(p=>p.cardId===b);if(!x)return;const g=s.findIndex(p=>p.cardId===b);g>-1?s.splice(g,1):s.length<e&&s.push(x),d()})}),(c=a.querySelector("#gc-picker-confirm"))==null||c.addEventListener("click",()=>{a.remove(),o(s)})}d(),document.body.appendChild(a)}const Or={BOOST_STAT:({value:t=1,count:e=1,roles:i=[]},n,r,o)=>{const a=Object.entries(n.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,d])=>d.filter(l=>!l.used).map(l=>({...l,_line:s})));return a.length?(pi(a,e,`Choisir ${e} joueur(s) à booster (+${t})`,r,n,s=>{s.forEach(d=>{const l=(n.homeTeam[d._line]||[]).find(c=>c.cardId===d.cardId);l&&(l.boost=(l.boost||0)+t,n.log.push({text:`⚡ +${t} sur ${l.name}`,type:"info"}))}),ke(r,n,o)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),ke(r,n,o),!0)},DEBUFF_STAT:({value:t=1,count:e=1,roles:i=[],target:n="ai"},r,o,a)=>{const s=n==="home"?r.homeTeam:r.aiTeam,d=n==="ai"?"adverse":"allié",l=Object.entries(s).filter(([c])=>!i.length||i.includes(c)).flatMap(([c,f])=>f.filter(b=>!b.used).map(b=>({...b,_line:c})));return l.length?(pi(l,e,`Choisir ${e} joueur(s) ${d}(s) à débuffer (-${t})`,o,r,c=>{c.forEach(f=>{const x=((n==="home"?r.homeTeam:r.aiTeam)[f._line]||[]).find(g=>g.cardId===f.cardId);x&&(x.boost=(x.boost||0)-t,r.log.push({text:`🎯 -${t} sur ${x.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),ke(o,r,a)}),!0):(r.log.push({text:`🎯 Aucun joueur ${d} disponible`,type:"info"}),ke(o,r,a),!0)},GRAY_PLAYER:({count:t=1,roles:e=[],target:i="ai"},n,r,o)=>{const a=i==="home"?n.homeTeam:n.aiTeam,s=i==="ai"?"adverse":"allié",d=Object.entries(a).filter(([l])=>!e.length||e.includes(l)).flatMap(([l,c])=>c.filter(f=>!f.used).map(f=>({...f,_line:l})));return d.length?(pi(d,t,`Choisir ${t} joueur(s) ${s}(s) à exclure`,r,n,l=>{l.forEach(c=>{const b=((i==="home"?n.homeTeam:n.aiTeam)[c._line]||[]).find(x=>x.cardId===c.cardId);b&&(b.used=!0,n.log.push({text:`❌ ${b.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),ke(r,n,o)}),!0):(n.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),ke(r,n,o),!0)},REVIVE_PLAYER:({count:t=1,roles:e=[]},i,n,r)=>{const o=Object.entries(i.homeTeam).filter(([a])=>!e.length||e.includes(a)).flatMap(([a,s])=>s.filter(d=>d.used).map(d=>({...d,_line:a})));return o.length?(pi(o,t,`Choisir ${t} joueur(s) à ressusciter`,n,i,a=>{a.forEach(s=>{const d=(i.homeTeam[s._line]||[]).find(l=>l.cardId===s.cardId);d&&(d.used=!1,i.log.push({text:`💫 ${d.name} ressuscité !`,type:"info"}))}),ke(n,i,r)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),ke(n,i,r),!0)},REMOVE_GOAL:({},t)=>(t.aiScore>0?(t.aiScore--,t.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):t.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},t)=>(t.homeScore===t.aiScore?(t.homeScore++,t.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):t.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:t=1},e)=>(e.maxSubs=(e.maxSubs||3)+t,e.log.push({text:`🔄 +${t} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Hr(t,e,i,n,r){n.usedGc.push(t);const o=n.gcDefs||[],a=o.find(d=>d.name===e)||o.find(d=>{var l;return((l=d.name)==null?void 0:l.toLowerCase().trim())===(e==null?void 0:e.toLowerCase().trim())});let s=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const d=Or[a.effect_type];d?d(a.effect_params||{},n,i,r)||(s=!0):(r.toast(`Effet "${a.effect_type}" non implémenté`,"error"),s=!0)}else{switch(e){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const d=Object.entries(n.homeTeam).flatMap(([l,c])=>(c||[]).filter(f=>f.used).map(f=>({...f,_line:l})));d.length?(d[0].used=!1,n.log.push({text:`💫 ${d[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const d=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(l=>!l.used);if(d.length){const l=d.sort((c,f)=>Pe(f,"ATT")-Pe(c,"ATT"))[0];l.used=!0,n.log.push({text:`❄️ ${l.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}v.from("cards").delete().eq("id",t).then(()=>{}),s&&ke(i,n,r)}function Ur(t,e,i){const n=Object.values(e.homeTeam).flat().filter(r=>!r.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${e.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(r=>`
        <div class="player-boost-opt" data-card-id="${r.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Lr[r.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Pe(r,r._line||r.job)}</div>
          <div style="flex:1"><b>${r.firstname} ${r.name}</b><div style="font-size:11px;color:#888">${r._line||r.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${e.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const s=(e.homeTeam[a]||[]).find(d=>d.cardId===o);if(s){s.boost=(s.boost||0)+e.boostCard.value,e.log.push({text:`⚡ Boost +${e.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}e.boostUsed=!0,i.closeModal(),ke(t,e,i)})})}async function ht(t,e,i){var c,f,b;Tt(),Ue(),e._timerInt&&(clearInterval(e._timerInt),e._timerInt=null),e.phase="finished";const{state:n}=i,r=e.homeScore>e.aiScore,o=e.homeScore===e.aiScore,a=r?"victoire":o?"nul":"defaite",s=e.isSolo&&((c=e.soloLevelConfig)!=null&&c.reward_credits)&&r?Number(e.soloLevelConfig.reward_credits):Jo(e.mode,a);if(e.isSolo&&r)try{const{data:x}=await v.from("user_solo_progress").select("unlocked_level").eq("user_id",n.profile.id).maybeSingle(),g=(x==null?void 0:x.unlocked_level)||1;e.soloLevel>=g&&await v.from("user_solo_progress").upsert({user_id:n.profile.id,unlocked_level:e.soloLevel+1,updated_at:new Date().toISOString()})}catch(x){console.warn("[Solo] Erreur mise à jour progression:",x.message)}e.matchId&&await v.from("matches").update({status:"finished",home_score:e.homeScore,away_score:e.aiScore,winner_id:r?n.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",e.matchId);const d={credits:(n.profile.credits||0)+s,matches_played:(n.profile.matches_played||0)+1};r?d.wins=(n.profile.wins||0)+1:o?d.draws=(n.profile.draws||0)+1:d.losses=(n.profile.losses||0)+1,await v.from("users").update(d).eq("id",n.profile.id),await i.refreshProfile();const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",l.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${r?"🏆":o?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${r?"Victoire !":o?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${e.homeScore} – ${e.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${s.toLocaleString("fr")} crédits</div>
      </div>
      ${e.isSolo&&r?`<div style="background:rgba(26,107,60,0.25);border:1px solid #1A6B3C;border-radius:12px;padding:10px;margin-bottom:8px;font-size:14px;font-weight:700">🔓 Niveau ${e.soloLevel+1} débloqué !</div>`:""}
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(l),(f=document.getElementById("res-home"))==null||f.addEventListener("click",()=>{l.remove(),it(t),i.navigate("home")}),(b=document.getElementById("res-replay"))==null||b.addEventListener("click",()=>{l.remove(),it(t),i.navigate("match",e.isSolo?{matchMode:e.mode,soloLevel:e.soloLevel}:{matchMode:e.mode})})}function Kr(t,e){e.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${_i(t.aiTeam,t.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Vr={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function Yr(t){const e=t.job||"ATT";return Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0}async function Wr(t,e){!t||!e||await Promise.all([Ln(t,"win"),Ln(e,"loss")])}async function Ln(t,e){const{data:i}=await v.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",t).eq("card_type","player");if(!(i!=null&&i.length))return;const n=i.filter(r=>{var o,a;return((o=r.player)==null?void 0:o.rarity)==="pepite"||((a=r.player)==null?void 0:a.rarity)==="papyte"});n.length&&await Promise.all(n.map(r=>{const o=Vr[r.player.rarity],a=e==="win"?o.win:o.loss,s=r.player.note_min??1,d=r.player.note_max??10,l=Yr(r.player),c=r.current_note??l,f=Math.min(d,Math.max(s,c+a));return v.from("cards").update({current_note:f}).eq("id",r.id)}))}const Ft=t=>eo(t);async function jt(t,e,i,n,r={}){return ro(t,e,i,n,r.myGC||[],r.gcDefs||[],r.isRanked||!1,r.rankedData||null,r.stadiumDef||null,r.onMatchEnd||null,r.mlLeagueId||null,r.mlMatchId||null)}async function Xr(t,e,i){const{data:n}=await v.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!n){e.toast("Match introuvable","error"),e.navigate("home");return}const r=n.home_id===e.state.user.id;let o=null,a=null;if(n.mode==="mini_league"){const{data:s}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();s&&(o=s.league_id,a=s.id)}return ro(t,e,i,r,[],[],n.is_ranked||!1,null,null,null,o,a)}async function ro(t,e,i,n,r=[],o=[],a=!1,s=null,d=null,l=null,c=null,f=null){const{state:b,navigate:x,toast:g}=e,p=n?"p1":"p2",u=n?"p2":"p1",y=(r||[]).map(k=>k.id),w=(r||[]).map(k=>({id:k.id,gc_type:k.gc_type,_gcDef:k._gcDef||null}));t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await v.from("matches").select("*").eq("id",i).single();if(!h){g("Match introuvable","error"),x("home");return}async function L(){var be,ve;console.log("[PvP] buildGameState match:",{id:h.id,home_deck_id:h.home_deck_id,away_deck_id:h.away_deck_id,mode:h.mode,is_ranked:h.is_ranked});const[{data:k,error:I},{data:M,error:B},{data:z},{data:R}]=await Promise.all([v.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),v.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),v.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),v.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",I==null?void 0:I.message,"p2:",B==null?void 0:B.message,"p1D:",(be=k==null?void 0:k.starters)==null?void 0:be.length,"p2D:",(ve=M==null?void 0:M.starters)==null?void 0:ve.length);const F=oe=>{const Le=Number(oe.evolution_bonus)||0;return{cardId:oe.card_id,position:oe.position,id:oe.id,firstname:oe.firstname,name:oe.surname_real,country_code:oe.country_code,club_id:oe.club_id,job:oe.job,job2:oe.job2,note_g:(Number(oe.note_g)||0)+(oe.job==="GK"||oe.job2==="GK"&&Number(oe.note_g)>0?Le:0),note_d:(Number(oe.note_d)||0)+(oe.job==="DEF"||oe.job2==="DEF"&&Number(oe.note_d)>0?Le:0),note_m:(Number(oe.note_m)||0)+(oe.job==="MIL"||oe.job2==="MIL"&&Number(oe.note_m)>0?Le:0),note_a:(Number(oe.note_a)||0)+(oe.job==="ATT"||oe.job2==="ATT"&&Number(oe.note_a)>0?Le:0),evolution_bonus:Le,rarity:oe.rarity,skin:oe.skin,hair:oe.hair,hair_length:oe.hair_length,face:oe.face||null,clubName:oe.club_encoded_name||null,clubLogo:oe.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},N=((k==null?void 0:k.starters)||[]).map(oe=>F(oe)),V=((M==null?void 0:M.starters)||[]).map(oe=>F(oe)),Q=(k==null?void 0:k.formation)||"4-4-2",ie=(M==null?void 0:M.formation)||"4-4-2";let te=xi(N,Q),Z=xi(V,ie);const re=((k==null?void 0:k.subs)||[]).map(oe=>F(oe)),se=((M==null?void 0:M.subs)||[]).map(oe=>F(oe)),xe=(k==null?void 0:k.stadium_def)||(n?d:null),ce=(M==null?void 0:M.stadium_def)||(n?null:d);return xe&&(te=ri(te,xe),gi(re,xe)),ce&&(Z=ri(Z,ce),gi(se,ce)),{p1Team:te,p2Team:Z,p1Subs:re,p2Subs:se,p1Formation:Q,p2Formation:ie,p1Name:(z==null?void 0:z.club_name)||(z==null?void 0:z.pseudo)||"Joueur 1",p2Name:(R==null?void 0:R.club_name)||(R==null?void 0:R.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?y:[],gc_p2:n?[]:y,gcCardsFull_p1:n?w:[],gcCardsFull_p2:n?[]:w,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:o||[],lastActionAt:new Date().toISOString()}}let m=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!m,"match.status:",h.status,"home_id:",h.home_id,"away_id:",h.away_id,"myId:",b.profile.id),!m)if(n){m=await L(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((m==null?void 0:m.p1Team)||{}));const{data:k}=await v.from("matches").select("game_state").eq("id",i).single();!(k!=null&&k.game_state)||!Object.keys(k.game_state).length?await v.from("matches").update({game_state:m,turn_user_id:h.home_id}).eq("id",i):m=k.game_state}else{t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let k=0;k<30&&!m;k++){await new Promise(M=>setTimeout(M,400));const{data:I}=await v.from("matches").select("game_state").eq("id",i).single();I!=null&&I.game_state&&Object.keys(I.game_state).length&&(m=I.game_state),k%5===0&&console.log("[PvP] away - poll",k,"game_state:",!!(I!=null&&I.game_state))}if(!m){g("Erreur de synchronisation","error"),x("home");return}m.gc_p2=y,m.gcCardsFull_p2=w,await v.from("matches").update({game_state:m}).eq("id",i)}let A=!1,E=null,S=!1;const q=new Set,W=new Set;async function ee(k){var ie,te;Tt();try{v.removeChannel(G)}catch{}const I=m[p+"Score"]||0,M=m[u+"Score"]||0;let B,z;k.winner_id?(B=k.winner_id===b.profile.id,z=!1):k.forfeit?(B=I>M,z=!1):(z=I===M,B=I>M);let R="";if(a&&n)try{const{data:Z}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.home_id).single(),{data:re}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.away_id).single();if(Z&&re){const se=B?1:z?.5:0,xe=1-se,ce=Z.placement_matches<10,be=re.placement_matches<10,ve=computeGlicko2(Z.mmr,Z.mmr_deviation,Z.mmr_volatility,re.mmr,re.mmr_deviation,se===1?1:se===0?0:.5,ce),oe=computeGlicko2(re.mmr,re.mmr_deviation,re.mmr_volatility,Z.mmr,Z.mmr_deviation,xe===1?1:xe===0?0:.5,be);await v.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:z?null:B?h.home_id:h.away_id,p_home_id:h.home_id,p_away_id:h.away_id,p_home_delta:ve.delta,p_away_delta:oe.delta,p_home_new_rd:ve.newRd,p_away_new_rd:oe.newRd,p_home_new_vol:ve.newSigma,p_away_new_vol:oe.newSigma});const Le=ve.delta,Ge=ve.newMmr,Te=getTier(Ge),Ve=Le>=0?"+":"",Oe=Le>=0?"#4caf50":"#ff6b6b",nt=getTier(Z.mmr);R=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Te.id!==nt.id?`<div style="font-size:20px;font-weight:900;color:${Te.color}">
                    ${Ge>Z.mmr?"📈":"📉"} ${nt.emoji} ${nt.label} → ${Te.emoji} ${Te.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Ge>Z.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Le>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Te.color}">${Te.emoji} ${Te.label}</div>`}
              ${ce?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${Z.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(Z){console.error("[Ranked] MMR update error:",Z)}(ie=document.getElementById("pvp-end-overlay"))==null||ie.remove();const F=document.createElement("div");F.id="pvp-end-overlay",F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const N=z?"🤝":B?"🏆":"😞",V=z?"MATCH NUL":B?"VICTOIRE !":"DÉFAITE",Q=z?"#fff":B?"#FFD700":"#ff6b6b";F.innerHTML=`
      <div style="font-size:64px">${N}</div>
      <div style="font-size:26px;font-weight:900;color:${Q}">${V}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${m[p+"Name"]} ${I} – ${M} ${m[u+"Name"]}</div>
      ${k.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${B?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${R}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${c?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(F),(te=F.querySelector("#pvp-end-home"))==null||te.addEventListener("click",()=>{F.remove(),it(t),c?x("mini-league",{openLeagueId:c}):x(a?"ranked":"home")})}const G=v.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},k=>{var M;const I=k.new;try{if(I.status==="finished"||I.forfeit){if(A)return;A=!0,E&&(clearInterval(E),E=null),Ue(),I.game_state&&(m=I.game_state),ee(I);return}if(I.game_state){const B=m;m=I.game_state;const z=m._lastGC;if(z&&z.seq&&!W.has(z.seq)&&(W.add(z.seq),z.by!==p)){$(z.type,z.by,()=>U());return}const R=B[p+"Score"]||0,F=B[u+"Score"]||0,N=m[p+"Score"]||0,V=m[u+"Score"]||0,Q=N>R,ie=V>F;if((Q||ie)&&!q.has(m.round)){q.add(m.round);const te=[...m.log||[]].reverse().find(se=>se.isGoal),Z=((te==null?void 0:te.homePlayers)||[]).map(se=>({name:se.name,note:se.note,portrait:se.portrait,job:se.job}));!!((M=te==null?void 0:te.text)!=null&&M.includes("DERNIER CORNER"))?we().then(()=>{Qe(Z,N,V,Q,()=>U())}):Qe(Z,N,V,Q,()=>U());return}U()}}catch(B){console.error("[PvP] crash:",B)}}).subscribe();async function T(k){Object.assign(m,k),m.lastActionAt=new Date().toISOString();const{error:I}=await v.from("matches").update({game_state:m}).eq("id",i);I&&g("Erreur de synchronisation","error");try{U()}catch(M){console.error("[PvP] renderPvpScreen crash:",M)}}async function _(){if(A)return;A=!0,Tt(),Ue(),E&&(clearInterval(E),E=null);const k=n?h.away_id:h.home_id,I=n?"p2":"p1",M=n?"p1":"p2",B={...m,[I+"Score"]:3,[M+"Score"]:0,phase:"finished"},z=B.p1Score||0,R=B.p2Score||0;try{await v.from("matches").update({game_state:B}).eq("id",i);const{data:F,error:N}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:k,p_home_score:z,p_away_score:R,p_forfeit:!0});if(N&&console.error("[PvP] finish_pvp_match (forfeit):",N),c)try{await v.rpc("check_and_finish_mini_league",{p_league_id:c})}catch(V){console.error("[PvP] check_and_finish_mini_league (forfeit):",V)}try{const{data:V}=await v.rpc("apply_match_rewards",{p_match_id:i});V!=null&&V.success&&!(V!=null&&V.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(V){console.error("[PvP] apply_match_rewards (forfeit):",V)}}catch{}try{v.removeChannel(G)}catch{}setTimeout(()=>{it(t),c?x("mini-league",{openLeagueId:c}):x("home")},800)}const H={BOOST_STAT:({value:k=1,count:I=1,roles:M=[]},B,z)=>{const R=B[p+"Team"],F=Object.entries(R).filter(([N])=>!M.length||M.includes(N)).flatMap(([N,V])=>V.filter(Q=>!Q.used).map(Q=>({...Q,_line:N})));if(!F.length){B.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),z(B);return}Y(F,I,`Choisir ${I} joueur(s) à booster (+${k})`,N=>{N.forEach(V=>{const Q=(R[V._line]||[]).find(ie=>ie.cardId===V.cardId);Q&&(Q.boost=(Q.boost||0)+k,B.log.push({text:`⚡ +${k} sur ${Q.name}`,type:"info"}))}),B[p+"Team"]=R,z(B)})},DEBUFF_STAT:({value:k=1,count:I=1,roles:M=[],target:B="ai"},z,R)=>{const F=B==="home"?p:u,N=z[F+"Team"],V=B==="home"?"allié":"adverse",Q=Object.entries(N).filter(([ie])=>!M.length||M.includes(ie)).flatMap(([ie,te])=>te.map(Z=>({...Z,_line:ie})));if(!Q.length){z.log.push({text:`🎯 Aucun joueur ${V}`,type:"info"}),R(z);return}Y(Q,I,`Choisir ${I} joueur(s) ${V}(s) (-${k})`,ie=>{ie.forEach(te=>{const Z=(N[te._line]||[]).find(re=>re.cardId===te.cardId);Z&&(Z.boost=(Z.boost||0)-k,z.log.push({text:`🎯 -${k} sur ${Z.name}`,type:"info"}))}),z[F+"Team"]=N,R(z)})},GRAY_PLAYER:({count:k=1,roles:I=[],target:M="ai"},B,z)=>{const R=M==="home"?p:u,F=B[R+"Team"],N=M==="home"?"allié":"adverse",V=Object.entries(F).filter(([Q])=>!I.length||I.includes(Q)).flatMap(([Q,ie])=>ie.filter(te=>!te.used).map(te=>({...te,_line:Q})));if(!V.length){B.log.push({text:`❌ Aucun joueur ${N}`,type:"info"}),z(B);return}Y(V,k,`Choisir ${k} joueur(s) ${N}(s) à exclure`,Q=>{const ie="usedCardIds_"+R,te=new Set(B[ie]||[]);Q.forEach(Z=>{const re=(F[Z._line]||[]).find(se=>se.cardId===Z.cardId);re&&(re.used=!0,te.add(Z.cardId),B.log.push({text:`❌ ${re.name} exclu !`,type:"info"}))}),B[ie]=[...te],B[R+"Team"]=F,z(B)})},REVIVE_PLAYER:({count:k=1,roles:I=[]},M,B)=>{const z=M[p+"Team"],R=Object.entries(z).filter(([F])=>!I.length||I.includes(F)).flatMap(([F,N])=>N.filter(V=>V.used).map(V=>({...V,_line:F})));if(!R.length){M.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),B(M);return}Y(R,k,`Choisir ${k} joueur(s) à ressusciter`,F=>{F.forEach(N=>{const V=(z[N._line]||[]).find(Q=>Q.cardId===N.cardId);V&&(V.used=!1,M.log.push({text:`💫 ${V.name} ressuscité !`,type:"info"}))}),M[p+"Team"]=z,B(M)})},REMOVE_GOAL:({},k,I)=>{const M=u+"Score";k[M]>0?(k[M]--,k.log.push({text:"🚫 Dernier but annulé !",type:"info"})):k.log.push({text:"🚫 Aucun but à annuler",type:"info"}),I(k)},ADD_GOAL_DRAW:({},k,I)=>{k[p+"Score"]===k[u+"Score"]?(k[p+"Score"]++,k.log.push({text:"🎯 But bonus !",type:"info"})):k.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),I(k)},ADD_SUB:({value:k=1},I,M)=>{I.maxSubs=(I.maxSubs||3)+k,I.log.push({text:`🔄 +${k} remplacement(s)`,type:"info"}),M(I)},CUSTOM:({},k,I)=>I(k)};function Y(k,I,M,B){const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let R=[];function F(){var V,Q;const N=k.map(ie=>{const te=ie._line||ie.job||"MIL",Z=R.find(se=>se.cardId===ie.cardId),re=Se({...ie,_evolution_bonus:0},{width:90,showStad:!0,role:te,extraNote:ie.boost||0});return`<div class="pp-item" data-cid="${ie.cardId}"
          style="position:relative;border-radius:8px;${Z?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${ie.used?"opacity:0.3;pointer-events:none":""}">
          ${re}
        </div>`}).join("");z.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${M}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${R.length}/${I}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${N}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${R.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${R.length}/${I})
          </button>
        </div>`,(V=z.querySelector("#pp-close"))==null||V.addEventListener("click",()=>z.remove()),z.querySelectorAll(".pp-item").forEach(ie=>{ie.addEventListener("click",()=>{const te=ie.dataset.cid,Z=k.find(se=>se.cardId===te),re=R.findIndex(se=>se.cardId===te);Z&&(re>-1?R.splice(re,1):R.length<I&&R.push(Z),F())})}),(Q=z.querySelector("#pp-confirm"))==null||Q.addEventListener("click",()=>{z.remove(),B(R)})}F(),document.body.appendChild(z)}async function ae(k,I){const B=(m["gcCardsFull_"+p]||[]).find(N=>N.id===k),z=(B==null?void 0:B._gcDef)||(m.gcDefs||[]).find(N=>{var V;return N.name===I||((V=N.name)==null?void 0:V.toLowerCase().trim())===(I==null?void 0:I.toLowerCase().trim())}),R=[...m["usedGc_"+p]||[],k],F={type:I,by:p,seq:(m._gcAnimSeq||0)+1};W.add(F.seq),$(I,p,async()=>{if(z!=null&&z.effect_type&&z.effect_type!=="CUSTOM"){const V=H[z.effect_type];if(V){const Q={...m};V(z.effect_params||{},Q,async ie=>{ie["usedGc_"+p]=R,ie._lastGC=F,ie._gcAnimSeq=F.seq,await T(ie)});return}}const N={...m};switch(I){case"Remplacement+":N.maxSubs=(N.maxSubs||3)+1,N.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const V=u+"Score";N[V]>0&&(N[V]--,N.log.push({text:"🚫 But annulé",type:"info"}));break}}N["usedGc_"+p]=R,N._lastGC=F,N._gcAnimSeq=F.seq,await T(N)})}function de(k,I){const M="usedCardIds_"+k,B=new Set(m[M]||[]);I.forEach(z=>B.add(z)),m[M]=[...B]}function j(){for(const k of["p1","p2"]){const I=new Set(m["usedCardIds_"+k]||[]),M=m[k+"Team"];if(M)for(const B of["GK","DEF","MIL","ATT"])(M[B]||[]).forEach(z=>{z.used=I.has(z.cardId)})}}function U(){var an,sn,dn,ln,cn,pn;if(m.phase==="reveal")return le();if(m.phase==="midfield")return ue();if(m.phase==="finished")return Ne();const k=m[p+"Team"],I=m[u+"Team"];j();const M=m[p+"Score"],B=m[u+"Score"],z=m[p+"Name"],R=m[u+"Name"],F=m.phase===p+"-attack",N=m.phase===p+"-defense",V=Array.isArray(m["selected_"+p])?m["selected_"+p]:[],Q=V.map(J=>J.cardId),ie=window.innerWidth>=700,te=m[p+"Subs"]||[],Z=m["usedSubIds_"+p]||[],re=te.filter(J=>!Z.includes(J.cardId)),se=m["gcCardsFull_"+p]||[],xe=m["usedGc_"+p]||[],ce=se.filter(J=>!xe.includes(J.id)),be=m.boostOwner===p&&!m.boostUsed,ve=[...k.MIL||[],...k.ATT||[]].filter(J=>!J.used),oe=[...I.MIL||[],...I.ATT||[]].filter(J=>!J.used),Le=!$e(I),Ge=ve.length===0&&oe.length===0&&!Le,Te=(k.DEF||[]).filter(J=>!J.used),Ve=(k.GK||[]).filter(J=>!J.used);let Oe=[];F&&ve.length===0&&(Le?(Oe=Te.map(J=>J.cardId),Te.length===0&&(Oe=Oe.concat(Ve.map(J=>J.cardId)))):Ge&&(Oe=[...Te,...Ve].map(J=>J.cardId)));function nt(J,ge,Me){var Ce,mt;const _e=J._gcDef,Dt=(_e==null?void 0:_e.name)||J.gc_type,at=(_e==null?void 0:_e.effect)||((Ce=ze[J.gc_type])==null?void 0:Ce.desc)||"",Fe=_e!=null&&_e.image_url?`/icons/${_e.image_url}`:null,Re=((mt=ze[J.gc_type])==null?void 0:mt.icon)||"⚡";return`<div class="pvp-gc-mini" data-gc-id="${J.id}" data-gc-type="${J.gc_type}" style="flex-shrink:0;cursor:pointer">
        ${tt(Dt,Fe,Re,at,{width:ge})}
      </div>`}function Kt(J,ge){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${J}px;height:${ge}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ge*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ge*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ge*.09)}px;color:#000;font-weight:900">+${m.boostValue}</div>
      </div>`}const De=(J,ge)=>ge?Kt(95,162):nt(J,95),Ye=(J,ge)=>ge?Kt(68,116):nt(J,68),He=ie?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ut=F?pt(p)?`<button id="pvp-action" style="${He};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${V.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${He};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:N?`<button id="pvp-action" style="${He};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${V.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${R}</div>`,ot=F&&!pt(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':F||N?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${V.length}/3 sélectionné(s)</div>`:"",Bt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${ie?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${re.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':re.map(J=>`<div class="pvp-sub-btn" data-sub-id="${J.cardId}" style="cursor:pointer;flex-shrink:0">${vt(J,ie?76:44,ie?100:58)}</div>`).join("")}
    </div>`,ft=F?"attack":N?"defense":"idle",$t=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${Ot(k,m[p+"Formation"],ft,Q,ie?1300:zt(),ie?600:Gt(),Oe)}
      </div>
    </div>`,rt=m[p+"Team"],go=(()=>{var ge,Me,_e,Dt,at;if(N&&((ge=m.pendingAttack)!=null&&ge.players)){const Fe=m.pendingAttack;let Re="";if(V.length>0){const Ce=V.map(We=>{const Vt=(rt[We._role]||[]).find(Li=>Li.cardId===We.cardId)||We,Yt=rt[We._role]||[],ai=Yt.findIndex(Li=>Li.cardId===We.cardId),Ei=st(Yt.length),Wt=ai>=0?Ei[ai]:Vt._col??1;return{...Vt,_line:We._role,_col:Wt}}),mt=oi(Ce,((Me=m.modifiers)==null?void 0:Me[p])||{},m[p+"Formation"]);Re=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${V.length}/3)</div>
            <div style="display:flex;justify-content:center">${Je(Ce.map(We=>({...We,used:!1})),"#3a7bd5",mt.total,"defense",m[p+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${R} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${Je((Fe.players||[]).map(Ce=>({...Ce,used:!1})),"#ff6b6b",Fe.total,"attack",m[u+"Formation"])}</div>
          ${Re}
        </div>`}if(F&&((_e=m.pendingAttack)!=null&&_e.players)){const Fe=m.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${Je((Fe.players||[]).map(Re=>({...Re,used:!1})),"#00ff88",Fe.total,"attack",m[p+"Formation"])}</div>
        </div>`}if(F&&!((Dt=m.pendingAttack)!=null&&Dt.players)&&V.length>0){const Fe=V.map(Ce=>{const mt=(rt[Ce._role]||[]).find(Wt=>Wt.cardId===Ce.cardId)||Ce,We=["GK","DEF"].includes(Ce._role),Vt=rt[Ce._role]||[],Yt=Vt.findIndex(Wt=>Wt.cardId===Ce.cardId),ai=st(Vt.length),Ei=Yt>=0?ai[Yt]:mt._col??1;return{...mt,_line:Ce._role,_col:Ei,...We?{note_a:Math.max(1,Number(mt.note_a)||0)}:{}}}),Re=ni(Fe,((at=m.modifiers)==null?void 0:at[p])||{},m[p+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${V.length}/3)</div>
          <div style="display:flex;justify-content:center">${Je(Fe.map(Ce=>({...Ce,used:!1})),"#FFD700",Re.total,"attack",m[p+"Formation"])}</div>
        </div>`}const J=(m.log||[]).slice(-1)[0];return J?'<div style="padding:2px 4px">'+to(J)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),rn=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${z}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${M} – ${B}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${R}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${go}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(m.log||[]).length})
      </button>`;dt(t),t.style.overflow="hidden",ie?t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${rn}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Bt}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${$t}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ut}${ot}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ce.map(J=>De(J,!1)).join("")}
            ${be?De(null,!0):""}
          </div>
        </div>
      </div>`:t.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${rn}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ot(k,m[p+"Formation"],ft,Q,zt(),Gt(),Oe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ce.map(J=>Ye(J,!1)).join("")}
            ${be?Ye(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${F&&re.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${F&&re.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${F&&re.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${F&&re.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${re.length}</div>
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
          <div>${ut}${ot}</div>
        </div>
      </div>`;function qt(){const J=t.querySelector(".match-screen");if(!J)return;const ge=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);J.style.height=ge+"px",J.style.minHeight=ge+"px",J.style.maxHeight=ge+"px",J.style.overflow="hidden";const Me=t.querySelector("#mobile-action-bar"),_e=t.querySelector("#mobile-play-area");Me&&_e&&(_e.style.paddingBottom=Me.offsetHeight+"px")}if(qt(),setTimeout(qt,120),setTimeout(qt,400),S||(S=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",qt),window.visualViewport.addEventListener("scroll",qt)),window.addEventListener("resize",qt)),function(){const ge=t.querySelector("#match-field .terrain-wrapper svg")||t.querySelector(".terrain-wrapper svg");if(!ge)return;const Me=ge.closest("#match-terrain-wrap");Me&&(Me.style.cssText="position:relative;width:100%;height:100%;padding:0"),ge.removeAttribute("width"),ge.removeAttribute("height"),ge.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ge.setAttribute("preserveAspectRatio","xMidYMid meet")}(),m._pvpResizeBound||(m._pvpResizeBound=!0,window.addEventListener("resize",()=>{const J=t.querySelector(".terrain-wrapper svg");if(J){const ge=J.closest("#match-terrain-wrap");ge&&(ge.style.cssText="position:relative;width:100%;height:100%;padding:0"),J.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t.querySelectorAll(".match-slot-hit").forEach(J=>{J.addEventListener("click",()=>{if(!F&&!N)return;const ge=J.dataset.cardId,Me=J.dataset.role,_e=(k[Me]||[]).find(Re=>Re.cardId===ge);if(!_e||_e.used)return;const Dt=Oe.includes(ge);if(F&&!["MIL","ATT"].includes(Me)&&!Dt)return;Array.isArray(m["selected_"+p])||(m["selected_"+p]=[]);const at=m["selected_"+p],Fe=at.findIndex(Re=>Re.cardId===ge);Fe>-1?at.splice(Fe,1):at.length<3&&at.push({..._e,_role:Me}),U()})}),t.querySelectorAll(".match-used-hit").forEach(J=>{J.addEventListener("click",()=>P(J.dataset.cardId))}),t.querySelectorAll(".pvp-sub-btn").forEach(J=>{J.addEventListener("click",()=>P())}),(an=t.querySelector("#pvp-sub-open"))==null||an.addEventListener("click",()=>P()),t.querySelectorAll(".pvp-gc-mini").forEach(J=>{F?J.addEventListener("click",()=>C(J.dataset.gcId,J.dataset.gcType)):(J.style.opacity="0.35",J.style.cursor="default",J.addEventListener("click",()=>Et("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(sn=t.querySelector("#pvp-boost-card"))==null||sn.addEventListener("click",()=>O()),(dn=t.querySelector("#pvp-action"))==null||dn.addEventListener("click",J=>{F?J.currentTarget.dataset.pass==="1"||!pt(p)?pe():Ie():N&&Ae()}),(ln=t.querySelector("#pvp-quit"))==null||ln.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&_()}),(cn=t.querySelector("#pvp-view-opp"))==null||cn.addEventListener("click",()=>D()),(pn=t.querySelector("#pvp-toggle-history"))==null||pn.addEventListener("click",()=>K()),E&&(clearInterval(E),E=null),Ue(),(F||N)&&!A){let J=30,ge=!1;const Me=()=>document.getElementById("pvp-timer"),_e=()=>{Me()&&(Me().textContent=J+"s",Me().style.color=ge?"#ff4444":"#fff")};_e(),E=setInterval(()=>{J--,J<0?ge?(clearInterval(E),E=null,Ue(),F&&!pt(p)?pe():_()):(ge=!0,J=15,_e(),Bn("/sounds/timer-urgent.mp3",.6)):_e()},1e3)}}function le(){dt(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${Sr(m[u+"Team"],m[u+"Formation"],null,m[u+"Name"]||"Adversaire")}
    </div>`;const k=t.querySelector("svg"),I=k==null?void 0:k.closest("#match-terrain-wrap");I&&(I.style.cssText="position:relative;width:100%;height:100%;padding:0"),k&&(k.removeAttribute("width"),k.removeAttribute("height"),k.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",k.setAttribute("preserveAspectRatio","xMidYMid meet")),p==="p1"&&setTimeout(async()=>{await T({phase:"midfield"})},5e3)}let fe=!1;function ue(){if(fe)return;const k=m[p+"Team"].MIL||[],I=m[u+"Team"].MIL||[],M=bt(k)+yt(k),B=bt(I)+yt(I),z=M>=B;dt(t),t.innerHTML=`
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
      ${bi(k,m[p+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${bi(I,m[u+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const R=(re,se)=>t.querySelectorAll(re).forEach((xe,ce)=>{setTimeout(()=>{xe.style.opacity="1",xe.style.transform="translateY(0) scale(1)"},se+ce*90)});R(".duel-card-me",150),R(".duel-card-opp",500),setTimeout(()=>t.querySelectorAll(".duel-link").forEach((re,se)=>setTimeout(()=>{re.style.opacity="1"},se*70)),900),setTimeout(()=>{const re=t.querySelector("#pvp-vs");re&&(re.style.opacity="1",re.style.animation="vsFlash .5s ease"),t.querySelectorAll(".duel-score-line").forEach(se=>se.style.opacity="1")},1250);function F(re,se,xe){const ce=document.getElementById(re);if(!ce)return;const be=performance.now(),ve=oe=>{const Le=Math.min(1,(oe-be)/xe);ce.textContent=Math.round(se*(1-Math.pow(1-Le,3))),Le<1?requestAnimationFrame(ve):ce.textContent=se};requestAnimationFrame(ve)}setTimeout(()=>{F("pvp-score-me",M,800),F("pvp-score-opp",B,800)},1500);const N=m.p1Team.MIL||[],V=m.p2Team.MIL||[],Q=bt(N)+yt(N),ie=bt(V)+yt(V),te=Q>=ie?"p1":"p2";let Z=m.boostValue;Z==null&&(Z=Zn(),m.boostValue=Z,m.boostOwner=te,m.boostUsed=!1),fe=!0,setTimeout(()=>{const re=t.querySelector("#duel-row-"+(z?"me":"opp")),se=t.querySelector("#duel-row-"+(z?"opp":"me")),xe=document.getElementById("pvp-score-me"),ce=document.getElementById("pvp-score-opp"),be=z?xe:ce,ve=z?ce:xe;be&&(be.style.fontSize="80px",be.style.color=z?"#FFD700":"#ff6b6b",be.style.animation="duelPulse .5s ease"+(z?",duelGlow 1.5s ease infinite .5s":"")),ve&&(ve.style.opacity="0.25"),setTimeout(()=>{re&&(re.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",re.style.zIndex="5"),setTimeout(()=>{const oe=document.getElementById("duel-shock");oe&&(oe.style.animation="shockwave .5s ease-out forwards"),se&&(se.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Te;const oe=document.getElementById("pvp-duel-finale");if(!oe)return;const Le=m.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+Z+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ge=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;oe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(z?"⚽ "+m[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+m[u+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Le+Ge,oe.style.transition="opacity .45s ease",oe.style.opacity="1",oe.style.pointerEvents="auto",(Te=document.getElementById("pvp-start-match"))==null||Te.addEventListener("click",async()=>{const Ve=te;await T({phase:Ve+"-attack",attacker:Ve,round:1,boostValue:Z,boostUsed:!1,boostOwner:Ve})})},600)},700)},2800)}function $(k,I,M){var se,xe;const B=(m.gcDefs||[]).find(ce=>{var be;return ce.name===k||((be=ce.name)==null?void 0:be.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),z={purple:"#b06ce0",light_blue:"#00d4ef"}[B==null?void 0:B.color]||"#b06ce0",R=(B==null?void 0:B.name)||k,F=(B==null?void 0:B.effect)||((se=ze[k])==null?void 0:se.desc)||"",N=B!=null&&B.image_url?`/icons/${B.image_url}`:null,V=((xe=ze[k])==null?void 0:xe.icon)||"⚡",ie=I===p?"Vous":m[I+"Name"]||"Adversaire",te=document.createElement("div");te.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",te.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{filter:drop-shadow(0 0 20px ${z}66)}50%{filter:drop-shadow(0 0 40px ${z}cc)}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${z};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${ie} joue une carte</div>
      <div style="animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        ${tt(R,N,V,F,{width:200})}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(te);let Z=!1;const re=()=>{Z||(Z=!0,te.remove(),setTimeout(()=>M&&M(),50))};te.addEventListener("click",re),setTimeout(re,3e3)}function C(k,I){var ie,te,Z,re;const B=(m["gcCardsFull_"+p]||[]).find(se=>se.id===k),z=B==null?void 0:B._gcDef,R=(z==null?void 0:z.name)||I,F=(z==null?void 0:z.effect)||((ie=ze[I])==null?void 0:ie.desc)||"Carte spéciale.",N=z!=null&&z.image_url?`/icons/${z.image_url}`:null,V=((te=ze[I])==null?void 0:te.icon)||"⚡",Q=document.createElement("div");Q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",Q.innerHTML=`
      ${tt(R,N,V,F,{width:190})}
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(Q),(Z=Q.querySelector("#pvp-gc-back"))==null||Z.addEventListener("click",()=>Q.remove()),(re=Q.querySelector("#pvp-gc-use"))==null||re.addEventListener("click",()=>{Q.remove(),ae(k,I)})}function O(){var B;const k=m[p+"Team"],I=Object.entries(k).flatMap(([z,R])=>(R||[]).filter(F=>!F.used).map(F=>({...F,_line:z})));if(!I.length)return;const M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",M.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${m.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${I.map(z=>{const R={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[z._line]||"#555",F=Pe(z,z._line)+(z.boost||0);return`<div class="bp-item" data-cid="${z.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${R};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${z.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${F}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(M),(B=M.querySelector("#bp-close"))==null||B.addEventListener("click",()=>M.remove()),M.querySelectorAll(".bp-item").forEach(z=>{z.addEventListener("click",async()=>{const R=z.dataset.cid,F=I.find(V=>V.cardId===R);if(!F)return;const N=(k[F._line]||[]).find(V=>V.cardId===R);N&&(N.boost=(N.boost||0)+m.boostValue),M.remove(),await T({[p+"Team"]:k,boostUsed:!0})})})}function P(k=null){var re,se;if(!(m.phase===p+"-attack")){g("Remplacement uniquement avant votre attaque","warning");return}const M=m[p+"Team"],B=m["usedSubIds_"+p]||[],z=m.maxSubs||3;if(B.length>=z){g(`Maximum ${z} remplacements atteint`,"warning");return}const R=Object.entries(M).flatMap(([xe,ce])=>(ce||[]).filter(be=>be.used).map(be=>({...be,_line:xe}))),F=(m[p+"Subs"]||[]).filter(xe=>!B.includes(xe.cardId));if(!R.length){g("Aucun joueur utilisé à remplacer","warning");return}if(!F.length){g("Aucun remplaçant disponible","warning");return}let N=Math.max(0,R.findIndex(xe=>xe.cardId===k));const V=((re=R[N])==null?void 0:re._line)||((se=R[N])==null?void 0:se.job);let Q=Math.max(0,F.findIndex(xe=>xe.job===V)),ie=!1;const te=document.createElement("div");te.id="pvp-sub-overlay",te.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function Z(){var Ge,Te,Ve,Oe,nt,Kt;const xe=R[N],ce=F[Q],be=Math.min(130,Math.round((window.innerWidth-90)/2)),ve=Math.round(be*1.35),oe=De=>`background:rgba(255,255,255,0.12);border:none;color:${De?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${De?"default":"pointer"};flex-shrink:0`;te.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${B.length}/${z})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${oe(Q===0)}" ${Q===0?"disabled":""}>▲</button>
          <div>${ce?vt({...ce,used:!1,boost:0},be,ve):"<div>—</div>"}</div>
          <button id="pin-down" style="${oe(Q>=F.length-1)}" ${Q>=F.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${Q+1}/${F.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${oe(N===0)}" ${N===0?"disabled":""}>▲</button>
          <div>${xe?vt({...xe,used:!1,boost:0},be,ve):"<div>—</div>"}</div>
          <button id="pout-down" style="${oe(N>=R.length-1)}" ${N>=R.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${N+1}/${R.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Ge=te.querySelector("#psub-close"))==null||Ge.addEventListener("click",()=>te.remove()),(Te=te.querySelector("#pout-up"))==null||Te.addEventListener("click",()=>{N>0&&(N--,Z())}),(Ve=te.querySelector("#pout-down"))==null||Ve.addEventListener("click",()=>{N<R.length-1&&(N++,Z())}),(Oe=te.querySelector("#pin-up"))==null||Oe.addEventListener("click",()=>{Q>0&&(Q--,Z())}),(nt=te.querySelector("#pin-down"))==null||nt.addEventListener("click",()=>{Q<F.length-1&&(Q++,Z())});const Le=(De,Ye,He,ut)=>{const ot=te.querySelector("#"+De);if(!ot)return;let Bt=0;ot.addEventListener("touchstart",ft=>{Bt=ft.touches[0].clientY},{passive:!0}),ot.addEventListener("touchend",ft=>{const $t=ft.changedTouches[0].clientY-Bt;if(Math.abs($t)<30)return;const rt=Ye();$t<0&&rt<ut-1?(He(rt+1),Z()):$t>0&&rt>0&&(He(rt-1),Z())},{passive:!0})};Le("pin-panel",()=>Q,De=>Q=De,F.length),Le("pout-panel",()=>N,De=>N=De,R.length),(Kt=te.querySelector("#psub-confirm"))==null||Kt.addEventListener("click",async De=>{if(De.preventDefault(),De.stopPropagation(),ie)return;ie=!0;const Ye=R[N],He=F[Q];if(!Ye||!He)return;const ut=Ye._line,ot=(M[ut]||[]).findIndex($t=>$t.cardId===Ye.cardId);if(ot===-1){g("Erreur : joueur introuvable","error"),te.remove();return}const Bt={...He,_line:ut,position:Ye.position,used:!1,boost:0};M[ut].splice(ot,1,Bt);const ft=[...B,He.cardId];te.remove(),X(Ye,He,async()=>{await T({[p+"Team"]:M,[u+"Team"]:m[u+"Team"],["usedSubIds_"+p]:ft})})})}document.body.appendChild(te),Z()}function X(k,I,M){const B={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const R=(V,Q,ie)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${Q};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${ie}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${B[V.job]||"#555"};border:3px solid ${Q};position:relative;overflow:hidden;margin:0 auto">
        ${Mt(V)?`<img src="${Mt(V)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(V.name||"").slice(0,12)}</div>
    </div>`;z.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${R(I,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${R(k,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(z);let F=!1;const N=()=>{F||(F=!0,z.remove(),setTimeout(()=>M(),50))};z.addEventListener("click",N),setTimeout(N,2200)}function D(){var I;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",k.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${m[u+"Name"]}</div>
      <div style="width:min(90vw,420px)">${_i(m[u+"Team"],m[u+"Formation"],null,[],zt(),Gt())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(k),(I=k.querySelector("#pvp-opp-close"))==null||I.addEventListener("click",()=>k.remove())}function K(){var M;const k=m.log||[],I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",I.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${k.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...k].reverse().map(B=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${B.type==="goal"?"#FFD700":B.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${B.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(I),(M=I.querySelector("#pvp-hist-close"))==null||M.addEventListener("click",()=>I.remove())}async function pe(){if(m.phase!==p+"-attack")return;const k=p==="p1"?"p2":"p1",I=(m.round||0)+1,M=[...m.log||[]];M.push({type:"info",text:`⏭️ ${m[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const B=Ee(m),z=pt(k),R=B||!z?"finished":k+"-attack";await T({["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},pendingAttack:null,phase:R,attacker:k,round:I,log:M}),R==="finished"&&await qe(m)}function ne(k){const I=(k.GK||[]).some(B=>!B.used),M=["DEF","MIL","ATT"].some(B=>(k[B]||[]).some(z=>!z.used));return I&&!M}function me(k){return(k.p1Score||0)!==(k.p2Score||0)?null:ne(k.p1Team)&&!$e(k.p2Team)?{side:"p1",gk:(k.p1Team.GK||[]).find(I=>!I.used)}:ne(k.p2Team)&&!$e(k.p1Team)?{side:"p2",gk:(k.p2Team.GK||[]).find(I=>!I.used)}:null}async function we(){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(k);const I=(M,B)=>new Promise(z=>{k.innerHTML=`<div style="font-size:32px;font-weight:900;color:${B};letter-spacing:2px;animation:lcFade 1.4s ease both">${M}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(z,1400)});await I("⚽ DERNIER CORNER","#FFD700"),await I("🧤 LE GARDIEN MONTE !","#4fc3f7"),k.remove()}async function he(k,I){const{side:M,gk:B}=k;if(!B)return;const z=M+"Score",R=(I[z]||0)+1;B.used=!0;const F=[...I.log||[]];F.push({type:"duel",isGoal:!0,homeScored:M===p,homePlayers:M==="p1"?[Ft(B)]:[],aiPlayers:M==="p2"?[Ft(B)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${I[M+"Name"]} marque !`});const N=(I.round||0)+1,V=M==="p1"?"p2":"p1",Q={...I,[z]:R},ie=Ee(Q);q.add(N),await we();const te=M===p?R:I[p+"Score"]||0,Z=M===p?I[u+"Score"]||0:R;Qe([Ft(B)],te,Z,M===p,async()=>{await T({[z]:R,log:F,round:N,pendingAttack:null,phase:ie?"finished":V+"-attack",attacker:V,["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}}}),ie&&await qe({...m,[z]:R})})}async function Ie(){const k=m[p+"Team"],I=!["GK","DEF","MIL","ATT"].some(R=>(m[u+"Team"][R]||[]).some(F=>!F.used)),M=(m["selected_"+p]||[]).map(R=>{const F=(k[R._role]||[]).find(se=>se.cardId===R.cardId)||R,N=["GK","DEF"].includes(R._role),V=k[R._role]||[],Q=V.findIndex(se=>se.cardId===R.cardId),ie=st(V.length),te=Q>=0?ie[Q]:F._col??1,Z=m.stadiumDef||m.homeStadiumDef||null,re=F.stadiumBonus||Z&&(Z.club_id&&String(F.club_id)===String(Z.club_id)||Z.country_code&&F.country_code===Z.country_code)||!1;return{...F,_line:R._role,_col:te,stadiumBonus:re,...N?{note_a:Math.max(1,Number(F.note_a)||0)}:{}}});if(!M.length)return;const B=ni(M,m.modifiers[p]||{},m[p+"Formation"]);de(p,M.map(R=>R.cardId)),M.forEach(R=>{const F=(k[R._role]||[]).find(N=>N.cardId===R.cardId);F&&(F.used=!0)}),m["selected_"+p]=[],U();const z=[...m.log||[]];if(I){if(M.length===1&&(M[0]._line==="GK"||M[0].job==="GK")&&(m.p1Score||0)===(m.p2Score||0)){await he({side:p,gk:M[0]},{...m,[p+"Team"]:k,log:z});return}const F=(m[p+"Score"]||0)+1,N=M.map(Z=>Ft(Z));z.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:N,homeTotal:B.total,aiTotal:0});const V=(m.round||0)+1,Q=p==="p1"?"p2":"p1",ie={...m,[p+"Team"]:k,[p+"Score"]:F},te=Ee(ie);q.add(V),Qe(N,F,m[u+"Score"]||0,!0,async()=>{await T({[p+"Team"]:k,[p+"Score"]:F,["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},pendingAttack:null,phase:te?"finished":Q+"-attack",attacker:Q,round:V,log:z}),te&&await qe({...m,[p+"Score"]:F})});return}z.push({type:"pending",text:`⚔️ ${m[p+"Name"]} attaque (${B.total})`}),await T({[p+"Team"]:k,[u+"Team"]:m[u+"Team"],pendingAttack:{...B,players:M,side:p},["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},phase:u+"-defense",log:z})}async function Ae(){const k=m[p+"Team"],I=(m["selected_"+p]||[]).map(ce=>{const be=(k[ce._role]||[]).find(Te=>Te.cardId===ce.cardId)||ce,ve=k[ce._role]||[],oe=ve.findIndex(Te=>Te.cardId===ce.cardId),Le=st(ve.length),Ge=oe>=0?Le[oe]:be._col??1;return{...be,_line:ce._role,_col:Ge}}),M=oi(I,m.modifiers[p]||{},m[p+"Formation"]);de(p,I.map(ce=>ce.cardId)),I.forEach(ce=>{const be=(k[ce._role]||[]).find(ve=>ve.cardId===ce.cardId);be&&(be.used=!0)}),m["selected_"+p]=[],U();const B=Zi(m.pendingAttack.total,M.total,m.modifiers[p]||{}),z=m.pendingAttack.side,R=B==="attack"||(B==null?void 0:B.goal),F=z==="p1"?"p2":"p1",N=(m.round||0)+1,V=(m.pendingAttack.players||[]).map(ce=>Ft(ce)),Q=[...m.log||[]];Q.push({type:"duel",isGoal:R,homeScored:R&&z===p,text:R?`⚽ BUT de ${m[z+"Name"]} ! (${m.pendingAttack.total} vs ${M.total})`:`✋ Attaque stoppée (${m.pendingAttack.total} vs ${M.total})`,homePlayers:V,aiPlayers:I.map(ce=>Ft(ce)),homeTotal:m.pendingAttack.total,aiTotal:M.total});const ie=R?(m[z+"Score"]||0)+1:m[z+"Score"]||0,te={...m,[p+"Team"]:k,[z+"Score"]:ie},Z=Ee(te),re=Z?"finished":F+"-attack",se=!Z&&!R?me(te):null,xe=async()=>{if(se){await he(se,te);return}await T({[p+"Team"]:k,[u+"Team"]:m[u+"Team"],[z+"Score"]:ie,["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},pendingAttack:null,phase:re,attacker:F,round:N,log:Q}),(re==="finished"||Z)&&await qe({...m,[z+"Score"]:ie})};if(R){const ce=z===p,be=ce?ie:m[p+"Score"]||0,ve=ce?m[u+"Score"]||0:ie;q.add(N),Qe(V,be,ve,ce,xe)}else await xe()}function Be(k){return["MIL","ATT"].some(I=>(k[I]||[]).some(M=>!M.used))}function $e(k){return["GK","DEF","MIL","ATT"].some(I=>(k[I]||[]).some(M=>!M.used))}function kt(k){return $e(k)&&!Be(k)}function pt(k){const I=m[k+"Team"],M=m[(k==="p1"?"p2":"p1")+"Team"];return!!(Be(I)||kt(I)&&!$e(M)||kt(I)&&!Be(M)&&$e(M))}function Ee(k){return!$e(k.p1Team)&&!$e(k.p2Team)}function je(k){const I=k.p1Score||0,M=k.p2Score||0;return I===M?null:I>M?h.home_id:h.away_id}async function qe(k){Tt(),Ue();try{const I=je(k),M=I?h.home_id===I?h.away_id:h.home_id:null,B=k.p1Score||0,z=k.p2Score||0,{data:R,error:F}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:I,p_home_score:B,p_away_score:z,p_forfeit:!1});if(F&&console.error("[PvP] finish_pvp_match:",F),c)try{await v.rpc("check_and_finish_mini_league",{p_league_id:c})}catch(N){console.error("[PvP] check_and_finish_mini_league:",N)}I&&M&&Wr(I,M).catch(()=>{});try{const{data:N}=await v.rpc("apply_match_rewards",{p_match_id:i});N!=null&&N.success&&!(N!=null&&N.skipped)&&typeof e.refreshProfile=="function"&&await e.refreshProfile()}catch(N){console.error("[PvP] apply_match_rewards:",N)}if(typeof l=="function")try{await l({homeScore:B,awayScore:z,winnerId:I,homeId:h.home_id,awayId:h.away_id,matchId:i})}catch(N){console.error("[PvP] onMatchEnd:",N)}}catch(I){console.error("[PvP] finishMatch:",I)}}function Ne(){var z;const k=m[p+"Score"],I=m[u+"Score"],M=k>I,B=k===I;dt(t),t.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${M?"🏆":B?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${M?"Victoire !":B?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${k} - ${I}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${c?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(z=document.getElementById("pvp-home"))==null||z.addEventListener("click",()=>{try{v.removeChannel(G)}catch{}it(t),c?x("mini-league",{openLeagueId:c}):x("home")})}U()}async function Ni(t,e,i=!1){var s,d;const{state:n,navigate:r,toast:o}=e,a=i&&((d=(s=e==null?void 0:e.state)==null?void 0:s.params)==null?void 0:d.rankedData)||null;await ki(t,e,i?"ranked":"random",async({deckId:l,formation:c,starters:f,subsRaw:b,gcCardsEnriched:x,gcDefs:g,stadiumDef:p})=>{dt(t);const u=async y=>{await Qr(t,e,l,c,f,b,y||[],g,p,i,a)};if(!(x!=null&&x.length)){await u([]);return}wi(t,x,u)})}async function Jr(t,e,i){return Xr(t,e,i)}async function Qr(t,e,i,n,r,o,a=[],s=[],d=null,l=!1,c=null){var ee,G;const{state:f,navigate:b,toast:x}=e,g=(c==null?void 0:c.mmr)??((ee=f.profile)==null?void 0:ee.mmr)??1e3,p=l?vi(g):null,u=l?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",y=l?(p==null?void 0:p.color)||"#D4A017":"#FFD700";let w=!1,h=null,L=null;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${u};color:#fff;padding:32px;text-align:center;gap:20px">
      ${l?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${l?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${l?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(g)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${y};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const m=async()=>{w=!0,h&&(h.unsubscribe(),h=null),L&&(clearInterval(L),L=null);try{await v.rpc("cancel_matchmaking",{p_user_id:f.profile.id})}catch(T){console.error("[Matchmaking] cancel error:",T)}};(G=document.getElementById("cancel-mm"))==null||G.addEventListener("click",async()=>{await m(),it(t),b("home")});const A=async(T,_)=>{w||(w=!0,h&&(h.unsubscribe(),h=null),L&&(clearInterval(L),L=null),await jt(t,e,T,_,{myGC:a,gcDefs:s,stadiumDef:d,isRanked:l,rankedData:c,onMatchEnd:l?Zr:null}))},E=f.user.id,{data:S,error:q}=l?await v.rpc("try_matchmake_ranked",{p_user_id:E,p_deck_id:i,p_mmr:g}):await v.rpc("try_matchmake",{p_user_id:E,p_deck_id:i});if(q||!(S!=null&&S.success)){console.error("[Matchmaking] try_matchmake error:",q||S),x("Erreur de matchmaking","error"),it(t),b("home");return}if(S.matched){await A(S.match_id,!1);return}const W=async()=>{if(w)return;const{data:T}=await v.from("matchmaking_queue").select("status, match_id").eq("user_id",E).maybeSingle();(T==null?void 0:T.status)==="matched"&&T.match_id&&await A(T.match_id,!0)};h=v.channel(`mm_${E}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${E}`},T=>{const _=T.new;_.status==="matched"&&_.match_id&&A(_.match_id,!0)}).subscribe(),L=setInterval(W,3e3),setTimeout(()=>{w||m()},12e4)}async function Zr(t,e){const{state:i,toast:n}=e,{winnerId:r,homeId:o,awayId:a,homeScore:s,awayScore:d,matchId:l}=t,c=i.user.id,f=o===c,b=r===c,{data:x}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",c).single(),{data:g}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",f?a:o).single();if(x&&g){const p=xo(x.mmr,x.mmr_rd,x.mmr_v,g.mmr,g.mmr_rd,b?1:0);await v.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:b?v.sql`mmr_wins + 1`:void 0,mmr_losses:b?void 0:v.sql`mmr_losses + 1`}).eq("id",c),n(b?`+MMR ↑ ${Math.round(p.mmr-x.mmr)}`:`-MMR ↓ ${Math.round(x.mmr-p.mmr)}`,b?"success":"error",4e3)}}const ao=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Ni,resumePvpMatch:Jr},Symbol.toStringTag,{value:"Module"}));async function ea(t,e){const{state:i,navigate:n,toast:r}=e,o=i.params||{},a=o.friendId||null,s=o.friendName||"Ami",d=!!o.isAccepting;await ki(t,e,"friend",async({deckId:l,formation:c,starters:f,subsRaw:b,gcCardsEnriched:x,gcDefs:g,stadiumDef:p})=>{dt(t);const u=async y=>{const w=y||[];d?await ia(t,e,l,w,g,p):await ta(t,e,l,w,g,p,a,s)};if(!(x!=null&&x.length)){await u([]);return}wi(t,x,u)})}async function ta(t,e,i,n,r,o,a,s){var w;const{state:d,navigate:l,toast:c}=e,f=d.user.id,{data:b,error:x}=await v.from("friend_match_invites").insert({inviter_id:f,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(x||!b){console.error("[Friend] Erreur création invitation:",x),c("Impossible de créer l'invitation","error"),l("home");return}t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let g=!1,p=null;const u=async()=>{p&&(p.unsubscribe(),p=null)};(w=document.getElementById("cancel-friend"))==null||w.addEventListener("click",async()=>{await u(),await v.from("friend_match_invites").update({status:"declined"}).eq("id",b.id),it(t),l("home")}),p=v.channel(`friend_invite_${b.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${b.id}`},async({new:h})=>{g||h.status!=="accepted"||!h.match_id||(g=!0,await u(),await jt(t,e,h.match_id,!0,{myGC:n,gcDefs:r,stadiumDef:o}))}).subscribe();const y=setInterval(async()=>{if(g)return;const{data:h}=await v.from("friend_match_invites").select("status, match_id").eq("id",b.id).single();(h==null?void 0:h.status)==="accepted"&&h.match_id&&(g=!0,clearInterval(y),await u(),await jt(t,e,h.match_id,!0,{myGC:n,gcDefs:r,stadiumDef:o}))},3e3);setTimeout(async()=>{g||(clearInterval(y),await u(),c("Invitation expirée","info"),l("home"))},12e4)}async function ia(t,e,i,n,r,o){const{state:a,navigate:s,toast:d}=e,l=a.user.id,{data:c}=await v.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",l).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){d("Aucune invitation en attente","error"),s("home");return}const{data:f,error:b}=await v.rpc("accept_friend_invite",{p_invite_id:c.id,p_invitee_deck_id:i});if(b||!(f!=null&&f.success)){console.error("[Friend] Erreur accept_friend_invite:",b||f),d((f==null?void 0:f.error)||"Impossible de rejoindre le match","error"),s("home");return}await jt(t,e,f.match_id,!1,{myGC:n,gcDefs:r,stadiumDef:o})}const so="#1A6B3C",lt="#D4A017",Jt="var(--tile-bg)",Qt="var(--tile-border)",It="var(--divider)",Xe="var(--tile-fg-on-page)",Lt="var(--tile-fg-dim)",Ze="var(--tile-fg-faint)",ei="var(--nav-fg,#fff)",lo="rgba(255,255,255,0.62)",na="rgba(255,255,255,0.4)";async function oa(t,e){var n;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=e.state.params)==null?void 0:n.openLeagueId;if(i){e.state.params.openLeagueId=null,await ct(t,e,i);return}await et(t,e)}async function et(t,e,i="waiting"){var h,L;const{state:n}=e,r=n.profile.id,{data:o}=await v.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",r),a=(o||[]).map(m=>m.league_id),s={};(o||[]).forEach(m=>{s[m.league_id]={amount:m.prize_amount,claimed:m.prize_claimed}});const{data:d,error:l}=await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),c=l?(await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:d||[],b=(a.length?await v.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],x=b.filter(m=>m.status==="waiting"&&!m.is_archived),g=b.filter(m=>m.status==="active"&&!m.is_archived),p=b.filter(m=>m.is_archived||m.status==="finished");let u=p;if(p.length){const{data:m}=await v.from("mini_league_matches").select("league_id").in("league_id",p.map(E=>E.id)).or(`home_id.eq.${r},away_id.eq.${r}`).not("status","eq","bye"),A=new Set((m||[]).map(E=>E.league_id));u=p.filter(E=>A.has(E.id))}const y=c.filter(m=>!a.includes(m.id)),w=[{key:"waiting",label:"🟡 En attente",count:x.length+y.length},{key:"active",label:"🟢 En cours",count:g.length},{key:"archived",label:"📁 Archivées",count:u.length}];t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${It};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${ei}">🏆 Mini League</div>
        <div style="font-size:12px;color:${lo}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${ei}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${It}">
      ${w.map(m=>`<button class="ml-tab" data-tab="${m.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===m.key?so:"transparent"};background:none;font-size:12px;font-weight:${i===m.key?"900":"600"};color:${i===m.key?"#4ade80":na};cursor:pointer">${m.label}${m.count?` (${m.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?ra(x,y,r):i==="active"?aa(g,r):sa(u,r,s)}
    </div>
  </div>`,(h=document.getElementById("ml-create-btn"))==null||h.addEventListener("click",()=>da(t,e)),(L=document.getElementById("ml-refresh-list"))==null||L.addEventListener("click",()=>et(t,e,i)),t.querySelectorAll(".ml-tab").forEach(m=>m.addEventListener("click",()=>et(t,e,m.dataset.tab))),t.querySelectorAll("[data-league-id]").forEach(m=>m.addEventListener("click",()=>ct(t,e,m.dataset.leagueId))),t.querySelectorAll("[data-join]").forEach(m=>m.addEventListener("click",A=>{A.stopPropagation(),co(t,e,m.dataset.join,m.dataset.type)})),t.querySelectorAll("[data-delete]").forEach(m=>m.addEventListener("click",A=>{A.stopPropagation(),Gi(t,e,m.dataset.delete,m.dataset.name,i)})),t.querySelectorAll("[data-claim-league]").forEach(m=>m.addEventListener("click",async A=>{A.stopPropagation(),m.disabled=!0,m.textContent="...";const{data:E,error:S}=await v.rpc("claim_mini_league_prize",{p_league_id:m.dataset.claimLeague,p_user_id:n.profile.id});if(S||!(E!=null&&E.success)){e.toast((E==null?void 0:E.error)||"Erreur lors de la récupération","error"),et(t,e,i);return}if(!E.already_claimed){n.profile.credits=(n.profile.credits||0)+E.prize;const q=document.getElementById("nav-credits");q&&(q.textContent=`💰 ${n.profile.credits.toLocaleString("fr")}`),e.toast(`💰 +${E.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}et(t,e,i)}))}function hi(t,e,i=!1,n=null){var d,l;const r=t.creator_id===e,o=t.pot||0,a=((l=(d=t.mini_league_members)==null?void 0:d[0])==null?void 0:l.count)||0,s=n&&n.amount>0&&!n.claimed;return`<div data-league-id="${t.id}" style="background:${Jt};border:1px solid ${s?"rgba(212,160,23,0.5)":Qt};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${Xe}">${t.name}</div>
      ${r?`<button data-delete="${t.id}" data-name="${t.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${Lt};margin-bottom:${i||s?"10px":"0"}">
      <span>${t.type==="private"?"🔒":"🌐"} ${t.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${t.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${t.max_players}</span>
      <span>💰 ${(t.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${o>0?`<span style="color:${lt};font-weight:700">🏆 ${o.toLocaleString("fr")} cr.</span>`:""}
      ${t.current_day>0?`<span>📅 J${t.current_day}/${t.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${t.id}" data-type="${t.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(t.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
    ${s?`<button data-claim-league="${t.id}" class="btn btn-sm" style="width:100%;background:${lt};color:#141000;font-weight:900;border:none">💰 Récupérer ${n.amount.toLocaleString("fr")} cr.</button>`:""}
  </div>`}function ra(t,e,i){const n=[];return t.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Ze};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),n.push(...t.map(r=>hi(r,i,!1)))),e.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Ze};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),n.push(...e.map(r=>hi(r,i,!0)))),n.length?n.join(""):`<div style="text-align:center;padding:40px;color:${Ze}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function aa(t,e){return t.length?t.map(i=>hi(i,e)).join(""):`<div style="text-align:center;padding:40px;color:${Ze}">Aucune mini league en cours.</div>`}function sa(t,e,i={}){return t.length?t.map(n=>hi(n,e,!1,i[n.id])).join(""):`<div style="text-align:center;padding:40px;color:${Ze}">Aucune mini league archivée.</div>`}function da(t,e){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var g,p,u,y;const{toast:n}=e,r=document.getElementById("ml-name").value.trim(),o=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,s=((g=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:g.value)||"public",d=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",l=((y=(u=document.getElementById("ml-pwd"))==null?void 0:u.value)==null?void 0:y.trim())||null;if(!r){n("Le nom est obligatoire","error");return}if(a<100){n("Mise minimum : 100 crédits","error");return}if(s==="private"&&!l){n("Mot de passe requis","error");return}const{data:c,error:f}=await v.from("mini_leagues").insert({name:r,creator_id:e.state.profile.id,type:s,password:l,mode:d,max_players:o,entry_fee:a}).select().single();if(f){n("Erreur : "+f.message,"error");return}const{data:b}=await v.from("users").select("credits").eq("id",e.state.profile.id).single();if(((b==null?void 0:b.credits)||0)<a){await v.from("mini_leagues").delete().eq("id",c.id),n(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await v.from("users").update({credits:b.credits-a}).eq("id",e.state.profile.id),await v.from("mini_leagues").update({pot:a}).eq("id",c.id),await v.from("mini_league_members").insert({league_id:c.id,user_id:e.state.profile.id}),e.state.profile&&(e.state.profile.credits=b.credits-a);const x=document.getElementById("nav-credits");x&&(x.textContent=`💰 ${(e.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),ct(t,e,c.id)})}function la(){return new Promise(t=>{const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",e.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(e);const i=e.querySelector("#ml-pwd-input"),n=r=>{e.remove(),t(r)};setTimeout(()=>i==null?void 0:i.focus(),80),e.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),e.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",r=>{r.key==="Enter"&&n(i.value.trim())})})}async function co(t,e,i,n){var f;const{toast:r,state:o}=e,a=o.profile.id;let s=null;if(n==="private"&&(s=await la(),s===null))return;const{data:d,error:l}=await v.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:s});if(l||!(d!=null&&d.success)){console.error("[MiniLeague] join_mini_league:",l||d),r((d==null?void 0:d.error)||"Erreur lors de l'inscription","error");return}if(typeof e.refreshProfile=="function")await e.refreshProfile();else{const{data:b}=await v.from("users").select("credits").eq("id",a).single();o.profile&&b&&(o.profile.credits=b.credits)}const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(((f=o.profile)==null?void 0:f.credits)||0).toLocaleString("fr")}`),r("✅ Inscrit ! Pot mis à jour.","success"),ct(t,e,i)}async function ca(t,e,i,n){const{toast:r,state:o}=e,a=o.profile.id;if(!await new Promise(b=>{const x=document.createElement("div");x.className="modal-overlay",x.style.zIndex="2100",x.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${n.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(x),x.querySelector("#lv-ok").onclick=()=>{x.remove(),b(!0)},x.querySelector("#lv-cancel").onclick=()=>{x.remove(),b(!1)}}))return;const{data:d,error:l}=await v.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(l||!(d!=null&&d.success)){r((d==null?void 0:d.error)||"Erreur lors de la désinscription","error");return}const c=d.refund||n;o.profile&&(o.profile.credits=(o.profile.credits||0)+c);const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),r(`↩️ Désinscrit · +${c.toLocaleString("fr")} cr. remboursés`,"success"),et(t,e,"waiting")}async function Gi(t,e,i,n,r){const{toast:o}=e;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await v.from("mini_league_matches").delete().eq("league_id",i),await v.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await v.from("mini_leagues").delete().eq("id",i);if(a){o("Erreur suppression ("+a.message+")","error");return}o("Mini League supprimée avec succès","success"),et(t,e,r)}async function pa(t,e,i){await v.from("mini_leagues").update({is_archived:!0}).eq("id",i),e.toast("Mini League archivée","success"),et(t,e,"archived")}async function ct(t,e,i){var L,m,A,E,S,q,W,ee,G;const{state:n,toast:r}=e,o=n.profile.id,[{data:a},{data:s},{data:d}]=await Promise.all([v.from("mini_leagues").select("*").eq("id",i).single(),v.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),v.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){r("Introuvable","error"),await et(t,e);return}const l=(s||[]).some(T=>T.user_id===o),c=a.creator_id===o,f=(s||[]).map(T=>T.user).filter(Boolean),b=xa(f,d||[]),x=(d||[]).filter(T=>T.matchday===a.current_day),g=a.pot||0,p=a.entry_fee||100,u=x.length>0&&x.every(T=>T.status==="finished"||T.status==="bye"),y=a.current_day>=a.total_days,w=(s||[]).find(T=>T.user_id===o);t.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${It};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${ei}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${ei};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${ei}">${a.name}</div>
        <div style="font-size:11px;color:${lo}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${p} cr./joueur</div>
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
      <div style="background:${Jt};border:1px solid ${Qt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Xe}">👥 Joueurs (${f.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${Lt};margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*f.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*f.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*f.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*f.length*.1).toLocaleString("fr")})</div>
        ${f.map(T=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${It}">
            <div style="width:36px;height:36px;border-radius:50%;background:${T.club_color2||so};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${T.club_color1||"#fff"}">${(T.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Xe}">${T.club_name||T.pseudo}</div><div style="font-size:11px;color:${Ze}">@${T.pseudo}</div></div>
            ${T.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${c&&f.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${p} cr. × ${f.length})</button>`:""}
        ${c?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${l?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${p} cr.)</button>`}
        ${l&&!c?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${p.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${Jt};border:1px solid ${Qt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${x.map(T=>In(T,f,o,l)).join("")}
        ${c&&u&&!y?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&b.length?`
      <div style="background:${Jt};border:1px solid ${Qt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${Ze};text-transform:uppercase;border-bottom:2px solid ${It}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${g>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${lt}">💰</th>`:""}
          </tr></thead>
          <tbody>${b.map((T,_)=>{const H=g>0&&a.status==="finished"?_===0?Math.floor(g*.7):_===1?Math.floor(g*.2):_===2?Math.floor(g*.1):0:0;return`<tr style="border-bottom:1px solid ${It};${T.userId===o?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${_===0?lt:_<3?"#4ade80":Lt}">${["🥇","🥈","🥉"][_]||_+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Xe}">${T.clubName}</div><div style="font-size:10px;color:${Ze}">@${T.pseudo}</div></td>
              <td style="text-align:center;color:${Lt}">${T.played}</td><td style="text-align:center;color:${Lt}">${T.won}-${T.drawn}-${T.lost}</td>
              <td style="text-align:center;color:${T.goalDiff>=0?"#4ade80":"#ff6b6b"}">${T.goalDiff>=0?"+":""}${T.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Xe}">${T.points}</td>
              ${g>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${lt}">${H?H.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${Jt};border:1px solid ${Qt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(T,_)=>_+1).reverse().map(T=>{const _=(d||[]).filter(H=>H.matchday===T);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${Ze};margin-bottom:6px">Journée ${T}</div>${_.map(H=>In(H,f,o,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${c&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${Lt}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const h=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((L=document.getElementById("ml-back"))==null||L.addEventListener("click",()=>et(t,e,h)),(m=document.getElementById("ml-refresh"))==null||m.addEventListener("click",async T=>{const _=T.currentTarget;_.style.opacity="0.5",await ct(t,e,i)}),(A=document.getElementById("ml-start-btn"))==null||A.addEventListener("click",()=>ua(t,e,a,f)),(E=document.getElementById("ml-next-day"))==null||E.addEventListener("click",()=>fa(t,e,i)),(S=document.getElementById("ml-join-now"))==null||S.addEventListener("click",()=>co(t,e,i,a.type)),(q=document.getElementById("ml-leave-btn"))==null||q.addEventListener("click",()=>ca(t,e,i,p)),(W=document.getElementById("ml-delete-btn"))==null||W.addEventListener("click",()=>Gi(t,e,i,a.name,"waiting")),(ee=document.getElementById("ml-delete-now"))==null||ee.addEventListener("click",()=>Gi(t,e,i,a.name,h)),(G=document.getElementById("ml-archive-btn"))==null||G.addEventListener("click",()=>pa(t,e,i)),t.querySelectorAll("[data-play-match]").forEach(T=>{T.addEventListener("click",()=>{const _=x.find(H=>H.id===T.dataset.playMatch);_&&e.navigate("match-mini-league",{mlMatchId:_.id,leagueId:i})})}),a.status==="finished"&&w){const T=b.findIndex(_=>_.userId===o);T>=0&&T<3&&w.prize_amount>0&&!w.prize_claimed&&setTimeout(()=>ma(t,e,a,w,T),400)}}function In(t,e,i,n,r=!1){const o=f=>e.find(b=>b.id===f);if(t.is_bye){const f=o(t.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${Lt};text-align:center">🔵 ${(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"?"} exempté(e)</div>`}const a=o(t.home_id),s=o(t.away_id),d=t.home_id===i||t.away_id===i,l=d&&t.status==="pending"&&n&&!r,c=t.status==="finished"?`${t.home_score} - ${t.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${d?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${d?"rgba(74,222,128,0.35)":It}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${t.status==="finished"?"#4ade80":Ze}">${c}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${l?`<button data-play-match="${t.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${t.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function ua(t,e,i,n){const{toast:r,state:o}=e,a=ga(n.map(l=>l.id),i.mode),s=[];a.forEach((l,c)=>l.forEach(f=>s.push({league_id:i.id,matchday:c+1,home_id:f.home||f.bye,away_id:f.away||null,is_bye:!!f.bye,status:f.bye?"bye":"pending"})));const{error:d}=await v.from("mini_league_matches").insert(s);if(d){r("Erreur calendrier : "+d.message,"error");return}await v.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),r(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),ct(t,e,i.id)}async function fa(t,e,i){const{data:n}=await v.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),r=(n.current_day||0)+1;if(r>(n.total_days||0)){ct(t,e,i);return}await v.from("mini_leagues").update({current_day:r}).eq("id",i),e.toast(`Journée ${r} commencée !`,"success"),ct(t,e,i)}async function ma(t,e,i,n,r){var b,x;const{state:o,toast:a}=e,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],d=["🥇","🥈","🥉"][r],l=n.prize_amount||s[r]||0,c=n.prize_claimed,f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",f.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${d}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${r===0?"Champion !":r===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${lt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${c?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${lt}">${l.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${r===0?"70%":r===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${c?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${lt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${l.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(f),(b=f.querySelector("#prize-close"))==null||b.addEventListener("click",()=>f.remove()),(x=f.querySelector("#claim-prize-btn"))==null||x.addEventListener("click",async g=>{const p=g.currentTarget;p.disabled=!0,p.textContent="...";const{data:u,error:y}=await v.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:o.profile.id});if(y||!(u!=null&&u.success)){console.error("[MiniLeague] claim_mini_league_prize:",y||u),a((u==null?void 0:u.error)||"Erreur lors de la récupération","error"),p.disabled=!1,p.textContent=`💰 Récupérer ${l.toLocaleString("fr")} cr.`;return}if(u.already_claimed)a("Déjà récupéré précédemment","info");else{const w=(o.profile.credits||0)+u.prize;o.profile&&(o.profile.credits=w);const h=document.getElementById("nav-credits");h&&(h.textContent=`💰 ${w.toLocaleString("fr")}`),a(`💰 +${u.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}f.remove(),ct(t,e,i.id)})}function ga(t,e){const n=t.length%2===0?[...t]:[...t,null],r=n.length;let o=n.slice(1);const a=[];for(let s=0;s<r-1;s++){const d=[],l=[n[0],...o];for(let c=0;c<r/2;c++){const f=l[c],b=l[r-1-c];f===null?d.push({bye:b}):b===null?d.push({bye:f}):d.push({home:f,away:b})}a.push(d),o=[o[o.length-1],...o.slice(0,-1)]}return e==="aller-retour"?[...a,...a.map(s=>s.map(d=>d.bye?d:{home:d.away,away:d.home}))]:a}function xa(t,e){const i={};return t.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),e.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const r=i[n.home_id],o=i[n.away_id];!r||!o||(r.played++,o.played++,r.goalsFor+=n.home_score,r.goalsAgainst+=n.away_score,o.goalsFor+=n.away_score,o.goalsAgainst+=n.home_score,n.home_score>n.away_score?(r.won++,r.points+=3,o.lost++):n.home_score<n.away_score?(o.won++,o.points+=3,r.lost++):(r.drawn++,r.points++,o.drawn++,o.points++),r.goalDiff=r.goalsFor-r.goalsAgainst,o.goalDiff=o.goalsFor-o.goalsAgainst)}),Object.values(i).sort((n,r)=>r.points-n.points||r.goalDiff-n.goalDiff||r.goalsFor-n.goalsFor)}async function Tn(t,e){const{state:i,navigate:n,toast:r}=e,o=i.params||{},a=o.leagueId||null,s=o.mlMatchId||null,d=i.user.id;if(!s||!a){r("Match introuvable","error"),n("mini-league");return}const{data:l,error:c}=await v.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",s).single();if(c||!l){r("Match introuvable","error"),n("mini-league",{openLeagueId:a});return}if(l.home_id!==d&&l.away_id!==d){r("Vous ne faites pas partie de ce match","error"),n("mini-league",{openLeagueId:a});return}const f=l.home_id===d;if(l.match_id){await jt(t,e,l.match_id,f,{mlLeagueId:a,mlMatchId:s});return}await ki(t,e,"mini_league",async({deckId:b,gcCardsEnriched:x,gcDefs:g,stadiumDef:p})=>{dt(t);const u=async y=>{const{data:w,error:h}=await v.rpc("start_mini_league_match",{p_ml_match_id:s,p_user_id:d,p_deck_id:b});if(h||!(w!=null&&w.success)){console.error("[MiniLeague] start_mini_league_match error:",h||w),r((w==null?void 0:w.error)||"Impossible de lancer le match","error"),n("mini-league",{openLeagueId:a});return}if(w.matched){await jt(t,e,w.match_id,f,{mlLeagueId:a,mlMatchId:s,myGC:y||[],gcDefs:g,stadiumDef:p});return}await ba(t,e,{mlMatchId:s,leagueId:a,amIHome:f,chosenGC:y,gcDefs:g,stadiumDef:p})};if(!(x!=null&&x.length)){await u([]);return}wi(t,x,u)})}function ba(t,e,{mlMatchId:i,leagueId:n,amIHome:r,chosenGC:o,gcDefs:a,stadiumDef:s}){return new Promise(d=>{var p;const{navigate:l}=e;t.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let c=!1;const f=async u=>{if(!c){if(c=!0,clearInterval(g),x)try{x.unsubscribe()}catch{}u&&await jt(t,e,u,r,{mlLeagueId:n,mlMatchId:i,myGC:o||[],gcDefs:a,stadiumDef:s}),d()}};(p=document.getElementById("wait-back"))==null||p.addEventListener("click",()=>{if(c=!0,clearInterval(g),x)try{x.unsubscribe()}catch{}l("mini-league",{openLeagueId:n}),d()});const b=async()=>{if(c)return;const{data:u}=await v.from("mini_league_matches").select("match_id").eq("id",i).single();u!=null&&u.match_id&&f(u.match_id)},x=v.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},u=>{var y;(y=u.new)!=null&&y.match_id&&f(u.new.match_id)}).subscribe(),g=setInterval(b,3e3);b()})}const ya="/",ha=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function va(t,e,i){let n=0;const r=document.createElement("div");r.id="tutorial-overlay",r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const o=()=>{var c,f,b;const s=e[n],d=n===e.length-1,l=Math.round((n+1)/e.length*100);r.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${l}%;background:${s.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${s.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${s.title}</div>
          <div style="font-size:11px;color:#aaa">${n+1} / ${e.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${s.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${ya}icons/${s.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,r.querySelectorAll("ul,ol").forEach(x=>{x.style.paddingLeft="20px",x.style.marginTop="6px",x.style.marginBottom="6px"}),r.querySelectorAll("li").forEach(x=>{x.style.marginBottom="4px"}),r.querySelectorAll("p").forEach(x=>{x.style.marginBottom="8px"}),(c=r.querySelector("#tuto-prev"))==null||c.addEventListener("click",()=>{n--,o()}),(f=r.querySelector("#tuto-next"))==null||f.addEventListener("click",()=>{d?a():(n++,o())}),(b=r.querySelector("#tuto-skip"))==null||b.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{r.remove(),t!=null&&t.id&&await v.from("users").update({tutorial_done:!0}).eq("id",t.id),i==null||i()};document.body.appendChild(r),o()}async function wa(t,e,i){if(!t||t.tutorial_done)return;let n=[];const{data:r,error:o}=await v.rpc("get_tutorial_steps");if(!o&&(r==null?void 0:r.length)>0)n=r,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:s,error:d}=await v.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!d&&(s==null?void 0:s.length)>0?(n=s,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${o==null?void 0:o.message}, Direct: ${d==null?void 0:d.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=n.length>0?n.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):ha;va(t,a,()=>e("boosters"))}const Sn={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ui(t,e,i=0){return e?(Number(e==="GK"?t.note_g:e==="DEF"?t.note_d:e==="MIL"?t.note_m:t.note_a)||0)+(e===t.job||e===t.job2?i:0):0}async function _a(t,e){t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await on(t,e)}async function on(t,e){const{state:i,toast:n}=e,{data:r}=await v.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:o}=await v.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(r||[]).filter(p=>p.seller_id!==i.profile.id),s=o||[];t.innerHTML=`
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
  </div>`;let d="buy";const l=()=>{var p,u,y,w,h,L,m;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((y=document.getElementById("flt-country"))==null?void 0:y.value)||"").toLowerCase().trim(),job:((w=document.getElementById("flt-job"))==null?void 0:w.value)||"",rarity:((h=document.getElementById("flt-rarity"))==null?void 0:h.value)||"",note1:parseInt((L=document.getElementById("flt-note1"))==null?void 0:L.value)||0,note2:parseInt((m=document.getElementById("flt-note2"))==null?void 0:m.value)||0}};function c(p){const u=l();return p.filter(y=>{var q,W,ee;const w=(q=y.card)==null?void 0:q.player;if(!w)return!1;const h=`${w.firstname} ${w.surname_real}`.toLowerCase(),L=(((W=w.clubs)==null?void 0:W.encoded_name)||"").toLowerCase(),m=(w.country_code||"").toLowerCase(),A=((ee=y.card)==null?void 0:ee.evolution_bonus)||0,E=ui(w,w.job,A),S=w.job2?ui(w,w.job2,A):0;return!(u.name&&!h.includes(u.name)||u.club&&!L.includes(u.club)||u.country&&!m.includes(u.country)||u.job&&w.job!==u.job||u.rarity&&w.rarity!==u.rarity||u.note1&&E<u.note1||u.note2&&S<u.note2)})}function f(p){var L,m,A;const u=(L=p.card)==null?void 0:L.player;if(!u)return"";const y=((m=p.card)==null?void 0:m.evolution_bonus)||0,w=(i.profile.credits||0)>=p.price;return`<div class="mkt-buy-tile">
      ${Se({...u,_evolution_bonus:y},{width:140})}
      <div class="mkt-price">${p.price.toLocaleString("fr")} cr.</div>
      <div class="mkt-seller">Vendeur : ${((A=p.seller)==null?void 0:A.pseudo)||"—"}</div>
      <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${w?"":"disabled"} style="font-size:12px;padding:8px 10px">${w?"Acheter":"Trop cher"}</button>
    </div>`}function b(p){var S,q,W,ee;const u=(S=p.card)==null?void 0:S.player;if(!u)return"";const y=((q=p.card)==null?void 0:q.evolution_bonus)||0,w=ui(u,u.job,y),h=u.job2?ui(u,u.job2,y):0,L=p.status==="sold",m=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,A=Sn[u.job]||"#bbb",E=u.job2?Sn[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${L?"opacity:0.7":""}">
      ${m?`<img src="${m}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(W=u.clubs)!=null&&W.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${A};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${A};font-family:Arial Black,Arial">${w}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${E};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${E};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:${L?"#22c55e":"#999"};margin-top:1px">
          ${L?`✅ Vendu à ${((ee=p.buyer)==null?void 0:ee.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${L?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function x(){const p=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(p){if(u.style.display=d==="buy"?"flex":"none",d==="buy"){const y=c(a);p.innerHTML=y.length?`<div class="mkt-buy-grid">${y.map(f).join("")}</div>`:'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const y=s.filter(h=>h.status==="active").sort((h,L)=>new Date(L.listed_at)-new Date(h.listed_at)),w=s.filter(h=>h.status==="sold").sort((h,L)=>new Date(L.sold_at||L.listed_at)-new Date(h.sold_at||h.listed_at));p.innerHTML=(y.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${y.length})</div>`+y.map(b).join(""):"")+(w.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${w.length})</div>`+w.map(b).join(""):"")+(!y.length&&!w.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(y=>y.addEventListener("click",()=>ka(y.dataset.buy,a,t,e))),p.querySelectorAll("[data-cancel]").forEach(y=>y.addEventListener("click",()=>Ea(y.dataset.cancel,t,e)))}}t.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{d=p.dataset.tab,t.querySelectorAll(".mkt-tab").forEach(u=>{const y=u===p;u.style.background=y?"var(--green)":"var(--tile-bg)",u.style.color=y?"#fff":"var(--tile-fg-dim)",u.style.borderColor=y?"var(--green)":"var(--tile-border)"}),x()})});let g;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var u;(u=document.getElementById(p))==null||u.addEventListener("input",()=>{clearTimeout(g),g=setTimeout(x,250)})}),x()}async function ka(t,e,i,n){const{state:r,toast:o,refreshProfile:a}=n,s=e.find(c=>c.id===t);if(!s)return;const d=s.price;if((r.profile.credits||0)<d){o("Crédits insuffisants","error");return}$a(s,async()=>{const{error:c}=await v.rpc("buy_market_card",{p_listing_id:t,p_buyer_id:r.profile.id});if(c){o("Erreur achat : "+c.message,"error");return}await a();const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),o("✅ Carte achetée !","success"),await on(i,n)})}function $a(t,e){var a;const i=(a=t.card)==null?void 0:a.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${t.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(r);const o=s=>{r.remove(),s&&e()};r.querySelector("#buy-cancel").addEventListener("click",()=>o(!1)),r.querySelector("#buy-ok").addEventListener("click",()=>o(!0)),r.addEventListener("click",s=>{s.target===r&&o(!1)})}async function Ea(t,e,i){const{toast:n}=i,{data:r}=await v.from("market_listings").select("card_id").eq("id",t).single();if(await v.from("market_listings").update({status:"cancelled"}).eq("id",t),r!=null&&r.card_id){const{count:o}=await v.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",r.card_id).eq("status","active");o||await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",r.card_id)}n("Annonce retirée","success"),on(e,i)}async function La(t,e){var x,g,p,u,y;const{state:i,navigate:n}=e,r=((g=(x=e==null?void 0:e.state)==null?void 0:x.params)==null?void 0:g.tab)||"ranked";t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:o},{data:a},{data:s}]=await Promise.all([v.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100),v.rpc("get_mini_league_leaderboard"),v.rpc("get_random_leaderboard")]);let d=r;const l=w=>w<3?["#D4A017","#a0a0a0","#cd7f32"][w]:"var(--green)",c=w=>w<3?"#000":"#fff";function f(){var L,m,A;const w=document.getElementById("rankings-legend");w&&(w.innerHTML=d==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const h=document.getElementById("rankings-list");if(h){if(d==="ranked"){const E=o||[];h.innerHTML=E.length>0?E.map((S,q)=>{const W=vi(S.mmr??1e3),ee=(S.ranked_wins||0)+(S.ranked_losses||0)+(S.ranked_draws||0),G=ee>0?Math.round((S.ranked_wins||0)/ee*100):0,T=S.id===i.profile.id,_=(S.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${T?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${q<3?["#D4A017","#a0a0a0","#cd7f32"][q]:"rgba(255,255,255,0.08)"};color:${q<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${q<3?"16":"13"}px">${q<3?["🥇","🥈","🥉"][q]:q+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${W.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${S.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${S.club_name} · ${W.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${_?"❓":W.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${W.color}">${_?"Placement":W.label}</div>
              ${_?"":`<div style="font-size:10px;color:var(--tile-fg-dim)">${G}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(d==="mini-league"){const E=a||[];h.innerHTML=E.length>0?E.map((S,q)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${S.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${l(q)};color:${c(q)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${q<3?"16":"13"}px">${q<3?["🥇","🥈","🥉"][q]:q+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${S.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${S.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${S.top1} 🥈${S.top2} 🥉${S.top3}</div>
            <div style="color:var(--tile-fg-dim)">${S.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const E=s||[];h.innerHTML=E.length>0?E.map((S,q)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${S.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${l(q)};color:${c(q)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${q<3?"16":"13"}px">${q<3?["🥇","🥈","🥉"][q]:q+1}</div>
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
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}(L=document.getElementById("tab-ranked"))!=null&&L.style&&(document.getElementById("tab-ranked").style.cssText=b(d==="ranked")),(m=document.getElementById("tab-mini-league"))!=null&&m.style&&(document.getElementById("tab-mini-league").style.cssText=b(d==="mini-league")),(A=document.getElementById("tab-random"))!=null&&A.style&&(document.getElementById("tab-random").style.cssText=b(d==="random"))}}const b=w=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${w?"900":"400"};background:${w?"var(--green)":"rgba(255,255,255,0.06)"};color:${w?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;t.innerHTML=`
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
  </div>`,f(),(p=document.getElementById("tab-ranked"))==null||p.addEventListener("click",()=>{d="ranked",f()}),(u=document.getElementById("tab-mini-league"))==null||u.addEventListener("click",()=>{d="mini-league",f()}),(y=document.getElementById("tab-random"))==null||y.addEventListener("click",()=>{d="random",f()})}async function Ia(t,e){var A,E,S,q;const{state:i,navigate:n,toast:r}=e,o=i.profile;t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:s}]=await Promise.all([v.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),v.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",o.id).single()]);if(!s){r("Erreur chargement profil","error"),n("home");return}if(!a){t.innerHTML=`
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
    </div>`,(A=document.getElementById("ranked-back"))==null||A.addEventListener("click",()=>n("home"));return}const d=s.mmr??1e3,l=s.mmr_deviation??350,c=s.mmr_volatility??.06,f=s.placement_matches??0,b=f<10,x=Math.max(0,10-f),g=vi(d),p=An(d),u=Ii.findIndex(W=>W.id===g.id),y=Ii[u+1]||null,w={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},h=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),L=h>0?Math.round((s.ranked_wins||0)/h*100):0,m=Ii.map(W=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${g.id===W.id?1:.35};
      transform:${g.id===W.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${g.id===W.id?"28px":"20px"}">${W.emoji}</div>
      <div style="font-size:9px;color:${W.color};font-weight:${g.id===W.id?"900":"400"};letter-spacing:0.5px">${W.label.toUpperCase()}</div>
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
        <div style="font-size:20px;font-weight:900;color:#D4A017">${L}%</div>
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
  </div>`,(E=document.getElementById("ranked-back"))==null||E.addEventListener("click",()=>n("home")),(S=document.getElementById("ranked-leaderboard-btn"))==null||S.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(q=document.getElementById("ranked-play-btn"))==null||q.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:d,rd:l,sigma:c,isPlacement:b}})})}async function Ta(t,{state:e,navigate:i,toast:n}){const r=e.profile;if(!r)return;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await v.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${r.id},away_id.eq.${r.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(o||[]).filter(c=>c.status==="finished"),d=(o||[]).filter(c=>c.status==="in_progress");function l(c){const f=c.home_id===r.id;f?c.home_score:c.away_score,f?c.away_score:c.home_score;const b=c.winner_id===r.id,x=c.home_score===c.away_score&&c.status==="finished",g=c.status!=="finished"?"…":x?"N":b?"V":"D",p=c.status!=="finished"||x?"#888":b?"#1A6B3C":"#c0392b";let u=a[c.mode]||c.mode;c.away_id===null&&!u.startsWith("IA")&&(u="IA");const w=c.home_id===r.id?c.away:c.home;let h;c.away_id===null?h=u:w?h=`${w.club_name||w.pseudo} (${w.pseudo})`:h="Adversaire";let L="";c.status==="in_progress"&&Date.now()-new Date(c.created_at).getTime()>3600*1e3&&(L=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const m=new Date(c.created_at),A=m.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+m.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),E=c.status==="finished"?`${c.home_score} - ${c.away_score}`:`${c.home_score||0} - ${c.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${L}</div>
        <div style="font-size:11px;color:var(--gray-600)">${u} · ${A}${c.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${E}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${g}</span>
      </div>
    </div>`}t.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(o||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${d.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${d.map(l).join("")}
        </div>`:""}

      ${s.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${s.map(l).join("")}
        </div>`:""}

      ${(o||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}bo(ho);const ye={user:null,profile:null,page:"home",params:{}};function Pt(t,e="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=t,n.className=`show ${e}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function Sa(t,e,i=""){document.getElementById("modal-title").textContent=t,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Ri(){document.getElementById("modal-overlay").classList.add("hidden")}async function Zt(){if(!ye.user)return;const{data:t}=await v.from("users").select("*").eq("id",ye.user.id).single();t&&(ye.profile=t)}const po="mw_theme";function uo(){return localStorage.getItem(po)||"dark"}function za(t){var e;localStorage.setItem(po,t),Aa(t),(e=ye.profile)!=null&&e.id&&v.from("users").update({theme:t}).eq("id",ye.profile.id).then(()=>{})}function Aa(t){document.documentElement.setAttribute("data-theme",t)}function Nt(t,e={}){ye.page=t,ye.params=e,fo()}async function fo(){var n,r,o,a;const t=document.getElementById("page-content");if(!t)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===ye.page)});const e=document.getElementById("nav-credits");e&&ye.profile&&(e.textContent=`💰 ${(ye.profile.credits||0).toLocaleString("fr")}`);const i={state:ye,navigate:Nt,toast:Pt,openModal:Sa,closeModal:Ri,refreshProfile:Zt};switch(t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ye.page){case"home":await xn(t,i);break;case"home2":await Uo(t,i);break;case"game":await Xo(t,i);break;case"settings":await Rn(t,i);break;case"collection":await nr(t,i);break;case"decks":await ji(t,i);break;case"boosters":await xr(t,i);break;case"ranked":await Ia(t,i);break;case"match":{const s=ye.params&&ye.params.matchMode||"vs_ai_easy";s==="random"?await Ni(t,i,!1):s==="ranked"?await Ni(t,i,!0):s==="friend"?await ea(t,i,(n=ye.params)==null?void 0:n.friendId,(r=ye.params)==null?void 0:r.friendName):s==="mini_league"||s==="mini-league"?await Tn(t,i,(o=ye.params)==null?void 0:o.mlMatchId,(a=ye.params)==null?void 0:a.leagueId):await Ar(t,i);break}case"market":await _a(t,i);break;case"rankings":await La(t,i);break;case"matches":await Ta(t,i);break;case"friends":await Lo(t,i);break;case"mini-league":await oa(t,i);break;case"match-mini-league":{const s=ye.params||{};await Tn(t,i,s.mlMatchId,s.leagueId);break}default:await xn(t,i)}}function Ma(){var n,r;const t=document.getElementById("app"),e=ye.profile;if(!e)return;const i="/icons/";t.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.07.26-1545" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(o=>{o.addEventListener("click",a=>{a.preventDefault(),Nt(o.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Nt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Nt("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>Ca()),(r=document.getElementById("settings-btn"))==null||r.addEventListener("click",()=>Nt("settings"))}async function Ca(){const{data:t}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(t||[]).map(n=>{const r=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${n.image_url?`<img src="${n.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${r}</div>
      <div style="font-size:15px;font-weight:900;margin-bottom:6px">${n.title}</div>
      <div style="font-size:13px;color:#444;line-height:1.6;white-space:pre-line">${n.description}</div>
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
    </div>`,document.body.appendChild(e),e.querySelector("#journal-close").addEventListener("click",()=>e.remove()),e.addEventListener("click",n=>{n.target===e&&e.remove()})}function ja(t,{onPlay:e}){var n;const i="/icons/";t.style.cssText="",t.innerHTML=`
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
  </div>`,(n=t.querySelector("#pl-play-btn"))==null||n.addEventListener("click",e)}async function Ba(){document.documentElement.setAttribute("data-theme",uo()),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Ri()}),document.getElementById("modal-close").addEventListener("click",Ri);const{data:{session:t}}=await v.auth.getSession();if(!t){zn(),ja(document.getElementById("app"),{onPlay:()=>un(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Pt})});return}ye.user=t.user,await Zt(),zn();try{const{data:i}=await v.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(r=>{n[r.formation]=r.links}),yo(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!ye.profile){wo(document.getElementById("app"),{state:ye,navigate:async()=>{await Zt(),Ai()},toast:Pt,refreshProfile:Zt});return}const e=Array.isArray(ye.profile.pending_boosters)?ye.profile.pending_boosters:[];if(!ye.profile.onboarding_done&&e.length>0){$r(document.getElementById("app"),{state:ye,navigate:()=>Ai(),toast:Pt,refreshProfile:Zt});return}Ai(),setTimeout(()=>wa(ye.profile,Nt,Pt),800),v.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(ye.user=null,ye.profile=null,document.getElementById("app").innerHTML="",un(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Pt}))})}function qa(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function $i(){const t=document.getElementById("app");t&&(t.style.height=qa()+"px")}window.addEventListener("resize",$i);window.addEventListener("orientationchange",()=>setTimeout($i,150));window.visualViewport&&window.visualViewport.addEventListener("resize",$i);function Ai(){const t=()=>{var i;(i=ye.user)!=null&&i.id&&v.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",ye.user.id).then(()=>{})};t(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(t,6e4);const e=document.getElementById("app");e.style.display="flex",e.style.flexDirection="column",$i(),Ma(),fo()}function zn(){const t=document.getElementById("app-loader"),e=document.getElementById("app");e&&(e.style.display=""),t&&(t.classList.add("zoom-out"),setTimeout(()=>t.style.display="none",500))}function mo(t){var n;const e=document.getElementById("app-loader");if(e&&(e.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${t||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}Ba().catch(t=>{console.error("Échec du démarrage:",t),mo()});setTimeout(()=>{const t=document.getElementById("app-loader");t&&t.style.display!=="none"&&!t.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&mo("Le serveur met trop de temps à répondre.")},12e3);
