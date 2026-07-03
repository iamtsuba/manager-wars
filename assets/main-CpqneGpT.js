import{s as E,F as xi,h as Pt,j as Yi,l as at,i as zn,k as Sn,b as Ln}from"./formation-links-DJC25wD7.js";const In="/manager-wars/";function Li(e,{navigate:t,toast:i}){let a="login";const c=()=>{var s,d,u,o,n,f;const l=a==="login";e.innerHTML=`
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
        <img src="${In}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
            flex:1;padding:16px;border:none;background:${l?"rgba(26,107,60,0.3)":"transparent"};
            color:${l?"#fff":"rgba(255,255,255,0.4)"};
            font-size:14px;font-weight:${l?"900":"600"};cursor:pointer;
            border-bottom:2px solid ${l?"#22c55e":"transparent"};
            transition:all .2s;
          ">Connexion</button>
          <button id="tab-reg-btn" style="
            flex:1;padding:16px;border:none;background:${l?"transparent":"rgba(26,107,60,0.3)"};
            color:${l?"rgba(255,255,255,0.4)":"#fff"};
            font-size:14px;font-weight:${l?"600":"900"};cursor:pointer;
            border-bottom:2px solid ${l?"transparent":"#22c55e"};
            transition:all .2s;
          ">Inscription</button>
        </div>

        <div style="padding:24px">
          ${l?`
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
    </style>`,(s=document.getElementById("tab-login-btn"))==null||s.addEventListener("click",()=>{a="login",c()}),(d=document.getElementById("tab-reg-btn"))==null||d.addEventListener("click",()=>{a="register",c()}),l?((u=document.getElementById("login-password"))==null||u.addEventListener("keydown",h=>{var v;h.key==="Enter"&&((v=document.getElementById("login-btn"))==null||v.click())}),(o=document.getElementById("login-btn"))==null||o.addEventListener("click",async()=>{const h=document.getElementById("login-email").value.trim(),v=document.getElementById("login-password").value,A=document.getElementById("login-error");if(A.textContent="",!h||!v){A.textContent="Remplissez tous les champs.";return}const r=document.getElementById("login-btn");r.textContent="⏳ Connexion…",r.disabled=!0;const{error:p}=await E.auth.signInWithPassword({email:h,password:v});if(r.textContent="⚽ Se connecter",r.disabled=!1,p){A.textContent=p.message.includes("Invalid")?"Email ou mot de passe incorrect.":p.message;return}window.location.reload()})):((n=document.getElementById("reg-confirm"))==null||n.addEventListener("keydown",h=>{var v;h.key==="Enter"&&((v=document.getElementById("reg-btn"))==null||v.click())}),(f=document.getElementById("reg-btn"))==null||f.addEventListener("click",async()=>{const h=document.getElementById("reg-email").value.trim(),v=document.getElementById("reg-password").value,A=document.getElementById("reg-confirm").value,r=document.getElementById("reg-error");if(r.textContent="",!h||!v||!A){r.textContent="Remplissez tous les champs.";return}if(v.length<6){r.textContent="Mot de passe trop court (min. 6 caractères).";return}if(v!==A){r.textContent="Les mots de passe ne correspondent pas.";return}const p=document.getElementById("reg-btn");p.textContent="⏳ Création…",p.disabled=!0;const{error:I}=await E.auth.signUp({email:h,password:v});if(p.textContent="🚀 Créer mon compte",p.disabled=!1,I){r.textContent=I.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),a="login",c(),setTimeout(()=>{const z=document.getElementById("login-email");z&&(z.value=h)},50)}))};c()}function Mn(e,{state:t,navigate:i,toast:a,refreshProfile:c}){let l="#1A6B3C",s="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${s};border-color:${l}">
          <span id="logo-initials" style="color:${l}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${l};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${l}" style="width:100%;height:36px;padding:2px;border-radius:6px">
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch2" style="background:${s};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur de l'intérieur</label>
              <input type="color" id="color2" value="${s}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function d(){var A;const o=document.getElementById("logo-preview"),n=document.getElementById("logo-initials"),f=((A=document.getElementById("setup-club"))==null?void 0:A.value)||"MW",h=f.trim().split(" ").filter(Boolean),v=h.length>=2?(h[0][0]+h[1][0]).toUpperCase():f.slice(0,2).toUpperCase();o&&(o.style.background=s,o.style.borderColor=l),n&&(n.textContent=v,n.style.color=l)}document.getElementById("color1").addEventListener("input",o=>{l=o.target.value,document.getElementById("swatch1").style.background=l,d()}),document.getElementById("color2").addEventListener("input",o=>{s=o.target.value,document.getElementById("swatch2").style.background=s,d()});function u(o){document.querySelectorAll(".setup-step").forEach(n=>n.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),n=document.getElementById("step1-error");if(n.textContent="",o.length<3){n.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await E.from("users").select("id").eq("pseudo",o).maybeSingle();if(f){n.textContent="Ce pseudo est déjà pris.";return}u(2)}),document.getElementById("step2-back").addEventListener("click",()=>u(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),n=document.getElementById("step2-error");if(n.textContent="",o.length<2){n.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await E.from("users").select("id").eq("club_name",o).maybeSingle();if(f){n.textContent="Ce nom de club est déjà pris.";return}u(3)}),document.getElementById("step3-back").addEventListener("click",()=>u(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),n=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),h=document.getElementById("step3-finish");f.textContent="",h.disabled=!0,h.textContent="Création en cours…";try{const{error:v}=await E.from("users").insert({id:t.user.id,pseudo:o,club_name:n,club_color1:l,club_color2:s,credits:1e4});if(v)throw v;await Cn(t.user.id),await c(),a(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(v){f.textContent=v.message,h.disabled=!1,h.textContent="🚀 Créer mon profil !"}})}async function Cn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await E.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const jn="modulepreload",qn=function(e){return"/manager-wars/"+e},Ii={},yi=function(t,i,a){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));c=Promise.allSettled(i.map(u=>{if(u=qn(u),u in Ii)return;Ii[u]=!0;const o=u.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${n}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":jn,o||(f.as="script"),f.crossOrigin="",f.href=u,d&&f.setAttribute("nonce",d),document.head.appendChild(f),o)return new Promise((h,v)=>{f.addEventListener("load",h),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(s){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=s,window.dispatchEvent(d),!d.defaultPrevented)throw s}return c.then(s=>{for(const d of s||[])d.status==="rejected"&&l(d.reason);return t().catch(l)})},Bt="#1A6B3C",Dt="#cc2222",Fn="#D4A017",Mi="#888";async function Bn(e,t){const{state:i,toast:a}=t;e.innerHTML=`
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
    </div>`,await Wi(i,a,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Gn(i,a)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Ji(i,a,null,t))}async function Wi(e,t,i={}){const{navigate:a}=i,c=e.user.id,{data:l,error:s}=await E.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${c},addressee_id.eq.${c}`),{count:d}=await E.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",c).eq("status","pending"),u=document.getElementById("pending-badge");u&&(d>0?(u.style.display="flex",u.textContent=d):u.style.display="none");const o=document.getElementById("friends-list");if(!o)return;if(s){console.error("[Friends] Erreur:",s),o.innerHTML=`<div style="color:${Dt};text-align:center;padding:16px">Erreur chargement : ${s.message}</div>`;return}const n=(l||[]).map(v=>v.requester_id===c?v.addressee_id:v.requester_id);let f={};if(n.length){const{data:v}=await E.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",n);(v||[]).forEach(A=>{f[A.id]=A})}const h=(l||[]).map(v=>({friendshipId:v.id,friend:f[v.requester_id===c?v.addressee_id:v.requester_id]||{pseudo:"?"}}));if(!h.length){o.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}o.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${h.length} ami${h.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${h.map(({friendshipId:v,friend:A})=>Dn(A,v)).join("")}
    </div>`,o.querySelectorAll("[data-stats]").forEach(v=>{v.addEventListener("click",()=>Pn(e,v.dataset.stats,v.dataset.friendName))}),o.querySelectorAll("[data-match]").forEach(v=>{v.addEventListener("click",()=>{const A=v.dataset.friendId,r=v.dataset.friendName;console.log("[Friends] clic match",{fid:A,fname:r,hasNavigate:typeof a}),typeof a=="function"?a("match",{matchMode:"friend",friendId:A,friendName:r}):t("Erreur navigation","error")})})}function Dn(e,t){const i=e.club_name||e.pseudo||"?",a=e.pseudo||"",c=(a||i).slice(0,2).toUpperCase(),l=e.club_color2||Bt,s=e.club_color1||"#ffffff",d=e.last_seen_at?new Date(e.last_seen_at):null,u=d&&Date.now()-d.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${l};border:2.5px solid ${s};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${s}">
          ${c}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${u?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${a}</div>
        <div style="font-size:11px;color:${u?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${u?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${Fn};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Gn(e,t){const i=bi();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Dt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${hi()}`,document.body.appendChild(i);const a=i.querySelector("#friend-pseudo-input"),c=i.querySelector("#add-friend-error"),l=()=>i.remove();a.focus(),i.querySelector("#add-cancel").addEventListener("click",l),i.addEventListener("click",s=>{s.target===i&&l()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const s=a.value.trim();if(!s){c.textContent="Entre un pseudo";return}c.textContent="";const{data:d}=await E.from("users").select("id, pseudo").ilike("pseudo",s).single();if(!d){c.textContent="Utilisateur introuvable";return}if(d.id===e.user.id){c.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:u}=await E.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${d.id}),and(requester_id.eq.${d.id},addressee_id.eq.${e.user.id})`).single();if(u){const n=u.status==="accepted"?"Vous êtes déjà amis !":u.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";c.textContent=n;return}const{error:o}=await E.from("friendships").insert({requester_id:e.user.id,addressee_id:d.id,status:"pending"});if(o){c.textContent="Erreur : "+o.message;return}l(),t(`✅ Demande envoyée à ${d.pseudo} !`,"success")})}async function Ji(e,t,i=null,a={}){const c=e.user.id,{data:l}=await E.from("friendships").select("id, requester_id").eq("addressee_id",c).eq("status","pending").order("created_at",{ascending:!1}),s=(l||[]).map(h=>h.requester_id);let d={};if(s.length){const{data:h}=await E.from("users").select("id, pseudo, club_name").in("id",s);(h||[]).forEach(v=>{d[v.id]=v})}const u=(l||[]).map(h=>({...h,requester:d[h.requester_id]||{pseudo:"?"}})),o=bi(),n=u||[];o.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${n.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${n.map(h=>{var v,A,r;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((v=h.requester)==null?void 0:v.club_name)||((A=h.requester)==null?void 0:A.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((r=h.requester)==null?void 0:r.pseudo)||""})</span>
                </div>
                <button data-accept="${h.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Bt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${h.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Dt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${hi()}`,document.body.appendChild(o);const f=()=>o.remove();o.querySelector("#pending-close").addEventListener("click",f),o.addEventListener("click",h=>{h.target===o&&f()}),o.querySelectorAll("[data-accept]").forEach(h=>{h.addEventListener("click",async()=>{const{error:v}=await E.from("friendships").update({status:"accepted"}).eq("id",h.dataset.accept);if(v){t("Erreur : "+v.message,"error");return}h.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Wi(e,t,a),i&&i()})}),o.querySelectorAll("[data-decline]").forEach(h=>{h.addEventListener("click",async()=>{await E.from("friendships").delete().eq("id",h.dataset.decline),h.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Pn(e,t,i){const a=e.user.id,[c,l]=[a,t].sort(),s=a===c,{data:d}=await E.from("friend_match_stats").select("*").eq("player1_id",c).eq("player2_id",l).single(),u=e.profile.club_name||e.profile.pseudo||"Moi",o=d||{},n=s?o.wins_p1||0:o.wins_p2||0,f=s?o.wins_p2||0:o.wins_p1||0,h=o.draws||0,v=s?o.goals_p1||0:o.goals_p2||0,A=s?o.goals_p2||0:o.goals_p1||0,r=s?o.gc_used_p1||0:o.gc_used_p2||0,p=s?o.gc_used_p2||0:o.gc_used_p1||0,I=o.matches_total||0,z=(U,D,N,G=Bt,ie=Dt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${G}">${D}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${U}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${ie}">${N}</div>
    </div>`,C=bi();C.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${I===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${z("Victoires",n,f)}
        ${z("Nuls",h,h,Mi,Mi)}
        ${z("Défaites",f,n)}
        ${z("Buts marqués",v,A)}
        ${z("Buts encaissés",A,v,Dt,Bt)}
        ${z("GC utilisés ⚡",r,p,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${I} match${I>1?"s":""} joué${I>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${hi()}`,document.body.appendChild(C),C.querySelector("#stats-close").addEventListener("click",()=>C.remove()),C.addEventListener("click",U=>{U.target===C&&C.remove()})}function bi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function hi(){return`
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
        background:${Bt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function Xi({player1Id:e,player2Id:t,score1:i,score2:a,gc1:c,gc2:l}){const[s,d]=[e,t].sort(),u=e!==s,o=u?a:i,n=u?i:a,f=u?l:c,h=u?c:l,v=o>n?1:0,A=n>o?1:0,r=o===n?1:0,{data:p}=await E.from("friend_match_stats").select("*").eq("player1_id",s).eq("player2_id",d).single();p?await E.from("friend_match_stats").update({wins_p1:p.wins_p1+v,wins_p2:p.wins_p2+A,draws:p.draws+r,goals_p1:p.goals_p1+o,goals_p2:p.goals_p2+n,gc_used_p1:p.gc_used_p1+f,gc_used_p2:p.gc_used_p2+h,matches_total:p.matches_total+1}).eq("player1_id",s).eq("player2_id",d):await E.from("friend_match_stats").insert({player1_id:s,player2_id:d,wins_p1:v,wins_p2:A,draws:r,goals_p1:o,goals_p2:n,gc_used_p1:f,gc_used_p2:h,matches_total:1})}const Nn="2026.07.03-1656";async function Ci(e,{state:t,navigate:i,toast:a}){var l,s;const c=t.profile;c&&(e.innerHTML=`
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
      <div class="hero hero-compact" style="background:${c.club_color1};border:2px solid ${c.club_color2}">
        <button class="nav-rankings-btn" id="nav-rankings" title="Classement">
          <img src="/manager-wars/icons/badge-trophy.png" alt="Classement">
        </button>
        <div class="info">
          <h3 style="margin:0">${c.pseudo}</h3>
          <div class="level">Niveau ${c.level} · ${c.club_name}</div>
        </div>
        <button class="nav-rankings-btn" id="nav-matches" title="Mes matchs" style="margin-left:auto">
          <img src="/manager-wars/icons/badge-ball.png" alt="Matchs" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'⚽',style:'font-size:22px'}))">
        </button>
      </div>

      <!-- Ranked (bouton) -->
      <div class="ranked-banner play-card" data-action="ranked">
        <div class="play-badge-group"><img src="/manager-wars/icons/badge-ranked.png" alt="" class="play-icon"><img src="/manager-wars/icons/badge-ranked-txt.png" alt="Ranked" class="play-text-overlay"></div>
      </div>

      <!-- Jeu : 4 tuiles -->
      <div class="play-grid">
        <div class="play-card" data-action="match-ai">
          <div class="play-badge-group"><img src="/manager-wars/icons/badge-ai.png" alt="" class="play-icon"><img src="/manager-wars/icons/badge-ai-txt.png" alt="Match IA" class="play-text-overlay"></div>
        </div>
        <div class="play-card" data-action="match-random">
          <div class="play-badge-group"><img src="/manager-wars/icons/badge-random.png" alt="" class="play-icon"><img src="/manager-wars/icons/badge-random-txt.png" alt="Match Random" class="play-text-overlay"></div>
        </div>
        <div class="play-card" data-action="match-friend">
          <div class="play-badge-group"><img src="/manager-wars/icons/badge-vs.png" alt="" class="play-icon"><img src="/manager-wars/icons/badge-vs-txt.png" alt="Match Friend" class="play-text-overlay"></div>
        </div>
        <div class="play-card" data-action="mini-league">
          <div class="play-badge-group"><img src="/manager-wars/icons/badge-league.png" alt="" class="play-icon"><img src="/manager-wars/icons/badge-league-txt.png" alt="Mini League" class="play-text-overlay"></div>
        </div>
      </div>

            <!-- Logout -->
      <div style="text-align:center;padding:4px 0 8px;display:flex;flex-direction:column;gap:6px;align-items:center">
        <button class="btn btn-ghost btn-sm" id="logout-btn" style="color:var(--gray-600);padding:4px 14px;font-size:12px">Déconnexion</button>
        ${c.is_admin?`
        <a href="/manager-wars/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:4px 12px;border-radius:8px;font-size:12px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Nn}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(d=>{d.addEventListener("click",u=>{u.preventDefault(),i(d.dataset.nav)})}),(l=document.getElementById("nav-rankings"))==null||l.addEventListener("click",()=>i("rankings")),(s=document.getElementById("nav-matches"))==null||s.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(d=>{d.addEventListener("click",()=>{d.classList.add("tapped"),setTimeout(()=>d.classList.remove("tapped"),200);const u=d.dataset.action;if(u==="match-ai"){Un(i);return}if(u==="match-random"){i("match",{matchMode:"random"});return}if(u==="match-friend"){i("friends");return}if(u==="mini-league"){i("mini-league");return}if(u==="ranked"){ctx.toast("Mode Ranked — Bientôt disponible !","info");return}a("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var U,D,N,G,ie,se;const d=((U=window.visualViewport)==null?void 0:U.height)||window.innerHeight,u=((D=document.querySelector(".top-nav"))==null?void 0:D.offsetHeight)||56,o=((N=document.querySelector(".bottom-nav"))==null?void 0:N.offsetHeight)||60,n=((G=e.querySelector(".hero-compact"))==null?void 0:G.offsetHeight)||52,f=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const h=((se=(ie=e.querySelector("#logout-btn"))==null?void 0:ie.closest("div"))==null?void 0:se.offsetHeight)||44,v=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((de,P)=>{var Y;return de+(((Y=document.getElementById(P))==null?void 0:Y.offsetHeight)||0)},0),A=14*5,r=d-u-o-n-h-v-A,p=Math.max(80,Math.round(r*.28)),I=Math.max(160,Math.round(r*.72)),z=Math.floor((I-10)/2);f&&(f.style.minHeight=f.style.maxHeight=p+"px"),e.querySelectorAll(".play-grid .play-card").forEach(de=>{de.style.minHeight=de.style.height=z+"px"});const C=Math.round(z*.55);e.querySelectorAll(".play-card .play-icon").forEach(de=>{de.style.height=C+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await E.auth.signOut(),window.location.reload()}),Qi(t,a),Hn(t,a,i),Zi(t,a,i))}async function Zi(e,t,i){const a=document.getElementById("ongoing-match-banner");if(!a)return;const c=e.profile.id,{data:l}=await E.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${c},away_id.eq.${c}`).order("created_at",{ascending:!1});if(!(l!=null&&l.length)){a.innerHTML="";return}const s=l.map(u=>u.home_id===c?u.away_id:u.home_id).filter(Boolean);let d={};if(s.length){const{data:u}=await E.from("users").select("id, pseudo, club_name").in("id",s);(u||[]).forEach(o=>{d[o.id]=o.club_name||o.pseudo})}a.innerHTML=l.map(u=>{const o=u.home_id===c?u.away_id:u.home_id,n=d[o]||"Adversaire",f=u.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${f?"🏆 Mini League":u.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${n}</div>
        </div>
        <button data-resume="${u.id}" data-mini="${f?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${u.id}" data-opp="${o}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),a.querySelectorAll("[data-resume]").forEach(u=>{u.addEventListener("click",async()=>{const o=document.getElementById("page-content")||document.getElementById("app");if(u.dataset.mini==="1"){const{data:n}=await E.from("mini_league_matches").select("id, league_id").eq("match_id",u.dataset.resume).single();n?i("match-mini-league",{mlMatchId:n.id,leagueId:n.league_id}):i("mini-league")}else{const{resumePvpMatch:n}=await yi(async()=>{const{resumePvpMatch:f}=await Promise.resolve().then(()=>Uo);return{resumePvpMatch:f}},void 0);n(o,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},u.dataset.resume)}})}),a.querySelectorAll("[data-abandon]").forEach(u=>{u.addEventListener("click",()=>{On(async()=>{await Rn(u.dataset.abandon,u.dataset.opp,c),t("Match abandonné (défaite 3-0)","info"),Zi(e,t,i)})})})}async function Rn(e,t,i){const{data:a}=await E.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!a)return;const c=a.home_id===i,l=c?0:3,s=c?3:0,d=a.game_state||{};d.p1Score=l,d.p2Score=s,d.phase="finished",d.forfeit=!0,await E.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:l,away_score:s,game_state:d}).eq("id",e)}function On(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Hn(e,t,i){var d,u,o,n;const a=document.getElementById("match-invite-banner");if(!a)return;const{data:c}=await E.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){a.innerHTML="";return}const l=((d=c.inviter)==null?void 0:d.club_name)||((u=c.inviter)==null?void 0:u.pseudo)||"?",s=c.inviter_id;a.innerHTML=`
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
        <div style="font-size:13px;font-weight:900">${l} t'invite à jouer !</div>
        <div style="font-size:11px;opacity:0.75">Accepter la partie ?</div>
      </div>
      <div style="display:flex;gap:8px">
        <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
        <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
      </div>
    </div>`,(o=document.getElementById("match-inv-accept"))==null||o.addEventListener("click",()=>{a.innerHTML="",i("match",{matchMode:"friend",friendId:s,friendName:l})}),(n=document.getElementById("match-inv-decline"))==null||n.addEventListener("click",async()=>{await E.from("friend_match_invites").update({status:"declined"}).eq("id",c.id),a.innerHTML="",t("Invitation refusée","info")})}async function Qi(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:a,error:c}=await E.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(c||!(a!=null&&a.length)){i.innerHTML="";return}const l=a.length,s=a.slice(0,2).map(u=>{var o;return((o=u.requester)==null?void 0:o.pseudo)||"?"}).join(", "),d=l>2?` +${l-2}`:"";i.innerHTML=`
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
          ${l} demande${l>1?"s":""} d'ami${l>1?"s":""} en attente
        </div>
        <div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
          ${s}${d}
        </div>
      </div>
      <div style="font-size:20px;flex-shrink:0">›</div>
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Ji(e,t,()=>Qi(e,t))})}function Un(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${t.map(c=>`
            <div class="action-card" data-mode="${c.mode}" style="cursor:pointer">
              <div class="icon">${c.icon}</div>
              <div class="label">${c.label}</div>
              <div class="sub">${c.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const a=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",a),i.addEventListener("click",c=>{c.target===i&&a()}),i.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{a(),e("match",{matchMode:c.dataset.mode})})})}const Ke={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Ae(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const ji=["ATT","MIL","DEF","GK"];function en(e){let t=0;const i=e.length;for(let a=0;a<i;a++)for(let c=a+1;c<i;c++){const l=e[a],s=e[c];if(!l||!s)continue;const d=l._col!=null&&s._col!=null&&l._col===s._col,u=l._col!=null&&s._col!=null&&Math.abs(l._col-s._col)===1,o=ji.indexOf(l._line||l.job),n=ji.indexOf(s._line||s.job),f=Math.abs(o-n)===1;if(!((l._line||l.job)===(s._line||s.job)&&u||d&&f))continue;const A=l.country_code&&s.country_code&&l.country_code===s.country_code,r=l.club_id&&s.club_id&&l.club_id===s.club_id;A&&r?t+=2:(A||r)&&(t+=1)}return t}function Nt(e,t={}){const i=e.reduce((l,s)=>{const d=s._line||s.job;return l+(Number(d==="MIL"?s.note_m:s.note_a)||0)+(s.boost||0)},0),a=en(e);let c=i+a;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:i,links:a,total:Math.max(0,c)}}function Rt(e,t={}){const i=e.reduce((l,s)=>{const d=s._line||s.job;let u=0;return d==="GK"?u=Number(s.note_g)||0:d==="MIL"?u=Number(s.note_m)||0:u=Number(s.note_d)||0,l+u+(s.boost||0)},0),a=en(e);let c=i+a;return t.stolenNote&&(c-=t.stolenNote),{base:i,links:a,total:Math.max(0,c)}}function Ot(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function tn(e,t,i="easy"){const a=e.filter(s=>!s.used);if(!a.length)return[];const c=[...a].sort((s,d)=>{const u=t==="attack"?Ae(s,"ATT"):s._line==="GK"?Ae(s,"GK"):Ae(s,"DEF");return(t==="attack"?Ae(d,"ATT"):d._line==="GK"?Ae(d,"GK"):Ae(d,"DEF"))-u});let l=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(l,c.length,3))}function Vn(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const nn={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function vi(e,t){const i=e.player;if(!i)return 0;const a=i.rarity;if(a!=="pepite"&&a!=="papyte")return Number(i[t])||0;const c=wi(i),l=Number(i[t])||0;if(l<=0)return 0;const s=i.note_min??1,d=i.note_max??10,o=(e.current_note??c)-c;return Math.min(d,Math.max(s,l+o))}function wi(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function _i(e,t){!e||!t||await Promise.all([di(e,"win"),di(t,"loss")])}async function di(e,t){const{data:i}=await E.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const a=i.filter(c=>{var l,s;return((l=c.player)==null?void 0:l.rarity)==="pepite"||((s=c.player)==null?void 0:s.rarity)==="papyte"});a.length&&await Promise.all(a.map(c=>{const l=nn[c.player.rarity],s=t==="win"?l.win:l.loss,d=c.player.note_min??1,u=c.player.note_max??10,o=wi(c.player),n=c.current_note??o,f=Math.min(u,Math.max(d,n+s));return E.from("cards").update({current_note:f}).eq("id",c.id)}))}async function Kn(e,t){return di(e,t)}const on=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:nn,applyOwnEvolution:Kn,currentSecondaryNote:vi,getBaseMainNote:wi,updateEvolutiveCards:_i},Symbol.toStringTag,{value:"Module"})),rn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},jt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ut=["GK","DEF","MIL","ATT"],Yn=["Tous","GK","DEF","MIL","ATT"],Wn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function qi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Jn(e){return e.length?e.reduce((t,i)=>qi(i)>qi(t)?i:t,e[0]):e[0]}function an(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const $i={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function sn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Gt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function ri(e,t=""){var h,v;const i=e.player;if(!i)return"";const a=i.job||"ATT",c=jt[a],l=rn[i.rarity]||"#ccc",s=i.rarity==="pepite"||i.rarity==="papyte",d=s&&e.current_note!=null?e.current_note:Gt(i,a),u=i.job2?s?vi(e,an(i.job2)):Gt(i,i.job2):null,o=i.job2?jt[i.job2]:null,n=sn(i),f=$i[i.country_code]||i.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${l};cursor:pointer;flex-shrink:0;position:relative
  " data-card-id="${e.id}">
    ${t}
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${i.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(i.surname_encoded||"").toUpperCase()}</div>
      </div>
      <!-- Zone étoiles : bandeau fixe + étoile principale dedans + petite étoile dessous -->
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <!-- Bandeau de couleur fixe (toujours au même endroit) -->
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${c}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${c}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${d}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${u!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${o}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${u}</text>
        </svg>`:""}
      </div>
      <!-- Portrait -->
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${n?`<img src="${n}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${i.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${f}</div>
        ${(h=i.clubs)!=null&&h.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((v=i.clubs)==null?void 0:v.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Fi(e){const t=e.job||"ATT",i=Gt(e,t),a=$i[e.country_code]||e.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:#ccc;flex-shrink:0;position:relative;filter:grayscale(1);opacity:0.45
  ">
    <div style="background:#e8e8e8;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#888">${e.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#444;font-family:Arial Black,Arial;line-height:1.1">${(e.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#e8e8e8;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:#999"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="#999" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${i}</text>
        </svg>
      </div>
      <div style="height:106px;overflow:hidden;background:#ddd;display:flex;align-items:center;justify-content:center;font-size:36px;color:#aaa">👤</div>
      <div style="background:#e8e8e8;padding:3px 6px;display:flex;align-items:center;justify-content:center;min-height:26px">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${a}</div>
      </div>
    </div>
  </div>`}async function Xn(e,t){const{state:i,navigate:a,toast:c,openModal:l,closeModal:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:u}=await E.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(d||[]).filter(O=>O.card_type==="player"&&O.player),n=(d||[]).filter(O=>O.card_type==="game_changer"),f=(d||[]).filter(O=>O.card_type==="formation"),h=(d||[]).filter(O=>O.card_type==="stadium"),{data:v}=await E.from("gc_definitions").select("name,gc_type,color,effect,image_url"),A={};(v||[]).forEach(O=>{A[O.name]=O});const{data:r}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),p={};(r||[]).forEach(O=>{p[O.id]=O});const I=Object.keys(xi),z=Object.keys(Ke),C={};o.forEach(O=>{const Z=O.player.id;C[Z]=(C[Z]||0)+1}),new Set(Object.keys(C).map(O=>String(O)));const U=new Set(f.map(O=>O.formation)),D=new Set(n.map(O=>O.gc_type));let N="player",G="Tous",ie="",se=!1;function de(){return[...o].sort((O,Z)=>{const ue=Ut.indexOf(O.player.job),me=Ut.indexOf(Z.player.job);return ue!==me?ue-me:(O.player.surname_encoded||"").localeCompare(Z.player.surname_encoded||"")})}function P(){return[...u||[]].sort((O,Z)=>{const ue=Ut.indexOf(O.job),me=Ut.indexOf(Z.job);return ue!==me?ue-me:(O.surname_encoded||"").localeCompare(Z.surname_encoded||"")})}function Y(){return de().filter(O=>{const Z=O.player,ue=G==="Tous"||Z.job===G,me=!ie||`${Z.firstname} ${Z.surname_encoded}`.toLowerCase().includes(ie);return ue&&me})}function V(){return P().filter(O=>{const Z=G==="Tous"||O.job===G,ue=!ie||`${O.firstname} ${O.surname_encoded}`.toLowerCase().includes(ie);return Z&&ue})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${N==="player"?"var(--green)":"transparent"};
        color:${N==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${N==="formation"?"var(--green)":"transparent"};
        color:${N==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${f.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${N==="gc"?"var(--green)":"transparent"};
        color:${N==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${n.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${N==="stadium"?"#E87722":"transparent"};
        color:${N==="stadium"?"#E87722":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${h.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function B(){const O=document.getElementById("col-filters");O&&(N==="player"?(O.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${ie}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Yn.map(Z=>`
            <button class="filter-btn" data-job="${Z}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${Z===G?"var(--green)":"var(--gray-200)"};
                background:${Z===G?"var(--green)":"#fff"};
                color:${Z===G?"#fff":"var(--gray-600)"}">
              ${Z}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${se?"var(--yellow)":"var(--gray-200)"};
              background:${se?"var(--yellow)":"#fff"};
              color:${se?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${se?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",Z=>{ie=Z.target.value.toLowerCase(),oe()}),e.querySelectorAll(".filter-btn").forEach(Z=>{Z.addEventListener("click",()=>{G=Z.dataset.job,B(),oe()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{se=!se,B(),oe()})):(O.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${se?"var(--yellow)":"var(--gray-200)"};
              background:${se?"var(--yellow)":"#fff"};
              color:${se?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${se?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{se=!se,B(),oe()})))}function oe(){const O=document.getElementById("col-grid");O&&(N==="player"?$e(O):N==="formation"?Ee(O):N==="stadium"?re(O):te(O))}function pe(O,Z,ue,me,X){const be=document.getElementById("col-grid"),ge=document.getElementById("col-big");if(!be||!ge)return;var Se=0;function Ce(){const Be=window.innerWidth>=768,qe=document.getElementById("col-big"),De=document.getElementById("col-grid");Be&&qe&&(qe.style.minHeight="420px",qe.style.flex="1 1 auto"),Be&&De&&(De.style.height=Math.round(310*.76+16)+"px",De.style.flexShrink="0",De.style.overflowX="auto",De.style.overflowY="hidden",De.style.alignItems="center",De.style.padding="8px 16px"),ge.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+Z(O[Se])+"</div>";var M=ge.querySelector("[data-card-id],[data-form-id],[data-gc-id]");M&&M.addEventListener("click",function(){me(O[Se])}),requestAnimationFrame(function(){var q=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!q||!ge)){var w=ge.clientHeight-8,k=ge.clientWidth-24,g=q.offsetHeight,m=q.offsetWidth;if(g>0&&m>0&&w>40){var x=Be?2.2:1,y=Math.min(w/g,k/m,x);q.style.transform="scale("+y.toFixed(3)+")",q.style.transformOrigin="top center"}}}),be.innerHTML=O.map(function(q,w){var k=w===Se,g="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(k?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+w+'" style="'+g+'">'+ue(q,k)+"</div>"}).join(""),be.querySelectorAll(".col-mini-item").forEach(function(q){q.addEventListener("click",function(){Se=Number(q.dataset.idx),Ce(),q.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Ce()}function ye(O){var Z=window.innerWidth>=768?.76:.54,ue;if(!O||O._fake){var me=O?O.player:null;if(!me)return"";ue=Fi(me)}else ue=ri(O,"");return'<div style="display:inline-block;zoom:'+Z+';pointer-events:none;line-height:0">'+ue+"</div>"}function ze(O,Z,ue){Z=Z||100,ue=ue||140;var me=Pt[O]||{},X={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},be=Math.max(3,Math.round(Z*.06)),ge=Object.entries(me).map(function(Ce){var Be=Ce[0],qe=Ce[1],De=Be.replace(/\d+$/,""),M=X[De]||"#888",q=Math.round(qe.x*Z),w=Math.round(qe.y*ue);return'<circle cx="'+q+'" cy="'+w+'" r="'+be+'" fill="'+M+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Se=Math.max(1,Math.round(Z/50));return'<svg viewBox="0 0 '+Z+" "+ue+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+Z+'" height="'+ue+'" fill="#1A6B3C"/><rect x="'+Math.round(Z*.2)+'" y="'+Math.round(ue*.02)+'" width="'+Math.round(Z*.6)+'" height="'+Math.round(ue*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Se+'"/><line x1="0" y1="'+Math.round(ue*.5)+'" x2="'+Z+'" y2="'+Math.round(ue*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Se+'"/><ellipse cx="'+Math.round(Z*.5)+'" cy="'+Math.round(ue*.5)+'" rx="'+Math.round(Z*.18)+'" ry="'+Math.round(ue*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Se+'"/><rect x="'+Math.round(Z*.2)+'" y="'+Math.round(ue*.82)+'" width="'+Math.round(Z*.6)+'" height="'+Math.round(ue*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Se+'"/>'+ge+"</svg>"}function Te(O,Z,ue){var me=ue>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+ue+"</div>":"",X=Z?'data-form-id="'+Z.id+'"':"",be=O.length>7?14:O.length>5?16:19,ge=!!Z;return"<div "+X+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(ge?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(ge?"":"filter:grayscale(1);opacity:0.5")+'">'+me+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(ge?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+be+"px;font-weight:900;color:"+(ge?"#1A6B3C":"#aaa")+';line-height:1">'+O+'</div></div><div style="flex:1;overflow:hidden;background:'+(ge?"#1A6B3C":"#ccc")+'">'+ze(O,140,220)+"</div></div>"}function we(O,Z){var ue=window.innerWidth>=768?.76:.54,me=140,X=305,be=Math.round(X*.22),ge=X-be,Se=O.length>7?10:13,Ce=ze(O,me,ge),Be=Z?"1.5px solid #2a7a40":"1px solid #ddd",qe=Z?"":"filter:grayscale(1);opacity:0.45;",De=Z?"#1A6B3C":"#bbb",M="#fff";return'<div style="display:inline-block;zoom:'+ue+';line-height:0;pointer-events:none"><div style="width:'+me+"px;height:"+X+"px;border-radius:6px;border:"+Be+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+qe+'"><div style="height:'+be+"px;background:"+De+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Se+"px;font-weight:900;color:"+M+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(me-4)+'px">'+O+'</span></div><div style="height:'+ge+'px;overflow:hidden;flex-shrink:0">'+Ce+"</div></div></div>"}function $e(O){if(se){const Z=V();if(!Z.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const ue=Z.map(me=>o.find(X=>X.player.id===me.id)||{_fake:!0,player:me,id:"fake-"+me.id});pe(ue,me=>me._fake?Fi(me.player):ri(me,""),me=>me._fake?ye({player:me.player,id:"x",_fake:!0}):ye(me),me=>{me._fake||Bi(me,o,C,t)})}else{const Z=Y();if(!Z.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const ue={};Z.forEach(X=>{const be=X.player.id;ue[be]||(ue[be]=[]),ue[be].push(X)});const me=Object.values(ue).map(X=>Jn(X));pe(me,X=>{const be=C[X.player.id]||1,ge=be>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${be}</div>`:"",Ce=o.filter(Be=>Be.player.id===X.player.id&&Be.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return ri(X,ge+Ce)},X=>ye(X),X=>Bi(X,o,C,t))}}function Ee(O){const Z=se?I:[...U];if(!Z.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const ue=Z.map(me=>({formation:me,card:f.find(X=>X.formation===me)||null,owned:U.has(me)}));pe(ue,({formation:me,card:X,owned:be})=>Te(me,be?X:null,be?f.filter(ge=>ge.formation===me).length:0),({formation:me,owned:X})=>we(me,X),({card:me,owned:X})=>{X&&me&&Qn(me,f,t,l)})}function te(O){const Z=Object.keys(A),ue=se?Z.length?Z:z:[...D];if(!ue.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const me=ue.map(X=>({type:X,gc:Ke[X]||{icon:"⚡",desc:""},def:A[X]||null,owned:D.has(X),card:n.find(be=>be.gc_type===X)||null}));pe(me,({type:X,gc:be,def:ge,owned:Se,card:Ce})=>{const Be=Se?n.filter(x=>x.gc_type===X).length:0,qe=Be>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Be}</div>`:"",De=(ge==null?void 0:ge.gc_type)==="ultra_game_changer",M={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},q={purple:"#b06ce0",light_blue:"#00d4ef"},w=M[ge==null?void 0:ge.color]||M.purple,k=q[ge==null?void 0:ge.color]||q.purple,g=(ge==null?void 0:ge.effect)||be.desc||"",m=ge!=null&&ge.image_url?`/manager-wars/icons/${ge.image_url}`:null;return Se&&Ce?`<div data-gc-id="${Ce.id}" data-gc-type="${X}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${k};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${k}66;cursor:pointer">
          ${qe}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${X.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${X}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${De?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${m?`<img src="${m}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${be.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${g.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${X}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${be.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:X,gc:be,def:ge,owned:Se})=>{const Ce=window.innerWidth>=768?.76:.54,Be={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},qe={purple:"#9b59b6",light_blue:"#00bcd4"},De=Be[ge==null?void 0:ge.color]||Be.purple,M=qe[ge==null?void 0:ge.color]||qe.purple,q=ge!=null&&ge.image_url?`/manager-wars/icons/${ge.image_url}`:null;return Se?`<div style="display:inline-block;zoom:${Ce};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${De};border:1px solid ${M};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${X}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${q?`<img src="${q}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${be.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((ge==null?void 0:ge.effect)||be.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Ce};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${be.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${X}</span></div></div>`},({type:X,owned:be,def:ge})=>{be&&Zn(X,ge,l)})}function re(O){const Z="#E87722";if(!h.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const ue={};h.forEach(X=>{const be=X.stadium_id||"?";(ue[be]=ue[be]||[]).push(X)});const me=Object.entries(ue).map(([X,be])=>({sid:X,def:p[X]||null,count:be.length,card:be[0]}));pe(me,({def:X,count:be})=>{var De,M;const ge=(X==null?void 0:X.name)||"?",Se=((De=X==null?void 0:X.club)==null?void 0:De.encoded_name)||(X==null?void 0:X.country_code)||"—",Ce=X!=null&&X.image_url?"${BASE2}icons/${def.image_url}":((M=X==null?void 0:X.club)==null?void 0:M.logo_url)||(X!=null&&X.country_code?"https://flagcdn.com/64x48/${def.country_code.toLowerCase()}.png":null),Be=Ce?`<img src="${Ce}" style="width:90px;height:90px;object-fit:contain">`:'<div style="font-size:56px">🏟️</div>',qe=be>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${be}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${Z},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Z}66">
          ${qe}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${ge}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${Be}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Se}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:X,count:be})=>{var De,M;const ge=window.innerWidth>=768?.76:.54,Se=(X==null?void 0:X.name)||"?",Ce=((De=X==null?void 0:X.club)==null?void 0:De.encoded_name)||(X==null?void 0:X.country_code)||"—",Be=X!=null&&X.image_url?"${BASE2}icons/${def.image_url}":((M=X==null?void 0:X.club)==null?void 0:M.logo_url)||(X!=null&&X.country_code?"https://flagcdn.com/64x48/${def.country_code.toLowerCase()}.png":null),qe=Be?`<img src="${Be}" style="width:60px;height:60px;object-fit:contain">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${ge};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${Z},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:56px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6)">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${Se}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${qe}</div>
            <div style="height:54px;display:flex;align-items:center;justify-content:center;flex-direction:column;background:rgba(0,0,0,0.3);padding:4px">
              <div style="font-size:10px;color:rgba(255,255,255,0.8)">${Ce}</div>
              <div style="font-size:12px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(O=>{O.addEventListener("click",()=>{N=O.dataset.tab,G="Tous",ie="",se=!1,e.querySelectorAll(".col-tab-btn").forEach(Z=>{const ue=Z.dataset.tab===N;Z.style.borderBottomColor=ue?"var(--green)":"transparent",Z.style.color=ue?"var(--green)":"var(--gray-600)"}),B(),oe()})}),B(),oe()}function Zn(e,t,i){const a=Ke[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},d=l[t==null?void 0:t.color]||l.purple,u=s[t==null?void 0:t.color]||s.purple,o=(t==null?void 0:t.name)||e,n=(t==null?void 0:t.effect)||a.desc,f=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${d};border-radius:16px;border:2px solid ${u};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${o}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${f?`<img src="${f}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${a.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${n}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Vt=1e3;function Qn(e,t,i,a){var A,r,p;const{state:c,toast:l,closeModal:s,navigate:d,refreshProfile:u}=i,o=e.formation,n={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const I=Pt[o]||{},z=xi[o]||[],C=290,U=360,D=20;function N(ie){const se=I[ie];return se?{x:se.x*C,y:se.y*U}:null}let G=`<svg width="${C}" height="${U}" viewBox="0 0 ${C} ${U}" xmlns="http://www.w3.org/2000/svg">`;for(const[ie,se]of z){const de=N(ie),P=N(se);!de||!P||(G+=`<line x1="${de.x}" y1="${de.y}" x2="${P.x}" y2="${P.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const ie of Object.keys(I)){const se=N(ie);if(!se)continue;const de=ie.replace(/\d+/,""),P=n[de]||"#555";G+=`<circle cx="${se.x}" cy="${se.y}" r="${D}" fill="${P}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,G+=`<text x="${se.x}" y="${se.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${de}</text>`}return G+="</svg>",G}const h=t.filter(I=>I.formation===o);h.length;const v=!e.is_for_sale;a(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${f()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+1</b> à l'action.
      </div>
    </div>
    ${clubsHTML}

    <!-- Marché (optionnel) -->
    ${v?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Vt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(A=document.getElementById("direct-sell-form-btn"))==null||A.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${Vt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const I=h.find(C=>!C.is_for_sale)||h[0];if(!I){l("Aucune carte à vendre","error");return}await E.from("market_listings").delete().eq("card_id",I.id),await E.from("transfer_history").delete().eq("card_id",I.id);const{error:z}=await E.from("cards").delete().eq("id",I.id);if(z){l(z.message,"error");return}await E.from("users").update({credits:(c.profile.credits||0)+Vt}).eq("id",c.profile.id),await u(),l(`+${Vt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),d("collection")}),(r=document.getElementById("market-sell-form-btn"))==null||r.addEventListener("click",async()=>{const I=parseInt(document.getElementById("sell-price-form").value);if(!I||I<1){l("Prix invalide","error");return}await E.from("cards").update({is_for_sale:!0,sale_price:I}).eq("id",e.id),await E.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:I}),l("Carte mise en vente sur le marché !","success"),s(),d("collection")}),(p=document.getElementById("cancel-sell-form-btn"))==null||p.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),l("Annonce retirée","success"),s(),d("collection")})}async function Bi(e,t,i,a){var pe,ye,ze,Te,we,$e,Ee;const{state:c,toast:l,openModal:s,closeModal:d,navigate:u,refreshProfile:o}=a,n=e.player,f=t.filter(te=>te.player.id===n.id),h=f.length,v=Math.max(Number(n.note_g)||0,Number(n.note_d)||0,Number(n.note_m)||0,Number(n.note_a)||0),A=n.rarity||"normal",{data:r}=await E.from("sell_price_configs").select("*").eq("rarity",A).lte("note_min",v).gte("note_max",v).order("note_min",{ascending:!1}).limit(1),p=((pe=r==null?void 0:r[0])==null?void 0:pe.price)??Wn[A]??1e3,I=n.rarity!=="legende",z=sn(n),C=(n.rarity==="pepite"||n.rarity==="papyte")&&e.current_note!=null?e.current_note:Gt(n,n.job),U=n.rarity==="pepite"||n.rarity==="papyte",D=n.job2?U?vi(e,an(n.job2)):Gt(n,n.job2):null,N=jt[n.job]||"#1A6B3C",G=n.job2?jt[n.job2]:null,ie=rn[n.rarity]||"#ccc",se=$i[n.country_code]||n.country_code||"",de=f.map(te=>te.id);let P={};if(de.length){const{data:te}=await E.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",de).order("transferred_at",{ascending:!0});(te||[]).forEach(re=>{P[re.card_id]||(P[re.card_id]=[]),P[re.card_id].push(re)})}const Y=te=>{const re=te.transferred_at?new Date(te.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",O=te.source==="booster"?"Booster":te.price?te.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${te.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${te.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${te.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${O}</div>
        <div style="font-size:11px;color:var(--gray-600)">${re}</div>
      </div>
    </div>`},V=de.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${h>1?`(${h})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${f.map((te,re)=>{const O=P[te.id]||[],Z=te.is_for_sale,ue=O.length?O[O.length-1]:null,X=(n.rarity==="pepite"||n.rarity==="papyte")&&te.current_note!=null?` (☆${te.current_note})`:"";return`
            <div data-card-id="${te.id}" data-card-idx="${re}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${Z?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${te.id}" ${Z?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${re+1}${X}${Z?" 🏷️ En vente":""}</div>
                  ${ue?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${ue.club_name} · ${ue.source==="booster"?"Booster":ue.price?ue.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${re}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${O.length?`${O.length} club${O.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${re}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${O.map(Y).join("")}
              </div>
            </div>`}).join("")}
      </div>

      <!-- Panneau d'action (visible quand au moins 1 sélectionné) -->
      <div id="sell-action-panel" style="display:none;margin-top:12px;background:#f0fdf4;border:2px solid #1A6B3C;border-radius:12px;padding:14px">
        <div style="font-size:13px;font-weight:900;color:#1A6B3C;margin-bottom:10px">
          <span id="sell-selected-count">0</span> exemplaire(s) sélectionné(s)
        </div>

        <!-- Vente directe -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
          <div>
            <div style="font-size:11px;color:#555">Vente directe</div>
            <div id="sell-direct-total" style="font-size:16px;font-weight:900;color:#D4A017">${p.toLocaleString("fr")} cr.</div>
          </div>
          <button id="direct-sell-btn" class="btn btn-yellow" style="padding:8px 16px">
            Vendre
          </button>
        </div>

        <!-- Marché -->
        ${I?`
        <div style="border-top:1px solid #d1fae5;padding-top:8px">
          <div style="font-size:11px;color:#555;margin-bottom:6px">Marché des transferts (prix par carte)</div>
          <div style="display:flex;gap:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${n.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>`:""}
      </div>
    </div>`:"";s(`${n.firstname} ${n.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${ie};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${n.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(n.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${N}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${N}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${C}</text>
            </svg>
            ${D!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${G}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${D}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${z?`<img src="${z}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${n.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${se}</div>
            ${(ye=n.clubs)!=null&&ye.logo_url?`<img src="${n.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((ze=n.clubs)==null?void 0:ze.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${ie}">${n.rarity.toUpperCase()}</div>
          ${n.rarity==="pepite"||n.rarity==="papyte"?`
          <div style="margin-top:6px;background:${ie}18;border-left:3px solid ${ie};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${ie};margin-bottom:2px">Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5">
              ${n.rarity==="pepite"?"✅ Victoire : <b>+2</b> &nbsp;|&nbsp; ❌ Défaite : <b>-1</b>":"✅ Victoire : <b>+1</b> &nbsp;|&nbsp; ❌ Défaite : <b>-2</b>"}
              <br>Note actuelle : <b>${e.current_note??(n.rarity==="pepite"?n.note_min:n.note_max)??"—"}</b>
              &nbsp;·&nbsp; Min : <b>${n.note_min??"—"}</b>
              &nbsp;·&nbsp; Max : <b>${n.note_max??"—"}</b>
            </div>
          </div>`:""}
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${n.job}${n.job2?" / "+n.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",n.note_g],["DEF",n.note_d],["MIL",n.note_m],["ATT",n.note_a]].map(([te,re])=>{const O=jt[te],Z=Number(re)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${O}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${Z}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${te}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${h}</div>
        </div>
      </div>
    </div>
    ${V}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(Te=document.getElementById("close-detail"))==null||Te.addEventListener("click",d);let B=new Set;const oe=()=>{const te=B.size,re=document.getElementById("sell-action-panel");re&&(re.style.display=te>0?"block":"none",document.getElementById("sell-selected-count").textContent=te,document.getElementById("sell-direct-total").textContent=(te*p).toLocaleString("fr")+" cr.")};document.querySelectorAll(".expl-check").forEach(te=>{te.addEventListener("change",()=>{const re=te.dataset.id;te.checked?B.add(re):B.delete(re);const O=te.closest(".exemplaire-row");O&&(O.style.borderColor=te.checked?"#1A6B3C":"#eee"),oe()})}),document.querySelectorAll(".exemplaire-row").forEach(te=>{te.addEventListener("click",re=>{if(re.target.closest("button")||re.target.tagName==="INPUT")return;const O=te.querySelector(".expl-check");O&&!O.disabled&&(O.checked=!O.checked,O.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(te=>{te.addEventListener("click",re=>{re.stopPropagation();const O=document.querySelector(`.expl-hist[data-hist="${te.dataset.idx}"]`);O&&(O.style.display=O.style.display==="none"?"flex":"none")})}),(we=document.getElementById("direct-sell-btn"))==null||we.addEventListener("click",async()=>{const te=[...B];if(!te.length)return;const re=te.length*p;if(!confirm(`Vendre ${te.length} carte${te.length>1?"s":""} ${n.surname_encoded} pour ${re.toLocaleString("fr")} crédits ? Action irréversible.`))return;await E.from("market_listings").delete().in("card_id",te),await E.from("transfer_history").delete().in("card_id",te);const{error:O}=await E.from("cards").delete().in("id",te);if(O){l(O.message,"error");return}await E.from("users").update({credits:(c.profile.credits||0)+re}).eq("id",c.profile.id),await o();const Z=document.getElementById("nav-credits");Z&&(Z.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),l(`+${re.toLocaleString("fr")} crédits ! ${te.length} carte${te.length>1?"s":""} vendue${te.length>1?"s":""}.`,"success"),d(),u("collection")}),($e=document.getElementById("market-sell-btn"))==null||$e.addEventListener("click",async()=>{var me;const te=[...B];if(!te.length){l("Sélectionne au moins un exemplaire","warning");return}const re=parseInt((me=document.getElementById("sell-market-price"))==null?void 0:me.value);if(!re||re<1){l("Prix invalide","error");return}const{error:O}=await E.from("cards").update({is_for_sale:!0,sale_price:re}).in("id",te);if(O){l(O.message,"error");return}const Z=te.map(X=>({seller_id:c.profile.id,card_id:X,price:re,status:"active"})),{error:ue}=await E.from("market_listings").insert(Z);ue&&console.warn("[Market] insert listings:",ue.message),l(`${te.length} carte${te.length>1?"s":""} mise${te.length>1?"s":""} en vente à ${re.toLocaleString("fr")} cr. chacune !`,"success"),d(),u("collection")}),(Ee=document.getElementById("cancel-sell-btn"))==null||Ee.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),l("Annonce retirée","success"),d(),u("collection")})}const Jt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},vt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ei(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function dn(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ln(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function eo(e,t=44,i=58){var v;const a=e?ei(e):null,c=e?ln(e):null,l=dn(e==null?void 0:e.country_code),s=(e==null?void 0:e.job)||"MIL",d=vt[s]||"#555",u={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=Number(s==="GK"?e==null?void 0:e.note_g:s==="DEF"?e==null?void 0:e.note_d:s==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,n=Math.round(i*.19),f=Math.round(i*.25),h=i-n-f;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${u};background:${d};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${n}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${n}px;left:0;width:${t}px;height:${h}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${l?`<img src="${l}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">🌍</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${o}</span>
      ${c?`<img src="${c}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:(v=e==null?void 0:e.clubs)!=null&&v.encoded_name?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function li(e,t){const{state:i,navigate:a,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await E.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(l==null?void 0:l.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(l==null?void 0:l.length)>0?l.map(s=>`
          <div class="card-panel" data-open-deck="${s.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="font-weight:700;font-size:15px;flex:1">${s.name}</div>
            <div style="display:flex;gap:6px" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${s.id}" data-name="${s.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${s.id}" data-name="${s.name}">🗑️</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((l==null?void 0:l.length)||0)+1}`);if(!s)return;const{data:d,error:u}=await E.from("decks").insert({owner_id:i.profile.id,name:s}).select().single();if(u){c(u.message,"error");return}c("Deck créé !","success"),Di(d.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>Di(s.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const d=prompt("Nouveau nom :",s.dataset.name);if(!d||d===s.dataset.name)return;const{error:u}=await E.from("decks").update({name:d}).eq("id",s.dataset.rename);if(u){c(u.message,"error");return}c("Deck renommé !","success"),li(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await E.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:d}=await E.from("decks").delete().eq("id",s.dataset.delete);if(d){c(d.message,"error");return}c("Deck supprimé.","success"),li(e,t)})})}async function Di(e,t,i){const{state:a,toast:c}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await E.from("decks").select("*").eq("id",e).single(),{data:s}=await E.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),d=(s||[]).filter(p=>p.card_type==="player"&&p.player),u=(s||[]).filter(p=>p.card_type==="formation"),o=(s||[]).filter(p=>p.card_type==="stadium"),n=[...new Set(o.map(p=>p.stadium_id).filter(Boolean))];let f={};if(n.length){const{data:p}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",n);(p||[]).forEach(I=>{f[I.id]=I})}const h=u.map(p=>p.formation).filter(Boolean),{data:v}=await E.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let A=l.formation||"4-4-2";h.length>0&&!h.includes(A)&&(A=h[0]);const r={deckId:e,name:l.name,formation:A,formationCardId:l.formation_card_id,stadiumCardId:l.stadium_card_id||null,slots:{},subs:[],playerCards:d,formationCards:u,stadiumCards:o,stadDefMap:f,availableFormations:h};(v||[]).forEach(p=>{p.is_starter?r.slots[p.position]=p.card_id:r.subs.includes(p.card_id)||r.subs.push(p.card_id)}),St(t,r,i)}function St(e,t,i){var u,o;const{navigate:a}=i;Jt[t.formation];const c=Gi(t.formation),l=c.filter(n=>t.slots[n]).length,s=t.availableFormations.length>0?t.availableFormations:Object.keys(Jt),d=t.subs.map(n=>t.playerCards.find(f=>f.id===n)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${t.name}</h2>
        <p>${l}/11 titulaires · ${t.subs.length}/5 remplaçants</p>
      </div>
    </div>

    <!-- Formation (uniquement les cartes possédées) -->
    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <label style="font-size:11px;margin-bottom:4px;display:block">Formation ${t.availableFormations.length===0?"(aucune carte — toutes disponibles)":""}</label>
      <select id="formation-select" style="width:100%;padding:7px;border-radius:6px;border:1.5px solid var(--gray-200)">
        ${s.map(n=>`<option value="${n}" ${n===t.formation?"selected":""}>${n}</option>`).join("")}
      </select>
    </div>

    <!-- Carte Stade -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;gap:10px">
      <span style="font-size:18px">🏟️</span>
      <div style="flex:1;font-size:12px;font-weight:700;color:#555">Carte Stade <span style="font-size:10px;color:#aaa;font-weight:400">(+10 aux joueurs du même club/pays)</span></div>
      ${t.stadiumCards.length>0?`
        <select id="stadium-select" style="padding:6px;border-radius:6px;border:1.5px solid #E87722;font-size:12px;max-width:180px;background:#fff">
          <option value="">Aucun stade</option>
          ${t.stadiumCards.map(n=>{var v;const f=t.stadDefMap[n.stadium_id],h=f?f.name+((v=f.club)!=null&&v.encoded_name?` (${f.club.encoded_name})`:f.country_code?` (${f.country_code})`:""):n.id.slice(0,8);return`<option value="${n.id}" ${t.stadiumCardId===n.id?"selected":""}>${h}</option>`}).join("")}
        </select>`:'<span style="font-size:11px;color:#aaa">Aucune carte Stade possédée</span>'}
    </div>

    <!-- Terrain -->
    <div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);padding:0;position:relative">
      <div id="deck-field"></div>
    </div>

    <!-- Remplaçants → mini cartes -->
    <div style="padding:10px 12px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.1)">
      <div style="font-size:11px;font-weight:700;margin-bottom:8px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">Remplaçants (${t.subs.length}/5)</div>
      <div style="display:flex;gap:8px;align-items:flex-end;overflow-x:auto;padding-bottom:4px" id="subs-list">
        ${d.map(n=>{const f=n.player;return`<div style="position:relative;flex-shrink:0">
            ${eo(f,44,58)}
            <button data-remove-sub="${n.id}"
              style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>
          </div>`}).join("")}
        ${t.subs.length<5?'<div id="add-sub-btn" style="width:44px;height:58px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:22px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${l<11?"disabled":""}>
        ${l<11?`Placez encore ${11-l} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`,to(e,t,c,i),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",n=>{t.formation=n.target.value;const f=Gi(t.formation),h={};f.forEach(v=>{t.slots[v]&&(h[v]=t.slots[v])}),t.slots=h,St(e,t,i)}),(u=document.getElementById("stadium-select"))==null||u.addEventListener("change",n=>{t.stadiumCardId=n.target.value||null}),document.getElementById("save-deck").addEventListener("click",()=>oo(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(n=>{n.addEventListener("click",()=>{t.subs=t.subs.filter(f=>f!==n.dataset.removeSub),St(e,t,i)})}),(o=document.getElementById("add-sub-btn"))==null||o.addEventListener("click",()=>{no(t,e,i)})}function to(e,t,i,a){const c=e.querySelector("#deck-field");if(!c)return;const l=Pt[t.formation]||{},s=Yi(t.formation)||[],d={};for(const I of i){const z=t.slots[I],C=z?t.playerCards.find(U=>U.id===z):null;d[I]=C?C.player:null}const u=300,o=300,n=48,f=64,h=13,v=16,A=38;function r(I){const z=l[I];return z?{x:z.x*u,y:z.y*o}:null}let p="";for(const[I,z]of s){const C=r(I),U=r(z);if(!C||!U)continue;const D=d[I]?{...d[I],club_id:d[I].club_id,country_code:d[I].country_code,rarity:d[I].rarity}:null,N=d[z]?{...d[z],club_id:d[z].club_id,country_code:d[z].country_code,rarity:d[z].rarity}:null,G=at(D,N);G==="#ff3333"||G==="#cc2222"?p+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${U.x.toFixed(1)}" y2="${U.y.toFixed(1)}" stroke="${G}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(p+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${U.x.toFixed(1)}" y2="${U.y.toFixed(1)}" stroke="${G}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,p+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${U.x.toFixed(1)}" y2="${U.y.toFixed(1)}" stroke="${G}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const I of i){const z=r(I);if(!z)continue;const C=d[I],U=I.replace(/\d+/,""),D=vt[U]||"#555",N=(z.x-n/2).toFixed(1),G=(z.y-f/2).toFixed(1),ie={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[C==null?void 0:C.rarity]||"#aaa";if(C){const se=ei(C),de=ln(C),P=dn(C.country_code),Y=Number(U==="GK"?C.note_g:U==="DEF"?C.note_d:U==="MIL"?C.note_m:C.note_a)||0,V=f-h-v;p+=`<defs><clipPath id="dcp-${I}"><rect x="${N}" y="${(z.y-f/2+h).toFixed(1)}" width="${n}" height="${V}"/></clipPath></defs>`,p+=`<rect x="${N}" y="${G}" width="${n}" height="${f}" rx="5" fill="${D}"/>`,se&&(p+=`<image href="${se}" x="${N}" y="${(z.y-f/2+h).toFixed(1)}" width="${n}" height="${V}" clip-path="url(#dcp-${I})" preserveAspectRatio="xMidYMin slice"/>`),p+=`<rect x="${N}" y="${G}" width="${n}" height="${h}" fill="rgba(255,255,255,0.93)"/>`,p+=`<text x="${z.x.toFixed(1)}" y="${(z.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(C.surname_encoded||"").slice(0,9)}</text>`;const B=(z.y+f/2-v).toFixed(1);p+=`<rect x="${N}" y="${B}" width="${n}" height="${v}" fill="rgba(255,255,255,0.93)"/>`,P&&(p+=`<image href="${P}" x="${(z.x-21).toFixed(1)}" y="${(z.y+f/2-v+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),p+=`<text x="${z.x.toFixed(1)}" y="${(z.y+f/2-v/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`,de&&(p+=`<image href="${de}" x="${(z.x+n/2-14).toFixed(1)}" y="${(z.y+f/2-v+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),p+=`<rect x="${N}" y="${G}" width="${n}" height="${f}" rx="5" fill="none" stroke="${ie}" stroke-width="2"/>`}else p+=`<rect x="${N}" y="${G}" width="${n}" height="${f}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,p+=`<text x="${z.x.toFixed(1)}" y="${z.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,p+=`<text x="${z.x.toFixed(1)}" y="${(z.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${U}</text>`;p+=`<rect x="${N}" y="${G}" width="${n}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${I}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-A} ${-A} ${u+A*2} ${o+A*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${p}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(I=>{I.addEventListener("click",()=>io(I.dataset.pos,t,e,a))})}function io(e,t,i,a){var h,v,A;const{openModal:c,closeModal:l}=a,s=e.replace(/\d+/,""),d=t.slots[e],u=d?t.playerCards.find(r=>r.id===d):null;(h=u==null?void 0:u.player)==null||h.id;const o=new Set;Object.entries(t.slots).forEach(([r,p])=>{var z;if(r===e||!p)return;const I=t.playerCards.find(C=>C.id===p);(z=I==null?void 0:I.player)!=null&&z.id&&o.add(I.player.id)}),t.subs.forEach(r=>{var I;const p=t.playerCards.find(z=>z.id===r);(I=p==null?void 0:p.player)!=null&&I.id&&o.add(p.player.id)});const n=new Set,f=t.playerCards.filter(r=>{const p=r.player;return!(p.job===s||p.job2===s)||o.has(p.id)||n.has(p.id)?!1:(n.add(p.id),!0)});f.sort((r,p)=>{const I=s==="GK"?r.player.note_g:s==="DEF"?r.player.note_d:s==="MIL"?r.player.note_m:r.player.note_a;return(s==="GK"?p.player.note_g:s==="DEF"?p.player.note_d:s==="MIL"?p.player.note_m:p.player.note_a)-I}),c(`Choisir ${s} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${f.length>0?f.map(r=>{var U,D;const p=r.player,I=s==="GK"?p.note_g:s==="DEF"?p.note_d:s==="MIL"?p.note_m:p.note_a,z=ei(p),C={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[p.rarity];return`<div class="player-option" data-card-id="${r.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[s]}">
            ${z?`<img src="${z}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${vt[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${p.firstname} ${p.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${p.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${p.country_code}">
              ${(U=p.clubs)!=null&&U.logo_url?`<img src="${p.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((D=p.clubs)==null?void 0:D.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${p.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${vt[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${C};flex-shrink:0">
            ${I}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(v=document.getElementById("close-selector"))==null||v.addEventListener("click",l),(A=document.getElementById("remove-player"))==null||A.addEventListener("click",()=>{delete t.slots[e],l(),St(i,t,a)}),document.querySelectorAll(".player-option").forEach(r=>{r.addEventListener("click",()=>{t.slots[e]=r.dataset.cardId,l(),St(i,t,a)})})}function no(e,t,i){var u;const{openModal:a,closeModal:c}=i,l=new Set;Object.values(e.slots).filter(Boolean).forEach(o=>{var f;const n=e.playerCards.find(h=>h.id===o);(f=n==null?void 0:n.player)!=null&&f.id&&l.add(n.player.id)}),e.subs.forEach(o=>{var f;const n=e.playerCards.find(h=>h.id===o);(f=n==null?void 0:n.player)!=null&&f.id&&l.add(n.player.id)});const s=new Set,d=e.playerCards.filter(o=>{var n,f,h;return l.has((n=o.player)==null?void 0:n.id)||s.has((f=o.player)==null?void 0:f.id)?!1:(s.add((h=o.player)==null?void 0:h.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${d.length>0?d.map(o=>{var v;const n=o.player,f=ei(n),h=n.job==="GK"?n.note_g:n.job==="DEF"?n.note_d:n.job==="MIL"?n.note_m:n.note_a;return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[n.job]}">
            ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${n.firstname} ${n.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${n.job} · ${n.country_code} · ${((v=n.clubs)==null?void 0:v.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${vt[n.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${h}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(u=document.getElementById("close-sub-selector"))==null||u.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),c(),St(t,e,i)})})}async function oo(e,t){const{state:i,toast:a,navigate:c}=t,l=e.formationCards.find(u=>u.formation===e.formation),s=(l==null?void 0:l.id)||e.formationCardId;await E.from("decks").update({formation:e.formation,formation_card_id:s||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await E.from("deck_cards").delete().eq("deck_id",e.deckId);const d=[];if(Object.entries(e.slots).forEach(([u,o],n)=>{d.push({deck_id:e.deckId,card_id:o,position:u,is_starter:!0,slot_order:n})}),e.subs.forEach((u,o)=>{d.push({deck_id:e.deckId,card_id:u,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),d.length>0){const{error:u}=await E.from("deck_cards").insert(d);if(u){a(u.message,"error");return}}a("Deck enregistré ✅","success"),c("decks")}function Gi(e){const t=Jt[e]||Jt["4-4-2"],i=["GK1"];for(let a=1;a<=t.DEF;a++)i.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)i.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)i.push(`ATT${a}`);return i}async function cn(){const{data:e}=await E.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await E.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(a=>a.booster_id===i.id)}))}function ro(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,c)=>a+Number(c.percentage),0);let i=Math.random()*t;for(const a of e)if(i-=Number(a.percentage),i<=0)return a;return e[e.length-1]}const pn=()=>Object.keys(Pt),ao=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ci={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function so(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Pi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},lo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},co={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ni(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function po(e){var n,f;const t=e.player;if(!t)return"";const i=t.job||"ATT",a=Pi[i],c=lo[t.rarity]||"#ccc",l=Ni(t,i),s=t.job2?Ni(t,t.job2):null,d=t.job2?Pi[t.job2]:null,u=so(t),o=co[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${c};cursor:pointer;flex-shrink:0;position:relative">
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${t.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(t.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${a}"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${a}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${l}</text>
        </svg>
        ${s!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${d}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${o}</div>
        ${(n=t.clubs)!=null&&n.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=t.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function un(e){var c;const t={};(e.rates||[]).forEach(l=>{t[l.card_type]=(t[l.card_type]||0)+Number(l.percentage||0)});const i=((c=Object.entries(t).sort((l,s)=>s[1]-l[1])[0])==null?void 0:c[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function uo(e,{state:t,navigate:i,toast:a}){var s;const c=((s=t.profile)==null?void 0:s.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let l=[];try{l=(await cn()).map(un)}catch(d){console.warn("Erreur chargement boosters DB, fallback hardcodé",d)}l.length||(l=ao.map(d=>({...d,rates:[],isPub:d.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${l.map(d=>{const u=d.cost===0||c>=d.cost;return`<div class="booster-card ${u?"":"disabled"}" data-booster="${d.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${d.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${d.img}" alt="${d.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${d.name}</div>
            <div class="desc">${d.sub}</div>
            <div class="cost">${d.costLabel}</div>
            ${u?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(d=>{d.addEventListener("click",async()=>{const u=l.find(o=>o.id===d.dataset.booster);if(u){d.style.opacity="0.5",d.style.pointerEvents="none";try{await fo(u,{state:t,toast:a,navigate:i,container:e})}catch(o){a(o.message,"error"),d.style.opacity="",d.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(d=>{d.addEventListener("click",u=>{u.stopPropagation();const o=l.find(n=>n.id===d.dataset.boosterId);yo(o)})})}async function fo(e,{state:t,toast:i,navigate:a,container:c}){var n;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await vo()}catch(f){i(f.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:l}=await E.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),s=new Set((l||[]).filter(f=>f.card_type==="player").map(f=>f.player_id)),d=new Set((l||[]).filter(f=>f.card_type==="formation").map(f=>f.formation));let u=[];if((n=e.rates)!=null&&n.length)u=await pi(t.profile,e);else{const f=e.type||"player";f==="player"?u=await fn(t.profile,e.cardCount,e.cost):f==="game_changer"?u=await gn(t.profile,e.cardCount,e.cost):f==="formation"?u=await mn(t.profile,e.cost):u=await pi(t.profile,e)}u.forEach(f=>{f.card_type==="player"&&f.player?f.isDuplicate=s.has(f.player.id):f.card_type==="formation"&&(f.isDuplicate=d.has(f.formation))});const{data:o}=await E.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),xn(u,e,a)}function go(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function mo(e,t){let i;switch(t){case"legende":i=e.filter(a=>a.rarity==="legende"),i.length||(i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),i.length||(i=e.filter(a=>mt(a)>=6));break;case"special":i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),i.length||(i=e.filter(a=>mt(a)>=6));break;case"normal_high":i=e.filter(a=>a.rarity==="normal"&&mt(a)>=6),i.length||(i=e.filter(a=>mt(a)>=6));break;default:i=e.filter(a=>a.rarity==="normal"&&mt(a)>=1&&mt(a)<=5),i.length||(i=e.filter(a=>a.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function pi(e,t){if(t.cost>0){const{error:d}=await E.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(d)throw d}const{data:i}=await E.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),a=new Set((i||[]).filter(d=>d.card_type==="player").map(d=>d.player_id)),c=new Set((i||[]).filter(d=>d.card_type==="formation").map(d=>d.formation)),l=new Set,s=[];for(let d=0;d<(t.cardCount||5);d++){const u=ro(t.rates);if(u){if(u.card_type==="player"){const o=z=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[z]||z,n=u.rarity?o(u.rarity):null;let f=E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);n&&(f=f.eq("rarity",n));const{data:h}=await f;let v=h||[];if((u.note_min||u.note_max)&&(v=v.filter(z=>{const C=Math.max(Number(z.note_g)||0,Number(z.note_d)||0,Number(z.note_m)||0,Number(z.note_a)||0);return(!u.note_min||C>=u.note_min)&&(!u.note_max||C<=u.note_max)})),v.length||(u.note_min||u.note_max?(v=h||[],console.warn("[Booster] Aucun joueur avec note",u.note_min,"-",u.note_max,"— fallback rareté uniquement")):v=h||[]),!v.length)continue;let A=v.filter(z=>!l.has(z.id));A.length||(A=v);const r=A[Math.floor(Math.random()*A.length)];l.add(r.id);const p=a.has(r.id),{data:I}=await E.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();I&&(s.push({...I,player:r,isDuplicate:p}),E.rpc("record_transfer",{p_card_id:I.id,p_player_id:r.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(u.card_type==="game_changer"){const{data:o}=await E.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),n=o!=null&&o.length?o:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],h=n[Math.floor(Math.random()*n.length)].name,{data:v}=await E.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:h}).select().single();v&&s.push(v)}else if(u.card_type==="formation"){const o=pn(),n=o[Math.floor(Math.random()*o.length)],f=c.has(n),{data:h}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:n}).select();h!=null&&h[0]&&s.push({...h[0],isDuplicate:f})}}}return s}async function fn(e,t,i){if(i>0){const{error:o}=await E.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:a}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=a.filter(o=>o.job==="GK"),l=a.filter(o=>o.job!=="GK"),s=!e.first_booster_opened&&c.length>0,d=[];for(let o=0;o<t;o++){const n=o===0&&s?c:o===0?l:a,f=go(),h=mo(n,f);h&&d.push(h)}s&&await E.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:u}=await E.from("cards").insert(d.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(u||[]).forEach((o,n)=>{E.rpc("record_transfer",{p_card_id:o.id,p_player_id:d[n].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((o,n)=>({...u[n],player:o}))}async function gn(e,t,i){const{error:a}=await E.from("users").update({credits:e.credits-i}).eq("id",e.id);if(a)throw a;const{data:c}=await E.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),l=c!=null&&c.length?c:Object.keys(ci).map(n=>({name:n,gc_type:"game_changer"})),s=Array.from({length:t},()=>{const n=l[Math.floor(Math.random()*l.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:n.name,gc_definition_id:n.id||null}}),{data:d,error:u}=await E.from("cards").insert(s).select();return u&&console.error("[Booster GC] Erreur insert:",u.message,u),(d||[]).map(n=>{const f=c==null?void 0:c.find(h=>h.name===n.gc_type||h.id===n.gc_definition_id);return{...n,_gcDef:f||null}})}async function mn(e,t){const{error:i}=await E.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:a}=await E.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),c=new Set((a||[]).map(n=>n.formation)),l=pn(),s=l[Math.floor(Math.random()*l.length)],d=c.has(s),{data:u,error:o}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:s}).select();return o&&console.error("[Booster Formation] Erreur insert:",o.message,o),(u||[]).map(n=>({...n,isDuplicate:d}))}function xn(e,t,i,a=null){var Y,V;if(!e||e.length===0){const B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",B.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(B),(Y=B.querySelector("#anim-close-err"))==null||Y.addEventListener("click",()=>B.remove());return}e=[...e].sort((B,oe)=>{const pe=B.player?mt(B.player):-1;return(oe.player?mt(oe.player):-1)-pe});const c=document.createElement("div");c.id="booster-anim-overlay",c.innerHTML=`
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
  `,document.body.appendChild(c);let l=!1;const s=document.getElementById("pack-cut-zone"),d=document.getElementById("pack-blade");let u=!1;const o=B=>B.touches&&B.touches[0]?B.touches[0].clientX:B.clientX;function n(B){l||(u=!0,d.style.opacity="1",f(B))}function f(B){if(!u||l)return;const oe=s.getBoundingClientRect(),pe=o(B)-oe.left,ye=Math.max(0,Math.min(1,pe/oe.width));d.style.width=ye*oe.width+"px",ye>=.82&&v()}function h(){l||(u=!1,d.style.transition="width .2s ease, opacity .2s ease",d.style.width="0",d.style.opacity="0",setTimeout(()=>{l||(d.style.transition="")},220))}function v(){var oe;if(l)return;l=!0,u=!1,d.style.width="100%",d.style.opacity="1",(oe=document.getElementById("cut-flash"))==null||oe.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const B=document.getElementById("cut-hint");B&&(B.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{d.style.opacity="0",document.getElementById("pack-phase").style.display="none",I(0)},620)}s.addEventListener("pointerdown",n),window.addEventListener("pointermove",f),window.addEventListener("pointerup",h),s.addEventListener("touchstart",n,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",h);let A=0,r=!1;const p=new Set;function I(B){A=B,document.getElementById("reveal-phase").style.display="flex",z(),C(B,0),ie()}function z(){const B=document.getElementById("card-dots");B&&(B.innerHTML=e.map((oe,pe)=>`<div class="card-dot" data-i="${pe}" style="width:8px;height:8px;border-radius:50%;background:${pe===A?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),B.querySelectorAll(".card-dot").forEach(oe=>oe.addEventListener("click",()=>D(parseInt(oe.dataset.i)))))}function C(B,oe){var re;const pe=e[B],ye=document.getElementById("card-counter"),ze=document.getElementById("card-track");ye&&(ye.textContent=`Carte ${B+1} / ${e.length}`);const Te=document.getElementById("reveal-btns");Te&&(Te.style.display=B===e.length-1?"flex":"none");const we=pe.card_type==="player"&&((re=pe.player)==null?void 0:re.rarity)==="legende",$e=!p.has(B);p.add(B);let Ee=0;if(pe.card_type==="player"&&pe.player){const O=pe.player,Z=O.job||"ATT";Ee=Number(Z==="GK"?O.note_g:Z==="DEF"?O.note_d:Z==="MIL"?O.note_m:O.note_a)||0}const te=O=>{ze.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${we?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${xo(pe)}</div>
          ${pe.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const Z=document.getElementById("current-card-wrap");oe!==0?(Z.style.transition="none",Z.style.transform=`translateX(${oe>0?100:-100}%)`,requestAnimationFrame(()=>{Z.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",Z.style.transform="translateX(0)"})):Z.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),O||we?de():P(),z()};$e&&Ee>6&&pe.card_type==="player"&&pe.player?U(pe,()=>te(!0)):te(!1)}function U(B,oe){var Ee;r=!0;const pe=B.player,ye=`https://flagsapi.com/${pe.country_code}/flat/64.png`,ze=(Ee=pe.clubs)==null?void 0:Ee.logo_url,Te=document.getElementById("walkout-overlay"),we=document.getElementById("walkout-stage");if(!Te||!we){r=!1,oe();return}Te.style.display="flex";const $e=()=>{const te=we.firstElementChild;te&&(te.classList.remove("wo-in"),te.classList.add("wo-out"))};we.innerHTML=`<img class="wo-in" src="${ye}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout($e,2e3),setTimeout(()=>{var te;we.innerHTML=ze?`<img class="wo-in" src="${ze}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((te=pe.clubs)==null?void 0:te.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout($e,4450),setTimeout(()=>{Te.style.display="none",we.innerHTML="",r=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),oe()},4900)}function D(B){if(r||B<0||B>=e.length||B===A)return;const oe=B>A?1:-1;A=B,C(B,oe)}function N(){D(A+1)}function G(){D(A-1)}function ie(){const B=document.getElementById("card-viewport");if(!B||B._swipeBound)return;B._swipeBound=!0;let oe=0,pe=0,ye=0,ze=!1;const Te=re=>re.touches?re.touches[0].clientX:re.clientX,we=re=>re.touches?re.touches[0].clientY:re.clientY,$e=re=>{ze=!0,oe=Te(re),pe=we(re),ye=0},Ee=re=>{if(!ze)return;ye=Te(re)-oe;const O=we(re)-pe;if(Math.abs(ye)<Math.abs(O))return;const Z=document.getElementById("current-card-wrap");Z&&(Z.style.transition="none",Z.style.transform=`translateX(${ye*.6}px) rotate(${ye*.02}deg)`)},te=()=>{if(!ze)return;ze=!1;const re=document.getElementById("current-card-wrap"),O=55;ye<=-O&&A<e.length-1?N():ye>=O&&A>0?G():re&&(re.style.transition="transform .2s ease",re.style.transform="translateX(0)")};B.addEventListener("pointerdown",$e),B.addEventListener("pointermove",Ee),B.addEventListener("pointerup",te),B.addEventListener("pointercancel",te),B.addEventListener("touchstart",$e,{passive:!0}),B.addEventListener("touchmove",Ee,{passive:!0}),B.addEventListener("touchend",te),B.addEventListener("click",re=>{if(Math.abs(ye)>8)return;const O=B.getBoundingClientRect();re.clientX-O.left>O.width/2?N():G()})}let se=null;function de(){const B=document.getElementById("fireworks-canvas");if(!B)return;B.width=window.innerWidth,B.height=window.innerHeight;const oe=B.getContext("2d"),pe=[];function ye(){const Te=Math.random()*B.width,we=Math.random()*B.height*.6,$e=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Ee=$e[Math.floor(Math.random()*$e.length)];for(let te=0;te<60;te++){const re=Math.PI*2/60*te,O=2+Math.random()*5;pe.push({x:Te,y:we,vx:Math.cos(re)*O,vy:Math.sin(re)*O,alpha:1,color:Ee,size:2+Math.random()*3})}}ye(),se=setInterval(ye,600);function ze(){if(document.getElementById("fireworks-canvas")){oe.clearRect(0,0,B.width,B.height);for(let Te=pe.length-1;Te>=0;Te--){const we=pe[Te];if(we.x+=we.vx,we.y+=we.vy+.08,we.vy*=.98,we.alpha-=.018,we.alpha<=0){pe.splice(Te,1);continue}oe.globalAlpha=we.alpha,oe.fillStyle=we.color,oe.beginPath(),oe.arc(we.x,we.y,we.size,0,Math.PI*2),oe.fill()}oe.globalAlpha=1,(se!==null||pe.length>0)&&requestAnimationFrame(ze)}}ze()}function P(){se!==null&&(clearInterval(se),se=null);const B=document.getElementById("fireworks-canvas");B&&B.getContext("2d").clearRect(0,0,B.width,B.height)}if(a){const B=document.getElementById("reveal-btns");B&&(B.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(V=document.getElementById("reveal-next"))==null||V.addEventListener("click",()=>{P(),c.remove(),a()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{P(),c.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{P(),c.remove(),i("boosters")})}function xo(e){var t,i;if(e.card_type==="player"&&e.player)return po(e);if(e.card_type==="game_changer"){const a=e._gcDef,c=(a==null?void 0:a.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},d=l[a==null?void 0:a.color]||l.purple,u=s[a==null?void 0:a.color]||s.purple,o=(a==null?void 0:a.name)||e.gc_type||"Game Changer",n=(a==null?void 0:a.effect)||((t=ci[e.gc_type])==null?void 0:t.desc)||"",f=a!=null&&a.image_url?`/manager-wars/icons/${a.image_url}`:null,h=((i=ci[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${d};border-radius:14px;border:3px solid ${u};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${u}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${o.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${c?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${f?`<img src="${f}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${h}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${n.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function yo(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},l={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(s=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${l[s.card_type]||s.card_type}</span>
            ${s.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${c[s.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${s.rarity}</span>`:""}
            ${s.note_min||s.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${s.note_min||""}–${s.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(s.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>a.remove());return}bo()}function bo(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const ho="simulation",yn="VOTRE_ZONE_ID";function vo(){switch(ho){case"propellerads":return wo();case"adsense":return _o();default:return ki()}}function ki(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const a=setInterval(()=>{i--;const c=document.getElementById("ad-cd"),l=document.getElementById("ad-skip");c&&(c.textContent=i),l&&(l.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(a),l&&(l.disabled=!1,l.style.cssText=l.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),l==null||l.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function wo(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(ki());window.propeller.push({zone_id:yn,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function _o(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(ki());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:yn,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}async function $o(e,{state:t,navigate:i,toast:a,refreshProfile:c}){var h,v;const{data:l}=await E.from("users").select("*").eq("id",t.user.id).single();l&&(t.profile=l);let s=Array.isArray((h=t.profile)==null?void 0:h.pending_boosters)?[...t.profile.pending_boosters]:[];if(!s.length){await E.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let d=null;try{const r=(await cn()).find(p=>(p.name||"").toLowerCase().includes("new player"));r&&(d=un(r))}catch(A){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',A)}const u=s.length;let o=0;e.innerHTML=`
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
  </div>`;const n=async()=>{await E.from("users").update({pending_boosters:s}).eq("id",t.user.id)};async function f(){var z;if(o>=u||!s.length){await E.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),c&&await c(),a("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const A=s[0],{data:r}=await E.from("users").select("*").eq("id",t.user.id).single();r&&(t.profile=r);let p=[];try{if(A.type==="formation")p=await mn(t.profile,0);else if(A.type==="game_changer")p=await gn(t.profile,A.count||3,0);else if(d&&((z=d.rates)!=null&&z.length)){const C={...d,cost:0,cardCount:A.count||d.cardCount||5};p=await pi(t.profile,C),A.guaranteeGK&&!t.profile.first_booster_opened&&(p.some(D=>D.player&&D.player.job==="GK")||await ko(t.profile,p),await E.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else p=await fn(t.profile,A.count||5,0)}catch(C){a(C.message||"Erreur ouverture booster","error");return}s.shift(),o++,await n();const I=A.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:A.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${o}/${u})`,img:(d==null?void 0:d.img)||"/manager-wars/icons/booster-players.png"};xn(p,I,i,()=>{f()})}(v=document.getElementById("onboard-start"))==null||v.addEventListener("click",()=>f())}async function ko(e,t){try{const{data:i}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const a=i[Math.floor(Math.random()*i.length)],c=t.findIndex(s=>s.player);if(c===-1)return;const l=t[c];await E.from("cards").update({player_id:a.id}).eq("id",l.id),t[c]={...l,player_id:a.id,player:a}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Lt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},It={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function wt(e,t,i,a,c){var l;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(l=document.getElementById("msg-btn"))==null||l.addEventListener("click",c)}function Pe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ui(e,t){var a,c;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((a=i.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((c=i.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ei(e,t){if(!t||!e)return e;const{club_id:i,country_code:a}=t;return Object.values(e).forEach(c=>{Array.isArray(c)&&c.forEach(l=>{const s=i&&String(l.club_id)===String(i),d=a&&String(l.country_code)===String(a);(s||d)&&(l.boost=(l.boost||0)+10,l.stadiumBonus=!0)})}),e}function lt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ti(){const e=Math.random()*100;return e<10?3:e<30?2:1}function yt(e,t){const i=Lt[t]||Lt["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(s=>s.position)){for(const s of["GK","DEF","MIL","ATT"]){const d=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===s).sort((o,n)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(n.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:s})),u=lt(d.length);d.forEach((o,n)=>{o._col=u[n]}),a[s]=d}return a}const l=[...e];for(const s of["GK","DEF","MIL","ATT"]){const d=[];for(let o=0;o<i[s];o++){let n=l.findIndex(f=>f.job===s);if(n===-1&&(n=l.findIndex(f=>f.job2===s)),n===-1&&(n=0),l[n]){const f={...l[n],_line:s};d.push(f),l.splice(n,1)}}const u=lt(d.length);d.forEach((o,n)=>{o._col=u[n]}),a[s]=d}return a}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function We(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ii(e,t,i){const c=new Set,l=t.filter(n=>{const f=n.gc_type||n.id;return c.has(f)?!1:(c.add(f),!0)});let s=[];function d(n,f){const h=n._gcDef,v={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},A={purple:"#9b59b6",light_blue:"#00bcd4"},r=v[h==null?void 0:h.color]||v.purple,p=A[h==null?void 0:h.color]||A.purple;return`<div class="gc-select-card" data-id="${n.id}"
      style="width:100px;border-radius:10px;border:3px solid ${f?"#FFD700":p};background:${r};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${f?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${f?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((h==null?void 0:h.name)||n.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(h==null?void 0:h.name)||n.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${h!=null&&h.image_url?`<img src="/manager-wars/icons/${h.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((h==null?void 0:h.effect)||"").slice(0,50)}</span>
      </div>
      ${f?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const u=n=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(n)};function o(){var f,h,v;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const n=s.length>0;e.innerHTML=`
    <div id="gc-screen-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <!-- Header -->
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Jusqu'à <b style="color:#FFD700">3</b> cartes · ${s.length}/3
        </div>
      </div>
      <!-- Grille cartes -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px">
        ${l.map(A=>{const r=s.find(p=>p.gc_type===A.gc_type);return d(A,!!r)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${n?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${n?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${n?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${n?"pointer":"default"};box-shadow:${n?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
          ⚡ Valider (${s.length}/3)
        </button>
        <div style="display:flex;gap:8px">
          <button id="gc-no-gc" style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.7);font-size:13px;font-weight:600;cursor:pointer">
            ▶ Sans GC
          </button>
          <button id="gc-reset" ${s.length===0?"disabled":""} style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(212,160,23,0.4);background:rgba(212,160,23,0.1);color:${s.length===0?"rgba(212,160,23,0.3)":"#D4A017"};font-size:13px;font-weight:700;cursor:${s.length===0?"default":"pointer"}">
            🔄 Réinitialiser
          </button>
        </div>
      </div>
    </div>`,e.querySelectorAll(".gc-select-card").forEach(A=>{A.addEventListener("click",()=>{const r=A.dataset.id,p=l.find(z=>z.id===r);if(!p)return;const I=s.findIndex(z=>z.gc_type===p.gc_type);I>-1?s.splice(I,1):s.length<3&&s.push(p),o()})}),(f=e.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{n&&u(s)}),(h=e.querySelector("#gc-no-gc"))==null||h.addEventListener("click",()=>u([])),(v=e.querySelector("#gc-reset"))==null||v.addEventListener("click",()=>{s.length&&(s=[],o())})}o()}function Eo(e){var a;const t=((a=e==null?void 0:e.state)==null?void 0:a.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function To(e,t,i){const{state:a,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await E.from("decks").select("id,name,is_active,formation").eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!l||l.length===0){wt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const s=l.map(h=>h.id),{data:d}=await E.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order"),u=[...new Set((d||[]).filter(h=>{var v,A;return((v=h.card)==null?void 0:v.card_type)==="stadium"&&((A=h.card)==null?void 0:A.stadium_id)}).map(h=>h.card.stadium_id))],o={};if(u.length){const{data:h}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",u);(h||[]).forEach(v=>{o[v.id]=v}),(d||[]).forEach(v=>{var A,r;((A=v.card)==null?void 0:A.card_type)==="stadium"&&((r=v.card)!=null&&r.stadium_id)&&(v.card._stadiumDef=o[v.card.stadium_id]||null)})}let n=0;function f(){var D,N,G,ie,se,de,P;const h=l[n],v=(d||[]).filter(Y=>Y.deck_id===h.id),A=v.filter(Y=>{var V;return Y.is_starter&&((V=Y.card)==null?void 0:V.player)}).map(Y=>ui(Y.card,Y.position)),r=v.find(Y=>{var V;return((V=Y.card)==null?void 0:V.card_type)==="formation"}),p=h.formation||((D=r==null?void 0:r.card)==null?void 0:D.formation)||"4-4-2";let I=A.length>=11?yt(A,p):null,z=null;if(h.stadium_card_id&&I){const Y=v.find(V=>{var B;return((B=V.card)==null?void 0:B.id)===h.stadium_card_id});(N=Y==null?void 0:Y.card)!=null&&N.stadium_id&&(z=Y.card._stadiumDef||null),z&&(I=Ei(I,z))}const C=A.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Eo(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${n===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${n===0?"0.1":"0.3"});color:${n===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${n===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${h.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${p} · ${A.length}/11 ${h.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${n===l.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${n===l.length-1?"0.1":"0.3"});color:${n===l.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${n===l.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Bandeau stade si présent -->
      ${z?`
      <div style="display:flex;align-items:center;gap:8px;padding:6px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),rgba(196,90,0,0.2));border-top:1px solid rgba(232,119,34,0.4);flex-shrink:0">
        <span style="font-size:16px">🏟️</span>
        <div style="flex:1;font-size:12px;font-weight:700;color:rgba(255,255,255,0.9)">${z.name}</div>
        <div style="font-size:11px;font-weight:900;color:#FFD700">+10 aux joueurs ${((G=z.club)==null?void 0:G.encoded_name)||z.country_code||""}</div>
      </div>`:""}

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${I?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${ft(I,p,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${A.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${l.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${l.map((Y,V)=>`<div style="width:7px;height:7px;border-radius:50%;background:${V===n?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${C?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${C?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${C?"pointer":"default"}">
          ${C?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const V=e.querySelector(".deck-preview-wrap svg");V&&(V.removeAttribute("width"),V.removeAttribute("height"),V.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",V.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(ie=document.getElementById("prev-deck"))==null||ie.addEventListener("click",()=>{n>0&&(n--,f())}),(se=document.getElementById("next-deck"))==null||se.addEventListener("click",()=>{n<l.length-1&&(n++,f())}),(de=document.getElementById("validate-deck"))==null||de.addEventListener("click",()=>{if(!C)return;const Y=t.state.params||{};t.navigate("match",{...Y,matchMode:Y.matchMode||i,deckId:h.id})}),(P=document.getElementById("cancel-deck-select"))==null||P.addEventListener("click",()=>{We(e),c("home")});const U=document.getElementById("deck-swipe-zone");if(U){let Y=0,V=0;U.addEventListener("touchstart",B=>{Y=B.touches[0].clientX,V=B.touches[0].clientY},{passive:!0}),U.addEventListener("touchend",B=>{const oe=B.changedTouches[0].clientX-Y,pe=B.changedTouches[0].clientY-V;Math.abs(oe)<40||Math.abs(oe)<Math.abs(pe)||(oe<0&&n<l.length-1?(n++,f()):oe>0&&n>0&&(n--,f()))},{passive:!0})}}f()}function bn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ye(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Pe(e),c=bn(e),l=e._line||e.job||"MIL",s=It[l]||"#555",d={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",u=e.note!==void 0?Number(e.note)||0:(Number(Ae(e,l))||0)+(e.boost||0),o=hn(e==null?void 0:e.country_code),n=Math.round(i*.19),f=Math.round(i*.25),h=i-Math.round(i*.19)-Math.round(i*.25),v=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${d};background:${s};position:relative;overflow:hidden;flex-shrink:0;opacity:${v}">
    <div style="position:absolute;top:0;left:0;right:0;height:${n}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${n}px;left:0;width:${t}px;height:${h}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Xt(e==null?void 0:e.country_code)?`<img src="${Xt(e.country_code)}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">${o}</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":u}</span>
      ${c?`<img src="${c}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function nt(e,t,i){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((l,s)=>{if(c+=Ye(l,40,52),s<a.length-1){const d=at(l,a[s+1]);c+=`<div style="width:7px;height:3px;background:${d==="#ff3333"||d==="#cc2222"?"rgba(255,255,255,0.12)":d};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),c+="</div>",c}function Xt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function hn(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function ut(e,t,i,a,c=310,l=310,s=[]){var C;const d=Pt[t]||{},u=Yi(t)||xi[t]||[],o={},n=["ATT","MIL","DEF","GK"];for(const U of n)(e[U]||[]).forEach((N,G)=>{o[`${U}${G+1}`]=N});function f(U){const D=d[U];return D?{x:D.x*c,y:D.y*l}:null}let h="";for(const[U,D]of u){const N=f(U),G=f(D);if(!N||!G)continue;const ie=o[U],se=o[D],de=at(ie,se);de==="#00ff88"||de==="#FFD700"?(h+=`<line x1="${N.x.toFixed(1)}" y1="${N.y.toFixed(1)}" x2="${G.x.toFixed(1)}" y2="${G.y.toFixed(1)}"
        stroke="${de}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,h+=`<line x1="${N.x.toFixed(1)}" y1="${N.y.toFixed(1)}" x2="${G.x.toFixed(1)}" y2="${G.y.toFixed(1)}"
        stroke="${de}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):h+=`<line x1="${N.x.toFixed(1)}" y1="${N.y.toFixed(1)}" x2="${G.x.toFixed(1)}" y2="${G.y.toFixed(1)}"
        stroke="${de}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const v=48,A=64,r=13,p=16,I={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[U,D]of Object.entries(o)){const N=f(U);if(!N||!D)continue;const G=U.replace(/[0-9]/g,""),ie=It[G]||"#555",se=s.includes(D.cardId),de=i==="attack"&&(["MIL","ATT"].includes(G)||se)&&!D.used||i==="defense"&&["GK","DEF","MIL"].includes(G)&&!D.used,P=a.includes(D.cardId);let Y;i==="attack"?Y=se?Math.max(1,Number(D.note_a)||0):G==="MIL"?Number(D.note_m)||0:Number(D.note_a)||0:i==="defense"?Y=G==="GK"?Number(D.note_g)||0:G==="MIL"?Number(D.note_m)||0:Number(D.note_d)||0:Y=Number(G==="GK"?D.note_g:G==="DEF"?D.note_d:G==="MIL"?D.note_m:D.note_a)||0,Y=Y+(D.boost||0);const V=(N.x-v/2).toFixed(1),B=(N.y-A/2).toFixed(1),oe=I[D==null?void 0:D.rarity]||I.normal;if(D.used){const Ee=typeof import.meta<"u"&&"/manager-wars/"||"/",re=`${typeof window<"u"&&((C=window.location)==null?void 0:C.origin)||""}${Ee}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");h+=`<rect x="${V}" y="${B}" width="${v}" height="${A}" rx="5" fill="#161616"/>`,h+=`<image href="${re}" xlink:href="${re}" x="${V}" y="${B}" width="${v}" height="${A}" preserveAspectRatio="xMidYMid slice"/>`,h+=`<rect x="${V}" y="${B}" width="${v}" height="${A}" rx="5" fill="none" stroke="${oe}" stroke-width="2" opacity="0.7"/>`,h+=`<rect x="${V}" y="${B}" width="${v}" height="${A}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${D.cardId}" data-role="${G}" style="cursor:pointer"/>`;continue}const pe=P?.45:1,ye=P?"#FFD700":oe,ze=P?3:(D==null?void 0:D.rarity)==="legende"||(D==null?void 0:D.rarity)==="légende"||(D==null?void 0:D.rarity)==="pepite"||(D==null?void 0:D.rarity)==="pépite"?2.5:2,Te=A-r-p;h+=`<defs><clipPath id="cp-${U}"><rect x="${V}" y="${(N.y-A/2+r).toFixed(1)}" width="${v}" height="${Te}"/></clipPath></defs>`,h+=`<rect x="${V}" y="${B}" width="${v}" height="${A}" rx="5" fill="${ie}" opacity="${pe}"/>`;const we=Pe(D);we&&(h+=`<image href="${we}" xlink:href="${we}" x="${V}" y="${(N.y-A/2+r).toFixed(1)}" width="${v}" height="${Te}" clip-path="url(#cp-${U})" preserveAspectRatio="xMidYMin slice"/>`),h+=`<rect x="${V}" y="${B}" width="${v}" height="${r}" rx="4" fill="rgba(255,255,255,0.92)"/>`,h+=`<text x="${N.x.toFixed(1)}" y="${(N.y-A/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(D.name||"").slice(0,9)}</text>`;const $e=(N.y+A/2-p).toFixed(1);h+=`<rect x="${V}" y="${$e}" width="${v}" height="${p}" fill="rgba(255,255,255,0.92)"/>`;{const Ee=Xt(D.country_code);Ee?h+=`<image href="${Ee}" xlink:href="${Ee}" x="${(N.x-20).toFixed(1)}" y="${(N.y+A/2-p+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:h+=`<text x="${(N.x-13).toFixed(1)}" y="${(N.y+A/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${hn(D.country_code)}</text>`,h+=`<text x="${N.x.toFixed(1)}" y="${(N.y+A/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`;const te=bn(D);te?h+=`<image href="${te}" xlink:href="${te}" x="${(N.x+v/2-14).toFixed(1)}" y="${(N.y+A/2-p+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:D.clubName&&(h+=`<text x="${(N.x+14).toFixed(1)}" y="${(N.y+A/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(D.clubName||"").slice(0,3).toUpperCase()}</text>`),D.boost&&(h+=`<rect x="${(N.x+v/2-12).toFixed(1)}" y="${(N.y-A/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,h+=`<text x="${(N.x+v/2-5).toFixed(1)}" y="${(N.y-A/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${D.boost}</text>`)}h+=`<rect x="${V}" y="${B}" width="${v}" height="${A}" rx="5" fill="${P?"rgba(255,255,255,0.12)":"none"}" stroke="${ye}" stroke-width="${ze}" opacity="${pe}"/>`,de&&(h+=`<rect x="${V}" y="${B}" width="${v}" height="${A}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${P?"selected":""}" data-card-id="${D.cardId}" data-role="${G}" style="cursor:pointer"/>`)}const z=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-z} ${-z} ${c+z*2} ${l+z*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${h}
  </svg>`}function ft(e,t,i,a,c=300,l=300,s=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${ut(e,t,i,a,c,l,s)}
  </div>`}function dt(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function ni(e,t,i,a){var N;const{state:c,navigate:l,toast:s}=t;et(e);const d=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!d.deckId)return To(e,t,i);const u=d.deckId;let o,n,f,h;try{const G=await Promise.all([E.from("decks").select("formation,name").eq("id",u).single(),E.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",u).order("slot_order")]);o=G[0].data,f=G[0].error,n=G[1].data,h=G[1].error}catch(G){console.error("[Match] Exception chargement deck:",G),wt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>l("home"));return}if(f||h){console.error("[Match] Erreur Supabase:",f||h),wt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>l("home"));return}const v=(n||[]).filter(G=>{var ie;return G.is_starter&&((ie=G.card)==null?void 0:ie.player)}).map(G=>ui(G.card,G.position)),A=(n||[]).filter(G=>{var ie;return!G.is_starter&&((ie=G.card)==null?void 0:ie.player)}).map(G=>ui(G.card,G.position));if(v.length<11){wt(e,"⚠️",`Deck incomplet (${v.length}/11).`,"Compléter",()=>l("decks"));return}const r=(n||[]).find(G=>{var ie;return((ie=G.card)==null?void 0:ie.card_type)==="formation"}),p=(o==null?void 0:o.formation)||((N=r==null?void 0:r.card)==null?void 0:N.formation)||"4-4-2",{data:I,error:z}=await E.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:C}=await E.from("gc_definitions").select("*").eq("is_active",!0),U=(I||[]).map(G=>({...G,_gcDef:(C==null?void 0:C.find(ie=>ie.name===G.gc_type||ie.id===G.gc_definition_id))||null}));let D=null;if(deck!=null&&deck.stadium_card_id){const{data:G}=await E.from("cards").select("stadium_id").eq("id",deck.stadium_card_id).single();if(G!=null&&G.stadium_id){const{data:ie}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",G.stadium_id).single();D=ie||null}}a({deckId:u,formation:p,starters:v,subsRaw:A,gcCardsEnriched:U,gcDefs:C||[],stadiumDef:D})}async function Ao(e,t){const{state:i}=t,c=(i.params||{}).matchMode||"vs_ai_easy",l=c.replace("vs_ai_",""),s=c;await ni(e,t,c,async({deckId:d,formation:u,starters:o,subsRaw:n,gcCardsEnriched:f,gcDefs:h,stadiumDef:v})=>{try{let A=yt(o,u);v&&(A=Ei(A,v));const r=await zo(u,l),p=async I=>{try{const{data:z,error:C}=await E.from("matches").insert({home_id:i.profile.id,away_id:null,mode:s,home_deck_id:d,status:"in_progress"}).select().single();if(C){console.error("[MatchIA] Erreur création match:",C),wt(e,"⚠️","Impossible de créer le match ("+C.message+").","Retour",()=>t.navigate("home"));return}const U={gcDefs:h||[],matchId:z==null?void 0:z.id,mode:s,difficulty:l,formation:u,homeTeam:A,aiTeam:r,homeSubs:n,subsUsed:0,maxSubs:Math.min(n.length,3),homeScore:0,aiScore:0,gcCards:I,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Lo(e,U,t)}catch(z){console.error("[MatchIA] Exception launchMatch:",z),wt(e,"⚠️","Erreur au lancement du match : "+z.message,"Retour",()=>t.navigate("home"))}};if(!f.length){p([]);return}ii(e,f,p)}catch(A){console.error("[MatchIA] Exception setup:",A),wt(e,"⚠️","Erreur de préparation du match : "+A.message,"Retour",()=>t.navigate("home"))}})}async function zo(e,t){var s,d;const{data:i}=await E.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return So(e);const a=Lt[e]||Lt["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},l=[...i];for(const u of["GK","DEF","MIL","ATT"]){const o=l.filter(A=>A.job===u),n=l.filter(A=>A.job!==u),f=[...o,...n],h=[];for(let A=0;A<a[u];A++){const r=f[A]||l[A];r&&h.push({cardId:"ai-"+r.id+"-"+A,id:r.id,firstname:r.firstname,name:r.surname_encoded,country_code:r.country_code,club_id:r.club_id,job:r.job,job2:r.job2,note_g:Number(r.note_g)||0,note_d:Number(r.note_d)||0,note_m:Number(r.note_m)||0,note_a:Number(r.note_a)||0,rarity:r.rarity,skin:r.skin,hair:r.hair,hair_length:r.hair_length,clubName:((s=r.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((d=r.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:u})}const v=lt(h.length);h.forEach((A,r)=>{A._col=v[r]}),c[u]=h}return c}function So(e){const t=Lt[e]||Lt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const l of["GK","DEF","MIL","ATT"]){const s=[];for(let u=0;u<t[l];u++){const o=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:a[c%a.length],country_code:"XX",club_id:null,job:l,job2:null,note_g:l==="GK"?o:2,note_d:l==="DEF"?o:2,note_m:l==="MIL"?o:2,note_a:l==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:l}),c++}const d=lt(s.length);s.forEach((u,o)=>{u._col=d[o]}),i[l]=s}return i}function Lo(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${ut(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Io(e,t,i),5e3)}function Io(e,t,i){const a=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function l(r){return r.reduce((p,I)=>p+Ae(I,"MIL"),0)}function s(r){let p=0;for(let I=0;I<r.length-1;I++){const z=at(r[I],r[I+1]);z==="#00ff88"?p+=2:z==="#FFD700"&&(p+=1)}return p}const d=l(a)+s(a),u=l(c)+s(c),o=d>=u;function n(r,p,I,z){return`<div id="duel-row-${z}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${p}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${r.map((C,U)=>{const D=U<r.length-1?at(C,r[U+1]):null,N=!D||D==="#ff3333"||D==="#cc2222",G=D==="#00ff88"?"+2":D==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${z}" data-idx="${U}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ye({...C,note:Ae(C,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${U<r.length-1?`<div class="duel-link duel-link-${z}" data-idx="${U}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${N?"rgba(255,255,255,0.12)":D};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${N?"none":`0 0 8px ${D}`}">
            ${G?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${D}">${G}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${z}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${l(r)} + ${s(r)} liens = <b style="color:#fff">${l(r)+s(r)}</b>
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

    ${n(a,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${n(c,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const f=()=>{const r=(p,I)=>e.querySelectorAll(p).forEach((z,C)=>{setTimeout(()=>{z.style.opacity="1",z.style.transform="translateY(0) scale(1)"},I+C*90)});r(".duel-card-home",150),r(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,I)=>{setTimeout(()=>{p.style.opacity="1"},I*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(I=>I.style.opacity="1")},1250),setTimeout(()=>{h("score-home",d,800),h("score-ai",u,800)},1500)};function h(r,p,I){const z=document.getElementById(r);if(!z)return;const C=performance.now(),U=D=>{const N=Math.min(1,(D-C)/I);z.textContent=Math.round(p*(1-Math.pow(1-N,3))),N<1?requestAnimationFrame(U):z.textContent=p};requestAnimationFrame(U)}requestAnimationFrame(f),t.attacker=o?"home":"ai";const v=o?ti():null;o&&(t.boostCard={value:v}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(r=>({name:r.name,note:Ae(r,"MIL"),portrait:Pe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiPlayers:c.map(r=>({name:r.name,note:Ae(r,"MIL"),portrait:Pe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homeTotal:d,aiTotal:u,text:`Duel milieu : ${t.clubName} ${d} – ${u} IA → ${o?t.clubName+" attaque":"IA attaque"}`});const A=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Xe(e,t,i),t.attacker==="ai"&&setTimeout(()=>fi(e,t,i),800)};setTimeout(()=>{const r=document.getElementById("score-home"),p=document.getElementById("score-ai"),I=document.getElementById(o?"duel-row-home":"duel-row-ai"),z=document.getElementById(o?"duel-row-ai":"duel-row-home"),C=o?r:p,U=o?p:r;C&&(C.style.fontSize="80px",C.style.color=o?"#FFD700":"#ff6b6b",C.style.animation="duelPulse .5s ease"+(o?", duelGlow 1.5s ease infinite .5s":"")),U&&(U.style.opacity="0.25"),setTimeout(()=>{I&&(I.style.transformOrigin="center",I.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",I.style.zIndex="5"),setTimeout(()=>{var N;const D=document.getElementById("duel-shock");if(D){const G=(N=z||I)==null?void 0:N.getBoundingClientRect(),ie=e.querySelector(".match-screen").getBoundingClientRect();G&&(D.style.top=G.top-ie.top+G.height/2+"px"),D.style.animation="shockwave .5s ease-out forwards"}z&&(z.style.transformOrigin="center",z.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var N;const D=document.getElementById("duel-finale");D&&(D.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${o?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${o?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${v}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,D.style.transition="opacity .45s ease",D.style.opacity="1",D.style.pointerEvents="auto",(N=document.getElementById("start-match-btn"))==null||N.addEventListener("click",A))},600)},700)},2800)}function Mo(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(i=>dt(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(i=>dt(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${dt(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${dt(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Xe(e,t,i){var C,U,D,N,G,ie,se,de;const a=t.selected.map(P=>P.cardId),c=t.usedSubIds||[],l=t.homeSubs.filter(P=>!c.includes(P.cardId)),d=Object.values(t.homeTeam).flat().filter(P=>P.used).length>0&&l.length>0&&t.subsUsed<t.maxSubs,u=!["GK","DEF","MIL","ATT"].some(P=>(t.aiTeam[P]||[]).some(Y=>!Y.used)),o=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(P=>!P.used),n=t.phase==="attack"&&u&&o.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(P=>!P.used).map(P=>P.cardId):[];t.log[t.log.length-1];const f=t.phase==="ai-attack"||t.phase==="ai-defense",h=t.phase==="attack",v=t.phase==="defense",A=t.phase==="finished",r=t.gcCards.filter(P=>!t.usedGc.includes(P.id)),p=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const Y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${nt((Y.players||[]).map(V=>({...V,used:!1})),"#ff6b6b",Y.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const Y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${nt((Y.players||[]).map(V=>({...V,used:!1})),"#00ff88",Y.total)}
          </div>`}const P=t.log[t.log.length-1];return P?'<div style="padding:2px 4px">'+Mo(P)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const P=window.innerWidth>=700,Y=($e,Ee,te)=>{var qe,De;const re=(t.gcDefs||[]).find(M=>M.name===$e.gc_type),O={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[re==null?void 0:re.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Z={purple:"#b06ce0",light_blue:"#00d4ef"}[re==null?void 0:re.color]||"#b06ce0",ue=(re==null?void 0:re.name)||$e.gc_type,me=(re==null?void 0:re.effect)||((qe=Ke[$e.gc_type])==null?void 0:qe.desc)||"",X=re!=null&&re.image_url?`/manager-wars/icons/${re.image_url}`:null,be=((De=Ke[$e.gc_type])==null?void 0:De.icon)||"⚡",ge=Math.round(te*.22),Se=Math.round(te*.22),Ce=te-ge-Se,Be=ue.length>12?7:9;return`<div class="gc-mini" data-gc-id="${$e.id}" data-gc-type="${$e.gc_type}"
          style="box-sizing:border-box;width:${Ee}px;height:${te}px;border-radius:10px;border:2px solid ${Z};background:${O};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${ge}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Be}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Ee-6}px">${ue}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Ce}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${X?`<img src="${X}" style="max-width:${Ee-10}px;max-height:${Ce-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ce*.55)}px">${be}</span>`}
          </div>
          <div style="height:${Se}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${me.slice(0,38)}</span>
          </div>
        </div>`},V=($e,Ee)=>{var te;return`<div id="boost-card"
          style="box-sizing:border-box;width:${$e}px;height:${Ee}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Ee*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(Ee*.2)}px">⚡</div>
            <div style="font-size:${Math.round(Ee*.09)}px;color:#000;font-weight:900">+${(te=t.boostCard)==null?void 0:te.value}</div>
          </div>`},B=($e,Ee)=>Ee?V(130,175):Y($e,130,175),oe=($e,Ee)=>Ee?V(68,95):Y($e,68,95),pe=P?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ye=A?`<button id="btn-results" style="${pe};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${pe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:h?`<button id="btn-action" style="${pe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:v?`<button id="btn-action" style="${pe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${pe};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,ze=h||v?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",Te=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${P?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${l.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':l.map($e=>`<div class="sub-btn-col" data-sub-id="${$e.cardId}" style="cursor:pointer;flex-shrink:0">${Ye($e,76,100)}</div>`).join("")}
      </div>`,we=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ft(t.homeTeam,t.formation,t.phase,a,300,300,n)}
        </div>
      </div>`;return P?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Te}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${we}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ye}${ze}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${r.map($e=>B($e,!1)).join("")}
            ${p?B(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(t.homeTeam,t.formation,t.phase,a,300,300,n)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${r.map($e=>oe($e,!1)).join("")}
            ${p?oe(null,!0):""}
            <div id="sub-btn-main" style="cursor:${d?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${d?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${d?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${d?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${l.length}</div>
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
          <div>${ye}${ze}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(P=>{var Y,V,B;if(P.type==="duel"){const oe=P.isGoal,pe=P.homeScored?"#FFD700":oe?"#ff6b6b":"rgba(255,255,255,0.3)",ye=P.homeScored?"⚽ BUT !":oe?"⚽ BUT IA !":(Y=P.homePlayers)!=null&&Y.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${oe?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${pe};margin-bottom:4px">
                <div style="font-size:9px;color:${pe};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ye}</div>
                ${(V=P.homePlayers)!=null&&V.length?`<div style="margin-bottom:3px">${nt(P.homePlayers,"rgba(255,255,255,0.7)",P.homeTotal)}</div>`:""}
                ${(B=P.aiPlayers)!=null&&B.length?`<div style="opacity:0.7">${nt(P.aiPlayers,"#ff6b6b",P.aiTotal)}</div>`:""}
              </div>`}return P.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${P.outPlayer?Ye({...P.outPlayer,used:!0,_line:P.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${P.inPlayer?Ye({...P.inPlayer,_line:P.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:P.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${P.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${P.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function I(){const P=e.querySelector(".match-screen");if(!P)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);P.style.bottom="auto",P.style.height=Y+"px",P.style.minHeight=Y+"px",P.style.maxHeight=Y+"px",P.style.overflow="hidden";const V=e.querySelector("#mobile-action-bar"),B=e.querySelector("#mobile-play-area");V&&B&&(B.style.paddingBottom=V.offsetHeight+"px")}if(I(),setTimeout(I,120),setTimeout(I,400),setTimeout(I,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",I),window.visualViewport.addEventListener("scroll",I)),window.addEventListener("resize",I)),function(){const Y=e.querySelector(".terrain-wrapper svg");Y&&(Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("viewBox","-26 -26 352 352"),Y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const P=e.querySelector(".terrain-wrapper svg");P&&(P.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let P=!1,Y=30;const V=()=>document.getElementById("match-timer"),B=()=>{const oe=V();if(!oe)return;const pe=String(Math.floor(Y/60)).padStart(2,"0"),ye=String(Y%60).padStart(2,"0");oe.textContent=` ${pe}:${ye}`,oe.style.color=P?"#ff2222":"#ff9500",oe.style.fontWeight="900"};B(),t._timerInt=setInterval(()=>{if(Y--,Y<0)if(!P)P=!0,Y=15,B();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const oe=document.createElement("div");oe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",oe.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(oe),setTimeout(()=>{oe.remove(),qt(e,t,i)},2500)}else B()},1e3)}(C=document.getElementById("match-quit"))==null||C.addEventListener("click",()=>{We(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,qt(e,t,i))}),(U=document.getElementById("view-ai"))==null||U.addEventListener("click",()=>Ro(t,i)),(D=document.getElementById("toggle-history"))==null||D.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.add("open")}),(N=document.getElementById("close-history"))==null||N.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.remove("open")}),(G=document.getElementById("btn-action"))==null||G.addEventListener("click",()=>{t.selected.length!==0&&(h?jo(e,t,i):v&&qo(e,t,i))}),(ie=document.getElementById("btn-results"))==null||ie.addEventListener("click",()=>qt(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(P=>{P.addEventListener("click",()=>Co(P,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(P=>{P.addEventListener("click",()=>ai(e,t,i,null,P.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(P=>{P.addEventListener("click",()=>Do(P.dataset.gcId,P.dataset.gcType,e,t,i))}),(se=document.getElementById("boost-card"))==null||se.addEventListener("click",()=>No(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(P=>{P.addEventListener("click",()=>ai(e,t,i,P.dataset.subId))}),(de=document.getElementById("sub-btn-main"))==null||de.addEventListener("click",()=>ai(e,t,i))}function Co(e,t,i,a){const c=e.dataset.cardId,l=e.dataset.role,s=t.selected.findIndex(d=>d.cardId===c);if(s!==-1)t.selected.splice(s,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const d=(t.homeTeam[l]||[]).find(u=>u.cardId===c);d&&t.selected.push({...d,_role:l,_line:l})}Xe(i,t,a)}function Ti(e,t,i){e.matchId&&E.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function jo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ti(t,i,i.state.profile.id);const a=!["GK","DEF","MIL","ATT"].some(s=>(t.aiTeam[s]||[]).some(d=>!d.used)),c=t.selected.map(s=>{const d=(t.homeTeam[s._role]||[]).find(o=>o.cardId===s.cardId)||s,u=a&&["GK","DEF"].includes(s._role);return{...d,_line:s._role,...u?{note_a:Math.max(1,Number(d.note_a)||0)}:{}}}),l=Nt(c,t.modifiers.home);t.pendingAttack={...l,players:[...c],side:"home"},t.selected.forEach(s=>{const d=(t.homeTeam[s._role]||[]).find(u=>u.cardId===s.cardId);d&&(d.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${l.total} (base ${l.base}${l.links?` +${l.links} liens`:""}) — ${t.selected.map(s=>s.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Xe(e,t,i),setTimeout(()=>Fo(e,t,i),1200)}function qo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ti(t,i,i.state.profile.id);const a=t.selected.map(d=>({...(t.homeTeam[d._role]||[]).find(o=>o.cardId===d.cardId)||d,_line:d._role})),c=Rt(a,t.modifiers.home);t.selected.forEach(d=>{const u=(t.homeTeam[d._role]||[]).find(o=>o.cardId===d.cardId);u&&(u.used=!0)});const l=Ot(t.pendingAttack.total,c.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>({name:d.name,note:d._line==="MIL"?d.note_m:d.note_a,portrait:Pe(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),homePlayers:t.selected.map(d=>{const u=(t.homeTeam[d._role]||[]).find(o=>o.cardId===d.cardId)||d;return{name:u.name,note:(u._line==="GK"?Number(u.note_g)||0:u._line==="MIL"?Number(u.note_m)||0:Number(u.note_d)||0)+(u.boost||0),portrait:Pe(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(l.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(l.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Xe(e,t,i),Zt(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{At(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,At(e,t,i,"home-attack")}function fi(e,t,i){Ti(t,i,null);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=tn(a,"attack",t.difficulty);if(!c.length){Wt(e,t,i);return}const l=Nt(c,t.modifiers.ai);t.pendingAttack={...l,players:c,side:"ai"},c.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${l.total} (${c.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),u=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!u){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(n=>({name:n.name,note:n._line==="MIL"?n.note_m:n.note_a,portrait:Pe(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),aiTotal:l.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,Xe(e,t,i),Zt(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{At(e,t,i,"home-attack")});return}t.phase="defense",Xe(e,t,i)}function Fo(e,t,i){var o,n;const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=tn(a,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(t.aiTeam[f]||[]).filter(h=>!h.used)).length){t.homeScore++;const h={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((o=t.pendingAttack)==null?void 0:o.players)||[]).map(v=>({name:v.name,note:Ae(v,v._line||v.job),portrait:Pe(v),job:v.job,country_code:v.country_code,rarity:v.rarity,clubName:v.clubName,clubLogo:v.clubLogo})),homeTotal:((n=t.pendingAttack)==null?void 0:n.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(h),t.modifiers.ai={},t.pendingAttack=null,Xe(e,t,i),Zt(h.homePlayers,t.homeScore,t.aiScore,!0,()=>{At(e,t,i,"ai-attack")});return}const s=c.length>0?Rt(c,t.modifiers.ai).total:0;c.forEach(f=>{f.used=!0});const d=Ot(t.pendingAttack.total,s,t.modifiers.ai),u={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(f=>({name:f.name,note:f._line==="MIL"?f.note_m:f.note_a,portrait:Pe(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),aiPlayers:c.map(f=>({name:f.name,note:f._line==="GK"?f.note_g:f._line==="MIL"?f.note_m:f.note_d,portrait:Pe(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:s,isGoal:!1,homeScored:!1,text:""};if(d.shielded)u.text="🛡️ Bouclier IA !",t.log.push(u);else if(d.goal){t.homeScore++,u.isGoal=!0,u.homeScored=!0,u.text=`⚽ BUT ! (${t.pendingAttack.total} > ${s})`,t.log.push(u),t.modifiers.ai={},t.pendingAttack=null,Xe(e,t,i),Zt(u.homePlayers,t.homeScore,t.aiScore,!0,()=>{At(e,t,i,"ai-attack")});return}else u.text=`🧤 IA défend (${s} ≥ ${t.pendingAttack.total})`,t.log.push(u);t.modifiers.ai={},t.pendingAttack=null,At(e,t,i,"ai-attack")}function At(e,t,i,a){if(t.round++,vn(t)){qt(e,t,i);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(l=>!l.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(d=>!d.used).length){Wt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){Wt(e,t,i);return}setTimeout(()=>fi(e,t,i),100);return}t.phase="attack",Xe(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Wt(e,t,i);return}t.phase="ai-attack",Xe(e,t,i),setTimeout(()=>fi(e,t,i),800)}}function vn(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(c=>!c.used)),i=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(c=>!c.used));return!t&&!i}function Wt(e,t,i){vn(t)?qt(e,t,i):(t.phase="attack",Xe(e,t,i))}function Bo(e,t,i){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=Pe(e),l=Pe(t),s=It[e.job]||"#555",d=It[t.job]||"#555",u=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${s};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${c?`<img src="${c}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${u}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${d};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${l?`<img src="${l}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${o}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(a);let n=!1;const f=()=>{n||(n=!0,a.remove(),i())};a.addEventListener("click",f),setTimeout(f,2e3)}function Mt(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function ai(e,t,i,a=null,c=null){var v,A;if(t.phase!=="attack"){Mt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Mt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const l=Object.entries(t.homeTeam).flatMap(([r,p])=>(p||[]).filter(I=>I.used).map(I=>({...I,_line:I._line||r}))),s=t.homeSubs.filter(r=>!t.usedSubIds.includes(r.cardId));if(!l.length){Mt("Aucun joueur utilisé à remplacer");return}if(!s.length){Mt("Aucun remplaçant disponible");return}let d=Math.max(0,l.findIndex(r=>r.cardId===c));const u=((v=l[d])==null?void 0:v._line)||((A=l[d])==null?void 0:A.job);let o=a?Math.max(0,s.findIndex(r=>r.cardId===a)):Math.max(0,s.findIndex(r=>r.job===u)),n=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function h(){var D,N,G,ie,se,de;const r=l[d],p=s[o],I=Math.min(130,Math.round((window.innerWidth-90)/2)),z=Math.round(I*1.35),C=P=>`background:rgba(255,255,255,0.12);border:none;color:${P?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${P?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${C(o===0)}" ${o===0?"disabled":""}>▲</button>
        <div>${p?Ye({...p,used:!1,boost:0},I,z):"<div>—</div>"}</div>
        <button id="in-down" style="${C(o>=s.length-1)}" ${o>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${o+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${C(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${r?Ye({...r,used:!1,boost:0},I,z):"<div>—</div>"}</div>
        <button id="out-down" style="${C(d>=l.length-1)}" ${d>=l.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${l.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(D=f.querySelector("#sub-close"))==null||D.addEventListener("click",()=>f.remove()),(N=f.querySelector("#out-up"))==null||N.addEventListener("click",()=>{d>0&&(d--,h())}),(G=f.querySelector("#out-down"))==null||G.addEventListener("click",()=>{d<l.length-1&&(d++,h())}),(ie=f.querySelector("#in-up"))==null||ie.addEventListener("click",()=>{o>0&&(o--,h())}),(se=f.querySelector("#in-down"))==null||se.addEventListener("click",()=>{o<s.length-1&&(o++,h())});const U=(P,Y,V,B)=>{const oe=f.querySelector("#"+P);if(!oe)return;let pe=0;oe.addEventListener("touchstart",ye=>{pe=ye.touches[0].clientY},{passive:!0}),oe.addEventListener("touchend",ye=>{const ze=ye.changedTouches[0].clientY-pe;if(Math.abs(ze)<30)return;const Te=Y();ze<0&&Te<B-1?(V(Te+1),h()):ze>0&&Te>0&&(V(Te-1),h())},{passive:!0})};U("in-panel",()=>o,P=>o=P,s.length),U("out-panel",()=>d,P=>d=P,l.length),(de=f.querySelector("#sub-confirm"))==null||de.addEventListener("click",P=>{if(P.preventDefault(),P.stopPropagation(),n)return;n=!0;const Y=l[d],V=s[o];if(!Y||!V)return;let B=null,oe=-1;for(const[ye,ze]of Object.entries(t.homeTeam)){const Te=(ze||[]).findIndex(we=>we.cardId===Y.cardId);if(Te!==-1){B=ye,oe=Te;break}}if(oe===-1||!B){Mt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const pe={...V,_line:B,_col:Y._col||0,used:!1,boost:0};t.homeTeam[B].splice(oe,1,pe),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(V.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Y.name,firstname:Y.firstname,note:Ae(Y,B),portrait:Pe(Y),job:Y.job,country_code:Y.country_code,rarity:Y.rarity,clubName:Y.clubName,clubLogo:Y.clubLogo},inPlayer:{name:V.name,firstname:V.firstname,note:Ae(V,B),portrait:Pe(V),job:V.job,country_code:V.country_code,rarity:V.rarity,clubName:V.clubName,clubLogo:V.clubLogo},text:`🔄 ${V.firstname} ${V.name} remplace ${Y.firstname} ${Y.name}`}),f.remove(),Bo(Y,V,()=>Xe(e,t,i))})}document.body.appendChild(f),h()}function Do(e,t,i,a,c){var A,r;const l=(a.gcDefs||[]).find(p=>p.name===t),s=Ke[t]||{icon:"⚡",desc:"Carte spéciale."},d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[l==null?void 0:l.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",u={purple:"#b06ce0",light_blue:"#00d4ef"}[l==null?void 0:l.color]||"#b06ce0",o=(l==null?void 0:l.name)||t,n=(l==null?void 0:l.effect)||s.desc,f=l!=null&&l.image_url?`/manager-wars/icons/${l.image_url}`:null,h=s.icon||"⚡",v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",v.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${u};background:${d};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${u}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${o.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${o}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${f?`<img src="${f}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${h}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${n}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(v),(A=v.querySelector("#gc-back"))==null||A.addEventListener("click",()=>v.remove()),(r=v.querySelector("#gc-use"))==null||r.addEventListener("click",()=>{v.remove(),Po(e,t,i,a,c)})}function Kt(e,t,i,a,c,l){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let d=[];function u(){var o,n;s.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${d.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(f=>{const h=f._line||f.job||"MIL",v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[h]||"#555",A=Ae(f,h)+(f.boost||0),r=d.find(p=>p.cardId===f.cardId);return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${r?"#FFD700":"rgba(255,255,255,0.25)"};background:${v};overflow:hidden;cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${A}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${h}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${d.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${d.length}/${t})
      </button>
    </div>`,(o=s.querySelector("#gc-picker-close"))==null||o.addEventListener("click",()=>s.remove()),s.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const h=f.dataset.cid,v=e.find(r=>r.cardId===h);if(!v)return;const A=d.findIndex(r=>r.cardId===h);A>-1?d.splice(A,1):d.length<t&&d.push(v),u()})}),(n=s.querySelector("#gc-picker-confirm"))==null||n.addEventListener("click",()=>{s.remove(),l(d)})}u(),document.body.appendChild(s)}const Go={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},a,c,l)=>{const s=Object.entries(a.homeTeam).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,u])=>u.filter(o=>!o.used).map(o=>({...o,_line:d})));return s.length?(Kt(s,t,`Choisir ${t} joueur(s) à booster (+${e})`,c,a,d=>{d.forEach(u=>{const o=(a.homeTeam[u._line]||[]).find(n=>n.cardId===u.cardId);o&&(o.boost=(o.boost||0)+e,a.log.push({text:`⚡ +${e} sur ${o.name}`,type:"info"}))}),Xe(c,a,l)}),!0):(a.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Xe(c,a,l),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:a="ai"},c,l,s)=>{const d=a==="home"?c.homeTeam:c.aiTeam,u=a==="ai"?"adverse":"allié",o=Object.entries(d).filter(([n])=>!i.length||i.includes(n)).flatMap(([n,f])=>f.filter(h=>!h.used).map(h=>({...h,_line:n})));return o.length?(Kt(o,t,`Choisir ${t} joueur(s) ${u}(s) à débuffer (-${e})`,l,c,n=>{n.forEach(f=>{const v=((a==="home"?c.homeTeam:c.aiTeam)[f._line]||[]).find(A=>A.cardId===f.cardId);v&&(v.boost=(v.boost||0)-e,c.log.push({text:`🎯 -${e} sur ${v.name}${a==="ai"?" (IA)":""}`,type:"info"}))}),Xe(l,c,s)}),!0):(c.log.push({text:`🎯 Aucun joueur ${u} disponible`,type:"info"}),Xe(l,c,s),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},a,c,l)=>{const s=i==="home"?a.homeTeam:a.aiTeam,d=i==="ai"?"adverse":"allié",u=Object.entries(s).filter(([o])=>!t.length||t.includes(o)).flatMap(([o,n])=>n.filter(f=>!f.used).map(f=>({...f,_line:o})));return u.length?(Kt(u,e,`Choisir ${e} joueur(s) ${d}(s) à exclure`,c,a,o=>{o.forEach(n=>{const h=((i==="home"?a.homeTeam:a.aiTeam)[n._line]||[]).find(v=>v.cardId===n.cardId);h&&(h.used=!0,a.log.push({text:`❌ ${h.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Xe(c,a,l)}),!0):(a.log.push({text:`❌ Aucun joueur ${d} à exclure`,type:"info"}),Xe(c,a,l),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,a,c)=>{const l=Object.entries(i.homeTeam).filter(([s])=>!t.length||t.includes(s)).flatMap(([s,d])=>d.filter(u=>u.used).map(u=>({...u,_line:s})));return l.length?(Kt(l,e,`Choisir ${e} joueur(s) à ressusciter`,a,i,s=>{s.forEach(d=>{const u=(i.homeTeam[d._line]||[]).find(o=>o.cardId===d.cardId);u&&(u.used=!1,i.log.push({text:`💫 ${u.name} ressuscité !`,type:"info"}))}),Xe(a,i,c)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Xe(a,i,c),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Po(e,t,i,a,c){a.usedGc.push(e);const l=a.gcDefs||[],s=l.find(u=>u.name===t)||l.find(u=>{var o;return((o=u.name)==null?void 0:o.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let d=!1;if(s!=null&&s.effect_type&&s.effect_type!=="CUSTOM"){const u=Go[s.effect_type];u?u(s.effect_params||{},a,i,c)||(d=!0):(c.toast(`Effet "${s.effect_type}" non implémenté`,"error"),d=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const u=Object.entries(a.homeTeam).flatMap(([o,n])=>(n||[]).filter(f=>f.used).map(f=>({...f,_line:o})));u.length?(u[0].used=!1,a.log.push({text:`💫 ${u[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const u=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(o=>!o.used);if(u.length){const o=u.sort((n,f)=>Ae(f,"ATT")-Ae(n,"ATT"))[0];o.used=!0,a.log.push({text:`❄️ ${o.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}d=!0}E.from("cards").delete().eq("id",e).then(()=>{}),d&&Xe(i,a,c)}function No(e,t,i){const a=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!a.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${It[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Ae(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const l=c.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const d=(t.homeTeam[s]||[]).find(u=>u.cardId===l);if(d){d.boost=(d.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Xe(e,t,i)})})}function Zt(e,t,i,a,c){const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(o,n)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${n%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][n%8]}
    </div>`).join("");l.innerHTML=`
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${s}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${a?"BUT !":"BUT IA !"}
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
    ${e.map(o=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${It[o.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${o.portrait?`<img src="${o.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(o.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(l);let d=!1;const u=()=>{d||(d=!0,l.remove(),setTimeout(()=>c(),50))};l.addEventListener("click",u),setTimeout(u,3500)}async function qt(e,t,i){var n,f;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=i,c=t.homeScore>t.aiScore,l=t.homeScore===t.aiScore,s=c?"victoire":l?"nul":"defaite",d=Vn(t.mode,s);t.matchId&&await E.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?a.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",t.matchId);const u={credits:(a.profile.credits||0)+d,matches_played:(a.profile.matches_played||0)+1};c?u.wins=(a.profile.wins||0)+1:l?u.draws=(a.profile.draws||0)+1:u.losses=(a.profile.losses||0)+1,await E.from("users").update(u).eq("id",a.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${c?"🏆":l?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${c?"Victoire !":l?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${d.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(o),(n=document.getElementById("res-home"))==null||n.addEventListener("click",()=>{o.remove(),We(e),i.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{o.remove(),We(e),i.navigate("match",{matchMode:t.mode})})}function Ro(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ut(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function wn(e,t){var i,a;try{const c=(a=(i=t==null?void 0:t.state)==null?void 0:i.profile)==null?void 0:a.id;try{(E.getChannels?E.getChannels():[]).forEach(s=>{const d=s.topic||"";(d.includes("matchmaking")||d.includes("pvp-match")||d.includes("friend-invite"))&&E.removeChannel(s)})}catch(l){console.warn("[Random] cleanup canaux:",l)}c&&await E.rpc("cancel_matchmaking",{p_user_id:c}).catch(()=>{})}catch{}await ni(e,t,"random",({deckId:c,formation:l,starters:s,subsRaw:d,gcCardsEnriched:u,gcDefs:o,stadiumDef:n})=>{const f=h=>Oo(e,t,c,l,s,d,h,o||[],n);if(!u.length){f([]);return}ii(e,u,f)})}async function Oo(e,t,i,a,c,l,s=[],d=[],u=null){var C;const{state:o,navigate:n,toast:f}=t;let h=!1,v=null;et(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const A=async(U=!0)=>{h=!0,v&&(E.removeChannel(v),v=null),U&&await E.rpc("cancel_matchmaking",{p_user_id:o.profile.id}).catch(()=>{})};(C=document.getElementById("mm-cancel"))==null||C.addEventListener("click",async()=>{try{await A(!0)}catch{}We(e),n("home")});const r=async(U,D,N)=>{if(h)return;h=!0,v&&(E.removeChannel(v),v=null);const G=document.getElementById("mm-status");G&&(G.textContent="Adversaire trouvé !"),await new Promise(ie=>setTimeout(ie,600)),e.isConnected&&_n(e,t,U,N,s,d)},{data:p,error:I}=await E.rpc("try_matchmake",{p_user_id:o.profile.id,p_deck_id:i});if(I||!(p!=null&&p.success)){f("Erreur de matchmaking","error"),We(e),n("home");return}if(p.matched){r(p.match_id,p.opponent_id,!1);return}const z=document.getElementById("mm-status");z&&(z.textContent="En attente d'un autre joueur..."),v=E.channel("matchmaking-"+o.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${o.profile.id}`},U=>{const D=U.new;D.status==="matched"&&D.match_id&&r(D.match_id,D.matched_with,!0)}).subscribe()}async function Ho(e,t,i){const{state:a,navigate:c,toast:l}=t;try{(E.getChannels?E.getChannels():[]).forEach(o=>{const n=o.topic||"";(n.includes("matchmaking")||n.includes("pvp-match")||n.includes("friend-invite"))&&E.removeChannel(o)})}catch{}const{data:s}=await E.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!s){l("Match introuvable","error"),c("home");return}if(s.status==="finished"){l("Ce match est terminé","info"),c("home");return}const d=s.home_id===a.profile.id;_n(e,t,i,d,[],[])}async function _n(e,t,i,a,c=[],l=[]){const{state:s,navigate:d,toast:u}=t,o=a?"p1":"p2",n=a?"p2":"p1",f=(c||[]).map(M=>M.id),h=(c||[]).map(M=>({id:M.id,gc_type:M.gc_type,_gcDef:M._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:v}=await E.from("matches").select("*").eq("id",i).single();if(!v){u("Match introuvable","error"),d("home");return}async function A(){const[{data:M},{data:q},{data:w},{data:k}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:v.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:v.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",v.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",v.away_id).single()]),g=_=>({cardId:_.card_id,position:_.position,id:_.id,firstname:_.firstname,name:_.surname_encoded,country_code:_.country_code,club_id:_.club_id,job:_.job,job2:_.job2,note_g:Number(_.note_g)||0,note_d:Number(_.note_d)||0,note_m:Number(_.note_m)||0,note_a:Number(_.note_a)||0,rarity:_.rarity,skin:_.skin,hair:_.hair,hair_length:_.hair_length,clubName:_.club_encoded_name||null,clubLogo:_.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),m=((M==null?void 0:M.starters)||[]).map(_=>g(_)),x=((q==null?void 0:q.starters)||[]).map(_=>g(_)),y=(M==null?void 0:M.formation)||"4-4-2",b=(q==null?void 0:q.formation)||"4-4-2";let $=yt(m,y),T=yt(x,b);return stadiumDef&&a&&($=Ei($,stadiumDef)),{p1Team:$,p2Team:T,p1Subs:((M==null?void 0:M.subs)||[]).map(_=>g(_)),p2Subs:((q==null?void 0:q.subs)||[]).map(_=>g(_)),p1Formation:y,p2Formation:b,p1Name:(w==null?void 0:w.club_name)||(w==null?void 0:w.pseudo)||"Joueur 1",p2Name:(k==null?void 0:k.club_name)||(k==null?void 0:k.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?h:[],gcCardsFull_p2:a?[]:h,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let r=v.game_state&&Object.keys(v.game_state).length?v.game_state:null;if(!r)if(a){r=await A();const{data:M}=await E.from("matches").select("game_state").eq("id",i).single();!(M!=null&&M.game_state)||!Object.keys(M.game_state).length?await E.from("matches").update({game_state:r,turn_user_id:v.home_id}).eq("id",i):r=M.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let M=0;M<30&&!r;M++){await new Promise(w=>setTimeout(w,400));const{data:q}=await E.from("matches").select("game_state").eq("id",i).single();q!=null&&q.game_state&&Object.keys(q.game_state).length&&(r=q.game_state)}if(!r){u("Erreur de synchronisation","error"),d("home");return}r.gc_p2=f,r.gcCardsFull_p2=h,await E.from("matches").update({game_state:r}).eq("id",i)}let p=!1,I=null,z=!1;const C=new Set,U=new Set;function D(M){var $,T;try{E.removeChannel(N)}catch{}const q=r[o+"Score"]||0,w=r[n+"Score"]||0;let k,g;M.winner_id?(k=M.winner_id===s.profile.id,g=!1):M.forfeit?(k=q>w,g=!1):(g=q===w,k=q>w),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const m=document.createElement("div");m.id="pvp-end-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const x=g?"🤝":k?"🏆":"😞",y=g?"MATCH NUL":k?"VICTOIRE !":"DÉFAITE",b=g?"#fff":k?"#FFD700":"#ff6b6b";m.innerHTML=`
      <div style="font-size:64px">${x}</div>
      <div style="font-size:26px;font-weight:900;color:${b}">${y}</div>
      <div style="font-size:18px">${r[o+"Name"]} ${q} – ${w} ${r[n+"Name"]}</div>
      ${M.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${k?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(m),(T=m.querySelector("#pvp-end-home"))==null||T.addEventListener("click",()=>{m.remove(),We(e),d("home")})}const N=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},M=>{const q=M.new;try{if(q.status==="finished"||q.forfeit){if(p)return;p=!0,I&&(clearInterval(I),I=null),q.game_state&&(r=q.game_state),D(q);return}if(q.game_state){const w=r;r=q.game_state;const k=r._lastGC;if(k&&k.seq&&!U.has(k.seq)&&(U.add(k.seq),k.by!==o)){Te(k.type,k.by,()=>B());return}const g=w[o+"Score"]||0,m=w[n+"Score"]||0,x=r[o+"Score"]||0,y=r[n+"Score"]||0,b=x>g,$=y>m;if((b||$)&&!C.has(r.round)){C.add(r.round);const T=[...r.log||[]].reverse().find(S=>S.isGoal),_=((T==null?void 0:T.homePlayers)||[]).map(S=>({name:S.name,note:S.note,portrait:S.portrait,job:S.job}));ze(_,x,y,b,()=>B());return}B()}}catch(w){console.error("[PvP] crash:",w)}}).subscribe();async function G(M){Object.assign(r,M),r.lastActionAt=new Date().toISOString();const{error:q}=await E.from("matches").update({game_state:r}).eq("id",i);q&&u("Erreur de synchronisation","error");try{B()}catch(w){console.error("[PvP] renderPvpScreen crash:",w)}}async function ie(){if(p)return;p=!0,I&&(clearInterval(I),I=null);const M=a?v.away_id:v.home_id,q=a?"p2":"p1",w=a?"p1":"p2",k={...r,[q+"Score"]:3,[w+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:M,home_score:k.p1Score||0,away_score:k.p2Score||0,game_state:k}).eq("id",i)}catch{}try{E.removeChannel(N)}catch{}setTimeout(()=>{We(e),d("home")},800)}const se={BOOST_STAT:({value:M=1,count:q=1,roles:w=[]},k,g)=>{const m=k[o+"Team"],x=Object.entries(m).filter(([y])=>!w.length||w.includes(y)).flatMap(([y,b])=>b.filter($=>!$.used).map($=>({...$,_line:y})));if(!x.length){k.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),g(k);return}de(x,q,`Choisir ${q} joueur(s) à booster (+${M})`,y=>{y.forEach(b=>{const $=(m[b._line]||[]).find(T=>T.cardId===b.cardId);$&&($.boost=($.boost||0)+M,k.log.push({text:`⚡ +${M} sur ${$.name}`,type:"info"}))}),k[o+"Team"]=m,g(k)})},DEBUFF_STAT:({value:M=1,count:q=1,roles:w=[],target:k="ai"},g,m)=>{const x=k==="home"?o:n,y=g[x+"Team"],b=k==="home"?"allié":"adverse",$=Object.entries(y).filter(([T])=>!w.length||w.includes(T)).flatMap(([T,_])=>_.map(S=>({...S,_line:T})));if(!$.length){g.log.push({text:`🎯 Aucun joueur ${b}`,type:"info"}),m(g);return}de($,q,`Choisir ${q} joueur(s) ${b}(s) (-${M})`,T=>{T.forEach(_=>{const S=(y[_._line]||[]).find(L=>L.cardId===_.cardId);S&&(S.boost=(S.boost||0)-M,g.log.push({text:`🎯 -${M} sur ${S.name}`,type:"info"}))}),g[x+"Team"]=y,m(g)})},GRAY_PLAYER:({count:M=1,roles:q=[],target:w="ai"},k,g)=>{const m=w==="home"?o:n,x=k[m+"Team"],y=w==="home"?"allié":"adverse",b=Object.entries(x).filter(([$])=>!q.length||q.includes($)).flatMap(([$,T])=>T.filter(_=>!_.used).map(_=>({..._,_line:$})));if(!b.length){k.log.push({text:`❌ Aucun joueur ${y}`,type:"info"}),g(k);return}de(b,M,`Choisir ${M} joueur(s) ${y}(s) à exclure`,$=>{const T="usedCardIds_"+m,_=new Set(k[T]||[]);$.forEach(S=>{const L=(x[S._line]||[]).find(j=>j.cardId===S.cardId);L&&(L.used=!0,_.add(S.cardId),k.log.push({text:`❌ ${L.name} exclu !`,type:"info"}))}),k[T]=[..._],k[m+"Team"]=x,g(k)})},REVIVE_PLAYER:({count:M=1,roles:q=[]},w,k)=>{const g=w[o+"Team"],m=Object.entries(g).filter(([x])=>!q.length||q.includes(x)).flatMap(([x,y])=>y.filter(b=>b.used).map(b=>({...b,_line:x})));if(!m.length){w.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),k(w);return}de(m,M,`Choisir ${M} joueur(s) à ressusciter`,x=>{x.forEach(y=>{const b=(g[y._line]||[]).find($=>$.cardId===y.cardId);b&&(b.used=!1,w.log.push({text:`💫 ${b.name} ressuscité !`,type:"info"}))}),w[o+"Team"]=g,k(w)})},REMOVE_GOAL:({},M,q)=>{const w=n+"Score";M[w]>0?(M[w]--,M.log.push({text:"🚫 Dernier but annulé !",type:"info"})):M.log.push({text:"🚫 Aucun but à annuler",type:"info"}),q(M)},ADD_GOAL_DRAW:({},M,q)=>{M[o+"Score"]===M[n+"Score"]?(M[o+"Score"]++,M.log.push({text:"🎯 But bonus !",type:"info"})):M.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),q(M)},ADD_SUB:({value:M=1},q,w)=>{q.maxSubs=(q.maxSubs||3)+M,q.log.push({text:`🔄 +${M} remplacement(s)`,type:"info"}),w(q)},CUSTOM:({},M,q)=>q(M)};function de(M,q,w,k){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let m=[];function x(){var b,$;const y=M.map(T=>{const _={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[T._line]||"#555",S=Ae(T,T._line)+(T.boost||0),j=m.find(R=>R.cardId===T.cardId)?"#FFD700":"rgba(255,255,255,0.25)",F=T.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${T.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${j};background:${_};overflow:hidden;cursor:pointer;${F}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${T.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${S}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${T._line}</div>
        </div>`}).join("");g.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${w}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${m.length}/${q}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${y}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${m.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${m.length}/${q})
          </button>
        </div>`,(b=g.querySelector("#pp-close"))==null||b.addEventListener("click",()=>g.remove()),g.querySelectorAll(".pp-item").forEach(T=>{T.addEventListener("click",()=>{const _=T.dataset.cid,S=M.find(j=>j.cardId===_),L=m.findIndex(j=>j.cardId===_);S&&(L>-1?m.splice(L,1):m.length<q&&m.push(S),x())})}),($=g.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{g.remove(),k(m)})}x(),document.body.appendChild(g)}async function P(M,q){const k=(r["gcCardsFull_"+o]||[]).find(y=>y.id===M),g=(k==null?void 0:k._gcDef)||(r.gcDefs||[]).find(y=>{var b;return y.name===q||((b=y.name)==null?void 0:b.toLowerCase().trim())===(q==null?void 0:q.toLowerCase().trim())}),m=[...r["usedGc_"+o]||[],M],x={type:q,by:o,seq:(r._gcAnimSeq||0)+1};U.add(x.seq),Te(q,o,async()=>{if(g!=null&&g.effect_type&&g.effect_type!=="CUSTOM"){const b=se[g.effect_type];if(b){const $={...r};b(g.effect_params||{},$,async T=>{T["usedGc_"+o]=m,T._lastGC=x,T._gcAnimSeq=x.seq,await G(T)});return}}const y={...r};switch(q){case"Remplacement+":y.maxSubs=(y.maxSubs||3)+1,y.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const b=n+"Score";y[b]>0&&(y[b]--,y.log.push({text:"🚫 But annulé",type:"info"}));break}}y["usedGc_"+o]=m,y._lastGC=x,y._gcAnimSeq=x.seq,await G(y)})}function Y(M,q){const w="usedCardIds_"+M,k=new Set(r[w]||[]);q.forEach(g=>k.add(g)),r[w]=[...k]}function V(){for(const M of["p1","p2"]){const q=new Set(r["usedCardIds_"+M]||[]),w=r[M+"Team"];if(w)for(const k of["GK","DEF","MIL","ATT"])(w[k]||[]).forEach(g=>{g.used=q.has(g.cardId)})}}function B(){var Ue,Je,Ze,Qe,ot,gt;if(r.phase==="reveal")return oe();if(r.phase==="midfield")return ye();if(r.phase==="finished")return De();const M=r[o+"Team"],q=r[n+"Team"];V();const w=r[o+"Score"],k=r[n+"Score"],g=r[o+"Name"],m=r[n+"Name"],x=r.phase===o+"-attack",y=r.phase===o+"-defense",b=Array.isArray(r["selected_"+o])?r["selected_"+o]:[],$=b.map(ae=>ae.cardId),T=window.innerWidth>=700,_=r[o+"Subs"]||[],S=r["usedSubIds_"+o]||[],L=_.filter(ae=>!S.includes(ae.cardId)),j=r["gcCardsFull_"+o]||[],F=r["usedGc_"+o]||[],R=j.filter(ae=>!F.includes(ae.id)),H=r.boostOwner===o&&!r.boostUsed,W=!["GK","DEF","MIL","ATT"].some(ae=>(q[ae]||[]).some(_e=>!_e.used)),K=[...M.MIL||[],...M.ATT||[]].filter(ae=>!ae.used),ee=x&&W&&K.length===0?[...M.GK||[],...M.DEF||[]].filter(ae=>!ae.used).map(ae=>ae.cardId):[];function ne(ae,_e,Q){var pt,ht;const ce=ae._gcDef,J={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ce==null?void 0:ce.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",le={purple:"#b06ce0",light_blue:"#00d4ef"}[ce==null?void 0:ce.color]||"#b06ce0",Me=(ce==null?void 0:ce.name)||ae.gc_type,ke=(ce==null?void 0:ce.effect)||((pt=Ke[ae.gc_type])==null?void 0:pt.desc)||"",tt=ce!=null&&ce.image_url?`/manager-wars/icons/${ce.image_url}`:null,it=((ht=Ke[ae.gc_type])==null?void 0:ht.icon)||"⚡",rt=Math.round(Q*.22),st=Math.round(Q*.22),ct=Q-rt-st,$t=Me.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ae.id}" data-gc-type="${ae.gc_type}"
        style="box-sizing:border-box;width:${_e}px;height:${Q}px;border-radius:10px;border:2px solid ${le};background:${J};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${rt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${$t}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${_e-6}px">${Me}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${ct}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${tt?`<img src="${tt}" style="max-width:${_e-10}px;max-height:${ct-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(ct*.55)}px">${it}</span>`}
        </div>
        <div style="height:${st}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ke.slice(0,38)}</span>
        </div>
      </div>`}function fe(ae,_e){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ae}px;height:${_e}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(_e*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(_e*.2)}px">⚡</div>
        <div style="font-size:${Math.round(_e*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const xe=(ae,_e)=>_e?fe(130,175):ne(ae,130,175),he=(ae,_e)=>_e?fe(68,95):ne(ae,68,95),ve=T?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ie=x?Se(o)?`<button id="pvp-action" style="${ve};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${b.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${ve};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:y?`<button id="pvp-action" style="${ve};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${b.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${m}</div>`,Le=x&&!Se(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':x||y?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${b.length}/3 sélectionné(s)</div>`:"",Re=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${T?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${L.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':L.map(ae=>`<div class="pvp-sub-btn" data-sub-id="${ae.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(ae,T?76:44,T?100:58)}</div>`).join("")}
    </div>`,je=x?"attack":y?"defense":"idle",Oe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(M,r[o+"Formation"],je,$,300,300,ee)}
      </div>
    </div>`;function Fe(ae){if(ae.type==="duel"&&(ae.homeTotal!=null||ae.aiTotal!=null)){const _e=(ae.homeTotal||0)>=(ae.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(ae.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ae.homePlayers||[]).map(Q=>dt(Q)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${_e?20:14}px;font-weight:900;color:${_e?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${ae.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${_e?14:20}px;font-weight:900;color:${_e?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${ae.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ae.aiPlayers||[]).map(Q=>dt(Q)).join("")}
            </div>
          </div>
          ${ae.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${ae.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${ae.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${ae.type==="goal"?700:400};padding:3px 2px">${ae.text||""}</div>`}const Ve=(()=>{var _e,Q;if(y&&((_e=r.pendingAttack)!=null&&_e.players)){const ce=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${m} ATTAQUE — Défendez !</div>
          ${nt((ce.players||[]).map(J=>({...J,used:!1})),"#ff6b6b",ce.total)}
        </div>`}if(x&&((Q=r.pendingAttack)!=null&&Q.players)){const ce=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${nt((ce.players||[]).map(J=>({...J,used:!1})),"#00ff88",ce.total)}
        </div>`}const ae=(r.log||[]).slice(-1)[0];return ae?'<div style="padding:2px 4px">'+Fe(ae)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ne=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${w} – ${k}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${m}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ve}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(r.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",T?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Re}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Oe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ie}${Le}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${R.map(ae=>xe(ae,!1)).join("")}
            ${H?xe(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(M,r[o+"Formation"],je,$,300,300,ee)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${R.map(ae=>he(ae,!1)).join("")}
            ${H?he(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${x&&L.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${x&&L.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${x&&L.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${x&&L.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${L.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(r["usedSubIds_"+o]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(r["usedSubIds_"+o]||[]).length}/${r.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Ie}${Le}</div>
        </div>
      </div>`;function He(){const ae=e.querySelector(".match-screen");if(!ae)return;const _e=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ae.style.height=_e+"px",ae.style.minHeight=_e+"px",ae.style.maxHeight=_e+"px",ae.style.overflow="hidden";const Q=e.querySelector("#mobile-action-bar"),ce=e.querySelector("#mobile-play-area");Q&&ce&&(ce.style.paddingBottom=Q.offsetHeight+"px")}if(He(),setTimeout(He,120),setTimeout(He,400),z||(z=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",He),window.visualViewport.addEventListener("scroll",He)),window.addEventListener("resize",He)),function(){const _e=e.querySelector(".terrain-wrapper svg");_e&&(_e.removeAttribute("width"),_e.removeAttribute("height"),_e.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",_e.setAttribute("viewBox","-26 -26 352 352"),_e.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ae=>{ae.addEventListener("click",()=>{if(!x&&!y)return;const _e=ae.dataset.cardId,Q=ae.dataset.role,ce=(M[Q]||[]).find(ke=>ke.cardId===_e);if(!ce||ce.used)return;const J=ee.includes(_e);if(x&&!["MIL","ATT"].includes(Q)&&!J)return;Array.isArray(r["selected_"+o])||(r["selected_"+o]=[]);const le=r["selected_"+o],Me=le.findIndex(ke=>ke.cardId===_e);Me>-1?le.splice(Me,1):le.length<3&&le.push({...ce,_role:Q}),B()})}),e.querySelectorAll(".match-used-hit").forEach(ae=>{ae.addEventListener("click",()=>Ee(ae.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ae=>{ae.addEventListener("click",()=>Ee())}),(Ue=e.querySelector("#pvp-sub-open"))==null||Ue.addEventListener("click",()=>Ee()),e.querySelectorAll(".pvp-gc-mini").forEach(ae=>{ae.addEventListener("click",()=>we(ae.dataset.gcId,ae.dataset.gcType))}),(Je=e.querySelector("#pvp-boost-card"))==null||Je.addEventListener("click",()=>$e()),(Ze=e.querySelector("#pvp-action"))==null||Ze.addEventListener("click",ae=>{x?ae.currentTarget.dataset.pass==="1"||!Se(o)?Z():ue():y&&me()}),(Qe=e.querySelector("#pvp-quit"))==null||Qe.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ie()}),(ot=e.querySelector("#pvp-view-opp"))==null||ot.addEventListener("click",()=>re()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>O()),I&&(clearInterval(I),I=null),(x||y)&&!p){let ae=30,_e=!1;const Q=()=>document.getElementById("pvp-timer"),ce=()=>{Q()&&(Q().textContent=ae+"s",Q().style.color=_e?"#ff4444":"#fff")};ce(),I=setInterval(()=>{ae--,ae<0?_e?(clearInterval(I),I=null,x&&!Se(o)?Z():ie()):(_e=!0,ae=15,ce()):ce()},1e3)}}function oe(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[n+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[n+"Team"],r[n+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await G({phase:"midfield"})},5e3)}let pe=!1;function ye(){if(pe)return;const M=r[o+"Team"].MIL||[],q=r[n+"Team"].MIL||[];function w(R){return R.reduce((H,W)=>H+Ae(W,"MIL"),0)}function k(R){let H=0;for(let W=0;W<R.length-1;W++){const K=at(R[W],R[W+1]);K==="#00ff88"?H+=2:K==="#FFD700"&&(H+=1)}return H}const g=w(M)+k(M),m=w(q)+k(q),x=g>=m;function y(R,H,W){return`<div id="duel-row-${W}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${H}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${R.map((K,ee)=>{const ne=ee<R.length-1?at(K,R[ee+1]):null,fe=!ne||ne==="#ff3333"||ne==="#cc2222",xe=ne==="#00ff88"?"+2":ne==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${W}" data-idx="${ee}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...K,note:Ae(K,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ee<R.length-1?`<div class="duel-link duel-link-${W}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${fe?"rgba(255,255,255,0.12)":ne};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${fe?"none":`0 0 8px ${ne}`}">
              ${xe?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ne}">${xe}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${W}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${w(R)} + ${k(R)} liens = <b style="color:#fff">${w(R)+k(R)}</b>
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
      ${y(M,r[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${y(q,r[n+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const b=(R,H)=>e.querySelectorAll(R).forEach((W,K)=>{setTimeout(()=>{W.style.opacity="1",W.style.transform="translateY(0) scale(1)"},H+K*90)});b(".duel-card-me",150),b(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((R,H)=>setTimeout(()=>{R.style.opacity="1"},H*70)),900),setTimeout(()=>{const R=e.querySelector("#pvp-vs");R&&(R.style.opacity="1",R.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(H=>H.style.opacity="1")},1250);function $(R,H,W){const K=document.getElementById(R);if(!K)return;const ee=performance.now(),ne=fe=>{const xe=Math.min(1,(fe-ee)/W);K.textContent=Math.round(H*(1-Math.pow(1-xe,3))),xe<1?requestAnimationFrame(ne):K.textContent=H};requestAnimationFrame(ne)}setTimeout(()=>{$("pvp-score-me",g,800),$("pvp-score-opp",m,800)},1500);const T=r.p1Team.MIL||[],_=r.p2Team.MIL||[],S=w(T)+k(T),L=w(_)+k(_),j=S>=L?"p1":"p2";let F=r.boostValue;F==null&&(F=ti(),r.boostValue=F,r.boostOwner=j,r.boostUsed=!1),pe=!0,setTimeout(()=>{const R=e.querySelector("#duel-row-"+(x?"me":"opp")),H=e.querySelector("#duel-row-"+(x?"opp":"me")),W=document.getElementById("pvp-score-me"),K=document.getElementById("pvp-score-opp"),ee=x?W:K,ne=x?K:W;ee&&(ee.style.fontSize="80px",ee.style.color=x?"#FFD700":"#ff6b6b",ee.style.animation="duelPulse .5s ease"+(x?",duelGlow 1.5s ease infinite .5s":"")),ne&&(ne.style.opacity="0.25"),setTimeout(()=>{R&&(R.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",R.style.zIndex="5"),setTimeout(()=>{const fe=document.getElementById("duel-shock");fe&&(fe.style.animation="shockwave .5s ease-out forwards"),H&&(H.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var ve;const fe=document.getElementById("pvp-duel-finale");if(!fe)return;const xe=r.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+F+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",he=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;fe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(x?"⚽ "+r[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[n+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+xe+he,fe.style.transition="opacity .45s ease",fe.style.opacity="1",fe.style.pointerEvents="auto",(ve=document.getElementById("pvp-start-match"))==null||ve.addEventListener("click",async()=>{const Ie=j;await G({phase:Ie+"-attack",attacker:Ie,round:1,boostValue:F,boostUsed:!1,boostOwner:Ie})})},600)},700)},2800)}function ze(M,q,w,k,g){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const x=Array.from({length:10},(T,_)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${_%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][_%8]}</div>`).join(""),y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};m.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${x}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${k?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${q} – ${w}
      </div>
      ${M!=null&&M.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${M.map(T=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${y[T.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${T.portrait?`<img src="${T.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(T.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(m);let b=!1;const $=()=>{b||(b=!0,m.remove(),setTimeout(()=>g(),50))};m.addEventListener("click",$),setTimeout($,3500)}function Te(M,q,w){var F,R;const k=(r.gcDefs||[]).find(H=>{var W;return H.name===M||((W=H.name)==null?void 0:W.toLowerCase().trim())===(M==null?void 0:M.toLowerCase().trim())}),g={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[k==null?void 0:k.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",m={purple:"#b06ce0",light_blue:"#00d4ef"}[k==null?void 0:k.color]||"#b06ce0",x=(k==null?void 0:k.name)||M,y=(k==null?void 0:k.effect)||((F=Ke[M])==null?void 0:F.desc)||"",b=k!=null&&k.image_url?`/manager-wars/icons/${k.image_url}`:null,$=((R=Ke[M])==null?void 0:R.icon)||"⚡",_=q===o?"Vous":r[q+"Name"]||"Adversaire",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",S.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${m}66}50%{box-shadow:0 0 60px ${m}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${m};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${_} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${m};background:${g};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${x.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${x}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${b?`<img src="${b}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${$}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${y}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(S);let L=!1;const j=()=>{L||(L=!0,S.remove(),setTimeout(()=>w&&w(),50))};S.addEventListener("click",j),setTimeout(j,3e3)}function we(M,q){var S,L,j,F;const k=(r["gcCardsFull_"+o]||[]).find(R=>R.id===M),g=k==null?void 0:k._gcDef,m={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[g==null?void 0:g.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[g==null?void 0:g.color]||"#b06ce0",y=(g==null?void 0:g.name)||q,b=(g==null?void 0:g.effect)||((S=Ke[q])==null?void 0:S.desc)||"Carte spéciale.",$=g!=null&&g.image_url?`/manager-wars/icons/${g.image_url}`:null,T=((L=Ke[q])==null?void 0:L.icon)||"⚡",_=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",_.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${x};background:${m};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${x}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${y.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${y}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${T}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${b}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(_),(j=_.querySelector("#pvp-gc-back"))==null||j.addEventListener("click",()=>_.remove()),(F=_.querySelector("#pvp-gc-use"))==null||F.addEventListener("click",()=>{_.remove(),P(M,q)})}function $e(){var k;const M=r[o+"Team"],q=Object.entries(M).flatMap(([g,m])=>(m||[]).filter(x=>!x.used).map(x=>({...x,_line:g})));if(!q.length)return;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",w.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${q.map(g=>{const m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[g._line]||"#555",x=Ae(g,g._line)+(g.boost||0);return`<div class="bp-item" data-cid="${g.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${m};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${g.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${x}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(w),(k=w.querySelector("#bp-close"))==null||k.addEventListener("click",()=>w.remove()),w.querySelectorAll(".bp-item").forEach(g=>{g.addEventListener("click",async()=>{const m=g.dataset.cid,x=q.find(b=>b.cardId===m);if(!x)return;const y=(M[x._line]||[]).find(b=>b.cardId===m);y&&(y.boost=(y.boost||0)+r.boostValue),w.remove(),await G({[o+"Team"]:M,boostUsed:!0})})})}function Ee(M=null){var L,j;if(!(r.phase===o+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const w=r[o+"Team"],k=r["usedSubIds_"+o]||[],g=r.maxSubs||3;if(k.length>=g){u(`Maximum ${g} remplacements atteint`,"warning");return}const m=Object.entries(w).flatMap(([F,R])=>(R||[]).filter(H=>H.used).map(H=>({...H,_line:F}))),x=(r[o+"Subs"]||[]).filter(F=>!k.includes(F.cardId));if(!m.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!x.length){u("Aucun remplaçant disponible","warning");return}let y=Math.max(0,m.findIndex(F=>F.cardId===M));const b=((L=m[y])==null?void 0:L._line)||((j=m[y])==null?void 0:j.job);let $=Math.max(0,x.findIndex(F=>F.job===b)),T=!1;const _=document.createElement("div");_.id="pvp-sub-overlay",_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function S(){var ne,fe,xe,he,ve,Ie;const F=m[y],R=x[$],H=Math.min(130,Math.round((window.innerWidth-90)/2)),W=Math.round(H*1.35),K=Le=>`background:rgba(255,255,255,0.12);border:none;color:${Le?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Le?"default":"pointer"};flex-shrink:0`;_.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${k.length}/${g})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${K($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${R?Ye({...R,used:!1,boost:0},H,W):"<div>—</div>"}</div>
          <button id="pin-down" style="${K($>=x.length-1)}" ${$>=x.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${x.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${K(y===0)}" ${y===0?"disabled":""}>▲</button>
          <div>${F?Ye({...F,used:!1,boost:0},H,W):"<div>—</div>"}</div>
          <button id="pout-down" style="${K(y>=m.length-1)}" ${y>=m.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${y+1}/${m.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ne=_.querySelector("#psub-close"))==null||ne.addEventListener("click",()=>_.remove()),(fe=_.querySelector("#pout-up"))==null||fe.addEventListener("click",()=>{y>0&&(y--,S())}),(xe=_.querySelector("#pout-down"))==null||xe.addEventListener("click",()=>{y<m.length-1&&(y++,S())}),(he=_.querySelector("#pin-up"))==null||he.addEventListener("click",()=>{$>0&&($--,S())}),(ve=_.querySelector("#pin-down"))==null||ve.addEventListener("click",()=>{$<x.length-1&&($++,S())});const ee=(Le,Re,je,Oe)=>{const Fe=_.querySelector("#"+Le);if(!Fe)return;let Ve=0;Fe.addEventListener("touchstart",Ne=>{Ve=Ne.touches[0].clientY},{passive:!0}),Fe.addEventListener("touchend",Ne=>{const He=Ne.changedTouches[0].clientY-Ve;if(Math.abs(He)<30)return;const Ue=Re();He<0&&Ue<Oe-1?(je(Ue+1),S()):He>0&&Ue>0&&(je(Ue-1),S())},{passive:!0})};ee("pin-panel",()=>$,Le=>$=Le,x.length),ee("pout-panel",()=>y,Le=>y=Le,m.length),(Ie=_.querySelector("#psub-confirm"))==null||Ie.addEventListener("click",async Le=>{if(Le.preventDefault(),Le.stopPropagation(),T)return;T=!0;const Re=m[y],je=x[$];if(!Re||!je)return;const Oe=Re._line,Fe=(w[Oe]||[]).findIndex(He=>He.cardId===Re.cardId);if(Fe===-1){u("Erreur : joueur introuvable","error"),_.remove();return}const Ve={...je,_line:Oe,position:Re.position,used:!1,boost:0};w[Oe].splice(Fe,1,Ve);const Ne=[...k,je.cardId];_.remove(),te(Re,je,async()=>{await G({[o+"Team"]:w,[n+"Team"]:r[n+"Team"],["usedSubIds_"+o]:Ne})})})}document.body.appendChild(_),S()}function te(M,q,w){const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const m=(b,$,T)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${T}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${k[b.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(b)?`<img src="${Pe(b)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(b.name||"").slice(0,12)}</div>
    </div>`;g.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${m(q,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${m(M,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(g);let x=!1;const y=()=>{x||(x=!0,g.remove(),setTimeout(()=>w(),50))};g.addEventListener("click",y),setTimeout(y,2200)}function re(){var q;const M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",M.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[n+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[n+"Team"],r[n+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(M),(q=M.querySelector("#pvp-opp-close"))==null||q.addEventListener("click",()=>M.remove())}function O(){var w;const M=r.log||[],q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",q.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${M.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...M].reverse().map(k=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${k.type==="goal"?"#FFD700":k.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${k.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(q),(w=q.querySelector("#pvp-hist-close"))==null||w.addEventListener("click",()=>q.remove())}async function Z(){if(r.phase!==o+"-attack")return;const M=o==="p1"?"p2":"p1",q=(r.round||0)+1,w=[...r.log||[]];w.push({type:"info",text:`⏭️ ${r[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const k=Ce(r),g=Se(M),m=k||!g?"finished":M+"-attack";await G({["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:m,attacker:M,round:q,log:w}),m==="finished"&&await qe(r)}async function ue(){const M=r[o+"Team"],q=!["GK","DEF","MIL","ATT"].some(m=>(r[n+"Team"][m]||[]).some(x=>!x.used)),w=(r["selected_"+o]||[]).map(m=>{const x=(M[m._role]||[]).find(S=>S.cardId===m.cardId)||m,y=q&&["GK","DEF"].includes(m._role),b=M[m._role]||[],$=b.findIndex(S=>S.cardId===m.cardId),T=lt(b.length),_=$>=0?T[$]:x._col??1;return{...x,_line:m._role,_col:_,...y?{note_a:Math.max(1,Number(x.note_a)||0)}:{}}});if(!w.length)return;const k=Nt(w,r.modifiers[o]||{});Y(o,w.map(m=>m.cardId)),w.forEach(m=>{const x=(M[m._role]||[]).find(y=>y.cardId===m.cardId);x&&(x.used=!0)}),r["selected_"+o]=[],B();const g=[...r.log||[]];if(q){const m=(r[o+"Score"]||0)+1,x=w.map(_=>({name:_.name,note:Ae(_,_._line||"ATT"),portrait:Pe(_),job:_.job}));g.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:x,homeTotal:k.total,aiTotal:0});const y=(r.round||0)+1,b=o==="p1"?"p2":"p1",$={...r,[o+"Team"]:M,[o+"Score"]:m},T=Ce($);C.add(y),ze(x,m,r[n+"Score"]||0,!0,async()=>{await G({[o+"Team"]:M,[o+"Score"]:m,["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:T?"finished":b+"-attack",attacker:b,round:y,log:g}),T&&await qe({...r,[o+"Score"]:m})});return}g.push({type:"pending",text:`⚔️ ${r[o+"Name"]} attaque (${k.total})`}),await G({[o+"Team"]:M,[n+"Team"]:r[n+"Team"],pendingAttack:{...k,players:w,side:o},["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},phase:n+"-defense",log:g})}async function me(){const M=r[o+"Team"],q=(r["selected_"+o]||[]).map(F=>{const R=(M[F._role]||[]).find(ne=>ne.cardId===F.cardId)||F,H=M[F._role]||[],W=H.findIndex(ne=>ne.cardId===F.cardId),K=lt(H.length),ee=W>=0?K[W]:R._col??1;return{...R,_line:F._role,_col:ee}}),w=Rt(q,r.modifiers[o]||{});Y(o,q.map(F=>F.cardId)),q.forEach(F=>{const R=(M[F._role]||[]).find(H=>H.cardId===F.cardId);R&&(R.used=!0)}),r["selected_"+o]=[],B();const k=Ot(r.pendingAttack.total,w.total,r.modifiers[o]||{}),g=r.pendingAttack.side,m=k==="attack"||(k==null?void 0:k.goal),x=g==="p1"?"p2":"p1",y=(r.round||0)+1,b=(r.pendingAttack.players||[]).map(F=>({name:F.name,note:Ae(F,F._line||"ATT"),portrait:Pe(F),job:F.job})),$=[...r.log||[]];$.push({type:"duel",isGoal:m,homeScored:m&&g===o,text:m?`⚽ BUT de ${r[g+"Name"]} ! (${r.pendingAttack.total} vs ${w.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${w.total})`,homePlayers:b,aiPlayers:q.map(F=>({name:F.name,note:Ae(F,F._line||"DEF"),portrait:Pe(F),job:F.job})),homeTotal:r.pendingAttack.total,aiTotal:w.total});const T=m?(r[g+"Score"]||0)+1:r[g+"Score"]||0,_={...r,[o+"Team"]:M,[g+"Score"]:T},S=Ce(_),L=S?"finished":x+"-attack",j=async()=>{await G({[o+"Team"]:M,[n+"Team"]:r[n+"Team"],[g+"Score"]:T,["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:L,attacker:x,round:y,log:$}),(L==="finished"||S)&&await qe({...r,[g+"Score"]:T})};if(m){const F=g===o,R=F?T:r[o+"Score"]||0,H=F?r[n+"Score"]||0:T;C.add(y),ze(b,R,H,F,j)}else await j()}function X(M){return["MIL","ATT"].some(q=>(M[q]||[]).some(w=>!w.used))}function be(M){return["GK","DEF","MIL","ATT"].some(q=>(M[q]||[]).some(w=>!w.used))}function ge(M){return be(M)&&!X(M)}function Se(M){const q=r[M+"Team"],w=r[(M==="p1"?"p2":"p1")+"Team"];return!!(X(q)||!be(w)&&ge(q))}function Ce(M){const q=["MIL","ATT"].some($=>(M.p1Team[$]||[]).some(T=>!T.used)),w=["MIL","ATT"].some($=>(M.p2Team[$]||[]).some(T=>!T.used)),k=be(M.p1Team),g=be(M.p2Team);return!q&&!(!g&&k)&&(!w&&!(!k&&g))}function Be(M){const q=M.p1Score||0,w=M.p2Score||0;return q===w?null:q>w?v.home_id:v.away_id}async function qe(M){try{const q=Be(M),w=q?v.home_id===q?v.away_id:v.home_id:null;await E.from("matches").update({status:"finished",winner_id:q,home_score:M.p1Score||0,away_score:M.p2Score||0}).eq("id",i),q&&w&&updateEvolutiveCards(q,w).catch(()=>{})}catch(q){console.error("[PvP] finishMatch:",q)}}function De(){var g;const M=r[o+"Score"],q=r[n+"Score"],w=M>q,k=M===q;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${w?"🏆":k?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${w?"Victoire !":k?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${M} - ${q}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(g=document.getElementById("pvp-home"))==null||g.addEventListener("click",()=>{try{E.removeChannel(N)}catch{}We(e),d("home")})}B()}const Uo=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:wn,resumePvpMatch:Ho},Symbol.toStringTag,{value:"Module"}));async function Vo(e,t,i,a){var c,l;try{const s=(l=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:l.id;try{(E.getChannels?E.getChannels():[]).forEach(u=>{const o=u.topic||"";(o.includes("matchmaking")||o.includes("pvp-match"))&&E.removeChannel(u)})}catch(d){console.warn("[FriendMatch] cleanup canaux:",d)}s&&(await E.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await E.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await ni(e,t,"random",({deckId:s,formation:d,starters:u,subsRaw:o,gcCardsEnriched:n,gcDefs:f,stadiumDef:h})=>{const v=A=>Ko(e,t,s,d,u,o,A,f||[],i,a);if(!n.length){v([]);return}ii(e,n,v)})}async function Ko(e,t,i,a,c,l,s=[],d=[],u,o){var se;const{state:n,navigate:f,toast:h}=t,v=n.profile.id;let A=!1,r=null;et(e);try{await E.rpc("cancel_matchmaking",{p_user_id:v})}catch{}try{await E.from("matchmaking_queue").delete().eq("user_id",v)}catch{}const p=(de,P,Y,V)=>{var B;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">⚽ Match ami</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">vs ${o}</div>
        <div style="display:flex;gap:24px;align-items:center">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:#1A6B3C;display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid #22c55e">
              ✅
            </div>
            <div style="font-size:12px;font-weight:700">${n.profile.club_name||n.profile.pseudo}</div>
            <div style="font-size:11px;color:#22c55e">Prêt</div>
          </div>
          <div style="font-size:28px;font-weight:900;color:#FFD700">VS</div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:${P?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${P?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${P?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${o}</div>
            <div style="font-size:11px;color:${P?"#22c55e":"#aaa"}">${P?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!P&&de?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(B=document.getElementById("lobby-cancel"))==null||B.addEventListener("click",async()=>{A=!0,r&&(E.removeChannel(r),r=null),Y&&await E.from("friend_match_invites").update({status:"declined"}).eq("id",Y),We(e),f("home")})},I=async(de,P)=>{A=!0,r&&(E.removeChannel(r),r=null),await new Promise(Y=>setTimeout(Y,600)),e.isConnected&&Yo(e,t,de,P,s,d)},{data:z}=await E.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${v},invitee_id.eq.${u}),and(inviter_id.eq.${u},invitee_id.eq.${v})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let C,U;if(z&&z.inviter_id===u)U=!1,C=z.id,await E.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",C);else{U=!0;const{data:de,error:P}=await E.from("friend_match_invites").insert({inviter_id:v,invitee_id:u,friend_id:u,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(P||!de){h("Erreur création invitation","error"),We(e),f("home");return}C=de.id}if(p(!0,!U,C),!U){const de={home_id:u,away_id:v,home_deck_id:z.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},P=await E.from("matches").insert(de).select().single(),Y=P.data;if(!Y){h("Erreur création match: "+(((se=P.error)==null?void 0:se.message)||""),"error"),We(e),f("home");return}await E.from("friend_match_invites").update({match_id:Y.id,status:"matched"}).eq("id",C),I(Y.id,!1);return}let D=!1;const N=de=>{A||D||(de.status==="matched"&&de.match_id?(D=!0,clearInterval(G),clearInterval(ie),I(de.match_id,!0)):de.status==="declined"?(clearInterval(G),clearInterval(ie),h(`${o} a décliné l'invitation`,"warning"),We(e),f("home")):de.invitee_ready&&p(!0,!0,C))},G=setInterval(()=>{if(A){clearInterval(G);return}E.from("matchmaking_queue").delete().eq("user_id",v).then(()=>{},()=>{})},3e3),ie=setInterval(async()=>{if(A||D){clearInterval(ie);return}const{data:de}=await E.from("friend_match_invites").select("*").eq("id",C).maybeSingle();de&&N(de)},1200);r=E.channel("friend-invite-"+C).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${C}`},de=>N(de.new)).subscribe()}async function Yo(e,t,i,a,c=[],l=[]){const{state:s,navigate:d,toast:u}=t,o=a?"p1":"p2",n=a?"p2":"p1",f=(c||[]).map(w=>w.id),h=(c||[]).map(w=>({id:w.id,gc_type:w.gc_type,_gcDef:w._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:v}=await E.from("matches").select("*").eq("id",i).single();if(!v){u("Match introuvable","error"),d("home");return}async function A(){const[{data:w},{data:k},{data:g},{data:m}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:v.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:v.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",v.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",v.away_id).single()]),x=_=>({cardId:_.card_id,position:_.position,id:_.id,firstname:_.firstname,name:_.surname_encoded,country_code:_.country_code,club_id:_.club_id,job:_.job,job2:_.job2,note_g:Number(_.note_g)||0,note_d:Number(_.note_d)||0,note_m:Number(_.note_m)||0,note_a:Number(_.note_a)||0,rarity:_.rarity,skin:_.skin,hair:_.hair,hair_length:_.hair_length,clubName:_.club_encoded_name||null,clubLogo:_.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),y=((w==null?void 0:w.starters)||[]).map(_=>x(_)),b=((k==null?void 0:k.starters)||[]).map(_=>x(_)),$=(w==null?void 0:w.formation)||"4-4-2",T=(k==null?void 0:k.formation)||"4-4-2";return{p1Team:yt(y,$),p2Team:yt(b,T),p1Subs:((w==null?void 0:w.subs)||[]).map(_=>x(_)),p2Subs:((k==null?void 0:k.subs)||[]).map(_=>x(_)),p1Formation:$,p2Formation:T,p1Name:(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"Joueur 1",p2Name:(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?h:[],gcCardsFull_p2:a?[]:h,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let r=v.game_state&&Object.keys(v.game_state).length?v.game_state:null;if(!r)if(a){r=await A();const{data:w}=await E.from("matches").select("game_state").eq("id",i).single();!(w!=null&&w.game_state)||!Object.keys(w.game_state).length?await E.from("matches").update({game_state:r,turn_user_id:v.home_id}).eq("id",i):r=w.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let w=0;w<60&&!r;w++){await new Promise(g=>setTimeout(g,400));const{data:k}=await E.from("matches").select("game_state").eq("id",i).single();k!=null&&k.game_state&&Object.keys(k.game_state).length&&(r=k.game_state)}if(!r){u("Erreur de synchronisation","error"),d("home");return}r.gc_p2=f,r.gcCardsFull_p2=h,await E.from("matches").update({game_state:r}).eq("id",i)}let p=!1,I=!1,z=!1,C=null,U=!1;const D=new Set,N=new Set;function G(w){var _,S;try{E.removeChannel(ie)}catch{}const k=r[o+"Score"]||0,g=r[n+"Score"]||0;if(!z){z=!0;const L=w.winner_id||(k>g?s.profile.id:g>k?"opp":null),j=L===s.profile.id?"win":L?"loss":null;j&&yi(()=>Promise.resolve().then(()=>on),void 0).then(F=>F.applyOwnEvolution(s.profile.id,j)).catch(()=>{})}if(!I){const L=r.p1Score||0,j=r.p2Score||0,F=(r.usedGc_p1||[]).length,R=(r.usedGc_p2||[]).length,H=w.winner_id||(L>j?v.home_id:j>L?v.away_id:null);(H?s.profile.id===H:s.profile.id<(a?v.away_id:v.home_id))&&(I=!0,Xi({player1Id:v.home_id,player2Id:v.away_id,score1:L,score2:j,gc1:F,gc2:R}).catch(K=>console.warn("[FriendMatch] updateStats:",K)))}let m,x;w.winner_id?(m=w.winner_id===s.profile.id,x=!1):w.forfeit?(m=k>g,x=!1):(x=k===g,m=k>g),(_=document.getElementById("pvp-end-overlay"))==null||_.remove();const y=document.createElement("div");y.id="pvp-end-overlay",y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const b=x?"🤝":m?"🏆":"😞",$=x?"MATCH NUL":m?"VICTOIRE !":"DÉFAITE",T=x?"#fff":m?"#FFD700":"#ff6b6b";y.innerHTML=`
      <div style="font-size:64px">${b}</div>
      <div style="font-size:26px;font-weight:900;color:${T}">${$}</div>
      <div style="font-size:18px">${r[o+"Name"]} ${k} – ${g} ${r[n+"Name"]}</div>
      ${w.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${m?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(y),(S=y.querySelector("#pvp-end-home"))==null||S.addEventListener("click",()=>{y.remove(),We(e),d("home")})}const ie=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},w=>{const k=w.new;try{if(k.status==="finished"||k.forfeit){if(p)return;p=!0,C&&(clearInterval(C),C=null),k.game_state&&(r=k.game_state),G(k);return}if(k.game_state){const g=r;r=k.game_state;const m=r._lastGC;if(m&&m.seq&&!N.has(m.seq)&&(N.add(m.seq),m.by!==o)){$e(m.type,m.by,()=>pe());return}const x=g[o+"Score"]||0,y=g[n+"Score"]||0,b=r[o+"Score"]||0,$=r[n+"Score"]||0,T=b>x,_=$>y;if((T||_)&&!D.has(r.round)){D.add(r.round);const S=[...r.log||[]].reverse().find(j=>j.isGoal),L=((S==null?void 0:S.homePlayers)||[]).map(j=>({name:j.name,note:j.note,portrait:j.portrait,job:j.job}));we(L,b,$,T,()=>pe());return}pe()}}catch(g){console.error("[PvP] crash:",g)}}).subscribe();async function se(w){Object.assign(r,w),r.lastActionAt=new Date().toISOString();const{error:k}=await E.from("matches").update({game_state:r}).eq("id",i);k&&u("Erreur de synchronisation","error");try{pe()}catch(g){console.error("[PvP] renderPvpScreen crash:",g)}}async function de(){if(p)return;p=!0,C&&(clearInterval(C),C=null);const w=a?v.away_id:v.home_id,k=a?"p2":"p1",g=a?"p1":"p2",m={...r,[k+"Score"]:3,[g+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:w,home_score:m.p1Score||0,away_score:m.p2Score||0,game_state:m}).eq("id",i)}catch{}try{E.removeChannel(ie)}catch{}setTimeout(()=>{We(e),d("home")},800)}const P={BOOST_STAT:({value:w=1,count:k=1,roles:g=[]},m,x)=>{const y=m[o+"Team"],b=Object.entries(y).filter(([$])=>!g.length||g.includes($)).flatMap(([$,T])=>T.filter(_=>!_.used).map(_=>({..._,_line:$})));if(!b.length){m.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),x(m);return}Y(b,k,`Choisir ${k} joueur(s) à booster (+${w})`,$=>{$.forEach(T=>{const _=(y[T._line]||[]).find(S=>S.cardId===T.cardId);_&&(_.boost=(_.boost||0)+w,m.log.push({text:`⚡ +${w} sur ${_.name}`,type:"info"}))}),m[o+"Team"]=y,x(m)})},DEBUFF_STAT:({value:w=1,count:k=1,roles:g=[],target:m="ai"},x,y)=>{const b=m==="home"?o:n,$=x[b+"Team"],T=m==="home"?"allié":"adverse",_=Object.entries($).filter(([S])=>!g.length||g.includes(S)).flatMap(([S,L])=>L.map(j=>({...j,_line:S})));if(!_.length){x.log.push({text:`🎯 Aucun joueur ${T}`,type:"info"}),y(x);return}Y(_,k,`Choisir ${k} joueur(s) ${T}(s) (-${w})`,S=>{S.forEach(L=>{const j=($[L._line]||[]).find(F=>F.cardId===L.cardId);j&&(j.boost=(j.boost||0)-w,x.log.push({text:`🎯 -${w} sur ${j.name}`,type:"info"}))}),x[b+"Team"]=$,y(x)})},GRAY_PLAYER:({count:w=1,roles:k=[],target:g="ai"},m,x)=>{const y=g==="home"?o:n,b=m[y+"Team"],$=g==="home"?"allié":"adverse",T=Object.entries(b).filter(([_])=>!k.length||k.includes(_)).flatMap(([_,S])=>S.filter(L=>!L.used).map(L=>({...L,_line:_})));if(!T.length){m.log.push({text:`❌ Aucun joueur ${$}`,type:"info"}),x(m);return}Y(T,w,`Choisir ${w} joueur(s) ${$}(s) à exclure`,_=>{const S="usedCardIds_"+y,L=new Set(m[S]||[]);_.forEach(j=>{const F=(b[j._line]||[]).find(R=>R.cardId===j.cardId);F&&(F.used=!0,L.add(j.cardId),m.log.push({text:`❌ ${F.name} exclu !`,type:"info"}))}),m[S]=[...L],m[y+"Team"]=b,x(m)})},REVIVE_PLAYER:({count:w=1,roles:k=[]},g,m)=>{const x=g[o+"Team"],y=Object.entries(x).filter(([b])=>!k.length||k.includes(b)).flatMap(([b,$])=>$.filter(T=>T.used).map(T=>({...T,_line:b})));if(!y.length){g.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),m(g);return}Y(y,w,`Choisir ${w} joueur(s) à ressusciter`,b=>{b.forEach($=>{const T=(x[$._line]||[]).find(_=>_.cardId===$.cardId);T&&(T.used=!1,g.log.push({text:`💫 ${T.name} ressuscité !`,type:"info"}))}),g[o+"Team"]=x,m(g)})},REMOVE_GOAL:({},w,k)=>{const g=n+"Score";w[g]>0?(w[g]--,w.log.push({text:"🚫 Dernier but annulé !",type:"info"})):w.log.push({text:"🚫 Aucun but à annuler",type:"info"}),k(w)},ADD_GOAL_DRAW:({},w,k)=>{w[o+"Score"]===w[n+"Score"]?(w[o+"Score"]++,w.log.push({text:"🎯 But bonus !",type:"info"})):w.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),k(w)},ADD_SUB:({value:w=1},k,g)=>{k.maxSubs=(k.maxSubs||3)+w,k.log.push({text:`🔄 +${w} remplacement(s)`,type:"info"}),g(k)},CUSTOM:({},w,k)=>k(w)};function Y(w,k,g,m){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let y=[];function b(){var T,_;const $=w.map(S=>{const L={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[S._line]||"#555",j=Ae(S,S._line)+(S.boost||0),R=y.find(W=>W.cardId===S.cardId)?"#FFD700":"rgba(255,255,255,0.25)",H=S.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${S.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${R};background:${L};overflow:hidden;cursor:pointer;${H}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${S.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${j}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${S._line}</div>
        </div>`}).join("");x.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${g}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${y.length}/${k}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${$}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${y.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${y.length}/${k})
          </button>
        </div>`,(T=x.querySelector("#pp-close"))==null||T.addEventListener("click",()=>x.remove()),x.querySelectorAll(".pp-item").forEach(S=>{S.addEventListener("click",()=>{const L=S.dataset.cid,j=w.find(R=>R.cardId===L),F=y.findIndex(R=>R.cardId===L);j&&(F>-1?y.splice(F,1):y.length<k&&y.push(j),b())})}),(_=x.querySelector("#pp-confirm"))==null||_.addEventListener("click",()=>{x.remove(),m(y)})}b(),document.body.appendChild(x)}async function V(w,k){const m=(r["gcCardsFull_"+o]||[]).find($=>$.id===w),x=(m==null?void 0:m._gcDef)||(r.gcDefs||[]).find($=>{var T;return $.name===k||((T=$.name)==null?void 0:T.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),y=[...r["usedGc_"+o]||[],w],b={type:k,by:o,seq:(r._gcAnimSeq||0)+1};N.add(b.seq),$e(k,o,async()=>{if(x!=null&&x.effect_type&&x.effect_type!=="CUSTOM"){const T=P[x.effect_type];if(T){const _={...r};T(x.effect_params||{},_,async S=>{S["usedGc_"+o]=y,S._lastGC=b,S._gcAnimSeq=b.seq,await se(S)});return}}const $={...r};switch(k){case"Remplacement+":$.maxSubs=($.maxSubs||3)+1,$.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const T=n+"Score";$[T]>0&&($[T]--,$.log.push({text:"🚫 But annulé",type:"info"}));break}}$["usedGc_"+o]=y,$._lastGC=b,$._gcAnimSeq=b.seq,await se($)})}function B(w,k){const g="usedCardIds_"+w,m=new Set(r[g]||[]);k.forEach(x=>m.add(x)),r[g]=[...m]}function oe(){for(const w of["p1","p2"]){const k=new Set(r["usedCardIds_"+w]||[]),g=r[w+"Team"];if(g)for(const m of["GK","DEF","MIL","ATT"])(g[m]||[]).forEach(x=>{x.used=k.has(x.cardId)})}}function pe(){var Ze,Qe,ot,gt,ae,_e;if(r.phase==="reveal")return ye();if(r.phase==="midfield")return Te();if(r.phase==="finished")return q();const w=r[o+"Team"],k=r[n+"Team"];oe();const g=r[o+"Score"],m=r[n+"Score"],x=r[o+"Name"],y=r[n+"Name"],b=r.phase===o+"-attack",$=r.phase===o+"-defense",T=Array.isArray(r["selected_"+o])?r["selected_"+o]:[],_=T.map(Q=>Q.cardId),S=window.innerWidth>=700,L=r[o+"Subs"]||[],j=r["usedSubIds_"+o]||[],F=L.filter(Q=>!j.includes(Q.cardId)),R=r["gcCardsFull_"+o]||[],H=r["usedGc_"+o]||[],W=R.filter(Q=>!H.includes(Q.id)),K=r.boostOwner===o&&!r.boostUsed,ee=!["GK","DEF","MIL","ATT"].some(Q=>(k[Q]||[]).some(ce=>!ce.used)),ne=[...w.MIL||[],...w.ATT||[]].filter(Q=>!Q.used),fe=b&&ee&&ne.length===0?[...w.GK||[],...w.DEF||[]].filter(Q=>!Q.used).map(Q=>Q.cardId):[];function xe(Q,ce,J){var kt,Ht;const le=Q._gcDef,Me={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[le==null?void 0:le.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ke={purple:"#b06ce0",light_blue:"#00d4ef"}[le==null?void 0:le.color]||"#b06ce0",tt=(le==null?void 0:le.name)||Q.gc_type,it=(le==null?void 0:le.effect)||((kt=Ke[Q.gc_type])==null?void 0:kt.desc)||"",rt=le!=null&&le.image_url?`/manager-wars/icons/${le.image_url}`:null,st=((Ht=Ke[Q.gc_type])==null?void 0:Ht.icon)||"⚡",ct=Math.round(J*.22),$t=Math.round(J*.22),pt=J-ct-$t,ht=tt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${Q.id}" data-gc-type="${Q.gc_type}"
        style="box-sizing:border-box;width:${ce}px;height:${J}px;border-radius:10px;border:2px solid ${ke};background:${Me};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${ct}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${ht}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ce-6}px">${tt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${pt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${rt?`<img src="${rt}" style="max-width:${ce-10}px;max-height:${pt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(pt*.55)}px">${st}</span>`}
        </div>
        <div style="height:${$t}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${it.slice(0,38)}</span>
        </div>
      </div>`}function he(Q,ce){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${Q}px;height:${ce}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ce*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ce*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ce*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const ve=(Q,ce)=>ce?he(130,175):xe(Q,130,175),Ie=(Q,ce)=>ce?he(68,95):xe(Q,68,95),Le=S?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Re=b?Be(o)?`<button id="pvp-action" style="${Le};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${T.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Le};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:$?`<button id="pvp-action" style="${Le};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${T.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${y}</div>`,je=b&&!Be(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':b||$?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${T.length}/3 sélectionné(s)</div>`:"",Oe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${S?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${F.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':F.map(Q=>`<div class="pvp-sub-btn" data-sub-id="${Q.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(Q,S?76:44,S?100:58)}</div>`).join("")}
    </div>`,Fe=b?"attack":$?"defense":"idle",Ve=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(w,r[o+"Formation"],Fe,_,300,300,fe)}
      </div>
    </div>`;function Ne(Q){if(Q.type==="duel"&&(Q.homeTotal!=null||Q.aiTotal!=null)){const ce=(Q.homeTotal||0)>=(Q.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(Q.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Q.homePlayers||[]).map(J=>dt(J)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${ce?20:14}px;font-weight:900;color:${ce?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${Q.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${ce?14:20}px;font-weight:900;color:${ce?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${Q.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Q.aiPlayers||[]).map(J=>dt(J)).join("")}
            </div>
          </div>
          ${Q.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${Q.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${Q.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${Q.type==="goal"?700:400};padding:3px 2px">${Q.text||""}</div>`}const He=(()=>{var ce,J;if($&&((ce=r.pendingAttack)!=null&&ce.players)){const le=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${y} ATTAQUE — Défendez !</div>
          ${nt((le.players||[]).map(Me=>({...Me,used:!1})),"#ff6b6b",le.total)}
        </div>`}if(b&&((J=r.pendingAttack)!=null&&J.players)){const le=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${nt((le.players||[]).map(Me=>({...Me,used:!1})),"#00ff88",le.total)}
        </div>`}const Q=(r.log||[]).slice(-1)[0];return Q?'<div style="padding:2px 4px">'+Ne(Q)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ue=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${g} – ${m}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${y}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${He}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(r.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",S?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ue}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Oe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ve}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Re}${je}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${W.map(Q=>ve(Q,!1)).join("")}
            ${K?ve(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ue}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(w,r[o+"Formation"],Fe,_,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${W.map(Q=>Ie(Q,!1)).join("")}
            ${K?Ie(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${b&&F.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${b&&F.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${b&&F.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${b&&F.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${F.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(r["usedSubIds_"+o]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(r["usedSubIds_"+o]||[]).length}/${r.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Re}${je}</div>
        </div>
      </div>`;function Je(){const Q=e.querySelector(".match-screen");if(!Q)return;const ce=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);Q.style.height=ce+"px",Q.style.minHeight=ce+"px",Q.style.maxHeight=ce+"px",Q.style.overflow="hidden";const J=e.querySelector("#mobile-action-bar"),le=e.querySelector("#mobile-play-area");J&&le&&(le.style.paddingBottom=J.offsetHeight+"px")}if(Je(),setTimeout(Je,120),setTimeout(Je,400),U||(U=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Je),window.visualViewport.addEventListener("scroll",Je)),window.addEventListener("resize",Je)),function(){const ce=e.querySelector(".terrain-wrapper svg");ce&&(ce.removeAttribute("width"),ce.removeAttribute("height"),ce.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ce.setAttribute("viewBox","-26 -26 352 352"),ce.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(Q=>{Q.addEventListener("click",()=>{if(!b&&!$)return;const ce=Q.dataset.cardId,J=Q.dataset.role,le=(w[J]||[]).find(it=>it.cardId===ce);if(!le||le.used)return;const Me=fe.includes(ce);if(b&&!["MIL","ATT"].includes(J)&&!Me)return;Array.isArray(r["selected_"+o])||(r["selected_"+o]=[]);const ke=r["selected_"+o],tt=ke.findIndex(it=>it.cardId===ce);tt>-1?ke.splice(tt,1):ke.length<3&&ke.push({...le,_role:J}),pe()})}),e.querySelectorAll(".match-used-hit").forEach(Q=>{Q.addEventListener("click",()=>re(Q.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(Q=>{Q.addEventListener("click",()=>re())}),(Ze=e.querySelector("#pvp-sub-open"))==null||Ze.addEventListener("click",()=>re()),e.querySelectorAll(".pvp-gc-mini").forEach(Q=>{Q.addEventListener("click",()=>Ee(Q.dataset.gcId,Q.dataset.gcType))}),(Qe=e.querySelector("#pvp-boost-card"))==null||Qe.addEventListener("click",()=>te()),(ot=e.querySelector("#pvp-action"))==null||ot.addEventListener("click",Q=>{b?Q.currentTarget.dataset.pass==="1"||!Be(o)?me():X():$&&be()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&de()}),(ae=e.querySelector("#pvp-view-opp"))==null||ae.addEventListener("click",()=>Z()),(_e=e.querySelector("#pvp-toggle-history"))==null||_e.addEventListener("click",()=>ue()),C&&(clearInterval(C),C=null),(b||$)&&!p){let Q=30,ce=!1;const J=()=>document.getElementById("pvp-timer"),le=()=>{J()&&(J().textContent=Q+"s",J().style.color=ce?"#ff4444":"#fff")};le(),C=setInterval(()=>{Q--,Q<0?ce?(clearInterval(C),C=null,b&&!Be(o)?me():de()):(ce=!0,Q=15,le()):le()},1e3)}}function ye(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[n+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[n+"Team"],r[n+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await se({phase:"midfield"})},5e3)}let ze=!1;function Te(){if(ze)return;const w=r[o+"Team"].MIL||[],k=r[n+"Team"].MIL||[];function g(W){return W.reduce((K,ee)=>K+Ae(ee,"MIL"),0)}function m(W){let K=0;for(let ee=0;ee<W.length-1;ee++){const ne=at(W[ee],W[ee+1]);ne==="#00ff88"?K+=2:ne==="#FFD700"&&(K+=1)}return K}const x=g(w)+m(w),y=g(k)+m(k),b=x>=y;function $(W,K,ee){return`<div id="duel-row-${ee}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${K}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${W.map((ne,fe)=>{const xe=fe<W.length-1?at(ne,W[fe+1]):null,he=!xe||xe==="#ff3333"||xe==="#cc2222",ve=xe==="#00ff88"?"+2":xe==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ee}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...ne,note:Ae(ne,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<W.length-1?`<div class="duel-link duel-link-${ee}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${he?"rgba(255,255,255,0.12)":xe};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${he?"none":`0 0 8px ${xe}`}">
              ${ve?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${xe}">${ve}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ee}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${g(W)} + ${m(W)} liens = <b style="color:#fff">${g(W)+m(W)}</b>
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
      ${$(w,r[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${$(k,r[n+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const T=(W,K)=>e.querySelectorAll(W).forEach((ee,ne)=>{setTimeout(()=>{ee.style.opacity="1",ee.style.transform="translateY(0) scale(1)"},K+ne*90)});T(".duel-card-me",150),T(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((W,K)=>setTimeout(()=>{W.style.opacity="1"},K*70)),900),setTimeout(()=>{const W=e.querySelector("#pvp-vs");W&&(W.style.opacity="1",W.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(K=>K.style.opacity="1")},1250);function _(W,K,ee){const ne=document.getElementById(W);if(!ne)return;const fe=performance.now(),xe=he=>{const ve=Math.min(1,(he-fe)/ee);ne.textContent=Math.round(K*(1-Math.pow(1-ve,3))),ve<1?requestAnimationFrame(xe):ne.textContent=K};requestAnimationFrame(xe)}setTimeout(()=>{_("pvp-score-me",x,800),_("pvp-score-opp",y,800)},1500);const S=r.p1Team.MIL||[],L=r.p2Team.MIL||[],j=g(S)+m(S),F=g(L)+m(L),R=j>=F?"p1":"p2";let H=r.boostValue;H==null&&(H=ti(),r.boostValue=H,r.boostOwner=R,r.boostUsed=!1),ze=!0,setTimeout(()=>{const W=e.querySelector("#duel-row-"+(b?"me":"opp")),K=e.querySelector("#duel-row-"+(b?"opp":"me")),ee=document.getElementById("pvp-score-me"),ne=document.getElementById("pvp-score-opp"),fe=b?ee:ne,xe=b?ne:ee;fe&&(fe.style.fontSize="80px",fe.style.color=b?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(b?",duelGlow 1.5s ease infinite .5s":"")),xe&&(xe.style.opacity="0.25"),setTimeout(()=>{W&&(W.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",W.style.zIndex="5"),setTimeout(()=>{const he=document.getElementById("duel-shock");he&&(he.style.animation="shockwave .5s ease-out forwards"),K&&(K.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Le;const he=document.getElementById("pvp-duel-finale");if(!he)return;const ve=r.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+H+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ie=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;he.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(b?"⚽ "+r[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[n+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ve+Ie,he.style.transition="opacity .45s ease",he.style.opacity="1",he.style.pointerEvents="auto",(Le=document.getElementById("pvp-start-match"))==null||Le.addEventListener("click",async()=>{const Re=R;await se({phase:Re+"-attack",attacker:Re,round:1,boostValue:H,boostUsed:!1,boostOwner:Re})})},600)},700)},2800)}function we(w,k,g,m,x){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const b=Array.from({length:10},(S,L)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${L%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][L%8]}</div>`).join(""),$={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};y.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${b}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${m?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${k} – ${g}
      </div>
      ${w!=null&&w.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${w.map(S=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${$[S.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${S.portrait?`<img src="${S.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(S.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(y);let T=!1;const _=()=>{T||(T=!0,y.remove(),setTimeout(()=>x(),50))};y.addEventListener("click",_),setTimeout(_,3500)}function $e(w,k,g){var H,W;const m=(r.gcDefs||[]).find(K=>{var ee;return K.name===w||((ee=K.name)==null?void 0:ee.toLowerCase().trim())===(w==null?void 0:w.toLowerCase().trim())}),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[m==null?void 0:m.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",y={purple:"#b06ce0",light_blue:"#00d4ef"}[m==null?void 0:m.color]||"#b06ce0",b=(m==null?void 0:m.name)||w,$=(m==null?void 0:m.effect)||((H=Ke[w])==null?void 0:H.desc)||"",T=m!=null&&m.image_url?`/manager-wars/icons/${m.image_url}`:null,_=((W=Ke[w])==null?void 0:W.icon)||"⚡",L=k===o?"Vous":r[k+"Name"]||"Adversaire",j=document.createElement("div");j.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",j.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${y}66}50%{box-shadow:0 0 60px ${y}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${y};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${L} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${y};background:${x};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${b.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${b}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${T?`<img src="${T}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${_}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${$}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(j);let F=!1;const R=()=>{F||(F=!0,j.remove(),setTimeout(()=>g&&g(),50))};j.addEventListener("click",R),setTimeout(R,3e3)}function Ee(w,k){var j,F,R,H;const m=(r["gcCardsFull_"+o]||[]).find(W=>W.id===w),x=m==null?void 0:m._gcDef,y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",b={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",$=(x==null?void 0:x.name)||k,T=(x==null?void 0:x.effect)||((j=Ke[k])==null?void 0:j.desc)||"Carte spéciale.",_=x!=null&&x.image_url?`/manager-wars/icons/${x.image_url}`:null,S=((F=Ke[k])==null?void 0:F.icon)||"⚡",L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",L.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${b};background:${y};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${b}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${$.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${$}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${_?`<img src="${_}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${S}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${T}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(L),(R=L.querySelector("#pvp-gc-back"))==null||R.addEventListener("click",()=>L.remove()),(H=L.querySelector("#pvp-gc-use"))==null||H.addEventListener("click",()=>{L.remove(),V(w,k)})}function te(){var m;const w=r[o+"Team"],k=Object.entries(w).flatMap(([x,y])=>(y||[]).filter(b=>!b.used).map(b=>({...b,_line:x})));if(!k.length)return;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",g.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${k.map(x=>{const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x._line]||"#555",b=Ae(x,x._line)+(x.boost||0);return`<div class="bp-item" data-cid="${x.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${y};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${b}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(g),(m=g.querySelector("#bp-close"))==null||m.addEventListener("click",()=>g.remove()),g.querySelectorAll(".bp-item").forEach(x=>{x.addEventListener("click",async()=>{const y=x.dataset.cid,b=k.find(T=>T.cardId===y);if(!b)return;const $=(w[b._line]||[]).find(T=>T.cardId===y);$&&($.boost=($.boost||0)+r.boostValue),g.remove(),await se({[o+"Team"]:w,boostUsed:!0})})})}function re(w=null){var F,R;if(!(r.phase===o+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const g=r[o+"Team"],m=r["usedSubIds_"+o]||[],x=r.maxSubs||3;if(m.length>=x){u(`Maximum ${x} remplacements atteint`,"warning");return}const y=Object.entries(g).flatMap(([H,W])=>(W||[]).filter(K=>K.used).map(K=>({...K,_line:H}))),b=(r[o+"Subs"]||[]).filter(H=>!m.includes(H.cardId));if(!y.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!b.length){u("Aucun remplaçant disponible","warning");return}let $=Math.max(0,y.findIndex(H=>H.cardId===w));const T=((F=y[$])==null?void 0:F._line)||((R=y[$])==null?void 0:R.job);let _=Math.max(0,b.findIndex(H=>H.job===T)),S=!1;const L=document.createElement("div");L.id="pvp-sub-overlay",L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function j(){var xe,he,ve,Ie,Le,Re;const H=y[$],W=b[_],K=Math.min(130,Math.round((window.innerWidth-90)/2)),ee=Math.round(K*1.35),ne=je=>`background:rgba(255,255,255,0.12);border:none;color:${je?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${je?"default":"pointer"};flex-shrink:0`;L.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${m.length}/${x})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ne(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${W?Ye({...W,used:!1,boost:0},K,ee):"<div>—</div>"}</div>
          <button id="pin-down" style="${ne(_>=b.length-1)}" ${_>=b.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${b.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ne($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${H?Ye({...H,used:!1,boost:0},K,ee):"<div>—</div>"}</div>
          <button id="pout-down" style="${ne($>=y.length-1)}" ${$>=y.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${y.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(xe=L.querySelector("#psub-close"))==null||xe.addEventListener("click",()=>L.remove()),(he=L.querySelector("#pout-up"))==null||he.addEventListener("click",()=>{$>0&&($--,j())}),(ve=L.querySelector("#pout-down"))==null||ve.addEventListener("click",()=>{$<y.length-1&&($++,j())}),(Ie=L.querySelector("#pin-up"))==null||Ie.addEventListener("click",()=>{_>0&&(_--,j())}),(Le=L.querySelector("#pin-down"))==null||Le.addEventListener("click",()=>{_<b.length-1&&(_++,j())});const fe=(je,Oe,Fe,Ve)=>{const Ne=L.querySelector("#"+je);if(!Ne)return;let He=0;Ne.addEventListener("touchstart",Ue=>{He=Ue.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",Ue=>{const Je=Ue.changedTouches[0].clientY-He;if(Math.abs(Je)<30)return;const Ze=Oe();Je<0&&Ze<Ve-1?(Fe(Ze+1),j()):Je>0&&Ze>0&&(Fe(Ze-1),j())},{passive:!0})};fe("pin-panel",()=>_,je=>_=je,b.length),fe("pout-panel",()=>$,je=>$=je,y.length),(Re=L.querySelector("#psub-confirm"))==null||Re.addEventListener("click",async je=>{if(je.preventDefault(),je.stopPropagation(),S)return;S=!0;const Oe=y[$],Fe=b[_];if(!Oe||!Fe)return;const Ve=Oe._line,Ne=(g[Ve]||[]).findIndex(Je=>Je.cardId===Oe.cardId);if(Ne===-1){u("Erreur : joueur introuvable","error"),L.remove();return}const He={...Fe,_line:Ve,position:Oe.position,used:!1,boost:0};g[Ve].splice(Ne,1,He);const Ue=[...m,Fe.cardId];L.remove(),O(Oe,Fe,async()=>{await se({[o+"Team"]:g,[n+"Team"]:r[n+"Team"],["usedSubIds_"+o]:Ue})})})}document.body.appendChild(L),j()}function O(w,k,g){const m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const y=(T,_,S)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${_};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${S}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${m[T.job]||"#555"};border:3px solid ${_};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(T)?`<img src="${Pe(T)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(T.name||"").slice(0,12)}</div>
    </div>`;x.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${y(k,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${y(w,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(x);let b=!1;const $=()=>{b||(b=!0,x.remove(),setTimeout(()=>g(),50))};x.addEventListener("click",$),setTimeout($,2200)}function Z(){var k;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",w.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[n+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[n+"Team"],r[n+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(w),(k=w.querySelector("#pvp-opp-close"))==null||k.addEventListener("click",()=>w.remove())}function ue(){var m;const w=r.log||[],k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const g=x=>{var b,$,T;if(x.type==="duel"){const _=x.isGoal,S=x.homeScored&&o==="p1"||!x.homeScored&&_&&o==="p2",L=x.homeScored?"#FFD700":_?"#ff6b6b":"rgba(255,255,255,0.3)",j=_?S?"⚽ BUT !":"⚽ BUT adversaire !":(b=x.homePlayers)!=null&&b.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${_?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${L};margin-bottom:4px">
          <div style="font-size:9px;color:${L};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${j}</div>
          ${($=x.homePlayers)!=null&&$.length?`<div style="margin-bottom:3px">${nt(x.homePlayers,"rgba(255,255,255,0.7)",x.homeTotal)}</div>`:""}
          ${(T=x.aiPlayers)!=null&&T.length?`<div style="opacity:0.7">${nt(x.aiPlayers,"#ff6b6b",x.aiTotal)}</div>`:""}
        </div>`}return x.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${x.outPlayer?Ye({...x.outPlayer,used:!0,_line:x.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${x.inPlayer?Ye({...x.inPlayer,_line:x.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${x.type==="goal"?"#FFD700":x.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${x.text||""}</div>
      </div>`};k.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${w.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...w].reverse().map(g).join("")}
      </div>`,document.body.appendChild(k),(m=k.querySelector("#pvp-hist-close"))==null||m.addEventListener("click",()=>k.remove())}async function me(){if(r.phase!==o+"-attack")return;const w=o==="p1"?"p2":"p1",k=(r.round||0)+1,g=[...r.log||[]];g.push({type:"info",text:`⏭️ ${r[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const m=qe(r),x=Be(w),y=m||!x?"finished":w+"-attack";await se({["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:y,attacker:w,round:k,log:g}),y==="finished"&&await M(r)}async function X(){const w=r[o+"Team"],k=!["GK","DEF","MIL","ATT"].some(y=>(r[n+"Team"][y]||[]).some(b=>!b.used)),g=(r["selected_"+o]||[]).map(y=>{const b=(w[y._role]||[]).find(j=>j.cardId===y.cardId)||y,$=k&&["GK","DEF"].includes(y._role),T=w[y._role]||[],_=T.findIndex(j=>j.cardId===y.cardId),S=lt(T.length),L=_>=0?S[_]:b._col??1;return{...b,_line:y._role,_col:L,...$?{note_a:Math.max(1,Number(b.note_a)||0)}:{}}});if(!g.length)return;const m=Nt(g,r.modifiers[o]||{});B(o,g.map(y=>y.cardId)),g.forEach(y=>{const b=(w[y._role]||[]).find($=>$.cardId===y.cardId);b&&(b.used=!0)}),r["selected_"+o]=[],pe();const x=[...r.log||[]];if(k){const y=(r[o+"Score"]||0)+1,b=g.map(L=>({name:L.name,note:Ae(L,L._line||"ATT"),portrait:Pe(L),job:L.job}));x.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:b,homeTotal:m.total,aiTotal:0});const $=(r.round||0)+1,T=o==="p1"?"p2":"p1",_={...r,[o+"Team"]:w,[o+"Score"]:y},S=qe(_);D.add($),we(b,y,r[n+"Score"]||0,!0,async()=>{await se({[o+"Team"]:w,[o+"Score"]:y,["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:S?"finished":T+"-attack",attacker:T,round:$,log:x}),S&&await M({...r,[o+"Score"]:y})});return}x.push({type:"pending",text:`⚔️ ${r[o+"Name"]} attaque (${m.total})`}),await se({[o+"Team"]:w,[n+"Team"]:r[n+"Team"],pendingAttack:{...m,players:g,side:o},["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},phase:n+"-defense",log:x})}async function be(){const w=r[o+"Team"],k=(r["selected_"+o]||[]).map(H=>{const W=(w[H._role]||[]).find(xe=>xe.cardId===H.cardId)||H,K=w[H._role]||[],ee=K.findIndex(xe=>xe.cardId===H.cardId),ne=lt(K.length),fe=ee>=0?ne[ee]:W._col??1;return{...W,_line:H._role,_col:fe}}),g=Rt(k,r.modifiers[o]||{});B(o,k.map(H=>H.cardId)),k.forEach(H=>{const W=(w[H._role]||[]).find(K=>K.cardId===H.cardId);W&&(W.used=!0)}),r["selected_"+o]=[],pe();const m=Ot(r.pendingAttack.total,g.total,r.modifiers[o]||{}),x=r.pendingAttack.side,y=m==="attack"||(m==null?void 0:m.goal),b=x==="p1"?"p2":"p1",$=(r.round||0)+1,T=(r.pendingAttack.players||[]).map(H=>({name:H.name,note:Ae(H,H._line||"ATT"),portrait:Pe(H),job:H.job})),_=[...r.log||[]];_.push({type:"duel",isGoal:y,homeScored:y&&x===o,text:y?`⚽ BUT de ${r[x+"Name"]} ! (${r.pendingAttack.total} vs ${g.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${g.total})`,homePlayers:T,aiPlayers:k.map(H=>({name:H.name,note:Ae(H,H._line||"DEF"),portrait:Pe(H),job:H.job})),homeTotal:r.pendingAttack.total,aiTotal:g.total});const S=y?(r[x+"Score"]||0)+1:r[x+"Score"]||0,L={...r,[o+"Team"]:w,[x+"Score"]:S},j=qe(L),F=j?"finished":b+"-attack",R=async()=>{await se({[o+"Team"]:w,[n+"Team"]:r[n+"Team"],[x+"Score"]:S,["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:F,attacker:b,round:$,log:_}),(F==="finished"||j)&&await M({...r,[x+"Score"]:S})};if(y){const H=x===o,W=H?S:r[o+"Score"]||0,K=H?r[n+"Score"]||0:S;D.add($),we(T,W,K,H,R)}else await R()}function ge(w){return["MIL","ATT"].some(k=>(w[k]||[]).some(g=>!g.used))}function Se(w){return["GK","DEF","MIL","ATT"].some(k=>(w[k]||[]).some(g=>!g.used))}function Ce(w){return Se(w)&&!ge(w)}function Be(w){const k=r[w+"Team"],g=r[(w==="p1"?"p2":"p1")+"Team"];return!!(ge(k)||!Se(g)&&Ce(k))}function qe(w){const k=["MIL","ATT"].some(_=>(w.p1Team[_]||[]).some(S=>!S.used)),g=["MIL","ATT"].some(_=>(w.p2Team[_]||[]).some(S=>!S.used)),m=Se(w.p1Team),x=Se(w.p2Team);return!k&&!(!x&&m)&&(!g&&!(!m&&x))}function De(w){const k=w.p1Score||0,g=w.p2Score||0;return k===g?null:k>g?v.home_id:v.away_id}async function M(w){try{const k=De(w),g=k?v.home_id===k?v.away_id:v.home_id:null;await E.from("matches").update({status:"finished",winner_id:k,home_score:w.p1Score||0,away_score:w.p2Score||0}).eq("id",i),k&&g&&_i(k,g).catch(()=>{})}catch(k){console.error("[PvP] finishMatch:",k)}}function q(){var x;const w=r[o+"Score"],k=r[n+"Score"],g=w>k,m=w===k;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${g?"🏆":m?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${g?"Victoire !":m?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${w} - ${k}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(x=document.getElementById("pvp-home"))==null||x.addEventListener("click",()=>{try{E.removeChannel(ie)}catch{}We(e),d("home")})}pe()}const zt="#1A6B3C",xt="#D4A017";async function Wo(e,t){var a;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(a=t.state.params)==null?void 0:a.openLeagueId;if(i){t.state.params.openLeagueId=null,await bt(e,t,i);return}await _t(e,t)}async function _t(e,t,i="waiting"){var I;const{state:a}=t,c=a.profile.id,{data:l}=await E.from("mini_league_members").select("league_id").eq("user_id",c),s=(l||[]).map(z=>z.league_id),{data:d,error:u}=await E.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),o=u?(await E.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:d||[],f=(s.length?await E.from("mini_leagues").select("*, mini_league_members(count)").in("id",s).order("created_at",{ascending:!1}):{data:[]}).data||[],h=f.filter(z=>z.status==="waiting"&&!z.is_archived),v=f.filter(z=>z.status==="active"&&!z.is_archived),A=f.filter(z=>z.is_archived||z.status==="finished"),r=o.filter(z=>!s.includes(z.id)),p=[{key:"waiting",label:"🟡 En attente",count:h.length+r.length},{key:"active",label:"🟢 En cours",count:v.length},{key:"archived",label:"📁 Archivées",count:A.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${p.map(z=>`<button class="ml-tab" data-tab="${z.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===z.key?zt:"transparent"};background:none;font-size:12px;font-weight:${i===z.key?"900":"600"};color:${i===z.key?zt:"#888"};cursor:pointer">${z.label}${z.count?` (${z.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Jo(h,r,c):i==="active"?Xo(v,c):Zo(A,c)}
    </div>
  </div>`,(I=document.getElementById("ml-create-btn"))==null||I.addEventListener("click",()=>Qo(e,t)),e.querySelectorAll(".ml-tab").forEach(z=>z.addEventListener("click",()=>_t(e,t,z.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(z=>z.addEventListener("click",()=>bt(e,t,z.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(z=>z.addEventListener("click",C=>{C.stopPropagation(),$n(e,t,z.dataset.join,z.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(z=>z.addEventListener("click",C=>{C.stopPropagation(),gi(e,t,z.dataset.delete,z.dataset.name,i)}))}function Qt(e,t,i=!1){var s,d;const a=e.creator_id===t,c=e.pot||0,l=((d=(s=e.mini_league_members)==null?void 0:s[0])==null?void 0:d.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px">${e.name}</div>
      ${a?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#cc2222;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:#666;margin-bottom:${i?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${l}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${c>0?`<span style="color:${xt};font-weight:700">🏆 ${c.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
  </div>`}function Jo(e,t,i){const a=[];return e.length&&(a.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),a.push(...e.map(c=>Qt(c,i,!1)))),t.length&&(a.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),a.push(...t.map(c=>Qt(c,i,!0)))),a.length?a.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Xo(e,t){return e.length?e.map(i=>Qt(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Zo(e,t){return e.length?e.map(i=>Qt(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Qo(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",a=>{a.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(a=>a.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=a.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var A,r,p,I;const{toast:a}=t,c=document.getElementById("ml-name").value.trim(),l=parseInt(document.getElementById("ml-max").value)||6,s=parseInt(document.getElementById("ml-fee").value)||500,d=((A=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:A.value)||"public",u=((r=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:r.value)||"aller",o=((I=(p=document.getElementById("ml-pwd"))==null?void 0:p.value)==null?void 0:I.trim())||null;if(!c){a("Le nom est obligatoire","error");return}if(s<100){a("Mise minimum : 100 crédits","error");return}if(d==="private"&&!o){a("Mot de passe requis","error");return}const{data:n,error:f}=await E.from("mini_leagues").insert({name:c,creator_id:t.state.profile.id,type:d,password:o,mode:u,max_players:l,entry_fee:s}).select().single();if(f){a("Erreur : "+f.message,"error");return}const{data:h}=await E.from("users").select("credits").eq("id",t.state.profile.id).single();if(((h==null?void 0:h.credits)||0)<s){await E.from("mini_leagues").delete().eq("id",n.id),a(`Crédits insuffisants pour la mise (${s.toLocaleString("fr")} cr.)`,"error");return}await E.from("users").update({credits:h.credits-s}).eq("id",t.state.profile.id),await E.from("mini_leagues").update({pot:s}).eq("id",n.id),await E.from("mini_league_members").insert({league_id:n.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=h.credits-s);const v=document.getElementById("nav-credits");v&&(v.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),a(`Mini League créée ! ${s.toLocaleString("fr")} cr. déduits.`,"success"),bt(e,t,n.id)})}function er(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),a=c=>{t.remove(),e(c)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>a(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>a(i.value.trim())),i.addEventListener("keydown",c=>{c.key==="Enter"&&a(i.value.trim())}),t.addEventListener("click",c=>{c.target===t&&a(null)})})}async function $n(e,t,i,a){const{toast:c,state:l}=t,s=l.profile.id,{data:d}=await E.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!d){c("Mini League introuvable","error");return}if(d.status!=="waiting"){c("Cette Mini League a déjà démarré","warning");return}const{count:u}=await E.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(u>=d.max_players){c("La Mini League est complète","warning");return}if(a==="private"){const r=await er();if(r===null)return;if(d.password!==r){c("Mot de passe incorrect","error");return}}const o=d.entry_fee||100,{data:n}=await E.from("users").select("credits").eq("id",s).single();if(((n==null?void 0:n.credits)||0)<o){c(`Crédits insuffisants — il te faut ${o.toLocaleString("fr")} cr. (solde : ${((n==null?void 0:n.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:f}=await E.from("mini_league_members").insert({league_id:i,user_id:s});if(f){c("Erreur inscription : "+f.message,"error");return}const{error:h}=await E.from("users").update({credits:n.credits-o}).eq("id",s),{error:v}=await E.from("mini_leagues").update({pot:(d.pot||0)+o}).eq("id",i);(h||v)&&console.error("Erreur post-inscription:",h,v),l.profile&&(l.profile.credits=n.credits-o);const A=document.getElementById("nav-credits");A&&(A.textContent=`💰 ${(l.profile.credits||0).toLocaleString("fr")}`),c(`✅ Inscrit ! −${o.toLocaleString("fr")} cr. · Pot : ${((d.pot||0)+o).toLocaleString("fr")} cr.`,"success"),bt(e,t,i)}async function tr(e,t,i,a){const{toast:c,state:l}=t,s=l.profile.id;if(!confirm(`Te désinscrire et récupérer ${a.toLocaleString("fr")} cr. ?`))return;const{data:d}=await E.from("mini_leagues").select("pot,status").eq("id",i).single();if(!d||d.status!=="waiting"){c("Impossible — la league a déjà démarré","error");return}const{data:u}=await E.from("users").select("credits").eq("id",s).single();await E.from("mini_leagues").update({pot:Math.max(0,(d.pot||0)-a)}).eq("id",i),await E.from("users").update({credits:((u==null?void 0:u.credits)||0)+a}).eq("id",s),await E.from("mini_league_members").delete().eq("league_id",i).eq("user_id",s),l.profile&&(l.profile.credits=((u==null?void 0:u.credits)||0)+a);const o=document.getElementById("nav-credits");o&&(o.textContent=`💰 ${(l.profile.credits||0).toLocaleString("fr")}`),c(`↩️ Désinscrit · +${a.toLocaleString("fr")} cr. remboursés`,"success"),_t(e,t,"waiting")}async function gi(e,t,i,a,c){const{toast:l}=t;if(!confirm(`Supprimer définitivement "${a}" et tous ses matchs/membres ? Action irréversible.`))return;await E.from("mini_league_matches").delete().eq("league_id",i),await E.from("mini_league_members").delete().eq("league_id",i);const{error:s}=await E.from("mini_leagues").delete().eq("id",i);if(s){l("Erreur suppression ("+s.message+")","error");return}l("Mini League supprimée avec succès","success"),_t(e,t,c)}async function ir(e,t,i){await E.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),_t(e,t,"archived")}async function bt(e,t,i){var U,D,N,G,ie,se,de,P,Y;const{state:a,toast:c}=t,l=a.profile.id,[{data:s},{data:d},{data:u}]=await Promise.all([E.from("mini_leagues").select("*").eq("id",i).single(),E.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),E.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!s){c("Introuvable","error"),await _t(e,t);return}const o=(d||[]).some(V=>V.user_id===l),n=s.creator_id===l,f=(d||[]).map(V=>V.user).filter(Boolean),h=En(f,u||[]),v=(u||[]).filter(V=>V.matchday===s.current_day),A=s.pot||0,r=s.entry_fee||100,p=v.length>0&&v.every(V=>V.status==="finished"||V.status==="bye"),I=s.current_day>=s.total_days,z=(d||[]).find(V=>V.user_id===l);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer">‹</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900">${s.name}</div>
        <div style="font-size:11px;color:#888">${s.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${s.max_players} · 💰 ${r} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${s.status==="active"?"#d1fae5":s.status==="finished"?"#f3e8ff":"#fef9c3"};color:${s.status==="active"?"#166534":s.status==="finished"?"#6b21a8":"#854d0e"}">
          ${s.status==="waiting"?"En attente":s.status==="active"?`J${s.current_day}/${s.total_days}`:"Terminée"}
        </div>
        ${A>0?`<div style="font-size:12px;font-weight:900;color:${xt};margin-top:4px">🏆 ${A.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${s.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${f.length}/${s.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${r} cr./joueur → Pot estimé : ${(r*f.length).toLocaleString("fr")} cr. (🥇${Math.floor(r*f.length*.7).toLocaleString("fr")} · 🥈${Math.floor(r*f.length*.2).toLocaleString("fr")} · 🥉${Math.floor(r*f.length*.1).toLocaleString("fr")})</div>
        ${f.map(V=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${V.club_color2||zt};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${V.club_color1||"#fff"}">${(V.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${V.club_name||V.pseudo}</div><div style="font-size:11px;color:#999">@${V.pseudo}</div></div>
            ${V.id===s.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${n&&f.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${r} cr. × ${f.length})</button>`:""}
        ${n?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${o?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${r} cr.)</button>`}
        ${o&&!n?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${r.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${s.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${s.current_day} / ${s.total_days}</div>
        ${v.map(V=>Ri(V,f,l,o)).join("")}
        ${n&&p&&!I?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${n&&p&&I?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(s.status==="active"||s.status==="finished")&&h.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${A>0&&s.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${xt}">💰</th>`:""}
          </tr></thead>
          <tbody>${h.map((V,B)=>{const oe=A>0&&s.status==="finished"?B===0?Math.floor(A*.7):B===1?Math.floor(A*.2):B===2?Math.floor(A*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${V.userId===l?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${B===0?xt:B<3?zt:"#555"}">${["🥇","🥈","🥉"][B]||B+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${V.clubName}</div><div style="font-size:10px;color:#999">@${V.pseudo}</div></td>
              <td style="text-align:center">${V.played}</td><td style="text-align:center">${V.won}-${V.drawn}-${V.lost}</td>
              <td style="text-align:center;color:${V.goalDiff>=0?zt:"#cc2222"}">${V.goalDiff>=0?"+":""}${V.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${V.points}</td>
              ${A>0&&s.status==="finished"?`<td style="text-align:right;font-weight:700;color:${xt}">${oe?oe.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${s.status!=="waiting"&&s.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,s.status==="active"?s.current_day-1:s.current_day)},(V,B)=>B+1).reverse().map(V=>{const B=(u||[]).filter(oe=>oe.matchday===V);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${V}</div>${B.map(oe=>Ri(oe,f,l,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${n&&!s.is_archived&&s.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const C=s.status==="waiting"?"waiting":s.status==="active"?"active":"archived";if((U=document.getElementById("ml-back"))==null||U.addEventListener("click",()=>_t(e,t,C)),(D=document.getElementById("ml-start-btn"))==null||D.addEventListener("click",()=>nr(e,t,s,f)),(N=document.getElementById("ml-next-day"))==null||N.addEventListener("click",()=>or(e,t,i)),(G=document.getElementById("ml-finish-btn"))==null||G.addEventListener("click",()=>kn(e,t,i,A,h,f)),(ie=document.getElementById("ml-join-now"))==null||ie.addEventListener("click",()=>$n(e,t,i,s.type)),(se=document.getElementById("ml-leave-btn"))==null||se.addEventListener("click",()=>tr(e,t,i,r)),(de=document.getElementById("ml-delete-btn"))==null||de.addEventListener("click",()=>gi(e,t,i,s.name,"waiting")),(P=document.getElementById("ml-delete-now"))==null||P.addEventListener("click",()=>gi(e,t,i,s.name,C)),(Y=document.getElementById("ml-archive-btn"))==null||Y.addEventListener("click",()=>ir(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(V=>{V.addEventListener("click",()=>{const B=v.find(oe=>oe.id===V.dataset.playMatch);B&&t.navigate("match-mini-league",{mlMatchId:B.id,leagueId:i})})}),s.status==="finished"&&z){const V=h.findIndex(B=>B.userId===l);V>=0&&V<3&&z.prize_amount>0&&setTimeout(()=>rr(e,t,s,z,V),400)}}function Ri(e,t,i,a,c=!1){const l=f=>t.find(h=>h.id===f);if(e.is_bye){const f=l(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"?"} exempté(e)</div>`}const s=l(e.home_id),d=l(e.away_id),u=e.home_id===i||e.away_id===i,o=u&&e.status==="pending"&&a&&!c,n=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${u?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${u?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?zt:"#999"}">${n}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"?"}</div>
    ${o?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function nr(e,t,i,a){const{toast:c,state:l}=t,s=ar(a.map(o=>o.id),i.mode),d=[];s.forEach((o,n)=>o.forEach(f=>d.push({league_id:i.id,matchday:n+1,home_id:f.home||f.bye,away_id:f.away||null,is_bye:!!f.bye,status:f.bye?"bye":"pending"})));const{error:u}=await E.from("mini_league_matches").insert(d);if(u){c("Erreur calendrier : "+u.message,"error");return}await E.from("mini_leagues").update({status:"active",current_day:1,total_days:s.length}).eq("id",i.id),c(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),bt(e,t,i.id)}async function or(e,t,i){const{data:a}=await E.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),c=(a.current_day||0)+1;if(c>(a.total_days||0)){await kn(e,t,i,a.pot||0,null,null);return}await E.from("mini_leagues").update({current_day:c}).eq("id",i),t.toast(`Journée ${c} commencée !`,"success"),bt(e,t,i)}async function kn(e,t,i,a,c,l){const{toast:s,state:d}=t;let u=c,o=l;if(!u){const{data:f}=await E.from("mini_league_matches").select("*").eq("league_id",i),{data:h}=await E.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);o=(h||[]).map(v=>v.user).filter(Boolean),u=En(o,f||[])}const n=[Math.floor(a*.7),Math.floor(a*.2),Math.floor(a*.1)];await Promise.all(u.slice(0,3).map((f,h)=>n[h]?E.from("mini_league_members").update({prize_amount:n[h],prize_claimed:!1}).eq("league_id",i).eq("user_id",f.userId):Promise.resolve())),await E.from("mini_leagues").update({status:"finished"}).eq("id",i),s("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),bt(e,t,i)}async function rr(e,t,i,a,c){var h,v;const{state:l,toast:s}=t,d=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],u=["🥇","🥈","🥉"][c],o=a.prize_amount||d[c]||0,n=a.prize_claimed,f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",f.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${u}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${c===0?"Champion !":c===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${xt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${n?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${xt}">${o.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${c===0?"70%":c===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${n?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${xt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${o.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(f),(h=f.querySelector("#prize-close"))==null||h.addEventListener("click",()=>f.remove()),f.addEventListener("click",A=>{A.target===f&&f.remove()}),(v=f.querySelector("#claim-prize-btn"))==null||v.addEventListener("click",async()=>{const{data:A}=await E.from("users").select("credits").eq("id",l.profile.id).single();await E.from("users").update({credits:((A==null?void 0:A.credits)||0)+o}).eq("id",l.profile.id),await E.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",l.profile.id),l.profile&&(l.profile.credits=((A==null?void 0:A.credits)||0)+o);const r=document.getElementById("nav-credits");r&&(r.textContent=`💰 ${l.profile.credits.toLocaleString("fr")}`),s(`💰 +${o.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),f.remove(),bt(e,t,i.id)})}function ar(e,t){const a=e.length%2===0?[...e]:[...e,null],c=a.length;let l=a.slice(1);const s=[];for(let d=0;d<c-1;d++){const u=[],o=[a[0],...l];for(let n=0;n<c/2;n++){const f=o[n],h=o[c-1-n];f===null?u.push({bye:h}):h===null?u.push({bye:f}):u.push({home:f,away:h})}s.push(u),l=[l[l.length-1],...l.slice(0,-1)]}return t==="aller-retour"?[...s,...s.map(d=>d.map(u=>u.bye?u:{home:u.away,away:u.home}))]:s}function En(e,t){const i={};return e.forEach(a=>{i[a.id]={userId:a.id,pseudo:a.pseudo,clubName:a.club_name||a.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(a=>a.status==="finished"&&!a.is_bye&&a.home_score!=null).forEach(a=>{const c=i[a.home_id],l=i[a.away_id];!c||!l||(c.played++,l.played++,c.goalsFor+=a.home_score,c.goalsAgainst+=a.away_score,l.goalsFor+=a.away_score,l.goalsAgainst+=a.home_score,a.home_score>a.away_score?(c.won++,c.points+=3,l.lost++):a.home_score<a.away_score?(l.won++,l.points+=3,c.lost++):(c.drawn++,c.points++,l.drawn++,l.points++),c.goalDiff=c.goalsFor-c.goalsAgainst,l.goalDiff=l.goalsFor-l.goalsAgainst)}),Object.values(i).sort((a,c)=>c.points-a.points||c.goalDiff-a.goalDiff||c.goalsFor-a.goalsFor)}async function Oi(e,t,i,a){var c,l;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:a};try{const s=(l=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:l.id;try{(E.getChannels?E.getChannels():[]).forEach(u=>{const o=u.topic||"";(o.includes("matchmaking")||o.includes("pvp-match"))&&E.removeChannel(u)})}catch(d){console.warn("[FriendMatch] cleanup canaux:",d)}s&&(await E.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await E.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await ni(e,t,"random",({deckId:s,formation:d,starters:u,subsRaw:o,gcCardsEnriched:n,gcDefs:f,stadiumDef:h})=>{const v=A=>sr(e,t,s,d,u,o,A,f||[],i);if(!n.length){v([]);return}ii(e,n,v)})}async function sr(e,t,i,a,c,l,s=[],d=[],u,o){const{state:n,navigate:f,toast:h}=t,v=n.profile.id;let A=!1,r=null;et(e);try{await E.rpc("cancel_matchmaking",{p_user_id:v})}catch{}try{await E.from("matchmaking_queue").delete().eq("user_id",v)}catch{}const{data:p}=await E.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",u).single();if(!p){h("Match introuvable","error"),We(e),f("mini-league");return}if(p.home_id!==v&&p.away_id!==v){h("Tu ne fais pas partie de ce match","error"),We(e),f("mini-league");return}const I=p.home_id===v,z=I?p.away:p.home,C=I?p.away_id:p.home_id,U=(N,G)=>{var ie;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">Journée ${p.matchday}</div>
        <div style="display:flex;gap:24px;align-items:center">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:#1A6B3C;display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid #22c55e">
              ✅
            </div>
            <div style="font-size:12px;font-weight:700">${n.profile.club_name||n.profile.pseudo}</div>
            <div style="font-size:11px;color:#22c55e">Prêt</div>
          </div>
          <div style="font-size:28px;font-weight:900;color:#FFD700">VS</div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid rgba(255,255,255,0.2)">
              ⏳
            </div>
            <div style="font-size:12px;font-weight:700">${(z==null?void 0:z.club_name)||(z==null?void 0:z.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(ie=document.getElementById("lobby-cancel"))==null||ie.addEventListener("click",()=>{A=!0,clearInterval(r),We(e),f("mini-league")})},D=async(N,G)=>{A=!0,clearInterval(r),await new Promise(ie=>setTimeout(ie,600)),e.isConnected&&dr(e,t,N,G,s,d)};if(U(),I){let N=p.match_id;if(!N){const{data:ie,error:se}=await E.from("matches").insert({home_id:v,away_id:C,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(se||!ie){h("Erreur création match","error"),We(e),f("mini-league");return}N=ie.id,await E.from("mini_league_matches").update({match_id:N,status:"playing"}).eq("id",u)}const G=N;r=setInterval(async()=>{if(A){clearInterval(r);return}const{data:ie}=await E.from("matches").select("away_deck_id").eq("id",G).single();ie!=null&&ie.away_deck_id&&(clearInterval(r),D(G,!0))},1500)}else{let N=p.match_id;r=setInterval(async()=>{if(A){clearInterval(r);return}const{data:G}=await E.from("mini_league_matches").select("match_id").eq("id",u).single();G!=null&&G.match_id&&(clearInterval(r),N=G.match_id,await E.from("matches").update({away_deck_id:i}).eq("id",N),D(N,!1))},1500)}}async function dr(e,t,i,a,c=[],l=[]){var k;const{state:s,navigate:d,toast:u}=t,o=((k=s.params)==null?void 0:k.leagueId)||null,n=a?"p1":"p2",f=a?"p2":"p1",h=(c||[]).map(g=>g.id),v=(c||[]).map(g=>({id:g.id,gc_type:g.gc_type,_gcDef:g._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:A}=await E.from("matches").select("*").eq("id",i).single();if(!A){u("Match introuvable","error"),d("mini-league");return}async function r(){const[{data:g},{data:m},{data:x},{data:y}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:A.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:A.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",A.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",A.away_id).single()]),b=L=>({cardId:L.card_id,position:L.position,id:L.id,firstname:L.firstname,name:L.surname_encoded,country_code:L.country_code,club_id:L.club_id,job:L.job,job2:L.job2,note_g:Number(L.note_g)||0,note_d:Number(L.note_d)||0,note_m:Number(L.note_m)||0,note_a:Number(L.note_a)||0,rarity:L.rarity,skin:L.skin,hair:L.hair,hair_length:L.hair_length,clubName:L.club_encoded_name||null,clubLogo:L.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),$=((g==null?void 0:g.starters)||[]).map(L=>b(L)),T=((m==null?void 0:m.starters)||[]).map(L=>b(L)),_=(g==null?void 0:g.formation)||"4-4-2",S=(m==null?void 0:m.formation)||"4-4-2";return{p1Team:yt($,_),p2Team:yt(T,S),p1Subs:((g==null?void 0:g.subs)||[]).map(L=>b(L)),p2Subs:((m==null?void 0:m.subs)||[]).map(L=>b(L)),p1Formation:_,p2Formation:S,p1Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?h:[],gc_p2:a?[]:h,gcCardsFull_p1:a?v:[],gcCardsFull_p2:a?[]:v,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let p=A.game_state&&Object.keys(A.game_state).length?A.game_state:null;if(!p)if(a){p=await r();const{data:g}=await E.from("matches").select("game_state").eq("id",i).single();!(g!=null&&g.game_state)||!Object.keys(g.game_state).length?await E.from("matches").update({game_state:p,turn_user_id:A.home_id}).eq("id",i):p=g.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let g=0;g<60&&!p;g++){await new Promise(x=>setTimeout(x,400));const{data:m}=await E.from("matches").select("game_state").eq("id",i).single();m!=null&&m.game_state&&Object.keys(m.game_state).length&&(p=m.game_state)}if(!p){u("Erreur de synchronisation","error"),d("mini-league");return}p.gc_p2=h,p.gcCardsFull_p2=v,await E.from("matches").update({game_state:p}).eq("id",i)}let I=!1,z=!1,C=!1,U=null,D=!1;const N=new Set,G=new Set;function ie(g){var L,j;try{E.removeChannel(se)}catch{}const m=p[n+"Score"]||0,x=p[f+"Score"]||0;if(!C){C=!0;const F=g.winner_id||(m>x?s.profile.id:x>m?"opp":null),R=F===s.profile.id?"win":F?"loss":null;R&&yi(()=>Promise.resolve().then(()=>on),void 0).then(H=>H.applyOwnEvolution(s.profile.id,R)).catch(()=>{})}if(!z){const F=p.p1Score||0,R=p.p2Score||0,H=(p.usedGc_p1||[]).length,W=(p.usedGc_p2||[]).length,K=g.winner_id||(F>R?A.home_id:R>F?A.away_id:null);(K?s.profile.id===K:s.profile.id<(a?A.away_id:A.home_id))&&(z=!0,Xi({player1Id:A.home_id,player2Id:A.away_id,score1:F,score2:R,gc1:H,gc2:W}).catch(ne=>console.warn("[FriendMatch] updateStats:",ne)))}let y,b;g.winner_id?(y=g.winner_id===s.profile.id,b=!1):g.forfeit?(y=m>x,b=!1):(b=m===x,y=m>x),(L=document.getElementById("pvp-end-overlay"))==null||L.remove();const $=document.createElement("div");$.id="pvp-end-overlay",$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const T=b?"🤝":y?"🏆":"😞",_=b?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",S=b?"#fff":y?"#FFD700":"#ff6b6b";$.innerHTML=`
      <div style="font-size:64px">${T}</div>
      <div style="font-size:26px;font-weight:900;color:${S}">${_}</div>
      <div style="font-size:18px">${p[n+"Name"]} ${m} – ${x} ${p[f+"Name"]}</div>
      ${g.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild($),(j=$.querySelector("#pvp-end-home"))==null||j.addEventListener("click",()=>{$.remove(),We(e),o?d("mini-league",{openLeagueId:o}):d("mini-league")})}const se=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},g=>{const m=g.new;try{if(m.status==="finished"||m.forfeit){if(I||(I=!0,U&&(clearInterval(U),U=null),m.game_state&&(p=m.game_state),p.phase==="finished"&&!m.forfeit&&document.getElementById("pvp-home")))return;ie(m);return}if(m.game_state){const x=p;p=m.game_state;const y=p._lastGC;if(y&&y.seq&&!G.has(y.seq)&&(G.add(y.seq),y.by!==n)){Ee(y.type,y.by,()=>ye());return}const b=x[n+"Score"]||0,$=x[f+"Score"]||0,T=p[n+"Score"]||0,_=p[f+"Score"]||0,S=T>b,L=_>$;if((S||L)&&!N.has(p.round)){N.add(p.round);const j=[...p.log||[]].reverse().find(R=>R.isGoal),F=((j==null?void 0:j.homePlayers)||[]).map(R=>({name:R.name,note:R.note,portrait:R.portrait,job:R.job}));$e(F,T,_,S,()=>ye());return}ye()}}catch(x){console.error("[PvP] crash:",x)}}).subscribe();async function de(g){Object.assign(p,g),p.lastActionAt=new Date().toISOString();const{error:m}=await E.from("matches").update({game_state:p}).eq("id",i);m&&u("Erreur de synchronisation","error");try{ye()}catch(x){console.error("[PvP] renderPvpScreen crash:",x)}}async function P(){if(I)return;I=!0,U&&(clearInterval(U),U=null);const g=a?A.away_id:A.home_id,m=a?"p2":"p1",x=a?"p1":"p2",y={...p,[m+"Score"]:3,[x+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:g,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",i)}catch{}try{E.removeChannel(se)}catch{}setTimeout(()=>{We(e),d("mini-league")},800)}const Y={BOOST_STAT:({value:g=1,count:m=1,roles:x=[]},y,b)=>{const $=y[n+"Team"],T=Object.entries($).filter(([_])=>!x.length||x.includes(_)).flatMap(([_,S])=>S.filter(L=>!L.used).map(L=>({...L,_line:_})));if(!T.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),b(y);return}V(T,m,`Choisir ${m} joueur(s) à booster (+${g})`,_=>{_.forEach(S=>{const L=($[S._line]||[]).find(j=>j.cardId===S.cardId);L&&(L.boost=(L.boost||0)+g,y.log.push({text:`⚡ +${g} sur ${L.name}`,type:"info"}))}),y[n+"Team"]=$,b(y)})},DEBUFF_STAT:({value:g=1,count:m=1,roles:x=[],target:y="ai"},b,$)=>{const T=y==="home"?n:f,_=b[T+"Team"],S=y==="home"?"allié":"adverse",L=Object.entries(_).filter(([j])=>!x.length||x.includes(j)).flatMap(([j,F])=>F.map(R=>({...R,_line:j})));if(!L.length){b.log.push({text:`🎯 Aucun joueur ${S}`,type:"info"}),$(b);return}V(L,m,`Choisir ${m} joueur(s) ${S}(s) (-${g})`,j=>{j.forEach(F=>{const R=(_[F._line]||[]).find(H=>H.cardId===F.cardId);R&&(R.boost=(R.boost||0)-g,b.log.push({text:`🎯 -${g} sur ${R.name}`,type:"info"}))}),b[T+"Team"]=_,$(b)})},GRAY_PLAYER:({count:g=1,roles:m=[],target:x="ai"},y,b)=>{const $=x==="home"?n:f,T=y[$+"Team"],_=x==="home"?"allié":"adverse",S=Object.entries(T).filter(([L])=>!m.length||m.includes(L)).flatMap(([L,j])=>j.filter(F=>!F.used).map(F=>({...F,_line:L})));if(!S.length){y.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),b(y);return}V(S,g,`Choisir ${g} joueur(s) ${_}(s) à exclure`,L=>{const j="usedCardIds_"+$,F=new Set(y[j]||[]);L.forEach(R=>{const H=(T[R._line]||[]).find(W=>W.cardId===R.cardId);H&&(H.used=!0,F.add(R.cardId),y.log.push({text:`❌ ${H.name} exclu !`,type:"info"}))}),y[j]=[...F],y[$+"Team"]=T,b(y)})},REVIVE_PLAYER:({count:g=1,roles:m=[]},x,y)=>{const b=x[n+"Team"],$=Object.entries(b).filter(([T])=>!m.length||m.includes(T)).flatMap(([T,_])=>_.filter(S=>S.used).map(S=>({...S,_line:T})));if(!$.length){x.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(x);return}V($,g,`Choisir ${g} joueur(s) à ressusciter`,T=>{T.forEach(_=>{const S=(b[_._line]||[]).find(L=>L.cardId===_.cardId);S&&(S.used=!1,x.log.push({text:`💫 ${S.name} ressuscité !`,type:"info"}))}),x[n+"Team"]=b,y(x)})},REMOVE_GOAL:({},g,m)=>{const x=f+"Score";g[x]>0?(g[x]--,g.log.push({text:"🚫 Dernier but annulé !",type:"info"})):g.log.push({text:"🚫 Aucun but à annuler",type:"info"}),m(g)},ADD_GOAL_DRAW:({},g,m)=>{g[n+"Score"]===g[f+"Score"]?(g[n+"Score"]++,g.log.push({text:"🎯 But bonus !",type:"info"})):g.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),m(g)},ADD_SUB:({value:g=1},m,x)=>{m.maxSubs=(m.maxSubs||3)+g,m.log.push({text:`🔄 +${g} remplacement(s)`,type:"info"}),x(m)},CUSTOM:({},g,m)=>m(g)};function V(g,m,x,y){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let $=[];function T(){var S,L;const _=g.map(j=>{const F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[j._line]||"#555",R=Ae(j,j._line)+(j.boost||0),W=$.find(ee=>ee.cardId===j.cardId)?"#FFD700":"rgba(255,255,255,0.25)",K=j.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${j.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${W};background:${F};overflow:hidden;cursor:pointer;${K}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${j.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${R}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${j._line}</div>
        </div>`}).join("");b.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${x}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${$.length}/${m}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${_}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${$.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${$.length}/${m})
          </button>
        </div>`,(S=b.querySelector("#pp-close"))==null||S.addEventListener("click",()=>b.remove()),b.querySelectorAll(".pp-item").forEach(j=>{j.addEventListener("click",()=>{const F=j.dataset.cid,R=g.find(W=>W.cardId===F),H=$.findIndex(W=>W.cardId===F);R&&(H>-1?$.splice(H,1):$.length<m&&$.push(R),T())})}),(L=b.querySelector("#pp-confirm"))==null||L.addEventListener("click",()=>{b.remove(),y($)})}T(),document.body.appendChild(b)}async function B(g,m){const y=(p["gcCardsFull_"+n]||[]).find(_=>_.id===g),b=(y==null?void 0:y._gcDef)||(p.gcDefs||[]).find(_=>{var S;return _.name===m||((S=_.name)==null?void 0:S.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),$=[...p["usedGc_"+n]||[],g],T={type:m,by:n,seq:(p._gcAnimSeq||0)+1};G.add(T.seq),Ee(m,n,async()=>{if(b!=null&&b.effect_type&&b.effect_type!=="CUSTOM"){const S=Y[b.effect_type];if(S){const L={...p};S(b.effect_params||{},L,async j=>{j["usedGc_"+n]=$,j._lastGC=T,j._gcAnimSeq=T.seq,await de(j)});return}}const _={...p};switch(m){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const S=f+"Score";_[S]>0&&(_[S]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+n]=$,_._lastGC=T,_._gcAnimSeq=T.seq,await de(_)})}function oe(g,m){const x="usedCardIds_"+g,y=new Set(p[x]||[]);m.forEach(b=>y.add(b)),p[x]=[...y]}function pe(){for(const g of["p1","p2"]){const m=new Set(p["usedCardIds_"+g]||[]),x=p[g+"Team"];if(x)for(const y of["GK","DEF","MIL","ATT"])(x[y]||[]).forEach(b=>{b.used=m.has(b.cardId)})}}function ye(){var ot,gt,ae,_e,Q,ce;if(p.phase==="reveal")return ze();if(p.phase==="midfield")return we();if(p.phase==="finished")return w();const g=p[n+"Team"],m=p[f+"Team"];pe();const x=p[n+"Score"],y=p[f+"Score"],b=p[n+"Name"],$=p[f+"Name"],T=p.phase===n+"-attack",_=p.phase===n+"-defense",S=Array.isArray(p["selected_"+n])?p["selected_"+n]:[],L=S.map(J=>J.cardId),j=window.innerWidth>=700,F=p[n+"Subs"]||[],R=p["usedSubIds_"+n]||[],H=F.filter(J=>!R.includes(J.cardId)),W=p["gcCardsFull_"+n]||[],K=p["usedGc_"+n]||[],ee=W.filter(J=>!K.includes(J.id)),ne=p.boostOwner===n&&!p.boostUsed,fe=!["GK","DEF","MIL","ATT"].some(J=>(m[J]||[]).some(le=>!le.used)),xe=[...g.MIL||[],...g.ATT||[]].filter(J=>!J.used),he=T&&fe&&xe.length===0?[...g.GK||[],...g.DEF||[]].filter(J=>!J.used).map(J=>J.cardId):[];function ve(J,le,Me){var zi,Si;const ke=J._gcDef,tt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ke==null?void 0:ke.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",it={purple:"#b06ce0",light_blue:"#00d4ef"}[ke==null?void 0:ke.color]||"#b06ce0",rt=(ke==null?void 0:ke.name)||J.gc_type,st=(ke==null?void 0:ke.effect)||((zi=Ke[J.gc_type])==null?void 0:zi.desc)||"",ct=ke!=null&&ke.image_url?`/manager-wars/icons/${ke.image_url}`:null,$t=((Si=Ke[J.gc_type])==null?void 0:Si.icon)||"⚡",pt=Math.round(Me*.22),ht=Math.round(Me*.22),kt=Me-pt-ht,Ht=rt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${J.id}" data-gc-type="${J.gc_type}"
        style="box-sizing:border-box;width:${le}px;height:${Me}px;border-radius:10px;border:2px solid ${it};background:${tt};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${pt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Ht}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${le-6}px">${rt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${kt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ct?`<img src="${ct}" style="max-width:${le-10}px;max-height:${kt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(kt*.55)}px">${$t}</span>`}
        </div>
        <div style="height:${ht}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${st.slice(0,38)}</span>
        </div>
      </div>`}function Ie(J,le){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${J}px;height:${le}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(le*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(le*.2)}px">⚡</div>
        <div style="font-size:${Math.round(le*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const Le=(J,le)=>le?Ie(130,175):ve(J,130,175),Re=(J,le)=>le?Ie(68,95):ve(J,68,95),je=j?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Oe=T?qe(n)?`<button id="pvp-action" style="${je};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${S.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${je};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${je};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${S.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${$}</div>`,Fe=T&&!qe(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':T||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${S.length}/3 sélectionné(s)</div>`:"",Ve=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${j?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${H.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':H.map(J=>`<div class="pvp-sub-btn" data-sub-id="${J.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(J,j?76:44,j?100:58)}</div>`).join("")}
    </div>`,Ne=T?"attack":_?"defense":"idle",He=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(g,p[n+"Formation"],Ne,L,300,300,he)}
      </div>
    </div>`;function Ue(J){if(J.type==="duel"&&(J.homeTotal!=null||J.aiTotal!=null)){const le=(J.homeTotal||0)>=(J.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(J.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(J.homePlayers||[]).map(Me=>dt(Me)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${le?20:14}px;font-weight:900;color:${le?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${J.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${le?14:20}px;font-weight:900;color:${le?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${J.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(J.aiPlayers||[]).map(Me=>dt(Me)).join("")}
            </div>
          </div>
          ${J.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${J.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${J.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${J.type==="goal"?700:400};padding:3px 2px">${J.text||""}</div>`}const Je=(()=>{var le,Me;if(_&&((le=p.pendingAttack)!=null&&le.players)){const ke=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${$} ATTAQUE — Défendez !</div>
          ${nt((ke.players||[]).map(tt=>({...tt,used:!1})),"#ff6b6b",ke.total)}
        </div>`}if(T&&((Me=p.pendingAttack)!=null&&Me.players)){const ke=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${nt((ke.players||[]).map(tt=>({...tt,used:!1})),"#00ff88",ke.total)}
        </div>`}const J=(p.log||[]).slice(-1)[0];return J?'<div style="padding:2px 4px">'+Ue(J)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ze=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${x} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${$}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Je}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(p.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",j?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ze}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ve}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${He}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Oe}${Fe}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ee.map(J=>Le(J,!1)).join("")}
            ${ne?Le(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ze}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(g,p[n+"Formation"],Ne,L,300,300,he)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ee.map(J=>Re(J,!1)).join("")}
            ${ne?Re(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${T&&H.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${T&&H.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${T&&H.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${T&&H.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${H.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(p["usedSubIds_"+n]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(p["usedSubIds_"+n]||[]).length}/${p.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Oe}${Fe}</div>
        </div>
      </div>`;function Qe(){const J=e.querySelector(".match-screen");if(!J)return;const le=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);J.style.height=le+"px",J.style.minHeight=le+"px",J.style.maxHeight=le+"px",J.style.overflow="hidden";const Me=e.querySelector("#mobile-action-bar"),ke=e.querySelector("#mobile-play-area");Me&&ke&&(ke.style.paddingBottom=Me.offsetHeight+"px")}if(Qe(),setTimeout(Qe,120),setTimeout(Qe,400),D||(D=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Qe),window.visualViewport.addEventListener("scroll",Qe)),window.addEventListener("resize",Qe)),function(){const le=e.querySelector(".terrain-wrapper svg");le&&(le.removeAttribute("width"),le.removeAttribute("height"),le.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",le.setAttribute("viewBox","-26 -26 352 352"),le.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(J=>{J.addEventListener("click",()=>{if(!T&&!_)return;const le=J.dataset.cardId,Me=J.dataset.role,ke=(g[Me]||[]).find(st=>st.cardId===le);if(!ke||ke.used)return;const tt=he.includes(le);if(T&&!["MIL","ATT"].includes(Me)&&!tt)return;Array.isArray(p["selected_"+n])||(p["selected_"+n]=[]);const it=p["selected_"+n],rt=it.findIndex(st=>st.cardId===le);rt>-1?it.splice(rt,1):it.length<3&&it.push({...ke,_role:Me}),ye()})}),e.querySelectorAll(".match-used-hit").forEach(J=>{J.addEventListener("click",()=>O(J.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(J=>{J.addEventListener("click",()=>O())}),(ot=e.querySelector("#pvp-sub-open"))==null||ot.addEventListener("click",()=>O()),e.querySelectorAll(".pvp-gc-mini").forEach(J=>{J.addEventListener("click",()=>te(J.dataset.gcId,J.dataset.gcType))}),(gt=e.querySelector("#pvp-boost-card"))==null||gt.addEventListener("click",()=>re()),(ae=e.querySelector("#pvp-action"))==null||ae.addEventListener("click",J=>{T?J.currentTarget.dataset.pass==="1"||!qe(n)?X():be():_&&ge()}),(_e=e.querySelector("#pvp-quit"))==null||_e.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&P()}),(Q=e.querySelector("#pvp-view-opp"))==null||Q.addEventListener("click",()=>ue()),(ce=e.querySelector("#pvp-toggle-history"))==null||ce.addEventListener("click",()=>me()),U&&(clearInterval(U),U=null),(T||_)&&!I){let J=30,le=!1;const Me=()=>document.getElementById("pvp-timer"),ke=()=>{Me()&&(Me().textContent=J+"s",Me().style.color=le?"#ff4444":"#fff")};ke(),U=setInterval(()=>{J--,J<0?le?(clearInterval(U),U=null,T&&!qe(n)?X():P()):(le=!0,J=15,ke()):ke()},1e3)}}function ze(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[f+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(p[f+"Team"],p[f+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await de({phase:"midfield"})},5e3)}let Te=!1;function we(){if(Te)return;const g=p[n+"Team"].MIL||[],m=p[f+"Team"].MIL||[];function x(ee){return ee.reduce((ne,fe)=>ne+Ae(fe,"MIL"),0)}function y(ee){let ne=0;for(let fe=0;fe<ee.length-1;fe++){const xe=at(ee[fe],ee[fe+1]);xe==="#00ff88"?ne+=2:xe==="#FFD700"&&(ne+=1)}return ne}const b=x(g)+y(g),$=x(m)+y(m),T=b>=$;function _(ee,ne,fe){return`<div id="duel-row-${fe}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ne}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${ee.map((xe,he)=>{const ve=he<ee.length-1?at(xe,ee[he+1]):null,Ie=!ve||ve==="#ff3333"||ve==="#cc2222",Le=ve==="#00ff88"?"+2":ve==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${fe}" data-idx="${he}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...xe,note:Ae(xe,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${he<ee.length-1?`<div class="duel-link duel-link-${fe}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Ie?"rgba(255,255,255,0.12)":ve};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Ie?"none":`0 0 8px ${ve}`}">
              ${Le?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ve}">${Le}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${fe}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${x(ee)} + ${y(ee)} liens = <b style="color:#fff">${x(ee)+y(ee)}</b>
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
      ${_(g,p[n+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_(m,p[f+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const S=(ee,ne)=>e.querySelectorAll(ee).forEach((fe,xe)=>{setTimeout(()=>{fe.style.opacity="1",fe.style.transform="translateY(0) scale(1)"},ne+xe*90)});S(".duel-card-me",150),S(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((ee,ne)=>setTimeout(()=>{ee.style.opacity="1"},ne*70)),900),setTimeout(()=>{const ee=e.querySelector("#pvp-vs");ee&&(ee.style.opacity="1",ee.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ne=>ne.style.opacity="1")},1250);function L(ee,ne,fe){const xe=document.getElementById(ee);if(!xe)return;const he=performance.now(),ve=Ie=>{const Le=Math.min(1,(Ie-he)/fe);xe.textContent=Math.round(ne*(1-Math.pow(1-Le,3))),Le<1?requestAnimationFrame(ve):xe.textContent=ne};requestAnimationFrame(ve)}setTimeout(()=>{L("pvp-score-me",b,800),L("pvp-score-opp",$,800)},1500);const j=p.p1Team.MIL||[],F=p.p2Team.MIL||[],R=x(j)+y(j),H=x(F)+y(F),W=R>=H?"p1":"p2";let K=p.boostValue;K==null&&(K=ti(),p.boostValue=K,p.boostOwner=W,p.boostUsed=!1),Te=!0,setTimeout(()=>{const ee=e.querySelector("#duel-row-"+(T?"me":"opp")),ne=e.querySelector("#duel-row-"+(T?"opp":"me")),fe=document.getElementById("pvp-score-me"),xe=document.getElementById("pvp-score-opp"),he=T?fe:xe,ve=T?xe:fe;he&&(he.style.fontSize="80px",he.style.color=T?"#FFD700":"#ff6b6b",he.style.animation="duelPulse .5s ease"+(T?",duelGlow 1.5s ease infinite .5s":"")),ve&&(ve.style.opacity="0.25"),setTimeout(()=>{ee&&(ee.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ee.style.zIndex="5"),setTimeout(()=>{const Ie=document.getElementById("duel-shock");Ie&&(Ie.style.animation="shockwave .5s ease-out forwards"),ne&&(ne.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var je;const Ie=document.getElementById("pvp-duel-finale");if(!Ie)return;const Le=p.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+K+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;Ie.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(T?"⚽ "+p[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[f+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Le+Re,Ie.style.transition="opacity .45s ease",Ie.style.opacity="1",Ie.style.pointerEvents="auto",(je=document.getElementById("pvp-start-match"))==null||je.addEventListener("click",async()=>{const Oe=W;await de({phase:Oe+"-attack",attacker:Oe,round:1,boostValue:K,boostUsed:!1,boostOwner:Oe})})},600)},700)},2800)}function $e(g,m,x,y,b){const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const T=Array.from({length:10},(j,F)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${F%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][F%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};$.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${T}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${y?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${m} – ${x}
      </div>
      ${g!=null&&g.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${g.map(j=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[j.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${j.portrait?`<img src="${j.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(j.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild($);let S=!1;const L=()=>{S||(S=!0,$.remove(),setTimeout(()=>b(),50))};$.addEventListener("click",L),setTimeout(L,3500)}function Ee(g,m,x){var K,ee;const y=(p.gcDefs||[]).find(ne=>{var fe;return ne.name===g||((fe=ne.name)==null?void 0:fe.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",$={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",T=(y==null?void 0:y.name)||g,_=(y==null?void 0:y.effect)||((K=Ke[g])==null?void 0:K.desc)||"",S=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,L=((ee=Ke[g])==null?void 0:ee.icon)||"⚡",F=m===n?"Vous":p[m+"Name"]||"Adversaire",R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",R.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${$}66}50%{box-shadow:0 0 60px ${$}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${$};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${F} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${$};background:${b};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${T.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${T}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${L}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${_}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(R);let H=!1;const W=()=>{H||(H=!0,R.remove(),setTimeout(()=>x&&x(),50))};R.addEventListener("click",W),setTimeout(W,3e3)}function te(g,m){var R,H,W,K;const y=(p["gcCardsFull_"+n]||[]).find(ee=>ee.id===g),b=y==null?void 0:y._gcDef,$={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",T={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",_=(b==null?void 0:b.name)||m,S=(b==null?void 0:b.effect)||((R=Ke[m])==null?void 0:R.desc)||"Carte spéciale.",L=b!=null&&b.image_url?`/manager-wars/icons/${b.image_url}`:null,j=((H=Ke[m])==null?void 0:H.icon)||"⚡",F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",F.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${T};background:${$};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${T}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${L?`<img src="${L}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${j}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${S}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(F),(W=F.querySelector("#pvp-gc-back"))==null||W.addEventListener("click",()=>F.remove()),(K=F.querySelector("#pvp-gc-use"))==null||K.addEventListener("click",()=>{F.remove(),B(g,m)})}function re(){var y;const g=p[n+"Team"],m=Object.entries(g).flatMap(([b,$])=>($||[]).filter(T=>!T.used).map(T=>({...T,_line:b})));if(!m.length)return;const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",x.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${m.map(b=>{const $={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b._line]||"#555",T=Ae(b,b._line)+(b.boost||0);return`<div class="bp-item" data-cid="${b.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${$};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${b.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${T}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(x),(y=x.querySelector("#bp-close"))==null||y.addEventListener("click",()=>x.remove()),x.querySelectorAll(".bp-item").forEach(b=>{b.addEventListener("click",async()=>{const $=b.dataset.cid,T=m.find(S=>S.cardId===$);if(!T)return;const _=(g[T._line]||[]).find(S=>S.cardId===$);_&&(_.boost=(_.boost||0)+p.boostValue),x.remove(),await de({[n+"Team"]:g,boostUsed:!0})})})}function O(g=null){var H,W;if(!(p.phase===n+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const x=p[n+"Team"],y=p["usedSubIds_"+n]||[],b=p.maxSubs||3;if(y.length>=b){u(`Maximum ${b} remplacements atteint`,"warning");return}const $=Object.entries(x).flatMap(([K,ee])=>(ee||[]).filter(ne=>ne.used).map(ne=>({...ne,_line:K}))),T=(p[n+"Subs"]||[]).filter(K=>!y.includes(K.cardId));if(!$.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!T.length){u("Aucun remplaçant disponible","warning");return}let _=Math.max(0,$.findIndex(K=>K.cardId===g));const S=((H=$[_])==null?void 0:H._line)||((W=$[_])==null?void 0:W.job);let L=Math.max(0,T.findIndex(K=>K.job===S)),j=!1;const F=document.createElement("div");F.id="pvp-sub-overlay",F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function R(){var ve,Ie,Le,Re,je,Oe;const K=$[_],ee=T[L],ne=Math.min(130,Math.round((window.innerWidth-90)/2)),fe=Math.round(ne*1.35),xe=Fe=>`background:rgba(255,255,255,0.12);border:none;color:${Fe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Fe?"default":"pointer"};flex-shrink:0`;F.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${b})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${xe(L===0)}" ${L===0?"disabled":""}>▲</button>
          <div>${ee?Ye({...ee,used:!1,boost:0},ne,fe):"<div>—</div>"}</div>
          <button id="pin-down" style="${xe(L>=T.length-1)}" ${L>=T.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${L+1}/${T.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${xe(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${K?Ye({...K,used:!1,boost:0},ne,fe):"<div>—</div>"}</div>
          <button id="pout-down" style="${xe(_>=$.length-1)}" ${_>=$.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${$.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ve=F.querySelector("#psub-close"))==null||ve.addEventListener("click",()=>F.remove()),(Ie=F.querySelector("#pout-up"))==null||Ie.addEventListener("click",()=>{_>0&&(_--,R())}),(Le=F.querySelector("#pout-down"))==null||Le.addEventListener("click",()=>{_<$.length-1&&(_++,R())}),(Re=F.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{L>0&&(L--,R())}),(je=F.querySelector("#pin-down"))==null||je.addEventListener("click",()=>{L<T.length-1&&(L++,R())});const he=(Fe,Ve,Ne,He)=>{const Ue=F.querySelector("#"+Fe);if(!Ue)return;let Je=0;Ue.addEventListener("touchstart",Ze=>{Je=Ze.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",Ze=>{const Qe=Ze.changedTouches[0].clientY-Je;if(Math.abs(Qe)<30)return;const ot=Ve();Qe<0&&ot<He-1?(Ne(ot+1),R()):Qe>0&&ot>0&&(Ne(ot-1),R())},{passive:!0})};he("pin-panel",()=>L,Fe=>L=Fe,T.length),he("pout-panel",()=>_,Fe=>_=Fe,$.length),(Oe=F.querySelector("#psub-confirm"))==null||Oe.addEventListener("click",async Fe=>{if(Fe.preventDefault(),Fe.stopPropagation(),j)return;j=!0;const Ve=$[_],Ne=T[L];if(!Ve||!Ne)return;const He=Ve._line,Ue=(x[He]||[]).findIndex(Qe=>Qe.cardId===Ve.cardId);if(Ue===-1){u("Erreur : joueur introuvable","error"),F.remove();return}const Je={...Ne,_line:He,position:Ve.position,used:!1,boost:0};x[He].splice(Ue,1,Je);const Ze=[...y,Ne.cardId];F.remove(),Z(Ve,Ne,async()=>{await de({[n+"Team"]:x,[f+"Team"]:p[f+"Team"],["usedSubIds_"+n]:Ze})})})}document.body.appendChild(F),R()}function Z(g,m,x){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const $=(S,L,j)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${L};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${j}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[S.job]||"#555"};border:3px solid ${L};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(S)?`<img src="${Pe(S)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(S.name||"").slice(0,12)}</div>
    </div>`;b.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${$(m,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${$(g,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(b);let T=!1;const _=()=>{T||(T=!0,b.remove(),setTimeout(()=>x(),50))};b.addEventListener("click",_),setTimeout(_,2200)}function ue(){var m;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",g.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[f+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(p[f+"Team"],p[f+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(g),(m=g.querySelector("#pvp-opp-close"))==null||m.addEventListener("click",()=>g.remove())}function me(){var y;const g=p.log||[],m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const x=b=>{var T,_,S;if(b.type==="duel"){const L=b.isGoal,j=b.homeScored&&n==="p1"||!b.homeScored&&L&&n==="p2",F=b.homeScored?"#FFD700":L?"#ff6b6b":"rgba(255,255,255,0.3)",R=L?j?"⚽ BUT !":"⚽ BUT adversaire !":(T=b.homePlayers)!=null&&T.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${L?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${F};margin-bottom:4px">
          <div style="font-size:9px;color:${F};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${R}</div>
          ${(_=b.homePlayers)!=null&&_.length?`<div style="margin-bottom:3px">${nt(b.homePlayers,"rgba(255,255,255,0.7)",b.homeTotal)}</div>`:""}
          ${(S=b.aiPlayers)!=null&&S.length?`<div style="opacity:0.7">${nt(b.aiPlayers,"#ff6b6b",b.aiTotal)}</div>`:""}
        </div>`}return b.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${b.outPlayer?Ye({...b.outPlayer,used:!0,_line:b.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${b.inPlayer?Ye({...b.inPlayer,_line:b.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${b.type==="goal"?"#FFD700":b.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${b.text||""}</div>
      </div>`};m.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${g.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...g].reverse().map(x).join("")}
      </div>`,document.body.appendChild(m),(y=m.querySelector("#pvp-hist-close"))==null||y.addEventListener("click",()=>m.remove())}async function X(){if(p.phase!==n+"-attack")return;const g=n==="p1"?"p2":"p1",m=(p.round||0)+1,x=[...p.log||[]];x.push({type:"info",text:`⏭️ ${p[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=De(p),b=qe(g),$=y||!b?"finished":g+"-attack";await de({["selected_"+n]:[],modifiers:{...p.modifiers,[n]:{}},pendingAttack:null,phase:$,attacker:g,round:m,log:x}),$==="finished"&&await q(p)}async function be(){const g=p[n+"Team"],m=!["GK","DEF","MIL","ATT"].some($=>(p[f+"Team"][$]||[]).some(T=>!T.used)),x=(p["selected_"+n]||[]).map($=>{const T=(g[$._role]||[]).find(R=>R.cardId===$.cardId)||$,_=m&&["GK","DEF"].includes($._role),S=g[$._role]||[],L=S.findIndex(R=>R.cardId===$.cardId),j=lt(S.length),F=L>=0?j[L]:T._col??1;return{...T,_line:$._role,_col:F,..._?{note_a:Math.max(1,Number(T.note_a)||0)}:{}}});if(!x.length)return;const y=Nt(x,p.modifiers[n]||{});oe(n,x.map($=>$.cardId)),x.forEach($=>{const T=(g[$._role]||[]).find(_=>_.cardId===$.cardId);T&&(T.used=!0)}),p["selected_"+n]=[],ye();const b=[...p.log||[]];if(m){const $=(p[n+"Score"]||0)+1,T=x.map(F=>({name:F.name,note:Ae(F,F._line||"ATT"),portrait:Pe(F),job:F.job}));b.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:T,homeTotal:y.total,aiTotal:0});const _=(p.round||0)+1,S=n==="p1"?"p2":"p1",L={...p,[n+"Team"]:g,[n+"Score"]:$},j=De(L);N.add(_),$e(T,$,p[f+"Score"]||0,!0,async()=>{await de({[n+"Team"]:g,[n+"Score"]:$,["selected_"+n]:[],modifiers:{...p.modifiers,[n]:{}},pendingAttack:null,phase:j?"finished":S+"-attack",attacker:S,round:_,log:b}),j&&await q({...p,[n+"Score"]:$})});return}b.push({type:"pending",text:`⚔️ ${p[n+"Name"]} attaque (${y.total})`}),await de({[n+"Team"]:g,[f+"Team"]:p[f+"Team"],pendingAttack:{...y,players:x,side:n},["selected_"+n]:[],modifiers:{...p.modifiers,[n]:{}},phase:f+"-defense",log:b})}async function ge(){const g=p[n+"Team"],m=(p["selected_"+n]||[]).map(K=>{const ee=(g[K._role]||[]).find(ve=>ve.cardId===K.cardId)||K,ne=g[K._role]||[],fe=ne.findIndex(ve=>ve.cardId===K.cardId),xe=lt(ne.length),he=fe>=0?xe[fe]:ee._col??1;return{...ee,_line:K._role,_col:he}}),x=Rt(m,p.modifiers[n]||{});oe(n,m.map(K=>K.cardId)),m.forEach(K=>{const ee=(g[K._role]||[]).find(ne=>ne.cardId===K.cardId);ee&&(ee.used=!0)}),p["selected_"+n]=[],ye();const y=Ot(p.pendingAttack.total,x.total,p.modifiers[n]||{}),b=p.pendingAttack.side,$=y==="attack"||(y==null?void 0:y.goal),T=b==="p1"?"p2":"p1",_=(p.round||0)+1,S=(p.pendingAttack.players||[]).map(K=>({name:K.name,note:Ae(K,K._line||"ATT"),portrait:Pe(K),job:K.job})),L=[...p.log||[]];L.push({type:"duel",isGoal:$,homeScored:$&&b===n,text:$?`⚽ BUT de ${p[b+"Name"]} ! (${p.pendingAttack.total} vs ${x.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${x.total})`,homePlayers:S,aiPlayers:m.map(K=>({name:K.name,note:Ae(K,K._line||"DEF"),portrait:Pe(K),job:K.job})),homeTotal:p.pendingAttack.total,aiTotal:x.total});const j=$?(p[b+"Score"]||0)+1:p[b+"Score"]||0,F={...p,[n+"Team"]:g,[b+"Score"]:j},R=De(F),H=R?"finished":T+"-attack",W=async()=>{await de({[n+"Team"]:g,[f+"Team"]:p[f+"Team"],[b+"Score"]:j,["selected_"+n]:[],modifiers:{...p.modifiers,[n]:{}},pendingAttack:null,phase:H,attacker:T,round:_,log:L}),(H==="finished"||R)&&await q({...p,[b+"Score"]:j})};if($){const K=b===n,ee=K?j:p[n+"Score"]||0,ne=K?p[f+"Score"]||0:j;N.add(_),$e(S,ee,ne,K,W)}else await W()}function Se(g){return["MIL","ATT"].some(m=>(g[m]||[]).some(x=>!x.used))}function Ce(g){return["GK","DEF","MIL","ATT"].some(m=>(g[m]||[]).some(x=>!x.used))}function Be(g){return Ce(g)&&!Se(g)}function qe(g){const m=p[g+"Team"],x=p[(g==="p1"?"p2":"p1")+"Team"];return!!(Se(m)||!Ce(x)&&Be(m))}function De(g){const m=["MIL","ATT"].some(L=>(g.p1Team[L]||[]).some(j=>!j.used)),x=["MIL","ATT"].some(L=>(g.p2Team[L]||[]).some(j=>!j.used)),y=Ce(g.p1Team),b=Ce(g.p2Team);return!m&&!(!b&&y)&&(!x&&!(!y&&b))}function M(g){const m=g.p1Score||0,x=g.p2Score||0;return m===x?null:m>x?A.home_id:A.away_id}async function q(g){try{const m=M(g),x=m?A.home_id===m?A.away_id:A.home_id:null,y=g.p1Score||0,b=g.p2Score||0;await E.from("matches").update({status:"finished",winner_id:m,home_score:y,away_score:b}).eq("id",i);const{data:$}=await E.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if($){await E.from("mini_league_matches").update({home_score:y,away_score:b,status:"finished"}).eq("id",$.id);const{data:T}=await E.from("mini_league_matches").select("id, status").eq("league_id",$.league_id).eq("matchday",$.matchday);if((T||[]).every(S=>S.status==="finished"||S.status==="bye")){const{data:S}=await E.from("mini_leagues").select("current_day,total_days").eq("id",$.league_id).single();if(S){const L=(S.current_day||0)+1,j=L>(S.total_days||0);await E.from("mini_leagues").update({current_day:j?S.total_days:L,status:j?"finished":"active"}).eq("id",$.league_id)}}}m&&x&&_i(m,x).catch(()=>{})}catch(m){console.error("[ML] finishMatch:",m)}}function w(){var b;if(I&&document.getElementById("pvp-end-overlay"))return;I=!0;const g=p[n+"Score"],m=p[f+"Score"],x=g>m,y=g===m;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${x?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${x?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${g} - ${m}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(b=document.getElementById("pvp-home"))==null||b.addEventListener("click",()=>{try{E.removeChannel(se)}catch{}We(e),d("mini-league",o?{openLeagueId:o}:{})})}ye()}const lr="/manager-wars/",cr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function pr(e,t,i){let a=0;const c=document.createElement("div");c.id="tutorial-overlay",c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const l=()=>{var n,f,h;const d=t[a],u=a===t.length-1,o=Math.round((a+1)/t.length*100);c.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${o}%;background:${d.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${d.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${d.title}</div>
          <div style="font-size:11px;color:#aaa">${a+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${d.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${lr}icons/${d.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${d.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${d.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${a>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${u?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${d.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${u?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,c.querySelectorAll("ul,ol").forEach(v=>{v.style.paddingLeft="20px",v.style.marginTop="6px",v.style.marginBottom="6px"}),c.querySelectorAll("li").forEach(v=>{v.style.marginBottom="4px"}),c.querySelectorAll("p").forEach(v=>{v.style.marginBottom="8px"}),(n=c.querySelector("#tuto-prev"))==null||n.addEventListener("click",()=>{a--,l()}),(f=c.querySelector("#tuto-next"))==null||f.addEventListener("click",()=>{u?s():(a++,l())}),(h=c.querySelector("#tuto-skip"))==null||h.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&s()})},s=async()=>{c.remove(),e!=null&&e.id&&await E.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(c),l()}async function ur(e,t,i){if(!e||e.tutorial_done)return;let a=[];const{data:c,error:l}=await E.rpc("get_tutorial_steps");if(!l&&(c==null?void 0:c.length)>0)a=c,console.log(`[Tutorial] RPC OK → ${a.length} étapes`);else{const{data:d,error:u}=await E.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!u&&(d==null?void 0:d.length)>0?(a=d,console.log(`[Tutorial] Direct OK → ${a.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${l==null?void 0:l.message}, Direct: ${u==null?void 0:u.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const s=a.length>0?a.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):cr;pr(e,s,()=>t("boosters"))}const fr={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Et(e,t){return t&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Hi(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Yt(e,t){const a=t?fr[t]||"#bbb":"#d0d0d0",c=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${a};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${c}</div>`}function Ui(e){const i=Xt(e);return i?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${i}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Vi(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function gr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Ai(e,t)}async function Ai(e,t){const{state:i,toast:a}=t,{data:c}=await E.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:l}=await E.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),s=(c||[]).filter(r=>r.seller_id!==i.profile.id),d=l||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${s.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
    </div>

    <!-- Onglets -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${d.length})</button>
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
  </div>`;let u="buy";const o=()=>{var r,p,I,z,C,U,D;return{name:(((r=document.getElementById("flt-name"))==null?void 0:r.value)||"").toLowerCase().trim(),club:(((p=document.getElementById("flt-club"))==null?void 0:p.value)||"").toLowerCase().trim(),country:(((I=document.getElementById("flt-country"))==null?void 0:I.value)||"").toLowerCase().trim(),job:((z=document.getElementById("flt-job"))==null?void 0:z.value)||"",rarity:((C=document.getElementById("flt-rarity"))==null?void 0:C.value)||"",note1:parseInt((U=document.getElementById("flt-note1"))==null?void 0:U.value)||0,note2:parseInt((D=document.getElementById("flt-note2"))==null?void 0:D.value)||0}};function n(r){const p=o();return r.filter(I=>{var ie,se;const z=(ie=I.card)==null?void 0:ie.player;if(!z)return!1;const C=`${z.firstname} ${z.surname_encoded}`.toLowerCase(),U=(((se=z.clubs)==null?void 0:se.encoded_name)||"").toLowerCase(),D=(z.country_code||"").toLowerCase(),N=Et(z,z.job),G=z.job2?Et(z,z.job2):0;return!(p.name&&!C.includes(p.name)||p.club&&!U.includes(p.club)||p.country&&!D.includes(p.country)||p.job&&z.job!==p.job||p.rarity&&z.rarity!==p.rarity||p.note1&&N<p.note1||p.note2&&G<p.note2)})}function f(r){var U,D,N;const p=(U=r.card)==null?void 0:U.player;if(!p)return"";const I=Et(p,p.job),z=p.job2?Et(p,p.job2):0,C=(i.profile.credits||0)>=r.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Hi(p.rarity)}
      ${Yt(I,p.job)}
      ${Yt(z,p.job2||null)}
      ${Ui(p.country_code)}
      ${Vi((D=p.clubs)==null?void 0:D.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.firstname} ${p.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((N=r.seller)==null?void 0:N.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${r.id}" ${C?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${C?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function h(r){var U,D,N;const p=(U=r.card)==null?void 0:U.player;if(!p)return"";const I=Et(p,p.job),z=p.job2?Et(p,p.job2):0,C=r.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${C?"opacity:0.7":""}">
      ${Hi(p.rarity)}
      ${Yt(I,p.job)}
      ${Yt(z,p.job2||null)}
      ${Ui(p.country_code)}
      ${Vi((D=p.clubs)==null?void 0:D.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.firstname} ${p.surname_encoded}</div>
        <div style="font-size:10px;color:${C?"#22c55e":"#999"};margin-top:1px">
          ${C?`✅ Vendu à ${((N=r.buyer)==null?void 0:N.pseudo)||"—"} · ${r.sold_at?new Date(r.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(r.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        ${C?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${r.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function v(){const r=document.getElementById("mkt-content"),p=document.getElementById("mkt-filters");if(r){if(p.style.display=u==="buy"?"flex":"none",u==="buy"){const I=n(s);r.innerHTML=I.length?I.map(f).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const I=d.filter(C=>C.status==="active").sort((C,U)=>new Date(U.listed_at)-new Date(C.listed_at)),z=d.filter(C=>C.status==="sold").sort((C,U)=>new Date(U.sold_at||U.listed_at)-new Date(C.sold_at||C.listed_at));r.innerHTML=(I.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${I.length})</div>`+I.map(h).join(""):"")+(z.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${z.length})</div>`+z.map(h).join(""):"")+(!I.length&&!z.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}r.querySelectorAll("[data-buy]").forEach(I=>I.addEventListener("click",()=>mr(I.dataset.buy,s,e,t))),r.querySelectorAll("[data-cancel]").forEach(I=>I.addEventListener("click",()=>yr(I.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{u=r.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(p=>{const I=p===r;p.style.background=I?"var(--green)":"#fff",p.style.color=I?"#fff":"var(--gray-600)",p.style.borderColor=I?"var(--green)":"var(--gray-200)"}),v()})});let A;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(r=>{var p;(p=document.getElementById(r))==null||p.addEventListener("input",()=>{clearTimeout(A),A=setTimeout(v,250)})}),v()}async function mr(e,t,i,a){const{state:c,toast:l,refreshProfile:s}=a,d=t.find(n=>n.id===e);if(!d)return;const u=d.price;if((c.profile.credits||0)<u){l("Crédits insuffisants","error");return}xr(d,async()=>{const{error:n}=await E.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(n){l("Erreur achat : "+n.message,"error");return}await s();const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),l("✅ Carte achetée !","success"),await Ai(i,a)})}function xr(e,t){var s;const i=(s=e.card)==null?void 0:s.player,a=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",c.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${a} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(c);const l=d=>{c.remove(),d&&t()};c.querySelector("#buy-cancel").addEventListener("click",()=>l(!1)),c.querySelector("#buy-ok").addEventListener("click",()=>l(!0)),c.addEventListener("click",d=>{d.target===c&&l(!1)})}async function yr(e,t,i){const{toast:a}=i,{data:c}=await E.from("market_listings").select("card_id").eq("id",e).single();if(await E.from("market_listings").update({status:"cancelled"}).eq("id",e),c!=null&&c.card_id){const{count:l}=await E.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",c.card_id).eq("status","active");l||await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id)}a("Annonce retirée","success"),Ai(t,i)}async function br(e,{state:t,navigate:i,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await E.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${c&&c.length>0?c.map((l,s)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${l.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${s+1}</div>
            <div style="flex:1">
              <div style="font-weight:700">${l.pseudo}</div>
              <div style="font-size:11px;color:var(--gray-600)">${l.club_name}</div>
            </div>
            <div style="text-align:right;font-size:12px">
              <div>🥇${l.trophies_top1} 🥈${l.trophies_top2} 🥉${l.trophies_top3}</div>
              <div style="color:var(--gray-600)">${l.wins} V</div>
            </div>
          </div>
        `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}
      </div>
    </div>
  </div>
  `}async function hr(e,{state:t,navigate:i,toast:a}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await E.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(l||[]).filter(n=>n.status==="finished"),u=(l||[]).filter(n=>n.status==="in_progress");function o(n){const f=n.home_id===c.id;f?n.home_score:n.away_score,f?n.away_score:n.home_score;const h=n.winner_id===c.id,v=n.home_score===n.away_score&&n.status==="finished",A=n.status!=="finished"?"…":v?"N":h?"V":"D",r=n.status!=="finished"||v?"#888":h?"#1A6B3C":"#c0392b";let p=s[n.mode]||n.mode;n.away_id===null&&!p.startsWith("IA")&&(p="IA");const z=n.home_id===c.id?n.away:n.home;let C;n.away_id===null?C=p:z?C=`${z.club_name||z.pseudo} (${z.pseudo})`:C="Adversaire";let U="";n.status==="in_progress"&&Date.now()-new Date(n.created_at).getTime()>3600*1e3&&(U=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const D=new Date(n.created_at),N=D.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+D.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),G=n.status==="finished"?`${n.home_score} - ${n.away_score}`:`${n.home_score||0} - ${n.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${C}${U}</div>
        <div style="font-size:11px;color:var(--gray-600)">${p} · ${N}${n.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${G}</span>
        <span style="background:${r};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${A}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(l||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${u.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${u.map(o).join("")}
        </div>`:""}

      ${d.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${d.map(o).join("")}
        </div>`:""}

      ${(l||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}zn(Ln);const Ge={user:null,profile:null,page:"home",params:{}};function Tt(e,t="info",i=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},i))}function vr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function mi(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ct(){if(!Ge.user)return;const{data:e}=await E.from("users").select("*").eq("id",Ge.user.id).single();e&&(Ge.profile=e)}function Ft(e,t={}){Ge.page=e,Ge.params=t,Tn()}async function Tn(){var a,c,l,s;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===Ge.page)});const t=document.getElementById("nav-credits");t&&Ge.profile&&(t.textContent=`💰 ${(Ge.profile.credits||0).toLocaleString("fr")}`);const i={state:Ge,navigate:Ft,toast:Tt,openModal:vr,closeModal:mi,refreshProfile:Ct};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Ge.page){case"home":await Ci(e,i);break;case"collection":await Xn(e,i);break;case"decks":await li(e,i);break;case"boosters":await uo(e,i);break;case"match":{const d=Ge.params&&Ge.params.matchMode||"vs_ai_easy";d==="random"?await wn(e,i):d==="friend"?await Vo(e,i,(a=Ge.params)==null?void 0:a.friendId,(c=Ge.params)==null?void 0:c.friendName):d==="mini-league"?await Oi(e,i,(l=Ge.params)==null?void 0:l.mlMatchId,(s=Ge.params)==null?void 0:s.leagueId):await Ao(e,i);break}case"market":await gr(e,i);break;case"rankings":await br(e,i);break;case"matches":await hr(e,i);break;case"friends":await Bn(e,i);break;case"mini-league":await Wo(e,i);break;case"match-mini-league":{const d=Ge.params||{};await Oi(e,i,d.mlMatchId,d.leagueId);break}default:await Ci(e,i)}}function wr(){var a;const e=document.getElementById("app"),t=Ge.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(c=>{c.addEventListener("click",l=>{l.preventDefault(),Ft(c.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ft("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ft("boosters")),(a=document.getElementById("journal-btn"))==null||a.addEventListener("click",()=>_r())}async function _r(){const{data:e}=await E.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(a=>{const c=new Date(a.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${a.image_url?`<img src="${a.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${c}</div>
      <div style="font-size:15px;font-weight:900;margin-bottom:6px">${a.title}</div>
      <div style="font-size:13px;color:#444;line-height:1.6;white-space:pre-line">${a.description}</div>
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",a=>{a.target===t&&t.remove()})}async function $r(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&mi()}),document.getElementById("modal-close").addEventListener("click",mi);const{data:{session:e}}=await E.auth.getSession();if(!e){Ki(),Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Tt});return}Ge.user=e.user,await Ct(),Ki();try{const{data:i}=await E.from("formation_links_overrides").select("formation, links"),a={};(i||[]).forEach(c=>{a[c.formation]=c.links}),Sn(a)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!Ge.profile){Mn(document.getElementById("app"),{state:Ge,navigate:async()=>{await Ct(),si()},toast:Tt,refreshProfile:Ct});return}const t=Array.isArray(Ge.profile.pending_boosters)?Ge.profile.pending_boosters:[];if(!Ge.profile.onboarding_done&&t.length>0){$o(document.getElementById("app"),{state:Ge,navigate:()=>si(),toast:Tt,refreshProfile:Ct});return}si(),setTimeout(()=>ur(Ge.profile,Ft,Tt),800),E.auth.onAuthStateChange(async(i,a)=>{i==="SIGNED_OUT"&&(Ge.user=null,Ge.profile=null,document.getElementById("app").innerHTML="",Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Tt}))})}function kr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function oi(){const e=document.getElementById("app");e&&(e.style.height=kr()+"px")}window.addEventListener("resize",oi);window.addEventListener("orientationchange",()=>setTimeout(oi,150));window.visualViewport&&window.visualViewport.addEventListener("resize",oi);function si(){const e=()=>{var i;(i=Ge.user)!=null&&i.id&&E.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",Ge.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",oi(),wr(),Tn()}function Ki(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function An(e){var a;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(a=document.getElementById("boot-retry"))==null||a.addEventListener("click",()=>window.location.reload())}$r().catch(e=>{console.error("Échec du démarrage:",e),An()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&An("Le serveur met trop de temps à répondre.")},12e3);
