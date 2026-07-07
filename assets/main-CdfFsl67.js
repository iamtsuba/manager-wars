const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-BZe0pGr4.js","assets/formation-links-B6ttdMxQ.css"])))=>i.map(i=>d[i]);
import{s as T,F as $i,i as Ut,k as Vi,l as nt,m as Ii,f as Nt,n as vo,T as li,j as wo,o as _o,b as $o}from"./formation-links-BZe0pGr4.js";const ko="/";function Mi(e,{navigate:t,toast:i}){let n="login";const d=()=>{var r,l,f,a,o,x;const s=n==="login";e.innerHTML=`
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
        <img src="${ko}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
            flex:1;padding:16px;border:none;background:${s?"rgba(26,107,60,0.3)":"transparent"};
            color:${s?"#fff":"rgba(255,255,255,0.4)"};
            font-size:14px;font-weight:${s?"900":"600"};cursor:pointer;
            border-bottom:2px solid ${s?"#22c55e":"transparent"};
            transition:all .2s;
          ">Connexion</button>
          <button id="tab-reg-btn" style="
            flex:1;padding:16px;border:none;background:${s?"transparent":"rgba(26,107,60,0.3)"};
            color:${s?"rgba(255,255,255,0.4)":"#fff"};
            font-size:14px;font-weight:${s?"600":"900"};cursor:pointer;
            border-bottom:2px solid ${s?"transparent":"#22c55e"};
            transition:all .2s;
          ">Inscription</button>
        </div>

        <div style="padding:24px">
          ${s?`
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
            <div id="reg-error" style="font-size:12px;color:#f87171;min-height:16px;text-align:center"></div>
            <button id="reg-btn" style="
              width:100%;padding:14px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#1A6B3C,#22c55e);
              color:#fff;font-size:15px;font-weight:900;cursor:pointer;
              box-shadow:0 4px 16px rgba(34,197,94,0.3);
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
    </style>`,(r=document.getElementById("tab-login-btn"))==null||r.addEventListener("click",()=>{n="login",d()}),(l=document.getElementById("tab-reg-btn"))==null||l.addEventListener("click",()=>{n="register",d()}),s?((f=document.getElementById("login-password"))==null||f.addEventListener("keydown",u=>{var h;u.key==="Enter"&&((h=document.getElementById("login-btn"))==null||h.click())}),(a=document.getElementById("login-btn"))==null||a.addEventListener("click",async()=>{const u=document.getElementById("login-email").value.trim(),h=document.getElementById("login-password").value,_=document.getElementById("login-error");if(_.textContent="",!u||!h){_.textContent="Remplissez tous les champs.";return}const m=document.getElementById("login-btn");m.textContent="⏳ Connexion…",m.disabled=!0;const{error:c}=await T.auth.signInWithPassword({email:u,password:h});if(m.textContent="⚽ Se connecter",m.disabled=!1,c){_.textContent=c.message.includes("Invalid")?"Email ou mot de passe incorrect.":c.message;return}window.location.reload()})):((o=document.getElementById("reg-confirm"))==null||o.addEventListener("keydown",u=>{var h;u.key==="Enter"&&((h=document.getElementById("reg-btn"))==null||h.click())}),(x=document.getElementById("reg-btn"))==null||x.addEventListener("click",async()=>{const u=document.getElementById("reg-email").value.trim(),h=document.getElementById("reg-password").value,_=document.getElementById("reg-confirm").value,m=document.getElementById("reg-error");if(m.textContent="",!u||!h||!_){m.textContent="Remplissez tous les champs.";return}if(h.length<6){m.textContent="Mot de passe trop court (min. 6 caractères).";return}if(h!==_){m.textContent="Les mots de passe ne correspondent pas.";return}const c=document.getElementById("reg-btn");c.textContent="⏳ Création…",c.disabled=!0;const{error:A}=await T.auth.signUp({email:u,password:h});if(c.textContent="🚀 Créer mon compte",c.disabled=!1,A){m.textContent=A.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",d(),setTimeout(()=>{const p=document.getElementById("login-email");p&&(p.value=u)},50)}))};d()}function Eo(e,{state:t,navigate:i,toast:n,refreshProfile:d}){let s="#1A6B3C",r="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${r};border-color:${s}">
          <span id="logo-initials" style="color:${s}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${s};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${s}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function l(){var _;const a=document.getElementById("logo-preview"),o=document.getElementById("logo-initials"),x=((_=document.getElementById("setup-club"))==null?void 0:_.value)||"MW",u=x.trim().split(" ").filter(Boolean),h=u.length>=2?(u[0][0]+u[1][0]).toUpperCase():x.slice(0,2).toUpperCase();a&&(a.style.background=r,a.style.borderColor=s),o&&(o.textContent=h,o.style.color=s)}document.getElementById("color1").addEventListener("input",a=>{s=a.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",a=>{r=a.target.value,document.getElementById("swatch2").style.background=r,l()});function f(a){document.querySelectorAll(".setup-step").forEach(o=>o.classList.remove("active")),document.getElementById(`step-${a}`).classList.add("active"),document.getElementById("step-num").textContent=a,document.getElementById("progress-fill").style.width=`${Math.round(a/3*100)}%`,a===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const a=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("step1-error");if(o.textContent="",a.length<3){o.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:x}=await T.from("users").select("id").eq("pseudo",a).maybeSingle();if(x){o.textContent="Ce pseudo est déjà pris.";return}f(2)}),document.getElementById("step2-back").addEventListener("click",()=>f(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const a=document.getElementById("setup-club").value.trim(),o=document.getElementById("step2-error");if(o.textContent="",a.length<2){o.textContent="Nom trop court (min. 2 caractères).";return}const{data:x}=await T.from("users").select("id").eq("club_name",a).maybeSingle();if(x){o.textContent="Ce nom de club est déjà pris.";return}f(3)}),document.getElementById("step3-back").addEventListener("click",()=>f(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const a=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("setup-club").value.trim(),x=document.getElementById("step3-error"),u=document.getElementById("step3-finish");x.textContent="",u.disabled=!0,u.textContent="Création en cours…";try{const{error:h}=await T.from("users").insert({id:t.user.id,pseudo:a,club_name:o,club_color1:s,club_color2:r,credits:1e4});if(h)throw h;await To(t.user.id),await d(),n(`Bienvenue ${a} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(h){x.textContent=h.message,u.disabled=!1,u.textContent="🚀 Créer mon profil !"}})}async function To(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await T.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const zo="modulepreload",So=function(e){return"/"+e},ji={},ni=function(t,i,n){let d=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));d=Promise.allSettled(i.map(f=>{if(f=So(f),f in ji)return;ji[f]=!0;const a=f.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${o}`))return;const x=document.createElement("link");if(x.rel=a?"stylesheet":zo,a||(x.as="script"),x.crossOrigin="",x.href=f,l&&x.setAttribute("nonce",l),document.head.appendChild(x),a)return new Promise((u,h)=>{x.addEventListener("load",u),x.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return d.then(r=>{for(const l of r||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},Rt="#1A6B3C",Ot="#cc2222",Ao="#D4A017",Ci="#888";async function Lo(e,t){const{state:i,toast:n}=t;e.innerHTML=`
    <div style="padding:16px;max-width:640px;margin:0 auto">
      <h2 style="font-size:20px;font-weight:900;margin-bottom:16px">👥 Amis</h2>

      <!-- Actions -->
      <div style="display:flex;gap:10px;margin-bottom:20px">
        <button id="btn-add-friend" class="btn btn-primary" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px">
          ➕ Ajouter un ami
        </button>
        <button id="btn-accept-friend" class="btn" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;background:#fff;border:1.5px solid var(--green,#1A6B3C);color:var(--green,#1A6B3C);font-weight:700">
          ✅ Accepter un ami
          <span id="pending-badge" style="display:none;background:#cc2222;color:#fff;border-radius:50%;width:18px;height:18px;font-size:11px;font-weight:900;display:flex;align-items:center;justify-content:center"></span>
        </button>
      </div>

      <!-- Liste amis -->
      <div id="friends-list">
        <div style="text-align:center;color:#aaa;padding:32px">Chargement…</div>
      </div>
    </div>`,await Yi(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Mo(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Wi(i,n,null,t))}async function Yi(e,t,i={}){const{navigate:n}=i,d=e.user.id,{data:s,error:r}=await T.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${d},addressee_id.eq.${d}`),{count:l}=await T.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",d).eq("status","pending"),f=document.getElementById("pending-badge");f&&(l>0?(f.style.display="flex",f.textContent=l):f.style.display="none");const a=document.getElementById("friends-list");if(!a)return;if(r){console.error("[Friends] Erreur:",r),a.innerHTML=`<div style="color:${Ot};text-align:center;padding:16px">Erreur chargement : ${r.message}</div>`;return}const o=(s||[]).map(h=>h.requester_id===d?h.addressee_id:h.requester_id);let x={};if(o.length){const{data:h}=await T.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",o);(h||[]).forEach(_=>{x[_.id]=_})}const u=(s||[]).map(h=>({friendshipId:h.id,friend:x[h.requester_id===d?h.addressee_id:h.requester_id]||{pseudo:"?"}}));if(!u.length){a.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}a.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${u.length} ami${u.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${u.map(({friendshipId:h,friend:_})=>Io(_,h)).join("")}
    </div>`,a.querySelectorAll("[data-stats]").forEach(h=>{h.addEventListener("click",()=>jo(e,h.dataset.stats,h.dataset.friendName))}),a.querySelectorAll("[data-match]").forEach(h=>{h.addEventListener("click",()=>{const _=h.dataset.friendId,m=h.dataset.friendName;console.log("[Friends] clic match",{fid:_,fname:m,hasNavigate:typeof n}),typeof n=="function"?n("match",{matchMode:"friend",friendId:_,friendName:m}):t("Erreur navigation","error")})})}function Io(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",d=(n||i).slice(0,2).toUpperCase(),s=e.club_color2||Rt,r=e.club_color1||"#ffffff",l=e.last_seen_at?new Date(e.last_seen_at):null,f=l&&Date.now()-l.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${s};border:2.5px solid ${r};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${r}">
          ${d}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${f?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${n}</div>
        <div style="font-size:11px;color:${f?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${f?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${Ao};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Mo(e,t){const i=ki();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Ot};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${Ei()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),d=i.querySelector("#add-friend-error"),s=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",s),i.addEventListener("click",r=>{r.target===i&&s()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const r=n.value.trim();if(!r){d.textContent="Entre un pseudo";return}d.textContent="";const{data:l}=await T.from("users").select("id, pseudo").ilike("pseudo",r).single();if(!l){d.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){d.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:f}=await T.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(f){const o=f.status==="accepted"?"Vous êtes déjà amis !":f.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";d.textContent=o;return}const{error:a}=await T.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(a){d.textContent="Erreur : "+a.message;return}s(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function Wi(e,t,i=null,n={}){const d=e.user.id,{data:s}=await T.from("friendships").select("id, requester_id").eq("addressee_id",d).eq("status","pending").order("created_at",{ascending:!1}),r=(s||[]).map(u=>u.requester_id);let l={};if(r.length){const{data:u}=await T.from("users").select("id, pseudo, club_name").in("id",r);(u||[]).forEach(h=>{l[h.id]=h})}const f=(s||[]).map(u=>({...u,requester:l[u.requester_id]||{pseudo:"?"}})),a=ki(),o=f||[];a.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${o.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${o.map(u=>{var h,_,m;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((h=u.requester)==null?void 0:h.club_name)||((_=u.requester)==null?void 0:_.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((m=u.requester)==null?void 0:m.pseudo)||""})</span>
                </div>
                <button data-accept="${u.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Rt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${u.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Ot};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${Ei()}`,document.body.appendChild(a);const x=()=>a.remove();a.querySelector("#pending-close").addEventListener("click",x),a.addEventListener("click",u=>{u.target===a&&x()}),a.querySelectorAll("[data-accept]").forEach(u=>{u.addEventListener("click",async()=>{const{error:h}=await T.from("friendships").update({status:"accepted"}).eq("id",u.dataset.accept);if(h){t("Erreur : "+h.message,"error");return}u.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Yi(e,t,n),i&&i()})}),a.querySelectorAll("[data-decline]").forEach(u=>{u.addEventListener("click",async()=>{await T.from("friendships").delete().eq("id",u.dataset.decline),u.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function jo(e,t,i){const n=e.user.id,[d,s]=[n,t].sort(),r=n===d,{data:l}=await T.from("friend_match_stats").select("*").eq("player1_id",d).eq("player2_id",s).single(),f=e.profile.club_name||e.profile.pseudo||"Moi",a=l||{},o=r?a.wins_p1||0:a.wins_p2||0,x=r?a.wins_p2||0:a.wins_p1||0,u=a.draws||0,h=r?a.goals_p1||0:a.goals_p2||0,_=r?a.goals_p2||0:a.goals_p1||0,m=r?a.gc_used_p1||0:a.gc_used_p2||0,c=r?a.gc_used_p2||0:a.gc_used_p1||0,A=a.matches_total||0,p=(q,C,P,j=Rt,R=Ot)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${j}">${C}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${q}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${R}">${P}</div>
    </div>`,I=ki();I.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${A===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${p("Victoires",o,x)}
        ${p("Nuls",u,u,Ci,Ci)}
        ${p("Défaites",x,o)}
        ${p("Buts marqués",h,_)}
        ${p("Buts encaissés",_,h,Ot,Rt)}
        ${p("GC utilisés ⚡",m,c,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${A} match${A>1?"s":""} joué${A>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${Ei()}`,document.body.appendChild(I),I.querySelector("#stats-close").addEventListener("click",()=>I.remove()),I.addEventListener("click",q=>{q.target===I&&I.remove()})}function ki(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function Ei(){return`
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
        background:${Rt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function Ji({player1Id:e,player2Id:t,score1:i,score2:n,gc1:d,gc2:s}){const[r,l]=[e,t].sort(),f=e!==r,a=f?n:i,o=f?i:n,x=f?s:d,u=f?d:s,h=a>o?1:0,_=o>a?1:0,m=a===o?1:0,{data:c}=await T.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",l).single();c?await T.from("friend_match_stats").update({wins_p1:c.wins_p1+h,wins_p2:c.wins_p2+_,draws:c.draws+m,goals_p1:c.goals_p1+a,goals_p2:c.goals_p2+o,gc_used_p1:c.gc_used_p1+x,gc_used_p2:c.gc_used_p2+u,matches_total:c.matches_total+1}).eq("player1_id",r).eq("player2_id",l):await T.from("friend_match_stats").insert({player1_id:r,player2_id:l,wins_p1:h,wins_p2:_,draws:m,goals_p1:a,goals_p2:o,gc_used_p1:x,gc_used_p2:u,matches_total:1})}const Co="2026.07.07-2313";async function qi(e,{state:t,navigate:i,toast:n}){var s,r;const d=t.profile;d&&(e.innerHTML=`
  <style>
    @media (min-width: 768px) {
      .home-page-body {
        max-width: 700px !important;
        height: 100%;
        box-sizing: border-box;
        display: flex !important;
        flex-direction: column;
        gap: 10px !important;
        overflow: hidden;
      }
      /* Hero : taille fixe */
      .home-page-body .hero-compact { flex-shrink: 0; }
      /* Bannières dynamiques : taille fixe */
      #friend-requests-banner, #match-invite-banner, #ongoing-match-banner { flex-shrink: 0; }
      /* Ranked : hauteur fixe */
      .home-page-body .ranked-banner { flex-shrink: 0; min-height: 130px; max-height: 130px; }
      /* Grille 2x2 : prend tout l'espace restant */
      .home-page-body .play-grid {
        flex: 1 1 0;
        min-height: 0;
        grid-template-rows: 1fr 1fr;
      }
      .home-page-body .play-card { min-height: unset; height: 100%; }
      /* Boutons bas : taille fixe */
      .home-page-body > div:last-child { flex-shrink: 0; }
    }
  </style>
  <div class="page" style="height:100%;overflow-y:auto">
    <div class="page-body home-page-body">

      <!-- Demandes d'amis en attente (injecté dynamiquement) -->
      <div id="friend-requests-banner"></div>
      <!-- Invitations de match ami en attente -->
      <div id="match-invite-banner"></div>
      <!-- Match(s) en cours à reprendre -->
      <div id="ongoing-match-banner"></div>
      <!-- Invitation match ami en attente -->

      <!-- Bandeau pseudo (couleurs du club) -->
      <div class="hero hero-compact" style="background:${d.club_color1};border:2px solid ${d.club_color2}">
        <button class="nav-rankings-btn" id="nav-rankings" title="Classement">
          <img src="/icons/badge-trophy.png" alt="Classement">
        </button>
        <div class="info">
          <h3 style="margin:0">${d.pseudo}</h3>
          <div class="level">Niveau ${d.level} · ${d.club_name}</div>
        </div>
        <button class="nav-rankings-btn" id="nav-matches" title="Mes matchs" style="margin-left:auto">
          <img src="/icons/badge-ball.png" alt="Matchs" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'⚽',style:'font-size:22px'}))">
        </button>
      </div>

      <!-- Ranked (bouton) -->
      <div class="ranked-banner play-card" data-action="ranked">
        <div class="play-badge-group"><img src="/icons/badge-ranked.png" alt="" class="play-icon"><img src="/icons/badge-ranked-txt.png" alt="Ranked" class="play-text-overlay"></div>
      </div>

      <!-- Jeu : 4 tuiles -->
      <div class="play-grid">
        <div class="play-card" data-action="match-ai">
          <div class="play-badge-group"><img src="/icons/badge-ai.png" alt="" class="play-icon"><img src="/icons/badge-ai-txt.png" alt="Match IA" class="play-text-overlay"></div>
        </div>
        <div class="play-card" data-action="match-random">
          <div class="play-badge-group"><img src="/icons/badge-random.png" alt="" class="play-icon"><img src="/icons/badge-random-txt.png" alt="Match Random" class="play-text-overlay"></div>
        </div>
        <div class="play-card" data-action="match-friend">
          <div class="play-badge-group"><img src="/icons/badge-vs.png" alt="" class="play-icon"><img src="/icons/badge-vs-txt.png" alt="Match Friend" class="play-text-overlay"></div>
        </div>
        <div class="play-card" data-action="mini-league">
          <div class="play-badge-group"><img src="/icons/badge-league.png" alt="" class="play-icon"><img src="/icons/badge-league-txt.png" alt="Mini League" class="play-text-overlay"></div>
        </div>
      </div>

            <!-- Logout -->
      <div style="text-align:center;padding:4px 0 8px;display:flex;flex-direction:column;gap:6px;align-items:center">
        <button class="btn btn-ghost btn-sm" id="logout-btn" style="color:var(--gray-600);padding:4px 14px;font-size:12px">Déconnexion</button>
        ${d.is_admin?`
        <a href="/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:4px 12px;border-radius:8px;font-size:12px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Co}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",f=>{f.preventDefault(),i(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>i("rankings")),(r=document.getElementById("nav-matches"))==null||r.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const f=l.dataset.action;if(f==="match-ai"){Do(i);return}if(f==="match-random"){i("match",{matchMode:"random"});return}if(f==="match-friend"){i("friends");return}if(f==="mini-league"){i("mini-league");return}if(f==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var q,C,P,j,R,V;const l=((q=window.visualViewport)==null?void 0:q.height)||window.innerHeight,f=((C=document.querySelector(".top-nav"))==null?void 0:C.offsetHeight)||56,a=((P=document.querySelector(".bottom-nav"))==null?void 0:P.offsetHeight)||60,o=((j=e.querySelector(".hero-compact"))==null?void 0:j.offsetHeight)||52,x=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const u=((V=(R=e.querySelector("#logout-btn"))==null?void 0:R.closest("div"))==null?void 0:V.offsetHeight)||44,h=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((K,ne)=>{var ie;return K+(((ie=document.getElementById(ne))==null?void 0:ie.offsetHeight)||0)},0),_=14*5,m=l-f-a-o-u-h-_,c=Math.max(80,Math.round(m*.28)),A=Math.max(160,Math.round(m*.72)),p=Math.floor((A-10)/2);x&&(x.style.minHeight=x.style.maxHeight=c+"px"),e.querySelectorAll(".play-grid .play-card").forEach(K=>{K.style.minHeight=K.style.height=p+"px"});const I=Math.round(p*.55);e.querySelectorAll(".play-card .play-icon").forEach(K=>{K.style.height=I+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await T.auth.signOut(),window.location.reload()}),Qi(t,n),Fo(t,n,i),Xi(t,n,i))}async function Xi(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const d=e.profile.id,{data:s}=await T.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${d},away_id.eq.${d}`).order("created_at",{ascending:!1});if(!(s!=null&&s.length)){n.innerHTML="";return}const r=s.map(f=>f.home_id===d?f.away_id:f.home_id).filter(Boolean);let l={};if(r.length){const{data:f}=await T.from("users").select("id, pseudo, club_name").in("id",r);(f||[]).forEach(a=>{l[a.id]=a.club_name||a.pseudo})}n.innerHTML=s.map(f=>{const a=f.home_id===d?f.away_id:f.home_id,o=l[a]||"Adversaire",x=f.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${x?"🏆 Mini League":f.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${o}</div>
        </div>
        <button data-resume="${f.id}" data-mini="${x?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${f.id}" data-opp="${a}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(f=>{f.addEventListener("click",async()=>{const a=document.getElementById("page-content")||document.getElementById("app");if(f.dataset.mini==="1"){const{data:o}=await T.from("mini_league_matches").select("id, league_id").eq("match_id",f.dataset.resume).single();o?i("match-mini-league",{mlMatchId:o.id,leagueId:o.league_id}):i("mini-league")}else{const{resumePvpMatch:o}=await ni(async()=>{const{resumePvpMatch:x}=await Promise.resolve().then(()=>Vn);return{resumePvpMatch:x}},void 0);o(a,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},f.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(f=>{f.addEventListener("click",()=>{Bo(async()=>{await qo(f.dataset.abandon,f.dataset.opp,d),t("Match abandonné (défaite 3-0)","info"),Xi(e,t,i)})})})}async function qo(e,t,i){const{data:n}=await T.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!n)return;const d=n.home_id===i,s=d?0:3,r=d?3:0,l=n.game_state||{};l.p1Score=s,l.p2Score=r,l.phase="finished",l.forfeit=!0,await T.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:s,away_score:r,game_state:l}).eq("id",e)}function Bo(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Fo(e,t,i){var l,f,a,o;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:d}=await T.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!d){n.innerHTML="";return}const s=((l=d.inviter)==null?void 0:l.club_name)||((f=d.inviter)==null?void 0:f.pseudo)||"?",r=d.inviter_id;n.innerHTML=`
    <div id="match-invite-btn" style="
      display:flex;align-items:center;gap:10px;
      background:linear-gradient(135deg,#1a0a2e,#4a0a8a);
      color:#fff;border-radius:12px;padding:12px 16px;
      margin-bottom:10px;cursor:pointer;
      box-shadow:0 3px 12px rgba(74,10,138,0.4);
      animation:matchInvPulse 2s ease-in-out infinite;
    ">
      <style>@keyframes matchInvPulse{0%,100%{box-shadow:0 3px 12px rgba(74,10,138,0.4)}50%{box-shadow:0 3px 24px rgba(74,10,138,0.8)}}</style>
      <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
      <div style="flex:1">
        <div style="font-size:13px;font-weight:900">${s} t'invite à jouer !</div>
        <div style="font-size:11px;opacity:0.75">Accepter la partie ?</div>
      </div>
      <div style="display:flex;gap:8px">
        <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
        <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
      </div>
    </div>`,(a=document.getElementById("match-inv-accept"))==null||a.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:r,friendName:s})}),(o=document.getElementById("match-inv-decline"))==null||o.addEventListener("click",async()=>{await T.from("friend_match_invites").update({status:"declined"}).eq("id",d.id),n.innerHTML="",t("Invitation refusée","info")})}async function Qi(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:d}=await T.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(d||!(n!=null&&n.length)){i.innerHTML="";return}const s=n.length,r=n.slice(0,2).map(f=>{var a;return((a=f.requester)==null?void 0:a.pseudo)||"?"}).join(", "),l=s>2?` +${s-2}`:"";i.innerHTML=`
    <div id="friend-req-btn" style="
      display:flex;align-items:center;gap:10px;
      background:linear-gradient(135deg,#1A6B3C,#2a9d5c);
      color:#fff;border-radius:12px;padding:12px 16px;
      margin-bottom:10px;cursor:pointer;
      box-shadow:0 3px 12px rgba(26,107,60,0.35);
      animation:friendReqPulse 2.5s ease-in-out infinite;
    ">
      <style>
        @keyframes friendReqPulse {
          0%,100% { box-shadow:0 3px 12px rgba(26,107,60,0.35) }
          50% { box-shadow:0 3px 22px rgba(26,107,60,0.65) }
        }
      </style>
      <div style="background:rgba(255,255,255,0.25);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">
          ${s} demande${s>1?"s":""} d'ami${s>1?"s":""} en attente
        </div>
        <div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
          ${r}${l}
        </div>
      </div>
      <div style="font-size:20px;flex-shrink:0">›</div>
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Wi(e,t,()=>Qi(e,t))})}function Do(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${t.map(d=>`
            <div class="action-card" data-mode="${d.mode}" style="cursor:pointer">
              <div class="icon">${d.icon}</div>
              <div class="label">${d.label}</div>
              <div class="sub">${d.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",d=>{d.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{n(),e("match",{matchMode:d.dataset.mode})})})}const Bt="/",Bi={GK:Bt+"cards/card-GK.png",DEF:Bt+"cards/card-DEF.png",MIL:Bt+"cards/card-MIL.png",ATT:Bt+"cards/card-ATT.png"},Po={GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"};function Go(e){if(!(e!=null&&e.face))return null;const t=e.face.replace(/^public\//,"").replace(/^\//,"");return Bt+t}function No(e){return!e||e.length<2?null:`https://flagsapi.com/${e.slice(0,2).toUpperCase()}/flat/64.png`}function Ro(e){var n;const t="https://fcnwclxlkytdfjotqkta.supabase.co",i=((n=e==null?void 0:e.clubs)==null?void 0:n.logo_url)||(e==null?void 0:e.clubLogo);return i?i.startsWith("http")?i:`${t}/storage/v1/object/public/assets/clubs/${i}`:null}function Fi(e,t,i=0){if(!t)return 0;const d="note_"+({GK:"g",DEF:"d",MIL:"m",ATT:"a"}[t]||t.toLowerCase());return(Number(e[d])||0)+(t===e.job||t===e.job2?i:0)}function Oo(e,t){return t?t.club_id&&String(e.club_id)===String(t.club_id)||t.country_code&&e.country_code===t.country_code:!1}function bt(e,t={}){var Z;const{width:i=160,showStad:n=!1,stadDef:d=null,used:s=!1,extraNote:r=0,role:l=null}=t;if(!e)return`<div style="width:${i}px;height:${Math.round(i*657/507)}px;border-radius:8px;background:#111;opacity:0.3"></div>`;const f=i/507,a=Math.round(i*657/507),o=ge=>Math.round(ge*f),x=ge=>o(ge)+"px",u=l||e._line||e.job||"MIL",h=Po[u]||"#D4A017",_=Bi[u]||Bi.MIL,m=e._evolution_bonus??e.evolution_bonus??0,c=n&&(e.stadiumBonus||Oo(e,d))?10:0,A=Fi(e,u,m)+r+c,p=l&&l!==e.job,I=c>0?"#4fc3f7":p?"#E87722":h,q=!l&&e.job2&&e.job2!==u?e.job2:null,C=q?Fi(e,q,m)+r+c:null,P=Go(e),j=No(e.country_code),R=Ro(e),V=(e.firstname||"").toUpperCase(),K=(e.surname_encoded||e.name||"").toUpperCase(),ne=s?"opacity:0.35;":"",ie=K.length>11?34:K.length>8?42:50,Q=o(155),N=o(260),D=o(235),re=o(390),xe=o(180),_e=o(100),we=o(309),ve=o(85),Ee=o(95),se=o(435),pe=o(38),ce=o(374),H=o(6);return`<div style="position:relative;width:${i}px;height:${a+(c>0?o(22):0)}px;flex-shrink:0;${ne}user-select:none">
  ${c>0?`<div style="position:absolute;top:0;left:0;right:0;text-align:center;z-index:5;font-size:${x(22)};line-height:1">🏟️</div>`:""}
  <div style="position:absolute;bottom:0;left:0;width:${i}px;height:${a}px">

  <img src="${_}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:fill" draggable="false">

  <!-- Prénom : premier tiers du bandeau -->
  <div style="position:absolute;top:${x(48)};left:0;right:0;text-align:center;z-index:4;padding:0 ${x(50)}">
    <span style="font-size:${x(20)};font-weight:700;color:${h};letter-spacing:${x(2)};line-height:1;text-shadow:0 1px 4px #000;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${V}</span>
  </div>

  <!-- Nom : deuxième tiers du bandeau -->
  <div style="position:absolute;top:${x(80)};left:0;right:0;text-align:center;z-index:4;padding:0 ${x(10)}">
    <span style="font-size:${x(ie)};font-weight:900;color:#fff;line-height:1;text-shadow:0 2px 8px #000;font-family:Arial Black,Arial;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block">${K}</span>
  </div>

  <!-- Portrait : top aligné sous le bandeau, bas = haut octogone -->
  ${P?`<img src="${P}"
    style="position:absolute;top:${Q}px;left:50%;transform:translateX(-50%);
    width:${N}px;height:${D}px;object-fit:cover;object-position:top center;z-index:2"
    onerror="this.style.display='none'">`:""}

  <!-- Note principale : centrée dans l'octogone du template -->
  <div style="position:absolute;left:${_e}px;top:${re}px;width:${we}px;height:${xe}px;
    z-index:4;display:flex;flex-direction:column;align-items:center;justify-content:center">
    <span style="font-size:${x(80)};font-weight:900;color:${I};font-family:Arial Black,Arial;line-height:1;text-shadow:0 2px 8px rgba(0,0,0,0.9)">${A}</span>
  </div>

  <!-- Note secondaire : carré arrondi rouge sous l'octogone -->
  ${C!==null?`
  <div style="position:absolute;left:50%;transform:translateX(-50%);top:${x(530)};
    width:${x(90)};height:${x(60)};z-index:5;
    border-radius:${x(8)};
    background:#0a0a0a;border:${x(2)} solid #e03030;
    display:flex;align-items:center;justify-content:center">
    <span style="font-size:${x(32)};font-weight:900;color:#e03030;font-family:Arial Black,Arial;line-height:1">${C}</span>
  </div>`:""}

  <!-- Drapeau : sans fond -->
  <div style="position:absolute;left:${pe}px;top:${se}px;width:${Ee}px;height:${ve}px;z-index:3;
    display:flex;align-items:center;justify-content:center;overflow:hidden">
    ${j?`<img src="${j}" style="width:100%;height:100%;object-fit:cover;border-radius:${H}px">`:`<span style="font-size:${x(22)}">🌍</span>`}
  </div>

  <!-- Logo club : sans fond -->
  <div style="position:absolute;left:${ce}px;top:${se}px;width:${Ee}px;height:${ve}px;z-index:3;
    display:flex;align-items:center;justify-content:center;overflow:hidden">
    ${R?`<img src="${R}" style="width:100%;height:100%;object-fit:contain">`:`<span style="font-size:${x(14)};font-weight:900;color:#fff">${(((Z=e.clubs)==null?void 0:Z.encoded_name)||e.clubName||"").slice(0,3).toUpperCase()}</span>`}
  </div>

</div></div>`}const Oe={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Se(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Di=["ATT","MIL","DEF","GK"];function Zi(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let d=n+1;d<i;d++){const s=e[n],r=e[d];if(!s||!r)continue;const l=s._col!=null&&r._col!=null&&s._col===r._col,f=s._col!=null&&r._col!=null&&Math.abs(s._col-r._col)===1,a=Di.indexOf(s._line||s.job),o=Di.indexOf(r._line||r.job),x=Math.abs(a-o)===1;if(!((s._line||s.job)===(r._line||r.job)&&f||l&&x))continue;const _=s.country_code&&r.country_code&&s.country_code===r.country_code,m=s.club_id&&r.club_id&&s.club_id===r.club_id;_&&m?t+=2:(_||m)&&(t+=1)}return t}function Kt(e,t={}){const i=e.reduce((s,r)=>{const l=r._line||r.job,f=r.stadiumBonus&&(l==="MIL"||l==="ATT")?10:0;return s+(Number(l==="MIL"?r.note_m:r.note_a)||0)+(r.boost||0)+f},0),n=Zi(e);let d=i+n;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function Vt(e,t={}){const i=e.reduce((s,r)=>{const l=r._line||r.job;let f=0;l==="GK"?f=Number(r.note_g)||0:l==="MIL"?f=Number(r.note_m)||0:f=Number(r.note_d)||0;const a=r.stadiumBonus&&(l==="GK"||l==="DEF"||l==="MIL")?10:0;return s+f+(r.boost||0)+a},0),n=Zi(e);let d=i+n;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function Yt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function eo(e,t,i="easy"){const n=e.filter(r=>!r.used);if(!n.length)return[];const d=[...n].sort((r,l)=>{const f=t==="attack"?Se(r,"ATT"):r._line==="GK"?Se(r,"GK"):Se(r,"DEF");return(t==="attack"?Se(l,"ATT"):l._line==="GK"?Se(l,"GK"):Se(l,"DEF"))-f});let s=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(s,d.length,3))}function Ho(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const to={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function io(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const d=Ti(i),s=Number(i[t])||0;if(s<=0)return 0;const r=i.note_min??1,l=i.note_max??10,a=(e.current_note??d)-d;return Math.min(l,Math.max(r,s+a))}function Ti(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function zi(e,t){!e||!t||await Promise.all([mi(e,"win"),mi(t,"loss")])}async function mi(e,t){const{data:i}=await T.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const n=i.filter(d=>{var s,r;return((s=d.player)==null?void 0:s.rarity)==="pepite"||((r=d.player)==null?void 0:r.rarity)==="papyte"});n.length&&await Promise.all(n.map(d=>{const s=to[d.player.rarity],r=t==="win"?s.win:s.loss,l=d.player.note_min??1,f=d.player.note_max??10,a=Ti(d.player),o=d.current_note??a,x=Math.min(f,Math.max(l,o+r));return T.from("cards").update({current_note:x}).eq("id",d.id)}))}async function Uo(e,t){return mi(e,t)}const oo=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:to,applyOwnEvolution:Uo,currentSecondaryNote:io,getBaseMainNote:Ti,updateEvolutiveCards:zi},Symbol.toStringTag,{value:"Module"})),Ko={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ci={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Wt=["GK","DEF","MIL","ATT"],Vo=["Tous","GK","DEF","MIL","ATT"],Yo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Pi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Wo(e){return e.length?e.reduce((t,i)=>Pi(i)>Pi(t)?i:t,e[0]):e[0]}function Jo(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Xo={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Qo(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function pi(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function ui(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,d={...i,_evolution_bonus:n},s=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${s}
    ${bt(d,{width:140})}
  </div>`}function Gi(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${bt(e,{width:140})}
  </div>`}async function Zo(e,t){const{state:i,navigate:n,toast:d,openModal:s,closeModal:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await T.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:f}=await T.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),a=(l||[]).filter(H=>H.card_type==="player"&&H.player),o=(l||[]).filter(H=>H.card_type==="game_changer"),x=(l||[]).filter(H=>H.card_type==="formation"),u=(l||[]).filter(H=>H.card_type==="stadium"),{data:h}=await T.from("gc_definitions").select("name,gc_type,color,effect,image_url"),_={};(h||[]).forEach(H=>{_[H.name]=H});const{data:m}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),c={};(m||[]).forEach(H=>{c[H.id]=H}),u.forEach(H=>{H.stadium_def&&(c[H.stadium_id]=H.stadium_def)});const A=Object.keys($i),p=Object.keys(Oe),I={};a.forEach(H=>{const Z=H.player.id;I[Z]=(I[Z]||0)+1}),new Set(Object.keys(I).map(H=>String(H)));const q=new Set(x.map(H=>H.formation)),C=new Set(o.map(H=>H.gc_type));let P="player",j="Tous",R="",V=!1;function K(){return[...a].sort((H,Z)=>{const ge=Wt.indexOf(H.player.job),de=Wt.indexOf(Z.player.job);return ge!==de?ge-de:(H.player.surname_encoded||"").localeCompare(Z.player.surname_encoded||"")})}function ne(){return[...f||[]].sort((H,Z)=>{const ge=Wt.indexOf(H.job),de=Wt.indexOf(Z.job);return ge!==de?ge-de:(H.surname_encoded||"").localeCompare(Z.surname_encoded||"")})}function ie(){return K().filter(H=>{const Z=H.player,ge=j==="Tous"||Z.job===j,de=!R||`${Z.firstname} ${Z.surname_encoded}`.toLowerCase().includes(R);return ge&&de})}function Q(){return ne().filter(H=>{const Z=j==="Tous"||H.job===j,ge=!R||`${H.firstname} ${H.surname_encoded}`.toLowerCase().includes(R);return Z&&ge})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${P==="player"?"var(--green)":"transparent"};
        color:${P==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${a.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${P==="formation"?"var(--green)":"transparent"};
        color:${P==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${x.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${P==="gc"?"var(--green)":"transparent"};
        color:${P==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${P==="stadium"?"#E87722":"transparent"};
        color:${P==="stadium"?"#E87722":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function N(){const H=document.getElementById("col-filters");H&&(P==="player"?(H.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${R}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Vo.map(Z=>`
            <button class="filter-btn" data-job="${Z}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${Z===j?"var(--green)":"var(--gray-200)"};
                background:${Z===j?"var(--green)":"#fff"};
                color:${Z===j?"#fff":"var(--gray-600)"}">
              ${Z}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${V?"var(--yellow)":"var(--gray-200)"};
              background:${V?"var(--yellow)":"#fff"};
              color:${V?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${V?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",Z=>{R=Z.target.value.toLowerCase(),D()}),e.querySelectorAll(".filter-btn").forEach(Z=>{Z.addEventListener("click",()=>{j=Z.dataset.job,N(),D()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{V=!V,N(),D()})):(H.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${V?"var(--yellow)":"var(--gray-200)"};
              background:${V?"var(--yellow)":"#fff"};
              color:${V?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${V?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{V=!V,N(),D()})))}function D(){const H=document.getElementById("col-grid");H&&(P==="player"?Ee(H):P==="formation"?se(H):P==="stadium"?ce(H):pe(H))}function re(H,Z,ge,de,me){const oe=document.getElementById("col-grid"),ue=document.getElementById("col-big");if(!oe||!ue)return;var Le=0;function Ie(){const Ce=window.innerWidth>=768,Te=document.getElementById("col-big"),qe=document.getElementById("col-grid");Ce&&Te&&(Te.style.minHeight="420px",Te.style.flex="1 1 auto"),Ce&&qe&&(qe.style.height=Math.round(310*.76+16)+"px",qe.style.flexShrink="0",qe.style.overflowX="auto",qe.style.overflowY="hidden",qe.style.alignItems="center",qe.style.padding="8px 16px"),ue.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+Z(H[Le])+"</div>";var Pe=ue.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Pe&&Pe.addEventListener("click",function(){de(H[Le])}),requestAnimationFrame(function(){var ze=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!ze||!ue)){var B=ue.clientHeight-8,$=ue.clientWidth-24,g=ze.offsetHeight,y=ze.offsetWidth;if(g>0&&y>0&&B>40){var b=Ce?2.2:1,v=Math.min(B/g,$/y,b);ze.style.transform="scale("+v.toFixed(3)+")",ze.style.transformOrigin="top center"}}}),oe.innerHTML=H.map(function(ze,B){var $=B===Le,g="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+($?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+B+'" style="'+g+'">'+ge(ze,$)+"</div>"}).join(""),oe.querySelectorAll(".col-mini-item").forEach(function(ze){ze.addEventListener("click",function(){Le=Number(ze.dataset.idx),Ie(),ze.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Ie()}function xe(H){var Z=window.innerWidth>=768?.76:.54,ge;if(!H||H._fake){var de=H?H.player:null;if(!de)return"";ge=Gi(de)}else ge=ui(H,"");return'<div style="display:inline-block;zoom:'+Z+';pointer-events:none;line-height:0">'+ge+"</div>"}function _e(H,Z,ge){Z=Z||100,ge=ge||140;var de=Ut[H]||{},me={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},oe=Math.max(3,Math.round(Z*.06)),ue=Object.entries(de).map(function(Ie){var Ce=Ie[0],Te=Ie[1],qe=Ce.replace(/\d+$/,""),Pe=me[qe]||"#888",ze=Math.round(Te.x*Z),B=Math.round(Te.y*ge);return'<circle cx="'+ze+'" cy="'+B+'" r="'+oe+'" fill="'+Pe+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Le=Math.max(1,Math.round(Z/50));return'<svg viewBox="0 0 '+Z+" "+ge+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+Z+'" height="'+ge+'" fill="#1A6B3C"/><rect x="'+Math.round(Z*.2)+'" y="'+Math.round(ge*.02)+'" width="'+Math.round(Z*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Le+'"/><line x1="0" y1="'+Math.round(ge*.5)+'" x2="'+Z+'" y2="'+Math.round(ge*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Le+'"/><ellipse cx="'+Math.round(Z*.5)+'" cy="'+Math.round(ge*.5)+'" rx="'+Math.round(Z*.18)+'" ry="'+Math.round(ge*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Le+'"/><rect x="'+Math.round(Z*.2)+'" y="'+Math.round(ge*.82)+'" width="'+Math.round(Z*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Le+'"/>'+ue+"</svg>"}function we(H,Z,ge){var de=ge>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+ge+"</div>":"",me=Z?'data-form-id="'+Z.id+'"':"",oe=H.length>7?14:H.length>5?16:19,ue=!!Z;return"<div "+me+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(ue?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(ue?"":"filter:grayscale(1);opacity:0.5")+'">'+de+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(ue?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+oe+"px;font-weight:900;color:"+(ue?"#1A6B3C":"#aaa")+';line-height:1">'+H+'</div></div><div style="flex:1;overflow:hidden;background:'+(ue?"#1A6B3C":"#ccc")+'">'+_e(H,140,220)+"</div></div>"}function ve(H,Z){var ge=window.innerWidth>=768?.76:.54,de=140,me=305,oe=Math.round(me*.22),ue=me-oe,Le=H.length>7?10:13,Ie=_e(H,de,ue),Ce=Z?"1.5px solid #2a7a40":"1px solid #ddd",Te=Z?"":"filter:grayscale(1);opacity:0.45;",qe=Z?"#1A6B3C":"#bbb",Pe="#fff";return'<div style="display:inline-block;zoom:'+ge+';line-height:0;pointer-events:none"><div style="width:'+de+"px;height:"+me+"px;border-radius:6px;border:"+Ce+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+Te+'"><div style="height:'+oe+"px;background:"+qe+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Le+"px;font-weight:900;color:"+Pe+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(de-4)+'px">'+H+'</span></div><div style="height:'+ue+'px;overflow:hidden;flex-shrink:0">'+Ie+"</div></div></div>"}function Ee(H){if(V){const Z=Q();if(!Z.length){H.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const ge=Z.map(de=>a.find(me=>me.player.id===de.id)||{_fake:!0,player:de,id:"fake-"+de.id});re(ge,de=>de._fake?Gi(de.player):ui(de,""),de=>de._fake?xe({player:de.player,id:"x",_fake:!0}):xe(de),de=>{de._fake||Ni(de,a,I,t)})}else{const Z=ie();if(!Z.length){H.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const ge={};Z.forEach(me=>{const oe=me.player.id;ge[oe]||(ge[oe]=[]),ge[oe].push(me)});const de=Object.values(ge).map(me=>Wo(me));re(de,me=>{const oe=I[me.player.id]||1,ue=oe>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${oe}</div>`:"",Ie=a.filter(Ce=>Ce.player.id===me.player.id&&Ce.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return ui(me,ue+Ie)},me=>xe(me),me=>Ni(me,a,I,t))}}function se(H){const Z=V?A:[...q];if(!Z.length){H.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const ge=Z.map(de=>({formation:de,card:x.find(me=>me.formation===de)||null,owned:q.has(de)}));re(ge,({formation:de,card:me,owned:oe})=>we(de,oe?me:null,oe?x.filter(ue=>ue.formation===de).length:0),({formation:de,owned:me})=>ve(de,me),({card:de,owned:me})=>{me&&de&&tn(de,x,t,s)})}function pe(H){const Z=Object.keys(_),ge=V?Z.length?Z:p:[...C];if(!ge.length){H.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const de=ge.map(me=>({type:me,gc:Oe[me]||{icon:"⚡",desc:""},def:_[me]||null,owned:C.has(me),card:o.find(oe=>oe.gc_type===me)||null}));re(de,({type:me,gc:oe,def:ue,owned:Le,card:Ie})=>{var b;const Ce=Le?o.filter(v=>v.gc_type===me).length:0,Te=Ce>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Ce}</div>`:"",qe=(ue==null?void 0:ue.gc_type)==="ultra_game_changer",Pe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ze={purple:"#b06ce0",light_blue:"#00d4ef"},B=Pe[ue==null?void 0:ue.color]||Pe.purple,$=ze[ue==null?void 0:ue.color]||ze.purple,g=(ue==null?void 0:ue.effect)||oe.desc||"",y=ue!=null&&ue.image_url?`/icons/${ue.image_url}`:((b=ue==null?void 0:ue.club)==null?void 0:b.logo_url)||(ue!=null&&ue.country_code?`https://flagsapi.com/${ue.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Le&&Ie?`<div data-gc-id="${Ie.id}" data-gc-type="${me}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${$};background:${B};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${$}66;cursor:pointer">
          ${Te}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${me.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${me}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${qe?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${y?`<img src="${y}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${oe.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${g.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${me}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${oe.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:me,gc:oe,def:ue,owned:Le})=>{const Ie=window.innerWidth>=768?.76:.54,Ce={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Te={purple:"#9b59b6",light_blue:"#00bcd4"},qe=Ce[ue==null?void 0:ue.color]||Ce.purple,Pe=Te[ue==null?void 0:ue.color]||Te.purple,ze=ue!=null&&ue.image_url?`/icons/${ue.image_url}`:null;return Le?`<div style="display:inline-block;zoom:${Ie};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${qe};border:1px solid ${Pe};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${me}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${ze?`<img src="${ze}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${oe.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((ue==null?void 0:ue.effect)||oe.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Ie};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${oe.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${me}</span></div></div>`},({type:me,owned:oe,def:ue})=>{oe&&en(me,ue,s)})}function ce(H){const Z="#E87722",ge="/";if(!u.length){H.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const de={};u.forEach(oe=>{const ue=oe.stadium_id||"?";(de[ue]=de[ue]||[]).push(oe)});const me=Object.entries(de).map(([oe,ue])=>({sid:oe,def:c[oe]||null,count:ue.length,card:ue[0]}));re(me,({def:oe,count:ue})=>{var Pe,ze;const Le=(oe==null?void 0:oe.name)||"?",Ie=((Pe=oe==null?void 0:oe.club)==null?void 0:Pe.encoded_name)||(oe==null?void 0:oe.country_code)||"—",Ce=oe!=null&&oe.image_url?`${ge}icons/${oe.image_url}`:((ze=oe==null?void 0:oe.club)==null?void 0:ze.logo_url)||(oe!=null&&oe.country_code?`https://flagsapi.com/${oe.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Te=Ce?`<img src="${Ce}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',qe=ue>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ue}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${Z},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Z}66">
          ${qe}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Le}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${Te}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Ie}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:oe,count:ue})=>{var Pe,ze;const Le=window.innerWidth>=768?.76:.54,Ie=(oe==null?void 0:oe.name)||"?",Ce=((Pe=oe==null?void 0:oe.club)==null?void 0:Pe.encoded_name)||(oe==null?void 0:oe.country_code)||"—",Te=oe!=null&&oe.image_url?`${ge}icons/${oe.image_url}`:((ze=oe==null?void 0:oe.club)==null?void 0:ze.logo_url)||(oe!=null&&oe.country_code?`https://flagsapi.com/${oe.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),qe=Te?`<img src="${Te}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${Le};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${Z},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${Ie}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${qe}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${Ce}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(H=>{H.addEventListener("click",()=>{P=H.dataset.tab,j="Tous",R="",V=!1,e.querySelectorAll(".col-tab-btn").forEach(Z=>{const ge=Z.dataset.tab===P;Z.style.borderBottomColor=ge?"var(--green)":"transparent",Z.style.color=ge?"var(--green)":"var(--gray-600)"}),N(),D()})}),N(),D()}function en(e,t,i){const n=Oe[e]||{icon:"⚡",desc:"Effet spécial."},d=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},r={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,f=r[t==null?void 0:t.color]||r.purple,a=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||n.desc,x=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${f};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${d?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${a}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${x?`<img src="${x}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${n.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${o}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Jt=1e3;function tn(e,t,i,n){var _,m,c;const{state:d,toast:s,closeModal:r,navigate:l,refreshProfile:f}=i,a=e.formation,o={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function x(){const A=Ut[a]||{},p=$i[a]||[],I=290,q=360,C=20;function P(R){const V=A[R];return V?{x:V.x*I,y:V.y*q}:null}let j=`<svg width="${I}" height="${q}" viewBox="0 0 ${I} ${q}" xmlns="http://www.w3.org/2000/svg">`;for(const[R,V]of p){const K=P(R),ne=P(V);!K||!ne||(j+=`<line x1="${K.x}" y1="${K.y}" x2="${ne.x}" y2="${ne.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const R of Object.keys(A)){const V=P(R);if(!V)continue;const K=R.replace(/\d+/,""),ne=o[K]||"#555";j+=`<circle cx="${V.x}" cy="${V.y}" r="${C}" fill="${ne}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,j+=`<text x="${V.x}" y="${V.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${K}</text>`}return j+="</svg>",j}const u=t.filter(A=>A.formation===a);u.length;const h=!e.is_for_sale;n(`Formation ${a}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${x()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+1</b> à l'action.
      </div>
    </div>
    ${clubsHTML}

    <!-- Marché (optionnel) -->
    ${h?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Jt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(_=document.getElementById("direct-sell-form-btn"))==null||_.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${a} pour ${Jt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const A=u.find(I=>!I.is_for_sale)||u[0];if(!A){s("Aucune carte à vendre","error");return}await T.from("market_listings").delete().eq("card_id",A.id),await T.from("transfer_history").delete().eq("card_id",A.id);const{error:p}=await T.from("cards").delete().eq("id",A.id);if(p){s(p.message,"error");return}await T.from("users").update({credits:(d.profile.credits||0)+Jt}).eq("id",d.profile.id),await f(),s(`+${Jt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),l("collection")}),(m=document.getElementById("market-sell-form-btn"))==null||m.addEventListener("click",async()=>{const A=parseInt(document.getElementById("sell-price-form").value);if(!A||A<1){s("Prix invalide","error");return}await T.from("cards").update({is_for_sale:!0,sale_price:A}).eq("id",e.id),await T.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:A}),s("Carte mise en vente sur le marché !","success"),r(),l("collection")}),(c=document.getElementById("cancel-sell-form-btn"))==null||c.addEventListener("click",async()=>{await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await T.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),r(),l("collection")})}async function Ni(e,t,i,n){var xe,_e,we,ve,Ee;const{state:d,toast:s,openModal:r,closeModal:l,navigate:f,refreshProfile:a}=n,o=e.player,x=t.filter(se=>se.player.id===o.id),u=x.length,h=e.evolution_bonus||0,_=Math.max((Number(o.note_g)||0)+(o.job==="GK"||o.job2==="GK"?h:0),(Number(o.note_d)||0)+(o.job==="DEF"||o.job2==="DEF"?h:0),(Number(o.note_m)||0)+(o.job==="MIL"||o.job2==="MIL"?h:0),(Number(o.note_a)||0)+(o.job==="ATT"||o.job2==="ATT"?h:0)),m=o.rarity||"normal",{data:c}=await T.from("sell_price_configs").select("*").eq("rarity",m).lte("note_min",_).gte("note_max",_).order("note_min",{ascending:!1}).limit(1);((xe=c==null?void 0:c[0])==null?void 0:xe.price)??Yo[m];const A=o.rarity!=="legende";Qo(o);const p=((o.rarity==="pepite"||o.rarity==="papyte")&&e.current_note!=null?e.current_note:pi(o,o.job))+h,I=o.rarity==="pepite"||o.rarity==="papyte",q=o.job2?(I?io(e,Jo(o.job2)):pi(o,o.job2))+(pi(o,o.job2)>0?h:0):null;ci[o.job],o.job2&&ci[o.job2];const C=Ko[o.rarity]||"#ccc";Xo[o.country_code]||o.country_code;const P=e.evolution_bonus||0,R=p+P,V=q||0,K=V>0?V+P:0,ne=x.map(se=>se.id);let ie={};if(ne.length){const{data:se}=await T.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ne).order("transferred_at",{ascending:!0});(se||[]).forEach(pe=>{ie[pe.card_id]||(ie[pe.card_id]=[]),ie[pe.card_id].push(pe)})}const Q=se=>{const pe=se.transferred_at?new Date(se.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",ce=se.source==="booster"?"Booster":se.price?se.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${se.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${se.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${se.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${ce}</div>
        <div style="font-size:11px;color:var(--gray-600)">${pe}</div>
      </div>
    </div>`},N=ne.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${u>1?`(${u})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${x.map((se,pe)=>{const ce=ie[se.id]||[],H=se.is_for_sale,Z=ce.length?ce[ce.length-1]:null,de=(o.rarity==="pepite"||o.rarity==="papyte")&&se.current_note!=null?` (☆${se.current_note})`:"";return`
            <div data-card-id="${se.id}" data-card-idx="${pe}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${H?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${se.id}" ${H?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${pe+1}${de}${H?" 🏷️ En vente":""}</div>
                  ${Z?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${Z.club_name} · ${Z.source==="booster"?"Booster":Z.price?Z.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${pe}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${ce.length?`${ce.length} club${ce.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${pe}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${ce.map(Q).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${R}${o.job2&&V>0?` / ${K}`:""}`:`Note actuelle : ${R}${o.job2&&V>0?` / ${K}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${u<=1?"#ccc":"#1A6B3C"};border-color:${u<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${u<=1?"not-allowed":"pointer"}"
            ${u<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${A?`
        <div style="border-top:1px solid #d1fae5;padding-top:8px">
          <div style="font-size:11px;color:#555;margin-bottom:6px">Marché des transferts (prix par carte)</div>
          <div style="display:flex;gap:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${o.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>`:""}
      </div>
    </div>`:"";r(`${o.firstname} ${o.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${bt({...o,_evolution_bonus:h},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${C}">${o.rarity.toUpperCase()}</div>
          ${o.rarity==="pepite"||o.rarity==="papyte"?`
          <div style="margin-top:6px;background:${C}18;border-left:3px solid ${C};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${C};margin-bottom:2px">Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5">
              ${o.rarity==="pepite"?"✅ Victoire : <b>+2</b> &nbsp;|&nbsp; ❌ Défaite : <b>-1</b>":"✅ Victoire : <b>+1</b> &nbsp;|&nbsp; ❌ Défaite : <b>-2</b>"}
              <br>Note actuelle : <b>${e.current_note??(o.rarity==="pepite"?o.note_min:o.note_max)??"—"}</b>
              &nbsp;·&nbsp; Min : <b>${o.note_min??"—"}</b>
              &nbsp;·&nbsp; Max : <b>${o.note_max??"—"}</b>
            </div>
          </div>`:""}
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${o.job}${o.job2?" / "+o.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",o.note_g],["DEF",o.note_d],["MIL",o.note_m],["ATT",o.note_a]].map(([se,pe])=>{const ce=ci[se],H=se==="GK"?"#fff":ce,Z=se===o.job||se===o.job2,ge=(Number(pe)||0)+(Z&&P>0?P:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${ce};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${H};font-family:Arial Black,Arial;line-height:1">${ge}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${H}">${se}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${u}</div>
        </div>
      </div>
    </div>
    ${N}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(_e=document.getElementById("close-detail"))==null||_e.addEventListener("click",l);let D=new Set;const re=()=>{const se=D.size,pe=document.getElementById("sell-action-panel");if(!pe)return;pe.style.display=se>0?"block":"none",document.getElementById("sell-selected-count").textContent=se;const ce=document.getElementById("evolve-btn");ce&&(ce.textContent=`⬆️ Évoluer ${se>1?"(+"+se+")":""}`)};document.querySelectorAll(".expl-check").forEach(se=>{se.addEventListener("change",()=>{const pe=se.dataset.id;se.checked?D.add(pe):D.delete(pe);const ce=se.closest(".exemplaire-row");ce&&(ce.style.borderColor=se.checked?"#1A6B3C":"#eee"),re()})}),document.querySelectorAll(".exemplaire-row").forEach(se=>{se.addEventListener("click",pe=>{if(pe.target.closest("button")||pe.target.tagName==="INPUT")return;const ce=se.querySelector(".expl-check");ce&&!ce.disabled&&(ce.checked=!ce.checked,ce.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(se=>{se.addEventListener("click",pe=>{pe.stopPropagation();const ce=document.querySelector(`.expl-hist[data-hist="${se.dataset.idx}"]`);ce&&(ce.style.display=ce.style.display==="none"?"flex":"none")})}),(we=document.getElementById("evolve-btn"))==null||we.addEventListener("click",async()=>{if(u<=1)return;const se=[...D];if(!se.length)return;if(D.has(e.id)){const me=document.createElement("div");me.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",me.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(me),me.querySelector("#err-close").addEventListener("click",()=>me.remove()),me.addEventListener("click",oe=>{oe.target===me&&me.remove()});return}const pe=se.filter(me=>me!==e.id),ce=o.rarity==="legende"?2:1;if((pe.length||1)*ce,!(!pe.length&&se.length===1&&se[0]===e.id)){if(!pe.length){s("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(me=>{const oe=document.createElement("div");oe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",oe.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${o.firstname} ${o.surname_encoded}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${pe.length}</strong> copie${pe.length>1?"s":""} sacrifiée${pe.length>1?"s":""}<br>
            📈 Note : <strong>${p+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${p+(e.evolution_bonus||0)+pe.length*ce}</strong>
            ${q&&q>0?`<br>📈 Note 2 : <strong>${q+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${q+(e.evolution_bonus||0)+pe.length*ce}</strong>`:""}
            ${o.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${ce} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(oe),oe.querySelector("#sac-cancel").addEventListener("click",()=>{oe.remove(),me(!1)}),oe.querySelector("#sac-ok").addEventListener("click",()=>{oe.remove(),me(!0)}),oe.addEventListener("click",ue=>{ue.target===oe&&(oe.remove(),me(!1))})}))return;if(pe.length){await T.from("market_listings").delete().in("card_id",pe),await T.from("deck_cards").delete().in("card_id",pe),await T.from("transfer_history").delete().in("card_id",pe),await T.from("decks").update({stadium_card_id:null}).in("stadium_card_id",pe);const{error:me}=await T.from("cards").delete().in("id",pe);if(me){s("Erreur suppression : "+me.message,"error");return}}const Z=(e.evolution_bonus||0)+pe.length*ce,{error:ge}=await T.from("cards").update({evolution_bonus:Z}).eq("id",e.id);if(ge){s("Erreur évolution : "+ge.message,"error");return}const de=p+Z;s(`⬆️ ${o.firstname} ${o.surname_encoded} : note ${p+e.evolution_bonus||p} → ${de}${pe.length?` · ${pe.length} copie${pe.length>1?"s":""} sacrifiée${pe.length>1?"s":""}`:""} !`,"success",4e3),l(),f("collection")}),(ve=document.getElementById("market-sell-btn"))==null||ve.addEventListener("click",async()=>{var ge;const se=[...D];if(!se.length){s("Sélectionne au moins un exemplaire","warning");return}const pe=parseInt((ge=document.getElementById("sell-market-price"))==null?void 0:ge.value);if(!pe||pe<1){s("Prix invalide","error");return}const{error:ce}=await T.from("cards").update({is_for_sale:!0,sale_price:pe}).in("id",se);if(ce){s(ce.message,"error");return}const H=se.map(de=>({seller_id:d.profile.id,card_id:de,price:pe,status:"active"})),{error:Z}=await T.from("market_listings").insert(H);Z&&console.warn("[Market] insert listings:",Z.message),s(`${se.length} carte${se.length>1?"s":""} mise${se.length>1?"s":""} en vente à ${pe.toLocaleString("fr")} cr. chacune !`,"success"),l(),f("collection")}),(Ee=document.getElementById("cancel-sell-btn"))==null||Ee.addEventListener("click",async()=>{await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await T.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),f("collection")})}const ei={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Dt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function no(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}async function xi(e,t){const{state:i,navigate:n,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await T.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(s==null?void 0:s.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(s==null?void 0:s.length)>0?s.map(r=>`
          <div class="card-panel" data-open-deck="${r.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="font-weight:700;font-size:15px;flex:1">${r.name}</div>
            <div style="display:flex;gap:6px" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${r.id}" data-name="${r.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${r.id}" data-name="${r.name}">🗑️</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const r=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!r)return;const{data:l,error:f}=await T.from("decks").insert({owner_id:i.profile.id,name:r}).select().single();if(f){d(f.message,"error");return}d("Deck créé !","success"),Ri(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(r=>{r.addEventListener("click",()=>Ri(r.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(r=>{r.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",r.dataset.name);if(!l||l===r.dataset.name)return;const{error:f}=await T.from("decks").update({name:l}).eq("id",r.dataset.rename);if(f){d(f.message,"error");return}d("Deck renommé !","success"),xi(e,t)})}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${r.dataset.name}" ? Cette action est irréversible.`))return;await T.from("deck_cards").delete().eq("deck_id",r.dataset.delete);const{error:l}=await T.from("decks").delete().eq("id",r.dataset.delete);if(l){d(l.message,"error");return}d("Deck supprimé.","success"),xi(e,t)})})}async function Ri(e,t,i){const{state:n,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await T.from("decks").select("*").eq("id",e).single(),{data:r}=await T.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:l}=await T.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),f=(r||[]).filter(A=>A.card_type==="player"&&A.player),a=(r||[]).filter(A=>A.card_type==="formation"),o=(l||[]).filter(A=>A.card_type==="stadium"),x=[...new Set(o.map(A=>A.stadium_id).filter(Boolean))];let u={};if(o.forEach(A=>{A.stadium_def&&A.stadium_id&&(u[A.stadium_id]=A.stadium_def)}),x.length&&Object.keys(u).length<x.length){const{data:A}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",x);(A||[]).forEach(p=>{u[p.id]=p})}const h=a.map(A=>A.formation).filter(Boolean),{data:_}=await T.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let m=s.formation||"4-4-2";h.length>0&&!h.includes(m)&&(m=h[0]);const c={deckId:e,name:s.name,formation:m,formationCardId:s.formation_card_id,stadiumCardId:s.stadium_card_id||null,slots:{},subs:[],playerCards:f,formationCards:a,stadiumCards:o,stadDefMap:u,availableFormations:h};(_||[]).forEach(A=>{A.is_starter?c.slots[A.position]=A.card_id:c.subs.includes(A.card_id)||c.subs.push(A.card_id)}),ht(t,c,i)}function ht(e,t,i){var _,m,c,A;const{navigate:n}=i;ei[t.formation];const d=Oi(t.formation),s=d.filter(p=>t.slots[p]).length,r=t.availableFormations.length>0?t.availableFormations:Object.keys(ei),l=(_=t.stadiumCards)==null?void 0:_.find(p=>p.id===t.stadiumCardId),f=l&&((m=t.stadDefMap)==null?void 0:m[l.stadium_id])||null,a=t.subs.map(p=>t.playerCards.find(I=>I.id===p)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${t.name}</h2>
        <p>${s}/11 titulaires · ${t.subs.length}/5 remplaçants</p>
      </div>
    </div>

    <!-- Formation (mobile uniquement — PC : dans la colonne gauche) -->
    <div class="formation-mobile-only" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <label style="font-size:11px;margin-bottom:4px;display:block">Formation ${t.availableFormations.length===0?"(aucune carte — toutes disponibles)":""}</label>
      <select id="formation-select" style="width:100%;padding:7px;border-radius:6px;border:1.5px solid var(--gray-200)">
        ${r.map(p=>`<option value="${p}" ${p===t.formation?"selected":""}>${p}</option>`).join("")}
      </select>
    </div>

    <!-- ── LAYOUT PC ─────────────────────────────────────── -->
    <div class="deck-pc-layout" style="display:none">
      <div style="display:flex;gap:0;min-height:600px">

        <!-- Remplaçants (colonne gauche) -->
        <div style="width:115px;flex-shrink:0;background:rgba(0,0,0,0.3);display:flex;flex-direction:column;align-items:center;padding:12px 8px;gap:10px;border-right:1px solid rgba(255,255,255,0.1)">
          <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;text-align:center">Remplaçants (${t.subs.length}/5)</div>

          <!-- Remplaçants PC : colonne verticale -->
          <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;text-align:center;margin-top:8px">Remplaçants<br>(${t.subs.length}/5)</div>
          <div style="display:flex;flex-direction:column;gap:6px;align-items:center" id="subs-list">
            ${a.map(p=>{const I={...p.player,_evolution_bonus:p.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                ${bt({...I,_evolution_bonus:I._evolution_bonus||0},{width:60,showStad:!0,stadDef:f})}
                <button data-remove-sub="${p.id}"
                  style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
              </div>`}).join("")}
            ${t.subs.length<5?'<div id="add-sub-btn" style="width:60px;height:77px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:18px;color:rgba(255,255,255,0.4);cursor:pointer">+</div>':""}
          </div>
        </div>

        <!-- Terrain PC (colonne centrale) -->
        <div style="flex:1;background:linear-gradient(180deg,#1a6b3c,#0a3d1e);overflow:hidden">
          <div id="deck-field-pc"></div>
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
            <div id="add-stad-btn" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${l?(()=>{var q;const p=t.stadDefMap[l.stadium_id],I=((q=p==null?void 0:p.club)==null?void 0:q.logo_url)||null;return`<div style="width:100px;height:130px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
                  ${I?`<img src="${I}" style="width:48px;height:48px;object-fit:contain">`:'<span style="font-size:36px">🏟️</span>'}
                  <span style="font-size:10px;font-weight:700;color:#E87722;text-align:center;padding:0 4px">${((p==null?void 0:p.name)||"Stade").slice(0,14)}</span>
                </div>`})():`<div style="width:100px;height:130px;border:2px dashed rgba(255,165,0,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
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
        <div id="deck-field-mobile"></div>
      </div>

      <!-- Remplaçants + Stade mobile -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.1)">
        <div style="display:flex;gap:10px;align-items:flex-start">
          <!-- Remplaçants mobile -->
          <div style="flex:1;min-width:0">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">Remplaçants (${t.subs.length}/5)</div>
            <div style="display:flex;gap:4px;align-items:flex-end;flex-wrap:nowrap;overflow-x:auto" id="subs-list">
              ${a.map(p=>{const I={...p.player,_evolution_bonus:p.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                  ${bt({...I,_evolution_bonus:I._evolution_bonus||0},{width:44,showStad:!0,stadDef:f})}
                  <button data-remove-sub="${p.id}"
                    style="position:absolute;top:-5px;right:-5px;width:15px;height:15px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
                </div>`}).join("")}
              ${t.subs.length<5?'<div id="add-sub-btn" style="width:28px;height:36px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:16px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
            </div>
          </div>
          <!-- Stade mobile : à droite -->
          <div style="flex-shrink:0;text-align:center">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">🏟️</div>
            <div id="add-stad-btn" style="cursor:pointer">
              ${l?(()=>{var q;const p=t.stadDefMap[l.stadium_id],I=((q=p==null?void 0:p.club)==null?void 0:q.logo_url)||null;return`<div style="width:50px;height:65px;border-radius:6px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
                  ${I?`<img src="${I}" style="width:26px;height:26px;object-fit:contain">`:'<span style="font-size:18px">🏟️</span>'}
                  <span style="font-size:7px;font-weight:700;color:#E87722;text-align:center;padding:0 2px">${((p==null?void 0:p.name)||"Stade").slice(0,10)}</span>
                </div>`})():`<div style="width:50px;height:65px;border:2px dashed rgba(255,165,0,0.4);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
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
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${s<11?"disabled":""}>
        ${s<11?`Placez encore ${11-s} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`;const o=window.innerWidth>=768,x=e.querySelector(".deck-pc-layout"),u=e.querySelector(".deck-mobile-layout"),h=e.querySelector(".formation-mobile-only");x&&(x.style.display=o?"block":"none"),u&&(u.style.display=o?"none":"block"),h&&(h.style.display=o?"none":"block"),on(e,t,d,i),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",p=>{t.formation=p.target.value;const I=Oi(t.formation),q={};I.forEach(C=>{t.slots[C]&&(q[C]=t.slots[C])}),t.slots=q,ht(e,t,i)}),(c=document.getElementById("add-stad-btn"))==null||c.addEventListener("click",()=>{nn(t,e,i)}),document.getElementById("save-deck").addEventListener("click",()=>sn(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(p=>{p.addEventListener("click",()=>{t.subs=t.subs.filter(I=>I!==p.dataset.removeSub),ht(e,t,i)})}),(A=document.getElementById("add-sub-btn"))==null||A.addEventListener("click",()=>{an(t,e,i)})}function on(e,t,i,n){var I,q;const d=window.innerWidth>=768,s=e.querySelector(d?"#deck-field-pc":"#deck-field-mobile");if(!s)return;const r=(I=t.stadiumCards)==null?void 0:I.find(C=>C.id===t.stadiumCardId),l=r&&((q=t.stadDefMap)==null?void 0:q[r.stadium_id])||null,f=Ut[t.formation]||{},a=Vi(t.formation)||[],o={};for(const C of i){const P=t.slots[C],j=P?t.playerCards.find(R=>R.id===P):null;j!=null&&j.player?o[C]={...j.player,_evolution_bonus:j.evolution_bonus||0,face:j.player.face||null}:o[C]=null}const x=window.innerWidth>=768,u=x?window.innerWidth-280:window.innerWidth-20,h=x?Math.min(u,860):u,_=Math.round(x?h*.82:h*1.35),m=x?70:44;let c="";for(const[C,P]of a){const j=f[C],R=f[P];if(!j||!R)continue;const V=j.x*h,K=Math.round(.03*_+j.y*.85*_),ne=R.x*h,ie=Math.round(.03*_+R.y*.85*_),Q=o[C],N=o[P],D=nt(Q,N);D==="#ff3333"||D==="#cc2222"?c+=`<line x1="${V.toFixed(1)}" y1="${K.toFixed(1)}" x2="${ne.toFixed(1)}" y2="${ie.toFixed(1)}" stroke="${D}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(c+=`<line x1="${V.toFixed(1)}" y1="${K.toFixed(1)}" x2="${ne.toFixed(1)}" y2="${ie.toFixed(1)}" stroke="${D}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,c+=`<line x1="${V.toFixed(1)}" y1="${K.toFixed(1)}" x2="${ne.toFixed(1)}" y2="${ie.toFixed(1)}" stroke="${D}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let A="";const p=Math.round(m*657/507);for(const C of i){const P=f[C];if(!P)continue;const j=o[C],R=P.x*h;P.y*_;const V=Math.round(.03*_+P.y*(.85*_)),K=Math.round(R-m/2),ne=Math.round(V-p/2);if(j){const ie=C.replace(/\d+/,""),Q=l&&(l.club_id&&String(j.club_id)===String(l.club_id)||l.country_code&&j.country_code===l.country_code),N=bt({...j,_evolution_bonus:j._evolution_bonus||0},{width:m,showStad:!1,stadDef:l,role:ie}),D=Q?`<div style="position:absolute;top:-${Math.round(p*.12)}px;left:0;right:0;text-align:center;font-size:${Math.round(m*.35)}px;z-index:5;line-height:1">🏟️</div>`:"";A+=`<div style="position:absolute;left:${K}px;top:${ne}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${C}">
        <div style="position:relative">${D}${N}</div>
      </div>`}else{const ie=C.replace(/\d+/,"");A+=`<div style="position:absolute;left:${K}px;top:${ne}px;width:${m}px;height:${p}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${C}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${ie}</span>
      </div>`}}s.innerHTML=`
    <div style="position:relative;width:${h}px;height:${_}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${h} ${_}">${c}</svg>
      ${A}
    </div>`,s.querySelectorAll(".deck-slot-hit").forEach(C=>{C.addEventListener("click",()=>rn(C.dataset.pos,t,e,n))})}function nn(e,t,i){var r;const{openModal:n,closeModal:d}=i,s=e.stadiumCards||[];n("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:70px;text-align:center">
        <div style="width:65px;height:85px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${e.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:22px">🚫</span>
          <span style="font-size:9px;color:#666">Aucun</span>
        </div>
      </div>
      ${s.map(l=>{var u;const f=e.stadDefMap[l.stadium_id],a=((u=f==null?void 0:f.club)==null?void 0:u.logo_url)||null,o=f!=null&&f.image_url?"/icons/"+f.image_url:null,x=e.stadiumCardId===l.id;return`<div class="stad-choice" data-stad-id="${l.id}" style="cursor:pointer;width:70px;text-align:center">
          <div style="width:65px;height:85px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid ${x?"#E87722":"#444"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;overflow:hidden;position:relative">
            ${o?`<img src="${o}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.4">`:""}
            ${a?`<img src="${a}" style="width:32px;height:32px;object-fit:contain;position:relative;z-index:1">`:'<span style="font-size:22px">🏟️</span>'}
            <span style="font-size:8px;font-weight:700;color:${x?"#E87722":"#ccc"};position:relative;z-index:1;padding:0 2px;text-align:center">${((f==null?void 0:f.name)||"Stade").slice(0,12)}</span>
          </div>
        </div>`}).join("")}
    </div>`),(r=document.getElementById("stad-none"))==null||r.addEventListener("click",()=>{e.stadiumCardId=null,d(),ht(t,e,i)}),document.querySelectorAll(".stad-choice").forEach(l=>{l.addEventListener("click",()=>{e.stadiumCardId=l.dataset.stadId,d(),ht(t,e,i)})})}function rn(e,t,i,n){var u,h,_;const{openModal:d,closeModal:s}=n,r=e.replace(/\d+/,""),l=t.slots[e],f=l?t.playerCards.find(m=>m.id===l):null;(u=f==null?void 0:f.player)==null||u.id;const a=new Set;Object.entries(t.slots).forEach(([m,c])=>{var p;if(m===e||!c)return;const A=t.playerCards.find(I=>I.id===c);(p=A==null?void 0:A.player)!=null&&p.id&&a.add(A.player.id)}),t.subs.forEach(m=>{var A;const c=t.playerCards.find(p=>p.id===m);(A=c==null?void 0:c.player)!=null&&A.id&&a.add(c.player.id)});const o=new Set,x=t.playerCards.filter(m=>{const c=m.player;return!(c.job===r||c.job2===r)||a.has(c.id)||o.has(c.id)?!1:(o.add(c.id),!0)});x.sort((m,c)=>{const A=m.evolution_bonus||0,p=c.evolution_bonus||0,I=(r==="GK"?m.player.note_g:r==="DEF"?m.player.note_d:r==="MIL"?m.player.note_m:m.player.note_a)+(r===m.player.job||r===m.player.job2?A:0);return(r==="GK"?c.player.note_g:r==="DEF"?c.player.note_d:r==="MIL"?c.player.note_m:c.player.note_a)+(r===c.player.job||r===c.player.job2?p:0)-I}),d(`Choisir ${r} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${x.length>0?x.map(m=>{var C,P;const c=m.player,A=m.evolution_bonus||0,p=(r==="GK"?c.note_g:r==="DEF"?c.note_d:r==="MIL"?c.note_m:c.note_a)+(r===c.job||r===c.job2?A:0),I=no(c),q={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[c.rarity];return`<div class="player-option" data-card-id="${m.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Dt[r]}">
            ${I?`<img src="${I}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${Dt[r]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${r}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${c.firstname} ${c.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${c.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${c.country_code}">
              ${(C=c.clubs)!=null&&C.logo_url?`<img src="${c.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((P=c.clubs)==null?void 0:P.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${c.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${Dt[r]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${q};flex-shrink:0">
            ${p}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(h=document.getElementById("close-selector"))==null||h.addEventListener("click",s),(_=document.getElementById("remove-player"))==null||_.addEventListener("click",()=>{delete t.slots[e],s(),ht(i,t,n)}),document.querySelectorAll(".player-option").forEach(m=>{m.addEventListener("click",()=>{t.slots[e]=m.dataset.cardId,s(),ht(i,t,n)})})}function an(e,t,i){var f;const{openModal:n,closeModal:d}=i,s=new Set;Object.keys(e.slots).forEach(a=>{var u;const o=e.slots[a];if(!o)return;const x=e.playerCards.find(h=>h.id===o);(u=x==null?void 0:x.player)!=null&&u.id&&s.add(x.player.id)}),e.subs.forEach(a=>{var x;const o=e.playerCards.find(u=>u.id===a);(x=o==null?void 0:o.player)!=null&&x.id&&s.add(o.player.id)});const r=new Set,l=e.playerCards.filter(a=>{var o,x,u;return s.has((o=a.player)==null?void 0:o.id)||r.has((x=a.player)==null?void 0:x.id)?!1:(r.add((u=a.player)==null?void 0:u.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(a=>{var h;const o=a.player,x=no(o),u=(o.job==="GK"?o.note_g:o.job==="DEF"?o.note_d:o.job==="MIL"?o.note_m:o.note_a)+(a.evolution_bonus||0);return`<div class="player-option" data-card-id="${a.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Dt[o.job]}">
            ${x?`<img src="${x}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${o.firstname} ${o.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${o.job} · ${o.country_code} · ${((h=o.clubs)==null?void 0:h.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${Dt[o.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${u}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(f=document.getElementById("close-sub-selector"))==null||f.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(a=>{a.addEventListener("click",()=>{e.subs.push(a.dataset.cardId),d(),ht(t,e,i)})})}async function sn(e,t){const{state:i,toast:n,navigate:d}=t,s=e.formationCards.find(f=>f.formation===e.formation),r=(s==null?void 0:s.id)||e.formationCardId;await T.from("decks").update({formation:e.formation,formation_card_id:r||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await T.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([f,a],o)=>{l.push({deck_id:e.deckId,card_id:a,position:f,is_starter:!0,slot_order:o})}),e.subs.forEach((f,a)=>{l.push({deck_id:e.deckId,card_id:f,position:`SUB${a+1}`,is_starter:!1,slot_order:100+a})}),l.length>0){const{error:f}=await T.from("deck_cards").insert(l);if(f){n(f.message,"error");return}}n("Deck enregistré ✅","success"),d("decks")}function Oi(e){const t=ei[e]||ei["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function ro(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await T.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(r=>!(r.available_from&&t<r.available_from||r.available_until&&t>r.available_until));if(!n.length)return[];let d=n;if(e){const r=n.filter(l=>l.max_per_user!=null);if(r.length){const{data:l}=await T.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",r.map(a=>a.id)),f={};(l||[]).forEach(a=>{f[a.booster_id]=(f[a.booster_id]||0)+1}),d=n.filter(a=>a.max_per_user==null?!0:(f[a.id]||0)<a.max_per_user)}}if(!d.length)return[];const{data:s}=await T.from("booster_drop_rates").select("*").in("booster_id",d.map(r=>r.id)).order("sort_order");return d.map(r=>({...r,rates:(s||[]).filter(l=>l.booster_id===r.id)}))}async function dn(e,t){const{data:i}=await T.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await T.from("booster_claims").insert({user_id:e,booster_id:t})}function ln(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,d)=>n+Number(d.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const ao=()=>Object.keys(Ut),cn=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],yi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function pn(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return bt({...t,_evolution_bonus:i},{width:140})}function so(e){var d;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const i=((d=Object.entries(t).sort((s,r)=>r[1]-s[1])[0])==null?void 0:d[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function un(e,{state:t,navigate:i,toast:n}){var x,u,h;const d=((x=t.profile)==null?void 0:x.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await ro((u=t.user)==null?void 0:u.id)).map(so)}catch(_){console.warn("Erreur chargement boosters DB, fallback hardcodé",_)}s.length||(s=cn.map(_=>({..._,rates:[],isPub:_.id==="players_pub"})));const r=await T.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(_=>_.data||[]),l=new Set(r.filter(_=>_.card_type==="stadium").map(_=>_.stadium_id)),f=new Set(r.filter(_=>_.card_type==="formation").map(_=>_.formation)),a=new Set(r.filter(_=>_.card_type==="game_changer").map(_=>_.gc_type)),o={};for(const _ of s){if(_.allow_duplicates!==!1||!((h=_.rates)!=null&&h.length))continue;const m=[...new Set((_.rates||[]).map(A=>A.card_type))];let c=!1;for(const A of m)if(A==="stadium"){const{data:p}=await T.from("stadium_definitions").select("id");if((p||[]).some(I=>!l.has(I.id))){c=!0;break}}else if(A==="game_changer"){const{data:p}=await T.from("gc_definitions").select("name").eq("is_active",!0);if((p||[]).some(I=>!a.has(I.name))){c=!0;break}}else if(A==="formation"){const{FORMATION_LINKS:p}=await ni(async()=>{const{FORMATION_LINKS:I}=await import("./formation-links-BZe0pGr4.js").then(q=>q.p);return{FORMATION_LINKS:I}},__vite__mapDeps([0,1]));if(Object.keys(p).some(I=>!f.has(I))){c=!0;break}}else{c=!0;break}c||(o[_.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${d.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${s.map(_=>{const m=_.cost===0||d>=_.cost,c=o[_.id]===!0;return`<div class="booster-card ${!m||c?"disabled":""}" data-booster="${_.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${_.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${_.img}" alt="${_.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${_.name}</div>
            <div class="desc">${_.sub}</div>
            <div class="cost">${_.costLabel}</div>
            ${m?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
            ${c?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(_=>{_.addEventListener("click",async()=>{const m=s.find(c=>c.id===_.dataset.booster);if(m){_.style.opacity="0.5",_.style.pointerEvents="none";try{await fn(m,{state:t,toast:n,navigate:i,container:e})}catch(c){n(c.message,"error"),_.style.opacity="",_.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(_=>{_.addEventListener("click",m=>{m.stopPropagation();const c=s.find(A=>A.id===_.dataset.boosterId);yn(c)})})}async function fn(e,{state:t,toast:i,navigate:n,container:d}){var x,u;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await hn();const{data:s}=await T.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),r=new Set((s||[]).filter(h=>h.card_type==="player").map(h=>h.player_id)),l=new Set((s||[]).filter(h=>h.card_type==="formation").map(h=>h.formation));let f=[],a=null;try{if((x=e.rates)!=null&&x.length)f=await bi(t.profile,e);else{const h=e.type||"player";h==="player"?f=await lo(t.profile,e.cardCount,e.cost):h==="game_changer"?f=await co(t.profile,e.cardCount,e.cost):h==="formation"?f=await po(t.profile,e.cost):f=await bi(t.profile,e)}}catch(h){a=h.message||String(h),console.error("[Booster] Erreur:",h)}if(f!=null&&f.length&&e._boosterId&&await dn(t.user.id,e._boosterId),!(f!=null&&f.length)){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",h.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${a||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(h),(u=h.querySelector("#anim-close-err"))==null||u.addEventListener("click",()=>h.remove());return}f.forEach(h=>{h.card_type==="player"&&h.player?h.isDuplicate=r.has(h.player.id):h.card_type==="formation"&&(h.isDuplicate=l.has(h.formation))});const{data:o}=await T.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),uo(f,e,n)}function gn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function xt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function mn(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>xt(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>xt(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&xt(n)>=6),i.length||(i=e.filter(n=>xt(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&xt(n)>=1&&xt(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function bi(e,t){if(t.cost>0){const{error:u}=await T.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(u)throw u}const i=t.allow_duplicates!==!1;let n=[];const{data:d,error:s}=await T.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(s){const{data:u}=await T.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=u||[]}else n=d||[];const r=new Set(n.filter(u=>u.card_type==="player").map(u=>u.player_id)),l=new Set(n.filter(u=>u.card_type==="formation").map(u=>u.formation)),f=new Set(n.filter(u=>u.card_type==="game_changer").map(u=>u.gc_type)),a=new Set(n.filter(u=>u.card_type==="stadium").map(u=>u.stadium_id).filter(Boolean)),o=new Set,x=[];for(let u=0;u<(t.cardCount||5);u++){const h=ln(t.rates);if(h){if(h.card_type==="player"){const _=j=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[j]||j,m=h.rarity?_(h.rarity):null;let c=T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);m&&(c=c.eq("rarity",m));const{data:A}=await c;let p=A||[];if((h.note_min||h.note_max)&&(p=p.filter(j=>{const R=Math.max(Number(j.note_g)||0,Number(j.note_d)||0,Number(j.note_m)||0,Number(j.note_a)||0);return(!h.note_min||R>=h.note_min)&&(!h.note_max||R<=h.note_max)})),p.length||(h.note_min||h.note_max?(p=A||[],console.warn("[Booster] Aucun joueur avec note",h.note_min,"-",h.note_max,"— fallback rareté uniquement")):p=A||[]),!p.length)continue;let I=p.filter(j=>!o.has(j.id));if(i)I.length||(I=p);else if(I=I.filter(j=>!r.has(j.id)),!I.length)continue;const q=I[Math.floor(Math.random()*I.length)];o.add(q.id);const C=r.has(q.id),{data:P}=await T.from("cards").insert({owner_id:e.id,player_id:q.id,card_type:"player"}).select().single();P&&(x.push({...P,player:q,isDuplicate:C}),T.rpc("record_transfer",{p_card_id:P.id,p_player_id:q.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(h.card_type==="game_changer"){const{data:_}=await T.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),m=_!=null&&_.length?_:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],c=i?m:m.filter(q=>!f.has(q.name));if(!i&&!c.length)continue;const p=c[Math.floor(Math.random()*c.length)].name,{data:I}=await T.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:p}).select().single();I&&x.push(I)}else if(h.card_type==="formation"){const _=ao(),m=i?_:_.filter(I=>!l.has(I));if(!i&&!m.length)continue;const c=m[Math.floor(Math.random()*m.length)],A=l.has(c),{data:p}=await T.from("cards").insert({owner_id:e.id,card_type:"formation",formation:c}).select();p!=null&&p[0]&&x.push({...p[0],isDuplicate:A})}else if(h.card_type==="stadium"){const{data:_,error:m}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(m){console.error("[Booster] stadium_definitions:",m.message);continue}if(!(_!=null&&_.length)){console.warn("[Booster] Aucun stade en DB");continue}const c=i?_:_.filter(q=>!a.has(q.id));if(!i&&!c.length)continue;const A=c[Math.floor(Math.random()*c.length)],{data:p,error:I}=await T.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:A.id}).select("id,card_type,stadium_id").single();if(I){console.error("[Booster] insert stadium card:",I.message);continue}p&&x.push({...p,rarity:"normal",_stadiumDef:A})}}}return x}async function lo(e,t,i){if(i>0){const{error:a}=await T.from("users").update({credits:e.credits-i}).eq("id",e.id);if(a)throw a}const{data:n}=await T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=n.filter(a=>a.job==="GK"),s=n.filter(a=>a.job!=="GK"),r=!e.first_booster_opened&&d.length>0,l=[];for(let a=0;a<t;a++){const o=a===0&&r?d:a===0?s:n,x=gn(),u=mn(o,x);u&&l.push(u)}r&&await T.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:f}=await T.from("cards").insert(l.map(a=>({owner_id:e.id,player_id:a.id,card_type:"player"}))).select();return(f||[]).forEach((a,o)=>{T.rpc("record_transfer",{p_card_id:a.id,p_player_id:l[o].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((a,o)=>({...f[o],player:a}))}async function co(e,t,i){const{error:n}=await T.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:d}=await T.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=d!=null&&d.length?d:Object.keys(yi).map(o=>({name:o,gc_type:"game_changer"})),r=Array.from({length:t},()=>{const o=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:o.name,gc_definition_id:o.id||null}}),{data:l,error:f}=await T.from("cards").insert(r).select();return f&&console.error("[Booster GC] Erreur insert:",f.message,f),(l||[]).map(o=>{const x=d==null?void 0:d.find(u=>u.name===o.gc_type||u.id===o.gc_definition_id);return{...o,_gcDef:x||null}})}async function po(e,t){const{error:i}=await T.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await T.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),d=new Set((n||[]).map(o=>o.formation)),s=ao(),r=s[Math.floor(Math.random()*s.length)],l=d.has(r),{data:f,error:a}=await T.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),(f||[]).map(o=>({...o,isDuplicate:l}))}function uo(e,t,i,n=null){var ie,Q;if(!e||e.length===0){const N=document.createElement("div");N.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",N.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(N),(ie=N.querySelector("#anim-close-err"))==null||ie.addEventListener("click",()=>N.remove());return}e=[...e].sort((N,D)=>{const re=N.player?xt(N.player):-1;return(D.player?xt(D.player):-1)-re});const d=document.createElement("div");d.id="booster-anim-overlay",d.innerHTML=`
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
  `,document.body.appendChild(d);let s=!1;const r=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let f=!1;const a=N=>N.touches&&N.touches[0]?N.touches[0].clientX:N.clientX;function o(N){s||(f=!0,l.style.opacity="1",x(N))}function x(N){if(!f||s)return;const D=r.getBoundingClientRect(),re=a(N)-D.left,xe=Math.max(0,Math.min(1,re/D.width));l.style.width=xe*D.width+"px",xe>=.82&&h()}function u(){s||(f=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{s||(l.style.transition="")},220))}function h(){var D;if(s)return;s=!0,f=!1,l.style.width="100%",l.style.opacity="1",(D=document.getElementById("cut-flash"))==null||D.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const N=document.getElementById("cut-hint");N&&(N.style.opacity="0"),r.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",A(0)},620)}r.addEventListener("pointerdown",o),window.addEventListener("pointermove",x),window.addEventListener("pointerup",u),r.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",x,{passive:!0}),window.addEventListener("touchend",u);let _=0,m=!1;const c=new Set;function A(N){_=N,document.getElementById("reveal-phase").style.display="flex",p(),I(N,0),R()}function p(){const N=document.getElementById("card-dots");N&&(N.innerHTML=e.map((D,re)=>`<div class="card-dot" data-i="${re}" style="width:8px;height:8px;border-radius:50%;background:${re===_?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),N.querySelectorAll(".card-dot").forEach(D=>D.addEventListener("click",()=>C(parseInt(D.dataset.i)))))}function I(N,D){var ce;const re=e[N],xe=document.getElementById("card-counter"),_e=document.getElementById("card-track");xe&&(xe.textContent=`Carte ${N+1} / ${e.length}`);const we=document.getElementById("reveal-btns");we&&(we.style.display=N===e.length-1?"flex":"none");const ve=re.card_type==="player"&&((ce=re.player)==null?void 0:ce.rarity)==="legende",Ee=!c.has(N);c.add(N);let se=0;if(re.card_type==="player"&&re.player){const H=re.player,Z=H.job||"ATT";se=Number(Z==="GK"?H.note_g:Z==="DEF"?H.note_d:Z==="MIL"?H.note_m:H.note_a)||0}const pe=H=>{_e.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${ve?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${xn(re)}</div>
          ${re.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const Z=document.getElementById("current-card-wrap");D!==0?(Z.style.transition="none",Z.style.transform=`translateX(${D>0?100:-100}%)`,requestAnimationFrame(()=>{Z.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",Z.style.transform="translateX(0)"})):Z.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),H||ve?K():ne(),p()};Ee&&se>6&&re.card_type==="player"&&re.player?q(re,()=>pe(!0)):pe(!1)}function q(N,D){var se;m=!0;const re=N.player,xe=`https://flagsapi.com/${re.country_code}/flat/64.png`,_e=(se=re.clubs)==null?void 0:se.logo_url,we=document.getElementById("walkout-overlay"),ve=document.getElementById("walkout-stage");if(!we||!ve){m=!1,D();return}we.style.display="flex";const Ee=()=>{const pe=ve.firstElementChild;pe&&(pe.classList.remove("wo-in"),pe.classList.add("wo-out"))};ve.innerHTML=`<img class="wo-in" src="${xe}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(Ee,2e3),setTimeout(()=>{var pe;ve.innerHTML=_e?`<img class="wo-in" src="${_e}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((pe=re.clubs)==null?void 0:pe.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(Ee,4450),setTimeout(()=>{we.style.display="none",ve.innerHTML="",m=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),D()},4900)}function C(N){if(m||N<0||N>=e.length||N===_)return;const D=N>_?1:-1;_=N,I(N,D)}function P(){C(_+1)}function j(){C(_-1)}function R(){const N=document.getElementById("card-viewport");if(!N||N._swipeBound)return;N._swipeBound=!0;let D=0,re=0,xe=0,_e=!1;const we=ce=>ce.touches?ce.touches[0].clientX:ce.clientX,ve=ce=>ce.touches?ce.touches[0].clientY:ce.clientY,Ee=ce=>{_e=!0,D=we(ce),re=ve(ce),xe=0},se=ce=>{if(!_e)return;xe=we(ce)-D;const H=ve(ce)-re;if(Math.abs(xe)<Math.abs(H))return;const Z=document.getElementById("current-card-wrap");Z&&(Z.style.transition="none",Z.style.transform=`translateX(${xe*.6}px) rotate(${xe*.02}deg)`)},pe=()=>{if(!_e)return;_e=!1;const ce=document.getElementById("current-card-wrap"),H=55;xe<=-H&&_<e.length-1?P():xe>=H&&_>0?j():ce&&(ce.style.transition="transform .2s ease",ce.style.transform="translateX(0)")};N.addEventListener("pointerdown",Ee),N.addEventListener("pointermove",se),N.addEventListener("pointerup",pe),N.addEventListener("pointercancel",pe),N.addEventListener("touchstart",Ee,{passive:!0}),N.addEventListener("touchmove",se,{passive:!0}),N.addEventListener("touchend",pe),N.addEventListener("click",ce=>{if(Math.abs(xe)>8)return;const H=N.getBoundingClientRect();ce.clientX-H.left>H.width/2?P():j()})}let V=null;function K(){const N=document.getElementById("fireworks-canvas");if(!N)return;N.width=window.innerWidth,N.height=window.innerHeight;const D=N.getContext("2d"),re=[];function xe(){const we=Math.random()*N.width,ve=Math.random()*N.height*.6,Ee=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],se=Ee[Math.floor(Math.random()*Ee.length)];for(let pe=0;pe<60;pe++){const ce=Math.PI*2/60*pe,H=2+Math.random()*5;re.push({x:we,y:ve,vx:Math.cos(ce)*H,vy:Math.sin(ce)*H,alpha:1,color:se,size:2+Math.random()*3})}}xe(),V=setInterval(xe,600);function _e(){if(document.getElementById("fireworks-canvas")){D.clearRect(0,0,N.width,N.height);for(let we=re.length-1;we>=0;we--){const ve=re[we];if(ve.x+=ve.vx,ve.y+=ve.vy+.08,ve.vy*=.98,ve.alpha-=.018,ve.alpha<=0){re.splice(we,1);continue}D.globalAlpha=ve.alpha,D.fillStyle=ve.color,D.beginPath(),D.arc(ve.x,ve.y,ve.size,0,Math.PI*2),D.fill()}D.globalAlpha=1,(V!==null||re.length>0)&&requestAnimationFrame(_e)}}_e()}function ne(){V!==null&&(clearInterval(V),V=null);const N=document.getElementById("fireworks-canvas");N&&N.getContext("2d").clearRect(0,0,N.width,N.height)}if(n){const N=document.getElementById("reveal-btns");N&&(N.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(Q=document.getElementById("reveal-next"))==null||Q.addEventListener("click",()=>{ne(),d.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{ne(),d.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{ne(),d.remove(),i("boosters")})}function xn(e){var t,i,n,d;if(e.card_type==="player"&&e.player)return pn(e);if(e.card_type==="game_changer"){const s=e._gcDef,r=(s==null?void 0:s.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},f={purple:"#b06ce0",light_blue:"#00d4ef"},a=l[s==null?void 0:s.color]||l.purple,o=f[s==null?void 0:s.color]||f.purple,x=(s==null?void 0:s.name)||e.gc_type||"Game Changer",u=(s==null?void 0:s.effect)||((t=yi[e.gc_type])==null?void 0:t.desc)||"",h=s!=null&&s.image_url?`/icons/${s.image_url}`:null,_=((i=yi[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${a};border-radius:14px;border:3px solid ${o};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${o}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${x.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${x}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${r?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${h?`<img src="${h}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${_}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${u.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const s=e._stadiumDef,r=(s==null?void 0:s.name)||"Stade",l=((n=s==null?void 0:s.club)==null?void 0:n.encoded_name)||(s==null?void 0:s.country_code)||"—",f=s!=null&&s.image_url?`/icons/${s.image_url}`:((d=s==null?void 0:s.club)==null?void 0:d.logo_url)||(s!=null&&s.country_code?`https://flagsapi.com/${s.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${r.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${r}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${f?`<img src="${f}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function yn(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(r=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${s[r.card_type]||r.card_type}</span>
            ${r.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${d[r.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${r.rarity}</span>`:""}
            ${r.note_min||r.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${r.note_min||""}–${r.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(r.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",r=>{r.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}bn()}function bn(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function hn(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const d=document.getElementById("mw-ad-cd");d&&(d.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function vn(e,{state:t,navigate:i,toast:n,refreshProfile:d}){var u,h;const{data:s}=await T.from("users").select("*").eq("id",t.user.id).single();s&&(t.profile=s);let r=Array.isArray((u=t.profile)==null?void 0:u.pending_boosters)?[...t.profile.pending_boosters]:[];if(!r.length){await T.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let l=null;try{const m=(await ro()).find(c=>(c.name||"").toLowerCase().includes("new player"));m&&(l=so(m))}catch(_){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',_)}const f=r.length;let a=0;e.innerHTML=`
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
  </div>`;const o=async()=>{await T.from("users").update({pending_boosters:r}).eq("id",t.user.id)};async function x(){var p;if(a>=f||!r.length){await T.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),d&&await d(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const _=r[0],{data:m}=await T.from("users").select("*").eq("id",t.user.id).single();m&&(t.profile=m);let c=[];try{if(_.type==="formation")c=await po(t.profile,0);else if(_.type==="game_changer")c=await co(t.profile,_.count||3,0);else if(l&&((p=l.rates)!=null&&p.length)){const I={...l,cost:0,cardCount:_.count||l.cardCount||5};c=await bi(t.profile,I),_.guaranteeGK&&!t.profile.first_booster_opened&&(c.some(C=>C.player&&C.player.job==="GK")||await wn(t.profile,c),await T.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else c=await lo(t.profile,_.count||5,0)}catch(I){n(I.message||"Erreur ouverture booster","error");return}r.shift(),a++,await o();const A=_.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:_.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${a}/${f})`,img:(l==null?void 0:l.img)||"/icons/booster-players.png"};uo(c,A,i,()=>{x()})}(h=document.getElementById("onboard-start"))==null||h.addEventListener("click",()=>x())}async function wn(e,t){try{const{data:i}=await T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],d=t.findIndex(r=>r.player);if(d===-1)return;const s=t[d];await T.from("cards").update({player_id:n.id}).eq("id",s.id),t[d]={...s,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Mt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Ht={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Et(e,t,i,n,d){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",d)}function He(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function hi(e,t){var s,r;const i=e.player,n=e.evolution_bonus||0,d=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&d>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&d>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&d>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&d>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((s=i.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((r=i.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Tt(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(d=>{Array.isArray(d)&&d.forEach(s=>{const r=i&&String(s.club_id)===String(i),l=n&&String(s.country_code)===String(n);(r||l)&&(s.stadiumBonus=!0)})}),e}function jt(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(d=>{if(!d)return;const s=i&&String(d.club_id)===String(i),r=n&&String(d.country_code)===String(n);(s||r)&&(d.stadiumBonus=!0)}),e}function st(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ri(){const e=Math.random()*100;return e<10?3:e<30?2:1}function vt(e,t){const i=Mt[t]||Mt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(r=>r.position)){for(const r of["GK","DEF","MIL","ATT"]){const l=e.filter(a=>a.position&&a.position.replace(/\d+$/,"")===r).sort((a,o)=>parseInt(a.position.replace(/\D+/g,""),10)-parseInt(o.position.replace(/\D+/g,""),10)).map(a=>({...a,_line:r})),f=st(l.length);l.forEach((a,o)=>{a._col=f[o]}),n[r]=l}return n}const s=[...e];for(const r of["GK","DEF","MIL","ATT"]){const l=[];for(let a=0;a<i[r];a++){let o=s.findIndex(x=>x.job===r);if(o===-1&&(o=s.findIndex(x=>x.job2===r)),o===-1&&(o=0),s[o]){const x={...s[o],_line:r};l.push(x),s.splice(o,1)}}const f=st(l.length);l.forEach((a,o)=>{a._col=f[o]}),n[r]=l}return n}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ve(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ai(e,t,i){const d=new Set,s=t.filter(o=>{const x=o.gc_type||o.id;return d.has(x)?!1:(d.add(x),!0)});let r=[];function l(o,x){const u=o._gcDef,h={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},_={purple:"#9b59b6",light_blue:"#00bcd4"},m=h[u==null?void 0:u.color]||h.purple,c=_[u==null?void 0:u.color]||_.purple;return`<div class="gc-select-card" data-id="${o.id}"
      style="width:100px;border-radius:10px;border:3px solid ${x?"#FFD700":c};background:${m};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${x?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${x?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((u==null?void 0:u.name)||o.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(u==null?void 0:u.name)||o.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${u!=null&&u.image_url?`<img src="/icons/${u.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((u==null?void 0:u.effect)||"").slice(0,50)}</span>
      </div>
      ${x?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const f=o=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(o)};function a(){var x,u,h;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const o=r.length>0;e.innerHTML=`
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
        ${s.map(_=>{const m=r.find(c=>c.gc_type===_.gc_type);return l(_,!!m)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${o?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${o?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${o?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${o?"pointer":"default"};box-shadow:${o?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(_=>{_.addEventListener("click",()=>{const m=_.dataset.id,c=s.find(p=>p.id===m);if(!c)return;const A=r.findIndex(p=>p.gc_type===c.gc_type);A>-1?r.splice(A,1):r.length<3&&r.push(c),a()})}),(x=e.querySelector("#gc-launch"))==null||x.addEventListener("click",()=>{o&&f(r)}),(u=e.querySelector("#gc-no-gc"))==null||u.addEventListener("click",()=>f([])),(h=e.querySelector("#gc-reset"))==null||h.addEventListener("click",()=>{r.length&&(r=[],a())})}a()}function _n(e){var n;const t=((n=e==null?void 0:e.state)==null?void 0:n.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function $n(e,t,i){const{state:n,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await T.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){Et(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const r=s.map(u=>u.id),{data:l}=await T.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",r).order("slot_order"),f=[...new Set((l||[]).filter(u=>{var h,_;return((h=u.card)==null?void 0:h.card_type)==="stadium"&&((_=u.card)==null?void 0:_.stadium_id)}).map(u=>u.card.stadium_id))],a={};if(f.length){const{data:u}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",f);(u||[]).forEach(h=>{a[h.id]=h}),(l||[]).forEach(h=>{var _,m;((_=h.card)==null?void 0:_.card_type)==="stadium"&&((m=h.card)!=null&&m.stadium_id)&&(h.card._stadiumDef=a[h.card.stadium_id]||null)})}let o=0;function x(){var C,P,j,R,V,K,ne;const u=s[o],h=(l||[]).filter(ie=>ie.deck_id===u.id),_=h.filter(ie=>{var Q;return ie.is_starter&&((Q=ie.card)==null?void 0:Q.player)}).map(ie=>hi(ie.card,ie.position)),m=h.find(ie=>{var Q;return((Q=ie.card)==null?void 0:Q.card_type)==="formation"}),c=u.formation||((C=m==null?void 0:m.card)==null?void 0:C.formation)||"4-4-2";let A=_.length>=11?vt(_,c):null,p=((P=u.stadium_card)==null?void 0:P.stadium_def)||null;p&&A&&(A=Tt(A,p));const I=_.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${_n(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===0?"0.1":"0.3"});color:${o===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${u.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${c} · ${_.length}/11 ${u.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===s.length-1?"0.1":"0.3"});color:${o===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Bandeau stade si présent -->
      ${p?`
      <div style="display:flex;align-items:center;gap:8px;padding:6px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),rgba(196,90,0,0.2));border-top:1px solid rgba(232,119,34,0.4);flex-shrink:0">
        <span style="font-size:16px">🏟️</span>
        <div style="flex:1;font-size:12px;font-weight:700;color:rgba(255,255,255,0.9)">${p.name}</div>
        <div style="font-size:11px;font-weight:900;color:#FFD700">+10 aux joueurs ${((j=p.club)==null?void 0:j.encoded_name)||p.country_code||""}</div>
      </div>`:""}

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${A?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${ct(A,c,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${_.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((ie,Q)=>`<div style="width:7px;height:7px;border-radius:50%;background:${Q===o?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${I?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${I?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${I?"pointer":"default"}">
          ${I?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const Q=e.querySelector(".deck-preview-wrap svg");Q&&(Q.removeAttribute("width"),Q.removeAttribute("height"),Q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Q.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(R=document.getElementById("prev-deck"))==null||R.addEventListener("click",()=>{o>0&&(o--,x())}),(V=document.getElementById("next-deck"))==null||V.addEventListener("click",()=>{o<s.length-1&&(o++,x())}),(K=document.getElementById("validate-deck"))==null||K.addEventListener("click",()=>{if(!I)return;const ie=t.state.params||{};t.navigate("match",{...ie,matchMode:ie.matchMode||i,deckId:u.id})}),(ne=document.getElementById("cancel-deck-select"))==null||ne.addEventListener("click",()=>{Ve(e),d("home")});const q=document.getElementById("deck-swipe-zone");if(q){let ie=0,Q=0;q.addEventListener("touchstart",N=>{ie=N.touches[0].clientX,Q=N.touches[0].clientY},{passive:!0}),q.addEventListener("touchend",N=>{const D=N.changedTouches[0].clientX-ie,re=N.changedTouches[0].clientY-Q;Math.abs(D)<40||Math.abs(D)<Math.abs(re)||(D<0&&o<s.length-1?(o++,x()):D>0&&o>0&&(o--,x()))},{passive:!0})}}x()}function kn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Xe(e,t=44,i=58,n=null){return bt(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function it(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((s,r)=>{if(d+=Xe(s,40,52),r<n.length-1){const l=nt(s,n[r+1]);d+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function En(e){return!e||e.length<2?null:`https://flagsapi.com/${e.slice(0,2).toUpperCase()}/flat/64.png`}function Tn(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function lt(e,t,i,n,d=310,s=310,r=[]){var I;const l=Ut[t]||{},f=Vi(t)||$i[t]||[],a={},o=["ATT","MIL","DEF","GK"];for(const q of o)(e[q]||[]).forEach((P,j)=>{a[`${q}${j+1}`]=P});function x(q){const C=l[q];return C?{x:C.x*d,y:C.y*s}:null}let u="";for(const[q,C]of f){const P=x(q),j=x(C);if(!P||!j)continue;const R=a[q],V=a[C],K=nt(R,V);K==="#00ff88"||K==="#FFD700"?(u+=`<line x1="${P.x.toFixed(1)}" y1="${P.y.toFixed(1)}" x2="${j.x.toFixed(1)}" y2="${j.y.toFixed(1)}"
        stroke="${K}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,u+=`<line x1="${P.x.toFixed(1)}" y1="${P.y.toFixed(1)}" x2="${j.x.toFixed(1)}" y2="${j.y.toFixed(1)}"
        stroke="${K}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):u+=`<line x1="${P.x.toFixed(1)}" y1="${P.y.toFixed(1)}" x2="${j.x.toFixed(1)}" y2="${j.y.toFixed(1)}"
        stroke="${K}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const h=48,_=64,m=13,c=16,A={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[q,C]of Object.entries(a)){const P=x(q);if(!P||!C)continue;const j=q.replace(/[0-9]/g,""),R=Ht[j]||"#555",V=r.includes(C.cardId),K=i==="attack"&&(["MIL","ATT"].includes(j)||V)&&!C.used||i==="defense"&&["GK","DEF","MIL"].includes(j)&&!C.used,ne=n.includes(C.cardId);let ie;i==="attack"?ie=V?Math.max(1,Number(C.note_a)||0):j==="MIL"?Number(C.note_m)||0:Number(C.note_a)||0:i==="defense"?ie=j==="GK"?Number(C.note_g)||0:j==="MIL"?Number(C.note_m)||0:Number(C.note_d)||0:ie=Number(j==="GK"?C.note_g:j==="DEF"?C.note_d:j==="MIL"?C.note_m:C.note_a)||0,ie=ie+(C.boost||0),C.stadiumBonus&&(i==="attack"&&(j==="ATT"||j==="MIL")||i==="defense"&&(j==="GK"||j==="DEF"||j==="MIL")?ie+=10:i||(ie+=10));const Q=(P.x-h/2).toFixed(1),N=(P.y-_/2).toFixed(1),D=A[C==null?void 0:C.rarity]||A.normal;if(C.used){const se=typeof import.meta<"u"&&"/"||"/",ce=`${typeof window<"u"&&((I=window.location)==null?void 0:I.origin)||""}${se}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");u+=`<rect x="${Q}" y="${N}" width="${h}" height="${_}" rx="5" fill="#161616"/>`,u+=`<image href="${ce}" xlink:href="${ce}" x="${Q}" y="${N}" width="${h}" height="${_}" preserveAspectRatio="xMidYMid slice"/>`,u+=`<rect x="${Q}" y="${N}" width="${h}" height="${_}" rx="5" fill="none" stroke="${D}" stroke-width="2" opacity="0.7"/>`,u+=`<rect x="${Q}" y="${N}" width="${h}" height="${_}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${C.cardId}" data-role="${j}" style="cursor:pointer"/>`;continue}const re=ne?.45:1,xe=ne?"#FFD700":D,_e=ne?3:(C==null?void 0:C.rarity)==="legende"||(C==null?void 0:C.rarity)==="légende"||(C==null?void 0:C.rarity)==="pepite"||(C==null?void 0:C.rarity)==="pépite"?2.5:2,we=_-m-c;u+=`<defs><clipPath id="cp-${q}"><rect x="${Q}" y="${(P.y-_/2+m).toFixed(1)}" width="${h}" height="${we}"/></clipPath></defs>`,u+=`<rect x="${Q}" y="${N}" width="${h}" height="${_}" rx="5" fill="${R}" opacity="${re}"/>`;const ve=He(C);ve&&(u+=`<image href="${ve}" xlink:href="${ve}" x="${Q}" y="${(P.y-_/2+m).toFixed(1)}" width="${h}" height="${we}" clip-path="url(#cp-${q})" preserveAspectRatio="xMidYMin slice"/>`),u+=`<rect x="${Q}" y="${N}" width="${h}" height="${m}" rx="4" fill="rgba(255,255,255,0.92)"/>`,u+=`<text x="${P.x.toFixed(1)}" y="${(P.y-_/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(C.name||"").slice(0,9)}</text>`;const Ee=(P.y+_/2-c).toFixed(1);u+=`<rect x="${Q}" y="${Ee}" width="${h}" height="${c}" fill="rgba(255,255,255,0.92)"/>`;{const se=En(C.country_code);se?u+=`<image href="${se}" xlink:href="${se}" x="${(P.x-20).toFixed(1)}" y="${(P.y+_/2-c+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:u+=`<text x="${(P.x-13).toFixed(1)}" y="${(P.y+_/2-c/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${Tn(C.country_code)}</text>`;const pe=C.stadiumBonus?"#E87722":"#111";u+=`<text x="${P.x.toFixed(1)}" y="${(P.y+_/2-c/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${pe}" font-family="Arial Black">${ie}</text>`;const ce=kn(C);ce?u+=`<image href="${ce}" xlink:href="${ce}" x="${(P.x+h/2-14).toFixed(1)}" y="${(P.y+_/2-c+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:C.clubName&&(u+=`<text x="${(P.x+14).toFixed(1)}" y="${(P.y+_/2-c/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(C.clubName||"").slice(0,3).toUpperCase()}</text>`),C.stadiumBonus&&(u+=`<rect x="${(P.x-h/2).toFixed(1)}" y="${(P.y-_/2).toFixed(1)}" width="${h}" height="${_}" rx="5" fill="none" stroke="#E87722" stroke-width="2" opacity="0.8"/>`)}u+=`<rect x="${Q}" y="${N}" width="${h}" height="${_}" rx="5" fill="${ne?"rgba(255,255,255,0.12)":"none"}" stroke="${xe}" stroke-width="${_e}" opacity="${re}"/>`,K&&(u+=`<rect x="${Q}" y="${N}" width="${h}" height="${_}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${ne?"selected":""}" data-card-id="${C.cardId}" data-role="${j}" style="cursor:pointer"/>`)}const p=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-p} ${-p} ${d+p*2} ${s+p*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${u}
  </svg>`}function ct(e,t,i,n,d=300,s=300,r=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${lt(e,t,i,n,d,s,r)}
  </div>`}function at(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function si(e,t,i,n){var P;const{state:d,navigate:s,toast:r}=t;et(e);const l=d.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return $n(e,t,i);const f=l.deckId;let a,o,x,u;try{const j=await Promise.all([T.from("decks").select("formation,name,stadium_card_id").eq("id",f).single(),T.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",f).order("slot_order")]);a=j[0].data,x=j[0].error,o=j[1].data,u=j[1].error}catch(j){console.error("[Match] Exception chargement deck:",j),Et(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(x||u){console.error("[Match] Erreur Supabase:",x||u),Et(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const h=(o||[]).filter(j=>{var R;return j.is_starter&&((R=j.card)==null?void 0:R.player)}).map(j=>hi(j.card,j.position)),_=(o||[]).filter(j=>{var R;return!j.is_starter&&((R=j.card)==null?void 0:R.player)}).map(j=>hi(j.card,j.position));if(h.length<11){Et(e,"⚠️",`Deck incomplet (${h.length}/11).`,"Compléter",()=>s("decks"));return}const m=(o||[]).find(j=>{var R;return((R=j.card)==null?void 0:R.card_type)==="formation"}),c=(a==null?void 0:a.formation)||((P=m==null?void 0:m.card)==null?void 0:P.formation)||"4-4-2",{data:A,error:p}=await T.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",d.profile.id).eq("card_type","game_changer"),{data:I}=await T.from("gc_definitions").select("*").eq("is_active",!0),q=(A||[]).map(j=>({...j,_gcDef:(I==null?void 0:I.find(R=>R.name===j.gc_type||R.id===j.gc_definition_id))||null}));let C=null;if(a!=null&&a.stadium_card_id){const{data:j}=await T.from("cards").select("stadium_id").eq("id",a.stadium_card_id).single();if(j!=null&&j.stadium_id){const{data:R}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",j.stadium_id).single();C=R||null}}n({deckId:f,formation:c,starters:h,subsRaw:_,gcCardsEnriched:q,gcDefs:I||[],stadiumDef:C})}async function zn(e,t){const{state:i}=t,d=(i.params||{}).matchMode||"vs_ai_easy",s=d.replace("vs_ai_",""),r=d;await si(e,t,d,async({deckId:l,formation:f,starters:a,subsRaw:o,gcCardsEnriched:x,gcDefs:u,stadiumDef:h})=>{try{let _=vt(a,f);h&&(_=Tt(_,h),jt(o,h));const m=await Sn(f,s),c=m.lines||m,A=async p=>{try{const{data:I,error:q}=await T.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:l,status:"in_progress"}).select().single();if(q){console.error("[MatchIA] Erreur création match:",q),Et(e,"⚠️","Impossible de créer le match ("+q.message+").","Retour",()=>t.navigate("home"));return}const C=m.stadiumDef||null;C&&c&&(Tt(c,C),jt(m.subs||[],C));const P={gcDefs:u||[],matchId:I==null?void 0:I.id,mode:r,difficulty:s,formation:f,homeTeam:_,aiTeam:c,homeSubs:o,subsUsed:0,maxSubs:Math.min(o.length,3),aiSubs:m.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((m.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:m.gcCards||[],aiUsedGc:[],aiStadiumDef:C,homeScore:0,aiScore:0,gcCards:p,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Ln(e,P,t)}catch(I){console.error("[MatchIA] Exception launchMatch:",I),Et(e,"⚠️","Erreur au lancement du match : "+I.message,"Retour",()=>t.navigate("home"))}};if(!x.length){A([]);return}ai(e,x,A)}catch(_){console.error("[MatchIA] Exception setup:",_),Et(e,"⚠️","Erreur de préparation du match : "+_.message,"Retour",()=>t.navigate("home"))}})}async function Sn(e,t){var c;const{data:i}=await T.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:An(e),subs:[],gcCards:[],stadiumDef:null};const n=Mt[e]||Mt["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},s=new Set;function r(A,p,I){var q,C;return s.add(A.id),{cardId:"ai-"+A.id+"-"+I,id:A.id,firstname:A.firstname,name:A.surname_encoded,country_code:A.country_code,club_id:A.club_id,job:A.job,job2:A.job2,note_g:Number(A.note_g)||0,note_d:Number(A.note_d)||0,note_m:Number(A.note_m)||0,note_a:Number(A.note_a)||0,rarity:A.rarity,skin:A.skin,hair:A.hair,hair_length:A.hair_length,clubName:((q=A.clubs)==null?void 0:q.encoded_name)||null,clubLogo:((C=A.clubs)==null?void 0:C.logo_url)||null,boost:0,used:!1,_line:p}}for(const A of["GK","DEF","MIL","ATT"]){const p=i.filter(j=>j.job===A&&!s.has(j.id)),I=i.filter(j=>j.job!==A&&!s.has(j.id)),q=[...p,...I],C=[];for(let j=0;j<n[A];j++){const R=q[j];R&&C.push(r(R,A,j))}const P=st(C.length);C.forEach((j,R)=>{j._col=P[R]}),d[A]=C}const f=i.filter(A=>!s.has(A.id)).slice(0,5).map((A,p)=>r(A,A.job,100+p)),x=Object.keys(Oe).sort(()=>Math.random()-.5).slice(0,3).map((A,p)=>{var I,q;return{id:"ai-gc-"+p,gc_type:A,name:((I=Oe[A])==null?void 0:I.name)||A,icon:((q=Oe[A])==null?void 0:q.icon)||"⚡"}}),u=Object.values(d).flat(),h={};u.forEach(A=>{A.club_id&&(h[A.club_id]=(h[A.club_id]||0)+1)});const _=(c=Object.entries(h).sort((A,p)=>p[1]-A[1])[0])==null?void 0:c[0];let m=null;if(_){const{data:A}=await T.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",_).single();A&&(m={club_id:A.id,country_code:null,name:A.encoded_name+" Stadium",club:{encoded_name:A.encoded_name,logo_url:A.logo_url}})}return{lines:d,subs:f,gcCards:x,stadiumDef:m}}function An(e){const t=Mt[e]||Mt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const s of["GK","DEF","MIL","ATT"]){const r=[];for(let f=0;f<t[s];f++){const a=3+Math.floor(Math.random()*5);r.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:n[d%n.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?a:2,note_d:s==="DEF"?a:2,note_m:s==="MIL"?a:2,note_a:s==="ATT"?a:2,rarity:"normal",boost:0,used:!1,_line:s}),d++}const l=st(r.length);r.forEach((f,a)=>{f._col=l[a]}),i[s]=r}return i}function Ln(e,t,i){var n;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    ${t.aiStadiumDef?`<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${t.aiStadiumDef.name} · +10 aux joueurs ${((n=t.aiStadiumDef.club)==null?void 0:n.encoded_name)||""}</div>`:""}
    <div style="width:min(90vw,420px)">${lt(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>In(e,t,i),5e3)}function In(e,t,i){const n=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[],s=t.stadiumDef||null,r=t.aiStadiumDef||null;function l(p,I){const q=Se(p,"MIL"),C=p.evolution_bonus||p._evolution_bonus||0,P=p.job==="MIL"||p.job2==="MIL"?C:0,j=p.stadiumBonus||I&&(I.club_id&&String(p.club_id)===String(I.club_id)||I.country_code&&p.country_code===I.country_code)?10:0;return q+P+j}function f(p,I){return p.reduce((q,C)=>q+l(C,I),0)}function a(p){let I=0;for(let q=0;q<p.length-1;q++){const C=nt(p[q],p[q+1]);C==="#00ff88"?I+=2:C==="#FFD700"&&(I+=1)}return I}const o=f(n,s)+a(n),x=f(d,r)+a(d),u=o>=x;function h(p,I,q,C,P){return`<div id="duel-row-${C}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${I}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((j,R)=>{const V=R<p.length-1?nt(j,p[R+1]):null,K=!V||V==="#ff3333"||V==="#cc2222",ne=V==="#00ff88"?"+2":V==="#FFD700"?"+1":"";l(j,P),j.stadiumBonus||P&&(P.club_id&&String(j.club_id)===String(P.club_id)||P.country_code&&(j.country_code,P.country_code));const ie=j.evolution_bonus||j._evolution_bonus||0;return`
          <div class="duel-card duel-card-${C}" data-idx="${R}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Xe({...j,_evolution_bonus:ie},58,78,P)}
          </div>
          ${R<p.length-1?`<div class="duel-link duel-link-${C}" data-idx="${R}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${K?"rgba(255,255,255,0.12)":V};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${K?"none":`0 0 8px ${V}`}">
            ${ne?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${V}">${ne}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${C}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${f(p,P)} + ${a(p)} liens = <b style="color:#fff">${f(p,P)+a(p)}</b>
      </div>
    </div>`}e.innerHTML=`
  <div class="match-screen" style="position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;overflow:hidden;gap:14px;padding:16px;background:#0a3d1e;overflow-y:auto">
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

    ${h(n,t.clubName,"#D4A017","home",s)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${h(d,"IA","#bb2020","ai",r)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const _=()=>{const p=(I,q)=>e.querySelectorAll(I).forEach((C,P)=>{setTimeout(()=>{C.style.opacity="1",C.style.transform="translateY(0) scale(1)"},q+P*90)});p(".duel-card-home",150),p(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((I,q)=>{setTimeout(()=>{I.style.opacity="1"},q*70)}),900),setTimeout(()=>{const I=e.querySelector("#vs-label");I&&(I.style.opacity="1",I.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(q=>q.style.opacity="1")},1250),setTimeout(()=>{m("score-home",o,800),m("score-ai",x,800)},1500)};function m(p,I,q){const C=document.getElementById(p);if(!C)return;const P=performance.now(),j=R=>{const V=Math.min(1,(R-P)/q);C.textContent=Math.round(I*(1-Math.pow(1-V,3))),V<1?requestAnimationFrame(j):C.textContent=I};requestAnimationFrame(j)}requestAnimationFrame(_),t.attacker=u?"home":"ai";const c=u?ri():null;u&&(t.boostCard={value:c}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(p=>({name:p.name,note:Se(p,"MIL"),portrait:He(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),aiPlayers:d.map(p=>({name:p.name,note:Se(p,"MIL"),portrait:He(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),homeTotal:o,aiTotal:x,text:`Duel milieu : ${t.clubName} ${o} – ${x} IA → ${u?t.clubName+" attaque":"IA attaque"}`});const A=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Je(e,t,i),t.attacker==="ai"&&setTimeout(()=>ti(e,t,i),800)};setTimeout(()=>{const p=document.getElementById("score-home"),I=document.getElementById("score-ai"),q=document.getElementById(u?"duel-row-home":"duel-row-ai"),C=document.getElementById(u?"duel-row-ai":"duel-row-home"),P=u?p:I,j=u?I:p;P&&(P.style.fontSize="80px",P.style.color=u?"#FFD700":"#ff6b6b",P.style.animation="duelPulse .5s ease"+(u?", duelGlow 1.5s ease infinite .5s":"")),j&&(j.style.opacity="0.25"),setTimeout(()=>{q&&(q.style.transformOrigin="center",q.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",q.style.zIndex="5"),setTimeout(()=>{var V;const R=document.getElementById("duel-shock");if(R){const K=(V=C||q)==null?void 0:V.getBoundingClientRect(),ne=e.querySelector(".match-screen").getBoundingClientRect();K&&(R.style.top=K.top-ne.top+K.height/2+"px"),R.style.animation="shockwave .5s ease-out forwards"}C&&(C.style.transformOrigin="center",C.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var V;const R=document.getElementById("duel-finale");R&&(R.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${u?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${u?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${c}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,R.style.transition="opacity .45s ease",R.style.opacity="1",R.style.pointerEvents="auto",(V=document.getElementById("start-match-btn"))==null||V.addEventListener("click",A))},600)},700)},2800)}function Mn(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(i=>at(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(i=>at(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${at(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${at(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Je(e,t,i){var P,j,R,V,K,ne,ie,Q,N;const n=t.selected.map(D=>D.cardId),d=t.usedSubIds||[],s=t.homeSubs.filter(D=>!d.includes(D.cardId)),l=Object.values(t.homeTeam).flat().filter(D=>D.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs,f=!["GK","DEF","MIL","ATT"].some(D=>(t.aiTeam[D]||[]).some(re=>!re.used)),a=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(D=>!D.used),o=t.phase==="attack"&&f&&a.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(D=>!D.used).map(D=>D.cardId):[];t.log[t.log.length-1];const x=t.phase==="ai-attack"||t.phase==="ai-defense",u=t.phase==="attack",h=t.phase==="defense",_=t.phase==="finished",c=(t.homeSubs||[]).filter(D=>!(t.usedSubIds||[]).includes(D.cardId)).length>0&&t.subsUsed<t.maxSubs,A=u&&a.length===0&&!c,p=t.gcCards.filter(D=>!t.usedGc.includes(D.id)),I=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const re=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${it((re.players||[]).map(xe=>({...xe,used:!1})),"#ff6b6b",re.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const re=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${it((re.players||[]).map(xe=>({...xe,used:!1})),"#00ff88",re.total)}
          </div>`}const D=t.log[t.log.length-1];return D?'<div style="padding:2px 4px">'+Mn(D)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const D=window.innerWidth>=700,re=(H,Z,ge)=>{var B,$;const de=(t.gcDefs||[]).find(g=>g.name===H.gc_type),me={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[de==null?void 0:de.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",oe={purple:"#b06ce0",light_blue:"#00d4ef"}[de==null?void 0:de.color]||"#b06ce0",ue=(de==null?void 0:de.name)||H.gc_type,Le=(de==null?void 0:de.effect)||((B=Oe[H.gc_type])==null?void 0:B.desc)||"",Ie=de!=null&&de.image_url?`/icons/${de.image_url}`:null,Ce=(($=Oe[H.gc_type])==null?void 0:$.icon)||"⚡",Te=Math.round(ge*.22),qe=Math.round(ge*.22),Pe=ge-Te-qe,ze=ue.length>12?7:9;return`<div class="gc-mini" data-gc-id="${H.id}" data-gc-type="${H.gc_type}"
          style="box-sizing:border-box;width:${Z}px;height:${ge}px;border-radius:10px;border:2px solid ${oe};background:${me};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${Te}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${ze}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Z-6}px">${ue}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Pe}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Ie?`<img src="${Ie}" style="max-width:${Z-10}px;max-height:${Pe-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Pe*.55)}px">${Ce}</span>`}
          </div>
          <div style="height:${qe}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Le.slice(0,38)}</span>
          </div>
        </div>`},xe=(H,Z)=>{var ge;return`<div id="boost-card"
          style="box-sizing:border-box;width:${H}px;height:${Z}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Z*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(Z*.2)}px">⚡</div>
            <div style="font-size:${Math.round(Z*.09)}px;color:#000;font-weight:900">+${(ge=t.boostCard)==null?void 0:ge.value}</div>
          </div>`},_e=(H,Z)=>Z?xe(130,175):re(H,130,175),we=(H,Z)=>Z?xe(68,95):re(H,68,95),ve=D?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ee=_?`<button id="btn-results" style="${ve};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:x?`<div style="${ve};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:A?`<button id="btn-pass" style="${ve};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:u?`<button id="btn-action" style="${ve};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:h?`<button id="btn-action" style="${ve};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${ve};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,se=u||h?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",pe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${D?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(H=>`<div class="sub-btn-col" data-sub-id="${H.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(H,76,100)}</div>`).join("")}
      </div>`,ce=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ct(t.homeTeam,t.formation,t.phase,n,300,300,o)}
        </div>
      </div>`;return D?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${pe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${ce}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ee}${se}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${p.map(H=>_e(H,!1)).join("")}
            ${I?_e(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ct(t.homeTeam,t.formation,t.phase,n,300,300,o)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${p.map(H=>we(H,!1)).join("")}
            ${I?we(null,!0):""}
            <div id="sub-btn-main" style="cursor:${l?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${l?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${l?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${l?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${s.length}</div>
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
          <div>${Ee}${se}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(D=>{var re,xe,_e;if(D.type==="duel"){const we=D.isGoal,ve=D.homeScored?"#FFD700":we?"#ff6b6b":"rgba(255,255,255,0.3)",Ee=D.homeScored?"⚽ BUT !":we?"⚽ BUT IA !":(re=D.homePlayers)!=null&&re.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${we?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${ve};margin-bottom:4px">
                <div style="font-size:9px;color:${ve};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${Ee}</div>
                ${(xe=D.homePlayers)!=null&&xe.length?`<div style="margin-bottom:3px">${it(D.homePlayers,"rgba(255,255,255,0.7)",D.homeTotal)}</div>`:""}
                ${(_e=D.aiPlayers)!=null&&_e.length?`<div style="opacity:0.7">${it(D.aiPlayers,"#ff6b6b",D.aiTotal)}</div>`:""}
              </div>`}return D.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${D.outPlayer?Xe({...D.outPlayer,used:!0,_line:D.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${D.inPlayer?Xe({...D.inPlayer,_line:D.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:D.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${D.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${D.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function q(){const D=e.querySelector(".match-screen");if(!D)return;const re=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);D.style.bottom="auto",D.style.height=re+"px",D.style.minHeight=re+"px",D.style.maxHeight=re+"px",D.style.overflow="hidden";const xe=e.querySelector("#mobile-action-bar"),_e=e.querySelector("#mobile-play-area");xe&&_e&&(_e.style.paddingBottom=xe.offsetHeight+"px")}if(q(),setTimeout(q,120),setTimeout(q,400),setTimeout(q,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",q),window.visualViewport.addEventListener("scroll",q)),window.addEventListener("resize",q)),function(){const re=e.querySelector(".terrain-wrapper svg");re&&(re.removeAttribute("width"),re.removeAttribute("height"),re.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",re.setAttribute("viewBox","-26 -26 352 352"),re.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const D=e.querySelector(".terrain-wrapper svg");D&&(D.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let D=!1,re=30;const xe=()=>document.getElementById("match-timer"),_e=()=>{const we=xe();if(!we)return;const ve=String(Math.floor(re/60)).padStart(2,"0"),Ee=String(re%60).padStart(2,"0");we.textContent=` ${ve}:${Ee}`,we.style.color=D?"#ff2222":"#ff9500",we.style.fontWeight="900"};_e(),t._timerInt=setInterval(()=>{if(re--,re<0)if(!D)D=!0,re=15,_e();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const we=document.createElement("div");we.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",we.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(we),setTimeout(()=>{we.remove(),Pt(e,t,i)},2500)}else _e()},1e3)}(P=document.getElementById("match-quit"))==null||P.addEventListener("click",()=>{Ve(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Pt(e,t,i))}),(j=document.getElementById("view-ai"))==null||j.addEventListener("click",()=>Hn(t,i)),(R=document.getElementById("toggle-history"))==null||R.addEventListener("click",()=>{var D;(D=document.getElementById("match-history-panel"))==null||D.classList.add("open")}),(V=document.getElementById("close-history"))==null||V.addEventListener("click",()=>{var D;(D=document.getElementById("match-history-panel"))==null||D.classList.remove("open")}),(K=document.getElementById("btn-action"))==null||K.addEventListener("click",()=>{t.selected.length!==0&&(u?Cn(e,t,i):h&&qn(e,t,i))}),(ne=document.getElementById("btn-results"))==null||ne.addEventListener("click",()=>Pt(e,t,i)),(ie=document.getElementById("btn-pass"))==null||ie.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Je(e,t,i),setTimeout(()=>ti(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(D=>{D.addEventListener("click",()=>jn(D,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(D=>{D.addEventListener("click",()=>fi(e,t,i,null,D.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(D=>{D.addEventListener("click",()=>Gn(D.dataset.gcId,D.dataset.gcType,e,t,i))}),(Q=document.getElementById("boost-card"))==null||Q.addEventListener("click",()=>On(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(D=>{D.addEventListener("click",()=>fi(e,t,i,D.dataset.subId))}),(N=document.getElementById("sub-btn-main"))==null||N.addEventListener("click",()=>fi(e,t,i))}function jn(e,t,i,n){const d=e.dataset.cardId,s=e.dataset.role,r=t.selected.findIndex(l=>l.cardId===d);if(r!==-1)t.selected.splice(r,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(f=>f.cardId===d);l&&t.selected.push({...l,_role:s,_line:s})}Je(i,t,n)}function Si(e,t,i){e.matchId&&T.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Cn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Si(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(r=>(t.aiTeam[r]||[]).some(l=>!l.used)),d=t.selected.map(r=>{const l=(t.homeTeam[r._role]||[]).find(a=>a.cardId===r.cardId)||r,f=n&&["GK","DEF"].includes(r._role);return{...l,_line:r._role,...f?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=Kt(d,t.modifiers.home);t.pendingAttack={...s,players:[...d],side:"home"},t.selected.forEach(r=>{const l=(t.homeTeam[r._role]||[]).find(f=>f.cardId===r.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(r=>r.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Je(e,t,i),setTimeout(()=>Dn(e,t,i),1200)}function qn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Si(t,i,i.state.profile.id);const n=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(a=>a.cardId===l.cardId)||l,_line:l._role})),d=Vt(n,t.modifiers.home);t.selected.forEach(l=>{const f=(t.homeTeam[l._role]||[]).find(a=>a.cardId===l.cardId);f&&(f.used=!0)});const s=Yt(t.pendingAttack.total,d.total,t.modifiers.home),r={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:He(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const f=(t.homeTeam[l._role]||[]).find(a=>a.cardId===l.cardId)||l;return{name:f.name,note:(f._line==="GK"?Number(f.note_g)||0:f._line==="MIL"?Number(f.note_m)||0:Number(f.note_d)||0)+(f.boost||0),portrait:He(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)r.text="🛡️ Bouclier ! But annulé.",t.log.push(r);else if(s.goal){t.aiScore++,r.isGoal=!0,r.homeScored=!1,r.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(r),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Je(e,t,i),ii(r.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Lt(e,t,i,"home-attack")});return}else r.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(r);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Lt(e,t,i,"home-attack")}function Bn(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(f=>f.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(f=>!e.aiUsedSubIds.includes(f.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],d=i.find(f=>f.job===n.job)||i[0],s={...d,used:!1,_line:n._line,_col:n._col},r=e.aiTeam[n._line],l=r.findIndex(f=>f.cardId===n.cardId);l!==-1&&(r[l]=s),e.aiUsedSubIds.push(d.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${d.firstname} ${d.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function Fn(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(d=>!e.aiUsedGc.includes(d.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Oe[i.gc_type],i.gc_type){case"Boost+2":{const d=Object.values(e.aiTeam).flat().filter(s=>!s.used);if(d.length){const s=d[Math.floor(Math.random()*d.length)];s.boost=(s.boost||0)+2}break}case"Boost+3":{const d=Object.values(e.aiTeam).flat().filter(s=>!s.used);if(d.length){const s=d[Math.floor(Math.random()*d.length)];s.boost=(s.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function ti(e,t,i){Si(t,i,null),Bn(t),Fn(t);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=eo(n,"attack",t.difficulty);if(!d.length){Zt(e,t,i);return}const s=Kt(d,t.modifiers.ai);t.pendingAttack={...s,players:d,side:"ai"},d.forEach(a=>{a.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${d.map(a=>a.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const r=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(a=>!a.used),f=(t.homeSubs||[]).filter(a=>!(t.usedSubIds||[]).includes(a.cardId)).length>0&&t.subsUsed<t.maxSubs;if(r.length===0&&!f){t.aiScore++;const a={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(o=>({name:o.name,note:o._line==="MIL"?o.note_m:o.note_a,portrait:He(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(a),t.pendingAttack=null,Je(e,t,i),ii(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Lt(e,t,i,"home-attack")});return}t.phase="defense",Je(e,t,i)}function Dn(e,t,i){var a,o;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=eo(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(x=>(t.aiTeam[x]||[]).filter(u=>!u.used)).length){t.homeScore++;const u={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((a=t.pendingAttack)==null?void 0:a.players)||[]).map(h=>({name:h.name,note:Se(h,h._line||h.job),portrait:He(h),job:h.job,country_code:h.country_code,rarity:h.rarity,clubName:h.clubName,clubLogo:h.clubLogo})),homeTotal:((o=t.pendingAttack)==null?void 0:o.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(u),t.modifiers.ai={},t.pendingAttack=null,Je(e,t,i),ii(u.homePlayers,t.homeScore,t.aiScore,!0,()=>{Lt(e,t,i,"ai-attack")});return}const r=d.length>0?Vt(d,t.modifiers.ai).total:0;d.forEach(x=>{x.used=!0});const l=Yt(t.pendingAttack.total,r,t.modifiers.ai),f={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(x=>({name:x.name,note:x._line==="MIL"?x.note_m:x.note_a,portrait:He(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),aiPlayers:d.map(x=>({name:x.name,note:x._line==="GK"?x.note_g:x._line==="MIL"?x.note_m:x.note_d,portrait:He(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:r,isGoal:!1,homeScored:!1,text:""};if(l.shielded)f.text="🛡️ Bouclier IA !",t.log.push(f);else if(l.goal){t.homeScore++,f.isGoal=!0,f.homeScored=!0,f.text=`⚽ BUT ! (${t.pendingAttack.total} > ${r})`,t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,Je(e,t,i),ii(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{Lt(e,t,i,"ai-attack")});return}else f.text=`🧤 IA défend (${r} ≥ ${t.pendingAttack.total})`,t.log.push(f);t.modifiers.ai={},t.pendingAttack=null,Lt(e,t,i,"ai-attack")}function Lt(e,t,i,n){if(t.round++,fo(t)){Pt(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Zt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Zt(e,t,i);return}setTimeout(()=>ti(e,t,i),100);return}t.phase="attack",Je(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Zt(e,t,i);return}t.phase="ai-attack",Je(e,t,i),setTimeout(()=>ti(e,t,i),800)}}function fo(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(d=>!d.used));return!t&&!i}function Zt(e,t,i){fo(t)?Pt(e,t,i):(t.phase="attack",Je(e,t,i))}function Pn(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=He(e),s=He(t),r=Ht[e.job]||"#555",l=Ht[t.job]||"#555",f=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,a=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${r};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${d?`<img src="${d}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${f}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${l};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${s?`<img src="${s}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${a}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(n);let o=!1;const x=()=>{o||(o=!0,n.remove(),i())};n.addEventListener("click",x),setTimeout(x,2e3)}function qt(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function fi(e,t,i,n=null,d=null){var h,_;if(t.phase!=="attack"){qt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){qt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const s=Object.entries(t.homeTeam).flatMap(([m,c])=>(c||[]).filter(A=>A.used).map(A=>({...A,_line:A._line||m}))),r=t.homeSubs.filter(m=>!t.usedSubIds.includes(m.cardId));if(!s.length){qt("Aucun joueur utilisé à remplacer");return}if(!r.length){qt("Aucun remplaçant disponible");return}let l=Math.max(0,s.findIndex(m=>m.cardId===d));const f=((h=s[l])==null?void 0:h._line)||((_=s[l])==null?void 0:_.job);let a=n?Math.max(0,r.findIndex(m=>m.cardId===n)):Math.max(0,r.findIndex(m=>m.job===f)),o=!1;const x=document.createElement("div");x.id="sub-overlay",x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function u(){var C,P,j,R,V,K;const m=s[l],c=r[a],A=Math.min(130,Math.round((window.innerWidth-90)/2)),p=Math.round(A*1.35),I=ne=>`background:rgba(255,255,255,0.12);border:none;color:${ne?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ne?"default":"pointer"};flex-shrink:0`;x.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${I(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${c?Xe({...c,used:!1,boost:0},A,p):"<div>—</div>"}</div>
        <button id="in-down" style="${I(a>=r.length-1)}" ${a>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${r.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${I(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${m?Xe({...m,used:!1,boost:0},A,p):"<div>—</div>"}</div>
        <button id="out-down" style="${I(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(C=x.querySelector("#sub-close"))==null||C.addEventListener("click",()=>x.remove()),(P=x.querySelector("#out-up"))==null||P.addEventListener("click",()=>{l>0&&(l--,u())}),(j=x.querySelector("#out-down"))==null||j.addEventListener("click",()=>{l<s.length-1&&(l++,u())}),(R=x.querySelector("#in-up"))==null||R.addEventListener("click",()=>{a>0&&(a--,u())}),(V=x.querySelector("#in-down"))==null||V.addEventListener("click",()=>{a<r.length-1&&(a++,u())});const q=(ne,ie,Q,N)=>{const D=x.querySelector("#"+ne);if(!D)return;let re=0;D.addEventListener("touchstart",xe=>{re=xe.touches[0].clientY},{passive:!0}),D.addEventListener("touchend",xe=>{const _e=xe.changedTouches[0].clientY-re;if(Math.abs(_e)<30)return;const we=ie();_e<0&&we<N-1?(Q(we+1),u()):_e>0&&we>0&&(Q(we-1),u())},{passive:!0})};q("in-panel",()=>a,ne=>a=ne,r.length),q("out-panel",()=>l,ne=>l=ne,s.length),(K=x.querySelector("#sub-confirm"))==null||K.addEventListener("click",ne=>{if(ne.preventDefault(),ne.stopPropagation(),o)return;o=!0;const ie=s[l],Q=r[a];if(!ie||!Q)return;let N=null,D=-1;for(const[xe,_e]of Object.entries(t.homeTeam)){const we=(_e||[]).findIndex(ve=>ve.cardId===ie.cardId);if(we!==-1){N=xe,D=we;break}}if(D===-1||!N){qt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),x.remove();return}const re={...Q,_line:N,_col:ie._col||0,used:!1,boost:0};t.homeTeam[N].splice(D,1,re),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(Q.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:ie.name,firstname:ie.firstname,note:Se(ie,N),portrait:He(ie),job:ie.job,country_code:ie.country_code,rarity:ie.rarity,clubName:ie.clubName,clubLogo:ie.clubLogo},inPlayer:{name:Q.name,firstname:Q.firstname,note:Se(Q,N),portrait:He(Q),job:Q.job,country_code:Q.country_code,rarity:Q.rarity,clubName:Q.clubName,clubLogo:Q.clubLogo},text:`🔄 ${Q.firstname} ${Q.name} remplace ${ie.firstname} ${ie.name}`}),x.remove(),Pn(ie,Q,()=>Je(e,t,i))})}document.body.appendChild(x),u()}function Gn(e,t,i,n,d){var _,m;const s=(n.gcDefs||[]).find(c=>c.name===t),r=Oe[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",f={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",a=(s==null?void 0:s.name)||t,o=(s==null?void 0:s.effect)||r.desc,x=s!=null&&s.image_url?`/icons/${s.image_url}`:null,u=r.icon||"⚡",h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",h.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${f};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${f}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${a.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${a}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${x?`<img src="${x}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${u}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${o}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(h),(_=h.querySelector("#gc-back"))==null||_.addEventListener("click",()=>h.remove()),(m=h.querySelector("#gc-use"))==null||m.addEventListener("click",()=>{h.remove(),Rn(e,t,i,n,d)})}function Xt(e,t,i,n,d,s){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function f(){var a,o;r.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(x=>{const u=x._line||x.job||"MIL",h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[u]||"#555",_=Se(x,u)+(x.boost||0),m=l.find(c=>c.cardId===x.cardId);return`<div class="gc-pick-item" data-cid="${x.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${m?"#FFD700":"rgba(255,255,255,0.25)"};background:${h};overflow:hidden;cursor:pointer;flex-shrink:0;${x.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${_}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${u}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(a=r.querySelector("#gc-picker-close"))==null||a.addEventListener("click",()=>r.remove()),r.querySelectorAll(".gc-pick-item").forEach(x=>{x.addEventListener("click",()=>{const u=x.dataset.cid,h=e.find(m=>m.cardId===u);if(!h)return;const _=l.findIndex(m=>m.cardId===u);_>-1?l.splice(_,1):l.length<t&&l.push(h),f()})}),(o=r.querySelector("#gc-picker-confirm"))==null||o.addEventListener("click",()=>{r.remove(),s(l)})}f(),document.body.appendChild(r)}const Nn={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,d,s)=>{const r=Object.entries(n.homeTeam).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,f])=>f.filter(a=>!a.used).map(a=>({...a,_line:l})));return r.length?(Xt(r,t,`Choisir ${t} joueur(s) à booster (+${e})`,d,n,l=>{l.forEach(f=>{const a=(n.homeTeam[f._line]||[]).find(o=>o.cardId===f.cardId);a&&(a.boost=(a.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${a.name}`,type:"info"}))}),Je(d,n,s)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Je(d,n,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},d,s,r)=>{const l=n==="home"?d.homeTeam:d.aiTeam,f=n==="ai"?"adverse":"allié",a=Object.entries(l).filter(([o])=>!i.length||i.includes(o)).flatMap(([o,x])=>x.filter(u=>!u.used).map(u=>({...u,_line:o})));return a.length?(Xt(a,t,`Choisir ${t} joueur(s) ${f}(s) à débuffer (-${e})`,s,d,o=>{o.forEach(x=>{const h=((n==="home"?d.homeTeam:d.aiTeam)[x._line]||[]).find(_=>_.cardId===x.cardId);h&&(h.boost=(h.boost||0)-e,d.log.push({text:`🎯 -${e} sur ${h.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),Je(s,d,r)}),!0):(d.log.push({text:`🎯 Aucun joueur ${f} disponible`,type:"info"}),Je(s,d,r),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,d,s)=>{const r=i==="home"?n.homeTeam:n.aiTeam,l=i==="ai"?"adverse":"allié",f=Object.entries(r).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,o])=>o.filter(x=>!x.used).map(x=>({...x,_line:a})));return f.length?(Xt(f,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,d,n,a=>{a.forEach(o=>{const u=((i==="home"?n.homeTeam:n.aiTeam)[o._line]||[]).find(h=>h.cardId===o.cardId);u&&(u.used=!0,n.log.push({text:`❌ ${u.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Je(d,n,s)}),!0):(n.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),Je(d,n,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,d)=>{const s=Object.entries(i.homeTeam).filter(([r])=>!t.length||t.includes(r)).flatMap(([r,l])=>l.filter(f=>f.used).map(f=>({...f,_line:r})));return s.length?(Xt(s,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,r=>{r.forEach(l=>{const f=(i.homeTeam[l._line]||[]).find(a=>a.cardId===l.cardId);f&&(f.used=!1,i.log.push({text:`💫 ${f.name} ressuscité !`,type:"info"}))}),Je(n,i,d)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Je(n,i,d),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Rn(e,t,i,n,d){n.usedGc.push(e);const s=n.gcDefs||[],r=s.find(f=>f.name===t)||s.find(f=>{var a;return((a=f.name)==null?void 0:a.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(r!=null&&r.effect_type&&r.effect_type!=="CUSTOM"){const f=Nn[r.effect_type];f?f(r.effect_params||{},n,i,d)||(l=!0):(d.toast(`Effet "${r.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const f=Object.entries(n.homeTeam).flatMap(([a,o])=>(o||[]).filter(x=>x.used).map(x=>({...x,_line:a})));f.length?(f[0].used=!1,n.log.push({text:`💫 ${f[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const f=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(a=>!a.used);if(f.length){const a=f.sort((o,x)=>Se(x,"ATT")-Se(o,"ATT"))[0];a.used=!0,n.log.push({text:`❄️ ${a.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}T.from("cards").delete().eq("id",e).then(()=>{}),l&&Je(i,n,d)}function On(e,t,i){const n=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Ht[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Se(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const s=d.dataset.cardId;for(const r of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[r]||[]).find(f=>f.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Je(e,t,i)})})}function ii(e,t,i,n,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const r=Array.from({length:10},(a,o)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${o%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][o%8]}
    </div>`).join("");s.innerHTML=`
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${r}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${n?"BUT !":"BUT IA !"}
  </div>
  <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
    <span style="animation:ballIn 0.8s ease 0.35s both">⚽</span>
    <span style="font-size:36px">🥅</span>
  </div>
  <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn 0.4s ease 0.75s both;letter-spacing:4px;position:relative;z-index:1">
    ${t} – ${i}
  </div>
  ${e!=null&&e.length?`
  <div style="display:flex;gap:10px;animation:scoreIn 0.4s ease 1s both;position:relative;z-index:1">
    ${e.map(a=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${Ht[a.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${a.portrait?`<img src="${a.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(a.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const f=()=>{l||(l=!0,s.remove(),setTimeout(()=>d(),50))};s.addEventListener("click",f),setTimeout(f,3500)}async function Pt(e,t,i){var o,x;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,d=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,r=d?"victoire":s?"nul":"defaite",l=Ho(t.mode,r);t.matchId&&await T.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?n.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const f={credits:(n.profile.credits||0)+l,matches_played:(n.profile.matches_played||0)+1};d?f.wins=(n.profile.wins||0)+1:s?f.draws=(n.profile.draws||0)+1:f.losses=(n.profile.losses||0)+1,await T.from("users").update(f).eq("id",n.profile.id),await i.refreshProfile();const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",a.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${d?"🏆":s?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${d?"Victoire !":s?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${l.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(a),(o=document.getElementById("res-home"))==null||o.addEventListener("click",()=>{a.remove(),Ve(e),i.navigate("home")}),(x=document.getElementById("res-replay"))==null||x.addEventListener("click",()=>{a.remove(),Ve(e),i.navigate("match",{matchMode:t.mode})})}function Hn(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${lt(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function vi(e,t,i=!1){var d,s,r,l;try{const f=(s=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:s.id;try{(T.getChannels?T.getChannels():[]).forEach(o=>{const x=o.topic||"";(x.includes("matchmaking")||x.includes("pvp-match")||x.includes("friend-invite"))&&T.removeChannel(o)})}catch(a){console.warn("[Random] cleanup canaux:",a)}f&&await T.rpc("cancel_matchmaking",{p_user_id:f}).catch(()=>{})}catch{}const n=i&&((l=(r=t==null?void 0:t.state)==null?void 0:r.params)==null?void 0:l.rankedData)||null;await si(e,t,"random",({deckId:f,formation:a,starters:o,subsRaw:x,gcCardsEnriched:u,gcDefs:h,stadiumDef:_})=>{const m=c=>Un(e,t,f,a,o,x,c,h||[],_,i,n);if(!u.length){m([]);return}ai(e,u,m)})}async function Un(e,t,i,n,d,s,r=[],l=[],f=null,a=!1,o=null){var P,j;const{state:x,navigate:u,toast:h}=t;let _=!1,m=null;et(e);const c=(o==null?void 0:o.mmr)??((P=x.profile)==null?void 0:P.mmr)??1e3,A=a?Nt(c):null,p=a?"linear-gradient(180deg,#1a0030,#0a1628)":"linear-gradient(180deg,#0a1628,#1a0a2e)",I=a?(A==null?void 0:A.color)||"#D4A017":"#FFD700";e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:${p};padding:24px;text-align:center">
      ${a?`<div style="font-size:36px">${(A==null?void 0:A.emoji)||"⚽"}</div>`:""}
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:${I};border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">${a?"Recherche Ranked...":"Recherche d'un adversaire..."}</div>
      ${a?`<div style="font-size:13px;color:${(A==null?void 0:A.color)||"#D4A017"}">${(A==null?void 0:A.emoji)||"⚔️"} ${(A==null?void 0:A.label)||"Ranked"}</div>`:""}
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <div id="mm-range" style="display:none"></div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const q=async(R=!0)=>{_=!0,m&&(T.removeChannel(m),m=null),R&&await T.rpc("cancel_matchmaking",{p_user_id:x.profile.id}).catch(()=>{})};(j=document.getElementById("mm-cancel"))==null||j.addEventListener("click",async()=>{try{await q(!0)}catch{}Ve(e),u("home")});const C=async(R,V,K)=>{if(_)return;_=!0,m&&(T.removeChannel(m),m=null);const ne=document.getElementById("mm-status");ne&&(ne.textContent="Adversaire trouvé !"),await new Promise(ie=>setTimeout(ie,600)),e.isConnected&&go(e,t,R,K,r,l,a,o,f)};if(a){const R=[{range:50,delay:0},{range:100,delay:15e3},{range:200,delay:3e4},{range:400,delay:45e3},{range:800,delay:6e4}];let V=0,K=!1;const ne=async()=>{if(_||K)return;const{range:ie}=R[V],Q=document.getElementById("mm-range");Q&&(Q.textContent=`Plage MMR : ±${ie}`);const{data:N,error:D}=await T.rpc("try_matchmake_ranked",{p_user_id:x.profile.id,p_deck_id:i,p_mmr:c,p_range:ie});if(console.log("[Ranked] try_matchmake_ranked result:",N,"error:",JSON.stringify(D)),_)return;if(D||!(N!=null&&N.success)){h("Erreur matchmaking ranked","error"),Ve(e),u("home");return}if(N.matched){K=!0,C(N.match_id,N.opponent_id,!1);return}const re=document.getElementById("mm-status");if(re&&(re.textContent="En attente d'un adversaire..."),m||(m=T.channel("matchmaking-"+x.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${x.profile.id}`},xe=>{const _e=xe.new;_e.status==="matched"&&_e.match_id&&!K&&(K=!0,C(_e.match_id,_e.matched_with,!0))}).subscribe()),V<R.length-1){const xe=R[V+1].delay-R[V].delay;V++,setTimeout(()=>{!_&&!K&&ne()},xe)}};await ne()}else{const{data:R,error:V}=await T.rpc("try_matchmake",{p_user_id:x.profile.id,p_deck_id:i});if(V||!(R!=null&&R.success)){h("Erreur de matchmaking","error"),Ve(e),u("home");return}if(R.matched){C(R.match_id,R.opponent_id,!1);return}const K=document.getElementById("mm-status");K&&(K.textContent="En attente d'un autre joueur..."),m=T.channel("matchmaking-"+x.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${x.profile.id}`},ne=>{const ie=ne.new;ie.status==="matched"&&ie.match_id&&C(ie.match_id,ie.matched_with,!0)}).subscribe()}}async function Kn(e,t,i){const{state:n,navigate:d,toast:s}=t;try{(T.getChannels?T.getChannels():[]).forEach(a=>{const o=a.topic||"";(o.includes("matchmaking")||o.includes("pvp-match")||o.includes("friend-invite"))&&T.removeChannel(a)})}catch{}const{data:r}=await T.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!r){s("Match introuvable","error"),d("home");return}if(r.status==="finished"){s("Ce match est terminé","info"),d("home");return}const l=r.home_id===n.profile.id;go(e,t,i,l,[],[])}async function go(e,t,i,n,d=[],s=[],r=!1,l=null,f=null){const{state:a,navigate:o,toast:x}=t,u=n?"p1":"p2",h=n?"p2":"p1",_=(d||[]).map($=>$.id),m=(d||[]).map($=>({id:$.id,gc_type:$.gc_type,_gcDef:$._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:c}=await T.from("matches").select("*").eq("id",i).single();if(!c){x("Match introuvable","error"),o("home");return}async function A(){var W,te;console.log("[PvP] buildGameState match:",{id:c.id,home_deck_id:c.home_deck_id,away_deck_id:c.away_deck_id,mode:c.mode,is_ranked:c.is_ranked});const[{data:$,error:g},{data:y,error:b},{data:v},{data:w}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:c.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:c.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",c.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",c.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",g==null?void 0:g.message,"p2:",b==null?void 0:b.message,"p1D:",(W=$==null?void 0:$.starters)==null?void 0:W.length,"p2D:",(te=y==null?void 0:y.starters)==null?void 0:te.length);const k=ee=>{const fe=Number(ee.evolution_bonus)||0;return{cardId:ee.card_id,position:ee.position,id:ee.id,firstname:ee.firstname,name:ee.surname_encoded,country_code:ee.country_code,club_id:ee.club_id,job:ee.job,job2:ee.job2,note_g:(Number(ee.note_g)||0)+(ee.job==="GK"||ee.job2==="GK"&&Number(ee.note_g)>0?fe:0),note_d:(Number(ee.note_d)||0)+(ee.job==="DEF"||ee.job2==="DEF"&&Number(ee.note_d)>0?fe:0),note_m:(Number(ee.note_m)||0)+(ee.job==="MIL"||ee.job2==="MIL"&&Number(ee.note_m)>0?fe:0),note_a:(Number(ee.note_a)||0)+(ee.job==="ATT"||ee.job2==="ATT"&&Number(ee.note_a)>0?fe:0),evolution_bonus:fe,rarity:ee.rarity,skin:ee.skin,hair:ee.hair,hair_length:ee.hair_length,clubName:ee.club_encoded_name||null,clubLogo:ee.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},z=(($==null?void 0:$.starters)||[]).map(ee=>k(ee)),E=((y==null?void 0:y.starters)||[]).map(ee=>k(ee)),L=($==null?void 0:$.formation)||"4-4-2",S=(y==null?void 0:y.formation)||"4-4-2";let M=vt(z,L),F=vt(E,S);const Y=(($==null?void 0:$.subs)||[]).map(ee=>k(ee)),J=((y==null?void 0:y.subs)||[]).map(ee=>k(ee)),U=($==null?void 0:$.stadium_def)||(n?f:null),G=(y==null?void 0:y.stadium_def)||(n?null:f);return U&&(M=Tt(M,U),jt(Y,U)),G&&(F=Tt(F,G),jt(J,G)),{p1Team:M,p2Team:F,p1Subs:Y,p2Subs:J,p1Formation:L,p2Formation:S,p1Name:(v==null?void 0:v.club_name)||(v==null?void 0:v.pseudo)||"Joueur 1",p2Name:(w==null?void 0:w.club_name)||(w==null?void 0:w.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?_:[],gc_p2:n?[]:_,gcCardsFull_p1:n?m:[],gcCardsFull_p2:n?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let p=c.game_state&&Object.keys(c.game_state).length?c.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!p,"match.status:",c.status,"home_id:",c.home_id,"away_id:",c.away_id,"myId:",a.profile.id),!p)if(n){p=await A(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((p==null?void 0:p.p1Team)||{}));const{data:$}=await T.from("matches").select("game_state").eq("id",i).single();!($!=null&&$.game_state)||!Object.keys($.game_state).length?await T.from("matches").update({game_state:p,turn_user_id:c.home_id}).eq("id",i):p=$.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let $=0;$<30&&!p;$++){await new Promise(y=>setTimeout(y,400));const{data:g}=await T.from("matches").select("game_state").eq("id",i).single();g!=null&&g.game_state&&Object.keys(g.game_state).length&&(p=g.game_state),$%5===0&&console.log("[PvP] away - poll",$,"game_state:",!!(g!=null&&g.game_state))}if(!p){x("Erreur de synchronisation","error"),o("home");return}p.gc_p2=_,p.gcCardsFull_p2=m,await T.from("matches").update({game_state:p}).eq("id",i)}let I=!1,q=null,C=!1;const P=new Set,j=new Set;async function R($){var S,M;try{T.removeChannel(V)}catch{}const g=p[u+"Score"]||0,y=p[h+"Score"]||0;let b,v;$.winner_id?(b=$.winner_id===a.profile.id,v=!1):$.forfeit?(b=g>y,v=!1):(v=g===y,b=g>y);let w="";if(r&&n)try{const{data:F}=await T.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",c.home_id).single(),{data:Y}=await T.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",c.away_id).single();if(F&&Y){const J=b?1:v?.5:0,U=1-J,G=F.placement_matches<10,W=Y.placement_matches<10,te=Ii(F.mmr,F.mmr_deviation,F.mmr_volatility,Y.mmr,Y.mmr_deviation,J===1?1:J===0?0:.5,G),ee=Ii(Y.mmr,Y.mmr_deviation,Y.mmr_volatility,F.mmr,F.mmr_deviation,U===1?1:U===0?0:.5,W);await T.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:v?null:b?c.home_id:c.away_id,p_home_id:c.home_id,p_away_id:c.away_id,p_home_delta:te.delta,p_away_delta:ee.delta,p_home_new_rd:te.newRd,p_away_new_rd:ee.newRd,p_home_new_vol:te.newSigma,p_away_new_vol:ee.newSigma});const fe=te.delta,ye=te.newMmr,be=Nt(ye),ke=fe>=0?"+":"",Be=fe>=0?"#4caf50":"#ff6b6b",Fe=Nt(F.mmr);w=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${be.id!==Fe.id?`<div style="font-size:20px;font-weight:900;color:${be.color}">
                    ${ye>F.mmr?"📈":"📉"} ${Fe.emoji} ${Fe.label} → ${be.emoji} ${be.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${ye>F.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${fe>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${be.color}">${be.emoji} ${be.label}</div>`}
              ${G?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${F.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(F){console.error("[Ranked] MMR update error:",F)}(S=document.getElementById("pvp-end-overlay"))==null||S.remove();const k=document.createElement("div");k.id="pvp-end-overlay",k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const z=v?"🤝":b?"🏆":"😞",E=v?"MATCH NUL":b?"VICTOIRE !":"DÉFAITE",L=v?"#fff":b?"#FFD700":"#ff6b6b";k.innerHTML=`
      <div style="font-size:64px">${z}</div>
      <div style="font-size:26px;font-weight:900;color:${L}">${E}</div>
      ${r?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${p[u+"Name"]} ${g} – ${y} ${p[h+"Name"]}</div>
      ${$.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${b?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${w}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${r?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(k),(M=k.querySelector("#pvp-end-home"))==null||M.addEventListener("click",()=>{k.remove(),Ve(e),o(r?"ranked":"home")})}const V=T.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},$=>{const g=$.new;try{if(g.status==="finished"||g.forfeit){if(I)return;I=!0,q&&(clearInterval(q),q=null),g.game_state&&(p=g.game_state),R(g);return}if(g.game_state){const y=p;p=g.game_state;const b=p._lastGC;if(b&&b.seq&&!j.has(b.seq)&&(j.add(b.seq),b.by!==u)){se(b.type,b.by,()=>xe());return}const v=y[u+"Score"]||0,w=y[h+"Score"]||0,k=p[u+"Score"]||0,z=p[h+"Score"]||0,E=k>v,L=z>w;if((E||L)&&!P.has(p.round)){P.add(p.round);const S=[...p.log||[]].reverse().find(F=>F.isGoal),M=((S==null?void 0:S.homePlayers)||[]).map(F=>({name:F.name,note:F.note,portrait:F.portrait,job:F.job}));Ee(M,k,z,E,()=>xe());return}xe()}}catch(y){console.error("[PvP] crash:",y)}}).subscribe();async function K($){Object.assign(p,$),p.lastActionAt=new Date().toISOString();const{error:g}=await T.from("matches").update({game_state:p}).eq("id",i);g&&x("Erreur de synchronisation","error");try{xe()}catch(y){console.error("[PvP] renderPvpScreen crash:",y)}}async function ne(){if(I)return;I=!0,q&&(clearInterval(q),q=null);const $=n?c.away_id:c.home_id,g=n?"p2":"p1",y=n?"p1":"p2",b={...p,[g+"Score"]:3,[y+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:$,home_score:b.p1Score||0,away_score:b.p2Score||0,game_state:b}).eq("id",i)}catch{}try{T.removeChannel(V)}catch{}setTimeout(()=>{Ve(e),o("home")},800)}const ie={BOOST_STAT:({value:$=1,count:g=1,roles:y=[]},b,v)=>{const w=b[u+"Team"],k=Object.entries(w).filter(([z])=>!y.length||y.includes(z)).flatMap(([z,E])=>E.filter(L=>!L.used).map(L=>({...L,_line:z})));if(!k.length){b.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),v(b);return}Q(k,g,`Choisir ${g} joueur(s) à booster (+${$})`,z=>{z.forEach(E=>{const L=(w[E._line]||[]).find(S=>S.cardId===E.cardId);L&&(L.boost=(L.boost||0)+$,b.log.push({text:`⚡ +${$} sur ${L.name}`,type:"info"}))}),b[u+"Team"]=w,v(b)})},DEBUFF_STAT:({value:$=1,count:g=1,roles:y=[],target:b="ai"},v,w)=>{const k=b==="home"?u:h,z=v[k+"Team"],E=b==="home"?"allié":"adverse",L=Object.entries(z).filter(([S])=>!y.length||y.includes(S)).flatMap(([S,M])=>M.map(F=>({...F,_line:S})));if(!L.length){v.log.push({text:`🎯 Aucun joueur ${E}`,type:"info"}),w(v);return}Q(L,g,`Choisir ${g} joueur(s) ${E}(s) (-${$})`,S=>{S.forEach(M=>{const F=(z[M._line]||[]).find(Y=>Y.cardId===M.cardId);F&&(F.boost=(F.boost||0)-$,v.log.push({text:`🎯 -${$} sur ${F.name}`,type:"info"}))}),v[k+"Team"]=z,w(v)})},GRAY_PLAYER:({count:$=1,roles:g=[],target:y="ai"},b,v)=>{const w=y==="home"?u:h,k=b[w+"Team"],z=y==="home"?"allié":"adverse",E=Object.entries(k).filter(([L])=>!g.length||g.includes(L)).flatMap(([L,S])=>S.filter(M=>!M.used).map(M=>({...M,_line:L})));if(!E.length){b.log.push({text:`❌ Aucun joueur ${z}`,type:"info"}),v(b);return}Q(E,$,`Choisir ${$} joueur(s) ${z}(s) à exclure`,L=>{const S="usedCardIds_"+w,M=new Set(b[S]||[]);L.forEach(F=>{const Y=(k[F._line]||[]).find(J=>J.cardId===F.cardId);Y&&(Y.used=!0,M.add(F.cardId),b.log.push({text:`❌ ${Y.name} exclu !`,type:"info"}))}),b[S]=[...M],b[w+"Team"]=k,v(b)})},REVIVE_PLAYER:({count:$=1,roles:g=[]},y,b)=>{const v=y[u+"Team"],w=Object.entries(v).filter(([k])=>!g.length||g.includes(k)).flatMap(([k,z])=>z.filter(E=>E.used).map(E=>({...E,_line:k})));if(!w.length){y.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),b(y);return}Q(w,$,`Choisir ${$} joueur(s) à ressusciter`,k=>{k.forEach(z=>{const E=(v[z._line]||[]).find(L=>L.cardId===z.cardId);E&&(E.used=!1,y.log.push({text:`💫 ${E.name} ressuscité !`,type:"info"}))}),y[u+"Team"]=v,b(y)})},REMOVE_GOAL:({},$,g)=>{const y=h+"Score";$[y]>0?($[y]--,$.log.push({text:"🚫 Dernier but annulé !",type:"info"})):$.log.push({text:"🚫 Aucun but à annuler",type:"info"}),g($)},ADD_GOAL_DRAW:({},$,g)=>{$[u+"Score"]===$[h+"Score"]?($[u+"Score"]++,$.log.push({text:"🎯 But bonus !",type:"info"})):$.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),g($)},ADD_SUB:({value:$=1},g,y)=>{g.maxSubs=(g.maxSubs||3)+$,g.log.push({text:`🔄 +${$} remplacement(s)`,type:"info"}),y(g)},CUSTOM:({},$,g)=>g($)};function Q($,g,y,b){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let w=[];function k(){var E,L;const z=$.map(S=>{const M={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[S._line]||"#555",F=Se(S,S._line)+(S.boost||0),J=w.find(G=>G.cardId===S.cardId)?"#FFD700":"rgba(255,255,255,0.25)",U=S.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${S.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${J};background:${M};overflow:hidden;cursor:pointer;${U}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${S.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${F}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${S._line}</div>
        </div>`}).join("");v.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${y}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${w.length}/${g}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${z}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${w.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${w.length}/${g})
          </button>
        </div>`,(E=v.querySelector("#pp-close"))==null||E.addEventListener("click",()=>v.remove()),v.querySelectorAll(".pp-item").forEach(S=>{S.addEventListener("click",()=>{const M=S.dataset.cid,F=$.find(J=>J.cardId===M),Y=w.findIndex(J=>J.cardId===M);F&&(Y>-1?w.splice(Y,1):w.length<g&&w.push(F),k())})}),(L=v.querySelector("#pp-confirm"))==null||L.addEventListener("click",()=>{v.remove(),b(w)})}k(),document.body.appendChild(v)}async function N($,g){const b=(p["gcCardsFull_"+u]||[]).find(z=>z.id===$),v=(b==null?void 0:b._gcDef)||(p.gcDefs||[]).find(z=>{var E;return z.name===g||((E=z.name)==null?void 0:E.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),w=[...p["usedGc_"+u]||[],$],k={type:g,by:u,seq:(p._gcAnimSeq||0)+1};j.add(k.seq),se(g,u,async()=>{if(v!=null&&v.effect_type&&v.effect_type!=="CUSTOM"){const E=ie[v.effect_type];if(E){const L={...p};E(v.effect_params||{},L,async S=>{S["usedGc_"+u]=w,S._lastGC=k,S._gcAnimSeq=k.seq,await K(S)});return}}const z={...p};switch(g){case"Remplacement+":z.maxSubs=(z.maxSubs||3)+1,z.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const E=h+"Score";z[E]>0&&(z[E]--,z.log.push({text:"🚫 But annulé",type:"info"}));break}}z["usedGc_"+u]=w,z._lastGC=k,z._gcAnimSeq=k.seq,await K(z)})}function D($,g){const y="usedCardIds_"+$,b=new Set(p[y]||[]);g.forEach(v=>b.add(v)),p[y]=[...b]}function re(){for(const $ of["p1","p2"]){const g=new Set(p["usedCardIds_"+$]||[]),y=p[$+"Team"];if(y)for(const b of["GK","DEF","MIL","ATT"])(y[b]||[]).forEach(v=>{v.used=g.has(v.cardId)})}}function xe(){var We,ot,pt,ut,ft,le;if(p.phase==="reveal")return _e();if(p.phase==="midfield")return ve();if(p.phase==="finished")return B();const $=p[u+"Team"],g=p[h+"Team"];re();const y=p[u+"Score"],b=p[h+"Score"],v=p[u+"Name"],w=p[h+"Name"],k=p.phase===u+"-attack",z=p.phase===u+"-defense",E=Array.isArray(p["selected_"+u])?p["selected_"+u]:[],L=E.map(X=>X.cardId),S=window.innerWidth>=700,M=p[u+"Subs"]||[],F=p["usedSubIds_"+u]||[],Y=M.filter(X=>!F.includes(X.cardId)),J=p["gcCardsFull_"+u]||[],U=p["usedGc_"+u]||[],G=J.filter(X=>!U.includes(X.id)),W=p.boostOwner===u&&!p.boostUsed,te=!["GK","DEF","MIL","ATT"].some(X=>(g[X]||[]).some(O=>!O.used)),ee=[...$.MIL||[],...$.ATT||[]].filter(X=>!X.used),fe=k&&te&&ee.length===0?[...$.GK||[],...$.DEF||[]].filter(X=>!X.used).map(X=>X.cardId):[];function ye(X,O,ae){var kt,Ct;const he=X._gcDef,$e={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[he==null?void 0:he.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Qe={purple:"#b06ce0",light_blue:"#00d4ef"}[he==null?void 0:he.color]||"#b06ce0",Ze=(he==null?void 0:he.name)||X.gc_type,tt=(he==null?void 0:he.effect)||((kt=Oe[X.gc_type])==null?void 0:kt.desc)||"",rt=he!=null&&he.image_url?`/icons/${he.image_url}`:null,_t=((Ct=Oe[X.gc_type])==null?void 0:Ct.icon)||"⚡",$t=Math.round(ae*.22),dt=Math.round(ae*.22),gt=ae-$t-dt,mt=Ze.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}"
        style="box-sizing:border-box;width:${O}px;height:${ae}px;border-radius:10px;border:2px solid ${Qe};background:${$e};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${$t}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${mt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${O-6}px">${Ze}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${gt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${rt?`<img src="${rt}" style="max-width:${O-10}px;max-height:${gt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(gt*.55)}px">${_t}</span>`}
        </div>
        <div style="height:${dt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${tt.slice(0,38)}</span>
        </div>
      </div>`}function be(X,O){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${X}px;height:${O}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(O*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(O*.2)}px">⚡</div>
        <div style="font-size:${Math.round(O*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const ke=(X,O)=>O?be(130,175):ye(X,130,175),Be=(X,O)=>O?be(68,95):ye(X,68,95),Fe=S?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Me=k?Te(u)?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${E.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Fe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:z?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${E.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${w}</div>`,je=k&&!Te(u)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':k||z?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${E.length}/3 sélectionné(s)</div>`:"",Ae=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${S?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${Y.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':Y.map(X=>`<div class="pvp-sub-btn" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(X,S?76:44,S?100:58)}</div>`).join("")}
    </div>`,Ne=k?"attack":z?"defense":"idle",Ue=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ct($,p[u+"Formation"],Ne,L,300,300,fe)}
      </div>
    </div>`;function Ye(X){if(X.type==="duel"&&(X.homeTotal!=null||X.aiTotal!=null)){const O=(X.homeTotal||0)>=(X.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(X.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(X.homePlayers||[]).map(ae=>at(ae)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${O?20:14}px;font-weight:900;color:${O?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${X.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${O?14:20}px;font-weight:900;color:${O?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${X.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(X.aiPlayers||[]).map(ae=>at(ae)).join("")}
            </div>
          </div>
          ${X.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${X.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${X.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${X.type==="goal"?700:400};padding:3px 2px">${X.text||""}</div>`}const Ke=(()=>{var O,ae;if(z&&((O=p.pendingAttack)!=null&&O.players)){const he=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${w} ATTAQUE — Défendez !</div>
          ${it((he.players||[]).map($e=>({...$e,used:!1})),"#ff6b6b",he.total)}
        </div>`}if(k&&((ae=p.pendingAttack)!=null&&ae.players)){const he=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((he.players||[]).map($e=>({...$e,used:!1})),"#00ff88",he.total)}
        </div>`}const X=(p.log||[]).slice(-1)[0];return X?'<div style="padding:2px 4px">'+Ye(X)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Re=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${y} – ${b}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${w}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ke}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(p.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",S?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Re}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ae}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ue}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Me}${je}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${G.map(X=>ke(X,!1)).join("")}
            ${W?ke(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Re}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ct($,p[u+"Formation"],Ne,L,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${G.map(X=>Be(X,!1)).join("")}
            ${W?Be(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${k&&Y.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${k&&Y.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${k&&Y.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${k&&Y.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${Y.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(p["usedSubIds_"+u]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(p["usedSubIds_"+u]||[]).length}/${p.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Me}${je}</div>
        </div>
      </div>`;function Ge(){const X=e.querySelector(".match-screen");if(!X)return;const O=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);X.style.height=O+"px",X.style.minHeight=O+"px",X.style.maxHeight=O+"px",X.style.overflow="hidden";const ae=e.querySelector("#mobile-action-bar"),he=e.querySelector("#mobile-play-area");ae&&he&&(he.style.paddingBottom=ae.offsetHeight+"px")}if(Ge(),setTimeout(Ge,120),setTimeout(Ge,400),C||(C=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ge),window.visualViewport.addEventListener("scroll",Ge)),window.addEventListener("resize",Ge)),function(){const O=e.querySelector(".terrain-wrapper svg");O&&(O.removeAttribute("width"),O.removeAttribute("height"),O.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",O.setAttribute("viewBox","-26 -26 352 352"),O.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(X=>{X.addEventListener("click",()=>{if(!k&&!z)return;const O=X.dataset.cardId,ae=X.dataset.role,he=($[ae]||[]).find(tt=>tt.cardId===O);if(!he||he.used)return;const $e=fe.includes(O);if(k&&!["MIL","ATT"].includes(ae)&&!$e)return;Array.isArray(p["selected_"+u])||(p["selected_"+u]=[]);const Qe=p["selected_"+u],Ze=Qe.findIndex(tt=>tt.cardId===O);Ze>-1?Qe.splice(Ze,1):Qe.length<3&&Qe.push({...he,_role:ae}),xe()})}),e.querySelectorAll(".match-used-hit").forEach(X=>{X.addEventListener("click",()=>H(X.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(X=>{X.addEventListener("click",()=>H())}),(We=e.querySelector("#pvp-sub-open"))==null||We.addEventListener("click",()=>H()),e.querySelectorAll(".pvp-gc-mini").forEach(X=>{X.addEventListener("click",()=>pe(X.dataset.gcId,X.dataset.gcType))}),(ot=e.querySelector("#pvp-boost-card"))==null||ot.addEventListener("click",()=>ce()),(pt=e.querySelector("#pvp-action"))==null||pt.addEventListener("click",X=>{k?X.currentTarget.dataset.pass==="1"||!Te(u)?me():oe():z&&ue()}),(ut=e.querySelector("#pvp-quit"))==null||ut.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ne()}),(ft=e.querySelector("#pvp-view-opp"))==null||ft.addEventListener("click",()=>ge()),(le=e.querySelector("#pvp-toggle-history"))==null||le.addEventListener("click",()=>de()),q&&(clearInterval(q),q=null),(k||z)&&!I){let X=30,O=!1;const ae=()=>document.getElementById("pvp-timer"),he=()=>{ae()&&(ae().textContent=X+"s",ae().style.color=O?"#ff4444":"#fff")};he(),q=setInterval(()=>{X--,X<0?O?(clearInterval(q),q=null,k&&!Te(u)?me():ne()):(O=!0,X=15,he()):he()},1e3)}}function _e(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[h+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${lt(p[h+"Team"],p[h+"Formation"],null,[],300,300)}</div>
    </div>`,u==="p1"&&setTimeout(async()=>{await K({phase:"midfield"})},5e3)}let we=!1;function ve(){if(we)return;const $=p[u+"Team"].MIL||[],g=p[h+"Team"].MIL||[];function y(G){return G.reduce((W,te)=>W+Se(te,"MIL"),0)}function b(G){let W=0;for(let te=0;te<G.length-1;te++){const ee=nt(G[te],G[te+1]);ee==="#00ff88"?W+=2:ee==="#FFD700"&&(W+=1)}return W}const v=y($)+b($),w=y(g)+b(g),k=v>=w;function z(G,W,te){return`<div id="duel-row-${te}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${W}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${G.map((ee,fe)=>{const ye=fe<G.length-1?nt(ee,G[fe+1]):null,be=!ye||ye==="#ff3333"||ye==="#cc2222",ke=ye==="#00ff88"?"+2":ye==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${te}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Xe({...ee,note:Se(ee,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<G.length-1?`<div class="duel-link duel-link-${te}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${be?"rgba(255,255,255,0.12)":ye};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${be?"none":`0 0 8px ${ye}`}">
              ${ke?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ye}">${ke}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${te}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${y(G)} + ${b(G)} liens = <b style="color:#fff">${y(G)+b(G)}</b>
        </div>
      </div>`}et(e),e.innerHTML=`
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
      ${z($,p[u+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${z(g,p[h+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const E=(G,W)=>e.querySelectorAll(G).forEach((te,ee)=>{setTimeout(()=>{te.style.opacity="1",te.style.transform="translateY(0) scale(1)"},W+ee*90)});E(".duel-card-me",150),E(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((G,W)=>setTimeout(()=>{G.style.opacity="1"},W*70)),900),setTimeout(()=>{const G=e.querySelector("#pvp-vs");G&&(G.style.opacity="1",G.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(W=>W.style.opacity="1")},1250);function L(G,W,te){const ee=document.getElementById(G);if(!ee)return;const fe=performance.now(),ye=be=>{const ke=Math.min(1,(be-fe)/te);ee.textContent=Math.round(W*(1-Math.pow(1-ke,3))),ke<1?requestAnimationFrame(ye):ee.textContent=W};requestAnimationFrame(ye)}setTimeout(()=>{L("pvp-score-me",v,800),L("pvp-score-opp",w,800)},1500);const S=p.p1Team.MIL||[],M=p.p2Team.MIL||[],F=y(S)+b(S),Y=y(M)+b(M),J=F>=Y?"p1":"p2";let U=p.boostValue;U==null&&(U=ri(),p.boostValue=U,p.boostOwner=J,p.boostUsed=!1),we=!0,setTimeout(()=>{const G=e.querySelector("#duel-row-"+(k?"me":"opp")),W=e.querySelector("#duel-row-"+(k?"opp":"me")),te=document.getElementById("pvp-score-me"),ee=document.getElementById("pvp-score-opp"),fe=k?te:ee,ye=k?ee:te;fe&&(fe.style.fontSize="80px",fe.style.color=k?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(k?",duelGlow 1.5s ease infinite .5s":"")),ye&&(ye.style.opacity="0.25"),setTimeout(()=>{G&&(G.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",G.style.zIndex="5"),setTimeout(()=>{const be=document.getElementById("duel-shock");be&&(be.style.animation="shockwave .5s ease-out forwards"),W&&(W.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Fe;const be=document.getElementById("pvp-duel-finale");if(!be)return;const ke=p.boostOwner===u?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+U+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Be=u==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;be.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(k?"⚽ "+p[u+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[h+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ke+Be,be.style.transition="opacity .45s ease",be.style.opacity="1",be.style.pointerEvents="auto",(Fe=document.getElementById("pvp-start-match"))==null||Fe.addEventListener("click",async()=>{const Me=J;await K({phase:Me+"-attack",attacker:Me,round:1,boostValue:U,boostUsed:!1,boostOwner:Me})})},600)},700)},2800)}function Ee($,g,y,b,v){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const k=Array.from({length:10},(S,M)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${M%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][M%8]}</div>`).join(""),z={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};w.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${k}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${b?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${g} – ${y}
      </div>
      ${$!=null&&$.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${$.map(S=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${z[S.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${S.portrait?`<img src="${S.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(S.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(w);let E=!1;const L=()=>{E||(E=!0,w.remove(),setTimeout(()=>v(),50))};w.addEventListener("click",L),setTimeout(L,3500)}function se($,g,y){var U,G;const b=(p.gcDefs||[]).find(W=>{var te;return W.name===$||((te=W.name)==null?void 0:te.toLowerCase().trim())===($==null?void 0:$.toLowerCase().trim())}),v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",k=(b==null?void 0:b.name)||$,z=(b==null?void 0:b.effect)||((U=Oe[$])==null?void 0:U.desc)||"",E=b!=null&&b.image_url?`/icons/${b.image_url}`:null,L=((G=Oe[$])==null?void 0:G.icon)||"⚡",M=g===u?"Vous":p[g+"Name"]||"Adversaire",F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",F.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${w}66}50%{box-shadow:0 0 60px ${w}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${w};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${M} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${L}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${z}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(F);let Y=!1;const J=()=>{Y||(Y=!0,F.remove(),setTimeout(()=>y&&y(),50))};F.addEventListener("click",J),setTimeout(J,3e3)}function pe($,g){var F,Y,J,U;const b=(p["gcCardsFull_"+u]||[]).find(G=>G.id===$),v=b==null?void 0:b._gcDef,w={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",k={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",z=(v==null?void 0:v.name)||g,E=(v==null?void 0:v.effect)||((F=Oe[g])==null?void 0:F.desc)||"Carte spéciale.",L=v!=null&&v.image_url?`/icons/${v.image_url}`:null,S=((Y=Oe[g])==null?void 0:Y.icon)||"⚡",M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",M.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${k};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${k}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${z.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${z}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${L?`<img src="${L}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${S}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${E}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(M),(J=M.querySelector("#pvp-gc-back"))==null||J.addEventListener("click",()=>M.remove()),(U=M.querySelector("#pvp-gc-use"))==null||U.addEventListener("click",()=>{M.remove(),N($,g)})}function ce(){var b;const $=p[u+"Team"],g=Object.entries($).flatMap(([v,w])=>(w||[]).filter(k=>!k.used).map(k=>({...k,_line:v})));if(!g.length)return;const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",y.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${g.map(v=>{const w={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v._line]||"#555",k=Se(v,v._line)+(v.boost||0);return`<div class="bp-item" data-cid="${v.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${w};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${v.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${k}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(y),(b=y.querySelector("#bp-close"))==null||b.addEventListener("click",()=>y.remove()),y.querySelectorAll(".bp-item").forEach(v=>{v.addEventListener("click",async()=>{const w=v.dataset.cid,k=g.find(E=>E.cardId===w);if(!k)return;const z=($[k._line]||[]).find(E=>E.cardId===w);z&&(z.boost=(z.boost||0)+p.boostValue),y.remove(),await K({[u+"Team"]:$,boostUsed:!0})})})}function H($=null){var Y,J;if(!(p.phase===u+"-attack")){x("Remplacement uniquement avant votre attaque","warning");return}const y=p[u+"Team"],b=p["usedSubIds_"+u]||[],v=p.maxSubs||3;if(b.length>=v){x(`Maximum ${v} remplacements atteint`,"warning");return}const w=Object.entries(y).flatMap(([U,G])=>(G||[]).filter(W=>W.used).map(W=>({...W,_line:U}))),k=(p[u+"Subs"]||[]).filter(U=>!b.includes(U.cardId));if(!w.length){x("Aucun joueur utilisé à remplacer","warning");return}if(!k.length){x("Aucun remplaçant disponible","warning");return}let z=Math.max(0,w.findIndex(U=>U.cardId===$));const E=((Y=w[z])==null?void 0:Y._line)||((J=w[z])==null?void 0:J.job);let L=Math.max(0,k.findIndex(U=>U.job===E)),S=!1;const M=document.createElement("div");M.id="pvp-sub-overlay",M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function F(){var ye,be,ke,Be,Fe,Me;const U=w[z],G=k[L],W=Math.min(130,Math.round((window.innerWidth-90)/2)),te=Math.round(W*1.35),ee=je=>`background:rgba(255,255,255,0.12);border:none;color:${je?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${je?"default":"pointer"};flex-shrink:0`;M.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${b.length}/${v})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ee(L===0)}" ${L===0?"disabled":""}>▲</button>
          <div>${G?Xe({...G,used:!1,boost:0},W,te):"<div>—</div>"}</div>
          <button id="pin-down" style="${ee(L>=k.length-1)}" ${L>=k.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${L+1}/${k.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ee(z===0)}" ${z===0?"disabled":""}>▲</button>
          <div>${U?Xe({...U,used:!1,boost:0},W,te):"<div>—</div>"}</div>
          <button id="pout-down" style="${ee(z>=w.length-1)}" ${z>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${z+1}/${w.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ye=M.querySelector("#psub-close"))==null||ye.addEventListener("click",()=>M.remove()),(be=M.querySelector("#pout-up"))==null||be.addEventListener("click",()=>{z>0&&(z--,F())}),(ke=M.querySelector("#pout-down"))==null||ke.addEventListener("click",()=>{z<w.length-1&&(z++,F())}),(Be=M.querySelector("#pin-up"))==null||Be.addEventListener("click",()=>{L>0&&(L--,F())}),(Fe=M.querySelector("#pin-down"))==null||Fe.addEventListener("click",()=>{L<k.length-1&&(L++,F())});const fe=(je,Ae,Ne,Ue)=>{const Ye=M.querySelector("#"+je);if(!Ye)return;let Ke=0;Ye.addEventListener("touchstart",Re=>{Ke=Re.touches[0].clientY},{passive:!0}),Ye.addEventListener("touchend",Re=>{const Ge=Re.changedTouches[0].clientY-Ke;if(Math.abs(Ge)<30)return;const We=Ae();Ge<0&&We<Ue-1?(Ne(We+1),F()):Ge>0&&We>0&&(Ne(We-1),F())},{passive:!0})};fe("pin-panel",()=>L,je=>L=je,k.length),fe("pout-panel",()=>z,je=>z=je,w.length),(Me=M.querySelector("#psub-confirm"))==null||Me.addEventListener("click",async je=>{if(je.preventDefault(),je.stopPropagation(),S)return;S=!0;const Ae=w[z],Ne=k[L];if(!Ae||!Ne)return;const Ue=Ae._line,Ye=(y[Ue]||[]).findIndex(Ge=>Ge.cardId===Ae.cardId);if(Ye===-1){x("Erreur : joueur introuvable","error"),M.remove();return}const Ke={...Ne,_line:Ue,position:Ae.position,used:!1,boost:0};y[Ue].splice(Ye,1,Ke);const Re=[...b,Ne.cardId];M.remove(),Z(Ae,Ne,async()=>{await K({[u+"Team"]:y,[h+"Team"]:p[h+"Team"],["usedSubIds_"+u]:Re})})})}document.body.appendChild(M),F()}function Z($,g,y){const b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const w=(E,L,S)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${L};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${S}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${b[E.job]||"#555"};border:3px solid ${L};position:relative;overflow:hidden;margin:0 auto">
        ${He(E)?`<img src="${He(E)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(E.name||"").slice(0,12)}</div>
    </div>`;v.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${w(g,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${w($,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(v);let k=!1;const z=()=>{k||(k=!0,v.remove(),setTimeout(()=>y(),50))};v.addEventListener("click",z),setTimeout(z,2200)}function ge(){var g;const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",$.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[h+"Name"]}</div>
      <div style="width:min(90vw,420px)">${lt(p[h+"Team"],p[h+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild($),(g=$.querySelector("#pvp-opp-close"))==null||g.addEventListener("click",()=>$.remove())}function de(){var y;const $=p.log||[],g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",g.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${$.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...$].reverse().map(b=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${b.type==="goal"?"#FFD700":b.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${b.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(g),(y=g.querySelector("#pvp-hist-close"))==null||y.addEventListener("click",()=>g.remove())}async function me(){if(p.phase!==u+"-attack")return;const $=u==="p1"?"p2":"p1",g=(p.round||0)+1,y=[...p.log||[]];y.push({type:"info",text:`⏭️ ${p[u+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const b=qe(p),v=Te($),w=b||!v?"finished":$+"-attack";await K({["selected_"+u]:[],modifiers:{...p.modifiers,[u]:{}},pendingAttack:null,phase:w,attacker:$,round:g,log:y}),w==="finished"&&await ze(p)}async function oe(){const $=p[u+"Team"],g=!["GK","DEF","MIL","ATT"].some(w=>(p[h+"Team"][w]||[]).some(k=>!k.used)),y=(p["selected_"+u]||[]).map(w=>{const k=($[w._role]||[]).find(F=>F.cardId===w.cardId)||w,z=g&&["GK","DEF"].includes(w._role),E=$[w._role]||[],L=E.findIndex(F=>F.cardId===w.cardId),S=st(E.length),M=L>=0?S[L]:k._col??1;return{...k,_line:w._role,_col:M,...z?{note_a:Math.max(1,Number(k.note_a)||0)}:{}}});if(!y.length)return;const b=Kt(y,p.modifiers[u]||{});D(u,y.map(w=>w.cardId)),y.forEach(w=>{const k=($[w._role]||[]).find(z=>z.cardId===w.cardId);k&&(k.used=!0)}),p["selected_"+u]=[],xe();const v=[...p.log||[]];if(g){const w=(p[u+"Score"]||0)+1,k=y.map(M=>({name:M.name,note:Se(M,M._line||"ATT"),portrait:He(M),job:M.job}));v.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:k,homeTotal:b.total,aiTotal:0});const z=(p.round||0)+1,E=u==="p1"?"p2":"p1",L={...p,[u+"Team"]:$,[u+"Score"]:w},S=qe(L);P.add(z),Ee(k,w,p[h+"Score"]||0,!0,async()=>{await K({[u+"Team"]:$,[u+"Score"]:w,["selected_"+u]:[],modifiers:{...p.modifiers,[u]:{}},pendingAttack:null,phase:S?"finished":E+"-attack",attacker:E,round:z,log:v}),S&&await ze({...p,[u+"Score"]:w})});return}v.push({type:"pending",text:`⚔️ ${p[u+"Name"]} attaque (${b.total})`}),await K({[u+"Team"]:$,[h+"Team"]:p[h+"Team"],pendingAttack:{...b,players:y,side:u},["selected_"+u]:[],modifiers:{...p.modifiers,[u]:{}},phase:h+"-defense",log:v})}async function ue(){const $=p[u+"Team"],g=(p["selected_"+u]||[]).map(U=>{const G=($[U._role]||[]).find(ye=>ye.cardId===U.cardId)||U,W=$[U._role]||[],te=W.findIndex(ye=>ye.cardId===U.cardId),ee=st(W.length),fe=te>=0?ee[te]:G._col??1;return{...G,_line:U._role,_col:fe}}),y=Vt(g,p.modifiers[u]||{});D(u,g.map(U=>U.cardId)),g.forEach(U=>{const G=($[U._role]||[]).find(W=>W.cardId===U.cardId);G&&(G.used=!0)}),p["selected_"+u]=[],xe();const b=Yt(p.pendingAttack.total,y.total,p.modifiers[u]||{}),v=p.pendingAttack.side,w=b==="attack"||(b==null?void 0:b.goal),k=v==="p1"?"p2":"p1",z=(p.round||0)+1,E=(p.pendingAttack.players||[]).map(U=>({name:U.name,note:Se(U,U._line||"ATT"),portrait:He(U),job:U.job})),L=[...p.log||[]];L.push({type:"duel",isGoal:w,homeScored:w&&v===u,text:w?`⚽ BUT de ${p[v+"Name"]} ! (${p.pendingAttack.total} vs ${y.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${y.total})`,homePlayers:E,aiPlayers:g.map(U=>({name:U.name,note:Se(U,U._line||"DEF"),portrait:He(U),job:U.job})),homeTotal:p.pendingAttack.total,aiTotal:y.total});const S=w?(p[v+"Score"]||0)+1:p[v+"Score"]||0,M={...p,[u+"Team"]:$,[v+"Score"]:S},F=qe(M),Y=F?"finished":k+"-attack",J=async()=>{await K({[u+"Team"]:$,[h+"Team"]:p[h+"Team"],[v+"Score"]:S,["selected_"+u]:[],modifiers:{...p.modifiers,[u]:{}},pendingAttack:null,phase:Y,attacker:k,round:z,log:L}),(Y==="finished"||F)&&await ze({...p,[v+"Score"]:S})};if(w){const U=v===u,G=U?S:p[u+"Score"]||0,W=U?p[h+"Score"]||0:S;P.add(z),Ee(E,G,W,U,J)}else await J()}function Le($){return["MIL","ATT"].some(g=>($[g]||[]).some(y=>!y.used))}function Ie($){return["GK","DEF","MIL","ATT"].some(g=>($[g]||[]).some(y=>!y.used))}function Ce($){return Ie($)&&!Le($)}function Te($){const g=p[$+"Team"],y=p[($==="p1"?"p2":"p1")+"Team"];return!!(Le(g)||!Ie(y)&&Ce(g))}function qe($){const g=["MIL","ATT"].some(L=>($.p1Team[L]||[]).some(S=>!S.used)),y=["MIL","ATT"].some(L=>($.p2Team[L]||[]).some(S=>!S.used)),b=Ie($.p1Team),v=Ie($.p2Team);return!g&&!(!v&&b)&&(!y&&!(!b&&v))}function Pe($){const g=$.p1Score||0,y=$.p2Score||0;return g===y?null:g>y?c.home_id:c.away_id}async function ze($){try{const g=Pe($),y=g?c.home_id===g?c.away_id:c.home_id:null;await T.from("matches").update({status:"finished",winner_id:g,home_score:$.p1Score||0,away_score:$.p2Score||0}).eq("id",i),g&&y&&updateEvolutiveCards(g,y).catch(()=>{})}catch(g){console.error("[PvP] finishMatch:",g)}}function B(){var v;const $=p[u+"Score"],g=p[h+"Score"],y=$>g,b=$===g;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${y?"🏆":b?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${y?"Victoire !":b?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${$} - ${g}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(v=document.getElementById("pvp-home"))==null||v.addEventListener("click",()=>{try{T.removeChannel(V)}catch{}Ve(e),o("home")})}xe()}const Vn=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:vi,resumePvpMatch:Kn},Symbol.toStringTag,{value:"Module"}));async function Yn(e,t,i,n){var d,s;try{const r=(s=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:s.id;try{(T.getChannels?T.getChannels():[]).forEach(f=>{const a=f.topic||"";(a.includes("matchmaking")||a.includes("pvp-match"))&&T.removeChannel(f)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}r&&(await T.rpc("cancel_matchmaking",{p_user_id:r}).catch(()=>{}),await T.from("matchmaking_queue").delete().eq("user_id",r).then(()=>{},()=>{}))}catch{}await si(e,t,"random",({deckId:r,formation:l,starters:f,subsRaw:a,gcCardsEnriched:o,gcDefs:x,stadiumDef:u})=>{const h=_=>Wn(e,t,r,l,f,a,_,x||[],i,n);if(!o.length){h([]);return}ai(e,o,h)})}async function Wn(e,t,i,n,d,s,r=[],l=[],f,a){var V;const{state:o,navigate:x,toast:u}=t,h=o.profile.id;let _=!1,m=null;et(e);try{await T.rpc("cancel_matchmaking",{p_user_id:h})}catch{}try{await T.from("matchmaking_queue").delete().eq("user_id",h)}catch{}const c=(K,ne,ie,Q)=>{var N;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">⚽ Match ami</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">vs ${a}</div>
        <div style="display:flex;gap:24px;align-items:center">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:#1A6B3C;display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid #22c55e">
              ✅
            </div>
            <div style="font-size:12px;font-weight:700">${o.profile.club_name||o.profile.pseudo}</div>
            <div style="font-size:11px;color:#22c55e">Prêt</div>
          </div>
          <div style="font-size:28px;font-weight:900;color:#FFD700">VS</div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:${ne?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${ne?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${ne?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${a}</div>
            <div style="font-size:11px;color:${ne?"#22c55e":"#aaa"}">${ne?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!ne&&K?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(N=document.getElementById("lobby-cancel"))==null||N.addEventListener("click",async()=>{_=!0,m&&(T.removeChannel(m),m=null),ie&&await T.from("friend_match_invites").update({status:"declined"}).eq("id",ie),Ve(e),x("home")})},A=async(K,ne)=>{_=!0,m&&(T.removeChannel(m),m=null),await new Promise(ie=>setTimeout(ie,600)),e.isConnected&&Jn(e,t,K,ne,r,l)},{data:p}=await T.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${h},invitee_id.eq.${f}),and(inviter_id.eq.${f},invitee_id.eq.${h})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let I,q;if(p&&p.inviter_id===f)q=!1,I=p.id,await T.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",I);else{q=!0;const{data:K,error:ne}=await T.from("friend_match_invites").insert({inviter_id:h,invitee_id:f,friend_id:f,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(ne||!K){u("Erreur création invitation","error"),Ve(e),x("home");return}I=K.id}if(c(!0,!q,I),!q){const K={home_id:f,away_id:h,home_deck_id:p.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},ne=await T.from("matches").insert(K).select().single(),ie=ne.data;if(!ie){u("Erreur création match: "+(((V=ne.error)==null?void 0:V.message)||""),"error"),Ve(e),x("home");return}await T.from("friend_match_invites").update({match_id:ie.id,status:"matched"}).eq("id",I),A(ie.id,!1);return}let C=!1;const P=K=>{_||C||(K.status==="matched"&&K.match_id?(C=!0,clearInterval(j),clearInterval(R),A(K.match_id,!0)):K.status==="declined"?(clearInterval(j),clearInterval(R),u(`${a} a décliné l'invitation`,"warning"),Ve(e),x("home")):K.invitee_ready&&c(!0,!0,I))},j=setInterval(()=>{if(_){clearInterval(j);return}T.from("matchmaking_queue").delete().eq("user_id",h).then(()=>{},()=>{})},3e3),R=setInterval(async()=>{if(_||C){clearInterval(R);return}const{data:K}=await T.from("friend_match_invites").select("*").eq("id",I).maybeSingle();K&&P(K)},1200);m=T.channel("friend-invite-"+I).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${I}`},K=>P(K.new)).subscribe()}async function Jn(e,t,i,n,d=[],s=[]){const{state:r,navigate:l,toast:f}=t,a=n?"p1":"p2",o=n?"p2":"p1",x=(d||[]).map(B=>B.id),u=(d||[]).map(B=>({id:B.id,gc_type:B.gc_type,_gcDef:B._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await T.from("matches").select("*").eq("id",i).single();if(!h){f("Match introuvable","error"),l("home");return}async function _(){const[{data:B},{data:$},{data:g},{data:y}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]),b=E=>{const L=Number(E.evolution_bonus)||0;return{cardId:E.card_id,position:E.position,id:E.id,firstname:E.firstname,name:E.surname_encoded,country_code:E.country_code,club_id:E.club_id,job:E.job,job2:E.job2,note_g:(Number(E.note_g)||0)+(E.job==="GK"||E.job2==="GK"&&Number(E.note_g)>0?L:0),note_d:(Number(E.note_d)||0)+(E.job==="DEF"||E.job2==="DEF"&&Number(E.note_d)>0?L:0),note_m:(Number(E.note_m)||0)+(E.job==="MIL"||E.job2==="MIL"&&Number(E.note_m)>0?L:0),note_a:(Number(E.note_a)||0)+(E.job==="ATT"||E.job2==="ATT"&&Number(E.note_a)>0?L:0),evolution_bonus:L,rarity:E.rarity,skin:E.skin,hair:E.hair,hair_length:E.hair_length,clubName:E.club_encoded_name||null,clubLogo:E.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},v=((B==null?void 0:B.starters)||[]).map(E=>b(E)),w=(($==null?void 0:$.starters)||[]).map(E=>b(E)),k=(B==null?void 0:B.formation)||"4-4-2",z=($==null?void 0:$.formation)||"4-4-2";return{p1Team:(()=>{const E=vt(v,k);return stadiumDef?Tt(E,stadiumDef):E})(),p2Team:vt(w,z),p1Subs:(()=>{const E=((B==null?void 0:B.subs)||[]).map(L=>b(L));return stadiumDef&&jt(E,stadiumDef),E})(),p2Subs:(($==null?void 0:$.subs)||[]).map(E=>b(E)),p1Formation:k,p2Formation:z,p1Name:(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?x:[],gc_p2:n?[]:x,gcCardsFull_p1:n?u:[],gcCardsFull_p2:n?[]:u,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let m=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(!m)if(n){m=await _();const{data:B}=await T.from("matches").select("game_state").eq("id",i).single();!(B!=null&&B.game_state)||!Object.keys(B.game_state).length?await T.from("matches").update({game_state:m,turn_user_id:h.home_id}).eq("id",i):m=B.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let B=0;B<60&&!m;B++){await new Promise(g=>setTimeout(g,400));const{data:$}=await T.from("matches").select("game_state").eq("id",i).single();$!=null&&$.game_state&&Object.keys($.game_state).length&&(m=$.game_state)}if(!m){f("Erreur de synchronisation","error"),l("home");return}m.gc_p2=x,m.gcCardsFull_p2=u,await T.from("matches").update({game_state:m}).eq("id",i)}let c=!1,A=!1,p=!1,I=null,q=!1;const C=new Set,P=new Set;function j(B){var E,L;try{T.removeChannel(R)}catch{}const $=m[a+"Score"]||0,g=m[o+"Score"]||0;if(!p){p=!0;const S=B.winner_id||($>g?r.profile.id:g>$?"opp":null),M=S===r.profile.id?"win":S?"loss":null;M&&ni(()=>Promise.resolve().then(()=>oo),void 0).then(F=>F.applyOwnEvolution(r.profile.id,M)).catch(()=>{})}if(!A){const S=m.p1Score||0,M=m.p2Score||0,F=(m.usedGc_p1||[]).length,Y=(m.usedGc_p2||[]).length,J=B.winner_id||(S>M?h.home_id:M>S?h.away_id:null);(J?r.profile.id===J:r.profile.id<(n?h.away_id:h.home_id))&&(A=!0,Ji({player1Id:h.home_id,player2Id:h.away_id,score1:S,score2:M,gc1:F,gc2:Y}).catch(G=>console.warn("[FriendMatch] updateStats:",G)))}let y,b;B.winner_id?(y=B.winner_id===r.profile.id,b=!1):B.forfeit?(y=$>g,b=!1):(b=$===g,y=$>g),(E=document.getElementById("pvp-end-overlay"))==null||E.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=b?"🤝":y?"🏆":"😞",k=b?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",z=b?"#fff":y?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${z}">${k}</div>
      <div style="font-size:18px">${m[a+"Name"]} ${$} – ${g} ${m[o+"Name"]}</div>
      ${B.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(L=v.querySelector("#pvp-end-home"))==null||L.addEventListener("click",()=>{v.remove(),Ve(e),l("home")})}const R=T.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},B=>{const $=B.new;try{if($.status==="finished"||$.forfeit){if(c)return;c=!0,I&&(clearInterval(I),I=null),$.game_state&&(m=$.game_state),j($);return}if($.game_state){const g=m;m=$.game_state;const y=m._lastGC;if(y&&y.seq&&!P.has(y.seq)&&(P.add(y.seq),y.by!==a)){Ee(y.type,y.by,()=>re());return}const b=g[a+"Score"]||0,v=g[o+"Score"]||0,w=m[a+"Score"]||0,k=m[o+"Score"]||0,z=w>b,E=k>v;if((z||E)&&!C.has(m.round)){C.add(m.round);const L=[...m.log||[]].reverse().find(M=>M.isGoal),S=((L==null?void 0:L.homePlayers)||[]).map(M=>({name:M.name,note:M.note,portrait:M.portrait,job:M.job}));ve(S,w,k,z,()=>re());return}re()}}catch(g){console.error("[PvP] crash:",g)}}).subscribe();async function V(B){Object.assign(m,B),m.lastActionAt=new Date().toISOString();const{error:$}=await T.from("matches").update({game_state:m}).eq("id",i);$&&f("Erreur de synchronisation","error");try{re()}catch(g){console.error("[PvP] renderPvpScreen crash:",g)}}async function K(){if(c)return;c=!0,I&&(clearInterval(I),I=null);const B=n?h.away_id:h.home_id,$=n?"p2":"p1",g=n?"p1":"p2",y={...m,[$+"Score"]:3,[g+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:B,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",i)}catch{}try{T.removeChannel(R)}catch{}setTimeout(()=>{Ve(e),l("home")},800)}const ne={BOOST_STAT:({value:B=1,count:$=1,roles:g=[]},y,b)=>{const v=y[a+"Team"],w=Object.entries(v).filter(([k])=>!g.length||g.includes(k)).flatMap(([k,z])=>z.filter(E=>!E.used).map(E=>({...E,_line:k})));if(!w.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),b(y);return}ie(w,$,`Choisir ${$} joueur(s) à booster (+${B})`,k=>{k.forEach(z=>{const E=(v[z._line]||[]).find(L=>L.cardId===z.cardId);E&&(E.boost=(E.boost||0)+B,y.log.push({text:`⚡ +${B} sur ${E.name}`,type:"info"}))}),y[a+"Team"]=v,b(y)})},DEBUFF_STAT:({value:B=1,count:$=1,roles:g=[],target:y="ai"},b,v)=>{const w=y==="home"?a:o,k=b[w+"Team"],z=y==="home"?"allié":"adverse",E=Object.entries(k).filter(([L])=>!g.length||g.includes(L)).flatMap(([L,S])=>S.map(M=>({...M,_line:L})));if(!E.length){b.log.push({text:`🎯 Aucun joueur ${z}`,type:"info"}),v(b);return}ie(E,$,`Choisir ${$} joueur(s) ${z}(s) (-${B})`,L=>{L.forEach(S=>{const M=(k[S._line]||[]).find(F=>F.cardId===S.cardId);M&&(M.boost=(M.boost||0)-B,b.log.push({text:`🎯 -${B} sur ${M.name}`,type:"info"}))}),b[w+"Team"]=k,v(b)})},GRAY_PLAYER:({count:B=1,roles:$=[],target:g="ai"},y,b)=>{const v=g==="home"?a:o,w=y[v+"Team"],k=g==="home"?"allié":"adverse",z=Object.entries(w).filter(([E])=>!$.length||$.includes(E)).flatMap(([E,L])=>L.filter(S=>!S.used).map(S=>({...S,_line:E})));if(!z.length){y.log.push({text:`❌ Aucun joueur ${k}`,type:"info"}),b(y);return}ie(z,B,`Choisir ${B} joueur(s) ${k}(s) à exclure`,E=>{const L="usedCardIds_"+v,S=new Set(y[L]||[]);E.forEach(M=>{const F=(w[M._line]||[]).find(Y=>Y.cardId===M.cardId);F&&(F.used=!0,S.add(M.cardId),y.log.push({text:`❌ ${F.name} exclu !`,type:"info"}))}),y[L]=[...S],y[v+"Team"]=w,b(y)})},REVIVE_PLAYER:({count:B=1,roles:$=[]},g,y)=>{const b=g[a+"Team"],v=Object.entries(b).filter(([w])=>!$.length||$.includes(w)).flatMap(([w,k])=>k.filter(z=>z.used).map(z=>({...z,_line:w})));if(!v.length){g.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(g);return}ie(v,B,`Choisir ${B} joueur(s) à ressusciter`,w=>{w.forEach(k=>{const z=(b[k._line]||[]).find(E=>E.cardId===k.cardId);z&&(z.used=!1,g.log.push({text:`💫 ${z.name} ressuscité !`,type:"info"}))}),g[a+"Team"]=b,y(g)})},REMOVE_GOAL:({},B,$)=>{const g=o+"Score";B[g]>0?(B[g]--,B.log.push({text:"🚫 Dernier but annulé !",type:"info"})):B.log.push({text:"🚫 Aucun but à annuler",type:"info"}),$(B)},ADD_GOAL_DRAW:({},B,$)=>{B[a+"Score"]===B[o+"Score"]?(B[a+"Score"]++,B.log.push({text:"🎯 But bonus !",type:"info"})):B.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),$(B)},ADD_SUB:({value:B=1},$,g)=>{$.maxSubs=($.maxSubs||3)+B,$.log.push({text:`🔄 +${B} remplacement(s)`,type:"info"}),g($)},CUSTOM:({},B,$)=>$(B)};function ie(B,$,g,y){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var z,E;const k=B.map(L=>{const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[L._line]||"#555",M=Se(L,L._line)+(L.boost||0),Y=v.find(U=>U.cardId===L.cardId)?"#FFD700":"rgba(255,255,255,0.25)",J=L.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${L.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${Y};background:${S};overflow:hidden;cursor:pointer;${J}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${L.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${M}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${L._line}</div>
        </div>`}).join("");b.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${g}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v.length}/${$}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${k}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${v.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${v.length}/${$})
          </button>
        </div>`,(z=b.querySelector("#pp-close"))==null||z.addEventListener("click",()=>b.remove()),b.querySelectorAll(".pp-item").forEach(L=>{L.addEventListener("click",()=>{const S=L.dataset.cid,M=B.find(Y=>Y.cardId===S),F=v.findIndex(Y=>Y.cardId===S);M&&(F>-1?v.splice(F,1):v.length<$&&v.push(M),w())})}),(E=b.querySelector("#pp-confirm"))==null||E.addEventListener("click",()=>{b.remove(),y(v)})}w(),document.body.appendChild(b)}async function Q(B,$){const y=(m["gcCardsFull_"+a]||[]).find(k=>k.id===B),b=(y==null?void 0:y._gcDef)||(m.gcDefs||[]).find(k=>{var z;return k.name===$||((z=k.name)==null?void 0:z.toLowerCase().trim())===($==null?void 0:$.toLowerCase().trim())}),v=[...m["usedGc_"+a]||[],B],w={type:$,by:a,seq:(m._gcAnimSeq||0)+1};P.add(w.seq),Ee($,a,async()=>{if(b!=null&&b.effect_type&&b.effect_type!=="CUSTOM"){const z=ne[b.effect_type];if(z){const E={...m};z(b.effect_params||{},E,async L=>{L["usedGc_"+a]=v,L._lastGC=w,L._gcAnimSeq=w.seq,await V(L)});return}}const k={...m};switch($){case"Remplacement+":k.maxSubs=(k.maxSubs||3)+1,k.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const z=o+"Score";k[z]>0&&(k[z]--,k.log.push({text:"🚫 But annulé",type:"info"}));break}}k["usedGc_"+a]=v,k._lastGC=w,k._gcAnimSeq=w.seq,await V(k)})}function N(B,$){const g="usedCardIds_"+B,y=new Set(m[g]||[]);$.forEach(b=>y.add(b)),m[g]=[...y]}function D(){for(const B of["p1","p2"]){const $=new Set(m["usedCardIds_"+B]||[]),g=m[B+"Team"];if(g)for(const y of["GK","DEF","MIL","ATT"])(g[y]||[]).forEach(b=>{b.used=$.has(b.cardId)})}}function re(){var Ge,We,ot,pt,ut,ft;if(m.phase==="reveal")return xe();if(m.phase==="midfield")return we();if(m.phase==="finished")return ze();const B=m[a+"Team"],$=m[o+"Team"];D();const g=m[a+"Score"],y=m[o+"Score"],b=m[a+"Name"],v=m[o+"Name"],w=m.phase===a+"-attack",k=m.phase===a+"-defense",z=Array.isArray(m["selected_"+a])?m["selected_"+a]:[],E=z.map(le=>le.cardId),L=window.innerWidth>=700,S=m[a+"Subs"]||[],M=m["usedSubIds_"+a]||[],F=S.filter(le=>!M.includes(le.cardId)),Y=m["gcCardsFull_"+a]||[],J=m["usedGc_"+a]||[],U=Y.filter(le=>!J.includes(le.id)),G=m.boostOwner===a&&!m.boostUsed,W=!["GK","DEF","MIL","ATT"].some(le=>($[le]||[]).some(X=>!X.used)),te=[...B.MIL||[],...B.ATT||[]].filter(le=>!le.used),ee=w&&W&&te.length===0?[...B.GK||[],...B.DEF||[]].filter(le=>!le.used).map(le=>le.cardId):[];function fe(le,X,O){var mt,kt;const ae=le._gcDef,he={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ae==null?void 0:ae.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",$e={purple:"#b06ce0",light_blue:"#00d4ef"}[ae==null?void 0:ae.color]||"#b06ce0",Qe=(ae==null?void 0:ae.name)||le.gc_type,Ze=(ae==null?void 0:ae.effect)||((mt=Oe[le.gc_type])==null?void 0:mt.desc)||"",tt=ae!=null&&ae.image_url?`/icons/${ae.image_url}`:null,rt=((kt=Oe[le.gc_type])==null?void 0:kt.icon)||"⚡",_t=Math.round(O*.22),$t=Math.round(O*.22),dt=O-_t-$t,gt=Qe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${le.id}" data-gc-type="${le.gc_type}"
        style="box-sizing:border-box;width:${X}px;height:${O}px;border-radius:10px;border:2px solid ${$e};background:${he};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${_t}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${gt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${X-6}px">${Qe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${dt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${tt?`<img src="${tt}" style="max-width:${X-10}px;max-height:${dt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(dt*.55)}px">${rt}</span>`}
        </div>
        <div style="height:${$t}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ze.slice(0,38)}</span>
        </div>
      </div>`}function ye(le,X){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${le}px;height:${X}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(X*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(X*.2)}px">⚡</div>
        <div style="font-size:${Math.round(X*.09)}px;color:#000;font-weight:900">+${m.boostValue}</div>
      </div>`}const be=(le,X)=>X?ye(130,175):fe(le,130,175),ke=(le,X)=>X?ye(68,95):fe(le,68,95),Be=L?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Fe=w?Ce(a)?`<button id="pvp-action" style="${Be};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${z.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Be};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:k?`<button id="pvp-action" style="${Be};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${z.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,Me=w&&!Ce(a)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||k?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${z.length}/3 sélectionné(s)</div>`:"",je=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${L?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${F.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':F.map(le=>`<div class="pvp-sub-btn" data-sub-id="${le.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(le,L?76:44,L?100:58)}</div>`).join("")}
    </div>`,Ae=w?"attack":k?"defense":"idle",Ne=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ct(B,m[a+"Formation"],Ae,E,300,300,ee)}
      </div>
    </div>`;function Ue(le){if(le.type==="duel"&&(le.homeTotal!=null||le.aiTotal!=null)){const X=(le.homeTotal||0)>=(le.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(le.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(le.homePlayers||[]).map(O=>at(O)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${X?20:14}px;font-weight:900;color:${X?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${le.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${X?14:20}px;font-weight:900;color:${X?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${le.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(le.aiPlayers||[]).map(O=>at(O)).join("")}
            </div>
          </div>
          ${le.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${le.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${le.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${le.type==="goal"?700:400};padding:3px 2px">${le.text||""}</div>`}const Ye=(()=>{var X,O;if(k&&((X=m.pendingAttack)!=null&&X.players)){const ae=m.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${it((ae.players||[]).map(he=>({...he,used:!1})),"#ff6b6b",ae.total)}
        </div>`}if(w&&((O=m.pendingAttack)!=null&&O.players)){const ae=m.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((ae.players||[]).map(he=>({...he,used:!1})),"#00ff88",ae.total)}
        </div>`}const le=(m.log||[]).slice(-1)[0];return le?'<div style="padding:2px 4px">'+Ue(le)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ke=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${g} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ye}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(m.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",L?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${je}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ne}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Fe}${Me}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${U.map(le=>be(le,!1)).join("")}
            ${G?be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ct(B,m[a+"Formation"],Ae,E,300,300,ee)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${U.map(le=>ke(le,!1)).join("")}
            ${G?ke(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&F.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&F.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&F.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&F.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${F.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(m["usedSubIds_"+a]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(m["usedSubIds_"+a]||[]).length}/${m.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Fe}${Me}</div>
        </div>
      </div>`;function Re(){const le=e.querySelector(".match-screen");if(!le)return;const X=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);le.style.height=X+"px",le.style.minHeight=X+"px",le.style.maxHeight=X+"px",le.style.overflow="hidden";const O=e.querySelector("#mobile-action-bar"),ae=e.querySelector("#mobile-play-area");O&&ae&&(ae.style.paddingBottom=O.offsetHeight+"px")}if(Re(),setTimeout(Re,120),setTimeout(Re,400),q||(q=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Re),window.visualViewport.addEventListener("scroll",Re)),window.addEventListener("resize",Re)),function(){const X=e.querySelector(".terrain-wrapper svg");X&&(X.removeAttribute("width"),X.removeAttribute("height"),X.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",X.setAttribute("viewBox","-26 -26 352 352"),X.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(le=>{le.addEventListener("click",()=>{if(!w&&!k)return;const X=le.dataset.cardId,O=le.dataset.role,ae=(B[O]||[]).find(Ze=>Ze.cardId===X);if(!ae||ae.used)return;const he=ee.includes(X);if(w&&!["MIL","ATT"].includes(O)&&!he)return;Array.isArray(m["selected_"+a])||(m["selected_"+a]=[]);const $e=m["selected_"+a],Qe=$e.findIndex(Ze=>Ze.cardId===X);Qe>-1?$e.splice(Qe,1):$e.length<3&&$e.push({...ae,_role:O}),re()})}),e.querySelectorAll(".match-used-hit").forEach(le=>{le.addEventListener("click",()=>ce(le.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(le=>{le.addEventListener("click",()=>ce())}),(Ge=e.querySelector("#pvp-sub-open"))==null||Ge.addEventListener("click",()=>ce()),e.querySelectorAll(".pvp-gc-mini").forEach(le=>{le.addEventListener("click",()=>se(le.dataset.gcId,le.dataset.gcType))}),(We=e.querySelector("#pvp-boost-card"))==null||We.addEventListener("click",()=>pe()),(ot=e.querySelector("#pvp-action"))==null||ot.addEventListener("click",le=>{w?le.currentTarget.dataset.pass==="1"||!Ce(a)?de():me():k&&oe()}),(pt=e.querySelector("#pvp-quit"))==null||pt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&K()}),(ut=e.querySelector("#pvp-view-opp"))==null||ut.addEventListener("click",()=>Z()),(ft=e.querySelector("#pvp-toggle-history"))==null||ft.addEventListener("click",()=>ge()),I&&(clearInterval(I),I=null),(w||k)&&!c){let le=30,X=!1;const O=()=>document.getElementById("pvp-timer"),ae=()=>{O()&&(O().textContent=le+"s",O().style.color=X?"#ff4444":"#fff")};ae(),I=setInterval(()=>{le--,le<0?X?(clearInterval(I),I=null,w&&!Ce(a)?de():K()):(X=!0,le=15,ae()):ae()},1e3)}}function xe(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${m[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${lt(m[o+"Team"],m[o+"Formation"],null,[],300,300)}</div>
    </div>`,a==="p1"&&setTimeout(async()=>{await V({phase:"midfield"})},5e3)}let _e=!1;function we(){if(_e)return;const B=m[a+"Team"].MIL||[],$=m[o+"Team"].MIL||[];function g(U){return U.reduce((G,W)=>G+Se(W,"MIL"),0)}function y(U){let G=0;for(let W=0;W<U.length-1;W++){const te=nt(U[W],U[W+1]);te==="#00ff88"?G+=2:te==="#FFD700"&&(G+=1)}return G}const b=g(B)+y(B),v=g($)+y($),w=b>=v;function k(U,G,W){return`<div id="duel-row-${W}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${G}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${U.map((te,ee)=>{const fe=ee<U.length-1?nt(te,U[ee+1]):null,ye=!fe||fe==="#ff3333"||fe==="#cc2222",be=fe==="#00ff88"?"+2":fe==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${W}" data-idx="${ee}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Xe({...te,note:Se(te,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ee<U.length-1?`<div class="duel-link duel-link-${W}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":fe};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${fe}`}">
              ${be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${fe}">${be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${W}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${g(U)} + ${y(U)} liens = <b style="color:#fff">${g(U)+y(U)}</b>
        </div>
      </div>`}et(e),e.innerHTML=`
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
      ${k(B,m[a+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${k($,m[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const z=(U,G)=>e.querySelectorAll(U).forEach((W,te)=>{setTimeout(()=>{W.style.opacity="1",W.style.transform="translateY(0) scale(1)"},G+te*90)});z(".duel-card-me",150),z(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((U,G)=>setTimeout(()=>{U.style.opacity="1"},G*70)),900),setTimeout(()=>{const U=e.querySelector("#pvp-vs");U&&(U.style.opacity="1",U.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(G=>G.style.opacity="1")},1250);function E(U,G,W){const te=document.getElementById(U);if(!te)return;const ee=performance.now(),fe=ye=>{const be=Math.min(1,(ye-ee)/W);te.textContent=Math.round(G*(1-Math.pow(1-be,3))),be<1?requestAnimationFrame(fe):te.textContent=G};requestAnimationFrame(fe)}setTimeout(()=>{E("pvp-score-me",b,800),E("pvp-score-opp",v,800)},1500);const L=m.p1Team.MIL||[],S=m.p2Team.MIL||[],M=g(L)+y(L),F=g(S)+y(S),Y=M>=F?"p1":"p2";let J=m.boostValue;J==null&&(J=ri(),m.boostValue=J,m.boostOwner=Y,m.boostUsed=!1),_e=!0,setTimeout(()=>{const U=e.querySelector("#duel-row-"+(w?"me":"opp")),G=e.querySelector("#duel-row-"+(w?"opp":"me")),W=document.getElementById("pvp-score-me"),te=document.getElementById("pvp-score-opp"),ee=w?W:te,fe=w?te:W;ee&&(ee.style.fontSize="80px",ee.style.color=w?"#FFD700":"#ff6b6b",ee.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),fe&&(fe.style.opacity="0.25"),setTimeout(()=>{U&&(U.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",U.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),G&&(G.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Be;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const be=m.boostOwner===a?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+J+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",ke=a==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+m[a+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+m[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+be+ke,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(Be=document.getElementById("pvp-start-match"))==null||Be.addEventListener("click",async()=>{const Fe=Y;await V({phase:Fe+"-attack",attacker:Fe,round:1,boostValue:J,boostUsed:!1,boostOwner:Fe})})},600)},700)},2800)}function ve(B,$,g,y,b){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(L,S)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${S%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][S%8]}</div>`).join(""),k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${w}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${y?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${$} – ${g}
      </div>
      ${B!=null&&B.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${B.map(L=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${k[L.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${L.portrait?`<img src="${L.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(L.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let z=!1;const E=()=>{z||(z=!0,v.remove(),setTimeout(()=>b(),50))};v.addEventListener("click",E),setTimeout(E,3500)}function Ee(B,$,g){var J,U;const y=(m.gcDefs||[]).find(G=>{var W;return G.name===B||((W=G.name)==null?void 0:W.toLowerCase().trim())===(B==null?void 0:B.toLowerCase().trim())}),b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",w=(y==null?void 0:y.name)||B,k=(y==null?void 0:y.effect)||((J=Oe[B])==null?void 0:J.desc)||"",z=y!=null&&y.image_url?`/icons/${y.image_url}`:null,E=((U=Oe[B])==null?void 0:U.icon)||"⚡",S=$===a?"Vous":m[$+"Name"]||"Adversaire",M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",M.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${S} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${b};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${z?`<img src="${z}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${E}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${k}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(M);let F=!1;const Y=()=>{F||(F=!0,M.remove(),setTimeout(()=>g&&g(),50))};M.addEventListener("click",Y),setTimeout(Y,3e3)}function se(B,$){var M,F,Y,J;const y=(m["gcCardsFull_"+a]||[]).find(U=>U.id===B),b=y==null?void 0:y._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",k=(b==null?void 0:b.name)||$,z=(b==null?void 0:b.effect)||((M=Oe[$])==null?void 0:M.desc)||"Carte spéciale.",E=b!=null&&b.image_url?`/icons/${b.image_url}`:null,L=((F=Oe[$])==null?void 0:F.icon)||"⚡",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",S.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${L}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${z}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(S),(Y=S.querySelector("#pvp-gc-back"))==null||Y.addEventListener("click",()=>S.remove()),(J=S.querySelector("#pvp-gc-use"))==null||J.addEventListener("click",()=>{S.remove(),Q(B,$)})}function pe(){var y;const B=m[a+"Team"],$=Object.entries(B).flatMap(([b,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:b})));if(!$.length)return;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",g.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${m.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${$.map(b=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b._line]||"#555",w=Se(b,b._line)+(b.boost||0);return`<div class="bp-item" data-cid="${b.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${b.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(g),(y=g.querySelector("#bp-close"))==null||y.addEventListener("click",()=>g.remove()),g.querySelectorAll(".bp-item").forEach(b=>{b.addEventListener("click",async()=>{const v=b.dataset.cid,w=$.find(z=>z.cardId===v);if(!w)return;const k=(B[w._line]||[]).find(z=>z.cardId===v);k&&(k.boost=(k.boost||0)+m.boostValue),g.remove(),await V({[a+"Team"]:B,boostUsed:!0})})})}function ce(B=null){var F,Y;if(!(m.phase===a+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const g=m[a+"Team"],y=m["usedSubIds_"+a]||[],b=m.maxSubs||3;if(y.length>=b){f(`Maximum ${b} remplacements atteint`,"warning");return}const v=Object.entries(g).flatMap(([J,U])=>(U||[]).filter(G=>G.used).map(G=>({...G,_line:J}))),w=(m[a+"Subs"]||[]).filter(J=>!y.includes(J.cardId));if(!v.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){f("Aucun remplaçant disponible","warning");return}let k=Math.max(0,v.findIndex(J=>J.cardId===B));const z=((F=v[k])==null?void 0:F._line)||((Y=v[k])==null?void 0:Y.job);let E=Math.max(0,w.findIndex(J=>J.job===z)),L=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function M(){var fe,ye,be,ke,Be,Fe;const J=v[k],U=w[E],G=Math.min(130,Math.round((window.innerWidth-90)/2)),W=Math.round(G*1.35),te=Me=>`background:rgba(255,255,255,0.12);border:none;color:${Me?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Me?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${b})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${te(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${U?Xe({...U,used:!1,boost:0},G,W):"<div>—</div>"}</div>
          <button id="pin-down" style="${te(E>=w.length-1)}" ${E>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${te(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${J?Xe({...J,used:!1,boost:0},G,W):"<div>—</div>"}</div>
          <button id="pout-down" style="${te(k>=v.length-1)}" ${k>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(fe=S.querySelector("#psub-close"))==null||fe.addEventListener("click",()=>S.remove()),(ye=S.querySelector("#pout-up"))==null||ye.addEventListener("click",()=>{k>0&&(k--,M())}),(be=S.querySelector("#pout-down"))==null||be.addEventListener("click",()=>{k<v.length-1&&(k++,M())}),(ke=S.querySelector("#pin-up"))==null||ke.addEventListener("click",()=>{E>0&&(E--,M())}),(Be=S.querySelector("#pin-down"))==null||Be.addEventListener("click",()=>{E<w.length-1&&(E++,M())});const ee=(Me,je,Ae,Ne)=>{const Ue=S.querySelector("#"+Me);if(!Ue)return;let Ye=0;Ue.addEventListener("touchstart",Ke=>{Ye=Ke.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",Ke=>{const Re=Ke.changedTouches[0].clientY-Ye;if(Math.abs(Re)<30)return;const Ge=je();Re<0&&Ge<Ne-1?(Ae(Ge+1),M()):Re>0&&Ge>0&&(Ae(Ge-1),M())},{passive:!0})};ee("pin-panel",()=>E,Me=>E=Me,w.length),ee("pout-panel",()=>k,Me=>k=Me,v.length),(Fe=S.querySelector("#psub-confirm"))==null||Fe.addEventListener("click",async Me=>{if(Me.preventDefault(),Me.stopPropagation(),L)return;L=!0;const je=v[k],Ae=w[E];if(!je||!Ae)return;const Ne=je._line,Ue=(g[Ne]||[]).findIndex(Re=>Re.cardId===je.cardId);if(Ue===-1){f("Erreur : joueur introuvable","error"),S.remove();return}const Ye={...Ae,_line:Ne,position:je.position,used:!1,boost:0};g[Ne].splice(Ue,1,Ye);const Ke=[...y,Ae.cardId];S.remove(),H(je,Ae,async()=>{await V({[a+"Team"]:g,[o+"Team"]:m[o+"Team"],["usedSubIds_"+a]:Ke})})})}document.body.appendChild(S),M()}function H(B,$,g){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(z,E,L)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${E};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${L}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[z.job]||"#555"};border:3px solid ${E};position:relative;overflow:hidden;margin:0 auto">
        ${He(z)?`<img src="${He(z)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(z.name||"").slice(0,12)}</div>
    </div>`;b.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v($,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(B,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(b);let w=!1;const k=()=>{w||(w=!0,b.remove(),setTimeout(()=>g(),50))};b.addEventListener("click",k),setTimeout(k,2200)}function Z(){var $;const B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",B.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${m[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${lt(m[o+"Team"],m[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(B),($=B.querySelector("#pvp-opp-close"))==null||$.addEventListener("click",()=>B.remove())}function ge(){var y;const B=m.log||[],$=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const g=b=>{var w,k,z;if(b.type==="duel"){const E=b.isGoal,L=b.homeScored&&a==="p1"||!b.homeScored&&E&&a==="p2",S=b.homeScored?"#FFD700":E?"#ff6b6b":"rgba(255,255,255,0.3)",M=E?L?"⚽ BUT !":"⚽ BUT adversaire !":(w=b.homePlayers)!=null&&w.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${E?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${S};margin-bottom:4px">
          <div style="font-size:9px;color:${S};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${M}</div>
          ${(k=b.homePlayers)!=null&&k.length?`<div style="margin-bottom:3px">${it(b.homePlayers,"rgba(255,255,255,0.7)",b.homeTotal)}</div>`:""}
          ${(z=b.aiPlayers)!=null&&z.length?`<div style="opacity:0.7">${it(b.aiPlayers,"#ff6b6b",b.aiTotal)}</div>`:""}
        </div>`}return b.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${b.outPlayer?Xe({...b.outPlayer,used:!0,_line:b.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${b.inPlayer?Xe({...b.inPlayer,_line:b.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${b.type==="goal"?"#FFD700":b.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${b.text||""}</div>
      </div>`};$.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${B.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...B].reverse().map(g).join("")}
      </div>`,document.body.appendChild($),(y=$.querySelector("#pvp-hist-close"))==null||y.addEventListener("click",()=>$.remove())}async function de(){if(m.phase!==a+"-attack")return;const B=a==="p1"?"p2":"p1",$=(m.round||0)+1,g=[...m.log||[]];g.push({type:"info",text:`⏭️ ${m[a+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=Te(m),b=Ce(B),v=y||!b?"finished":B+"-attack";await V({["selected_"+a]:[],modifiers:{...m.modifiers,[a]:{}},pendingAttack:null,phase:v,attacker:B,round:$,log:g}),v==="finished"&&await Pe(m)}async function me(){const B=m[a+"Team"],$=!["GK","DEF","MIL","ATT"].some(v=>(m[o+"Team"][v]||[]).some(w=>!w.used)),g=(m["selected_"+a]||[]).map(v=>{const w=(B[v._role]||[]).find(M=>M.cardId===v.cardId)||v,k=$&&["GK","DEF"].includes(v._role),z=B[v._role]||[],E=z.findIndex(M=>M.cardId===v.cardId),L=st(z.length),S=E>=0?L[E]:w._col??1;return{...w,_line:v._role,_col:S,...k?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!g.length)return;const y=Kt(g,m.modifiers[a]||{});N(a,g.map(v=>v.cardId)),g.forEach(v=>{const w=(B[v._role]||[]).find(k=>k.cardId===v.cardId);w&&(w.used=!0)}),m["selected_"+a]=[],re();const b=[...m.log||[]];if($){const v=(m[a+"Score"]||0)+1,w=g.map(S=>({name:S.name,note:Se(S,S._line||"ATT"),portrait:He(S),job:S.job}));b.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:y.total,aiTotal:0});const k=(m.round||0)+1,z=a==="p1"?"p2":"p1",E={...m,[a+"Team"]:B,[a+"Score"]:v},L=Te(E);C.add(k),ve(w,v,m[o+"Score"]||0,!0,async()=>{await V({[a+"Team"]:B,[a+"Score"]:v,["selected_"+a]:[],modifiers:{...m.modifiers,[a]:{}},pendingAttack:null,phase:L?"finished":z+"-attack",attacker:z,round:k,log:b}),L&&await Pe({...m,[a+"Score"]:v})});return}b.push({type:"pending",text:`⚔️ ${m[a+"Name"]} attaque (${y.total})`}),await V({[a+"Team"]:B,[o+"Team"]:m[o+"Team"],pendingAttack:{...y,players:g,side:a},["selected_"+a]:[],modifiers:{...m.modifiers,[a]:{}},phase:o+"-defense",log:b})}async function oe(){const B=m[a+"Team"],$=(m["selected_"+a]||[]).map(J=>{const U=(B[J._role]||[]).find(fe=>fe.cardId===J.cardId)||J,G=B[J._role]||[],W=G.findIndex(fe=>fe.cardId===J.cardId),te=st(G.length),ee=W>=0?te[W]:U._col??1;return{...U,_line:J._role,_col:ee}}),g=Vt($,m.modifiers[a]||{});N(a,$.map(J=>J.cardId)),$.forEach(J=>{const U=(B[J._role]||[]).find(G=>G.cardId===J.cardId);U&&(U.used=!0)}),m["selected_"+a]=[],re();const y=Yt(m.pendingAttack.total,g.total,m.modifiers[a]||{}),b=m.pendingAttack.side,v=y==="attack"||(y==null?void 0:y.goal),w=b==="p1"?"p2":"p1",k=(m.round||0)+1,z=(m.pendingAttack.players||[]).map(J=>({name:J.name,note:Se(J,J._line||"ATT"),portrait:He(J),job:J.job})),E=[...m.log||[]];E.push({type:"duel",isGoal:v,homeScored:v&&b===a,text:v?`⚽ BUT de ${m[b+"Name"]} ! (${m.pendingAttack.total} vs ${g.total})`:`✋ Attaque stoppée (${m.pendingAttack.total} vs ${g.total})`,homePlayers:z,aiPlayers:$.map(J=>({name:J.name,note:Se(J,J._line||"DEF"),portrait:He(J),job:J.job})),homeTotal:m.pendingAttack.total,aiTotal:g.total});const L=v?(m[b+"Score"]||0)+1:m[b+"Score"]||0,S={...m,[a+"Team"]:B,[b+"Score"]:L},M=Te(S),F=M?"finished":w+"-attack",Y=async()=>{await V({[a+"Team"]:B,[o+"Team"]:m[o+"Team"],[b+"Score"]:L,["selected_"+a]:[],modifiers:{...m.modifiers,[a]:{}},pendingAttack:null,phase:F,attacker:w,round:k,log:E}),(F==="finished"||M)&&await Pe({...m,[b+"Score"]:L})};if(v){const J=b===a,U=J?L:m[a+"Score"]||0,G=J?m[o+"Score"]||0:L;C.add(k),ve(z,U,G,J,Y)}else await Y()}function ue(B){return["MIL","ATT"].some($=>(B[$]||[]).some(g=>!g.used))}function Le(B){return["GK","DEF","MIL","ATT"].some($=>(B[$]||[]).some(g=>!g.used))}function Ie(B){return Le(B)&&!ue(B)}function Ce(B){const $=m[B+"Team"],g=m[(B==="p1"?"p2":"p1")+"Team"];return!!(ue($)||!Le(g)&&Ie($))}function Te(B){const $=["MIL","ATT"].some(E=>(B.p1Team[E]||[]).some(L=>!L.used)),g=["MIL","ATT"].some(E=>(B.p2Team[E]||[]).some(L=>!L.used)),y=Le(B.p1Team),b=Le(B.p2Team);return!$&&!(!b&&y)&&(!g&&!(!y&&b))}function qe(B){const $=B.p1Score||0,g=B.p2Score||0;return $===g?null:$>g?h.home_id:h.away_id}async function Pe(B){try{const $=qe(B),g=$?h.home_id===$?h.away_id:h.home_id:null;await T.from("matches").update({status:"finished",winner_id:$,home_score:B.p1Score||0,away_score:B.p2Score||0}).eq("id",i),$&&g&&zi($,g).catch(()=>{})}catch($){console.error("[PvP] finishMatch:",$)}}function ze(){var b;const B=m[a+"Score"],$=m[o+"Score"],g=B>$,y=B===$;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${g?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${g?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${B} - ${$}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(b=document.getElementById("pvp-home"))==null||b.addEventListener("click",()=>{try{T.removeChannel(R)}catch{}Ve(e),l("home")})}re()}const It="#1A6B3C",yt="#D4A017";async function Xn(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await wt(e,t,i);return}await zt(e,t)}async function zt(e,t,i="waiting"){var A;const{state:n}=t,d=n.profile.id,{data:s}=await T.from("mini_league_members").select("league_id").eq("user_id",d),r=(s||[]).map(p=>p.league_id),{data:l,error:f}=await T.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),a=f?(await T.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:l||[],x=(r.length?await T.from("mini_leagues").select("*, mini_league_members(count)").in("id",r).order("created_at",{ascending:!1}):{data:[]}).data||[],u=x.filter(p=>p.status==="waiting"&&!p.is_archived),h=x.filter(p=>p.status==="active"&&!p.is_archived),_=x.filter(p=>p.is_archived||p.status==="finished"),m=a.filter(p=>!r.includes(p.id)),c=[{key:"waiting",label:"🟡 En attente",count:u.length+m.length},{key:"active",label:"🟢 En cours",count:h.length},{key:"archived",label:"📁 Archivées",count:_.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${c.map(p=>`<button class="ml-tab" data-tab="${p.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===p.key?It:"transparent"};background:none;font-size:12px;font-weight:${i===p.key?"900":"600"};color:${i===p.key?It:"#888"};cursor:pointer">${p.label}${p.count?` (${p.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Qn(u,m,d):i==="active"?Zn(h,d):er(_,d)}
    </div>
  </div>`,(A=document.getElementById("ml-create-btn"))==null||A.addEventListener("click",()=>tr(e,t)),e.querySelectorAll(".ml-tab").forEach(p=>p.addEventListener("click",()=>zt(e,t,p.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(p=>p.addEventListener("click",()=>wt(e,t,p.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(p=>p.addEventListener("click",I=>{I.stopPropagation(),mo(e,t,p.dataset.join,p.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(p=>p.addEventListener("click",I=>{I.stopPropagation(),wi(e,t,p.dataset.delete,p.dataset.name,i)}))}function oi(e,t,i=!1){var r,l;const n=e.creator_id===t,d=e.pot||0,s=((l=(r=e.mini_league_members)==null?void 0:r[0])==null?void 0:l.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px">${e.name}</div>
      ${n?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#cc2222;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:#666;margin-bottom:${i?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${s}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${d>0?`<span style="color:${yt};font-weight:700">🏆 ${d.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
  </div>`}function Qn(e,t,i){const n=[];return e.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),n.push(...e.map(d=>oi(d,i,!1)))),t.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),n.push(...t.map(d=>oi(d,i,!0)))),n.length?n.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Zn(e,t){return e.length?e.map(i=>oi(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function er(e,t){return e.length?e.map(i=>oi(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function tr(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var _,m,c,A;const{toast:n}=t,d=document.getElementById("ml-name").value.trim(),s=parseInt(document.getElementById("ml-max").value)||6,r=parseInt(document.getElementById("ml-fee").value)||500,l=((_=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:_.value)||"public",f=((m=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:m.value)||"aller",a=((A=(c=document.getElementById("ml-pwd"))==null?void 0:c.value)==null?void 0:A.trim())||null;if(!d){n("Le nom est obligatoire","error");return}if(r<100){n("Mise minimum : 100 crédits","error");return}if(l==="private"&&!a){n("Mot de passe requis","error");return}const{data:o,error:x}=await T.from("mini_leagues").insert({name:d,creator_id:t.state.profile.id,type:l,password:a,mode:f,max_players:s,entry_fee:r}).select().single();if(x){n("Erreur : "+x.message,"error");return}const{data:u}=await T.from("users").select("credits").eq("id",t.state.profile.id).single();if(((u==null?void 0:u.credits)||0)<r){await T.from("mini_leagues").delete().eq("id",o.id),n(`Crédits insuffisants pour la mise (${r.toLocaleString("fr")} cr.)`,"error");return}await T.from("users").update({credits:u.credits-r}).eq("id",t.state.profile.id),await T.from("mini_leagues").update({pot:r}).eq("id",o.id),await T.from("mini_league_members").insert({league_id:o.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=u.credits-r);const h=document.getElementById("nav-credits");h&&(h.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${r.toLocaleString("fr")} cr. déduits.`,"success"),wt(e,t,o.id)})}function ir(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=d=>{t.remove(),e(d)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",d=>{d.key==="Enter"&&n(i.value.trim())}),t.addEventListener("click",d=>{d.target===t&&n(null)})})}async function mo(e,t,i,n){const{toast:d,state:s}=t,r=s.profile.id,{data:l}=await T.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!l){d("Mini League introuvable","error");return}if(l.status!=="waiting"){d("Cette Mini League a déjà démarré","warning");return}const{count:f}=await T.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(f>=l.max_players){d("La Mini League est complète","warning");return}if(n==="private"){const m=await ir();if(m===null)return;if(l.password!==m){d("Mot de passe incorrect","error");return}}const a=l.entry_fee||100,{data:o}=await T.from("users").select("credits").eq("id",r).single();if(((o==null?void 0:o.credits)||0)<a){d(`Crédits insuffisants — il te faut ${a.toLocaleString("fr")} cr. (solde : ${((o==null?void 0:o.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:x}=await T.from("mini_league_members").insert({league_id:i,user_id:r});if(x){d("Erreur inscription : "+x.message,"error");return}const{error:u}=await T.from("users").update({credits:o.credits-a}).eq("id",r),{error:h}=await T.from("mini_leagues").update({pot:(l.pot||0)+a}).eq("id",i);(u||h)&&console.error("Erreur post-inscription:",u,h),s.profile&&(s.profile.credits=o.credits-a);const _=document.getElementById("nav-credits");_&&(_.textContent=`💰 ${(s.profile.credits||0).toLocaleString("fr")}`),d(`✅ Inscrit ! −${a.toLocaleString("fr")} cr. · Pot : ${((l.pot||0)+a).toLocaleString("fr")} cr.`,"success"),wt(e,t,i)}async function or(e,t,i,n){const{toast:d,state:s}=t,r=s.profile.id;if(!confirm(`Te désinscrire et récupérer ${n.toLocaleString("fr")} cr. ?`))return;const{data:l}=await T.from("mini_leagues").select("pot,status").eq("id",i).single();if(!l||l.status!=="waiting"){d("Impossible — la league a déjà démarré","error");return}const{data:f}=await T.from("users").select("credits").eq("id",r).single();await T.from("mini_leagues").update({pot:Math.max(0,(l.pot||0)-n)}).eq("id",i),await T.from("users").update({credits:((f==null?void 0:f.credits)||0)+n}).eq("id",r),await T.from("mini_league_members").delete().eq("league_id",i).eq("user_id",r),s.profile&&(s.profile.credits=((f==null?void 0:f.credits)||0)+n);const a=document.getElementById("nav-credits");a&&(a.textContent=`💰 ${(s.profile.credits||0).toLocaleString("fr")}`),d(`↩️ Désinscrit · +${n.toLocaleString("fr")} cr. remboursés`,"success"),zt(e,t,"waiting")}async function wi(e,t,i,n,d){const{toast:s}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await T.from("mini_league_matches").delete().eq("league_id",i),await T.from("mini_league_members").delete().eq("league_id",i);const{error:r}=await T.from("mini_leagues").delete().eq("id",i);if(r){s("Erreur suppression ("+r.message+")","error");return}s("Mini League supprimée avec succès","success"),zt(e,t,d)}async function nr(e,t,i){await T.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),zt(e,t,"archived")}async function wt(e,t,i){var q,C,P,j,R,V,K,ne,ie;const{state:n,toast:d}=t,s=n.profile.id,[{data:r},{data:l},{data:f}]=await Promise.all([T.from("mini_leagues").select("*").eq("id",i).single(),T.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),T.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!r){d("Introuvable","error"),await zt(e,t);return}const a=(l||[]).some(Q=>Q.user_id===s),o=r.creator_id===s,x=(l||[]).map(Q=>Q.user).filter(Boolean),u=yo(x,f||[]),h=(f||[]).filter(Q=>Q.matchday===r.current_day),_=r.pot||0,m=r.entry_fee||100,c=h.length>0&&h.every(Q=>Q.status==="finished"||Q.status==="bye"),A=r.current_day>=r.total_days,p=(l||[]).find(Q=>Q.user_id===s);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer">‹</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900">${r.name}</div>
        <div style="font-size:11px;color:#888">${r.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${r.max_players} · 💰 ${m} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${r.status==="active"?"#d1fae5":r.status==="finished"?"#f3e8ff":"#fef9c3"};color:${r.status==="active"?"#166534":r.status==="finished"?"#6b21a8":"#854d0e"}">
          ${r.status==="waiting"?"En attente":r.status==="active"?`J${r.current_day}/${r.total_days}`:"Terminée"}
        </div>
        ${_>0?`<div style="font-size:12px;font-weight:900;color:${yt};margin-top:4px">🏆 ${_.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${r.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${x.length}/${r.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${m} cr./joueur → Pot estimé : ${(m*x.length).toLocaleString("fr")} cr. (🥇${Math.floor(m*x.length*.7).toLocaleString("fr")} · 🥈${Math.floor(m*x.length*.2).toLocaleString("fr")} · 🥉${Math.floor(m*x.length*.1).toLocaleString("fr")})</div>
        ${x.map(Q=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${Q.club_color2||It};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${Q.club_color1||"#fff"}">${(Q.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${Q.club_name||Q.pseudo}</div><div style="font-size:11px;color:#999">@${Q.pseudo}</div></div>
            ${Q.id===r.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${o&&x.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${m} cr. × ${x.length})</button>`:""}
        ${o?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${a?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${m} cr.)</button>`}
        ${a&&!o?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${m.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${r.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${r.current_day} / ${r.total_days}</div>
        ${h.map(Q=>Hi(Q,x,s,a)).join("")}
        ${o&&c&&!A?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${o&&c&&A?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(r.status==="active"||r.status==="finished")&&u.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${_>0&&r.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${yt}">💰</th>`:""}
          </tr></thead>
          <tbody>${u.map((Q,N)=>{const D=_>0&&r.status==="finished"?N===0?Math.floor(_*.7):N===1?Math.floor(_*.2):N===2?Math.floor(_*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${Q.userId===s?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${N===0?yt:N<3?It:"#555"}">${["🥇","🥈","🥉"][N]||N+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${Q.clubName}</div><div style="font-size:10px;color:#999">@${Q.pseudo}</div></td>
              <td style="text-align:center">${Q.played}</td><td style="text-align:center">${Q.won}-${Q.drawn}-${Q.lost}</td>
              <td style="text-align:center;color:${Q.goalDiff>=0?It:"#cc2222"}">${Q.goalDiff>=0?"+":""}${Q.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${Q.points}</td>
              ${_>0&&r.status==="finished"?`<td style="text-align:right;font-weight:700;color:${yt}">${D?D.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${r.status!=="waiting"&&r.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,r.status==="active"?r.current_day-1:r.current_day)},(Q,N)=>N+1).reverse().map(Q=>{const N=(f||[]).filter(D=>D.matchday===Q);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${Q}</div>${N.map(D=>Hi(D,x,s,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${o&&!r.is_archived&&r.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const I=r.status==="waiting"?"waiting":r.status==="active"?"active":"archived";if((q=document.getElementById("ml-back"))==null||q.addEventListener("click",()=>zt(e,t,I)),(C=document.getElementById("ml-start-btn"))==null||C.addEventListener("click",()=>rr(e,t,r,x)),(P=document.getElementById("ml-next-day"))==null||P.addEventListener("click",()=>ar(e,t,i)),(j=document.getElementById("ml-finish-btn"))==null||j.addEventListener("click",()=>xo(e,t,i,_,u,x)),(R=document.getElementById("ml-join-now"))==null||R.addEventListener("click",()=>mo(e,t,i,r.type)),(V=document.getElementById("ml-leave-btn"))==null||V.addEventListener("click",()=>or(e,t,i,m)),(K=document.getElementById("ml-delete-btn"))==null||K.addEventListener("click",()=>wi(e,t,i,r.name,"waiting")),(ne=document.getElementById("ml-delete-now"))==null||ne.addEventListener("click",()=>wi(e,t,i,r.name,I)),(ie=document.getElementById("ml-archive-btn"))==null||ie.addEventListener("click",()=>nr(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(Q=>{Q.addEventListener("click",()=>{const N=h.find(D=>D.id===Q.dataset.playMatch);N&&t.navigate("match-mini-league",{mlMatchId:N.id,leagueId:i})})}),r.status==="finished"&&p){const Q=u.findIndex(N=>N.userId===s);Q>=0&&Q<3&&p.prize_amount>0&&setTimeout(()=>sr(e,t,r,p,Q),400)}}function Hi(e,t,i,n,d=!1){const s=x=>t.find(u=>u.id===x);if(e.is_bye){const x=s(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"?"} exempté(e)</div>`}const r=s(e.home_id),l=s(e.away_id),f=e.home_id===i||e.away_id===i,a=f&&e.status==="pending"&&n&&!d,o=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${f?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${f?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(r==null?void 0:r.club_name)||(r==null?void 0:r.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?It:"#999"}">${o}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(l==null?void 0:l.club_name)||(l==null?void 0:l.pseudo)||"?"}</div>
    ${a?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function rr(e,t,i,n){const{toast:d,state:s}=t,r=dr(n.map(a=>a.id),i.mode),l=[];r.forEach((a,o)=>a.forEach(x=>l.push({league_id:i.id,matchday:o+1,home_id:x.home||x.bye,away_id:x.away||null,is_bye:!!x.bye,status:x.bye?"bye":"pending"})));const{error:f}=await T.from("mini_league_matches").insert(l);if(f){d("Erreur calendrier : "+f.message,"error");return}await T.from("mini_leagues").update({status:"active",current_day:1,total_days:r.length}).eq("id",i.id),d(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),wt(e,t,i.id)}async function ar(e,t,i){const{data:n}=await T.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),d=(n.current_day||0)+1;if(d>(n.total_days||0)){await xo(e,t,i,n.pot||0,null,null);return}await T.from("mini_leagues").update({current_day:d}).eq("id",i),t.toast(`Journée ${d} commencée !`,"success"),wt(e,t,i)}async function xo(e,t,i,n,d,s){const{toast:r,state:l}=t;let f=d,a=s;if(!f){const{data:x}=await T.from("mini_league_matches").select("*").eq("league_id",i),{data:u}=await T.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);a=(u||[]).map(h=>h.user).filter(Boolean),f=yo(a,x||[])}const o=[Math.floor(n*.7),Math.floor(n*.2),Math.floor(n*.1)];await Promise.all(f.slice(0,3).map((x,u)=>o[u]?T.from("mini_league_members").update({prize_amount:o[u],prize_claimed:!1}).eq("league_id",i).eq("user_id",x.userId):Promise.resolve())),await T.from("mini_leagues").update({status:"finished"}).eq("id",i),r("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),wt(e,t,i)}async function sr(e,t,i,n,d){var u,h;const{state:s,toast:r}=t,l=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],f=["🥇","🥈","🥉"][d],a=n.prize_amount||l[d]||0,o=n.prize_claimed,x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",x.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${f}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${d===0?"Champion !":d===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${yt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${o?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${yt}">${a.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${d===0?"70%":d===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${o?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${yt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${a.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(x),(u=x.querySelector("#prize-close"))==null||u.addEventListener("click",()=>x.remove()),x.addEventListener("click",_=>{_.target===x&&x.remove()}),(h=x.querySelector("#claim-prize-btn"))==null||h.addEventListener("click",async()=>{const{data:_}=await T.from("users").select("credits").eq("id",s.profile.id).single();await T.from("users").update({credits:((_==null?void 0:_.credits)||0)+a}).eq("id",s.profile.id),await T.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",s.profile.id),s.profile&&(s.profile.credits=((_==null?void 0:_.credits)||0)+a);const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${s.profile.credits.toLocaleString("fr")}`),r(`💰 +${a.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),x.remove(),wt(e,t,i.id)})}function dr(e,t){const n=e.length%2===0?[...e]:[...e,null],d=n.length;let s=n.slice(1);const r=[];for(let l=0;l<d-1;l++){const f=[],a=[n[0],...s];for(let o=0;o<d/2;o++){const x=a[o],u=a[d-1-o];x===null?f.push({bye:u}):u===null?f.push({bye:x}):f.push({home:x,away:u})}r.push(f),s=[s[s.length-1],...s.slice(0,-1)]}return t==="aller-retour"?[...r,...r.map(l=>l.map(f=>f.bye?f:{home:f.away,away:f.home}))]:r}function yo(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const d=i[n.home_id],s=i[n.away_id];!d||!s||(d.played++,s.played++,d.goalsFor+=n.home_score,d.goalsAgainst+=n.away_score,s.goalsFor+=n.away_score,s.goalsAgainst+=n.home_score,n.home_score>n.away_score?(d.won++,d.points+=3,s.lost++):n.home_score<n.away_score?(s.won++,s.points+=3,d.lost++):(d.drawn++,d.points++,s.drawn++,s.points++),d.goalDiff=d.goalsFor-d.goalsAgainst,s.goalDiff=s.goalsFor-s.goalsAgainst)}),Object.values(i).sort((n,d)=>d.points-n.points||d.goalDiff-n.goalDiff||d.goalsFor-n.goalsFor)}async function Ui(e,t,i,n){var d,s;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:n};try{const r=(s=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:s.id;try{(T.getChannels?T.getChannels():[]).forEach(f=>{const a=f.topic||"";(a.includes("matchmaking")||a.includes("pvp-match"))&&T.removeChannel(f)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}r&&(await T.rpc("cancel_matchmaking",{p_user_id:r}).catch(()=>{}),await T.from("matchmaking_queue").delete().eq("user_id",r).then(()=>{},()=>{}))}catch{}await si(e,t,"random",({deckId:r,formation:l,starters:f,subsRaw:a,gcCardsEnriched:o,gcDefs:x,stadiumDef:u})=>{const h=_=>lr(e,t,r,l,f,a,_,x||[],i);if(!o.length){h([]);return}ai(e,o,h)})}async function lr(e,t,i,n,d,s,r=[],l=[],f,a){const{state:o,navigate:x,toast:u}=t,h=o.profile.id;let _=!1,m=null;et(e);try{await T.rpc("cancel_matchmaking",{p_user_id:h})}catch{}try{await T.from("matchmaking_queue").delete().eq("user_id",h)}catch{}const{data:c}=await T.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",f).single();if(!c){u("Match introuvable","error"),Ve(e),x("mini-league");return}if(c.home_id!==h&&c.away_id!==h){u("Tu ne fais pas partie de ce match","error"),Ve(e),x("mini-league");return}const A=c.home_id===h,p=A?c.away:c.home,I=A?c.away_id:c.home_id,q=(P,j)=>{var R;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">Journée ${c.matchday}</div>
        <div style="display:flex;gap:24px;align-items:center">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:#1A6B3C;display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid #22c55e">
              ✅
            </div>
            <div style="font-size:12px;font-weight:700">${o.profile.club_name||o.profile.pseudo}</div>
            <div style="font-size:11px;color:#22c55e">Prêt</div>
          </div>
          <div style="font-size:28px;font-weight:900;color:#FFD700">VS</div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid rgba(255,255,255,0.2)">
              ⏳
            </div>
            <div style="font-size:12px;font-weight:700">${(p==null?void 0:p.club_name)||(p==null?void 0:p.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(R=document.getElementById("lobby-cancel"))==null||R.addEventListener("click",()=>{_=!0,clearInterval(m),Ve(e),x("mini-league")})},C=async(P,j)=>{_=!0,clearInterval(m),await new Promise(R=>setTimeout(R,600)),e.isConnected&&cr(e,t,P,j,r,l)};if(q(),A){let P=c.match_id;if(!P){const{data:R,error:V}=await T.from("matches").insert({home_id:h,away_id:I,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(V||!R){u("Erreur création match","error"),Ve(e),x("mini-league");return}P=R.id,await T.from("mini_league_matches").update({match_id:P,status:"playing"}).eq("id",f)}const j=P;m=setInterval(async()=>{if(_){clearInterval(m);return}const{data:R}=await T.from("matches").select("away_deck_id").eq("id",j).single();R!=null&&R.away_deck_id&&(clearInterval(m),C(j,!0))},1500)}else{let P=c.match_id;m=setInterval(async()=>{if(_){clearInterval(m);return}const{data:j}=await T.from("mini_league_matches").select("match_id").eq("id",f).single();j!=null&&j.match_id&&(clearInterval(m),P=j.match_id,await T.from("matches").update({away_deck_id:i}).eq("id",P),C(P,!1))},1500)}}async function cr(e,t,i,n,d=[],s=[]){var $;const{state:r,navigate:l,toast:f}=t,a=(($=r.params)==null?void 0:$.leagueId)||null,o=n?"p1":"p2",x=n?"p2":"p1",u=(d||[]).map(g=>g.id),h=(d||[]).map(g=>({id:g.id,gc_type:g.gc_type,_gcDef:g._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:_}=await T.from("matches").select("*").eq("id",i).single();if(!_){f("Match introuvable","error"),l("mini-league");return}async function m(){const[{data:g},{data:y},{data:b},{data:v}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:_.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:_.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",_.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",_.away_id).single()]),w=S=>{const M=Number(S.evolution_bonus)||0;return{cardId:S.card_id,position:S.position,id:S.id,firstname:S.firstname,name:S.surname_encoded,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:(Number(S.note_g)||0)+(S.job==="GK"||S.job2==="GK"&&Number(S.note_g)>0?M:0),note_d:(Number(S.note_d)||0)+(S.job==="DEF"||S.job2==="DEF"&&Number(S.note_d)>0?M:0),note_m:(Number(S.note_m)||0)+(S.job==="MIL"||S.job2==="MIL"&&Number(S.note_m)>0?M:0),note_a:(Number(S.note_a)||0)+(S.job==="ATT"||S.job2==="ATT"&&Number(S.note_a)>0?M:0),evolution_bonus:M,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,clubName:S.club_encoded_name||null,clubLogo:S.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},k=((g==null?void 0:g.starters)||[]).map(S=>w(S)),z=((y==null?void 0:y.starters)||[]).map(S=>w(S)),E=(g==null?void 0:g.formation)||"4-4-2",L=(y==null?void 0:y.formation)||"4-4-2";return{p1Team:(()=>{const S=vt(k,E);return stadiumDef?Tt(S,stadiumDef):S})(),p2Team:vt(z,L),p1Subs:(()=>{const S=((g==null?void 0:g.subs)||[]).map(M=>w(M));return stadiumDef&&jt(S,stadiumDef),S})(),p2Subs:((y==null?void 0:y.subs)||[]).map(S=>w(S)),p1Formation:E,p2Formation:L,p1Name:(b==null?void 0:b.club_name)||(b==null?void 0:b.pseudo)||"Joueur 1",p2Name:(v==null?void 0:v.club_name)||(v==null?void 0:v.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?u:[],gc_p2:n?[]:u,gcCardsFull_p1:n?h:[],gcCardsFull_p2:n?[]:h,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let c=_.game_state&&Object.keys(_.game_state).length?_.game_state:null;if(!c)if(n){c=await m();const{data:g}=await T.from("matches").select("game_state").eq("id",i).single();!(g!=null&&g.game_state)||!Object.keys(g.game_state).length?await T.from("matches").update({game_state:c,turn_user_id:_.home_id}).eq("id",i):c=g.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let g=0;g<60&&!c;g++){await new Promise(b=>setTimeout(b,400));const{data:y}=await T.from("matches").select("game_state").eq("id",i).single();y!=null&&y.game_state&&Object.keys(y.game_state).length&&(c=y.game_state)}if(!c){f("Erreur de synchronisation","error"),l("mini-league");return}c.gc_p2=u,c.gcCardsFull_p2=h,await T.from("matches").update({game_state:c}).eq("id",i)}let A=!1,p=!1,I=!1,q=null,C=!1;const P=new Set,j=new Set;function R(g){var S,M;try{T.removeChannel(V)}catch{}const y=c[o+"Score"]||0,b=c[x+"Score"]||0;if(!I){I=!0;const F=g.winner_id||(y>b?r.profile.id:b>y?"opp":null),Y=F===r.profile.id?"win":F?"loss":null;Y&&ni(()=>Promise.resolve().then(()=>oo),void 0).then(J=>J.applyOwnEvolution(r.profile.id,Y)).catch(()=>{})}if(!p){const F=c.p1Score||0,Y=c.p2Score||0,J=(c.usedGc_p1||[]).length,U=(c.usedGc_p2||[]).length,G=g.winner_id||(F>Y?_.home_id:Y>F?_.away_id:null);(G?r.profile.id===G:r.profile.id<(n?_.away_id:_.home_id))&&(p=!0,Ji({player1Id:_.home_id,player2Id:_.away_id,score1:F,score2:Y,gc1:J,gc2:U}).catch(te=>console.warn("[FriendMatch] updateStats:",te)))}let v,w;g.winner_id?(v=g.winner_id===r.profile.id,w=!1):g.forfeit?(v=y>b,w=!1):(w=y===b,v=y>b),(S=document.getElementById("pvp-end-overlay"))==null||S.remove();const k=document.createElement("div");k.id="pvp-end-overlay",k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const z=w?"🤝":v?"🏆":"😞",E=w?"MATCH NUL":v?"VICTOIRE !":"DÉFAITE",L=w?"#fff":v?"#FFD700":"#ff6b6b";k.innerHTML=`
      <div style="font-size:64px">${z}</div>
      <div style="font-size:26px;font-weight:900;color:${L}">${E}</div>
      <div style="font-size:18px">${c[o+"Name"]} ${y} – ${b} ${c[x+"Name"]}</div>
      ${g.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${v?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild(k),(M=k.querySelector("#pvp-end-home"))==null||M.addEventListener("click",()=>{k.remove(),Ve(e),a?l("mini-league",{openLeagueId:a}):l("mini-league")})}const V=T.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},g=>{const y=g.new;try{if(y.status==="finished"||y.forfeit){if(A||(A=!0,q&&(clearInterval(q),q=null),y.game_state&&(c=y.game_state),c.phase==="finished"&&!y.forfeit&&document.getElementById("pvp-home")))return;R(y);return}if(y.game_state){const b=c;c=y.game_state;const v=c._lastGC;if(v&&v.seq&&!j.has(v.seq)&&(j.add(v.seq),v.by!==o)){se(v.type,v.by,()=>xe());return}const w=b[o+"Score"]||0,k=b[x+"Score"]||0,z=c[o+"Score"]||0,E=c[x+"Score"]||0,L=z>w,S=E>k;if((L||S)&&!P.has(c.round)){P.add(c.round);const M=[...c.log||[]].reverse().find(Y=>Y.isGoal),F=((M==null?void 0:M.homePlayers)||[]).map(Y=>({name:Y.name,note:Y.note,portrait:Y.portrait,job:Y.job}));Ee(F,z,E,L,()=>xe());return}xe()}}catch(b){console.error("[PvP] crash:",b)}}).subscribe();async function K(g){Object.assign(c,g),c.lastActionAt=new Date().toISOString();const{error:y}=await T.from("matches").update({game_state:c}).eq("id",i);y&&f("Erreur de synchronisation","error");try{xe()}catch(b){console.error("[PvP] renderPvpScreen crash:",b)}}async function ne(){if(A)return;A=!0,q&&(clearInterval(q),q=null);const g=n?_.away_id:_.home_id,y=n?"p2":"p1",b=n?"p1":"p2",v={...c,[y+"Score"]:3,[b+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:g,home_score:v.p1Score||0,away_score:v.p2Score||0,game_state:v}).eq("id",i)}catch{}try{T.removeChannel(V)}catch{}setTimeout(()=>{Ve(e),l("mini-league")},800)}const ie={BOOST_STAT:({value:g=1,count:y=1,roles:b=[]},v,w)=>{const k=v[o+"Team"],z=Object.entries(k).filter(([E])=>!b.length||b.includes(E)).flatMap(([E,L])=>L.filter(S=>!S.used).map(S=>({...S,_line:E})));if(!z.length){v.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),w(v);return}Q(z,y,`Choisir ${y} joueur(s) à booster (+${g})`,E=>{E.forEach(L=>{const S=(k[L._line]||[]).find(M=>M.cardId===L.cardId);S&&(S.boost=(S.boost||0)+g,v.log.push({text:`⚡ +${g} sur ${S.name}`,type:"info"}))}),v[o+"Team"]=k,w(v)})},DEBUFF_STAT:({value:g=1,count:y=1,roles:b=[],target:v="ai"},w,k)=>{const z=v==="home"?o:x,E=w[z+"Team"],L=v==="home"?"allié":"adverse",S=Object.entries(E).filter(([M])=>!b.length||b.includes(M)).flatMap(([M,F])=>F.map(Y=>({...Y,_line:M})));if(!S.length){w.log.push({text:`🎯 Aucun joueur ${L}`,type:"info"}),k(w);return}Q(S,y,`Choisir ${y} joueur(s) ${L}(s) (-${g})`,M=>{M.forEach(F=>{const Y=(E[F._line]||[]).find(J=>J.cardId===F.cardId);Y&&(Y.boost=(Y.boost||0)-g,w.log.push({text:`🎯 -${g} sur ${Y.name}`,type:"info"}))}),w[z+"Team"]=E,k(w)})},GRAY_PLAYER:({count:g=1,roles:y=[],target:b="ai"},v,w)=>{const k=b==="home"?o:x,z=v[k+"Team"],E=b==="home"?"allié":"adverse",L=Object.entries(z).filter(([S])=>!y.length||y.includes(S)).flatMap(([S,M])=>M.filter(F=>!F.used).map(F=>({...F,_line:S})));if(!L.length){v.log.push({text:`❌ Aucun joueur ${E}`,type:"info"}),w(v);return}Q(L,g,`Choisir ${g} joueur(s) ${E}(s) à exclure`,S=>{const M="usedCardIds_"+k,F=new Set(v[M]||[]);S.forEach(Y=>{const J=(z[Y._line]||[]).find(U=>U.cardId===Y.cardId);J&&(J.used=!0,F.add(Y.cardId),v.log.push({text:`❌ ${J.name} exclu !`,type:"info"}))}),v[M]=[...F],v[k+"Team"]=z,w(v)})},REVIVE_PLAYER:({count:g=1,roles:y=[]},b,v)=>{const w=b[o+"Team"],k=Object.entries(w).filter(([z])=>!y.length||y.includes(z)).flatMap(([z,E])=>E.filter(L=>L.used).map(L=>({...L,_line:z})));if(!k.length){b.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),v(b);return}Q(k,g,`Choisir ${g} joueur(s) à ressusciter`,z=>{z.forEach(E=>{const L=(w[E._line]||[]).find(S=>S.cardId===E.cardId);L&&(L.used=!1,b.log.push({text:`💫 ${L.name} ressuscité !`,type:"info"}))}),b[o+"Team"]=w,v(b)})},REMOVE_GOAL:({},g,y)=>{const b=x+"Score";g[b]>0?(g[b]--,g.log.push({text:"🚫 Dernier but annulé !",type:"info"})):g.log.push({text:"🚫 Aucun but à annuler",type:"info"}),y(g)},ADD_GOAL_DRAW:({},g,y)=>{g[o+"Score"]===g[x+"Score"]?(g[o+"Score"]++,g.log.push({text:"🎯 But bonus !",type:"info"})):g.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),y(g)},ADD_SUB:({value:g=1},y,b)=>{y.maxSubs=(y.maxSubs||3)+g,y.log.push({text:`🔄 +${g} remplacement(s)`,type:"info"}),b(y)},CUSTOM:({},g,y)=>y(g)};function Q(g,y,b,v){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let k=[];function z(){var L,S;const E=g.map(M=>{const F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[M._line]||"#555",Y=Se(M,M._line)+(M.boost||0),U=k.find(W=>W.cardId===M.cardId)?"#FFD700":"rgba(255,255,255,0.25)",G=M.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${M.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${U};background:${F};overflow:hidden;cursor:pointer;${G}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${M.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${Y}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${M._line}</div>
        </div>`}).join("");w.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${b}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${k.length}/${y}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${E}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${k.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${k.length}/${y})
          </button>
        </div>`,(L=w.querySelector("#pp-close"))==null||L.addEventListener("click",()=>w.remove()),w.querySelectorAll(".pp-item").forEach(M=>{M.addEventListener("click",()=>{const F=M.dataset.cid,Y=g.find(U=>U.cardId===F),J=k.findIndex(U=>U.cardId===F);Y&&(J>-1?k.splice(J,1):k.length<y&&k.push(Y),z())})}),(S=w.querySelector("#pp-confirm"))==null||S.addEventListener("click",()=>{w.remove(),v(k)})}z(),document.body.appendChild(w)}async function N(g,y){const v=(c["gcCardsFull_"+o]||[]).find(E=>E.id===g),w=(v==null?void 0:v._gcDef)||(c.gcDefs||[]).find(E=>{var L;return E.name===y||((L=E.name)==null?void 0:L.toLowerCase().trim())===(y==null?void 0:y.toLowerCase().trim())}),k=[...c["usedGc_"+o]||[],g],z={type:y,by:o,seq:(c._gcAnimSeq||0)+1};j.add(z.seq),se(y,o,async()=>{if(w!=null&&w.effect_type&&w.effect_type!=="CUSTOM"){const L=ie[w.effect_type];if(L){const S={...c};L(w.effect_params||{},S,async M=>{M["usedGc_"+o]=k,M._lastGC=z,M._gcAnimSeq=z.seq,await K(M)});return}}const E={...c};switch(y){case"Remplacement+":E.maxSubs=(E.maxSubs||3)+1,E.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const L=x+"Score";E[L]>0&&(E[L]--,E.log.push({text:"🚫 But annulé",type:"info"}));break}}E["usedGc_"+o]=k,E._lastGC=z,E._gcAnimSeq=z.seq,await K(E)})}function D(g,y){const b="usedCardIds_"+g,v=new Set(c[b]||[]);y.forEach(w=>v.add(w)),c[b]=[...v]}function re(){for(const g of["p1","p2"]){const y=new Set(c["usedCardIds_"+g]||[]),b=c[g+"Team"];if(b)for(const v of["GK","DEF","MIL","ATT"])(b[v]||[]).forEach(w=>{w.used=y.has(w.cardId)})}}function xe(){var ot,pt,ut,ft,le,X;if(c.phase==="reveal")return _e();if(c.phase==="midfield")return ve();if(c.phase==="finished")return B();const g=c[o+"Team"],y=c[x+"Team"];re();const b=c[o+"Score"],v=c[x+"Score"],w=c[o+"Name"],k=c[x+"Name"],z=c.phase===o+"-attack",E=c.phase===o+"-defense",L=Array.isArray(c["selected_"+o])?c["selected_"+o]:[],S=L.map(O=>O.cardId),M=window.innerWidth>=700,F=c[o+"Subs"]||[],Y=c["usedSubIds_"+o]||[],J=F.filter(O=>!Y.includes(O.cardId)),U=c["gcCardsFull_"+o]||[],G=c["usedGc_"+o]||[],W=U.filter(O=>!G.includes(O.id)),te=c.boostOwner===o&&!c.boostUsed,ee=!["GK","DEF","MIL","ATT"].some(O=>(y[O]||[]).some(ae=>!ae.used)),fe=[...g.MIL||[],...g.ATT||[]].filter(O=>!O.used),ye=z&&ee&&fe.length===0?[...g.GK||[],...g.DEF||[]].filter(O=>!O.used).map(O=>O.cardId):[];function be(O,ae,he){var Ct,Li;const $e=O._gcDef,Qe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[$e==null?void 0:$e.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ze={purple:"#b06ce0",light_blue:"#00d4ef"}[$e==null?void 0:$e.color]||"#b06ce0",tt=($e==null?void 0:$e.name)||O.gc_type,rt=($e==null?void 0:$e.effect)||((Ct=Oe[O.gc_type])==null?void 0:Ct.desc)||"",_t=$e!=null&&$e.image_url?`/icons/${$e.image_url}`:null,$t=((Li=Oe[O.gc_type])==null?void 0:Li.icon)||"⚡",dt=Math.round(he*.22),gt=Math.round(he*.22),mt=he-dt-gt,kt=tt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${O.id}" data-gc-type="${O.gc_type}"
        style="box-sizing:border-box;width:${ae}px;height:${he}px;border-radius:10px;border:2px solid ${Ze};background:${Qe};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${dt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${kt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ae-6}px">${tt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${mt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${_t?`<img src="${_t}" style="max-width:${ae-10}px;max-height:${mt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(mt*.55)}px">${$t}</span>`}
        </div>
        <div style="height:${gt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${rt.slice(0,38)}</span>
        </div>
      </div>`}function ke(O,ae){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${O}px;height:${ae}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ae*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ae*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ae*.09)}px;color:#000;font-weight:900">+${c.boostValue}</div>
      </div>`}const Be=(O,ae)=>ae?ke(130,175):be(O,130,175),Fe=(O,ae)=>ae?ke(68,95):be(O,68,95),Me=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",je=z?Te(o)?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${L.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Me};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:E?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${L.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${k}</div>`,Ae=z&&!Te(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':z||E?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${L.length}/3 sélectionné(s)</div>`:"",Ne=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${J.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':J.map(O=>`<div class="pvp-sub-btn" data-sub-id="${O.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(O,M?76:44,M?100:58)}</div>`).join("")}
    </div>`,Ue=z?"attack":E?"defense":"idle",Ye=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ct(g,c[o+"Formation"],Ue,S,300,300,ye)}
      </div>
    </div>`;function Ke(O){if(O.type==="duel"&&(O.homeTotal!=null||O.aiTotal!=null)){const ae=(O.homeTotal||0)>=(O.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(O.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(O.homePlayers||[]).map(he=>at(he)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${ae?20:14}px;font-weight:900;color:${ae?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${O.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${ae?14:20}px;font-weight:900;color:${ae?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${O.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(O.aiPlayers||[]).map(he=>at(he)).join("")}
            </div>
          </div>
          ${O.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${O.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${O.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${O.type==="goal"?700:400};padding:3px 2px">${O.text||""}</div>`}const Re=(()=>{var ae,he;if(E&&((ae=c.pendingAttack)!=null&&ae.players)){const $e=c.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${k} ATTAQUE — Défendez !</div>
          ${it(($e.players||[]).map(Qe=>({...Qe,used:!1})),"#ff6b6b",$e.total)}
        </div>`}if(z&&((he=c.pendingAttack)!=null&&he.players)){const $e=c.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it(($e.players||[]).map(Qe=>({...Qe,used:!1})),"#00ff88",$e.total)}
        </div>`}const O=(c.log||[]).slice(-1)[0];return O?'<div style="padding:2px 4px">'+Ke(O)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ge=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${w}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${b} – ${v}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${k}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Re}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(c.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",M?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ge}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ne}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ye}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${je}${Ae}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${W.map(O=>Be(O,!1)).join("")}
            ${te?Be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ge}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ct(g,c[o+"Formation"],Ue,S,300,300,ye)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${W.map(O=>Fe(O,!1)).join("")}
            ${te?Fe(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${z&&J.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${z&&J.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${z&&J.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${z&&J.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${J.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(c["usedSubIds_"+o]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(c["usedSubIds_"+o]||[]).length}/${c.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${je}${Ae}</div>
        </div>
      </div>`;function We(){const O=e.querySelector(".match-screen");if(!O)return;const ae=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);O.style.height=ae+"px",O.style.minHeight=ae+"px",O.style.maxHeight=ae+"px",O.style.overflow="hidden";const he=e.querySelector("#mobile-action-bar"),$e=e.querySelector("#mobile-play-area");he&&$e&&($e.style.paddingBottom=he.offsetHeight+"px")}if(We(),setTimeout(We,120),setTimeout(We,400),C||(C=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",We),window.visualViewport.addEventListener("scroll",We)),window.addEventListener("resize",We)),function(){const ae=e.querySelector(".terrain-wrapper svg");ae&&(ae.removeAttribute("width"),ae.removeAttribute("height"),ae.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ae.setAttribute("viewBox","-26 -26 352 352"),ae.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(O=>{O.addEventListener("click",()=>{if(!z&&!E)return;const ae=O.dataset.cardId,he=O.dataset.role,$e=(g[he]||[]).find(rt=>rt.cardId===ae);if(!$e||$e.used)return;const Qe=ye.includes(ae);if(z&&!["MIL","ATT"].includes(he)&&!Qe)return;Array.isArray(c["selected_"+o])||(c["selected_"+o]=[]);const Ze=c["selected_"+o],tt=Ze.findIndex(rt=>rt.cardId===ae);tt>-1?Ze.splice(tt,1):Ze.length<3&&Ze.push({...$e,_role:he}),xe()})}),e.querySelectorAll(".match-used-hit").forEach(O=>{O.addEventListener("click",()=>H(O.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(O=>{O.addEventListener("click",()=>H())}),(ot=e.querySelector("#pvp-sub-open"))==null||ot.addEventListener("click",()=>H()),e.querySelectorAll(".pvp-gc-mini").forEach(O=>{O.addEventListener("click",()=>pe(O.dataset.gcId,O.dataset.gcType))}),(pt=e.querySelector("#pvp-boost-card"))==null||pt.addEventListener("click",()=>ce()),(ut=e.querySelector("#pvp-action"))==null||ut.addEventListener("click",O=>{z?O.currentTarget.dataset.pass==="1"||!Te(o)?me():oe():E&&ue()}),(ft=e.querySelector("#pvp-quit"))==null||ft.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ne()}),(le=e.querySelector("#pvp-view-opp"))==null||le.addEventListener("click",()=>ge()),(X=e.querySelector("#pvp-toggle-history"))==null||X.addEventListener("click",()=>de()),q&&(clearInterval(q),q=null),(z||E)&&!A){let O=30,ae=!1;const he=()=>document.getElementById("pvp-timer"),$e=()=>{he()&&(he().textContent=O+"s",he().style.color=ae?"#ff4444":"#fff")};$e(),q=setInterval(()=>{O--,O<0?ae?(clearInterval(q),q=null,z&&!Te(o)?me():ne()):(ae=!0,O=15,$e()):$e()},1e3)}}function _e(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${c[x+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${lt(c[x+"Team"],c[x+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await K({phase:"midfield"})},5e3)}let we=!1;function ve(){if(we)return;const g=c[o+"Team"].MIL||[],y=c[x+"Team"].MIL||[];function b(W){return W.reduce((te,ee)=>te+Se(ee,"MIL"),0)}function v(W){let te=0;for(let ee=0;ee<W.length-1;ee++){const fe=nt(W[ee],W[ee+1]);fe==="#00ff88"?te+=2:fe==="#FFD700"&&(te+=1)}return te}const w=b(g)+v(g),k=b(y)+v(y),z=w>=k;function E(W,te,ee){return`<div id="duel-row-${ee}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${te}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${W.map((fe,ye)=>{const be=ye<W.length-1?nt(fe,W[ye+1]):null,ke=!be||be==="#ff3333"||be==="#cc2222",Be=be==="#00ff88"?"+2":be==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ee}" data-idx="${ye}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Xe({...fe,note:Se(fe,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ye<W.length-1?`<div class="duel-link duel-link-${ee}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ke?"rgba(255,255,255,0.12)":be};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ke?"none":`0 0 8px ${be}`}">
              ${Be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${be}">${Be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ee}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${b(W)} + ${v(W)} liens = <b style="color:#fff">${b(W)+v(W)}</b>
        </div>
      </div>`}et(e),e.innerHTML=`
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
      ${E(g,c[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${E(y,c[x+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const L=(W,te)=>e.querySelectorAll(W).forEach((ee,fe)=>{setTimeout(()=>{ee.style.opacity="1",ee.style.transform="translateY(0) scale(1)"},te+fe*90)});L(".duel-card-me",150),L(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((W,te)=>setTimeout(()=>{W.style.opacity="1"},te*70)),900),setTimeout(()=>{const W=e.querySelector("#pvp-vs");W&&(W.style.opacity="1",W.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(te=>te.style.opacity="1")},1250);function S(W,te,ee){const fe=document.getElementById(W);if(!fe)return;const ye=performance.now(),be=ke=>{const Be=Math.min(1,(ke-ye)/ee);fe.textContent=Math.round(te*(1-Math.pow(1-Be,3))),Be<1?requestAnimationFrame(be):fe.textContent=te};requestAnimationFrame(be)}setTimeout(()=>{S("pvp-score-me",w,800),S("pvp-score-opp",k,800)},1500);const M=c.p1Team.MIL||[],F=c.p2Team.MIL||[],Y=b(M)+v(M),J=b(F)+v(F),U=Y>=J?"p1":"p2";let G=c.boostValue;G==null&&(G=ri(),c.boostValue=G,c.boostOwner=U,c.boostUsed=!1),we=!0,setTimeout(()=>{const W=e.querySelector("#duel-row-"+(z?"me":"opp")),te=e.querySelector("#duel-row-"+(z?"opp":"me")),ee=document.getElementById("pvp-score-me"),fe=document.getElementById("pvp-score-opp"),ye=z?ee:fe,be=z?fe:ee;ye&&(ye.style.fontSize="80px",ye.style.color=z?"#FFD700":"#ff6b6b",ye.style.animation="duelPulse .5s ease"+(z?",duelGlow 1.5s ease infinite .5s":"")),be&&(be.style.opacity="0.25"),setTimeout(()=>{W&&(W.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",W.style.zIndex="5"),setTimeout(()=>{const ke=document.getElementById("duel-shock");ke&&(ke.style.animation="shockwave .5s ease-out forwards"),te&&(te.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Me;const ke=document.getElementById("pvp-duel-finale");if(!ke)return;const Be=c.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+G+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Fe=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ke.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(z?"⚽ "+c[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+c[x+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Be+Fe,ke.style.transition="opacity .45s ease",ke.style.opacity="1",ke.style.pointerEvents="auto",(Me=document.getElementById("pvp-start-match"))==null||Me.addEventListener("click",async()=>{const je=U;await K({phase:je+"-attack",attacker:je,round:1,boostValue:G,boostUsed:!1,boostOwner:je})})},600)},700)},2800)}function Ee(g,y,b,v,w){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const z=Array.from({length:10},(M,F)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${F%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][F%8]}</div>`).join(""),E={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};k.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${z}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${v?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${y} – ${b}
      </div>
      ${g!=null&&g.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${g.map(M=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${E[M.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${M.portrait?`<img src="${M.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(M.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(k);let L=!1;const S=()=>{L||(L=!0,k.remove(),setTimeout(()=>w(),50))};k.addEventListener("click",S),setTimeout(S,3500)}function se(g,y,b){var G,W;const v=(c.gcDefs||[]).find(te=>{var ee;return te.name===g||((ee=te.name)==null?void 0:ee.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),w={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",k={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",z=(v==null?void 0:v.name)||g,E=(v==null?void 0:v.effect)||((G=Oe[g])==null?void 0:G.desc)||"",L=v!=null&&v.image_url?`/icons/${v.image_url}`:null,S=((W=Oe[g])==null?void 0:W.icon)||"⚡",F=y===o?"Vous":c[y+"Name"]||"Adversaire",Y=document.createElement("div");Y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",Y.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${k}66}50%{box-shadow:0 0 60px ${k}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${k};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${F} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${k};background:${w};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${z.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${z}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${L?`<img src="${L}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${S}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${E}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(Y);let J=!1;const U=()=>{J||(J=!0,Y.remove(),setTimeout(()=>b&&b(),50))};Y.addEventListener("click",U),setTimeout(U,3e3)}function pe(g,y){var Y,J,U,G;const v=(c["gcCardsFull_"+o]||[]).find(W=>W.id===g),w=v==null?void 0:v._gcDef,k={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[w==null?void 0:w.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",z={purple:"#b06ce0",light_blue:"#00d4ef"}[w==null?void 0:w.color]||"#b06ce0",E=(w==null?void 0:w.name)||y,L=(w==null?void 0:w.effect)||((Y=Oe[y])==null?void 0:Y.desc)||"Carte spéciale.",S=w!=null&&w.image_url?`/icons/${w.image_url}`:null,M=((J=Oe[y])==null?void 0:J.icon)||"⚡",F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",F.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${z};background:${k};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${z}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${E.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${E}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${M}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${L}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(F),(U=F.querySelector("#pvp-gc-back"))==null||U.addEventListener("click",()=>F.remove()),(G=F.querySelector("#pvp-gc-use"))==null||G.addEventListener("click",()=>{F.remove(),N(g,y)})}function ce(){var v;const g=c[o+"Team"],y=Object.entries(g).flatMap(([w,k])=>(k||[]).filter(z=>!z.used).map(z=>({...z,_line:w})));if(!y.length)return;const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",b.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${c.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${y.map(w=>{const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[w._line]||"#555",z=Se(w,w._line)+(w.boost||0);return`<div class="bp-item" data-cid="${w.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${k};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${w.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${z}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(b),(v=b.querySelector("#bp-close"))==null||v.addEventListener("click",()=>b.remove()),b.querySelectorAll(".bp-item").forEach(w=>{w.addEventListener("click",async()=>{const k=w.dataset.cid,z=y.find(L=>L.cardId===k);if(!z)return;const E=(g[z._line]||[]).find(L=>L.cardId===k);E&&(E.boost=(E.boost||0)+c.boostValue),b.remove(),await K({[o+"Team"]:g,boostUsed:!0})})})}function H(g=null){var J,U;if(!(c.phase===o+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const b=c[o+"Team"],v=c["usedSubIds_"+o]||[],w=c.maxSubs||3;if(v.length>=w){f(`Maximum ${w} remplacements atteint`,"warning");return}const k=Object.entries(b).flatMap(([G,W])=>(W||[]).filter(te=>te.used).map(te=>({...te,_line:G}))),z=(c[o+"Subs"]||[]).filter(G=>!v.includes(G.cardId));if(!k.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!z.length){f("Aucun remplaçant disponible","warning");return}let E=Math.max(0,k.findIndex(G=>G.cardId===g));const L=((J=k[E])==null?void 0:J._line)||((U=k[E])==null?void 0:U.job);let S=Math.max(0,z.findIndex(G=>G.job===L)),M=!1;const F=document.createElement("div");F.id="pvp-sub-overlay",F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function Y(){var be,ke,Be,Fe,Me,je;const G=k[E],W=z[S],te=Math.min(130,Math.round((window.innerWidth-90)/2)),ee=Math.round(te*1.35),fe=Ae=>`background:rgba(255,255,255,0.12);border:none;color:${Ae?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ae?"default":"pointer"};flex-shrink:0`;F.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${v.length}/${w})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${fe(S===0)}" ${S===0?"disabled":""}>▲</button>
          <div>${W?Xe({...W,used:!1,boost:0},te,ee):"<div>—</div>"}</div>
          <button id="pin-down" style="${fe(S>=z.length-1)}" ${S>=z.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${S+1}/${z.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${fe(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${G?Xe({...G,used:!1,boost:0},te,ee):"<div>—</div>"}</div>
          <button id="pout-down" style="${fe(E>=k.length-1)}" ${E>=k.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${k.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(be=F.querySelector("#psub-close"))==null||be.addEventListener("click",()=>F.remove()),(ke=F.querySelector("#pout-up"))==null||ke.addEventListener("click",()=>{E>0&&(E--,Y())}),(Be=F.querySelector("#pout-down"))==null||Be.addEventListener("click",()=>{E<k.length-1&&(E++,Y())}),(Fe=F.querySelector("#pin-up"))==null||Fe.addEventListener("click",()=>{S>0&&(S--,Y())}),(Me=F.querySelector("#pin-down"))==null||Me.addEventListener("click",()=>{S<z.length-1&&(S++,Y())});const ye=(Ae,Ne,Ue,Ye)=>{const Ke=F.querySelector("#"+Ae);if(!Ke)return;let Re=0;Ke.addEventListener("touchstart",Ge=>{Re=Ge.touches[0].clientY},{passive:!0}),Ke.addEventListener("touchend",Ge=>{const We=Ge.changedTouches[0].clientY-Re;if(Math.abs(We)<30)return;const ot=Ne();We<0&&ot<Ye-1?(Ue(ot+1),Y()):We>0&&ot>0&&(Ue(ot-1),Y())},{passive:!0})};ye("pin-panel",()=>S,Ae=>S=Ae,z.length),ye("pout-panel",()=>E,Ae=>E=Ae,k.length),(je=F.querySelector("#psub-confirm"))==null||je.addEventListener("click",async Ae=>{if(Ae.preventDefault(),Ae.stopPropagation(),M)return;M=!0;const Ne=k[E],Ue=z[S];if(!Ne||!Ue)return;const Ye=Ne._line,Ke=(b[Ye]||[]).findIndex(We=>We.cardId===Ne.cardId);if(Ke===-1){f("Erreur : joueur introuvable","error"),F.remove();return}const Re={...Ue,_line:Ye,position:Ne.position,used:!1,boost:0};b[Ye].splice(Ke,1,Re);const Ge=[...v,Ue.cardId];F.remove(),Z(Ne,Ue,async()=>{await K({[o+"Team"]:b,[x+"Team"]:c[x+"Team"],["usedSubIds_"+o]:Ge})})})}document.body.appendChild(F),Y()}function Z(g,y,b){const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const k=(L,S,M)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${S};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${M}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${v[L.job]||"#555"};border:3px solid ${S};position:relative;overflow:hidden;margin:0 auto">
        ${He(L)?`<img src="${He(L)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(L.name||"").slice(0,12)}</div>
    </div>`;w.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${k(y,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${k(g,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(w);let z=!1;const E=()=>{z||(z=!0,w.remove(),setTimeout(()=>b(),50))};w.addEventListener("click",E),setTimeout(E,2200)}function ge(){var y;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",g.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${c[x+"Name"]}</div>
      <div style="width:min(90vw,420px)">${lt(c[x+"Team"],c[x+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(g),(y=g.querySelector("#pvp-opp-close"))==null||y.addEventListener("click",()=>g.remove())}function de(){var v;const g=c.log||[],y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const b=w=>{var z,E,L;if(w.type==="duel"){const S=w.isGoal,M=w.homeScored&&o==="p1"||!w.homeScored&&S&&o==="p2",F=w.homeScored?"#FFD700":S?"#ff6b6b":"rgba(255,255,255,0.3)",Y=S?M?"⚽ BUT !":"⚽ BUT adversaire !":(z=w.homePlayers)!=null&&z.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${S?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${F};margin-bottom:4px">
          <div style="font-size:9px;color:${F};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${Y}</div>
          ${(E=w.homePlayers)!=null&&E.length?`<div style="margin-bottom:3px">${it(w.homePlayers,"rgba(255,255,255,0.7)",w.homeTotal)}</div>`:""}
          ${(L=w.aiPlayers)!=null&&L.length?`<div style="opacity:0.7">${it(w.aiPlayers,"#ff6b6b",w.aiTotal)}</div>`:""}
        </div>`}return w.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${w.outPlayer?Xe({...w.outPlayer,used:!0,_line:w.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${w.inPlayer?Xe({...w.inPlayer,_line:w.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${w.type==="goal"?"#FFD700":w.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${w.text||""}</div>
      </div>`};y.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${g.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...g].reverse().map(b).join("")}
      </div>`,document.body.appendChild(y),(v=y.querySelector("#pvp-hist-close"))==null||v.addEventListener("click",()=>y.remove())}async function me(){if(c.phase!==o+"-attack")return;const g=o==="p1"?"p2":"p1",y=(c.round||0)+1,b=[...c.log||[]];b.push({type:"info",text:`⏭️ ${c[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const v=qe(c),w=Te(g),k=v||!w?"finished":g+"-attack";await K({["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},pendingAttack:null,phase:k,attacker:g,round:y,log:b}),k==="finished"&&await ze(c)}async function oe(){const g=c[o+"Team"],y=!["GK","DEF","MIL","ATT"].some(k=>(c[x+"Team"][k]||[]).some(z=>!z.used)),b=(c["selected_"+o]||[]).map(k=>{const z=(g[k._role]||[]).find(Y=>Y.cardId===k.cardId)||k,E=y&&["GK","DEF"].includes(k._role),L=g[k._role]||[],S=L.findIndex(Y=>Y.cardId===k.cardId),M=st(L.length),F=S>=0?M[S]:z._col??1;return{...z,_line:k._role,_col:F,...E?{note_a:Math.max(1,Number(z.note_a)||0)}:{}}});if(!b.length)return;const v=Kt(b,c.modifiers[o]||{});D(o,b.map(k=>k.cardId)),b.forEach(k=>{const z=(g[k._role]||[]).find(E=>E.cardId===k.cardId);z&&(z.used=!0)}),c["selected_"+o]=[],xe();const w=[...c.log||[]];if(y){const k=(c[o+"Score"]||0)+1,z=b.map(F=>({name:F.name,note:Se(F,F._line||"ATT"),portrait:He(F),job:F.job}));w.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:z,homeTotal:v.total,aiTotal:0});const E=(c.round||0)+1,L=o==="p1"?"p2":"p1",S={...c,[o+"Team"]:g,[o+"Score"]:k},M=qe(S);P.add(E),Ee(z,k,c[x+"Score"]||0,!0,async()=>{await K({[o+"Team"]:g,[o+"Score"]:k,["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},pendingAttack:null,phase:M?"finished":L+"-attack",attacker:L,round:E,log:w}),M&&await ze({...c,[o+"Score"]:k})});return}w.push({type:"pending",text:`⚔️ ${c[o+"Name"]} attaque (${v.total})`}),await K({[o+"Team"]:g,[x+"Team"]:c[x+"Team"],pendingAttack:{...v,players:b,side:o},["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},phase:x+"-defense",log:w})}async function ue(){const g=c[o+"Team"],y=(c["selected_"+o]||[]).map(G=>{const W=(g[G._role]||[]).find(be=>be.cardId===G.cardId)||G,te=g[G._role]||[],ee=te.findIndex(be=>be.cardId===G.cardId),fe=st(te.length),ye=ee>=0?fe[ee]:W._col??1;return{...W,_line:G._role,_col:ye}}),b=Vt(y,c.modifiers[o]||{});D(o,y.map(G=>G.cardId)),y.forEach(G=>{const W=(g[G._role]||[]).find(te=>te.cardId===G.cardId);W&&(W.used=!0)}),c["selected_"+o]=[],xe();const v=Yt(c.pendingAttack.total,b.total,c.modifiers[o]||{}),w=c.pendingAttack.side,k=v==="attack"||(v==null?void 0:v.goal),z=w==="p1"?"p2":"p1",E=(c.round||0)+1,L=(c.pendingAttack.players||[]).map(G=>({name:G.name,note:Se(G,G._line||"ATT"),portrait:He(G),job:G.job})),S=[...c.log||[]];S.push({type:"duel",isGoal:k,homeScored:k&&w===o,text:k?`⚽ BUT de ${c[w+"Name"]} ! (${c.pendingAttack.total} vs ${b.total})`:`✋ Attaque stoppée (${c.pendingAttack.total} vs ${b.total})`,homePlayers:L,aiPlayers:y.map(G=>({name:G.name,note:Se(G,G._line||"DEF"),portrait:He(G),job:G.job})),homeTotal:c.pendingAttack.total,aiTotal:b.total});const M=k?(c[w+"Score"]||0)+1:c[w+"Score"]||0,F={...c,[o+"Team"]:g,[w+"Score"]:M},Y=qe(F),J=Y?"finished":z+"-attack",U=async()=>{await K({[o+"Team"]:g,[x+"Team"]:c[x+"Team"],[w+"Score"]:M,["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},pendingAttack:null,phase:J,attacker:z,round:E,log:S}),(J==="finished"||Y)&&await ze({...c,[w+"Score"]:M})};if(k){const G=w===o,W=G?M:c[o+"Score"]||0,te=G?c[x+"Score"]||0:M;P.add(E),Ee(L,W,te,G,U)}else await U()}function Le(g){return["MIL","ATT"].some(y=>(g[y]||[]).some(b=>!b.used))}function Ie(g){return["GK","DEF","MIL","ATT"].some(y=>(g[y]||[]).some(b=>!b.used))}function Ce(g){return Ie(g)&&!Le(g)}function Te(g){const y=c[g+"Team"],b=c[(g==="p1"?"p2":"p1")+"Team"];return!!(Le(y)||!Ie(b)&&Ce(y))}function qe(g){const y=["MIL","ATT"].some(S=>(g.p1Team[S]||[]).some(M=>!M.used)),b=["MIL","ATT"].some(S=>(g.p2Team[S]||[]).some(M=>!M.used)),v=Ie(g.p1Team),w=Ie(g.p2Team);return!y&&!(!w&&v)&&(!b&&!(!v&&w))}function Pe(g){const y=g.p1Score||0,b=g.p2Score||0;return y===b?null:y>b?_.home_id:_.away_id}async function ze(g){try{const y=Pe(g),b=y?_.home_id===y?_.away_id:_.home_id:null,v=g.p1Score||0,w=g.p2Score||0;await T.from("matches").update({status:"finished",winner_id:y,home_score:v,away_score:w}).eq("id",i);const{data:k}=await T.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if(k){await T.from("mini_league_matches").update({home_score:v,away_score:w,status:"finished"}).eq("id",k.id);const{data:z}=await T.from("mini_league_matches").select("id, status").eq("league_id",k.league_id).eq("matchday",k.matchday);if((z||[]).every(L=>L.status==="finished"||L.status==="bye")){const{data:L}=await T.from("mini_leagues").select("current_day,total_days").eq("id",k.league_id).single();if(L){const S=(L.current_day||0)+1,M=S>(L.total_days||0);await T.from("mini_leagues").update({current_day:M?L.total_days:S,status:M?"finished":"active"}).eq("id",k.league_id)}}}y&&b&&zi(y,b).catch(()=>{})}catch(y){console.error("[ML] finishMatch:",y)}}function B(){var w;if(A&&document.getElementById("pvp-end-overlay"))return;A=!0;const g=c[o+"Score"],y=c[x+"Score"],b=g>y,v=g===y;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${b?"🏆":v?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${b?"Victoire !":v?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${g} - ${y}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(w=document.getElementById("pvp-home"))==null||w.addEventListener("click",()=>{try{T.removeChannel(V)}catch{}Ve(e),l("mini-league",a?{openLeagueId:a}:{})})}xe()}const pr="/",ur=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function fr(e,t,i){let n=0;const d=document.createElement("div");d.id="tutorial-overlay",d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const s=()=>{var o,x,u;const l=t[n],f=n===t.length-1,a=Math.round((n+1)/t.length*100);d.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${a}%;background:${l.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${l.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${l.title}</div>
          <div style="font-size:11px;color:#aaa">${n+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${l.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${pr}icons/${l.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${l.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${l.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${n>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${f?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${l.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${f?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,d.querySelectorAll("ul,ol").forEach(h=>{h.style.paddingLeft="20px",h.style.marginTop="6px",h.style.marginBottom="6px"}),d.querySelectorAll("li").forEach(h=>{h.style.marginBottom="4px"}),d.querySelectorAll("p").forEach(h=>{h.style.marginBottom="8px"}),(o=d.querySelector("#tuto-prev"))==null||o.addEventListener("click",()=>{n--,s()}),(x=d.querySelector("#tuto-next"))==null||x.addEventListener("click",()=>{f?r():(n++,s())}),(u=d.querySelector("#tuto-skip"))==null||u.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&r()})},r=async()=>{d.remove(),e!=null&&e.id&&await T.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(d),s()}async function gr(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:d,error:s}=await T.rpc("get_tutorial_steps");if(!s&&(d==null?void 0:d.length)>0)n=d,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:l,error:f}=await T.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!f&&(l==null?void 0:l.length)>0?(n=l,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${s==null?void 0:s.message}, Direct: ${f==null?void 0:f.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const r=n.length>0?n.map(l=>({emoji:l.emoji,title:l.title,color:l.color,content:l.content,image_url:l.image_url||null})):ur;fr(e,r,()=>t("boosters"))}const Qt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function St(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function mr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Ai(e,t)}async function Ai(e,t){const{state:i,toast:n}=t,{data:d}=await T.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:s}=await T.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),r=(d||[]).filter(m=>m.seller_id!==i.profile.id),l=s||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${r.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
    </div>

    <!-- Onglets -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${l.length})</button>
    </div>

    <!-- Filtres (onglet Acheter seulement) -->
    <div id="mkt-filters" style="padding:10px 16px;background:#f9f9f9;border-bottom:1px solid var(--gray-200);display:flex;flex-wrap:wrap;gap:8px">
      <input id="flt-name"    placeholder="🔍 Nom"         style="flex:1;min-width:110px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-club"    placeholder="🏟️ Club"        style="flex:1;min-width:90px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-country" placeholder="🌍 Pays"        style="flex:1;min-width:80px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <select id="flt-job" style="padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px;background:#fff">
        <option value="">Tous postes</option>
        <option>GK</option><option>DEF</option><option>MIL</option><option>ATT</option>
      </select>
      <select id="flt-rarity" style="padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px;background:#fff">
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
  </div>`;let f="buy";const a=()=>{var m,c,A,p,I,q,C;return{name:(((m=document.getElementById("flt-name"))==null?void 0:m.value)||"").toLowerCase().trim(),club:(((c=document.getElementById("flt-club"))==null?void 0:c.value)||"").toLowerCase().trim(),country:(((A=document.getElementById("flt-country"))==null?void 0:A.value)||"").toLowerCase().trim(),job:((p=document.getElementById("flt-job"))==null?void 0:p.value)||"",rarity:((I=document.getElementById("flt-rarity"))==null?void 0:I.value)||"",note1:parseInt((q=document.getElementById("flt-note1"))==null?void 0:q.value)||0,note2:parseInt((C=document.getElementById("flt-note2"))==null?void 0:C.value)||0}};function o(m){const c=a();return m.filter(A=>{var V,K,ne;const p=(V=A.card)==null?void 0:V.player;if(!p)return!1;const I=`${p.firstname} ${p.surname_encoded}`.toLowerCase(),q=(((K=p.clubs)==null?void 0:K.encoded_name)||"").toLowerCase(),C=(p.country_code||"").toLowerCase(),P=((ne=A.card)==null?void 0:ne.evolution_bonus)||0,j=St(p,p.job,P),R=p.job2?St(p,p.job2,P):0;return!(c.name&&!I.includes(c.name)||c.club&&!q.includes(c.club)||c.country&&!C.includes(c.country)||c.job&&p.job!==c.job||c.rarity&&p.rarity!==c.rarity||c.note1&&j<c.note1||c.note2&&R<c.note2)})}function x(m){var R,V,K,ne;const c=(R=m.card)==null?void 0:R.player;if(!c)return"";const A=((V=m.card)==null?void 0:V.evolution_bonus)||0,p=St(c,c.job,A),I=c.job2?St(c,c.job2,A):0,q=(i.profile.credits||0)>=m.price,C=c.country_code?`https://flagsapi.com/${c.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,P=Qt[c.job]||"#bbb",j=c.job2?Qt[c.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${C?`<img src="${C}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(K=c.clubs)!=null&&K.logo_url?`<img src="${c.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${P};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${P};font-family:Arial Black,Arial">${p}</span>
        </div>
        ${I?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${j};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${j};font-family:Arial Black,Arial">${I}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${c.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((ne=m.seller)==null?void 0:ne.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${m.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${m.id}" ${q?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${q?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function u(m){var R,V,K,ne;const c=(R=m.card)==null?void 0:R.player;if(!c)return"";const A=((V=m.card)==null?void 0:V.evolution_bonus)||0,p=St(c,c.job,A),I=c.job2?St(c,c.job2,A):0,q=m.status==="sold",C=c.country_code?`https://flagsapi.com/${c.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,P=Qt[c.job]||"#bbb",j=c.job2?Qt[c.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${q?"opacity:0.7":""}">
      ${C?`<img src="${C}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(K=c.clubs)!=null&&K.logo_url?`<img src="${c.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${P};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${P};font-family:Arial Black,Arial">${p}</span>
        </div>
        ${I?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${j};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${j};font-family:Arial Black,Arial">${I}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${c.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.surname_encoded}</div>
        <div style="font-size:10px;color:${q?"#22c55e":"#999"};margin-top:1px">
          ${q?`✅ Vendu à ${((ne=m.buyer)==null?void 0:ne.pseudo)||"—"} · ${m.sold_at?new Date(m.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(m.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${m.price.toLocaleString("fr")}</div>
        ${q?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${m.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function h(){const m=document.getElementById("mkt-content"),c=document.getElementById("mkt-filters");if(m){if(c.style.display=f==="buy"?"flex":"none",f==="buy"){const A=o(r);m.innerHTML=A.length?A.map(x).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const A=l.filter(I=>I.status==="active").sort((I,q)=>new Date(q.listed_at)-new Date(I.listed_at)),p=l.filter(I=>I.status==="sold").sort((I,q)=>new Date(q.sold_at||q.listed_at)-new Date(I.sold_at||I.listed_at));m.innerHTML=(A.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${A.length})</div>`+A.map(u).join(""):"")+(p.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${p.length})</div>`+p.map(u).join(""):"")+(!A.length&&!p.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}m.querySelectorAll("[data-buy]").forEach(A=>A.addEventListener("click",()=>xr(A.dataset.buy,r,e,t))),m.querySelectorAll("[data-cancel]").forEach(A=>A.addEventListener("click",()=>br(A.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(m=>{m.addEventListener("click",()=>{f=m.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(c=>{const A=c===m;c.style.background=A?"var(--green)":"#fff",c.style.color=A?"#fff":"var(--gray-600)",c.style.borderColor=A?"var(--green)":"var(--gray-200)"}),h()})});let _;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(m=>{var c;(c=document.getElementById(m))==null||c.addEventListener("input",()=>{clearTimeout(_),_=setTimeout(h,250)})}),h()}async function xr(e,t,i,n){const{state:d,toast:s,refreshProfile:r}=n,l=t.find(o=>o.id===e);if(!l)return;const f=l.price;if((d.profile.credits||0)<f){s("Crédits insuffisants","error");return}yr(l,async()=>{const{error:o}=await T.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:d.profile.id});if(o){s("Erreur achat : "+o.message,"error");return}await r();const x=document.getElementById("nav-credits");x&&(x.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),s("✅ Carte achetée !","success"),await Ai(i,n)})}function yr(e,t){var r;const i=(r=e.card)==null?void 0:r.player,n=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",d.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(d);const s=l=>{d.remove(),l&&t()};d.querySelector("#buy-cancel").addEventListener("click",()=>s(!1)),d.querySelector("#buy-ok").addEventListener("click",()=>s(!0)),d.addEventListener("click",l=>{l.target===d&&s(!1)})}async function br(e,t,i){const{toast:n}=i,{data:d}=await T.from("market_listings").select("card_id").eq("id",e).single();if(await T.from("market_listings").update({status:"cancelled"}).eq("id",e),d!=null&&d.card_id){const{count:s}=await T.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",d.card_id).eq("status","active");s||await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id)}n("Annonce retirée","success"),Ai(t,i)}async function hr(e,t){var o,x,u,h;const{state:i,navigate:n}=t,d=((x=(o=t==null?void 0:t.state)==null?void 0:o.params)==null?void 0:x.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:s},{data:r}]=await Promise.all([T.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),T.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let l=d;function f(){var m,c;const _=document.getElementById("rankings-list");if(_){if(l==="global"){const A=s||[];_.innerHTML=A.length>0?A.map((p,I)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${p.id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${I<3?["#D4A017","#a0a0a0","#cd7f32"][I]:"var(--green)"};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${I<3?"16":"13"}px">${I<3?["🥇","🥈","🥉"][I]:I+1}</div>
          <div style="flex:1">
            <div style="font-weight:700">${p.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${p.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px">
            <div>🏆${p.trophies_top1} 🥈${p.trophies_top2} 🥉${p.trophies_top3}</div>
            <div style="color:var(--gray-600)">${p.wins} V</div>
          </div>
        </div>
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const A=r||[];_.innerHTML=A.length>0?A.map((p,I)=>{const q=Nt(p.mmr??1e3),C=(p.ranked_wins||0)+(p.ranked_losses||0)+(p.ranked_draws||0),P=C>0?Math.round((p.ranked_wins||0)/C*100):0,j=p.id===i.profile.id,R=(p.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${j?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${I<3?["#D4A017","#a0a0a0","#cd7f32"][I]:"rgba(255,255,255,0.08)"};color:${I<3?"#000":"#fff"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${I<3?"16":"13"}px">${I<3?["🥇","🥈","🥉"][I]:I+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${q.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${p.club_name} · ${q.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${R?"❓":q.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${q.color}">${R?"Placement":q.label}</div>
              ${R?"":`<div style="font-size:10px;color:var(--gray-600)">${P}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'}(m=document.getElementById("tab-global"))!=null&&m.style&&(document.getElementById("tab-global").style.cssText=a(l==="global")),(c=document.getElementById("tab-ranked"))!=null&&c.style&&(document.getElementById("tab-ranked").style.cssText=a(l==="ranked"))}}const a=_=>`flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${_?"900":"400"};background:${_?"var(--green)":"rgba(255,255,255,0.06)"};color:${_?"#fff":"var(--gray-600)"};transition:all 0.2s`;e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-global" style="${a(l==="global")}">🌍 Global</button>
        <button id="tab-ranked" style="${a(l==="ranked")}">⚔️ Ranked</button>
      </div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,f(),(u=document.getElementById("tab-global"))==null||u.addEventListener("click",()=>{l="global",f()}),(h=document.getElementById("tab-ranked"))==null||h.addEventListener("click",()=>{l="ranked",f()})}async function vr(e,t){var P,j,R,V;const{state:i,navigate:n,toast:d}=t,s=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:r},{data:l}]=await Promise.all([T.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),T.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",s.id).single()]);if(!l){d("Erreur chargement profil","error"),n("home");return}if(!r){e.innerHTML=`
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
    </div>`,(P=document.getElementById("ranked-back"))==null||P.addEventListener("click",()=>n("home"));return}const f=l.mmr??1e3,a=l.mmr_deviation??350,o=l.mmr_volatility??.06,x=l.placement_matches??0,u=x<10,h=Math.max(0,10-x),_=Nt(f),m=vo(f),c=li.findIndex(K=>K.id===_.id),A=li[c+1]||null,p={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},I=(l.ranked_wins||0)+(l.ranked_losses||0)+(l.ranked_draws||0),q=I>0?Math.round((l.ranked_wins||0)/I*100):0,C=li.map(K=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${_.id===K.id?1:.35};
      transform:${_.id===K.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${_.id===K.id?"28px":"20px"}">${K.emoji}</div>
      <div style="font-size:9px;color:${K.color};font-weight:${_.id===K.id?"900":"400"};letter-spacing:0.5px">${K.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${p[_.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px">
      <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
      <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
    </div>

    <!-- Bandeau tier -->
    <div style="background:rgba(0,0,0,0.35);border-radius:20px;padding:20px 16px;text-align:center;border:2px solid ${_.color}40">
      <div style="font-size:52px;margin-bottom:4px">${_.emoji}</div>
      <div style="font-size:22px;font-weight:900;color:${_.color};letter-spacing:3px;text-transform:uppercase">${_.label}</div>
    </div>

    <!-- Progression bar -->
    ${_.id!=="master"?`
    <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${_.emoji} ${_.label}</span>
        ${A?`<span>${A.emoji} ${A.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${m}%;background:linear-gradient(90deg,${_.color},${_.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${m}% vers ${A?A.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${C}
    </div>

    <!-- Placement / Stats -->
    ${u?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${x}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${h} match${h>1?"s":""} — gains et pertes ×2</div>
    </div>`:`
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#1A6B3C">${l.ranked_wins||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Victoires</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#888">${l.ranked_draws||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Nuls</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#bb2020">${l.ranked_losses||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Défaites</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#D4A017">${q}%</div>
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
        background:linear-gradient(135deg,${_.color},${_.color}99);
        color:#000;font-size:18px;font-weight:900;cursor:pointer;letter-spacing:1px;
        box-shadow:0 4px 20px ${_.color}60;text-transform:uppercase">
        ⚽ Jouer en Ranked
      </button>
      <button id="ranked-leaderboard-btn" style="width:100%;padding:12px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.2);
        background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        🏆 Classement Ranked
      </button>
    </div>
  </div>`,(j=document.getElementById("ranked-back"))==null||j.addEventListener("click",()=>n("home")),(R=document.getElementById("ranked-leaderboard-btn"))==null||R.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(V=document.getElementById("ranked-play-btn"))==null||V.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:f,rd:a,sigma:o,isPlacement:u}})})}async function wr(e,{state:t,navigate:i,toast:n}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await T.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),r={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(o=>o.status==="finished"),f=(s||[]).filter(o=>o.status==="in_progress");function a(o){const x=o.home_id===d.id;x?o.home_score:o.away_score,x?o.away_score:o.home_score;const u=o.winner_id===d.id,h=o.home_score===o.away_score&&o.status==="finished",_=o.status!=="finished"?"…":h?"N":u?"V":"D",m=o.status!=="finished"||h?"#888":u?"#1A6B3C":"#c0392b";let c=r[o.mode]||o.mode;o.away_id===null&&!c.startsWith("IA")&&(c="IA");const p=o.home_id===d.id?o.away:o.home;let I;o.away_id===null?I=c:p?I=`${p.club_name||p.pseudo} (${p.pseudo})`:I="Adversaire";let q="";o.status==="in_progress"&&Date.now()-new Date(o.created_at).getTime()>3600*1e3&&(q=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const C=new Date(o.created_at),P=C.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+C.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),j=o.status==="finished"?`${o.home_score} - ${o.away_score}`:`${o.home_score||0} - ${o.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${I}${q}</div>
        <div style="font-size:11px;color:var(--gray-600)">${c} · ${P}${o.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${j}</span>
        <span style="background:${m};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${_}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(s||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${f.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${f.map(a).join("")}
        </div>`:""}

      ${l.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${l.map(a).join("")}
        </div>`:""}

      ${(s||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}wo($o);const De={user:null,profile:null,page:"home",params:{}};function At(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function _r(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function _i(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ft(){if(!De.user)return;const{data:e}=await T.from("users").select("*").eq("id",De.user.id).single();e&&(De.profile=e)}function Gt(e,t={}){De.page=e,De.params=t,bo()}async function bo(){var n,d,s,r;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(l=>{l.classList.toggle("active",l.dataset.page===De.page)});const t=document.getElementById("nav-credits");t&&De.profile&&(t.textContent=`💰 ${(De.profile.credits||0).toLocaleString("fr")}`);const i={state:De,navigate:Gt,toast:At,openModal:_r,closeModal:_i,refreshProfile:Ft};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',De.page){case"home":await qi(e,i);break;case"collection":await Zo(e,i);break;case"decks":await xi(e,i);break;case"boosters":await un(e,i);break;case"ranked":await vr(e,i);break;case"match":{const l=De.params&&De.params.matchMode||"vs_ai_easy";l==="random"?await vi(e,i,!1):l==="ranked"?await vi(e,i,!0):l==="friend"?await Yn(e,i,(n=De.params)==null?void 0:n.friendId,(d=De.params)==null?void 0:d.friendName):l==="mini-league"?await Ui(e,i,(s=De.params)==null?void 0:s.mlMatchId,(r=De.params)==null?void 0:r.leagueId):await zn(e,i);break}case"market":await mr(e,i);break;case"rankings":await hr(e,i);break;case"matches":await wr(e,i);break;case"friends":await Lo(e,i);break;case"mini-league":await Xn(e,i);break;case"match-mini-league":{const l=De.params||{};await Ui(e,i,l.mlMatchId,l.leagueId);break}default:await qi(e,i)}}function $r(){var n;const e=document.getElementById("app"),t=De.profile;if(!t)return;const i="/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo">
        <img src="${i}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <div id="nav-credits" class="credits">💰 ${(t.credits||0).toLocaleString("fr")}</div>
        <button id="journal-btn" title="Journal des mises à jour" style="background:none;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;font-size:22px;opacity:0.8;transition:opacity .15s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.8">
          📰
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
  `,document.querySelectorAll(".bottom-nav a").forEach(d=>{d.addEventListener("click",s=>{s.preventDefault(),Gt(d.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Gt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Gt("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>kr())}async function kr(){const{data:e}=await T.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const d=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${n.image_url?`<img src="${n.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${d}</div>
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function Er(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&_i()}),document.getElementById("modal-close").addEventListener("click",_i);const{data:{session:e}}=await T.auth.getSession();if(!e){Ki(),Mi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:At});return}De.user=e.user,await Ft(),Ki();try{const{data:i}=await T.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(d=>{n[d.formation]=d.links}),_o(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!De.profile){Eo(document.getElementById("app"),{state:De,navigate:async()=>{await Ft(),gi()},toast:At,refreshProfile:Ft});return}const t=Array.isArray(De.profile.pending_boosters)?De.profile.pending_boosters:[];if(!De.profile.onboarding_done&&t.length>0){vn(document.getElementById("app"),{state:De,navigate:()=>gi(),toast:At,refreshProfile:Ft});return}gi(),setTimeout(()=>gr(De.profile,Gt,At),800),T.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(De.user=null,De.profile=null,document.getElementById("app").innerHTML="",Mi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:At}))})}function Tr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function di(){const e=document.getElementById("app");e&&(e.style.height=Tr()+"px")}window.addEventListener("resize",di);window.addEventListener("orientationchange",()=>setTimeout(di,150));window.visualViewport&&window.visualViewport.addEventListener("resize",di);function gi(){const e=()=>{var i;(i=De.user)!=null&&i.id&&T.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",De.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",di(),$r(),bo()}function Ki(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function ho(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}Er().catch(e=>{console.error("Échec du démarrage:",e),ho()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&ho("Le serveur met trop de temps à répondre.")},12e3);
